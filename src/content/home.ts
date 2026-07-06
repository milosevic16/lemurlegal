import type { Bilingual, PageMeta } from './types'

interface Practice {
  pno: string
  name: string
  state: string
  desc: string
  services: { label: string; href: string }[]
}
interface ConsoleRow { key: string; val: string; cls: string; tail: string }
interface MatterStep { num: string; title: string; sub: string }

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
      title: 'Lemur Legal — Tech Law for Crypto, Deep Tech & Defence',
      description:
        'Specialist tech-law office in Ljubljana: MiCA & crypto, startups & deep tech, defence & dual-use. Fixed fees, first reply within 24 hours.',
    },
    hero: {
      kicker: 'Specialist tech-law office · Ljubljana',
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
            { label: 'MiCA white paper', href: '/mica-white-paper' },
            { label: 'Crypto Legal Opinion', href: '/crypto-legal-opinion' },
            { label: 'Regulatory Compliance', href: '/regulatory-compliance' },
          ],
        },
        {
          pno: 'P·2',
          name: 'Startups & Deep Tech',
          state: 'ACTIVE',
          desc: 'Incorporation, IP protection and commercial contracts for technology companies building and scaling in regulated markets.',
          services: [
            { label: 'Incorporation & ESOP', href: '/incorporation-esop' },
            { label: 'IP protection — registered representatives', href: '/ip-protection' },
            { label: 'Contracts & commercial', href: '/startups-contracts' },
          ],
        },
        {
          pno: 'P·3',
          name: 'Defence & Dual-Use',
          state: 'ACTIVE',
          desc: 'Export controls, dual-use licensing, FDI screening and commercial contracts for defence and dual-use technology companies.',
          services: [
            { label: 'Investment readiness review', href: '/investment-readiness-review' },
            { label: 'Compliance frameworks', href: '/compliance-frameworks' },
            { label: 'Regulatory qualification', href: '/regulatory-qualification' },
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
            sub: "Tell us what you're building. We'll map the legal path, identify the key risks and define the next steps.",          },
          {
            num: '02',
            title: 'Fixed-fee proposal',
            sub: 'We define the scope, deliverables and fixed fee before work begins. No hourly surprises, no open-ended retainer.',          },
          {
            num: '03',
            title: 'Dedicated legal support',
            sub: 'Once we begin, you work with a dedicated legal team that understands your project, keeps the work moving and supports you from first filing to ongoing compliance.',          },
        ],
        footer: '$ open-matter --client=you  →',
      },
      action: 'Book a consultation',
    },
  },

  sl: {
    meta: {
      // Client-approved copy (SL corrections docx, 2026-07). Long for SERP display —
      // Google truncates titles ~60 chars and descriptions ~160; kept verbatim per client.
      title: 'Lemur Legal - specializirana pravna pisarna za kripto, fintech, startup, deep tech, defence in dual-use podjetja.',
      description:
        'Lemur Legal je specializirana pravna pisarna za kripto, fintech, startup, deep tech, defence in dual-use podjetja. MiCA white paper, kripto pravna mnenja, regulatorna skladnost, IP, pogodbe in regulatorna opredelitev tehnologij.',
    },
    hero: {
      kicker: 'Specializirana pravna pisarna za tehnološko pravo · Ljubljana',
      titleGlitch: 'Vaš terminal v pravni svet:',
      titleLead: 'pravo za',
      crypto: 'kripto',
      deeptech: 'deep tech',
      and: 'ter',
      defence: 'obrambo in dvojno rabo',
      actionPrimary: 'Začnite tukaj',
      actionSecondary: 'Raziščite storitve',
      nodes: ['zadeve: odprte', 'ponudba: fiksna', 'jezik: EN / SL'],
    },
    console: {
      cmd1: 'lemur-legal --status',
      rows: [
        { key: '  fintech   : ', val: 'skladno z MiCA', cls: 'ok', tail: ' ........... AKTIVNO' },
        { key: '  zagonska  : ', val: 'ustanovljeno · IP zaščitena', cls: 'ok', tail: ' .. AKTIVNO' },
        { key: '  obramba   : ', val: 'dvojna raba · nadzor izvoza', cls: 'wn', tail: ' ..... PRIPRAVA' },
        { key: '  sedež     : ', val: 'Ljubljana · EU', cls: 'em', tail: ' ............ v živo' },
        { key: '  ponudba   : ', val: 'fiksna', cls: 'ok', tail: ' · EN/SL' },
      ],
      cmd2: 'open-matters',
      ready: '  pripravljeni · začnemo z vašim vprašanjem ..........',
    },
    practices: {
      heading: 'Trije sektorji. Ena specializirana pravna pisarna.',
      subtitle:
        'Lemur Legal svetuje strankam na treh specializiranih področjih: kripto in fintech, startup in deep tech ter defence in dual-use. Vsako področje združuje pravno znanje, razumevanje reguliranih trgov in praktične izkušnje z industrijami, v katerih se pravila hitro spreminjajo.',
      items: [
        {
          pno: 'P·1 — vodilno področje',
          name: 'Kripto in fintech',
          state: 'AKTIVNO',
          desc: 'MiCA, pravna mnenja za kripto projekte in stalna regulatorna skladnost za kripto in fintech podjetja.',
          services: [
            { label: 'MiCA white paper (bela knjiga)', href: '/mica-white-paper' },
            { label: 'Pravno mnenje za kripto projekt', href: '/crypto-legal-opinion' },
            { label: 'Regulatorna skladnost', href: '/regulatory-compliance' },
          ],
        },
        {
          pno: 'P·2',
          name: 'Startup & deep tech',
          state: 'AKTIVNO',
          desc: 'Ustanovitev podjetja, ESOP, zaščita intelektualne lastnine in pogodbe za tehnološka podjetja, ki gradijo ali rastejo na reguliranih trgih.',
          services: [
            { label: 'Ustanovitev podjetja in ESOP', href: '/incorporation-esop' },
            { label: 'Zaščita intelektualne lastnine', href: '/ip-protection' },
            { label: 'Pogodbe in gospodarsko pravo', href: '/startups-contracts' },
          ],
        },
        {
          pno: 'P·3',
          name: 'Obramba in dvojna raba',
          state: 'AKTIVNO',
          desc: 'Nadzor izvoza, licenciranje blaga in tehnologij z dvojno rabo (“dual-use”), pregled neposrednih tujih naložb ter pogodbe za podjetja s področja obrambnih tehnologij in tehnologij dvojne rabe.',
          services: [
            { label: 'Pregled investicijske pripravljenosti', href: '/investment-readiness-review' },
            { label: 'Vzpostavitev okvirov skladnosti', href: '/compliance-frameworks' },
            { label: 'Regulatorna opredelitev tehnologije', href: '/regulatory-qualification' },
          ],
        },
      ],
    },
    founder: {
      heading: 'Ustanovitelj',
      photoLabel: 'FOTOGRAFIJA',
      name: 'dr. Peter Merc',
      metaName: 'DR. P. MERC',
      role: 'Ustanovitelj · pravnik za fintech in tehnološko pravo · Lemur Legal',
      bio: 'Peter deluje na področju tehnološkega in finančnega prava, s poudarkom na regulaciji kripto, fintech in startup ekosistemih. Kripto in fintech projektom ter tehnološkim startupom svetuje pri regulatorni skladnosti, pogodbenem pravu, intelektualni lastnini in strukturiranju poslovanja. Njegovo delo je usmerjeno v praktične pravne rešitve na presečišču prava, tehnologije in regulacije.<br><br>Peter deluje tudi kot zunanji ocenjevalec za <strong>Horizon Europe</strong> in <strong>NATO DIANA</strong>, kjer ocenjuje deep-tech in obrambne projekte v shemah financiranja. Je partner v družbah tveganega kapitala <strong>Suricate Ventures</strong> in <strong>IBEX Equity Partners</strong>, zato podjetjem, s katerimi sodeluje, prinaša dvojno perspektivo — kot pravni svetovalec in kot investitor.',
      creds: [
        'Pravnik za tehnološko in finančno pravo',
        'Regulacija kripta in fintech skladnost',
        'Pogodbe, intelektualna lastnina in strukturiranje podjetij',
        'Ocenjevalec za Horizon Europe',
        'Ocenjevalec za NATO DIANA',
        'Partner v družbah tveganega kapitala Suricate Ventures in IBEX Equity Partners',
      ],
      sigName: '/s/ dr. Peter Merc',
      sigRole: '— Ustanovitelj',
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    cta: {
      heading: 'Začnite s pravnim vprašanjem.',
      lead: 'Ne glede na to, ali podjetje šele ustanavljate, ga razvijate, se pripravljate na investicijo ali vstopate na reguliran trg — začnite s pravnim vprašanjem. Od tam naprej začrtamo pot.',
      matter: {
        header: 'Od prvega posveta do namenske pravne podpore',
        steps: [
          {
            num: '01',
            title: 'Uvodni posvet',
            sub: 'Povejte nam, kaj gradite, kje ste v procesu in katero odločitev morate sprejeti. Opredelimo pravni okvir, ključna tveganja in naslednje korake.',          },
          {
            num: '02',
            title: 'Ponudba',
            sub: 'Pred začetkom sodelovanja jasno določimo, kaj bomo naredili, kaj boste prejeli in kakšna bo cena. Brez odprtih ur, nejasnega obsega ali nepričakovanih stroškov.',          },
          {
            num: '03',
            title: 'Pravna podpora pri izvedbi',
            sub: 'Ko začnemo, imate ob sebi ekipo, ki razume vaš projekt, poslovni model in regulatorni okvir. Pomagamo vam pri konkretnih korakih — od dokumentacije in postopkov do vzpostavitve ter vzdrževanja skladnosti.',          },
        ],
        footer: '$ open-matter --client=you  →',
      },
      action: 'Začnite tukaj',
    },
  },
}

export default home
