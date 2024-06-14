<script setup>
const { data } = await useFetch('/api/mtime')
definePageMeta({ layout: 'docs' })
</script>

<template>
  <UPage>
    <UPageHeader title="Dernières modifications" />

    <UPageBody prose>
      <div>
        <template v-for="(page, index) in data.recentFiles" :key="index">
          <HistoriqueMaj :date="page.updatedAt" :title="page.title" :description="page.description" :to="page.to" />
        </template>
      </div>
    </UPageBody>
  </UPage>
</template>
