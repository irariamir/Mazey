/* مازِی — پل دمو برای مرورگر. در اپ ویندوز، bridge.js جایگزین می‌شود. */
(() => {
'use strict';
if (window.__TAURI__) return;
const listeners = {};
const on = (ev) => (cb) => { (listeners[ev] || (listeners[ev] = [])).push(cb); };
const emit = (ev, payload) => (listeners[ev] || []).forEach((cb) => { try { cb(payload); } catch (e) { console.warn(e); } });
const KEY = 'mazey-settings-v11';
const defaults = {
  autoHide: false, alwaysShow: false, dndHint: true, toured: false, calendar: 'shamsi-fa', hideVideo: true,
  copyPreview: true, clipHistory: true, deviceAlerts: true, downloadAlerts: true, shelf: true, visuals: true,
  notifSeconds: 4, face: 'eyes', noteHotkey: true, vaultLength: 18, vaultSymbols: true, lastUser: '',
  skin: 'everest', musicTheme: 'everest', netAlerts: true, sensorDot: true, smartCopy: true, musicReact: true, islandCalc: true,
  autoUpdate: false, autoStartOn: false, version: '1.0.8', appName: 'مازی',
};
let settings = { ...defaults };
try { Object.assign(settings, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(settings)); } catch {} };

let notes = [], clips = [], vault = [], shelf = [];
try { notes = JSON.parse(localStorage.getItem('mazey-notes') || '[]'); } catch {}
try { clips = JSON.parse(localStorage.getItem('mazey-clips') || '[]'); } catch {}
try { vault = JSON.parse(localStorage.getItem('mazey-vault') || '[]'); } catch {}
const nid = () => Date.now() + Math.random();

const media = {
  active: true, playing: true, title: 'قله', artist: 'گروه آموزشی ماز',
  pos: 42000, dur: 218000, at: performance.now(), key: 'everest-1', video: false, canSeek: true,
};

window.qazi = {
  onCursor: on('cursor'), onHelper: on('helper'), onSettings: on('settings'), onClip: on('clip'), onDownload: on('download'),
  onShelf: on('shelf'), onShelfDragging: on('shelf-dragging'), onClips: on('clips'), onLevels: on('levels'),
  onPress: on('press'), onRelease: on('release'), onOpen: on('open'), onHotkey: on('hotkey'), onNotes: on('notes'), onVault: on('vault'), onOcr: on('ocr'), onOcrRead: on('ocr-read'), onSpeedo: on('speedo'),

  setInteractive: () => {},
  setTyping: async () => ({}),
  lostClick: () => {},
  media: (cmd) => {
    if (cmd === 'toggle') media.playing = !media.playing;
    if (cmd === 'next' || cmd === 'prev') {
      media.title = cmd === 'next' ? 'اورست' : 'شروع از صفر';
      media.pos = 0; media.at = performance.now();
    }
    emit('helper', { t: 'media', ...media, pos: media.pos + (media.playing ? performance.now() - media.at : 0) });
  },
  seek: (ms) => { media.pos = ms; media.at = performance.now(); },
  setVolume: () => {},
  toggleMute: () => {},
  setViz: () => {},
  activate: () => {},
  dismiss: () => {},
  clearNotifs: () => {},
  hintShown: () => { settings.dndHint = true; save(); },
  pathsFor: async (files) => [...files].map((f) => f.name),
  shelfAdd: async (paths) => { (paths || []).forEach((p) => shelf.push({ path: p, name: String(p).split(/[/\\]/).pop(), type: '' })); emit('shelf', shelf); return shelf; },
  shelfAddData: async () => shelf,
  shelfAddUrl: async () => shelf,
  shelfGet: async () => shelf,
  shelfRemove: (path) => { shelf = shelf.filter((f) => f.path !== path); emit('shelf', shelf); },
  shelfClear: () => { shelf = []; emit('shelf', shelf); },
  shelfReveal: () => {},
  shelfDrag: () => {},
  openDownload: () => {},
  clipsGet: async () => clips,
  clipCopy: (id) => { const c = clips.find((x) => x.id === id); if (c) navigator.clipboard?.writeText(c.preview || ''); },
  clipPin: (id) => { const c = clips.find((x) => x.id === id); if (c) c.pinned = !c.pinned; emit('clips', clips); },
  clipRemove: (id) => { clips = clips.filter((x) => x.id !== id); emit('clips', clips); },
  clipsClear: () => { clips = clips.filter((c) => c.pinned); emit('clips', clips); },
  copy: (text) => navigator.clipboard?.writeText(String(text || '')),
  getSettings: async () => ({ ...settings }),
  setSetting: (key, value) => { settings[key] = value; save(); emit('settings', { ...settings }); },
  setCalendar: (value) => { settings.calendar = value; save(); emit('settings', { ...settings }); },
  action: (name) => {
    if (name === 'screenshot') emit('helper', { hud: { icon: 'shot', title: 'اسکرین‌شات', text: 'در دمو ذخیره نمی‌شود' } });
  },
  ocrDone: () => {},
  speedo: async () => ({ ok: false }),
  updateCheck: async () => 'none',
  updateInstall: async () => false,
  openUrl: (url) => { try { window.open(url, '_blank', 'noopener'); } catch {} },
  notesGet: async () => notes,
  noteSave: async (id, text, remind) => {
    if (id) { const n = notes.find((x) => x.id === id); if (n) { n.text = text; n.remind = remind || 0; } }
    else notes.unshift({ id: nid(), text, remind: remind || 0, at: Date.now(), pinned: false });
    localStorage.setItem('mazey-notes', JSON.stringify(notes)); emit('notes', notes); return notes;
  },
  notePin: async (id) => { const n = notes.find((x) => x.id === id); if (n) n.pinned = !n.pinned; emit('notes', notes); return notes; },
  noteFired: async () => notes,
  noteRemove: async (id) => { notes = notes.filter((x) => x.id !== id); localStorage.setItem('mazey-notes', JSON.stringify(notes)); emit('notes', notes); return notes; },
  vaultList: async () => vault.map((v) => ({ ...v, pass: undefined })),
  vaultGenerate: async (len, symbols) => {
    const abc = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789' + (symbols ? '!@#$%*?' : '');
    let p = ''; for (let i = 0; i < (len || 18); i++) p += abc[Math.floor(Math.random() * abc.length)];
    return p;
  },
  vaultSave: async (site, user, pass) => {
    const id = nid(); vault.unshift({ id, site, user, pass }); localStorage.setItem('mazey-vault', JSON.stringify(vault)); emit('vault', { items: vault.map((v) => ({ ...v, pass: undefined })) }); return id;
  },
  vaultEdit: async (id, site, user) => { const v = vault.find((x) => x.id === id); if (v) { v.site = site; v.user = user; } emit('vault', { items: vault.map((x) => ({ ...x, pass: undefined })) }); return true; },
  fgContext: async () => ({}),
  vaultCopy: async (id, what) => { const v = vault.find((x) => x.id === id); if (!v) return; navigator.clipboard?.writeText(what === 'user' ? v.user : v.pass); return true; },
  copySecret: async (text) => navigator.clipboard?.writeText(text),
  vaultReveal: async (id) => { const v = vault.find((x) => x.id === id); return v ? v.pass : ''; },
  vaultRemove: async (id) => { vault = vault.filter((x) => x.id !== id); localStorage.setItem('mazey-vault', JSON.stringify(vault)); emit('vault', { items: vault.map((x) => ({ ...x, pass: undefined })) }); },
};

window.addEventListener('mousemove', (e) => emit('cursor', { x: e.clientX, y: e.clientY }));
window.addEventListener('mouseup', () => emit('release', {}));

const NB = 24;
let t0 = performance.now();
function tickLevels() {
  const t = (performance.now() - t0) / 1000;
  const levels = new Float32Array(NB);
  const on = media.playing;
  for (let i = 0; i < NB; i++) {
    levels[i] = on ? Math.max(0, 0.25 + 0.35 * Math.sin(t * 2.1 + i * 0.4) + 0.3 * Math.sin(t * 5.3 + i) * (i < 6 ? 1 : 0.45)) : 0.04;
  }
  emit('levels', [...levels]);
  requestAnimationFrame(tickLevels);
}
requestAnimationFrame(tickLevels);

function pushMedia() {
  emit('helper', { t: 'media', ...media, pos: media.pos + (media.playing ? performance.now() - media.at : 0) });
}
setTimeout(pushMedia, 400);
setInterval(pushMedia, 900);
setTimeout(() => emit('helper', { t: 'vol', level: 0.62, mute: false }), 500);

setTimeout(() => {
  emit('helper', { t: 'notif', id: 'maze-1', app: 'ماز', title: 'آزمون بعدی نزدیک است', body: 'بزن برو biomaze.ir' });
}, 11000);
setTimeout(() => {
  emit('clip', { kind: 'text', text: 'https://biomaze.ir', preview: 'https://biomaze.ir' });
}, 16000);
})();
