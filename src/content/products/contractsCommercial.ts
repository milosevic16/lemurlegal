import type { Bilingual, PageMeta } from '../types'

interface Why { wn: string; h3: string; p: string }
interface Step { stepK: string; title: string; sub: string; tag: string }
interface Cov { h4: string; rows: string[] }
interface Faq { q: string; a: string }
interface Quote { p: string; by: string }
interface Cross { h4: string; p: string }

export interface ContractsCommercialContent {
  meta: PageMeta
  hero: { kicker: string; h1Glitch: string; h1Em: string; slogan: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  why: { h2: string; items: [Why, Why, Why] }
  how: { h2: string; steps: [Step, Step, Step] }
  coverage: { h2: string; intro: string; items: Cov[]; calloutH3: string; calloutP: string }
  expert: { eyebrow: string; h2: string; name: string; role: string; bio1: string; bio2: string; linkedinAria: string }
  testimonials: { h2: string; quotes: [Quote, Quote, Quote] }
  included: { h2: string; items: string[]; pricebandText: string; pricebandBtn: string }
  faq: { h2: string; items: Faq[] }
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

const c: Bilingual<ContractsCommercialContent> = {
  en: {
    meta: {
      title: 'Contracts & Commercial — Lemur Legal',
      description:
        'The contracts that protect your business. From software and source-code licences to manufacturing and partnership deals, Lemur Legal drafts the agreements that remove risk from every relationship your technology company enters.',
    },
    hero: {
      kicker: 'Contracts & Commercial · Ljubljana',
      h1Glitch: 'The contracts that',
      h1Em: 'protect your business.',
      slogan: '// drafting · review · licensing · open-source.',
      lead: 'From software licences to manufacturing and partnership deals, we draft the <strong>contracts that remove risk</strong> from every relationship your company enters — built for how technology companies actually work.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'Fixed-fee proposals · Drafted, reviewed & built for tech companies',
    },
    strip: {
      k: 'What we do',
      v: 'From software and source-code licences to manufacturing, partnership and joint-venture deals — we draft the agreements that govern every relationship a technology company depends on, and remove the risk from each one.',
    },
    why: {
      h2: 'Every relationship is a risk — or a contract.',
      items: [
        { wn: '01', h3: 'Built for tech', p: 'Software, source-code, SLA and platform agreements drafted for how technology companies actually work — including open-source use.' },
        { wn: '02', h3: 'Whole supply chain', p: 'From IT contractors to manufacturers, every relationship is covered with the right agreement.' },
        { wn: '03', h3: 'Risk, removed', p: "Each contract is designed to eliminate or sharply limit the legal and commercial risks you're exposed to." },
      ],
    },
    how: {
      h2: 'From a handshake to airtight documentation.',
      steps: [
        { stepK: 'Step 01', title: 'Map', sub: 'We review your relationships and the risks that need covering across your business — partners, suppliers, customers and contractors.', tag: 'scope mapped' },
        { stepK: 'Step 02', title: 'Draft', sub: 'We prepare contracts tailored to your industry and your tech stack — from software and SLA agreements to manufacturing and partnership deals.', tag: 'tailored drafting' },
        { stepK: 'Step 03', title: 'Advise', sub: 'We advise on open-source use, licensing models and privacy-by-design compliance, adapting your model to minimise regulatory burden.', tag: 'open-source · licensing' },
      ],
    },
    coverage: {
      h2: 'Whatever your industry and tech stack, we have the contract.',
      intro: 'From software and source-code licences to manufacturing, commercial and partnership deals — one firm across the whole stack.',
      items: [
        { h4: 'Software & licensing', rows: ['Software licence', 'Software development', 'Software maintenance', 'Source-code licence', 'Service level agreement (SLA)'] },
        { h4: 'Apps, platforms & cloud', rows: ['Mobile app & website development', 'In-app advertising', 'App distribution', 'Platform licence', 'Cloud hosting'] },
        { h4: 'Physical products', rows: ['Manufacturing agreement', 'Tooling agreement', 'Product development agreement'] },
        { h4: 'Commercial agreements', rows: ['Agency', 'Franchise', 'Profit / revenue sharing', 'Joint venture', 'Consulting'] },
        { h4: 'Tech law & open source', rows: ['Advice on open-source software use', 'Legal infrastructure with external partners', 'Data-processing questions'] },
        { h4: 'Business model & compliance', rows: ['Licensing-model design', 'Delineating development, sales, maintenance & upgrades', 'Privacy-by-design compliance support'] },
      ],
      calloutH3: 'Technology law, every day',
      calloutP: 'We draft technology-law documentation day in, day out — and adapt your business and licensing model to minimise your regulatory burden.',
    },
    expert: {
      eyebrow: 'Founder · technology lawyer · Lemur Legal',
      h2: "Who you'll work with",
      name: 'Peter Merc, Ph.D.',
      role: '// software, commercial & partnership contracts',
      bio1: BIO1_EN,
      bio2: BIO2_EN,
      linkedinAria: 'Peter Merc on LinkedIn',
    },
    testimonials: {
      h2: 'Trusted by founders and tech companies.',
      quotes: [
        { p: 'We navigated the crypto legal landscape with confidence, ensuring compliance and our BST token listing on MEXC.', by: 'Denis Petrovcic · Blocksquare.io' },
        { p: 'Impressed by the skill, flexibility and speed. High quality yet very affordable — Peter is your man.', by: 'Michal Ptacnik · liberland.org' },
        { p: 'A proactive approach that turned complex legal jargon into actionable insight — plus valuable tokenomics advice.', by: 'Martial Medi · Masternoded.com' },
      ],
    },
    included: {
      h2: 'Everything your contracts need, in one engagement.',
      items: [
        'Contracts drafted for your industry and tech stack',
        'Existing agreements reviewed and revised',
        'Advice on open-source use and licensing models',
        'Privacy-by-design and compliance support',
      ],
      pricebandText: "<b>Pricing is scoped to your contracts and business.</b> Tell us what you need and we'll send a fixed-fee proposal after a short review.",
      pricebandBtn: 'Request a proposal',
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        { q: 'Can you draft contracts for our specific industry?', a: 'Yes — we tailor documentation to your industry and the contractors you rely on, from IT and software to manufacturing.' },
        { q: 'Do you handle software and open-source licensing?', a: 'Yes — software, source-code, SLA and platform agreements, plus advice on open-source software use.' },
        { q: 'Can you review our existing contracts?', a: 'Yes — we review and revise existing agreements as well as draft new ones from scratch.' },
        { q: 'Do you cover international counterparties?', a: 'Yes — we structure agreements for cross-border relationships with partners, suppliers and customers.' },
        { q: 'Can you help design our licensing or business model?', a: 'Yes — we help design licensing models and delineate development, sales, maintenance and upgrades to minimise regulatory burden.' },
        { q: 'What about privacy and compliance?', a: 'We support privacy-by-design and help ensure your products comply with relevant legislation.' },
      ],
    },
    form: {
      eye: '// get started',
      h: 'Send your inquiry.',
      lead: "Tell us about your company and what you need — new contracts, a review of existing agreements, or help with a licensing model. We'll come back with next steps, usually the same day.",
      contactPrefix: 'Ljubljana, Slovenia · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      projLabel: 'Company name & website',
      linkLabel: 'Link to existing contracts / a short brief',
      choiceLabel: 'I need help with',
      chips: ['New contracts', 'Contract review', 'Licensing / model'],
      submit: 'Submit inquiry',
    },
    cross: {
      h2: 'Also from Lemur Legal',
      items: [
        { h4: 'Incorporation & ESOP', p: 'Set up your company and incentivise your team with an option pool.' },
        { h4: 'IP Protection', p: 'Trademarks, designs and copyright protected.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'Pogodbe in gospodarsko pravo — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Pogodbe, ki ščitijo vaše podjetje. Od licenc za programsko in izvorno kodo do proizvodnih in partnerskih poslov — Lemur Legal pripravlja sporazume, ki odpravljajo tveganja iz vsakega odnosa, v katerega vaše tehnološko podjetje vstopa.',
    },
    hero: {
      // TODO(sl-review): kicker machine-translated
      kicker: 'Pogodbe in gospodarsko pravo · Ljubljana',
      h1Glitch: 'Pogodbe, ki',
      h1Em: 'ščitijo vaše podjetje.',
      slogan: '// sestava · pregled · licenciranje · odprta koda.',
      lead: 'Od programskih licenc do proizvodnih in partnerskih poslov — pripravljamo <strong>pogodbe, ki odpravljajo tveganja</strong> iz vsakega odnosa, v katerega vaše podjetje vstopa — narejene za specifike delovanja tehnoloških podjetij.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje',
      // TODO(sl-review): hero meta machine-translated
      meta: 'Ponudbe s fiksno ceno · Pripravljeno, pregledano in prilagojeno tehnološkim podjetjem',
    },
    strip: {
      k: 'S čim se ukvarjamo',
      v: 'Od licenc za programsko in izvorno kodo do proizvodnih, partnerskih poslov in pogodb o skupnih vlaganjih — pripravljamo sporazume, ki urejajo odnose, od katerih je odvisno tehnološko podjetje, in sanirajo morebitna tveganja, ki izhajajo iz njih.',
    },
    why: {
      h2: 'Vsak poslovni odnos je tveganje — ali pa pogodba.',
      items: [
        { wn: '01', h3: 'Ustvarjeno za tehnologijo', p: 'Pogodbe o programski opremi, izvorni kodi, SLA in platformah, pripravljene glede na dejansko delovanje tehnoloških podjetij — vključno z uporabo odprte kode.' },
        { wn: '02', h3: 'Celotna dobavna veriga', p: 'Od IT izvajalcev do proizvajalcev, vsak odnos je urejen s pravo pogodbo.' },
        { wn: '03', h3: 'Odpravljena tveganja', p: 'Vsaka pogodba je zasnovana tako, da odpravi ali močno omeji pravna in komercialna tveganja, ki ste jim izpostavljeni.' },
      ],
    },
    how: {
      h2: 'Od stiska roke do temeljite dokumentacije.',
      steps: [
        { stepK: 'Korak 01', title: 'Popis', sub: 'Pregledamo vse vaše odnose in tveganja, ki jih je treba pokriti — partnerje, dobavitelje, stranke in zunanje izvajalce.', tag: 'obseg popisan' },
        { stepK: 'Korak 02', title: 'Sestava', sub: 'Pripravimo pogodbe, prilagojene vaši panogi in tehnološkemu naboru — od pogodb o programski opremi in SLA do proizvodnih in partnerskih dogovorov.', tag: 'prilagojena priprava' },
        { stepK: 'Korak 03', title: 'Svetovanje', sub: 'Svetujemo glede uporabe odprte kode, licenčnih modelov in skladnosti z vgrajeno zasebnostjo (privacy-by-design) ter prilagodimo vaš model, da zmanjšamo regulativno breme.', tag: 'odprta koda · licenciranje' },
      ],
    },
    coverage: {
      h2: 'Pripravljamo pogodbe za vse panoge in vrste tehnologij.',
      // TODO(sl-review): coverage intro machine-translated
      intro: 'Od licenc za programsko in izvorno kodo do proizvodnih, komercialnih in partnerskih poslov — ena pisarna čez celoten nabor.',
      items: [
        { h4: 'Programska oprema in licenciranje', rows: ['Licenca za programsko opremo', 'Razvoj programske opreme', 'Vzdrževanje programske opreme', 'Licenca za izvorno kodo', 'Dogovor o ravni storitev (SLA)'] },
        { h4: 'Aplikacije, platforme in oblak', rows: ['Razvoj mobilnih aplikacij in spletnih strani', 'Oglaševanje znotraj aplikacij', 'Distribucija aplikacij', 'Licenca za platformo', 'Gostovanje v oblaku'] },
        { h4: 'Fizični izdelki', rows: ['Proizvodna pogodba', 'Pogodba o orodjarstvu / pripravi orodij', 'Pogodba o razvoju izdelka'] },
        { h4: 'Komercialni dogovori', rows: ['Agencijska pogodba', 'Franšiza', 'Delitev dobička / prihodkov', 'Skupno vlaganje (joint venture)', 'Svetovanje'] },
        { h4: 'Tehnološko pravo in odprta koda', rows: ['Svetovanje glede uporabe odprtokodne programske opreme', 'Pravna infrastruktura z zunanjimi partnerji', 'Vprašanja obdelave podatkov'] },
        { h4: 'Poslovni model in skladnost', rows: ['Zasnova licenčnih modelov', 'Razmejitev razvoja, prodaje, vzdrževanja in nadgradenj', 'Podpora pri skladnosti z vgrajeno zasebnostjo'] },
      ],
      calloutH3: 'Tehnološko pravo, vsak dan',
      calloutP: 'Dokumentacijo s področja tehnološkega prava pripravljamo dan za dnem — vaš poslovni in licenčni model pa prilagodimo tako, da čim bolj zmanjšamo vaše regulativno breme.',
    },
    expert: {
      eyebrow: 'Ustanovitelj · tehnološki pravnik · Lemur Legal',
      h2: 'S kom boste sodelovali',
      name: 'dr. Peter Merc',
      role: '// pogodbe o programski opremi, komercialne in partnerske pogodbe',
      bio1: BIO1_SL,
      bio2: BIO2_SL,
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    testimonials: {
      h2: 'Zaupajo nam ustanovitelji in tehnološka podjetja.',
      quotes: [
        { p: 'Skozi kripto pravno okolje smo navigirali samozavestno, s čimer smo zagotovili skladnost in uvrstitev našega žetona BST na borzo MEXC.', by: 'Denis Petrovčič · Blocksquare.io' },
        { p: 'Navdušen nad strokovnostjo, prilagodljivostjo in hitrostjo. Visoka kakovost, a hkrati zelo dostopno — Peter je pravi naslov.', by: 'Michal Ptacnik · liberland.org' },
        { p: 'Proaktiven pristop, ki je zapleten pravni žargon spremenil v uporabne usmeritve — poleg tega pa še dragocen nasvet glede tokenomike.', by: 'Martial Medi · Masternoded.com' },
      ],
    },
    included: {
      h2: 'Vse, kar potrebujejo vaše pogodbe, na enem mestu.',
      items: [
        'Pogodbe, sestavljene za vašo panogo in tehnološki nabor',
        'Pregled in revizija obstoječih pogodb',
        'Svetovanje glede uporabe odprte kode in licenčnih modelov',
        'Podpora za vgrajeno zasebnost in skladnost',
      ],
      pricebandText: '<b>Cene so prilagojene vašim pogodbam in poslovanju.</b> Povejte nam, kaj potrebujete, in po kratkem pregledu vam bomo poslali ponudbo s fiksnim zneskom.',
      // TODO(sl-review): "Request a proposal" button machine-translated
      pricebandBtn: 'Zahtevajte ponudbo',
    },
    faq: {
      h2: 'Pogosto zastavljena vprašanja',
      items: [
        { q: 'Ali lahko pripravite pogodbe za našo specifično panogo?', a: 'Da — dokumentacijo prilagodimo vaši panogi in izvajalcem, na katere se zanašate, od IT-ja in programske opreme do proizvodnje.' },
        { q: 'Ali se ukvarjate z licenciranjem programske opreme in odprte kode?', a: 'Da — pripravljamo pogodbe o programski opremi, izvorni kodi, SLA in platformah ter svetujemo glede uporabe odprtokodne programske opreme.' },
        { q: 'Ali lahko pregledate naše obstoječe pogodbe?', a: 'Da — pregledujemo in revidiramo obstoječe sporazume ter pripravljamo nove od začetka.' },
        { q: 'Ali pokrivate tudi mednarodne pogodbene stranke?', a: 'Da — strukturiramo sporazume za čezmejne odnose s partnerji, dobavitelji in strankami.' },
        { q: 'Nam lahko pomagate zasnovati naš licenčni ali poslovni model?', a: 'Da — pomagamo pri oblikovanju licenčnih modelov ter razmejitvi razvoja, prodaje, vzdrževanja in nadgradenj, da zmanjšamo regulativno breme.' },
        { q: 'Kaj pa zasebnost in skladnost?', a: 'Podpiramo vgrajeno zasebnost in pomagamo zagotoviti, da so vaši izdelki usklajeni z ustrezno zakonodajo.' },
      ],
    },
    form: {
      eye: '// kako začeti',
      h: 'Pošljite povpraševanje.',
      // TODO(sl-review): form lead machine-translated
      lead: 'Povejte nam o svojem podjetju in kaj potrebujete — nove pogodbe, pregled obstoječih sporazumov ali pomoč pri licenčnem modelu. Sporočili vam bomo naslednje korake, praviloma še isti dan.',
      contactPrefix: 'Ljubljana, Slovenija · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      projLabel: 'Ime podjetja in spletna stran',
      linkLabel: 'Povezava do obstoječih pogodb / kratek opis',
      choiceLabel: 'Potrebujem pomoč pri',
      chips: ['Nove pogodbe', 'Pregled pogodb', 'Licenciranje / model'],
      submit: 'Oddajte povpraševanje',
    },
    cross: {
      h2: 'Tudi v ponudbi Lemur Legal',
      items: [
        { h4: 'Ustanovitev podjetja in ESOP', p: 'Ustanovite svoje podjetje in nagradite ekipo z opcijskim skladom.' },
        { h4: 'Zaščita intelektualne lastnine', p: 'Zaščitene blagovne znamke, modeli in avtorske pravice.' },
      ],
    },
  },
}

export default c
