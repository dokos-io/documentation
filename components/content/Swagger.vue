<template>
    <div ref="swaggerDomNode"></div>
</template>

<script setup>
import { SwaggerUIBundle } from "swagger-ui-dist";

const props = defineProps({
  app: {
    type: String,
    default: 'dodock' // dokos | hrms | ...
  },
  demo: {
    type: String,
    default: 'Dokompany' // or Mappemonde
  },
})

let demo_link = props.demo == "Dokompany" ? "https://demo.dokos.cloud" : "https://tierslieux.dokos.io"

const swaggerDomNode = ref(null);

onMounted( async() => {
    try {
        const response = await $fetch(`${demo_link}/api/method/demo.openapi.get_openapi_specifications`, { query: {app: props.app}})
        let swagger = response.message

        SwaggerUIBundle({
            spec: swagger || {},
            domNode: swaggerDomNode.value,
            filter: true,
            plugins: [
              DisableAuthorizePlugin,
              DisableTryItOutPlugin
            ]
        })
    } catch(error) {
        console.warn(error)
    }
})

const DisableAuthorizePlugin = function() {
  return {
    wrapComponents: {
      authorizeBtn: () => () => null
    }
  };
};

const DisableTryItOutPlugin = function() {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          allowTryItOutFor: () => () => false
        }
      }
    }
  }
}
</script>

<style>
@import "swagger-ui-dist/swagger-ui.css";

.scheme-container {
  display: none;
}
</style>