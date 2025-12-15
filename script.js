const elements = {
  accountInput: document.getElementById('account-input'),
  secretInput: document.getElementById('secret-input'),
  applyBtn: document.getElementById('apply-secret'),
  clearBtn: document.getElementById('clear-secret'),
  algoSelect: document.getElementById('algo-select'),
  digitsInput: document.getElementById('digits-input'),
  periodInput: document.getElementById('period-input'),
  offsetInput: document.getElementById('offset-input'),
  countdown: document.getElementById('countdown'),
  otpValue: document.getElementById('otp-value'),
  copyButtons: [document.getElementById('copy-current'), document.getElementById('copy-inline')],
  accountLabel: document.getElementById('account-label'),
  progressBar: document.getElementById('progress-bar'),
  meta: document.getElementById('meta'),
  countText: document.getElementById('count-text'),
  startCamera: document.getElementById('start-camera'),
  stopCamera: document.getElementById('stop-camera'),
  upload: document.getElementById('upload'),
  video: document.getElementById('camera'),
  overlay: document.getElementById('scan-overlay'),
  scanStatus: document.getElementById('scan-status'),
};

const state = {
  label: '未设置',
  secret: null,
  digits: 6,
  period: 30,
  algorithm: 'SHA-1',
  offset: 0,
  stream: null,
  timer: null,
  lastCode: null,
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

function decodeBase32(input) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  const sanitized = input.replace(/\s+/g, '').toUpperCase();
  let bits = '';
  for (const char of sanitized) {
    const idx = alphabet.indexOf(char);
    if (idx === -1) {
      throw new Error('密钥含无效字符');
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
    throw new Error('仅支持 TOTP');
  }
  const label = decodeURIComponent(url.pathname.replace(/^\//, '')) || '未设置';
  const params = url.searchParams;
  const secret = params.get('secret');
  if (!secret) {
    throw new Error('二维码中缺少 secret');
  }
  return {
    label,
    secret,
    issuer: params.get('issuer'),
    algorithm: params.get('algorithm')?.toUpperCase() || 'SHA-1',
    digits: Number(params.get('digits')) || 6,
    period: Number(params.get('period')) || 30,
  };
}

async function hmac(message, secret, algorithm) {
  const key = await crypto.subtle.importKey('raw', secret, { name: 'HMAC', hash: { name: algorithm } }, false, ['sign']);
  return crypto.subtle.sign('HMAC', key, message);
}

async function generateTotp(secret, digits, period, algorithm, offset) {
  const epochSeconds = Math.floor(Date.now() / 1000) + Number(offset || 0);
  const counter = Math.floor(epochSeconds / period);
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
    state.lastCode = code;
    elements.otpValue.textContent = code;
    elements.copyButtons.forEach((btn) => (btn.disabled = false));
  } catch (err) {
    console.error(err);
    showMessage('生成验证码失败：' + err.message, 'danger');
  }
}

function updateCountdown() {
  if (!state.secret) {
    elements.countdown.textContent = '等待输入密钥';
    elements.countText.textContent = '等待密钥';
    elements.progressBar.style.width = '0%';
    elements.otpValue.textContent = '------';
    elements.copyButtons.forEach((btn) => (btn.disabled = true));
    return;
  }
  const now = Date.now();
  const cycle = state.period * 1000;
  const offsetMs = Number(state.offset || 0) * 1000;
  const elapsed = (now + offsetMs) % cycle;
  const remaining = Math.max(0, Math.floor((cycle - elapsed) / 1000));
  elements.countdown.textContent = `本周期剩余 ${remaining}s`;
  elements.countText.textContent = `${remaining}s`;
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

function parseAndApply(rawValue, accountOverride) {
  const trimmed = rawValue.trim();
  if (!trimmed) {
    showMessage('请输入 Base32 密钥或 otpauth:// 链接');
    return;
  }
  try {
    const otpData = parseOtpUri(trimmed);
    if (otpData) {
      state.label = otpData.issuer ? `${otpData.issuer} (${otpData.label})` : otpData.label;
      state.secret = decodeBase32(otpData.secret);
      state.digits = otpData.digits;
      state.period = otpData.period;
      state.algorithm = otpData.algorithm;
      elements.algoSelect.value = state.algorithm;
      elements.digitsInput.value = state.digits;
      elements.periodInput.value = state.period;
    } else {
      state.label = accountOverride || '自定义账户';
      state.secret = decodeBase32(trimmed);
    }
    state.offset = Number(elements.offsetInput.value || 0);
    updateLabels();
    refreshCode();
    showMessage('密钥已更新，验证码自动刷新中', 'success');
  } catch (err) {
    showMessage(err.message, 'danger');
  }
}

function updateLabels() {
  elements.accountLabel.textContent = state.label;
  elements.meta.textContent = `算法 ${state.algorithm} · 位数 ${state.digits} · 周期 ${state.period}s`;
}

function handleApply() {
  state.algorithm = elements.algoSelect.value;
  state.digits = Math.min(10, Math.max(6, Number(elements.digitsInput.value) || 6));
  state.period = Math.min(120, Math.max(10, Number(elements.periodInput.value) || 30));
  state.offset = Number(elements.offsetInput.value || 0);
  parseAndApply(elements.secretInput.value, elements.accountInput.value.trim());
}

function clearAll() {
  state.label = '未设置';
  state.secret = null;
  elements.secretInput.value = '';
  elements.accountInput.value = '';
  elements.otpValue.textContent = '------';
  elements.accountLabel.textContent = '未设置';
  elements.copyButtons.forEach((btn) => (btn.disabled = true));
  showMessage('已清除当前密钥', 'warning');
}

async function copyCode() {
  if (!state.lastCode) return;
  try {
    await navigator.clipboard.writeText(state.lastCode);
    showMessage('已复制到剪贴板', 'success');
  } catch (err) {
    showMessage('复制失败：' + err.message, 'danger');
  }
}

async function startCamera() {
  try {
    state.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    elements.video.srcObject = state.stream;
    await elements.video.play();
    elements.scanStatus.textContent = '摄像头已开启，正在扫描...';
    elements.overlay.textContent = '将二维码置于取景框中央';
    elements.startCamera.disabled = true;
    elements.stopCamera.disabled = false;
    scanLoop();
  } catch (err) {
    showMessage('无法开启摄像头：' + err.message, 'danger');
    elements.scanStatus.textContent = '摄像头不可用';
  }
}

function stopCamera() {
  if (state.stream) {
    state.stream.getTracks().forEach((track) => track.stop());
    state.stream = null;
  }
  elements.video.srcObject = null;
  elements.startCamera.disabled = false;
  elements.stopCamera.disabled = true;
  elements.scanStatus.textContent = '摄像头未启动';
  elements.overlay.textContent = '点击“开启摄像头”开始扫描';
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
      elements.scanStatus.textContent = '二维码已识别，正在解析...';
      stopCamera();
      parseAndApply(code.data, elements.accountInput.value.trim());
      return;
    }
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
}

function handleUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
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
        parseAndApply(code.data, elements.accountInput.value.trim());
        showMessage('已从图片解析二维码', 'success');
      } else {
        showMessage('未识别到二维码', 'warning');
      }
    };
    img.onerror = () => showMessage('图片读取失败', 'danger');
    img.src = reader.result;
  };
  reader.onerror = () => showMessage('文件读取失败', 'danger');
  reader.readAsDataURL(file);
}

function init() {
  elements.applyBtn.addEventListener('click', handleApply);
  elements.clearBtn.addEventListener('click', clearAll);
  elements.copyButtons.forEach((btn) => btn.addEventListener('click', copyCode));
  elements.startCamera.addEventListener('click', startCamera);
  elements.stopCamera.addEventListener('click', stopCamera);
  elements.upload.addEventListener('change', handleUpload);
  elements.secretInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleApply();
    }
  });
  updateLabels();
  startTicker();
}

window.addEventListener('DOMContentLoaded', init);
