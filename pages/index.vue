<script setup lang="ts">

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

// useSeoMeta({
//   titleTemplate: '',
//   title: page.value.title,
//   ogTitle: page.value.title,
//   description: page.value.description,
//   ogDescription: page.value.description
// })
</script>

<template>
  <div>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <ClientOnly>
        <HomeTetris />
      </ClientOnly>
    </ULandingHero>

    <ULandingSection>
      <template #title>
        <span v-html="page.demo?.title"></span>
      </template>
      <ULandingGrid>
        <ULandingCard v-for="(item, index) of page.demo.items" :key="index" v-bind="item" class="col-span-6 row-span-2">
          <img :src="item.image" class="w-full rounded-md" />
        </ULandingCard>
      </ULandingGrid>
    </ULandingSection>

    <ULandingSection :links="page.modules.links">
      <template #title>
        <span v-html="page.modules?.title"></span>
      </template>
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.modules.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection :links="page.admin.links">
      <template v-if="page.admin.title" #title>
        <span v-html="page.admin?.title" />
      </template>

      <template v-if="page.admin.description" #description>
        <span v-html="page.admin?.description" />
      </template>

      <ULandingGrid>
        <ULandingCard v-for="(item, index) of page.admin.items" :key="index" class="col-span-6 row-span-2"
          :icon="item.icon" :title="item.title" :description="item.description">
        </ULandingCard>
      </ULandingGrid>
    </ULandingSection>
  </div>
</template>
