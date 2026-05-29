import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_9: Record<string, DeepTutorial> = {
  "yAWJWj4D761M0i8iERID3": {
    mentalModel: '基础运维是后端的"生存技能"——代码写得再好，部署上去了跑不起来、出问题不会查，等于零。会看日志、查进程、排网络、处理部署问题是后端的基本功。',
    sections: [
      { title: '基础运维技能清单', content: '1) SSH 登录服务器、传输文件（scp/rsync）2) 查看进程（ps/top/htop）和端口（netstat/ss）3) 查看日志（tail -f /var/log/... + journalctl）4) 磁盘管理（df/du/find 清理空间）5) 防火墙基础（iptables/安全组/ufw）6) 了解 systemd 服务管理 7) 能用 Docker 部署应用。不需要成为专业运维，但要"服务器出问题能自己搞定"而不是每次叫运维。' },
    ],
    diagnosis: [
      { symptom: '服务器用 df -h 发现磁盘空间 100% 满了——应用全部崩溃', cause: '日志文件无限增长——没做 log rotation（/var/log 下单个文件几十 GB）。', fix: '1) 配置 logrotate：按大小/按时间轮转日志 2) Docker logs 限制：docker run --log-opt max-size=10m 3) 设置磁盘使用率监控告警。' },
      { symptom: 'SSH 登录后找不到应用进程，原来是用 root 启动的但用普通用户查找', cause: '没有统一的进程管理方式——不知道服务是谁启动的、怎么启的。', fix: '1) 统一用 systemd 管理服务 2) systemctl status myapp 查看服务状态 3) 文档化每个服务的启停方式和配置路径。' },
    ],
    exercises: [
      { level: '基础', task: '登录一台 Linux 服务器，完成：查看磁盘空间、查看内存、查看正在监听的端口、查看最近的系统日志', hint: 'df -h / free -h / ss -tlnp / journalctl -n 20', answer: 'df -h（磁盘）、free -h（内存）、ss -tlnp（端口和对应进程）、journalctl -n 20（最近 20 条系统日志）。这四个命令让你对服务器状态有初步了解。' },
    ],
  },

  "wrl7HHWXOaxoKVlNZxZ6d": {
    mentalModel: '数据复制就像"复印机"——主库每写一页，就给从库复印一份。读请求可以分发到多个从库（读写分离），主库挂了从库顶上（高可用）。',
    sections: [
      { title: '复制模式', content: '主从复制（Leader-Follower）：写走主、读走从。多主复制（Multi-Leader）：多个主库都可以写→需要解决冲突。PG 默认主从复制，多主需要额外工具（BDR）。同步复制 vs 异步复制：同步→主库等从库确认后才返回成功（不丢数据但慢）。异步→主库不管从库是否收到（快但可能丢数据）。PG 支持可配置的同步复制（synchronous_commit）。' },
    ],
    diagnosis: [
      { symptom: '从库同步延迟导致备库切换时丢失了刚提交的事务', cause: '使用的是异步复制——主库 COMMIT 后不等从库确认。', fix: '1) 核心业务用同步复制（synchronous_commit = on）2) 如果必须异步，容忍少量数据丢失 3) 监控复制延迟（seconds_behind_master / pg_stat_replication）。' },
      { symptom: '主库挂了后从库提升为新主库，但应用连的是旧主库 IP', cause: '没有自动 failover 机制——主库 IP 是写死的。', fix: '1) 用 keepalived/Patroni 做 VIP 自动漂移 2) 或应用用数据库连接串含多个主机（PG: host=master,slave1,slave2）3) 云服务用 RDS 等托管服务自动 failover。' },
    ],
    exercises: [
      { level: '基础', task: '对比同步复制和异步复制的取舍', hint: '持久性 vs 性能', answer: '同步：COMMIT 返回前确保 WAL 已到达从库→零数据丢失→但延迟高（等网络+从库处理）。异步：COMMIT 立即返回→延迟低→但如果主库在从库同步前挂了，已提交的数据可能丢失。' },
    ],
  },

  "LAdKDJ4LcMaDWqslMvE8X": {
    mentalModel: 'CAP 定理是分布式系统的"不可能三角"——一致性（C）、可用性（A）、分区容错（P）三者最多同时满足两个。现实中网络分区一定会发生（P 没得选），所以实际上是在 C 和 A 之间取舍。',
    sections: [
      { title: 'CP vs AP', content: 'CP 系统（牺牲可用性）：网络分区时少数节点停止服务确保数据一致。如 MongoDB（默认强一致性模式）、etcd（Raft 共识）。银行转账必须 CP。AP 系统（牺牲一致性）：网络分区时所有节点继续服务但数据可能暂时不一致。如 Cassandra、DynamoDB（最终一致性）。社交媒体点赞数差几个没关系。PG 是 CP（同步复制模式）或 AP（异步复制模式）可配置。' },
    ],
    diagnosis: [
      { symptom: '用户查询余额结果在不同时间返回不同数值（最终一致性）', cause: '选了 AP 系统（Cassandra/DynamoDB）却用于余额查询这种需要强一致性的场景。', fix: '1) 余额/库存等场景用 CP 系统（PG 同步复制/etcd）2) 调整 DynamoDB 的一致性级别（ConsistentRead）3) AP 系统适合点赞数/浏览数等可容忍短期不一致的场景。' },
      { symptom: '分布式系统选了强一致性后可用性大幅下降——P99 延迟翻倍', cause: '同步复制/Quorum 写操作等待多数节点确认——网络延迟被放大。', fix: '1) 评估真的需要强一致性还是最终一致性就够了 2) 用 Quorum N/2+1 而非 ALL 3) 关键操作强一致，非关键操作用最终一致。' },
    ],
    exercises: [
      { level: '基础', task: '分析一个场景该选 CP 还是 AP：用户余额查询', hint: '看到错误余额的后果', answer: 'CP！用户余额必须准确——看到"比实际多"的余额可能让用户透支消费。宁可暂时不可用（"系统维护中"）也不能返回错误数据。' },
    ],
  },

  "HEQGhXCFv9Fi82V7MyRwt": {
    mentalModel: '系统设计就是从"搭积木"到"设计城市"的飞跃——不再关心一个函数怎么写，而是关心系统怎么拆分、服务怎么通信、数据怎么流动、故障怎么隔离。',
    sections: [
      { title: '设计后端的思维框架', content: '1) 需求分析：用户量？数据量？延迟要求？一致性要求？2) 容量估算：QPS（每秒请求数）、存储量、带宽 3) 数据模型设计：表结构/索引/分区/缓存策略 4) 服务拆分：单体还是微服务？怎么划分边界？5) 通信方式：REST/gRPC/消息队列 6) 可靠性：冗余/降级/熔断/限流/监控 7) 演进路线：V1 快速上线→V2 优化瓶颈→V3 架构演进。系统设计不是一次设计完——是持续演进的过程。' },
    ],
    diagnosis: [
      { symptom: '系统设计面试中一上来就开始画图，5 分钟后面试官说方向偏了', cause: '没有先澄清需求——功能范围、用户量级、延迟要求都不清楚就开始设计。', fix: '1) 面试前 5 分钟只做需求澄清：问清楚功能范围、用户量级、性能要求 2) 确认假设（如假设 1000 万用户、10 万日活）3) 和面试官达成共识后再开始设计。' },
      { symptom: '容量估算结果偏了几个数量级——估算 10 QPS 实际 10000 QPS', cause: '凭直觉估算而非计算——没有用基本数学做 back-of-the-envelope 估算。', fix: '1) 用反推法：总用户 x 日活率 x 人均操作数 / 86400 2) 读写比：根据经验（如微博 100:1 读写比）3) 存储：单条大小 x 条数 x 保留时间。' },
    ],
    exercises: [
      { level: '进阶', task: '为一个"短链接服务"（类似 bit.ly）做容量估算', hint: '用户量 × 频率 × 存储', answer: '假设 100 万日活用户、每人每天创建 1 个短链接→100 万写/天≈12 QPS。读取假设 100:1 读写比→1200 QPS。存储：每个短链接 200B，100 万/天×365 天×10 年≈730GB。结论：一个 PG 实例+Redis 缓存就能支撑。' },
    ],
  },

  "uSLzfLPXxS5-P7ozscvjZ": {
    mentalModel: '系统设计面试考察的不是"背答案"而是"权衡思考"——面试官想看你怎么分析问题、做取舍、处理边界。没有完美方案，只有"知道为什么这样选"。',
    sections: [
      { title: '系统设计面试框架', content: '1) 澄清需求（5 分钟）：问清楚功能范围、用户量级、延迟要求 2) 容量估算（5 分钟）：QPS/存储/带宽粗略估算 3) API 设计（5 分钟）：定义接口和数据模型 4) 详细设计（15 分钟）：画架构图、讨论数据库选型、缓存策略、扩展方案 5) 瓶颈和优化（5 分钟）：讨论可能的瓶颈和解决方案。注意：不要跳步骤——新手最常见的错误是一上来就画图。先确认需求！' },
    ],
    diagnosis: [
      { symptom: '系统设计面试答了个很完美的架构但面试官说成本太高', cause: '没有考虑实际约束——过度设计导致了不必要的复杂度。', fix: '1) 先给简单方案 -> 分析瓶颈 -> 再提出优化 2) 明确说明 trade-off：简单方案适合初期，复杂方案适合规模化后 3) 给出演进路线而非一次到位的最终架构。' },
      { symptom: '被问到 CAP 取舍时答了选 CP 就行——没解释为什么舍弃 A', cause: '只给了结论没给分析——面试官想看权衡过程而非记住答案。', fix: '1) 分析场景：银行转账（CP 牺牲 A）、微博点赞（AP 牺牲 C）2) 解释为什么在这个场景选这个取舍 3) 给出具体的技术方案（如用 Quorum 写保证一致性）。' },
    ],
    exercises: [
      { level: '进阶', task: '用系统设计框架分析"设计一个 Twitter 首页时间线"', hint: '用户发推→粉丝 timeline → 读扩散 vs 写扩散', answer: '读扩散：用户下拉刷新时实时查所有关注者的推文→读时计算（SQL JOIN）。写扩散：发推时写入所有粉丝的 timeline 表→读时直接 SELECT（读快写慢）。Twitter 从读扩散切到写扩散+混合（大 V 用读扩散、普通用户用写扩散）。' },
    ],
  },

  "0TMdly8yiqnNR8sx36iqc": {
    mentalModel: '代码评审不是"找茬"是"传功"——被评审者从反馈中学到更好的实践，评审者从阅读不同思路中扩展视野。好的 Code Review 让团队整体水平提升。',
    sections: [
      { title: 'Code Review 最佳实践', content: '提交者：PR < 400 行（一次只做一件事）、写清楚 what & why、自己先 Review 一遍。评审者：24h 内反馈、关注逻辑和安全性而非风格（lint 做）、区分"必须改"和"建议改"。Review 清单：1) 逻辑正确吗？2) 安全吗（注入/越权/密钥泄露）？3) 有测试吗？4) 错误处理了吗？5) 可维护吗（命名/注释/复杂度）？工具：GitHub PR Review + Review Pad/CodeRabbit 等 AI 辅助做第一轮。' },
    ],
    diagnosis: [
      { symptom: 'AI Code Review 工具把所有变量命名都标成了 warning', cause: 'AI 不了解项目命名的上下文——它按通用规则检查但项目有自己的命名约定。', fix: '1) 配置 AI Review 规则适配项目风格 2) AI 做第一轮过滤明显的 bug/安全漏洞，人工做第二轮 3) 区分 AI 的建议和团队规范。' },
    ],
    exercises: [
      { level: '基础', task: '列举 Code Review 时应该关注的 5 个方面', hint: '逻辑/安全/测试/错误/可维护', answer: '1) 业务逻辑是否正确 2) 安全问题（SQL 注入/XSS/权限）3) 测试是否充分 4) 错误处理是否完善 5) 代码可读性和可维护性。风格问题交给 lint 工具。' },
    ],
  },

  "EYT2rTLZ8tUW2u8DOnAWF": {
    mentalModel: '重构不是"重写"——重构是整理房间（内部结构更好、行为不变），重写是推倒重建（全部重新来）。AI 辅助重构是把"体力活"自动化——提取函数、消除重复、简化条件——你审查决策。',
    sections: [
      { title: '重构的红线和技巧', content: '红线：有测试保护才重构（红→绿→重构）。小步快跑：每次改一点就跑测试——不要改了 20 个文件再跑。常见手法：Extract Method（长函数拆小）、Extract Variable（魔法数字变命名常量）、Remove Duplication（DRY）、Simplify Conditional（用多态/策略代替 if-else 塔）、Replace Temp with Query。AI 做重构：选中代码 → "extract this into a function" → AI 生成 → Review → Accept。' },
    ],
    diagnosis: [
      { symptom: 'AI 重构把一个 200 行的函数拆成了 20 个函数——更难读了', cause: 'AI 只做语法层面的拆分不理解业务语义。', fix: '1) AI 重构后人工审查函数边界是否合理 2) 重构目标不是函数越短越好——是每个函数做一件事且命名清晰 3) 保持业务逻辑的内聚性。' },
    ],
    exercises: [
      { level: '基础', task: '找一段你以前写的"长函数"用 Extract Method 重构', hint: '把一段有明显边界的代码提取成独立函数', answer: '识别长函数中"做一件事"的代码块→提取为独立函数并命名→原位置调用新函数。例如 processOrder() 中的 validateInput()/calculateTotal()/notifyUser() 各提取成独立函数。' },
    ],
  },

  "RcC1fVuePQZ59AsJfeTdR": {
    mentalModel: 'Claude Code 是"终端里的 AI 编程伙伴"——不只是补全代码，而是理解你的整个项目、读写文件、执行命令、Debug 问题。像一个 24 小时在线的结对编程高手。',
    sections: [
      { title: 'Claude Code 在后端开发中的使用', content: '1) 理解和解释陌生代码库——"这个 middleware 做了什么？"秒懂 2) 写测试——"给这个函数写 3 个测试用例" 3) 重构——"把这段代码拆成更小的函数" 4) 写文档——"为这个 API 生成 OpenAPI 规范" 5) Debug——"这个错误是什么意思？"。但记住：AI 的建议必须经过你这个"人类审查官"——你对自己的代码负最终责任。' },
    ],
    diagnosis: [
      { symptom: 'Claude Code 修改了一个文件后整个项目编译失败', cause: 'AI 修改时没考虑跨文件依赖——改了函数签名但没更新调用处。', fix: '1) 让 Claude Code 修改后自动运行编译和测试 2) 多文件修改时明确告诉 AI 需要注意的依赖关系 3) 每次 AI 修改后 git diff 检查改动范围。' },
      { symptom: 'Claude Code 执行危险命令删除了重要文件', cause: '没有配置权限——Claude Code 可以执行任意 bash 命令。', fix: '1) 在 CLAUDE.md/project 指令中明确禁止的操作 2) 开启 Permission 模式——敏感操作需人工确认 3) 项目重要文件做 git 和备份保护。' },
    ],
    exercises: [
      { level: '基础', task: '用 Claude Code 解释你项目中一个你不太理解的函数', hint: '"explain what this function does"', answer: '选中函数 → 让 Claude Code 解释。Claude 会分析函数的输入输出、业务逻辑、边界情况和潜在问题。这是理解陌生代码的最快方式。' },
    ],
  },

  "CKlkVK_7GZ7xzIUHJqZr8": {
    mentalModel: 'Cursor 是 VS Code 的"AI 增强版"——不只是补全，而是理解整个代码库、跨文件编辑、Chat 窗口随时问问题、Composer 让你描述需求自动写代码。',
    sections: [
      { title: 'Cursor vs Copilot', content: 'Copilot：代码补全为主，inline 建议。Cursor：AI 原生 IDE——有 Chat（问答）、Composer（写代码）、跨文件 Context（自动 RAG 整个项目）、Apply（直接应用建议到代码）。对后端：Cursor 在理解多文件关系（Controller→Service→Repository）方面比 Copilot 强。' },
    ],
    diagnosis: [
      { symptom: 'Cursor 在大型项目中自动补全延迟很高', cause: 'Cursor 索引了整个项目但项目太大——每次补全都需要做全项目 RAG。', fix: '1) .cursorignore 排除不需要索引的目录（node_modules/build）2) 配置 Codebase 索引的范围 3) 大型项目分 workspace 管理。' },
      { symptom: 'Cursor 的建议代码引用了项目中不存在的模块', cause: 'AI 根据项目名称和结构猜测——它产生了幻觉依赖。', fix: '1) 检查 AI 建议中的 import/reference 是否在项目中存在 2) 告诉 Cursor Codebase 的实际结构和依赖 3) 不要接受你不理解的 import。' },
    ],
    exercises: [
      { level: '基础', task: '说出 Cursor 和 GitHub Copilot 在使用模型上的最大不同', hint: 'Copilot 用什么模型', answer: 'Copilot 使用 OpenAI Codex 模型。Cursor 支持多种模型（GPT-4/Claude 等），且可以选择不同模型用于不同任务。Cursor 的代码库理解能力（自动索引/RAG）更适合大型项目。' },
    ],
  },
};