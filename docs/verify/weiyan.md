# 微验（WeiYan）网络验证配置

SiyoX 支持微验系统的卡密单码验证、公告获取与版本更新接口。

---

## 1. 客户端代码配置 (`SiyoX_Config.h`)

将 `SIYOX_ACTIVE_VERIFY_TYPE` 设为 `2`，并填写微验相关参数：

```c
#define SIYOX_ACTIVE_VERIFY_TYPE 2

#define SIYOX_WEIYAN_API_HOST    "wy.llua.cn"                // 微验接口域名
#define SIYOX_WEIYAN_APP_ID      "your_weiyan_app_id"        // 微验应用 ID
#define SIYOX_WEIYAN_APP_KEY     "your_weiyan_app_key"       // 微验程序密钥
#define SIYOX_WEIYAN_RC4_KEY     "your_weiyan_rc4_key"       // 微验 RC4 密钥
#define SIYOX_WEIYAN_API_TOKEN   "your_weiyan_api_token"     // 微验 API 令牌
#define SIYOX_WEIYAN_LOGIN_CODE  "your_weiyan_login_code"    // 单码登录接口 API调用ID
#define SIYOX_WEIYAN_NOTICE_CODE "your_weiyan_notice_code"   // 公告接口 API调用ID
#define SIYOX_WEIYAN_UPDATE_CODE "your_weiyan_update_code"   // 更新接口 API调用ID
```

---

## 2. 微验管理后台必配项

在微验后台的 **应用配置 ➔ 安全配置** 中进行设置：
- **数据加密类型**：选择 **`RC4加密-2 (hex)`**
- **签名开关**：选择 **关闭**
