<template>
    <div class="mermaid" v-if="show">
        <slot></slot>
    </div>
</template>

<script>
import  mermaid from "mermaid/dist/mermaid"
mermaid.initialize({ startOnLoad: true });
export default {
    data() {
        return { show: false }
    },
    mounted: function() {
        this.show = true;

        this.$nextTick(() => {
            mermaid.init();
        })
    }
};
</script>

<style>
.mermaid .default.node rect {
  stroke: #6195ff!important;
  fill: #fff!important
}
.mermaid .edgePath .path {
  stroke: #6195ff!important;
  fill: #6195ff!important
}
.mermaid .current-doc.node rect {
  stroke: #6195ff!important;
  fill: #6195ff!important
}
.mermaid .current-doc.node .label {
  color: #fff!important
}
</style>