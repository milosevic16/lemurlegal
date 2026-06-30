# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
npm run typecheck  # vue-tsc -b (effects files are @ts-nocheck; legacy template attrs not strict-checked)

python3 tools/extract.py   # regenerate views/styles/fonts/pages.ts from the source HTML
```

There is no test suite and no linter configured. `LL_SRC` env var overrides the source HTML directory used by `extract.py` (default: `../projects/lemurlegal`).

## The core fact about this repo: most of `src/` is generated

This is a Vite + Vue 3 (TS) + Tailwind rebuild of the Lemur Legal marketing site, ported 1:1 from 12 self-contained "Standalone" HTML exports. `tools/extract.py` decodes those exports and **emits** the following — editing them directly is almost always wrong because the next `extract.py` run overwrites them:

- `src/views/*.vue` — one per page (`<template>` = original `<main>` markup; `<style scoped>` = that page's content CSS)
- `src/views/*.effects.ts` — the original page script, marked `// @ts-nocheck` and `// AUTO-GENERATED`
- `src/styles/fonts.css`, `src/styles/base.css`
- `src/pages.ts` — route metadata table

**To change page content, styles, or effects, edit `tools/extract.py` and rerun it**, not the generated files. Hand-maintained source lives in `src/components/`, `src/composables/`, `src/router.ts`, `src/App.vue`, `src/main.ts`, `tailwind.config.js`.

When adding/removing a page, three lists must stay in sync: `FILES` in `tools/extract.py`, `VIEWS` in `src/router.ts`, and the generated `src/pages.ts`.

## Architecture

**SiteChrome persistence.** `App.vue` → `SiteChrome` (Masthead/Wire/Footer, persists across routes) → `<router-view>`. Routes are lazy-loaded by view name. `/about` redirects to `/#founder`; unknown paths redirect to `/`.

**SPA link interception.** Generated markup keeps plain `<a href="/...">` links. A global click listener in `App.vue` converts same-origin absolute-path clicks into `router.push` navigations (skips modified clicks, `target`, protocol-relative, `mailto:`/`tel:`/external).

**Effect lifecycle (`src/composables/tracker.ts`).** The original standalone scripts attach rAF loops, timers, observers, listeners, and Web Animations directly to the DOM with no teardown — which would leak and stack on every route mount in an SPA. Each `*.effects.ts` module shadows the globals (`requestAnimationFrame`, `setTimeout`, `IntersectionObserver`, …) with tracked versions, and the extractor rewrites `el.addEventListener(` → `__fx.on(el,` and `el.animate(` → `__fx.anim(el,`. `initEffects()` returns `__fx.dispose`, which the view calls in `onUnmounted` to cancel everything cleanly. If you touch effect code, preserve this routing through `__fx`.

**Per-view theming (`src/composables/useTheme.ts`).** Different pages use different design tokens (e.g. the blog uses Spectral/Hanken; the rest use IBM Plex Mono) and palettes. Each view, on mount, sets `document.title` and calls `useRootVars(ROOT_VARS)` + `useTheme(aesthetic, signalPct, accent)` to write `:root` custom properties as inline styles on `documentElement`. This is intentional: applying tokens per-view at runtime prevents the collisions that merged global `:root` blocks would cause. `useTheme` takes an `Aesthetic` (Editorial/Live/Redacted) and `Accent` (Baltic/Thermal/Nordic).

**CSS scoping strategy (in `extract.py`).** Chrome selectors (shared header/footer/wire primitives) are emitted **global** into `base.css`; everything else is scoped per-view into that view's `<style scoped>`, deduped within the page. This is why pages with identical class names don't collide. `@media` blocks are split so chrome rules stay global while content rules get scoped.

**Tailwind.** Preflight is **off** — the ported handcrafted CSS provides the reset. Design tokens in `tailwind.config.js` map to the CSS custom properties. Use Tailwind utilities for new layout; keep the bespoke CSS for existing sections.

## Deployment

Firebase Hosting (the user is signed into the Firebase CLI; see `firebase-debug.log`). `firebase.json`/`.firebaserc` are not yet present — `firebase init hosting` would point at the `dist/` build output. The Firebase MCP tools and `firebase` CLI are available for deploy/config work.
