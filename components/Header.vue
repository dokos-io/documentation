<template>
  <UHeader
    :links="links" :class="{
      'border-primary-200/75 dark:border-primary-900/50': $route.path === '/',
      'border-gray-200 dark:border-gray-800': $route.path !== '/'
    }"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-end gap-2 font-bold text-xl text-gray-900 dark:text-white" aria-label="Dokos">
        <Logo class="w-auto h-6" />

        <UBadge label="Documentation" variant="subtle" size="xs" class="-mb-[2px] rounded font-semibold" />
      </NuxtLink>
    </template>

    <template #right>
      <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']" :popper="{ strategy: 'absolute' }">
        <UContentSearchButton :label="null" />
      </UTooltip>

      <UColorModeButton />

      <UButton
        to="https://gitlab.com/dokos" target="_blank" icon="i-simple-icons-gitlab" aria-label="Gitlab"
        v-bind="($ui.button.secondary as any)"
      />
    </template>

    <template #panel>
      <template v-for="(links_group, index) of mobile_links" :key="index">
        <UAsideLinks :links="links_group" />
        <UDivider type="dashed" class="my-4" />
      </template>

      <!-- <UNavigationTree :links="mapContentNavigation(navigation)" :multiple="false" default-open /> -->
    </template>
  </UHeader>
</template>

<script setup lang="ts">
// import type { NavItem } from '@nuxt/content/dist/runtime/types'
import type { HeaderLink } from '#ui-pro/types'

const props = defineProps<{
  links: HeaderLink[]
}>()


const mobile_links = props.links.map(l => l.children)
const { metaSymbol } = useShortcuts()

// const nav = inject<Ref<NavItem[]>>('navigation')
// const navigation = nav.value

</script>