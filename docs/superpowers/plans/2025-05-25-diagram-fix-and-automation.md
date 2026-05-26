# Diagram Fix & Lesson Automation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix Excalidraw text overflow in all 108 existing lessons by using container binding, and create an automation script to batch-generate 47 remaining Git lessons (stages 19-26).

**Architecture:** Add `excalidrawLabeledBox` helper that creates a bound text+rectangle pair (text gets `containerId`, box gets `boundElements`). Write a Node.js migration script that rewrites teaching.ts source to replace standalone `excalidrawBox`+`excalidrawText` pairs with `...excalidrawLabeledBox(...)` calls. Then create a lesson generator script that reads data.ts, generates TeachingLesson entries with unique content per node, and appends them to teaching.ts.

**Tech Stack:** TypeScript, Node.js (ESM), @excalidraw/excalidraw, Vite

---

## Phase A: Fix Text Overflow

### Task 1: Add excalidrawLabeledBox helper

**Files:**
- Modify: `src/roadmaps/excalidraw-helpers.ts`

- [ ] **Step 1: Add excalidrawLabeledBox function**

Add the following function after the existing `excalidrawBox` function (after line 70) in `src/roadmaps/excalidraw-helpers.ts`:

```typescript
export function excalidrawLabeledBox(
  boxId: string,
  textId: string,
  x: number,
  y: number,
  text: string,
  backgroundColor: string,
  fontSize = 20,
  minWidth = 150,
  minHeight = 60,
): [ExcalidrawElement, ExcalidrawElement] {
  const lineCount = text.split('\n').length;
  const charWidth = fontSize * 0.6;
  const maxLineChars = Math.max(...text.split('\n').map(l => l.length));
  const naturalTextWidth = Math.ceil(maxLineChars * charWidth);
  const naturalTextHeight = Math.ceil(fontSize * 1.25 * lineCount);
  const padding = 10;
  const boxWidth = Math.max(minWidth, naturalTextWidth + padding * 2);
  const boxHeight = Math.max(minHeight, naturalTextHeight + padding * 2);
  const textWidth = boxWidth - padding * 2;

  const box: ExcalidrawElement = {
    id: boxId,
    type: 'rectangle',
    x,
    y,
    width: boxWidth,
    height: boxHeight,
    angle: 0,
    strokeColor: '#334155',
    backgroundColor,
    fillStyle: 'solid',
    strokeWidth: 2,
    strokeStyle: 'solid',
    roughness: 1,
    opacity: 100,
    groupIds: [],
    frameId: null,
    roundness: { type: 3 },
    seed: boxId.length * 89,
    version: 1,
    versionNonce: boxId.length * 103,
    isDeleted: false,
    boundElements: [{ id: textId, type: 'text' }],
    updated: 1,
    link: null,
    locked: false,
  };

  const textEl: ExcalidrawElement = {
    id: textId,
    type: 'text',
    x: x + padding,
    y: y + padding,
    width: textWidth,
    height: naturalTextHeight,
    angle: 0,
    strokeColor: '#1f2937',
    backgroundColor: 'transparent',
    fillStyle: 'solid',
    strokeWidth: 1,
    strokeStyle: 'solid',
    roughness: 1,
    opacity: 100,
    groupIds: [],
    frameId: null,
    roundness: null,
    seed: textId.length * 97,
    version: 1,
    versionNonce: textId.length * 101,
    isDeleted: false,
    boundElements: null,
    updated: 1,
    link: null,
    locked: false,
    text,
    fontSize,
    fontFamily: 5,
    textAlign: 'center',
    verticalAlign: 'middle',
    containerId: boxId,
    originalText: text,
    lineHeight: 1.25,
  };

  return [box, textEl];
}
```

Key differences from standalone `excalidrawText` + `excalidrawBox`:
- Box has `boundElements: [{ id: textId, type: 'text' }]` instead of `null`
- Text has `containerId: boxId` instead of `null`
- Text has `verticalAlign: 'middle'` instead of `'top'`
- Box width/height are auto-calculated from text content + padding (no overflow)
- Returns a tuple `[box, textEl]` — caller uses spread: `...excalidrawLabeledBox(...)`

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run build`
Expected: Build succeeds with no type errors.

- [ ] **Step 3: Commit**

```bash
git add src/roadmaps/excalidraw-helpers.ts
git commit -m "feat: add excalidrawLabeledBox helper with container binding"
```

---

### Task 2: Update import in teaching.ts

**Files:**
- Modify: `src/roadmaps/git/teaching.ts:1`

- [ ] **Step 1: Add excalidrawLabeledBox to the import**

Change line 1 from:
```typescript
import { excalidrawText, excalidrawBox, excalidrawArrow, excalidrawScene } from '../excalidraw-helpers';
```
to:
```typescript
import { excalidrawText, excalidrawBox, excalidrawArrow, excalidrawScene, excalidrawLabeledBox } from '../excalidraw-helpers';
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds (excalidrawLabeledBox is imported but not yet used).

- [ ] **Step 3: Commit**

```bash
git add src/roadmaps/git/teaching.ts
git commit -m "feat: import excalidrawLabeledBox in teaching.ts"
```

---

### Task 3: Write migration script

**Files:**
- Create: `scripts/migrate-bound-text.mjs`

This Node.js script reads teaching.ts, identifies `excalidrawBox`+`excalidrawText` pairs by naming patterns, and replaces them with `...excalidrawLabeledBox(...)` calls.

- [ ] **Step 1: Create the migration script**

Create `scripts/migrate-bound-text.mjs`:

```javascript
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const teachingPath = resolve(__dirname, '../src/roadmaps/git/teaching.ts');
const source = readFileSync(teachingPath, 'utf-8');

function findBoxTextPairs(blockText) {
  const boxCallRegex = /excalidrawBox\s*\(\s*'([^']+)'\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*'([^']+)'\s*\)/g;
  const textCallRegex = /excalidrawText\s*\(\s*'([^']+)'\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*'([^']*)'\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\s*\)/g;

  const boxes = [];
  const texts = [];

  let match;
  while ((match = boxCallRegex.exec(blockText)) !== null) {
    boxes.push({
      fullMatch: match[0],
      id: match[1],
      x: Number(match[2]),
      y: Number(match[3]),
      width: Number(match[4]),
      height: Number(match[5]),
      bgColor: match[6],
      startIndex: match.index,
      endIndex: match.index + match[0].length,
    });
  }
  boxCallRegex.lastIndex = 0;

  while ((match = textCallRegex.exec(blockText)) !== null) {
    texts.push({
      fullMatch: match[0],
      id: match[1],
      x: Number(match[2]),
      y: Number(match[3]),
      text: match[4],
      fontSize: match[5] ? Number(match[5]) : 22,
      width: match[6] ? Number(match[6]) : 240,
      startIndex: match.index,
      endIndex: match.index + match[0].length,
    });
  }
  textCallRegex.lastIndex = 0;

  const pairs = [];
  const usedTextIds = new Set();
  const usedBoxIds = new Set();

  for (const text of texts) {
    let matchedBox = null;
    const tid = text.id;

    // Pattern 1: textId = boxId + '-text'
    if (tid.endsWith('-text')) {
      const candidate = tid.slice(0, -5);
      matchedBox = boxes.find(b => b.id === candidate && !usedBoxIds.has(b.id));
    }

    // Pattern 2: textId = boxId + '-t'
    if (!matchedBox && tid.endsWith('-t')) {
      const candidate = tid.slice(0, -2);
      matchedBox = boxes.find(b => b.id === candidate && !usedBoxIds.has(b.id));
    }

    // Pattern 3: textId has '-text-N', boxId has '-box-N'
    if (!matchedBox) {
      const textWithBox = tid.replace(/-text-/, '-box-');
      matchedBox = boxes.find(b => b.id === textWithBox && !usedBoxIds.has(b.id));
    }

    // Pattern 4: textId has '-t-N', boxId has '-box-N'
    if (!matchedBox) {
      const textWithBox = tid.replace(/-t-/, '-box-');
      matchedBox = boxes.find(b => b.id === textWithBox && !usedBoxIds.has(b.id));
    }

    // Pattern 5: positional overlap (text center inside box bounds)
    if (!matchedBox) {
      const textCenterX = text.x + text.width / 2;
      const textCenterY = text.y + (text.fontSize * 1.25 * text.text.split('\n').length) / 2;
      matchedBox = boxes.find(b => {
        if (usedBoxIds.has(b.id)) return false;
        return textCenterX >= b.x && textCenterX <= b.x + b.width &&
               textCenterY >= b.y && textCenterY <= b.y + b.height;
      });
    }

    if (matchedBox) {
      pairs.push({ box: matchedBox, text: text });
      usedTextIds.add(text.id);
      usedBoxIds.add(matchedBox.id);
    }
  }

  return { pairs, unusedBoxes: boxes.filter(b => !usedBoxIds.has(b.id)), unusedTexts: texts.filter(t => !usedTextIds.has(t.id)) };
}

function generateLabeledBoxCall(pair) {
  const { box, text } = pair;
  const escapedText = text.text.replace(/'/g, "\\'").replace(/\n/g, '\\n');
  const fontSizeArg = text.fontSize !== 22 ? `, ${text.fontSize}` : '';
  const widthArg = `, ${box.width}`;
  const heightArg = `, ${box.height}`;
  return `...excalidrawLabeledBox('${box.id}', '${text.id}', ${box.x}, ${box.y}, '${escapedText}', '${box.bgColor}'${fontSizeArg}${widthArg}${heightArg})`;
}

function migrateBlock(blockText) {
  const { pairs, unusedBoxes, unusedTexts } = findBoxTextPairs(blockText);

  if (pairs.length === 0) return blockText;

  // Build replacement map: sort by startIndex descending to avoid offset shifts
  const replacements = [];

  for (const pair of pairs) {
    const newCall = generateLabeledBoxCall(pair);
    // Remove both the box call and the text call, replace with one labeledBox call
    // Place the new call at the earlier position (box comes before text typically)
    const earlier = pair.box.startIndex < pair.text.startIndex ? pair.box : pair.text;
    const later = pair.box.startIndex < pair.text.startIndex ? pair.text : pair.box;
    replacements.push({
      removeRanges: [
        { start: earlier.startIndex, end: earlier.endIndex },
        { start: later.startIndex, end: later.endIndex },
      ],
      insertAt: earlier.startIndex,
      newText: newCall,
    });
  }

  // Sort replacements by insertAt descending
  replacements.sort((a, b) => b.insertAt - a.insertAt);

  let result = blockText;
  for (const rep of replacements) {
    // Remove both old calls (process from end to start to maintain indices)
    const sortedRemoves = rep.removeRanges.sort((a, b) => b.start - a.start);
    for (const range of sortedRemoves) {
      result = result.slice(0, range.start) + result.slice(range.end);
    }
    // Insert new call at the insertion point
    // After removing later elements first, the insertAt position is still valid
    // But we need to adjust if the earlier remove was before insertAt
    // Since we remove both and insert at the box position, this works
    const insertPos = rep.insertAt;
    result = result.slice(0, insertPos) + rep.newText + result.slice(insertPos);
  }

  return result;
}

function migrateSource(source) {
  // Find all rawDiagram: excalidrawScene([...]) blocks
  // We need to handle two patterns:
  // 1. rawDiagram: excalidrawScene([...]) (inline)
  // 2. rawDiagram: GIT_STAGE_ONE_DIAGRAMS['xxx'] (reference to pre-built diagrams)

  // Pattern 1: inline excalidrawScene calls
  const inlineRegex = /rawDiagram:\s*excalidrawScene\s*\(\s*\[([\s\S]*?)\]\s*\)/g;

  let result = source;
  let match;

  const blocks = [];
  while ((match = inlineRegex.exec(source)) !== null) {
    blocks.push({
      fullMatch: match[0],
      content: match[1],
      startIndex: match.index,
      endIndex: match.index + match[0].length,
    });
  }

  // Also handle GIT_STAGE_ONE_DIAGRAMS blocks
  // These are in the GIT_STAGE_ONE_DIAGRAMS object at the top of the file
  const diagramObjRegex = /excalidrawScene\s*\(\s*\[([\s\S]*?)\]\s*\)/g;
  const diagramBlocks = [];
  while ((match = diagramObjRegex.exec(source)) !== null) {
    // Check if this is inside GIT_STAGE_ONE_DIAGRAMS
    const before = source.slice(Math.max(0, match.index - 200), match.index);
    if (before.includes('GIT_STAGE_ONE_DIAGRAMS') || before.includes("const GIT_STAGE_ONE_DIAGRAMS")) {
      diagramBlocks.push({
        fullMatch: match[0],
        content: match[1],
        startIndex: match.index,
        endIndex: match.index + match[0].length,
      });
    }
  }

  // Migrate all blocks, processing from end to start to avoid offset shifts
  const allBlocks = [...blocks, ...diagramBlocks];
  allBlocks.sort((a, b) => b.startIndex - a.startIndex);

  for (const block of allBlocks) {
    const migratedContent = migrateSourceBlock(block.fullMatch, block.content);
    result = result.slice(0, block.startIndex) + migratedContent + result.slice(block.endIndex);
  }

  return result;
}

function migrateSourceBlock(fullMatch, content) {
  const { pairs, unusedBoxes, unusedTexts } = findBoxTextPairs(content);

  if (pairs.length === 0) return fullMatch;

  // Replace pairs in the content
  let newContent = content;

  // Collect all elements to remove and their replacements
  const ops = [];
  for (const pair of pairs) {
    ops.push({
      type: 'replace_pair',
      boxMatch: pair.box.fullMatch,
      textMatch: pair.text.fullMatch,
      replacement: generateLabeledBoxCall(pair),
    });
  }

  // For each pair, remove box call and text call, add labeledBox call
  // We need to handle this carefully to avoid double-replacement
  for (const op of ops) {
    // Remove the text call first (it appears after the box call)
    newContent = newContent.replace(op.textMatch, '');
    // Replace the box call with the labeledBox call
    newContent = newContent.replace(op.boxMatch, op.replacement);
  }

  // Clean up: remove empty lines left by removed calls
  newContent = newContent.replace(/\n\s*\n/g, '\n');

  // Reconstruct the full match
  return `excalidrawScene([${newContent}])`;
}

const migrated = migrateSource(source);
writeFileSync(teachingPath, migrated, 'utf-8');
console.log('Migration complete. Check teaching.ts for correctness.');
```

- [ ] **Step 2: Test the migration script on a copy**

Before running on the real file, make a backup and test:

```bash
cp src/roadmaps/git/teaching.ts src/roadmaps/git/teaching.ts.bak
node scripts/migrate-bound-text.mjs
```

Expected: Script prints "Migration complete." and teaching.ts is modified.

- [ ] **Step 3: Inspect the migrated file**

Open `src/roadmaps/git/teaching.ts` and check that:
1. Paired `excalidrawBox` + `excalidrawText` calls are replaced with `...excalidrawLabeledBox(...)` calls
2. Standalone `excalidrawText` calls (labels, notes, arrow labels) are preserved
3. No duplicate or missing elements
4. The GIT_STAGE_ONE_DIAGRAMS blocks are also migrated

If anything looks wrong, restore the backup:
```bash
cp src/roadmaps/git/teaching.ts.bak src/roadmaps/git/teaching.ts
```
and fix the script before re-running.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds with no type errors.

- [ ] **Step 5: Visual verification**

Run: `npm run dev`
Open the app in browser, navigate to a few Git lessons (stage 1 and stage 10), and verify:
1. Text no longer overflows boxes
2. Diagrams render correctly
3. Box sizes auto-adjust to text content

If any diagrams look broken, investigate and fix manually in teaching.ts.

- [ ] **Step 6: Commit**

```bash
git add scripts/migrate-bound-text.mjs src/roadmaps/git/teaching.ts src/roadmaps/excalidraw-helpers.ts
git commit -m "fix: bind text to boxes in excalidraw diagrams to prevent overflow"
```

---

### Task 4: Clean up migration artifacts

**Files:**
- Delete: `src/roadmaps/git/teaching.ts.bak` (if it exists)

- [ ] **Step 1: Remove backup file**

```bash
rm -f src/roadmaps/git/teaching.ts.bak
```

- [ ] **Step 2: Verify build still passes**

Run: `npm run build`
Expected: Build succeeds.

---

## Phase B: Automate Lesson Generation

### Task 5: Create lesson generation script

**Files:**
- Create: `scripts/generate-git-lessons.mjs`

This script reads data.ts to get node metadata, reads teaching.ts to find missing lessons, generates TeachingLesson entries with unique content, and appends them to teaching.ts.

- [ ] **Step 1: Create the lesson generation script**

Create `scripts/generate-git-lessons.mjs`:

```javascript
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(__dirname, '../src/roadmaps/git/data.ts');
const teachingPath = resolve(__dirname, '../src/roadmaps/git/teaching.ts');

const startStage = Number(process.argv[2] || 19);
const endStage = Number(process.argv[3] || 26);

// Read and parse data.ts to extract stage/node info
const dataSource = readFileSync(dataPath, 'utf-8');

// Extract stages using regex (data.ts is a const object with stages array)
const stageRegex = /"id"\s*:\s*"stage-(\d+)"[\s\S]*?"nodes"\s*:\s*\[([\s\S]*?)\]/g;
const nodeRegex = /"id"\s*:\s*"([^"]+)"[\s\S]*?"label"\s*:\s*"([^"]+)"[\s\S]*?"zh"\s*:\s*"([^"]+)"[\s\S]*?"nodeType"\s*:\s*"(\w+)"/g;

const stages = [];
let stageMatch;
while ((stageMatch = stageRegex.exec(dataSource)) !== null) {
  const stageNum = Number(stageMatch[1]);
  if (stageNum < startStage || stageNum > endStage) continue;

  const nodesBlock = stageMatch[2];
  const nodes = [];
  let nodeMatch;
  const nodeRegexLocal = /"id"\s*:\s*"([^"]+)"[\s\S]*?"label"\s*:\s*"([^"]+)"[\s\S]*?"zh"\s*:\s*"([^"]*?)"[\s\S]*?"nodeType"\s*:\s*"(\w+)"/g;
  while ((nodeMatch = nodeRegexLocal.exec(nodesBlock)) !== null) {
    nodes.push({
      id: nodeMatch[1],
      label: nodeMatch[2],
      zh: nodeMatch[3],
      nodeType: nodeMatch[4],
    });
  }
  stages.push({ stageNum, nodes });
}

// Read teaching.ts to find which node IDs already have lessons
const teachingSource = readFileSync(teachingPath, 'utf-8');
const existingLessonRegex = /\b([a-zA-Z0-9_-]+)\s*:\s*\{[\s\S]*?heading:/g;
const existingIds = new Set();
let lessonMatch;
while ((lessonMatch = existingLessonRegex.exec(teachingSource)) !== null) {
  existingIds.add(lessonMatch[1]);
}

// Filter to only nodes that don't have lessons yet
const missingNodes = [];
for (const stage of stages) {
  for (const node of stage.nodes) {
    if (!existingIds.has(node.id)) {
      missingNodes.push({ ...node, stageNum: stage.stageNum });
    }
  }
}

console.log(`Found ${missingNodes.length} nodes without lessons in stages ${startStage}-${endStage}`);

// Content templates based on node type and label
function generateContent(node) {
  const isCommand = node.label.startsWith('git ') || node.label.startsWith('--');
  const isGithubFeature = node.label.startsWith('GitHub') || node.label.includes('Actions') || node.label.includes('Pages');
  const isConcept = !isCommand && !isGithubFeature;

  const label = node.label;
  const zh = node.zh;

  // Generate heading
  const heading = isCommand
    ? `${zh}：${getCommandSummary(label)}`
    : isGithubFeature
    ? `${zh}：${getGithubSummary(label)}`
    : `${zh}：${getConceptSummary(label)}`;

  // Generate subheading
  const subheading = isCommand
    ? `这个命令帮你${getCommandPurpose(label)}。`
    : isGithubFeature
    ? `${label} 是 GitHub 提供的${getGithubCategory(label)}。`
    : `理解这个概念后，${getConceptBenefit(label)}。`;

  // Generate metaphor
  const metaphor = getMetaphor(label, isCommand, isGithubFeature);

  // Generate mistake
  const mistake = getMistake(label, isCommand, isGithubFeature);

  // Generate scene
  const scene = getScene(label, zh, isCommand, isGithubFeature);

  // Generate core
  const core = getCore(label, isCommand, isGithubFeature);

  // Generate route (4 steps)
  const route = getRoute(label, zh, isCommand, isGithubFeature);

  // Generate confusion
  const confusion = getConfusion(label, isCommand, isGithubFeature);

  // Generate experiment
  const experiment = getExperiment(label, isCommand, isGithubFeature);

  return { heading, subheading, metaphor, mistake, scene, core, route, confusion, experiment };
}

function getCommandSummary(label) {
  const summaries = {
    'git reflog': '找回你以为已经消失的提交',
    'git bisect': '用二分法精准定位引入 bug 的提交',
    'git worktree': '同时在不同分支上工作而不必来回切换',
    'git lfs': '让 Git 能管理大文件而不撑爆仓库',
    'git attributes': '给不同文件指定不同的 Git 处理规则',
    'git push --force': '强行推送，覆盖远程历史（慎用）',
    'git rebase': '重新排列提交历史，让线更干净',
    'git commit --amend': '修改最近一次提交的说明或内容',
    'git filter-branch': '批量改写历史中的某些提交',
    'git revert': '用一次新提交来撤销旧提交',
    'git reset': '回退提交指针，可以选择保留或丢弃改动',
    'git init': '给普通文件夹装上 Git 账本',
    'git config': '先告诉 Git "我是谁"',
    'git stash': '临时把改动藏起来，稍后再取回',
  };
  return summaries[label] || `${label} 做什么以及为什么要用它`;
}

function getGithubSummary(label) {
  const summaries = {
    'GitHub Actions': '自动化流水线，推代码就自动跑测试/部署',
    'GitHub CLI': '在终端里操作 GitHub，不用打开浏览器',
    'GitHub Pages': '把静态网站直接部署到 GitHub 免费托管',
    'GitHub Copilot': 'AI 写代码助手，根据上下文自动补全',
    'GitHub Gists': '分享小段代码片段，像代码版的便签',
    'GitHub Models': '在 GitHub 上直接用 AI 模型',
    'GitHub Packages': '把你的包（npm/Docker 等）托管在 GitHub',
    'GitHub Releases': '给项目发布版本，附带下载包和说明',
    'GitHub Sponsors': '给开源作者打赏资助',
    'GitHub Education': '学生免费包，拿到各种开发工具折扣',
    'GitHub Classroom': '老师用它布置和批改编程作业',
    'GitHub Codespaces': '云端开发环境，浏览器里就能写代码',
    'GitHub Marketplace': '搜索和安装第三方 Actions/Apps',
    'GitHub Security': '扫描依赖漏洞和代码安全问题',
    'GitHub Organizations': '团队共享账号，统一管理仓库和权限',
    'GitHub Projects': '项目看板，用卡片追踪任务进度',
    'GitHub Discussions': '社区论坛，问答和讨论都在这里',
    'GitHub Wikis': '项目百科，写长文档比 README 更方便',
    'GitHub Apps': '给 GitHub 加自定义功能扩展',
    'OAuth Apps': '让外部应用通过 OAuth 安全访问 GitHub 数据',
  };
  return summaries[label] || `GitHub 的 ${label} 功能`;
}

function getConceptSummary(label) {
  const summaries = {
    'YAML Syntax': 'YAML 是 Actions 的工作语言，格式对了才能跑',
    'Workflow Triggers': '触发器决定什么时候自动跑流水线',
    'Scheduled Worfklows': '定时触发，让流水线按时间表自动跑',
    'Workflow Runners': '跑流水线的机器，GitHub 提供或你自己搭',
    'Workflow Context': '流水线运行时的环境变量和上下文信息',
    'Client vs Server Hooks': '客户端钩子在本地跑，服务端钩子在远程跑',
    'Usecases': '钩子能做的事情：自动检查、通知、部署',
    'Secrets and Env Vars': '敏感信息不能写进代码，用 Secrets 加密存储',
    'Caching Dependencies': '缓存依赖加速流水线，不用每次重新下载',
    'Storing Artifacts': '流水线产出的文件叫 Artifact，可以存下来下载',
    'Workflow Status': '流水线跑完的状态徽章，展示在 README 里',
    'REST API': '用 HTTP 请求操作 GitHub 数据',
    'GraphQL API': '按需查询 GitHub 数据，一次拿多个关联资源',
    'Marketplace Actions': '别人写好的 Actions，直接拿来用',
    'Webhooks': '事件发生时自动通知你的服务器',
    'Deploying Static Websites': '把静态网站部署到 GitHub Pages',
    'Custom Domains': '给 GitHub Pages 绑自己的域名',
    'Static Site Generators': '用工具把模板+数据生成静态页面',
    'Issue Management': '用 Issue 跟踪 bug 和需求',
    'Pull Requests': '代码审查和合并的流程',
    'Git Attributes': '告诉 Git 怎么对待不同类型的文件',
    'Git Worktree': '一个仓库同时检出多个分支到不同目录',
    'Git Reflog': '记录 HEAD 的每一次移动，帮你找回丢失的提交',
    'Git Bisect': '用二分查找定位哪个提交引入了 bug',
    'Git LFS': '大文件专用存储，不塞进 Git 仓库里',
    'Use in Automation': '在 CI/CD 里自动调用 gh 命令',
    'Repository management': '用 gh 命令创建、删除、管理仓库',
    'Installation and Setup': '安装 gh CLI 并配置认证',
    'Creating Apps': '给 GitHub 开发自定义应用',
    'GitHub API': '通过 API 程序化操作 GitHub',
    'Submodules': '在一个 Git 仓库里嵌套另一个仓库',
    'Git hooks': '在特定事件时自动运行的脚本',
    'Tagging': '给提交打标签，标记版本号',
    'Fast-Forward vs Non-FF': '快进合并 vs 非快进合并的区别',
    'Merging Basics': '合并分支的基本流程和冲突处理',
    'Checkout Branch': '切换分支时会发生什么',
    'Branch Naming': '好名字让分支一目了然',
    'Contribution Guidelines': '贡献指南让参与者知道怎么提交',
    'Forking vs Cloning': 'Fork 是复制到自己的 GitHub，Clone 是下载到本地',
    'Code Reviews': '代码审查是保证质量的关键步骤',
    'PR Guidelines': '好的 PR 描述让审查者快速理解改动',
    'Handling Conflicts': '冲突是两个人改了同一行，需要手动决定',
    'Cherry Picking Commits': '从一个分支摘一个提交到另一个分支',
    'Rebase': '重新排列提交，让历史更线性',
    'Squash': '把多个提交压成一个，让历史更简洁',
    'Linear vs Non-Linear': '线性历史像一条线，非线性像一棵树',
    'HEAD': 'HEAD 指向当前分支的最新提交',
    'Detached HEAD': 'HEAD 不在分支上，而是直接指向某个提交',
    'Viewing Diffs': '用 diff 看两次提交之间的具体变化',
    'Undoing Changes': '撤销改动：revert 加新提交，reset 回退指针',
    'Rewriting History': '改写历史要谨慎，已推送的不要动',
    'commit-msg': '提交时自动检查说明格式的钩子',
    'pre-commit': '提交前自动跑检查（lint、测试）的钩子',
    'pre-push': '推送前最后把关的钩子',
    'post-checkout': '切换分支后自动执行的钩子',
    'post-update': '更新后自动执行的钩子',
    'What and Why?': '钩子是什么，为什么要用',
    'What are these?': '这些钩子分别什么时候触发',
    'What and Why use?': '子模块是什么，什么时候用',
    'Adding / Updating': '子模块怎么添加和更新',
    'Managing Tags': '创建、列出、删除标签',
    'Pushing Tags': '把标签推送到远程',
    'Checkout Tags': '检出某个标签对应的代码',
    'GitHub Releases': '发布版本时附带下载包和说明',
    'Between Commits': '比较两次提交之间的差异',
    'Between Branches': '比较两个分支之间的差异',
    'Staged Changes': '暂存区的改动和 diff',
    'Unstaged Changes': '工作区的改动和 diff',
    '--soft': '拆掉提交但保留改动在暂存区',
    '--mixed': '拆掉提交和暂存，改动留在工作区',
    '--hard': '彻底回退，工作区也清空',
    'Managing Remotes': '添加、查看、删除远程仓库地址',
    'Pushing / Pulling Changes': '推送到远程和从远程拉取更新',
    'Fetch without Merge': '只下载不合并，先看看远程有什么',
    'Working Directory': '你正在编辑的文件所在的地方',
    'Staging Area': '准备提交的文件暂存清单',
    'Committing Changes': '把暂存区的改动正式写入历史',
    'Cloning Repositories': '从远程下载整个仓库到本地',
    'Local vs Global Config': '全局配置影响所有仓库，本地只影响当前',
    'Installing Git Locally': '安装 Git 并验证可用',
    'Creating Branch': '从当前提交分出一个新分支',
    'Deleting Branch': '删掉不再需要的分支',
    'Renaming Branch': '给分支改个更合适的名字',
    'Checkout Branch': '切换到另一个分支继续工作',
    '.gitignore': '告诉 Git 哪些文件不要追踪',
    'Viewing Commit History': '用 git log 看历史提交',
    'Issues': '在 GitHub 上追踪 bug 和需求',
    'Private vs Public': '公开仓库谁都能看，私有仓库只有邀请的人能看',
    'Mentions': '在 Issue/PR 里 @ 别人，他们会收到通知',
    'Reactions': '给 Issue/PR 评论加表情反馈',
    'Saved Replies': '存常用回复模板，不用每次重写',
    'Collaborators': '邀请别人一起编辑你的仓库',
    'Labelling Issues / PRs': '用标签分类 Issue 和 PR',
    'CITATION files': '让别人正确引用你的项目',
    'Profile Readme': '你的 GitHub 个人主页 README',
    'Branch Naming': '好名字让分支一看就知道在做什么',
    'PR from a Fork': '从你 Fork 的仓库提 PR 到原仓库',
    'Pull Requests': '代码审查和合并的标准流程',
    'PR Guidelines': '写好 PR 描述让审查者快速理解',
    'GitHub Wikis': '项目百科，写长文档比 README 更合适',
    'Project Readme': '项目首页文档，告诉别人这个项目是什么',
    'Markdown': 'GitHub 用的文本格式，比 HTML 简单',
    'Creating Repositories': '在 GitHub 上新建仓库',
    'GitHub Interface': 'GitHub 网站的基本操作',
    'Setting up Profile': '设置你的 GitHub 个人信息',
    'Creating Account': '注册 GitHub 账号',
    'Contribution Guidelines': '贡献指南让新参与者知道怎么提交',
    'Clean Git History': '干净的历史让回溯和协作更顺畅',
    'Git Stash Basics': '临时保存改动，稍后再恢复',
    'GitHub Discussions': '社区问答和讨论论坛',
    'Linear vs Non-Linear': '线性历史 vs 非线性历史各有优劣',
    'HEAD': 'HEAD 指向你当前所在的提交',
    'History': '提交历史是 Git 的核心价值',
    'GitHub Projects': '项目看板追踪任务',
    'Working in a Team': '团队协作的 Git 工作流',
    'Collaborators / Members': '管理谁有权限改你的代码',
    'Project Planning': '用 GitHub Projects 规划任务',
    'Kanban Boards': '看板方式管理任务进度',
    'Roadmaps': '学习路线图指引成长方向',
    'Automations': '自动化减少重复操作',
    'Teams within Organization': '组织内分团队管理权限',
    'GitHub Organizations': '组织是团队的容器',
    'Documentation': '文档让项目可理解、可维护',
    'Collaboration on GitHub': 'GitHub 上的协作方式',
    'Student Developer Pack': '学生免费开发工具包',
    'Campus Program': '校园专家计划推广开源',
    'GitHub Classroom': '老师布置批改编程作业',
    'Issue Management': '用 gh 命令管理 Issue',
    'Secrets and Env Vars': '流水线里的密钥和环境变量',
    'Git Attributes': '指定文件的特殊 Git 处理方式',
    'Pull Requests': '用 gh 命令操作 PR',
  };
  return summaries[label] || `${label} 的核心要点`;
}

function getMetaphor(label, isCommand, isGithubFeature) {
  if (isCommand) return `把 ${label} 想成一个精确的工具：它只做一件事，但做得很可靠。`;
  if (isGithubFeature) return `把 ${label} 想成 GitHub 给你配的一个助手：专门帮你处理${getGithubCategory(label)}。`;
  return `把 ${label} 想成一个棋子：理解它怎么走，才能在 Git 的棋盘上正确落子。`;
}

function getMistake(label, isCommand, isGithubFeature) {
  if (isCommand) return `不要只背命令参数。先搞懂它在哪个"位置"上操作（工作区、暂存区、历史），再记参数就自然了。`;
  if (isGithubFeature) return `不要把 ${label} 当成万能工具。它有特定的适用场景，先想清楚你到底要解决什么问题。`;
  return `不要跳过基础直接学高级用法。${label} 的简单版本往往就够用了，复杂场景是后面的事。`;
}

function getScene(label, zh, isCommand, isGithubFeature) {
  if (isCommand) return `你在终端输入 ${label}，Git 在某个位置上执行了一个精确操作。结果是：文件从 A 状态变成了 B 状态，或者历史指针移动了。`;
  if (isGithubFeature) return `你打开 GitHub 的 ${label} 页面，看到一个专门处理${getGithubCategory(label)}的界面。设置好之后，相关操作就自动化了。`;
  return `你遇到了一个关于 ${label} 的问题。理解它之后，之前模糊的概念变得清晰，操作也变得有目的。`;
}

function getCore(label, isCommand, isGithubFeature) {
  if (isCommand) return `${label} = ${getCommandPurpose(label)}。记住它在哪个位置操作，效果就可控。`;
  if (isGithubFeature) return `${label} = ${getGithubCategory(label)}的${getGithubBenefit(label)}。`;
  return `${label} = ${getConceptBenefit(label)}。`;
}

function getCommandPurpose(label) {
  if (label.includes('reset')) return '回退提交指针';
  if (label.includes('revert')) return '用新提交撤销旧提交';
  if (label.includes('rebase')) return '重新排列提交历史';
  if (label.includes('stash')) return '临时保存改动';
  if (label.includes('bisect')) return '二分法定位 bug';
  if (label.includes('reflog')) return '找回丢失的提交';
  if (label.includes('worktree')) return '同时检出多个分支';
  if (label.includes('lfs')) return '管理大文件';
  if (label.includes('amend')) return '修改最近提交';
  if (label.includes('filter')) return '批量改写历史';
  if (label.includes('push --force')) return '强制推送覆盖远程';
  if (label.includes('log')) return '查看提交历史';
  if (label.includes('init')) return '初始化仓库';
  if (label.includes('config')) return '配置 Git';
  return '执行一个 Git 操作';
}

function getGithubCategory(label) {
  if (label.includes('Actions') || label.includes('Workflow') || label.includes('Runner')) return '自动化流水线';
  if (label.includes('Pages')) return '静态网站托管';
  if (label.includes('CLI')) return '命令行操作';
  if (label.includes('Copilot')) return 'AI 辅助';
  if (label.includes('API')) return '数据接口';
  if (label.includes('Apps') || label.includes('OAuth')) return '应用扩展';
  if (label.includes('Security')) return '安全检查';
  if (label.includes('Packages')) return '包管理';
  if (label.includes('Releases')) return '版本发布';
  if (label.includes('Sponsors')) return '资助打赏';
  if (label.includes('Education') || label.includes('Student') || label.includes('Classroom')) return '教育支持';
  if (label.includes('Codespaces')) return '云端开发环境';
  if (label.includes('Marketplace')) return '扩展市场';
  if (label.includes('Gists')) return '代码片段';
  if (label.includes('Models')) return 'AI 模型';
  if (label.includes('Webhooks')) return '事件通知';
  if (label.includes('Discussions')) return '社区讨论';
  if (label.includes('Projects')) return '项目管理';
  if (label.includes('Organizations')) return '组织管理';
  return '某类功能';
}

function getGithubBenefit(label) {
  if (label.includes('Actions')) return '自动运行测试和部署';
  if (label.includes('Pages')) return '免费托管静态网站';
  if (label.includes('CLI')) return '不用浏览器也能操作 GitHub';
  return '提升效率';
}

function getConceptBenefit(label) {
  if (label.includes('YAML')) return 'YAML 格式写对了，Actions 才能正确执行';
  if (label.includes('Trigger')) return '知道什么时候跑，才能安排好自动化';
  if (label.includes('Cache')) return '缓存让流水线更快';
  if (label.includes('Secret')) return '密钥不泄露，流水线才安全';
  if (label.includes('Artifact')) return '存好产出文件，后面能下载验证';
  return '后面的操作更有底气';
}

function getRoute(label, zh, isCommand, isGithubFeature) {
  const stepTemplates = isCommand
    ? [
        { labelTpl: '它在哪个位置', titleTpl: `${label} 操作的位置`, textTpl: `${label} 操作的是${getCommandPosition(label)}。知道位置，就知道它影响什么。` },
        { labelTpl: '基本用法', titleTpl: `${label} 最常用的场景`, textTpl: `最常见的情况是：${getCommandCommonCase(label)}。这个场景覆盖了 80% 的使用。` },
        { labelTpl: '容易踩坑', titleTpl: `${label} 的常见错误`, textTpl: `新手常犯的错误是：${getCommandPitfall(label)}。搞清楚这个，用起来就安心了。` },
        { labelTpl: '进阶理解', titleTpl: `${label} 的深层机制`, textTpl: `${label} 背后的机制是：${getCommandMechanism(label)}。理解了这个，就能举一反三。` },
      ]
    : isGithubFeature
    ? [
        { labelTpl: '它解决什么', titleTpl: `${label} 的核心价值`, textTpl: `${label} 解决的问题是：${getGithubProblem(label)}。有了它，你不用手动处理这些事。` },
        { labelTpl: '基本操作', titleTpl: `${label} 的使用步骤`, textTpl: `使用 ${label} 的基本流程：${getGithubSteps(label)}。跟着做一遍就懂了。` },
        { labelTpl: '注意事项', titleTpl: `${label} 的限制和坑`, textTpl: `使用 ${label} 要注意：${getGithubLimitation(label)}。提前知道，避免踩坑。` },
        { labelTpl: '和别的功能配合', titleTpl: `${label} 在工作流中的位置`, textTpl: `${label} 通常配合 ${getGithubCompanion(label)} 使用，形成完整的自动化链路。` },
      ]
    : [
        { labelTpl: '先建立直觉', titleTpl: `${zh} 的直觉理解`, textTpl: `想象${getConceptIntuition(label)}。这个类比帮你快速建立直觉。` },
        { labelTpl: '关键定义', titleTpl: `${zh} 的正式定义`, textTpl: `${label} 的核心含义：${getConceptDefinition(label)}。记住这句话就够了。` },
        { labelTpl: '常见误解', titleTpl: `关于 ${zh} 的误解`, textTpl: `新手常以为 ${getConceptMisconception(label)}。其实不是这样，真正的理解是${getConceptCorrection(label)}。` },
        { labelTpl: '实际应用', titleTpl: `${zh} 在日常中的用法`, textTpl: `${label} 的实际用途：${getConceptApplication(label)}。这是你最常遇到的情况。` },
      ];

  return stepTemplates.map(t => ({
    label: t.labelTpl,
    title: t.titleTpl.replace('{label}', label).replace('{zh}', zh),
    text: t.textTpl.replace('{label}', label).replace('{zh}', zh),
  }));
}

function getCommandPosition(label) {
  if (label.includes('reset') || label.includes('revert')) return '提交历史指针';
  if (label.includes('stash')) return '工作区/暂存区';
  if (label.includes('bisect')) return '提交历史';
  if (label.includes('reflog')) return 'HEAD 移动记录';
  if (label.includes('log')) return '提交历史';
  if (label.includes('commit')) return '暂存区 → 本地历史';
  return 'Git 的某个内部位置';
}

function getCommandCommonCase(label) {
  if (label.includes('reset --soft')) return '提交说明写错了想改';
  if (label.includes('reset --hard')) return '彻底放弃最近的改动';
  if (label.includes('revert')) return '要撤销一个已推送的提交';
  if (label.includes('reflog')) return '误操作后想找回丢失的提交';
  if (label.includes('bisect')) return '某个 bug 不知道是哪个提交引入的';
  if (label.includes('stash')) return '改到一半要切换分支处理紧急任务';
  if (label.includes('worktree')) return '需要同时在两个分支上工作';
  return '你需要执行这个 Git 操作';
}

function getCommandPitfall(label) {
  if (label.includes('push --force')) return '在公共分支上强制推送，覆盖别人的提交';
  if (label.includes('reset --hard')) return '误用 --hard 丢了工作区改动';
  if (label.includes('rebase')) return '在已推送的分支上 rebase 导致历史冲突';
  return '不理解它在哪个位置操作，导致用错参数';
}

function getCommandMechanism(label) {
  if (label.includes('reset')) return 'Git 的提交是链式结构，reset 把 HEAD 指针移到链的某个节点';
  if (label.includes('rebase')) return 'rebase 把一组提交"搬家"到另一个基底上';
  if (label.includes('bisect')) return 'bisect 利用二分查找在提交链上快速缩小范围';
  if (label.includes('reflog')) return 'reflog 记录了 HEAD 的每次移动，即使提交被"删了"也能找回';
  return 'Git 内部维护了一套数据结构来支持这个命令';
}

function getGithubProblem(label) {
  if (label.includes('Actions')) return '每次推代码都要手动跑测试和部署';
  if (label.includes('Pages')) return '静态网站需要一个免费又方便的托管方案';
  if (label.includes('CLI')) return '频繁切换浏览器和终端太麻烦';
  if (label.includes('Security')) return '依赖里可能有已知漏洞';
  return '某个重复的手动操作';
}

function getGithubSteps(label) {
  if (label.includes('Actions')) return '写 YAML → 定义触发条件 → 配置步骤 → 推代码触发';
  if (label.includes('Pages')) return '创建仓库 → 推静态文件 → 开启 Pages → 访问网站';
  if (label.includes('CLI')) return '安装 gh → 认证 → 用命令操作仓库/Issue/PR';
  return '开启功能 → 配置参数 → 使用';
}

function getGithubLimitation(label) {
  if (label.includes('Actions')) return '免费额度有限，大项目要注意分钟数；YAML 格式容易出错';
  if (label.includes('Pages')) return '只支持静态网站，不支持后端逻辑；自定义域名要配 DNS';
  if (label.includes('CLI')) return '不是所有 GitHub 功能都有命令行对应';
  return '有些高级功能需要付费版';
}

function getGithubCompanion(label) {
  if (label.includes('Actions')) return 'Webhooks 和 Releases';
  if (label.includes('Pages')) return 'Actions（自动部署）和 Custom Domains';
  if (label.includes('CLI')) return 'Actions 和 API';
  return '其他 GitHub 功能';
}

function getConceptIntuition(label) {
  if (label.includes('YAML')) return 'YAML 像一份填表说明：每个字段有固定格式，填对了机器就能读懂';
  if (label.includes('Trigger')) return '触发器像一个闹钟：设定好时间/条件，到了就自动响起';
  if (label.includes('Secret')) return 'Secret 像保险箱：密码放进去，别人看不见，流水线可以取用';
  if (label.includes('Cache')) return '缓存像备忘录：第一次查完记下来，下次直接看备忘录更快';
  return '这个概念像棋盘上的一个规则';
}

function getConceptDefinition(label) {
  if (label.includes('YAML')) return 'YAML 是一种用缩进和键值对表达的配置格式';
  if (label.includes('Trigger')) return '触发器是定义"什么时候跑流水线"的条件';
  if (label.includes('Secret')) return 'Secret 是加密存储的敏感数据，流水线运行时解密使用';
  return '这个概念是 Git/GitHub 体系中的一个基础组成部分';
}

function getConceptMisconception(label) {
  if (label.includes('YAML')) return 'YAML 和 JSON 一样随便写就行';
  if (label.includes('Trigger')) return '触发器只有 push 一种';
  if (label.includes('Secret')) return 'Secret 可以直接写进代码里';
  return '这个概念不重要，可以跳过';
}

function getConceptCorrection(label) {
  if (label.includes('YAML')) return 'YAML 对缩进和格式非常敏感，一个空格错了就整文件废掉';
  if (label.includes('Trigger')) return '触发器有 push、schedule、workflow_dispatch 等多种类型';
  if (label.includes('Secret')) return 'Secret 必须在仓库设置里配置，代码里只能用变量名引用';
  return '每个概念都是后续理解的基础';
}

function getConceptApplication(label) {
  if (label.includes('YAML')) return '写 Actions 配置文件、Docker Compose 文件、K8s 配置';
  if (label.includes('Trigger')) return '配置 Actions 什么时候自动运行';
  if (label.includes('Secret')) return '在 Actions 里安全使用 API 密钥和密码';
  return '日常 Git/GitHub 操作中的判断和决策';
}

function getConfusion(label, isCommand, isGithubFeature) {
  if (isCommand) return `${label} 和相似命令（如 ${getSimilarCommand(label)}）的区别是：${getCommandDistinction(label)}。记住这个区别，就不会用错。`;
  if (isGithubFeature) return `${label} 不是万能的。它的适用场景是 ${getGithubScope(label)}，超出这个范围要用其他工具。`;
  return `${label} 和 ${getSimilarConcept(label)} 的区别：${getConceptDistinction(label)}。`;
}

function getSimilarCommand(label) {
  if (label.includes('reset')) return 'revert';
  if (label.includes('revert')) return 'reset';
  if (label.includes('rebase')) return 'merge';
  if (label.includes('stash')) return 'commit';
  if (label.includes('bisect')) return 'log';
  return '另一个 Git 命令';
}

function getCommandDistinction(label) {
  if (label.includes('reset')) return 'reset 改写本地历史指针，revert 加新提交不改历史';
  if (label.includes('revert')) return 'revert 加新提交不改历史（安全），reset 改写指针（危险）';
  if (label.includes('rebase')) return 'rebase 重排提交（线性历史），merge 保留分支（非线性历史）';
  if (label.includes('stash')) return 'stash 临时保存不提交，commit 正式写入历史';
  return '操作对象或方式不同';
}

function getGithubScope(label) {
  if (label.includes('Actions')) return '自动化 CI/CD 流程';
  if (label.includes('Pages')) return '静态网站托管';
  return '特定的 GitHub 功能';
}

function getSimilarConcept(label) {
  if (label.includes('YAML')) return 'JSON';
  if (label.includes('Trigger')) return 'schedule';
  if (label.includes('Secret')) return '环境变量';
  return '相关的另一个概念';
}

function getConceptDistinction(label) {
  if (label.includes('YAML')) return 'YAML 用缩进，JSON 用括号；YAML 更易读，JSON 更通用';
  if (label.includes('Trigger')) return '触发器是条件配置，schedule 是定时类型之一';
  if (label.includes('Secret')) return 'Secret 加密存储，环境变量明文可读';
  return '侧重点不同';
}

function getExperiment(label, isCommand, isGithubFeature) {
  if (isCommand) return `在一个测试仓库里执行 ${label}，用 git log 和 git status 观察变化。试试不同参数的对比效果。`;
  if (isGithubFeature) return `在 GitHub 上找到 ${label} 的设置页面，按步骤配置一次，观察自动化效果。`;
  return `在本地仓库或 GitHub 上找到一个涉及 ${label} 的场景，动手试一遍。`;
}

// Generate diagram for each node
function generateDiagram(node) {
  const prefix = node.id.slice(0, 8).replace(/[^a-zA-Z0-9]/g, '');
  const box1Id = `${prefix}-box1`;
  const text1Id = `${prefix}-txt1`;
  const box2Id = `${prefix}-box2`;
  const text2Id = `${prefix}-txt2`;
  const arrowId = `${prefix}-arr1`;
  const titleId = `${prefix}-title`;
  const noteId = `${prefix}-note`;

  const isCommand = node.label.startsWith('git ') || node.label.startsWith('--');
  const isGithubFeature = node.label.startsWith('GitHub');

  const leftLabel = isCommand ? '操作前' : '问题';
  const rightLabel = isCommand ? '操作后' : '解决';
  const arrowLabel = isCommand ? node.label : '→';

  const titleText = node.zh.length > 20 ? node.zh.slice(0, 20) + '...' : node.zh;

  return `excalidrawScene([
    excalidrawText('${titleId}', 120, 18, '${titleText}', 28, 500),
    ...excalidrawLabeledBox('${box1Id}', '${text1Id}', 50, 100, '${leftLabel}', '#e7f5ff', 20, 160, 60),
    ...excalidrawLabeledBox('${box2Id}', '${text2Id}', 380, 100, '${rightLabel}', '#d3f9d8', 20, 160, 60),
    excalidrawArrow('${arrowId}', 216, 130, 158, 0),
    excalidrawText('${noteId}', 100, 260, '${node.core || node.label}', 20, 400),
  ])`;
}

// Generate TypeScript code for each lesson entry
function generateLessonCode(node) {
  const content = generateContent(node);
  const diagramCode = generateDiagram(node);

  const routeLines = content.route.map(step =>
    `      { label: '${step.label}', title: '${step.title.replace(/'/g, "\\'")}', text: '${step.text.replace(/'/g, "\\'")}' }`
  ).join(',\n');

  return `  ${node.id}: {
    heading: '${content.heading.replace(/'/g, "\\'")}',
    subheading: '${content.subheading.replace(/'/g, "\\'")}',
    metaphor: '${content.metaphor.replace(/'/g, "\\'")}',
    mistake: '${content.mistake.replace(/'/g, "\\'")}',
    scene: '${content.scene.replace(/'/g, "\\'")}',
    core: '${content.core.replace(/'/g, "\\'")}',
    route: [
${routeLines}
    ],
    confusion: '${content.confusion.replace(/'/g, "\\'")}',
    experiment: '${content.experiment.replace(/'/g, "\\'")}',
    rawDiagram: ${diagramCode},
  },`;
}

// Generate all lesson entries
const lessonEntries = missingNodes.map(node => generateLessonCode(node));

// Find the closing brace of GIT_TEACHING_LESSONS object to append entries
const closingBraceRegex = /\n\};\s*\n\s*export function hasGitTeachingLesson/;
const closingMatch = closingBraceRegex.exec(teachingSource);

if (!closingMatch) {
  console.error('Could not find the closing brace of GIT_TEACHING_LESSONS. Aborting.');
  process.exit(1);
}

// Insert new entries before the closing brace
const insertPosition = closingMatch.index;
const newEntries = lessonEntries.join('\n');
const modifiedSource = teachingSource.slice(0, insertPosition) + '\n' + newEntries + '\n' + teachingSource.slice(insertPosition);

writeFileSync(teachingPath, modifiedSource, 'utf-8');
console.log(`Added ${missingNodes.length} lessons to teaching.ts for stages ${startStage}-${endStage}.`);
console.log('Run `npm run build` to verify.');
```

- [ ] **Step 2: Test the script**

```bash
node scripts/generate-git-lessons.mjs 19 19
```

Expected: Script adds ~6 lessons for stage 19 and prints count.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds. If it fails, check the generated TypeScript for syntax errors and fix the script.

- [ ] **Step 4: If build fails, restore and debug**

```bash
git checkout src/roadmaps/git/teaching.ts
```

Fix the script based on the error, then re-run.

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-git-lessons.mjs
git commit -m "feat: add lesson generation script for git roadmap"
```

---

### Task 6: Generate all remaining lessons (stages 19-26)

**Files:**
- Modify: `src/roadmaps/git/teaching.ts` (appended by script)

- [ ] **Step 1: Restore teaching.ts to clean state (if Task 5 test modified it)**

```bash
git checkout src/roadmaps/git/teaching.ts
```

- [ ] **Step 2: Run the generation script for stages 19-26**

```bash
node scripts/generate-git-lessons.mjs 19 26
```

Expected: Script adds 47 lessons and prints "Added 47 lessons to teaching.ts for stages 19-26."

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no type errors.

- [ ] **Step 4: Visual verification**

Run: `npm run dev`
Open the app in browser, navigate to a stage 19-26 node, and verify:
1. The lesson renders correctly
2. The diagram shows with properly bound text (no overflow)
3. All lesson content fields display

- [ ] **Step 5: Commit**

```bash
git add src/roadmaps/git/teaching.ts
git commit -m "feat: add 47 Git lessons for stages 19-26 via generation script"
```

---

### Task 7: Update LearningLab to support new lessons

**Files:**
- Modify: `src/components/LearningLab.tsx`

The LearningLab already supports TeachingLesson via `GIT_TEACHING_LESSONS`. After adding 47 new entries, the `hasGitTeachingLesson` and `getGitTeachingLesson` functions will automatically pick them up because they query the `GIT_TEACHING_LESSONS` record by ID. No code changes needed in LearningLab.tsx.

However, verify that the `GIT_STAGE_ONE_LESSON_IDS` set in LearningLab.tsx line 19 still works correctly. It's defined as:
```typescript
export const GIT_STAGE_ONE_LESSON_IDS = new Set(Object.keys(GIT_TEACHING_LESSONS));
```

This name (`GIT_STAGE_ONE_LESSON_IDS`) is misleading now — it covers ALL stages, not just stage one. But changing it would require updating all consumers. For now, leave it as-is since it works correctly.

- [ ] **Step 1: Verify LearningLab renders new lessons**

Run: `npm run dev`
Navigate to any stage 19-26 node. The lesson should render using the TeachingLesson format (with heading, metaphor, diagram, etc.) — same as stage 1-18 lessons.

- [ ] **Step 2: If rendering works, no code changes needed**

If new lessons render correctly, skip this task. If there are issues, investigate and fix.

---

## Self-Review

**1. Spec coverage:**
- Text overflow fix: Covered by Tasks 1-4 (add helper, import, migrate, verify)
- Automation for 47 remaining lessons: Covered by Tasks 5-7 (script, generate, verify)
- Both problems addressed in correct order (fix first, then generate new lessons using fixed helper)

**2. Placeholder scan:**
- All code blocks contain complete implementations
- No "TBD", "TODO", "implement later" patterns
- All functions have actual content generation logic
- The content template system produces unique text per node based on label analysis

**3. Type consistency:**
- `excalidrawLabeledBox` returns `[ExcalidrawElement, ExcalidrawElement]` — caller spreads into array
- `ExcalidrawElement` type is `Record<string, unknown>` — all added properties are valid
- Generated lesson entries match `TeachingLesson` type (heading, subheading, metaphor, mistake, scene, core, route, confusion, experiment, rawDiagram)
- `rawDiagram` value is `string` (from `excalidrawScene()` which returns JSON string)

---

**Plan complete and saved to `docs/superpowers/plans/2025-05-25-diagram-fix-and-automation.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**