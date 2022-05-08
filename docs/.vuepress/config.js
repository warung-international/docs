const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
    lang: 'en-US',
    title: 'Peradaban',
    description: 'Proprietary bot for the Discord server of the Warung International.',
    theme: defaultTheme({
        logo: '/hero.png',
        repo: 'warung-international/docs',
        docsBranch: 'master',
        docsDir: 'docs',
        navbar: [
            // NavbarItem
            {
              text: 'Introduction',
              link: '/guide/introduction',
            },
            // NavbarItem
            {
                text: 'Commands',
                link: '/guide/commands',
              },
          ],
    }),
    plugins: [
        docsearchPlugin({
            appId: '2R49JO3IMP',
            apiKey: 'cd47d4f87f4efc86fa4c440fccb19151',
            indexName: 'docs',
        }),
    ],
}