<template>
  <DemoLink class="tour-link" :doctype="doctype" :demo="demo" icon="material-symbols:quick-reference-all-outline" show-tour :underline="false">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </DemoLink>
</template>

<script setup>
const props = defineProps({
  doctype: {
    type: String,
    default: ''
  },
  demo: {
    type: String,
    default: 'Dokompany' // or Mappemonde
  },
})
</script>

<style scoped lang="ts">
css({
  '.tour-link': {
    display: 'inline-flex',
    lineHeight: '1',
    gap: '0.2rem',
    padding: '0.4rem 0.4rem',
    borderRadius: '4px',
    color: '#000',
    backgroundColor: 'rgb(209, 250, 229)',
    border: '1px solid rgb(52, 211, 153)',
    transition: 'all 0.2s ease',
    '&:hover': {
      boxShadow: '0 0 0 1px rgb(52, 211, 153)',
    },
  },
})
</style>