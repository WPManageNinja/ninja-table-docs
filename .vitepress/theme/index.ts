import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import ZoomableImage from './components/ZoomableImage.vue' // Click-to-zoom wrapper for doc images
import TreeStrip from './components/TreeStrip.vue' // "You are here" strip for doc-tree pages
import Layout from './Layout.vue' // Import new layout file
import './style.css'
import './doc-tree.css'
import './motion.css'
import './aurora.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)
    app.component('TreeStrip', TreeStrip)

    // Closed <details> don't print: open every doc-tree row and FAQ item before printing.
    // Rows share a `name` (exclusive accordion), so drop it first or each open closes the previous one.
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeprint', () => {
        document.querySelectorAll('details.dt-row, details.dt-faq-item').forEach((d) => {
          d.removeAttribute('name')
          ;(d as HTMLDetailsElement).open = true
        })
      })
    }

    // Register ZoomableImage component globally
    // This ensures it's available for markdown rendering
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  }
} satisfies Theme
