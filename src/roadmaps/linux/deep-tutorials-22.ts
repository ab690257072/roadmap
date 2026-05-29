import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_22: Record<string, DeepTutorial> = {
  "R9TZfkgVUQNLnMpDhovJa": {
    mentalModel: 'SQL 的 CRUD 对应 INSERT（增）、SELECT（查）、UPDATE（改）、DELETE（删）。这是数据库操作的四大基本动作。',
    handsOn: [
      { title: 'INSERT 插入数据', cmd: 'INSERT INTO users (name, email, age) VALUES (\'Alice\', \'alice@example.com\', 25);', output: 'INSERT 0 1', explain: 'INSERT INTO 表名 (列1, 列2) VALUES (值1, 值2)。明确列出列名比不列更安全（表结构变了也不会出错）。' },
      { title: '批量 INSERT', cmd: 'INSERT INTO users (name, email, age) VALUES (\'Bob\', \'bob@example.com\', 30), (\'Carol\', \'carol@example.com\', 28);', output: 'INSERT 0 2', explain: '一次插入多行比循环单行快 10-100 倍。大批量用 COPY（PostgreSQL）或 LOAD DATA（MySQL）。' },
      { title: 'UPDATE 修改数据', cmd: 'UPDATE users SET age = 26 WHERE name = \'Alice\';', output: 'UPDATE 1', explain: 'UPDATE 表 SET 列 = 值 WHERE 条件。⚠️ 忘了 WHERE 会改所有行！生产环境 UPDATE 前先 SELECT 确认范围。' },
      { title: 'DELETE 删除数据', cmd: 'DELETE FROM users WHERE name = \'Alice\';', output: 'DELETE 1', explain: 'DELETE FROM 表 WHERE 条件。⚠️ 同样别忘了 WHERE——DELETE FROM users 会清空整张表。DELETE 可以 ROLLBACK，TRUNCATE 通常不能。' },
    ],
    diagnosis: [
      { symptom: 'UPDATE/DELETE 影响了太多行', cause: 'WHERE 条件写错了或者漏了。', fix: '先 ROLLBACK 撤销（如果在事务里）。或者从备份恢复。预防措施：UPDATE/DELETE 前先 SELECT 确认范围。' },
      { symptom: 'INSERT 报 "duplicate key value"', cause: '主键或唯一约束冲突。比如 email 已经存在。', fix: 'INSERT ... ON CONFLICT DO UPDATE（PostgreSQL）或 INSERT ... ON DUPLICATE KEY UPDATE（MySQL）做 UPSERT。' },
      { symptom: 'DELETE 很慢', cause: '表很大且 WHERE 条件列没有索引。或者触发了大量 CASCADE 删除。', fix: '给 WHERE 条件列加索引。或者分批删除：DELETE FROM table WHERE id IN (SELECT id FROM table WHERE ... LIMIT 1000)。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 products 表，插入 3 个产品，然后更新其中一个的价格，最后删除一个', hint: 'CREATE TABLE + INSERT + UPDATE + DELETE', answer: 'CREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  price DECIMAL(10,2) NOT NULL,\n  stock INT DEFAULT 0\n);\n\nINSERT INTO products (name, price, stock) VALUES\n  (\'Laptop\', 999.99, 50),\n  (\'Mouse\', 29.99, 200),\n  (\'Keyboard\', 79.99, 150);\n\nUPDATE products SET price = 899.99 WHERE name = \'Laptop\';\n\nDELETE FROM products WHERE name = \'Mouse\';\n\nSELECT * FROM products;' },
      { level: '进阶', task: '写一个"软删除"：不真的删除数据，而是标记 deleted_at 时间戳', hint: 'ALTER TABLE 加 deleted_at 列，UPDATE 代替 DELETE', answer: '-- 加软删除列\nALTER TABLE users ADD COLUMN deleted_at TIMESTAMP;\n\n-- 软删除（标记而不是真删）\nUPDATE users SET deleted_at = NOW() WHERE id = 5;\n\n-- 查询时过滤已删除的\nSELECT * FROM users WHERE deleted_at IS NULL;\n\n-- 恢复已删除的\nUPDATE users SET deleted_at = NULL WHERE id = 5;' },
      { level: '挑战', task: '写一个 UPSERT：如果邮箱已存在就更新名字，不存在就插入新行', hint: 'INSERT ... ON CONFLICT (email) DO UPDATE', answer: '-- PostgreSQL\nINSERT INTO users (name, email, age)\nVALUES (\'Alice Smith\', \'alice@example.com\', 26)\nON CONFLICT (email) DO UPDATE\nSET name = EXCLUDED.name, age = EXCLUDED.age, updated_at = NOW();\n\n-- MySQL\nINSERT INTO users (name, email, age)\nVALUES (\'Alice Smith\', \'alice@example.com\', 26)\nON DUPLICATE KEY UPDATE\nname = VALUES(name), age = VALUES(age), updated_at = NOW();' },
    ],
    prereqs: ['CREATE TABLE — 建表', '数据类型 — INT/VARCHAR/TIMESTAMP'],
    nextSteps: ['SELECT 进阶 — JOIN/GROUP BY/子查询', '事务 — BEGIN/COMMIT/ROLLBACK'],
  },
};
