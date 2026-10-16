# BeerMileApp — Copilot Instructions

Web App for Beer Mile training with custom user training profiles. Next.js 15 + TypeScript + Tailwind CSS (App Router, `src/` dir).

## Project Structure
- `src/app/page.tsx` — Home, hero + rules summary
- `src/app/layout.tsx` — Header nav (Home/Profile/Training/Log), footer
- `src/app/profile/page.tsx` — Custom Training Profile form, localStorage, Beer Mile estimate
- `src/app/training/page.tsx` — Adaptive plan by experience (beginner/intermediate/advanced)
- `src/app/log/page.tsx` — Beer Mile lap logger (4x run+chug) + training runs, history
- `src/lib/types.ts` — TrainingProfile, WorkoutLog, LapEntry, time helpers
- `src/lib/storage.ts` — localStorage load/save, keys `beermile.profile`, `beermile.logs`
- `src/app/globals.css` — Tailwind + theme

## Build & Run
- Use `.` as working directory.
- `npm install` — install deps
- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — static export to `out/` (must pass with no type errors)
- `npm run lint` — lint
- Dev task: `Next.js: dev` (`npm run dev`)
- Static hosting: `output: "export"` + `trailingSlash` + `images.unoptimized`; deploy `out/` via `.github/workflows/deploy-pages.yml` (`NEXT_BASE_PATH=/BeerMileApp` for project sites)

## Conventions
- Client components (`"use client"`) for profile/training/log pages (localStorage).
- Keep communication concise, no verbose output dumps.
- No extra folders beyond project root except `.vscode/` for tasks.
- No external media/links unless requested. Placeholders must be labeled.
- Data stays in browser localStorage — no backend/auth yet.
- 21+ only content. Drink responsibly messaging in UI.
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
