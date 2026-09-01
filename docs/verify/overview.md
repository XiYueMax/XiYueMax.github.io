# 验证模式总览

SiyoX 支持在单一工程中随时切换不同的网络验证引擎。

📍 **配置文件路径**：`app/src/main/cpp/SiyoX_Config.h`

---

## 验证模式切换宏定义

```c
// 0: EPIC (摇光云), 1: T3 验证, 2: 微验 (WeiYan)
#define SIYOX_ACTIVE_VERIFY_TYPE  0
```

| 模式值 | 对应平台 | 传输加密方式 | 推荐使用场景 |
| :---: | :--- | :--- | :--- |
| **`0`** | **EPIC（摇光云）** | RSA 签名 + Base64 + GZip | 适合需要高安全级 RSA 签名校验的业务 |
| **`1`** | **T3 网络验证** | RC4 加密 + HEX 编码 | 适合功能完善、需要时间戳防重放的成熟系统 |
| **`2`** | **微验（WeiYan）** | RC4-Hex 加解密 | 适合轻量化、快速部署的单码卡密验证 |

---

## 快速跳转

- 👉 [T3 网络验证配置手册](/verify/t3)
- 👉 [微验（WeiYan）配置手册](/verify/weiyan)
- 👉 [EPIC（摇光云）配置手册](/verify/epic)
