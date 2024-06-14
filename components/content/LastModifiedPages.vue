<script setup>
const { data } = await useFetch('/api/mtime', {query: {limit: 5}})

</script>

<template>
  <ULandingSection title="Dernières modifications">
    <ULandingGrid>
      <ULandingCard v-for="(page, index) in data?.recentFiles" :key="page" :class="'col-span-6 row-span-' + index" :title="page.title" :description="page.description" :to="page.to">
        <template #icon>
          <LastModifiedPageDate :date="page.updatedAt" />
        </template>
      </ULandingCard>
    </ULandingGrid>

    <UButton class="m-auto" to="/news" trailing-icon="i-heroicons-arrow-right-20-solid" variant="ghost" color="gray">
      Toutes les modifications
    </UButton>
  </ULandingSection>
</template>
