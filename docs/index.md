---
layout: home

hero:
  name: "SiyoX"
  text: "客户端注入框架"
  tagline: "基于 Android 平台，支持多协议网络验证、资源在线注入与 Native C++ 核心"
  image:
    src: /logo.png
    alt: SiyoX Logo
  actions:
    - theme: brand
      text: 快速入门
      link: /guide/intro
    - theme: alt
      text: 软件配置
      link: /config/basic-config
    - theme: alt
      text: 构建教程
      link: /build/compile
    - theme: alt
      text: 作者主页
      link: https://xiyuemax.github.io

features:
  - icon: 🛡️
    title: 多网络验证支持
    details: 内置深度对接 EPIC（摇光云）、T3 验证、微验（WeiYan）三大网络验证平台，支持单码卡密、公告及更新检测。
  - icon: ⚡
    title: Native C++ 核心
    details: 底层网络通信、RC4 / RSA 加解密及数据签名均在 Native (JNI) 层执行，避免核心逻辑被轻易反编译。
  - icon: 📦
    title: 资源在线下载与注入
    details: 支持预置多个资源包直链高速拉取、MD5 完整性校验，并自动解压释放至游戏私有存储目录。
  - icon: 🔧
    title: 全局集中式配置
    details: 客户端名称、作者、默认公告、资源包下载直链及验证密钥全部在 SiyoX_Config.h 中统一管理。
---
