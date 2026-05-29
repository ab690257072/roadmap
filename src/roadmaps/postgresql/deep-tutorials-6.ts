import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_6: Record<string, DeepTutorial> = {
  // 91-105: 高级查询模式/分区/物化视图/社区/安全/调试/监控
  "r6Blr7Q4wOnvJ-m6NvPyP": {
    mentalModel: '分片（Sharding）就是把一张超大表"横着切"——按 user_id 范围或哈希值分散到不同数据库实例。每个实例只管自己那部分数据，合在一起就是完整数据。PG 原生没有分片，一般借助 Citus 或应用层分片。',
    sections: [
      { title: 'PG 分片方案', content: 'Citus：PG 扩展，把 PG 变成分布式数据库。Coordinators（协调节点）+ Workers（数据节点），数据自动分片分布。应用层分片：代码决定 user_id % 4 → 连对应数据库。每个分片独立 PG 实例。分片键（Sharding Key）选择最重要——选不好数据分布不均（热点分片）。和分区区别：分区在同一实例内，分片跨多个实例。' },
    ],
    diagnosis: [
      { symptom: '按 user_id 哈希分片后某分片数据量是其他 3 倍', cause: '哈希分布不均匀——某些用户数据量远超其他用户（热点用户），或哈希函数对特定 ID 范围分布不均。', fix: 'Citus 增加分片数。一致性哈希减少热点。识别热点分片检查各分片数据量。' },
      { symptom: '跨分片 JOIN 查询超时或返回不完整', cause: '分片后 JOIN 跨分片——PG 原生不支持跨实例 JOIN。需应用层合并或使用支持分布式的扩展。', fix: '设计分片键使关联数据落在同分片（orders 和 order_items 用相同的 distribution key）。Citus 支持 co-located join。非必要不跨分片查询。' },
    ],
  exercises: [
      { level: '进阶', task: '设计按 user_id 哈希分 4 个实例的分片方案', hint: 'hash(user_id) % 4 → DB0/DB1/DB2/DB3', answer: '应用代码：shard_num = hash(user_id) % 4 → 连接字符串指向 shard-{shard_num}.db.internal。关键：一旦确定分片数，扩容很难（需要迁移数据）。预留分片方案：用一致性哈希或逻辑分片（如 1000 个逻辑分片分布在 4 个实例上，扩容时移动逻辑分片）。' },
    ],
  },

  "Fcl7AD2M6WrMbxdvnl-ub": {
    mentalModel: '范式化就是"不要把相同数据存多份"——每份数据只在一个地方，通过外键引用。3NF（第三范式）是权衡——既不冗余到更新异常，也不拆太细到查询没法写。',
    sections: [
      { title: '反范式化的权衡', content: '完全范式化 = 零冗余但查询需要多次 JOIN。适度反范式化 = 故意存一些冗余来减少 JOIN、提升读性能。举例：订单表里存 user_name（冗余）而不是每次 JOIN users 表——因为订单创建后 user_name 不会改（或改了也无所谓）。原则：以读性能为优先做反范式化决策，确保冗余数据有明确的"写入时同步"机制。' },
    ],
    diagnosis: [
      { symptom: '完全范式化数据库查用户详情需 JOIN 8 张表', cause: '过度范式化——每小段信息拆成独立表。满足 3NF 但读性能极差。', fix: '适度反范式化——查询频繁的关联数据合并到一张表。如用户表冗余最近登录时间、user_profile JSONB 放用户表。以读性能为优先做决策。' },
      { symptom: '更新用户名后历史订单中用户名未变', cause: '反范式化后数据不一致——订单表冗余存了 user_name，更新 users 表后未同步更新 orders 表。', fix: '用触发器自动同步：CREATE TRIGGER AFTER UPDATE ON users ... EXECUTE FUNCTION sync_orders_username(); 若历史数据不需变（订单快照语义）则不需要更新——要有文档说明决策。' },
    ],
  exercises: [
      { level: '基础', task: '判断 orders(user_id, user_email) 是否违反了范式，如果是，什么场景下这样设计合理', hint: 'user_email 依赖 user_id 不依赖 order_id', answer: '违反了 3NF——user_email 传递依赖于 order_id（通过 user_id）。但在"订单历史不可变"的场景下，这样设计合理——避免 JOIN users 表的性能开销，同时确保历史订单中用户邮箱即使后来改了也不受影响。' },
    ],
  },

  "rnXcM62rgq3p6FQ9AWW1R": {
    mentalModel: 'SQL 反模式是"看起来很对但挖了坑等你跳"的写法。每个老手都踩过这些坑——EAV（把所有属性存成 key-value）、用逗号分隔存多值、把图片/文件存进数据库。',
    sections: [
      { title: '常见 SQL 反模式', content: '1) EAV（Entity-Attribute-Value）：attr_name | attr_value 代替正经列——查询噩梦、无类型安全。2) 多值列：tags = "tag1,tag2,tag3"——无法建索引、拆分查询痛苦。用数组 tags TEXT[] 代替。3) 图片存数据库：大二进制 blob 存 PG = 慢备份、慢查询、慢复制。存文件路径/URL，文件放 S3/对象存储。4) 软删除：deleted_at IS NULL 每个查询都要加——容易忘、索引难优化。5) UUID 做主键：随机 UUID → 索引碎片严重、写入慢。用 UUID v7（时间有序）或 SERIAL。' },
    ],
    diagnosis: [
      { symptom: '逗号分隔存标签，查询某标签只能 LIKE', cause: 'tags TEXT 列存 "tag1,tag2,tag3" 无法建普通索引。LIKE '%tag%' 全表扫描。', fix: "改 TEXT[] 数组：ALTER TABLE posts ALTER COLUMN tags TYPE TEXT[] USING string_to_array(tags,','); 建 GIN 索引：CREATE INDEX ON posts USING GIN(tags); 查询：WHERE tags @> ARRAY['sql'];" },
      { symptom: 'EAV 表查询报类型不匹配错误', cause: 'EAV 将所有属性值存一个 value 列——有的整数、有的字符串、有的日期。统一存 text 导致类型丢失。', fix: '频繁查询属性提升为独立列。大量灵活属性用 JSONB——每个属性保持原生类型且支持 GIN 索引。重构 EAV 为标准宽表或宽列+JSONB 混合方案。' },
    ],
  exercises: [
      { level: '基础', task: '解释为什么 EAV 模式（属性-值表）是反模式', hint: '查一个用户的所有属性要多少次 JOIN', answer: 'EAV 把 entity_id + attribute_name + value 存成一行。查一个用户有 10 个属性 = 10 次 JOIN 或 10 次子查询 → 性能噩梦。也无法设 NOT NULL、类型检查。正确做法：正经列或 JSONB 存灵活属性。' },
    ],
  },

  "G9DB1ZQjgXaHxJ4Lm6xGx": {
    mentalModel: 'SQL 查询反模式是"你以为写得挺快其实慢得要死"的查询。SELECT *、WHERE 中给列包函数、隐式类型转换、NOT IN + NULL——每天有人掉坑。',
    sections: [
      { title: '高频 SQL 反模式', content: '1) SELECT *：拉所有列 → 占用更多内存/网络/不能利用覆盖索引。明确列出需要的列。2) WHERE function(col) = value：列包函数 → 索引无法使用（如 WHERE LOWER(name) = \'alice\'）。建函数索引解决：CREATE INDEX ON users (LOWER(name))。3) 隐式类型转换：WHERE varchar_col = 123 → PG 把 col 转成 int → 索引失效。4) OFFSET 大分页：OFFSET 100000 → PG 扫描前 10 万行再丢弃。用游标分页：WHERE id > last_id ORDER BY id LIMIT 20。5) NOT IN + NULL（前面讲过的经典陷阱）。' },
    ],
    diagnosis: [
      { symptom: "WHERE LOWER(email)='user@email.com' 不走索引", cause: '对列应用函数后索引失效——PG 不能对函数结果用原始列索引。', fix: '创建表达式索引：CREATE INDEX idx ON users(LOWER(email)); 或用 CITEXT 扩展：ALTER TABLE users ALTER COLUMN email TYPE citext; 或插入时统一小写。' },
      { symptom: 'LIMIT 20 OFFSET 100000 翻页越来越慢', cause: 'OFFSET 不跳过而是扫描前 100000 行再丢弃——翻页越深扫描越多。', fix: '游标分页：第一页 SELECT * FROM t ORDER BY id LIMIT 20; 记录最后 id=20。下一页 SELECT * FROM t WHERE id>20 ORDER BY id LIMIT 20; O(1) 定位。' },
    ],
  exercises: [
      { level: '进阶', task: '把 OFFSET 100000 LIMIT 20 改写为游标分页', hint: 'WHERE id > previous_last_id ORDER BY id LIMIT 20', answer: '第一页：SELECT * FROM items ORDER BY id LIMIT 20; 第二页：SELECT * FROM items WHERE id > 20 ORDER BY id LIMIT 20; 始终用索引定位起始点，不需要扫描跳过的行。' },
    ],
  },

  "FDuiJy1UyWUQ9IsfS3CeZ": {
    mentalModel: 'Schema 设计就像"城市规划"——路太窄以后没法拓宽（varchar(50) 设太小）、楼建得太密没绿地（表拆太细 JOIN 多到崩溃）。好的 Schema 设计要预见未来 2-3 年的演进。',
    sections: [
      { title: 'Schema 设计原则', content: '1) 选好字段类型——text 而非 varchar(n)（灵活且性能无差）、timestamptz 而非 timestamp（时区安全）、numeric 而非 float（金额安全）2) 主键：SERIAL（自增，简单）vs UUID v7（分布式友好）vs 自然键（业务 ID——慎用，业务规则会变）3) 时间戳字段标配：created_at + updated_at（触发器自动更新）4) 软删除：用 deleted_at 但要建部分索引（CREATE INDEX ON t (col) WHERE deleted_at IS NULL）5) 预留扩展：考虑 JSONB 放灵活属性，别一上来 EAV。' },
    ],
    diagnosis: [
      { symptom: '软删除表查询越来越慢', cause: '大量 WHERE deleted_at IS NULL 查询但无对应索引——全表扫描过滤已删除行。即使建了索引选择性也差。', fix: '部分索引：CREATE INDEX idx ON orders(user_id) WHERE deleted_at IS NULL; 只含未删除行（小很多）。所有活跃数据查询都走这个索引。' },
      { symptom: 'varchar(50) 需扩展为 varchar(200)，ALTER TABLE 锁表', cause: 'varchar(n) 类型变更需校验所有现有数据——千万级表可能锁表几分钟到几小时。text 类型无性能差异不需要限制长度。', fix: '建表用 text。需长度限制用 CHECK 约束：CONSTRAINT name_len CHECK(char_length(name)<=50); 移除约束比 ALTER COLUMN TYPE 快且不锁表。' },
    ],
  exercises: [
      { level: '基础', task: '设计一个 user 表，包含必须字段和扩展字段', hint: 'JSONB 存灵活属性', answer: 'CREATE TABLE users (id SERIAL PRIMARY KEY, email TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL, name TEXT, avatar_url TEXT, preferences JSONB DEFAULT \'{}\', created_at TIMESTAMPTZ DEFAULT NOW(), updated_at TIMESTAMPTZ DEFAULT NOW()); preferences JSONB 放用户自定义设置，新需求不需要 ALTER TABLE。' },
    ],
  },

  "FJhJyDWOj9w_Rd_uKcouT": {
    mentalModel: 'GIN 索引就像"书末的关键词索引"——不是先看书再找关键词，而是先从索引查到关键词在哪些页，再精确翻到这几页。最适数组包含（@>）、JSONB 键查询、全文搜索。',
    sections: [
      { title: 'GIN 的核心场景', content: '1) JSONB 查询：CREATE INDEX ON products USING GIN (data jsonb_path_ops); SELECT * FROM products WHERE data @> \'{"brand":"Apple"}\'; @> 检查 JSONB 是否包含。2) 数组：CREATE INDEX ON posts USING GIN (tags); 加速 tags @> ARRAY[\'golang\']。3) 全文搜索：CREATE INDEX ON articles USING GIN (to_tsvector(\'english\', body)); 加速 ts_query 搜索。GIN 索引更新慢（插入慢）但查询快——适合读多写少的表。' },
    ],
    diagnosis: [
      { symptom: 'GIN 索引建好后 INSERT 性能下降 50%', cause: 'GIN 索引更新比 B-Tree 慢——每次 INSERT 需提取键并更新倒排索引。读多写少表适合 GIN，写密集型不适合。', fix: '评估是否真需 GIN 索引——JSONB/数组查询非核心路径可用 B-Tree。fastupdate 加速插入：CREATE INDEX ... USING GIN(col) WITH(fastupdate=on); 监控读写比例。' },
      { symptom: 'JSONB GIN 索引 @> 查询返回多余行', cause: 'GIN 索引是"可能匹配"索引——返回所有可能匹配行再回表确认。jsonb_ops 键选择不够精确。', fix: '@> 查询用 jsonb_path_ops：CREATE INDEX ON t USING GIN(data jsonb_path_ops); 比默认 jsonb_ops 更精确、索引更小。\d+ tablename 确认操作符类。' },
    ],
  exercises: [
      { level: '进阶', task: '为 tags TEXT[] 列建 GIN 索引并测试查询性能', hint: 'CREATE INDEX ... USING GIN + EXPLAIN ANALYZE', answer: 'CREATE INDEX idx_tags ON posts USING GIN (tags); EXPLAIN ANALYZE SELECT * FROM posts WHERE tags @> ARRAY[\'postgresql\', \'database\']; 检查是否显示 Bitmap Index Scan on idx_tags（走了索引）。' },
    ],
  },

  "2chGkn5Y_WTjYllpgL0LJ": {
    mentalModel: 'GiST 索引是"万能索引框架"——B-Tree 只能做大小比较，GiST 可以做任何你定义的"距离/包含/相交"判断。PostGIS 的地理索引（"这个点在哪个区域内"）就是基于 GiST 的。',
    sections: [
      { title: 'GiST 的应用', content: 'PostGIS 空间索引（最常用）：CREATE INDEX ON locations USING GIST (geog); 加速 ST_DWithin/ST_Contains。全文搜索（备选——比 GIN 写入快但搜索慢）：加速 tsvector @@ tsquery。范围类型：加速 && 操作（范围是否重叠）。排除约束：CREATE EXCLUDE CONSTRAINT ... USING GIST (room WITH =, during WITH &&) 实现"同一会议室同一时间不能重复预订"。' },
    ],
    diagnosis: [
      { symptom: 'PostGIS ST_DWithin 查询不走 GiST 索引', cause: 'GiST 索引未用正确操作符类（如 gist_geometry_ops），或表太小优化器认为全表扫描更快。', fix: '确认索引：CREATE INDEX ON locations USING GIST(geography_column); SET enable_seqscan=off; 临时测试。ANALYZE 表名；更新统计。地理查询用 PostGIS 推荐索引参数。' },
      { symptom: 'EXCLUDE 约束拒绝合法插入——时间段不重叠却报冲突', cause: 'tsrange 默认 [) 左闭右开。边界类型和预期不一致——看起来不重叠实际有重叠。', fix: "明确边界类型：tsrange('10:00','11:00','[)') 左闭右开；tsrange('10:00','11:00','()') 开区间。检查 EXCLUDE 定义中 && 条件。先 SELECT 测试重叠判断。" },
    ],
  exercises: [
      { level: '进阶', task: '用 GiST 实现"同一时间段同一会议室不能重复预订"的约束', hint: 'EXCLUDE USING GIST + tsrange', answer: "CREATE TABLE bookings (room_id INT, during TSRANGE, EXCLUDE USING GIST (room_id WITH =, during WITH &&)); 插入时如果时间和房间冲突 PG 自动拒绝。避免了应用层的竞态条件。" },
    ],
  },

  "XmBeM01NAy-_nfyNdk9ZV": {
    mentalModel: 'Prometheus + postgres_exporter 就是数据库的"健康手环"——持续采集指标（连接数/QPS/缓存命中率/慢查询数），异常时自动告警。比手工查 pg_stat_* 视图快一百倍。',
    sections: [
      { title: 'PG 监控栈', content: 'postgres_exporter：Prometheus 的 PG 指标导出器，暴露 /metrics 端点。采集指标：pg_stat_database（连接数/缓存命中率）、pg_stat_user_tables（表访问）、pg_stat_user_indexes（索引用量）、pg_stat_replication（复制延迟）、pg_locks（锁等待）。Grafana 面板：推荐 Percona 的 PMM 或社区 PG Dashboard。告警规则：连接数 > 80%、复制延迟 > 1s、缓存命中率 < 90%、慢查询 > 100/分钟。' },
    ],
    diagnosis: [
      { symptom: 'postgres_exporter 报 "Data source name not set"', cause: '未通过 DATA_SOURCE_NAME 环境变量或配置文件指定 PG 连接字符串。', fix: 'export DATA_SOURCE_NAME="postgresql://user:pass@localhost:5432/db?sslmode=disable"。或用 postgres_exporter --config.file=配置.yml。确认 pg_hba.conf 允许 exporter 连接。' },
      { symptom: 'Prometheus 采集 PG 指标但 Grafana 面板 No Data', cause: 'Prometheus 和 Grafana 时间范围不对，或 PromQL 用了错误指标名，或采集间隔太长。', fix: 'Grafana Explore 中手动输入 PromQL：pg_stat_database_tup_fetched{datname="mydb"} 看数据。确认 Prometheus targets UP。导入验证过的 PG Dashboard（如 ID 9628）。' },
    ],
  exercises: [
      { level: '基础', task: '用 Docker 启动 postgres_exporter 并配置监控你的 PG', hint: 'docker run -e DATA_SOURCE_NAME=...', answer: 'docker run -d --name pg-exporter -e DATA_SOURCE_NAME="postgresql://user:pass@host:5432/db?sslmode=disable" -p 9187:9187 quay.io/prometheuscommunity/postgres-exporter。访问 localhost:9187/metrics 看采集的指标。' },
    ],
  },

  "wLMGOUaULW7ZALRr-shTz": {
    mentalModel: 'pg_stat_statements 是 PG 最值得装的扩展——没有之一。它会记录每类 SQL 的执行次数、总耗时、平均耗时、IO 量。有了它你就告别"不知道哪个查询最慢"的时代。',
    sections: [
      { title: 'pg_stat_statements 使用', content: '安装：CREATE EXTENSION pg_stat_statements;（需重启 PG 或 shared_preload_libraries）。关键查询字段：query（SQL 文本），calls（执行次数），total_exec_time / mean_exec_time（总/平均耗时），rows（返回行数），shared_blks_hit / shared_blks_read（缓存命中/磁盘读）。查最耗时查询：SELECT query, calls, mean_exec_time FROM pg_stat_statements ORDER BY total_exec_time DESC LIMIT 10; 定期 reset：SELECT pg_stat_statements_reset(); 分析新部署后的查询变化。' },
    ],
    diagnosis: [
      { symptom: 'pg_stat_statements 显示 query 列被截断', cause: 'track_activity_query_size 默认 1024 字节——超过的 SQL 被截断。', fix: 'ALTER SYSTEM SET track_activity_query_size=8192; 增大到 8KB。重启 PG 生效。也影响 pg_stat_activity 的 query 列。极长 SQL 用 queryid 追踪。' },
      { symptom: 'pg_stat_statements total_exec_time 远小于墙上时间', cause: 'total_exec_time 只计算 PG 实际执行时间，不含网络传输、客户端处理、等待锁时间。', fix: '检查 pg_stat_activity wait_event（等锁？等 IO？）。用 blk_read_time+blk_write_time 看 IO 时间。用应用层 APM（Datadog/New Relic）配合 PG 统计做完整链路分析。' },
    ],
  exercises: [
      { level: '基础', task: '查询占用总时间最多的 5 个 SQL', hint: 'ORDER BY total_exec_time DESC', answer: 'SELECT query, calls, mean_exec_time::numeric(10,2) AS avg_ms, total_exec_time::numeric(10,2) AS total_ms FROM pg_stat_statements ORDER BY total_exec_time DESC LIMIT 5;' },
      { level: '进阶', task: '查询"平均耗时 > 100ms 且执行次数 > 10"的慢 SQL（值得优化的目标）', hint: 'WHERE mean_exec_time > 100 AND calls > 10', answer: 'SELECT query, calls, mean_exec_time, rows/calls AS avg_rows FROM pg_stat_statements WHERE mean_exec_time > 100 AND calls > 10 ORDER BY mean_exec_time DESC;' },
    ],
  },
};