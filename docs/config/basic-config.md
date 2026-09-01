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

## 版本信息配置

```c
// 内部版本号（必须为整数，网络验证版本比对与更新检测时使用）
#define SIYOX_VERSION_CODE       2
```

- `SIYOX_VERSION_CODE`：必须为**整数**。网络验证后台进行版本检测、更新比对或参数校验时，客户端统一发送此内部整数版本号；发布更新时同步 +1。
- **外部显示版本号**：无需在 C++ 中配置，直接在 Android 工程配置（`build.gradle.kts` 的 `versionName` 或 `AndroidManifest.xml`）中修改，客户端启动时会自动读取并在 UI 界面展示。

---

## 默认官方公告配置

当网络离线、接口请求异常或未在后台配置公告时，客户端将展示此处的默认公告：

```c
#define SIYOX_DEFAULT_NOTICE_TITLE   "官方公告"
#define SIYOX_DEFAULT_NOTICE_CONTENT "欢迎使用SiyoX！请输入授权卡密激活后开始体验。"
```

---

## 默认更新弹窗配置

当网络验证未配置更新标题或更新日志时，客户端弹窗将展示此处的默认内容：

```c
#define SIYOX_DEFAULT_UPDATE_TITLE   "发现新版本"
#define SIYOX_DEFAULT_UPDATE_LOG     "有新版本可用，请及时更新以获得最佳体验！"
```
