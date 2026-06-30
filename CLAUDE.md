# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
npm run typecheck  # vue-tsc -b (effects files are @ts-nocheck; legacy template attrs not strict-checked)
```

There is no test suite and no linter configured.

## The core fact about this repo: `src/` is the source of truth — do NOT run `extract.py`

This is a Vite + Vue 3 (TS) + Tailwind rebuild of the Lemur Legal marketing site, originally ported 1:1 from 12 self-contained "Standalone" HTML exports by `tools/extract.py`. That extractor decoded the exports and emitted, in a **one-time** generation:

- `src/views/*.vue` — one per page (`<template>` = original `<main>` markup; `<style scoped>` = that page's content CSS)
- `src/views/*.effects.ts` — the original page script, marked `// @ts-nocheck`
- `src/styles/fonts.css`, `src/styles/base.css`
- `src/pages.ts` — route metadata table

**Edit these files in `src/` directly. Do not run `extract.py`.** The original source HTML (`../projects/lemurlegal`) is no longer present and Python isn't installed in this environment, so the extractor cannot run anyway — and if it could, it would clobber the hand-made changes that now live in these files (restored Regulatory Compliance page markup, sector colors, header fixes, route animation, …) and reintroduce bugs (the Regulatory Compliance standalone has no `<main>`, so regeneration emits a blank page). `tools/extract.py` is retained only as historical record of how the tree was first built; treat `src/` as authoritative.

## Architecture

**SiteChrome persistence.** `App.vue` → `SiteChrome` (Masthead/Wire/Footer, persists across routes) → `<router-view>`. Routes are lazy-loaded by view name. `/about` redirects to `/#founder`; unknown paths redirect to `/`.

**SPA link interception.** Generated markup keeps plain `<a href="/...">` links. A global click listener in `App.vue` converts same-origin absolute-path clicks into `router.push` navigations (skips modified clicks, `target`, protocol-relative, `mailto:`/`tel:`/external).

**Effect lifecycle (`src/composables/tracker.ts`).** The original standalone scripts attach rAF loops, timers, observers, listeners, and Web Animations directly to the DOM with no teardown — which would leak and stack on every route mount in an SPA. Each `*.effects.ts` module shadows the globals (`requestAnimationFrame`, `setTimeout`, `IntersectionObserver`, …) with tracked versions, and the extractor rewrites `el.addEventListener(` → `__fx.on(el,` and `el.animate(` → `__fx.anim(el,`. `initEffects()` returns `__fx.dispose`, which the view calls in `onUnmounted` to cancel everything cleanly. If you touch effect code, preserve this routing through `__fx`.

**Per-view theming (`src/composables/useTheme.ts`).** Different pages use different design tokens (e.g. the blog uses Spectral/Hanken; the rest use IBM Plex Mono) and palettes. Each view, on mount, sets `document.title` and calls `useRootVars(ROOT_VARS)` + `useTheme(aesthetic, signalPct, accent)` to write `:root` custom properties as inline styles on `documentElement`. This is intentional: applying tokens per-view at runtime prevents the collisions that merged global `:root` blocks would cause. `useTheme` takes an `Aesthetic` (Editorial/Live/Redacted) and `Accent` (Baltic/Thermal/Nordic).

**CSS scoping strategy (how the CSS is laid out).** Chrome selectors (shared header/footer/wire primitives) live **global** in `base.css`; everything else is scoped per-view in that view's `<style scoped>`. This is why pages with identical class names don't collide, and why shared-header tweaks (e.g. the `.status` rule) go in `base.css` while page-specific styles go in the view. `@media` blocks follow the same split — chrome rules global, content rules scoped.

**Tailwind.** Preflight is **off** — the ported handcrafted CSS provides the reset. Design tokens in `tailwind.config.js` map to the CSS custom properties. Use Tailwind utilities for new layout; keep the bespoke CSS for existing sections.

## Deployment

Firebase Hosting (the user is signed into the Firebase CLI; see `firebase-debug.log`). `firebase.json`/`.firebaserc` are not yet present — `firebase init hosting` would point at the `dist/` build output. The Firebase MCP tools and `firebase` CLI are available for deploy/config work.
