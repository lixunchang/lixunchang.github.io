import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "李寻常的个人博客",
  description: "LI XUN CHANG",
  appearance: true, // 黑、白
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/lixunchang.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', activeMatch: '/list/tech/', link: '/list/tech' },
      { text: '生活', activeMatch: '/list/survive/', link: '/list/survive' },
      { text: '思想', activeMatch: '/list/thought/', link: '/list/thought' },
      { text: '简介', activeMatch: '/intro/', link: '/intro' }
    ],

    sidebar: {
      '/intro/': [
        { text: '简介', link: '/intro' },
        { text: '开源项目', link: '/intro/open-source' },
        { text: '个人简历', link: '/intro/resume' },
        { text: '汇编年', link: '/intro/history' },
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
      message: "只是寻常",
      copyright: "版权所有 © 2024-2029 李寻常",
    },
  }
})
