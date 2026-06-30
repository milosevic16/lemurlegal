/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Tokens mirror the bespoke CSS custom properties (set at runtime by
      // useTheme for the theme system). Utilities and handcrafted CSS share
      // one source of truth.
      colors: {
        paper: 'var(--paper)',
        'paper-2': 'var(--paper-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        hairline: 'var(--hairline)',
        'hairline-strong': 'var(--hairline-strong)',
        blue: 'var(--blue)',
        'blue-deep': 'var(--blue-deep)',
        green: 'var(--green)',
        'green-deep': 'var(--green-deep)',
        ochre: 'var(--ochre)',
        'ochre-deep': 'var(--ochre-deep)',
        sig: 'var(--sig)',
        'term-bg': 'var(--term-bg)',
        'term-fg': 'var(--term-fg)',
        'term-dim': 'var(--term-dim)',
        'term-cyan': 'var(--term-cyan)',
        'term-ok': 'var(--term-ok)',
        'term-amber': 'var(--term-amber)',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      // Desktop-first breakpoints that match the original max-width media
      // queries, exposed as `max-*` variants for any new Tailwind layout work.
      screens: {
        'max-1060': { max: '1060px' },
        'max-1000': { max: '1000px' },
        'max-860': { max: '860px' },
        'max-780': { max: '780px' },
        'max-720': { max: '720px' },
        'max-680': { max: '680px' },
        'max-600': { max: '600px' },
        'max-520': { max: '520px' },
      },
    },
  },
  // The bespoke stylesheets already provide a full reset; disabling Preflight
  // avoids Tailwind's base layer fighting the original element styling.
  corePlugins: { preflight: false },
  plugins: [],
}
