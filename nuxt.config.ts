// https://nuxt.com/docs/getting-started/deployment#static-hosting

const translations = {
  button: {
    buttonText: 'Recherche',
    buttonAriaLabel: 'Recherche',
  },
  modal: {
    searchBox: {
      resetButtonTitle: 'Clear the query',
      resetButtonAriaLabel: 'Clear the query',
      cancelButtonText: 'Cancel',
      cancelButtonAriaLabel: 'Cancel',
    },
    startScreen: {
      recentSearchesTitle: 'Recherches récentes',
      noRecentSearchesText: 'Aucune recherche récente',
      saveRecentSearchButtonTitle: 'Save this search',
      removeRecentSearchButtonTitle: 'Remove this search from history',
      favoriteSearchesTitle: 'Favorite',
      removeFavoriteSearchButtonTitle: 'Remove this search from favorites',
    },
    errorScreen: {
      titleText: 'Unable to fetch results',
      helpText: 'You might want to check your network connection.',
    },
    footer: {
      selectText: 'pour sélectionner',
      selectKeyAriaLabel: 'Enter key',
      navigateText: 'pour naviguer',
      navigateUpKeyAriaLabel: 'Arrow up',
      navigateDownKeyAriaLabel: 'Arrow down',
      closeText: 'pour fermer',
      closeKeyAriaLabel: 'Escape key',
      searchByText: 'Recherche proposée par',
    },
    noResultsScreen: {
      noResultsText: 'Aucun résultat pour',
      suggestedQueryText: 'Try searching for',
      reportMissingResultsText: 'Believe this query should return results?',
      reportMissingResultsLinkText: 'Let us know.',
    },
  },
};

export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxt/content',
    'nuxt-link-checker',
  ],
  extends: '@nuxt-themes/docus',
  content: {
    sources: [],
    highlight: {
      preload: ['xml', 'python']
    },
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  css: [
    '~/assets/style/main.css',
  ],
  nitro: {
    preset: "netlify",
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ]
    }
  },
  linkChecker: {
    failOn404: false,
    exclude: [],
  },
  runtimeConfig: {
    public: {
      algolia: {
        applicationId: process.env.DOCSEARCH_APP_ID,
        apiKey: process.env.DOCSEARCH_API_KEY,
        langAttribute: 'lang',
        translations: translations,
        placeholder: "Rechercher un article",
        docSearch: {
          indexName: 'dokos',
        }
      }
    }
  },
  experimental: {
    payloadExtraction: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            const lid = id.toLowerCase();
            if (lid.includes('prose')) {
              return 'manualChunk_prose';
            }
            if (lid.includes('markdown')) {
              return 'manualChunk_markdown';
            }
            // if (["mindmap", "diagram", "mermaid", "flow", "edges"].some((s) => lid.includes(s))) {
            //   return 'manualChunk_mermaid';
            // }
          },
        },
      },
    },
  },
})
