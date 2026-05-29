import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_8: Record<string, DeepTutorial> = {
  "rVlncpLO20WK6mjyqLerL": {
    mentalModel: 'explain.depesz.com 是 EXPLAIN 输出的"翻译器"——把看不懂的括号和箭头变成可视化表格，标红最耗时的节点。直接贴 EXPLAIN ANALYZE 输出，网页帮你分析。',
    handsOn: [
      { title: '使用 explain.depesz.com', cmd: 'psql -c "EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) SELECT ..." | tail -n +2 | head -n -1 | curl -X POST -H "Content-Type: application/json" -d @- https://explain.depesz.com/-/new', output: '(返回分析页面 URL)', explain: 'FORMAT JSON 导出为程序可读格式。BUFFERS 显示 IO 统计（命中/读取字节数）。这个网站让 EXPLAIN 从"看看而已"变成"能找出问题"。' },
    ],
    diagnosis: [
      { symptom: 'EXPLAIN 输出粘贴到 explain.depesz.com 解析错误', cause: '粘贴了含 psql 提示符或时间标签的非 EXPLAIN 内容。或用 FORMAT JSON 但复制不完整。', fix: '用 FORMAT TEXT 从 "QUERY PLAN" 到 "Planning Time" 完整复制。不包含 psql 行号和提示符。' },
      { symptom: 'depesz 标红 Bitmap Heap Scan 但不知如何优化', cause: 'Bitmap Heap Scan 不一定慢——是索引结果回表读取。红色可能因回表读了大量页（shared_blks_read 大）。', fix: '匹配行在几千以内→Bitmap Heap Scan 合理。匹配行多且 shared_blks_read 大→建覆盖索引避免回表。关键是看读取的 BUFFERS 数量。' },
    ],
  exercises: [
      { level: '基础', task: '用 EXPLAIN (ANALYZE, BUFFERS) 执行一个查询并把结果粘贴到 explain.depesz.com', hint: 'EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)', answer: 'EXPLAIN (ANALYZE, BUFFERS) SELECT ...; 将整个输出复制粘贴到 explain.depesz.com。红色节点 = 最耗时/消耗最大的步骤，优先优化那里。' },
    ],
  },

  "UZ1vRFRjiQAVu6BygqwEL": {
    mentalModel: 'explain.dalibo.com 是另一个 EXPLAIN 可视化工具（法国的 PG 公司开发）——功能类似 depesz 但有索引建议功能，会提示"加这个索引能少扫描 XX% 数据"。',
    sections: [
      { title: 'EXPLAIN 分析工具对比', content: 'explain.depesz.com：简单直接、大红大红标出问题。explain.dalibo.com：有索引建议、慢节点标记。PEV2（Postgres Explain Visualizer v2）：本地工具、Sunburst 图可视化。pgMustard：商业付费版、有优化建议引擎。最好的用法：把 EXPLAIN 输出贴到多个平台交叉分析。' },
    ],
    diagnosis: [
      { symptom: 'dalibo 建议建索引但已有索引', cause: '已有索引的列顺序/类型和查询不匹配——如 WHERE b=1 AND a=2 但索引是 (a,b)，或查询列上有函数调用。', fix: '检查现有索引列顺序是否与 WHERE 条件顺序一致。EXPLAIN VERBOSE 查看是否有隐式类型转换。有时建议索引更好——评估决定。' },
      { symptom: 'EXPLAIN 输出太长——一条 SQL 有 200 行', cause: '复杂查询（多 CTE、子查询、UNION ALL）的 EXPLAIN 展开极长。分区表也会显示所有分区。', fix: '逐个分析：单独 EXPLAIN 每 CTE/子查询。关注 actual time 最大节点。FORMAT JSON+PEV2 可视化——最大扇形=瓶颈。' },
    ],
  exercises: [
      { level: '基础', task: '对同一个慢查询比较两个 EXPLAIN 分析工具（depesz 和 dalibo）的输出差异', hint: '两个网站都支持直接粘贴 EXPLAIN 输出', answer: 'EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT) SELECT ...; 分别粘贴到 explain.depesz.com 和 explain.dalibo.com。后者可能给出索引建议。' },
    ],
  },

  "v2J6PZT0fHvqA7GwlqBU7": {
    mentalModel: 'PG 进程和内存架构就像"厨房流水线"——Postmaster 是大厨领班（总进程）、每个连接 fork 一个帮厨（backend process）、共享内存是大案板（shared_buffers）、WAL Writer 是记账员。',
    sections: [
      { title: 'PG 进程架构', content: 'Postmaster：主进程，监听连接请求，为每个连接 fork 一个 backend 进程。Backend Process：处理该客户端的查询。Background Workers：Checkpointer（刷脏页）、WAL Writer（刷 WAL）、Autovacuum Workers（自动清理）、BGWriter（后台写脏页）、Stats Collector（统计信息收集）。内存：Shared Memory（所有进程共享——shared_buffers + WAL buffer + Lock space）。Per-backend Memory（各进程独立——work_mem + temp_buffers + 连接开销 ~5-10MB/个）。' },
    ],
    diagnosis: [
      { symptom: 'PG 启动后占内存远超 shared_buffers', cause: '每 backend 进程独立耗内存——work_mem、temp_buffers 等 per-backend。加 autovacuum workers、WAL sender/receiver 等辅助进程。', fix: '总内存约=shared_buffers+(max_connections×10MB)+(autovacuum_max_workers×maintenance_work_mem)+OS 开销。不够则降 work_mem 或 max_connections，或加 PgBouncer。' },
      { symptom: 'Postmaster 进程 CPU 100% 但客户端连接正常', cause: '短时间内大量连接请求涌入——Postmaster 忙于 fork/回收进程消耗大量 CPU。', fix: '用 PgBouncer 连接池缓冲连接请求。设 superuser_reserved_connections 预留管理连接。应用层用连接池减少连接创建频率。' },
    ],
  exercises: [
      { level: '基础', task: '计算：如果 max_connections=200、work_mem=16MB，最坏情况下内存消耗多少', hint: '200 × (16MB + 10MB 连接开销) + shared_buffers', answer: '200 × (16 + 10) + shared_buffers(假设 4GB) ≈ 5.2GB + 4GB = 9.2GB。但实际不太可能同时所有连接都在排序（work_mem）。这就是为什么 max_connections 不能设太大而要用连接池。' },
    ],
  },

  "Ur23UVs_nXaltytF1WJD8": {
    mentalModel: 'PL/pgSQL 是 PG 的存储过程语言——让你在数据库内部写带逻辑的函数（循环/条件/变量），而不用把数据捞到应用层处理。就像"在产地加工，不运输原材料"。',
    sections: [
      { title: 'PL/pgSQL 基础', content: '结构：DECLARE（声明变量）、BEGIN...END（函数体）、EXCEPTION（异常处理）。变量类型：支持所有 PG 类型 + RECORD（动态行类型）。循环：FOR ... IN ... LOOP / WHILE / LOOP...EXIT WHEN。条件：IF ... THEN ... ELSIF ... ELSE ... END IF。动态 SQL：EXECUTE \'SELECT ...\' USING var。返回表：RETURNS TABLE(...) 或 RETURNS SETOF。适用场景：复杂数据批量处理、需要事务控制、减少应用-数据库间的网络往返。避免场景：把业务逻辑全写成存储过程（不可测试、难版本管理）。' },
    ],
    diagnosis: [
      { symptom: 'PL/pgSQL 函数执行比同逻辑应用代码慢', cause: 'PL/pgSQL 解释执行非编译执行。大量数学计算/字符串处理在 PL/pgSQL 中可能比 Go/Python 慢。', fix: 'PL/pgSQL 优势是减少网络往返非计算速度。主要为 SQL 操作+简单逻辑→合适。大量计算→C 扩展或 PL/Python。简单 SQL 函数可能被内联到调用查询。' },
      { symptom: 'PL/pgSQL EXCEPTION 块捕获错误后性能断崖下降', cause: '进入 EXCEPTION 块创建子事务（savepoint）——每个 EXCEPTION 开销=子事务创建清理。循环中每次迭代触发 EXCEPTION 开销极大。', fix: '不做流程控制用 EXCEPTION。先检查条件再执行。EXCEPTION 块放循环外——一次处理而非每次迭代。' },
    ],
  exercises: [
      { level: '进阶', task: '写一个 PL/pgSQL 函数：统计某用户在某日期范围内的订单总金额', hint: 'CREATE FUNCTION ... RETURNS NUMERIC LANGUAGE plpgsql', answer: "CREATE FUNCTION user_order_total(uid INT, start_date DATE, end_date DATE) RETURNS NUMERIC AS $$ DECLARE total NUMERIC; BEGIN SELECT COALESCE(SUM(amount), 0) INTO total FROM orders WHERE user_id = uid AND created_at BETWEEN start_date AND end_date; RETURN total; END; $$ LANGUAGE plpgsql;" },
    ],
  },

  "msm4QCAA-MRVI1psf6tt3": {
    mentalModel: 'PG 支持"一人一设置"（Per-User/Per-DB Settings）——不同用户连接时自动应用不同的配置（如给分析用户更大的 work_mem）。就像不同员工进公司门禁系统后看到不同的功能菜单。',
    sections: [
      { title: '按用户/数据库设置配置', content: 'ALTER ROLE analyst SET work_mem = \'256MB\'; → analyst 用户登录后自动 work_mem = 256MB。ALTER DATABASE reporting SET statement_timeout = \'5min\'; → 连这个数据库自动设置超时。查看所有定制：SELECT * FROM pg_db_role_setting; 优先级：会话 SET > 角色 ALTER ROLE ... SET > 数据库 ALTER DATABASE ... SET > postgresql.conf 全局设置。' },
    ],
    diagnosis: [
      { symptom: 'ALTER ROLE SET work_mem 后用户查询仍用默认值', cause: '角色级设置需重连才生效——已有连接不变。或数据库级 ALTER DATABASE SET 优先级更高覆盖了角色设置。', fix: "断开重连后再查 SHOW work_mem;。SELECT source,name,setting FROM pg_settings WHERE name='work_mem'; 看值的来源（default/file/role/database/session）。更高级覆盖低级。" },
      { symptom: 'ALTER DATABASE SET statement_timeout 该库所有查询受限', cause: '数据库级 SET 对所有连接生效——含 DBA 维护操作（VACUUM FULL/CREATE INDEX）也受限。', fix: "只为特定角色设：ALTER ROLE app_user SET statement_timeout='30s'; 非 ALTER DATABASE。DBA 自己的连接 SET statement_timeout=0; 临时取消。" },
    ],
  exercises: [
      { level: '基础', task: '创建一个"只读分析用户"，登录时自动设置更大的 work_mem 和 statement_timeout', hint: 'ALTER ROLE ... SET ...', answer: "CREATE ROLE analyst WITH LOGIN PASSWORD 'pw'; GRANT SELECT ON ALL TABLES IN SCHEMA public TO analyst; ALTER ROLE analyst SET work_mem = '256MB'; ALTER ROLE analyst SET statement_timeout = '5min'; analyst 登录后自动应用这些设置。" },
    ],
  },

  "cJYlZJ9f3kdptNrTlpMNU": {
    mentalModel: 'pg_upgrade 是 PG 大版本升级的"一键迁移工具"——从 PG 14 升到 PG 16 不用 dump/restore（大数据库要好几个小时），而是直接"升级系统目录"（几分钟搞定）。',
    sections: [
      { title: 'pg_upgrade 原理', content: 'pg_upgrade 工作原理：复制旧的系统目录（pg_catalog）→ 转换为新格式 → 物理数据文件（表/索引的磁盘文件）直接链接或复制（不需要导出导入）。使用：pg_upgrade -d old_data_dir -D new_data_dir -b old_bin_dir -B new_bin_dir。--link 模式：硬链接数据文件（秒级升级！但新旧不能共存）。--check 模式：只检查不执行（先跑这个看有没有问题）。注意：升级前全量备份！升级不可逆。' },
    ],
    diagnosis: [
      { symptom: 'pg_upgrade --check 报 schema 相关错误', cause: '源和目标 PG 版本差异过大（如 10→16 跳多版本），或源库有扩展版本不兼容。', fix: '确保两 PG 装相同版本扩展。先升中间版本（10→13→16）。确保源库 datfrozenxid 不太旧。--check 模式反复跑直到全通过。' },
      { symptom: 'pg_upgrade --link 升级后旧版本 PG 无法启动', cause: '--link 创建数据文件硬链接——新旧版本共享同一物理文件。启动旧版本可能损坏新版本共享数据。', fix: '--link 模式升级后绝对不要启动旧版本！升级前 pg_dumpall 做完整备份。升级后验证通过删除旧数据目录。' },
    ],
  exercises: [
      { level: '进阶', task: '描述 pg_dump -> pg_restore 升级和 pg_upgrade 升级的区别，什么场景用什么', hint: '时间 vs 安全性', answer: 'pg_dump/restore：慢（需要导出导入所有数据）、但安全（完全重写数据文件、自带清理碎片）、可以跨架构。pg_upgrade：快（几分钟）、但出问题无法回退（必须提前备份）、数据文件不变（碎片还在）。大数据库用 pg_upgrade，小库或跨架构升级用 dump/restore。' },
    ],
  },

  "MVVWAf9Hk3Fom-wBhO64R": {
    mentalModel: '逻辑复制（Logical Replication）是 PG 10+ 的"选择性同步"——不只是整个实例一模一样（那是流复制），而是能选特定表同步、甚至在不同 PG 版本之间同步。',
    sections: [
      { title: '逻辑复制的关键点', content: '相比流复制：1) 可以选择只复制某些表 2) 主从可以不同 PG 版本（PG 10 ↔ PG 16）3) 从库可以有自己的表和数据（不是只读镜像）4) 但 DDL（ALTER TABLE）不自动复制。配置：主库 CREATE PUBLICATION（定义要发布哪些表），从库 CREATE SUBSCRIPTION（定义从哪订阅）。wal_level 必须是 logical。初始数据自动同步（COPY），后续实时同步。' },
    ],
    diagnosis: [
      { symptom: '逻辑复制停止同步——订阅端状态 down', cause: '发布端或订阅端重启、网络中断、WAL 位点丢失、或表结构不一致致 replication worker 报错退出。', fix: '检查发布端：SELECT * FROM pg_stat_replication 看槽状态。检查订阅端：SELECT * FROM pg_stat_subscription 看 last_error。表结构不一致先修复再 REFRESH PUBLICATION。' },
      { symptom: '逻辑复制延迟几分钟——订阅端数据落后', cause: '订阅端应用变更速度跟不上发布端产生变更速度。可能是磁盘 IO 慢、CPU 不足、或大事务阻塞 worker。', fix: '查看延迟：SELECT pg_wal_lsn_diff(pg_current_wal_lsn(),replay_lsn) FROM pg_stat_replication。增加订阅端 maintenance_work_mem。优化订阅端表索引。' },
    ],
  exercises: [
      { level: '进阶', task: '设计一个 migration 方案：从 PG 12 迁移到 PG 16，要求停机时间 < 1 分钟', hint: '逻辑复制 + 切换', answer: '1) PG 16 新库建立，建好所有表和 schema 2) PG 12 主库 CREATE PUBLICATION 发布所有表 3) PG 16 CREATE SUBSCRIPTION 从 PG 12 订阅 4) 等待数据完全同步（监控 replication lag）5) 切换时：停止应用、确认延迟为 0、切断订阅、应用指向 PG 16、启动应用。整个过程应用只停几十秒。' },
    ],
  },

  "XYaVsj5_48CSnoTSGXBbN": {
    mentalModel: 'pg_basebackup 是 PG 的"全量物理备份"——不是导 SQL，而是直接复制 PG 数据目录的文件。配合 WAL 归档可以做"任意时间点恢复"（Point-in-Time Recovery = PITR）。',
    sections: [
      { title: 'pg_basebackup 使用', content: '命令：pg_basebackup -h primary_host -D /backup/base -Ft -z -P。-Ft：tar 格式。-z：压缩。-P：显示进度。-R：自动生成 standby.signal 文件（可直接用作从库）。备份结果 = 和主库完全一致的数据文件快照。配合 WAL 归档：备份后的 WAL 持续归档 → 恢复到任意时间点（PITR）。比 pg_dump 快得多（不需要逻辑导出/导入、百万行表几秒完成）。' },
    ],
    diagnosis: [
      { symptom: 'pg_basebackup 报 "could not receive data from WAL stream"', cause: 'max_wal_senders 不足（所有 sender 槽被占用）或网络不稳定。pg_hba.conf replication 条目不匹配。', fix: '确认 pg_hba.conf：host replication repl_user <ip>/0 scram-sha-256。增大 max_wal_senders：ALTER SYSTEM SET max_wal_senders=10; 确保网络稳定。' },
      { symptom: 'pg_basebackup 完成后启动从库报 "incomplete startup packet"', cause: '从库配置不完整——缺 primary_conninfo 或 standby.signal（PG 12+）文件。备份时未加 -R。', fix: 'pg_basebackup 用 -R 选项。PG 12+ 自动创建 standby.signal。否则手动 touch /data/standby.signal 并加 primary_conninfo 到 postgresql.auto.conf。' },
    ],
  exercises: [
      { level: '基础', task: '用 pg_basebackup 做一个全量备份', hint: 'pg_basebackup -D /backup/base -Ft -z -P', answer: 'pg_basebackup -h localhost -D /tmp/pg_backup -Ft -z -P --checkpoint=fast。--checkpoint=fast 强制立即 checkpoint（加快备份但短暂影响性能）。' },
    ],
  },
};