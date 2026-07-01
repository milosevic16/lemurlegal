// Shared content-object types for the bilingual (EN/SL) site.
// Each page exports `{ en, sl }` typed by a page interface, so TypeScript
// guarantees both locales have the same shape (missing translations fail
// typecheck).

export type Bilingual<T> = { en: T; sl: T }

export interface PageMeta {
  title: string
  description: string
}

/** Shared chrome (Masthead + Footer), rendered on every page. */
export interface ChromeContent {
  nav: {
    crypto: string
    startups: string
    defence: string
    about: string
    blog: string
    contact: string
  }
  /** Header status line, e.g. "EU · OPEN FOR MATTERS". */
  status: string
  footer: {
    /** Brand blurb, ending just before the "· <email>" link. */
    blurb: string
    address: string
    cols: {
      crypto: { heading: string; links: [string, string, string] }
      startups: { heading: string; links: [string, string, string] }
      defence: { heading: string; links: [string, string, string] }
    }
    legal: { privacy: string; terms: string; cookie: string }
    copyright: string
    strap: string
    socialAria: string
  }
}
