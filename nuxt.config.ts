// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    'nuxt-og-image'
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach((c) => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons', 'mdi', 'vaadin', 'uil', 'carbon', 'material-symbols', 'fluent', 'eos-icons', 'ri', 'icon-park-outline', 'ep', 'clarity', 'fontisto', 'ic', 'codicon', 'octicon', 'feather', 'logos', 'healthicons']
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  content: {
    highlight: {
      preload: ['xml', 'python', 'jinja']
    },
    locales: ['fr'],
    defaultLocale: 'fr',
  },
})
