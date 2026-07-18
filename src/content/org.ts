// Single source of truth for Lemur Legal's business identity, used for the
// site-wide JSON-LD structured data. Every value here is verified against the
// repo (chrome.ts / contact.ts / Masthead) — nothing invented. Deliberately
// omitted because they are NOT in the repo: VAT/tax number, postal code,
// telephone. Add them here (and they flow into the schema) once confirmed.

export const ORG = {
  name: 'Lemur Legal, d.o.o.',
  url: 'https://lemur.legal',
  email: 'info@lemur.legal',
  street: 'Ciril-Metodov trg 14',
  city: 'Ljubljana',
  country: 'SI', // ISO 3166-1 alpha-2
  areaServed: 'EU',
  // The organization's own profiles (not individuals'). LinkedIn company page.
  sameAs: ['https://www.linkedin.com/company/lemur-legal-ltd.'],
} as const

/**
 * schema.org LegalService node (a LocalBusiness / Organization subtype fit for a
 * law firm). Site-wide, emitted once from SiteChrome into every prerendered page.
 * The stable `@id` lets future per-page Service nodes reference it as `provider`.
 */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': ORG.url + '/#organization',
    name: ORG.name,
    url: ORG.url,
    email: ORG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.street,
      addressLocality: ORG.city,
      addressCountry: ORG.country,
    },
    areaServed: ORG.areaServed,
    sameAs: [...ORG.sameAs],
  }
}
