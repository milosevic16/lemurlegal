import type { Bilingual, PageMeta } from './types'

// A legal document rendered from structured blocks: each Article holds an
// ordered list of blocks, where a block is either a paragraph (`p`) or a
// bulleted list (`list`). Both locales come verbatim from the client's
// Terms & Privacy docx (no machine translation).
interface Block {
  p?: string
  list?: string[]
}
interface Article {
  heading: string
  blocks: Block[]
}
interface Part {
  anchor: string
  title: string
  intro?: string[]
  articles: Article[]
}
export interface TermsContent {
  meta: PageMeta
  title: string
  org: string
  updated: string
  intro: string[]
  parts: [Part, Part]
  closing: string
}

const c: Bilingual<TermsContent> = {
  en: {
    meta: {
      title: 'Terms of Use & Privacy Policy — Lemur Legal',
      description:
        'Terms of use of the Lemur Legal website and how we process the personal data of visitors and users, in line with the GDPR and the Slovenian ZVOP-2.',
    },
    title: 'Terms of Use and Privacy Policy',
    org: 'Lemur Legal d.o.o. – Ciril-Metodov trg 14, 1000 Ljubljana, Slovenia',
    updated: 'Ljubljana, July 2026',
    intro: [
      'This document governs the terms of use of the website https://www.lemur.legal (the “Website”) and the manner in which personal data of Website visitors and users is processed.',
      'The owner, administrator and data controller in relation to the Website is Lemur Legal d.o.o., Ciril-Metodov trg 14, 1000 Ljubljana, Slovenia, registration No. 7016247000, VAT No. SI53345304 (“Lemur Legal” or the “Company”), reachable at info@lemur.legal.',
      'Please read this document carefully before using the Website. By using the Website, you confirm that you have read and agree to its content. If you do not agree with the Terms of Use or the Privacy Policy, please do not use the Website.',
    ],
    parts: [
      {
        anchor: 'terms',
        title: 'Part I – Terms of Use of the Website',
        articles: [
          {
            heading: 'Article 1 – Subject Matter',
            blocks: [
              { p: 'These Terms of Use (“Terms of Use”) govern access to and use of the Website, including all information, texts, graphics, photographs, forms and other content made available on it (the “Content”).' },
              { p: 'In addition to these Terms of Use, please also review the Privacy Policy (Part II of this document) and the separate Cookie Policy available on the Website.' },
            ],
          },
          {
            heading: 'Article 2 – Nature of the Website Content',
            blocks: [
              { p: 'THESE TERMS OF USE AND THE CONTENT OF THE WEBSITE GOVERN SOLELY YOUR USE OF THE WEBSITE. THEY DO NOT CONSTITUTE LEGAL ADVICE AND DO NOT CREATE AN ADVISOR-CLIENT RELATIONSHIP. The information on the Website (including descriptions of our practice areas in crypto regulation, fintech, deep tech, startup and venture capital advisory) is of a general nature and provided for informational purposes only.' },
              { p: 'Before Lemur Legal takes on any specific legal matter on your behalf, an appropriate engagement agreement will be entered into with you, setting out the scope of services and the parties’ respective rights and obligations. Until such an agreement is signed, no contractual or other legal relationship arises between you and Lemur Legal that would obligate Lemur Legal to provide services on your behalf.' },
            ],
          },
          {
            heading: 'Article 3 – Restrictions on Use',
            blocks: [
              { p: 'Lemur Legal grants you a personal, limited, non-exclusive and non-transferable right to use the Website for personal, non-commercial purposes, in accordance with these Terms of Use and applicable law.' },
              { p: 'You agree not to use the Website for any purpose that is unlawful, inconsistent with these Terms of Use, or manifestly contrary to the purpose and activity of Lemur Legal. In particular, it is prohibited to: (i) use automated tools, bots or similar software to gather data on other users’ use of the Website or to determine their identity; (ii) place a disproportionate or excessive burden on the Website or related infrastructure; (iii) disrupt or attempt to disrupt the proper operation of the Website; (iv) attempt to circumvent any access-restriction measures applied to the Website.' },
              { p: 'Lemur Legal reserves the right to investigate reported violations of these Terms of Use and to take appropriate action, which may include notifying competent law-enforcement authorities or regulators.' },
            ],
          },
          {
            heading: 'Article 4 – Enquiries and User-Submitted Content',
            blocks: [
              { p: 'The Website allows you to submit enquiries, questions and requests for legal opinions (e.g. via the contact form or the form for ordering a legal opinion for a utility token or meme coin). All content you submit to Lemur Legal (“User Content”) is submitted at your own responsibility.' },
              { p: 'By submitting an enquiry, you confirm that the information provided is accurate and complete. Lemur Legal is not liable for any damage arising from your reliance on any response provided prior to the conclusion of an engagement agreement, as such pre-engagement communication does not constitute legal advice.' },
              { p: 'User Content is treated as confidential and used solely for the purposes described in the Privacy Policy (Part II).' },
            ],
          },
          {
            heading: 'Article 5 – Intellectual Property Rights',
            blocks: [
              { p: 'The Website and its Content, including the Lemur Legal name and trademark, logo, texts, graphics, photographs and other elements, are the intellectual property of Lemur Legal or its authors and are protected under applicable copyright and industrial property law. Use of the Content without the prior express written consent of Lemur Legal is prohibited, except to the extent expressly permitted by these Terms of Use or mandatory law.' },
              { p: 'Third parties may reference the Lemur Legal name solely in connection with services actually rendered to them by Lemur Legal, and within the bounds of good business practice. Any other use of the Lemur Legal trademark, name or logo requires the Company’s prior written consent. Any use that could create the impression that Lemur Legal sponsors, endorses, or is otherwise affiliated with your products, services or activities, where this is not the case, is prohibited.' },
            ],
          },
          {
            heading: 'Article 6 – Disclaimer and Limitation of Liability',
            blocks: [
              { p: 'Lemur Legal endeavours to ensure the accuracy and currency of the content on the Website but does not warrant its complete accuracy, completeness or currency. The Website Content is provided “as is,” without warranties of any kind, express or implied, to the fullest extent permitted by applicable law.' },
              { p: 'Lemur Legal is not liable for any indirect or consequential damages (including loss of profit, data or goodwill) arising from access to the Website, the inability to use it, or reliance on its content, except in cases of intent or gross negligence on the part of Lemur Legal, or where liability cannot be excluded or limited under mandatory provisions of Slovenian law.' },
              { p: 'This Article does not affect Lemur Legal’s liability arising from any specific engagement agreement concluded with you.' },
            ],
          },
          {
            heading: 'Article 7 – Suspension of Access',
            blocks: [
              { p: 'Lemur Legal reserves the right, at any time, to deny or restrict, in whole or in part, access to the Website to any individual it reasonably believes: (i) has breached these Terms of Use, (ii) creates a legal or security risk for Lemur Legal, or (iii) is acting in a manner manifestly contrary to the purpose of the Website. Lemur Legal will endeavour to notify the affected person of such a decision by e-mail, where possible.' },
            ],
          },
          {
            heading: 'Article 8 – Third-Party Links',
            blocks: [
              { p: 'The Website may contain links to third-party websites. Such websites are not under the control of Lemur Legal, and Lemur Legal accepts no responsibility for their content, privacy practices or policies. The presence of a link does not imply any endorsement, approval, or affiliation of Lemur Legal with such website.' },
            ],
          },
          {
            heading: 'Article 9 – Changes to These Terms of Use',
            blocks: [
              { p: 'Lemur Legal reserves the right to amend or supplement these Terms of Use at any time. The current version is always published on the Website, with the date of the latest revision indicated at the end of the document. Continued use of the Website following publication of any changes constitutes acceptance of those changes. If you do not agree with the amended Terms of Use, please discontinue use of the Website.' },
            ],
          },
          {
            heading: 'Article 10 – Governing Law and Jurisdiction',
            blocks: [
              { p: 'These Terms of Use are governed by and construed in accordance with the laws of the Republic of Slovenia, without regard to its conflict-of-laws rules. Any disputes shall be subject to the exclusive jurisdiction of the competent court in Ljubljana, unless mandatory law (e.g. in relation to consumers) provides otherwise.' },
            ],
          },
          {
            heading: 'Article 11 – Contact',
            blocks: [
              { p: 'For any questions regarding these Terms of Use, please contact us at info@lemur.legal or by post at Lemur Legal d.o.o., Ciril-Metodov trg 14, 1000 Ljubljana, Slovenia.' },
            ],
          },
        ],
      },
      {
        anchor: 'privacy',
        title: 'Part II – Privacy Policy',
        intro: [
          'This Privacy Policy describes how Lemur Legal d.o.o. (“Lemur Legal”) collects, processes and safeguards the personal data of Website visitors and users, in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (the “GDPR”) and the Slovenian Personal Data Protection Act (ZVOP-2).',
          'For information on the cookies used by the Website, please see the separate Cookie Policy available on the Website.',
        ],
        articles: [
          {
            heading: 'Article 1 – Data Controller',
            blocks: [
              { p: 'The data controller within the meaning of the GDPR is Lemur Legal d.o.o., Ciril-Metodov trg 14, 1000 Ljubljana, Slovenia, registration No. 7016247000, VAT No. SI53345304, e-mail: info@lemur.legal (the “Controller”). For any questions regarding the processing of personal data, please contact us at the above e-mail address.' },
            ],
          },
          {
            heading: 'Article 2 – Personal Data We Collect',
            blocks: [
              { p: 'The Controller may process the following categories of personal data:' },
              {
                list: [
                  'identification data: first and last name, company name, job title;',
                  'contact data: e-mail address, phone number;',
                  'enquiry content: information you voluntarily provide via the contact form or the legal-opinion request form (e.g. the type of opinion requested – utility token, meme coin – and other details of your enquiry);',
                  'Website usage data: IP address, date and time of visit, pages/URLs visited, time spent on each page, device, browser and operating system type, browser language;',
                  'data obtained through cookies and similar technologies, as further described in the Cookie Policy.',
                ],
              },
              { p: 'We obtain personal data directly from you when you complete a form on the Website, send us an e-mail, or through automated processing on the Website (e.g. cookies).' },
            ],
          },
          {
            heading: 'Article 3 – Purposes and Legal Basis of Processing',
            blocks: [
              { p: 'We process your personal data for the following purposes and on the following legal bases:' },
              {
                list: [
                  'responding to your enquiries, questions and requests for a legal opinion and taking steps at your request prior to entering into an engagement – based on Article 6(1)(b) GDPR (steps prior to entering into a contract) or Article 6(1)(f) GDPR (the Controller’s legitimate interest in business communication);',
                  'ensuring the correct, secure and efficient operation of the Website and preventing misuse – based on Article 6(1)(f) GDPR (legitimate interest of the Controller);',
                  'sending you information about Lemur Legal’s services by e-mail, where you have given your explicit consent – based on Article 6(1)(a) GDPR (consent), which you may withdraw at any time;',
                  'complying with the Controller’s legal obligations (e.g. anti-money laundering, accounting, or requests from competent authorities) – based on Article 6(1)(c) GDPR.',
                ],
              },
              { p: 'We will not use your personal data for purposes incompatible with those described in this Privacy Policy, unless required by law or with your prior consent.' },
            ],
          },
          {
            heading: 'Article 4 – Cookies',
            blocks: [
              { p: 'The Website uses cookies and similar technologies to ensure the Website functions properly and, where relevant, for analytics and to improve the user experience. Detailed information on the types of cookies used, their purpose, duration and how to manage your consent is available in the separate Cookie Policy on the Website. Non-essential cookies are used only with your prior consent, which you may withdraw at any time through the cookie settings on the Website.' },
            ],
          },
          {
            heading: 'Article 5 – Recipients of Personal Data and Data Transfers',
            blocks: [
              { p: 'We do not share your personal data with unauthorised third parties. Access to personal data may be granted to processors performing specific tasks on the Controller’s behalf (e.g. the website hosting and building provider – Wix.com, and e-mail/IT service providers), strictly to the extent necessary to perform their contracted services, under a written data-processing agreement and in accordance with this Privacy Policy.' },
              { p: 'Some of these providers may be established or operate servers outside the European Economic Area (e.g. in the United States). In such cases, the Controller ensures appropriate safeguards in accordance with Chapter V GDPR (e.g. the European Commission’s Standard Contractual Clauses or an adequacy decision).' },
              { p: 'We may also disclose personal data to competent public authorities where necessary to comply with legal obligations or to establish, exercise or defend legal claims.' },
            ],
          },
          {
            heading: 'Article 6 – Data Retention',
            blocks: [
              { p: 'We retain personal data only for as long as necessary to achieve the purpose for which it was collected, or as required by applicable law:' },
              {
                list: [
                  'enquiry data that did not lead to an engagement: up to 2 years from the last contact, unless a longer period is warranted by consent or legitimate interest;',
                  'data related to concluded engagement agreements: in accordance with statutory retention periods (e.g. accounting, tax and anti-corruption regulations, and professional ethics rules), generally at least 5–10 years after the matter is closed;',
                  'data processed on the basis of consent (e.g. for service-related communications): until consent is withdrawn;',
                  'Website usage data and cookies: in accordance with the periods set out in the Cookie Policy.',
                ],
              },
              { p: 'Upon expiry of the retention period, the Controller permanently deletes or anonymises the personal data.' },
            ],
          },
          {
            heading: 'Article 7 – Your Rights',
            blocks: [
              { p: 'Under the GDPR, as a data subject you have the following rights:' },
              {
                list: [
                  'the right of access to your personal data (Article 15 GDPR);',
                  'the right to rectification of inaccurate data (Article 16 GDPR);',
                  'the right to erasure (“right to be forgotten”), where the conditions of Article 17 GDPR are met;',
                  'the right to restriction of processing (Article 18 GDPR);',
                  'the right to data portability (Article 20 GDPR);',
                  'the right to object to processing based on the Controller’s legitimate interest, including direct marketing (Article 21 GDPR);',
                  'the right to withdraw consent at any time, without affecting the lawfulness of processing carried out prior to withdrawal;',
                  'the right to lodge a complaint with the Slovenian Information Commissioner (Dunajska cesta 22, 1000 Ljubljana, Slovenia, e-mail: gp.ip@ip-rs.si), if you consider that the processing of your personal data infringes data protection law.',
                ],
              },
              { p: 'You may exercise any of the above rights by contacting the Controller at info@lemur.legal. The Controller will respond to your request without undue delay and no later than one month after receipt. For reliable identification purposes, the Controller may request additional information.' },
            ],
          },
          {
            heading: 'Article 8 – Data Security',
            blocks: [
              { p: 'The Controller implements appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including access restrictions, secure connections, and regular review of security measures. In the event of a personal data breach likely to result in a high risk to your rights and freedoms, the Controller will notify you in accordance with GDPR requirements.' },
            ],
          },
          {
            heading: 'Article 9 – Changes to This Privacy Policy',
            blocks: [
              { p: 'The Controller reserves the right to update this Privacy Policy periodically to reflect changes in law or business practice. The current version is always published on the Website, with the date of the latest revision indicated at the end of the document. Where appropriate, we will notify you of material changes by e-mail or via a notice on the Website.' },
            ],
          },
          {
            heading: 'Article 10 – Contact',
            blocks: [
              { p: 'For any questions regarding this Privacy Policy or the processing of your personal data, please contact us at: Lemur Legal d.o.o., Ciril-Metodov trg 14, 1000 Ljubljana, Slovenia, e-mail: info@lemur.legal.' },
            ],
          },
        ],
      },
    ],
    closing:
      'Lemur Legal d.o.o. – Ljubljana, July 2026. This version supersedes all prior versions of the Terms of Use and Privacy Policy published on the Website.',
  },

  sl: {
    meta: {
      title: 'Splošni pogoji in Politika zasebnosti — Lemur Legal',
      description:
        'Splošni pogoji uporabe spletne strani Lemur Legal in način obdelave osebnih podatkov obiskovalcev in uporabnikov, skladno z GDPR in ZVOP-2.',
    },
    title: 'Splošni pogoji uporabe spletne strani in Politika zasebnosti',
    org: 'Lemur Legal d.o.o. – Ciril-Metodov trg 14, 1000 Ljubljana, Slovenija',
    updated: 'Ljubljana, julij 2026',
    intro: [
      'Ta dokument ureja pogoje uporabe spletne strani https://www.lemur.legal (v nadaljevanju: “spletna stran”) ter način obdelave osebnih podatkov obiskovalcev in uporabnikov spletne strani.',
      'Lastnik, administrator in upravljavec osebnih podatkov v zvezi s spletno stranjo je družba Lemur Legal d.o.o., Ciril-Metodov trg 14, 1000 Ljubljana, matična št. 7016247000, davčna št. SI53345304 (v nadaljevanju: “Lemur Legal” ali “družba”), dosegljiva na elektronskem naslovu info@lemur.legal.',
      'Prosimo, da si pred uporabo spletne strani pozorno preberete ta dokument. Z uporabo spletne strani potrjujete, da ste seznanjeni z njegovo vsebino in da se z njo strinjate. Če se s Splošnimi pogoji uporabe ali s Politiko zasebnosti ne strinjate, spletne strani ne uporabljajte.',
    ],
    parts: [
      {
        anchor: 'terms',
        title: 'Del I – Splošni pogoji uporabe spletne strani',
        articles: [
          {
            heading: '1. člen – Predmet dokumenta',
            blocks: [
              { p: 'Splošni pogoji uporabe spletne strani (v nadaljevanju: “Splošni pogoji”) urejajo dostop do spletne strani ter njeno uporabo, vključno z vsemi informacijami, besedili, grafikami, fotografijami, obrazci in drugimi vsebinami, ki jih spletna stran vsebuje (v nadaljevanju: “Vsebina”).' },
              { p: 'Poleg Splošnih pogojev vas prosimo, da se seznanite tudi s Politiko zasebnosti (Del II tega dokumenta) in z ločeno Politiko piškotkov, dostopno na spletni strani.' },
            ],
          },
          {
            heading: '2. člen – Narava vsebine spletne strani',
            blocks: [
              { p: 'SPLOŠNI POGOJI IN VSEBINA SPLETNE STRANI UREJAJO IZKLJUČNO VAŠO UPORABO SPLETNE STRANI IN NE PREDSTAVLJAJO PRAVNEGA SVETOVANJA NITI NE VZPOSTAVLJAJO RAZMERJA MED PRAVNIM SVETOVALCEM IN STRANKO. Informacije na spletni strani (vključno z opisi področij dela s področja kripto regulacije, fintech, deep tech, startup in venture capital svetovanja) so splošne narave in namenjene izključno informativnim namenom.' },
              { p: 'Preden Lemur Legal za vas prevzame konkretno pravno zadevo, bo z vami sklenjena ustrezna pogodba o opravljanju pravnih oziroma svetovalnih storitev, ki bo opredelila obseg storitev ter medsebojne pravice in obveznosti. Do sklenitve take pogodbe med vami in Lemur Legal ne nastane nobeno pogodbeno niti drugo pravno razmerje, ki bi Lemur Legal zavezovalo k opravljanju storitev v vašem imenu.' },
            ],
          },
          {
            heading: '3. člen – Omejitev uporabe',
            blocks: [
              { p: 'Lemur Legal vam podeljuje osebno, omejeno, neizključno in neprenosljivo pravico do uporabe spletne strani za osebno, nekomercialno rabo, skladno s temi Splošnimi pogoji in veljavno zakonodajo.' },
              { p: 'Zavezujete se, da spletne strani ne boste uporabljali za noben namen, ki je nezakonit, ki ni skladen s temi Splošnimi pogoji ali ki je v očitnem nasprotju z namenom in dejavnostjo Lemur Legal. Prepovedano je zlasti: (i) uporabljati avtomatizirana orodja, robote ali podobno programsko opremo za pridobivanje podatkov o uporabi spletne strani s strani drugih uporabnikov ali ugotavljanje njihove identitete; (ii) nesorazmerno ali prekomerno obremenjevati spletno stran ali povezano infrastrukturo; (iii) motiti ali poskusiti motiti pravilno delovanje spletne strani; (iv) poskusiti zaobiti ukrepe za omejitev dostopa do spletne strani.' },
              { p: 'Lemur Legal si pridržuje pravico, da preiskuje prijavljene kršitve teh Splošnih pogojev in ukrepa na primeren način, kar lahko vključuje tudi obveščanje pristojnih organov pregona ali regulatorjev.' },
            ],
          },
          {
            heading: '4. člen – Povpraševanja in vsebina, ki jo posredujete',
            blocks: [
              { p: 'Spletna stran omogoča oddajo povpraševanj, vprašanj in zahtev za pravna mnenja (npr. prek kontaktnega obrazca ali obrazca za naročilo pravnega mnenja za utility token ali meme coin). Vsa vsebina, ki jo posredujete Lemur Legal (v nadaljevanju: “Vsebina uporabnika”), je vaša izključna odgovornost.' },
              { p: 'S posredovanjem povpraševanja potrjujete, da so posredovane informacije točne in popolne. Lemur Legal ne odgovarja za škodo, ki bi nastala zaradi vašega zanašanja na odgovore, podane pred sklenitvijo pogodbe o opravljanju storitev, saj gre v tej fazi izključno za predhodno komunikacijo, ne pa za pravni nasvet.' },
              { p: 'Vsebina uporabnika se obravnava zaupno in se uporabi izključno za namene, opisane v Politiki zasebnosti (Del II).' },
            ],
          },
          {
            heading: '5. člen – Pravice intelektualne lastnine',
            blocks: [
              { p: 'Spletna stran in njena Vsebina, vključno z imenom in znamko Lemur Legal, logotipom, besedili, grafikami, fotografijami in drugimi elementi, so intelektualna lastnina Lemur Legal oziroma njenih avtorjev in so zaščiteni v skladu z veljavno zakonodajo o avtorski in industrijski lastnini. Uporaba Vsebine brez izrecnega predhodnega pisnega soglasja Lemur Legal ni dovoljena, razen v obsegu, ki ga izrecno dopuščajo ti Splošni pogoji ali kogentni predpisi.' },
              { p: 'Ime Lemur Legal lahko tretje osebe navedejo kot referenco izključno v zvezi s storitvami, ki jih je Lemur Legal zanje dejansko opravil, in v mejah dobre poslovne prakse. Vsaka druga uporaba znamke, imena ali logotipa Lemur Legal zahteva predhodno pisno soglasje družbe. Prepovedana je uporaba, ki bi lahko ustvarila vtis, da Lemur Legal sponzorira, odobrava ali je kako drugače povezan z vašimi produkti, storitvami ali aktivnostmi, če temu ni tako.' },
            ],
          },
          {
            heading: '6. člen – Izključitev in omejitev odgovornosti',
            blocks: [
              { p: 'Lemur Legal si prizadeva zagotavljati točnost in ažurnost vsebin na spletni strani, vendar ne jamči za popolno točnost, celovitost ali ažurnost objavljenih informacij. Vsebina spletne strani je posredovana “takšna kot je”, brez kakršnih koli izrecnih ali impliciranih jamstev, v največjem obsegu, ki ga dopušča veljavna zakonodaja.' },
              { p: 'Lemur Legal ne odgovarja za posredno ali posledično škodo (vključno z izgubo dobička, podatkov ali dobrega imena), ki bi izvirala iz dostopa do spletne strani, nezmožnosti njene uporabe ali zanašanja na vsebino spletne strani, razen v primeru naklepa ali hude malomarnosti Lemur Legal, ali kadar odgovornosti v skladu s kogentnimi določbami slovenskega prava ni mogoče izključiti ali omejiti.' },
              { p: 'Določbe tega člena ne vplivajo na odgovornost Lemur Legal, ki izhaja iz posamezne pogodbe o opravljanju pravnih storitev, sklenjene z vami.' },
            ],
          },
          {
            heading: '7. člen – Odpoved dostopa',
            blocks: [
              { p: 'Lemur Legal si pridržuje pravico, da kadarkoli, delno ali v celoti, zavrne ali omeji dostop do spletne strani posamezniku, za katerega utemeljeno sklepa, da: (i) krši te Splošne pogoje, (ii) za Lemur Legal ustvarja pravno ali varnostno tveganje, ali (iii) je njegovo ravnanje v očitnem nasprotju z namenom spletne strani. Lemur Legal si bo prizadeval o taki odločitvi obvestiti prizadeto osebo po elektronski pošti, kjer je to mogoče.' },
            ],
          },
          {
            heading: '8. člen – Povezave do spletnih strani tretjih',
            blocks: [
              { p: 'Spletna stran lahko vsebuje povezave do spletnih strani tretjih oseb. Take spletne strani niso pod nadzorom Lemur Legal, zato Lemur Legal ne odgovarja za njihovo vsebino, politike zasebnosti ali prakse. Navedba povezave ne pomeni priporočila, odobritve ali kakršne koli povezanosti Lemur Legal s tako spletno stranjo.' },
            ],
          },
          {
            heading: '9. člen – Spremembe Splošnih pogojev',
            blocks: [
              { p: 'Lemur Legal si pridržuje pravico, da te Splošne pogoje kadarkoli spremeni ali dopolni. Veljavna različica je vedno objavljena na spletni strani, datum zadnje spremembe pa naveden na koncu dokumenta. Nadaljnja uporaba spletne strani po objavi sprememb pomeni, da se z njimi strinjate. Če se s spremenjenimi pogoji ne strinjate, prosimo, da spletne strani ne uporabljate več.' },
            ],
          },
          {
            heading: '10. člen – Veljavno pravo in pristojnost',
            blocks: [
              { p: 'Za razlago in izvajanje teh Splošnih pogojev se uporablja pravo Republike Slovenije, brez uporabe njegovih kolizijskih pravil. Za reševanje morebitnih sporov je pristojno stvarno pristojno sodišče v Ljubljani, razen če kogentni predpisi (npr. v razmerju do potrošnikov) določajo drugače.' },
            ],
          },
          {
            heading: '11. člen – Kontakt',
            blocks: [
              { p: 'Za vsa vprašanja v zvezi s temi Splošnimi pogoji nas lahko kontaktirate na elektronski naslov info@lemur.legal ali po pošti na naslov Lemur Legal d.o.o., Ciril-Metodov trg 14, 1000 Ljubljana, Slovenija.' },
            ],
          },
        ],
      },
      {
        anchor: 'privacy',
        title: 'Del II – Politika zasebnosti',
        intro: [
          'Ta Politika zasebnosti opisuje, kako Lemur Legal d.o.o. (v nadaljevanju: “Lemur Legal”) zbira, obdeluje in varuje osebne podatke obiskovalcev in uporabnikov spletne strani, v skladu z Uredbo (EU) 2016/679 Evropskega parlamenta in Sveta z dne 27. aprila 2016 o varstvu posameznikov pri obdelavi osebnih podatkov in o prostem pretoku takih podatkov (v nadaljevanju: “Splošna uredba” ali “GDPR”) ter Zakonom o varstvu osebnih podatkov (ZVOP-2).',
          'Za informacije o piškotkih, ki jih uporablja spletna stran, glejte ločeno Politiko piškotkov, dostopno na spletni strani.',
        ],
        articles: [
          {
            heading: '1. člen – Upravljavec osebnih podatkov',
            blocks: [
              { p: 'Upravljavec osebnih podatkov v smislu Splošne uredbe je Lemur Legal d.o.o., Ciril-Metodov trg 14, 1000 Ljubljana, matična št. 7016247000, davčna št. SI53345304, e-pošta: info@lemur.legal (v nadaljevanju: “Upravljavec”). Za vprašanja v zvezi z obdelavo osebnih podatkov nas kontaktirajte na zgornji elektronski naslov.' },
            ],
          },
          {
            heading: '2. člen – Katere osebne podatke zbiramo',
            blocks: [
              { p: 'Upravljavec lahko obdeluje naslednje kategorije osebnih podatkov:' },
              {
                list: [
                  'identifikacijski podatki: ime, priimek, naziv podjetja, funkcija;',
                  'kontaktni podatki: elektronski naslov, telefonska številka;',
                  'vsebina povpraševanja: podatki, ki jih prostovoljno navedete v kontaktnem obrazcu ali obrazcu za naročilo pravnega mnenja (npr. vrsta zahtevanega mnenja – utility token, meme coin, in druge okoliščine vašega povpraševanja);',
                  'podatki o uporabi spletne strani: IP naslov, datum in ura obiska, obiskane strani oz. URL-ji, čas zadrževanja na strani, tip naprave, brskalnika in operacijskega sistema, jezik brskalnika;',
                  'podatki, pridobljeni prek piškotkov in podobnih tehnologij, kot je podrobneje opisano v Politiki piškotkov.',
                ],
              },
              { p: 'Osebne podatke pridobivamo neposredno od vas, ko izpolnite obrazec na spletni strani, nam pošljete elektronsko sporočilo, ali z avtomatizirano obdelavo prek spletne strani (npr. piškotki).' },
            ],
          },
          {
            heading: '3. člen – Nameni in pravna podlaga obdelave',
            blocks: [
              { p: 'Vaše osebne podatke obdelujemo za naslednje namene in na naslednjih pravnih podlagah:' },
              {
                list: [
                  'odgovarjanje na vaša povpraševanja, vprašanja in zahteve po pravnem mnenju ter izvajanje ukrepov na vašo zahtevo pred morebitno sklenitvijo pogodbe – na podlagi člena 6(1)(b) GDPR (izvajanje ukrepov pred sklenitvijo pogodbe) oziroma člena 6(1)(f) GDPR (zakoniti interes Upravljavca za poslovno komunikacijo);',
                  'zagotavljanje pravilnega, varnega in učinkovitega delovanja spletne strani ter preprečevanje zlorab – na podlagi člena 6(1)(f) GDPR (zakoniti interes Upravljavca);',
                  'pošiljanje informacij o storitvah Lemur Legal na vaš elektronski naslov, kadar ste v to izrecno privolili – na podlagi člena 6(1)(a) GDPR (privolitev), ki jo lahko kadarkoli prekličete;',
                  'izpolnjevanje pravnih obveznosti Upravljavca (npr. na področju preprečevanja pranja denarja, računovodstva ali na zahtevo pristojnih organov) – na podlagi člena 6(1)(c) GDPR.',
                ],
              },
              { p: 'Vaših osebnih podatkov ne bomo uporabljali za namene, ki niso združljivi z nameni, opisanimi v tej Politiki zasebnosti, razen če nas k temu zavezuje zakon ali če za to pridobimo vašo predhodno privolitev.' },
            ],
          },
          {
            heading: '4. člen – Piškotki',
            blocks: [
              { p: 'Spletna stran uporablja piškotke in podobne tehnologije za zagotavljanje delovanja spletne strani ter, kjer je to relevantno, za analitiko in izboljšanje uporabniške izkušnje. Podrobne informacije o vrstah piškotkov, njihovem namenu, trajanju ter načinu upravljanja privolitev so na voljo v ločeni Politiki piškotkov, dostopni na spletni strani. Nenujne piškotke uporabljamo le na podlagi vaše predhodne privolitve, ki jo lahko kadarkoli umaknete prek nastavitev piškotkov na spletni strani.' },
            ],
          },
          {
            heading: '5. člen – Uporabniki osebnih podatkov in prenos podatkov',
            blocks: [
              { p: 'Vaših osebnih podatkov ne posredujemo tretjim nepooblaščenim osebam. Dostop do osebnih podatkov imajo lahko pogodbeni obdelovalci, ki za Upravljavca opravljajo posamezna opravila (npr. ponudnik gostovanja in izdelave spletne strani – Wix.com, ponudniki e-poštnih in IT storitev), in sicer izključno v obsegu, potrebnem za izvedbo pogodbenih storitev, na podlagi pisne pogodbe o obdelavi osebnih podatkov in v skladu s to Politiko zasebnosti.' },
              { p: 'Nekateri od navedenih ponudnikov imajo sedež ali strežnike zunaj Evropskega gospodarskega prostora (npr. v ZDA). V takih primerih Upravljavec zagotovi ustrezne zaščitne ukrepe v skladu s Poglavjem V GDPR (npr. standardne pogodbene klavzule Evropske komisije ali sklep o ustreznosti).' },
              { p: 'Osebne podatke lahko razkrijemo tudi pristojnim državnim organom, kadar je to potrebno zaradi izpolnitve zakonskih obveznosti ali za uveljavljanje, izvajanje oziroma obrambo pravnih zahtevkov.' },
            ],
          },
          {
            heading: '6. člen – Obdobje hrambe',
            blocks: [
              { p: 'Osebne podatke hranimo le toliko časa, kolikor je potrebno za dosego namena, za katerega so bili zbrani, oziroma kolikor to zahteva veljavna zakonodaja:' },
              {
                list: [
                  'podatki iz povpraševanj, na katera ni sledila sklenitev pogodbe: do 2 leti od zadnjega stika, razen če je za daljšo hrambo podana privolitev ali zakoniti interes;',
                  'podatki v zvezi s sklenjenimi pogodbami o opravljanju pravnih storitev: skladno z zakonskimi roki hrambe (npr. računovodski, davčni in protikorupcijski predpisi ter pravila poklicne etike), praviloma najmanj 5–10 let po zaključku zadeve;',
                  'podatki, obdelovani na podlagi privolitve (npr. za pošiljanje informacij o storitvah): do preklica privolitve;',
                  'podatki o uporabi spletne strani in piškotki: skladno z roki, navedenimi v Politiki piškotkov.',
                ],
              },
              { p: 'Po preteku roka hrambe Upravljavec osebne podatke trajno izbriše ali anonimizira.' },
            ],
          },
          {
            heading: '7. člen – Pravice posameznika',
            blocks: [
              { p: 'V skladu s Splošno uredbo imate kot posameznik, na katerega se nanašajo osebni podatki, naslednje pravice:' },
              {
                list: [
                  'pravico do dostopa do osebnih podatkov (člen 15 GDPR);',
                  'pravico do popravka netočnih podatkov (člen 16 GDPR);',
                  'pravico do izbrisa (“pravica do pozabe”), kadar so izpolnjeni pogoji iz člena 17 GDPR;',
                  'pravico do omejitve obdelave (člen 18 GDPR);',
                  'pravico do prenosljivosti podatkov (člen 20 GDPR);',
                  'pravico do ugovora obdelavi, ki temelji na zakonitem interesu Upravljavca, vključno z ugovorom neposrednemu trženju (člen 21 GDPR);',
                  'pravico do preklica privolitve kadarkoli, ne da bi to vplivalo na zakonitost obdelave pred preklicem;',
                  'pravico do vložitve pritožbe pri Informacijskem pooblaščencu Republike Slovenije (Dunajska cesta 22, 1000 Ljubljana, e-pošta: gp.ip@ip-rs.si), če menite, da obdelava vaših osebnih podatkov krši predpise o varstvu osebnih podatkov.',
                ],
              },
              { p: 'Zahtevo za uveljavljanje katere koli od navedenih pravic lahko naslovite na Upravljavca na elektronski naslov info@lemur.legal. Upravljavec bo na vašo zahtevo odgovoril brez nepotrebnega odlašanja in najpozneje v enem mesecu od prejema zahteve. Za potrebe zanesljive identifikacije lahko Upravljavec zahteva dodatne podatke.' },
            ],
          },
          {
            heading: '8. člen – Varnost podatkov',
            blocks: [
              { p: 'Upravljavec izvaja ustrezne tehnične in organizacijske ukrepe za zagotavljanje ravni varnosti osebnih podatkov, ki ustreza tveganju, vključno z omejitvijo dostopa do podatkov, uporabo varnih povezav ter rednim pregledom varnostnih ukrepov. V primeru kršitve varstva osebnih podatkov, ki bi lahko pomenila veliko tveganje za vaše pravice in svoboščine, vas bo Upravljavec o tem obvestil skladno z zahtevami GDPR.' },
            ],
          },
          {
            heading: '9. člen – Spremembe Politike zasebnosti',
            blocks: [
              { p: 'Upravljavec si pridržuje pravico, da to Politiko zasebnosti občasno posodobi zaradi sprememb zakonodaje ali načina poslovanja. Veljavna različica je vedno objavljena na spletni strani, datum zadnje spremembe pa naveden na koncu dokumenta. O bistvenih spremembah vas bomo, kjer je to primerno, obvestili tudi po elektronski pošti ali z obvestilom na spletni strani.' },
            ],
          },
          {
            heading: '10. člen – Kontakt',
            blocks: [
              { p: 'Za vsa vprašanja v zvezi s to Politiko zasebnosti ali obdelavo vaših osebnih podatkov nas kontaktirajte na: Lemur Legal d.o.o., Ciril-Metodov trg 14, 1000 Ljubljana, Slovenija, e-pošta: info@lemur.legal.' },
            ],
          },
        ],
      },
    ],
    closing:
      'Lemur Legal d.o.o. – Ljubljana, julij 2026. Ta različica nadomesti vse predhodne različice Splošnih pogojev uporabe in Politike zasebnosti, objavljene na spletni strani.',
  },
}

export default c
