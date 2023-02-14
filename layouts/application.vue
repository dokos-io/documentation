<script setup lang="ts">
import ApplicationBar from "~~/components/docs/ApplicationBar.vue";
const { page } = useContent()
</script>

<template>
  <div>
    <div class="application-navbar">
      <ApplicationBar :current-page-id="page._id" />
    </div>
    <div class="application-navbar-height" />
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>
  </div>
</template>

<style scoped lang="ts">
css({
  '.application-navbar': {
    display: 'none',
    '@md': {
      display: 'flex',
    }
  },
  '.application-navbar-height': {
    height: '60px'
  }
})
</style>