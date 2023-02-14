<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: String,
  href: {
    type: String,
    required: true,
  },
  currentPageId: {
    type: String,
    required: true,
  },
})
const active = ref(props.currentPageId.includes(props.title))
</script>

<template>
  <NuxtLink
      :to="href"
      class="pb-1 pt-1 px-3"
  >
    <div class="sub-navbar-link">
      <div class="hidden-sm">
        <Icon :name="icon" />
      </div>
      <span>
        {{title}}
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
  '.sub-navbar-link': {
    'text-align': 'center',
    'align-items': 'center',
    gap: '0.35rem',
    display: 'flex'
  },
  '.hidden-sm': {
    'display': 'none',
    '@lg': {
      display: 'block'
    }
  },
  '.pb-1': {
    'padding-bottom': '0.375rem'
  },
  '.pt-1': {
    'padding-top': '0.5rem'
  },
  '.px-3': {
    'padding-left': '0.75rem',
    'padding-right': '0.75rem'
  },
  '.router-link-exact-active': {
    'background-color': '#6195FF',
    'color': '#fff',
    'border-radius': '0.375rem'
  }
})
</style>