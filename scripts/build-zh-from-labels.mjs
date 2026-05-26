import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

process.env.BUILD_ZH_MAP = '1';
const { translateLabel } = await import('./translate-label.mjs');

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src/roadmaps');
const labels = new Set();

for (const dir of readdirSync(root).filter((d) => !d.includes('.'))) {
  const file = join(root, dir, 'data.ts');
  try {
    const text = readFileSync(file, 'utf8');
    for (const m of text.matchAll(/"label": "((?:\\.|[^"\\])*)"/g)) {
      labels.add(m[1].replace(/\\"/g, '"'));
    }
  } catch {
    // skip
  }
}

const map = Object.fromEntries([...labels].sort().map((label) => [label, translateLabel(label)]));
writeFileSync(join(dirname(fileURLToPath(import.meta.url)), 'generated-zh-map.json'), JSON.stringify(map, null, 2));

const bad = Object.entries(map).filter(([, zh]) => !/[\u4e00-\u9fff]/.test(zh));
console.log(`labels: ${labels.size}, without Chinese: ${bad.length}`);
