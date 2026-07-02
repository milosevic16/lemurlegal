# Slovenian translation — strings to review

The Slovenian site content comes from the translation docx in
`lemur prevodi/`. A handful of strings were **machine-translated by Claude**
because the docx predates the recent English "popravki" rewrites (the docx has
no matching Slovenian for them). These need a native review by Peter.

Each is marked with a `// TODO(sl-review)` comment in the source. Pilot scope =
Home + Contact + shared chrome. (The 9 product pages are a later phase.)

## Shared chrome — `src/content/chrome.ts`
| EN | SL (review) |
|----|-------------|
| Privacy Policy | Politika zasebnosti |
| Terms of Use | Pogoji uporabe |
| Cookie Policy | Politika piškotkov |
| Lemur Legal on LinkedIn (aria) | Lemur Legal na LinkedInu |

## Home — `src/content/home.ts`
| EN | SL (review) |
|----|-------------|
| *(meta description)* | Lemur Legal je specializirana odvetniška pisarna za tehnološko pravo v Ljubljani… |
| Three sectors. Specialist legal services. | Trije sektorji. Specializirane pravne storitve. |
| Lemur Legal advises clients across three specialist areas… | Lemur Legal svetuje strankam na treh specializiranih področjih… |
| Whether you're launching, scaling… bring us your legal question. We'll map the path from there. | Ne glede na to, ali podjetje zaganjate… prinesite nam svoje pravno vprašanje. Od tam naprej začrtamo pot. |
| **Matter-board** (entire block — not in docx): | |
| From first consultation to dedicated legal support | Od prvega posveta do namenske pravne podpore |
| Consultation / Fixed-fee proposal / Dedicated legal support | Posvet / Ponudba s fiksnim honorarjem / Namenska pravna podpora |
| *(the 3 step descriptions + badges OPEN / in writing / one firm)* | *(see home.ts sl.cta.matter)* |

## Contact — `src/content/contact.ts`
| EN | SL (review) |
|----|-------------|
| *(meta description)* | Povejte nam, kaj gradite. Pošljite navodilo pisarni Lemur Legal… |
| // From first question to legal strategy. | // od prvega vprašanja do pravne strategije. |
| *(hero lead — adjusted, dropped "One firm, three frontiers")* | Ali izdajate žeton, zbirate krog financiranja… Odgovorimo v 24 urah. |
| Tell us what you're working on. | Povejte nam, na čem delate. |
| Share what you're building, where you are in the process… | Delite, kaj gradite, kje ste v procesu… Od tam naprej prevzamemo mi. |
| Legal question | Pravno vprašanje |
| Send enquiry | Pošljite povpraševanje |

## Product pages

Product-page Slovenian is a blend: where the page's current English still matches
the docx, the docx SL is used verbatim; where the English was rewritten (popravki)
or is more detailed than the docx, Claude translated it. The `// TODO(sl-review)`
comments mark the largest divergences from the docx; the rest tracks the docx.

### Crypto Legal Opinion — `src/content/products/cryptoLegalOpinion.ts`
| EN | SL (review) |
|----|-------------|
| *(meta description)* | Pravno mnenje za kriptovalute, ki zagotovi uvrstitev vašega žetona… |
| The crypto legal opinion that gets your token **listed.** *(H1 — docx has no "crypto")* | Pravno mnenje za kriptovalute, ki vaš žeton uvrsti **na borzo.** |
| *(CTA band)* Need a legal opinion your exchange will accept?… | Potrebujete pravno mnenje, ki ga bo vaša borza sprejela?… |
| *(pricing / steps / FAQ — current EN is more detailed than the docx; translated by Claude, terminology aligned to the docx)* | *(see file)* |
| Full canonical founder bio (2 paras) reused from `home.ts` (docx has only a short bio) | *(canonical SL bio)* |

### MiCA White Paper — `src/content/products/micaWhitePaper.ts`
| EN | SL (review) |
|----|-------------|
| *(meta description)* | Bela knjiga, skladna z uredbo MiCA, pripravljena in vložena… |
| *(hero slogan)* // drafting · legal opinion · regulator filing. | // priprava · pravno mnenje · vložitev pri regulatorju. |
| *(hero meta)* Fixed fee · Drafted, opinion & filed… | Fiksna cena · Pripravljeno, mnenje in vloženo pri pristojnem organu |
| What is MiCA | Kaj je MiCA |
| *(coverage intro)* Six engagements, one firm… | Šest storitev, ena pisarna — od izdaje uporabniških žetonov do upravljanja borze. |
| *(priceband button)* Request a proposal | Zahtevajte ponudbo |
| **Testimonials** are still `NEEDS TO BE CHANGED LATER` placeholders in **both** locales — client to supply the final 3 quotes (then translate). | |

### Incorporation & ESOP — `src/content/products/incorporationEsop.ts`
| EN | SL (review) |
|----|-------------|
| *(meta description)* | Ustanovite svoje podjetje in nagradite ekipo… |
| *(kicker)* Incorporation & ESOP · Ljubljana | Ustanovitev podjetja in ESOP · Ljubljana |
| *(hero meta)* Company setup · Founder & employee docs · ESOP | Ustanovitev podjetja · Dokumenti za ustanovitelje in zaposlene · ESOP |
| *(§01 heading)* The legal foundations every founder needs. | Pravni temelji, ki jih potrebuje vsak ustanovitelj. |
| *(§02 heading)* From idea to incorporated, incentivised company. | Od ideje do ustanovljenega in motiviranega podjetja. |
| *(step 01 sub — current EN differs from docx)* We advise on the right legal form and the jurisdiction of incorporation. | Svetujemo glede prave pravne oblike in jurisdikcije ustanovitve. |
| *(coverage callout heading)* Insiders in the startup ecosystem | Poznavalci startup ekosistema |
| *(founder role)* // founders · investors · mentors | // ustanovitelji · investitorji · mentorji |
| *(6th FAQ — not in docx)* When should we put option agreements in place? | Kdaj naj sklenemo opcijske pogodbe? |
| *(CTA button)* Book a consultation | Rezervirajte posvet |
| *(form lead)* Tell us about your company and what you need… | Povejte nam o svojem podjetju in kaj potrebujete… |

### IP Protection — `src/content/products/ipProtection.ts`
The IP docx is a rough/partial translation (garbled OCR, abbreviated coverage list), so
more of this page is Claude-translated than the others.
| EN | SL (review) |
|----|-------------|
| *(meta description)* | Zaščitite in branite svojo intelektualno lastnino… |
| *(kicker)* IP Protection · Ljubljana | Zaščita intelektualne lastnine · Ljubljana |
| *(H1 — split re-ordered so the emphasised word stays last)* Your IP is an asset worth **defending.** | Vaša intelektualna lastnina je sredstvo, ki ga je vredno **braniti.** |
| *(slogan)* // identify · protect · manage. | // prepoznaj · zaščiti · upravljaj. |
| *(hero meta)* IPR strategy · Identification · Protection · Contracts & licensing | Strategija IP · Prepoznavanje · Zaščita · Pogodbe in licenciranje |
| *(§03 coverage — all six cards' row detail translated from current EN; docx only had card titles)* | *(see file)* |
| *(founder eyebrow — docx differs)* Founder · EUIPO trademark & design representative · Lemur Legal | Ustanovitelj · zastopnik za znamke in modele pri EUIPO · Lemur Legal |
| *(founder role)* // strategy · registration · licensing | // strategija · registracija · licenciranje |
| *(CTA band — adapted from current EN)* Have intellectual property worth protecting?… | Imate intelektualno lastnino, ki jo je vredno zaščititi?… |
| *(form lead)* Tell us about your company and what you need… | Povejte nam o svojem podjetju in kaj potrebujete… |

### Contracts & Commercial — `src/content/products/contractsCommercial.ts`
Docx well-aligned; only a few gaps machine-translated.
| EN | SL (review) |
|----|-------------|
| *(meta description)* | Pogodbe, ki ščitijo vaše podjetje… |
| *(kicker)* Contracts & Commercial · Ljubljana | Pogodbe in gospodarsko pravo · Ljubljana |
| *(hero meta)* Fixed-fee proposals · Drafted, reviewed & built for tech companies | Ponudbe s fiksno ceno · Pripravljeno, pregledano in prilagojeno tehnološkim podjetjem |
| *(coverage intro)* From software and source-code licences… one firm across the whole stack. | Od licenc za programsko in izvorno kodo … ena pisarna čez celoten nabor. |
| *(priceband button)* Request a proposal | Zahtevajte ponudbo |
| *(form lead)* Tell us about your company and what you need — new contracts… | Povejte nam o svojem podjetju in kaj potrebujete — nove pogodbe… |
| NB: the 3 (real) testimonials use this docx's SL wording, which differs slightly from the Crypto page's SL of the same quotes — reconcile if a single canonical SL per quote is wanted. |

### Regulatory Qualification (defence) — `src/content/products/regulatoryQualification.ts`
The "Trade qualification v2" docx is **partly contaminated**: its FAQ and form section
carry over Contracts-page content, and its hero H1/lead differ from the current page. So
the strip, the 3 how-steps, the 6 coverage cards and the §01–§02 headings use the docx SL,
but the **hero, §01 item 01, the entire 8-item FAQ, the form, the coverage intro/callout,
the included section and the cross-sell headings are Claude-translated** (all flagged
`// TODO(sl-review)` in the file). Key items:
| EN | SL (review) |
|----|-------------|
| *(H1)* Defence & dual-use technology, **cleared for global markets.** | Obrambna tehnologija in tehnologija z dvojno rabo, **odobrena za svetovne trge.** |
| *(FAQ ×8 — dual-use legal Q&A, docx FAQ was the wrong content)* | *(see file — all machine-translated, legal terminology needs a native check)* |
| *(form lead / chips)* Product qualification / Counterparty screening / Authorisation | Kvalifikacija izdelka / Preverjanje nasprotne stranke / Pridobitev odobritve |
- The animated **`.qlog` "sample trace"** terminal (DUAL-USE / CLEARED / QUALIFIED ✓ …) is
  left in **English**, consistent with the other pages' terminal chrome (`tl__head`,
  `$ …` command lines). The docx does provide SL for it if a fully-localized qlog is wanted.
- This page's founder block has **no LinkedIn link** (bare avatar) — see the IP-Protection task.

### Investment Readiness (defence) — `src/content/products/investmentReadiness.ts`
The "Investment readiness" docx is aligned for the strip, the 3 how-steps and the 6 coverage
cards, but its **§03/§04 headings, priceband, form section and parts of the FAQ carry over
other pages' content**, so the hero, §01/§02/§03/§04 headings, callout, included section,
form and several FAQ items are Claude-translated (flagged `// TODO(sl-review)`). Selected:
| EN | SL (review) |
|----|-------------|
| *(H1)* Prove your defence or dual-use company is investment-ready — **and de-risk the deal.** | Dokažite, da je vaše obrambno podjetje ali podjetje z dvojno rabo pripravljeno na investicijo — **in zmanjšajte tveganje posla.** |
| *(form chips)* Readiness review / Investor diligence / FDI review / Export-control exposure / Procurement readiness | Pregled pripravljenosti / Skrbni pregled za investitorje / Pregled FDI / Izpostavljenost nadzoru izvoza / Pripravljenost na javna naročila |
| *(cross)* Regulatory Qualification | Regulativna kvalifikacija |
- The animated **`.scan` "sample output"** dashboard (Regulatory exposure mapped 82/100 …) is
  left in **English**, consistent with the other pages' terminal chrome. The docx does provide
  SL row labels if a fully-localized scan is wanted.

### Compliance Frameworks (defence) — `src/content/products/complianceFrameworks.ts`
This docx is the **best-aligned of the three defence docs** — the 3 how-steps, the 6 coverage
cards (titles + rows), the founder bio/eyebrow/role and **all 9 FAQ Q&As** come from the docx.
Claude-translated (flagged): the hero (H1/slogan/lead/meta/kicker), the §01 "challenge" cards,
the §01–§04 section headings, the coverage intro + callout, the included section, the form and
the cross-sell heading.
| EN | SL (review) |
|----|-------------|
| *(H1)* Turn defence & dual-use regulatory complexity into **audit-ready operations.** | Pretvorite regulativno kompleksnost obrambe in dvojne rabe v **operacije, pripravljene na revizijo.** |
| *(form chips ×6)* Programme design / Governance / Audit readiness / Export-control workflow / Sanctions screening / Procurement readiness | Načrtovanje programa / Upravljanje / Revizijska pripravljenost / Delovni tok nadzora izvoza / Presejanje sankcij / Pripravljenost na javna naročila |

## Notes
- The rest of the Slovenian copy is taken from the docx as-authored.
- Terminology to confirm site-wide (docx is inconsistent): "MiCA White Paper" is
  rendered both **Beli papir MiCA** and **Bela knjiga … MiCA** across docs — pilot
  uses "Beli papir MiCA".
- Decorative geo coords (e.g. `[ 46.05°N · 14.51°E ]`) and hex tickers are left in
  their original form (not localized).
- Legal links point to the English `lemur.legal/en/…` pages in both locales —
  provide `/sl/…` legal URLs if Slovenian legal pages exist.
