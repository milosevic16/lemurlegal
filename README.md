# Lemur Legal — Vue 3 + Tailwind

A Vite + Vue 3 (TypeScript) + Tailwind rebuild of the Lemur Legal marketing site,
migrated from the 12 self-contained "Standalone" HTML exports in
`../projects/lemurlegal`. Desktop and mobile responsiveness and all effects
(canvas mesh, marquee ticker, scroll reveals, glitch, the 3-way theme system,
mobile nav) are preserved 1:1 with the originals.

## Commands

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
npm run typecheck  # vue-tsc (non-blocking; legacy template attrs not strict-checked)
```

## How it's built

The original pages were `__bundler` artifacts: a loader unpacked base64+gzip
assets and rendered a JSON-encoded template of plain semantic HTML + inline
`<style>` + DOM-driven effect scripts. `tools/extract.py` decodes all 12 and
emits this source tree:

- **`src/views/*.vue`** — one per page. `<template>` is the original `<main>`
  markup; `<style scoped>` is that page's content CSS (scoped so pages with the
  same class names never collide). Each view applies its own `:root` design
  tokens (`useRootVars`) + theme (`useTheme`) on mount — this is why the blog can
  use Spectral/Hanken while the rest use IBM Plex Mono.
- **`src/views/*.effects.ts`** — the original page script, preserved verbatim but
  with timers / listeners / observers / `element.animate` routed through
  `composables/tracker.ts` so everything tears down cleanly on route change.
- **`src/components/`** — shared chrome (`Masthead`, `Wire`, `Footer`,
  `SiteChrome`). `SiteChrome` persists across routes and wraps `<router-view>`.
- **`src/styles/`** — `fonts.css` (deduped self-hosted woff2 from
  `public/fonts/`), `base.css` (reset, default `:root`, chrome + shared
  primitives, keyframes).
- **`src/composables/`** — `tracker.ts`, `useTheme.ts` (+ `useRootVars`).
- **`tailwind.config.js`** — design tokens mapped to the CSS custom properties;
  Preflight is **off** (the bespoke CSS provides the reset). Use Tailwind
  utilities for new layout; keep the handcrafted CSS for existing sections.

Internal `<a href="/...">` links are turned into SPA navigations by a global
click interceptor in `App.vue`.

## Regenerating from the source HTML

```bash
python3 tools/extract.py    # rewrites views, styles, fonts, pages.ts
```

Edit `tools/extract.py` (not the generated files) to change how pages are
extracted. `LL_SRC` env var overrides the source HTML directory.
