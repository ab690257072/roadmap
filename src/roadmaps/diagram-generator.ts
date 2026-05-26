import type { DeepLessonStep } from './types';

export type DiagramBox = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  stepIndex?: number;
};

export type DiagramArrow = {
  d: string;
  stepIndex?: number;
  label?: string;
};

export type BoardDecoration =
  | { kind: 'code'; x: number; y: number; w: number; h: number; lines: string[] }
  | { kind: 'note'; x: number; y: number; text: string }
  | { kind: 'badge'; x: number; y: number; text: string };

export type BoardDiagram = {
  heading: string;
  template: string;
  boxes: DiagramBox[];
  arrows: DiagramArrow[];
  decorations?: BoardDecoration[];
};

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick<T>(arr: T[], seed: number) {
  return arr[seed % arr.length];
}

function clip(text: string, max = 10) {
  const t = text.replace(/（.*?）/g, '').trim();
  return t.length > max ? `${t.slice(0, max)}…` : t;
}

function inferKind(en: string, zh: string) {
  const text = `${en} ${zh}`.toLowerCase();
  if (/ vs |对比/.test(text)) return 'compare';
  if (/git|github|branch|commit|merge|rebase|clone|remote|stash|push|pull|fetch|checkout|tag|cherry|revert|reset|diff|log|status|add|staging|pull request|pr\b/.test(text)) return 'git';
  if (/select|insert|update|delete|join|where|sql|table|index|transaction|ddl|dml/.test(text)) return 'sql';
  if (/docker|container|image|kubernetes|pod|helm|deploy|ci|cd|devops/.test(text)) return 'deploy';
  if (/redis|cache|mongo|postgres|database|replication|shard/.test(text)) return 'data';
  if (/auth|oauth|jwt|security|encrypt|rbac|tls|ssl/.test(text)) return 'security';
  if (/api|rest|graphql|grpc|http|endpoint|request|response/.test(text)) return 'api';
  if (/linux|shell|terminal|process|file|permission|systemd/.test(text)) return 'linux';
  if (/scale|load|queue|cache|design|architect|microservice|monolith/.test(text)) return 'system';
  if (/go |goroutine|channel|interface|struct|pointer|module/.test(text)) return 'go';
  return 'general';
}

function headingFor(zh: string, kind: string, seed: number) {
  const pool: Record<string, string[]> = {
    compare: [`${zh}：左右对比，先弄清差异再选用`, `「${zh}」不是二选一，而是看清各自适用场景`],
    git: [`${zh}：想象成游戏存档与分支平行世界`, `Git 视角看「${zh}」：工作区 → 暂存 → 仓库`],
    sql: [`${zh}：数据怎么查、怎么改、怎么保证一致`, `SQL 视角理解「${zh}」：表、行、约束与结果集`],
    deploy: [`${zh}：从代码到容器再到集群的一条链`, `部署视角看「${zh}」：打包、运行、观测`],
    data: [`${zh}：读写路径与一致性要想清楚`, `存储视角理解「${zh}」：数据落在哪、怎么查`],
    security: [`${zh}：谁是谁、能做什么、数据如何保护`, `安全视角看「${zh}」：认证、授权与加密`],
    api: [`${zh}：请求进、规则处理、响应出`, `API 视角理解「${zh}」：契约、状态码与边界`],
    linux: [`${zh}：在服务器上它对应哪条命令/哪个进程`, `Linux 视角看「${zh}」：文件、权限、进程`],
    system: [`${zh}：流量来了怎么办、坏了怎么兜底`, `架构视角理解「${zh}」：扩展、容错与权衡`],
    go: [`${zh}：Go 代码里它长什么样、何时用`, `Go 视角看「${zh}」：类型、并发与包管理`],
    general: [
      `把「${zh}」放进输入 → 处理 → 输出三段里理解`,
      `${zh}：先知道它解决什么问题，再记名词`,
      `理解「${zh}」：先看链路，再补充配置细节`,
    ],
  };
  return pick(pool[kind] || pool.general, seed);
}

function routeTitles(route: DeepLessonStep[]) {
  return route.map((s, i) => ({
    title: clip((s.label.length <= 8 ? s.label : s.title.replace(/…$/, '')) || s.label, 12),
    sub: clip(s.text.replace(/\*\*/g, ''), 16),
    stepIndex: i,
  }));
}

function tryDedicatedDiagram(zh: string, en: string, route: DeepLessonStep[]): BoardDiagram | null {
  const text = `${en} ${zh}`.toLowerCase();
  const titles = routeTitles(route);

  if (/push|pull|fetch|remote/.test(text)) {
    return {
      heading: `${zh}：本地分支和远程仓库怎么同步`,
      template: 'git-remote-sync',
      boxes: [
        { x: 48, y: 148, w: 132, h: 72, title: '本地分支', sub: 'commit 在历史里', stepIndex: 0 },
        { x: 248, y: 108, w: 132, h: 72, title: 'git push', sub: '上传 commits', stepIndex: 1 },
        { x: 448, y: 148, w: 132, h: 72, title: '远程 origin', sub: 'GitHub/GitLab', stepIndex: 1 },
        { x: 248, y: 228, w: 132, h: 72, title: 'git pull', sub: '拉取并合并', stepIndex: 2 },
        { x: 48, y: 228, w: 132, h: 72, ...titles[3] },
      ],
      arrows: [
        { d: 'M182 184 H244', stepIndex: 1, label: 'push' },
        { d: 'M382 184 H444', stepIndex: 1 },
        { d: 'M514 184 C514 260, 314 260, 314 232', stepIndex: 2, label: 'pull' },
        { d: 'M248 264 H182', stepIndex: 2 },
      ],
      decorations: [{
        kind: 'code',
        x: 48,
        y: 48,
        w: 420,
        h: 52,
        lines: ['git push origin feature-login', 'git pull origin main   # 先拉再推，减少冲突'],
      }],
    };
  }

  if (/commit|staging|add |status|diff/.test(text) && /git|暂存|提交|工作区/.test(`${en} ${zh}`)) {
    return {
      heading: `${zh}：工作区 → 暂存区 → 本地仓库`,
      template: 'git-local-flow',
      boxes: [
        { x: 40, y: 168, w: 128, h: 68, title: '工作区', sub: '改文件', stepIndex: 0 },
        { x: 200, y: 168, w: 128, h: 68, title: '暂存区', sub: 'git add', stepIndex: 1 },
        { x: 360, y: 168, w: 128, h: 68, title: '本地仓库', sub: 'git commit', stepIndex: 2 },
        { x: 520, y: 168, w: 128, h: 68, ...titles[3] },
      ],
      arrows: [
        { d: 'M170 202 H196', stepIndex: 0 },
        { d: 'M330 202 H356', stepIndex: 1 },
        { d: 'M490 202 H516', stepIndex: 2 },
      ],
      decorations: [{ kind: 'code', x: 40, y: 56, w: 360, h: 52, lines: ['git status', 'git add . && git commit -m "fix login"'] }],
    };
  }

  if (/branch|merge|rebase|conflict/.test(text)) {
    return {
      heading: `${zh}：分支并行开发，最后合并回主线`,
      template: 'git-branch-merge',
      boxes: [
        { x: 60, y: 200, w: 120, h: 64, title: 'main', sub: '稳定主线', stepIndex: 0 },
        { x: 240, y: 120, w: 120, h: 64, title: 'feature', sub: '你的分支', stepIndex: 1 },
        { x: 420, y: 200, w: 120, h: 64, title: 'merge/rebase', sub: '合回 main', stepIndex: 2 },
        { x: 580, y: 200, w: 120, h: 64, ...titles[3] },
      ],
      arrows: [
        { d: 'M180 200 C210 170, 210 150, 240 152', stepIndex: 1 },
        { d: 'M362 152 C390 170, 390 200, 418 200', stepIndex: 2 },
        { d: 'M542 232 H576', stepIndex: 3 },
      ],
      decorations: [{ kind: 'note', x: 48, y: 48, text: `场景：${clip(zh, 16)}` }],
    };
  }

  if (/select|insert|update|delete|join|where|index|transaction|sql/.test(text)) {
    return {
      heading: `${zh}：表 → 条件 → 结果集`,
      template: 'sql-query-flow',
      boxes: [
        { x: 48, y: 150, w: 130, h: 68, title: '表/索引', sub: 'users · orders', stepIndex: 0 },
        { x: 230, y: 130, w: 150, h: 88, title: clip(zh, 10), sub: 'WHERE · JOIN', stepIndex: 1 },
        { x: 432, y: 150, w: 130, h: 68, title: '结果集', sub: '行 + 列', stepIndex: 2 },
        { x: 612, y: 150, w: 110, h: 68, ...titles[3] },
      ],
      arrows: [
        { d: 'M180 184 H226', stepIndex: 0 },
        { d: 'M382 174 H428', stepIndex: 1 },
        { d: 'M564 184 H608', stepIndex: 2 },
      ],
      decorations: [{ kind: 'code', x: 48, y: 52, w: 340, h: 52, lines: ['SELECT u.name, o.total', 'FROM users u JOIN orders o ON u.id = o.user_id'] }],
    };
  }

  if (/docker|container|image|dockerfile/.test(text)) {
    return {
      heading: `${zh}：代码 → 镜像 → 容器运行`,
      template: 'docker-build-run',
      boxes: [
        { x: 48, y: 150, w: 130, h: 68, title: '源码', sub: 'Dockerfile', stepIndex: 0 },
        { x: 230, y: 150, w: 130, h: 68, title: '镜像', sub: 'docker build', stepIndex: 1 },
        { x: 412, y: 150, w: 130, h: 68, title: '容器', sub: 'docker run', stepIndex: 2 },
        { x: 594, y: 150, w: 120, h: 68, ...titles[3] },
      ],
      arrows: [
        { d: 'M180 184 H226', stepIndex: 0 },
        { d: 'M362 184 H408', stepIndex: 1 },
        { d: 'M544 184 H590', stepIndex: 2 },
      ],
    };
  }

  if (/redis|cache|缓存/.test(text)) {
    return {
      heading: `${zh}：先查缓存，未命中再查库`,
      template: 'cache-aside',
      boxes: [
        { x: 48, y: 140, w: 118, h: 64, title: '请求', sub: '读热点数据', stepIndex: 0 },
        { x: 210, y: 120, w: 130, h: 84, title: 'Redis', sub: '命中直接返回', stepIndex: 1 },
        { x: 392, y: 140, w: 118, h: 64, title: '数据库', sub: '未命中回源', stepIndex: 2 },
        { x: 554, y: 140, w: 130, h: 64, ...titles[3] },
      ],
      arrows: [
        { d: 'M168 172 H206', stepIndex: 0 },
        { d: 'M342 172 H388', stepIndex: 1, label: 'miss' },
        { d: 'M512 172 H550', stepIndex: 2 },
      ],
    };
  }

  if (/api|rest|http|endpoint|request|response|graphql|grpc/.test(text)) {
    return {
      heading: `${zh}：客户端 → 接口 → 业务 → 响应`,
      template: 'api-request-flow',
      boxes: [
        { x: 36, y: 140, w: 118, h: 64, title: '客户端', sub: '浏览器/App', stepIndex: 0 },
        { x: 198, y: 128, w: 140, h: 88, title: clip(zh, 10), sub: '路由+校验', stepIndex: 1 },
        { x: 382, y: 140, w: 118, h: 64, title: '业务/存储', sub: '读写数据', stepIndex: 2 },
        { x: 544, y: 140, w: 130, h: 64, title: 'JSON 响应', sub: '状态码', stepIndex: 3 },
      ],
      arrows: [
        { d: 'M156 172 H194', stepIndex: 0, label: '请求' },
        { d: 'M340 172 H378', stepIndex: 1 },
        { d: 'M502 172 H540', stepIndex: 2, label: '返回' },
      ],
    };
  }

  return null;
}

function stepBoxes(route: DeepLessonStep[], zh: string, en: string, layout: string): { boxes: DiagramBox[]; arrows: DiagramArrow[]; decorations?: BoardDecoration[] } {
  const titles = routeTitles(route);

  const layouts: Record<string, () => { boxes: DiagramBox[]; arrows: DiagramArrow[]; decorations?: BoardDecoration[] }> = {
    'flow-h': () => ({
      boxes: [
        { x: 36, y: 118, w: 148, h: 68, ...titles[0] },
        { x: 220, y: 118, w: 148, h: 68, ...titles[1] },
        { x: 404, y: 118, w: 148, h: 68, ...titles[2] },
        { x: 588, y: 118, w: 136, h: 68, ...titles[3] },
      ],
      arrows: [
        { d: 'M186 152 H216', stepIndex: 0 },
        { d: 'M370 152 H400', stepIndex: 1 },
        { d: 'M554 152 H584', stepIndex: 2 },
      ],
    }),
    'snake': () => ({
      boxes: [
        { x: 48, y: 96, w: 140, h: 64, ...titles[0] },
        { x: 240, y: 96, w: 140, h: 64, ...titles[1] },
        { x: 432, y: 170, w: 140, h: 64, ...titles[2] },
        { x: 624, y: 170, w: 120, h: 64, ...titles[3] },
      ],
      arrows: [
        { d: 'M190 128 H236', stepIndex: 0 },
        { d: 'M382 128 C410 128, 420 170, 428 198', stepIndex: 1 },
        { d: 'M574 202 H620', stepIndex: 2 },
      ],
    }),
    'hub': () => ({
      boxes: [
        { x: 300, y: 108, w: 160, h: 72, title: clip(zh, 8), sub: '核心概念', stepIndex: 0 },
        { x: 48, y: 48, w: 130, h: 58, ...titles[0] },
        { x: 48, y: 210, w: 130, h: 58, ...titles[1] },
        { x: 582, y: 48, w: 130, h: 58, ...titles[2] },
        { x: 582, y: 210, w: 130, h: 58, ...titles[3] },
      ],
      arrows: [
        { d: 'M180 76 L296 120', stepIndex: 0 },
        { d: 'M180 238 L296 168', stepIndex: 1 },
        { d: 'M462 144 L578 76', stepIndex: 2 },
        { d: 'M462 144 L578 238', stepIndex: 3 },
      ],
    }),
    'stack': () => ({
      boxes: [
        { x: 250, y: 72, w: 260, h: 52, ...titles[0] },
        { x: 250, y: 138, w: 260, h: 52, ...titles[1] },
        { x: 250, y: 204, w: 260, h: 52, ...titles[2] },
        { x: 250, y: 270, w: 260, h: 52, ...titles[3] },
      ],
      arrows: [
        { d: 'M380 124 V134', stepIndex: 0 },
        { d: 'M380 190 V200', stepIndex: 1 },
        { d: 'M380 256 V266', stepIndex: 2 },
      ],
    }),
    'compare': () => ({
      boxes: [
        { x: 56, y: 110, w: 180, h: 78, title: titles[0].title, sub: '方案 A / 左侧', stepIndex: 0 },
        { x: 524, y: 110, w: 180, h: 78, title: titles[2].title, sub: '方案 B / 右侧', stepIndex: 2 },
        { x: 280, y: 118, w: 200, h: 62, title: clip(zh, 8), sub: '对比焦点', stepIndex: 1 },
        { x: 280, y: 228, w: 200, h: 58, title: titles[3].title, sub: '选型结论', stepIndex: 3 },
      ],
      arrows: [
        { d: 'M238 149 H274', stepIndex: 0 },
        { d: 'M482 149 H518', stepIndex: 2 },
        { d: 'M380 182 V224', stepIndex: 1 },
      ],
      decorations: [{ kind: 'badge', x: 368, y: 88, text: 'VS' }],
    }),
    'request': () => ({
      boxes: [
        { x: 32, y: 130, w: 118, h: 64, title: '客户端', sub: '浏览器/App', stepIndex: 0 },
        { x: 190, y: 118, w: 140, h: 88, title: clip(zh, 8), sub: '处理规则', stepIndex: 1 },
        { x: 370, y: 130, w: 118, h: 64, title: '服务/存储', sub: '执行业务', stepIndex: 2 },
        { x: 528, y: 130, w: 118, h: 64, title: '响应', sub: 'JSON/状态码', stepIndex: 3 },
      ],
      arrows: [
        { d: 'M152 162 H186', stepIndex: 0, label: '请求' },
        { d: 'M332 162 H366', stepIndex: 1, label: '读写' },
        { d: 'M490 162 H524', stepIndex: 2, label: '返回' },
      ],
    }),
    'git-flow': () => ({
      boxes: [
        { x: 40, y: 200, w: 120, h: 58, title: '工作区', sub: '改文件', stepIndex: 0 },
        { x: 200, y: 200, w: 120, h: 58, title: '暂存区', sub: 'git add', stepIndex: 1 },
        { x: 360, y: 200, w: 120, h: 58, title: '本地仓库', sub: 'commit', stepIndex: 2 },
        { x: 520, y: 200, w: 120, h: 58, title: clip(zh, 8), sub: 'remote/PR', stepIndex: 3 },
      ],
      arrows: [
        { d: 'M162 228 H196', stepIndex: 0 },
        { d: 'M322 228 H356', stepIndex: 1 },
        { d: 'M482 228 H516', stepIndex: 2 },
      ],
      decorations: [{ kind: 'note', x: 40, y: 72, text: `Git 场景：${clip(zh, 14)}` }],
    }),
    'data-store': () => ({
      boxes: [
        { x: 280, y: 88, w: 200, h: 100, title: clip(zh, 8), sub: '存储/索引', stepIndex: 1 },
        { x: 48, y: 220, w: 130, h: 58, ...titles[0] },
        { x: 240, y: 220, w: 130, h: 58, ...titles[2] },
        { x: 432, y: 220, w: 130, h: 58, ...titles[3] },
        { x: 624, y: 220, w: 110, h: 58, title: '结果', sub: '命中/延迟', stepIndex: 3 },
      ],
      arrows: [
        { d: 'M180 248 L276 188', stepIndex: 0 },
        { d: 'M380 188 V216', stepIndex: 1 },
        { d: 'M480 248 L376 188', stepIndex: 2 },
        { d: 'M564 248 H620', stepIndex: 2 },
      ],
    }),
    'terminal': () => ({
      boxes: titles.map((t, i) => ({
        x: 48 + i * 168,
        y: 140,
        w: 148,
        h: 68,
        ...t,
      })),
      arrows: [
        { d: 'M198 174 H212', stepIndex: 0 },
        { d: 'M366 174 H380', stepIndex: 1 },
        { d: 'M534 174 H548', stepIndex: 2 },
      ],
      decorations: [{
        kind: 'code',
        x: 48,
        y: 72,
        w: 320,
        h: 52,
        lines: [en.startsWith('git ') ? en : `$ ${en.toLowerCase().slice(0, 24)}`, '# 观察输入与输出'],
      }],
    }),
  };

  const kindLayout: Record<string, string[]> = {
    compare: ['compare'],
    git: ['git-flow', 'flow-h', 'snake'],
    sql: ['data-store', 'flow-h', 'stack'],
    deploy: ['stack', 'request', 'flow-h'],
    data: ['data-store', 'hub', 'snake'],
    security: ['request', 'hub', 'compare'],
    api: ['request', 'flow-h', 'snake'],
    linux: ['terminal', 'stack', 'flow-h'],
    system: ['hub', 'compare', 'stack'],
    go: ['flow-h', 'terminal', 'snake'],
    general: ['flow-h', 'snake', 'hub', 'stack'],
  };

  return (layouts[layout] || layouts['flow-h'])();
}

export function buildBoardDiagram(id: string, zh: string, en: string, route: DeepLessonStep[]): BoardDiagram {
  const dedicated = tryDedicatedDiagram(zh, en, route);
  if (dedicated) return dedicated;

  const seed = hash(id);
  const kind = inferKind(en, zh);
  const layoutPool = {
    compare: ['compare'],
    git: ['git-flow', 'flow-h', 'snake'],
    sql: ['data-store', 'flow-h', 'stack'],
    deploy: ['stack', 'request', 'flow-h'],
    data: ['data-store', 'hub', 'snake'],
    security: ['request', 'hub', 'compare'],
    api: ['request', 'flow-h', 'snake'],
    linux: ['terminal', 'stack', 'flow-h'],
    system: ['hub', 'compare', 'stack'],
    go: ['flow-h', 'terminal', 'snake'],
    general: ['flow-h', 'snake', 'hub', 'stack', 'request'],
  }[kind] || ['flow-h', 'snake', 'hub', 'stack'];
  const template = pick(layoutPool, seed + hash(zh));
  const { boxes, arrows, decorations } = stepBoxes(route, zh, en, template);
  const jitter = (seed % 17) - 8;
  return {
    heading: headingFor(zh, kind, seed),
    template: `${kind}-${template}`,
    boxes: boxes.map((b) => ({ ...b, x: b.x + jitter, y: b.y + ((seed >> 4) % 11) - 5 })),
    arrows,
    decorations,
  };
}
