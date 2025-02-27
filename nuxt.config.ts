// https://nuxt.com/docs/api/configuration/nuxt-config
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
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/fonts', '@nuxthq/studio', 'nuxt-og-image', '@nuxtjs/algolia'],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi', 'vaadin', 'uil', 'carbon', 'material-symbols', 'fluent', 'eos-icons', 'ri', 'icon-park-outline', 'ep', 'clarity', 'fontisto', 'ic', 'codicon', 'octicon', 'feather', 'logos', 'healthicons', 'gg', 'iconoir', 'system-uicons', 'fa6-solid', 'fa6-brands', 'cib', 'devicon-plain']
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  content: {
    highlight: {
      preload: ['xml', 'python', 'jinja', 'perl']
    },
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  algolia: {
    apiKey: process.env.DOCSEARCH_API_KEY,
    applicationId: process.env.DOCSEARCH_APP_ID,
    // DocSearch key is used to configure DocSearch extension.
    docSearch: process.env.DISABLE_DOCSEARCH ? false: {
      indexName: 'dokos',
      placeholder: "Rechercher un article",
      translations: translations,
      langAttribute: 'lang',
    },
  }
})