<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: ''
  },
  blurry: {
    type: Boolean,
    default: true,
    required: false
  },
  href: {
    type: String,
    default: ''
  },
  linkText: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <NuxtLink tag="div" :to="href" :class="{ blurry }" class="card LinkCard">
    <Icon v-if="icon" :name="icon" class="LinkCard--icon" :class="iconClass" />
    <slot />
    <div>
      <h3 class="title">
        <ContentSlot :use="$slots.title" unwrap="p">
          Card title
        </ContentSlot>
      </h3>
      <p class="description">
        <ContentSlot :use="$slots.description" unwrap="p">
          Card description
        </ContentSlot>
        <span v-if="linkText" class="LinkCard--link">
          <span>{{ linkText }}</span>
          <Icon name="material-symbols:arrow-right-alt-rounded" />
        </span>
        <span v-else class="LinkCard--arrow">
          <Icon name="material-symbols:arrow-right-alt-rounded" />
        </span>
      </p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
  '.card': {
    display: 'block',
    position: 'relative',
    width: '100%',
    padding: '{space.8}',
    borderRadius: '{radii.xl}',
    border: '1px solid {elements.border.primary.static}',
    background: '{elements.backdrop.background}',
    transition: 'all 300ms ease',
    '@dark': {
      color: '{color.gray.50}'
    },
    '&.blurry': {
      backdropFilter: '{elements.backdrop.filter}',
    },
    '.LinkCard--icon': {
      display: 'inline-block',
      marginBottom: '{space.2}',
      width: '{space.6}',
      height: '{space.6}'
    },
    '.title': {
      marginBottom: '{space.2}',
      fontSize: '{text.lg.fontSize}',
      lineHeight: '{text.lg.lineHeight}',
      fontWeight: '{fontWeight.semibold}'
    },
    '.description': {
      fontSize: '{text.sm.fontSize}',
      lineHeight: '{text.sm.lineHeight}',
      fontWeight: '{fontWeight.medium}',
      color: '{elements.color.text.secondary}',
      marginBottom: '{space.4}',
    },
    '.LinkCard--link': {
      display: 'block',
      position: 'absolute',
      bottom: '{space.6}',
      right: '{space.6}',
      color: '{elements.color.text.secondary.default}',
      borderBottom: '1px dashed currentColor',
    },
    '.LinkCard--arrow': {
      display: 'block',
      position: 'absolute',
      bottom: '{space.2}',
      right: '{space.2}',
      fontSize: '{text.xl.fontSize}',
      color: '{elements.color.text.secondary.default}',
      opacity: 0.3,
      transition: 'all 300ms ease',
    },
    '&:hover': {
      border: '1px solid {prose.a.border.color.hover}',
      '.LinkCard--link': {
        color: '{prose.a.border.color.static}',
        borderBottom: '1px solid currentColor',
      },
      '.LinkCard--arrow': {
        opacity: 1,
      },
    },
  }
})
</style>
