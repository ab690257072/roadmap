async (page) => {
  const { mkdirSync, readFileSync, writeFileSync } = await import('node:fs');
  const { join } = await import('node:path');
  const ROOT = '/Users/tu/Documents/personal-coding/backend-roadmap-learn';
  const BASE = 'http://127.0.0.1:8766';
  const loadSamples = (slug) => JSON.parse(readFileSync(join(ROOT, `.cursor/planning/diagram-checks/${slug}-samples.json`), 'utf8'));
  const roadmaps = [
    { slug: 'golang', title: 'Go 开发路线图' },
    { slug: 'postgresql', title: 'PostgreSQL 路线图' },
  ];
  const summary = [];
  for (const { slug, title } of roadmaps) {
    const samples = loadSamples(slug);
    const dir = join(ROOT, `.cursor/planning/diagram-checks/${slug}`);
    mkdirSync(dir, { recursive: true });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.locator('.roadmap-select').click();
    await page.locator('.ant-select-item-option').filter({ hasText: title }).click();
    await page.waitForTimeout(800);
    const results = [];
    for (const sample of samples) {
      const key = `stage-${String(sample.stage).padStart(2, '0')}`;
      try {
        const close = page.locator('.ant-drawer-close');
        if (await close.isVisible().catch(() => false)) { await close.click(); await page.waitForTimeout(250); }
        const jump = `${String(sample.stage).padStart(2, '0')}`;
        await page.locator('.jump-select').click();
        await page.locator('.ant-select-item-option').filter({ hasText: jump }).first().click();
        await page.waitForTimeout(500);
        const chip = page.locator('button.node-chip').filter({ hasText: sample.label }).first();
        await chip.scrollIntoViewIfNeeded();
        await chip.click({ timeout: 10000 });
        await page.waitForSelector('.ant-drawer .excalidraw-exported-svg', { timeout: 15000 });
        await page.waitForTimeout(400);
        const textCount = await page.evaluate(() => document.querySelectorAll('.ant-drawer .excalidraw-exported-svg text').length);
        await page.locator('.ant-drawer').screenshot({ path: join(dir, `${key}.png`) });
        results.push({ key, label: sample.label, ok: textCount > 0, textCount });
      } catch (err) {
        results.push({ key, label: sample.label, ok: false, error: String(err.message || err) });
      }
    }
    writeFileSync(join(dir, 'report.json'), JSON.stringify({ slug, total: samples.length, pass: results.filter((r) => r.ok).length, results }, null, 2));
    summary.push({ slug, total: samples.length, pass: results.filter((r) => r.ok).length, failures: results.filter((r) => !r.ok) });
  }
  return summary;
}
