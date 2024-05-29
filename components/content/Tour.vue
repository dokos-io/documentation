<template>
  <DemoLink class="tour-link" :doctype="doctype" :demo="demo" icon="i-material-symbols-quick-reference-all-outline" show-tour :underline="false">
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

<style scoped>

.tour-link {
    display: inline-flex;
    line-height: 1;
    gap: 0.2rem;
    padding: 0.4rem 0.4rem;
    border-radius: 4px;
    color: #00bd6f;
    background-color: rgb(209, 250, 229);
    border: 1px solid rgb(52, 211, 153);
    transition: all 0.2s ease;
}

.tour-link:hover {
  box-shadow: 0 0 0 1px rgb(52, 211, 153);
}

.dark .tour-link {
    color: #fff;
    background-color: rgb(52, 211, 153);
  }
</style>