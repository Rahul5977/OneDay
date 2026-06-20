# Ascent — DSA Placement Tracker (React)

A placement-prep tracker for an ~85-day Data-Structures & Algorithms campaign:
14 core phases plus a 7-phase Dynamic-Programming + Strings extension.
**381 curated problems** (~4.5 per day) sourced from the **LeetCode Top-150** and
**GfG-160** sheets plus harder same-topic LeetCode problems — every item links to
**LeetCode** or **GeeksforGeeks** (no paid platforms).

Rebuilt from the original single-file vanilla-JS app into a component-based React + Vite project.

## Features
- **Dashboard** — completion ring, pace curve vs. target, activity heatmap, difficulty
  donut, source breakdown, and per-phase progress.
- **The Plan** — every day expandable into its problems; check them off, add notes,
  add your own problems, filter (core / extension / unsolved), search, and insert
  catch-up days that automatically push later dates.
- **Contests** — log weekly contests and watch your cumulative rating-Δ trajectory.
- **Deploy** — export/import a JSON backup, reset, and build/deploy instructions.
- Progress persists to `localStorage` (with an in-memory fallback in sandboxed previews).

## Develop
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & deploy
```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```
`vite.config.js` uses `base: './'`, so the `dist/` output works on GitHub Pages,
Netlify/Vercel, or straight off the filesystem.

## Curriculum data
`src/data/plan.js` exports `PLAN`. Each problem is a tuple:
`[title, source ("LC" | "GFG"), difficulty ("E" | "M" | "H"), slug]`.
- `LC` → `leetcode.com/problems/<slug>/`
- `GFG` → GeeksforGeeks search by title.

Titles starting with `↻`, `🏔`, or `🛟` are revision prompts, not linked problems.

The original single-file version is preserved at `legacy/ascent-legacy.html`.
