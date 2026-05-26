#!/usr/bin/env node
/**
 * Generates src/roadmaps/mongodb/teaching-handcrafted.ts
 * 106 nodes — unique Chinese copy + semantic Excalidraw per node.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const palette = {
  blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa',
  red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0',
};

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}
function text(id, x, y, t, fs = 22, w = 240) {
  return `    excalidrawText('${id}', ${x}, ${y}, '${esc(t)}', ${fs}, ${w}),`;
}
function box(id, x, y, w, h, bg) {
  return `    excalidrawBox('${id}', ${x}, ${y}, ${w}, ${h}, '${bg}'),`;
}
function arrow(id, x, y, w, h, color) {
  const c = color ? `, '${color}'` : '';
  return `    excalidrawArrow('${id}', ${x}, ${y}, ${w}, ${h}${c}),`;
}
function scene(slug, lines) {
  return `  '${slug}': excalidrawScene([\n${lines.filter(Boolean).join('\n')}\n  ]),`;
}

function loadNodes() {
  const data = readFileSync('src/roadmaps/mongodb/data.ts', 'utf8');
  const start = data.indexOf('const data = ') + 'const data = '.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  const parsed = JSON.parse(data.slice(start, end));
  const nodes = [];
  parsed.stages.forEach((s, i) => s.nodes.forEach((n) => nodes.push({ ...n, stage: i + 1, stageEn: s.en, stageZh: s.zh })));
  return nodes;
}

function loadLessonSpecs() {
  const src = readFileSync('src/roadmaps/mongodb/teaching.ts', 'utf8');
  const start = src.indexOf('export const MONGODB_TEACHING_LESSONS');
  const end = src.indexOf('export function hasMongodbTeachingLesson');
  let body = src.slice(start, end);
  body = body.replace('export const MONGODB_TEACHING_LESSONS: Record<string, TeachingLesson> = ', '');
  body = body.replace(/mongoLesson\(/g, '(');
  body = body.replace(/ as MongoDiagramKind/g, '');
  body = body.trim().replace(/;\s*$/, '');
  return new Function('return ' + body)();
}

function slugify(label, id) {
  const base = label.toLowerCase()
    .replace(/\$/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9/-]+/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base || `node-${id.slice(0, 8)}`;
}

const STAGE_HINT = {
  1: 'BSON 与 JSON', 2: 'MongoDB 基础', 3: '数据模型与类型', 4: 'Date 类型', 5: '集合与方法',
  6: 'Timestamp 类型', 7: '查询算符', 8: '创建索引', 9: '$elemMatch', 10: '$eq 算符',
  11: '$lte 算符', 12: '性能优化', 13: '事务', 14: '$project 投影', 15: '开发者工具',
  16: 'MongoDB 扩展', 17: 'MongoDB 安全', 18: 'Queryable Encryption',
};

const HEADING_SUFFIX = {
  compare: ['先看数据形状', 'SQL vs 文档', '选型取舍'],
  document: ['集合里存文档', '文档库层级', '嵌套与引用'],
  datatype: ['BSON 类型选型', '字段类型决定行为', '类型与比较规则'],
  crud: ['围绕文档读写', 'CRUD 链路', '驱动与 Shell'],
  query: ['过滤与投影', '查询算符', '游标分批读'],
  index: ['索引服务查询', 'IXSCAN 边界', '写入代价权衡'],
  concern: ['读写一致性', 'writeConcern', 'readConcern 级别'],
  aggregation: ['聚合管道', '阶段串联', '明细到指标'],
  schema: ['Schema 校验', '建模与约束', 'validator 守门'],
  admin: ['连接与管理', 'mongosh/Compass', '运维入口'],
  deploy: ['部署拓扑', 'Atlas/副本集', '可扩展架构'],
  security: ['认证与授权', '最小权限', 'TLS 与加密'],
  replica: ['副本集与分片', '高可用复制', '水平扩展'],
  observe: ['监控与诊断', '慢查询定位', 'Profiler 分析'],
};

const METAPHOR_POOL = {
  compare: ['像选型：关系表 vs 文档抽屉，各管一类数据形状', '像强 schema vs 灵活 JSON：一致性 vs 建模自由', '不是谁替代谁，是访问模式与一致性需求不同'],
  document: ['MongoDB 像文件柜：Database 是柜区，Collection 是抽屉，Document 是文件', '文档像 JSON 信封：字段可嵌套，不必拆成多表 JOIN', '集合无固定列：同集合文档字段可以不完全一致'],
  datatype: ['BSON 类型像容器规格：String/Date/ObjectId 比较规则不同', 'ObjectId 像自带时间戳的身份证号', 'Decimal128 管金额，Double 管科学计算——别混用'],
  crud: ['insert 像往抽屉塞新文件，update 改页脚，delete 抽走一页', 'bulkWrite 像批量快递：一次提交多种操作', 'find 像按标签翻文件，返回的是文档不是行集'],
  query: ['查询算符像筛子：$eq/$in/$gt 决定留下哪些文档', '$and/$or 像组合条件：先想清楚逻辑再写 filter', 'projection 像复印时只印需要的页，sort+limit 控制顺序与数量'],
  index: ['索引像书后目录：查快但 insert/update 要维护条目', '复合索引像「姓+名」排序：前缀列顺序很重要', 'COLLSCAN 像逐页翻书，IXSCAN 像查目录跳转'],
  concern: ['writeConcern 像寄快递签收回执：majority 更稳但更慢', 'readConcern 像读公告的版本：local 快，majority 更一致', '重试读写像自动重拨：网络闪断时驱动可帮你再试'],
  aggregation: ['聚合管道像工厂流水线：$match 筛料，$group 打包，$project 贴标签', '$lookup 像左表去右表仓库借字段（近似 JOIN）', '$unwind 像把数组拆成多行再统计'],
  schema: ['JSON Schema validator 像入库质检：不合规文档拒绝写入', '嵌入 vs 引用像「整本合订」还是「互相引用编号」', '建模先想读路径：一次查询要什么字段'],
  admin: ['mongosh 像 DB 的终端，Compass 像可视化浏览器', 'mongodump/mongorestore 像整柜复印与还原', 'Atlas 像托管机房：集群、备份、监控一站式'],
  deploy: ['副本集像主从复印机：Primary 写，Secondary 跟', '分片像把抽屉分到多个柜：按 shard key 水平切', 'Docker 本地练，Atlas 生产跑——连接串不同而已'],
  security: ['SCRAM 像账号密码进门禁，Role 决定能开哪些抽屉', 'TLS 像加密通道：路上窃听看不懂', '审计日志像谁在何时打开了哪个抽屉'],
  replica: ['Primary 写，Secondary 复制——宕机时选举新 Primary', '分片集群 = mongos 路由 + config + 多个 shard', '先副本集保高可用，数据量再大才分片'],
  observe: ['Profiler 像慢动作回放：哪条查询耗时最长', 'explain 像看导航路线：走索引还是全表扫', 'Atlas 监控像仪表盘：CPU、连接数、opcounters'],
};

function pick(pool, index) {
  const arr = pool || METAPHOR_POOL.document;
  return arr[index % arr.length];
}

function craftRoute(spec, zh, stage) {
  const cmd = spec.command;
  const kind = spec.diagram;
  const routesByKind = {
    compare: [
      { label: 'SQL 侧', title: '表 + JOIN + 事务', text: '强 schema、复杂关系查询、ACID 是关系型主场。' },
      { label: 'MongoDB 侧', title: '文档 + 嵌套', text: '按访问模式嵌套或引用，水平扩展更灵活。' },
      { label: '命令', title: cmd, text: '用读写模式、一致性需求、团队经验对照选型。' },
      { label: '决策', title: '混合常见', text: '核心交易可仍走 SQL，日志/内容/缓存走文档库。' },
    ],
    document: [
      { label: '层级', title: 'Database → Collection → Document', text: '逻辑库、集合、BSON 文档三层，无固定列 schema。' },
      { label: '建模', title: cmd, text: '嵌入减少查询次数，引用避免文档过大与重复。' },
      { label: '验证', title: 'mongosh 插入样例', text: 'db.coll.insertOne({}) 看 _id 与字段形状。' },
      { label: '边界', title: spec.risk, text: '单文档 16MB 上限；深层嵌套难维护。' },
    ],
    crud: [
      { label: '写', title: 'insert/update/delete', text: 'filter 定位文档，update 用 $set/$inc 等算符。' },
      { label: '读', title: cmd, text: 'find + projection；大结果集用 cursor 分批。' },
      { label: '批量', title: 'bulkWrite', text: '混合 insert/update/delete 一次 ordered/unordered 提交。' },
      { label: '复查', title: 'countDocuments', text: '改完 count 或 find 确认影响范围。' },
    ],
    query: [
      { label: '写 filter', title: '字段条件', text: '$eq/$in/$gt/$regex 等组合定位文档。' },
      { label: '投影排序', title: cmd, text: 'projection 少取字段，sort + limit 控制顺序与分页。' },
      { label: '游标', title: 'batchSize', text: '大结果集分批读，避免一次拉爆内存。' },
      { label: 'explain', title: 'executionStats', text: '看 totalDocsExamined 是否走索引。' },
    ],
    index: [
      { label: '需求', title: '查询形状', text: 'filter + sort 字段决定索引键顺序。' },
      { label: '创建', title: cmd, text: 'createIndex；unique/TTL/文本/地理各不同。' },
      { label: '验证', title: 'explain("executionStats")', text: 'stage 应为 IXSCAN 而非 COLLSCAN。' },
      { label: '权衡', title: spec.risk, text: '索引过多拖慢写入与占磁盘。' },
    ],
    concern: [
      { label: '写', title: 'writeConcern', text: 'w:1 快，majority 更安全；journal 影响持久性。' },
      { label: '读', title: 'readConcern', text: 'local/snapshot/majority 决定读哪一版数据。' },
      { label: '命令', title: cmd, text: '在事务或关键写入上显式设置 concern。' },
      { label: '重试', title: 'retryWrites', text: '驱动对可重试错误自动再试，仍需幂等设计。' },
    ],
    aggregation: [
      { label: '$match', title: '先过滤', text: '尽量早过滤，减少下游阶段文档数。' },
      { label: '中间', title: cmd, text: '$group/$sort/$project/$lookup 按序组合。' },
      { label: '输出', title: '$out/$merge', text: '结果写回集合或当 cursor 消费。' },
      { label: '优化', title: '索引 + allowDiskUse', text: '$match/$sort 字段有索引；大分组可能用磁盘。' },
    ],
    security: [
      { label: '认证', title: 'SCRAM / X.509', text: '禁用无 auth 公网暴露；强密码与证书轮换。' },
      { label: '授权', title: cmd, text: 'Role 最小权限：读/写/特定库集合。' },
      { label: '传输', title: 'TLS', text: '客户端与集群间加密链路。' },
      { label: '静态', title: '加密 at rest / QE', text: '磁盘加密或字段级 Queryable Encryption。' },
    ],
    replica: [
      { label: '副本集', title: 'Primary + Secondary', text: '写 Primary，Secondary 异步复制；选举 failover。' },
      { label: '分片', title: cmd, text: 'shard key 选不好会 jumbo chunk 与热点。' },
      { label: '路由', title: 'mongos', text: '应用连 mongos，由 config server 管元数据。' },
      { label: '顺序', title: '先 HA 再分片', text: '数据量与 QPS 到瓶颈再水平切。' },
    ],
    observe: [
      { label: '指标', title: 'serverStatus / Atlas', text: '连接数、opcounters、队列长度。' },
      { label: '慢查', title: cmd, text: 'Profiler 或慢查询日志找 top N。' },
      { label: '计划', title: 'explain', text: '对比改索引/改查询前后 executionStats。' },
      { label: '修复', title: '索引与投影', text: '少 COLLSCAN、少返回大字段。' },
    ],
  };
  if (routesByKind[kind]) return routesByKind[kind];
  const hint = STAGE_HINT[stage] || 'MongoDB 查询';
  return [
    { label: '场景', title: `${hint} 中的 ${zh}`, text: `${zh} 处理「${spec.subject}」：${spec.action}。` },
    { label: '语法', title: cmd, text: `围绕 ${spec.command} 理解读写边界与 BSON 形状。` },
    { label: '避坑', title: '常见误区', text: spec.risk.slice(0, 88) },
    { label: '实验', title: '动手验证', text: `mongosh 连测试库练 \`${cmd}\`，对比 explain 或返回文档。` },
  ];
}

function craftContent(spec, node, index) {
  const zh = node.zh || spec.label;
  const kind = spec.diagram || 'document';
  const stage = node.stage;
  const hint = STAGE_HINT[stage] || 'MongoDB 查询';
  const suffixPool = HEADING_SUFFIX[kind] || HEADING_SUFFIX.document;

  const heading = `${spec.label}：${pick(suffixPool, index)}`;
  const subheading = `阶段 ${stage}（${hint}）：掌握 ${spec.command}，理解 ${spec.subject} 上的 ${spec.action}。`;
  const scene = `你在使用 MongoDB 时遇到「${zh}」。先确认它属于 ${spec.subject}，再判断会读文档、改结构、建索引还是运维集群。`;
  const core = `${spec.label} = ${spec.command} → ${spec.action} → ${spec.result}`;
  const metaphor = pick(METAPHOR_POOL[kind], index);
  const mistake = spec.mistake.includes(spec.label) ? spec.mistake : `别把 ${spec.label} 当孤立名词。${spec.risk} 在生产环境可能一次造成大范围影响。`;
  const confusion = `${spec.label} 的边界是「${spec.action}」，不要与相邻概念混用；先确认作用对象是 ${spec.subject}。`;
  const experiment = spec.experiment.startsWith('在测试库') ? spec.experiment
    : `mongosh 连测试库练 \`${spec.command}\`：对比 explain/返回文档前后差异；涉及 delete/update 先 count 确认范围。`;

  return {
    id: spec.id,
    label: spec.label,
    slug: slugify(spec.label, spec.id),
    zh,
    heading,
    subheading,
    scene,
    core,
    metaphor,
    mistake,
    confusion,
    experiment,
    route: craftRoute(spec, zh, stage),
    diagramKind: kind,
    command: spec.command,
    subject: spec.subject,
    action: spec.action,
    result: spec.result,
    risk: spec.risk,
  };
}

function buildDiagram(spec) {
  const p = `mg-${spec.slug}`;
  const zh = spec.zh.slice(0, 22);
  const title = `${spec.label} · ${spec.command}`.slice(0, 44);
  const cmd = spec.command.slice(0, 22);
  const object = spec.subject.slice(0, 14);
  const result = spec.result.slice(0, 12);
  const risk = spec.risk.slice(0, 28);
  const note = spec.metaphor.slice(0, 56);
  const kind = spec.diagramKind;

  const lines = [text(`${p}-title`, 70, 10, title, 22, 620)];

  switch (kind) {
    case 'compare':
      lines.push(
        box(`${p}-sql`, 70, 98, 230, 190, palette.blue),
        text(`${p}-sql-t`, 106, 128, 'SQL / 关系型\n固定 schema\nJOIN\n事务强', 17, 150),
        box(`${p}-mongo`, 460, 98, 230, 190, palette.yellow),
        text(`${p}-mongo-t`, 496, 128, 'MongoDB / 文档\n嵌套 BSON\n按访问建模', 17, 150),
        arrow(`${p}-a1`, 306, 188, 148, 0),
      );
      break;
    case 'document':
      lines.push(
        box(`${p}-db`, 58, 124, 130, 92, palette.blue),
        text(`${p}-db-t`, 84, 150, 'Database\n逻辑库', 16, 98),
        box(`${p}-coll`, 264, 96, 176, 148, palette.yellow),
        text(`${p}-coll-t`, 294, 124, `${cmd.slice(0, 16)}\nCollection`, 16, 124),
        box(`${p}-doc`, 568, 124, 150, 92, palette.green),
        text(`${p}-doc-t`, 594, 150, 'Document\nBSON', 16, 98),
        arrow(`${p}-a1`, 194, 170, 64, 0),
        arrow(`${p}-a2`, 446, 170, 116, 0),
      );
      break;
    case 'datatype':
      ['String', 'Number', 'Date', 'ObjectId', 'Array'].forEach((word, i) => {
        lines.push(
          box(`${p}-t-${i}`, 48 + i * 132, 118, 112, 74, i % 2 ? palette.yellow : palette.blue),
          text(`${p}-t-t-${i}`, 70 + i * 132, 140, word, 17, 72),
        );
      });
      lines.push(
        box(`${p}-risk`, 248, 276, 278, 70, palette.purple),
        text(`${p}-risk-t`, 286, 298, risk, 16, 200),
      );
      break;
    case 'crud':
      lines.push(
        box(`${p}-write`, 54, 124, 130, 82, palette.yellow),
        text(`${p}-write-t`, 78, 146, 'insert\nupdate\ndelete', 15, 84),
        box(`${p}-cmd`, 264, 96, 176, 148, palette.blue),
        text(`${p}-cmd-t`, 294, 124, `${cmd}\n驱动/Shell`, 16, 124),
        box(`${p}-read`, 568, 124, 150, 92, palette.green),
        text(`${p}-read-t`, 594, 150, 'find\n返回文档', 16, 98),
        arrow(`${p}-a1`, 190, 164, 68, 0),
        arrow(`${p}-a2`, 446, 164, 116, 0),
      );
      break;
    case 'query':
      lines.push(
        box(`${p}-filter`, 58, 124, 150, 92, palette.blue),
        text(`${p}-filter-t`, 84, 150, 'Filter\n字段条件', 16, 98),
        box(`${p}-op`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-op-t`, 334, 124, `${cmd}\n$eq/$in/$gt`, 16, 124),
        box(`${p}-cursor`, 568, 124, 150, 92, palette.green),
        text(`${p}-cursor-t`, 594, 150, 'Cursor\n分批读取', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'index':
      lines.push(
        box(`${p}-query`, 58, 124, 150, 92, palette.blue),
        text(`${p}-query-t`, 84, 150, 'Query\nfilter+sort', 16, 98),
        box(`${p}-idx`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-idx-t`, 334, 124, `${cmd}\n单/复合/TTL`, 16, 124),
        box(`${p}-plan`, 568, 124, 150, 92, palette.green),
        text(`${p}-plan-t`, 594, 150, 'IXSCAN\nvs COLLSCAN', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'concern':
      lines.push(
        box(`${p}-app`, 58, 124, 150, 92, palette.blue),
        text(`${p}-app-t`, 84, 150, 'App\n设置 concern', 16, 98),
        box(`${p}-concern`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-concern-t`, 334, 124, `${cmd}\nwriteConcern\nreadConcern`, 16, 124),
        box(`${p}-cluster`, 568, 124, 150, 92, palette.green),
        text(`${p}-cluster-t`, 594, 150, '副本集\n确认写入', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'aggregation':
      lines.push(
        box(`${p}-match`, 48, 126, 112, 72, palette.blue),
        text(`${p}-match-t`, 70, 148, '$match\n过滤', 15, 68),
        box(`${p}-group`, 190, 126, 112, 72, palette.yellow),
        text(`${p}-group-t`, 212, 148, '$group\n聚合', 15, 68),
        box(`${p}-project`, 332, 126, 112, 72, palette.green),
        text(`${p}-project-t`, 354, 148, '$project\n投影', 15, 68),
        box(`${p}-out`, 474, 126, 112, 72, palette.purple),
        text(`${p}-out-t`, 496, 148, '输出\n文档', 15, 68),
        arrow(`${p}-a1`, 164, 162, 20, 0),
        arrow(`${p}-a2`, 306, 162, 20, 0),
        arrow(`${p}-a3`, 448, 162, 20, 0),
      );
      break;
    case 'schema':
      lines.push(
        box(`${p}-design`, 58, 124, 150, 92, palette.blue),
        text(`${p}-design-t`, 84, 150, '建模\n嵌套/引用', 16, 98),
        box(`${p}-validate`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-validate-t`, 334, 124, `${cmd}\nJSON Schema`, 16, 124),
        box(`${p}-reject`, 568, 124, 150, 92, palette.red),
        text(`${p}-reject-t`, 594, 150, '非法文档\n拒绝写入', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'admin':
      lines.push(
        box(`${p}-client`, 58, 124, 150, 92, palette.blue),
        text(`${p}-client-t`, 84, 150, 'mongosh\nCompass', 16, 98),
        box(`${p}-cmd`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-cmd-t`, 334, 124, `${cmd}\nAtlas/本地`, 16, 124),
        box(`${p}-ops`, 568, 124, 150, 92, palette.green),
        text(`${p}-ops-t`, 594, 150, '监控\n备份', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'deploy':
      lines.push(
        box(`${p}-cfg`, 58, 124, 150, 92, palette.blue),
        text(`${p}-cfg-t`, 84, 150, 'Docker\nAtlas', 16, 98),
        box(`${p}-topo`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-topo-t`, 334, 124, `${cmd}\n副本集\n分片`, 16, 124),
        box(`${p}-run`, 568, 124, 150, 92, palette.green),
        text(`${p}-run-t`, 594, 150, '可扩展\n可切换', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'security':
      lines.push(
        box(`${p}-user`, 58, 124, 150, 92, palette.blue),
        text(`${p}-user-t`, 84, 150, 'User\nRole', 16, 98),
        box(`${p}-auth`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-auth-t`, 334, 124, `${cmd}\nSCRAM\nTLS/加密`, 16, 124),
        box(`${p}-priv`, 568, 124, 150, 92, palette.green),
        text(`${p}-priv-t`, 594, 150, '最小权限\n审计', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'replica':
      lines.push(
        box(`${p}-primary`, 58, 118, 130, 100, palette.blue),
        text(`${p}-primary-t`, 84, 144, 'Primary\n写入', 16, 98),
        box(`${p}-secondary`, 264, 118, 130, 100, palette.green),
        text(`${p}-secondary-t`, 290, 144, 'Secondary\n复制', 16, 98),
        box(`${p}-shard`, 470, 118, 130, 100, palette.yellow),
        text(`${p}-shard-t`, 496, 144, 'Shard\n水平切', 16, 98),
      );
      break;
    case 'observe':
      lines.push(
        box(`${p}-metrics`, 58, 124, 150, 92, palette.blue),
        text(`${p}-metrics-t`, 84, 150, 'Metrics\nProfiler', 16, 98),
        box(`${p}-tool`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-tool-t`, 334, 124, `${cmd}\n慢查询\nAtlas`, 16, 124),
        box(`${p}-fix`, 568, 124, 150, 92, palette.green),
        text(`${p}-fix-t`, 594, 150, '索引/查询\n优化', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    default:
      lines.push(
        box(`${p}-obj`, 58, 124, 150, 92, palette.blue),
        text(`${p}-obj-t`, 84, 150, object, 16, 98),
        box(`${p}-cmd`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-cmd-t`, 334, 124, cmd, 16, 124),
        box(`${p}-res`, 568, 124, 150, 92, palette.green),
        text(`${p}-res-t`, 594, 150, result, 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
  }

  lines.push(text(`${p}-note`, 90, 320, note, 16, 560));
  return scene(spec.slug, lines);
}

const LABEL_OVERRIDES = {
  'BSON vs JSON': {
    heading: 'BSON vs JSON：二进制文档 vs 文本交换格式',
    subheading: 'MongoDB 存 BSON；JSON 是 API/人读时的文本形态，类型与体积不同。',
    metaphor: 'BSON 像压缩打包的档案盒，JSON 像摊开给人看的复印件。',
  },
  'SQL vs NoSQL': {
    heading: 'SQL vs NoSQL：按数据形状与访问模式选型',
    subheading: '关系型强 schema 与 JOIN；文档库灵活嵌套与水平扩展。',
  },
  'What is MongoDB?': {
    heading: 'MongoDB 是什么：文档型数据库',
    subheading: '以 BSON 文档存储，Database → Collection → Document 三层结构。',
  },
  'When to use MongoDB?': {
    heading: '何时用 MongoDB：读写模式决定',
    subheading: '嵌套文档、灵活 schema、高写入与横向扩展场景更合适。',
  },
  find: {
    heading: 'find()：按 filter 读文档',
    subheading: 'projection 控制返回字段，sort/limit/skip 控制顺序与分页。',
  },
  Transactions: {
    heading: 'MongoDB 事务：多文档 ACID',
    subheading: '副本集上多文档事务；需显式 startTransaction/commit/abort。',
  },
  Aggregation: {
    heading: 'Aggregation：管道式数据分析',
    subheading: '$match → $group → $project 等阶段串联，在库内完成统计。',
  },
};

const nodes = loadNodes();
const lessonSpecs = loadLessonSpecs();
const usedSlugs = new Set();

const allSpecs = nodes.map((node, index) => {
  const base = lessonSpecs[node.id];
  if (!base) throw new Error(`Missing lesson spec for ${node.id} (${node.label})`);
  let spec = craftContent(base, node, index);
  const ov = LABEL_OVERRIDES[node.label];
  if (ov) spec = { ...spec, ...ov };
  if (usedSlugs.has(spec.slug)) spec.slug = `${spec.slug}-${node.id.slice(0, 6)}`;
  usedSlugs.add(spec.slug);
  return spec;
});

if (allSpecs.length !== 106) {
  console.error('Expected 106 nodes, got', allSpecs.length);
  process.exit(1);
}

const diagramEntries = allSpecs.map((s) => buildDiagram(s)).join('\n');

const lessonEntries = allSpecs.map((s) => {
  const routeStr = s.route.map((r) =>
    `      { label: '${esc(r.label)}', title: '${esc(r.title)}', text: '${esc(r.text)}' },`,
  ).join('\n');
  return `  "${s.id}": {
    heading: '${esc(s.heading)}',
    subheading: '${esc(s.subheading)}',
    scene: '${esc(s.scene)}',
    core: '${esc(s.core)}',
    metaphor: '${esc(s.metaphor)}',
    mistake: '${esc(s.mistake)}',
    confusion: '${esc(s.confusion)}',
    experiment: '${esc(s.experiment)}',
    route: [
${routeStr}
    ],
    rawDiagram: MONGODB_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const MONGODB_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const MONGODB_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/mongodb/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', allSpecs.length, 'nodes,', usedSlugs.size, 'unique diagram slugs');
