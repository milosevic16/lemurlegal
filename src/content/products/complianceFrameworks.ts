import type { Bilingual, PageMeta } from '../types'

interface Why { wn: string; h3: string; p: string }
interface Step { stepK: string; title: string; sub: string; tag: string }
interface Cov { h4: string; rows: string[] }
interface Faq { q: string; a: string }
interface Cross { h4: string; p: string }

export interface ComplianceFrameworksContent {
  meta: PageMeta
  hero: { kicker: string; h1Glitch: string; h1Em: string; slogan: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  why: { h2: string; items: [Why, Why, Why] }
  how: { h2: string; steps: [Step, Step, Step] }
  coverage: { h2: string; intro: string; items: Cov[]; calloutH3: string; calloutP: string }
  expert: { eyebrow: string; h2: string; name: string; role: string; bio1: string; bio2: string; linkedinAria: string }
  included: { h2: string; items: string[]; pricebandText: string; pricebandBtn: string }
  faq: { h2: string; items: Faq[] }
  form: {
    eye: string; h: string; lead: string; contactPrefix: string
    nameLabel: string; emailLabel: string; projLabel: string; linkLabel: string
    choiceLabel: string; chips: [string, string, string, string, string, string]; submit: string
  }
  cross: { h2: string; items: [Cross, Cross] }
}

const BIO1_EN = 'Peter is a <strong>technology and financial lawyer</strong> with a focus on cryptocurrency regulation, fintech, and startup ecosystems. He advises crypto companies, fintech ventures, and technology startups on regulatory compliance, contract law, and intellectual property matters, providing practical legal solutions at the intersection of law and emerging technology.'
const BIO2_EN = 'Beyond private practice, Peter serves as an external evaluator for <strong>Horizon Europe</strong> and <strong>NATO Diana</strong>, assessing deep-tech and innovation-driven ventures for programme funding. He is also a partner at venture capital firms, <strong>Suricate Ventures</strong> and <strong>IBEX Equity Partners</strong>, bringing a dual perspective as both legal counsel and investor to the companies he works with.'
const BIO1_SL = 'Peter je <strong>odvetnik za tehnološko in finančno pravo</strong>, osredotočen na regulacijo kriptovalut, fintech in ekosisteme zagonskih podjetij. Kripto podjetjem, fintech podvigom in tehnološkim zagonskim podjetjem svetuje glede regulativne skladnosti, pogodbenega prava in vprašanj intelektualne lastnine ter zagotavlja praktične pravne rešitve na presečišču prava in nastajajočih tehnologij.'
const BIO2_SL = 'Poleg zasebne prakse Peter deluje kot zunanji ocenjevalec za <strong>Horizon Europe</strong> in <strong>NATO Diana</strong>, kjer ocenjuje podvige na področju napredne tehnologije in inovacij za programsko financiranje. Je tudi partner v družbah tveganega kapitala <strong>Suricate Ventures</strong> in <strong>IBEX Equity Partners</strong>, s čimer podjetjem, s katerimi sodeluje, prinaša dvojni pogled — kot pravni svetovalec in kot investitor.'

const c: Bilingual<ComplianceFrameworksContent> = {
  en: {
    meta: {
      title: 'Compliance Frameworks — Lemur Legal',
      description:
        'Turn defence & dual-use regulatory complexity into audit-ready operations. Lemur Legal builds scalable compliance frameworks, governance and controls across export controls, sanctions and procurement.',
    },
    hero: {
      kicker: 'Compliance Frameworks for Defence & Dual-Use · Ljubljana',
      h1Glitch: 'Turn defence & dual-use regulatory complexity into',
      h1Em: 'audit-ready operations.',
      slogan: '// export controls · sanctions · governance · controls · audit-readiness.',
      lead: 'We establish <strong>scalable internal compliance frameworks</strong> for defence and dual-use companies, translating export controls, sanctions exposure, counterparty screening, procurement requirements and internal approval rules into clear operational standards.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'Fixed-scope build-outs · Defensible, audit-ready & embedded in defence and dual-use operations',
    },
    strip: {
      k: 'Defence & dual use',
      v: 'As defence and dual-use companies scale, ad-hoc compliance breaks. A designed framework makes export-control checks, sanctions screening, internal approvals, procurement readiness and recordkeeping repeatable, defensible and audit-ready — so regulatory control becomes part of how the company operates.',
    },
    why: {
      h2: 'Compliance that scales with defence & dual-use growth.',
      items: [
        { wn: '01', h3: 'Regulatory exposure grows with the business', p: 'As defence and dual-use companies move from prototype to sales, exports, procurement, partnerships or fundraising, informal compliance decisions become harder to defend.' },
        { wn: '02', h3: 'Governance must be clear before risk appears', p: 'Sensitive transactions need defined roles, escalation pathways and approval rules before teams make decisions under commercial pressure.' },
        { wn: '03', h3: 'Audit-readiness cannot be improvised', p: 'Investors, public buyers, strategic partners and regulators may ask how export controls, sanctions, screening and internal approvals are documented in practice.' },
      ],
    },
    how: {
      h2: 'From defence & dual-use exposure to operational standard.',
      steps: [
        { stepK: 'Step 01', title: 'Design', sub: 'We design a compliance programme tailored to your technology, regulatory exposure, target markets, operating model and stage of growth.', tag: 'tailored programme' },
        { stepK: 'Step 02', title: 'Embed', sub: 'We integrate compliance into day-to-day processes, including customer and partner screening, internal approvals, contract review, export-control checks and escalation pathways.', tag: 'governance · approvals · escalation' },
        { stepK: 'Step 03', title: 'Assure', sub: 'We define documentation, training and audit-readiness standards that support internal oversight, investor review, public-sector engagement and external scrutiny.', tag: 'audit-ready' },
      ],
    },
    coverage: {
      h2: 'Everything a defence & dual-use compliance function needs.',
      intro: 'Six building blocks, one framework — designed, embedded and made audit-ready for regulated defence and dual-use operations.',
      items: [
        { h4: 'Defence & dual-use compliance programme design', rows: ['Tailored to your regulatory exposure', 'Mapped to your operating model', 'Scaled to your stage of growth', 'Built around export controls, sanctions, FDI, procurement and market access'] },
        { h4: 'Governance & escalation', rows: ['Roles & responsibilities', 'Decision-making lines', 'Escalation pathways for higher-risk issues', 'Approval rules for sensitive transactions, markets and counterparties'] },
        { h4: 'Policies, templates & controls', rows: ['Internal compliance documentation', 'Reusable screening and approval templates', 'Control measures for export, licensing, procurement and partner relationships', 'Consistent, defensible practice across the company'] },
        { h4: 'Operational process integration', rows: ['Customer, supplier and partner onboarding', 'Sanctions and counterparty screening', 'Contracting and transaction approvals', 'Internal review before exports, technical transfers or regulated engagements'] },
        { h4: 'Training & internal awareness', rows: ['Targeted training for management and commercial teams', 'Practical guidance on defence and dual-use risk areas', 'Clearer understanding of when legal review is required', 'Internal awareness for sales, partnerships, procurement and investor discussions'] },
        { h4: 'Audit & documentation readiness', rows: ['Recordkeeping standards', 'Documentation standards', 'Internal oversight support', 'External diligence, audit and public-sector review preparation'] },
      ],
      calloutH3: 'Audit-ready for defence & dual-use operations',
      calloutP: 'From programme design to recordkeeping, we build the controls and documentation that support internal oversight, investor diligence, public-sector engagement and external review — so compliance is not reconstructed after the question is asked.',
    },
    expert: {
      eyebrow: 'Founder · technology & regulatory lawyer · Lemur Legal',
      h2: "Who you'll work with",
      name: 'Peter Merc, Ph.D.',
      role: '// compliance frameworks for defence & dual-use',
      bio1: BIO1_EN,
      bio2: BIO2_EN,
      linkedinAria: 'Peter Merc on LinkedIn',
    },
    included: {
      h2: 'Everything your defence & dual-use framework needs, in one build-out.',
      items: [
        'A compliance programme mapped to your defence and dual-use regulatory exposure',
        'Governance, roles and escalation pathways defined',
        'Export-control, sanctions, screening and approval workflows documented',
        'Policies, templates and internal controls prepared',
        'Training and audit-ready recordkeeping standards established',
      ],
      pricebandText: "<b>Scope is set to your technology, regulatory exposure, target markets and stage of growth.</b> Tell us about your company and we'll scope a defence & dual-use compliance framework build-out with a fixed proposal.",
      pricebandBtn: 'Request a proposal',
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        { q: 'What is a defence & dual-use compliance framework?', a: 'The internal structures, policies, controls and governance that make regulatory compliance consistent, repeatable and defensible.' },
        { q: "We're small — do we need this already?", a: 'We tailor the programme to your stage and exposure; the point is a framework that scales as you grow, not bureaucracy.' },
        { q: 'What does governance build-out include?', a: 'Defined roles, responsibilities, decision-making lines and escalation pathways for higher-risk issues and transactions.' },
        { q: 'How do you make us audit-ready?', a: 'We set recordkeeping and documentation standards that support internal oversight, external diligence and audits.' },
        { q: 'How is compliance embedded operationally?', a: 'Into day-to-day processes — onboarding, approvals, contracting and internal review — so it is part of how you work.' },
        { q: 'Is training included?', a: 'Yes — targeted training and practical guidance to strengthen internal awareness of your risk areas.' },
        { q: 'What does good dual-use governance look like in practice?', a: 'Effective structures may include product-classification procedures, customer and end-use review, escalation channels for higher-risk transactions, contractual safeguards, internal training, screening, recordkeeping, and management or board-level visibility over key risks.' },
        { q: 'When is specialist legal support most valuable?', a: 'When classification is unclear, you operate across borders or near controlled categories, destinations are higher-risk, or governance must be built from the ground up. Addressing licensing pathways, end-use risk, contractual protections and internal governance early materially improves outcomes and reduces later delays.' },
        { q: 'How does Lemur Legal support defence and dual-use businesses?', a: 'We combine public- and private-sector experience across legal analysis, regulatory practice and the operational realities of sensitive industries — supporting clients from early compliance design through to advanced regulatory and transactional questions: building compliance culture and governance, assessing classification, navigating authorisations, structuring contracts and addressing strategic legal issues in defence-tech and dual-use markets.' },
      ],
    },
    form: {
      eye: '// get started',
      h: 'Send your inquiry.',
      lead: "Tell us about your company, technology, products and target markets — whether you need a new compliance framework, a governance build-out, internal approval workflows or audit-readiness for defence and dual-use operations. We'll review it and come back with next steps, usually the same day.",
      contactPrefix: 'Ljubljana, Slovenia · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      projLabel: 'Company name & website',
      linkLabel: 'Technology, products & target markets',
      choiceLabel: 'I need help with',
      chips: ['Programme design', 'Governance', 'Audit readiness', 'Export-control workflow', 'Sanctions screening', 'Procurement readiness'],
      submit: 'Submit inquiry',
    },
    cross: {
      h2: 'Earlier steps in the defence & dual-use practice',
      items: [
        { h4: 'Regulatory Qualification', p: 'Step 1 · Export controls, customs, sanctions and dual-use qualification.' },
        { h4: 'Investment Readiness Review', p: 'Step 2 · Investor-oriented regulatory readiness, scoring and diligence preparation.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'Okviri skladnosti — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Regulativno kompleksnost obrambe in dvojne rabe pretvorite v operacije, pripravljene na revizijo. Lemur Legal gradi prilagodljive okvire skladnosti, upravljanje in kontrole na področju nadzora izvoza, sankcij in javnih naročil.',
    },
    hero: {
      // TODO(sl-review): kicker machine-translated
      kicker: 'Okviri skladnosti za obrambo in dvojno rabo · Ljubljana',
      // TODO(sl-review): H1 translated from current EN (docx omits "defence & dual-use")
      h1Glitch: 'Pretvorite regulativno kompleksnost obrambe in dvojne rabe v',
      h1Em: 'operacije, pripravljene na revizijo.',
      // TODO(sl-review): slogan translated from current EN
      slogan: '// nadzor izvoza · sankcije · upravljanje · kontrole · revizijska pripravljenost.',
      // TODO(sl-review): hero lead translated from current EN
      lead: 'Za obrambna podjetja in podjetja z dvojno rabo vzpostavljamo <strong>prilagodljive interne okvire skladnosti</strong>, ki nadzor izvoza, izpostavljenost sankcijam, preverjanje nasprotnih strank, zahteve javnih naročil in interna pravila odobritve prevajajo v jasne operativne standarde.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje',
      // TODO(sl-review): hero meta machine-translated
      meta: 'Izvedba v fiksno določenem obsegu · Pravno varne, na revizijo pripravljene in vgrajene v poslovanje obrambe in dvojne rabe',
    },
    strip: {
      k: 'Obramba in dvojna raba',
      // TODO(sl-review): strip value translated from current EN
      v: 'Ko obrambna podjetja in podjetja z dvojno rabo rastejo, priložnostno zagotavljanje skladnosti odpove. Načrtovan okvir naredi preverjanja nadzora izvoza, presejanje sankcij, interne odobritve, pripravljenost na javna naročila in vodenje evidenc ponovljive, pravno varne in pripravljene na revizijo — tako da regulativni nadzor postane del delovanja podjetja.',
    },
    why: {
      // TODO(sl-review): heading translated from current EN
      h2: 'Skladnost, ki raste z rastjo obrambe in dvojne rabe.',
      // TODO(sl-review): §01 cards translated from current EN (not in docx)
      items: [
        { wn: '01', h3: 'Regulativna izpostavljenost raste s poslovanjem', p: 'Ko obrambna podjetja in podjetja z dvojno rabo prehajajo od prototipa k prodaji, izvozu, javnim naročilom, partnerstvom ali zbiranju sredstev, je neformalne odločitve o skladnosti vse težje zagovarjati.' },
        { wn: '02', h3: 'Upravljanje mora biti jasno, preden se pojavi tveganje', p: 'Občutljive transakcije potrebujejo opredeljene vloge, eskalacijske poti in pravila odobritve, preden ekipe sprejemajo odločitve pod poslovnim pritiskom.' },
        { wn: '03', h3: 'Revizijske pripravljenosti ni mogoče improvizirati', p: 'Investitorji, javni naročniki, strateški partnerji in regulatorji lahko vprašajo, kako so nadzor izvoza, sankcije, preverjanja in interne odobritve dokumentirani v praksi.' },
      ],
    },
    how: {
      // TODO(sl-review): heading translated from current EN
      h2: 'Od izpostavljenosti obrambi in dvojni rabi do operativnega standarda.',
      steps: [
        { stepK: 'Korak 01', title: 'Načrtovanje', sub: 'Oblikujemo program skladnosti, prilagojen vaši tehnologiji, regulativni izpostavljenosti, ciljnim trgom, poslovnemu modelu in stopnji rasti.', tag: 'prilagojen program' },
        { stepK: 'Korak 02', title: 'Vključitev', sub: 'Skladnost integriramo v vsakodnevne procese, vključno s preverjanjem strank in partnerjev, internimi odobritvami, pregledom pogodb, preverjanji nadzora izvoza in eskalacijskimi potmi.', tag: 'upravljanje · odobritve · eskalacija' },
        { stepK: 'Korak 03', title: 'Zagotavljanje', sub: 'Opredelimo standarde dokumentiranja, usposabljanja in revizijske pripravljenosti, ki podpirajo interni nadzor, pregled investitorjev, sodelovanje z javnim sektorjem in zunanje preverjanje.', tag: 'pripravljeno na revizijo' },
      ],
    },
    coverage: {
      // TODO(sl-review): heading translated from current EN
      h2: 'Vse, kar potrebuje funkcija skladnosti za obrambo in dvojno rabo.',
      // TODO(sl-review): coverage intro machine-translated
      intro: 'Šest gradnikov, en okvir — načrtovan, vgrajen in pripravljen na revizijo za regulirano poslovanje obrambe in dvojne rabe.',
      items: [
        { h4: 'Načrtovanje programa skladnosti za obrambo in dvojno rabo', rows: ['Prilagojeno vaši regulativni izpostavljenosti', 'Usklajeno z vašim poslovnim modelom', 'Prilagojeno vaši stopnji rasti', 'Zgrajeno okoli nadzora izvoza, sankcij, tujih naložb (FDI), javnih naročil in dostopa do trga'] },
        { h4: 'Upravljanje in eskalacija', rows: ['Vloge in odgovornosti', 'Linije odločanja', 'Eskalacijske poti za vprašanja z višjim tveganjem', 'Pravila odobritve za občutljive transakcije, trge in nasprotne stranke'] },
        { h4: 'Politike, predloge in kontrole', rows: ['Interna dokumentacija o skladnosti', 'Predloge za preverjanje in odobritve za ponovno uporabo', 'Nadzorni ukrepi za izvoz, licenciranje, javna naročila in odnose s partnerji', 'Dosledna in pravno varna praksa po vsem podjetju'] },
        { h4: 'Integracija v operativne procese', rows: ['Uvajanje strank, dobaviteljev in partnerjev', 'Presejanje sankcij in nasprotnih strank', 'Sklepanje pogodb in odobritve transakcij', 'Interni pregled pred izvozom, tehničnimi prenosi ali reguliranimi posli'] },
        { h4: 'Usposabljanje in interna ozaveščenost', rows: ['Ciljno usposabljanje za vodstvo in komercialne ekipe', 'Praktična navodila za rizična področja obrambe in dvojne rabe', 'Jasnejše razumevanje, kdaj je potreben pravni pregled', 'Interna ozaveščenost za prodajo, partnerstva, javna naročila in pogovore z investitorji'] },
        { h4: 'Pripravljenost na revizijo in dokumentacija', rows: ['Standardi vodenja evidenc', 'Standardi dokumentiranja', 'Podpora internemu nadzoru', 'Priprava na zunanji skrbni pregled, revizijo in pregled javnega sektorja'] },
      ],
      // TODO(sl-review): callout translated from current EN
      calloutH3: 'Pripravljeni na revizijo za poslovanje obrambe in dvojne rabe',
      calloutP: 'Od zasnove programa do vodenja evidenc gradimo kontrole in dokumentacijo, ki podpirajo interni nadzor, skrbni pregled investitorjev, sodelovanje z javnim sektorjem in zunanji pregled — tako da skladnosti ni treba obnavljati šele, ko je vprašanje postavljeno.',
    },
    expert: {
      eyebrow: 'Ustanovitelj · pravnik za tehnologijo in regulativo · Lemur Legal',
      h2: 'S kom boste sodelovali',
      name: 'dr. Peter Merc',
      role: '// okviri skladnosti za obrambo in dvojno rabo',
      bio1: BIO1_SL,
      bio2: BIO2_SL,
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    included: {
      // TODO(sl-review): included heading + items machine-translated
      h2: 'Vse, kar vaš okvir za obrambo in dvojno rabo potrebuje, v eni izvedbi.',
      items: [
        'Program skladnosti, usklajen z vašo regulativno izpostavljenostjo pri obrambi in dvojni rabi',
        'Opredeljeno upravljanje, vloge in eskalacijske poti',
        'Dokumentirani delovni tokovi za nadzor izvoza, sankcije, preverjanje in odobritve',
        'Pripravljene politike, predloge in interne kontrole',
        'Vzpostavljeni standardi usposabljanja in vodenja evidenc, pripravljeni na revizijo',
      ],
      pricebandText: '<b>Obseg je prilagojen vaši tehnologiji, regulativni izpostavljenosti, ciljnim trgom in stopnji rasti.</b> Povejte nam o svojem podjetju in opredelili bomo izvedbo okvira skladnosti za obrambo in dvojno rabo s fiksno ponudbo.',
      pricebandBtn: 'Zahtevajte ponudbo',
    },
    faq: {
      h2: 'Pogosto zastavljena vprašanja',
      items: [
        { q: 'Kaj je okvir skladnosti za obrambo in dvojno rabo?', a: 'To so interne strukture, politike, kontrole in upravljanje, ki zagotavljajo, da je izpolnjevanje regulativnih zahtev dosledno, ponovljivo in pravno varno.' },
        { q: 'Smo majhni — ali to že potrebujemo?', a: 'Program prilagodimo vaši razvojni stopnji in izpostavljenosti; cilj je okvir, ki raste skupaj z vami, in ne birokracija.' },
        { q: 'Kaj vključuje izgradnja sistema upravljanja?', a: 'Opredeljene vloge, odgovornosti, linije odločanja in eskalacijske poti za vprašanja in transakcije z višjo stopnjo tveganja.' },
        { q: 'Kako nas pripravite na revizijo?', a: 'Določimo standarde vodenja evidenc in dokumentiranja, ki podpirajo interni nadzor, zunanje skrbne preglede in revizije.' },
        { q: 'Kako se skladnost operativno vključi v delovanje?', a: 'V vsakodnevne procese — uvajanje, odobritve, sklepanje pogodb in interni pregled — tako da postane del vašega običajnega dela.' },
        { q: 'Ali je vključeno tudi usposabljanje?', a: 'Da — ciljno usposabljanje in praktična navodila za krepitev interne ozaveščenosti o vaših rizičnih področjih.' },
        { q: 'Kako izgleda dobro upravljanje dvojne rabe v praksi?', a: 'Učinkovite strukture lahko vključujejo postopke klasifikacije izdelkov, preverjanje strank in končne uporabe, eskalacijske kanale za transakcije z višjim tveganjem, pogodbene varovalke, interno usposabljanje, preverjanja, vodenje evidenc ter pregled ključnih tveganj na ravni vodstva ali upravnega odbora.' },
        { q: 'Kdaj je specialistična pravna podpora najbolj dragocena?', a: 'Kadar klasifikacija ni jasna, kadar poslujete mednarodno ali blizu nadzorovanih kategorij blaga, kadar gre za visoko tvegane destinacije ali ko je treba upravljanje zgraditi od temeljev. Zgodnje reševanje licenčnih poti, tveganj končne uporabe, pogodbenih zaščit in internega upravljanja bistveno izboljša rezultate in zmanjša kasnejše zamude.' },
        { q: 'Kako Lemur Legal podpira podjetja na področju obrambe in dvojne rabe?', a: 'Združujemo izkušnje iz javnega in zasebnega sektorja na področju pravnih analiz, regulativne prakse in operativne realnosti občutljivih industrij — stranke podpiramo od zgodnjega načrtovanja skladnosti do naprednih regulativnih in transakcijskih vprašanj: gradimo kulturo skladnosti in upravljanja, ocenjujemo klasifikacijo, pomagamo pri pridobivanju dovoljenj, strukturiramo pogodbe in rešujemo strateška pravna vprašanja na trgih obrambne tehnologije in dvojne rabe.' },
      ],
    },
    form: {
      eye: '// kako začeti',
      h: 'Pošljite povpraševanje.',
      // TODO(sl-review): form lead machine-translated
      lead: 'Povejte nam o svojem podjetju, tehnologiji, izdelkih in ciljnih trgih — ali potrebujete nov okvir skladnosti, izgradnjo upravljanja, interne delovne tokove odobritev ali revizijsko pripravljenost za poslovanje obrambe in dvojne rabe. Pregledali bomo in vam sporočili naslednje korake, praviloma še isti dan.',
      contactPrefix: 'Ljubljana, Slovenija · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      projLabel: 'Ime podjetja in spletna stran',
      linkLabel: 'Tehnologija, izdelki in ciljni trgi',
      choiceLabel: 'Potrebujem pomoč pri',
      // TODO(sl-review): chips machine-translated
      chips: ['Načrtovanje programa', 'Upravljanje', 'Revizijska pripravljenost', 'Delovni tok nadzora izvoza', 'Presejanje sankcij', 'Pripravljenost na javna naročila'],
      submit: 'Oddajte povpraševanje',
    },
    cross: {
      // TODO(sl-review): cross heading machine-translated
      h2: 'Zgodnejši koraki v praksi za obrambo in dvojno rabo',
      items: [
        { h4: 'Regulativna kvalifikacija', p: 'Korak 1 · Nadzor izvoza, carine, sankcije in kvalifikacija dvojne rabe.' },
        { h4: 'Pregled investicijske pripravljenosti', p: 'Korak 2 · Regulativna pripravljenost, ocena in priprava na skrbni pregled, usmerjene k investitorjem.' },
      ],
    },
  },
}

export default c
