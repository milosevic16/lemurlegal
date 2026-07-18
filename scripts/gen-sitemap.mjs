// Generate dist/sitemap.xml after `vite-ssg build`. To guarantee the sitemap can
// never drift from what the pages actually declare, it is built from the emitted
// HTML itself: each prerendered page's <link rel="canonical"> becomes a <loc>,
// and that page's own en/sl/x-default hreflang alternates become the <xhtml:link>
// entries. So the sitemap is, by construction, consistent with useHead's output.
//
// Covers all prerendered pages (dist/**/*.html) except 404.html. The dynamic blog
// article routes (/blog/:slug) are not prerendered, so they are naturally absent
// (deferred with the rest of Contentful); the /blog and /media LIST pages are
// included as thin-but-valid shells.

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = 'dist'

function htmlFiles(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) {
      if (name === 'assets') continue
      out.push(...htmlFiles(p))
    } else if (name.endsWith('.html')) {
      out.push(p)
    }
  }
  return out
}

const xmlEscape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const files = htmlFiles(DIST).filter((f) => !f.endsWith('404.html'))
const urls = []

for (const file of files) {
  const html = readFileSync(file, 'utf8')
  const headEnd = html.indexOf('</head>')
  const head = headEnd === -1 ? html : html.slice(0, headEnd)

  const canonTag = head.match(/<link\b[^>]*\brel="canonical"[^>]*>/i)?.[0]
  const loc = canonTag?.match(/\bhref="([^"]+)"/)?.[1]
  if (!loc) continue // no canonical -> not an indexable page; skip

  const alts = []
  const linkRe = /<link\b[^>]*\brel="alternate"[^>]*>/gi
  let m
  while ((m = linkRe.exec(head))) {
    const hreflang = m[0].match(/\bhreflang="([^"]+)"/)?.[1]
    const href = m[0].match(/\bhref="([^"]+)"/)?.[1]
    if (hreflang && href) alts.push({ hreflang, href })
  }
  urls.push({ loc, alts })
}

urls.sort((a, b) => a.loc.localeCompare(b.loc))

const body = urls
  .map((u) => {
    const alt = u.alts
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${xmlEscape(a.hreflang)}" href="${xmlEscape(a.href)}"/>`)
      .join('\n')
    return `  <url>\n    <loc>${xmlEscape(u.loc)}</loc>\n${alt}\n  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`

writeFileSync(join(DIST, 'sitemap.xml'), xml)
console.log(`[gen-sitemap] wrote dist/sitemap.xml with ${urls.length} URLs.`)
