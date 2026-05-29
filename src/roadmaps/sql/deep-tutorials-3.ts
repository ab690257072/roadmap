import type { DeepTutorial } from '../deep-types';

export const SQL_DEEP_TUTORIALS_3: Record<string, DeepTutorial> = {
  "nhUKKWyBH80nyKfGT8ErC": {
    mentalModel: 'SQL 基础是从创建数据库、创建表、插入数据开始的——像盖房子先打地基，先有结构再有数据。',
    handsOn: [
      { title: '创建数据库', cmd: 'CREATE DATABASE mydb;', output: 'Query OK, 1 row affected', explain: 'CREATE DATABASE 创建一个新的数据库。mydb 是数据库名。' },
      { title: '使用数据库', cmd: 'USE mydb;', output: 'Database changed', explain: 'USE 切换到指定数据库。后续的所有操作都在这个数据库中进行。' },
      { title: '创建表', cmd: 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);', output: 'Query OK, 0 rows affected', explain: 'CREATE TABLE 创建表。id 是自增主键，name 和 email 不能为空，email 必须唯一，created_at 默认当前时间。' },
      { title: '插入数据', cmd: 'INSERT INTO users (name, email) VALUES (\'Alice\', \'alice@example.com\'), (\'Bob\', \'bob@example.com\');', output: 'Query OK, 2 rows affected', explain: 'INSERT INTO 插入数据。可以一次插入多行。' },
    ],
    diagnosis: [
      { symptom: 'CREATE TABLE 报错', cause: '表已存在，或者语法错误。', fix: '用 CREATE TABLE IF NOT EXISTS 避免报错。或者 DROP TABLE IF EXISTS 先删除再创建。' },
      { symptom: 'INSERT 报错', cause: '违反唯一约束（email 重复），或者 NOT NULL 字段为空。', fix: '检查数据是否重复。确保 NOT NULL 字段有值。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 products 表，包含 id、name、price、category、created_at', hint: 'CREATE TABLE + 字段定义', answer: `CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);` },
      { level: '进阶', task: '创建一个 orders 表，包含外键引用 users 和 products', hint: 'CREATE TABLE + FOREIGN KEY', answer: `CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);` },
      { level: '挑战', task: '设计一个完整的电商数据库（用户、产品、订单、订单详情），并写出建表语句', hint: '多张表 + 外键关系', answer: `-- 1. 用户表
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. 产品分类表
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE
);

-- 3. 产品表
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category_id INT,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- 4. 订单表
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('pending', 'paid', 'shipped', 'completed', 'cancelled') DEFAULT 'pending',
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 5. 订单详情表
CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);` },
    ],
    prereqs: ['数据库概念 — 表/行/列', 'SQL 基础 — CREATE/INSERT'],
    nextSteps: ['SELECT — 查询数据', 'JOIN — 表连接'],
  },

  "6yoo7qC6X2jYDIjd3HIm7": {
    mentalModel: 'SQL 关键字是 SQL 语言的"单词"——SELECT、FROM、WHERE 等。像学英语先背单词，学 SQL 先认识关键字。',
    handsOn: [
      { title: 'SELECT 关键字', cmd: 'SELECT name, email FROM users;', output: '+-------+------------------+\n| name  | email            |\n+-------+------------------+\n| Alice | alice@example.com|\n| Bob   | bob@example.com  |\n+-------+------------------+', explain: 'SELECT 查询指定列。name 和 email 是列名。' },
      { title: 'WHERE 关键字', cmd: 'SELECT name FROM users WHERE name = \'Alice\';', output: '+-------+\n| name  |\n+-------+\n| Alice |\n+-------+', explain: 'WHERE 过滤条件。只查询 name = \'Alice\' 的行。' },
      { title: 'ORDER BY 关键字', cmd: 'SELECT name FROM users ORDER BY name;', output: '+-------+\n| name  |\n+-------+\n| Alice |\n| Bob   |\n+-------+', explain: 'ORDER BY 排序。默认升序（ASC），可以用 DESC 降序。' },
    ],
    diagnosis: [
      { symptom: 'SQL 语法错误', cause: '关键字拼写错误，或者顺序错误。', fix: '检查 SQL 语法。SELECT ... FROM ... WHERE ... ORDER BY ... 是标准顺序。' },
      { symptom: '关键字和列名冲突', cause: '列名和 SQL 关键字相同（如 order、select）。', fix: '用反引号包裹列名：`order`、`select`。' },
    ],
    exercises: [
      { level: '基础', task: '写出查询所有用户、按名字排序的 SQL', hint: 'SELECT + ORDER BY', answer: `SELECT * FROM users ORDER BY name;` },
      { level: '进阶', task: '写出查询价格大于 100 的产品、按价格降序排列的 SQL', hint: 'SELECT + WHERE + ORDER BY DESC', answer: `SELECT * FROM products WHERE price > 100 ORDER BY price DESC;` },
      { level: '挑战', task: '写出查询每个分类下产品数量、按数量降序排列的 SQL', hint: 'SELECT + GROUP BY + COUNT + ORDER BY', answer: `SELECT category, COUNT(*) as product_count
FROM products
GROUP BY category
ORDER BY product_count DESC;` },
    ],
    prereqs: ['SQL 基础 — CREATE/INSERT', '数据库概念'],
    nextSteps: ['JOIN — 表连接', '子查询 — 嵌套查询'],
  },
};
