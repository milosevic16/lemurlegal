import type { Locale } from './locale'

/**
 * Per-locale URL slugs. One entry per param-less view. `en`/`sl` are the live URL
 * segments (English uses dashes; Slovenian is a real translation, ASCII-folded —
 * no š/č/ž). `old` is the previous underscore-cased slug, kept only so the router
 * can redirect legacy URLs (and the already-rendered Slovenian PDFs) to the new
 * ones. Home is the empty segment in both locales.
 *
 * This is the single source of truth: `localePath` (translation between locales)
 * and `router.ts` (route + redirect generation) are both derived from it.
 */
export interface SlugEntry {
  /** View component name (matches src/views/<view>.vue and router record name). */
  view: string
  en: string
  sl: string
  /** Legacy underscore slug for redirects. Same as `en` when it never changed. */
  old: string
}

export const SLUGS: SlugEntry[] = [
  { view: 'Home', en: '', sl: '', old: '' },
  { view: 'MiCAWhitePaper', en: 'mica-white-paper', sl: 'mica-bela-knjiga', old: 'mica_white_paper' },
  { view: 'CryptoLegalOpinion', en: 'crypto-legal-opinion', sl: 'pravno-mnenje-kriptovalute', old: 'crypto_legal_opinion' },
  { view: 'RegulatoryCompliance', en: 'regulatory-compliance', sl: 'regulativna-skladnost', old: 'regulatory_compliance' },
  { view: 'IncorporationESOP', en: 'incorporation-esop', sl: 'ustanovitev-in-esop', old: 'incorporation_esop' },
  { view: 'IPProtection', en: 'ip-protection', sl: 'zascita-intelektualne-lastnine', old: 'ip_protection' },
  { view: 'ContractsCommercial', en: 'startups-contracts', sl: 'pogodbe-in-gospodarsko-pravo', old: 'startups_contracts' },
  { view: 'RegulatoryQualification', en: 'regulatory-qualification', sl: 'trgovinska-regulativna-kvalifikacija', old: 'regulatory_qualification' },
  { view: 'InvestmentReadiness', en: 'investment-readiness-review', sl: 'pregled-investicijske-pripravljenosti', old: 'investment_readiness_review' },
  { view: 'ComplianceFrameworks', en: 'compliance-frameworks', sl: 'okviri-skladnosti', old: 'compliance_frameworks' },
  { view: 'Blog', en: 'blog', sl: 'blog', old: 'blog' },
  { view: 'MediaCoverage', en: 'media', sl: 'v-medijih', old: 'media' },
  { view: 'Contact', en: 'contact', sl: 'kontakt', old: 'contact' },
  { view: 'TermsOfUse', en: 'terms-of-use', sl: 'pogoji-uporabe', old: 'terms_of_use' },
]

// Index every recognizable form (en, sl, old) → entry, so a first-path segment
// coming in as *any* locale's slug (or a legacy one) resolves to its page. This
// is what makes localePath bidirectional: the language toggle and useHead call it
// with `route.path` already in the current locale's form.
const BY_SEGMENT: Record<string, SlugEntry> = {}
for (const e of SLUGS) {
  for (const seg of [e.en, e.sl, e.old]) {
    // Skip the empty (home) segment — it is handled explicitly by localePath.
    if (seg) BY_SEGMENT[seg] = e
  }
}

/** Resolve a single path segment (a page slug in any locale/legacy form) to its
 *  entry, or undefined for unknown segments (e.g. `blog` sub-slugs, typos). */
export function resolveSlug(segment: string): SlugEntry | undefined {
  return BY_SEGMENT[segment]
}

/** The URL segment for an entry in the given locale. */
export function slugFor(entry: SlugEntry, loc: Locale): string {
  return loc === 'sl' ? entry.sl : entry.en
}
