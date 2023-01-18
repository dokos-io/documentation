<template>
    <button @click="showTour">
        <ContentSlot :use="$slots.default" unwrap="p" />
    </button>
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

const demo_link = props.demo == "Dokompany" ? "https://demo.dokos.cloud" : "https://tierslieux.dokos.io"

const showTour = () => window.open(`${demo_link}/app/${props.doctype.replace(/ /g, "-").toLowerCase()}?show_tour=true`, '_blank');

</script>

<style scoped lang="ts">
css({
  'button': {
    padding: '.4rem',
    borderRadius: '4px',
    color: '#000',
    backgroundColor: 'rgb(209, 250, 229)',
    border: '1px solid rgb(52, 211, 153)'
  },
})
</style>