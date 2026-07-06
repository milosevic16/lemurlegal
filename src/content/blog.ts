import type { Bilingual, PageMeta } from './types'
import type { SectionId } from '@/lib/contentful'

// Static (non-card) chrome for the Blog — hero, the three practice sections'
// headings, list states, the CTA band and the article-page strings. The post
// cards come from src/lib/contentful.ts (Contentful `blogPost`). Mirrors
// src/content/media.ts so both list pages share one shape.
//
// SL strings are machine-translated — every `sl` value below is TODO(sl-review)
// pending Peter's review.
export interface BlogSection {
  /** Matches BlogPost.section + SECTIONS in src/lib/contentful.ts. */
  id: SectionId
  mark: string
  coord: string
  /** Section eyebrow, e.g. "P·1 — Crypto & Fintech". */
  label: string
  /** Short label used in the category nav bar. */
  nav: string
  title: string
  subtitle: string
}

export interface BlogContent {
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
  sections: [BlogSection, BlogSection, BlogSection]
  states: { loading: string; error: string; empty: string }
  cta: { title: string; text: string; action: string }
  /** Strings for the single-article page (BlogPost.vue). */
  post: {
    back: string
    loading: string
    notFoundTitle: string
    notFoundText: string
    notFoundAction: string
    ctaAction: string
  }
}

const HEXROW =
  '0x7F59F5  0xD2DDD7  4C454741 4C2E4C41  0x3D7A5E  0xC4823A  4C4A4C20  0x131220  424C4F47  0x7F59F5'

const blog: Bilingual<BlogContent> = {
  en: {
    meta: {
      title: 'EU Tech Law Blog — Lemur Legal',
      description:
        'Briefings and deep-dives on EU tech law — MiCA and tokens, startups and equity, IP, export controls and dual-use.',
    },
    hero: {
      kicker: 'Blog · Ljubljana',
      hexrow: HEXROW,
      titleLead: 'Plain answers to',
      titleAccent: 'hard',
      titleTail: ' tech-law questions.',
      slogan: '// field notes from the legal frontier.',
      lead: 'Briefings, explainers and deep-dives across our three practices — from <strong>MiCA</strong> and token classification, through incorporation, equity and IP, to export controls and dual-use. Written by the people who sign the advice.',
    },
    sections: [
      {
        id: 'crypto',
        mark: '§ 01',
        coord: '[ 46.05°N · 14.51°E · MiCA ]',
        label: 'P·1 — Crypto & Fintech',
        nav: 'Crypto & Fintech',
        title: 'MiCA, tokens and the rulebook.',
        subtitle:
          'How EU crypto regulation actually applies — white papers, classification, licensing and the legal opinions exchanges ask for.',
      },
      {
        id: 'startups',
        mark: '§ 02',
        coord: '[ 46.05°N · 14.51°E · BUILD ]',
        label: 'P·2 — Startups & Deep Tech',
        nav: 'Startups & Deep Tech',
        title: 'Building the company, not just the product.',
        subtitle:
          'Incorporation, equity, IP and the contracts founders actually sign — the legal scaffolding behind a growing technology company.',
      },
      {
        id: 'defence',
        mark: '§ 03',
        coord: '[ 46.05°N · 14.51°E · DUAL-USE ]',
        label: 'P·3 — Defence & Dual-Use',
        nav: 'Defence & Dual-Use',
        title: 'The new frontier: export controls.',
        subtitle:
          'When advanced technology becomes dual-use — classification, licensing, sanctions screening and foreign-investment review, explained from first principles.',
      },
    ],
    states: {
      loading: 'Loading posts…',
      error: "Couldn't load posts right now — please try again shortly.",
      empty: 'No posts in this section yet.',
    },
    cta: {
      title: "Have a question we haven't answered?",
      text: "Tell us what you're building and we'll map the legal path — with a fixed fee, in writing. One firm, three frontiers.",
      action: 'Book a consultation',
    },
    post: {
      back: 'All briefings',
      loading: 'Loading…',
      notFoundTitle: 'Post not found',
      notFoundText: "We couldn't find that article. It may have been moved or unpublished.",
      notFoundAction: 'Back to the blog',
      ctaAction: 'Have a question like this? Book a consultation',
    },
  },
  sl: {
    meta: {
      // Client-approved copy (SL corrections docx, 2026-07); long for SERP display, kept verbatim.
      title: 'Blog | Lemur Legal — pravni vpogledi za kripto, fintech, startup, deep tech, defence in dual-use podjetja',
      description:
        'Pravni prispevki in analize Lemur Legal o MiCA white paper dokumentaciji, pravnih mnenjih za kripto projekte, klasifikaciji žetonov, regulatorni skladnosti, ESOP, zaščiti intelektualne lastnine, pogodbah, nadzoru izvoza, dual-use tehnologijah in investicijski pripravljenosti.',
    },
    hero: {
      kicker: 'Blog · Ljubljana',
      hexrow: HEXROW,
      titleLead: 'Jasni odgovori na',
      titleAccent: 'zahtevna',
      titleTail: ' vprašanja o tehnološkem pravu.',
      slogan: '// prispevki s presečišča prava, tehnologije in regulacije.',
      lead: 'Pravni prispevki in analize za kripto, fintech, startup, deep tech, defence in dual-use podjetja — od MiCA white paper dokumentacije, pravnih mnenj za kripto projekte in regulatorne skladnosti do zaščite intelektualne lastnine, pogodb, nadzora izvoza in investicijske pripravljenosti.',
    },
    sections: [
      {
        id: 'crypto',
        mark: '§ 01',
        coord: '[ 46.05°N · 14.51°E · MiCA ]',
        label: 'P·1 — Kripto in fintech',
        nav: 'Kripto in fintech',
        title: 'MiCA, klasifikacija žetonov in pravna mnenja za kripto projekte.',
        subtitle:
          'Kako se evropska kripto regulativa uporablja v praksi — od MiCA white paper dokumentacije in klasifikacije žetonov do licenciranja, regulatorne skladnosti in pravnih mnenj za uvrstitev na kripto borze.',
      },
      {
        id: 'startups',
        mark: '§ 02',
        coord: '[ 46.05°N · 14.51°E · BUILD ]',
        label: 'P·2 — Startup in deep tech',
        nav: 'Startup in deep tech',
        title: 'Pravni temelji za startup in deep-tech podjetja.',
        subtitle:
          'Pravni prispevki o ustanovitvi podjetja, ESOP, zaščiti intelektualne lastnine in gospodarskih pogodbah za startup in deep-tech podjetja, ki rastejo na reguliranih ali investicijsko zahtevnih trgih.',
      },
      {
        id: 'defence',
        mark: '§ 03',
        coord: '[ 46.05°N · 14.51°E · DUAL-USE ]',
        label: 'P·3 — Defence in dual-use',
        nav: 'Defence in dual-use',
        title: 'Pravni okvir za defence in dual-use tehnologije.',
        subtitle:
          'Nadzor izvoza, dual-use klasifikacija, pregled sankcij, FDI screening, vzpostavitev okvirov skladnosti in regulativna opredelitev tehnologije — razloženo za tehnološka podjetja in investitorje.',
      },
    ],
    states: {
      loading: 'Nalaganje prispevkov…',
      error: 'Prispevkov trenutno ni bilo mogoče naložiti — poskusite znova čez nekaj trenutkov.',
      empty: 'V tej kategoriji še ni prispevkov.',
    },
    cta: {
      title: 'Potrebujete pravni pogled na to, kar gradite?',
      text: 'Pošljite nam kratek opis. Pregledali bomo kontekst, opredelili relevantna pravna in regulatorna vprašanja ter predlagali naslednji korak.',
      action: 'Začnite tukaj',
    },
    post: {
      back: 'Vsi prispevki',
      loading: 'Nalaganje…',
      notFoundTitle: 'Prispevek ni najden',
      notFoundText: 'Tega članka nismo našli. Morda je bil premaknjen ali umaknjen.',
      notFoundAction: 'Nazaj na blog',
      ctaAction: 'Imate podobno vprašanje? Naročite se na posvet',
    },
  },
}

export default blog
