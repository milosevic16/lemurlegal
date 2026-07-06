import type { Bilingual, PageMeta } from '../types'

interface Cov { title: string; lines: string[] }
interface Faq { q: string; a: string }
interface Step { num: string; h3: string; p: string }
interface Why { n: string; h3: string; p: string }
interface Cross { h4: string; p: string }

export interface RegulatoryComplianceContent {
  meta: PageMeta
  hero: { kicker: string; h1Prefix: string; h1Em: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  why: { eyebrow: string; h2: string; items: [Why, Why, Why] }
  how: { eyebrow: string; h2: string; steps: [Step, Step, Step] }
  includes: { eyebrow: string; h2: string; cov: Cov[]; travH3: string; travP: string }
  expert: { eyebrow: string; name: string; role: string; bio: string; linkedinAria: string }
  faq: { eyebrow: string; h2: string; items: Faq[] }
  quote: { text: string; btn: string }
  form: {
    eyebrow: string; h: string; lead: string; contactPrefix: string
    nameLabel: string; emailLabel: string; companyLabel: string; needLabel: string
    choiceLabel: string; chips: [string, string, string]; submit: string; submitWait: string
  }
  cross: { eyebrow: string; items: [Cross, Cross] }
}

const c: Bilingual<RegulatoryComplianceContent> = {
  en: {
    meta: {
      title: 'Regulatory Compliance — Lemur Legal',
      description:
        'Your outsourced compliance function — we act as your external compliance officer across PSD2, MiFID II, EBA guidelines, MiCA and EU AML.',
    },
    hero: {
      kicker: 'Regulatory Compliance · Ljubljana',
      h1Prefix: 'Your outsourced',
      h1Em: 'compliance function.',
      lead: 'Most fintechs operate in heavily regulated territory. We act as your external compliance officer — keeping your policies, processes and filings in line with PSD2, MiFID II, EBA guidelines, MiCA and EU AML rules as they evolve.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'External compliance officer · Gap analysis · Regulator liaison',
    },
    strip: {
      k: 'Why it matters',
      v: 'Most fintechs operate in territory governed by systemic legislation — PSD2, EBA guidelines and standards, MiFID II and EU AML rules. Regulatory non-compliance exposes your business to serious regulatory risk.',
    },
    why: {
      eyebrow: 'Why it matters',
      h2: "Compliance isn't a one-off — it's a function.",
      items: [
        { n: 'i.', h3: 'Heavily regulated', p: 'PSD2, MiFID II, EBA standards and AML rules govern most of what a fintech does.' },
        { n: 'ii.', h3: 'A required function', p: 'Regulated payment institutions must run a compliance function within their internal controls — we can be it.' },
        { n: 'iii.', h3: 'Rules keep moving', p: 'New legislation lands constantly. You need someone watching it — and a plan to implement it.' },
      ],
    },
    how: {
      eyebrow: 'How it works',
      h2: 'From gap analysis to an ongoing compliance function.',
      steps: [
        { num: '01', h3: 'Assess', p: 'We run a compliance gap analysis of your general terms, contracts and internal acts.' },
        { num: '02', h3: 'Document', p: 'We prepare the policies, risk assessments and legal opinions your compliance function needs.' },
        { num: '03', h3: 'Maintain', p: 'We monitor new legislation, liaise with the regulator and train your team — on an ongoing basis.' },
      ],
    },
    includes: {
      eyebrow: 'What the service includes',
      h2: 'Your external compliance officer, end to end.',
      cov: [
        { title: 'Documentation & policies', lines: ['Compliance policies', 'Risk assessments', 'Legal opinions'] },
        { title: 'Compliance gap analysis', lines: ['General terms', 'Contracts', 'Internal acts'] },
        { title: 'New-service support', lines: ['Applicable legislation review', 'Implementation guidelines', 'Opinions before launch'] },
        { title: 'Regulator liaison', lines: ['Communication with competent regulators', 'Filings & correspondence'] },
        { title: 'Horizon scanning', lines: ['Monitoring new legislation', 'Implementation plans'] },
        { title: 'Training', lines: ['Compliance workshops for your employees'] },
      ],
      travH3: 'The EU rulebook, covered',
      travP: 'We work across PSD2, MiFID II, EBA guidelines, MiCA and EU anti-money-laundering rules — and adapt your processes as each one changes.',
    },
    expert: {
      eyebrow: 'Who will run your compliance',
      name: 'Peter Merc, Ph.D.',
      role: 'Founder · fintech lawyer · Lemur Legal',
      bio: 'Peter worked in the banking sector in capital markets, compliance and bank supervision before founding Lemur Legal — so he knows the regulator\'s side of the table. He founded Blockchain Think Tank Slovenia in 2017 and lectures at the Law Faculty of New University in Ljubljana.',
      linkedinAria: 'Peter Merc on LinkedIn',
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Frequently asked questions',
      items: [
        { q: 'What does an external compliance officer do?', a: 'We run your compliance function — policies, risk assessments, gap analysis, regulator communication and ongoing monitoring — without you hiring in-house.' },
        { q: 'Which regulations do you cover?', a: 'PSD2, MiFID II, EBA guidelines and standards, MiCA and EU AML rules, among others.' },
        { q: 'Can you help us launch a new product?', a: 'Yes — we review the applicable legislation, set implementation guidelines and provide opinions before you go live.' },
        { q: 'Do you deal with the regulator directly?', a: 'Yes — we handle communication, filings and correspondence with the competent authorities.' },
        { q: 'How do you keep us up to date?', a: "We monitor new legislation and prepare an implementation plan so changes don't catch you out." },
        { q: 'Do you train our staff?', a: 'Yes — we run compliance workshops for your employees so the whole team understands its obligations.' },
      ],
    },
    quote: {
      text: '<b>Need a compliance function without the headcount?</b> Tell us about your business and we\'ll scope an engagement.',
      btn: 'Book a consultation',
    },
    form: {
      eyebrow: 'Get started',
      h: 'Send your inquiry.',
      lead: "Tell us about your business and where you need compliance support. We'll review it and come back with next steps — usually the same day.",
      contactPrefix: 'Ljubljana, Slovenia · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      companyLabel: 'Company & website',
      needLabel: 'What do you need?',
      choiceLabel: 'I need help with',
      chips: ['External compliance officer', 'Gap analysis', 'New service review'],
      submit: 'Submit inquiry',
      submitWait: 'Please wait...',
    },
    cross: {
      eyebrow: 'Also from Lemur Legal',
      items: [
        { h4: 'Crypto Legal Opinion', p: 'The legal opinion that gets your token listed — classified and accepted.' },
        { h4: 'MiCA White Paper', p: 'Compliant white papers, drafted and filed with the competent authority.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'Regulativna skladnost — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Vaša zunanja funkcija skladnosti — delujemo kot vaš pooblaščenec za skladnost na področjih PSD2, MiFID II, smernic EBA, MiCA in EU pravil AML.',
    },
    hero: {
      kicker: 'Regulativna skladnost · Ljubljana',
      h1Prefix: 'Vaš zunanji pooblaščenec',
      h1Em: 'za skladnost poslovanja.',
      lead: 'Večina fintech podjetij deluje na močno reguliranem področju. Delujemo kot vaš zunanji pooblaščenec za skladnost – vaše politike, procese in poročila usklajujemo s pravili PSD2, MiFID II, smernicami EBA, MiCA in EU pravili na področju preprečevanja pranja denarja (AML), ko se ta spreminjajo.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje',
      meta: 'Zunanji pooblaščenec za skladnost · Gap analiza · Sodelovanje z regulatorji',
    },
    strip: {
      k: 'Zakaj je to pomembno',
      // TODO(sl-review): strip text machine-translated (not verbatim in docx)
      v: 'Večina fintech podjetij deluje na področju, ki ga urejajo sistemski predpisi — PSD2, smernice in standardi EBA, MiFID II ter EU pravila AML. Neskladnost s predpisi vaše podjetje izpostavlja resnemu regulativnemu tveganju.',
    },
    why: {
      eyebrow: 'Zakaj je to pomembno',
      h2: 'Skladnost ni enkraten dogodek – je trajna funkcija.',
      items: [
        { n: 'i.', h3: 'Močno regulirano', p: 'PSD2, MiFID II, EBA standardi in AML pravila urejajo večino tega, kar počnejo fintech podjetja.' },
        { n: 'ii.', h3: 'Obvezna funkcija', p: 'Regulirane plačilne institucije morajo izvajati funkcijo skladnosti v svojih notranjih kontrolah – mi poskrbimo za to.' },
        { n: 'iii.', h3: 'Pravila se nenehno spreminjajo', p: 'Nova zakonodaja prihaja neprestano. Potrebujete nekoga, ki jo spremlja, in načrt, kako jo implementirati.' },
      ],
    },
    how: {
      eyebrow: 'Kako deluje',
      h2: 'Od gap analize do trajne funkcije skladnosti.',
      steps: [
        { num: '01', h3: 'Ocena', p: 'Izvedemo gap analizo skladnosti vaših splošnih pogojev, pogodb in notranjih aktov.' },
        { num: '02', h3: 'Dokumentacija', p: 'Pripravimo politike, ocene tveganja in pravna mnenja, ki jih potrebuje vaša služba za skladnost.' },
        { num: '03', h3: 'Vzdrževanje', p: 'Nenehno spremljamo novo zakonodajo, komuniciramo z regulatorjem in redno izobražujemo vašo ekipo.' },
      ],
    },
    includes: {
      eyebrow: 'Kaj storitev vključuje',
      h2: 'Vaš zunanji pooblaščenec za skladnost, od začetka do konca.',
      cov: [
        { title: 'Dokumentacija in politike', lines: ['Politike skladnosti', 'Ocene tveganja', 'Pravna mnenja'] },
        { title: 'Gap analiza skladnosti', lines: ['Splošni pogoji', 'Pogodbe', 'Notranji akti'] },
        { title: 'Podpora pri novih storitvah', lines: ['Pregled veljavne zakonodaje', 'Izvedbene smernice', 'Mnenja pred lansiranjem'] },
        { title: 'Sodelovanje z regulatorji', lines: ['Komunikacija z nacionalnimi in EU regulatorji', 'Vodenje vlog in korespondence'] },
        { title: 'Spremljanje zakonodajnih napovedi', lines: ['Spremljanje nove zakonodaje', 'Načrti izvedbe'] },
        { title: 'Izobraževanje', lines: ['Delavnice o skladnosti poslovanja za vaše zaposlene'] },
      ],
      travH3: 'Celoten pravni okvir EU, pokrit',
      travP: 'Delujemo na področjih PSD2, MiFID II, EBA smernic, MiCA in EU pravil o preprečevanju pranja denarja – ter prilagajamo vaše procese ob vsaki spremembi teh pravil.',
    },
    expert: {
      eyebrow: 'Kdo bo vodil vašo skladnost',
      name: 'dr. Peter Merc',
      role: 'Ustanovitelj · pravnik za finančno tehnologijo · Lemur Legal',
      bio: 'Peter je pred ustanovitvijo Lemur Legal delal v bančnem sektorju na področju skladnosti kapitalskih trgov in bančnega nadzora – zato pozna tudi regulatorno stran. Leta 2017 je soustanovil Blockchain Think Tank Slovenija in predava na Pravni fakulteti Nove univerze v Ljubljani.',
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    faq: {
      eyebrow: 'FAQ',
      h2: 'Pogosto zastavljena vprašanja',
      items: [
        { q: 'Kaj počne zunanji pooblaščenec za skladnost?', a: 'Vodimo vašo funkcijo skladnosti — politike, ocene tveganj, gap analize, komunikacijo z regulatorjem in stalni nadzor — brez potrebe po zaposlovanju lastnega kadra.' },
        { q: 'Katere predpise pokrivate?', a: 'PSD2, MiFID II, smernice in standardi EBA, MiCA in EU pravila za preprečevanje pranja denarja (AML) in drugo.' },
        { q: 'Ali nam lahko pomagate lansirati nov produkt?', a: 'Da — pregledamo veljavno zakonodajo, določimo izvedbene smernice in podamo mnenja, preden začnete poslovati.' },
        { q: 'Ali z regulatorjem komunicirate neposredno?', a: 'Da — prevzamemo komunikacijo, vlaganje dokumentov in korespondenco s pristojnimi organi.' },
        { q: 'Kako nas obveščate o novostih?', a: 'Spremljamo novo zakonodajo in pripravljamo načrte za izvedbo, da vas spremembe ne presenetijo.' },
        { q: 'Ali izobražujete naše zaposlene?', a: 'Da — izvajamo delavnice o skladnosti poslovanja za vaše zaposlene, da celotna ekipa razume svoje obveznosti.' },
      ],
    },
    quote: {
      // TODO(sl-review): from docx GET STARTED line
      text: '<b>Potrebujete funkcijo skladnosti brez dodatnih zaposlenih?</b> Povejte nam več o svojem podjetju in opredelili bomo obseg sodelovanja.',
      btn: 'Rezervirajte posvet',
    },
    form: {
      eyebrow: 'Kako začeti',
      h: 'Pošljite povpraševanje.',
      // TODO(sl-review): form lead machine-translated
      lead: 'Povejte nam več o svojem podjetju in kje potrebujete podporo pri skladnosti. Pregledali bomo in vam sporočili naslednje korake — praviloma še isti dan.',
      contactPrefix: 'Ljubljana, Slovenija · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      companyLabel: 'Podjetje in spletna stran',
      needLabel: 'Kaj potrebujete?',
      choiceLabel: 'Potrebujem pomoč pri',
      // TODO(sl-review): chips machine-translated
      chips: ['Zunanji pooblaščenec za skladnost', 'Gap analiza', 'Pregled nove storitve'],
      submit: 'Oddajte povpraševanje',
      submitWait: 'Prosimo, počakajte...',
    },
    cross: {
      eyebrow: 'Tudi v ponudbi Lemur Legal',
      items: [
        { h4: 'Pravno mnenje s področja kripta', p: 'Pravno mnenje, ki zagotovi uvrstitev vašega žetona — razvrščeno in sprejeto.' },
        { h4: 'Beli papir MiCA', p: 'Skladne bele knjige, pripravljene in vložene pri pristojnem organu.' },
      ],
    },
  },
}

export default c
