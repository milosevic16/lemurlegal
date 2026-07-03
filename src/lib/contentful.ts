// Contentful Content Delivery layer for the blog.
//
// Deliberately dependency-free for data access — plain `fetch` against the CDA
// REST API, matching the vanilla-fetch style already used in Contact.effects.ts.
// The only Contentful package used is the render-only Rich Text → HTML helper.
//
// A single `blogPost` content type backs all three practice sections; the
// `section` field (crypto | startups | defence) decides grouping and colour.

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, INLINES, type Document } from '@contentful/rich-text-types'
import type { Locale } from '@/i18n/locale'

export type SectionId = 'crypto' | 'startups' | 'defence'

export interface BlogPost {
  id: string
  title: string
  slug: string
  section: SectionId
  category: string
  summary: string
  coverImageUrl: string | null
  coverImageAlt: string
  author: string
  authorInitials: string
  publishDate: string // ISO date, e.g. "2026-05-12"
  order: number | null
  body: Document | null
  /** Rendered HTML — only populated by fetchPostBySlug (the detail page). */
  bodyHtml?: string
}

export interface SectionMeta {
  id: SectionId
  /** modifier suffix for `blog-section--{cls}` and the placeholder accent */
  cls: 'b' | 'g' | 'o'
  /** placeholder-cover art colour */
  accent: string
}

// Visual meta only (colour + class suffix). The section headings/labels/coords
// are localized copy and live in src/content/blog.ts (Bilingual), mirroring the
// media page — this keeps the same id/cls/accent lookup that BlogCard/BlogPost
// use while the text becomes EN/SL.
export const SECTIONS: SectionMeta[] = [
  { id: 'crypto', cls: 'b', accent: '#7F59F5' },
  { id: 'startups', cls: 'g', accent: '#1FC49A' },
  { id: 'defence', cls: 'o', accent: '#E8A33D' },
]

export function sectionMeta(id: SectionId | string): SectionMeta {
  return SECTIONS.find((s) => s.id === id) ?? SECTIONS[0]
}

// ── Config ────────────────────────────────────────────────────────────────
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
    const err = new Error(`Contentful request failed (${res.status})`)
    ;(err as { status?: number }).status = res.status
    throw err
  }
  return res.json()
}

// Fetch in the active locale. Contentful serves the `sl` values where present
// and falls back to `en-US` per the locale's fallback setting. If the `sl`
// locale does not exist yet in the space (400 Unknown locale), retry once in the
// default locale so the site keeps working until the locale is created.
async function cdaLocalized(params: Record<string, string>, loc: Locale): Promise<any> {
  if (loc !== 'sl') return cda(params)
  try {
    return await cda({ ...params, locale: 'sl' })
  } catch (e) {
    if ((e as { status?: number }).status === 400) return cda(params)
    throw e
  }
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

function mapEntry(item: any, assets: AssetIndex): BlogPost {
  const f = item.fields ?? {}
  const coverId = f.coverImage?.sys?.id
  const cover = coverId ? assets[coverId] : undefined
  const title: string = f.title ?? 'Untitled'
  return {
    id: item.sys?.id,
    title,
    slug: f.slug ?? '',
    section: (f.section as SectionId) ?? 'crypto',
    category: f.category ?? '',
    summary: f.summary ?? '',
    coverImageUrl: assetUrl(cover),
    coverImageAlt: cover?.fields?.title || `${title} — article cover`,
    author: f.author ?? 'Lemur Legal',
    authorInitials: f.authorInitials || initialsFrom(f.author ?? 'Lemur Legal'),
    publishDate: f.publishDate ?? '',
    order: typeof f.order === 'number' ? f.order : null,
    body: (f.body as Document) ?? null,
  }
}

function initialsFrom(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

/** All published posts, globally ordered by `order` asc then newest first. */
export async function fetchPosts(loc: Locale = 'en'): Promise<BlogPost[]> {
  const data = await cdaLocalized(
    {
      content_type: 'blogPost',
      include: '1',
      order: 'fields.order,-fields.publishDate',
      limit: '1000',
    },
    loc,
  )
  const assets = indexAssets(data.includes)
  return (data.items ?? []).map((it: any) => mapEntry(it, assets))
}

/** A single post by slug, with `bodyHtml` rendered. Null if not found. The slug
 *  is not localized, so the same slug resolves the post in either locale. */
export async function fetchPostBySlug(slug: string, loc: Locale = 'en'): Promise<BlogPost | null> {
  const data = await cdaLocalized(
    {
      content_type: 'blogPost',
      'fields.slug': slug,
      include: '2',
      limit: '1',
    },
    loc,
  )
  const assets = indexAssets(data.includes)
  const item = (data.items ?? [])[0]
  if (!item) return null
  const post = mapEntry(item, assets)
  post.bodyHtml = renderBody(post.body, assets)
  return post
}

// ── Rich Text rendering ─────────────────────────────────────────────────────
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function renderBody(doc: Document | null, assets: AssetIndex = {}): string {
  if (!doc) return ''
  return documentToHtmlString(doc, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = assets[node.data?.target?.sys?.id]
        const url = assetUrl(asset)
        if (!url) return ''
        const alt = esc(asset?.fields?.title || '')
        return `<img class="article__img" src="${esc(url)}" alt="${alt}" loading="lazy" />`
      },
      [INLINES.HYPERLINK]: (node: any, next: any) => {
        const uri = String(node.data?.uri ?? '#')
        const ext = /^https?:\/\//i.test(uri)
        const attrs = ext ? ' target="_blank" rel="noopener noreferrer"' : ''
        return `<a href="${esc(uri)}"${attrs}>${next(node.content)}</a>`
      },
    },
  })
}

// ── Placeholder cover ───────────────────────────────────────────────────────
// Reproduces the original inline-SVG card art (concentric rings + label) so
// posts without a coverImage look exactly like the old hardcoded cards.
export function placeholderCover(section: SectionId | string, label: string): string {
  const accent = sectionMeta(section).accent
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

// ── Display helpers ─────────────────────────────────────────────────────────
const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// Slovenian month names (nominative), lowercase — e.g. "11. februar 2020".
const MONTHS_SL = [
  'januar', 'februar', 'marec', 'april', 'maj', 'junij',
  'julij', 'avgust', 'september', 'oktober', 'november', 'december',
]

/** "2026-05-12" → "12 May 2026" (EN) or "12. maj 2026" (SL). */
export function formatDate(iso: string, loc: Locale = 'en'): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '')
  if (!m) return iso || ''
  const [, y, mo, d] = m
  return loc === 'sl'
    ? `${Number(d)}. ${MONTHS_SL[Number(mo) - 1]} ${y}`
    : `${Number(d)} ${MONTHS_EN[Number(mo) - 1]} ${y}`
}
