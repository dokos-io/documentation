<template>
  <div :class='["p-1 border rounded text-white text-center", type=="success" ? "border-green-600 bg-green-500": (type=="warning" ? "border-orange-500 bg-orange-400": "border-red-500 bg-red-400")]'>
    <div>{{ description }}</div>
  </div>
</template>

<script setup>
defineProps(['type', 'description'])
</script>