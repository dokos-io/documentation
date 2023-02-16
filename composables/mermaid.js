import mermaid from "mermaid/dist/mermaid"

export const initMermaid = () => {
    mermaid.initialize({ startOnLoad: true });
    return mermaid
}