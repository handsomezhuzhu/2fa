# 临时 2FA 生成器

纯前端的 TOTP 工具，支持手动输入密钥、摄像头扫码或上传二维码图片，适合部署到 GitHub Pages、Cloudflare Pages、EdgeOne Pages、Vercel、Netlify、Esa Pages 等静态托管平台。

## 功能
- 手动输入 Base32 密钥（优先入口）或直接粘贴 `otpauth://` URI。
- 摄像头实时扫描二维码，自动解析 TOTP 信息。
- 上传图片识别二维码，无需服务器参与。
- 默认 30 秒、6 位验证码，可在“高级设置”中调整算法（SHA-1/256/512）、位数、周期、时间偏移。
- 验证码自动刷新并支持一键复制。
- 所有计算在浏览器完成，不写入后端或持久存储。

## 本地预览
直接打开 `index.html` 即可使用，或使用简单的静态服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000。

## 部署
将仓库推送到任意静态托管平台即可（GitHub Pages、Cloudflare Pages、EdgeOne Pages、Vercel、Netlify、Esa Pages 等）。无需构建步骤，保持 `index.html`、`styles.css`、`script.js` 三个文件即可。
