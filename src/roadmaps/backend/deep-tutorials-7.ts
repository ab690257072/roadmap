import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_7: Record<string, DeepTutorial> = {
  // ============================================================
  // 136-150: 性能、缓存、集成、测试、事务、架构
  // ============================================================
  "SYXJhanu0lFmGj2m2XXhS": {
    mentalModel: '性能剖析就像给代码做"CT 扫描"——不是猜哪里慢，而是用工具精确测量每个环节的耗时。CPU profiling、内存 profiling、SQL slow query、网络延迟，每个维度都有专门的"扫描仪"。',
    sections: [
      { title: '性能剖析方法', content: '1) CPU profile：用 perf/pprof/py-spy 采样看哪个函数占了最多 CPU 时间 2) Memory profile：用 heaptrack/memory_profiler 看哪块内存分配最多 3) SQL slow query：数据库 slow_query_log + EXPLAIN 看慢 SQL 的执行计划 4) 网络：tcpdump/Wireshark + 链路追踪看服务间调用耗时。核心原则：先测量再优化，别瞎猜。90% 的性能问题来自 10% 的代码（找到这 10% 是 profiling 的使命）。' },
      { title: '性能剖析实战——一个慢 API 的完整诊断流程', content: '用户反馈：/api/orders 接口响应 3 秒。诊断步骤：1) 确认是后端慢而非网络——在服务器上用 curl localhost 测（排除 CDN/负载均衡器/网络延迟因素）2) 看 APM/链路追踪——如果已有 Jaeger/Datadog，直接看 /api/orders 的 trace，找到耗时最长的 span（如 "SELECT * FROM orders" 耗时 2.8s）3) 如果是数据库慢——数据库 slow_query_log 确认 SQL + EXPLAIN ANALYZE 查看执行计划 → 缺索引或统计信息过期 4) 如果是应用代码慢——pprof CPU profile → 找到占 CPU 最多的函数（如 JSON 序列化一个大对象、不当的正则匹配）5) 如果是外部 API 慢——加超时 + 异步化 + 降级。原则：不跳过任何一层——网络→应用→数据库→外部依赖，逐层排除，直到找到"这个 slow span 具体在做什么"。' },
    ],
    handsOn: [
      { title: '用 pprof 抓取 Go 应用 30 秒 CPU profile', cmd: 'curl -o /tmp/cpu.prof "http://localhost:8080/debug/pprof/profile?seconds=30" && go tool pprof -top /tmp/cpu.prof', output: 'Showing nodes accounting for 15.20s, 96.57% of 15.74s total\n      flat  flat%   sum%        cum   cum%\n     5.20s 33.04% 33.04%      5.20s 33.04%  json.Marshal\n     3.10s 19.70% 52.74%      3.10s 19.70%  regexp.(*Regexp).FindAllString', explain: 'top 显示 flat（函数自身耗时）和 cum（函数+其调用的子函数总耗时）。这里 json.Marshal 占了 33% CPU——可能是序列化了超大对象。regexp 占 19%——可能有复杂的正则表达式需要优化。' },
    ],
    diagnosis: [
      { symptom: 'CPU profile 显示 runtime.mallocgc 占用很高', cause: '频繁的内存分配和 GC——在高 QPS 下每次请求分配大量临时对象', fix: '减少内存分配：复用对象（sync.Pool）、使用预分配的 slice/map、避免在循环中创建字符串。用 memory profile 定位具体分配点' },
      { symptom: 'pprof 火焰图很平——没有明显的 CPU 热点函数', cause: '瓶颈不在 CPU 而在 IO 等待——如数据库响应慢、外部 API 延迟高、磁盘 IO 瓶颈', fix: '用 trace profiling（阻塞分析）而非 CPU profiling。Go 用 runtime/trace 或 pprof 的 block profile。Linux 用 perf 的 tracepoint 或 eBPF 工具（bpftrace）追踪 IO 延迟' },
    ],
    exercises: [
      { level: '进阶', task: '用 pprof 对一个 Go HTTP 服务做 CPU profiling，找到最耗 CPU 的函数', hint: 'import _ "net/http/pprof" + go tool pprof', answer: '代码中 import _ "net/http/pprof"，启动服务后用 go tool pprof http://localhost:8080/debug/pprof/profile?seconds=30 采样 30 秒，进入 pprof 后用 top 看 CPU 消耗排名，用 web 看火焰图。' },
      { level: '基础', task: '设计一个"慢 API 排查清单"——收到"API 慢了"的反馈后，按什么顺序排查', hint: '网络→应用→数据库→外部', answer: '1) 确认范围——一个用户慢还是所有用户慢？单个端点慢还是全部慢？2) 排除网络——服务器本地 curl 测试、查 Nginx/负载均衡器日志 3) 查 APM trace（如有）——直接定位到最慢的 span 4) 查数据库——慢查询日志 + EXPLAIN 5) 查应用——pprof CPU profile、gc log 6) 查外部依赖——是否有第三方 API 调用的超时/失败日志。如果以上都没有 → 查操作系统层的 IO/网络（iostat, netstat, dmesg）。' },
    ],
  },

  "uPjCrDGA2MHylWXbZvMBM": {
    mentalModel: '缓存就是用"空间换时间"——把计算结果存起来，下次直接拿，不重新算。但缓存的最大挑战不是"怎么存"，而是"什么时候让缓存失效"——过期数据比没有数据更危险。',
    sections: [
      { title: '缓存设计核心问题', content: '1) 缓存穿透：查不存在的数据→缓存没命中→每次都打数据库。解决：布隆过滤器或缓存空值（短 TTL）。2) 缓存击穿：热点数据过期→大量请求同时穿透到数据库。解决：互斥锁（SETNX 抢锁重建）或永不过期+后台更新。3) 缓存雪崩：大量缓存同时过期→数据库瞬间被打垮。解决：TTL 加随机值（如 300+random(0,60) 秒）。4) 缓存一致性：数据更新后缓存怎么处理？Cache-Aside（更新数据库→删除缓存）是最常用模式。' },
      { title: '多级缓存架构——从浏览器到磁盘', content: '现代系统中缓存无处不在（分层递进）：L1 - 浏览器缓存（HTTP Cache-Control/ETag）→ L2 - CDN 边缘缓存（CloudFront/Cloudflare）→ L3 - 反向代理缓存（Nginx proxy_cache）→ L4 - 应用本地缓存（Caffeine/Guava Cache/内存 map）→ L5 - 分布式缓存（Redis/Memcached）→ L6 - 数据库 Buffer Pool（MySQL InnoDB Buffer Pool/PG shared_buffers）→ L7 - 操作系统 Page Cache。每层的目标不同：L1-L3 减少网络请求、L4 减少进程间通信、L5 减少数据库查询、L6-L7 减少磁盘 IO。缓存策略：离用户越近的缓存效果越好——一个 CDN 缓存的命中的价值远超 Redis 缓存的命中。先优化上层再优化下层。' },
    ],
    handsOn: [
      { title: '配置 Nginx 反向代理缓存减少后端负载', cmd: 'cat > /tmp/nginx-cache.conf << \'EOF\'\nproxy_cache_path /tmp/nginx_cache levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;\nserver {\n  location /api/ {\n    proxy_cache my_cache;\n    proxy_cache_valid 200 5m;\n    proxy_cache_key "$host$uri";\n    proxy_pass http://backend:3000;\n  }\n}\nEOF', output: '(Nginx 缓存配置)', explain: 'proxy_cache_valid 200 5m 表示 200 响应缓存 5 分钟。proxy_cache_key 定义缓存的 key 生成规则。适合不常变化的 GET API。注意：涉及用户数据的 API 不能用全局缓存（需要按用户 ID 做 key 或不用缓存）。' },
    ],
    diagnosis: [
      { symptom: '缓存更新后用户在页面看到旧数据', cause: '更新了数据库但没删除/更新对应的缓存（Cache-Aside 模式缺失 TTL 兜底以外的主动失效），或缓存删除和数据库更新不是原子操作', fix: '标准 Cache-Aside：更新数据库→删除缓存（不是更新缓存，避免并发写入顺序问题）。加 TTL 作为兜底（即使删除失败，TTL 过期后也自动一致）。如果需要强一致→考虑 read-through/write-through 模式或用分布式事务' },
      { symptom: '缓存命中率突然从 95% 降到 30%', cause: '缓存 key 设计变更或新增了缓存 key 维度导致旧缓存全部 miss，或批量缓存 key 同时过期', fix: '检查最近的代码部署是否修改了缓存 key 结构，灰度切换时新旧 key 共存（双写 or fallback 旧 key），设置随机的 TTL 分散过期时间' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个防止缓存击穿的方案（用 Redis SETNX）', hint: '只有一个线程能重建缓存', answer: 'def get_data(key): data=redis.get(key); if data: return data; lock=redis.setnx("lock:"+key,1,ex=10); if lock: data=db.query(...); redis.set(key,data,ex=300); redis.delete("lock:"+key); return data; else: sleep(0.1); return get_data(key) # 重试' },
      { level: '基础', task: '解释缓存穿透、缓存击穿、缓存雪崩的区别', hint: '穿透=不存在的数据，击穿=热点过期，雪崩=同时过期', answer: '穿透：黑客持续查询不存在的数据（如 id=-1），缓存永远不命中，请求直击数据库。解决：布隆过滤器或缓存空值。击穿：热点数据（如首页商品列表）缓存过期瞬间，大量并发请求打到数据库。解决：SETNX 互斥锁重建。雪崩：大量缓存在同一时间过期（如设置了相同的 TTL），数据库瞬间承受所有请求。解决：TTL 加随机值。' },
    ],
  },

  "y-xkHFE9YzhNIX3EiWspL": {
    mentalModel: '数据库索引就像书的"目录"——没有目录找内容要翻遍全书（全表扫描），有了目录翻到对应章节就行（索引查找）。但目录本身也占页数（索引占用空间和影响写入速度）。',
    sections: [
      { title: '索引核心知识', content: 'B+Tree 索引（最常用）：有序存储，支持等值查询和范围查询。Hash 索引：只能等值查询，但极快。联合索引的"最左前缀"原则：索引 (a, b, c) 可以优化查询 WHERE a=1 和 WHERE a=1 AND b=2，但不能优化 WHERE b=2 或 WHERE c=3。覆盖索引：查询需要的所有列都在索引中→不需要回表查主键索引（Using index 而非 Using index condition）。EXPLAIN 的关键字段：type（ALL 全表扫/ref 索引查找/const 主键查找）、rows（预估扫描行数）、Extra（Using filesort/Using temporary=需要排序/临时表）。' },
      { title: 'B+Tree 索引的内部结构——为什么范围查询也很快', content: 'B+Tree 所有数据存储在叶子节点，且叶子节点之间用双向链表连接。好处：1) 等值查询——从根节点逐层二分查找，最终到达叶子节点找到目标。深度 = log_branch(N)，如百万行数据 3-4 层（每层一次磁盘 IO）2) 范围查询（WHERE id BETWEEN 100 AND 200）——等值查到起始位置（100），然后顺着叶子节点的链表向右遍历，直到超过结束值（200）。因为叶子节点链表是有序的、相邻存储的，磁盘 IO 极少 3) 排序（ORDER BY）——如果 ORDER BY 的列有索引且查询从索引中取数据，天然有序，不需要额外排序。理解 B+Tree 就知道为什么"SELECT * FROM orders ORDER BY non_indexed_col LIMIT 10"会很慢——需要全表扫描然后堆排序，而不是索引遍历。' },
    ],
    handsOn: [
      { title: '用 EXPLAIN 分析索引使用情况', cmd: 'mysql -e "EXPLAIN SELECT * FROM users WHERE email = \'test@example.com\' AND status = \'active\' ORDER BY created_at DESC LIMIT 10"', output: 'id: 1\n  select_type: SIMPLE\n  table: users\n  type: ref\n  possible_keys: idx_email_status\n  key: idx_email_status\n  rows: 1\n  Extra: Using where; Using filesort', explain: 'key=idx_email_status 表示使用了索引。但 Extra=Using filesort 表示 ORDER BY 无法用索引排序（因为索引(email,status)不能优化 ORDER BY created_at DESC）。解决：加索引 (email, status, created_at) 让排序列也进索引。' },
    ],
    diagnosis: [
      { symptom: '查询变慢，EXPLAIN 显示 type=ALL，扫描数万行但是小表', cause: '表虽然是"小表"但在频繁查询下全表扫描叠加压力，或查询优化器由于统计信息不准选择了全表扫描', fix: '即使小表也有必要加索引——小表 × 高 QPS = 大量全表扫描。让优化器看到索引的价值（如果加了索引优化器仍选全表扫描→可能是统计信息过期或索引选择性问题）。强制使用索引进行测试：SELECT * FROM users FORCE INDEX(idx_xxx) WHERE ...' },
      { symptom: '加了联合索引，但查询只用到了索引的第一列', cause: '最左前缀原则——WHERE email=? AND status=? 可以用 (email, status)，但 WHERE status=? 不能。或者 WHERE email LIKE \'%@example.com\' 破坏了 email 的有序性导致索引部分失效', fix: '确认查询条件的顺序和索引列顺序一致。如果单独查 status 的场景很多，为 status 单独建索引。OR 条件：WHERE email=? OR status=? 大概率无法使用单一联合索引，分别建单列索引让优化器做索引合并（Index Merge）' },
    ],
    exercises: [
      { level: '进阶', task: '表 users(id PK, name, email, city, age)。为查询 SELECT name, email FROM users WHERE city="上海" AND age>25 ORDER BY age 设计最优索引', hint: '覆盖索引+最左前缀+排序', answer: 'CREATE INDEX idx_city_age_cover ON users(city, age) INCLUDE (name, email)。city 放最左（等值查询）、age 放第二个（范围查询+ORDER BY 可用索引顺序）、name 和 email 放在 INCLUDE 中避免回表。' },
      { level: '基础', task: '解释为什么 WHERE MONTH(created_at)=5 无法使用索引', hint: '函数调用', answer: '对列使用函数（MONTH()）后，MySQL 无法从索引树中直接定位——索引存储的是 created_at 的原始值，不是 MONTH(created_at) 的值。优化器认为需要逐行计算 MONTH 值再进行过滤，所以退化为全表扫描。改为 WHERE created_at >= "2026-05-01" AND created_at < "2026-06-01" 即可使用索引。' },
    ],
  },

  "qSAdfaGUfn8mtmDjHJi3z": {
    mentalModel: 'ACID 是数据库事务的"四项铁律"——原子性（要么全做要么全不做）、一致性（数据库从一个合法状态到另一个合法状态）、隔离性（并发事务互不干扰）、持久性（事务提交后数据不会丢）。',
    sections: [
      { title: 'ACID 详解', content: 'Atomicity：转账操作——扣 A 的 100 元和加 B 的 100 元必须同时成功或同时回滚。Isolation：两个同时进行的事务不会互相看到中间状态。隔离级别从低到高：读未提交（脏读）→ 读已提交（不可重复读）→ 可重复读（幻读）→ 串行化（性能最低）。PostgreSQL 和 MySQL InnoDB 默认可重复读。Durability：事务提交后即使数据库立刻崩溃，重启后数据也不能丢——通过 WAL（Write-Ahead Log）保证：先写日志再写数据。' },
      { title: 'MVCC 原理——读写不互斥的秘密', content: 'PostgreSQL 和 MySQL InnoDB 都使用 MVCC（Multi-Version Concurrency Control）实现高并发。原理：每次写入不直接修改原数据，而是创建新版本。每行数据有"创建事务 ID"和"删除事务 ID"两个隐藏字段。事务开始时获取一个"快照"（Snapshot）= 一个事务 ID，根据此 ID 决定哪些版本对当前事务可见。读操作：看到的是"创建时已提交 AND 未被删除或被本事务删除"的版本。写操作：创建新版本（INSERT=新行+创建ID、DELETE=标记删除ID、UPDATE=标记旧行删除ID+插入新行）。关键：读操作不加锁、不阻塞写操作。写操作只锁住被修改的行、不阻塞读操作。这就是为什么 PostgreSQL 和 InnoDB 的并发读写性能远优于老式的"读写锁"模型。代价：旧版本需要定期清理（VACUUM/Undo Log 清理）。' },
    ],
    handsOn: [
      { title: '在 PostgreSQL 中查看事务的 MVCC 行为', cmd: 'psql -c "BEGIN; SELECT xmin, xmax, * FROM users WHERE id=1; UPDATE users SET email=\'new@e.com\' WHERE id=1; SELECT xmin, xmax, * FROM users WHERE id=1; ROLLBACK;"', output: '(显示同一行在 UPDATE 前后的 xmin/xmax 变化)', explain: 'xmin 是创建该行版本的事务 ID，xmax 是删除该行版本的事务 ID（0 表示未删除）。UPDATE 后旧版本的 xmax 变为当前事务 ID，同时插入新版本（xmin=当前事务 ID）。ROLLBACK 后这些修改都会被撤销。' },
    ],
    diagnosis: [
      { symptom: 'PostgreSQL 磁盘占用持续增长，即使没有大量写入', cause: '死元组（Dead Tuples）积累——UPDATE/DELETE 产生的旧版本没被 VACUUM 清理回收', fix: '检查 autovacuum 是否正常运行（pg_stat_user_tables 的 last_autovacuum），如果频繁 UPDATE 的表 autovacuum 跟不上，手动 VACUUM ANALYZE 或调小 autovacuum_vacuum_scale_factor' },
      { symptom: '事务内读取到的数据和预期不符——两次读同一行结果不同', cause: '隔离级别设置问题——Read Committed 下每次读看到最新已提交数据（不可重复读），Repeatable Read 下整个事务看到同一个快照', fix: '确认你需要的隔离级别：如果业务逻辑要求"事务内看到的数据始终一致"→使用 Repeatable Read。如果是简单查询不要求一致性→Read Committed 性能更好' },
    ],
    exercises: [
      { level: '基础', task: '用一句话解释 ACID 的四个字母各代表什么', hint: 'A=原子, C=一致, I=隔离, D=持久', answer: 'A（Atomicity）=事务是不可分割的最小单元，要么全部成功要么全部回滚。C（Consistency）=事务前后数据都满足定义的约束。I（Isolation）=并发事务之间不互相干扰。D（Durability）=提交的数据即使系统崩溃也不丢失。' },
      { level: '进阶', task: '描述一个"不可重复读"的场景和 SQL 级别控制', hint: '事务 A 两次读之间，事务 B 修改并提交了', answer: '事务 A：BEGIN → SELECT balance FROM accounts WHERE id=1 → 返回 1000。事务 B：BEGIN → UPDATE accounts SET balance=900 WHERE id=1 → COMMIT。事务 A 再次：SELECT balance FROM accounts WHERE id=1 → 在 READ COMMITTED 下返回 900（不可重复读），在 REPEATABLE READ 下返回 1000（快照隔离）。不可重复读可能导致业务逻辑错误——如第一次读到余额 1000 决定可以扣款，第二次查询余额变成了 900，但此时已经通过了"余额充足"的检查。' },
    ],
  },

  "rq_y_OBMD9AH_4aoecvAi": {
    mentalModel: '事务是数据库的"安全网"——把一组操作捆在一起，要么全部安全落地，要么全部回弹（ROLLBACK）。没有事务就像走钢丝没安全网。BEGIN → 操作1, 操作2, ... → COMMIT 或 ROLLBACK。',
    sections: [
      { title: '事务的使用', content: 'BEGIN（或 START TRANSACTION）→ 执行一系列 SQL → COMMIT（确认）或 ROLLBACK（撤销）。常见场景：1) 转账：UPDATE A 余额扣 100；UPDATE B 余额加 100；两个操作必须同生共死 2) 创建订单+扣库存：INSERT INTO orders ...；UPDATE inventory SET count=count-1 WHERE ...。事务范围尽量小——长事务持有锁时间长，阻塞其他操作。分布式事务（跨多个数据库/服务）需要 2PC（两阶段提交）或 Saga 模式（补偿事务），复杂度远大于本地事务。' },
      { title: '事务的锁与死锁', content: '事务持有锁以保证隔离性：共享锁（读锁）——允许其他事务读但不能写。排他锁（写锁）——不允许其他事务读和写。锁的粒度：行锁（MySQL InnoDB/PostgreSQL）——只锁住受影响的行，并发最好。表锁（MyISAM）——锁住整张表，并发最差。死锁：事务 A 持有行 1 的锁等待行 2，事务 B 持有行 2 的锁等待行 1→ 形成循环等待。数据库自动检测死锁（死锁检测器）→ 选择代价较小的事务回滚（ROLLBACK）。预防死锁：1) 所有事务按相同顺序访问资源（如都先锁 id 小的行再锁 id 大的行）2) 缩小事务范围 3) 使用合适的索引减少锁的范围（无索引时 InnoDB 会锁更多行甚至表）。排查死锁：SHOW ENGINE INNODB STATUS 查看 LATEST DETECTED DEADLOCK 部分。' },
    ],
    handsOn: [
      { title: '模拟一个死锁', cmd: 'mysql -e "\n-- Session 1:\nBEGIN; UPDATE accounts SET balance=balance-100 WHERE id=1;\n-- Session 2 (另一个终端):\nBEGIN; UPDATE accounts SET balance=balance-100 WHERE id=2;\n-- Session 1: UPDATE accounts SET balance=balance+100 WHERE id=2; -- 被阻塞等待 Session 2\n-- Session 2: UPDATE accounts SET balance=balance+100 WHERE id=1; -- 死锁! 其中一个被回滚"', output: 'ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction', explain: '两个事务互相等待对方的锁，形成循环。MySQL 检测后自动回滚一个事务，另一个继续执行。收到死锁错误后，应用层应该重试整个事务。' },
    ],
    diagnosis: [
      { symptom: '事务频繁因死锁回滚', cause: '多个并发事务以不同顺序访问相同的行，或由于缺少索引导致 MySQL 加锁范围过大（锁了不相关的行）', fix: '统一事务中的操作顺序（如都按主键升序更新），检查 EXPLAIN 确保 UPDATE/DELETE 使用了索引（无索引的行锁升级为间隙锁甚至表锁），缩小事务范围' },
      { symptom: '长事务导致数据库性能下降', cause: '事务持有锁不放，阻塞其他事务的写入操作。或 MVCC 的旧版本不能被清理（VACUUM 只能清理比最老事务更早的版本）', fix: '监控长事务——MySQL: SHOW PROCESSLIST 或 information_schema.innodb_trx；PostgreSQL: SELECT * FROM pg_stat_activity WHERE state=\'idle in transaction\'。设置事务超时（max_execution_time/idle_in_transaction_session_timeout），应用层避免在事务内做非数据库操作（如调外部 API）' },
    ],
    exercises: [
      { level: '基础', task: '用 SQL 写一个转账事务', hint: 'BEGIN; UPDATE...; UPDATE...; COMMIT;', answer: 'BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1; UPDATE accounts SET balance = balance + 100 WHERE id = 2; COMMIT; 如果中间任一步失败，ROLLBACK 撤销所有修改。' },
      { level: '进阶', task: '设计一个分布式事务方案：订单服务和支付服务各自有数据库，创建订单+扣款必须原子', hint: 'Saga 模式——本地事务+补偿', answer: '使用 Saga 编排模式：1) 订单服务：BEGIN→INSERT INTO orders(status="pending")→COMMIT→发消息 OrderCreated 2) 支付服务监听到 OrderCreated→BEGIN→扣款→INSERT payment_record→COMMIT→发消息 PaymentCompleted 3) 订单服务监听到 PaymentCompleted→BEGIN→UPDATE orders SET status="paid"→COMMIT。如果支付失败：支付服务发 PaymentFailed→订单服务 BEGIN→UPDATE orders SET status="cancelled"→COMMIT（补偿事务）。如果支付扣款成功但订单更新失败（网络抖动）：支付服务监听到 OrderUpdateFailed→BEGIN→退款→INSERT refund_record→COMMIT（补偿事务）。关键：每个步骤都是本地事务，失败通过补偿事务回滚。最终一致性而非强一致。' },
    ],
  },

  "Z7jp_Juj5PffSxV7UZcBb": {
    mentalModel: 'ORM（对象关系映射）是"翻译官"——把数据库的行翻译成编程语言的对象，把方法调用翻译成 SQL。好的 ORM 让你少写 SQL，坏的 ORM 让你写出慢 100 倍的查询却不知道。',
    sections: [
      { title: 'ORM 的优势和陷阱', content: '优势：1) 防 SQL 注入（参数化查询自动处理）2) 迁移管理（版本化表结构变更）3) 类型安全 4) 减少样板 CRUD 代码。陷阱：1) N+1 问题（lazy loading 默认行为）2) 生成的 SQL 不可控（复杂查询不如手写 SQL）3) 性能黑盒（看似简单的 ORM 调用可能生成 5 表 JOIN）4) 学习曲线（学 ORM 的时间可能超过学 SQL 的时间）。原则：用 ORM 做 80% 的 CRUD，复杂查询手写 SQL。了解 ORM 生成的 SQL 长什么样（开启 SQL logging）。' },
      { title: 'ORM N+1 问题——深度解析与解决', content: 'N+1 问题：查主实体 1 次 SQL + 对每个主实体关联加载 N 次 SQL。场景：users = User.objects.all()——执行 1 次 SQL（SELECT * FROM users，返回 100 个 user）。for user in users: print(user.posts)——每个 user 触发 1 次 SQL（SELECT * FROM posts WHERE user_id=?），共 100 次。总计 101 次 SQL（= N+1）。解决方案随 ORM 不同：Django→prefetch_related("posts")、SQLAlchemy→joinedload(Users.posts)、ActiveRecord→includes(:posts)、GORM→Preload("Posts")。原理：用 2 次 SQL 替代 N+1 次——第 1 次查主实体（SELECT * FROM users），第 2 次查关联实体（SELECT * FROM posts WHERE user_id IN (1,2,3,...100)），然后在内存中匹配。重要：始终在开发环境开启 SQL logging 或用工具（如 django-debug-toolbar、rack-mini-profiler）主动发现 N+1。' },
    ],
    handsOn: [
      { title: '在 Django 中复现并修复 N+1', cmd: '# 复现:\npython manage.py shell -c "\nfrom myapp.models import User\nfor u in User.objects.all():\n    print(u.posts.count())  # N+1\n"\n# 修复:\npython manage.py shell -c "\nfrom myapp.models import User\nfrom django.db.models import Count\nfor u in User.objects.annotate(post_count=Count(\'posts\')):\n    print(u.post_count)  # 1 次 SQL\n"', output: '(第一次：看到 DB log 中大量查询; 第二次：1 条带 JOIN 的 SQL)', explain: 'annotate 用 SQL 的 GROUP BY + COUNT 在数据库层完成聚合，1 次查询替代 N+1 次。比 prefetch_related 更高效（聚合在数据库做，不需要传输所有 posts 数据到应用层）。' },
    ],
    diagnosis: [
      { symptom: '测试环境正常，生产环境数据库连接数爆满', cause: 'N+1 问题——测试环境数据少（10 个用户 → 11 次查询没问题），生产数据多（10000 个用户 → 10001 次查询把数据库连接池耗尽）', fix: '在开发/测试环境用足够量级的种子数据（至少千级别），开启 SQL logging 并监控查询次数。CI 中加 assertions 检查查询数量（如 Django 的 assertNumQueries）' },
      { symptom: 'ORM 的 save() 每个字段都 UPDATE 一遍，即使只改了一个字段', cause: 'ORM 的默认行为是更新所有字段（生成 SET col1=col1, col2=col2, ...），而非只更新脏字段', fix: '使用 only()/update_fields 只更新变更字段，或使用 ORM 的"脏跟踪"功能（如 SQLAlchemy 默认只更新变更的字段）。GORM 使用 Updates()（全字段）vs Update()（单字段）vs Select().Updates()（指定字段）' },
    ],
    exercises: [
      { level: '基础', task: '举一个 ORM N+1 的例子并说明如何解决', hint: 'User.objects.all() → 每个 user 自动查 posts', answer: '问题：users = User.objects.all(); for u in users: print(u.posts.count()) → 1 次查所有 user + N 次查每个 user 的 posts。解决：users = User.objects.prefetch_related("posts").all() → ORM 用 2 次查询（一次 users，一次 WHERE user_id IN (...) 的 posts），在内存中匹配。' },
      { level: '进阶', task: '编写 ORM 使用规范：列出 5 条团队必须遵守的规则 + 理由', hint: '从 N+1、SQL logging、手写 SQL 的场景出发', answer: '1) 必须开启 SQL logging（开发环境）——知道 ORM 生成的 SQL 才能发现 N+1 和慢查询 2) 列表查询必须考虑 N+1——使用 prefetch/eager loading，代码审查时重点关注循环内的 ORM 调用 3) 超过 2 表 JOIN 的查询手写 SQL/QueryBuilder——ORM 生成的可读性差且可能性能不如预期 4) 批量操作不用 ORM 的循环 save()——用 bulk_create/bulk_update 或原生 INSERT INTO ... VALUES (...), (...), (...) 5) 禁止在循环内执行 ORM 查询——要么用 prefetch 要么先批量查出存成 dict/map 在内存中查。违反任一条→Code Review 不通过。' },
    ],
  },

  "Ge2SnKBrQQrU-oGLz6TmT": {
    mentalModel: '数据库范式化就是"不要把鸡蛋放在多个篮子里把同一个数据存多份"——每份数据只存一处，通过外键关联。减少冗余、避免更新异常、保持数据一致。但过度范式化会让查询需要 JOIN 10 张表。',
    sections: [
      { title: '范式化的实践', content: '1NF：每列原子值（不把多个电话号码塞一个字段里用逗号分隔）。2NF：非主键列完全依赖主键（不部分依赖）。3NF：非主键列不依赖其他非主键列（不传递依赖）。实践建议：一般做到 3NF 就够了。但有时"反范式化"是合理的——为了查询性能故意冗余存储（如订单表里存一个冗余的 user_name，避免每次查订单都要 JOIN users）。数据仓库（OLAP）通常反范式化很重，用空间换查询速度。' },
      { title: '什么时候故意反范式化', content: '反范式化 = 有意引入冗余数据来换取查询性能。判断标准：1) 读远大于写——如果一个字段很少被修改但频繁被读取（如订单创建后 user_name 不会变，但查询订单列表每次都 JOIN users），冗余存储 user_name 节省 JOIN 是合理的 2) JOIN 代价太高——多表 JOIN 在分库分表环境中可能跨库无法执行，或 JOIN 后数据量爆炸 3) 历史快照需要——订单上的收货地址应该是"下单时那一刻的地址"而非用户当前的地址（即使后来改了地址也不影响历史订单）。这其实不是反范式化，而是"不可变历史快照"。但很多系统做不到这点，直接在订单表冗余存地址字段。反范式化的代价：需要保证冗余数据的一致性——用户改名后需要同步更新所有冗余字段。方案：最终一致性（异步更新）或只在"不可变"的场景使用冗余。' },
    ],
    handsOn: [
      { title: '检查表是否满足 2NF/3NF', cmd: '# 检查是否有列只依赖部分主键（违反 2NF）:\n# order_items(order_id PK, product_id PK, product_name)\n# product_name 只依赖 product_id（PK 的一部分）→ 违反 2NF\n# 修正：拆出 products 表\n\n# 检查是否有传递依赖（违反 3NF）:\n# orders(order_id PK, user_id, user_name, user_email)\n# user_name 和 user_email 依赖 user_id 而非 order_id → 违反 3NF\n# 修正：拆出 users 表', output: '(分析表结构)', explain: '判断依赖关系的口诀：给出主键值，能确定这个字段的值吗？不能→违反范式。order_id=1 不能确定 product_name 是什么→违反 2NF。user_name 由 user_id 决定而非 order_id 决定→违反 3NF。' },
    ],
    diagnosis: [
      { symptom: '更新用户信息后，部分订单上显示的仍是旧用户名', cause: '订单表冗余存储了 user_name，用户改名后冗余字段没有同步更新', fix: '如果订单需要显示"当前用户名"→不要冗余，每次 JOIN users 查。如果订单需要"下单时的用户名"（历史快照）→冗余是正确的，且不应在用户改名后更新。关键是明确"冗余是当前值还是历史快照"' },
      { symptom: '查询性能很差，需要 JOIN 6 张表才能得到业务需要的完整信息', cause: '过度范式化——为了消除一切冗余把数据拆得太细', fix: '评估是否值得为了查询性能做反范式化冗余。建一张宽表（如 order_detail_view）专门用于查询，由原始范式的表通过触发器/定时任务/物化视图同步。OLTP（在线交易）用范式化保证一致性，OLAP（分析查询）用反范式化提升性能' },
    ],
    exercises: [
      { level: '基础', task: '设计一个违反 2NF 的表，说明问题', hint: '复合主键，部分列只依赖主键的一部分', answer: 'order_items(order_id, product_id, product_name, quantity)。主键是 (order_id, product_id)，但 product_name 只依赖 product_id（不依赖完整的复合主键）。应拆成 products(product_id, name) + order_items(order_id, product_id, quantity)。' },
      { level: '进阶', task: '为一个博客系统设计数据库：用户、文章、分类、标签、评论。要求满足 3NF 但适度反范式化以优化"文章列表页"和"文章详情页"的查询', hint: '列表页不需要作者全部信息，详情页需要评论数', answer: '范式设计：users(id, username, avatar)、categories(id, name)、articles(id PK, title, body, user_id FK→users, category_id FK→categories, created_at)、article_tags(article_id, tag_id)、tags(id, name)、comments(id, body, article_id FK, user_id FK, created_at)。反范式化优化：articles 表加 comment_count 字段（每次评论插入/删除时更新）——避免列表页每篇文章都 COUNT(comments)。文章列表页查询：SELECT a.title, a.created_at, u.username, a.comment_count FROM articles a JOIN users u ON a.user_id=u.id ORDER BY a.created_at DESC——只需 1 个 JOIN。文章详情页查询同理只需 JOIN users 拿作者信息 + JOIN comments 拿评论列表。' },
    ],
  },

  "95d9itpUZ4s9roZN8kG9x": {
    mentalModel: '数据库扩展就像从小卖部到连锁超市——单店（单库）→ 开分店分流客户（读写分离）→ 划分专区各自负责一部分（分片）。每个阶段解决不同量级的问题。',
    sections: [
      { title: '扩展路线图', content: '阶段 1（0-10 万用户）：单实例优化——加索引、优化慢查询、调参。阶段 2（10-100 万）：读写分离——主库写、从库读（一主多从），Redis 缓存。阶段 3（100 万+）：分片（水平拆分）——按 user_id 哈希分到不同库，每个分片结构相同但数据不同。分区（垂直拆分）——把大表按时间或其他维度物理分离。CQRS（读写分离到极致）——写模型和读模型用不同的数据库结构。' },
      { title: '数据库分片（Sharding）——架构与挑战', content: '水平分片：将一张大表的数据按分片键（Sharding Key）分散到多个物理库中。分片策略：1) 哈希分片——hash(user_id) % shard_count → 数据均匀分布，但跨分片查询困难（如"按 order_date 查询所有订单"需要扫所有分片）2) 范围分片——user_id 1-10M → shard0, 10M-20M → shard1 → 数据倾斜风险（新用户可能集中在最新分片）3) 目录分片——维护一个映射表（user_id→分片位置），灵活但多一次查询。分片的代价：1) 跨分片 JOIN 不可用——需要应用层聚合或反范式化 2) 跨分片事务——本地事务失效，需要分布式事务或 Saga 3) 唯一 ID 生成——自增主键冲突→改用 Snowflake/Twitter ID 等全局唯一 ID 4) 扩容——增加分片后需要数据迁移（一致性哈希减少迁移量）。原则：分片是最后手段——在读写分离+缓存+优化都用尽之前不要分片。分片后的系统复杂度翻倍。' },
    ],
    handsOn: [
      { title: '用一致性哈希计算数据分片', cmd: 'python3 -c "\nimport hashlib\ndef shard(key, total):\n    h = int(hashlib.md5(key.encode()).hexdigest(), 16)\n    return h % total\nprint(shard(\'user_1234\', 4))  # -> 0-3 之间的值\nprint(shard(\'order_5678\', 4))"', output: '2\n0', explain: '简单哈希取模。user_1234 始终落在分片 2。问题：当 total 从 4 变成 5 时，几乎所有 key 映射结果都变→需要全量数据迁移。一致性哈希通过"哈希环+虚拟节点"减少迁移量到 ~1/N（新增分片时只迁移 1/N 的数据）。' },
    ],
    diagnosis: [
      { symptom: '分片后某个分片负载远高于其他分片', cause: '数据倾斜——分片键选择不当导致数据分布不均（如按日期分片，最新分片承载了 90% 的查询流量）', fix: '选择高基数、分布均匀的分片键（如 user_id 而非 region），如果热点集中在某些 key（如大 V 的用户 ID），采用"热点分片专用处理"策略——单独分配资源给热点分片或对热点 key 做拆解' },
      { symptom: '从库延迟过大——主库写入后在从库查不到新数据', cause: '主库写入量大、从库复制单线程（MySQL 5.6 前）处理不过来，或从库硬件不如主库', fix: 'MySQL 5.7+ 启用并行复制（slave_parallel_workers > 1），升级从库硬件到和主库同等，确保网络低延迟，使用半同步复制减少延迟。对一致性要求高的查询走主库（SELECT ... FOR UPDATE 或读写路由中标记"此查询需要最新数据"）' },
    ],
    exercises: [
      { level: '基础', task: '说明"读写分离"如何工作以及需要注意什么', hint: '写主库、读从库、复制延迟', answer: '所有写操作（INSERT/UPDATE/DELETE）发到主库，读操作（SELECT）发到从库。主库通过 binlog/WAL 复制数据到从库。注意：复制有延迟（通常 <1s），刚写入的数据立即从从库读可能读不到（主从延迟）。对一致性要求高的操作（如"下单后立即显示订单"）需要读主库。' },
      { level: '进阶', task: '设计一个支持分片的 SaaS 平台数据库架构：每个租户（Tenant）数据隔离，支持租户间共享数据，单租户数据量可能超过单库容量', hint: '按 tenant_id 分片 + 共享表在独立库', answer: '分片策略：按 tenant_id 哈希分片到 8 个库（初期），每个库包含该租户的所有表（tenant_users, tenant_orders, ...）。单租户超大→该租户独占一个分片。共享数据（如全局配置、平台公告）存在独立的不分片的 shared DB。跨租户查询（如"平台总订单数"）→由 CDC 同步各分片的聚合数据到 ClickHouse 做分析查询，而非实时跨分片查询。路由层：应用在 middleware 层根据 tenant_id 决定连接到哪个分片。迁移：当租户从分片 A 移到专属分片 → 脚泵导出再导入 + 更新路由映射表。' },
    ],
  },

  "STQQbPa7PE3gbjMdL6P-t": {
    mentalModel: '测试就像给代码买"保险"——平时觉得浪费钱，出了事才知道价值。写了测试不保证没 Bug，但不写测试保证你不敢放心重构。单元测试（检查零件）→ 集成测试（检查组装）→ E2E 测试（检查整车）。',
    sections: [
      { title: '后端测试金字塔', content: '底层：单元测试（最多最便宜）——测单个函数/方法，mock 外部依赖。中层：集成测试——测多个模块协作，需要真实数据库。顶层：E2E 测试（最少最贵）——模拟真实用户操作整个系统。原则：1) 测试应该快（单元测试秒级、集成测试分钟级）2) 测试应该独立（不依赖执行顺序）3) 测试应该可重复（相同输入总是相同结果）4) 测试边界和异常，不光是 happy path。测试覆盖率 100% 是陷阱——追求有意义的覆盖率而非数字。' },
      { title: '测试数据库——真实还是 Mock', content: '争议：集成测试用真实数据库还是 Mock？Mock 派：用 SQLite/H2（内存数据库）代替 PostgreSQL/MySQL——快、不需要外部依赖、CI 友好。缺点：SQL 方言差异（某些 PG 的 SQL 在 SQLite 报错）、缺少某些特性（如 JSONB）。真实派：用 Testcontainers 启动真实的 PostgreSQL Docker 容器——100% 兼容、接近生产、但有启动延迟（3-10s）。折中方案：1) 单元测试（逻辑类）→ 用 Mock 2) Repository/DAO 层测试 → 用 Testcontainers + 真实 DB，确保 SQL 语法和数据库特定行为正确 3) CI 中跑真实 DB 集成测试（可能慢但必要）。重点：测试环境数据库版本和生产一致——生产 PG 16，测试 SQLite = 不叫集成测试。Testcontainers 现在支持 Go/Java/Python/Node.js 等主流语言。' },
    ],
    handsOn: [
      { title: '用 Testcontainers 在 Go 测试中启动 PostgreSQL', cmd: 'cat > /tmp/db_test.go << \'EOF\'\nfunc TestWithRealDB(t *testing.T) {\n  ctx := context.Background()\n  req := testcontainers.ContainerRequest{\n    Image: "postgres:16-alpine",\n    Env: map[string]string{"POSTGRES_PASSWORD":"test"},\n  }\n  pg, _ := testcontainers.GenericContainer(ctx, req)\n  defer pg.Terminate(ctx)\n  // 获取动态分配的端口,连接数据库,跑 migration,执行测试\n}\nEOF', output: '(运行 go test → 自动启动 PG 容器 → 跑测试 → 清理)', explain: 'Testcontainers 自动管理容器生命周期——测试开始启动、测试结束销毁。不需要手动 docker run。数据库端口动态分配避免端口冲突。' },
    ],
    diagnosis: [
      { symptom: '测试在本地通过但在 CI 中失败', cause: '测试依赖了本地环境的某些条件——如特定的时间（非 UTC）、特定的文件路径、或本地已安装的某些工具', fix: '检查 CI 和本地的差异——时区设置（用 UTC）、随机种子（固定 seed）、依赖的外部服务（用 Testcontainers/Docker 统一）' },
      { symptom: '单元测试运行很慢（>3 分钟）', cause: '把集成测试当单元测试写——每个 test case 都启动数据库/Redis/消息队列', fix: '区分单元测试和集成测试的 build tag 或文件名（如 *_test.go vs *_integration_test.go），单元测试只测纯逻辑函数+Mock 外部依赖，CI 中单元测试和集成测试分阶段跑——先快速单元测试反馈（30s 内），再慢速集成测试（5min 内）' },
    ],
    exercises: [
      { level: '基础', task: '为订单总价计算函数写测试用例，覆盖正常、边界、异常', hint: '测试：正常计算/0件商品/负数/大数字', answer: 'test_calc_total_normal：2 件 × $10 - $1 折扣 = $19。test_calc_total_zero_qty：0 件商品返回 0 或抛异常。test_calc_total_negative_price：负数价格抛异常。test_calc_total_large_overflow：1000000 × 999999 检查溢出。' },
      { level: '进阶', task: '为一个 REST API 端点写完整的测试策略：创建订单 POST /orders', hint: '单元测试(handler/service/repository) + 集成测试(HTTP 请求到真实 DB)', answer: '单元测试：1) Handler 层——Mock service 层，测试请求参数校验（缺少字段→400、错误类型→400、成功→201）2) Service 层——Mock repository 层，测试业务逻辑（库存不足→返回错误、正常→返回 order 对象）3) Repository 层——用 Testcontainers 真实 DB，测试 SQL 正确性。集成测试：启动完整 app（真实 DB + 真实 HTTP server）→ POST /orders 发送 JSON → 验证响应 status=201 + body 包含 order_id → GET /orders/{id} 验证数据已持久化 → DELETE test data 清理。E2E 测试（可选）：用 Playwright/Cypress 模拟用户在 UI 填写商品→点击下单→验证订单出现在订单列表。' },
    ],
  },

  "mGfD7HfuP184lFkXZzGjG": {
    mentalModel: 'CI/CD 是软件生产的"自动化流水线"——代码提交→自动测试→自动构建→自动部署。全程没有人工操作。CI 保证质量，CD 保证速度。两者结合 = "持续交付价值给用户"。',
    sections: [
      { title: 'CI/CD 工作流程', content: 'CI（持续集成）：每次 push 代码→触发自动 pipeline → 1) 拉取代码 2) 安装依赖 3) 跑 lint/类型检查 4) 跑单元测试+集成测试 5) 构建产物。CD（持续交付/部署）：CI 通过后 → 自动部署到 staging 环境（可选人工确认）→ 自动部署到 production。工具：GitHub Actions（主流）/GitLab CI/Jenkins/CircleCI。核心原则：1) Pipeline 时间 < 10 分钟（超过则需优化）2) 主分支永远是可部署状态 3) 部署是"平凡的事"而非"大事"。' },
      { title: 'CI/CD Pipeline 优化——从 20 分钟到 3 分钟', content: '慢 Pipeline 的常见原因和优化：1) 依赖安装慢——缓存 node_modules/vendor（CI 工具的 cache action），使用 lock 文件避免重复解析依赖树 2) 每次从头构建 Docker 镜像——利用 Docker layer cache（CI 中 pull 上次构建的镜像 --cache-from），分层优化 Dockerfile 3) 串行执行——测试可以按 package/module 分片并行跑（如 Jest shard、Go test -p 并行包测试、pytest-xdist）4) 每次都跑全部测试——区分"影响范围"（changed files → 只跑相关模块的测试），全量测试在主分支合并后跑 5) 数据库 migration 慢——确保 migration 脚本做了优化（索引创建用 CONCURRENTLY），不在 CI 中做数据迁移（那是部署后的事）。目标：开发者 push 代码后 3 分钟内得到 CI 反馈（通过/失败）。超过 10 分钟开发者开始分心做其他事。' },
    ],
    handsOn: [
      { title: '一个完整的 GitHub Actions CI 配置', cmd: 'cat > /tmp/ci.yml << \'EOF\'\nname: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16-alpine\n        env:\n          POSTGRES_PASSWORD: test\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-go@v5\n        with: { go-version: \'1.22\' }\n      - run: go test ./... -race -coverprofile=coverage.out\n      - run: go build -o /dev/null ./...\nEOF', output: '(CI 配置)', explain: 'services 定义 CI 中需要的外部服务（PG/Redis/ES 等），GitHub Actions 自动启动和清理。health-cmd 确保服务就绪后再跑测试。-race 启用 Go 的竞态检测器。' },
    ],
    diagnosis: [
      { symptom: 'CI Pipeline 偶尔随机失败（flaky test）', cause: '测试有竞态条件（依赖了未保证的顺序）、超时时间太短（外部服务偶尔慢）、或测试间共享了可变状态', fix: '标记 flaky test（@Flaky 注解或 skip in CI），单独跑 100 次 loca 复现，修复根本原因。常见修复：加显式等待而非 sleep(0.5)、测试间隔离（每个测试重置 DB 到已知状态）、mock 不稳定的外部依赖' },
      { symptom: 'Deploy 步骤经常卡住或超时', cause: '部署过程依赖了外部资源（如 npm install 在部署时做而非构建时）或 SSH 连接不稳定', fix: '构建和部署严格分离——构建阶段产出不可变的 artifact（Docker 镜像/二进制/静态文件），部署阶段只是"把这个 artifact 放到目标环境并启动"。构建阶段的产物在 CI artifact registry 中（镜像 registry 或文件存储），部署不重新 build' },
    ],
    exercises: [
      { level: '基础', task: '解释 CI 和 CD 分别是什么', hint: 'Continuous Integration / Continuous Delivery', answer: 'CI（持续集成）：频繁地将代码合并到主分支，每次合并自动构建和测试，快速发现集成问题。CD（持续交付/部署）：CI 通过后，自动将代码部署到各环境，实现一键或零人工介入的上线。' },
      { level: '进阶', task: '设计一个从 push 到 production 的完整 Pipeline，包含质量门禁（Quality Gates）', hint: 'PR → CI → Staging → Canary → Production', answer: '1) 开发者 push 到 feature 分支→ CI 自动跑 lint + 单元测试 (3 分钟内) 2) 创建 PR → 自动跑全量集成测试 + 安全扫描 + 构建镜像 3) PR 合并到 main → 自动部署到 staging → 跑 smoke test（关键 API 是否正常）→ 跑 E2E test 4) 质量门禁通过 → 自动 Canary 部署（10% 生产流量）→ 观察指标 30 分钟（错误率/延迟）→ 指标正常 → 自动全量生产部署 → 指标异常 → 自动回滚。人工确认点：Production 部署前可设置 manual approval（但团队成熟后可全自动）。回滚：一条命令（或 Git revert + CI 自动重新部署）回到上一个镜像版本。' },
    ],
  },

  "Q0fKphqmPwjTD0dhqiP6K": {
    mentalModel: '埋点（Instrumentation）就是在代码里"装传感器"——在关键路径上插入遥测代码，采集执行时间、是否出错、调用参数等数据。就像在赛车引擎上装传感器监控转速/温度/油压。',
    sections: [
      { title: '埋点实践', content: '需要埋的关键点：1) HTTP 入口（middleware 层自动记录每个请求的耗时+状态码）2) 数据库查询（ORM/driver 层自动记录 SQL 和耗时）3) 外部 API 调用（记录调用方、耗时、是否失败）4) 关键业务操作（"用户下单"、"支付成功"）。不要过度埋点——每个埋点都有性能开销（虽然极小），大量无意义数据增加存储成本。用 OpenTelemetry SDK 做标准化埋点。' },
      { title: '好的埋点数据 vs 垃圾埋点数据', content: '好的埋点：1) 可聚合——记录具体的数值（duration_ms=245）而非描述（"很慢"）2) 有维度——带 tag（operation="create_order", status="success", payment_method="credit_card"），方便按维度过滤和分组 3) 有上下文——关联 trace_id/span_id，能从链路追踪跳转到这条记录 4) 高信号——只记录关键操作（创建订单），而非每个细碎步骤（解析JSON、校验参数——除非它们经常是瓶颈）。垃圾埋点：1) 记录"userId=123 did something"（不可聚合、无法告警）2) 所有日志都带 error 级别（告警疲劳）3) 记录整个 request body（包含敏感信息+存储爆炸）4) 无采样策略的 100% 埋点（存储成本 > 埋点价值）。原则：埋点前先问"这个数据会触发什么 actionable 的行动？"——如果不管这个数据显示什么都一样，那不值得埋。' },
    ],
    handsOn: [
      { title: '在 HTTP middleware 中自动埋点（Go 示例）', cmd: 'cat > /tmp/middleware.go << \'EOF\'\nfunc InstrumentationMiddleware(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    start := time.Now()\n    wrapped := &responseWriter{ResponseWriter: w, statusCode: 200}\n    next.ServeHTTP(wrapped, r)\n    duration := time.Since(start).Milliseconds()\n    log.Printf("method=%s path=%s status=%d duration=%dms", r.Method, r.URL.Path, wrapped.statusCode, duration)\n    // 同步写入 metrics (Prometheus histogram):\n    httpRequestDuration.WithLabelValues(r.Method, r.URL.Path, strconv.Itoa(wrapped.statusCode)).Observe(float64(duration))\n  })\n}\nEOF', output: '(middleware 代码)', explain: 'middleware 层埋点一次覆盖所有 HTTP 端点——不需要在每个 handler 里单独埋。记录 method/path/status/duration 四个维度。Prometheus histogram 自动计算 P50/P90/P99。' },
    ],
    diagnosis: [
      { symptom: '埋点数据存储量太大，每个月账单超标', cause: 'Metrics label 基数太高（如把 user_id 作为 label）、日志量无采样、trace 100% 采样', fix: 'Metrics——检查高基数 label（每个唯一 label 组合 = 一个 time series），移除 user_id/request_id 等 label。Trace——降低采样率到 1-10%，全采样错误 trace。日志——区分"调试日志"（不采）和"关键日志"（采），生产环境日志级别设为 INFO 以上' },
      { symptom: '埋点对应用性能产生了可测量的影响', cause: '埋点代码本身有性能开销——如每个请求序列化大对象、同步写日志阻塞请求处理', fix: '异步写日志（log buffer + 后台 flush），metrics 用批处理（不每次 emit），采样（如 1% 请求做详细埋点、99% 只记录黄金指标）。如果 pprof 显示埋点代码占 >1% CPU→需要优化' },
    ],
    exercises: [
      { level: '基础', task: '说出后端应用中至少 4 个应该埋点的位置', hint: 'HTTP/数据库/外部调用/业务', answer: '1) HTTP 中间件（请求路径/方法/耗时/状态码）2) 数据库查询（SQL/耗时/是否慢查询）3) 外部 API 调用（服务名/方法/耗时/是否超时）4) 关键业务操作（订单创建/支付/登录等）。' },
      { level: '进阶', task: '设计埋点规范文档：定义你的团队中每个服务必须埋的指标、建议埋的指标、禁止埋的内容', hint: 'RED 方法（Rate/Errors/Duration）+ 业务指标', answer: '必须（RED 指标）：每个 HTTP/gRPC 端点→请求速率(rate)、错误率(errors)、延迟分布(duration, P50/P90/P99)。数据库查询→调用频率、错误率、延迟。外部依赖调用→同左。建议：关键业务指标→订单创建量、支付成功率、用户注册量。禁止：PII（个人身份信息）作为 metrics/trace 标签（密码/邮箱/手机号）、全量 request body 的日志、user_id 作为 metrics label（放 trace/log 中即可）。埋点位置：must in middleware/framework interceptor（所有请求自动覆盖）、should in repository 层（数据库调用自动覆盖）、optional in service 层（特定业务逻辑需手动埋）。' },
    ],
  },

  // ============================================================
  // 151-160: 可靠性、弹性、高级模式
  // ============================================================
  "GwApfL4Yx-b5Y8dB9Vy__": {
    mentalModel: '分布式系统的故障是"常态"而非"意外"——网络会断、服务器会挂、磁盘会坏、GC 会暂停。不是"会不会出问题"，而是"什么时候出问题"。面向故障设计 = "出问题时有预案"。',
    sections: [
      { title: '常见故障模式', content: '1) 网络分区：A 服务和 B 服务之间网络断了，但各自都正常运行（CAP 中的 P）2) 级联故障：服务 A 挂了→调用 A 的服务 B 也超时→B 的连接池耗尽→调用 B 的 C 也挂了→雪崩 3) 慢故障：服务没挂但响应极慢（比直接挂更危险——拖垮上游的线程/连接池）4) 部分故障：一个请求成功但下个请求失败（负载不均衡、某台机器有问题）。应对：超时+重试+熔断+降级+隔离。' },
      { title: '超时、重试、幂等——分布式容错三件套', content: '超时：永远不要"无限制等待"——每个服务间调用都设超时（如 5s）。超时时间 = P99 延迟 × 1.5-2（太大浪费资源，太小误杀正常请求）。层级超时：用户请求总超时 30s → 内部拆成多个微服务调用，每个调用超时（如 3s/5s/10s），确保总超时 < 用户超时。重试：超时后自动重试（最多 3 次），但必须保证操作幂等。重试可能造成"请求方认为失败但服务端实际成功了"——支付扣款这种必须幂等（用 idempotency key）。幂等：同一个操作执行多次结果相同。实现：1) 数据库唯一约束（订单号 UNIQUE——第二次 INSERT 报错但不生成重复订单）2) 客户端生成 idempotency key（UUID），服务端先查是否已处理（Redis/DB），已处理直接返回之前的结果 3) Token 机制（用户提交表单前先 Get token，提交时带 token，token 用过即废）。' },
    ],
    handsOn: [
      { title: '用 wrk 测试超时后的级联故障', cmd: '# 服务 A 调用服务 B（B 故意 sleep 10 秒），A 的超时设 1 秒\n# 用 wrk 以 100 并发打 A → 观察 A 的连接池是否耗尽 → 是否影响 A 的其他正常请求\n# 加超时+熔断后 → A 快速失败 → 正常请求不受影响', output: '(观察级联故障和修复后的对比)', explain: '这是混沌工程的简化版——故意制造慢下游，观察上游是否被拖垮。超时是防止级联故障的第一道防线。容器场景可以用 toxiproxy 模拟网络延迟和故障。' },
    ],
    diagnosis: [
      { symptom: '生产环境偶尔全部服务同时超时，几分钟后自动恢复', cause: 'GC 暂停（JVM/Go GC 的 Stop-The-World）——GC 期间所有请求被暂停，超过上游超时时间导致大量超时', fix: '分析 GC 日志（XX:+PrintGCDetails），调整 GC 算法（G1GC/ZGC/Shenandoah 减少暂停时间），Go 控制内存分配速度避免 GC 峰值。设置合理的超时时间 > GC 暂停时间（如 5s 超时 > 2s GC 暂停）' },
      { symptom: '重试导致下游压力翻倍，雪崩加剧', cause: '所有失败请求同时重试——"重试风暴"导致下游在已高负载状态下收到双倍请求', fix: '重试策略必须包含：退避（backoff——间隔递增：100ms → 200ms → 500ms）、抖动（jitter——随机 ±25% 避免同时重试）、限制（max retries=3）。熔断器：连续失败 N 次→熔断（直接快速失败，不发起重试也不增加下游压力）' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个防止级联故障的方案', hint: '熔断+超时+限流+舱壁隔离', answer: '1) 设置合理的超时时间（不要让一个慢请求无限等待）2) 熔断器：连续失败 N 次后直接快速失败，不继续调用下游（给下游恢复时间）3) 每个服务设置独立的线程/连接池（舱壁隔离——一个服务出问题不耗尽全局资源）4) 降级：核心链路保留，非核心（如推荐、日志）降级处理。' },
      { level: '基础', task: '解释为什么"下游慢"比"下游挂了"更危险', hint: '挂了快速返回错误，慢是拖着连接等待', answer: '下游挂了→连接立刻报错→快速释放资源→影响可控。下游慢→每个请求被挂起 10 秒 → 线程/连接池被占满 → 新请求无法处理 → 上游自己的健康检查也超时 → 负载均衡器移除上游 → 整个链路崩溃。慢故障是分布式系统的头号杀手——它把"一个服务的局部问题"转化为"全局不可用"。' },
    ],
  },

  "spkiQTPvXY4qrhhVUkoPV": {
    mentalModel: '熔断器（Circuit Breaker）就像家里的"保险丝"——电流过大时自动跳闸断开，保护整个电路不被烧毁。等一段冷却时间后尝试复位，如果还短路继续断开。',
    sections: [
      { title: '熔断器状态机', content: '三种状态：Closed（关闭=正常）：所有请求正常通过。连续失败达到阈值→Open（断开=熔断）：所有请求直接快速失败，不调用下游。等待一段时间→Half-Open（半开=试探）：允许少量请求通过探测下游是否恢复。成功→转回 Closed；失败→重回 Open。关键参数：失败阈值、熔断时间、半开试探请求数。工具：Hystrix（Java）、resilience4j（Java）、Polly（.NET）、go-kit/circuitbreaker。' },
      { title: '生产环境的熔断器调优', content: '熔断器参数不当可能导致"假熔断"或"熔断不及时"。调优指南：1) 失败阈值——滑动窗口内（如过去 60s）失败率 > 50% 触发热断路（而非"连续失败 N 次"——防止偶发抖动触发熔断）2) 慢调用也算失败——如果 P99 > 预设阈值（如 2s），即使 HTTP 200 也算失败。防止"慢故障"拖死系统 3) 熔断时间——初始 30s → 半开试探成功 → 指数退避减少熔断时间；半开失败 → 延长熔断时间（如 60s→120s），防止反复试探 4) 分组熔断——不要"一个下游的所有接口共用一个熔断器"——/users 和 /orders 的失败率可能完全不同。至少按 API path 或下游服务名分组 5) 监控——记录每次熔断器状态变化的时间、原因、恢复时间。这些数据用于事后分析和告警。' },
    ],
    handsOn: [
      { title: '用 resilience4j 在 Spring Boot 中配置熔断器', cmd: 'cat > /tmp/application.yml << \'EOF\'\nresilience4j.circuitbreaker:\n  instances:\n    paymentService:\n      slidingWindowType: COUNT_BASED\n      slidingWindowSize: 10\n      failureRateThreshold: 50\n      waitDurationInOpenState: 30s\n      permittedNumberOfCallsInHalfOpenState: 3\nEOF', output: '(熔断器配置)', explain: 'slidingWindowSize=10 表示基于最近 10 次调用的窗口。failureRateThreshold=50 表示 50% 失败率触发熔断。waitDurationInOpenState=30s 表示熔断 30 秒后进入半开状态。' },
    ],
    diagnosis: [
      { symptom: '熔断器频繁在 Closed 和 Open 之间切换（flapping）', cause: '下游处于"半死不活"状态——部分请求成功部分失败，熔断器开→半开→成功→关→再失败→再开，状态抖动', fix: '增大滑动窗口（如 60s 而非 10 次），降低失败率阈值（如 30%），防止一个半开试探成功就完全关闭。考虑"半开渐进式恢复"——10% → 30% → 50% → 100% 逐步恢复流量' },
      { symptom: '熔断后下游已恢复但熔断器仍是 Open', cause: '熔断时间设置太长（如 5 分钟），或半开试探请求数量不够无法确认恢复', fix: '缩短熔断时间（如 30s-60s），半开状态时用更主动的探测方式（而非等真实用户请求），暴露健康检查接口人工触发恢复' },
    ],
    exercises: [
      { level: '进阶', task: '描述熔断器三种状态之间的转换条件', hint: 'Closed→Open 需要什么，Open→HalfOpen 等多久，HalfOpen→Closed 如何判断', answer: 'Closed→Open：连续失败次数 >= 阈值（如 5 次）。Open→Half-Open：等待时间 >= 设定值（如 30 秒）。Half-Open→Closed：试探请求成功率达标（如 3 次全成功）。Half-Open→Open：试探请求失败（立刻重新熔断）。' },
      { level: '基础', task: '实现一个简化版熔断器（伪代码）：3 次连续失败 → 熔断 10 秒 → 1 次试探 → 恢复或继续熔断', hint: '状态机 + 时间判断', answer: 'class CircuitBreaker:\n  state = CLOSED; failures = 0; last_open_time = null\n  def call(func):\n    if state == OPEN:\n      if now() - last_open_time > 10s:\n        state = HALF_OPEN\n      else:\n        return Error("circuit open")\n    try:\n      result = func()\n      if state == HALF_OPEN:\n        state = CLOSED; failures = 0\n      return result\n    except:\n      failures += 1\n      if failures >= 3 or state == HALF_OPEN:\n        state = OPEN; last_open_time = now()\n      raise' },
    ],
  },

  "qAu-Y4KI2Z_y-EqiG86cR": {
    mentalModel: '限流/节流就是"餐厅门口放号"——餐厅一次只能服务 50 桌客人，超过的排队取号等位。不给号吃饭？要么你恶意占座（攻击），要么今天确实人多（流量高峰）。',
    sections: [
      { title: '限流算法', content: '1) 令牌桶：固定速率往桶里放令牌，请求来拿走令牌才被处理，桶空了就限流。允许短时突发（桶里有积攒的令牌）。2) 漏桶：请求进桶，固定速率漏出处理。不允突发但速率绝对平稳。3) 固定窗口计数器：每分钟最多 100 次。边界问题：00:59 和 01:00 各发 100 次，实际 2 秒内发了 200 次。4) 滑动窗口：解决固定窗口边界问题，更精确。实战：一般用 Redis + Lua 脚本实现分布式限流，或直接用 Nginx/API Gateway 内置的限流。' },
      { title: '分布式限流的实现——Redis 令牌桶', content: '单机限流简单（内存计数器），分布式限流需要共享状态（如 Redis）。令牌桶的 Redis Lua 实现思路：1) 存储：key=rate_limit:{user_id}, value={tokens: 当前令牌数, last_time: 上次填充时间} 2) 请求到达时：计算自上次填充后的时间间隔 delta→应生成的令牌数 = delta × rate→加回令牌桶（上限=桶容量）→当前令牌 >= 1? 减 1 并放行 : 限流拒绝 3) 用 Lua 脚本保证原子性：整个"计算→比较→更新"在一个 EVAL 中完成，避免竞态。Redis Cluster 环境下：同一个 key 的限流器自然落在同一个 slot→单分片原子操作。多用户限流：每个用户独立的 key，互不影响。全局限流：用全局 key 统计总 QPS。' },
    ],
    handsOn: [
      { title: 'Redis Lua 限流脚本', cmd: 'redis-cli EVAL "\nlocal key = KEYS[1]\nlocal rate = tonumber(ARGV[1])  -- tokens per second\nlocal capacity = tonumber(ARGV[2])  -- max tokens\nlocal now = tonumber(ARGV[3])       -- current time (ms)\nlocal requested = tonumber(ARGV[4]) -- tokens requested\n\nlocal bucket = redis.call(\'HMGET\', key, \'tokens\', \'last_time\')\nlocal tokens = tonumber(bucket[1]) or capacity\nlocal last_time = tonumber(bucket[2]) or now\n\nlocal delta = math.max(0, now - last_time) * rate / 1000\nlocal new_tokens = math.min(capacity, tokens + delta)\n\nif new_tokens >= requested then\n  redis.call(\'HMSET\', key, \'tokens\', new_tokens - requested, \'last_time\', now)\n  redis.call(\'EXPIRE\', key, 60)\n  return 1  -- allowed\nelse\n  return 0  -- rejected\nend\n" 1 ratelimit:user:123 10 20 $(date +%s%3N) 1', output: '1 (允许) 或 0 (拒绝)', explain: 'rate=10 tokens/s, capacity=20 tokens (允许短期突发 2 倍)。脚本原子执行避免并发问题。返回 1 表示请求被通过。' },
    ],
    diagnosis: [
      { symptom: '合法用户在高峰期被误限流', cause: '限流阈值设置太低——按平均 QPS 而非峰值 QPS 设置', fix: '区分"硬限流"（超过阈值绝对拒绝——用于防止攻击）和"软限流"（超过阈值后排队或降级返回缓存结果——用于高峰期）。对合法用户使用更宽松的限流（如登录用户 100/min，匿名 20/min）' },
      { symptom: 'Redis 限流在高并发下成为瓶颈', cause: '每次请求都要调 Redis EVAL——当 QPS 极高时 Redis 本身成为瓶颈', fix: '两层限流——本地（进程内存）限流做快速拦截 + Redis 做精确全局限流。本地限额为全局限额的一定比例（如 80%），大部分请求在本地判断（微秒级），只有接近上限时才查 Redis 全局状态（毫秒级）' },
    ],
    exercises: [
      { level: '进阶', task: '用 Redis 实现一个固定窗口限流器（伪代码），限制"每个用户每分钟最多 60 次请求"', hint: 'INCR + EXPIRE', answer: 'key = f"ratelimit:{user_id}:{int(time.time()/60)}"; count = redis.incr(key); if count == 1: redis.expire(key, 120); if count > 60: raise RateLimitExceeded()。用时间窗口（分钟级）做 key，INCR 计数。' },
      { level: '基础', task: '解释令牌桶和漏桶的核心区别', hint: '突发 vs 平滑', answer: '令牌桶：按固定速率产生令牌，桶满则丢弃额外令牌。请求需要消耗令牌（1 请求=1 令牌）。允许突发——如果桶里有攒的 20 个令牌，瞬间可以处理 20 个请求。漏桶：请求进桶，按固定速率"漏"出去处理。不允许突发——即使桶里有积压，处理速率依然恒定。令牌桶适合"需要接受突发但不超总速率"（如 API），漏桶适合"需要绝对平滑"（如网络流量整形）。' },
    ],
  },

  "G9AI_i3MkUE1BsO3_-PH7": {
    mentalModel: '优雅降级就是"飞机迫降"——引擎坏了但还能滑翔降落，虽然体验差但保住了命。系统出问题时不是整个崩溃，而是关掉非核心功能保住核心链路。',
    sections: [
      { title: '降级策略', content: '降级清单（事先定义）：核心链路（必须保证）→ 登录/下单/支付。可降级的（出问题可关）→ 推荐系统、用户画像显示、日志详情。降级触发条件：1) 依赖服务不可用 2) 系统负载超过阈值 3) 响应时间超过阈值 4) 手动开关（运维按需操作）。实现方式：Feature Flag/配置中心控制降级开关，代码里 if feature_enabled("recommendation"): show_recommendations() else: show_default_content()。' },
      { title: '降级的层级——从牺牲性能到牺牲功能', content: '降级不是"要么全有要么全无"——分层降级：L1 - 性能降级：压缩图片质量、减少每页返回条数（100→20）、关闭 Debug 日志。L2 - 体验降级：关闭动画效果、用缓存结果替代实时计算（推荐列表用昨日数据）、CDN 回退到源站（牺牲速度）。L3 - 功能降级：关闭推荐/个性化（显示默认热榜）、关闭社交功能（评论/点赞）、关闭非核心搜索（商品搜索保留、文章搜索关闭）。L4 - 核心降级（最后手段）：只读模式（暂停所有写入操作，用户看到"系统维护中"）、排队模式（放入队列等待而非直拒绝）。降级的触发应是自动的——如 CPU >85% 持续 1 分钟 → 自动执行 L2 降级。自动恢复：指标恢复正常 2 分钟后逐步恢复降级功能。原则：降级方案在产品设计时就该讨论——"如果推荐系统挂了，页面应该显示什么？"而不是等到故障时临时拍板。' },
    ],
    handsOn: [
      { title: '用 Feature Flag 实现推荐系统降级', cmd: 'cat > /tmp/feature_flag.py << \'EOF\'\nif feature_flag.is_enabled("recommendation", user_id):\n    try:\n        products = recommendation_service.get(user_id, timeout=1)\n    except TimeoutError:\n        products = get_default_hot_products()  # 降级到默认热榜\nelse:\n    products = get_default_hot_products()  # 推荐功能被手动关闭\nEOF', output: '(降级代码)', explain: 'feature_flag 服务（如 LaunchDarkly/自研配置中心）控制降级开关。降级不依赖异常——feature flag 可以主动关闭功能而不用等到超时。超时是最后的兜底。' },
    ],
    diagnosis: [
      { symptom: '降级后用户体验更差——比直接报错还糟糕', cause: '降级策略设计不当——降级显示的内容质量太差（如推荐全变成无关内容），或降级的性能开销比原功能还大', fix: '审查每个降级方案的质量——默认热榜至少要是"最近 24 小时的热门商品"而非"首次加载的随机数据"。降级方案的处理速度应比正常方案快（不能降级比正常还慢）' },
      { symptom: '降级开关忘记恢复，功能缺失数天无人发现', cause: '手动触发的降级没有自动恢复机制，或自动降级阈值恢复正常但代码未自动恢复降级', fix: '自动降级必须自动恢复——当指标恢复到正常范围持续 N 分钟后自动关闭降级。降级操作记录到日志中，Dashboard 明确显示当前降级状态（如 Grafana 的一个面板显示"当前降级：推荐系统、商品评论"）' },
    ],
    exercises: [
      { level: '基础', task: '为一个电商网站设计降级方案：哪些功能必须保留，哪些可以降级', hint: '下单/支付 = 核心，推荐/评论 = 可降', answer: '必须保留：用户登录、商品浏览（基本信息）、下单、支付。可降级：个性化推荐→显示默认热销榜、商品评论→显示"评论暂不可用"、卖家详情→显示简化版、促销弹窗→不显示。' },
      { level: '进阶', task: '设计一个自动降级+自动恢复系统：定义触发条件、降级动作、恢复条件，并画出状态机', hint: '四级降级 + 定时自检恢复', answer: '状态机：NORMAL → (CPU>85% 1min) → L1 性能降级 → (持续 3min) → L2 体验降级 → (请求失败率>5%) → L3 功能降级 → (内存>95%) → L4 核心降级（只读）。恢复：每个状态定时检查指标，正常 2 分钟后退一级。L4→L3→L2→L1→NORMAL。恢复速度慢于降级速度（降级快恢复慢，防止 flapping）。实现：Prometheus 采集系统指标 → Alertmanager 触发 webhook → 降级控制器（管理状态机）→ 通过 Feature Flag 或配置中心下发降级指令 → 所有服务实时更新降级状态。' },
    ],
  },

  "JansCqGDyXecQkD1K7E7e": {
    mentalModel: '背压（Backpressure）就像餐厅前台告诉服务员"慢点下单，后厨忙不过来了"——下游告诉上游放慢速度。没有背压机制，上游一直猛发，下游处理不过来，数据堆积→内存爆→系统崩溃。',
    sections: [
      { title: '背压的实现', content: '在异步流处理中尤其重要：Reactive Streams 规范（Java/Spring WebFlux）、RxJS、Akka Streams 都内置背压机制。简单场景：用有界队列——队列满了就阻塞生产者或拒绝新任务。TCP 也有自己的背压机制：接收方的接收窗口变小→发送方降低发送速率。没有背压 = "用无尽的乐观主义堆队列" → 最终 OOM。' },
      { title: '实际应用中的背压模式', content: '1) 消息队列消费——RabbitMQ 的 prefetch_count 限制消费者一次预取的消息数（prefetch_count=10 = 消费者"手里"最多 10 条未 ACK 的消息）。当消费者处理变慢，未 ACK 消息达到 10 条 → Broker 停止向该消费者发送新消息 → 隐式背压 2) gRPC 流式——天然支持 HTTP/2 流控：接收方窗口满 → 发送方被阻塞等待窗口释放 3) 数据库写入——当写入 QPS 超过数据库能力，连接池满，新请求在获取连接时等待（阻塞背压）或失败（快速背压）4) Reactor/响应式编程——Subscriber 通过 request(n) 告知 Publisher"我还能处理 n 个元素"，Publication 只发送 Subscriber 请求的数量。关键设计决策：背压是"阻塞式"（生产者等待）还是"丢弃式"（超出则丢弃，采样处理）？实时系统通常用丢弃式+采样（如监控指标——丢弃老数据采样新数据），事务系统用阻塞式（如订单写入——宁可慢也不能丢）。' },
    ],
    handsOn: [
      { title: '观察 TCP 的背压——只读 socket 但不停发送', cmd: '# 用 socat 创建一个读取缓慢但接收大量数据的 TCP 连接\n# 观察接收窗口 shrink 和发送方的发送速率变化\nsocat TCP-LISTEN:9999,fork SYSTEM:\'pv -qL 100 > /dev/null\' &\nsocat TCP-CONNECT:127.0.0.1:9999 SYSTEM:\'yes "data" | head -1000\'; wait', output: '(发送方会因接收方窗口满而降速)', explain: 'pv -qL 100 限制读取速度为每秒 100 字节。接收窗口满→发送方 TCP 栈自动降速。这就是 TCP 流控（Flow Control）——背压的底层实现。' },
    ],
    diagnosis: [
      { symptom: '应用 OOM 崩溃，heap dump 显示大量消息对象堆积', cause: '使用了无界队列——生产者不停放消息，消费者处理不过来，队列无限增长直到耗尽内存', fix: '改用有界队列（如 LinkedBlockingQueue(capacity=10000)）。队列满时的策略：阻塞生产者（put() 等待空间）、丢弃最旧的消息（适合实时监控）、丢弃最新的消息、抛异常让调用方决定（调用方收到背压信号）' },
      { symptom: '消息队列消费者不断 Rebalance，消费几乎停止', cause: '消费者处理太慢+超过 poll 超时时间→broker 认为消费者挂了→触发 rebalance→rebalance 期间所有消费者停止消费→消息堆积更多→恢复后积压消息导致处理更慢→再次超时→恶性循环', fix: '增大 max.poll.interval.ms（Kafka），降低 max.poll.records（每次拉取更少的消息），优化消费逻辑性能。背压在这里表现为"主动降低拉取量"而非"被动堆积"' },
    ],
    exercises: [
      { level: '基础', task: '解释为什么需要背压', hint: '生产者快、消费者慢', answer: '生产者生产数据的速度 > 消费者处理数据的速度 → 数据在缓冲区堆积 → 内存耗尽 → 系统崩溃。背压让消费者能告诉生产者"慢一点"，达到速率匹配。' },
      { level: '进阶', task: '设计一个文件上传处理管道：客户端上传 → API 接收 → 图片压缩 → 缩略图生成 → 存 S3。如何加入背压防止 OOM？', hint: '每步之间用有界队列', answer: '1) API 接收文件后放入有界队列 Q1（容量 100）2) 图片压缩 Worker 从 Q1 取任务，压缩后放入 Q2（容量 50）3) 缩略图生成 Worker 从 Q2 取，生成缩略图放入 Q3（容量 50）4) S3 上传 Worker 从 Q3 取，上传到 S3。背压传导：S3 上传变慢 → Q3 满 → 缩略图生成阻塞等待 Q3 有空位 → Q2 满 → 压缩 Worker 阻塞 → Q1 满 → API 返回 503（服务繁忙）+ Retry-After header。每层有界队列的大小根据处理速度设计——处理快的层队列可以小，处理慢的层队列适当大（但仍是有限的）。监控每个队列的大小作为系统健康指标。' },
    ],
  },

  "HoQdX7a4SnkFRU4RPQ-D5": {
    mentalModel: '负载转移就是把"下班高峰期"的活挪到"凌晨空闲时"干。比如报表生成、数据清理、索引重建这些重活，凌晨 3 点服务器闲着也是闲着。',
    sections: [
      { title: '负载转移策略', content: '1) 定时任务：cron/scheduler 在低峰期执行批量任务。2) 延迟队列：高优先级任务即时处理，低优先级（如发送营销邮件）延迟到低峰。3) Spot/Preemptible 实例：用云厂商的便宜计算资源（随时可能被回收）跑批处理任务。4) 流量调度：用 DNS/CDN 把流量导到不同地域（时区错峰——美国白天亚洲用户量少）。' },
      { title: '适合负载转移的任务类型', content: '并不是所有任务都能"延迟处理"。分类：实时/近实时：用户期望立即或秒级响应（下订单、发送验证码、查询余额）→不能延迟。准实时：用户期望几分钟到一小时内完成（发送营销邮件、生成发票 PDF、同步数据到搜索引擎）→可以延迟但要在合理时间内完成。批处理：无用户等待——夜间报表、数据清理、索引重建、数据归档、全量备份→最适合负载转移。转移策略：1) 消息队列中的优先级——高优先级消息立即消费，低优先级消息在低峰期消费 2) 定时任务——cron 设置凌晨 2-4 点执行 3) 延迟投递——消息发送时指定 deliver_after（如 RabbitMQ Delayed Message Plugin）推迟到低峰时间。坑：负载转移不是"无限推迟"——凌晨 4 点跑不完的任务会影响早高峰用户。需要预估批量任务的执行时间 + 并发控制。' },
    ],
    handsOn: [
      { title: '用 RabbitMQ Delayed Message 实现延迟到凌晨执行', cmd: 'rabbitmqadmin declare exchange name=delayed type=x-delayed-message arguments=\'{"x-delayed-type":"direct"}\' && rabbitmqadmin publish exchange=delayed routing_key=tasks payload="do_report" properties=\'{"headers":{"x-delay":14400000}}\'', output: '(消息将在 4 小时后投递)', explain: 'x-delay=14400000ms=4 小时。下午 10 点发送这条消息 → 凌晨 2 点投递到队列 → worker 消费并生成报表。这比 cron 更灵活——可以动态决定延迟时间而非固定时间点。' },
    ],
    diagnosis: [
      { symptom: '凌晨批处理任务越跑越慢，最终拖到早高峰还没跑完', cause: '数据量增长但批处理任务的资源和时间窗口没同步调整——如每天新增 10% 数据，3 个月后同样凌晨 4 小时窗口跑不完', fix: '定期审查批处理任务的执行时间趋势，当执行时间超过窗口 80% 时触发扩容或优化——增加 worker 并行度、优化 SQL（如只处理增量数据而非全量）、拆分任务到多天分批处理' },
      { symptom: '延迟任务发送后丢失（消息没投递）', cause: '延迟消息插件依赖节点本地定时器——节点重启后延迟消息可能丢失（取决于插件实现和持久化配置）', fix: '对于重要的定时任务，用 cron + 数据库任务表（记录状态）比消息队列的延迟投递更可靠。消息队列延迟投递适合"允许少量丢失"的辅助任务。关键任务 = DB 记录 + cron 扫表 + 任务状态机（pending→running→done/failed）' },
    ],
    exercises: [
      { level: '基础', task: '举三个适合"负载转移"到低峰期的任务例子', hint: '不需要实时响应的重任务', answer: '1) 日报/周报/月报的统计数据生成 2) 数据库索引重建和表优化（OPTIMIZE TABLE）3) 批处理任务（如给 100 万用户发邮件通知、生成对账单）。' },
      { level: '进阶', task: '为电商系统设计"每日对账"任务：核对前一天所有订单的支付流水与银行到账记录。设计执行策略（时间、并发、失败重试）和监控', hint: '增量处理 + 分批 + checkpoints', answer: '执行时间：凌晨 3:00（确保前一天的银行结算完成）。策略：分批处理——每 1000 笔订单一批。每批：1) 查订单表的订单金额+状态 2) 调银行 API 查实际到账记录 3) 对比 → 一致则标记 reconciled；不一致则标记 discrepancy 插入异常表。每批处理完成记录 checkpoint（last_processed_order_id）。如果中途失败→从 checkpoint 恢复继续。并发：最多 5 个 worker 并行处理不同批次。监控：任务开始/结束时间、处理订单数、异常数、总耗时。告警：任务未在 6:00 前完成（距早高峰 2 小时）→通知 oncall。异常订单 > 0.1% → 通知财务团队。' },
    ],
  },

  "SqTnY2zykzA6857nHHwG2": {
    mentalModel: '故障缓解策略 = "消防预案"——火灾发生了不是等消防局来（虽然你也叫了），而是先疏散人员（降级）、关燃气阀门（隔离）、用灭火器（限流）。目标是控制火灾不扩大。',
    sections: [
      { title: '应急响应策略', content: '1) 检测：监控告警通知 oncall 2) 响应分级：P0（核心功能全挂→全体响应）、P1（部分功能异常→值班处理）、P2（非核心异常→工作日处理）3) 缓解手段：回滚最近部署、切流量到备用集群、手动开启降级开关、重启服务 4) 复盘（Postmortem）：故障后写详细的事故报告（时间线+根因+改进措施）——不是追责而是防止再发生。Google SRE 方法论：每个故障都是改进系统的机会。' },
      { title: '写一份好的 Postmortem（故障复盘）', content: 'Postmortem 的读者：当事团队（学习）、管理层（了解影响）、其他团队（避免同类问题）。结构：1) 摘要——3 句话说明发生了什么、影响多大、根因是什么 2) 时间线（UTC 时间）——精确到分钟的故障发现、响应、缓解、恢复时间点 3) 影响——影响了多少用户（%）、持续多久、经济损失（如退款/赔偿）4) 根因分析——不只是"代码有 bug"而是"为什么这个 bug 存在且没被发现"（5 Whys 分析法）5) 检测——监控是否发现了问题？告警是否及时？如果没发现，为什么？（检测盲区）6) 改进措施——具体的 action items，有负责人和截止日期。分类：a) 预防——让它不再发生 b) 检测——让它更快被发现 c) 缓解——让它影响更小。7) 不是追责——Postmortem 明确声明"blame-free"，目标是系统性改进而非找替罪羊。' },
    ],
    handsOn: [
      { title: '用 5 Whys 分析一个故障', cmd: '# 问题：数据库在高峰期崩溃，导致服务不可用 30 分钟\n# Why 1: 数据库为什么崩溃？→ 磁盘满了\n# Why 2: 磁盘为什么满了？→ binlog 没有自动清理\n# Why 3: binlog 为什么没有清理？→ MySQL 的 expire_logs_days 配成了 0（不过期）\n# Why 4: 为什么配置文件有这个值？→ 默认值被某人改了，没有 Code Review\n# Why 5: 为什么配置变更没有 Code Review？→ 数据库配置变更没有纳入版本管理和 CI', output: '(5 Whys 分析结果)', explain: '表面原因：磁盘满。根因：配置变更缺少 Review 流程。改进：1) 数据库配置纳入 Git + CI 检查 2) 磁盘使用率加监控 3) expire_logs_days 设为 7。5 Whys 帮助我们跳过"修 bug"直接找到"修流程"。' },
    ],
    diagnosis: [
      { symptom: 'Postmortem 写了但同类问题重复发生', cause: '改进措施太笼统（"加强监控"而非"对 orders 表磁盘使用率添加 Prometheus 告警规则#1234"），或 measure 分配了但无人跟踪完成', fix: '每个改进措施必须是可验证的——"在 Prometheus 中添加 disk_usage > 85% 的告警规则，PR link: xxx, 负责人: @alice, 截止: 2026-06-15"。在 issue tracker 中建 ticket 并纳入迭代。下次 Postmortem 前检查上次的措施是否完成' },
      { symptom: '团队不敢报告小故障，只报告大故障', cause: '故障跟绩效挂钩或追责文化——工程师怕"影响 KPI"而选择隐瞒', fix: '建立 Blame-free 文化——故障数不考核，考核的是"故障检测时间是否在缩短"、"改进措施是否在推进"。鼓励报告 near-miss（差点发生但没发生的故障）——这些是免费的教训。Google SRE：故障是正常的，不报告故障才是问题' },
    ],
    exercises: [
      { level: '基础', task: '描述故障发生后的标准处理流程', hint: '发现→响应→缓解→复盘', answer: '1) 监控告警触发或用户反馈→oncall 收到通知 2) oncall 评估影响范围（P0/P1/P2）3) 如果是部署引入的→立即回滚；如果是依赖故障→切备用或降级 4) 故障解除后写 Postmortem：时间线+根因+改进措施+时间计划。' },
      { level: '进阶', task: '为你的团队起草一份《故障响应手册》的前 1 页——oncall 工程师看到告警后的前 5 分钟应该做什么', hint: '确认、定位、缓解、升级', answer: '前 5 分钟 Checklist：1) 确认故障——打开 Grafana Dashboard 和 Jaeger 确认异常指标（不要只看告警标题）2) 判断影响范围——P0（核心功能完全不可用/影响 >50% 用户）还是 P1（部分功能异常/影响 <10% 用户）？3) 缓解优先——执行 Runbook 中的标准操作（回滚、重启、降级开关），即使还没找到根因 4) 通信——在团队 IM 频道中报告"正在处理 X 问题，影响范围 Y，预计时间 Z"5) 升级——5 分钟内无法缓解→拉其他 oncall 或相关团队负责人。之后：继续定位根因，但缓解 > 定位——先止血再找病因。' },
    ],
  },
};