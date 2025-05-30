# 自媒体运营助手

一个功能强大的自媒体运营工具，一键视频搬家、一键发布视频到多平台,抖音视频下载，一键搬家到其他平台（快手、YouTube、小红书、美拍、哔哩哔哩等）
欢迎入群交流！
<p align = "center">    
<img  src="https://github.com/user-attachments/assets/a0b1ee9e-99c4-429b-9c18-046017157d72" width="300" />
</p>


## 📦 安装说明（必读）

## 下载地址

✅ [下载地址](https://github.com/spider-ios/autox-release/releases/tag/v1.2.0)

### ✅ 安装 Chrome 浏览器（**必须**）

请确保系统已安装 Chrome 浏览器。软件依赖 Chrome 实现自动操作。

✅ [Chrome 下载地址](https://www.google.cn/chrome/)


### ✅ Windows 系统

📌 **下载 [AutoX_windows.zip](https://github.com/spider-ios/autox-release/releases/tag/v1.2.0)** 

并解压到任意目录，双击执行目录里的 AutoX.exe

### ✅ Mac 系统额外步骤（**必须**）
下载对应的安装包，并解压到任意目录
#### 🔹 对于 Intel 芯片的 Mac：
📌 **下载 [AutoX_Mac_Intel.zip](https://github.com/spider-ios/autox-release/releases/tag/v1.2.0)** 

打开“终端”应用

执行以下命令（请根据实际路径修改）：

```bash
xattr -rd com.apple.quarantine /Users/xxx/Downloads/AutoX.app
```

#### 🔹 对于 Apple M 系列芯片（M1/M2/M3）：

📌 **下载 [AutoX_Mac.zip](https://github.com/spider-ios/autox-release/releases/tag/v1.2.0)** 

打开“终端”应用

执行以下命令（请根据实际路径修改）：

```bash
xattr -r com.apple.quarantine /Users/xxx/Downloads/AutoX.app
```

📝 说明：
macOS 默认会对从网络下载的 .app 文件加上“隔离”标签，必须移除该标签，程序才能启动。执行上述命令后，即可双击运行应用。

---

## 🚀 软件使用指南



### 🔷 主页功能概览

> ![主页](/assets/main.png)

---

#### 📝 发布平台账号管理

> ![主页](/assets/account.png)
> 系统默认使用端口号 8633，一般情况下不需要手动设置。单账号：如果一个平台只操作一个账号，无需更改端口。多账号：如果你在同一平台登录多个账号，需要为每个账号设置不同的端口,为了确保内容可以顺利发布到各个平台，输入端口号后点击后面的打开浏览器，在浏览器中登录目标平台账号，并保持登录状态。

#### ✅ 首次使用时操作步骤：
如果要发布的平台（如 YouTube、小红书等）尚未登录账号，程序将提示您进行登录。

您可以点击程序页面中的 “打开浏览器” 按钮，系统会自动为您打开一个新的浏览器窗口。如下图所示：
![打开浏览器](/assets/open_browser1.jpg)
或

![打开浏览器](/assets/open_browser2.jpg)

在这个新打开的浏览器中，请访问对应平台（如 youtube.com、xiaohongshu.com）并登录您的账号。

注意： 程序打开的浏览器是一个与您平时使用的浏览器隔离的进程（例如另一个独立的 Chrome 实例），它不会共享历史登录状态或插件。

登录成功后，浏览器会自动保存您的登录状态。只要不长时间退出或清除缓存，程序在后续发布时无需重复登录。

#### 📌 说明：
每个平台都需要单独登录一次；

浏览器保持登录状态是确保发布成功的前提；

如果发现登录失效，可重新点击“打开浏览器”按钮进行登录。




### 📥 抖音搬家功能

> ![抖音搬家](/assets/moving.png)

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


##### 功能使用
1.**下载链接**

输入要搬家的抖音主页链接 ，<font color=red>【目前只支持输入用户主页链接，可输入多个地址，地址直接回车换行】</font>，如“https://www.douyin.com/user/MS4wLjABAAAAgfJrGAfliIV-_qU4wUWAMmyeTjhyjUqqESXwxrBQBYJosRs9O7-_2I_lWOvu_qrF?from_tab_name=main&vid=7484152559486160188”）

2. **选择作品发布的时间段**

3. **设置 cookie （如何获取 cookie ?）**

可以参考文档
[利用插件获取网页 cookie ](./cookie-helper/README.md).

 也可以参考以下步骤：
![获取 cookie](/assets/cookie1.png)
![获取 cookie](/assets/cookie2.png)
![获取 cookie](/assets/cookie3.png)
![获取 cookie](/assets/cookie4.png)


4. **选择要发布到的平台和账号，开始搬家操作**
![获取 cookie](/assets/account1.png)
---

### 🌐 多平台视频发布

> ![多平台发布](/assets/publish.png)

#### 🔐 登录状态说明（同抖音搬家一致）

- 每个平台发布前，请确保浏览器中已登录账号  
- 可点击“打开浏览器”进入登录界面，平台如：YouTube、小红书、哔哩哔哩等  
- 程序会打开一个新的独立 Chrome 窗口用于自动化登录与发布

---

如需进一步帮助，请提 issue!

欢迎入群交流！
<p align = "center">    
<img  src="https://github.com/user-attachments/assets/a0b1ee9e-99c4-429b-9c18-046017157d72" width="300" />
</p>





