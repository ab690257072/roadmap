import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_7: Record<string, DeepTutorial> = {
  // 106-120: 高级索引/监控/调试/批量/模式/工具/存储/安全
  "LT5qRETR3pAI8Tk6k5idg": {
    mentalModel: 'SP-GiST 是"空间分区 GiST"——把数据按空间划分（如四分树、前缀树），适合非平衡数据结构（如 IP 地址前缀匹配、电话号码前缀）。比 GiST 在某些场景更快。',
    sections: [
      { title: 'SP-GiST vs GiST', content: 'SP-GiST 支持：点的空间分区、文本前缀匹配（radix tree）、范围类型的空间分区。用得少但特定场景很牛：inet_ops（IP 地址匹配——"192.168.0.0/16 覆盖哪些 IP"）、text_ops（前缀搜索）。多数场景用 GiST 就够，遇到特定问题（IP 地址范围查询慢）再考虑 SP-GiST。' },
    ],
    diagnosis: [
      { symptom: 'SP-GiST 索引建好后查询速度无提升', cause: 'SP-GiST 仅特定场景（IP 前缀匹配、点象限查询）有优势。用在普通等值查询上不如 B-Tree。', fix: '确认查询模式和数据特性适合 SP-GiST。IP 地址 <<= 操作符用 inet_ops。其他场景用 B-Tree 或 GiST。EXPLAIN 验证索引是否被使用。' },
      { symptom: 'inet 列 SP-GiST 索引大小增长快', cause: 'SP-GiST 存储结构对不同数据分布敏感——大量不同 IP 致索引树分支多、膨胀。', fix: '评估是否真需 IP 范围查询。等值查询 IP 用 B-Tree 更小更快。对比 SP-GiST vs B-Tree 索引大小。定期 REINDEX。' },
    ],
  exercises: [
      { level: '进阶', task: '为 inet 列建 SP-GiST 索引加速 IP 范围查询', hint: 'USING SPGIST + inet_ops', answer: 'CREATE INDEX ON connections USING SPGIST (client_ip inet_ops); 加速查询：SELECT * FROM connections WHERE client_ip <<= \'192.168.0.0/16\'; (<<= 表示"在子网内")。' },
    ],
  },

  "2yWYyXt1uLOdQg4YsgdVq": {
    mentalModel: 'Hash 索引是"最快的等值查询"——内部就是哈希表，O(1) 查找。但缺点也很明显：不支持范围查询、不支持排序、PG 10 之前不支持 WAL 日志（崩溃会丢索引数据）。',
    sections: [
      { title: 'Hash vs B-Tree', content: 'Hash 优势：等值查询比 B-Tree 稍快（尤其键是长字符串时）、索引大小更小。劣势：不支持范围查询（> < BETWEEN）、不支持排序（ORDER BY 不会用 Hash 索引）、不支持唯一约束。PG 10+ Hash 索引才支持 WAL（之前版本崩溃要重建）。选择：绝大多数场景用 B-Tree。Hash 只在只有 = 查询、键很大、且对空间敏感时考虑。' },
    ],
    diagnosis: [
      { symptom: 'Hash 索引从 PG 11 升级到 PG 16 后无法使用', cause: 'PG 10 前 Hash 索引不支持 WAL——崩溃后需重建。老版本升级后旧 Hash 索引标记无效。', fix: 'REINDEX INDEX 索引名; 重建。大表用 REINDEX INDEX CONCURRENTLY。考虑换成 B-Tree——PG 14+ B-Tree 性能接近 Hash 且功能更全。' },
      { symptom: 'CREATE UNIQUE INDEX USING HASH 报错', cause: 'Hash 索引不支持唯一约束。只有 B-Tree 索引支持唯一性检查。', fix: '用 B-Tree：CREATE UNIQUE INDEX ON table(col); 等值查询唯一性 B-Tree 完全胜任。Hash 的等值优势不足以弥补无唯一约束缺陷。' },
    ],
  exercises: [
      { level: '基础', task: '什么查询能用 Hash 索引、什么查询必须用 B-Tree', hint: '= 和 ORDER BY', answer: 'Hash 索引只用 = 查询。B-Tree 支持 = > < >= <= BETWEEN LIKE（前缀）ORDER BY。一个查询如果有 WHERE col = 1 ORDER BY col 可以用 Hash 索引过滤但不能排序——实际执行时会用 Hash 索引过滤 + 额外排序。' },
    ],
  },

  "_NL5pGGTLNxCFx4axOqfu": {
    mentalModel: 'pg_stat_activity 是"实时查看谁在干什么"的窗口——每个连接一行，显示用户、IP、当前执行的 SQL、已经等了多久、在等什么（IO/Lock/WAL）。排查"数据库怎么这么慢"的第一站。',
    sections: [
      { title: 'pg_stat_activity 实用查询', content: '查长事务：SELECT pid, now() - xact_start AS duration, query FROM pg_stat_activity WHERE state != \'idle\' AND xact_start < now() - interval \'5 minutes\';（事务开了超过 5 分钟的——可能忘了 COMMIT）。查锁等待：SELECT pid, wait_event_type, wait_event FROM pg_stat_activity WHERE wait_event_type = \'Lock\'; 查空闲连接：SELECT count(*) FROM pg_stat_activity WHERE state = \'idle\';（占着连接不干活——考虑用连接池）。' },
    ],
    diagnosis: [
      { symptom: 'pg_stat_activity 结果一闪就变抓不住问题时刻', cause: 'pg_stat_activity 是实时快照——每次查询返回当前瞬间状态。慢查询瞬间执行完就看不到。', fix: '装 pg_stat_statements 记录历史统计。设 log_min_duration_statement 记录慢查询日志。pgcenter 实时刷新。循环采集脚本保存快照记录。' },
      { symptom: 'state 显示 "idle in transaction" 且持续很久', cause: '应用在事务中做了非数据库操作（HTTP 请求/文件处理）致事务长时间未提交——持有锁和资源。最常见的生产性能问题。', fix: "设 idle_in_transaction_session_timeout='5min'。确保 BEGIN 和 COMMIT 之间代码尽量短且不含外部 IO。定位并杀：SELECT pid,now()-xact_start AS age,query FROM pg_stat_activity WHERE state='idle in transaction';" },
    ],
  exercises: [
      { level: '基础', task: '找出当前数据库有多少活跃连接和总连接数', hint: 'SELECT state, count(*) FROM pg_stat_activity GROUP BY state;', answer: 'SELECT state, count(*) FROM pg_stat_activity GROUP BY state; 看 active/idle/idle in transaction 的分布。active 很高→数据库可能忙不过来。idle 很高→连接池配置有问题。' },
    ],
  },

  "D1OmCoqvd3-_af3u0ciHr": {
    mentalModel: 'Circuit Breaker（熔断器）在 PG 层面的应用：当数据库响应变慢或不可用时，应用主动"断开"（快速失败），而不是无限等待把应用也拖死。就像家里电路短路→保险丝跳闸，而不是电线烧起来。',
    sections: [
      { title: '数据库层的熔断', content: '方式 1：连接超时——connect_timeout、statement_timeout、lock_timeout。SET statement_timeout = \'30s\' 限制单条 SQL 最多跑 30 秒。方式 2：应用层连接池超时——HikariCP/PgBouncer 的连接超时设置。方式 3：应用代码中的 circuit breaker 库（resilience4j/Polly/go-kit/circuitbreaker）——连续失败 N 次 → 快速失败 → 等待 → 探测恢复。方式 4：只读兜底——主库挂了从只读副本读（可能数据不是最新但好歹还能用）。' },
    ],
    diagnosis: [
      { symptom: 'statement_timeout=30s 但有些查询需要 2 分钟', cause: '全局 statement_timeout 一刀切——合理的长报表查询也被限制。', fix: "只为 OLTP 类查询设超时。长查询用户/数据库单独设：ALTER ROLE analyst SET statement_timeout='5min'; 应用连接初始化 SET statement_timeout='5s' 只对 OLTP 连接。" },
      { symptom: 'lock_timeout 终止事务但应用未处理', cause: 'lock_timeout 抛 error code 55P03——应用未捕获该错误并重试，用户看到报错页面。', fix: '应用捕获锁超时异常并重试（带退避策略）。或用 NOWAIT/SKIP LOCKED 不等待直接跳过。lock_timeout 宜设比 statement_timeout 短——先等锁、等不到快速失败。' },
    ],
  exercises: [
      { level: '进阶', task: '用 PostgreSQL 的 statement_timeout 限制单条查询最长执行时间', hint: 'SET statement_timeout = ...', answer: 'SET statement_timeout = \'10s\'; SELECT pg_sleep(20); → ERROR: canceling statement due to statement timeout。在应用连接初始化时设置，防止慢查询占用连接。' },
    ],
  },

  "cc4S7ugIphyBZr-f6X0qi": {
    mentalModel: '批量加载数据就是把"一卡车一卡车"而不是"一件一件"往里搬。COPY 命令是 PG 最快的数据导入工具——比 INSERT 快几十倍。',
    sections: [
      { title: '高效批量加载', content: 'COPY：pg 原生批量导入，直接绕过 SQL 解析。\\copy：psql 客户端版 COPY，从本地文件导入。COPY table FROM \'/data/file.csv\' CSV HEADER;。加速技巧：1) 先删索引再导入后重建（维护索引成本高）2) 先关 autovacuum 导入后重新跑 3) 增大 maintenance_work_mem 4) 用 UNLOGGED 表做临时中转（不写 WAL——快但崩溃丢数据）5) 并行：拆多个文件用多个 psql 并发 COPY。' },
    ],
    diagnosis: [
      { symptom: 'COPY 导入 CSV 报 "extra data after last expected column"', cause: 'CSV 中某行列数多于表定义列数。可能是某行含额外逗号或表缺少列。', fix: "head -1 file.csv | awk -F',' '{print NF}' 检查 CSV 列数。对比表列数。COPY 时指定列：COPY table(col1,col2,col3) FROM ...;" },
      { symptom: 'COPY 导入大文件磁盘满了', cause: 'COPY 数据也写 WAL——非 UNLOGGED 表导入 WAL 同步写入，可能比数据本身还大。', fix: '用 UNLOGGED 表：CREATE UNLOGGED TABLE staging(LIKE target INCLUDING ALL); COPY 到 UNLOGGED 表（不写 WAL）。导入后 ALTER TABLE staging SET LOGGED; INSERT INTO target SELECT * FROM staging。' },
    ],
  exercises: [
      { level: '基础', task: '用 COPY 从 CSV 导入数据到 PG', hint: 'COPY tablename FROM path CSV HEADER', answer: "COPY products FROM '/tmp/products.csv' CSV HEADER; \\copy products FROM '/tmp/products.csv' CSV HEADER（psql 中）。CSV 列顺序必须和表匹配。HEADER 跳过第一行标题。" },
    ],
  },

  "AtZcMhy2Idmgonp5O8RSQ": {
    mentalModel: 'PG 实用模式是你"工具箱里的常用螺丝刀"——不是惊天动地的架构方案，而是日常开发中反复用到的、经过验证的设计技巧。',
    sections: [
      { title: '实用 PG 模式', content: '1) 乐观锁：UPDATE ... WHERE version = old_version（无锁并发控制）2) 连接查询模式：SELECT ... FOR UPDATE SKIP LOCKED 做任务队列（多个 worker 抢任务不互相阻塞）3) 预聚合表：建每日汇总表，定时任务从明细表聚合（避免对原始表反复 GROUP BY）4) 排序号生成：CREATE SEQUENCE 而非 SELECT MAX(id)+1（后者并发安全问题）5) UUID 主键用 v7（时间有序）而非 v4（随机）——减少索引碎片。' },
    ],
    diagnosis: [
      { symptom: '多 worker 同时领取任务出现同一任务被两个 worker 处理', cause: '选择行和锁定不在同一事务中——存在竞态窗口。', fix: "单事务完成选择+锁定+更新：BEGIN; SELECT ... FOR UPDATE SKIP LOCKED LIMIT 1; UPDATE ... SET status='processing'; COMMIT; 三步骤同一事务保证原子性。" },
      { symptom: '乐观锁 UPDATE WHERE version=old_version 返回 0 rows', cause: '另一事务已更新这行并递增 version，当前事务 WHERE condition 匹配不到——需重试。', fix: '检查 UPDATE 返回 affected rows：0 则重读最新数据、重算、重试（上限 3 次）。高冲突场景用悲观锁：SELECT ... FOR UPDATE 提前锁定行。' },
    ],
  exercises: [
      { level: '进阶', task: '用 SKIP LOCKED 实现一个简单的"任务队列"：多个 worker 不重复领取任务', hint: 'SELECT ... FOR UPDATE SKIP LOCKED LIMIT 1', answer: "BEGIN; SELECT id, payload FROM tasks WHERE status='pending' ORDER BY created_at FOR UPDATE SKIP LOCKED LIMIT 1; UPDATE tasks SET status='processing' WHERE id=...; COMMIT; 多个 worker 同时跑这段，每个拿到不同的任务——SKIP LOCKED 自动跳过被锁的行。" },
    ],
  },

  "lDuBFA7cEMnd7Cl9MDgnf": {
    mentalModel: '系统目录（System Catalog）就是 PG 的"注册表"——所有元数据（有哪些表、列、索引、函数、用户）都存在系统表中。pg_class/pg_attribute/pg_index 就是数据库的"自描述字典"。',
    sections: [
      { title: '常用系统目录查询', content: '列出所有表：SELECT * FROM pg_tables WHERE schemaname = \'public\';。查看表的列：SELECT * FROM information_schema.columns WHERE table_name = \'products\';。查看索引：SELECT * FROM pg_indexes WHERE tablename = \'products\';。查看外键：SELECT * FROM information_schema.table_constraints WHERE constraint_type = \'FOREIGN KEY\';。information_schema 是 SQL 标准兼容的，pg_catalog.pg_* 是 PG 特有的（更详细）。' },
    ],
    diagnosis: [
      { symptom: 'information_schema 和 pg_catalog 查询同信息结果不同', cause: 'information_schema 是 SQL 标准——过滤系统列。pg_catalog 是 PG 原生——更完整更底层。', fix: '跨数据库兼容→information_schema。需 PG 特有信息（存储参数/TOAST/复制）→pg_catalog。information_schema 可能更慢（SQL 函数包装了 pg_catalog）。' },
      { symptom: 'pg_class.reltuples 和 COUNT(*) 相差很大', cause: 'reltuples 是统计估计值（ANALYZE 后更新）非精确值。大量插入/删除后可能过时。', fix: '需精确行数用 COUNT(*)（全表扫描）。近似值用 reltuples 但先 ANALYZE 表名。监控差异 >10% 手动 ANALYZE。' },
    ],
  exercises: [
      { level: '基础', task: '查询某表的所有外键和它们指向哪个表', hint: 'information_schema.table_constraints + key_column_usage', answer: "SELECT tc.constraint_name, kcu.column_name, ccu.table_name AS foreign_table, ccu.column_name AS foreign_column FROM information_schema.table_constraints tc JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name JOIN information_schema.constraint_column_usage ccu ON tc.constraint_name = ccu.constraint_name WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name = 'orders';" },
    ],
  },

  "gweDHAB58gKswdwfpnRQT": {
    mentalModel: 'PG 的物理存储是把数据存在"页"里——每个表/索引由多个 8KB 页组成。知道内部的页面布局能让你理解为什么 fillfactor 有效、为什么行太大要 TOAST 到外部。',
    sections: [
      { title: '物理存储结构', content: '页（Page）= 8KB（默认），是 PG 读写的原子单位（一次 IO 至少读 8KB）。页结构：Page Header + ItemId（行指针数组）+ Free Space + Items（实际行数据）。TOAST（The Oversized-Attribute Storage Technique）：超过 2KB 的大字段自动压缩/外存到 TOAST 表（每张大表都有关联的 TOAST 表）。ctid：每行的物理位置（页号, 行号）——UPDATE 可能改变 ctid（不在同一页的 UPDATE = 行迁移）。VACUUM 回收死元组内存为 Free Space 给新行用。' },
    ],
    diagnosis: [
      { symptom: '表 text 列存 100KB 内容，更新其他小列也受影响', cause: 'TOAST 值更新——即使只改小列，PG 也可能需移动该行 TOAST 指针。新版本行需写入新位置。', fix: '大字段拆到独立 1:1 表：主表只留小字段，更新小字段不触发 TOAST。' },
      { symptom: 'pg_total_relation_size() 显示是预期大小的 3 倍', cause: '膨胀——索引、死元组、TOAST、FSM、VM 都占额外磁盘空间。', fix: 'VACUUM FULL 或 pg_repack 回收。查看各组件大小。索引单独查询 pg_indexes_size()。' },
    ],
  exercises: [
      { level: '进阶', task: '用 ctid 观察 UPDATE 是否导致行迁移', hint: 'SELECT ctid, * FROM table WHERE ...; UPDATE ...; SELECT ctid, * FROM table WHERE ...;', answer: '如果 UPDATE 后 ctid 变了→行迁移到了新页。多次 UPDATE+行迁移 → 表膨胀。对频繁 UPDATE 的表降低 fillfactor 可以减少行迁移。' },
    ],
  },

  "z3VD68R2uyu1s-3giRxKr": {
    mentalModel: 'Zabbix 是企业级"IT 监控老将"——不只是数据库监控，而是一切（服务器/网络/应用/数据库）的全栈监控。和 Prometheus+Grafana 比更"重"但更"全"。',
    sections: [
      { title: 'Zabbix vs Prometheus 选型', content: 'Zabbix：传统企业监控、基于 agent 采集、自动发现、有 GUI 配置管理、学习和运维较重。Prometheus：云原生标准、基于 pull 模型、灵活的 PromQL、和 Grafana 深度集成。PG 监控选择：小团队 → Prometheus + Grafana；大型 IT 组织已有 Zabbix → 用 Zabbix 的 PG 模板。对后端来说，Prometheus 生态更值得学——K8s、微服务、云原生全面用它。' },
    ],
    diagnosis: [
      { symptom: 'Zabbix PG 监控连接数曲线锯齿状剧烈波动', cause: '采集间隔和 PG 连接变化频率不匹配——快速创建释放连接在采集间隔之间发生。锯齿状因采集到峰值。', fix: '降低采集间隔到 30s。关键指标更密集采集。PG 端用 pg_stat_statements 做持续连接统计。考虑换 Prometheus——默认 15s 采集更适合细粒度监控。' },
      { symptom: 'Zabbix PG 监控频繁误报——CPU 偶尔 100% 马上降', cause: '告警阈值太敏感——CPU 100% 1 秒不代问题（可能是 checkpoint/VACUUM 短暂峰值）。trigger 无持续时间窗口。', fix: '告警加持续时间：avg(system.cpu.util[,user],5m)>90（5 分钟平均超 90% 才告警）。避免"瞬间高→立即告警"。区别级别：WARNING 和 CRITICAL。' },
    ],
  exercises: [
      { level: '基础', task: 'Prometheus 的 pull 模型和 Zabbix 的 agent push 模型有什么区别', hint: '谁主动', answer: 'Prometheus：服务器定时去抓取各目标 /metrics 端点（pull）。Zabbix：各机器装 agent 主动上报数据给服务器（push）。Pull 模式更灵活（不需要维护 agent），Push 模式适合网络隔离环境（机器出不去但 agent 能把数据推出来）。' },
    ],
  },
};