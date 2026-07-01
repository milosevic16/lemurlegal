// Ported verbatim from the HOME page's DCLogic `applyTheme()`. Sets the theme
// CSS custom properties on :root from an aesthetic / signal / accent triple.
//
// In the original, these were editable design props; the standalone exports
// baked a default per page (HOME = Live/Baltic, the rest = Editorial/Baltic).
// Each view calls this on mount so navigating between pages re-establishes the
// correct palette (the inline styles set here would otherwise persist).

export type Aesthetic = 'Editorial' | 'Live' | 'Redacted'
// Baltic/Thermal/Nordic are tri-color brand palettes (b/g/o are distinct hues).
// Purple/Green/Amber are monochrome: b/g/o collapse to one section hue (+ shades),
// so a product page themed with one of them renders in a single color.
export type Accent = 'Baltic' | 'Thermal' | 'Nordic' | 'Purple' | 'Green' | 'Amber'

const MODES: Record<Aesthetic, Record<string, string>> = {
  // paper/paper2 unified with Home (Live) — content pages were rendering a
  // brighter background (#D2DDD7) than the home page (#C0CEC8).
  Editorial: { paper: '#C0CEC8', paper2: '#B6C6C0', ink: '#1A1826', ink2: '#585672', hairline: '#B4C0BA', hairlineStr: '#A0AEA8', sig: '#7F59F5' },
  Live: { paper: '#C0CEC8', paper2: '#B6C6C0', ink: '#0E0C1A', ink2: '#3A3858', hairline: '#9AB0A8', hairlineStr: '#88A098', sig: '#7F59F5' },
  Redacted: { paper: '#F0EFEA', paper2: '#E8E7E2', ink: '#080808', ink2: '#222222', hairline: '#C4C3BE', hairlineStr: '#A4A39E', sig: '#9B0E00' },
}

const PALETTES: Record<Accent, Record<string, string>> = {
  Baltic: { b: '#7F59F5', bd: '#6444CC', g: '#1fc49a', gd: '#17967a', o: '#C4823A', od: '#A4651E' },
  Thermal: { b: '#9B2242', bd: '#7A1A34', g: '#9B5A1A', gd: '#7A4214', o: '#6B5200', od: '#523D00' },
  Nordic: { b: '#3A5F8A', bd: '#2D4466', g: '#2E6058', gd: '#1E4040', o: '#5A5A74', od: '#444460' },
  // Monochrome section palettes: b/g/o are all shades of one hue, so every
  // var(--blue/--green/--ochre) usage on the page resolves to the section color.
  Purple: { b: '#7F59F5', bd: '#6444CC', g: '#A88BFF', gd: '#7F59F5', o: '#6444CC', od: '#4E33A8' },
  Green: { b: '#1FC49A', bd: '#17967A', g: '#1FC49A', gd: '#17967A', o: '#137A5F', od: '#0E5C48' },
  Amber: { b: '#C4823A', bd: '#A4651E', g: '#E8A33D', gd: '#C4823A', o: '#A4651E', od: '#6E3D12' },
}

// Apply a page's :root custom properties as inline styles on documentElement.
// Pages carry different design tokens (e.g. the blog uses Spectral/Hanken Grotesk
// while the rest use IBM Plex Mono); applying them per-view at runtime keeps them
// from colliding the way merged global :root blocks would.
export function useRootVars(vars: Record<string, string>): void {
  const r = document.documentElement
  for (const k in vars) r.style.setProperty(k, vars[k])
}

function hexRgb(h: string): string {
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)].join(',')
}

export function useTheme(aesthetic: Aesthetic = 'Editorial', signalPct = 50, accent: Accent = 'Baltic'): void {
  const r = document.documentElement
  const signal = (signalPct != null ? signalPct : 50) / 100
  const m = MODES[aesthetic] || MODES.Editorial

  r.style.setProperty('--paper', m.paper)
  r.style.setProperty('--paper-2', m.paper2)
  r.style.setProperty('--ink', m.ink)
  r.style.setProperty('--ink-2', m.ink2)
  r.style.setProperty('--hairline', m.hairline)
  r.style.setProperty('--hairline-strong', m.hairlineStr)

  const p = PALETTES[accent] || PALETTES.Baltic
  // --sig follows the accent's primary hue (so it's section-colored on monochrome
  // pages). Safe for legacy accents: Baltic's primary is the same purple as before.
  const sigVal = aesthetic === 'Redacted' ? m.sig : p.b
  r.style.setProperty('--sig', sigVal)
  const blueVal = aesthetic === 'Redacted' ? m.ink : p.b
  const blueDeep = aesthetic === 'Redacted' ? m.ink : p.bd
  const greenVal = aesthetic === 'Redacted' ? m.ink : p.g
  const greenDeep = aesthetic === 'Redacted' ? m.ink : p.gd
  const ochreVal = aesthetic === 'Redacted' ? '#9B0E00' : p.o
  const ochreDeep = aesthetic === 'Redacted' ? '#7A0A00' : p.od
  r.style.setProperty('--blue', blueVal)
  r.style.setProperty('--blue-deep', blueDeep)
  r.style.setProperty('--blue-tint', 'rgba(' + hexRgb(blueVal) + ',.10)')
  r.style.setProperty('--green', greenVal)
  r.style.setProperty('--green-deep', greenDeep)
  r.style.setProperty('--green-tint', 'rgba(' + hexRgb(greenVal) + ',.12)')
  r.style.setProperty('--ochre', ochreVal)
  r.style.setProperty('--ochre-deep', ochreDeep)
  r.style.setProperty('--ochre-tint', 'rgba(' + hexRgb(ochreVal) + ',.13)')

  const period = Math.max(0.5, 10 - signal * 9.5)
  const hexOpac = 0.04 + signal * 0.36
  const sigAlpha = 0.07 + signal * 0.28
  const sigRgb = aesthetic === 'Redacted' ? '155,14,0' : hexRgb(sigVal)
  const glEl = document.querySelector<HTMLElement>('[data-glitch-text]')
  if (glEl) glEl.style.setProperty('--glitch-period', period + 's')
  Array.prototype.slice.call(document.querySelectorAll<HTMLElement>('[data-anim="hexrow"]')).forEach((el: HTMLElement) => {
    el.style.opacity = String(hexOpac)
  })
  r.style.setProperty('--sig-soft', 'rgba(' + sigRgb + ',' + sigAlpha + ')')
}
