const SECURE_PAYLOAD = {"v":1,"iterations":250000,"salt":"hBxiC6zRPRei5a8aDnVo/g==","iv":"GgchJczR9hCT6pMv","aad":"bWFpLWxldHRlci12MQ==","ciphertext":"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"};

const letter = document.getElementById('letter');
const letterColumn = document.getElementById('letterColumn');
const codeTemplate = document.getElementById('codeTemplate');
const unlockForm = document.getElementById('unlockForm');
const unlockInput = document.getElementById('unlockInput');
const unlockError = document.getElementById('unlockError');
const unlockInner = document.getElementById('unlockInner');

const state = { running: false, skipCurrent: false, aborted: false, started: false };
let parts = [];

function fromB64(s) {
  const raw = atob(s);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

async function decryptLetter(password) {
  if (!window.crypto?.subtle) throw new Error('secure-context-required');
  const enc = new TextEncoder();
  const material = await crypto.subtle.importKey('raw', enc.encode(password.normalize('NFC')), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: fromB64(SECURE_PAYLOAD.salt), iterations: SECURE_PAYLOAD.iterations, hash: 'SHA-256' },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: fromB64(SECURE_PAYLOAD.iv), additionalData: fromB64(SECURE_PAYLOAD.aad) },
    key,
    fromB64(SECURE_PAYLOAD.ciphertext)
  );
  return JSON.parse(new TextDecoder().decode(plain));
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function charDelay(ch, next, isCode = false) {
  if (state.skipCurrent) return 0;
  if (isCode) {
    if (ch === '\n') return 210;
    return 38 + Math.floor(Math.random() * 20);
  }
  if (ch === '\n') return 390;
  if (ch === '…') return 1020;
  if ('.؟!'.includes(ch)) return 680;
  if ('،,:؛'.includes(ch)) return 315;
  if (ch === ' ' && next === ' ') return 105;
  return 63 + Math.floor(Math.random() * 29);
}

function keepActiveInView(el) {
  const rect = el.getBoundingClientRect();
  const lower = window.innerHeight * 0.77;
  const upper = window.innerHeight * 0.18;
  if (rect.bottom > lower || rect.top < upper) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function typeText(el, text, isCode = false) {
  state.skipCurrent = false;
  if (isCode) el.parentElement.parentElement.classList.add('typing');
  else el.classList.add('typing');
  let out = '';
  for (let i = 0; i < text.length; i++) {
    if (state.aborted) break;
    if (state.skipCurrent) { el.textContent = text; break; }
    const ch = text[i];
    out += ch;
    el.textContent = out;
    if (i % 24 === 0) keepActiveInView(isCode ? el.parentElement.parentElement : el);
    await sleep(charDelay(ch, text[i + 1] || '', isCode));
  }
  if (isCode) el.parentElement.parentElement.classList.remove('typing');
  else el.classList.remove('typing');
  state.skipCurrent = false;
}

async function appendPart(part) {
  if (part.t != null) {
    const p = document.createElement('p');
    p.className = `message ${part.cls || ''}`.trim();
    p.setAttribute('dir', 'rtl');
    letterColumn.appendChild(p);
    keepActiveInView(p);
    await typeText(p, part.t);
    await sleep(part.cls === 'emphasis' ? 1650 : 1220);
    return;
  }
  if (part.code) {
    const frag = codeTemplate.content.cloneNode(true);
    const wrap = frag.querySelector('.code-wrap');
    const code = frag.querySelector('code');
    letterColumn.appendChild(frag);
    keepActiveInView(wrap);
    await sleep(700);
    await typeText(code, part.code, true);
    await sleep(1400);
  }
}

async function runLetter() {
  if (state.running) return;
  state.running = true;
  state.aborted = false;
  letter.setAttribute('aria-busy', 'true');
  for (const part of parts) {
    if (state.aborted) break;
    await appendPart(part);
  }
  letter.setAttribute('aria-busy', 'false');
  state.running = false;
}

function startExperience() {
  if (state.started) return;
  state.started = true;
  window.scrollTo({ top: 0, behavior: 'instant' });
  setTimeout(runLetter, 650);
}

unlockForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = unlockInput.value.trim();
  if (!password) return;
  unlockError.textContent = '';
  unlockInput.disabled = true;
  unlockForm.querySelector('button').disabled = true;
  try {
    parts = await decryptLetter(password);
    document.body.classList.add('unlocked');
    unlockInput.value = '';
    setTimeout(startExperience, 560);
  } catch (err) {
    unlockInput.disabled = false;
    unlockForm.querySelector('button').disabled = false;
    unlockInput.value = '';
    if (err?.message === 'secure-context-required') {
      unlockError.textContent = 'الصفحة دي محتاجة تتفتح من اللينك الآمن بتاعها.';
    } else {
      unlockError.textContent = 'جربي تاني.';
    }
    unlockInner.classList.remove('shake');
    void unlockInner.offsetWidth;
    unlockInner.classList.add('shake');
    setTimeout(() => unlockInput.focus(), 80);
  }
});

letter.addEventListener('pointerdown', (e) => {
  if (e.target.closest('button')) return;
  if (state.running) state.skipCurrent = true;
});

window.addEventListener('orientationchange', () => {
  if (!document.body.classList.contains('unlocked') && !matchMedia('(orientation: portrait) and (max-width: 950px)').matches) {
    setTimeout(() => unlockInput.focus(), 350);
  }
});

if (!matchMedia('(orientation: portrait) and (max-width: 950px)').matches) {
  setTimeout(() => unlockInput.focus(), 450);
}
