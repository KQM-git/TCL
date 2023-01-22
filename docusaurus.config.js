// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KQM TCL',
  tagline: 'KeqingMains\'s Theorycrafting Library',
  url: 'https://library.keqingmains.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'client-redirects',
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        createRedirects(routePath) {
          const charMatch = routePath.match(/^(\/characters\/[a-z]+\/)(.+)$/);

          if (charMatch) {
            const char = charMatch[2];
            // console.log(`Adding alias from ${char} to ${routePath}`);
            if (char.startsWith('traveler-')) {
              const elemental = `${char.replace('traveler-', '')[0]}mc`
              return [`/${char}`, `/characters/${char}`, `/${elemental}`, `/characters/${elemental}`, `${charMatch[1]}/traveler`];
            }
            return [`/${char}`, `/characters/${char}`];
          }

          const evidenceMatch = routePath.match(/^(\/evidence\/characters\/[a-z]+\/)(.+)$/);
          if (evidenceMatch) {
            const char = evidenceMatch[2];
            // console.log(`Adding evidence alias from ${char} to ${routePath}`);
            if (char.startsWith('traveler-')) {
              const elemental = `${char.replace('traveler-', '')[0]}mc`
              return [`/evidence/characters/${elemental}`, `/evidence/characters/${char}`, `${evidenceMatch[1]}/${elemental}`, `${evidenceMatch[1]}/traveler`];
            }
            return [`/evidence/characters/${char}`];
          }

          return [];
        },
        redirects: [
          { from: '/damage', to: '/combat-mechanics/damage/damage-formula' },
          { from: '/egt', to: '/combat-mechanics/elemental-effects/elemental-gauge-theory' },
          { from: '/srp', to: '/combat-mechanics/elemental-effects/simultaneous-reaction-priority' },
          { from: ['/icd', '/combat-mechanics/elemental-effects/internal-cooldown-of-elemental-application'], to: '/combat-mechanics/internal-cooldown' },

          // Extra character page redirects
          { from: ['/heizou', '/characters/anemo/heizou'], to: '/characters/anemo/shikanoin-heizou' },
          { from: '/evidence/characters/anemo/heizou', to: '/evidence/characters/anemo/shikanoin-heizou' },

          { from: ['/kazuha', '/characters/anemo/kazuha'], to: '/characters/anemo/kaedehara-kazuha' },
          { from: '/evidence/characters/anemo/kazuha', to: '/evidence/characters/anemo/kaedehara-kazuha' },

          { from: ['/ayaka', '/characters/cryo/ayaka'], to: '/characters/cryo/kamisato-ayaka' },
          { from: '/evidence/characters/cryo/ayaka', to: '/evidence/characters/cryo/kamisato-ayaka' },

          { from: ['/raiden', '/characters/electro/raiden'], to: '/characters/electro/raiden-shogun' },
          { from: '/evidence/characters/electro/raiden', to: '/evidence/characters/electro/raiden-shogun' },

          { from: ['/sara', '/characters/electro/sara'], to: '/characters/electro/kujou-sara' },
          { from: '/evidence/characters/electro/sara', to: '/evidence/characters/electro/kujou-sara' },

          { from: ['/yae', '/characters/electro/yae'], to: '/characters/electro/yae-miko' },
          { from: '/evidence/characters/electro/yae', to: '/characters/electro/yae-miko' },

          { from: ['/shinobu', '/characters/electro/shinobu', '/kuki', '/characters/electro/kuki'], to: '/characters/electro/kuki-shinobu' },
          { from: ['/evidence/characters/electro/shinobu', '/evidence/characters/electro/kuki'], to: '/evidence/characters/electro/kuki-shinobu' },

          { from: ['/itto', '/characters/geo/itto'], to: '/characters/geo/arataki-itto' },
          { from: '/evidence/characters/geo/itto', to: '/evidence/characters/geo/arataki-itto' },

          { from: ['/yunjin', '/characters/geo/yunjin'], to: '/characters/geo/yun-jin' },
          { from: '/evidence/characters/geo/yunjin', to: '/evidence/characters/geo/yun-jin' },

          { from: ['/ayato', '/characters/hydro/ayato'], to: '/characters/hydro/kamisato-ayato' },
          { from: '/evidence/characters/hydro/ayato', to: '/evidence/characters/hydro/kamisato-ayato' },

          { from: ['/kokomi', '/characters/hydro/kokomi'], to: '/characters/hydro/sangonomiya-kokomi' },
          { from: '/evidence/characters/hydro/kokomi', to: '/evidence/characters/hydro/sangonomiya-kokomi' },

          { from: ['/hutao', '/characters/pyro/hutao'], to: '/characters/pyro/hu-tao' },
          { from: '/evidence/characters/pyro/hutao', to: '/evidence/characters/pyro/hu-tao' },
        ]
      }),
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 960,
        min: 640,
        steps: 2,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/KQM-git/TCL/blob/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          routeBasePath: '/newsletter',
          blogTitle: 'Newsletter',
          path: 'newsletter',
          editUrl: 'https://github.com/KQM-git/TCL/blob/master/',
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-117136430-6'
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'KQM TCL',
        logo: {
          alt: 'KeqingMains Logo',
          src: 'img/logo.webp',
          width: 40,
          height: 32
        },
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: 'Home',
          },
          {
            to: 'newsletter',
            position: 'left',
            label: 'Newsletter',
          },

          {
            href: 'https://keqingmains.com/',
            label: 'KeqingMains',
            position: 'right',
          },
          {
            href: 'https://github.com/KQM-git/TCL/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/keqing',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'TC Library',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Characters',
                to: '/characters',
              },
              {
                label: 'Equipment',
                to: '/equipment',
              },
              {
                label: 'Newsletter',
                to: '/newsletter',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/KQM-git/TCL/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'KQM',
                href: 'https://keqingmains.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/keqing',
              },
            ],
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      typesense: {
        typesenseCollectionName: 'tcl',
        typesenseServerConfig: {
          nodes: [{
            host: 'library-search.keqingmains.com',
            port: 443,
            protocol: 'https'
          }],
          apiKey: 'VXstnBtIuOWIUb1VRaY6hKcdWv47QzBK'
        }
      }
    }),
};

module.exports = config;
