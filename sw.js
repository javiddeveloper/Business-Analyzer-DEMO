// The dashboard's service worker: enough to install it as an app and to open
// it without a network, nothing that could show stale data.
//   - /api/ and the live event stream are never touched: always the network.
//   - The page itself: network first, so every fix shows on the next open;
//     the last copy is kept only for when the network is down.
//   - Fonts and icons: cache first; they change only with their names.
// Paths are relative to this file, so the same worker serves the server (at
// /) and the static demo (in a GitHub Pages sub-folder).
const CACHE = 'ba-shell-v1';
const SCOPE = new URL('./', self.location).pathname;
const SHELL = ['./', 'pwa/icon-192.png', 'pwa/icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL).catch(() => {})).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('ba-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const rel = url.pathname.startsWith(SCOPE) ? url.pathname.slice(SCOPE.length) : url.pathname;
  if (rel.startsWith('api/') || rel.startsWith('setup') || req.headers.get('accept') === 'text/event-stream') return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok && !res.redirected) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./', copy)); }
          return res;
        })
        .catch(() => caches.match('./').then((hit) => hit || Response.error())),
    );
    return;
  }

  if (/^(?:public\/)?(?:fonts|pwa)\//.test(rel)) {
    event.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      })),
    );
  }
});
