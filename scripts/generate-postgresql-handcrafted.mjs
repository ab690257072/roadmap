#!/usr/bin/env node
/**
 * Generates src/roadmaps/postgresql/teaching-handcrafted.ts
 * 170 nodes — unique Chinese copy + semantic Excalidraw per node.
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
  const data = readFileSync('src/roadmaps/postgresql/data.ts', 'utf8');
  const start = data.indexOf('const data = ') + 'const data = '.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  const parsed = JSON.parse(data.slice(start, end));
  const nodes = [];
  parsed.stages.forEach((s, i) => s.nodes.forEach((n) => nodes.push({ ...n, stage: i + 1, stageEn: s.en, stageZh: s.zh })));
  return nodes;
}

function loadLessonSpecs() {
  const src = readFileSync('src/roadmaps/postgresql/teaching.ts', 'utf8');
  const start = src.indexOf('export const POSTGRESQL_TEACHING_LESSONS');
  const end = src.indexOf('export function hasPostgresqlTeachingLesson');
  let body = src.slice(start, end);
  body = body.replace('export const POSTGRESQL_TEACHING_LESSONS: Record<string, TeachingLesson> = ', '');
  body = body.replace(/pgLesson\(/g, '(');
  body = body.replace(/ as PgDiagramKind/g, '');
  body = body.trim().replace(/;\s*$/, '');
  return new Function('return ' + body)();
}

function slugify(label, id) {
  const base = label.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9/-]+/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base || `node-${id.slice(0, 8)}`;
}

const STAGE_HINT = {
  1: '查询与关系模型', 2: 'PostgreSQL 入门', 3: 'RDBMS 基础', 4: '关系模型', 5: '安装与配置',
  6: 'SQL 读写', 7: 'PG 数据类型', 8: '参数配置', 9: '事务与 MVCC', 10: '分组聚合',
  11: '安全与权限', 12: '基础设施', 13: 'pg_dump 备份', 14: '自动化运维', 15: '备份校验',
  16: '连接池', 17: '配置管理', 18: '监控巡检', 19: 'Etcd 协调', 20: '规范化设计',
  21: '库级/用户级配置', 22: '递归 CTE', 23: '系统目录', 24: '活动会话', 25: '系统追踪',
  26: 'USE 与库切换', 27: 'SQL 模式与反模式', 28: '索引实践', 29: '社区与补丁',
};

const HEADING_SUFFIX = {
  relation: ['表不是孤岛', '关系模型底座', '行列表与键'],
  compare: ['先看取舍', '能力边界', '适用场景'],
  keyword: ['关键字骨架', '句子结构', '语义分层'],
  datatype: ['类型决定行为', '列类型选型', '精度与比较'],
  syntax: ['语义分层', '读写顺序', '句法结构'],
  ddl: ['先搭货架', '结构变更', '对象定义'],
  dml: ['先确认行', '改前 SELECT', '影响行数'],
  insert: ['插入新行', '列值对齐', '批量写入'],
  update: ['定位再改', 'SET 与 WHERE', '误改防护'],
  delete: ['删前先查', 'WHERE 不能省', '软删 vs 硬删'],
  truncate: ['危险操作', '清空确认', '不可回滚'],
  drop: ['删除对象', '依赖检查', '先备份'],
  aggregate: ['明细到指标', '聚合粒度', '统计口径'],
  group: ['分组粒度', 'GROUP BY', '每组一行'],
  order: ['排序规则', 'ORDER BY', 'NULL 排序'],
  having: ['筛组不筛行', 'HAVING 边界', '聚合后过滤'],
  key: ['主外键', '标识与引用', '关系完整性'],
  constraint: ['规则守门', '入库前校验', '约束类型'],
  subquery: ['内层先答', '嵌套查询', '相关子查询'],
  join: ['按键对齐', '连接类型', '保留哪边'],
  function: ['值进函数出', '标量计算', '类型转换'],
  string: ['文本处理', '拼接截取', '大小写'],
  date: ['时间计算', '日期函数', '时区意识'],
  view: ['保存的查询', '视图封装', '逻辑层'],
  index: ['加速查找', '索引结构', '写入代价'],
  optimizer: ['执行计划', '成本估算', '改写优化'],
  transaction: ['全成或全撤', 'ACID 边界', '隔离级别'],
  security: ['最小权限', 'GRANT/REVOKE', '角色边界'],
  window: ['每行带窗', '分区排序', '分析函数'],
  cte: ['拆成台阶', 'WITH 命名', '递归查询'],
  select: ['列投影', '少取列', 'SELECT * 慎用'],
  pivot: ['行列转置', '宽表长表', '报表形态'],
  dynamic: ['参数化', '防注入', '白名单字段'],
  backup: ['备份是恢复前提', 'RPO/RTO', '定期演练'],
  replication: ['主从同步', '流复制', '故障切换'],
  vacuum: ['死元组回收', 'MVCC 维护', '膨胀治理'],
  wal: ['预写日志', '崩溃恢复', 'checkpoint'],
  monitor: ['pg_stat 指标', '慢查询', '连接与锁'],
  admin: ['DBA 日常', '配置与启停', '集群运维'],
  extension: ['插件化扩展', '版本兼容', 'PostGIS 等'],
  deploy: ['部署拓扑', '高可用', '云与自建'],
};

const METAPHOR_POOL = {
  relation: ['像档案室：表是柜，行是档案，外键是编号引用', '像 ER 图落地：实体变表，关系变键', '像 Excel 多表关联，但规则更严'],
  compare: ['像选型：螺丝刀和锤子各管一类活', '像强类型 vs 灵活文档：一致性 vs 扩展', '不是替代关系，是数据形状不同'],
  keyword: ['像中文句子：主谓宾定状补各就各位', '像 SQL 骨架：缺一块整句读不通', 'SELECT 是「要什么」，FROM 是「从哪来」'],
  datatype: ['像容器规格：装液体和装螺丝的盒子不同', '类型错像把日期当数字比大小', 'NULL 不是空字符串，是「未知」'],
  syntax: ['像读合同条款：先找主体再找条件', '查询像漏斗：FROM 定范围，WHERE 筛，SELECT 取列', '语法顺序 ≠ 执行顺序，但写法有约定'],
  ddl: ['像盖房子先画图纸再砌墙', 'DDL 改结构，DML 改数据——别混', 'CREATE 是立项，ALTER 是改造'],
  dml: ['像改库存：先对货单号再动数量', 'UPDATE/DELETE 没 WHERE 等于整表遭殃', 'INSERT 像入库登记：列和值要一一对应'],
  insert: ['像填表格：每列一格，缺省看 DEFAULT', '批量 INSERT 像一次搬多箱货', '自增主键常让数据库发号'],
  update: ['像改订单状态：先查单号再改', 'SET 改列，WHERE 定行——写反后果严重', '改完看 affected rows'],
  delete: ['像撕页前先确认页码', 'DELETE 可回滚（在事务里），TRUNCATE 往往不行', '软删用 status 列，硬删真消失'],
  truncate: ['像清空仓库：快但不可细选', 'TRUNCATE 通常不能 WHERE 指定行', '生产环境先备份再 TRUNCATE'],
  drop: ['像拆房：表结构和数据一起没', 'DROP 前查依赖：视图、外键会挡路', '删对象比删数据更彻底'],
  aggregate: ['像财务汇总：明细账 → 月报', 'COUNT/SUM 先问「一行代表什么粒度」', '聚合把多行压成更少行'],
  group: ['像按部门统计人数：每组一行', 'GROUP BY 列必须在 SELECT 聚合规则内', '分组键决定统计口径'],
  order: ['像名单排序：先按年级再按姓名', 'ORDER BY 在最后呈现，不改变行数', 'NULL 排最前还是最后看数据库'],
  having: ['WHERE 筛行，HAVING 筛组——别混', '像先分班再筛「平均分>80的班」', 'HAVING 只能用在聚合后'],
  key: ['主键像身份证号：唯一标识一行', '外键像引用链接：orders.user_id → users.id', '唯一键允许多个 NULL（看数据库）'],
  constraint: ['像门禁：不合规的数据进不了库', 'CHECK 是自定义规则，NOT NULL 禁空', '约束在 DB 层兜底，不只靠应用'],
  subquery: ['像套娃：内层先算出答案给外层', '相关子查询：外层每一行触发内层一次', '子查询可以当表、当列、当条件'],
  join: ['像两张 Excel 按工号 VLOOKUP', 'INNER 只要对上的，LEFT 保留左表全部', 'JOIN 键错一行变多行——笛卡尔积'],
  function: ['像计算器：输入值 → 函数 → 输出', 'ROUND/FLOOR 改变精度，ABS 取绝对值', '函数嵌套像流水线'],
  string: ['像文本编辑器：截取、替换、拼接', 'CONCAT 拼字符串，SUBSTRING 切片段', 'UPPER/LOWER 统一大小写便于比较'],
  date: ['像日历计算：加天数、取年月日', 'TIMESTAMP 带时刻，DATE 只到日', '时区错一小时，报表全歪'],
  view: ['像保存的筛选器：底层表变，视图跟着变', '视图不是表，不存数据只存查询定义', '报表常读视图简化权限'],
  index: ['像书后索引：查快但增删改要维护', 'B-tree 最常见，适合等值和范围', '索引不是越多越好——占空间、拖写入'],
  optimizer: ['像导航看路况：EXPLAIN 看执行路线', '全表扫描像逐页翻书，索引像目录跳转', '优化先读计划再改 SQL/索引'],
  transaction: ['像银行转账：扣款和入账必须同时成功', 'BEGIN 开工，COMMIT 确认，ROLLBACK 撤销', 'ACID 是事务的四个承诺'],
  security: ['像发卡：GRANT 发卡，REVOKE 收回', '最小权限：应用账号只给需要的表', 'DB 安全不靠藏 SQL'],
  window: ['像给每行配一个小计算器', 'PARTITION BY 分组窗，ORDER BY 窗内排序', 'RANK 并列跳号，ROW_NUMBER 不跳'],
  cte: ['像把长 SQL 拆成命名步骤', 'WITH 让子查询有名字，可读性大增', '递归 CTE 像树形结构逐层展开'],
  select: ['像只拿需要的列，别整表搬', 'SELECT * 在宽表上浪费 IO', '投影越早越少数据下游处理'],
  pivot: ['像把长表(month,amount) 拉成宽表(1月|2月)', '报表常要列展示，业务库常行长表', 'PIVOT/ CASE 条件聚合可实现'],
  dynamic: ['像模板填空：结构固定，参数绑定', '拼接原始输入 = SQL 注入温床', '动态列名用白名单，值用占位符'],
  backup: ['像定期复印档案：没备份就别谈恢复', 'pg_dump 逻辑备份，basebackup 物理备份', '恢复演练比备份文件更重要'],
  replication: ['像主店记账、分店同步账本', '流复制跟 WAL，逻辑复制可按表', '复制延迟是故障切换的隐形风险'],
  vacuum: ['像打扫房间：死元组占地方', 'autovacuum 是保洁员，手动 VACUUM 是大扫除', '膨胀不处理查询会越来越慢'],
  wal: ['像飞行黑匣子：先写日志再落盘', 'WAL 保证崩溃后可重放', 'checkpoint 把脏页刷盘'],
  monitor: ['像体检报告：连接数、缓存命中、慢 SQL', 'pg_stat_* 是库内仪表盘', '告警要配 SLO 而不是看心情'],
  admin: ['像物业管楼：水电配置、门禁、巡检', 'postgresql.conf + pg_hba 是规则手册', '升级大版本要有回滚预案'],
  extension: ['像给 PG 装 App：CREATE EXTENSION', '扩展版本要匹配 PG 大版本', 'PostGIS/pgvector 按需启用'],
  deploy: ['像选址开店：单机、主从、Patroni/K8s', 'Docker/Helm 是交付形态不是架构本身', '可备份、可观测、可切换才算上线'],
};

function pick(pool, index) {
  const arr = pool || METAPHOR_POOL.relation;
  return arr[index % arr.length];
}

function craftRoute(spec, zh, stage) {
  const cmd = spec.command;
  const kind = spec.diagram;
  const routesByKind = {
    relation: [
      { label: '认对象', title: '表、行、列、键', text: '关系型把业务实体拆成表，用主键标识行，用外键连表。' },
      { label: '读关系', title: cmd, text: '先画 ER 再想 SQL：谁引用谁、一对多还是多对多。' },
      { label: '验证', title: '小样本 JOIN', text: '用 3～5 行样例表 INNER JOIN，看连接键是否对齐。' },
      { label: '边界', title: '何时不用 RDBMS', text: '非结构化、超大规模横向扩展等场景可能选其他存储。' },
    ],
    compare: [
      { label: 'SQL 侧', title: 'schema + 事务 + JOIN', text: '强一致、结构化查询、复杂关系是 RDBMS 主场。' },
      { label: 'NoSQL 侧', title: '灵活 schema + 扩展', text: '文档/KV/列存等按访问模式建模，取舍不同。' },
      { label: '命令', title: cmd, text: '用业务需求对照：一致性、查询形状、团队熟悉度。' },
      { label: '决策', title: '混合架构常见', text: '核心交易走 SQL，缓存/日志/搜索走专用引擎。' },
    ],
    dml: [
      { label: '定位', title: '先 SELECT 同 WHERE', text: 'UPDATE/DELETE 前用 SELECT 确认会影响哪些行。' },
      { label: '执行', title: cmd, text: '在事务里试跑，看 affected rows 是否符合预期。' },
      { label: '复查', title: '再 SELECT 验证', text: '改完立即查结果集，必要时 ROLLBACK。' },
      { label: '风险', title: spec.risk, text: '缺 WHERE 或写错条件可能整表修改。' },
    ],
    truncate: [
      { label: '停手', title: '确认对象', text: 'TRUNCATE/DROP 影响面和普通 DML 不同，先看清表名。' },
      { label: '备份', title: '导出或快照', text: '生产环境先备份，再在维护窗口操作。' },
      { label: '执行', title: cmd, text: '理解是否可回滚、是否重置自增、是否触发级联。' },
      { label: '审计', title: '记录操作', text: '谁、何时、对哪张表做了结构/清空操作要留痕。' },
    ],
    join: [
      { label: '定键', title: 'ON 连接条件', text: '连接键类型要一致，NULL 不参与等值连接。' },
      { label: '选型', title: cmd, text: 'INNER/LEFT/RIGHT/FULL/CROSS 决定保留哪些行。' },
      { label: '验行数', title: '对比前后 COUNT', text: 'JOIN 后行数异常膨胀，先怀疑键重复或缺条件。' },
      { label: '优化', title: '索引连接列', text: '大表 JOIN 常给连接列建索引。' },
    ],
    subquery: [
      { label: '内层', title: '先写子查询', text: '单独运行内层，确认返回行数/列数/标量。' },
      { label: '外层', title: cmd, text: '外层把内层当表、当列或当 IN 列表消费。' },
      { label: '改写', title: '能 JOIN 则 JOIN', text: '相关子查询慢时尝试 JOIN 或 CTE 改写。' },
      { label: '边界', title: 'NULL 与空集', text: 'NOT IN 遇 NULL 有陷阱，注意用 NOT EXISTS。' },
    ],
    transaction: [
      { label: '开启', title: 'BEGIN / START', text: '显式事务包住一组必须同成败的操作。' },
      { label: '执行', title: cmd, text: '中间任何一步失败应走 ROLLBACK。' },
      { label: '提交', title: 'COMMIT', text: '确认无误再提交；长事务占锁影响并发。' },
      { label: '隔离', title: '读已提交等', text: '隔离级别影响幻读/脏读，按业务选。' },
    ],
    optimizer: [
      { label: '基线', title: 'EXPLAIN 看计划', text: '看 Seq Scan vs Index Scan、Nested Loop vs Hash Join。' },
      { label: '手段', title: cmd, text: '改写 SQL、加索引、减少 SELECT *、更新统计信息。' },
      { label: '验证', title: '对比耗时/成本', text: '改前后执行时间和 rows 估算要有对比。' },
      { label: '权衡', title: '索引维护成本', text: '写多读少的表慎加索引。' },
    ],
    security: [
      { label: '账号', title: '分角色', text: '应用、只读分析、运维用不同账号。' },
      { label: '授权', title: cmd, text: 'GRANT 最小权限；列级权限敏感字段单独控。' },
      { label: '审计', title: '谁访问了什么', text: '关键表开启审计日志。' },
      { label: '撤回', title: 'REVOKE', text: '离职/换岗及时收回权限。' },
    ],
    dynamic: [
      { label: '结构', title: 'SQL 模板固定', text: '表名/列名从白名单选，不直接拼接用户输入。' },
      { label: '参数', title: '占位符绑定', text: '值用 ? 或 $1 绑定，防 SQL 注入。' },
      { label: '命令', title: cmd, text: '动态 ORDER BY 也要白名单列名。' },
      { label: '审计', title: '记录最终 SQL', text: '生产动态 SQL 要可追踪、可回放。' },
    ],
    backup: [
      { label: '策略', title: 'RPO/RTO', text: '明确可丢多少数据、多久要恢复。' },
      { label: '备份', title: cmd, text: 'pg_dump / basebackup / 快照按场景选。' },
      { label: '校验', title: '恢复演练', text: '定期恢复到测试库验证备份可用。' },
      { label: '文档', title: 'runbook', text: '谁执行、在哪台、恢复步骤写清。' },
    ],
    replication: [
      { label: '拓扑', title: '主从/级联', text: '写 primary，读 replica，延迟要监控。' },
      { label: '同步', title: cmd, text: '流复制或逻辑复制，按表/库粒度选。' },
      { label: '切换', title: 'failover', text: '提升备库前确认复制追上且无分裂脑。' },
      { label: '读路由', title: '读写分离', text: '应用要知道连的是主还是从。' },
    ],
    admin: [
      { label: '连接', title: 'psql -h -U', text: '确认实例活着、版本与参数。' },
      { label: '配置', title: cmd, text: 'postgresql.conf / pg_hba / 角色权限。' },
      { label: '启停', title: 'pg_ctl / systemd', text: '维护窗口优雅重启。' },
      { label: '升级', title: '大版本计划', text: 'pg_upgrade 或逻辑迁移要演练。' },
    ],
    monitor: [
      { label: '库内', title: 'pg_stat_*', text: '连接、锁、缓存命中、表膨胀。' },
      { label: '工具', title: cmd, text: 'Prometheus + postgres_exporter 等。' },
      { label: '慢 SQL', title: 'log_min_duration', text: '抓慢查询再 EXPLAIN 优化。' },
      { label: '告警', title: 'SLO 阈值', text: '复制延迟、磁盘、连接数设告警。' },
    ],
    extension: [
      { label: '兼容', title: 'PG 版本', text: '扩展 Release 要匹配 major 版本。' },
      { label: '安装', title: cmd, text: 'CREATE EXTENSION IF NOT EXISTS。' },
      { label: '权限', title: '谁可装扩展', text: '生产通常限制 superuser 随意安装。' },
      { label: '升级', title: '扩展升级', text: 'ALTER EXTENSION UPDATE 随 PG 升级测。' },
    ],
    deploy: [
      { label: '形态', title: '单机/HA', text: '开发单机，生产主从或 Patroni。' },
      { label: '交付', title: cmd, text: '包管理、Docker、K8s Operator 选型。' },
      { label: '网络', title: '安全组/VPC', text: '只开放必要端口，TLS 可选。' },
      { label: '验收', title: '备份+监控', text: '上线前备份恢复与告警必须通。' },
    ],
  };
  if (['vacuum', 'wal'].includes(kind)) return routesByKind.backup.map((r, i) =>
    i === 1 ? { ...r, title: cmd, text: 'VACUUM / WAL / checkpoint 维护库健康。' } : r,
  );
  if (routesByKind[kind]) return routesByKind[kind];
  if (['insert', 'update', 'delete'].includes(kind)) return routesByKind.dml;
  if (['truncate', 'drop'].includes(kind)) return routesByKind.truncate;
  const hint = STAGE_HINT[stage] || 'PostgreSQL 运维/开发';
  return [
    { label: '场景', title: `${hint} 中的 ${zh}`, text: `${zh} 处理「${spec.subject}」：${spec.action}。` },
    { label: '语法', title: cmd, text: `围绕 ${spec.command} 理解读写边界与结果形状。` },
    { label: '避坑', title: '常见误区', text: spec.mistake.slice(0, 88) },
    { label: '实验', title: '动手验证', text: spec.experiment.slice(0, 88) },
  ];
}

function craftContent(spec, node, index) {
  const zh = node.zh || spec.label;
  const kind = spec.diagram || 'syntax';
  const stage = node.stage;
  const hint = STAGE_HINT[stage] || 'PostgreSQL 运维/开发';
  const suffixPool = HEADING_SUFFIX[kind] || HEADING_SUFFIX.syntax;

  const heading = `${zh}：${pick(suffixPool, index)}`;
  const subheading = `阶段 ${stage}（${hint}）：掌握 ${spec.command}，理解 ${spec.subject} 上的 ${spec.action}。`;
  const scene = `你在管理或开发 PostgreSQL 时遇到「${zh}」。先确认它面对的是「${spec.subject}」，再判断会读数据、改结构、运维实例还是优化性能。`;
  const core = `${zh} = ${spec.command} → ${spec.action} → ${spec.result}`;
  const metaphor = pick(METAPHOR_POOL[kind], index);
  const mistake = spec.mistake.includes(zh) ? spec.mistake : `别把 ${zh} 当孤立语法。${spec.risk} 在生产环境可能一次造成大范围影响。`;
  const confusion = `${zh} 的边界是「${spec.action}」，不要与相邻概念混用；先确认作用对象是 ${spec.subject}。`;
  const experiment = spec.experiment.startsWith('在测试') || spec.experiment.startsWith('用一张') ? spec.experiment
    : `在测试实例上练 \`${spec.command}\`：记录变更前后 pg_stat 或 EXPLAIN；涉及 DELETE/UPDATE/DROP 必须先确认目标行。`;

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
  const p = `pg-${spec.slug}`;
  const zh = spec.zh.slice(0, 20);
  const title = `${zh} · ${spec.command}`.slice(0, 42);
  const cmd = spec.command;
  const object = spec.subject;
  const action = spec.action;
  const result = spec.result;
  const risk = spec.risk;
  const note = spec.metaphor.slice(0, 56);
  const kind = spec.diagramKind;

  const lines = [text(`${p}-title`, 70, 10, title, 22, 620)];

  switch (kind) {
    case 'relation':
      lines.push(
        box(`${p}-users`, 64, 98, 170, 156, palette.blue),
        text(`${p}-users-t`, 92, 126, 'users 表\nid PK\nname\nemail', 16, 112),
        box(`${p}-orders`, 510, 98, 190, 156, palette.green),
        text(`${p}-orders-t`, 538, 126, 'orders 表\nid PK\nuser_id FK\namount', 16, 126),
        box(`${p}-link`, 314, 142, 120, 72, palette.yellow),
        text(`${p}-link-t`, 338, 164, '外键\n建立关系', 16, 76),
        arrow(`${p}-a1`, 240, 176, 68, 0),
        arrow(`${p}-a2`, 440, 176, 64, 0),
      );
      break;
    case 'compare':
      lines.push(
        box(`${p}-sql`, 70, 98, 230, 190, palette.blue),
        text(`${p}-sql-t`, 106, 128, 'SQL / RDBMS\n固定 schema\nJOIN\n事务强', 17, 150),
        box(`${p}-nosql`, 460, 98, 230, 190, palette.yellow),
        text(`${p}-nosql-t`, 496, 128, 'NoSQL / 其他\n灵活结构\n按访问建模', 17, 150),
        arrow(`${p}-a1`, 306, 188, 148, 0),
      );
      break;
    case 'keyword':
      ['SELECT', 'FROM', 'WHERE', 'GROUP', 'ORDER'].forEach((word, i) => {
        lines.push(
          box(`${p}-kw-${i}`, 56 + i * 138, 140, 112, 74, i % 2 ? palette.yellow : palette.blue),
          text(`${p}-kw-t-${i}`, 78 + i * 138, 162, word, 18, 72),
        );
      });
      break;
    case 'datatype':
      lines.push(
        box(`${p}-int`, 68, 108, 138, 84, palette.blue),
        text(`${p}-int-t`, 92, 132, '数字\nINT/DECIMAL', 16, 90),
        box(`${p}-str`, 236, 108, 138, 84, palette.yellow),
        text(`${p}-str-t`, 260, 132, '文本\nVARCHAR', 16, 90),
        box(`${p}-date`, 404, 108, 138, 84, palette.green),
        text(`${p}-date-t`, 428, 132, '日期\nDATE/TIME', 16, 90),
        box(`${p}-null`, 572, 108, 138, 84, palette.red),
        text(`${p}-null-t`, 596, 132, '空值\nNULL', 16, 90),
        box(`${p}-risk`, 248, 276, 278, 70, palette.purple),
        text(`${p}-risk-t`, 286, 298, risk.slice(0, 28), 16, 200),
      );
      break;
    case 'syntax':
    case 'select':
      lines.push(
        box(`${p}-select`, 56, 126, 128, 82, palette.blue),
        text(`${p}-select-t`, 78, 150, 'SELECT\n要哪些列', 16, 84),
        box(`${p}-from`, 228, 126, 128, 82, palette.yellow),
        text(`${p}-from-t`, 250, 150, 'FROM\n从哪来', 16, 84),
        box(`${p}-where`, 400, 126, 128, 82, palette.green),
        text(`${p}-where-t`, 422, 150, 'WHERE\n筛哪些行', 16, 84),
        box(`${p}-result`, 572, 126, 128, 82, palette.purple),
        text(`${p}-result-t`, 594, 150, '结果集', 16, 84),
        arrow(`${p}-a1`, 190, 166, 32, 0),
        arrow(`${p}-a2`, 362, 166, 32, 0),
        arrow(`${p}-a3`, 534, 166, 32, 0),
      );
      break;
    case 'ddl':
      lines.push(
        box(`${p}-blueprint`, 60, 102, 170, 126, palette.blue),
        text(`${p}-blueprint-t`, 88, 132, '表设计\n列/类型\n约束', 16, 114),
        box(`${p}-cmd`, 302, 86, 174, 158, palette.yellow),
        text(`${p}-cmd-t`, 330, 116, `${cmd.slice(0, 22)}\n改变结构`, 16, 118),
        box(`${p}-table`, 552, 102, 166, 126, palette.green),
        text(`${p}-table-t`, 580, 132, '数据库对象\n表/列/索引', 16, 110),
        arrow(`${p}-a1`, 236, 164, 60, 0),
        arrow(`${p}-a2`, 482, 164, 64, 0),
      );
      break;
    case 'dml':
    case 'insert':
    case 'update':
    case 'delete':
      lines.push(
        box(`${p}-before`, 54, 104, 166, 132, palette.blue),
        text(`${p}-before-t`, 82, 132, '目标行\n先 SELECT\n确认 WHERE', 16, 110),
        box(`${p}-change`, 304, 86, 176, 168, palette.yellow),
        text(`${p}-change-t`, 332, 116, `${cmd.slice(0, 20)}\n改变数据`, 16, 120),
        box(`${p}-after`, 562, 104, 154, 132, palette.green),
        text(`${p}-after-t`, 588, 132, '影响行数\n复查结果', 16, 100),
        arrow(`${p}-a1`, 226, 170, 72, 0),
        arrow(`${p}-a2`, 486, 170, 70, 0),
        box(`${p}-risk`, 270, 306, 238, 58, palette.red),
        text(`${p}-risk-t`, 306, 322, risk.slice(0, 24), 15, 166),
      );
      break;
    case 'truncate':
    case 'drop':
      lines.push(
        box(`${p}-table`, 70, 110, 190, 154, palette.blue),
        text(`${p}-table-t`, 100, 140, '目标表\n数据/结构', 17, 126),
        box(`${p}-danger`, 324, 86, 168, 202, palette.red),
        text(`${p}-danger-t`, 354, 120, `${cmd.slice(0, 18)}\n先备份\n看权限`, 16, 108),
        box(`${p}-result`, 558, 110, 160, 154, palette.yellow),
        text(`${p}-result-t`, 586, 140, '清空或\n删除对象', 17, 104),
        arrow(`${p}-a1`, 266, 184, 52, 0),
        arrow(`${p}-a2`, 498, 184, 54, 0),
      );
      break;
    case 'aggregate':
    case 'group':
    case 'order':
    case 'having':
      lines.push(
        box(`${p}-rows`, 52, 92, 170, 180, palette.blue),
        text(`${p}-rows-t`, 82, 122, '明细行\n多笔订单\n多用户', 15, 110),
        box(`${p}-group`, 306, 118, 160, 126, palette.yellow),
        text(`${p}-group-t`, 334, 146, `${cmd.slice(0, 18)}\n分组聚合`, 16, 104),
        box(`${p}-metric`, 552, 118, 166, 126, palette.green),
        text(`${p}-metric-t`, 582, 146, '指标结果\n计数/求和', 16, 110),
        arrow(`${p}-a1`, 228, 180, 72, 0),
        arrow(`${p}-a2`, 472, 180, 74, 0),
      );
      break;
    case 'key':
    case 'constraint':
      lines.push(
        box(`${p}-input`, 54, 128, 150, 92, palette.blue),
        text(`${p}-input-t`, 80, 154, '待写入行', 16, 98),
        box(`${p}-gate`, 304, 82, 178, 184, palette.yellow),
        text(`${p}-gate-t`, 334, 112, `${cmd.slice(0, 16)}\n唯一/非空\n主外键`, 16, 118),
        box(`${p}-ok`, 572, 92, 138, 76, palette.green),
        text(`${p}-ok-t`, 596, 114, '通过写入', 16, 86),
        box(`${p}-bad`, 572, 230, 138, 76, palette.red),
        text(`${p}-bad-t`, 596, 252, '拒绝错误', 16, 86),
        arrow(`${p}-a1`, 210, 172, 88, 0),
        arrow(`${p}-a2`, 488, 130, 78, -4),
        arrow(`${p}-a3`, 488, 218, 78, 48, '#e8590c'),
      );
      break;
    case 'subquery':
      lines.push(
        box(`${p}-inner`, 112, 118, 190, 130, palette.yellow),
        text(`${p}-inner-t`, 142, 146, `内层查询\n${cmd.slice(0, 16)}`, 16, 126),
        box(`${p}-outer`, 458, 92, 220, 182, palette.blue),
        text(`${p}-outer-t`, 492, 122, '外层查询\n消费内层结果', 16, 146),
        arrow(`${p}-a1`, 308, 182, 144, 0),
      );
      break;
    case 'join':
      lines.push(
        box(`${p}-left`, 58, 104, 190, 156, palette.blue),
        text(`${p}-left-t`, 88, 132, '左表 A\nid\nname', 16, 126),
        box(`${p}-on`, 310, 130, 154, 94, palette.yellow),
        text(`${p}-on-t`, 338, 154, `${cmd.slice(0, 14)}\nON key`, 16, 98),
        box(`${p}-right`, 526, 104, 190, 156, palette.green),
        text(`${p}-right-t`, 556, 132, '右表 B\na_id\namount', 16, 126),
        arrow(`${p}-a1`, 254, 178, 50, 0),
        arrow(`${p}-a2`, 470, 178, 50, 0),
      );
      break;
    case 'function':
    case 'string':
    case 'date':
      lines.push(
        box(`${p}-input`, 58, 124, 150, 94, palette.blue),
        text(`${p}-input-t`, 84, 150, '输入值\n列/常量', 16, 98),
        box(`${p}-fn`, 306, 88, 178, 166, palette.yellow),
        text(`${p}-fn-t`, 336, 118, `${cmd.slice(0, 18)}\n转换/计算`, 16, 118),
        box(`${p}-out`, 572, 124, 146, 94, palette.green),
        text(`${p}-out-t`, 598, 150, '输出值\n可比较', 16, 94),
        arrow(`${p}-a1`, 214, 170, 86, 0),
        arrow(`${p}-a2`, 490, 170, 76, 0),
      );
      break;
    case 'view':
      lines.push(
        box(`${p}-tables`, 54, 108, 170, 126, palette.blue),
        text(`${p}-tables-t`, 84, 138, '底层表\nusers\norders', 16, 110),
        box(`${p}-view`, 306, 82, 180, 178, palette.yellow),
        text(`${p}-view-t`, 336, 112, `${cmd.slice(0, 16)}\n封装 SELECT`, 16, 120),
        box(`${p}-consumer`, 566, 108, 150, 126, palette.green),
        text(`${p}-consumer-t`, 592, 138, '报表/应用\n像表一样读', 16, 98),
        arrow(`${p}-a1`, 230, 170, 70, 0),
        arrow(`${p}-a2`, 492, 170, 68, 0),
      );
      break;
    case 'optimizer':
    case 'index':
      lines.push(
        box(`${p}-query`, 58, 108, 150, 112, palette.blue),
        text(`${p}-query-t`, 84, 136, 'SQL\nWHERE/JOIN', 16, 98),
        box(`${p}-plan`, 296, 78, 190, 172, palette.yellow),
        text(`${p}-plan-t`, 326, 108, `${cmd.slice(0, 16)}\nEXPLAIN\n扫描/成本`, 16, 130),
        box(`${p}-fix`, 566, 108, 150, 112, palette.green),
        text(`${p}-fix-t`, 592, 136, '改写\n加索引', 16, 98),
        arrow(`${p}-a1`, 214, 164, 76, 0),
        arrow(`${p}-a2`, 492, 164, 68, 0),
      );
      break;
    case 'transaction':
      lines.push(
        box(`${p}-begin`, 54, 130, 130, 82, palette.blue),
        text(`${p}-begin-t`, 78, 154, 'BEGIN\n开启事务', 16, 82),
        box(`${p}-work`, 238, 94, 180, 154, palette.yellow),
        text(`${p}-work-t`, 268, 124, '多条 SQL\n扣库存\n写订单', 16, 120),
        box(`${p}-commit`, 494, 82, 150, 76, palette.green),
        text(`${p}-commit-t`, 520, 104, 'COMMIT\n全部生效', 16, 98),
        box(`${p}-rollback`, 494, 226, 150, 76, palette.red),
        text(`${p}-rollback-t`, 520, 248, 'ROLLBACK\n全部撤回', 16, 98),
        arrow(`${p}-a1`, 190, 170, 42, 0),
        arrow(`${p}-a2`, 424, 142, 64, -20),
        arrow(`${p}-a3`, 424, 206, 64, 52, '#e8590c'),
      );
      break;
    case 'security':
      lines.push(
        box(`${p}-role`, 70, 102, 156, 120, palette.blue),
        text(`${p}-role-t`, 98, 132, '角色/账号\n应用/分析', 16, 100),
        box(`${p}-grant`, 306, 84, 176, 156, palette.yellow),
        text(`${p}-grant-t`, 336, 112, `${cmd.slice(0, 16)}\n最小权限`, 16, 116),
        box(`${p}-object`, 566, 102, 150, 120, palette.green),
        text(`${p}-object-t`, 592, 132, '表/视图\n可读可写', 16, 98),
        arrow(`${p}-a1`, 232, 160, 68, 0),
        arrow(`${p}-a2`, 488, 160, 72, 0),
      );
      break;
    case 'window':
      lines.push(
        box(`${p}-rows`, 66, 92, 190, 206, palette.blue),
        text(`${p}-rows-t`, 96, 122, '明细行仍保留\nA 100\nA 80\nB 60', 16, 126),
        box(`${p}-window`, 326, 112, 162, 130, palette.yellow),
        text(`${p}-window-t`, 354, 140, `${cmd.slice(0, 14)}\nPARTITION\nORDER`, 16, 106),
        box(`${p}-out`, 560, 92, 160, 206, palette.green),
        text(`${p}-out-t`, 588, 122, '每行多一列\nrank/lead', 16, 104),
        arrow(`${p}-a1`, 262, 188, 58, 0),
        arrow(`${p}-a2`, 494, 188, 60, 0),
      );
      break;
    case 'cte':
      lines.push(
        box(`${p}-s1`, 94, 214, 160, 70, palette.blue),
        text(`${p}-s1-t`, 122, 234, '步骤 1\n基础数据', 16, 104),
        box(`${p}-s2`, 302, 148, 160, 70, palette.yellow),
        text(`${p}-s2-t`, 330, 168, '步骤 2\n过滤/聚合', 16, 104),
        box(`${p}-s3`, 510, 82, 160, 70, palette.green),
        text(`${p}-s3-t`, 538, 102, '最终 SELECT', 16, 104),
        arrow(`${p}-a1`, 260, 236, 36, -42),
        arrow(`${p}-a2`, 468, 170, 36, -42),
      );
      break;
    case 'pivot':
      lines.push(
        box(`${p}-rows`, 74, 104, 180, 156, palette.blue),
        text(`${p}-rows-t`, 104, 132, '长表\n月份|金额\n1月|10', 15, 120),
        box(`${p}-pivot`, 326, 126, 144, 92, palette.yellow),
        text(`${p}-pivot-t`, 354, 150, `${cmd.slice(0, 12)}\n转置`, 16, 88),
        box(`${p}-cols`, 548, 104, 180, 156, palette.green),
        text(`${p}-cols-t`, 578, 132, '宽表\n1月|2月\n10|20', 15, 120),
        arrow(`${p}-a1`, 260, 176, 60, 0),
        arrow(`${p}-a2`, 476, 176, 66, 0),
      );
      break;
    case 'dynamic':
      lines.push(
        box(`${p}-input`, 58, 112, 150, 110, palette.blue),
        text(`${p}-input-t`, 84, 140, '用户输入\n筛选条件', 16, 98),
        box(`${p}-builder`, 304, 82, 184, 170, palette.yellow),
        text(`${p}-builder-t`, 334, 112, `${cmd.slice(0, 16)}\n白名单\n绑定参数`, 16, 124),
        box(`${p}-db`, 568, 112, 150, 110, palette.green),
        text(`${p}-db-t`, 594, 140, '安全执行\n可审计', 16, 98),
        arrow(`${p}-a1`, 214, 166, 84, 0),
        arrow(`${p}-a2`, 494, 166, 68, 0),
        box(`${p}-risk`, 258, 306, 276, 58, palette.red),
        text(`${p}-risk-t`, 294, 322, '禁止拼接原始输入', 16, 204),
      );
      break;
    case 'backup':
      lines.push(
        box(`${p}-prod`, 58, 118, 150, 100, palette.blue),
        text(`${p}-prod-t`, 84, 144, '生产库\n持续写入', 16, 98),
        box(`${p}-backup`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-backup-t`, 334, 116, `${cmd.slice(0, 18)}\npg_dump/校验`, 16, 120),
        box(`${p}-restore`, 566, 118, 150, 100, palette.green),
        text(`${p}-restore-t`, 592, 144, '恢复演练\nRPO/RTO', 16, 98),
        arrow(`${p}-a1`, 214, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
      break;
    case 'replication':
      lines.push(
        box(`${p}-primary`, 58, 118, 150, 100, palette.blue),
        text(`${p}-primary-t`, 84, 144, 'Primary\n写 WAL', 16, 98),
        box(`${p}-stream`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-stream-t`, 334, 116, `${cmd.slice(0, 16)}\n流/逻辑复制`, 16, 120),
        box(`${p}-replica`, 566, 118, 150, 100, palette.green),
        text(`${p}-replica-t`, 592, 144, 'Replica\n读/切换', 16, 98),
        arrow(`${p}-a1`, 214, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
      break;
    case 'vacuum':
    case 'wal':
      lines.push(
        box(`${p}-tuples`, 58, 118, 150, 100, palette.blue),
        text(`${p}-tuples-t`, 84, 144, '行版本\nMVCC\n死元组', 16, 98),
        box(`${p}-maint`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-maint-t`, 334, 116, `${cmd.slice(0, 16)}\nVACUUM/WAL`, 16, 120),
        box(`${p}-health`, 566, 118, 150, 100, palette.green),
        text(`${p}-health-t`, 592, 144, '空间回收\n崩溃恢复', 16, 98),
        arrow(`${p}-a1`, 214, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
      break;
    case 'monitor':
      lines.push(
        box(`${p}-pg`, 58, 124, 150, 92, palette.blue),
        text(`${p}-pg-t`, 84, 150, 'PostgreSQL\npg_stat_*', 16, 98),
        box(`${p}-tool`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-tool-t`, 334, 124, `${cmd.slice(0, 16)}\n监控/日志`, 16, 124),
        box(`${p}-alert`, 568, 124, 150, 92, palette.green),
        text(`${p}-alert-t`, 594, 150, '告警\n慢查询', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'admin':
      lines.push(
        box(`${p}-cli`, 58, 118, 150, 100, palette.blue),
        text(`${p}-cli-t`, 84, 144, 'psql/pg_ctl\n运维命令', 16, 98),
        box(`${p}-cfg`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-cfg-t`, 334, 116, `${cmd.slice(0, 16)}\n配置/权限`, 16, 120),
        box(`${p}-svc`, 566, 118, 150, 100, palette.green),
        text(`${p}-svc-t`, 592, 144, '稳定服务\n可恢复', 16, 98),
        arrow(`${p}-a1`, 214, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
      break;
    case 'extension':
      lines.push(
        box(`${p}-core`, 58, 124, 150, 92, palette.blue),
        text(`${p}-core-t`, 84, 150, 'PostgreSQL\n核心', 16, 98),
        box(`${p}-ext`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-ext-t`, 334, 124, `${cmd.slice(0, 16)}\nCREATE EXT`, 16, 124),
        box(`${p}-feat`, 568, 124, 150, 92, palette.green),
        text(`${p}-feat-t`, 594, 150, 'PostGIS等\n新能力', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'deploy':
      lines.push(
        box(`${p}-code`, 58, 124, 150, 92, palette.blue),
        text(`${p}-code-t`, 84, 150, '配置/IaC\nDocker', 16, 98),
        box(`${p}-env`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-env-t`, 334, 124, `${cmd.slice(0, 16)}\n云/自建/HA`, 16, 124),
        box(`${p}-run`, 568, 124, 150, 92, palette.green),
        text(`${p}-run-t`, 594, 150, '可访问\n可备份', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    default:
      lines.push(
        box(`${p}-obj`, 58, 124, 150, 92, palette.blue),
        text(`${p}-obj-t`, 84, 150, object.slice(0, 12), 16, 98),
        box(`${p}-cmd`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-cmd-t`, 334, 124, cmd.slice(0, 20), 16, 124),
        box(`${p}-res`, 568, 124, 150, 92, palette.green),
        text(`${p}-res-t`, 594, 150, result.slice(0, 12), 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
  }

  lines.push(text(`${p}-note`, 90, 320, note, 16, 560));
  return scene(spec.slug, lines);
}

const LABEL_OVERRIDES = {
  'What are Relational Databases?': {
    heading: '关系型数据库：表、行、列与键',
    subheading: '数据按关系模型组织，SQL 是在这套结构上的查询与变更语言。',
    metaphor: '像档案室：表是柜，行是档案，外键是编号引用。',
  },
  'PostgreSQL vs NoSQL Databases': {
    heading: 'PostgreSQL 与 NoSQL：按数据形状选型',
    subheading: '不是谁替代谁，而是一致性、查询模式与扩展方式不同。',
  },
  'PostgreSQL vs Other RDBMS': {
    heading: 'PostgreSQL 与其他 RDBMS：特性与生态',
    subheading: '开源、扩展、JSON/窗口函数等是 PG 常见优势；迁移要看方言与运维习惯。',
  },
  SELECT: {
    heading: 'SELECT：声明你要的结果列',
    subheading: 'FROM 定数据源，WHERE 筛行，SELECT 投影列——先读懂语义分层。',
  },
  JOINs: {
    heading: 'JOIN：多表按连接键对齐',
    subheading: '连接类型决定保留哪些行；键错会导致行数膨胀。',
  },
  Transactions: {
    heading: '事务：一组操作同成败',
    subheading: 'BEGIN 包住业务步骤，COMMIT 确认，ROLLBACK 撤销。',
  },
  'Window Functions': {
    heading: '窗口函数：保留明细行并附加分析列',
    subheading: 'PARTITION BY 划窗，ORDER BY 窗内排序，每行仍可独立输出。',
  },
  'Dynamic SQL': {
    heading: '动态 SQL：结构白名单 + 参数绑定',
    subheading: '动态拼语句必须防注入；列名/表名不可直接拼接用户输入。',
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

if (allSpecs.length !== 170) {
  console.error('Expected 170 nodes, got', allSpecs.length);
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
    rawDiagram: POSTGRESQL_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const POSTGRESQL_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const POSTGRESQL_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/postgresql/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', allSpecs.length, 'nodes,', usedSlugs.size, 'unique diagram slugs');
