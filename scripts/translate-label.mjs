import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));
let generatedMap;
function generatedZh(label) {
  if (process.env.BUILD_ZH_MAP === '1') return undefined;
  if (!generatedMap) {
    try {
      generatedMap = new Map(Object.entries(JSON.parse(readFileSync(join(__dir, 'generated-zh-map.json'), 'utf8'))));
    } catch {
      generatedMap = new Map();
    }
  }
  return generatedMap.get(label);
}

const WORD = {
  Learn: '学习', Basic: '基础', Basics: '基础', Advanced: '进阶', Introduction: '入门', Overview: '概览',
  What: '什么是', Why: '为什么', How: '如何', When: '何时', Using: '使用', Setting: '设置', Setup: '配置',
  Install: '安装', Installing: '安装', Create: '创建', Creating: '创建', Running: '运行', Building: '构建', Delete: '删除', Update: '更新',
  Drop: '删除', Alter: '修改', Truncate: '清空', Select: '查询', Insert: '插入', From: '来源表', Where: '条件',
  Join: '连接', Joins: '连接', Group: '分组', Order: '排序', Having: '分组过滤', Limit: '限制', Offset: '偏移',
  Union: '联合', Index: '索引', Indexes: '索引', View: '视图', Trigger: '触发器', Schema: '模式', Schemas: '模式',
  Table: '表', Tables: '表', Row: '行', Rows: '行', Column: '列', Columns: '列', Database: '数据库',
  Query: '查询', Transaction: '事务', Constraints: '约束', Data: '数据', Types: '类型', Type: '类型',
  Model: '模型', Relational: '关系型', Version: '版本', Control: '控制', Repository: '仓库', Branch: '分支',
  Branching: '分支', Commit: '提交', Committing: '提交', Merge: '合并', Remote: '远程', Remotes: '远程',
  Clone: '克隆', Cloning: '克隆', Staging: '暂存', Working: '工作', Directory: '目录', Global: '全局',
  Local: '本地', Config: '配置', Fetch: '拉取', Push: '推送', Pull: '拉取', Checkout: '切换',
  History: '历史', Changes: '变更', Managing: '管理', Essentials: '要点', Other: '其他', Benefits: '优点',
  Limitations: '局限', Concepts: '概念', Processing: '处理', Installation: '安装', Object: '对象',
  Write: '写', ahead: '提前', Log: '日志', Domain: '域', Domains: '域', Attribute: '属性', Attributes: '属性',
  Tuple: '元组', Tuples: '元组', Relation: '关系', Relations: '关系', Cache: '缓存', Session: '会话',
  Cluster: '集群', Replication: '复制', Sharding: '分片', Persistence: '持久化', Memory: '内存',
  Pipeline: '管道', Stream: '流', Security: '安全', Authentication: '认证', Authorization: '授权',
  Container: '容器', Containers: '容器', Image: '镜像', Images: '镜像', Dockerfiles: 'Dockerfile 文件', Dockerhub: 'Docker Hub 镜像仓库',
  Efficient: '高效', Layer: '层', Caching: '缓存', Others: '其他', Volume: '卷', Network: '网络', Pod: 'Pod', Service: '服务',
  Deployment: '部署', Ingress: 'Ingress', Secret: '密钥', Node: '节点', Worker: 'Worker', Scheduler: '调度',
  Scaling: '扩缩', Monitor: '监控', Monitoring: '监控', Logging: '日志', Load: '负载', Balancer: '均衡',
  Architecture: '架构', Design: '设计', System: '系统', Scalability: '扩展性', Availability: '可用性',
  Consistency: '一致性', REST: 'REST', API: 'API', HTTP: 'HTTP', Terminal: '终端', Shell: 'Shell',
  Command: '命令', File: '文件', Process: '进程', Permission: '权限', User: '用户', Group: '组',
  Package: '包', Script: '脚本', Continuous: '持续', Integration: '集成', Delivery: '交付',
  Infrastructure: '基础设施', Code: '代码', Testing: '测试', Test: '测试', RDBMS: 'RDBMS', NoSQL: 'NoSQL',
  ACID: 'ACID', MVCC: 'MVCC', DDL: 'DDL', DML: 'DML', ORM: 'ORM', SQL: 'SQL', JSON: 'JSON', BSON: 'BSON',
  TCP: 'TCP', UDP: 'UDP', DNS: 'DNS', SSL: 'SSL', TLS: 'TLS', SSH: 'SSH', Keywords: '关键字', Syntax: '语法',
  Operator: '操作符', Operators: '操作符', Aggregate: '聚合', Cursor: '游标', Backup: '备份', Restore: '恢复',
  Performance: '性能', Optimization: '优化', Tuning: '调优', Connection: '连接', Pool: '池', Replica: '副本',
  Failover: '故障转移', Throughput: '吞吐', Latency: '延迟', Queue: '队列', Message: '消息', Event: '事件',
  Pattern: '模式', Patterns: '模式', Middleware: '中间件', Handler: '处理器', Router: '路由', Routing: '路由',
  Validation: '校验', Encryption: '加密', Token: '令牌', Request: '请求', Response: '响应', Client: '客户端',
  Server: '服务端', Gateway: '网关', Proxy: '代理', Static: '静态', Dynamic: '动态', Webhook: 'Webhook',
  Essential: '核心', Fundamentals: '基础', Best: '最佳', Practices: '实践', Common: '常见', Reference: '参考',
  Guide: '指南', Resource: '资源', Resources: '资源', Deep: '深入', Dive: '深入', Language: '语言',
  Based: '基于', Auth: '认证', Sent: '推送', Generation: '生成', Path: '路径', Parameters: '参数',
  Databases: '数据库', Locally: '本地', VCS: '版本控制', Copilot: 'Copilot', ClickHouse: 'ClickHouse',
  Related: '相关', Roadmaps: '路线', Rotation: '轮换', Manipulation: '操纵', Definition: '定义',
  Handling: '处理', Concurrency: '并发', Parallelism: '并行', Synchronization: '同步', Mutex: '互斥锁',
  Semaphore: '信号量', Channel: '通道', Goroutine: '协程', Interface: '接口', Struct: '结构体', Pointer: '指针',
  Slice: '切片', Array: '数组', Map: '映射', Loop: '循环', Condition: '条件', Variable: '变量', Constant: '常量',
  Function: '函数', Method: '方法', Module: '模块', Namespace: '命名空间', Annotation: '注解', Reflection: '反射',
  Serialization: '序列化', Deserialization: '反序列化', Compression: '压缩', Hashing: '哈希', Cookie: 'Cookie',
  Header: 'Header', Body: 'Body', Status: '状态', Endpoint: '端点', Endpoints: '端点', Versioning: '版本管理',
  Idempotency: '幂等', Pagination: '分页', Filtering: '过滤', Sorting: '排序', Rate: '速率', Limiting: '限流',
  Documentation: '文档', Specification: '规范', OpenAPI: 'OpenAPI', Swagger: 'Swagger', GraphQL: 'GraphQL',
  gRPC: 'gRPC', Protobuf: 'Protobuf', Microservice: '微服务', Monolith: '单体', Layer: '层', Layers: '层',
  Component: '组件', Components: '组件', Service: '服务', Discovery: '发现', Registry: '注册中心', Config: '配置',
  Management: '管理', Orchestration: '编排', Helm: 'Helm', Chart: 'Chart', Charts: 'Chart', Operator: 'Operator',
  CRD: 'CRD', RBAC: 'RBAC', Policy: '策略', Policies: '策略', Network: '网络', Storage: '存储', Compute: '计算',
  Serverless: '无服务器', Function: '函数', Lambda: 'Lambda', Cloud: '云', Native: '原生', Provider: '云厂商',
  Region: '区域', Zone: '可用区', Instance: '实例', Instances: '实例', Virtual: '虚拟', Machine: '机器',
  Bare: '裸', Metal: '机', Virtualization: '虚拟化', Hypervisor: '虚拟机监控', Kernel: '内核', Process: '进程',
  Thread: '线程', CPU: 'CPU', RAM: 'RAM', Disk: '磁盘', IOPS: 'IOPS', Bandwidth: '带宽', Firewall: '防火墙',
  Port: '端口', Socket: 'Socket', Protocol: '协议', IP: 'IP', Subnet: '子网', VPC: 'VPC', Route: '路由',
  Routing: '路由', NAT: 'NAT', VPN: 'VPN', Certificate: '证书', Certificates: '证书', Key: '键', Keys: '密钥',
  Rotation: '轮换', Audit: '审计', Compliance: '合规', Governance: '治理', Cost: '成本', Billing: '计费',
  Alert: '告警', Alerts: '告警', Metric: '指标', Metrics: '指标', Trace: '链路', Tracing: '链路追踪',
  Profile: '剖析', Profiling: '性能剖析', Benchmark: '基准测试', Debugging: '调试', Profiler: '分析器',
  Heap: '堆', Stack: '栈', Garbage: '垃圾', Collection: '回收', Allocation: '分配', Deallocation: '释放',
  Leak: '泄漏', Deadlock: '死锁', Race: '竞态', Condition: '条件', Atomic: '原子', Visibility: '可见性',
  Happens: '先行', Before: '前', After: '后', Barrier: '屏障', Fence: '栅栏', Lock: '锁', Locks: '锁',
  Read: '读', Write: '写', Concern: '关注', Concerns: '关注', Isolation: '隔离', Durability: '持久性',
  Atomicity: '原子性', Snapshot: '快照', Isolation: '隔离', Level: '级别', Serializable: '可串行化',
  Repeatable: '可重复', Committed: '已提交', Uncommitted: '未提交', Phantom: '幻读', Dirty: '脏', Read: '读',
  Index: '索引', Scan: '扫描', Seek: '查找', Full: '全', Partial: '部分', Covering: '覆盖', Composite: '复合',
  Unique: '唯一', Primary: '主', Foreign: '外', Referential: '引用', Integrity: '完整性', Normalization: '规范化',
  Denormalization: '反规范化', Sharding: '分片', Partitioning: '分区', Replication: '复制', Leader: '主节点',
  Follower: '从节点', Quorum: '法定人数', Consensus: '共识', CAP: 'CAP', BASE: 'BASE', Eventual: '最终',
  Strong: '强', Weak: '弱', Causal: '因果', Sequential: '顺序', Linearizable: '线性一致', Serializable: '可串行化',
};

const SQL_KW = {
  SELECT: 'SELECT 查询语句', INSERT: 'INSERT 插入语句', UPDATE: 'UPDATE 更新语句', DELETE: 'DELETE 删除语句',
  FROM: 'FROM 指定表', WHERE: 'WHERE 条件过滤', JOIN: 'JOIN 表连接', JOINS: 'JOIN 表连接', GROUP: 'GROUP BY 分组',
  HAVING: 'HAVING 分组过滤', ORDER: 'ORDER BY 排序', LIMIT: 'LIMIT 限制条数', OFFSET: 'OFFSET 跳过条数',
  UNION: 'UNION 联合查询', DISTINCT: 'DISTINCT 去重', COUNT: 'COUNT 计数', SUM: 'SUM 求和', AVG: 'AVG 平均值',
  MIN: 'MIN 最小值', MAX: 'MAX 最大值', CREATE: 'CREATE 创建', ALTER: 'ALTER 修改', DROP: 'DROP 删除',
  TABLE: 'TABLE 表', INDEX: 'INDEX 索引', VIEW: 'VIEW 视图', COMMIT: 'COMMIT 提交', ROLLBACK: 'ROLLBACK 回滚',
  TRUNCATE: 'TRUNCATE 清空表', ABS: 'ABS 绝对值函数', MOD: 'MOD 取模函数', CONCAT: 'CONCAT 拼接函数',
  LENGTH: 'LENGTH 长度函数', FLOOR: 'FLOOR 向下取整函数', CEIL: 'CEIL 向上取整函数', ROUND: 'ROUND 四舍五入函数',
  UPPER: 'UPPER 转大写函数', LOWER: 'LOWER 转小写函数', SUBSTRING: 'SUBSTRING 截取函数', NOW: 'NOW 当前时间函数',
};

const GIT_CMD = {
  'git init': 'git init（初始化仓库）', 'git config': 'git config（配置 Git）', 'git clone': 'git clone（克隆仓库）',
  'git add': 'git add（暂存变更）', 'git commit': 'git commit（提交）', 'git push': 'git push（推送到远程）',
  'git pull': 'git pull（拉取并合并）', 'git fetch': 'git fetch（拉取远程）', 'git merge': 'git merge（合并分支）',
  'git rebase': 'git rebase（变基）', 'git branch': 'git branch（分支管理）', 'git checkout': 'git checkout（切换分支）',
  'git status': 'git status（查看状态）', 'git log': 'git log（提交历史）', 'git diff': 'git diff（查看差异）',
  'git stash': 'git stash（暂存工作区）', 'git reset': 'git reset（重置）', 'git revert': 'git revert（撤销提交）',
  'git tag': 'git tag（标签）', 'git remote': 'git remote（远程管理）',
};

const PHRASE = new Map(Object.entries({
  'Learn the Basics': '基础知识', 'Basic SQL Syntax': 'SQL 基础语法', 'Basic RDBMS Concepts': 'RDBMS 基础概念',
  'RDBMS Benefits and Limitations': 'RDBMS 优缺点', 'RDBMS Benefits & Limitations': 'RDBMS 优缺点',
  'What is Version Control': '什么是版本控制', 'What is a Repository': '什么是仓库',
  'Why use Version Control': '为什么使用版本控制', 'Git vs Other VCS': 'Git 与其他 VCS 对比',
  'Local vs Global Config': '本地与全局配置', 'Install Git Locally': '本地安装 Git',
  'Cloning Repositories': '克隆仓库', 'Committing Changes': '提交变更', 'Pushing / Pulling Changes': '推送与拉取变更',
  'Viewing Commit History': '查看提交历史', 'Checkout Branch': '切换分支', 'Creating Branch': '创建分支',
  'Renaming Branch': '重命名分支', 'Deleting Branch': '删除分支', 'Branching Basics': '分支基础',
  'Git Remotes': 'Git 远程仓库', 'GitHub Essentials': 'GitHub 基础', 'Staging Area': '暂存区',
  'Working Directory': '工作区', 'Fetch without Merge': 'fetch 不自动合并',
  'Data Definition Language (DDL)': 'DDL 数据定义语言', 'Data Manipulation Language (DML)': 'DML 数据操纵语言',
  'Create Table': 'CREATE TABLE 建表', 'Alter Table': 'ALTER TABLE 改表', 'Drop Table': 'DROP TABLE 删表',
  'Truncate Table': 'TRUNCATE TABLE 清空表', 'Write-ahead Log': '预写式日志 WAL',
  'INNER JOIN': 'INNER JOIN 内连接', 'LEFT JOIN': 'LEFT JOIN 左连接', 'RIGHT JOIN': 'RIGHT JOIN 右连接',
  'FULL JOIN': 'FULL JOIN 全连接', 'CROSS JOIN': 'CROSS JOIN 交叉连接',
  'Query Processing': '查询处理', 'High Level Database Concepts': '数据库高级概念',
  'Installation and Setup': '安装与配置', 'Installation & Setup': '安装与配置', 'Installation / Setup': '安装与配置',
  '.gitignore': '.gitignore 忽略规则', 'What is Relational Database': '什么是关系型数据库',
  'What are Relational Databases': '什么是关系型数据库', 'SQL vs NoSQL Databases': 'SQL 与 NoSQL 数据库对比',
  'PostgreSQL vs NoSQL Databases': 'PostgreSQL 与 NoSQL 对比',   'PostgreSQL vs Other RDBMS': 'PostgreSQL 与其他 RDBMS 对比',
  'What is Relational Databases': '什么是关系型数据库', 'Relational Databases': '关系型数据库',
  'Token Based Auth': '基于令牌认证', 'Session Based Auth': '基于会话认证',
  'Server Sent Events': 'SSE 服务端推送', 'Path Parameters': '路径参数',
  'Key Generation and Rotation': '密钥生成与轮换', 'Key Generation & Rotation': '密钥生成与轮换',
  'URL, Query and Path Parameters': 'URL、查询与路径参数',
  'Install Git Locally': '本地安装 Git', 'Git vs Other VCS': 'Git 与其他 VCS 对比',
  'Related Roadmaps: DevOps': '相关路线：DevOps',
  'JavaScript / Node.js': 'JavaScript / Node.js 运行时',
  'Running Containers': '运行容器',
  'Building Container Images': '构建容器镜像',
  Dockerfiles: 'Dockerfile 文件',
  Dockerhub: 'Docker Hub 镜像仓库',
  '`panic` and `recover`': 'panic 与 recover 异常恢复',
  'Efficient Layer Caching': '高效层缓存',
  'Others (ghcr, ecr, gcr, acr, etc)': '其他镜像仓库（GHCR/ECR/GCR/ACR 等）',
  'Advanced Functions': '进阶函数',
  Introduction: '入门介绍', 'Introduction to Go': 'Go 语言入门', 'What are Containers?': '容器是什么',
  'Why do we need Containers?': '为什么需要容器', 'Bare Metal vs VMs vs Containers': '裸机、虚拟机与容器对比',
}));

const OPERATOR_ZH = {
  eq: '等于', ne: '不等于', gt: '大于', gte: '大于等于', lt: '小于', lte: '小于等于',
  in: '在集合中', nin: '不在集合中', and: '逻辑与', or: '逻辑或', match: '匹配', group: '分组',
  project: '投影', sort: '排序', limit: '限制', skip: '跳过', lookup: '关联', unwind: '展开',
};

function wordPart(part) {
  if (!part || /^[\u4e00-\u9fff]+$/.test(part)) return part;
  const upper = part.toUpperCase();
  if (SQL_KW[upper]) return SQL_KW[upper];
  const clean = part.replace(/[(),./:?;!]/g, '');
  if (WORD[clean]) return WORD[clean];
  const titled = clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
  if (WORD[titled]) return WORD[titled];
  if (/^[A-Z]{2,6}$/.test(part)) return part;
  return null;
}

export function translateLabel(label) {
  if (!label?.trim()) return '学习节点';
  const trimmed = label.trim();
  if (PHRASE.has(trimmed)) return PHRASE.get(trimmed);
  const cached = generatedZh(trimmed);
  if (cached) return cached;

  const lower = trimmed.toLowerCase();
  if (GIT_CMD[lower]) return GIT_CMD[lower];
  if (SQL_KW[trimmed.toUpperCase()]) return SQL_KW[trimmed.toUpperCase()];

  if (trimmed.startsWith('$')) {
    const k = trimmed.slice(1);
    return OPERATOR_ZH[k] ? `${trimmed}（${OPERATOR_ZH[k]}）` : `${trimmed} 操作符`;
  }
  if (trimmed.startsWith('`') && trimmed.endsWith('`')) return trimmed.slice(1, -1);
  if (/^git /i.test(trimmed)) return GIT_CMD[lower] || `${trimmed}（Git 命令）`;
  if (/^(go |docker |kubectl |mongo|redis-cli|psql )/i.test(trimmed)) return `${trimmed}（命令）`;

  let s = trimmed
    .replace(/^Learn the Basics$/i, '基础知识')
    .replace(/^Learn the (.+)$/i, (_, x) => `学习${translateLabel(x)}`)
    .replace(/^Basic (.+)$/i, (_, x) => `${translateLabel(x)}基础`)
    .replace(/^(.+) Basics$/i, (_, x) => `${translateLabel(x)}基础`)
    .replace(/^Introduction to (.+)$/i, (_, x) => `${translateLabel(x)}入门`)
    .replace(/^Introduction$/i, '入门介绍')
    .replace(/^What is (.+)\?*$/i, (_, x) => `什么是${translateLabel(x)}`)
    .replace(/^What are (.+)\?*$/i, (_, x) => `什么是${translateLabel(x)}`)
    .replace(/^Why (?:do we need|use) (.+)\?*$/i, (_, x) => `为什么需要${translateLabel(x)}`)
    .replace(/^Why (.+)\?*$/i, (_, x) => `为什么${translateLabel(x)}`)
    .replace(/^When to use (.+)\?*$/i, (_, x) => `何时使用${translateLabel(x)}`)
    .replace(/^How to (.+)$/i, (_, x) => `如何${translateLabel(x)}`)
    .replace(/^Setting up (.+)$/i, (_, x) => `搭建${translateLabel(x)}`)
    .replace(/^Installing (.+)$/i, (_, x) => `安装${translateLabel(x)}`)
    .replace(/^(.+) vs (.+)/i, (_, a, b) => `${translateLabel(a)}与${translateLabel(b)}对比`)
    .replace(/(.+) & (.+)/g, (_, a, b) => `${translateLabel(a)}与${translateLabel(b)}`)
    .replace(/(.+) and (.+)/gi, (_, a, b) => `${translateLabel(a)}与${translateLabel(b)}`);

  if (s !== trimmed && /[\u4e00-\u9fff]/.test(s)) return s.replace(/\s+/g, '').replace(/的的/g, '的');

  const pieces = trimmed.split(/\s*(\/|,|\(|\)|&|\||-)\s*/).filter(Boolean);
  const out = pieces.map((piece) => {
    if (PHRASE.has(piece)) return PHRASE.get(piece);
    if (/^[\u4e00-\u9fff]+$/.test(piece)) return piece;
    if (SQL_KW[piece.toUpperCase()]) return SQL_KW[piece.toUpperCase()];
    const words = piece.split(/\s+/).filter(Boolean);
    return words.map((w) => {
      const wp = wordPart(w);
      if (wp && wp !== w) return wp;
      if (/^[A-Z][a-zA-Z0-9.+#-]*$/.test(w) || /^[a-z]+$/i.test(w) && w.length <= 3) return w;
      return wordPart(w) || w;
    }).join('');
  }).join('');

  if (/[\u4e00-\u9fff]{2,}/.test(out)) return out.replace(/的的/g, '的');
  if (/[\u4e00-\u9fff]/.test(s)) return s.replace(/\s+/g, '').replace(/的的/g, '的');
  return `${trimmed}（技术术语）`;
}

export function isLearnableLabel(label) {
  if (!label || label === 'vertical node') return false;
  if (/roadmap\.sh|Find the detailed|Continue learning|partnership|Beginner to Pro|Visit the|Click to|Related Roadmaps|Have a look|Share your|Join the/i.test(label)) return false;
  if (/^https?:\/\//i.test(label)) return false;
  return true;
}
