<script setup>
const { data } = await useFetch('/api/mtime')
</script>

<template>
  <div>
    <strong>Last modified pages</strong>
    <ul>
      <li v-for="page in data?.recentFiles" :key="page">
        title: {{ page.title }}<br>
        _path: {{ page._path }}<br>
        _updatedAt: {{ page._updatedAt }}<br>
      </li>
    </ul>
  </div>
</template>
