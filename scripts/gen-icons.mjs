// 生成 tabBar PNG 图标（81x81，透明底，纯 Node 无依赖）
// 用法: node scripts/gen-icons.cjs
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets', 'tabbar');
const SIZE = 81;
const GRAY = [153, 153, 153]; // #999999 普通
const BLUE = [37, 99, 235];   // #2563eb 选中

// ---------- PNG 编码 ----------
const crcTable = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}
function encodePNG(pixels) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(SIZE, 0);
  ihdr.writeUInt32BE(SIZE, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8bit RGBA
  const raw = Buffer.alloc(SIZE * (SIZE * 4 + 1));
  for (let y = 0; y < SIZE; y++) {
    raw[y * (SIZE * 4 + 1)] = 0; // filter: none
    pixels.copy(raw, y * (SIZE * 4 + 1) + 1, y * SIZE * 4, (y + 1) * SIZE * 4);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ---------- 画布 ----------
function makeCanvas() { return Buffer.alloc(SIZE * SIZE * 4, 0); }
function put(px, x, y, color) {
  if (x < 0 || y < 0 || x >= SIZE || y >= SIZE) return;
  const i = (y * SIZE + x) * 4;
  px[i] = color[0]; px[i + 1] = color[1]; px[i + 2] = color[2]; px[i + 3] = 255;
}
function fillRect(px, x, y, w, h, color) {
  for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) put(px, i, j, color);
}
// 圆角矩形描边（坐标可为小数，向内缩进 t 为线宽）
function roundRectStroke(px, x0, y0, x1, y1, r, t, color) {
  const h = t / 2;
  for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) {
    const inOuter = (cx, cy, rr) => {
      const dx = Math.max(cx + rr - x, x - (cx - rr), 0);
      const dy = Math.max(cy + rr - y, y - (cy - rr), 0);
      return dx * dx + dy * dy <= rr * rr;
    };
    if (inOuter((x0 + x1) / 2, (y0 + y1) / 2, (x1 - x0) / 2 + h) &&
        !inOuter((x0 + x1) / 2, (y0 + y1) / 2, (x1 - x0) / 2 - h)) put(px, x, y, color);
  }
}
// 圆环描边（可限制只画上半部分）
function ringStroke(px, cx, cy, r, t, color, topHalfOnly = false) {
  const h = t / 2;
  for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) {
    if (topHalfOnly && y > cy) continue;
    const d = Math.hypot(x - cx, y - cy);
    if (d >= r - h && d <= r + h) put(px, x, y, color);
  }
}
function hline(px, x0, x1, y, t, color) { fillRect(px, x0, y, x1 - x0, t, color); }

// ---------- 三个图标 ----------
function drawCalendar(color) {
  const px = makeCanvas();
  roundRectStroke(px, 10, 16, 71, 72, 8, 5, color);   // 主体框
  fillRect(px, 22, 8, 6, 12, color);                   // 左耳
  fillRect(px, 53, 8, 6, 12, color);                   // 右耳
  hline(px, 10, 71, 28, 5, color);                     // 表头分隔线
  for (const yy of [42, 56]) for (const xx of [22, 38, 54]) fillRect(px, xx, yy, 7, 7, color); // 日期点
  return px;
}
function drawTasks(color) {
  const px = makeCanvas();
  roundRectStroke(px, 12, 10, 69, 72, 8, 5, color);    // 面板
  for (const y of [24, 40, 56]) {
    fillRect(px, 20, y, 8, 8, color);                  // 勾选点
    hline(px, 34, 61, y + 2, 5, color);                // 文本行
  }
  return px;
}
function drawMine(color) {
  const px = makeCanvas();
  ringStroke(px, 40.5, 28, 12, 5, color);              // 头部
  ringStroke(px, 40.5, 66, 21, 5, color, true);        // 肩部（上半圆）
  return px;
}

mkdirSync(ROOT, { recursive: true });
const icons = {
  'calendar': drawCalendar, 'calendar-selected': drawCalendar,
  'tasks': drawTasks, 'tasks-selected': drawTasks,
  'mine': drawMine, 'mine-selected': drawMine,
};
for (const [name, draw] of Object.entries(icons)) {
  const color = name.endsWith('-selected') ? BLUE : GRAY;
  writeFileSync(join(ROOT, `${name}.png`), encodePNG(draw(color)));
  console.log('OK', `${name}.png`);
}
