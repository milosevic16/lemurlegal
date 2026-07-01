// Shared design tokens for the blog pages (list + article), so Blog.vue and
// BlogPost.vue apply an identical palette. Ported verbatim from the original
// Blog.vue ROOT_VARS. `useTheme('Editorial', 50, 'Baltic')` then layers the
// Baltic accent palette on top (as the original page did).
import { useTheme, useRootVars } from './useTheme'

export const BLOG_ROOT_VARS: Record<string, string> = {
  '--paper': '#D2DDD7',
  '--paper-2': '#C6D4CE',
  '--ink': '#1A1826',
  '--ink-2': '#585672',
  '--hairline': '#B4C0BA',
  '--hairline-strong': '#A0AEA8',
  '--blue': '#7F59F5',
  '--blue-deep': '#6444CC',
  '--blue-tint': 'rgba(127,89,245,0.10)',
  '--green': '#3D7A5E',
  '--green-deep': '#2D5E46',
  '--green-tint': 'rgba(61,122,94,0.12)',
  '--ochre': '#C4823A',
  '--ochre-deep': '#A4651E',
  '--ochre-tint': 'rgba(196,130,58,0.13)',
  '--sig': '#7F59F5',
  '--sig-soft': 'rgba(127,89,245,0.16)',
  '--sig-faint': 'rgba(127,89,245,0.06)',
  '--term-bg': '#131220',
  '--term-bg-2': '#1C1B2E',
  '--term-dim': '#6E6890',
  '--term-fg': '#D2DDD7',
  '--term-cyan': '#A88BFF',
  '--term-ok': '#5FC27A',
  '--term-amber': '#D9AE5E',
  '--serif': '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  '--sans': '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  '--mono': '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  '--pad-x': 'clamp(1.25rem, 5vw, 4rem)',
  '--section-y': 'clamp(3.5rem, 7vw, 6rem)',
}

/** Apply the blog palette to :root. Call on mount in blog views. */
export function applyBlogTheme(): void {
  useRootVars(BLOG_ROOT_VARS)
  useTheme('Editorial', 50, 'Baltic')
}
