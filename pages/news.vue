<script setup>
const { data } = await useFetch('/api/mtime')
definePageMeta({ layout: "docs" })
</script>

<template>
  <UPage>
    <UPageHeader title="Dernières mises à jour" />

    <UPageBody prose>
      <div>

        <template v-for="(page, index) in data.recentFiles" :key="index">
          <HistoriqueMaj :date="page.updatedAt" :title="page.title" :description="page.description" :to="page._path" />
        </template>

        <!--  <UPageCard class="card" v-for="(page, index) in data.recentFiles" :key="index" :title="page.title :"
          icon="i-heroicons-star" :description="page.description" :to="page._path">
          <template #description>
            <span class="line-clamp-2">{{ page.description }}</span>
          </template>
        </UPageCard> -->
      </div>
    </UPageBody>
  </UPage>
</template>
