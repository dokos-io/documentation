export default defineAppConfig({
    docus: {
      title: 'Dokos Documentation',
      description: 'Develop applications on Dodock framework and enhance your Dokos usage.',
      image: 'https://content.nuxtjs.org/preview.png',
      url: 'https://content.nuxtjs.org',
      debug: false,
      socials: {
        twitter: '@dokos_io',
        linkedin: {
          label: "LinkedIn",
          icon: "mdi:linkedin",
          href: "https://www.linkedin.com/company/dokos.io"
        },
        gitlab: {
          label: "Gitlab",
          icon: "mdi:gitlab",
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
        fluid: true
      },
      main: {
        padded: true,
        fluid: true
      },
      footer: {
        credits: {
          text: 'Propulsé par Docus / CC-BY-SA 3.0'
        }
      }
    }
  })