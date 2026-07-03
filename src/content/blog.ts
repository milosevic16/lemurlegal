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
      title: 'Blog — Lemur Legal',
      description:
        'Briefings, explainers and deep-dives on EU tech law — MiCA and token regulation, startups and equity, IP, export controls and dual-use — from Lemur Legal.',
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
      title: 'Blog — Lemur Legal',
      description:
        'Pregledi, razlage in poglobljene analize o evropskem tehnološkem pravu — MiCA in regulacija žetonov, zagonska podjetja in lastniški deleži, intelektualna lastnina, izvozni nadzor in dvojna raba — iz pisarne Lemur Legal.',
    },
    hero: {
      kicker: 'Blog · Ljubljana',
      hexrow: HEXROW,
      titleLead: 'Jasni odgovori na',
      titleAccent: 'zahtevna',
      titleTail: ' pravna vprašanja tehnologije.',
      slogan: '// zapiski s pravne fronte.',
      lead: 'Pregledi, razlage in poglobljene analize po naših treh področjih — od <strong>MiCA</strong> in klasifikacije žetonov, prek ustanovitve, lastniških deležev in intelektualne lastnine, do izvoznega nadzora in dvojne rabe. Napisano s strani tistih, ki nasvete tudi podpišejo.',
    },
    sections: [
      {
        id: 'crypto',
        mark: '§ 01',
        coord: '[ 46.05°N · 14.51°E · MiCA ]',
        label: 'P·1 — Kripto in fintech',
        nav: 'Kripto in fintech',
        title: 'MiCA, žetoni in pravila igre.',
        subtitle:
          'Kako se evropska ureditev kripta dejansko uporablja — beli listi, klasifikacija, licenciranje in pravna mnenja, ki jih zahtevajo borze.',
      },
      {
        id: 'startups',
        mark: '§ 02',
        coord: '[ 46.05°N · 14.51°E · BUILD ]',
        label: 'P·2 — Zagonska podjetja in globoka tehnologija',
        nav: 'Zagonska podjetja',
        title: 'Gradnja podjetja, ne le produkta.',
        subtitle:
          'Ustanovitev, lastniški deleži, intelektualna lastnina in pogodbe, ki jih ustanovitelji dejansko podpišejo — pravni temelji rastočega tehnološkega podjetja.',
      },
      {
        id: 'defence',
        mark: '§ 03',
        coord: '[ 46.05°N · 14.51°E · DUAL-USE ]',
        label: 'P·3 — Obramba in dvojna raba',
        nav: 'Obramba in dvojna raba',
        title: 'Nova meja: izvozni nadzor.',
        subtitle:
          'Ko napredna tehnologija postane dvojne rabe — klasifikacija, licenciranje, preverjanje sankcij in pregled tujih naložb, pojasnjeno iz prvih načel.',
      },
    ],
    states: {
      loading: 'Nalaganje prispevkov…',
      error: 'Prispevkov trenutno ni bilo mogoče naložiti — poskusite znova čez nekaj trenutkov.',
      empty: 'V tej kategoriji še ni prispevkov.',
    },
    cta: {
      title: 'Imate vprašanje, na katerega še nismo odgovorili?',
      text: 'Povejte nam, kaj gradite, in začrtali vam bomo pravno pot — s fiksno ceno, pisno. Ena pisarna, tri meje.',
      action: 'Naročite se na posvet',
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
