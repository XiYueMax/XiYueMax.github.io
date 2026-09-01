import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "XiYue. | 个人主页",
  description: "XiYueMax 个人主页与开源项目导航",
  base: '/',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'XiYueMax',
    nav: [
      { text: '首页', link: '/' },
      { text: 'SiyoX 文档', link: 'https://xiyuemax.github.io/SiyoX-Docs/' },
      { text: 'GitHub 主页', link: 'https://github.com/XiYueMax' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XiYueMax' }
    ],
    footer: {
      message: 'XiYueMax Open Source Portfolio',
      copyright: 'Copyright © 2026 XiYueMax'
    }
  }
})
