# 临时 2FA 生成器

纯前端的 TOTP 工具，支持手动输入密钥、摄像头扫码或上传二维码图片，适合部署到 GitHub Pages、Cloudflare Pages、EdgeOne Pages、Vercel、Netlify、Esa Pages 等静态托管平台。

## 功能
- 两个核心卡片：左侧聚焦验证码显示，右侧在“手动输入”与“扫码 / 上传”之间切换。
- 手动输入 Base32 密钥或粘贴 `otpauth://` URI，输入框未聚焦自动遮挡，可点击显示。
- 摄像头实时扫描二维码，或上传图片识别二维码，解析结果会显示账户、发行方与密钥（默认隐藏，支持复制）。
- 默认 30 秒、6 位验证码，可在“高级”中调整算法（SHA-1/256/512）、位数、周期、时间偏移；账户字段同样位于高级选项。
- 验证码自动刷新并支持一键复制。所有计算在浏览器完成，不写入后端或持久存储。

### 移动端提示
- 页面控件在手机上自动全宽，扫描按钮会请求后摄像头权限；上传图片可直接调用相机或相册。
- 输入框失焦即隐藏密钥内容，适合在公共环境快速使用。

## 本地预览
直接打开 `index.html` 即可使用，或使用简单的静态服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000。

## 部署
将仓库推送到任意静态托管平台即可（GitHub Pages、Cloudflare Pages、EdgeOne Pages、Vercel、Netlify、Esa Pages 等）。无需构建步骤，保持 `index.html`、`styles.css`、`script.js` 三个文件即可。
