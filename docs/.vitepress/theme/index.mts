import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";
import Image from "./components/Image.vue";
import './style/index.css'

export default {
  ...DefaultTheme,
  Layout,

  // // 自定义增强功能
  // // 参数中的app是项目Vue3 App实例
  // // router是路由实例
  // // siteData是当前站点的元数据
  enhanceApp({ app, router, siteData }) {
    app.component("Image", Image);

    // 如果不是完全自定义主题,需要执行主题的默认行为
    DefaultTheme.enhanceApp({ app, router, siteData });
  },
} as Theme;