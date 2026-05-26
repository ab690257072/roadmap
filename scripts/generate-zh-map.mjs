import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir = dirname(fileURLToPath(import.meta.url));

const SLUGS = [
  'backend', 'golang', 'docker', 'kubernetes', 'mongodb', 'sql', 'postgresql-dba',
  'redis', 'linux', 'git-github', 'devops', 'api-design', 'system-design',
];

const WORD = {
  Learn: '学习', the: '', a: '', an: '', of: '的', and: '与', or: '或', vs: '对比',
  Basic: '基础', Basics: '基础', Advanced: '进阶', Introduction: '入门', Overview: '概览',
  What: '什么是', Why: '为什么', How: '如何', When: '何时', Where: '在哪',
  Learn: '学习', Using: '使用', Setting: '设置', Setup: '配置', Install: '安装',
  Installing: '安装', Create: '创建', Creating: '创建', Delete: '删除', Deleting: '删除',
  Update: '更新', Updating: '更新', Drop: '删除', Alter: '修改', Truncate: '清空',
  Select: '查询', Insert: '插入', From: '来源表', Where: '条件', Join: '连接',
  Joins: '连接', Group: '分组', Order: '排序', Having: '分组过滤', Limit: '限制',
  Offset: '偏移', Union: '联合', Index: '索引', Indexes: '索引', View: '视图',
  Trigger: '触发器', Procedure: '存储过程', Function: '函数', Schema: '模式',
  Schemas: '模式', Table: '表', Tables: '表', Row: '行', Rows: '行', Column: '列',
  Columns: '列', Database: '数据库', Databases: '数据库', Query: '查询', Queries: '查询',
  Transaction: '事务', Transactions: '事务', Constraint: '约束', Constraints: '约束',
  Primary: '主', Foreign: '外', Key: '键', Unique: '唯一', Null: '空值',
  Default: '默认', Check: '检查', Data: '数据', Types: '类型', Type: '类型',
  Model: '模型', Relational: '关系型', Version: '版本', Control: '控制',
  Repository: '仓库', Repositories: '仓库', Branch: '分支', Branching: '分支',
  Branches: '分支', Commit: '提交', Committing: '提交', Merge: '合并', Merging: '合并',
  Remote: '远程', Remotes: '远程', Clone: '克隆', Cloning: '克隆', Staging: '暂存',
  Working: '工作', Directory: '目录', Global: '全局', Local: '本地', Config: '配置',
  Fetch: '拉取', Push: '推送', Pull: '拉取', Pulling: '拉取', Pushing: '推送',
  Checkout: '切换', Renaming: '重命名', Deleting: '删除', Viewing: '查看',
  History: '历史', Changes: '变更', Managing: '管理', Essentials: '要点',
  Other: '其他', Benefits: '优点', Limitations: '局限', Benefits: '优点',
  Concepts: '概念', Concept: '概念', Processing: '处理', Installation: '安装',
  High: '高级', Level: '级别', Object: '对象', Write: '写', ahead: '提前', Log: '日志',
  Domain: '域', Domains: '域', Attribute: '属性', Attributes: '属性', Tuple: '元组',
  Tuples: '元组', Relation: '关系', Relations: '关系', Cache: '缓存', Caching: '缓存',
  Session: '会话', Pub: '发布', Sub: '订阅', Cluster: '集群', Replication: '复制',
  Sharding: '分片', Persistence: '持久化', Memory: '内存', Eviction: '淘汰',
  Pipeline: '管道', Stream: '流', Streams: '流', Hash: '哈希', List: '列表',
  Set: '集合', Sorted: '有序', Bitmap: '位图', HyperLogLog: 'HyperLogLog',
  Geospatial: '地理空间', Security: '安全', Authentication: '认证', Authorization: '授权',
  Container: '容器', Containers: '容器', Image: '镜像', Images: '镜像', Volume: '卷',
  Volumes: '卷', Network: '网络', Networking: '网络', Orchestration: '编排',
  Pod: 'Pod', Pods: 'Pod', Service: '服务', Services: '服务', Deployment: '部署',
  Deployments: '部署', Ingress: 'Ingress', ConfigMap: 'ConfigMap', Secret: '密钥',
  Node: '节点', Nodes: '节点', Worker: 'Worker', Scheduler: '调度', Scaling: '扩缩',
  Monitor: '监控', Monitoring: '监控', Logging: '日志', Observability: '可观测性',
  Load: '负载', Balancer: '均衡', Balancing: '均衡', Circuit: '熔断', Breaker: '断路',
  Microservice: '微服务', Monolith: '单体', Architecture: '架构', Design: '设计',
  System: '系统', Scalability: '扩展性', Availability: '可用性', Consistency: '一致性',
  Partition: '分区', Tolerance: '容忍', CAP: 'CAP', REST: 'REST', GraphQL: 'GraphQL',
  gRPC: 'gRPC', API: 'API', HTTP: 'HTTP', HTTPS: 'HTTPS', OAuth: 'OAuth', JWT: 'JWT',
  CORS: 'CORS', Rate: '速率', Limiting: '限流', Pagination: '分页', Idempotency: '幂等',
  Terminal: '终端', Shell: 'Shell', Command: '命令', Commands: '命令', File: '文件',
  Files: '文件', Process: '进程', Processes: '进程', Permission: '权限', Permissions: '权限',
  User: '用户', Users: '用户', Group: '组', Groups: '组', Package: '包', Packages: '包',
  Manager: '管理器', Managers: '管理器', Script: '脚本', Scripting: '脚本',
  Continuous: '持续', Integration: '集成', Delivery: '交付', Deployment: '部署',
  Infrastructure: '基础设施', Code: '代码', Pipeline: '流水线', Pipelines: '流水线',
  Testing: '测试', Test: '测试', Unit: '单元', Integration: '集成', E2E: '端到端',
  RDBMS: 'RDBMS', NoSQL: 'NoSQL', ACID: 'ACID', MVCC: 'MVCC', DDL: 'DDL', DML: 'DML',
  DCL: 'DCL', TCL: 'TCL', CRUD: 'CRUD', ORM: 'ORM', SQL: 'SQL', JSON: 'JSON',
  BSON: 'BSON', XML: 'XML', YAML: 'YAML', TCP: 'TCP', UDP: 'UDP', DNS: 'DNS',
  SSL: 'SSL', TLS: 'TLS', SSH: 'SSH', FTP: 'FTP', SMTP: 'SMTP',
  Without: '不', Merge: '合并', Globally: '全局', Locally: '本地', Essentials: '基础',
  Renaming: '重命名', Deleting: '删除', without: '不', with: '与', into: '为',
  for: '用于', to: '到', in: '在', on: '在', at: '在', by: '按', from: '从',
  is: '是', are: '是', do: '做', we: '我们', need: '需要', use: '使用', your: '你的',
  First: '第一个', Application: '应用', Applications: '应用', Provider: '服务商',
  Managed: '托管', Alternatives: '替代方案', Terminologies: '术语', Terminology: '术语',
  Keywords: '关键字', Syntax: '语法', Operator: '操作符', Operators: '操作符',
  Aggregate: '聚合', Aggregation: '聚合', Cursor: '游标', Cursors: '游标',
  Backup: '备份', Restore: '恢复', Dump: '导出', Import: '导入', Export: '导出',
  Performance: '性能', Optimization: '优化', Tuning: '调优', Vacuum: 'Vacuum',
  Analyze: '分析', Explain: '执行计划', Plan: '计划', Lock: '锁', Locks: '锁',
  Deadlock: '死锁', Isolation: '隔离', Durability: '持久性', Atomicity: '原子性',
  Consistency: '一致性', WAL: 'WAL', Checkpoint: '检查点', Buffer: '缓冲', Pool: '池',
  Connection: '连接', Connections: '连接', Pooling: '连接池', Replica: '副本',
  Replicas: '副本', Master: '主', Slave: '从', Primary: '主', Secondary: '从',
  Failover: '故障转移', High: '高', Availability: '可用', Fault: '故障', Tolerance: '容忍',
  Throughput: '吞吐', Latency: '延迟', Queue: '队列', Queues: '队列', Message: '消息',
  Broker: '代理', Event: '事件', Events: '事件', Driven: '驱动', Pattern: '模式',
  Patterns: '模式', Singleton: '单例', Factory: '工厂', Observer: '观察者',
  Strategy: '策略', Proxy: '代理', Decorator: '装饰器', Adapter: '适配器',
  Facade: '外观', Repository: '仓储', Layer: '层', Layers: '层', MVC: 'MVC',
  Middleware: '中间件', Handler: '处理器', Router: '路由', Routing: '路由',
  Validation: '校验', Serialization: '序列化', Deserialization: '反序列化',
  Encoding: '编码', Decoding: '解码', Compression: '压缩', Encryption: '加密',
  Decryption: '解密', Hashing: '哈希', Salt: '盐值', Token: '令牌', Tokens: '令牌',
  Cookie: 'Cookie', Cookies: 'Cookie', Header: 'Header', Headers: 'Header',
  Body: 'Body', Request: '请求', Requests: '请求', Response: '响应', Responses: '响应',
  Status: '状态', Client: '客户端', Server: '服务端', Gateway: '网关', Proxy: '代理',
  Reverse: '反向', Forward: '正向', CDN: 'CDN', Static: '静态', Dynamic: '动态',
  Webhook: 'Webhook', Webhooks: 'Webhook', SSE: 'SSE', WebSocket: 'WebSocket',
  Polling: '轮询', Long: '长', Short: '短', Polling: '轮询', Real: '实时', Time: '时间',
  Essential: '核心', Fundamentals: '基础', Fundamentals: '基础', Deep: '深入', Dive: '深入',
  Best: '最佳', Practices: '实践', Practice: '实践', Common: '常见', Mistakes: '错误',
  Pitfalls: '陷阱', Tips: '技巧', Tricks: '技巧', Cheat: '速查', Sheet: '表',
  Reference: '参考', Guide: '指南', Tutorial: '教程', Roadmap: '路线图', Resources: '资源',
};

const SQL_KW = {
  SELECT: 'SELECT 查询语句', INSERT: 'INSERT 插入语句', UPDATE: 'UPDATE 更新语句',
  DELETE: 'DELETE 删除语句', FROM: 'FROM 指定表', WHERE: 'WHERE 条件过滤',
  JOIN: 'JOIN 表连接', JOINS: 'JOIN 表连接', 'INNER JOIN': 'INNER JOIN 内连接',
  'LEFT JOIN': 'LEFT JOIN 左连接', 'RIGHT JOIN': 'RIGHT JOIN 右连接',
  'FULL JOIN': 'FULL JOIN 全连接', 'CROSS JOIN': 'CROSS JOIN 交叉连接',
  GROUP: 'GROUP BY 分组', BY: 'BY', HAVING: 'HAVING 分组过滤', ORDER: 'ORDER BY 排序',
  LIMIT: 'LIMIT 限制条数', OFFSET: 'OFFSET 跳过条数', UNION: 'UNION 联合查询',
  DISTINCT: 'DISTINCT 去重', AS: 'AS 别名', ON: 'ON 连接条件', AND: 'AND 与',
  OR: 'OR 或', NOT: 'NOT 非', IN: 'IN 集合匹配', EXISTS: 'EXISTS 存在性',
  BETWEEN: 'BETWEEN 范围', LIKE: 'LIKE 模糊匹配', IS: 'IS', NULL: 'NULL 空值',
  COUNT: 'COUNT 计数', SUM: 'SUM 求和', AVG: 'AVG 平均值', MIN: 'MIN 最小值',
  MAX: 'MAX 最大值', CREATE: 'CREATE 创建', ALTER: 'ALTER 修改', DROP: 'DROP 删除',
  TABLE: 'TABLE 表', INDEX: 'INDEX 索引', VIEW: 'VIEW 视图', TRIGGER: 'TRIGGER 触发器',
  GRANT: 'GRANT 授权', REVOKE: 'REVOKE 撤销', COMMIT: 'COMMIT 提交', ROLLBACK: 'ROLLBACK 回滚',
  SAVEPOINT: 'SAVEPOINT 保存点', TRUNCATE: 'TRUNCATE 清空表',
};

const GIT_CMD = {
  'git init': 'git init（初始化仓库）', 'git config': 'git config（配置 Git）',
  'git clone': 'git clone（克隆仓库）', 'git add': 'git add（暂存变更）',
  'git commit': 'git commit（提交）', 'git push': 'git push（推送到远程）',
  'git pull': 'git pull（拉取并合并）', 'git fetch': 'git fetch（拉取远程）',
  'git merge': 'git merge（合并分支）', 'git rebase': 'git rebase（变基）',
  'git branch': 'git branch（分支管理）', 'git checkout': 'git checkout（切换分支）',
  'git status': 'git status（查看状态）', 'git log': 'git log（提交历史）',
  'git diff': 'git diff（查看差异）', 'git stash': 'git stash（暂存工作区）',
  'git reset': 'git reset（重置）', 'git revert': 'git revert（撤销提交）',
  'git tag': 'git tag（标签）', 'git remote': 'git remote（远程管理）',
};

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function titleCaseWords(text) {
  return text.replace(/\b([a-z]+)\b/gi, (m) => WORD[m] ?? WORD[m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()] ?? m);
}

function translateLabel(label) {
  if (!label?.trim()) return '学习节点';
  const trimmed = label.trim();

  if (GIT_CMD[trimmed.toLowerCase()]) return GIT_CMD[trimmed.toLowerCase()];
  if (SQL_KW[trimmed.toUpperCase()]) return SQL_KW[trimmed.toUpperCase()];

  if (trimmed.startsWith('$')) {
    const ops = { eq: '等于', ne: '不等于', gt: '大于', gte: '大于等于', lt: '小于', lte: '小于等于',
      in: '在集合中', nin: '不在集合中', and: '逻辑与', or: '逻辑或', match: '匹配', group: '分组',
      project: '投影', sort: '排序', limit: '限制', skip: '跳过', lookup: '关联', unwind: '展开' };
    const k = trimmed.slice(1);
    return ops[k] ? `${trimmed}（${ops[k]}）` : `${trimmed} 操作符`;
  }

  if (trimmed.startsWith('`') && trimmed.endsWith('`')) {
    return `${trimmed.slice(1, -1)}`;
  }

  if (/^git /i.test(trimmed)) return GIT_CMD[trimmed.toLowerCase()] || `${trimmed}（Git 命令）`;
  if (/^(go |docker |kubectl |mongo|redis-cli)/i.test(trimmed)) return `${trimmed}（命令）`;

  let s = trimmed
    .replace(/^Learn the Basics$/i, '基础知识')
    .replace(/^Learn the (.+)$/i, '学习$1')
    .replace(/^Basic (.+)$/i, '$1 基础')
    .replace(/^(.+) Basics$/i, '$1 基础')
    .replace(/^Introduction to (.+)$/i, '$1 入门')
    .replace(/^Introduction$/i, '入门介绍')
    .replace(/^What is (.+)\?*$/i, '什么是$1')
    .replace(/^What are (.+)\?*$/i, '什么是$1')
    .replace(/^What is a (.+)\?*$/i, '什么是$1')
    .replace(/^What is an (.+)\?*$/i, '什么是$1')
    .replace(/^Why (?:do we need|use) (.+)\?*$/i, '为什么需要$1')
    .replace(/^Why (.+)\?*$/i, '为什么$1')
    .replace(/^When to use (.+)\?*$/i, '何时使用$1')
    .replace(/^How to (.+)$/i, '如何$1')
    .replace(/^How (.+)$/i, '如何$1')
    .replace(/^Setting up (.+)$/i, '搭建$1')
    .replace(/^Installing (.+)$/i, '安装$1')
    .replace(/^Install (.+)$/i, '安装$1')
    .replace(/^Create (.+)$/i, '创建$1')
    .replace(/^Creating (.+)$/i, '创建$1')
    .replace(/^Managing (.+)$/i, '管理$1')
    .replace(/^Working with (.+)$/i, '使用$1')
    .replace(/^Using (.+)$/i, '使用$1')
    .replace(/^Understanding (.+)$/i, '理解$1')
    .replace(/(.+) vs (.+)/gi, '$1 与 $2 对比')
    .replace(/(.+) & (.+)/g, '$1 与 $2')
    .replace(/(.+) and (.+)/gi, '$1 与 $2')
    .replace(/(.+) or (.+)/gi, '$1 或 $2')
    .replace(/Data Definition Language \(DDL\)/i, 'DDL 数据定义语言')
    .replace(/Data Manipulation Language \(DML\)/i, 'DML 数据操纵语言')
    .replace(/Data Control Language \(DCL\)/i, 'DCL 数据控制语言')
    .replace(/Transaction Control Language \(TCL\)/i, 'TCL 事务控制语言')
    .replace(/Basic SQL Syntax/i, 'SQL 基础语法')
    .replace(/Basic RDBMS Concepts/i, 'RDBMS 基础概念')
    .replace(/RDBMS Benefits and Limitations/i, 'RDBMS 优缺点')
    .replace(/RDBMS Benefits & Limitations/i, 'RDBMS 优缺点')
    .replace(/Relational Databases/i, '关系型数据库')
    .replace(/Relational Database/i, '关系型数据库')
    .replace(/Version Control/i, '版本控制')
    .replace(/Version control/i, '版本控制')
    .replace(/Create Table/i, 'CREATE TABLE 建表')
    .replace(/Alter Table/i, 'ALTER TABLE 改表')
    .replace(/Drop Table/i, 'DROP TABLE 删表')
    .replace(/Truncate Table/i, 'TRUNCATE TABLE 清空表')
    .replace(/Select Statement/i, 'SELECT 查询语句')
    .replace(/Fetch without Merge/i, 'fetch 不自动合并')
    .replace(/Local vs Global Config/i, '本地与全局配置')
    .replace(/Local vs Global/i, '本地与全局')
    .replace(/Cloning Repositories/i, '克隆仓库')
    .replace(/Committing Changes/i, '提交变更')
    .replace(/Pushing \/ Pulling Changes/i, '推送与拉取变更')
    .replace(/Viewing Commit History/i, '查看提交历史')
    .replace(/Checkout Branch/i, '切换分支')
    .replace(/Creating Branch/i, '创建分支')
    .replace(/Renaming Branch/i, '重命名分支')
    .replace(/Deleting Branch/i, '删除分支')
    .replace(/Branching Basics/i, '分支基础')
    .replace(/Git Remotes/i, 'Git 远程仓库')
    .replace(/GitHub Essentials/i, 'GitHub 基础')
    .replace(/Install Git Locally/i, '本地安装 Git')
    .replace(/Staging Area/i, '暂存区')
    .replace(/Working Directory/i, '工作区')
    .replace(/Write-ahead Log/i, '预写式日志 WAL')
    .replace(/Query Processing/i, '查询处理')
    .replace(/High Level Database Concepts/i, '数据库高级概念')
    .replace(/High Level/i, '高级')
    .replace(/Installation and Setup/i, '安装与配置')
    .replace(/Installation & Setup/i, '安装与配置')
    .replace(/Installation \/ Setup/i, '安装与配置')
    .replace(/\.gitignore/i, '.gitignore 忽略规则');

  s = s.split(/\s+/).map((part) => {
    if (!part) return '';
    if (/^[\u4e00-\u9fff]+$/.test(part)) return part;
    const upper = part.toUpperCase();
    if (SQL_KW[upper]) return SQL_KW[upper];
    const clean = part.replace(/[(),./]/g, '');
    if (WORD[clean]) return WORD[clean];
    if (WORD[clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase()]) {
      return WORD[clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase()];
    }
    if (/^[A-Z]{2,}$/.test(part)) return part;
    if (/^[a-z]+$/i.test(clean) && clean.length <= 3) return part;
    return part;
  }).join(' ').replace(/\s+/g, ' ').trim();

  s = s
    .replace(/\bthe\b/gi, '')
    .replace(/\ba\b/gi, '')
    .replace(/\ban\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (/[\u4e00-\u9fff]/.test(s) && s.length >= 2) return s;

  const fallback = trimmed
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/[\s/]+/)
    .map((w) => WORD[w] || WORD[w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()] || w)
    .filter(Boolean)
    .join('');

  if (/[\u4e00-\u9fff]/.test(fallback)) return fallback;
  return `${trimmed}（待查阅英文资料）`;
}

async function main() {
  const map = {};
  for (const slug of SLUGS) {
    const res = await fetch(`https://roadmap.sh/api/v1-official-roadmap/${slug}`, {
      headers: { 'user-agent': 'backend-roadmap-learn-importer' },
    });
    const source = await res.json();
    for (const node of source.nodes) {
      if (node.type !== 'topic' && node.type !== 'subtopic') continue;
      const label = String(node.data?.label || '').trim();
      if (!label || /roadmap\.sh|Find the detailed|partnership|Beginner to Pro/i.test(label)) continue;
      map[label] = translateLabel(label);
    }
  }
  const out = join(__dir, 'generated-zh-map.json');
  writeFileSync(out, JSON.stringify(map, null, 2));
  const bad = Object.entries(map).filter(([, zh]) => !/[\u4e00-\u9fff]/.test(zh));
  console.log(`generated ${Object.keys(map).length} entries, ${bad.length} without Chinese`);
  if (bad.length) console.log('samples:', bad.slice(0, 10));
}

main();
