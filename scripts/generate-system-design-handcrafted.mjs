#!/usr/bin/env node
/**
 * Generates src/roadmaps/system-design/teaching-handcrafted.ts
 * 147 nodes — unique Chinese copy + varied Excalidraw layouts per node.
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
  const data = readFileSync('src/roadmaps/system-design/data.ts', 'utf8');
  const start = data.indexOf('const data = ') + 'const data = '.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  const parsed = JSON.parse(data.slice(start, end));
  const nodes = [];
  parsed.stages.forEach((s, i) => s.nodes.forEach((n) => nodes.push({ ...n, stage: i + 1, stageEn: s.en, stageZh: s.zh })));
  return nodes;
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

const sdCategoryCopy = {
  intro: { subject: '系统设计方法', action: '从需求、估算、接口到组件划分', result: '面试/项目有结构化思路', risk: '一上来画微服务', metaphor: '系统设计像盖楼：先需求面积，再结构图纸。' },
  cap: { subject: 'CAP 与一致性', action: '在 C/A/P 间做业务权衡', result: '一致性预期清晰', risk: '既要强一致又要无限可用', metaphor: 'CAP 像三角约束：三边不能同时拉满。' },
  scale: { subject: '扩展性', action: '区分垂直/水平扩展与瓶颈', result: '性能问题有优化路径', risk: '只加 CPU 不拆瓶颈', metaphor: '扩展像拓宽路或增车道：要看堵点在哪。' },
  cache: { subject: '缓存', action: '设计 CDN/应用缓存/数据库缓存层', result: '读性能提升且可控', risk: '缓存与 DB 不一致', metaphor: '缓存像前台复印件：原件变了要同步。' },
  storage: { subject: '存储设计', action: '选 SQL/NoSQL/KV 与分片复制', result: '数据层匹配访问模式', risk: '一种数据库包打天下', metaphor: '存储像仓库类型：冷链/常温/危险品分库。' },
  pattern: { subject: '架构模式', action: '选单体/微服务/事件驱动等', result: '边界清晰可演进', risk: '微服务过早拆分', metaphor: '架构模式像城市分区：先功能聚类再拆分。' },
  messaging: { subject: '异步消息', action: '用队列/事件总线解耦', result: '峰值削峰、系统解耦', risk: '同步链路过长', metaphor: '消息队列像快递中转站：发送方不必等签收。' },
  reliability: { subject: '可靠性', action: '设计重试、熔断、 failover', result: '部分故障不拖垮全局', risk: '无超时无降级', metaphor: '熔断像电闸：短路时先跳闸保护全网。' },
  gateway: { subject: '网关模式', action: '用 API Gateway 路由/聚合/鉴权', result: '客户端与后端解耦', risk: '网关成上帝对象', metaphor: '网关像酒店前台：对外一个入口，对内分服务。' },
  security: { subject: '安全设计', action: '边界认证、授权与零信任', result: '攻击面可控', risk: '内网默认信任', metaphor: '安全像洋葱：多层防御，每层都要验证。' },
  observe: { subject: '监控', action: '定义 SLI/SLO 与告警', result: '可用性可度量', risk: '无 SLO 谈高可用', metaphor: 'SLO 像合同条款：99.9% 要可测。' },
  impl: { subject: '落地实现', action: '从设计到迭代与权衡记录', result: '设计可执行可复盘', risk: '设计文档与实现脱节', metaphor: '落地像施工图交底：设计要开发能照着做。' },
  network: { subject: 'DNS 与网络', action: '设计域名解析、CDN 与负载路径', result: '全球访问路径清晰', risk: 'DNS TTL 过长导致切换慢', metaphor: 'DNS 像电话簿：名字到地址的映射。' },
  api: { subject: '应用通信', action: '设计 API 与实时通信方式', result: '客户端与服务协作清晰', risk: '协议选型不考虑客户端能力', metaphor: 'API 像服务窗口：格式约定好才能办事。' },
};

function sdCategory(label) {
  if (/What is System Design|How to approach|Introduction|Performance vs Scalability|Latency vs Throughput/i.test(label)) return 'intro';
  if (/CAP Theorem|Availability vs Consistency|Weak Consistency|Strong Consistency|Eventual Consistency|Consistency Patterns|Availability Patterns|Fail-Over|Replication|Availability in Numbers/i.test(label)) return 'cap';
  if (/Performance Antipatterns|Noisy Neighbor|Horizontal Scaling|Sharding|Federation|Compute Resource|Denormalization|SQL Tuning|Back Pressure|Busy Database|Busy Frontend|Monolithic Persistence|Chatty I\/O|Improper Instantiation|Extraneous Fetching|Synchronous I\/O|Retry Storm|Sequential Convoy/i.test(label)) return 'scale';
  if (/Caching|Application Caching|CDN|Content Delivery|Push CDNs|Pull CDNs|Cache Aside|Cache-Aside|Write-through|Write-behind|Refresh Ahead|Client Caching|Web Server Caching|Database Caching|No Caching/i.test(label)) return 'cache';
  if (/Key-Value Store|Database|SQL|NoSQL|Document Store|Wide Column|Graph Databases|Data Management|Materialized View|Index Table/i.test(label)) return 'storage';
  if (/Microservices|Monolith|Service Discovery|Leader Election|Design Patterns|Cloud Design|Strangler|Sidecar|Ambassador|BFF|Anti-Corruption|Scheduler Agent|Pipes|Static Content|Compute Resource Consolidation|Deployment Stamps|Geodes/i.test(label)) return 'pattern';
  if (/Background Jobs|Asynchronism|Messaging|Event-Driven|Message Queue|Pub\/Sub|Schedule Driven|Task Queues|Publisher|Priority Queue|Competing Consumers|Choreography|Claim Check|Async Request|Event Sourcing|CQRS/i.test(label)) return 'messaging';
  if (/Circuit Breaker|Reliability|Retry|Timeout|Bulkhead|Throttling|High Availability|Availability|Resiliency|Compensating Transaction|Health Endpoint|Queue-Based Load Leveling/i.test(label)) return 'reliability';
  if (/Gateway|Gatekeeper|Aggregation|Routing|Offloading|Load Balancer|LB vs Reverse|Application Layer/i.test(label)) return 'gateway';
  if (/Security|Authentication|Authorization|Federated Identity|Valet Key/i.test(label)) return 'security';
  if (/Monitoring|Observability|Logging|Metrics|SLO|SLI|Instrumentation|Visualization|Health Monitoring|Availability Monitoring|Performance Monitoring|Security Monitoring|Usage Monitoring/i.test(label)) return 'observe';
  if (/Design & Implementation|Design Documentation|Trade-off|Returning Results/i.test(label)) return 'impl';
  if (/Domain Name System|DNS|TCP|UDP|Communication|HTTP|RPC|gRPC|REST|GraphQL|Idempotent/i.test(label)) return 'network';
  return 'pattern';
}

const sdCommands = {
  'What is System Design?': '需求 → 估算 → 高层设计 → 深入',
  'How to approach System Design?': 'Clarify → Estimate → Design → Trade-offs',
  'CAP Theorem': 'Partition 时 CP vs AP 取舍',
  'Performance vs Scalability': '优化单机 vs 加机器',
  'Latency vs Throughput': 'P99 延迟 vs QPS',
  'Availability vs Consistency': 'AP vs CP 业务选择',
  'Content Delivery Networks': 'edge cache 静态资源',
  'Circuit Breaker': 'open / half-open / closed',
  'Microservices': '按领域边界拆分服务',
  'Key-Value Store': 'consistent hashing + replication',
  'Load Balancers': 'L4/L7 分发流量',
  'Caching': 'CDN → App → DB 多级',
  'Message Queues': 'producer → topic → consumer',
  'Sharding': 'shard key 水平切分',
  'CQRS': '读写模型分离',
  'Event Sourcing': '事件流为真相源',
  'API Gateway': '统一入口路由聚合',
  'Domain Name System': 'domain → resolver → IP',
};

const sdHeading = {
  intro: '系统设计方法', cap: 'CAP 与一致性', scale: '扩展与反模式', cache: '缓存设计',
  storage: '存储选型', pattern: '架构模式', messaging: '异步消息', reliability: '可靠性',
  gateway: '网关与负载', security: '安全设计', observe: '监控与 SLO', impl: '设计落地',
  network: '网络与通信', api: '应用通信',
};

const CAT_LAYOUT = {
  intro: 'timeline', cap: 'compare', scale: 'split', cache: 'layer', storage: 'vertical',
  pattern: 'hub', messaging: 'vertical', reliability: 'cycle', gateway: 'split',
  security: 'layer', observe: 'grid', impl: 'timeline', network: 'vertical', api: 'compare',
};

const LAYOUTS = ['compare', 'vertical', 'hub', 'grid', 'layer', 'stack', 'split', 'cycle', 'timeline', 'fork', 'loop', 'matrix'];

function sdRoute(cat, command) {
  const routes = {
    intro: [[' Clarify', '功能/用户/规模', '先问再画。'], ['估算', command, 'QPS/存储/带宽。'], ['接口', 'API 草图', '读写路径。'], ['组件', '高层架构', '再深入。']],
    cap: [['读 CAP', '三选二', '分区必存在。'], ['业务', command, '要 CP 还是 AP。'], ['模式', '强一致/最终一致', '具体策略。'], ['验证', '故障场景', '脑裂怎么办。']],
    scale: [['找瓶颈', 'CPU/IO/网络', 'profile 思维。'], ['垂直', command, '先简单扩容。'], ['水平', '无状态+LB', '分片/复制。'], ['反模式', '邻居干扰', '资源隔离。']],
    cache: [['层级', 'CDN/Redis/本地', '多级缓存。'], ['策略', command, 'TTL/失效。'], ['一致', '更新顺序', 'cache aside。'], ['CDN', '静态资源', '边缘加速。']],
    storage: [['访问模式', '读多写少?', '驱动选型。'], ['SQL vs NoSQL', command, 'KV/文档/图。'], ['分片', 'shard key', '热点规避。'], ['复制', '主从/多主', 'RPO/RTO。']],
    pattern: [['边界', '单体 vs 微服务', '团队/规模。'], ['拆分', command, '按业务能力。'], ['通信', 'sync/async', '耦合度。'], ['演进', '先单体', '必要时再拆。']],
    messaging: [['解耦', '队列/事件', '异步边界。'], ['语义', command, 'at-least-once 等。'], ['顺序', '分区 key', '消费组。'], ['后台任务', 'worker', '重试幂等。']],
    reliability: [['超时', '设上限', '别无限等。'], ['重试', command, '指数退避。'], ['熔断', 'Circuit Breaker', '失败隔离。'], ['降级', 'fallback', '保核心功能。']],
    gateway: [['入口', '统一 API', '路由规则。'], ['聚合', command, '减少往返。'], ['横切', '鉴权/限流', '别进每个服务。'], ['BFF', '按客户端', '必要时拆分。']],
    security: [['边界', '零信任', '内外都要验。'], ['认证', command, 'OAuth/JWT。'], ['授权', 'RBAC/ABAC', '最小权限。'], ['传输', 'TLS', '静态加密。']],
    observe: [['SLI', '选指标', '延迟/错误/吞吐。'], ['SLO', command, '目标可用性。'], ['告警', '用户影响', '少而准。'], ['复盘', 'postmortem', '无 blame。']],
    impl: [['文档', 'ADR/设计说明', '权衡记录。'], ['迭代', command, 'MVP 先上。'], ['对齐', 'review 设计', '开发测试参与。'], ['复盘', '上线后指标', '设计是否成立。']],
    network: [['DNS', '解析链路', 'TTL/缓存。'], ['负载', command, 'L4/L7。'], ['地理', '多区域', '延迟与合规。'], ['故障', 'DNS 挂了', '备用方案。']],
    api: [['协议', 'REST/GraphQL', '客户端需求。'], ['实时', command, 'WS/SSE/长轮询。'], ['版本', '兼容策略', '别 break client。'], ['限流', '保护后端', '公平使用。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const STAGE_HINTS = {
  1: '入门与方法论', 2: '可用性与一致性', 3: '高可用模式', 4: 'DNS 与 CDN', 5: '存储与发现',
  6: '应用层与负载', 7: '数据库扩展', 8: '数据建模优化', 9: '异步与队列', 10: '通信协议',
  11: 'API 与缓存层', 12: '性能反模式', 13: '资源隔离', 14: '监控体系', 15: '设计落地',
  16: '云设计模式', 17: '调度与管道', 18: '网关路由', 19: '网关聚合', 20: '资源整合',
  21: '可靠性模式', 22: '部署单元', 23: '熔断与补偿', 24: '安全边界', 25: '入口治理',
};

const LABEL_OVERRIDES = {
  'What is System Design?': {
    heading: '什么是系统设计：从模糊需求到可落地架构',
    subheading: '不是画框图炫技，而是澄清约束、估算规模、迭代权衡。',
    scene: '面试题「设计 Twitter」——若直接画微服务必挂。先问 DAU、读写比、延迟 SLA，再定组件与瓶颈。',
    core: '系统设计 = 需求澄清 + 容量估算 + 高层组件 + 深入瓶颈 + 权衡记录（CAP/一致性/成本）。',
    metaphor: '像盖楼：先问住多少人、几层、预算，再定结构；不是先画豪华大堂。',
    mistake: '跳过估算直接画 20 个微服务——复杂度爆炸且无数据支撑。',
    confusion: '系统设计≠背模式名词——模式是工具，要对应具体瓶颈。',
    experiment: '选「URL 短链」：写 1 页纸——QPS、存储、API、DB、缓存、单点故障各一条。',
    layout: 'timeline',
    diagram: ['① Clarify\n用户/功能', '② Estimate\nQPS/存储', '③ High-level\n组件图', '④ Deep dive\n瓶颈+权衡'],
  },
  'How to approach System Design?': {
    heading: '系统设计面试/项目：四步推进法',
    subheading: 'Clarify → Estimate → Design → Trade-offs，每步都有可交付物。',
    scene: '45 分钟面试：前 10 分钟问清 scope，15 分钟估算，15 分钟画架构，最后 5 分钟讲 CAP 取舍。',
    core: '推进法 = 控制节奏；先广后深，先读写路径后优化，先满足功能再谈扩展。',
    metaphor: '像急诊分诊——先稳定生命体征（核心功能），再专科检查（性能/一致性）。',
    mistake: '在 Clarify 阶段就争论 Redis 版本——层次错位浪费时间。',
    confusion: '估算不要求精确——数量级对即可（10^3 vs 10^6 QPS 架构不同）。',
    experiment: '计时练一题：每步写 bullet，到点必须进入下一步。',
    layout: 'cycle',
    diagram: ['Clarify', 'Estimate', 'Design', 'Trade-offs'],
  },
  'CAP Theorem': {
    heading: 'CAP 定理：分区发生时只能三选二',
    subheading: 'Consistency、Availability、Partition tolerance——分布式系统必面对的选择题。',
    scene: '双机房网络抖动，写请求能否两边都成功？选 AP 可能短暂不一致；选 CP 可能拒写保一致。',
    core: 'CAP = 网络分区(P)必然存在时，C 与 A 不可兼得；设计前先定业务更能容忍哪边。',
    metaphor: '像三角支架：Partition 是地面不平，C 和 A 是两根腿，只能先稳一根。',
    mistake: '宣称「我们 CAP 都要」——分区时必露馅。',
    confusion: 'CAP 的 C 是线性一致；很多业务用最终一致已够用（BASE）。',
    experiment: '画脑裂场景：主从断开时，客户端读到旧值还是写失败？写你的 CP/AP 选择。',
    layout: 'compare',
    diagram: ['CP\n强一致\n牺牲可用', 'Zookeeper/etcd', 'AP\n高可用\n最终一致', 'Cassandra/Dynamo'],
  },
  'Performance vs Scalability': {
    heading: '性能 vs 扩展性：单机更快还是更多机器',
    subheading: 'Performance 优化现有资源；Scalability 加资源仍线性提升。',
    scene: '接口 P99 500ms——加 CPU 可能变 200ms（性能）；QPS 1 万→10 万靠加无状态实例（扩展）。',
    core: '先 profile 找瓶颈；能水平扩展的架构比无限调优单机更可持续。',
    metaphor: '性能像把货车引擎换更强；扩展像加更多货车——货量上限不同。',
    mistake: '只堆硬件不拆单点/状态——加机器也扩不上去。',
    confusion: '延迟和吞吐可 trade-off——批处理提吞吐可能增延迟。',
    experiment: '同一服务：压测 vertical scale vs 3 副本 horizontal，对比 QPS/成本曲线。',
    layout: 'split',
    diagram: ['Performance\n调优单机', 'Profiler/索引/算法', 'Scalability\n水平扩展', '无状态+LB+分片'],
  },
  'Latency vs Throughput': {
    heading: '延迟 vs 吞吐：用户体验与系统容量',
    subheading: 'Latency 单次多快；Throughput 单位时间处理多少。',
    scene: '视频上传要低延迟反馈进度；日志采集要高吞吐批量写——指标优先级不同。',
    core: 'SLA 常写 P99 latency；容量规划看 throughput；优化手段可能冲突（批处理提吞吐增延迟）。',
    metaphor: '_latency 像外卖送达时间；throughput 像厨房每小时出餐数。',
    mistake: '只优化平均延迟忽略 P99——长尾毁掉体验。',
    confusion: '异步可提吞吐但增加感知延迟——产品要知情。',
    experiment: 'wrk 压测记录 avg vs P99 vs RPS；改 batch size 观察两者变化。',
    layout: 'compare',
    diagram: ['低延迟路径\n同步+缓存', 'P99 < 100ms', '高吞吐路径\n批处理+队列', 'RPS 最大化'],
  },
  'Availability vs Consistency': {
    heading: '可用性 vs 一致性：AP 还是 CP',
    subheading: '银行转账要 C；社交点赞可 A——业务决定架构。',
    scene: '分区时：继续服务可能读到旧余额（AP）；停写保一致用户看到错误（CP）。',
    core: 'PACELC 延伸：无分区时也要在 Latency 与 Consistency 间权衡。',
    metaphor: '像新闻发布：要绝对准确就等校对（C）；要快就先发再更正（A）。',
    mistake: '支付系统选 AP 不补偿——资金错误不可逆。',
    confusion: '高可用≠永远成功——可能是降级只读。',
    experiment: '列举系统三类操作：哪些必须强一致、哪些可最终一致、哪些可失败重试。',
    layout: 'fork',
    diagram: ['业务类型?', 'CP\n账务/库存', 'AP\nFeed/计数', '文档化选择'],
  },
  'Caching': {
    heading: '缓存：用空间换时间的分层加速',
    subheading: 'CDN、应用缓存、数据库缓存——层级越深命中越快，一致性问题越复杂。',
    scene: '热点商品详情 QPS 10 万，DB 扛不住。Redis 缓存 + CDN 静态图，回源率 <5%。',
    core: '缓存 = 读路径捷径；必须设计失效策略（TTL/主动删/写穿写回）。',
    metaphor: '像前台复印件——原件（DB）更新后要决定何时换复印件。',
    mistake: '无 TTL 永不过期——脏数据长期存在。',
    confusion: '缓存穿透/击穿/雪崩是三种不同故障——解法不同。',
    experiment: '实现 cache-aside：读 miss 回源写缓存；写 DB 后删 key，压测命中率。',
    layout: 'layer',
    diagram: ['CDN 边缘', '应用 Redis', '进程内 LRU', 'Database 源'],
  },
  'Microservices': {
    heading: '微服务：按业务能力拆分独立部署',
    subheading: '独立扩展与团队自治——代价是分布式治理与观测。',
    scene: '支付团队每周发版，不能等整个商城单体测试两周。支付服务独立部署、独立 DB。',
    core: '微服务 = 领域边界 + 独立数据 + API/事件契约 + 可观测 + 容错（超时/熔断）。',
    metaphor: '像城市分区——水电网要通，但各区有自己的市政，不是一栋无限加高的楼。',
    mistake: '没流量没团队先拆 20 个服务——运维和调试地狱。',
    confusion: '微服务≠容器——边界是业务，不是进程数。',
    experiment: '画单体模块图，标变更频率；选一个高变更模块论证是否值得先拆。',
    layout: 'split',
    diagram: ['Monolith\n单部署', '模块耦合', 'Microservices\n按领域', '独立 DB+发布'],
  },
  'Load Balancers': {
    heading: '负载均衡：把流量分到健康后端',
    subheading: 'L4 看 IP/端口；L7 看 URL/Header——入口高可用第一站。',
    scene: '3 台 API 实例，一台 OOM。LB health check 摘掉坏节点，用户无感。',
    core: 'LB = 分发算法（RR/least conn/consistent hash）+ 健康检查 + 会话保持（必要时）。',
    metaphor: '像银行叫号机——把客户均匀分到窗口，某窗口故障就暂停该号。',
    mistake: '无 health check——流量仍打到死节点。',
    confusion: 'LB≠反向代理——功能重叠，云产品常合一，概念要分清。',
    experiment: 'nginx upstream + max_fails；停一台 backend 观察 502 与恢复时间。',
    layout: 'vertical',
    diagram: ['Client', 'Load Balancer', 'App × N\nhealth check', 'Response'],
  },
  'Circuit Breaker': {
    heading: '熔断器：失败过多时快速失败保护系统',
    subheading: 'Closed → Open → Half-Open——防止重试风暴拖垮调用方。',
    scene: '推荐服务超时，订单服务若无限重试线程池耗尽。熔断打开直接降级默认推荐。',
    core: 'Circuit Breaker = 错误率/慢调用阈值 + 开路 + 半开探测恢复。',
    metaphor: '像电闸短路跳闸——先断电保护全屋，再人工合闸试探。',
    mistake: '熔断打开无 fallback——用户看到 500 而非降级体验。',
    confusion: '熔断≠重试——应配合有限重试+退避+熔断。',
    experiment: '用 resilience4j/hystrix 模拟下游 100% 失败，观察 open 与 half-open 日志。',
    layout: 'cycle',
    diagram: ['Closed\n正常调用', '失败率↑', 'Open\n快速失败', 'Half-open\n探测'],
  },
  'Content Delivery Networks': {
    heading: 'CDN：静态资源边缘缓存',
    subheading: '用户就近访问 PoP，减少源站带宽与延迟。',
    scene: '全球用户拉 2MB JS，源站在美西。CDN 边缘缓存，东京用户从东京 PoP 拿 20ms。',
    core: 'CDN = DNS 地理路由 + 边缘缓存 + 回源策略；适合静态/可缓存动态。',
    metaphor: '像连锁便利店——日用品放社区店，中央仓（源站）补货即可。',
    mistake: '把个性化 API 全走 CDN 还不设缓存规则——命中率零还增加复杂度。',
    confusion: 'Push vs Pull CDN——预推适合发布；Pull 适合长尾内容。',
    experiment: 'curl -I 对比直连源站 vs CDN URL 的 X-Cache: HIT/MISS。',
    layout: 'vertical',
    diagram: ['User 东京', 'CDN PoP 命中', '未命中回源', 'Origin 源站'],
  },
  'Domain Name System': {
    heading: 'DNS：域名到 IP 的分布式电话簿',
    subheading: '递归解析 + 层级缓存——全球互联网的入口路由。',
    scene: 'api.example.com 切新集群，改 A 记录但 TTL 300s——要规划缓存失效窗口。',
    core: 'DNS = 分层权威 + 递归 resolver + TTL 控制缓存；设计多区域 failover 必考虑 DNS。',
    metaphor: '像 114 查号台链——本地缓存 → ISP → 根 → TLD → 权威。',
    mistake: 'TTL 86400 做紧急切换——全球生效要等一天。',
    confusion: 'DNS 负载均衡 vs 应用 LB——DNS 粗粒度，健康检查弱。',
    experiment: 'dig +trace api.example.com；改 hosts 模拟 failover 理解 TTL 影响。',
    layout: 'vertical',
    diagram: ['Browser', 'Recursive DNS', 'Authoritative', 'A/AAAA 记录'],
  },
  'Sharding': {
    heading: '分片：水平切分数据突破单机容量',
    subheading: '选 shard key 决定均匀度与查询是否跨片。',
    scene: '订单表 10 亿行，单库磁盘满。按 user_id hash 分 16 片，每片 6250 万。',
    core: 'Sharding = 水平分区 + 路由层 + 跨片查询代价；热点 key 要单独设计。',
    metaphor: '像图书馆分馆——按姓氏首字母分馆，查全库要跑多个分馆。',
    mistake: '用单调递增 id 做 shard——新数据全打最后一片热点。',
    confusion: '分片≠复制——分片扩容量；复制扩读/高可用。',
    experiment: '纸面设计：16 shard，user_id 查询 O(1) 路由；range 查询要 scatter-gather 成本。',
    layout: 'hub',
    diagram: ['Router', 'Shard 0', 'Shard 1', 'Shard N'],
  },
  'Message Queues': {
    heading: '消息队列：异步解耦与削峰填谷',
    subheading: 'Producer 不等待 Consumer——峰值进队列慢慢消费。',
    scene: '秒杀 1 秒 50 万下单请求，同步写 DB 崩。写 MQ，worker 按 DB 能力消费。',
    core: 'MQ = 缓冲 + 解耦 + 至少一次语义；需幂等消费与死信处理。',
    metaphor: '像快递分拣中心——寄件不等收件人在家，站点暂存再派送。',
    mistake: '队列无界堆积不告警——磁盘满全站停。',
    confusion: 'MQ≠Event log——队列常删消息；Kafka 可长期保留 replay。',
    experiment: 'RabbitMQ/SQS：发 1000 条，停 consumer 看 depth 告警，恢复后验证无丢（at-least-once+幂等）。',
    layout: 'vertical',
    diagram: ['Producer', 'Queue/Topic', 'Consumer Group', 'Ack/Retry'],
  },
  'CQRS': {
    heading: 'CQRS：读写模型分离',
    subheading: '写模型优化一致；读模型优化查询——适合复杂域与读多写少。',
    scene: '订单写入规范化表；报表读 denormalized 视图，避免 join 拖垮 OLTP。',
    core: 'CQRS = Command 改 write model；Query 走 read model；同步靠事件或异步投影。',
    metaphor: '像仓库进货（写）和门店陈列（读）分开——各优化各的流程。',
    mistake: '小 CRUD 强上 CQRS——复杂度不值。',
    confusion: 'CQRS 常配 Event Sourcing 但不必须——可以 DB 双写投影。',
    experiment: '画订单 CQRS：写 API → 事件 → 投影到 Elasticsearch 搜索列表。',
    layout: 'split',
    diagram: ['Write Model\n规范化', 'Command API', 'Read Model\n投影', 'Query API 快'],
  },
  'Event Sourcing': {
    heading: '事件溯源：状态变更存为事件流',
    subheading: '当前状态 = 重放事件；天然审计与时间旅行。',
    scene: '账户余额不直接 UPDATE，存 Deposit/Withdraw 事件；余额由事件聚合算出。',
    core: 'Event Sourcing = append-only event log + 聚合 + snapshot 优化重放。',
    metaphor: '像银行流水——余额是流水算出来的，不是改一个数字。',
    mistake: '事件 schema 无版本——升级后旧事件无法 replay。',
    confusion: 'Event Sourcing≠Event-driven——前者存状态方式，后者通信风格。',
    experiment: '实现内存 EventStore：append 3 事件，replay 得状态；加 snapshot 减 replay 量。',
    layout: 'vertical',
    diagram: ['Command', 'Append Event', 'Event Store', 'Replay → State'],
  },
  'Gatekeeper': {
    heading: 'Gatekeeper：统一入口的安全与策略',
    subheading: '鉴权、限流、路由在网关层完成——后端服务专注业务。',
    scene: '移动端/Web/第三方 API 都要 OAuth——在 Gatekeeper 验 token，内网服务信任 mTLS。',
    core: 'Gatekeeper = 横切关注点集中 + 最小暴露面 + 策略可统一变更。',
    metaphor: '像小区门禁——访客在一处登记，单元门不再各自装不同系统。',
    mistake: '网关里写业务逻辑——又成新单体。',
    confusion: 'Gatekeeper vs API Gateway vs BFF——粒度与客户端类型不同。',
    experiment: '画请求路径：Client → Gatekeeper（auth/rate limit）→ 内网服务。',
    layout: 'layer',
    diagram: ['Client', 'Gatekeeper\nauth/limit', 'Internal API', 'Services'],
  },
  Monitoring: {
    heading: '监控：让系统可度量、可告警、可复盘',
    subheading: 'Metrics/Logs/Traces + SLO——不是上线后才开始。',
    scene: '用户说慢但无 ERROR。P99 latency metric 升、trace 指向 DB，log 有 slow query。',
    core: 'Monitoring = SLI 选型 + SLO 目标 + 告警路由 + dashboard；设计阶段就要埋点。',
    metaphor: '像汽车仪表盘——没油表才加油是赌博。',
    mistake: '告警太多 on-call 麻木——要 SLO burn rate 少而准。',
    confusion: '监控≠可观测性——后者能探索未知问题。',
    experiment: '定义一个 SLI（如 API 成功率）和 SLO（99.9%），写一条 burn rate 告警规则。',
    layout: 'grid',
    diagram: ['Metrics', 'Logs', 'Traces', 'SLO · Alert · Dashboard'],
  },
};

function buildDiagram(slug, layout, title, ct, note) {
  const p = `sd-${slug}`;
  const lines = [text(`${p}-title`, 70, 10, title, 23, 600)];
  const parts = (Array.isArray(ct) ? ct : String(ct).split('\n')).filter(Boolean);

  switch (layout) {
    case 'compare':
      lines.push(
        box(`${p}-l`, 48, 68, 300, 190, palette.red),
        text(`${p}-lt`, 68, 88, parts[0] || '方案 A', 16, 260),
        text(`${p}-lb`, 68, 124, parts[1] || '', 15, 260),
        box(`${p}-r`, 412, 68, 300, 190, palette.green),
        text(`${p}-rt`, 432, 88, parts[2] || '方案 B', 16, 260),
        text(`${p}-rb`, 432, 124, parts[3] || '', 15, 260),
        arrow(`${p}-a`, 354, 158, 50, 0, '#0b7285'),
      );
      break;
    case 'vertical':
      for (let i = 0; i < Math.min(4, parts.length); i++) {
        const y = 56 + i * 76;
        lines.push(
          box(`${p}-s${i}`, 240, y, 320, 56, [palette.cyan, palette.yellow, palette.green, palette.blue][i]),
          text(`${p}-st${i}`, 260, y + 16, parts[i], 15, 280),
        );
        if (i < parts.length - 1) arrow(`${p}-a${i}`, 400, y + 58, 0, 14);
      }
      break;
    case 'hub':
      lines.push(
        box(`${p}-c`, 280, 150, 240, 72, palette.yellow),
        text(`${p}-ct`, 300, 170, parts[3] || parts[parts.length - 1] || '中心', 15, 200),
        box(`${p}-n1`, 48, 72, 180, 64, palette.blue),
        text(`${p}-n1t`, 68, 90, parts[0] || 'A', 15, 140),
        box(`${p}-n2`, 572, 72, 180, 64, palette.green),
        text(`${p}-n2t`, 592, 90, parts[1] || 'B', 15, 140),
        box(`${p}-n3`, 48, 248, 180, 64, palette.purple),
        text(`${p}-n3t`, 68, 266, parts[2] || 'C', 15, 140),
        arrow(`${p}-a1`, 232, 104, 44, 64),
        arrow(`${p}-a2`, 572, 104, -44, 64),
        arrow(`${p}-a3`, 232, 280, 44, -64),
      );
      break;
    case 'grid':
      lines.push(
        box(`${p}-g1`, 48, 72, 200, 96, palette.blue),
        text(`${p}-g1t`, 68, 92, parts[0] || 'A', 15, 160),
        box(`${p}-g2`, 280, 72, 200, 96, palette.yellow),
        text(`${p}-g2t`, 300, 92, parts[1] || 'B', 15, 160),
        box(`${p}-g3`, 512, 72, 200, 96, palette.green),
        text(`${p}-g3t`, 532, 92, parts[2] || 'C', 15, 160),
        box(`${p}-g4`, 140, 200, 480, 72, palette.gray),
        text(`${p}-g4t`, 160, 220, parts[3] || parts.slice(3).join(' · '), 15, 440),
      );
      break;
    case 'layer':
      for (let i = 0; i < Math.min(4, parts.length); i++) {
        lines.push(
          box(`${p}-l${i}`, 120, 56 + i * 58, 520, 48, [palette.cyan, palette.yellow, palette.green, palette.purple][i]),
          text(`${p}-lt${i}`, 140, 70 + i * 58, parts[i], 15, 480),
        );
      }
      break;
    case 'stack':
      for (let i = 0; i < Math.min(5, parts.length); i++) {
        lines.push(
          box(`${p}-s${i}`, 200 + i * 10, 260 - i * 42, 360, 38, [palette.cyan, palette.blue, palette.yellow, palette.green, palette.purple][i]),
          text(`${p}-st${i}`, 220 + i * 10, 270 - i * 42, parts[i], 14, 320),
        );
      }
      break;
    case 'split':
      lines.push(
        box(`${p}-left`, 48, 80, 320, 180, palette.red),
        text(`${p}-left-t`, 68, 100, parts[0] || '左', 16, 280),
        text(`${p}-left-b`, 68, 140, parts[1] || '', 15, 280),
        box(`${p}-right`, 432, 80, 320, 180, palette.green),
        text(`${p}-right-t`, 452, 100, parts[2] || '右', 16, 280),
        text(`${p}-right-b`, 452, 140, parts[3] || '', 15, 280),
      );
      break;
    case 'cycle':
      lines.push(
        box(`${p}-c1`, 72, 120, 130, 64, palette.cyan),
        text(`${p}-c1t`, 92, 138, parts[0] || '1', 15, 90),
        box(`${p}-c2`, 280, 120, 130, 64, palette.yellow),
        text(`${p}-c2t`, 300, 138, parts[1] || '2', 15, 90),
        box(`${p}-c3`, 488, 120, 130, 64, palette.green),
        text(`${p}-c3t`, 508, 138, parts[2] || '3', 15, 90),
        box(`${p}-c4`, 280, 240, 130, 64, palette.purple),
        text(`${p}-c4t`, 300, 258, parts[3] || '4', 15, 90),
        arrow(`${p}-a1`, 204, 152, 70, 0),
        arrow(`${p}-a2`, 412, 152, 70, 0),
        arrow(`${p}-a3`, 553, 184, -180, 48),
        arrow(`${p}-a4`, 280, 184, -70, -48),
      );
      break;
    case 'timeline':
      for (let i = 0; i < Math.min(5, parts.length); i++) {
        const x = 48 + i * 148;
        lines.push(
          box(`${p}-t${i}`, x, 120, 120, 56, [palette.cyan, palette.blue, palette.yellow, palette.green, palette.purple][i]),
          text(`${p}-tt${i}`, x + 12, 136, parts[i], 14, 96),
        );
        if (i < parts.length - 1) arrow(`${p}-ta${i}`, x + 124, 148, 20, 0);
      }
      break;
    case 'fork':
      lines.push(
        box(`${p}-start`, 300, 56, 200, 52, palette.cyan),
        text(`${p}-start-t`, 320, 72, parts[0] || '决策点', 15, 160),
        box(`${p}-yes`, 80, 168, 220, 72, palette.green),
        text(`${p}-yes-t`, 100, 186, parts[1] || '路径 A', 15, 180),
        box(`${p}-no`, 500, 168, 220, 72, palette.red),
        text(`${p}-no-t`, 520, 186, parts[2] || '路径 B', 15, 180),
        box(`${p}-end`, 280, 280, 240, 52, palette.yellow),
        text(`${p}-end-t`, 300, 296, parts[3] || '结果', 15, 200),
        arrow(`${p}-a1`, 340, 112, -180, 48),
        arrow(`${p}-a2`, 460, 112, 180, 48),
        arrow(`${p}-a3`, 190, 244, 140, 32),
        arrow(`${p}-a4`, 610, 244, -140, 32),
      );
      break;
    case 'loop':
      lines.push(
        box(`${p}-code`, 48, 100, 140, 72, palette.blue),
        text(`${p}-code-t`, 68, 118, parts[0] || 'Req', 15, 100),
        box(`${p}-ci`, 220, 100, 140, 72, palette.yellow),
        text(`${p}-ci-t`, 240, 118, parts[1] || 'Design', 15, 100),
        box(`${p}-cd`, 392, 100, 140, 72, palette.green),
        text(`${p}-cd-t`, 412, 118, parts[2] || 'Build', 15, 100),
        box(`${p}-mon`, 564, 100, 140, 72, palette.purple),
        text(`${p}-mon-t`, 584, 118, parts[3] || 'Observe', 15, 100),
        arrow(`${p}-a1`, 192, 136, 24, 0),
        arrow(`${p}-a2`, 364, 136, 24, 0),
        arrow(`${p}-a3`, 536, 136, 24, 0),
        arrow(`${p}-a4`, 634, 176, 0, 80),
        arrow(`${p}-a5`, 634, 256, -520, 0),
        arrow(`${p}-a6`, 114, 256, 0, -80),
      );
      break;
    case 'matrix':
      lines.push(
        box(`${p}-m11`, 120, 72, 180, 64, palette.blue),
        text(`${p}-m11t`, 140, 90, parts[0] || 'Q1', 15, 140),
        box(`${p}-m12`, 340, 72, 180, 64, palette.yellow),
        text(`${p}-m12t`, 360, 90, parts[1] || 'Q2', 15, 140),
        box(`${p}-m21`, 120, 160, 180, 64, palette.green),
        text(`${p}-m21t`, 140, 178, parts[2] || 'Q3', 15, 140),
        box(`${p}-m22`, 340, 160, 180, 64, palette.purple),
        text(`${p}-m22t`, 360, 178, parts[3] || 'Q4', 15, 140),
      );
      break;
    default:
      lines.push(
        box(`${p}-main`, 180, 100, 440, 160, palette.yellow),
        text(`${p}-main-t`, 200, 120, parts.join('\n'), 16, 400),
      );
  }
  lines.push(text(`${p}-note`, 90, 320, note.slice(0, 56), 16, 560));
  return scene(slug, lines);
}

function specForNode(node, index) {
  const cat = sdCategory(node.label);
  const c = sdCategoryCopy[cat];
  const command = sdCommands[node.label] || node.label;
  const hint = STAGE_HINTS[node.stage] || node.stageEn;
  const layout = CAT_LAYOUT[cat] || LAYOUTS[index % LAYOUTS.length];

  const heading = `${node.label}：${sdHeading[cat]}`;
  const subheading = `Stage ${node.stage}（${hint}）：搞懂 ${node.label} 在 ${c.subject} 里解决什么问题。`;
  const scene = `你在系统设计「${hint}」阶段遇到 ${node.label}。典型场景：${c.action}，否则 ${c.risk}。`;
  const core = `${node.label} = ${command} → ${c.action} → ${c.result}（领域：${c.subject}）`;
  const metaphor = c.metaphor;
  const mistake = `常见坑：${c.risk}；对 ${node.label} 要警惕脱离 ${hint} 上下文硬套方案。`;
  const confusion = `${node.label} 与相邻节点边界：负责「${c.action.slice(0, 20)}…」，不是整张架构图的全部。`;
  const experiment = `围绕 \`${command}\` 做一页纸设计：组件、数据流、瓶颈与权衡各写一条。`;

  const diagramMap = {
    compare: [`无 ${node.label}`, c.risk.slice(0, 22), `用 ${node.label}`, c.result.slice(0, 22)],
    vertical: [`Client/需求`, command, node.label, c.result.slice(0, 16)],
    hub: [`上游`, `下游`, `旁路/监控`, node.label],
    grid: [node.label, command, hint.slice(0, 8), c.subject.slice(0, 10)],
    layer: [`入口`, `${node.label}`, '处理层', '存储/响应'],
    stack: [`用户请求`, command, node.label, c.result.slice(0, 12), '观测/反馈'],
    split: [`未优化\n${node.label}`, c.risk.slice(0, 18), `优化后\n${node.label}`, c.result.slice(0, 18)],
    cycle: ['需求', '设计', '验证', '迭代'],
    timeline: ['① Clarify', `② ${command.slice(0, 10)}`, '③ 组件', '④ 权衡'],
    fork: [`需要 ${node.label}?`, 'Yes: 深度用', 'No: 简化', 'ADR 记录'],
    loop: ['需求', '估算', '架构', '复盘'],
    matrix: [`${node.label}\n收益`, `${node.label}\n复杂度`, '业务匹配', '推荐场景'],
  };

  return {
    id: node.id,
    label: node.label,
    slug: slugify(node.label, node.id),
    heading,
    subheading,
    scene,
    core,
    metaphor,
    mistake,
    confusion,
    experiment,
    layout,
    diagram: diagramMap[layout] || [node.label, command, '设计', '验证'],
    route: sdRoute(cat, command),
  };
}

const nodes = loadNodes();
const usedSlugs = new Set();

const allSpecs = nodes.map((node, index) => {
  let spec = specForNode(node, index);
  const ov = LABEL_OVERRIDES[node.label];
  if (ov) spec = { ...spec, ...ov, slug: ov.slug ?? spec.slug };
  if (usedSlugs.has(spec.slug)) spec.slug = `${spec.slug}-${node.id.slice(0, 6)}`;
  usedSlugs.add(spec.slug);
  spec.id = node.id;
  spec.label = node.label;
  return spec;
});

if (allSpecs.length !== 147) {
  console.error('Expected 147 nodes, got', allSpecs.length);
  process.exit(1);
}

const diagramEntries = allSpecs.map((s) =>
  buildDiagram(
    s.slug,
    s.layout,
    `${s.heading.split('：')[0]} · ${s.label.length > 22 ? s.label.slice(0, 22) : s.label}`,
    s.diagram,
    s.metaphor,
  ),
).join('\n');

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
    rawDiagram: SYSTEM_DESIGN_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const SYSTEM_DESIGN_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const SYSTEM_DESIGN_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/system-design/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', allSpecs.length, 'nodes,', usedSlugs.size, 'unique diagram slugs');
