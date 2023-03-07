<script setup lang="ts">
import ApplicationBarLink from "~~/components/docs/ApplicationBarLink.vue";
const props = defineProps({
  currentPageId: String,
})
//flex items-center gap-2
</script>

<template>
  <div
      class="sub-navbar"
      style="backdrop-filter: var(--elements-backdrop-filter)"
  >
    <div class="sub-navbar-links">
      <ApplicationBarLink
          title="Intégrations"
          icon="mdi:connection"
          href="/integrations"
          :current-page-id="currentPageId"
      />
      <ApplicationBarLink
          title="Fédération de lieux"
          icon="material-symbols:add-location-alt-outline"
          href="/federation-lieux"
          :current-page-id="currentPageId"
      />
      <ApplicationBarLink
          title="Maia"
          icon="healthicons:doctor-female-outline"
          href="/maia"
          :current-page-id="currentPageId"
      />
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.sub-navbar': {
    width: '100%',
    display: 'grid',
    position: 'fixed',
    'place-items': 'center',
    'z-index': '10',
    'padding': '0.4rem 0',
    'border-bottom': '1px solid {elements.backdrop.background}',
    '@dark': {
      'background-color': 'transparent',
    }
  },
  '.sub-navbar-links': {
    display: 'flex',
    'align-items': 'center',
    gap: '0.5rem'
  },
})
</style>
