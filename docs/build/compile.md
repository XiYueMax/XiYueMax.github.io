# 源码编译与打包

SiyoX 默认配置为无签名 Release 模式打包输出，构建产物精简纯净。

---

## 构建步骤

### 1. 进入源码目录
```powershell
cd "源码存放路径"
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

### 4. 软件签名

> 💡 **提示**：默认构建输出的 APK 文件为**未签名包**（Unsigned）。若要在 Android 设备或模拟器上正常安装与使用，必须先使用签名工具（如 `apksigner`、MT 管理器等）对其进行签名后方可成功安装。
