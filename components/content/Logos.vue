<template>
    <ULandingLogos :title="title" align="center" :ui="{wrapper: 'text-left', images: 'justify-start'}">
        <UIcon :name="logo" v-for="(logo, index) in logos" :key="index" class="w-10 h-10 flex-shrink-0" />
    </ULandingLogos>
  </template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  logos: {
    type: Array,
    default: []
  },
})
</script>