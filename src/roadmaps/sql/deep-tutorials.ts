import type { DeepTutorial } from '../deep-types';

export const SQL_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  // ── SELECT ──
  "rmqXH29n1oXtZ8tvmcRFn": {
    mentalModel: 'SELECT 像一张"取数清单"：你告诉数据库"我要什么列、从哪张表、满足什么条件、按什么排序、要几行"。数据库按这个清单返回结果。90% 的 SQL 工作都在写 SELECT。',
    handsOn: [
      {
        title: '最基础的 SELECT',
        cmd: 'SELECT name, email FROM users LIMIT 3;',
        output: ' name   | email\n--------+------------------\n Alice  | alice@example.com\n Bob    | bob@example.com\n Carol  | carol@example.com',
        explain: '从 users 表取 name 和 email 两列，LIMIT 3 只取前 3 行。SELECT * 取所有列，但生产环境应该明确列出需要的列——减少 IO、减少网络传输、代码更清晰。',
      },
      {
        title: 'WHERE 过滤 + ORDER BY 排序',
        cmd: 'SELECT name, age, city FROM users WHERE age >= 18 AND city = \'北京\' ORDER BY age DESC LIMIT 5;',
        output: ' name   | age | city\n--------+-----+------\n 张伟   |  45 | 北京\n 李娜   |  38 | 北京\n 王磊   |  32 | 北京\n 刘洋   |  28 | 北京\n 陈静   |  25 | 北京',
        explain: 'WHERE 在 GROUP BY 之前执行，过滤原始行。AND 组合多个条件。ORDER BY age DESC 按年龄倒序（最大的在前）。LIMIT 5 只取前 5 行。',
      },
      {
        title: '聚合 + GROUP BY',
        cmd: 'SELECT city, COUNT(*) AS user_count, ROUND(AVG(age), 1) AS avg_age FROM users GROUP BY city ORDER BY user_count DESC;',
        output: ' city   | user_count | avg_age\n--------+------------+---------\n 北京   |      12840 |    31.2\n 上海   |      10523 |    29.8\n 广州   |       7891 |    28.5\n 深圳   |       6432 |    27.9',
        explain: 'GROUP BY city 按城市分组。COUNT(*) 数每组的行数。AVG(age) 算每组的平均年龄。ROUND(..., 1) 保留 1 位小数。AS 取别名让结果列名可读。ORDER BY user_count DESC 按用户数倒排。',
      },
      {
        title: 'JOIN 关联查询',
        cmd: 'SELECT u.name, COUNT(o.id) AS orders, SUM(o.amount) AS total FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.name HAVING COUNT(o.id) > 0 ORDER BY total DESC LIMIT 5;',
        output: ' name   | orders | total\n--------+--------+----------\n 张伟   |     23 | 15680.50\n 李娜   |     18 | 12340.00\n 王磊   |     15 |  9870.25',
        explain: 'LEFT JOIN 把 users 和 orders 通过 user_id 关联。u 和 o 是表别名（省字）。GROUP BY u.name 按用户分组。HAVING COUNT(o.id) > 0 只保留有订单的用户。SUM(o.amount) 算总消费额。',
      },
    ],
    diagnosis: [
      {
        symptom: 'ERROR: column "xxx" must appear in the GROUP BY clause',
        cause: 'SELECT 里出现了非聚合列，但它不在 GROUP BY 里。比如 SELECT name, city, COUNT(*) FROM users GROUP BY city——name 不在 GROUP BY 里，数据库不知道该显示哪个 name。',
        fix: '把 name 加到 GROUP BY，或者用聚合函数包裹：SELECT MAX(name), city, COUNT(*) FROM users GROUP BY city。',
      },
      {
        symptom: 'WHERE 里用 SELECT 定义的别名报错',
        cause: 'SQL 执行顺序：FROM → WHERE → SELECT。WHERE 执行时 SELECT 的别名还不存在。',
        fix: '在 WHERE 里写完整表达式而不是别名。或者用子查询：SELECT * FROM (SELECT name, price * qty AS total FROM orders) t WHERE t.total > 100。',
      },
      {
        symptom: '查询很慢（几秒甚至超时）',
        cause: '没有索引。WHERE、JOIN、ORDER BY 用的列如果没有索引，数据库会全表扫描（每行都读一遍）。',
        fix: 'EXPLAIN 看查询计划。如果看到 "Seq Scan" 或 "ALL"，说明在扫全表。给 WHERE/JOIN/ORDER BY 的列加索引：CREATE INDEX idx_name ON users(city, age)。',
      },
      {
        symptom: 'LEFT JOIN 结果行数比预期多很多',
        cause: '一对多关系导致行膨胀。一个用户有 5 个订单，LEFT JOIN 后这个用户就出现 5 行。再 JOIN 另一张一对多的表，行数会变成 5 × N。',
        fix: '先聚合再 JOIN，或者用子查询先聚合。不要在 SELECT 里直接 JOIN 多张一对多的表。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '查询 users 表里年龄大于 25 且邮箱以 @gmail.com 结尾的用户，按注册时间从早到晚排序',
        hint: 'LIKE \'%@gmail.com\' 匹配邮箱后缀',
        answer: 'SELECT name, age, email, created_at\nFROM users\nWHERE age > 25\n  AND email LIKE \'%@gmail.com\'\nORDER BY created_at ASC;',
      },
      {
        level: '进阶',
        task: '找出每个品类（category）价格最高的产品名和价格，只要价格超过 100 的品类',
        hint: '需要 GROUP BY + 子查询或 window function。简单做法是先 GROUP BY 取 MAX(price)，再 JOIN 回原表取产品名',
        answer: '-- 方法 1：子查询 + JOIN\nSELECT p.category, p.name, p.price\nFROM products p\nJOIN (\n  SELECT category, MAX(price) AS max_price\n  FROM products\n  GROUP BY category\n  HAVING MAX(price) > 100\n) m ON p.category = m.category AND p.price = m.max_price;\n\n-- 方法 2：Window function（PostgreSQL/MySQL 8+）\nSELECT category, name, price FROM (\n  SELECT category, name, price,\n    RANK() OVER (PARTITION BY category ORDER BY price DESC) AS rnk\n  FROM products\n) t WHERE rnk = 1 AND price > 100;',
      },
      {
        level: '挑战',
        task: '找出"连续 3 天都有登录"的用户（假设 login_logs 表有 user_id 和 login_date 列）',
        hint: '这是一个"间隔"问题。用 LEAD/LAG window function 或者自连接。一个技巧：日期减去行号如果相同，说明是连续的',
        answer: '-- 方法：日期 - 行号 = 常量 说明日期连续\nWITH numbered AS (\n  SELECT DISTINCT user_id, login_date,\n    login_date - ROW_NUMBER() OVER (\n      PARTITION BY user_id ORDER BY login_date\n    )::int AS grp\n  FROM login_logs\n)\nSELECT user_id\nFROM numbered\nGROUP BY user_id, grp\nHAVING COUNT(*) >= 3;\n\n-- 原理：如果日期连续（1月1日、1月2日、1月3日），\n-- 行号也连续（1、2、3），差值相同（0、0、0）\n-- 连续 N 天的差值都一样',
      },
    ],
    prereqs: [
      '数据类型 — INT、VARCHAR、TIMESTAMP 的含义',
      'CREATE TABLE — 理解表结构',
    ],
    nextSteps: [
      '子查询 — 在 SELECT/WHERE/FROM 里嵌套查询',
      'Window Functions — RANK/LEAD/LAG 等高级分析函数',
      'EXPLAIN — 看懂查询计划、优化慢查询',
    ],
  },

  // ── JOINs ──
  "4UQQYbjzwVxZOAxBuXKQS": {
    mentalModel: 'JOIN 是"把两张表按条件拼在一起"。INNER JOIN 只保留能拼上的部分，LEFT JOIN 保留左边所有行（拼不上的填 NULL）。选择哪种 JOIN 取决于"你想看到谁"。',
    handsOn: [
      {
        title: 'INNER JOIN：只要匹配的',
        cmd: 'SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id LIMIT 5;',
        output: ' name   | total\n--------+---------\n Alice  |  120.50\n Alice  |   85.00\n Bob    |  230.00\n Carol  |   45.75\n Carol  |  190.30',
        explain: 'INNER JOIN 只返回两个表都能匹配上的行。没有订单的用户不会出现，没有用户的订单也不会出现。注意 Alice 出现了两次——因为她有两笔订单。JOIN 是一对多关系时会产生重复行。',
      },
      {
        title: 'LEFT JOIN：保留左边所有行',
        cmd: 'SELECT u.name, o.total FROM users u LEFT JOIN orders o ON u.id = o.user_id;',
        output: ' name   | total\n--------+---------\n Alice  |  120.50\n Alice  |   85.00\n Bob    |  230.00\n Carol  |   45.75\n Dave   |   NULL\n Eve    |   NULL',
        explain: 'LEFT JOIN 保留左表（users）的所有行。Dave 和 Eve 没有订单，但她们还是出现在结果里，orders 的列全是 NULL。"我想知道所有用户，不管有没有订单"——用 LEFT JOIN。',
      },
      {
        title: '多表 JOIN',
        cmd: 'SELECT u.name, o.id AS order_id, p.name AS product, o.quantity FROM users u JOIN orders o ON u.id = o.user_id JOIN products p ON o.product_id = p.id LIMIT 5;',
        output: ' name  | order_id |  product  | quantity\n-------+----------+-----------+----------\n Alice |      101 | Laptop    |        1\n Alice |      102 | Mouse     |        2\n Bob   |      103 | Keyboard  |        1',
        explain: '三张表关联：users → orders → products。每条 ON 指定两张表之间的连接条件。链式 JOIN 可以关联任意多张表，但太多 JOIN 会影响性能（通常超过 5 张就该考虑子查询或分步查询了）。',
      },
      {
        title: '用 JOIN 找"没有关联"的行',
        cmd: 'SELECT u.name FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL;',
        output: ' name\n------\n Dave\n Eve\n Frank',
        explain: 'LEFT JOIN + WHERE o.id IS NULL 是一个经典模式：找出"在左表但不在右表"的行。LEFT JOIN 把右表匹配不上的填 NULL，WHERE IS NULL 过滤出这些行。Dave、Eve、Frank 从没下过单。',
      },
    ],
    diagnosis: [
      {
        symptom: 'JOIN 后行数暴增（比两张表的行数都多）',
        cause: '笛卡尔积——JOIN 条件不对或缺失。如果没有 ON 条件，或者 ON 条件匹配了多行，会产生"每行 × 每行"的组合。1000 × 1000 = 100 万行。',
        fix: '检查 ON 条件是否正确（通常是主键=外键）。确保外键列有索引。先用 COUNT(*) 检查行数是否合理。',
      },
      {
        symptom: 'LEFT JOIN 结果和 INNER JOIN 一样',
        cause: '你在 WHERE 里过滤了右表的列：LEFT JOIN orders o ... WHERE o.status = \'paid\'。o.status 对没有订单的用户是 NULL，NULL != \'paid\' 所以被过滤掉了——相当于 INNER JOIN。',
        fix: '把过滤条件从 WHERE 移到 ON：LEFT JOIN orders o ON u.id = o.user_id AND o.status = \'paid\'。或者用 WHERE o.id IS NULL OR o.status = \'paid\'。',
      },
      {
        symptom: 'JOIN 查询很慢',
        cause: 'JOIN 条件列没有索引。ON u.id = o.user_id 如果 user_id 没有索引，数据库会对 orders 表做全表扫描（每行都检查一遍）。',
        fix: 'CREATE INDEX idx_orders_user_id ON orders(user_id); 给外键列加索引。用 EXPLAIN 验证索引是否被使用。',
      },
      {
        symptom: '结果里出现重复行',
        cause: '一对多关系导致的行膨胀。一个用户有多个订单，JOIN 后用户信息会重复出现。如果再 JOIN 另一张一对多的表，重复会指数级增长。',
        fix: '明确你需要的粒度。如果要"每个用户一行"，用 GROUP BY 或者子查询先聚合。如果要"每笔订单一行"，JOIN 的重复是正常的。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '查询每个用户的名字和他们下的订单数量（包括没有订单的用户，显示 0）',
        hint: 'LEFT JOIN + COUNT(o.id) 而不是 COUNT(*)。COUNT(*) 会把 NULL 行也数进去',
        answer: 'SELECT u.name, COUNT(o.id) AS order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.name\nORDER BY order_count DESC;',
      },
      {
        level: '进阶',
        task: '找出"买了所有品类产品"的用户（假设 products 表有 category 列）',
        hint: '这是关系代数里的"除法"问题。一个思路：统计每个用户买过多少个不同品类，和总品类数比较',
        answer: '-- 方法：用户购买的不同品类数 = 总品类数\nSELECT u.name\nFROM users u\nJOIN orders o ON u.id = o.user_id\nJOIN products p ON o.product_id = p.id\nGROUP BY u.name\nHAVING COUNT(DISTINCT p.category) = (\n  SELECT COUNT(DISTINCT category) FROM products\n);',
      },
      {
        level: '挑战',
        task: '找出"连续两笔订单金额递增"的用户（假设 orders 表有 created_at 和 amount）',
        hint: '用 LEAD/LAG window function 按时间排序后比较相邻行的金额',
        answer: 'WITH ordered AS (\n  SELECT user_id, amount,\n    LEAD(amount) OVER (PARTITION BY user_id ORDER BY created_at) AS next_amount\n  FROM orders\n)\nSELECT DISTINCT user_id\nFROM ordered\nWHERE next_amount > amount;\n\n-- 如果需要连续 N 笔递增，加更多 LEAD\n-- LEAD(amount, 1), LEAD(amount, 2), ...',
      },
    ],
    prereqs: [
      'Primary Key / Foreign Key — 理解表之间的关系',
      'SELECT + WHERE — 基础查询',
    ],
    nextSteps: [
      '子查询 — 在 WHERE/FROM 里嵌套查询',
      'Self Join — 同一张表和自己 JOIN（树形结构、比较同行）',
      'Cross Join — 生成所有组合（日历表 × 用户 = 每天每用户）',
    ],
  },

  // ── GROUP BY ──
  "14TKE6KhrH1yFtHcSZSXq": {
    mentalModel: 'GROUP BY 把数据按某列的值分成多组，每组返回一行。配合 COUNT/SUM/AVG 做统计。把它想成 Excel 的数据透视表：行标签是 GROUP BY 的列，值是聚合函数的结果。',
    handsOn: [
      {
        title: '最基础的分组统计',
        cmd: 'SELECT city, COUNT(*) AS user_count FROM users GROUP BY city;',
        output: ' city   | user_count\n--------+------------\n 北京   |      12840\n 上海   |      10523\n 广州   |       7891\n 深圳   |       6432',
        explain: 'GROUP BY city 把所有用户按城市分组。COUNT(*) 数每组有多少行。每个城市返回一行。注意：SELECT 里的非聚合列（city）必须在 GROUP BY 里。',
      },
      {
        title: '多列分组',
        cmd: 'SELECT city, gender, COUNT(*) AS cnt FROM users GROUP BY city, gender ORDER BY city, gender;',
        output: ' city   | gender | cnt\n--------+--------+------\n 北京   | F      |  6120\n 北京   | M      |  6720\n 上海   | F      |  5089\n 上海   | M      |  5434',
        explain: 'GROUP BY city, gender 按"城市+性别"的组合分组。每个唯一的 city+gender 对返回一行。北京有 2 行（F 和 M），上海也有 2 行。',
      },
      {
        title: 'HAVING 过滤组',
        cmd: 'SELECT city, COUNT(*) AS cnt, ROUND(AVG(age), 1) AS avg_age FROM users GROUP BY city HAVING COUNT(*) > 5000 ORDER BY cnt DESC;',
        output: ' city   | cnt   | avg_age\n--------+-------+---------\n 北京   | 12840 |    31.2\n 上海   | 10523 |    29.8\n 广州   |  7891 |    28.5\n 深圳   |  6432 |    27.9',
        explain: 'HAVING COUNT(*) > 5000 只保留用户数超过 5000 的城市。HAVING 在 GROUP BY 之后执行，可以用聚合函数。WHERE 在 GROUP BY 之前执行，不能用聚合函数。',
      },
      {
        title: '完整聚合查询',
        cmd: 'SELECT category, COUNT(*) AS products, ROUND(AVG(price), 2) AS avg_price, MIN(price) AS cheapest, MAX(price) AS priciest, SUM(stock) AS total_stock FROM products WHERE status = \'active\' GROUP BY category HAVING COUNT(*) >= 3 ORDER BY avg_price DESC;',
        output: ' category  | products | avg_price | cheapest | priciest | total_stock\n-----------+----------+-----------+----------+----------+-------------\n 电子产品  |       45 |   2399.50 |    99.00 | 12999.00 |        1230\n 服装      |       38 |    459.80 |    29.90 |  2999.00 |        3450\n 食品      |       62 |     45.30 |     3.50 |   299.00 |        8920',
        explain: '完整聚合查询的骨架：WHERE 先过滤（只要 active 的）→ GROUP BY 分组 → 多个聚合函数同时计算 → HAVING 过滤组（至少 3 个产品）→ ORDER BY 排序。',
      },
    ],
    diagnosis: [
      {
        symptom: 'ERROR: column "xxx" must appear in the GROUP BY clause',
        cause: 'SELECT 里有非聚合列不在 GROUP BY 里。SELECT name, city, COUNT(*) FROM users GROUP BY city——name 不在 GROUP BY 里，数据库不知道该显示哪个 name。',
        fix: '方案 1：把 name 加到 GROUP BY。方案 2：用聚合函数包裹，如 MAX(name) 或 STRING_AGG(name, \', \')。',
      },
      {
        symptom: 'WHERE 里用聚合函数报错',
        cause: 'WHERE 在 GROUP BY 之前执行，此时聚合还没算出来。WHERE COUNT(*) > 5 是错的。',
        fix: '把聚合条件从 WHERE 移到 HAVING：GROUP BY city HAVING COUNT(*) > 5。',
      },
      {
        symptom: 'GROUP BY 查询很慢',
        cause: 'GROUP BY 需要对数据排序或建哈希表。如果数据量大且没有索引，会很慢。',
        fix: '给 GROUP BY 的列加索引。如果只需要前 N 组，考虑先过滤再分组。物化视图可以预计算结果。',
      },
      {
        symptom: '分组后结果行数比预期多',
        cause: 'GROUP BY 多列时，组合数可能很大。GROUP BY city, gender, age 会产生 城市数 × 2 × 年龄数 的行。',
        fix: '检查是否真的需要这么细的分组。如果只需要城市级别，GROUP BY city 就够了。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '统计 orders 表里每个用户的订单数和总消费额，只显示消费超过 1000 的用户',
        hint: 'GROUP BY user_id + HAVING SUM(amount) > 1000',
        answer: 'SELECT user_id,\n  COUNT(*) AS order_count,\n  SUM(amount) AS total_spent\nFROM orders\nGROUP BY user_id\nHAVING SUM(amount) > 1000\nORDER BY total_spent DESC;',
      },
      {
        level: '进阶',
        task: '统计每个月的注册用户数（按 created_at 的年月分组）',
        hint: 'PostgreSQL 用 date_trunc(\'month\', created_at)，MySQL 用 DATE_FORMAT(created_at, \'%Y-%m\')',
        answer: '-- PostgreSQL\nSELECT\n  date_trunc(\'month\', created_at) AS month,\n  COUNT(*) AS new_users\nFROM users\nGROUP BY month\nORDER BY month;\n\n-- MySQL\nSELECT\n  DATE_FORMAT(created_at, \'%Y-%m\') AS month,\n  COUNT(*) AS new_users\nFROM users\nGROUP BY month\nORDER BY month;',
      },
      {
        level: '挑战',
        task: '计算每个品类的"销售额占比"（该品类销售额 / 总销售额），用百分比显示',
        hint: '需要总销售额作为分母。用 window function SUM() OVER () 或者子查询',
        answer: '-- 方法 1：Window function\nSELECT\n  category,\n  SUM(amount) AS category_sales,\n  ROUND(\n    SUM(amount) * 100.0 / SUM(SUM(amount)) OVER (),\n    2\n  ) AS pct\nFROM orders o\nJOIN products p ON o.product_id = p.id\nGROUP BY category\nORDER BY category_sales DESC;\n\n-- 方法 2：子查询\nSELECT\n  category,\n  SUM(amount) AS category_sales,\n  ROUND(\n    SUM(amount) * 100.0 / (SELECT SUM(amount) FROM orders),\n    2\n  ) AS pct\nFROM orders o\nJOIN products p ON o.product_id = p.id\nGROUP BY category;',
      },
    ],
    prereqs: [
      '聚合函数 — COUNT/SUM/AVG/MAX/MIN',
      'WHERE — 过滤行（在 GROUP BY 之前）',
    ],
    nextSteps: [
      'HAVING — 过滤分组后的结果',
      'ROLLUP / CUBE — 生成小计和合计行',
      'Window Functions — 不改变行数的聚合（SUM() OVER）',
    ],
  },

  // ── WHERE ──
  "WhYAy6f7Euk3E49-ot644": {
    mentalModel: 'WHERE 是"筛选器"：在 FROM 确定数据源之后，WHERE 逐行检查条件，只让满足条件的行通过。它是最常用的 SQL 子句，也是查询性能的关键——好的 WHERE 条件能用索引快速定位数据。',
    handsOn: [
      {
        title: '基础比较',
        cmd: 'SELECT name, age FROM users WHERE age >= 18 AND age <= 65;',
        output: ' name   | age\n--------+-----\n Alice  |  25\n Bob    |  32\n Carol  |  45',
        explain: 'WHERE age >= 18 AND age <= 65 等价于 WHERE age BETWEEN 18 AND 65。AND 要求两边都满足。OR 只要一边满足就行。NOT 取反。',
      },
      {
        title: '模式匹配：LIKE / IN / BETWEEN',
        cmd: 'SELECT name, email FROM users WHERE email LIKE \'%@gmail.com\' AND city IN (\'北京\', \'上海\', \'广州\') AND age BETWEEN 20 AND 40;',
        output: ' name   | email\n--------+------------------\n Alice  | alice@gmail.com\n 张伟   | zhangwei@gmail.com',
        explain: 'LIKE \'%@gmail.com\' 匹配邮箱后缀（% 是通配符，匹配任意字符）。IN (...) 等于多个 OR 的简写。BETWEEN 20 AND 40 包含边界（20 和 40 都算）。',
      },
      {
        title: 'NULL 判断',
        cmd: 'SELECT name, phone FROM users WHERE phone IS NOT NULL AND phone != \'\';',
        output: ' name   | phone\n--------+---------------\n Alice  | 13800138000\n Bob    | 13900139000',
        explain: 'IS NOT NULL 判断不为空。注意不能用 phone != NULL——NULL 和任何值比较都返回 NULL（不是 true 也不是 false）。还要排除空字符串 \'\'，因为 NULL 和 \'\' 不同。',
      },
      {
        title: '子查询条件',
        cmd: 'SELECT name FROM users WHERE id IN (SELECT user_id FROM orders WHERE amount > 1000);',
        output: ' name\n------\n Alice\n 张伟\n 李娜',
        explain: 'WHERE id IN (SELECT ...) 用子查询的结果做过滤。先找出消费超过 1000 的 user_id，再找这些用户的名字。EXISTS 通常比 IN 更高效：WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id AND o.amount > 1000)。',
      },
    ],
    diagnosis: [
      {
        symptom: 'WHERE email = NULL 查不出任何结果',
        cause: 'NULL 和任何值比较（包括 NULL 自己）都返回 NULL，不是 true。所以 WHERE email = NULL 永远为 false。',
        fix: '用 WHERE email IS NULL 或 WHERE email IS NOT NULL。',
      },
      {
        symptom: 'LIKE \'%关键词%\' 查询很慢',
        cause: '前导通配符 % 导致无法使用索引。数据库只能全表扫描逐行匹配。',
        fix: '如果可能，去掉前导 %：LIKE \'关键词%\' 能用索引。如果需要全文搜索，用 PostgreSQL 的 tsvector 或 Elasticsearch。',
      },
      {
        symptom: 'WHERE 条件用了 OR 导致索引失效',
        cause: 'WHERE a = 1 OR b = 2 如果只有 a 有索引，数据库可能放弃索引走全表扫描（因为 b 没索引）。',
        fix: '用 UNION ALL 替代 OR：SELECT ... WHERE a = 1 UNION ALL SELECT ... WHERE b = 2。两个子查询都能用各自的索引。',
      },
      {
        symptom: 'WHERE 里用函数导致索引失效',
        cause: '在列上用函数（DATE、UPPER、YEAR 等）会导致索引失效——数据库需要对每行计算函数值再比较。例如 WHERE DATE(created_at) = \'2024-01-15\' 无法使用 created_at 索引。',
        fix: '改成范围查询：WHERE created_at >= \'2024-01-15\' AND created_at < \'2024-01-16\'。这样能用 created_at 的索引。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '查询 products 表里价格在 100 到 500 之间、状态为 active、库存大于 0 的产品',
        hint: 'BETWEEN 100 AND 500 + 两个 AND 条件',
        answer: 'SELECT name, price, stock\nFROM products\nWHERE price BETWEEN 100 AND 500\n  AND status = \'active\'\n  AND stock > 0\nORDER BY price;',
      },
      {
        level: '进阶',
        task: '找出"最近 7 天注册但还没验证邮箱"的用户',
        hint: 'PostgreSQL: created_at > NOW() - INTERVAL \'7 days\'。email_verified_at IS NULL',
        answer: 'SELECT name, email, created_at\nFROM users\nWHERE created_at > NOW() - INTERVAL \'7 days\'\n  AND email_verified_at IS NULL\nORDER BY created_at DESC;\n\n-- MySQL 版本：\n-- WHERE created_at > DATE_SUB(NOW(), INTERVAL 7 DAY)',
      },
      {
        level: '挑战',
        task: '找出"订单金额超过该用户平均订单金额"的所有订单（每个用户有自己的平均值）',
        hint: '需要相关子查询：WHERE amount > (SELECT AVG(amount) FROM orders o2 WHERE o2.user_id = o1.user_id)',
        answer: 'SELECT o1.user_id, o1.id, o1.amount\nFROM orders o1\nWHERE o1.amount > (\n  SELECT AVG(o2.amount)\n  FROM orders o2\n  WHERE o2.user_id = o1.user_id\n)\nORDER BY o1.user_id, o1.amount DESC;\n\n-- 方法 2：Window function（更高效）\nSELECT user_id, id, amount FROM (\n  SELECT user_id, id, amount,\n    AVG(amount) OVER (PARTITION BY user_id) AS avg_amount\n  FROM orders\n) t WHERE amount > avg_amount;',
      },
    ],
    prereqs: [
      '操作符 — =, !=, >, <, AND, OR, NOT',
      '数据类型 — 日期、字符串、数字的比较规则',
    ],
    nextSteps: [
      '索引 — 让 WHERE 条件快速定位数据',
      '子查询 — 在 WHERE 里嵌套查询',
      'EXPLAIN — 看 WHERE 条件是否用到了索引',
    ],
  },
};
