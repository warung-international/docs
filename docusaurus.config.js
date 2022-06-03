// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Peradaban',
  tagline: 'Peradaban Documentations',
  url: 'https://docs.warunginternational.eu.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hero.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'warung-international', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/warung-international/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Peradaban',
        logo: {
          alt: 'Peradaban Logo',
          src: 'img/hero.png',
        },
        items: [
          {
            href: 'https://warunginternational.eu.org',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://warunginternational.eu.org/discord-leaderboard',
            label: 'Leaderboards',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'hello',
            position: 'right',
            label: 'Documentations',
          },
          {
            href: 'https://github.com/warung-international/peradaban',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Warung International. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '2R49JO3IMP',
  
        // Public API key: it is safe to commit it
        apiKey: '7db6048804d5d1b575dc8610bfba9475',
  
        indexName: 'docs',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
