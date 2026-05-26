import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { isLearnableLabel, translateLabel } from './roadmap-zh-dict.mjs';

const root = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const ids = process.argv.slice(2);

/** @type {Record<string, { slug?: string; title: string; displayTitle: string; description: string; sourceUrl: string }>} */
const roadmapMeta = {
  golang: { title: 'Go 开发路线图', displayTitle: 'Go 后端开发', description: '完整导入 roadmap.sh/golang，并按前端转后端学习方式补充本地中文精讲。', sourceUrl: 'https://roadmap.sh/golang' },
  docker: { title: 'Docker 路线图', displayTitle: 'Docker 容器化', description: '完整导入 roadmap.sh/docker，覆盖容器基础、镜像、网络、存储、Compose 与生产实践。', sourceUrl: 'https://roadmap.sh/docker' },
  kubernetes: { title: 'Kubernetes 路线图', displayTitle: 'Kubernetes 云原生', description: '完整导入 roadmap.sh/kubernetes，覆盖集群、工作负载、网络、存储、安全和运维。', sourceUrl: 'https://roadmap.sh/kubernetes' },
  mongodb: { title: 'MongoDB 路线图', displayTitle: 'MongoDB 数据库', description: '完整导入 roadmap.sh/mongodb，覆盖文档模型、查询、索引、聚合、复制和分片。', sourceUrl: 'https://roadmap.sh/mongodb' },
  sql: { title: 'SQL 路线图', displayTitle: 'SQL 查询', description: '关系型数据库查询语言，PostgreSQL/MySQL 的基础。', sourceUrl: 'https://roadmap.sh/sql' },
  postgresql: { slug: 'postgresql-dba', title: 'PostgreSQL 路线图', displayTitle: 'PostgreSQL', description: '主流生产级关系型数据库，索引、事务、备份与运维。', sourceUrl: 'https://roadmap.sh/postgresql-dba' },
  redis: { title: 'Redis 路线图', displayTitle: 'Redis 缓存', description: '内存缓存、Session、分布式锁与消息队列。', sourceUrl: 'https://roadmap.sh/redis' },
  linux: { title: 'Linux 路线图', displayTitle: 'Linux 运维', description: '服务器日常：文件、进程、网络、权限与 Shell。', sourceUrl: 'https://roadmap.sh/linux' },
  git: { slug: 'git-github', title: 'Git & GitHub 路线图', displayTitle: 'Git & GitHub', description: '版本控制、分支协作、PR 与 CI 前置技能。', sourceUrl: 'https://roadmap.sh/git-github' },
  devops: { title: 'DevOps 路线图', displayTitle: 'DevOps', description: '持续集成、持续交付与运维自动化闭环。', sourceUrl: 'https://roadmap.sh/devops' },
  'api-design': { title: 'API Design 路线图', displayTitle: 'API 设计', description: 'REST 规范、版本管理、错误码与接口文档。', sourceUrl: 'https://roadmap.sh/api-design' },
  'system-design': { title: 'System Design 路线图', displayTitle: '系统设计', description: '高可用、扩展性、缓存、消息队列与架构模式。', sourceUrl: 'https://roadmap.sh/system-design' },
};

function buildStages(nodes) {
  const sorted = [...nodes].sort((a, b) => (a.y - b.y) || (a.x - b.x));
  const chunkSize = 6;
  const cols = 4;
  const stageW = 430;
  const x0 = 90;
  const y0 = 90;
  const gapX = 520;
  const gapY = 48;
  const chunks = [];
  for (let i = 0; i < sorted.length; i += chunkSize) chunks.push(sorted.slice(i, i + chunkSize));

  const rowHeights = [];
  const stages = chunks.map((chunk, stageIndex) => {
    const row = Math.floor(stageIndex / cols);
    const colInRow = stageIndex % cols;
    const col = row % 2 === 0 ? colInRow : cols - 1 - colInRow;
    const first = chunk.find((node) => node.nodeType === 'topic') || chunk[0];
    const gridRows = Math.ceil(chunk.length / 2);
    const mapH = 64 + gridRows * 76 + 16;
    rowHeights[row] = Math.max(rowHeights[row] || 0, mapH);
    return {
      id: `stage-${String(stageIndex + 1).padStart(2, '0')}`,
      zh: `阶段 ${String(stageIndex + 1).padStart(2, '0')}：${first.zh}`,
      en: first.label || `Stage ${stageIndex + 1}`,
      desc: `按 roadmap.sh 原始顺序整理的第 ${stageIndex + 1} 组学习节点。`,
      nodes: chunk,
      index: stageIndex + 1,
      mapX: x0 + col * gapX,
      mapY: y0,
      mapW: stageW,
      mapH,
    };
  });

  const rowY = [y0];
  for (let row = 1; row < rowHeights.length; row += 1) {
    rowY[row] = rowY[row - 1] + rowHeights[row - 1] + gapY;
  }
  stages.forEach((stage, index) => {
    stage.mapY = rowY[Math.floor(index / cols)];
  });

  const maxBottom = stages.reduce((max, stage) => Math.max(max, stage.mapY + stage.mapH), y0);
  return { stages, mapHeight: maxBottom + 90 };
}

function inferKind(label, zh, roadmapId) {
  const text = `${roadmapId} ${label} ${zh}`.toLowerCase();
  if (/git|github|branch|commit|merge|rebase|stash|clone|remote|pull|push/.test(text)) return 'git';
  if (/sql|postgres|mysql|database|table|index|transaction|join|query|ddl|dml|acid|mvcc/.test(text)) return 'sql';
  if (/redis|cache|缓存|session|pub|sub|stream|bitmap|hyperloglog/.test(text)) return 'cache';
  if (/mongo|document|bson|replica|shard|aggregation|atlas/.test(text)) return 'document-db';
  if (/docker|container|image|compose|registry|namespace|cgroup/.test(text)) return 'container';
  if (/kubernetes|pod|service|ingress|helm|cluster|deployment|statefulset|configmap|secret|rbac/.test(text)) return 'k8s';
  if (/linux|shell|terminal|process|permission|systemd|file|user|group|network/.test(text)) return 'linux';
  if (/api|rest|http|grpc|graphql|endpoint|request|response|status|auth|cors|pagination|rate/.test(text)) return 'api';
  if (/devops|ci|cd|pipeline|terraform|ansible|monitor|logging|observability|alert/.test(text)) return 'devops';
  if (/system|scale|load|queue|microservice|architecture|availability|consistency|cap|circuit/.test(text)) return 'system';
  if (/go|golang|goroutine|channel|struct|interface|pointer|slice|module|package|testing/.test(text)) return 'go';
  return 'general';
}

const kindCopy = {
  git: {
    role: '它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。',
    mental: '把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。',
    details: ['它改变的是代码历史，而不是业务运行时。', '要重点观察工作区状态、提交历史和远程分支之间的差异。', '学习时不要只记命令，必须配合一次真实分支改动。'],
    practice: '新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。',
    pitfalls: ['没看状态就执行重置/合并', '把工作区、暂存区、本地仓库混成一件事', '不知道命令会不会改写历史'],
  },
  sql: {
    role: '它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。',
    mental: '把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。',
    details: ['先区分它是在定义结构、查询数据、修改数据，还是控制事务。', '查询时关注输入表、过滤条件、连接方式和最终结果集。', '性能问题通常要看索引、执行计划和返回数据量。'],
    practice: '准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。',
    pitfalls: ['只会写 SELECT，不理解表关系', '忽略 NULL、重复数据和边界条件', '没有看执行计划就猜性能瓶颈'],
  },
  cache: {
    role: '它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。',
    mental: '缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。',
    details: ['先判断数据是否适合缓存：读多写少、可接受短暂不一致。', '再设计 key、TTL、淘汰策略和更新时机。', '最后观察命中率、内存占用和击穿/穿透/雪崩风险。'],
    practice: '用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。',
    pitfalls: ['把缓存当成永久存储', 'key 设计没有业务维度导致串数据', '只处理命中，不处理失效和并发回源'],
  },
  'document-db': {
    role: '它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。',
    mental: '文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。',
    details: ['先明确一次请求通常读写哪些字段。', '再决定嵌入还是引用，避免一次查询跨太多集合。', '索引、聚合、复制和分片决定它能否支撑真实流量。'],
    practice: '建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。',
    pitfalls: ['把关系型建模直接搬过来', '无限嵌套导致文档过大', '没有按查询方式建索引'],
  },
  container: {
    role: '它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。',
    mental: '容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。',
    details: ['先分清镜像、容器、Dockerfile、Compose 各自职责。', '构建时关注层缓存、基础镜像和安全漏洞。', '运行时关注端口、环境变量、日志、卷和退出状态。'],
    practice: '写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。',
    pitfalls: ['镜像里塞进不必要文件', '本地能跑但容器缺环境变量', '把容器文件系统当成持久存储'],
  },
  k8s: {
    role: '它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。',
    mental: 'Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。',
    details: ['先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。', '再看配置、密钥、存储、网络和权限如何注入。', '排障时围绕 describe、logs、events、状态字段逐层定位。'],
    practice: '用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。',
    pitfalls: ['直接操作 Pod 而忽略控制器', '不看 events 就猜问题', '把 Service、Ingress、Deployment 的职责混在一起'],
  },
  linux: {
    role: '它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。',
    mental: '后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。',
    details: ['先知道它对应文件、进程、用户权限、网络还是服务管理。', '再配合命令观察输入输出，而不是只背参数。', '线上排障时要保守操作，先读状态再改配置。'],
    practice: '在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。',
    pitfalls: ['不理解权限就 sudo', '改配置前不备份', '只看应用日志，不看系统资源'],
  },
  api: {
    role: '它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。',
    mental: 'API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。',
    details: ['先明确资源、动作、请求参数、响应结构和错误格式。', '再考虑认证、幂等、分页、限流和版本演进。', '好的 API 不只是能调用，还要易理解、可调试、可长期维护。'],
    practice: '为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。',
    pitfalls: ['把业务错误都返回 200', '响应结构不稳定', '没有考虑分页、权限和版本兼容'],
  },
  devops: {
    role: '它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。',
    mental: 'DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。',
    details: ['先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。', '再明确触发条件、输入产物、输出产物和失败处理。', '成熟流程应该能重复执行、能审计、能回滚。'],
    practice: '写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。',
    pitfalls: ['只自动部署，不自动测试', '环境变量和密钥管理混乱', '发布后没有监控和回滚方案'],
  },
  system: {
    role: '它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。',
    mental: '系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。',
    details: ['先画请求链路，找到入口、存储、缓存、队列和外部依赖。', '再判断瓶颈、单点、数据一致性和扩展方式。', '最后用指标和故障演练验证设计是否成立。'],
    practice: '选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。',
    pitfalls: ['只背八股名词，不落到具体场景', '为了高大上过度拆微服务', '没有说明取舍和失败模式'],
  },
  go: {
    role: '它解决的是“用简单、可编译、适合并发的语言实现后端服务”的问题。',
    mental: 'Go 学习要落到代码形态：类型、错误处理、包、测试、并发和标准库。',
    details: ['先看语法和类型如何让代码可读。', '再理解 error、interface、goroutine/channel 这些常见后端写法。', '最后把知识点放进一个 HTTP 服务或 CLI 工具里练。'],
    practice: '写一个小 Go 程序或 HTTP handler，包含输入解析、错误返回和一个单元测试；并运行 go test。',
    pitfalls: ['照搬其他语言的异常/继承思路', '忽略错误返回', '并发代码不加取消、超时和测试'],
  },
  general: {
    role: '它解决的是后端学习链路中的一个具体问题，需要放进真实请求、数据或部署场景里理解。',
    mental: '不要孤立背概念；先问它在哪个环节出现、输入是什么、输出是什么、失败会怎样。',
    details: ['先用一句话定义它解决的问题。', '再找一个最小场景观察它的输入和输出。', '最后记录它和前后节点的区别。'],
    practice: '围绕这个知识点写一个最小例子：一条命令、一段代码、一个配置或一次请求，并记录结果。',
    pitfalls: ['只记中文名不看场景', '没有动手验证', '不知道它和相邻概念的边界'],
  },
};

const kindRouteLabels = {
  git: ['看工作区状态', '暂存并提交', '远程同步', '协作收尾'],
  sql: ['理清表关系', '写查询/变更', '看执行计划', '验证结果'],
  cache: ['判断能否缓存', '设计 key/TTL', '观察命中率', '处理失效风险'],
  'document-db': ['定文档边界', '按查询建索引', '做聚合/复制', '验证读写路径'],
  container: ['写 Dockerfile', '构建镜像', '运行容器', '查日志排障'],
  k8s: ['声明期望状态', '看 Pod/Service', '暴露与配置', 'events 排障'],
  linux: ['定位对象', '执行命令', '读输出', '保守改配置'],
  api: ['定资源契约', '实现 handler', '测成功/失败', '补文档版本'],
  devops: ['触发流水线', '构建测试', '部署发布', '监控回滚'],
  system: ['画请求链路', '找瓶颈单点', '设计扩展', '演练故障'],
  go: ['写最小代码', '处理 error', '加测试', '跑 go test'],
  general: ['定位环节', '理解输入输出', '动手验证', '记录坑点'],
};

function topicOverride(label, zh, kind) {
  const text = `${label} ${zh}`.toLowerCase();
  if (kind === 'git' && /push|pull|fetch|remote/.test(text)) {
    return {
      howSteps: [
        '本地 commit 后，代码只在你电脑的历史里；同事还看不到。',
        'git push 把本地分支上传到 GitHub/GitLab 的远程分支（origin）。',
        'git pull / git fetch 把远程新提交拉回本地，避免覆盖别人改动。',
        '若同一行被两人修改，冲突时在文件里手工合并，再 add + commit。',
      ],
      routeLabels: ['本地 commit', 'git push', 'git pull', '处理冲突'],
      practice: 'fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。',
    };
  }
  if (kind === 'git' && /branch|merge|rebase/.test(text)) {
    return {
      howSteps: [
        '从 main 切出 feature 分支，在分支上独立开发，不影响主线。',
        '开发过程中多次 commit，保持每个提交粒度可 review。',
        '用 merge 或 rebase 把 feature 合回 main，解决冲突后再推送。',
        '合并后删除已合入的分支，保持仓库整洁。',
      ],
      routeLabels: ['切分支', '分支开发', '合并回主线', '清理分支'],
    };
  }
  if (kind === 'git' && /commit|staging|add |status/.test(text)) {
    return {
      howSteps: [
        '工作区是你正在改的文件；git status 看哪些改了、哪些还没暂存。',
        'git add 把选中的改动放进暂存区，相当于“打包待提交”。',
        'git commit 把暂存区快照写入本地仓库历史，附说明信息。',
        'git log / git diff 回顾历史，确认这次提交包含了什么。',
      ],
      routeLabels: ['工作区', 'git add', 'git commit', 'log/diff'],
    };
  }
  if (kind === 'sql' && /join/.test(text)) {
    return {
      howSteps: [
        '先画 ER 关系：users 和 orders 通过 user_id 关联。',
        '写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。',
        'ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。',
        '用 EXPLAIN 看是否走索引，限制返回列和行数。',
      ],
      routeLabels: ['表关系', 'JOIN 类型', 'ON 条件', 'EXPLAIN'],
    };
  }
  if (kind === 'cache' || /redis/.test(text)) {
    return {
      howSteps: [
        '判断数据是否读多写少、能否接受短暂不一致。',
        '设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。',
        '实现 cache-aside：先查 Redis，miss 再查 DB 并回填。',
        '压测观察命中率，准备击穿/穿透/雪崩的兜底方案。',
      ],
      routeLabels: ['能否缓存', 'key/TTL', 'cache-aside', '命中率'],
    };
  }
  if (kind === 'container' || /dockerfile/.test(text)) {
    return {
      howSteps: [
        'Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。',
        'docker build 按层缓存构建镜像，每层对应一条指令。',
        'docker run 指定端口映射、环境变量和数据卷启动容器。',
        'docker logs / exec / inspect 查看运行状态和排障信息。',
      ],
      routeLabels: ['Dockerfile', 'docker build', 'docker run', 'logs 排障'],
    };
  }
  if (kind === 'api') {
    return {
      howSteps: [
        `明确「${zh}」对应的资源、HTTP 方法和 URL 路径。`,
        '定义请求参数、响应 JSON 结构和错误码格式。',
        '实现 handler：校验输入 → 调业务 → 返回统一响应。',
        '用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。',
      ],
      routeLabels: ['定契约', '请求/响应', '实现 handler', 'curl 验证'],
    };
  }
  return null;
}

function buildTutorial(node, id, slug) {
  const label = node.label;
  const zh = node.zh;
  const meta = roadmapMeta[id];
  const kind = inferKind(label, zh, id);
  const copy = kindCopy[kind] || kindCopy.general;
  const override = topicOverride(label, zh, kind);
  const howSteps = override?.howSteps || [
    `「${zh}」出现在哪：上游输入是什么，下游输出是什么。`,
    copy.details[0],
    copy.details[1],
    copy.details[2],
  ];
  const what = `**${zh}**（${label}）。${copy.role} ${copy.mental}`;
  return {
    id: node.id,
    zh,
    en: label,
    level: node.level,
    nodeType: node.nodeType,
    analogy: copy.mental,
    story: `学习「${zh}」时，先把它放进 ${meta.displayTitle} 的真实场景，而不是孤立背术语。`,
    what,
    why: `${copy.role} 掌握它后，你在 ${meta.displayTitle} 里能独立实现和排障，而不是只会名词解释。`,
    howSteps,
    practice: override?.practice || copy.practice,
    pitfalls: copy.pitfalls,
    details: [
      { title: '是什么', body: what },
      { title: '放在哪条链路里看', body: copy.mental },
      { title: '真正要掌握什么', body: howSteps.slice(1).join(' ') },
      { title: '动手验证', body: override?.practice || copy.practice },
    ],
    kind,
    routeLabels: override?.routeLabels,
  };
}

function buildLesson(tutorial) {
  const labels = tutorial.routeLabels
    || kindRouteLabels[tutorial.kind]
    || kindRouteLabels.general;
  return {
    scene: `学习「${tutorial.zh}」：${tutorial.analogy}`,
    core: tutorial.what.replace(/\*\*/g, ''),
    route: tutorial.howSteps.map((step, index) => ({
      label: labels[index] || `步骤 ${index + 1}`,
      title: step.length > 36 ? `${step.slice(0, 36)}…` : step,
      text: step,
    })),
    confusion: `容易混淆的是：会说「${tutorial.zh}」不等于会用。重点看 ${labels.join(' → ')} 这条链路。`,
    experiment: tutorial.practice,
  };
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'backend-roadmap-learn-importer' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

async function importRoadmap(id) {
  const meta = roadmapMeta[id];
  const slug = meta.slug || id;
  const source = await fetchJson(`https://roadmap.sh/api/v1-official-roadmap/${slug}`);
  const nodes = source.nodes
    .filter((node) => node.type === 'topic' || node.type === 'subtopic')
    .map((node) => {
      const label = String(node.data?.label || '').trim();
      return {
        id: node.id,
        label: label || node.type,
        zh: translateLabel(label || node.type),
        desc: `${meta.displayTitle} 学习节点，建议结合动手实验理解。`,
        level: node.type === 'topic' ? 'core' : 'core',
        nodeType: node.type,
        x: Math.round(node.position?.x || 0),
        y: Math.round(node.position?.y || 0),
        w: Math.round(node.width || node.measured?.width || node.style?.width || 160),
        h: Math.round(node.height || node.measured?.height || node.style?.height || 62),
      };
    })
    .filter((node) => isLearnableLabel(node.label));

  const tutorials = Object.fromEntries(nodes.map((node) => [node.id, buildTutorial(node, id, slug)]));
  const lessons = Object.fromEntries(Object.entries(tutorials).map(([tid, tutorial]) => [tid, buildLesson(tutorial)]));
  const { stages, mapHeight } = buildStages(nodes);
  const data = { stages, nodes, tutorials, lessons };
  const dir = join(root, 'src/roadmaps', id);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, 'data.ts'),
    `import type { DeepLesson, Stage, Tutorial } from '../types';\n\nconst data = ${JSON.stringify(data, null, 2)};\n\nexport const stages = data.stages as Stage[];\nexport const nodes = data.nodes;\nexport const tutorials = data.tutorials as Record<string, Tutorial>;\nexport const lessons = data.lessons as Record<string, DeepLesson>;\n`,
  );
  return { id, slug, nodeCount: nodes.length, stageCount: stages.length, mapWidth: 2170, mapHeight };
}

const targets = ids.length ? ids : Object.keys(roadmapMeta);
const results = [];
for (const id of targets) results.push(await importRoadmap(id));
console.table(results);
