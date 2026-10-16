# BeerMileApp 🍺🏃

Train for the Beer Mile with a custom training profile, adaptive plans, and lap tracking.

**Stack:** Next.js 15 + TypeScript + Tailwind CSS (App Router, `src/` dir)

## Features

- **Custom Training Profile** (`/profile`) — name, age, experience, mile time, chug speed, beer preference, weekly volume, goal time. Saved to localStorage. Includes Beer Mile estimate.
- **Adaptive Training Plan** (`/training`) — beginner / intermediate / advanced weekly schedule with runs, intervals, chug practice, and race simulations.
- **Run Logger** (`/log`) — log Beer Miles lap-by-lap (4× run + chug) with auto total, plus training runs, chug practice, intervals. History with delete, stored locally.
- **Home** (`/`) — overview + official rules summary.

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

- Data is stored in browser localStorage (`beermile.profile`, `beermile.logs`) — no backend.
- 21+ only. Drink responsibly. For beer workouts, substitute water/NA if underage or preferring non-alcoholic training.
