import type { Bilingual, PageMeta } from '../types'

interface Why { wn: string; h3: string; p: string }
interface Step { stepK: string; title: string; sub: string; tag: string }
interface Cov { h4: string; rows: string[] }
interface Faq { q: string; a: string }
interface Cross { h4: string; p: string }

export interface InvestmentReadinessContent {
  meta: PageMeta
  hero: { kicker: string; h1Glitch: string; h1Em: string; slogan: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  why: { h2: string; items: [Why, Why, Why] }
  scan: {
    h2: string
    intro: string
    /** Terminal-panel chrome (sample scoreboard): head halves, 5 row labels, total + footnote. */
    panelHead1: string
    panelHead2: string
    rows: [string, string, string, string, string]
    agg: string
    note: string
  }
  how: { h2: string; head1: string; head2: string; steps: [Step, Step, Step] }
  coverage: { h2: string; intro: string; items: Cov[]; calloutH3: string; calloutP: string }
  expert: { eyebrow: string; h2: string; name: string; role: string; bio1: string; bio2: string; linkedinAria: string }
  included: { h2: string; items: string[]; pricebandText: string; pricebandBtn: string }
  faq: { h2: string; items: Faq[] }
  form: {
    eye: string; h: string; lead: string; contactPrefix: string
    nameLabel: string; emailLabel: string; projLabel: string; linkLabel: string
    choiceLabel: string; chips: [string, string, string, string, string]; submit: string
  }
  cross: { h2: string; items: [Cross, Cross] }
}

const BIO1_EN = 'Rok is a <strong>legal advisor in international trade law</strong>, focusing on the defence and dual-use sectors. He combines government and corporate experience in export controls, sanctions, regulatory governance, public procurement, and the military adoption of emerging technologies. His understanding of controlled items and the underlying technologies gives him a practical edge when supporting his clients on regulatory matters.'
const BIO2_EN = 'He regularly speaks at defence and dual-use events and conferences, offering practical insight into current regulatory developments, and has contributed as a guest expert within the <strong>EU P2P export control programme</strong>.'
const BIO1_SL = 'Rok je <strong>pravni svetovalec za pravo mednarodne trgovine</strong>, s poudarkom na obrambnem in dual-use sektorju. Združuje izkušnje iz javnega in zasebnega sektorja na področjih izvoznega nadzora, sankcij, regulativnega upravljanja, javnega naročanja ter uvajanja novih tehnologij v vojaško okolje. Njegovo razumevanje nadzorovanega blaga in tehnologij, ki stojijo za njim, mu daje praktično prednost pri svetovanju strankam v regulativnih zadevah.'
const BIO2_SL = 'Redno nastopa na dogodkih in konferencah s področja obrambe in dual-use industrije, kjer deli praktičen vpogled v aktualni regulativni razvoj. Sodeloval je tudi kot gostujoči strokovnjak v okviru <strong>programa EU P2P za izvozni nadzor</strong>.'

const c: Bilingual<InvestmentReadinessContent> = {
  en: {
    meta: {
      title: 'Investment Readiness Review — Lemur Legal',
      description:
        'Prove your defence or dual-use company is investment-ready. We score regulatory exposure, compliance maturity and readiness for fundraising and M&A.',
    },
    hero: {
      kicker: 'Investment Readiness Review for Defence & Dual-Use · Ljubljana',
      h1Glitch: 'Prove your defence or dual-use company is investment-ready —',
      h1Em: 'and de-risk the deal.',
      slogan: '// exposure · scoring · gaps · diligence-ready.',
      lead: 'An investor-oriented assessment of your regulatory exposure, compliance maturity and operational readiness as a defence or dual-use company — so you can <strong>demonstrate preparedness</strong>, reduce perceived risk and support your valuation with a clear readiness score and targeted recommendations.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'A scored readiness picture · Built for defence & dual-use diligence',
    },
    strip: {
      k: 'Defence & dual use',
      v: 'Investors and acquirers price in regulatory risk — especially in defence and dual-use transactions. A clear, scored readiness picture turns export-control, FDI, sanctions, procurement and compliance exposure into a managed, demonstrable strength.',
    },
    why: {
      h2: 'Regulatory readiness is part of your valuation in defence & dual-use.',
      items: [
        { wn: '01', h3: 'Risk is priced in', p: 'Unmapped export-control, sanctions, FDI or procurement exposure reads as risk to investors — and can discount your valuation.' },
        { wn: '02', h3: 'A score they can defend', p: 'We translate defence and dual-use readiness into a clear maturity score that supports investor-facing diligence.' },
        { wn: '03', h3: 'Find the gaps first', p: 'Identify regulatory gaps before they become deal blockers in fundraising, M&A, procurement or strategic partnership discussions.' },
      ],
    },
    scan: {
      h2: 'A defence & dual-use readiness score you can put in front of investors.',
      intro: 'We translate regulatory preparedness into a clear maturity score across the dimensions defence and dual-use diligence cares about.',
      panelHead1: 'READINESS SCAN',
      panelHead2: 'SAMPLE OUTPUT',
      rows: [
        'Regulatory exposure mapped',
        'Export-control & dual-use exposure',
        'FDI & ownership sensitivity',
        'Tender & procurement readiness',
        'Documentation & internal controls',
      ],
      agg: 'OVERALL READINESS',
      note: 'Illustrative · scored to your business in the review',
    },
    how: {
      h2: 'From defence & dual-use exposure to a score you can defend.',
      head1: 'READINESS REVIEW',
      head2: 'READY TO SCORE',
      steps: [
        { stepK: 'Step 01', title: 'Assess', sub: 'We identify the principal regulatory risks across your technology, business model, target markets, counterparties, investors and public-sector opportunities.', tag: 'exposure mapped' },
        { stepK: 'Step 02', title: 'Score', sub: 'We translate defence and dual-use preparedness into a clear maturity score for investor-facing, acquirer-facing or partner-facing discussions.', tag: 'maturity scored' },
        { stepK: 'Step 03', title: 'Remediate', sub: 'We highlight the gaps and priority actions required to strengthen readiness before fundraising, M&A, procurement or strategic partnership due diligence.', tag: 'gaps · priorities' },
      ],
    },
    coverage: {
      h2: 'A complete, investor-ready regulatory picture for defence & dual-use companies.',
      intro: 'Six lenses, one readiness picture — scored, gapped and ready for the diligence room.',
      items: [
        { h4: 'Regulatory exposure assessment', rows: ['Business model & technology', 'Target markets & jurisdictions', 'Investors, customers and counterparties', 'Export-control, sanctions, FDI and procurement risk'] },
        { h4: 'Investment-readiness scoring', rows: ['Clear maturity score', 'Investor-facing discussions', 'Diligence support'] },
        { h4: 'Compliance maturity review', rows: ['Internal compliance structures', 'Controls in practice', 'Decision-making and escalation processes'] },
        { h4: 'Gap & remediation analysis', rows: ['Key weaknesses', 'Unresolved regulatory issues', 'Priority actions before diligence'] },
        { h4: 'FDI & market-access review', rows: ['Foreign-investment screening', 'Ownership and investor sensitivity', 'Market-entry restrictions', 'Barriers to growth plans'] },
        { h4: 'Tender & procurement readiness', rows: ['Regulated procurement', 'Defence, security and public-sector tenders', 'Public-sector engagement', 'Documentation expected by buyers and partners'] },
      ],
      calloutH3: 'Built for defence & dual-use diligence',
      calloutP: 'A readiness picture that investors, acquirers and strategic partners recognise — backed by a maturity score and a prioritised set of recommendations that can hold up under defence and dual-use scrutiny.',
    },
    expert: {
      eyebrow: 'Legal advisor · international trade law · Lemur Legal',
      h2: "Who you'll work with",
      name: 'Rok Bizjak',
      role: '// investor-facing regulatory readiness for defence & dual-use',
      bio1: BIO1_EN,
      bio2: BIO2_EN,
      linkedinAria: 'Peter Merc on LinkedIn',
    },
    included: {
      h2: 'Everything a defence or dual-use investor will look for, in one review.',
      items: [
        'A mapped picture of your regulatory exposure',
        'A clear readiness score for the diligence room',
        'Export-control, sanctions, FDI and procurement risk areas identified',
        'Compliance maturity and documentation gaps reviewed',
        'A prioritised set of remediation actions',
      ],
      pricebandText: "<b>Scope is set to your stage, technology, target markets and transaction context.</b> Tell us about your company and we'll scope a defence & dual-use readiness review with a fixed proposal.",
      pricebandBtn: 'Request a proposal',
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        { q: 'Who is this readiness review for?', a: 'Startups and scaling companies preparing to raise, sell or enter regulated markets, who need to demonstrate regulatory preparedness.' },
        { q: 'What is the defence & dual-use readiness score?', a: 'A clear maturity score that translates your regulatory preparedness into something investors and acquirers can assess during diligence.' },
        { q: 'What does the review cover?', a: 'Regulatory exposure, compliance maturity, gaps and remediation, FDI and market access, and tender and procurement readiness.' },
        { q: 'What is FDI screening?', a: 'Foreign direct investment screening — government review of certain foreign investments; we assess whether it, or other market-entry barriers, may affect your plans.' },
        { q: 'What do I get at the end?', a: 'A readiness score plus a prioritised, targeted set of recommendations to strengthen your position.' },
        { q: 'Where does dual-use risk show up in fundraising or M&A?', a: 'It frequently arises during fundraising, M&A and commercial due diligence — investors and acquirers increasingly scrutinise whether sensitive software, technology or know-how crosses borders, with whom and for what purpose. Identifying exposure early prevents avoidable difficulties later in the deal.' },
        { q: 'Why assess export-control and dual-use exposure early?', a: 'Early assessment is part of mature governance. Identifying exposure early helps prevent problems in fundraising, contracting, deployment, procurement and international expansion — and lets you respond to investor, customer and partner scrutiny with credibility and resilience.' },
        { q: 'Do I need Regulatory Qualification first?', a: 'Most clients begin with regulatory qualification, but we can start here and fold qualification in where needed.' },
      ],
    },
    form: {
      eye: '// get started',
      h: 'Send your inquiry.',
      lead: "Tell us about your company, technology and transaction context — whether you need a readiness review, a score ahead of fundraising, or a diligence health-check before investors, acquirers or strategic partners review your company. We'll review it and come back with next steps, usually the same day.",
      contactPrefix: 'Ljubljana, Slovenia · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      projLabel: 'Company name & website',
      linkLabel: 'Stage — raising, selling or entering a market',
      choiceLabel: 'I need help with',
      chips: ['Readiness review', 'Investor diligence', 'FDI review', 'Export-control exposure', 'Procurement readiness'],
      submit: 'Submit inquiry',
    },
    cross: {
      h2: 'Before and after this step',
      items: [
        { h4: 'Regulatory Qualification', p: 'Step 1 · Export controls, customs, sanctions and dual-use qualification.' },
        { h4: 'Compliance Frameworks', p: 'Step 3 · Internal programmes, governance, controls and repeatable compliance workflows.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'Pregled investicijske pripravljenosti — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Dokažite, da je vaše obrambno podjetje pripravljeno na investicijo — ocenimo regulativno izpostavljenost, zrelost skladnosti in pripravljenost na vlagatelje.',
    },
    hero: {
      kicker: 'Pregled investicijske pripravljenosti za obrambne projekte in projekte dvojne rabe · Ljubljana',
      h1Glitch: 'Dokažite, da je vaše obrambno podjetje ali podjetje, ki razvija rešitve dvojne rabe, pripravljeno na investicijo —',
      h1Em: 'in zmanjšajte s tem poslovna tveganja.',
      slogan: '// regulatorna izpostavljenost · točkovanje · vrzeli · pripravljeno na skrbni pregled.',
      lead: 'Ocena vaše regulatorne izpostavljenosti, nivoja regulatorne skladnosti in operativne pripravljenosti obrambnega projekta ali projekta dvojne rabe — vse iz perspektive potencialnega vlagatelja. S ciljem, da se dokaže investicijska pripravljenost, zmanjša zaznano regulatorno tveganje in da se podpre valuacija vrednosti podjetja, ki je podprta z argumentiranim opisom stanja in ciljnimi priporočili.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje?',
      meta: 'Točkovana ocena pripravljenosti · Zasnovano za obrambne projekte in projekte dvojne rabe',
    },
    strip: {
      k: 'Obramba in dvojna raba',
      v: 'Vlagatelji in kupci v plačano ceno vštejejo regulatorno tveganje — zlasti pri obrambnih projektih in projektih dvojne rabe. Jasno zastavljena ocena pripravljenosti spremeni izpostavljenost izvoznim kontrolam, omejitvam glede tujih naložb (“FDI”), sankcijam, pravilom javnih naročil in regulatornim tveganjem v obvladljivo in dokazljivo prednost.',
    },
    why: {
      h2: 'Regulatorna pripravljenost je ključen element vrednotenja vsakega obrambnega podjetja in podjetja, ki razvija rešitve dvojne rabe.',
      items: [
        { wn: '01', h3: 'Tveganje je všteto v ceno', p: 'Nemapirana izpostavljenost izvoznim kontrolam, sankcijam, tujim naložbam ali pravilom javnih naročil pomeni tveganje za vlagatelja — in s tem nižje vrednotenje vrednosti projekta.' },
        { wn: '02', h3: 'Ocena, ki se jo lahko zagovarja', p: 'Pripravljenost za obrambne projekte in pripravljenost za projekte dvojne rabe pretvorimo v točkovano oceno zrelosti podjetja, ki podpira proces skrbnega pregleda vlagateljev.' },
        { wn: '03', h3: 'Najprej poiščite vrzeli', p: 'Prepoznajte regulatorne vrzeli, preden postanejo ovira za zunanje investicije, prevzem (M&A), postopke javnih naročil ali za pogovore o strateškem partnerstvu.' },
      ],
    },
    scan: {
      h2: 'Ocena regulatorne pripravljenosti obrambnih podjetij in podjetij, ki razvijajo rešitve dvojne rabe, ki jo lahko pokažete vlagateljem.',
      intro: 'Regulatorno pripravljenost pretvorimo v jasno oceno zrelosti, ki je pomembna z vidika procesa skrbnega preverjanja obrambnih projektov in projektov dvojne rabe.',
      panelHead1: 'PREGLED PRIPRAVLJENOSTI',
      panelHead2: 'PRIMER OCENE',
      rows: [
        'Mapirana regulatorna izpostavljenost',
        'Izvozne kontrole & izpostavljenost dvojni rabi',
        'Tuje naložbe (FDI) & občutljivost lastniške strukture',
        'Pripravljenost na postopek javnega naročila',
        'Dokumentacija in notranje kontrole',
      ],
      agg: 'SKUPNA PRIPRAVLJENOST',
      // TODO(sl-review): footnote not in the corrections docx — translated to match the panel
      note: 'Ilustrativno · v pregledu ocenjeno za vaše podjetje',
    },
    how: {
      h2: 'Od izpostavljenosti pravilom obrambne industrije do ocene pripravljenosti, ki jo lahko zagovarjate.',
      head1: 'OCENA PRIPRAVLJENOSTI',
      head2: 'PRIPRAVLJENI NA TOČKOVANJE',
      steps: [
        { stepK: 'Korak 01', title: 'Ocena', sub: 'Identificiramo glavna regulatorna tveganja v vaši tehnologiji, poslovnem modelu, ciljnih trgih, nasprotnih strankah, pri vlagateljih in priložnostih v javnem sektorju.', tag: 'izpostavljenost mapirana' },
        { stepK: 'Korak 02', title: 'Točkovanje', sub: 'Pripravljenost za obrambne projekte in projekte dvojne rabe pretvorimo v jasno oceno zrelosti, pripravljeno za pogovore z vlagatelji, kupci ali partnerji.', tag: 'zrelost ocenjena' },
        { stepK: 'Korak 03', title: 'Prilagoditve', sub: 'Izpostavimo vrzeli in določimo prednostne ukrepe, potrebne za okrepitev investicijske pripravljenosti ali za pripravo pred prevzemom, postopki javnih naročil in skrbnim pregledom v postopku sklepanja strateškega partnerstva.', tag: 'vrzeli · prioritete' },
      ],
    },
    coverage: {
      // TODO(sl-review): heading translated from current EN (docx §04 heading was contaminated)
      h2: 'Celovita, za investitorje pripravljena regulativna slika za podjetja na področju obrambe in dvojne rabe.',
      // TODO(sl-review): coverage intro machine-translated
      intro: 'Šest zornih kotov, ena slika pripravljenosti — ocenjena, z opredeljenimi vrzelmi in pripravljena za skrbni pregled.',
      items: [
        { h4: 'Ocena regulativne izpostavljenosti', rows: ['Poslovni model in tehnologija', 'Ciljni trgi in jurisdikcije', 'Investitorji, stranke in nasprotne stranke', 'Tveganja nadzora izvoza, sankcij, tujih naložb (FDI) in javnih naročil'] },
        { h4: 'Točkovanje investicijske pripravljenosti', rows: ['Jasna ocena zrelosti', 'Pogovori z investitorji', 'Podpora pri skrbnem pregledu'] },
        { h4: 'Pregled zrelosti skladnosti', rows: ['Notranje strukture skladnosti', 'Kontrole v praksi', 'Procesi odločanja in eskalacije'] },
        { h4: 'Analiza vrzeli in sanacije', rows: ['Ključne slabosti', 'Nerešena regulativna vprašanja', 'Prednostni ukrepi pred skrbnim pregledom'] },
        { h4: 'Pregled FDI in dostopa do trga', rows: ['Preverjanje tujih naložb', 'Občutljivost glede lastništva in investitorjev', 'Omejitve vstopa na trg', 'Ovire za načrte rasti'] },
        { h4: 'Pripravljenost na razpise in javna naročila', rows: ['Regulirana javna naročila', 'Razpisi za obrambo, varnost in javni sektor', 'Sodelovanje z javnim sektorjem', 'Dokumentacija, ki jo pričakujejo kupci in partnerji'] },
      ],
      // TODO(sl-review): callout machine-translated
      calloutH3: 'Zasnovano za skrbni pregled obrambe in dvojne rabe',
      calloutP: 'Slika pripravljenosti, ki jo investitorji, prevzemniki in strateški partnerji prepoznajo — podprta z oceno zrelosti in prednostnim naborom priporočil, ki vzdrži pregled na področju obrambe in dvojne rabe.',
    },
    expert: {
      // TODO(sl-review): eyebrow machine-translated
      eyebrow: 'Pravni svetovalec · mednarodno trgovinsko pravo · Lemur Legal',
      h2: 'S kom boste sodelovali',
      name: 'Rok Bizjak',
      // TODO(sl-review): role line machine-translated
      role: '// regulativna pripravljenost za investitorje na področju obrambe in dvojne rabe',
      bio1: BIO1_SL,
      bio2: BIO2_SL,
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    included: {
      // TODO(sl-review): included heading machine-translated
      h2: 'Vse, kar bo iskal investitor v obrambo ali dvojno rabo, v enem pregledu.',
      items: [
        'Popisana slika vaše regulativne izpostavljenosti',
        'Jasen rezultat pripravljenosti za prostor skrbnega pregleda',
        'Opredeljena področja tveganja nadzora izvoza, sankcij, tujih naložb (FDI) in javnih naročil',
        'Pregledana zrelost skladnosti in vrzeli v dokumentaciji',
        'Prednostni nabor ukrepov za sanacijo',
      ],
      // TODO(sl-review): priceband text machine-translated
      pricebandText: '<b>Obseg je prilagojen vaši fazi, tehnologiji, ciljnim trgom in okoliščinam posla.</b> Povejte nam o svojem podjetju in opredelili bomo pregled pripravljenosti na obrambo in dvojno rabo s fiksno ponudbo.',
      pricebandBtn: 'Zahtevajte ponudbo',
    },
    faq: {
      h2: 'Pogosto zastavljena vprašanja',
      // TODO(sl-review): FAQ mostly translated from current EN (docx FAQ partly contaminated / shorter)
      items: [
        { q: 'Komu je ta pregled pripravljenosti namenjen?', a: 'Zagonskim (startup) in rastočim podjetjem, ki se pripravljajo na zbiranje sredstev, prodajo ali vstop na regulirane trge in morajo izkazati regulativno pripravljenost.' },
        { q: 'Kaj je ocena pripravljenosti na obrambo in dvojno rabo?', a: 'Jasna ocena zrelosti, ki vašo regulativno pripravljenost spremeni v nekaj, kar investitorji in prevzemniki lahko ocenijo med skrbnim pregledom.' },
        { q: 'Kaj pregled pokriva?', a: 'Regulativno izpostavljenost, zrelost skladnosti, vrzeli in sanacije, FDI in dostop do trga ter pripravljenost na javna naročila in razpise.' },
        { q: 'Kaj je preverjanje FDI?', a: 'Preverjanje tujih neposrednih investicij — vladni pregled določenih tujih naložb; ocenjujemo, ali lahko to ali druge ovire za vstop na trg vplivajo na vaše načrte.' },
        { q: 'Kaj prejmem na koncu?', a: 'Rezultat pripravljenosti in prednostni, ciljno usmerjeni nabor priporočil za okrepitev vašega položaja.' },
        { q: 'Kje se pri zbiranju sredstev ali prevzemih (M&A) pokaže tveganje dvojne rabe?', a: 'To se pogosto pojavi med zbiranjem kapitala, prevzemi (M&A) in komercialnimi skrbnimi pregledi — investitorji in prevzemniki vse bolj podrobno preverjajo, ali občutljiva programska oprema, tehnologija ali znanje (know-how) prehajajo meje, s kom in s kakšnim namenom. Zgodnja prepoznava izpostavljenosti prepreči nepotrebne težave pozneje v poslu.' },
        { q: 'Zakaj zgodaj oceniti izpostavljenost nadzoru izvoza in dvojni rabi?', a: 'Zgodnja ocena je del zrelega upravljanja. Zgodnja prepoznava izpostavljenosti pomaga preprečiti težave pri zbiranju sredstev, sklepanju pogodb, uvajanju, javnih naročilih in mednarodni širitvi — ter vam omogoča, da se na preverjanje investitorjev, strank in partnerjev odzovete verodostojno in odporno.' },
        { q: 'Ali najprej potrebujem regulativno kvalifikacijo?', a: 'Večina strank začne z regulativno kvalifikacijo, lahko pa začnemo tudi tukaj in kvalifikacijo vključimo, kjer je potrebna.' },
      ],
    },
    form: {
      eye: '// kako začeti',
      h: 'Pošljite povpraševanje.',
      // TODO(sl-review): form lead translated from current EN (docx form was contaminated)
      lead: 'Povejte nam o svojem podjetju, tehnologiji in okoliščinah posla — ali potrebujete pregled pripravljenosti, oceno pred zbiranjem sredstev ali zdravstveni pregled pred skrbnim pregledom, preden vaše podjetje pregledajo investitorji, prevzemniki ali strateški partnerji. Pregledali bomo in vam sporočili naslednje korake, praviloma še isti dan.',
      contactPrefix: 'Ljubljana, Slovenija · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      projLabel: 'Ime podjetja in spletna stran',
      linkLabel: 'Faza — zbiranje sredstev, prodaja ali vstop na trg',
      choiceLabel: 'Potrebujem pomoč pri',
      // TODO(sl-review): chips translated from current EN (docx chips differed)
      chips: ['Pregled pripravljenosti', 'Skrbni pregled za investitorje', 'Pregled FDI', 'Izpostavljenost nadzoru izvoza', 'Pripravljenost na javna naročila'],
      submit: 'Oddajte povpraševanje',
    },
    cross: {
      // TODO(sl-review): cross heading machine-translated
      h2: 'Pred tem korakom in za njim',
      items: [
        { h4: 'Regulativna kvalifikacija', p: 'Korak 1 · Nadzor izvoza, carine, sankcije in kvalifikacija dvojne rabe.' },
        { h4: 'Okviri skladnosti', p: 'Korak 3 · Interni programi, upravljanje, kontrole in ponovljivi delovni tokovi skladnosti.' },
      ],
    },
  },
}

export default c
