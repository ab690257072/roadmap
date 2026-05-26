#!/usr/bin/env node
/**
 * Generates src/roadmaps/backend/teaching-handcrafted.ts
 * 194 nodes — unique Chinese copy + semantic Excalidraw per node.
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
  const data = readFileSync('src/roadmaps/backend/data.ts', 'utf8');
  const stagesBlock = data.slice(
    data.indexOf('export const stages = ['),
    data.indexOf('];\n\nexport const tutorials'),
  );
  const nodes = [];
  let stageIndex = 0;
  for (const groupMatch of stagesBlock.matchAll(
    /"id": "(group-[^"]+)"[\s\S]*?"zh": "([^"]+)"[\s\S]*?"nodes": \[([\s\S]*?)\n    \]/g,
  )) {
    stageIndex += 1;
    const groupId = groupMatch[1];
    const stageZh = groupMatch[2];
    const groupBody = groupMatch[3];
    for (const m of groupBody.matchAll(
      /"id": "([^"]+)",\s*\n\s*"label": "([^"]+)",\s*\n\s*"zh": "([^"]+)"/g,
    )) {
      nodes.push({ id: m[1], label: m[2], zh: m[3], groupId, stage: stageIndex, stageZh });
    }
  }
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

const commandHints = {
  Introduction: 'browser → DNS → server → response',
  'Frontend Basics': 'HTML + CSS + JS 能读懂即可',
  HTML: '语义标签 + 表单 + 链接',
  CSS: '选择器 + 盒模型 + 布局',
  'How does the internet work?': 'client → router → server',
  'What is HTTP?': 'GET /index.html HTTP/1.1',
  'What is Domain Name?': 'api.example.com',
  'DNS and how it works?': 'domain → DNS → IP',
  'What is hosting?': '代码部署到服务器对外服务',
  HTTPS: 'HTTP + TLS 加密通道',
  'HTTP Caching': 'Cache-Control / ETag / 304',
  'Browsers and how they work?': 'HTML/CSS/JS → 渲染 → 网络请求',
  Python: 'def handler(): return json',
  JavaScript: 'export async function handler(req)',
  Java: 'Spring Boot @RestController',
  Go: 'func Handler(w http.ResponseWriter, r *http.Request)',
  PHP: '<?php echo json_encode($data);',
  Ruby: 'class UsersController < ApplicationController',
  'C#': 'app.MapGet("/users", () => users);',
  Rust: 'async fn handler() -> Json<User>',
  Git: 'git add → commit → push',
  GitHub: 'remote repo + PR + CI',
  PostgreSQL: 'SELECT * FROM users WHERE id = $1',
  MySQL: 'InnoDB + replication + indexes',
  Redis: 'GET user:1 / SETEX session 3600',
  Docker: 'docker build → run container',
  Kubernetes: 'Deployment + Service + Pod',
  Nginx: 'reverse proxy → upstream app',
  REST: 'GET /users/{id}',
  GraphQL: 'query { user(id:1){ name } }',
  JWT: 'header.payload.signature',
  OAuth: 'authorize → token → API',
  'CI / CD': 'commit → test → deploy',
  Kafka: 'producer → topic → consumer',
  Microservices: 'service A API → service B API',
  Monolith: 'single deployable app modules',
  Elasticsearch: 'index document → search query',
  WebSockets: 'ws://host/channel persistent',
  MongoDB: 'db.users.find({ status: "active" })',
  Observability: 'logs + metrics + traces',
  Monitoring: 'metrics → alert → on-call',
  ORMs: 'User.find(id) → SQL',
  'N+1 Problem': '1 query + N lazy loads',
  Migrations: 'V001__create_users.sql',
  bcrypt: 'hash(password, cost)',
  'OWASP Risks': 'injection / broken auth / SSRF',
};

const categoryCopy = {
  internet: { subject: '互联网与 Web 基础', action: '理解请求如何从浏览器到达服务器', result: '读文档和排障时不迷失在网络层', risk: '把 DNS、TCP、HTTP 问题混为一谈', metaphor: '互联网像寄信系统：域名是地址，HTTP 是信封格式，服务器是收信人。' },
  language: { subject: '后端语言与运行时', action: '用一门语言写出可运行的服务端程序', result: '能读业务代码并做小功能', risk: '语言语法会了却不会组织项目结构', metaphor: '后端语言像工具箱：先选一把顺手的锤子，再学怎么盖房子。' },
  git: { subject: '版本协作', action: '用分支、提交和远程仓库协作开发', result: '代码变更有历史、可回滚、可审查', risk: '直接在 main 上改且不写 commit message', metaphor: 'Git 像游戏存档：每次 commit 是一个存档点，分支是平行时间线。' },
  database: { subject: '关系型数据存储', action: '用表、索引和事务组织业务数据', result: '读写数据一致且可查询', risk: '没索引就全表扫，或忽略事务边界', metaphor: '关系型数据库像 Excel 超级版：表是 sheet，行是记录，SQL 是筛选公式。' },
  api: { subject: '对外接口', action: '设计稳定的 HTTP/JSON 契约', result: '前后端和第三方能可靠集成', risk: '接口无版本、无错误码、无文档', metaphor: 'API 像餐厅菜单：菜名稳定、价格清楚、缺货有说明。' },
  auth: { subject: '身份认证', action: '证明调用者是谁', result: '服务端能识别用户或客户端', risk: 'token 明文传输或不过期', metaphor: '认证像进楼刷卡：先证明你是你，还没决定你能进哪些房间。' },
  security: { subject: '应用安全', action: '识别威胁并加固输入、传输和存储', result: '常见漏洞有基本防护', risk: '只防 SQL 注入，忽略越权和密钥泄露', metaphor: '安全像多层门禁：网络、应用、数据每一层都要上锁。' },
  cache: { subject: '缓存加速', action: '把热点数据放到更快的一层', result: '延迟下降、数据库压力减轻', risk: '缓存和数据库不一致却无失效策略', metaphor: '缓存像桌面便签：常用信息放手边，但要记得什么时候撕掉重写。' },
  webserver: { subject: 'Web 服务器与反向代理', action: '把外部请求转发到应用进程', result: '静态资源、TLS、负载分担有统一入口', risk: 'Nginx 配错 upstream 导致 502', metaphor: 'Web 服务器像前台接待：外面只看到一个门口，里面可能很多房间。' },
  ai: { subject: 'AI 辅助开发', action: '把 LLM 能力嵌入开发或产品流程', result: '知道何时用 AI、如何控成本和质量', risk: '把模型输出当真相不做校验', metaphor: 'AI 像高级实习生：产出快，但仍要 code review。' },
  testing: { subject: '测试与交付', action: '用自动化验证行为并持续发布', result: '改动可重复验证、可回滚', risk: '没有 CI 就手工上线', metaphor: 'CI/CD 像工厂质检线：每个零件测完再出厂。' },
  container: { subject: '容器与编排', action: '把应用和环境打包成可移植单元', result: '开发、测试、生产环境一致', risk: '镜像过大、以 root 运行、没资源限制', metaphor: '容器像标准化集装箱：里面装什么都能用同一套吊装流程。' },
  messaging: { subject: '消息与事件', action: '用队列/主题解耦服务', result: '异步任务更可靠、峰值可削', risk: '消息重复消费没有幂等', metaphor: '消息队列像快递中转站：寄件和取件不必同时发生。' },
  architecture: { subject: '系统架构', action: '按业务边界拆分或整合服务', result: '扩展和维护成本可控', risk: '没流量就拆微服务', metaphor: '架构像城市规划：单体是独栋，微服务是街区，先看清人口再分区。' },
  search: { subject: '搜索与检索', action: '建立索引并执行全文/聚合查询', result: '大数据量下仍能快速查找', risk: '把 ES 当主数据库用', metaphor: '搜索引擎像图书馆检索机：书在架上，索引告诉你去哪一格。' },
  realtime: { subject: '实时通信', action: '建立推送或长连接通道', result: '客户端低延迟收到变化', risk: '长连接无心跳和重连', metaphor: '实时通道像对讲机：连着才能即时说话。' },
  nosql: { subject: '非关系型存储', action: '按文档/键值/图模型存数据', result: '特定场景下读写更灵活', risk: '所有数据都塞进 MongoDB', metaphor: 'NoSQL 像不同形状储物柜：不是万能，但某些东西更好放。' },
  ops: { subject: '运维与可观测性', action: '监控、日志、告警和故障响应', result: '线上问题能发现、能定位', risk: '只有报错日志，没有指标和 trace', metaphor: '运维像汽车仪表盘：速度、油量、故障灯都要看。' },
  scale: { subject: '扩展与高可用', action: '通过副本、分片、限流支撑更大流量', result: '流量上涨时系统仍可用', risk: '垂直扩容到天花板才想水平扩展', metaphor: '扩展像开分店：单店忙不过来就复制模式，不是把一张桌子无限加长。' },
  meta: { subject: '学习路径', action: '按阶段推进并做项目巩固', result: '知道下一步该学什么', risk: '只收藏路线图不动手', metaphor: '路线图像地铁图：知道换乘站，但得自己上车练。' },
};

function category(label, groupId) {
  if (/internet|HTTP|DNS|Domain|hosting|HTTPS|Browsers|HTML|CSS|Frontend Basics|Introduction|HTTP Caching/i.test(label)) return 'internet';
  if (/Python|JavaScript|Java|Go|PHP|Ruby|C#|Rust|Pick a Backend|Beginner Project|Intermediate Project|Hashing|Learn one language/i.test(label)) return 'language';
  if (/Git|GitHub|GitLab|Copilot|Version Control|Code Reviews/i.test(label)) return 'git';
  if (/PostgreSQL|MySQL|MariaDB|SQLite|Oracle|MS SQL|Relational|Normalization|Transactions|ACID|ORMs|Migrations|N\+1|Database Indexes|More about Databases|Scaling Databases|Data Replication|Sharding|CAP Theorem/i.test(label)) return 'database';
  if (/API|REST|GraphQL|gRPC|SOAP|JSON APIs|Open API|Learn about APIs/i.test(label)) return 'api';
  if (/Auth|SAML|JWT|OAuth|OpenID|Token|Cookie Based|Basic Authentication/i.test(label)) return 'auth';
  if (/Security|OWASP|CORS|CSP|SSL|TLS|MD5|SHA|bcrypt|scrypt|Server Security|Web Security/i.test(label)) return 'security';
  if (/Redis|Memcached|Caching|Server Side/i.test(label)) return 'cache';
  if (/Nginx|Apache|Caddy|Web Server|MS IIS|Learn about Web Servers/i.test(label)) return 'webserver';
  if (/AI|LLM|OpenAI|Anthropic|Gemini|Copilot|Cursor|Claude|Prompt|RAG|Embeddings|Agents|MCP|Antigravity/i.test(label)) return 'ai';
  if (/Testing|CI \/ CD|Unit Testing|Integration Testing|Functional Testing/i.test(label)) return 'testing';
  if (/Docker|Kubernetes|LXC|Container|Serverless/i.test(label)) return 'container';
  if (/Kafka|RabbitMQ|Message Brokers|Integration Patterns/i.test(label)) return 'messaging';
  if (/Microservices|Monolith|Architectural|SOA|System Design|Twelve Factor|Design & Architecture|Building For Scale|Circuit Breaker|Graceful|Backpressure|Throttling|Service Mesh/i.test(label)) return 'architecture';
  if (/Elasticsearch|Solr|Search Engines|ClickHouse/i.test(label)) return 'search';
  if (/WebSockets|Server Sent|Realtime|Real-Time|Long \/ Short Polling|Streaming/i.test(label)) return 'realtime';
  if (/MongoDB|Cassandra|DynamoDB|Firebase|CouchDB|Neo4j|NoSQL|Document DBs|Graph DBs|Key-Value|Column DBs|Time Series|Influx|Timescale|RethinkDB|ScyllaDB|AWS Neptune|DGraph/i.test(label)) return 'nosql';
  if (/Monitoring|Observability|Telemetry|Instrumentation|Profiling|DevOps|roadmap\.sh|Backend|Advanced Backend|Skills|Visit Beginner|Find the detailed|Click to visit|Have a look|You may never need|At this point/i.test(label)) return groupId === 'group-meta' ? 'meta' : 'ops';
  const byGroup = {
    'group-foundation': 'internet', 'group-language': 'language', 'group-git': 'git', 'group-rel-db': 'database',
    'group-api': 'api', 'group-auth': 'auth', 'group-security': 'security', 'group-cache': 'cache',
    'group-webserver': 'webserver', 'group-ai': 'ai', 'group-testing': 'testing', 'group-db-advanced': 'scale',
    'group-container': 'container', 'group-message': 'messaging', 'group-architecture': 'architecture',
    'group-search': 'search', 'group-realtime': 'realtime', 'group-nosql': 'nosql', 'group-ops': 'ops', 'group-meta': 'meta',
  };
  return byGroup[groupId] || 'architecture';
}

function diagramKind(label, cat, i) {
  const rules = [
    [/Introduction|Backend$|Advanced Backend|Skills|roadmap\.sh/i, 'journey'],
    [/internet|HTTP|HTTPS|hosting/i, 'request'],
    [/DNS|Domain Name/i, 'internet'],
    [/Browsers|Frontend Basics/i, 'browser'],
    [/HTML|CSS/i, 'browser'],
    [/Python|JavaScript|Java|Go|PHP|Ruby|C#|Rust|Pick a Backend Language/i, 'language'],
    [/Project Ideas|Learn one language/i, 'journey'],
    [/GitHub|GitLab|Version Control|Repo Hosting/i, 'git'],
    [/Git(?!Hub)/i, 'git'],
    [/Copilot|AI Assisted|Cursor|Claude|Antigravity/i, 'ai'],
    [/OpenAI|Anthropic|Gemini|LLM|Prompt|RAG|Embeddings|Agents|MCP|AI Providers|Structured Outputs|Function Calling|Vectors/i, 'ai'],
    [/PostgreSQL|MySQL|MariaDB|SQLite|Oracle|MS SQL|Relational Databases/i, 'datastore'],
    [/Normalization|Transactions|ACID|Database Indexes|Migrations|ORMs|N\+1/i, 'query'],
    [/Sharding|Scaling Databases|Data Replication|CAP Theorem/i, 'scale'],
    [/REST|JSON APIs|Learn about APIs/i, 'api'],
    [/GraphQL|gRPC|SOAP|API Styles|Open API/i, 'compare'],
    [/API Security/i, 'shield'],
    [/JWT|OAuth|OpenID|Token|Cookie|SAML|Basic Authentication|Authentication/i, 'auth'],
    [/OWASP|Web Security|Server Security|CORS|CSP|SSL|TLS/i, 'shield'],
    [/MD5|SHA|bcrypt|scrypt|Hashing/i, 'hash'],
    [/Redis|Memcached|Caching|HTTP Caching/i, 'cache'],
    [/Nginx|Apache|Caddy|MS IIS|Web Server|Learn about Web Servers/i, 'proxy'],
    [/CI \/ CD|Testing|Unit Testing|Integration Testing|Functional Testing/i, 'pipeline'],
    [/Docker|LXC|Containerization/i, 'container'],
    [/Kubernetes|Container Orchestration|Service Mesh/i, 'orchestration'],
    [/Serverless/i, 'container'],
    [/Kafka|RabbitMQ|Message Brokers/i, 'queue'],
    [/Integration Patterns/i, 'queue'],
    [/Microservices|Monolith|Architectural|SOA|Twelve Factor|Design & Architecture/i, 'pattern'],
    [/Circuit Breaker|Graceful|Backpressure|Throttling|Building For Scale/i, 'scale'],
    [/Elasticsearch|Solr|Search Engines|ClickHouse/i, 'search'],
    [/WebSockets|Server Sent|Realtime|Real-Time|Long \/ Short Polling|Streaming/i, 'stream'],
    [/MongoDB|Document DBs|CouchDB|Firebase|DynamoDB/i, 'document'],
    [/Neo4j|Graph DBs|AWS Neptune|DGraph/i, 'graph'],
    [/Key-Value|Redis$/i, 'kv'],
    [/Cassandra|Column DBs|ScyllaDB/i, 'document'],
    [/Time Series|Influx|TimescaleDB/i, 'observe'],
    [/Monitoring|Observability|Telemetry|Instrumentation|Profiling Performance/i, 'observe'],
    [/DevOps|Failure Modes|Mitigation Strategies|Basic Operations/i, 'observe'],
  ];
  for (const [re, kind] of rules) {
    if (re.test(label)) return kind;
  }
  const fallbacks = ['request', 'datastore', 'api', 'pattern', 'observe', 'queue', 'language', 'shield', 'cache', 'proxy'];
  return fallbacks[i % fallbacks.length];
}

const KIND_LAYOUT = {
  journey: 'timeline', request: 'vertical', internet: 'vertical', browser: 'grid', language: 'vertical',
  git: 'loop', datastore: 'vertical', query: 'vertical', api: 'vertical', compare: 'compare', auth: 'vertical',
  shield: 'layer', hash: 'vertical', cache: 'layer', proxy: 'vertical', pipeline: 'timeline', container: 'vertical',
  orchestration: 'hub', queue: 'vertical', pattern: 'split', search: 'vertical', stream: 'vertical',
  document: 'vertical', graph: 'hub', kv: 'vertical', observe: 'grid', scale: 'vertical', ai: 'vertical',
};

const LAYOUTS = ['compare', 'vertical', 'hub', 'grid', 'layer', 'stack', 'split', 'cycle', 'timeline', 'fork', 'loop', 'matrix'];

function routeFor(label, cat, command) {
  const routes = {
    internet: [['看路径', '请求从哪来到哪去', '先画 client → DNS → server。'], ['读协议', command, 'HTTP/HTTPS 是应用层契约。'], ['看缓存', '浏览器/CDN/服务端', '缓存影响性能和一致性。'], ['小实验', 'curl 或 DevTools Network', '亲眼看到请求响应。']],
    language: [['选一门', '先深入一门再扩展', 'Python/Go/Node 都可起步。'], ['跑通最小服务', command, 'hello world API 或 CLI。'], ['学项目结构', '路由/配置/依赖', '别只写单文件。'], ['做小项目', 'CRUD + 数据库', '项目比刷语法更重要。']],
    git: [['本地存档', 'status → add → commit', '每次改动有快照。'], ['远程协作', command, 'push/PR/review 是团队节奏。'], ['分支策略', 'feature/fix/release', 'main 保持可发布。'], ['遇错不慌', 'log/reflog/stash', '历史可以救你。']],
    database: [['建模', '实体、关系、约束', '表设计先于 SQL 优化。'], ['写查询', command, '先正确再快。'], ['加索引', '看执行计划', 'N+1 和全表扫是常见坑。'], ['管变更', 'migration + 备份', '结构变更要可回滚。']],
    api: [['定资源', '名词路径 + HTTP 方法', 'API 是契约。'], ['定载荷', command, 'JSON 字段稳定可演进。'], ['定错误', '状态码 + 错误体', '失败也要可预测。'], ['写文档', 'OpenAPI/示例', '文档和实现同步。']],
    auth: [['认身份', 'who are you', '认证不等于授权。'], ['选机制', command, 'Session/JWT/OAuth 场景不同。'], ['护凭证', 'HTTPS + 过期 + 轮换', '密钥不能硬编码。'], ['测失败', '过期/伪造/撤销', '只测登录成功不够。']],
    security: [['列威胁', '注入/越权/泄露', 'OWASP 是检查清单。'], ['加固', command, '输入校验、最小权限、加密。'], ['传输存储', 'TLS + 哈希 + 脱敏', '密码绝不明文存。'], ['巡检', '依赖漏洞/配置', '安全是持续过程。']],
    cache: [['定热点', '读多写少的数据', '不是所有数据都该缓存。'], ['选层级', command, '浏览器/CDN/Redis/进程内。'], ['定失效', 'TTL/主动删除', '一致性要想清楚。'], ['测命中', '压测前后对比', '用数据验证收益。']],
    webserver: [['看入口', '80/443 谁监听', '用户只看到一个域名。'], ['配转发', command, '静态文件 vs 反向代理。'], ['TLS 终止', '证书与重定向', 'HTTPS 常在代理层处理。'], ['查日志', 'access/error log', '502 先看 upstream。']],
    ai: [['定场景', '辅助编码 vs 产品能力', 'AI 不是万能胶。'], ['接模型', command, 'API Key、配额、延迟。'], ['控质量', '提示词 + 校验 + 人工审核', '模型会幻觉。'], ['算成本', 'token/缓存/批处理', '上线前先估账单。']],
    testing: [['分层测', '单测/集成/E2E', '不同层发现不同 bug。'], ['自动化', command, 'CI 里跑测试再部署。'], ['测边界', '权限/异常/并发', 'happy path 不够。'], ['可回滚', '蓝绿/金丝雀', '发布也是测试一环。']],
    container: [['打包', 'Dockerfile 最小镜像', '应用+依赖一起交付。'], ['运行', command, '端口、卷、环境变量。'], ['编排', 'K8s/Compose', '多容器要声明式配置。'], ['资源限', 'CPU/内存/健康检查', '容器不是免费算力。']],
    messaging: [['解耦', '生产者不直连消费者', '异步削峰。'], ['可靠', command, 'ack/重试/死信/幂等。'], ['顺序', '分区键设计', '吞吐和顺序要取舍。'], ['监控', '积压 lag', '消费慢要先扩容。']],
    architecture: [['画边界', '模块/服务职责', '先理清再拆分。'], ['选模式', command, '单体/微服务/事件驱动。'], ['定契约', 'API/事件 schema', '团队靠接口协作。'], ['验故障', '超时/熔断/降级', '分布式一定会失败。']],
    search: [['建索引', 'mapping/analyzer', '索引不是表结构拷贝。'], ['写查询', command, '全文/过滤/聚合分开想。'], ['看集群', '分片/副本/刷新', '搜索也有运维成本。'], ['别滥用', '主库 vs 搜索库', 'ES 不适合当唯一数据源。']],
    realtime: [['选通道', 'WS/SSE/轮询', '实时也有成本。'], ['保连接', command, '心跳/重连/背压。'], ['定事件', 'payload schema', '推送也要版本化。'], ['测弱网', '断线重订阅', '移动端网络更抖。']],
    nosql: [['选模型', '文档/键值/宽列/图', '没有银弹。'], ['看访问模式', command, '按查询设计存储。'], ['一致性', '副本/ quorum', 'CAP 不是口号。'], ['迁移计划', '导出/双写/校验', '换库是大工程。']],
    ops: [['三件套', 'logs/metrics/traces', '缺一不可。'], ['设告警', command, 'SLO 驱动、可行动。'], ['排障流', '复现→定位→修复', '先止血再根因。'], ['复盘', '事故文档/改进项', '线上教做人。']],
    scale: [['量瓶颈', 'CPU/IO/连接/锁', '先测量。'], ['水平扩', command, '无状态服务 + LB。'], ['分片', '按 key 切数据', '跨分片查询变难。'], ['限流降级', '保护核心路径', '全站不能一起死。']],
    meta: [['定阶段', '你现在在哪一站', '路线图是顺序不是清单。'], ['做项目', command, '每个阶段至少 1 个小项目。'], ['查缺口', '对照 JD/业务', '补最短板。'], ['持续练', 'review/重构/上线', '后端是手艺活。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const HEADING_SUFFIX = {
  internet: ['搞懂请求链路', '从浏览器到服务器', '网络层排障基础'],
  language: ['选语言并跑通服务', '代码到可监听端口', '项目结构比语法重要'],
  git: ['版本历史协作', '本地到远程 PR', '分支与 CI 触发'],
  database: ['建模与查询', '事务与索引', 'ORM 与迁移'],
  api: ['设计对外契约', 'REST/GraphQL 选型', '错误码与文档'],
  auth: ['证明身份', 'Session/JWT/OAuth', '凭证生命周期'],
  security: ['加固攻击面', '传输与存储加密', 'OWASP 检查清单'],
  cache: ['分层缓存策略', 'Redis 与失效', '热点数据识别'],
  webserver: ['反向代理入口', 'TLS 与 upstream', '静态与动态分流'],
  ai: ['AI 辅助开发', 'LLM 接入产品', '提示词与 RAG'],
  testing: ['自动化测试', 'CI/CD 流水线', '发布前验证'],
  container: ['镜像到容器', 'K8s 编排', '环境一致性'],
  messaging: ['异步解耦', 'Kafka/RabbitMQ', '幂等与重试'],
  architecture: ['系统边界', '单体 vs 微服务', '弹性设计'],
  search: ['索引与检索', 'ES 集群运维', '搜索与主库分工'],
  realtime: ['长连接推送', 'WS/SSE 选型', '心跳与重连'],
  nosql: ['选对存储模型', '文档/键值/图', '访问模式驱动设计'],
  ops: ['可观测三支柱', '告警与 SLO', '线上排障流程'],
  scale: ['水平扩展', '分片与副本', '限流降级'],
  meta: ['按路线进阶', '项目驱动学习', '技能地图导航'],
};

function pick(arr, i) { return arr[i % arr.length]; }

const LABEL_OVERRIDES = {
  Introduction: { heading: '后端入门：从前端视角看全链路', subheading: '不必先精通每一层，但要能画出 browser → DNS → server → DB 的路径。', scene: '你刚从前端转后端，DevTools 里能看到请求，但不知道 Nginx、应用、数据库各在哪一环。入门节点帮你建立全局地图。', core: '后端入门 = 理解一次 HTTP 请求经过哪些组件 + 每组件负责什么 + 排障从哪一层查起。', metaphor: '像第一次进医院：不必会做手术，但要分得清挂号、门诊、化验、药房各干什么。', mistake: '跳过基础直接学 K8s/微服务——连 HTTP 和 SQL 都不会，排障只能猜。', confusion: '入门≠只学语法——要能读 Network 面板、curl、简单 SQL 和 git。', experiment: '画一张自己的全链路图：浏览器、DNS、TLS、Nginx、App、DB、Redis，各写一句职责。', layout: 'timeline', diagram: ['① 互联网/HTTP', '② 语言+Git', '③ DB+API', '④ 部署+运维', '⑤ 架构扩展'] },
  'What is HTTP?': { heading: 'HTTP：后端世界的通用对话协议', subheading: '方法、状态码、Header、Body——所有 API 都建立在 HTTP 之上。', scene: '前端 axios 报错 401，后端说「token 过期」。你要看得懂 Request/Response 里 Method、Header、Status 各表示什么。', core: 'HTTP = 无状态请求/响应协议；GET 读、POST 写、状态码表达结果、Header 传元数据和认证。', metaphor: 'HTTP 像快递单：寄件人、收件人、物品清单、签收状态——格式统一，全球能递。', mistake: '把 GET 当 POST 用传敏感参数——URL 会进日志和 Referer。', confusion: 'HTTP≠HTTPS——后者是 HTTP over TLS，端口和证书配置不同。', experiment: 'curl -v https://httpbin.org/get 看完整请求响应；再用 DevTools 对照同一请求。', layout: 'vertical', diagram: ['Client 发 Request', 'Method + URL + Headers', 'Server 处理', 'Status + Body 响应'] },
  'Pick a Backend Language': { heading: '选一门后端语言：深度优先', subheading: 'Python/Go/Node/Java 都能做后端——先精通一门再触类旁通。', scene: '教程里同时出现 Flask、Spring、Express，你每样学三天就换——结果哪个都写不出可部署服务。', core: '选语言 = 选生态 + 团队栈 + 学习曲线；一门到能写 CRUD API + 连 DB + 部署即可。', metaphor: '像学厨：先精通中餐火候，再学西餐也不迟；每样浅尝永远上不了桌。', mistake: '追新语言/framework 不重练基本功——路由、ORM、配置、测试才是核心。', confusion: '语言≠框架——先语言语法+标准库，再选 Web 框架。', experiment: '选定一门，48 小时内完成：GET /health + POST /users + SQLite 持久化 + README 启动说明。', layout: 'fork', diagram: ['你的背景?', 'Python/Node\n上手快', 'Go/Java\n企业常见', '选一门深入'] },
  Git: { heading: 'Git：后端协作的时间机器', subheading: 'commit、branch、PR 是 CI/CD 和 code review 的起点。', scene: '你本地改好了 API，同事也在改同一文件。没有分支和 merge 策略，代码互相覆盖。', core: 'Git = 内容寻址历史 + 分支并行开发 + 远程协作；main 应随时可发布。', metaphor: 'Git 像游戏多存档：每个 commit 是存档点，branch 是平行剧情线，merge 是合流。', mistake: '直接在 main push 未测代码——CI 红、队友阻塞、回滚困难。', confusion: 'Git≠GitHub——Git 是工具；托管/PR/Actions 是平台能力。', experiment: 'feature 分支改 API → push → 开 PR → 等 CI 绿 → squash merge。', layout: 'loop', diagram: ['git commit', 'git push', 'PR + Review', 'merge → CI/CD'] },
  PostgreSQL: { heading: 'PostgreSQL：功能全面的开源关系库', subheading: 'JSON、全文、扩展丰富——很多团队的生产默认选型。', scene: '订单系统要 ACID 事务 + 复杂 JOIN + 偶尔 JSON 字段。PostgreSQL 一条 SQL 搞定，还不用另上文档库。', core: 'PostgreSQL = 标准 SQL + 强 ACID + 扩展（PostGIS/全文）+ 成熟复制方案。', metaphor: 'PG 像瑞士军刀关系库——常规 CRUD 稳，特殊需求常能找到内置或扩展解。', mistake: '不做 EXPLAIN 就加索引——错误索引拖慢写入还不命中。', confusion: 'PostgreSQL≠MySQL——语法和锁、JSON 支持、复制模型有差异，迁移要测。', experiment: 'docker run postgres，建 users/orders 表，写 JOIN 查询并 EXPLAIN ANALYZE。', layout: 'vertical', diagram: ['App/ORM', 'SQL + 事务', 'PostgreSQL', 'WAL + 持久化'] },
  REST: { heading: 'REST：用 HTTP 动词操作资源', subheading: 'GET/POST/PUT/PATCH/DELETE + 名词路径 + JSON——最普遍的 API 风格。', scene: '移动端要拉用户列表、改资料、删账号。REST 用 /users、/users/{id} 配 HTTP 方法，前端缓存和 CDN 也好配合。', core: 'REST = 资源导向 URL + HTTP 语义 + 无状态 + 标准状态码；幂等性和缓存由方法决定。', metaphor: 'REST 像图书馆管理系统：书是资源，借/还/登记用固定动作，每种动作规则清楚。', mistake: 'POST 做一切、URL 里塞动词 /getUser——违背 REST，缓存和网关规则都难配。', confusion: 'REST≠OpenAPI——REST 是风格；OpenAPI 是描述 REST 的文档格式。', experiment: '设计 /users CRUD：列出方法、状态码、错误体，用 curl 或 Postman 跑通。', layout: 'vertical', diagram: ['Client', 'GET/POST/PUT/DELETE', 'Resource /users/{id}', 'JSON Response'] },
  JWT: { heading: 'JWT：自包含的无状态令牌', subheading: 'Header.Payload.Signature——服务端验签即可，不必查 session 表。', scene: '微服务 A 要验用户身份，不想每次 RPC 去 auth 服务查 Redis。JWT 放在 Authorization 头，各服务用公钥验签。', core: 'JWT = 签名防篡改 + payload 存 claims + 无中心 session；注意过期、撤销和密钥轮换。', metaphor: 'JWT 像带防伪标记的通行证——保安看签名就知道真伪，但丢了就等于钥匙丢了。', mistake: 'payload 存密码或敏感 PII——JWT 只是 base64，不是加密。', confusion: 'JWT≠OAuth——OAuth 是授权流程；JWT 常作为 access token 的格式。', experiment: '用 jwt.io 解码 sample token；实现 login 签发 + middleware 验签 + 过期 401。', layout: 'vertical', diagram: ['Login 成功', '签发 JWT', 'Authorization: Bearer', 'Middleware 验签'] },
  Redis: { heading: 'Redis：内存 KV 与多功能数据结构', subheading: '缓存、Session、限流、排行榜——后端性能加速器。', scene: '首页 QPS 10 万，MySQL 扛不住。热点商品放 Redis，TTL 5 分钟，DB 压力降一个数量级。', core: 'Redis = 内存存储 + 丰富结构（string/hash/set/zset）+ TTL + 持久化可选；缓存要设计失效策略。', metaphor: 'Redis 像收银台旁的畅销品展示架——拿取极快，但容量有限，要经常补货（回源 DB）。', mistake: '把 Redis 当唯一数据源不持久化——重启丢数据；缓存无 TTL 导致脏读。', confusion: 'Redis 作缓存 vs 作 MQ/锁——用途不同，maxmemory 策略要分开实例。', experiment: 'SETEX session:abc 3600 {...}；缓存穿透时对比带 TTL 与不带 TTL 的 DB QPS。', layout: 'layer', diagram: ['Browser/CDN', 'App 内存缓存', 'Redis', 'Database 源真相'] },
  Docker: { heading: 'Docker：应用与环境一起交付', subheading: '镜像 digest 是开发、CI、生产的一致输入。', scene: '本地 Node 18 跑得好，线上 Node 16 缺依赖。Dockerfile 锁版本，CI build 推 registry，生产 pull 同一 digest。', core: 'Docker = 镜像分层 + 隔离进程 + Registry 分发；DevOps 交付的标准打包格式。', metaphor: '镜像像标准化集装箱——港口（K8s/ECS）只认箱号，不关心里面品牌。', mistake: 'latest tag 上生产——回滚不知道上一版 digest。', confusion: 'Docker≠虚拟机——共享内核，更轻，隔离级别不同。', experiment: '编写 Dockerfile：多阶段 build → docker build → run → curl /health。', layout: 'vertical', diagram: ['Dockerfile', 'docker build', 'Registry push', 'docker run / K8s pull'] },
  Kubernetes: { heading: 'Kubernetes：生产容器编排', subheading: 'Deployment/Service/Ingress——声明期望状态，控制面持续 reconcile。', scene: '大促要 200 副本，手工 docker run 不可能。改 Deployment replicas，HPA 按 CPU 自动扩缩。', core: 'K8s = 期望状态 YAML + 控制面调度 + Service 稳定入口 + 自愈与滚动发布。', metaphor: 'K8s 像机场塔台——你报航班计划（manifest），塔台调度跑道与登机口。', mistake: '不设 requests/limits——调度混乱、节点 OOM 互杀。', confusion: 'K8s 不替代 CI——CI 产出镜像；K8s 负责运行编排。', experiment: 'minikube/kind：Deployment + Service + kubectl rollout undo 练回滚。', layout: 'hub', diagram: ['kubectl/CI', 'Control Plane', 'Scheduler', 'Pod 工作负载'] },
  'CI / CD': { heading: 'CI/CD：从 commit 到生产的自动化桥', subheading: '测试、构建、部署自动化——手工上线是技术债。', scene: '周五 6 点手工 SSH 部署，步骤漏了 migration。CI/CD pipeline 把 test→build→deploy 固化，可重复可审计。', core: 'CI = 验证每次变更；CD = 自动/半自动发布；流水线是团队的质量门。', metaphor: 'CI/CD 像工厂质检线——每个零件测完再出厂，不合格自动拦下。', mistake: 'CI 绿了就全自动上生产无人工 gate——要用 staging/canary/approval。', confusion: 'CI 工具≠部署平台——Actions/Jenkins orchestrate；K8s/ECS 是执行面。', experiment: 'GitHub Actions：push → test → docker build → push registry（先不做 deploy）。', layout: 'timeline', diagram: ['git push', 'CI test/build', 'CD deploy staging', 'prod approve', '线上验证'] },
  Microservices: { heading: '微服务：按业务边界拆分独立服务', subheading: '独立部署、独立扩展——代价是分布式复杂度。', scene: '单体 50 万行，改支付模块要全量发布。拆出 payment-service 后，支付团队可独立迭代和扩容。', core: '微服务 = 小团队负责小服务 + API/事件契约 + 独立数据存储 + 可观测与容错必备。', metaphor: '微服务像城市分区——水电网要通，但各区有自己的市政，不是一栋无限加高的楼。', mistake: '没流量没团队就拆——运维、追踪、部署成本暴涨。', confusion: '微服务≠多个 Docker 容器——边界是业务能力和团队，不是进程数。', experiment: '画现有单体模块图，标哪些适合先拆（高变更频率、不同扩展需求）。', layout: 'split', diagram: ['Monolith\n单部署单元', '模块耦合', 'Microservices\n多服务+API', '独立扩展/发布'] },
  Monolith: { heading: '单体：一个部署单元承载全部模块', subheading: '小团队、早期产品默认选型——简单可靠。', scene: '创业公司 5 人，一个 Rails/ Spring Boot 仓库搞定 Web+API+后台，部署一条命令。', core: 'Monolith = 模块化代码 + 单进程/单镜像部署 + 模块内函数调用；先清晰边界再考虑拆分。', metaphor: '单体像一体化公寓——装修简单，住人少时最划算。', mistake: '把单体写成「大泥球」无模块边界——将来拆服务像拆炸弹。', confusion: '单体≠烂架构——well-modularized monolith 可撑很久。', experiment: '在单体里划 package/module 边界，禁止跨层直接访问 DB。', layout: 'split', diagram: ['Well-modular\nMonolith', '清晰 package', 'Big Ball of Mud', '难测试难拆分'] },
  MongoDB: { heading: 'MongoDB：文档型 NoSQL', subheading: 'JSON 文档、灵活 schema——嵌套数据读写自然。', scene: '商品属性每类不同，用 SQL 宽表或 EAV 都别扭。MongoDB 文档嵌套 specs，查询一条 document 搞定。', core: 'MongoDB = BSON 文档 + 集合 + 索引 + 副本集；按访问模式设计嵌入/引用。', metaphor: 'MongoDB 像收纳盒直接装整包物品——不用先拆成表格再拼回。', mistake: '无 schema 设计任意嵌套——文档膨胀、索引失效、迁移痛苦。', confusion: 'MongoDB≠不用设计——只是 schema 演进更灵活，访问模式仍要规划。', experiment: '插入嵌套订单文档，用 find + projection 只取需要的字段。', layout: 'vertical', diagram: ['Collection orders', 'BSON 文档嵌套', '索引 _id/status', 'find + aggregate'] },
  Elasticsearch: { heading: 'Elasticsearch：全文检索与分析引擎', subheading: '倒排索引 + 分片——日志、搜索、聚合的利器。', scene: '商品搜索要模糊匹配、拼音、按销量排序。MySQL LIKE 撑不住，ES 倒排索引毫秒级返回。', core: 'ES = 文档索引 + analyzer 分词 + 分片副本 + Query DSL；不是事务型主库。', metaphor: 'ES 像图书馆检索终端——书在架上（源数据可在别处），索引告诉你去哪格。', mistake: '把 ES 当唯一数据源——丢数据难恢复；应用双写或 CDC 同步。', confusion: 'ES≠SQL——最终一致、近实时搜索，不适合强一致账务。', experiment: 'index 几条商品，试 match + filter + sort，观察 _score。', layout: 'vertical', diagram: ['原始文档/CDC', 'Index + Analyzer', 'Shard 分片', 'Search Hits'] },
  WebSockets: { heading: 'WebSockets：全双工长连接', subheading: '服务端主动推送——聊天、协作、行情适用。', scene: '聊天室用轮询每秒打 API，服务器扛不住。WebSocket 一条连接双向传消息，延迟低、开销小。', core: 'WebSocket = HTTP 升级握手 + 持久连接 + 帧协议；要心跳、重连、背压。', metaphor: 'WebSocket 像电话线——拨通后双方随时说话，不用每次重新拨号（HTTP 请求）。', mistake: '长连接无心跳——中间 NAT/负载均衡 silently 断连。', confusion: 'WebSocket≠SSE——前者双向；SSE 仅服务端推，基于 HTTP 更简单。', experiment: '用 ws 库实现 echo server + 浏览器客户端，断网后观察重连策略。', layout: 'vertical', diagram: ['HTTP Upgrade', 'WebSocket 连接', '双向 Message', '心跳/重连'] },
  Observability: { heading: '可观测性：Metrics + Logs + Traces', subheading: '线上不能 SSH 瞎 grep——三信号关联才能定位未知问题。', scene: '用户说「偶尔慢」无 ERROR。Trace 找慢 span，Metrics 看 throttle，Logs 看 GC——三件套合诊。', core: 'Observability = 外部输出推断内部状态；OpenTelemetry 统一采集，SLO 驱动告警。', metaphor: '像医院三联检——血常规、影像、病史分开看，合起来才诊断。', mistake: '只堆日志不设 metrics——告警滞后、存储成本爆炸。', confusion: 'Monitoring⊂Observability——监控已知指标；可观测探索未知。', experiment: '给 demo API 加 trace id 日志 + /metrics endpoint + 一条 latency histogram。', layout: 'grid', diagram: ['Metrics\nQPS/latency', 'Logs\n结构化', 'Traces\nspan 链', '关联排障'] },
};

function specForNode(node, index) {
  const cat = category(node.label, node.groupId);
  const c = categoryCopy[cat];
  const command = commandHints[node.label] || node.label;
  const kind = diagramKind(node.label, cat, index);
  const layout = KIND_LAYOUT[kind] || LAYOUTS[index % LAYOUTS.length];
  const slugBase = slugify(node.label, node.id);
  const slug = `${slugBase}-${node.id.slice(0, 6)}`;

  const zh = node.zh;
  const heading = `${zh}：${pick(HEADING_SUFFIX[cat], index)}`;
  const subheading = `Stage ${node.stage}（${node.stageZh}）：${node.label} 的重点是「${c.action.slice(0, 24)}…」，不是孤立背术语。`;
  const scene = `你在「${node.stageZh}」阶段遇到 ${node.label}（${zh}）。典型场景：${c.subject}里需要${c.action}，否则${c.risk}。`;
  const core = `${node.label} = ${command} → ${c.action} → ${c.result}（领域：${c.subject}）`;
  const metaphor = c.metaphor;
  const mistake = `常见坑：${c.risk}；对 ${node.label} 尤其要警惕脱离 ${node.stageZh} 上下文硬套方案。`;
  const confusion = `${zh} 与相邻节点的边界：负责「${c.action}」，不替代整条后端链路里的其他层。`;
  const experiment = `围绕 \`${command}\` 做最小实验（测试环境/假数据）：记录输入输出，对照 ${node.stageZh} 里上下游组件。`;

  const diagramMap = {
    compare: [`传统/无 ${zh}`, '手工、不可预测', `${node.label}`, command],
    vertical: [`Client/调用方`, command, node.label, c.result.slice(0, 16)],
    hub: [`上游 A`, `下游 B`, `监控/旁路`, node.label],
    grid: [node.label, command, node.stageZh.slice(0, 8), c.subject.slice(0, 10)],
    layer: [`入口层`, `${node.label}`, '处理层', '存储/响应'],
    stack: [`用户请求`, command, node.label, c.result.slice(0, 12), '反馈/观测'],
    split: [`无 ${zh}`, c.risk.slice(0, 20), `有 ${zh}`, c.result.slice(0, 20)],
    cycle: ['Plan', 'Build/Config', 'Run', 'Observe'],
    timeline: [`Step1\n准备`, `Step2\n${command.slice(0, 12)}`, `Step3\n验证`, `Step4\n上线/复盘`],
    fork: [`需要 ${zh}?`, 'Yes: 深度用', 'No: 替代', '文档化决策'],
    loop: ['Code', 'Test/CI', 'Deploy', 'Monitor'],
    matrix: [`${zh}\n收益`, `${zh}\n复杂度`, '团队熟悉度', '推荐场景'],
  };

  return {
    id: node.id,
    label: node.label,
    zh,
    slug,
    heading,
    subheading,
    scene,
    core,
    metaphor,
    mistake,
    confusion,
    experiment,
    layout,
    diagram: diagramMap[layout] || [node.label, command, '运行', '验证'],
    route: routeFor(node.label, cat, command),
    kind,
    command,
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
  return spec;
});

if (allSpecs.length !== 194) {
  console.error('Expected 194 nodes, got', allSpecs.length);
  process.exit(1);
}

function buildDiagram(slug, layout, title, ct, note) {
  const p = `be-${slug}`;
  const lines = [text(`${p}-title`, 70, 10, title, 23, 600)];
  const parts = (Array.isArray(ct) ? ct : String(ct).split('\n')).filter(Boolean);

  switch (layout) {
    case 'compare':
      lines.push(
        box(`${p}-l`, 48, 68, 300, 190, palette.red),
        text(`${p}-lt`, 68, 88, parts[0] || '传统方式', 16, 260),
        text(`${p}-lb`, 68, 124, parts[1] || '', 15, 260),
        box(`${p}-r`, 412, 68, 300, 190, palette.green),
        text(`${p}-rt`, 432, 88, parts[2] || '现代方式', 16, 260),
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
        text(`${p}-code-t`, 68, 118, parts[0] || 'Code', 15, 100),
        box(`${p}-ci`, 220, 100, 140, 72, palette.yellow),
        text(`${p}-ci-t`, 240, 118, parts[1] || 'CI', 15, 100),
        box(`${p}-cd`, 392, 100, 140, 72, palette.green),
        text(`${p}-cd-t`, 412, 118, parts[2] || 'CD', 15, 100),
        box(`${p}-mon`, 564, 100, 140, 72, palette.purple),
        text(`${p}-mon-t`, 584, 118, parts[3] || 'Monitor', 15, 100),
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

const diagramEntries = allSpecs.map((s) =>
  buildDiagram(s.slug, s.layout, `${s.zh} · ${s.command}`, s.diagram, s.metaphor),
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
    rawDiagram: BACKEND_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const BACKEND_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const BACKEND_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/backend/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', allSpecs.length, 'nodes,', usedSlugs.size, 'unique diagram slugs');
