const translations = {
  'zh-CN': {
    pageTitle: '2FA',
    heroEyebrow: 'TOTP · 前端离线、只在浏览器内运行，适合各类 Pages',
    heroTitle: '2FA',
    heroNote: '纯前端一次性验证码工具',
    languageToggle: '切换语言',
    languageCode: '中',
    codeTitle: '验证码',
    account: '账户',
    copyCode: '复制',
    next: '下一个',
    inputTitle: '添加密钥',
    inputChip: '手动 / 扫描 / 上传',
    modeManual: '手动输入',
    modeScan: '扫码',
    modeUpload: '导入图片',
    secretLabel: '密钥 / otpauth',
    secretPlaceholder: 'Base32 或 otpauth://',
    show: '显示',
    hide: '隐藏',
    secretNote: '未聚焦时自动隐藏，可点击显示',
    apply: '应用',
    reset: '重置',
    advanced: '高级',
    algorithm: '算法',
    digits: '位数',
    period: '周期',
    offset: '时间偏移',
    startCamera: '开启摄像头',
    stopCamera: '停止扫描',
    scanOverlayIdle: '开启摄像头以扫描',
    scanOverlayActive: '将二维码置于取景框中央',
    scanStatusIdle: '未启动',
    scanStatusScanning: '摄像头已开启，正在扫描...',
    scanStatusUnavailable: '摄像头不可用',
    uploadTip: '上传二维码图片以解析密钥',
    uploadButton: '上传图片',
    uploadStatusIdle: '等待上传',
    uploadStatusReading: '正在读取图片...',
    uploadStatusParsed: '二维码已识别',
    uploadStatusNotFound: '未识别到二维码',
    resultHead: '解析结果',
    source: '来源',
    issuer: '发行方',
    secret: '密钥',
    copySecret: '复制',
    resultSourceNone: '无',
    waitingSecret: '等待密钥',
    metaTemplate: '算法 {algorithm} · 位数 {digits} · 周期 {period}s',
    countSeconds: '{remaining}s',
    accountUnset: '未设置',
    issuerPlaceholder: '—',
    guide: '使用说明',
    tipPaste: '优先粘贴 Base32 密钥或 otpauth:// 链接，保持输入框未聚焦时内容会自动遮挡。',
    tipScan: '若有二维码，可在“扫码”或“导入图片”中解析。',
    tipCopy: '验证码随周期刷新，可随时复制；解析结果中的密钥默认隐藏并可单独复制。',
    tipOffline: '所有计算均在浏览器完成，适合 GitHub Pages、Cloudflare Pages、EdgeOne Pages、Vercel、Netlify、Esa Pages 等静态托管。',
    messageEnterSecret: '请输入 Base32 密钥或 otpauth:// 链接',
    messageSecretUpdated: '密钥已更新，验证码自动刷新中',
    messageSecretCleared: '已清除当前密钥',
    messageCopyCode: '已复制到剪贴板',
    messageCopySecret: '密钥已复制',
    messageCopyFailed: '复制失败：{reason}',
    errorInvalidChar: '密钥含无效字符',
    errorUnsupportedAlgorithm: '二维码中的算法不受支持',
    errorMissingSecret: '二维码中缺少 secret',
    errorOnlyTotp: '仅支持 TOTP',
    errorGenerate: '生成验证码失败：{reason}',
    cameraError: '无法开启摄像头：{reason}',
    qrParsedFromImage: '已从图片解析二维码',
    qrNotFound: '未识别到二维码',
    sourceManual: '手动',
    sourceCamera: '摄像头',
    sourceImage: '图片',
    defaultIssuer: '—',
    defaultResultAccount: '—',
  },
  en: {
    pageTitle: '2FA',
    heroEyebrow: 'TOTP · Offline front-end, runs in-browser for any Pages host',
    heroTitle: '2FA',
    heroNote: 'Browser-only one-time code helper',
    languageToggle: 'Switch language',
    languageCode: 'EN',
    codeTitle: 'Codes',
    account: 'Account',
    copyCode: 'Copy',
    next: 'Next',
    inputTitle: 'Add secret',
    inputChip: 'Manual / Scan / Upload',
    modeManual: 'Manual',
    modeScan: 'Scan',
    modeUpload: 'Image',
    secretLabel: 'Secret / otpauth',
    secretPlaceholder: 'Base32 or otpauth://',
    show: 'Show',
    hide: 'Hide',
    secretNote: 'Hidden when unfocused; click to reveal',
    apply: 'Apply',
    reset: 'Reset',
    advanced: 'Advanced',
    algorithm: 'Algorithm',
    digits: 'Digits',
    period: 'Period',
    offset: 'Time offset',
    startCamera: 'Start camera',
    stopCamera: 'Stop scan',
    scanOverlayIdle: 'Enable camera to scan',
    scanOverlayActive: 'Center the QR code in the frame',
    scanStatusIdle: 'Not started',
    scanStatusScanning: 'Camera on, scanning...',
    scanStatusUnavailable: 'Camera unavailable',
    uploadTip: 'Upload a QR image to parse the secret',
    uploadButton: 'Upload image',
    uploadStatusIdle: 'Waiting for upload',
    uploadStatusReading: 'Reading image...',
    uploadStatusParsed: 'QR recognized',
    uploadStatusNotFound: 'No QR code found',
    resultHead: 'Parsed result',
    source: 'Source',
    issuer: 'Issuer',
    secret: 'Secret',
    copySecret: 'Copy',
    resultSourceNone: 'None',
    waitingSecret: 'Waiting for secret',
    metaTemplate: 'Algo {algorithm} · Digits {digits} · Period {period}s',
    countSeconds: '{remaining}s',
    accountUnset: 'Not set',
    issuerPlaceholder: '—',
    guide: 'Guide',
    tipPaste: 'Prefer pasting a Base32 secret or otpauth:// URI; the field hides when unfocused.',
    tipScan: 'Use “Scan” or “Image” to read QR codes.',
    tipCopy: 'Codes refresh automatically; copy codes or secrets anytime.',
    tipOffline: 'All calculations stay in the browser—great for GitHub Pages, Cloudflare Pages, EdgeOne Pages, Vercel, Netlify, Esa Pages, etc.',
    messageEnterSecret: 'Enter a Base32 secret or otpauth:// link',
    messageSecretUpdated: 'Secret updated; codes refresh automatically',
    messageSecretCleared: 'Secret cleared',
    messageCopyCode: 'Copied to clipboard',
    messageCopySecret: 'Secret copied',
    messageCopyFailed: 'Copy failed: {reason}',
    errorInvalidChar: 'Secret contains invalid characters',
    errorUnsupportedAlgorithm: 'Algorithm in the QR is unsupported',
    errorMissingSecret: 'QR missing secret',
    errorOnlyTotp: 'Only TOTP is supported',
    errorGenerate: 'Failed to generate code: {reason}',
    cameraError: 'Cannot enable camera: {reason}',
    qrParsedFromImage: 'QR decoded from image',
    qrNotFound: 'No QR code detected',
    sourceManual: 'Manual',
    sourceCamera: 'Camera',
    sourceImage: 'Image',
    defaultIssuer: '—',
    defaultResultAccount: '—',
  },
};

const localeOrder = ['zh-CN', 'en'];
const defaultLocale = navigator.language?.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';

function t(key, locale = state?.locale || defaultLocale) {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

function format(key, params = {}) {
  let text = t(key);
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(`{${k}}`, v);
  }
  return text;
}

const elements = {
  secretInput: document.getElementById('secret-input'),
  toggleSecret: document.getElementById('toggle-secret'),
  applyBtn: document.getElementById('apply-secret'),
  clearBtn: document.getElementById('clear-secret'),
  algoSelect: document.getElementById('algo-select'),
  digitsInput: document.getElementById('digits-input'),
  periodInput: document.getElementById('period-input'),
  offsetInput: document.getElementById('offset-input'),
  otpValue: document.getElementById('otp-value'),
  copyCodeBtn: document.getElementById('copy-inline'),
  accountLabel: document.getElementById('account-label'),
  progressBar: document.getElementById('progress-bar'),
  meta: document.getElementById('meta'),
  countText: document.getElementById('count-text'),
  cameraToggle: document.getElementById('camera-toggle'),
  upload: document.getElementById('upload'),
  video: document.getElementById('camera'),
  overlay: document.getElementById('scan-overlay'),
  scanStatus: document.getElementById('scan-status'),
  modeManual: document.getElementById('mode-manual'),
  modeScan: document.getElementById('mode-scan'),
  modeUpload: document.getElementById('mode-upload'),
  manualPane: document.getElementById('manual-pane'),
  scanPane: document.getElementById('scan-pane'),
  uploadPane: document.getElementById('upload-pane'),
  uploadStatus: document.getElementById('upload-status'),
  accountInput: document.getElementById('account-input'),
  resultSource: document.getElementById('result-source'),
  resultAccount: document.getElementById('result-account'),
  resultIssuer: document.getElementById('result-issuer'),
  resultSecret: document.getElementById('result-secret'),
  toggleResultSecret: document.getElementById('toggle-result-secret'),
  copySecretBtn: document.getElementById('copy-secret'),
  nextOtp: document.getElementById('next-otp'),
  languageToggle: document.getElementById('language-toggle'),
  languageCode: document.getElementById('language-code'),
};

const state = {
  locale: defaultLocale,
  label: t('accountUnset', defaultLocale),
  issuer: t('defaultIssuer', defaultLocale),
  secret: null,
  rawSecret: '',
  digits: 6,
  period: 30,
  algorithm: 'SHA-1',
  offset: 0,
  stream: null,
  timer: null,
  lastCode: null,
  nextCode: null,
  inputRevealed: false,
  resultRevealed: false,
};

function showMessage(text, tone = 'info') {
  const palette = {
    info: 'var(--muted)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    danger: 'var(--danger)',
  };
  elements.meta.textContent = text;
  elements.meta.style.color = palette[tone] || palette.info;
}

function normalizeAlgorithm(input) {
  const normalized = input.toUpperCase().replace(/[^A-Z0-9-]/g, '');
  const map = {
    SHA1: 'SHA-1',
    'SHA-1': 'SHA-1',
    SHA256: 'SHA-256',
    'SHA-256': 'SHA-256',
    SHA512: 'SHA-512',
    'SHA-512': 'SHA-512',
  };
  return map[normalized] || null;
}

function decodeBase32(input) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  const sanitized = input.replace(/\s+/g, '').replace(/=+$/, '').toUpperCase();
  let bits = '';
  for (const char of sanitized) {
    const idx = alphabet.indexOf(char);
    if (idx === -1) {
      throw new Error(t('errorInvalidChar'));
    }
    bits += idx.toString(2).padStart(5, '0');
  }
  const bytes = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes.push(parseInt(bits.slice(i, i + 8), 2));
  }
  return new Uint8Array(bytes);
}

function parseOtpUri(value) {
  if (!value.startsWith('otpauth://')) return null;
  const url = new URL(value);
  const type = url.hostname.toLowerCase();
  if (type !== 'totp') {
    throw new Error(t('errorOnlyTotp'));
  }
  const label = decodeURIComponent(url.pathname.replace(/^\//, '')) || t('accountUnset');
  const params = url.searchParams;
  const secret = params.get('secret');
  if (!secret) {
    throw new Error(t('errorMissingSecret'));
  }
  const algorithmParam = params.get('algorithm');
  const normalizedAlgorithm = algorithmParam ? normalizeAlgorithm(algorithmParam) : 'SHA-1';
  if (!normalizedAlgorithm) {
    throw new Error(t('errorUnsupportedAlgorithm'));
  }

  return {
    label,
    secret,
    issuer: params.get('issuer') || t('defaultIssuer'),
    algorithm: normalizedAlgorithm,
    digits: Number(params.get('digits')) || 6,
    period: Number(params.get('period')) || 30,
  };
}

async function hmac(message, secret, algorithm) {
  const key = await crypto.subtle.importKey('raw', secret, { name: 'HMAC', hash: { name: algorithm } }, false, ['sign']);
  return crypto.subtle.sign('HMAC', key, message);
}

async function generateTotp(secret, digits, period, algorithm, offset, step = 0) {
  const epochSeconds = Math.floor(Date.now() / 1000) + Number(offset || 0);
  const counter = Math.floor(epochSeconds / period) + step;
  const counterBytes = new ArrayBuffer(8);
  const view = new DataView(counterBytes);
  view.setUint32(0, Math.floor(counter / 2 ** 32), false);
  view.setUint32(4, counter >>> 0, false);
  const mac = await hmac(counterBytes, secret, algorithm);
  const macBytes = new Uint8Array(mac);
  const offsetBits = macBytes[macBytes.length - 1] & 0x0f;
  const binary =
    ((macBytes[offsetBits] & 0x7f) << 24) |
    ((macBytes[offsetBits + 1] & 0xff) << 16) |
    ((macBytes[offsetBits + 2] & 0xff) << 8) |
    (macBytes[offsetBits + 3] & 0xff);
  const otp = binary % 10 ** digits;
  return otp.toString().padStart(digits, '0');
}

async function refreshCode() {
  if (!state.secret) return;
  try {
    const code = await generateTotp(state.secret, state.digits, state.period, state.algorithm, state.offset);
    const next = await generateTotp(state.secret, state.digits, state.period, state.algorithm, state.offset, 1);
    state.lastCode = code;
    state.nextCode = next;
    elements.otpValue.textContent = code;
    elements.nextOtp.textContent = next;
    elements.copyCodeBtn.disabled = false;
  } catch (err) {
    console.error(err);
    showMessage(format('errorGenerate', { reason: err.message }), 'danger');
  }
}

function updateCountdown() {
  if (!state.secret) {
    elements.countText.textContent = t('waitingSecret');
    elements.progressBar.style.width = '0%';
    elements.otpValue.textContent = '------';
    elements.nextOtp.textContent = '------';
    elements.copyCodeBtn.disabled = true;
    return;
  }
  const now = Date.now();
  const cycle = state.period * 1000;
  const offsetMs = Number(state.offset || 0) * 1000;
  const elapsed = (now + offsetMs) % cycle;
  const remaining = Math.max(0, Math.floor((cycle - elapsed) / 1000));
  elements.countText.textContent = format('countSeconds', { remaining });
  const percent = Math.min(100, Math.max(0, (elapsed / cycle) * 100));
  elements.progressBar.style.width = `${percent}%`;
}

function startTicker() {
  if (state.timer) cancelAnimationFrame(state.timer);
  const tick = async () => {
    updateCountdown();
    if (!state.secret) {
      state.timer = requestAnimationFrame(tick);
      return;
    }
    const now = Date.now();
    const cycle = state.period * 1000;
    const offsetMs = Number(state.offset || 0) * 1000;
    const elapsed = (now + offsetMs) % cycle;
    if (elapsed < 200) {
      await refreshCode();
    }
    state.timer = requestAnimationFrame(tick);
  };
  state.timer = requestAnimationFrame(tick);
}

function maskSecret(value) {
  if (!value) return '••••••••';
  return '•'.repeat(Math.max(8, Math.min(20, value.length)));
}

function updateResult(sourceLabel = t('sourceManual')) {
  elements.resultSource.textContent = sourceLabel;
  elements.resultAccount.textContent = state.label || t('defaultResultAccount');
  elements.resultIssuer.textContent = state.issuer || t('issuerPlaceholder');
  const show = state.resultRevealed;
  elements.resultSecret.textContent = show ? state.rawSecret || t('defaultResultAccount') : maskSecret(state.rawSecret);
  elements.toggleResultSecret.textContent = show ? t('hide') : t('show');
  elements.copySecretBtn.disabled = !state.rawSecret;
}

function setSecretVisibility(show) {
  state.inputRevealed = show;
  elements.secretInput.type = show ? 'text' : 'password';
  elements.toggleSecret.textContent = show ? t('hide') : t('show');
}

function updateLabels() {
  elements.accountLabel.textContent = state.label || t('accountUnset');
  elements.meta.textContent = format('metaTemplate', {
    algorithm: state.algorithm,
    digits: state.digits,
    period: state.period,
  });
}

function parseAndApply(rawValue, accountOverride, sourceLabel = t('sourceManual')) {
  const trimmed = rawValue.trim();
  if (!trimmed) {
    showMessage(t('messageEnterSecret'));
    return;
  }
  try {
    const otpData = parseOtpUri(trimmed);
    if (otpData) {
      state.label = otpData.issuer && otpData.issuer !== t('issuerPlaceholder') ? `${otpData.issuer} (${otpData.label})` : otpData.label;
      state.issuer = otpData.issuer || t('issuerPlaceholder');
      state.rawSecret = otpData.secret;
      state.secret = decodeBase32(otpData.secret);
      state.digits = otpData.digits;
      state.period = otpData.period;
      state.algorithm = otpData.algorithm;
      elements.algoSelect.value = state.algorithm;
      elements.digitsInput.value = state.digits;
      elements.periodInput.value = state.period;
    } else {
      state.label = accountOverride || t('sourceManual');
      state.issuer = t('issuerPlaceholder');
      state.rawSecret = trimmed;
      state.secret = decodeBase32(trimmed);
    }
    state.offset = Number(elements.offsetInput.value || 0);
    updateLabels();
    refreshCode();
    updateResult(sourceLabel);
    showMessage(t('messageSecretUpdated'), 'success');
  } catch (err) {
    showMessage(err.message, 'danger');
  }
}

function handleApply() {
  state.algorithm = normalizeAlgorithm(elements.algoSelect.value) || 'SHA-1';
  state.digits = Math.min(10, Math.max(6, Number(elements.digitsInput.value) || 6));
  state.period = Math.min(120, Math.max(10, Number(elements.periodInput.value) || 30));
  state.offset = Number(elements.offsetInput.value || 0);
  parseAndApply(elements.secretInput.value, elements.accountInput.value.trim(), t('sourceManual'));
}

function clearAll() {
  state.label = t('accountUnset');
  state.issuer = t('issuerPlaceholder');
  state.secret = null;
  state.rawSecret = '';
  elements.secretInput.value = '';
  elements.accountInput.value = '';
  elements.otpValue.textContent = '------';
  elements.accountLabel.textContent = t('accountUnset');
  elements.nextOtp.textContent = '------';
  elements.copyCodeBtn.disabled = true;
  state.lastCode = null;
  state.nextCode = null;
  updateResult(t('sourceManual'));
  showMessage(t('messageSecretCleared'), 'warning');
}

async function copyCode() {
  if (!state.lastCode) return;
  try {
    await navigator.clipboard.writeText(state.lastCode);
    showMessage(t('messageCopyCode'), 'success');
  } catch (err) {
    showMessage(format('messageCopyFailed', { reason: err.message }), 'danger');
  }
}

async function copySecret() {
  if (!state.rawSecret) return;
  try {
    await navigator.clipboard.writeText(state.rawSecret);
    showMessage(t('messageCopySecret'), 'success');
  } catch (err) {
    showMessage(format('messageCopyFailed', { reason: err.message }), 'danger');
  }
}

async function startCamera() {
  try {
    elements.cameraToggle.disabled = true;
    state.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    elements.video.srcObject = state.stream;
    await elements.video.play();
    elements.scanStatus.textContent = t('scanStatusScanning');
    elements.overlay.textContent = t('scanOverlayActive');
    elements.cameraToggle.textContent = t('stopCamera');
    scanLoop();
  } catch (err) {
    showMessage(format('cameraError', { reason: err.message }), 'danger');
    elements.scanStatus.textContent = t('scanStatusUnavailable');
    stopCamera();
  } finally {
    elements.cameraToggle.disabled = false;
  }
}

function stopCamera() {
  if (state.stream) {
    state.stream.getTracks().forEach((track) => track.stop());
    state.stream = null;
  }
  elements.video.srcObject = null;
  elements.cameraToggle.textContent = t('startCamera');
  elements.scanStatus.textContent = t('scanStatusIdle');
  elements.overlay.textContent = t('scanOverlayIdle');
}

function toggleCamera() {
  if (state.stream) {
    stopCamera();
  } else {
    startCamera();
  }
}

function scanLoop() {
  if (!state.stream) return;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const render = () => {
    if (!state.stream) return;
    canvas.width = elements.video.videoWidth;
    canvas.height = elements.video.videoHeight;
    ctx.drawImage(elements.video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      elements.scanStatus.textContent = t('uploadStatusParsed');
      stopCamera();
      parseAndApply(code.data, elements.accountInput.value.trim(), t('sourceCamera'));
      return;
    }
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
}

function handleUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  elements.uploadStatus.textContent = t('uploadStatusReading');
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        parseAndApply(code.data, elements.accountInput.value.trim(), t('sourceImage'));
        elements.uploadStatus.textContent = t('uploadStatusParsed');
        showMessage(t('qrParsedFromImage'), 'success');
      } else {
        elements.uploadStatus.textContent = t('uploadStatusNotFound');
        showMessage(t('qrNotFound'), 'warning');
      }
    };
    img.onerror = () => {
      elements.uploadStatus.textContent = t('uploadStatusNotFound');
      showMessage(t('qrNotFound'), 'danger');
    };
    img.src = reader.result;
  };
  reader.onerror = () => {
    elements.uploadStatus.textContent = t('uploadStatusNotFound');
    showMessage(t('qrNotFound'), 'danger');
  };
  reader.readAsDataURL(file);
}

function switchMode(mode) {
  const isManual = mode === 'manual';
  const isScan = mode === 'scan';
  elements.modeManual.classList.toggle('active', isManual);
  elements.modeManual.setAttribute('aria-selected', isManual);
  elements.modeScan.classList.toggle('active', isScan);
  elements.modeScan.setAttribute('aria-selected', isScan);
  elements.modeUpload.classList.toggle('active', mode === 'upload');
  elements.modeUpload.setAttribute('aria-selected', mode === 'upload');
  elements.manualPane.hidden = !isManual;
  elements.scanPane.hidden = !isScan;
  elements.uploadPane.hidden = mode !== 'upload';
  if (!isScan) {
    stopCamera();
  }
  if (mode === 'upload') {
    elements.uploadStatus.textContent = t('uploadStatusIdle');
  }
}

function applyStaticTranslations() {
  document.title = t('pageTitle');
  document.documentElement.lang = state.locale;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  elements.secretInput.placeholder = t('secretPlaceholder');
  elements.copyCodeBtn.setAttribute('aria-label', t('copyCode'));
  elements.languageToggle.setAttribute('aria-label', t('languageToggle'));
  elements.languageToggle.setAttribute('title', t('languageToggle'));
  elements.languageCode.textContent = t('languageCode');
  elements.overlay.textContent = state.stream ? t('scanOverlayActive') : t('scanOverlayIdle');
  elements.scanStatus.textContent = state.stream ? t('scanStatusScanning') : t('scanStatusIdle');
  elements.uploadStatus.textContent = t('uploadStatusIdle');
  updateLabels();
  updateResult(t('resultSourceNone'));
  updateCountdown();
}

function cycleLocale() {
  const currentIndex = localeOrder.indexOf(state.locale);
  const nextLocale = localeOrder[(currentIndex + 1) % localeOrder.length];
  if (!state.secret && state.label === t('accountUnset', state.locale)) {
    state.label = t('accountUnset', nextLocale);
  }
  if (!state.secret && state.issuer === t('issuerPlaceholder', state.locale)) {
    state.issuer = t('issuerPlaceholder', nextLocale);
  }
  state.locale = nextLocale;
  applyStaticTranslations();
}

function init() {
  applyStaticTranslations();

  elements.applyBtn.addEventListener('click', handleApply);
  elements.clearBtn.addEventListener('click', clearAll);
  elements.copyCodeBtn.addEventListener('click', copyCode);
  elements.copySecretBtn.addEventListener('click', copySecret);
  elements.cameraToggle.addEventListener('click', toggleCamera);
  elements.upload.addEventListener('change', handleUpload);
  elements.languageToggle.addEventListener('click', cycleLocale);

  elements.secretInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleApply();
    }
  });
  elements.secretInput.addEventListener('focus', () => {
    elements.secretInput.type = 'text';
  });
  elements.secretInput.addEventListener('blur', () => setSecretVisibility(state.inputRevealed));
  elements.toggleSecret.addEventListener('click', () => setSecretVisibility(!state.inputRevealed));
  elements.toggleResultSecret.addEventListener('click', () => {
    state.resultRevealed = !state.resultRevealed;
    updateResult(elements.resultSource.textContent || t('sourceManual'));
  });
  elements.modeManual.addEventListener('click', () => switchMode('manual'));
  elements.modeScan.addEventListener('click', () => switchMode('scan'));
  elements.modeUpload.addEventListener('click', () => switchMode('upload'));

  updateLabels();
  updateResult(t('resultSourceNone'));
  startTicker();
}

window.addEventListener('DOMContentLoaded', init);
