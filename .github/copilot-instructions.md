# BeerMileApp — Copilot Instructions

Beer Mile training: quiz → personalised 12-week plan. Next.js 15 + TypeScript + Tailwind CSS (App Router, `src/` dir). Simple dark old-school theme.

## Project Structure
- `src/app/page.tsx` — Home, quiz prompt only
- `src/app/layout.tsx` — Simple centered nav (home/quiz/my plan), footer
- `src/app/quiz/page.tsx` — 7-question quiz, one per page, localStorage `beermile.quiz`
- `src/app/training/page.tsx` — Personalised 12-week plan from quiz, one week at a time (internal starter/steady/iron bases, never labeled to users)
- `src/lib/quiz.ts` — QUIZ (7 Qs), scoring, result
- `src/lib/plans.ts` — 12-week starter/steady/iron plans (CHUG/GUT/JOG/SIM sessions)
- `src/app/globals.css` — Plain dark theme (old-box, old-btn, old-link, quiz-opt)

## Build & Run
- Use `.` as working directory.
- `npm install` — install deps
- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — static export to `out/` (must pass with no type errors)
- `npm run lint` — lint
- Dev task: `Next.js: dev` (`npm run dev`)
- Static hosting: `output: "export"` + `trailingSlash` + `images.unoptimized`; deploy `out/` via `.github/workflows/deploy-pages.yml` (`NEXT_BASE_PATH=/BeerMileApp` for project sites)

## Conventions
- Client components (`"use client"`) for quiz/training pages (localStorage quiz result).
- Keep communication concise, no verbose output dumps.
- No extra folders beyond project root except `.vscode/` for tasks.
- No external media/links unless requested. Placeholders must be labeled.
- Quiz result stays in browser localStorage (`beermile.quiz`) — no backend/auth.
- Chug-first: plans prioritize sculling + keep-it-down over running capacity.
- Max 1 beer/NA sim per week, 21+ only, water always works. Drink responsibly messaging in UI.
- Never show beginner/intermediate/advanced labels to users — personalised titles only.
- Simple dark old-school theme. No modern AI styles, no gradients/shadows, no blink/marquee.
- Package name is `beermileapp` (lowercase, npm restriction — folder is BeerMileApp).

## Status
- [x] Verify copilot-instructions.md created
- [x] Clarify requirements (Web App, Next.js+TS, custom training profile)
- [x] Scaffold project (manual due to npm capital-letter restriction)
- [x] Customize for training profiles
- [x] Install extensions — none needed, skipped
- [x] Compile — `npm install` + `npm run build` passed
- [x] Create and run task — `Next.js: dev` running
- [x] README.md exists and current
- [x] Documentation complete
