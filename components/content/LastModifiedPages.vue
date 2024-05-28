<script setup>
const { data } = await useFetch('/api/mtime')
</script>
<template>
  <div>
    <strong>Last modified pages</strong>

    <ul>
      <li v-for="page in data?.recentFiles" :key="page">
        <UPageCard :title="page.title" icon="i-heroicons-star" :description="page.description" :to="page._path" />
      </li>
    </ul>

    
  </div>
</template>