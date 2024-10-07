import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "李寻常的个人博客",
  description: "LI XUN CHANG",
  appearance: true, // 黑、白
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "lixunchang.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', activeMatch: '/tech/', link: '/tech' },
      { text: '思想', activeMatch: '/thought/', link: '/thought' },
      { text: '生活', activeMatch: '/survive/', link: '/survive' },
      { text: '简介', activeMatch: '/intro/', link: '/intro' }
    ],

    sidebar: {
      '/intro/': [
        {
          text: '简介',
          items: [
            { text: '思想经历', link: '/item-4' },
            { text: '开源经历', link: '/item-3' },
            { text: '工作经历', link: '/item-2' },
            { text: '教育经历', link: '/item-1' },
          ]
        }
      ]
    },
    aside: true,
    outline: {
      level: [2,6],
      label: '大纲'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lixunchang' }
    ],
    // 项目首页的footer
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024-2029 李寻常",
    },
  }
})
