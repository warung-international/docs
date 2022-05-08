new Crawler({
  appId: '2R49JO3IMP',
  apiKey: 'cd47d4f87f4efc86fa4c440fccb19151',
  rateLimit: 8,
  startUrls: [
    // These are urls which algolia start to craw
    // If your site is divided in to mutiple parts,
    // you may want to set mutiple entry links
    'https://docs.warunginternational.eu.org/',
  ],
  ignoreCanonicalTo: false,
  exclusionPatterns: [
    // You can use this to stop algolia crawing some paths
  ],
  discoveryPatterns: [
    // These are urls which algolia looking for,
    'https://docs.warunginternational.eu.org/**',
  ],
  // Crawler schedule, set it according to your docs update frequency
  schedule: 'at 02:00 every 1 day',
  actions: [
    // you may have mutiple actions, especially when you are deploying mutiple docs under one domain
    {
      // name the index with name you like
      indexName: 'docs',
      // paths where the index take effect
      pathsToMatch: ['https://docs.warunginternational.eu.org/**'],
      // controls how algolia extracts records from your site
      recordExtractor: ({ $, helpers }) => {
        // options for @vuepress/theme-default
        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: '.sidebar-heading.active',
              defaultValue: 'Documentation',
            },
            lvl1: '.theme-default-content h1',
            lvl2: '.theme-default-content h2',
            lvl3: '.theme-default-content h3',
            lvl4: '.theme-default-content h4',
            lvl5: '.theme-default-content h5',
            lvl6: '.theme-default-content h6',
            content: '.theme-default-content p, .theme-default-content li',
          },
          indexHeadings: true,
        })
      },
    },
  ],
  initialIndexSettings: {
    // controls how index are initialized
    // only has effects before index are initialize
    // you may need to delete your index and recraw after modification
    docs: {
      attributesForFaceting: ['type'],
      attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
      attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
      searchableAttributes: [
        'unordered(hierarchy_radio_camel.lvl0)',
        'unordered(hierarchy_radio.lvl0)',
        'unordered(hierarchy_radio_camel.lvl1)',
        'unordered(hierarchy_radio.lvl1)',
        'unordered(hierarchy_radio_camel.lvl2)',
        'unordered(hierarchy_radio.lvl2)',
        'unordered(hierarchy_radio_camel.lvl3)',
        'unordered(hierarchy_radio.lvl3)',
        'unordered(hierarchy_radio_camel.lvl4)',
        'unordered(hierarchy_radio.lvl4)',
        'unordered(hierarchy_radio_camel.lvl5)',
        'unordered(hierarchy_radio.lvl5)',
        'unordered(hierarchy_radio_camel.lvl6)',
        'unordered(hierarchy_radio.lvl6)',
        'unordered(hierarchy_camel.lvl0)',
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy_camel.lvl1)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy_camel.lvl2)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy_camel.lvl3)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy_camel.lvl4)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy_camel.lvl5)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy_camel.lvl6)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
    },
  },
})