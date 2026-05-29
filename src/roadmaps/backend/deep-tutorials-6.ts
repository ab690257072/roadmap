import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_6: Record<string, DeepTutorial> = {
  // ============================================================
  // 104-121: NoSQL Databases family
  // ============================================================
  "F8frGuv1dunOdcVJ_IiGs": {
    mentalModel: 'NoSQL 不是"No SQL"而是"Not Only SQL"——关系型之外的数据库选择。不同 NoSQL 解决不同问题：文档存 JSON、键值做缓存、图数据库查关系网、列存搞分析、时序存监控。',
    sections: [
      { title: 'NoSQL 四大类', content: '1) 文档型（MongoDB/CouchDB）：存 JSON，Schema 灵活 2) 键值型（Redis/DynamoDB）：最快、最简单 3) 列族型（Cassandra/HBase）：宽表、高写入、时序友好 4) 图数据库（Neo4j/DGraph）：存关系、查关系（社交网络/推荐系统）。选 NoSQL 的标准：不是"现代"或"流行"，而是你的数据模型天然适合哪种存储。比如社交关系网→图数据库，会话缓存→Redis，商品目录（字段多变）→文档数据库。' },
      { title: 'NoSQL 的选择矩阵——场景驱动选型', content: '选数据库不是"哪个最新最流行"，而是问自己：1) 数据结构是什么？（嵌套 JSON→文档型，节点+边→图数据库，键值对→键值型）2) 读写模式是什么？（大量写入→Cassandra，点查询极多→Redis，聚合分析→ClickHouse）3) 一致性要求？（强一致→SQL 或某些 NoSQL 的强一致配置，最终一致够用→大多数 NoSQL）4) 扩展方向？（水平扩展→NoSQL 原生，垂直扩展够用→SQL 也可以）。常见错误：用 MongoDB 存"本质上就是关系型"的数据（如订单系统，订单-用户-商品天然 JOIN），然后用应用层做 JOIN——不如直接用 PostgreSQL。用 Elasticsearch 当主数据库（它不是 ACID 的）。用 Redis 当永久存储（没有可靠持久化）。' },
    ],
    handsOn: [
      { title: '对比 SQL 和 NoSQL 对同一数据的不同建模方式', cmd: '# SQL: CREATE TABLE users (id PK, name, email, address_city, address_street);\n# MongoDB: db.users.insertOne({name:"Alice", email:"a@e.com", address:{city:"Shanghai",street:"Nanjing Rd"}});', output: '(两种不同的建模思路)', explain: 'SQL 需要用户表+地址表+JOIN，MongoDB 直接把地址嵌套在文档里。哪个更好？取决于你的查询模式——如果总是查"用户及其地址"，MongoDB 一查全出来；如果经常单独分析地址数据，SQL 更灵活。' },
    ],
    diagnosis: [
      { symptom: '选了 NoSQL 但查询模式变了，新查询需要 JOIN 多个"集合"', cause: '数据模型在选型时评估不足——NoSQL 的反范式化设计不适合跨集合关联查询', fix: '评估是否应该换成 SQL（是的，无脑选 NoSQL 再补救是常见错误），或者在应用层做 JOIN（性能开销大），或用 MongoDB 的 $lookup（类似 JOIN 但性能远不如 SQL）' },
      { symptom: 'NoSQL 数据库数据丢了（如 MongoDB 默认配置下写入丢失）', cause: '不熟悉 NoSQL 的写入确认机制——MongoDB 默认 write concern 是 w:1（只写主节点），ES 默认 refresh_interval 为 1s（未 refresh 前数据不可搜索）', fix: '了解每种 NoSQL 的持久化和一致性配置：MongoDB 关键操作用 w:"majority" + journal:true，Redis 重要数据用 AOF + fsync everysec，ES 关键数据调低 refresh_interval 或手动 refresh' },
    ],
    exercises: [
      { level: '基础', task: '为以下场景选择数据库类型：用户会话、社交关系、商品搜索、日志分析', hint: '键值/图/搜索/列存', answer: '用户会话→Redis（键值、快速过期）、社交关系→Neo4j（图、查N度人脉快）、商品搜索→Elasticsearch（全文搜索）、日志分析→ClickHouse（列存、聚合快）。' },
      { level: '进阶', task: '设计一个混合存储方案：电商系统用 PostgreSQL 做主库，哪些数据适合移到 NoSQL？', hint: '按数据特性和查询模式分类', answer: '1) 商品搜索→Elasticsearch（从 PG 同步变更，提供全文搜索和相关性排序）2) 会话/Cache→Redis（短 TTL，高并发读）3) 商品详情→MongoDB（字段多变——服装有尺码颜色，电子有参数，结构不一致）4) 用户行为日志→ClickHouse（大量写入+聚合分析）5) 推荐关系→Neo4j（"相似用户""共同购买"等图遍历）。PG 保留：订单/支付/用户核心信息（ACID 事务必须）。各存储间通过 CDC（Change Data Capture）或消息队列同步数据。' },
    ],
  },

  "UxAr1obi4rfJnohRmi9I0": {
    mentalModel: '文档数据库存的数据就像"快递包裹"——每个包裹上贴了一堆标签和信息，不同包裹的标签可以完全不一样。MongoDB 的文档就是这样的 JSON 包裹。',
    sections: [
      { title: '文档数据库的使用', content: '核心概念：Collection（集合）= 存放文档的容器，Document（文档）= 一条 JSON/BSON 记录。优势：Schema 灵活（加字段不需要 ALTER TABLE）、嵌套数据结构（订单里直接嵌商品列表）、和编程语言的对象模型自然对应。MongoDB 是文档数据库的代表。' },
      { title: 'MongoDB 的数据建模——嵌入 vs 引用', content: '核心决策：关联数据应该嵌入（Embed）在同一个文档里，还是分开存用引用（Reference）？嵌入：适合"包含关系"且数据不独立查询（如订单的商品行项目——总是跟着订单一起查，不会单独查"商品行项目"）。引用：适合"独立实体"或数据量过大（如用户和订单——订单太多不能全嵌在用户文档里，用户和订单各自独立查询）。MongoDB 建议的原则：一起读的放一起（嵌入），各自独立读的分开放（引用），但嵌入的数据量不宜过大（单文档有 16MB 上限）。最极端的反例：把关系型思维搬过来——每个实体一个 Collection，然后手动做 JOIN（$lookup）——这不如直接用 SQL 数据库。' },
    ],
    handsOn: [
      { title: '用 mongosh 插入嵌套文档', cmd: 'mongosh --eval \'db.orders.insertOne({_id:1, user:"Alice", items:[{sku:"A1", qty:2, price:29.9},{sku:"B2", qty:1, price:59.9}], total:119.7, status:"paid"})\'', output: '{ acknowledged: true, insertedId: 1 }', explain: 'items 数组直接嵌在订单里——不需要单独的"订单明细表"。查询"Alice 买了哪些商品"一次查询返回完整信息，不需要 JOIN。' },
    ],
    diagnosis: [
      { symptom: 'MongoDB 文档越来越大，查询性能急剧下降', cause: '滥用嵌入——把"随时间无限增长"的数组嵌在文档里（如用户文档里嵌入所有历史订单），单文档接近 16MB 上限', fix: '对于无限增长的关联数据改用引用（用户→订单通过 user_id 关联），只在文档中嵌入"固定数量"或"有上限"的关联数据（如最近的 10 个订单）' },
      { symptom: 'MongoDB 查询某个嵌套字段过滤不生效', cause: '对嵌套数组的查询条件逻辑理解错误——$elemMatch 与直接字段过滤的行为不同', fix: '{ "items.sku": "A1", "items.qty": { $gt: 2 } } 匹配的是"items 数组中任一元素 sku=A1 且任一元素 qty>2"（可能不是同一个元素）。用 $elemMatch: { sku: "A1", qty: { $gt: 2 } } 确保两个条件匹配同一个元素' },
    ],
    exercises: [
      { level: '基础', task: '设计一个"用户资料"文档结构，其中包含嵌套地址和可变标签', hint: '{name, email, address: {city, street}, tags: [...]}', answer: '{"name":"Alice","email":"a@e.com","address":{"city":"上海","street":"南京路"},"tags":["developer","gopher"]}。不同用户可以有完全不同的 fields——有人多一个 github 字段，有人多一个 website 字段，都不用改 Schema。' },
      { level: '进阶', task: '设计博客系统的 MongoDB 数据模型：文章、评论、作者（文章含标签），要求能高效查询"某作者的所有文章"和"文章的所有评论"', hint: '作者+文章用引用，评论嵌在文章里', answer: 'articles 集合：{title, content, tags:[], author_id（引用 users 集合）, comments:[{user, body, created_at}]}。comments 嵌入——评论总是随文章一起显示，适合嵌入。author_id 引用——作者可能写很多文章，且文章列表页不需要携带完整作者信息。users 集合：{name, avatar, bio}。查询"作者的文章"→db.articles.find({author_id: ObjectId("...")})。查询"文章+评论"→一次查询 articles 即可，评论在文档内直接返回。' },
    ],
  },

  "dwfEHInbX2eFiafM-nRMX": {
    mentalModel: 'DynamoDB 是 AWS 的"全托管键值+文档数据库"——你只管定好主键和吞吐量，剩下的扩容/备份/补丁 AWS 全包。适合 AWS 生态内的 Serverless 应用。',
    sections: [
      { title: 'DynamoDB 的特点', content: '核心概念：Table（表）、Item（条目=一行）、Primary Key（分区键 + 可选的排序键）、GSI/LSI（全局/本地二级索引用于不同查询模式）。优势：自动扩容、毫秒级延迟、和 AWS Lambda 绝配。劣势：只能按主键高效查询（别的查询模式需要预先建 GSI）、需要提前规划访问模式（不像 SQL 可以随意写 JOIN）、定价复杂（按读写容量单位计费）。适合：AWS 生态、Serverless 应用、简单 KV + 文档存储。不适合：复杂查询、多表关联、不在 AWS 上的系统。' },
      { title: 'DynamoDB 单表设计（Single-Table Design）——反直觉的最佳实践', content: 'SQL 教你"一个实体一张表"。DynamoDB 教你"所有实体放一张表"——这叫 Single-Table Design。原理：DynamoDB 的 Partition Key + Sort Key 支持分层存储不同实体。例如：PK="USER#alice" SK="PROFILE" → 用户资料。PK="USER#alice" SK="ORDER#2026-001" → 订单。PK="USER#alice" SK="ORDER#2026-002" → 另一个订单。通过 PK 前缀区分实体类型，同一个用户的所有数据在同一分区，一次 Query 就能拿到用户的资料+所有订单（按 SK 排序）。优势：减少请求次数（一次 Query 而非多次 Get）→ 降低延迟和费用。劣势：学习曲线陡（和 SQL 思维完全不同）、需要提前设计好所有访问模式、后续加查询模式可能需要建 GSI。' },
    ],
    handsOn: [
      { title: '用 AWS CLI 创建 DynamoDB 表', cmd: 'aws dynamodb create-table --table-name Users --attribute-definitions AttributeName=PK,AttributeType=S AttributeName=SK,AttributeType=S --key-schema AttributeName=PK,KeyType=HASH AttributeName=SK,KeyType=RANGE --billing-mode PAY_PER_REQUEST', output: '{"TableDescription":{"TableStatus":"CREATING",...}}', explain: 'HASH 是分区键（决定数据存在哪个物理分区），RANGE 是排序键（同一分区内的排序）。PAY_PER_REQUEST 是按用量付费，不需要预估容量。' },
    ],
    diagnosis: [
      { symptom: 'DynamoDB 读取请求大量返回 ProvisionedThroughputExceededException', cause: '预置容量（Provisioned Capacity）设置过低，或热点分区导致部分分区的容量被消耗完', fix: '切换到 On-Demand（PAY_PER_REQUEST）模式免除容量管理，或增大预置容量。如果是热点分区问题——检查分区键设计是否导致某些分区承载了大部分流量，改用更均匀分布的分区键' },
      { symptom: 'DynamoDB 查询响应慢，但主键查询正常', cause: '查询使用了 FilterExpression（不是 KeyCondition），先按主键范围读取了大量数据再在服务端过滤，实际消耗大量 RCU', fix: '尽量把过滤条件放在 KeyCondition 中（主键范围查询），仅在必要时用 FilterExpression。如果经常按某字段查询，建 GSI 把该字段作为索引的主键' },
    ],
    exercises: [
      { level: '基础', task: '解释 DynamoDB 的 Primary Key 为什么设计如此重要', hint: '和 SQL 的随意查询有本质区别', answer: 'DynamoDB 按主键物理分布数据，只能通过主键（或已建索引）高效查询。不像 SQL 可以随意 WHERE 任何列——如果查询模式不在设计时考虑，后期改的成本非常高（需要重建表或加 GSI）。所以 DynamoDB 的最佳实践是"先设计查询模式，再设计表结构"。' },
      { level: '进阶', task: '用 Single-Table Design 设计一个"用户+订单"的数据模型。支持：查用户资料、查用户的所有订单、查单个订单', hint: 'PK=USER#id, SK=PROFILE|ORDER#orderId', answer: 'PK="USER#alice" SK="PROFILE" → {name, email}。PK="USER#alice" SK="ORDER#2026-001" → {total, status, items}。查用户资料：GetItem(PK="USER#alice", SK="PROFILE")。查用户订单列表：Query(PK="USER#alice", SK begins_with "ORDER#")。查单个订单：GetItem(PK="USER#alice", SK="ORDER#2026-001")。如果还要"按订单状态查询"→ 建 GSI：GSI1PK="STATUS#paid"，GSI1SK="ORDER#2026-001"→Query GSI 获取所有 paid 订单。' },
    ],
  },

  "k9Xcn33w669GorNeaI4Wz": {
    mentalModel: '键值数据库是"世界上最大的哈希表"——你给一个 key，它瞬间返回 value。没有查询语言、没有关联、没有 Schema。极致简单、极致快速。',
    sections: [
      { title: '键值数据库的使用', content: '代表：Redis、DynamoDB、etcd。操作只有：GET/SET/DELETE（Redis 扩展了更多数据结构）。优势：O(1) 查找、水平扩展容易（按 key hash 分片）、极其简单。劣势：只能按 key 查（不能查"名字包含 Alice 的用户"）、没有事务（Redis 有有限事务支持）。适合：缓存、Session 存储、配置存储、分布式锁、计数器。' },
      { title: 'Redis 不仅是缓存——Redis 的数据结构', content: 'Redis 远不止"GET/SET/DELETE"。它提供了丰富的数据结构：1) String——最简单的 KV，可以做缓存、计数器、分布式锁 2) List——双向链表，可以做消息队列（LPUSH+BRPOP）、最新动态列表 3) Set——无序不重复集合，可以做标签系统、共同好友（SINTER）4) Sorted Set——有序集合，可以做排行榜（ZADD score user, ZRANGE 取 Top N）5) Hash——存对象（用户 profile），独立字段更新不影响其他字段 6) Stream——支持消费者组，可以做轻量级消息队列 7) Bitmap/HyperLogLog——计数与去重。Redis 的"数据结构服务器"定位远超简单的 KV 缓存——理解这些数据结构后你会发现很多后端场景用 Redis 解决比数据库更优雅。' },
    ],
    handsOn: [
      { title: '用 Redis Sorted Set 做排行榜', cmd: 'redis-cli ZADD leaderboard 100 player1 85 player2 120 player3 && redis-cli ZREVRANGE leaderboard 0 2 WITHSCORES', output: '1) "player3"\n2) "120"\n3) "player1"\n4) "100"\n5) "player2"\n6) "85"', explain: 'ZADD 添加成员和分数，ZREVRANGE 按分数降序取 Top 3。查询复杂度 O(log(N)+M)——数百万玩家中取 Top 10 仍是毫秒级。用 SQL 的 ORDER BY score DESC LIMIT 10 在大数据量下需要走索引或全表扫描。' },
    ],
    diagnosis: [
      { symptom: 'Redis 内存突然跑满，写入失败', cause: '缓存 key 没有设置 TTL（过期时间）持续累积，或某个 big key 占用过多内存', fix: '用 redis-cli --bigkeys 扫描异常大的 key，用 INFO memory 查看内存使用，对缓存类 key 必须设置 EXPIRE，设置 maxmemory + maxmemory-policy（如 allkeys-lru 淘汰最近最少使用的 key）' },
      { symptom: 'Redis 主从切换后数据丢失', cause: '主节点在同步到从节点之前崩溃——默认异步复制，未同步的数据永久丢失', fix: '关键数据开启 AOF 持久化（appendfsync everysec），等待从节点确认（WAIT 命令），或使用 Redis Sentinel/Cluster 的写入确认机制。但 Redis 的设计哲学是"速度优先"，绝对不丢数据应换用关系型数据库' },
    ],
    exercises: [
      { level: '基础', task: '设计一个 URL 短链接系统的数据模型，用键值数据库', hint: '短码 → 原始URL', answer: 'Key: shortCode（如 "abc123"）→ Value: 原始 URL（如 "https://example.com/very/long/url"）。查询时 GET abc123 → 返回原始 URL → 302 重定向。还可以存过期时间（TTL）自动清理。' },
      { level: '进阶', task: '用 Redis 实现一个"限时秒杀"系统：100 件商品，不能超卖，处理并发抢购', hint: 'DECR + 库存预存', answer: '1) SET stock:item123 100 2) 用户请求秒杀时：WATCH stock:item123 → stock = GET → if stock > 0: MULTI → DECR stock:item123 → EXEC。如果 EXEC 返回 nil（被其他请求修改了）→ 重试或返回"抢完了"。WATCH+MULTI+EXEC 是 Redis 的乐观锁模式——比用分布式锁（SETNX）更轻量。3) 抢成功的用户放入 success:item123 Set，异步创建订单。4) 防刷：用 Sorted Set 或 sliding window 计数器限制单用户请求频率。' },
    ],
  },

  "lz1qUvdtuZ5_MUBDw2M7B": {
    mentalModel: '图数据库把数据存成"节点和关系网"——人是节点、朋友关系是边、共同好友是路径。在关系型数据库里查"朋友的朋友"需要多次 JOIN（指数级变慢），图数据库一次遍历就完成。',
    sections: [
      { title: '图数据库的使用场景', content: '代表：Neo4j、DGraph、AWS Neptune。核心：Node（节点=实体，如人/商品）、Edge（关系=连接，如 购买/关注/朋友）、Property（属性=节点和边的附加信息）。查询语言：Cypher（Neo4j）、Gremlin（通用）、SPARQL（RDF）。最适合：社交网络（推荐好友）、推荐系统（买了X的人也买了Y）、欺诈检测（资金链路追踪）、知识图谱（实体关系网）。' },
      { title: '图数据库 vs 关系型数据库的关系查询——用数据说话', content: '测试场景：100 万用户，平均每人 50 个朋友。查询"朋友的朋友"（2 度）、"朋友的朋友的朋友"（3 度）。SQL（用户表 + 好友关系表）：2 度 = SELECT DISTINCT f2.user_id FROM friends f1 JOIN friends f2 ON f1.friend_id = f2.user_id WHERE f1.user_id = ?。3 度 = 再加一次 JOIN。随着度数增加，JOIN 次数线性增加，但中间结果集指数膨胀（100 万 × 50 × 50 = 25 亿行运算）。Neo4j：MATCH (u)-[:FRIEND*2..2]->(fof)——图遍历引擎直接从节点出发沿着边指针走 2 步，时间复杂度 O(degree^2) 而不是 O(N^2)。结论：3 度以上查询，图数据库比关系型快几个数量级。' },
    ],
    handsOn: [
      { title: 'Docker 启动 Neo4j 并执行 Cypher', cmd: 'docker run -d --name neo4j -p 7474:7474 -p 7687:7687 -e NEO4J_AUTH=none neo4j:latest && sleep 15 && cypher-shell "CREATE (a:Person{name:\'Alice\'})-[:KNOWS]->(b:Person{name:\'Bob\'})"', output: '(Neo4j 启动 + 创建节点和关系)', explain: 'Neo4j Browser 在 http://localhost:7474。7474 是 HTTP，7687 是 Bolt 协议。cypher-shell 是命令行客户端。' },
    ],
    diagnosis: [
      { symptom: '图查询返回了环（循环引用），结果集爆炸', cause: '查询路径使用了可变长度但未去重或未限制深度——如 (a)-[*]-(b) 匹配任意长度的路径', fix: '使用 shortestPath() 或限制路径长度（如 *..3），添加 DISTINCT 去重，或在路径中使用 WHERE 约束避免走回头路' },
      { symptom: 'Neo4j 写入性能下降', cause: '索引未建在常用查询的属性上（如 MATCH (u:User {email: \'...\'}) 需要 email 上的索引），或大量并发写入导致锁竞争', fix: 'CREATE INDEX ON :User(email) 为频繁查询的属性建索引，批量写入使用 periodic commit，避免在并发写入时做大量索引更新' },
    ],
    exercises: [
      { level: '进阶', task: '用 Cypher 语法（伪代码）查询"和 Alice 有共同好友的人"', hint: 'MATCH (a)-[:FRIEND]->(f)<-[:FRIEND]-(b)', answer: 'MATCH (alice:User {name:"Alice"})-[:FRIEND]->(friend)<-[:FRIEND]->(other:User) WHERE other <> alice RETURN DISTINCT other.name。在 SQL 中这需要自 JOIN 查询 friend 表两次，性能差很多。' },
      { level: '基础', task: '为欺诈检测场景设计图模型：用户、交易、设备，找出"多个用户共用同一设备或 IP"的欺诈团伙', hint: '节点=用户/交易/设备，关系=进行/使用', answer: '节点：User（name, register_date）、Transaction（amount, timestamp）、Device（device_id, ip_address）。关系：User-[:PERFORMED]->Transaction, User-[:LOGGED_IN_FROM]->Device, Transaction-[:FROM_DEVICE]->Device。查询：MATCH (u1:User)-[:LOGGED_IN_FROM]->(d:Device)<-[:LOGGED_IN_FROM]-(u2:User) WHERE u1 <> u2 RETURN u1, u2, d ——找到共用设备的用户群。进一步关联交易链路发现资金流向。' },
    ],
  },

  "-SkGi8qy2AGwO2_ACw0aD": {
    mentalModel: '列式数据库不按"行"存数据，而是按"列"存——就像把 Excel 的每一列单独存成一个文件。当你只需要"计算所有用户的平均年龄"时，只读年龄那一列，跳过名字、邮箱等无关列，极大加速分析查询。',
    sections: [
      { title: '列存 vs 行存', content: '行存（MySQL/PostgreSQL）：一行数据存在一起，适合"查某个用户的所有信息（SELECT * FROM users WHERE id=1）"。列存（ClickHouse/Cassandra）：一列数据存在一起，适合"对某一列做聚合（SELECT AVG(age) FROM users）"。列存优势：1) 更好的压缩率（同列数据类型一致）2) 分析查询更快（只读需要的列）3) 写入吞吐更高。列存不适合：频繁的小事务更新、点查询（查一行）。ClickHouse 是列存代表（分析查询比 MySQL 快 100-1000 倍）。' },
      { title: '列存压缩原理——为什么压缩率那么高', content: '行存压缩受限于同一行中包含不同类型的列（int、varchar、timestamp 混在一起），压缩算法难以找到规律。列存中同一列的数据类型相同、值域有限（如 status 列只有 "active"/"inactive"/"suspended"），同质数据适合各种编码和压缩：1) 字典编码——将重复值映射为整数 ID（status 列 3 个值 → 2 bit 即可表示）2) 增量编码——存储相邻值的差值（时间戳列 前后差值通常很小）3) 位图编码——对基数极低的列（如 is_deleted 只有 0/1）用 bitmap 存储。最终压缩率可达 5-20 倍，这是行存很难达到的。这也是 ClickHouse 分析查询快的原因之一——读取的物理数据量远小于行存。' },
    ],
    handsOn: [
      { title: '对比列存和行存的查询速度（ClickHouse vs MySQL）', cmd: '# ClickHouse: SELECT region, COUNT(*), AVG(amount) FROM orders GROUP BY region;\n# MySQL: 同样的 SQL，在 1000 万行数据下对比', output: '(ClickHouse <1s, MySQL 30-60s)', explain: '同样一张宽表（30+ 列），ClickHouse 只读取 region 和 amount 两列（可能不到总数据量的 10%），MySQL 需要读取整行（100% 数据）再丢掉不需要的列。这就是列存的核心优势。' },
    ],
    diagnosis: [
      { symptom: '列存在单行 UPDATE 时性能极差', cause: '列存按列组织——更新一行需要定位并修改多个列文件中的对应位置，而列存通常用不可变文件（追加写入），行级更新需要标记旧值+写入新值+后台合并', fix: '列存不适合频繁行级更新。用列存做分析——从行存数据库同步数据到列存（ETL/CDC），行存处理事务（CREATE/UPDATE），列存处理分析（SELECT）。ClickHouse 提供了 ReplacingMergeTree 引擎做更新去重，但这是异步的' },
      { symptom: '列存 SELECT * 查询比行存还慢', cause: 'SELECT * 要求列存读取所有列并拼装行——失去了列存只读必要列的优势', fix: '在列存中永远不要 SELECT *——只选需要的列。这是习惯问题——从行存切换到列存时最容易犯的错误' },
    ],
    exercises: [
      { level: '基础', task: '什么查询适合行存、什么查询适合列存？各举一例', hint: 'SELECT * vs SELECT AVG()', answer: '行存：SELECT * FROM users WHERE id = 123（点查询、需要整行数据）。列存：SELECT country, COUNT(*), AVG(age) FROM users GROUP BY country（只涉及 country 和 age 两列）。' },
      { level: '进阶', task: '设计一个日志分析架构：每天 5 亿条日志，要求支持按时间范围+错误级别+服务名的聚合查询（P99 延迟 <5s），数据保留 90 天', hint: 'ClickHouse + 分区 + 物化视图', answer: '1) ClickHouse 建表，PARTITION BY toYYYYMMDD(timestamp)（按天分区）2) ORDER BY (service, level, timestamp)（排序键优化查询）3) 物化视图（Materialized View）：CREATE MATERIALIZED VIEW hourly_stats ENGINE=AggregatingMergeTree ... AS SELECT service, level, toStartOfHour(timestamp) AS hour, count() AS cnt ... GROUP BY service, level, hour。查询每小时统计几百行而非 5 亿行原始数据 4) TTL: timestamp + INTERVAL 90 DAY DELETE（自动删除过期数据）5) 原始数据用 90 天 TTL，聚合后的物化视图保留 1 年。查询 90 天原始数据或 1 年聚合数据。' },
    ],
  },

  "ZyGLSvx17p7QmYDy1LFbM": {
    mentalModel: 'ClickHouse 是分析型数据库中的"超跑"——列存+向量化执行+数据压缩，让聚合查询的速度比传统数据库快几个数量级。适合日志分析/用户行为分析/监控指标存储。',
    sections: [
      { title: 'ClickHouse 的适用场景', content: 'ClickHouse 是 Yandex 为自有的 Yandex.Metrica（类似 Google Analytics）开发的。擅长：1) 大宽表聚合（GROUP BY 百万行数据秒级返回）2) 时序数据分析（按时间范围的统计）3) 日志存储和搜索。不擅长：1) 频繁的单行 UPDATE/DELETE 2) 事务 3) JOIN 多张小表（MySQL 更快）。部署：通常作为数据仓库的存储引擎，从 Kafka/MySQL 同步数据过来做分析。' },
      { title: 'ClickHouse 的向量化执行——另一个性能秘密', content: '除了列存，ClickHouse 还有向量化（Vectorized）查询引擎。传统的查询引擎是"一次一行"处理——读一行→算→读下一行。每一行都经过完整的函数调用栈和类型检查，现代 CPU 的分支预测和缓存机制对这种模式很不友好。ClickHouse 的做法：一批一批处理（如每次处理 8192 行）。这一批数据在内存中是连续的（列存天然支持），处理时用 SIMD 指令（Single Instruction Multiple Data）同时对多个数据做同一操作。例如算 avg(amount)，SIMD 可以一次计算 4 或 8 个浮点数的加法。结果：CPU 利用率远超传统数据库，同样的硬件能跑出高几个数量级的吞吐。结合列存的高压缩率，ClickHouse 常见单机每秒处理数亿行数据。' },
    ],
    handsOn: [
      { title: 'Docker 启动 ClickHouse 并做一次聚合查询', cmd: 'docker run -d --name ch -p 8123:8123 clickhouse/clickhouse-server && sleep 5 && curl "localhost:8123/?query=SELECT+count()+FROM+numbers(100000000)"', output: '100000000', explain: 'numbers(100000000) 生成 1 亿行虚拟数据。COUNT 聚合在 1 秒内完成——在行存数据库中这可能需要几分钟。8123 是 HTTP 端口。' },
    ],
    diagnosis: [
      { symptom: 'ClickHouse 查询偶尔超时或极慢', cause: '查询没有利用分区键或排序键过滤——全表扫描了所有分区的所有 parts', fix: '在 WHERE 中尽量带分区键条件（如日期范围），查询条件匹配排序键（ORDER BY 列），分析 EXPLAIN 输出的扫描粒度' },
      { symptom: 'ClickHouse 移入数据后查询不到最新数据', cause: 'MergeTree 引擎的数据是异步写入 parts——刚写入的数据在内存中等待后台 merge，默认几秒到几分钟后才可见', fix: '对于实时查询需求，写入后手动 OPTIMIZE TABLE ... FINAL（仅调试用，生产慎用），或查询时使用 FINAL 修饰符强制合并（性能开销大）。更好的方案：用 Kafka 引擎表 + 物化视图做实时消费' },
    ],
    exercises: [
      { level: '基础', task: '说一个 ClickHouse 完美适合和一个绝对不该用的场景', hint: '分析 vs 事务', answer: '适合：千万级访问日志的聚合分析——"过去7天每个 URL 的访问次数和平均响应时间"。不适合：电商订单表——频繁的创建、更新状态、取消、小事务操作。' },
      { level: '进阶', task: '设计 ClickHouse 表结构存储网站 PV/UV 数据，支持：按小时/天/周聚合，按页面路径和来源渠道下钻', hint: '分区 + ORDER BY + 物化视图', answer: 'CREATE TABLE pvuv_raw (event_time DateTime, page_path String, referrer String, user_id String, session_id String) ENGINE=MergeTree() PARTITION BY toYYYYMMDD(event_time) ORDER BY (page_path, event_time)。物化视图按小时聚合：CREATE MATERIALIZED VIEW pvuv_hourly ENGINE=SummingMergeTree() PARTITION BY toYYYYMM(event_time) ORDER BY (page_path, referrer, event_time) AS SELECT toStartOfHour(event_time) AS event_time, page_path, referrer, count() AS pv, uniq(user_id) AS uv FROM pvuv_raw GROUP BY event_time, page_path, referrer。查询最近 7 天：从物化视图查询（几百行），非原始表（几亿行）。' },
    ],
  },

  "Os9E7FSRWhn7wsK1AOBh2": {
    mentalModel: '时序数据库是"带时间轴的监控录像"——每条数据都带时间戳，最常见的查询是"过去 X 分钟/小时/天的数据"。专门为写多读少、按时间窗口聚合的场景优化。',
    sections: [
      { title: '时序数据库的特点', content: '代表：InfluxDB、TimescaleDB（基于 PG）、Prometheus。核心特征：1) 每条数据必须带时间戳 2) 写入为主（每秒成千上万条指标）3) 查询通常带时间范围 4) 自动数据过期（保留策略——如只保留 30 天）5) 内置降采样（原始数据→按小时聚合→按天聚合）。适合：服务器指标（CPU/内存/网络）、IoT 传感器数据、金融行情、应用指标监控。' },
      { title: '时序数据库的存储引擎——为什么写入这么快', content: '通用数据库（如 MySQL）的 B+Tree 索引面临"随机写入放大"——每次写入需要更新索引页，时序数据天然按时间顺序写入（append-only），用 B+Tree 处理反而低效。时序数据库使用专门的存储引擎：1) LSM-Tree（Log-Structured Merge-Tree）——先写内存 MemTable，写满后 flush 为不可变的 SSTable 文件，后台合并（Compaction）。InfluxDB 的 TSM 引擎基于 LSM-Tree 优化 2) 列存压缩——同一时间序列的数据（相同 series key）连续存储，压缩率极高 3) 时间分区——按 time range 组织数据文件，按时间范围的查询可以快速定位和跳过无关分片 4) 针对时序数据的编码——时间戳列的增量编码差值极低、浮点指标值用 Gorilla 编码（XOR 相邻值差异小）。这些技术组合让时序数据库的写入吞吐远超通用数据库。' },
    ],
    handsOn: [
      { title: 'Docker 启动 InfluxDB 写入一行时序数据', cmd: 'docker run -d --name influx -p 8086:8086 influxdb:2 && sleep 5 && influx bucket create -n metrics -o myorg -t mytoken && influx write -b metrics -o myorg -t mytoken \'cpu,host=web01 usage=45.2\'', output: '(数据写入成功)', explain: 'InfluxDB 使用 Line Protocol 格式：measurement,tag_set field_set timestamp。cpu,host=web01 usage=45.2 表示 measurement=cpu，tag host=web01，field usage=45.2。tag 用于过滤和分组，field 用于计算。' },
    ],
    diagnosis: [
      { symptom: '时序数据库中查询速度越来越慢，尤其是时间范围大的查询', cause: '查询了未降采样的原始数据——如查 1 年的秒级原始数据，数据量太大', fix: '创建降采样任务（InfluxDB Task 或 TimescaleDB 的 continuous aggregate/refresh policy），将原始数据（秒级）聚合为分钟/小时级存储，查询长时间范围时自动使用聚合表' },
      { symptom: '时序数据库磁盘占用增长过快', cause: '数据保留策略（Retention Policy）未设置或设置过长，或 Cardinarity 过高（tag 组合爆炸）', fix: '设置合理的保留策略（如保留 30 天原始数据、90 天聚合数据），检查是否存在高基数 tag（如 user_id 作为 tag——InfluxDB 每个 tag 组合创建一个 series，数据量大时内存和磁盘都吃不消）' },
    ],
    exercises: [
      { level: '基础', task: '解释为什么时序数据库需要"保留策略"', hint: '数据量', answer: '时序数据产生速度极快（如每秒记录一次，一天 86400 条，1000 台机器 = 每天 8640 万条）。无限保存成本不可承受。保留策略自动删除过期数据（如删除 30 天前的秒级原始数据、保留聚合后的分钟级数据一年）。' },
      { level: '进阶', task: '设计服务器监控系统的时序存储方案：1000 台服务器，每 10s 采集 CPU/内存/磁盘/网络共 15 个指标，保留策略需要支持 7 天秒级数据 + 90 天分钟级聚合', hint: '原始数据 + 降采样 + 自动过期', answer: '写入：每 10 秒 1000 台 × 15 指标 = 15000 points/10s = 1500 points/s。存储：InfluxDB 数据库 + 默认保留策略 7 天（原始秒级数据）。降采样 Task：每 1 分钟执行 FLUX 查询对过去 1 分钟的原始数据计算 MIN/MAX/MEAN/P95，写入另一个带有 90 天保留策略的 bucket。查询：过去 7 天 → 查原始 bucket（秒级精度）；7-90 天 → 查降采样 bucket（分钟级精度）；90 天以上 → 不保留。注意：1500 points/s × 86400s/day × 7days = ~9 亿 points，InfluxDB 单机可以处理但建议定期检查磁盘和内存。' },
    ],
  },

  "XbM4TDImSH-56NsITjyHK": {
    mentalModel: 'InfluxDB 是时序数据库的"标杆"——专为时序设计的存储引擎、查询语言（Flux/InfluxQL）、自动降采样和过期。Telegraf（采集）+ InfluxDB（存储）+ Grafana（可视化）组成 TIG Stack。',
    sections: [
      { title: 'InfluxDB 核心概念', content: 'Measurement（类似表）→ Tag（索引字段，如 host/region，用于过滤分组）→ Field（值字段，如 cpu_usage/memory，不可索引）→ Timestamp。InfluxDB 优势：高写入吞吐、高效的按时间范围查询、内置连续查询（自动预聚合）。劣势：集群版收费（开源版单机）、查询语言学习和 SQL 不同。TimescaleDB 是替代选择——基于 PostgreSQL，标准 SQL，时序功能通过 hypertable 实现。' },
      { title: 'InfluxDB 的 Tag vs Field——设计陷阱', content: 'Tag 和 Field 的选择直接影响性能和成本：Tag → 索引字段。建议做 Tag 的：host、region、environment（基数较低的标签，用于 WHERE 过滤和 GROUP BY）。绝对不要做 Tag 的：user_id、session_id、request_id（基数极高——每个值都创建一个 series，导致 series 基数爆炸）。Field → 值字段，不可索引但可聚合。建议做 Field 的：cpu_usage、memory_used、response_time（数值指标，需要做 MEAN/SUM/MAX/MIN）。经典错误：把 user_id 当 Tag→导致百万级 series，InfluxDB 内存爆满。解决：把 user_id 放 Field 或用其他方式降低基数。Series 基数 = 所有 Tag 组合数——host(1000) × region(10) × environment(3) = 30000 series（可接受）。加上 user_id(100000) → 30 亿 series（不可接受）。' },
    ],
    handsOn: [
      { title: '用 Flux 查询过去 1 小时 CPU 使用率的 P99', cmd: 'influx query \'from(bucket:"metrics") |> range(start: -1h) |> filter(fn: (r) => r._measurement == "cpu" and r._field == "usage") |> group(columns: ["host"]) |> quantile(q: 0.99)\'', output: '(各 host 的 CPU P99 值)', explain: 'Flux 的可读性很好——管道式操作，从左往右读：从 metrics bucket → 过去 1h 范围 → 过滤 cpu usage → 按 host 分组 → 计算 P99 分位值。' },
    ],
    diagnosis: [
      { symptom: 'InfluxDB 内存使用激增，最终 OOM', cause: 'Series 基数过高——可能是某个高基数 Tag（如 request_id）导致成千上万个唯一 series，每个 series 占用内存', fix: '用 influx bucket-schema 或 SHOW SERIES CARDINALITY 查看 series 基数，移除高基数 Tag，或用 Flux 查询 group by 低基数 Tag 替代高基数 Tag' },
      { symptom: '相同时间范围的查询有时快有时慢', cause: '查询范围覆盖了不同数量的 shard——旧 shard 已 compact 为较大文件（读取快），新 shard 还在积累小文件（读取慢）', fix: '这是正常现象（新数据多个小 shard 读取较慢）。重要：不要频繁 compact（写入性能代价），接受近实时数据的查询稍慢于历史数据' },
    ],
    exercises: [
      { level: '基础', task: 'InfluxDB 中 Tag 和 Field 的区别是什么', hint: '哪个可以 WHERE，哪个可以 GROUP BY', answer: 'Tag 是索引字段——用来过滤（WHERE host=\'web-01\'）和分组（GROUP BY region）。Field 是值字段——用来计算（SELECT MEAN(cpu_usage)）。Tag 应选低基数的（如 region 只有几个值），高基数的放 Field。' },
      { level: '进阶', task: '设计 TIG Stack（Telegraf+InfluxDB+Grafana）监控方案，包含：采集 Nginx 访问日志指标、MySQL 慢查询数、应用自定义业务指标，配置告警', hint: 'Telegraf 插件 + InfluxDB 数据源 + Grafana Panel + Alert', answer: '1) Telegraf: inputs.nginx（读取 nginx_status）、inputs.mysql（读取 MySQL 状态变量）、inputs.exec（执行自定义脚本采集业务指标）2) InfluxDB: 3 个 bucket——nginx_metrics, mysql_metrics, app_metrics，各配 30 天保留 3) Grafana: 数据源=InfluxDB，dashboard 包含：QPS 曲线、P99 延迟、慢查询数、错误率 4) Grafana Alert: 慢查询数 > 10/min → 通知钉钉/邮件，QPS 偏离正常范围 3 个标准差 → 通知 oncall。所有通过一个 docker-compose.yml 编排启动。' },
    ],
  },

  "WiAK70I0z-_bzbWNwiHUd": {
    mentalModel: 'TimescaleDB 是 PostgreSQL 的"时序插件"——不是独立数据库，而是 PG 的一个扩展。你做时序分析但不想学新数据库？用 TimescaleDB，你写的是标准 SQL，底层是 PG。',
    sections: [
      { title: 'TimescaleDB 的定位', content: '原理：hypertable（超表）= 按时间自动分区的 PG 表。写入数据时自动路由到对应分区，查询时自动跨分区聚合。优势：1) 标准 SQL（不用学新查询语言）2) PG 生态全可用（JOIN/JSONB/PostGIS）3) 自动压缩（老数据压缩率 90%+）4) 自动降采样。适合：已经有 PG 的团队需要加时序能力、需要时序+关系型混合查询的场景。InfluxDB 更适合纯时序、写入量极大的场景。' },
      { title: 'TimescaleDB 的核心机制——hypertable 与 chunk', content: '创建 hypertable：SELECT create_hypertable(\'metrics\', \'time\', chunk_time_interval => INTERVAL \'1 day\')。底层自动将数据按时间分区为 chunks（每个 chunk 是一个独立的 PG 子表）。写入时：根据时间戳自动路由到对应的 chunk。查询时：WHERE time BETWEEN ... 自动只扫描相关 chunks（分区裁剪）。压缩：SELECT add_compression_policy(\'metrics\', INTERVAL \'7 days\')——7 天前的 chunk 自动压缩为列存格式（90%+ 压缩率）。连续聚合（Continuous Aggregates）：相当于物化视图+自动刷新。CREATE MATERIALIZED VIEW metrics_hourly WITH (timescaledb.continuous) AS SELECT time_bucket(\'1 hour\', time) AS hour, AVG(value) FROM metrics GROUP BY hour。——自动保持更新，查询时自动使用聚合表（如果范围合适）。' },
    ],
    handsOn: [
      { title: '在 PostgreSQL 中创建 TimescaleDB hypertable', cmd: 'psql -c "CREATE EXTENSION timescaledb; CREATE TABLE metrics (time TIMESTAMPTZ NOT NULL, device TEXT, value DOUBLE PRECISION); SELECT create_hypertable(\'metrics\', \'time\');"', output: 'CREATE EXTENSION\nCREATE TABLE\n create_hypertable \n-------------------\n (1,public,metrics,t)', explain: '创表+转 hypertable 三步完成。之后像普通 PG 表一样 INSERT/SELECT，但底层自动按时间分区。' },
    ],
    diagnosis: [
      { symptom: 'TimescaleDB 查询越来越慢，和普通 PG 没区别', cause: '忘记创建 hypertable 索引，或查询条件没有用到时间列导致全表扫描所有 chunk', fix: '检查查询是否包含时间范围过滤（WHERE time > ...），为常用的查询条件创建索引（CREATE INDEX ON metrics (device, time DESC)），检查 EXPLAIN 是否做了分区裁剪（Append nodes 只包含相关 chunks）' },
      { symptom: '压缩 chunk 后，更新操作报错', cause: '压缩后的 chunk 是只读的——不能 UPDATE/DELETE 压缩数据', fix: '设计时考虑数据是否需要在压缩后修改。如果需要修改，推迟压缩时间（如 30 天而不是 7 天），或修改前先解压缩该 chunk（性能开销大）' },
    ],
    exercises: [
      { level: '基础', task: 'TimescaleDB 最大优势是什么', hint: '基于什么', answer: '基于 PostgreSQL——可以用标准 SQL、和现有业务表 JOIN、利用 PG 成熟的运维工具链。不需要学新的查询语言或运维体系。' },
      { level: '进阶', task: '设计一个 IoT 平台：100 万设备，每 5 分钟上报一次数据（温度/湿度/电量）。用 TimescaleDB 存储，支持设备实时状态+历史趋势', hint: 'hypertable + 连续聚合 + 压缩', answer: 'hypertable: CREATE TABLE device_telemetry (time TIMESTAMPTZ, device_id TEXT, temp FLOAT, humidity FLOAT, battery FLOAT); SELECT create_hypertable(\'device_telemetry\', \'time\', chunk_time_interval=>INTERVAL \'1 day\')。压缩：7 天前数据自动压缩。连续聚合：按小时聚合 CREATE MATERIALIZED VIEW telemetry_hourly ... SELECT time_bucket(\'1 hour\', time), device_id, AVG(temp), AVG(humidity), MIN(battery) GROUP BY 1,2。实时状态：另建一张 devices_current 表（普通 PG 表），设备上报时 UPSERT 最新值。历史趋势：查 telemetry_hourly 或压缩后的原始 chunks。写入量：100 万 × (60/5=12 次/小时) × 24 = 2.88 亿条/天。需要足够的 PG 写入能力，建议评估是否用 InfluxDB 处理原始写入。' },
    ],
  },

  // ============================================================
  // 122-130: More NoSQL + 系统设计 + 可观测性 + 架构
  // ============================================================
  "zsiZLWJ2bMvrjuHch5fX_": {
    mentalModel: 'Cassandra 是"永不宕机的宽表数据库"——分布式、去中心化（没有主节点）、所有节点平等。适合要求"绝对不能挂"的大规模写入场景。代价是查询灵活性极低（只能按设计好的主键查）。',
    sections: [
      { title: 'Cassandra 的设计哲学', content: 'Cassandra 是 Amazon Dynamo 论文 + Google BigTable 论文的结合实现。特点：1) 无主节点（所有节点平等，没有单点故障）2) 最终一致性（可调节一致性级别——ONE/QUORUM/ALL）3) 按主键范围分布数据（分区键决定数据去哪台机）4) 不支持 JOIN/事务（设计时就要反范式化）。适合：写入量极大、不能停机、多地多活。用过 Cassandra 的公司：Netflix、Apple、Instagram。' },
      { title: 'Cassandra 的数据建模——先设计查询再设计表', content: 'Cassandra 的最大思维转变：不是"数据长什么样就怎么建表"，而是"查询是什么就怎么建表"。有 3 种查询模式就需要 3 张表（数据冗余存储）。例如：查询模式 1——"按用户查订单"→ 表 orders_by_user: PRIMARY KEY(user_id, order_time)。查询模式 2——"按订单状态查"→ 表 orders_by_status: PRIMARY KEY(status, order_time)。两张表存相同数据但用不同主键。数据同步由应用层保证（一次写入同时写多张表）。这听起来疯狂但对 Cassandra 是标准做法——因为它不支持 JOIN/二级索引（有限支持），数据冗余是换取查询性能的代价。原则：Chebotko 方法——先列出所有查询语句、根据查询设计主键、为主键设计表。' },
    ],
    handsOn: [
      { title: 'Docker 启动 Cassandra 并创建表', cmd: 'docker run -d --name cassandra -p 9042:9042 cassandra:latest && sleep 30 && docker exec cassandra cqlsh -e "CREATE KEYSPACE test WITH replication={\'class\':\'SimpleStrategy\',\'replication_factor\':1}; CREATE TABLE test.users (id UUID PRIMARY KEY, name TEXT, email TEXT);"', output: '(Cassandra 启动 + keyspace + 表创建)', explain: '9042 是 CQL 端口。cqlsh 是 Cassandra 的命令行客户端，语法类似 SQL。replication_factor=1 是单节点，生产至少 3。' },
    ],
    diagnosis: [
      { symptom: 'Cassandra 查询报 "Cannot execute this query as it might involve data filtering"', cause: '查询的 WHERE 条件不包含完整的分区键（Partition Key），Cassandra 拒绝执行全表扫描', fix: '要么修改查询加上分区键条件，要么 ALLOW FILTERING（非常不推荐——生产环境可能扫描所有节点导致超时和性能灾难）。正确做法：要按新字段查→新建一张以该字段为主键的表' },
      { symptom: 'Cassandra 节点间数据不一致，读到的数据有时新有时旧', cause: '最终一致性——写入某个节点后其他节点同步有延迟，读取时可能命中未同步的节点', fix: '对一致性要求高的操作使用 QUORUM 一致性级别（读写都 > 半数节点确认），或 LOCAL_QUORUM（同机房的 > 半数）。用 nodetool repair 定期修复不一致数据' },
    ],
    exercises: [
      { level: '基础', task: 'Cassandra 为什么可以"没有单点故障"', hint: '去中心化架构', answer: '没有主从之分——所有节点角色相同，数据复制到多个节点。任一节点挂了，其他节点继续服务。这种无主架构（masterless）让它天生高可用。' },
      { level: '进阶', task: '为"用户时间线"设计 Cassandra 数据模型：用户发帖后，粉丝可以看到时间线。支持"查某用户主页的帖子"和"查某粉丝的时间线"', hint: '两张表——按作者和按粉丝', answer: '表 1 posts_by_user（查某用户的主页）：PRIMARY KEY(author_id, created_at DESC)。INSERT: author_id, created_at, content。表 2 timeline_by_follower（查粉丝的时间线）：PRIMARY KEY(follower_id, created_at DESC)。当用户发帖时，先查粉丝列表，为每个粉丝 INSERT 一条到 timeline_by_follower。这种"写时扇出"（Write-time Fanout）是 Cassandra 的标准做法——用写入量换查询性能。对于大 V（千万粉丝），扇出写入量太大→可以改为"读时合并"（只查关注的用户最近的帖子再合并排序），或混合策略（大 V 用读时合并、普通用户用写时扇出）。' },
    ],
  },

  "BTNJfWemFKEeNeTyENXui": {
    mentalModel: 'Neo4j 是图数据库的"代名词"——提到"图数据库"，十有八九就是它。用节点和边来表示数据，查询关系比 SQL 直观 10 倍。查询语言 Cypher 把图模式直接画在查询里。',
    sections: [
      { title: 'Neo4j 的使用', content: 'Cypher 查询示例——查"Alice 的朋友的朋友"：MATCH (alice:Person {name:"Alice"})-[:KNOWS]->()<-[:KNOWS]-(fof:Person) RETURN fof。这在 SQL 中是 2 次 JOIN（friends 表自 JOIN），N 度关系在 SQL 中复杂度指数级增长，在图数据库中复杂度是线性的。适合：社交推荐、欺诈检测（环形资金链路）、知识图谱、权限系统（用户→角色→资源）。' },
      { title: 'Neo4j 的图算法——不只是遍历', content: 'Neo4j Graph Data Science (GDS) 库提供了企业级图算法，用于超越简单遍历的分析：1) PageRank——找出图中最重要的节点（影响力分析）2) Community Detection（Louvain/Label Propagation）——发现自然形成的社区/群体 3) Shortest Path——两点间最短路径（版本最短依赖链）4) Similarity——计算节点相似度（"和这个用户最相似的其他用户"）5) Centrality——找出桥接节点和关键枢纽。实战：在欺诈检测中，PageRank 可能揭示"资金最终都会流经某几个账户"的异常模式。在推荐系统中，Community Detection 发现兴趣群体，群体内的其他人可能是好的推荐候选。这些算法在 SQL 中几乎无法实现或需要深度递归 CTE。' },
    ],
    handsOn: [
      { title: '用 Cypher 查 Alice 的朋友和朋友的朋友', cmd: 'cypher-shell "MATCH (a:Person{name:\'Alice\'})-[:KNOWS*1..2]->(f) RETURN DISTINCT f.name"', output: '(返回 Alice 的直接和间接朋友)', explain: '*1..2 表示 1 到 2 跳深度。*1..1 只查直接朋友，*2..2 只查朋友的朋友。SQL 实现相同逻辑需要多层 JOIN。' },
    ],
    diagnosis: [
      { symptom: '图查询返回结果重复（同一个人出现多次）', cause: '通过不同路径到达同一节点（如 Alice→Bob→Carol 和 Alice→Dave→Carol），Carol 出现两次', fix: '添加 DISTINCT 去重——RETURN DISTINCT f.name。或在 MATCH 中使用路径约束避免重复遍历' },
      { symptom: 'Neo4j 导入大量数据（亿级节点）后查询变慢', cause: '缺少索引——MATCH (u:User {email: \'...\'}) 需要对所有 User 节点的 email 属性全扫描', fix: 'CREATE INDEX ON :User(email); CREATE INDEX ON :User(name)。索引对 MATCH/MERGE 的 WHERE 条件至关重要。此外定期 PROFILE 查询执行计划检查是否有全扫描节点' },
    ],
    exercises: [
      { level: '基础', task: '解释为什么"N 度人脉查询"在 SQL 中很慢但在 Neo4j 中很快', hint: 'JOIN vs 图遍历', answer: 'SQL 中"朋友的朋友的朋友"需要 3 次 JOIN，关系越远 JOIN 越多（指数级别）。Neo4j 中节点和边是"直接存储的关系"——遍历一层只需要跟着指针走，和遍历深度成正比（线性级别）。' },
      { level: '进阶', task: '用 Neo4j 设计一个推荐系统：用户买了商品，推荐"买了这个商品的人也买了"的其他商品', hint: '协同过滤的图模型', answer: '节点：User、Product。关系：(User)-[:PURCHASED]->(Product)。查询"买了 Product A 的人也买了什么"：MATCH (p:Product{name:"A"})<-[:PURCHASED]-(u:User)-[:PURCHASED]->(other:Product) WHERE other <> p RETURN other.name, COUNT(*) AS freq ORDER BY freq DESC LIMIT 10。在 SQL 中需要自 JOIN 两次 purchase 表，在 Neo4j 中只需一次图遍历。进阶：加权重——如果用户浏览了商品但没买，可以用 (User)-[:VIEWED {weight:0.3}]->(Product) 和 (User)-[:PURCHASED {weight:1.0}]->(Product) 表示不同强度的信号。' },
    ],
  },

  "SHmbcMRsc3SygEDksJQBD": {
    mentalModel: '面向规模构建（Building for Scale）不是加更多服务器那么简单——是从一开始就设计"如果用户量翻 100 倍，什么会崩？"。包括水平扩展、故障隔离、容量规划、性能优化。',
    sections: [
      { title: '规模化的核心考量', content: '1) 无状态应用——可以随意增加实例（水平扩展）2) 数据库是瓶颈——读写分离（主写从读）、分片、缓存 3) 异步化——能推迟的就推迟（队列/定时任务）4) CDN——静态资源推到边缘 5) 降级和限流——保护核心链路 6) 可观测性——问题发生前看到迹象。核心原则：先让它能工作 → 再让它能快速工作 → 再让它能规模化工作。不要一开始就为"百万用户"过度设计。' },
      { title: '容量规划——"你的系统能撑多少 QPS？"这个问题的答案', content: '做一次容量评估（Back-of-the-envelope Estimation）：1) 单实例 QPS 基准——以你的 API 为例，用 wrk/ab/k6 压力测试，找到"延迟开始急剧上升"的临界 QPS（如 Go API 在 1000 QPS 时 P99 <50ms，到 2000 QPS 时 P99 >500ms——临界点 1500 QPS）2) 计算需要的实例数：预计峰值 QPS / 单实例安全 QPS × 1.5（余量）。如预计 10000 QPS 峰值 / 1500 = 6.67 → 部署 10 个实例 3) 数据库评估：主库能承受多少写入 QPS？从库能承受多少读取 QPS？缓存命中率多少能保护数据库？（计算公式：DB 承受 QPS = 总 QPS × (1 - 缓存命中率)）4) 带宽估算：平均响应大小 × QPS × 8 = 需要的带宽 bit/s。5) 定期更新——随业务增长每季度重做评估，和实际监控数据对比。' },
    ],
    handsOn: [
      { title: '用 wrk 压测你的 API', cmd: 'wrk -t4 -c100 -d30s --latency http://localhost:3000/api/endpoint', output: 'Running 30s test @ http://localhost:3000/api/endpoint\n  4 threads and 100 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency    12.5ms   15.2ms   245.3ms   87.1%\n  Requests/sec: 3245.67', explain: '-t4=4 个线程，-c100=100 个并发连接，-d30s=测试 30 秒。关注两个数字：QPS（Requests/sec）和延迟分布（Latency的 P50/P99）。如果延迟开始飙升 + 标准差变大，说明到达瓶颈。' },
    ],
    diagnosis: [
      { symptom: '流量翻倍后系统没有如预期线性扩容，性能下降超过 2 倍', cause: '存在"非水平可扩展"的瓶颈——如共享数据库达到连接数上限、消息队列单分区成为瓶颈、Session 共享（如某台机器缓存了特定用户的 Session）', fix: '找到瓶颈组件（用分布式追踪 + 各组件监控逐一排查），确认瓶颈是水平可扩展还是垂直可扩展，水平瓶颈需要重构（如消息队列增加分区），垂直瓶颈临时增加资源直到水平改造完成' },
      { symptom: '弹性扩容后旧实例退出时丢失处理中的请求', cause: '没有优雅关闭机制——负载均衡器摘除实例后立刻 kill 进程，处理中的请求（如上传文件）被中断', fix: '实现优雅关闭：1) 收到 SIGTERM 后标记为不健康（readiness probe 返回 false）2) 等负载均衡器摘除流量（preStop hook）3) 等待已接收的请求处理完成（最多 graceful_timeout 秒）4) 超时后强制关闭' },
    ],
    exercises: [
      { level: '基础', task: '说出应用层水平扩展为什么比数据库扩展容易', hint: '有状态 vs 无状态', answer: '应用层通常是"无状态"的——任何服务器都能处理任何请求（Session 放 Redis）。加机器→放负载均衡后面→即刻扩容。数据库是"有状态"的——数据不能随便分。所以数据库通常是扩展的瓶颈。' },
      { level: '进阶', task: '做一次容量估算：日活 100 万用户，每用户平均 5 次 API 请求，每次请求平均 50KB 响应。计算峰值 QPS、带宽需求、存储需求（假设每请求记录 1KB 日志保留 90 天）', hint: '峰值 = 平均 × 2-3 倍（高峰系数），日志存储 = QPS × log_size × seconds', answer: '日均总请求 = 100 万 × 5 = 500 万。平均 QPS = 500 万 / 86400 ≈ 58 QPS。峰值 QPS（3 倍）≈ 174 QPS。带宽：174 × 50KB × 8 = 69.6 Mbps。日志存储：500 万条/天 × 1KB = 5GB/天 × 90 天 = 450GB。API 服务器：假设每实例安全 QPS=500，174/500=0.35 → 最少 3 个实例（高可用最小数）。合理预估：虽然平均 QPS 仅 58，但要按峰值准备 + 冗余。数据库：如果 80% 读取命中缓存，实际打到 DB 的只有 174 × 20% = 35 QPS——一个 PostgreSQL 小实例足够。' },
    ],
  },

  "A7tBRtcV8EvcnODcokETG": {
    mentalModel: '高级后端和初级后端的区别就像"造车"和"开车"——初级能开好一辆车（实现功能），高级能设计车的架构（系统设计）、预判什么路况会出问题（故障预防）、出了故障快速诊断修复（可观测性）。',
    sections: [
      { title: '从初级到高级的成长路径', content: '初级后端（0-2 年）：能独立完成功能开发、Bug 修复、理解 CRUD 和基础架构。中级后端（2-5 年）：能做技术方案设计、性能优化、指导新人、跨团队协作。高级后端（5 年+）：能设计系统架构、处理复杂技术问题、推动技术演进、培养团队。关键跨越：1) 从"会用工具"到"理解工具内部原理"2) 从"实现需求"到"质疑和优化需求"3) 从"修 Bug"到"设计不出 Bug 的架构"4) 从"单打独斗"到"推动团队提升"。' },
      { title: '高级后端的能力模型——技术之外的竞争力', content: '很多人以为高级 = 技术深度。实际上高级后端的核心是"决策质量"和"影响力"：1) 技术决策——在性能和可维护性之间权衡、在短期交付和长期架构之间平衡。需要理解每个选择的 trade-off 而非记住"最佳实践" 2) 风险识别——能提前预判"这个设计在高并发下会崩"、"这个数据库迁移方案有数据丢失风险" 3) 沟通——向非技术方解释技术方案（"这个需求需要 2 周而非 2 天完成"的理由）、写清晰的设计文档 4) 指导——能通过 Code Review 和设计评审提升团队水平，不替人写代码但让人写出更好的代码 5) 业务理解——知道技术对业务的价值，能主动提出技术驱动的业务改进。成长路径：从"解决一个问题" → "解决一类问题" → "防止问题产生" → "让团队能独立解决问题"。' },
    ],
    handsOn: [
      { title: '阅读一篇经典系统设计论文——Google Spanner', cmd: '# 搜索 "Spanner: Google\'s Globally-Distributed Database"\n# 或阅读更易入门的 Dynamo: "Dynamo: Amazon\'s Highly Available Key-value Store"', output: '(论文阅读)', explain: '理解大规模分布式系统的设计决不是靠博客和三手资料。读原始论文能理解设计者面对的具体约束和取舍（trade-off）。Spanner 的 TrueTime API 解决了"全球分布式系统中如何排序事务"的核心问题。' },
    ],
    diagnosis: [
      { symptom: '职业瓶颈——2-3 年经验但感觉没有成长', cause: '停留在"熟练完成分配任务"的舒适区——缺少对整体架构的思考和突破性的技术挑战', fix: '主动争取一个"你觉得难"的项目（不只是一个 feature），参与系统设计评审（即使不是主讲），写技术博客倒逼深入理解，横向扩展（学一门新语言、深入一个不熟悉的领域如分布式系统/数据库内核）' },
      { symptom: '设计 Review 时经常被问到"为什么选这个方案"答不上来', cause: '习惯于"别人都这么做"或"教程这么写的"——缺少主动分析 trade-off 的能力', fix: '每次做技术选择都写一份简短的 ADR（Architecture Decision Record）：问题、备选方案、选择理由、代价、拒绝了哪些方案及原因。持续积累形成决策能力' },
    ],
    exercises: [
      { level: '进阶', task: '描述中级后端和高级后端在日常工作中面对同一个问题时思维方式的差异', hint: '中级：怎么解决。高级：为什么出现、会不会再出现、怎么让团队避免', answer: '中级：定位 bug → 修代码 → 提交 → 继续下一个任务。高级：定位 bug → 修代码 → 加测试防止回归 → 加监控让同类问题更快发现 → 分析根本原因看是否是架构问题 → 如果是，推动架构改进 → 分享给团队避免重复犯错。' },
      { level: '基础', task: '为自己制定接下来半年的技术成长计划，包含 2 个深度目标 + 1 个广度目标', hint: '选后端路线图中的一个领域', answer: '个人答案。示例：深度目标 1——学会读写 PostgreSQL EXPLAIN 输出（能分析执行计划、提出索引优化建议）。深度目标 2——读完 Designing Data-Intensive Applications 并实现书中一个分布式系统原型（如简单的 KV 存储）。广度目标——了解 K8s 基础操作（能部署应用到 K8s、排查基本问题）。' },
    ],
  },

  "LJt27onEOeIBomiEMTyKd": {
    mentalModel: '数据库进阶不是学更多"命令"，而是学"数据库内部怎么工作"——B+Tree 为什么快、MVCC 怎么做到读写不互斥、WAL 怎么保证 crash 不丢数据。从"会用"到"会优化"的桥梁。',
    sections: [
      { title: '数据库进阶知识地图', content: '1) 存储引擎：B+Tree/ LSM-Tree、页结构、Buffer Pool 2) 索引：聚集索引 vs 辅助索引、覆盖索引、联合索引最左前缀 3) 事务隔离级别：读未提交/读已提交/可重复读/串行化、MVCC 原理 4) 锁：行锁/表锁/间隙锁/死锁检测 5) 日志：WAL（预写日志）、redo/undo 6) 查询优化器：EXPLAIN 执行计划、统计信息、索引选择 7) 复制：主从复制/GTID/逻辑复制/WAL 复制。这些不是"背的"，是"遇到慢查询时能读懂 EXPLAIN 输出、知道加什么索引、理解为什么这个查询走了全表扫描"。' },
      { title: 'MySQL/PostgreSQL 执行计划精读', content: 'EXPLAIN ANALYZE 是数据库优化的第一步。关键字段解读：type——访问方式（ALL=全表→最差、index=全索引扫描→差、range=索引范围→好、ref=非唯一索引查找→很好、eq_ref=唯一索引查找→最佳、const=主键查找→极致）。rows——预估扫描行数（越多越慢）。Extra——Using filesort=额外排序（差）、Using temporary=临时表（差）、Using index=覆盖索引（好）、Using where=用 WHERE 过滤。PostgreSQL 额外关注：Index Scan vs Seq Scan（全表扫描）、Nested Loop vs Hash Join vs Merge Join（不同的 JOIN 策略）、cost=启动成本..总成本。当 EXPLAIN 显示 Seq Scan on large_table (cost=0.00..15000.00 rows=500000)——意味着它准备全表扫描 50 万行。考虑加索引让 Index Scan 替代。当显示 Merge Join 用了 Sort → 表示缺少支持排序的索引，每次 JOIN 都要排序。' },
    ],
    handsOn: [
      { title: '用 EXPLAIN ANALYZE 分析一个真实慢查询', cmd: 'psql -c "EXPLAIN ANALYZE SELECT u.name, COUNT(o.id) FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE u.created_at > \'2025-01-01\' GROUP BY u.id ORDER BY COUNT(o.id) DESC LIMIT 20;"', output: '(显示执行计划 + 实际耗时)', explain: 'EXPLAIN ANALYZE 不仅显示计划，还实际执行并返回每一步的耗时。对比 estimated rows vs actual rows——如果差异很大（如估计 100 行实际 10000 行），说明统计信息过期，需要 ANALYZE table。' },
    ],
    diagnosis: [
      { symptom: '一个之前很快的查询突然变慢', cause: '统计信息过期——表数据量变化后 optimizer 仍用旧的统计信息（行数/分布）选择不合适的索引', fix: 'ANALYZE table_name（MySQL）或 VACUUM ANALYZE table_name（PostgreSQL）更新统计信息。MySQL 中也可用 OPTIMIZE TABLE 重建表+更新统计。检查是否最近有大批量数据变更（如批量导入）' },
      { symptom: '加了索引但查询仍然走全表扫描', cause: '索引选择性太低（如 status 只有 3 个值，gender 只有 2 个值——优化器认为全表扫描更快），或查询条件使用了函数/类型转换导致索引失效', fix: '检查 EXPLAIN——如果 key=NULL 说明没用索引。常见索引失效：WHERE DATE(created_at)=\'2026-01-01\'（对列用函数）、WHERE id=\'123\'（int 列用 string 比较——隐式类型转换）、WHERE name LIKE \'%keyword\'（LIKE 前模糊）。修正：用 WHERE created_at >= \'2026-01-01\' AND created_at < \'2026-01-02\'，确保类型一致' },
    ],
    exercises: [
      { level: '进阶', task: '解释 EXPLAIN 输出中的 "Using filesort" 是什么，如何消除', hint: '索引排序', answer: '"Using filesort" 表示 MySQL 不能利用索引顺序，必须额外做排序操作（内存或磁盘排序）。消除方法：让 ORDER BY 的列和 WHERE 条件使用的索引列一致，或用覆盖索引避免回表。' },
      { level: '基础', task: '用 EXPLAIN 分析：SELECT * FROM orders WHERE user_id = 123 ORDER BY created_at DESC LIMIT 10。描述一个完美利用索引的执行计划应该是什么样', hint: 'type=ref, Extra=Using index', answer: '理想计划：type=ref（通过 user_id 索引查找），key=idx_user_created (user_id, created_at 的联合索引)，Extra=Using index（覆盖索引——不需要回表）。因为 ORDER BY created_at DESC 可以利用联合索引的第二列的有序性直接返回，不需要 filesort。而 LIMIT 10 让扫描在找到 10 条后立即停止。' },
    ],
  },

  "4kTcBU2it8NcngnddEfWS": {
    mentalModel: '这张后端路线图上很多技术你可能永远不会在同一个项目里用到——就像一个大超市，你不需要买所有东西。知道每种工具"是什么、何时用"比"会操作每种工具"重要得多。',
    sections: [
      { title: '深度 vs 广度策略', content: '核心技能（语言/数据库/API/安全）：深度掌握，能独立做项目。周边技能（搜索引擎/消息队列/容器/NoSQL）：广度了解——知道概念、适用场景、基本操作。特定技能（图数据库/时序数据库/列存/SOAP）：知道存在、什么场景用，需要时再学。轮换策略：每个季度深入一个周边技能——如这个月深入 Kafka，下个月深入 K8s，做一个小项目。三年下来你就是全栈后端。' },
      { title: 'T 型人才——为什么后端最需要 T 型', content: 'T 型 = 横向广（—）了解整个后端领域 + 纵向深（|）精通一个领域。后端的特殊性在于——你不可能在所有领域都深，但每个领域都可能"突然需要"。例子：你精通 PostgreSQL，但项目需要引入 Elasticsearch 做全文搜索——你不需要成为 ES 专家，但你需要知道"ES 和 PostgreSQL 全文搜索的区别"、"ES 的倒排索引原理"、"为什么不要用 ES 当主库"。这就是横向广度。当你需要深挖 ES 时，你的广度让学习效率很高——你已经知道概念和原理，只差实践细节。构建 T 型的策略：1) 选择 1-2 个深度领域（如 PostgreSQL + Go）持续投入 2) 每周花 1-2 小时了解一个新工具/概念（不求会用，但求知道"它是什么、解决什么问题"）3) 项目驱动——真实项目引入新工具时再深学。' },
    ],
    handsOn: [
      { title: '创建你的个人技术雷达', cmd: '# 用 https://www.thoughtworks.com/radar 的格式：\n# Adopt（采用）| Trial（试用）| Assess（评估）| Hold（暂缓）\n# 每季度更新一次，跟踪你对各技术的态度变化', output: '(个人技术雷达)', explain: 'ThoughtWorks 技术雷达是业界标准的技术评估框架。建立个人版帮助你明确"现在在用什么、在评估什么、什么不值得投入"。比漫无目的地学新技术高效得多。' },
    ],
    diagnosis: [
      { symptom: '什么都学但什么都不精，面试时被追问深度问题答不上来', cause: '缺少深度领域——所有技术都停留在"会用"层面，没有真正理解内部原理', fix: '选 1 个你最常用/最喜欢的领域（如你日常写 SQL→深入 PostgreSQL 内核和查询优化），投入 80% 学习时间在这个领域，直到你能清晰解释内部工作原理。广度只用 20% 时间了解新东西' },
      { symptom: '新工具层出不穷，感到学习焦虑', cause: '试图跟上所有新技术——这是不可能的（也没有必要）。很多"新工具"是旧概念的重新包装', fix: '关注底层原理而非具体工具——理解了消息队列的模式（Pub/Sub、at-least-once 语义），Kafka/RabbitMQ/Redis Stream 只是不同实现。理解了数据库原理（B+Tree/MVCC/WAL），PostgreSQL/MySQL/TiDB 都是这些原理的实例。原理不变，工具在变' },
    ],
    exercises: [
      { level: '基础', task: '列出作为后端必须深度掌握的 5 项核心技能和 3 项需要广度了解的周边技能', hint: '核心：语言/数据库/API/安全/Git', answer: '深度：1) 一门语言 2) 关系型数据库+SQL 3) REST API 设计 4) 认证授权+安全基础 5) Git+工作流。广度：1) Docker/容器化 2) Redis/缓存 3) 消息队列（Kafka/RabbitMQ 选一个了解）。' },
      { level: '进阶', task: '画出你个人的技术雷达——Adopt/Trial/Assess/Hold 四个圈', hint: '基于你当前工作中实际使用的技术', answer: 'Adopt（当前主力）：你工作中每天用的语言/框架/数据库/工具。Trial（在试用）：你在 side project 或非核心项目中使用、验证效果的技术。Assess（在评估）：你在关注、可能下一阶段引入的技术。Hold（暂缓）：你了解但判断目前不值得投入的技术（如技术过时、不适合你的场景）。示例：Adopt=Go/gRPC/PostgreSQL/Docker；Trial=Kafka/K8s/Elasticsearch；Assess=Rust/Serverless/Wasm；Hold=SOAP/Apache/XML-RPC。每季度更新并分享你的雷达图。' },
    ],
  },

  // ============================================================
  // 131-135: 可观测性 (Telemetry/Monitoring/Instrumentation/Observability)
  // ============================================================
  "Z01E67D6KjrShvQCHjGR7": {
    mentalModel: '可观测性就像给系统装了一套"全身 CT 扫描+实时监控仪"——不是等系统挂了才发现，而是随时能看到内部的运行状态。三大支柱：日志（Logs）、指标（Metrics）、链路追踪（Traces）。',
    sections: [
      { title: '三大支柱', content: '1) 日志（Logs）：离散的事件记录——"用戶 ID 123 在 10:30:15 登录成功"。用于调试和审计。2) 指标（Metrics）：聚合的数字——"过去 5 分钟 HTTP 500 错误有 12 次、P99 延迟是 350ms"。用于监控和告警。3) 链路追踪（Traces）：一次请求经过多个服务的完整路径——"API Gateway→User Service(15ms)→Database(3ms)→Redis(1ms)→Response"。用于定位瓶颈。三者不是替代关系，是互补关系——一起构成完整的可观测性。' },
      { title: '为什么需要可观测性——从"被动救火"到"主动防火"', content: '没有可观测性的团队：用户投诉"系统卡了"→工程师慌忙登服务器查日志→日志太多搜索困难→凭经验猜可能是数据库慢→登数据库看 show processlist→发现确实有慢查询→改 SQL→祈祷问题解决。有可观测性的团队：Grafana Dashboard 显示过去 5 分钟 P99 延迟从 200ms 跳到 2s（指标告警）→ 点击时间点直接跳到 Jaeger 查看该时间段慢请求的 Trace（链路追踪）→ Trace 显示慢在 orders 服务的数据库查询，耗时 1.8s → 点击跳转到 ELK 搜索该 trace ID 的关联日志（日志）→ 日志显示慢 SQL:"SELECT * FROM orders WHERE ..."→ EXPLAIN 发现缺索引→ 加索引→ 延迟恢复正常。整个过程 5 分钟 v.s. 30 分钟。可观测性的价值 = 发现问题速度的差距。' },
    ],
    handsOn: [
      { title: 'OpenTelemetry 最小示例——自动为 HTTP 服务添加追踪', cmd: '# Node.js:\nnpm install @opentelemetry/api @opentelemetry/auto-instrumentations-node\nnode --require @opentelemetry/auto-instrumentations-node/register server.js', output: '(HTTP 服务启动，自动生成 trace 和 span)', explain: 'OpenTelemetry 的自动埋点（Auto-Instrumentation）——一行代码不改就给 HTTP/数据库/gRPC 等常见库自动加上追踪。收集的 trace 可以导出到 Jaeger/Zipkin/Datadog 等后端。' },
    ],
    diagnosis: [
      { symptom: '告警风暴——一个故障触发了数十条告警，无法定位根因', cause: '告警规则太细、太散——每个微服务各自告警，没有告警聚合和关联', fix: '告警应基于"症状"（用户感知到的问题：如"订单创建成功率低于 95%"）而非"原因"（每个服务的每个错误状态）。建立告警层级——P0（影响用户的核心功能）、P1（部分用户受影响）、P2（内部异常无用户影响），根因定位用 Trace+Log 而非告警' },
      { symptom: '日志太多，排查问题时搜索 10 分钟才找到相关日志', cause: '日志没有结构化（纯文本而非 JSON）、没有统一关联 ID（Trace ID 没贯穿所有服务日志）', fix: '所有日志输出为 JSON 格式（包含 timestamp/level/message/trace_id/span_id），每个请求入口生成唯一 trace_id 并传递到所有下游调用，日志中记录该 trace_id，查询时一条 grep trace_id 获取全链路日志' },
    ],
    exercises: [
      { level: '基础', task: '说出可观测性三大支柱并各举一个使用场景', hint: '日志/指标/追踪', answer: '日志：用户反馈"登录失败"→查日志看具体错误信息。指标：配置告警"P99 延迟 > 1s 时通知 oncall"。追踪：定位为什么这个接口变慢了→追踪显示卡在数据库查询。' },
      { level: '进阶', task: '为一个已有系统添加可观测性的渐进方案：当前零可观测性（只有 stdout 文本日志），6 周内逐步建立三大支柱', hint: '先结构化日志 → 再指标 → 最后追踪; 最小改动原则', answer: '第 1-2 周（日志）：引入结构化日志库（如 zap/zapdriver），所有日志输出 JSON + trace_id，日志收集到 Loki/ELK。第 3-4 周（指标）：在 HTTP middleware 层埋 4 个黄金指标（延迟/QPS/错误率/饱和度），导出到 Prometheus，Grafana 搭基本 Dashboard。第 5-6 周（追踪）：引入 OpenTelemetry 自动埋点（不改代码），HTTP/gRPC/数据库调用自动生成 trace，导出到 Jaeger。原则：不改造业务代码（用 middleware/interceptor 层统一埋点），先用起来再精细调。' },
    ],
  },

  "QvMEEsXh0-rzn5hDGcmEv": {
    mentalModel: '监控是系统的"体检报告"——定期检查各项指标是否正常。CPU 高了吗？内存够吗？错误率超了吗？监控不是出了问题才看，而是持续盯着的"哨兵"。',
    sections: [
      { title: '监控的最佳实践', content: '监控什么（Golden Signals）：1) 延迟（Latency）——请求花了多长时间 2) 流量（Traffic）——QPS/每秒请求数 3) 错误（Errors）——错误率（HTTP 5xx/异常/超时）4) 饱和度（Saturation）——资源使用率（CPU/内存/连接池/队列长度）。告警规则：基于症状而非原因——告警"用户注册失败率高"而不是"数据库连接数高"（后者可能是正常的）。告警要有 actionable 的信息，不要半夜把人叫起来却什么都干不了。' },
      { title: '告警设计——好的告警和坏的告警', content: '好的告警：1) Actionable——收到告警的人知道该做什么（"订单服务 P99 延迟超过 3 秒 → 检查 database-orders 的慢查询和 connection pool"而非"CPU 超过 80%"）2) 基于症状——反映用户体验（"支付成功率 < 99%"而非"payment-service 内存使用率 > 90%"）3) 低噪音——不频繁触发假告警（有足够的 evaluation window + 防抖动 — 如连续 5 分钟超过阈值才告警）4) 有优先级——P0（立刻行动，任何时间）、P1（工作时间处理）、P2（记录到 backlog）。坏的告警：告警后不知道做什么、平均每天触发 10 次以上、告警消息是"xxx service is down"但实际没 down。做法：定期审查告警历史——如果一个告警过去 30 天触发了 50 次但每次都是假告警，修改或删除这条告警规则。' },
    ],
    handsOn: [
      { title: '用 Prometheus + Grafana 搭建一个 HTTP 错误率监控面板', cmd: '# Prometheus 查询：\n# rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) * 100\n# 在 Grafana 中创建 Panel，选择 Prometheus 数据源，粘贴上述查询', output: '(Grafana Panel 显示实时错误率曲线)', explain: 'PromQL 的 rate() 函数计算每秒增长率，[5m] 是时间窗口。5xx 错误数 / 总请求数 × 100 = 错误率百分比。设置 Grafana Alert：当此值 > 1 持续 5 分钟触发告警。' },
    ],
    diagnosis: [
      { symptom: '监控说 CPU 100% 但用户没反馈卡顿', cause: 'CPU 使用率高可能是批处理任务在正常工作（如生成报表、数据同步），不影响用户请求', fix: '区分"正常高 CPU"和"异常高 CPU"——给批处理任务设置独立的监控分组（或 label），它们的 CPU 使用是可预期的。告警只对"直接服务用户请求的进程"设置。更好的指标：请求延迟和错误率，比 CPU 更直接反映用户体验' },
      { symptom: 'Prometheus 内存占用暴涨最终 OOM', cause: 'Cardinality 爆炸——labels 的组合数过多。如把 user_id 作为 label（百万级基数）', fix: '检查高基数 label（Prometheus TSDB 为每个 label 组合创建一个时间序列），user_id/request_id/session_id 等不要作为 label，改用 trace/log 记录。可以用 prometheus_tsdb_head_series 指标观察当前 series 数' },
    ],
    exercises: [
      { level: '基础', task: '解释什么是 Google SRE 的四个 Golden Signals', hint: 'Latency/Traffic/Errors/Saturation', answer: 'Latency（请求耗时）、Traffic（请求量 QPS）、Errors（错误率）、Saturation（资源饱和度）。这四个指标覆盖了系统健康度的大部分面。' },
      { level: '进阶', task: '设计一组告警规则：为 API 服务设置 P0（立刻通知）、P1（5 分钟内通知）、P2（工作时间通知）三级告警', hint: '基于症状分级', answer: 'P0（电话/短信通知，任何时间）：支付成功率 < 99%（连续 3 分钟）、P99 延迟 > 5s（连续 3 分钟）、所有实例不健康（连续 1 分钟）。P1（IM/邮件通知，工作时间 5 分钟内）：非核心 API 错误率 > 5%（连续 5 分钟）、数据库连接池饱和度 > 90%（连续 5 分钟）、P99 延迟 > 2s（连续 5 分钟）。P2（Trello/Jira ticket，工作时间）：非关键服务 QPS 异常（与上周同比偏离 50% 以上）、磁盘使用率 < 20%（提前预警，有时间准备扩容）、慢查询数 > 50/min。关键：P0/P1 必须有 runbook（操作手册），注明"收到此告警后：1. 检查 xxx 2. 执行 yyy 3. 如无效则升级到 zzz"。' },
    ],
  },

  "neVRtPjIHP_VG7lHwfah0": {
    mentalModel: '遥测（Telemetry）是"数据采集员"——在代码里埋点采集数据，汇总到监控系统。遥测是可观测性的"数据来源"，没有数据就没有可观测性。',
    sections: [
      { title: '遥测的实现方式', content: '1) OpenTelemetry（OTel）：CNCF 项目，统一遥测标准——一套 API/SDK 采集 Traces + Metrics + Logs，不绑定特定后端（可发送到 Jaeger/Prometheus/Datadog）。2) Prometheus 指标格式：应用曝露 /metrics 端点，Prometheus 定期抓取。3) 结构化日志：JSON 格式日志 → 发送到 ELK/Loki。关键决策：早点引入 OpenTelemetry 作为遥测标准，避免被特定厂商锁定。' },
      { title: 'OpenTelemetry 核心概念——Trace、Span、Context Propagation', content: 'Trace：一次用户请求在全系统中的完整路径，由多个 Span 组成。Span：Trace 中的单个操作单元——如 "HTTP POST /orders"、"SELECT * FROM orders"、"redis GET cart:123"。每个 Span 包含：name（操作名）、start_time/end_time（开始-结束时间）、parent_span_id（父 Span）、attributes（标签：如 http.status_code=200、db.system=postgresql）、events（时间点事件）。Context Propagation：Trace ID + Span ID 的跨服务传递——HTTP 请求头 traceparent（W3C 标准）在服务间传递，确保 A→B→C 的调用链可以串联成一个 Trace。实现：在 HTTP middleware 层自动读取和注入 traceparent header，不需要业务代码手动处理。' },
    ],
    handsOn: [
      { title: '在 Go 应用中引入 OpenTelemetry 自动埋点', cmd: '# go.mod:\n# go.opentelemetry.io/otel\n# go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp\n# \n# server.go:\n# import "go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"\n# handler := otelhttp.NewHandler(mux, "api-server")', output: '(HTTP handler 自动生成 trace)', explain: 'otelhttp.NewHandler 包装了标准的 http.Handler，自动为每个请求创建 Span、读取上游 traceparent、发送 trace 给 exporter。几行代码就完成了全链路追踪的基础设施。' },
    ],
    diagnosis: [
      { symptom: 'Trace 中有断链——前端请求看到 A→B，但 B→C 的 span 丢失', cause: '服务 C 没有启用 OpenTelemetry 或 traceparent header 在 B→C 的请求中没有正确传递', fix: '检查 B→C 的 HTTP/gRPC 客户端是否使用了 OTel 的 instrumented client（如 otelhttp.DefaultClient），确保 traceparent header 被自动注入。如果没有用 instrumentation，手动从上游 context 中提取 traceparent 放入请求头' },
      { symptom: 'Trace 数据量太大，Jaeger 后端扛不住', cause: '采样率太高——100% 采样所有请求在 QPS 高的系统中生成海量 trace 数据', fix: '使用 OpenTelemetry 的 Sampler：1) AlwaysOn（100%，仅开发环境）2) AlwaysOff（0%）3) TraceIDRatioBased（按比例，如 10%）4) ParentBased（遵循上游采样决定）。生产环境通常 1%-10% 采样 + 全采样错误请求（根据 Span 的 status.code=ERROR）。还可以用 Tail Sampling（OpenTelemetry Collector 在收集端根据 latency/error 决定保留哪些 trace）' },
    ],
    exercises: [
      { level: '基础', task: '解释为什么 OpenTelemetry 很重要', hint: '标准化', answer: '它是遥测的统一标准——一次埋点，可以发送到任何支持 OTel 的后端（Jaeger/Datadog/Prometheus/...）。不需要因为换了监控系统就改代码。同时它也减少了你需要学的 SDK 数量——学会 OTel 的 trace/span 概念就够了。' },
      { level: '进阶', task: '设计一个多语言微服务（Go+Python+Node.js）的统一遥测方案，要求所有服务的 trace 能串联', hint: 'OpenTelemetry + W3C Trace Context', answer: '1) 每个服务引入对应语言的 OTel SDK 2) 统一使用 W3C Trace Context（traceparent header）传播上下文 3) HTTP 客户端/服务端统一用 OTel instrumentation 自动注入和提取 traceparent 4) 所有服务的 trace exporter 指向同一个 OTel Collector（部署为 sidecar 或 daemonset）5) OTel Collector 统一处理（sampling/batch/export）后发送到 Jaeger 后端 6) 关键：使用相同的 resource 属性（service.name="order-service"）在 Jaeger 中区分服务。所有服务使用统一的 trace 采样策略。验证：在 Jaeger 中搜索一个外部请求的 trace ID，应该能看到完整的调用链（API Gateway→Go Service→Python Service→PostgreSQL→Redis）。' },
    ],
  },

  "Uhj-lrUhQQnwOdn_e6_hd": {
    mentalModel: '可观测性"四大金刚"：日志（发生什么了）、指标（整体趋势如何）、追踪（具体怎么走的）、告警（什么时候该叫人了）。这四样配置好了，你才能在凌晨 3 点安心睡觉。',
    sections: [
      { title: '可观测性工具链', content: '日志：ELK（Elasticsearch+Logstash+Kibana）或 Grafana Loki（更轻量）。指标：Prometheus + Grafana（开源标配）或 Datadog（付费全功能）。追踪：Jaeger 或 Zipkin 或 Grafana Tempo。告警：Alertmanager（Prometheus 生态）或 Grafana Alerts。建议新手起步：Grafana Loki（日志）+ Prometheus（指标）+ Grafana（可视化），全在一个生态里。' },
      { title: 'Grafana 生态——一站式可观测性', content: 'Grafana 从"只是可视化面板"演变成"可观测性全家桶"：1) Grafana Dashboards——同一个 UI 连接 Prometheus/Loki/Tempo/Elasticsearch/MySQL 等所有数据源，统一可视化 2) Grafana Loki——结构化日志聚合（类似 ELK 但更轻量，按 label 索引而非全文，存储成本更低）3) Grafana Tempo——分布式追踪后端（专为高吞吐低成本的 trace 存储设计，只索引 trace ID 和 metadata，不索引 span 内容，搜索靠外部系统）4) Grafana Mimir——Prometheus 兼容的指标长期存储（解决 Prometheus 的存储限制，支持水平扩展）5) Grafana Alerts——统一告警管理（从指标、日志、trace 都能触发）。优势：同一个查询语法和 UI，降低学习成本。' },
    ],
    handsOn: [
      { title: '用 Docker Compose 一键启动 Grafana 可观测性全家桶', cmd: 'cat > /tmp/docker-compose.yml << \'EOF\'\nservices:\n  grafana:\n    image: grafana/grafana\n    ports: ["3000:3000"]\n  prometheus:\n    image: prom/prometheus\n    ports: ["9090:9090"]\n  loki:\n    image: grafana/loki\n    ports: ["3100:3100"]\n  tempo:\n    image: grafana/tempo\n    ports: ["3200:3200"]\nEOF', output: '(四个服务启动)', explain: '一个 compose 文件启动 Grafana + Prometheus + Loki + Tempo，开发环境完整演示可观测性栈。Grafana 中配置这 3 个数据源后，可以在 Dashboard 中无缝切换查看指标、日志、追踪。' },
    ],
    diagnosis: [
      { symptom: '半夜收到告警但无法确定是不是需要马上处理', cause: '告警信息不够具体——缺少上下文（当前值 vs 阈值、影响范围、关联的 Dashboard 链接）、没有 Runbook', fix: '每个告警信息包含：1) 当前值 v.s. 阈值 2) 持续多久 3) 影响什么服务 4) 关联的 Grafana Dashboard 链接 5) Runbook 链接（"收到此告警后点击此处查看处理步骤"）。模板化告警描述而非纯 PromQL 输出' },
      { symptom: 'Grafana Dashboard 太多，关键时刻找不到想要的面板', cause: 'Dashboard 散乱无组织——每个服务随意创建，没有统一的导航和层级', fix: '建立 Dashboard 层级：L1（整体概览——所有服务的黄金指标总览，CEO/CTO 级别的健康度大屏）→ L2（服务概览——单个服务的请求/错误/延迟/依赖图）→ L3（详细面板——数据库连接池/缓存命中率/消息队列 lag 的技术细节）。用 Grafana Folder 组织，标签管理和搜索' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个"订单服务"的可观测性方案', hint: '哪些指标、哪些日志、哪些追踪点', answer: '指标：订单创建量（QPS）、订单创建耗时（P50/P99）、订单失败率、数据库连接池饱和度。日志：每个订单创建操作记录 INFO（含 order_id）、失败记录 ERROR（含错误堆栈）。追踪：一次"创建订单"请求的完整链路（API→订单服务→库存服务→支付服务→数据库），每个 span 记录耗时。告警：订单失败率 > 1% 或 P99 延迟 > 2s → 通知 oncall。' },
      { level: '基础', task: '用一句话描述 Grafana Loki 和 Elasticsearch 在日志存储上的核心差异', hint: '索引策略', answer: 'Loki 只索引 label（metadata），不索引日志内容全文——搜索内容时用类 grep 的流式扫描（因此存储成本远低于 ES）。ES 索引所有词（倒排索引），搜索极快但存储成本高。Loki 适合"你需要查日志但不需要毫秒级全文搜索速度"的场景。' },
    ],
  },
};