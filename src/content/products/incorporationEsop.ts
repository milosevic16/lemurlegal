import type { Bilingual, PageMeta } from '../types'

interface Why { wn: string; h3: string; p: string }
interface Step { stepK: string; title: string; sub: string; tag: string }
interface Cov { h4: string; rows: string[] }
interface Faq { q: string; a: string }
interface Cross { h4: string; p: string }

export interface IncorporationESOPContent {
  meta: PageMeta
  hero: { kicker: string; h1Glitch: string; h1Em: string; slogan: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  why: { h2: string; items: [Why, Why, Why] }
  how: { h2: string; steps: [Step, Step, Step] }
  coverage: { h2: string; items: Cov[]; calloutH3: string; calloutP: string }
  expert: { eyebrow: string; h2: string; name: string; role: string; bio1: string; bio2: string; linkedinAria: string }
  faq: { h2: string; items: Faq[] }
  ctaBand: { text: string; btn: string }
  form: {
    eye: string; h: string; lead: string; contactPrefix: string
    nameLabel: string; emailLabel: string; projLabel: string; linkLabel: string
    choiceLabel: string; chips: [string, string, string]; submit: string
  }
  cross: { h2: string; items: [Cross, Cross] }
}

const BIO1_EN = 'Peter is a <strong>technology and financial lawyer</strong> with a focus on cryptocurrency regulation, fintech, and startup ecosystems. He advises crypto companies, fintech ventures, and technology startups on regulatory compliance, contract law, and intellectual property matters, providing practical legal solutions at the intersection of law and emerging technology.'
const BIO2_EN = 'Beyond private practice, Peter serves as an external evaluator for <strong>Horizon Europe</strong> and <strong>NATO Diana</strong>, assessing deep-tech and innovation-driven ventures for programme funding. He is also a partner at venture capital firms, <strong>Suricate Ventures</strong> and <strong>IBEX Equity Partners</strong>, bringing a dual perspective as both legal counsel and investor to the companies he works with.'
const BIO1_SL = 'Peter je <strong>odvetnik za tehnološko in finančno pravo</strong>, osredotočen na regulacijo kriptovalut, fintech in ekosisteme zagonskih podjetij. Kripto podjetjem, fintech podvigom in tehnološkim zagonskim podjetjem svetuje glede regulativne skladnosti, pogodbenega prava in vprašanj intelektualne lastnine ter zagotavlja praktične pravne rešitve na presečišču prava in nastajajočih tehnologij.'
const BIO2_SL = 'Poleg zasebne prakse Peter deluje kot zunanji ocenjevalec za <strong>Horizon Europe</strong> in <strong>NATO Diana</strong>, kjer ocenjuje podvige na področju napredne tehnologije in inovacij za programsko financiranje. Je tudi partner v družbah tveganega kapitala <strong>Suricate Ventures</strong> in <strong>IBEX Equity Partners</strong>, s čimer podjetjem, s katerimi sodeluje, prinaša dvojni pogled — kot pravni svetovalec in kot investitor.'

const c: Bilingual<IncorporationESOPContent> = {
  en: {
    meta: {
      title: 'Incorporation & ESOP — Lemur Legal',
      description:
        "Set up your company and incentivise your team. From the right legal form to employee option plans (ESOP), we lay your startup's legal foundations.",
    },
    hero: {
      kicker: 'Incorporation & ESOP · Ljubljana',
      h1Glitch: 'Set up your company.',
      h1Em: 'Incentivise your team.',
      slogan: '// incorporate · structure · incentivise.',
      lead: 'From choosing the right legal form to issuing employee options, we put the <strong>legal foundations of your startup</strong> in place — correctly, from day one.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'Company setup · Founder & employee docs · ESOP',
    },
    strip: {
      k: 'Why it matters',
      v: 'A startup enters relationships with co-founders, employees, contractors and investors from day one. The right structure and documents remove or sharply limit the risks in each of them.',
    },
    why: {
      h2: 'The legal foundations every founder needs.',
      items: [
        { wn: '01', h3: 'Right legal form', p: 'We advise on the legal form and country of incorporation — and restructure from sole trader to a limited company when you outgrow it.' },
        { wn: '02', h3: 'Clean cap table', p: 'Option agreements (ESOP) and founder arrangements that keep your equity clear and investable.' },
        { wn: '03', h3: 'Solid paperwork', p: 'Articles of association, employment and contractor agreements, NDAs and internal acts — ready before you need them.' },
      ],
    },
    how: {
      h2: 'From idea to incorporated, incentivised company.',
      steps: [
        { stepK: 'Step 01', title: 'Structure', sub: 'We advise on the right legal form and the jurisdiction of incorporation.', tag: 'legal form · jurisdiction' },
        { stepK: 'Step 02', title: 'Incorporate', sub: 'We set up the company, draft the articles of association and arrange the notary.', tag: 'articles · notary' },
        { stepK: 'Step 03', title: 'Incentivise', sub: 'We prepare option agreements (ESOP), employment and service agreements, NDAs and internal acts.', tag: 'ESOP · agreements' },
      ],
    },
    coverage: {
      h2: 'Everything that puts your company on solid legal ground.',
      items: [
        { h4: 'Company & legal form', rows: ['Advice on the legal form', 'Country of incorporation', 'Restructuring from sole trader (s.p.) to d.o.o.', 'Notary appointment'] },
        { h4: 'Founding & internal documents', rows: ['Articles of association', 'Employment agreements', 'Service agreements (contractors)', 'Non-disclosure agreements', 'Internal company acts'] },
        { h4: 'ESOP & equity', rows: ['Option agreements (employee stock options)', 'Founder equity arrangements', 'Legal opinion & risk assessment'] },
      ],
      calloutH3: 'Insiders in the startup ecosystem',
      calloutP: 'We are founders, investors and startup mentors ourselves — listed on the Start:up Slovenia mentor roster and active in national startup programmes. We know the documents investors expect to see.',
    },
    expert: {
      eyebrow: 'Founder · startup-ecosystem insider · Lemur Legal',
      h2: "Who you'll work with",
      name: 'Peter Merc, Ph.D.',
      role: '// founders · investors · mentors',
      bio1: BIO1_EN,
      bio2: BIO2_EN,
      linkedinAria: 'Peter Merc on LinkedIn',
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        { q: 'Which legal form should my startup take?', a: 'We advise on the right legal form and the country of incorporation for your plans — and restructure from a sole trader (s.p.) to a limited company (d.o.o.) when you outgrow it.' },
        { q: 'What is an ESOP and do I need one?', a: 'An employee stock option plan lets you grant equity-based incentives to your team. We prepare the option agreements and align them with your cap table and founder arrangements.' },
        { q: 'What documents do founders need at the start?', a: 'Typically articles of association, employment and service (contractor) agreements, NDAs and internal company acts — we prepare them so they are ready before you need them.' },
        { q: 'Can you convert my sole trader business into a company?', a: 'Yes — we handle the restructuring from sole trader (s.p.) to a limited company (d.o.o.), including the documents and the notary appointment.' },
        { q: 'Do you work with international founders?', a: 'Yes — we advise on the jurisdiction of incorporation and structure the company and documents for cross-border teams and investors.' },
        { q: 'When should we put option agreements in place?', a: 'Early — clean, documented equity and option arrangements keep your cap table investable and help avoid disputes as you grow.' },
      ],
    },
    ctaBand: {
      text: "<b>Setting up or restructuring your company?</b> Tell us where you are and we'll map the steps and what comes next.",
      btn: 'Book a consultation',
    },
    form: {
      eye: '// get started',
      h: 'Send your inquiry.',
      lead: "Tell us about your company and what you need. We'll review it and come back with next steps — usually the same day.",
      contactPrefix: 'Ljubljana, Slovenia · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      projLabel: 'Company & website',
      linkLabel: 'What do you need?',
      choiceLabel: 'I need help with',
      chips: ['Incorporation', 'ESOP', 'Restructuring'],
      submit: 'Submit inquiry',
    },
    cross: {
      h2: 'Also from Lemur Legal',
      items: [
        { h4: 'IP Protection', p: 'IPR strategy, registration, contracts & licensing.' },
        { h4: 'Contracts & Commercial', p: 'The contracts that protect your business.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'Ustanovitev podjetja in ESOP — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Ustanovite podjetje in nagradite ekipo. Od prave pravne oblike do opcijskih načrtov za zaposlene (ESOP) — postavimo pravne temelje vašega startupa.',
    },
    hero: {
      // TODO(sl-review): kicker machine-translated
      kicker: 'Ustanovitev podjetja in ESOP · Ljubljana',
      h1Glitch: 'Ustanovite svoje podjetje.',
      h1Em: 'Nagradite svojo ekipo.',
      slogan: '// ustanovitev · strukturiranje · nagrajevanje.',
      lead: 'Od izbire prave pravne oblike do izdaje opcij za zaposlene poskrbimo za <strong>trdne pravne temelje vašega startup podjetja</strong> — pravilno, že od prvega dne.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje',
      // TODO(sl-review): hero meta machine-translated
      meta: 'Ustanovitev podjetja · Dokumenti za ustanovitelje in zaposlene · ESOP',
    },
    strip: {
      k: 'Zakaj je to pomembno',
      v: 'Startup že od prvega dne stopa v razmerja s soustanovitelji, zaposlenimi, zunanjimi izvajalci in investitorji. Pravilna struktura in dokumentacija odpravijo oziroma močno omejijo tveganja v vsakem izmed njih.',
    },
    why: {
      // TODO(sl-review): section heading machine-translated
      h2: 'Pravni temelji, ki jih potrebuje vsak ustanovitelj.',
      items: [
        { wn: '01', h3: 'Prava pravna oblika', p: 'Svetujemo glede pravne oblike in države ustanovitve — ter preoblikujemo samostojnega podjetnika (s.p.) v družbo z omejeno odgovornostjo (d.o.o.), ko to obliko prerastete.' },
        { wn: '02', h3: 'Čista lastniška struktura (cap table)', p: 'Opcijske pogodbe in dogovori med ustanovitelji, ki ohranjajo vaš kapital jasen in primeren za investicije.' },
        { wn: '03', h3: 'Trdna dokumentacija', p: 'Družbena pogodba, pogodbe o zaposlitvi in pogodbe z zunanjimi izvajalci, pogodbe o nerazkritju podatkov (NDA) ter interni akti podjetja — pripravljeni, preden jih potrebujete.' },
      ],
    },
    how: {
      // TODO(sl-review): section heading machine-translated
      h2: 'Od ideje do ustanovljenega in motiviranega podjetja.',
      steps: [
        // TODO(sl-review): step 01 sub differs from docx — translated from current EN
        { stepK: 'Korak 01', title: 'Struktura', sub: 'Svetujemo glede prave pravne oblike in jurisdikcije ustanovitve.', tag: 'pravna oblika · jurisdikcija' },
        { stepK: 'Korak 02', title: 'Ustanovitev podjetja', sub: 'Ustanovimo podjetje, pripravimo osnutek družbene pogodbe in organiziramo obisk pri notarju.', tag: 'družbena pogodba · notar' },
        { stepK: 'Korak 03', title: 'Motivacija', sub: 'Pripravimo opcijske pogodbe (ESOP), pogodbe o zaposlitvi in pogodbe o sodelovanju, pogodbe o nerazkritju podatkov (NDA) ter interne akte.', tag: 'ESOP · pogodbe' },
      ],
    },
    coverage: {
      h2: 'Trdni pravni temelji za vaše podjetje.',
      items: [
        { h4: 'Podjetje in pravna oblika', rows: ['Svetovanje o pravni obliki', 'Država ustanovitve', 'Preoblikovanje iz samostojnega podjetnika (s.p.) v d.o.o.', 'Sestanek pri notarju'] },
        { h4: 'Ustanovni in interni dokumenti', rows: ['Družbena pogodba', 'Pogodbe o zaposlitvi', 'Pogodbe o sodelovanju (zunanji izvajalci)', 'Pogodbe o nerazkritju podatkov (NDA)', 'Interni akti podjetja'] },
        { h4: 'ESOP in kapital', rows: ['Opcijske pogodbe (delniške/poslovne opcije za zaposlene)', 'Dogovori o kapitalu ustanoviteljev', 'Pravno mnenje in ocena tveganja'] },
      ],
      // TODO(sl-review): callout heading machine-translated
      calloutH3: 'Poznavalci startup ekosistema',
      calloutP: 'Tudi sami smo ustanovitelji, investitorji in startup mentorji — uvrščeni na seznam mentorjev Start:up Slovenija in aktivni v nacionalnih startup programih. Vemo, katere dokumente investitorji pričakujejo.',
    },
    expert: {
      eyebrow: 'Ustanovitelj · poznavalec startup ekosistema · Lemur Legal',
      h2: 'S kom boste sodelovali',
      name: 'dr. Peter Merc',
      // TODO(sl-review): role line machine-translated
      role: '// ustanovitelji · investitorji · mentorji',
      bio1: BIO1_SL,
      bio2: BIO2_SL,
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    faq: {
      h2: 'Pogosto zastavljena vprašanja',
      items: [
        { q: 'Katero pravno obliko naj prevzame moj startup?', a: 'Svetujemo o pravi pravni obliki in državi ustanovitve za vaše načrte — ter preoblikujemo samostojnega podjetnika (s.p.) v družbo z omejeno odgovornostjo (d.o.o.), ko to obliko prerastete.' },
        { q: 'Kaj je ESOP in ali ga potrebujem?', a: 'Načrt opcij na poslovnih deležih za zaposlene vam omogoča, da svoji ekipi ponudite spodbude, vezane na lastniški kapital. Pripravimo opcijske pogodbe in jih uskladimo z vašo lastniško strukturo (cap table) ter dogovori med ustanovitelji.' },
        { q: 'Katere dokumente potrebujejo ustanovitelji na začetku?', a: 'Običajno so to družbena pogodba, pogodbe o zaposlitvi in pogodbe o delu (za zunanje izvajalce), pogodbe o varovanju poslovne skrivnosti (NDA) ter interni akti podjetja — pripravimo jih še preden jih dejansko potrebujete.' },
        { q: 'Ali lahko preoblikujete moj s.p. v podjetje (d.o.o.)?', a: 'Da — uredimo celotno preoblikovanje iz samostojnega podjetnika (s.p.) v družbo z omejeno odgovornostjo (d.o.o.), vključno z dokumentacijo in organizacijo sestanka pri notarju.' },
        { q: 'Ali sodelujete z mednarodnimi ustanovitelji?', a: 'Da — svetujemo glede jurisdikcije ustanovitve ter strukturiramo podjetje in dokumente za čezmejne ekipe in investitorje.' },
        // TODO(sl-review): 6th FAQ not in docx — machine-translated
        { q: 'Kdaj naj sklenemo opcijske pogodbe?', a: 'Čim prej — jasno in dokumentirano urejeni lastniški deleži in opcijski dogovori ohranjajo vašo lastniško strukturo primerno za investicije in pomagajo preprečiti spore, ko rastete.' },
      ],
    },
    ctaBand: {
      text: '<b>Ustanavljate ali preoblikujete svoje podjetje?</b> Povejte nam, v kateri fazi ste, in začrtali bomo korake ter naslednje poteze.',
      // TODO(sl-review): "Book a consultation" button machine-translated
      btn: 'Rezervirajte posvet',
    },
    form: {
      eye: '// kako začeti',
      h: 'Pošljite povpraševanje.',
      // TODO(sl-review): form lead machine-translated
      lead: 'Povejte nam o svojem podjetju in kaj potrebujete. Pregledali bomo in vam sporočili naslednje korake — praviloma še isti dan.',
      contactPrefix: 'Ljubljana, Slovenija · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      projLabel: 'Podjetje in spletna stran',
      linkLabel: 'Kaj potrebujete?',
      choiceLabel: 'Potrebujem pomoč pri',
      chips: ['Ustanovitev podjetja', 'ESOP', 'Preoblikovanje'],
      submit: 'Oddajte povpraševanje',
    },
    cross: {
      h2: 'Tudi v ponudbi Lemur Legal',
      items: [
        { h4: 'Zaščita intelektualne lastnine', p: 'Strategija IP, registracija, pogodbe in licenciranje.' },
        { h4: 'Pogodbe in gospodarsko pravo', p: 'Pogodbe, ki ščitijo vaše poslovanje.' },
      ],
    },
  },
}

export default c
