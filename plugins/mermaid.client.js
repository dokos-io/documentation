import mermaid from "mermaid"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('mermaid', () => mermaid)
    mermaid.initialize({startOnLoad: true })
})