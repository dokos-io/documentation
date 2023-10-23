export default defineAppConfig({
    docus: {
      title: 'Dokos Documentation',
      description: 'Dokos ecosystem documentation.',
      image: 'https://doc.dokos.io/preview.png',
      url: 'https://doc.dokos.io',
      debug: false,
      socials: {
        gitlab: {
          label: "Gitlab",
          icon: "mdi:gitlab",
          href: "https://gitlab.com/dokos"
        },
        discourse: {
          label: "Forum",
          icon: "bxl:discourse",
          href: "https://community.dokos.io"
        },
        youtube: {
          label: "Vidéos",
          icon: "mdi:youtube",
          href: "https://www.youtube.com/@dokos_io"
        }
      },
      cover: {
        src: '/cover.jpg',
        alt: 'Dodock made easy for power users and developers'
      },
      aside: {
        level: 1,
        collapsed: true,
        exclude: ['/applications']
      },
      header: {
        title: false,
        logo: true,
        fluid: true,
        showLinkIcon: true,
        exclude: ['/federation-lieux', '/toobibpro']
      },
      main: {
        padded: true,
        fluid: true
      },
      footer: {
        credits: {
          text: 'Propulsé par Docus / CC-BY-SA 3.0'
        },
        textLinks: [
          {
            text: 'Contribuer',
            href: '/dodock/contribuer',
            target: '_blank'
          },
          {
            text: 'Hébergement et Services',
            href: 'https://dokos.io',
            target: '_blank'
          }
        ]
      },
      gitlab: {
        edit: true,
        owner: 'dokos',
        repo: 'documentation',
        branch: 'main'
      }
    }
  })