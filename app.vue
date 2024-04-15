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

// useSeoMeta({
//   titleTemplate: `%s - ${seo?.siteName}`,
//   ogSiteName: seo?.siteName,
//   ogImage: 'https://docs-template.nuxt.dev/social-card.png',
//   twitterImage: 'https://docs-template.nuxt.dev/social-card.png',
//   twitterCard: 'summary_large_image'
// })

const links = [{
  label: 'Dodock',
  icon: 'i-heroicons-book-open',
  to: '/dodock'
}, {
  label: 'Dokos',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/dokos'
}]

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
