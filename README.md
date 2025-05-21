
# 自媒体运营助手

一个功能强大的自媒体运营工具，支持一键视频搬家、批量发布到多个平台。

---

## 📦 安装说明（必读）

### ✅ 安装 Chrome 浏览器（**必须**）

请确保系统已安装 Chrome 浏览器。软件依赖 Chrome 实现自动操作。

### ✅ Mac 系统额外步骤（**必须**）

🔹 对于 Intel 芯片的 Mac：
打开“终端”应用

执行以下命令（请根据实际路径修改 xxx）：

```bash
xattr -rd com.apple.quarantine /Users/xxx/Downloads/douyin_gui_mac_intel.app
```

🔹 对于 Apple M 系列芯片（M1/M2/M3）：

打开“终端”应用

执行以下命令（请根据实际路径修改 xxx）：

```bash
xattr -r com.apple.quarantine /Users/xxx/Downloads/douyin_gui_mac.app
```

📝 说明：
macOS 默认会对从网络下载的 .app 文件加上“隔离”标签，必须移除该标签，程序才能启动。执行上述命令后，即可双击运行应用。

---

## 🚀 软件使用指南

### 🔷 主页功能概览

> ![主页](/assets/主页.png)

---

### 📥 抖音搬家功能

> ![抖音搬家](/assets/抖音搬家.png)

#### 🔐 发布平台登录说明

使用前需确保浏览器已登录对应平台账号：

- 首次使用或登录状态失效时，请点击界面中的“打开浏览器”按钮  
- 在新打开的浏览器中登录对应平台（如 YouTube、小红书等）
- 软件启动的浏览器进程独立于系统浏览器，您可能会看到一个新的 Chrome 窗口
- 登录成功后，登录状态会保持有效，除非长时间未登录或平台手动登出

> 示例：  
> ![打开浏览器1](/assets/open_browser1.jpg)  
> ![打开浏览器2](/assets/open_browser2.jpg)

#### 📌 操作步骤

1. **输入抖音主页链接：**  
   - 支持输入多个链接，回车换行分隔  
   - 例如：  
     ```
     https://www.douyin.com/user/MS4wLjABAAAAgfJrGAfliIV...
     ```

2. **选择发布时间段：**  
   - 设置视频发布的时间范围

3. **设置 Cookie（用于登录验证）：**  
   - 参考图示步骤获取浏览器 Cookie  
   ![cookie1](/assets/cookie1.png)  
   ![cookie2](/assets/cookie2.png)  
   ![cookie3](/assets/cookie3.png)  
   ![cookie4](/assets/cookie4.png)

4. **点击发布按钮，开始搬家操作**

---

### 🌐 多平台视频发布

> ![多平台发布](/assets/多平台发布.png)

#### 🔐 登录状态说明（同抖音搬家一致）

- 每个平台发布前，请确保浏览器中已登录账号  
- 可点击“打开浏览器”进入登录界面，平台如：YouTube、小红书、哔哩哔哩等  
- 程序会打开一个新的独立 Chrome 窗口用于自动化登录与发布

---

如需进一步帮助，请联系技术支持或查看更多使用手册。
