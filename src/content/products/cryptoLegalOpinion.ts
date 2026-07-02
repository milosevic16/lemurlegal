import type { Bilingual, PageMeta } from '../types'

interface Why { wn: string; h3: string; p: string }
interface Step { stepK: string; title: string; sub: string; tag: string }
interface Faq { q: string; a: string }
interface Quote { p: string; by: string }
interface Cross { h4: string; p: string }

export interface CryptoLegalOpinionContent {
  meta: PageMeta
  hero: { kicker: string; h1Glitch: string; h1Em: string; slogan: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  why: { h2: string; intro: string; items: [Why, Why, Why] }
  how: { h2: string; steps: [Step, Step, Step]; classifiedH3: string; stamps: [string, string, string, string] }
  pricing: {
    h2: string; featLabel: string; utilLabel: string; utilPrice: string; perOpinion: string; vatNote: string
    memeLabel: string; memePrice: string; deliveryH3: string; deliveryP: string
  }
  testimonials: { h2: string; quotes: [Quote, Quote, Quote] }
  expert: { eyebrow: string; h2: string; name: string; role: string; bio1: string; bio2: string; linkedinAria: string }
  faq: { h2: string; items: Faq[] }
  ctaBand: { text: string; btn: string }
  form: {
    eye: string; h: string; lead: string; contactPrefix: string
    nameLabel: string; emailLabel: string; projLabel: string; linkLabel: string
    choiceLabel: string; chips: [string, string]; submit: string
  }
  cross: { h2: string; items: [Cross, Cross] }
}

const BIO1_EN = 'Peter is a <strong>technology and financial lawyer</strong> with a focus on cryptocurrency regulation, fintech, and startup ecosystems. He advises crypto companies, fintech ventures, and technology startups on regulatory compliance, contract law, and intellectual property matters, providing practical legal solutions at the intersection of law and emerging technology.'
const BIO2_EN = 'Beyond private practice, Peter serves as an external evaluator for <strong>Horizon Europe</strong> and <strong>NATO Diana</strong>, assessing deep-tech and innovation-driven ventures for programme funding. He is also a partner at venture capital firms, <strong>Suricate Ventures</strong> and <strong>IBEX Equity Partners</strong>, bringing a dual perspective as both legal counsel and investor to the companies he works with.'
const BIO1_SL = 'Peter je <strong>odvetnik za tehnološko in finančno pravo</strong>, osredotočen na regulacijo kriptovalut, fintech in ekosisteme zagonskih podjetij. Kripto podjetjem, fintech podvigom in tehnološkim zagonskim podjetjem svetuje glede regulativne skladnosti, pogodbenega prava in vprašanj intelektualne lastnine ter zagotavlja praktične pravne rešitve na presečišču prava in nastajajočih tehnologij.'
const BIO2_SL = 'Poleg zasebne prakse Peter deluje kot zunanji ocenjevalec za <strong>Horizon Europe</strong> in <strong>NATO Diana</strong>, kjer ocenjuje podvige na področju napredne tehnologije in inovacij za programsko financiranje. Je tudi partner v družbah tveganega kapitala <strong>Suricate Ventures</strong> in <strong>IBEX Equity Partners</strong>, s čimer podjetjem, s katerimi sodeluje, prinaša dvojni pogled — kot pravni svetovalec in kot investitor.'

const c: Bilingual<CryptoLegalOpinionContent> = {
  en: {
    meta: {
      title: 'Crypto Legal Opinion — Lemur Legal',
      description:
        'The legal opinion that gets your token listed — reasoned, classified and accepted under MiCA and EU law. First draft in 48 hours.',
    },
    hero: {
      kicker: 'Crypto Legal Opinion · Ljubljana',
      h1Glitch: 'The crypto legal opinion that gets your token',
      h1Em: 'listed.',
      slogan: '// analyse · classify · accepted.',
      lead: 'Has a regulated exchange asked for a legal opinion confirming your token was fully analysed before listing? Or do you need an opinion required under <strong>MiCA</strong>? We deliver it — reasoned, classified and accepted.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'First draft in 48 hours · Accepted by major exchanges',
    },
    strip: {
      k: 'Opinions drafted for tokens listed on',
      v: '<b>Binance</b> · <b>KuCoin</b> · <b>Bittrex</b> · <b>HitBTC</b> · <b>MEXC</b> · <b>OKX</b>',
    },
    why: {
      h2: 'An exchange or regulator asked for an opinion. We write the one they accept.',
      intro: 'From your project, token sale and tokenomics, we give a reasoned view on whether the token qualifies as a security, a utility token, e-money or an (un)regulated financial instrument — the classification that determines what you can do next.',
      items: [
        { wn: '01', h3: 'Required to list', p: 'Centralized exchanges require a legal opinion before they list a utility token or meme coin.' },
        { wn: '02', h3: 'Required to license', p: 'Competent authorities may request an opinion within the process of obtaining crypto licences.' },
        { wn: '03', h3: 'Required under MiCA', p: 'Issuers targeting EU investors are required to provide a legal opinion under MiCA.' },
      ],
    },
    how: {
      h2: 'Three steps from tokenomics to a signed opinion.',
      steps: [
        { stepK: 'Step 01', title: 'Analyse', sub: "We examine the token's tokenomics and review all relevant documentation — white paper, terms of sale, SAFTs, marketing materials — and anything else affecting classification.", tag: 'full documentation review' },
        { stepK: 'Step 02', title: 'Advise', sub: 'If we see challenges to qualifying as a utility token or meme coin, we advise on the proper design of the tokenomics and on drafting the relevant documents.', tag: 'tokenomics · drafting' },
        { stepK: 'Step 03', title: 'Draft & classify', sub: 'We draft a comprehensive legal opinion, including a token classification under applicable EU law — formatted for exchanges and regulators.', tag: 'signed opinion' },
      ],
      classifiedH3: 'Your token, classified as one of',
      stamps: ['Utility token', 'Security token', 'E-money token', 'Financial instrument'],
    },
    pricing: {
      h2: 'Clear, fixed pricing. Fast turnaround.',
      featLabel: 'Most requested',
      utilLabel: 'Utility Token',
      utilPrice: '$3,500',
      perOpinion: ' / opinion',
      vatNote: '+ VAT if applicable · Payable in USDC',
      memeLabel: 'Meme Coin',
      memePrice: '$2,000',
      deliveryH3: 'First draft in 48 hours',
      deliveryP: 'First draft delivered within 48 hours of receiving your documentation.',
    },
    testimonials: {
      h2: 'Trusted by token issuers across the industry.',
      quotes: [
        { p: 'We navigated the crypto legal landscape with confidence, ensuring compliance and our BST token listing on MEXC.', by: 'Denis Petrovcic · Blocksquare.io' },
        { p: 'Impressed by the skill, flexibility and speed. High quality yet very affordable — Peter is your man.', by: 'Michal Ptacnik · liberland.org' },
        { p: 'A proactive approach that turned complex legal jargon into actionable insight — plus valuable tokenomics advice.', by: 'Martial Medi · Masternoded.com' },
      ],
    },
    expert: {
      eyebrow: 'Managing partner · fintech lawyer · Lemur Legal',
      h2: 'Who will work on your opinion',
      name: 'Peter Merc, Ph.D.',
      role: '// 20+ token generation events advised',
      bio1: BIO1_EN,
      bio2: BIO2_EN,
      linkedinAria: 'Peter Merc on LinkedIn',
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        { q: 'Do I really need a legal opinion to list my token?', a: 'Yes. Regulated exchanges require a legal opinion before they list a utility token or meme coin, and competent authorities may request one during licensing.' },
        { q: 'How long does it take?', a: 'We deliver a first draft within 48 hours of receiving your documentation.' },
        { q: 'How much does it cost?', a: 'A utility-token opinion is $3,500 and a meme-coin opinion is $2,000, plus VAT where applicable. Payable in USDC.' },
        { q: 'What does the opinion cover?', a: 'A reasoned classification of your token — security, utility, e-money or an (un)regulated financial instrument — assessed against MiCA and relevant securities law.' },
        { q: 'What do you need from me?', a: 'Your white paper, terms of sale, SAFTs, marketing materials and tokenomics — anything that affects classification.' },
        { q: 'Will exchanges and regulators accept it?', a: 'Our opinions are formatted for exchanges and regulators, and we respond to any follow-up questions they raise.' },
      ],
    },
    ctaBand: {
      text: "<b>Need a legal opinion your exchange will accept?</b> Tell us about your token and we'll scope it — usually the same day.",
      btn: 'Send your inquiry',
    },
    form: {
      eye: '// get started',
      h: 'Send your inquiry.',
      lead: "Tell us about your project and token. We'll review your documentation and come back with next steps — usually the same day.",
      contactPrefix: 'WhatsApp · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      projLabel: 'Project name & website',
      linkLabel: "Link to token's white paper",
      choiceLabel: 'I require an opinion for',
      chips: ['Utility Token', 'Meme coin'],
      submit: 'Submit inquiry',
    },
    cross: {
      h2: 'Also from Lemur Legal',
      items: [
        { h4: 'MiCA White Paper', p: 'Compliant white papers, drafted and filed with the competent authority.' },
        { h4: 'Licensing & AML', p: 'CASP/VASP authorisation, registration and AML compliance.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'Pravno mnenje za kriptovalute — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Pravno mnenje za kriptovalute, ki zagotovi uvrstitev vašega žetona — utemeljeno, klasificirano in sprejeto po uredbi MiCA in pravu EU. Prvi osnutek v 48 urah.',
    },
    hero: {
      kicker: 'Pravno mnenje za kriptovalute · Ljubljana',
      // TODO(sl-review): H1 rephrased for the added "crypto"
      h1Glitch: 'Pravno mnenje za kriptovalute, ki vaš žeton uvrsti',
      h1Em: 'na borzo.',
      slogan: '// analiza · klasifikacija · sprejeto.',
      lead: 'Ali je regulirana borza od vas zahtevala pravno mnenje, ki potrjuje, da je bil vaš žeton pred uvrstitvijo v celoti analiziran? Ali potrebujete mnenje, ki ga zahteva uredba <strong>MiCA</strong>? Zagotavljamo ga — utemeljeno, klasificirano in sprejeto.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje',
      meta: 'Prvi osnutek v 48 urah · Sprejeto na vodilnih borzah',
    },
    strip: {
      k: 'Mnenja, pripravljena za žetone, uvrščene na',
      v: '<b>Binance</b> · <b>KuCoin</b> · <b>Bittrex</b> · <b>HitBTC</b> · <b>MEXC</b> · <b>OKX</b>',
    },
    why: {
      h2: 'Borza ali regulator je zahteval mnenje. Mi napišemo takšnega, ki ga sprejmejo.',
      intro: 'Na podlagi vašega projekta, prodaje žetonov in tokenomike podamo utemeljeno stališče o tem, ali se žeton kvalificira kot vrednostni papir, uporabniški žeton, elektronski denar ali (ne)reguliran finančni instrument — to je klasifikacija, ki določa vaše naslednje korake.',
      items: [
        { wn: '01', h3: 'Zahtevano za uvrstitev', p: 'Centralizirane borze zahtevajo pravno mnenje, preden uvrstijo uporabniški žeton ali meme kovanec.' },
        { wn: '02', h3: 'Zahtevano za licenco', p: 'Pristojni organi lahko zahtevajo mnenje v postopku pridobivanja kripto licenc.' },
        { wn: '03', h3: 'Zahtevano po uredbi MiCA', p: 'Izdajatelji, ki ciljajo na vlagatelje v EU, morajo predložiti pravno mnenje v skladu z uredbo MiCA.' },
      ],
    },
    how: {
      h2: 'Trije koraki od tokenomike do podpisanega mnenja.',
      steps: [
        { stepK: 'Korak 01', title: 'Analiza', sub: 'Preučimo tokenomiko žetona in pregledamo vso ustrezno dokumentacijo — belo knjigo, pogoje prodaje, pogodbe SAFT, marketinško gradivo — in vse drugo, kar vpliva na klasifikacijo.', tag: 'celovit pregled dokumentacije' },
        { stepK: 'Korak 02', title: 'Svetovanje', sub: 'Če zaznamo izzive pri kvalifikaciji za uporabniški žeton ali meme kovanec, svetujemo glede pravilne zasnove tokenomike in priprave ustreznih dokumentov.', tag: 'tokenomika · priprava' },
        { stepK: 'Korak 03', title: 'Priprava in klasifikacija', sub: 'Pripravimo izčrpno pravno mnenje, vključno s klasifikacijo žetona po veljavni zakonodaji EU — oblikovano za borze in regulatorje.', tag: 'podpisano mnenje' },
      ],
      classifiedH3: 'Vaš žeton, razvrščen kot eden od',
      stamps: ['Uporabniški žeton', 'Investicijski žeton', 'Žeton elektronskega denarja', 'Finančni instrument'],
    },
    pricing: {
      h2: 'Jasne, fiksne cene. Hitra izvedba.',
      featLabel: 'Najpogosteje zahtevano',
      utilLabel: 'Uporabniški žeton',
      utilPrice: '3.500 $',
      perOpinion: ' / mnenje',
      vatNote: '+ DDV, če je relevantno · Plačljivo v USDC',
      memeLabel: 'Meme kovanec',
      memePrice: '2.000 $',
      deliveryH3: 'Prvi osnutek v 48 urah',
      deliveryP: 'Prvi osnutek dostavimo v 48 urah od prejema vaše dokumentacije.',
    },
    testimonials: {
      h2: 'Zaupajo nam izdajatelji žetonov iz celotne industrije.',
      quotes: [
        { p: 'Skozi pravno področje kriptovalut smo krmarili samozavestno, s čimer smo zagotovili skladnost poslovanja in uvrstitev našega žetona BST na borzo MEXC.', by: 'Denis Petrovčič · Blocksquare.io' },
        { p: 'Navdušeni nad strokovnostjo, prilagodljivostjo in hitrostjo. Visoka kakovost, a hkrati zelo dostopna cena — Peter je pravi naslov.', by: 'Michal Ptacnik · liberland.org' },
        { p: 'Proaktiven pristop, ki je zapleten pravni žargon spremenil v praktične nasvete, poleg tega pa smo prejeli še dragocene usmeritve glede tokenomike.', by: 'Martial Medi · Masternoded.com' },
      ],
    },
    expert: {
      eyebrow: 'Vodilni partner · pravnik za finančno tehnologijo · Lemur Legal',
      h2: 'Kdo bo poskrbel za vaše mnenje',
      name: 'dr. Peter Merc',
      role: '// svetovanje pri 20+ dogodkih izdaje žetonov (TGE)',
      bio1: BIO1_SL,
      bio2: BIO2_SL,
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    faq: {
      h2: 'Pogosto zastavljena vprašanja',
      items: [
        { q: 'Ali res potrebujem pravno mnenje za uvrstitev žetona na borzo?', a: 'Da. Regulirane borze zahtevajo pravno mnenje, preden uvrstijo uporabniški žeton ali meme kovanec, pristojni organi pa ga lahko zahtevajo med licenciranjem.' },
        { q: 'Koliko časa traja postopek?', a: 'Prvi osnutek zagotovimo v 48 urah od prejema vaše dokumentacije.' },
        { q: 'Koliko stane?', a: 'Mnenje za uporabniški žeton stane 3.500 $, mnenje za meme kovanec pa 2.000 $, plus DDV, kjer je relevantno. Plačljivo v USDC.' },
        { q: 'Kaj pravno mnenje pokriva?', a: 'Utemeljeno klasifikacijo vašega žetona — vrednostni papir, uporabniški žeton, elektronski denar ali (ne)reguliran finančni instrument — ocenjeno glede na uredbo MiCA in ustrezno zakonodajo o vrednostnih papirjih.' },
        { q: 'Kaj potrebujete z moje strani?', a: 'Vašo belo knjigo, pogoje prodaje, pogodbe SAFT, marketinško gradivo in tokenomiko — vse, kar vpliva na klasifikacijo.' },
        { q: 'Ali bodo borze in regulatorji to mnenje sprejeli?', a: 'Naša mnenja so oblikovana za borze in regulatorje, na morebitna dodatna vprašanja pa odgovorimo.' },
      ],
    },
    ctaBand: {
      // TODO(sl-review): CTA band machine-translated
      text: '<b>Potrebujete pravno mnenje, ki ga bo vaša borza sprejela?</b> Povejte nam o svojem žetonu in opredelili bomo obseg — praviloma še isti dan.',
      btn: 'Pošljite povpraševanje',
    },
    form: {
      eye: '// kako začeti',
      h: 'Pošljite povpraševanje.',
      lead: 'Povejte nam o svojem projektu in žetonu. Pregledali bomo vašo dokumentacijo in vam sporočili naslednje korake — praviloma še isti dan.',
      contactPrefix: 'WhatsApp · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      projLabel: 'Ime projekta in spletna stran',
      linkLabel: 'Povezava do bele knjige žetona',
      choiceLabel: 'Potrebujem mnenje za',
      chips: ['Uporabniški žeton', 'Meme kovanec'],
      submit: 'Oddajte povpraševanje',
    },
    cross: {
      h2: 'Tudi v ponudbi Lemur Legal',
      items: [
        { h4: 'Beli papir MiCA', p: 'Skladne bele knjige, pripravljene in vložene pri pristojnem organu.' },
        { h4: 'Licenciranje in AML', p: 'Avtorizacija CASP/VASP, registracija in skladnost z AML.' },
      ],
    },
  },
}

export default c
