// Post-build guard for the prerendered output. Runs after `vite-ssg build`
// (see package.json "build") and FAILS the build (exit 1) on any locale/head
// defect. This is the real guard for `concurrency: 1` in vite.config.ts: the
// active locale is a shared module ref, so a future concurrency bump or a
// locale-plumbing refactor could silently emit wrong-locale metadata on a green
// build. This asserts the emitted HTML instead of trusting a code comment.
//
// For each prerendered page (all dist/**/*.html except 404.html) it derives the
// expected route + locale from the FILE PATH and asserts the emitted head agrees:
//   - <html lang> matches the path's locale (en, or sl under /sl)
//   - <link rel="canonical"> is exactly SITE + the path (home is non-uniform:
//     EN "/", SL "/sl")
//   - en / sl / x-default hreflang alternates are all present
//   - <title> is non-empty
// A wrong-locale render (the race) flips lang/title/canonical together, so a
// Slovenian-rendered index.html would carry lang="sl" at the EN path -> caught.

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const SITE = 'https://lemur.legal'
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

// dist/index.html -> { path: '/', loc: 'en' }; dist/sl.html -> '/sl','sl';
// dist/foo.html -> '/foo','en'; dist/sl/bar.html -> '/sl/bar','sl'.
function routeOf(file) {
  const rel = relative(DIST, file).replace(/\\/g, '/')
  const loc = rel === 'sl.html' || rel.startsWith('sl/') ? 'sl' : 'en'
  let path
  if (rel === 'index.html') path = '/'
  else if (rel === 'sl.html') path = '/sl'
  else path = '/' + rel.replace(/\.html$/, '')
  return { path, loc }
}

const files = htmlFiles(DIST).filter((f) => !f.endsWith('404.html'))
const errors = []
let checked = 0

for (const file of files) {
  const { path, loc } = routeOf(file)
  const html = readFileSync(file, 'utf8')
  const headEnd = html.indexOf('</head>')
  const head = headEnd === -1 ? html : html.slice(0, headEnd)

  const lang = html.match(/<html\b[^>]*\blang="([a-z-]+)"/i)?.[1] ?? null
  if (lang !== loc) errors.push(`${path}: <html lang> is "${lang}", expected "${loc}"`)

  const canonTag = head.match(/<link\b[^>]*\brel="canonical"[^>]*>/i)?.[0]
  const canon = canonTag?.match(/\bhref="([^"]+)"/)?.[1] ?? null
  const expected = SITE + path
  if (canon !== expected) errors.push(`${path}: canonical is "${canon}", expected "${expected}"`)

  for (const hl of ['en', 'sl', 'x-default']) {
    if (!head.includes(`hreflang="${hl}"`)) errors.push(`${path}: missing hreflang="${hl}"`)
  }

  const title = head.match(/<title\b[^>]*>([^<]*)<\/title>/i)?.[1]?.trim()
  if (!title) errors.push(`${path}: empty or missing <title>`)

  checked++
}

if (errors.length) {
  console.error(`\n[assert-ssg-locale] FAILED — ${errors.length} problem(s) across ${checked} pages:`)
  for (const e of errors) console.error('  ✗ ' + e)
  console.error('\nMost likely cause: the per-page locale is wrong (is ssgOptions.concurrency still 1?).\n')
  process.exit(1)
}

console.log(
  `[assert-ssg-locale] OK — ${checked} pages: correct <html lang>, self-consistent canonical, en/sl/x-default hreflang, non-empty <title>.`,
)
