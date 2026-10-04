# Prem | UI Developer Portfolio (React + TypeScript)

Converted from the original static HTML/CSS/JS site into a Vite + React + TypeScript + Tailwind project.

## What changed
- Each section (`Header`, `Hero`, `Experience`, `Education`, `Showcase`, `Contact`, `Footer`) is now its own component in `src/components/`.
- Repeated data (experience, education, project cards) moved into `src/data/` so you can edit content without touching markup.
- `portfolio.js` logic was split into React hooks:
  - `useDarkMode` — reads/writes `localStorage` + system preference, toggles the `dark` class on `<html>`.
  - `useActiveSection` — highlights the nav link for the section currently in view.
  - Smooth scrolling and the mobile menu open/close are handled directly in `Header.jsx`.
- `portfolio.css` became `src/index.css` (Tailwind directives + your custom rules).
- Material Symbols and Google Fonts are still loaded via `<link>` tags in `index.html`, same as before.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build
```

## Images

Add your images to `public/images/` using these exact filenames (referenced in `src/data/projects.js` and `Hero.jsx`):

- `pic.jpg` — hero profile photo
- `showcase_thumb1.png` — Callidus Car Care
- `showcase_thumb2.png` — RRI Hitech Radiology
- `showcase_thumb3.png` — LifeVR
- `designshift.png` — Design Shift

## Notes
- Tailwind is configured via `tailwind.config.js` / `postcss.config.js` (no more CDN `<script>` tag) — this is the standard, production-ready setup. These two stay plain `.js` since Tailwind/PostCSS don't load `.ts` config files without extra tooling.
- `darkMode: 'class'` is preserved so the toggle behavior matches the original.
- Data shapes (`ExperienceItem`, `EducationItem`, `Project`) are defined in `src/data/*.ts` and consumed by their matching components, so editing content is still type-checked.
- `npm run build` runs `tsc -b` first, so type errors will fail the build — run `npm run dev` while iterating for faster feedback without a full typecheck.
- If you'd rather use Next.js or Create React App instead of Vite, the components in `src/components/` can be copied over largely as-is.
