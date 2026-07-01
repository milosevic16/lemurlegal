import type { Bilingual, PageMeta } from '../types'

interface Why { wn: string; h3: string; p: string }
interface Step { stepK: string; title: string; sub: string; tag: string }
interface Cov { h4: string; rows: string[] }
interface Faq { q: string; a: string }
interface Cross { h4: string; p: string }

export interface IPProtectionContent {
  meta: PageMeta
  hero: { kicker: string; h1Glitch: string; h1Em: string; slogan: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  why: { h2: string; items: [Why, Why, Why] }
  how: { h2: string; steps: [Step, Step, Step] }
  coverage: { h2: string; items: Cov[]; calloutH3: string; calloutP: string }
  expert: { eyebrow: string; h2: string; name: string; role: string; bio: string }
  faq: { h2: string; items: Faq[] }
  ctaBand: { text: string; btn: string }
  form: {
    eye: string; h: string; lead: string; contactPrefix: string
    nameLabel: string; emailLabel: string; projLabel: string; linkLabel: string
    choiceLabel: string; chips: [string, string, string]; submit: string
  }
  cross: { h2: string; items: [Cross, Cross] }
}

const c: Bilingual<IPProtectionContent> = {
  en: {
    meta: {
      title: 'IP Protection — Lemur Legal',
      description:
        'Protect and defend your intellectual property. IPR strategy, trademark and design registration (EUIPO representative), copyright, contracts and licensing — from Lemur Legal.',
    },
    hero: {
      kicker: 'IP Protection · Ljubljana',
      h1Glitch: 'Your IP is an asset worth',
      h1Em: 'defending.',
      slogan: '// identify · protect · manage.',
      lead: 'Intellectual property is more than trademarks and designs — it is one of your <strong>most valuable assets</strong>. We help you identify your IP, decide what to protect and how, and put the strategy, registrations and contracts in place to manage and defend it.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'IPR strategy · Identification · Protection · Contracts & licensing',
    },
    strip: {
      k: 'Why it matters',
      v: 'As an IP rights holder you are constantly exposed to legal and business risks that need to be addressed. Protecting intellectual property means more than registration — it starts with identifying what you hold and choosing the right way to secure it.',
    },
    why: {
      h2: 'Protection that goes beyond registration.',
      items: [
        { wn: '01', h3: 'Strategy first', p: 'Protection starts with identifying what IP you hold and deciding what to secure, and how — by registration, by contract, or both.' },
        { wn: '02', h3: 'Registered representatives', p: 'We are on the official list of trademark and design representatives at the EUIPO (the European Union Intellectual Property Office), and file across the EU, nationally and worldwide.' },
        { wn: '03', h3: 'Owned & licensed on your terms', p: 'Contracts and licences keep your IP owned by the right entity and used by others only under the terms you set.' },
      ],
    },
    how: {
      h2: 'From identifying your IP to managing it as an asset.',
      steps: [
        { stepK: 'Step 01', title: 'Identify', sub: 'We map your intellectual property — what it is, what can be protected and how — and where the risks and opportunities lie.', tag: 'IP mapping' },
        { stepK: 'Step 02', title: 'Protect', sub: 'We secure it through the right mix of registration (trademarks, designs) and contractual protection.', tag: 'registration · contracts' },
        { stepK: 'Step 03', title: 'Manage', sub: 'We put the agreements and licences in place to manage, license and defend your IP as the business grows.', tag: 'licensing · defence' },
      ],
    },
    coverage: {
      h2: 'From IP strategy to registration, contracts and licensing.',
      items: [
        { h4: 'IPR strategy & identification', rows: ['Mapping your IP assets', 'What can be protected — and how', 'Ownership structuring', 'Portfolio strategy & management'] },
        { h4: 'Trademarks', rows: ['Prepare & file applications (national, EU, worldwide)', 'Opposition proceedings', 'Deadline & use monitoring', 'Renewals & portfolio management'] },
        { h4: 'Designs', rows: ['Prepare & file applications (national, EU, worldwide)', 'Assignment agreements', 'Deadline monitoring', 'Renewals'] },
        { h4: 'Copyright & know-how', rows: ['Authorship & ownership', 'Assignment agreements', 'Trade-secret & know-how protection', 'Infringement notices & cease-and-desist'] },
        { h4: 'IPR contracts', rows: ['IP assignment agreements', 'Employee & contractor IP clauses', 'NDAs', 'R&D & collaboration IP terms', 'IP in financing & M&A'] },
        { h4: 'Licensing', rows: ['Licence agreements — use without transferring ownership', 'Scope, territory & field of use', 'Royalties & reporting', 'Term, termination & enforcement'] },
      ],
      calloutH3: 'Registered IP representative',
      calloutP: 'Lemur Legal is listed as a representative for trademarks and designs at the EUIPO — so we can prepare and file your rights directly, as part of a wider IP strategy.',
    },
    expert: {
      eyebrow: 'Founder · EUIPO trademark & design representative · Lemur Legal',
      h2: "Who you'll work with",
      name: 'Peter Merc, Ph.D.',
      role: '// strategy · registration · licensing',
      bio: 'Peter and the Lemur Legal team help technology companies build and defend their IP — from identifying and structuring rights, through registration, to the contracts and licences that turn intellectual property into a <strong>managed, revenue-generating asset</strong>.',
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        { q: 'What exactly counts as intellectual property?', a: 'More than trademarks and designs: it includes your brand, product designs, copyright works, software, databases, know-how and trade secrets, and the inventions behind your technology. The first step is identifying what you hold.' },
        { q: 'How do I decide what to protect — and how?', a: 'We assess each asset and recommend the right route: registration (trademarks, designs), contractual protection, or a combination. Not everything is best protected by registration.' },
        { q: 'Can you protect IP through contracts, not just registration?', a: 'Yes — through IP assignment clauses, employee and contractor terms, NDAs, and R&D and collaboration agreements. Contracts are often where ownership is won or lost.' },
        { q: 'What is the difference between assigning and licensing IP?', a: 'An assignment transfers ownership; a licence grants only the right to use your solution, on terms you define, while you keep ownership. We prepare both.' },
        { q: 'What if someone opposes my trademark — or infringes it?', a: 'We handle opposition proceedings — both defending your application and challenging conflicting marks — and we monitor databases so conflicts are caught early.' },
        { q: 'Are you authorised to file?', a: 'Yes — Lemur Legal is on the official list of trademark and design representatives at the EUIPO.' },
      ],
    },
    ctaBand: {
      text: "<b>Have intellectual property worth protecting?</b> Tell us what you're building and we'll map your IP strategy and the next steps.",
      btn: 'Book a consultation',
    },
    form: {
      eye: '// send your inquiry',
      h: 'Send your inquiry.',
      lead: "Tell us about your company and what you need. We'll review it and come back with next steps — usually the same day.",
      contactPrefix: 'Ljubljana, Slovenia · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      projLabel: 'Company & website',
      linkLabel: 'What do you need?',
      choiceLabel: 'I need help with',
      chips: ['Trademark', 'Design', 'Copyright'],
      submit: 'Submit inquiry',
    },
    cross: {
      h2: 'Also from Lemur Legal',
      items: [
        { h4: 'Incorporation & ESOP', p: 'Set up your company and incentivise your team.' },
        { h4: 'Contracts & Commercial', p: 'The contracts that protect your business.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'Zaščita intelektualne lastnine — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Zaščitite in branite svojo intelektualno lastnino. Strategija IP, registracija blagovnih znamk in modelov (zastopnik pri EUIPO), avtorske pravice, pogodbe in licenciranje — Lemur Legal.',
    },
    hero: {
      // TODO(sl-review): kicker machine-translated
      kicker: 'Zaščita intelektualne lastnine · Ljubljana',
      // TODO(sl-review): H1 split adapted to keep the em-word last
      h1Glitch: 'Vaša intelektualna lastnina je sredstvo, ki ga je vredno',
      h1Em: 'braniti.',
      // TODO(sl-review): slogan machine-translated
      slogan: '// prepoznaj · zaščiti · upravljaj.',
      lead: 'Intelektualna lastnina je več kot le blagovne znamke in modeli — je eno vaših <strong>najdragocenejših sredstev</strong>. Pomagamo vam prepoznati vašo intelektualno lastnino, se odločiti, kaj in kako zaščititi, ter vzpostaviti strategijo, registracije in pogodbe za njeno upravljanje in obrambo.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje',
      // TODO(sl-review): hero meta machine-translated
      meta: 'Strategija IP · Prepoznavanje · Zaščita · Pogodbe in licenciranje',
    },
    strip: {
      k: 'Zakaj je to pomembno',
      v: 'Kot imetnik pravic intelektualne lastnine ste nenehno izpostavljeni pravnim in poslovnim tveganjem, ki jih je treba nasloviti. Zaščita intelektualne lastnine pomeni več kot le registracijo — začne se s prepoznavanjem tega, kar imate, in izbiro pravega načina za njeno varovanje.',
    },
    why: {
      h2: 'Zaščita, ki presega zgolj registracijo.',
      items: [
        { wn: '01', h3: 'Strategija na prvem mestu', p: 'Zaščita se začne s prepoznavanjem tega, kar imate, in odločitvijo, kaj in kako zavarovati — z registracijo, s pogodbo ali obojim.' },
        { wn: '02', h3: 'Registrirani zastopniki', p: 'Smo na uradnem seznamu zastopnikov za blagovne znamke in modele pri EUIPO (Uradu Evropske unije za intelektualno lastnino) ter vlagamo prijave po vsej EU, na nacionalni in svetovni ravni.' },
        { wn: '03', h3: 'Lastništvo in licenciranje pod vašimi pogoji', p: 'Pogodbe in licence ohranjajo vašo intelektualno lastnino v lasti pravega pravnega subjekta, drugi pa jo lahko uporabljajo le pod pogoji, ki jih določite sami.' },
      ],
    },
    how: {
      h2: 'Od identifikacije vaše intelektualne lastnine do njenega upravljanja kot sredstva.',
      steps: [
        { stepK: 'Korak 01', title: 'Identifikacija', sub: 'Popišemo vašo intelektualno lastnino — kaj je, kaj je mogoče zaščititi in kako — ter kje se skrivajo tveganja in priložnosti.', tag: 'popis intelektualne lastnine' },
        { stepK: 'Korak 02', title: 'Zaščita', sub: 'Zaščitimo jo s pravo kombinacijo registracij (blagovne znamke, modeli) in pogodbenih določil.', tag: 'registracija · pogodbe' },
        { stepK: 'Korak 03', title: 'Upravljanje', sub: 'Vzpostavimo pogodbe in licence za upravljanje, licenciranje in obrambo vaše intelektualne lastnine, ko podjetje raste.', tag: 'licenciranje · obramba' },
      ],
    },
    coverage: {
      h2: 'Od strategije intelektualne lastnine do registracije, pogodb in licenciranja.',
      // TODO(sl-review): coverage row detail translated from current EN (docx abbreviated)
      items: [
        { h4: 'Strategija in prepoznavanje pravic IL', rows: ['Popis vaših sredstev intelektualne lastnine', 'Kaj je mogoče zaščititi — in kako', 'Strukturiranje lastništva', 'Strategija in upravljanje portfelja'] },
        { h4: 'Blagovne znamke', rows: ['Priprava in vložitev prijav (nacionalno, EU, svetovno)', 'Postopki z ugovori', 'Spremljanje rokov in uporabe', 'Podaljšanja in upravljanje portfelja'] },
        { h4: 'Modeli', rows: ['Priprava in vložitev prijav (nacionalno, EU, svetovno)', 'Pogodbe o prenosu pravic', 'Spremljanje rokov', 'Podaljšanja'] },
        { h4: 'Avtorske pravice in know-how', rows: ['Avtorstvo in lastništvo', 'Pogodbe o prenosu pravic', 'Zaščita poslovnih skrivnosti in know-howa', 'Obvestila o kršitvah in opomini za prenehanje'] },
        { h4: 'Pogodbe s področja IL', rows: ['Pogodbe o prenosu pravic intelektualne lastnine', 'Klavzule o intelektualni lastnini za zaposlene in izvajalce', 'Pogodbe o nerazkritju podatkov (NDA)', 'Določila o IL pri razvoju (R&R) in sodelovanju', 'Intelektualna lastnina pri financiranju in prevzemih (M&A)'] },
        { h4: 'Licenciranje', rows: ['Licenčne pogodbe — uporaba brez prenosa lastništva', 'Obseg, ozemlje in področje uporabe', 'Licenčnine in poročanje', 'Trajanje, odpoved in uveljavljanje'] },
      ],
      calloutH3: 'Registrirani zastopnik za intelektualno lastnino',
      calloutP: 'Lemur Legal je vpisan kot zastopnik za blagovne znamke in modele pri EUIPO — tako lahko vaše pravice pripravimo in vložimo neposredno, kot del širše strategije intelektualne lastnine.',
    },
    expert: {
      // TODO(sl-review): eyebrow adapted from current EN (docx differs)
      eyebrow: 'Ustanovitelj · zastopnik za znamke in modele pri EUIPO · Lemur Legal',
      h2: 'S kom boste sodelovali',
      name: 'dr. Peter Merc',
      // TODO(sl-review): role line machine-translated
      role: '// strategija · registracija · licenciranje',
      bio: 'Peter in ekipa Lemur Legal tehnološkim podjetjem pomagata graditi in braniti njihovo intelektualno lastnino — od prepoznavanja in strukturiranja pravic prek registracij do pogodb in licenc, ki intelektualno lastnino spremenijo v <strong>upravljano sredstvo, ki ustvarja prihodek</strong>.',
    },
    faq: {
      h2: 'Pogosto zastavljena vprašanja',
      items: [
        { q: 'Kaj natanko šteje kot intelektualna lastnina?', a: 'Več kot le blagovne znamke in modeli: vključuje vašo blagovno znamko, oblikovanje izdelkov, avtorska dela, programsko opremo, podatkovne baze, know-how in poslovne skrivnosti ter izume za vašo tehnologijo. Prvi korak je prepoznavanje tega, kar imate.' },
        { q: 'Kako se odločiti, kaj zaščititi — in na kakšen način?', a: 'Ocenimo vsako sredstvo in priporočimo pravo pot: registracijo (blagovne znamke, modeli), pogodbeno zaščito ali kombinacijo obojega. Ni vse najbolje zaščiteno z registracijo.' },
        { q: 'Ali lahko intelektualno lastnino zaščitimo s pogodbami in ne le z registracijo?', a: 'Da — s klavzulami o prenosu pravic intelektualne lastnine, določili za zaposlene in izvajalce, pogodbami o nerazkritju (NDA) ter pogodbami o razvoju in sodelovanju. Prav v pogodbah se lastništvo pogosto pridobi ali izgubi.' },
        { q: 'Kakšna je razlika med prenosom in licenciranjem intelektualne lastnine?', a: 'S prenosom se prenese lastništvo; licenca podeli le pravico do uporabe vaše rešitve pod pogoji, ki jih določite, lastništvo pa ostane vaše. Pripravljamo oboje.' },
        { q: 'Kaj storiti, če kdo ugovarja moji blagovni znamki — ali jo krši?', a: 'Vodimo postopke z ugovori — tako pri obrambi vaše prijave kot pri izpodbijanju nasprotujočih si znamk — in spremljamo podatkovne baze, da so spori zaznani zgodaj.' },
        { q: 'Ali ste pooblaščeni za vlaganje zahtevkov?', a: 'Da — Lemur Legal je na uradnem seznamu zastopnikov za blagovne znamke in modele pri EUIPO.' },
      ],
    },
    ctaBand: {
      // TODO(sl-review): CTA band adapted from current EN
      text: '<b>Imate intelektualno lastnino, ki jo je vredno zaščititi?</b> Povejte nam, kaj gradite, in začrtali bomo vašo strategijo intelektualne lastnine ter naslednje korake.',
      btn: 'Rezervirajte posvet',
    },
    form: {
      eye: '// pošljite povpraševanje',
      h: 'Pošljite povpraševanje.',
      // TODO(sl-review): form lead machine-translated
      lead: 'Povejte nam o svojem podjetju in kaj potrebujete. Pregledali bomo in vam sporočili naslednje korake — praviloma še isti dan.',
      contactPrefix: 'Ljubljana, Slovenija · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      projLabel: 'Podjetje in spletna stran',
      linkLabel: 'Kaj potrebujete?',
      choiceLabel: 'Potrebujem pomoč pri',
      chips: ['Blagovna znamka', 'Model', 'Avtorske pravice'],
      submit: 'Oddajte povpraševanje',
    },
    cross: {
      h2: 'Tudi v ponudbi Lemur Legal',
      items: [
        { h4: 'Ustanovitev podjetja in ESOP', p: 'Ustanovite svoje podjetje in nagradite ekipo.' },
        { h4: 'Pogodbe in gospodarsko pravo', p: 'Pogodbe, ki ščitijo vaše poslovanje.' },
      ],
    },
  },
}

export default c
