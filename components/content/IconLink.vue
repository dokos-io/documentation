<template>
  <NuxtLink prefetch :to="href" :target="target" class="icon-link" :class="{ 'icon-link--underline': underline }">
    <Icon :name="icon" />
    <span class="icon-link__text">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  doctype: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  showTour: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: 'i-material-symbols-link'
  },
  target: {
    type: String,
    default: ''
  },
  underline: {
    type: Boolean,
    default: true
  }
})
</script>

<!-- <style scoped lang="ts">
css({
  '.icon-link': {
    display: 'inline-flex',
    lineHeight: '1.1',
    gap: '0.2rem',
    padding: '0.4rem 0.4rem',
    borderRadius: '4px',
    '&.icon-link--underline .icon-link__text': {
      display: 'inline-block',
      textDecoration: 'underline',
      textUnderlineOffset: '0.25rem',
      '&:hover': {
        textDecorationThickness: '2px',
      },
    }
  },
})
</style> -->