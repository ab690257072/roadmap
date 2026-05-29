import type { DeepTutorial } from '../deep-types';

export const SQL_DEEP_TUTORIALS_7: Record<string, DeepTutorial> = {
  // Stage 06 - 聚合Queries (continued)
  "-Hew0y53ziZK3epQnGA0O": {
    mentalModel: "INSERT 是'往表格里填数据'：INSERT INTO 表 (列) VALUES (值)。",
    sections: [
      { title: "单行插入", content: "INSERT INTO users (name, age) VALUES ('Alice', 25)。列名可以省略（按顺序），但建议写明。" },
      { title: "多行插入", content: "INSERT INTO users (name, age) VALUES ('Alice', 25), ('Bob', 30)。一次插入多行，性能更好。" },
      { title: "INSERT ... SELECT", content: "INSERT INTO users (name) SELECT name FROM old_users。从其他表复制数据。" }
        ],

    diagnosis: [
{
                "symptom": "INSERT 高并发下自增 ID 锁竞争",
                "cause": "MySQL 5.7 AUTO-INC 语句级锁→INSERT SELECT 长时间持有",
                "fix": "升级 8.0(innodb_autoinc_lock_mode=2)。或用 UUID 主键"
        },
        {
                "symptom": "INSERT IGNORE 静默吞错误→数据不一致",
                "cause": "唯一键冲突、类型错误全降级为警告",
                "fix": "用 ON DUPLICATE KEY UPDATE 明确处理冲突"
        }
    ],

    exercises: [
      { level: '基础', task: "插入一个用户", answer: "INSERT INTO users (name, age) VALUES ('Alice', 25);" },
      { level: '进阶', task: "一次插入多个用户", answer: "INSERT INTO users (name, age) VALUES ('Alice', 25), ('Bob', 30), ('Carol', 28);" }
    ],
    summary: "INSERT INTO 表 (列) VALUES (值)。可单行或多行插入。"
  },
  "KJJ6PYjTnr_3yU2mNPL9v": {
    mentalModel: "UPDATE 是'修改数据'：UPDATE 表 SET 列=值 WHERE 条件。",
    sections: [
      { title: "UPDATE 语法", content: "UPDATE users SET age = 30 WHERE id = 5。WHERE 指定要更新的行。不加 WHERE 更新所有行（危险！）。" },
      { title: "使用表达式", content: "SET age = age + 1，SET price = price * 0.9（打九折）。" }
        ],

    diagnosis: [
{
                "symptom": "UPDATE WHERE 匹配 0 行→静默成功",
                "cause": "id 不存在→0 rows affected 不报错",
                "fix": "检查 ROW_COUNT()。业务层判断 affected rows"
        },
        {
                "symptom": "并发 UPDATE→Lost Update",
                "cause": "A 读 balance=100,B 读 100→A 更新 90,B 更新 80→最终 80",
                "fix": "SELECT FOR UPDATE 锁行。或原子更新 SET balance=balance-10"
        }
    ],

    exercises: [
      { level: '基础', task: "把 id=5 的用户年龄改为 30", answer: "UPDATE users SET age = 30 WHERE id = 5;" },
      { level: '进阶', task: "所有商品价格打九折", answer: "UPDATE products SET price = price * 0.9;" }
    ],
    summary: "UPDATE 表 SET 列=值 WHERE 条件。不加 WHERE 更新所有行（危险！）。"
  },
  "zWnvuHJLHr03PWkrW1wZZ": {
    mentalModel: "DELETE 是'删除行'：DELETE FROM 表 WHERE 条件。不加 WHERE 删除所有行！",
    sections: [
      { title: "DELETE 语法", content: "DELETE FROM users WHERE id = 5。WHERE 指定要删除的行。不加 WHERE 删除所有行（危险！）。" },
      { title: "DELETE vs TRUNCATE", content: "DELETE 可以带 WHERE 条件，可以回滚。TRUNCATE 清空所有行，不可回滚，更快。" }
        ],

    diagnosis: [
{
                "symptom": "DELETE WHERE 匹配 0 行→静默成功",
                "cause": "DELETE FROM users WHERE id=99999→0 rows affected",
                "fix": "先 SELECT 验证。或用 RETURNING 子句(PostgreSQL)"
        },
        {
                "symptom": "DELETE/TRUNCATE 混用→binlog 乱序",
                "cause": "TRUNCATE 是 DDL(statement),DELETE 是 DML(row)→主从不一致",
                "fix": "统一策略不混用。pt-table-checksum 检查一致"
        }
    ],

    exercises: [
      { level: '基础', task: "删除 id=5 的用户", answer: "DELETE FROM users WHERE id = 5;" },
      { level: '进阶', task: "删除 30 天前的日志", answer: "DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY;" }
    ],
    summary: "DELETE FROM 表 WHERE 条件。不加 WHERE 删除所有行（危险！）。"
  },
  // Stage 10 - 进阶函数
  "6vYFb_D1N_-tLWZftL-Az": {
    mentalModel: "ABS 是'绝对值'：ABS(-5) = 5，ABS(5) = 5。",
    sections: [
      { title: "ABS 语法", content: "ABS(数值) 返回绝对值。ABS(-5) = 5，ABS(5) = 5。" }
        ],

    diagnosis: [
{
                "symptom": "ABS 丢失方向信息",
                "cause": "ABS(a-b)只有差值大小",
                "fix": "需方向用 CASE WHEN a>b THEN..."
        },
        {
                "symptom": "ABS(INT_MIN)溢出",
                "cause": "ABS(-2147483648)超 INT 上限",
                "fix": "用 BIGINT。或 CASE WHEN col=INT_MIN THEN NULL"
        }
    ],

    exercises: [
      { level: '基础', task: "求绝对值", answer: "SELECT ABS(-5); -- 结果: 5" }
    ],
    summary: "ABS(数值) 返回绝对值。"
  },
  "OUw--8zEq6lk5-6oySVHe": {
    mentalModel: "MOD 是'取模'：MOD(10, 3) = 1（10 除以 3 余 1）。",
    sections: [
      { title: "MOD 语法", content: "MOD(被除数, 除数) 返回余数。MOD(10, 3) = 1。" }
        ],

    diagnosis: [
{
                "symptom": "MOD 负数跨库不一致",
                "cause": "MySQL MOD(-10,3)=-1,PostgreSQL=2",
                "fix": "统一公式 (a%b+b)%b"
        },
        {
                "symptom": "分表用 MOD→加表全量 rehash",
                "cause": "user_id%4→加第 5 表 hash 全变",
                "fix": "一致性哈希。或预分 user_id%64"
        }
    ],

    exercises: [
      { level: '基础', task: "求 10 除以 3 的余数", answer: "SELECT MOD(10, 3); -- 结果: 1" }
    ],
    summary: "MOD(被除数, 除数) 返回余数。"
  },
  "5inpEqafeVCfqsURHzQQg": {
    mentalModel: "CONCAT 是'字符串拼接'：CONCAT('Hello', ' ', 'World') = 'Hello World'。",
    sections: [
      { title: "CONCAT 语法", content: "CONCAT(str1, str2, ...) 拼接字符串。CONCAT('Hello', ' ', 'World') = 'Hello World'。" }
        ],

    diagnosis: [
{
                "symptom": "CONCAT 遇 NULL→全 NULL",
                "cause": "CONCAT('Hello',NULL,'World')=NULL",
                "fix": "CONCAT_WS 跳过 NULL。或 COALESCE(col,'')"
        },
        {
                "symptom": "CONCAT 拼接 SQL→注入",
                "cause": "CONCAT('SELECT...WHERE name=\"',input,'\"')",
                "fix": "永远不用 CONCAT 拼接 SQL。用参数化查询"
        }
    ],

    exercises: [
      { level: '基础', task: "拼接名字和邮箱", answer: "SELECT CONCAT(name, ' <', email, '>') FROM users;" }
    ],
    summary: "CONCAT(str1, str2, ...) 拼接字符串。"
  },
  "RH8DLiQpDUWqw3U1522q5": {
    mentalModel: "LENGTH 是'字符串长度'：LENGTH('Hello') = 5。",
    sections: [
      { title: "LENGTH 语法", content: "LENGTH(str) 返回字符串长度。LENGTH('Hello') = 5。" }
        ],

    diagnosis: [
{
                "symptom": "LENGTH 与 CHAR_LENGTH 不一致",
                "cause": "LENGTH(字节)=6 vs CHAR_LENGTH(字符)=2('你好')",
                "fix": "验证字符数用 CHAR_LENGTH。计算存储用 LENGTH"
        },
        {
                "symptom": "LENGTH 与 NULL/空串行为不同",
                "cause": "LENGTH(NULL)=NULL,LENGTH('')=0",
                "fix": "WHERE col IS NOT NULL AND col!=''"
        }
    ],

    exercises: [
      { level: '基础', task: "求字符串长度", answer: "SELECT LENGTH('Hello'); -- 结果: 5" }
    ],
    summary: "LENGTH(str) 返回字符串长度。"
  },
  "aS5zCyJRA779yHF0G2pje": {
    mentalModel: "FULL OUTER JOIN 是'全连接'：返回两表所有行，不匹配的填 NULL。",
    sections: [
      { title: "FULL OUTER JOIN 语法", content: "SELECT ... FROM 表1 FULL OUTER JOIN 表2 ON 条件。返回两表所有行，不匹配的填 NULL。" }
        ],

    diagnosis: [
{
                "symptom": "MySQL 不支持 FULL OUTER JOIN",
                "cause": "语法报错",
                "fix": "LEFT JOIN UNION ALL RIGHT+IS NULL 模拟"
        },
        {
                "symptom": "FULL JOIN NULL 来源难区分",
                "cause": "数据本身 NULL vs 未匹配 NULL",
                "fix": "加标记列 CASE WHEN t1.id IS NULL THEN 'right_only'..."
        }
    ],

    exercises: [
      { level: '进阶', task: "FULL OUTER JOIN", answer: "SELECT users.name, orders.total FROM users FULL OUTER JOIN orders ON users.id = orders.user_id;" }
    ],
    summary: "FULL OUTER JOIN 返回两表所有行，不匹配的填 NULL。"
  },
  "vTMd0bqz4eTgLnhfgY61h": {
    mentalModel: "进阶函数是'高级 SQL 函数'：ABS, MOD, CONCAT, LENGTH, COALESCE 等。",
    sections: [
      { title: "常用函数", content: "ABS 绝对值，MOD 取模，CONCAT 拼接，LENGTH 长度，COALESCE 第一个非 NULL 值。" }
        ],

    diagnosis: [
{
                "symptom": "函数 NULL 处理因函数而异",
                "cause": "ABS(NULL)=NULL,COALESCE(NULL,1)=1",
                "fix": "COALESCE 统一处理。查阅文档确认"
        },
        {
                "symptom": "函数包裹列→索引失效",
                "cause": "WHERE UPPER(name)='ALICE'",
                "fix": "函数索引:CREATE INDEX ON t(UPPER(col))"
        }
    ],

    exercises: [
      { level: '基础', task: "求绝对值", answer: "SELECT ABS(-5);" },
      { level: '进阶', task: "拼接名字和邮箱", answer: "SELECT CONCAT(name, ' <', email, '>') FROM users;" }
    ],
    summary: "进阶函数：ABS, MOD, CONCAT, LENGTH, COALESCE 等。"
  },
  // Stage 11 - ROUND 四舍五入函数
  "9DntFiZV1AyaRPhYP5q6u": {
    mentalModel: "ROUND 是'四舍五入'：ROUND(3.7) = 4，ROUND(3.14159, 2) = 3.14。",
    sections: [
      { title: "ROUND 语法", content: "ROUND(数值, 小数位数) 四舍五入。ROUND(3.7) = 4，ROUND(3.14159, 2) = 3.14。" }
        ],

    diagnosis: [
{
                "symptom": "ROUND 行为跨库差异",
                "cause": "MySQL/PostgreSQL 用远离零舍入→金融系统需银行家舍入",
                "fix": "确认数据库行为。需银行家舍入用自定义函数"
        },
        {
                "symptom": "ROUND(1.005,2)=1.00",
                "cause": "浮点 1.005 实际是 1.004999...",
                "fix": "用 DECIMAL。或 ROUND(col+0.0000001,2)"
        }
    ],

    exercises: [
      { level: '基础', task: "四舍五入到整数", answer: "SELECT ROUND(3.7); -- 结果: 4" },
      { level: '进阶', task: "四舍五入到 2 位小数", answer: "SELECT ROUND(3.14159, 2); -- 结果: 3.14" }
    ],
    summary: "ROUND(数值, 小数位数) 四舍五入。"
  },
  "BAqJQvcguhIhzyII5LRH6": {
    mentalModel: "CEILING 是'向上取整'：CEILING(3.2) = 4，CEILING(-3.7) = -3。",
    sections: [
      { title: "CEILING 语法", content: "CEILING(数值) 向上取整。CEILING(3.2) = 4，CEILING(-3.7) = -3。" }
        ],

    diagnosis: [
{
                "symptom": "CEILING(5/2)=2",
                "cause": "整数除法先截断 5/2=2 再 CEILING",
                "fix": "CEILING(5.0/2)强制浮点"
        },
        {
                "symptom": "CEILING(-3.2)=-3",
                "cause": "向正无穷取整",
                "fix": "向零取整用 CAST(x AS SIGNED)"
        }
    ],

    exercises: [
      { level: '基础', task: "向上取整", answer: "SELECT CEILING(3.2); -- 结果: 4" }
    ],
    summary: "CEILING(数值) 向上取整。"
  },
  "PnG_5D6q66NAKxXVOwA6N": {
    mentalModel: "SUBSTRING 是'截取字符串'：SUBSTRING('Hello', 1, 3) = 'Hel'。",
    sections: [
      { title: "SUBSTRING 语法", content: "SUBSTRING(str, start, length) 截取字符串。SUBSTRING('Hello', 1, 3) = 'Hel'。" }
        ],

    diagnosis: [
{
                "symptom": "SUBSTRING 起始位置跨库不同",
                "cause": "MySQL/PostgreSQL 从 1 开始",
                "fix": "统一从 1。跨库测试验证"
        },
        {
                "symptom": "SUBSTRING 截断 UTF-8 字符",
                "cause": "按字节截断→乱码",
                "fix": "按字符取。CHAR_LENGTH 确认长度"
        }
    ],

    exercises: [
      { level: '基础', task: "截取前 3 个字符", answer: "SELECT SUBSTRING('Hello', 1, 3); -- 结果: 'Hel'" }
    ],
    summary: "SUBSTRING(str, start, length) 截取字符串。"
  },
  "VNbb3YPc0FtrROylRns8h": {
    mentalModel: "REPLACE 是'替换字符串'：REPLACE('Hello World', 'World', 'SQL') = 'Hello SQL'。",
    sections: [
      { title: "REPLACE 语法", content: "REPLACE(str, old, new) 替换字符串。REPLACE('Hello World', 'World', 'SQL') = 'Hello SQL'。" }
        ],

    diagnosis: [
{
                "symptom": "REPLACE 大小写敏感未替换",
                "cause": "REPLACE('Hello','hello',...)未匹配",
                "fix": "需不区分大小写用 LOWER 或 REGEXP_REPLACE"
        },
        {
                "symptom": "链式 REPLACE 顺序效应",
                "cause": "两次 REPLACE→第二次影响第一次结果",
                "fix": "注意顺序。或 REGEXP_REPLACE 一次性替换"
        }
    ],

    exercises: [
      { level: '基础', task: "替换字符串", answer: "SELECT REPLACE('Hello World', 'World', 'SQL'); -- 结果: 'Hello SQL'" }
    ],
    summary: "REPLACE(str, old, new) 替换字符串。"
  },
  "6qG0AVYd6Y1B8LOSDoMX9": {
    mentalModel: "Self JOIN 是'自连接'：表自己和自己 JOIN。",
    sections: [
      { title: "Self JOIN 语法", content: "SELECT ... FROM 表 t1 JOIN 表 t2 ON 条件。表自己和自己 JOIN。" },
      { title: "使用场景", content: "找员工和经理（同一张表）。SELECT e.name, m.name as manager FROM employees e JOIN employees m ON e.manager_id = m.id。" }
        ],

    diagnosis: [
{
                "symptom": "Self JOIN 包含自匹配",
                "cause": "员工和自己也 JOIN 了(a.id=b.id)",
                "fix": "加 a.id!=b.id 或 a.id<b.id"
        },
        {
                "symptom": "递归 CTE 数据有环→死循环",
                "cause": "A->B->C->A 无限递归",
                "fix": "深度限制+depth<100。数组记录路径检测环"
        }
    ],

    exercises: [
      { level: '进阶', task: "找员工和经理", answer: "SELECT e.name, m.name as manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;" }
    ],
    summary: "Self JOIN 表自己和自己 JOIN。找员工和经理（同一张表）。"
  },
  "Othfo7NvTVzfyL906PLM1": {
    mentalModel: "UPPER 是'转大写'：UPPER('hello') = 'HELLO'。",
    sections: [
      { title: "UPPER 语法", content: "UPPER(str) 转大写。UPPER('hello') = 'HELLO'。" }
        ],

    diagnosis: [
{
                "symptom": "UPPER 不同 locale 行为不同",
                "cause": "德语 ß→SS,土耳其语 İ→İ",
                "fix": "正确设置 LC_COLLATE 和 encoding"
        },
        {
                "symptom": "WHERE UPPER(email)=UPPER(...)→索引失效",
                "cause": "函数包裹列",
                "fix": "表达式索引或 CITEXT 扩展"
        }
    ],

    exercises: [
      { level: '基础', task: "转大写", answer: "SELECT UPPER('hello'); -- 结果: 'HELLO'" }
    ],
    summary: "UPPER(str) 转大写。"
  },
  // Stage 12 - Views
  "knTG6pAq2mYP24WMa29xI": {
    mentalModel: "LOWER 是'转小写'：LOWER('HELLO') = 'hello'。",
    sections: [
      { title: "LOWER 语法", content: "LOWER(str) 转小写。LOWER('HELLO') = 'hello'。" }
        ],

    diagnosis: [
{
                "symptom": "LOWER 索引失效",
                "cause": "函数包裹列",
                "fix": "函数索引:CITEXT 扩展。应用层统一转小写存"
        },
        {
                "symptom": "LOWER Unicode 字符异常",
                "cause": "土耳其语 İ(LOWER)→i(不同)",
                "fix": "正确 collation。测试多语言"
        }
    ],

    exercises: [
      { level: '基础', task: "转小写", answer: "SELECT LOWER('HELLO'); -- 结果: 'hello'" }
    ],
    summary: "LOWER(str) 转小写。"
  },
  "7ow6tiSSCnTpv_GYQU017": {
    mentalModel: "CROSS JOIN 是'笛卡尔积'：返回两表所有行的组合。",
    sections: [
      { title: "CROSS JOIN 语法", content: "SELECT ... FROM 表1 CROSS JOIN 表2。返回两表所有行的组合（笛卡尔积）。" },
      { title: "常见错误", content: "CROSS JOIN 会产生大量数据（表1行数 × 表2行数）。慎用！" }
        ],

    diagnosis: [
{
                "symptom": "CROSS JOIN 百万行耗尽内存",
                "cause": "100x20x10=20K 行，再 JOIN 爆炸",
                "fix": "逐步验证行数。先聚合/过滤再 JOIN"
        },
        {
                "symptom": "需日期序列→CROSS JOIN+GENERATE_SERIES",
                "cause": "日报\"每用户每天\"",
                "fix": "GENERATE_SERIES+CROSS JOIN 用户表"
        }
    ],

    exercises: [
      { level: '进阶', task: "CROSS JOIN", answer: "SELECT * FROM colors CROSS JOIN sizes; -- 所有颜色和尺寸的组合" }
    ],
    summary: "CROSS JOIN 返回两表所有行的组合（笛卡尔积）。慎用！"
  },
  "W2ePJHdfEiEJ3ZKoRQKt_": {
    mentalModel: "CASE 是'条件表达式'：类似 if-else，根据不同条件返回不同值。",
    sections: [
      { title: "CASE 语法", content: "CASE WHEN 条件1 THEN 值1 WHEN 条件2 THEN 值2 ELSE 默认值 END。" },
      { title: "使用场景", content: "SELECT name, CASE WHEN age < 18 THEN '未成年' WHEN age < 60 THEN '成年' ELSE '老年' END FROM users。" }
        ],

    diagnosis: [
{
                "symptom": "CASE 无 ELSE→NULL 干扰后续计算",
                "cause": "不及格行返回 NULL→COUNT/GROUP BY 漏掉",
                "fix": "始终加 ELSE。或应用层处理 NULL"
        },
        {
                "symptom": "CASE WHEN 顺序错",
                "cause": "WHEN score>=60 THEN 及格 WHEN score>=90 THEN 优秀→90 先匹配 60",
                "fix": "按严格度从高到低排:WHEN>=90 THEN 优秀 WHEN>=60 THEN 及格"
        }
    ],

    exercises: [
      { level: '进阶', task: "根据年龄分类", answer: "SELECT name, CASE WHEN age < 18 THEN '未成年' WHEN age < 60 THEN '成年' ELSE '老年' END as category FROM users;" }
    ],
    summary: "CASE WHEN 条件 THEN 值 ELSE 默认值 END。类似 if-else。"
  },
  "KI6vngoYcHsnpIk8ErhhS": {
    mentalModel: "NULLIF 是'相等则返回 NULL'：NULLIF(a, b) 如果 a=b 返回 NULL，否则返回 a。",
    sections: [
      { title: "NULLIF 语法", content: "NULLIF(a, b) 如果 a=b 返回 NULL，否则返回 a。常用于避免除零错误：a / NULLIF(b, 0)。" }
        ],

    diagnosis: [
{
                "symptom": "NULLIF 避免除零→AVG 分母变小",
                "cause": "除零行 NULL 被 AVG 忽略",
                "fix": "AVG 忽略 NULL 正常。COUNT(NULLIF(col,0))计非零"
        },
        {
                "symptom": "NULLIF(NULL,NULL)=NULL",
                "cause": "两个 NULL 被认为相等",
                "fix": "用 CASE WHEN a IS NULL AND b IS NULL THEN...区分"
        }
    ],

    exercises: [
      { level: '进阶', task: "避免除零错误", answer: "SELECT total / NULLIF(quantity, 0) as avg_price FROM orders;" }
    ],
    summary: "NULLIF(a, b) 如果 a=b 返回 NULL，否则返回 a。常用于避免除零错误。"
  },
  "2tyezwOIxV6O84N-Q3Awh": {
    mentalModel: "视图是'虚拟表'：CREATE VIEW 视图名 AS SELECT ...。保存查询，简化复杂查询。",
    sections: [
      { title: "创建视图", content: "CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active'。视图是保存的查询。" },
      { title: "使用视图", content: "SELECT * FROM active_users。像查询表一样查询视图。" }
        ],

    diagnosis: [
{
                "symptom": "查视图与直接查表结果不一致",
                "cause": "视图 SELECT *→表加列后多了列",
                "fix": "视图明确列名。定期检查定义一致性"
        },
        {
                "symptom": "嵌套视图→性能极差",
                "cause": "3 层视图展开→优化器选择低效计划",
                "fix": "避免嵌套视图。物化视图。直接 SQL"
        }
    ],

    exercises: [
      { level: '基础', task: "创建活跃用户视图", answer: "CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active';" },
      { level: '基础', task: "查询视图", answer: "SELECT * FROM active_users;" }
    ],
    summary: "CREATE VIEW 视图名 AS SELECT ...。视图是虚拟表，简化复杂查询。"
  },
  "k7lZe4QRt9q4InUImFmvx": {
    mentalModel: "COALESCE 是'第一个非 NULL 值'：COALESCE(NULL, NULL, 'hello', 'world') = 'hello'。",
    sections: [
      { title: "COALESCE 语法", content: "COALESCE(val1, val2, ...) 返回第一个非 NULL 值。COALESCE(NULL, NULL, 'hello') = 'hello'。" }
        ],

    diagnosis: [
{
                "symptom": "COALESCE 返回空字符串而非 NULL",
                "cause": "email=''≠NULL→COALESCE 认为有效",
                "fix": "NULLIF(email,'')转 NULL 再用 COALESCE"
        },
        {
                "symptom": "COALESCE 全 NULL→返回 NULL",
                "cause": "COALESCE(NULL,NULL,NULL)=NULL",
                "fix": "最后加兜底值:COALESCE(col1,col2,'未知')"
        }
    ],

    exercises: [
      { level: '基础', task: "返回第一个非 NULL 值", answer: "SELECT COALESCE(NULL, NULL, 'hello'); -- 结果: 'hello'" },
      { level: '进阶', task: "显示用户的邮箱或'未设置'", answer: "SELECT name, COALESCE(email, '未设置') FROM users;" }
    ],
    summary: "COALESCE(val1, val2, ...) 返回第一个非 NULL 值。"
  },
  // Stage 13 - 管理索引
  "NtxGd6Vx-REBclry7lZuE": {
    mentalModel: "索引是'目录'：加速查询，但减慢写入。CREATE INDEX 创建索引。",
    sections: [
      { title: "创建索引", content: "CREATE INDEX idx_name ON users(email)。加速 WHERE、JOIN、ORDER BY。" },
      { title: "索引类型", content: "普通索引、唯一索引（UNIQUE）、复合索引（多列）。" }
        ],

    diagnosis: [
{
                "symptom": "加索引后查询反而变慢",
                "cause": "低基数列(性别 M/F)→优化器误选→大量回表",
                "fix": "低基数列不单独建索引。INDEX(gender,created_at)复合前缀"
        },
        {
                "symptom": "索引碎片→性能逐渐下降",
                "cause": "频繁 DML→索引页分裂+填充率降低",
                "fix": "OPTIMIZE TABLE 重建。用 pt-online-schema-change"
        }
    ],

    exercises: [
      { level: '基础', task: "给 users 表的 email 列创建索引", answer: "CREATE INDEX idx_email ON users(email);" },
      { level: '进阶', task: "创建唯一索引", answer: "CREATE UNIQUE INDEX idx_email ON users(email);" }
    ],
    summary: "CREATE INDEX 加速查询。索引太多减慢写入。"
  },
  "Ivqo2wa-_NhGU3vGd0pUI": {
    mentalModel: "DATE 是'日期类型'：存储日期（年月日）。",
    sections: [
      { title: "DATE 语法", content: "DATE '2024-01-15' 日期字面量。CURRENT_DATE 当前日期。" }
        ],

    diagnosis: [
{
                "symptom": "DATE 与 TIMESTAMP 比较→隐式转换→索引失效",
                "cause": "date_col='2024-01-01 00:00:00'",
                "fix": "类型一致:date_col='2024-01-01'"
        },
        {
                "symptom": "DATE 跨时区查询结果不一致",
                "cause": "存 UTC 查 Asia/Shanghai→8 小时偏差",
                "fix": "统一 UTC 存储。会话 SET time_zone='+00:00'"
        }
    ],

    exercises: [
      { level: '基础', task: "获取当前日期", answer: "SELECT CURRENT_DATE;" }
    ],
    summary: "DATE 存储日期。CURRENT_DATE 当前日期。"
  },
  "88KlrMqSza9_YaD7Dv61p": {
    mentalModel: "TIME 是'时间类型'：存储时间（时分秒）。",
    sections: [
      { title: "TIME 语法", content: "TIME '14:30:00' 时间字面量。CURRENT_TIME 当前时间。" }
        ],

    diagnosis: [
{
                "symptom": "TIME 存超 24h 间隔→截断",
                "cause": "TIME 范围-838:59:59~838:59:59",
                "fix": "用整数(秒数)。或 INTERVAL(PostgreSQL)"
        },
        {
                "symptom": "TIME 跨午夜排序错",
                "cause": "23:00 > 01:00 但业务上 01:00 是第二天",
                "fix": "加日期部分→TIMESTAMP"
        }
    ],

    exercises: [
      { level: '基础', task: "获取当前时间", answer: "SELECT CURRENT_TIME;" }
    ],
    summary: "TIME 存储时间。CURRENT_TIME 当前时间。"
  },
  "PcsGK4VBh0zNQIPZvNES4": {
    mentalModel: "CREATE VIEW 是'创建视图'：保存查询为虚拟表。",
    sections: [
      { title: "创建视图", content: "CREATE VIEW 视图名 AS SELECT ...。视图是保存的查询。" }
        ],

    diagnosis: [
{
                "symptom": "事务中 CREATE VIEW→ROLLBACK 不删视图",
                "cause": "DDL 在 MySQL 中隐式提交",
                "fix": "DDL 和 DML 不在同一事务"
        },
        {
                "symptom": "引用的表被 DROP→视图无效",
                "cause": "查视图报 Table doesn't exist",
                "fix": "查 information_schema.VIEW_TABLE_USAGE。CASCADE 处理"
        }
    ],

    exercises: [
      { level: '基础', task: "创建视图", answer: "CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active';" }
    ],
    summary: "CREATE VIEW 视图名 AS SELECT ...。"
  },
  "Ps9Yv2s-bKvEegGAbPsiA": {
    mentalModel: "查询优化是'让 SQL 更快'：用索引、避免全表扫描、优化 JOIN。",
    sections: [
      { title: "EXPLAIN", content: "EXPLAIN SELECT ... 查看查询计划。看是否用了索引、扫描了多少行。" },
      { title: "优化技巧", content: "1. 给 WHERE、JOIN、ORDER BY 列加索引。2. 只 SELECT 需要的列。3. 避免 SELECT *。4. 用 JOIN 替代子查询。" }
        ],

    diagnosis: [
{
                "symptom": "EXPLAIN 显示 Using filesort",
                "cause": "ORDER BY 列无索引或不满足最左前缀",
                "fix": "建覆盖 ORDER BY 索引。(WHERE 列,ORDER BY 列)复合"
        },
        {
                "symptom": "EXPLAIN 显示 Using temporary",
                "cause": "GROUP BY+ORDER BY 不同列→临时表排序",
                "fix": "GROUP BY 和 ORDER BY 同列。增大 tmp_table_size"
        }
    ],

    exercises: [
      { level: '进阶', task: "查看查询计划", answer: "EXPLAIN SELECT * FROM users WHERE email = 'alice@example.com';" }
    ],
    summary: "EXPLAIN 查看查询计划。优化：加索引、只选需要的列、用 JOIN 替代子查询。"
  },
  "7hEqkoxkdAWmakGZsMJx-": {
    mentalModel: "TIMESTAMP 是'时间戳类型'：存储日期+时间。",
    sections: [
      { title: "TIMESTAMP 语法", content: "TIMESTAMP '2024-01-15 14:30:00' 时间戳字面量。CURRENT_TIMESTAMP 当前时间戳。" }
        ],

    diagnosis: [
{
                "symptom": "TIMESTAMP 自动转时区→时间看起来变了",
                "cause": "存 UTC 查 Asia/Shanghai→+8h",
                "fix": "理解 TIMESTAMP 行为。固定时间用 DATETIME"
        },
        {
                "symptom": "TIMESTAMP 2038 年溢出",
                "cause": "32 位 TIMESTAMP 最大 2038-01-19",
                "fix": "升级 MySQL 8.0+(64 位)。或用 DATETIME(到 9999 年)"
        }
    ],

    exercises: [
      { level: '基础', task: "获取当前时间戳", answer: "SELECT CURRENT_TIMESTAMP;" }
    ],
    summary: "TIMESTAMP 存储日期+时间。CURRENT_TIMESTAMP 当前时间戳。"
  },
  // Stage 14 - 索引
  "3eE-l-P93nOXoWfLr8PSW": {
    mentalModel: "Modifying Views 是'修改视图'：ALTER VIEW 改视图，DROP VIEW 删视图。",
    sections: [
      { title: "修改视图", content: "CREATE OR REPLACE VIEW 视图名 AS SELECT ...。重新定义视图。" },
      { title: "删除视图", content: "DROP VIEW 视图名。删除视图。" }
        ],

    diagnosis: [
{
                "symptom": "REPLACE VIEW 改变列顺序→应用报错",
                "cause": "应用按序号取列(SELECT * 位置)",
                "fix": "保持列序。应用用列名访问。回归测试"
        },
        {
                "symptom": "DROP VIEW→存储过程/函数失效",
                "cause": "过程中 SELECT * FROM my_view",
                "fix": "查依赖。CASCADE 清理。搜索代码引用"
        }
    ],

    exercises: [
      { level: '基础', task: "修改视图", answer: "CREATE OR REPLACE VIEW active_users AS SELECT id, name, email FROM users WHERE status = 'active';" },
      { level: '基础', task: "删除视图", answer: "DROP VIEW active_users;" }
    ],
    summary: "CREATE OR REPLACE VIEW 修改视图。DROP VIEW 删除视图。"
  },
  "BJ4XlZz8pQYwK5rT9mNvE": {
    mentalModel: "DROP INDEX 是'删除索引'：DROP INDEX 索引名。",
    sections: [
      { title: "DROP INDEX 语法", content: "DROP INDEX 索引名。删除索引。" }
        ],

    diagnosis: [
{
                "symptom": "DROP INDEX→查询突然变慢",
                "cause": "之前走索引的查询变全表扫描",
                "fix": "先 INVISIBLE INDEX(MySQL 8.0)观察。确认无依赖再删"
        },
        {
                "symptom": "DROP INDEX 在事务中无法回滚",
                "cause": "DDL 隐式提交",
                "fix": "单独执行。备份索引定义 SHOW CREATE TABLE"
        }
    ],

    exercises: [
      { level: '基础', task: "删除索引", answer: "DROP INDEX idx_email;" }
    ],
    summary: "DROP INDEX 索引名。删除索引。"
  },
  "Qx9mT2vLpK8wR5jN4bYcF": {
    mentalModel: "复合索引是'多列索引'：CREATE INDEX idx ON users(last_name, first_name)。",
    sections: [
      { title: "复合索引语法", content: "CREATE INDEX idx ON 表(列1, 列2, ...)。多列索引。" },
      { title: "最左前缀", content: "复合索引 (a, b, c) 可以用于 WHERE a=1、WHERE a=1 AND b=2，但不能用于 WHERE b=2。" }
        ],

    diagnosis: [
{
                "symptom": "复合索引(a,b,c)的 WHERE b=1 不走索引",
                "cause": "最左前缀→跳 a 只 b,c 不能用",
                "fix": "确保含最左列。或建独立(b,c)索引"
        },
        {
                "symptom": "(gender,created_at)→高选择性列在前",
                "cause": "gender 只有 M/F→过滤性差",
                "fix": "(created_at,gender)高选择性在前"
        }
    ],

    exercises: [
      { level: '进阶', task: "创建复合索引", answer: "CREATE INDEX idx_name ON users(last_name, first_name);" }
    ],
    summary: "复合索引 (列1, 列2)。最左前缀原则。"
  },
  "Rn7kP3wQm9xT5vL8cYdHj": {
    mentalModel: "事务隔离级别是'并发控制'：READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE。",
    sections: [
      { title: "隔离级别", content: "READ UNCOMMITTED 最弱（可脏读），READ COMMITTED（不可脏读），REPEATABLE READ（不可重复读），SERIALIZABLE 最强（串行化）。" },
      { title: "设置隔离级别", content: "SET TRANSACTION ISOLATION LEVEL READ COMMITTED。" }
        ],

    diagnosis: [
{
                "symptom": "READ UNCOMMITTED→读到脏数据",
                "cause": "A 改 age=30(未提交)→B 读到 30→A 回滚→B 读到不存在数据",
                "fix": "生产最低 READ COMMITTED。避免 READ UNCOMMITTED"
        },
        {
                "symptom": "REPEATABLE READ 下出现幻读",
                "cause": "两次 SELECT 范围结果不同→新插行出现",
                "fix": "MySQL InnoDB Gap Lock 防幻读。关键用 SELECT FOR UPDATE"
        }
    ],

    exercises: [
      { level: '进阶', task: "设置隔离级别", answer: "SET TRANSACTION ISOLATION LEVEL READ COMMITTED;" }
    ],
    summary: "事务隔离级别：READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE。"
  },
  "Yp4mN8xKq2wT5vL9cYdHj": {
    mentalModel: "死锁是'互相等待'：事务 A 等 B 释放锁，B 等 A 释放锁。",
    sections: [
      { title: "死锁原因", content: "两个事务互相等待对方释放锁。数据库会自动检测并终止一个事务。" },
      { title: "避免死锁", content: "1. 按相同顺序访问表。2. 事务尽量短。3. 用合适的索引。" }
        ],

    diagnosis: [
{
                "symptom": "Lock wait timeout exceeded 频繁出现",
                "cause": "innodb_lock_wait_timeout 默认 50s",
                "fix": "查 INNODB_TRX+INNODB_LOCK_WAITS。缩短事务。重试逻辑"
        },
        {
                "symptom": "死锁后应用未重试→数据丢失",
                "cause": "死锁自动回滚一个事务→未捕获→操作丢失",
                "fix": "捕获 Error 1213→指数退避重试。记录死锁日志"
        }
    ],

    exercises: [
      { level: '进阶', task: "查看死锁日志", answer: "SHOW ENGINE INNODB STATUS; -- MySQL" }
    ],
    summary: "死锁：互相等待。避免：按相同顺序访问表，事务尽量短。"
  },
  "Zq5nO9yKr3xU6wM0dZeIk": {
    mentalModel: "连接池是'复用连接'：避免频繁创建/关闭数据库连接。",
    sections: [
      { title: "连接池原理", content: "预先创建一组连接，应用从池中借用连接，用完归还。避免频繁创建/关闭连接的开销。" },
      { title: "配置", content: "最大连接数、最小空闲连接数、连接超时时间。" }
        ],

    diagnosis: [
{
                "symptom": "连接池耗尽→请求超时",
                "cause": "连接泄露或池太小→无可用连接",
                "fix": "合理 pool size=CPU*2+磁盘数。泄露检测。监控 active/max"
        },
        {
                "symptom": "连接被 DB 关闭→Broken pipe",
                "cause": "wait_timeout 到期关闭空闲连接",
                "fix": "validationQuery SELECT 1。testOnBorrow。空闲超时<DB wait_timeout"
        }
    ],

    exercises: [
      { level: '进阶', task: "配置连接池（示例）", answer: "# application.properties\nspring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.minimum-idle=5" }
    ],
    summary: "连接池复用连接，避免频繁创建/关闭。配置最大连接数、最小空闲连接数。"
  },
  "Ar6oP0zLs4yV7xN1eAfJl": {
    mentalModel: "分库分表是'水平扩展'：把数据分散到多个数据库/表。",
    sections: [
      { title: "分库", content: "把数据分散到多个数据库。按用户 ID 分片：user_id % 10 决定用哪个库。" },
      { title: "分表", content: "把大表拆成多个小表。按时间分表：2024_01_orders, 2024_02_orders。" }
        ],

    diagnosis: [
{
                "symptom": "分库后跨分片 JOIN 无法执行",
                "cause": "users 和 orders 在不同分片",
                "fix": "避免跨分片 JOIN。冗余数据同分片。ShardingSphere 中间件"
        },
        {
                "symptom": "user_id%10→加库全量 rehash",
                "cause": "扩 10→12 库→100% hash 变",
                "fix": "预分逻辑分片 1000 对 10 库。扩库只迁移部分。一致性哈希"
        }
    ],

    exercises: [
      { level: '进阶', task: "设计分库策略", answer: "# 按 user_id 分 10 个库\nshard = user_id % 10\n# user_id=123 -> 库 3" }
    ],
    summary: "分库分表水平扩展。分库：按 user_id 分片。分表：按时间分表。"
  },
  "Bs7pQ1aMt5zW8yO2fBgKm": {
    mentalModel: "读写分离是'分散压力'：写操作用主库，读操作用从库。",
    sections: [
      { title: "读写分离原理", content: "主库处理写操作（INSERT/UPDATE/DELETE），从库处理读操作（SELECT）。主库同步到从库。" },
      { title: "使用场景", content: "读多写少的场景。读操作远多于写操作时，读写分离可以分散压力。" }
        ],

    diagnosis: [
{
                "symptom": "写后立刻读从库→读到旧数据",
                "cause": "主从复制延迟(秒级)",
                "fix": "写后读走主库。允许延迟场景读从库。半同步复制减延迟"
        },
        {
                "symptom": "主库宕机→从库提升→数据丢失",
                "cause": "异步复制最后几秒 binlog 未同步",
                "fix": "半同步 replication。MGR 多数派确认。监控延迟<1s"
        }
    ],

    exercises: [
      { level: '进阶', task: "配置读写分离（概念）", answer: "# 主库：写操作\nINSERT INTO users (name) VALUES ('Alice');\n# 从库：读操作\nSELECT * FROM users;" }
    ],
    summary: "读写分离：写操作用主库，读操作用从库。读多写少时使用。"
  },
  "Ct8qR2bNu6aX9zP3gChLn": {
    mentalModel: "缓存是'加速查询'：把常用数据放在内存中。",
    sections: [
      { title: "缓存原理", content: "把常用数据放在内存中（如 Redis），避免频繁查询数据库。" },
      { title: "缓存策略", content: "Cache Aside：先查缓存，没有再查数据库并写入缓存。Write Through：写缓存同时写数据库。" }
        ],

    diagnosis: [
{
                "symptom": "缓存穿透→大量不存在 ID 查 DB",
                "cause": "攻击者查不存在的 ID→缓存和 DB 都没→直穿 DB",
                "fix": "布隆过滤器预判。缓存 NULL 短 TTL。接口限流"
        },
        {
                "symptom": "缓存雪崩→大量缓存同时过期",
                "cause": "相同 TTL→同一时刻过期→DB 压力暴增",
                "fix": "TTL+随机偏移。多级缓存。热点数据永不过期"
        }
    ],

    exercises: [
      { level: '进阶', task: "Cache Aside 模式", answer: "# 伪代码\nif cache.has(key):\n    return cache.get(key)\nelse:\n    data = db.query(key)\n    cache.set(key, data)\n    return data" }
    ],
    summary: "缓存加速查询。Cache Aside：先查缓存，没有再查数据库并写入缓存。"
  },
  "Du9rS3cOv7bY0aQ4hDiMo": {
    mentalModel: "消息队列是'异步处理'：生产者发送消息，消费者异步处理。",
    sections: [
      { title: "消息队列原理", content: "生产者发送消息到队列，消费者异步处理。解耦、削峰、异步。" },
      { title: "使用场景", content: "异步处理（发邮件）、削峰（限流）、解耦（订单服务发送消息，库存服务消费）。" }
        ],

    diagnosis: [
{
                "symptom": "队列消息积压→延迟增加",
                "cause": "消费速度<生产速度",
                "fix": "加消费者数。优化消费逻辑(批量+异步)。监控队列深度"
        },
        {
                "symptom": "消息重复消费→同一消息处理 2 次",
                "cause": "消费后崩溃→offset 未提交→重启重消费",
                "fix": "幂等性:DB 唯一键,Redis SETNX。Kafka enable.idempotence"
        }
    ],

    exercises: [
      { level: '进阶', task: "消息队列使用场景", answer: "# 订单创建后异步发邮件\n# 生产者：\norder = create_order(data)\nqueue.send('order_created', order.id)\n# 消费者：\norder_id = queue.receive()\nsend_email(order_id)" }
    ],
    summary: "消息队列：生产者发送消息，消费者异步处理。解耦、削峰、异步。"
  },
  "Ev0sT4dPw8cZ1bR5iEjNp": {
    mentalModel: "CAP 定理是'分布式系统的权衡'：一致性（C）、可用性（A）、分区容忍（P），三者最多满足两个。",
    sections: [
      { title: "CAP 定理", content: "一致性（所有节点数据一致）、可用性（每个请求都有响应）、分区容忍（网络分区时仍能工作）。三者最多满足两个。" },
      { title: "CP vs AP", content: "CP：保证一致性，牺牲可用性（如 ZooKeeper）。AP：保证可用性，牺牲一致性（如 Cassandra）。" }
        ],

    diagnosis: [
{
                "symptom": "选 CP 系统但需高可用→网络分区不可用",
                "cause": "ZooKeeper 等 CP 分区时牺牲可用性",
                "fix": "核心支付用 CP,用户面用 AP。混合架构"
        },
        {
                "symptom": "误解 CAP→以为必须三选二",
                "cause": "无网络分区时 C+A 都满足。不是永远只能选两个",
                "fix": "正常时 C+A 都满足。分区时权衡"
        }
    ],

    exercises: [
      { level: '进阶', task: "CAP 定理理解", answer: "# CP 系统：ZooKeeper\n# 保证一致性，网络分区时可能拒绝服务\n# AP 系统：Cassandra\n# 保证可用性，数据可能暂时不一致" }
    ],
    summary: "CAP 定理：一致性、可用性、分区容忍，三者最多满足两个。CP vs AP。"
  },
  "Fw1tU5eQx9da2cS6jFkOq": {
    mentalModel: "ACID 是'事务特性'：原子性（A）、一致性（C）、隔离性（I）、持久性（D）。",
    sections: [
      { title: "ACID 特性", content: "原子性（全部成功或全部失败）、一致性（数据合法）、隔离性（事务互不干扰）、持久性（提交后永久保存）。" }
        ],

    diagnosis: [
{
                "symptom": "事务中调外部 API→长事务锁表",
                "cause": "BEGIN→调 API(3s)→发邮件(2s)→UPDATE→COMMIT(锁 5s+)",
                "fix": "事务只包 DB 操作。外部调用放事务外。Saga 模式"
        },
        {
                "symptom": "READ COMMITTED→两次读结果不同",
                "cause": "第一次 age=25,第二次 age=26(不可重复读)",
                "fix": "升级 REPEATABLE READ。或 SELECT FOR UPDATE"
        }
    ],

    exercises: [
      { level: '基础', task: "ACID 理解", answer: "# 转账事务\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n# 原子性：两个 UPDATE 要么都成功，要么都失败" }
    ],
    summary: "ACID：原子性、一致性、隔离性、持久性。"
  },
  "Gx2uV6fRy0eb3dT7kGlPr": {
    mentalModel: "BASE 是'最终一致性'：基本可用、软状态、最终一致性。NoSQL 常用。",
    sections: [
      { title: "BASE 特性", content: "基本可用（系统基本可用）、软状态（状态可能变化）、最终一致性（最终数据一致）。NoSQL 常用。" },
      { title: "BASE vs ACID", content: "ACID 强一致性（关系型数据库），BASE 最终一致性（NoSQL）。BASE 牺牲一致性换取可用性和扩展性。" }
        ],

    diagnosis: [
{
                "symptom": "BASE 模式立即读→看到旧数据",
                "cause": "MongoDB 写后从从节点读→未同步",
                "fix": "read concern majority。read preference primary"
        },
        {
                "symptom": "最终一致性延迟远超预期",
                "cause": "网络抖动+GC→延迟数分钟",
                "fix": "监控复制延迟。SLA 99.9%<1s。关键用强一致读"
        }
    ],

    exercises: [
      { level: '进阶', task: "BASE vs ACID", answer: "# ACID：关系型数据库\n# 强一致性，但扩展性差\n# BASE：NoSQL\n# 最终一致性，扩展性好" }
    ],
    summary: "BASE：基本可用、软状态、最终一致性。NoSQL 常用。牺牲一致性换取可用性。"
  },
  "Hy3vW7gSz1fc4eU8lHmQs": {
    mentalModel: "NoSQL 是'非关系型数据库'：灵活 schema、高扩展性。",
    sections: [
      { title: "NoSQL 类型", content: "键值（Redis）、文档（MongoDB）、列族（Cassandra）、图（Neo4j）。" },
      { title: "NoSQL vs SQL", content: "SQL：结构化数据、复杂查询、事务。NoSQL：灵活 schema、高扩展性、高并发。" }
        ],

    diagnosis: [
{
                "symptom": "NoSQL 两表操作→无事务→不一致",
                "cause": "MongoDB 4.0 前无多文档事务→下单减库存二选一失败",
                "fix": "MongoDB 4.0+ 多文档事务。嵌入文档原子更新。Saga"
        },
        {
                "symptom": "NoSQL 无 schema→垃圾数据累积",
                "cause": "同字段一会 String 一会 Number",
                "fix": "JSON Schema 校验(Mongoose)。定期质量检查。v5.0+ Schema Validation"
        }
    ],

    exercises: [
      { level: '基础', task: "NoSQL 类型", answer: "# 键值：Redis\nSET key value\n# 文档：MongoDB\ndb.users.insert({name: 'Alice', age: 25})" }
    ],
    summary: "NoSQL：键值、文档、列族、图。灵活 schema、高扩展性。"
  },
  "Iz4wX8hTa2gd5fV9mInRt": {
    mentalModel: "Redis 是'内存数据库'：数据在内存中，读写极快。",
    sections: [
      { title: "Redis 数据类型", content: "String、Hash、List、Set、Sorted Set。" },
      { title: "Redis 使用场景", content: "缓存、会话、排行榜、计数器、消息队列。" }
        ],

    diagnosis: [
{
                "symptom": "Redis 内存满→写入失败",
                "cause": "maxmemory 达限→淘汰策略不当",
                "fix": "设 maxmemory+淘汰策略 allkeys-lru。监控扩容"
        },
        {
                "symptom": "KEYS * 阻塞 Redis",
                "cause": "千万 key 遍历阻塞数秒",
                "fix": "禁用 KEYS。SCAN 渐进。SLOWLOG 监控"
        }
    ],

    exercises: [
      { level: '基础', task: "Redis 基本操作", answer: "# 设置值\nSET user:1:name Alice\n# 获取值\nGET user:1:name\n# 设置过期时间（秒）\nEXPIRE user:1:name 3600" }
    ],
    summary: "Redis：内存数据库，读写极快。数据类型：String、Hash、List、Set、Sorted Set。"
  },
  "Ja5xY9iUb3he6gW0nJoSu": {
    mentalModel: "MongoDB 是'文档数据库'：数据以 JSON 文档存储。",
    sections: [
      { title: "MongoDB 特点", content: "文档存储（JSON）、灵活 schema、高扩展性。" },
      { title: "MongoDB 操作", content: "db.collection.insert()、find()、update()、remove()。" }
        ],

    diagnosis: [
{
                "symptom": "MongoDB ObjectId 随机→索引碎片",
                "cause": "ObjectId 非单调→B-Tree 随机分裂",
                "fix": "单调递增 _id:ULID 或自增。或用 UUID v7"
        },
        {
                "symptom": "$lookup 性能远差于 SQL JOIN",
                "cause": "MongoDB 4.0 前只能左外连接+无法用索引",
                "fix": "嵌入数据避免 JOIN。5.0+ $lookup 支持管道。需 JOIN 的场景用 SQL"
        }
    ],

    exercises: [
      { level: '基础', task: "MongoDB 基本操作", answer: "// 插入\ndb.users.insertOne({name: 'Alice', age: 25})\n// 查询\ndb.users.find({age: {$gt: 18}})\n// 更新\ndb.users.updateOne({name: 'Alice'}, {$set: {age: 26}})" }
    ],
    summary: "MongoDB：文档数据库，JSON 存储，灵活 schema。"
  },
  "Kb6yZ0jVc4if7hX1oKpTv": {
    mentalModel: "GraphQL 是'查询语言'：客户端指定需要的数据，避免过度获取。",
    sections: [
      { title: "GraphQL vs REST", content: "REST：固定端点，返回固定数据。GraphQL：客户端指定需要的字段，避免过度获取。" },
      { title: "GraphQL 查询", content: "query { user(id: 1) { name email } }。只获取 name 和 email。" }
        ],

    diagnosis: [
{
                "symptom": "GraphQL N+1 查询",
                "cause": "查 user{posts{title}}→100 user=1+100=101 次查询",
                "fix": "DataLoader 批量合并:一次 SELECT WHERE user_id IN(1..100)"
        },
        {
                "symptom": "GraphQL 递归嵌套→深度攻击",
                "cause": "{user{posts{user{posts{user{...}}}}}}",
                "fix": "限制深度 max_depth。复杂度分析。Persisted Queries"
        }
    ],

    exercises: [
      { level: '进阶', task: "GraphQL 查询", answer: "query {\n  user(id: 1) {\n    name\n    email\n    posts {\n      title\n    }\n  }\n}" }
    ],
    summary: "GraphQL：客户端指定需要的数据，避免过度获取。"
  },
  "Lc7zA1kWe5jg8iY2pLqUw": {
    mentalModel: "WebSocket 是'全双工通信'：客户端和服务器可以互相发送消息。",
    sections: [
      { title: "WebSocket vs HTTP", content: "HTTP：客户端请求，服务器响应（单向）。WebSocket：全双工，客户端和服务器可以互相发送消息。" },
      { title: "使用场景", content: "实时聊天、实时通知、在线游戏。" }
        ],

    diagnosis: [
{
                "symptom": "WebSocket 无心跳→连接假死",
                "cause": "代理 idle timeout 关闭→双方不知",
                "fix": "30s ping/pong 心跳。代理 timeout>心跳间隔"
        },
        {
                "symptom": "WebSocket 不支持 HTTP/2",
                "cause": "每连接独占→同域限制 6 个",
                "fix": "多域名或 HTTP/3。SSE 替代单向推送"
        }
    ],

    exercises: [
      { level: '进阶', task: "WebSocket 使用场景", answer: "# 实时聊天\n# 客户端发送消息\nws.send('Hello')\n# 服务器推送消息\nws.onmessage = (msg) => console.log(msg)" }
    ],
    summary: "WebSocket：全双工通信，客户端和服务器互相发送消息。实时聊天、通知。"
  },
  "Md8aB2lXf6kh9jZ3qMrVx": {
    mentalModel: "RESTful API 是'API 设计规范'：用 HTTP 方法表示操作（GET 查、POST 增、PUT 改、DELETE 删）。",
    sections: [
      { title: "RESTful 规范", content: "GET /users 查询，POST /users 新增，PUT /users/1 更新，DELETE /users/1 删除。" },
      { title: "HTTP 状态码", content: "200 成功，201 创建成功，400 请求错误，404 未找到，500 服务器错误。" }
        ],

    diagnosis: [
{
                "symptom": "PUT 非幂等→重复调用结果不同",
                "cause": "PUT /orders/1/items 每次新增 item",
                "fix": "真正幂等:PUT /users/1{name,age}。用唯一请求 ID"
        },
        {
                "symptom": "REST API 返回过多数据→移动端浪费",
                "cause": "GET /users 返回完整 profile_text",
                "fix": "字段筛选 ?fields=id,name。或 GraphQL"
        }
    ],

    exercises: [
      { level: '基础', task: "RESTful API 设计", answer: "# 查询所有用户\nGET /users\n# 查询单个用户\nGET /users/1\n# 创建用户\nPOST /users\n# 更新用户\nPUT /users/1\n# 删除用户\nDELETE /users/1" }
    ],
    summary: "RESTful：GET 查、POST 增、PUT 改、DELETE 删。状态码：200 成功、404 未找到。"
  },
  "Ne9bC3mYg7li0kA4rNsWy": {
    mentalModel: "认证是'你是谁'，授权是'你能做什么'。",
    sections: [
      { title: "认证 vs 授权", content: "认证（Authentication）：验证身份（你是谁）。授权（Authorization）：验证权限（你能做什么）。" },
      { title: "认证方式", content: "用户名密码、JWT、OAuth、SSO。" }
        ],

    diagnosis: [
{
                "symptom": "JWT 泄露无法撤销",
                "cause": "无状态→签发后服务端无法主动失效",
                "fix": "黑名单 Redis 存 jti。短有效期 15min+refresh。关键操作重验证"
        },
        {
                "symptom": "认证=授权混淆→普通用户访问管理接口",
                "cause": "登录后有所有权限→无细粒度检查",
                "fix": "RBAC/ABAC。每次 API 调都检查权限"
        }
    ],

    exercises: [
      { level: '基础', task: "认证 vs 授权", answer: "# 认证：登录\nPOST /login {username, password} -> JWT token\n# 授权：检查权限\nGET /admin (需要 admin 权限)" }
    ],
    summary: "认证：你是谁。授权：你能做什么。认证方式：用户名密码、JWT、OAuth。"
  },
  "Of0cD4nZh8mj1lB5sOtXz": {
    mentalModel: "JWT 是'令牌'：服务器签发的令牌，包含用户信息。",
    sections: [
      { title: "JWT 结构", content: "Header（算法）.Payload（数据）.Signature（签名）。" },
      { title: "JWT 使用", content: "登录后服务器签发 JWT，客户端保存，每次请求带上 JWT。服务器验证 JWT 有效性。" }
        ],

    diagnosis: [
{
                "symptom": "JWT payload 过大→header 超限",
                "cause": "所有用户信息放 payload→token>8KB",
                "fix": "只存 user_id+role。其他 API 获取"
        },
        {
                "symptom": "JWT alg=none 安全漏洞",
                "cause": "攻击者改 alg 为 none→去掉签名",
                "fix": "服务端强制指定算法(RS256)。用成熟 JWT 库"
        }
    ],

    exercises: [
      { level: '进阶', task: "JWT 流程", answer: "# 1. 登录\nPOST /login {username, password}\n-> 返回 JWT token\n# 2. 带 token 请求\nGET /api/users\nAuthorization: Bearer <token>" }
    ],
    summary: "JWT：服务器签发的令牌。Header.Payload.Signature。登录后签发，请求时携带。"
  },
  "Pg1dE5oAi9nk2mC6tPuYa": {
    mentalModel: "OAuth 是'第三方授权'：用 Google/GitHub 账号登录。",
    sections: [
      { title: "OAuth 流程", content: "1. 用户点击'用 GitHub 登录'。2. 跳转到 GitHub 授权。3. GitHub 回调并返回 code。4. 用 code 换取 access token。" }
        ],

    diagnosis: [
{
                "symptom": "OAuth redirect_uri 篡改→code 泄露",
                "cause": "攻击者改 redirect_uri→code 发到攻击者服务器",
                "fix": "精确匹配预注册 URL。PKCE 加固"
        },
        {
                "symptom": "OAuth access token 无期限",
                "cause": "泄露后永久可用",
                "fix": "短有效期 1h。refresh token 续期。吊销端点"
        }
    ],

    exercises: [
      { level: '进阶', task: "OAuth 流程", answer: "# 1. 用户点击'用 GitHub 登录'\n# 2. 跳转到 GitHub 授权页面\n# 3. 用户授权后，GitHub 回调 /callback?code=xxx\n# 4. 服务器用 code 换取 access_token\n# 5. 用 access_token 获取用户信息" }
    ],
    summary: "OAuth：第三方授权。用 Google/GitHub 账号登录。流程：授权 -> 回调 -> 换 token。"
  },
  "Qh2eF6pBj0ol3nD7uQvZb": {
    mentalModel: "HTTPS 是'加密通信'：HTTP + TLS 加密，防止窃听和篡改。",
    sections: [
      { title: "HTTPS 原理", content: "HTTP + TLS 加密。TLS 握手：协商密钥，之后通信加密。" },
      { title: "HTTPS 证书", content: "CA 签发的证书，证明服务器身份。浏览器验证证书有效性。" }
        ],

    diagnosis: [
{
                "symptom": "HTTPS 证书过期→浏览器报警",
                "cause": "忘记续签→Let's Encrypt 90d/商业 1y",
                "fix": "certbot 自动续签。Caddy 内置。到期告警"
        },
        {
                "symptom": "弱加密套件→安全扫描不通过",
                "cause": "TLS 1.0/1.1 或 RC4/MD5",
                "fix": "只启 TLS 1.2+。Mozilla SSL Config Generator"
        }
    ],

    exercises: [
      { level: '基础', task: "HTTPS 理解", answer: "# HTTPS = HTTP + TLS\n# TLS 握手：协商密钥\n# 之后通信加密，防止窃听" }
    ],
    summary: "HTTPS：HTTP + TLS 加密。TLS 握手协商密钥，之后通信加密。"
  },
  "Ri3fG7qCk1pm4oE8vRwAc": {
    mentalModel: "Docker 是'容器化'：把应用和依赖打包成镜像，在任何地方以相同方式运行。",
    sections: [
      { title: "Docker 概念", content: "镜像（Image）：应用的打包。容器（Container）：镜像的运行实例。" },
      { title: "Docker 命令", content: "docker build 构建镜像，docker run 运行容器，docker ps 查看容器。" }
        ],

    diagnosis: [
{
                "symptom": "容器 localhost≠宿主机",
                "cause": "容器内 localhost 指容器自己",
                "fix": "host.docker.internal 或 --network host"
        },
        {
                "symptom": "Docker 镜像 2GB+→CI 极慢",
                "cause": "ubuntu 基础镜像+编译工具链+临时文件",
                "fix": "多阶段构建。alpine(~5MB)。.dockerignore"
        }
    ],

    exercises: [
      { level: '基础', task: "Docker 基本操作", answer: "# 构建镜像\ndocker build -t myapp:latest .\n# 运行容器\ndocker run -d -p 8080:80 myapp:latest\n# 查看容器\ndocker ps" }
    ],
    summary: "Docker：镜像是打包，容器是运行实例。docker build/run/ps。"
  },
  "Sj4gH8rDl2qn5pF9wSxBd": {
    mentalModel: "Kubernetes 是'容器编排'：管理多个容器，自动扩缩容、负载均衡。",
    sections: [
      { title: "Kubernetes 概念", content: "Pod（最小部署单元）、Deployment（管理 Pod）、Service（负载均衡）。" },
      { title: "Kubernetes 命令", content: "kubectl get pods 查看 Pod，kubectl apply -f deployment.yaml 部署。" }
        ],

    diagnosis: [
{
                "symptom": "Pod CrashLoopBackOff",
                "cause": "容器启动即退出→配置错/端口冲突/依赖不可用",
                "fix": "kubectl logs+describe。restartPolicy。readinessProbe"
        },
        {
                "symptom": "ClusterIP 外部不可访问",
                "cause": "仅集群内路由",
                "fix": "NodePort/LoadBalancer。Ingress+TLS"
        }
    ],

    exercises: [
      { level: '基础', task: "Kubernetes 基本操作", answer: "# 查看 Pod\nkubectl get pods\n# 部署\nkubectl apply -f deployment.yaml\n# 查看 Service\nkubectl get services" }
    ],
    summary: "Kubernetes：Pod（最小部署单元）、Deployment（管理 Pod）、Service（负载均衡）。"
  },
  "Tk5hI9sEm3ro6qG0xTyCe": {
    mentalModel: "CI/CD 是'自动化部署'：代码提交后自动测试、构建、部署。",
    sections: [
      { title: "CI/CD 流程", content: "CI（持续集成）：代码提交后自动测试。CD（持续部署）：自动部署到生产环境。" },
      { title: "CI/CD 工具", content: "Jenkins、GitHub Actions、GitLab CI。" }
        ],

    diagnosis: [
{
                "symptom": "CI 构建成功部署后启动失败",
                "cause": "CI(Ubuntu+Node20)≠部署(Alpine+Node18)→native 不兼容",
                "fix": "相同容器镜像构建部署。integration test"
        },
        {
                "symptom": "CI/CD 密钥硬编码泄露",
                "cause": "API key 写在 .gitlab-ci.yml 提交 Git",
                "fix": "CI Secret(GitHub/GitLab)。Vault。定期轮转"
        }
    ],

    exercises: [
      { level: '进阶', task: "CI/CD 流程", answer: "# GitHub Actions 示例\nname: CI/CD\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - run: npm test\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - run: deploy.sh" }
    ],
    summary: "CI/CD：代码提交后自动测试、构建、部署。CI 测试，CD 部署。"
  },
  "Ul6iJ0tFn4sp7rH1yUzDf": {
    mentalModel: "监控是'观察系统'：CPU、内存、请求量、错误率。",
    sections: [
      { title: "监控指标", content: "CPU、内存、磁盘、网络、请求量、错误率、响应时间。" },
      { title: "监控工具", content: "Prometheus（采集指标）、Grafana（可视化）、ELK（日志）。" }
        ],

    diagnosis: [
{
                "symptom": "告警风暴→一个故障触发几十个告警",
                "cause": "缺聚合和依赖分析→DB 慢所有依赖服务全告",
                "fix": "告警分组。依赖抑制。Alertmanager 管理"
        },
        {
                "symptom": "监控指标卡住→实际已故障",
                "cause": "node_exporter 挂→Pushgateway 保持最后值",
                "fix": "staleness 检测。PULL 模式(Prometheus)。监控自身健康"
        }
    ],

    exercises: [
      { level: '进阶', task: "监控指标", answer: "# Prometheus 查询\n# CPU 使用率\nrate(process_cpu_seconds_total[5m])\n# 请求量\nrate(http_requests_total[5m])" }
    ],
    summary: "监控：CPU、内存、请求量、错误率。工具：Prometheus、Grafana、ELK。"
  },
  "Vm7jK1uGo5tq8sI2zVaEg": {
    mentalModel: "日志是'系统记录'：记录系统运行状态，用于排查问题。",
    sections: [
      { title: "日志级别", content: "DEBUG（调试）、INFO（信息）、WARN（警告）、ERROR（错误）。" },
      { title: "日志工具", content: "ELK（Elasticsearch + Logstash + Kibana）、Loki。" }
        ],

    diagnosis: [
{
                "symptom": "日志撑爆磁盘",
                "cause": "生产开 DEBUG→每天 100GB+",
                "fix": "生产 INFO/WARN。logrotate。集中式(ELK/Loki)"
        },
        {
                "symptom": "日志泄露敏感信息",
                "cause": "密码/身份证号/信用卡号明文打印",
                "fix": "日志脱敏(****)。结构化标记敏感字段。定期扫描"
        }
    ],

    exercises: [
      { level: '基础', task: "日志级别", answer: "# DEBUG：调试信息\n# INFO：正常信息\n# WARN：警告\n# ERROR：错误" }
    ],
    summary: "日志：DEBUG、INFO、WARN、ERROR。工具：ELK、Loki。"
  },
  "Wn8kL2vHp6ur9tJ3aWbFh": {
    mentalModel: "微服务是'拆分应用'：把大应用拆成多个小服务，每个服务独立部署。",
    sections: [
      { title: "微服务 vs 单体", content: "单体：所有功能在一个应用。微服务：拆成多个小服务，每个服务独立部署、独立扩展。" },
      { title: "微服务挑战", content: "分布式复杂性：服务间通信、数据一致性、故障处理。" }
        ],

    diagnosis: [
{
                "symptom": "微服务调用链太长→超时",
                "cause": "A→B→C→D→E 每跳 50ms→250ms",
                "fix": "减少链深度。合并服务。异步解耦"
        },
        {
                "symptom": "分布式事务→订单/库存不一致",
                "cause": "订单创建成功库存扣减失败",
                "fix": "Saga。TCC。最终一致+补偿"
        }
    ],

    exercises: [
      { level: '进阶', task: "微服务 vs 单体", answer: "# 单体应用\n所有功能在一个应用，部署简单，但扩展性差\n# 微服务\n拆成多个服务，独立部署，扩展性好，但分布式复杂性高" }
    ],
    summary: "微服务：拆成多个小服务，独立部署。挑战：分布式复杂性。"
  },
  "Xo9lM3wIq7vs0uK4bXcGi": {
    mentalModel: "API 网关是'统一入口'：所有请求先经过网关，网关转发到后端服务。",
    sections: [
      { title: "API 网关功能", content: "路由转发、负载均衡、认证、限流、日志。" },
      { title: "API 网关工具", content: "Nginx、Kong、Kong Ingress。" }
        ],

    diagnosis: [
{
                "symptom": "API 网关单点故障→全站宕",
                "cause": "所有流量经网关→网关挂了",
                "fix": "多实例+LB。K8s Ingress 多副本。降级直连"
        },
        {
                "symptom": "网关限流误伤正常用户",
                "cause": "同一 NAT IP 多用户→按 IP 限流全拦",
                "fix": "限流粒度 user_id。令牌桶允许突发"
        }
    ],

    exercises: [
      { level: '进阶', task: "API 网关功能", answer: "# API 网关功能\n# 路由转发：/users -> user-service\n# 负载均衡：轮询多个实例\n# 认证：验证 JWT\n# 限流：限制请求频率" }
    ],
    summary: "API 网关：统一入口，路由转发、负载均衡、认证、限流。"
  },
  "Yp0mN4xJr8wt1vL5cYdHj": {
    mentalModel: "负载均衡是'分散请求'：把请求分散到多个服务器。",
    sections: [
      { title: "负载均衡策略", content: "轮询（Round Robin）、加权轮询、最少连接、IP Hash。" },
      { title: "负载均衡工具", content: "Nginx、HAProxy、云负载均衡（AWS ALB）。" }
        ],

    diagnosis: [
{
                "symptom": "LB 转发到不健康实例",
                "cause": "健康检查间隔 30s→窗口期挂掉仍转发",
                "fix": "5-10s 间隔。连续失败 2-3 次标记不健康"
        },
        {
                "symptom": "Session sticky→负载不均",
                "cause": "IP Hash→大客户 IP 打爆单节点",
                "fix": "无状态 JWT。Cookie 级 sticky 优于 IP"
        }
    ],

    exercises: [
      { level: '进阶', task: "负载均衡策略", answer: "# 轮询：请求依次分配到每个服务器\n# 加权轮询：性能好的服务器分配更多请求\n# 最少连接：分配到连接数最少的服务器\n# IP Hash：同一 IP 总是分配到同一服务器" }
    ],
    summary: "负载均衡：轮询、加权轮询、最少连接、IP Hash。工具：Nginx、HAProxy。"
  },
  "Zq1nO5yKs9xu2wM6dZeIk": {
    mentalModel: "高可用是'系统不宕机'：多副本、故障转移、自动恢复。",
    sections: [
      { title: "高可用策略", content: "多副本（多个实例）、故障转移（自动切换到健康实例）、健康检查。" },
      { title: "高可用工具", content: "Kubernetes（自动故障转移）、Keepalived（VIP 漂移）。" }
        ],

    diagnosis: [
{
                "symptom": "高可用裂脑(Split-Brain)",
                "cause": "网络分区→双主同时接受写入→冲突",
                "fix": "奇数节点选举。quorum 过半通过。Raft"
        },
        {
                "symptom": "故障转移后老主恢复→双主并存",
                "cause": "老主恢复不知道自己已不是主",
                "fix": "Fencing(STONITH)杀死老主。read_only=ON"
        }
    ],

    exercises: [
      { level: '进阶', task: "高可用策略", answer: "# 多副本：部署多个实例\n# 故障转移：Kubernetes 自动重启失败的 Pod\n# 健康检查：/health 端点，Kubernetes 定期检查" }
    ],
    summary: "高可用：多副本、故障转移、健康检查。Kubernetes 自动故障转移。"
  },
  "Ar2oP6zLt0yv3xN7eAfJl": {
    mentalModel: "设计模式是'常见问题的解决方案'：单例、工厂、策略、观察者等。",
    sections: [
      { title: "常见设计模式", content: "单例（全局唯一实例）、工厂（创建对象）、策略（可替换算法）、观察者（事件通知）。" }
        ],

    diagnosis: [
{
                "symptom": "单例并发创建多实例",
                "cause": "DCL 缺陷/未同步",
                "fix": "语言级单例(enum/object/module)。DCL+volatile"
        },
        {
                "symptom": "DB 连接单例→并发瓶颈",
                "cause": "所有请求共用 1 连接→排队",
                "fix": "DB 连接用连接池不用单例"
        }
    ],

    exercises: [
      { level: '进阶', task: "单例模式", answer: "// 单例模式\nclass Database {\n  private static instance: Database;\n  static getInstance() {\n    if (!this.instance) {\n      this.instance = new Database();\n    }\n    return this.instance;\n  }\n}" }
    ],
    summary: "设计模式：单例、工厂、策略、观察者。常见问题的解决方案。"
  },
  "Bs3pQ7aMu1zw4yO8fBgKm": {
    mentalModel: "SOLID 是'面向对象设计原则'：单一职责、开闭、里氏替换、接口隔离、依赖倒置。",
    sections: [
      { title: "SOLID 原则", content: "S 单一职责（一个类只做一件事）、O 开闭（对扩展开放，对修改关闭）、L 里氏替换（子类可替换父类）、I 接口隔离（小接口）、D 依赖倒置（依赖抽象）。" }
        ],

    diagnosis: [
{
                "symptom": "单一职责→一个类做太多",
                "cause": "UserService 管 CRUD+发邮件+图片处理",
                "fix": "拆成 UserRepository+EmailService+ImageService"
        },
        {
                "symptom": "违反开闭→加功能改老代码",
                "cause": "if-else 判断 type→新增改所有分支",
                "fix": "策略模式:每 type 独立类。新增=加类不改旧"
        }
    ],

    exercises: [
      { level: '进阶', task: "SOLID 理解", answer: "# S 单一职责\nclass UserService { saveUser() {} } // 只做用户相关\nclass EmailService { sendEmail() {} } // 只做邮件\n# O 开闭\n# 新增功能时，扩展类而不是修改现有类" }
    ],
    summary: "SOLID：单一职责、开闭、里氏替换、接口隔离、依赖倒置。"
  },
  "Ct4qR8bNv2ax5zP9gChLn": {
    mentalModel: "代码规范是'统一风格'：命名、格式、注释，让代码易读易维护。",
    sections: [
      { title: "代码规范", content: "命名（camelCase、snake_case）、格式（缩进、空格）、注释（为什么而不是什么）。" },
      { title: "工具", content: "ESLint（JavaScript）、Prettier（格式化）。" }
        ],

    diagnosis: [
{
                "symptom": "SQL 注入→拼接 SQL",
                "cause": "const sql=`SELECT...WHERE name=\"${input}\"`→注入",
                "fix": "参数化查询 PreparedStatement。禁止拼 SQL。代码审查"
        },
        {
                "symptom": "命名不一致→user_id/userId/uid 混用",
                "cause": "同一概念多种写法",
                "fix": "统一规范文档。ESLint 检查"
        }
    ],

    exercises: [
      { level: '基础', task: "代码规范", answer: "// 命名：camelCase\nconst userName = 'Alice';\n// 注释：写为什么，而不是什么\n// 计算折扣（而不是：循环遍历）\nconst discount = price * 0.9;" }
    ],
    summary: "代码规范：命名、格式、注释。工具：ESLint、Prettier。"
  },
  "Du5rS9cOw3by6aQ0hDiMo": {
    mentalModel: "Git 是'版本控制'：记录代码变化，可以回滚、分支、合并。",
    sections: [
      { title: "Git 基本命令", content: "git add 暂存，git commit 提交，git push 推送，git pull 拉取。" },
      { title: "分支", content: "git branch 创建分支，git checkout 切换分支，git merge 合并分支。" }
        ],

    diagnosis: [
{
                "symptom": "merge conflict 误删代码",
                "cause": "不理解两边改动→选错版本",
                "fix": "可视化 diff。理解意图再选。合并后测试"
        },
        {
                "symptom": "force push 覆盖他人提交",
                "cause": "多人协作→同事 commit 被覆盖",
                "fix": "禁用 force push 到共享分支。--force-with-lease"
        }
    ],

    exercises: [
      { level: '基础', task: "Git 基本操作", answer: "git add .\ngit commit -m 'feat: add login'\ngit push\n# 分支\ngit branch feature/login\ngit checkout feature/login\ngit checkout main\ngit merge feature/login" }
    ],
    summary: "Git：add/commit/push/pull。分支：branch/checkout/merge。"
  },
  "Ev6sT0dPx4cz7bR1iEjNp": {
    mentalModel: "测试是'验证代码'：单元测试、集成测试、端到端测试。",
    sections: [
      { title: "测试类型", content: "单元测试（测试函数）、集成测试（测试模块间交互）、端到端测试（测试整个流程）。" },
      { title: "测试工具", content: "Jest（JavaScript）、JUnit（Java）、pytest（Python）。" }
        ],

    diagnosis: [
{
                "symptom": "单元测试过集成测试挂",
                "cause": "mock DB 与真实行为不一致",
                "fix": "集成测试用 Testcontainers(真实 DB)"
        },
        {
                "symptom": "测试用 H2 生产用 PostgreSQL→SQL 方言差异",
                "cause": "H2 语法 PG 不支持",
                "fix": "Testcontainers 启动真实 PG 做集成测试"
        }
    ],

    exercises: [
      { level: '基础', task: "单元测试", answer: "// Jest 测试\ntest('add', () => {\n  expect(add(1, 2)).toBe(3);\n});" }
    ],
    summary: "测试：单元测试、集成测试、端到端测试。工具：Jest、JUnit、pytest。"
  },
  "Fw7tU1eQy5da8cS2jFkOq": {
    mentalModel: "重构是'改善代码结构'：不改变功能，让代码更易读易维护。",
    sections: [
      { title: "重构技巧", content: "提取函数、提取类、重命名、消除重复。" },
      { title: "重构时机", content: "代码重复、函数太长、类太大、命名不清晰时。" }
        ],

    diagnosis: [
{
                "symptom": "重构后出 bug→无测试保护",
                "cause": "无测试覆盖→改动无法验证",
                "fix": "重构前写测试。小步改+跑测试+提交"
        },
        {
                "symptom": "重构范围太大→一次改几千行",
                "cause": "风格+架构+功能全改→PR 难审",
                "fix": "重构与功能分提交。每次只做一件事"
        }
    ],

    exercises: [
      { level: '进阶', task: "重构示例", answer: "// 重构前\nfunction process(data) {\n  // 50 行代码\n}\n// 重构后\nfunction validate(data) { ... }\nfunction transform(data) { ... }\nfunction save(data) { ... }" }
    ],
    summary: "重构：提取函数、重命名、消除重复。不改变功能，改善结构。"
  },
  "Gx8uV2fRz6eb9dT3kGlPr": {
    mentalModel: "性能优化是'让代码更快'：减少计算、减少 IO、缓存。",
    sections: [
      { title: "性能优化技巧", content: "1. 减少计算（缓存、算法优化）。2. 减少 IO（批量操作、异步）。3. 数据库优化（索引、查询优化）。" }
        ],

    diagnosis: [
{
                "symptom": "无测量就优化→优化了 1%",
                "cause": "直觉判断慢→profile 发现只占 1%",
                "fix": "Profiler 先测量。Amdahl 定律优化大头"
        },
        {
                "symptom": "加索引加快读→写性能降 50%",
                "cause": "每个索引增加 INSERT/UPDATE/DELETE 开销",
                "fix": "权衡读写。pt-query-digest 分析给实际需要的列加"
        }
    ],

    exercises: [
      { level: '进阶', task: "性能优化", answer: "# 1. 缓存\n# 缓存常用数据，减少数据库查询\n# 2. 批量操作\n# 批量 INSERT 比逐条 INSERT 快\n# 3. 索引\n# 给 WHERE、JOIN 列加索引" }
    ],
    summary: "性能优化：减少计算（缓存）、减少 IO（批量）、数据库优化（索引）。"
  },
  "Hy9vW3gSa7fc0eU4lHmQs": {
    mentalModel: "安全是'保护系统'：防止攻击、保护数据。",
    sections: [
      { title: "常见攻击", content: "SQL 注入、XSS（跨站脚本）、CSRF（跨站请求伪造）、DDoS（分布式拒绝服务）。" },
      { title: "防御措施", content: "参数化查询（防 SQL 注入）、转义输出（防 XSS）、CSRF Token、限流（防 DDoS）。" }
        ],

    diagnosis: [
{
                "symptom": "SQL 注入登录绕过→' OR '1'='1",
                "cause": "SELECT...WHERE username=\"${user}\"AND password=\"${pass}\"",
                "fix": "参数化查询:WHERE username=? AND password=?。WAF 拦截"
        },
        {
                "symptom": "密码明文存 DB",
                "cause": "密码直接存储→泄露直接可见",
                "fix": "bcrypt/argon2 哈希。敏感字段 AES-256 加密。KMS 管密钥"
        }
    ],

    exercises: [
      { level: '进阶', task: "防 SQL 注入", answer: "// 错误：拼接 SQL\nconst sql = `SELECT * FROM users WHERE name = '${name}'`;\n// 正确：参数化查询\nconst sql = 'SELECT * FROM users WHERE name = ?';\ndb.query(sql, [name]);" }
    ],
    summary: "安全：SQL 注入、XSS、CSRF、DDoS。防御：参数化查询、转义输出、CSRF Token、限流。"
  },
  "Iz0wX4hTb8gd1fV5mInRt": {
    mentalModel: "文档是'代码说明'：README、API 文档、代码注释。",
    sections: [
      { title: "文档类型", content: "README（项目说明）、API 文档（Swagger）、代码注释（为什么而不是什么）。" },
      { title: "文档工具", content: "Swagger（API 文档）、JSDoc（JavaScript 注释）、MkDocs（文档站点）。" }
        ],

    diagnosis: [
{
                "symptom": "API 文档与实现不一致",
                "cause": "改代码未更新文档→Swagger 手动写",
                "fix": "OpenAPI 自动生成。CI 检查一致性"
        },
        {
                "symptom": "README 过时→新人跑不起来",
                "cause": "依赖版本/端口/步骤全变了",
                "fix": "CI 验证 README 步骤。PR 含文档更新"
        }
    ],

    exercises: [
      { level: '基础', task: "README 模板", answer: "# 项目名\n## 简介\n项目说明\n## 安装\nnpm install\n## 使用\nnpm start\n## API\nGET /users 查询用户" }
    ],
    summary: "文档：README、API 文档（Swagger）、代码注释。"
  },
  "Ja1xY5iUc9he2gW6nJoSu": {
    mentalModel: "调试是'找 Bug'：断点、日志、打印。",
    sections: [
      { title: "调试技巧", content: "1. 打印日志（console.log）。2. 断点调试（debugger）。3. 二分法（缩小范围）。" },
      { title: "调试工具", content: "Chrome DevTools（前端）、debugger（Node.js）、日志。" }
        ],

    diagnosis: [
{
                "symptom": "生产 Bug 无法复现",
                "cause": "本地环境≠生产(数据/并发/网络)",
                "fix": "类生产 staging。远程调试。混沌工程"
        },
        {
                "symptom": "debugger/console.log 残留生产",
                "cause": "泄露内部状态+影响性能",
                "fix": "log.debug 替代 console.log。CI 检查 debugger"
        }
    ],

    exercises: [
      { level: '基础', task: "调试技巧", answer: "// 1. 打印日志\nconsole.log('data:', data);\n// 2. 断点\ndebugger;\n// 3. 二分法：注释一半代码，看问题是否还在" }
    ],
    summary: "调试：打印日志、断点、二分法。工具：Chrome DevTools、debugger。"
  },
  // Stage 15 - 数据类型 (补充)
  "BJ4fQvagTO0B5UtXblyx8": {
    mentalModel: "INTEGER 是'整数类型'：存储整数，如 1, -5, 1000。",
    sections: [
      { title: "INTEGER 类型", content: "INTEGER 存储整数。常见类型：TINYINT (1字节)、SMALLINT (2字节)、INT (4字节)、BIGINT (8字节)。" },
      { title: "选择类型", content: "根据数值范围选择：小数值用 TINYINT，大数值用 BIGINT。避免浪费空间。" }
        ],

    diagnosis: [
{
                "symptom": "TINYINT 主键→255 上限用完",
                "cause": "TINYINT 最大值 127/255",
                "fix": "主键用 INT(21 亿)或 BIGINT。监控使用率"
        },
        {
                "symptom": "BIGINT vs INT→缓存条目减半",
                "cause": "BIGINT 8 字节 vs INT 4 字节→同样内存存一半",
                "fix": "不需 BIGINT 用 INT UNSIGNED(42 亿)"
        }
    ],

    exercises: [
      { level: '基础', task: "创建表，包含不同整数类型", answer: "CREATE TABLE numbers (\n  tiny TINYINT,\n  small SMALLINT,\n  normal INT,\n  big BIGINT\n);" }
    ],
    summary: "INTEGER：TINYINT、SMALLINT、INT、BIGINT。根据数值范围选择类型。"
  },
  "1E1WdWOyqxbbdiIbw26dZ": {
    mentalModel: "DECIMAL 是'精确小数'：存储精确的小数，如金额。避免浮点数精度问题。",
    sections: [
      { title: "DECIMAL 语法", content: "DECIMAL(总位数, 小数位数)。DECIMAL(10, 2) 表示总共 10 位，其中 2 位小数，如 12345678.90。" },
      { title: "使用场景", content: "金额、价格等需要精确计算的场景。避免用 FLOAT/DOUBLE，会有精度丢失。" }
        ],

    diagnosis: [
{
                "symptom": "DECIMAL 用 float/double 读→精度丢失",
                "cause": "DECIMAL(10,2)=999.99→float 转丢",
                "fix": "BigDecimal/Decimal。不用 float/double 处理金钱"
        },
        {
                "symptom": "DECIMAL 除法舍入不一致",
                "cause": "无限小数截断→舍入模式差异",
                "fix": "CAST(a/b AS DECIMAL(10,4))。ROUND 控制"
        }
    ],

    exercises: [
      { level: '基础', task: "创建价格列", answer: "CREATE TABLE products (\n  price DECIMAL(10, 2)\n);" }
    ],
    summary: "DECIMAL(总位数, 小数位数) 精确小数。金额用 DECIMAL，避免浮点数。"
  },
  "MIOuWWcCjLAmgzog2DBC3": {
    mentalModel: "VARCHAR 是'变长字符串'：存储可变长度的文本，如用户名、邮箱。",
    sections: [
      { title: "VARCHAR 语法", content: "VARCHAR(n) 最大长度 n。VARCHAR(100) 最大 100 个字符。实际存储长度可变，节省空间。" },
      { title: "VARCHAR vs CHAR", content: "VARCHAR 变长（节省空间），CHAR 定长（固定长度，不足补空格）。大多数场景用 VARCHAR。" }
        ],

    diagnosis: [
{
                "symptom": "VARCHAR 未指定长度→语法错",
                "cause": "VARCHAR()→缺少长度",
                "fix": "VARCHAR(255)。合理评估:姓名 50,邮箱 100"
        },
        {
                "symptom": "定长用 VARCHAR→浪费长度字节+碎片",
                "cause": "MD5 hash(32)用 VARCHAR(32)",
                "fix": "定长用 CHAR(32)无长度开销"
        }
    ],

    exercises: [
      { level: '基础', task: "创建用户名和邮箱列", answer: "CREATE TABLE users (\n  username VARCHAR(50),\n  email VARCHAR(100)\n);" }
    ],
    summary: "VARCHAR(n) 变长字符串。大多数场景用 VARCHAR，节省空间。"
  },
  "LcljR70T-OnzSrJJDqOWf": {
    mentalModel: "TEXT 是'长文本'：存储大量文本，如文章、描述。",
    sections: [
      { title: "TEXT 类型", content: "TEXT 存储大量文本。常见类型：TEXT (64KB)、MEDIUMTEXT (16MB)、LONGTEXT (4GB)。" },
      { title: "使用场景", content: "文章内容、长描述、JSON 数据等。避免用 VARCHAR 存储超长文本。" }
        ],

    diagnosis: [
{
                "symptom": "TEXT 列 SELECT *→极慢",
                "cause": "TEXT 存独立 page→每行回表",
                "fix": "需要 TEXT 才查它。垂直拆分:user_profiles(user_id,bio TEXT)"
        },
        {
                "symptom": "TEXT 无法完整索引→仅前缀",
                "cause": "B-Tree 索引要求长度",
                "fix": "前缀索引 text_col(100)。FULLTEXT。Elasticsearch"
        }
    ],

    exercises: [
      { level: '基础', task: "创建文章表", answer: "CREATE TABLE articles (\n  title VARCHAR(200),\n  content TEXT\n);" }
    ],
    summary: "TEXT 存储长文本。TEXT (64KB)、MEDIUMTEXT (16MB)、LONGTEXT (4GB)。"
  },
  "mBQ3Z8GlFcpIena3IB7D_": {
    mentalModel: "BOOLEAN 是'布尔类型'：存储 true/false，如是否激活、是否删除。",
    sections: [
      { title: "BOOLEAN 语法", content: "BOOLEAN 或 BOOL。存储 true 或 false。某些数据库用 0/1 表示。" },
      { title: "使用场景", content: "状态标记：is_active、is_deleted、is_verified 等。" }
        ],

    diagnosis: [
{
                "symptom": "BOOLEAN=MySQL TINYINT(1)→可存 99",
                "cause": "无真正 BOOLEAN 类型",
                "fix": "CHECK(col IN(0,1))。应用层校验 true/false"
        },
        {
                "symptom": "is_deleted 默认值搞反→新数据全\"已删除\"",
                "cause": "DEFAULT 1→1=已删除",
                "fix": "命名无歧义:is_active(1=活跃)。统一 1=是"
        }
    ],

    exercises: [
      { level: '基础', task: "创建用户表，包含激活状态", answer: "CREATE TABLE users (\n  username VARCHAR(50),\n  is_active BOOLEAN DEFAULT true\n);" }
    ],
    summary: "BOOLEAN 存储 true/false。状态标记用 BOOLEAN。"
  },
  "ujeq8EIFcrqkBjoFizsJM": {
    mentalModel: "ENUM 是'枚举类型'：预定义的值列表，如状态、类型。",
    sections: [
      { title: "ENUM 语法", content: "ENUM('值1', '值2', '值3')。只能存储预定义的值。如 ENUM('pending', 'active', 'deleted')。" },
      { title: "使用场景", content: "状态、类型等有限选项。如订单状态、用户角色。避免用 VARCHAR 存储固定选项。" }
        ],

    diagnosis: [
{
                "symptom": "ENUM 加值→ALTER TABLE→锁表",
                "cause": "'pending','paid'加'shipped'需 ALTER",
                "fix": "TINYINT+代码映射。VARCHAR+CHECK 不加需 ALTER"
        },
        {
                "symptom": "ENUM 按数字访问→值≠字符",
                "cause": "WHERE col=1 返回索引位置值",
                "fix": "统一字符串比较 WHERE col='pending'"
        }
    ],

    exercises: [
      { level: '基础', task: "创建订单表，包含状态", answer: "CREATE TABLE orders (\n  status ENUM('pending', 'paid', 'shipped', 'completed')\n);" }
    ],
    summary: "ENUM('值1', '值2') 枚举类型。有限选项用 ENUM，避免 VARCHAR。"
  },
  "w7FNjdwqjY7X69aJqqBy4": {
    mentalModel: "JSON 是'结构化数据'：存储 JSON 格式数据，灵活但有性能限制。",
    sections: [
      { title: "JSON 类型", content: "JSON 类型存储 JSON 数据。可以存储复杂结构，但查询性能不如专用列。" },
      { title: "使用场景", content: "动态字段、配置数据、元数据等。避免滥用，频繁查询的字段应该用专用列。" }
        ],

    diagnosis: [
{
                "symptom": "JSON 字段查询无法用索引",
                "cause": "WHERE json_col->>'$.name'='Alice'",
                "fix": "生成列+索引:GENERATED ALWAYS AS(json_col->>'$.name')STORED"
        },
        {
                "symptom": "JSON 数据膨胀→无 schema 约束",
                "cause": "前端传什么存什么→同字段类型乱",
                "fix": "JSON Schema 校验。规范化字段升为独立列"
        }
    ],

    exercises: [
      { level: '基础', task: "创建配置表", answer: "CREATE TABLE configs (\n  name VARCHAR(50),\n  settings JSON\n);" }
    ],
    summary: "JSON 存储 JSON 数据。动态字段用 JSON，避免滥用。"
  },
  "R1ktDJpXOz0PTllAcBrdu": {
    mentalModel: "UUID 是'全局唯一标识'：128 位随机 ID，如 '550e8400-e29b-41d4-a716-446655440000'。",
    sections: [
      { title: "UUID 特点", content: "UUID 是 128 位随机 ID，全局唯一。适合分布式系统，但比 INT 占用更多空间。" },
      { title: "UUID vs INT", content: "INT 自增（简单、小），UUID 随机（全局唯一、大）。分布式系统用 UUID，单机用 INT。" }
        ],

    diagnosis: [
{
                "symptom": "UUID v4 主键→B-Tree 碎片",
                "cause": "随机 UUID→插入随机位置→页分裂+缓存差",
                "fix": "UUID v7/ULID 时间有序。主键用 BIGINT,UUID 做二级索引"
        },
        {
                "symptom": "UUID VARCHAR(36)→浪费空间",
                "cause": "36 字符 vs BINARY(16)=16 字节",
                "fix": "BINARY(16)或 UUID_TO_BIN/BIN_TO_UUID"
        }
    ],

    exercises: [
      { level: '基础', task: "创建表，使用 UUID 主键", answer: "CREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name VARCHAR(50)\n);" }
    ],
    summary: "UUID 全局唯一 ID。分布式系统用 UUID，单机用 INT。"
  },
  "OdaBXz2XBAVLsQ-m7xtAM": {
    mentalModel: "BLOB 是'二进制数据'：存储二进制数据，如图片、文件。",
    sections: [
      { title: "BLOB 类型", content: "BLOB 存储二进制数据。常见类型：BLOB (64KB)、MEDIUMBLOB (16MB)、LONGBLOB (4GB)。" },
      { title: "使用场景", content: "图片、文件等二进制数据。但建议用对象存储（如 S3），数据库只存路径。" }
        ],

    diagnosis: [
{
                "symptom": "BLOB 存库→表空间爆炸",
                "cause": "1 亿行 x100KB=10TB",
                "fix": "对象存储(S3/MinIO)存 URL。BLOB 仅小+需事务的数据"
        },
        {
                "symptom": "BLOB 在备份中膨胀",
                "cause": "mysqldump base64→膨胀 30-50%",
                "fix": "跳过 BLOB 或 xtrabackup 物理备份"
        }
    ],

    exercises: [
      { level: '基础', task: "创建图片表", answer: "CREATE TABLE images (\n  id INT PRIMARY KEY,\n  data BLOB\n);" }
    ],
    summary: "BLOB 存储二进制数据。建议用对象存储，数据库只存路径。"
  },
  "igg34gLPl3HYVAmRNFGcV": {
    mentalModel: "约束是'规则'：限制数据的合法性，如 NOT NULL、UNIQUE、CHECK。",
    sections: [
      { title: "常见约束", content: "NOT NULL（不能为空）、UNIQUE（唯一）、CHECK（条件检查）、DEFAULT（默认值）。" },
      { title: "使用场景", content: "保证数据完整性。如邮箱不能为空、用户名唯一、年龄大于 0。" }
        ],

    diagnosis: [
{
                "symptom": "NOT NULL DEFAULT''→静默插空串",
                "cause": "email NOT NULL DEFAULT''→INSERT(name)不报错",
                "fix": "DEFAULT 应有意义值。不加 DEFAULT 强制明确赋值"
        },
        {
                "symptom": "CHECK 在 MySQL 5.7 不强制",
                "cause": "语法解析但不执行→可插负数",
                "fix": "升级 8.0+。5.7 用触发器或应用层校验"
        }
    ],

    exercises: [
      { level: '基础', task: "创建用户表，包含约束", answer: "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  email VARCHAR(100) UNIQUE NOT NULL,\n  age INT CHECK (age >= 0)\n);" }
    ],
    summary: "约束：NOT NULL、UNIQUE、CHECK、DEFAULT。保证数据完整性。"
  },
  "7sTW1vwUhCFOMXYjScVEt": {
    mentalModel: "主键是'唯一标识'：每行数据的唯一标识，不能重复、不能为空。",
    sections: [
      { title: "主键特点", content: "PRIMARY KEY = UNIQUE + NOT NULL。每行必须有主键，主键值唯一。" },
      { title: "主键选择", content: "常用 INT 自增或 UUID。分布式系统用 UUID，单机用 INT 自增。" }
        ],

    diagnosis: [
{
                "symptom": "复合主键→JOIN 条件冗长",
                "cause": "PK(user_id,order_id)→ON t1.u=t2.u AND t1.o=t2.o",
                "fix": "简单场景单自增主键。关联表复合 PK。业务键 UNIQUE"
        },
        {
                "symptom": "UUID 主键→二级索引膨胀",
                "cause": "InnoDB 二级索引叶存主键→16 字节 UUID",
                "fix": "主键用 BIGINT(8 字节)。UUID 做非主键唯一标识"
        }
    ],

    exercises: [
      { level: '基础', task: "创建表，使用自增主键", answer: "CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(50)\n);" }
    ],
    summary: "主键 = UNIQUE + NOT NULL。常用 INT 自增或 UUID。"
  },
  "03qMopxzjx_-dZbYw9b7J": {
    mentalModel: "外键是'表之间的关系'：FOREIGN KEY 约束保证引用完整性。",
    sections: [
      { title: "外键语法", content: "FOREIGN KEY (列名) REFERENCES 表名(列名)。保证引用的行存在。" },
      { title: "级联操作", content: "ON DELETE CASCADE 删除时级联删除。ON UPDATE CASCADE 更新时级联更新。" }
        ],

    diagnosis: [
{
                "symptom": "插入 orders 前先查父表→多一次查询",
                "cause": "SELECT 1 FROM users WHERE id=? 确认→再 INSERT",
                "fix": "直接 INSERT→失败说明不存在→依赖外键检查。减少往返"
        },
        {
                "symptom": "DELETE 父行→子表全表扫描",
                "cause": "orders.user_id 无索引→检查引用扫全表",
                "fix": "外键列必建索引 CREATE INDEX idx ON orders(user_id)"
        }
    ],

    exercises: [
      { level: '基础', task: "创建订单表，包含外键", answer: "CREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);" }
    ],
    summary: "外键保证引用完整性。ON DELETE CASCADE 级联删除。"
  },
  "cucCPw3KfetAP2OMFUs0X": {
    mentalModel: "索引是'目录'：加速查询，但减慢写入。",
    sections: [
      { title: "索引原理", content: "索引是数据的'目录'，加速查询。但每次写入都要更新索引，减慢写入。" },
      { title: "索引类型", content: "B-Tree（默认）、Hash（等值查询）、Full-text（全文搜索）。" }
        ],

    diagnosis: [
{
                "symptom": "统计信息过期→优化器选错索引",
                "cause": "大量数据变更后 cardinality 不准",
                "fix": "ANALYZE TABLE。innodb_stats_auto_recalc=ON"
        },
        {
                "symptom": "低基数索引→比全表扫描慢",
                "cause": "status 仅 3 值→回表成本>扫描",
                "fix": "低基数(<10%)不独立建。INDEX(status,created_at)复合前缀"
        }
    ],

    exercises: [
      { level: '基础', task: "创建索引", answer: "CREATE INDEX idx_email ON users(email);" }
    ],
    summary: "索引加速查询，减慢写入。B-Tree、Hash、Full-text。"
  },
  "3cMECz5QPVDOFrk5duObs": {
    mentalModel: "复合索引是'多列索引'：CREATE INDEX idx ON users(last_name, first_name)。",
    sections: [
      { title: "复合索引语法", content: "CREATE INDEX idx ON 表(列1, 列2, ...)。多列索引。" },
      { title: "最左前缀", content: "复合索引 (a, b, c) 可以用于 WHERE a=1、WHERE a=1 AND b=2，但不能用于 WHERE b=2。" }
        ],

    diagnosis: [
{
                "symptom": "8 列复合索引→太重",
                "cause": "INDEX(a,b,c,d,e,f,g,h)大+维护贵",
                "fix": "常用组合建 3-4 列。多余不提升性能"
        },
        {
                "symptom": "复合索引未按最左前缀",
                "cause": "INDEX(a,b,c)的 WHERE b=1 不走",
                "fix": "确保含最左列。多模式建独立索引"
        }
    ],

    exercises: [
      { level: '进阶', task: "创建复合索引", answer: "CREATE INDEX idx_name ON users(last_name, first_name);" }
    ],
    summary: "复合索引 (列1, 列2)。最左前缀原则。"
  },
  "vhBZqqmUcEon6-Vwvla4q": {
    mentalModel: "唯一索引是'唯一约束'：UNIQUE INDEX 保证列值唯一。",
    sections: [
      { title: "唯一索引语法", content: "CREATE UNIQUE INDEX idx ON 表(列)。保证列值唯一。" },
      { title: "使用场景", content: "邮箱、用户名等需要唯一的字段。UNIQUE INDEX 比 UNIQUE 约束更快。" }
        ],

    diagnosis: [
{
                "symptom": "UNIQUE NOT NULL+PK 重叠",
                "cause": "与主键功能重复→多维护一个索引",
                "fix": "PK 替代 UNIQUE NOT NULL。其他 UNIQUE 允许 NULL"
        },
        {
                "symptom": "并发 INSERT 同唯一值→死锁",
                "cause": "唯一索引检查需 gap lock→两并发同值死锁",
                "fix": "自增/UUID 做主键。避免并发插相同值。重试"
        }
    ],

    exercises: [
      { level: '基础', task: "创建唯一索引", answer: "CREATE UNIQUE INDEX idx_email ON users(email);" }
    ],
    summary: "UNIQUE INDEX 保证列值唯一。邮箱、用户名用唯一索引。"
  },
  "QM0ltgPu8lLLYc2MsTLj-": {
    mentalModel: "事务隔离级别是'并发控制'：READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE。",
    sections: [
      { title: "隔离级别", content: "READ UNCOMMITTED 最弱（可脏读），READ COMMITTED（不可脏读），REPEATABLE READ（不可重复读），SERIALIZABLE 最强（串行化）。" },
      { title: "设置隔离级别", content: "SET TRANSACTION ISOLATION LEVEL READ COMMITTED。" }
        ],

    diagnosis: [
{
                "symptom": "SERIALIZABLE→大量锁等待",
                "cause": "所有读加共享锁→并发最低",
                "fix": "只在必须串行化时用。默认 READ COMMITTED"
        },
        {
                "symptom": "SET TRANSACTION 仅当前会话→连接池回收丢失",
                "cause": "连接池复用→隔离级别恢复默认",
                "fix": "SET GLOBAL 全局配置。连接池初始化设"
        }
    ],

    exercises: [
      { level: '进阶', task: "设置隔离级别", answer: "SET TRANSACTION ISOLATION LEVEL READ COMMITTED;" }
    ],
    summary: "事务隔离级别：READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE。"
  },
  "xbD67KVlt3UhHpKh8HLx8": {
    mentalModel: "死锁是'互相等待'：事务 A 等 B 释放锁，B 等 A 释放锁。",
    sections: [
      { title: "死锁原因", content: "两个事务互相等待对方释放锁。数据库会自动检测并终止一个事务。" },
      { title: "避免死锁", content: "1. 按相同顺序访问表。2. 事务尽量短。3. 用合适的索引。" }
        ],

    diagnosis: [
{
                "symptom": "Gap Lock 阻塞并发插入",
                "cause": "REPEATABLE READ→锁索引间隙→无法在该间隙插",
                "fix": "READ COMMITTED(无 Gap Lock)。乐观锁。缩小事务"
        },
        {
                "symptom": "SHOW ENGINE INNODB STATUS 难读",
                "cause": "半结构化死锁文本",
                "fix": "pt-deadlock-logger。8.0 performance_schema.data_locks"
        }
    ],

    exercises: [
      { level: '进阶', task: "查看死锁日志", answer: "SHOW ENGINE INNODB STATUS; -- MySQL" }
    ],
    summary: "死锁：互相等待。避免：按相同顺序访问表，事务尽量短。"
  },
  "4rqCPpTb0dAgpheBKshRG": {
    mentalModel: "连接池是'复用连接'：避免频繁创建/关闭数据库连接。",
    sections: [
      { title: "连接池原理", content: "预先创建一组连接，应用从池中借用连接，用完归还。避免频繁创建/关闭连接的开销。" },
      { title: "配置", content: "最大连接数、最小空闲连接数、连接超时时间。" }
        ],

    diagnosis: [
{
                "symptom": "pool size 过大→DB 连接超限",
                "cause": "10 实例 x50=500→max_connections=151 打满",
                "fix": "pool size=connections/实例数-5。HikariCP 默认=CPUx2"
        },
        {
                "symptom": "连接池无 timeout→请求阻塞",
                "cause": "池满无可用→无限等",
                "fix": "connectionTimeout。leakDetectionThreshold"
        }
    ],

    exercises: [
      { level: '进阶', task: "配置连接池（示例）", answer: "# application.properties\nspring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.minimum-idle=5" }
    ],
    summary: "连接池复用连接，避免频繁创建/关闭。配置最大连接数、最小空闲连接数。"
  },
  "aJJjaGunRrwyh9MjQfJt-": {
    mentalModel: "分库分表是'水平扩展'：把数据分散到多个数据库/表。",
    sections: [
      { title: "分库", content: "把数据分散到多个数据库。按用户 ID 分片：user_id % 10 决定用哪个库。" },
      { title: "分表", content: "把大表拆成多个小表。按时间分表：2024_01_orders, 2024_02_orders。" }
        ],

    diagnosis: [
{
                "symptom": "分片后全局唯一 ID 困难",
                "cause": "多分片各自自增→同 ID 可能冲突",
                "fix": "Snowflake/Leaf 分布式 ID。UUID v7"
        },
        {
                "symptom": "分表后全局排序分页复杂",
                "cause": "数据分散 10 表→需归并排序",
                "fix": "选排序键当分表键。ShardingSphere 中间件"
        }
    ],

    exercises: [
      { level: '进阶', task: "设计分库策略", answer: "# 按 user_id 分 10 个库\nshard = user_id % 10\n# user_id=123 -> 库 3" }
    ],
    summary: "分库分表水平扩展。分库：按 user_id 分片。分表：按时间分表。"
  },
  "BcXdxY6bld5c0YNFSKkh-": {
    mentalModel: "读写分离是'分散压力'：写操作用主库，读操作用从库。",
    sections: [
      { title: "读写分离原理", content: "主库处理写操作（INSERT/UPDATE/DELETE），从库处理读操作（SELECT）。主库同步到从库。" },
      { title: "使用场景", content: "读多写少的场景。读操作远多于写操作时，读写分离可以分散压力。" }
        ],

    diagnosis: [
{
                "symptom": "主从切换数据丢失",
                "cause": "最后几秒 binlog 未传从库",
                "fix": "半同步 replication。MGR 多数派。监控延迟"
        },
        {
                "symptom": "写后立刻读从→读到旧数据",
                "cause": "复制延迟",
                "fix": "写后读走主库。容忍延迟场景读从库"
        }
    ],

    exercises: [
      { level: '进阶', task: "配置读写分离（概念）", answer: "# 主库：写操作\nINSERT INTO users (name) VALUES ('Alice');\n# 从库：读操作\nSELECT * FROM users;" }
    ],
    summary: "读写分离：写操作用主库，读操作用从库。读多写少时使用。"
  },
  "pJtYvXUo81aZfPuRjIbMq": {
    mentalModel: "缓存是'加速查询'：把常用数据放在内存中。",
    sections: [
      { title: "缓存原理", content: "把常用数据放在内存中（如 Redis），避免频繁查询数据库。" },
      { title: "缓存策略", content: "Cache Aside：先查缓存，没有再查数据库并写入缓存。Write Through：写缓存同时写数据库。" }
        ],

    diagnosis: [
{
                "symptom": "缓存与 DB 不一致→旧值",
                "cause": "更新 DB 忘失效缓存",
                "fix": "Cache Aside:先改 DB→再删缓存。短 TTL 兜底"
        },
        {
                "symptom": "热点 key→单机网卡打满",
                "cause": "热门商品→大量请求单机",
                "fix": "本地缓存 Caffeine。Redis Cluster。热点多副本"
        }
    ],

    exercises: [
      { level: '进阶', task: "Cache Aside 模式", answer: "# 伪代码\nif cache.has(key):\n    return cache.get(key)\nelse:\n    data = db.query(key)\n    cache.set(key, data)\n    return data" }
    ],
    summary: "缓存加速查询。Cache Aside：先查缓存，没有再查数据库并写入缓存。"
  },
  "zW27ZHdLwQY-85iqbBKQZ": {
    mentalModel: "消息队列是'异步处理'：生产者发送消息，消费者异步处理。",
    sections: [
      { title: "消息队列原理", content: "生产者发送消息到队列，消费者异步处理。解耦、削峰、异步。" },
      { title: "使用场景", content: "异步处理（发邮件）、削峰（限流）、解耦（订单服务发送消息，库存服务消费）。" }
        ],

    diagnosis: [
{
                "symptom": "消息丢失→生产者发了消费未收",
                "cause": "fire-and-forget 不等确认→丢包/Broker 宕机",
                "fix": "Producer ACK。持久化消息。Kafka acks=all+min.insync"
        },
        {
                "symptom": "消息顺序乱→跨分区无序",
                "cause": "同一用户消息被不同分区消费",
                "fix": "同分区键 user_id。单分区有序。消费端重排"
        }
    ],

    exercises: [
      { level: '进阶', task: "消息队列使用场景", answer: "# 订单创建后异步发邮件\n# 生产者：\norder = create_order(data)\nqueue.send('order_created', order.id)\n# 消费者：\norder_id = queue.receive()\nsend_email(order_id)" }
    ],
    summary: "消息队列：生产者发送消息，消费者异步处理。解耦、削峰、异步。"
  },
  "C6P69YiFdS-ioPXMNfX07": {
    mentalModel: "CAP 定理是'分布式系统的权衡'：一致性（C）、可用性（A）、分区容忍（P），三者最多满足两个。",
    sections: [
      { title: "CAP 定理", content: "一致性（所有节点数据一致）、可用性（每个请求都有响应）、分区容忍（网络分区时仍能工作）。三者最多满足两个。" },
      { title: "CP vs AP", content: "CP：保证一致性，牺牲可用性（如 ZooKeeper）。AP：保证可用性，牺牲一致性（如 Cassandra）。" }
        ],

    diagnosis: [
{
                "symptom": "AP 系统(Cassandra)做交易→数据冲突",
                "cause": "网络分区→多节点同时接受写入",
                "fix": "交易/支付用 CP。AP 适合社交/日志"
        },
        {
                "symptom": "CAP 当唯一选型依据→忽略其他因素",
                "cause": "只看三个字母→忽略延迟/运维/团队/生态",
                "fix": "综合评估:团队/运维/性能/社区/监控"
        }
    ],

    exercises: [
      { level: '进阶', task: "CAP 定理理解", answer: "# CP 系统：ZooKeeper\n# 保证一致性，网络分区时可能拒绝服务\n# AP 系统：Cassandra\n# 保证可用性，数据可能暂时不一致" }
    ],
    summary: "CAP 定理：一致性、可用性、分区容忍，三者最多满足两个。CP vs AP。"
  },
  "tBvXLLp5FKeSSN35Kj1X4": {
    mentalModel: "ACID 是'事务特性'：原子性（A）、一致性（C）、隔离性（I）、持久性（D）。",
    sections: [
      { title: "ACID 特性", content: "原子性（全部成功或全部失败）、一致性（数据合法）、隔离性（事务互不干扰）、持久性（提交后永久保存）。" }
        ],

    diagnosis: [
{
                "symptom": "DDL 在事务中→隐式提交前操作",
                "cause": "BEGIN;INSERT;CREATE TABLE;COMMIT;→CREATE 前自动提交",
                "fix": "DDL 和 DML 不在同事务"
        },
        {
                "symptom": "长事务 1h 未提交→undo log 膨胀",
                "cause": "purge 线程无法清理",
                "fix": "监控 INNODB_TRX。max_execution_time。小事务"
        }
    ],

    exercises: [
      { level: '基础', task: "ACID 理解", answer: "# 转账事务\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n# 原子性：两个 UPDATE 要么都成功，要么都失败" }
    ],
    summary: "ACID：原子性、一致性、隔离性、持久性。"
  },
  "9wOgP0i9G4HSeZGn2Gm7r": {
    mentalModel: "BASE 是'最终一致性'：基本可用、软状态、最终一致性。NoSQL 常用。",
    sections: [
      { title: "BASE 特性", content: "基本可用（系统基本可用）、软状态（状态可能变化）、最终一致性（最终数据一致）。NoSQL 常用。" },
      { title: "BASE vs ACID", content: "ACID 强一致性（关系型数据库），BASE 最终一致性（NoSQL）。BASE 牺牲一致性换取可用性和扩展性。" }
        ],

    diagnosis: [
{
                "symptom": "补偿任务失败→退款未执行",
                "cause": "调支付网关超时→补偿失败",
                "fix": "重试+指数退避。失败人工工单。补偿日志"
        },
        {
                "symptom": "BASE 被当借口→实际需 ACID 却用最终一致",
                "cause": "不擅长事务→\"用 BASE\"→实际需强一致",
                "fix": "诚实评估业务。金融用 ACID。社交用 BASE。同一系统不同策略"
        }
    ],

    exercises: [
      { level: '进阶', task: "BASE vs ACID", answer: "# ACID：关系型数据库\n# 强一致性，但扩展性差\n# BASE：NoSQL\n# 最终一致性，扩展性好" }
    ],
    summary: "BASE：基本可用、软状态、最终一致性。NoSQL 常用。牺牲一致性换取可用性。"
  },
  "TjgwabhEtaSoYMLNr6q9l": {
    mentalModel: "NoSQL 是'非关系型数据库'：灵活 schema、高扩展性。",
    sections: [
      { title: "NoSQL 类型", content: "键值（Redis）、文档（MongoDB）、列族（Cassandra）、图（Neo4j）。" },
      { title: "NoSQL vs SQL", content: "SQL：结构化数据、复杂查询、事务。NoSQL：灵活 schema、高扩展性、高并发。" }
        ],

    diagnosis: [
{
                "symptom": "NoSQL 用多次查询模拟 JOIN",
                "cause": "先查 user→再查 orders→再查 products→3 次查询",
                "fix": "Embedding 嵌入数据。$lookup 管道。JOIN 密集用 SQL"
        },
        {
                "symptom": "多文档操作部分成功→数据不一致",
                "cause": "MongoDB 4.0 前无事务→扣库存成功订单失败",
                "fix": "4.0+ 多文档事务。两阶段提交模式"
        }
    ],

    exercises: [
      { level: '基础', task: "NoSQL 类型", answer: "# 键值：Redis\nSET key value\n# 文档：MongoDB\ndb.users.insert({name: 'Alice', age: 25})" }
    ],
    summary: "NoSQL：键值、文档、列族、图。灵活 schema、高扩展性。"
  },
  "C0dhS6uLf4TUSfvcWyXhv": {
    mentalModel: "Redis 是'内存数据库'：数据在内存中，读写极快。",
    sections: [
      { title: "Redis 数据类型", content: "String、Hash、List、Set、Sorted Set。" },
      { title: "Redis 使用场景", content: "缓存、会话、排行榜、计数器、消息队列。" }
        ],

    diagnosis: [
{
                "symptom": "Redis 全量缓存→内存成本近 DB 磁盘",
                "cause": "所有数据都缓存",
                "fix": "只缓存热数据(20/80)。TTL 淘汰。监控 key 数"
        },
        {
                "symptom": "RDB 持久化 fork→内存翻倍 OOM",
                "cause": "COW→fork 子进程内存翻倍",
                "fix": "预留 1.5x 内存。低峰持久化。关闭 THP"
        }
    ],

    exercises: [
      { level: '基础', task: "Redis 基本操作", answer: "# 设置值\nSET user:1:name Alice\n# 获取值\nGET user:1:name\n# 设置过期时间（秒）\nEXPIRE user:1:name 3600" }
    ],
    summary: "Redis：内存数据库，读写极快。数据类型：String、Hash、List、Set、Sorted Set。"
  },
  "UDqbT1y-YzBrljfKSz_RG": {
    mentalModel: "MongoDB 是'文档数据库'：数据以 JSON 文档存储。",
    sections: [
      { title: "MongoDB 特点", content: "文档存储（JSON）、灵活 schema、高扩展性。" },
      { title: "MongoDB 操作", content: "db.collection.insert()、find()、update()、remove()。" }
        ],

    diagnosis: [
{
                "symptom": "MongoDB 索引超 RAM→磁盘 IO",
                "cause": "working set>RAM",
                "fix": "监控 working set。加 RAM 或分片。删无用索引"
        },
        {
                "symptom": "write concern w:1→主宕丢数据",
                "cause": "只写主节点就返回",
                "fix": "关键数据 w:majority(多数确认)"
        }
    ],

    exercises: [
      { level: '基础', task: "MongoDB 基本操作", answer: "// 插入\ndb.users.insertOne({name: 'Alice', age: 25})\n// 查询\ndb.users.find({age: {$gt: 18}})\n// 更新\ndb.users.updateOne({name: 'Alice'}, {$set: {age: 26}})" }
    ],
    summary: "MongoDB：文档数据库，JSON 存储，灵活 schema。"
  },
  "nwFaz9i-1s0WVrVaFsoqb": {
    mentalModel: "GraphQL 是'查询语言'：客户端指定需要的数据，避免过度获取。",
    sections: [
      { title: "GraphQL vs REST", content: "REST：固定端点，返回固定数据。GraphQL：客户端指定需要的字段，避免过度获取。" },
      { title: "GraphQL 查询", content: "query { user(id: 1) { name email } }。只获取 name 和 email。" }
        ],

    diagnosis: [
{
                "symptom": "GraphQL 复杂度失控→几百次查询",
                "cause": "深层嵌套→级联加载",
                "fix": "深度限制+复杂度分析。Persisted Queries。DataLoader"
        },
        {
                "symptom": "schema 删除字段→旧 App 报错",
                "cause": "后端删字段→客户端仍在查",
                "fix": "标记 @deprecated。版本化 schema"
        }
    ],

    exercises: [
      { level: '进阶', task: "GraphQL 查询", answer: "query {\n  user(id: 1) {\n    name\n    email\n    posts {\n      title\n    }\n  }\n}" }
    ],
    summary: "GraphQL：客户端指定需要的数据，避免过度获取。"
  },
  "UVTgbZrqpbYl1bQvQejcF": {
    mentalModel: "WebSocket 是'全双工通信'：客户端和服务器可以互相发送消息。",
    sections: [
      { title: "WebSocket vs HTTP", content: "HTTP：客户端请求，服务器响应（单向）。WebSocket：全双工，客户端和服务器可以互相发送消息。" },
      { title: "使用场景", content: "实时聊天、实时通知、在线游戏。" }
        ],

    diagnosis: [
{
                "symptom": "WebSocket 连接数超 fd 限制",
                "cause": "ulimit 1024→超限无法新建",
                "fix": "ulimit -n 65535。SSE 替代单向推送"
        },
        {
                "symptom": "服务器重启→重连风暴",
                "cause": "所有客户端同时重连",
                "fix": "随机退避+jitter。服务器限流"
        }
    ],

    exercises: [
      { level: '进阶', task: "WebSocket 使用场景", answer: "# 实时聊天\n# 客户端发送消息\nws.send('Hello')\n# 服务器推送消息\nws.onmessage = (msg) => console.log(msg)" }
    ],
    summary: "WebSocket：全双工通信，客户端和服务器互相发送消息。实时聊天、通知。"
  },
  // Stage 补充 - 剩余 3 个节点
  "tedQynR0xicVKhuR1oahw": {
    mentalModel: "CTE 是'临时结果集'：WITH 子句创建临时结果集，简化复杂查询。",
    sections: [
      { title: "CTE 语法", content: "WITH cte_name AS (SELECT ...) SELECT * FROM cte_name。CTE 是临时结果集，只在当前查询中有效。" },
      { title: "使用场景", content: "简化复杂查询、递归查询、提高可读性。如：WITH active_users AS (SELECT * FROM users WHERE active = true) SELECT * FROM active_users。" }
        ],

    diagnosis: [
{
                "symptom": "递归 CTE 数据有环→死循环",
                "cause": "A->B->C->A 无限递归",
                "fix": "depth<100。数组记录路径检测环"
        },
        {
                "symptom": "CTE 被多次引用→每次重执行",
                "cause": "同一 CTE 引用 3 次=执行 3 次",
                "fix": "MATERIALIZED 提示。临时表确保一次"
        }
    ],

    exercises: [
      { level: '基础', task: "使用 CTE 查询活跃用户", answer: "WITH active_users AS (\n  SELECT * FROM users WHERE active = true\n)\nSELECT * FROM active_users;" },
      { level: '进阶', task: "递归 CTE 查询组织架构", answer: "WITH RECURSIVE org AS (\n  SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id FROM employees e JOIN org o ON e.manager_id = o.id\n)\nSELECT * FROM org;" }
    ],
    summary: "CTE (WITH) 创建临时结果集，简化复杂查询。递归 CTE 用于树形结构查询。"
  },
  "w53CSY53nAAN0ux-XeJ4c": {
    mentalModel: "Selective Projection 是'选择性投影'：只查询需要的列，避免 SELECT *。",
    sections: [
      { title: "Selective Projection", content: "只 SELECT 需要的列，避免 SELECT *。减少数据传输、提高性能、节省内存。" },
      { title: "使用场景", content: "大表查询时只选择需要的列。如：SELECT name, email FROM users 而不是 SELECT * FROM users。" }
        ],

    diagnosis: [
{
                "symptom": "选择性投影→覆盖索引失效",
                "cause": "SELECT a,b 需回表→索引 INDEX(c)不够",
                "fix": "INDEX(c,a,b)覆盖索引→Using index"
        },
        {
                "symptom": "ORM 默认 SELECT *→改不动",
                "cause": "User.find()默认全列",
                "fix": ".select(['id','name'])限定"
        }
    ],

    exercises: [
      { level: '基础', task: "只查询用户名和邮箱", answer: "SELECT name, email FROM users;" },
      { level: '进阶', task: "查询订单信息，只选择必要列", answer: "SELECT id, user_id, total, created_at FROM orders WHERE total > 100;" }
    ],
    summary: "Selective Projection：只 SELECT 需要的列，避免 SELECT *。提高性能、节省内存。"
  },
  "z5Sf0VU14ZCQ80kL1qOqc": {
    mentalModel: "Dynamic SQL 是'动态生成 SQL'：根据条件动态生成 SQL 语句。",
    sections: [
      { title: "Dynamic SQL 语法", content: "EXECUTE IMMEDIATE 'SQL 语句'。根据条件动态生成 SQL。如：EXECUTE IMMEDIATE 'SELECT * FROM users WHERE id = ' || id。" },
      { title: "使用场景", content: "动态查询、动态表名、动态列名。如：根据用户输入动态生成查询条件。" }
        ],

    diagnosis: [
{
                "symptom": "动态 SQL 拼接→注入",
                "cause": "sql=\"SELECT * FROM \"+tableName+\" WHERE id=\"+id",
                "fix": "ORM/Query Builder。白名单验表名。参数化"
        },
        {
                "symptom": "EXECUTE IMMEDIATE 每次硬解析",
                "cause": "动态 SQL 拼字符串→无绑定变量",
                "fix": "PREPARE+EXECUTE 组合。减少动态 SQL"
        }
    ],

    exercises: [
      { level: '进阶', task: "动态查询用户", answer: "DECLARE\n  sql_stmt VARCHAR2(200);\nBEGIN\n  sql_stmt := 'SELECT * FROM users WHERE id = ' || 1;\n  EXECUTE IMMEDIATE sql_stmt;\nEND;" },
      { level: '进阶', task: "动态表名查询", answer: "DECLARE\n  table_name VARCHAR2(50) := 'users';\n  sql_stmt VARCHAR2(200);\nBEGIN\n  sql_stmt := 'SELECT * FROM ' || table_name;\n  EXECUTE IMMEDIATE sql_stmt;\nEND;" }
    ],
    summary: "Dynamic SQL 动态生成 SQL 语句。EXECUTE IMMEDIATE 执行动态 SQL。用于动态查询、动态表名。"
  }
};

