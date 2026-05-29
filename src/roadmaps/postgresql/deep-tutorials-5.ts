import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_5: Record<string, DeepTutorial> = {
  // 76-90: 高级查询/分区/函数/锁/存储/性能调优
  "iQqEC1CnVAoM7x455jO_S": {
    mentalModel: '窗口函数是 SQL 的"超级分组能力"——GROUP BY 把多行压成一行（丢了明细），窗口函数给每行都计算聚合值但保留所有行。就像在训练营给每个学员打分的同时，旁边标出"全营平均分"和"你在你班的排名"。',
    sections: [
      { title: '核心窗口函数', content: 'ROW_NUMBER()：行号 1,2,3,...。RANK()/DENSE_RANK()：排名（有并列时 RANK 跳号、DENSE_RANK 不跳）。LAG(column, offset)：往前看 N 行。LEAD(column, offset)：往后看 N 行。SUM/AVG/COUNT OVER：累计和/移动平均。PARTITION BY：分组计算（如"每个部门的薪资排名"）。ORDER BY：在窗口内排序（不排序的窗口函数对整个结果集计算）。关键语法：function_name() OVER (PARTITION BY col ORDER BY col)。' },
    ],
    handsOn: [
      { title: '窗口函数示例', cmd: `psql -c "SELECT name, department, salary, RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank, AVG(salary) OVER (PARTITION BY department) AS dept_avg FROM employees ORDER BY department, salary DESC"`, output: 'name | dept | salary | rank | dept_avg\nAlice| Eng  | 100000 | 1    | 85000\nBob  | Eng  |  85000 | 2    | 85000\nCarol| Sales|  90000 | 1    | 80000', explain: 'RANK() 在每个部门内排名。AVG() 为每行计算部门平均薪资。窗口函数让你同时看到个人数据和聚合数据，不用子查询。' },
    ],
    diagnosis: [
      { symptom: '窗口函数 OVER (PARTITION BY col ORDER BY col) 极慢', cause: 'PARTITION BY+ORDER BY 需对每个分区内排序——无匹配索引时全表排序+分区成本高。', fix: '创建匹配索引：CREATE INDEX idx ON table(partition_col, order_col); 使扫描自然得到已排序分区结果。EXPLAIN 检查是否走 Index Scan 而非 Sort+WindowAgg。' },
      { symptom: 'ROW_NUMBER()和RANK()结果与预期不一致', cause: 'ROW_NUMBER()每行唯一编号；RANK()同值同排名但跳号(1,1,3)；DENSE_RANK()同值同排名不跳号(1,1,2)。用错了函数。', fix: '唯一编号→ROW_NUMBER()；排名需跳号→RANK()；排名不跳号→DENSE_RANK()。在测试数据验证三种函数差异。' },
    ],
  exercises: [
      { level: '进阶', task: '用 LAG() 计算每个订单和上一个订单的时间间隔', hint: 'LAG(created_at, 1) OVER (PARTITION BY user_id ORDER BY created_at)', answer: "SELECT user_id, created_at, created_at - LAG(created_at, 1) OVER (PARTITION BY user_id ORDER BY created_at) AS time_since_last FROM orders ORDER BY user_id, created_at;" },
    ],
  },

  "OiGRtLsc28Tv35vIut6B6": {
    mentalModel: '数据分区就是把一张大表"物理拆分"成多个小表——按时间拆（每月一张）、按地区拆（每国一张）、按 ID 范围拆。查询时 PG 自动只扫描相关的分区（分区裁剪），性能飞跃。',
    sections: [
      { title: '分区类型', content: 'Range 分区：按范围分（如按日期：2024-01、2024-02...）。List 分区：按枚举值分（如按地区：CN、US、EU...）。Hash 分区：按哈希值分（均匀分布，但要查具体值时扫所有分区）。PG 10 支持声明式分区，PG 12+ 支持自动分区裁剪。分区索引：每个分区独立的索引（比一个巨型索引高效）。注意：主键和唯一约束必须包含分区键。' },
    ],
    diagnosis: [
      { symptom: '分区表查询未做分区裁剪，扫了所有分区', cause: "WHERE 条件表达式和分区键不匹配——如分区键是 created_at 但 WHERE 用了 date_trunc('month',created_at)。", fix: "WHERE 直接用分区键列不包函数：WHERE created_at>='2024-01-01' AND created_at<'2024-02-01'。EXPLAIN 查看 Append 节点和分区数。" },
      { symptom: '分区表主键 id 插入报唯一冲突', cause: '分区表主键/唯一约束必须包含分区键——不同分区可能有相同 id。', fix: '主键定义为(id, partition_key)：CREATE TABLE orders(id SERIAL, created_at DATE, PRIMARY KEY(id, created_at)) PARTITION BY RANGE(created_at);' },
    ],
  exercises: [
      { level: '进阶', task: '创建一个按月份分区的 orders 表', hint: 'PARTITION BY RANGE + CREATE TABLE ... PARTITION OF', answer: "CREATE TABLE orders (id SERIAL, user_id INT, amount NUMERIC, created_at DATE NOT NULL) PARTITION BY RANGE (created_at); CREATE TABLE orders_202401 PARTITION OF orders FOR VALUES FROM ('2024-01-01') TO ('2024-02-01'); 查询时 WHERE created_at = '2024-01-15' 自动只扫描 orders_202401 分区。" },
    ],
  },

  "LiF2Yh818D-zEF58v5Fgr": {
    mentalModel: 'PG 函数像"自定义 SQL 积木"——把常用的操作封装起来，之后调用它就像拼积木。PL/pgSQL 是最常用的函数语言，支持变量、循环、条件判断。',
    sections: [
      { title: '函数 vs 存储过程', content: '函数（FUNCTION）：返回一个值或表，可在 SELECT 中调用。存储过程（PROCEDURE，PG 11+）：不返回值，可包含事务控制（COMMIT/ROLLBACK）。语言：SQL（最简单，只写 SQL 语句）、PL/pgSQL（带变量/循环/条件）、PL/Python、PL/Perl、JavaScript 等。性能注意：IMMUTABLE 标记的函数可在索引中使用、STABLE 标记的可被优化器优化、VOLATILE 的每次重新执行。' },
    ],
    diagnosis: [
      { symptom: '函数返回结果不稳定——同样参数不同结果', cause: '函数未声明 IMMUTABLE/STABLE/VOLATILE，默认 VOLATILE。优化器认为每次结果可能不同。', fix: '据特性声明：IMMUTABLE（相同参数永远相同→可用于索引）、STABLE（同查询内相同→可优化）、VOLATILE（每次可能不同→每次执行）。' },
      { symptom: 'PL/pgSQL 函数报 "query has no destination for result data"', cause: 'PL/pgSQL 中纯 SELECT 需有 INTO 或 RETURN QUERY 指定结果去向。不能执行裸 SELECT。', fix: 'SELECT ... INTO variable; 存入变量。RETURN QUERY SELECT ...; 返回结果。仅执行操作用 PERFORM 代替 SELECT（丢弃结果）。' },
    ],
  exercises: [
      { level: '基础', task: '创建一个 SQL 函数：返回价格高于指定值的商品数', hint: 'CREATE FUNCTION + RETURNS + LANGUAGE SQL', answer: "CREATE FUNCTION count_expensive(min_price NUMERIC) RETURNS INT AS 'SELECT COUNT(*) FROM products WHERE price > min_price' LANGUAGE SQL IMMUTABLE; 调用：SELECT count_expensive(100);" },
    ],
  },

  "ps2KK88QA1n5udn2ochIn": {
    mentalModel: '触发器（Trigger）是数据库的"自动值班员"——当某件事发生（INSERT/UPDATE/DELETE）时，自动执行一段代码。就像门口的感应灯：检测到人进来→自动亮灯。',
    sections: [
      { title: '触发器的使用', content: '场景：1) 自动更新时间戳——BEFORE UPDATE 设 updated_at = NOW() 2) 审计日志——AFTER INSERT/UPDATE/DELETE 写变更到历史表 3) 数据校验——BEFORE INSERT 校验字段合法性 4) 维护物化视图——数据变更时刷新。语法：CREATE TRIGGER trigger_name BEFORE/AFTER INSERT/UPDATE/DELETE ON table_name FOR EACH ROW EXECUTE FUNCTION trigger_function(); 触发器函数必须返回 TRIGGER 类型。注意：触发器让逻辑隐式发生——过度使用会让"一个 INSERT 做了 5 件事"变得难追踪。' },
    ],
    diagnosis: [
      { symptom: 'INSERT 变慢 5 倍——排查发现触发器做了大量操作', cause: 'INSERT/UPDATE 频繁表上 AFTER 触发器同步执行复杂查询或更新其他表——直接拖慢原操作。', fix: '检查触发器函数 SQL 是否有优化空间。非关键操作异步：触发器写事件表，外部 worker 处理。或 LISTEN/NOTIFY 发通知。' },
      { symptom: '触发器修改 NEW 行但 UPDATE 后改动未生效', cause: 'BEFORE 触发器返回 NULL 该行被静默跳过。正确应 RETURN NEW; AFTER 触发器不能修改 NEW 行。', fix: '修改数据用 BEFORE 触发器并 RETURN NEW;。AFTER 触发器中不能改 NEW——只做副作用操作（日志/通知）。确认触发器类型和返回值。' },
    ],
  exercises: [
      { level: '进阶', task: '创建一个自动更新 updated_at 的触发器', hint: 'BEFORE UPDATE + EXECUTE FUNCTION', answer: "CREATE FUNCTION update_timestamp() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW(); RETURN NEW; END; $$ LANGUAGE plpgsql; CREATE TRIGGER trig_auto_timestamp BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_timestamp();" },
    ],
  },

  "pOkafV7nDHme4jk-hA8Cn": {
    mentalModel: 'PG 中的锁就像"会议室预约"——有人在用会议室（写数据），别人要等他用完才能用。共享锁（读）多人可以同时持有，排他锁（写）只能一人持有。死锁就是两人互相等对方的会议室。',
    sections: [
      { title: '锁类型和排查', content: '行级锁：SELECT ... FOR UPDATE 锁定返回的行（等事务结束才释放）。表级锁：ACCESS SHARE（SELECT 自动获取——最轻）、ROW EXCLUSIVE（INSERT/UPDATE/DELETE 自动获取）、ACCESS EXCLUSIVE（ALTER TABLE/DROP TABLE——最重，阻塞一切）。排查锁等待：SELECT * FROM pg_stat_activity WHERE wait_event_type = \'Lock\'; 查看被阻塞的查询。SELECT pg_blocking_pids(pid) 查看谁在阻塞。死锁：PG 自动检测并回滚其中一个事务，应用代码处理死锁异常并重试。' },
    ],
    diagnosis: [
      { symptom: '某个简单的 UPDATE 卡住不动，等几分钟才执行', cause: '另一个未提交的事务持有了同一行的锁（可能忘了 COMMIT 或应用卡住）。', fix: "SELECT pg_terminate_backend(blocking_pid) 杀掉持有锁的事务。或设置 lock_timeout = '5s' 让查询超时而非无限等待。应用代码用 NOWAIT 或 SKIP LOCKED。" },
    ],
    exercises: [
      { level: '进阶', task: '模拟一个死锁场景并观察 PG 如何自动处理', hint: '两个 session，互相等待对方的锁', answer: 'Session 1: BEGIN; UPDATE accounts SET balance=balance-100 WHERE id=1; (等一会) UPDATE accounts SET balance=balance+100 WHERE id=2; Session 2: BEGIN; UPDATE accounts SET balance=balance-50 WHERE id=2; UPDATE accounts SET balance=balance+50 WHERE id=1; PG 检测到死锁 → 回滚其中一个事务 → 另一个继续。' },
    ],
  },

  "4VrT_K9cZZ0qE1EheSQy0": {
    mentalModel: '存储参数就是给表和索引调"性能滑块"——fillfactor（页面填充率）调低了插入更快（有预留空间），autovacuum 参数调积极了清理更频繁。就像调节汽车引擎的各种螺丝。',
    sections: [
      { title: '关键存储参数', content: 'fillfactor：INSERT 时页面填充到百分之多少就停（默认 100）。对频繁 UPDATE 的表设 70-80——给 UPDATE 在同一个 page 内完成（HOT update）留空间，避免迁移到新 page。autovacuum_enabled：默认开，基本不要关。toast_tuple_target：大字段（text/jsonb）超过多少字节被 TOAST 压缩/外存。parallel_workers：表级别设置并行查询 worker 数。调整存储参数：ALTER TABLE t SET (fillfactor = 70);' },
    ],
    diagnosis: [
      { symptom: 'fillfactor=70 但插入新数据仍大量页分裂', cause: 'fillfactor 只影响初始插入和 INSERT。UPDATE 变长字段（text/varchar）行变长超预留空间时仍分裂。', fix: '降低 fillfactor 到 60 或更低。优选方案：将易变列拆分到独立 1:1 表。pgstattuple 检查页实际填充率。' },
      { symptom: '关闭 autovacuum 后表膨胀但手动 VACUUM 仍有效', cause: 'ALTER TABLE SET(autovacuum_enabled=false) 只关闭该表的 autovacuum，手动 VACUUM 仍有效。不要关 autovacuum。', fix: '打开 autovacuum 调低阈值。关闭 autovacuum 仅临时批量导入用——导入后立即打开并手动 VACUUM。' },
    ],
  exercises: [
      { level: '基础', task: '什么场景适合降低 fillfactor', hint: '什么操作会让行变长', answer: '频繁 UPDATE 且更新的字段会让行变长（如 text 字段加内容）。fillfactor=70 让 page 留 30% 空间给 UPDATE 在同 page 内完成（HOT update），避免行迁移到新 page + 索引更新。代价：占更多磁盘。' },
    ],
  },

  "KeBUzfrkorgFWpR8A-xmJ": {
    mentalModel: 'Buffer Manager 是 PG 的"共享内存缓存"——所有进程共享的 shared_buffers 区域。读取：先去 shared_buffers 找（命中→直接返回），没有→读磁盘→缓存。写入：先写 WAL → 改 shared_buffers → 后台慢慢刷盘。',
    sections: [
      { title: 'Buffer 工作原理', content: 'shared_buffers 大小由 shared_buffers 参数控制（建议物理内存 25%）。Buffer 替换策略：时钟扫描（Clock Sweep）算法——每个 buffer 有 usage count，每被访问 +1，时钟指针扫过 -1，count=0 的被踢出。Dirty Buffer：被修改但未写盘的 buffer → 由 Checkpointer 和 Background Writer 后台刷盘。查看 Buffer 命中率：SELECT sum(blks_hit) / sum(blks_read + blks_hit)::float * 100 AS hit_ratio FROM pg_stat_database; 目标 > 95%。' },
    ],
    diagnosis: [
      { symptom: 'shared_buffers 设内存 50%，PG 启动后 OOM', cause: 'shared_buffers 太大挤压 OS page cache。PG 依赖双缓存——shared_buffers + OS cache。shared_buffers 过大→OS cache 不足→IO 变慢且可能 OOM。', fix: 'shared_buffers 设物理内存 25%（最大不超 40%）。OS 也需要内存做文件缓存。监控缓存命中率：>95% 说明 shared_buffers 够用。' },
      { symptom: '数据库重启后前几分钟查询很慢', cause: 'shared_buffers 重启后为空（冷缓存）——所有数据需从磁盘加载。随查询运行热点数据逐渐加载变快。', fix: "装 pg_prewarm 扩展：CREATE EXTENSION pg_prewarm; 重启后手动预热：SELECT pg_prewarm('热点表名'); 或容忍——几分钟后自动恢复。" },
    ],
  exercises: [
      { level: '基础', task: '查询数据库的 Buffer 缓存命中率', hint: 'pg_stat_database + blks_hit / (blks_hit + blks_read)', answer: 'SELECT datname, blks_hit * 100.0 / NULLIF(blks_hit + blks_read, 0) AS cache_hit_ratio FROM pg_stat_database WHERE datname = \'mydb\'; > 95% 正常，< 90% 考虑加大 shared_buffers。' },
    ],
  },

  "dJzJP1uo4kVFThWgglPfk": {
    mentalModel: 'VACUUM 是 PG 的"垃圾回收员"——被 DELETE 的行不会马上释放空间（只是标记为不可见），VACUUM 来回收这些空间给新数据用。不跑 VACUUM = 表无限膨胀 + 事务 ID 回卷（数据库会锁死）。',
    sections: [
      { title: 'VACUUM 关键参数', content: 'VACUUM（手动或 autovacuum）：扫描死元组、标记可重用空间、更新统计信息。VACUUM FULL：重写整个表（紧凑排列、真正释放磁盘空间），但会锁表——生产环境少用。autovacuum：后台自动跑（默认开），由 autovacuum_vacuum_scale_factor（默认 0.2 = 表 20% 改了就触发）控制频率。autovacuum_vacuum_cost_limit：控制 VACUUM 的 IO 速率以免影响正常查询。对大表：降低 scale_factor（如 0.05），让 VACUUM 更频繁但每次处理更少。' },
    ],
    diagnosis: [
      { symptom: '表越来越大但实际数据没怎么增长（DELETE 多 UPDATE 多的表）', cause: 'autovacuum 跟不上死元组的产生速度——死元组来不及回收。', fix: "调低 autovacuum_vacuum_scale_factor 到 0.01-0.05（对这张高频表单独设置）。检查：SELECT n_dead_tup, n_live_tup FROM pg_stat_user_tables WHERE relname = \'mytable\'; 如果死元组远大于活元组→VACUUM 跟不上。" },
    ],
    exercises: [
      { level: '进阶', task: '为一张高更新频率的大表单独设置更激进的 autovacuum', hint: 'ALTER TABLE ... SET (autovacuum_... = ...)', answer: "ALTER TABLE events SET (autovacuum_vacuum_scale_factor = 0.01, autovacuum_vacuum_cost_limit = 1000); 降低触发阈值（1% 变更就 VACUUM），提高 cost_limit 加快完成速度。" },
    ],
  },

  "hOPwVdIzesselbsI_rRxt": {
    mentalModel: '查询优化器是 PG 的"导航软件"——你的 SQL 说"去目的地的"（SELECT 结果），优化器评估多条路线（全表扫描/走这个索引/用那个 JOIN 顺序）并选择代价最低的路线。统计信息（pg_stats）就是它的"实时路况"。',
    sections: [
      { title: '优化器统计信息', content: 'ANALYZE：更新表/列的统计信息（行数、唯一值数、最常见的值、直方图）。autovacuum 除了回收空间也自动 ANALYZE。查看统计：SELECT * FROM pg_stats WHERE tablename = \'orders\' AND attname = \'status\'; 关键字段：n_distinct（唯一值数）、most_common_vals（最常见的值）、histogram_bounds（数据分布直方图）。优化器依赖统计信息做决策——统计信息过期会导致"数据库明明有索引却不走"。' },
    ],
    diagnosis: [
      { symptom: '数据库不按预期走索引，EXPLAIN 显示 Seq Scan', cause: '可能是统计信息过期（优化器以为表很小）、或预估行数和实际差太多。', fix: 'ANALYZE tablename; 更新统计信息后重试。如果还不行→增加统计精度：ALTER TABLE t ALTER COLUMN c SET STATISTICS 1000;（默认 100，对分布不均匀的列提高）。' },
    ],
    exercises: [
      { level: '基础', task: '手动 ANALYZE 一张表后查看优化器的统计信息', hint: 'ANALYZE + pg_stats', answer: 'ANALYZE products; SELECT attname, n_distinct, most_common_vals, most_common_freqs FROM pg_stats WHERE tablename = \'products\' AND attname = \'category\'; 可以看到优化器对 category 列的"认知"。' },
    ],
  },

  "yl3gxfQs4nOE0N7uGqR0d": {
    mentalModel: '资源使用监控就是看"数据库有没有透支"——CPU 谁在吃、内存谁在占、磁盘 IO 谁在抢、连接数有没有爆。pg_stat_* 视图是你的仪表盘。',
    sections: [
      { title: '关键监控视图', content: 'pg_stat_activity：当前所有连接和正在执行的查询（筛选 state != \'idle\' 看活跃查询）。pg_stat_user_tables：每张表的访问统计（seq_scan/idx_scan/n_tup_ins/n_live_tup/n_dead_tup）。pg_stat_user_indexes：每个索引的使用情况（idx_scan=0 的索引是从来没被用的！）。pg_locks：当前的锁状态。pg_stat_bgwriter：后台写进程统计。关键：wait_event 字段告诉你查询在等什么（IO/Lock/WALWrite/CPU）。' },
    ],
    diagnosis: [
      { symptom: 'pg_stat_activity 显示十几个查询 active 但 CPU 低', cause: '查询在等待 IO——wait_event 显示 DataFileRead 或 WALWrite。不消耗 CPU 但等磁盘。', fix: "SELECT pid,wait_event_type,wait_event,query FROM pg_stat_activity WHERE state='active'; 看具体等待事件。iostat -x 1 确认磁盘 IO 瓶颈。" },
      { symptom: '某些索引 idx_scan 一直是 0——从未被使用', cause: '索引不符合任何查询模式，或业务逻辑已变。每个未用索引消耗磁盘和写入性能。', fix: '找出未用索引并评估删除：SELECT schemaname,tablename,indexname,pg_size_pretty(pg_relation_size(indexrelid)) FROM pg_stat_user_indexes WHERE idx_scan=0; DROP INDEX CONCURRENTLY。' },
    ],
  exercises: [
      { level: '基础', task: '查看当前哪些查询正在运行且耗时最长', hint: 'pg_stat_activity + ORDER BY', answer: "SELECT pid, usename, state, query_start, wait_event, LEFT(query, 80) FROM pg_stat_activity WHERE state = 'active' AND pid != pg_backend_pid() ORDER BY query_start;" },
    ],
  },

  "A1LGOqqaka0ILcYwybclP": {
    mentalModel: '递归 CTE 就是 SQL 的"顺藤摸瓜"——给你一个起点（根节点），顺着关联找下一层（子节点），再顺着下一层找更下一层，直到没有更多。适合树/图结构数据。',
    sections: [
      { title: '递归 CTE 语法', content: 'WITH RECURSIVE name AS (UNION ALL ... )。第一部分（非递归）：初始查询（根节点）。UNION ALL 第二部分（递归）：引用 CTE 自身的查询（子节点）。终止条件：递归部分没有返回行时停止。示例：组织架构从 CEO 往下遍历所有下属。注意：防止无限循环——可以加 cycle detection（CYCLE 子句）或手动 depth 限制。递归 CTE 也可以用于生成序列（如日期列表）。' },
    ],
    diagnosis: [
      { symptom: '递归 CTE 只输出部分层级就停了', cause: '递归部分 JOIN 条件过滤了部分子节点导致中断，或数据缺失导致递归提前终止。', fix: "检查递归部分 WHERE 是否过严。在 CTE 外过滤：WITH RECURSIVE all_nodes AS(...) SELECT * FROM all_nodes WHERE status='active'; 避免在递归内过滤。用 depth 列追踪层级。" },
      { symptom: '递归 CTE 结果有重复行', cause: '数据循环引用（A→B→A）或 UNION ALL 中初始查询和递归结果有交集。', fix: '使用 UNION 去重。PG 14+ 用 CYCLE 检测。手动检测：递归部分 WHERE NOT EXISTS(SELECT 1 FROM cte WHERE cte.id=e.parent_id)。' },
    ],
  exercises: [
      { level: '进阶', task: '用递归 CTE 生成一个连续的日期序列（从 1 月 1 日到 1 月 31 日）', hint: 'WITH RECURSIVE dates AS (SELECT ... UNION ALL SELECT ... LIMIT ...)', answer: "WITH RECURSIVE dates AS (SELECT '2024-01-01'::date AS d UNION ALL SELECT d+1 FROM dates WHERE d < '2024-01-31') SELECT d FROM dates;" },
    ],
  },

  "9VmQ-vN3nPyf1pTFIcj40": {
    mentalModel: 'WAL（预写日志）是 PG 的"飞行记录仪"——对数据库的任何修改都先记到 WAL，再改实际数据。即使数据库突然崩溃（断电），重启后从 WAL 回放就能恢复所有已提交的修改。',
    sections: [
      { title: 'WAL 工作机制', content: '写流程：1) 写 WAL 记录到 WAL Buffer 2) 事务 COMMIT 时，WAL 刷到磁盘（fsync）3) 修改数据页在 shared_buffers 中（不需要立刻刷盘）4) Checkpointer 定期将脏页刷盘并标记 WAL 位置（Checkpoint）。Crash Recovery：从上次 Checkpoint 之后的所有 WAL 记录全部重放 → 数据库恢复到最后一次提交时的一致状态。WAL 文件大小：默认 16MB 一个段。wal_level = replica 是生产最低要求（支持流复制），logical 还需要更多信息。' },
    ],
    diagnosis: [
      { symptom: 'pg_wal 目录占了几十 GB 磁盘', cause: 'WAL 未及时清理——checkpoint 间隔太长、WAL 归档失败、或 replication slot 阻塞清理。', fix: '检查 slot：SELECT slot_name,pg_wal_lsn_diff(pg_current_wal_lsn(),restart_lsn) AS lag FROM pg_replication_slots; lag 大→slot 阻塞清理。删除无用 slot：pg_drop_replication_slot()。检查 pg_stat_archiver 归档状态。' },
      { symptom: '事务提交很慢（几百毫秒）——等 WAL flush', cause: '每次 COMMIT 须等 WAL fsync 到磁盘。磁盘写入延迟高（机械硬盘或网络存储）时即使小事务也慢。', fix: 'SSD 存储 WAL（或将 pg_wal 放独立低延迟 SSD）。调大 wal_writer_delay 减少 fsync 频率。或 synchronous_commit=off 牺牲持久性换性能。' },
    ],
  exercises: [
      { level: '基础', task: '解释为什么 PG 不会因为突然断电丢已提交的数据', hint: 'WAL 先刷盘', answer: 'COMMIT 返回成功前，WAL 已经 fsync 到磁盘。即使数据页还没刷盘，重启后的 Crash Recovery 会从 WAL 回放所有已提交的修改。前提：fsync=on（默认）、磁盘不撒谎（有写入缓存的需要用带电池的 RAID 卡或 SSD）。' },
    ],
  },
};