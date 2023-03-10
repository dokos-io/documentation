import { defineTheme } from 'pinceau'

export default defineTheme({
  docus: {
    header: { height: '64px' },
    footer: { padding: '{space.4} 0' },
    readableLine: '90ch'
  },
  prose: {
    p: {
      margin: '18px 0',
      br: {
        margin: '5px 0',
      }
    }
  },
  elements: {
    backdrop: {
      background: {
        initial: "#f6f6f7",
        dark: "#0c0d0ccc"
      }
    }
  }
})