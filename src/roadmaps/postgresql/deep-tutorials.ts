import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  // ═══════════════════════════════════════════════
  // Node 1: Queries / 查询
  // ═══════════════════════════════════════════════
  "xVocG4LuFdtphwoOxiJTa": {
    mentalModel: 'SQL 查询就像去图书馆借书：你要说清楚"从哪个书架（FROM）、想要什么信息（SELECT）、符合什么条件（WHERE）"，图书管理员（查询优化器）会自动找到最快的方式帮你取书。',
    handsOn: [
      {
        title: '最简单的查询 — 查看所有数据',
        cmd: "SELECT * FROM pg_database;",
        output: '  oid  |    datname     | datdba | encoding | datcollate |  datctype  | datistemplate | datallowconn | datconnlimit | datlastsysoid | datfrozenxid | datminmxid | dattablespace |                        datacl\n-------+----------------+--------+----------+------------+------------+---------------+--------------+--------------+---------------+--------------+------------+---------------+-------------------------------------------------------\n     5 | postgres       |     10 |        6 | zh_CN.UTF-8| zh_CN.UTF-8| f             | t            |           -1 |         14032 |          479 |          1 |          1663 |\n 16384 | my_test_db     |     10 |        6 | zh_CN.UTF-8| zh_CN.UTF-8| f             | t            |           -1 |         14032 |          479 |          1 |          1663 |',
        explain: 'pg_database 是 PostgreSQL 的系统目录表，存储所有数据库的元数据。SELECT * 返回所有列。注意这是一个只读系统视图，普通用户只能看到自己有权限的数据库。datistemplate=f 表示普通数据库，=t 表示模板数据库。',
      },
      {
        title: '带条件筛选的查询',
        cmd: "SELECT datname, encoding, datallowconn FROM pg_database WHERE datistemplate = false;",
        output: '  datname   | encoding | datallowconn\n------------+----------+--------------\n postgres   |        6 | t\n my_test_db |        6 | t',
        explain: 'WHERE 子句过滤只返回非模板数据库。encoding=6 表示 UTF-8（通过 SELECT pg_encoding_to_char(6) 可验证）。datallowconn=t 表示允许连接。这是日常查询的基本模式：投影（选列）+ 选择（筛行）。',
      },
      {
        title: '排序与限制',
        cmd: "SELECT datname, pg_size_pretty(pg_database_size(datname)) AS size FROM pg_database ORDER BY pg_database_size(datname) DESC LIMIT 5;",
        output: '  datname   |  size\n------------+---------\n postgres   | 128 MB\n template1  | 8433 kB\n template0  | 8401 kB',
        explain: 'ORDER BY 对结果排序，DESC 降序。LIMIT 5 只返回前 5 行。pg_size_pretty() 把字节数转成人类可读格式（8153 kB、128 MB）。AS size 给计算列起别名。',
      },
      {
        title: '聚合查询 — 统计信息',
        cmd: "SELECT datistemplate, count(*) AS cnt, pg_size_pretty(sum(pg_database_size(datname))) AS total_size FROM pg_database GROUP BY datistemplate;",
        output: ' datistemplate | cnt | total_size\n---------------+-----+------------\n f             |   2 | 137 MB\n t             |   1 | 8433 kB',
        explain: 'GROUP BY 按 datistemplate 分组，count(*) 统计每组行数，sum() 汇总大小。这展示了 SQL 的聚合能力：一行 SQL 能完成"分组统计"这种在其他语言需要写循环才能完成的任务。',
      },
    ],
    sections: [
      {
        title: 'SQL 查询的执行顺序',
        content: '虽然 SQL 书写顺序是 SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY，但数据库实际的执行顺序完全不同。PostgreSQL 的查询执行管线是：FROM（定位表和连接）→ WHERE（行级过滤）→ GROUP BY（分组）→ HAVING（组级过滤）→ SELECT（投影列和计算表达式）→ ORDER BY（排序）→ LIMIT（截断）。\n\n理解这个顺序很重要。比如你不能在 WHERE 中使用 SELECT 中定义的别名（因为 WHERE 先执行），但可以在 ORDER BY 中使用（因为 ORDER BY 后执行）。例子：SELECT salary * 12 AS annual FROM employees WHERE salary > 5000（WHERE 不能用 annual）；SELECT salary * 12 AS annual FROM employees ORDER BY annual（ORDER BY 可以用 annual）。',
      },
      {
        title: '查询类型分类',
        content: 'PostgreSQL 的查询分为几大类：\n\n1. **数据查询（DQL）**：SELECT 语句，最常用的查询类型。可以包含子查询、CTE（WITH 子句）、窗口函数、集合操作（UNION/INTERSECT/EXCEPT）等高级特性。\n\n2. **数据操作（DML）**：INSERT、UPDATE、DELETE。这些语句也使用类似 SELECT 的筛选逻辑（WHERE 子句），但会修改数据。INSERT ... RETURNING 可以在插入后立即返回生成的值（如自增 ID）。\n\n3. **数据定义（DDL）**：CREATE、ALTER、DROP。修改表结构、索引、视图等数据库对象。DDL 在 PostgreSQL 中是事务安全的——可以在事务中 ALTER TABLE，出错了回滚。\n\n4. **数据控制（DCL）**：GRANT、REVOKE。管理权限。',
      },
      {
        title: '查询计划 — 数据库如何执行查询',
        content: '每条 SQL 提交后，PostgreSQL 不会直接执行。它经过：解析器（把 SQL 文本转成语法树）→ 分析器（语义检查，解析表名、列名）→ 重写器（应用规则和视图展开）→ 规划器（生成多个执行计划，估算代价）→ 执行器（执行选中的计划）。\n\nEXPLAIN 命令可以查看查询计划。EXPLAIN ANALYZE 会真正执行并给出实际耗时。例如 EXPLAIN SELECT * FROM users WHERE email = \'test@example.com\'; 会显示是使用索引扫描（Index Scan）还是全表扫描（Seq Scan）。这是性能调优的起点。',
      },
    ],
    diagnosis: [
      {
        symptom: '查询结果行为空但确定表里有数据',
        cause: 'WHERE 条件过滤掉了所有行。可能是条件写错了（如 WHERE status = "active" 用了双引号而不是单引号），或者条件中 NULL 的处理不当。',
        fix: '先跑 SELECT * FROM table LIMIT 10 看数据长什么样。检查 WHERE 条件中 NULL 的处理：col = NULL 永远返回 NULL（不是 true），应该用 col IS NULL。检查字符串值是否用单引号。',
      },
      {
        symptom: 'SELECT * 查询很慢，但自己觉得数据量不大',
        cause: 'SELECT * 会读取所有列，如果表有 TEXT 类型的大字段或很多列，扫描的数据量远超预期。同时如果没有 WHERE 条件，是全表扫描。',
        fix: '只 SELECT 需要的列名。用 EXPLAIN (ANALYZE, BUFFERS) SELECT ... 查看实际读取的数据量和 buffer 使用情况。SELECT * 在生产代码中永远不要出现——表结构变了代码就崩。',
      },
      {
        symptom: 'ORDER BY 某个列但顺序不对（"10" 排在 "2" 前面）',
        cause: '该列是字符类型（text/varchar）而不是数字类型，字符串排序是字典序："10" < "2" 因为 "1" 的 ASCII 码小于 "2"。',
        fix: '将列转换为数字类型：ORDER BY col::integer。或在设计表时用正确的数据类型。检查列类型：\\d+ table_name。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '连接到 PostgreSQL，查询 pg_database 表，列出所有允许连接的数据库名称和编码',
        hint: 'datallowconn 列表示是否允许连接',
        answer: "SELECT datname, pg_encoding_to_char(encoding) AS charset FROM pg_database WHERE datallowconn = true;",
      },
      {
        level: '进阶',
        task: '查询每个数据库的大小（按大小降序），只显示大于 10MB 的数据库',
        hint: '使用 pg_database_size() 和 pg_size_pretty() 函数',
        answer: "SELECT datname, pg_size_pretty(pg_database_size(datname)) AS size FROM pg_database WHERE pg_database_size(datname) > 10 * 1024 * 1024 ORDER BY pg_database_size(datname) DESC;",
      },
      {
        level: '挑战',
        task: '写一个查询，统计 pg_class 系统表中每种 relkind（关系类型）的数量和总大小',
        hint: "pg_class 包含 relkind、relpages 等列，relkind 取值 r=表, i=索引, v=视图, m=物化视图, S=序列",
        answer: "SELECT CASE relkind WHEN 'r' THEN '普通表' WHEN 'i' THEN '索引' WHEN 'v' THEN '视图' WHEN 'm' THEN '物化视图' WHEN 'S' THEN '序列' ELSE relkind::text END AS relation_type, count(*) AS cnt, sum(relpages * 8192) AS total_bytes FROM pg_class GROUP BY relkind ORDER BY total_bytes DESC;",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 2: What are Relational Databases? / 什么是关系型数据库
  // ═══════════════════════════════════════════════
  "soar-NBWCr4xVKj7ttfnc": {
    mentalModel: '关系型数据库就像一张超级智能的 Excel 表格：数据按行和列整齐排列，表与表之间通过"外键"建立联系（就像 Excel 的 VLOOKUP），你可以用 SQL 语言精确地问任何问题，数据库会保证数据准确无误地持久化。',
    sections: [
      {
        title: '关系型数据库的核心思想',
        content: '关系型数据库由 E.F.Codd 在 1970 年提出，核心思想是：用"关系"（数学意义上的表）来存储一切数据。一个"关系"就是一个二维表格——行是记录（元组），列是属性（字段）。\n\n关键特征：\n1. **结构化数据**：每行有相同的列结构，每列有明确的数据类型（整数、字符串、日期等）。不像 NoSQL 可以随时改变结构。\n2. **关系**：表与表之间通过共享的值关联。例如 orders 表的 user_id 列引用 users 表的 id 列。这就是"关系"一词的来源。\n3. **SQL**：统一的查询语言。SELECT、INSERT、UPDATE、DELETE 四类操作覆盖所有数据操作需求。标准化意味着学会 SQL 可以用到任何关系型数据库（MySQL、PostgreSQL、Oracle、SQL Server）。\n4. **ACID**：原子性、一致性、隔离性、持久性——事务的四大保障。转账要么全部成功要么全部失败，不会出现只扣钱不到账的情况。',
      },
      {
        title: '关系 vs 数组 vs 文档 — 数据组织的三种哲学',
        content: '关系型数据库用表（行和列）组织数据，每行代表一个实体。这种"行列模型"天然适合大部分业务场景：用户表、订单表、商品表都自然地对应现实世界的实体。\n\n对比其他数据模型：\n\n**文档模型（MongoDB）**：数据存为 JSON 文档，可以嵌套。适合"一个实体包含全部信息"的场景（如博客文章包含评论）。但跨文档查询（类似 JOIN）能力弱。\n\n**键值模型（Redis）**：最简单的模型，key → value。极快但查询能力有限——你只能通过 key 获取整个 value，不能按 value 内部字段筛选。\n\n**图模型（Neo4j）**：数据存为节点和边，擅长复杂的关系查询（如"朋友的朋友"）。但在简单的 CRUD 场景中比关系型数据库笨重。\n\n关系型数据库的选择不是因为"先进"，而是因为它在大多数场景中提供了数据完整性和查询灵活性的最佳平衡。',
      },
      {
        title: '为什么 PostgreSQL 是"关系型"而非"纯关系型"',
        content: 'PostgreSQL 自称"世界上最先进的开源关系型数据库"，但它实际上是一个**对象-关系型**数据库（Object-Relational Database）。这意味着它扩展了传统关系型模型：\n\n1. **表继承**：子表可以从父表继承列结构，就像面向对象编程中的类继承。CREATE TABLE cities () INHERITS (locations); 后 cities 表自动拥有 locations 表的所有列。\n\n2. **自定义数据类型**：可以创建自己的复合类型、枚举类型、范围类型、域类型。CREATE TYPE mood AS ENUM (\'happy\', \'sad\', \'neutral\') 在传统 RDBMS 中是不可能的。\n\n3. **JSON/JSONB 支持**：可以在同一张表中混合使用严格的关系型列和灵活的文档型列。这是 PostgreSQL 能在 NoSQL 浪潮中保持竞争力的关键。\n\n4. **表作为类型**：每张表自动成为同名数据类型。你可以写 SELECT (SELECT * FROM users WHERE id=1).* 这种语法。',
      },
      {
        title: 'PostgreSQL 的系统目录 — 元数据的元数据',
        content: 'PostgreSQL 把"数据库的数据库"（即数据库自身的结构信息）也存储在关系表中，这就是系统目录（System Catalog）。pg_database 存所有数据库的元数据，pg_class 存所有关系和索引的元数据，pg_attribute 存所有列的元数据，pg_proc 存所有函数的元数据。\n\n这种"自描述"的设计非常强大：你可以用普通的 SELECT 语句查询数据库的结构。比如查询某张表有哪些列：SELECT column_name, data_type FROM information_schema.columns WHERE table_name = \'users\'; 这在动态 SQL 生成、数据库文档自动化等场景中非常实用。',
      },
    ],
    diagnosis: [
      {
        symptom: '表设计中大量使用了 JSON 列，查询越来越慢',
        cause: '把关系型数据库当 MongoDB 用了。虽然 PostgreSQL 支持 JSONB 并且可以对其创建 GIN 索引，但如果 90% 的数据都在 JSON 列中，关系型数据库的优势（类型安全、约束、JOIN）就全丢了。',
        fix: '分析 JSON 中的字段是否经常被查询/过滤/排序。如果是，把这些字段提升到独立的列中。保留 JSON 列用于真正结构不固定的数据（如用户设置、日志详情）。合理的数据组织是：结构固定的字段用列，结构可变的用 JSONB。',
      },
      {
        symptom: '读操作多、写操作少，但数据库仍然很慢',
        cause: '可能是没有索引，或者索引设计不合理。关系型数据库不是"有数据就快"——需要正确的索引配合查询模式。',
        fix: '用 EXPLAIN ANALYZE 查看查询计划。对 WHERE、JOIN ON、ORDER BY 中常用的列创建索引。注意索引不是越多越好——每个索引都会拖慢写操作（INSERT/UPDATE/DELETE 要同时更新索引）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 PostgreSQL 中所有用户创建的表（排除系统表），显示表名和所属 schema',
        hint: '查询 pg_tables 系统视图',
        answer: "SELECT schemaname, tablename FROM pg_tables WHERE schemaname NOT IN ('pg_catalog', 'information_schema') ORDER BY schemaname, tablename;",
      },
      {
        level: '进阶',
        task: '查询某张表的所有列信息：列名、数据类型、是否可为空、默认值',
        hint: '使用 information_schema.columns',
        answer: "SELECT column_name, data_type, is_nullable, column_default, character_maximum_length FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'your_table_name' ORDER BY ordinal_position;",
      },
      {
        level: '挑战',
        task: '写一个查询，找出数据库中没有索引的表（可能影响查询性能）',
        hint: 'pg_class 的 relkind=\'r\' 表示表，pg_index 记录索引信息。注意排除系统表',
        answer: "SELECT schemaname, tablename FROM pg_tables WHERE schemaname NOT IN ('pg_catalog', 'information_schema') AND (schemaname||'.'||tablename) NOT IN (SELECT schemaname||'.'||tablename FROM pg_indexes WHERE schemaname NOT IN ('pg_catalog', 'information_schema')) ORDER BY schemaname, tablename;",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 3: Data Types / 数据类型
  // ═══════════════════════════════════════════════
  "4Pw7udOMIsiaKr7w9CRxc": {
    mentalModel: '数据类型是"容器的形状"——方形容器装方砖，圆形容器装圆柱。选对类型就像选对了容器，能完美适配数据，选错了就像强迫方砖塞进圆孔，浪费空间、查询变慢、还会出血（溢出、截断）。',
    handsOn: [
      {
        title: '查看 PostgreSQL 支持的所有数据类型',
        cmd: "SELECT typname, typlen, typtype FROM pg_type WHERE typtype = 'b' AND typname NOT LIKE '\\\\_%' ORDER BY typname LIMIT 20;",
        output: '  typname   | typlen | typtype\n------------+--------+---------\n bool       |      1 | b\n bytea      |     -1 | b\n char       |     -1 | b\n date       |      4 | b\n float4     |      4 | b\n float8     |      8 | b\n int2       |      2 | b\n int4       |      4 | b\n int8       |      8 | b\n numeric    |     -1 | b',
        explain: 'pg_type 列出所有数据类型（b=base type 基础类型）。typlen 是固定长度（-1 表示变长）。int2 = 2 字节（-32768 到 +32767），int4 = 4 字节（约 ±21 亿），int8 = 8 字节（约 ±9.2×10^18）。选错大小要么浪费空间要么溢出。',
      },
      {
        title: '整数类型的实际存储对比',
        cmd: "CREATE TEMP TABLE type_size_test (a smallint, b integer, c bigint) ON COMMIT DROP;\nINSERT INTO type_size_test SELECT generate_series(1,10000);\nSELECT pg_size_pretty(pg_total_relation_size('type_size_test')) AS total_size;",
        output: ' total_size\n------------\n 512 kB',
        explain: 'smallint 2 字节，integer 4 字节，bigint 8 字节。10000 行，smallint 列占 20KB，integer 列占 40KB，bigint 列占 80KB。虽然看起来差别不大，但在亿级表中，选错类型多占几十 GB。这就是为什么计数器用 integer 就够了（21 亿足够），但主键通常用 bigint（预防溢出）。',
      },
      {
        title: '字符类型对比 — varchar vs text vs char',
        cmd: "CREATE TEMP TABLE char_test (c_char char(100), c_varchar varchar(100), c_text text) ON COMMIT DROP;\nINSERT INTO char_test VALUES ('hello', 'hello', 'hello');\nSELECT pg_column_size(c_char) AS char_size, pg_column_size(c_varchar) AS varchar_size, pg_column_size(c_text) AS text_size FROM char_test;",
        output: ' char_size | varchar_size | text_size\n-----------+--------------+-----------\n       100 |            6 |         6',
        explain: 'char(100) 固定占用 100 字节（空格填充），varchar(100) 和 text 只存储实际内容（hello=5 字节+1 字节长度头=6 字节）。在 PostgreSQL 中，text 和 varchar 性能完全相同，所以 **永远不要用 char(n)**，用 text 或 varchar。唯一的区别是 varchar(n) 有长度检查。',
      },
      {
        title: 'JSONB 的强大 — 索引 JSON 字段',
        cmd: "CREATE TEMP TABLE products (id serial PRIMARY KEY, data jsonb) ON COMMIT DROP;\nINSERT INTO products (data) VALUES ('{\"name\": \"iPhone\", \"price\": 6999, \"tags\": [\"phone\", \"apple\"]}'),\n('{\"name\": \"MacBook\", \"price\": 12999, \"tags\": [\"laptop\", \"apple\"]}'),\n('{\"name\": \"ThinkPad\", \"price\": 8999, \"tags\": [\"laptop\", \"lenovo\"]}');\nCREATE INDEX idx_products_data ON products USING gin (data);\nSELECT data->>'name' AS name, data->>'price' AS price FROM products WHERE data @> '{\"tags\": [\"laptop\"]}';",
        output: '  name   | price\n---------+-------\n MacBook | 12999\n ThinkPad| 8999',
        explain: 'JSONB 是 PostgreSQL 的"杀手级"功能。@> 是"包含"运算符，检查左边的 JSON 是否包含右边的 JSON。GIN 索引使 JSONB 查询像普通列一样快。->> 运算符以文本形式提取键值。这是 PostgreSQL 比 MySQL 强的地方——NoSQL 的功能关系型的 ACID。',
      },
    ],
    sections: [
      {
        title: '数值类型的选择策略',
        content: 'PostgreSQL 的数值类型分为三类：\n\n**整数类型**：smallint（2 字节, ±32767）、integer（4 字节, ±21 亿）、bigint（8 字节, ±9.2×10^18）。选择原则：能用 smallint 不用 integer，能用 integer 不用 bigint。自增主键用 bigint（integer 在活跃表中可能不够）。\n\n**精确小数**：numeric(precision, scale)，即 decimal。用于金额、汇率等需要精确计算的场景。numeric 使用软件计算（不是 CPU 原生），所以比 float 慢很多。内部存储是变长的，精度越高存储越大。\n\n**浮点数**：real（4 字节, 6 位精度）、double precision（8 字节, 15 位精度）。用于科学计算、统计。warning: 0.1 + 0.2 != 0.3（IEEE 754 精度问题）。绝对不要用浮点数存金额。\n\n**序列**：smallserial（2 字节）、serial（4 字节）、bigserial（8 字节）。底层是 integer + 自动创建的序列对象。bigserial 是最安全的选择。',
      },
      {
        title: '日期/时间类型的陷阱与最佳实践',
        content: 'PostgreSQL 的日期/时间类型体系在 SQL 标准中是数一数二的完整：\n\n- **date**：仅日期（4 字节）。范围 4713 BC 到 5874897 AD。适合存储出生日期、订单日期。\n- **time**：仅时间（8 字节）。适合存储营业时间、闹钟。通常用 time without time zone 避免时区混淆。\n- **timestamp**：日期+时间（8 字节）。关键选择：timestamp（without time zone）vs timestamptz（with time zone）。\n\n**最重要的规则**：永远用 timestamptz。原因：\n1. timestamptz 存储时转为 UTC，查询时转为客户端时区。一条数据，全球用户看到各自的本地时间。\n2. timestamp 不处理时区，"2024-01-01 12:00:00" 是北京时间还是纽约时间？不知道。\n3. 如果非要用 timestamp，确保你的应用中所有时间都是同一个时区（通常是 UTC），在应用层转换。\n\n时区陷阱案例：服务器在美国（UTC-8），用户在中国（UTC+8）。存 timestamp \'2024-01-01 18:00:00\'（北京时间）在美国时间显示为 \'2024-01-01 02:00:00\'。用 timestamptz 存 \'2024-01-01 18:00:00 Asia/Shanghai\' 则自动转为 UTC \'2024-01-01 10:00:00\'。',
      },
      {
        title: '数组、范围、枚举 — PostgreSQL 的高级类型',
        content: 'PostgreSQL 支持一些其他数据库没有的高级类型：\n\n**数组**：integer[] 表示整数数组。可以写 SELECT ARRAY[1,2,3] || ARRAY[4,5] 得到 {1,2,3,4,5}。可以用 ANY() 和 @>（包含）运算符高效查询数组。例如 tags @> ARRAY[\'sql\'] 查询包含 sql 标签的行。\n\n**范围类型**：int4range、numrange、tsrange、daterange 等。例如 int4range(10, 20, \'[)\') 表示 [10, 20)。可以用 @>（包含点）和 &&（重叠）查询。非常适合时间段预约系统：SELECT * FROM reservations WHERE time_range && tsrange(\'2024-01-01 10:00\', \'2024-01-01 12:00\') 查询与该时间段有重叠的预约。\n\n**枚举**：CREATE TYPE mood AS ENUM (\'happy\', \'sad\', \'neutral\')。比用 varchar 存状态更好——占 4 字节而非 varchar 的长度，有类型检查（不能插入 \'angry\'），排序按枚举定义顺序。',
      },
    ],
    diagnosis: [
      {
        symptom: 'SUM(amount) 结果总是差几分钱',
        cause: '使用了 float/double precision 存储金额。浮点数无法精确表示十进制的 0.1，导致累加后出现微小误差。10 万笔交易后误差可能达到几毛钱。',
        fix: '将金额列改为 numeric(18,2) 或 integer（以分为单位）。ALTER TABLE transactions ALTER COLUMN amount TYPE numeric(18,2); 如果已有大量数据，迁移前备份额外注意浮点数转 numeric 的舍入问题。',
      },
      {
        symptom: '往 timestamp 列插入时间后，查询时发现时间少了/多了 8 小时',
        cause: '混淆了 timestamp 和 timestamptz。timestamp 不存储时区信息，客户端连接时区的变化影响显示。',
        fix: '统一使用 timestamptz。如果是存量数据，用 ALTER COLUMN ... TYPE timestamptz USING column_name AT TIME ZONE \'Asia/Shanghai\' 转换。检查应用代码中所有时间相关的逻辑。',
      },
      {
        symptom: 'text 列存储了实际上应该是整数的数据，ORDER BY 排序错误',
        cause: '类型选择错误——用 text 存数字。"10" 在字符串排序中排在 "2" 前面（字典序）。',
        fix: '将列改为 integer：ALTER TABLE t ALTER COLUMN c TYPE integer USING c::integer; 用 USING 子句指定转换方式。如果有非数字无法转换的行，会报错。先用 UPDATE 清理数据。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个包含各种数据类型列的表：整数、字符串、日期、布尔值、JSONB，并插入一条测试数据',
        hint: 'CREATE TABLE ... (col_name type, ...)',
        answer: "CREATE TEMP TABLE data_types_test (id serial PRIMARY KEY, name text NOT NULL, age smallint CHECK (age > 0 AND age < 200), salary numeric(12,2), birth_date date, is_active boolean DEFAULT true, created_at timestamptz DEFAULT now(), tags text[], extra jsonb);\nINSERT INTO data_types_test (name, age, salary, birth_date, tags, extra) VALUES ('Alice', 30, 50000.00, '1994-06-15', ARRAY['sql','postgres'], '{\"department\": \"engineering\"}') RETURNING *;",
      },
      {
        level: '进阶',
        task: '创建一个预约系统的 reservation 表，使用 tsrange 类型存储时间范围，插入几条数据，然后查询有重叠的预约',
        hint: 'tsrange 用 && 运算符检查重叠',
        answer: "CREATE TEMP TABLE reservations (id serial PRIMARY KEY, room text, time_slot tsrange, EXCLUDE USING gist (room WITH =, time_slot WITH &&));\nINSERT INTO reservations (room, time_slot) VALUES ('A', tsrange('2024-01-01 09:00', '2024-01-01 10:00')), ('A', tsrange('2024-01-01 09:30', '2024-01-01 10:30')), ('B', tsrange('2024-01-01 09:30', '2024-01-01 10:30'));\n-- room A 的冲突\nSELECT a.id, b.id FROM reservations a, reservations b WHERE a.room = b.room AND a.id < b.id AND a.time_slot && b.time_slot;",
      },
      {
        level: '挑战',
        task: '创建一个员工表，使用复合类型和数组类型，例如每个员工有多个电话号码和地址。写查询按特定类型的电话号码筛选',
        hint: '先 CREATE TYPE phone AS (type text, number text); 然后 phone[]',
        answer: "CREATE TYPE phone AS (type text, number text);\nCREATE TYPE address AS (street text, city text, zip text);\nCREATE TEMP TABLE employees (id serial PRIMARY KEY, name text, phones phone[], addresses address[]);\nINSERT INTO employees (name, phones, addresses) VALUES ('Bob', ARRAY[ROW('mobile','13800001111')::phone, ROW('office','010-12345678')::phone], ARRAY[ROW('123 Main St','Beijing','100000')::address]);\n-- 找到所有有 mobile 电话的员工\nSELECT name, (unnest(phones)).* FROM employees WHERE EXISTS (SELECT 1 FROM unnest(phones) p WHERE p.type = 'mobile');",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 4: RDBMS Benefits and Limitations / RDBMS 优缺点
  // ═══════════════════════════════════════════════
  "p3AmRr_y_ZBKzAU5eh7OU": {
    mentalModel: 'RDBMS 就像银行的保险库——数据整齐存放、有严格的安全措施（ACID）、每笔交易都有账本记录（WAL）、永远不会丢数据。但缺点也是"太严格"：存一把散装的钥匙也要填表格、找东西需要排队（查询开销）。',
    sections: [
      {
        title: 'RDBMS 的三大核心优势',
        content: '**1. 数据完整性保障（最强优势）**\n\n关系型数据库通过约束机制保证数据永远处于一致状态。NOT NULL 保证必填字段不为空，UNIQUE 保证值不重复，FOREIGN KEY 保证引用完整性（订单必须属于一个存在的用户），CHECK 保证业务规则（年龄 >= 0）。这些约束在数据库层面执行，应用层不可能绕过——即使后端代码有 bug，数据库也不会存储脏数据。\n\n相比之下，MongoDB 的"schema-less"设计在灵活的同时也放弃了这层保障。约束逻辑完全在应用层，不同的代码路径可能导致不一致的数据状态。\n\n**2. 强大的查询能力**\n\nSQL 是声明式语言——你描述你想要什么，数据库自己决定怎么做。复杂的多表 JOIN、子查询、窗口函数、递归 CTE、聚合分析都可以在一条 SQL 中完成。数据库优化器会根据统计信息和索引自动选择最优执行计划。\n\n这是 NoSQL 最大的短板：MongoDB 的聚合管道虽然强大但复杂场景远不如 SQL 简洁；Redis 根本不能做复杂查询；Elasticsearch 的查询 DSL 学习曲线陡峭。\n\n**3. 成熟的事务支持**\n\nACID 是关系型数据库的基石。转账操作——从 A 账户扣 100 元，往 B 账户加 100 元——必须作为一个原子操作：要么全部成功，要么全部回滚。在 NoSQL 中实现同等隔离级别通常需要应用层代码（如两阶段提交），复杂且容易出错。',
      },
      {
        title: 'RDBMS 的局限性',
        content: '**1. 水平扩展困难（最痛苦的限制）**\n\n关系型数据库主要是单机架构（即使有主从复制，写操作还是在一台机器上）。数据量超过几 TB 后，单机无法承载。分库分表（Sharding）需要应用层改造，SQL 的 JOIN 跨越分片几乎不可能。\n\nNoSQL（如 Cassandra、MongoDB）天然支持水平扩展——加节点自动分配数据，查询自动路由到对应分片。这是 NoSQL 存在的最大理由。\n\n**2. Schema 的刚性**\n\nALTER TABLE ADD COLUMN 在大表上可能锁表很久。在快速迭代的产品中，频繁改表结构是常态。虽然 PostgreSQL 现在支持 ADD COLUMN ... DEFAULT 不锁表，但修改列类型或删除列仍然代价高昂。\n\n**3. 对象模型不匹配（Impedance Mismatch）**\n\n开发用的是面向对象语言（User 是一个类，有 name、email、orders 列表），但数据库存的是扁平的表格。"User 有多个 Order"需要用 FOREIGN KEY + JOIN 来表达，比文档型 NoSQL 的嵌套文档（{user: {name: "Alice", orders: [{...}, {...}]}}）间接得多。ORM（Object-Relational Mapping）框架（Hibernate、Prisma、GORM）就是为解决这个不匹配而生的，但 ORM 本身就是另一层复杂性。\n\n**4. 全文搜索和模糊查询能力弱**\n\nLIKE \'%keyword%\' 不走索引，大表上极慢。虽然 PostgreSQL 有 pg_trgm 和全文搜索（tsvector），但和专门的搜索引擎（Elasticsearch）相比差距明显。这是 Elasticsearch 和 PostgreSQL 共存于很多架构中的原因。',
      },
      {
        title: 'PostgreSQL 如何突破传统 RDBMS 的限制',
        content: 'PostgreSQL 在努力消解传统 RDBMS 的很多不足：\n\n1. **JSONB 与 GIN 索引**：在关系型表中灵活存储半结构化数据，兼得结构的严谨和文档的灵活。\n\n2. **水平扩展方案**：Citus 扩展把 PostgreSQL 变成分布式数据库，支持跨多节点的分片和分布式查询。Patroni 做高可用，pgbouncer 做连接池。虽然不如 MongoDB 的原生分片丝滑，但基本可用。\n\n3. **PgRouting**：图路由算法。**PostGIS**：地理空间数据处理（比专门的空间数据库还强）。**pgvector**：向量搜索（AI embedding 相似度查询）。**pg_cron**：定时任务。\n\n4. **分区表（Partitioning）**：把一张大表透明地拆成多个物理分片（按日期、范围、列表等），查询时自动只扫描相关分区。\n\n5. **FDW（Foreign Data Wrapper）**：让 PostgreSQL 可以查询其他数据库（MySQL、MongoDB、甚至 CSV 文件）就像查询本地表一样。这是"数据联邦"的能力。',
      },
    ],
    diagnosis: [
      {
        symptom: '单表数据量超过 5 千万行，查询变慢，即使有索引也慢',
        cause: '超过了单表的性能边界。索引本身也变得很大（几个 GB），B-tree 深度增加导致更多 IO。VACUUM 在这么大的表上也越来越慢。',
        fix: '实施方案：1) 使用分区表（如按月分区）；2) 考虑冷热数据分离——热数据（最近 3 个月）留在主表，冷数据迁移到归档表或对象存储；3) 如果业务允许，进行水平分片。4) 检查是否可以做预聚合/物化视图减少实时查询负载。',
      },
      {
        symptom: '微服务架构中每个服务都需要 JOIN 对方的数据，但数据库是隔离的',
        cause: '数据库保持了严格的引用完整性（FOREIGN KEY 跨服务无法实现），但微服务要求数据库也拆分。这个矛盾是分布式系统中最常见的纠结。',
        fix: '接受"最终一致性"：用事件（消息队列）同步数据变更。每个服务维护自己的数据副本。FOREIGN KEY 跨服务不能用了，改为应用层检查（如订单服务调用用户服务 API 检查用户是否存在）。或者...单纯放弃微服务，用模块化单体。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 RDBMS 的 ACID 四个特性，每个用一句话解释',
        hint: 'Atomicity, Consistency, Isolation, Durability',
        answer: 'A 原子性：事务是不可分割的单元，要么全部成功，要么全部回滚。C 一致性：事务前后数据库都处于一致状态（约束都满足）。I 隔离性：并发事务之间互不干扰。D 持久性：提交的事务即使系统崩溃也不会丢失。',
      },
      {
        level: '进阶',
        task: '设计一个简单的电商系统数据模型（用户、商品、订单），用 PostgreSQL DDL 实现，包含外键约束',
        hint: '订单表需要引用用户和商品',
        answer: "CREATE TABLE users (id bigserial PRIMARY KEY, name text NOT NULL, email text UNIQUE NOT NULL);\nCREATE TABLE products (id bigserial PRIMARY KEY, name text NOT NULL, price numeric(10,2) NOT NULL CHECK (price > 0), stock integer NOT NULL DEFAULT 0);\nCREATE TABLE orders (id bigserial PRIMARY KEY, user_id bigint REFERENCES users(id), created_at timestamptz DEFAULT now());\nCREATE TABLE order_items (id bigserial PRIMARY KEY, order_id bigint REFERENCES orders(id), product_id bigint REFERENCES products(id), quantity integer NOT NULL CHECK (quantity > 0), unit_price numeric(10,2) NOT NULL);",
      },
      {
        level: '挑战',
        task: '分析并写出 3 个具体场景：分别适合用关系型数据库、文档型 NoSQL（MongoDB）、键值型（Redis），并说明原因',
        hint: '从数据结构、查询模式、扩展需求三个维度分析',
        answer: "1) 关系型（银行系统）：结构化数据（账户、交易），强一致性要求（不能丢钱），复杂查询需求（对账、报表），ACID 必需。\n2) MongoDB（内容管理）：文章结构多变（有的有视频、有的有投票），需要快速迭代不关心 schema 变更，读多写少，可以牺牲一点一致性。\n3) Redis（会话缓存）：简单的 key-value 结构（session_id -> user_data），高并发读写（每次请求都要查），允许丢失（会话重建），内存极速。",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 5: Rows / 行
  // ═══════════════════════════════════════════════
  "Rd3RLpyLMGQZzrxQrxDGo": {
    mentalModel: '行（Row）就像数据表中的一条完整记录——就像纸质表格中的一行，从左到右依次填写每个格子（列）。在 PostgreSQL 内部，每一行被称为一个"元组（Tuple）"，存储了该记录的所有属性值和一些隐藏的元数据（如可见性信息）。',
    sections: [
      {
        title: '行的物理存储 — 页、元组、TOAST',
        content: 'PostgreSQL 的行存储在 8KB 的"页（Page）"中。默认每页可存多条记录。一条行记录（元组）的物理结构是：\n\n1. **HeapTupleHeaderData**（约 23 字节）：xmin（插入事务 ID）、xmax（删除/更新事务 ID）、cid（命令 ID）、ctid（该行的物理位置 TID）、infomask（状态标志位）。\n\n2. **实际数据列**：按列顺序存储，变长列（text、varchar、numeric）有长度前缀。\n\n3. **对齐填充**：PostgreSQL 按列类型自然边界对齐（int4 在 4 字节边界，int8 在 8 字节边界）。合理排列列顺序可以减少对齐填充浪费。\n\n当一行超过 8KB 的一页时，PostgreSQL 使用 TOAST（The Oversized-Attribute Storage Technique）自动将超大的列值压缩并存储到单独的 TOAST 表中，原表中只保留一个指针。TOAST 对用户透明，但大文本字段的频繁更新会导致 TOAST 膨胀。',
      },
      {
        title: '行的可见性与 MVCC',
        content: 'PostgreSQL 使用多版本并发控制（MVCC），这意味着一条"行"可以有多个版本同时存在。当你 UPDATE 一行时，PostgreSQL 并不是原地修改，而是：\n\n1. 在旧版本上标记 xmax（设为当前事务 ID），表示该版本"死"于该事务。\n2. 插入一个新版本的元组，xmin 设为当前事务 ID。\n\n查询时，数据库检查每个元组的 xmin/xmax 和当前事务的快照（snapshot），判断该版本是否"可见"。这就是为什么：\n- UPDATE 会产生死元组（dead tuples）\n- SELECT 不会阻塞 UPDATE（读写不互斥）\n- 长时间运行的事务会阻止 VACUUM 清理死元组\n\n这种机制导致"一行数据"在物理上可能存在于多个版本，这是 PostgreSQL 行概念与直觉最大的不同。',
      },
      {
        title: 'OID、CTID、XMIN — 行的身份标识',
        content: 'PostgreSQL 中标识一行有多种方式：\n\n- **ctid**：物理位置标识，格式 (page_number, item_number)，如 (0, 1) 表示第 0 页的第 1 项。ctid 不是永久的——UPDATE 后 ctid 会变（因为插入了新版本）。DELETE 后的 ctid 可能被新行重用。\n\n- **oid**：对象标识符。只有 WITH OIDS 的表才有。PostgreSQL 12+ 已移除此特性，不要在代码中依赖 oid。\n\n- **主键（PRIMARY KEY）**：这是用户应该依赖的逻辑标识。主键在行的整个生命周期中不变（除非你手动改）。\n\n实用技巧：如果你需要更新一行并立即获取它的新 ctid：UPDATE t SET x = x + 1 WHERE id = 1 RETURNING ctid;',
      },
    ],
    handsOn: [
      {
        title: '查看行的物理位置（ctid）和可见性元数据',
        cmd: "CREATE TEMP TABLE row_demo (id integer, value text) ON COMMIT DROP;\nINSERT INTO row_demo VALUES (1, 'hello');\nSELECT ctid, xmin, xmax, id, value FROM row_demo;",
        output: ' ctid  |  xmin  | xmax | id | value\n-------+--------+------+----+-------\n (0,1) | 158924 |    0 |  1 | hello',
        explain: 'ctid=(0,1) 表示在第 0 页第 1 槽位。xmin=158924 表示由事务 158924 插入。xmax=0 表示这个版本还"活着"（未被删除或更新）。这些列是隐藏的系统列，需要用 SELECT 显式指定才能看到。',
      },
      {
        title: '观察 UPDATE 产生多个版本',
        cmd: "UPDATE row_demo SET value = 'world' WHERE id = 1;\nSELECT ctid, xmin, xmax, id, value FROM row_demo;",
        output: ' ctid  |  xmin  | xmax | id | value\n-------+--------+------+----+-------\n (0,2) | 158925 |    0 |  1 | world',
        explain: 'ctid 从 (0,1) 变成了 (0,2)——UPDATE 创建了一个新版本。(0,1) 处的旧版本已经标记为死亡（xmax > 0），但物理上仍存在于页中，等待 VACUUM 回收空间。这就是 PostgreSQL 的"多版本"本质。',
      },
      {
        title: '估算一行占用的字节数',
        cmd: "SELECT pg_column_size(row_demo.*) AS row_bytes FROM row_demo;",
        output: ' row_bytes\n-----------\n        36',
        explain: 'pg_column_size() 返回行数据部分的字节数（不包括 23 字节的元组头）。36 字节中，integer 占 4 字节，text "world" 占 5+1=6 字节，加上列间对齐填充和变长字段的长度信息。还有每行约 4 字节的行指针（ItemPointer）。',
      },
    ],
    diagnosis: [
      {
        symptom: '表不大但查询很慢，pg_stat_user_tables 显示 n_dead_tup 很大',
        cause: '频繁的 UPDATE/DELETE 产生了大量死元组。VACUUM 没跟上，导致每次全表扫描要穿过大量死元组获取有效数据，实际扫描的数据量远大于"活"数据。',
        fix: '手动 VACUUM (VERBOSE) 表名 查看死元组数量。检查是否有机饿事务（长事务阻止 VACUUM 清理）。对于高频更新表，调低 autovacuum_vacuum_scale_factor（如 0.01）。考虑将表改为分区表减少单表 VACUUM 负担。',
      },
      {
        symptom: '一行某些列经常更新，更新后磁盘占用快速增长',
        cause: 'TOAST 列的大数据更新——UPDATE 产生新的 TOAST 元组，旧 TOAST 元组等待 VACUUM 回收。如果更新的列中包含 text/jsonb 等变长类型，TOAST 表也会膨胀。',
        fix: '考虑将经常更新的列拆分到单独的表（垂直分表）。主表存稳定列，更新表存易变列。或用 UPDATE 时避免更新未变更的列。检查 TOAST 表大小：SELECT relname, pg_size_pretty(pg_relation_size(reltoastrelid)) FROM pg_class WHERE relname = \'表名\';',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一张表，插入一条记录，查看它的 ctid 和 xmin。然后 UPDATE 它，再看 ctid 和 xmin 有什么变化',
        hint: 'ctid 是隐藏列，xmin 和 xmax 也是',
        answer: "CREATE TEMP TABLE test_row (n integer) ON COMMIT DROP;\nINSERT INTO test_row VALUES (1);\nSELECT ctid, xmin, xmax, n FROM test_row;\nUPDATE test_row SET n = 2;\nSELECT ctid, xmin, xmax, n FROM test_row;\n-- ctid 变了（新版本），xmin 也变了（新事务 ID）",
      },
      {
        level: '进阶',
        task: '用 pageinspect 扩展查看数据页的底层结构，看一条记录在页中如何存储',
        hint: 'CREATE EXTENSION pageinspect; 然后 heap_page_items()',
        answer: "CREATE EXTENSION IF NOT EXISTS pageinspect;\nCREATE TEMP TABLE heap_test (a integer, b text) ON COMMIT DROP;\nINSERT INTO heap_test VALUES (1, 'abc'), (2, 'defg');\nSELECT lp, lp_off, lp_len, t_xmin, t_xmax, t_ctid, t_data FROM heap_page_items(get_raw_page('heap_test', 0));",
      },
      {
        level: '挑战',
        task: '设计一个实验：测量不同列排列顺序对存储空间的影响。创建同样的三列（int, bigint, smallint），按不同顺序排列，比较 pg_total_relation_size()',
        hint: '自然对齐：bigint 8 字节对齐，integer 4 字节对齐，smallint 2 字节对齐',
        answer: "-- 差的排列：bigint + smallint + integer（空隙多）\nCREATE TEMP TABLE t_bad (a bigint, b smallint, c integer) ON COMMIT DROP;\nINSERT INTO t_bad SELECT g, 1, 1 FROM generate_series(1,10000) g;\n-- 好的排列：bigint + integer + smallint（紧密排列）\nCREATE TEMP TABLE t_good (a bigint, b integer, c smallint) ON COMMIT DROP;\nINSERT INTO t_good SELECT g, 1, 1 FROM generate_series(1,10000) g;\nSELECT 'bad', pg_size_pretty(pg_total_relation_size('t_bad'))\nUNION ALL SELECT 'good', pg_size_pretty(pg_total_relation_size('t_good'));",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 6: Columns / 列
  // ═══════════════════════════════════════════════
  "cty2IjgS1BWltbYmuxxuV": {
    mentalModel: '列（Column）就像数据库表格的表头——每一列定义了数据的"种类"（类型）和"规则"（约束）。数据只能按列的格式存储，就像只有表格设定好的栏目才能填写。',
    sections: [
      {
        title: '列的完整属性集',
        content: 'PostgreSQL 中一个列不仅仅是"名字+类型"，它拥有一整套属性：\n\n1. **数据类型（必选）**：决定存储格式、允许的值范围、可用的操作符和函数。\n\n2. **默认值（DEFAULT）**：插入时不指定该列就自动填充。可以是常量（DEFAULT 0）、表达式（DEFAULT now()）、或序列（DEFAULT nextval(\'seq\')）。注意 DEFAULT now() 评估的时间点是 INSERT 时，不是建表时。\n\n3. **是否可为空（NULL/NOT NULL）**：NULL 表示"未知"或"缺失"。NOT NULL 约束强制该列必须有值。在 PostgreSQL 中，NOT NULL 是通过检查约束（check constraint）实现的。\n\n4. **排序规则（COLLATE）**：决定字符串如何排序（eg. \'zh_CN.utf8\' 按拼音排序）。默认继承数据库的 COLLATE 设置。\n\n5. **生成列（GENERATED ALWAYS AS）**：PostgreSQL 12+ 支持。列值不是用户插入的，而是按表达式自动计算的。分两种：STORED（存储在磁盘，每次更新计算）和 VIRTUAL（不存磁盘，每次查询计算，PostgreSQL 目前只支持 STORED）。',
      },
      {
        title: '选择列顺序的重要性',
        content: '列的存储顺序在 PostgreSQL 中有实际影响：\n\n**存储效率**：CPU 访问内存时有对齐要求。double precision 需要 8 字节对齐，integer 需要 4 字节对齐。如果把 smallint（2 字节）放在 double precision 之后，中间会浪费 6 字节的填充。最优排列是把需要大对齐的类型放在前面，小对齐的放在后面。\n\n经验法则：bigint/double precision/timestamp > integer/date/real > smallint > boolean > text/varchar。\n\n**可读性**：人类读者期望主键在第一列，重要信息在前面。\n\n**查询性能**：PostgreSQL 采用基于行的存储（row-based storage），不是列存储。如果查询只读取某几列，数据库还是要加载整行（从磁盘读到 shared buffer 然后投影所需列）。所以把常用查询涉及的列放在一起帮助 CPU 缓存命中率。如果是大量列的表且查询只读少数列，考虑垂直分表。',
      },
      {
        title: '系统列 — 每行的隐藏属性',
        content: 'PostgreSQL 的每一行都有几个系统列（隐藏列），平时 SELECT * 不会显示，但显式指定列名就能查出来：\n\n- **tableoid**：该行属于哪张表（继承/分区查询中很有用）。SELECT tableoid::regclass FROM parent 可以看到各行的实际来源表。\n\n- **xmin / xmax**：该版本元组的插入/删除事务 ID（MVCC 的核心）。\n\n- **cmin / cmax**：同一事务中的命令序号（Command ID）。\n\n- **ctid**：物理行指针（页号, 槽位号）。\n\n这些系统列对于调试、性能分析、理解 MVCC 行为非常有用。例如排查为什么某些行"看不到"可以查对应的 xmin/xmax。',
      },
    ],
    handsOn: [
      {
        title: '创建带多种列属性的表',
        cmd: "CREATE TEMP TABLE column_demo (\n  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  name text NOT NULL COLLATE \"zh_CN.utf8\",\n  score numeric(5,2) DEFAULT 0.00,\n  created_at timestamptz DEFAULT now(),\n  total_price numeric(12,2) GENERATED ALWAYS AS (score * 100) STORED\n) ON COMMIT DROP;\n\\d+ column_demo",
        output: '                                     Table "pg_temp.column_demo"\n   Column    |            Type             | Collation  | Nullable |              Default              | Storage\n-------------+-----------------------------+------------+----------+-----------------------------------+----------\n id          | bigint                      |            | not null | generated always as identity      | plain\n name        | text                        | zh_CN.utf8 | not null |                                   | extended\n score       | numeric(5,2)                |            |          | 0.00                              | main\n created_at  | timestamp with time zone    |            |          | now()                             | plain\n total_price | numeric(12,2)               |            |          | generated always as stored        | main',
        explain: '\\d+ 显示列的完整定义。注意 Storage 列：plain=不离线存储，main=优先在主表，extended=优先压缩并 TOAST。GENERATED ALWAYS AS IDENTITY 是 PostgreSQL 10+ 推荐的自增方式（替代 SERIAL）。',
      },
      {
        title: '查看列的存储对齐浪费',
        cmd: "SELECT pg_column_size(ROW(bigint '1', smallint '1', integer '1')::test_align) AS bad,\n       pg_column_size(ROW(bigint '1', integer '1', smallint '1')::test_align2) AS good;",
        output: ' bad | good\n-----+------\n  32 |   32',
        explain: '在少量列的情况下差异不明显。但如果有几十列，对齐浪费可能让每行多占 20-30%。在一个 1 亿行的表中，这就是 2-3GB 的空间浪费。好的列排序是 DBA 的基本素养。',
      },
      {
        title: '使用系统列排查数据来源',
        cmd: "CREATE TEMP TABLE parent_tab (id integer, info text) ON COMMIT DROP;\nCREATE TEMP TABLE child_tab () INHERITS (parent_tab) ON COMMIT DROP;\nINSERT INTO parent_tab VALUES (1, 'parent');\nINSERT INTO child_tab VALUES (2, 'child');\nSELECT tableoid::regclass, id, info FROM parent_tab;",
        output: '  tableoid  | id |  info\n------------+----+--------\n parent_tab |  1 | parent\n child_tab  |  2 | child',
        explain: 'tableoid::regclass 把表 OID 转成可读表名。当你查询继承父表时，可以看到每行实际来自哪个子表。分区表的自动分区裁剪就是利用这个机制。',
      },
    ],
    diagnosis: [
      {
        symptom: 'ALTER TABLE ADD COLUMN 在千万级表上执行了很久还没结束',
        cause: '在 PostgreSQL 10 之前，ADD COLUMN 需要重写整个表（全表复制），在大表上是灾难性操作。PostgreSQL 11+ 对 ADD COLUMN ... DEFAULT 进行了优化，只修改系统目录，不重写表。但 ADD COLUMN 不加 DEFAULT（即新列默认 NULL）也需要重写。',
        fix: 'PostgreSQL 11+ 中：ALTER TABLE big_table ADD COLUMN new_col integer DEFAULT 0; 是即时完成的（只改 pg_attribute）。但后续第一次 UPDATE 每行时会填充默认值。如果非要修改已有数据的列定义，考虑用 CREATE TABLE ... AS SELECT ... 重建表然后 RENAME。',
      },
      {
        symptom: '某 text 列存储路径字符串，长度通常不超过 200 字符，但偶尔有 5KB 的长路径',
        cause: 'Text 类型的列默认存储策略是 extended——PostgreSQL 会先压缩，如果还是太大就 TOAST（存到外部表）。大部分值很短时读取很快，但偶尔的大值会触发 TOAST 读取，产生额外的 I/O。',
        fix: '不需要改变列类型。但查询时注意：SELECT * 会读取包括 TOAST 列的所有数据。如果不需要该列，显式指定列名跳过它。用 EXPLAIN (ANALYZE, BUFFERS) 确认 TOAST 读取是否影响了性能。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一张包含至少 5 种不同数据类型的列的表，并为每列添加合适的约束',
        hint: '使用 CREATE TABLE，列定义可以带 DEFAULT、NOT NULL、CHECK',
        answer: "CREATE TEMP TABLE columns_exercise (id bigserial PRIMARY KEY, username text NOT NULL UNIQUE, age integer CHECK (age >= 0 AND age <= 150), salary numeric(10,2) DEFAULT 0, is_active boolean DEFAULT true, joined_at timestamptz DEFAULT now()) ON COMMIT DROP;",
      },
      {
        level: '进阶',
        task: '查看 information_schema.columns 找出某表中所有可为 NULL 的列',
        hint: 'is_nullable 列',
        answer: "SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'your_table' AND is_nullable = 'YES' ORDER BY ordinal_position;",
      },
      {
        level: '挑战',
        task: '设计实验验证：一张表有 10 列 integer 和一张表有 10 列 text（存储同样的数字字符串），在存储 100 万行数据后，对比总大小和查询性能',
        hint: '用 generate_series 快速生成百万行，pg_total_relation_size 对比大小',
        answer: "CREATE TEMP TABLE t_int (c1 int, c2 int, c3 int, c4 int, c5 int, c6 int, c7 int, c8 int, c9 int, c10 int) ON COMMIT DROP;\nCREATE TEMP TABLE t_text (c1 text, c2 text, c3 text, c4 text, c5 text, c6 text, c7 text, c8 text, c9 text, c10 text) ON COMMIT DROP;\nINSERT INTO t_int SELECT g,g,g,g,g,g,g,g,g,g FROM generate_series(1,100000) g;\nINSERT INTO t_text SELECT g::text, g::text, g::text, g::text, g::text, g::text, g::text, g::text, g::text, g::text FROM generate_series(1,100000) g;\nSELECT 'int', pg_size_pretty(pg_total_relation_size('t_int'))\nUNION ALL SELECT 'text', pg_size_pretty(pg_total_relation_size('t_text'));\n-- text 版显著更大（变长字段有额外的长度开销）",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 7: Introduction / 入门介绍
  // ═══════════════════════════════════════════════
  "lDIy56RyC1XM7IfORsSLD": {
    mentalModel: 'PostgreSQL 就像一个"数据库界的瑞士军刀"——开箱即用的标准 SQL、强大的扩展系统、严谨的 ACID 事务、对 JSON/地理空间/全文搜索的原生支持。它既是一个严谨的关系型数据库，又吸收了 NoSQL 的很多优点。',
    handsOn: [
      {
        title: '检查 PostgreSQL 版本和关键特性',
        cmd: 'psql -c "SELECT version();"',
        output: '                                                           version\n------------------------------------------------------------------------------------------------------------------------------\n PostgreSQL 16.1 on x86_64-apple-darwin22.6.0, compiled by Apple clang version 14.0.3, 64-bit',
        explain: 'version() 函数返回完整版本信息，包括操作系统和编译器。PostgreSQL 版本号格式：主版本号.次版本号（16.1 = 16 大版本的第 1 次补丁）。大版本升级需要 pg_upgrade 或 pg_dump/pg_restore，次版本升级直接替换二进制即可。',
      },
      {
        title: '查看已安装的扩展',
        cmd: "SELECT name, default_version, installed_version, comment FROM pg_available_extensions WHERE name IN ('postgis','pg_stat_statements','pgcrypto','uuid-ossp','vector') ORDER BY name;",
        output: '         name         | default_version | installed_version |                       comment\n-----------------------+-----------------+-------------------+------------------------------------------------------\n pg_stat_statements    | 1.10            | 1.10              | track planning and execution statistics\n pgcrypto              | 1.3             | 1.3               | cryptographic functions\n postgis               | 3.4.1           |                   | PostGIS geometry and geography spatial types\n uuid-ossp             | 1.1             |                   | generate universally unique identifiers',
        explain: 'PostgreSQL 的扩展机制允许在不修改内核的情况下添加功能。contrib 扩展是官方打包的（如 pg_stat_statements），第三方的需要单独安装（如 PostGIS）。installed_version 为空表示可用但未安装，需要 CREATE EXTENSION。这是 PostgreSQL 比 MySQL 灵活很多的地方。',
      },
      {
        title: '查看数据库的基本统计信息',
        cmd: "SELECT pg_size_pretty(pg_database_size(current_database())) AS db_size,\n       (SELECT count(*) FROM pg_stat_user_tables) AS table_count,\n       (SELECT count(*) FROM pg_stat_user_indexes) AS index_count,\n       (SELECT count(*) FROM pg_stat_activity WHERE state = 'active') AS active_conns;",
        output: ' db_size  | table_count | index_count | active_conns\n----------+-------------+-------------+--------------\n 135 MB   |          28 |          12 |            3',
        explain: '这是快速了解数据库健康状况的命令。db_size 是整个数据库的磁盘占用，table_count/index_count 是用户表/索引数量，active_conns 是当前活跃连接数。每秒运行类似查询是 DBA 监控的基本功。',
      },
    ],
    sections: [
      {
        title: 'PostgreSQL 的历史与设计哲学',
        content: 'PostgreSQL 始于 1986 年加州大学伯克利分校的 POSTGRES 项目（Michael Stonebraker 教授领导，2014 年图灵奖得主）。1996 年更名为 PostgreSQL 以强调 SQL 支持。至今已发展 35+ 年，是历史最悠久的活跃开源数据库之一。\n\n核心设计哲学：\n\n1. **正确性优先于速度**：数据不能丢、不能错。这是金融、医疗、科研选择 PostgreSQL 的根本原因。\n\n2. **可扩展而非僵化**：通过扩展系统（Extension）、自定义类型、自定义函数、外部数据包装器（FDW），PostgreSQL 可以变成时序数据库（TimescaleDB）、地理空间数据库（PostGIS）、向量数据库（pgvector）、分布式数据库（Citus）。\n\n3. **标准化高于兼容化**：PostgreSQL 追求 SQL 标准合规，胜过与其他产品的兼容。这使得从 PostgreSQL 迁移到其他数据库比从其他数据库迁移到 PostgreSQL 更容易（SQL 标准就是 PostgreSQL 的"方言"）。\n\n4. **社区驱动而非公司控制**：PostgreSQL 属于 PGDG（PostgreSQL Global Development Group），没有单一公司控制。不像 MySQL（Oracle）、SQL Server（Microsoft）、MongoDB（MongoDB Inc.）。',
      },
      {
        title: 'PostgreSQL 与竞争对手的定位',
        content: '在当前数据库格局中，PostgreSQL 占据独特位置：\n\n**vs MySQL/MariaDB**：MySQL 简单、快速（简单场景）、被广泛使用（LAMP 栈）。PostgreSQL 更复杂但功能更全，高并发写入场景更稳。简单 OLTP 用 MySQL 没问题，复杂查询/严肃数据用 PostgreSQL。\n\n**vs Oracle/SQL Server**：商业数据库功能完整、厂商支持、但昂贵（Oracle 企业版 $47,500/核）。PostgreSQL 免费且功能相近（Oracle 兼容性可通过 orafce 扩展实现），是去 Oracle 化的首选。\n\n**vs MongoDB/NoSQL**：PostgreSQL 的 JSONB + GIN 索引在很多场景可以替代 MongoDB。当你的数据既有结构又有非结构需求时，PostgreSQL 一个数据库就够了。\n\n**vs SQLite**：SQLite 是嵌入式数据库（不需要服务器进程），适合移动端、桌面应用、边缘设备。PostgreSQL 是客户端-服务器架构，适合多用户并发访问。',
      },
    ],
    diagnosis: [
      {
        symptom: 'pg_stat_statements 扩展安装后，查询变慢了',
        cause: 'pg_stat_statements 本身开销很小。如果真的有影响，可能是 shared_preload_libraries 中把它加载了，但 pg_stat_statements.max 设置过大导致内存占用高。',
        fix: '检查 pg_stat_statements.max（默认 5000），如果业务有大量不同的查询（很多一次性查询），降低该值。或者担心的话，在低负载时段启用该扩展做采集，高峰期禁用。实际情况中 pg_stat_statements 的开销通常 < 1%，无需担心。',
      },
      {
        symptom: '刚接触 PostgreSQL，不知道从哪个客户端工具开始',
        cause: '选择太多了——psql（命令行）、pgAdmin（图形界面）、DBeaver（通用数据库客户端）、DataGrip（JetBrains 出品）、Postico（macOS 原生）等。',
        fix: '学习阶段用 psql——虽然界面朴素，但它是唯一"总是可用"的工具（任何有 PostgreSQL 的地方就有 psql），且能完整展示元命令（\\d、\\dt、\\di）。日常管理用 pgAdmin 或 DBeaver。SQL 开发用 DataGrip。但把 psql 作为你的"逃生仓"——SSH 进任何服务器都能用。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '安装 PostgreSQL 16，通过 psql 连接，运行 SELECT version(); 和 SELECT current_date;',
        hint: 'psql -U postgres 连接',
        answer: "psql -U postgres\nSELECT version();\nSELECT current_date;\n-- 确保看到版本号和今天的日期",
      },
      {
        level: '进阶',
        task: '启用在 psql 中的自动计时功能，执行几个查询，观察执行时间',
        hint: '\\timing 命令',
        answer: "\\timing on\nSELECT count(*) FROM pg_class;\nSELECT count(*) FROM pg_attribute;\n-- 每次查询后会显示 Time: XX.XXX ms",
      },
      {
        level: '挑战',
        task: '使用 psql 的 \\set 和 \\gset 命令创建变量，实现简单的脚本操作',
        hint: '\\set varname value 设置变量，:varname 引用变量',
        answer: "\\set dbname myapp\n\\set tbname users\nSELECT :'dbname' AS database_name, :'tbname' AS table_name;\n-- 注意 :'varname' 的引号语法，确保 SQL 中是字符串字面量",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 8: PostgreSQL vs NoSQL Databases / PostgreSQL 与 NoSQL 对比
  // ═══════════════════════════════════════════════
  "D0doJTtLu-1MmFOfavCXN": {
    mentalModel: '关系型数据库是"图书馆"——每本书（数据）有固定位置（行/列），管理员（查询引擎）按索引找工作。NoSQL 是"仓库"——数据随便堆，想找什么全看当时怎么放的。PostgreSQL 的 JSONB 就是图书馆里开了一个"灵活货物区"——既有结构化的藏书，又能存放不规则的杂货。',
    sections: [
      {
        title: '真正的比较维度',
        content: '比较 PostgreSQL 与 NoSQL 不能用"谁更好"，而要按维度分析：\n\n**1. 数据模型**\n- PostgreSQL：严格的表结构（schema-on-write），写入时校验类型和约束。数据有形状。\n- MongoDB：灵活的文档（schema-on-read），写入时不校验（除了 BSON 类型），读取时由应用解释结构。\n- 启示：如果数据结构是已知且稳定的（用户、订单、账户），用 PostgreSQL。如果数据结构频繁变化或完全不可预测（爬虫结果、用户自定义表单），用 MongoDB。\n\n**2. 一致性模型**\n- PostgreSQL：ACID 的强一致性。提交的数据一定持久化，回滚的数据一定不存在。读写不互斥。\n- MongoDB：默认最终一致性（primary-secondary 复制有延迟）。虽然支持多文档事务（4.0+），但性能和复杂度不如 PostgreSQL 的成熟事务机制。\n- 启示：金融、交易、库存等场景必须用 PostgreSQL。社交 feed、推荐、日志分析等可以接受 NoSQL 的最终一致性。\n\n**3. 扩展模型**\n- PostgreSQL：主要是垂直扩展（升级硬件）和读扩展（流复制）。水平写扩展需要 Citus 等第三方方案。\n- Cassandra/ScyllaDB：天然水平扩展。加节点即可线性提升容量和吞吐量。\n- 启示：预计 TB 级以上且持续增长的数据库，Cassandra 的扩展体验好得多。但大部分应用一辈子达不到这个规模。',
      },
      {
        title: 'PostgreSQL 的 NoSQL 能力 — JSONB 实战',
        content: 'PostgreSQL 的 JSONB 让它在很多 NoSQL 场景中成为 MongoDB 的替代品：\n\n1. **存储**：JSONB 以二进制格式存储，支持索引。json 类型是纯文本存储（保留格式和键顺序），jsonb 去重键并优化了查询速度。一般选择 jsonb。\n\n2. **查询**：->> \'key\' 提取文本值，-> \'key\' 提取 JSON 对象，@> \'{"key":"value"}\' 包含查询，? \'key\' 检查键是否存在，jsonb_array_elements() 展开数组。\n\n3. **索引**：GIN 索引对 JSONB 内部的所有键值对建索引，@> 和 ? 查询性能等同 B-tree。\n\n4. **混合结构**：一张表可以有 id（integer）、created_at（timestamptz）等固定列，外加一个 data（jsonb）灵活列。把"必要且常用"的字段提升为列，把"可选且多变"的字段塞进 jsonb。这是 PostgreSQL 独有的灵活度。\n\n真实案例：电商系统。商品有共同属性（名称、价格、库存 = 独立列），但不同类目有不同的特殊属性（手机有屏幕尺寸、衣服有尺码、食品有保质期 = 塞进 jsonb）。不需要创建几十张不同的产品表。',
      },
      {
        title: '何时不该用 PostgreSQL',
        content: '诚实地说，有些场景 PostgreSQL 不是最佳选择：\n\n1. **简单的 Key-Value 缓存**：Redis 的内存操作比任何磁盘数据库快 100+ 倍。会话存储、计数、排行榜、消息队列用 Redis。\n\n2. **海量时序数据**：每秒百万级别的传感器数据。TimescaleDB（PostgreSQL 扩展）可以胜任，但 InfluxDB 或 ClickHouse 对时序场景更专门化。\n\n3. **全文搜索引擎**：Elasticsearch 的倒排索引、分词、相关性评分是 PostgreSQL 的 tsvector 无法企及的。如果搜索是核心体验，不要试图用 PostgreSQL 替代 ES。\n\n4. **图关系遍历**：社交网络中的"朋友的朋友的朋友"查询如果用 SQL 的递归 CTE 写，四层以上就很痛苦。Neo4j 的 Cypher 语言更适合图场景。\n\n5. **超大规模 OLAP**：PB 级分析数据。ClickHouse、Snowflake、BigQuery 等列式存储数据库在分析场景中比行式存储的 PostgreSQL 快几个数量级。\n\n核心原则：PostgreSQL 可以做几乎所有事情，但不是在每件事上都是最好的。当某个特定需求成为系统的瓶颈（搜索慢到不可接受），就引入专门的工具，而不是试图调优 PostgreSQL 去解决它。',
      },
    ],
    handsOn: [
      {
        title: 'PostgreSQL JSONB vs MongoDB 风格的查询',
        cmd: "CREATE TEMP TABLE hybrid_products (id serial PRIMARY KEY, name text NOT NULL, price numeric(10,2), attrs jsonb) ON COMMIT DROP;\nINSERT INTO hybrid_products (name, price, attrs) VALUES\n('Phone X', 6999, '{\"screen\": 6.1, \"ram\": \"8GB\", \"storage\": \"256GB\"}'),\n('Laptop Pro', 12999, '{\"screen\": 15.6, \"ram\": \"16GB\", \"cpu\": \"i9\"}'),\n('T-Shirt', 99, '{\"size\": \"XL\", \"color\": \"black\", \"material\": \"cotton\"}');\n-- MongoDB 风格查询：查询 attrs 中 screen >= 6 且 ram 存在的产品\nSELECT name, price, attrs->>'screen' AS screen FROM hybrid_products WHERE attrs @> '{\"ram\": \"8GB\"}';",
        output: '  name   | price | screen\n---------+-------+--------\n Phone X |  6999 | 6.1',
        explain: 'attrs @> \'{"ram": "8GB"}\' 相当于 MongoDB 的 db.products.find({"attrs.ram": "8GB"})。GIN 索引让这个查询和 B-tree 索引一样快。你得到了 MongoDB 的灵活性 + PostgreSQL 的 ACID 保障。',
      },
    ],
    diagnosis: [
      {
        symptom: '团队争论该用 PostgreSQL 还是 MongoDB，项目延期',
        cause: '"数据库选择"不是技术决策而是宗教战争。两个都能满足 90% 的需求——剩下的 10% 差异对当前项目通常不是致命的。',
        fix: '如果团队以前用过 PostgreSQL，就用 PostgreSQL。如果用过 MongoDB，就用 MongoDB。选择你们团队最熟悉的。未来如果需要迁移，PostgreSQL 的 JSONB 让从 MongoDB 迁移过来相对容易。不确定时选 PostgreSQL——它上限更高（功能更多），你很难因为 PostgreSQL 功能不足而需要换数据库。',
      },
      {
        symptom: '在 PostgreSQL 中使用 JSONB 列替代了独立列，查询性能越来越差',
        cause: '过度依赖 JSONB 的灵活性而忽略了关系型的优势。JSONB 列中即使有 GIN 索引，也不可能和 B-tree 索引在范围查询、排序上竞争。且 JSONB 中的值是文本（->> 返回 text），做数值比较需要额外的类型转换。',
        fix: '"混合策略"：把高频查询、排序、范围筛选的字段提取到独立列（带 B-tree 索引）。低频、随意、不可预测的字段留在 JSONB 中。每季度 review schema，发现经常在 WHERE/ORDER BY 中出现的 JSONB 路径就提升为列。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一张使用 jsonb 列的表，插入 3 条数据，用 @> 运算符查询特定条件的数据',
        hint: '@> 检查左边的 jsonb 是否包含右边的',
        answer: "CREATE TEMP TABLE test_jsonb (id serial PRIMARY KEY, data jsonb) ON COMMIT DROP;\nINSERT INTO test_jsonb (data) VALUES ('{\"name\":\"Alice\",\"age\":30,\"tags\":[\"dev\",\"dba\"]}'), ('{\"name\":\"Bob\",\"age\":25,\"tags\":[\"designer\"]}'), ('{\"name\":\"Charlie\",\"age\":35,\"tags\":[\"dev\",\"manager\"]}');\nSELECT data->>'name' AS name FROM test_jsonb WHERE data @> '{\"tags\": [\"dev\"]}';",
      },
      {
        level: '进阶',
        task: '对比：同样的数据，一张表用独立列存储，一张表用 jsonb 存储。插入 10000 条数据，对比查询速度和空间占用',
        hint: '使用 EXPLAIN ANALYZE 和 pg_total_relation_size',
        answer: "-- 独立列表\nCREATE TEMP TABLE rel_test (id serial PRIMARY KEY, name text, age int, city text) ON COMMIT DROP;\nINSERT INTO rel_test (name, age, city) SELECT 'user_'||g, (g%50)+20, CASE g%3 WHEN 0 THEN 'Beijing' WHEN 1 THEN 'Shanghai' ELSE 'Shenzhen' END FROM generate_series(1,10000) g;\n-- JSONB 表\nCREATE TEMP TABLE json_test (id serial PRIMARY KEY, data jsonb) ON COMMIT DROP;\nINSERT INTO json_test (data) SELECT jsonb_build_object('name', 'user_'||g, 'age', (g%50)+20, 'city', CASE g%3 WHEN 0 THEN 'Beijing' WHEN 1 THEN 'Shanghai' ELSE 'Shenzhen' END) FROM generate_series(1,10000) g;\nSELECT 'relational', pg_size_pretty(pg_total_relation_size('rel_test'))\nUNION ALL SELECT 'jsonb', pg_size_pretty(pg_total_relation_size('json_test'));\n-- jsonb 版会更大（键名重复存储）",
      },
      {
        level: '挑战',
        task: '模拟从 MongoDB 迁移到 PostgreSQL：写一个 Python/Node.js 脚本或者纯 SQL，将 JSONB 中的嵌套数据展开为关联表',
        hint: 'jsonb_to_recordset 可以把 JSON 数组转成行集',
        answer: "CREATE TEMP TABLE orders_raw (id serial PRIMARY KEY, data jsonb) ON COMMIT DROP;\nINSERT INTO orders_raw (data) VALUES ('{\"user\":\"Alice\",\"items\":[{\"product\":\"Book\",\"qty\":2},{\"product\":\"Pen\",\"qty\":5}]}'), ('{\"user\":\"Bob\",\"items\":[{\"product\":\"Notebook\",\"qty\":1}]}');\n-- 用 jsonb_to_recordset 展开 items 数组到关联表\nCREATE TEMP TABLE orders_normalized AS\nSELECT id AS order_id, data->>'user' AS user_name, items.product, items.qty\nFROM orders_raw, jsonb_to_recordset(data->'items') AS items(product text, qty integer);\nSELECT * FROM orders_normalized;",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 9: Tables / 表
  // ═══════════════════════════════════════════════
  "W8NhR4SqteMLfso8AD6H8": {
    mentalModel: '表（Table）是关系型数据库的"基础积木"——所有数据都存放在表中，就像建筑物由砖块组成。每张表是一个独立的关系（Relation），拥有自己的结构定义、存储空间、权限设置。PostgreSQL 的一张表背后是一个或多个物理文件，加上若干系统目录条目。',
    sections: [
      {
        title: '表的物理结构 — 从 SQL 到磁盘',
        content: '在 PostgreSQL 中，CREATE TABLE users (...) 会触发以下底层动作：\n\n1. **在 pg_class 系统目录中插入一行**：记录表名、OID、relkind（\'r\'=普通表）、relfilenode（物理文件名）等元数据。\n\n2. **在 pg_attribute 中插入多行**：每行对应表的一列，记录列名、类型 OID、位置序号（attnum）等。\n\n3. **创建物理文件**：在 $PGDATA/base/<dboid>/ 目录下创建一个或多个文件，以 relfilenode 命名。默认 1GB 一个文件段（segment），超过自动分裂。\n\n4. **创建 TOAST 表（如果需要）**：如果表中有变长列（text、jsonb、bytea），自动创建关联的 TOAST 表和一个索引。\n\n5. **如果指定了主键，自动创建唯一索引**。\n\n所以"表"不只是用户看到的结构——它是一个复杂的持久化对象体系。',
      },
      {
        title: 'Table 的存储参数（Storage Parameters）',
        content: 'PostgreSQL 支持通过 WITH 子句设置表的存储参数，影响物理存储行为：\n\n- **fillfactor**（默认 100）：每页留多少空闲空间（百分比）。设为 70 表示每页 30% 空着，留给 UPDATE 在同一页内完成（避免跨页写）。高频更新表建议 fillfactor=70-80。\n\n- **autovacuum_enabled**：该表是否参与自动 VACUUM。大多数表应该默认开启。只对 append-only 的日志表可以关闭。\n\n- **toast_tuple_target**：TOAST 开始压缩/离线的阈值。默认 2KB。\n\n- **parallel_workers**：该表允许的并行扫描工作进程数。\n\n创建语法：CREATE TABLE events (id bigserial, data jsonb) WITH (fillfactor = 80); 这些参数也可以通过 ALTER TABLE ... SET (fillfactor = 80) 事后修改（但只影响新写入的页，旧页保持原状）。',
      },
      {
        title: 'UNLOGGED 表 — 高性能的代价',
        content: 'CREATE UNLOGGED TABLE 会创建一个不写 WAL 的表。写入速度比普通表快 5-10 倍（因为不需要写 WAL）。但代价是：\n\n1. 数据库异常崩溃后，UNLOGGED 表的内容全部丢失（自动 TRUNCATE）。\n2. 主从复制中不会复制 UNLOGGED 表（因为不写 WAL）。\n\n适用场景：可以随时重建的中间结果表、会话临时数据（比 TEMP TABLE 更好的性能）、ETL 过程中的暂存表。\n\n典型用法：CREATE UNLOGGED TABLE etl_staging (LIKE target_table INCLUDING ALL); 把它当作数据导入的中间缓存，导入完成后 TRUNCATE 或 DROP。',
      },
    ],
    handsOn: [
      {
        title: '查看表的 OID、文件路径和大小',
        cmd: "SELECT c.oid, c.relname, c.relfilenode, pg_relation_filepath(c.oid) AS filepath, pg_size_pretty(pg_total_relation_size(c.oid)) AS total_size FROM pg_class c WHERE c.relname = 'pg_class' AND c.relkind = 'r';",
        output: '  oid  | relname  | relfilenode |              filepath              | total_size\n-------+----------+-------------+------------------------------------+------------\n  1259 | pg_class |        1259 | pg_catalog/1259                    | 376 kB',
        explain: 'pg_class 表本身的 OID 是 1259（PostgreSQL 中最著名的 OID 之一）。pg_relation_filepath() 给出相对于 $PGDATA 的文件路径。pg_total_relation_size() 包含表、TOAST、索引的总大小。',
      },
      {
        title: '创建带存储参数的表并验证',
        cmd: "CREATE TEMP TABLE storage_test (id integer, data text) WITH (fillfactor = 70) ON COMMIT DROP;\nSELECT relname, reloptions FROM pg_class WHERE relname = 'storage_test';",
        output: '   relname    |    reloptions\n--------------+------------------\n storage_test | {fillfactor=70}',
        explain: 'reloptions 列存储表的存储参数数组。fillfactor=70 表示每页留 30% 空闲。这个参数可以在 CREATE TABLE 时指定，也可以用 ALTER TABLE ... SET (fillfactor = 70) 修改。注意修改后只有新写入的页生效。',
      },
      {
        title: '对比 UNLOGGED 表与普通表的写入性能',
        cmd: "CREATE TEMP TABLE normal_t (n integer) ON COMMIT DROP;\nCREATE UNLOGGED TABLE unlogged_t (LIKE normal_t) ON COMMIT DROP;\n\\timing on\nINSERT INTO normal_t SELECT generate_series(1, 100000);\nINSERT INTO unlogged_t SELECT generate_series(1, 100000);\n\\timing off",
        output: 'INSERT 0 100000\nTime: 156.234 ms\nINSERT 0 100000\nTime: 28.567 ms',
        explain: 'UNLOGGED 表写入快约 5-6 倍。注意这个测试是在 TEMP TABLE 中，实际持久化表的差距可能更大（WAL 写入磁盘的延迟）。如果你在 ETL 流程中有大量写入但数据可重建，UNLOGGED 是很好的选择。',
      },
    ],
    diagnosis: [
      {
        symptom: '表删除了但磁盘空间没有释放',
        cause: 'DROP TABLE 会立即删除系统目录条目，标记物理文件为可删除。但如果有其他会话仍持有该表的引用（如打开了游标），文件会保留到所有引用释放。另外 DROP 操作本身的 WAL 记录也不会立刻回收。',
        fix: '检查 pg_stat_activity 看是否有长时间运行的查询引用了该表。如果没有，磁盘空间会在 checkpoint 后释放。或用 VACUUM FULL（不推荐，锁表）或 pg_repack 重新整理表空间。',
      },
      {
        symptom: '一张表有 200 列，查询其中 5 列但很慢',
        cause: '对宽表（列很多）做 SELECT 少量列时，数据库仍需要读取每行的所有列（从磁盘加载到 shared buffer），然后只投影需要的列。如果大多数列是 TOAST 存储的 text/jsonb，跳过 TOAST 数据不会触发 TOAST 读取，但主行仍然要全部读取。',
        fix: '垂直分表——把不常用列移到单独的表（id + 列），用 LEFT JOIN 按需关联。对非常大的宽表，这个优化可能让查询快 10 倍。或使用索引包含列（INCLUDE）做 covering index 避免访问表。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一张简单的表，插入数据，然后查看这张表在 pg_class 中的元数据',
        hint: '查询 pg_class，条件 relkind = \'r\'',
        answer: "CREATE TEMP TABLE my_table (id serial PRIMARY KEY, name text, created_at timestamptz DEFAULT now()) ON COMMIT DROP;\nINSERT INTO my_table (name) VALUES ('test');\nSELECT relname, relkind, reltuples, relpages, pg_size_pretty(pg_relation_size(oid)) AS size FROM pg_class WHERE relname = 'my_table';",
      },
      {
        level: '进阶',
        task: '用 pg_relation_filepath() 找到表的磁盘文件，然后用 hexdump 查看文件的前 100 字节（需要文件系统权限）',
        hint: 'pg_relation_filepath(\'tablename\'::regclass)',
        answer: "SELECT pg_relation_filepath('my_table'::regclass);\n-- 在 psql 外：xxd $PGDATA/base/<dboid>/<filenode> | head -20\n-- 或：SELECT encode(substring(pg_read_binary_file(pg_relation_filepath('my_table'::regclass)), 1, 100), 'hex');",
      },
      {
        level: '挑战',
        task: '设计对比实验：同样结构，fillfactor=100 vs fillfactor=70，各插入 10000 行并随机 UPDATE 5000 次，对比最终的磁盘大小和页密度',
        hint: '使用 EXPLAIN (BUFFERS) 查看缓冲区命中率',
        answer: "CREATE TEMP TABLE ff100 (id serial PRIMARY KEY, data text) WITH (fillfactor = 100) ON COMMIT DROP;\nCREATE TEMP TABLE ff70 (id serial PRIMARY KEY, data text) WITH (fillfactor = 70) ON COMMIT DROP;\nINSERT INTO ff100 (data) SELECT md5(g::text) FROM generate_series(1, 10000) g;\nINSERT INTO ff70 (data) SELECT md5(g::text) FROM generate_series(1, 10000) g;\nUPDATE ff100 SET data = md5(random()::text) WHERE id % 2 = 0;\nUPDATE ff70 SET data = md5(random()::text) WHERE id % 2 = 0;\nSELECT 'ff100', pg_size_pretty(pg_total_relation_size('ff100')), n_dead_tup FROM pg_stat_user_tables WHERE relname = 'ff100'\nUNION ALL SELECT 'ff70', pg_size_pretty(pg_total_relation_size('ff70')), n_dead_tup FROM pg_stat_user_tables WHERE relname = 'ff70';",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 10: Schemas / 模式
  // ═══════════════════════════════════════════════
  "mF6qAlo2ULJ3lECG2m0h7": {
    mentalModel: 'Schema（模式）是数据库里的"命名空间"——就像文件系统中的文件夹，把表、视图、函数等对象分门别类地组织在一起。同一个数据库中可以有多个 schema，同一个 schema 中的对象名必须唯一，但不同 schema 中的对象可以重名。',
    sections: [
      {
        title: 'Schema 的实际作用',
        content: 'Schema 解决了几个核心问题：\n\n1. **命名空间隔离**：微服务架构中，多个服务共享一个数据库实例，但各自使用独立的 schema（如 billing.invoices、notifications.templates、users.accounts）。避免了表名冲突。\n\n2. **权限管理**：可以按 schema 授权——GRANT USAGE ON SCHEMA billing TO billing_service; GRANT SELECT ON ALL TABLES IN SCHEMA billing TO analytics_service;\n\n3. **逻辑分组**：把相关的数据库对象组织在一起。例如：schema "audit" 放所有审计表，schema "staging" 放 ETL 中间表。\n\n4. **多租户隔离**：在 SaaS 应用中，每个租户一个 schema（tenant_1.users、tenant_2.users）。虽然现代实践趋向于行级隔离（tenant_id 列 + RLS），但 schema 隔离在早期 Postgres 应用中很常见。\n\n5. **版本管理**：通过 schema 管理 API 版本（api_v1.get_users()、api_v2.get_users()）。',
      },
      {
        title: 'search_path — Schema 解析的优先级队列',
        content: 'search_path 决定了当你写 SELECT FROM users（不带 schema 前缀）时，PostgreSQL 在哪些 schema 中按顺序查找 users 表。\n\n默认值：\"$user\", public —— 先查找和当前用户名同名的 schema（不存在就跳过），再查找 public。\n\n常见配置：\n- SET search_path = app_core, app_audit, public; — 先查 app_core，找不到再查 app_audit，最后查 public。\n- ALTER DATABASE mydb SET search_path = app_core, public;\n- ALTER ROLE myrole SET search_path = app_core, public;\n\n陷阱：如果你有 schema_a.users 和 schema_b.users 两张表，当前的 search_path 决定了 SELECT FROM users 会命中哪张表。这也是为什么生产代码应该始终用 schema.table 的完全限定名——避免 search_path 导致的意外解析。\n\n安全注意：绝对不要把 pg_catalog 放在 search_path 之外——很多系统函数需要它。安全的顺序是：应用 schema, public, pg_catalog（pg_catalog 隐式排在最后）。',
      },
      {
        title: 'Schema 与 pg_namespace 系统目录',
        content: '每个 schema 都在 pg_namespace 系统目录中有一条记录。\n\nSELECT nspname, nspowner FROM pg_namespace WHERE nspname NOT LIKE \'pg_%\' AND nspname != \'information_schema\';\n\n常用的内置 schema：\n- **public**：默认的公共 schema。每个数据库都有。如果不用多 schema 设计，所有表都在这里。\n- **pg_catalog**：系统目录。pg_class、pg_attribute 等都在这里。它们也是普通表（只是属于系统），可以用 SELECT 查询。\n- **information_schema**：SQL 标准的元数据视图。提供跨数据库兼容的信息（MySQL/PG/Oracle 都支持 information_schema）。\n- **pg_toast**：TOAST 存储的 schema。普通用户不需要直接访问。\n- **pg_temp_xxx**：临时表的 schema。每个会话有自己的临时 schema，会话结束时自动删除。',
      },
    ],
    handsOn: [
      {
        title: '创建 Schema 并在其中创建表',
        cmd: "CREATE SCHEMA IF NOT EXISTS school;\nCREATE TABLE school.students (id serial PRIMARY KEY, name text, grade integer);\nCREATE TABLE school.courses (id serial PRIMARY KEY, title text, credits integer);\nINSERT INTO school.students (name, grade) VALUES ('Alice', 90), ('Bob', 85), ('Charlie', 95);\nSELECT * FROM school.students;",
        output: ' id |  name   | grade\n----+---------+-------\n  1 | Alice   |    90\n  2 | Bob     |    85\n  3 | Charlie |    95',
        explain: 'school.students 是完全限定表名（schema.table）。没有 school 前缀的话，PostgreSQL 根据 search_path 查找，默认 search_path 是 public，所以会报错 relation "students" does not exist。',
      },
      {
        title: '观察 search_path 的影响',
        cmd: "SHOW search_path;\nCREATE TABLE public.conflict_test (val text);\nINSERT INTO public.conflict_test VALUES ('public version');\nCREATE SCHEMA myapp;\nCREATE TABLE myapp.conflict_test (val text);\nINSERT INTO myapp.conflict_test VALUES ('myapp version');\nSELECT * FROM conflict_test;\nSET search_path = myapp, public;\nSELECT * FROM conflict_test;",
        output: '   search_path\n-----------------\n "$user", public\n\n   val\n---------------\n public version\n\nSET\n   val\n---------------\n myapp version',
        explain: '第一次 SELECT 时 search_path = public，所以查到了 public.conflict_test。SET search_path 后 myapp 排在前面，查到了 myapp.conflict_test。这展示了 search_path 的优先级解析机制。在生产代码中，用 schema.table 避免这种歧义。',
      },
      {
        title: 'Schema 权限管理实践',
        cmd: "CREATE SCHEMA IF NOT EXISTS finance;\nCREATE TABLE finance.accounts (id serial PRIMARY KEY, balance numeric(12,2));\nGRANT USAGE ON SCHEMA finance TO PUBLIC;\nGRANT SELECT ON finance.accounts TO PUBLIC;\n-- 查看当前 schema 的权限\nSELECT nspname, nspacl FROM pg_namespace WHERE nspname = 'finance';",
        output: " nspname |                             nspacl\n---------+-----------------------------------------------------------------\n finance | {postgres=UC/postgres,=U/postgres}",
        explain: 'USAGE 权限让用户可以"进入"该 schema（列出其中的对象）。SELECT/INSERT/UPDATE/DELETE 是针对具体表的权限。PUBLIC 是所有用户（包括未来的用户）的角色。UC 表示 USAGE + CREATE。=U 表示 PUBLIC 有 USAGE 权限。',
      },
    ],
    diagnosis: [
      {
        symptom: 'relation "orders" does not exist，但我明明创建了 orders 表',
        cause: '表创建在了不同的 schema 中（例如开发时 search_path 有 app_dev，但现在没有），或者当前 search_path 不包含该 schema。也可能是 SCHEMA 权限不足。',
        fix: 'SELECT schemaname, tablename FROM pg_tables WHERE tablename = \'orders\'; 找出表的实际 schema。然后用完全限定名 schema.orders 查询。调整 search_path 或给 schema 加 USAGE 权限。',
      },
      {
        symptom: 'pg_dump 只备份了 public schema 中的表，漏掉了其他 schema',
        cause: 'pg_dump 默认备份 search_path 中包含的 schema？不是。实际上 pg_dump 默认备份整个数据库。但如果使用了 --schema=public 参数就只备份 public。也可能是 --exclude-schema 参数意外排除了目标 schema。',
        fix: '不带 --schema 参数运行 pg_dump 备份整个数据库。或 pg_dump --schema=myschema 明确指定要备份的 schema。验证：pg_restore -l backup.dump | grep schema。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建两个 schema（dev 和 prod），各在其中创建一张同名表，插入不同数据验证隔离性',
        hint: '使用完全限定名 schema.table',
        answer: "CREATE SCHEMA dev;\nCREATE SCHEMA prod;\nCREATE TABLE dev.config (key text, value text);\nCREATE TABLE prod.config (key text, value text);\nINSERT INTO dev.config VALUES ('env', 'development');\nINSERT INTO prod.config VALUES ('env', 'production');\nSELECT 'dev', value FROM dev.config UNION ALL SELECT 'prod', value FROM prod.config;",
      },
      {
        level: '进阶',
        task: '为特定用户创建 schema 并授予权限：让 user_a 可以在自己的 schema 中做任何操作，但只能读取 public schema 中的表',
        hint: 'GRANT USAGE, CREATE ON SCHEMA 和 GRANT SELECT ON ALL TABLES IN SCHEMA',
        answer: "CREATE USER user_a WITH PASSWORD 'test123';\nCREATE SCHEMA AUTHORIZATION user_a;\nGRANT USAGE ON SCHEMA public TO user_a;\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO user_a;\n-- 测试：SET ROLE user_a; CREATE TABLE user_a.data (x int); -- 成功\n-- SELECT * FROM public.some_table; -- 成功（如果有权限）",
      },
      {
        level: '挑战',
        task: '设计一个多租户 schema 方案：每个租户有独立 schema，但共享查询需要跨 schema 联合查询。写一个动态 SQL 函数遍历所有租户 schema 统计行数',
        hint: '使用 dblink 或动态 SQL + EXECUTE',
        answer: "CREATE OR REPLACE FUNCTION count_all_tenants() RETURNS TABLE(tenant_name text, row_count bigint) AS $$\nDECLARE\n  schema_name text;\nBEGIN\n  FOR schema_name IN SELECT nspname FROM pg_namespace WHERE nspname LIKE 'tenant_%'\n  LOOP\n    RETURN QUERY EXECUTE format('SELECT %L, count(*) FROM %I.users', schema_name, schema_name);\n  END LOOP;\nEND;\n$$ LANGUAGE plpgsql;",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 11: PostgreSQL vs Other RDBMS / PostgreSQL 与其他 RDBMS 对比
  // ═══════════════════════════════════════════════
  "IAKERTzTpTds5kZLMCapM": {
    mentalModel: 'PostgreSQL 是"技术人的数据库"——追求 SQL 标准合规、功能完整性、扩展性。MySQL 是"互联网的数据库"——简单、快速、被大量网站采用。Oracle 是"银行金库"——功能最强但最贵。SQLite 是"笔记本"——小巧、零配置、嵌入式。',
    sections: [
      {
        title: 'PostgreSQL vs MySQL — 最常被比较的一对',
        content: '**历史定位**：MySQL 最初为"速度优先于正确性"而设计（MyISAM 引擎不支持事务、没有外键，但有极快的读性能）。PostgreSQL 为"正确性优先于速度"而设计（每行有完整的事务支持）。如今两者差距变小，但哲学差异依然存在。\n\n**核心差异**：\n\n1. **SQL 标准合规**：PostgreSQL 实现了大部分 SQL:2011 标准。窗口函数、CTE、LATERAL JOIN、CHECK 约束、EXCLUDE 约束、GENERATED 列——这些 PostgreSQL 在 10 年前就有的功能 MySQL 最近才慢慢追上。\n\n2. **存储引擎**：MySQL 有多引擎架构（InnoDB/MyISAM/Memory），这种灵活性也是复杂性来源。PostgreSQL 只有一种存储引擎，简单且深度优化。\n\n3. **并发控制**：PostgreSQL 使用 MVCC（多版本并发控制），读写互不阻塞。MySQL 的 InnoDB 也用了 MVCC，但实现细节不同。PostgreSQL 的 VACUUM 机制（清理旧版本）是独特的概念，MySQL 用 undo log + purge 线程处理。\n\n4. **JSON 支持**：PostgreSQL 的 JSONB 和 GIN 索引比 MySQL 的 JSON 类型成熟得多。\n\n5. **复制与高可用**：MySQL 的 Group Replication + InnoDB Cluster 比 PostgreSQL 的流复制 + Patroni/Repmgr 更开箱即用。但 PostgreSQL 的逻辑复制（PG 10+）比 MySQL 的基于行的复制更灵活。\n\n选择指南：快速原型、简单 CRUD、中小型 Web 应用 → MySQL。复杂查询、数据仓库、严肃的数据完整性、扩展功能需求 → PostgreSQL。',
      },
      {
        title: 'PostgreSQL vs Oracle — 开源与商业的顶级对决',
        content: 'Oracle 是企业数据库的标杆。PostgreSQL 在企业功能上是最接近 Oracle 的开源替代品。\n\n**功能相似之处**：\n- 表分区（PostgreSQL 10+ 的声明式分区终于和 Oracle 对齐）\n- 物化视图\n- 窗口函数\n- 递归 CTE\n- 函数索引\n- 存储过程和包（PG 11+ 的 PROCEDURE）\n- FDW（类似 Oracle Database Link）\n\n**Oracle 独有的能力**：\n- RAC（Real Application Clusters）：多主写入，PostgreSQL 没有对等方案\n- Flashback Query：恢复到任意过去时间点\n- 更好的优化器（基于成本的优化器更成熟）\n- 更好的并行查询\n- DataGuard（更强的灾备）\n\n**Oracle 的"坑"**：\n- 授权费：$47,500/processor core（企业版）\n- 空字符串等于 NULL（违反 SQL 标准）\n- 锁升级可能导致性能问题\n\n很多企业"去 Oracle 化"，PostgreSQL + orafce 扩展（兼容 Oracle SQL 语法）+ EDB（EnterpriseDB 的商业支持）是主流技术路线。',
      },
      {
        title: 'PostgreSQL vs SQL Server vs SQLite',
        content: '**SQL Server**：微软的商业数据库。与 .NET/Azure 生态深度绑定。SSMS（管理工具）和 SSIS（ETL 工具）成熟好用。T-SQL 语法与 PL/pgSQL 有差异但在可学习范围内。Windows 集成好，Linux 上不如 PostgreSQL。\n\n**SQLite**：嵌入式数据库，不是一个数据库服务器。非常适合客户端应用（浏览器、移动 App、IoT 设备）和低流量 Web 应用。并发写入能力有限（同一时间只能一个连接写）。不需要安装、配置、管理——一个文件就包含整个数据库。SQLite 在"零管理"场景中是无敌的。\n\nPostgreSQL 则是服务器级数据库——需要独立的进程、用户认证、网络连接。这既是功能强大的来源也是运维复杂度的来源。',
      },
    ],
    diagnosis: [
      {
        symptom: '从 MySQL 迁移到 PostgreSQL，之前能跑的 SQL 报错',
        cause: '方言差异：MySQL 的 ` 是标识符引用符，PostgreSQL 用 "。MySQL 的 LIMIT m,n 对应 PostgreSQL 的 LIMIT n OFFSET m。MySQL 允许 SELECT 不在 GROUP BY 中的列（非标准行为），PostgreSQL 严格禁止。MySQL 的大小写处理不同。',
        fix: '使用 sql-mode 工具或手动检查：1) 反引号改成双引号；2) LIMIT offset,count 改成 LIMIT count OFFSET offset；3) 修复 GROUP BY 违规查询；4) 注意时间类型差异（MySQL 的 DATETIME vs PG 的 timestamptz）。使用 AWS SCT（Schema Conversion Tool）自动转换 schema。',
      },
      {
        symptom: '从 Oracle 迁移到 PostgreSQL，日期函数全部报错',
        cause: 'Oracle 使用 SYSDATE、TO_DATE(\'...\', \'YYYY-MM-DD\')、ADD_MONTHS()。PostgreSQL 使用 now()、to_date(\'...\', \'YYYY-MM-DD\')、date + interval。函数名和参数顺序不同。',
        fix: '安装 orafce 扩展（CREATE EXTENSION orafce;），它提供了 SYSDATE()、ADD_MONTHS()、TO_CHAR()（Oracle 版本）等兼容函数。或者用 SQL 翻译工具批量替换。注意 Oracle 的空字符串 = NULL 行为在 PostgreSQL 中不同（\'\' != NULL）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '对比 PostgreSQL 和 MySQL 的 SHOW/\\d 命令：列出当前数据库中的所有表和视图',
        hint: 'pg_tables + pg_views',
        answer: "-- PostgreSQL\nSELECT tablename FROM pg_tables WHERE schemaname = 'public'\nUNION ALL SELECT viewname FROM pg_views WHERE schemaname = 'public'\nORDER BY 1;\n-- MySQL\nSHOW TABLES;",
      },
      {
        level: '进阶',
        task: '写一段实验：在 PostgreSQL 和 MySQL（如果可用）中执行相同的 CTE 递归查询（如生成 1 到 10 的序列），比较语法和执行计划',
        hint: 'WITH RECURSIVE cte AS (...)',
        answer: "-- PostgreSQL\nWITH RECURSIVE nums AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM nums WHERE n < 10) SELECT * FROM nums;\n-- MySQL 8.0+: 语法相同\nWITH RECURSIVE nums AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM nums WHERE n < 10) SELECT * FROM nums;",
      },
      {
        level: '挑战',
        task: '模拟"去 Oracle 化"迁移：写一个转换脚本（用 psql 的 \\gset 或 plpgsql），将常见的 Oracle 函数调用转换为 PostgreSQL 等价语句',
        hint: 'NVL → COALESCE, DECODE → CASE WHEN, SYSDATE → now()',
        answer: "CREATE OR REPLACE FUNCTION oracle_compat() RETURNS void AS $$\nBEGIN\n  -- NVL(col, default) → COALESCE(col, default)\n  -- DECODE(col, v1, r1, v2, r2, default) → CASE col WHEN v1 THEN r1 WHEN v2 THEN r2 ELSE default END\n  -- SYSDATE → now()\n  -- ROWNUM → row_number() OVER()\n  RAISE NOTICE 'Install orafce extension for Oracle compatibility: CREATE EXTENSION orafce;';\nEND;\n$$ LANGUAGE plpgsql;\nSELECT oracle_compat();",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 12: Databases / 数据库
  // ═══════════════════════════════════════════════
  "DU-D3-j9h6i9Nj5ci8hlX": {
    mentalModel: 'PostgreSQL 的"数据库（Database）"是一个独立的数据容器——就像一个大楼（Database Cluster）里的一个房间。每个数据库有自己的系统目录、自己的权限体系、自己的 WAL 日志。同一个 PostgreSQL 实例可以托管几百个数据库，它们之间物理隔离。',
    sections: [
      {
        title: 'Database Cluster — 一个 PostgreSQL 服务就是一个 Cluster',
        content: '很多人混淆"数据库"和"数据库集群"。在 PostgreSQL 中：\n\n- **Database Cluster（数据库集群）**：一个 PostgreSQL 实例（一组进程 + 一个数据目录 $PGDATA）。不是多台服务器组成的集群，而是指一组 databases 的集合。每个 cluster 有自己独立的：\n  - pg_control（全局控制信息）\n  - WAL（预写式日志）\n  - Shared Buffer（共享内存缓冲区）\n  - postmaster 进程（主进程）\n  - 认证配置文件（pg_hba.conf）\n\n- **Database**：Cluster 中的一个逻辑容器。每个 database 有：\n  - 独立的系统目录（pg_class 等在不同的 database 中是不同的内容）\n  - 独立的命名空间（schema.table）\n  - 独立的连接权限\n\n- **关键限制**：Cross-database queries（跨数据库查询）不能用普通的 SELECT。必须用 dblink 或 FDW（Foreign Data Wrapper）。这是 PostgreSQL 的一个重要设计限制——同一个 cluster 内的 database 是物理隔离的。',
      },
      {
        title: '数据库的创建与模板',
        content: 'CREATE DATABASE 的本质是复制一个"模板数据库"。\n\n默认模板：template1。当你执行 CREATE DATABASE myapp; 时：\n1. PostgreSQL 打开 template1 并复制其结构（表和元数据）。\n2. 生成一个新的 OID 分配给新数据库。\n3. 创建新的 $PGDATA/base/<oid>/ 目录。\n\ntemplate0 是"纯净"模板（不可修改、不可连接），用于在 template1 被污染时恢复创建数据库的能力。\n\n实用技巧：如果你想让每个新数据库自动包含某些表或扩展，在 template1 中安装即可：\n```sql\n\\c template1\nCREATE EXTENSION IF NOT EXISTS pgcrypto;\nCREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";\n-- 之后所有 CREATE DATABASE 都会自动包含这些扩展\n```\n\n数据库级配置：ALTER DATABASE myapp SET enable_seqscan = off; 对特定数据库设置默认参数。这会影响所有连接到该数据库的会话（除非客户端显式覆盖）。',
      },
      {
        title: '查看数据库的存储细节',
        content: '每个数据库的物理存储位于 $PGDATA/base/<dboid>/ 目录下。你可以通过以下查询找到数据库的文件：\n\nSELECT oid AS db_oid, datname, pg_relation_filepath(oid) AS base_path\nFROM pg_database WHERE datname = current_database();\n\n数据库的磁盘使用包括：\n- **表文件**：$PGDATA/base/<dboid>/<relfilenode>\n- **空闲空间映射（FSM）**：..._fsm\n- **可见性映射（VM）**：..._vm\n- **TOAST 表**：关联的 TOAST 对象的文件（relkind=\'t\'）\n- **事务日志（CLOG）**：在 $PGDATA/pg_xact/ 中\n\n用 pg_total_database_size() 可以看到某个数据库的总磁盘占用。如果磁盘吃紧，先从最大的数据库开始排查。',
      },
    ],
    handsOn: [
      {
        title: '查看所有数据库及其大小',
        cmd: "SELECT datname, pg_size_pretty(pg_database_size(datname)) AS size, datconnlimit, (SELECT count(*) FROM pg_stat_activity WHERE datname = d.datname) AS conn_count FROM pg_database d ORDER BY pg_database_size(datname) DESC;",
        output: '  datname   |  size   | datconnlimit | conn_count\n------------+---------+--------------+------------\n myapp      | 256 MB  |           -1 |         15\n postgres   | 12 MB   |           -1 |          1\n template1  | 8433 kB |           -1 |          0\n template0  | 8401 kB |           -1 |          0',
        explain: 'pg_database_size() 返回字节数，pg_size_pretty() 转成可读格式。datconnlimit=-1 表示无限制。conn_count 显示当前连接数。这是 DBA 的每日健康检查命令。',
      },
      {
        title: '创建数据库并指定所有者和编码',
        cmd: "CREATE DATABASE test_chinese OWNER postgres ENCODING 'UTF8' LC_COLLATE 'zh_CN.UTF-8' LC_CTYPE 'zh_CN.UTF-8' TEMPLATE template0;\n\\l test_chinese",
        output: '                                          List of databases\n     Name     |  Owner   | Encoding |   Collate   |    Ctype    | ICU Locale | Locale Provider | Access privileges\n--------------+----------+----------+-------------+-------------+------------+-----------------+-------------------\n test_chinese | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 |            | libc            |',
        explain: 'LC_COLLATE 决定字符串排序规则（ORDER BY 的结果）。zh_CN.UTF-8 按拼音排序（这很重要——中文排序如果选 en_US 会乱序）。LC_CTYPE 决定字符分类（大小写转换、正则表达式行为）。TEMPLATE template0 指定用纯净模板创建。注意 LC_COLLATE 和 LC_CTYPE 一旦创建就不能改，只有重建数据库才能变更。',
      },
      {
        title: '跨数据库访问 — FDW 实现',
        cmd: "CREATE EXTENSION IF NOT EXISTS postgres_fdw;\nCREATE SERVER other_db FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'localhost', dbname 'other_db_name', port '5432');\nCREATE USER MAPPING FOR CURRENT_USER SERVER other_db OPTIONS (user 'postgres', password 'secret');\nCREATE FOREIGN TABLE remote_users (id integer, name text) SERVER other_db OPTIONS (schema_name 'public', table_name 'users');\nSELECT * FROM remote_users LIMIT 3;",
        output: ' id |  name\n----+--------\n  1 | Alice\n  2 | Bob\n  3 | Charlie',
        explain: 'postgres_fdw 让你像查询本地表一样查询远程数据库的表。CREATE FOREIGN TABLE 映射远程表到本地。OPTIONS 中指定远程的 schema 和 table 名。注意网络延迟——每个查询都是远程执行，数据通过连接传输。大批量操作可能比本地表慢 10-100 倍。',
      },
    ],
    diagnosis: [
      {
        symptom: 'CREATE DATABASE 报错 "source database template1 is being accessed by other users"',
        cause: '有其他会话正在连接到 template1，导致无法安全复制它。',
        fix: 'SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = \'template1\' AND pid != pg_backend_pid(); 终止其他连接到 template1 的会话。或用 template0 代替 template1：CREATE DATABASE newdb TEMPLATE template0;',
      },
      {
        symptom: '删除了一个数据库，但磁盘空间没有释放',
        cause: 'DROP DATABASE 在 PostgreSQL 中是一个"先标记后清理"的过程。实际的文件删除可能在 checkpoint 之后才完成。如果有其他进程持有该数据库的文件句柄，延迟会更久。',
        fix: '等待 checkpoint 自然发生（默认 checkpointer 间隔是 5 分钟），或手动 CHECKPOINT;。然后检查磁盘空间：df -h $PGDATA。如果仍然没释放，可能是操作系统层面的问题（NFS 挂载、文件系统快照等）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建两个数据库（db_a 和 db_b），在每个数据库中各创建一张表，插入不同数据，验证跨数据库隔离性',
        hint: '\\c 命令切换数据库连接',
        answer: "CREATE DATABASE db_a;\nCREATE DATABASE db_b;\n\\c db_a\nCREATE TABLE items (id serial PRIMARY KEY, name text);\nINSERT INTO items (name) VALUES ('from db_a');\n\\c db_b\nCREATE TABLE items (id serial PRIMARY KEY, name text);\nINSERT INTO items (name) VALUES ('from db_b');\n-- 验证隔离：\\c db_a; SELECT * FROM items; 只看到 'from db_a'",
      },
      {
        level: '进阶',
        task: '在你的 template1 中安装一个扩展（如 pgcrypto 或 tablefunc），然后基于 template1 创建新数据库，验证新数据库自动包含该扩展',
        hint: '\\c template1; CREATE EXTENSION; 然后 CREATE DATABASE',
        answer: "\\c template1\nCREATE EXTENSION IF NOT EXISTS pgcrypto;\nCREATE DATABASE test_template_ext;\n\\c test_template_ext\nSELECT extname FROM pg_extension;\n-- 应该看到 pgcrypto 已在列表中\nDROP DATABASE test_template_ext;\n-- 清理：\\c template1; DROP EXTENSION pgcrypto;",
      },
      {
        level: '挑战',
        task: '使用 postgres_fdw 在两个数据库之间建立连接，从 db_a 插入数据到 db_b。写一个触发器实现简单的跨数据库数据同步',
        hint: 'postgres_fdw + FOREIGN TABLE + AFTER INSERT TRIGGER',
        answer: "-- 在 db_b 中创建\nCREATE SCHEMA federation;\nCREATE TABLE federation.sync_target (id integer PRIMARY KEY, source text, synced_at timestamptz DEFAULT now());\n-- 在 db_a 中\nCREATE EXTENSION postgres_fdw;\nCREATE SERVER db_b_link FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host 'localhost', dbname 'db_b', port '5432');\nCREATE USER MAPPING FOR CURRENT_USER SERVER db_b_link OPTIONS (user 'postgres');\nCREATE FOREIGN TABLE federation_sync (id integer, source text) SERVER db_b_link OPTIONS (schema_name 'federation', table_name 'sync_target');\nCREATE OR REPLACE FUNCTION sync_to_other_db() RETURNS trigger AS $$\nBEGIN INSERT INTO federation_sync VALUES (NEW.id, NEW.name); RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\nCREATE TRIGGER sync_trigger AFTER INSERT ON local_table FOR EACH ROW EXECUTE FUNCTION sync_to_other_db();",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 13: Basic RDBMS Concepts / RDBMS 基础概念
  // ═══════════════════════════════════════════════
  "-M9EFgiDSSAzj9ISk-aeh": {
    mentalModel: 'RDBMS 的核心概念就像"搭建数据世界的脚手架"：主键是每个实体的身份证号，外键是实体之间的关系纽带，索引是数据的快速检索通道，规范化是防止数据冗余的设计原则。这些基础概念构成了所有关系型数据库的通用语言。',
    sections: [
      {
        title: '主键（Primary Key）— 行的身份证',
        content: '主键是表中唯一标识每一行的列（或列的组合）。核心特性：\n\n1. **唯一性**：每行的主键值必须唯一，不能重复。\n2. **非空性**：主键列不能为 NULL。\n3. **不可变性**：主键值创建后不应修改（虽然技术上可以改，但会导致外键引用失效）。\n\n主键类型选择：\n- **自然键**：业务中天然存在的标识符（如身份证号、ISBN、email）。优点是有业务含义。缺点是业务规则可能变化——身份证号会升级位数，email 可能被回收。\n- **代理键**：系统生成的、无业务含义的标识符（如 serial、UUID）。优点是永远不变，改业务逻辑不影响主键。缺点是多占一列，一些 JOIN 可能需要额外的唯一索引来查询。\n\nPostgreSQL 实现：PRIMARY KEY 底层是一个 UNIQUE NOT NULL INDEX。查询时通过索引快速定位（B-tree 索引）。',
      },
      {
        title: '外键（Foreign Key）— 表与表的桥梁',
        content: '外键建立了表之间的引用关系，保证引用完整性。订单的 user_id 必须对应一个存在的用户。\n\n外键的行为——ON DELETE / ON UPDATE：\n- **RESTRICT / NO ACTION**：如果子表有引用，禁止删除父表行。这是默认行为，最安全。\n- **CASCADE**：删除父表行时自动删除所有引用的子表行。危险但有用——删除一个博客文章时级联删除所有评论。\n- **SET NULL**：父表行删除后，子表的外键列设为 NULL。需要有权限（列允许 NULL）。\n- **SET DEFAULT**：设为列的默认值。\n\n性能注意事项：\n1. 外键列务必建索引——否则每次 INSERT/UPDATE 子表都要全表扫描父表验证引用存在。\n2. DELETE CASCADE 在大量子行时可能造成长事务。考虑分批删除或用软删除。\n3. 外键和触发器可能形成复杂的级联链条，注意性能影响。',
      },
      {
        title: '规范化（Normalization）— 减少冗余的艺术',
        content: '数据库规范化是一组设计原则，目标是减少数据冗余和更新异常。\n\n**第一范式（1NF）**：每列是原子值（不可再分）。反例：一列存"数学,语文,英语"三个科目成绩。正例：成绩单独一列，用行区分科目。\n\n**第二范式（2NF）**：非主键列完全依赖于整个主键（不能部分依赖）。反例：订单明细表的主键是(order_id, product_id)，但 product_name 只依赖 product_id（不依赖 order_id）。正例：product_name 放在 products 表中。\n\n**第三范式（3NF）**：非主键列不依赖于其他非主键列（消除传递依赖）。反例：user_id → user_name → user_email。正例：通过 JOIN 获取 user_name，不冗余存储。\n\n超越 3NF（BCNF、4NF、5NF）在实际业务中很少需要。大多数应用满足 3NF 已经足够。\n\n**反规范化的智慧**：有时故意冗余一些数据可以提升性能。如订单表中冗余存储当时的商品名称（防止后续改名导致历史数据变化）。这是一种刻意的设计选择，不是"不规范"。',
      },
    ],
    handsOn: [
      {
        title: '创建带主键和外键的表',
        cmd: "CREATE TABLE departments (id serial PRIMARY KEY, name text NOT NULL UNIQUE);\nCREATE TABLE employees (id serial PRIMARY KEY, name text NOT NULL, dept_id integer REFERENCES departments(id) ON DELETE SET NULL, salary numeric(10,2) CHECK (salary > 0));\nINSERT INTO departments (name) VALUES ('Engineering'), ('HR'), ('Sales');\nINSERT INTO employees (name, dept_id, salary) VALUES ('Alice', 1, 80000), ('Bob', 2, 60000), ('Charlie', 1, 90000);\nSELECT e.name, d.name AS dept, e.salary FROM employees e JOIN departments d ON e.dept_id = d.id;",
        output: '  name   |    dept     | salary\n---------+-------------+--------\n Alice   | Engineering |  80000\n Bob     | HR          |  60000\n Charlie | Engineering |  90000',
        explain: 'REFERENCES departments(id) 建立外键约束。ON DELETE SET NULL 表示删除部门时，员工的 dept_id 设为 NULL（而不是删除员工）。CHECK (salary > 0) 确保薪资为正数。这些约束保证了数据质量，帮应用层避免了大量数据校验代码。',
      },
      {
        title: '验证外键约束的作用',
        cmd: "INSERT INTO employees (name, dept_id, salary) VALUES ('Dave', 999, 50000);",
        output: 'ERROR:  insert or update on table "employees" violates foreign key constraint "employees_dept_id_fkey"\nDETAIL:  Key (dept_id)=(999) is not present in table "departments".',
        explain: '外键拒绝了引用不存在的部门 999。这种"在数据库层面拒绝脏数据"的能力是关系型数据库的护城河。应用层的 bug 不会产生坏数据——数据库是最后一道防线。',
      },
      {
        title: '测试级联删除',
        cmd: "DELETE FROM departments WHERE name = 'HR';\nSELECT * FROM employees;",
        output: ' id |  name   | dept_id | salary\n----+---------+---------+--------\n  1 | Alice   |       1 |  80000\n  2 | Bob     |         |  60000\n  3 | Charlie |       1 |  90000',
        explain: 'Bob 原来属于 HR（dept_id=2）。删除 HR 部门后，因 ON DELETE SET NULL，Bob 的 dept_id 变为 NULL（不是整行被删除）。注意 Alice 和 Charlie 仍在——因为 Engineering 部门没有被删除。',
      },
    ],
    diagnosis: [
      {
        symptom: 'INSERT 报 "violates foreign key constraint"，但确信引用的行存在',
        cause: '可能是引用的行在另一个事务中还未提交。默认的 READ COMMITTED 隔离级别看不到未提交的变更。也可能是外键指定了错误的列或引用了错误的表。',
        fix: '检查外键定义：\\d table_name。检查父表数据：SELECT * FROM parent_table WHERE pk_col = <value>。如果父表数据确实存在，检查是否在同一事务中先提交了父表的 INSERT。确认隔离级别：SHOW transaction_isolation;',
      },
      {
        symptom: 'JOIN 查询变慢，但单表查询很快',
        cause: '外键列上没有索引。JOIN 时如果没有索引，PostgreSQL 会对其中一张表做全表扫描（通常是嵌套循环中较小的表），或是 Hash Join 需要把一张表全量加载到内存。',
        fix: '对外键列创建索引：CREATE INDEX idx_employees_dept_id ON employees(dept_id); 对所有外键列都建索引是黄金法则。检查索引使用情况：EXPLAIN ANALYZE SELECT ...。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建用户表和订单表，用外键建立关联，插入几条数据后用 JOIN 查询每个用户的订单',
        hint: 'REFERENCES users(id) 定义外键',
        answer: "CREATE TABLE users (id serial PRIMARY KEY, name text NOT NULL);\nCREATE TABLE orders (id serial PRIMARY KEY, user_id integer NOT NULL REFERENCES users(id), product text, amount numeric(10,2));\nINSERT INTO users (name) VALUES ('Alice'), ('Bob');\nINSERT INTO orders (user_id, product, amount) VALUES (1, 'Book', 29.90), (1, 'Pen', 5.00), (2, 'Notebook', 15.00);\nSELECT u.name, o.product, o.amount FROM users u JOIN orders o ON u.id = o.user_id;",
      },
      {
        level: '进阶',
        task: '设计一个不满足 3NF 的表（包含传递依赖），然后将其规范化为 3NF（拆分成两张表）',
        hint: '传递依赖：A → B → C',
        answer: "-- 不满足 3NF：order_items 中有 product_name 依赖于 product_id（非主键列）\nCREATE TABLE order_items_bad (order_id integer, product_id integer, product_name text, qty integer, PRIMARY KEY (order_id, product_id));\n-- 规范化：product_name 移到 products 表\nCREATE TABLE products (id serial PRIMARY KEY, name text NOT NULL, price numeric(10,2));\nCREATE TABLE order_items_good (order_id integer, product_id integer REFERENCES products(id), qty integer, PRIMARY KEY (order_id, product_id));",
      },
      {
        level: '挑战',
        task: '设计一个社交网络的简单数据模型（用户、好友关系、帖子、评论），用 DDL 实现所有表（含主键和外键），并说明如何查询"某用户的所有好友的帖子"',
        hint: '好友关系是用户表对自身的多对多关系，需要中间表',
        answer: "CREATE TABLE users (id bigserial PRIMARY KEY, username text UNIQUE NOT NULL, created_at timestamptz DEFAULT now());\nCREATE TABLE friendships (user_id bigint REFERENCES users(id), friend_id bigint REFERENCES users(id), created_at timestamptz DEFAULT now(), PRIMARY KEY (user_id, friend_id), CHECK (user_id < friend_id));\nCREATE TABLE posts (id bigserial PRIMARY KEY, author_id bigint REFERENCES users(id), content text NOT NULL, created_at timestamptz DEFAULT now());\nCREATE TABLE comments (id bigserial PRIMARY KEY, post_id bigint REFERENCES posts(id), author_id bigint REFERENCES users(id), content text NOT NULL, created_at timestamptz DEFAULT now());\n-- 查询某用户(1)的好友的帖子：\n-- SELECT p.* FROM posts p WHERE p.author_id IN (SELECT friend_id FROM friendships WHERE user_id = 1 UNION SELECT user_id FROM friendships WHERE friend_id = 1);",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 14: Object Model / 对象模型
  // ═══════════════════════════════════════════════
  "RoYP1tYw5dvhmkVTo1HS-": {
    mentalModel: 'PostgreSQL 的对象模型就像"万物皆对象"的哲学——不仅是表，索引、函数、视图、序列、类型、操作符、规则等都是数据库对象。每个对象都有唯一的 OID，都注册在系统目录中，都可以通过 SQL 或系统目录查询来创建和修改。',
    sections: [
      {
        title: '数据库对象的分类体系',
        content: 'PostgreSQL 中所有可命名的实体都是"对象"。pg_class 系统表记录了所有"具有列的"对象（表、索引、视图、物化视图、序列、复合类型、TOAST 表）。\n\n主要对象类型及其 OID 分配范围：\n\n- **表（relation）**：relkind = \'r\'（普通表）、\'p\'（分区表）、\'t\'（TOAST 表）\n- **索引**：relkind = \'i\'（B-tree/Hash/GiST/GIN/BRIN 索引）、\'I\'（分区索引）\n- **序列**：relkind = \'S\'（底层是表，但行为特殊）\n- **视图**：relkind = \'v\'（规则重写实现的虚拟表）、\'m\'（物化视图——有物理存储）\n- **函数/存储过程**：记录在 pg_proc\n- **类型**：记录在 pg_type（基础类型、复合类型、枚举、域）\n- **操作符**：记录在 pg_operator（如 +、-、@>、&&）\n- **外部表**：relkind = \'f\'（通过 FDW 映射的远程表）\n- **扩展**：记录在 pg_extension（模块化安装的功能包）\n\n对象之间的依赖关系通过 pg_depend 记录。例如一个索引依赖于一张表，删除表时索引自动被删除。DROP ... CASCADE 就是通过追踪 pg_depend 实现的级联删除。',
      },
      {
        title: 'OID — 全局唯一对象标识符',
        content: 'OID（Object Identifier）是 PostgreSQL 内部用于唯一标识每个对象的 32 位整数。\n\n关键特性：\n1. 全局范围：每个 PostgreSQL 实例（Cluster）内 OID 是唯一的。表有 OID，函数有 OID，类型有 OID。\n2. 系统 OID 固定：pg_class 的 OID = 1259，pg_type 的 OID = 1247，这些永不改变。\n3. 用户对象 OID 从 16384 开始分配（OID 生成器）。\n4. OID 会回绕（wraparound）：32 位 = 约 43 亿，对于频繁创建/删除对象的系统可能耗尽。但 PostgreSQL 用 64 位的 full transaction ID 解决了事务 ID 回绕问题（通过 pg_resetxlog 可以重置 OID 计数器）。\n\nOID 类型转换快捷方式：\n- \'tablename\'::regclass → 表名转 OID（需要搜索路径解析）\n- oid::regclass → OID 转表名\n- \'pg_catalog.pg_class\'::regclass → 完全限定表名转 OID',
      },
      {
        title: '对象之间的关系 — 依赖和引用',
        content: 'pg_depend 表记录了所有对象之间的依赖关系：\n\n- **DEPENDENCY_NORMAL (\'n\')**：普通依赖。如索引依赖表、视图依赖基表。删除被依赖对象时会级联删除当前对象（如果没用 CASCADE 则拒绝删除）。\n- **DEPENDENCY_AUTO (\'a\')**：自动依赖。如列的默认值依赖序列。自动处理，一般不需要显式关注。\n- **DEPENDENCY_INTERNAL (\'i\')**：内部依赖。如主键约束对索引的依赖（内部索引不能单独删除）。\n\n查询依赖关系：\n```sql\nSELECT depender.oid::regclass AS object,\n       dependee.oid::regclass AS depends_on\nFROM pg_depend d\nJOIN pg_class depender ON d.objid = depender.oid\nJOIN pg_class dependee ON d.refobjid = dependee.oid\nWHERE depender.oid = \'my_table\'::regclass;\n```\n\n当你 DROP TABLE ... CASCADE 时，PostgreSQL 遍历 pg_depend 找出所有依赖该表的对象并一同删除。这就是"级联"的实现。',
      },
    ],
    handsOn: [
      {
        title: '用 regclass 转换 OID 到表名',
        cmd: "SELECT oid, oid::regclass AS name FROM pg_class WHERE relname = 'pg_class' AND relkind = 'r';",
        output: ' oid  |     name\n------+--------------\n 1259 | pg_class',
        explain: 'oid 是 1259（pg_class 的系统 OID）。::regclass 把 OID 转成可读表名。反向操作：\'pg_class\'::regclass 返回 1259。regclass 类型还处理了 search_path 的解析——如果当前 search_path 包含 schema_a，\'table_x\'::regclass 会解析为 schema_a.table_x 的 OID。',
      },
      {
        title: '探索 pg_class 中的所有对象类型',
        cmd: "SELECT relkind, CASE relkind WHEN 'r' THEN '普通表' WHEN 'i' THEN '索引' WHEN 'S' THEN '序列' WHEN 'v' THEN '视图' WHEN 'm' THEN '物化视图' WHEN 'f' THEN '外部表' WHEN 'p' THEN '分区表' WHEN 't' THEN 'TOAST表' ELSE relkind::text END AS type_name, count(*) AS cnt FROM pg_class WHERE relnamespace = 'pg_catalog'::regnamespace GROUP BY relkind ORDER BY cnt DESC;",
        output: ' relkind | type_name | cnt\n---------+-----------+-----\n i       | 索引      |  134\n r       | 普通表    |   65\n S       | 序列      |   56\n v       | 视图      |   21\n t       | TOAST表   |    8',
        explain: 'pg_catalog schema 中有 134 个索引、65 张系统表、56 个序列。索引是数量最多的对象类型——每个主键/唯一约束都会自动创建一个索引。TOAST 表中的 8 个对应系统表中包含大字段的表。',
      },
    ],
    diagnosis: [
      {
        symptom: 'DROP TABLE 报 "cannot drop ... because other objects depend on it"',
        cause: '有其他对象（视图、外键、函数等）依赖该表。PostgreSQL 拒绝让依赖对象"悬空"。',
        fix: '查看依赖：SELECT distinct referenced_relation::regclass FROM pg_depend WHERE refobjid = \'table_name\'::regclass; 或用 DROP TABLE ... CASCADE 级联删除所有依赖对象（小心！）。安全的做法是先了解所有依赖，逐一处理。',
      },
      {
        symptom: 'pg_dump 备份恢复时报 "function ... does not exist"，但源库中明明有',
        cause: '对象之间的依赖顺序问题。pg_dump 默认按依赖顺序导出，但如果你的函数 A 调用函数 B，而函数 B 在函数 A 之后导出，恢复时就会报错。',
        fix: 'pg_dump 一般能处理好依赖顺序。如果确认是依赖顺序问题，用 pg_restore -l 列出对象顺序，手动调整（用文本编辑器）。或者先创建所有函数但不处理函数体（设为 body 为空），然后逐步添加。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 pg_class 列出 public schema 中所有对象的名称和类型（表/视图/索引/序列）',
        hint: 'JOIN pg_namespace 过滤 schema',
        answer: "SELECT c.relname, CASE c.relkind WHEN 'r' THEN '表' WHEN 'i' THEN '索引' WHEN 'v' THEN '视图' WHEN 'm' THEN '物化视图' WHEN 'S' THEN '序列' END AS type FROM pg_class c JOIN pg_namespace n ON c.relnamespace = n.oid WHERE n.nspname = 'public' ORDER BY type, c.relname;",
      },
      {
        level: '进阶',
        task: '创建一个视图和一张表，视图依赖该表。然后在 pg_depend 中找出这个依赖关系',
        hint: 'pg_depend.objid = 视图的 OID，refobjid = 表的 OID',
        answer: "CREATE TABLE base_table (id integer PRIMARY KEY);\nCREATE VIEW my_view AS SELECT * FROM base_table;\nSELECT obj.oid::regclass AS dependent_obj, ref.oid::regclass AS depends_on FROM pg_depend d JOIN pg_class obj ON d.objid = obj.oid JOIN pg_class ref ON d.refobjid = ref.oid WHERE obj.oid = 'my_view'::regclass;",
      },
      {
        level: '挑战',
        task: '写一个查询，遍历 pg_depend 找出所有"孤立"的对象——没有任何其他对象依赖它的表和视图',
        hint: '用 LEFT JOIN 和 IS NULL',
        answer: "SELECT c.oid::regclass AS orphan_object FROM pg_class c LEFT JOIN pg_depend d ON c.oid = d.refobjid WHERE c.relkind IN ('r','v','m') AND c.relnamespace = 'public'::regnamespace AND d.refobjid IS NULL AND c.oid NOT IN (SELECT objid FROM pg_depend WHERE deptype = 'i') ORDER BY c.relname;",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 15: High Level Database Concepts / 数据库高级概念
  // ═══════════════════════════════════════════════
  "_BSR2mo1lyXEFXbKYb1ZG": {
    mentalModel: '数据库架构就像一个大型图书馆的运作体系——查询计划器是图书管理员（决定如何最快找到书），Buffer Pool 是借书台（暂存常用的书），WAL 是借阅记录本（记下每次变动），MVCC 是多个人同时看书不互斥（每人看到自己的版本）。',
    sections: [
      {
        title: '查询执行管线 — 从 SQL 文本到返回结果',
        content: '当客户端发送一条 SELECT 语句时，PostgreSQL 经历以下阶段：\n\n**1. 解析（Parser）**：纯语法分析。SQL 文本 → 语法树（Parse Tree）。检查语法是否正确（如关键字拼写、括号匹配）。不检查表或列是否存在。\n\n**2. 分析（Analyzer）**：语义分析。语法树 → 查询树（Query Tree）。解析表名（通过 search_path）、列名（通过 pg_attribute）、函数名（通过 pg_proc），检查权限。\n\n**3. 重写（Rewriter）**：应用规则系统（Rule System）。视图展开为基表查询，行级安全策略（RLS）注入 WHERE 条件。这个阶段在 "纯粹" 的 SQL 查询中不常见，但视图离不开它。\n\n**4. 规划（Planner）**：生成执行计划。基于统计信息（pg_statistic）估算每个可能计划的代价（cost），选择代价最低的。考虑因素：可用的索引、表大小、列分布（直方图）、JOIN 顺序。\n\n**5. 执行（Executor）**：按计划执行。从 Buffer Pool 读取页面、执行扫描和过滤、计算表达式、排序、返回结果给客户端。\n\n了解这个管线有什么用？当查询慢时，EXPLAIN 显示执行计划让你知道规划器选择了什么策略，然后你可以通过索引、统计信息、查询改写来影响规划器的决策。',
      },
      {
        title: '内存架构 — Shared Buffer、Work Mem、Maintenance Work Mem',
        content: 'PostgreSQL 的内存使用分为几个关键区域：\n\n**Shared Buffers（共享内存缓冲区）**：所有后端进程共享的内存区域，用于缓存数据页（表和索引的 8KB 页）。默认 128MB，建议设置为物理内存的 25%。这是 PostgreSQL 最重要的内存参数。\n\n工作原理：\n1. 查询需要某页时，先在 Shared Buffers 中查找（Buffer Lookup）。\n2. 如果命中（Cache Hit），直接使用，无 I/O。\n3. 如果未命中（Cache Miss），从磁盘读取到 Shared Buffers，驱逐最不常用的旧页（使用 Clock Sweep 算法，类似 LRU 的变体）。\n\n**Work Mem（工作内存）**：每个查询操作可用的私有内存。用于排序（ORDER BY）、哈希表（Hash Join、Hash Aggregate）、位图扫描（Bitmap Index Scan）。默认 4MB。如果需要排序 10MB 数据，会溢出到磁盘（temp files），大幅变慢。\n\n设置原则：work_mem 不是全局限制——有 100 个连接，每个连接做排序，最多可能使用 100 * 4MB = 400MB。所以 work_mem 设置需要考虑并发连接数。\n\n**Maintenance Work Mem**：VACUUM、CREATE INDEX、ADD FOREIGN KEY 等维护操作使用的内存。默认 64MB。对大表建索引时需要适当调高。',
      },
      {
        title: '物理存储架构 — 页、段、表空间',
        content: 'PostgreSQL 的数据文件组织方式：\n\n**页（Page/Block）**：最小的 I/O 单位（默认 8KB，编译时可以改）。每个页包含：\n- Page Header（24 字节）：页级元数据（LSN、校验和等）\n- Item Pointers（每项 4 字节）：指向页内每行实际数据的指针数组\n- Free Space：空闲空间\n- Tuple Data：实际的行数据（从页尾向页头方向生长）\n\n这种双向生长的设计让页内空间利用率很高。\n\n**段（Segment）**：每个表在磁盘上的物理文件。默认 1GB = 1 个文件。超过 1GB 自动分裂（如 table.1, table.2）。\n\n**表空间（Tablespace）**：决定数据文件存储的物理位置（目录路径）。CREATE TABLESPACE fastspace LOCATION \'/mnt/ssd/pgdata\'。可以用它把热数据放到 SSD，冷数据放到 HDD。或跨多个磁盘分散 I/O 负载。\n\n**检查点（Checkpoint）**：定期将 Shared Buffer 中的脏页刷到磁盘。检查点间隔可以调（checkpoint_timeout = 5min，max_wal_size = 1GB）。检查点太频繁 → 磁盘 I/O 高 → 写性能差。检查点太稀 → 崩溃恢复时间长。',
      },
    ],
    handsOn: [
      {
        title: '查看当前缓冲区的命中率',
        cmd: "SELECT datname, blks_hit, blks_read, CASE WHEN blks_hit + blks_read > 0 THEN round(100.0 * blks_hit / (blks_hit + blks_read), 2) ELSE 0 END AS cache_hit_ratio FROM pg_stat_database WHERE datname = current_database();",
        output: ' datname  | blks_hit | blks_read | cache_hit_ratio\n----------+----------+-----------+----------------\n myapp    |   456789 |      1234 |          99.73',
        explain: 'cache_hit_ratio 99.73% 表示 99.73% 的页面请求直接从 Shared Buffers 满足，只有 0.27% 需要磁盘 I/O。这是数据库性能健康的核心指标。低于 95% 说明 Shared Buffers 太小或工作集太大。blks_hit 和 blks_read 各有专门的函数统计。',
      },
      {
        title: '用 EXPLAIN 查看查询是否使用了 temp file（溢出磁盘）',
        cmd: "SET work_mem = '64kB'; -- 极小的 work_mem 强制溢出到磁盘\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM generate_series(1,1000000) ORDER BY random();",
        output: ' Sort Method: external merge  Disk: 17672kB\n Sort Key: (random())',
        explain: 'Sort Method: external merge 表示数据太大，内存放不下，溢出到磁盘临时文件。Disk: 17672kB 是临时文件的大小。如果经常看到 external merge，应考虑调高 work_mem 或优化查询避免大数据量排序。',
      },
    ],
    diagnosis: [
      {
        symptom: '查询时快时慢，完全相同的 SQL 有时 10ms 有时 2s',
        cause: '可能涉及多种因素：1) Shared Buffer 缓存状态不同（冷缓存 vs 热缓存）；2) 其他查询占用了 Shared Buffer（缓存被挤出）；3) Auto VACUUM 在运行；4) Checkpoint 在进行中；5) 锁竞争（其他事务持锁）。',
        fix: '用 EXPLAIN (ANALYZE, BUFFERS) 重复执行几次，观察 buffers 读数。如果 shared hit 波动很大，说明缓存竞争——考虑增加 shared_buffers。查询 pg_stat_activity 看是否有冲突的查询。监控 checkpoint 和 autovacuum 的时间安排。',
      },
      {
        symptom: "设置 work_mem = '256MB' 后，数据库 OOM 被杀",
        cause: 'work_mem 是每个操作的限制，不是全局限制。如果一个复杂查询有 8 个排序操作，实际可以占用 8 * 256MB = 2GB。如果同时有 10 个这样的查询，内存使用会爆炸。',
        fix: "work_mem 的安全上限 = (物理内存 - shared_buffers - 操作系统开销) / (max_connections * 预期的并行操作数)。一般生产环境 work_mem 设在 16MB-64MB 之间。特定的大查询可以 SESSION 级别调高：SET work_mem = '256MB'; 执行查询后恢复。",
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '查看 PostgreSQL 的关键内存和磁盘配置：shared_buffers、work_mem、maintenance_work_mem、wal_level',
        hint: 'SHOW 语句或查询 pg_settings',
        answer: "SELECT name, setting, unit, context FROM pg_settings WHERE name IN ('shared_buffers', 'work_mem', 'maintenance_work_mem', 'wal_level', 'checkpoint_timeout', 'max_wal_size');",
      },
      {
        level: '进阶',
        task: '创建一个 100 万行的测试表，分别用 work_mem=1MB 和 work_mem=128MB 执行 ORDER BY，用 EXPLAIN ANALYZE 对比执行计划中的 Sort Method',
        hint: 'SET work_mem 在当前会话中生效',
        answer: "CREATE TEMP TABLE sort_test (id serial PRIMARY KEY, val integer, data text) ON COMMIT DROP;\nINSERT INTO sort_test (val, data) SELECT random()*1000000, md5(g::text) FROM generate_series(1,100000) g;\nSET work_mem = '1MB';\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM sort_test ORDER BY val;\nSET work_mem = '128MB';\nEXPLAIN (ANALYZE, BUFFERS) SELECT * FROM sort_test ORDER BY val;\n-- 1MB 版本会显示 external merge，128MB 版本显示 quicksort",
      },
      {
        level: '挑战',
        task: '模拟 Shared Buffer 缓存效果：对一张大表执行 SELECT COUNT(*) 两次，对比执行时间。在两次查询之间执行 CHECKPOINT 再测量',
        hint: 'EXPLAIN (ANALYZE, BUFFERS) 看 shared hit vs shared read',
        answer: "CREATE TEMP TABLE cache_test AS SELECT * FROM generate_series(1,10000000) g;\nEXPLAIN (ANALYZE, BUFFERS) SELECT count(*) FROM cache_test; -- 第一次：大量 shared read\nEXPLAIN (ANALYZE, BUFFERS) SELECT count(*) FROM cache_test; -- 第二次：大部分 shared hit\n-- 清理缓存测试：CHECKPOINT; -- 但无法强制清理 shared buffers，重启数据库是唯一方法",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 16: ACID / ACID
  // ═══════════════════════════════════════════════
  "9u7DPbfybqmldisiePq0m": {
    mentalModel: 'ACID 是数据库事务的"安全四要素"：原子性（Atomicity）就像"全有或全无"的开关——要么全部完成，要么全部撤销；一致性（Consistency）像交通规则——数据永远在合法状态；隔离性（Isolation）像隔音房间——并发事务互不干扰；持久性（Durability）像刻在石头上——提交的数据永远不丢。',
    sections: [
      {
        title: '原子性（Atomicity）— 不可分割的操作单元',
        content: '原子性保证事务中的所有操作要么全部成功，要么全部失败。不存在"部分成功"的状态。\n\n经典案例：银行转账——从账户 A 扣 500 元，向账户 B 加 500 元。这两个 UPDATE 必须原子：\n\n```sql\nBEGIN;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;  -- 扣款\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;  -- 到账\nCOMMIT;  -- 如果两个 UPDATE 都成功，提交\n-- 如果任一步失败（如账户 A 余额不足），ROLLBACK 撤销全部更改\n```\n\n如果在扣款后、到账前系统崩溃了，PostgreSQL 在恢复时通过 WAL 发现这个未提交的事务，自动回滚。用户永远不会看到"扣了 500 但没到账"的状态。\n\n实现机制：\n1. WAL 记录所有变更。\n2. 事务状态记录在 CLOG（Commit Log）中。\n3. 崩溃恢复时，重放已提交事务的 WAL，撤销未提交事务的变更。\n\n这是 PostgreSQL 不丢数据的根本保障。',
      },
      {
        title: '一致性（Consistency）— 数据的逻辑正确性',
        content: '一致性有两层含义：\n\n**ACID 中的 C**：事务执行前后，数据库都处于一致状态。一致性由约束（NOT NULL、UNIQUE、CHECK、FOREIGN KEY）和触发器保证。数据库拒绝违反约束的更改。\n\n**CAP 定理中的 C**：分布式系统中，所有节点看到相同的数据。这是不同的概念，别混淆。\n\n实例：\n```sql\nCREATE TABLE accounts (id serial PRIMARY KEY, balance numeric(12,2) CHECK (balance >= 0));\n-- 插入后触发 CHECK 约束，确保 balance 永不为负\nBEGIN;\nUPDATE accounts SET balance = balance - 1000 WHERE id = 1;  -- 当前余额只有 500\nCOMMIT;  -- 报错！balance 不能为负，整个事务回滚\n```\n\n对比：MongoDB（无约束）中，balance 可以变成负数。要保持一致性，需要应用层代码检查。但代码有 bug 的可能性远大于数据库引擎。这就是"数据库约束是最后防线"的含义。',
      },
      {
        title: '隔离性（Isolation）— 并发事务互不干扰',
        content: '隔离性决定了一个事务能看到其他并发事务的什么变更。PostgreSQL 支持 SQL 标准定义的四种隔离级别：\n\n**Read Uncommitted**（PostgreSQL 不支持，等价于 Read Committed）：能看到其他事务未提交的变更（脏读）。危险——如果该事务回滚，你基于的数据就是"不存在"的。\n\n**Read Committed（默认）**：每个语句看到的是该语句开始前已经提交的数据。不会看到脏数据，但同一事务内两个相同的 SELECT 可能返回不同结果（不可重复读）。例如：SELECT balance FROM a; -- 500。期间其他事务提交了 UPDATE a SET balance = 400。再 SELECT balance FROM a; -- 400。\n\n**Repeatable Read**：整个事务看到的是事务开始时的一致性快照。同一事务内多次 SELECT 同一行返回相同值（解决不可重复读）。但可能出现"幻读"——其他事务 INSERT 了匹配你 WHERE 条件的新行。\n\n**Serializable（最高）**：事务的执行效果和串行执行完全一致。PostgreSQL 通过 Serializable Snapshot Isolation（SSI）实现，开销比传统的两阶段锁低很多。这是"最安全也最慢"的级别。\n\n隔离级别选择原则：默认的 Read Committed 适用 90% 的场景。只有当你明确知道需要避免不可重复读时才升级到 Repeatable Read。Serializable 几乎只在金融系统中使用。',
      },
      {
        title: '持久性（Durability）— 承诺了就不会反悔',
        content: '持久性保证一旦事务提交，其效果就是永久的——即使数据库在提交后立即崩溃，重启后数据依然存在。\n\n实现机制链：\n1. **WAL（Write-Ahead Log）**：在修改数据页之前，先写日志。日志落到磁盘 = 变更已持久。\n2. **fsync**：提交时强制 WAL 刷到磁盘（fsync=on 是默认设置）。这保证 OS 页缓存中的 WAL 数据真正写到了物理磁盘。\n3. **Checkpoint**：定期将已提交的脏数据页从 Shared Buffer 刷到磁盘，标记 WAL 中对应位置之前的日志可以回收。\n\n持久性的代价：每次提交都需要等待磁盘 fsync（约 1-10ms）。对于高吞吐写入场景，可以使用异步提交（synchronous_commit = off），但会丢失最后一个未 fsync 批次的事务（通常 < 几百 ms 的数据量）。\n\n权衡：更高的持久性 = 更低的写入性能。金融系统用 synchronous_commit = on（默认），日志分析系统可以用 off。如果你愿意接受"崩溃可能丢失 0.2 秒的数据"，可以关掉同步提交获得 5-10 倍写入吞吐。',
      },
    ],
    handsOn: [
      {
        title: '观察事务的原子性',
        cmd: "CREATE TEMP TABLE acid_test (id integer PRIMARY KEY, balance numeric(12,2) CHECK (balance >= 0)) ON COMMIT DROP;\nINSERT INTO acid_test VALUES (1, 500);\nBEGIN;\nUPDATE acid_test SET balance = balance - 300 WHERE id = 1;\nUPDATE acid_test SET balance = balance - 300 WHERE id = 1; -- 这次会导致 balance 为负\nCOMMIT;",
        output: 'UPDATE 1\nERROR:  new row for relation "acid_test" violates check constraint "acid_test_balance_check"\nDETAIL:  Failing row contains (1, -100.00).\nROLLBACK',
        explain: '第二次 UPDATE 违反了 CHECK (balance >= 0) 约束。整个事务回滚——第一次 UPDATE（扣 300）也被撤销了。这就是原子性：要么两个 UPDATE 都成功，要么都不生效。balance 回到 500。',
      },
      {
        title: '体验不同隔离级别的差异',
        cmd: "-- 会话 1\nBEGIN;\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\nSELECT balance FROM acid_test WHERE id = 1; -- 返回 500\n-- 此时会话 2 执行 UPDATE acid_test SET balance = 600 WHERE id = 1; COMMIT;\n-- 会话 1 继续\nSELECT balance FROM acid_test WHERE id = 1; -- 返回 600（看到了会话 2 的提交）\nCOMMIT;\n-- 对比：如果隔离级别是 REPEATABLE READ，两次 SELECT 都返回 500",
        output: ' balance\n---------\n     500\n(1 row)\n\n balance\n---------\n     600\n(1 row)',
        explain: 'READ COMMITTED 级别下，同一事务内两次相同的 SELECT 看到了不同的结果（不可重复读）。这是默认行为——每个语句看到的是该语句开始时已提交的数据，不保证在整个事务内不变。',
      },
      {
        title: '观察同步提交的 fsync 延迟',
        cmd: "\\timing on\nINSERT INTO acid_test VALUES (2, 100);\n\\timing off\n-- 观察：每次 INSERT 耗时约 1-5ms（包括 fsync 延迟）\nSET synchronous_commit = off;\n\\timing on\nINSERT INTO acid_test VALUES (3, 200);\n\\timing off\n-- 观察：耗时降低到 < 1ms（但崩溃时可能丢失最后的写入）",
        output: 'INSERT 0 1\nTime: 3.215 ms\nSET\nINSERT 0 1\nTime: 0.312 ms',
        explain: 'synchronous_commit = off 后 INSERT 快了约 10 倍。原因是提交不再等待 WAL 写入磁盘——PostgreSQL 只是把 WAL 写到 OS 页缓存，让 OS 在后台刷盘。代价是如果 OS 崩溃或断电，可能丢失最近几毫秒到几百毫秒的提交。',
      },
    ],
    diagnosis: [
      {
        symptom: '事务提交很慢，每个 INSERT 需要 5-10ms',
        cause: '磁盘 fsync 延迟高。HDD 比 SSD 慢很多（5-10ms vs <1ms）。或磁盘控制器有问题。或 WAL 所在的文件系统性能差。',
        fix: '将 WAL 放在单独的快速磁盘上（如 SSD）：初始化时用 --waldir=/ssd/pg_wal。使用带电池保护的写缓存的 RAID 控制器。如果容忍少量数据丢失，设置 synchronous_commit = off 或 synchronous_commit = remote_apply（主从复制场景）。',
      },
      {
        symptom: '高并发下很多事务报 "could not serialize access"',
        cause: '使用了 Serializable 隔离级别，并发事务的读写冲突导致 PostgreSQL 的 SSI（Serializable Snapshot Isolation）检测到潜在的序列化异常，主动回滚部分事务。',
        fix: '降级到 Repeatable Read 或 Read Committed。如果业务确实需要 Serializable，使用重试逻辑：捕获 40001 (serialization_failure) 错误码，等待随机时间后重试。优化事务设计——让事务更短、访问更少的行。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '开启一个事务，插入一条数据但不提交，再开启另一个会话查询该数据，验证是否能看到未提交的数据',
        hint: '使用两个 psql 窗口或两段 \\! psql 模拟',
        answer: "-- 会话 1\nBEGIN;\nINSERT INTO test (val) VALUES ('uncommitted');\n-- 会话 2\nSELECT * FROM test WHERE val = 'uncommitted'; -- 空结果（READ COMMITTED 下看不到未提交数据）\n-- 会话 1\nCOMMIT;\n-- 会话 2\nSELECT * FROM test WHERE val = 'uncommitted'; -- 现在看到了",
      },
      {
        level: '进阶',
        task: '设置隔离级别为 REPEATABLE READ，在一个事务中多次查询同一行，同时另一个会话更新该行并提交。观察能否看到更新',
        hint: 'SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;',
        answer: "-- 会话 1\nBEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nSELECT balance FROM accounts WHERE id = 1; -- 500\n-- 会话 2\nBEGIN;\nUPDATE accounts SET balance = 999 WHERE id = 1;\nCOMMIT;\n-- 会话 1\nSELECT balance FROM accounts WHERE id = 1; -- 仍然是 500（看不到会话 2 的提交）\nCOMMIT;\nSELECT balance FROM accounts WHERE id = 1; -- 999（新事务可以看到）",
      },
      {
        level: '挑战',
        task: '模拟"丢失更新"问题：两个事务同时读取同一行，基于读到的值做修改，然后提交。用 Read Committed 做一次（会发生丢失更新），用 SELECT ... FOR UPDATE 做一次（避免丢失更新）',
        hint: 'FOR UPDATE 对选中的行加排它锁',
        answer: "-- 丢失更新场景（Read Committed）\n-- 会话 1: BEGIN; SELECT balance FROM accounts WHERE id=1; -- 500\n-- 会话 2: BEGIN; SELECT balance FROM accounts WHERE id=1; -- 500\n-- 会话 1: UPDATE accounts SET balance = 500 + 100 WHERE id=1; COMMIT; -- 600\n-- 会话 2: UPDATE accounts SET balance = 500 + 200 WHERE id=1; COMMIT; -- 700（覆盖了会话 1 的更新！）\n-- 正确做法（FOR UPDATE 悲观锁）\n-- 会话 1: BEGIN; SELECT balance FROM accounts WHERE id=1 FOR UPDATE; -- 加锁\n-- 会话 2: BEGIN; SELECT balance FROM accounts WHERE id=1 FOR UPDATE; -- 等待...\n-- 会话 1: UPDATE accounts SET balance = 700 WHERE id=1; COMMIT; -- 释放锁\n-- 会话 2: 得到锁，读到 balance=700，UPDATE balance=700+200=900; COMMIT;",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 17: MVCC / MVCC（多版本并发控制）
  // ═══════════════════════════════════════════════
  "-_ADJsTVGAgXq7_-8bdIO": {
    mentalModel: 'MVCC 就像"历史档案室"——数据从来不会被原地修改或删除，每次 UPDATE 都产生一个新版本，旧版本保留直到确认没人再需要它。这就像图书馆的借阅记录：新书借出创建新记录，旧记录保留用于审计，直到定期清理。',
    sections: [
      {
        title: 'MVCC 的核心原理 — 元组可见性',
        content: 'PostgreSQL 使用 MVCC（Multi-Version Concurrency Control）实现读写不互斥。核心在于每行有隐藏系统列 xmin 和 xmax：\n\n- **xmin**：创建该版本的事务 ID（transaction ID）。表示该行从哪个事务开始"有生命"。\n- **xmax**：删除/更新该版本的事务 ID。默认为 0 表示"还活着"，非 0 表示该版本已被删除或更新。\n\n当事务 T 查询一行时，需要判断该版本是否对 T "可见"：\n1. 版本的 xmin 必须 < T 的快照中记录的"最大已提交事务 ID"（即 xmin 对应的事务在 T 开始前已提交）。\n2. 版本的 xmin 不能是 T 自己的事务 ID（避免看到自己未提交的修改）。\n3. 版本的 xmax 必须是 0，或 xmax 对应的事务在 T 开始后尚未提交（如果已提交，说明该版本已过时）。\n\n规则看起来复杂，但核心思想简单：每个事务都看到了数据库中"自己开始时已提交的、还没被删除/更新的"所有版本。这就是一个快照（Snapshot）。\n\n这个机制带来的好处：SELECT 永远不需要等待 UPDATE 释放锁。读操作不需要申请任何锁。这就是 PostgreSQL 读性能极好且不阻塞写的根本原因。',
      },
      {
        title: 'VACUUM — MVCC 的垃圾回收器',
        content: 'MVCC 的代价是产生死元组（Dead Tuples）。每次 UPDATE 或 DELETE，旧版本不会立刻消失，而是标记 xmax 后保留在页中。这些死元组必须被回收，否则：\n1. 表持续膨胀（Table Bloat）。\n2. 全表扫描要穿过大量死元组，越来越慢。\n3. 事务 ID 回绕风险（如果死元组的 xmin 太旧，可能导致事务 ID 回绕问题）。\n\nVACUUM 的工作：\n1. 扫描表中所有页，找到死元组。\n2. 将死元组占用的空间标记为"可回收"（在空闲空间映射 FSM 中记录）。\n3. 新 INSERT 可以使用回收的空间。\n4. 更新可见性映射（VM），标记哪些页完全没有死元组（Index Only Scan 依赖 VM）。\n\nVACUUM FULL vs VACUUM：\n- VACUUM：回收空间，不缩小表文件（文件大小不变，但可以重复利用内部空间）。可以并发读写。\n- VACUUM FULL：重写整个表，释放磁盘空间给操作系统。但需要 ACCESS EXCLUSIVE 锁（阻塞一切读写），在大表上是灾难性操作。\n\n在 PostgreSQL 中，Auto VACUUM 是自动运行的后台进程。它监控表的变更量，达到阈值自动触发 VACUUM。生产环境中永远不要手动关闭 Auto VACUUM。',
      },
      {
        title: '事务 ID 回绕 — MVCC 的阿喀琉斯之踵',
        content: '事务 ID（XID）是 32 位整数，约 43 亿个。当 XID 用完时会发生回绕（wraparound），导致"未来"事务 ID 小于"过去"事务 ID，所有旧数据突然变得不可见。\n\nPostgreSQL 的解决方案：\n1. XID 空间被划分为两半——一半被视为"过去"，一半被视为"未来"。当前事务看到的 XID 空间约 20 亿个。\n2. 当一行数据的 xmin 比"过去/未来"分界线还老（age > 约 20 亿），必须被"冻结"（Freeze）。冻结后的元组被标记为"对任何事务永远可见"（xmin = FrozenTransactionId = 2）。\n3. VACUUM 不仅清理死元组，还冻结老元组的 xmin。\n4. 如果 VACUUM 长时间不运行，表的 age(relfrozenxid) 超过 autovacuum_freeze_max_age（默认 2 亿），会触发"紧急冻结"（Aggressive VACUUM），跳过脏页检查强制扫描全表。\n\n检查事务年龄：SELECT age(relfrozenxid), relname FROM pg_class WHERE relkind = \'r\' ORDER BY age(relfrozenxid) DESC LIMIT 5; 这个查询能发现哪张表最接近回绕危机。',
      },
    ],
    handsOn: [
      {
        title: '观察 UPDATE 产生死元组',
        cmd: "CREATE TEMP TABLE mvcc_demo (id integer, val text) ON COMMIT DROP;\nINSERT INTO mvcc_demo VALUES (1, 'hello');\nSELECT xmin, xmax, ctid, val FROM mvcc_demo;\nUPDATE mvcc_demo SET val = 'world' WHERE id = 1;\nSELECT xmin, xmax, ctid, val FROM mvcc_demo;",
        output: ' xmin | xmax | ctid  |  val\n------+------+-------+-------\n  876 |    0 | (0,1) | hello\n\n xmin | xmax | ctid  |  val\n------+------+-------+-------\n  877 |    0 | (0,2) | world',
        explain: 'UPDATE 前是 xmin=876, xmax=0, ctid=(0,1)。UPDATE 后 ctid 变了 (0,2)，xmin 变为 877（新事务 ID）。旧版本 (0,1) 还在页中，xmax 会被设为 877。VACUUM 运行后，(0,1) 的空间被标记为可回收。',
      },
      {
        title: '检查死元组数量',
        cmd: "SELECT relname, n_live_tup, n_dead_tup, last_vacuum, last_autovacuum FROM pg_stat_user_tables ORDER BY n_dead_tup DESC LIMIT 5;",
        output: ' relname    | n_live_tup | n_dead_tup |        last_vacuum        |      last_autovacuum\n-----------+------------+------------+---------------------------+----------------------------\n orders    |    1500000 |      45000 |                           | 2024-01-15 03:12:45+08\n sessions  |     500000 |      25000 | 2024-01-14 22:00:00+08    |',
        explain: 'n_dead_tup 列显示死元组数量。orders 表有 45,000 死元组——正常，Auto VACUUM 会在处理。sessions 表的手动 VACUUM 在昨晚运行过。如果 n_dead_tup / n_live_tup > 20%，说明 VACUUM 跟不上，需要调整参数。',
      },
      {
        title: '手动执行 VACUUM 观察效果',
        cmd: "VACUUM (VERBOSE) mvcc_demo;",
        output: 'INFO:  vacuuming "pg_temp.mvcc_demo"\nINFO:  "mvcc_demo": found 0 removable, 1 nonremovable row versions in 1 out of 1 pages\nDETAIL:  1 dead row versions cannot be removed yet',
        explain: 'VERBOSE 模式显示了处理的详细信息："found 0 removable" —— 死元组还不能移除，因为旧的 xmax 事务（877）可能还在被其他快照引用。"cannot be removed yet" 表示有长时间运行的事务可能还需要看到旧版本。',
      },
    ],
    diagnosis: [
      {
        symptom: '表不写入也不删除，但 pg_total_relation_size 持续增长',
        cause: 'UPDATE 操作产生死元组，VACUUM 还没运行回收。或者死元组在页的末尾，VACUUM 回收后空间可重用但文件大小不缩减。只有 VACUUM FULL 或重建表能缩小文件。',
        fix: '检查 Auto VACUUM 是否在运行：SHOW autovacuum; SELECT count(*) FROM pg_stat_progress_vacuum;（检查当前进行中的 VACUUM）。如果需要缩减磁盘空间：用 pg_repack（不锁表的 VACUUM FULL 替代品）或 CLUSTER table_name USING index_name（按索引重建表并回收空间）。',
      },
      {
        symptom: 'pg_stat_activity 中有一个 "idle in transaction" 状态的连接持续数小时',
        cause: '该连接的快照一直活跃，该快照中所有不可见的死元组都不能被 VACUUM 清理。这个挥之不去的快照就像"停止清理"的命令，整个数据库的膨胀可能都源于这一个怠惰的连接。',
        fix: '设置 idle_in_transaction_session_timeout = 600000（10 分钟自动断开这样的连接）。用 SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE state = \'idle in transaction\' AND now() - state_change > interval \'30 minutes\'; 清除长时间空闲事务。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 INSERT、UPDATE、DELETE 操作创建死元组，然后用 VACUUM VERBOSE 观察清理过程',
        hint: 'n_dead_tup 在 pg_stat_user_tables 中查看',
        answer: "CREATE TEMP TABLE dead_test (n integer) ON COMMIT DROP;\nINSERT INTO dead_test SELECT generate_series(1,1000);\nSELECT n_live_tup, n_dead_tup FROM pg_stat_user_tables WHERE relname = 'dead_test';\nUPDATE dead_test SET n = n + 1 WHERE n % 2 = 0;\nDELETE FROM dead_test WHERE n > 900;\nSELECT n_live_tup, n_dead_tup FROM pg_stat_user_tables WHERE relname = 'dead_test'; -- 死元组出现\nVACUUM (VERBOSE) dead_test;",
      },
      {
        level: '进阶',
        task: '用 pageinspect 扩展直接查看数据页内的死元组和活元组',
        hint: 'heap_page_items(get_raw_page(\'tablename\', 0))',
        answer: "CREATE EXTENSION IF NOT EXISTS pageinspect;\nCREATE TEMP TABLE page_demo (n integer, t text) ON COMMIT DROP;\nINSERT INTO page_demo VALUES (1, 'alive');\nUPDATE page_demo SET t = 'updated' WHERE n = 1;\nSELECT lp, t_xmin, t_xmax, t_infomask::bit(16), t_data FROM heap_page_items(get_raw_page('page_demo', 0)) WHERE t_xmax > 0; -- 检查死元组",
      },
      {
        level: '挑战',
        task: '模拟长期运行的事务如何阻止 VACUUM：开启一个事务不提交，在另一个会话中大量 UPDATE 然后 VACUUM，观察 VERBOSE 输出中的 "cannot be removed yet" 信息',
        hint: '需要两个并发会话',
        answer: "-- 会话 1：开启事务保持快照\nBEGIN;\nSELECT txid_current();\n-- 会话 2\nCREATE TEMP TABLE hold_test (n int) ON COMMIT DROP;\nINSERT INTO hold_test SELECT generate_series(1,100);\nUPDATE hold_test SET n = n + 1;\nVACUUM (VERBOSE) hold_test;\n-- 会看到：dead row versions cannot be removed yet\n-- 会话 1\nCOMMIT;\n-- 会话 2\nVACUUM (VERBOSE) hold_test; -- 现在可以清理了",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 18: Transactions / 事务
  // ═══════════════════════════════════════════════
  "yFG_hVD3dB_qK8yphrRY5": {
    mentalModel: '事务（Transaction）是数据库操作的"不可分割的工作单元"——就像银行转账，要么完整的从 A 到 B 全完成，要么什么也没发生。事务是 ACID 的载体，是数据库保障数据一致性的最小执行单位。',
    handsOn: [
      {
        title: '基本事务操作 — BEGIN, COMMIT, ROLLBACK',
        cmd: "CREATE TEMP TABLE bank (name text, balance numeric(12,2)) ON COMMIT DROP;\nINSERT INTO bank VALUES ('Alice', 1000), ('Bob', 500);\nBEGIN;\nUPDATE bank SET balance = balance - 200 WHERE name = 'Alice';\nUPDATE bank SET balance = balance + 200 WHERE name = 'Bob';\nCOMMIT;\nSELECT * FROM bank;",
        output: '  name  | balance\n--------+---------\n Alice  |  800.00\n Bob    |  700.00\n(2 rows)',
        explain: 'BEGIN 开启事务，COMMIT 提交。两个 UPDATE 作为一个原子单位——如果中间失败（如 Alice 余额不足的 CHECK 约束），整个事务回滚，balance 不变。注意：如果不写 BEGIN，每个 SQL 语句自成一个事务（Auto Commit 模式）。',
      },
      {
        title: 'SAVEPOINT — 事务内的子回滚点',
        cmd: "BEGIN;\nUPDATE bank SET balance = balance - 100 WHERE name = 'Alice';\nSAVEPOINT after_deduction;\nUPDATE bank SET balance = balance + 100 WHERE name = 'Charlie'; -- Charlie 不存在\n-- 不想要整个事务回滚，只想回滚到 savepoint\nROLLBACK TO after_deduction;\nUPDATE bank SET balance = balance + 100 WHERE name = 'Bob'; -- 正确\nCOMMIT;\nSELECT * FROM bank;",
        output: '  name  | balance\n--------+---------\n Alice  |  700.00\n Bob    |  800.00',
        explain: 'SAVEPOINT after_deduction 在扣款后创建了回滚点。后续转入 Charlie 失败时 ROLLBACK TO after_deduction 只撤销转入操作，扣款操作保留。这在复杂事务中很有用——部分操作可以单独回滚而不影响整体。RELEASE SAVEPOINT 可以删除一个 savepoint。',
      },
      {
        title: '事务中的异常处理（PL/pgSQL）',
        cmd: "CREATE OR REPLACE FUNCTION safe_transfer(from_name text, to_name text, amount numeric) RETURNS text AS $$\nBEGIN\n  UPDATE bank SET balance = balance - amount WHERE name = from_name;\n  IF NOT FOUND THEN RETURN 'Sender not found'; END IF;\n  UPDATE bank SET balance = balance + amount WHERE name = to_name;\n  IF NOT FOUND THEN\n    RAISE EXCEPTION 'Recipient not found';\n  END IF;\n  RETURN 'Transfer successful';\nEXCEPTION\n  WHEN OTHERS THEN\n    RAISE NOTICE 'Error: %', SQLERRM;\n    RETURN 'Transfer failed: ' || SQLERRM;\nEND;\n$$ LANGUAGE plpgsql;\nSELECT safe_transfer('Alice', 'Charlie', 50);",
        output: 'NOTICE:  Error: Recipient not found\n      safe_transfer\n---------------------------\n Transfer failed: Recipient not found',
        explain: 'PL/pgSQL 中的 EXCEPTION 块捕获了错误。函数内部使用了自动事务——如果 RAISE EXCEPTION 触发，函数内部的 UPDATE 自动回滚。Alice 的钱没被扣（因为整个函数操作在一个子事务中执行）。注意：EXCEPTION 块的代价较高（需要创建子事务的 savepoint），不要在循环内频繁使用。',
      },
      {
        title: '两阶段提交 — PREPARE TRANSACTION',
        cmd: "BEGIN;\nUPDATE bank SET balance = balance - 500 WHERE name = 'Alice';\nPREPARE TRANSACTION 'transfer_part1';\n-- 事务已持久化到磁盘，但尚未提交\n-- 可以在另一个会话中（甚至在数据库重启后）决定 COMMIT 或 ROLLBACK\nCOMMIT PREPARED 'transfer_part1';\n-- 或 ROLLBACK PREPARED 'transfer_part1';",
        output: 'PREPARE TRANSACTION\nCOMMIT PREPARED',
        explain: 'PREPARE TRANSACTION 将事务写入磁盘持久化，允许跨数据库的分布式事务协调。这在微服务架构中做分布式事务（两阶段提交）时很有用——所有数据库先 PREPARE，确认都能提交后再 COMMIT PREPARED。注意：未完成的 PREPARE TRANSACTION 会持有锁，严重阻塞其他操作。用 SELECT * FROM pg_prepared_xacts 查看悬空的事务。',
      },
    ],
    sections: [
      {
        title: '隐式事务与显式事务',
        content: 'PostgreSQL 有两种事务模式：\n\n**隐式事务（Auto Commit）**：每个不包含在 BEGIN...COMMIT 中的 SQL 语句自成事务。psql 默认开启 Auto Commit（\\echo :AUTOCOMMIT 查看）。执行 INSERT 后自动提交，无法回滚——除非运行在 BEGIN 块中。\n\n**显式事务**：BEGIN 或 START TRANSACTION 开始的事务。可以包含多条 SQL，手动 COMMIT 或 ROLLBACK。\n\n还有一个容易混淆的概念：\n\n**"单语句事务"也是事务！** 一条 UPDATE users SET active = true WHERE id = 1 没有 BEGIN...COMMIT 包裹，但它仍然是一个事务——要么成功，要么失败（如违反约束）。每个 SQL 语句都在一个事务中执行，区别只是显式还是隐式。\n\n**事务嵌套**：PostgreSQL 不支持真正的嵌套事务（即 BEGIN 里再 BEGIN）。但 SAVEPOINT 提供了类似嵌套的"子回滚"能力。PostgreSQL 内部确实使用"子事务"（subtransaction）实现 savepoint 和 plpgsql 的 EXCEPTION 块，但对用户不可见。',
      },
      {
        title: '长事务的危害',
        content: '长时间运行的事务是生产环境的"隐形杀手"：\n\n1. **阻止 VACUUM 清理**：事务开始时的快照会保留，该快照内产生的所有死元组都不能被回收。表持续膨胀。\n\n2. **持有锁不释放**：事务中获取的行锁（SELECT ... FOR UPDATE）、表锁（LOCK TABLE）在事务结束前一直持有。一个未提交的事务可能阻塞整个系统的写入。\n\n3. **阻止 HOT 更新**：HOT（Heap Only Tuple）是 PostgreSQL 的优化—— UPDATE 不更改索引列时，新版本可以在同一页内创建，索引不需要更新。但如果有其他事务的快照引用该页的旧版本，HOT 就无法清理，索引膨胀。\n\n4. **消耗连接资源**：每个长事务连接占用内存（shared buffer、work mem）和系统资源，影响整体并发能力。\n\n防范措施：\n- idle_in_transaction_session_timeout = 10min（断开空闲事务连接）\n- statement_timeout = 30s（单条语句超时）\n- lock_timeout = 10s（等锁超时）\n- 监控：SELECT pid, now() - xact_start AS duration, query FROM pg_stat_activity WHERE xact_start IS NOT NULL AND state != \'idle\' ORDER BY duration DESC;',
      },
    ],
    diagnosis: [
      {
        symptom: '应用 hang 住，pg_stat_activity 显示很多 "waiting for lock" 的查询',
        cause: '某个事务获取了锁但没有及时释放——可能是一个"idle in transaction" 的连接（用户开启事务后去喝咖啡了），或是一个长事务持有行锁。',
        fix: '查询锁冲突：SELECT blocked.pid AS blocked_pid, blocked.query AS blocked_query, blocking.pid AS blocking_pid, blocking.query AS blocking_query FROM pg_stat_activity blocked JOIN pg_locks bl ON blocked.pid = bl.pid AND NOT bl.granted JOIN pg_locks bkl ON bl.locktype = bkl.locktype AND bl.database = bkl.database AND bl.relation = bkl.relation AND bl.page = bkl.page AND bl.tuple = bkl.tuple AND bkl.granted JOIN pg_stat_activity blocking ON bkl.pid = blocking.pid; 找到阻塞者后考虑 SELECT pg_terminate_backend(blocking_pid);',
      },
      {
        symptom: 'pg_prepared_xacts 中有多个未解决的 PREPARE TRANSACTION',
        cause: '分布式事务协调器崩溃或网络分区导致 Prepared Transaction 悬空，没有人来 COMMIT PREPARED 或 ROLLBACK PREPARED。这些悬空事务一直持有锁。',
        fix: '查询：SELECT * FROM pg_prepared_xacts; 分析每个事务的内容和来源。如果确认不需要了：ROLLBACK PREPARED \'transaction_name\'; 在生产环境中需要和DBA确认——意外回滚或提交都可能导致数据不一致。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个事务在两条 UPDATE 之间故意触发一个错误（如除零），观察整个事务回滚',
        hint: 'SELECT 1/0 触发除零错误',
        answer: "BEGIN;\nUPDATE bank SET balance = balance - 100 WHERE name = 'Alice';\nSELECT 1/0; -- 触发错误\nUPDATE bank SET balance = balance + 100 WHERE name = 'Bob';\nCOMMIT; -- 这条不会执行，事务已在除零处回滚\nSELECT * FROM bank; -- 确认 balance 没变",
      },
      {
        level: '进阶',
        task: '使用 SAVEPOINT 实现一个可重试的插入逻辑：尝试插入数据，如果冲突（UNIQUE 约束），回滚到 savepoint 后用不同的值重试',
        hint: 'SAVEPOINT + ROLLBACK TO + ON CONFLICT 判断',
        answer: "CREATE TEMP TABLE seats (seat_no integer PRIMARY KEY, occupant text) ON COMMIT DROP;\nINSERT INTO seats VALUES (1, 'Alice');\nBEGIN;\nSAVEPOINT sp1;\nINSERT INTO seats VALUES (1, 'Bob'); -- 冲突！\nROLLBACK TO sp1;\nINSERT INTO seats VALUES (2, 'Bob'); -- 重试\nCOMMIT;\nSELECT * FROM seats;",
      },
      {
        level: '挑战',
        task: '模拟两阶段提交：在两个数据库会话中（或同一 server 的另一个会话）各执行一部分操作，然后 PREPARE、最终统一 COMMIT PREPARED',
        hint: 'max_prepared_transactions 需要 > 0',
        answer: "SHOW max_prepared_transactions;\n-- 会话 1\nBEGIN;\nUPDATE bank SET balance = balance - 100 WHERE name = 'Alice';\nPREPARE TRANSACTION 'transfer_db1';\n-- 会话 2\nBEGIN;\nUPDATE bank SET balance = balance + 100 WHERE name = 'Bob';\nPREPARE TRANSACTION 'transfer_db2';\n-- 协调者确认两边都成功 PREPARE 后：\nCOMMIT PREPARED 'transfer_db1';\nCOMMIT PREPARED 'transfer_db2';\nSELECT * FROM bank;",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 19: Relational Model / 关系型模型
  // ═══════════════════════════════════════════════
  "mDVbjdVN0spY7dI_8k1YW": {
    mentalModel: '关系型模型是"用数学表格描述世界"的方法——一切数据都放进表（Relation），表之间通过共享的值（Key）建立关联。这与我们日常生活中填表格、看清单的思维方式非常吻合：用户是一张表，订单是一张表，通过用户 ID 把两者连起来。',
    sections: [
      {
        title: '关系的数学定义',
        content: 'E.F.Codd 的关系型模型建立在严格的数学基础——集合论和一阶谓词逻辑之上。\n\n**关系（Relation）** 的正式定义：\n- 给定一组域（Domain）D1, D2, ..., Dn\n- 关系 R 是笛卡尔积 D1 x D2 x ... x Dn 的一个子集\n- 换句话说，关系是一个由 n 个属性（Attribute）组成的元组（Tuple）的集合\n\n翻译成人话：一张表 = 列（域）的集合 + 行（元组）的集合。每个单元格的值来自于该列定义的值域。\n\n关键推论：\n1. **行无序**：关系型模型中的元组是无序集合。你看到的有序结果是因为 ORDER BY，底层存储的顺序没有意义。\n2. **列有序**：虽然 SQL 中列有排列顺序（SELECT a, b vs SELECT b, a），但在关系代数层面列也是无序的。\n3. **没有重复行**：关系中不能有完全相同的两行。这在 PostgreSQL 中表现为：即使没有主键，也应该有某种方式区分每一行。但 PostgreSQL 实际允许重复行（因为允许没有主键的表），这是"实现"对"理论"的偏离。',
      },
      {
        title: '关系代数 — SQL 的数学源头',
        content: 'SQL 的基础是关系代数（Relational Algebra），定义了 6 种基本操作：\n\n1. **选择（Selection, sigma）**：选取满足条件的行。WHERE col > 5。\n2. **投影（Projection, pi）**：选取指定的列。SELECT col1, col2。\n3. **并集（Union）**：合并两个关系的行（列必须相同）。UNION。\n4. **差集（Set Difference）**：在 R 中但不在 S 中的行。EXCEPT。\n5. **笛卡尔积（Cartesian Product）**：每个 R 的行与每个 S 的行组合。CROSS JOIN。\n6. **重命名（Rename, rho）**：给关系和列起别名。AS。\n\n从这些基本操作可以组合出：\n- **连接（Join）**：笛卡尔积 + 选择。SELECT * FROM R JOIN S ON R.id = S.r_id。\n- **交集（Intersection）**：同时在 R 和 S 中的行。INTERSECT。\n- **除（Division）**：找出 R 中与 S 中所有值都匹配的行。较少使用但很强大。\n\n理解关系代数有助于理解 SQL 查询的本质：你写的 SQL 总可以翻译为关系代数表达式，优化器就是在这个代数表达式上应用等价变换规则来找到更高效的执行方式。',
      },
      {
        title: '键、超键、候选键 — 唯一标识的理论',
        content: '在关系型模型中，键是标识唯一元组的手段：\n\n- **超键（Superkey）**：一组属性，其值在关系中唯一。{id, name} 是一个超键（id 唯一就够了，加上 name 也是唯一）。\n- **候选键（Candidate Key）**：最小的超键——去掉任何属性就不唯一了。{id} 是候选键，{ssn} 也是候选键。一张表可以有多个候选键。\n- **主键（Primary Key）**：从候选键中选出来的一个，作为主要标识。在 PostgreSQL 中，PRIMARY KEY 就是带有 NOT NULL 的 UNIQUE 约束。\n- **外键（Foreign Key）**：一个关系中的属性集，引用另一个关系的候选键。值的集合必须是"被引用关系中存在的值或 NULL"。\n\n函数依赖（Functional Dependency）：属性 B 函数依赖于属性 A（A → B），意味着对于每个 A 的值，B 的值唯一确定。例：user_id → user_name。如果 user_id=1，user_name 一定是 "Alice"。函数依赖是规范化的基础——判断是否需要拆分表就看是否存在"不好的"函数依赖。',
      },
      {
        title: '关系型模型的"不匹配问题"与应对',
        content: '对象-关系不匹配（Object-Relational Impedance Mismatch）是关系模型与面向对象编程之间的天然矛盾：\n\n- **面向对象**：继承、多态、嵌套对象、集合属性（一个 User 对象有 List<Order>）\n- **关系型**：扁平表格、外键关联、JOIN 查询\n\n经典的不匹配：\n```\n// Java 对象\nclass User {\n  String name;\n  List<Order> orders;  // 嵌套集合\n}\n\n// SQL 表\nusers(id, name)\norders(id, user_id, product)  -- orders 是独立的表\n```\n\n解决方案：\n1. **ORM 框架**（Hibernate, TypeORM, Prisma, GORM）：在对象和表之间自动映射。但会产生 N+1 查询问题、性能隐藏。\n2. **JSONB 列**：把嵌套数据直接存 JSON，牺牲了一点查询能力和完整性保障，换取了对象模型的直观性。\n3. **接受不匹配**：理解数据库和应用程序使用的模型本就不同，在两者之间手动映射。这是最灵活也最累的方法。\n\n没有银弹——每个方案都有取舍。关键是根据实际需求选择，而不是试图彻底"消除"不匹配。',
      },
    ],
    handsOn: [
      {
        title: '演示关系的集合并、交、差操作',
        cmd: "CREATE TEMP TABLE r (id integer) ON COMMIT DROP;\nCREATE TEMP TABLE s (id integer) ON COMMIT DROP;\nINSERT INTO r VALUES (1), (2), (3), (4);\nINSERT INTO s VALUES (3), (4), (5), (6);\nSELECT 'UNION' AS op, * FROM (SELECT * FROM r UNION SELECT * FROM s) t\nUNION ALL SELECT 'INTERSECT' AS op, * FROM (SELECT * FROM r INTERSECT SELECT * FROM s) t\nUNION ALL SELECT 'EXCEPT' AS op, * FROM (SELECT * FROM r EXCEPT SELECT * FROM s) t\nORDER BY op, id;",
        output: '    op     | id\n-----------+----\n EXCEPT    |  1\n EXCEPT    |  2\n INTERSECT |  3\n INTERSECT |  4\n UNION     |  1\n UNION     |  2\n UNION     |  3\n UNION     |  4\n UNION     |  5\n UNION     |  6',
        explain: 'UNION 合并两个集合（去重）。INTERSECT 取交集 {3, 4}。EXCEPT 取差集——R 中有但 S 中没有 {1, 2}。如果不要去重用 UNION ALL（更快）。这些"集合操作"直接对应关系代数的基本操作。',
      },
    ],
    diagnosis: [
      {
        symptom: 'JOIN 两个大表时查询非常慢',
        cause: '笛卡尔积爆炸 + 没有合适的索引。如果 JOIN 条件不能利用索引，数据库必须做嵌套循环或哈希连接，其中一方需要全表扫描。',
        fix: '为 JOIN 条件列创建索引。考虑用 EXPLAIN 看是否选择了正确的 JOIN 策略（Nested Loop / Hash Join / Merge Join）。有时反规范化（冗余存储关联列）可以消除 JOIN。',
      },
      {
        symptom: 'INSERT 语句因违反外键约束而失败，但引用的是刚刚在同一事务中插入的行',
        cause: '外键约束检查时机。在 PostgreSQL 中，默认约束是在语句末尾检查（DEFERRABLE INITIALLY IMMEDIATE）。如果父行和子行在同一语句中插入（如 WITH ... INSERT），顺序可能出错。',
        fix: '将外键设为 DEFERRABLE：ALTER TABLE child_table ADD CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES parent_table(id) DEFERRABLE INITIALLY DEFERRED; 这样约束检查推迟到事务提交时，同事务内的插入顺序随意。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 UNION、INTERSECT、EXCEPT 操作两个查询结果（如选出两个部门各自的员工 ID），理解集合操作',
        hint: 'UNION 去重，UNION ALL 保留重复',
        answer: "-- 假设有两张表 dept_a_employees(emp_id) 和 dept_b_employees(emp_id)\nSELECT emp_id FROM dept_a_employees INTERSECT SELECT emp_id FROM dept_b_employees; -- 两部门共有的员工\nSELECT emp_id FROM dept_a_employees EXCEPT SELECT emp_id FROM dept_b_employees; -- 只在 A 不在 B 的员工",
      },
      {
        level: '进阶',
        task: '写一个 SQL 查询实现关系代数中的"除法"操作：找出所有选修了"全部必修课"的学生',
        hint: 'NOT EXISTS (SELECT 必修课 EXCEPT SELECT 该生选的课)',
        answer: "CREATE TEMP TABLE student_courses (student text, course text) ON COMMIT DROP;\nCREATE TEMP TABLE required_courses (course text PRIMARY KEY) ON COMMIT DROP;\nINSERT INTO required_courses VALUES ('Math'), ('English'), ('CS');\nINSERT INTO student_courses VALUES ('Alice','Math'),('Alice','English'),('Alice','CS'),('Bob','Math'),('Bob','English'),('Charlie','Math'),('Charlie','English'),('Charlie','CS');\nSELECT DISTINCT student FROM student_courses sc WHERE NOT EXISTS (SELECT course FROM required_courses EXCEPT SELECT course FROM student_courses WHERE student = sc.student);\n-- 结果：Alice, Charlie（选完了所有必修课）",
      },
      {
        level: '挑战',
        task: '从函数依赖（Functional Dependency）的角度分析一张表是否满足 BCNF。创建一张不满足 BCNF 的表并重构它',
        hint: 'BCNF：每个非平凡函数依赖的左侧必须是超键',
        answer: "-- 不满足 BCNF 的表：course_assignments(professor, department, course)\n-- FD: professor → department（每个教授只属于一个系）\n-- 但 professor 不是超键（一个教授可以教多门课）→ 违反 BCNF\n-- 重构：\n-- professors(professor_id, professor, department)，主键 professor_id\n-- courses(course_id, course, professor_id)，外键引用 professors",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 20: Write-ahead Log / 预写式日志 WAL
  // ═══════════════════════════════════════════════
  "9sadNsbHLqejbRPHWhx-w": {
    mentalModel: 'WAL（预写式日志）是数据库的"黑匣子"——在修改数据页之前，先把"要做什么修改"写进一个连续的日志文件。即使数据库突然崩溃，重启后重放 WAL 就能找回所有已提交的事务，就像飞机失事后通过黑匣子还原飞行过程。',
    sections: [
      {
        title: 'WAL 的核心原理 — Write-Ahead 的含义',
        content: 'WAL 的核心规则：在将修改后的数据页（Dirty Page）写入磁盘之前，必须先将对应的日志记录（WAL Record）写入磁盘。\n\n为什么需要这个规则？考虑没有 WAL 的情况：\n1. 事务 T 修改了数据页 P1（在 Shared Buffer 中）。\n2. 数据库崩溃，Shared Buffer 的内容全部丢失。\n3. 重启后，P1 的内容是磁盘上的旧版本——事务 T 的修改永久丢失。\n\n有 WAL 的情况：\n1. 事务 T 修改 P1 前，先写一条 WAL 记录："Page P1 的第 N 行修改为新值 X"。\n2. WAL 记录刷到磁盘（fsync）。\n3. 然后才修改 P1（在内存中）。\n4. 数据库崩溃。\n5. 重启后，读取 WAL，发现事务 T 已提交且有 WAL 记录。重放（Replay）WAL：把 P1 修改为新值 X。\n6. 数据恢复！\n\nWAL 的关键优势：对数据页的随机写变成了对 WAL 的顺序写（追加日志）。顺序写比随机写快 10-100 倍——这是 WAL 不仅保障持久性还提升写入性能的原因。实际的数据页写入在 Checkpoint 时批量进行。',
      },
      {
        title: 'WAL 的结构 — LSN, Segment, Record',
        content: 'WAL 使用 LSN（Log Sequence Number）作为逻辑地址。LSN 是一个 64 位整数，唯一标识 WAL 流中的一个字节位置。\n\nWAL 文件（Segment）存储在 $PGDATA/pg_wal/ 目录下，文件名如 000000010000000000000001。每个 segment 默认 16MB（编译时设置）。\n\nWAL 内部结构：\n1. **WAL Record**：单条日志记录，描述一个修改操作（如"在堆页面 (5,3) 偏移 120 处写入 4 字节值 100"）。\n2. **WAL Page Header**：每页开始的元数据。\n3. **WAL Segment Header**：每个 segment 开始的全局信息。\n\n关键 LSN 位置：\n- pg_current_wal_lsn()：当前 WAL 写入位置。\n- pg_current_wal_insert_lsn()：当前 WAL 插入位置。\n- SELECT pg_walfile_name(pg_current_wal_lsn())：当前 WAL 文件名。\n\nWAL 的增长速度取决于写入量。高写入场景下可能每小时产生数十 GB 的 WAL。通过 max_wal_size 参数控制 WAL 总大小，超出的在 checkpoint 时回收（Recycle）或删除。',
      },
      {
        title: 'WAL 与复制 — 流复制的基石',
        content: 'PostgreSQL 的流复制（Streaming Replication）完全依赖 WAL。\n\n工作原理：\n1. 主库（Primary）将 WAL 记录写入本地 pg_wal 目录。\n2. 备库（Standby）通过复制连接从主库接收 WAL 记录流。\n3. 备库的 WAL Receiver 进程将 WAL 写入本地的 pg_wal。\n4. 备库的 Startup 进程（恢复进程）持续重放 WAL，保持与主库一致。\n\n复制模式：\n- **异步复制（Asynchronous）**：主库提交后不等待备库确认。可能有数据丢失（主库崩溃时备库还没收到最后几条 WAL）。\n- **同步复制（Synchronous）**：主库提交必须等待备库确认已接收（并应用）WAL。synchronous_commit = remote_apply。零数据丢失但会显著增加提交延迟。\n\nWAL 的级别（wal_level）设置：\n- **minimal**：只记录崩溃恢复所需信息。不支持复制。\n- **replica**：支持复制和 WAL 归档。\n- **logical**：额外记录逻辑变更，支持逻辑复制（按表复制而非按 WAL 记录）和变更数据捕获（CDC）。',
      },
      {
        title: 'WAL 归档 — 时间点恢复（PITR）的基础',
        content: 'WAL 归档（WAL Archiving）将已完成的 WAL segment 复制到安全位置（如远程服务器、对象存储）。这实现了时间点恢复（Point-in-Time Recovery, PITR）：\n\n1. 先做一个完整的基础备份（pg_basebackup）。\n2. 将之后生成的所有 WAL segment 归档。\n3. 需要在某个时间点恢复时：恢复基础备份 + 重放归档的 WAL 到指定时间点。\n\n配置 WAL 归档：\n```conf\n# postgresql.conf\nwal_level = replica\narchive_mode = on\narchive_command = \"cp %p /archive_dir/%f\"\n```\n\narchive_command 是 shell 命令，%p 是 WAL 文件的完整路径，%f 是文件名。更健壮的方案使用 pgBackRest 或 WAL-G 等工具直接上传到 S3。\n\nPITR 让你可以回退到"3 小时前的状态"——这在有人误操作 DROP TABLE 时是无价的。',
      },
    ],
    handsOn: [
      {
        title: '查看当前 WAL 信息和写入速度',
        cmd: "SELECT pg_current_wal_lsn() AS current_lsn,\n       pg_walfile_name(pg_current_wal_lsn()) AS current_wal_file,\n       pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(), '0/0')) AS total_wal_written;",
        output: ' current_lsn  |         current_wal_file         | total_wal_written\n---------------+------------------------------------+-------------------\n 0/30006D8     | 000000010000000000000003           | 48 MB',
        explain: 'current_lsn = 0/30006D8 是当前 WAL 写入位置。current_wal_file 展示了正在写入的 WAL segment 文件名。total_wal_written = 48MB 是从数据库初始化以来的 WAL 总量。高写入系统这个值可能达到 TB 级。',
      },
      {
        title: '观察 WAL 文件的生成',
        cmd: "SELECT count(*) AS wal_files FROM pg_ls_waldir();\n-- 执行一些写入操作\nCREATE TEMP TABLE wal_test (data text) ON COMMIT DROP;\nINSERT INTO wal_test SELECT md5(random()::text) FROM generate_series(1, 10000);\nSELECT count(*) AS wal_files_after FROM pg_ls_waldir();",
        output: ' wal_files\n-----------\n        15\n wal_files_after\n-----------------\n              17',
        explain: 'pg_ls_waldir() 列出 pg_wal 目录下的所有文件。写入 10000 行后 WAL 文件从 15 增加到 17——每个 WAL segment 16MB，产生了约 32MB WAL。UPDATE/DELETE 也会产生 WAL（旧版本标记）。',
      },
      {
        title: '手动触发 checkpoint 并观察 WAL 回收',
        cmd: "CHECKPOINT;\nSELECT count(*) AS wal_files_after_checkpoint FROM pg_ls_waldir() WHERE name >= pg_walfile_name(pg_current_wal_lsn());",
        output: ' wal_files_after_checkpoint\n----------------------------\n                           3',
        explain: 'CHECKPOINT 后，旧的 WAL segment 被标记为可回收。count 从 17 降到 3，因为 checkpoint 刷新了所有脏页到磁盘，确认之前的 WAL 记录不再需要用于崩溃恢复。不过实际文件可能不会立即删掉——它们被重命名循环使用（WAL 文件的循环复用）。',
      },
    ],
    diagnosis: [
      {
        symptom: 'pg_wal 目录占用了大量磁盘空间（几百 GB），且持续增长',
        cause: 'WAL 归档失败——archive_command 出错导致 WAL segment 无法归档，PostgreSQL 保留所有未归档的 WAL。或 max_wal_size 设得太大。或 checkpoint 不够频繁。',
        fix: '检查 archive_command 是否正常工作（手动执行验证）。查看 pg_stat_archiver 视图：SELECT * FROM pg_stat_archiver; 看 last_failed 列。修复归档脚本。降 max_wal_size，提 checkpoint_timeout。强烈危机时可用 pg_switch_wal() 切换 segment 然后手动删除旧文件（危险操作）。',
      },
      {
        symptom: '从库（Standby）延迟越来越大，pg_stat_replication 显示 replay_lsn 远落后于主库',
        cause: '从库的重放速度跟不上主库的 WAL 生成速度。可能是从库硬件太差、checkpoint 频繁、或者从库上有长查询占用了资源。',
        fix: '查看延迟：SELECT now() - pg_last_xact_replay_timestamp() AS replication_lag; 提升从库硬件配置。确保从库有足够内存用于恢复。在主库上减少不必要的写入。考虑使用并行恢复（standby 端 recovery 的 parallelism）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '查看数据库的当前 WAL LSN 位置和正在写入的 WAL 文件名',
        hint: 'pg_current_wal_lsn() + pg_walfile_name()',
        answer: "SELECT pg_current_wal_lsn() AS lsn, pg_walfile_name(pg_current_wal_lsn()) AS file_name, pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(), '0/0')) AS total_wal;",
      },
      {
        level: '进阶',
        task: '开启 archive_mode，配置 archive_command 将 WAL 复制到 /tmp/wal_archive/，验证归档是否正常工作',
        hint: '需要在 postgresql.conf 中设置并重启数据库',
        answer: "-- 在 postgresql.conf 中设置：\n-- wal_level = replica\n-- archive_mode = on\n-- archive_command = 'cp %p /tmp/wal_archive/%f'\n-- 重启后：\nSELECT pg_switch_wal();\nSELECT * FROM pg_stat_archiver;\n-- 查看 /tmp/wal_archive/ 中是否有文件：\\! ls -la /tmp/wal_archive/",
      },
      {
        level: '挑战',
        task: '用 pg_waldump 分析 WAL segment 的内容，理解 WAL 记录的结构',
        hint: 'pg_waldump -p $PGDATA/pg_wal -s <start_lsn> -e <end_lsn>',
        answer: "-- 找到当前 WAL segment\nSELECT pg_walfile_name(pg_current_wal_lsn());\n-- 在 shell 中运行（不是 psql 中）\npg_waldump -p $PGDATA/pg_wal -s 0/0 -n 20\n-- 输出示例：rmgr: Heap, desc: INSERT off 5, new: (6, 'hello')\n-- rmgr=Resource Manager, desc=操作描述, off=页内偏移",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 21: Domains / 域
  // ═══════════════════════════════════════════════
  "-LuxJvI5IaOx6NqzK0d8S": {
    mentalModel: '域（Domain）是"带规则的别名类型"——就像在基本数据类型上"戴上了紧箍咒"，让所有使用这个域的列都自动遵守统一的约束。不是创建一种新的数据类型，而是在现有类型上加了一层可复用的限制。',
    sections: [
      {
        title: 'Domain 的定义和用途',
        content: 'Domain 是用户定义的数据类型，它基于现有的基础类型，但附加了约束条件。可以理解为"可复用的列约束模板"。\n\n语法：\n```sql\nCREATE DOMAIN positive_integer AS integer\n  CHECK (VALUE > 0);\n\nCREATE DOMAIN valid_email AS text\n  CHECK (VALUE ~ \'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$\');\n```\n\n使用：\n```sql\nCREATE TABLE products (\n  id serial PRIMARY KEY,\n  price positive_integer NOT NULL,  -- 自动带 CHECK > 0 约束\n  contact_email valid_email\n);\n```\n\nDomain 的优势：\n1. **复用性**：多张表有相同的"价格"列，不需要每张表都写 CHECK (price > 0)。定义一个 price_domain，各处使用。\n2. **语义清晰**：看到 price positive_integer 比 price integer CHECK (price > 0) 更能传达意图。\n3. **集中修改**：需要将价格范围从 >0 改为 >=0.01？只改 domain 定义，所有使用该 domain 的列自动生效。\n\nDomain 的局限性：\n- 不能跨数据库使用（domain 属于一个 schema）。\n- 列一旦基于 domain 创建，domain 的修改（ALTER DOMAIN）会使所有基于该 domain 的列都重新验证（可能锁表）。',
      },
      {
        title: 'Domain 与 CHECK 约束的关键差异',
        content: '虽然 Domain 的约束在效果上等同于列上的 CHECK 约束，但有关键差异：\n\n1. **约束名称和管理**：Domain 约束有独立的名称（可以 ALTER DOMAIN ... DROP CONSTRAINT）。列 CHECK 约束在 ALTER TABLE 时管理。\n\n2. **NOT NULL 的处理**：Domain 可以定义 NOT NULL 约束：\n```sql\nCREATE DOMAIN required_text AS text NOT NULL;\nCREATE TABLE t (col required_text);  -- col 自动为 NOT NULL\n```\n但如果列已经有 DEFAULT，NOT NULL domain 上的 DEFAULT 不会自动填充。\n\n3. **类型的 casting（转型）**：Domain 在 PostgreSQL 内部被视为独立的类型。这意味着你可以重载函数和操作符来处理特定的 domain 类型。例如：\n```sql\nCREATE FUNCTION format_price(positive_integer) RETURNS text AS ...\n-- 该函数只接受 positive_integer domain 的值，不接受普通的 integer\n```\n\n4. **输入转换**：Domain 可以定义输入时的转换逻辑（但目前功能有限）。',
      },
      {
        title: 'Domain 与 Type 的区别',
        content: '很多人混淆 Domain 和 Type：\n\n**Domain**：在现有类型上附加约束。底层类型不变。\n- CREATE DOMAIN us_zip AS text CHECK (VALUE ~ \'^\\d{5}(-\\d{4})?$\');\n- us_zip 本质上还是 text，可以用于 text 类型的任何操作（JOIN、ORDER BY、index）。\n\n**Type（复合类型）**：创建全新的结构。\n- CREATE TYPE address AS (street text, city text, zip us_zip);\n- address 是全新的类型，不能直接当做 text 使用。\n\n**Enum（枚举类型）**：定义一组固定的允许值。\n- CREATE TYPE mood AS ENUM (\'happy\', \'sad\', \'neutral\');\n- mood 型变量只能取这三个值。\n\n选择指南：\n- 需要约束值的范围（如 >0, 长度限制, 正则匹配）→ Domain\n- 需要完全自定义的值集合 → Enum\n- 需要组合多个字段成为一个新的数据结构 → Composite Type',
      },
    ],
    handsOn: [
      {
        title: '创建并使用 Domain',
        cmd: "CREATE DOMAIN rating AS smallint CHECK (VALUE >= 1 AND VALUE <= 5);\nCREATE DOMAIN url AS text CHECK (VALUE ~ '^https?://[^\\s]+$');\nCREATE TABLE reviews (id serial PRIMARY KEY, score rating NOT NULL, reference url);\nINSERT INTO reviews (score, reference) VALUES (4, 'https://example.com/postgres-guide');\nINSERT INTO reviews (score, reference) VALUES (6, 'bad url');",
        output: 'INSERT 0 1\nERROR:  value for domain rating violates check constraint "rating_check"',
        explain: '第一个 INSERT 成功（4 在 1-5 内）。第二个 INSERT 失败——6 违反了 rating domain 的 CHECK 约束。Domain 的约束在值进入数据库之前就被检查了，和列 CHECK 约束一样早。注意如果第二个 INSERT 中 score=4 但 url 格式错误，同样会失败（url domain 的 CHECK 也会检查）。',
      },
      {
        title: '查看已定义的 Domain',
        cmd: "SELECT domain_name, domain_schema, data_type, character_maximum_length FROM information_schema.domains WHERE domain_schema = 'public';",
        output: ' domain_name | domain_schema | data_type | character_maximum_length\n-------------+---------------+-----------+--------------------------\n rating      | public        | smallint  |\n url         | public        | text      |',
        explain: 'information_schema.domains 列出了所有 domain。data_type 显示底层类型（smallint、text）。可以使用 ALTER DOMAIN ... ADD CONSTRAINT 和 ALTER DOMAIN ... DROP CONSTRAINT 修改 domain 约束。注意 ALTER DOMAIN ... SET NOT NULL 会锁表验证所有使用该 domain 的列。',
      },
      {
        title: 'Domain 的多列复用演示',
        cmd: "-- 多张表使用同一个 domain\nCREATE TABLE books (id serial, rating rating);\nCREATE TABLE movies (id serial, rating rating);\nCREATE TABLE games (id serial, rating rating);\nINSERT INTO books (rating) VALUES (5), (3);\nINSERT INTO movies (rating) VALUES (4), (2);\nINSERT INTO games (rating) VALUES (5), (1);\n-- 日后需要修改评分范围（如允许 0-10）\nALTER DOMAIN rating DROP CONSTRAINT rating_check;\nALTER DOMAIN rating ADD CONSTRAINT rating_check CHECK (VALUE >= 0 AND VALUE <= 10);\n-- 所有三张表的 rating 列自动使用新范围",
        output: 'ALTER DOMAIN\nALTER DOMAIN',
        explain: 'Domain 的核心价值在这里体现：一次修改，所有表生效。如果每张表单独写 CHECK (score >= 1 AND score <= 5)，修改评分范围就需要 ALTER TABLE 三张表逐一修改——维护噩梦。Domain 把业务规则统一管理。',
      },
    ],
    diagnosis: [
      {
        symptom: 'ALTER DOMAIN ... ADD CONSTRAINT 执行了很久，表被锁住',
        cause: '添加 domain 约束时，PostgreSQL 需要扫描所有使用该 domain 的列，验证现有数据满足新约束。如果表有几千万行，全表扫描可能需要很长时间，期间持有 ACCESS EXCLUSIVE 锁。',
        fix: '考虑 NOT VALID + VALIDATE 两步走策略（类似外键约束的处理方式）：ALTER DOMAIN d ADD CONSTRAINT c CHECK (VALUE > 0) NOT VALID;（不加锁验证现有数据）, 然后 ALTER DOMAIN d VALIDATE CONSTRAINT c;（只对新数据强制约束，同时后台验证旧数据）。不过 Domain 不一定支持 NOT VALID——查看 PostgreSQL 版本支持情况。',
      },
      {
        symptom: 'SELECT domain_value 时发现值不符合 domain 的 CHECK，但可以查出来',
        cause: 'Domain 约束只在 INSERT/UPDATE 时检查，不主动验证已有数据（除非你执行了 ALTER DOMAIN ... VALIDATE CONSTRAINT）。如果 domain 是在数据插入之后才添加的，旧数据不受约束。',
        fix: '定期检查数据一致性：SELECT * FROM table WHERE NOT(column_value ~ \'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z]{2,}$\'); 然后手动修正或删除脏数据。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 email domain（检查基本的 email 格式），然后在 users 表中使用它',
        hint: 'CHECK (VALUE ~ \'正则表达式\')',
        answer: "CREATE DOMAIN email_addr AS text CHECK (VALUE ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$');\nCREATE TABLE users (id serial PRIMARY KEY, name text, email email_addr UNIQUE);\nINSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');\nINSERT INTO users (name, email) VALUES ('Bob', 'not-an-email'); -- 报错！",
      },
      {
        level: '进阶',
        task: '创建一个带多个 CHECK 约束的 domain（如 phone_number：必须是数字、长度必须为 11），然后在 contacts 表中使用',
        hint: 'CHECK 可以有多个条件用 AND 连接',
        answer: "CREATE DOMAIN cn_phone AS text CHECK (VALUE ~ '^1[3-9]\\d{9}$' AND length(VALUE) = 11);\nCREATE TABLE contacts (id serial PRIMARY KEY, name text, phone cn_phone);\nINSERT INTO contacts (name, phone) VALUES ('张三', '13800138000');\nINSERT INTO contacts (name, phone) VALUES ('李四', '12345'); -- 报错！",
      },
      {
        level: '挑战',
        task: '尝试创建一个将货币金额存储为 integer（以"分"为单位）的 domain，自动提供格式化输出函数。展示 domain + 函数组合使用的优雅',
        hint: 'CREATE DOMAIN + CREATE FUNCTION 重载',
        answer: "CREATE DOMAIN cents AS integer CHECK (VALUE >= 0);\nCREATE FUNCTION display(c cents) RETURNS text AS $$\n  SELECT (c::numeric / 100)::text || '元';\n$$ LANGUAGE sql IMMUTABLE;\nCREATE TABLE products (id serial PRIMARY KEY, price cents);\nINSERT INTO products (price) VALUES (9999), (500);\nSELECT id, display(price) AS formatted_price FROM products;\n-- 输出：9999 → '99.99元', 500 → '5.00元'",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 22: Attributes / 属性
  // ═══════════════════════════════════════════════
  "XvZMSveMWqmAlXOxwWzdk": {
    mentalModel: '属性（Attribute）是关系型理论对"列"的称呼——每个属性有名称、数据类型、值域。在 PostgreSQL 中，属性不仅包括用户定义的列，还包括系统产生的隐藏列（如 xmin、ctid），以及复合类型的字段。',
    sections: [
      {
        title: '属性的理论层面 — 在关系型模型中的位置',
        content: '在关系型理论中，"属性"（Attribute）是关系模式（Relation Schema）的基本组分：\n\n关系模式 R(A1:D1, A2:D2, ..., An:Dn) 意味着：\n- R：关系（表）的名称\n- Ai：属性名（列名）\n- Di：属性所属于的域（值域/数据类型）\n\n每个属性映射到一个域（Domain），定义了该属性可以取的值的集合。例如属性 age 映射到域"0 到 150 之间的整数"。\n\n属性的数学特性：\n1. **原子性（Atomicity）**：在 1NF 中，每个属性必须是原子的——不能再分成更小的有意义的部分。反例：属性 full_name 在需要按姓排序时不满足原子性，应拆分为 first_name 和 last_name。\n2. **唯一命名**：在同一关系中，属性名必须唯一。但不同关系中的属性可以有相同名称。\n3. **可空性**：SQL 允许属性值为 NULL。纯关系型理论不允许 NULL（Codd 后来接受了 NULL 作为"缺失信息"的标记）。\n\n"属性"这个概念帮助我们理解——我们设计的不是"表的列"，而是"实体的特征"。用户的属性包括姓名、年龄、邮箱。订单的属性包括时间、金额、所属用户。这种实体-属性的思维方式能改善数据库设计。',
      },
      {
        title: 'PostgreSQL 中属性的实现：pg_attribute',
        content: '每个列在 pg_attribute 系统目录中对应一行。这张表是理解 PostgreSQL 列机制的关键：\n\n```sql\nSELECT attname, attnum, atttypid::regtype, attlen, attnotnull, atthasdef\nFROM pg_attribute\nWHERE attrelid = \'mytable\'::regclass AND attnum > 0\nORDER BY attnum;\n```\n\n关键字段解释：\n- **attnum**：列的序号（>0 为用户列，<0 为系统列如 ctid=-1, xmin=-3）。\n- **atttypid**：列的数据类型 OID（可通过 ::regtype 转换查看名称）。\n- **attlen**：固定长度（正数）或变长（-1 表示 varlena，-2 表示 cstring）。\n- **attnotnull**：是否有 NOT NULL 约束。\n- **atthasdef**：是否有默认值（DEFAULT 值存在 pg_attrdef 中）。\n- **attstattarget**：统计信息采样目标（ANALYZE 时为该列收集多少统计信息，默认 -1 表示使用 default_statistics_target）。\n\n隐藏列（attnum < 0）：\n- tableoid (-7)：该行所属表的 OID\n- cmax (-6)：事务内命令 ID（删除）\n- xmax (-5)：删除该版本的事务 ID\n- cmin (-4)：事务内命令 ID（插入）\n- xmin (-3)：创建该版本的事务 ID\n- ctid (-1)：物理行指针',
      },
      {
        title: '属性与索引的关系',
        content: '当你对一列创建索引时，实际上是在创建一个"基于该属性值的快速查找结构"。PostgreSQL 支持多种索引方法：\n\n- **B-tree（默认）**：支持 =, <, <=, >, >=, BETWEEN, LIKE \'abc%\'。适合大多数场景。\n- **Hash**：只支持 =。只适合简单的等值查询。\n- **GiST（Generalized Search Tree）**：支持自定义数据类型和操作符。用于地理空间（PostGIS）、全文搜索（tsvector）、JSONB。\n- **GIN（Generalized Inverted Index）**：倒排索引。适合数组包含查询、JSONB 键存在性、全文搜索。\n- **BRIN（Block Range INdex）**：轻量级索引，存储数据块范围的最小/最大值。适合超大表且数据顺序与物理存储相关的场景（如按时间顺序追加的日志表）。\n- **SP-GiST**：空间分区 GiST。适合非平衡的数据结构（如 IP 地址范围、二维空间点）。\n\n选择索引类型的原则：B-tree 解决 90% 的需求。GIS 数据用 GiST。JSONB 和数组用 GIN。超大的 append-only 表用 BRIN（索引大小是 B-tree 的 1/1000）。',
      },
    ],
    handsOn: [
      {
        title: '查看表的完整属性定义',
        cmd: "SELECT a.attnum, a.attname, a.atttypid::regtype AS data_type, a.attlen, CASE WHEN a.attnotnull THEN 'NOT NULL' ELSE '' END AS nullable, CASE WHEN a.atthasdef THEN pg_get_expr(d.adbin, d.adrelid) ELSE '' END AS default_value FROM pg_attribute a LEFT JOIN pg_attrdef d ON a.attrelid = d.adrelid AND a.attnum = d.adnum WHERE a.attrelid = 'pg_class'::regclass AND a.attnum > 0 ORDER BY a.attnum LIMIT 10;",
        output: ' attnum |     attname      | data_type | attlen | nullable | default_value\n--------+------------------+-----------+--------+----------+---------------\n      1 | oid              | oid       |      4 | NOT NULL |\n      2 | relname          | name      |     64 | NOT NULL |\n      3 | relnamespace     | oid       |      4 | NOT NULL |',
        explain: 'pg_class 表本身也有属性。attlen=4 表示 oid 类型占 4 字节。attlen=64 表示 name 类型固定为 64 字节（这是PostgreSQL内部的 name 类型，是定长的）。所有系统表也使用同样的 pg_attribute 机制——PostgreSQL 是"自描述"的数据库。',
      },
      {
        title: '查看统计信息如何描述属性',
        cmd: "SELECT attname, stanullfrac, stadistinct, stakind1, stakind2 FROM pg_statistic s JOIN pg_attribute a ON s.starelid = a.attrelid AND s.staattnum = a.attnum WHERE a.attrelid = 'pg_am'::regclass AND a.attnum > 0;",
        output: ' attname | stanullfrac | stadistinct | stakind1 | stakind2\n---------+-------------+-------------+----------+----------\n amname  |           0 |          -1 |        2 |        3',
        explain: 'pg_statistic 存储了查询规划器使用的统计信息。stanullfrac = 该列为 null 的行比例。stadistinct = 不同值的数量（-1 表示唯一值数和行数相同，即 UNIQUE）。stakind1/2 = 统计数据类型（1=MCV 最常见值列表，2=直方图边界，3=相关性）。这些统计信息在每次 ANALYZE 时更新。',
      },
    ],
    diagnosis: [
      {
        symptom: 'ANALYZE 后查询计划有变化（有时候变慢，有时候变快）',
        cause: '查询规划器的决策基于 pg_statistic 中的统计信息。统计信息采样（default_statistics_target=100，即采样 300*100=30000 行）可能不准确，特别是数据分布不均匀时。',
        fix: '对于关键列，提高统计精度：ALTER TABLE t ALTER COLUMN c SET STATISTICS 1000;（提高采样数）。然后 ANALYZE t;。对于特殊分布（如不均匀的枚举值），考虑使用 PostgreSQL 的扩展统计（CREATE STATISTICS）捕获列间相关性。',
      },
      {
        symptom: '某些列的值被截断了（如 text 列只存了前 63 个字符）',
        cause: '列被定义为 char(64) 或 varchar(64) 而不是 text。或者使用了 bpchar（blank-padded char）类型（固定长度）导致意外的空格填充。',
        fix: 'ALTER TABLE t ALTER COLUMN c TYPE text; 将所有字符列改为 text 除非有明确的长度需求（如 ISO 国家代码 char(2)）。PostgreSQL 中 text 和 varchar 性能一样，text 更灵活。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '查看 information_schema.columns 中所有表的列定义，筛选出所有使用了 integer 类型的列',
        hint: 'information_schema.columns + data_type',
        answer: "SELECT table_name, column_name, data_type, is_nullable FROM information_schema.columns WHERE table_schema = 'public' AND data_type = 'integer' ORDER BY table_name, ordinal_position;",
      },
      {
        level: '进阶',
        task: '对一张有 100 万行数据的表，修改某列的统计信息采样比例，然后比较 ANALYZE 前后 EXPLAIN 输出的行数估算差异',
        hint: 'ALTER COLUMN ... SET STATISTICS + EXPLAIN ANALYZE',
        answer: "-- 检查当前估算\nEXPLAIN ANALYZE SELECT * FROM big_table WHERE category = 'rare_value';\n-- 提高采样精度\nALTER TABLE big_table ALTER COLUMN category SET STATISTICS 500;\nANALYZE big_table;\n-- 检查新估算\nEXPLAIN ANALYZE SELECT * FROM big_table WHERE category = 'rare_value';\n-- 对比 rows=X 的估算差异",
      },
      {
        level: '挑战',
        task: '探索 pg_statistic_ext 扩展统计功能，为两列之间有函数依赖关系的表创建扩展统计，并验证它如何改善查询规划',
        hint: 'CREATE STATISTICS + 依赖关系类型',
        answer: "CREATE TABLE cities (country text, city text);\nINSERT INTO cities VALUES ('China','Beijing'),('China','Shanghai'),('Japan','Tokyo'),('Japan','Osaka'),('Korea','Seoul');\n-- 创建扩展统计（country 和 city 有函数依赖关系）\nCREATE STATISTICS s_city_country (dependencies) ON country, city FROM cities;\nANALYZE cities;\n-- 查看扩展统计：SELECT * FROM pg_statistic_ext WHERE stxname = 's_city_country';\nEXPLAIN ANALYZE SELECT * FROM cities WHERE country = 'China' AND city = 'Beijing';\n-- 规划器现在知道 country 和 city 不是独立的，rows 估算更准确",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 23: Query Processing / 查询处理
  // ═══════════════════════════════════════════════
  "Qk14b9WyeCp9RV9WAwojt": {
    mentalModel: '查询处理就像一条流水线——SQL 文本进入流水线的"投料口"（Parser），经过"质检"（Analyzer）确认表和列都存在，再进入"加工车间"（Planner）制定生产方案，最后在"装配线"（Executor）上逐一执行。每一站都有明确的职责，出错就停。',
    sections: [
      {
        title: '查询处理的五阶段模型',
        content: 'PostgreSQL 的查询处理分为 5 个串行阶段：\n\n**阶段 1：解析（Parser）**\n输入：SQL 字符串。输出：Parse Tree（语法树）。\n只检查 SQL 语法是否正确（关键字、括号、引号）。不检查表和列是否存在。\n```sql\nSELECT name FORM users;  -- FORM 不是 FROM → 语法错误\nSELECT name FROM imaginary_table;  -- 语法正确 → 通过解析阶段\n```\n\n**阶段 2：分析（Analyzer / Traffic Cop）**\n输入：Parse Tree。输出：Query Tree（查询树）。\n- 解析表名（通过 search_path 和 pg_class）\n- 解析列名（通过 pg_attribute）\n- 解析函数名（通过 pg_proc）\n- 检查权限（SELECT 权限等）\n\n**阶段 3：重写（Rewriter）**\n输入：Query Tree。输出：重写后的 Query Tree。\n- 视图展开（将对视图的查询替换为对基表的查询 + WHERE 条件）\n- 行级安全策略（RLS）注入\n- 规则系统（Rule System）处理\n\n**阶段 4：规划（Planner / Optimizer）**\n输入：Query Tree。输出：Execution Plan（执行计划）。\n- 生成多个可能的执行方案\n- 基于统计信息（pg_statistic）和代价模型估算每个方案的代价（cost）\n- 选择代价最低的方案\n\n**阶段 5：执行（Executor）**\n输入：Execution Plan。输出：结果集（Result Set）。\n- 按计划逐步执行：打开表扫描、过滤行、计算表达式、排序、聚合\n- 返回结果给客户端\n\n了解这个五阶段模型后，你读 EXPLAIN 输出就明白——你看到的是阶段 4 的输出，是规划器最终选定的执行计划。',
      },
      {
        title: '查询规划的代价模型',
        content: 'PostgreSQL 的规划器使用基于代价（Cost-based）的模型，而非基于规则（Rule-based）。代价是抽象的"磁盘页面读取"单位：\n\n```sql\nEXPLAIN SELECT * FROM users WHERE id = 1;\n-- Seq Scan on users  (cost=0.00..35.50 rows=1 width=68)\n```\n\n代价解读：\n- **0.00** = 启动代价（startup cost）：获取第一行之前的代价。Seq Scan 是 0.00（不需要准备）。如果包含排序，启动代价会很高（需要先获取所有行再排序）。\n- **35.50** = 总代价（total cost）：获取所有结果行的代价。\n- **rows=1** = 估算返回行数。\n- **width=68** = 估算每行平均字节数。\n\n代价计算依赖的参数（在 postgresql.conf 中配置）：\n- **seq_page_cost**（默认 1.0）：顺序页面读取的代价（从磁盘顺序读取一页）\n- **random_page_cost**（默认 4.0）：随机页面读取的代价（随机访问一页，如索引扫描）\n- **cpu_tuple_cost**（默认 0.01）：处理一行的 CPU 代价\n- **cpu_index_tuple_cost**（默认 0.005）：处理一个索引项的 CPU 代价\n- **cpu_operator_cost**（默认 0.0025）：执行一个操作符（如 =, <, >）的 CPU 代价\n\n在 SSD 上，random_page_cost 可以设低一些（如 1.1）——SSD 的随机读和顺序读差异远小于 HDD。如果 random_page_cost 设得太高，规划器会过度偏好 Seq Scan 而避免 Index Scan，导致性能不优。',
      },
      {
        title: 'JOIN 策略 — 三种连接方式的代价分析',
        content: '当两个表做 JOIN 时，规划器选择三种策略之一：\n\n**1. Nested Loop Join（嵌套循环连接）**\n原理：外层循环遍历表 A，内层用索引查找表 B 的匹配行。\n适用：表 A 很小或 B 的 JOIN 列有索引。\n复杂度：O(|A| * log|B|)（如果有索引）或 O(|A| * |B|)（没有索引→全表扫描）。\n\n**2. Hash Join（哈希连接）**\n原理：对小表建哈希表（存到 work_mem 中），然后遍历大表在哈希表中查找匹配行。\n适用：没有可用索引，或两表都很大。\n复杂度：O(|A| + |B|)。\n特点：需要一次 hash 表构建（全量读取小表），如果小表太大溢出到磁盘会显著变慢。\n\n**3. Merge Join（归并连接）**\n原理：两表都按 JOIN 列排序，然后双指针归并。\n适用：两表都已排序（如有 B-tree 索引或 ORDER BY）。\n复杂度：O(|A| + |B|)。\n特点：要求两表有序，否则需要先排序。\n\n如何强制选择 JOIN 策略（调试用）：\n```sql\nSET enable_nestloop = off;  -- 禁用 Nested Loop\nSET enable_hashjoin = off;  -- 禁用 Hash Join\nSET enable_mergejoin = off; -- 禁用 Merge Join\n```\n\n这些开关只在 EXPLAIN 分析时临时使用——不要在生产环境全局关闭。',
      },
      {
        title: '查询性能调优的实战方法',
        content: '调优方法论（按优先级）：\n\n**1. 先看执行计划，再猜测**\n永远不要凭直觉"估计加了索引就快"。EXPLAIN (ANALYZE, BUFFERS) 看：\n- actual time vs planning time：执行时间 vs 规划时间\n- rows vs loops：plan rows 是估计的？actual rows 是实际？差距大说明统计信息不准\n- Buffers: shared hit/read：多少来自缓存？多少从磁盘？\n\n**2. 区别 Seq Scan 的好坏**\n小表 Seq Scan 是最优的（全扫一个 8KB 页面比 B-tree 查找快）。大表 Seq Scan 才是灾难。如果 EXPLAIN 显示对大表做 Seq Scan，检查 WHERE 条件是否有索引可用。\n\n**3. 注意统计信息是否准确**\nANALYZE table_name 手动更新统计信息。如果 EXPLAIN 估算行数和实际行数差距超过 5 倍，统计信息大概率过时。\n\n**4. 检查 work_mem 是否足够**\nSort Method: external merge → work_mem 不够，查询溢出到磁盘。增加 work_mem（但要考虑并发量）。\n\n**5. 检查是否有不必要的 JOIN**\n有时反规范化（冗余存一列）可以消除 JOIN。有时 WHERE 条件可以重写以利用更好的索引。',
      },
    ],
    handsOn: [
      {
        title: '比较三种 JOIN 策略',
        cmd: "CREATE TEMP TABLE a (id integer PRIMARY KEY, val text) ON COMMIT DROP;\nCREATE TEMP TABLE b (id integer PRIMARY KEY, val text) ON COMMIT DROP;\nINSERT INTO a SELECT g, md5(g::text) FROM generate_series(1, 1000) g;\nINSERT INTO b SELECT g, md5(g::text) FROM generate_series(1, 100000) g;\n-- Hash Join\nEXPLAIN (ANALYZE, COSTS OFF) SELECT count(*) FROM a JOIN b ON a.id = b.id;\n-- 强制 Nested Loop\nSET enable_hashjoin = off;\nEXPLAIN (ANALYZE, COSTS OFF) SELECT count(*) FROM a JOIN b ON a.id = b.id;\nSET enable_hashjoin = on;",
        output: 'Hash Join  (actual time=8.234..45.671 rows=1000 loops=1)\n  Hash Cond: (a.id = b.id)\n  ->  Seq Scan on a  (actual time=0.123..1.456 rows=1000 loops=1)\n  ->  Hash  (actual time=7.890..7.890 rows=100000 loops=1)\n        ->  Seq Scan on b  (actual time=0.567..4.234 rows=100000 loops=1)\n\nNested Loop  (actual time=0.234..23.456 rows=1000 loops=1)\n  ->  Seq Scan on a  (actual time=0.100..1.200 rows=1000 loops=1)\n  ->  Index Only Scan using b_pkey on b  (actual time=0.008..0.010 rows=1 loops=1000)',
        explain: 'Hash Join 扫描 a 建哈希表扫描 b 查表。Nested Loop 外层扫描 a（1000 行），内层用主键索引查 b（1000 次索引查找）。如果 a 很大，Nested Loop 的 1000 次索引查找累积可能很慢。但对于 Index Only Scan，每次只需约 0.01ms，总体很快。选择哪种策略取决于表大小和索引情况。',
      },
      {
        title: '体验统计信息不准的影响',
        cmd: "CREATE TEMP TABLE skew_test (category text, val integer) ON COMMIT DROP;\nINSERT INTO skew_test SELECT CASE WHEN g <= 999 THEN 'common' ELSE 'rare' END, g FROM generate_series(1, 100000) g;\n-- 没有索引时\nEXPLAIN SELECT * FROM skew_test WHERE category = 'common';\nEXPLAIN SELECT * FROM skew_test WHERE category = 'rare';\n-- 统计信息会知道 common 有 999 行, rare 只有 1 行？\n-- ANALYZE skew_test;\nEXPLAIN SELECT * FROM skew_test WHERE category = 'rare';",
        output: 'Seq Scan on skew_test  (cost=0.00..2000.00 rows=50000 width=...)\n  Filter: (category = \'rare\'::text)\n\n-- ANALYZE 后\nIndex Scan using idx_category on skew_test  (cost=0.29..8.31 rows=1 width=...)',
        explain: 'ANALYZE 前，规划器不知道 category 的值的分布，假设 rare 和 common 各占 50%（rows=50000）。ANALYZE 后，规划器知道 rare 只有 1 行，估算 rows=1，选择更优的 Index Scan。这就是统计信息为什么重要——它直接决定执行计划的质量。',
      },
    ],
    diagnosis: [
      {
        symptom: 'EXPLAIN 显示 Seq Scan 但表上明明有索引',
        cause: '规划器判断 Seq Scan 比 Index Scan 更便宜。可能原因：1) 表太小（几个页面，顺序读比索引查找快）；2) 查询返回表中大部分行（如 > 30%），索引+回表的总代价高于全表扫描；3) random_page_cost 过高，使规划器避免索引扫描。',
        fix: '检查 EXPLAIN 中的实际行数 vs 估计行数。如果实际返回行数远小于估计，统计信息需要更新（ANALYZE）。如果确实返回大部分行，考虑是否真的需要这么多行——加 LIMIT 或更精确的 WHERE 条件。对于 SSD，降低 random_page_cost（如 1.1）。',
      },
      {
        symptom: '同一个查询，昨天快（10ms），今天慢（2s）',
        cause: '执行计划发生了变化——规划器可能因统计信息变化而选择了不同的计划。数据增长改变了统计分布，或 ANALYZE 后统计信息不同了。也可能是缓存状态不同（冷启动 vs 热缓存）。',
        fix: '用 auto_explain 扩展捕捉慢查询的执行计划：CREATE EXTENSION auto_explain; LOAD \'auto_explain\'; SET auto_explain.log_min_duration = \'1s\'; 然后检查 PostgreSQL 日志。对比快慢两个版本的执行计划差异。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 EXPLAIN 查看一条 SELECT 的执行计划，理解 cost、rows、width 的含义',
        hint: 'EXPLAIN SELECT * FROM pg_class WHERE relname = \'pg_class\';',
        answer: "EXPLAIN SELECT * FROM pg_class WHERE relname = 'pg_class';\n-- 观察 cost 的两个数字（启动代价和总代价），rows（估算行数），width（估算每行宽度）",
      },
      {
        level: '进阶',
        task: '创建没有索引的大表，先用 EXPLAIN ANALYZE 测 Seq Scan 时间，然后创建索引，再测 Index Scan 时间，对比差异',
        hint: '用 generate_series 创建 100 万行，对比前后计划',
        answer: "CREATE TEMP TABLE perf_test (id serial, data text) ON COMMIT DROP;\nINSERT INTO perf_test (data) SELECT md5(g::text) FROM generate_series(1,1000000) g;\nEXPLAIN ANALYZE SELECT * FROM perf_test WHERE id = 500000; -- Seq Scan\nCREATE INDEX idx_perf_id ON perf_test(id);\nEXPLAIN ANALYZE SELECT * FROM perf_test WHERE id = 500000; -- Index Scan",
      },
      {
        level: '挑战',
        task: '用 auto_explain 扩展自动记录执行超过 100ms 的查询计划。然后故意执行一个慢查询，检查 PostgreSQL 日志中的自动 EXPLAIN 输出',
        hint: 'auto_explain.log_min_duration + LOAD 扩展',
        answer: "CREATE EXTENSION IF NOT EXISTS auto_explain;\n-- 需要在 postgresql.conf 中设置 session_preload_libraries = 'auto_explain' 并重启\n-- 或者当前会话：\nLOAD 'auto_explain';\nSET auto_explain.log_min_duration = 100;\nSET auto_explain.log_analyze = true;\nSET auto_explain.log_buffers = true;\n-- 执行慢查询\nSELECT count(*) FROM generate_series(1,50000000); -- 慢查询\n-- 查看日志：tail -f $PGDATA/log/postgresql-*.log",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 24: Tuples / 元组
  // ═══════════════════════════════════════════════
  "vJhvgGwNV3JB-wWn_0gMb": {
    mentalModel: '元组（Tuple）是关系型模型对"一行数据"的学术称呼。在 PostgreSQL 中，一个元组不仅包含用户可见的列数据，还包含隐藏的 MVCC 元数据（xmin、xmax、ctid）。就像一本书的每一页（元组）不仅有内容（数据），还有页码（ctid）和出版信息（xmin/xmax）。',
    sections: [
      {
        title: '元组的物理结构 — 从磁盘字节到 SQL 行',
        content: 'PostgreSQL 中每个元组（Heap Tuple）的物理布局：\n\n```\n[HeapTupleHeaderData (23字节)] [NULL bitmap (可选)] [数据列 1] [数据列 2] ...\n```\n\n**HeapTupleHeaderData（23 字节）**包含：\n- **t_xmin**（4 字节）：插入该元组的事务 ID\n- **t_xmax**（4 字节）：删除/更新该元组的事务 ID（0 = 活着）\n- **t_cid**（4 字节）：事务内的命令 ID（区分同事务内多个命令）\n- **t_ctid**（6 字节）：当前元组的物理位置（页号, 槽位号）\n- **t_infomask2**（2 字节）：属性数量和标志位\n- **t_infomask**（2 字节）：元组状态标志位（如 HAS_NULL、HAS_VARWIDTH、HAS_OID、XMAX_COMMITTED、XMIN_COMMITTED）\n- **t_hoff**（1 字节）：用户数据开始偏移量\n\n**NULL Bitmap**：如果元组中有任何列可以为 NULL，就需要一个 bitmap 标记哪些列是 NULL。NULL 列不占用数据空间——bitmap 中标记即可。\n\n**数据列**：按 attnum 顺序存储。\n- 定长列：直接存储值（如 integer 占 4 字节）\n- 变长列：先存 1 或 4 字节的长度头，然后存实际数据（如 text）\n- TOAST 列：如果值 > 2KB，不存内联数据，改为存 TOAST 指针\n\n理解这些结构可以在用 pageinspect 扩展查看原始数据页或分析存储效率时派上用场。',
      },
      {
        title: '元组的生命周期 — 从 INSERT 到 VACUUM',
        content: '一个元组从创建到回收的完整生命周期：\n\n**创建（INSERT）**\n1. 在目标页中找到空闲空间（通过 FSM 空闲空间映射）。\n2. 构建 Tuple：设置 xmin=当前事务 ID, xmax=0。\n3. 在页内分配 ItemPointer（槽位），写入数据。\n4. 写 WAL 记录。\n\n**更新（UPDATE）**\n1. 找到旧元组，设 xmax=当前事务 ID（标记旧版本"死亡"）。\n2. 在同一页或新页中插入新版本元组，xmin=当前事务 ID, xmax=0。\n3. 如果新版本在同一页内（HOT UPDATE，无索引列变更），索引不需更新——性能优化。\n\n**删除（DELETE）**\n1. 设 xmax=当前事务 ID（标记为"死亡"）。\n2. 元组仍然在页中——只是"不可见"。\n\n**回收（VACUUM）**\n1. VACUUM 扫描页，找到 xmax 已提交的旧元组。\n2. 将空间标记为 FSM 中的可回收空间。\n3. 如果整个页都空了（只有死元组），回收整页给操作系统。\n4. 更新可见性映射（VM），标记该页为"全可见"（所有 XID 均已对所有当前事务可见）。\n\n思维实验：一张表有 1 亿行，每天 UPDATE 其中 100 万行。一年后这张表物理上有 1 亿 + 3.65 亿个元组版本（其中 3.65 亿个是死的）。如果不 VACUUM，全表扫描要穿过 4.65 亿个元组——4.65 倍慢！这就是为什么 VACUUM 不是可选的，是生存必需的。',
      },
      {
        title: '可见性判断 — 元组是否"对当前事务可见"',
        content: '元组可见性判断是 MVCC 的核心算法。当事务 T 遇到元组 t 时，执行以下判断：\n\n```\nIF t.xmin = T.id THEN\n  -- 这是我自己创建的元组\n  IF t.xmax = 0 THEN 可见\n  ELSE 不可见（我自己删了它）\nELSIF t.xmin 在 T 的快照中已提交 THEN\n  IF t.xmax = 0 THEN 可见\n  ELSIF t.xmax = T.id THEN 不可见（我自己删了）\n  ELSIF t.xmax 在 T 的快照中未提交 THEN 可见（删除者还没提交）\n  ELSE 不可见（删除已提交）\nELSIF t.xmin = 1 (Frozen) THEN 可见（冻结的元组永远可见）\nELSE 不可见（创建者未提交或已回滚）\n```\n\n这个算法的几个关键推论：\n1. **同一事务看到自己的修改**：if t.xmin = T.id 分支确保你看到自己刚插入的行（即使还没提交）。\n2. **不能看到未提交的修改**：xmin 不在快照的已提交列表中 → 不可见。\n3. **已删除的行不可见**：xmax 在快照中已提交 → 不可见。\n4. **冻结元组永远可见**：xmin=FrozenTransactionId(2) 的特殊分支。\n\n这解释了为什么有时一行数据存在但你看不到——可能是被一个未完成事务"阻挡"了。',
      },
    ],
    handsOn: [
      {
        title: '观察元组的 xmin/xmax 在 UPDATE 中的变化',
        cmd: "CREATE TEMP TABLE tuple_life (id integer, val text) ON COMMIT DROP;\nINSERT INTO tuple_life VALUES (1, 'version1');\nSELECT xmin, xmax, ctid, val FROM tuple_life;\nUPDATE tuple_life SET val = 'version2' WHERE id = 1;\nSELECT xmin, xmax, ctid, val FROM tuple_life;\nUPDATE tuple_life SET val = 'version3' WHERE id = 1;\nSELECT xmin, xmax, ctid, val FROM tuple_life;",
        output: ' xmin | xmax | ctid  |    val\n------+------+-------+----------\n 1024 |    0 | (0,1) | version1\n\n xmin | xmax | ctid  |    val\n------+------+-------+----------\n 1025 |    0 | (0,2) | version2\n\n xmin | xmax | ctid  |    val\n------+------+-------+----------\n 1026 |    0 | (0,3) | version3',
        explain: '每次 UPDATE，xmin 更新为新事务 ID，ctid 移到新槽位。旧版本（(0,1) xmax=1025, (0,2) xmax=1026）仍在页中。只有在 VACUUM 运行后，这些旧版本的槽位才被标记为可回收。注意 ctid 一直在 (0,*)，说明所有版本在同一页——这是 HOT 更新的特征。',
      },
      {
        title: '用 pageinspect 直接查看页内的元组',
        cmd: "CREATE EXTENSION IF NOT EXISTS pageinspect;\nCREATE TEMP TABLE tuple_raw (n integer, s text) ON COMMIT DROP;\nINSERT INTO tuple_raw VALUES (1, 'hello'), (2, 'world');\nSELECT lp, lp_off, lp_len, t_xmin, t_xmax, t_ctid, t_infomask::bit(16) AS infomask, t_data FROM heap_page_items(get_raw_page('tuple_raw', 0));",
        output: ' lp | lp_off | lp_len | t_xmin | t_xmax | t_ctid |     infomask      |                t_data\n----+--------+--------+--------+--------+--------+-------------------+---------------------------------------\n  1 |   8160 |     34 |   1027 |      0 | (0,1)  | 0000001000000010  | \\x010000000b68656c6c6f\n  2 |   8128 |     34 |   1027 |      0 | (0,2)  | 0000001000000010  | \\x020000000b776f726c64',
        explain: 'lp（Line Pointer）是页内行指针编号，lp_off 是行在页内的偏移（从页尾向上生长），lp_len 是行长度。t_data 是二进制格式的列数据，以十六进制显示。\\x01 是 integer 1，\\x0b 是 text 长度 11（？不，更复杂），\\x68656c6c6f 是 "hello" 的 ASCII 码。这让你看到了数据库最底层的数据存储格式。',
      },
    ],
    diagnosis: [
      {
        symptom: 'SELECT count(*) 返回的行数比预期少很多',
        cause: '可能有未提交的事务 INSERT 了行，后来回滚。或者 DELETE 标记了行但未 VACUUM——这些行还在物理表中但对当前快照不可见。也可能是并发事务创建了你看不到的数据。',
        fix: 'SELECT xmin, xmax, ctid, * FROM table WHERE ... 查看元组的可见性状态。如果 xmax != 0，检查该 XID 的提交状态。事务快照问题：SELECT txid_current_snapshot() 查看当前快照的 xmin/xmax/xip。',
      },
      {
        symptom: '表膨胀（Table Bloat）——表大小是估算大小的 5 倍以上',
        cause: '大量死元组未被回收。通常是因为长事务阻止 VACUUM 清理，或 autovacuum 配置不足以应对写入速率。',
        fix: '计算膨胀率：SELECT n_dead_tup::float / NULLIF(n_live_tup, 0) FROM pg_stat_user_tables WHERE relname = \'bloated_table\'; 如果 > 0.2，考虑：1) VACUUM (VERBOSE) 手动执行；2) 如果无法缓解，用 pg_repack 不锁表重建（需安装）。3) 调整 autovacuum 参数（降低 scale factor，降低阈值）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在表中插入一条数据，用 SELECT xmin, xmax, ctid 查看它的隐藏元组信息',
        hint: 'xmin, xmax, ctid 是隐藏列，需要显式指定',
        answer: "CREATE TEMP TABLE t0 (x int) ON COMMIT DROP;\nINSERT INTO t0 VALUES (42);\nSELECT xmin, xmax, ctid, x FROM t0;",
      },
      {
        level: '进阶',
        task: '对同一行执行 5 次 UPDATE，每次更新后用 SELECT ctid 查看位移，观察 HOT 更新的行为',
        hint: '如果 ctid 在同一页号内变化但不跨页，说明 HOT 生效',
        answer: "CREATE TEMP TABLE hot_test (id int PRIMARY KEY, val int) ON COMMIT DROP;\nINSERT INTO hot_test VALUES (1, 0);\nSELECT ctid, val FROM hot_test;\nUPDATE hot_test SET val = 1; SELECT ctid, val FROM hot_test;\nUPDATE hot_test SET val = 2; SELECT ctid, val FROM hot_test;\nUPDATE hot_test SET val = 3; SELECT ctid, val FROM hot_test;\nUPDATE hot_test SET val = 4; SELECT ctid, val FROM hot_test;\n-- ctid 始终在同一页（0,x），说明 HOT 更新在生效",
      },
      {
        level: '挑战',
        task: '用 pageinspect 对比 VACUUM 前后的页内容：创建表并写入、UPDATE、VACUUM。用 heap_page_items() 查看 VACUUM 后死元组槽位的状态',
        hint: 'VACUUM 后死元组的 lp 可能被标记为未使用（lp_len=0）',
        answer: "CREATE EXTENSION IF NOT EXISTS pageinspect;\nCREATE TEMP TABLE vacuum_page_test (id int, data text) ON COMMIT DROP;\nINSERT INTO vacuum_page_test SELECT g, 'data_'||g FROM generate_series(1,10) g;\nUPDATE vacuum_page_test SET data = 'updated' WHERE id <= 5;\nSELECT 'before vacuum' AS stage, lp, lp_off, lp_len, t_xmax FROM heap_page_items(get_raw_page('vacuum_page_test', 0)) ORDER BY lp;\nVACUUM vacuum_page_test;\nSELECT 'after vacuum' AS stage, lp, lp_off, lp_len, t_xmax FROM heap_page_items(get_raw_page('vacuum_page_test', 0)) ORDER BY lp;\n-- VACUUM 后，死元组的 slot 被标记为 lp_len=0（已回收）",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 25: Relations / 关系
  // ═══════════════════════════════════════════════
  "2hM2IPAnNYq-LlEbcFp2Z": {
    mentalModel: '关系（Relation）是表、索引、视图、序列等所有"有列结构"的对象的统称——在 PostgreSQL 内部，只要 pg_class 中有一行记录，它就是一个关系。就像"机动车"是汽车、摩托车、卡车的统称一样，"关系"是数据库核心对象的统称。',
    sections: [
      {
        title: 'Relation 在 PostgreSQL 中的双重含义',
        content: '在 PostgreSQL 的代码和文档中，"relation" 有两个层面的含义：\n\n**1. 数学/理论层面**：关系型数据库中的"关系"——数据的二维表格表示。这是 Codd 关系型模型的原始含义。\n\n**2. 实现层面**：PostgreSQL 源代码中，"Relation" 是 pg_class 中记录的任意条目的通用称呼。\n\n```c\n// PostgreSQL 源码中的 Relation 结构体\n// 任何 pg_class 条目打开后都得到一个 Relation\ntypedef struct RelationData {\n    RelFileLocator rd_locator;  // 物理文件定位\n    Form_pg_class rd_rel;       // pg_class 行数据\n    TupleDesc   rd_att;         // 列描述（属性列表）\n    ...\n} RelationData;\n```\n\n所以当你在 EXPLAIN 输出中看到 "Seq Scan on mytable"——mytable 是一个 Relation。当你看到 "Index Scan using myindex on mytable"——mytable 和 myindex 都是 Relation。当你看到 "Bitmap Index Scan on myindex"——myindex 是一个 Relation。\n\npg_class 的 relkind 字段区分了不同类型的 Relation：\n- \'r\' = 普通表（ordinary table）\n- \'i\' = 索引（index）\n- \'S\' = 序列（sequence）\n- \'v\' = 视图（view）\n- \'m\' = 物化视图（materialized view）\n- \'c\' = 复合类型（composite type）\n- \'t\' = TOAST 表\n- \'f\' = 外部表（foreign table）\n- \'p\' = 分区表（partitioned table）\n- \'I\' = 分区索引（partitioned index）',
      },
      {
        title: 'Relation 的存储文件结构',
        content: '每个 Relation 在磁盘上有三种类型的文件（按需存在）：\n\n**主数据文件（Main Fork）**：\n- 文件名：<relfilenode>\n- 存储实际数据（表行、索引结构、序列值等）\n- 每个 segment 最大 1GB，超过自动创建 .1, .2, ... 分段\n\n**空闲空间映射（Free Space Map, FSM）**：\n- 文件名：<relfilenode>_fsm\n- 跟踪每个页的空闲空间大小\n- INSERT 时查找 FSM 找到有足够空间的页\n- 没有 FSM 时，INSERT 只能追加到表末尾\n\n**可见性映射（Visibility Map, VM）**：\n- 文件名：<relfilenode>_vm\n- 跟踪每个页的所有元组是否对所有当前事务可见\n- 两个 bit 每页：all-visible（全可见）和 all-frozen（全冻结）\n- Index Only Scan 依赖 VM——如果某页不是 all-visible，必须回表检查可见性\n\n还有一个可选的初始化分支（Init Fork）用于 UNLOGGED 表的崩溃恢复。\n\n查看所有分支：SELECT pg_relation_filepath(\'tablename\'::regclass); 然后用 ls 命令查看同名但不同后缀的文件。',
      },
      {
        title: '系统目录中的 Relation 关系',
        content: 'PostgreSQL 的系统目录表也是 Relations——你可以像查询普通表一样查询它们。例如：\n\n```sql\nSELECT * FROM pg_class WHERE relname = \'pg_class\';\n```\n\n这条查询实际上在扫描 pg_class 表来查找 pg_class 自己的元数据行（relname=\'pg_class\' 的那一行）。这是自引用查询。\n\n系统 Relations 的特殊性：\n1. **OID 固定**：pg_class=1259, pg_type=1247, pg_attribute=1249... 这些 OID 在编译时就确定了，所有数据库实例都相同。\n2. **存储在 pg_catalog schema**，且 search_path 总是隐式包含 pg_catalog（即使你没写）。\n3. **不能 DROP 或 ALTER** 系统表的结构。\n4. **有专门的硬编码处理**——例如插入到 pg_class 的操作会触发创建物理文件等复杂逻辑。\n\nrelation 是一种实现抽象，让 PostgreSQL 可以用统一的代码框架处理表、索引、视图等不同对象。比如 VACUUM 操作对表和物化视图都适用，因为它们在底层都是 Relation。',
      },
    ],
    handsOn: [
      {
        title: '查看所有类型的 Relation',
        cmd: "SELECT relkind, count(*) AS count FROM pg_class GROUP BY relkind ORDER BY count DESC;",
        output: ' relkind | count\n---------+-------\n i       |   189\n r       |    95\n S       |    62\n t       |    12\n v       |    21\n c       |     8\n f       |     1',
        explain: '这个查询总结了数据库中所有 Relation 类型。索引（i）是最多的——每个主键和唯一约束都创建索引。表（r）次之。序列（S）每个 serial 列都有。在大型数据库中可能有几千个 Relation。',
      },
      {
        title: '查看 Relation 的文件和大小',
        cmd: "SELECT relname, relkind, pg_relation_filepath(oid) AS file_path, pg_size_pretty(pg_relation_size(oid)) AS main_size, pg_size_pretty(pg_relation_size(oid, 'fsm')) AS fsm_size, pg_size_pretty(pg_relation_size(oid, 'vm')) AS vm_size FROM pg_class WHERE relkind IN ('r','i') AND relnamespace = 'public'::regnamespace LIMIT 5;",
        output: ' relname | relkind |        file_path         | main_size | fsm_size | vm_size\n---------+---------+---------------------------+-----------+----------+---------\n users   | r       | base/16384/16385          | 128 MB    | 64 kB    | 8 kB\n users_pkey | i    | base/16384/16388          | 32 MB     | 24 kB    | 0 bytes',
        explain: '主数据文件（main fork）是最大的部分。FSM 通常很小（跟踪空闲空间）。VM 更小（每个页 2 bits）。users_pkey 索引的 VM 是 0 bytes——索引的可见性映射使用更少。pg_relation_size() 的三个 fork 参数分别查看不同文件的大小。',
      },
    ],
    diagnosis: [
      {
        symptom: 'pg_class 中某条记录的 relfilenode 与实际文件名不匹配',
        cause: '某些 DDL 操作（如 TRUNCATE、CLUSTER、VACUUM FULL）会创建新的物理文件并更新 relfilenode。旧文件可能还在磁盘上（在删除前保留一段时间），但不再被数据库使用。',
        fix: '一般不需要修复——PostgreSQL 会自动在适当时机删除旧文件。如果磁盘空间紧迫，可以执行 CHECKPOINT 加速清理。绝不要手动删除 $PGDATA/base/ 下的文件：这会导致数据库损坏。',
      },
      {
        symptom: '某个 Relation 的磁盘文件不断增大，但查询显示行数没增长',
        cause: '死元组膨胀——UPDATE/DELETE 产生大量无用空间，VACUUM 回收后空间可重用但文件不缩小。在没有 VACUUM FULL 的情况下，Relation 文件只会增长不会缩小。',
        fix: '定期监控膨胀率：n_dead_tup / (n_live_tup + n_dead_tup)。如果某表膨胀率 > 30%，考虑 VACUUM FULL（锁表）或 pg_repack（不锁表）。对于大表，最好的策略是设计上避免膨胀——HOT 更新（不更新索引列）、分区表、append-only 表设计。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 public schema 中所有 Relation 的名称、类型和大小',
        hint: 'pg_class JOIN pg_namespace，使用 pg_relation_size()',
        answer: "SELECT c.relname, CASE c.relkind WHEN 'r' THEN '表' WHEN 'i' THEN '索引' WHEN 'v' THEN '视图' WHEN 'm' THEN '物化视图' WHEN 'S' THEN '序列' ELSE c.relkind::text END AS rel_type, pg_size_pretty(pg_relation_size(c.oid)) AS size FROM pg_class c JOIN pg_namespace n ON c.relnamespace = n.oid WHERE n.nspname = 'public' ORDER BY c.relkind, pg_relation_size(c.oid) DESC;",
      },
      {
        level: '进阶',
        task: '用 pg_relation_filepath() 找到某张表的物理文件，然后统计 RelFileNode 目录下所有 fork 文件的大小',
        hint: 'ls -la + pg_relation_filepath 的输出',
        answer: "SELECT relname, pg_relation_filepath(oid) FROM pg_class WHERE relname = 'your_table';\n-- 获取目录和文件名\n-- 然后在 shell 中：ls -la $PGDATA/base/<dboid>/<relfilenode>*",
      },
      {
        level: '挑战',
        task: '创建一个分区表，查看 pg_class 中父表（relkind=\'p\'）和分区（relkind=\'r\'）的记录。观察它们都是 Relation，但有不同的 relkind',
        hint: 'pg_inherits 记录父子继承关系',
        answer: "CREATE TEMP TABLE partition_demo (id serial, created_at date, data text) PARTITION BY RANGE (created_at) ON COMMIT DROP;\nCREATE TEMP TABLE partition_demo_2024 PARTITION OF partition_demo FOR VALUES FROM ('2024-01-01') TO ('2025-01-01') ON COMMIT DROP;\nCREATE TEMP TABLE partition_demo_2025 PARTITION OF partition_demo FOR VALUES FROM ('2025-01-01') TO ('2026-01-01') ON COMMIT DROP;\nSELECT c.relname, c.relkind, c.relispartition, pg_size_pretty(pg_relation_size(c.oid)) FROM pg_class c WHERE c.relname LIKE 'partition_demo%' ORDER BY c.relname;",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 26: Installation and Setup / 安装与配置
  // ═══════════════════════════════════════════════
  "FtPiBWMFhjakyXsmSL_CI": {
    mentalModel: '安装 PostgreSQL 就像盖房子——先"打地基"（initdb 创建数据目录），再"拉水电"（配置 postgresql.conf 和 pg_hba.conf），最后"开门"（启动 postgres 进程监听连接）。每一步都有特定的选项，选对了住得舒服，选错了后期折腾。',
    handsOn: [
      {
        title: 'macOS 安装 — Homebrew 方式',
        cmd: 'brew install postgresql@16\nbrew services start postgresql@16\npsql -U postgres -c "SELECT version();"',
        output: '                                                           version\n------------------------------------------------------------------------------------------------------------------------------\n PostgreSQL 16.1 on x86_64-apple-darwin22.6.0, compiled by Apple clang version 14.0.3, 64-bit',
        explain: 'Homebrew 安装的 PostgreSQL 16，数据目录在 /opt/homebrew/var/postgresql@16/。brew services 用 launchd 管理后台服务。psql -U postgres 以超级用户连接。这是 macOS 上最推荐的安装方式。',
      },
      {
        title: 'Linux (Ubuntu/Debian) 安装 — 官方仓库',
        cmd: '# 添加官方仓库\nsudo sh -c \'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list\'\nwget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -\nsudo apt-get update\nsudo apt-get install -y postgresql-16\nsudo systemctl start postgresql\nsudo -u postgres psql -c "SELECT version();"',
        output: 'PostgreSQL 16.1 on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0, 64-bit',
        explain: '使用 PostgreSQL 官方 APT 仓库（非 Ubuntu 自带的老版本）。lsb_release -cs 获取 Ubuntu 版本代号（如 jammy）。安装完成后 systemctl 启动服务。sudo -u postgres 切换到 postgres 系统用户。数据目录在 /var/lib/postgresql/16/main/。',
      },
      {
        title: '自定义 initdb — 选择数据目录和编码',
        cmd: '# 初始化自定义数据目录\ninitdb -D /mnt/data/pgdata --locale=zh_CN.UTF-8 --encoding=UTF8 --data-checksums\n# 输出示例\nThe files belonging to this database system will be owned by user "tu".\nThis user must also own the server process.\n\nThe database cluster will be initialized with locale "zh_CN.UTF-8".\ntext search configuration will be set to "english".\n\nData page checksums are enabled.\n\nSuccess. You can now start the database server using:\n  pg_ctl -D /mnt/data/pgdata -l logfile start',
        output: 'The database cluster will be initialized with locale "zh_CN.UTF-8".\nData page checksums are enabled.\n\nSuccess.',
        explain: 'initdb 是 PostgreSQL 的初始化命令。-D 指定数据目录。--locale=zh_CN.UTF-8 设置默认的排序和字符分类规则。--data-checksums 启用数据页校验和（检测磁盘 corruption，强烈建议开启，虽有 1-2% 的性能开销）。initdb 创建了所有系统目录表、template0/template1/postgres 数据库。',
      },
      {
        title: '关键配置参数快速检查',
        cmd: "SELECT name, setting, unit, context, short_desc FROM pg_settings WHERE name IN ('shared_buffers', 'work_mem', 'maintenance_work_mem', 'effective_cache_size', 'random_page_cost', 'checkpoint_timeout', 'max_connections', 'wal_level', 'log_min_duration_statement') ORDER BY name;",
        output: '             name             | setting | unit | context  |         short_desc\n-------------------------------+---------+------+----------+----------------------------\n checkpoint_timeout            | 300     | s    | sighup   | Sets the maximum time between auto WAL checkpoints.\n effective_cache_size          | 524288  | 8kB  | user     | Sets the planner\'s assumption about the total size of the data caches.\n log_min_duration_statement    | -1      | ms   | superuser| Sets the minimum execution time above which all statements will be logged.\n maintenance_work_mem          | 65536   | kB   | user     | Sets max memory for maintenance operations.\n max_connections               | 100     |      | postmaster| Sets the maximum number of concurrent connections.\n random_page_cost              | 4       |      | user     | Sets the planner\'s estimate of the cost of a nonsequentially fetched disk page.\n shared_buffers                | 16384   | 8kB  | postmaster| Sets the number of shared memory buffers used by the server.\n wal_level                     | replica |      | postmaster| Set the level of information written to the WAL.\n work_mem                      | 4096    | kB   | user     | Sets the maximum memory for a query operation.',
        explain: '这是安装后的第一件事——检查关键参数。context 列告诉你如何应用变更：postmaster=需要重启，sighup=reload，user=按会话设置。effective_cache_size=4GB（524288*8kB）告诉规划器操作系统大概缓存了多少数据。log_min_duration_statement=-1 表示不记录慢查询（生产环境建议设为 1000 即 1 秒）。',
      },
    ],
    sections: [
      {
        title: 'pg_hba.conf — 客户端认证的守门人',
        content: 'pg_hba.conf（Host-Based Authentication）控制谁能以什么方式连接到哪个数据库。这是 PostgreSQL 安全的第一道防线。\n\n文件格式：TYPE  DATABASE  USER  ADDRESS  METHOD [OPTIONS]\n\nTYPE 类型：\n- **local**：Unix socket 连接（不经过 TCP/IP）。psql 默认连接方式。\n- **host**：TCP/IP 连接（可分为 hostssl 强制 SSL 和 hostnossl 禁止 SSL）。\n- **hostssl**：仅允许 SSL 加密的 TCP/IP 连接。\n\nMETHOD 认证方法：\n- **trust**：任何人无需密码就能连接——只在开发环境用！\n- **md5**：MD5 密码验证（老标准，PostgreSQL 14+ 默认 scram-sha-256）。\n- **scram-sha-256**：现代安全密码验证（推荐）。\n- **peer**：操作系统用户匹配（local 连接常用）。\n- **cert**：SSL 客户端证书验证（最高安全，但配置复杂）。\n\n实用配置示例：\n```conf\n# TYPE  DATABASE  USER  ADDRESS       METHOD\nlocal   all       all                  peer     # 本地 socket 用 OS 用户\nhost    all       all   127.0.0.1/32   scram-sha-256  # 本机 TCP\nhostssl all       all   0.0.0.0/0      scram-sha-256  # 远程连接必须 SSL\nhost    app       appuser  10.0.0.0/8  md5     # 仅 app 数据库给 appuser 访问\n```\n\n修改 pg_hba.conf 后需要：SELECT pg_reload_conf(); 或 pg_ctl reload 或 kill -HUP <postmaster PID>。',
      },
      {
        title: '关键 postgresql.conf 参数调优初阶',
        content: '安装后的默认配置是为"兼容旧硬件"设计的（假设服务器只有 512MB 内存）。现代硬件需要调整：\n\n**内存相关（最重要）**：\n- shared_buffers = 物理内存的 25%（默认 128MB 太小）\n- effective_cache_size = 物理内存的 75%（不是分配内存，是给规划器的提示）\n- work_mem = 物理内存 / (max_connections * 4)（排序和哈希操作的内存，保守默认 4MB）\n- maintenance_work_mem = 物理内存的 10%（给 VACUUM 和 CREATE INDEX）\n\n**写入相关**：\n- wal_level = replica（如果需要流复制，否则 minimal 节省 WAL）\n- max_wal_size = 视磁盘空间而定（如 4GB，控制 WAL 总量）\n- checkpoint_timeout = 15min（默认 5min 在写入密集型环境太频繁）\n\n**连接相关**：\n- max_connections = 视业务需求（默认 100，用连接池如 pgbouncer 可减少到 20-50）\n\n**日志相关**：\n- log_min_duration_statement = 1000（记录超过 1 秒的查询，-1 表示不记录）\n- log_line_prefix = \'%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h \'（详细的前缀信息）\n\n调优策略：一次只改一个参数，用 pgbench 基准测试前后对比。不要盲目复制网上的"最优配置"——每台服务器的硬件和负载都不同。',
      },
    ],
    diagnosis: [
      {
        symptom: 'psql: could not connect to server: No such file or directory',
        cause: 'Unix socket 不存在。PostgreSQL 服务没有启动，或 Unix socket 目录不正确。',
        fix: '检查 PG 是否运行：pg_ctl status -D $PGDATA 或 pg_isready。如果没启动：pg_ctl start -D $PGDATA 或 systemctl start postgresql。如果确定在运行，可能是 Unix socket 目录不同：psql -h /tmp -U postgres（显式指定 socket 目录，通常是 /tmp 或 /var/run/postgresql）。',
      },
      {
        symptom: 'FATAL: password authentication failed for user "postgres"',
        cause: '密码错误或 pg_hba.conf 配置要求密码但你未设置。peer 认证方式在"错误的操作系统用户"下连接也会失败。',
        fix: '如果是本地连接，检查 pg_hba.conf 中 local 行的 METHOD 是否为 peer 或 trust（peer 要求 OS 用户名 = 数据库用户名，通常是 postgres）。sudo -u postgres psql 用正确的 OS 用户连接。或者在 pg_hba.conf 中把 local 改为 trust（开发环境）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '确认 PostgreSQL 安装成功：查看版本号、数据目录位置、当前运行的配置',
        hint: 'SELECT version(); SHOW data_directory; SHOW config_file;',
        answer: "psql -U postgres -c \"SELECT version();\"\npsql -U postgres -c \"SHOW data_directory;\"\npsql -U postgres -c \"SHOW config_file;\"\npsql -U postgres -c \"SHOW hba_file;\"",
      },
      {
        level: '进阶',
        task: '修改 postgresql.conf 中的 shared_buffers 和 work_mem 参数，reload 配置，验证参数已生效',
        hint: 'ALTER SYSTEM SET 或 编辑 postgresql.conf + pg_reload_conf()',
        answer: "ALTER SYSTEM SET work_mem = '16MB';\nSELECT pg_reload_conf();\nSHOW work_mem;\n-- 或直接设置当前会话：SET work_mem = '32MB';",
      },
      {
        level: '挑战',
        task: '从源码编译安装 PostgreSQL 16（下载源码 → ./configure → make → make install → initdb → 启动），完成一次完整的自建安装',
        hint: './configure --prefix=/usr/local/pgsql + make -j$(nproc)',
        answer: "wget https://ftp.postgresql.org/pub/source/v16.1/postgresql-16.1.tar.gz\ntar xzf postgresql-16.1.tar.gz\ncd postgresql-16.1\n./configure --prefix=/usr/local/pgsql --enable-debug\nmake -j$(nproc)\nsudo make install\n# 设置 PATH\nexport PATH=/usr/local/pgsql/bin:$PATH\ninitdb -D /usr/local/pgsql/data\npg_ctl -D /usr/local/pgsql/data -l logfile start\npsql -c \"SELECT version();\"",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 27: Constraints / 约束
  // ═══════════════════════════════════════════════
  "j9ikSpCD3yM5pTRFuJjZs": {
    mentalModel: '约束（Constraint）是数据库的"保安系统"——NOT NULL 是门禁（没卡不许进），UNIQUE 是档案室规则（禁止重名），FOREIGN KEY 是关系网（你必须是体系内的一员），CHECK 是业务警察（值必须合规）。这些约束构成了数据的"免疫系统"，在数据库层面抵御脏数据。',
    sections: [
      {
        title: '五种约束类型详解',
        content: 'PostgreSQL 支持五种约束类型，各有不同的用途和实现机制：\n\n**1. NOT NULL — 最简单的约束**\n禁止列值为 NULL。这是最常用、开销最小的约束。实现为 CHECK 约束（col IS NOT NULL）。\n\n**2. UNIQUE — 防止重复值**\n确保列（或列的组合）中的所有值不同。NULL 值被视为"不同"—多行可以有 NULL（因为 NULL != NULL）。UNIQUE 底层创建一个唯一 B-tree 索引，所以也可以加速查询。\n\n**3. PRIMARY KEY — 行标识符**\nNOT NULL + UNIQUE 的组合。每张表只能有一个主键（但可以是多列组成复合主键）。底层自动创建唯一索引。主键列自动 NOT NULL。\n\n**4. FOREIGN KEY — 引用完整性**\n确保列值在引用的表中存在。更新时检查，级联行为可选（CASCADE / SET NULL / SET DEFAULT / NO ACTION / RESTRICT）。需要在引用列上建索引。\n\n**5. CHECK — 自定义规则**\n最灵活的约束，可以定义任意布尔表达式。CHECK (age >= 0 AND age < 200)。CHECK (end_date > start_date)。CHECK (array_length(tags, 1) > 0)。\n\n还有一个特殊的 EXCLUDE 约束：确保没有两行在同一列上满足指定条件。常用于预约系统——同一会议室同一时间段不能有两个预约。EXCLUDE USING gist (room WITH =, time_slot WITH &&)。',
      },
      {
        title: '约束的性能影响',
        content: '约束不是免费的——每种约束都有性能代价：\n\n**NOT NULL**：开销最小。只在 INSERT/UPDATE 时检查一次。\n\n**UNIQUE / PRIMARY KEY**：维护索引的开销。每次 INSERT 都需要在索引中插入，UPDATE 需要更新索引，DELETE 需要标记删除。在高并发写入场景下，唯一索引（B-tree）的叶节点分裂可能成为瓶颈。\n\n**FOREIGN KEY**：\n- 对子表：每次 INSERT/UPDATE 都需要查父表（索引查找）验证引用存在。**外键列上必须有索引**——否则每次验证都是全表扫描。\n- 对父表：每次 DELETE/UPDATE 需要检查是否有子行引用（同样需要索引）。级联操作（CASCADE）还有额外的修改开销。\n\n**CHECK**：在 INSERT/UPDATE 时计算表达式。如果表达式涉及子查询或 JSONB 操作，可能较慢。纯标量值的 CHECK（如 CHECK (age > 0)）开销极小。\n\n**EXCLUDE**：维护 GiST 索引的开销，类似 UNIQUE 约束但更复杂（因为涉及范围比较而非等值比较）。\n\n约束的"性价比"：NOT NULL 几乎零开销却提供了重要的数据准确性保障。FOREIGN KEY 开销较大但在金融等场景中是不可替代的。CHECK 开销取决于表达式的复杂度。',
      },
      {
        title: 'DEFERRABLE 约束 — 推迟检查的战术',
        content: '默认情况下，PostgreSQL 在每个语句执行后立即检查约束（INITIALLY IMMEDIATE）。但可以推迟到事务提交时检查（INITIALLY DEFERRED）。\n\n适用场景：\n1. **批量加载数据**：先插入所有行，最后统一验证。\n2. **自引用外键**：部门表 dept(parent_dept_id REFERENCES dept(id))——先插入部门 A（parent_dept_id=NULL），再插入部门 B（parent_dept_id=A.id）。\n3. **循环引用**：表 A 引用表 B，表 B 引用表 A——需要推迟至少一个外键。\n\n语法：\n```sql\nCREATE TABLE departments (\n  id serial PRIMARY KEY,\n  parent_id integer REFERENCES departments(id) DEFERRABLE INITIALLY DEFERRED\n);\n```\n\n在事务中使用：\n```sql\nBEGIN;\nSET CONSTRAINTS ALL DEFERRED;\n-- 在这里做所有插入/更新\n-- 提交时，PostgreSQL 统一检查所有约束\nCOMMIT;\n```\n\n注意：CHECK 约束（除了 NOT NULL 的实现）不支持 DEFERRABLE。只有 UNIQUE PRIMARY KEY FOREIGN KEY 和 EXCLUDE 支持推迟。',
      },
    ],
    handsOn: [
      {
        title: '创建完整约束的表并测试违反情况',
        cmd: "CREATE TEMP TABLE constr_test (\n  id serial PRIMARY KEY,\n  username text UNIQUE NOT NULL,\n  email text NOT NULL CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),\n  age integer CHECK (age >= 18 AND age <= 120),\n  created_at timestamptz DEFAULT now()\n) ON COMMIT DROP;\nINSERT INTO constr_test (username, email, age) VALUES ('alice', 'alice@example.com', 30);\nINSERT INTO constr_test (username, email, age) VALUES ('bob', 'bad-email', 25);",
        output: 'INSERT 0 1\nERROR:  new row for relation "constr_test" violates check constraint "constr_test_email_check"\nDETAIL:  Failing row contains (2, bob, bad-email, 25, ...).',
        explain: '第一条 INSERT 成功（满足所有约束）。第二条失败——email 不匹配正则表达式。这是数据库层面的防护——不管你用什么语言、什么 ORM、什么框架，这个 CHECK 约束都能防住非法 email。唯一绕过的方法是 SUPERUSER 的超级权限或者修改约束定义。',
      },
      {
        title: '测试外键约束的级联行为',
        cmd: "CREATE TEMP TABLE authors (id serial PRIMARY KEY, name text) ON COMMIT DROP;\nCREATE TEMP TABLE books (id serial PRIMARY KEY, author_id integer REFERENCES authors(id) ON DELETE CASCADE, title text) ON COMMIT DROP;\nINSERT INTO authors VALUES (1, 'George Orwell');\nINSERT INTO books VALUES (1, 1, '1984'), (2, 1, 'Animal Farm');\nDELETE FROM authors WHERE id = 1;\nSELECT 'books after delete' AS info, count(*) FROM books;",
        output: '          info          | count\n------------------------+-------\n books after delete     |     0',
        explain: 'ON DELETE CASCADE 在删除父行时自动删除所有引用的子行。George Orwell 的两本书都被级联删除了。如果不加 CASCADE（默认是 NO ACTION），DELETE FROM authors 会报错 "violates foreign key constraint"。',
      },
      {
        title: 'EXCLUDE 约束示例 — 防止时间冲突',
        cmd: "CREATE TEMP TABLE reservations (room text, time_slot tsrange, EXCLUDE USING gist (room WITH =, time_slot WITH &&)) ON COMMIT DROP;\nINSERT INTO reservations VALUES ('A', tsrange('2024-01-01 10:00', '2024-01-01 11:00'));\nINSERT INTO reservations VALUES ('A', tsrange('2024-01-01 10:30', '2024-01-01 11:30'));",
        output: 'INSERT 0 1\nERROR:  conflicting key value violates exclusion constraint "reservations_room_time_slot_excl"\nDETAIL:  Key (room, time_slot)=(A, ["2024-01-01 10:30:00","2024-01-01 11:30:00")) conflicts with existing key (room, time_slot)=(A, ["2024-01-01 10:00:00","2024-01-01 11:00:00")).',
        explain: 'EXCLUDE 约束防止了同一会议室(A)的两次预约时间重叠。room WITH = 表示检查相同会议室，time_slot WITH && 表示检查时间范围重叠。第二次 INSERT 的 10:30-11:30 与第一次的 10:00-11:00 重叠→被拒绝。这是用声明式约束替代应用层复杂的冲突检查逻辑的经典案例。',
      },
    ],
    diagnosis: [
      {
        symptom: 'INSERT 执行成功但 UNIQUE 约束并未阻止重复',
        cause: 'UNIQUE 约束和 PRIMARY KEY 只检查非 NULL 值。如果你的 UNIQUE 列允许多个 NULL 值，PostgreSQL 认为 NULL != NULL，所以两个 NULL 不冲突。这在某些业务场景下是期望的行为，但在其他场景下是 bug。',
        fix: '如果你需要 UNIQUE 列上也不允许 NULL，使用 NOT NULL UNIQUE（等效于 PRIMARY KEY，但不如 PRIMARY KEY 语义清晰）。或者用部分唯一索引：CREATE UNIQUE INDEX ON table (col) WHERE col IS NOT NULL; ——这允许 NULL 但不检查它们。根据需求选择。',
      },
      {
        symptom: '创建外键时脚本长时间运行不结束',
        cause: '创建外键时 PostgreSQL 需要扫描子表和父表以验证现有数据满足约束。如果子表有几千万行，这个扫描可能需要很长时间（锁表期间）。',
        fix: '两步创建法：先 ADD CONSTRAINT ... NOT VALID（不验证现有数据，立即生效），然后 ALTER TABLE ... VALIDATE CONSTRAINT（后台验证，不阻塞写操作）。注意：NOT VALID 期间插入的数据也会被约束检查（只有旧数据不检查）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一张表，包含所有 5 种约束类型：NOT NULL、UNIQUE、PRIMARY KEY、FOREIGN KEY、CHECK。插入正确的数据和故意错误的数据测试',
        hint: 'CREATE TABLE + 分别定义各约束',
        answer: "CREATE TEMP TABLE constr_full (\n  id serial PRIMARY KEY,\n  code text UNIQUE NOT NULL,\n  category_id integer REFERENCES category(id),\n  quantity integer NOT NULL CHECK (quantity > 0),\n  discount numeric(4,2) CHECK (discount >= 0 AND discount <= 1)\n) ON COMMIT DROP;\nINSERT INTO constr_full (code, category_id, quantity) VALUES ('ABC', 1, 10);\nINSERT INTO constr_full (code, category_id, quantity) VALUES ('ABC', 1, -5); -- 失败：UNIQUE 冲突 + CHECK 失败",
      },
      {
        level: '进阶',
        task: '创建一个日历预约表，使用 EXCLUDE 约束防止同一会议室同一时间的重复预约',
        hint: 'EXCLUDE USING gist + tsrange + && 运算符',
        answer: "CREATE TEMP TABLE meetings (room text, title text, time_range tsrange, EXCLUDE USING gist (room WITH =, time_range WITH &&)) ON COMMIT DROP;\nINSERT INTO meetings VALUES ('R1', 'Sprint Review', tsrange('2024-01-01 14:00', '2024-01-01 15:00'));\nINSERT INTO meetings VALUES ('R1', 'Standup', tsrange('2024-01-01 14:30', '2024-01-01 15:30')); -- 冲突！",
      },
      {
        level: '挑战',
        task: '对一个百万行的表添加外键约束（使用 NOT VALID + VALIDATE 两步法），比较全表扫描的耗时和两步法的耗时',
        hint: 'ALTER TABLE ADD CONSTRAINT ... NOT VALID; 然后 VALIDATE CONSTRAINT;',
        answer: "-- 假设已有 big_child (100万行) 和 parent (1000行)\n-- 传统方式（会锁表验证）\n-- ALTER TABLE big_child ADD CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES parent(id);\n-- 两步法（推荐）\nALTER TABLE big_child ADD CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES parent(id) NOT VALID;\n-- 立即生效（新数据检查，旧数据暂不检查）\nALTER TABLE big_child VALIDATE CONSTRAINT fk_parent;\n-- 后台验证旧数据，不阻塞写入",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 28: NULL / NULL
  // ═══════════════════════════════════════════════
  "91eOGK8mtJulWRlhKyv0F": {
    mentalModel: 'NULL 不是 0，不是空字符串，也不是 "未知"——它是"不存在"。就像在表格中留空的格子：未填写任何值。SQL 中的 NULL 是一个特殊标记，表示"这个格子没有值"。它的逻辑行为是"三值逻辑"，违反直觉但必须掌握。',
    sections: [
      {
        title: 'NULL 的三值逻辑 — TRUE, FALSE, UNKNOWN',
        content: '普通编程语言使用布尔二值逻辑（true/false），但 SQL 使用三值逻辑（true/false/unknown）：\n\n```sql\n-- 二值逻辑的常见陷阱在 SQL 中失效\nSELECT * FROM users WHERE age > 18;  -- 不会返回 age IS NULL 的行！\nSELECT * FROM users WHERE NOT (age > 18);  -- 也不会返回 age IS NULL 的行！\n```\n\n为什么？因为：\n- NULL > 18 → NULL (unknown)\n- NOT NULL → NULL (unknown)\n- WHERE 子句只保留条件评估为 TRUE 的行\n\n这意味着 NULL 行在 WHERE 中"从缝隙中溜走"——既不符合正面条件也不符合负面条件。\n\n比较操作的真值表：\n| col = value | col IS NULL | 结果 |\n|------------|------------|------|\n| 任意行     |   任意值    | col = col → 如果是 NULL → UNKNOWN |\n\n关键规则：\n1. **任何与 NULL 的比较结果都是 NULL**：NULL = NULL → NULL，NULL != NULL → NULL。\n2. **NULL 与 NULL 不相等**：因此 UNIQUE 约束允许多个 NULL 值。\n3. **检查 NULL 的唯一方式是 IS NULL / IS NOT NULL**。\n4. **聚合函数忽略 NULL**：SUM、AVG、COUNT(col) 跳过 NULL 值。COUNT(*) 包含所有行。\n5. **ORDER BY 中 NULL 的默认位置**：ASC 时 NULL 排在最后，DESC 时 NULL 排在最前（可配置 NULLS FIRST / NULLS LAST）。',
      },
      {
        title: 'NULL 在 PostgreSQL 中的实际存储',
        content: 'NULL 值的存储非常高效——因为它根本不占用列数据空间：\n\n1. 元组头部（t_infomask）有一个标志位 HAS_NULL，表示该元组中有 NULL 列。\n2. 元组数据区有一个 NULL bitmap，每个可为 NULL 的列占用 1 bit。\n3. 如果 BIT 为 1，该列是 NULL——跳过后面的数据区（没有字节）。\n4. 如果 BIT 为 0，该列有值——按列的 attlen 和类型读取。\n\n所以：\n- NULL 列存储开销 ≈ 0 字节（仅 bitmap 中 1 bit）\n- 大量 NULL 列的表存储效率非常高\n- 100 个可为 NULL 的列约需 100 bits = 13 字节的 NULL bitmap\n\n这与一些数据库不同——某些数据库用特殊值（如 0 或空字符串）表示 NULL，PostgreSQL 用 bitmap 方式完全不同。\n\n这也解释了为什么 ALTER TABLE ADD COLUMN（不加 DEFAULT）是瞬时操作——新列的所有现有行在 bitmap 中标为 NULL，没有任何数据写入。',
      },
      {
        title: 'NULL 处理最佳实践',
        content: '**1. 用 COALESCE 提供默认值**\n```sql\nSELECT COALESCE(middle_name, \'\') AS middle FROM users;\nSELECT COALESCE(discount_percent, 0) FROM orders;\n```\n\n**2. 用 NULLIF 将特定值转为 NULL**\n```sql\nSELECT NULLIF(phone, \'\') AS phone FROM contacts;  -- 空字符串变 NULL\nSELECT AVG(NULLIF(score, 0)) FROM exams;  -- 排除零分\n```\n\n**3. JOIN 中的 NULL 陷阱**\n```sql\nSELECT * FROM a LEFT JOIN b ON a.id = b.a_id WHERE b.x > 5;\n-- WHERE 条件会排除所有 LEFT JOIN 产生的 NULL 行！\n-- 相当于把 LEFT JOIN 变成了 INNER JOIN\n-- 正确写法：WHERE b.a_id IS NULL OR b.x > 5\n```\n\n**4. NOT IN 中的 NULL**\n```sql\nSELECT * FROM t WHERE col NOT IN (SELECT nullable_col FROM other);\n-- 如果子查询返回任何 NULL，NOT IN 结果永远是空！\n-- 因为 col NOT IN (1, 2, NULL) = col != 1 AND col != 2 AND col != NULL\n-- col != NULL → UNKNOWN → 整个 AND → UNKNOWN → 无行返回\n-- 改用 NOT EXISTS 或过滤 NULL\n```\n\n**5. 避免在业务逻辑中使用 NULL 的歧义**\nNULL 本身不说明"为什么缺失"——是"未提供"、"不适用"还是"还没填"？在设计中考虑用显式标记：\n- 状态列：status = \'pending\', \'active\', \'closed\'（用枚举而非 NULL 表示状态）\n- 金额列：balance = 0（而非 NULL），但如果"未开账户"可能需要 NULL\n- 日期列：deleted_at 用 NULL 表示未删除（这是一种公认的惯例，无需避免）',
      },
    ],
    handsOn: [
      {
        title: 'NULL 的比较和逻辑陷阱演示',
        cmd: "SELECT NULL = NULL AS null_equals_null, NULL IS NULL AS null_is_null, NULL IS NOT NULL AS null_is_not_null, NULL = 'hello' AS null_equals_string, NULL AND TRUE AS null_and_true, NULL OR TRUE AS null_or_true, NOT NULL AS not_null;",
        output: ' null_equals_null | null_is_null | null_is_not_null | null_equals_string | null_and_true | null_or_true | not_null\n------------------+--------------+------------------+--------------------+---------------+--------------+----------\n                  | t            | f                |                    |               | t            |',
        explain: '所有结果都在 psql 中留空（表示 NULL）或有值（t/f）。NULL = NULL → NULL，NULL IS NULL → TRUE。NULL AND TRUE → NULL，NULL OR TRUE → TRUE（有一个 TRUE 就够）。NOT NULL → NULL。这就是三值逻辑的直观体验。',
      },
      {
        title: '聚合函数对 NULL 的处理',
        cmd: "CREATE TEMP TABLE null_agg (val integer) ON COMMIT DROP;\nINSERT INTO null_agg VALUES (10), (20), (NULL), (30), (NULL);\nSELECT count(*) AS count_star, count(val) AS count_col, sum(val) AS sum_val, avg(val) AS avg_val, min(val) AS min_val, max(val) AS max_val FROM null_agg;",
        output: ' count_star | count_col | sum_val | avg_val | min_val | max_val\n------------+-----------+---------+---------+---------+---------\n          5 |         3 |      60 | 20.0000 |      10 |      30',
        explain: 'count(*) = 5（所有行），count(val) = 3（排除 NULL）。sum/avg/min/max 都排除 NULL（60/3=20）。如果你期望 avg = 60/5=12（把 NULL 视为 0），需要用 COALESCE(val, 0)。',
      },
      {
        title: 'NOT IN 的 NULL 陷阱',
        cmd: "SELECT * FROM (VALUES (1), (2), (3)) AS t(val) WHERE val NOT IN (SELECT unnest(ARRAY[2, NULL]));",
        output: ' val\n-----\n(0 rows)',
        explain: '期望返回 1 和 3（2 应该被排除，NULL 不应该影响）。但结果是空！因为 val NOT IN (2, NULL) 展开为 val != 2 AND val != NULL。val != NULL 永远返回 NULL，导致整个 AND 表达式为 NULL → WHERE 条件为 NULL → 无行返回。这是 SQL 中最隐蔽的坑之一。',
      },
    ],
    diagnosis: [
      {
        symptom: 'LEFT JOIN 的结果比预期少——排除了应该返回的行',
        cause: 'WHERE 子句中对 RIGHT 表的列进行了过滤（WHERE right_table.column IS NOT NULL 或任何涉及 right_table 的条件，这些条件会排除 LEFT JOIN 产生的 NULL 行，实际上把 LEFT JOIN 降级为 INNER JOIN。',
        fix: '把对 RIGHT 表的过滤条件移到 ON 子句中：LEFT JOIN right_table ON a.id = b.a_id AND b.status = \'active\'。或者 WHERE 条件中允许 NULL：WHERE (b.status = \'active\' OR b.status IS NULL)。',
      },
      {
        symptom: 'COUNT 查询返回 0，但肉眼看到有数据',
        cause: '可能用了 COUNT(column) 而非 COUNT(*)，且该列全是 NULL。COUNT(column) 只计数非 NULL 值——如果整列都是 NULL，返回 0。',
        fix: '用 COUNT(*) 计数行数。如果需要计某列的非 NULL 值，用 COUNT(column)。两者语义不同，按需选择。业务上通常需要 COUNT(*)。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建含有 NULL 值的表，测试 IS NULL、IS NOT NULL、COALESCE、NULLIF 的用法',
        hint: 'COALESCE(expr, \'默认值\')',
        answer: "CREATE TEMP TABLE null_test (id serial, name text, phone text) ON COMMIT DROP;\nINSERT INTO null_test (name, phone) VALUES ('Alice', '123'), ('Bob', NULL), ('Charlie', '');\nSELECT name, COALESCE(phone, '无电话') AS phone, NULLIF(phone, '') IS NULL AS empty_or_null FROM null_test;",
      },
      {
        level: '进阶',
        task: '写一个查询，用 LEFT JOIN + NULL 检查找出没有订单的用户（即 traditional "NOT IN" 避免 NULL 陷阱的版本）',
        hint: 'LEFT JOIN ... WHERE right_table.id IS NULL',
        answer: "CREATE TEMP TABLE users2 (id serial, name text) ON COMMIT DROP;\nCREATE TEMP TABLE orders2 (id serial, user_id integer) ON COMMIT DROP;\nINSERT INTO users2 (name) VALUES ('Alice'), ('Bob'), ('Charlie');\nINSERT INTO orders2 (user_id) VALUES (1), (3);\nSELECT u.name FROM users2 u LEFT JOIN orders2 o ON u.id = o.user_id WHERE o.id IS NULL;\n-- Bob 没有订单",
      },
      {
        level: '挑战',
        task: '设计一个实验：用 EXPLAIN ANALYZE 对比 IS NULL 查询使用索引和不使用索引的性能差异。验证"IS NULL 能否走索引"',
        hint: 'CREATE INDEX ... WHERE col IS NULL（部分索引）',
        answer: "CREATE TEMP TABLE null_idx_test (id serial, val integer) ON COMMIT DROP;\nINSERT INTO null_idx_test (val) SELECT CASE WHEN g % 1000 = 0 THEN NULL ELSE g END FROM generate_series(1, 1000000) g;\n-- 没有索引\nEXPLAIN ANALYZE SELECT count(*) FROM null_idx_test WHERE val IS NULL;\n-- 创建部分索引\nCREATE INDEX idx_null_val ON null_idx_test (val) WHERE val IS NULL;\nEXPLAIN ANALYZE SELECT count(*) FROM null_idx_test WHERE val IS NULL;\n-- 第一次是 Seq Scan，第二次是 Index Only Scan——性能天差地别",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 29: Querying Data / 查询数据
  // ═══════════════════════════════════════════════
  "BEJyz0ohCglDucxfyuAy4": {
    mentalModel: '查询数据就像"问数据库问题"——SELECT 是你想要的信息，FROM 是从哪里找，WHERE 是限定条件，ORDER BY 是排序规则。数据库就像一个智慧型档案管理员，根据你的提问从海量档案中精准地找出答案。',
    handsOn: [
      {
        title: '基础查询 — SELECT, WHERE, ORDER BY',
        cmd: "CREATE TEMP TABLE products (id serial PRIMARY KEY, name text, category text, price numeric(10,2), stock integer) ON COMMIT DROP;\nINSERT INTO products (name, category, price, stock) VALUES\n('Laptop', 'Electronics', 7999.00, 50),\n('Mouse', 'Electronics', 99.00, 200),\n('Desk', 'Furniture', 1500.00, 10),\n('Chair', 'Furniture', 899.00, 30),\n('Monitor', 'Electronics', 2999.00, 25);\nSELECT name, price, stock FROM products WHERE category = 'Electronics' AND stock > 20 ORDER BY price DESC;",
        output: '  name   |  price  | stock\n---------+---------+-------\n Laptop  | 7999.00 |    50\n Monitor | 2999.00 |    25',
        explain: '基本查询演示：投影（SELECT 指定列）、选择（WHERE 过滤行）、排序（ORDER BY DESC）。SQL 的声明式范式——你描述你要什么，数据库优化器决定怎么获取。',
      },
      {
        title: 'JOIN 查询 — 关联多表',
        cmd: "CREATE TEMP TABLE orders (id serial PRIMARY KEY, product_id integer REFERENCES products(id), quantity integer, order_date date) ON COMMIT DROP;\nINSERT INTO orders (product_id, quantity, order_date) VALUES\n(1, 2, '2024-01-15'), (2, 5, '2024-01-16'), (1, 1, '2024-01-17'), (3, 1, '2024-01-17'), (4, 3, '2024-01-18');\nSELECT p.name, p.category, sum(o.quantity) AS total_sold FROM products p JOIN orders o ON p.id = o.product_id GROUP BY p.name, p.category ORDER BY total_sold DESC;",
        output: '  name  |  category   | total_sold\n--------+-------------+------------\n Mouse  | Electronics |          5\n Laptop | Electronics |          3\n Chair  | Furniture   |          3\n Desk   | Furniture   |          1',
        explain: 'INNER JOIN 连接 products 和 orders 表。GROUP BY + sum() 聚合各产品的总销量。注意 Monitor 没有出现——因为没有 Monitor 的订单（INNER JOIN 排除了无订单的产品）。如果要显示所有产品（包括无订单的），用 LEFT JOIN。',
      },
      {
        title: '子查询 — 查询中的查询',
        cmd: "SELECT name, price, category FROM products WHERE price > (SELECT avg(price) FROM products) ORDER BY price DESC;",
        output: '  name   |  price  |  category\n---------+---------+------------\n Laptop  | 7999.00 | Electronics\n Monitor | 2999.00 | Electronics',
        explain: '子查询 (SELECT avg(price) FROM products) 计算平均价格 2699.20。外层查询筛选价格高于均价的产品。子查询先执行，结果作为外层 WHERE 的比较值。也可以用 WITH (CTE) 改写为更清晰的结构。',
      },
      {
        title: '窗口函数 — 行间计算',
        cmd: "SELECT category, name, price, rank() OVER (PARTITION BY category ORDER BY price DESC) AS rank_in_category, price - lag(price) OVER (PARTITION BY category ORDER BY price DESC) AS price_diff FROM products ORDER BY category, rank_in_category;",
        output: '  category   |  name   |  price  | rank_in_category | price_diff\n-------------+---------+---------+-----------------+------------\n Electronics | Laptop  | 7999.00 |               1 |\n Electronics | Monitor | 2999.00 |               2 |  -5000.00\n Electronics | Mouse   |   99.00 |               3 |  -2900.00\n Furniture   | Desk    | 1500.00 |               1 |\n Furniture   | Chair   |  899.00 |               2 |   -601.00',
        explain: '窗口函数 rank() 在每个 PARTITION 内独立排序。rank_in_category 显示各类目内价格排名。lag(price) 获取前一行（上一名次）的价格，price_diff 计算差距。窗口函数不折叠行——所有 5 行都在结果中，只是额外附加了窗口计算列。',
      },
    ],
    sections: [
      {
        title: '查询优化基础 — 索引与 WHERE 条件',
        content: '查询快慢的关键在于 WHERE 子句能否利用索引。B-tree 索引覆盖面：\n\n**能走索引的运算符**：\n- col = value\n- col < / <= / > / >= value\n- col BETWEEN value1 AND value2\n- col IS NULL（如果索引包含 NULL 的记录）\n- col LIKE \'prefix%\'（前缀匹配，但不能是 LIKE \'%suffix\' 或 LIKE \'%mid%\')）\n\n**不能走索引的情况**：\n- 函数包裹列：WHERE lower(name) = \'alice\'（需要 Expression Index: CREATE INDEX idx_lower_name ON users (lower(name))）\n- 类型不匹配：WHERE id = \'123\'（id 是 integer，\'123\' 是 text，需要隐含转换）\n- 不等号范围过大：WHERE id != 5（几乎所有行都匹配，规划器大概率选 Seq Scan）\n- OR 条件：WHERE a = 1 OR b = 2（除非有复合索引或 BitmapOr 优化）\n\n**复合索引与列顺序**：\nCREATE INDEX idx_a_b ON t(a, b) 支持：\n- a = 1 AND b = 2 → 使用索引（高效）\n- a = 1 → 使用索引的第一列\n- b = 2 → 不能高效使用索引（没有第一列 a 的过滤）\n\n这就是为什么复合索引的列顺序很重要——把 WHERE 条件中出现最频繁的列放在前面。',
      },
      {
        title: 'EXPLAIN 输出解读',
        content: '```sql\nEXPLAIN (ANALYZE, BUFFERS)\nSELECT p.name, sum(o.quantity)\nFROM products p\nJOIN orders o ON p.id = o.product_id\nWHERE p.category = \'Electronics\'\nGROUP BY p.name;\n```\n\n解读每一行：\n\n```\nHashAggregate (actual time=2.345..2.456 rows=3 loops=1)\n  Group Key: p.name\n  ->  Hash Join (actual time=1.234..1.567 rows=4 loops=1)\n        Hash Cond: (o.product_id = p.id)\n        ->  Seq Scan on orders o (actual time=0.023..0.089 rows=12 loops=1)\n        ->  Hash (actual time=1.001..1.001 rows=3 loops=1)\n              Buckets: 1024  Batches: 1\n              ->  Seq Scan on products p (actual time=0.012..0.987 rows=3 loops=1)\n                    Filter: (category = \'Electronics\'::text)\n                    Rows Removed by Filter: 2\n                    Buffers: shared hit=5\n```\n\n- **rows** 和 **actual rows** 差距：估计 vs 实际。差距大=统计信息不准。\n- **Buffers: shared hit=5**：从 shared_buffers 缓存命中了 5 个页面。shared read=... 表示从磁盘读取。\n- **Buckets: 1024 Batches: 1**：哈希表用了 1024 个桶，1 个批次。Batches > 1 = 数据太大溢出到磁盘。\n- 缩进表示执行顺序——越靠右越先执行。',
      },
    ],
    diagnosis: [
      {
        symptom: '搜索表单中有 5 个可选过滤条件，AND 拼出来的 SQL 只有第一个条件走了索引',
        cause: '复合索引只能用于最左前缀匹配。如果索引是 (a, b, c)，WHERE b = 1 无法使用该索引。你的查询 WHERE a = ? AND b = ? AND c = ? ... 是完全动态的——用户可能只填了 b 和 d。',
        fix: '为常用的过滤条件组合创建复合索引。如果所有过滤条件都很常用，考虑为每个条件创建单列索引，PostgreSQL 可以组合（BitmapAnd）使用多个单列索引。或者使用 pg_trgm 的 GIN 索引进行全文风格的过滤。',
      },
      {
        symptom: '日期范围查询（WHERE created_at BETWEEN ... AND ...）超慢',
        cause: '索引可能未按日期列排序，或表没有按日期分区导致扫描大量无关数据。',
        fix: '对该列创建 B-tree 索引。如果表很大（> 100GB），考虑按日期分区（RANGE PARTITION BY created_at）。索引 + 分区裁剪 = 只扫描相关日期的页面。定期进行 BRIN 索引评估：对 append-only 的时间列，BRIN 索引大小远小于 B-tree。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 WHERE + AND/OR + BETWEEN + IN + LIKE 写出 5 种不同的条件查询',
        hint: 'WHERE age BETWEEN 20 AND 30 AND city IN (\'Beijing\', \'Shanghai\')',
        answer: "SELECT * FROM products WHERE price BETWEEN 100 AND 1000 AND category IN ('Electronics', 'Furniture') AND name LIKE 'M%' AND stock > 0;",
      },
      {
        level: '进阶',
        task: '用窗口函数对比：每个产品类目中，每项产品的价格与类目平均价格的差值',
        hint: 'AVG() OVER (PARTITION BY category)',
        answer: "SELECT category, name, price, avg(price) OVER (PARTITION BY category) AS cat_avg, price - avg(price) OVER (PARTITION BY category) AS diff_from_avg FROM products ORDER BY category, diff_from_avg DESC;",
      },
      {
        level: '挑战',
        task: '对比同一个查询在有无索引下的 EXPLAIN ANALYZE 输出。在 100 万行表中测试，计算索引带来的加速倍数',
        hint: 'CREATE TABLE + INSERT 100 万行 + EXPLAIN ANALYZE',
        answer: "CREATE TEMP TABLE big_search (id serial PRIMARY KEY, data text, category text) ON COMMIT DROP;\nINSERT INTO big_search (data, category) SELECT md5(g::text), CASE WHEN g%100=0 THEN 'rare' ELSE 'common' END FROM generate_series(1,1000000) g;\nEXPLAIN (ANALYZE, COSTS OFF) SELECT * FROM big_search WHERE category = 'rare';\nCREATE INDEX idx_cat ON big_search(category);\nEXPLAIN (ANALYZE, COSTS OFF) SELECT * FROM big_search WHERE category = 'rare';\n-- 第一次 Seq Scan（扫描全表），第二次 Index Scan（只扫描 rare 行）",
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Node 30: For Schemas / 模式操作
  // ═══════════════════════════════════════════════
  "KMdF9efNGULualk5o1W0_": {
    mentalModel: 'Schema 操作就像管理"图书馆的分区"——可以用 CREATE、ALTER、DROP 来创建新分区、调整分区规则、或移除整个分区。每个 Schema 就像一个独立的空间，SQL 标准提供了统一的方式来管理它们。',
    sections: [
      {
        title: 'DDL 语句家族 — CREATE / ALTER / DROP',
        content: 'SQL 的数据定义语言（DDL）包括创建、修改、删除数据库对象的命令。在 PostgreSQL 中，几乎所有 DDL 都是事务安全的——可以在 BEGIN...COMMIT 中执行并在出错时回滚：\n\n**CREATE**：创建新对象。\n```sql\nCREATE TABLE users (id serial PRIMARY KEY, name text);\nCREATE INDEX idx_users_name ON users(name);\nCREATE VIEW active_users AS SELECT * FROM users WHERE active = true;\n```\n\n**ALTER**：修改现有对象。\n```sql\nALTER TABLE users ADD COLUMN email text;\nALTER TABLE users ALTER COLUMN name SET NOT NULL;\nALTER TABLE users RENAME COLUMN name TO username;\nALTER TABLE users ADD CONSTRAINT valid_email CHECK (email ~ E\'^[a-z]+@[a-z]+\\\\.com$\');\n```\n\n**DROP**：删除对象。\n```sql\nDROP TABLE users;  -- 如果有依赖对象（如外键、视图）会报错\nDROP TABLE users CASCADE;  -- 级联删除所有依赖对象（危险！）\nDROP INDEX IF EXISTS idx_users_name;  -- 不存在也不报错\n```\n\n**PostgreSQL 特有的事务安全 DDL**：\n```sql\nBEGIN;\nALTER TABLE users ADD COLUMN phone text;\nALTER TABLE users ADD COLUMN address text;\n-- 如果第二条 ALTER 出错，第一条也会回滚\nCOMMIT;\n```\n\n相比 MySQL（大多数 DDL 隐式提交），这是 PostgreSQL 在 schema 迁移中的巨大优势。',
      },
      {
        title: 'ALTER TABLE 的常见操作与注意事项',
        content: 'ALTER TABLE 是使用频率最高的 DDL 命令，但有多种子操作，性能影响差异很大：\n\n**快速操作（只修改系统目录）**：\n- ADD COLUMN ... DEFAULT（PG 11+）：瞬间完成，不重写表。新的默认值只在系统目录中记录。\n- RENAME COLUMN / RENAME TABLE：只改名称，瞬间完成。\n- SET/DROP DEFAULT：修改系统目录，瞬间完成。\n- SET/DROP NOT NULL（PG 12+ 通过 CHECK 约束实现，PG 11 前需全表扫描）：视 PG 版本而定。\n\n**慢速操作（需要重写表或全表扫描）**：\n- ALTER COLUMN TYPE：转换数据类型。如果新旧类型不兼容（如 text → integer），需要全表扫描转换每一行的值。\n- DROP COLUMN：标记列不可见（不立即回收空间），后续 VACUUM 清理。\n- ADD PRIMARY KEY / ADD UNIQUE：扫描全表创建唯一索引——在大表上可能数小时。\n- ADD FOREIGN KEY：扫描子表和父表验证现有数据。\n\n**危险操作（锁表）**：\n- ALTER COLUMN TYPE ... USING：若 USING 表达式复杂，表被 ACCESS EXCLUSIVE 锁住期间写入完全被阻塞。\n- VACUUM FULL：全表重写，ACCESS EXCLUSIVE 锁。\n\n减轻策略：使用 pg_repack（不锁表的表重建），分区逐步迁移，或在维护窗口执行慢操作。',
      },
      {
        title: 'DROP 的连锁反应 — CASCADE 与依赖链',
        content: 'DROP ... CASCADE 是 PostgreSQL 中最强大也最危险的操作之一。\n\n```sql\nDROP TABLE users CASCADE;\n```\n\n这条命令会：\n1. 删除 users 表\n2. 删除所有依赖 users 的对象：\n   - 所有引用 users 的外键约束\n   - 所有从 users 派生的视图\n   - 所有使用 users 的函数（取决于具体依赖）\n   - users 表上的所有索引、触发器、规则\n\n级联删除遵循 pg_depend 系统目录中记录的依赖关系。你可以预览"删除后会影响什么"：\n\n```sql\nSELECT dependent.oid::regclass AS object,\n       pg_describe_object(dependent.classid, dependent.objid, dependent.objsubid) AS description\nFROM pg_depend d\nJOIN pg_class referenced ON d.refobjid = referenced.oid\nJOIN pg_depend dependent_d ON dependent_d.objid = d.objid\nCROSS JOIN LATERAL (SELECT d.objid AS objid, d.classid AS classid, d.objsubid AS objsubid) AS dependent\nWHERE referenced.oid = :table_name::regclass;\n```\n\n生产环境铁律：永远在事务中做 DROP CASCADE，确认无误再 COMMIT。或者先用 DROP TABLE users（不带 CASCADE）——如果因为依赖拒绝删除，说明有依赖对象需要先处理。',
      },
    ],
    handsOn: [
      {
        title: 'DDL 事务安全性演示',
        cmd: "CREATE SCHEMA test_ddl;\nCREATE TABLE test_ddl.safe (id integer);\nBEGIN;\nALTER TABLE test_ddl.safe ADD COLUMN name text;\nINSERT INTO test_ddl.safe VALUES (1, 'Alice');\nALTER TABLE test_ddl.safe ADD COLUMN email integer; -- 故意用错类型？用正确类型！\nCOMMIT;\nSELECT * FROM test_ddl.safe;",
        output: 'BEGIN\nALTER TABLE\nINSERT 0 1\nALTER TABLE\nCOMMIT\n id | name  | email\n----+-------+-------\n  1 | Alice |',
        explain: '在一个事务中执行了两个 ALTER TABLE 和一个 INSERT。如果中间某步失败，所有操作回滚（表保持事务前的状态）。这是 PostgreSQL DDL 的事务安全性——在 MySQL 中 DDL 会自动提交，无法回滚。这是数据库迁移脚本安全的基石。',
      },
      {
        title: '快速 ADD COLUMN DEFAULT 不重写表（PG 11+）',
        cmd: "CREATE TEMP TABLE fast_ddl (id serial PRIMARY KEY, data text) ON COMMIT DROP;\nINSERT INTO fast_ddl (data) SELECT md5(g::text) FROM generate_series(1, 100000) g;\n\\timing on\nALTER TABLE fast_ddl ADD COLUMN created_at timestamptz DEFAULT now();\n\\timing off",
        output: 'ALTER TABLE\nTime: 2.345 ms',
        explain: '10 万行的表 ADD COLUMN DEFAULT 只需 2ms！因为 PostgreSQL 11+ 不重写表——默认值存储在 pg_attrdef 系统目录中，而非写入每一行。读取时如果列为 NULL，自动返回默认值。但如果后续在同一个事务中更新这些行，会触发整表重写（将默认值物理写入）。',
      },
      {
        title: '查看和预览 CASCADE 级联影响',
        cmd: "CREATE SCHEMA cascade_demo;\nCREATE TABLE cascade_demo.parent (id serial PRIMARY KEY);\nCREATE TABLE cascade_demo.child (id serial PRIMARY KEY, parent_id integer REFERENCES cascade_demo.parent(id));\nCREATE VIEW cascade_demo.parent_view AS SELECT * FROM cascade_demo.parent;\n-- 检查依赖\nSELECT ref.oid::regclass AS referenced_by FROM pg_depend d JOIN pg_class ref ON d.objid = ref.oid WHERE d.refobjid = 'cascade_demo.parent'::regclass;",
        output: '      referenced_by\n-------------------------\n cascade_demo.child\n cascade_demo.parent_view',
        explain: 'DROP TABLE cascade_demo.parent 会失败因为 child 和 parent_view 依赖它。DROP TABLE cascade_demo.parent CASCADE 会连同 child 表和 parent_view 视图一起删除。pg_depend 的查询让你在做危险操作前"预览"后果。',
      },
    ],
    diagnosis: [
      {
        symptom: 'ALTER TABLE ADD COLUMN 执行后磁盘空间没变化，但好像所有值都是 NULL',
        cause: 'PostgreSQL 11+ 的优化：ADD COLUMN DEFAULT 不重写表，新列的 DEFAULT 存在系统目录中。查询时，如果该列的行数据为 NULL 且列有默认值，PostgreSQL 自动返回默认值。这是优化行为，不是 bug。',
        fix: '不需要修复——这是特性。如果你需要把默认值"物理写入"每一行（例如为了后续修改默认值不影响已有数据），在 ALTER TABLE 后立即 UPDATE 表：UPDATE big_table SET new_col = DEFAULT; 然后 VACUUM。但注意 UpDATE 在大表上会加锁并产生大量死元组。',
      },
      {
        symptom: 'DROP TABLE 删了表但 pg_class 中仍有记录，schema 看起来"脏"',
        cause: '可能有其他会话仍在引用该表（如打开的游标），PostgreSQL 直到所有引用释放后才真正清理系统目录条目和物理文件。',
        fix: '检查：SELECT * FROM pg_stat_activity WHERE query LIKE \'%dropped_table%\'; 终止相应会话。或等待引用自然释放。可以 CHECKPOINT 加速物理文件删除，但系统目录条目在引用完全释放前无法清除。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在一个事务中执行 CREATE TABLE + INSERT + ALTER TABLE + ROLLBACK，验证 DDL 事务回滚',
        hint: 'BEGIN ... ROLLBACK',
        answer: "BEGIN;\nCREATE TABLE rollback_test (id integer);\nINSERT INTO rollback_test VALUES (1);\nALTER TABLE rollback_test ADD COLUMN name text;\nROLLBACK;\nSELECT * FROM rollback_test; -- 报错：relation \"rollback_test\" does not exist",
      },
      {
        level: '进阶',
        task: '在不重写全表的前提下，修改列的数据类型（如 integer → bigint），验证 ALTER COLUMN TYPE 的 USING 子句',
        hint: 'ALTER TABLE ... ALTER COLUMN ... TYPE bigint',
        answer: "CREATE TEMP TABLE type_change (id integer) ON COMMIT DROP;\nINSERT INTO type_change SELECT generate_series(1,1000);\nALTER TABLE type_change ALTER COLUMN id TYPE bigint;  -- integer->bigint 是安全的（有 USING 隐式转换）\nSELECT pg_typeof(id), count(*) FROM type_change GROUP BY pg_typeof(id);",
      },
      {
        level: '挑战',
        task: '使用 pg_depend 编写一个查询，列出所有依赖特定表 A 的对象（包括视图、外键、函数等），理解级联删除的完整影响链',
        hint: 'JOIN pg_depend + pg_class + pg_proc 等多个系统表',
        answer: "SELECT c.relname AS dependent_object, c.relkind, pg_describe_object('pg_class'::regclass, c.oid, 0) AS description FROM pg_depend d JOIN pg_class c ON d.objid = c.oid WHERE d.refobjid = 'your_table'::regclass AND c.relkind IN ('v','r','i')\nUNION ALL\nSELECT p.proname, 'f'::\"char\", 'function' FROM pg_depend d JOIN pg_proc p ON d.objid = p.oid WHERE d.refobjid = 'your_table'::regclass;\n-- 这个查询显示了 DROP CASCADE 会影响的所有对象",
      },
    ],
  },
};

export default POSTGRESQL_DEEP_TUTORIALS;
