export default defineAppConfig({
    docus: {
      title: 'Dokos Documentation',
      description: 'Develop applications on Dodock framework and enhance your Dokos usage.',
      layout: {
        fluid: true
      },
      image: 'https://content.nuxtjs.org/preview.png',
      url: 'https://content.nuxtjs.org',
      debug: false,
      socials: {
        twitter: '@dokos_io',
        linkedin: 'https://www.linkedin.com/company/dokos.io',
        gitlab: {
          label: "Gitlab",
          icon: "ph:gitlab-logo",
          href: "https://gitlab.com/dokos"
        }
      },
      cover: {
        src: '/cover.jpg',
        alt: 'Dodock made easy for power users and developers'
      },
      aside: {
        level: 1,
        collapsed: true,
      },
      header: {
        title: false,
        logo: true,
      },
      footer: {
        credits: {
          text: 'Propulsé par Docus / CC-BY-SA 3.0'
        }
      }
    }
  })