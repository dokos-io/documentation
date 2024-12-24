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
    search: false,
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
    links: []
  },
  toc: {
    title: 'Table des matières',
    bottom: {
      title: 'Communauté',
      edit: 'https://gitlab.com/dokos/documentation/-/blob/main/content',
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
