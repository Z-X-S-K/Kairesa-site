# Kairesa Website

这是一个可以直接上传到 GitHub Pages 的模块化静态公司网站。

## 文件结构

```text
.
├── index.html
├── services.html
├── about.html
├── insights.html
├── contact.html
├── 404.html
├── CNAME
├── robots.txt
├── sitemap.xml
└── assets
    ├── css
    │   └── styles.css
    ├── js
    │   ├── config.js
    │   ├── data.js
    │   └── main.js
    └── img
        ├── logo.svg
        ├── favicon.svg
        └── og-image.svg
```

## 直接上线步骤

1. 解压本文件包。
2. 把所有文件上传到你的 GitHub 仓库根目录。
3. GitHub 仓库进入：`Settings → Pages`。
4. Source 选择：`Deploy from a branch`。
5. Branch 选择：`main`，Folder 选择：`/ root`。
6. 保存。
7. 如果你使用 `kairesa.com`，保留 `CNAME` 文件。
8. 如果你不用 `kairesa.com`，删除或修改 `CNAME` 文件。

## 修改公司信息

打开：

```text
assets/js/config.js
```

修改：

```js
name: "Kairesa",
domain: "https://kairesa.com",
email: "hello@kairesa.com",
formEndpoint: ""
```

## 添加服务内容

打开：

```text
assets/js/data.js
```

在 `services` 数组里添加新项目即可。

## 添加 Insights / Blog 内容

打开：

```text
assets/js/data.js
```

在 `insights` 数组里添加新项目即可。

## 邮件功能说明

这个网站是静态网站，没有服务器。默认的联系表单会打开用户本地邮箱，并自动生成一封邮件发给：

```text
hello@kairesa.com
```

如果你想让表单在网页内直接提交，可以使用 Formspree 免费版：

1. 注册 Formspree。
2. 创建表单。
3. 复制 endpoint，例如：`https://formspree.io/f/xxxxxxx`。
4. 打开 `assets/js/config.js`。
5. 填入：

```js
formEndpoint: "https://formspree.io/f/xxxxxxx"
```

保存上传后，联系表单就会优先用 Formspree 发送。如果 Formspree 失败，会自动回退到 mailto 邮件。

## 互动功能

网站已经包含：

- 手机菜单
- 深色/浅色模式切换
- 页面分享按钮
- 邮件转发按钮
- 一键复制邮箱
- 服务搜索
- Insights 搜索
- 可展开服务卡片
- 可展开 FAQ
- Project brief builder，自动生成邮件内容

## 不暴露个人名字

网站内没有使用 ZXSK 或个人名字。

## 专业边界

网站页脚和 About 页面已经写明：Kairesa 提供 strategy、operational、research、compliance support，不提供 legal representation。
