import DefaultTheme from 'vitepress/theme'
import './style/index.css'

export default {
  ...DefaultTheme,
  NotFound: () => "custom 404", // <- this is a Vue 3 functional component
  // async enhanceApp({ app }) {
  //   if (!import.meta.env.SSR) {
  //     const plugin = await import('plugin-that-access-window-on-import')
  //     app.use(plugin.default)
  //   }
  // }
};