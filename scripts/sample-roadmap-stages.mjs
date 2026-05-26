import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from 'playwright';

const BASE = 'http://127.0.0.1:8767';
const OUT = '.cursor/planning/diagram-checks';

const ROADMAPS_ALL = [
  { slug: 'golang', title: 'Go 开发路线图' },
  { slug: 'postgresql', title: 'PostgreSQL 路线图' },
  { slug: 'mongodb', title: 'MongoDB 路线图' },
  { slug: 'redis', title: 'Redis 路线图' },
  { slug: 'docker', title: 'Docker 路线图' },
  { slug: 'kubernetes', title: 'Kubernetes 路线图' },
  { slug: 'devops', title: 'DevOps 路线图' },
  { slug: 'linux', title: 'Linux 路线图' },
  { slug: 'sql', title: 'SQL 路线图' },
  { slug: 'system-design', title: 'System Design 路线图' },
  { slug: 'api-design', title: 'API Design 路线图' },
];

const ROADMAPS = process.argv.slice(2).length
  ? ROADMAPS_ALL.filter((r) => process.argv.slice(2).includes(r.slug))
  : ROADMAPS_ALL;

function loadStages(slug) {
  const data = readFileSync(`src/roadmaps/${slug}/data.ts`, 'utf8');
  const start = data.indexOf('const data = ') + 'const data = '.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  return JSON.parse(data.slice(start, end)).stages;
}

async function selectRoadmap(page, title) {
  const close = page.locator('.ant-drawer-close');
  if (await close.isVisible().catch(() => false)) {
    await close.click();
    await page.waitForTimeout(300);
  }
  await page.goto(BASE, { waitUntil: 'domcontentloaded' });
  await page.locator('.roadmap-select').click();
  await page.waitForSelector('.ant-select-dropdown:not(.ant-select-dropdown-hidden)', { timeout: 10000 });
  const holder = page.locator('.ant-select-dropdown .rc-virtual-list-holder');
  if (await holder.count()) {
    for (let i = 0; i < 12; i++) {
      const found = await page.locator('.ant-select-dropdown .ant-select-item-option').filter({ hasText: title }).count();
      if (found) break;
      await holder.evaluate((el) => { el.scrollTop += 220; });
      await page.waitForTimeout(120);
    }
  }
  const option = page.locator('.ant-select-dropdown .ant-select-item-option').filter({ hasText: title }).first();
  await option.scrollIntoViewIfNeeded();
  await option.click({ timeout: 15000 });
  await page.waitForTimeout(600);
}

async function openNode(page, label) {
  await page.evaluate((text) => {
    const btn = [...document.querySelectorAll('button.node-chip')].find((b) => {
      const en = b.querySelector('.node-en')?.textContent?.trim();
      return en === text || (b.textContent || '').includes(text);
    });
    if (!btn) throw new Error(`node not found: ${text}`);
    btn.scrollIntoView({ block: 'center', inline: 'center' });
    btn.click();
  }, label);
}

async function closeDrawer(page) {
  const close = page.locator('.ant-drawer-close');
  if (await close.isVisible().catch(() => false)) {
    await close.click();
    await page.waitForTimeout(300);
  }
}

async function sampleRoadmap(page, { slug, title }) {
  const stages = loadStages(slug);
  const dir = join(OUT, slug);
  mkdirSync(dir, { recursive: true });
  await selectRoadmap(page, title);

  const results = [];
  for (let i = 0; i < stages.length; i++) {
    const stage = stages[i];
    const node = stage.nodes[0];
    const key = `stage-${String(i + 1).padStart(2, '0')}`;
    const file = join(dir, `${key}.png`);

    try {
      console.log(`${slug} ${key} ${node.label}`);
      await closeDrawer(page);
      await openNode(page, node.label);
      await page.waitForSelector('.ant-drawer .excalidraw-exported-svg', { timeout: 12000 });
      await page.waitForTimeout(500);

      const svgInfo = await page.evaluate(() => {
        const svg = document.querySelector('.ant-drawer .excalidraw-exported-svg');
        const texts = svg ? [...svg.querySelectorAll('text')].map((t) => t.textContent?.trim()).filter(Boolean) : [];
        return { textCount: texts.length, sample: texts.slice(0, 4) };
      });

      await page.locator('.ant-drawer').screenshot({ path: file });
      results.push({ key, node: node.label, ok: svgInfo.textCount > 0, textCount: svgInfo.textCount, file });
    } catch (err) {
      results.push({ key, node: node.label, ok: false, error: String(err.message || err) });
    }
  }

  const report = { slug, total: stages.length, pass: results.filter((r) => r.ok).length, results };
  writeFileSync(join(dir, 'report.json'), JSON.stringify(report, null, 2));
  return report;
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const summary = [];

for (const roadmap of ROADMAPS) {
  summary.push(await sampleRoadmap(page, roadmap));
}

await browser.close();
console.log(JSON.stringify(summary.map(({ slug, total, pass, results }) => ({
  slug, total, pass, fail: total - pass,
  failures: results.filter((r) => !r.ok),
})), null, 2));
