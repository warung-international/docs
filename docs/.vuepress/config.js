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
            apiKey: '7db6048804d5d1b575dc8610bfba9475',
            indexName: 'docs',
        }),
    ],
}