<div align="center">

<img src="assets/logo-mark.svg" width="72" alt="Business Analyzer" />

# Business Analyzer — Live Demo

**AI code review, team analytics and production-error triage for GitLab, Jira and Sentry — self-hosted, inside your own network.**

### [▶ Open the live demo](https://javiddeveloper.github.io/Business-Analyzer-DEMO/)

No sign-up, no install. Everything you see runs on built-in sample data in your browser.

</div>

---

## What you can try

| Page | Link | What to look at |
|---|---|---|
| Overview | [#home](https://javiddeveloper.github.io/Business-Analyzer-DEMO/#home) | Team at a glance — open work, overdue tasks, MRs without logged time, scores |
| Code review | [#review](https://javiddeveloper.github.io/Business-Analyzer-DEMO/#review) | Open MR !107 or !101 to watch a review stream live; !109 for findings with a concrete failure scenario |
| Team | [#devs](https://javiddeveloper.github.io/Business-Analyzer-DEMO/#devs) | Per-person score, Jira tasks, delays and logged hours; switch project to see a separate team |
| Sentry | [#sentry](https://javiddeveloper.github.io/Business-Analyzer-DEMO/#sentry) | Regressed and escalating errors, stack traces, breadcrumbs, one-click Jira task |
| Settings | [#settings](https://javiddeveloper.github.io/Business-Analyzer-DEMO/#settings) | Connections, AI engines with a connection test, review behaviour, working days, backups, audit log |
| About | [#about](https://javiddeveloper.github.io/Business-Analyzer-DEMO/#about) | On-premise deployment |

**Demo scenarios** — see how the product behaves in other situations:

- [Fresh install](https://javiddeveloper.github.io/Business-Analyzer-DEMO/?scenario=fresh#settings) — nothing configured yet
- [Half configured](https://javiddeveloper.github.io/Business-Analyzer-DEMO/?scenario=partial#settings) — missing tokens, an engine without a key
- [Services down](https://javiddeveloper.github.io/Business-Analyzer-DEMO/?scenario=errors#settings) — GitLab/Jira timeouts, disk errors

## Screenshots

| | |
|---|---|
| ![Overview](screenshots/home.png) | ![Code review](screenshots/review.png) |
| ![Team](screenshots/devs.png) | ![Sentry](screenshots/sentry.png) |
| ![Settings](screenshots/settings.png) | ![About](screenshots/about.png) |

## Highlights

- **Agent code review** — an AI agent reads the whole project, not just the diff: callers, tests and the previous implementation of the same feature.
- **Follows your team's own review process** — reads your review guide and report template and writes the report exactly in that format, on the MR's own branch.
- **Live output** — watch the review as it happens.
- **Engine fallback** — if one AI engine is out of quota, the review continues on the next one and says so.
- **Honest accuracy** — the team votes 👍/👎 on findings; the dashboard measures real precision.
- **Sentry → Jira in one click**, with the full error context.
- **Self-hosted** — code and data never leave your network; works with your own AI gateway.

## Get it for your organization

This repository contains only the public demo. The product itself is commercial and is deployed on your own servers, with your security and access requirements.

- 📧 [javiddeveloper@gmail.com](mailto:javiddeveloper@gmail.com?subject=Business%20Analyzer)
- 💼 [LinkedIn — Javid Sattar](https://www.linkedin.com/in/javid-sattar/)

---

<div dir="rtl">

## نسخه‌ی دموی Business Analyzer

ریویوی هوشمند کد، تحلیل عملکرد تیم و پیگیری خطاهای production روی GitLab، Jira و Sentry — روی سرور خود سازمان.

**[▶ باز کردن دموی آنلاین](https://javiddeveloper.github.io/Business-Analyzer-DEMO/)** — بدون ثبت‌نام و نصب؛ همه‌چیز با داده‌ی نمونه در مرورگر اجرا می‌شود.

این مخزن فقط نسخه‌ی نمایشی است. خود محصول تجاری است و روی زیرساخت سازمان شما، با رعایت کامل مسائل امنیتی و دسترسی‌ها، نصب می‌شود. برای استقرار در سازمان: [javiddeveloper@gmail.com](mailto:javiddeveloper@gmail.com?subject=Business%20Analyzer)

</div>

---

© Javid Sattar. All rights reserved. The demo is provided for evaluation only.
