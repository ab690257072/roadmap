import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_2: Record<string, DeepTutorial> = {
  // 31-45: Docker/systemd/psql/pg_ctl 部署运维 + SQL基础 + 数据类型 + 增删改查
  "5MjJIAcn5zABCK6JsFf4k": {
    mentalModel: 'Docker 运行 PostgreSQL 就像"租了个带家具的公寓"——不用自己装修（编译安装），拎包入住（docker run），住不爽了随时退租（docker rm）换一套。对学习来说是最省心的方式。',
    handsOn: [
      { title: 'Docker 启动 PostgreSQL 并持久化数据', cmd: 'docker run -d --name pg-learn -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=mydb -v pgdata:/var/lib/postgresql/data -p 5432:5432 postgres:16-alpine', output: '(容器启动，数据卷 pgdata 持久化存储)', explain: '-v pgdata:... 创建命名数据卷，即使容器删除数据也不丢。-p 5432:5432 映射端口。' },
    ],
    diagnosis: [
      { symptom: 'docker rm 容器后数据库数据全丢了', cause: '没有挂载数据卷——容器内 /var/lib/postgresql/data 的数据随容器删除而消失。', fix: '创建时加 -v pgdata:/var/lib/postgresql/data。即使删除容器，数据卷还在。docker volume ls 查看所有数据卷。' },
    ],
    exercises: [
      { level: '基础', task: '用 Docker 启动两个不同版本的 PostgreSQL（16 和 15），映射到不同端口', hint: 'docker run -p 5433:5432 postgres:15-alpine', answer: 'docker run -d --name pg16 -e POSTGRES_PASSWORD=s -p 5432:5432 postgres:16-alpine && docker run -d --name pg15 -e POSTGRES_PASSWORD=s -p 5433:5432 postgres:15-alpine' },
    ],
  },

  "P1Hm6ZlrhCRxbxOJkBHlL": {
    mentalModel: 'systemd 是 Linux 的"服务大管家"——管理 PostgreSQL 服务的启动、停止、重启、开机自启。就像写字楼的物业管理系统，管着所有租户（服务）的开关。',
    sections: [
      { title: 'systemd 管理 PostgreSQL', content: '安装 PG 后，systemd 服务通常在 /etc/systemd/system/postgresql.service。常用命令：sudo systemctl start postgresql（启动）、sudo systemctl stop postgresql（停止）、sudo systemctl restart postgresql（重启）、sudo systemctl status postgresql（查看状态）、sudo systemctl enable postgresql（开机自启）。journalctl -u postgresql -f 实时查看 PG 日志。' },
    ],
    diagnosis: [
      { symptom: 'systemctl start postgresql 报错但没有任何日志输出', cause: 'PG 数据目录权限不对，postgres 用户无法读写数据目录。systemd 的 stdout/stderr 没捕获 PG 详细错误。', fix: '检查数据目录权限：ls -la /var/lib/postgresql/版本号/main。属主应为 postgres:postgres。用 journalctl -u postgresql -n 50 --no-pager 查看详细日志。' },
      { symptom: '服务器重启后 PG 没有自动启动', cause: '没有设置开机自启，或 systemd service 的 After=network.target 依赖导致启动顺序问题。', fix: 'sudo systemctl enable postgresql 设置开机自启。systemctl is-enabled postgresql 确认。若网络依赖问题，编辑 service 文件添加 Restart=on-failure。' },
    ],
  exercises: [
      { level: '基础', task: '用 systemctl 查看 PostgreSQL 的运行状态', hint: 'systemctl status postgresql', answer: 'sudo systemctl status postgresql 输出包括 Active 状态（active/running）、Main PID、内存使用、最近日志。如果显示 inactive 说明服务没启动。' },
    ],
  },

  "a4j0Rs8Tl6-k9WP5zjaep": {
    mentalModel: 'pg_ctl 是 PostgreSQL 的"直接遥控器"——不通过 systemd，直接控制 PG 进程的启动、停止、重启。适合没有 root 权限或需要精确控制启动参数的场景。',
    handsOn: [
      { title: '用 pg_ctl 启动和停止 PG', cmd: 'pg_ctl -D /usr/local/var/postgres start && pg_ctl -D /usr/local/var/postgres status && pg_ctl -D /usr/local/var/postgres stop -m fast', output: 'server starting\npg_ctl: server is running (PID: 12345)\nserver stopped', explain: '-D 指定数据目录。-m fast 快速关闭（回滚活跃事务后退出），-m immediate 立即退出（类似断电，重启需要 crash recovery）。' },
    ],
    diagnosis: [
      { symptom: 'pg_ctl start 报 "could not start server" 无详细信息', cause: '数据目录中缺少 postgresql.conf 或路径错误，或端口被占用。', fix: 'ls $PGDATA/postgresql.conf 检查配置文件存在。lsof -i :5432 检查端口。pg_ctl -D /data -l logfile start 指定日志文件查看详细错误。' },
      { symptom: 'pg_ctl stop -m smart 永久等待不停止', cause: '有客户端连接一直不断开（idle 状态的 psql 会话），smart 模式必须等所有连接主动断开。', fix: '改用 pg_ctl stop -m fast 快速关闭。查看当前连接：SELECT * FROM pg_stat_activity WHERE pid != pg_backend_pid(); 生产环境推荐 fast 模式。' },
    ],
  exercises: [
      { level: '基础', task: '解释 pg_ctl 的三种停止模式：smart、fast、immediate', hint: '谁在等谁', answer: 'smart：等所有客户端断开才停止。fast：回滚活跃事务后停止（默认推荐）。immediate：立即退出，类似断电——重启时自动 crash recovery（WAL 回放）。' },
    ],
  },

  "mMf2Mq9atIKk37IMWuoJs": {
    mentalModel: 'psql 是 PostgreSQL 的"控制面板"——命令行交互客户端。所有操作从建库、查表、改数据到调优，都在这个黑窗口里完成。GUI 工具（如 DBeaver/pgAdmin）底层也是发 psql 命令。',
    handsOn: [
      { title: 'psql 连接与基本操作', cmd: 'psql -h localhost -U postgres -d mydb', output: 'psql (16.0)\nType "help" for help.\nmydb=#', explain: '-h 主机、-U 用户、-d 数据库。进入后 \\dt 列所有表、\\d tablename 查看表结构、\\l 列所有数据库、\\q 退出。' },
      { title: 'psql 元命令速查', cmd: 'psql -c "\\?" | head -20', output: '\\dt          列出所有表\n\\d table     查看表结构\n\\l            列出所有数据库\n\\du           列出所有用户/角色\n\\x           切换列显示模式（宽表用）\n\\e            打开编辑器写 SQL', explain: 'psql 元命令以 \\ 开头，是 psql 独有的（不是 SQL）。最有用的：\\dt、\\d、\\x（自动扩展显示宽记录）、\\timing（显示每条 SQL 的执行时间）。' },
    ],
    diagnosis: [
      { symptom: 'psql 连接报 "Peer authentication failed for user"', cause: 'pg_hba.conf 中本地连接是 peer 认证，OS 用户名和 PG 用户名不一致。', fix: '改为密码认证：修改 pg_hba.conf 将 local all all peer 改为 local all all scram-sha-256。或 sudo -u postgres psql。' },
      { symptom: 'psql \dt 显示 "Did not find any relations" 但确定有表', cause: '当前 search_path 中没有包含建表的 schema。', fix: 'SHOW search_path; SET search_path TO public, 你的schema; 或 \dt schema_name.* 指定 schema。' },
    ],
  exercises: [
      { level: '基础', task: '用 psql 连接数据库，执行 \\dt 查看所有表，执行 \\d+ 表名 查看某表的详细信息', hint: 'psql -U postgres -d database', answer: 'psql -U postgres -d mydb → \\dt → \\d+ users。\\d+ 比 \\d 多了存储大小、表空间、压缩等详细信息。' },
    ],
  },

  "ANUgfkADLI_du7iRvnUdi": {
    mentalModel: 'SQL 是数据库的"普通话"——不管后端用什么语言，和数据库交流都用 SQL。学 SQL 不是背语法，是学会"想清楚你要什么数据、用什么方式获取"。',
    sections: [
      { title: 'SQL 学习的四个层次', content: '1) 基础查询：SELECT/FROM/WHERE/ORDER BY/LIMIT 2) 聚合与分组：GROUP BY/HAVING/COUNT/SUM/AVG 3) 多表关联：JOIN/LEFT JOIN/subquery/UNION 4) 高级查询：窗口函数/CTE/递归查询/横向子查询。新手最容易犯的错误：不会写 JOIN、不理解 NULL 的三值逻辑、用子查询代替 JOIN。' },
      { title: 'SQL 执行顺序', content: 'SQL 的书写顺序 ≠ 执行顺序。SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT 的执行顺序是：FROM（确定表）→ WHERE（过滤行）→ GROUP BY（分组）→ HAVING（过滤组）→ SELECT（选择列）→ ORDER BY（排序）→ LIMIT（限制返回）。理解这个顺序才能写出正确的 SQL。比如 SELECT 里定义的别名在 WHERE 中不能用（因为 WHERE 比 SELECT 先执行），但在 ORDER BY 中可以用。' },
    ],
    diagnosis: [
      { symptom: 'SQL 子查询嵌套 4 层，一周后自己都看不懂', cause: '深层嵌套子查询可读性极差。', fix: '用 CTE（WITH 子句）拆成独立步骤并起有意义的名字。可读性优先于"聪明"的 SQL 写法。' },
      { symptom: 'SELECT 别名在 WHERE 中使用报 "column does not exist"', cause: 'SQL 执行顺序 FROM→WHERE→SELECT，WHERE 执行时 SELECT 中的别名还不存在。', fix: 'WHERE 中使用原始表达式，或用子查询/CTE 定义别名后外部引用。' },
    ],
  exercises: [
      { level: '基础', task: '写出 SQL 的完整执行顺序', hint: 'FROM 第一、LIMIT 最后', answer: 'FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT/OFFSET。理解这个顺序才能避免"WHERE 子句用 SELECT 别名"这种常见错误。' },
    ],
  },

  "fvEgtFP7xvkq_D4hYw3gz": {
    mentalModel: 'PostgreSQL 的数据类型像"乐高积木的分类盒"——每种类型是一个格子，放错格子就拼不上。PG 有最丰富的内建类型，还支持自定义类型和扩展类型（如 PostGIS 的地理类型）。',
    sections: [
      { title: '核心数据类型', content: '数值：integer/bigint/smallint（整数）、numeric/decimal（精确小数，适合金额）、real/double precision（浮点）。字符：varchar(n)/char(n)/text（推荐 text——无长度限制且性能一样）。日期时间：date/timestamp/timestamptz（推荐 timestamptz——带时区，全球业务必需）/interval。布尔：boolean。JSON：json（存原文）/jsonb（二进制存储，支持索引，推荐）。数组：int[]/text[]。其他：UUID/bytea（二进制）/inet（IP 地址）/range 类型。' },
      { title: '选类型的坑', content: '1) 金额用 numeric 不要用 float——float 有精度损失（0.1+0.2 ≠ 0.3）2) 字符串优先用 text——varchar(n) 的 n 限制没有性能优势 3) 时间用 timestamptz——存的是 UTC，展示时按客户端时区转换 4) JSON 用 jsonb——可以建 GIN 索引加速查询。' },
    ],
    diagnosis: [
      { symptom: '用 float 存金额，月底对账发现差了几毛钱', cause: 'float 使用 IEEE 754 二进制浮点表示，无法精确表示 0.1 等十进制小数。10 万笔交易累加后误差可达数元。', fix: '将金额列改为 numeric(18,2)：ALTER TABLE transactions ALTER COLUMN amount TYPE numeric(18,2); 或存储分为单位用 integer。' },
      { symptom: 'timestamptz 查询时间少了或多了 8 小时', cause: 'timestamptz 存储 UTC，显示时按客户端时区转换。客户端时区和预期不一致。', fix: "SHOW timezone; SET timezone = 'Asia/Shanghai'; 应用连接初始化时统一 SET timezone = 'UTC'; 应用层做本地化转换。" },
    ],
  exercises: [
      { level: '基础', task: '为什么存金额不能用 float/double？在 psql 中验证', hint: 'SELECT 0.1::float + 0.2::float;', answer: 'SELECT 0.1::float + 0.2::float → 0.30000000000000004。这是浮点数的二进制表示问题。用 numeric：SELECT 0.1::numeric + 0.2::numeric → 0.3。' },
    ],
  },

  "G2NKhjlZqAY9l32H0LPNQ": {
    mentalModel: '增删改查（CRUD）就是数据库的"四种基本动作"——INSERT（进货上架）、SELECT（查货）、UPDATE（改标签）、DELETE（下架处理）。掌握这四种操作，你就能操作任何数据。',
    handsOn: [
      { title: 'CRUD 完整示例', cmd: `psql -U postgres -d mydb << 'EOF'
CREATE TABLE products (id SERIAL PRIMARY KEY, name TEXT, price NUMERIC(10,2), stock INT);
INSERT INTO products (name, price, stock) VALUES ('键盘', 299.00, 100), ('鼠标', 99.00, 200);
SELECT * FROM products WHERE stock > 50;
UPDATE products SET price = 279.00 WHERE name = '键盘';
DELETE FROM products WHERE stock = 0;
SELECT * FROM products;
EOF`, output: 'id | name | price | stock\n 1 | 键盘 | 299.00 | 100\n 2 | 鼠标 |  99.00 | 200\n(update 1 row)\n(delete 0 rows)\nid | name | price | stock\n 1 | 键盘 | 279.00 | 100\n 2 | 鼠标 |  99.00 | 200', explain: 'CREATE TABLE 建表，INSERT 插入多行，SELECT 查询（WHERE 过滤），UPDATE 更新（WHERE 限制范围——没有 WHERE 会更新所有行！），DELETE 删除（同样注意 WHERE）。' },
    ],
    diagnosis: [
      { symptom: '执行 UPDATE 后发现所有行的数据都被改了', cause: '忘了写 WHERE 子句——UPDATE 不加 WHERE 会更新全表。', fix: '先在事务中执行：BEGIN; UPDATE ...; 确认结果后用 COMMIT 提交，有问题就 ROLLBACK。生产环境更要小心：先用 SELECT 确认 WHERE 条件的行数，再执行 UPDATE。' },
    ],
    exercises: [
      { level: '基础', task: '写 INSERT ... ON CONFLICT 实现"存在则更新，不存在则插入"', hint: 'ON CONFLICT (unique_column) DO UPDATE SET ...', answer: "INSERT INTO products (name, price, stock) VALUES ('键盘', 259.00, 150) ON CONFLICT (name) DO UPDATE SET price = EXCLUDED.price, stock = EXCLUDED.stock; 这叫 UPSERT（UPdate or inSERT）。" },
    ],
  },

  "Hura0LImG9pyPxaEIDo3X": {
    mentalModel: 'JOIN 就像"拼图"——把多张表的行按关联条件拼在一起。INNER JOIN 是只取两边都能拼上的，LEFT JOIN 是左边全要、右边拼得上就拼、拼不上填空。',
    sections: [
      { title: 'JOIN 类型详解', content: 'INNER JOIN：只返回两表都匹配的行。LEFT JOIN：返回左表所有行，右表匹配不上的填 NULL（最常用——如"用户+他的订单"，没有订单的用户也行）。RIGHT JOIN：和 LEFT 相反，很少用。FULL OUTER JOIN：两边都保留。CROSS JOIN：笛卡尔积——每行和对方每行都组合，很少故意用。关键：JOIN 条件放 ON 还是 WHERE？INNER JOIN 效果一样，LEFT JOIN 必须放 ON——WHERE 会过滤掉 NULL 行。' },
    ],
    handsOn: [
      { title: 'LEFT JOIN 示例', cmd: `psql -c "SELECT u.name, o.total FROM users u LEFT JOIN orders o ON u.id = o.user_id"`, output: 'name  | total\nAlice |  99.00\nBob   |   NULL\nCarol | 150.00', explain: 'Bob 没有订单——LEFT JOIN 保留了他，total 为 NULL。如果用 INNER JOIN，Bob 这行不会出现。这就是 LEFT JOIN 的核心价值。' },
    ],
    diagnosis: [
      { symptom: 'LEFT JOIN 后加 WHERE 条件结果与预期不符', cause: 'WHERE 在 LEFT JOIN 后执行——右表列为 NULL 被 WHERE 过滤掉，LEFT JOIN 退化成了 INNER JOIN。', fix: "将右表过滤条件写在 ON 子句中：LEFT JOIN orders o ON u.id=o.user_id AND o.status='active'。不写在 WHERE 中。" },
      { symptom: '两个大表 JOIN 极慢，EXPLAIN 显示 Nested Loop', cause: '统计信息过期——优化器以为某表很小选了 Nested Loop。或 JOIN 列没索引。', fix: 'ANALYZE 两表更新统计。确保 JOIN 列有索引。两个大表 JOIN 应走 Hash Join 或 Merge Join。' },
    ],
  exercises: [
      { level: '进阶', task: '用 JOIN 找出"下过单但从未付过款"的用户', hint: 'orders LEFT JOIN payments', answer: "SELECT DISTINCT u.name FROM users u JOIN orders o ON u.id=o.user_id LEFT JOIN payments p ON o.id=p.order_id WHERE p.id IS NULL。LEFT JOIN payments 后 p.id IS NULL 表示有订单但没有对应付款记录。" },
    ],
  },

  "fsZvmH210bC_3dBD_X8-z": {
    mentalModel: 'CTE（Common Table Expression，WITH 查询）就是 SQL 的"临时变量"——先把一个查询结果起个名字存起来，后面重复引用。就像写作文时先把关键数据摘出来列在旁边，写正文时随时引用。',
    sections: [
      { title: 'CTE 的使用', content: 'WITH regional_sales AS (SELECT region, SUM(amount) AS total FROM orders GROUP BY region) SELECT region, total FROM regional_sales WHERE total > 10000。CTE 让复杂查询可读性暴增——不要嵌套 5 层子查询（谁也看不懂），用 CTE 一层层来。递归 CTE 更强大：WITH RECURSIVE 可以遍历树结构（组织架构/分类层级/评论回复）。性能注意：PG 12 之前 CTE 是优化边界（CTE 内部和外部的 WHERE 不穿透），PG 12+ 自动内联简单 CTE。' },
    ],
    diagnosis: [
      { symptom: 'CTE 查询比直接写子查询慢很多', cause: 'PG 12 之前 CTE 是"优化栅栏"——CTE 内外 WHERE 条件不穿透，先物化全部结果再过滤。', fix: '升级 PG 12+（CTE 自动内联）。PG 12+ 可用 MATERIALIZED/NOT MATERIALIZED 提示。或改写为子查询。' },
      { symptom: '递归 CTE 跑几分钟不停止，CPU 100%', cause: '递归终止条件有问题导致无限循环，或数据中存在循环引用（A 的 manager 是 B，B 的 manager 是 A）。', fix: "添加递归深度限制：WHERE depth < 20。PG 14+ 用 CYCLE 检测。设 statement_timeout='30s'。" },
    ],
  exercises: [
      { level: '进阶', task: '用递归 CTE 查询组织架构树（员工→上级→上上级→...）', hint: 'WITH RECURSIVE org AS (...)', answer: "WITH RECURSIVE org AS (SELECT id, name, manager_id, 1 AS level FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, e.manager_id, o.level+1 FROM employees e JOIN org o ON e.manager_id = o.id) SELECT * FROM org ORDER BY level; 递归 CTE 从根节点（CEO）出发，逐层往下找所有下属。" },
    ],
  },

  "ghgyAXJ72dZmF2JpDvu9U": {
    mentalModel: 'PG 事务是你的"后悔药+安全网"——BEGIN 开启一段操作，发现不对可以 ROLLBACK 撤销一切，确认无误 COMMIT 永久保存。没有事务就像没有 Ctrl+Z 的编辑器。',
    sections: [
      { title: '事务隔离级别', content: 'PG 默认 READ COMMITTED（读已提交）——一个事务内每次 SELECT 看到的是已提交的最新数据。REPEATABLE READ（可重复读）——事务内的 SELECT 看到的是事务开始时的快照，不会被其他事务的提交影响。SERIALIZABLE（串行化）——最严格，事务看起来像串行执行。PG 的 REPEATABLE READ 实际已经防了幻读（和别的数据库不同）。隔离级别越高，并发性能越低。绝大多数场景 READ COMMITTED 就够了。' },
    ],
    diagnosis: [
      { symptom: '简单的 UPDATE 等了几分钟才执行', cause: '另一个事务持有行锁未提交——开发者 BEGIN; UPDATE ...; 忘了 COMMIT。', fix: "SELECT pid, now()-xact_start AS age, query FROM pg_stat_activity WHERE state='idle in transaction'; 找到后用 pg_terminate_backend(pid) 杀掉。设置 idle_in_transaction_session_timeout。" },
      { symptom: '应用日志显示 "could not serialize access due to concurrent update"', cause: '使用 SERIALIZABLE 隔离级别，并发事务冲突后 PG 主动回滚了其中一个。', fix: '降为 READ COMMITTED（大多数应用不需要 SERIALIZABLE）。应用代码捕获 serialization_failure(40001) 并重试事务。' },
    ],
  exercises: [
      { level: '进阶', task: '设计一个转账事务，确保扣 A 加 B 的原子性', hint: 'BEGIN; UPDATE A; UPDATE B; COMMIT;', answer: 'BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1 AND balance >= 100; UPDATE accounts SET balance = balance + 100 WHERE id = 2; COMMIT; 如果 A 余额不够，第一个 UPDATE 不影响行，第二个 UPDATE 也不会执行。用 ROLLBACK 回滚。' },
    ],
  },

  "fTsoMSLcXU1mgd5-vekbT": {
    mentalModel: 'Lateral Join 是"逐行调用函数"——普通 JOIN 是两张表的行列配对，LATERAL JOIN 是每处理左边一行就去"问一下"右边的子查询。就像每见一个客户就去查一下他的专属折扣。',
    sections: [
      { title: 'LATERAL 的使用场景', content: 'LATERAL 允许子查询引用左边 FROM 列表中的列。典型场景：SELECT u.name, recent.* FROM users u, LATERAL (SELECT * FROM orders WHERE user_id = u.id ORDER BY created_at DESC LIMIT 3) recent;——对每个用户查最近 3 个订单。普通子查询做不到（不能引用外部 u.id）。等价于 LEFT JOIN LATERAL：保留没有订单的用户。' },
    ],
    diagnosis: [
      { symptom: 'LATERAL JOIN 查询极慢，子查询被反复执行', cause: 'LATERAL 子查询对左边每行都执行一次——左边 100 万行子查询执行 100 万次。', fix: '子查询中加 LIMIT 控制返回行数。评估是否可用窗口函数（ROW_NUMBER() OVER (PARTITION BY)）替代 LATERAL。' },
      { symptom: 'LATERAL JOIN 的列在外部 SELECT 报 "column does not exist"', cause: 'LATERAL 子查询的别名引用错误。', fix: '正确语法：SELECT u.name, recent.* FROM users u, LATERAL (SELECT ...) recent; 子查询后面的别名是 recent，用 recent.* 引用。' },
    ],
  exercises: [
      { level: '进阶', task: '用 LATERAL 查询每个分类中价格最高的 2 个商品', hint: 'FROM categories c, LATERAL (SELECT ... FROM products WHERE category_id = c.id ... LIMIT 2)', answer: 'SELECT c.name, top.* FROM categories c, LATERAL (SELECT name, price FROM products WHERE category_id = c.id ORDER BY price DESC LIMIT 2) top; 对每个分类执行一次子查询，性能好于用 ROW_NUMBER() OVER (PARTITION BY) 再过滤的写法。' },
    ],
  },
};