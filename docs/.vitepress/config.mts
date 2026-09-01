import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SiyoX Docs",
  description: "基于 Android 平台的《我的世界》客户端辅助与多网络验证注入框架",
  base: '/SiyoX-Docs/',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/SiyoX-Docs/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'SiyoX Docs',
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/intro' },
      { text: '软件配置', link: '/config/basic-config' },
      { text: '网络验证', link: '/verify/overview' },
      { text: '构建教程', link: '/build/env' },
      { text: '作者主页', link: 'https://xiyuemax.github.io' },
      { text: 'GitHub 源码', link: 'https://github.com/XiYueMax/SiyoX' }
    ],
    sidebar: [
      {
        text: '项目介绍',
        collapsed: false,
        items: [
          { text: '项目概述', link: '/guide/intro' },
          { text: '更新日志', link: '/guide/changelog' },
          { text: '核心架构与特性', link: '/guide/features' },
          { text: '安全须知与加固建议', link: '/guide/security' }
        ]
      },
      {
        text: '软件配置',
        collapsed: false,
        items: [
          { text: '基础参数配置', link: '/config/basic-config' },
          { text: '资源包直链与 MD5 校验', link: '/config/resource-pack' }
        ]
      },
      {
        text: '网络验证',
        collapsed: false,
        items: [
          { text: '验证模式总览', link: '/verify/overview' },
          { text: 'T3 网络验证', link: '/verify/t3' },
          { text: '微验（WeiYan）', link: '/verify/weiyan' },
          { text: 'EPIC（摇光云）', link: '/verify/epic' }
        ]
      },
      {
        text: '构建教程',
        collapsed: false,
        items: [
          { text: '开发环境要求', link: '/build/env' },
          { text: '源码编译与打包', link: '/build/compile' },
          { text: 'ADB 调试与运行', link: '/build/run' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XiYueMax/SiyoX' }
    ],
    footer: {
      message: '基于 Apache License 2.0 协议开源',
      copyright: 'Copyright © 2026 XiYueMax'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      label: '页面导航',
      level: [2, 3]
    },
    search: {
      provider: 'local'
    }
  }
})
