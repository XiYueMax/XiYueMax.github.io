# 源码编译与打包

SiyoX 默认配置为无签名 Release 模式打包输出，构建产物精简纯净。

---

## 构建步骤

### 1. 进入源码目录
```powershell
cd "C:\Users\Administrator\Desktop\SiyoX\SiyoX Src"
```

### 2. 执行编译命令
在 PowerShell 中执行：
```powershell
.\gradlew.bat :app:assembleRelease
```

### 3. 产物路径
编译完成后，生成的 APK 文件位于：
```text
app/build/outputs/apk/release/app-release-unsigned.apk
```

---

## 签名说明

工程默认设置 `signingConfig = null` 输出未签名包。如果需要官方 Release 证书签名：
1. 将你的密钥文件（如 `SiyoX.jks`）放置于 `SiyoX Src/` 根目录；
2. 在 `app/build.gradle.kts` 中恢复 `signingConfigs` 相关配置即可。
