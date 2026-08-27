import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import ZoomableImage from './components/ZoomableImage.vue' // Click-to-zoom wrapper for doc images
import Layout from './Layout.vue' // Import new layout file
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)

    // Register ZoomableImage component globally
    // This ensures it's available for markdown rendering
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  }
} satisfies Theme
