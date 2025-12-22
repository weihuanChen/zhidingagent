# Repository Guidelines

## Project Structure & Module Organization
- App Router with typed components lives in `app/` (e.g., `app/page.tsx`, route folders like `app/about`). Shared styles sit in `app/globals.css`.
- Reusable UI and section blocks are in `components/` (`components/ui` for primitives such as buttons; feature sections like `hero.tsx`, `case-studies.tsx`).
- Shared helpers and static data reside in `lib/` (e.g., `lib/utils.ts` exposes `cn` for Tailwind class merging).
- Static assets are stored under `public/`. Framework and tooling configs live at the repo root (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`).
- Path alias `@/*` maps to the project root; prefer it over long relative imports.

## Build, Test, and Development Commands
- `npm run dev` — start the Next.js dev server at `localhost:3000`.
- `npm run lint` — run ESLint with `next/core-web-vitals` and TypeScript rules.
- `npm run build` — create the production build.
- `npm run start` — serve the production build locally.  
Use `npm` for consistency with the committed `package-lock.json` (pnpm/bun/yarn also work if kept in sync).

## Coding Style & Naming Conventions
- TypeScript-first, strict mode enabled. Prefer explicit props typing and stable component signatures.
- Components, hooks, and context providers use `PascalCase`; utility functions and files use `camelCase`/`kebab-case` (`ai-ready-section.tsx`).
- JSX style follows the existing convention: double quotes for strings, no semicolons, trailing commas where Prettier would place them.
- Tailwind CSS via `@tailwindcss/postcss` and `cn` helper; keep class lists readable (group by layout/spacing/visual). Co-locate route-specific styles with their component when possible.

## Testing Guidelines
- No automated tests are present yet. At minimum, run `npm run lint` before committing.
- For risky UI or data changes, add lightweight component tests (Vitest/RTL) or Playwright smoke checks under `tests/` and wire them into `npm test` (not yet defined).
- Manual checklist: verify key routes load (`/`, `/about`, `/services`, `/case`, `/insights`, `/contact`), and static assets resolve from `public/`.

## Commit & Pull Request Guidelines
- Current history uses plain, descriptive messages; follow an imperative style (`Add hero CTA copy`, `Fix header nav spacing`). Include scope if helpful.
- PRs should describe what changed, why, and how to verify (commands run, pages checked). Link issues/tickets when available; add before/after screenshots or clips for UI updates.
- Keep diffs focused; prefer small, reviewable PRs. Update documentation (this file, README) when altering workflows or structure.

## Security & Configuration Tips
- Do not commit secrets; keep API keys in environment variables (`.env.local`, not tracked). Provide `.env.example` if new variables are introduced.
- When adding dependencies, prefer audited sources and remove unused packages to keep bundle size lean.
