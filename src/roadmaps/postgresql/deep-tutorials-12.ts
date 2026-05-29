import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_12: Record<string, DeepTutorial> = {
  "WI3-7hFAnJw5f7GIn-5kp": { mentalModel: 'OLAP 是"数据仓库分析"——不是处理"一个订单"而是分析"一亿个订单的趋势"。需要扫描海量数据、做聚合计算。PG 可以做中等 OLAP（并行查询+窗口函数+物化视图），但专门的 OLAP 数据库（ClickHouse/DuckDB）会快很多。', sections: [{ title: 'PG 做 OLAP 的技巧', content: '1) 使用物化视图预聚合（每天刷新一次）2) 表分区按时间（分区裁剪加速大范围扫描）3) 并行查询（设置 max_parallel_workers_per_gather=4）4) 列式扩展：cstore_fdw（列存外部表）5) 如果 OLAP 需求重→ 把数据同步到 ClickHouse。PG 是 OLTP 数据库的主场，OLAP 是副业。' }],
    diagnosis: [
      { symptom: 'PG OLAP 聚合查询耗时 5 分钟拖慢 OLTP', cause: 'OLAP 大查询扫描海量数据占用 shared_buffers 和 IO——OLTP 热点数据被挤出缓存。', fix: '分析查询转到只读从库。物化视图预聚合每日刷新。设 max_parallel_workers_per_gather 和 statement_timeout 限制资源。' },
      { symptom: 'PG OLAP 查询未走并行', cause: 'max_parallel_workers_per_gather 默认 2 不够，或表太小优化器认为并行不划算，或 CTE 栅栏阻塞了并行。', fix: 'SET max_parallel_workers_per_gather=4; SET parallel_tuple_cost=0.01; 降低并行门槛。EXPLAIN 看是否出 Gather 节点。PG 12+ CTE 可自动内联。' },
    ],
  exercises: [{ level: '基础', task: '什么场景建议把 OLAP 查询从 PG 迁移到 ClickHouse', hint: '查询耗时超过多少', answer: '当分析查询（GROUP BY/聚合/窗口函数）耗时 > 10s 且频繁执行时、或数据量 > 1TB 需要列存优化时，就该考虑专门的 OLAP 系统。PG 持续做 OLAP 会影响 OLTP 性能（共享 CPU/IO）。' }] },
  "rHDlm78yroRrrAAcabEAl": { mentalModel: 'HTAP（混合事务/分析处理）就是"一个数据库既做 OLTP 又做 OLAP"——PG 其实已经在做这件事了。但专业的 HTAP 数据库（如 TiDB/CockroachDB）把行列混合存储做得更极致。', sections: [{ title: 'HTAP 的现实', content: '很多团队就是用 PG 同时做事务和分析——小团队不需要引入专门的分析数据库。PG 的物化视图+并行查询+JIT 编译能覆盖大多数"中等规模"的分析需求。当分析查询变得频繁且重到拖慢事务处理时，才需要把它们分开（把数据复制到 ClickHouse/DuckDB 专业分析库）。' }],
    diagnosis: [
      { symptom: 'HTAP 混合负载 PG 越来越慢', cause: '单一 PG 同时承受 OLTP 写入和分析查询——两者争抢 CPU/IO/缓存。分析查询挤掉 OLTP 热点数据。', fix: '流复制只读从库分流——主库只做 OLTP，从库做 OLAP。物化视图+pg_cron 定时预聚合。评估是否需专业 OLAP 数据库。' },
      { symptom: '物化视图刷新时 PG 响应变慢', cause: 'REFRESH MATERIALIZED VIEW CONCURRENTLY 会创建临时数据并进行大量 IO——刷新期间占资源。', fix: '业务低峰期刷新。使用 CONCURRENTLY 允许刷新期间可查询。或创建新视图后 RENAME 切换。评估 pg_ivm 扩展。' },
    ],
  exercises: [{ level: '基础', task: '为什么把 OLTP 和 OLAP 放在同一个 PG 中可能有风险', hint: '资源争抢', answer: 'OLAP 大查询扫描大量数据、大量读 IO 和 CPU、Buffer Cache 被分析数据占满→ OLTP 热点数据被挤出缓存→ 事务查询变慢。两者资源竞争，分离后 OLTP 和 OLAP 互不影响。' }] },
  "9RyMU36KEP__-RzTTz_eo": { mentalModel: 'PEV2（Postgres Explain Visualizer v2）是 EXPLAIN 的"美女化妆师"——把丑丑的括号嵌套变成彩色 Sunburst 图，每个环节的面积=耗时占比。一眼看出谁是瓶颈。', handsOn: [{ title: '使用 PEV2', cmd: 'psql -c "EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) SELECT ..." | tail -n +2 | head -n -1 | pbcopy', output: '(JSON 复制到剪贴板)', explain: '打开 https://app.pev2.com 粘贴 JSON → 看到 Sunburst 图。最大的扇形 = 最耗时的环节。比看纯文字 EXPLAIN 直观太多。' }],
    diagnosis: [
      { symptom: 'PEV2 无法解析 EXPLAIN JSON——粘贴后无显示', cause: 'JSON 格式需纯 JSON 数组（从 [ 到 ]）。复制时多复制了 psql 提示符或少了闭合括号。', fix: '确保复制完整 JSON 数组：从 [ 到 ]。检查首尾字符。' },
      { symptom: 'PEV2 Sunburst 图最大扇形是 Planning Time', cause: 'Planning Time 通常是 <1ms。如占比大——复杂查询大量 partition/JOIN 致计划生成耗时。', fix: '关注 Execution Time 非 Planning Time。点击扇形看细节。Planning 占比大→考虑简化查询结构。' },
    ],
  exercises: [{ level: '基础', task: '用 PEV2 可视化一个查询', hint: 'EXPLAIN FORMAT JSON → pev2.com', answer: 'EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) SELECT ...; 复制 JSON 输出（从 [ 开始到 ] 结束），粘贴到 app.pev2.com。' }] },
  "xEu5n6U9-WKVxjlT5YUgx": { mentalModel: 'PG 结合 AI/ML 能力——pgvector 扩展让 PG 能做向量相似度搜索（AI 应用的核心需求）。PG 从"关系型数据库"变成了"AI 数据存储"。', sections: [{ title: 'PG 在 AI 栈中的位置', content: 'pgvector：向量存储和相似度检索（L2/内积/余弦距离）。IVFFlat/HNSW 索引加速近邻搜索。比专用向量数据库（Pinecone/Weaviate）慢一些但胜在：1) 不需要另一套数据库 2) 向量可以和关系数据 JOIN（用户+向量+元数据一个查询搞定）3) PG 运维成熟度远高于新向量数据库。生产环境用 pgvector 的越来越多（Supabase 全栈基于它）。' }],
    diagnosis: [
      { symptom: 'pgvector IVFFlat 索引搜索精度低——结果有遗漏', cause: 'IVFFlat 是近似搜索——probes 默认为 1（只搜最近 1 个聚类），可能漏掉其他聚类中更相似的向量。', fix: '增大 probes：SET ivfflat.probes = 10; 或 SET hnsw.ef_search = 100;（HNSW 索引）。probes=lists 等同精确搜索。权衡精度和速度。' },
      { symptom: 'pgvector 向量搜索慢——全表扫描不走索引', cause: 'IVFFlat/HNSW 索引只在 ORDER BY embedding <=> query_vec 使用。WHERE 过滤后行数太少→优化器选全表扫描。', fix: '创建索引后 EXPLAIN 检查。少量数据全表扫描比索引快——这是正确的。评估是否需更大数据集测试。' },
    ],
  exercises: [{ level: '进阶', task: '用 pgvector 创建 embedding 列并做相似度搜索', hint: 'CREATE EXTENSION vector + CREATE INDEX USING ivfflat', answer: 'CREATE EXTENSION vector; CREATE TABLE docs (id SERIAL, content TEXT, embedding vector(1536)); CREATE INDEX ON docs USING ivfflat (embedding vector_cosine_ops); SELECT * FROM docs ORDER BY embedding <=> query_vector LIMIT 5;' }] },
  "oX-bdPPjaHJnQKgUhDSF2": { mentalModel: 'Golden Signals（黄金信号）是 Google SRE 提出的四个核心监控指标——延迟（Latency）、流量（Traffic）、错误（Errors）、饱和度（Saturation）。对 PG 监控来说这四样覆盖了 90% 的健康度。', sections: [{ title: 'PG 的 Golden Signals', content: '延迟：pg_stat_statements 的 mean_exec_time——查询平均耗时。流量：pg_stat_database 的 xact_commit + xact_rollback——每秒事务数。错误：日志中 ERROR/FATAL 计数——错误率。饱和度：连接数/max_connections、磁盘 IO %util、WAL 生成速率。这四个信号正常→ PG 基本健康。任何一个异常→深入排查。' }],
    diagnosis: [
      { symptom: 'Golden Signals 四个指标都正常但用户反馈 PG 慢', cause: 'Golden Signals 是宏观指标——掩盖微观问题（个别用户慢查询、特定表锁等待）。平均值掩盖长尾延迟。', fix: '加 P99 延迟（非平均延迟）。按用户/API 拆分错误率。增加锁等待、连接队列、慢查询数等补充指标。' },
      { symptom: 'PG 突然 OOM 但 Golden Signals 回看正常', cause: 'OOM 是突发性事件——采集间隔（15s）错过内存飙升瞬间。饱和度正常但内存饱和度未覆盖。', fix: '饱和度补充：内存使用率（含 shared_buffers+work_mem 预估）。监控 Linux 内存压力：/proc/pressure/memory。设 OOM 告警。' },
    ],
  exercises: [{ level: '基础', task: '对 PG 设计一个基于 Golden Signals 的监控面板', hint: '四个指标各一个面板', answer: '面板 1：P50/P99 查询延迟曲线。面板 2：TPS（每秒事务数）曲线。面板 3：错误率（ERROR/总查询）曲线。面板 4：连接使用率（used/max）+ IO 饱和度 + WAL 生成速率。一张面板 = 一眼看出 PG 健康度。' }] },
  "GvpIJF-eaGELwcpWq5_3r": { mentalModel: 'SELinux 是 Linux 的"超级权限控制"——不只是用户/组权限，而是对每个进程能做什么精确限制（读哪些文件、用哪些端口、调哪些系统调用）。某些安全合规环境要求 SELinux 约束 PG。', sections: [{ title: 'SELinux + PG', content: 'SELinux 给 PG 带来额外的安全层——即使 PG 有漏洞被攻破了，SELinux 策略限制了"postgres 进程只能访问 /var/lib/pgsql/ 和 5432 端口"，攻击者无法写系统文件或连外部网络。代价是配置复杂——很多人直接关掉 SELinux（setenforce 0）。生产环境建议保持 enforcing 模式，用 audit2allow 生成正确的策略。' }],
    diagnosis: [
      { symptom: 'PG 启动失败报 Permission denied 但权限正确', cause: 'SELinux Enforcing 阻止 PG 访问数据目录或端口。传统 Unix 权限正确但 SELinux 策略禁止。', fix: 'ausearch -m avc -ts recent | grep postgres 查看拦截日志。audit2allow 生成策略。setenforce 0 临时关闭测试。' },
      { symptom: 'SELinux 策略改后 PG 仍无法启动——audit2allow 不准确', cause: 'audit2allow 只处理已记录拒绝事件——未触发的拒绝事件策略仍不完整。或上下文标签不匹配。', fix: 'setenforce 0→启动 PG→执行所有操作→setenforce 1→收集所有拒绝日志→生成完整策略。ls -Z 检查 SELinux 上下文。' },
    ],
  exercises: [{ level: '基础', task: '快速检查 SELinux 是否在运行', hint: 'getenforce', answer: 'getenforce → Enforcing/Permissive/Disabled。Enforcing = SELinux 在主动拦截。Permissive = 只记录不拦截（调试用）。Disabled = 关闭。' }] },
  "Z2PuOmgOqScGFbhvrvrA1": { mentalModel: 'PG Anonymizer 是"数据脱敏工具"——生产库拷一份给开发？但敏感字段（身份证/手机号/邮箱）不能暴露。PG Anonymizer 自动对这些列做假名化/泛化/随机替换。', sections: [{ title: '数据脱敏', content: '静态脱敏：导出时替换真实数据→ 开发/测试环境安全。动态脱敏：查询时根据用户角色自动隐藏敏感列。PG Anonymizer 使用声明式规则：SECURITY LABEL FOR anon ON COLUMN users.email IS \'MASKED WITH FUNCTION anon.fake_email()\'; 然后普通用户查询 email 列得到的是假的（如 johndoe@example.com），超级用户能看到真实数据。' }],
    diagnosis: [
      { symptom: 'PG Anonymizer 脱敏后数据仍可识别个人', cause: '脱敏函数不够强——假邮箱可能偶然匹配真实邮箱。仅脱敏部分列，剩余列组合可重识别。', fix: '用更强脱敏策略：anon.fake_email() + 泛化（age→age_range）。检查所有敏感列是否已定义规则。评估 k-anonymity。' },
      { symptom: 'PG Anonymizer 动态脱敏后应用查询报错', cause: '应用依赖真实数据做某些操作（发短信/生成报表）——脱敏后假数据致业务逻辑异常。', fix: '区分环境——生产不脱敏（有严格访问控制），测试/开发用脱敏数据。动态脱敏适合 BI/报告用户。对需真实数据的连接不应用脱敏。' },
    ],
  exercises: [{ level: '基础', task: '为什么不能把生产数据库直接复制给开发团队', hint: 'GDPR/个人信息保护法', answer: '生产库中有用户真实数据（手机号/身份证/邮箱/地址），直接复制给开发 = 数据泄露。违反 GDPR/个人信息保护法可能被重罚。必须脱敏后才能给非生产环境使用。' }] },
  "xEu5n6U9-WKVxjlT5YUgx": { mentalModel: 'PG 也能做"时间序列数据库"的活——TimescaleDB 就是基于 PG 的时序扩展。如果已经用了 PG，加个 Timescale 扩展就能处理监控指标/IoT 数据，不用再部署 InfluxDB。', sections: [{ title: 'TimescaleDB in PG', content: 'TimescaleDB = PG 扩展。核心：hypertable（按时间自动分区的超表）+ 自动压缩（老数据压缩 90%+）+ 连续聚合（自动刷新物化视图）+ 保留策略（自动删过期数据）。安装：CREATE EXTENSION timescaledb; SELECT create_hypertable(\'metrics\', \'time\'); 之后你写标准 SQL 但存储是时序优化的。适合：已有 PG 技术栈、时序数据量中等（<100GB/天）、想避免引入新数据库。' }], exercises: [{ level: '基础', task: '什么场景下用 TimescaleDB 而不是独立的 InfluxDB', hint: '已有 PG 生态', answer: '团队已用 PG、不想学/运维另一套数据库、需要时序数据和关系数据 JOIN 查询（如"最近 24h 异常的机器所属的团队和负责人"），用 TimescaleDB 最合适。' }] },
  "QWi84EjdHw5ChYsuwUhPC": { mentalModel: 'USE 方法是 Brendan Gregg（性能分析大神）提出的系统性能分析方法论——Utilization（利用率）、Saturation（饱和度）、Errors（错误）。对每个资源（CPU/内存/磁盘/网络）问这三个问题。', sections: [{ title: 'USE 方法应用', content: '对 CPU：利用率（mpstat 看 %usr/%sys）、饱和度（top 看 load average / CPU 数）、错误（dmesg 看 MCE 错误）。对内存：利用率（free -h）、饱和度（vmstat 看 swap in/out）、错误（dmesg OOM）。对磁盘：利用率（iostat %util）、饱和度（iostat avgqu-sz 等待队列长度）、错误（dmesg I/O error）。对网络：利用率（sar -n DEV）、饱和度（netstat 看 retrans）、错误（netstat -s 错误计数）。' }],
    diagnosis: [
      { symptom: 'USE 方法检查所有资源都正常但 PG 仍然慢', cause: 'USE 检查硬件资源（CPU/内存/磁盘/网络）——PG 瓶颈可能在软件层：锁等待、MVCC 垃圾、查询计划错误。', fix: 'USE+PG 层检查：pg_stat_activity(wait_event)、pg_locks、pg_stat_user_tables(n_dead_tup)、长事务。排除硬件瓶颈后 PG 工具链接力。' },
      { symptom: 'iostat %util=100% 但 USE 说磁盘饱和——实际未饱和', cause: '现代 SSD/NVMe 上 %util 计算方式不反映并行能力。', fix: '看 avgqu-sz（队列长度）和 await（等待时间）而非 %util。NVMe：await>1ms 才算异常。队列长度持续>2→实际饱和度。' },
    ],
  exercises: [{ level: '进阶', task: '用 USE 方法排查一个"数据库变慢"问题', hint: '逐一检查 CPU/内存/磁盘/网络的 USE', answer: 'CPU：利用率 > 80% 且 load > CPU 核数 → 需要扩容或优化查询。内存：有 swap 使用 → PG shared_buffers 太大或 work_mem 太大。磁盘：%util > 90% → IO 瓶颈 → 优化索引/升级 SSD/加大 shared_buffers。网络：retrans 率 > 1% → 网络丢包 → 检查网卡/交换机。' }] },
  "qBkpTmfbyCv2L-OJW9pPI": { mentalModel: 'RED 方法是 USE 的"服务端版本"——Rate（请求速率）、Errors（错误率）、Duration（延迟）。更适合微服务和 API 层，但对 PG 的服务化监控也适用。', sections: [{ title: 'RED vs USE', content: 'USE 看资源（CPU/内存/磁盘）——底层视角。RED 看服务（请求速率/错误/耗时）——上层视角。两者不冲突——RED 告诉你"PG 服务在处理上层的请求时慢了"，USE 帮你找出"底层是什么资源导致PG慢了"。黄金法则是"从 RED 定位、从 USE 深挖"。' }],
    diagnosis: [
      { symptom: 'RED 监控速率和延迟正常但错误率突增', cause: 'RED 用平均值掩盖问题——连接池拒绝一半连接但平均 TPS 不变因没被拒的连接 TPS 更高了。', fix: 'RED 错误率包含所有错误类型拆分：语法错误（可忽略）vs 超时/连接拒绝（严重）。按用户/数据库/API 拆分。' },
      { symptom: 'RED Duration 平均值看不出问题——P99 才明显', cause: 'P50 正常但 P99 很高——少数慢查询拉高长尾但平均值掩盖。用户感受的是 P99 延迟。', fix: '用 Histogram 统计查询延迟分布。Prometheus histogram 支持 P50/P90/P99 分位。PG 端 pg_stat_statements 的 stddev_exec_time 结合分析。' },
    ],
  exercises: [{ level: '基础', task: '对比 RED 和 USE 方法适用的场景', hint: '应用层 vs 硬件层', answer: 'RED 适合：API 服务/数据库服务/任何"接受请求返回响应"的服务。USE 适合：物理机/虚拟机/容器/任何物理资源。从 RED 发现"PG 响应变慢了"，从 USE 找出"是磁盘 IO 的饱和度太高导致的"。' }] },
  "yIdUhfE2ZTQhDAdQsXrnH": { mentalModel: 'gdb 是 GNU Debugger——调试 C 程序的"显微镜"。PG 是用 C 写的，当 PG 自身崩溃（SIGSEGV）或需要看内部变量时，gdb 是终极工具。大多数 DBA 一辈子用不到，但顶级 DBA 必须会。', sections: [{ title: 'gdb + PG', content: 'gdb 调试 PG：1) pg_config 找到 PG 安装路径 2) gdb /usr/bin/postgres PID 附着到运行中的进程 3) bt（backtrace）看调用栈 4) p variable 打印变量值 5) detach 分离。当你需要报告 PG 的 Bug 时，gdb backtrace 是开发者需要的东西。安装 debug symbols：apt install postgresql-16-dbgsym 或从源码编译。' }],
    diagnosis: [
      { symptom: 'gdb 附着 PG 后不想调试了但 PG 卡住了', cause: 'gdb 附着后进程暂停——detach 恢复执行但已阻塞几分钟。客户端连接全部挂起。', fix: 'gdb 操作尽量短：attach→bt→detach 几秒内完成。生产环境绝对不 gdb attach 服务进程。用 gcore+PID 离线分析。' },
      { symptom: 'gdb bt 输出只有 ?? 符号无函数名', cause: '未安装 PG debug symbols。编译时未加 -g。或使用 stripped 发行版二进制。', fix: '安装 debug symbols：apt install postgresql-16-dbgsym。从源码编译 PG：./configure --enable-debug CFLAGS="-O0 -g"。' },
    ],
  exercises: [{ level: '进阶', task: '用 gdb 附着到 PG 进程并获取 backtrace', hint: 'gdb -p PID → bt', answer: 'SELECT pg_backend_pid() → 终端：sudo gdb -p PID → bt → detach → quit。' }] },
  "xCm3g5sK2fTbW7uL9nQ0z": { mentalModel: 'PG 日志不是可有可无的——它是数据库的"行车记录仪"。出事了就知道"撞车前半秒发生了什么"。日志级别/格式/目的地需要合理配置。', sections: [{ title: '日志配置', content: 'log_destination：stderr/csvlog/syslog。log_min_duration_statement：记录超过 X ms 的 SQL（生产建议 100-500ms）。log_statement：none/ddl/mod/all（生产建议 ddl——记录所有建表/改表操作）。log_line_prefix：日志行前缀格式（必须包含 %t 时间戳/%p PID/%u 用户/%d 数据库/%a 应用名）。log_checkpoints：记录 Checkpoint 事件。log_connections/log_disconnections：记录连接事件。' }],
    diagnosis: [
      { symptom: 'log_statement=all 后磁盘每天增长 100GB', cause: '记录所有 SQL 含每条 SELECT 产生海量日志——高并发 OLTP 每秒数千条 SQL 全写入。', fix: 'log_statement=ddl 只记录 DDL。log_min_duration_statement=200 只记录慢查询。pg_stat_statements 统计所有 SQL 性能。分离审计和性能日志。' },
      { symptom: '日志 ERROR 太多——磁盘被日志占满', cause: '应用 SQL 错误（违反约束/类型错误）频繁打到 PG——log_min_messages=error 记录所有 error。', fix: '应用端处理 SQL 错误——不要频繁打到 PG。log_min_messages=warning 减少 ERROR 日志。设置 log_rotation_size 和 log_rotation_age 限制单个文件大小。' },
    ],
  exercises: [{ level: '基础', task: '配置 PG 日志记录所有耗时 > 200ms 的 SQL', hint: 'ALTER SYSTEM SET log_min_duration_statement = 200', answer: 'ALTER SYSTEM SET log_min_duration_statement = 200; ALTER SYSTEM SET log_statement = \'ddl\'; SELECT pg_reload_conf(); 所有慢 SQL 都会记录到日志中，配合 pgBadger 分析。' }] },
  "opDEr5vK9mNzWq4iR6sB2": { mentalModel: 'PG 的 VACUUM FULL 和普通 VACUUM 的区别就像"大扫除" vs "日常倒垃圾"——普通 VACUUM 每天倒垃圾（回收死元组空间）、VACUUM FULL 一年一次大扫除（重写整张表、把所有行压实、还给 OS 磁盘空间）。但大扫除会短期封房（锁表、阻塞所有访问）。', sections: [{ title: 'VACUUM vs VACUUM FULL', content: '普通 VACUUM：不锁表、回收死元组空间给未来 INSERT 重用、不缩小表文件、不还磁盘给 OS。VACUUM FULL：锁表（ACCESS EXCLUSIVE——连 SELECT 都阻塞）、重写整张表、紧凑排列、真解放磁盘空间。pg_repack 是替代方案——用触发器+新表的方式实现在线整理，不长期锁表。' }],
    diagnosis: [
      { symptom: 'VACUUM FULL 跑一半被终止——表损坏', cause: 'VACUUM FULL 被 kill 或 statement_timeout 中断——表重写到一半，新表不完整、旧表可能已清理。', fix: 'VACUUM FULL 前设 statement_timeout=0。优化用 pg_repack 替代——支持在线整理且可中途停止。如果损坏→从备份恢复。' },
      { symptom: 'VACUUM FULL 后索引膨胀反而更严重', cause: 'VACUUM FULL 重写表后索引重建——索引多且并发操作时重建可能反而更大。或统计信息未更新。', fix: 'VACUUM FULL 后立即 ANALYZE。用 pg_repack——整理表同时优化索引。检查前后 pg_total_relation_size() 对比。' },
    ],
  exercises: [{ level: '基础', task: '什么情况下考虑 pg_repack 而非 VACUUM FULL', hint: '锁', answer: '生产环境表需要整理但无法接受长时间锁表时。pg_repack 在背后创建新表复制数据→最后短暂切换，阻塞时间极短（秒级而非分钟级）。' }] },
  "URX5fG2uL8mZbT4iN7qA1": { mentalModel: 'PG 的密码认证方式从 md5（已不安全）进化到 scram-sha-256（当前推荐）。scram 保护密码不在传输过程中被窃听、即使数据库泄露了密码哈希也难破解。', sections: [{ title: 'PG 认证方式升级', content: 'md5：PG 9.x 默认，已被破解（彩虹表秒查）。scram-sha-256：PG 10+ 支持、14+ 默认。升级方式：ALTER SYSTEM SET password_encryption = \'scram-sha-256\'; SELECT pg_reload_conf(); 然后 ALTER ROLE username PASSWORD \'new_password\';（重新设密码才会用 scram 加密）。pg_hba.conf 中的 METHOD 也要改为 scram-sha-256。' }],
    diagnosis: [
      { symptom: '改为 scram-sha-256 后无法连接——pg_hba.conf 还是 md5', cause: 'password_encryption=scram-sha-256 但 pg_hba.conf 的 METHOD 仍为 md5。PG 用 md5 认证但密码哈希已是 scram 格式→认证失败。', fix: '同步改 pg_hba.conf METHOD 为 scram-sha-256。ALTER ROLE 重新设置密码（用 scram 重新哈希）。SELECT pg_reload_conf();' },
      { symptom: '部分老客户端不支持 scram-sha-256', cause: '老版本 psql/JDBC/libpq 不支持 scram-sha-256（需 PG 10+ 客户端库）。', fix: '升级客户端库到 PG 10+。为老客户端在 pg_hba.conf 保留 md5 条目（仅限信任内网）。先升级所有客户端→再统一改 scram。' },
    ],
  exercises: [{ level: '基础', task: '检查当前 PG 用户的密码加密方式', hint: 'SELECT passwd FROM pg_shadow;', answer: 'SELECT usename, passwd FROM pg_shadow; 如果 passwd 以 md5 开头→用 md5。以 SCRAM-SHA-256$ 开头→用 scram。升级方式：ALTER ROLE ... PASSWORD 重新设置。' }] },
};