<template>
  <IconLink :href="href" target="_blank" class="demo-link" :icon="icon">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </IconLink>
</template>

<style>

</style>

<script setup>
const props = defineProps({
  doctype: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: ''
  },
  demo: {
    type: String,
    default: 'Dokompany' // or Mappemonde
  },
  showTour: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: 'i-material-symbols-description-outline'
  },
})

const root = props.demo == "Dokompany" ? "https://demo.dokos.cloud" : "https://tierslieux.dokos.io"

const hrefPath = [root]
const hrefQuery = props.showTour ? "?show_tour=true" : ""

if (props.doctype) {
  hrefPath.push(
    "app",
    props.doctype.replace(/ /g, "-").toLowerCase()
  )
}

if (props.path) {
  hrefPath.push(
    props.path.replace(/^\/+|\/+$/g, "")
  )
}

const href = hrefPath.filter(Boolean).join("/") + hrefQuery
</script>