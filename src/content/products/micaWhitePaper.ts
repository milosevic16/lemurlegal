import type { Bilingual, PageMeta } from '../types'

interface Why { wn: string; h3: string; p: string }
interface Step { stepK: string; title: string; sub: string; tag: string }
interface Cov { h4: string; rows: string[] }
interface Faq { q: string; a: string }
interface Quote { p: string; by: string }
interface Cross { h4: string; p: string }

export interface MiCAWhitePaperContent {
  meta: PageMeta
  hero: { kicker: string; h1Glitch: string; h1Em: string; slogan: string; lead: string; btnPrimary: string; btnGhost: string; meta: string }
  strip: { k: string; v: string }
  who: { h2: string; items: [Why, Why, Why] }
  how: { h2: string; steps: [Step, Step, Step] }
  coverage: { h2: string; intro: string; items: Cov[]; travelH3: string; travelP: string }
  expert: { eyebrow: string; h2: string; name: string; role: string; bio1: string; bio2: string; linkedinAria: string }
  testimonials: { h2: string; quotes: Quote[] }
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

const MICA_QUOTES_EN: Quote[] = [
  { p: 'We provided the core project documentation, and Lemur Legal took care of everything else—from drafting the MiCA white paper to managing the submission to the competent authority. Our white paper is now published in the ESMA register. A truly turnkey service, exactly as promised.', by: 'Madani Boukalba · Founder & CEO, CarbonZero Corporation ($RIZE token)' },
  { p: 'We knew that achieving MiCA compliance would be a significant regulatory challenge for our project. Peter and the team at Lemur Legal made the entire process clear and manageable. Thanks to their support, our project is now fully MiCA-compliant.', by: 'Simone Romano · Developer Manager, IoTeX Ltd. ($IOTX token)' },
  { p: 'The Lemur Legal team prepared our MiCA white paper with great attention to detail and a strong understanding of our project. They managed the process efficiently and kept us informed throughout every stage.', by: 'Lilia Severina · Head of Markets, ADI DLT Foundation ($ADI token)' },
  { p: 'Working with Lemur Legal was straightforward and efficient. They quickly understood our business model, identified the relevant MiCA requirements and prepared the documentation in a clear and professional manner.', by: 'Miguel Coutinho · Head of Operations, Relentless Security Limited ($IMU token)' },
]
// TODO(sl-review): client testimonials machine-translated (docx provided EN only)
const MICA_QUOTES_SL: Quote[] = [
  { p: 'Priskrbeli smo osnovno projektno dokumentacijo, za vse ostalo pa je poskrbel Lemur Legal — od priprave belega papirja MiCA do vodenja vloge pri pristojnem organu. Naš beli papir je zdaj objavljen v registru ESMA. Resnično celovita storitev, točno kot obljubljeno.', by: 'Madani Boukalba · ustanovitelj in izvršni direktor, CarbonZero Corporation ($RIZE token)' },
  { p: 'Vedeli smo, da bo doseganje skladnosti z MiCA za naš projekt velik regulativni izziv. Peter in ekipa Lemur Legal so celoten postopek naredili jasen in obvladljiv. Zahvaljujoč njihovi podpori je naš projekt zdaj popolnoma skladen z MiCA.', by: 'Simone Romano · vodja razvoja, IoTeX Ltd. ($IOTX token)' },
  { p: 'Ekipa Lemur Legal je naš beli papir MiCA pripravila z veliko pozornostjo do podrobnosti in dobrim razumevanjem našega projekta. Postopek so vodili učinkovito in nas obveščali na vsaki stopnji.', by: 'Lilia Severina · vodja trgov, ADI DLT Foundation ($ADI token)' },
  { p: 'Sodelovanje z Lemur Legal je bilo enostavno in učinkovito. Hitro so razumeli naš poslovni model, prepoznali ustrezne zahteve MiCA in pripravili dokumentacijo na jasen in strokoven način.', by: 'Miguel Coutinho · vodja operacij, Relentless Security Limited ($IMU token)' },
]

const c: Bilingual<MiCAWhitePaperContent> = {
  en: {
    meta: {
      title: 'MiCA White Paper — Lemur Legal',
      description:
        'A MiCA-compliant white paper, drafted and filed. Every token issuer targeting EU investors needs a MiCA white paper and legal documentation — Lemur Legal handles drafting through to regulator filing.',
    },
    hero: {
      kicker: 'MiCA White Paper · Ljubljana',
      h1Glitch: 'Your MiCA-compliant white paper,',
      h1Em: 'drafted and filed.',
      slogan: '// drafting · legal opinion · regulator filing.',
      lead: 'Every token issuer targeting EU investors — directly or through centralized exchanges — needs a <strong>MiCA-compliant white paper</strong> and accompanying legal documentation. We handle everything: from drafting the documents to submitting them to the competent authority.',
      btnPrimary: 'Send your inquiry',
      btnGhost: 'How it works',
      meta: 'Fixed fee · Drafted, opinion & filed with the competent authority',
    },
    strip: {
      k: 'What is MiCA',
      v: "The EU's Markets in Crypto-Assets Regulation sets the framework for crypto-asset service providers — with extraterritorial reach that binds anyone operating in the EU market, wherever they are based.",
    },
    who: {
      h2: 'If you offer a token in the EU, you need a white paper.',
      items: [
        { wn: '01', h3: 'Offering to EU investors', p: 'Any issuer offering tokens to EU investors — directly or through CEXes — needs a MiCA-compliant white paper.' },
        { wn: '02', h3: 'Based anywhere', p: "MiCA's extraterritorial effect binds providers operating in the EU market, even when based outside the EU." },
        { wn: '03', h3: 'Filed, not just written', p: 'The white paper, marketing communications and notifications must be submitted to the competent authority.' },
      ],
    },
    how: {
      h2: 'From tokenomics to a filed white paper.',
      steps: [
        { stepK: 'Step 01', title: 'Structure & tokenomics', sub: 'We advise on the legal infrastructure of the issuance and on the economics of the token, so your offering is compliant from the start.', tag: 'compliant from the start' },
        { stepK: 'Step 02', title: 'Draft', sub: 'We draft the white paper, the marketing communications and a legal opinion on the legal nature of your crypto token.', tag: 'white paper · opinion' },
        { stepK: 'Step 03', title: 'File', sub: 'We draft and submit the notifications to the regulator and support you through the entire process before the competent authority.', tag: 'filed with the authority' },
      ],
    },
    coverage: {
      h2: 'Whatever your role under MiCA, we cover the documentation and the process.',
      intro: 'Six engagements, one firm — from issuing utility tokens to running an exchange.',
      items: [
        { h4: 'Issuing utility tokens', rows: ['Legal infrastructure of the issuance process', "Advice on the token's economics (tokenomics)", 'White paper & marketing communications', "Legal opinion on the token's legal nature", 'Notifications to the regulator'] },
        { h4: 'MiCA compliance check', rows: ['White paper content, publications & notifications', 'Marketing communications', "Custody of clients' crypto or fiat funds", 'Processes for amending white papers'] },
        { h4: 'E-money & asset-referenced tokens', rows: ['White paper drafting', 'Marketing communications', 'Preparation of the application to the regulator', 'Legal opinions'] },
        { h4: 'Custody & asset management', rows: ['Client agreements', 'Internal policies (custody, control, access)', 'Support in the registration process', 'Client notification, return & segregation of funds'] },
        { h4: 'Crypto-asset trading providers', rows: ['Client documentation (general terms)', 'Admission of crypto assets to trading', 'Customer due diligence', 'Proprietary trading, disclosure & settlement'] },
        { h4: 'Exchange providers', rows: ['Trading & client acceptance policy', 'Fixing the exchange price', 'Execution of orders', 'Publication of information'] },
      ],
      travelH3: 'Travel rule',
      travelP: 'Under EU regulation, crypto-asset service providers must share information about the originators and beneficiaries of every transfer. We advise clients on full compliance with the "travel rule."',
    },
    expert: {
      eyebrow: 'Founder · fintech lawyer · Lemur Legal',
      h2: 'Who will work on your white paper',
      name: 'Peter Merc, Ph.D.',
      role: '// 20+ token generation events advised',
      bio1: BIO1_EN,
      bio2: BIO2_EN,
      linkedinAria: 'Peter Merc on LinkedIn',
    },
    testimonials: {
      h2: 'Trusted by token issuers across the industry.',
      quotes: MICA_QUOTES_EN,
    },
    included: {
      h2: 'Everything your offering needs, in one engagement.',
      items: [
        'A MiCA-compliant white paper',
        'Marketing communications drafted to MiCA requirements',
        "A legal opinion on your token's legal nature",
        'Notifications drafted and filed with the competent authority',
      ],
      pricebandText: "<b>Pricing is scoped to your token and offering.</b> Tell us about your project and we'll send a fixed-fee proposal after a short review.",
      pricebandBtn: 'Request a proposal',
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        { q: 'Who needs a MiCA white paper?', a: "Every issuer offering tokens to EU investors, directly or through CEXes — even if based outside the EU, because of MiCA's extraterritorial reach." },
        { q: 'Do you file it with the regulator?', a: 'Yes — we draft and submit the notifications to the competent authority and support you throughout the process before the regulator.' },
        { q: 'What if my token is e-money or asset-referenced?', a: 'We support white papers and applications for e-money tokens (EMTs) and asset-referenced tokens (ARTs), including the process before the regulator.' },
        { q: 'How is pricing determined?', a: 'Pricing is scoped to your token and offering; we send a fixed-fee proposal after a short review.' },
        { q: 'Do you also advise on tokenomics?', a: "Yes — we advise on the token's economics and legal infrastructure so your offering is compliant from the start." },
        { q: "What's included in the engagement?", a: 'A MiCA-compliant white paper, marketing communications, a legal opinion on your token, and notifications filed with the competent authority.' },
      ],
    },
    form: {
      eye: '// get started',
      h: 'Send your inquiry.',
      lead: "Tell us about your project, token and target market. We'll review your documentation and come back with next steps — usually the same day.",
      contactPrefix: 'WhatsApp · ',
      nameLabel: 'Name and surname',
      emailLabel: 'Email',
      projLabel: 'Project name & website',
      linkLabel: 'Link to token info / draft white paper',
      choiceLabel: 'I need a white paper for',
      chips: ['Utility token', 'E-money / ART', 'Compliance check'],
      submit: 'Submit inquiry',
    },
    cross: {
      h2: 'Also from Lemur Legal',
      items: [
        { h4: 'Crypto Legal Opinion', p: 'Reasoned opinions required by exchanges and regulators before listing.' },
        { h4: 'Licensing & AML', p: 'CASP/VASP authorisation, registration and AML compliance.' },
      ],
    },
  },

  sl: {
    meta: {
      title: 'MiCA bela knjiga — Lemur Legal',
      // TODO(sl-review): meta description machine-translated
      description:
        'Bela knjiga, skladna z uredbo MiCA, pripravljena in vložena. Vsak izdajatelj žetonov, ki cilja na vlagatelje v EU, potrebuje belo knjigo MiCA in pravno dokumentacijo — Lemur Legal poskrbi za vse, od priprave do vložitve pri regulatorju.',
    },
    hero: {
      kicker: 'MiCA bela knjiga · Ljubljana',
      h1Glitch: 'Vaša bela knjiga, skladna z uredbo MiCA,',
      h1Em: 'pripravljena in vložena.',
      // TODO(sl-review): slogan machine-translated
      slogan: '// priprava · pravno mnenje · vložitev pri regulatorju.',
      lead: 'Vsak izdajatelj žetonov, ki cilja na vlagatelje v EU — neposredno ali prek centraliziranih borz — potrebuje <strong>belo knjigo, skladno z uredbo MiCA</strong>, in priloženo pravno dokumentacijo. Poskrbimo za vse: od priprave dokumentov do njihove predložitve pristojnemu organu.',
      btnPrimary: 'Pošljite povpraševanje',
      btnGhost: 'Kako deluje',
      // TODO(sl-review): hero meta machine-translated
      meta: 'Fiksna cena · Pripravljeno, mnenje in vloženo pri pristojnem organu',
    },
    strip: {
      // TODO(sl-review): "What is MiCA" label machine-translated
      k: 'Kaj je MiCA',
      v: 'Uredba EU o trgih kriptosredstev (MiCA) določa okvir za ponudnike storitev s kriptosredstvi — z ekstrateritorialnim učinkom, ki zavezuje vsakogar, ki posluje na trgu EU, ne glede na to, kje ima sedež.',
    },
    who: {
      h2: 'Če ponujate žeton v EU, potrebujete belo knjigo.',
      items: [
        { wn: '01', h3: 'Ponujanje vlagateljem v EU', p: 'Vsak izdajatelj, ki ponuja žetone vlagateljem v EU — neposredno ali prek centraliziranih borz — potrebuje belo knjigo, skladno z uredbo MiCA.' },
        { wn: '02', h3: 'Ne glede na kraj sedeža', p: 'Ekstrateritorialni učinek uredbe MiCA zavezuje ponudnike, ki poslujejo na trgu EU, tudi če imajo sedež zunaj EU.' },
        { wn: '03', h3: 'Vloženo, ne le napisano', p: 'Bela knjiga, marketinška obvestila in priglasitve morajo biti predloženi pristojnemu organu.' },
      ],
    },
    how: {
      h2: 'Od tokenomike do vložene bele knjige.',
      steps: [
        { stepK: 'Korak 01', title: 'Struktura in tokenomika', sub: 'Svetujemo vam glede pravne infrastrukture izdaje in ekonomije žetona, tako da je vaša ponudba skladna že od samega začetka.', tag: 'skladno že od začetka' },
        { stepK: 'Korak 02', title: 'Priprava osnutka', sub: 'Pripravimo belo knjigo, marketinška obvestila in pravno mnenje o pravni naravi vašega kripto žetona.', tag: 'bela knjiga · mnenje' },
        { stepK: 'Korak 03', title: 'Vložitev', sub: 'Pripravimo in oddamo obvestila regulatorju ter vam nudimo podporo skozi celoten postopek pred pristojnim organom.', tag: 'vloženo pri organu' },
      ],
    },
    coverage: {
      h2: 'Ne glede na vašo vlogo v okviru uredbe MiCA pokrivamo celotno dokumentacijo in postopek.',
      // TODO(sl-review): coverage intro machine-translated
      intro: 'Šest storitev, ena pisarna — od izdaje uporabniških žetonov do upravljanja borze.',
      items: [
        { h4: 'Izdajanje uporabniških žetonov', rows: ['Pravna infrastruktura postopka izdaje', 'Svetovanje o ekonomiji žetona (tokenomika)', 'Bela knjiga in marketinška obvestila', 'Pravno mnenje o pravni naravi žetona', 'Priglasitve regulatorju'] },
        { h4: 'Preverjanje skladnosti z uredbo MiCA', rows: ['Vsebina bele knjige, objave in priglasitve', 'Marketinška obvestila', 'Skrbništvo nad strankinimi kripto ali fiat sredstvi', 'Postopki za spreminjanje belih knjig'] },
        { h4: 'Žetoni elektronskega denarja in žetoni, vezani na premoženje', rows: ['Priprava osnutka bele knjige', 'Marketinška obvestila', 'Priprava vloge za regulatorja', 'Pravna mnenja'] },
        { h4: 'Skrbništvo in upravljanje premoženja', rows: ['Pogodbe s strankami', 'Interne politike (skrbništvo, kontrola, dostop)', 'Podpora v postopku registracije', 'Obveščanje strank, vračilo in ločevanje sredstev'] },
        { h4: 'Ponudniki trgovanja s kriptosredstvi', rows: ['Dokumentacija za stranke (splošni pogoji)', 'Uvrstitev kriptosredstev v trgovanje', 'Skrbni pregled strank', 'Trgovanje za lastni račun, razkritje in poravnava'] },
        { h4: 'Ponudniki menjalniških storitev', rows: ['Politika trgovanja in sprejemanja strank', 'Določanje menjalnega tečaja', 'Izvrševanje naročil', 'Objava informacij'] },
      ],
      travelH3: 'Travel rule',
      travelP: 'V skladu z uredbo EU morajo ponudniki storitev s kriptosredstvi deliti informacije o plačnikih in prejemnikih vsakega prenosa. Strankam svetujemo glede popolne skladnosti s pravilom "travel rule".',
    },
    expert: {
      eyebrow: 'Ustanovitelj · pravnik za finančno tehnologijo · Lemur Legal',
      h2: 'Kdo bo pripravil vašo belo knjigo',
      name: 'dr. Peter Merc',
      role: '// svetovanje pri 20+ dogodkih izdaje žetonov (TGE)',
      bio1: BIO1_SL,
      bio2: BIO2_SL,
      linkedinAria: 'dr. Peter Merc na LinkedInu',
    },
    testimonials: {
      h2: 'Zaupajo nam izdajatelji žetonov iz celotne panoge.',
      quotes: MICA_QUOTES_SL,
    },
    included: {
      h2: 'Vse, kar vaša ponudba potrebuje, v enem paketu.',
      items: [
        'Bela knjiga, skladna z uredbo MiCA',
        'Marketinška obvestila, pripravljena v skladu z zahtevami uredbe MiCA',
        'Pravno mnenje o pravni naravi vašega žetona',
        'Priglasitve, pripravljene in vložene pri pristojnem organu',
      ],
      pricebandText: '<b>Cena je prilagojena vašemu žetonu in ponudbi.</b> Povejte nam več o svojem projektu in po kratkem pregledu vam bomo poslali ponudbo s fiksno ceno.',
      // TODO(sl-review): "Request a proposal" button machine-translated
      pricebandBtn: 'Zahtevajte ponudbo',
    },
    faq: {
      h2: 'Pogosto zastavljena vprašanja',
      items: [
        { q: 'Kdo potrebuje belo knjigo MiCA?', a: 'Vsak izdajatelj, ki ponuja žetone vlagateljem v EU, neposredno ali prek centraliziranih borz — tudi če ima sedež izven EU (zaradi ekstrateritorialnega učinka uredbe MiCA).' },
        { q: 'Ali jo vložite pri regulatorju?', a: 'Da — pripravimo in oddamo obvestila pristojnemu organu ter vam nudimo podporo skozi celoten postopek pred regulatorjem.' },
        { q: 'Kaj, če je moj žeton elektronski denar ali vezan na premoženje?', a: 'Podpiramo pripravo belih knjig in vlog za žetone elektronskega denarja (EMT) ter žetone, vezane na premoženje (ART), vključno s postopkom pred regulatorjem.' },
        { q: 'Kako se določi cena?', a: 'Cena je prilagojena vašemu žetonu in ponudbi; po kratkem pregledu vam pošljemo ponudbo s fiksno ceno.' },
        { q: 'Ali svetujete tudi glede tokenomike?', a: 'Da — svetujemo glede ekonomije žetona in pravne infrastrukture, tako da je vaša ponudba skladna že od samega začetka.' },
        { q: 'Kaj je vključeno v sodelovanje?', a: 'Bela knjiga, skladna z uredbo MiCA, marketinška obvestila, pravno mnenje o vašem žetonu in priglasitve, vložene pri pristojnem organu.' },
      ],
    },
    form: {
      eye: '// kako začeti',
      h: 'Pošljite povpraševanje.',
      lead: 'Povejte nam več o svojem projektu, žetonu in ciljnem trgu. Pregledali bomo vašo dokumentacijo in vam poslali naslednje korake — praviloma še isti dan.',
      contactPrefix: 'WhatsApp · ',
      nameLabel: 'Ime in priimek',
      emailLabel: 'E-naslov',
      projLabel: 'Ime projekta in spletna stran',
      linkLabel: 'Povezava do informacij o žetonu / osnutka bele knjige',
      choiceLabel: 'Potrebujem belo knjigo za',
      chips: ['Uporabniški žeton', 'Elektronski denar / ART', 'Preverjanje skladnosti'],
      submit: 'Oddajte povpraševanje',
    },
    cross: {
      h2: 'Tudi v ponudbi Lemur Legal',
      items: [
        { h4: 'Pravno mnenje za kriptovalute', p: 'Utemeljena mnenja, ki jih zahtevajo borze in regulatorji pred uvrstitvijo.' },
        { h4: 'Licenciranje in AML', p: 'Avtorizacija CASP/VASP, registracija in skladnost z AML.' },
      ],
    },
  },
}

export default c
