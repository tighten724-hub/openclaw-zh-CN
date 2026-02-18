# OpenClaw 2026.2.17 中文语言包

> OpenClaw 控制台 UI 中文语言包 | Chinese Language Pack for OpenClaw Control UI

[![OpenClaw Version](https://img.shields.io/badge/OpenClaw-2026.2.17-blue)](https://github.com/openclaw/openclaw)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📖 项目介绍

本项目为 **OpenClaw** 多渠道 AI 网关控制台提供完整的中文界面翻译。

**🎯 核心优势：**

- ✅ **中英文实时切换**：右上角一键切换，刷新即刻生效
- ✅ **全局安装用户**：直接替换预编译 UI，无需安装依赖
- ✅ **源码安装用户**：直接打补丁构建，安装简单
- ✅ **保留官方所有功能**：不影响 Gateway 和其他功能

---

## 🖼️ 效果演示

| 中文界面 | 英文界面 |
|---------|---------|
| ![中文界面](docs/images/zw_1.png) | ![英文界面](docs/images/yw_3.png) |
| ![配置页面](docs/images/zw_2.png) | |

### v2026.2.17 (2026-02-19)

- ✅ 适配 OpenClaw 2026.2.17
- ✅ 完整中文界面翻译
- ✅ 支持中英文一键切换
- ✅ 保留官方所有功能

---

## 📦 安装指南

### 克隆项目

```bash
git clone https://github.com/tighten724-hub/openclaw-zh-CN.git
cd openclaw-zh-CN
```

---

### 方式一：全局安装用户（推荐）

适用于通过 `npm install -g openclaw` 安装的用户。

#### Windows (PowerShell)

```powershell
# 1. 克隆项目到本地
git clone https://github.com/tighten724-hub/openclaw-zh-CN.git

# 2. 进入项目的 control-ui 目录
cd openclaw-zh-CN\dist\control-ui

# 3. 复制文件到全局安装目录 (使用 xcopy)
xcopy * "C:\Users\Administrator\AppData\Roaming\npm\node_modules\openclaw\dist\control-ui\" /E /Y

# 4. 刷新浏览器访问 http://localhost:18789
# 点击右上角 "中 / EN" 切换语言
```

#### Linux / macOS

```bash
# 1. 克隆项目到本地
git clone https://github.com/tighten724-hub/openclaw-zh-CN.git

# 2. 进入项目的 control-ui 目录
cd openclaw-zh-CN/dist/control-ui

# 3. 复制文件到全局安装目录
sudo cp -r . /usr/lib/node_modules/openclaw/dist/control-ui/

# 4. 刷新浏览器访问 http://localhost:18789
# 点击右上角 "中 / EN" 切换语言
```

---

### 方式二：源码安装用户

适用于从 GitHub 克隆 OpenClaw 源码并自行构建的用户。

```bash
# 1. 克隆 OpenClaw 源码
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 2. 克隆本项目获取中文 UI
git clone https://github.com/tighten724-hub/openclaw-zh-CN.git

# 3. 替换 UI 文件
rm -rf dist/control-ui
cp -r openclaw-zh-CN/dist/control-ui dist/

# 4. 重启 Gateway
openclaw gateway restart

# 5. 刷新浏览器访问 http://localhost:18789
```

---

## 🔧 常见问题

### Q: 安装后界面没有变化？

A: 请尝试以下步骤：
1. 清除浏览器缓存 (Ctrl+Shift+Del)
2. 强制刷新页面 (Ctrl+F5)
3. 如果仍不生效，尝试重启 Gateway:
   ```bash
   openclaw gateway restart
   ```

### Q: Gateway 重启后中文界面消失了？

A: 这是正常行为。静态文件替换在 Gateway 重启后需要重新操作。

如需永久生效，可将安装命令加入系统启动项或创建快捷方式。

### Q: 如何卸载？

**全局安装用户：**

```bash
npm install -g openclaw@latest
```

**源码安装用户：**

```bash
openclaw update
```

### Q: 支持哪些系统？

| 系统 | 全局安装 | 源码安装 |
|------|---------|---------|
| Windows 10/11 | ✅ | ✅ |
| Linux (Ubuntu/Debian等) | ✅ | ✅ |
| macOS | ✅ | ✅ |

### Q: 支持哪些 OpenClaw 版本？

本版本适配 **OpenClaw 2026.2.17**。

如需其他版本，请参考源码自行构建。

---

## 📁 目录结构

```
openclaw-zh-CN/
├── README.md              # 本文件
├── LICENSE               # MIT 许可证
├── dist/                 # 预编译的 UI 文件
│   └── control-ui/
│       ├── index.html
│       ├── favicon.ico
│       └── assets/
└── docs/
    └── images/           # 截图演示
```

---

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

**声明：** 本项目为社区翻译，非官方 OpenClaw 的一部分。

---

## 💬 交流群 / 赞赏支持

<p align="center">
  <img src="docs/images/jiaoliu.png" width="180" alt="扫码加入交流群">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="docs/images/zanshang.png" width="180" alt="赞赏支持">
</p>

---

## 📝 问题反馈

- [GitHub Issues](https://github.com/tighten724-hub/openclaw-zh-CN/issues)
- [OpenClaw 官方讨论](https://github.com/openclaw/openclaw/discussions)

---

<p align="center">
Made with ❤️ for the OpenClaw Community
</p>
