import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_3: Record<string, DeepTutorial> = {
  // 46-60: 子查询/集合操作/分组/权限/安全/备份
  "_Y-omKcWZOxto-xJka7su": {
    mentalModel: '子查询就是"查询里的查询"——先跑一个小查询拿到结果，再用这个结果去跑大查询。就像先去传达室查某人在几楼，再上楼去找他。',
    sections: [
      { title: '子查询类型', content: '标量子查询（返回单个值）：SELECT name FROM products WHERE price = (SELECT MAX(price) FROM products)。行子查询（返回一行）：WHERE (col1, col2) = (SELECT ...)。表子查询（返回多行）：WHERE id IN (SELECT ...)。相关子查询（引用外部列）：WHERE price > (SELECT AVG(p2.price) FROM products p2 WHERE p2.category_id = p1.category_id)——对每行的 category 计算类目均价。子查询 vs JOIN：结果一样但执行计划不同。现代优化器经常能把子查询转成 JOIN，但显式 JOIN 通常更可读。' },
    ],
    diagnosis: [
      { symptom: 'NOT IN 子查询返回结果始终为空', cause: '子查询中包含 NULL 值。col NOT IN (1,2,NULL) 等价 col<>1 AND col<>2 AND col<>NULL，col<>NULL 永远非 TRUE。', fix: '用 NOT EXISTS 替代：WHERE NOT EXISTS (SELECT 1 FROM sub WHERE sub.col=t.col)。或子查询中加 WHERE col IS NOT NULL。' },
      { symptom: '相关子查询在大表上极慢', cause: '每行执行一次子查询——100 万行 = 100 万次子查询执行。', fix: '改写为 JOIN 或窗口函数。如 SELECT ..., AVG(salary) OVER (PARTITION BY dept_id) 替代 SELECT ..., (SELECT AVG(...) FROM ... WHERE dept_id=e.dept_id)。' },
    ],
  exercises: [
      { level: '基础', task: '用子查询找出"价格高于所有商品平均价格的商品"', hint: 'SELECT AVG(price) 子查询', answer: 'SELECT name, price FROM products WHERE price > (SELECT AVG(price) FROM products);' },
      { level: '进阶', task: '解释为什么 NOT IN + NULL 会出人意料的结果', hint: 'NULL 三值逻辑', answer: 'SELECT * FROM t WHERE col NOT IN (1, 2, NULL) 永远返回空！因为 col NOT IN (...) 等价于 col <> 1 AND col <> 2 AND col <> NULL，而 col <> NULL 结果永远是 NULL（不是 TRUE），所以整个条件不成立。用 NOT EXISTS 代替 NOT IN。' },
    ],
  },

  "kOwhnSZBwIhIbIsoAXQ50": {
    mentalModel: '集合操作就像"集合数学课"——UNION 是合集（去重）、UNION ALL 是直接拼（不去重、更快）、INTERSECT 是交集、EXCEPT 是差集。',
    sections: [
      { title: '集合操作的使用', content: 'UNION：合并两个查询结果并去重。UNION ALL：合并不去重（快、推荐默认用这个）。INTERSECT：只保留两个查询都有的行。EXCEPT：保留第一个查询有但第二个没有的行。注意：所有集合操作的查询必须有相同的列数和兼容的类型。UNION 排序去重有额外开销，如果确定没有重复或不需要去重，用 UNION ALL。' },
    ],
    diagnosis: [
      { symptom: 'UNION 查询比预期慢很多', cause: 'UNION 默认去重（排序+去重），两个子查询各 10 万行 → 20 万行排序去重开销大。', fix: '确定无重复用 UNION ALL。UNION ALL 直接拼接无排序去重开销。' },
      { symptom: '两个查询列数不一致报 "each UNION query must have the same number of columns"', cause: '集合操作要求所有查询列数和类型兼容。', fix: '确认两 SELECT 列数相同。缺列用 NULL::type 填充：SELECT a,b,NULL::text FROM t1 UNION ALL SELECT x,y,z FROM t2。' },
    ],
  exercises: [
      { level: '基础', task: '用 UNION ALL 合并"活跃用户"和"VIP 用户"两个查询结果', hint: 'SELECT ... FROM active_users UNION ALL SELECT ... FROM vip_users', answer: 'SELECT user_id, name FROM active_users UNION ALL SELECT user_id, name FROM vip_users; 如果同一用户既是活跃又是 VIP 会出现两次——用 UNION 去重就只保留一次。' },
    ],
  },

  "uwd_CaeHQQ3ZWojbmtbPh": {
    mentalModel: 'GROUP BY 就像"垃圾分类"——把数据按某个标准分类（按部门/按日期/按地区），然后对每类做统计（多少人/多少钱/多少件）。HAVING 是对分类后的结果再次筛选（只要某类数量>10的）。',
    sections: [
      { title: 'GROUP BY + HAVING', content: '基本模式：SELECT department, COUNT(*), AVG(salary) FROM employees GROUP BY department HAVING COUNT(*) > 5。WHERE 在分组前过滤行，HAVING 在分组后过滤组。HAVING 只能引用 GROUP BY 的列或聚合函数。常见错误：SELECT 里写了非 GROUP BY 列也不在聚合函数里——PG 会报错。其他数据库可能随机选一个值（危险）。' },
    ],
    diagnosis: [
      { symptom: 'GROUP BY 查询结果中某些组不见了', cause: 'WHERE 条件分组前过滤或 INNER JOIN 丢掉了无匹配的行。', fix: '检查 WHERE 是否误过滤。用 LEFT JOIN 保留所有组的可能。用 COALESCE() 处理 NULL。先 SELECT DISTINCT 分组列确认应有组。' },
      { symptom: 'SELECT 含非 GROUP BY 列且不在聚合函数中，PG 报错', cause: 'SQL 标准要求 SELECT 中非聚合列必须在 GROUP BY 中。PG 严格执行此标准。', fix: '将列加入 GROUP BY，或用聚合函数包裹，或用 DISTINCT ON 语法。如果每组该列值都相同，用 MAX(col) 等任意聚合函数。' },
    ],
  exercises: [
      { level: '进阶', task: '查询"总消费超过 1000 元的用户中，每人最高单笔消费"', hint: 'GROUP BY + HAVING + MAX', answer: 'SELECT user_id, MAX(amount) FROM orders GROUP BY user_id HAVING SUM(amount) > 1000; WHERE 过滤单笔金额，HAVING 过滤用户级别条件。' },
    ],
  },

  "T819BZ-CZgUX_BY7Gna0J": {
    mentalModel: 'postgresql.conf 是 PG 的"控制面板"——几百个参数控制内存分配、连接数、WAL 行为、查询优化器等。默认配置很保守（适合在树莓派上跑），生产环境必须调参。',
    sections: [
      { title: '关键配置参数', content: 'shared_buffers：PG 的共享内存缓存，建议设为物理内存的 25%（默认才 128MB）。effective_cache_size：告诉优化器操作系统大概有多少文件缓存可用（设为内存的 50-75%）。work_mem：每个排序/哈希操作的内存（默认 4MB），分析查询多可以调到 16-64MB。maintenance_work_mem：VACUUM/CREATE INDEX 用的内存（默认 64MB），大表操作调到 256MB-1GB。max_connections：最大连接数（默认 100），用连接池（PgBouncer）而非调大这个值。wal_level：至少 replica，需要逻辑复制设 logical。' },
    ],
    diagnosis: [
      { symptom: '修改 postgresql.conf 参数没生效', cause: '没 reload/restart，或 ALTER SYSTEM SET 覆盖了配置文件。', fix: "SELECT context FROM pg_settings WHERE name='参数名'; context=user 可 SET；context=sighup 需 reload；context=postmaster 需 restart。检查 pg_file_settings 视图。" },
      { symptom: 'work_mem 设太大导致服务器 OOM', cause: 'work_mem 是每个查询操作的限额，多连接+多排序操作可能同时消耗 work_mem * 连接数 * 并发排序数。', fix: "work_mem 设 16-32MB（几百连接时）。大查询单独 SET work_mem='1GB'。计算：max_connections × work_mem < 可用内存 50%。" },
    ],
  exercises: [
      { level: '基础', task: '用 psql 查看当前 shared_buffers 的值', hint: 'SHOW shared_buffers;', answer: 'SHOW shared_buffers; 或 SELECT current_setting(\'shared_buffers\')。默认通常是 128MB。SELECT pg_size_pretty(current_setting(\'shared_buffers\')::int * 8192); 显示人类可读格式。' },
    ],
  },

  "VAf9VzPx70hUf4H6i3Z2t": {
    mentalModel: 'PG 扩展就像给手机装 App——核心功能已经很全了，但装了扩展后功能翻倍：PostGIS（地图）、pgvector（向量检索）、pg_cron（定时任务）、pg_stat_statements（慢查询分析）。',
    sections: [
      { title: '常用扩展', content: '1) pg_stat_statements：追踪所有 SQL 的执行统计（必装，没有之一）2) PostGIS：地理空间数据 3) pgvector：向量相似度搜索（AI 应用标配）4) pg_cron：数据库内定时任务 5) uuid-ossp：生成 UUID 6) hstore：键值对存储 7) pg_partman：自动分区管理。安装：CREATE EXTENSION IF NOT EXISTS extension_name; SELECT * FROM pg_extension; 查看已安装扩展。' },
    ],
    diagnosis: [
      { symptom: 'CREATE EXTENSION 报 "could not open extension control file"', cause: '扩展未安装在系统中，或扩展在单独的 contrib 包中。', fix: 'apt install postgresql-contrib 安装官方扩展包。SELECT * FROM pg_available_extensions 查看可用列表。第三方扩展需单独安装。' },
      { symptom: 'pg_stat_statements 安装后查询不到任何 SQL 统计', cause: '扩展未在 shared_preload_libraries 中加载——必须在 PG 启动时加载。', fix: "ALTER SYSTEM SET shared_preload_libraries='pg_stat_statements'; 重启 PG。重启后 CREATE EXTENSION IF NOT EXISTS pg_stat_statements; 执行几条 SQL 测试。" },
    ],
  exercises: [
      { level: '基础', task: '安装 pg_stat_statements 扩展并查看最慢的 5 个查询', hint: 'CREATE EXTENSION + query pg_stat_statements', answer: 'CREATE EXTENSION pg_stat_statements; SELECT query, calls, mean_exec_time FROM pg_stat_statements ORDER BY mean_exec_time DESC LIMIT 5;' },
    ],
  },

  "2Zg8R5gs9LMQOcOMZtoPk": {
    mentalModel: '数据库安全不和网络安全混为一谈——防火墙在外挡，PG 安全在内部管：谁能登录（认证）、能看到什么数据（授权）、操作有没有被记录（审计）。三道防线逐层深入。',
    sections: [
      { title: 'PG 安全分层', content: '1) pg_hba.conf：控制谁能从哪连上来（基于主机/用户/数据库的认证规则）2) 角色和权限：登录角色（LOGIN）vs 组角色（NOLOGIN），GRANT/REVOKE 管理对象权限 3) 行级安全（RLS）：同一张表不同用户看到不同行 4) 列级权限：限制用户只能 SELECT 某些列 5) SSL 加密连接 6) 审计扩展（pgAudit）。原则：最小权限——应用账号只给 CRUD 权限、不给 DDL（建表/删表）。' },
    ],
    diagnosis: [
      { symptom: '生产数据库被删表，不知道谁干的', cause: '没开审计日志，pg_hba.conf 认证过松（如 trust 模式）。', fix: "设置 log_statement='ddl' 记录所有 DDL。log_line_prefix 含 %u(用户名)%h(IP)。安装 pgAudit 做细粒度审计。生产禁用 trust，用 scram-sha-256。" },
      { symptom: '应用报 "permission denied for table" 但昨天正常', cause: '有人 REVOKE 权限，或表 owner 变更，或组角色成员被移除。', fix: '\dp tablename 查看权限。SELECT r.rolname,m.rolname FROM pg_auth_members am JOIN pg_roles r ON am.roleid=r.oid JOIN pg_roles m ON am.member=m.oid 检查组成员。用 GRANT 恢复。' },
    ],
  exercises: [
      { level: '基础', task: '创建一个只读用户，只能查询 orders 表', hint: 'CREATE ROLE + GRANT SELECT', answer: "CREATE ROLE readonly WITH LOGIN PASSWORD 'secret'; GRANT CONNECT ON DATABASE mydb TO readonly; GRANT USAGE ON SCHEMA public TO readonly; GRANT SELECT ON orders TO readonly;" },
    ],
  },

  "l0lpaPy12JFCJ-RRYVSqz": {
    mentalModel: 'PG 的 Role 是"万能身份卡"——可以是一个人（登录用户）、可以是一组人（组角色）、可以拥有对象、可以被授权。和 MySQL 的"用户 vs 角色"二分不同，PG 里用户和角色是一个概念。',
    sections: [
      { title: 'Role 管理', content: 'CREATE ROLE app WITH LOGIN PASSWORD \'xxx\' VALID UNTIL \'2025-12-31\'（登录角色+密码+过期日）。CREATE ROLE developers WITH NOLOGIN（组角色，不能登录）。GRANT developers TO alice（alice 继承 developers 组的所有权限）。ALTER ROLE app CONNECTION LIMIT 20（限制连接数）。DROP ROLE app（删除角色）。SELECT * FROM pg_roles; 查看所有角色。' },
    ],
    diagnosis: [
      { symptom: '新建用户无法登录报 "role cannot login"', cause: 'CREATE ROLE 默认创建 NOLOGIN 角色。需要显式加 LOGIN 或使用 CREATE USER。', fix: "ALTER ROLE 用户名 WITH LOGIN; 或重建：CREATE ROLE 用户名 WITH LOGIN PASSWORD 'xxx'; 验证：SELECT rolname,rolcanlogin FROM pg_roles WHERE rolname='用户名';" },
      { symptom: '用户继承组角色权限但仍无法访问表', cause: '组角色权限在特定 schema 上但用户无 schema 的 USAGE 权限，或默认权限只对新表生效。', fix: 'GRANT USAGE ON SCHEMA public TO 用户名; GRANT SELECT ON ALL TABLES IN SCHEMA public TO 用户名; 对已存在的表显式授权。' },
    ],
  exercises: [
      { level: '基础', task: '创建组角色"analysts"，授予只读权限，然后将用户 bob 加入该组', hint: 'CREATE ROLE + GRANT ... TO + GRANT role TO user', answer: "CREATE ROLE analysts WITH NOLOGIN; GRANT SELECT ON ALL TABLES IN SCHEMA public TO analysts; CREATE ROLE bob WITH LOGIN PASSWORD 'pass'; GRANT analysts TO bob; bob 登录后自动拥有 analysts 的全部权限。" },
    ],
  },

  "Y2W29M4piaQsTn2cpyR7Q": {
    mentalModel: 'pg_hba.conf 是 PG 的"访客登记制度"——定义谁、从哪来、用什么方式、能访问哪个数据库。就像写字楼的门禁系统：刷卡（认证方式）、看工牌（IP 地址）、决定能进哪层楼（数据库）。',
    sections: [
      { title: 'pg_hba.conf 格式', content: '格式：TYPE  DATABASE  USER  ADDRESS  METHOD。TYPE：local（Unix socket）、host（TCP/IP）、hostssl（只允许 SSL）。METHOD：trust（无需密码——仅限 local 开发！）、md5/scram-sha-256（密码）、cert（客户端证书）、peer（OS 用户匹配）、reject（直接拒绝）。示例：host  mydb  app  10.0.0.0/8  scram-sha-256——允许 10.x.x.x 的 app 用户用密码登录 mydb。修改后执行 pg_ctl reload 或 SELECT pg_reload_conf() 使配置生效。' },
    ],
    diagnosis: [
      { symptom: 'pg_ctl reload 成功但 pg_hba.conf 新规则没生效', cause: '规则从上到下匹配——新加的规则在更宽泛的已有规则之后永不被匹配。或 reload 成功但语法错误导致忽略。', fix: 'SELECT pg_hba_file_rules(); 查看实际解析规则和顺序。具体规则放通用规则前面。检查 reload 日志输出。' },
      { symptom: '从特定 IP 连接报 "no pg_hba.conf entry for host"', cause: 'pg_hba.conf 中无匹配该 IP/用户/数据库组合的规则。', fix: '添加：host database user IP掩码 scram-sha-256。确认 IP 地址范围正确。SELECT pg_reload_conf(); 后重试。' },
    ],
  exercises: [
      { level: '基础', task: '写一条 pg_hba.conf 规则：只允许来自 192.168.1.0/24 网段的 app 用户用 scram-sha-256 密码登录 mydb', hint: 'host + database + user + address + method', answer: 'host mydb app 192.168.1.0/24 scram-sha-256。还要在 pg_hba.conf 后面加一行 host all all 0.0.0.0/0 reject 拒绝其他所有连接。' },
    ],
  },

  "bokFf6VNrLcilI9Hid386": {
    mentalModel: '行级安全（RLS）就像"给每行数据贴上专属标签"——销售经理能看到自己团队的客户数据，但看不到其他团队的。同样一张 customers 表，不同人执行相同 SELECT 看到的结果不同。',
    sections: [
      { title: 'RLS 实现', content: '1) 启用 RLS：ALTER TABLE customers ENABLE ROW LEVEL SECURITY; 2) 创建策略：CREATE POLICY sales_team ON customers FOR SELECT USING (team_id = current_setting(\'app.current_team\')::int); 3) 应用设置参数：SET app.current_team = \'5\';——PG 自动过滤，只返回 team_id=5 的行。对 INSERT/UPDATE 也要定义策略。Bypass：表所有者和 SUPERUSER 不受 RLS 限制。' },
    ],
    diagnosis: [
      { symptom: '启用 RLS 后连表 owner 都看不到数据', cause: 'PG 11+ 中默认所有用户（含 owner）都受 RLS 约束，除非有 BYPASSRLS 属性。', fix: "为表 owner 创建 USING(true) 策略允许看所有行。或 ALTER ROLE owner BYPASSRLS; 检查：SELECT rolbypassrls FROM pg_roles WHERE rolname='owner';" },
      { symptom: 'INSERT/UPDATE 在 RLS 表失败但 SELECT 正常', cause: '只创建了 FOR SELECT 策略，没创建 FOR INSERT/UPDATE/DELETE 策略。每种 DML 操作需要单独策略。', fix: 'CREATE POLICY name ON table FOR INSERT WITH CHECK(condition); CREATE POLICY name ON table FOR UPDATE USING(condition) WITH CHECK(condition);' },
    ],
  exercises: [
      { level: '进阶', task: '实现一个多租户 SaaS 的数据隔离：每个租户只能看自己的数据，用 RLS + 参数', hint: 'SET app.tenant_id + USING (tenant_id = ...)', answer: 'ALTER TABLE orders ENABLE ROW LEVEL SECURITY; CREATE POLICY tenant_isolation ON orders USING (tenant_id = current_setting(\'app.tenant_id\')::int); 每个请求开始时 SET app.tenant_id = \'租户ID\'，之后所有查询自动隔离。' },
    ],
  },

  "EKwO6edtFnUw8cPCcVwKJ": {
    mentalModel: 'PG 的 SSL 就像"加密电话线"——客户端和数据库之间所有的数据（包括密码和查询结果）都被加密传输。在公网和不信任网络上连接数据库必须开启。',
    sections: [
      { title: 'SSL 配置', content: '配置：ssl = on（postgresql.conf）。ssl_cert_file / ssl_key_file 指向证书和私钥（可以用 Let\'s Encrypt 或自签证书）。连接：psql "sslmode=require host=db.example.com"。sslmode 级别：disable（不用）、require（必须 SSL 但不验证证书）、verify-ca（验证 CA）、verify-full（验证证书+主机名——生产环境推荐）。' },
    ],
    diagnosis: [
      { symptom: 'psql sslmode=verify-full 报 "certificate verify failed"', cause: 'SSL 证书 CN 和连接主机名不一致。或自签证书不在 CA 信任链中。', fix: '自签证书只关心加密用 sslmode=require。需证书验证确保 CN/SAN 含连接主机名并用根 CA 签名。' },
      { symptom: '设了 hostssl 但客户端可用非 SSL 连接', cause: 'pg_hba.conf 中 host（非 SSL）条目在 hostssl 之前匹配了，或无 hostssl 规则匹配该用户/IP 组合。', fix: 'hostssl 条目放 host 之前，或删除非 SSL host 条目。SELECT pg_hba_file_rules(); 检查顺序。postgresql.conf 设 ssl=on。' },
    ],
  exercises: [
      { level: '基础', task: '用 psql 以 SSL 模式连接到 PG，验证连接已加密', hint: 'sslmode=require', answer: 'psql "sslmode=require host=localhost" -c "SELECT ssl, version FROM pg_stat_ssl WHERE pid = pg_backend_pid();" ssl 列为 t 表示连接已加密。' },
    ],
  },

  "A3YTrZSUxNBq77iIrNdZ4": {
    mentalModel: 'PG 复制就像"双人同步跳伞"——主库做所有动作（写数据），从库跟着做一样的动作（同步数据）。万一主伞出问题（主库挂），从库立刻开伞接替（Failover），保证着陆安全。',
    sections: [
      { title: '流复制 vs 逻辑复制', content: '流复制（Streaming Replication）：物理复制——把 WAL 日志从主库传到从库，从库重放 WAL 变成和主库一模一样（块级别）。优势：简单可靠、延迟低。劣势：整个实例复制、不能只复制部分表。逻辑复制（Logical Replication）：复制 SQL 变更（INSERT/UPDATE/DELETE）。优势：可以选择部分表复制、支持不同 PG 版本间复制。劣势：DDL 不会自动复制、延迟稍高。' },
    ],
    diagnosis: [
      { symptom: '从库显示 "streaming" 但延迟越来越大', cause: '主库 WAL 产生速度超网络传输或从库重放速度。从库磁盘 IO 慢或网络带宽不足。', fix: '检查从库 IO：iostat -x 1。检查网络延迟和带宽。增加从库 maintenance_work_mem。或从库关闭 fsync（仅当可接受崩溃丢数据）。' },
      { symptom: '流复制断开报 "requested WAL segment has already been removed"', cause: '主库清理了从库需要的 WAL 段——从库停机太久，主库 WAL 积压后自动清理。', fix: '增大 wal_keep_size。配置 replication slot——主库不清理从库未消费的 WAL。从库需重建：重新 pg_basebackup。' },
    ],
  exercises: [
      { level: '进阶', task: '解释为什么流复制中从库可以承担读负载但逻辑复制不能', hint: '物理一致 vs 逻辑一致', answer: '流复制从库和主库物理完全一致——数据文件和 WAL 位置完全同步，所以可以读。逻辑复制只同步特定表的逻辑变更，从库可能有自己的本地表和数据，不是主库的完整镜像，不能作为高可用读副本。' },
    ],
  },

  "rmsIw9CQa1qcQ_REw76NK": {
    mentalModel: '逻辑复制就像"选择性订阅"——不是整份报纸（全部数据库）都投递，而是只订阅感兴趣的栏目（特定表）。适合：只同步几张表到分析库、不同 PG 版本间迁移数据、把多个库的数据汇聚到一个库。',
    sections: [
      { title: '逻辑复制配置', content: '发布端（Publisher）：CREATE PUBLICATION mypub FOR TABLE users, orders;。订阅端（Subscriber）：CREATE SUBSCRIPTION mysub CONNECTION \'host=pub dbname=sourcedb\' PUBLICATION mypub;。注意：1) wal_level 必须设 logical 2) 两个 PG 实例都要配置 3) 初始数据同步：订阅创建时自动 COPY 已有数据 4) DDL（ALTER TABLE/加列）不会自动复制——需要两边手动执行。' },
    ],
    diagnosis: [
      { symptom: '逻辑复制从库反复重启 worker', cause: '从库手动改了复制目标表数据导致冲突，复制 worker 遇到不一致报错重启。', fix: '禁止从库直接写复制目标表。冲突后 ALTER SUBSCRIPTION ... REFRESH PUBLICATION 全量重同步。' },
      { symptom: '主库 ALTER TABLE 加列，从库该列始终 NULL', cause: '逻辑复制只同步 DML 不复制 DDL。加列后从库旧数据该列为 NULL。', fix: 'DDL 在主从两端分别手动执行。先在从库执行（能接受新列数据），再在主库执行。用 Flyway/Sqitch 管理 DDL 变更同步。' },
    ],
  exercises: [
      { level: '进阶', task: '设计一个方案：生产 PG 库把 orders 表实时同步到分析 PG 库', hint: 'CREATE PUBLICATION + CREATE SUBSCRIPTION', answer: '生产库：CREATE PUBLICATION orders_pub FOR TABLE orders; 分析库：CREATE SUBSCRIPTION orders_sub CONNECTION \'host=prod port=5432 user=repl password=xxx dbname=mydb\' PUBLICATION orders_pub; 之后生产库 orders 的每一笔变更都会实时同步到分析库。' },
    ],
  },

  "aKQI7aXb4T_39bZgjmfoW": {
    mentalModel: 'PgBouncer 是 PG 的"连接大堂经理"——每个客户端不是直接进 PG（占用一个服务进程），而是先在大堂（PgBouncer）排队，大堂经理统一分配有限的服务窗口。几百个客户端只需十几个实际连接。',
    sections: [
      { title: '为什么需要连接池', content: 'PG 的连接模型是"每连接一进程"——每个客户端连接 fork 一个 OS 进程（消耗几 MB 内存+CPU 调度开销）。1000 个连接 = 1000 个进程 = 内存耗尽/OOM。连接池让 1000 个客户端共享 20 个实际 PG 连接——大部分客户端持有连接但不发查询时（空闲连接），PgBouncer 把连接让给别人用。pool_mode：session（一个客户端独占一个 PG 连接直到断开）、transaction（事务结束就释放）、statement（一条查询结束就释放——最激进）。推荐 transaction 模式。' },
    ],
    diagnosis: [
      { symptom: '通过 PgBouncer 连接后 SET/RESET 不生效', cause: 'transaction 模式下事务结束连接归还池，会话级 SET 变量丢失。下次拿到另一连接。', fix: "server_reset_query = DISCARD ALL; 确保归还时清理状态。应用级 SET 移到 PG 端：ALTER ROLE app SET work_mem='32MB';" },
      { symptom: 'PgBouncer 报 "no more connections allowed (max_client_conn)"', cause: '客户端连接数超 max_client_conn。可能连接泄漏——应用未正确关闭连接。', fix: 'SHOW CLIENTS; 看活跃客户端数。增大 max_client_conn 同时排查泄漏。应用连接池设合理最大连接数和超时。' },
    ],
  exercises: [
      { level: '基础', task: '说出什么时候必须用连接池', hint: '连接数 > 多少', answer: '当并发连接数超过几百时必须用连接池。PG 的 max_connections 通常不宜超过 200-300——每个连接是一个 OS 进程，太多进程会导致上下文切换和内存压力远超收益。' },
    ],
  },
};