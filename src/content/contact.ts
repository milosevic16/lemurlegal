import type { Bilingual, PageMeta } from './types'

interface Line { k: string; name: string; desc: string }

export interface ContactContent {
  meta: PageMeta
  hero: { kicker: string; h1Main: string; h1Em: string; slogan: string; lead: string }
  form: {
    label: string
    title: string
    subtitle: string
    nameLabel: string
    emailLabel: string
    companyLabel: string
    companyOpt: string
    frontierLabel: string
    options: [string, string, string, string]
    briefLabel: string
    briefPlaceholder: string
    submit: string
    note: string
  }
  console: {
    cmd: string
    emailLabel: string
    emailTail: string
    seatLabel: string
    seatVal: string
    seatTail: string
    hoursLabel: string
    hoursVal: string
    langLabel: string
    langVal: string
    feeLabel: string
    feeVal: string
    feeTail: string
    respLabel: string
    respVal: string
    awaiting: string
  }
  lines: { label: string; title: string; subtitle: string; items: [Line, Line, Line] }
  details: {
    emailH: string
    officeH: string
    officeVal: string
    hoursH: string
    hoursVal: string
    langH: string
    langVal: string
  }
  cta: { heading: string; text: string; action: string }
}

const contact: Bilingual<ContactContent> = {
  en: {
    meta: {
      title: 'Contact Lemur Legal — Tech Law in Ljubljana',
      description:
        'Send us your legal question. Fixed-fee tech-law advice for crypto, startups and defence, from a specialist office in Ljubljana. Reply within 24 hours.',
    },
    hero: {
      kicker: 'Contact · Ljubljana',
      h1Main: 'Start with the legal question.',
      h1Em: 'We map the path from there.',
      // TODO(sl-review): slogan is post-"popravki" copy (docx has the older line)
      slogan: '// From first question to legal strategy.',
      // TODO(sl-review): lead adjusted post-"popravki" (dropped "One firm, three frontiers.")
      lead: "Launching a token, raising a round, or scaling a product — send a short brief and we'll map the legal path, with a <strong>fixed fee in writing</strong>. We reply within 24 hours.",
    },
    form: {
      label: 'Get in touch',
      // TODO(sl-review): title + subtitle are post-"popravki" copy
      title: "Tell us what you're working on.",
      subtitle:
        "Share what you're building, where you are in the process and which frontier you're on. We'll take it from there.",
      nameLabel: 'Name',
      emailLabel: 'Email',
      companyLabel: 'Company',
      companyOpt: '/ optional',
      frontierLabel: 'Which frontier?',
      options: ['Crypto & Fintech', 'Startups & Deep Tech', 'Defence & Dual-Use', 'Not sure yet'],
      briefLabel: 'Legal question', // TODO(sl-review): post-"popravki" (was "Your brief")
      briefPlaceholder: "What are you building, and what's the legal question?",
      submit: 'Send enquiry', // TODO(sl-review): post-"popravki" (was "Send brief")
      note: 'Opens your email client, pre-filled. Or write us directly at',
    },
    console: {
      cmd: 'lemur-legal --contact',
      emailLabel: ' email     : ',
      emailTail: ' ...... LIVE',
      seatLabel: ' seat      : ',
      seatVal: 'Ljubljana · EU',
      seatTail: ' · 46.05°N 14.51°E',
      hoursLabel: ' hours     : ',
      hoursVal: 'Mon–Fri · 09:00–18:00 CET',
      langLabel: ' languages : ',
      langVal: 'EN / SL',
      feeLabel: ' fee       : ',
      feeVal: 'fixed',
      feeTail: ' · no retainer',
      respLabel: ' response  : ',
      respVal: 'within 24h',
      awaiting: 'awaiting your brief',
    },
    lines: {
      label: 'Direct lines',
      title: 'Reach the right practice.',
      subtitle:
        "Know which frontier you're on? Write straight to the practice — or send a general brief and we'll route it.",
      items: [
        {
          k: 'P·1 — flagship',
          name: 'Crypto & Fintech',
          desc: 'MiCA, token offerings, licensing, AML and ongoing compliance for crypto and fintech companies.',
        },
        {
          k: 'P·2',
          name: 'Startups & Deep Tech',
          desc: 'Incorporation, ESOP, IP protection and the contracts founders actually sign.',
        },
        {
          k: 'P·3',
          name: 'Defence & Dual-Use',
          desc: 'Export controls, dual-use licensing and foreign-investment review for defence and dual-use tech.',
        },
      ],
    },
    details: {
      emailH: 'Email',
      officeH: 'Office',
      officeVal: 'Lemur Legal d.o.o.<br>Ljubljana, Slovenia · EU',
      hoursH: 'Hours',
      hoursVal: 'Mon–Fri<br>09:00–18:00 CET',
      langH: 'Languages',
      langVal: 'EN / SL',
    },
    cta: {
      heading: 'One firm, three frontiers.',
      text: "Not sure which practice you need? Send a brief and we'll route it — and put a fixed fee in writing.",
      action: 'Book a consultation',
    },
  },

  sl: {
    meta: {
      title: 'Kontakt — Lemur Legal, Ljubljana',
      // TODO(sl-review): meta title + description
      description:
        'Pošljite nam svoje pravno vprašanje. Fiksni honorar za kripto, startupe in obrambo iz specializirane pisarne v Ljubljani. Odgovor v 24 urah.',
    },
    hero: {
      kicker: 'Kontakt · Ljubljana',
      h1Main: 'Začnite s pravnim vprašanjem.',
      h1Em: 'Od tam naprej začrtamo pot.',
      // TODO(sl-review): slogan machine-translated (post-"popravki")
      slogan: '// od prvega vprašanja do pravne strategije.',
      // TODO(sl-review): lead machine-translated (post-"popravki")
      lead: 'Ali izdajate žeton, zbirate krog financiranja ali širite izdelek — pošljite kratko navodilo in začrtali bomo pravno pot, s <strong>fiksnim honorarjem v pisni obliki</strong>. Odgovorimo v 24 urah.',
    },
    form: {
      label: 'Stopite v stik',
      // TODO(sl-review): title + subtitle machine-translated (post-"popravki")
      title: 'Povejte nam, na čem delate.',
      subtitle:
        'Delite, kaj gradite, kje ste v procesu in na kateri meji delujete. Od tam naprej prevzamemo mi.',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      companyLabel: 'Podjetje',
      companyOpt: '/ neobvezno',
      frontierLabel: 'Katera meja?',
      options: ['Kripto in fintech', 'Zagonska podjetja in napredna tehnologija', 'Obramba in dvojna raba', 'Še ne vem'],
      briefLabel: 'Pravno vprašanje', // TODO(sl-review): post-"popravki"
      briefPlaceholder: 'Kaj gradite in kakšno je pravno vprašanje?',
      submit: 'Pošljite povpraševanje', // TODO(sl-review): post-"popravki"
      note: 'Odpre vaš e-poštni odjemalec z že vnesenimi podatki. Lahko pa nam pišete neposredno na',
    },
    console: {
      cmd: 'lemur-legal --contact',
      emailLabel: ' e-naslov  : ',
      emailTail: ' ...... V ŽIVO',
      seatLabel: ' sedež     : ',
      seatVal: 'Ljubljana · EU',
      seatTail: ' · 46,05° S 14,51° V',
      hoursLabel: ' delovnik  : ',
      hoursVal: 'pon–pet · 09:00–18:00 CET',
      langLabel: ' jeziki    : ',
      langVal: 'EN / SL',
      feeLabel: ' honorar   : ',
      feeVal: 'fiksni',
      feeTail: ' · brez akontacije',
      respLabel: ' odziv     : ',
      respVal: 'v 24 urah',
      awaiting: 'čakamo na vaše navodilo',
    },
    lines: {
      label: 'Neposredne povezave',
      title: 'Obrnite se na pravo področje.',
      subtitle:
        'Veste, na kateri meji delujete? Pišite neposredno področju — ali pošljite splošno navodilo in mi ga bomo usmerili.',
      items: [
        {
          k: 'P·1 — vodilno področje',
          name: 'Kripto in fintech',
          desc: 'MiCA, ponudbe žetonov, licenciranje, preprečevanje pranja denarja (AML) in stalna skladnost za kripto in fintech podjetja.',
        },
        {
          k: 'P·2',
          name: 'Zagonska podjetja in napredna tehnologija',
          desc: 'Ustanovitev podjetja, ESOP, zaščita intelektualne lastnine in pogodbe, ki jih ustanovitelji dejansko podpisujejo.',
        },
        {
          k: 'P·3',
          name: 'Obramba in dvojna raba',
          desc: 'Nadzor izvoza, licenciranje za dvojno rabo in pregled tujih naložb za obrambno tehnologijo in tehnologijo za dvojno rabo.',
        },
      ],
    },
    details: {
      emailH: 'E-naslov',
      officeH: 'Pisarna',
      officeVal: 'Lemur Legal d.o.o.<br>Ljubljana, Slovenija · EU',
      hoursH: 'Delovni čas',
      hoursVal: 'pon–pet<br>09:00–18:00 CET',
      langH: 'Jeziki',
      langVal: 'EN / SL',
    },
    cta: {
      heading: 'Ena pisarna, tri meje.',
      text: 'Niste prepričani, katero področje potrebujete? Pošljite navodilo in mi ga bomo usmerili — ter vam fiksni honorar podali v pisni obliki.',
      action: 'Rezervirajte posvet',
    },
  },
}

export default contact
