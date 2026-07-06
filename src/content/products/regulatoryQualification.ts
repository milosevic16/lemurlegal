import type { Bilingual, PageMeta } from '../types'

interface Why { wn: string; h3: string; p: string }
interface Step { stepK: string; title: string; sub: string; tag: string }
interface Cov { h4: string; rows: string[] }
interface Faq { q: string; a: string }
interface Cross { h4: string; p: string }

export interface RegulatoryQualificationContent {
  meta: PageMeta
  hero: { kicker: string; h1Glitch: string; h1Em: string; slogan: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  why: { h2: string; items: [Why, Why, Why] }
  trace: { h2: string; intro: string }
  how: { h2: string; steps: [Step, Step, Step] }
  coverage: { h2: string; intro: string; items: Cov[]; calloutH3: string; calloutP: string }
  expert: { eyebrow: string; h2: string; name: string; role: string; bio1: string; bio2: string }
  included: { h2: string; items: string[]; pricebandText: string; pricebandBtn: string }
  faq: { h2: string; items: Faq[] }
  form: {
    eye: string; h: string; lead: string; contactPrefix: string
    nameLabel: string; emailLabel: string; projLabel: string; linkLabel: string
    choiceLabel: string; chips: [string, string, string]; submit: string
  }
  cross: { h2: string; items: [Cross, Cross] }
}

const BIO1_EN = 'Rok is a <strong>legal advisor in international trade law</strong>, focusing on the defence and dual-use sectors. He combines government and corporate experience in export controls, sanctions, regulatory governance, public procurement, and the military adoption of emerging technologies. His understanding of controlled items and the underlying technologies gives him a practical edge when supporting his clients on regulatory matters.'
const BIO2_EN = 'He regularly speaks at defence and dual-use events and conferences, offering practical insight into current regulatory developments, and has contributed as a guest expert within the <strong>EU P2P export control programme</strong>.'
const BIO1_SL = 'Rok je <strong>pravni svetovalec za pravo mednarodne trgovine</strong>, s poudarkom na obrambnem in dual-use sektorju. Združuje izkušnje iz javnega in zasebnega sektorja na področjih izvoznega nadzora, sankcij, regulativnega upravljanja, javnega naročanja ter uvajanja novih tehnologij v vojaško okolje. Njegovo razumevanje nadzorovanega blaga in tehnologij, ki stojijo za njim, mu daje praktično prednost pri svetovanju strankam v regulativnih zadevah.'
const BIO2_SL = 'Redno nastopa na dogodkih in konferencah s področja obrambe in dual-use industrije, kjer deli praktičen vpogled v aktualni regulativni razvoj. Sodeloval je tudi kot gostujoči strokovnjak v okviru <strong>programa EU P2P za izvozni nadzor</strong>.'

const c: Bilingual<RegulatoryQualificationContent> = {
  en: {
    meta: {
      title: 'Trade Regulatory Qualification — Lemur Legal',
      description:
        'Defence and dual-use tech, cleared for global markets. We turn export controls, sanctions and customs classification into repeatable workflows.',
    },
    hero: {
      kicker: 'Trade Regulatory Qualification for Defence & Dual-Use · Ljubljana',
      h1Glitch: 'Defence & dual-use technology,',
      h1Em: 'cleared for global markets.',
      slogan: '// classify · screen · sanctions · export controls · authorise.',
      lead: 'We help defence and dual-use companies translate export controls, sanctions, customs classification and regulatory screening into <strong>clear, repeatable workflows</strong> — so products, components and technologies can move across borders with fewer legal and operational risks.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'Export controls · sanctions · customs classification · dual-use qualification · cross-border growth',
    },
    strip: {
      k: 'Defence & dual use',
      v: 'Defence and dual-use technologies sit under export-control, customs and sanctions regimes. Getting qualification wrong stalls shipments, deals and growth — getting it right turns regulation into a competitive advantage.',
    },
    why: {
      h2: 'Make the most of the current regulation to accelerate your potential.',
      items: [
        { wn: '01', h3: 'Dual-use exposure assessment', p: 'Many advanced technologies carry dual-use potential, making early assessment and careful handling essential.' },
        { wn: '02', h3: 'Friction kills deals', p: "Sanctions and trade barriers surface late and disrupt execution if they aren't mapped early." },
        { wn: '03', h3: 'Built to scale', p: 'From one-off checks to building repeatable compliance workflows.' },
      ],
    },
    trace: {
      h2: 'Every cross-border move, cleared before it happens.',
      intro: 'We classify the item, screen the counterparty and destination, and resolve the licensing route — so nothing ships into a surprise.',
    },
    how: {
      h2: 'From classification to a workflow that scales.',
      steps: [
        { stepK: 'Step 01', title: 'Classify', sub: 'We determine how your product and technology are treated under export-control rules.', tag: 'export-control class' },
        { stepK: 'Step 02', title: 'Screen', sub: 'We review counterparties, destinations and transactions through a sanctions and trade lens.', tag: 'sanctions · trade' },
        { stepK: 'Step 03', title: 'Operationalise', sub: 'We embed repeatable trade-compliance workflows and prepare you for any required authorisations.', tag: 'workflow · licensing' },
      ],
    },
    coverage: {
      h2: 'Qualification across the full trade-compliance picture.',
      intro: 'Six checkpoints, one cleared path — from classification to an operational workflow.',
      items: [
        { h4: 'Product & technology qualification', rows: ['Product capabilities & specs', 'Underlying technology', 'Software & technical data', 'Export-control treatment'] },
        { h4: 'Counterparty & destination risk', rows: ['Customers & partners', 'Destination countries', 'Sanctions & trade lens', 'End-use & end-user'] },
        { h4: 'Cross-border transaction assessment', rows: ['Transfer routes', 'Regulatory friction points', 'Pre-execution clearance'] },
        { h4: 'Authorisation readiness', rows: ['Licensing routes', 'Application preparation', 'Regulatory engagement'] },
        { h4: 'Supply-chain regulatory mapping', rows: ['Customs touchpoints', 'Sanctions exposure', 'Export-control intersections'] },
        { h4: 'Operational trade compliance', rows: ['Repeatable workflows', 'Team-runnable checks', 'Scalable international growth'] },
      ],
      calloutH3: 'Where customs, sanctions and export controls meet',
      calloutP: 'We map the points where these regimes intersect across your supply chain, so nothing is missed operationally — and so each cross-border move is cleared before it happens.',
    },
    expert: {
      eyebrow: 'Legal advisor · international trade law · Lemur Legal',
      h2: "Who you'll work with",
      name: 'Rok Bizjak',
      role: '// export controls, sanctions & trade compliance',
      bio1: BIO1_EN,
      bio2: BIO2_EN,
    },
    included: {
      h2: 'Everything you need to ship across borders, in one qualification.',
      items: [
        'Your product and technology classified under export controls',
        'Counterparties and destinations screened',
        'Licensing routes and authorisations mapped',
        'Repeatable trade-compliance workflows your team can run',
      ],
      pricebandText: "<b>Scope is set to your product, markets and supply chain.</b> Tell us where you're shipping and we'll scope a qualification with a fixed proposal.",
      pricebandBtn: 'Request a proposal',
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        { q: 'What exactly does "dual-use" mean?', a: 'In regulatory terms, dual-use refers to goods, software and technology designed for legitimate civilian purposes that may also have military, security, surveillance or other sensitive applications. Not everything capable of both uses is caught — the framework targets items of particular strategic significance, such as technologies linked to weapons proliferation or advanced industrial capability. It now extends beyond physical items to software, the technology to develop or use them, and in some cases know-how, technical assistance and test data.' },
        { q: "We're not a defence company — does this still apply?", a: 'Yes. The regulatory position does not depend on whether you identify as a defence business. If your product, its software, its underlying technology or associated technical data falls within dual-use scope, authorisation requirements may apply before it is sold or transferred across borders. This increasingly affects software companies, advanced manufacturers, AI developers and research-intensive ventures.' },
        { q: 'How is dual-use governed?', a: 'Through multilateral export-control arrangements alongside national and regional law. For businesses in or from the EU, Regulation (EU) 2021/821 is the central instrument — providing the core definitions, the control framework and the list architecture for controlled items. The lists are updated periodically, so changes should be monitored; the licensing route depends on the item, the destination and whether it is administered at Union or Member-State level.' },
        { q: 'Is it enough to check the control lists?', a: "No. A proper assessment also weighs the product's actual capabilities and specifications, the customer, the destination country, the end user and the intended end use — and whether software or technical support is supplied alongside it. Dual-use compliance is a continuous process of classification, assessment and risk-based decisions, not a one-off check." },
        { q: 'How do I know if my technology is controlled?', a: 'We classify your product and technology against the applicable control lists and assess the contextual factors — capabilities, counterparties, destination and end use — to determine how it is treated and what that means for your sales.' },
        { q: 'Why screen counterparties and destinations?', a: 'Sanctions and trade restrictions can prohibit specific customers, partners or markets — and sanctions often operate alongside dual-use controls. Screening prevents costly, late-stage friction.' },
        { q: 'Do you help obtain licences?', a: 'We prepare you for licensing and related regulatory engagement, so authorisation is ready when you need it.' },
        { q: 'Where does this sit in your defence practice?', a: 'It is the first of three steps: qualification first, then an investment-readiness review, then a full compliance framework.' },
      ],
    },
    form: {
      eye: '// get started',
      h: 'Send your inquiry.',
      lead: "Tell us about your product, technology and target markets — a classification, a sanctions screen, or a full trade-compliance workflow. We'll review it and come back with next steps, usually the same day.",
      contactPrefix: 'Ljubljana, Slovenia · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      projLabel: 'Company name & website',
      linkLabel: 'Product, technology & target markets (or a short brief)',
      choiceLabel: 'I need help with',
      chips: ['Product qualification', 'Counterparty screening', 'Authorisation'],
      submit: 'Submit inquiry',
    },
    cross: {
      h2: 'The next steps in the defence practice',
      items: [
        { h4: 'Investment Readiness Review', p: 'Step 2 · Investor-oriented regulatory readiness & scoring.' },
        { h4: 'Compliance Frameworks', p: 'Step 3 · Internal programmes, governance & controls.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'Trgovinska regulativna kvalifikacija — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Obrambna tehnologija in dvojna raba za svetovne trge. Nadzor izvoza, sankcije in carinsko razvrščanje spremenimo v ponovljive čezmejne postopke.',
    },
    hero: {
      // TODO(sl-review): kicker machine-translated
      kicker: 'Trgovinska regulativna kvalifikacija za obrambo in dvojno rabo · Ljubljana',
      // TODO(sl-review): H1 differs from docx — translated from current EN
      h1Glitch: 'Obrambna tehnologija in tehnologija z dvojno rabo,',
      h1Em: 'odobrena za svetovne trge.',
      // TODO(sl-review): slogan machine-translated
      slogan: '// razvrsti · preveri · sankcije · nadzor izvoza · odobri.',
      // TODO(sl-review): hero lead differs from docx — translated from current EN
      lead: 'Obrambnim podjetjem in podjetjem z dvojno rabo pomagamo nadzor izvoza, sankcije, carinsko razvrščanje in regulativno preverjanje preoblikovati v <strong>jasne, ponovljive delovne tokove</strong> — tako da se izdelki, komponente in tehnologije lahko gibljejo prek meja z manj pravnimi in operativnimi tveganji.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje',
      // TODO(sl-review): hero meta machine-translated
      meta: 'Nadzor izvoza · sankcije · carinsko razvrščanje · kvalifikacija dvojne rabe · čezmejna rast',
    },
    strip: {
      k: 'Obramba in dvojna raba',
      v: 'Obrambne tehnologije in tehnologije z dvojno rabo spadajo pod režime nadzora izvoza, carine in sankcij. Napačna kvalifikacija zaustavi pošiljke, posle in rast — pravilna izvedba pa spremeni regulativo v konkurenčno prednost.',
    },
    why: {
      h2: 'Izkoristite obstoječo regulativo za pospešitev svojega potenciala.',
      items: [
        // TODO(sl-review): item 01 h3/p differ from docx — translated from current EN
        { wn: '01', h3: 'Ocena izpostavljenosti dvojni rabi', p: 'Številne napredne tehnologije nosijo potencial dvojne rabe, zato sta zgodnja ocena in previdno ravnanje bistvena.' },
        { wn: '02', h3: 'Trenja uničujejo posle', p: 'Sankcije in trgovinske ovire se pojavijo pozno in motijo izvedbo, če niso popisane že na samem začetku.' },
        { wn: '03', h3: 'Zasnovano za rast', p: 'Od enkratnih pregledov do gradnje ponovljivih delovnih tokov za skladnost.' },
      ],
    },
    trace: {
      h2: 'Vsaka čezmejna poteza, odobrena pred njeno izvedbo.',
      intro: 'Razvrstimo artikel, preverimo nasprotno stranko in cilj ter določimo pot licenciranja — tako da nobena pošiljka ne naleti na presenečenje.',
    },
    how: {
      h2: 'Od klasifikacije do delovnega toka, ki raste z vami.',
      steps: [
        { stepK: 'Korak 01', title: 'Razvrstitev', sub: 'Določimo, kako sta vaš izdelek in tehnologija obravnavana v skladu s pravili o nadzoru izvoza.', tag: 'razred nadzora izvoza' },
        { stepK: 'Korak 02', title: 'Preverjanje', sub: 'Pregledamo nasprotne stranke, destinacije in transakcije skozi prizmo sankcij in trgovine.', tag: 'sankcije · trgovina' },
        { stepK: 'Korak 03', title: 'Operacionalizacija', sub: 'Vgradimo ponovljive delovne tokove za skladnost trgovanja in vas pripravimo na vse potrebne odobritve.', tag: 'delovni tok · licenciranje' },
      ],
    },
    coverage: {
      h2: 'Kvalifikacija celotne slike trgovinske skladnosti.',
      // TODO(sl-review): coverage intro machine-translated
      intro: 'Šest kontrolnih točk, ena odobrena pot — od razvrstitve do operativnega delovnega toka.',
      items: [
        { h4: 'Kvalifikacija izdelka in tehnologije', rows: ['Zmogljivosti in specifikacije izdelka', 'Izhodiščna tehnologija', 'Programska oprema in tehnični podatki', 'Obravnava nadzora izvoza'] },
        { h4: 'Tveganje nasprotne stranke in destinacije', rows: ['Stranke in partnerji', 'Ciljne države', 'Prizma sankcij in trgovine', 'Končna uporaba in končni uporabnik'] },
        { h4: 'Ocena čezmejnih transakcij', rows: ['Poti prenosa', 'Regulativne točke trenja', 'Odobritev pred izvedbo'] },
        { h4: 'Pripravljenost na odobritev', rows: ['Poti licenciranja', 'Priprava vloge', 'Sodelovanje z regulatornimi organi'] },
        { h4: 'Regulativni popis dobavne verige', rows: ['Carinske točke', 'Izpostavljenost sankcijam', 'Presečišča nadzora izvoza'] },
        { h4: 'Operativna trgovinska skladnost', rows: ['Ponovljivi delovni tokovi', 'Pregledi, ki jih izvaja ekipa', 'Prilagodljiva mednarodna rast'] },
      ],
      // TODO(sl-review): callout machine-translated
      calloutH3: 'Kjer se stikajo carine, sankcije in nadzor izvoza',
      calloutP: 'Popišemo točke, kjer se ti režimi prekrivajo v vaši dobavni verigi, tako da operativno nič ni spregledano — in da je vsaka čezmejna poteza odobrena, preden se zgodi.',
    },
    expert: {
      // TODO(sl-review): eyebrow machine-translated
      eyebrow: 'Pravni svetovalec · mednarodno trgovinsko pravo · Lemur Legal',
      h2: 'S kom boste sodelovali',
      name: 'Rok Bizjak',
      // TODO(sl-review): role line machine-translated
      role: '// nadzor izvoza, sankcije in trgovinska skladnost',
      bio1: BIO1_SL,
      bio2: BIO2_SL,
    },
    included: {
      // TODO(sl-review): included heading + items machine-translated
      h2: 'Vse, kar potrebujete za pošiljanje prek meja, v eni kvalifikaciji.',
      items: [
        'Vaš izdelek in tehnologija, razvrščena v skladu z nadzorom izvoza',
        'Preverjene nasprotne stranke in destinacije',
        'Popisane poti licenciranja in odobritve',
        'Ponovljivi delovni tokovi za trgovinsko skladnost, ki jih lahko izvaja vaša ekipa',
      ],
      pricebandText: '<b>Obseg je prilagojen vašemu izdelku, trgom in dobavni verigi.</b> Povejte nam, kam pošiljate, in opredelili bomo kvalifikacijo s fiksno ponudbo.',
      pricebandBtn: 'Zahtevajte ponudbo',
    },
    faq: {
      h2: 'Pogosto zastavljena vprašanja',
      // TODO(sl-review): FAQ machine-translated (docx FAQ was contaminated with Contracts-page content)
      items: [
        { q: 'Kaj natanko pomeni »dvojna raba«?', a: 'V regulativnem smislu se dvojna raba nanaša na blago, programsko opremo in tehnologijo, zasnovano za legitimne civilne namene, ki pa ima lahko tudi vojaške, varnostne, nadzorne ali druge občutljive uporabe. Ni zajeto vse, kar omogoča obe rabi — okvir cilja na predmete posebnega strateškega pomena, kot so tehnologije, povezane s širjenjem orožja ali napredno industrijsko zmogljivostjo. Danes sega prek fizičnih predmetov na programsko opremo, tehnologijo za njihov razvoj ali uporabo ter v nekaterih primerih tudi na znanje in izkušnje (know-how), tehnično pomoč in testne podatke.' },
        { q: 'Nismo obrambno podjetje — ali to še vedno velja za nas?', a: 'Da. Regulativni položaj ni odvisen od tega, ali se opredeljujete kot obrambno podjetje. Če vaš izdelek, njegova programska oprema, izhodiščna tehnologija ali povezani tehnični podatki spadajo v obseg dvojne rabe, lahko pred prodajo ali prenosom prek meja veljajo zahteve po odobritvi. To vse bolj zadeva programska podjetja, napredne proizvajalce, razvijalce umetne inteligence in raziskovalno intenzivne podvige.' },
        { q: 'Kako je dvojna raba urejena?', a: 'Prek večstranskih dogovorov o nadzoru izvoza ob nacionalni in regionalni zakonodaji. Za podjetja v EU ali iz nje je osrednji instrument Uredba (EU) 2021/821 — ki določa temeljne opredelitve, okvir nadzora in strukturo seznamov nadzorovanih predmetov. Seznami se občasno posodabljajo, zato je treba spremljati spremembe; pot licenciranja je odvisna od predmeta, destinacije in tega, ali se upravlja na ravni Unije ali države članice.' },
        { q: 'Ali zadošča preveriti nadzorne sezname?', a: 'Ne. Ustrezna ocena upošteva tudi dejanske zmogljivosti in specifikacije izdelka, stranko, ciljno državo, končnega uporabnika in predvideno končno uporabo — ter ali se poleg tega dobavljata programska oprema ali tehnična podpora. Skladnost pri dvojni rabi je stalen proces razvrščanja, ocenjevanja in odločitev na podlagi tveganja, ne enkraten pregled.' },
        { q: 'Kako vem, ali je moja tehnologija pod nadzorom?', a: 'Vaš izdelek in tehnologijo razvrstimo glede na veljavne nadzorne sezname ter ocenimo kontekstualne dejavnike — zmogljivosti, nasprotne stranke, destinacijo in končno uporabo — da ugotovimo, kako je obravnavan in kaj to pomeni za vašo prodajo.' },
        { q: 'Zakaj preverjati nasprotne stranke in destinacije?', a: 'Sankcije in trgovinske omejitve lahko prepovejo določene stranke, partnerje ali trge — sankcije pa pogosto delujejo skupaj z nadzorom dvojne rabe. Preverjanje prepreči drago trenje v pozni fazi.' },
        { q: 'Ali pomagate pridobiti licence?', a: 'Pripravimo vas na licenciranje in povezano sodelovanje z regulatornimi organi, tako da je odobritev pripravljena, ko jo potrebujete.' },
        { q: 'Kam to sodi v vaši obrambni praksi?', a: 'To je prvi od treh korakov: najprej kvalifikacija, nato pregled investicijske pripravljenosti, nato celovit okvir skladnosti.' },
      ],
    },
    form: {
      eye: '// kako začeti',
      h: 'Pošljite povpraševanje.',
      // TODO(sl-review): form lead machine-translated (docx form was contaminated)
      lead: 'Povejte nam o svojem izdelku, tehnologiji in ciljnih trgih — razvrstitev, preverjanje sankcij ali celoten delovni tok za trgovinsko skladnost. Pregledali bomo in vam sporočili naslednje korake, praviloma še isti dan.',
      contactPrefix: 'Ljubljana, Slovenija · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      projLabel: 'Ime podjetja in spletna stran',
      linkLabel: 'Izdelek, tehnologija in ciljni trgi (ali kratek opis)',
      choiceLabel: 'Potrebujem pomoč pri',
      chips: ['Kvalifikacija izdelka', 'Preverjanje nasprotne stranke', 'Pridobitev odobritve'],
      submit: 'Oddajte povpraševanje',
    },
    cross: {
      // TODO(sl-review): cross heading machine-translated
      h2: 'Naslednji koraki v obrambni praksi',
      items: [
        { h4: 'Pregled investicijske pripravljenosti', p: 'Korak 2 · Regulativna pripravljenost in ocena, usmerjena k investitorjem.' },
        { h4: 'Okviri skladnosti', p: 'Korak 3 · Interni programi, upravljanje in kontrole.' },
      ],
    },
  },
}

export default c
