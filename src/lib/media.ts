// Media Coverage data layer — deliberately mirrors src/lib/contentful.ts so the
// backend has a familiar shape to wire up with the least extra work.
//
// Differences from the blog:
//   1. Three fixed categories (podcasts & lectures / TV appearances / articles),
//      chosen by the item's `section` field — same idea as the blog's `section`.
//   2. Each card links OUT to its source (opens in a new tab), so `url` replaces
//      the blog's internal `/blog/:slug` — there is no detail page.
//
// Until a `mediaCoverage` Contentful content type exists, MediaCoverage.vue falls
// back to SAMPLE_MEDIA (below) so the layout is visible. Once the type is created
// and populated, fetchMediaItems() returns real entries and the samples are
// ignored — delete SAMPLE_MEDIA and the fallback in the view then.

import { formatDate } from './contentful'

export type MediaSectionId = 'podcasts' | 'tv' | 'articles'

export interface MediaSectionMeta {
  id: MediaSectionId
  /** shade suffix → media-section--{cls} / media-card--{cls} */
  cls: 'm1' | 'm2' | 'm3'
  /** bright accent (section bar, card accents, placeholder art) */
  accent: string
}

// Three distinct shades of the signature mint, light → deep.
export const MEDIA_SECTIONS: MediaSectionMeta[] = [
  { id: 'podcasts', cls: 'm1', accent: '#3FD9B0' },
  { id: 'tv', cls: 'm2', accent: '#1FC49A' },
  { id: 'articles', cls: 'm3', accent: '#2A8A66' },
]

export function mediaSectionMeta(id: MediaSectionId | string): MediaSectionMeta {
  return MEDIA_SECTIONS.find((s) => s.id === id) ?? MEDIA_SECTIONS[0]
}

export interface MediaItem {
  id: string
  title: string
  /** Which of the three categories this item belongs to. */
  section: MediaSectionId
  /** Publication / outlet / show name — shown as the card's category tag. */
  outlet: string
  summary: string
  /** External link to the item (the card opens this in a new tab). */
  url: string
  coverImageUrl: string | null
  coverImageAlt: string
  /** Journalist / host / byline (optional). */
  author: string
  authorInitials: string
  publishDate: string // ISO date, e.g. "2026-05-12"
  order: number | null
}

export { formatDate }

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// Placeholder cover — concentric-ring art in the section's mint, labelled with
// the outlet (mirrors the blog placeholder but takes a colour directly).
function mediaPlaceholder(accent: string, label: string): string {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 375'>` +
    `<rect width='600' height='375' fill='#131220'/>` +
    `<g fill='none' stroke='${accent}' opacity='0.32'>` +
    `<circle cx='300' cy='158' r='56'/>` +
    `<circle cx='300' cy='158' r='84' stroke-dasharray='3 7'/></g>` +
    `<circle cx='300' cy='158' r='5' fill='${accent}'/>` +
    `<text x='300' y='300' text-anchor='middle' font-family='monospace' font-size='27' ` +
    `font-weight='500' letter-spacing='1' fill='${accent}'>${esc(label)}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/** Cover for a card: the item's image, or a themed mint placeholder labelled
 *  with the outlet, in the item's section shade. */
export function mediaCover(item: MediaItem): string {
  return item.coverImageUrl || mediaPlaceholder(mediaSectionMeta(item.section).accent, item.outlet)
}

// ── Config (same env vars as the blog — one Contentful space) ───────────────
const SPACE = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const ENV = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'
const TOKEN = import.meta.env.VITE_CONTENTFUL_CDA_TOKEN
const BASE = `https://cdn.contentful.com/spaces/${SPACE}/environments/${ENV}`

interface CdaAsset {
  sys: { id: string }
  fields?: { title?: string; description?: string; file?: { url?: string } }
}
type AssetIndex = Record<string, CdaAsset>

async function cda(params: Record<string, string>): Promise<any> {
  if (!SPACE || !TOKEN) {
    throw new Error(
      'Contentful is not configured — set VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_CDA_TOKEN in .env.local',
    )
  }
  const url = new URL(`${BASE}/entries`)
  url.searchParams.set('access_token', TOKEN)
  for (const k in params) url.searchParams.set(k, params[k])
  const res = await fetch(url.toString())
  if (!res.ok) {
    throw new Error(`Contentful request failed (${res.status})`)
  }
  return res.json()
}

function indexAssets(includes: any): AssetIndex {
  const out: AssetIndex = {}
  for (const a of includes?.Asset ?? []) out[a.sys.id] = a
  return out
}

function assetUrl(asset?: CdaAsset): string | null {
  const url = asset?.fields?.file?.url
  return url ? (url.startsWith('//') ? `https:${url}` : url) : null
}

function initialsFrom(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

const SECTION_IDS: MediaSectionId[] = ['podcasts', 'tv', 'articles']

function mapEntry(item: any, assets: AssetIndex): MediaItem {
  const f = item.fields ?? {}
  const coverId = f.coverImage?.sys?.id
  const cover = coverId ? assets[coverId] : undefined
  const title: string = f.title ?? 'Untitled'
  const outlet: string = f.outlet ?? ''
  const section: MediaSectionId = SECTION_IDS.includes(f.section) ? f.section : 'articles'
  return {
    id: item.sys?.id,
    title,
    section,
    outlet,
    summary: f.summary ?? '',
    url: f.url ?? '#',
    coverImageUrl: assetUrl(cover),
    coverImageAlt: cover?.fields?.title || `${title} — ${outlet}`.trim(),
    author: f.author ?? '',
    authorInitials: f.authorInitials || (f.author ? initialsFrom(f.author) : ''),
    publishDate: f.publishDate ?? '',
    order: typeof f.order === 'number' ? f.order : null,
  }
}

/** All published media items, ordered by `order` asc then newest first. */
export async function fetchMediaItems(): Promise<MediaItem[]> {
  const data = await cda({
    content_type: 'mediaCoverage',
    include: '1',
    order: 'fields.order,-fields.publishDate',
    limit: '1000',
  })
  const assets = indexAssets(data.includes)
  return (data.items ?? []).map((it: any) => mapEntry(it, assets))
}

// ── Sample mockups ──────────────────────────────────────────────────────────
// TEMPORARY: placeholder entries (across all three categories) so the page is
// visible before the `mediaCoverage` Contentful type is built. Cover images are
// left null on purpose so mediaCover() renders the themed placeholder. Remove
// this array (and the fallback in MediaCoverage.vue) once real entries exist.
export const SAMPLE_MEDIA: MediaItem[] = [
  {
    id: 'p1',
    title: 'Peter Merc: MiCA in prihodnost kripta v EU',
    section: 'podcasts',
    outlet: 'Startup Podcast',
    summary:
      'Daljši pogovor o tem, kako uredba MiCA spreminja pravila za izdajatelje žetonov in kripto borze.',
    url: 'https://open.spotify.com',
    coverImageUrl: null,
    coverImageAlt: 'Startup Podcast — episode with Peter Merc',
    author: '',
    authorInitials: '',
    publishDate: '2026-06-20',
    order: 1,
  },
  {
    id: 'p2',
    title: 'Predavanje: pravo za zagonska podjetja',
    section: 'podcasts',
    outlet: 'FRI Ljubljana',
    summary:
      'Gostujoče predavanje o ustanovitvi, lastniških deležih in ESOP za tehnološke ustanovitelje.',
    url: 'https://www.fri.uni-lj.si',
    coverImageUrl: null,
    coverImageAlt: 'FRI Ljubljana — guest lecture',
    author: '',
    authorInitials: '',
    publishDate: '2026-05-15',
    order: 2,
  },
  {
    id: 'p3',
    title: 'Navigating EU crypto law',
    section: 'podcasts',
    outlet: 'The Fintech Files',
    summary:
      'A wide-ranging conversation on token classification, licensing and the legal opinions exchanges ask for.',
    url: 'https://podcasts.apple.com',
    coverImageUrl: null,
    coverImageAlt: 'The Fintech Files — podcast episode',
    author: '',
    authorInitials: '',
    publishDate: '2026-04-10',
    order: 3,
  },
  {
    id: 't1',
    title: 'Dnevnik: regulacija kriptovalut',
    section: 'tv',
    outlet: 'RTV SLO',
    summary:
      'Prispevek o novih evropskih pravilih za kripto trg in kaj pomenijo za slovenska podjetja.',
    url: 'https://www.rtvslo.si',
    coverImageUrl: null,
    coverImageAlt: 'RTV SLO — news segment',
    author: '',
    authorInitials: '',
    publishDate: '2026-06-02',
    order: 4,
  },
  {
    id: 't2',
    title: '24UR: kaj prinaša MiCA',
    section: 'tv',
    outlet: 'POP TV',
    summary: 'Studijski pogovor o tem, kako se podjetja pripravijo na novo regulacijo digitalnih sredstev.',
    url: 'https://www.24ur.com',
    coverImageUrl: null,
    coverImageAlt: 'POP TV — studio interview',
    author: '',
    authorInitials: '',
    publishDate: '2026-03-22',
    order: 5,
  },
  {
    id: 'a1',
    title: 'Peter Merc: MiCA je za slovenske kripto projekte priložnost',
    section: 'articles',
    outlet: 'Finance',
    summary: 'Ustanovitelj Lemur Legal o tem, kaj nova uredba pomeni za izdajatelje žetonov.',
    url: 'https://www.finance.si',
    coverImageUrl: null,
    coverImageAlt: 'Finance — interview with Peter Merc',
    author: 'Maja Grgič',
    authorInitials: 'MG',
    publishDate: '2026-06-12',
    order: 6,
  },
  {
    id: 'a2',
    title: 'Kako pravno zaščititi startup že prvi dan',
    section: 'articles',
    outlet: 'Delo',
    summary: 'Od izbire pravne oblike do lastniških deležev in ESOP — temelji, ki jih ustanovitelji prepogosto odložijo.',
    url: 'https://www.delo.si',
    coverImageUrl: null,
    coverImageAlt: 'Delo — startup law commentary',
    author: 'Jure Kos',
    authorInitials: 'JK',
    publishDate: '2026-05-03',
    order: 7,
  },
  {
    id: 'a3',
    title: "Slovenia's quiet rise as an EU crypto-law hub",
    section: 'articles',
    outlet: 'CoinDesk',
    summary:
      'How a small Ljubljana practice became a go-to for token issuers navigating MiCA white papers and legal opinions.',
    url: 'https://www.coindesk.com',
    coverImageUrl: null,
    coverImageAlt: 'CoinDesk — feature on EU crypto law',
    author: 'Anna Reyes',
    authorInitials: 'AR',
    publishDate: '2026-04-18',
    order: 8,
  },
]
