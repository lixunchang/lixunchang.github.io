import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "李寻常的个人博客",
  description: "LI XUN CHANG",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '简介', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Examples2',
        items: [
          { text: 'Markdown Examples2', link: '/markdown-examples' },
          { text: 'Runtime API Examples2', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 项目首页的footer
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024-2029 李寻常",
    },
  }
})
