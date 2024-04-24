<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UContentSearchButton label="Rechercher..." class="mb-5"/>
          <UNavigationTree :links="mapContentNavigation(navigation)" :multiple="false" default-open="false"/>
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
