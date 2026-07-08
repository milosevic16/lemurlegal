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
    blog: string
    media: string
    contact: string
  }
  footer: {
    /** Brand tagline, ending just before the "· <email>" link. */
    blurb: string
    /** Legal entity name, e.g. "Lemur Legal, d.o.o." */
    org: string
    /** Street address line. */
    street: string
    /** City line. */
    city: string
    cols: {
      crypto: { heading: string; links: [string, string, string] }
      startups: { heading: string; links: [string, string, string] }
      defence: { heading: string; links: [string, string, string] }
    }
    legal: { terms: string }
    copyright: string
    socialAria: string
  }
}
