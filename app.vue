<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { seo } = useAppConfig()

const route = useRoute()

const { data: nav } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

const navigation = computed(() => {
  const root_elements = nav.value?.map(item => item._path) || []
  const match = root_elements.find((elem) =>
    route.path.startsWith(`${elem}`)
  )

  return nav.value?.find(item => item._path === `${match}`)?.children || []
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const guides = ['/dokos/cas-usage', '/dokos/tutoriels']
const setup = ['/dodock/installation', '/dodock/administration', '/dodock/fonctionnalites', '/dokos/parametrage']
const versions = ['/dokos/versions', '/dodock/versions']
const excluded_links = ['/dokos', '/dodock', '/dokos/comparaison-erpnext', '/dokos/integrations']

function get_links(items) {
  return items.map(item => {
    return {
      label: item.title,
      to: item._path,
      icon: item.icon
    }
  })
}

const dodock_children = nav.value?.find(item => item._path === `/dodock`)?.children
const dokos_children = nav.value?.find(item => item._path === `/dokos`)?.children
const all_children = (dokos_children.concat(dodock_children))
const integration_children = nav.value?.find(item => item._path === `/integrations`)?.children

const setup_links = get_links(all_children.filter(f => setup.includes(f._path)) || [])
const guides_links = get_links(all_children.filter(f => guides.includes(f._path)) || [])
const modules_links = get_links(dokos_children.filter(f => !setup.includes(f._path) &&!guides.includes(f._path) && !versions.includes(f._path) && !excluded_links.includes(f._path) && !f._path.endsWith('/api')) || [])
const integrations_links = get_links(integration_children.filter(f => f._path != '/integrations') || [])


useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: 'https://docs-template.nuxt.dev/social-card.png',
  twitterImage: 'https://docs-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})

const links = [
  {
    label: 'Démarrer',
    icon: 'i-heroicons-rocket-launch',
    children: setup_links
  },
  {
    label: 'Modules',
    icon: 'i-heroicons-swatch-20-solid',
    children: modules_links
  }, {
    label: 'Guides',
    icon: 'i-heroicons-book-open',
    children: guides_links
  },
  {
    label: 'Intégrations',
    icon: 'i-heroicons-arrows-pointing-in-20-solid',
    children: integrations_links
  }
]

provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <Header :links="links" />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
