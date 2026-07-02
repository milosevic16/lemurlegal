// Media Coverage data layer — deliberately mirrors src/lib/contentful.ts so the
// backend has a familiar shape to wire up with the least extra work.
//
// Two intended differences from the blog:
//   1. A media item is a SINGLE-section list (no crypto/startups/defence split).
//   2. Each card links OUT to the outlet's article (opens in a new tab), so
//      `url` replaces the blog's internal `/blog/:slug` — there is no detail page.
//
// Until a `mediaCoverage` Contentful content type exists, MediaCoverage.vue falls
// back to SAMPLE_MEDIA (below) so the layout + link preview are visible. Once the
// type is created and populated, fetchMediaItems() returns the real entries and
// the samples are ignored — delete SAMPLE_MEDIA and the fallback in the view then.

import { formatDate, placeholderCover } from './contentful'

export interface MediaItem {
  id: string
  title: string
  /** Publication / outlet name — shown as the card's category tag. */
  outlet: string
  summary: string
  /** External link to the article (the card opens this in a new tab). */
  url: string
  coverImageUrl: string | null
  coverImageAlt: string
  /** Journalist / byline (optional). */
  author: string
  authorInitials: string
  publishDate: string // ISO date, e.g. "2026-05-12"
  order: number | null
}

export { formatDate }

/** Cover for a card: the item's image, or a themed blue placeholder labelled
 *  with the outlet (matches the blog's placeholder-cover behaviour). */
export function mediaCover(item: MediaItem): string {
  return item.coverImageUrl || placeholderCover('crypto', item.outlet)
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

function mapEntry(item: any, assets: AssetIndex): MediaItem {
  const f = item.fields ?? {}
  const coverId = f.coverImage?.sys?.id
  const cover = coverId ? assets[coverId] : undefined
  const title: string = f.title ?? 'Untitled'
  const outlet: string = f.outlet ?? ''
  return {
    id: item.sys?.id,
    title,
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
// TEMPORARY: placeholder entries so the page and its external-link cards are
// visible before the `mediaCoverage` Contentful type is built. Cover images are
// left null on purpose so mediaCover() renders the themed placeholder labelled
// with the outlet. Remove this array (and the fallback in MediaCoverage.vue)
// once real entries exist. URLs point at outlet homepages to avoid dead links.
export const SAMPLE_MEDIA: MediaItem[] = [
  {
    id: 'sample-1',
    title: 'Peter Merc: MiCA je za slovenske kripto projekte priložnost, ne grožnja',
    outlet: 'Finance',
    summary:
      'Ustanovitelj Lemur Legal o tem, kaj nova evropska uredba pomeni za izdajatelje žetonov in kje se skrivajo največje pasti.',
    url: 'https://www.finance.si',
    coverImageUrl: null,
    coverImageAlt: 'Finance — interview with Peter Merc',
    author: 'Maja Grgič',
    authorInitials: 'MG',
    publishDate: '2026-06-12',
    order: 1,
  },
  {
    id: 'sample-2',
    title: 'Kako pravno zaščititi startup že prvi dan',
    outlet: 'Delo',
    summary:
      'Od izbire pravne oblike do lastniških deležev in ESOP — pravni temelji, ki jih ustanovitelji prepogosto odložijo.',
    url: 'https://www.delo.si',
    coverImageUrl: null,
    coverImageAlt: 'Delo — startup law commentary',
    author: 'Jure Kos',
    authorInitials: 'JK',
    publishDate: '2026-05-03',
    order: 2,
  },
  {
    id: 'sample-3',
    title: 'Slovenia emerges as a quiet hub for EU crypto legal work',
    outlet: 'CoinDesk',
    summary:
      'How a small Ljubljana practice became a go-to for token issuers navigating MiCA white papers and legal opinions.',
    url: 'https://www.coindesk.com',
    coverImageUrl: null,
    coverImageAlt: 'CoinDesk — feature on EU crypto law',
    author: 'Anna Reyes',
    authorInitials: 'AR',
    publishDate: '2026-04-18',
    order: 3,
  },
  {
    id: 'sample-4',
    title: 'The lawyers helping deep-tech founders navigate dual-use rules',
    outlet: 'Sifted',
    summary:
      'Export controls used to be a defence-industry problem. For AI and hardware startups, they are now a fundraising one.',
    url: 'https://sifted.eu',
    coverImageUrl: null,
    coverImageAlt: 'Sifted — dual-use compliance for startups',
    author: 'Tom Blackwell',
    authorInitials: 'TB',
    publishDate: '2026-03-09',
    order: 4,
  },
  {
    id: 'sample-5',
    title: 'Izvozni nadzor in dvojna raba: pravni izzivi obrambne tehnologije',
    outlet: 'RTV SLO',
    summary:
      'Pogovor o tem, kako slovenska podjetja pripravijo napredno tehnologijo za globalne trge, ne da bi trčila ob sankcije.',
    url: 'https://www.rtvslo.si',
    coverImageUrl: null,
    coverImageAlt: 'RTV SLO — export controls interview',
    author: 'Nina Zabukovec',
    authorInitials: 'NZ',
    publishDate: '2026-02-20',
    order: 5,
  },
]
