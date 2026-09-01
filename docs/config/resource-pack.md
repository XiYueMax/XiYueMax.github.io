# 资源包直链与 MD5 校验

SiyoX 支持在客户端内直接展示预置资源包列表，并由用户选择后在线高速拉取并注入游戏。

📍 **配置文件路径**：`app/src/main/cpp/SiyoX_Config.h`

---

## MD5 完整性校验开关

```c
// true: 开启校验（下载/注入时自动校验 32 位 MD5，防止材质包被篡改或损坏）
// false: 关闭校验（直接注入）
#define SIYOX_ENABLE_MD5_VERIFY  false
```

::: tip 建议
- 如果你的直链资源包需要经常在线更新或替换内容，**建议设为 `false`**（避免频繁修改 MD5 配置）；
- 若设为 `false`，下方资源包列表中的 MD5 字段可随意填写或留空。
:::

---

## 预置资源包列表配置

通过修改 `SIYOX_DEFAULT_RESOURCES` 结构体数组来增删资源包：

```c
typedef struct {
    const char *name;         // 资源包名称
    const char *url;          // 直链下载地址 (必须支持直接下载 zip)
    const char *md5;          // 资源包 MD5 值 [32位小写字母]
    const char *description;  // 资源包简介
} SiyoXDefaultResource;

static const SiyoXDefaultResource SIYOX_DEFAULT_RESOURCES[] = {
    {
        "默认资源包1",
        "https://example.com/pack1.zip",
        "597776459862b5c52a2a7db89b933b0d",
        "轻量高清材质包"
    },
    {
        "默认资源包2",
        "https://example.com/pack2.zip",
        "ec51c3940f73dccd7464cfe462d9046d",
        "竞技专用 PVP 材质"
    }
};
```
