import type { Bilingual, ChromeContent } from './types'

// Shared chrome (Masthead + Footer). SL from the Home/Contact translation docx;
// strings marked TODO(sl-review) are machine-translated gaps (Phase-B footer
// additions the docx predates) awaiting Peter's review.
const chrome: Bilingual<ChromeContent> = {
  en: {
    nav: {
      crypto: 'Crypto & Fintech',
      startups: 'Startups & Deep Tech',
      defence: 'Defence & Dual Use',
      blog: 'Blog',
      media: 'Media Coverage',
      contact: 'Contact',
    },
    footer: {
      blurb: 'Law for crypto, fintech, startup, deep tech, defence & dual-use',
      org: 'Lemur Legal, d.o.o.',
      street: 'Ciril-Metodov trg 14',
      city: 'Ljubljana, Slovenia',
      cols: {
        crypto: {
          heading: 'Crypto & Fintech',
          links: ['MiCA White Paper', 'Crypto Legal Opinion', 'Regulatory compliance'],
        },
        startups: {
          heading: 'Startups & Deep Tech',
          links: ['Incorporation & ESOP', 'IP Protection', 'Contracts & Commercial'],
        },
        defence: {
          heading: 'Defence & Dual-Use',
          links: ['Regulatory Qualification', 'Investment Readiness Review', 'Compliance Frameworks'],
        },
      },
      legal: { terms: 'Terms of Use and Privacy Policy' },
      copyright: '© 2026 Lemur Legal d.o.o.',
      strap: 'Fintech Factory — crypto & fintech practice by Lemur Legal',
      socialAria: 'Lemur Legal on LinkedIn',
    },
  },
  sl: {
    nav: {
      crypto: 'Kripto in fintech',
      startups: 'Startup in deep tech',
      defence: 'Obramba in dvojna raba',
      blog: 'Blog',
      media: 'V medijih',
      contact: 'Kontakt',
    },
    footer: {
      blurb: 'Specializirana pravna pisarna za kripto, fintech, startup, deep tech, defence in dual-use podjetja.',
      org: 'Lemur Legal, d.o.o.',
      street: 'Ciril-Metodov trg 14',
      city: 'Ljubljana, Slovenija',
      cols: {
        crypto: {
          heading: 'Kripto in fintech',
          links: ['MiCA white paper (bela knjiga)', 'Pravno mnenje za kripto projekt', 'Regulatorna skladnost'],
        },
        startups: {
          heading: 'Startup in deep tech',
          links: ['Ustanovitev podjetja in ESOP', 'Zaščita intelektualne lastnine', 'Pogodbe in gospodarsko pravo'],
        },
        defence: {
          heading: 'Defence in dual-use',
          // Order is positional (Footer.vue binds hrefs by index): [0] Regulatory
          // Qualification, [1] Investment Readiness, [2] Compliance Frameworks.
          links: ['Regulativna opredelitev tehnologije', 'Pregled investicijske pripravljenosti', 'Vzpostavitev okvirov skladnosti'],
        },
      },
      legal: { terms: 'Pogoji uporabe in politika zasebnosti' },
      copyright: '© 2026 Lemur Legal d.o.o.',
      strap: 'Fintech Factory — praksa za kripto in fintech pri Lemur Legal',
      socialAria: 'Lemur Legal na LinkedInu', // TODO(sl-review)
    },
  },
}

export default chrome
