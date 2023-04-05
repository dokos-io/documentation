// https://nuxt.com/docs/getting-started/deployment#static-hosting
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
      preload: ['xml']
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
    exclude: [
      '/applications'
    ],
  },
  runtimeConfig: {
    public: {
      algolia: {
        applicationId: process.env.DOCSEARCH_APP_ID,
        apiKey: process.env.DOCSEARCH_API_KEY,
        langAttribute: 'lang',
        docSearch: {
          indexName: 'dokos'
        }
      }
    }
  }
})
