# 基础参数配置

SiyoX 的所有核心配置均集中在 Native 头文件中，无需修改 Java 业务代码。

📍 **配置文件路径**：`app/src/main/cpp/SiyoX_Config.h`

---

## 验证模式切换

```c
// 0: 关闭验证 (免验证模式), 1: EPIC (摇光云), 2: T3 验证, 3: 微验
#define SIYOX_ACTIVE_VERIFY_TYPE  0
```

- `0`：**关闭验证**（免卡密直接进入，无需连接任何网络验证服务器）；
- `1`：启用 **EPIC（摇光云）** 网络验证；
- `2`：启用 **T3 网络验证**；
- `3`：启用 **微验（WeiYan）** 网络验证。

---

## 客户端展示信息

```c
#define SIYOX_CLIENT_NAME        "SiyoX Client"  // 客户端名称
#define SIYOX_CLIENT_AUTHOR      "XiYue."        // 客户端作者
```

- `SIYOX_CLIENT_NAME`：悬浮窗及 UI 顶部展示的软件标题；
- `SIYOX_CLIENT_AUTHOR`：作者署名信息。

---

## 默认官方公告配置

当网络离线、接口请求异常或未在后台配置公告时，客户端将展示此处的默认公告：

```c
#define SIYOX_DEFAULT_NOTICE_TITLE   "官方公告"
#define SIYOX_DEFAULT_NOTICE_CONTENT "欢迎使用SiyoX！请输入授权卡密激活后开始体验。"
```
