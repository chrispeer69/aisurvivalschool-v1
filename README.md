# AI Survival School

Marketing site for AI Survival School — teaching small business owners and operators how to use AI before AI replaces them.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript strict
- Tailwind CSS 3
- Resend (form email)
- Deployed on Vercel

## Local dev
```
pnpm install
pnpm dev
```

## Build / verify
```
pnpm typecheck
pnpm build
```

## Env
See `.env.example`. Set the same values in Vercel.

## Pages
- `/` — home
- `/workshops` — in-person business workshops
- `/cohorts` — 12-week online cohort
- `/course` — self-paced course (pre-launch)
- `/about` — Chris's story
- `/resources` — newsletter, YouTube, free downloads
- `/contact` — general inquiry
- `/privacy`, `/terms` — boilerplate

## Forms
All form posts route through `/api/inquiry`, `/api/waitlist`, `/api/contact` and forward to Resend, with the recipient pulled from `INQUIRY_TO_EMAIL`. If `RESEND_API_KEY` is unset the API logs the submission and returns success — useful for local dev.
