import type { DeepTutorial } from '../deep-types';

export const SQL_DEEP_TUTORIALS_6: Record<string, DeepTutorial> = {
  "LX9nzJ4uqznHN4SksoDvr": {
    mentalModel: "聚合查询是'统计数据'：COUNT 计数，SUM 求和，AVG 平均值，MAX 最大值，MIN 最小值。",
    sections: [
      {
        title: "COUNT 计数",
        content: "COUNT(*) 计行数，COUNT(列名) 计非空值数。配合 GROUP BY 分组计数。"
      },
      {
        title: "SUM 求和",
        content: "SUM(列名) 求和。只用于数值列。配合 GROUP BY 分组求和。"
      },
      {
        title: "AVG 平均值",
        content: "AVG(列名) 求平均值。只用于数值列。配合 GROUP BY 分组求平均。"
      },
      {
        title: "MAX/MIN",
        content: "MAX(列名) 找最大值，MIN(列名) 找最小值。可用于数值、字符串、日期。"
      }
        ],

    diagnosis: [
{
                "symptom": "多聚合函数一起用查询超 5 秒",
                "cause": "COUNT+SUM+AVG+MAX+MIN 可能多次扫描",
                "fix": "一次扫描计算多个聚合。确保 WHERE 走索引缩小扫描范围"
        },
        {
                "symptom": "AVG(INT) 小数被截断",
                "cause": "整数相除返回整数",
                "fix": "AVG(CAST(age AS DECIMAL))或 AVG(age*1.0)"
        }
    ],

    exercises: [
      { level: '基础', task: "统计用户总数", answer: "SELECT COUNT(*) FROM users;" },
      { level: '基础', task: "计算订单总金额", answer: "SELECT SUM(total) FROM orders;" },
      { level: '进阶', task: "按类别统计商品数和平均价格", answer: "SELECT category, COUNT(*), AVG(price) FROM products GROUP BY category;" },
      { level: '进阶', task: "找订单数大于 10 的用户", answer: "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 10;" }
    ],
    summary: "聚合函数：COUNT 计数，SUM 求和，AVG 平均，MAX/MIN 最大最小值。配合 GROUP BY 分组统计。"
  },

  "YqDJq3fPxUZlwsdq0kJg7": {
    mentalModel: "MAX 是'最大值'：MAX(列名) 找出列的最大值。",
    sections: [
      {
        title: "MAX 语法",
        content: "SELECT MAX(列名) FROM 表名。可用于数值、字符串、日期。NULL 值被忽略。"
      },
      {
        title: "配合 GROUP BY",
        content: "SELECT category, MAX(price) FROM products GROUP BY category。按类别找最大值。"
      },
      {
        title: "常见错误",
        content: "MAX 用于字符串时按字典序。NULL 值被忽略。MAX 大表很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "SELECT name,MAX(created_at) 非聚合列不对应最值行",
                "cause": "ONLY_FULL_GROUP_BY 关闭→返回组内任意行",
                "fix": "ROW_NUMBER()OVER(PARTITION BY dept ORDER BY created_at DESC)rn,WHERE rn=1"
        },
        {
                "symptom": "MAX 大表扫描慢",
                "cause": "无合适索引→全表扫描",
                "fix": "MAX 列建索引→B-Tree 读最右叶子(O(log n))"
        }
    ],

    exercises: [
      { level: '基础', task: "找最高价格", answer: "SELECT MAX(price) FROM products;" },
      { level: '进阶', task: "按类别找最高价格", answer: "SELECT category, MAX(price) FROM products GROUP BY category;" }
    ],
    summary: "MAX(列名) 找最大值。可用于数值、字符串、日期。配合 GROUP BY 分组找最大值。"
  },

  "DHz6sRLYhFeCbAcNJS8hm": {
    mentalModel: "外键是'表之间的关系'：FOREIGN KEY 约束保证引用完整性。",
    sections: [
      {
        title: "外键语法",
        content: "FOREIGN KEY (列名) REFERENCES 表名(列名)。保证引用的行存在。"
      },
      {
        title: "级联操作",
        content: "ON DELETE CASCADE 删除时级联删除。ON UPDATE CASCADE 更新时级联更新。"
      },
      {
        title: "常见错误",
        content: "外键引用不存在的行会报错。删除被引用的行会报错（除非 CASCADE）。外键影响性能。"
      }
        ],

    diagnosis: [
{
                "symptom": "插入报 Cannot add child row:FK fails",
                "cause": "外键值对应的父键不存在",
                "fix": "先插父行。或外键列允许 NULL。正确的事务顺序"
        },
        {
                "symptom": "DELETE 父行+CASCADE 删光子表数据",
                "cause": "一个用户几千订单全部自动删除",
                "fix": "生产慎用 CASCADE。ON DELETE RESTRICT。用软删除 is_deleted=1"
        }
    ],

    exercises: [
      { level: '基础', task: "创建带外键的表", answer: "CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));" },
      { level: '进阶', task: "创建级联删除的外键", answer: "CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);" }
    ],
    summary: "FOREIGN KEY 保证引用完整性。ON DELETE CASCADE 级联删除。外键影响性能。"
  },

  "Zw8IHfCCMSxmVjx5Ho5ff": {
    mentalModel: "GROUP BY 是'分组'：把数据按某列分组，每组一行结果。",
    sections: [
      {
        title: "GROUP BY 语法",
        content: "SELECT 列, COUNT(*) FROM 表 GROUP BY 列。按列分组，每组一行。"
      },
      {
        title: "配合聚合函数",
        content: "GROUP BY 配合 COUNT, SUM, AVG, MAX, MIN。每个分组计算一次。"
      },
      {
        title: "常见错误",
        content: "SELECT 的非聚合列必须在 GROUP BY 中。GROUP BY 大表很慢（没有索引时）。"
      }
        ],

    diagnosis: [
{
                "symptom": "GROUP BY 返回\"重复\"分组键",
                "cause": "大小写不同→Alice@x.com vs alice@x.com",
                "fix": "GROUP BY LOWER(email)。整理数据统一大小写"
        },
        {
                "symptom": "GROUP BY 后行数远少于预期",
                "cause": "WHERE 或 INNER JOIN 过滤了数据",
                "fix": "检查条件。确认 JOIN 类型。用 COUNT(*) 验证各阶段行数"
        }
    ],

    exercises: [
      { level: '基础', task: "按城市统计用户数", answer: "SELECT city, COUNT(*) FROM users GROUP BY city;" },
      { level: '进阶', task: "按类别统计商品数和平均价格", answer: "SELECT category, COUNT(*), AVG(price) FROM products GROUP BY category;" }
    ],
    summary: "GROUP BY 列名分组。配合聚合函数（COUNT, SUM, AVG）。SELECT 的非聚合列必须在 GROUP BY 中。"
  },

  "5yGo8i7eplxtXOD_qfzOs": {
    mentalModel: "UNIQUE 是'唯一约束'：保证列值唯一，不能重复。",
    sections: [
      {
        title: "UNIQUE 语法",
        content: "CREATE TABLE 时加 UNIQUE 约束。ALTER TABLE ADD CONSTRAINT 加唯一约束。"
      },
      {
        title: "UNIQUE vs PRIMARY KEY",
        content: "UNIQUE 允许 NULL（但只能有一个 NULL），PRIMARY KEY 不允许 NULL。一个表可以有多个 UNIQUE，但只能有一个 PRIMARY KEY。"
      },
      {
        title: "常见错误",
        content: "插入重复值会报错。UNIQUE 列可以有多个 NULL（某些数据库）。"
      }
        ],

    diagnosis: [
{
                "symptom": "ON DUPLICATE KEY UPDATE 更新了不该更新的行",
                "cause": "多个唯一索引冲突→任一冲突触发 UPDATE",
                "fix": "明确冲突约束。或分拆 INSERT/UPDATE 逻辑"
        },
        {
                "symptom": "唯一索引允许插入多个 NULL",
                "cause": "NULL!=NULL→UNIQUE 不阻止多个 NULL",
                "fix": "加 NOT NULL 约束。或部分唯一索引 WHERE col IS NOT NULL(PostgreSQL)"
        }
    ],

    exercises: [
      { level: '基础', task: "创建带 UNIQUE 约束的表", answer: "CREATE TABLE users (id INT PRIMARY KEY, email VARCHAR(100) UNIQUE);" },
      { level: '进阶', task: "给现有表加 UNIQUE 约束", answer: "ALTER TABLE users ADD CONSTRAINT uk_email UNIQUE (email);" }
    ],
    summary: "UNIQUE 保证列值唯一。允许 NULL（但只能一个）。一个表可以有多个 UNIQUE。"
  },

  "HhICJpCK5__b-itUoEBES": {
    mentalModel: "HAVING 是'分组后的 WHERE'：WHERE 过滤行，HAVING 过滤分组。",
    sections: [
      {
        title: "HAVING vs WHERE",
        content: "WHERE 在 GROUP BY 之前过滤行。HAVING 在 GROUP BY 之后过滤分组。HAVING 可以用聚合函数（COUNT, SUM）。"
      },
      {
        title: "使用场景",
        content: "SELECT category, COUNT(*) FROM products GROUP BY category HAVING COUNT(*) > 5。找商品数大于 5 的类别。"
      },
      {
        title: "常见错误",
        content: "HAVING 必须配合 GROUP BY。HAVING 不能用列别名（某些数据库）。WHERE 不能用聚合函数。"
      }
        ],

    diagnosis: [
{
                "symptom": "WHERE COUNT(*)>5 报 Invalid use of group function",
                "cause": "WHERE 在 GROUP BY 前→不能用聚合",
                "fix": "HAVING COUNT(*)>5。行级用 WHERE，组级用 HAVING"
        },
        {
                "symptom": "HAVING 结果行数比预期多",
                "cause": "比较方向写反→HAVING COUNT(*)<100 写成 >100",
                "fix": "先查各组的 COUNT 值再定阈值"
        }
    ],

    exercises: [
      { level: '基础', task: "找订单数大于 10 的用户", answer: "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 10;" },
      { level: '进阶', task: "找平均价格大于 100 的类别", answer: "SELECT category, AVG(price) FROM products GROUP BY category HAVING AVG(price) > 100;" }
    ],
    summary: "HAVING 过滤分组（在 GROUP BY 之后）。可以用聚合函数。WHERE 不能用聚合函数。"
  },

  "M4M_-vjM9GNy0NmXZneDA": {
    mentalModel: "NOT NULL 是'非空约束'：保证列不能为 NULL。",
    sections: [
      {
        title: "NOT NULL 语法",
        content: "CREATE TABLE 时加 NOT NULL 约束。ALTER TABLE MODIFY 加 NOT NULL。"
      },
      {
        title: "常见错误",
        content: "插入 NULL 值会报错。ALTER TABLE 加 NOT NULL 时，现有行不能有 NULL 值。"
      }
        ],

    diagnosis: [
{
                "symptom": "ALTER ADD NOT NULL 失败——现有 NULL",
                "cause": "表已有 NULL 行",
                "fix": "先处理 NULL→UPDATE t SET col='' WHERE col IS NULL。再 ALTER"
        },
        {
                "symptom": "NOT NULL 列仍能插空字符串",
                "cause": "NOT NULL 只拦 NULL——''≠NULL",
                "fix": "CHECK(col IS NOT NULL AND col!='')"
        }
    ],

    exercises: [
      { level: '基础', task: "创建带 NOT NULL 约束的表", answer: "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100) NOT NULL);" },
      { level: '进阶', task: "给现有表加 NOT NULL 约束", answer: "ALTER TABLE users MODIFY name VARCHAR(100) NOT NULL;" }
    ],
    summary: "NOT NULL 保证列不能为 NULL。插入 NULL 会报错。"
  },

  "qBios3sZVhcJMpXmj9f7B": {
    mentalModel: "数据约束是'规则'：PRIMARY KEY, UNIQUE, NOT NULL, FOREIGN KEY, CHECK 保证数据完整性。",
    sections: [
      {
        title: "约束类型",
        content: "PRIMARY KEY 主键（唯一+非空），UNIQUE 唯一，NOT NULL 非空，FOREIGN KEY 外键，CHECK 检查条件。"
      },
      {
        title: "使用场景",
        content: "PRIMARY KEY 每行唯一标识。UNIQUE 防止重复（如邮箱）。NOT NULL 必填字段。FOREIGN KEY 保证引用完整性。CHECK 限制值范围。"
      },
      {
        title: "常见错误",
        content: "违反约束会报错。约束太多影响性能（INSERT/UPDATE/DELETE 变慢）。"
      }
        ],

    diagnosis: [
{
                "symptom": "多约束→INSERT 性能下降",
                "cause": "每条 INSERT 检查 PK+UNIQUE+FK+CHECK",
                "fix": "必要约束才加。批量导入临时禁用约束检查"
        },
        {
                "symptom": "CHECK 约束在 MySQL 5.7 不生效",
                "cause": "5.7 解析 CHECK 但忽略",
                "fix": "MySQL 8.0+ 原生支持。5.7 用触发器或应用层校验"
        }
    ],

    exercises: [
      { level: '基础', task: "创建带多种约束的表", answer: "CREATE TABLE users (id INT PRIMARY KEY, email VARCHAR(100) UNIQUE NOT NULL, age INT CHECK (age >= 0));" },
      { level: '进阶', task: "创建带外键的表", answer: "CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));" }
    ],
    summary: "约束：PRIMARY KEY, UNIQUE, NOT NULL, FOREIGN KEY, CHECK。保证数据完整性。约束太多影响性能。"
  },

  "Q0h9Wfnl_W9ThOkv7Q17A": {
    mentalModel: "CHECK 是'检查约束'：限制列值必须满足条件。",
    sections: [
      {
        title: "CHECK 语法",
        content: "CREATE TABLE 时加 CHECK 约束。CHECK (age >= 0) 限制年龄非负。"
      },
      {
        title: "常见错误",
        content: "插入不满足条件的值会报错。ALTER TABLE 加 CHECK 时，现有行必须满足条件。"
      }
        ],

    diagnosis: [
{
                "symptom": "CHECK 太严格→合法数据被拒",
                "cause": "CHECK(age>=0 AND age<=150)→120 岁老人被拒",
                "fix": "留 buffer:CHECK(age>=0 AND age<=200)。边界值测试"
        },
        {
                "symptom": "ALTER ADD CHECK 对现有数据不生效",
                "cause": "某些版本加 CHECK 不验证现有行",
                "fix": "先查违规数据。PostgreSQL:ADD CONSTRAINT...NOT VALID→VALIDATE"
        }
    ],

    exercises: [
      { level: '基础', task: "创建带 CHECK 约束的表", answer: "CREATE TABLE users (id INT PRIMARY KEY, age INT CHECK (age >= 0));" },
      { level: '进阶', task: "给现有表加 CHECK 约束", answer: "ALTER TABLE users ADD CONSTRAINT chk_age CHECK (age >= 0);" }
    ],
    summary: "CHECK 限制列值必须满足条件。插入不满足条件的值会报错。"
  },

  "eXQ-TrTlqL5p2AdGnozkL": {
    mentalModel: "子查询是'查询中的查询'：SELECT ... WHERE 列 IN (SELECT ...)。",
    sections: [
      {
        title: "子查询语法",
        content: "子查询放在 WHERE、FROM、HAVING 中。WHERE 列 IN (SELECT ...) 最常用。"
      },
      {
        title: "使用场景",
        content: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > 1000)。找订单金额大于 1000 的用户。"
      },
      {
        title: "常见错误",
        content: "子查询性能差（尤其是 IN 子查询）。子查询返回多列时会报错（除非用 IN）。"
      }
        ],

    diagnosis: [
{
                "symptom": "IN(SELECT...)大结果集极慢",
                "cause": "MySQL 5.7 子查询物化到临时表再 JOIN→磁盘 IO 高",
                "fix": "改 EXISTS:WHERE EXISTS(SELECT 1 FROM t WHERE t.id=outer.id)"
        },
        {
                "symptom": "NOT IN+NULL→结果为空",
                "cause": "NOT IN(1,2,NULL)永远返回空",
                "fix": "子查询加 WHERE col IS NOT NULL。或 NOT EXISTS"
        }
    ],

    exercises: [
      { level: '基础', task: "找下过订单的用户", answer: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);" },
      { level: '进阶', task: "找订单金额大于 1000 的用户", answer: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > 1000);" }
    ],
    summary: "子查询：SELECT ... WHERE 列 IN (SELECT ...)。性能差时用 JOIN 替代。"
  },

  "wmtt-3auWLdQWuVdwZLPd": {
    mentalModel: "列是'表的字段'：每列有名称和数据类型。",
    sections: [
      {
        title: "列定义",
        content: "CREATE TABLE 时定义列：列名 数据类型 [约束]。"
      },
      {
        title: "ALTER COLUMN",
        content: "ALTER TABLE MODIFY COLUMN 改列类型。ALTER TABLE DROP COLUMN 删列。"
      }
        ],

    diagnosis: [
{
                "symptom": "DROP COLUMN 后应用报 Unknown column",
                "cause": "ORM/代码中仍有引用",
                "fix": "搜代码库全部引用。过渡期标记 deprecated。再删除"
        },
        {
                "symptom": "MODIFY COLUMN 后索引失效",
                "cause": "改类型可能导致索引被重建或删除",
                "fix": "ALTER 后 SHOW INDEX 检查。用 pt-online-schema-change 保留索引"
        }
    ],

    exercises: [
      { level: '基础', task: "创建带多列的表", answer: "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100), age INT, email VARCHAR(100));" }
    ],
    summary: "列定义：列名 数据类型 约束。ALTER TABLE 改列。"
  },

  "aLDl75i8gtLRA2Ud-fMmQ": {
    mentalModel: "行是'表中的一条记录'：每行有唯一的主键。",
    sections: [
      {
        title: "INSERT 插入行",
        content: "INSERT INTO 表 (列) VALUES (值)。一次插入一行或多行。"
      },
      {
        title: "UPDATE 更新行",
        content: "UPDATE 表 SET 列=值 WHERE 条件。更新满足条件的行。"
      },
      {
        title: "DELETE 删除行",
        content: "DELETE FROM 表 WHERE 条件。删除满足条件的行。"
      }
        ],

    diagnosis: [
{
                "symptom": "DELETE 后自增 ID 出现空洞",
                "cause": "DELETE 不重置 AUTO_INCREMENT",
                "fix": "正常行为，ID 不需连续。手动重用 ID 会破坏 binlog 和主从一致"
        },
        {
                "symptom": "INSERT SET 语法仅 MySQL 支持",
                "cause": "SET 语法非标准 SQL",
                "fix": "优先用 VALUES 语法跨数据库兼容"
        }
    ],

    exercises: [
      { level: '基础', task: "插入一行", answer: "INSERT INTO users (id, name) VALUES (1, 'Alice');" },
      { level: '基础', task: "更新一行", answer: "UPDATE users SET name = 'Bob' WHERE id = 1;" },
      { level: '基础', task: "删除一行", answer: "DELETE FROM users WHERE id = 1;" }
    ],
    summary: "INSERT 插入行，UPDATE 更新行，DELETE 删除行。"
  },

  "R9WDMRd-3wxsKH97-sT3n": {
    mentalModel: "表是'数据的容器'：CREATE TABLE 建表，DROP TABLE 删表。",
    sections: [
      {
        title: "CREATE TABLE",
        content: "CREATE TABLE 表名 (列定义, ...)。定义表名、列、约束。"
      },
      {
        title: "DROP TABLE",
        content: "DROP TABLE 表名。删除表和所有数据。不可逆！"
      },
      {
        title: "ALTER TABLE",
        content: "ALTER TABLE 改表结构：ADD COLUMN 加列，DROP COLUMN 删列，MODIFY COLUMN 改列类型。"
      }
        ],

    diagnosis: [
{
                "symptom": "CREATE TABLE LIKE 不复制外键",
                "cause": "只复制列定义+索引，忽略 FK 和触发器",
                "fix": "用 SHOW CREATE TABLE 获取完整 DDL 再修改"
        },
        {
                "symptom": "DELETE 后 InnoDB 磁盘空间未释放",
                "cause": "InnoDB 不主动回收已删除行的空间",
                "fix": "OPTIMIZE TABLE t（重建表）。定期维护大表"
        }
    ],

    exercises: [
      { level: '基础', task: "创建表", answer: "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));" },
      { level: '基础', task: "删除表", answer: "DROP TABLE users;" },
      { level: '进阶', task: "加列", answer: "ALTER TABLE users ADD COLUMN age INT;" }
    ],
    summary: "CREATE TABLE 建表，DROP TABLE 删表（不可逆），ALTER TABLE 改表结构。"
  },

  "xkPJ2MYiXmzC4yqQWyB_7": {
    mentalModel: "嵌套子查询是'子查询中的子查询'：多层子查询。",
    sections: [
      {
        title: "嵌套子查询",
        content: "子查询中再有子查询。SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > (SELECT AVG(total) FROM orders))。"
      },
      {
        title: "常见错误",
        content: "嵌套子查询性能很差。尽量用 JOIN 替代。"
      }
        ],

    diagnosis: [
{
                "symptom": "三层嵌套子查询不可读且计划差",
                "cause": "每层独立优化→无法跨层优化",
                "fix": "CTE 平铺:WITH t1 AS(...),t2 AS(...)SELECT..."
        },
        {
                "symptom": "相关子查询 O(n*m) 复杂度",
                "cause": "外部每行执行一次内部查询",
                "fix": "改 JOIN+GROUP BY+HAVING"
        }
    ],

    exercises: [
      { level: '进阶', task: "找订单金额大于平均订单金额的用户", answer: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > (SELECT AVG(total) FROM orders));" }
    ],
    summary: "嵌套子查询：子查询中的子查询。性能差，尽量用 JOIN。"
  },

  "86iZ8s8EdhSuYwgwAM_EO": {
    mentalModel: "Subqueries 是'子查询'：SELECT 中的 SELECT。",
    sections: [
      {
        title: "子查询类型",
        content: "WHERE 子查询、FROM 子查询、HAVING 子查询。WHERE 子查询最常用。"
      },
      {
        title: "常见错误",
        content: "子查询性能差。子查询返回多列时会报错（除非用 IN）。"
      }
        ],

    diagnosis: [
{
                "symptom": "FROM 子查询没别名报错",
                "cause": "MySQL 要求 FROM(SELECT...)AS t",
                "fix": "给所有派生表加别名"
        },
        {
                "symptom": "LIMIT 1 无 ORDER BY→每次返回不同行",
                "cause": "不带 ORDER BY 的 LIMIT 1 返回任意行",
                "fix": "加 ORDER BY created_at DESC LIMIT 1"
        }
    ],

    exercises: [
      { level: '基础', task: "WHERE 子查询", answer: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);" },
      { level: '进阶', task: "FROM 子查询", answer: "SELECT * FROM (SELECT user_id, COUNT(*) as cnt FROM orders GROUP BY user_id) as t WHERE cnt > 10;" }
    ],
    summary: "子查询：WHERE/FROM/HAVING 中的 SELECT。性能差时用 JOIN。"
  },

  "8V6yw7kLaow-VVcv_K_pL": {
    mentalModel: "JOIN 是'连接多表'：INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN。",
    sections: [
      {
        title: "INNER JOIN",
        content: "只返回匹配的行。SELECT ... FROM 表1 JOIN 表2 ON 条件。"
      },
      {
        title: "LEFT JOIN",
        content: "返回左表所有行，右表不匹配的填 NULL。"
      },
      {
        title: "RIGHT JOIN",
        content: "返回右表所有行，左表不匹配的填 NULL。"
      },
      {
        title: "FULL JOIN",
        content: "返回两表所有行，不匹配的填 NULL。"
      }
        ],

    diagnosis: [
{
                "symptom": "MySQL 不支持 FULL OUTER JOIN",
                "cause": "语法错误",
                "fix": "LEFT JOIN UNION ALL RIGHT JOIN WHERE left.id IS NULL 模拟"
        },
        {
                "symptom": "CROSS JOIN 无意间产生",
                "cause": "JOIN 忘写 ON 条件→笛卡尔积",
                "fix": "始终写 ON。若确需 CROSS JOIN 显式写"
        }
    ],

    exercises: [
      { level: '基础', task: "INNER JOIN", answer: "SELECT users.name, orders.total FROM users JOIN orders ON users.id = orders.user_id;" },
      { level: '进阶', task: "LEFT JOIN", answer: "SELECT users.name, orders.total FROM users LEFT JOIN orders ON users.id = orders.user_id;" }
    ],
    summary: "JOIN 连接多表。INNER JOIN 只返回匹配行，LEFT JOIN 返回左表所有行，RIGHT JOIN 返回右表所有行。"
  },

  "aaua13CkTxLOYXr8cAgPm": {
    mentalModel: "INNER JOIN 是'内连接'：只返回两表匹配的行。",
    sections: [
      {
        title: "INNER JOIN 语法",
        content: "SELECT ... FROM 表1 INNER JOIN 表2 ON 表1.列 = 表2.列。只返回匹配的行。"
      },
      {
        title: "常见错误",
        content: "JOIN 条件写错会产生笛卡尔积（数据爆炸）。JOIN 大表很慢（没有索引时）。"
      }
        ],

    diagnosis: [
{
                "symptom": "JOIN 后大量行匹配不上",
                "cause": "关联列类型/字符集不一致→隐式转换",
                "fix": "确保类型一致。EXPLAIN 检查隐式转换警告"
        },
        {
                "symptom": "多 INNER JOIN 后结果为空",
                "cause": "任一 JOIN 断链→结果归零",
                "fix": "逐步加 JOIN 排查。关键 JOIN 改 LEFT JOIN"
        }
    ],

    exercises: [
      { level: '基础', task: "查询用户和订单", answer: "SELECT users.name, orders.total FROM users INNER JOIN orders ON users.id = orders.user_id;" }
    ],
    summary: "INNER JOIN 只返回两表匹配的行。JOIN 条件必须有。"
  },

  "JZqS3Xapw6mfSPVgFW7av": {
    mentalModel: "相关子查询是'依赖外部查询的子查询'：子查询引用外部查询的列。",
    sections: [
      {
        title: "相关子查询语法",
        content: "子查询中引用外部查询的列。SELECT * FROM users u WHERE (SELECT COUNT(*) FROM orders WHERE user_id = u.id) > 10。"
      },
      {
        title: "常见错误",
        content: "相关子查询性能很差（每行都执行一次子查询）。尽量用 JOIN 替代。"
      }
        ],

    diagnosis: [
{
                "symptom": "相关子查询→秒级变秒级以上",
                "cause": "1000 行=1000 次子查询",
                "fix": "改 JOIN+GROUP BY。或窗口函数 COUNT(*)OVER(PARTITION BY user_id)"
        },
        {
                "symptom": "子查询 ORDER BY 被忽略",
                "cause": "子查询中 ORDER BY 无意义（除非配 LIMIT）",
                "fix": "加 LIMIT。或用 ROW_NUMBER()"
        }
    ],

    exercises: [
      { level: '进阶', task: "找订单数大于 10 的用户", answer: "SELECT * FROM users u WHERE (SELECT COUNT(*) FROM orders WHERE user_id = u.id) > 10;" }
    ],
    summary: "相关子查询：子查询引用外部查询的列。性能差，尽量用 JOIN。"
  },

  "X9cJJ8zLZCF2cOoqxwFfY": {
    mentalModel: "LEFT JOIN 是'左连接'：返回左表所有行，右表不匹配的填 NULL。",
    sections: [
      {
        title: "LEFT JOIN 语法",
        content: "SELECT ... FROM 表1 LEFT JOIN 表2 ON 条件。返回左表所有行，右表不匹配的填 NULL。"
      },
      {
        title: "使用场景",
        content: "找所有用户和订单（包括没订单的用户）。SELECT users.name, orders.total FROM users LEFT JOIN orders ON users.id = orders.user_id。"
      },
      {
        title: "常见错误",
        content: "LEFT JOIN 右表不匹配的列是 NULL，WHERE 条件会过滤掉这些行（变成 INNER JOIN）。"
      }
        ],

    diagnosis: [
{
                "symptom": "LEFT JOIN+WHERE right.col IS NOT NULL→等效 INNER JOIN",
                "cause": "WHERE 过滤了右表 NULL 行",
                "fix": "如需保留左表：把条件移到 ON 中"
        },
        {
                "symptom": "多 LEFT JOIN→行数爆炸",
                "cause": "左表 100xJOIN1(平均 5)xJOIN2(平均 3)=1500",
                "fix": "先子查询聚合再 JOIN：LEFT JOIN(SELECT user_id,COUNT(*)FROM orders GROUP BY user_id)"
        }
    ],

    exercises: [
      { level: '基础', task: "查询所有用户和订单（包括没订单的用户）", answer: "SELECT users.name, orders.total FROM users LEFT JOIN orders ON users.id = orders.user_id;" },
      { level: '进阶', task: "找没订单的用户", answer: "SELECT users.name FROM users LEFT JOIN orders ON users.id = orders.user_id WHERE orders.id IS NULL;" }
    ],
    summary: "LEFT JOIN 返回左表所有行，右表不匹配的填 NULL。WHERE 条件会过滤 NULL 行。"
  },

  "shpgZkh1CLqUwjOaRtAFy": {
    mentalModel: "RIGHT JOIN 是'右连接'：返回右表所有行，左表不匹配的填 NULL。",
    sections: [
      {
        title: "RIGHT JOIN 语法",
        content: "SELECT ... FROM 表1 RIGHT JOIN 表2 ON 条件。返回右表所有行，左表不匹配的填 NULL。"
      },
      {
        title: "使用场景",
        content: "RIGHT JOIN 和 LEFT JOIN 相反。可以用 LEFT JOIN 替代（交换表顺序）。"
      }
        ],

    diagnosis: [
{
                "symptom": "RIGHT JOIN 可读性差",
                "cause": "从左到右阅读习惯→RIGHT 难理解",
                "fix": "始终 LEFT JOIN 交换表顺序"
        },
        {
                "symptom": "LEFT+RIGHT 混用→NULL 语义难推理",
                "cause": "多表连接混用 JOIN 类型",
                "fix": "统一 LEFT JOIN。全外连接用 UNION ALL 两个 LEFT"
        }
    ],

    exercises: [
      { level: '基础', task: "RIGHT JOIN", answer: "SELECT users.name, orders.total FROM users RIGHT JOIN orders ON users.id = orders.user_id;" }
    ],
    summary: "RIGHT JOIN 返回右表所有行，左表不匹配的填 NULL。可以用 LEFT JOIN 替代。"
  },

  "o2SH4iQn1Ap2yDZ7cVYLO": {
    mentalModel: "FLOOR 是'向下取整'：FLOOR(3.7) = 3。",
    sections: [
      {
        title: "FLOOR 语法",
        content: "FLOOR(数值) 向下取整。FLOOR(3.7) = 3，FLOOR(-3.7) = -4。"
      }
        ],

    diagnosis: [
{
                "symptom": "FLOOR(-3.2)=-4 不符合直觉",
                "cause": "向下取整→更小方向",
                "fix": "向零取整用 CAST(x AS SIGNED)"
        },
        {
                "symptom": "FLOOR(0.1+0.2)浮点误差",
                "cause": "二进制浮点不精确",
                "fix": "金融用 DECIMAL。不对浮点数做精确比较"
        }
    ],

    exercises: [
      { level: '基础', task: "向下取整", answer: "SELECT FLOOR(3.7); -- 结果: 3" }
    ],
    summary: "FLOOR(数值) 向下取整。"
  }
};
