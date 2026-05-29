import type { DeepTutorial } from '../deep-types';

export const SQL_DEEP_TUTORIALS_2: Record<string, DeepTutorial> = {
  "R9DQNc0AyAQ2HLpP4HOk6": {
    mentalModel: '关系型数据库是把数据组织成表格（表），表与表之间通过关系（外键）连接——像 Excel 工作簿，多个工作表通过公式关联。',
    handsOn: [
      { title: '查看所有表', cmd: 'SHOW TABLES;', output: '+------------------+\n| Tables_in_mydb   |\n+------------------+\n| users            |\n| orders           |\n| products         |\n+------------------+', explain: 'SHOW TABLES 显示当前数据库的所有表。users、orders、products 是三张表。' },
      { title: '查看表结构', cmd: 'DESCRIBE users;', output: '+----------+--------------+------+-----+---------+----------------+\n| Field    | Type         | Null | Key | Default | Extra          |\n+----------+--------------+------+-----+---------+----------------+\n| id       | int          | NO   | PRI | NULL    | auto_increment |\n| name     | varchar(100) | NO   |     | NULL    |                |\n| email    | varchar(100) | NO   | UNI | NULL    |                |\n+----------+--------------+------+-----+---------+----------------+', explain: 'DESCRIBE 显示表结构。id 是主键（PRI），email 是唯一索引（UNI）。' },
      { title: '查看表之间的关系', cmd: 'SELECT TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME FROM information_schema.KEY_COLUMN_USAGE WHERE REFERENCED_TABLE_NAME IS NOT NULL;', output: '+------------+-------------+----------------------+------------------------+\n| TABLE_NAME | COLUMN_NAME | REFERENCED_TABLE_NAME | REFERENCED_COLUMN_NAME |\n+------------+-------------+----------------------+------------------------+\n| orders     | user_id     | users                | id                     |\n| orders     | product_id  | products             | id                     |\n+------------+-------------+----------------------+------------------------+', explain: 'information_schema.KEY_COLUMN_USAGE 显示外键关系。orders.user_id 引用 users.id。' },
      { title: '查询关联数据', cmd: 'SELECT u.name, o.order_date, p.product_name FROM users u JOIN orders o ON u.id = o.user_id JOIN products p ON o.product_id = p.id LIMIT 5;', output: '+-------+------------+--------------+\n| name  | order_date | product_name |\n+-------+------------+--------------+\n| Alice | 2024-01-15 | Laptop       |\n| Bob   | 2024-01-16 | Mouse        |\n+-------+------------+--------------+', explain: 'JOIN 连接多张表。u.id = o.user_id 把 users 和 orders 连接起来。' },
    ],
    diagnosis: [
      { symptom: 'JOIN 后数据重复', cause: '一对多关系（一个用户有多个订单），JOIN 后每个订单都显示一次用户信息。', fix: '正常现象。如果想看每个用户的订单总数，用 GROUP BY：SELECT u.name, COUNT(*) FROM users u JOIN orders o ON u.id = o.user_id GROUP BY u.name。' },
      { symptom: 'JOIN 后数据丢失', cause: 'INNER JOIN 只返回匹配的行。如果某个用户没有订单，INNER JOIN 不会显示这个用户。', fix: '用 LEFT JOIN：SELECT u.name, o.order_date FROM users u LEFT JOIN orders o ON u.id = o.user_id。LEFT JOIN 会显示所有用户，即使没有订单。' },
      { symptom: '外键约束报错', cause: '插入数据时，外键引用的记录不存在。', fix: '先插入被引用的记录（如 users），再插入引用它的记录（如 orders）。或者临时禁用外键检查：SET FOREIGN_KEY_CHECKS=0; ... SET FOREIGN_KEY_CHECKS=1;' },
    ],
    exercises: [
      { level: '基础', task: '创建一个简单的数据库，包含 users 和 orders 两张表，orders 表有外键引用 users', hint: 'CREATE TABLE + FOREIGN KEY', answer: `-- 1. 创建 users 表
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

-- 2. 创建 orders 表（有外键）
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_date DATE NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 3. 插入数据
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com');

INSERT INTO orders (user_id, order_date, total) VALUES (1, '2024-01-15', 99.99);
INSERT INTO orders (user_id, order_date, total) VALUES (2, '2024-01-16', 49.99);

-- 4. 查询关联数据
SELECT u.name, o.order_date, o.total FROM users u JOIN orders o ON u.id = o.user_id;` },
      { level: '进阶', task: '写一个查询，找出每个用户最近的订单', hint: 'JOIN + MAX() + GROUP BY', answer: `-- 方法 1: 子查询
SELECT u.name, o.order_date, o.total
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.order_date = (
  SELECT MAX(order_date) FROM orders WHERE user_id = u.id
);

-- 方法 2: 窗口函数（MySQL 8.0+）
SELECT u.name, o.order_date, o.total
FROM users u
JOIN (
  SELECT user_id, order_date, total,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY order_date DESC) as rn
  FROM orders
) o ON u.id = o.user_id AND o.rn = 1;` },
      { level: '挑战', task: '写一个查询，找出购买过所有产品的用户', hint: '关系除法（Relational Division）', answer: `-- 方法: 子查询 + COUNT
SELECT u.name
FROM users u
WHERE NOT EXISTS (
  SELECT p.id
  FROM products p
  WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.user_id = u.id AND o.product_id = p.id
  )
);

-- 或者用 COUNT
SELECT u.name
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
HAVING COUNT(DISTINCT o.product_id) = (SELECT COUNT(*) FROM products);` },
    ],
    prereqs: ['SQL 基础 — SELECT/INSERT/UPDATE/DELETE', 'JOIN — 表连接'],
    nextSteps: ['索引 — 优化查询性能', '事务 — ACID 特性'],
  },

  "fNTb9y3zs1HPYclAmu_Wv": {
    mentalModel: 'RDBMS 的优势是数据一致性和复杂查询，劣势是扩展性和灵活性——像银行系统，保证每笔交易准确，但难以处理海量并发。',
    handsOn: [
      { title: '事务（ACID）', cmd: 'START TRANSACTION; UPDATE accounts SET balance = balance - 100 WHERE user_id = 1; UPDATE accounts SET balance = balance + 100 WHERE user_id = 2; COMMIT;', output: 'Query OK, 1 row affected\nQuery OK, 1 row affected\nQuery OK, 0 rows affected', explain: 'START TRANSACTION 开始事务。两个 UPDATE 要么都成功（COMMIT），要么都失败（ROLLBACK）。保证转账的原子性。' },
      { title: '复杂查询', cmd: 'SELECT u.name, COUNT(o.id) as order_count, SUM(o.total) as total_spent FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id HAVING total_spent > 100 ORDER BY total_spent DESC;', output: '+-------+-------------+-------------+\n| name  | order_count | total_spent |\n+-------+-------------+-------------+\n| Alice |           5 |      599.95 |\n| Bob   |           3 |      249.97 |\n+-------+-------------+-------------+', explain: 'JOIN + GROUP BY + HAVING + ORDER BY 组合。找出消费超过 100 的用户，按消费金额排序。' },
      { title: '外键约束', cmd: 'DELETE FROM users WHERE id = 1;', output: 'ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails', explain: '外键约束阻止删除被引用的记录。user_id = 1 在 orders 表中被引用，所以不能删除。' },
    ],
    diagnosis: [
      { symptom: 'RDBMS 扩展性差', cause: '单表数据量太大（超过千万行），查询变慢。', fix: '分库分表（Sharding）。或者用 NoSQL（如 MongoDB）处理海量数据。' },
      { symptom: 'RDBMS 灵活性差', cause: '表结构固定，难以处理半结构化数据（如 JSON）。', fix: '用 JSON 字段（MySQL 5.7+，PostgreSQL 9.2+）。或者用 NoSQL（如 MongoDB）处理灵活数据。' },
      { symptom: 'RDBMS 并发性能差', cause: '行级锁竞争，高并发时性能下降。', fix: '优化索引，减少锁竞争。或者用缓存（Redis）减轻数据库压力。' },
    ],
    exercises: [
      { level: '基础', task: '写一个转账事务，保证原子性', hint: 'START TRANSACTION + UPDATE + COMMIT/ROLLBACK', answer: `START TRANSACTION;

-- 扣款
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;

-- 检查余额是否足够
SELECT balance FROM accounts WHERE user_id = 1;

-- 如果余额足够，继续转账
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;

-- 提交事务
COMMIT;

-- 如果出错，回滚
-- ROLLBACK;` },
      { level: '进阶', task: '写一个复杂查询，找出每个用户购买最多的产品类别', hint: 'JOIN + GROUP BY + 子查询', answer: `SELECT u.name, p.category, COUNT(*) as purchase_count
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id
GROUP BY u.id, u.name, p.category
HAVING purchase_count = (
  SELECT MAX(cnt)
  FROM (
    SELECT COUNT(*) as cnt
    FROM orders o2
    JOIN products p2 ON o2.product_id = p2.id
    WHERE o2.user_id = u.id
    GROUP BY p2.category
  ) as sub
);` },
      { level: '挑战', task: '设计一个电商数据库，包含用户、产品、订单、订单详情，并写出关键查询', hint: 'CREATE TABLE + 外键 + 复杂查询', answer: `-- 1. 创建表
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- 2. 关键查询：每个用户的总消费
SELECT u.name, SUM(oi.quantity * oi.price) as total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC;` },
    ],
    prereqs: ['SQL 基础 — SELECT/INSERT/UPDATE/DELETE', '关系型数据库概念'],
    nextSteps: ['NoSQL — MongoDB/Redis', '分布式数据库 — CockroachDB/TiDB'],
  },
};
