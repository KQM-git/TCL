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
          const match = routePath.match(/^\/characters\/[a-z]+\/(.+)$/);

          if (match) {
            const char = match[1];
            // console.log(`Adding alias from ${char} to ${routePath}`);
            if (char.startsWith('traveler-'))
              return [`/${char}`, `/${char.replace('traveler-', '')[0]}mc`];
            return [`/${char}`];
          }

          return [];
        },
        redirects: [
          { from: '/damage', to: '/combat-mechanics/damage/damage-formula' },
          { from: '/egt', to: '/combat-mechanics/elemental-effects/elemental-gauge-theory' },
          { from: '/srp', to: '/combat-mechanics/elemental-effects/simultaneous-reaction-priority' },
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
          showLastUpdateTime: true,
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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'KQM TCL',
        logo: {
          alt: 'KeqingMains Logo',
          src: 'img/logo.webp',
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
    }),
};

module.exports = config;
