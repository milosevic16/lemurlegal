import type { Bilingual, PageMeta } from './types'

// Static (non-card) chrome for the Media Coverage page — hero, the single
// section's heading, list states and the CTA band. The cards themselves come
// from src/lib/media.ts (Contentful / SAMPLE_MEDIA). Mirrors the blog's layout
// but with one section instead of three.
//
// SL strings are machine-translated (the blog/press docx predate this page) —
// every `sl` value below is TODO(sl-review) pending Peter's review.
export interface MediaContent {
  meta: PageMeta
  hero: {
    kicker: string
    /** Decorative scrolling hex row — same in both locales (pure ornament). */
    hexrow: string
    titleLead: string
    titleAccent: string
    titleTail: string
    slogan: string
    /** May contain <strong> — rendered with v-html. */
    lead: string
  }
  section: {
    mark: string
    coord: string
    label: string
    title: string
    subtitle: string
  }
  states: { loading: string; error: string; empty: string }
  cta: { title: string; text: string; action: string }
}

const HEXROW = '0x7F59F5  0xD2DDD7  4D454449  41202020  0x3D7A5E  0xC4823A  4C4A4C20  0x131220  4D454449  0x7F59F5'

const media: Bilingual<MediaContent> = {
  en: {
    meta: {
      title: 'Media Coverage — Lemur Legal',
      description:
        'Interviews, commentary and press coverage featuring Lemur Legal across Slovenian and international media — on MiCA, crypto regulation, startups and the law behind emerging technology.',
    },
    hero: {
      kicker: 'Media · Ljubljana',
      hexrow: HEXROW,
      titleLead: 'Our work,',
      titleAccent: 'in the media',
      titleTail: '.',
      slogan: '// selected press & media coverage.',
      lead: 'Interviews, commentary and coverage featuring Lemur Legal across Slovenian and international media — on <strong>MiCA</strong> and token regulation, startups and equity, IP, and the law behind emerging technology.',
    },
    section: {
      mark: '§ 01',
      coord: '[ 46.05°N · 14.51°E · MEDIA ]',
      label: 'P·1 — Media Coverage',
      title: 'Selected coverage.',
      subtitle:
        'Where Lemur Legal has been quoted, interviewed or featured — a running record of our contributions to the public conversation on technology law.',
    },
    states: {
      loading: 'Loading coverage…',
      error: "Couldn't load media coverage right now — please try again shortly.",
      empty: 'No media coverage yet.',
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
        'Intervjuji, komentarji in medijski prispevki z Lemur Legal v slovenskih in mednarodnih medijih — o MiCA, regulaciji kriptovalut, zagonskih podjetjih in pravu, ki stoji za novimi tehnologijami.',
    },
    hero: {
      kicker: 'Mediji · Ljubljana',
      hexrow: HEXROW,
      titleLead: 'Naše delo',
      titleAccent: 'v medijih',
      titleTail: '.',
      slogan: '// izbrani medijski odmevi in objave.',
      lead: 'Intervjuji, komentarji in prispevki z Lemur Legal v slovenskih in mednarodnih medijih — o <strong>MiCA</strong> in regulaciji žetonov, zagonskih podjetjih in lastniških deležih, intelektualni lastnini ter pravu, ki stoji za novimi tehnologijami.',
    },
    section: {
      mark: '§ 01',
      coord: '[ 46.05°N · 14.51°E · MEDIJI ]',
      label: 'P·1 — V medijih',
      title: 'Izbrane objave.',
      subtitle:
        'Kjer je bil Lemur Legal citiran, intervjuvan ali predstavljen — tekoč pregled naših prispevkov k javni razpravi o tehnološkem pravu.',
    },
    states: {
      loading: 'Nalaganje objav…',
      error: 'Medijskih objav trenutno ni bilo mogoče naložiti — poskusite znova čez nekaj trenutkov.',
      empty: 'Zaenkrat še ni medijskih objav.',
    },
    cta: {
      title: 'Pišete o tehnološkem pravu?',
      text: 'Za intervjuje, strokovne komentarje ali ozadje nas kontaktirajte — novinarjem z veseljem pomagamo pravo predstaviti pravilno.',
      action: 'Stopite v stik',
    },
  },
}

export default media
