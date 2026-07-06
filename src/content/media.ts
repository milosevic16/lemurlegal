import type { Bilingual, PageMeta } from './types'
import type { MediaSectionId } from '@/lib/media'

// Static (non-card) chrome for the Media Coverage page — hero, the three
// category sections' headings, list states and the CTA band. The cards come
// from src/lib/media.ts (Contentful / SAMPLE_MEDIA). Same structure as the blog,
// but with three media categories instead of the three practices.
//
// SL strings are machine-translated — every `sl` value below is TODO(sl-review)
// pending Peter's review.
export interface MediaSection {
  /** Matches MediaItem.section + MEDIA_SECTIONS in src/lib/media.ts. */
  id: MediaSectionId
  mark: string
  coord: string
  /** Section eyebrow, e.g. "P·1 — Podcasts & Lectures". */
  label: string
  /** Short label used in the category nav bar. */
  nav: string
  title: string
  subtitle: string
  /** Read-more label on each card in this category (e.g. "Preberi več"). */
  cta: string
}

export interface MediaContent {
  meta: PageMeta
  hero: {
    kicker: string
    hexrow: string
    titleLead: string
    titleAccent: string
    titleTail: string
    slogan: string
    /** May contain <strong> — rendered with v-html. */
    lead: string
  }
  sections: [MediaSection, MediaSection, MediaSection]
  states: { loading: string; error: string; empty: string }
  cta: { title: string; text: string; action: string }
}

const HEXROW = '0x7F59F5  0xD2DDD7  4D454449  41202020  0x3D7A5E  0xC4823A  4C4A4C20  0x131220  4D454449  0x7F59F5'

const media: Bilingual<MediaContent> = {
  en: {
    meta: {
      title: 'Media Coverage — Lemur Legal',
      description:
        'Podcasts, lectures, TV and press featuring Lemur Legal — on MiCA, crypto regulation, startups and the law behind emerging technology.',
    },
    hero: {
      kicker: 'Media · Ljubljana',
      hexrow: HEXROW,
      titleLead: 'Our work,',
      titleAccent: 'in the media',
      titleTail: '.',
      slogan: '// podcasts, television & press.',
      lead: 'Podcasts and lectures, TV appearances and press articles featuring Lemur Legal across Slovenian and international media — on <strong>MiCA</strong> and token regulation, startups and equity, IP, and the law behind emerging technology.',
    },
    sections: [
      {
        id: 'podcasts',
        mark: '§ 01',
        coord: '[ 46.05°N · 14.51°E · AUDIO ]',
        label: 'P·1 — Podcasts & Lectures',
        nav: 'Podcasts & Lectures',
        title: 'Conversations & talks.',
        subtitle:
          'Long-form podcast appearances, panels and lectures — Lemur Legal on crypto regulation, startups and the law behind emerging technology.',
        cta: 'Listen',
      },
      {
        id: 'tv',
        mark: '§ 02',
        coord: '[ 46.05°N · 14.51°E · BROADCAST ]',
        label: 'P·2 — TV Appearances',
        nav: 'TV Appearances',
        title: 'On air.',
        subtitle: 'Television interviews and studio appearances that bring tech law to a broad audience.',
        cta: 'Watch',
      },
      {
        id: 'articles',
        mark: '§ 03',
        coord: '[ 46.05°N · 14.51°E · PRINT ]',
        label: 'P·3 — Articles',
        nav: 'Articles',
        title: 'In print.',
        subtitle:
          'Press articles, columns and features quoting or written by Lemur Legal across Slovenian and international media.',
        cta: 'Read more',
      },
    ],
    states: {
      loading: 'Loading coverage…',
      error: "Couldn't load media coverage right now — please try again shortly.",
      empty: 'Nothing here yet.',
    },
    cta: {
      title: 'Writing a story on tech law?',
      text: "For interviews, expert commentary or background, get in touch — we're glad to help journalists get the law right.",
      action: 'Get in touch',
    },
  },
  sl: {
    meta: {
      title: 'V medijih — Lemur Legal',
      description:
        'Podkasti, predavanja, TV in članki z Lemur Legal — o MiCA, regulaciji kriptovalut, startupih in pravu za nove tehnologije.',
    },
    hero: {
      kicker: 'Mediji · Ljubljana',
      hexrow: HEXROW,
      titleLead: 'Naše delo',
      titleAccent: 'v medijih',
      titleTail: '.',
      slogan: '// podkasti, televizija in tisk.',
      lead: 'Podkasti in predavanja, TV oddaje in medijski članki z Lemur Legal v slovenskih in mednarodnih medijih — o <strong>MiCA</strong> in regulaciji žetonov, zagonskih podjetjih in lastniških deležih, intelektualni lastnini ter pravu za nove tehnologije.',
    },
    sections: [
      {
        id: 'podcasts',
        mark: '§ 01',
        coord: '[ 46.05°N · 14.51°E · AVDIO ]',
        label: 'P·1 — Podkasti in predavanja',
        nav: 'Podkasti in predavanja',
        title: 'Pogovori in predavanja.',
        subtitle:
          'Daljši nastopi v podkastih, paneli in predavanja — Lemur Legal o regulaciji kripta, zagonskih podjetjih in pravu za nove tehnologije.',
        cta: 'Poslušajte',
      },
      {
        id: 'tv',
        mark: '§ 02',
        coord: '[ 46.05°N · 14.51°E · TV ]',
        label: 'P·2 — TV oddaje',
        nav: 'TV oddaje',
        title: 'Na zaslonu.',
        subtitle: 'Televizijski intervjuji in studijski nastopi, ki tehnološko pravo približajo širši javnosti.',
        cta: 'Oglejte si oddajo',
      },
      {
        id: 'articles',
        mark: '§ 03',
        coord: '[ 46.05°N · 14.51°E · TISK ]',
        label: 'P·3 — Članki',
        nav: 'Članki',
        title: 'V tisku.',
        subtitle:
          'Časopisni članki, kolumne in prispevki, ki citirajo Lemur Legal ali so njegovo delo, v slovenskih in mednarodnih medijih.',
        cta: 'Preberi več',
      },
    ],
    states: {
      loading: 'Nalaganje objav…',
      error: 'Medijskih objav trenutno ni bilo mogoče naložiti — poskusite znova čez nekaj trenutkov.',
      empty: 'Tukaj še ni objav.',
    },
    cta: {
      title: 'Pišete o tehnološkem pravu?',
      text: 'Za intervjuje, strokovne komentarje ali ozadje nas kontaktirajte — novinarjem z veseljem pomagamo pravo predstaviti pravilno.',
      action: 'Stopite v stik',
    },
  },
}

export default media
