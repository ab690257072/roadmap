import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from 'playwright';

const BASE = 'http://127.0.0.1:8767';
const OUT = '.cursor/planning/diagram-checks/phase-22';

const ROADMAPS = [
  { slug: 'git', title: 'Git & GitHub 路线图' },
  { slug: 'kubernetes', title: 'Kubernetes 路线图' },
  { slug: 'docker', title: 'Docker 路线图' },
  { slug: 'devops', title: 'DevOps 路线图' },
  { slug: 'linux', title: 'Linux 路线图' },
  { slug: 'sql', title: 'SQL 路线图' },
  { slug: 'api-design', title: 'API Design 路线图' },
  { slug: 'backend', title: '后端开发路线图' },
  { slug: 'golang', title: 'Go 开发路线图' },
  { slug: 'postgresql', title: 'PostgreSQL 路线图' },
  { slug: 'mongodb', title: 'MongoDB 路线图' },
  { slug: 'redis', title: 'Redis 路线图' },
  { slug: 'system-design', title: 'System Design 路线图' },
];

const ONLY = process.argv.slice(2);
const RUN_LIST = ONLY.length ? ROADMAPS.filter((r) => ONLY.includes(r.slug)) : ROADMAPS;

const junkLabel = /roadmap\.sh|Find the detailed|Continue learning|partnership|Beginner to Pro|Visit Beginner|Visit the|Click to|Related Roadmaps|Have a look|Share your|Join the|^https?:\/\//i;

function firstMapNode(stage) {
  return stage.nodes.find((n) => {
    if (!n.label || n.label === 'vertical node') return false;
    if (['button', 'paragraph', 'label'].includes(n.nodeType)) return false;
    if (junkLabel.test(n.label)) return false;
    return true;
  });
}

function loadStages(slug) {
  const path = `src/roadmaps/${slug}/data.ts`;
  const data = readFileSync(path, 'utf8');
  const exportMarker = 'export const stages = ';
  if (data.startsWith(exportMarker)) {
    const start = data.indexOf(exportMarker) + exportMarker.length;
    const endNodes = data.indexOf('];\n\nexport const nodes', start);
    const endTutorials = data.indexOf('];\n\nexport const tutorials', start);
    const end = endNodes !== -1 ? endNodes : endTutorials;
    if (end === -1) throw new Error(`cannot parse stages for ${slug}`);
    return JSON.parse(data.slice(start, end + 1));
  }
  const dataMarker = 'const data = ';
  const start = data.indexOf(dataMarker) + dataMarker.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  return JSON.parse(data.slice(start, end)).stages;
}

function teachingBlob(slug) {
  const files = [
    `src/roadmaps/${slug}/teaching.ts`,
    `src/roadmaps/${slug}/teaching-handcrafted.ts`,
    `src/roadmaps/${slug}/teaching-4-12.ts`,
  ].filter(existsSync);
  return files.map((f) => readFileSync(f, 'utf8')).join('\n');
}

function checkIdCoverage() {
  return ROADMAPS.map(({ slug }) => {
    const nodeIds = loadStages(slug).flatMap((s) => s.nodes.map((n) => n.id));
    const blob = teachingBlob(slug);
    const missing = nodeIds.filter((id) => {
      const quoted = `"${id}"`;
      const single = `'${id}'`;
      return !blob.includes(`${quoted}:`) && !blob.includes(`${single}:`) && !blob.includes(`${id}:`);
    });
    return { slug, nodes: nodeIds.length, missing: missing.length, missIds: missing.slice(0, 5) };
  });
}

async function closeDrawer(page) {
  if (!(await page.locator('.ant-drawer-open').count())) return;
  await page.keyboard.press('Escape');
  await page.waitForTimeout(250);
  if (await page.locator('.ant-drawer-open').count()) {
    await page.locator('.ant-drawer-close').click({ force: true, timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(250);
  }
}

async function selectRoadmap(page, title) {
  await page.goto(BASE, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.roadmap-select', { timeout: 15000 });
  await page.locator('.roadmap-select').click();
  await page.waitForSelector('.ant-select-dropdown:not(.ant-select-dropdown-hidden)', { timeout: 10000 });

  let picked = false;
  for (let i = 0; i < 20; i++) {
    picked = await page.evaluate((t) => {
      const opts = [...document.querySelectorAll('.ant-select-dropdown .ant-select-item-option')];
      const el = opts.find((o) => o.getAttribute('title') === t || (o.textContent || '').includes(t));
      if (el) {
        el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        return true;
      }
      const holder = document.querySelector('.ant-select-dropdown .rc-virtual-list-holder');
      if (holder) holder.scrollTop += 220;
      return false;
    }, title);
    if (picked) break;
    await page.waitForTimeout(120);
  }
  if (!picked) throw new Error(`roadmap option not found: ${title}`);

  await page.waitForFunction(
    (t) => (document.querySelector('.roadmap-select .ant-select-selection-item')?.textContent || '').includes(t.replace(/ 路线图$/, '')),
    title,
    { timeout: 10000 },
  ).catch(() => {});
  await page.waitForTimeout(700);
}

async function openNode(page, label) {
  await page.evaluate((text) => {
    const btn = [...document.querySelectorAll('button.node-chip')].find((b) => {
      const en = b.querySelector('.node-en')?.textContent?.trim();
      const zh = b.querySelector('.node-zh')?.textContent?.trim();
      return en === text || zh === text || (b.textContent || '').includes(text);
    });
    if (!btn) throw new Error(`node not found: ${text}`);
    btn.scrollIntoView({ block: 'center', inline: 'center' });
    btn.click();
  }, label);
}

async function sampleStage(page, slug, stages) {
  const dir = join(OUT, slug);
  mkdirSync(dir, { recursive: true });
  const failures = [];
  let pass = 0;
  for (let i = 0; i < stages.length; i++) {
    const node = firstMapNode(stages[i]);
    const key = `stage-${String(i + 1).padStart(2, '0')}`;
    if (!node) {
      failures.push({ key, node: null, error: 'no map node in stage' });
      continue;
    }
    try {
      await closeDrawer(page);
      await openNode(page, node.label);
      await page.waitForSelector('.ant-drawer', { timeout: 12000 });
      await page.waitForTimeout(600);
      const failRender = await page.locator('text=图解渲染失败').count();
      const svg = await page.locator('.ant-drawer svg').count();
      const ok = failRender === 0 && svg > 0;
      if (ok) pass++;
      else failures.push({ key, node: node.label, failRender, svg });
      await page.locator('.ant-drawer-body').screenshot({ path: join(dir, `${key}.png`) }).catch(() => {});
      await closeDrawer(page);
    } catch (err) {
      failures.push({ key, node: node.label, error: String(err.message || err) });
    }
  }
  return { slug, total: stages.length, pass, fail: stages.length - pass, failures };
}

mkdirSync(OUT, { recursive: true });
const idCoverage = checkIdCoverage();

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const samples = [];
let gitAudit = [];

for (const { slug, title } of RUN_LIST) {
  try {
    const stages = loadStages(slug);
    await selectRoadmap(page, title);
    samples.push(await sampleStage(page, slug, stages));
  } catch (err) {
    samples.push({ slug, total: 0, pass: 0, fail: 1, failures: [{ error: String(err.message || err) }] });
  }
}

if (!ONLY.length || ONLY.includes('git')) {
  const gitStages = loadStages('git');
  const gitPick = [0, 4, 12, 24, 25].map((i) => firstMapNode(gitStages[i])).filter(Boolean);
  await selectRoadmap(page, 'Git & GitHub 路线图');
  const gitDir = join(OUT, 'git-audit');
  mkdirSync(gitDir, { recursive: true });
  for (const node of gitPick) {
    try {
      await closeDrawer(page);
      await openNode(page, node.label);
      await page.waitForTimeout(600);
      const ok = (await page.locator('text=图解渲染失败').count()) === 0 && (await page.locator('.ant-drawer svg').count()) > 0;
      await page.locator('.ant-drawer-body').screenshot({ path: join(gitDir, `${node.label.replace(/[^a-z0-9]+/gi, '-').slice(0, 30)}.png`) });
      gitAudit.push({ label: node.label, ok });
      await closeDrawer(page);
    } catch (err) {
      gitAudit.push({ label: node.label, ok: false, error: String(err.message || err) });
    }
  }
}

await browser.close();

const report = {
  idCoverage,
  idCoveragePass: idCoverage.every((c) => c.missing === 0),
  stageSampling: samples,
  stageSamplingPass: samples.every((s) => s.fail === 0),
  stageTotal: samples.reduce((a, s) => a + s.total, 0),
  stagePass: samples.reduce((a, s) => a + s.pass, 0),
  gitAudit,
  gitAuditPass: gitAudit.every((g) => g.ok),
};
writeFileSync(join(OUT, 'report.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({
  idCoveragePass: report.idCoveragePass,
  idCoverage,
  stageSamplingPass: report.stageSamplingPass,
  stagePass: `${report.stagePass}/${report.stageTotal}`,
  samples: samples.map((s) => ({ slug: s.slug, pass: s.pass, total: s.total, failures: s.failures })),
  gitAuditPass: report.gitAuditPass,
  gitAudit,
}, null, 2));
