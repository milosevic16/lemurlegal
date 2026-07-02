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
      contact: 'Contact',
    },
    status: 'EU · OPEN FOR MATTERS',
    footer: {
      blurb:
        'Specialist law for crypto, fintech, startups, deep tech & dual-use. Lemur Legal d.o.o. · Ljubljana, Slovenia',
      address: 'Ciril-Metodov trg 14, 1000 Ljubljana',
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
      startups: 'Zagonska podjetja',
      defence: 'Obramba in dvojna raba',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    status: 'EU · ODPRTI ZA NOVE ZADEVE',
    footer: {
      blurb:
        'Specializirano pravo za kripto, fintech, zagonska podjetja, napredno tehnologijo in dvojno rabo. Lemur Legal d.o.o. · Ljubljana, Slovenija',
      address: 'Ciril-Metodov trg 14, 1000 Ljubljana',
      cols: {
        crypto: {
          heading: 'Kripto in fintech',
          links: ['Beli papir MiCA', 'Pravno mnenje s področja kripta', 'Regulativna skladnost'],
        },
        startups: {
          heading: 'Zagonska podjetja in napredna tehnologija',
          links: ['Ustanovitev podjetja in ESOP', 'Zaščita intelektualne lastnine', 'Pogodbe in gospodarsko pravo'],
        },
        defence: {
          heading: 'Obramba in dvojna raba',
          links: ['Regulativna opredelitev', 'Pregled pripravljenosti na investicije', 'Okviri skladnosti'],
        },
      },
      // TODO(sl-review): "Pogoji uporabe in politika zasebnosti" machine-translated (not in docx)
      legal: { terms: 'Pogoji uporabe in politika zasebnosti' },
      copyright: '© 2026 Lemur Legal d.o.o.',
      strap: 'Fintech Factory — praksa za kripto in fintech pri Lemur Legal',
      socialAria: 'Lemur Legal na LinkedInu', // TODO(sl-review)
    },
  },
}

export default chrome
