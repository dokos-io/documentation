export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Dokos - Documentation',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-gitlab',
      to: 'https://gitlab.com/dokos',
      target: '_blank',
      'aria-label': 'Documentation on Gitlab'
    }]
  },
  footer: {
    credits: `CC-BY-SA 3.0`,
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-nuxtdotjs',
      to: 'https://nuxt.com',
      target: '_blank',
      'aria-label': 'Nuxt Website'
    }, {
      icon: 'i-simple-icons-discord',
      to: 'https://discord.com/invite/ps2h6QT',
      target: '_blank',
      'aria-label': 'Nuxt UI on Discord'
    }, {
      icon: 'i-simple-icons-x',
      to: 'https://x.com/nuxt_js',
      target: '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  },
  toc: {
    title: 'Table des matières',
    bottom: {
      title: 'Communauté',
      edit: 'https://gitlab.com/dokos/documentation',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Suivre sur Gitlab',
        to: 'https://gitlab.com/dokos',
        target: '_blank',
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Le Forum',
        to: 'https://community.dokos.io',
        target: '_blank',
      }, {
        icon: 'i-heroicons-cloud',
        label: 'Hébergement',
        to: 'https://dokos.io',
        target: '_blank',
      }]
    }
  },
  colorMode: {
    preference: 'dark'
  }
})
