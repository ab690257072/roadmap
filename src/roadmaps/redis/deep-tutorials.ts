import type { DeepTutorial } from '../deep-types';

export const REDIS_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  "M-EXrTDeAEMz_IkEi-ab4": {
    mentalModel: 'Redis 是一个把所有数据都存在内存里的"超速仓库"——用 RAM 换取极致的读写速度，适合那些传统数据库扛不住的高频操作',
    sections: [
      { title: '内存存储的本质', content: 'Redis 把所有数据（字符串、哈希、列表、集合、有序集合）都存在 RAM 里，而不是磁盘。\n\n优势：\n- 读取延迟：微秒级（0.1ms），比磁盘快 100-1000 倍\n- 写入延迟：同样微秒级\n- 吞吐量：单实例可达 10万+ QPS\n\n代价：\n- 容量受限于内存大小（通常几十GB，而非TB）\n- 成本更高（内存比磁盘贵 10-100 倍）\n- 断电可能丢数据（需要持久化机制）' },
      { title: '数据结构而非简单缓存', content: 'Redis 不只是 key-value 存储，它提供 5 种核心数据结构：\n\n1. String（字符串）：计数器、缓存、分布式锁\n2. Hash（哈希）：对象存储（用户信息、商品详情）\n3. List（列表）：消息队列、最近浏览记录\n4. Set（集合）：标签、好友关系、去重\n5. Sorted Set（有序集合）：排行榜、延迟队列\n\n每种结构都有专门的命令集，让复杂操作变得简单。' },
      { title: '典型使用场景', content: 'Redis 最适合：\n\n- 缓存层：加速数据库查询（命中率可达 90%+）\n- 会话存储：用户登录状态、购物车\n- 实时计数器：点赞数、在线人数\n- 排行榜：游戏积分、销量排名\n- 消息队列：简单任务队列（LIST + BRPOP）\n- 分布式锁：跨服务协调\n\n不适合：\n- 大容量数据（TB 级）\n- 复杂查询（JOIN、聚合）\n- 强一致性要求（如金融交易）' }
    ],
    diagnosis: [
      { symptom: 'Redis 占用内存比预期大很多', cause: 'Redis 除了存储数据本身，还需要额外内存用于：1) 数据结构开销（如 dictEntry 指针）2) 持久化时的 fork 内存（RDB/AOF 重写）3) 客户端缓冲区。', fix: '用 redis-cli --bigkeys 分析大 key；检查 maxmemory 和 maxmemory-policy 配置；考虑使用更紧凑的数据结构（如 Hash 代替多个 String）。' },
      { symptom: 'Redis 响应变慢，延迟从 0.1ms 升到 10ms', cause: '可能原因：1) 执行了 O(N) 命令（如 KEYS *、SMEMBERS 大集合）2) fork 持久化时阻塞 3) 内存不足触发淘汰策略。', fix: '用 SLOWLOG GET 查看慢查询；用 INFO commandstats 分析命令分布；避免在大集合上用 O(N) 命令；检查内存使用率和淘汰策略。' }
    ],
    exercises: [
      { level: '基础', task: '用 redis-cli 连接 Redis，设置一个 key，然后读取它', hint: 'SET key value, GET key', answer: 'redis-cli\n127.0.0.1:6379> SET mykey "hello"\nOK\n127.0.0.1:6379> GET mykey\n"hello"' },
      { level: '进阶', task: '查看 Redis 当前使用的内存和连接的客户端数量', hint: 'INFO 命令', answer: '127.0.0.1:6379> INFO memory\n# 查看 used_memory_human 字段\n127.0.0.1:6379> INFO clients\n# 查看 connected_clients 字段' }
    ]
  },

  "l2aXyO3STnhbFjvUXPpm2": {
    mentalModel: 'Key-value 数据库就像一个巨大的"字典"——你给每个值贴一个唯一的标签（key），然后通过标签快速找到对应的值',
    sections: [
      { title: 'Key-Value 模型', content: '最简单的 NoSQL 模型：\n- Key：唯一标识符（字符串）\n- Value：任意数据（字符串、数字、JSON、二进制）\n\n操作只有 3 种：\n- PUT(key, value)：存储\n- GET(key)：读取\n- DELETE(key)：删除\n\n优势：\n- 极快的查找速度（O(1) 哈希表）\n- 简单的数据模型\n- 容易水平扩展\n\n劣势：\n- 无法查询值的内部结构\n- 无法建立索引\n- 不适合复杂关系' },
      { title: 'Redis 的 Key-Value 增强', content: 'Redis 在基础 KV 上增加了：\n\n1. 丰富的 Value 类型：不只是字符串，还有 Hash、List、Set、Sorted Set\n2. 过期时间：key 可以自动删除（TTL）\n3. 原子操作：INCR、DECR、APPEND 等\n4. 发布订阅：key 变化时通知订阅者\n\n示例：\nSET user:123 "{\\"name\\":\\"Alice\\",\\"age\\":30}"\nGET user:123\nHSET user:123 name "Alice" age 30\nHGETALL user:123' },
      { title: 'Key 命名最佳实践', content: '好的 key 设计让系统更易维护：\n\n推荐格式：\n- user:123（对象类型:ID）\n- session:abc-def（会话:token）\n- cache:product:456（缓存:类型:ID）\n- lock:order:789（锁:资源:ID）\n\n避免：\n- 太长的 key（>100 字节浪费内存）\n- 特殊字符（空格、换行、引号）\n- 无意义的随机字符串\n\n技巧：\n- 用冒号分隔层级\n- 用 Scan 代替 Keys（避免阻塞）\n- 设置合理的 TTL' }
    ],
    diagnosis: [
      { symptom: 'GET 返回 nil，但 SET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) key 名拼写错误（大小写敏感）。', fix: '用 EXISTS key 检查是否存在；用 TTL key 查看剩余时间；用 MONITOR 实时监控命令；确保 key 命名一致。' },
      { symptom: 'KEYS * 命令导致 Redis 卡顿', cause: 'KEYS 是 O(N) 命令，会遍历所有 key，数据量大时阻塞主线程。', fix: '永远不要用 KEYS *，改用 SCAN 0 COUNT 100 分批遍历；或在设计时用 Hash 聚合相关数据，减少 key 数量。' }
    ],
    exercises: [
      { level: '基础', task: '用 SET 存储一个用户信息，然后用 GET 读取', hint: 'SET key value, GET key', answer: 'SET user:123 "{\\"name\\":\\"Alice\\",\\"age\\":30}"\nGET user:123\n# 返回：{"name":"Alice","age":30}' },
      { level: '进阶', task: '用 SCAN 遍历所有 user:* 的 key', hint: 'SCAN cursor MATCH pattern', answer: 'SCAN 0 MATCH user:* COUNT 100\n# 返回：cursor 和匹配的 key 列表\n# 如果 cursor != 0，继续 SCAN cursor MATCH user:* COUNT 100' }
    ]
  },

  "eHuBz_zSZK3rubn7nkd7g": {
    mentalModel: '缓存就像在书桌旁边放一本常用词典——不用每次都去图书馆（数据库）查，直接在手边找，速度快得多',
    sections: [
      { title: '缓存模式', content: 'Redis 作为缓存层的典型模式：\n\n1. Cache-Aside（旁路缓存）：\n   - 读：先查缓存，miss 则查数据库并写入缓存\n   - 写：更新数据库，删除缓存\n   \n2. Write-Through（写穿透）：\n   - 写：同时更新缓存和数据库\n   \n3. Write-Behind（异步写回）：\n   - 写：先更新缓存，异步更新数据库\n\n优势：\n- 减少数据库查询（命中率可达 90%+）\n- 降低数据库负载\n- 提升响应速度（微秒级 vs 毫秒级）' },
      { title: '缓存失效策略', content: '缓存失效的三种情况：\n\n1. 缓存穿透：查询不存在的数据，每次都打到数据库\n   - 解决：缓存空值（TTL 短）或使用布隆过滤器\n\n2. 缓存击穿：热点数据过期，大量请求同时打到数据库\n   - 解决：互斥锁（SETNX）或永不过期（后台更新）\n\n3. 缓存雪崩：大量缓存同时过期，数据库被打垮\n   - 解决：TTL 加随机值（如 300 + random(0,60)）' },
      { title: '缓存最佳实践', content: '缓存设计的最佳实践：\n\n1. 合理设置 TTL：\n   - 热点数据：永不过期（后台更新）\n   - 普通数据：TTL = 300-3600 秒\n   - 冷数据：TTL = 60-300 秒\n\n2. 缓存预热：\n   - 启动时加载热点数据到缓存\n   - 避免冷启动时数据库被打垮\n\n3. 缓存监控：\n   - 监控命中率（keyspace_hits / (keyspace_hits + keyspace_misses)）\n   - 目标：命中率 > 90%' }
    ],
    diagnosis: [
      { symptom: '缓存命中率低（<80%）', cause: '1) TTL 设置不合理 2) 缓存的数据不是热点数据 3) 缓存穿透严重。', fix: '调整 TTL；分析热点数据，优先缓存热点数据；使用布隆过滤器防止穿透。' },
      { symptom: '数据库负载突然升高', cause: '1) 缓存雪崩（大量缓存同时过期）2) 缓存击穿（热点数据过期）3) 缓存穿透（查询不存在的数据）。', fix: 'TTL 加随机值；热点数据永不过期；使用布隆过滤器。' }
    ],
    exercises: [
      { level: '基础', task: '实现 Cache-Aside 模式：查询用户信息，先查缓存，miss 则查数据库', hint: 'GET, SET', answer: '# 伪代码\ndef get_user(user_id):\n    # 先查缓存\n    cached = redis.get(f"user:{user_id}")\n    if cached:\n        return json.loads(cached)\n    \n    # 查数据库\n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n        return user\n    return None' },
      { level: '进阶', task: '防止缓存穿透：查询不存在的用户时，缓存空值', hint: 'SET key "null" EX 60', answer: '# 伪代码\ndef get_user(user_id):\n    cached = redis.get(f"user:{user_id}")\n    if cached == "null":\n        return None  # 缓存的空值\n    if cached:\n        return json.loads(cached)\n    \n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n        return user\n    else:\n        redis.setex(f"user:{user_id}", 60, "null")  # 缓存空值 1 分钟\n        return None' }
    ]
  },

  "mgGJTBU8ofvOzl9gYWhnG": {
    mentalModel: '消息代理就像邮局——你不用直接联系收件人，把信交给邮局，邮局负责投递。Redis 可以做简单的消息队列',
    sections: [
      { title: 'Redis 作为消息队列', content: 'Redis 可以用 List 实现简单的消息队列：\n\n1. 生产者：LPUSH queue message\n2. 消费者：BRPOP queue timeout\n\n优势：\n- 简单易用\n- 高性能（10万+ QPS）\n- 支持持久化（AOF/RDB）\n\n劣势：\n- 功能简单（没有消息确认、重试、死信队列）\n- 不适合复杂场景（用 Kafka、RabbitMQ）' },
      { title: '消息队列模式', content: 'Redis 消息队列的典型模式：\n\n1. 简单队列：\n   - 生产者：LPUSH queue message\n   - 消费者：BRPOP queue timeout\n\n2. 延迟队列：\n   - 生产者：ZADD delayed_queue timestamp message\n   - 消费者：ZRANGEBYSCORE delayed_queue 0 now\n\n3. 优先级队列：\n   - 生产者：ZADD priority_queue priority message\n   - 消费者：ZRANGE priority_queue 0 0（取最高优先级）' },
      { title: '消息队列最佳实践', content: 'Redis 消息队列的最佳实践：\n\n1. 使用 BRPOP 而不是 RPOP：\n   - BRPOP 会阻塞等待，避免空转\n   - 设置合理的 timeout（如 5 秒）\n\n2. 使用 Pipeline 批量推送：\n   - 减少网络往返\n   - 提升吞吐量\n\n3. 监控队列长度：\n   - LLEN queue\n   - 避免队列堆积' }
    ],
    diagnosis: [
      { symptom: '消息队列堆积，消费者处理不过来', cause: '1) 消费者处理速度慢 2) 生产者推送速度太快 3) 消费者数量不足。', fix: '优化消费者处理逻辑；增加消费者数量；使用 Pipeline 批量推送。' },
      { symptom: '消息丢失', cause: '1) Redis 没有持久化（AOF/RDB）2) Redis 崩溃时数据丢失。', fix: '启用 AOF 持久化（appendonly yes）；或使用 Kafka、RabbitMQ 等更可靠的消息队列。' }
    ],
    exercises: [
      { level: '基础', task: '用 Redis List 实现简单的消息队列', hint: 'LPUSH, BRPOP', answer: '# 生产者\nLPUSH queue "message1"\nLPUSH queue "message2"\n\n# 消费者\nBRPOP queue 5\n# 返回：["queue", "message2"]（FIFO）' },
      { level: '进阶', task: '实现延迟队列：消息延迟 10 秒后处理', hint: 'ZADD, ZRANGEBYSCORE', answer: '# 生产者（延迟 10 秒）\ntimestamp = time.time() + 10\nZADD delayed_queue timestamp "message1"\n\n# 消费者（轮询）\nwhile True:\n    now = time.time()\n    messages = ZRANGEBYSCORE delayed_queue 0 now\n    for msg in messages:\n        process(msg)\n        ZREM delayed_queue msg\n    time.sleep(1)' }
    ]
  },

  "-3pADOHMDQ0H6ZKNjURyn": {
    mentalModel: 'Redis 就像一个超快的便签本——所有数据都存在内存里，读写速度极快，但断电会丢失（除非配置持久化）',
    sections: [
      { title: 'Redis 是什么', content: 'Redis（Remote Dictionary Server）是一个开源的内存数据结构存储：\n\n核心特性：\n- 内存存储：数据存在 RAM 里，读写速度极快（微秒级）\n- 数据结构：String、Hash、List、Set、Sorted Set、Bitmap、HyperLogLog、Geospatial、Streams\n- 持久化：RDB（快照）和 AOF（日志）\n- 复制：主从复制，支持读写分离\n- 集群：Redis Cluster，支持数据分片\n\n优势：\n- 极快的读写速度（10万+ QPS）\n- 丰富的数据结构\n- 支持持久化\n- 支持高可用（Sentinel、Cluster）\n\n劣势：\n- 容量受限于内存（通常几十GB）\n- 成本较高（内存比磁盘贵）\n- 不适合复杂查询（JOIN、聚合）' },
      { title: 'Redis vs 其他数据库', content: 'Redis 与其他数据库的对比：\n\nvs MySQL：\n- Redis：内存存储，微秒级延迟，适合缓存、会话、计数器\n- MySQL：磁盘存储，毫秒级延迟，适合复杂查询、事务\n\nvs Memcached：\n- Redis：丰富的数据结构，支持持久化\n- Memcached：只有 String，不支持持久化\n\nvs MongoDB：\n- Redis：内存存储，适合缓存、计数器\n- MongoDB：磁盘存储，适合文档存储、复杂查询\n\nvs Kafka：\n- Redis：简单的消息队列，适合简单场景\n- Kafka：复杂的消息队列，适合高吞吐、持久化' },
      { title: 'Redis 适用场景', content: 'Redis 最适合的场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' }
    ],
    diagnosis: [
      { symptom: 'Redis 响应变慢，延迟从 0.1ms 升到 10ms', cause: '可能原因：1) 执行了 O(N) 命令（如 KEYS *、SMEMBERS 大集合）2) fork 持久化时阻塞 3) 内存不足触发淘汰策略。', fix: '用 SLOWLOG GET 查看慢查询；用 INFO commandstats 分析命令分布；避免在大集合上用 O(N) 命令；检查内存使用率和淘汰策略。' },
      { symptom: 'Redis 内存使用率持续升高', cause: '1) 没有设置合理的 TTL 2) 缓存的数据不是热点数据 3) 没有清理过期数据。', fix: '设置合理的 TTL；分析热点数据，优先缓存热点数据；定期清理过期数据。' }
    ],
    exercises: [
      { level: '基础', task: '用 redis-cli 连接 Redis，设置一个 key，然后读取它', hint: 'SET key value, GET key', answer: 'redis-cli\n127.0.0.1:6379> SET mykey "hello"\nOK\n127.0.0.1:6379> GET mykey\n"hello"' },
      { level: '进阶', task: '查看 Redis 当前使用的内存和连接的客户端数量', hint: 'INFO 命令', answer: '127.0.0.1:6379> INFO memory\n# 查看 used_memory_human 字段\n127.0.0.1:6379> INFO clients\n# 查看 connected_clients 字段' }
    ]
  },

  "-TjnSOY8txYrhhxRV1OIl": {
    mentalModel: '缓存就像在书桌旁边放一本常用词典——不用每次都去图书馆（数据库）查，直接在手边找，速度快得多',
    sections: [
      { title: '缓存模式', content: 'Redis 作为缓存层的典型模式：\n\n1. Cache-Aside（旁路缓存）：\n   - 读：先查缓存，miss 则查数据库并写入缓存\n   - 写：更新数据库，删除缓存\n   \n2. Write-Through（写穿透）：\n   - 写：同时更新缓存和数据库\n   \n3. Write-Behind（异步写回）：\n   - 写：先更新缓存，异步更新数据库\n\n优势：\n- 减少数据库查询（命中率可达 90%+）\n- 降低数据库负载\n- 提升响应速度（微秒级 vs 毫秒级）' },
      { title: '缓存失效策略', content: '缓存失效的三种情况：\n\n1. 缓存穿透：查询不存在的数据，每次都打到数据库\n   - 解决：缓存空值（TTL 短）或使用布隆过滤器\n\n2. 缓存击穿：热点数据过期，大量请求同时打到数据库\n   - 解决：互斥锁（SETNX）或永不过期（后台更新）\n\n3. 缓存雪崩：大量缓存同时过期，数据库被打垮\n   - 解决：TTL 加随机值（如 300 + random(0,60)）' },
      { title: '缓存最佳实践', content: '缓存设计的最佳实践：\n\n1. 合理设置 TTL：\n   - 热点数据：永不过期（后台更新）\n   - 普通数据：TTL = 300-3600 秒\n   - 冷数据：TTL = 60-300 秒\n\n2. 缓存预热：\n   - 启动时加载热点数据到缓存\n   - 避免冷启动时数据库被打垮\n\n3. 缓存监控：\n   - 监控命中率（keyspace_hits / (keyspace_hits + keyspace_misses)）\n   - 目标：命中率 > 90%' }
    ],
    diagnosis: [
      { symptom: '缓存命中率低（<80%）', cause: '1) TTL 设置不合理 2) 缓存的数据不是热点数据 3) 缓存穿透严重。', fix: '调整 TTL；分析热点数据，优先缓存热点数据；使用布隆过滤器防止穿透。' },
      { symptom: '数据库负载突然升高', cause: '1) 缓存雪崩（大量缓存同时过期）2) 缓存击穿（热点数据过期）3) 缓存穿透（查询不存在的数据）。', fix: 'TTL 加随机值；热点数据永不过期；使用布隆过滤器。' }
    ],
    exercises: [
      { level: '基础', task: '实现 Cache-Aside 模式：查询用户信息，先查缓存，miss 则查数据库', hint: 'GET, SET', answer: '# 伪代码\ndef get_user(user_id):\n    # 先查缓存\n    cached = redis.get(f"user:{user_id}")\n    if cached:\n        return json.loads(cached)\n    \n    # 查数据库\n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n        return user\n    return None' },
      { level: '进阶', task: '防止缓存穿透：查询不存在的用户时，缓存空值', hint: 'SET key "null" EX 60', answer: '# 伪代码\ndef get_user(user_id):\n    cached = redis.get(f"user:{user_id}")\n    if cached == "null":\n        return None  # 缓存的空值\n    if cached:\n        return json.loads(cached)\n    \n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n        return user\n    else:\n        redis.setex(f"user:{user_id}", 60, "null")  # 缓存空值 1 分钟\n        return None' }
    ]
  },

  "bVJASI7bfSYqYnNhX83ng": {
    mentalModel: '实时分析就像体育比赛的即时统计——不用等比赛结束，随时都能看到当前的比分和数据',
    sections: [
      { title: 'Redis 实时分析', content: 'Redis 适合实时分析的场景：\n\n1. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n   - 使用 INCR、DECR\n\n2. 实时排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set（ZADD、ZINCRBY）\n\n3. 实时统计：\n   - UV/PV 统计\n   - 使用 HyperLogLog（PFADD、PFCOUNT）\n\n优势：\n- 极快的读写速度（10万+ QPS）\n- 原子操作（INCR、DECR）\n- 丰富的数据结构' },
      { title: '实时分析模式', content: 'Redis 实时分析的典型模式：\n\n1. 计数器模式：\n   - INCR page:views:article:123\n   - INCR user:online:count\n   - 优势：原子操作，高性能\n\n2. 排行榜模式：\n   - ZADD leaderboard 100 player:123\n   - ZINCRBY leaderboard 10 player:123\n   - 优势：自动排序，高性能\n\n3. 统计模式：\n   - PFADD uv:2024-01-15 user:123\n   - PFCOUNT uv:2024-01-15\n   - 优势：内存节省（12KB 可以统计 10亿 UV）' },
      { title: '实时分析最佳实践', content: 'Redis 实时分析的最佳实践：\n\n1. 使用原子操作：\n   - INCR、DECR、ZINCRBY\n   - 避免并发问题\n\n2. 合理设置 TTL：\n   - 计数器：TTL = 86400（1 天）\n   - 排行榜：TTL = 86400（1 天）\n   - 统计：TTL = 86400（1 天）\n\n3. 监控：\n   - 监控计数器增长\n   - 监控排行榜变化\n   - 监控统计数据' }
    ],
    diagnosis: [
      { symptom: '计数器不准确', cause: '1) 并发问题（没有使用原子操作）2) 计数器溢出（超过最大值）。', fix: '使用原子操作（INCR、DECR）；检查计数器是否溢出；使用合理的初始值。' },
      { symptom: '排行榜排序不正确', cause: '1) 分数计算错误 2) 没有使用原子操作（ZINCRBY）。', fix: '检查分数计算逻辑；使用原子操作（ZINCRBY）；检查分数是否溢出。' }
    ],
    exercises: [
      { level: '基础', task: '实现一个简单的计数器：统计页面浏览量', hint: 'INCR', answer: '# 每次访问页面时\nINCR page:views:article:123\n# 返回：当前浏览量\n\n# 查看浏览量\nGET page:views:article:123\n# 返回：当前浏览量' },
      { level: '进阶', task: '实现一个简单的排行榜：游戏积分排名', hint: 'ZADD, ZINCRBY', answer: '# 玩家获得积分\nZINCRBY leaderboard 100 player:123\n\n# 查看排行榜（前 10 名）\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：积分从高到低的玩家列表' }
    ]
  },

  "EvWiEx_AoxAht6sKxzW2l": {
    mentalModel: 'Redis vs SQL/NoSQL 就像选择不同的工具——Redis 适合缓存和实时数据，SQL 适合复杂查询和事务，NoSQL 适合灵活的数据模型',
    sections: [
      { title: 'Redis vs SQL', content: 'Redis 与 SQL 数据库（MySQL、PostgreSQL）的对比：\n\nRedis 优势：\n- 极快的读写速度（10万+ QPS，微秒级延迟）\n- 丰富的数据结构（String、Hash、List、Set、Sorted Set）\n- 适合缓存、会话、计数器、排行榜\n\nSQL 优势：\n- 复杂查询（JOIN、聚合、子查询）\n- 事务支持（ACID）\n- 数据完整性（外键、约束）\n\n适用场景：\n- Redis：缓存、会话、计数器、排行榜、消息队列\n- SQL：复杂查询、事务、数据完整性' },
      { title: 'Redis vs NoSQL', content: 'Redis 与 NoSQL 数据库（MongoDB、Cassandra）的对比：\n\nRedis 优势：\n- 极快的读写速度（内存存储）\n- 丰富的数据结构\n- 适合缓存、计数器、排行榜\n\nMongoDB 优势：\n- 灵活的文档模型（JSON）\n- 适合复杂查询、聚合\n- 水平扩展（Sharding）\n\nCassandra 优势：\n- 高可用（多数据中心）\n- 高吞吐（写入优化）\n- 适合大规模数据\n\n适用场景：\n- Redis：缓存、计数器、排行榜\n- MongoDB：文档存储、复杂查询\n- Cassandra：大规模数据、高可用' },
      { title: '选择建议', content: '如何选择合适的数据库：\n\n1. 缓存、会话、计数器：Redis\n   - 极快的读写速度\n   - 丰富的数据结构\n\n2. 复杂查询、事务：SQL（MySQL、PostgreSQL）\n   - JOIN、聚合、子查询\n   - ACID 事务\n\n3. 文档存储、灵活模型：MongoDB\n   - JSON 文档\n   - 灵活的查询\n\n4. 大规模数据、高可用：Cassandra\n   - 多数据中心\n   - 高吞吐\n\n5. 消息队列：Kafka、RabbitMQ\n   - 高吞吐\n   - 持久化\n\n组合使用：\n- Redis（缓存）+ MySQL（主数据库）\n- Redis（缓存）+ MongoDB（文档存储）\n- Redis（缓存）+ Cassandra（大规模数据）' }
    ],
    diagnosis: [
      { symptom: '不知道选择哪种数据库', cause: '不了解不同数据库的适用场景。', fix: '根据场景选择：缓存用 Redis，复杂查询用 SQL，文档存储用 MongoDB，大规模数据用 Cassandra。' },
      { symptom: '数据库性能不佳', cause: '1) 选择了不合适的数据库 2) 没有优化查询 3) 没有合理配置。', fix: '根据场景选择合适的数据库；优化查询；合理配置数据库参数。' }
    ],
    exercises: [
      { level: '基础', task: '选择合适的数据库：缓存用户信息', hint: 'Redis', answer: '选择 Redis：\n- 极快的读写速度（10万+ QPS）\n- 适合缓存场景\n- 可以设置 TTL 自动过期' },
      { level: '进阶', task: '选择合适的数据库：电商订单系统', hint: 'MySQL + Redis', answer: '选择 MySQL + Redis：\n- MySQL：存储订单数据，支持复杂查询和事务\n- Redis：缓存热点订单数据，提升查询速度\n\n组合使用：\n- 读：先查 Redis 缓存，miss 则查 MySQL\n- 写：更新 MySQL，删除 Redis 缓存' }
    ]
  },

  "URxGmhZHr0Y8nyrYj0gJl": {
    mentalModel: '会话管理就像酒店的房卡——用户登录后拿到一张"房卡"（session），之后每次出示房卡就能证明身份，不用重复输入密码',
    sections: [
      { title: '会话管理', content: 'Redis 作为会话存储的优势：\n\n1. 分布式会话：\n   - 多个服务器共享会话\n   - 用户可以在任意服务器登录\n\n2. 高性能：\n   - 极快的读写速度（微秒级）\n   - 适合高并发场景\n\n3. 自动过期：\n   - 设置 TTL，会话自动过期\n   - 避免手动清理\n\n4. 持久化：\n   - 支持 RDB/AOF 持久化\n   - 避免会话丢失' },
      { title: '会话管理模式', content: 'Redis 会话管理的典型模式：\n\n1. 登录时创建会话：\n   - 生成 session_id\n   - 存储用户信息到 Redis\n   - 设置 TTL（如 30 分钟）\n\n2. 验证会话：\n   - 从请求中获取 session_id\n   - 从 Redis 查询会话\n   - 验证会话是否有效\n\n3. 续期会话：\n   - 每次请求时刷新 TTL\n   - 避免会话过期\n\n4. 登出时删除会话：\n   - 从 Redis 删除会话\n   - 清除客户端 cookie' },
      { title: '会话管理最佳实践', content: 'Redis 会话管理的最佳实践：\n\n1. 合理设置 TTL：\n   - 普通会话：TTL = 30 分钟\n   - 记住我：TTL = 7 天\n   - 避免会话过期太频繁\n\n2. 续期会话：\n   - 每次请求时刷新 TTL\n   - 避免会话过期\n\n3. 安全：\n   - 使用 HTTPS 传输 session_id\n   - 使用 HttpOnly cookie\n   - 避免 session_id 泄露\n\n4. 监控：\n   - 监控会话数量\n   - 监控会话过期情况\n   - 避免会话堆积' }
    ],
    diagnosis: [
      { symptom: '用户频繁被登出', cause: '1) TTL 设置太短 2) 没有续期会话 3) 会话被其他服务器删除。', fix: '调整 TTL（如 30 分钟）；每次请求时刷新 TTL；使用分布式会话（Redis）。' },
      { symptom: '会话泄露', cause: '1) session_id 泄露 2) 没有使用 HTTPS 3) 没有使用 HttpOnly cookie。', fix: '使用 HTTPS 传输 session_id；使用 HttpOnly cookie；避免 session_id 泄露。' }
    ],
    exercises: [
      { level: '基础', task: '实现简单的会话管理：用户登录后创建会话', hint: 'SET, EXPIRE', answer: '# 登录时创建会话\nsession_id = generate_session_id()\nredis.setex(f"session:{session_id}", 1800, json.dumps({"user_id": 123}))\n\n# 验证会话\nsession = redis.get(f"session:{session_id}")\nif session:\n    user = json.loads(session)\n    return user\nreturn None' },
      { level: '进阶', task: '实现会话续期：每次请求时刷新 TTL', hint: 'EXPIRE', answer: '# 每次请求时续期会话\ndef refresh_session(session_id):\n    if redis.exists(f"session:{session_id}"):\n        redis.expire(f"session:{session_id}", 1800)  # 续期 30 分钟\n        return True\n    return False' }
    ]
  },

  "1Af5H0BgdAsRdBCNdHz5v": {
    mentalModel: '选择 Redis 就像选择工具——适合缓存、实时数据、计数器的场景用 Redis，复杂查询用 SQL，文档存储用 MongoDB',
    sections: [
      { title: '何时选择 Redis', content: 'Redis 最适合的场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '何时不选择 Redis', content: 'Redis 不适合的场景：\n\n1. 复杂查询：\n   - JOIN、聚合、子查询\n   - 用 SQL（MySQL、PostgreSQL）\n\n2. 事务：\n   - ACID 事务\n   - 用 SQL（MySQL、PostgreSQL）\n\n3. 大规模数据：\n   - TB 级数据\n   - 用 Cassandra、HBase\n\n4. 文档存储：\n   - 灵活的文档模型（JSON）\n   - 用 MongoDB\n\n5. 复杂消息队列：\n   - 高吞吐、持久化、死信队列\n   - 用 Kafka、RabbitMQ' },
      { title: '选择建议', content: '如何选择合适的数据库：\n\n1. 缓存、会话、计数器：Redis\n   - 极快的读写速度\n   - 丰富的数据结构\n\n2. 复杂查询、事务：SQL（MySQL、PostgreSQL）\n   - JOIN、聚合、子查询\n   - ACID 事务\n\n3. 文档存储、灵活模型：MongoDB\n   - JSON 文档\n   - 灵活的查询\n\n4. 大规模数据、高可用：Cassandra\n   - 多数据中心\n   - 高吞吐\n\n5. 消息队列：Kafka、RabbitMQ\n   - 高吞吐\n   - 持久化\n\n组合使用：\n- Redis（缓存）+ MySQL（主数据库）\n- Redis（缓存）+ MongoDB（文档存储）\n- Redis（缓存）+ Cassandra（大规模数据）' }
    ],
    diagnosis: [
      { symptom: '不知道选择哪种数据库', cause: '不了解不同数据库的适用场景。', fix: '根据场景选择：缓存用 Redis，复杂查询用 SQL，文档存储用 MongoDB，大规模数据用 Cassandra。' },
      { symptom: '数据库性能不佳', cause: '1) 选择了不合适的数据库 2) 没有优化查询 3) 没有合理配置。', fix: '根据场景选择合适的数据库；优化查询；合理配置数据库参数。' }
    ],
    exercises: [
      { level: '基础', task: '选择合适的数据库：缓存用户信息', hint: 'Redis', answer: '选择 Redis：\n- 极快的读写速度（10万+ QPS）\n- 适合缓存场景\n- 可以设置 TTL 自动过期' },
      { level: '进阶', task: '选择合适的数据库：电商订单系统', hint: 'MySQL + Redis', answer: '选择 MySQL + Redis：\n- MySQL：存储订单数据，支持复杂查询和事务\n- Redis：缓存热点订单数据，提升查询速度\n\n组合使用：\n- 读：先查 Redis 缓存，miss 则查 MySQL\n- 写：更新 MySQL，删除 Redis 缓存' }
    ]
  },

  "ZCyId3aIoLv3duxoJdk2P": {
    mentalModel: 'Pub/Sub 就像广播电台——发布者发送消息，所有订阅者都能收到，但错过就收不到了',
    sections: [
      { title: 'Pub/Sub 模式', content: 'Redis Pub/Sub 的典型模式：\n\n1. 发布者：PUBLISH channel message\n2. 订阅者：SUBSCRIBE channel\n\n优势：\n- 实时通知\n- 简单易用\n- 高性能\n\n劣势：\n- 消息不持久化（错过就收不到）\n- 不适合可靠消息传递（用 Kafka、RabbitMQ）' },
      { title: 'Pub/Sub 模式', content: 'Redis Pub/Sub 的典型模式：\n\n1. 简单发布/订阅：\n   - 发布者：PUBLISH channel message\n   - 订阅者：SUBSCRIBE channel\n\n2. 模式订阅：\n   - 订阅者：PSUBSCRIBE pattern\n   - 可以订阅多个频道（如 news.*）\n\n3. 应用场景：\n   - 实时通知（如聊天室）\n   - 事件通知（如订单状态变化）\n   - 实时数据推送（如股票行情）' },
      { title: 'Pub/Sub 最佳实践', content: 'Redis Pub/Sub 的最佳实践：\n\n1. 使用合理的频道命名：\n   - 用冒号分隔层级（如 news:sports）\n   - 避免太长的频道名\n\n2. 消息不持久化：\n   - 订阅者离线时消息会丢失\n   - 不适合可靠消息传递（用 Kafka、RabbitMQ）\n\n3. 监控：\n   - 监控订阅者数量\n   - 监控消息发送情况\n   - 避免频道堆积' }
    ],
    diagnosis: [
      { symptom: '消息丢失', cause: '1) 订阅者离线时消息丢失 2) Redis 没有持久化。', fix: '使用可靠消息队列（Kafka、RabbitMQ）；或确保订阅者在线。' },
      { symptom: '订阅者收不到消息', cause: '1) 订阅者没有订阅正确的频道 2) 频道名拼写错误。', fix: '检查订阅者是否订阅了正确的频道；检查频道名拼写。' }
    ],
    exercises: [
      { level: '基础', task: '实现简单的发布/订阅：发布者发送消息，订阅者接收', hint: 'PUBLISH, SUBSCRIBE', answer: '# 订阅者\nSUBSCRIBE news:sports\n# 等待消息\n\n# 发布者\nPUBLISH news:sports "Breaking news!"\n# 订阅者收到：Breaking news!' },
      { level: '进阶', task: '实现模式订阅：订阅所有 news.* 的频道', hint: 'PSUBSCRIBE', answer: '# 订阅者\nPSUBSCRIBE news.*\n# 订阅所有 news.* 的频道\n\n# 发布者\nPUBLISH news:sports "Sports news"\nPUBLISH news:tech "Tech news"\n# 订阅者收到所有 news.* 的消息' }
    ]
  },

  "Fv1iGX22sApIEifM2IpJz": {
    mentalModel: '排行榜和计数器就像体育比赛的计分板——实时更新分数，随时都能看到当前的排名和数据',
    sections: [
      { title: '排行榜', content: 'Redis 实现排行榜的典型模式：\n\n1. 使用 Sorted Set：\n   - ZADD leaderboard score member\n   - ZINCRBY leaderboard increment member\n   - ZREVRANGE leaderboard 0 9 WITHSCORES（前 10 名）\n\n优势：\n- 自动排序\n- 高性能（O(log N)）\n- 支持实时更新' },
      { title: '计数器', content: 'Redis 实现计数器的典型模式：\n\n1. 使用 INCR/DECR：\n   - INCR page:views:article:123\n   - DECR page:views:article:123\n\n优势：\n- 原子操作\n- 高性能（10万+ QPS）\n- 简单易用' },
      { title: '排行榜和计数器最佳实践', content: 'Redis 排行榜和计数器的最佳实践：\n\n1. 合理设置 TTL：\n   - 排行榜：TTL = 86400（1 天）\n   - 计数器：TTL = 86400（1 天）\n\n2. 使用原子操作：\n   - INCR、DECR、ZINCRBY\n   - 避免并发问题\n\n3. 监控：\n   - 监控计数器增长\n   - 监控排行榜变化\n   - 避免数据堆积' }
    ],
    diagnosis: [
      { symptom: '排行榜排序不正确', cause: '1) 分数计算错误 2) 没有使用原子操作（ZINCRBY）。', fix: '检查分数计算逻辑；使用原子操作（ZINCRBY）；检查分数是否溢出。' },
      { symptom: '计数器不准确', cause: '1) 并发问题（没有使用原子操作）2) 计数器溢出（超过最大值）。', fix: '使用原子操作（INCR、DECR）；检查计数器是否溢出；使用合理的初始值。' }
    ],
    exercises: [
      { level: '基础', task: '实现一个简单的排行榜：游戏积分排名', hint: 'ZADD, ZINCRBY', answer: '# 玩家获得积分\nZINCRBY leaderboard 100 player:123\n\n# 查看排行榜（前 10 名）\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：积分从高到低的玩家列表' },
      { level: '进阶', task: '实现一个简单的计数器：统计页面浏览量', hint: 'INCR', answer: '# 每次访问页面时\nINCR page:views:article:123\n# 返回：当前浏览量\n\n# 查看浏览量\nGET page:views:article:123\n# 返回：当前浏览量' }
    ]
  },

  "43LvShQhmoWQ8Nye7fLkz": {
    mentalModel: '启动 Redis 服务器就像开一家 24 小时便利店——随时准备接待客户（客户端请求），快速响应',
    sections: [
      { title: '启动 Redis', content: '启动 Redis 服务器的典型方式：\n\n1. 使用默认配置：\n   - redis-server\n   - 监听 127.0.0.1:6379\n\n2. 使用自定义配置：\n   - redis-server /path/to/redis.conf\n   - 可以自定义端口、密码、持久化等\n\n3. 使用 Docker：\n   - docker run -p 6379:6379 redis\n   - 快速启动，易于管理' },
      { title: '启动配置', content: 'Redis 启动配置的典型选项：\n\n1. 端口：\n   - port 6379（默认）\n   - 可以自定义端口\n\n2. 密码：\n   - requirepass mypassword\n   - 客户端需要 AUTH 认证\n\n3. 持久化：\n   - save 900 1（900 秒内至少 1 次写操作）\n   - appendonly yes（启用 AOF）\n\n4. 内存限制：\n   - maxmemory 256mb\n   - maxmemory-policy allkeys-lru' },
      { title: '启动最佳实践', content: 'Redis 启动的最佳实践：\n\n1. 使用自定义配置：\n   - 不要使用默认配置\n   - 根据场景配置端口、密码、持久化等\n\n2. 启用持久化：\n   - 启用 AOF（appendonly yes）\n   - 或启用 RDB（save 900 1）\n\n3. 设置内存限制：\n   - maxmemory 256mb\n   - maxmemory-policy allkeys-lru\n\n4. 监控：\n   - 监控 Redis 启动情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Redis 启动失败', cause: '1) 端口被占用 2) 配置文件错误 3) 权限问题。', fix: '检查端口是否被占用（netstat -tlnp | grep 6379）；检查配置文件语法；检查文件权限。' },
      { symptom: 'Redis 启动后无法连接', cause: '1) 密码错误 2) 端口错误 3) 防火墙阻止。', fix: '检查密码是否正确；检查端口是否正确；检查防火墙配置。' }
    ],
    exercises: [
      { level: '基础', task: '启动 Redis 服务器：使用默认配置', hint: 'redis-server', answer: '# 启动 Redis\nredis-server\n# 监听 127.0.0.1:6379\n\n# 验证启动\nredis-cli ping\n# 返回：PONG' },
      { level: '进阶', task: '启动 Redis 服务器：使用自定义配置', hint: 'redis-server /path/to/redis.conf', answer: '# 创建配置文件\ncat > redis.conf << EOF\nport 6380\nrequirepass mypassword\nappendonly yes\nmaxmemory 256mb\nEOF\n\n# 启动 Redis\nredis-server redis.conf\n\n# 验证启动\nredis-cli -p 6380 -a mypassword ping\n# 返回：PONG' }
    ]
  },

  "Bf_kLfmy7_uflqC9N0-jt": {
    mentalModel: '使用包管理器安装 Redis 就像用 App Store 安装应用——一键安装，自动处理依赖，简单快捷',
    sections: [
      { title: '使用包管理器', content: '使用包管理器安装 Redis 的典型方式：\n\n1. macOS（Homebrew）：\n   - brew install redis\n   - brew services start redis\n\n2. Ubuntu/Debian（apt）：\n   - sudo apt update\n   - sudo apt install redis-server\n   - sudo systemctl start redis\n\n3. CentOS/RHEL（yum）：\n   - sudo yum install epel-release\n   - sudo yum install redis\n   - sudo systemctl start redis\n\n优势：\n- 一键安装，简单快捷\n- 自动处理依赖\n- 易于管理和更新' },
      { title: '包管理器对比', content: '不同包管理器的对比：\n\n1. Homebrew（macOS）：\n   - brew install redis\n   - 优势：简单易用，更新快\n\n2. apt（Ubuntu/Debian）：\n   - sudo apt install redis-server\n   - 优势：稳定，易于管理\n\n3. yum（CentOS/RHEL）：\n   - sudo yum install redis\n   - 优势：稳定，易于管理\n\n4. Docker：\n   - docker run -p 6379:6379 redis\n   - 优势：快速启动，易于管理，环境隔离' },
      { title: '安装最佳实践', content: '使用包管理器安装 Redis 的最佳实践：\n\n1. 使用官方源：\n   - 使用官方提供的包管理器源\n   - 避免使用第三方源\n\n2. 启用服务：\n   - sudo systemctl enable redis\n   - 开机自动启动\n\n3. 配置：\n   - 修改 /etc/redis/redis.conf\n   - 配置端口、密码、持久化等\n\n4. 监控：\n   - 监控 Redis 启动情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '安装失败', cause: '1) 包管理器源问题 2) 网络问题 3) 依赖问题。', fix: '检查包管理器源配置；检查网络连接；安装依赖包。' },
      { symptom: '安装后无法启动', cause: '1) 配置文件错误 2) 端口被占用 3) 权限问题。', fix: '检查配置文件语法；检查端口是否被占用；检查文件权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用包管理器安装 Redis：macOS', hint: 'brew install redis', answer: '# 安装 Redis\nbrew install redis\n\n# 启动 Redis\nbrew services start redis\n\n# 验证安装\nredis-cli ping\n# 返回：PONG' },
      { level: '进阶', task: '使用包管理器安装 Redis：Ubuntu', hint: 'sudo apt install redis-server', answer: '# 更新包管理器\nsudo apt update\n\n# 安装 Redis\nsudo apt install redis-server\n\n# 启动 Redis\nsudo systemctl start redis\n\n# 验证安装\nredis-cli ping\n# 返回：PONG' }
    ]
  },

  "8uRpPJ0iD4XnQPKruQc8P": {
    mentalModel: '数据持久化就像给内存数据拍照——定期保存到磁盘，断电也不会丢失',
    sections: [
      { title: '持久化选项', content: 'Redis 的持久化选项：\n\n1. RDB（快照）：\n   - 定期保存快照到磁盘\n   - 配置：save 900 1（900 秒内至少 1 次写操作）\n   - 优势：文件紧凑，恢复速度快\n   - 劣势：可能丢失最后一次快照后的数据\n\n2. AOF（日志）：\n   - 记录每次写操作到日志\n   - 配置：appendonly yes\n   - 优势：数据丢失少（最多 1 秒）\n   - 劣势：文件较大，恢复速度慢\n\n3. 混合持久化：\n   - RDB + AOF\n   - 优势：兼顾恢复速度和数据安全' },
      { title: '持久化配置', content: 'Redis 持久化配置的典型选项：\n\n1. RDB 配置：\n   - save 900 1（900 秒内至少 1 次写操作）\n   - save 300 10（300 秒内至少 10 次写操作）\n   - save 60 10000（60 秒内至少 10000 次写操作）\n   - dbfilename dump.rdb\n   - dir /var/lib/redis\n\n2. AOF 配置：\n   - appendonly yes\n   - appendfsync everysec（每秒同步）\n   - appendfilename appendonly.aof\n\n3. 混合持久化：\n   - aof-use-rdb-preamble yes\n   - 优势：兼顾恢复速度和数据安全' },
      { title: '持久化最佳实践', content: 'Redis 持久化的最佳实践：\n\n1. 启用持久化：\n   - 启用 AOF（appendonly yes）\n   - 或启用 RDB（save 900 1）\n   - 避免数据丢失\n\n2. 合理配置：\n   - AOF：appendfsync everysec（每秒同步）\n   - RDB：save 900 1（900 秒内至少 1 次写操作）\n   - 根据场景选择合适的配置\n\n3. 监控：\n   - 监控持久化情况\n   - 监控磁盘空间\n   - 避免磁盘空间不足' }
    ],
    diagnosis: [
      { symptom: '数据丢失', cause: '1) 没有启用持久化 2) Redis 崩溃时数据丢失 3) 磁盘空间不足。', fix: '启用持久化（AOF 或 RDB）；检查磁盘空间；定期备份数据。' },
      { symptom: '持久化文件太大', cause: '1) AOF 文件太大 2) 没有启用 AOF 重写。', fix: '启用 AOF 重写（appendfsync everysec）；定期清理 AOF 文件。' }
    ],
    exercises: [
      { level: '基础', task: '启用 RDB 持久化', hint: 'save 900 1', answer: '# 修改 redis.conf\nsave 900 1\ndbfilename dump.rdb\ndir /var/lib/redis\n\n# 重启 Redis\nsudo systemctl restart redis\n\n# 验证持久化\nredis-cli BGSAVE\n# 返回：Background saving started' },
      { level: '进阶', task: '启用 AOF 持久化', hint: 'appendonly yes', answer: '# 修改 redis.conf\nappendonly yes\nappendfsync everysec\nappendfilename appendonly.aof\n\n# 重启 Redis\nsudo systemctl restart redis\n\n# 验证持久化\nredis-cli BGREWRITEAOF\n# 返回：Background append only file rewriting started' }
    ]
  },

  "BOGXTjmCLo6WI6mYDsqRu": {
    mentalModel: 'Redis CLI 就像 Redis 的遥控器——通过命令行控制 Redis，执行命令、查看状态、管理数据',
    sections: [
      { title: 'Redis CLI', content: 'Redis CLI 的典型用法：\n\n1. 连接 Redis：\n   - redis-cli\n   - redis-cli -h host -p port\n   - redis-cli -a password\n\n2. 执行命令：\n   - SET key value\n   - GET key\n   - DEL key\n\n3. 查看状态：\n   - INFO\n   - INFO memory\n   - INFO clients\n\n优势：\n- 简单易用\n- 功能强大\n- 适合调试和管理' },
      { title: 'Redis CLI 命令', content: 'Redis CLI 的典型命令：\n\n1. 连接命令：\n   - redis-cli（连接本地 Redis）\n   - redis-cli -h host -p port（连接远程 Redis）\n   - redis-cli -a password（使用密码连接）\n\n2. 数据操作命令：\n   - SET key value\n   - GET key\n   - DEL key\n   - KEYS *\n\n3. 状态查看命令：\n   - INFO（查看 Redis 状态）\n   - INFO memory（查看内存使用）\n   - INFO clients（查看客户端连接）\n\n4. 管理命令：\n   - BGSAVE（后台保存）\n   - BGREWRITEAOF（重写 AOF）\n   - FLUSHALL（清空所有数据）' },
      { title: 'Redis CLI 最佳实践', content: 'Redis CLI 的最佳实践：\n\n1. 使用密码连接：\n   - redis-cli -a password\n   - 避免密码泄露\n\n2. 使用 Pipeline：\n   - redis-cli --pipe\n   - 批量执行命令，提升性能\n\n3. 监控：\n   - INFO memory\n   - INFO clients\n   - 监控 Redis 状态' }
    ],
    diagnosis: [
      { symptom: '无法连接 Redis', cause: '1) Redis 没有启动 2) 端口错误 3) 密码错误。', fix: '检查 Redis 是否启动；检查端口是否正确；检查密码是否正确。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) Redis 配置问题。', fix: '检查命令语法；检查权限；检查 Redis 配置。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis CLI 连接 Redis', hint: 'redis-cli', answer: '# 连接本地 Redis\nredis-cli\n\n# 验证连接\n127.0.0.1:6379> PING\n# 返回：PONG' },
      { level: '进阶', task: '使用 Redis CLI 连接远程 Redis', hint: 'redis-cli -h host -p port', answer: '# 连接远程 Redis\nredis-cli -h 192.168.1.100 -p 6379 -a mypassword\n\n# 验证连接\n192.168.1.100:6379> PING\n# 返回：PONG' }
    ]
  },

  "yBZ79s6mzGdj5AnX2H_Hy": {
    mentalModel: '预编译二进制文件就像即食食品——下载后直接使用，无需编译，简单快捷',
    sections: [
      { title: '预编译二进制', content: '使用预编译二进制文件的典型方式：\n\n1. 下载预编译二进制：\n   - 从官网下载预编译二进制文件\n   - https://redis.io/download\n\n2. 解压并安装：\n   - tar -xzf redis-7.0.0.tar.gz\n   - cd redis-7.0.0\n   - make install\n\n3. 启动 Redis：\n   - redis-server\n   - 监听 127.0.0.1:6379\n\n优势：\n- 无需编译，简单快捷\n- 适合快速部署' },
      { title: '预编译二进制 vs 源码编译', content: '预编译二进制 vs 源码编译的对比：\n\n1. 预编译二进制：\n   - 下载后直接使用\n   - 优势：简单快捷，无需编译\n   - 劣势：无法自定义编译选项\n\n2. 源码编译：\n   - 下载源码后编译\n   - 优势：可以自定义编译选项\n   - 劣势：需要编译，耗时较长\n\n选择建议：\n- 快速部署：使用预编译二进制\n- 需要自定义：使用源码编译' },
      { title: '预编译二进制最佳实践', content: '使用预编译二进制的最佳实践：\n\n1. 从官网下载：\n   - 从官网下载预编译二进制文件\n   - 避免使用第三方源\n\n2. 验证文件：\n   - 验证文件完整性（SHA256）\n   - 避免使用损坏的文件\n\n3. 配置：\n   - 修改 redis.conf\n   - 配置端口、密码、持久化等\n\n4. 监控：\n   - 监控 Redis 启动情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '下载失败', cause: '1) 网络问题 2) 官网无法访问 3) 文件损坏。', fix: '检查网络连接；使用镜像源；验证文件完整性。' },
      { symptom: '安装失败', cause: '1) 文件损坏 2) 权限问题 3) 依赖问题。', fix: '验证文件完整性；检查文件权限；安装依赖包。' }
    ],
    exercises: [
      { level: '基础', task: '下载并安装 Redis 预编译二进制', hint: 'wget, tar, make install', answer: '# 下载 Redis\nwget https://download.redis.io/redis-stable.tar.gz\n\n# 解压\ntar -xzf redis-stable.tar.gz\ncd redis-stable\n\n# 安装\nmake install\n\n# 验证安装\nredis-cli ping\n# 返回：PONG' },
      { level: '进阶', task: '验证预编译二进制文件完整性', hint: 'SHA256', answer: '# 下载 Redis\nwget https://download.redis.io/redis-stable.tar.gz\n\n# 下载 SHA256 校验文件\nwget https://download.redis.io/redis-stable.tar.gz.sha256\n\n# 验证文件完整性\nsha256sum -c redis-stable.tar.gz.sha256\n# 返回：redis-stable.tar.gz: OK' }
    ]
  },

  "uVewcyaFi1Pt2Gs0KrkfA": {
    mentalModel: 'Redis 丰富的数据结构就像一个多功能工具箱——不同的工具适合不同的场景，选择合适的工具才能事半功倍',
    sections: [
      { title: 'Redis 数据结构', content: 'Redis 的 9 种数据结构：\n\n1. String（字符串）：\n   - 最简单的数据结构\n   - 适合缓存、计数器\n\n2. Hash（哈希）：\n   - 键值对集合\n   - 适合对象存储（用户信息、商品详情）\n\n3. List（列表）：\n   - 有序列表\n   - 适合消息队列、最近浏览记录\n\n4. Set（集合）：\n   - 无序、唯一的集合\n   - 适合标签、好友关系\n\n5. Sorted Set（有序集合）：\n   - 有序、唯一的集合\n   - 适合排行榜、延迟队列\n\n6. Bitmap（位图）：\n   - 位操作\n   - 适合签到、在线状态\n\n7. HyperLogLog：\n   - 基数统计\n   - 适合 UV 统计\n\n8. Geospatial（地理位置）：\n   - 地理位置索引\n   - 适合附近的人、距离计算\n\n9. Streams（流）：\n   - 消息流\n   - 适合消息队列、事件溯源' },
      { title: '数据结构选择', content: '如何选择合适的数据结构：\n\n1. 缓存、计数器：String\n   - SET key value\n   - INCR key\n\n2. 对象存储：Hash\n   - HSET key field value\n   - HGET key field\n\n3. 消息队列：List\n   - LPUSH queue message\n   - BRPOP queue timeout\n\n4. 标签、好友关系：Set\n   - SADD key member\n   - SMEMBERS key\n\n5. 排行榜：Sorted Set\n   - ZADD key score member\n   - ZREVRANGE key 0 9 WITHSCORES\n\n6. 签到、在线状态：Bitmap\n   - SETBIT key offset value\n   - GETBIT key offset\n\n7. UV 统计：HyperLogLog\n   - PFADD key member\n   - PFCOUNT key\n\n8. 附近的人：Geospatial\n   - GEOADD key longitude latitude member\n   - GEORADIUS key longitude latitude radius\n\n9. 消息队列、事件溯源：Streams\n   - XADD key * field value\n   - XREAD COUNT 10 STREAMS key 0' },
      { title: '数据结构最佳实践', content: 'Redis 数据结构的最佳实践：\n\n1. 合理选择数据结构：\n   - 根据场景选择合适的数据结构\n   - 避免使用不合适的数据结构\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控数据结构使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '选择了不合适的数据结构', cause: '不了解不同数据结构的适用场景。', fix: '根据场景选择合适的数据结构；参考官方文档。' },
      { symptom: '数据结构使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控数据结构使用情况。', fix: '合理设置 TTL；监控数据结构使用情况；避免数据堆积。' }
    ],
    exercises: [
      { level: '基础', task: '选择合适的数据结构：缓存用户信息', hint: 'Hash', answer: '选择 Hash：\n- HSET user:123 name "Alice" age 30\n- HGET user:123 name\n- 适合对象存储' },
      { level: '进阶', task: '选择合适的数据结构：实现排行榜', hint: 'Sorted Set', answer: '选择 Sorted Set：\n- ZADD leaderboard 100 player:123\n- ZREVRANGE leaderboard 0 9 WITHSCORES\n- 适合排行榜' }
    ]
  },

  "NhcZM4nUQoSBBf_1qXi6l": {
    mentalModel: 'SET 和 GET 就像存取物品——SET 把东西放进去，GET 把东西取出来，简单直观',
    sections: [
      { title: 'SET 命令', content: 'SET 命令的典型用法：\n\n1. 设置键值对：\n   - SET key value\n   - SET key value EX 3600（设置 TTL）\n   - SET key value NX（只在键不存在时设置）\n\n2. 返回值：\n   - OK（成功）\n   - nil（失败，如 NX 时键已存在）\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持 TTL' },
      { title: 'GET 命令', content: 'GET 命令的典型用法：\n\n1. 获取键值：\n   - GET key\n   - 返回值：value（存在）或 nil（不存在）\n\n2. 批量获取：\n   - MGET key1 key2 key3\n   - 返回值：[value1, value2, value3]\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持批量获取' },
      { title: 'SET/GET 最佳实践', content: 'SET/GET 命令的最佳实践：\n\n1. 合理设置 TTL：\n   - SET key value EX 3600\n   - 避免数据堆积\n\n2. 使用 NX/XX：\n   - SET key value NX（只在键不存在时设置）\n   - SET key value XX（只在键存在时设置）\n   - 避免并发问题\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'GET 返回 nil，但 SET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) key 名拼写错误（大小写敏感）。', fix: '用 EXISTS key 检查是否存在；用 TTL key 查看剩余时间；用 MONITOR 实时监控命令；确保 key 命名一致。' },
      { symptom: 'SET 失败', cause: '1) NX 时键已存在 2) 内存不足 3) 权限问题。', fix: '检查键是否已存在；检查内存使用；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SET 和 GET 存取数据', hint: 'SET key value, GET key', answer: '# 设置键值对\nSET mykey "hello"\n# 返回：OK\n\n# 获取键值\nGET mykey\n# 返回："hello"' },
      { level: '进阶', task: '使用 SET NX 实现分布式锁', hint: 'SET key value NX EX', answer: '# 获取锁\nSET lock:resource "locked" NX EX 10\n# 返回：OK（成功获取锁）\n\n# 释放锁\nDEL lock:resource\n# 返回：1（成功释放锁）' }
    ]
  },

  "TDxv0q7jlZ26uZYYlneem": {
    mentalModel: '使用 Docker 运行 Redis 就像用集装箱运输货物——标准化、易于管理、环境隔离',
    sections: [
      { title: '使用 Docker', content: '使用 Docker 运行 Redis 的典型方式：\n\n1. 运行 Redis 容器：\n   - docker run -p 6379:6379 redis\n   - 监听 127.0.0.1:6379\n\n2. 使用 Docker Compose：\n   - docker-compose up -d\n   - 易于管理，适合开发环境\n\n3. 使用自定义配置：\n   - docker run -v /path/to/redis.conf:/usr/local/etc/redis/redis.conf redis redis-server /usr/local/etc/redis/redis.conf\n   - 可以自定义配置\n\n优势：\n- 标准化，易于管理\n- 环境隔离，避免冲突\n- 快速启动，易于部署' },
      { title: 'Docker Compose', content: '使用 Docker Compose 运行 Redis 的典型配置：\n\n1. 简单配置：\n   - docker-compose.yml：\n     version: "3.8"\n     services:\n       redis:\n         image: redis:7.0\n         ports:\n           - "6379:6379"\n\n2. 持久化配置：\n   - docker-compose.yml：\n     version: "3.8"\n     services:\n       redis:\n         image: redis:7.0\n         ports:\n           - "6379:6379"\n         volumes:\n           - redis-data:/data\n         command: redis-server --appendonly yes\n\n     volumes:\n       redis-data:\n\n3. 自定义配置：\n   - docker-compose.yml：\n     version: "3.8"\n     services:\n       redis:\n         image: redis:7.0\n         ports:\n           - "6379:6379"\n         volumes:\n           - ./redis.conf:/usr/local/etc/redis/redis.conf\n           - redis-data:/data\n         command: redis-server /usr/local/etc/redis/redis.conf\n\n     volumes:\n       redis-data:' },
      { title: 'Docker 最佳实践', content: '使用 Docker 运行 Redis 的最佳实践：\n\n1. 使用官方镜像：\n   - 使用官方提供的 redis 镜像\n   - 避免使用第三方镜像\n\n2. 启用持久化：\n   - 启用 AOF（--appendonly yes）\n   - 或启用 RDB（--save 900 1）\n   - 避免数据丢失\n\n3. 使用 Docker Compose：\n   - 易于管理\n   - 适合开发环境\n\n4. 监控：\n   - 监控 Redis 启动情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Docker 容器启动失败', cause: '1) 端口被占用 2) 配置文件错误 3) 权限问题。', fix: '检查端口是否被占用（docker ps）；检查配置文件语法；检查文件权限。' },
      { symptom: 'Docker 容器启动后无法连接', cause: '1) 端口映射错误 2) 防火墙阻止 3) 密码错误。', fix: '检查端口映射是否正确（-p 6379:6379）；检查防火墙配置；检查密码是否正确。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Docker 运行 Redis', hint: 'docker run -p 6379:6379 redis', answer: '# 运行 Redis 容器\ndocker run -d -p 6379:6379 --name my-redis redis\n\n# 验证启动\ndocker exec my-redis redis-cli ping\n# 返回：PONG' },
      { level: '进阶', task: '使用 Docker Compose 运行 Redis', hint: 'docker-compose.yml', answer: '# 创建 docker-compose.yml\ncat > docker-compose.yml << EOF\nversion: "3.8"\nservices:\n  redis:\n    image: redis:7.0\n    ports:\n      - "6379:6379"\n    volumes:\n      - redis-data:/data\n    command: redis-server --appendonly yes\n\nvolumes:\n  redis-data:\nEOF\n\n# 启动 Redis\ndocker-compose up -d\n\n# 验证启动\ndocker-compose exec redis redis-cli ping\n# 返回：PONG' }
    ]
  },

  "5-3pd4rLDqRzMzSRVLdXh": {
    mentalModel: '高性能与扩展性就像高速公路——多车道（扩展）和限速（性能优化）让交通更顺畅',
    sections: [
      { title: '高性能', content: 'Redis 高性能的典型优化：\n\n1. 内存优化：\n   - 合理设置 maxmemory\n   - 使用合适的数据结构（如 Hash 代替多个 String）\n   - 避免大 key（>10KB）\n\n2. 命令优化：\n   - 使用 Pipeline 批量执行命令\n   - 避免 O(N) 命令（如 KEYS *）\n   - 使用 SCAN 代替 KEYS *\n\n3. 连接优化：\n   - 使用连接池\n   - 合理设置 maxclients\n   - 避免连接泄漏\n\n优势：\n- 极快的读写速度（10万+ QPS）\n- 低延迟（微秒级）\n- 高吞吐' },
      { title: '扩展性', content: 'Redis 扩展性的典型方式：\n\n1. 主从复制：\n   - 读写分离\n   - 提升读性能\n   - 数据备份\n\n2. Sentinel：\n   - 自动故障转移\n   - 高可用\n   - 适合生产环境\n\n3. Cluster：\n   - 数据分片\n   - 水平扩展\n   - 适合大规模数据\n\n4. 垂直扩展：\n   - 增加内存\n   - 增加 CPU\n   - 适合单机性能不足' },
      { title: '高性能与扩展性最佳实践', content: 'Redis 高性能与扩展性的最佳实践：\n\n1. 合理设置 maxmemory：\n   - maxmemory 256mb\n   - maxmemory-policy allkeys-lru\n   - 避免内存溢出\n\n2. 使用 Pipeline：\n   - 批量执行命令\n   - 提升性能（10-100 倍）\n\n3. 使用连接池：\n   - 避免连接泄漏\n   - 提升性能\n\n4. 监控：\n   - 监控内存使用\n   - 监控连接数\n   - 监控性能指标\n   - 避免性能瓶颈' }
    ],
    diagnosis: [
      { symptom: 'Redis 性能不佳', cause: '1) 内存不足 2) 命令使用不当 3) 连接泄漏。', fix: '合理设置 maxmemory；避免 O(N) 命令；使用连接池；监控性能指标。' },
      { symptom: 'Redis 扩展性不足', cause: '1) 单机性能不足 2) 没有使用主从复制 3) 没有使用 Cluster。', fix: '使用主从复制（读写分离）；使用 Sentinel（高可用）；使用 Cluster（水平扩展）。' }
    ],
    exercises: [
      { level: '基础', task: '优化 Redis 性能：使用 Pipeline', hint: 'Pipeline', answer: '# 使用 Pipeline 批量执行命令\npipe = redis.pipeline()\nfor i in range(1000):\n    pipe.set(f"key:{i}", f"value:{i}")\npipe.execute()\n\n# 提升性能（10-100 倍）' },
      { level: '进阶', task: '使用主从复制提升读性能', hint: '主从复制', answer: '# 配置主从复制\n# 主节点：redis-server --port 6379\n# 从节点：redis-server --port 6380 --slaveof 127.0.0.1 6379\n\n# 读写分离\n# 写：主节点\n# 读：从节点\n\n# 提升读性能（2-10 倍）' }
    ]
  },

  "DOdNkTY1yIMipWA2CD9xH": {
    mentalModel: '设置和获取键就像存取物品——SET 把东西放进去，GET 把东西取出来，简单直观',
    sections: [
      { title: '设置键', content: 'SET 命令的典型用法：\n\n1. 设置键值对：\n   - SET key value\n   - SET key value EX 3600（设置 TTL）\n   - SET key value NX（只在键不存在时设置）\n\n2. 返回值：\n   - OK（成功）\n   - nil（失败，如 NX 时键已存在）\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持 TTL' },
      { title: '获取键', content: 'GET 命令的典型用法：\n\n1. 获取键值：\n   - GET key\n   - 返回值：value（存在）或 nil（不存在）\n\n2. 批量获取：\n   - MGET key1 key2 key3\n   - 返回值：[value1, value2, value3]\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持批量获取' },
      { title: '设置和获取最佳实践', content: 'SET/GET 命令的最佳实践：\n\n1. 合理设置 TTL：\n   - SET key value EX 3600\n   - 避免数据堆积\n\n2. 使用 NX/XX：\n   - SET key value NX（只在键不存在时设置）\n   - SET key value XX（只在键存在时设置）\n   - 避免并发问题\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'GET 返回 nil，但 SET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) key 名拼写错误（大小写敏感）。', fix: '用 EXISTS key 检查是否存在；用 TTL key 查看剩余时间；用 MONITOR 实时监控命令；确保 key 命名一致。' },
      { symptom: 'SET 失败', cause: '1) NX 时键已存在 2) 内存不足 3) 权限问题。', fix: '检查键是否已存在；检查内存使用；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SET 和 GET 存取数据', hint: 'SET key value, GET key', answer: '# 设置键值对\nSET mykey "hello"\n# 返回：OK\n\n# 获取键值\nGET mykey\n# 返回："hello"' },
      { level: '进阶', task: '使用 SET NX 实现分布式锁', hint: 'SET key value NX EX', answer: '# 获取锁\nSET lock:resource "locked" NX EX 10\n# 返回：OK（成功获取锁）\n\n# 释放锁\nDEL lock:resource\n# 返回：1（成功释放锁）' }
    ]
  },

  "BOJzn9SWad9oRRdY_ub01": {
    mentalModel: 'HSET 就像在表格里填写一行数据——给指定的字段设置值，适合对象存储',
    sections: [
      { title: 'HSET 命令', content: 'HSET 命令的典型用法：\n\n1. 设置字段值：\n   - HSET key field value\n   - HSET key field1 value1 field2 value2（批量设置）\n\n2. 返回值：\n   - 1（新增字段）\n   - 0（更新字段）\n\n优势：\n- 适合对象存储（用户信息、商品详情）\n- 高性能（O(1)）\n- 支持批量设置' },
      { title: 'HSET 最佳实践', content: 'HSET 命令的最佳实践：\n\n1. 合理设置字段名：\n   - 使用有意义的字段名\n   - 避免太长的字段名\n\n2. 合理设置 TTL：\n   - EXPIRE key 3600\n   - 避免数据堆积\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'HGET 返回 nil，但 HSET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) 字段名拼写错误（大小写敏感）。', fix: '用 HEXISTS key field 检查字段是否存在；用 TTL key 查看剩余时间；确保字段名拼写一致。' },
      { symptom: 'HSET 失败', cause: '1) 内存不足 2) 权限问题 3) 字段名太长。', fix: '检查内存使用；检查权限；避免太长的字段名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 HSET 存储用户信息', hint: 'HSET key field value', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30 email "alice@example.com"\n# 返回：3（新增 3 个字段）\n\n# 获取用户信息\nHGETALL user:123\n# 返回：{"name": "Alice", "age": "30", "email": "alice@example.com"}' },
      { level: '进阶', task: '使用 HSET 批量设置字段', hint: 'HSET key field1 value1 field2 value2', answer: '# 批量设置字段\nHSET user:123 name "Alice" age 30 email "alice@example.com"\n# 返回：3（新增 3 个字段）\n\n# 获取用户信息\nHGETALL user:123\n# 返回：{"name": "Alice", "age": "30", "email": "alice@example.com"}' }
    ]
  },

  "MsKg9m5jFwHM2Bzjf-vdu": {
    mentalModel: 'HGET 就像从表格里读取一行数据——获取指定字段的值，简单直观',
    sections: [
      { title: 'HGET 命令', content: 'HGET 命令的典型用法：\n\n1. 获取字段值：\n   - HGET key field\n   - 返回值：value（存在）或 nil（不存在）\n\n2. 批量获取：\n   - HMGET key field1 field2 field3\n   - 返回值：[value1, value2, value3]\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持批量获取' },
      { title: 'HGET 最佳实践', content: 'HGET 命令的最佳实践：\n\n1. 合理设置字段名：\n   - 使用有意义的字段名\n   - 避免太长的字段名\n\n2. 使用 HMGET 批量获取：\n   - HMGET key field1 field2 field3\n   - 提升性能\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'HGET 返回 nil，但 HSET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) 字段名拼写错误（大小写敏感）。', fix: '用 HEXISTS key field 检查字段是否存在；用 TTL key 查看剩余时间；确保字段名拼写一致。' },
      { symptom: 'HGET 返回错误', cause: '1) key 不存在 2) 字段不存在 3) 权限问题。', fix: '检查 key 是否存在；检查字段是否存在；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 HGET 获取用户信息', hint: 'HGET key field', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30\n\n# 获取用户信息\nHGET user:123 name\n# 返回："Alice"' },
      { level: '进阶', task: '使用 HMGET 批量获取用户信息', hint: 'HMGET key field1 field2', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30 email "alice@example.com"\n\n# 批量获取用户信息\nHMGET user:123 name age email\n# 返回：["Alice", "30", "alice@example.com"]' }
    ]
  },

  "ltF4vCT9ZA2XuUuHnuGnN": {
    mentalModel: 'SET 命令就像把东西放进盒子——把值存储到指定的键，简单直观',
    sections: [
      { title: 'SET 命令', content: 'SET 命令的典型用法：\n\n1. 设置键值对：\n   - SET key value\n   - SET key value EX 3600（设置 TTL）\n   - SET key value NX（只在键不存在时设置）\n\n2. 返回值：\n   - OK（成功）\n   - nil（失败，如 NX 时键已存在）\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持 TTL' },
      { title: 'SET 最佳实践', content: 'SET 命令的最佳实践：\n\n1. 合理设置 TTL：\n   - SET key value EX 3600\n   - 避免数据堆积\n\n2. 使用 NX/XX：\n   - SET key value NX（只在键不存在时设置）\n   - SET key value XX（只在键存在时设置）\n   - 避免并发问题\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SET 失败', cause: '1) NX 时键已存在 2) 内存不足 3) 权限问题。', fix: '检查键是否已存在；检查内存使用；检查权限。' },
      { symptom: 'SET 后数据丢失', cause: '1) 没有设置 TTL 2) Redis 崩溃时数据丢失 3) 磁盘空间不足。', fix: '启用持久化（AOF 或 RDB）；检查磁盘空间；定期备份数据。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SET 存储数据', hint: 'SET key value', answer: '# 设置键值对\nSET mykey "hello"\n# 返回：OK\n\n# 获取键值\nGET mykey\n# 返回："hello"' },
      { level: '进阶', task: '使用 SET NX 实现分布式锁', hint: 'SET key value NX EX', answer: '# 获取锁\nSET lock:resource "locked" NX EX 10\n# 返回：OK（成功获取锁）\n\n# 释放锁\nDEL lock:resource\n# 返回：1（成功释放锁）' }
    ]
  },

  "mQc4H2ZMMSVjh33LJY8mK": {
    mentalModel: 'GET 命令就像从盒子里取出东西——获取指定键的值，简单直观',
    sections: [
      { title: 'GET 命令', content: 'GET 命令的典型用法：\n\n1. 获取键值：\n   - GET key\n   - 返回值：value（存在）或 nil（不存在）\n\n2. 批量获取：\n   - MGET key1 key2 key3\n   - 返回值：[value1, value2, value3]\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持批量获取' },
      { title: 'GET 最佳实践', content: 'GET 命令的最佳实践：\n\n1. 合理设置键名：\n   - 使用有意义的键名\n   - 避免太长的键名\n\n2. 使用 MGET 批量获取：\n   - MGET key1 key2 key3\n   - 提升性能\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'GET 返回 nil，但 SET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) key 名拼写错误（大小写敏感）。', fix: '用 EXISTS key 检查是否存在；用 TTL key 查看剩余时间；用 MONITOR 实时监控命令；确保 key 命名一致。' },
      { symptom: 'GET 返回错误', cause: '1) key 不存在 2) 权限问题 3) 键名太长。', fix: '检查 key 是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 GET 获取数据', hint: 'GET key', answer: '# 设置键值对\nSET mykey "hello"\n\n# 获取键值\nGET mykey\n# 返回："hello"' },
      { level: '进阶', task: '使用 MGET 批量获取数据', hint: 'MGET key1 key2', answer: '# 设置键值对\nSET key1 "value1"\nSET key2 "value2"\n\n# 批量获取键值\nMGET key1 key2\n# 返回：["value1", "value2"]' }
    ]
  },

  "lV_MnUNTB2h925idX0YWk": {
    mentalModel: 'DEL 命令就像从盒子里删除东西——删除指定的键，简单直观',
    sections: [
      { title: 'DEL 命令', content: 'DEL 命令的典型用法：\n\n1. 删除键：\n   - DEL key\n   - DEL key1 key2 key3（批量删除）\n\n2. 返回值：\n   - 删除的键数量\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持批量删除' },
      { title: 'DEL 最佳实践', content: 'DEL 命令的最佳实践：\n\n1. 合理删除键：\n   - 删除不需要的键\n   - 避免误删\n\n2. 使用批量删除：\n   - DEL key1 key2 key3\n   - 提升性能\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'DEL 失败', cause: '1) key 不存在 2) 权限问题 3) 键名拼写错误。', fix: '检查 key 是否存在；检查权限；确保 key 命名一致。' },
      { symptom: 'DEL 后数据仍然存在', cause: '1) 没有删除成功 2) 键名拼写错误 3) 权限问题。', fix: '检查 key 是否存在；检查权限；确保 key 命名一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 DEL 删除数据', hint: 'DEL key', answer: '# 设置键值对\nSET mykey "hello"\n\n# 删除键\nDEL mykey\n# 返回：1（成功删除）\n\n# 获取键值\nGET mykey\n# 返回：nil（键已删除）' },
      { level: '进阶', task: '使用 DEL 批量删除数据', hint: 'DEL key1 key2', answer: '# 设置键值对\nSET key1 "value1"\nSET key2 "value2"\n\n# 批量删除键\nDEL key1 key2\n# 返回：2（成功删除 2 个键）\n\n# 获取键值\nGET key1\n# 返回：nil（键已删除）' }
    ]
  },

  "nS0DHhfy4wxHItgOFhulA": {
    mentalModel: 'EXPIRE 命令就像给盒子设置定时器——到时间后自动删除，避免数据堆积',
    sections: [
      { title: 'EXPIRE 命令', content: 'EXPIRE 命令的典型用法：\n\n1. 设置过期时间：\n   - EXPIRE key seconds\n   - EXPIRE key 3600（1 小时后过期）\n\n2. 返回值：\n   - 1（成功设置）\n   - 0（键不存在）\n\n优势：\n- 自动删除过期数据\n- 避免数据堆积\n- 简单易用' },
      { title: 'EXPIRE 最佳实践', content: 'EXPIRE 命令的最佳实践：\n\n1. 合理设置过期时间：\n   - 根据数据生命周期设置 TTL\n   - 热点数据：永不过期（后台更新）\n   - 普通数据：TTL = 300-3600 秒\n   - 冷数据：TTL = 60-300 秒\n\n2. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'EXPIRE 失败', cause: '1) key 不存在 2) 权限问题 3) 过期时间设置不合理。', fix: '检查 key 是否存在；检查权限；合理设置过期时间。' },
      { symptom: '数据过早过期', cause: '1) 过期时间设置太短 2) 没有续期会话。', fix: '合理设置过期时间；每次请求时刷新 TTL。' }
    ],
    exercises: [
      { level: '基础', task: '使用 EXPIRE 设置过期时间', hint: 'EXPIRE key seconds', answer: '# 设置键值对\nSET mykey "hello"\n\n# 设置过期时间（10 秒后过期）\nEXPIRE mykey 10\n# 返回：1（成功设置）\n\n# 等待 10 秒后获取键值\nGET mykey\n# 返回：nil（键已过期）' },
      { level: '进阶', task: '使用 EXPIRE 实现会话续期', hint: 'EXPIRE key seconds', answer: '# 设置会话\nSET session:123 "user:123"\nEXPIRE session:123 1800  # 30 分钟后过期\n\n# 每次请求时续期\nEXPIRE session:123 1800\n\n# 避免会话过期' }
    ]
  },

  "Vll7VMmGWSI5XGZ9JpHyl": {
    mentalModel: 'TTL 命令就像查看定时器剩余时间——查看键还有多久过期，简单直观',
    sections: [
      { title: 'TTL 命令', content: 'TTL 命令的典型用法：\n\n1. 查看剩余时间：\n   - TTL key\n   - 返回值：剩余秒数（存在）或 -2（键不存在）或 -1（键存在但没有过期时间）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合监控键的过期情况' },
      { title: 'TTL 最佳实践', content: 'TTL 命令的最佳实践：\n\n1. 监控键的过期情况：\n   - TTL key\n   - 避免键过早过期\n\n2. 合理设置过期时间：\n   - 根据数据生命周期设置 TTL\n   - 热点数据：永不过期（后台更新）\n   - 普通数据：TTL = 300-3600 秒\n   - 冷数据：TTL = 60-300 秒\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'TTL 返回 -2，但 SET 成功了', cause: '1) key 已过期 2) key 被其他客户端删除 3) key 名拼写错误（大小写敏感）。', fix: '用 EXISTS key 检查是否存在；用 TTL key 查看剩余时间；用 MONITOR 实时监控命令；确保 key 命名一致。' },
      { symptom: 'TTL 返回 -1，但设置了过期时间', cause: '1) 没有设置成功 2) 键名拼写错误 3) 权限问题。', fix: '检查键是否存在；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 TTL 查看剩余时间', hint: 'TTL key', answer: '# 设置键值对\nSET mykey "hello"\n\n# 设置过期时间（10 秒后过期）\nEXPIRE mykey 10\n\n# 查看剩余时间\nTTL mykey\n# 返回：10（剩余 10 秒）' },
      { level: '进阶', task: '使用 TTL 监控键的过期情况', hint: 'TTL key', answer: '# 设置键值对\nSET mykey "hello"\nEXPIRE mykey 10\n\n# 监控键的过期情况\nwhile True:\n    ttl = redis.ttl("mykey")\n    print(f"TTL: {ttl}")\n    if ttl <= 0:\n        break\n    time.sleep(1)\n\n# 输出：\n# TTL: 10\n# TTL: 9\n# ...\n# TTL: 1\n# TTL: 0' }
    ]
  },

  "TpR33sJ-tAjeG3jpGTvYR": {
    mentalModel: 'HGETALL 命令就像读取整个表格——获取哈希表的所有字段和值，简单直观',
    sections: [
      { title: 'HGETALL 命令', content: 'HGETALL 命令的典型用法：\n\n1. 获取所有字段和值：\n   - HGETALL key\n   - 返回值：[field1, value1, field2, value2, ...]\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合获取整个对象' },
      { title: 'HGETALL 最佳实践', content: 'HGETALL 命令的最佳实践：\n\n1. 合理设置字段名：\n   - 使用有意义的字段名\n   - 避免太长的字段名\n\n2. 使用 HGETALL 获取整个对象：\n   - HGETALL key\n   - 适合获取整个对象\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'HGETALL 返回空，但 HSET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) key 名拼写错误（大小写敏感）。', fix: '用 HEXISTS key field 检查字段是否存在；用 TTL key 查看剩余时间；确保键名拼写一致。' },
      { symptom: 'HGETALL 返回错误', cause: '1) key 不存在 2) 权限问题 3) 键名太长。', fix: '检查 key 是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 HGETALL 获取用户信息', hint: 'HGETALL key', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30 email "alice@example.com"\n\n# 获取用户信息\nHGETALL user:123\n# 返回：{"name": "Alice", "age": "30", "email": "alice@example.com"}' },
      { level: '进阶', task: '使用 HGETALL 批量获取多个用户信息', hint: 'HGETALL key', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30\nHSET user:456 name "Bob" age 25\n\n# 批量获取用户信息\nusers = ["user:123", "user:456"]\nfor user in users:\n    info = redis.hgetall(user)\n    print(info)\n\n# 输出：\n# {"name": "Alice", "age": "30"}\n# {"name": "Bob", "age": "25"}' }
    ]
  },

  "E7xFZkqqbzokD5KGTn9zJ": {
    mentalModel: 'HDEL 命令就像从表格里删除一行数据——删除指定的字段，简单直观',
    sections: [
      { title: 'HDEL 命令', content: 'HDEL 命令的典型用法：\n\n1. 删除字段：\n   - HDEL key field\n   - HDEL key field1 field2（批量删除）\n\n2. 返回值：\n   - 删除的字段数量\n\n优势：\n- 简单易用\n- 高性能（O(1)）\n- 支持批量删除' },
      { title: 'HDEL 最佳实践', content: 'HDEL 命令的最佳实践：\n\n1. 合理删除字段：\n   - 删除不需要的字段\n   - 避免误删\n\n2. 使用批量删除：\n   - HDEL key field1 field2\n   - 提升性能\n\n3. 监控：\n   - 监控字段数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'HDEL 失败', cause: '1) 字段不存在 2) 权限问题 3) 字段名拼写错误。', fix: '检查字段是否存在；检查权限；确保字段名拼写一致。' },
      { symptom: 'HDEL 后字段仍然存在', cause: '1) 没有删除成功 2) 字段名拼写错误 3) 权限问题。', fix: '检查字段是否存在；检查权限；确保字段名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 HDEL 删除字段', hint: 'HDEL key field', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30\n\n# 删除字段\nHDEL user:123 age\n# 返回：1（成功删除）\n\n# 获取用户信息\nHGETALL user:123\n# 返回：{"name": "Alice"}（age 已删除）' },
      { level: '进阶', task: '使用 HDEL 批量删除字段', hint: 'HDEL key field1 field2', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30 email "alice@example.com"\n\n# 批量删除字段\nHDEL user:123 age email\n# 返回：2（成功删除 2 个字段）\n\n# 获取用户信息\nHGETALL user:123\n# 返回：{"name": "Alice"}（age 和 email 已删除）' }
    ]
  },

  "5K9qyC4mrhXYWOC8WSq8C": {
    mentalModel: 'INCR 命令就像计数器——每次加 1，简单直观',
    sections: [
      { title: 'INCR 命令', content: 'INCR 命令的典型用法：\n\n1. 递增：\n   - INCR key\n   - 返回值：递增后的值\n\n2. 优势：\n   - 原子操作\n   - 高性能（O(1)）\n   - 适合计数器' },
      { title: 'INCR 最佳实践', content: 'INCR 命令的最佳实践：\n\n1. 合理设置初始值：\n   - SET key 0\n   - 避免从 nil 开始\n\n2. 使用 INCRBY 批量递增：\n   - INCRBY key 10\n   - 提升性能\n\n3. 监控：\n   - 监控计数器增长\n   - 避免溢出' }
    ],
    diagnosis: [
      { symptom: 'INCR 失败', cause: '1) 键不存在 2) 值不是整数 3) 权限问题。', fix: '检查键是否存在；确保值是整数；检查权限。' },
      { symptom: 'INCR 后值不正确', cause: '1) 值不是整数 2) 溢出 3) 并发问题。', fix: '确保值是整数；检查是否溢出；使用原子操作。' }
    ],
    exercises: [
      { level: '基础', task: '使用 INCR 实现计数器', hint: 'INCR key', answer: '# 设置初始值\nSET counter 0\n\n# 递增\nINCR counter\n# 返回：1\n\nINCR counter\n# 返回：2\n\n# 获取计数器值\nGET counter\n# 返回："2"' },
      { level: '进阶', task: '使用 INCRBY 批量递增', hint: 'INCRBY key increment', answer: '# 设置初始值\nSET counter 0\n\n# 批量递增\nINCRBY counter 10\n# 返回：10\n\nINCRBY counter 5\n# 返回：15\n\n# 获取计数器值\nGET counter\n# 返回："15"' }
    ]
  },

  "t4BXPofF8OCqH5KHwdYVh": {
    mentalModel: 'DECR 命令就像倒计时器——每次减 1，简单直观',
    sections: [
      { title: 'DECR 命令', content: 'DECR 命令的典型用法：\n\n1. 递减：\n   - DECR key\n   - 返回值：递减后的值\n\n2. 优势：\n   - 原子操作\n   - 高性能（O(1)）\n   - 适合倒计时器' },
      { title: 'DECR 最佳实践', content: 'DECR 命令的最佳实践：\n\n1. 合理设置初始值：\n   - SET key 10\n   - 避免从 nil 开始\n\n2. 使用 DECRBY 批量递减：\n   - DECRBY key 5\n   - 提升性能\n\n3. 监控：\n   - 监控计数器递减\n   - 避免负数' }
    ],
    diagnosis: [
      { symptom: 'DECR 失败', cause: '1) 键不存在 2) 值不是整数 3) 权限问题。', fix: '检查键是否存在；确保值是整数；检查权限。' },
      { symptom: 'DECR 后值不正确', cause: '1) 值不是整数 2) 负数 3) 并发问题。', fix: '确保值是整数；检查是否为负数；使用原子操作。' }
    ],
    exercises: [
      { level: '基础', task: '使用 DECR 实现倒计时器', hint: 'DECR key', answer: '# 设置初始值\nSET counter 10\n\n# 递减\nDECR counter\n# 返回：9\n\nDECR counter\n# 返回：8\n\n# 获取计数器值\nGET counter\n# 返回："8"' },
      { level: '进阶', task: '使用 DECRBY 批量递减', hint: 'DECRBY key decrement', answer: '# 设置初始值\nSET counter 10\n\n# 批量递减\nDECRBY counter 5\n# 返回：5\n\nDECRBY counter 3\n# 返回：2\n\n# 获取计数器值\nGET counter\n# 返回："2"' }
    ]
  },

  "U84XgBFPyIbY0W5afH4cx": {
    mentalModel: 'Redis 数据类型就像一个多功能工具箱——不同的工具适合不同的场景，选择合适的工具才能事半功倍',
    sections: [
      { title: '数据类型概览', content: 'Redis 的 9 种数据类型：\n\n1. String（字符串）：\n   - 最简单的数据结构\n   - 适合缓存、计数器\n\n2. Hash（哈希）：\n   - 键值对集合\n   - 适合对象存储（用户信息、商品详情）\n\n3. List（列表）：\n   - 有序列表\n   - 适合消息队列、最近浏览记录\n\n4. Set（集合）：\n   - 无序、唯一的集合\n   - 适合标签、好友关系\n\n5. Sorted Set（有序集合）：\n   - 有序、唯一的集合\n   - 适合排行榜、延迟队列\n\n6. Bitmap（位图）：\n   - 位操作\n   - 适合签到、在线状态\n\n7. HyperLogLog：\n   - 基数统计\n   - 适合 UV 统计\n\n8. Geospatial（地理位置）：\n   - 地理位置索引\n   - 适合附近的人、距离计算\n\n9. Streams（流）：\n   - 消息流\n   - 适合消息队列、事件溯源' },
      { title: '数据类型选择', content: '如何选择合适的数据类型：\n\n1. 缓存、计数器：String\n   - SET key value\n   - INCR key\n\n2. 对象存储：Hash\n   - HSET key field value\n   - HGET key field\n\n3. 消息队列：List\n   - LPUSH queue message\n   - BRPOP queue timeout\n\n4. 标签、好友关系：Set\n   - SADD key member\n   - SMEMBERS key\n\n5. 排行榜：Sorted Set\n   - ZADD key score member\n   - ZREVRANGE key 0 9 WITHSCORES\n\n6. 签到、在线状态：Bitmap\n   - SETBIT key offset value\n   - GETBIT key offset\n\n7. UV 统计：HyperLogLog\n   - PFADD key member\n   - PFCOUNT key\n\n8. 附近的人：Geospatial\n   - GEOADD key longitude latitude member\n   - GEORADIUS key longitude latitude radius\n\n9. 消息队列、事件溯源：Streams\n   - XADD key * field value\n   - XREAD COUNT 10 STREAMS key 0' },
      { title: '数据类型最佳实践', content: 'Redis 数据类型的最佳实践：\n\n1. 合理选择数据类型：\n   - 根据场景选择合适的数据类型\n   - 避免使用不合适的数据类型\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控数据类型使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '选择了不合适的数据类型', cause: '不了解不同数据类型的适用场景。', fix: '根据场景选择合适的数据类型；参考官方文档。' },
      { symptom: '数据类型使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控数据类型使用情况。', fix: '合理设置 TTL；监控数据类型使用情况；避免数据堆积。' }
    ],
    exercises: [
      { level: '基础', task: '选择合适的数据类型：缓存用户信息', hint: 'Hash', answer: '选择 Hash：\n- HSET user:123 name "Alice" age 30\n- HGET user:123 name\n- 适合对象存储' },
      { level: '进阶', task: '选择合适的数据类型：实现排行榜', hint: 'Sorted Set', answer: '选择 Sorted Set：\n- ZADD leaderboard 100 player:123\n- ZREVRANGE leaderboard 0 9 WITHSCORES\n- 适合排行榜' }
    ]
  },

  "adhLMuSmfYMRyWTwIgnyE": {
    mentalModel: 'HEXISTS 命令就像检查表格里是否有某一行——检查指定的字段是否存在，简单直观',
    sections: [
      { title: 'HEXISTS 命令', content: 'HEXISTS 命令的典型用法：\n\n1. 检查字段是否存在：\n   - HEXISTS key field\n   - 返回值：1（存在）或 0（不存在）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合检查字段是否存在' },
      { title: 'HEXISTS 最佳实践', content: 'HEXISTS 命令的最佳实践：\n\n1. 合理检查字段：\n   - 检查字段是否存在\n   - 避免误判\n\n2. 使用 HEXISTS 检查字段：\n   - HEXISTS key field\n   - 适合检查字段是否存在\n\n3. 监控：\n   - 监控字段数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'HEXISTS 返回 0，但 HSET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) 字段名拼写错误（大小写敏感）。', fix: '用 HEXISTS key field 检查字段是否存在；用 TTL key 查看剩余时间；确保字段名拼写一致。' },
      { symptom: 'HEXISTS 返回错误', cause: '1) key 不存在 2) 权限问题 3) 字段名太长。', fix: '检查 key 是否存在；检查权限；避免太长的字段名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 HEXISTS 检查字段是否存在', hint: 'HEXISTS key field', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30\n\n# 检查字段是否存在\nHEXISTS user:123 name\n# 返回：1（存在）\n\nHEXISTS user:123 email\n# 返回：0（不存在）' },
      { level: '进阶', task: '使用 HEXISTS 批量检查字段是否存在', hint: 'HEXISTS key field', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30 email "alice@example.com"\n\n# 批量检查字段是否存在\nfields = ["name", "age", "email", "phone"]\nfor field in fields:\n    exists = redis.hexists("user:123", field)\n    print(f"{field}: {exists}")\n\n# 输出：\n# name: 1\n# age: 1\n# email: 1\n# phone: 0' }
    ]
  },

  "cPWd53BO6tm-uy4gqLdtZ": {
    mentalModel: 'APPEND 命令就像在字符串后面追加内容——简单直观',
    sections: [
      { title: 'APPEND 命令', content: 'APPEND 命令的典型用法：\n\n1. 追加内容：\n   - APPEND key value\n   - 返回值：追加后的字符串长度\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合追加内容' },
      { title: 'APPEND 最佳实践', content: 'APPEND 命令的最佳实践：\n\n1. 合理追加内容：\n   - 追加有意义的内容\n   - 避免追加无意义的内容\n\n2. 使用 APPEND 追加内容：\n   - APPEND key value\n   - 适合追加内容\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'APPEND 失败', cause: '1) key 不存在 2) 权限问题 3) 键名太长。', fix: '检查 key 是否存在；检查权限；避免太长的键名。' },
      { symptom: 'APPEND 后内容不正确', cause: '1) 追加的内容不正确 2) 键名拼写错误 3) 权限问题。', fix: '检查追加的内容是否正确；检查键名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 APPEND 追加内容', hint: 'APPEND key value', answer: '# 设置键值对\nSET mykey "hello"\n\n# 追加内容\nAPPEND mykey " world"\n# 返回：11（追加后的字符串长度）\n\n# 获取键值\nGET mykey\n# 返回："hello world"' },
      { level: '进阶', task: '使用 APPEND 实现日志追加', hint: 'APPEND key value', answer: '# 设置日志\nSET log ""\n\n# 追加日志\nAPPEND log "2024-01-01 10:00:00 User login\\n"\nAPPEND log "2024-01-01 10:01:00 User logout\\n"\n\n# 获取日志\nGET log\n# 返回："2024-01-01 10:00:00 User login\\n2024-01-01 10:01:00 User logout\\n"' }
    ]
  },

  "eJQW986HM4Wf1o1i2FnXs": {
    mentalModel: 'STRLEN 命令就像测量字符串长度——获取字符串的长度，简单直观',
    sections: [
      { title: 'STRLEN 命令', content: 'STRLEN 命令的典型用法：\n\n1. 获取字符串长度：\n   - STRLEN key\n   - 返回值：字符串长度（存在）或 0（不存在）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合获取字符串长度' },
      { title: 'STRLEN 最佳实践', content: 'STRLEN 命令的最佳实践：\n\n1. 合理获取字符串长度：\n   - 获取字符串长度\n   - 避免误判\n\n2. 使用 STRLEN 获取字符串长度：\n   - STRLEN key\n   - 适合获取字符串长度\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'STRLEN 返回 0，但 SET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) key 名拼写错误（大小写敏感）。', fix: '用 EXISTS key 检查是否存在；用 TTL key 查看剩余时间；确保键名拼写一致。' },
      { symptom: 'STRLEN 返回错误', cause: '1) key 不存在 2) 权限问题 3) 键名太长。', fix: '检查 key 是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 STRLEN 获取字符串长度', hint: 'STRLEN key', answer: '# 设置键值对\nSET mykey "hello"\n\n# 获取字符串长度\nSTRLEN mykey\n# 返回：5' },
      { level: '进阶', task: '使用 STRLEN 批量获取字符串长度', hint: 'STRLEN key', answer: '# 设置键值对\nSET key1 "hello"\nSET key2 "world"\n\n# 批量获取字符串长度\nkeys = ["key1", "key2"]\nfor key in keys:\n    length = redis.strlen(key)\n    print(f"{key}: {length}")\n\n# 输出：\n# key1: 5\n# key2: 5' }
    ]
  },

  "Wl23Jh-ASJOQ850yjaTIU": {
    mentalModel: 'String 是 Redis 最简单的数据类型——就像一张便签，可以写下任何内容',
    sections: [
      { title: 'String 数据类型', content: 'String 是 Redis 最简单的数据类型：\n\n1. 基本概念：\n   - 最简单的数据结构\n   - 可以存储字符串、数字、JSON、二进制\n   - 适合缓存、计数器\n\n2. 常用命令：\n   - SET key value\n   - GET key\n   - INCR key\n   - DECR key\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 支持 TTL' },
      { title: 'String 最佳实践', content: 'String 数据类型的最佳实践：\n\n1. 合理设置键名：\n   - 使用有意义的键名\n   - 避免太长的键名\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'String 使用不当', cause: '1) 选择了不合适的数据类型 2) 没有合理设置 TTL 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 TTL；监控内存使用。' },
      { symptom: 'String 性能不佳', cause: '1) 键名太长 2) 值太长 3) 没有使用 Pipeline。', fix: '避免太长的键名；避免太长的值；使用 Pipeline 批量执行命令。' }
    ],
    exercises: [
      { level: '基础', task: '使用 String 存储和获取数据', hint: 'SET key value, GET key', answer: '# 设置键值对\nSET mykey "hello"\n\n# 获取键值\nGET mykey\n# 返回："hello"' },
      { level: '进阶', task: '使用 String 实现计数器', hint: 'INCR key', answer: '# 设置初始值\nSET counter 0\n\n# 递增\nINCR counter\n# 返回：1\n\nINCR counter\n# 返回：2\n\n# 获取计数器值\nGET counter\n# 返回："2"' }
    ]
  },

  "P6TDUCroLlEI7qePBFHIH": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "0v8uLWRCbAqEmKKdYaRQW": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "wY46Qj5Inw_ClBNI9PB_2": {
    mentalModel: 'Hash 就像一张表格——可以存储多个字段和值，适合对象存储',
    sections: [
      { title: 'Hash 数据类型', content: 'Hash 是 Redis 的键值对集合：\n\n1. 基本概念：\n   - 键值对集合\n   - 适合对象存储（用户信息、商品详情）\n   - 每个字段都有对应的值\n\n2. 常用命令：\n   - HSET key field value\n   - HGET key field\n   - HGETALL key\n   - HDEL key field\n\n3. 优势：\n   - 适合对象存储\n   - 高性能（O(1)）\n   - 支持批量操作' },
      { title: 'Hash 最佳实践', content: 'Hash 数据类型的最佳实践：\n\n1. 合理设置字段名：\n   - 使用有意义的字段名\n   - 避免太长的字段名\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控字段数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Hash 使用不当', cause: '1) 选择了不合适的数据类型 2) 没有合理设置 TTL 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 TTL；监控内存使用。' },
      { symptom: 'Hash 性能不佳', cause: '1) 字段名太长 2) 值太长 3) 没有使用 Pipeline。', fix: '避免太长的字段名；避免太长的值；使用 Pipeline 批量执行命令。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Hash 存储和获取用户信息', hint: 'HSET key field value, HGET key field', answer: '# 存储用户信息\nHSET user:123 name "Alice" age 30\n\n# 获取用户信息\nHGET user:123 name\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Hash 批量存储和获取用户信息', hint: 'HSET key field1 value1 field2 value2, HGETALL key', answer: '# 批量存储用户信息\nHSET user:123 name "Alice" age 30 email "alice@example.com"\n\n# 获取所有用户信息\nHGETALL user:123\n# 返回：{"name": "Alice", "age": "30", "email": "alice@example.com"}' }
    ]
  },

  "2_E2VwbjTgk4xxTFWfHuV": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "jtVnUD-na-WffMaS8qYfu": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "QTbkWZ7BpqYmBhUivccPu": {
    mentalModel: 'Sorted Set 就像一个有序的排行榜——每个成员都有一个分数，按分数排序',
    sections: [
      { title: 'Sorted Set 数据类型', content: 'Sorted Set 是 Redis 的有序集合：\n\n1. 基本概念：\n   - 有序、唯一的集合\n   - 每个成员都有一个分数\n   - 按分数排序\n\n2. 常用命令：\n   - ZADD key score member\n   - ZRANGE key start stop WITHSCORES\n   - ZRANK key member\n   - ZREM key member\n\n3. 优势：\n   - 适合排行榜\n   - 高性能（O(log N)）\n   - 支持范围查询' },
      { title: 'Sorted Set 最佳实践', content: 'Sorted Set 数据类型的最佳实践：\n\n1. 合理设置分数：\n   - 根据场景设置分数\n   - 避免分数溢出\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Sorted Set 使用不当', cause: '1) 选择了不合适的数据类型 2) 没有合理设置分数 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置分数；监控内存使用。' },
      { symptom: 'Sorted Set 性能不佳', cause: '1) 成员太多 2) 没有使用索引 3) 没有使用 Pipeline。', fix: '避免太多成员；使用索引；使用 Pipeline 批量执行命令。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Sorted Set 实现排行榜', hint: 'ZADD key score member, ZRANGE key start stop WITHSCORES', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\n\n# 获取排行榜（前 10 名）\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：[("player:456", 200), ("player:123", 100)]' },
      { level: '进阶', task: '使用 Sorted Set 实现延迟队列', hint: 'ZADD key score member, ZRANGEBYSCORE key min max', answer: '# 添加延迟任务（分数是执行时间）\ntimestamp = time.time() + 10\nZADD delayed_queue timestamp "task:123"\n\n# 获取延迟任务（执行时间 <= 当前时间）\ncurrent_time = time.time()\nZRANGEBYSCORE delayed_queue 0 current_time\n# 返回：["task:123"]（如果执行时间 <= 当前时间）' }
    ]
  },

  "0swsBD0sOY-o5lzibT999": {
    mentalModel: 'ZADD 命令就像给排行榜添加成员——添加成员和分数，简单直观',
    sections: [
      { title: 'ZADD 命令', content: 'ZADD 命令的典型用法：\n\n1. 添加成员和分数：\n   - ZADD key score member\n   - ZADD key score1 member1 score2 member2（批量添加）\n\n2. 返回值：\n   - 新增的成员数量\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(log N)）\n   - 适合排行榜' },
      { title: 'ZADD 最佳实践', content: 'ZADD 命令的最佳实践：\n\n1. 合理设置分数：\n   - 根据场景设置分数\n   - 避免分数溢出\n\n2. 使用批量添加：\n   - ZADD key score1 member1 score2 member2\n   - 提升性能\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'ZADD 失败', cause: '1) 分数不是数字 2) 权限问题 3) 键名太长。', fix: '确保分数是数字；检查权限；避免太长的键名。' },
      { symptom: 'ZADD 后分数不正确', cause: '1) 分数设置不正确 2) 键名拼写错误 3) 权限问题。', fix: '检查分数是否正确；检查键名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 ZADD 添加成员和分数', hint: 'ZADD key score member', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\n# 返回：1（新增 1 个成员）\n\n# 获取排行榜\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：[("player:123", 100)]' },
      { level: '进阶', task: '使用 ZADD 批量添加成员和分数', hint: 'ZADD key score1 member1 score2 member2', answer: '# 批量添加成员和分数\nZADD leaderboard 100 player:123 200 player:456\n# 返回：2（新增 2 个成员）\n\n# 获取排行榜\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：[("player:456", 200), ("player:123", 100)]' }
    ]
  },

  "3pFChX6YIItrBz9lxu4XM": {
    mentalModel: 'ZRANGE 命令就像查看排行榜——获取指定范围的成员和分数，简单直观',
    sections: [
      { title: 'ZRANGE 命令', content: 'ZRANGE 命令的典型用法：\n\n1. 获取指定范围的成员：\n   - ZRANGE key start stop WITHSCORES\n   - ZRANGE key 0 9 WITHSCORES（前 10 名）\n\n2. 返回值：\n   - 成员和分数列表\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(log N + M)）\n   - 适合排行榜' },
      { title: 'ZRANGE 最佳实践', content: 'ZRANGE 命令的最佳实践：\n\n1. 合理设置范围：\n   - 根据场景设置范围\n   - 避免范围太大\n\n2. 使用 WITHSCORES：\n   - ZRANGE key start stop WITHSCORES\n   - 获取成员和分数\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'ZRANGE 返回空', cause: '1) 键不存在 2) 范围设置不正确 3) 权限问题。', fix: '检查键是否存在；检查范围设置；检查权限。' },
      { symptom: 'ZRANGE 返回错误', cause: '1) 范围设置不正确 2) 权限问题 3) 键名太长。', fix: '检查范围设置；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 ZRANGE 获取排行榜', hint: 'ZRANGE key start stop WITHSCORES', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\n\n# 获取排行榜（前 10 名）\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：[("player:456", 200), ("player:123", 100)]' },
      { level: '进阶', task: '使用 ZRANGE 获取指定范围的成员', hint: 'ZRANGE key start stop WITHSCORES', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\nZADD leaderboard 300 player:789\n\n# 获取指定范围的成员（第 2-3 名）\nZREVRANGE leaderboard 1 2 WITHSCORES\n# 返回：[("player:456", 200), ("player:123", 100)]' }
    ]
  },

  "4-C4XqACUp4nvcMIj6djF": {
    mentalModel: 'List 就像一个队列——先进先出，适合消息队列',
    sections: [
      { title: 'List 数据类型', content: 'List 是 Redis 的有序列表：\n\n1. 基本概念：\n   - 有序列表\n   - 适合消息队列、最近浏览记录\n   - 支持两端操作（LPUSH/RPUSH、LPOP/RPOP）\n\n2. 常用命令：\n   - LPUSH key value\n   - RPUSH key value\n   - LPOP key\n   - RPOP key\n   - LRANGE key start stop\n\n3. 优势：\n   - 适合消息队列\n   - 高性能（O(1)）\n   - 支持两端操作' },
      { title: 'List 最佳实践', content: 'List 数据类型的最佳实践：\n\n1. 合理设置列表长度：\n   - 使用 LTRIM 限制列表长度\n   - 避免列表太长\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'List 使用不当', cause: '1) 选择了不合适的数据类型 2) 没有合理设置列表长度 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置列表长度；监控内存使用。' },
      { symptom: 'List 性能不佳', cause: '1) 列表太长 2) 没有使用 Pipeline 3) 没有使用 LTRIM。', fix: '避免列表太长；使用 Pipeline 批量执行命令；使用 LTRIM 限制列表长度。' }
    ],
    exercises: [
      { level: '基础', task: '使用 List 实现消息队列', hint: 'LPUSH key value, RPOP key', answer: '# 生产者\nLPUSH queue "message1"\nLPUSH queue "message2"\n\n# 消费者\nRPOP queue\n# 返回："message1"（先进先出）\n\nRPOP queue\n# 返回："message2"' },
      { level: '进阶', task: '使用 List 实现最近浏览记录', hint: 'LPUSH key value, LTRIM key start stop', answer: '# 添加最近浏览记录\nLPUSH recent:views "page:1"\nLPUSH recent:views "page:2"\nLPUSH recent:views "page:3"\n\n# 限制列表长度（只保留最近 10 条）\nLTRIM recent:views 0 9\n\n# 获取最近浏览记录\nLRANGE recent:views 0 9\n# 返回：["page:3", "page:2", "page:1"]' }
    ]
  },

  "Qgkpr9vf9d6-vUg1o8XFj": {
    mentalModel: 'Set 就像一个集合——无序、唯一，适合标签、好友关系',
    sections: [
      { title: 'Set 数据类型', content: 'Set 是 Redis 的无序集合：\n\n1. 基本概念：\n   - 无序、唯一的集合\n   - 适合标签、好友关系\n   - 支持集合运算（交集、并集、差集）\n\n2. 常用命令：\n   - SADD key member\n   - SMEMBERS key\n   - SISMEMBER key member\n   - SINTER key1 key2\n   - SUNION key1 key2\n\n3. 优势：\n   - 适合标签、好友关系\n   - 高性能（O(1)）\n   - 支持集合运算' },
      { title: 'Set 最佳实践', content: 'Set 数据类型的最佳实践：\n\n1. 合理设置成员：\n   - 添加有意义的成员\n   - 避免太多成员\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Set 使用不当', cause: '1) 选择了不合适的数据类型 2) 没有合理设置成员 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置成员；监控内存使用。' },
      { symptom: 'Set 性能不佳', cause: '1) 成员太多 2) 没有使用 Pipeline 3) 没有使用集合运算。', fix: '避免太多成员；使用 Pipeline 批量执行命令；使用集合运算。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Set 实现标签系统', hint: 'SADD key member, SMEMBERS key', answer: '# 添加标签\nSADD article:123:tags "redis" "database" "cache"\n\n# 获取标签\nSMEMBERS article:123:tags\n# 返回：["redis", "database", "cache"]' },
      { level: '进阶', task: '使用 Set 实现好友关系', hint: 'SADD key member, SINTER key1 key2', answer: '# 添加好友\nSADD user:123:friends "user:456"\nSADD user:123:friends "user:789"\n\nSADD user:456:friends "user:123"\nSADD user:456:friends "user:789"\n\n# 获取共同好友\nSINTER user:123:friends user:456:friends\n# 返回：["user:789"]' }
    ]
  },

  "AF_kWM4V8n5Ux06IgEVTl": {
    mentalModel: 'ZRANK 命令就像查看排行榜上的名次——获取成员的排名，简单直观',
    sections: [
      { title: 'ZRANK 命令', content: 'ZRANK 命令的典型用法：\n\n1. 获取成员的排名：\n   - ZRANK key member\n   - 返回值：排名（从 0 开始）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(log N)）\n   - 适合排行榜' },
      { title: 'ZRANK 最佳实践', content: 'ZRANK 命令的最佳实践：\n\n1. 合理使用排名：\n   - 排名从 0 开始\n   - 注意排名顺序（升序或降序）\n\n2. 使用 ZRANK：\n   - ZRANK key member\n   - 获取成员的排名\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'ZRANK 返回 nil', cause: '1) 成员不存在 2) 键不存在 3) 权限问题。', fix: '检查成员是否存在；检查键是否存在；检查权限。' },
      { symptom: 'ZRANK 返回错误', cause: '1) 成员不存在 2) 权限问题 3) 键名太长。', fix: '检查成员是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 ZRANK 获取成员的排名', hint: 'ZRANK key member', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\n\n# 获取成员的排名\nZRANK leaderboard player:123\n# 返回：0（第 1 名，从 0 开始）\n\nZRANK leaderboard player:456\n# 返回：1（第 2 名，从 0 开始）' },
      { level: '进阶', task: '使用 ZREVRANK 获取成员的排名（降序）', hint: 'ZREVRANK key member', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\n\n# 获取成员的排名（降序）\nZREVRANK leaderboard player:456\n# 返回：0（第 1 名，从 0 开始）\n\nZREVRANK leaderboard player:123\n# 返回：1（第 2 名，从 0 开始）' }
    ]
  },

  "m0FZDPwNE71zcwM_gUwz0": {
    mentalModel: 'ZREM 命令就像从排行榜中删除成员——删除指定的成员，简单直观',
    sections: [
      { title: 'ZREM 命令', content: 'ZREM 命令的典型用法：\n\n1. 删除成员：\n   - ZREM key member\n   - ZREM key member1 member2（批量删除）\n\n2. 返回值：\n   - 删除的成员数量\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(log N)）\n   - 适合排行榜' },
      { title: 'ZREM 最佳实践', content: 'ZREM 命令的最佳实践：\n\n1. 合理删除成员：\n   - 删除不需要的成员\n   - 避免误删\n\n2. 使用批量删除：\n   - ZREM key member1 member2\n   - 提升性能\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'ZREM 失败', cause: '1) 成员不存在 2) 权限问题 3) 键名太长。', fix: '检查成员是否存在；检查权限；避免太长的键名。' },
      { symptom: 'ZREM 后成员仍然存在', cause: '1) 没有删除成功 2) 成员名拼写错误 3) 权限问题。', fix: '检查成员是否存在；检查成员名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 ZREM 删除成员', hint: 'ZREM key member', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\n\n# 删除成员\nZREM leaderboard player:123\n# 返回：1（成功删除 1 个成员）\n\n# 获取排行榜\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：[("player:456", 200)]' },
      { level: '进阶', task: '使用 ZREM 批量删除成员', hint: 'ZREM key member1 member2', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\nZADD leaderboard 300 player:789\n\n# 批量删除成员\nZREM leaderboard player:123 player:456\n# 返回：2（成功删除 2 个成员）\n\n# 获取排行榜\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：[("player:789", 300)]' }
    ]
  },

  "xUKoQps69FFQrJeuhD1pz": {
    mentalModel: 'SADD 命令就像往集合里添加成员——添加指定的成员，简单直观',
    sections: [
      { title: 'SADD 命令', content: 'SADD 命令的典型用法：\n\n1. 添加成员：\n   - SADD key member\n   - SADD key member1 member2（批量添加）\n\n2. 返回值：\n   - 新增的成员数量\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合标签、好友关系' },
      { title: 'SADD 最佳实践', content: 'SADD 命令的最佳实践：\n\n1. 合理添加成员：\n   - 添加有意义的成员\n   - 避免太多成员\n\n2. 使用批量添加：\n   - SADD key member1 member2\n   - 提升性能\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SADD 失败', cause: '1) 成员已存在 2) 权限问题 3) 键名太长。', fix: '检查成员是否已存在；检查权限；避免太长的键名。' },
      { symptom: 'SADD 后成员不存在', cause: '1) 没有添加成功 2) 成员名拼写错误 3) 权限问题。', fix: '检查成员是否存在；检查成员名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SADD 添加成员', hint: 'SADD key member', answer: '# 添加成员\nSADD article:123:tags "redis"\n# 返回：1（新增 1 个成员）\n\n# 获取成员\nSMEMBERS article:123:tags\n# 返回：["redis"]' },
      { level: '进阶', task: '使用 SADD 批量添加成员', hint: 'SADD key member1 member2', answer: '# 批量添加成员\nSADD article:123:tags "redis" "database" "cache"\n# 返回：3（新增 3 个成员）\n\n# 获取成员\nSMEMBERS article:123:tags\n# 返回：["redis", "database", "cache"]' }
    ]
  },

  "WQWVL5GT_scHdgfCtI7WT": {
    mentalModel: 'SREM 命令就像从集合里删除成员——删除指定的成员，简单直观',
    sections: [
      { title: 'SREM 命令', content: 'SREM 命令的典型用法：\n\n1. 删除成员：\n   - SREM key member\n   - SREM key member1 member2（批量删除）\n\n2. 返回值：\n   - 删除的成员数量\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合标签、好友关系' },
      { title: 'SREM 最佳实践', content: 'SREM 命令的最佳实践：\n\n1. 合理删除成员：\n   - 删除不需要的成员\n   - 避免误删\n\n2. 使用批量删除：\n   - SREM key member1 member2\n   - 提升性能\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SREM 失败', cause: '1) 成员不存在 2) 权限问题 3) 键名太长。', fix: '检查成员是否存在；检查权限；避免太长的键名。' },
      { symptom: 'SREM 后成员仍然存在', cause: '1) 没有删除成功 2) 成员名拼写错误 3) 权限问题。', fix: '检查成员是否存在；检查成员名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SREM 删除成员', hint: 'SREM key member', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\n\n# 删除成员\nSREM article:123:tags "redis"\n# 返回：1（成功删除 1 个成员）\n\n# 获取成员\nSMEMBERS article:123:tags\n# 返回：["database", "cache"]' },
      { level: '进阶', task: '使用 SREM 批量删除成员', hint: 'SREM key member1 member2', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\n\n# 批量删除成员\nSREM article:123:tags "redis" "database"\n# 返回：2（成功删除 2 个成员）\n\n# 获取成员\nSMEMBERS article:123:tags\n# 返回：["cache"]' }
    ]
  },

  "Kq7G89KaZZMFkrH-9WZoS": {
    mentalModel: 'LPUSH 命令就像往列表左端添加元素——先进先出，适合消息队列',
    sections: [
      { title: 'LPUSH 命令', content: 'LPUSH 命令的典型用法：\n\n1. 添加元素：\n   - LPUSH key value\n   - LPUSH key value1 value2（批量添加）\n\n2. 返回值：\n   - 列表长度\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合消息队列' },
      { title: 'LPUSH 最佳实践', content: 'LPUSH 命令的最佳实践：\n\n1. 合理添加元素：\n   - 添加有意义的元素\n   - 避免太多元素\n\n2. 使用批量添加：\n   - LPUSH key value1 value2\n   - 提升性能\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'LPUSH 失败', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' },
      { symptom: 'LPUSH 后元素不存在', cause: '1) 没有添加成功 2) 元素名拼写错误 3) 权限问题。', fix: '检查元素是否存在；检查元素名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 LPUSH 添加元素', hint: 'LPUSH key value', answer: '# 添加元素\nLPUSH queue "message1"\n# 返回：1（列表长度）\n\n# 获取元素\nLRANGE queue 0 -1\n# 返回：["message1"]' },
      { level: '进阶', task: '使用 LPUSH 批量添加元素', hint: 'LPUSH key value1 value2', answer: '# 批量添加元素\nLPUSH queue "message1" "message2" "message3"\n# 返回：3（列表长度）\n\n# 获取元素\nLRANGE queue 0 -1\n# 返回：["message3", "message2", "message1"]（先进先出）' }
    ]
  },

  "jC8G1o7yFj7D_PGmOIgcD": {
    mentalModel: 'RPUSH 命令就像往列表右端添加元素——先进先出，适合消息队列',
    sections: [
      { title: 'RPUSH 命令', content: 'RPUSH 命令的典型用法：\n\n1. 添加元素：\n   - RPUSH key value\n   - RPUSH key value1 value2（批量添加）\n\n2. 返回值：\n   - 列表长度\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合消息队列' },
      { title: 'RPUSH 最佳实践', content: 'RPUSH 命令的最佳实践：\n\n1. 合理添加元素：\n   - 添加有意义的元素\n   - 避免太多元素\n\n2. 使用批量添加：\n   - RPUSH key value1 value2\n   - 提升性能\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'RPUSH 失败', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' },
      { symptom: 'RPUSH 后元素不存在', cause: '1) 没有添加成功 2) 元素名拼写错误 3) 权限问题。', fix: '检查元素是否存在；检查元素名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RPUSH 添加元素', hint: 'RPUSH key value', answer: '# 添加元素\nRPUSH queue "message1"\n# 返回：1（列表长度）\n\n# 获取元素\nLRANGE queue 0 -1\n# 返回：["message1"]' },
      { level: '进阶', task: '使用 RPUSH 批量添加元素', hint: 'RPUSH key value1 value2', answer: '# 批量添加元素\nRPUSH queue "message1" "message2" "message3"\n# 返回：3（列表长度）\n\n# 获取元素\nLRANGE queue 0 -1\n# 返回：["message1", "message2", "message3"]（先进先出）' }
    ]
  },

  "OlbixGa5RmdqEt7snY04j": {
    mentalModel: 'ZRANGEBYSCORE 命令就像按分数范围查看排行榜——获取指定分数范围的成员，简单直观',
    sections: [
      { title: 'ZRANGEBYSCORE 命令', content: 'ZRANGEBYSCORE 命令的典型用法：\n\n1. 获取指定分数范围的成员：\n   - ZRANGEBYSCORE key min max WITHSCORES\n   - ZRANGEBYSCORE key 0 100 WITHSCORES（分数 0-100 的成员）\n\n2. 返回值：\n   - 成员和分数列表\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(log N + M)）\n   - 适合排行榜' },
      { title: 'ZRANGEBYSCORE 最佳实践', content: 'ZRANGEBYSCORE 命令的最佳实践：\n\n1. 合理设置分数范围：\n   - 根据场景设置分数范围\n   - 避免范围太大\n\n2. 使用 WITHSCORES：\n   - ZRANGEBYSCORE key min max WITHSCORES\n   - 获取成员和分数\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'ZRANGEBYSCORE 返回空', cause: '1) 键不存在 2) 分数范围设置不正确 3) 权限问题。', fix: '检查键是否存在；检查分数范围设置；检查权限。' },
      { symptom: 'ZRANGEBYSCORE 返回错误', cause: '1) 分数范围设置不正确 2) 权限问题 3) 键名太长。', fix: '检查分数范围设置；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 ZRANGEBYSCORE 获取指定分数范围的成员', hint: 'ZRANGEBYSCORE key min max WITHSCORES', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\nZADD leaderboard 300 player:789\n\n# 获取指定分数范围的成员（分数 100-200）\nZRANGEBYSCORE leaderboard 100 200 WITHSCORES\n# 返回：[("player:123", 100), ("player:456", 200)]' },
      { level: '进阶', task: '使用 ZRANGEBYSCORE 获取指定分数范围的成员（带限制）', hint: 'ZRANGEBYSCORE key min max WITHSCORES LIMIT offset count', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\nZADD leaderboard 300 player:789\n\n# 获取指定分数范围的成员（分数 100-300，限制 2 个）\nZRANGEBYSCORE leaderboard 100 300 WITHSCORES LIMIT 0 2\n# 返回：[("player:123", 100), ("player:456", 200)]' }
    ]
  },

  "mQ0ILns53n1By0Tq6xSZI": {
    mentalModel: 'SMEMBERS 命令就像查看集合里的所有成员——获取所有成员，简单直观',
    sections: [
      { title: 'SMEMBERS 命令', content: 'SMEMBERS 命令的典型用法：\n\n1. 获取所有成员：\n   - SMEMBERS key\n   - 返回值：成员列表\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合标签、好友关系' },
      { title: 'SMEMBERS 最佳实践', content: 'SMEMBERS 命令的最佳实践：\n\n1. 合理获取成员：\n   - 获取所有成员\n   - 避免成员太多\n\n2. 使用 SMEMBERS：\n   - SMEMBERS key\n   - 获取所有成员\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SMEMBERS 返回空', cause: '1) 键不存在 2) 成员不存在 3) 权限问题。', fix: '检查键是否存在；检查成员是否存在；检查权限。' },
      { symptom: 'SMEMBERS 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SMEMBERS 获取所有成员', hint: 'SMEMBERS key', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\n\n# 获取所有成员\nSMEMBERS article:123:tags\n# 返回：["redis", "database", "cache"]' },
      { level: '进阶', task: '使用 SMEMBERS 批量获取多个集合的成员', hint: 'SMEMBERS key', answer: '# 添加成员\nSADD article:123:tags "redis" "database"\nSADD article:456:tags "cache" "nosql"\n\n# 批量获取多个集合的成员\nkeys = ["article:123:tags", "article:456:tags"]\nfor key in keys:\n    members = redis.smembers(key)\n    print(f"{key}: {members}")\n\n# 输出：\n# article:123:tags: ["redis", "database"]\n# article:456:tags: ["cache", "nosql"]' }
    ]
  },

  "voa61RTWMJD3Sk8DNJoVQ": {
    mentalModel: 'LPOP 命令就像从列表左端删除元素——删除并返回左端的元素，简单直观',
    sections: [
      { title: 'LPOP 命令', content: 'LPOP 命令的典型用法：\n\n1. 删除并返回左端的元素：\n   - LPOP key\n   - 返回值：左端的元素（存在）或 nil（不存在）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合消息队列' },
      { title: 'LPOP 最佳实践', content: 'LPOP 命令的最佳实践：\n\n1. 合理删除元素：\n   - 删除左端的元素\n   - 避免误删\n\n2. 使用 LPOP：\n   - LPOP key\n   - 删除并返回左端的元素\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'LPOP 返回 nil', cause: '1) 键不存在 2) 列表为空 3) 权限问题。', fix: '检查键是否存在；检查列表是否为空；检查权限。' },
      { symptom: 'LPOP 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 LPOP 删除并返回左端的元素', hint: 'LPOP key', answer: '# 添加元素\nLPUSH queue "message1" "message2" "message3"\n\n# 删除并返回左端的元素\nLPOP queue\n# 返回："message3"（左端的元素）\n\n# 获取剩余元素\nLRANGE queue 0 -1\n# 返回：["message2", "message1"]' },
      { level: '进阶', task: '使用 LPOP 实现消息队列', hint: 'LPUSH key value, LPOP key', answer: '# 生产者\nLPUSH queue "message1"\nLPUSH queue "message2"\n\n# 消费者\nLPOP queue\n# 返回："message2"（先进先出）\n\nLPOP queue\n# 返回："message1"' }
    ]
  },

  "brUGqWZ287EWtvl9uUbNt": {
    mentalModel: 'RPOP 命令就像从列表右端删除元素——删除并返回右端的元素，简单直观',
    sections: [
      { title: 'RPOP 命令', content: 'RPOP 命令的典型用法：\n\n1. 删除并返回右端的元素：\n   - RPOP key\n   - 返回值：右端的元素（存在）或 nil（不存在）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合消息队列' },
      { title: 'RPOP 最佳实践', content: 'RPOP 命令的最佳实践：\n\n1. 合理删除元素：\n   - 删除右端的元素\n   - 避免误删\n\n2. 使用 RPOP：\n   - RPOP key\n   - 删除并返回右端的元素\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'RPOP 返回 nil', cause: '1) 键不存在 2) 列表为空 3) 权限问题。', fix: '检查键是否存在；检查列表是否为空；检查权限。' },
      { symptom: 'RPOP 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RPOP 删除并返回右端的元素', hint: 'RPOP key', answer: '# 添加元素\nRPUSH queue "message1" "message2" "message3"\n\n# 删除并返回右端的元素\nRPOP queue\n# 返回："message3"（右端的元素）\n\n# 获取剩余元素\nLRANGE queue 0 -1\n# 返回：["message1", "message2"]' },
      { level: '进阶', task: '使用 RPOP 实现消息队列', hint: 'RPUSH key value, RPOP key', answer: '# 生产者\nRPUSH queue "message1"\nRPUSH queue "message2"\n\n# 消费者\nRPOP queue\n# 返回："message2"（先进先出）\n\nRPOP queue\n# 返回："message1"' }
    ]
  },

  "W4v7FIQr2k-Vbm-HdfKog": {
    mentalModel: 'ZINCRBY 命令就像给排行榜里的成员加分——增加指定的分数，简单直观',
    sections: [
      { title: 'ZINCRBY 命令', content: 'ZINCRBY 命令的典型用法：\n\n1. 增加成员的分数：\n   - ZINCRBY key increment member\n   - 返回值：增加后的分数\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(log N)）\n   - 适合排行榜' },
      { title: 'ZINCRBY 最佳实践', content: 'ZINCRBY 命令的最佳实践：\n\n1. 合理增加分数：\n   - 根据场景增加分数\n   - 避免分数溢出\n\n2. 使用 ZINCRBY：\n   - ZINCRBY key increment member\n   - 增加成员的分数\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'ZINCRBY 失败', cause: '1) 成员不存在 2) 分数不是数字 3) 权限问题。', fix: '检查成员是否存在；确保分数是数字；检查权限。' },
      { symptom: 'ZINCRBY 后分数不正确', cause: '1) 分数设置不正确 2) 成员名拼写错误 3) 权限问题。', fix: '检查分数是否正确；检查成员名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 ZINCRBY 增加成员的分数', hint: 'ZINCRBY key increment member', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\n\n# 增加成员的分数\nZINCRBY leaderboard 50 player:123\n# 返回：150（增加后的分数）\n\n# 获取排行榜\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：[("player:123", 150)]' },
      { level: '进阶', task: '使用 ZINCRBY 批量增加成员的分数', hint: 'ZINCRBY key increment member', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\n\n# 批量增加成员的分数\nZINCRBY leaderboard 50 player:123\nZINCRBY leaderboard 100 player:456\n\n# 获取排行榜\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：[("player:456", 300), ("player:123", 150)]' }
    ]
  },

  "O-fZM_U-tW0pYtNzN_8Ax": {
    mentalModel: 'ZCOUNT 命令就像统计排行榜里的成员数量——统计指定分数范围的成员数量，简单直观',
    sections: [
      { title: 'ZCOUNT 命令', content: 'ZCOUNT 命令的典型用法：\n\n1. 统计指定分数范围的成员数量：\n   - ZCOUNT key min max\n   - 返回值：成员数量\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(log N)）\n   - 适合排行榜' },
      { title: 'ZCOUNT 最佳实践', content: 'ZCOUNT 命令的最佳实践：\n\n1. 合理设置分数范围：\n   - 根据场景设置分数范围\n   - 避免范围太大\n\n2. 使用 ZCOUNT：\n   - ZCOUNT key min max\n   - 统计指定分数范围的成员数量\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'ZCOUNT 返回 0', cause: '1) 键不存在 2) 分数范围设置不正确 3) 权限问题。', fix: '检查键是否存在；检查分数范围设置；检查权限。' },
      { symptom: 'ZCOUNT 返回错误', cause: '1) 分数范围设置不正确 2) 权限问题 3) 键名太长。', fix: '检查分数范围设置；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 ZCOUNT 统计指定分数范围的成员数量', hint: 'ZCOUNT key min max', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\nZADD leaderboard 300 player:789\n\n# 统计指定分数范围的成员数量（分数 100-200）\nZCOUNT leaderboard 100 200\n# 返回：2（2 个成员）' },
      { level: '进阶', task: '使用 ZCOUNT 统计所有成员数量', hint: 'ZCOUNT key -inf +inf', answer: '# 添加成员和分数\nZADD leaderboard 100 player:123\nZADD leaderboard 200 player:456\nZADD leaderboard 300 player:789\n\n# 统计所有成员数量\nZCOUNT leaderboard -inf +inf\n# 返回：3（3 个成员）' }
    ]
  },

  "Ji5ghlcGJtlmErHFqVf3d": {
    mentalModel: 'SISMEMBER 命令就像检查集合里是否有某个成员——检查指定的成员是否存在，简单直观',
    sections: [
      { title: 'SISMEMBER 命令', content: 'SISMEMBER 命令的典型用法：\n\n1. 检查成员是否存在：\n   - SISMEMBER key member\n   - 返回值：1（存在）或 0（不存在）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合标签、好友关系' },
      { title: 'SISMEMBER 最佳实践', content: 'SISMEMBER 命令的最佳实践：\n\n1. 合理检查成员：\n   - 检查成员是否存在\n   - 避免误判\n\n2. 使用 SISMEMBER：\n   - SISMEMBER key member\n   - 检查成员是否存在\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SISMEMBER 返回 0', cause: '1) 成员不存在 2) 键不存在 3) 权限问题。', fix: '检查成员是否存在；检查键是否存在；检查权限。' },
      { symptom: 'SISMEMBER 返回错误', cause: '1) 成员不存在 2) 权限问题 3) 键名太长。', fix: '检查成员是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SISMEMBER 检查成员是否存在', hint: 'SISMEMBER key member', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\n\n# 检查成员是否存在\nSISMEMBER article:123:tags "redis"\n# 返回：1（存在）\n\nSISMEMBER article:123:tags "nosql"\n# 返回：0（不存在）' },
      { level: '进阶', task: '使用 SISMEMBER 批量检查成员是否存在', hint: 'SISMEMBER key member', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\n\n# 批量检查成员是否存在\nmembers = ["redis", "database", "cache", "nosql"]\nfor member in members:\n    exists = redis.sismember("article:123:tags", member)\n    print(f"{member}: {exists}")\n\n# 输出：\n# redis: 1\n# database: 1\n# cache: 1\n# nosql: 0' }
    ]
  },

  "8JTtBy6oD2wFYDizVkcVa": {
    mentalModel: 'LRANGE 命令就像查看列表里的元素——获取指定范围的元素，简单直观',
    sections: [
      { title: 'LRANGE 命令', content: 'LRANGE 命令的典型用法：\n\n1. 获取指定范围的元素：\n   - LRANGE key start stop\n   - LRANGE key 0 -1（所有元素）\n\n2. 返回值：\n   - 元素列表\n\n3. 优势：\n   - 简单易用\n   - 高性能（O(S+N)）\n   - 适合消息队列' },
      { title: 'LRANGE 最佳实践', content: 'LRANGE 命令的最佳实践：\n\n1. 合理设置范围：\n   - 根据场景设置范围\n   - 避免范围太大\n\n2. 使用 LRANGE：\n   - LRANGE key start stop\n   - 获取指定范围的元素\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'LRANGE 返回空', cause: '1) 键不存在 2) 范围设置不正确 3) 权限问题。', fix: '检查键是否存在；检查范围设置；检查权限。' },
      { symptom: 'LRANGE 返回错误', cause: '1) 范围设置不正确 2) 权限问题 3) 键名太长。', fix: '检查范围设置；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 LRANGE 获取所有元素', hint: 'LRANGE key 0 -1', answer: '# 添加元素\nRPUSH queue "message1" "message2" "message3"\n\n# 获取所有元素\nLRANGE queue 0 -1\n# 返回：["message1", "message2", "message3"]' },
      { level: '进阶', task: '使用 LRANGE 获取指定范围的元素', hint: 'LRANGE key start stop', answer: '# 添加元素\nRPUSH queue "message1" "message2" "message3" "message4" "message5"\n\n# 获取指定范围的元素（第 2-4 个）\nLRANGE queue 1 3\n# 返回：["message2", "message3", "message4"]' }
    ]
  },

  "hBFEUXtuzUTzWZKp2qWaZ": {
    mentalModel: 'LINDEX 命令就像查看列表里指定位置的元素——获取指定位置的元素，简单直观',
    sections: [
      { title: 'LINDEX 命令', content: 'LINDEX 命令的典型用法：\n\n1. 获取指定位置的元素：\n   - LINDEX key index\n   - 返回值：指定位置的元素（存在）或 nil（不存在）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合消息队列' },
      { title: 'LINDEX 最佳实践', content: 'LINDEX 命令的最佳实践：\n\n1. 合理设置位置：\n   - 根据场景设置位置\n   - 避免位置太大\n\n2. 使用 LINDEX：\n   - LINDEX key index\n   - 获取指定位置的元素\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'LINDEX 返回 nil', cause: '1) 键不存在 2) 位置超出范围 3) 权限问题。', fix: '检查键是否存在；检查位置是否超出范围；检查权限。' },
      { symptom: 'LINDEX 返回错误', cause: '1) 位置超出范围 2) 权限问题 3) 键名太长。', fix: '检查位置是否超出范围；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 LINDEX 获取指定位置的元素', hint: 'LINDEX key index', answer: '# 添加元素\nRPUSH queue "message1" "message2" "message3"\n\n# 获取指定位置的元素（第 2 个）\nLINDEX queue 1\n# 返回："message2"' },
      { level: '进阶', task: '使用 LINDEX 获取列表的第一个和最后一个元素', hint: 'LINDEX key 0, LINDEX key -1', answer: '# 添加元素\nRPUSH queue "message1" "message2" "message3"\n\n# 获取第一个元素\nLINDEX queue 0\n# 返回："message1"\n\n# 获取最后一个元素\nLINDEX queue -1\n# 返回："message3"' }
    ]
  },

  "o6e_CwxfPoU6qkfWkwKwj": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "5aLfNBewK4Dx017qVNO3T": {
    mentalModel: 'SINTER 命令就像求两个集合的交集——获取两个集合的共同成员，简单直观',
    sections: [
      { title: 'SINTER 命令', content: 'SINTER 命令的典型用法：\n\n1. 获取两个集合的交集：\n   - SINTER key1 key2\n   - 返回值：共同成员列表\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N*M)）\n   - 适合标签、好友关系' },
      { title: 'SINTER 最佳实践', content: 'SINTER 命令的最佳实践：\n\n1. 合理设置集合：\n   - 根据场景设置集合\n   - 避免集合太大\n\n2. 使用 SINTER：\n   - SINTER key1 key2\n   - 获取两个集合的交集\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SINTER 返回空', cause: '1) 键不存在 2) 没有共同成员 3) 权限问题。', fix: '检查键是否存在；检查是否有共同成员；检查权限。' },
      { symptom: 'SINTER 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SINTER 获取两个集合的交集', hint: 'SINTER key1 key2', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\nSADD article:456:tags "redis" "nosql"\n\n# 获取两个集合的交集\nSINTER article:123:tags article:456:tags\n# 返回：["redis"]' },
      { level: '进阶', task: '使用 SINTER 获取多个集合的交集', hint: 'SINTER key1 key2 key3', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\nSADD article:456:tags "redis" "nosql"\nSADD article:789:tags "redis" "cache"\n\n# 获取多个集合的交集\nSINTER article:123:tags article:456:tags article:789:tags\n# 返回：["redis"]' }
    ]
  },

  "2gZL4a9aWGKWLa89iyHTc": {
    mentalModel: 'SCARD 命令就像统计集合里的成员数量——统计集合的成员数量，简单直观',
    sections: [
      { title: 'SCARD 命令', content: 'SCARD 命令的典型用法：\n\n1. 统计集合的成员数量：\n   - SCARD key\n   - 返回值：成员数量\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合标签、好友关系' },
      { title: 'SCARD 最佳实践', content: 'SCARD 命令的最佳实践：\n\n1. 合理统计成员：\n   - 统计集合的成员数量\n   - 避免成员太多\n\n2. 使用 SCARD：\n   - SCARD key\n   - 统计集合的成员数量\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SCARD 返回 0', cause: '1) 键不存在 2) 集合为空 3) 权限问题。', fix: '检查键是否存在；检查集合是否为空；检查权限。' },
      { symptom: 'SCARD 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCARD 统计集合的成员数量', hint: 'SCARD key', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\n\n# 统计集合的成员数量\nSCARD article:123:tags\n# 返回：3（3 个成员）' },
      { level: '进阶', task: '使用 SCARD 批量统计多个集合的成员数量', hint: 'SCARD key', answer: '# 添加成员\nSADD article:123:tags "redis" "database"\nSADD article:456:tags "cache" "nosql"\n\n# 批量统计多个集合的成员数量\nkeys = ["article:123:tags", "article:456:tags"]\nfor key in keys:\n    count = redis.scard(key)\n    print(f"{key}: {count}")\n\n# 输出：\n# article:123:tags: 2\n# article:456:tags: 2' }
    ]
  },

  "4oCcP9FxDJSDMHCEVBCNa": {
    mentalModel: 'LLEN 命令就像统计列表里的元素数量——统计列表的元素数量，简单直观',
    sections: [
      { title: 'LLEN 命令', content: 'LLEN 命令的典型用法：\n\n1. 统计列表的元素数量：\n   - LLEN key\n   - 返回值：元素数量\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合消息队列' },
      { title: 'LLEN 最佳实践', content: 'LLEN 命令的最佳实践：\n\n1. 合理统计元素：\n   - 统计列表的元素数量\n   - 避免元素太多\n\n2. 使用 LLEN：\n   - LLEN key\n   - 统计列表的元素数量\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'LLEN 返回 0', cause: '1) 键不存在 2) 列表为空 3) 权限问题。', fix: '检查键是否存在；检查列表是否为空；检查权限。' },
      { symptom: 'LLEN 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 LLEN 统计列表的元素数量', hint: 'LLEN key', answer: '# 添加元素\nRPUSH queue "message1" "message2" "message3"\n\n# 统计列表的元素数量\nLLEN queue\n# 返回：3（3 个元素）' },
      { level: '进阶', task: '使用 LLEN 批量统计多个列表的元素数量', hint: 'LLEN key', answer: '# 添加元素\nRPUSH queue1 "message1" "message2"\nRPUSH queue2 "message3" "message4" "message5"\n\n# 批量统计多个列表的元素数量\nkeys = ["queue1", "queue2"]\nfor key in keys:\n    count = redis.llen(key)\n    print(f"{key}: {count}")\n\n# 输出：\n# queue1: 2\n# queue2: 3' }
    ]
  },

  "9KvHcS5F4Jj5ZXgIAdOQY": {
    mentalModel: 'LMOVE 命令就像把元素从一个列表移动到另一个列表——简单直观',
    sections: [
      { title: 'LMOVE 命令', content: 'LMOVE 命令的典型用法：\n\n1. 把元素从一个列表移动到另一个列表：\n   - LMOVE source destination LEFT|RIGHT LEFT|RIGHT\n   - 返回值：移动的元素\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合消息队列' },
      { title: 'LMOVE 最佳实践', content: 'LMOVE 命令的最佳实践：\n\n1. 合理移动元素：\n   - 根据场景移动元素\n   - 避免误移\n\n2. 使用 LMOVE：\n   - LMOVE source destination LEFT|RIGHT LEFT|RIGHT\n   - 把元素从一个列表移动到另一个列表\n\n3. 监控：\n   - 监控列表长度\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'LMOVE 返回 nil', cause: '1) 源列表为空 2) 键不存在 3) 权限问题。', fix: '检查源列表是否为空；检查键是否存在；检查权限。' },
      { symptom: 'LMOVE 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 LMOVE 把元素从一个列表移动到另一个列表', hint: 'LMOVE source destination LEFT|RIGHT LEFT|RIGHT', answer: '# 添加元素\nRPUSH queue1 "message1" "message2" "message3"\n\n# 把元素从 queue1 移动到 queue2（从左到右）\nLMOVE queue1 queue2 LEFT RIGHT\n# 返回："message1"\n\n# 获取剩余元素\nLRANGE queue1 0 -1\n# 返回：["message2", "message3"]\n\nLRANGE queue2 0 -1\n# 返回：["message1"]' },
      { level: '进阶', task: '使用 LMOVE 实现消息队列', hint: 'LMOVE source destination LEFT|RIGHT LEFT|RIGHT', answer: '# 生产者\nRPUSH queue "message1"\nRPUSH queue "message2"\n\n# 消费者（从 queue 移动到 processing）\nLMOVE queue processing LEFT RIGHT\n# 返回："message1"\n\n# 处理完成后，从 processing 删除\nRPOP processing\n# 返回："message1"' }
    ]
  },

  "6QoYa-N2BKNBaRtvNeVNm": {
    mentalModel: 'SUNION 命令就像求两个集合的并集——获取两个集合的所有成员，简单直观',
    sections: [
      { title: 'SUNION 命令', content: 'SUNION 命令的典型用法：\n\n1. 获取两个集合的并集：\n   - SUNION key1 key2\n   - 返回值：所有成员列表\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合标签、好友关系' },
      { title: 'SUNION 最佳实践', content: 'SUNION 命令的最佳实践：\n\n1. 合理设置集合：\n   - 根据场景设置集合\n   - 避免集合太大\n\n2. 使用 SUNION：\n   - SUNION key1 key2\n   - 获取两个集合的并集\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SUNION 返回空', cause: '1) 键不存在 2) 集合为空 3) 权限问题。', fix: '检查键是否存在；检查集合是否为空；检查权限。' },
      { symptom: 'SUNION 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SUNION 获取两个集合的并集', hint: 'SUNION key1 key2', answer: '# 添加成员\nSADD article:123:tags "redis" "database"\nSADD article:456:tags "cache" "nosql"\n\n# 获取两个集合的并集\nSUNION article:123:tags article:456:tags\n# 返回：["redis", "database", "cache", "nosql"]' },
      { level: '进阶', task: '使用 SUNION 获取多个集合的并集', hint: 'SUNION key1 key2 key3', answer: '# 添加成员\nSADD article:123:tags "redis" "database"\nSADD article:456:tags "cache" "nosql"\nSADD article:789:tags "redis" "cache"\n\n# 获取多个集合的并集\nSUNION article:123:tags article:456:tags article:789:tags\n# 返回：["redis", "database", "cache", "nosql"]' }
    ]
  },

  "JX5ajmcUmkshTO-mLF8lH": {
    mentalModel: 'SDIFF 命令就像求两个集合的差集——获取第一个集合有但第二个集合没有的成员，简单直观',
    sections: [
      { title: 'SDIFF 命令', content: 'SDIFF 命令的典型用法：\n\n1. 获取两个集合的差集：\n   - SDIFF key1 key2\n   - 返回值：第一个集合有但第二个集合没有的成员列表\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合标签、好友关系' },
      { title: 'SDIFF 最佳实践', content: 'SDIFF 命令的最佳实践：\n\n1. 合理设置集合：\n   - 根据场景设置集合\n   - 避免集合太大\n\n2. 使用 SDIFF：\n   - SDIFF key1 key2\n   - 获取两个集合的差集\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SDIFF 返回空', cause: '1) 键不存在 2) 第一个集合没有但第二个集合有的成员 3) 权限问题。', fix: '检查键是否存在；检查是否有差集成员；检查权限。' },
      { symptom: 'SDIFF 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SDIFF 获取两个集合的差集', hint: 'SDIFF key1 key2', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\nSADD article:456:tags "redis" "nosql"\n\n# 获取两个集合的差集（article:123 有但 article:456 没有的成员）\nSDIFF article:123:tags article:456:tags\n# 返回：["database", "cache"]' },
      { level: '进阶', task: '使用 SDIFF 获取多个集合的差集', hint: 'SDIFF key1 key2 key3', answer: '# 添加成员\nSADD article:123:tags "redis" "database" "cache"\nSADD article:456:tags "redis" "nosql"\nSADD article:789:tags "redis" "cache"\n\n# 获取多个集合的差集（article:123 有但 article:456 和 article:789 没有的成员）\nSDIFF article:123:tags article:456:tags article:789:tags\n# 返回：["database"]' }
    ]
  },

  "eBeEUYY-IL_CMkcm31lUL": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "lxevY15ZyP43s_JrEqMX7": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "jCaVx5wvsvuyqtwh6m8si": {
    mentalModel: 'Naming Conventions 就像 Redis 的命名规范——合理的命名让系统更易维护',
    sections: [
      { title: '命名规范', content: 'Redis 的命名规范：\n\n1. 键命名规范：\n   - 使用有意义的键名\n   - 使用冒号分隔层级（如 user:123:profile）\n   - 避免太长的键名（>100 字节浪费内存）\n   - 避免特殊字符（空格、换行、引号）\n\n2. 字段命名规范：\n   - 使用有意义的字段名\n   - 避免太长的字段名\n   - 使用驼峰命名或下划线命名\n\n3. 优势：\n   - 系统更易维护\n   - 避免命名冲突\n   - 提升可读性' },
      { title: '命名规范最佳实践', content: 'Redis 命名规范的最佳实践：\n\n1. 合理命名键：\n   - 使用有意义的键名\n   - 使用冒号分隔层级\n   - 避免太长的键名\n\n2. 合理命名字段：\n   - 使用有意义的字段名\n   - 避免太长的字段名\n   - 使用驼峰命名或下划线命名\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命名不规范', cause: '1) 使用了无意义的键名 2) 使用了太长的键名 3) 使用了特殊字符。', fix: '使用有意义的键名；避免太长的键名；避免特殊字符。' },
      { symptom: '命名冲突', cause: '1) 使用了相同的键名 2) 没有使用冒号分隔层级 3) 没有使用命名规范。', fix: '使用不同的键名；使用冒号分隔层级；使用命名规范。' }
    ],
    exercises: [
      { level: '基础', task: '使用命名规范命名键', hint: 'user:123:profile', answer: '# 使用命名规范命名键\nSET user:123:profile "Alice"\nSET user:123:age 30\nSET user:123:email "alice@example.com"' },
      { level: '进阶', task: '使用命名规范命名字段', hint: 'user:123:profile', answer: '# 使用命名规范命名字段\nHSET user:123 name "Alice"\nHSET user:123 age 30\nHSET user:123 email "alice@example.com"' }
    ]
  },

  "2SG4Hr9Tuv6cxmGkrKjYZ": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "b48EUyFGUeSjtT5fOa_m6": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "XTwNCCtzXvZMdaex4gZEh": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "UlQHqw1dbxZnAKbsWsOgU": {
    mentalModel: 'Retrieval by Pattern 就像按模式查找键——使用通配符查找键，简单直观',
    sections: [
      { title: '按模式查找', content: 'Redis 的按模式查找：\n\n1. KEYS pattern：\n   - KEYS user:*（查找所有 user: 开头的键）\n   - 返回值：匹配的键列表\n   - 不推荐生产使用（会阻塞主线程）\n\n2. SCAN cursor MATCH pattern：\n   - SCAN 0 MATCH user:* COUNT 100\n   - 返回值：cursor 和匹配的键列表\n   - 推荐生产使用（不会阻塞主线程）\n\n3. 优势：\n   - 简单易用\n   - 适合查找键' },
      { title: '按模式查找最佳实践', content: '按模式查找的最佳实践：\n\n1. 使用 SCAN 代替 KEYS：\n   - SCAN cursor MATCH pattern COUNT 100\n   - 避免使用 KEYS pattern（会阻塞主线程）\n\n2. 合理设置模式：\n   - 使用有意义的模式\n   - 避免太复杂的模式\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'KEYS 命令导致 Redis 卡顿', cause: 'KEYS 是 O(N) 命令，会遍历所有键，数据量大时阻塞主线程。', fix: '使用 SCAN cursor MATCH pattern COUNT 100（不会阻塞主线程）。' },
      { symptom: 'SCAN 返回空', cause: '1) 没有匹配的键 2) 模式设置不正确 3) 权限问题。', fix: '检查是否有匹配的键；检查模式设置；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 KEYS 查找键', hint: 'KEYS pattern', answer: '# 查找所有 user: 开头的键\nKEYS user:*\n# 返回：["user:123", "user:456", ...]' },
      { level: '进阶', task: '使用 SCAN 查找键', hint: 'SCAN cursor MATCH pattern COUNT 100', answer: '# 查找所有 user: 开头的键\nSCAN 0 MATCH user:* COUNT 100\n# 返回：cursor 和匹配的键列表\n\n# 继续扫描\nSCAN cursor MATCH user:* COUNT 100\n# 返回：cursor 和匹配的键列表' }
    ]
  },

  "jrgaoDnt_RxTu79hk4hCD": {
    mentalModel: 'Atomicity in Redis 就像 Redis 的原子性——命令要么全部执行，要么全部不执行',
    sections: [
      { title: '原子性', content: 'Redis 的原子性：\n\n1. 单命令原子性：\n   - Redis 单命令是原子的\n   - INCR、DECR、SETNX 等命令是原子的\n   - 适合简单场景\n\n2. 多命令原子性：\n   - MULTI/EXEC 事务\n   - Lua 脚本\n   - 适合复杂场景\n\n3. 优势：\n   - 保证数据一致性\n   - 避免并发问题' },
      { title: '原子性最佳实践', content: 'Redis 原子性的最佳实践：\n\n1. 使用原子命令：\n   - INCR、DECR、SETNX 等命令是原子的\n   - 适合简单场景\n\n2. 使用事务：\n   - MULTI/EXEC 事务\n   - 适合复杂场景\n\n3. 使用 Lua 脚本：\n   - Lua 脚本是原子的\n   - 适合复杂场景\n\n4. 监控：\n   - 监控命令执行情况\n   - 避免并发问题' }
    ],
    diagnosis: [
      { symptom: '并发问题', cause: '1) 没有使用原子命令 2) 没有使用事务 3) 没有使用 Lua 脚本。', fix: '使用原子命令；使用事务；使用 Lua 脚本。' },
      { symptom: '数据不一致', cause: '1) 没有使用原子命令 2) 没有使用事务 3) 没有使用 Lua 脚本。', fix: '使用原子命令；使用事务；使用 Lua 脚本。' }
    ],
    exercises: [
      { level: '基础', task: '使用 INCR 实现原子递增', hint: 'INCR key', answer: '# 原子递增\nINCR counter\n# 返回：1\n\nINCR counter\n# 返回：2' },
      { level: '进阶', task: '使用 MULTI/EXEC 实现事务', hint: 'MULTI, EXEC', answer: '# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\nSET key2 "value2"\n\n# 提交事务\nEXEC\n# 返回：["OK", "OK"]' }
    ]
  },

  "3hayYoSZepw7pppBubotg": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "OSIYDYPGz8Vgo9SU9GGH9": {
    mentalModel: 'Expiration 就像 Redis 的过期机制——设置过期时间，数据自动删除，避免数据堆积',
    sections: [
      { title: '过期机制', content: 'Redis 的过期机制：\n\n1. EXPIRE key seconds：\n   - 设置过期时间（秒）\n   - EXPIRE key 3600（1 小时后过期）\n\n2. EXPIREAT key timestamp：\n   - 设置过期时间（Unix 时间戳）\n   - EXPIREAT key 1705363200\n\n3. TTL key：\n   - 获取剩余时间（秒）\n   - TTL key\n   - 返回值：剩余秒数（存在）或 -2（键不存在）或 -1（键存在但没有过期时间）\n\n4. 优势：\n   - 自动删除过期数据\n   - 避免数据堆积\n   - 简单易用' },
      { title: '过期机制最佳实践', content: 'Redis 过期机制的最佳实践：\n\n1. 合理设置过期时间：\n   - 根据数据生命周期设置 TTL\n   - 热点数据：永不过期（后台更新）\n   - 普通数据：TTL = 300-3600 秒\n   - 冷数据：TTL = 60-300 秒\n\n2. 使用 EXPIRE：\n   - EXPIRE key seconds\n   - 设置过期时间\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '数据过早过期', cause: '1) 过期时间设置太短 2) 没有续期会话 3) 没有合理设置过期时间。', fix: '合理设置过期时间；每次请求时刷新 TTL；根据数据生命周期设置 TTL。' },
      { symptom: '数据没有过期', cause: '1) 没有设置过期时间 2) 过期时间设置太长 3) 没有合理设置过期时间。', fix: '设置过期时间；合理设置过期时间；根据数据生命周期设置 TTL。' }
    ],
    exercises: [
      { level: '基础', task: '使用 EXPIRE 设置过期时间', hint: 'EXPIRE key seconds', answer: '# 设置键值对\nSET mykey "hello"\n\n# 设置过期时间（10 秒后过期）\nEXPIRE mykey 10\n\n# 获取剩余时间\nTTL mykey\n# 返回：10（剩余 10 秒）' },
      { level: '进阶', task: '使用 EXPIREAT 设置过期时间', hint: 'EXPIREAT key timestamp', answer: '# 设置键值对\nSET mykey "hello"\n\n# 设置过期时间（Unix 时间戳）\ntimestamp = int(time.time()) + 10\nEXPIREAT mykey timestamp\n\n# 获取剩余时间\nTTL mykey\n# 返回：10（剩余 10 秒）' }
    ]
  },

  "B-YUFhPQNdr1KZNupmR5N": {
    mentalModel: 'SETBIT 命令就像设置位图里的某一位——设置指定位置的值，简单直观',
    sections: [
      { title: 'SETBIT 命令', content: 'SETBIT 命令的典型用法：\n\n1. 设置指定位置的值：\n   - SETBIT key offset value\n   - SETBIT key 100 1（设置第 100 位为 1）\n   - 返回值：原来的值\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合签到、在线状态' },
      { title: 'SETBIT 最佳实践', content: 'SETBIT 命令的最佳实践：\n\n1. 合理设置位置：\n   - 根据场景设置位置\n   - 避免位置太大\n\n2. 使用 SETBIT：\n   - SETBIT key offset value\n   - 设置指定位置的值\n\n3. 监控：\n   - 监控位图使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SETBIT 失败', cause: '1) 位置超出范围 2) 值不是 0 或 1 3) 权限问题。', fix: '检查位置是否超出范围；确保值是 0 或 1；检查权限。' },
      { symptom: 'SETBIT 后值不正确', cause: '1) 值设置不正确 2) 位置设置不正确 3) 权限问题。', fix: '检查值是否正确；检查位置是否正确；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SETBIT 设置指定位置的值', hint: 'SETBIT key offset value', answer: '# 设置指定位置的值\nSETBIT checkin:2024-01-15 100 1\n# 返回：0（原来的值）\n\n# 获取指定位置的值\nGETBIT checkin:2024-01-15 100\n# 返回：1' },
      { level: '进阶', task: '使用 SETBIT 实现签到系统', hint: 'SETBIT key offset value', answer: '# 用户签到（用户 ID 作为 offset）\nSETBIT checkin:2024-01-15 123 1\n# 返回：0（原来的值）\n\n# 检查用户是否签到\nGETBIT checkin:2024-01-15 123\n# 返回：1（已签到）' }
    ]
  },

  "0HFLJfcrcSnAVTecG3P8W": {
    mentalModel: 'GETBIT 命令就像获取位图里某一位的值——获取指定位置的值，简单直观',
    sections: [
      { title: 'GETBIT 命令', content: 'GETBIT 命令的典型用法：\n\n1. 获取指定位置的值：\n   - GETBIT key offset\n   - 返回值：指定位置的值（0 或 1）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合签到、在线状态' },
      { title: 'GETBIT 最佳实践', content: 'GETBIT 命令的最佳实践：\n\n1. 合理获取位置：\n   - 根据场景获取位置\n   - 避免位置太大\n\n2. 使用 GETBIT：\n   - GETBIT key offset\n   - 获取指定位置的值\n\n3. 监控：\n   - 监控位图使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'GETBIT 返回 0', cause: '1) 位置超出范围 2) 位置的值是 0 3) 权限问题。', fix: '检查位置是否超出范围；检查位置的值；检查权限。' },
      { symptom: 'GETBIT 返回错误', cause: '1) 位置超出范围 2) 权限问题 3) 键名太长。', fix: '检查位置是否超出范围；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 GETBIT 获取指定位置的值', hint: 'GETBIT key offset', answer: '# 设置指定位置的值\nSETBIT checkin:2024-01-15 100 1\n\n# 获取指定位置的值\nGETBIT checkin:2024-01-15 100\n# 返回：1' },
      { level: '进阶', task: '使用 GETBIT 检查用户是否签到', hint: 'GETBIT key offset', answer: '# 用户签到（用户 ID 作为 offset）\nSETBIT checkin:2024-01-15 123 1\n\n# 检查用户是否签到\nGETBIT checkin:2024-01-15 123\n# 返回：1（已签到）' }
    ]
  },

  "LHlwjN3WHYUBUafzzwsWQ": {
    mentalModel: 'Pipelining 就像 Redis 的批量操作——多个命令一次性发送，减少网络往返',
    sections: [
      { title: 'Pipelining', content: 'Redis 的 Pipelining：\n\n1. 基本概念：\n   - 多个命令一次性发送\n   - 减少网络往返\n   - 提升性能（10-100 倍）\n\n2. 常用命令：\n   - redis-cli --pipe\n   - Pipeline API（如 redis.pipeline()）\n\n3. 优势：\n   - 减少网络往返\n   - 提升性能\n   - 适合批量操作' },
      { title: 'Pipelining 最佳实践', content: 'Redis Pipelining 的最佳实践：\n\n1. 合理设置批量大小：\n   - 根据场景设置批量大小\n   - 避免批量太大\n\n2. 使用 Pipeline：\n   - redis-cli --pipe\n   - Pipeline API（如 redis.pipeline()）\n\n3. 监控：\n   - 监控命令执行情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Pipelining 性能不佳', cause: '1) 批量大小设置不合理 2) 没有使用 Pipeline 3) 没有优化命令。', fix: '合理设置批量大小；使用 Pipeline；优化命令。' },
      { symptom: 'Pipelining 执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 批量太大。', fix: '检查命令语法；检查权限；合理设置批量大小。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Pipeline 批量执行命令', hint: 'redis-cli --pipe', answer: '# 创建命令文件\ncat > commands.txt << EOF\nSET key1 value1\nSET key2 value2\nSET key3 value3\nEOF\n\n# 批量执行命令\nredis-cli --pipe < commands.txt\n# 返回：["OK", "OK", "OK"]' },
      { level: '进阶', task: '使用 Pipeline API 批量执行命令', hint: 'redis.pipeline()', answer: '# 使用 Pipeline API\npipe = redis.pipeline()\npipe.set("key1", "value1")\npipe.set("key2", "value2")\npipe.set("key3", "value3")\nresults = pipe.execute()\n# 返回：["OK", "OK", "OK"]' }
    ]
  },

  "tkrxArg_oYH0aQfM8NkD2": {
    mentalModel: 'BITOP 命令就像位图的位运算——对位图进行 AND、OR、XOR、NOT 运算',
    sections: [
      { title: 'BITOP 命令', content: 'BITOP 命令的典型用法：\n\n1. 位运算：\n   - BITOP AND destkey key1 key2（AND 运算）\n   - BITOP OR destkey key1 key2（OR 运算）\n   - BITOP XOR destkey key1 key2（XOR 运算）\n   - BITOP NOT destkey key（NOT 运算）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合签到、在线状态' },
      { title: 'BITOP 最佳实践', content: 'BITOP 命令的最佳实践：\n\n1. 合理设置位运算：\n   - 根据场景设置位运算\n   - 避免位运算太复杂\n\n2. 使用 BITOP：\n   - BITOP AND destkey key1 key2\n   - BITOP OR destkey key1 key2\n   - BITOP XOR destkey key1 key2\n   - BITOP NOT destkey key\n\n3. 监控：\n   - 监控位图使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'BITOP 失败', cause: '1) 键不存在 2) 位运算设置不正确 3) 权限问题。', fix: '检查键是否存在；检查位运算设置；检查权限。' },
      { symptom: 'BITOP 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 BITOP AND 运算', hint: 'BITOP AND destkey key1 key2', answer: '# 设置位图\nSETBIT checkin:2024-01-15:user:123 100 1\nSETBIT checkin:2024-01-16:user:123 100 1\n\n# BITOP AND 运算\nBITOP AND checkin:both checkin:2024-01-15:user:123 checkin:2024-01-16:user:123\n# 返回：1（位图长度）\n\n# 获取结果\nGETBIT checkin:both 100\n# 返回：1（两个位图都有）' },
      { level: '进阶', task: '使用 BITOP OR 运算', hint: 'BITOP OR destkey key1 key2', answer: '# 设置位图\nSETBIT checkin:2024-01-15:user:123 100 1\nSETBIT checkin:2024-01-16:user:456 200 1\n\n# BITOP OR 运算\nBITOP OR checkin:either checkin:2024-01-15:user:123 checkin:2024-01-16:user:456\n# 返回：1（位图长度）\n\n# 获取结果\nGETBIT checkin:either 100\n# 返回：1（第一个位图有）\n\nGETBIT checkin:either 200\n# 返回：1（第二个位图有）' }
    ]
  },

  "Df1Eu7CuA-ARYii9JVvnm": {
    mentalModel: 'BITPOS 命令就像查找位图里第一个指定值的位置——查找第一个 0 或 1 的位置',
    sections: [
      { title: 'BITPOS 命令', content: 'BITPOS 命令的典型用法：\n\n1. 查找第一个指定值的位置：\n   - BITPOS key value\n   - BITPOS key 1（查找第一个 1 的位置）\n   - 返回值：第一个指定值的位置\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合签到、在线状态' },
      { title: 'BITPOS 最佳实践', content: 'BITPOS 命令的最佳实践：\n\n1. 合理设置值：\n   - 根据场景设置值\n   - 避免值设置不正确\n\n2. 使用 BITPOS：\n   - BITPOS key value\n   - 查找第一个指定值的位置\n\n3. 监控：\n   - 监控位图使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'BITPOS 返回 -1', cause: '1) 没有指定的值 2) 键不存在 3) 权限问题。', fix: '检查是否有指定的值；检查键是否存在；检查权限。' },
      { symptom: 'BITPOS 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 BITPOS 查找第一个 1 的位置', hint: 'BITPOS key 1', answer: '# 设置位图\nSETBIT checkin:2024-01-15 100 1\nSETBIT checkin:2024-01-15 200 1\n\n# 查找第一个 1 的位置\nBITPOS checkin:2024-01-15 1\n# 返回：100（第一个 1 的位置）' },
      { level: '进阶', task: '使用 BITPOS 查找第一个 0 的位置', hint: 'BITPOS key 0', answer: '# 设置位图\nSETBIT checkin:2024-01-15 100 1\nSETBIT checkin:2024-01-15 200 1\n\n# 查找第一个 0 的位置\nBITPOS checkin:2024-01-15 0\n# 返回：0（第一个 0 的位置）' }
    ]
  },

  "0Q3AkE8leWAyYsww3-BHX": {
    mentalModel: 'Bitmaps 就像 Redis 的位图——用位来表示数据，适合签到、在线状态',
    sections: [
      { title: 'Bitmaps', content: 'Redis 的 Bitmaps：\n\n1. 基本概念：\n   - 用位来表示数据\n   - 适合签到、在线状态\n   - 内存节省（1 亿用户只需要 12.5MB）\n\n2. 常用命令：\n   - SETBIT key offset value\n   - GETBIT key offset\n   - BITCOUNT key\n   - BITOP AND/OR/XOR/NOT\n\n3. 优势：\n   - 内存节省\n   - 高性能\n   - 适合签到、在线状态' },
      { title: 'Bitmaps 最佳实践', content: 'Redis Bitmaps 的最佳实践：\n\n1. 合理设置位图：\n   - 根据场景设置位图\n   - 避免位图太大\n\n2. 使用 Bitmaps：\n   - SETBIT key offset value\n   - GETBIT key offset\n   - BITCOUNT key\n   - BITOP AND/OR/XOR/NOT\n\n3. 监控：\n   - 监控位图使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Bitmaps 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置位图 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置位图；监控内存使用。' },
      { symptom: 'Bitmaps 性能不佳', cause: '1) 位图太大 2) 没有使用 Pipeline 3) 没有使用 BITCOUNT。', fix: '避免位图太大；使用 Pipeline 批量执行命令；使用 BITCOUNT。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Bitmaps 实现签到系统', hint: 'SETBIT key offset value, GETBIT key offset', answer: '# 用户签到（用户 ID 作为 offset）\nSETBIT checkin:2024-01-15 123 1\n\n# 检查用户是否签到\nGETBIT checkin:2024-01-15 123\n# 返回：1（已签到）' },
      { level: '进阶', task: '使用 BITCOUNT 统计签到人数', hint: 'BITCOUNT key', answer: '# 用户签到\nSETBIT checkin:2024-01-15 123 1\nSETBIT checkin:2024-01-15 456 1\nSETBIT checkin:2024-01-15 789 1\n\n# 统计签到人数\nBITCOUNT checkin:2024-01-15\n# 返回：3（3 个用户签到）' }
    ]
  },

  "7JzeyTrkZ_1_yxMVrqvZU": {
    mentalModel: 'Batch Operations 就像 Redis 的批量操作——多个命令一次性执行，减少网络往返',
    sections: [
      { title: '批量操作', content: 'Redis 的批量操作：\n\n1. 基本概念：\n   - 多个命令一次性执行\n   - 减少网络往返\n   - 提升性能（10-100 倍）\n\n2. 常用命令：\n   - MSET key1 value1 key2 value2\n   - MGET key1 key2\n   - Pipeline API（如 redis.pipeline()）\n\n3. 优势：\n   - 减少网络往返\n   - 提升性能\n   - 适合批量操作' },
      { title: '批量操作最佳实践', content: 'Redis 批量操作的最佳实践：\n\n1. 合理设置批量大小：\n   - 根据场景设置批量大小\n   - 避免批量太大\n\n2. 使用批量操作：\n   - MSET key1 value1 key2 value2\n   - MGET key1 key2\n   - Pipeline API（如 redis.pipeline()）\n\n3. 监控：\n   - 监控命令执行情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '批量操作性能不佳', cause: '1) 批量大小设置不合理 2) 没有使用批量操作 3) 没有优化命令。', fix: '合理设置批量大小；使用批量操作；优化命令。' },
      { symptom: '批量操作执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 批量太大。', fix: '检查命令语法；检查权限；合理设置批量大小。' }
    ],
    exercises: [
      { level: '基础', task: '使用 MSET 批量设置键值对', hint: 'MSET key1 value1 key2 value2', answer: '# 批量设置键值对\nMSET key1 value1 key2 value2 key3 value3\n# 返回：OK\n\n# 批量获取键值\nMGET key1 key2 key3\n# 返回：["value1", "value2", "value3"]' },
      { level: '进阶', task: '使用 Pipeline API 批量执行命令', hint: 'redis.pipeline()', answer: '# 使用 Pipeline API\npipe = redis.pipeline()\npipe.set("key1", "value1")\npipe.set("key2", "value2")\npipe.set("key3", "value3")\nresults = pipe.execute()\n# 返回：["OK", "OK", "OK"]' }
    ]
  },

  "jpcyXSSib7q4WBPmpgnXA": {
    mentalModel: 'BITCOUNT 命令就像统计位图里 1 的数量——统计位图里 1 的数量',
    sections: [
      { title: 'BITCOUNT 命令', content: 'BITCOUNT 命令的典型用法：\n\n1. 统计位图里 1 的数量：\n   - BITCOUNT key\n   - 返回值：位图里 1 的数量\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合签到、在线状态' },
      { title: 'BITCOUNT 最佳实践', content: 'BITCOUNT 命令的最佳实践：\n\n1. 合理统计位图：\n   - 统计位图里 1 的数量\n   - 避免位图太大\n\n2. 使用 BITCOUNT：\n   - BITCOUNT key\n   - 统计位图里 1 的数量\n\n3. 监控：\n   - 监控位图使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'BITCOUNT 返回 0', cause: '1) 键不存在 2) 位图里没有 1 3) 权限问题。', fix: '检查键是否存在；检查位图里是否有 1；检查权限。' },
      { symptom: 'BITCOUNT 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 BITCOUNT 统计位图里 1 的数量', hint: 'BITCOUNT key', answer: '# 设置位图\nSETBIT checkin:2024-01-15 100 1\nSETBIT checkin:2024-01-15 200 1\nSETBIT checkin:2024-01-15 300 1\n\n# 统计位图里 1 的数量\nBITCOUNT checkin:2024-01-15\n# 返回：3（3 个 1）' },
      { level: '进阶', task: '使用 BITCOUNT 统计签到人数', hint: 'BITCOUNT key', answer: '# 用户签到\nSETBIT checkin:2024-01-15 123 1\nSETBIT checkin:2024-01-15 456 1\nSETBIT checkin:2024-01-15 789 1\n\n# 统计签到人数\nBITCOUNT checkin:2024-01-15\n# 返回：3（3 个用户签到）' }
    ]
  },

  "s7PEr-5TAm5EGJm0RSjPJ": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "4sKiAtX5aIL4NDsQkilNC": {
    mentalModel: 'XREAD 命令就像从流里读取消息——从流里读取消息，简单直观',
    sections: [
      { title: 'XREAD 命令', content: 'XREAD 命令的典型用法：\n\n1. 从流里读取消息：\n   - XREAD COUNT 10 STREAMS stream 0\n   - 返回值：消息列表\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合消息队列、事件溯源' },
      { title: 'XREAD 最佳实践', content: 'XREAD 命令的最佳实践：\n\n1. 合理设置读取数量：\n   - 根据场景设置读取数量\n   - 避免读取太多\n\n2. 使用 XREAD：\n   - XREAD COUNT 10 STREAMS stream 0\n   - 从流里读取消息\n\n3. 监控：\n   - 监控流使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'XREAD 返回空', cause: '1) 流里没有消息 2) 流不存在 3) 权限问题。', fix: '检查流里是否有消息；检查流是否存在；检查权限。' },
      { symptom: 'XREAD 返回错误', cause: '1) 流不存在 2) 权限问题 3) 流名太长。', fix: '检查流是否存在；检查权限；避免太长的流名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 XREAD 从流里读取消息', hint: 'XREAD COUNT 10 STREAMS stream 0', answer: '# 添加消息到流\nXADD stream * name Alice age 30\n\n# 从流里读取消息\nXREAD COUNT 10 STREAMS stream 0\n# 返回：消息列表' },
      { level: '进阶', task: '使用 XREAD 实现消息队列', hint: 'XADD stream * field value, XREAD COUNT 10 STREAMS stream 0', answer: '# 生产者\nXADD stream * name Alice age 30\n\n# 消费者\nXREAD COUNT 10 STREAMS stream 0\n# 返回：消息列表' }
    ]
  },

  "U3N1EgHFs1-YUaB_VrJfw": {
    mentalModel: 'GEOADD 命令就像添加地理位置——添加成员的经纬度，简单直观',
    sections: [
      { title: 'GEOADD 命令', content: 'GEOADD 命令的典型用法：\n\n1. 添加成员的经纬度：\n   - GEOADD key longitude latitude member\n   - GEOADD key 116.397428 39.90923 "Beijing"\n   - 返回值：新增的成员数量\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(log N)）\n   - 适合附近的人、距离计算' },
      { title: 'GEOADD 最佳实践', content: 'GEOADD 命令的最佳实践：\n\n1. 合理设置经纬度：\n   - 根据场景设置经纬度\n   - 避免经纬度设置不正确\n\n2. 使用 GEOADD：\n   - GEOADD key longitude latitude member\n   - 添加成员的经纬度\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'GEOADD 失败', cause: '1) 经纬度设置不正确 2) 成员已存在 3) 权限问题。', fix: '检查经纬度是否正确；检查成员是否已存在；检查权限。' },
      { symptom: 'GEOADD 后成员不存在', cause: '1) 没有添加成功 2) 成员名拼写错误 3) 权限问题。', fix: '检查成员是否存在；检查成员名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 GEOADD 添加成员的经纬度', hint: 'GEOADD key longitude latitude member', answer: '# 添加成员的经纬度\nGEOADD locations 116.397428 39.90923 "Beijing"\n# 返回：1（新增 1 个成员）\n\n# 获取成员的经纬度\nGEOPOS locations "Beijing"\n# 返回：[[116.397428, 39.90923]]' },
      { level: '进阶', task: '使用 GEOADD 批量添加成员的经纬度', hint: 'GEOADD key longitude1 latitude1 member1 longitude2 latitude2 member2', answer: '# 批量添加成员的经纬度\nGEOADD locations 116.397428 39.90923 "Beijing" 121.473701 31.230416 "Shanghai"\n# 返回：2（新增 2 个成员）\n\n# 获取成员的经纬度\nGEOPOS locations "Beijing" "Shanghai"\n# 返回：[[116.397428, 39.90923], [121.473701, 31.230416]]' }
    ]
  },

  "7isWhgrUA6M5IGM2U2tm4": {
    mentalModel: 'XADD 命令就像往流里添加消息——添加消息到流，简单直观',
    sections: [
      { title: 'XADD 命令', content: 'XADD 命令的典型用法：\n\n1. 添加消息到流：\n   - XADD stream * field value\n   - XADD stream * name Alice age 30\n   - 返回值：消息 ID\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合消息队列、事件溯源' },
      { title: 'XADD 最佳实践', content: 'XADD 命令的最佳实践：\n\n1. 合理设置消息：\n   - 根据场景设置消息\n   - 避免消息太大\n\n2. 使用 XADD：\n   - XADD stream * field value\n   - 添加消息到流\n\n3. 监控：\n   - 监控流使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'XADD 失败', cause: '1) 流不存在 2) 消息设置不正确 3) 权限问题。', fix: '检查流是否存在；检查消息设置；检查权限。' },
      { symptom: 'XADD 后消息不存在', cause: '1) 没有添加成功 2) 消息 ID 不正确 3) 权限问题。', fix: '检查消息是否存在；检查消息 ID；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 XADD 添加消息到流', hint: 'XADD stream * field value', answer: '# 添加消息到流\nXADD stream * name Alice age 30\n# 返回：消息 ID（如 1705363200000-0）\n\n# 获取流里的消息\nXREAD COUNT 10 STREAMS stream 0\n# 返回：消息列表' },
      { level: '进阶', task: '使用 XADD 批量添加消息到流', hint: 'XADD stream * field1 value1 field2 value2', answer: '# 批量添加消息到流\nXADD stream * name Alice age 30\nXADD stream * name Bob age 25\n\n# 获取流里的消息\nXREAD COUNT 10 STREAMS stream 0\n# 返回：消息列表' }
    ]
  },

  "DQJCMEw13lELcw_AwLfrT": {
    mentalModel: 'XLEN 命令就像统计流里的消息数量——统计流里的消息数量，简单直观',
    sections: [
      { title: 'XLEN 命令', content: 'XLEN 命令的典型用法：\n\n1. 统计流里的消息数量：\n   - XLEN stream\n   - 返回值：消息数量\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合消息队列、事件溯源' },
      { title: 'XLEN 最佳实践', content: 'XLEN 命令的最佳实践：\n\n1. 合理统计消息：\n   - 统计流里的消息数量\n   - 避免消息太多\n\n2. 使用 XLEN：\n   - XLEN stream\n   - 统计流里的消息数量\n\n3. 监控：\n   - 监控流使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'XLEN 返回 0', cause: '1) 流里没有消息 2) 流不存在 3) 权限问题。', fix: '检查流里是否有消息；检查流是否存在；检查权限。' },
      { symptom: 'XLEN 返回错误', cause: '1) 流不存在 2) 权限问题 3) 流名太长。', fix: '检查流是否存在；检查权限；避免太长的流名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 XLEN 统计流里的消息数量', hint: 'XLEN stream', answer: '# 添加消息到流\nXADD stream * name Alice age 30\nXADD stream * name Bob age 25\n\n# 统计流里的消息数量\nXLEN stream\n# 返回：2（2 条消息）' },
      { level: '进阶', task: '使用 XLEN 批量统计多个流的消息数量', hint: 'XLEN stream', answer: '# 添加消息到流\nXADD stream1 * name Alice age 30\nXADD stream2 * name Bob age 25\n\n# 批量统计多个流的消息数量\nstreams = ["stream1", "stream2"]\nfor stream in streams:\n    count = redis.xlen(stream)\n    print(f"{stream}: {count}")\n\n# 输出：\n# stream1: 1\n# stream2: 1' }
    ]
  },

  "CiYFuYE8XudZkR6AW2NQ7": {
    mentalModel: 'XRANGE 命令就像从流里读取指定范围的消息——获取指定范围的消息，简单直观',
    sections: [
      { title: 'XRANGE 命令', content: 'XRANGE 命令的典型用法：\n\n1. 从流里读取指定范围的消息：\n   - XRANGE stream start end\n   - XRANGE stream - +（所有消息）\n   - 返回值：消息列表\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合消息队列、事件溯源' },
      { title: 'XRANGE 最佳实践', content: 'XRANGE 命令的最佳实践：\n\n1. 合理设置范围：\n   - 根据场景设置范围\n   - 避免范围太大\n\n2. 使用 XRANGE：\n   - XRANGE stream start end\n   - 从流里读取指定范围的消息\n\n3. 监控：\n   - 监控流使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'XRANGE 返回空', cause: '1) 流里没有消息 2) 范围设置不正确 3) 权限问题。', fix: '检查流里是否有消息；检查范围设置；检查权限。' },
      { symptom: 'XRANGE 返回错误', cause: '1) 范围设置不正确 2) 权限问题 3) 流名太长。', fix: '检查范围设置；检查权限；避免太长的流名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 XRANGE 从流里读取所有消息', hint: 'XRANGE stream - +', answer: '# 添加消息到流\nXADD stream * name Alice age 30\nXADD stream * name Bob age 25\n\n# 从流里读取所有消息\nXRANGE stream - +\n# 返回：消息列表' },
      { level: '进阶', task: '使用 XRANGE 从流里读取指定范围的消息', hint: 'XRANGE stream start end', answer: '# 添加消息到流\nXADD stream * name Alice age 30\nXADD stream * name Bob age 25\nXADD stream * name Charlie age 35\n\n# 从流里读取指定范围的消息（第 2-3 条）\nXRANGE stream 1 2\n# 返回：消息列表（第 2-3 条）' }
    ]
  },

  "OWWDLuGTbdNwME7v2jxVP": {
    mentalModel: 'GEOSEARCH 命令就像按地理位置搜索——按地理位置搜索成员，简单直观',
    sections: [
      { title: 'GEOSEARCH 命令', content: 'GEOSEARCH 命令的典型用法：\n\n1. 按地理位置搜索成员：\n   - GEOSEARCH key FROMMEMBER member BYRADIUS radius unit\n   - GEOSEARCH key FROMLONLAT longitude latitude BYRADIUS radius unit\n   - 返回值：成员列表\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(log N)）\n   - 适合附近的人、距离计算' },
      { title: 'GEOSEARCH 最佳实践', content: 'GEOSEARCH 命令的最佳实践：\n\n1. 合理设置搜索范围：\n   - 根据场景设置搜索范围\n   - 避免范围太大\n\n2. 使用 GEOSEARCH：\n   - GEOSEARCH key FROMMEMBER member BYRADIUS radius unit\n   - GEOSEARCH key FROMLONLAT longitude latitude BYRADIUS radius unit\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'GEOSEARCH 返回空', cause: '1) 没有匹配的成员 2) 搜索范围设置不正确 3) 权限问题。', fix: '检查是否有匹配的成员；检查搜索范围设置；检查权限。' },
      { symptom: 'GEOSEARCH 返回错误', cause: '1) 搜索范围设置不正确 2) 权限问题 3) 键名太长。', fix: '检查搜索范围设置；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 GEOSEARCH 按成员搜索', hint: 'GEOSEARCH key FROMMEMBER member BYRADIUS radius unit', answer: '# 添加成员的经纬度\nGEOADD locations 116.397428 39.90923 "Beijing"\nGEOADD locations 121.473701 31.230416 "Shanghai"\n\n# 按成员搜索（Beijing 周围 1000 公里）\nGEOSEARCH locations FROMMEMBER "Beijing" BYRADIUS 1000 km\n# 返回：["Beijing", "Shanghai"]' },
      { level: '进阶', task: '使用 GEOSEARCH 按经纬度搜索', hint: 'GEOSEARCH key FROMLONLAT longitude latitude BYRADIUS radius unit', answer: '# 添加成员的经纬度\nGEOADD locations 116.397428 39.90923 "Beijing"\nGEOADD locations 121.473701 31.230416 "Shanghai"\n\n# 按经纬度搜索（116.397428, 39.90923 周围 1000 公里）\nGEOSEARCH locations FROMLONLAT 116.397428 39.90923 BYRADIUS 1000 km\n# 返回：["Beijing", "Shanghai"]' }
    ]
  },

  "s50jr_XOUcxh65-tGCKf5": {
    mentalModel: 'PFMERGE 命令就像合并多个 HyperLogLog——合并多个 HyperLogLog，简单直观',
    sections: [
      { title: 'PFMERGE 命令', content: 'PFMERGE 命令的典型用法：\n\n1. 合并多个 HyperLogLog：\n   - PFMERGE destkey key1 key2\n   - 返回值：OK\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(N)）\n   - 适合 UV 统计' },
      { title: 'PFMERGE 最佳实践', content: 'PFMERGE 命令的最佳实践：\n\n1. 合理合并 HyperLogLog：\n   - 根据场景合并 HyperLogLog\n   - 避免合并太多\n\n2. 使用 PFMERGE：\n   - PFMERGE destkey key1 key2\n   - 合并多个 HyperLogLog\n\n3. 监控：\n   - 监控 HyperLogLog 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'PFMERGE 失败', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' },
      { symptom: 'PFMERGE 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 PFMERGE 合并多个 HyperLogLog', hint: 'PFMERGE destkey key1 key2', answer: '# 添加成员到 HyperLogLog\nPFADD uv:2024-01-15 "user:123"\nPFADD uv:2024-01-16 "user:456"\n\n# 合并多个 HyperLogLog\nPFMERGE uv:both uv:2024-01-15 uv:2024-01-16\n# 返回：OK\n\n# 统计 UV\nPFCOUNT uv:both\n# 返回：2（2 个用户）' },
      { level: '进阶', task: '使用 PFMERGE 批量合并多个 HyperLogLog', hint: 'PFMERGE destkey key1 key2 key3', answer: '# 添加成员到 HyperLogLog\nPFADD uv:2024-01-15 "user:123"\nPFADD uv:2024-01-16 "user:456"\nPFADD uv:2024-01-17 "user:789"\n\n# 批量合并多个 HyperLogLog\nPFMERGE uv:all uv:2024-01-15 uv:2024-01-16 uv:2024-01-17\n# 返回：OK\n\n# 统计 UV\nPFCOUNT uv:all\n# 返回：3（3 个用户）' }
    ]
  },

  "4-z4hDKm86qQatYnmE21R": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "FCbdKnkI1ZHGekT6yiGua": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "8a4DmPZrX2xGZ7zdWxS63": {
    mentalModel: 'PFADD 命令就像往 HyperLogLog 里添加成员——添加成员到 HyperLogLog，简单直观',
    sections: [
      { title: 'PFADD 命令', content: 'PFADD 命令的典型用法：\n\n1. 添加成员到 HyperLogLog：\n   - PFADD key member\n   - PFADD key member1 member2（批量添加）\n   - 返回值：1（新增）或 0（已存在）\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合 UV 统计' },
      { title: 'PFADD 最佳实践', content: 'PFADD 命令的最佳实践：\n\n1. 合理添加成员：\n   - 根据场景添加成员\n   - 避免添加太多成员\n\n2. 使用 PFADD：\n   - PFADD key member\n   - 添加成员到 HyperLogLog\n\n3. 监控：\n   - 监控 HyperLogLog 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'PFADD 失败', cause: '1) 键不存在 2) 成员已存在 3) 权限问题。', fix: '检查键是否存在；检查成员是否已存在；检查权限。' },
      { symptom: 'PFADD 后成员不存在', cause: '1) 没有添加成功 2) 成员名拼写错误 3) 权限问题。', fix: '检查成员是否存在；检查成员名拼写；检查权限。' }
    ],
    exercises: [
      { level: '基础', task: '使用 PFADD 添加成员到 HyperLogLog', hint: 'PFADD key member', answer: '# 添加成员到 HyperLogLog\nPFADD uv:2024-01-15 "user:123"\n# 返回：1（新增）\n\n# 统计 UV\nPFCOUNT uv:2024-01-15\n# 返回：1（1 个用户）' },
      { level: '进阶', task: '使用 PFADD 批量添加成员到 HyperLogLog', hint: 'PFADD key member1 member2', answer: '# 批量添加成员到 HyperLogLog\nPFADD uv:2024-01-15 "user:123" "user:456" "user:789"\n# 返回：1（新增）\n\n# 统计 UV\nPFCOUNT uv:2024-01-15\n# 返回：3（3 个用户）' }
    ]
  },

  "cszjT3YK8oyhGpqLTQzwX": {
    mentalModel: 'HyperLogLog 就像 Redis 的基数统计——用极小的内存统计大量唯一成员，适合 UV 统计',
    sections: [
      { title: 'HyperLogLog', content: 'Redis 的 HyperLogLog：\n\n1. 基本概念：\n   - 用极小的内存统计大量唯一成员\n   - 适合 UV 统计\n   - 内存节省（1 亿用户只需要 12KB）\n\n2. 常用命令：\n   - PFADD key member\n   - PFCOUNT key\n   - PFMERGE destkey key1 key2\n\n3. 优势：\n   - 内存节省\n   - 高性能\n   - 适合 UV 统计' },
      { title: 'HyperLogLog 最佳实践', content: 'Redis HyperLogLog 的最佳实践：\n\n1. 合理设置 HyperLogLog：\n   - 根据场景设置 HyperLogLog\n   - 避免成员太多\n\n2. 使用 HyperLogLog：\n   - PFADD key member\n   - PFCOUNT key\n   - PFMERGE destkey key1 key2\n\n3. 监控：\n   - 监控 HyperLogLog 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'HyperLogLog 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 HyperLogLog 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 HyperLogLog；监控内存使用。' },
      { symptom: 'HyperLogLog 性能不佳', cause: '1) 成员太多 2) 没有使用 Pipeline 3) 没有使用 PFCOUNT。', fix: '避免成员太多；使用 Pipeline 批量执行命令；使用 PFCOUNT。' }
    ],
    exercises: [
      { level: '基础', task: '使用 HyperLogLog 实现 UV 统计', hint: 'PFADD key member, PFCOUNT key', answer: '# 用户访问\nPFADD uv:2024-01-15 "user:123"\nPFADD uv:2024-01-15 "user:456"\nPFADD uv:2024-01-15 "user:789"\n\n# 统计 UV\nPFCOUNT uv:2024-01-15\n# 返回：3（3 个用户）' },
      { level: '进阶', task: '使用 PFMERGE 合并多个 HyperLogLog', hint: 'PFMERGE destkey key1 key2', answer: '# 添加成员到 HyperLogLog\nPFADD uv:2024-01-15 "user:123"\nPFADD uv:2024-01-16 "user:456"\n\n# 合并多个 HyperLogLog\nPFMERGE uv:both uv:2024-01-15 uv:2024-01-16\n# 返回：OK\n\n# 统计 UV\nPFCOUNT uv:both\n# 返回：2（2 个用户）' }
    ]
  },

  "JWT30KIJQHVw0MXI5sGR6": {
    mentalModel: 'PFCOUNT 命令就像统计 HyperLogLog 里的唯一成员数量——统计 HyperLogLog 里的唯一成员数量，简单直观',
    sections: [
      { title: 'PFCOUNT 命令', content: 'PFCOUNT 命令的典型用法：\n\n1. 统计 HyperLogLog 里的唯一成员数量：\n   - PFCOUNT key\n   - 返回值：唯一成员数量\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合 UV 统计' },
      { title: 'PFCOUNT 最佳实践', content: 'PFCOUNT 命令的最佳实践：\n\n1. 合理统计 HyperLogLog：\n   - 统计 HyperLogLog 里的唯一成员数量\n   - 避免成员太多\n\n2. 使用 PFCOUNT：\n   - PFCOUNT key\n   - 统计 HyperLogLog 里的唯一成员数量\n\n3. 监控：\n   - 监控 HyperLogLog 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'PFCOUNT 返回 0', cause: '1) 键不存在 2) HyperLogLog 里没有成员 3) 权限问题。', fix: '检查键是否存在；检查 HyperLogLog 里是否有成员；检查权限。' },
      { symptom: 'PFCOUNT 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 PFCOUNT 统计 HyperLogLog 里的唯一成员数量', hint: 'PFCOUNT key', answer: '# 添加成员到 HyperLogLog\nPFADD uv:2024-01-15 "user:123"\nPFADD uv:2024-01-15 "user:456"\nPFADD uv:2024-01-15 "user:789"\n\n# 统计 UV\nPFCOUNT uv:2024-01-15\n# 返回：3（3 个用户）' },
      { level: '进阶', task: '使用 PFCOUNT 批量统计多个 HyperLogLog 的唯一成员数量', hint: 'PFCOUNT key', answer: '# 添加成员到 HyperLogLog\nPFADD uv:2024-01-15 "user:123"\nPFADD uv:2024-01-16 "user:456"\n\n# 批量统计多个 HyperLogLog 的唯一成员数量\nkeys = ["uv:2024-01-15", "uv:2024-01-16"]\nfor key in keys:\n    count = redis.pfcount(key)\n    print(f"{key}: {count}")\n\n# 输出：\n# uv:2024-01-15: 1\n# uv:2024-01-16: 1' }
    ]
  },

  "zXlSBfa-Gi9_GhSYEzre3": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "GNMjrLPkpTphneoQ0GoZF": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "XPeCvikPuu6EJ8UcOLGPh": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "zXs_9n2yEb_eVi0WuOQKH": {
    mentalModel: 'Streams 就像 Redis 的消息流——消息流，适合消息队列、事件溯源',
    sections: [
      { title: 'Streams', content: 'Redis 的 Streams：\n\n1. 基本概念：\n   - 消息流\n   - 适合消息队列、事件溯源\n   - 支持消费者组\n\n2. 常用命令：\n   - XADD stream * field value\n   - XREAD COUNT 10 STREAMS stream 0\n   - XLEN stream\n   - XRANGE stream - +\n\n3. 优势：\n   - 适合消息队列、事件溯源\n   - 支持消费者组\n   - 高性能' },
      { title: 'Streams 最佳实践', content: 'Redis Streams 的最佳实践：\n\n1. 合理设置消息流：\n   - 根据场景设置消息流\n   - 避免消息太多\n\n2. 使用 Streams：\n   - XADD stream * field value\n   - XREAD COUNT 10 STREAMS stream 0\n   - XLEN stream\n   - XRANGE stream - +\n\n3. 监控：\n   - 监控消息流使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Streams 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置消息流 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置消息流；监控内存使用。' },
      { symptom: 'Streams 性能不佳', cause: '1) 消息太多 2) 没有使用 Pipeline 3) 没有使用 XLEN。', fix: '避免消息太多；使用 Pipeline 批量执行命令；使用 XLEN。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Streams 实现消息队列', hint: 'XADD stream * field value, XREAD COUNT 10 STREAMS stream 0', answer: '# 生产者\nXADD stream * name Alice age 30\n\n# 消费者\nXREAD COUNT 10 STREAMS stream 0\n# 返回：消息列表' },
      { level: '进阶', task: '使用 Streams 实现事件溯源', hint: 'XADD stream * field value, XRANGE stream - +', answer: '# 添加事件到流\nXADD events * event_type "user_login" user_id 123\n\n# 获取所有事件\nXRANGE events - +\n# 返回：消息列表' }
    ]
  },

  "_NiUdVQ85qnvryI38k_vQ": {
    mentalModel: 'Geospatial Indexes 就像 Redis 的地理位置索引——按地理位置索引成员，适合附近的人、距离计算',
    sections: [
      { title: 'Geospatial Indexes', content: 'Redis 的 Geospatial Indexes：\n\n1. 基本概念：\n   - 按地理位置索引成员\n   - 适合附近的人、距离计算\n   - 支持 GEOADD、GEOSEARCH 等命令\n\n2. 常用命令：\n   - GEOADD key longitude latitude member\n   - GEOSEARCH key FROMMEMBER member BYRADIUS radius unit\n   - GEOPOS key member\n   - GEODIST key member1 member2\n\n3. 优势：\n   - 适合附近的人、距离计算\n   - 高性能\n   - 支持地理位置索引' },
      { title: 'Geospatial Indexes 最佳实践', content: 'Redis Geospatial Indexes 的最佳实践：\n\n1. 合理设置地理位置：\n   - 根据场景设置地理位置\n   - 避免地理位置设置不正确\n\n2. 使用 Geospatial Indexes：\n   - GEOADD key longitude latitude member\n   - GEOSEARCH key FROMMEMBER member BYRADIUS radius unit\n   - GEOPOS key member\n   - GEODIST key member1 member2\n\n3. 监控：\n   - 监控成员数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Geospatial Indexes 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置地理位置 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置地理位置；监控内存使用。' },
      { symptom: 'Geospatial Indexes 性能不佳', cause: '1) 成员太多 2) 没有使用 Pipeline 3) 没有使用 GEOPOS。', fix: '避免成员太多；使用 Pipeline 批量执行命令；使用 GEOPOS。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Geospatial Indexes 实现附近的人', hint: 'GEOADD key longitude latitude member, GEOSEARCH key FROMMEMBER member BYRADIUS radius unit', answer: '# 添加成员的经纬度\nGEOADD locations 116.397428 39.90923 "Beijing"\nGEOADD locations 121.473701 31.230416 "Shanghai"\n\n# 按成员搜索（Beijing 周围 1000 公里）\nGEOSEARCH locations FROMMEMBER "Beijing" BYRADIUS 1000 km\n# 返回：["Beijing", "Shanghai"]' },
      { level: '进阶', task: '使用 Geospatial Indexes 计算两个成员的距离', hint: 'GEODIST key member1 member2', answer: '# 添加成员的经纬度\nGEOADD locations 116.397428 39.90923 "Beijing"\nGEOADD locations 121.473701 31.230416 "Shanghai"\n\n# 计算两个成员的距离\nGEODIST locations "Beijing" "Shanghai" km\n# 返回：1068.5（公里）' }
    ]
  },

  "Veb30QrPYNjUn13dtGbUr": {
    mentalModel: 'Lua Scripting 就像 Redis 的脚本——用 Lua 语言编写脚本，简单直观',
    sections: [
      { title: 'Lua Scripting', content: 'Redis 的 Lua Scripting：\n\n1. 基本概念：\n   - 用 Lua 语言编写脚本\n   - 适合复杂操作\n   - 原子性执行\n\n2. 常用命令：\n   - EVAL script numkeys key [key ...] arg [arg ...]\n   - EVALSHA sha1 numkeys key [key ...] arg [arg ...]\n   - SCRIPT LOAD script\n\n3. 优势：\n   - 适合复杂操作\n   - 原子性执行\n   - 高性能' },
      { title: 'Lua Scripting 最佳实践', content: 'Redis Lua Scripting 的最佳实践：\n\n1. 合理设置脚本：\n   - 根据场景设置脚本\n   - 避免脚本太复杂\n\n2. 使用 Lua Scripting：\n   - EVAL script numkeys key [key ...] arg [arg ...]\n   - EVALSHA sha1 numkeys key [key ...] arg [arg ...]\n   - SCRIPT LOAD script\n\n3. 监控：\n   - 监控脚本执行情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Lua Scripting 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置脚本 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置脚本；监控内存使用。' },
      { symptom: 'Lua Scripting 性能不佳', cause: '1) 脚本太复杂 2) 没有使用 EVALSHA 3) 没有使用 SCRIPT LOAD。', fix: '避免脚本太复杂；使用 EVALSHA；使用 SCRIPT LOAD。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Lua Scripting 实现原子递增', hint: 'EVAL script numkeys key [key ...] arg [arg ...]', answer: '# 使用 Lua Scripting 实现原子递增\nEVAL "local current = redis.call(\'GET\', KEYS[1]); if current then return redis.call(\'INCR\', KEYS[1]) else redis.call(\'SET\', KEYS[1], 1); return 1 end" 1 counter\n# 返回：1（原子递增）' },
      { level: '进阶', task: '使用 EVALSHA 优化 Lua Scripting 性能', hint: 'EVALSHA sha1 numkeys key [key ...] arg [arg ...]', answer: '# 加载脚本\nsha1 = redis.script_load("local current = redis.call(\'GET\', KEYS[1]); if current then return redis.call(\'INCR\', KEYS[1]) else redis.call(\'SET\', KEYS[1], 1); return 1 end")\n\n# 使用 EVALSHA\nredis.evalsha(sha1, 1, "counter")\n# 返回：1（原子递增）' }
    ]
  },

  "YHbWlKrQqptUDbaQVy0_A": {
    mentalModel: 'Transactions 就像 Redis 的事务——多个命令一次性执行，要么全部执行，要么全部不执行',
    sections: [
      { title: 'Transactions', content: 'Redis 的 Transactions：\n\n1. 基本概念：\n   - 多个命令一次性执行\n   - 要么全部执行，要么全部不执行\n   - 适合复杂操作\n\n2. 常用命令：\n   - MULTI\n   - EXEC\n   - DISCARD\n   - WATCH key\n\n3. 优势：\n   - 适合复杂操作\n   - 原子性执行\n   - 高性能' },
      { title: 'Transactions 最佳实践', content: 'Redis Transactions 的最佳实践：\n\n1. 合理设置事务：\n   - 根据场景设置事务\n   - 避免事务太复杂\n\n2. 使用 Transactions：\n   - MULTI\n   - EXEC\n   - DISCARD\n   - WATCH key\n\n3. 监控：\n   - 监控事务执行情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Transactions 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置事务 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置事务；监控内存使用。' },
      { symptom: 'Transactions 性能不佳', cause: '1) 事务太复杂 2) 没有使用 WATCH 3) 没有使用 MULTI/EXEC。', fix: '避免事务太复杂；使用 WATCH；使用 MULTI/EXEC。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Transactions 实现原子操作', hint: 'MULTI, EXEC', answer: '# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\nSET key2 "value2"\n\n# 提交事务\nEXEC\n# 返回：["OK", "OK"]' },
      { level: '进阶', task: '使用 WATCH 实现乐观锁', hint: 'WATCH key, MULTI, EXEC', answer: '# 监视键\nWATCH key1\n\n# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\n\n# 提交事务\nEXEC\n# 返回：["OK"]（如果键没有被修改）\n# 返回：[]（如果键被修改了）' }
    ]
  },

  "9W_jaK1DSEZHRKdPcUM7h": {
    mentalModel: 'Pub/Sub 就像 Redis 的发布订阅——发布消息，订阅者接收消息，简单直观',
    sections: [
      { title: 'Pub/Sub', content: 'Redis 的 Pub/Sub：\n\n1. 基本概念：\n   - 发布消息\n   - 订阅者接收消息\n   - 适合实时通知\n\n2. 常用命令：\n   - PUBLISH channel message\n   - SUBSCRIBE channel\n   - UNSUBSCRIBE channel\n\n3. 优势：\n   - 适合实时通知\n   - 高性能\n   - 简单易用' },
      { title: 'Pub/Sub 最佳实践', content: 'Redis Pub/Sub 的最佳实践：\n\n1. 合理设置 Pub/Sub：\n   - 根据场景设置 Pub/Sub\n   - 避免消息太多\n\n2. 使用 Pub/Sub：\n   - PUBLISH channel message\n   - SUBSCRIBE channel\n   - UNSUBSCRIBE channel\n\n3. 监控：\n   - 监控 Pub/Sub 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Pub/Sub 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 Pub/Sub 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 Pub/Sub；监控内存使用。' },
      { symptom: 'Pub/Sub 性能不佳', cause: '1) 消息太多 2) 没有使用 Pipeline 3) 没有使用 PUBLISH。', fix: '避免消息太多；使用 Pipeline 批量执行命令；使用 PUBLISH。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Pub/Sub 实现实时通知', hint: 'PUBLISH channel message, SUBSCRIBE channel', answer: '# 发布者\nPUBLISH notifications "Hello, world!"\n\n# 订阅者\nSUBSCRIBE notifications\n# 接收消息：Hello, world!' },
      { level: '进阶', task: '使用 Pub/Sub 实现聊天室', hint: 'PUBLISH channel message, SUBSCRIBE channel', answer: '# 发布者\nPUBLISH chat "Hello, everyone!"\n\n# 订阅者\nSUBSCRIBE chat\n# 接收消息：Hello, everyone!' }
    ]
  },

  "rjeq3i9oX8IGyQzo--L3c": {
    mentalModel: 'EVAL 命令就像执行 Lua 脚本——执行 Lua 脚本，简单直观',
    sections: [
      { title: 'EVAL 命令', content: 'EVAL 命令的典型用法：\n\n1. 执行 Lua 脚本：\n   - EVAL script numkeys key [key ...] arg [arg ...]\n   - 返回值：脚本返回值\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合复杂操作' },
      { title: 'EVAL 最佳实践', content: 'EVAL 命令的最佳实践：\n\n1. 合理设置脚本：\n   - 根据场景设置脚本\n   - 避免脚本太复杂\n\n2. 使用 EVAL：\n   - EVAL script numkeys key [key ...] arg [arg ...]\n   - 执行 Lua 脚本\n\n3. 监控：\n   - 监控脚本执行情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'EVAL 失败', cause: '1) 脚本语法错误 2) 权限问题 3) 脚本太复杂。', fix: '检查脚本语法；检查权限；避免脚本太复杂。' },
      { symptom: 'EVAL 返回错误', cause: '1) 脚本语法错误 2) 权限问题 3) 脚本太复杂。', fix: '检查脚本语法；检查权限；避免脚本太复杂。' }
    ],
    exercises: [
      { level: '基础', task: '使用 EVAL 执行 Lua 脚本', hint: 'EVAL script numkeys key [key ...] arg [arg ...]', answer: '# 执行 Lua 脚本\nEVAL "return redis.call(\'SET\', KEYS[1], ARGV[1])" 1 mykey "value"\n# 返回："OK"' },
      { level: '进阶', task: '使用 EVAL 实现原子操作', hint: 'EVAL script numkeys key [key ...] arg [arg ...]', answer: '# 使用 EVAL 实现原子操作\nEVAL "local current = redis.call(\'GET\', KEYS[1]); if current then return redis.call(\'INCR\', KEYS[1]) else redis.call(\'SET\', KEYS[1], 1); return 1 end" 1 counter\n# 返回：1（原子递增）' }
    ]
  },

  "c-y5Eck8VtSyIf8RAW9p7": {
    mentalModel: 'WATCH 命令就像监视键——监视键是否被修改，简单直观',
    sections: [
      { title: 'WATCH 命令', content: 'WATCH 命令的典型用法：\n\n1. 监视键是否被修改：\n   - WATCH key\n   - 返回值：OK\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合乐观锁' },
      { title: 'WATCH 最佳实践', content: 'WATCH 命令的最佳实践：\n\n1. 合理监视键：\n   - 根据场景监视键\n   - 避免监视太多键\n\n2. 使用 WATCH：\n   - WATCH key\n   - 监视键是否被修改\n\n3. 监控：\n   - 监控键是否被修改\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'WATCH 失败', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' },
      { symptom: 'WATCH 返回错误', cause: '1) 键不存在 2) 权限问题 3) 键名太长。', fix: '检查键是否存在；检查权限；避免太长的键名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 WATCH 监视键', hint: 'WATCH key', answer: '# 监视键\nWATCH key1\n# 返回：OK\n\n# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\n\n# 提交事务\nEXEC\n# 返回：["OK"]（如果键没有被修改）\n# 返回：[]（如果键被修改了）' },
      { level: '进阶', task: '使用 WATCH 实现乐观锁', hint: 'WATCH key, MULTI, EXEC', answer: '# 监视键\nWATCH key1\n\n# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\n\n# 提交事务\nEXEC\n# 返回：["OK"]（如果键没有被修改）\n# 返回：[]（如果键被修改了）' }
    ]
  },

  "55BCntuWlaQiLPqNtb-2i": {
    mentalModel: 'SUBSCRIBE 命令就像订阅频道——订阅频道，接收消息，简单直观',
    sections: [
      { title: 'SUBSCRIBE 命令', content: 'SUBSCRIBE 命令的典型用法：\n\n1. 订阅频道：\n   - SUBSCRIBE channel\n   - 返回值：订阅成功\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合实时通知' },
      { title: 'SUBSCRIBE 最佳实践', content: 'SUBSCRIBE 命令的最佳实践：\n\n1. 合理订阅频道：\n   - 根据场景订阅频道\n   - 避免订阅太多频道\n\n2. 使用 SUBSCRIBE：\n   - SUBSCRIBE channel\n   - 订阅频道\n\n3. 监控：\n   - 监控频道使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SUBSCRIBE 失败', cause: '1) 频道不存在 2) 权限问题 3) 频道名太长。', fix: '检查频道是否存在；检查权限；避免太长的频道名。' },
      { symptom: 'SUBSCRIBE 返回错误', cause: '1) 频道不存在 2) 权限问题 3) 频道名太长。', fix: '检查频道是否存在；检查权限；避免太长的频道名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SUBSCRIBE 订阅频道', hint: 'SUBSCRIBE channel', answer: '# 订阅频道\nSUBSCRIBE notifications\n# 接收消息' },
      { level: '进阶', task: '使用 SUBSCRIBE 实现聊天室', hint: 'SUBSCRIBE channel', answer: '# 订阅频道\nSUBSCRIBE chat\n# 接收消息' }
    ]
  },

  "3X0x_PcJGWBVPL-LSVAln": {
    mentalModel: 'EVALSHA 命令就像执行已加载的 Lua 脚本——执行已加载的 Lua 脚本，简单直观',
    sections: [
      { title: 'EVALSHA 命令', content: 'EVALSHA 命令的典型用法：\n\n1. 执行已加载的 Lua 脚本：\n   - EVALSHA sha1 numkeys key [key ...] arg [arg ...]\n   - 返回值：脚本返回值\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合复杂操作' },
      { title: 'EVALSHA 最佳实践', content: 'EVALSHA 命令的最佳实践：\n\n1. 合理设置脚本：\n   - 根据场景设置脚本\n   - 避免脚本太复杂\n\n2. 使用 EVALSHA：\n   - EVALSHA sha1 numkeys key [key ...] arg [arg ...]\n   - 执行已加载的 Lua 脚本\n\n3. 监控：\n   - 监控脚本执行情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'EVALSHA 失败', cause: '1) 脚本未加载 2) 权限问题 3) 脚本太复杂。', fix: '使用 SCRIPT LOAD 加载脚本；检查权限；避免脚本太复杂。' },
      { symptom: 'EVALSHA 返回错误', cause: '1) 脚本未加载 2) 权限问题 3) 脚本太复杂。', fix: '使用 SCRIPT LOAD 加载脚本；检查权限；避免脚本太复杂。' }
    ],
    exercises: [
      { level: '基础', task: '使用 EVALSHA 执行已加载的 Lua 脚本', hint: 'EVALSHA sha1 numkeys key [key ...] arg [arg ...]', answer: '# 加载脚本\nsha1 = redis.script_load("return redis.call(\'SET\', KEYS[1], ARGV[1])")\n\n# 使用 EVALSHA\nredis.evalsha(sha1, 1, "mykey", "value")\n# 返回："OK"' },
      { level: '进阶', task: '使用 EVALSHA 实现原子操作', hint: 'EVALSHA sha1 numkeys key [key ...] arg [arg ...]', answer: '# 加载脚本\nsha1 = redis.script_load("local current = redis.call(\'GET\', KEYS[1]); if current then return redis.call(\'INCR\', KEYS[1]) else redis.call(\'SET\', KEYS[1], 1); return 1 end")\n\n# 使用 EVALSHA\nredis.evalsha(sha1, 1, "counter")\n# 返回：1（原子递增）' }
    ]
  },

  "Ljy-Mc0EBBX4_vXfYZ5-4": {
    mentalModel: 'EXEC 命令就像提交事务——提交事务，执行所有命令，简单直观',
    sections: [
      { title: 'EXEC 命令', content: 'EXEC 命令的典型用法：\n\n1. 提交事务：\n   - EXEC\n   - 返回值：所有命令的返回值\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合复杂操作' },
      { title: 'EXEC 最佳实践', content: 'EXEC 命令的最佳实践：\n\n1. 合理设置事务：\n   - 根据场景设置事务\n   - 避免事务太复杂\n\n2. 使用 EXEC：\n   - EXEC\n   - 提交事务\n\n3. 监控：\n   - 监控事务执行情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'EXEC 失败', cause: '1) 没有开始事务 2) 权限问题 3) 事务太复杂。', fix: '使用 MULTI 开始事务；检查权限；避免事务太复杂。' },
      { symptom: 'EXEC 返回错误', cause: '1) 没有开始事务 2) 权限问题 3) 事务太复杂。', fix: '使用 MULTI 开始事务；检查权限；避免事务太复杂。' }
    ],
    exercises: [
      { level: '基础', task: '使用 EXEC 提交事务', hint: 'MULTI, EXEC', answer: '# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\nSET key2 "value2"\n\n# 提交事务\nEXEC\n# 返回：["OK", "OK"]' },
      { level: '进阶', task: '使用 EXEC 实现原子操作', hint: 'MULTI, EXEC', answer: '# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\nSET key2 "value2"\n\n# 提交事务\nEXEC\n# 返回：["OK", "OK"]（原子操作）' }
    ]
  },

  "5gkZzm2F4vu6IxUoJLYbK": {
    mentalModel: 'UNSUBSCRIBE 命令就像取消订阅频道——取消订阅频道，不再接收消息，简单直观',
    sections: [
      { title: 'UNSUBSCRIBE 命令', content: 'UNSUBSCRIBE 命令的典型用法：\n\n1. 取消订阅频道：\n   - UNSUBSCRIBE channel\n   - 返回值：取消订阅成功\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合实时通知' },
      { title: 'UNSUBSCRIBE 最佳实践', content: 'UNSUBSCRIBE 命令的最佳实践：\n\n1. 合理取消订阅频道：\n   - 根据场景取消订阅频道\n   - 避免取消订阅太多频道\n\n2. 使用 UNSUBSCRIBE：\n   - UNSUBSCRIBE channel\n   - 取消订阅频道\n\n3. 监控：\n   - 监控频道使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'UNSUBSCRIBE 失败', cause: '1) 频道不存在 2) 权限问题 3) 频道名太长。', fix: '检查频道是否存在；检查权限；避免太长的频道名。' },
      { symptom: 'UNSUBSCRIBE 返回错误', cause: '1) 频道不存在 2) 权限问题 3) 频道名太长。', fix: '检查频道是否存在；检查权限；避免太长的频道名。' }
    ],
    exercises: [
      { level: '基础', task: '使用 UNSUBSCRIBE 取消订阅频道', hint: 'UNSUBSCRIBE channel', answer: '# 取消订阅频道\nUNSUBSCRIBE notifications\n# 不再接收消息' },
      { level: '进阶', task: '使用 UNSUBSCRIBE 取消订阅多个频道', hint: 'UNSUBSCRIBE channel1 channel2', answer: '# 取消订阅多个频道\nUNSUBSCRIBE notifications1 notifications2\n# 不再接收消息' }
    ]
  },

  "U6hST1MkS16T2CHV3-Ise": {
    mentalModel: 'MULTI 命令就像开始事务——开始事务，执行多个命令，简单直观',
    sections: [
      { title: 'MULTI 命令', content: 'MULTI 命令的典型用法：\n\n1. 开始事务：\n   - MULTI\n   - 返回值：OK\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合复杂操作' },
      { title: 'MULTI 最佳实践', content: 'MULTI 命令的最佳实践：\n\n1. 合理设置事务：\n   - 根据场景设置事务\n   - 避免事务太复杂\n\n2. 使用 MULTI：\n   - MULTI\n   - 开始事务\n\n3. 监控：\n   - 监控事务执行情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'MULTI 失败', cause: '1) 已经开始事务 2) 权限问题 3) 事务太复杂。', fix: '检查是否已经开始事务；检查权限；避免事务太复杂。' },
      { symptom: 'MULTI 返回错误', cause: '1) 已经开始事务 2) 权限问题 3) 事务太复杂。', fix: '检查是否已经开始事务；检查权限；避免事务太复杂。' }
    ],
    exercises: [
      { level: '基础', task: '使用 MULTI 开始事务', hint: 'MULTI', answer: '# 开始事务\nMULTI\n# 返回：OK\n\n# 执行命令\nSET key1 "value1"\nSET key2 "value2"\n\n# 提交事务\nEXEC\n# 返回：["OK", "OK"]' },
      { level: '进阶', task: '使用 MULTI 实现原子操作', hint: 'MULTI, EXEC', answer: '# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\nSET key2 "value2"\n\n# 提交事务\nEXEC\n# 返回：["OK", "OK"]（原子操作）' }
    ]
  },

  "gIPo-2CNqE1BsOaDzmkCU": {
    mentalModel: 'PUBLISH 命令就像发布消息——发布消息到频道，简单直观',
    sections: [
      { title: 'PUBLISH 命令', content: 'PUBLISH 命令的典型用法：\n\n1. 发布消息到频道：\n   - PUBLISH channel message\n   - 返回值：接收消息的订阅者数量\n\n2. 优势：\n   - 简单易用\n   - 高性能（O(1)）\n   - 适合实时通知' },
      { title: 'PUBLISH 最佳实践', content: 'PUBLISH 命令的最佳实践：\n\n1. 合理发布消息：\n   - 根据场景发布消息\n   - 避免消息太大\n\n2. 使用 PUBLISH：\n   - PUBLISH channel message\n   - 发布消息到频道\n\n3. 监控：\n   - 监控频道使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'PUBLISH 失败', cause: '1) 频道不存在 2) 权限问题 3) 消息太大。', fix: '检查频道是否存在；检查权限；避免消息太大。' },
      { symptom: 'PUBLISH 返回错误', cause: '1) 频道不存在 2) 权限问题 3) 消息太大。', fix: '检查频道是否存在；检查权限；避免消息太大。' }
    ],
    exercises: [
      { level: '基础', task: '使用 PUBLISH 发布消息', hint: 'PUBLISH channel message', answer: '# 发布消息\nPUBLISH notifications "Hello, world!"\n# 返回：接收消息的订阅者数量' },
      { level: '进阶', task: '使用 PUBLISH 实现聊天室', hint: 'PUBLISH channel message', answer: '# 发布消息\nPUBLISH chat "Hello, everyone!"\n# 返回：接收消息的订阅者数量' }
    ]
  },

  "kF_nGo845XDwLkwcQt008": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "V-d6q-3Sf0dl5v8xiCQwl": {
    mentalModel: 'More Commands 就像 Redis 的更多工具——更多的命令，更多的功能',
    sections: [
      { title: '更多命令', content: 'Redis 的更多命令：\n\n1. 键管理命令：\n   - KEYS pattern（查找键，不推荐生产使用）\n   - SCAN cursor（扫描键，推荐生产使用）\n   - EXISTS key（检查键是否存在）\n   - TYPE key（获取键的数据类型）\n\n2. 服务器命令：\n   - INFO（获取服务器信息）\n   - DBSIZE（获取键数量）\n   - FLUSHDB（清空当前数据库）\n   - FLUSHALL（清空所有数据库）\n\n3. 其他命令：\n   - PING（测试连接）\n   - ECHO message（输出消息）\n   - SELECT db（切换数据库）' },
      { title: '更多命令最佳实践', content: '更多命令的最佳实践：\n\n1. 合理选择命令：\n   - 根据场景选择合适的命令\n   - 避免使用不合适的命令\n\n2. 使用 SCAN 代替 KEYS：\n   - SCAN cursor（扫描键，推荐生产使用）\n   - 避免使用 KEYS pattern（查找键，不推荐生产使用）\n\n3. 监控：\n   - 监控键数量\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '命令使用不当', cause: '1) 选择了不合适的命令 2) 没有了解命令的用法 3) 没有参考官方文档。', fix: '根据场景选择合适的命令；参考官方文档；了解命令的用法。' },
      { symptom: '命令执行失败', cause: '1) 命令语法错误 2) 权限问题 3) 键名拼写错误。', fix: '检查命令语法；检查权限；确保键名拼写一致。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SCAN 扫描键', hint: 'SCAN cursor', answer: '# 扫描键\nSCAN 0\n# 返回：cursor 和键列表\n\n# 继续扫描\nSCAN cursor\n# 返回：cursor 和键列表' },
      { level: '进阶', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 获取服务器信息\nINFO\n# 返回：服务器信息\n\n# 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "msW0Wd2H-6FFNDnjC64t-": {
    mentalModel: 'Optimistic Locking 就像乐观锁——使用 WATCH 实现乐观锁，简单直观',
    sections: [
      { title: 'Optimistic Locking', content: 'Redis 的 Optimistic Locking：\n\n1. 基本概念：\n   - 使用 WATCH 实现乐观锁\n   - 适合并发控制\n   - 简单易用\n\n2. 常用命令：\n   - WATCH key\n   - MULTI\n   - EXEC\n   - DISCARD\n\n3. 优势：\n   - 适合并发控制\n   - 简单易用\n   - 高性能' },
      { title: 'Optimistic Locking 最佳实践', content: 'Redis Optimistic Locking 的最佳实践：\n\n1. 合理设置乐观锁：\n   - 根据场景设置乐观锁\n   - 避免监视太多键\n\n2. 使用 Optimistic Locking：\n   - WATCH key\n   - MULTI\n   - EXEC\n   - DISCARD\n\n3. 监控：\n   - 监控键是否被修改\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Optimistic Locking 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置乐观锁 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置乐观锁；监控内存使用。' },
      { symptom: 'Optimistic Locking 性能不佳', cause: '1) 监视太多键 2) 没有使用 WATCH 3) 没有使用 MULTI/EXEC。', fix: '避免监视太多键；使用 WATCH；使用 MULTI/EXEC。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Optimistic Locking 实现乐观锁', hint: 'WATCH key, MULTI, EXEC', answer: '# 监视键\nWATCH key1\n\n# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\n\n# 提交事务\nEXEC\n# 返回：["OK"]（如果键没有被修改）\n# 返回：[]（如果键被修改了）' },
      { level: '进阶', task: '使用 Optimistic Locking 实现并发控制', hint: 'WATCH key, MULTI, EXEC', answer: '# 监视键\nWATCH key1\n\n# 开始事务\nMULTI\n\n# 执行命令\nSET key1 "value1"\n\n# 提交事务\nEXEC\n# 返回：["OK"]（如果键没有被修改）\n# 返回：[]（如果键被修改了）' }
    ]
  },

  "bQaek7f3dAaZfSUhwovm1": {
    mentalModel: 'Persistence Options 就像 Redis 的持久化选项——选择不同的持久化方式，简单直观',
    sections: [
      { title: 'Persistence Options', content: 'Redis 的 Persistence Options：\n\n1. 基本概念：\n   - 选择不同的持久化方式\n   - 适合不同场景\n   - 简单易用\n\n2. 常用选项：\n   - RDB（快照）\n   - AOF（日志）\n   - 混合持久化\n\n3. 优势：\n   - 适合不同场景\n   - 简单易用\n   - 高性能' },
      { title: 'Persistence Options 最佳实践', content: 'Redis Persistence Options 的最佳实践：\n\n1. 合理设置持久化选项：\n   - 根据场景设置持久化选项\n   - 避免数据丢失\n\n2. 使用 Persistence Options：\n   - RDB（快照）\n   - AOF（日志）\n   - 混合持久化\n\n3. 监控：\n   - 监控持久化使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Persistence Options 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置持久化选项 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置持久化选项；监控内存使用。' },
      { symptom: 'Persistence Options 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 RDB/AOF。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 RDB/AOF。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RDB 实现持久化', hint: 'BGSAVE', answer: '# 使用 RDB 实现持久化\nBGSAVE\n# 返回：Background saving started' },
      { level: '进阶', task: '使用 AOF 实现持久化', hint: 'appendonly yes', answer: '# 使用 AOF 实现持久化\nCONFIG SET appendonly yes\n# 返回：OK' }
    ]
  },

  "MvyE_JUJej0UB9xe8Anfj": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: '应用场景', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: '应用场景最佳实践', content: 'Redis 应用场景的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: '应用场景选择不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: '应用场景使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "80035BzcB-fKCvD_3N8zE": {
    mentalModel: 'No Persistence Option 就像 Redis 的无持久化选项——不持久化数据，简单直观',
    sections: [
      { title: 'No Persistence Option', content: 'Redis 的 No Persistence Option：\n\n1. 基本概念：\n   - 不持久化数据\n   - 适合缓存场景\n   - 简单易用\n\n2. 常用选项：\n   - save ""\n   - appendonly no\n\n3. 优势：\n   - 适合缓存场景\n   - 简单易用\n   - 高性能' },
      { title: 'No Persistence Option 最佳实践', content: 'Redis No Persistence Option 的最佳实践：\n\n1. 合理设置无持久化选项：\n   - 根据场景设置无持久化选项\n   - 避免数据丢失\n\n2. 使用 No Persistence Option：\n   - save ""\n   - appendonly no\n\n3. 监控：\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'No Persistence Option 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置无持久化选项 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置无持久化选项；监控内存使用。' },
      { symptom: 'No Persistence Option 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 save/appendonly。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 save/appendonly。' }
    ],
    exercises: [
      { level: '基础', task: '使用 No Persistence Option 实现无持久化', hint: 'save ""', answer: '# 使用 No Persistence Option 实现无持久化\nCONFIG SET save ""\n# 返回：OK' },
      { level: '进阶', task: '使用 No Persistence Option 实现缓存', hint: 'save "", appendonly no', answer: '# 使用 No Persistence Option 实现缓存\nCONFIG SET save ""\nCONFIG SET appendonly no\n# 返回：OK' }
    ]
  },

  "Qy42paiTUsO8HIwbWTMui": {
    mentalModel: 'Authentication 就像 Redis 的认证——使用密码认证，简单直观',
    sections: [
      { title: 'Authentication', content: 'Redis 的 Authentication：\n\n1. 基本概念：\n   - 使用密码认证\n   - 适合安全场景\n   - 简单易用\n\n2. 常用命令：\n   - AUTH password\n   - CONFIG SET requirepass password\n\n3. 优势：\n   - 适合安全场景\n   - 简单易用\n   - 高性能' },
      { title: 'Authentication 最佳实践', content: 'Redis Authentication 的最佳实践：\n\n1. 合理设置认证：\n   - 根据场景设置认证\n   - 避免密码太简单\n\n2. 使用 Authentication：\n   - AUTH password\n   - CONFIG SET requirepass password\n\n3. 监控：\n   - 监控认证使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Authentication 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置认证 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置认证；监控内存使用。' },
      { symptom: 'Authentication 性能不佳', cause: '1) 密码太简单 2) 没有使用 AUTH 3) 没有使用 CONFIG SET requirepass。', fix: '避免密码太简单；使用 AUTH；使用 CONFIG SET requirepass。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Authentication 实现认证', hint: 'AUTH password', answer: '# 使用 Authentication 实现认证\nAUTH mypassword\n# 返回：OK' },
      { level: '进阶', task: '使用 Authentication 实现安全认证', hint: 'CONFIG SET requirepass password', answer: '# 使用 Authentication 实现安全认证\nCONFIG SET requirepass mypassword\n# 返回：OK' }
    ]
  },

  "D3pZdAjwPFMRxX1-iyu5-": {
    mentalModel: 'How RDB Works 就像 Redis 的 RDB 工作原理——使用快照实现持久化，简单直观',
    sections: [
      { title: 'How RDB Works', content: 'Redis 的 How RDB Works：\n\n1. 基本概念：\n   - 使用快照实现持久化\n   - 适合备份场景\n   - 简单易用\n\n2. 常用命令：\n   - BGSAVE\n   - SAVE\n   - LASTSAVE\n\n3. 优势：\n   - 适合备份场景\n   - 简单易用\n   - 高性能' },
      { title: 'How RDB Works 最佳实践', content: 'Redis How RDB Works 的最佳实践：\n\n1. 合理设置 RDB：\n   - 根据场景设置 RDB\n   - 避免数据丢失\n\n2. 使用 How RDB Works：\n   - BGSAVE\n   - SAVE\n   - LASTSAVE\n\n3. 监控：\n   - 监控 RDB 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'How RDB Works 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 RDB 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 RDB；监控内存使用。' },
      { symptom: 'How RDB Works 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 BGSAVE/SAVE。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 BGSAVE/SAVE。' }
    ],
    exercises: [
      { level: '基础', task: '使用 How RDB Works 实现持久化', hint: 'BGSAVE', answer: '# 使用 How RDB Works 实现持久化\nBGSAVE\n# 返回：Background saving started' },
      { level: '进阶', task: '使用 How RDB Works 实现备份', hint: 'SAVE', answer: '# 使用 How RDB Works 实现备份\nSAVE\n# 返回：OK' }
    ]
  },

  "wsuKH7YwGDV6GYQbdhA4o": {
    mentalModel: 'Network Security 就像 Redis 的网络安全——使用网络安全保护数据，简单直观',
    sections: [
      { title: 'Network Security', content: 'Redis 的 Network Security：\n\n1. 基本概念：\n   - 使用网络安全保护数据\n   - 适合安全场景\n   - 简单易用\n\n2. 常用选项：\n   - bind ip\n   - requirepass password\n   - SSL/TLS\n\n3. 优势：\n   - 适合安全场景\n   - 简单易用\n   - 高性能' },
      { title: 'Network Security 最佳实践', content: 'Redis Network Security 的最佳实践：\n\n1. 合理设置网络安全：\n   - 根据场景设置网络安全\n   - 避免密码太简单\n\n2. 使用 Network Security：\n   - bind ip\n   - requirepass password\n   - SSL/TLS\n\n3. 监控：\n   - 监控网络安全使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Network Security 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置网络安全 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置网络安全；监控内存使用。' },
      { symptom: 'Network Security 性能不佳', cause: '1) 密码太简单 2) 没有使用 bind/requirepass 3) 没有使用 SSL/TLS。', fix: '避免密码太简单；使用 bind/requirepass；使用 SSL/TLS。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Network Security 实现网络安全', hint: 'bind ip', answer: '# 使用 Network Security 实现网络安全\nCONFIG SET bind 127.0.0.1\n# 返回：OK' },
      { level: '进阶', task: '使用 Network Security 实现安全网络', hint: 'requirepass password', answer: '# 使用 Network Security 实现安全网络\nCONFIG SET requirepass mypassword\n# 返回：OK' }
    ]
  },

  "_pb2DPrFUUZabKxWsuFUo": {
    mentalModel: 'Configuring Save Interval 就像 Redis 的配置保存间隔——配置保存间隔，简单直观',
    sections: [
      { title: 'Configuring Save Interval', content: 'Redis 的 Configuring Save Interval：\n\n1. 基本概念：\n   - 配置保存间隔\n   - 适合备份场景\n   - 简单易用\n\n2. 常用选项：\n   - save seconds changes\n   - CONFIG SET save seconds changes\n\n3. 优势：\n   - 适合备份场景\n   - 简单易用\n   - 高性能' },
      { title: 'Configuring Save Interval 最佳实践', content: 'Redis Configuring Save Interval 的最佳实践：\n\n1. 合理设置保存间隔：\n   - 根据场景设置保存间隔\n   - 避免数据丢失\n\n2. 使用 Configuring Save Interval：\n   - save seconds changes\n   - CONFIG SET save seconds changes\n\n3. 监控：\n   - 监控保存间隔使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Configuring Save Interval 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置保存间隔 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置保存间隔；监控内存使用。' },
      { symptom: 'Configuring Save Interval 性能不佳', cause: '1) 保存间隔太短 2) 没有使用 save 3) 没有使用 CONFIG SET save。', fix: '避免保存间隔太短；使用 save；使用 CONFIG SET save。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Configuring Save Interval 实现保存间隔', hint: 'save seconds changes', answer: '# 使用 Configuring Save Interval 实现保存间隔\nCONFIG SET save 60 1000\n# 返回：OK' },
      { level: '进阶', task: '使用 Configuring Save Interval 实现备份', hint: 'CONFIG SET save seconds changes', answer: '# 使用 Configuring Save Interval 实现备份\nCONFIG SET save 60 1000\n# 返回：OK' }
    ]
  },

  "gdiWwTQg6A-BFHdQBmgmH": {
    mentalModel: 'SSL/TLS Encryption 就像 Redis 的 SSL/TLS 加密——使用 SSL/TLS 加密数据，简单直观',
    sections: [
      { title: 'SSL/TLS Encryption', content: 'Redis 的 SSL/TLS Encryption：\n\n1. 基本概念：\n   - 使用 SSL/TLS 加密数据\n   - 适合安全场景\n   - 简单易用\n\n2. 常用选项：\n   - tls-port port\n   - tls-cert-file file\n   - tls-key-file file\n\n3. 优势：\n   - 适合安全场景\n   - 简单易用\n   - 高性能' },
      { title: 'SSL/TLS Encryption 最佳实践', content: 'Redis SSL/TLS Encryption 的最佳实践：\n\n1. 合理设置 SSL/TLS：\n   - 根据场景设置 SSL/TLS\n   - 避免密码太简单\n\n2. 使用 SSL/TLS Encryption：\n   - tls-port port\n   - tls-cert-file file\n   - tls-key-file file\n\n3. 监控：\n   - 监控 SSL/TLS 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'SSL/TLS Encryption 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 SSL/TLS 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 SSL/TLS；监控内存使用。' },
      { symptom: 'SSL/TLS Encryption 性能不佳', cause: '1) 密码太简单 2) 没有使用 tls-port/tls-cert-file/tls-key-file 3) 没有使用 SSL/TLS。', fix: '避免密码太简单；使用 tls-port/tls-cert-file/tls-key-file；使用 SSL/TLS。' }
    ],
    exercises: [
      { level: '基础', task: '使用 SSL/TLS Encryption 实现加密', hint: 'tls-port port', answer: '# 使用 SSL/TLS Encryption 实现加密\nCONFIG SET tls-port 6380\n# 返回：OK' },
      { level: '进阶', task: '使用 SSL/TLS Encryption 实现安全加密', hint: 'tls-cert-file file, tls-key-file file', answer: '# 使用 SSL/TLS Encryption 实现安全加密\nCONFIG SET tls-cert-file /path/to/cert.pem\nCONFIG SET tls-key-file /path/to/key.pem\n# 返回：OK' }
    ]
  },

  "Z6yJwUkcDX08HoMyf1LwX": {
    mentalModel: 'Usecases / Best Practices 就像 Redis 的应用场景和最佳实践——不同的场景适合不同的数据类型',
    sections: [
      { title: 'Usecases / Best Practices', content: 'Redis 的 Usecases / Best Practices：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: 'Usecases / Best Practices 最佳实践', content: 'Redis Usecases / Best Practices 的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Usecases / Best Practices 使用不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: 'Usecases / Best Practices 使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "vzp7DUpjklzIA0E9WxJQA": {
    mentalModel: 'Usecases / Best Practices 就像 Redis 的应用场景和最佳实践——不同的场景适合不同的数据类型',
    sections: [
      { title: 'Usecases / Best Practices', content: 'Redis 的 Usecases / Best Practices：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: 'Usecases / Best Practices 最佳实践', content: 'Redis Usecases / Best Practices 的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Usecases / Best Practices 使用不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: 'Usecases / Best Practices 使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "rSD8nJ-uNpHJVe5Hn66h7": {
    mentalModel: 'Replication Basics 就像 Redis 的复制基础——使用主从复制实现高可用，简单直观',
    sections: [
      { title: 'Replication Basics', content: 'Redis 的 Replication Basics：\n\n1. 基本概念：\n   - 使用主从复制实现高可用\n   - 适合高可用场景\n   - 简单易用\n\n2. 常用命令：\n   - replicaof host port\n   - INFO replication\n   - REPLICAOF NO ONE\n\n3. 优势：\n   - 适合高可用场景\n   - 简单易用\n   - 高性能' },
      { title: 'Replication Basics 最佳实践', content: 'Redis Replication Basics 的最佳实践：\n\n1. 合理设置复制：\n   - 根据场景设置复制\n   - 避免数据丢失\n\n2. 使用 Replication Basics：\n   - replicaof host port\n   - INFO replication\n   - REPLICAOF NO ONE\n\n3. 监控：\n   - 监控复制使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Replication Basics 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置复制 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置复制；监控内存使用。' },
      { symptom: 'Replication Basics 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 replicaof/INFO replication。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 replicaof/INFO replication。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Replication Basics 实现复制', hint: 'replicaof host port', answer: '# 使用 Replication Basics 实现复制\nREPLICAOF 127.0.0.1 6379\n# 返回：OK' },
      { level: '进阶', task: '使用 Replication Basics 实现高可用', hint: 'INFO replication', answer: '# 使用 Replication Basics 实现高可用\nINFO replication\n# 返回：复制信息' }
    ]
  },

  "nci3OB1NE1zJHUPfZCOpT": {
    mentalModel: 'Redis Sentinel 就像 Redis 的哨兵——使用哨兵实现自动故障转移，简单直观',
    sections: [
      { title: 'Redis Sentinel', content: 'Redis 的 Redis Sentinel：\n\n1. 基本概念：\n   - 使用哨兵实现自动故障转移\n   - 适合高可用场景\n   - 简单易用\n\n2. 常用命令：\n   - SENTINEL monitor name host port quorum\n   - SENTINEL failover name\n   - SENTINEL get-master-addr-by-name name\n\n3. 优势：\n   - 适合高可用场景\n   - 简单易用\n   - 高性能' },
      { title: 'Redis Sentinel 最佳实践', content: 'Redis Redis Sentinel 的最佳实践：\n\n1. 合理设置哨兵：\n   - 根据场景设置哨兵\n   - 避免数据丢失\n\n2. 使用 Redis Sentinel：\n   - SENTINEL monitor name host port quorum\n   - SENTINEL failover name\n   - SENTINEL get-master-addr-by-name name\n\n3. 监控：\n   - 监控哨兵使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Redis Sentinel 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置哨兵 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置哨兵；监控内存使用。' },
      { symptom: 'Redis Sentinel 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 SENTINEL monitor/failover/get-master-addr-by-name。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 SENTINEL monitor/failover/get-master-addr-by-name。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis Sentinel 实现哨兵', hint: 'SENTINEL monitor name host port quorum', answer: '# 使用 Redis Sentinel 实现哨兵\nSENTINEL monitor mymaster 127.0.0.1 6379 2\n# 返回：OK' },
      { level: '进阶', task: '使用 Redis Sentinel 实现自动故障转移', hint: 'SENTINEL failover name', answer: '# 使用 Redis Sentinel 实现自动故障转移\nSENTINEL failover mymaster\n# 返回：OK' }
    ]
  },

  "PTj6oxvpw8vP295WvAI80": {
    mentalModel: 'How AOF Works 就像 Redis 的 AOF 工作原理——使用日志实现持久化，简单直观',
    sections: [
      { title: 'How AOF Works', content: 'Redis 的 How AOF Works：\n\n1. 基本概念：\n   - 使用日志实现持久化\n   - 适合备份场景\n   - 简单易用\n\n2. 常用命令：\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n   - CONFIG SET appendfsync everysec\n\n3. 优势：\n   - 适合备份场景\n   - 简单易用\n   - 高性能' },
      { title: 'How AOF Works 最佳实践', content: 'Redis How AOF Works 的最佳实践：\n\n1. 合理设置 AOF：\n   - 根据场景设置 AOF\n   - 避免数据丢失\n\n2. 使用 How AOF Works：\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n   - CONFIG SET appendfsync everysec\n\n3. 监控：\n   - 监控 AOF 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'How AOF Works 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 AOF 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 AOF；监控内存使用。' },
      { symptom: 'How AOF Works 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 BGREWRITEAOF/appendonly/appendfsync。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 BGREWRITEAOF/appendonly/appendfsync。' }
    ],
    exercises: [
      { level: '基础', task: '使用 How AOF Works 实现持久化', hint: 'BGREWRITEAOF', answer: '# 使用 How AOF Works 实现持久化\nBGREWRITEAOF\n# 返回：Background append only file rewriting started' },
      { level: '进阶', task: '使用 How AOF Works 实现备份', hint: 'CONFIG SET appendonly yes, CONFIG SET appendfsync everysec', answer: '# 使用 How AOF Works 实现备份\nCONFIG SET appendonly yes\nCONFIG SET appendfsync everysec\n# 返回：OK' }
    ]
  },

  "AQiCcHS6dBAAAPloxiXub": {
    mentalModel: 'Clustering 就像 Redis 的集群——使用集群实现水平扩展，简单直观',
    sections: [
      { title: 'Clustering', content: 'Redis 的 Clustering：\n\n1. 基本概念：\n   - 使用集群实现水平扩展\n   - 适合大规模场景\n   - 简单易用\n\n2. 常用命令：\n   - CLUSTER INFO\n   - CLUSTER NODES\n   - CLUSTER ADDSLOTS\n\n3. 优势：\n   - 适合大规模场景\n   - 简单易用\n   - 高性能' },
      { title: 'Clustering 最佳实践', content: 'Redis Clustering 的最佳实践：\n\n1. 合理设置集群：\n   - 根据场景设置集群\n   - 避免数据丢失\n\n2. 使用 Clustering：\n   - CLUSTER INFO\n   - CLUSTER NODES\n   - CLUSTER ADDSLOTS\n\n3. 监控：\n   - 监控集群使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Clustering 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置集群 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置集群；监控内存使用。' },
      { symptom: 'Clustering 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 CLUSTER INFO/NODES/ADDSLOTS。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 CLUSTER INFO/NODES/ADDSLOTS。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Clustering 实现集群', hint: 'CLUSTER INFO', answer: '# 使用 Clustering 实现集群\nCLUSTER INFO\n# 返回：集群信息' },
      { level: '进阶', task: '使用 Clustering 实现水平扩展', hint: 'CLUSTER NODES', answer: '# 使用 Clustering 实现水平扩展\nCLUSTER NODES\n# 返回：节点信息' }
    ]
  },

  "ibaZ34-laQtUyxAsERi7o": {
    mentalModel: 'AOF rewrite & compaction 就像 Redis 的 AOF 重写和压缩——重写和压缩 AOF，简单直观',
    sections: [
      { title: 'AOF rewrite & compaction', content: 'Redis 的 AOF rewrite & compaction：\n\n1. 基本概念：\n   - 重写和压缩 AOF\n   - 适合备份场景\n   - 简单易用\n\n2. 常用命令：\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n   - CONFIG SET appendfsync everysec\n\n3. 优势：\n   - 适合备份场景\n   - 简单易用\n   - 高性能' },
      { title: 'AOF rewrite & compaction 最佳实践', content: 'Redis AOF rewrite & compaction 的最佳实践：\n\n1. 合理设置 AOF：\n   - 根据场景设置 AOF\n   - 避免数据丢失\n\n2. 使用 AOF rewrite & compaction：\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n   - CONFIG SET appendfsync everysec\n\n3. 监控：\n   - 监控 AOF 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'AOF rewrite & compaction 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 AOF 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 AOF；监控内存使用。' },
      { symptom: 'AOF rewrite & compaction 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 BGREWRITEAOF/appendonly/appendfsync。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 BGREWRITEAOF/appendonly/appendfsync。' }
    ],
    exercises: [
      { level: '基础', task: '使用 AOF rewrite & compaction 实现重写', hint: 'BGREWRITEAOF', answer: '# 使用 AOF rewrite & compaction 实现重写\nBGREWRITEAOF\n# 返回：Background append only file rewriting started' },
      { level: '进阶', task: '使用 AOF rewrite & compaction 实现压缩', hint: 'CONFIG SET appendonly yes, CONFIG SET appendfsync everysec', answer: '# 使用 AOF rewrite & compaction 实现压缩\nCONFIG SET appendonly yes\nCONFIG SET appendfsync everysec\n# 返回：OK' }
    ]
  },

  "Sd1ENOXSFCz1YqccXjr2A": {
    mentalModel: 'Max Memory Policy 就像 Redis 的最大内存策略——配置最大内存策略，简单直观',
    sections: [
      { title: 'Max Memory Policy', content: 'Redis 的 Max Memory Policy：\n\n1. 基本概念：\n   - 配置最大内存策略\n   - 适合内存管理场景\n   - 简单易用\n\n2. 常用选项：\n   - maxmemory bytes\n   - maxmemory-policy policy\n   - CONFIG SET maxmemory bytes\n\n3. 优势：\n   - 适合内存管理场景\n   - 简单易用\n   - 高性能' },
      { title: 'Max Memory Policy 最佳实践', content: 'Redis Max Memory Policy 的最佳实践：\n\n1. 合理设置最大内存策略：\n   - 根据场景设置最大内存策略\n   - 避免数据丢失\n\n2. 使用 Max Memory Policy：\n   - maxmemory bytes\n   - maxmemory-policy policy\n   - CONFIG SET maxmemory bytes\n\n3. 监控：\n   - 监控最大内存策略使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Max Memory Policy 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置最大内存策略 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置最大内存策略；监控内存使用。' },
      { symptom: 'Max Memory Policy 性能不佳', cause: '1) 内存太多 2) 没有使用 Pipeline 3) 没有使用 maxmemory/maxmemory-policy。', fix: '避免内存太多；使用 Pipeline 批量执行命令；使用 maxmemory/maxmemory-policy。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Max Memory Policy 实现最大内存策略', hint: 'maxmemory bytes', answer: '# 使用 Max Memory Policy 实现最大内存策略\nCONFIG SET maxmemory 1gb\n# 返回：OK' },
      { level: '进阶', task: '使用 Max Memory Policy 实现内存管理', hint: 'maxmemory-policy policy', answer: '# 使用 Max Memory Policy 实现内存管理\nCONFIG SET maxmemory-policy allkeys-lru\n# 返回：OK' }
    ]
  },

  "9ToKTUqbi-NV5Wcwb21PT": {
    mentalModel: 'Truncation / Corruption 就像 Redis 的截断和损坏——处理截断和损坏，简单直观',
    sections: [
      { title: 'Truncation / Corruption', content: 'Redis 的 Truncation / Corruption：\n\n1. 基本概念：\n   - 处理截断和损坏\n   - 适合备份场景\n   - 简单易用\n\n2. 常用命令：\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n   - CONFIG SET appendfsync everysec\n\n3. 优势：\n   - 适合备份场景\n   - 简单易用\n   - 高性能' },
      { title: 'Truncation / Corruption 最佳实践', content: 'Redis Truncation / Corruption 的最佳实践：\n\n1. 合理设置截断和损坏：\n   - 根据场景设置截断和损坏\n   - 避免数据丢失\n\n2. 使用 Truncation / Corruption：\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n   - CONFIG SET appendfsync everysec\n\n3. 监控：\n   - 监控截断和损坏使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Truncation / Corruption 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置截断和损坏 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置截断和损坏；监控内存使用。' },
      { symptom: 'Truncation / Corruption 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 BGREWRITEAOF/appendonly/appendfsync。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 BGREWRITEAOF/appendonly/appendfsync。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Truncation / Corruption 实现截断', hint: 'BGREWRITEAOF', answer: '# 使用 Truncation / Corruption 实现截断\nBGREWRITEAOF\n# 返回：Background append only file rewriting started' },
      { level: '进阶', task: '使用 Truncation / Corruption 实现损坏', hint: 'CONFIG SET appendonly yes, CONFIG SET appendfsync everysec', answer: '# 使用 Truncation / Corruption 实现损坏\nCONFIG SET appendonly yes\nCONFIG SET appendfsync everysec\n# 返回：OK' }
    ]
  },

  "_GdTXcJO8uJlhPdfrmeXG": {
    mentalModel: 'Search 就像 Redis 的搜索——使用搜索功能查找数据，简单直观',
    sections: [
      { title: 'Search', content: 'Redis 的 Search：\n\n1. 基本概念：\n   - 使用搜索功能查找数据\n   - 适合搜索场景\n   - 简单易用\n\n2. 常用命令：\n   - FT.CREATE index ON HASH PREFIX 1 prefix SCHEMA field type\n   - FT.SEARCH index query\n   - FT.DROPINDEX index\n\n3. 优势：\n   - 适合搜索场景\n   - 简单易用\n   - 高性能' },
      { title: 'Search 最佳实践', content: 'Redis Search 的最佳实践：\n\n1. 合理设置搜索：\n   - 根据场景设置搜索\n   - 避免数据丢失\n\n2. 使用 Search：\n   - FT.CREATE index ON HASH PREFIX 1 prefix SCHEMA field type\n   - FT.SEARCH index query\n   - FT.DROPINDEX index\n\n3. 监控：\n   - 监控搜索使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Search 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置搜索 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置搜索；监控内存使用。' },
      { symptom: 'Search 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 FT.CREATE/FT.SEARCH/FT.DROPINDEX。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 FT.CREATE/FT.SEARCH/FT.DROPINDEX。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Search 实现搜索', hint: 'FT.CREATE index ON HASH PREFIX 1 prefix SCHEMA field type', answer: '# 使用 Search 实现搜索\nFT.CREATE myindex ON HASH PREFIX 1 user: SCHEMA name TEXT\n# 返回：OK' },
      { level: '进阶', task: '使用 Search 实现全文搜索', hint: 'FT.SEARCH index query', answer: '# 使用 Search 实现全文搜索\nFT.SEARCH myindex "Alice"\n# 返回：搜索结果' }
    ]
  },

  "xF0wQYmtwXYkrzvWg5gOO": {
    mentalModel: 'Memory Management 就像 Redis 的内存管理——管理内存，简单直观',
    sections: [
      { title: 'Memory Management', content: 'Redis 的 Memory Management：\n\n1. 基本概念：\n   - 管理内存\n   - 适合内存管理场景\n   - 简单易用\n\n2. 常用命令：\n   - INFO memory\n   - CONFIG SET maxmemory bytes\n   - CONFIG SET maxmemory-policy policy\n\n3. 优势：\n   - 适合内存管理场景\n   - 简单易用\n   - 高性能' },
      { title: 'Memory Management 最佳实践', content: 'Redis Memory Management 的最佳实践：\n\n1. 合理设置内存管理：\n   - 根据场景设置内存管理\n   - 避免数据丢失\n\n2. 使用 Memory Management：\n   - INFO memory\n   - CONFIG SET maxmemory bytes\n   - CONFIG SET maxmemory-policy policy\n\n3. 监控：\n   - 监控内存管理使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Memory Management 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置内存管理 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置内存管理；监控内存使用。' },
      { symptom: 'Memory Management 性能不佳', cause: '1) 内存太多 2) 没有使用 Pipeline 3) 没有使用 INFO memory/maxmemory/maxmemory-policy。', fix: '避免内存太多；使用 Pipeline 批量执行命令；使用 INFO memory/maxmemory/maxmemory-policy。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Memory Management 实现内存管理', hint: 'INFO memory', answer: '# 使用 Memory Management 实现内存管理\nINFO memory\n# 返回：内存信息' },
      { level: '进阶', task: '使用 Memory Management 实现内存优化', hint: 'CONFIG SET maxmemory bytes, CONFIG SET maxmemory-policy policy', answer: '# 使用 Memory Management 实现内存优化\nCONFIG SET maxmemory 1gb\nCONFIG SET maxmemory-policy allkeys-lru\n# 返回：OK' }
    ]
  },

  "VvOQUO22ZF8VvDSqHENNU": {
    mentalModel: 'Usecases 就像 Redis 的应用场景——不同的场景适合不同的数据类型',
    sections: [
      { title: 'Usecases', content: 'Redis 的典型应用场景：\n\n1. 缓存层：\n   - 加速数据库查询（命中率可达 90%+）\n   - 降低数据库负载\n   - 提升响应速度（微秒级 vs 毫秒级）\n\n2. 会话存储：\n   - 用户登录状态\n   - 购物车\n   - 分布式会话\n\n3. 实时计数器：\n   - 点赞数、在线人数\n   - 浏览量、播放量\n\n4. 排行榜：\n   - 游戏积分、销量排名\n   - 使用 Sorted Set\n\n5. 消息队列：\n   - 简单的任务队列\n   - 使用 List（LPUSH/BRPOP）\n\n6. 分布式锁：\n   - 跨服务协调\n   - 使用 SETNX' },
      { title: 'Usecases 最佳实践', content: 'Redis Usecases 的最佳实践：\n\n1. 合理选择场景：\n   - 根据场景选择合适的应用\n   - 避免使用不合适的场景\n\n2. 合理设置 TTL：\n   - 根据数据生命周期设置 TTL\n   - 避免数据堆积\n\n3. 监控：\n   - 监控应用场景使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Usecases 使用不当', cause: '1) 选择了不合适的场景 2) 没有了解场景的适用场景 3) 没有参考官方文档。', fix: '根据场景选择合适的应用；参考官方文档；了解场景的适用场景。' },
      { symptom: 'Usecases 使用不当', cause: '1) 没有合理设置 TTL 2) 没有监控应用场景使用情况 3) 没有监控内存使用。', fix: '合理设置 TTL；监控应用场景使用情况；监控内存使用。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis 实现缓存层', hint: 'SET key value EX, GET key', answer: '# 设置缓存\nSET user:123 "Alice" EX 3600\n\n# 获取缓存\nGET user:123\n# 返回："Alice"' },
      { level: '进阶', task: '使用 Redis 实现会话存储', hint: 'SET key value EX, GET key', answer: '# 设置会话\nSET session:123 "user:123" EX 1800\n\n# 获取会话\nGET session:123\n# 返回："user:123"' }
    ]
  },

  "RBr8opWSh2TKXC8Fmdg0j": {
    mentalModel: 'RedisTimeSeries 就像 Redis 的时间序列——使用时间序列存储时间序列数据，简单直观',
    sections: [
      { title: 'RedisTimeSeries', content: 'Redis 的 RedisTimeSeries：\n\n1. 基本概念：\n   - 使用时间序列存储时间序列数据\n   - 适合时间序列场景\n   - 简单易用\n\n2. 常用命令：\n   - TS.CREATE key\n   - TS.ADD key timestamp value\n   - TS.GET key\n\n3. 优势：\n   - 适合时间序列场景\n   - 简单易用\n   - 高性能' },
      { title: 'RedisTimeSeries 最佳实践', content: 'Redis RedisTimeSeries 的最佳实践：\n\n1. 合理设置时间序列：\n   - 根据场景设置时间序列\n   - 避免数据丢失\n\n2. 使用 RedisTimeSeries：\n   - TS.CREATE key\n   - TS.ADD key timestamp value\n   - TS.GET key\n\n3. 监控：\n   - 监控时间序列使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'RedisTimeSeries 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置时间序列 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置时间序列；监控内存使用。' },
      { symptom: 'RedisTimeSeries 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 TS.CREATE/TS.ADD/TS.GET。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 TS.CREATE/TS.ADD/TS.GET。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RedisTimeSeries 实现时间序列', hint: 'TS.CREATE key', answer: '# 使用 RedisTimeSeries 实现时间序列\nTS.CREATE mytimeseries\n# 返回：OK' },
      { level: '进阶', task: '使用 RedisTimeSeries 实现时间序列数据', hint: 'TS.ADD key timestamp value', answer: '# 使用 RedisTimeSeries 实现时间序列数据\nTS.ADD mytimeseries 1705363200 100\n# 返回：OK' }
    ]
  },

  "q2Jw49QUWCUGIfcEC1bZI": {
    mentalModel: 'INFO 就像 Redis 的信息命令——获取服务器信息，简单直观',
    sections: [
      { title: 'INFO', content: 'Redis 的 INFO：\n\n1. 基本概念：\n   - 获取服务器信息\n   - 适合监控场景\n   - 简单易用\n\n2. 常用命令：\n   - INFO\n   - INFO section\n   - INFO all\n\n3. 优势：\n   - 适合监控场景\n   - 简单易用\n   - 高性能' },
      { title: 'INFO 最佳实践', content: 'Redis INFO 的最佳实践：\n\n1. 合理设置 INFO：\n   - 根据场景设置 INFO\n   - 避免数据丢失\n\n2. 使用 INFO：\n   - INFO\n   - INFO section\n   - INFO all\n\n3. 监控：\n   - 监控 INFO 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'INFO 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 INFO 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 INFO；监控内存使用。' },
      { symptom: 'INFO 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 INFO/INFO section/INFO all。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 INFO/INFO section/INFO all。' }
    ],
    exercises: [
      { level: '基础', task: '使用 INFO 获取服务器信息', hint: 'INFO', answer: '# 使用 INFO 获取服务器信息\nINFO\n# 返回：服务器信息' },
      { level: '进阶', task: '使用 INFO 获取内存信息', hint: 'INFO memory', answer: '# 使用 INFO 获取内存信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "jBtEiylcedtaE6E20Uk4V": {
    mentalModel: 'MONITOR 就像 Redis 的监控命令——监控所有命令，简单直观',
    sections: [
      { title: 'MONITOR', content: 'Redis 的 MONITOR：\n\n1. 基本概念：\n   - 监控所有命令\n   - 适合监控场景\n   - 简单易用\n\n2. 常用命令：\n   - MONITOR\n   - MONITOR | grep pattern\n\n3. 优势：\n   - 适合监控场景\n   - 简单易用\n   - 高性能' },
      { title: 'MONITOR 最佳实践', content: 'Redis MONITOR 的最佳实践：\n\n1. 合理设置 MONITOR：\n   - 根据场景设置 MONITOR\n   - 避免数据丢失\n\n2. 使用 MONITOR：\n   - MONITOR\n   - MONITOR | grep pattern\n\n3. 监控：\n   - 监控 MONITOR 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'MONITOR 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 MONITOR 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 MONITOR；监控内存使用。' },
      { symptom: 'MONITOR 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 MONITOR。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 MONITOR。' }
    ],
    exercises: [
      { level: '基础', task: '使用 MONITOR 监控所有命令', hint: 'MONITOR', answer: '# 使用 MONITOR 监控所有命令\nMONITOR\n# 返回：所有命令' },
      { level: '进阶', task: '使用 MONITOR 监控特定命令', hint: 'MONITOR | grep pattern', answer: '# 使用 MONITOR 监控特定命令\nMONITOR | grep "SET"\n# 返回：SET 命令' }
    ]
  },

  "yaCWw2KjX58SaPajUAb0d": {
    mentalModel: 'Slow Log Analysis 就像 Redis 的慢日志分析——分析慢日志，简单直观',
    sections: [
      { title: 'Slow Log Analysis', content: 'Redis 的 Slow Log Analysis：\n\n1. 基本概念：\n   - 分析慢日志\n   - 适合性能分析场景\n   - 简单易用\n\n2. 常用命令：\n   - SLOWLOG GET\n   - SLOWLOG LEN\n   - SLOWLOG RESET\n\n3. 优势：\n   - 适合性能分析场景\n   - 简单易用\n   - 高性能' },
      { title: 'Slow Log Analysis 最佳实践', content: 'Redis Slow Log Analysis 的最佳实践：\n\n1. 合理设置 Slow Log Analysis：\n   - 根据场景设置 Slow Log Analysis\n   - 避免数据丢失\n\n2. 使用 Slow Log Analysis：\n   - SLOWLOG GET\n   - SLOWLOG LEN\n   - SLOWLOG RESET\n\n3. 监控：\n   - 监控 Slow Log Analysis 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Slow Log Analysis 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 Slow Log Analysis 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 Slow Log Analysis；监控内存使用。' },
      { symptom: 'Slow Log Analysis 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 SLOWLOG GET/SLOWLOG LEN/SLOWLOG RESET。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 SLOWLOG GET/SLOWLOG LEN/SLOWLOG RESET。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Slow Log Analysis 分析慢日志', hint: 'SLOWLOG GET', answer: '# 使用 Slow Log Analysis 分析慢日志\nSLOWLOG GET\n# 返回：慢日志' },
      { level: '进阶', task: '使用 Slow Log Analysis 分析慢日志数量', hint: 'SLOWLOG LEN', answer: '# 使用 Slow Log Analysis 分析慢日志数量\nSLOWLOG LEN\n# 返回：慢日志数量' }
    ]
  },

  "GwVL5CvbnHsiWb1hVh7lK": {
    mentalModel: 'RedisBloom 就像 Redis 的布隆过滤器——使用布隆过滤器统计唯一成员，简单直观',
    sections: [
      { title: 'RedisBloom', content: 'Redis 的 RedisBloom：\n\n1. 基本概念：\n   - 使用布隆过滤器统计唯一成员\n   - 适合 UV 统计场景\n   - 简单易用\n\n2. 常用命令：\n   - BF.ADD key member\n   - PFCOUNT key\n   - PFMERGE destkey key1 key2\n\n3. 优势：\n   - 适合 UV 统计场景\n   - 简单易用\n   - 高性能' },
      { title: 'RedisBloom 最佳实践', content: 'Redis RedisBloom 的最佳实践：\n\n1. 合理设置布隆过滤器：\n   - 根据场景设置布隆过滤器\n   - 避免数据丢失\n\n2. 使用 RedisBloom：\n   - BF.ADD key member\n   - PFCOUNT key\n   - PFMERGE destkey key1 key2\n\n3. 监控：\n   - 监控布隆过滤器使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'RedisBloom 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置布隆过滤器 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置布隆过滤器；监控内存使用。' },
      { symptom: 'RedisBloom 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 BF.ADD/PFCOUNT/PFMERGE。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 BF.ADD/PFCOUNT/PFMERGE。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RedisBloom 实现布隆过滤器', hint: 'BF.ADD key member', answer: '# 使用 RedisBloom 实现布隆过滤器\nBF.ADD mybloom "user:123"\n# 返回：1（新增）' },
      { level: '进阶', task: '使用 RedisBloom 实现 UV 统计', hint: 'PFCOUNT key', answer: '# 使用 RedisBloom 实现 UV 统计\nPFCOUNT mybloom\n# 返回：唯一成员数量' }
    ]
  },

  "kgHwK4N-sfh6dHjd_D_me": {
    mentalModel: 'redis-benchmark 就像 Redis 的基准测试——使用基准测试测试性能，简单直观',
    sections: [
      { title: 'redis-benchmark', content: 'Redis 的 redis-benchmark：\n\n1. 基本概念：\n   - 使用基准测试测试性能\n   - 适合性能测试场景\n   - 简单易用\n\n2. 常用命令：\n   - redis-benchmark\n   - redis-benchmark -t set,get -n 100000\n   - redis-benchmark -c 100\n\n3. 优势：\n   - 适合性能测试场景\n   - 简单易用\n   - 高性能' },
      { title: 'redis-benchmark 最佳实践', content: 'Redis redis-benchmark 的最佳实践：\n\n1. 合理设置基准测试：\n   - 根据场景设置基准测试\n   - 避免数据丢失\n\n2. 使用 redis-benchmark：\n   - redis-benchmark\n   - redis-benchmark -t set,get -n 100000\n   - redis-benchmark -c 100\n\n3. 监控：\n   - 监控基准测试使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'redis-benchmark 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置基准测试 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置基准测试；监控内存使用。' },
      { symptom: 'redis-benchmark 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 redis-benchmark。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 redis-benchmark。' }
    ],
    exercises: [
      { level: '基础', task: '使用 redis-benchmark 测试性能', hint: 'redis-benchmark', answer: '# 使用 redis-benchmark 测试性能\nredis-benchmark\n# 返回：性能测试结果' },
      { level: '进阶', task: '使用 redis-benchmark 测试特定命令', hint: 'redis-benchmark -t set,get -n 100000', answer: '# 使用 redis-benchmark 测试特定命令\nredis-benchmark -t set,get -n 100000\n# 返回：特定命令的性能测试结果' }
    ]
  },

  "jicsfYw56VrbRUt7M8c85": {
    mentalModel: 'RedisJSON 就像 Redis 的 JSON——使用 JSON 存储数据，简单直观',
    sections: [
      { title: 'RedisJSON', content: 'Redis 的 RedisJSON：\n\n1. 基本概念：\n   - 使用 JSON 存储数据\n   - 适合 JSON 场景\n   - 简单易用\n\n2. 常用命令：\n   - JSON.SET key path value\n   - JSON.GET key path\n   - JSON.DEL key path\n\n3. 优势：\n   - 适合 JSON 场景\n   - 简单易用\n   - 高性能' },
      { title: 'RedisJSON 最佳实践', content: 'Redis RedisJSON 的最佳实践：\n\n1. 合理设置 JSON：\n   - 根据场景设置 JSON\n   - 避免数据丢失\n\n2. 使用 RedisJSON：\n   - JSON.SET key path value\n   - JSON.GET key path\n   - JSON.DEL key path\n\n3. 监控：\n   - 监控 JSON 使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'RedisJSON 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置 JSON 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置 JSON；监控内存使用。' },
      { symptom: 'RedisJSON 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 JSON.SET/JSON.GET/JSON.DEL。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 JSON.SET/JSON.GET/JSON.DEL。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RedisJSON 实现 JSON', hint: 'JSON.SET key path value', answer: '# 使用 RedisJSON 实现 JSON\nJSON.SET myjson $ \'{"name": "Alice", "age": 30}\'\n# 返回：OK' },
      { level: '进阶', task: '使用 RedisJSON 实现 JSON 数据', hint: 'JSON.GET key path', answer: '# 使用 RedisJSON 实现 JSON 数据\nJSON.GET myjson $.name\n# 返回："Alice"' }
    ]
  },

  "XBPwHgIsXupMsyoOFkJZ0": {
    mentalModel: 'RedisInsight 就像 Redis 的可视化工具——使用可视化工具管理 Redis，简单直观',
    sections: [
      { title: 'RedisInsight', content: 'Redis 的 RedisInsight：\n\n1. 基本概念：\n   - 使用可视化工具管理 Redis\n   - 适合管理场景\n   - 简单易用\n\n2. 常用功能：\n   - 连接管理\n   - 键管理\n   - 性能监控\n\n3. 优势：\n   - 适合管理场景\n   - 简单易用\n   - 高性能' },
      { title: 'RedisInsight 最佳实践', content: 'Redis RedisInsight 的最佳实践：\n\n1. 合理设置可视化工具：\n   - 根据场景设置可视化工具\n   - 避免数据丢失\n\n2. 使用 RedisInsight：\n   - 连接管理\n   - 键管理\n   - 性能监控\n\n3. 监控：\n   - 监控可视化工具使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'RedisInsight 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置可视化工具 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置可视化工具；监控内存使用。' },
      { symptom: 'RedisInsight 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用连接管理/键管理/性能监控。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用连接管理/键管理/性能监控。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RedisInsight 连接 Redis', hint: '连接管理', answer: '# 使用 RedisInsight 连接 Redis\n# 在 RedisInsight 中添加连接\n# 返回：连接成功' },
      { level: '进阶', task: '使用 RedisInsight 管理键', hint: '键管理', answer: '# 使用 RedisInsight 管理键\n# 在 RedisInsight 中管理键\n# 返回：键列表' }
    ]
  },

  "3S-qqOlfr60HR4VvDr4He": {
    mentalModel: 'RDB vs AOF Tradeoffs 就像 Redis 的 RDB 和 AOF 对比——对比 RDB 和 AOF，简单直观',
    sections: [
      { title: 'RDB vs AOF Tradeoffs', content: 'Redis 的 RDB vs AOF Tradeoffs：\n\n1. 基本概念：\n   - 对比 RDB 和 AOF\n   - 适合选择持久化方式场景\n   - 简单易用\n\n2. RDB 优势：\n   - 文件紧凑，适合备份\n   - 恢复速度快\n   - 性能影响小\n\n3. AOF 优势：\n   - 数据丢失少（最多 1 秒）\n   - 适合安全场景\n   - 支持重写和压缩' },
      { title: 'RDB vs AOF Tradeoffs 最佳实践', content: 'Redis RDB vs AOF Tradeoffs 的最佳实践：\n\n1. 合理选择持久化方式：\n   - 根据场景选择持久化方式\n   - 避免数据丢失\n\n2. 使用 RDB vs AOF Tradeoffs：\n   - RDB：适合备份场景\n   - AOF：适合安全场景\n   - 混合持久化：兼顾两者\n\n3. 监控：\n   - 监控持久化使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'RDB vs AOF Tradeoffs 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理选择持久化方式 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理选择持久化方式；监控内存使用。' },
      { symptom: 'RDB vs AOF Tradeoffs 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 RDB/AOF。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 RDB/AOF。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RDB vs AOF Tradeoffs 选择持久化方式', hint: 'RDB/AOF', answer: '# 使用 RDB vs AOF Tradeoffs 选择持久化方式\n# 根据场景选择 RDB 或 AOF' },
      { level: '进阶', task: '使用 RDB vs AOF Tradeoffs 实现混合持久化', hint: 'RDB + AOF', answer: '# 使用 RDB vs AOF Tradeoffs 实现混合持久化\n# 使用 RDB + AOF 实现混合持久化' }
    ]
  },

  "2p5RF4lVYfRvYTo1Ofm-a": {
    mentalModel: 'Monitoring 就像 Redis 的监控——监控 Redis 使用情况，简单直观',
    sections: [
      { title: 'Monitoring', content: 'Redis 的 Monitoring：\n\n1. 基本概念：\n   - 监控 Redis 使用情况\n   - 适合监控场景\n   - 简单易用\n\n2. 常用命令：\n   - INFO\n   - MONITOR\n   - SLOWLOG GET\n\n3. 优势：\n   - 适合监控场景\n   - 简单易用\n   - 高性能' },
      { title: 'Monitoring 最佳实践', content: 'Redis Monitoring 的最佳实践：\n\n1. 合理设置监控：\n   - 根据场景设置监控\n   - 避免数据丢失\n\n2. 使用 Monitoring：\n   - INFO\n   - MONITOR\n   - SLOWLOG GET\n\n3. 监控：\n   - 监控监控使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Monitoring 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置监控 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置监控；监控内存使用。' },
      { symptom: 'Monitoring 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 INFO/MONITOR/SLOWLOG GET。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 INFO/MONITOR/SLOWLOG GET。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Monitoring 监控 Redis', hint: 'INFO', answer: '# 使用 Monitoring 监控 Redis\nINFO\n# 返回：服务器信息' },
      { level: '进阶', task: '使用 Monitoring 监控特定信息', hint: 'INFO memory', answer: '# 使用 Monitoring 监控特定信息\nINFO memory\n# 返回：内存信息' }
    ]
  },

  "y5FPSAi6T-5X9SUfR58_-": {
    mentalModel: 'RedisCommander 就像 Redis 的可视化工具——使用可视化工具管理 Redis，简单直观',
    sections: [
      { title: 'RedisCommander', content: 'Redis 的 RedisCommander：\n\n1. 基本概念：\n   - 使用可视化工具管理 Redis\n   - 适合管理场景\n   - 简单易用\n\n2. 常用功能：\n   - 连接管理\n   - 键管理\n   - 性能监控\n\n3. 优势：\n   - 适合管理场景\n   - 简单易用\n   - 高性能' },
      { title: 'RedisCommander 最佳实践', content: 'Redis RedisCommander 的最佳实践：\n\n1. 合理设置可视化工具：\n   - 根据场景设置可视化工具\n   - 避免数据丢失\n\n2. 使用 RedisCommander：\n   - 连接管理\n   - 键管理\n   - 性能监控\n\n3. 监控：\n   - 监控可视化工具使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'RedisCommander 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置可视化工具 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置可视化工具；监控内存使用。' },
      { symptom: 'RedisCommander 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用连接管理/键管理/性能监控。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用连接管理/键管理/性能监控。' }
    ],
    exercises: [
      { level: '基础', task: '使用 RedisCommander 连接 Redis', hint: '连接管理', answer: '# 使用 RedisCommander 连接 Redis\n# 在 RedisCommander 中添加连接\n# 返回：连接成功' },
      { level: '进阶', task: '使用 RedisCommander 管理键', hint: '键管理', answer: '# 使用 RedisCommander 管理键\n# 在 RedisCommander 中管理键\n# 返回：键列表' }
    ]
  },

  "S5Y26m1oHCQpB-oLCdtac": {
    mentalModel: 'Hybrid Persistence 就像 Redis 的混合持久化——结合 RDB 和 AOF 实现持久化，简单直观',
    sections: [
      { title: 'Hybrid Persistence', content: 'Redis 的 Hybrid Persistence：\n\n1. 基本概念：\n   - 结合 RDB 和 AOF 实现持久化\n   - 适合备份场景\n   - 简单易用\n\n2. 常用命令：\n   - BGSAVE\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n\n3. 优势：\n   - 适合备份场景\n   - 简单易用\n   - 高性能' },
      { title: 'Hybrid Persistence 最佳实践', content: 'Redis Hybrid Persistence 的最佳实践：\n\n1. 合理设置混合持久化：\n   - 根据场景设置混合持久化\n   - 避免数据丢失\n\n2. 使用 Hybrid Persistence：\n   - BGSAVE\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n\n3. 监控：\n   - 监控混合持久化使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Hybrid Persistence 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置混合持久化 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置混合持久化；监控内存使用。' },
      { symptom: 'Hybrid Persistence 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 BGSAVE/BGREWRITEAOF/appendonly。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 BGSAVE/BGREWRITEAOF/appendonly。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Hybrid Persistence 实现持久化', hint: 'BGSAVE, BGREWRITEAOF', answer: '# 使用 Hybrid Persistence 实现持久化\nBGSAVE\nBGREWRITEAOF\n# 返回：Background saving started / Background append only file rewriting started' },
      { level: '进阶', task: '使用 Hybrid Persistence 实现备份', hint: 'CONFIG SET appendonly yes', answer: '# 使用 Hybrid Persistence 实现备份\nCONFIG SET appendonly yes\n# 返回：OK' }
    ]
  },

  "hLIT00Iz7rV56ZBIUhWYn": {
    mentalModel: 'Redis Modules 就像 Redis 的模块——使用模块扩展 Redis 功能，简单直观',
    sections: [
      { title: 'Redis Modules', content: 'Redis 的 Redis Modules：\n\n1. 基本概念：\n   - 使用模块扩展 Redis 功能\n   - 适合扩展场景\n   - 简单易用\n\n2. 常用模块：\n   - RedisJSON\n   - RedisTimeSeries\n   - RedisBloom\n   - RediSearch\n\n3. 优势：\n   - 适合扩展场景\n   - 简单易用\n   - 高性能' },
      { title: 'Redis Modules 最佳实践', content: 'Redis Redis Modules 的最佳实践：\n\n1. 合理设置模块：\n   - 根据场景设置模块\n   - 避免数据丢失\n\n2. 使用 Redis Modules：\n   - RedisJSON\n   - RedisTimeSeries\n   - RedisBloom\n   - RediSearch\n\n3. 监控：\n   - 监控模块使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Redis Modules 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置模块 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置模块；监控内存使用。' },
      { symptom: 'Redis Modules 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 RedisJSON/RedisTimeSeries/RedisBloom/RediSearch。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 RedisJSON/RedisTimeSeries/RedisBloom/RediSearch。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis Modules 扩展 Redis', hint: 'RedisJSON', answer: '# 使用 Redis Modules 扩展 Redis\n# 使用 RedisJSON 扩展 Redis' },
      { level: '进阶', task: '使用 Redis Modules 实现特定功能', hint: 'RedisTimeSeries', answer: '# 使用 Redis Modules 实现特定功能\n# 使用 RedisTimeSeries 实现特定功能' }
    ]
  },

  "giyKPtQ-pziA064P8OQD-": {
    mentalModel: 'redis.conf 就像 Redis 的配置文件——配置 Redis，简单直观',
    sections: [
      { title: 'redis.conf', content: 'Redis 的 redis.conf：\n\n1. 基本概念：\n   - 配置 Redis\n   - 适合配置场景\n   - 简单易用\n\n2. 常用配置：\n   - bind ip\n   - port port\n   - requirepass password\n   - maxmemory bytes\n   - maxmemory-policy policy\n\n3. 优势：\n   - 适合配置场景\n   - 简单易用\n   - 高性能' },
      { title: 'redis.conf 最佳实践', content: 'Redis redis.conf 的最佳实践：\n\n1. 合理设置配置文件：\n   - 根据场景设置配置文件\n   - 避免数据丢失\n\n2. 使用 redis.conf：\n   - bind ip\n   - port port\n   - requirepass password\n   - maxmemory bytes\n   - maxmemory-policy policy\n\n3. 监控：\n   - 监控配置文件使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'redis.conf 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置配置文件 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置配置文件；监控内存使用。' },
      { symptom: 'redis.conf 性能不佳', cause: '1) 配置太多 2) 没有使用 Pipeline 3) 没有使用 bind/port/requirepass/maxmemory/maxmemory-policy。', fix: '避免配置太多；使用 Pipeline 批量执行命令；使用 bind/port/requirepass/maxmemory/maxmemory-policy。' }
    ],
    exercises: [
      { level: '基础', task: '使用 redis.conf 配置 Redis', hint: 'bind ip, port port', answer: '# 使用 redis.conf 配置 Redis\nbind 127.0.0.1\nport 6379\n# 返回：OK' },
      { level: '进阶', task: '使用 redis.conf 配置安全', hint: 'requirepass password', answer: '# 使用 redis.conf 配置安全\nrequirepass mypassword\n# 返回：OK' }
    ]
  },

  "Cb-KazR4PuR86VX5oT0zi": {
    mentalModel: 'Upgrading Redis 就像 Redis 的升级——升级 Redis 版本，简单直观',
    sections: [
      { title: 'Upgrading Redis', content: 'Redis 的 Upgrading Redis：\n\n1. 基本概念：\n   - 升级 Redis 版本\n   - 适合升级场景\n   - 简单易用\n\n2. 常用步骤：\n   - 备份数据\n   - 停止 Redis\n   - 升级 Redis\n   - 启动 Redis\n\n3. 优势：\n   - 适合升级场景\n   - 简单易用\n   - 高性能' },
      { title: 'Upgrading Redis 最佳实践', content: 'Redis Upgrading Redis 的最佳实践：\n\n1. 合理设置升级：\n   - 根据场景设置升级\n   - 避免数据丢失\n\n2. 使用 Upgrading Redis：\n   - 备份数据\n   - 停止 Redis\n   - 升级 Redis\n   - 启动 Redis\n\n3. 监控：\n   - 监控升级使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Upgrading Redis 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置升级 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置升级；监控内存使用。' },
      { symptom: 'Upgrading Redis 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用备份/停止/升级/启动。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用备份/停止/升级/启动。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Upgrading Redis 升级 Redis', hint: '备份数据, 停止 Redis, 升级 Redis, 启动 Redis', answer: '# 使用 Upgrading Redis 升级 Redis\n# 备份数据\n# 停止 Redis\n# 升级 Redis\n# 启动 Redis' },
      { level: '进阶', task: '使用 Upgrading Redis 实现安全升级', hint: '备份数据, 停止 Redis, 升级 Redis, 启动 Redis', answer: '# 使用 Upgrading Redis 实现安全升级\n# 备份数据\n# 停止 Redis\n# 升级 Redis\n# 启动 Redis' }
    ]
  },

  "nUIfTkgm3PlSiqgun1BS7": {
    mentalModel: 'Disaster Recovery 就像 Redis 的灾难恢复——实现灾难恢复，简单直观',
    sections: [
      { title: 'Disaster Recovery', content: 'Redis 的 Disaster Recovery：\n\n1. 基本概念：\n   - 实现灾难恢复\n   - 适合备份场景\n   - 简单易用\n\n2. 常用命令：\n   - BGSAVE\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n\n3. 优势：\n   - 适合备份场景\n   - 简单易用\n   - 高性能' },
      { title: 'Disaster Recovery 最佳实践', content: 'Redis Disaster Recovery 的最佳实践：\n\n1. 合理设置灾难恢复：\n   - 根据场景设置灾难恢复\n   - 避免数据丢失\n\n2. 使用 Disaster Recovery：\n   - BGSAVE\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n\n3. 监控：\n   - 监控灾难恢复使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Disaster Recovery 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置灾难恢复 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置灾难恢复；监控内存使用。' },
      { symptom: 'Disaster Recovery 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 BGSAVE/BGREWRITEAOF/appendonly。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 BGSAVE/BGREWRITEAOF/appendonly。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Disaster Recovery 实现灾难恢复', hint: 'BGSAVE', answer: '# 使用 Disaster Recovery 实现灾难恢复\nBGSAVE\n# 返回：Background saving started' },
      { level: '进阶', task: '使用 Disaster Recovery 实现备份', hint: 'BGREWRITEAOF', answer: '# 使用 Disaster Recovery 实现备份\nBGREWRITEAOF\n# 返回：Background append only file rewriting started' }
    ]
  },

  "wXRDsNGFckXV_CSiit5sN": {
    mentalModel: 'Backup and Recovery 就像 Redis 的备份和恢复——实现备份和恢复，简单直观',
    sections: [
      { title: 'Backup and Recovery', content: 'Redis 的 Backup and Recovery：\n\n1. 基本概念：\n   - 实现备份和恢复\n   - 适合备份场景\n   - 简单易用\n\n2. 常用命令：\n   - BGSAVE\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n\n3. 优势：\n   - 适合备份场景\n   - 简单易用\n   - 高性能' },
      { title: 'Backup and Recovery 最佳实践', content: 'Redis Backup and Recovery 的最佳实践：\n\n1. 合理设置备份和恢复：\n   - 根据场景设置备份和恢复\n   - 避免数据丢失\n\n2. 使用 Backup and Recovery：\n   - BGSAVE\n   - BGREWRITEAOF\n   - CONFIG SET appendonly yes\n\n3. 监控：\n   - 监控备份和恢复使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Backup and Recovery 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置备份和恢复 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置备份和恢复；监控内存使用。' },
      { symptom: 'Backup and Recovery 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用 BGSAVE/BGREWRITEAOF/appendonly。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用 BGSAVE/BGREWRITEAOF/appendonly。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Backup and Recovery 实现备份', hint: 'BGSAVE', answer: '# 使用 Backup and Recovery 实现备份\nBGSAVE\n# 返回：Background saving started' },
      { level: '进阶', task: '使用 Backup and Recovery 实现恢复', hint: 'BGREWRITEAOF', answer: '# 使用 Backup and Recovery 实现恢复\nBGREWRITEAOF\n# 返回：Background append only file rewriting started' }
    ]
  },

  "8lyXDuZJ-KHl4v2_8Ew1h": {
    mentalModel: 'Redis Enterprise 就像 Redis 的企业版——使用企业版实现企业级功能，简单直观',
    sections: [
      { title: 'Redis Enterprise', content: 'Redis 的 Redis Enterprise：\n\n1. 基本概念：\n   - 使用企业版实现企业级功能\n   - 适合企业场景\n   - 简单易用\n\n2. 常用功能：\n   - 高可用\n   - 水平扩展\n   - 企业支持\n\n3. 优势：\n   - 适合企业场景\n   - 简单易用\n   - 高性能' },
      { title: 'Redis Enterprise 最佳实践', content: 'Redis Redis Enterprise 的最佳实践：\n\n1. 合理设置企业版：\n   - 根据场景设置企业版\n   - 避免数据丢失\n\n2. 使用 Redis Enterprise：\n   - 高可用\n   - 水平扩展\n   - 企业支持\n\n3. 监控：\n   - 监控企业版使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Redis Enterprise 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置企业版 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置企业版；监控内存使用。' },
      { symptom: 'Redis Enterprise 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用高可用/水平扩展/企业支持。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用高可用/水平扩展/企业支持。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis Enterprise 实现企业级功能', hint: '高可用', answer: '# 使用 Redis Enterprise 实现企业级功能\n# 使用高可用实现企业级功能' },
      { level: '进阶', task: '使用 Redis Enterprise 实现水平扩展', hint: '水平扩展', answer: '# 使用 Redis Enterprise 实现水平扩展\n# 使用水平扩展实现水平扩展' }
    ]
  },

  "cybF72wlJyJbHLUjitLvn": {
    mentalModel: 'Active-Active geo Distribution 就像 Redis 的活跃-活跃地理分布——使用活跃-活跃地理分布实现高可用，简单直观',
    sections: [
      { title: 'Active-Active geo Distribution', content: 'Redis 的 Active-Active geo Distribution：\n\n1. 基本概念：\n   - 使用活跃-活跃地理分布实现高可用\n   - 适合高可用场景\n   - 简单易用\n\n2. 常用功能：\n   - 多数据中心\n   - 数据同步\n   - 故障转移\n\n3. 优势：\n   - 适合高可用场景\n   - 简单易用\n   - 高性能' },
      { title: 'Active-Active geo Distribution 最佳实践', content: 'Redis Active-Active geo Distribution 的最佳实践：\n\n1. 合理设置活跃-活跃地理分布：\n   - 根据场景设置活跃-活跃地理分布\n   - 避免数据丢失\n\n2. 使用 Active-Active geo Distribution：\n   - 多数据中心\n   - 数据同步\n   - 故障转移\n\n3. 监控：\n   - 监控活跃-活跃地理分布使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Active-Active geo Distribution 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置活跃-活跃地理分布 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置活跃-活跃地理分布；监控内存使用。' },
      { symptom: 'Active-Active geo Distribution 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用多数据中心/数据同步/故障转移。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用多数据中心/数据同步/故障转移。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Active-Active geo Distribution 实现高可用', hint: '多数据中心', answer: '# 使用 Active-Active geo Distribution 实现高可用\n# 使用多数据中心实现高可用' },
      { level: '进阶', task: '使用 Active-Active geo Distribution 实现故障转移', hint: '故障转移', answer: '# 使用 Active-Active geo Distribution 实现故障转移\n# 使用故障转移实现故障转移' }
    ]
  },

  "sWOFnbh2EyaHRzquz1UeF": {
    mentalModel: 'Redis on Flash 就像 Redis 的闪存——使用闪存存储数据，简单直观',
    sections: [
      { title: 'Redis on Flash', content: 'Redis 的 Redis on Flash：\n\n1. 基本概念：\n   - 使用闪存存储数据\n   - 适合存储场景\n   - 简单易用\n\n2. 常用功能：\n   - 闪存存储\n   - 数据持久化\n   - 高性能\n\n3. 优势：\n   - 适合存储场景\n   - 简单易用\n   - 高性能' },
      { title: 'Redis on Flash 最佳实践', content: 'Redis Redis on Flash 的最佳实践：\n\n1. 合理设置闪存：\n   - 根据场景设置闪存\n   - 避免数据丢失\n\n2. 使用 Redis on Flash：\n   - 闪存存储\n   - 数据持久化\n   - 高性能\n\n3. 监控：\n   - 监控闪存使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Redis on Flash 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置闪存 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置闪存；监控内存使用。' },
      { symptom: 'Redis on Flash 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用闪存存储/数据持久化/高性能。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用闪存存储/数据持久化/高性能。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Redis on Flash 实现闪存存储', hint: '闪存存储', answer: '# 使用 Redis on Flash 实现闪存存储\n# 使用闪存存储实现闪存存储' },
      { level: '进阶', task: '使用 Redis on Flash 实现数据持久化', hint: '数据持久化', answer: '# 使用 Redis on Flash 实现数据持久化\n# 使用数据持久化实现数据持久化' }
    ]
  },

  "ujs77bV8g8-FOm5hBtZFd": {
    mentalModel: 'Security and Compliance 就像 Redis 的安全和合规——实现安全和合规，简单直观',
    sections: [
      { title: 'Security and Compliance', content: 'Redis 的 Security and Compliance：\n\n1. 基本概念：\n   - 实现安全和合规\n   - 适合安全场景\n   - 简单易用\n\n2. 常用功能：\n   - 认证\n   - 加密\n   - 审计\n\n3. 优势：\n   - 适合安全场景\n   - 简单易用\n   - 高性能' },
      { title: 'Security and Compliance 最佳实践', content: 'Redis Security and Compliance 的最佳实践：\n\n1. 合理设置安全和合规：\n   - 根据场景设置安全和合规\n   - 避免数据丢失\n\n2. 使用 Security and Compliance：\n   - 认证\n   - 加密\n   - 审计\n\n3. 监控：\n   - 监控安全和合规使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'Security and Compliance 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置安全和合规 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置安全和合规；监控内存使用。' },
      { symptom: 'Security and Compliance 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用认证/加密/审计。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用认证/加密/审计。' }
    ],
    exercises: [
      { level: '基础', task: '使用 Security and Compliance 实现安全', hint: '认证', answer: '# 使用 Security and Compliance 实现安全\n# 使用认证实现安全' },
      { level: '进阶', task: '使用 Security and Compliance 实现合规', hint: '审计', answer: '# 使用 Security and Compliance 实现合规\n# 使用审计实现合规' }
    ]
  },

  "JlLwy69eQ1bPHAOOJNqjo": {
    mentalModel: 'When to consider enterprise 就像 Redis 的企业版考虑——何时考虑企业版，简单直观',
    sections: [
      { title: 'When to consider enterprise', content: 'Redis 的 When to consider enterprise：\n\n1. 基本概念：\n   - 何时考虑企业版\n   - 适合企业场景\n   - 简单易用\n\n2. 常用场景：\n   - 高可用需求\n   - 水平扩展需求\n   - 企业支持需求\n\n3. 优势：\n   - 适合企业场景\n   - 简单易用\n   - 高性能' },
      { title: 'When to consider enterprise 最佳实践', content: 'Redis When to consider enterprise 的最佳实践：\n\n1. 合理设置企业版考虑：\n   - 根据场景设置企业版考虑\n   - 避免数据丢失\n\n2. 使用 When to consider enterprise：\n   - 高可用需求\n   - 水平扩展需求\n   - 企业支持需求\n\n3. 监控：\n   - 监控企业版考虑使用情况\n   - 监控内存使用\n   - 避免内存溢出' }
    ],
    diagnosis: [
      { symptom: 'When to consider enterprise 使用不当', cause: '1) 选择了不合适的场景 2) 没有合理设置企业版考虑 3) 没有监控内存使用。', fix: '根据场景选择合适的数据类型；合理设置企业版考虑；监控内存使用。' },
      { symptom: 'When to consider enterprise 性能不佳', cause: '1) 数据太多 2) 没有使用 Pipeline 3) 没有使用高可用/水平扩展/企业支持。', fix: '避免数据太多；使用 Pipeline 批量执行命令；使用高可用/水平扩展/企业支持。' }
    ],
    exercises: [
      { level: '基础', task: '使用 When to consider enterprise 考虑企业版', hint: '高可用需求', answer: '# 使用 When to consider enterprise 考虑企业版\n# 使用高可用需求考虑企业版' },
      { level: '进阶', task: '使用 When to consider enterprise 实现企业版', hint: '水平扩展需求', answer: '# 使用 When to consider enterprise 实现企业版\n# 使用水平扩展需求实现企业版' }
    ]
  },
};

  // === Redis 基础概念 (nodes 1-20) ===
  "M-EXrTDeAEMz_IkEi-ab4": {
    mentalModel: 'Redis 是一个把所有数据都存在内存里的"超速仓库"——用 RAM 换取极致的读写速度，适合那些传统数据库扛不住的高频操作',
    handsOn: [
      { title: '启动 Redis 并连接', cmd: 'redis-cli ping', output: 'PONG', explain: 'PONG 表示连接成功。如果报 "Connection refused"，说明 redis-server 没启动，先执行 redis-server。' },
      { title: '设置和获取字符串', cmd: 'SET greeting "hello redis"\nGET greeting', output: 'OK\n"hello redis"', explain: 'SET 写入内存，GET 读取。微秒级响应，比 MySQL 快 100-1000 倍。' },
      { title: '查看内存使用', cmd: 'INFO memory | grep used_memory_human', output: 'used_memory_human:1.2M', explain: 'Redis 所有数据都在 RAM 里，用 INFO memory 监控内存使用，避免 OOM。' }
    ],
    diagnosis: [
      { symptom: 'Redis 响应变慢，延迟从 0.1ms 升到 10ms', cause: '可能执行了 O(N) 命令（如 KEYS *、SMEMBERS 大集合），或 fork 持久化时阻塞主线程。', fix: '用 SLOWLOG GET 查看慢查询；用 INFO commandstats 分析命令分布；避免在大集合上用 O(N) 命令。' }
    ],
    exercises: [
      { level: '基础', task: '用 redis-cli 连接 Redis，设置一个 key，然后读取它', hint: 'SET key value, GET key', answer: 'redis-cli\n127.0.0.1:6379> SET mykey "hello"\nOK\n127.0.0.1:6379> GET mykey\n"hello"' },
      { level: '进阶', task: '查看 Redis 当前使用的内存和连接的客户端数量', hint: 'INFO 命令', answer: '127.0.0.1:6379> INFO memory | grep used_memory_human\nused_memory_human:1.2M\n127.0.0.1:6379> INFO clients | grep connected_clients\nconnected_clients:3' }
    ]
  },

  "l2aXyO3STnhbFjvUXPpm2": {
    mentalModel: 'Key-value 数据库就像一个巨大的"字典"——你给每个值贴一个唯一的标签（key），然后通过标签快速找到对应的值',
    handsOn: [
      { title: 'SET 和 GET', cmd: 'SET user:123 \'{"name":"Alice","age":30}\'\nGET user:123', output: 'OK\n"{\\"name\\":\\"Alice\\",\\"age\\":30}"', explain: 'Key 用冒号分层（user:123），Value 可以是 JSON 字符串。O(1) 查找速度。' },
      { title: '用 Hash 存储对象', cmd: 'HSET user:123 name "Alice" age 30 email "alice@example.com"\nHGETALL user:123', output: '1) "name"\n2) "Alice"\n3) "age"\n4) "30"\n5) "email"\n6) "alice@example.com"', explain: 'Hash 比 JSON 字符串更灵活，可以单独更新某个字段。' },
      { title: 'SCAN 代替 KEYS', cmd: 'SCAN 0 MATCH user:* COUNT 100', output: '1) "0"\n2) 1) "user:123"\n2) "user:456"', explain: 'KEYS * 会阻塞主线程，SCAN 分批遍历，生产环境必须用 SCAN。' }
    ],
    diagnosis: [
      { symptom: 'GET 返回 nil，但 SET 成功了', cause: '1) key 已过期（检查 TTL）2) key 被其他客户端删除 3) key 名拼写错误（大小写敏感）。', fix: '用 EXISTS key 检查是否存在；用 TTL key 查看剩余时间；用 MONITOR 实时监控命令。' },
      { symptom: 'KEYS * 命令导致 Redis 卡顿', cause: 'KEYS 是 O(N) 命令，会遍历所有 key，数据量大时阻塞主线程。', fix: '永远不要用 KEYS *，改用 SCAN 0 COUNT 100 分批遍历；或在设计时用 Hash 聚合相关数据。' }
    ],
    exercises: [
      { level: '基础', task: '用 SET 存储一个用户信息，然后用 GET 读取', hint: 'SET key value, GET key', answer: 'SET user:123 \'{"name":"Alice","age":30}\'\nGET user:123\n# 返回：{"name":"Alice","age":30}' },
      { level: '进阶', task: '用 SCAN 遍历所有 user:* 的 key', hint: 'SCAN cursor MATCH pattern', answer: 'SCAN 0 MATCH user:* COUNT 100\n# 返回：cursor 和匹配的 key 列表\n# 如果 cursor != 0，继续 SCAN cursor MATCH user:* COUNT 100' }
    ]
  },

  "eHuBz_zSZK3rubn7nkd7g": {
    mentalModel: '缓存就像在书桌旁边放一本常用词典——不用每次都去图书馆（数据库）查，直接在手边找，速度快得多',
    handsOn: [
      { title: 'Cache-Aside 模式', cmd: '# 伪代码\ndef get_user(user_id):\n    cached = redis.get(f"user:{user_id}")\n    if cached:\n        return json.loads(cached)\n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n    return user', output: '# 第一次：查数据库，写入缓存\n# 第二次：直接返回缓存', explain: '先查缓存，miss 则查数据库并写入缓存。命中率可达 90%+，降低数据库负载。' },
      { title: '防止缓存穿透', cmd: '# 查询不存在的用户时，缓存空值\nif user is None:\n    redis.setex(f"user:{user_id}", 60, "null")\n    return None', output: '# 缓存空值 1 分钟，防止恶意请求打垮数据库', explain: '缓存穿透：查询不存在的数据，每次都打到数据库。解决：缓存空值或使用布隆过滤器。' },
      { title: '监控命中率', cmd: 'INFO stats | grep keyspace', output: 'keyspace_hits:90000\nkeyspace_misses:10000', explain: '命中率 = hits / (hits + misses) = 90%。目标 > 90%。' }
    ],
    diagnosis: [
      { symptom: '缓存命中率低（<80%）', cause: '1) TTL 设置不合理 2) 缓存的数据不是热点数据 3) 缓存穿透严重。', fix: '调整 TTL；分析热点数据，优先缓存热点数据；使用布隆过滤器防止穿透。' },
      { symptom: '数据库负载突然升高', cause: '1) 缓存雪崩（大量缓存同时过期）2) 缓存击穿（热点数据过期）3) 缓存穿透（查询不存在的数据）。', fix: 'TTL 加随机值；热点数据永不过期；使用布隆过滤器。' }
    ],
    exercises: [
      { level: '基础', task: '实现 Cache-Aside 模式：查询用户信息，先查缓存，miss 则查数据库', hint: 'GET, SET', answer: '# 伪代码\ndef get_user(user_id):\n    cached = redis.get(f"user:{user_id}")\n    if cached:\n        return json.loads(cached)\n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n    return user' },
      { level: '进阶', task: '防止缓存穿透：查询不存在的用户时，缓存空值', hint: 'SET key "null" EX 60', answer: '# 伪代码\ndef get_user(user_id):\n    cached = redis.get(f"user:{user_id}")\n    if cached == "null":\n        return None\n    if cached:\n        return json.loads(cached)\n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n    else:\n        redis.setex(f"user:{user_id}", 60, "null")\n    return user' }
    ]
  },

  "mgGJTBU8ofvOzl9gYWhnG": {
    mentalModel: '消息代理就像邮局——你不用直接联系收件人，把信交给邮局，邮局负责投递。Redis 可以做简单的消息队列',
    handsOn: [
      { title: '简单队列', cmd: '# 生产者\nLPUSH queue "message1"\nLPUSH queue "message2"\n\n# 消费者\nBRPOP queue 5', output: '1) "queue"\n2) "message2"', explain: 'LPUSH 从左端推入，BRPOP 从右端阻塞弹出。FIFO 先进先出。' },
      { title: '延迟队列', cmd: '# 生产者（延迟 10 秒）\ntimestamp = time.time() + 10\nZADD delayed_queue timestamp "message1"\n\n# 消费者（轮询）\nwhile True:\n    now = time.time()\n    messages = ZRANGEBYSCORE delayed_queue 0 now\n    for msg in messages:\n        process(msg)\n        ZREM delayed_queue msg\n    time.sleep(1)', output: '# 10 秒后处理 message1', explain: '用 Sorted Set 实现延迟队列，score 是时间戳。' }
    ],
    diagnosis: [
      { symptom: '消息队列堆积，消费者处理不过来', cause: '1) 消费者处理速度慢 2) 生产者推送速度太快 3) 消费者数量不足。', fix: '优化消费者处理逻辑；增加消费者数量；使用 Pipeline 批量推送。' },
      { symptom: '消息丢失', cause: '1) Redis 没有持久化（AOF/RDB）2) Redis 崩溃时数据丢失。', fix: '启用 AOF 持久化（appendonly yes）；或使用 Kafka、RabbitMQ 等更可靠的消息队列。' }
    ],
    exercises: [
      { level: '基础', task: '用 Redis List 实现简单的消息队列', hint: 'LPUSH, BRPOP', answer: '# 生产者\nLPUSH queue "message1"\nLPUSH queue "message2"\n\n# 消费者\nBRPOP queue 5\n# 返回：["queue", "message2"]（FIFO）' },
      { level: '进阶', task: '实现延迟队列：消息延迟 10 秒后处理', hint: 'ZADD, ZRANGEBYSCORE', answer: '# 生产者（延迟 10 秒）\ntimestamp = time.time() + 10\nZADD delayed_queue timestamp "message1"\n\n# 消费者（轮询）\nwhile True:\n    now = time.time()\n    messages = ZRANGEBYSCORE delayed_queue 0 now\n    for msg in messages:\n        process(msg)\n        ZREM delayed_queue msg\n    time.sleep(1)' }
    ]
  },

  "-3pADOHMDQ0H6ZKNjURyn": {
    mentalModel: 'Redis 就像一个超快的便签本——所有数据都存在内存里，读写速度极快，但断电会丢失（除非配置持久化）',
    handsOn: [
      { title: '连接 Redis', cmd: 'redis-cli ping', output: 'PONG', explain: 'PONG 表示连接成功。Redis 默认监听 127.0.0.1:6379。' },
      { title: '查看 Redis 信息', cmd: 'INFO server | grep redis_version', output: 'redis_version:7.0.0', explain: 'Redis 版本信息。生产环境建议用 LTS 版本。' },
      { title: '查看内存使用', cmd: 'INFO memory | grep used_memory_human', output: 'used_memory_human:1.2M', explain: 'Redis 所有数据都在 RAM 里，用 INFO memory 监控内存使用。' }
    ],
    diagnosis: [
      { symptom: 'Redis 响应变慢，延迟从 0.1ms 升到 10ms', cause: '可能原因：1) 执行了 O(N) 命令（如 KEYS *、SMEMBERS 大集合）2) fork 持久化时阻塞 3) 内存不足触发淘汰策略。', fix: '用 SLOWLOG GET 查看慢查询；用 INFO commandstats 分析命令分布；避免在大集合上用 O(N) 命令。' },
      { symptom: 'Redis 内存使用率持续升高', cause: '1) 没有设置合理的 TTL 2) 缓存的数据不是热点数据 3) 没有清理过期数据。', fix: '设置合理的 TTL；分析热点数据，优先缓存热点数据；定期清理过期数据。' }
    ],
    exercises: [
      { level: '基础', task: '用 redis-cli 连接 Redis，设置一个 key，然后读取它', hint: 'SET key value, GET key', answer: 'redis-cli\n127.0.0.1:6379> SET mykey "hello"\nOK\n127.0.0.1:6379> GET mykey\n"hello"' },
      { level: '进阶', task: '查看 Redis 当前使用的内存和连接的客户端数量', hint: 'INFO 命令', answer: '127.0.0.1:6379> INFO memory | grep used_memory_human\nused_memory_human:1.2M\n127.0.0.1:6379> INFO clients | grep connected_clients\nconnected_clients:3' }
    ]
  },

  "-TjnSOY8txYrhhxRV1OIl": {
    mentalModel: '缓存就像在书桌旁边放一本常用词典——不用每次都去图书馆（数据库）查，直接在手边找，速度快得多',
    handsOn: [
      { title: 'Cache-Aside 模式', cmd: '# 伪代码\ndef get_user(user_id):\n    cached = redis.get(f"user:{user_id}")\n    if cached:\n        return json.loads(cached)\n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n    return user', output: '# 第一次：查数据库，写入缓存\n# 第二次：直接返回缓存', explain: '先查缓存，miss 则查数据库并写入缓存。命中率可达 90%+。' },
      { title: '防止缓存穿透', cmd: '# 查询不存在的用户时，缓存空值\nif user is None:\n    redis.setex(f"user:{user_id}", 60, "null")\n    return None', output: '# 缓存空值 1 分钟，防止恶意请求打垮数据库', explain: '缓存穿透：查询不存在的数据，每次都打到数据库。解决：缓存空值或使用布隆过滤器。' },
      { title: '监控命中率', cmd: 'INFO stats | grep keyspace', output: 'keyspace_hits:90000\nkeyspace_misses:10000', explain: '命中率 = hits / (hits + misses) = 90%。目标 > 90%。' }
    ],
    diagnosis: [
      { symptom: '缓存命中率低（<80%）', cause: '1) TTL 设置不合理 2) 缓存的数据不是热点数据 3) 缓存穿透严重。', fix: '调整 TTL；分析热点数据，优先缓存热点数据；使用布隆过滤器防止穿透。' },
      { symptom: '数据库负载突然升高', cause: '1) 缓存雪崩（大量缓存同时过期）2) 缓存击穿（热点数据过期）3) 缓存穿透（查询不存在的数据）。', fix: 'TTL 加随机值；热点数据永不过期；使用布隆过滤器。' }
    ],
    exercises: [
      { level: '基础', task: '实现 Cache-Aside 模式：查询用户信息，先查缓存，miss 则查数据库', hint: 'GET, SET', answer: '# 伪代码\ndef get_user(user_id):\n    cached = redis.get(f"user:{user_id}")\n    if cached:\n        return json.loads(cached)\n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n    return user' },
      { level: '进阶', task: '防止缓存穿透：查询不存在的用户时，缓存空值', hint: 'SET key "null" EX 60', answer: '# 伪代码\ndef get_user(user_id):\n    cached = redis.get(f"user:{user_id}")\n    if cached == "null":\n        return None\n    if cached:\n        return json.loads(cached)\n    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")\n    if user:\n        redis.setex(f"user:{user_id}", 3600, json.dumps(user))\n    else:\n        redis.setex(f"user:{user_id}", 60, "null")\n    return user' }
    ]
  },

  "bVJASI7bfSYqYnNhX83ng": {
    mentalModel: 'Redis 的实时分析就像高速公路上的电子眼——每秒记录数千次事件，实时统计、实时排名，毫秒级响应',
    handsOn: [
      { title: '实时计数器', cmd: 'INCR page:views:article:123\nINCRBY page:views:article:123 10\nGET page:views:article:123', output: '(integer) 1\n(integer) 11\n"11"', explain: 'INCR 原子递增，适合计数器、点赞数、浏览量。微秒级响应。' },
      { title: '排行榜', cmd: 'ZADD leaderboard 100 "alice"\nZADD leaderboard 200 "bob"\nZREVRANGE leaderboard 0 9 WITHSCORES', output: '1) "bob"\n2) "200"\n3) "alice"\n4) "100"', explain: 'Sorted Set 按分数排序，ZREVRANGE 降序，适合排行榜。' },
      { title: '实时统计', cmd: 'PFADD uv:2024-01-15 "user:123"\nPFADD uv:2024-01-15 "user:456"\nPFCOUNT uv:2024-01-15', output: '(integer) 1\n(integer) 1\n(integer) 2', explain: 'HyperLogLog 统计唯一用户（UV），12KB 内存可统计 10 亿用户。' }
    ],
    diagnosis: [
      { symptom: '实时统计延迟高', cause: '1) 数据量太大 2) 没有用 Pipeline 批量处理 3) 内存不足触发淘汰。', fix: '用 Pipeline 批量处理；检查内存使用率；用 HyperLogLog 代替 Set 统计 UV。' }
    ],
    exercises: [
      { level: '基础', task: '用 INCR 实现页面浏览量计数器', hint: 'INCR key', answer: 'INCR page:views:article:123\nGET page:views:article:123\n# 返回：当前浏览量' },
      { level: '进阶', task: '用 Sorted Set 实现游戏排行榜', hint: 'ZADD, ZREVRANGE', answer: 'ZADD leaderboard 100 "alice"\nZADD leaderboard 200 "bob"\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：Top 10 排行榜' }
    ]
  },

  "EvWiEx_AoxAht6sKxzW2l": {
    mentalModel: 'Redis vs SQL/NoSQL 就像选择交通工具——Redis 是跑车（快但容量小），SQL 是卡车（慢但容量大），NoSQL 是货车（灵活但复杂）',
    handsOn: [
      { title: 'Redis vs MySQL', cmd: '# Redis：微秒级\nredis-cli SET user:123 \'{"name":"Alice"}\'\nGET user:123\n# 0.1ms\n\n# MySQL：毫秒级\nSELECT * FROM users WHERE id = 123;\n# 1-10ms', output: '# Redis: 0.1ms\n# MySQL: 1-10ms', explain: 'Redis 内存存储，微秒级；MySQL 磁盘存储，毫秒级。Redis 快 100-1000 倍。' },
      { title: 'Redis vs MongoDB', cmd: '# Redis：适合缓存、计数器\nINCR page:views:article:123\n\n# MongoDB：适合文档存储\ndb.users.find({name: "Alice"})', output: '# Redis: 计数器、缓存\n# MongoDB: 文档存储、复杂查询', explain: 'Redis 适合高频读写、缓存、计数器；MongoDB 适合文档存储、复杂查询。' }
    ],
    diagnosis: [
      { symptom: '不知道选 Redis 还是 MySQL', cause: '不了解各自的适用场景。', fix: 'Redis：缓存、会话、计数器、排行榜（高频读写，容量小）；MySQL：复杂查询、事务、大数据（容量大，查询复杂）。' }
    ],
    exercises: [
      { level: '基础', task: '用 Redis 缓存用户信息，减少 MySQL 查询', hint: 'SET, GET', answer: '# 先查 Redis\ncached = redis.get(f"user:{user_id}")\nif cached:\n    return json.loads(cached)\n# miss 则查 MySQL\nuser = db.query(f"SELECT * FROM users WHERE id = {user_id}")\nif user:\n    redis.setex(f"user:{user_id}", 3600, json.dumps(user))\nreturn user' }
    ]
  },

  "URxGmhZHr0Y8nyrYj0gJl": {
    mentalModel: '会话管理就像游乐园的门票——用户登录时发一张票（session），之后每次出示票就能证明身份，不用重复登录',
    handsOn: [
      { title: '存储会话', cmd: 'HSET session:abc123 user_id 123 login_time 1705363200\nEXPIRE session:abc123 3600\nHGETALL session:abc123', output: '1) "user_id"\n2) "123"\n3) "login_time"\n4) "1705363200"', explain: '用 Hash 存储会话，EXPIRE 设置过期时间（1 小时）。分布式会话，多服务器共享。' },
      { title: '验证会话', cmd: 'EXISTS session:abc123\nTTL session:abc123', output: '(integer) 1\n(integer) 3500', explain: 'EXISTS 检查是否存在，TTL 查看剩余时间。会话过期后自动删除。' }
    ],
    diagnosis: [
      { symptom: '用户频繁被登出', cause: '1) 会话过期时间太短 2) 会话被其他服务器删除 3) 会话 ID 泄露。', fix: '调整过期时间（30 分钟-1 小时）；用分布式会话（Redis）；用 HTTPS 防止会话 ID 泄露。' }
    ],
    exercises: [
      { level: '基础', task: '用 Redis 实现会话管理：用户登录时存储会话，1 小时后过期', hint: 'HSET, EXPIRE', answer: 'HSET session:abc123 user_id 123 login_time 1705363200\nEXPIRE session:abc123 3600\nHGETALL session:abc123' },
      { level: '进阶', task: '实现分布式会话：多服务器共享会话', hint: 'Redis 作为集中存储', answer: '# 所有服务器连接同一个 Redis\nredis_url = "redis://redis-server:6379"\nredis = Redis.from_url(redis_url)\n\n# 存储会话\nredis.hset(f"session:{session_id}", mapping={"user_id": user_id, "login_time": time.time()})\nredis.expire(f"session:{session_id}", 3600)' }
    ]
  },

  "1Af5H0BgdAsRdBCNdHz5v": {
    mentalModel: '选择 Redis 就像选择工具——Redis 适合高频读写（缓存、计数器），SQL 适合复杂查询，NoSQL 适合灵活存储',
    handsOn: [
      { title: 'Redis 适用场景', cmd: '# 缓存\nSET user:123 \'{"name":"Alice"}\' EX 3600\n\n# 计数器\nINCR page:views:article:123\n\n# 排行榜\nZADD leaderboard 100 "alice"', output: '# 缓存: 微秒级\n# 计数器: 原子递增\n# 排行榜: 自动排序', explain: 'Redis 适合：缓存（命中率 90%+）、计数器（原子操作）、排行榜（Sorted Set）。' },
      { title: 'Redis 不适合', cmd: '# 不适合：\n# - 大容量数据（TB 级）\n# - 复杂查询（JOIN、聚合）\n# - 强一致性（如金融交易）', output: '# 用 MySQL: 复杂查询、事务\n# 用 MongoDB: 文档存储', explain: 'Redis 容量小（几十 GB），不适合大数据；不支持 JOIN、聚合；不支持强一致性事务。' }
    ],
    diagnosis: [
      { symptom: '不知道选 Redis 还是 MySQL', cause: '不了解各自的适用场景。', fix: 'Redis：缓存、会话、计数器、排行榜（高频读写，容量小）；MySQL：复杂查询、事务、大数据（容量大，查询复杂）。' }
    ],
    exercises: [
      { level: '基础', task: '用 Redis 缓存用户信息，减少 MySQL 查询', hint: 'SET, GET', answer: '# 先查 Redis\ncached = redis.get(f"user:{user_id}")\nif cached:\n    return json.loads(cached)\n# miss 则查 MySQL\nuser = db.query(f"SELECT * FROM users WHERE id = {user_id}")\nif user:\n    redis.setex(f"user:{user_id}", 3600, json.dumps(user))\nreturn user' }
    ]
  },

  "ZCyId3aIoLv3duxoJdk2P": {
    mentalModel: 'Pub/Sub 就像广播电台——发布者发送消息，所有订阅者都能收到，但错过就收不到了',
    handsOn: [
      { title: '订阅频道', cmd: '# 终端 1：订阅\nSUBSCRIBE notifications\n# 等待消息...\n\n# 终端 2：发布\nPUBLISH notifications "Hello, world!"', output: '1) "message"\n2) "notifications"\n3) "Hello, world!"', explain: 'SUBSCRIBE 订阅频道，PUBLISH 发布消息。所有订阅者都能收到。' },
      { title: '模式订阅', cmd: '# 订阅所有 notifications:* 频道\nPSUBSCRIBE notifications:*\n\n# 发布\nPUBLISH notifications:user "User logged in"', output: '1) "pmessage"\n2) "notifications:*"\n3) "notifications:user"\n4) "User logged in"', explain: 'PSUBSCRIBE 模式订阅，匹配所有匹配的频道。' }
    ],
    diagnosis: [
      { symptom: '消息丢失', cause: '1) 订阅者离线 2) Redis 崩溃 3) 没有持久化。', fix: 'Pub/Sub 不持久化，错过就收不到。用 Kafka、RabbitMQ 等更可靠的消息队列。' }
    ],
    exercises: [
      { level: '基础', task: '用 Pub/Sub 实现简单的聊天室', hint: 'SUBSCRIBE, PUBLISH', answer: '# 终端 1：订阅\nSUBSCRIBE chat:room1\n\n# 终端 2：发布\nPUBLISH chat:room1 "Hello!"\n\n# 终端 1 收到：\n# 1) "message"\n# 2) "chat:room1"\n# 3) "Hello!"' }
    ]
  },

  "Fv1iGX22sApIEifM2IpJz": {
    mentalModel: '排行榜就像运动会的计分板——实时更新分数，实时排名，毫秒级响应',
    handsOn: [
      { title: '创建排行榜', cmd: 'ZADD leaderboard 100 "alice"\nZADD leaderboard 200 "bob"\nZADD leaderboard 150 "charlie"\nZREVRANGE leaderboard 0 9 WITHSCORES', output: '1) "bob"\n2) "200"\n3) "charlie"\n4) "150"\n5) "alice"\n6) "100"', explain: 'ZADD 添加成员和分数，ZREVRANGE 降序排列。Sorted Set 自动排序。' },
      { title: '实时更新分数', cmd: 'ZINCRBY leaderboard 50 "alice"\nZSCORE leaderboard "alice"', output: '(integer) 150\n"150"', explain: 'ZINCRBY 原子递增分数，ZSCORE 查看分数。' },
      { title: '查看排名', cmd: 'ZREVRANK leaderboard "alice"', output: '(integer) 2', explain: 'ZREVRANK 查看排名（从 0 开始，降序）。' }
    ],
    diagnosis: [
      { symptom: '排行榜更新慢', cause: '1) 数据量太大 2) 没有用 Pipeline 批量处理 3) 内存不足。', fix: '用 Pipeline 批量处理；检查内存使用率；用 Sorted Set 代替 List。' }
    ],
    exercises: [
      { level: '基础', task: '用 Sorted Set 实现游戏排行榜', hint: 'ZADD, ZREVRANGE', answer: 'ZADD leaderboard 100 "alice"\nZADD leaderboard 200 "bob"\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：Top 10 排行榜' },
      { level: '进阶', task: '实时更新排行榜：玩家得分增加 50 分', hint: 'ZINCRBY', answer: 'ZINCRBY leaderboard 50 "alice"\nZSCORE leaderboard "alice"\n# 返回：新分数' }
    ]
  },

  "43LvShQhmoWQ8Nye7fLkz": {
    mentalModel: '启动 Redis 服务端就像开一家 24 小时便利店——随时准备接待客户端，毫秒级响应',
    handsOn: [
      { title: '启动 Redis', cmd: 'redis-server', output: 'Redis server started on port 6379', explain: '默认监听 127.0.0.1:6379。生产环境用 systemd 管理。' },
      { title: '后台运行', cmd: 'redis-server --daemonize yes', output: 'Redis server started in background', explain: '--daemonize yes 后台运行，不阻塞终端。' },
      { title: '用配置文件启动', cmd: 'redis-server /etc/redis/redis.conf', output: 'Redis server started with config', explain: '生产环境用配置文件，设置密码、持久化、内存限制等。' }
    ],
    diagnosis: [
      { symptom: 'Redis 启动失败', cause: '1) 端口被占用 2) 配置文件错误 3) 权限不足。', fix: '检查端口占用（lsof -i :6379）；检查配置文件语法；用 sudo 或调整权限。' }
    ],
    exercises: [
      { level: '基础', task: '启动 Redis 服务端并连接', hint: 'redis-server, redis-cli', answer: 'redis-server\nredis-cli ping\n# 返回：PONG' }
    ]
  },

  "Bf_kLfmy7_uflqC9N0-jt": {
    mentalModel: '包管理器就像 App Store——一键安装 Redis，不用手动编译',
    handsOn: [
      { title: 'macOS 安装', cmd: 'brew install redis', output: 'Redis installed successfully', explain: 'Homebrew 一键安装，包含 redis-server 和 redis-cli。' },
      { title: 'Ubuntu 安装', cmd: 'sudo apt update && sudo apt install redis-server', output: 'Redis installed successfully', explain: 'apt 自动安装并配置 systemd 服务。' },
      { title: '启动服务', cmd: 'sudo systemctl start redis\nsudo systemctl enable redis', output: 'Redis started and enabled on boot', explain: 'systemctl 管理服务，enable 设置开机自启。' }
    ],
    diagnosis: [
      { symptom: '安装失败', cause: '1) 包管理器源问题 2) 网络问题 3) 权限不足。', fix: '更新包管理器源；检查网络；用 sudo 安装。' }
    ],
    exercises: [
      { level: '基础', task: '用包管理器安装 Redis', hint: 'brew install 或 apt install', answer: '# macOS\nbrew install redis\n\n# Ubuntu\nsudo apt install redis-server' }
    ]
  },

  "8uRpPJ0iD4XnQPKruQc8P": {
    mentalModel: '数据持久化就像给内存数据拍照——定期保存到磁盘，断电也不会丢失',
    handsOn: [
      { title: 'RDB 快照', cmd: 'BGSAVE', output: 'Background saving started', explain: 'BGSAVE 后台保存快照，不阻塞主线程。默认每 15 分钟保存一次。' },
      { title: 'AOF 日志', cmd: 'CONFIG SET appendonly yes', output: 'OK', explain: 'AOF 记录每个写命令，数据更安全。appendonly yes 启用。' },
      { title: '混合持久化', cmd: 'CONFIG SET aof-use-rdb-preamble yes', output: 'OK', explain: '混合模式：AOF 重写时用 RDB 格式，兼顾速度和安全。' }
    ],
    diagnosis: [
      { symptom: '断电后数据丢失', cause: '1) 没有启用持久化 2) AOF 没有启用 3) RDB 保存间隔太长。', fix: '启用 AOF（appendonly yes）；调整 RDB 保存间隔；用混合模式。' }
    ],
    exercises: [
      { level: '基础', task: '启用 AOF 持久化', hint: 'CONFIG SET appendonly yes', answer: 'CONFIG SET appendonly yes\n# 返回：OK' },
      { level: '进阶', task: '配置混合持久化', hint: 'aof-use-rdb-preamble', answer: 'CONFIG SET aof-use-rdb-preamble yes\n# 返回：OK' }
    ]
  },

  "BOGXTjmCLo6WI6mYDsqRu": {
    mentalModel: 'redis-cli 就像 Redis 的遥控器——用命令行控制 Redis，执行命令、查看状态',
    handsOn: [
      { title: '连接 Redis', cmd: 'redis-cli ping', output: 'PONG', explain: 'PONG 表示连接成功。默认连接 127.0.0.1:6379。' },
      { title: '连接远程 Redis', cmd: 'redis-cli -h redis-server -p 6379 -a mypassword ping', output: 'PONG', explain: '-h 主机，-p 端口，-a 密码。生产环境必须用密码。' },
      { title: '执行命令', cmd: 'redis-cli SET mykey "hello"\nredis-cli GET mykey', output: 'OK\n"hello"', explain: 'redis-cli 直接执行 Redis 命令。' }
    ],
    diagnosis: [
      { symptom: '连接失败', cause: '1) Redis 没启动 2) 端口错误 3) 密码错误。', fix: '检查 Redis 是否启动；检查端口；检查密码。' }
    ],
    exercises: [
      { level: '基础', task: '用 redis-cli 连接 Redis 并执行命令', hint: 'redis-cli', answer: 'redis-cli ping\n# 返回：PONG\n\nredis-cli SET mykey "hello"\nredis-cli GET mykey\n# 返回："hello"' }
    ]
  },

  "yBZ79s6mzGdj5AnX2H_Hy": {
    mentalModel: '预编译二进制就像即食食品——下载后直接使用，不用手动编译',
    handsOn: [
      { title: '下载预编译二进制', cmd: 'wget https://download.redis.io/redis-stable.tar.gz\ntar -xzf redis-stable.tar.gz\ncd redis-stable', output: 'Redis source downloaded', explain: '下载预编译二进制，不用手动编译。' },
      { title: '启动', cmd: 'src/redis-server', output: 'Redis server started', explain: '直接运行预编译二进制。' }
    ],
    diagnosis: [
      { symptom: '下载失败', cause: '1) 网络问题 2) 下载链接失效。', fix: '检查网络；从官网下载最新版本。' }
    ],
    exercises: [
      { level: '基础', task: '下载并启动 Redis 预编译二进制', hint: 'wget, tar', answer: 'wget https://download.redis.io/redis-stable.tar.gz\ntar -xzf redis-stable.tar.gz\ncd redis-stable\nsrc/redis-server' }
    ]
  },

  "uVewcyaFi1Pt2Gs0KrkfA": {
    mentalModel: 'Redis 的数据结构就像工具箱——String 是计数器，Hash 是对象，List 是队列，Set 是集合，Sorted Set 是排行榜',
    handsOn: [
      { title: 'String：计数器', cmd: 'INCR page:views:article:123\nINCRBY page:views:article:123 10\nGET page:views:article:123', output: '(integer) 1\n(integer) 11\n"11"', explain: 'String 适合计数器、缓存。INCR 原子递增。' },
      { title: 'Hash：对象存储', cmd: 'HSET user:123 name "Alice" age 30\nHGETALL user:123', output: '1) "name"\n2) "Alice"\n3) "age"\n4) "30"', explain: 'Hash 适合对象存储，可以单独更新字段。' },
      { title: 'List：消息队列', cmd: 'LPUSH queue "message1"\nBRPOP queue 5', output: '1) "queue"\n2) "message1"', explain: 'List 适合消息队列，LPUSH/BRPOP 实现 FIFO。' },
      { title: 'Set：集合', cmd: 'SADD tags:article:123 "redis" "database"\nSMEMBERS tags:article:123', output: '1) "redis"\n2) "database"', explain: 'Set 适合标签、好友关系。自动去重。' },
      { title: 'Sorted Set：排行榜', cmd: 'ZADD leaderboard 100 "alice"\nZREVRANGE leaderboard 0 9 WITHSCORES', output: '1) "alice"\n2) "100"', explain: 'Sorted Set 适合排行榜，自动排序。' }
    ],
    diagnosis: [
      { symptom: '不知道选哪种数据结构', cause: '不了解各种数据结构的适用场景。', fix: 'String：计数器、缓存；Hash：对象；List：队列；Set：集合；Sorted Set：排行榜。' }
    ],
    exercises: [
      { level: '基础', task: '用 Hash 存储用户信息', hint: 'HSET, HGETALL', answer: 'HSET user:123 name "Alice" age 30\nHGETALL user:123\n# 返回：name, age' },
      { level: '进阶', task: '用 Sorted Set 实现排行榜', hint: 'ZADD, ZREVRANGE', answer: 'ZADD leaderboard 100 "alice"\nZADD leaderboard 200 "bob"\nZREVRANGE leaderboard 0 9 WITHSCORES\n# 返回：Top 10' }
    ]
  },

  "NhcZM4nUQoSBBf_1qXi6l": {
    mentalModel: 'SET/GET 是 Redis 最基础的命令——SET 写入，GET 读取，就像存取物品',
    handsOn: [
      { title: 'SET 和 GET', cmd: 'SET greeting "hello redis"\nGET greeting', output: 'OK\n"hello redis"', explain: 'SET 写入内存，GET 读取。微秒级响应。' },
      { title: '设置过期时间', cmd: 'SET session:abc123 "user:123" EX 3600\nTTL session:abc123', output: 'OK\n(integer) 3600', explain: 'EX 设置过期时间（秒），TTL 查看剩余时间。' },
      { title: '条件设置', cmd: 'SET lock:resource "locked" NX EX 10', output: 'OK', explain: 'NX 只在 key 不存在时设置，EX 设置过期时间。适合分布式锁。' }
    ],
    diagnosis: [
      { symptom: 'GET 返回 nil', cause: '1) key 不存在 2) key 已过期 3) key 被删除。', fix: '用 EXISTS 检查是否存在；用 TTL 查看剩余时间；检查是否被删除。' }
    ],
    exercises: [
      { level: '基础', task: '用 SET 存储一个 key，设置 1 小时过期，然后读取', hint: 'SET key value EX 3600', answer: 'SET mykey "hello" EX 3600\nGET mykey\n# 返回："hello"\n\nTTL mykey\n# 返回：3600' },
      { level: '进阶', task: '用 SET NX 实现分布式锁', hint: 'SET key value NX EX', answer: 'SET lock:resource "locked" NX EX 10\n# 返回：OK（如果 key 不存在）\n# 返回：nil（如果 key 已存在）' }
    ]
  },

  "TDxv0q7jlZ26uZYYlneem": {
    mentalModel: '用 Docker 运行 Redis 就像用集装箱运输——标准化、易于部署、环境隔离',
    handsOn: [
      { title: '运行 Redis 容器', cmd: 'docker run -d --name redis -p 6379:6379 redis:7.0', output: 'Redis container started', explain: 'docker run 运行 Redis 容器，-p 6379:6379 映射端口。' },
      { title: '持久化数据', cmd: 'docker run -d --name redis -p 6379:6379 -v redis-data:/data redis:7.0 redis-server --appendonly yes', output: 'Redis container started with persistence', explain: '-v redis-data:/data 持久化数据，--appendonly yes 启用 AOF。' },
      { title: '连接容器', cmd: 'docker exec -it redis redis-cli ping', output: 'PONG', explain: 'docker exec 在容器内执行命令。' }
    ],
    diagnosis: [
      { symptom: '容器启动失败', cause: '1) 端口被占用 2) 镜像不存在 3) 权限不足。', fix: '检查端口占用；拉取镜像（docker pull redis）；用 sudo 运行。' }
    ],
    exercises: [
      { level: '基础', task: '用 Docker 运行 Redis 并连接', hint: 'docker run, docker exec', answer: 'docker run -d --name redis -p 6379:6379 redis:7.0\ndocker exec -it redis redis-cli ping\n# 返回：PONG' },
      { level: '进阶', task: '用 Docker 运行 Redis 并持久化数据', hint: 'docker run -v', answer: 'docker run -d --name redis -p 6379:6379 -v redis-data:/data redis:7.0 redis-server --appendonly yes\n# 数据持久化到 redis-data 卷' }
    ]
  },
