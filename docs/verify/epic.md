# EPIC（摇光云）网络验证配置

SiyoX 深度集成了 EPIC 摇光云验证，支持高强度 RSA 签名与通信包装。

---

## 1. 客户端代码配置 (`SiyoX_Config.h`)

将 `SIYOX_ACTIVE_VERIFY_TYPE` 设为 `1`：

```c
#define SIYOX_ACTIVE_VERIFY_TYPE 1

#define SIYOX_EPIC_APP_KEY       "your_epic_app_key"        // EPIC 应用 AppKey
#define SIYOX_EPIC_PORT          5000

static const char* SIYOX_EPIC_HOSTS[] = {
    "epic.z74d.top",
    "gl.t60.top",
    "test.t60.top",
    "epic.t5x.cc"
};
```

---

## 2. EPIC AppKey 获取方式

::: warning 重要提示
EPIC 手机软件端暂时**无法**直接获取 AppKey。
:::

### 网页端获取步骤：
1. 打开浏览器访问 EPIC 网页端后台：👉 [https://web.t60.top](https://web.t60.top)
2. 登录你的账号；
3. 进入控制台，点击 **新建一个 APP**；
4. 创建完成后，即可查看到该应用专属的 **`AppKey`**；
5. 将获取到的 `AppKey` 复制填入 `SiyoX_Config.h` 中的 `SIYOX_EPIC_APP_KEY` 即可。
