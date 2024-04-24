<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')

const links = [
  {
    label: 'Dodock',
    icon: ' i-carbon-container-software',
    to: '/dodock'
  }, {
    label: 'Dokos',
    icon: 'i-ic-twotone-area-chart',
    to: '/dokos'
  },
  {
    label: 'Integrations',
    icon: 'i-mdi-connection',
    to: '/integrations'
  }
]

const pageLinks = [{
  icon: 'i-heroicons-heart',
  label: 'Contribuer au projet',
  to: '/dodock/contribuer',
}]

</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside :links="links">
          <UContentSearchButton label="Rechercher..." class="mb-5"/>
          <UNavigationTree :links="mapContentNavigation(navigation)" :multiple="false" default-open="false"/>

          <template #bottom>
            <UDivider type="dashed" class="my-6" />

            <UPageLinks :links="pageLinks" />
          </template>
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
