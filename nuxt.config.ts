// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  extends: '@nuxt-themes/docus',
  colorMode: {
    preference: 'dark'
  },
  content: {
    sources: [],
    highlight: {
      preload: ['xml']
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/',
      ]
    }
  },
})
