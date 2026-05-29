import type { DeepTutorial } from '../deep-types';

export const SQL_DEEP_TUTORIALS_4: Record<string, DeepTutorial> = {
  "gx4KaFqKgJX9n9_ZGMqlZ": {
    mentalModel: 'SQL vs NoSQL 是两种不同的数据组织哲学——SQL 像 Excel 表格（结构化、关系强），NoSQL 像 JSON 文档（灵活、扩展快）。',
    handsOn: [
      { title: 'SQL 查询', cmd: 'SELECT u.name, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id;', output: '+-------+-------------+\n| name  | order_count |\n+-------+-------------+\n| Alice |           3 |\n| Bob   |           1 |\n+-------+-------------+', explain: 'SQL 用 JOIN 连接多张表，GROUP BY 聚合统计。关系型数据库擅长处理这种结构化数据。' },
      { title: 'NoSQL 查询（MongoDB）', cmd: 'db.users.aggregate([{$lookup: {from: "orders", localField: "_id", foreignField: "user_id", as: "orders"}}, {$project: {name: 1, order_count: {$size: "$orders"}}}])', output: '[{name: "Alice", order_count: 3}, {name: "Bob", order_count: 1}]', explain: 'NoSQL 用聚合管道处理数据。MongoDB 用 JSON 格式，更灵活但复杂查询不如 SQL 直观。' },
    ],
    diagnosis: [
      { symptom: '不知道该用 SQL 还是 NoSQL', cause: '不清楚两者的优缺点。', fix: 'SQL 适合：结构化数据、复杂查询、事务一致性。NoSQL 适合：灵活 schema、海量数据、高并发写入。' },
      { symptom: 'NoSQL 查询性能差', cause: '没有合适的索引，或者查询太复杂。', fix: 'NoSQL 适合简单查询。复杂查询考虑用 SQL，或者用 NoSQL 的聚合管道。' },
    ],
    exercises: [
      { level: '基础', task: '对比 SQL 和 NoSQL 的查询语法', hint: '写同一个查询的两种版本', answer: `-- SQL: 查询每个用户的订单数
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- MongoDB: 同样的查询
db.users.aggregate([
  {$lookup: {from: "orders", localField: "_id", foreignField: "user_id", as: "orders"}},
  {$project: {name: 1, order_count: {$size: "$orders"}}}
]);` },
      { level: '进阶', task: '分析一个场景，决定用 SQL 还是 NoSQL', hint: '考虑数据特点、查询需求、扩展性', answer: `场景: 电商网站，需要存储产品信息、用户信息、订单信息，需要复杂的关联查询（如"购买过某产品的用户还购买了什么"）。

分析:
- 数据结构化（产品、用户、订单有明确 schema）
- 需要复杂关联查询（JOIN 多张表）
- 需要事务一致性（订单支付）
- 数据量中等（百万级）

结论: 用 SQL（如 MySQL/PostgreSQL），因为需要复杂 JOIN 和事务。

场景: 社交平台，需要存储用户动态（文本、图片、视频），需要高并发写入，查询主要是"某用户的动态"。

分析:
- 数据半结构化（动态内容多样）
- 高并发写入
- 查询简单（按用户 ID 查询）
- 数据量巨大（亿级）

结论: 用 NoSQL（如 MongoDB/Cassandra），因为灵活 schema 和高并发写入。` },
      { level: '挑战', task: '设计一个混合架构：SQL 存储核心业务数据，NoSQL 存储日志', hint: 'SQL + NoSQL 各自发挥优势', answer: `架构设计:

1. SQL (PostgreSQL):
   - users 表: 用户信息
   - products 表: 产品信息
   - orders 表: 订单信息
   - order_items 表: 订单详情
   - 用途: 核心业务数据，需要事务一致性和复杂 JOIN

2. NoSQL (Elasticsearch):
   - logs 索引: 系统日志、用户行为日志
   - 用途: 海量日志存储，全文搜索，实时分析

3. 数据流:
   - 用户下单 -> SQL 存储订单（事务）
   - 用户浏览 -> NoSQL 记录行为日志（高并发）
   - 管理员查询 -> SQL 复杂查询（JOIN 多张表）
   - 日志分析 -> NoSQL 聚合查询（实时统计）

优势:
- SQL 保证核心业务数据一致性
- NoSQL 处理海量日志和高并发写入
- 各自发挥优势，互补不足` },
    ],
    prereqs: ['SQL 基础 — SELECT/JOIN', '数据库概念'],
    nextSteps: ['NoSQL — MongoDB/Redis', '分布式数据库 — CockroachDB/TiDB'],
  },

  "tBzMDfCMh6MIagNaxCzin": {
    mentalModel: '数据类型是数据库的"容器规格"——INT 装整数，VARCHAR 装字符串，TIMESTAMP 装时间。像不同大小的盒子，装不同大小的东西。',
    handsOn: [
      { title: '创建表（指定数据类型）', cmd: 'CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, price DECIMAL(10, 2) NOT NULL, stock INT DEFAULT 0, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);', output: 'Query OK, 0 rows affected', explain: 'id 是 INT（整数），name 是 VARCHAR(100)（最多 100 字符的字符串），price 是 DECIMAL(10,2)（10 位数，2 位小数），stock 是 INT，created_at 是 TIMESTAMP。' },
      { title: '插入数据（匹配数据类型）', cmd: 'INSERT INTO products (name, price, stock) VALUES (\'Laptop\', 999.99, 50);', output: 'Query OK, 1 row affected', explain: '插入数据时，值必须匹配列的数据类型。price 是 DECIMAL(10,2)，所以 999.99 合法。' },
      { title: '数据类型转换', cmd: 'SELECT CAST(price AS CHAR) as price_str FROM products;', output: '+-----------+\n| price_str |\n+-----------+\n| 999.99    |\n+-----------+', explain: 'CAST 转换数据类型。price 从 DECIMAL 转成 CHAR（字符串）。' },
    ],
    diagnosis: [
      { symptom: 'INSERT 报错：数据类型不匹配', cause: '插入的值和列的数据类型不匹配。', fix: '检查数据类型。如 price 是 DECIMAL(10,2)，不能插入字符串。用 CAST 转换数据类型。' },
      { symptom: 'VARCHAR 长度不够', cause: 'VARCHAR(100) 只能存 100 个字符。', fix: '增加长度：ALTER TABLE products MODIFY name VARCHAR(200);' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 users 表，包含 id、name、email、age、created_at', hint: 'CREATE TABLE + 数据类型', answer: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);` },
      { level: '进阶', task: '创建一个 orders 表，包含 DECIMAL 类型的 price 和 quantity', hint: 'CREATE TABLE + DECIMAL', answer: `CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  price DECIMAL(10, 2) NOT NULL,
  total DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * price) STORED,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);` },
      { level: '挑战', task: '设计一个完整的电商数据库，合理使用各种数据类型', hint: 'INT/VARCHAR/DECIMAL/TIMESTAMP/ENUM', answer: `-- 1. 用户表
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT CHECK (age >= 0 AND age <= 150),
  status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. 产品分类表
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. 产品表
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
  category_id INT,
  stock INT DEFAULT 0 CHECK (stock >= 0),
  sku VARCHAR(50) UNIQUE,
  weight DECIMAL(8, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 4. 订单表
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('pending', 'paid', 'shipped', 'completed', 'cancelled') DEFAULT 'pending',
  total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 5. 订单详情表
CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
  price DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * price) STORED,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);` },
    ],
    prereqs: ['SQL 基础 — CREATE TABLE', '数据库概念'],
    nextSteps: ['索引 — 优化查询性能', '约束 — CHECK/FOREIGN KEY'],
  },
};
