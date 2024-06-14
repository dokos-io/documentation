<script setup>
const props = defineProps({
  date: String,
})

const dateObj = new Date(props.date)
const dateFormatter = new Intl.DateTimeFormat("fr", {
  dateStyle: "medium",
})
</script>

<template>
  <span>{{ dateFormatter.format(dateObj) }}</span>
</template>
