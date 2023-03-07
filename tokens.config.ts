import { defineTheme } from 'pinceau'

export default defineTheme({
  docus: {
    header: { height: '64px' },
    footer: { padding: '{space.4} 0' },
    readableLine: '90ch'
  },
  prose: {
    p: {
      margin: '18px 0'
    }
  },
  elements: {
    backdrop: {
      background: "#f6f6f7"
    }
  }
})