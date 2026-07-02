import type { Bilingual, PageMeta } from './types'

interface Practice {
  pno: string
  name: string
  state: string
  desc: string
  services: { label: string; href: string }[]
}
interface ConsoleRow { key: string; val: string; cls: string; tail: string }
interface MatterStep { num: string; title: string; sub: string; badge: string }

export interface HomeContent {
  meta: PageMeta
  hero: {
    kicker: string
    titleGlitch: string
    titleLead: string
    crypto: string
    deeptech: string
    and: string
    defence: string
    actionPrimary: string
    actionSecondary: string
    nodes: [string, string, string]
  }
  console: { cmd1: string; rows: ConsoleRow[]; cmd2: string; ready: string }
  practices: { heading: string; subtitle: string; items: [Practice, Practice, Practice] }
  founder: {
    heading: string
    photoLabel: string
    name: string
    metaName: string
    role: string
    bio: string
    creds: string[]
    sigName: string
    sigRole: string
    linkedinAria: string
  }
  cta: {
    heading: string
    lead: string
    matter: { header: string; steps: [MatterStep, MatterStep, MatterStep]; footer: string }
    action: string
  }
}

const home: Bilingual<HomeContent> = {
  en: {
    meta: {
      title: 'Lemur Legal — Law for crypto, fintech, startups, deep tech & dual-use',
      description:
        'Lemur Legal is a specialist tech-law firm in Ljubljana. One firm, three practices: crypto & fintech (MiCA, tokens, licensing), startups & deep tech (incorporation, IP, contracts), and an emerging defence & dual-use practice. Founded by Peter Merc, Ph.D.',
    },
    hero: {
      kicker: 'Specialist tech-law firm · Ljubljana',
      titleGlitch: 'Your terminal to the legal world:',
      titleLead: 'Law for',
      crypto: 'crypto',
      deeptech: 'deep tech',
      and: 'and',
      defence: 'defence & dual-use',
      actionPrimary: 'Book a consultation',
      actionSecondary: 'Explore our services',
      nodes: ['matters: open', 'fee: fixed', 'lang: EN / SL'],
    },
    console: {
      cmd1: 'lemur-legal --status',
      rows: [
        { key: '  fintech   : ', val: 'MiCA-compliant', cls: 'ok', tail: ' ........... ACTIVE' },
        { key: '  startups  : ', val: 'incorporated · IP-protected', cls: 'ok', tail: ' .. ACTIVE' },
        { key: '  defence   : ', val: 'dual-use · export-ctrl', cls: 'wn', tail: ' ..... PREP' },
        { key: '  seat      : ', val: 'Ljubljana · EU', cls: 'em', tail: ' ............ live' },
        { key: '  fee       : ', val: 'fixed', cls: 'ok', tail: ' · no retainer · EN/SL' },
      ],
      cmd2: 'open-matters',
      ready: '  ready · awaiting your brief ..........',
    },
    practices: {
      // TODO(sl-review): heading + subtitle are post-"popravki" copy (not in docx)
      heading: 'Three sectors. Specialist legal services.',
      subtitle:
        'Lemur Legal advises clients across three specialist areas: crypto and fintech, startups and deep tech, and defence and dual-use innovation. Each practice combines legal knowledge with a practical understanding of the market it serves.',
      items: [
        {
          pno: 'P·1 — flagship',
          name: 'Crypto & Fintech',
          state: 'ACTIVE',
          desc: 'MiCA, crypto legal opinion, and ongoing compliance for crypto and fintech companies.',
          services: [
            { label: 'MiCA white paper', href: '/mica_white_paper' },
            { label: 'Crypto Legal Opinion', href: '/crypto_legal_opinion' },
            { label: 'Regulatory Compliance', href: '/regulatory_compliance' },
          ],
        },
        {
          pno: 'P·2',
          name: 'Startups & Deep Tech',
          state: 'ACTIVE',
          desc: 'Incorporation, IP protection and commercial contracts for technology companies building and scaling in regulated markets.',
          services: [
            { label: 'Incorporation & ESOP', href: '/incorporation_esop' },
            { label: 'IP protection — registered representatives', href: '/ip_protection' },
            { label: 'Contracts & commercial', href: '/startups_contracts' },
          ],
        },
        {
          pno: 'P·3',
          name: 'Defence & Dual-Use',
          state: 'ACTIVE',
          desc: 'Export controls, dual-use licensing, FDI screening and commercial contracts for defence and dual-use technology companies.',
          services: [
            { label: 'Investment readiness review', href: '/investment_readiness_review' },
            { label: 'Compliance frameworks', href: '/compliance_frameworks' },
            { label: 'Regulatory qualification', href: '/regulatory_qualification' },
          ],
        },
      ],
    },
    founder: {
      heading: 'Founder',
      photoLabel: 'PHOTO',
      name: 'Peter Merc, Ph.D.',
      metaName: 'P. MERC, PH.D.',
      role: 'Founder · fintech lawyer · Lemur Legal',
      bio: 'Peter is a technology and financial lawyer with a focus on cryptocurrency regulation, fintech, and startup ecosystems. He advises crypto companies, fintech ventures, and technology startups on regulatory compliance, contract law, and intellectual property matters, providing practical legal solutions at the intersection of law and emerging technology.<br><br>Beyond private practice, Peter serves as an external evaluator for <strong>Horizon Europe</strong> and <strong>NATO Diana</strong>, assessing deep-tech and innovation-driven ventures for programme funding. He is also a partner at venture capital firms, <strong>Suricate Ventures</strong> and <strong>IBEX Equity Partners</strong>, bringing a dual perspective as both legal counsel and investor to the companies he works with.',
      creds: [
        'Technology & financial lawyer',
        'Crypto regulation & fintech compliance',
        'Contracts, IP & startup structuring',
        'Horizon Europe evaluator',
        'NATO DIANA evaluator',
        'VC partner: Suricate Ventures & IBEX Equity Partners',
      ],
      sigName: '/s/ Peter Merc, Ph.D.',
      sigRole: '— Founder',
      linkedinAria: 'Peter Merc on LinkedIn',
    },
    cta: {
      heading: 'Start with the legal question.',
      // TODO(sl-review): lead is post-"popravki" copy (docx has the older wording)
      lead: "Whether you're launching, scaling, listing or entering a regulated market, bring us your legal question. We'll map the path from there.",
      // TODO(sl-review): whole matter-board is post-"popravki" (not in docx)
      matter: {
        header: 'From first consultation to dedicated legal support',
        steps: [
          {
            num: '01',
            title: 'Consultation',
            sub: "Tell us what you're building. We'll map the legal path, identify the key risks and define the next steps.",
            badge: 'OPEN',
          },
          {
            num: '02',
            title: 'Fixed-fee proposal',
            sub: 'We define the scope, deliverables and fixed fee before work begins. No hourly surprises, no open-ended retainer.',
            badge: 'in writing',
          },
          {
            num: '03',
            title: 'Dedicated legal support',
            sub: 'Once we begin, you work with a dedicated legal team that understands your project, keeps the work moving and supports you from first filing to ongoing compliance.',
            badge: 'one firm',
          },
        ],
        footer: '$ open-matter --client=you  →',
      },
      action: 'Book a consultation',
    },
  },

  sl: {
    meta: {
      title: 'Lemur Legal — Pravo za kripto, fintech, zagonska podjetja, napredno tehnologijo in dvojno rabo',
      // TODO(sl-review): meta description machine-translated
      description:
        'Lemur Legal je specializirana odvetniška pisarna za tehnološko pravo v Ljubljani. Ena pisarna, tri področja: kripto in fintech (MiCA, žetoni, licenciranje), zagonska podjetja in napredna tehnologija (ustanovitev, IL, pogodbe) ter obramba in dvojna raba. Ustanovitelj dr. Peter Merc.',
    },
    hero: {
      kicker: 'Specializirana odvetniška pisarna za tehnološko pravo · Ljubljana',
      titleGlitch: 'Vaš terminal v pravni svet:',
      titleLead: 'pravo za',
      crypto: 'kripto',
      deeptech: 'napredno tehnologijo',
      and: 'ter',
      defence: 'obrambo in dvojno rabo',
      actionPrimary: 'Rezervirajte posvet',
      actionSecondary: 'Raziščite naše storitve',
      nodes: ['zadeve: odprte', 'honorar: fiksni', 'jezik: EN / SL'],
    },
    console: {
      cmd1: 'lemur-legal --status',
      rows: [
        { key: '  fintech   : ', val: 'skladno z MiCA', cls: 'ok', tail: ' ........... AKTIVNO' },
        { key: '  zagonska  : ', val: 'ustanovljeno · IP zaščitena', cls: 'ok', tail: ' .. AKTIVNO' },
        { key: '  obramba   : ', val: 'dvojna raba · nadzor izvoza', cls: 'wn', tail: ' ..... PRIPRAVA' },
        { key: '  sedež     : ', val: 'Ljubljana · EU', cls: 'em', tail: ' ............ v živo' },
        { key: '  honorar   : ', val: 'fiksni', cls: 'ok', tail: ' · brez akontacije · EN/SL' },
      ],
      cmd2: 'open-matters',
      ready: '  pripravljeni · čakamo na vaše navodilo ..........',
    },
    practices: {
      // TODO(sl-review): heading + subtitle machine-translated (post-"popravki")
      heading: 'Trije sektorji. Specializirane pravne storitve.',
      subtitle:
        'Lemur Legal svetuje strankam na treh specializiranih področjih: kripto in fintech, zagonska podjetja in napredna tehnologija ter obramba in inovacije za dvojno rabo. Vsako področje združuje pravno znanje s praktičnim razumevanjem trga, ki mu služi.',
      items: [
        {
          pno: 'P·1 — vodilno področje',
          name: 'Kripto in fintech',
          state: 'AKTIVNO',
          desc: 'MiCA, pravno mnenje s področja kripta in stalna skladnost za kripto in fintech podjetja.',
          services: [
            { label: 'Beli papir MiCA', href: '/mica_white_paper' },
            { label: 'Pravno mnenje s področja kripta', href: '/crypto_legal_opinion' },
            { label: 'Regulativna skladnost', href: '/regulatory_compliance' },
          ],
        },
        {
          pno: 'P·2',
          name: 'Zagonska podjetja in napredna tehnologija',
          state: 'AKTIVNO',
          desc: 'Ustanovitev podjetja, zaščita intelektualne lastnine in gospodarske pogodbe za tehnološka podjetja, ki gradijo in rastejo na reguliranih trgih.',
          services: [
            { label: 'Ustanovitev podjetja in ESOP', href: '/incorporation_esop' },
            { label: 'Zaščita intelektualne lastnine — registrirani zastopniki', href: '/ip_protection' },
            { label: 'Pogodbe in gospodarsko pravo', href: '/startups_contracts' },
          ],
        },
        {
          pno: 'P·3',
          name: 'Obramba in dvojna raba',
          state: 'AKTIVNO',
          desc: 'Nadzor izvoza, licenciranje za dvojno rabo, pregled neposrednih tujih naložb in gospodarske pogodbe za podjetja s področja obrambne tehnologije in tehnologije za dvojno rabo.',
          services: [
            { label: 'Pregled pripravljenosti na investicije', href: '/investment_readiness_review' },
            { label: 'Okviri skladnosti', href: '/compliance_frameworks' },
            { label: 'Regulativna opredelitev', href: '/regulatory_qualification' },
          ],
        },
      ],
    },
    founder: {
      heading: 'Ustanovitelj',
      photoLabel: 'FOTOGRAFIJA',
      name: 'dr. Peter Merc',
      metaName: 'DR. P. MERC',
      role: 'Ustanovitelj · fintech odvetnik · Lemur Legal',
      bio: 'Peter je odvetnik za tehnološko in finančno pravo, osredotočen na regulacijo kriptovalut, fintech in ekosisteme zagonskih podjetij. Kripto podjetjem, fintech podvigom in tehnološkim zagonskim podjetjem svetuje glede regulativne skladnosti, pogodbenega prava in vprašanj intelektualne lastnine ter zagotavlja praktične pravne rešitve na presečišču prava in nastajajočih tehnologij.<br><br>Poleg zasebne prakse Peter deluje kot zunanji ocenjevalec za <strong>Horizon Europe</strong> in <strong>NATO Diana</strong>, kjer ocenjuje podvige na področju napredne tehnologije in inovacij za programsko financiranje. Je tudi partner v družbah tveganega kapitala <strong>Suricate Ventures</strong> in <strong>IBEX Equity Partners</strong>, s čimer podjetjem, s katerimi sodeluje, prinaša dvojni pogled — kot pravni svetovalec in kot investitor.',
      creds: [
        'Odvetnik za tehnološko in finančno pravo',
        'Regulacija kripta in fintech skladnost',
        'Pogodbe, intelektualna lastnina in strukturiranje zagonskih podjetij',
        'Ocenjevalec za Horizon Europe',
        'Ocenjevalec za NATO DIANA',
        'Partner v skladu tveganega kapitala: Suricate Ventures in IBEX Equity Partners',
      ],
      sigName: '/s/ dr. Peter Merc',
      sigRole: '— Ustanovitelj',
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    cta: {
      heading: 'Začnite s pravnim vprašanjem.',
      // TODO(sl-review): lead machine-translated (post-"popravki")
      lead: 'Ne glede na to, ali podjetje zaganjate, rastete, ga uvrščate na borzo ali vstopate na regulirani trg — prinesite nam svoje pravno vprašanje. Od tam naprej začrtamo pot.',
      // TODO(sl-review): whole matter-board machine-translated (post-"popravki")
      matter: {
        header: 'Od prvega posveta do namenske pravne podpore',
        steps: [
          {
            num: '01',
            title: 'Posvet',
            sub: 'Povejte nam, kaj gradite. Začrtali bomo pravno pot, prepoznali ključna tveganja in določili naslednje korake.',
            badge: 'ODPRTO',
          },
          {
            num: '02',
            title: 'Ponudba s fiksnim honorarjem',
            sub: 'Pred začetkom dela določimo obseg, rezultate in fiksni honorar. Brez presenečenj po urah, brez odprtih akontacij.',
            badge: 'v pisni obliki',
          },
          {
            num: '03',
            title: 'Namenska pravna podpora',
            sub: 'Ko začnemo, sodelujete z namensko pravno ekipo, ki razume vaš projekt, ohranja tempo dela in vas podpira od prve vloge do stalne skladnosti.',
            badge: 'ena pisarna',
          },
        ],
        footer: '$ open-matter --client=you  →',
      },
      action: 'Rezervirajte posvet',
    },
  },
}

export default home
