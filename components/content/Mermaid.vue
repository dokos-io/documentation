<template>
    <div class="mermaid" v-if="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return { show: false }
    },
    mounted: function() {
        this.show = true;

        const mermaid = initMermaid()
        mermaid.initialize({ startOnLoad: true });
        this.$nextTick(() => {
            mermaid.init();
        })
    }
};
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