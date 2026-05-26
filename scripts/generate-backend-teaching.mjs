import { readFileSync, writeFileSync } from 'node:fs';

const data = readFileSync('src/roadmaps/backend/data.ts', 'utf8');
const stagesBlock = data.slice(
  data.indexOf('export const stages = ['),
  data.indexOf('];\n\nexport const tutorials'),
);

const nodes = [];
for (const groupMatch of stagesBlock.matchAll(
  /"id": "(group-[^"]+)"[\s\S]*?"nodes": \[([\s\S]*?)\n    \]/g,
)) {
  const groupId = groupMatch[1];
  const groupBody = groupMatch[2];
  for (const m of groupBody.matchAll(
    /"id": "([^"]+)",\s*\n\s*"label": "([^"]+)",\s*\n\s*"zh": "([^"]+)"/g,
  )) {
    nodes.push({ id: m[1], label: m[2], zh: m[3], groupId });
  }
}

const commandHints = {
  Introduction: 'browser -> DNS -> server -> response',
  'Frontend Basics': 'HTML + CSS + JS 能读懂即可',
  HTML: '语义标签 + 表单 + 链接',
  CSS: '选择器 + 盒模型 + 布局',
  'How does the internet work?': 'client -> router -> server',
  'What is HTTP?': 'GET /index.html HTTP/1.1',
  'What is Domain Name?': 'api.example.com',
  'DNS and how it works?': 'domain -> DNS -> IP',
  'What is hosting?': '代码部署到服务器对外服务',
  HTTPS: 'HTTP + TLS 加密通道',
  'HTTP Caching': 'Cache-Control / ETag / 304',
  'Browsers and how they work?': 'HTML/CSS/JS -> 渲染 -> 网络请求',
  Python: 'def handler(): return json',
  JavaScript: 'export async function handler(req)',
  Java: 'Spring Boot @RestController',
  Go: 'func Handler(w http.ResponseWriter, r *http.Request)',
  PHP: '<?php echo json_encode($data);',
  Ruby: 'class UsersController < ApplicationController',
  'C#': 'app.MapGet("/users", () => users);',
  Rust: 'async fn handler() -> Json<User>',
  Git: 'git add -> commit -> push',
  GitHub: 'remote repo + PR + CI',
  PostgreSQL: 'SELECT * FROM users WHERE id = $1',
  MySQL: 'InnoDB + replication + indexes',
  Redis: 'GET user:1 / SETEX session 3600',
  Docker: 'docker build -> run container',
  Kubernetes: 'Deployment + Service + Pod',
  Nginx: 'reverse proxy -> upstream app',
  REST: 'GET /users/{id}',
  GraphQL: 'query { user(id:1){ name } }',
  JWT: 'header.payload.signature',
  OAuth: 'authorize -> token -> API',
  'CI / CD': 'commit -> test -> deploy',
  Kafka: 'producer -> topic -> consumer',
  Microservices: 'service A API -> service B API',
  Monolith: 'single deployable app modules',
  Elasticsearch: 'index document -> search query',
  WebSockets: 'ws://host/channel persistent',
  MongoDB: 'db.users.find({ status: "active" })',
  Observability: 'logs + metrics + traces',
  Monitoring: 'metrics -> alert -> on-call',
  ORMs: 'User.find(id) -> SQL',
  'N+1 Problem': '1 query + N lazy loads',
  Migrations: 'V001__create_users.sql',
  bcrypt: 'hash(password, cost)',
  'OWASP Risks': 'injection / broken auth / SSRF',
};

const categoryCopy = {
  internet: {
    subject: '互联网与 Web 基础',
    action: '理解请求如何从浏览器到达服务器',
    result: '读文档和排障时不迷失在网络层',
    risk: '把 DNS、TCP、HTTP 问题混为一谈',
    metaphor: '互联网像寄信系统：域名是地址，HTTP 是信封格式，服务器是收信人。',
  },
  language: {
    subject: '后端语言与运行时',
    action: '用一门语言写出可运行的服务端程序',
    result: '能读业务代码并做小功能',
    risk: '语言语法会了却不会组织项目结构',
    metaphor: '后端语言像工具箱：先选一把顺手的锤子，再学怎么盖房子。',
  },
  git: {
    subject: '版本协作',
    action: '用分支、提交和远程仓库协作开发',
    result: '代码变更有历史、可回滚、可审查',
    risk: '直接在 main 上改且不写 commit message',
    metaphor: 'Git 像游戏存档：每次 commit 是一个存档点，分支是平行时间线。',
  },
  database: {
    subject: '关系型数据存储',
    action: '用表、索引和事务组织业务数据',
    result: '读写数据一致且可查询',
    risk: '没索引就全表扫，或忽略事务边界',
    metaphor: '关系型数据库像 Excel 超级版：表是 sheet，行是记录，SQL 是筛选公式。',
  },
  api: {
    subject: '对外接口',
    action: '设计稳定的 HTTP/JSON 契约',
    result: '前后端和第三方能可靠集成',
    risk: '接口无版本、无错误码、无文档',
    metaphor: 'API 像餐厅菜单：菜名稳定、价格清楚、缺货有说明。',
  },
  auth: {
    subject: '身份认证',
    action: '证明调用者是谁',
    result: '服务端能识别用户或客户端',
    risk: 'token 明文传输或不过期',
    metaphor: '认证像进楼刷卡：先证明你是你，还没决定你能进哪些房间。',
  },
  security: {
    subject: '应用安全',
    action: '识别威胁并加固输入、传输和存储',
    result: '常见漏洞有基本防护',
    risk: '只防 SQL 注入，忽略越权和密钥泄露',
    metaphor: '安全像多层门禁：网络、应用、数据每一层都要上锁。',
  },
  cache: {
    subject: '缓存加速',
    action: '把热点数据放到更快的一层',
    result: '延迟下降、数据库压力减轻',
    risk: '缓存和数据库不一致却无失效策略',
    metaphor: '缓存像桌面便签：常用信息放手边，但要记得什么时候撕掉重写。',
  },
  webserver: {
    subject: 'Web 服务器与反向代理',
    action: '把外部请求转发到应用进程',
    result: '静态资源、TLS、负载分担有统一入口',
    risk: 'Nginx 配错 upstream 导致 502',
    metaphor: 'Web 服务器像前台接待：外面只看到一个门口，里面可能很多房间。',
  },
  ai: {
    subject: 'AI 辅助开发',
    action: '把 LLM 能力嵌入开发或产品流程',
    result: '知道何时用 AI、如何控成本和质量',
    risk: '把模型输出当真相不做校验',
    metaphor: 'AI 像高级实习生：产出快，但仍要 code review。',
  },
  testing: {
    subject: '测试与交付',
    action: '用自动化验证行为并持续发布',
    result: '改动可重复验证、可回滚',
    risk: '没有 CI 就手工上线',
    metaphor: 'CI/CD 像工厂质检线：每个零件测完再出厂。',
  },
  container: {
    subject: '容器与编排',
    action: '把应用和环境打包成可移植单元',
    result: '开发、测试、生产环境一致',
    risk: '镜像过大、以 root 运行、没资源限制',
    metaphor: '容器像标准化集装箱：里面装什么都能用同一套吊装流程。',
  },
  messaging: {
    subject: '消息与事件',
    action: '用队列/主题解耦服务',
    result: '异步任务更可靠、峰值可削',
    risk: '消息重复消费没有幂等',
    metaphor: '消息队列像快递中转站：寄件和取件不必同时发生。',
  },
  architecture: {
    subject: '系统架构',
    action: '按业务边界拆分或整合服务',
    result: '扩展和维护成本可控',
    risk: '没流量就拆微服务',
    metaphor: '架构像城市规划：单体是独栋，微服务是街区，先看清人口再分区。',
  },
  search: {
    subject: '搜索与检索',
    action: '建立索引并执行全文/聚合查询',
    result: '大数据量下仍能快速查找',
    risk: '把 ES 当主数据库用',
    metaphor: '搜索引擎像图书馆检索机：书在架上，索引告诉你去哪一格。',
  },
  realtime: {
    subject: '实时通信',
    action: '建立推送或长连接通道',
    result: '客户端低延迟收到变化',
    risk: '长连接无心跳和重连',
    metaphor: '实时通道像对讲机：连着才能即时说话。',
  },
  nosql: {
    subject: '非关系型存储',
    action: '按文档/键值/图模型存数据',
    result: '特定场景下读写更灵活',
    risk: '所有数据都塞进 MongoDB',
    metaphor: 'NoSQL 像不同形状储物柜：不是万能，但某些东西更好放。',
  },
  ops: {
    subject: '运维与可观测性',
    action: '监控、日志、告警和故障响应',
    result: '线上问题能发现、能定位',
    risk: '只有报错日志，没有指标和 trace',
    metaphor: '运维像汽车仪表盘：速度、油量、故障灯都要看。',
  },
  scale: {
    subject: '扩展与高可用',
    action: '通过副本、分片、限流支撑更大流量',
    result: '流量上涨时系统仍可用',
    risk: '垂直扩容到天花板才想水平扩展',
    metaphor: '扩展像开分店：单店忙不过来就复制模式，不是把一张桌子无限加长。',
  },
  meta: {
    subject: '学习路径',
    action: '按阶段推进并做项目巩固',
    result: '知道下一步该学什么',
    risk: '只收藏路线图不动手',
    metaphor: '路线图像地铁图：知道换乘站，但得自己上车练。',
  },
};

function category(label, groupId) {
  if (/internet|HTTP|DNS|Domain|hosting|HTTPS|Browsers|HTML|CSS|Frontend Basics|Introduction|HTTP Caching/i.test(label)) return 'internet';
  if (/Python|JavaScript|Java|Go|PHP|Ruby|C#|Rust|Pick a Backend|Beginner Project|Intermediate Project|Hashing|Learn one language/i.test(label)) return 'language';
  if (/Git|GitHub|GitLab|Copilot|Version Control|Code Reviews/i.test(label)) return 'git';
  if (/PostgreSQL|MySQL|MariaDB|SQLite|Oracle|MS SQL|Relational|Normalization|Transactions|ACID|ORMs|Migrations|N\+1|Database Indexes|More about Databases|Scaling Databases|Data Replication|Sharding|CAP Theorem/i.test(label)) return 'database';
  if (/API|REST|GraphQL|gRPC|SOAP|JSON APIs|Open API|Learn about APIs/i.test(label)) return 'api';
  if (/Auth|SAML|JWT|OAuth|OpenID|Token|Cookie Based|Basic Authentication/i.test(label)) return 'auth';
  if (/Security|OWASP|CORS|CSP|SSL|TLS|MD5|SHA|bcrypt|scrypt|Server Security|Web Security/i.test(label)) return 'security';
  if (/Redis|Memcached|Caching|Server Side|Server Side/i.test(label)) return 'cache';
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
    'group-foundation': 'internet',
    'group-language': 'language',
    'group-git': 'git',
    'group-rel-db': 'database',
    'group-api': 'api',
    'group-auth': 'auth',
    'group-security': 'security',
    'group-cache': 'cache',
    'group-webserver': 'webserver',
    'group-ai': 'ai',
    'group-testing': 'testing',
    'group-db-advanced': 'scale',
    'group-container': 'container',
    'group-message': 'messaging',
    'group-architecture': 'architecture',
    'group-search': 'search',
    'group-realtime': 'realtime',
    'group-nosql': 'nosql',
    'group-ops': 'ops',
    'group-meta': 'meta',
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

function routeFor(label, cat, command) {
  const routes = {
    internet: [['看路径', '请求从哪来到哪去', '先画 client -> DNS -> server。'], ['读协议', command, 'HTTP/HTTPS 是应用层契约。'], ['看缓存', '浏览器/CDN/服务端', '缓存影响性能和一致性。'], ['小实验', 'curl 或 DevTools Network', '亲眼看到请求响应。']],
    language: [['选一门', '先深入一门再扩展', 'Python/Go/Node 都可起步。'], ['跑通最小服务', command, 'hello world API 或 CLI。'], ['学项目结构', '路由/配置/依赖', '别只写单文件。'], ['做小项目', 'CRUD + 数据库', '项目比刷语法更重要。']],
    git: [['本地存档', 'status -> add -> commit', '每次改动有快照。'], ['远程协作', command, 'push/PR/review 是团队节奏。'], ['分支策略', 'feature/fix/release', 'main 保持可发布。'], ['遇错不慌', 'log/reflog/stash', '历史可以救你。']],
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
    ops: [['三件套', 'logs/metrics/traces', '缺一不可。'], ['设告警', command, 'SLO 驱动、可行动。'], ['排障流', '复现->定位->修复', '先止血再根因。'], ['复盘', '事故文档/改进项', '线上教做人。']],
    scale: [['量瓶颈', 'CPU/IO/连接/锁', '先测量。'], ['水平扩', command, '无状态服务 + LB。'], ['分片', '按 key 切数据', '跨分片查询变难。'], ['限流降级', '保护核心路径', '全站不能一起死。']],
    meta: [['定阶段', '你现在在哪一站', '路线图是顺序不是清单。'], ['做项目', command, '每个阶段至少 1 个小项目。'], ['查缺口', '对照 JD/业务', '补最短板。'], ['持续练', 'review/重构/上线', '后端是手艺活。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const headingPrefix = {
  internet: '搞懂 Web 请求链路',
  language: '选语言并跑通服务',
  git: '用版本历史协作',
  database: '设计并查询数据',
  api: '设计对外接口',
  auth: '建立身份信任',
  security: '加固常见攻击面',
  cache: '用缓存换性能',
  webserver: '配置入口与转发',
  ai: '把 AI 接进开发流',
  testing: '自动化验证与发布',
  container: '容器化交付应用',
  messaging: '异步解耦服务',
  architecture: '看清系统边界',
  search: '构建检索能力',
  realtime: '处理实时连接',
  nosql: '选对非关系存储',
  ops: '让线上可观测',
  scale: '支撑更大流量',
  meta: '按路线持续进阶',
};

function q(s) {
  return JSON.stringify(s);
}

function routeCode(route) {
  return `[\n${route.map((r) => `      { label: ${q(r.label)}, title: ${q(r.title)}, text: ${q(r.text)} }`).join(',\n')}\n    ]`;
}

const header = readFileSync('scripts/backend-teaching-template.ts', 'utf8');

let body = '';
for (const [i, node] of nodes.entries()) {
  const cat = category(node.label, node.groupId);
  const c = categoryCopy[cat];
  const command = commandHints[node.label] || node.label;
  const heading = `${node.label}：${headingPrefix[cat]}`;
  const subheading = `${node.label} 的重点不是背名词，而是知道它在后端链路里负责哪一段。`;
  const scene = `你从前端转后端，遇到 ${node.label}（${node.zh}）。先把它放进一次真实请求、一次读写或一次部署里看，而不是孤立背定义。`;
  const core = `${node.label} = 用 ${command} 围绕「${c.subject}」完成「${c.action}」，目标是${c.result}。`;
  const mistake = `不要把 ${node.label} 当成孤立名词。先确认它属于基础、语言、数据、接口、安全、部署还是运维。`;
  const confusion = `${node.label} 容易和相邻概念混：它的边界是「${c.action}」，不是替代整条后端链路。`;
  const experiment = `围绕 \`${command}\` 做最小实验：本地跑通、记录输入输出；涉及服务器/数据库时用测试环境和假数据。`;
  const route = routeFor(node.label, cat, command);
  const diagram = diagramKind(node.label, cat, i);
  body += `  ${q(node.id)}: backendLesson({\n`;
  body += `    id: ${q(node.id)},\n    label: ${q(node.label)},\n    heading: ${q(heading)},\n    subheading: ${q(subheading)},\n    scene: ${q(scene)},\n    core: ${q(core)},\n    metaphor: ${q(c.metaphor)},\n    mistake: ${q(mistake)},\n    confusion: ${q(confusion)},\n    experiment: ${q(experiment)},\n    command: ${q(command)},\n    subject: ${q(c.subject)},\n    action: ${q(c.action)},\n    result: ${q(c.result)},\n    risk: ${q(c.risk)},\n    diagram: ${q(diagram)} as BackendDiagramKind,\n    route: ${routeCode(route)},\n  }),\n`;
}

const footer = `};\n\nexport function hasBackendTeachingLesson(id: string): boolean {\n  return id in BACKEND_TEACHING_LESSONS;\n}\n\nexport function getBackendTeachingLesson(id: string): TeachingLesson | undefined {\n  return BACKEND_TEACHING_LESSONS[id];\n}\n`;

writeFileSync('src/roadmaps/backend/teaching.ts', header + body + footer);
console.log('wrote', nodes.length, 'backend teaching lessons');
