<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="space-x-1">
    <LastModifiedPageDate :date="date" />

    <span class="text-gray-400">&bullet;</span>

    <a class="font-bold" :href="to">
      {{ title }}
    </a>

    <template v-if="description">
      <span>&ndash;</span>
      <span class="text-gray-400">
        {{ description }}
      </span>
    </template>
  </div>
</template>
