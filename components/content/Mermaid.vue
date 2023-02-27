<template>
    <pre class="mermaid" v-if="show">
        <slot></slot>
    </pre>
</template>

<script setup>

let show = ref(false);

const { $mermaid } = useNuxtApp()

onMounted( async() => {
  show.value = true

  await nextTick()
  $mermaid().initialize({startOnLoad: false })
  $mermaid().run({
    querySelector: '.mermaid',
    suppressErrors: false,
  });
})

</script>

<style>
.mermaid rect {
  stroke: #6195ff !important;
  fill: #fff !important;
}

.mermaid .current-doc.node .label {
  color: #fff !important;
}

.mermaid line {
  stroke: #6195ff !important;
}

[data-theme="dark"] .mermaid .flowchart-link {
  stroke: #fff !important;
}

[data-theme="dark"] .mermaid .messageText {
  fill: #fff !important;
}

[data-theme="dark"] .mermaid marker {
  fill: #fff !important;
  color: #fff !important;
}

[data-theme="dark"] .mermaid line {
  stroke: #fff !important;
}
</style>