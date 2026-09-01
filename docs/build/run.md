# ADB 调试与运行

完成签名后的 APK 可通过 ADB 推送至安卓真机或模拟器进行测试与运行。

---

## 1. 通过 ADB 安装

在终端中执行以下命令（强制覆盖安装）：

```powershell
adb install -r -d "签名后的APK路径.apk"
```

---

## 2. 启动游戏

使用 Monkey 指令一键唤起游戏：

```powershell
adb shell monkey -p com.netease.x19 -c android.intent.category.LAUNCHER 1
```

---

## 3. 日志调试

如需查看 SiyoX 的底层验证日志与运行状态，可使用 Logcat 过滤：

```powershell
adb logcat -s "SiyoX" "SiyoX_Verify"
```
