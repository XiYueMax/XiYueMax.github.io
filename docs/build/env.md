# 开发环境要求

在本地编译和构建 SiyoX 之前，请确保你的开发环境满足以下要求。

---

## 推荐环境配置

| 组件 | 推荐版本 | 详细说明 |
| :--- | :--- | :--- |
| **操作系统** | Windows 10 / 11 (64-bit) 或 Linux / macOS | 推荐 Windows 平台配合 PowerShell |
| **Java JDK** | JDK 21 | 推荐使用 Android Studio 内置的 JBR (`jbr`) |
| **Android SDK** | API 33 (Android 13) | compileSdk: 33, minSdk: 26, targetSdk: 33 |
| **Gradle** | 9.6.1 | 工程自带 `gradlew` 包装器，无需手动全局安装 |
| **AGP** | 8.4.0 | Android Gradle Plugin |
| **NDK** | r27b (27.1.12297006) | 用于编译 Native C++ 核心库 |
| **CMake** | 3.28.0+ | Native 构建工具 |

---

## 环境变量配置示例 (PowerShell)

在编译前设置 JDK 与 Android SDK 环境变量：

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "C:\Users\Administrator\AppData\Local\Android\Sdk"
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
```
