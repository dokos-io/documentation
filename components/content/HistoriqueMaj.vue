<script setup>
const props = defineProps({
  date: String,
  title: String,
  description: String,
  to: String,
})

</script>

<template>
  <div class="space-x-1">
    <LastModifiedPageDate :date="date" />
    <span class="text-gray-400">&bullet;</span>
    <a class="font-bold" :href="to">{{ title }}</a>
    <span>&ndash;</span>
    <span class="text-gray-400">{{ description }}</span>
  </div>
</template>
