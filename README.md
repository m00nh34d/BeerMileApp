# Beer Mile Training

Quiz → personalised 12-week Beer Mile plan. Simple dark old-school site, static, no backend.

**Stack:** Next.js 15 + TypeScript + Tailwind CSS (App Router, `src/` dir)

## Features

- **Home** (`/`) — complete the quiz to get your training plan
- **Quiz** (`/quiz`) — 7 questions, one per page, saved to localStorage (`beermile.quiz`)
- **My Plan** (`/training`) — personalised 12-week plan from quiz, one week shown at a time (internal starter/steady/iron bases, never labeled to users)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — start dev server
- `npm run build` — static export to `out/` (for GitHub Pages)
- `npm run lint` — lint

## Deploy (GitHub Pages, static — no backend)

- `next.config.mjs` uses `output: "export"` + `trailingSlash` + `images.unoptimized`.
- Push to `main` triggers `.github/workflows/deploy-pages.yml`, which builds with `NEXT_BASE_PATH=/BeerMileApp` and publishes `out/` with `.nojekyll`.
- For a user/org root site or custom domain, set `NEXT_BASE_PATH` to empty in the workflow.
- Local preview of static output: `npx serve out` (do not use `next start` with `output: export`).

## Notes

- Quiz result stored in browser localStorage (`beermile.quiz`) — no backend.
- 21+ only for alcohol. Max 1 beer session/week in plans; water/NA trains same skills. Drink responsibly, stop if sick, never drive after drinking.
