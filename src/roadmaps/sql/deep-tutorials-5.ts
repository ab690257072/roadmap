import type { DeepTutorial } from '../deep-types';

export const SQL_DEEP_TUTORIALS_5: Record<string, DeepTutorial> = {
  "JDDG4KfhtIlw1rkNCzUli": {
    mentalModel: "SQL 基础语法就像写作文：SELECT 是'我要什么'，FROM 是'从哪里拿'，WHERE 是'满足什么条件'。",
    sections: [
      {
        title: "核心语法结构",
        content: "SELECT 列名 FROM 表名 WHERE 条件。SELECT 指定要查询的列，FROM 指定数据来源，WHERE 过滤条件。"
      },
      {
        title: "语法要素",
        content: "SELECT 可以跟列名、*（所有列）、表达式。FROM 后跟表名，可以有多表。WHERE 用比较运算符（=, >, <, !=）和逻辑运算符（AND, OR, NOT）。"
      },
      {
        title: "常见错误",
        content: "忘记 FROM 会报错。WHERE 条件写错（如字符串没加引号）会报错或返回空结果。SELECT * 虽然方便但性能差。"
      },
      {
        title: "最佳实践",
        content: "只 SELECT 需要的列，不用 *。WHERE 条件用索引列。复杂条件用括号分组明确优先级。"
      }
        ],

    diagnosis: [
{
                "symptom": "SELECT * 返回全列，慢查询且浪费网络带宽",
                "cause": "表有 TEXT/BLOB 大字段时，SELECT * 强制传输所有列，带宽和反序列化开销巨大",
                "fix": "只 SELECT 需要的列：SELECT id, name, email FROM users。ORM 中使用 .select() 限定列"
        },
        {
                "symptom": "WHERE 条件列顺序不对导致复合索引失效",
                "cause": "WHERE name='Alice' AND age>18，若索引是(age,name)，name 不在最左列则索引失效",
                "fix": "用 EXPLAIN 查看 key_len 确认索引使用情况，按最左前缀原则调整列顺序或重建索引"
        }
    ],

    exercises: [
      { level: '基础', task: "查询 users 表的所有列", answer: "SELECT * FROM users;" },
      { level: '基础', task: "查询 name 和 email 列", answer: "SELECT name, email FROM users;" },
      { level: '基础', task: "查询 age 大于 18 的用户", answer: "SELECT * FROM users WHERE age > 18;" },
      { level: '基础', task: "查询北京的用户", answer: "SELECT * FROM users WHERE city = '北京';" }
    ],
    summary: "SQL 基础语法：SELECT 列 FROM 表 WHERE 条件。只选需要的列，WHERE 用索引列。"
  },

  "ffwniprGJHZzJ7t3lQcXz": {
    mentalModel: "操作符就像数学符号：= 是等于，> 是大于，AND 是'并且'，OR 是'或者'。",
    sections: [
      {
        title: "比较运算符",
        content: "= 等于，!= 或 <> 不等于，> 大于，< 小于，>= 大于等于，<= 小于等于。用于 WHERE 条件。"
      },
      {
        title: "逻辑运算符",
        content: "AND 两个条件都满足，OR 任一条件满足，NOT 取反。优先级：NOT > AND > OR，用括号明确。"
      },
      {
        title: "特殊运算符",
        content: "BETWEEN 范围（BETWEEN 10 AND 20），IN 列表（IN (1,2,3)），LIKE 模糊匹配（LIKE '%abc%'），IS NULL 判断空值。"
      },
      {
        title: "常见错误",
        content: "NULL 不能用 = 判断，要用 IS NULL。AND 优先级高于 OR，不加括号会出错。LIKE 的 % 是通配符。"
      }
        ],

    diagnosis: [
{
                "symptom": "WHERE status != 'deleted' 遗漏了 NULL 行",
                "cause": "NULL 和任何值比较都是 NULL（非 true/false）。status!= 'deleted' 对 NULL 返回 NULL 被过滤",
                "fix": "WHERE status IS NULL OR status != 'deleted'。或用 COALESCE(status,'active')!='deleted'"
        },
        {
                "symptom": "NOT IN 子查询因 NULL 值返回空结果",
                "cause": "x NOT IN (1,2,NULL) 等价 x!=1 AND x!=2 AND x!=NULL,x!=NULL 永远是 NULL",
                "fix": "子查询加 WHERE col IS NOT NULL。或改用 NOT EXISTS"
        }
    ],

    exercises: [
      { level: '基础', task: "查询 age 在 18 到 30 之间的用户", answer: "SELECT * FROM users WHERE age BETWEEN 18 AND 30;" },
      { level: '基础', task: "查询城市是北京或上海的用户", answer: "SELECT * FROM users WHERE city IN ('北京', '上海');" },
      { level: '基础', task: "查询名字包含'张'的用户", answer: "SELECT * FROM users WHERE name LIKE '%张%';" },
      { level: '基础', task: "查询没有邮箱的用户", answer: "SELECT * FROM users WHERE email IS NULL;" }
    ],
    summary: "操作符：比较（=,>,<）、逻辑（AND,OR,NOT）、特殊（BETWEEN,IN,LIKE,IS NULL）。NULL 用 IS NULL 判断。"
  },

  "xPOeXK1EPBNG56vgfG-VV": {
    mentalModel: "DDL 是'建房子'：CREATE TABLE 建表，ALTER TABLE 改表，DROP TABLE 删表。",
    sections: [
      {
        title: "CREATE TABLE",
        content: "CREATE TABLE 表名 (列名 类型 约束, ...)。列定义包括列名、数据类型（INT, VARCHAR, DATE）、约束（PRIMARY KEY, NOT NULL, UNIQUE）。"
      },
      {
        title: "ALTER TABLE",
        content: "ALTER TABLE 表名 ADD COLUMN 列名 类型（加列），DROP COLUMN 列名（删列），MODIFY COLUMN 列名 新类型（改类型）。"
      },
      {
        title: "DROP TABLE",
        content: "DROP TABLE 表名 删除表和所有数据。DROP TABLE IF EXISTS 表名 避免表不存在时报错。"
      },
      {
        title: "常见错误",
        content: "CREATE TABLE 时列名重复会报错。ALTER TABLE DROP COLUMN 会丢失数据。DROP TABLE 不可逆。"
      }
        ],

    diagnosis: [
{
                "symptom": "ALTER TABLE ADD COLUMN 在主库锁表数十分钟",
                "cause": "MySQL 默认 ALTER 会拷贝整张表，大表阻塞所有写入",
                "fix": "用 pt-online-schema-change 或 gh-ost 在线改表，创建影子表复制数据后原子切换"
        },
        {
                "symptom": "ALTER TABLE DROP COLUMN 报 column referenced by view",
                "cause": "被删除的列在 VIEW 定义中被引用",
                "fix": "先 DROP VIEW 或 CREATE OR REPLACE VIEW 更新定义后再 DROP COLUMN"
        }
    ],

    exercises: [
      { level: '基础', task: "创建 products 表（id, name, price）", answer: "CREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(100), price DECIMAL(10,2));" },
      { level: '基础', task: "给 products 表加 stock 列", answer: "ALTER TABLE products ADD COLUMN stock INT DEFAULT 0;" },
      { level: '基础', task: "删除 products 表的 stock 列", answer: "ALTER TABLE products DROP COLUMN stock;" },
      { level: '基础', task: "删除 products 表（如果存在）", answer: "DROP TABLE IF EXISTS products;" }
    ],
    summary: "DDL：CREATE TABLE 建表，ALTER TABLE 改表（ADD/DROP/MODIFY COLUMN），DROP TABLE 删表。DROP 不可逆。"
  },

  "mPj6BiK5FKKkIQ9WsWEo6": {
    mentalModel: "INSERT 是'往表格里填数据'：INSERT INTO 表名 (列) VALUES (值)。",
    sections: [
      {
        title: "单行插入",
        content: "INSERT INTO 表名 (列1, 列2) VALUES (值1, 值2)。列名可以省略（按顺序），但建议写明。"
      },
      {
        title: "多行插入",
        content: "INSERT INTO 表名 (列1, 列2) VALUES (值1, 值2), (值3, 值4)。一次插入多行，性能更好。"
      },
      {
        title: "INSERT ... SELECT",
        content: "INSERT INTO 表1 (列1) SELECT 列2 FROM 表2。从其他表复制数据。"
      },
      {
        title: "常见错误",
        content: "列数和值数不匹配会报错。违反约束（如主键重复、NOT NULL）会报错。数据类型不匹配会报错。"
      }
        ],

    diagnosis: [
{
                "symptom": "INSERT 逐行插入极慢（每秒几十条）",
                "cause": "每条 INSERT 独立事务+fsync 刷盘——1 万行 = 1 万次事务",
                "fix": "批量 INSERT：INSERT INTO t VALUES (1),(2),... 或 BEGIN; ... COMMIT; 包裹。极端场景用 LOAD DATA"
        },
        {
                "symptom": "INSERT ... SELECT 大表复制导致 undo log 暴涨",
                "cause": "大事务产生大量 undo log，从库延迟飙升甚至磁盘写满",
                "fix": "分批复制 LIMIT 10000 循环执行。或用 mysqldump --where 按范围导出再导入"
        }
    ],

    exercises: [
      { level: '基础', task: "插入一个用户（name='Alice', age=25）", answer: "INSERT INTO users (name, age) VALUES ('Alice', 25);" },
      { level: '基础', task: "一次插入两个用户", answer: "INSERT INTO users (name, age) VALUES ('Bob', 30), ('Carol', 28);" },
      { level: '基础', task: "从 old_users 表复制到 users 表", answer: "INSERT INTO users (name, age) SELECT name, age FROM old_users;" }
    ],
    summary: "INSERT INTO 表 (列) VALUES (值)。可单行或多行插入。违反约束会报错。"
  },

  "K5vhqTJrdPK08Txv8zaEj": {
    mentalModel: "TRUNCATE TABLE 是'清空表格但保留结构'：比 DELETE 快，但不可回滚。",
    sections: [
      {
        title: "TRUNCATE vs DELETE",
        content: "TRUNCATE TABLE 清空所有行，保留表结构。比 DELETE FROM 快得多（不记录日志）。但不可回滚，不触发触发器。"
      },
      {
        title: "使用场景",
        content: "需要清空大表时用 TRUNCATE。需要保留部分数据用 DELETE。需要回滚用 DELETE。"
      },
      {
        title: "常见错误",
        content: "有外键引用时 TRUNCATE 会报错（需要先删外键）。TRUNCATE 不能带 WHERE 条件。TRUNCATE 后自增 ID 重置。"
      }
        ],

    diagnosis: [
{
                "symptom": "TRUNCATE 后自增 ID 重置导致业务依赖 ID 出错",
                "cause": "TRUNCATE 重置 AUTO_INCREMENT 计数器为 1，DELETE 不重置",
                "fix": "若依赖 ID 顺序或 ID 作为外部引用，用 DELETE FROM。否则确认业务不依赖 ID 连续性"
        },
        {
                "symptom": "TRUNCATE 在有外键约束的表上失败",
                "cause": "MySQL 不允许 TRUNCATE 被外键引用的表，即使为空",
                "fix": "SET FOREIGN_KEY_CHECKS=0; TRUNCATE TABLE t; SET FOREIGN_KEY_CHECKS=1;"
        }
    ],

    exercises: [
      { level: '基础', task: "清空 logs 表", answer: "TRUNCATE TABLE logs;" },
      { level: '基础', task: "清空表但保留自增 ID", answer: "DELETE FROM logs; -- 不能用 TRUNCATE" }
    ],
    summary: "TRUNCATE TABLE 清空表（快但不可回滚）。有外键或需要回滚时用 DELETE。"
  },

  "ddtVaA4Ls6qRj-7OtTSIH": {
    mentalModel: "DELETE 是'删除行'：DELETE FROM 表 WHERE 条件。不加 WHERE 会删除所有行！",
    sections: [
      {
        title: "DELETE 语法",
        content: "DELETE FROM 表名 WHERE 条件。WHERE 指定要删除的行。不加 WHERE 删除所有行（危险！）。"
      },
      {
        title: "DELETE vs TRUNCATE",
        content: "DELETE 可以带 WHERE 条件，可以回滚，触发触发器。TRUNCATE 清空所有行，不可回滚，更快。"
      },
      {
        title: "常见错误",
        content: "忘记 WHERE 会删除所有行！DELETE 大表很慢（记录日志）。没有索引的 WHERE 条件会很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "DELETE 大表耗时 30 分钟未完成",
                "cause": "DELETE 逐行记录 undo log，大表 IO 饱和+从库延迟",
                "fix": "分批删：DELETE ... LIMIT 10000 循环。或用 pt-archiver。全清用 TRUNCATE"
        },
        {
                "symptom": "误执行 DELETE FROM users 忘了加 WHERE",
                "cause": "DELETE 无 WHERE 删除全表所有行",
                "fix": "先 SELECT 验证条件。开启 sql_safe_updates=1 阻止无 WHERE 的 DELETE/UPDATE"
        }
    ],

    exercises: [
      { level: '基础', task: "删除 id=5 的用户", answer: "DELETE FROM users WHERE id = 5;" },
      { level: '基础', task: "删除所有未激活的用户", answer: "DELETE FROM users WHERE status = 'inactive';" },
      { level: '基础', task: "删除 30 天前的日志", answer: "DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY;" }
    ],
    summary: "DELETE FROM 表 WHERE 条件。不加 WHERE 删除所有行（危险！）。大表用 TRUNCATE 更快。"
  },

  "eu9dJFi6gBPMBdy08Y5Bb": {
    mentalModel: "UPDATE 是'修改数据'：UPDATE 表 SET 列=值 WHERE 条件。不加 WHERE 会修改所有行！",
    sections: [
      {
        title: "UPDATE 语法",
        content: "UPDATE 表名 SET 列1=值1, 列2=值2 WHERE 条件。可以更新多列。WHERE 指定要更新的行。"
      },
      {
        title: "使用表达式",
        content: "SET 可以用表达式：SET age = age + 1，SET price = price * 0.9（打九折）。"
      },
      {
        title: "常见错误",
        content: "忘记 WHERE 会更新所有行！UPDATE 大表很慢。没有索引的 WHERE 条件会很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "UPDATE 锁了比预期更多的行",
                "cause": "WHERE 条件未走索引→全表扫描→InnoDB 对扫描到的所有行加锁",
                "fix": "EXPLAIN 确认走索引。给 WHERE 列加索引。全表更新时分批执行"
        },
        {
                "symptom": "UPDATE SET price=price*0.9 误对所有行打九折",
                "cause": "忘了加 WHERE 条件",
                "fix": "先 BEGIN; SELECT 看影响行数→UPDATE→确认→COMMIT。养成事务中先查后改的习惯"
        }
    ],

    exercises: [
      { level: '基础', task: "把 id=5 的用户年龄改为 30", answer: "UPDATE users SET age = 30 WHERE id = 5;" },
      { level: '基础', task: "所有用户年龄加 1", answer: "UPDATE users SET age = age + 1;" },
      { level: '基础', task: "所有商品价格打九折", answer: "UPDATE products SET price = price * 0.9;" }
    ],
    summary: "UPDATE 表 SET 列=值 WHERE 条件。不加 WHERE 更新所有行（危险！）。可用表达式。"
  },

  "WMSXi-eez_hHGDM8kUdWz": {
    mentalModel: "DML 是'操作数据'：INSERT 插入，UPDATE 更新，DELETE 删除。都是对数据的增删改。",
    sections: [
      {
        title: "DML 三种操作",
        content: "INSERT 插入新行，UPDATE 更新现有行，DELETE 删除行。都是对数据的操作（不是表结构）。"
      },
      {
        title: "事务",
        content: "DML 操作可以放在事务中：BEGIN TRANSACTION，执行 DML，COMMIT 提交或 ROLLBACK 回滚。"
      },
      {
        title: "常见错误",
        content: "UPDATE/DELETE 不加 WHERE 会影响所有行。DML 操作会锁表（影响并发）。大表操作很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "DML 操作后未 COMMIT——连接关闭导致回滚",
                "cause": "事务未提交就断开，数据库自动 ROLLBACK，数据全部丢失",
                "fix": "DML 后确认 COMMIT。检查框架 autocommit 设置。SHOW PROCESSLIST 查未提交事务"
        },
        {
                "symptom": "大批量 DML 导致从库延迟飙升",
                "cause": "主库一个事务改 100 万行→binlog 传从库→单线程回放同样耗时",
                "fix": "拆成小事务（每次 1000-5000 行）。并行复制 slave_parallel_workers>1。MySQL 8.0 WRITESET 并行复制"
        }
    ],

    exercises: [
      { level: '基础', task: "用事务插入数据", answer: "BEGIN; INSERT INTO users (name) VALUES ('Alice'); COMMIT;" },
      { level: '基础', task: "回滚操作", answer: "BEGIN; DELETE FROM users WHERE id = 5; ROLLBACK; -- 撤销删除" }
    ],
    summary: "DML：INSERT 插入，UPDATE 更新，DELETE 删除。可用事务（BEGIN/COMMIT/ROLLBACK）。"
  },

  "WjXlO42WL9saDS7RIGapt": {
    mentalModel: "ALTER TABLE 是'改造表结构'：加列、删列、改列类型、加约束。",
    sections: [
      {
        title: "ADD COLUMN",
        content: "ALTER TABLE 表名 ADD COLUMN 列名 类型 [约束]。加列时可以设默认值。"
      },
      {
        title: "DROP COLUMN",
        content: "ALTER TABLE 表名 DROP COLUMN 列名。删列会丢失数据，不可逆。"
      },
      {
        title: "MODIFY COLUMN",
        content: "ALTER TABLE 表名 MODIFY COLUMN 列名 新类型。改列类型可能丢失数据（如 VARCHAR(100) 改 VARCHAR(50)）。"
      },
      {
        title: "常见错误",
        content: "DROP COLUMN 不可逆。MODIFY COLUMN 可能丢失数据（类型不兼容）。有索引的列改类型可能失败。"
      }
        ],

    diagnosis: [
{
                "symptom": "ALTER MODIFY VARCHAR(50)→VARCHAR(20) 截断数据",
                "cause": "缩小长度时超长数据被静默截断或报错",
                "fix": "先 SELECT MAX(LENGTH(col)) 查最大长度。更新/删除超长行后再 ALTER"
        },
        {
                "symptom": "ALTER ADD COLUMN ... DEFAULT 导致全表锁",
                "cause": "MySQL 8.0 前加列含默认值会立即填充所有行，大表锁很久",
                "fix": "MySQL 8.0+ instant ADD COLUMN。5.7 用 pt-online-schema-change 或先加列(无 DEFAULT)再分批 UPDATE"
        }
    ],

    exercises: [
      { level: '基础', task: "给 users 表加 phone 列", answer: "ALTER TABLE users ADD COLUMN phone VARCHAR(20);" },
      { level: '基础', task: "删除 users 表的 phone 列", answer: "ALTER TABLE users DROP COLUMN phone;" },
      { level: '基础', task: "把 name 列从 VARCHAR(50) 改为 VARCHAR(100)", answer: "ALTER TABLE users MODIFY COLUMN name VARCHAR(100);" }
    ],
    summary: "ALTER TABLE：ADD COLUMN 加列，DROP COLUMN 删列（不可逆），MODIFY COLUMN 改类型（可能丢数据）。"
  },

  "epEpBxRosLhuAuKwp823r": {
    mentalModel: "CREATE TABLE 是'建表'：定义表名、列名、数据类型、约束。",
    sections: [
      {
        title: "基本语法",
        content: "CREATE TABLE 表名 (列名 类型 [约束], ...)。列定义包括列名、数据类型（INT, VARCHAR, DATE）、约束（PRIMARY KEY, NOT NULL）。"
      },
      {
        title: "常用数据类型",
        content: "INT 整数，VARCHAR(n) 变长字符串，DATE 日期，DECIMAL(10,2) 小数，BOOLEAN 布尔。"
      },
      {
        title: "常用约束",
        content: "PRIMARY KEY 主键（唯一+非空），NOT NULL 非空，UNIQUE 唯一，DEFAULT 默认值，FOREIGN KEY 外键。"
      },
      {
        title: "常见错误",
        content: "列名重复会报错。主键重复会报错。违反约束（如 NOT NULL）会报错。"
      }
        ],

    diagnosis: [
{
                "symptom": "CREATE TABLE 报 Table already exists",
                "cause": "表名已存在或命名冲突",
                "fix": "CREATE TABLE IF NOT EXISTS。或 DROP TABLE IF EXISTS 再建。加前缀 app_users"
        },
        {
                "symptom": "VARCHAR(65535) 行溢出→查询多一次 IO",
                "cause": "InnoDB 溢出列存单独 page，每次查询额外磁盘读取",
                "fix": "合理评估长度：VARCHAR(100) 够用别用 VARCHAR(1000)。大文本用 TEXT"
        }
    ],

    exercises: [
      { level: '基础', task: "创建 orders 表（id, user_id, total）", answer: "CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, total DECIMAL(10,2));" },
      { level: '基础', task: "创建带外键的 orders 表", answer: "CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));" },
      { level: '基础', task: "创建带默认值的表", answer: "CREATE TABLE logs (id INT PRIMARY KEY, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);" }
    ],
    summary: "CREATE TABLE 表名 (列 类型 约束)。常用类型：INT, VARCHAR, DATE, DECIMAL。约束：PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT。"
  },

  "i8u8E_sne6XiKJo2FXDog": {
    mentalModel: "SELECT 是'查询数据'：SELECT 列 FROM 表 WHERE 条件 ORDER BY 排序。",
    sections: [
      {
        title: "基本查询",
        content: "SELECT 列名 FROM 表名。SELECT * 查所有列（不推荐）。可以查多列：SELECT name, age。"
      },
      {
        title: "WHERE 过滤",
        content: "SELECT ... WHERE 条件。可以用比较运算符（=, >, <）、逻辑运算符（AND, OR）、特殊运算符（BETWEEN, IN, LIKE）。"
      },
      {
        title: "ORDER BY 排序",
        content: "SELECT ... ORDER BY 列名 [ASC|DESC]。ASC 升序（默认），DESC 降序。可以按多列排序。"
      },
      {
        title: "常见错误",
        content: "SELECT * 性能差（查所有列）。WHERE 条件没索引会很慢。ORDER BY 大表很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "SELECT * 生产环境导致慢查询",
                "cause": "TEXT/BLOB 列也被传出——网络+内存消耗巨大",
                "fix": "只 SELECT 需要列。ORM .select(['id','name']) 限定"
        },
        {
                "symptom": "SELECT 返回百万行导致应用 OOM",
                "cause": "应用全部加载到内存→OutOfMemory",
                "fix": "用 LIMIT+OFFSET 分页。或游标逐批读取。JDBC 设 fetchSize"
        }
    ],

    exercises: [
      { level: '基础', task: "查询所有用户的名字", answer: "SELECT name FROM users;" },
      { level: '基础', task: "查询年龄大于 18 的用户，按年龄降序", answer: "SELECT * FROM users WHERE age > 18 ORDER BY age DESC;" },
      { level: '基础', task: "查询北京或上海的用户", answer: "SELECT * FROM users WHERE city IN ('北京', '上海');" }
    ],
    summary: "SELECT 列 FROM 表 WHERE 条件 ORDER BY 排序。只选需要的列，WHERE 用索引列。"
  },

  "YzJ6QmY2arMfRzMAPaI0T": {
    mentalModel: "DROP TABLE 是'删除表'：删除表结构和所有数据。不可逆！",
    sections: [
      {
        title: "DROP TABLE 语法",
        content: "DROP TABLE 表名。删除表和所有数据、索引、约束。不可逆！"
      },
      {
        title: "IF EXISTS",
        content: "DROP TABLE IF EXISTS 表名。表不存在时不报错。"
      },
      {
        title: "常见错误",
        content: "DROP TABLE 不可逆，数据丢失。有外键引用时会报错（需要先删外键）。DROP TABLE 大表很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "DROP TABLE 后才发现删错表了",
                "cause": "多环境切换时误删生产表",
                "fix": "先 RENAME TABLE t TO t_deleted_20260101 观察几天。操作前 SELECT DATABASE() 确认库名"
        },
        {
                "symptom": "外键约束阻止 DROP TABLE",
                "cause": "被其他表外键引用",
                "fix": "先 DROP FOREIGN KEY 再 DROP TABLE。或 SET FOREIGN_KEY_CHECKS=0"
        }
    ],

    exercises: [
      { level: '基础', task: "删除 temp 表", answer: "DROP TABLE temp;" },
      { level: '基础', task: "删除表（如果存在）", answer: "DROP TABLE IF EXISTS temp;" }
    ],
    summary: "DROP TABLE 删除表（不可逆！）。用 IF EXISTS 避免报错。有外键时先删外键。"
  },

  "w4T3jFb0ilf1KNw-AvRXG": {
    mentalModel: "SUM 是'求和'：SUM(列名) 计算数值列的总和。",
    sections: [
      {
        title: "SUM 语法",
        content: "SELECT SUM(列名) FROM 表名。只计算数值列（INT, DECIMAL）。NULL 值被忽略。"
      },
      {
        title: "配合 GROUP BY",
        content: "SELECT category, SUM(price) FROM products GROUP BY category。按类别求和。"
      },
      {
        title: "常见错误",
        content: "SUM 只能用于数值列。NULL 值被忽略（不是 0）。SUM 大表很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "SUM(col) 无匹配行返回 NULL 而非 0",
                "cause": "应用层期待数字→NPE",
                "fix": "COALESCE(SUM(col),0)。或应用层判断 null"
        },
        {
                "symptom": "SUM(INT) 结果超 INT 范围溢出",
                "cause": "SUM 返回类型和被聚合列相同——INT 最大 21 亿",
                "fix": "SUM(CAST(col AS BIGINT))。金额用 DECIMAL"
        }
    ],

    exercises: [
      { level: '基础', task: "计算所有订单的总金额", answer: "SELECT SUM(total) FROM orders;" },
      { level: '基础', task: "按类别计算商品总价", answer: "SELECT category, SUM(price) FROM products GROUP BY category;" }
    ],
    summary: "SUM(列名) 求和。只用于数值列，NULL 被忽略。配合 GROUP BY 分组求和。"
  },

  "9aHYrOQDkA84tlxcVK5aD": {
    mentalModel: "COUNT 是'计数'：COUNT(*) 计行数，COUNT(列名) 计非空值数。",
    sections: [
      {
        title: "COUNT(*) vs COUNT(列名)",
        content: "COUNT(*) 计所有行数（包括 NULL）。COUNT(列名) 只计非 NULL 值数。"
      },
      {
        title: "配合 GROUP BY",
        content: "SELECT category, COUNT(*) FROM products GROUP BY category。按类别计数。"
      },
      {
        title: "常见错误",
        content: "COUNT(*) 和 COUNT(列名) 结果可能不同（NULL 值）。COUNT 大表很慢（没有索引时）。"
      }
        ],

    diagnosis: [
{
                "symptom": "COUNT(*) 和 COUNT(col) 结果不一致→业务错误",
                "cause": "COUNT(*) 含 NULL 行，COUNT(col) 只计 col IS NOT NULL",
                "fix": "总行数用 COUNT(*)，某字段有值行数用 COUNT(col)"
        },
        {
                "symptom": "大表 COUNT(*) 极慢（数秒）",
                "cause": "InnoDB 不存总行数，需扫描索引",
                "fix": "估算值用 SHOW TABLE STATUS。精确计数用计数表维护。或 Redis 计数器"
        }
    ],

    exercises: [
      { level: '基础', task: "统计用户总数", answer: "SELECT COUNT(*) FROM users;" },
      { level: '基础', task: "统计有邮箱的用户数", answer: "SELECT COUNT(email) FROM users;" },
      { level: '基础', task: "按城市统计用户数", answer: "SELECT city, COUNT(*) FROM users GROUP BY city;" }
    ],
    summary: "COUNT(*) 计行数（包括 NULL），COUNT(列名) 计非空值数。配合 GROUP BY 分组计数。"
  },

  "N1Racr3ZpU320gS545We8": {
    mentalModel: "FROM 是'数据来源'：FROM 表名指定查询的表，可以有多表（JOIN）。",
    sections: [
      {
        title: "单表查询",
        content: "SELECT ... FROM 表名。FROM 后跟表名。"
      },
      {
        title: "多表查询",
        content: "SELECT ... FROM 表1 JOIN 表2 ON 条件。用 JOIN 连接多表。"
      },
      {
        title: "常见错误",
        content: "忘记 FROM 会报错。多表查询没 JOIN 条件会产生笛卡尔积（数据爆炸）。"
      }
        ],

    diagnosis: [
{
                "symptom": "FROM 多表忘写 JOIN 条件→笛卡尔积爆炸",
                "cause": "FROM users,orders 隐式 CROSS JOIN→1000x5000=500 万行",
                "fix": "始终用显式 JOIN ... ON。代码审查检查 ON 条件"
        },
        {
                "symptom": "FROM 写错表名但没报错",
                "cause": "拼写错误匹配了其他 schema 的同名表",
                "fix": "用完全限定名：mydb.users。设 search_path = mydb, public"
        }
    ],

    exercises: [
      { level: '基础', task: "查询 users 表", answer: "SELECT * FROM users;" },
      { level: '基础', task: "查询 users 和 orders（JOIN）", answer: "SELECT * FROM users JOIN orders ON users.id = orders.user_id;" }
    ],
    summary: "FROM 表名指定数据来源。多表用 JOIN 连接。不加 JOIN 条件会产生笛卡尔积。"
  },

  "Wou6YXLYUgomvcELh851L": {
    mentalModel: "AVG 是'平均值'：AVG(列名) 计算数值列的平均值。",
    sections: [
      {
        title: "AVG 语法",
        content: "SELECT AVG(列名) FROM 表名。只计算数值列。NULL 值被忽略。"
      },
      {
        title: "配合 GROUP BY",
        content: "SELECT category, AVG(price) FROM products GROUP BY category。按类别求平均。"
      },
      {
        title: "常见错误",
        content: "AVG 只能用于数值列。NULL 值被忽略（不是 0）。AVG 大表很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "AVG(INT) 返回整数——精度丢失",
                "cause": "AVG(age) 返回 31 而非 31.2",
                "fix": "AVG(CAST(age AS DECIMAL)) 或 AVG(age*1.0)。ROUND(AVG(age),2)"
        },
        {
                "symptom": "AVG 中 NULL 被忽略导致分母变小",
                "cause": "NULL 不参与计算→结果偏高",
                "fix": "如需 NULL=0，用 AVG(COALESCE(col,0))"
        }
    ],

    exercises: [
      { level: '基础', task: "计算商品平均价格", answer: "SELECT AVG(price) FROM products;" },
      { level: '基础', task: "按类别计算平均价格", answer: "SELECT category, AVG(price) FROM products GROUP BY category;" }
    ],
    summary: "AVG(列名) 求平均值。只用于数值列，NULL 被忽略。配合 GROUP BY 分组求平均。"
  },

  "bFEYMlqPZtTUYtDQxqHzT": {
    mentalModel: "MIN 是'最小值'：MIN(列名) 找出列的最小值。",
    sections: [
      {
        title: "MIN 语法",
        content: "SELECT MIN(列名) FROM 表名。可用于数值、字符串、日期。NULL 值被忽略。"
      },
      {
        title: "配合 GROUP BY",
        content: "SELECT category, MIN(price) FROM products GROUP BY category。按类别找最小值。"
      },
      {
        title: "常见错误",
        content: "MIN 用于字符串时按字典序。NULL 值被忽略。MIN 大表很慢。"
      }
        ],

    diagnosis: [
{
                "symptom": "MIN(date) 返回异常日期",
                "cause": "无效日期(0000-00-00)或 NULL 污染结果",
                "fix": "WHERE date IS NOT NULL AND date>'1970-01-01' 过滤"
        },
        {
                "symptom": "MIN/MAX 大表上不走索引",
                "cause": "有 WHERE 条件时索引扫描范围扩大",
                "fix": "建覆盖 WHERE 列的索引。EXPLAIN 确认 Select tables optimized away"
        }
    ],

    exercises: [
      { level: '基础', task: "找最低价格", answer: "SELECT MIN(price) FROM products;" },
      { level: '基础', task: "按类别找最低价格", answer: "SELECT category, MIN(price) FROM products GROUP BY category;" }
    ],
    summary: "MIN(列名) 找最小值。可用于数值、字符串、日期。配合 GROUP BY 分组找最小值。"
  },

  "Jlwmyq6CUQeDAlL4dazOP": {
    mentalModel: "主键是'唯一标识'：每行数据的身份证号，必须唯一且非空。",
    sections: [
      {
        title: "主键特性",
        content: "PRIMARY KEY = UNIQUE + NOT NULL。每行必须有主键，主键值唯一。"
      },
      {
        title: "自增主键",
        content: "INT AUTO_INCREMENT PRIMARY KEY。自动递增，常用做法。"
      },
      {
        title: "常见错误",
        content: "主键重复会报错。主键不能为 NULL。改主键值会影响外键引用。"
      }
        ],

    diagnosis: [
{
                "symptom": "INSERT 主键冲突 Duplicate entry",
                "cause": "自增值已包含手动指定 ID",
                "fix": "INSERT ... ON DUPLICATE KEY UPDATE。或 REPLACE INTO"
        },
        {
                "symptom": "自增 INT 主键用完（21 亿溢出）",
                "cause": "高并发写入数年后 INT 不够",
                "fix": "设计用 BIGINT。监控 AUTO_INCREMENT 使用率"
        }
    ],

    exercises: [
      { level: '基础', task: "创建带主键的表", answer: "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));" },
      { level: '基础', task: "创建自增主键", answer: "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50));" }
    ],
    summary: "主键 = UNIQUE + NOT NULL，每行唯一标识。常用自增主键（AUTO_INCREMENT）。"
  },

  "NfCiSPrL4upMssukcw3Kh": {
    mentalModel: "ORDER BY 是'排序'：ORDER BY 列名 [ASC|DESC] 按列排序。",
    sections: [
      {
        title: "ORDER BY 语法",
        content: "SELECT ... ORDER BY 列名 [ASC|DESC]。ASC 升序（默认），DESC 降序。"
      },
      {
        title: "多列排序",
        content: "ORDER BY 列1 ASC, 列2 DESC。先按列1 排序，相同再按列2 排序。"
      },
      {
        title: "常见错误",
        content: "ORDER BY 大表很慢（没有索引时）。ORDER BY 和 LIMIT 配合可以分页。"
      }
        ],

    diagnosis: [
{
                "symptom": "ORDER BY 大表极慢，即使 LIMIT 10",
                "cause": "无索引→全表排序(filesort)，1000 万行全排只取 10 行",
                "fix": "给 ORDER BY 列建索引。(WHERE 列,ORDER BY 列)复合索引。大 OFFSET 用子查询优化"
        },
        {
                "symptom": "ORDER BY RAND() LIMIT 10 极慢",
                "cause": "每行计算随机数→全表扫描+全表排序",
                "fix": "随机 ID 范围：WHERE id>=(SELECT FLOOR(MAX(id)*RAND())FROM t)LIMIT 10"
        }
    ],

    exercises: [
      { level: '基础', task: "按年龄升序排列", answer: "SELECT * FROM users ORDER BY age ASC;" },
      { level: '基础', task: "按年龄降序，相同年龄按名字排序", answer: "SELECT * FROM users ORDER BY age DESC, name ASC;" }
    ],
    summary: "ORDER BY 列名 [ASC|DESC] 排序。可多列排序。大表排序慢（无索引时）。"
  },

  "ytwCkSMTiTuemE0KVfAfy": {
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
                "symptom": "HAVING 用别名报错（PostgreSQL）",
                "cause": "标准 SQL 不允许 HAVING 用 SELECT 别名",
                "fix": "HAVING COUNT(*)>5 写完整表达式。或外层子查询 WHERE"
        },
        {
                "symptom": "WHERE 写聚合条件→报 Invalid group function",
                "cause": "WHERE 在 GROUP BY 前执行，不能用聚合函数",
                "fix": "WHERE 过滤行，HAVING 过滤组。聚合条件只放 HAVING"
        }
    ],

    exercises: [
      { level: '基础', task: "找订单数大于 10 的用户", answer: "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 10;" },
      { level: '基础', task: "找平均价格大于 100 的类别", answer: "SELECT category, AVG(price) FROM products GROUP BY category HAVING AVG(price) > 100;" }
    ],
    summary: "HAVING 过滤分组（在 GROUP BY 之后）。可以用聚合函数。WHERE 不能用聚合函数。"
  },

  "QgfenmhMc18cU_JngQ1n0": {
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
                "symptom": "GROUP BY 结果顺序不可靠",
                "cause": "MySQL 8.0 移除 GROUP BY 隐式排序",
                "fix": "需要排序时显式加 ORDER BY"
        },
        {
                "symptom": "GROUP BY 多列→组合爆炸",
                "cause": "3 列各 10 值=最多 1000 组",
                "fix": "减少分组列数。用 ROLLUP 生成汇总"
        }
    ],

    exercises: [
      { level: '基础', task: "按城市统计用户数", answer: "SELECT city, COUNT(*) FROM users GROUP BY city;" },
      { level: '进阶', task: "按类别统计商品数和平均价格", answer: "SELECT category, COUNT(*), AVG(price) FROM products GROUP BY category;" }
    ],
    summary: "GROUP BY 列名分组。配合聚合函数（COUNT, SUM, AVG）。SELECT 的非聚合列必须在 GROUP BY 中。"
  },

  "23lsrUw8ux6ZP9JlDNNu2": {
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
                "symptom": "MAX(VARCHAR) 返回字典序\"最大值\"",
                "cause": "'9'>'10'（字符比较）",
                "fix": "数字存数值类型。VARCHAR 数字先 CAST"
        },
        {
                "symptom": "SELECT name,MAX(salary)...GROUP BY dept 不保证 name 对应最高工资",
                "cause": "MySQL ONLY_FULL_GROUP_BY 关闭时返回组内任意行",
                "fix": "窗口函数：ROW_NUMBER()OVER(PARTITION BY dept ORDER BY salary DESC)，WHERE rn=1"
        }
    ],

    exercises: [
      { level: '基础', task: "找最高价格", answer: "SELECT MAX(price) FROM products;" },
      { level: '基础', task: "按类别找最高价格", answer: "SELECT category, MAX(price) FROM products GROUP BY category;" }
    ],
    summary: "MAX(列名) 找最大值。可用于数值、字符串、日期。配合 GROUP BY 分组找最大值。"
  },

  "BnB3Rirh4R7a7LW7-k-95": {
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
                "symptom": "IN 子查询极慢——每行执行一次",
                "cause": "MySQL 5.7 DEPENDENT SUBQUERY 策略低效",
                "fix": "改 JOIN：SELECT u.* FROM users u JOIN(SELECT DISTINCT user_id FROM orders)o ON u.id=o.user_id"
        },
        {
                "symptom": "子查询返回多行→= 比较报错",
                "cause": "WHERE id=(SELECT user_id FROM orders WHERE total>100)",
                "fix": "改 IN。或 LIMIT 1。或用 ANY/ALL"
        }
    ],

    exercises: [
      { level: '基础', task: "找下过订单的用户", answer: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);" },
      { level: '基础', task: "找订单金额大于 1000 的用户", answer: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders WHERE total > 1000);" }
    ],
    summary: "子查询：SELECT ... WHERE 列 IN (SELECT ...)。性能差时用 JOIN 替代。"
  },

  "bdQNcr1sj94aX_gjwf2Fa": {
    mentalModel: "JOIN 是'连接多表'：JOIN 表 ON 条件，把多表数据关联起来。",
    sections: [
      {
        title: "INNER JOIN",
        content: "INNER JOIN 只返回匹配的行。SELECT ... FROM 表1 JOIN 表2 ON 表1.列 = 表2.列。"
      },
      {
        title: "LEFT JOIN",
        content: "LEFT JOIN 返回左表所有行，右表不匹配的填 NULL。"
      },
      {
        title: "常见错误",
        content: "JOIN 条件写错会产生笛卡尔积（数据爆炸）。JOIN 大表很慢（没有索引时）。"
      }
        ],

    diagnosis: [
{
                "symptom": "INNER JOIN 后行数比左表少",
                "cause": "右表匹配不上或被 NULL 过滤",
                "fix": "考虑 LEFT JOIN。检查右表数据完整性"
        },
        {
                "symptom": "LEFT JOIN+WHERE right.col='x'→等效 INNER JOIN",
                "cause": "WHERE 过滤了右表 NULL 行",
                "fix": "把右表条件移到 ON：LEFT JOIN ... ON ... AND right.col='x'"
        }
    ],

    exercises: [
      { level: '基础', task: "查询用户和订单（JOIN）", answer: "SELECT users.name, orders.total FROM users JOIN orders ON users.id = orders.user_id;" },
      { level: '基础', task: "查询所有用户和订单（包括没订单的用户）", answer: "SELECT users.name, orders.total FROM users LEFT JOIN orders ON users.id = orders.user_id;" }
    ],
    summary: "JOIN 连接多表。INNER JOIN 只返回匹配行，LEFT JOIN 返回左表所有行。JOIN 条件必须有。"
  },

  "bVCwRoFsYb3HD8X4xuKOo": {
    mentalModel: "索引是'目录'：加速查询，但减慢写入。",
    sections: [
      {
        title: "创建索引",
        content: "CREATE INDEX 索引名 ON 表名(列名)。加速 WHERE、JOIN、ORDER BY。"
      },
      {
        title: "索引类型",
        content: "普通索引、唯一索引（UNIQUE）、复合索引（多列）。"
      },
      {
        title: "常见错误",
        content: "索引太多会减慢写入（INSERT/UPDATE/DELETE）。索引列不能有函数（如 WHERE YEAR(date)）。"
      }
        ],

    diagnosis: [
{
                "symptom": "CREATE INDEX 锁表无法写入",
                "cause": "MySQL 5.6 前 ALTER TABLE ADD INDEX 锁表",
                "fix": "MySQL 5.6+ CREATE INDEX ALGORITHM=INPLACE LOCK=NONE。或用 pt-online-schema-change"
        },
        {
                "symptom": "建索引但 EXPLAIN 显示没用到",
                "cause": "列有函数包裹 DATE(col) 或隐式类型转换 phone=138xxx(VARCHAR)",
                "fix": "WHERE col>='2024-01-01' AND col<'2024-01-02' 去函数。类型保持一致"
        }
    ],

    exercises: [
      { level: '基础', task: "给 users 表的 email 列创建索引", answer: "CREATE INDEX idx_email ON users(email);" },
      { level: '基础', task: "创建唯一索引", answer: "CREATE UNIQUE INDEX idx_email ON users(email);" }
    ],
    summary: "CREATE INDEX 加速查询。索引太多减慢写入。索引列不能用函数。"
  },

  "yrxNYMluJ9OAQCKuM5W1u": {
    mentalModel: "事务是'原子操作'：BEGIN 开始，COMMIT 提交，ROLLBACK 回滚。要么全成功，要么全失败。",
    sections: [
      {
        title: "事务语法",
        content: "BEGIN; DML 操作; COMMIT; 或 ROLLBACK;。事务中的操作要么全成功，要么全失败。"
      },
      {
        title: "ACID 特性",
        content: "原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。"
      },
      {
        title: "常见错误",
        content: "忘记 COMMIT 操作不会生效。事务太长会锁表（影响并发）。死锁（两个事务互相等待）。"
      }
        ],

    diagnosis: [
{
                "symptom": "事务中调外部 API→锁持有过久",
                "cause": "调 API(3s)+发邮件(2s)+UPDATE→锁 5s+",
                "fix": "非 DB 操作移出事务。事务只包裹 DB 操作且尽量短"
        },
        {
                "symptom": "两个事务互相等待→死锁",
                "cause": "A 先锁 users 后 orders，B 先 orders 后 users",
                "fix": "所有事务按相同顺序访问表。缩短事务。死锁检测自动 kill 一个"
        }
    ],

    exercises: [
      { level: '基础', task: "用事务转账", answer: "BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1; UPDATE accounts SET balance = balance + 100 WHERE id = 2; COMMIT;" },
      { level: '基础', task: "回滚操作", answer: "BEGIN; DELETE FROM users WHERE id = 5; ROLLBACK; -- 撤销删除" }
    ],
    summary: "事务：BEGIN/COMMIT/ROLLBACK。ACID 特性。要么全成功，要么全失败。"
  },

  "MfengY3ouz6sSOx3PXYf8": {
    mentalModel: "视图是'虚拟表'：CREATE VIEW 视图名 AS SELECT ...。保存查询，简化复杂查询。",
    sections: [
      {
        title: "创建视图",
        content: "CREATE VIEW 视图名 AS SELECT ...。视图是保存的查询，像虚拟表。"
      },
      {
        title: "使用视图",
        content: "SELECT * FROM 视图名。像查询表一样查询视图。"
      },
      {
        title: "常见错误",
        content: "视图性能差（每次查询都执行 SELECT）。视图不能更新（某些数据库）。"
      }
        ],

    diagnosis: [
{
                "symptom": "查视图很慢——嵌套视图展开多层",
                "cause": "视图定义存 SQL——每次查都执行。嵌套视图多次展开",
                "fix": "用 EXPLAIN 分析。避免嵌套视图。用 MATERIALIZED VIEW"
        },
        {
                "symptom": "视图 SELECT *——表加列后视图随之变列数",
                "cause": "依赖固定列位置的代码出错",
                "fix": "视图明确列名：CREATE VIEW v AS SELECT id,name,email FROM users"
        }
    ],

    exercises: [
      { level: '基础', task: "创建活跃用户视图", answer: "CREATE VIEW active_users AS SELECT * FROM users WHERE status = 'active';" },
      { level: '基础', task: "查询视图", answer: "SELECT * FROM active_users;" }
    ],
    summary: "CREATE VIEW 视图名 AS SELECT ...。视图是虚拟表，简化复杂查询。"
  },

  "7seneb4TWts4v1_x8xlcZ": {
    mentalModel: "存储过程是'保存的 SQL'：CREATE PROCEDURE 保存 SQL 代码，可以重复调用。",
    sections: [
      {
        title: "创建存储过程",
        content: "CREATE PROCEDURE 过程名(参数) AS BEGIN SQL 代码 END。保存 SQL 代码，可以重复调用。"
      },
      {
        title: "调用存储过程",
        content: "CALL 过程名(参数)。像调用函数一样调用存储过程。"
      },
      {
        title: "常见错误",
        content: "存储过程难以调试。存储过程难以版本控制。存储过程难以测试。"
      }
        ],

    diagnosis: [
{
                "symptom": "存储过程改了生产还是旧逻辑",
                "cause": "存储过程存 DB 中无版本控制",
                "fix": "DDL 纳入 Git(Flyway/Liquibase)管理。业务逻辑放应用层"
        },
        {
                "symptom": "存储过程拼接字符串→SQL 注入",
                "cause": "SET @sql=CONCAT('SELECT...WHERE name=\"',input,'\"')",
                "fix": "用 PREPARE/EXECUTE 参数化查询。避免拼接用户输入"
        }
    ],

    exercises: [
      { level: '基础', task: "创建存储过程", answer: "CREATE PROCEDURE get_user(IN user_id INT) BEGIN SELECT * FROM users WHERE id = user_id; END;" },
      { level: '基础', task: "调用存储过程", answer: "CALL get_user(5);" }
    ],
    summary: "CREATE PROCEDURE 保存 SQL 代码。CALL 调用。难以调试和版本控制。"
  },

  "3OpGaQhyNtk1n1MLp-tlb": {
    mentalModel: "触发器是'自动执行的 SQL'：CREATE TRIGGER 在 INSERT/UPDATE/DELETE 时自动执行。",
    sections: [
      {
        title: "创建触发器",
        content: "CREATE TRIGGER 触发器名 BEFORE/AFTER INSERT/UPDATE/DELETE ON 表名 FOR EACH ROW BEGIN SQL 代码 END。"
      },
      {
        title: "使用场景",
        content: "自动更新 updated_at 列。自动记录日志。自动计算字段。"
      },
      {
        title: "常见错误",
        content: "触发器难以调试（隐式执行）。触发器影响性能。触发器难以版本控制。"
      }
        ],

    diagnosis: [
{
                "symptom": "触发器导致 INSERT/UPDATE 变慢",
                "cause": "每行触发额外 SQL——批量插入时性能骤降",
                "fix": "移到应用层。必须用则只留轻量操作，避免触发器中 SELECT"
        },
        {
                "symptom": "触发器级联触发→死锁",
                "cause": "表 A AFTER INSERT 更新表 B，B AFTER UPDATE 更新 A→循环",
                "fix": "避免循环触发器。设最大触发深度。用条件避免循环"
        }
    ],

    exercises: [
      { level: '基础', task: "创建触发器自动更新 updated_at", answer: "CREATE TRIGGER update_timestamp BEFORE UPDATE ON users FOR EACH ROW SET NEW.updated_at = NOW();" }
    ],
    summary: "CREATE TRIGGER 在 INSERT/UPDATE/DELETE 时自动执行。难以调试和影响性能。"
  },

  "JgoZzx4BfK7tmosgpZOsf": {
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
                "symptom": "INSERT 失败——父记录不存在",
                "cause": "orders.user_id 对应的 users.id 不存在",
                "fix": "先插父行。或 SET FOREIGN_KEY_CHECKS=0（慎用）"
        },
        {
                "symptom": "DELETE 父行+CASCADE→子表数据删光",
                "cause": "ON DELETE CASCADE 级联删除所有关联订单",
                "fix": "慎用 CASCADE。用 ON DELETE RESTRICT 或 RESTRICT。先查受影响行数"
        }
    ],

    exercises: [
      { level: '基础', task: "创建带外键的表", answer: "CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));" },
      { level: '基础', task: "创建级联删除的外键", answer: "CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE);" }
    ],
    summary: "FOREIGN KEY 保证引用完整性。ON DELETE CASCADE 级联删除。外键影响性能。"
  },

  "DQEa8LrJ9TVW4ULBE4aHJ": {
    mentalModel: "备份是'保存数据副本'：mysqldump 导出 SQL，可以恢复数据。",
    sections: [
      {
        title: "mysqldump",
        content: "mysqldump -u 用户名 -p 数据库名 > backup.sql。导出数据库为 SQL 文件。"
      },
      {
        title: "恢复备份",
        content: "mysql -u 用户名 -p 数据库名 < backup.sql。从 SQL 文件恢复数据库。"
      },
      {
        title: "常见错误",
        content: "备份大数据库很慢。恢复会覆盖现有数据。备份文件要安全存储。"
      }
        ],

    diagnosis: [
{
                "symptom": "mysqldump 恢复时语法错误",
                "cause": "导出/导入版本不兼容——新版语法/字符集差异",
                "fix": "mysqldump --compatible=name --default-character-set=utf8mb4"
        },
        {
                "symptom": "大库 mysqldump 耗时数小时+锁表",
                "cause": "默认 --lock-tables 锁表保证一致性",
                "fix": "InnoDB 用 --single-transaction 不锁表。大库用 mydumper 或 xtrabackup"
        }
    ],

    exercises: [
      { level: '基础', task: "备份 mydb 数据库", answer: "mysqldump -u root -p mydb > backup.sql" },
      { level: '基础', task: "恢复 mydb 数据库", answer: "mysql -u root -p mydb < backup.sql" }
    ],
    summary: "mysqldump 导出 SQL，mysql < backup.sql 恢复。备份要定期做。"
  }
};
