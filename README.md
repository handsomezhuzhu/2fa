# 2FA

轻量的前端 TOTP 工具，离线运行、无需后端，支持跟随浏览器语言自动切换中英文。

## 功能（中文）
- 纯浏览器运算，适合 GitHub Pages、Cloudflare Pages、EdgeOne Pages、Vercel、Netlify、Esa Pages 等静态托管。
- 顶部语言切换（简洁图标），默认跟随浏览器语言。
- 三种录入方式：手动输入、摄像头扫码、上传二维码图片；解析结果可单独复制密钥并默认隐藏。
- 高级选项支持算法（SHA-1/256/512）、位数、周期、时间偏移调整，显示当前与下一次验证码并提供复制按钮。
- 输入框失焦自动遮挡密钥，二维码与密钥都在本地解析，安全快捷。

## Features (English)
- Browser-only TOTP helper that works on any static host (GitHub Pages, Cloudflare Pages, EdgeOne Pages, Vercel, Netlify, Esa Pages, etc.).
- Simple language toggle in the header; defaults to the browser locale (English/Chinese).
- Three input modes: manual entry, live camera scanning, and QR image upload. Parsed details stay hidden by default and support copying.
- Advanced settings for algorithm (SHA-1/256/512), digits, period, and time offset with current/next code preview and copy button.
- Secrets stay obfuscated when unfocused; all QR parsing and code generation happen locally for quick, private use.

## 本地预览 / Local preview
直接打开 `index.html` 即可，或运行简易静态服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000 。 / Open http://localhost:8000 after starting the server.
