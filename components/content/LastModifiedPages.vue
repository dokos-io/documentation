<script setup>
const { data } = await useFetch('/api/mtime', {query: {limit: 5}})

</script>

<template>
  <ULandingSection title="Dernières modifications">
    <ULandingGrid>
      <ULandingCard :class="'col-span-6 row-span-' + index" v-for="(page, index) in data?.recentFiles" :key="page" :title="page.title" :description="page.description" :to="page._path">
        <template #icon>
          <LastModifiedPageDate :date="page.updatedAt"/>
        </template>
      </ULandingCard>
    </ULandingGrid>
  </ULandingSection>
</template>