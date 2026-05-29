import type { DeepTutorial } from '../deep-types';

export const MONGODB_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  // Node 1: SQL vs NoSQL
  "cMfsRtvzvDZZJ0TqeUOxm": {
    mentalModel: 'SQL 与 NoSQL 是两种数据存储哲学：SQL 像 Excel 表格（行列固定、关系严密），NoSQL 像文件夹（灵活嵌套、按需组织）。',
    sections: [
      { title: '核心区别', content: 'SQL 数据库（如 PostgreSQL）使用预定义 Schema、表、行、列，通过 JOIN 关联数据。NoSQL 数据库（如 MongoDB）使用灵活的文档结构（BSON），每条文档可以有不同的字段。' },
      { title: '何时选 SQL', content: '数据关系复杂、需要强一致性事务（如银行转账）、查询模式多变、需要复杂 JOIN。' },
      { title: '何时选 NoSQL', content: '数据结构灵活多变（如用户画像、内容管理）、需要水平扩展（分片）、写多读少的场景（如日志）、快速迭代原型。' },
      { title: 'CAP 定理视角', content: 'SQL 通常偏 CA（一致性+可用性），NoSQL 可配置 CP 或 AP。MongoDB 默认 CP（副本集中 Primary 故障时短暂不可用）。' }
    ],
    diagnosis: [
      { symptom: '项目中频繁做多表 JOIN，查询越来越慢', cause: '数据结构高度关联，但使用了 NoSQL 存储', fix: '考虑迁移到 SQL 数据库，或在 NoSQL 中用嵌入式文档替代 JOIN' },
      { symptom: '每次加字段都要跑 ALTER TABLE 迁移脚本', cause: 'Schema 频繁变更但使用了 SQL 数据库', fix: '考虑迁移到 NoSQL，或使用 SQL 的 JSON 列类型做混合方案' }
    ],
    exercises: [
      { level: '基础', task: '列出 SQL 和 NoSQL 各两个代表性数据库', hint: 'SQL: 关系型经典; NoSQL: 文档/键值/图/列族', answer: 'SQL: PostgreSQL, MySQL。NoSQL: MongoDB（文档）, Redis（键值）, Neo4j（图）, Cassandra（列族）' },
      { level: '进阶', task: '设计一个博客系统，分别用 SQL 和 NoSQL 建模', hint: 'SQL 拆表+外键; NoSQL 嵌入或引用', answer: 'SQL: posts 表（id,title,body,author_id）+ comments 表（id,post_id,text）+ users 表。NoSQL: posts 文档 { title, body, author: {name}, comments: [{text,by}] }' }
    ]
  },

  // Node 2: Embedded Objects & Arrays
  "6MqhN-PTf1PRzYCTxC8pn": {
    mentalModel: '嵌入式文档和数组是 MongoDB 的超能力：把相关数据放在同一个文档里，像把一个文件夹的所有资料装在一起，而不是分散到不同抽屉。',
    sections: [
      { title: '嵌入式对象', content: '在一个文档里嵌套另一个完整对象。例：用户文档中嵌入 address: { city, street, zip }。优势：一次查询拿到所有数据。劣势：文档膨胀、更新嵌套字段稍复杂。' },
      { title: '数组字段', content: '一个字段存储多个值。例：tags: ["js","node"] 或 comments: [{text, author, date}]。支持 $push、$pull、$addToSet 等原子操作。' },
      { title: '嵌入 vs 引用', content: '嵌入：数据放在一起，读快但写慢（文档变大触发移动）。引用：存 ID 指向另一个文档，读慢（需多次查询）但写快。经验法则：如果数据经常一起读且不会无限增长，就嵌入。' },
      { title: '16MB 文档限制', content: 'MongoDB 单文档最大 16MB。如果子文档/数组会无限增长（如评论列表），必须用引用模式或 Bucket 模式分页存储。' }
    ],
    diagnosis: [
      { symptom: '文档越来越大，更新越来越慢', cause: '嵌入了无限增长的数组（如评论、日志），导致文档逼近 16MB 限制', fix: '改用引用模式，或使用 Bucket 模式将子文档分散到多个文档中' },
      { symptom: '查询总是需要两次 lookup 才能拿到完整数据', cause: '过度使用引用模式，频繁读取的数据被拆到不同集合', fix: '将经常一起读取的数据改为嵌入式存储' }
    ],
    exercises: [
      { level: '基础', task: '设计一个订单文档，嵌入收货地址和商品列表', hint: '地址用对象，商品用数组', answer: 'db.orders.insertOne({ orderNo: "ORD001", address: { city: "上海", street: "南京路100号" }, items: [{ name: "键盘", qty: 1, price: 299 }, { name: "鼠标", qty: 2, price: 99 }] })' },
      { level: '进阶', task: '查询所有包含 price > 100 的嵌入商品的订单', hint: '用点号访问嵌套数组字段', answer: 'db.orders.find({ "items.price": { $gt: 100 } })' }
    ]
  },

  // Node 3: What is MongoDB
  "tJljSlb5S_tZLZhZHHd_I": {
    mentalModel: 'MongoDB 是一个文档数据库：用 JSON 风格的文档存储数据，没有表和列的概念，每条记录就是一个灵活的 BSON 文档。',
    sections: [
      { title: '核心概念', content: '数据库（Database）→ 集合（Collection）→ 文档（Document）。类比 SQL：数据库 → 表 → 行。但 MongoDB 的文档没有固定 Schema，同一个集合里的文档可以有不同的字段。' },
      { title: 'BSON 格式', content: 'MongoDB 内部使用 BSON（Binary JSON）存储，比 JSON 多了类型信息（如 Date、ObjectId、Int32/Int64、Decimal128）。BSON 支持快速遍历和高效编码。' },
      { title: '为什么流行', content: '灵活 Schema 加速开发迭代；原生支持水平扩展（分片）；丰富的查询语言和聚合管道；副本集提供高可用；Atlas 提供全托管云服务。' },
      { title: '不适用场景', content: '复杂多表关联查询（JOIN 密集）；需要强 ACID 多文档事务的传统金融系统（虽然 MongoDB 4.0+ 支持多文档事务，但性能和复杂度仍不如 SQL）。' }
    ],
    diagnosis: [
      { symptom: '应用需要复杂的多表 JOIN 查询', cause: 'MongoDB 不原生支持 JOIN（只有 $lookup 聚合，性能有限）', fix: '评估是否应改用 SQL 数据库，或重新设计数据模型用嵌入式文档替代 JOIN' },
      { symptom: '新团队觉得 MongoDB 没有 Schema 很自由，结果数据越来越混乱', cause: '缺乏 Schema 治理，不同开发者写入结构不同的文档', fix: '使用 MongoDB Schema Validation 规则约束集合文档结构，或在应用层使用 Mongoose/ODM 定义 Schema' }
    ],
    exercises: [
      { level: '基础', task: '连接本地 MongoDB 并查看版本', hint: '使用 mongosh 命令行', answer: 'mongosh --eval "db.version()"' },
      { level: '基础', task: '列出当前所有数据库', hint: 'mongosh 内置命令', answer: 'mongosh --eval "show dbs"' },
      { level: '进阶', task: '解释 MongoDB 的 BSON 与 JSON 的三个区别', hint: '类型、二进制格式、遍历速度', answer: '1) BSON 有类型标注（Date、ObjectId、Int32 等），JSON 只有 string/number/boolean/null/array/object。2) BSON 是二进制格式，机器解析快；JSON 是文本格式，人可读。3) BSON 支持长度前缀，遍历字段不需要完整解析。' }
    ]
  },

  // Node 4: Double
  "4Cf_wcoByPqpOOpdbAJuq": {
    mentalModel: 'Double 是 MongoDB 的浮点数类型：64 位 IEEE 754 双精度，像科学计算器里的小数字，能表示很大或很小的带小数点的值。',
    handsOn: [
      { title: '插入 Double 值', cmd: 'db.types.insertOne({ name: "pi", value: 3.14159265358979 })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'mongosh 默认将带小数的数字存为 Double（BSON type 1）。' },
      { title: '查看存储类型', cmd: 'db.types.find({ name: "pi" }).map(d => typeof d.value)', output: '[ "number" ]', explain: '在 mongosh 中 typeof 显示 number，但实际存储为 BSON Double。' },
      { title: '用 $type 查询 Double 字段', cmd: 'db.types.find({ value: { $type: "double" } })', output: '[ { _id: ObjectId("..."), name: "pi", value: 3.14159265358979 } ]', explain: '$type: "double" 匹配 BSON type 1 的字段。' },
      { title: 'Double 精度陷阱', cmd: 'db.types.insertOne({ name: "sum", value: 0.1 + 0.2 })\ndb.types.find({ name: "sum" })', output: '[ { name: "sum", value: 0.30000000000000004 } ]', explain: 'IEEE 754 浮点精度问题：0.1 + 0.2 不等于 0.3。需要精确计算时用 Decimal128。' }
    ],
    diagnosis: [
      { symptom: '金额计算结果出现微小误差（如 19.99 变成 19.990000000000002）', cause: 'Double 类型的 IEEE 754 浮点精度问题', fix: '金额和需要精确小数的场景改用 Decimal128 类型' },
      { symptom: '查询 value: 3.0 找不到文档', cause: '文档中存的是整数 Int32，不是 Double。$type 不匹配', fix: '用 $type: ["double", "int"] 同时匹配两种数字类型，或确保插入时使用一致的数值类型' }
    ],
    exercises: [
      { level: '基础', task: '插入一个包含 Double 值的文档并验证类型', hint: '用 $type 检查', answer: 'db.test.insertOne({ score: 99.5 })\ndb.test.find({ score: { $type: "double" } })' },
      { level: '进阶', task: '为什么 MongoDB 不直接用 JSON 的 number 而是区分 Double/Int32/Int64？', hint: 'BSON 的二进制编码', answer: 'JSON 的 number 没有区分整数和浮点数，BSON 区分类型可以：1) 节省存储空间（Int32 只要 4 字节 vs Double 8 字节）；2) 保留程序员的类型意图；3) 避免整数被意外转为浮点数导致精度丢失。' }
    ]
  },

  // Node 5: String
  "eU4XCnrf27FO3KCda8QYw": {
    mentalModel: 'String 是 MongoDB 的文本类型：UTF-8 编码的字符串，像便签纸上的文字，可以存任何语言的文本。',
    handsOn: [
      { title: '插入字符串', cmd: 'db.users.insertOne({ name: "张三", email: "zhangsan@example.com" })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: '字符串用双引号包裹，支持中文等 UTF-8 字符。' },
      { title: '查询字符串', cmd: 'db.users.find({ name: "张三" })', output: '[ { _id: ObjectId("..."), name: "张三", email: "zhangsan@example.com" } ]', explain: '字符串精确匹配，区分大小写。' },
      { title: '正则匹配字符串', cmd: 'db.users.find({ name: /^张/ })', output: '[ { name: "张三", ... } ]', explain: '用正则表达式做模糊匹配，/^张/ 匹配以"张"开头的名字。' },
      { title: '查看字符串类型', cmd: 'db.users.find({ name: { $type: "string" } })', output: '[ { name: "张三", ... } ]', explain: 'BSON type 2 是字符串类型。' }
    ],
    diagnosis: [
      { symptom: '查询 { name: "zhang san" } 找不到 name: "Zhang San" 的文档', cause: '字符串比较区分大小写', fix: '使用正则表达式 db.users.find({ name: /^zhang san$/i })，或创建 collation: { locale: "en", strength: 2 } 索引' },
      { symptom: '字符串字段排序不符合预期（如 "10" 排在 "2" 前面）', cause: '字符串按字典序排序，不是数值顺序', fix: '如果字段本质是数字，应存为数字类型而非字符串' }
    ],
    exercises: [
      { level: '基础', task: '插入文档并用正则查找包含 @gmail 的邮箱', hint: '正则 /pattern/', answer: 'db.users.insertOne({ email: "test@gmail.com" })\ndb.users.find({ email: /@gmail/ })' },
      { level: '进阶', task: '实现不区分大小写的用户名查找', hint: '正则 i 标志或 collation', answer: 'db.users.find({ name: { $regex: "zhangsan", $options: "i" } })' }
    ]
  },

  // Node 6: MongoDB Basics
  "z50iixpcCMe9sTh-gwTI3": {
    mentalModel: 'MongoDB 基础操作是增删改查的起点：像操作一个巨大的 JSON 文件柜，你可以放入、取出、修改和搜索文档。',
    handsOn: [
      { title: '切换/创建数据库', cmd: 'use myshop', output: 'switched to db myshop', explain: 'use 切换到指定数据库，不存在则在首次写入时自动创建。' },
      { title: '查看当前数据库', cmd: 'db', output: 'myshop', explain: 'db 命令显示当前使用的数据库名。' },
      { title: '查看所有数据库', cmd: 'show dbs', output: 'admin   40.00 KiB\nconfig  108.00 KiB\nlocal   40.00 KiB\nmyshop  180.00 KiB', explain: 'show dbs 列出所有有数据的数据库（空数据库不显示）。' },
      { title: '插入文档', cmd: 'db.products.insertOne({ name: "键盘", price: 299 })', output: '{ acknowledged: true, insertedId: ObjectId("65f...") }', explain: 'insertOne 插入单条文档，自动生成 _id 字段。' },
      { title: '查询所有文档', cmd: 'db.products.find()', output: '[\n  { _id: ObjectId("65f..."), name: "键盘", price: 299 }\n]', explain: 'find() 无参数返回集合所有文档。' },
      { title: '删除集合', cmd: 'db.products.drop()', output: 'true', explain: 'drop() 删除整个集合及其索引。' }
    ],
    diagnosis: [
      { symptom: 'show dbs 看不到刚创建的数据库', cause: '数据库还没有任何数据写入（MongoDB 惰性创建）', fix: '先插入至少一条文档：db.mycollection.insertOne({ test: 1 })，然后再 show dbs' },
      { symptom: '误操作了错误的数据库', cause: '没有先 use 切换到正确的数据库', fix: '每次操作前先 db 确认当前数据库，或在连接字符串中指定数据库名' }
    ],
    exercises: [
      { level: '基础', task: '创建数据库 bookstore，插入一本书的信息', hint: 'use + insertOne', answer: 'use bookstore\ndb.books.insertOne({ title: "三体", author: "刘慈欣", price: 68 })' },
      { level: '基础', task: '查看 bookstore 数据库的所有集合', hint: 'show collections', answer: 'use bookstore\nshow collections' },
      { level: '进阶', task: '用一条命令插入并立即查询验证', hint: 'insertOne 返回 insertedId', answer: 'let r = db.books.insertOne({ title: "活着", author: "余华" })\ndb.books.find({ _id: r.insertedId })' }
    ]
  },

  // Node 7: Array
  "q6ZKxFcSAQ8bgUdGaDpuu": {
    mentalModel: 'Array 是 MongoDB 的列表类型：一个字段存多个值，像购物清单上的多个条目，可以存同类型或混合类型的元素。',
    handsOn: [
      { title: '插入数组字段', cmd: 'db.posts.insertOne({ title: "MongoDB入门", tags: ["mongodb", "database", "tutorial"] })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'tags 是一个字符串数组，一个字段存多个值。' },
      { title: '查询包含某元素的数组', cmd: 'db.posts.find({ tags: "mongodb" })', output: '[ { title: "MongoDB入门", tags: ["mongodb", "database", "tutorial"] } ]', explain: '直接匹配数组中的元素，不需要指定索引。' },
      { title: '查询包含多个元素的数组', cmd: 'db.posts.find({ tags: { $all: ["mongodb", "tutorial"] } })', output: '[ { title: "MongoDB入门", tags: ["mongodb", "database", "tutorial"] } ]', explain: '$all 匹配同时包含所有指定元素的数组。' },
      { title: '向数组添加元素', cmd: 'db.posts.updateOne({ title: "MongoDB入门" }, { $push: { tags: "beginner" } })', output: '{ acknowledged: true, matchedCount: 1, modifiedCount: 1 }', explain: '$push 向数组末尾追加元素。' },
      { title: '从数组删除元素', cmd: 'db.posts.updateOne({ title: "MongoDB入门" }, { $pull: { tags: "tutorial" } })', output: '{ acknowledged: true, matchedCount: 1, modifiedCount: 1 }', explain: '$pull 删除所有匹配的元素。' },
      { title: '按索引访问数组元素', cmd: 'db.posts.find({}, { "tags.0": 1 })', output: '[ { _id: ObjectId("..."), tags: [ "mongodb" ] } ]', explain: 'tags.0 访问数组第一个元素（索引从 0 开始）。' }
    ],
    diagnosis: [
      { symptom: '数组越来越大，查询和更新变慢', cause: '数组元素过多（>1000）导致文档膨胀和索引效率下降', fix: '考虑将数组元素拆到子文档集合中，或使用 $slice 限制返回的数组元素数量' },
      { symptom: '$push 后文档超过 16MB 报错', cause: '数组无限增长导致文档超出大小限制', fix: '改用引用模式（子文档集合+parentId），或使用 $push 时配合 $each 和 $slice 限制数组大小' }
    ],
    exercises: [
      { level: '基础', task: '创建一个有 skills 数组的用户文档，然后添加一个新技能', hint: 'insertOne + $push', answer: 'db.users.insertOne({ name: "小李", skills: ["JavaScript", "Python"] })\ndb.users.updateOne({ name: "小李" }, { $push: { skills: "Go" } })' },
      { level: '进阶', task: '查询 skills 数组恰好包含 3 个元素的用户', hint: '$size 操作符', answer: 'db.users.find({ skills: { $size: 3 } })' }
    ]
  },

  // Node 8: Object
  "QcdZKNcCtKls6P4YNXR2W": {
    mentalModel: 'Object 是 MongoDB 的嵌套文档类型：一个字段的值本身也是一个文档，像俄罗斯套娃一样层层嵌套，让数据结构更自然。',
    handsOn: [
      { title: '插入嵌套对象', cmd: 'db.users.insertOne({ name: "王五", address: { city: "北京", district: "海淀", zip: "100080" } })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'address 是一个嵌套对象，包含 city、district、zip 三个字段。' },
      { title: '查询嵌套字段', cmd: 'db.users.find({ "address.city": "北京" })', output: '[ { name: "王五", address: { city: "北京", district: "海淀", zip: "100080" } } ]', explain: '用点号语法 "address.city" 访问嵌套字段。注意必须加引号。' },
      { title: '匹配整个嵌套对象', cmd: 'db.users.find({ address: { city: "北京", district: "海淀", zip: "100080" } })', output: '[ { name: "王五", address: { city: "北京", district: "海淀", zip: "100080" } } ]', explain: '匹配整个对象时字段顺序必须完全一致，推荐用点号语法代替。' },
      { title: '更新嵌套字段', cmd: 'db.users.updateOne({ name: "王五" }, { $set: { "address.zip": "100081" } })', output: '{ acknowledged: true, matchedCount: 1, modifiedCount: 1 }', explain: '$set + 点号语法只更新嵌套字段，不影响其他字段。' },
      { title: '深层嵌套', cmd: 'db.companies.insertOne({ name: "ACME", ceo: { name: "李总", assistant: { name: "小陈", phone: "138..." } } })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: '支持多层嵌套："ceo.assistant.name" 访问深层字段。' }
    ],
    diagnosis: [
      { symptom: '查询 address: { city: "北京" } 找不到文档（文档中 address 还有 district 和 zip）', cause: '整个对象匹配要求字段完全一致，多了或少了字段都匹配不上', fix: '改用点号语法：db.users.find({ "address.city": "北京" })' },
      { symptom: '$set: { address: { city: "上海" } } 把整个 address 对象覆盖了', cause: '直接 set address 会替换整个嵌套对象', fix: '使用 $set: { "address.city": "上海" } 只更新嵌套字段' }
    ],
    exercises: [
      { level: '基础', task: '插入一个包含嵌套 profile 对象的用户（含 age 和 bio），然后更新 age', hint: '点号语法 + $set', answer: 'db.users.insertOne({ name: "小红", profile: { age: 25, bio: "工程师" } })\ndb.users.updateOne({ name: "小红" }, { $set: { "profile.age": 26 } })' },
      { level: '进阶', task: '查询嵌套对象中某个字段存在的所有文档', hint: '$exists', answer: 'db.users.find({ "address.zip": { $exists: true } })' }
    ]
  },

  // Node 9: MongoDB Atlas
  "1UXfFROvcunyhkx0zB_1S": {
    mentalModel: 'MongoDB Atlas 是 MongoDB 的云托管服务：像从自己盖仓库变成租云仓库，MongoDB 官方帮你管服务器、备份、监控和安全。',
    sections: [
      { title: '核心功能', content: '全托管 MongoDB 集群（支持 AWS/GCP/Azure）；自动备份和时间点恢复；内置监控和性能顾问；全球集群（跨区域复制）；Serverless 实例（按用量计费）。' },
      { title: '连接方式', content: 'Atlas 提供连接字符串：mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/<db>。mongosh 或驱动直接用此 URI 连接。+srv 表示使用 DNS SRV 记录自动发现集群节点。' },
      { title: '免费层 M0', content: 'Atlas 提供永久免费的 M0 集群（512MB 存储），适合学习和小项目。共享 RAM，性能有限但足够原型开发。' },
      { title: '安全特性', content: 'IP 白名单（Network Access）；数据库用户认证（SCRAM/证书/LDAP）；字段级加密（Queryable Encryption）；VPC Peering 和 Private Endpoint。' }
    ],
    diagnosis: [
      { symptom: '本地无法连接 Atlas 集群，超时', cause: 'IP 地址未加入 Atlas 的 Network Access 白名单', fix: '在 Atlas 控制台 → Network Access → Add IP Address，添加你的公网 IP 或设为 0.0.0.0/0（仅限开发环境）' },
      { symptom: '连接字符串报 authentication failed', cause: '数据库用户名或密码错误，或在连接字符串中用了 < > 占位符没替换', fix: '检查 Atlas 控制台 → Database Access 中的用户名和密码，确保连接字符串中已替换占位符' }
    ],
    exercises: [
      { level: '基础', task: '在 Atlas 创建一个免费集群并获取连接字符串', hint: 'Atlas 控制台 → Clusters → Connect', answer: '1) 注册 atlas.mongodb.com 2) 创建 M0 免费集群 3) 创建数据库用户 4) 添加 IP 白名单 5) 点击 Connect → mongosh → 复制连接字符串' },
      { level: '进阶', task: '解释 mongodb+srv:// 和 mongodb:// 连接字符串的区别', hint: 'DNS SRV 记录', answer: 'mongodb:// 需要列出所有节点地址和端口。mongodb+srv:// 使用 DNS SRV 记录自动发现集群节点，更简洁且支持集群拓扑变更时自动更新，无需修改客户端连接字符串。' }
    ]
  },

  // Node 10: Binary Data
  "UM6jH6bAijYS0Hmw87UQ-": {
    mentalModel: 'Binary Data 是 MongoDB 的二进制类型：存储原始字节流，像保险箱里的密封信封，可以存图片、加密数据或任何二进制内容。',
    handsOn: [
      { title: '插入 Binary 数据', cmd: 'db.files.insertOne({ filename: "logo.png", data: BinData(0, "iVBORw0KGgoAAAANS...") })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'BinData(subtype, base64string)。subtype 0 是通用二进制。' },
      { title: '查看 Binary 字段', cmd: 'db.files.find({ filename: "logo.png" }, { data: 1 })', output: '[ { _id: ObjectId("..."), data: Binary.createFromBase64("iVBORw0KGgo...", 0) } ]', explain: 'mongosh 显示 Binary 对象的 base64 表示和 subtype。' },
      { title: 'Binary 子类型', cmd: 'db.files.insertOne({ name: "secret", data: BinData(5, "dGVzdA==") })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'subtype 5 是 MD5 摘要，其他常用：0=通用，2=旧版二进制，3=UUID 旧格式，4=UUID 新格式。' },
      { title: '查询 Binary 类型字段', cmd: 'db.files.find({ data: { $type: "binData" } })', output: '[ { filename: "logo.png", data: Binary... }, { name: "secret", data: Binary... } ]', explain: '$type: "binData" 匹配 BSON type 5 的二进制字段。' }
    ],
    diagnosis: [
      { symptom: '文档超过 16MB 限制（存储了大量图片数据）', cause: '直接在文档中存储大文件（>16MB）', fix: '使用 GridFS 存储大文件（自动拆分为 255KB 的 chunk），或将文件存到对象存储（S3）并在 MongoDB 中只存 URL 引用' },
      { symptom: 'Base64 编码的字符串存入后查询报错', cause: 'Base64 编码增加了约 33% 的体积，且字符串类型无法做二进制比较', fix: '使用 BinData 类型而不是 Base64 字符串存储二进制数据' }
    ],
    exercises: [
      { level: '基础', task: '插入一个包含 Binary 字段的文档', hint: 'BinData 函数', answer: 'db.test.insertOne({ name: "sample", payload: BinData(0, "aGVsbG8=") })' },
      { level: '进阶', task: 'MongoDB 中大文件（>16MB）应该怎么存？', hint: 'GridFS', answer: '使用 GridFS，它将大文件拆分为多个 chunk 文档（默认 255KB），存储在 fs.files（元数据）和 fs.chunks（数据块）两个集合中。mongosh 中可用 GridFSBucket API 操作。' }
    ]
  },

  // Node 11: Data Model & Data Types
  "_UIfRdlj6BeEESw1FW9RH": {
    mentalModel: '数据模型与数据类型是 MongoDB 的设计基础：像建筑师选建材，你需要知道有哪些材料（类型）以及怎么搭结构（模型）才能盖出好房子。',
    sections: [
      { title: 'BSON 类型总览', content: 'MongoDB 使用 BSON（Binary JSON）类型系统：Double(1)、String(2)、Object(3)、Array(4)、Binary(5)、ObjectId(7)、Boolean(8)、Date(9)、Null(10)、Regex(11)、JavaScript(13)、Int32(16)、Int64(18)、Decimal128(19)。每个类型有数字编号，$type 查询可用名称或编号。' },
      { title: '嵌入 vs 引用模型', content: '嵌入式模型：相关数据存在同一文档（一对少、一对一、一对少量的关系）。引用模型：存 ID 指向其他文档（一对多、多对多、数据独立演化的关系）。核心决策：数据是否经常一起读？子数据是否会无限增长？' },
      { title: '设计原则', content: '"为查询设计"——根据应用的读写模式决定数据模型，而不是按实体归一化。读取频繁的数据放在一起（嵌入），独立更新的大数据分开存（引用）。' },
      { title: '常用模式', content: 'Attribute Pattern（大量可选字段）、Bucket Pattern（时序数据分桶）、Computed Pattern（预计算聚合值）、Extended Reference Pattern（引用+冗余关键字段）、Schema Versioning Pattern（版本迭代兼容）。' }
    ],
    diagnosis: [
      { symptom: '集合中文档结构差异巨大，查询逻辑复杂', cause: '没有统一的数据模型设计，每个开发者按自己理解存储', fix: '制定 Schema 设计规范，使用 MongoDB Schema Validation 约束，或在应用层用 ODM 强制结构' },
      { symptom: '频繁使用 $lookup 做关联查询，性能差', cause: '数据模型过度拆分（SQL 思维），应该嵌入的数据用了引用', fix: '分析查询模式，将经常一起读取的数据改为嵌入式模型' }
    ],
    exercises: [
      { level: '基础', task: '列出 MongoDB 支持的 5 种 BSON 数字类型', hint: '整型、浮点、长整型、精确小数', answer: 'Double（64位浮点）、Decimal128（128位精确小数）、Int32（32位整数）、Int64/Long（64位整数）、Timestamp（内部用，类似时间戳）。' },
      { level: '进阶', task: '为电商系统设计用户-订单数据模型，说明选择嵌入还是引用', hint: '订单数量可能很多', answer: '用户和订单用引用模式：users 集合 { name, email }，orders 集合 { userId, items, total }。原因：用户可能有成百上千订单（无限增长），嵌入会导致文档过大。但可在用户文档中嵌入最近3个订单摘要（Extended Reference 模式）。' }
    ]
  },

  // Node 12: MongoDB Terminology
  "1pCWjSvjvbox5OpyWJ8Kv": {
    mentalModel: 'MongoDB 术语是理解数据库的词汇表：就像去外国旅行要先学基本用语，搞懂 Collection/Document/Field 这些词才能看懂文档和报错。',
    sections: [
      { title: 'SQL 与 MongoDB 术语对照', content: 'Database → Database（相同）。Table → Collection（集合）。Row → Document（文档）。Column → Field（字段）。JOIN → $lookup / Embedding（聚合或嵌入）。Index → Index（相同）。Primary Key → _id（自动创建）。' },
      { title: '核心术语详解', content: 'Collection：一组文档的容器，类似表但不要求固定 Schema。Document：一条 BSON 记录，类似行但结构灵活。Field：文档中的键值对，类似列但每个文档可以不同。' },
      { title: '高级术语', content: 'Replica Set：一组维护相同数据的 MongoDB 实例（主从复制）。Shard：数据水平分片后的一个分区。mongod：MongoDB 服务进程。mongosh：MongoDB Shell 客户端。GridFS：大文件存储规范。Change Stream：实时数据变更监听。' },
      { title: '操作术语', content: 'CRUD：Create（insertOne/Many）、Read（find）、Update（updateOne/Many）、Delete（deleteOne/Many）。Aggregation Pipeline：聚合管道，用 stage 链式处理数据。Cursor：查询返回的迭代器，惰性获取结果。' }
    ],
    diagnosis: [
      { symptom: '文档中说 "use the aggregation pipeline" 但不知道是什么', cause: '不熟悉 MongoDB 术语体系', fix: 'Aggregation Pipeline = 聚合管道，类似 SQL 的 GROUP BY + HAVING + 各种函数组合。由多个 stage（阶段）组成，如 $match、$group、$sort。' },
      { symptom: '报错 "not primary" 或 "not master"', cause: '在副本集的 Secondary 节点上执行了写操作', fix: '写操作必须连接到 Primary 节点。使用连接字符串让驱动自动发现 Primary，或手动连接到 Primary。' }
    ],
    exercises: [
      { level: '基础', task: '把 SQL 术语翻译成 MongoDB 术语：表、行、列、主键', hint: '对照表', answer: '表 → Collection（集合），行 → Document（文档），列 → Field（字段），主键 → _id（ObjectId）。' },
      { level: '进阶', task: '解释 Replica Set 和 Shard 的区别', hint: '一个是复制，一个是拆分', answer: 'Replica Set（副本集）：多个节点存储相同数据，提供高可用和读扩展。一个 Primary 负责写入，多个 Secondary 复制数据。Shard（分片）：将数据水平拆分到多个服务器上，每个 Shard 存储部分数据，提供写扩展。通常每个 Shard 自身也是一个 Replica Set。' }
    ]
  },

  // Node 13: ObjectId
  "mxd3-l3-NtPw53dEvhqm4": {
    mentalModel: 'ObjectId 是 MongoDB 的全局唯一 ID 生成器：像每台设备都有唯一序列号，12 字节的值包含时间戳+机器标识+进程号+随机递增计数器。',
    handsOn: [
      { title: '查看自动生成的 _id', cmd: 'db.test.insertOne({ x: 1 })\ndb.test.find()', output: '[ { _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"), x: 1 } ]', explain: 'MongoDB 自动为每条文档生成 ObjectId 类型的 _id 字段。' },
      { title: '手动生成 ObjectId', cmd: 'new ObjectId()', output: 'ObjectId("65a1b2c3d4e5f6a7b8c9d0e2")', explain: 'mongosh 中可以手动创建新的 ObjectId。' },
      { title: '从 ObjectId 提取时间', cmd: 'ObjectId("65a1b2c3d4e5f6a7b8c9d0e1").getTimestamp()', output: 'ISODate("2024-01-13T02:15:31.000Z")', explain: 'ObjectId 前 4 字节是 Unix 时间戳，可以反查文档创建时间。' },
      { title: '按时间排序', cmd: 'db.test.find().sort({ _id: 1 })', output: '[按 _id 升序排列]', explain: 'ObjectId 包含时间戳，按 _id 排序近似按创建时间排序。' },
      { title: '自定义 _id', cmd: 'db.test.insertOne({ _id: "custom-id-001", data: "test" })', output: '{ acknowledged: true, insertedId: "custom-id-001" }', explain: '_id 可以用任何唯一值，不必非用 ObjectId。但必须保证集合内唯一。' }
    ],
    diagnosis: [
      { symptom: '插入报 E11000 duplicate key error', cause: '_id 值重复（自定义 _id 时容易发生）', fix: '确保 _id 唯一。如果用自定义 _id，先检查是否已存在：db.test.findOne({ _id: "custom-id" })' },
      { symptom: 'ObjectId 字符串比较失败："65a1..." != ObjectId("65a1...")', cause: '字符串和 ObjectId 是不同类型，不能直接比较', fix: '查询时确保类型一致：db.test.find({ _id: ObjectId("65a1b2c3d4e5f6a7b8c9d0e1") })，或用 $toString 转换' }
    ],
    exercises: [
      { level: '基础', task: '插入文档并获取其自动生成的 ObjectId', hint: 'insertOne 返回值', answer: 'let r = db.test.insertOne({ msg: "hello" })\nprint(r.insertedId)' },
      { level: '进阶', task: '解释 ObjectId 的 12 字节分别代表什么', hint: '4+5+3', answer: '12 字节 = 4 字节时间戳（Unix 秒数）+ 5 字节随机值（机器+进程标识）+ 3 字节递增计数器。这保证了分布式系统中不同机器、不同进程生成的 ID 不冲突。' },
      { level: '挑战', task: '查询今天创建的所有文档（利用 ObjectId 的时间戳特性）', hint: '构造一个今天的 ObjectId 作为下界', answer: 'let todayHex = Math.floor(Date.now()/1000 - 86400).toString(16) + "0000000000000000"\ndb.test.find({ _id: { $gte: ObjectId(todayHex) } })' }
    ]
  },

  // Node 14: Boolean
  "hmo7zCZ1jKgobS5R0eBSD": {
    mentalModel: 'Boolean 是 MongoDB 的布尔类型：只有 true 和 false 两个值，像电灯开关，只有开和关两种状态。',
    handsOn: [
      { title: '插入布尔值', cmd: 'db.settings.insertOne({ feature: "darkMode", enabled: true })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'true/false 是 BSON Boolean 类型（type 8）。注意小写。' },
      { title: '查询布尔值', cmd: 'db.settings.find({ enabled: true })', output: '[ { _id: ObjectId("..."), feature: "darkMode", enabled: true } ]', explain: '直接匹配 true 或 false。' },
      { title: '查询布尔类型字段', cmd: 'db.settings.find({ enabled: { $type: "bool" } })', output: '[ { feature: "darkMode", enabled: true } ]', explain: '$type: "bool" 或 $type: 8 匹配布尔类型。' },
      { title: '常见陷阱：truthy vs 严格布尔', cmd: 'db.settings.insertOne({ feature: "legacy", enabled: 1 })\ndb.settings.find({ enabled: true })', output: '[ { feature: "darkMode", enabled: true } ]', explain: '1 不等于 true！MongoDB 严格区分布尔值和数字。enabled: 1 不会被 enabled: true 匹配。' }
    ],
    diagnosis: [
      { symptom: '查询 { active: true } 找不到 active: 1 的文档', cause: 'MongoDB 严格区分布尔值和数字，1 !== true', fix: '确保应用层写入时使用正确的布尔类型。查询时可兼容：{ active: { $in: [true, 1] } }' },
      { symptom: '从 API 接收的 "true"（字符串）存入后查不到', cause: '字符串 "true" 不是布尔 true', fix: '在写入前转换：enabled: (value === "true" || value === true)，或使用 Schema Validation 强制类型' }
    ],
    exercises: [
      { level: '基础', task: '插入一个有 isActive 布尔字段的文档，查询所有激活的记录', hint: 'true/false 直接匹配', answer: 'db.users.insertOne({ name: "小明", isActive: true })\ndb.users.find({ isActive: true })' },
      { level: '进阶', task: '找出集合中所有非布尔类型的 enabled 字段（可能是数字或字符串）', hint: '$type + $not', answer: 'db.settings.find({ enabled: { $exists: true, $not: { $type: "bool" } } })' }
    ]
  },

  // Node 15: Counting Documents
  "hC83jKoO_XFI83WpsdN_Z": {
    mentalModel: 'countDocuments 是 MongoDB 的精确计数器：像点名一样逐个统计满足条件的文档，区别于估算方法（estimatedDocumentCount 直接读元数据）。',
    handsOn: [
      { title: '精确计数', cmd: 'db.orders.countDocuments({ status: "completed" })', output: '42', explain: 'countDocuments 遍历匹配文档并计数，结果精确。替代了已弃用的 count()。' },
      { title: '估算总数', cmd: 'db.orders.estimatedDocumentCount()', output: '15000', explain: 'estimatedDocumentCount 读集合元数据，几乎瞬间返回，但不支持查询条件。' },
      { title: '带条件的计数', cmd: 'db.orders.countDocuments({ amount: { $gt: 100 }, status: "completed" })', output: '18', explain: '支持所有 find 查询条件，但大集合上可能较慢。' },
      { title: 'limit 限制计数', cmd: 'db.orders.countDocuments({ status: "pending" }, { limit: 100 })', output: '100', explain: 'limit 参数设置计数上限，到达后停止。用于快速判断是否超过阈值。' },
      { title: '用聚合管道计数', cmd: 'db.orders.aggregate([{ $match: { status: "completed" } }, { $count: "total" }])', output: '[ { total: 42 } ]', explain: '聚合管道中的 $count 阶段也能计数，适合复杂聚合后统计。' }
    ],
    diagnosis: [
      { symptom: 'countDocuments 在大集合上非常慢', cause: 'countDocuments 执行完整查询，如果没有索引就需要全集合扫描', fix: '为查询条件创建索引。如果只是需要大概数量，改用 estimatedDocumentCount()' },
      { symptom: 'countDocuments 返回结果与 find().toArray().length 不一致', cause: '并发写入导致计数时刻与查询时刻数据不同', fix: '这是正常现象。如需一致结果，在事务中执行，或使用 snapshot 读关注级别' }
    ],
    exercises: [
      { level: '基础', task: '统计集合中所有文档数量和满足条件的文档数量', hint: '两种计数方法', answer: 'db.products.estimatedDocumentCount()  // 总数\ndb.products.countDocuments({ price: { $gt: 50 } })  // 条件计数' },
      { level: '进阶', task: '解释 countDocuments 和 estimatedDocumentCount 的区别和使用场景', hint: '精确 vs 快速', answer: 'countDocuments: 精确计数，支持查询条件，大集合上慢（需要执行查询）。estimatedDocumentCount: 估算计数，不支持条件，几乎瞬间返回（读元数据）。场景：需要精确结果或带条件用 countDocuments；只需要大概总数用 estimatedDocumentCount。' }
    ]
  },

  // Node 16: Null
  "g6AKQiFcY_8lsWRbkbZSC": {
    mentalModel: 'Null 是 MongoDB 的空值类型：表示字段值为"无"，像一个贴了标签但里面空的信封。注意 null 既匹配 null 值也匹配字段不存在。',
    handsOn: [
      { title: '插入 null 值', cmd: 'db.users.insertOne({ name: "匿名", email: null })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'null 是 BSON Null 类型（type 10），表示字段有定义但值为空。' },
      { title: '查询 null 值', cmd: 'db.users.find({ email: null })', output: '[ { name: "匿名", email: null }, { name: "老王" } ]', explain: '注意！{ email: null } 同时匹配 email 为 null 和 email 字段不存在的文档。' },
      { title: '只匹配 null 值（排除不存在）', cmd: 'db.users.find({ email: { $eq: null, $type: "null" } })', output: '[ { name: "匿名", email: null } ]', explain: '$type: "null" 确保字段存在且值为 null，排除字段不存在的情况。' },
      { title: '查询字段不存在', cmd: 'db.users.find({ email: { $exists: false } })', output: '[ { name: "老王" } ]', explain: '$exists: false 只匹配字段不存在的文档。' },
      { title: '查询字段存在且不为 null', cmd: 'db.users.find({ email: { $ne: null } })', output: '[ { name: "张三", email: "zhang@example.com" } ]', explain: '$ne: null 排除 null 和不存在的文档，只返回有实际值的文档。' }
    ],
    diagnosis: [
      { symptom: '查询 { field: null } 返回了不包含该字段的文档', cause: 'MongoDB 中 null 查询同时匹配 null 值和字段缺失', fix: '如果只想匹配 null 值：{ field: { $eq: null, $type: "null" } }。如果只想匹配缺失：{ field: { $exists: false } }' },
      { symptom: '从 Java/Go 应用写入的 null 字段查不到', cause: '某些驱动可能不写入 null 值字段（省略字段），导致存储时字段不存在而非 null', fix: '检查驱动配置。或在查询时用 { $in: [null], $exists: false } 同时匹配两种情况' }
    ],
    exercises: [
      { level: '基础', task: '插入三条文档（有值、null、无字段），分别查询三种情况', hint: '$type, $exists, $ne', answer: 'db.test.insertMany([{ v: "hello" }, { v: null }, { other: 1 }])\ndb.test.find({ v: { $type: "null" } })  // 只有 null\ndb.test.find({ v: { $exists: false } })  // 只有无字段\ndb.test.find({ v: { $ne: null } })  // 只有有值' },
      { level: '进阶', task: '解释 null、字段不存在、空字符串 "" 在 MongoDB 中的区别', hint: '三种不同的"空"', answer: 'null：字段存在，值为 BSON Null 类型。字段不存在：文档中没有该键。空字符串 ""：字段存在，值为 BSON String 类型，内容是空字符串。三者是不同的值，查询时行为不同。{ f: null } 匹配前两种，{ f: "" } 只匹配第三种。' }
    ]
  },

  // Node 17: insertOne/insertMany
  "mXdn4u5CiQRDE83qMiWZX": {
    mentalModel: 'insertOne/insertMany 是 MongoDB 的写入入口：像往文件柜里放文件夹，insertOne 放一个，insertMany 批量放多个。',
    handsOn: [
      { title: 'insertOne 单条插入', cmd: 'db.books.insertOne({ title: "三体", author: "刘慈欣", price: 68, published: new Date("2008-01-01") })', output: '{ acknowledged: true, insertedId: ObjectId("65f...") }', explain: 'insertOne 插入单条文档，返回 insertedId。自动生成 _id（如未提供）。' },
      { title: 'insertMany 批量插入', cmd: 'db.books.insertMany([\n  { title: "活着", author: "余华", price: 45 },\n  { title: "百年孤独", author: "马尔克斯", price: 55 }\n])', output: '{ acknowledged: true, insertedIds: { "0": ObjectId("..."), "1": ObjectId("...") } }', explain: 'insertMany 一次插入多条文档，返回每条的 insertedId。' },
      { title: 'ordered 参数控制', cmd: 'db.books.insertMany([\n  { _id: 1, title: "A" },\n  { _id: 1, title: "B" },\n  { _id: 3, title: "C" }\n], { ordered: false })', output: 'MongoBulkWriteError: ... insertedCount: 2', explain: 'ordered: false 允许跳过错误文档继续插入。默认 ordered: true 会在第一个错误处停止。' },
      { title: '自定义 _id', cmd: 'db.books.insertOne({ _id: "isbn-978-7-5366", title: "三体" })', output: '{ acknowledged: true, insertedId: "isbn-978-7-5366" }', explain: '_id 可以自定义，但必须在集合内唯一。重复会报 E11000 错误。' },
      { title: '写入确认', cmd: 'db.books.insertOne({ title: "test" }, { writeConcern: { w: "majority", wtimeout: 5000 } })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'writeConcern 控制写入确认级别。w: "majority" 确保多数节点确认写入后才返回成功。' }
    ],
    diagnosis: [
      { symptom: 'insertMany 插入 10000 条但只成功了一半', cause: 'ordered 默认 true，中间某条文档 _id 重复导致后续全部中止', fix: '使用 ordered: false 让非冲突的文档继续插入，然后检查错误详情处理冲突文档' },
      { symptom: 'insertOne 报 BSONObj size: 17825800 (17MB) is invalid', cause: '单条文档超过 16MB 限制', fix: '减小文档大小。大文件使用 GridFS 存储，大数组拆到子文档集合。' }
    ],
    exercises: [
      { level: '基础', task: '用 insertMany 插入 3 本书，然后验证总数', hint: 'insertMany + countDocuments', answer: 'db.books.insertMany([\n  { title: "书A", price: 30 },\n  { title: "书B", price: 40 },\n  { title: "书C", price: 50 }\n])\ndb.books.countDocuments({})' },
      { level: '进阶', task: '演示 ordered: true 和 ordered: false 在遇到重复 _id 时的行为差异', hint: '插入三条，中间一条 _id 重复', answer: '// ordered: true（默认）—— 第一条成功，第二条报错，第三条不执行\ndb.test.insertMany([{_id:1},{_id:1},{_id:3}])  // 只插入1条\n// ordered: false —— 跳过冲突，继续插入\ndb.test.insertMany([{_id:1},{_id:1},{_id:3}], {ordered:false})  // 插入2条(1和3)' }
    ]
  },

  // Node 18: Regular Expression
  "z6I9XgIGQYWUd5l9DIZRX": {
    mentalModel: '正则表达式是 MongoDB 的文本搜索引擎：像 Word 的高级查找替换，用模式匹配文本而不是精确字符串比较。',
    handsOn: [
      { title: '基本正则查询', cmd: 'db.users.find({ name: /^张/ })', output: '[ { name: "张三" }, { name: "张伟" } ]', explain: '/^张/ 匹配以"张"开头的名字。mongosh 支持直接使用 /pattern/ 语法。' },
      { title: '使用 $regex 操作符', cmd: 'db.users.find({ email: { $regex: "@gmail\\.com$", $options: "i" } })', output: '[ { email: "test@Gmail.Com" } ]', explain: '$regex 配合 $options 使用。"i" 表示不区分大小写。' },
      { title: '常用选项', cmd: 'db.users.find({ bio: { $regex: "mongodb", $options: "im" } })', output: '[ { bio: "I love MongoDB!" } ]', explain: '"i" 不区分大小写，"m" 多行模式（^/$ 匹配每行首尾），"s" 让 . 匹配换行符。' },
      { title: '正则 + 索引优化', cmd: 'db.users.createIndex({ name: 1 })\ndb.users.find({ name: /^张/ }).explain("executionStats")', output: 'stage: "IXSCAN"', explain: '前缀正则（/^xxx/）可以利用索引。但中间匹配（/xxx/）或尾部正则无法使用索引。' },
      { title: '不推荐：全表正则扫描', cmd: 'db.users.find({ name: /三/ }).explain("executionStats")', output: 'stage: "COLLSCAN", totalDocsExamined: 10000', explain: '/三/（中间匹配）无法使用索引，触发全集合扫描，大集合上非常慢。' }
    ],
    diagnosis: [
      { symptom: '正则查询在大集合上非常慢（秒级响应）', cause: '正则表达式（尤其是非前缀匹配）无法使用索引，导致全集合扫描', fix: '1) 尽量用前缀正则 /^xxx/ 以利用索引。2) 对于全文搜索需求，使用 MongoDB Atlas Search 或 Elasticsearch。' },
      { symptom: '正则表达式 ReDoS 导致 CPU 飙升', cause: '复杂的嵌套量词正则（如 (a+)+）导致指数级回溯', fix: '避免嵌套量词。使用 $regex 时设置 maxTimeMS 限制查询时间：db.find({}).maxTimeMS(5000)' }
    ],
    exercises: [
      { level: '基础', task: '查询所有以 "test" 开头的邮箱（不区分大小写）', hint: '/^pattern/i', answer: 'db.users.find({ email: /^test/i })' },
      { level: '进阶', task: '解释为什么 /^abc/ 能用索引而 /abc/ 不能', hint: 'B-tree 索引的前缀匹配特性', answer: 'B-tree 索引按排序存储，/^abc/ 可以定位到以 "abc" 开头的范围（前缀匹配）。而 /abc/ 需要检查每个值的中间是否包含 "abc"，必须遍历所有索引条目（或全表扫描），无法利用索引的有序性。' }
    ]
  },

  // Node 19: find() queries
  "iMpCEXRDXg0Kq9OFNywbI": {
    mentalModel: 'find() 是 MongoDB 的查询核心：像在图书馆找书，你给出条件（查询过滤器），它返回匹配的文档。支持精确匹配、范围查询、逻辑组合。',
    handsOn: [
      { title: '查询所有文档', cmd: 'db.products.find()', output: '[ { _id: ..., name: "键盘", price: 299 }, { _id: ..., name: "鼠标", price: 99 }, ... ]', explain: '无参数的 find() 返回集合所有文档（类似 SELECT *）。' },
      { title: '精确匹配', cmd: 'db.products.find({ name: "键盘" })', output: '[ { name: "键盘", price: 299 } ]', explain: '字段值精确匹配，字符串区分大小写。' },
      { title: '比较操作符', cmd: 'db.products.find({ price: { $gte: 100, $lte: 300 } })', output: '[ { name: "键盘", price: 299 } ]', explain: '$gt（>）、$gte（>=）、$lt（<）、$lte（<=）、$ne（!=）、$eq（==）。' },
      { title: '逻辑组合', cmd: 'db.products.find({ $or: [{ price: { $lt: 100 } }, { name: "键盘" }] })', output: '[ { name: "鼠标", price: 99 }, { name: "键盘", price: 299 } ]', explain: '$or、$and、$nor、$not 组合查询条件。' },
      { title: '投影（选择返回字段）', cmd: 'db.products.find({}, { name: 1, price: 1, _id: 0 })', output: '[ { name: "键盘", price: 299 }, { name: "鼠标", price: 99 } ]', explain: '投影指定返回哪些字段。1 表示包含，0 表示排除。_id 默认包含，需显式排除。' },
      { title: '排序、跳过、限制', cmd: 'db.products.find().sort({ price: -1 }).skip(0).limit(5)', output: '[按价格降序的前5条]', explain: 'sort: 1 升序，-1 降序。skip 跳过 N 条（分页偏移）。limit 限制返回数量。' }
    ],
    diagnosis: [
      { symptom: 'find() 返回空数组但数据确实存在', cause: '查询条件类型不匹配（如查询数字但字段存的是字符串）或拼写错误', fix: '用 db.collection.findOne() 先查看文档实际结构。检查字段名拼写、嵌套字段是否用引号包裹。' },
      { symptom: '大集合上 find() 查询很慢', cause: '缺少索引，导致全集合扫描（COLLSCAN）', fix: '使用 explain("executionStats") 检查执行计划。为常用查询条件创建索引：db.collection.createIndex({ field: 1 })' }
    ],
    exercises: [
      { level: '基础', task: '查询价格大于 50 且小于 200 的产品，只返回 name 和 price', hint: '比较操作符 + 投影', answer: 'db.products.find({ price: { $gt: 50, $lt: 200 } }, { name: 1, price: 1, _id: 0 })' },
      { level: '进阶', task: '实现分页查询：每页 10 条，取第 3 页', hint: 'skip + limit', answer: 'db.products.find().sort({ _id: 1 }).skip(20).limit(10)\n// 第3页 = 跳过前20条（2页×10条），取10条' },
      { level: '挑战', task: '查询"价格大于 100 的产品"或"名字包含 Pro 的产品"，按价格降序取前 3 条', hint: '$or + sort + limit', answer: 'db.products.find({ $or: [{ price: { $gt: 100 } }, { name: /Pro/ }] }).sort({ price: -1 }).limit(3)' }
    ]
  },

  // Node 20: JavaScript Type
  "UXO5i6nPa5CRW1z7FAn_S": {
    mentalModel: 'JavaScript 类型允许在 MongoDB 中存储函数代码：像把一段脚本贴到文档上。但实际使用中极少用到，因为安全风险高且有更好的替代方案。',
    handsOn: [
      { title: '存储 JavaScript 代码', cmd: 'db.scripts.insertOne({ name: "greet", code: function(name) { return "Hello " + name; } })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'mongosh 会将 function 自动转为 BSON Code 类型（type 13）存储。' },
      { title: '查看存储的代码', cmd: 'db.scripts.find({ name: "greet" })', output: '[ { name: "greet", code: Code("function (name) { return \\"Hello \\" + name; }") } ]', explain: 'mongosh 显示为 Code 类型，包含函数体字符串。' },
      { title: '带 scope 的代码', cmd: 'db.scripts.insertOne({ name: "calc", code: Code("function() { return x + y; }", { x: 10, y: 20 }) })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'Code 类型可以携带 scope（变量环境），但 MongoDB 4.2+ 已弃用带 scope 的代码。' },
      { title: '查询 Code 类型', cmd: 'db.scripts.find({ code: { $type: "javascript" } })', output: '[ { name: "greet", code: Code(...) }, { name: "calc", code: Code(...) } ]', explain: '$type: "javascript" 匹配 BSON type 13 的字段。' }
    ],
    diagnosis: [
      { symptom: '存入的函数在 mongosh 中执行报错', cause: 'MongoDB 4.4+ 不再支持 $where 和服务端 JavaScript 执行（默认禁用）', fix: '不要把业务逻辑存在 MongoDB 的 JavaScript 类型中。将代码存为字符串，在应用层执行。或用聚合管道替代服务端计算。' },
      { symptom: '安全扫描报告 MongoDB 存储了可执行代码', cause: 'JavaScript 类型字段存在代码注入风险', fix: '删除所有 JavaScript 类型字段。如果确实需要存储代码片段，存为 String 类型并在应用层沙箱中执行。' }
    ],
    exercises: [
      { level: '基础', task: '插入一段 JavaScript 函数代码并查看其类型', hint: 'function + $type', answer: 'db.code.insertOne({ fn: function(a,b) { return a + b; } })\ndb.code.find({ fn: { $type: "javascript" } })' },
      { level: '进阶', task: '为什么 MongoDB 弃用了服务端 JavaScript 执行？', hint: '安全、性能、替代方案', answer: '1) 安全风险：代码注入攻击。2) 性能问题：JavaScript 执行是单线程的，阻塞其他操作。3) 有了聚合管道（Aggregation Pipeline），大部分服务端计算需求可以用更安全、更高效的方式实现。' }
    ]
  },

  // Node 21: Collections
  "7SGYNo3oHlgm_1cwhWfw7": {
    mentalModel: 'Collection 是 MongoDB 的文档容器：像文件柜里的一个抽屉，存放同类文档。与 SQL 表不同，Collection 不要求文档有相同的字段结构。',
    handsOn: [
      { title: '隐式创建集合', cmd: 'db.products.insertOne({ name: "键盘" })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: '首次向集合插入文档时，MongoDB 自动创建集合。无需显式创建。' },
      { title: '显式创建集合', cmd: 'db.createCollection("logs", { capped: true, size: 10485760, max: 5000 })', output: '{ ok: 1 }', explain: '创建固定集合（capped collection）：最大 10MB，最多 5000 条。超出后自动删除最早的文档。' },
      { title: '查看所有集合', cmd: 'show collections', output: 'logs\nproducts\nusers', explain: 'show collections 列出当前数据库的所有集合。' },
      { title: '集合验证规则', cmd: 'db.createCollection("employees", {\n  validator: {\n    $jsonSchema: {\n      bsonType: "object",\n      required: ["name", "age"],\n      properties: {\n        name: { bsonType: "string" },\n        age: { bsonType: "int", minimum: 0 }\n      }\n    }\n  }\n})', output: '{ ok: 1 }', explain: '创建带 JSON Schema 验证的集合。不符合规则的文档将被拒绝插入。' },
      { title: '删除集合', cmd: 'db.logs.drop()', output: 'true', explain: 'drop() 删除集合及其所有索引。不可恢复！' },
      { title: '重命名集合', cmd: 'db.logs.renameCollection("audit_logs")', output: '{ ok: 1 }', explain: 'renameCollection 修改集合名称。不能跨数据库重命名。' }
    ],
    diagnosis: [
      { symptom: '插入文档时报 Document failed validation', cause: '集合设置了 Schema Validation 规则，文档不符合要求', fix: '用 db.getCollectionInfos() 查看验证规则，调整文档结构使其符合规则，或修改验证规则' },
      { symptom: 'capped collection 中最早的数据丢失了', cause: '固定集合达到了 size 或 max 限制，自动删除最早文档', fix: '这是 capped collection 的预期行为。如果需要保留所有数据，改用普通集合并自行实现数据清理策略' }
    ],
    exercises: [
      { level: '基础', task: '创建一个带验证规则的 users 集合（name 必填，age 必须是整数）', hint: 'createCollection + validator', answer: 'db.createCollection("users", {\n  validator: {\n    $jsonSchema: {\n      bsonType: "object",\n      required: ["name"],\n      properties: {\n        name: { bsonType: "string" },\n        age: { bsonType: "int" }\n      }\n    }\n  }\n})' },
      { level: '进阶', task: 'capped collection 适合什么场景？有什么限制？', hint: '日志、消息队列', answer: '适合：日志收集（保留最近 N 条）、消息队列（FIFO）、审计跟踪。限制：不能删除单条文档、不能更新导致文档变大、只有自然顺序索引、不支持 TTL 索引。' }
    ]
  },

  // Node 22: updateOne/updateMany
  "liGbnGyQaG-Vqt6cuB91N": {
    mentalModel: 'updateOne/updateMany 是 MongoDB 的修改工具：像用橡皮擦和铅笔修改文档内容，updateOne 改一条，updateMany 改一批。关键是要用更新操作符（$set/$inc 等），而不是直接替换。',
    handsOn: [
      { title: 'updateOne 更新单条', cmd: 'db.products.updateOne({ name: "键盘" }, { $set: { price: 259 } })', output: '{ acknowledged: true, matchedCount: 1, modifiedCount: 1 }', explain: '匹配第一条 name: "键盘" 的文档，将 price 改为 259。matchedCount 和 modifiedCount 分别表示匹配数和实际修改数。' },
      { title: 'updateMany 批量更新', cmd: 'db.products.updateMany({ price: { $lt: 50 } }, { $set: { onSale: true } })', output: '{ acknowledged: true, matchedCount: 5, modifiedCount: 5 }', explain: '所有价格低于 50 的产品都添加 onSale: true 字段。' },
      { title: '常用更新操作符', cmd: 'db.products.updateOne({ name: "键盘" }, {\n  $inc: { stock: -1 },\n  $set: { updatedAt: new Date() },\n  $unset: { oldField: "" }\n})', output: '{ matchedCount: 1, modifiedCount: 1 }', explain: '$inc 数值增减，$set 设置字段，$unset 删除字段。可以组合多个操作符。' },
      { title: '数组更新操作', cmd: 'db.posts.updateOne({ title: "MongoDB入门" }, {\n  $push: { tags: "advanced" },\n  $pull: { tags: "beginner" },\n  $addToSet: { categories: "技术" }\n})', output: '{ matchedCount: 1, modifiedCount: 1 }', explain: '$push 追加元素，$pull 删除匹配元素，$addToSet 去重添加（已存在则不添加）。' },
      { title: 'upsert（不存在则插入）', cmd: 'db.products.updateOne({ name: "新键盘" }, { $set: { price: 199, category: "外设" } }, { upsert: true })', output: '{ matchedCount: 0, modifiedCount: 0, upsertedId: ObjectId("...") }', explain: 'upsert: true 时，如果没有匹配的文档，就用查询条件+更新内容创建一条新文档。' },
      { title: '替换整个文档（危险）', cmd: 'db.products.updateOne({ name: "键盘" }, { name: "机械键盘", price: 399 })', output: 'Warning: update without update operators', explain: '不用 $set 等操作符会替换整个文档（只保留 _id），其他字段全部丢失！' }
    ],
    diagnosis: [
      { symptom: '更新后文档只剩下 _id 和新字段，其他字段全没了', cause: '没有使用更新操作符（$set），直接传了替换文档', fix: '始终使用更新操作符：$set: { field: value } 而不是直接 { field: value }' },
      { symptom: 'updateMany 匹配了 0 条，但数据确实存在', cause: '查询条件类型不匹配（如数字字段存的是字符串）', fix: '先用 find() 检查实际数据结构，确认字段类型后再构造查询条件' }
    ],
    exercises: [
      { level: '基础', task: '更新产品的库存（减 1）并标记更新时间', hint: '$inc + $set', answer: 'db.products.updateOne({ name: "键盘" }, { $inc: { stock: -1 }, $set: { updatedAt: new Date() } })' },
      { level: '进阶', task: '实现 upsert：如果用户不存在就创建，存在就更新最后登录时间', hint: 'upsert: true', answer: 'db.users.updateOne(\n  { username: "xiaoming" },\n  { $set: { lastLogin: new Date() }, $setOnInsert: { createdAt: new Date(), score: 0 } },\n  { upsert: true }\n)' },
      { level: '挑战', task: '更新数组中满足条件的第一个元素', hint: '位置操作符 $', answer: 'db.orders.updateOne(\n  { "items.name": "键盘" },\n  { $set: { "items.$.qty": 5 } }\n)\n// $ 是位置操作符，指向查询匹配到的第一个数组元素' }
    ]
  },

  // Node 23: Int64/Long
  "iJFDFdIN_N4-DlJwrFIiB": {
    mentalModel: 'Int64（Long）是 MongoDB 的 64 位整数类型：像一把超长标尺，能表示从 -2^63 到 2^63-1 的大整数，适合时间戳、雪花 ID 等超大数字。',
    handsOn: [
      { title: '插入 Int64 值', cmd: 'db.counters.insertOne({ name: "views", count: Long("9007199254740993") })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'mongosh 中用 Long() 构造 Int64 值。超过 JS Number.MAX_SAFE_INTEGER 的整数必须用 Long。' },
      { title: '查看 Int64 类型', cmd: 'db.counters.find({ count: { $type: "long" } })', output: '[ { name: "views", count: Long("9007199254740993") } ]', explain: '$type: "long" 或 $type: 18 匹配 Int64 字段。' },
      { title: 'Int64 运算', cmd: 'db.counters.updateOne({ name: "views" }, { $inc: { count: Long("1") } })', output: '{ matchedCount: 1, modifiedCount: 1 }', explain: '$inc 操作支持 Int64 类型的递增。' },
      { title: 'JavaScript 精度丢失对比', cmd: 'let jsNum = 9007199254740993\nprint(jsNum)', output: '9007199254740992', explain: 'JavaScript 的 Number 类型（IEEE 754 双精度）在 2^53 之后无法精确表示整数。9007199254740993 被截断为 9007199254740992。' }
    ],
    diagnosis: [
      { symptom: '大整数 ID（如雪花 ID）存入后查询结果不对', cause: 'JavaScript 的 Number 精度限制，超过 2^53 的整数被截断', fix: '在 mongosh 中使用 Long() 或 NumberLong() 构造大整数。在应用驱动中使用原生的 64 位整数类型。' },
      { symptom: 'Long 和 Number 混合查询结果不一致', cause: 'BSON 中 Int32、Int64、Double 是不同类型，$type 不匹配', fix: '统一字段类型。查询时用 $type: ["int", "long", "double"] 匹配所有数字类型。' }
    ],
    exercises: [
      { level: '基础', task: '插入一条 Int64 类型的大整数并验证', hint: 'Long() 函数', answer: 'db.test.insertOne({ bigId: Long("9223372036854775807") })\ndb.test.find({ bigId: { $type: "long" } })' },
      { level: '进阶', task: 'JavaScript 中 Number.MAX_SAFE_INTEGER 是多少？为什么超过它的整数需要 Int64？', hint: '2^53 - 1', answer: 'Number.MAX_SAFE_INTEGER = 9007199254740991 (2^53 - 1)。超过这个值，JavaScript 的 IEEE 754 双精度浮点无法区分相邻整数（如 9007199254740992 和 9007199254740993 变成同一个值）。MongoDB 的 Int64 用 8 字节精确存储，范围到 2^63-1。' }
    ]
  },

  // Node 24: Int32
  "xKFZSKG2GPD-phY2HLMsx": {
    mentalModel: 'Int32 是 MongoDB 的 32 位整数类型：像一把短标尺，能表示 -2^31 到 2^31-1（约 ±21 亿），适合计数器、年龄、评分等小整数。',
    handsOn: [
      { title: '插入 Int32 值', cmd: 'db.users.insertOne({ name: "小明", age: NumberInt("25") })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'mongosh 中用 NumberInt() 显式构造 Int32 值（BSON type 16）。' },
      { title: '默认整数行为', cmd: 'db.users.insertOne({ name: "小红", age: 30 })\ndb.users.find({ name: "小红" }).map(d => typeof d.age)', output: '[ "number" ]', explain: 'mongosh 默认将整数存为 Double（除非超过 2^53 才转 Int64）。要存 Int32 必须用 NumberInt()。' },
      { title: '查询 Int32 类型', cmd: 'db.users.find({ age: { $type: "int" } })', output: '[ { name: "小明", age: 25 } ]', explain: '$type: "int" 或 $type: 16 匹配 Int32 字段。注意：默认插入的 30 是 Double，不会被匹配。' },
      { title: 'Int32 范围测试', cmd: 'db.test.insertOne({ max: NumberInt("2147483647") })\ndb.test.insertOne({ overflow: NumberInt("2147483648") })', output: 'Error: ... number too large for Int32', explain: 'Int32 最大值 2^31-1 = 2147483647。超过会报错，需要用 Long() 或默认 Double。' },
      { title: '$inc 与 Int32', cmd: 'db.users.updateOne({ name: "小明" }, { $inc: { age: NumberInt("1") } })', output: '{ matchedCount: 1, modifiedCount: 1 }', explain: '$inc 保持原有类型。Int32 + Int32 结果仍为 Int32（不溢出时）。' }
    ],
    diagnosis: [
      { symptom: '查询 { age: { $type: "int" } } 找不到 age: 30 的文档', cause: 'mongosh 默认把 30 存为 Double 而不是 Int32', fix: '写入时使用 NumberInt(30) 显式指定 Int32 类型。或者查询时匹配多种数字类型：$type: ["int", "double", "long"]' },
      { symptom: '计数器溢出变成负数', cause: 'Int32 最大值 2147483647，$inc 超过后溢出', fix: '使用 Int64（Long）作为计数器类型，范围到 2^63-1' }
    ],
    exercises: [
      { level: '基础', task: '插入一个 Int32 类型的 score 字段并验证类型', hint: 'NumberInt()', answer: 'db.scores.insertOne({ player: "A", score: NumberInt(100) })\ndb.scores.find({ score: { $type: "int" } })' },
      { level: '进阶', task: '解释 mongosh 中 NumberInt(5)、5、Long(5) 的存储差异', hint: 'BSON 类型不同', answer: 'NumberInt(5): 存为 BSON Int32（type 16，4 字节）。5: mongosh 默认存为 BSON Double（type 1，8 字节）。Long(5): 存为 BSON Int64（type 18，8 字节）。三者在 MongoDB 中是不同的 BSON 类型，$type 查询可以区分。' }
    ]
  },

  // Node 25: deleteOne/deleteMany
  "qjoLxSkfKbzG1sZUXnyw9": {
    mentalModel: 'deleteOne/deleteMany 是 MongoDB 的删除工具：像碎纸机，deleteOne 销毁一条文档，deleteMany 批量销毁。一旦删除无法恢复，务必谨慎。',
    handsOn: [
      { title: 'deleteOne 删除单条', cmd: 'db.products.deleteOne({ name: "键盘" })', output: '{ acknowledged: true, deletedCount: 1 }', explain: '删除第一条匹配 name: "键盘" 的文档。deletedCount 表示实际删除的数量。' },
      { title: 'deleteMany 批量删除', cmd: 'db.products.deleteMany({ price: { $lt: 10 } })', output: '{ acknowledged: true, deletedCount: 23 }', explain: '删除所有价格低于 10 的产品。' },
      { title: '删除所有文档（清空集合）', cmd: 'db.products.deleteMany({})', output: '{ acknowledged: true, deletedCount: 150 }', explain: '空过滤器 {} 匹配所有文档。效果类似 drop()，但保留集合结构和索引。' },
      { title: '先查后删（安全删除）', cmd: 'let toDelete = db.products.find({ discontinued: true }, { _id: 1 }).toArray()\nprint("将删除", toDelete.length, "条")\ndb.products.deleteMany({ _id: { $in: toDelete.map(d => d._id) } })', output: '将删除 5 条\n{ deletedCount: 5 }', explain: '先查询确认要删除的文档，再执行删除。避免误删。' },
      { title: '删除 vs drop', cmd: 'db.products.deleteMany({})  // 删除文档，保留集合和索引\ndb.products.drop()  // 删除集合和所有索引', output: 'deleteMany: { deletedCount: N }\ndrop: true', explain: 'deleteMany({}) 只删文档，集合和索引还在。drop() 连集合一起删，不可恢复。' }
    ],
    diagnosis: [
      { symptom: '误删了重要数据', cause: 'deleteMany 的查询条件写错或忘记加条件', fix: 'MongoDB 没有回收站。预防方法：1) 定期备份（mongodump 或 Atlas 自动备份）。2) 先 find 确认再 delete。3) 软删除（添加 deleted: true 字段而非物理删除）。' },
      { symptom: 'deleteMany 删除了 0 条，但数据看起来存在', cause: '查询条件类型不匹配或字段拼写错误', fix: '先用 find(相同条件) 确认是否有匹配。检查字段名拼写（区分大小写）和数据类型。' }
    ],
    exercises: [
      { level: '基础', task: '删除所有价格低于 20 的产品', hint: 'deleteMany + 比较操作符', answer: 'db.products.deleteMany({ price: { $lt: 20 } })' },
      { level: '进阶', task: '实现"软删除"：不物理删除文档，而是标记为已删除', hint: 'updateMany + $set', answer: 'db.products.updateMany({ discontinued: true }, { $set: { deleted: true, deletedAt: new Date() } })\n// 查询时排除已删除：db.products.find({ deleted: { $ne: true } })' },
      { level: '挑战', task: '删除每个分类中价格最低的产品', hint: '聚合 + 删除', answer: '// 先聚合找出每个分类的最低价\nlet mins = db.products.aggregate([\n  { $group: { _id: "$category", minPrice: { $min: "$price" }, minId: { $first: "$_id" } } }\n]).toArray()\n// 再逐个删除\nmins.forEach(m => db.products.deleteOne({ _id: m.minId }))' }
    ]
  },

  // Node 26: Decimal128
  "OGtR5D_DUCSci1lFBT83z": {
    mentalModel: 'Decimal128 是 MongoDB 的精确小数类型：像银行的计算器，能精确表示小数，不会出现 0.1 + 0.2 = 0.30000000000000004 的浮点精度问题。',
    handsOn: [
      { title: '插入 Decimal128 值', cmd: 'db.prices.insertOne({ product: "咖啡", amount: Decimal128("19.99") })', output: '{ acknowledged: true, insertedId: ObjectId("...") }', explain: 'mongosh 中用 Decimal128("字符串") 构造精确小数值。必须用字符串参数，否则会被 JS 先截断。' },
      { title: '查看 Decimal128 类型', cmd: 'db.prices.find({ amount: { $type: "decimal" } })', output: '[ { product: "咖啡", amount: Decimal128("19.99") } ]', explain: '$type: "decimal" 或 $type: 19 匹配 Decimal128 字段。' },
      { title: '精度对比：Double vs Decimal128', cmd: 'db.prices.insertOne({ product: "A", doubleVal: 0.1 + 0.2, decVal: Decimal128("0.1") })\ndb.prices.find({ product: "A" })', output: '[ { doubleVal: 0.30000000000000004, decVal: Decimal128("0.1") } ]', explain: 'Double 的 0.1+0.2 不精确。Decimal128 支持 34 位有效数字的精确表示。' },
      { title: 'Decimal128 运算', cmd: 'db.prices.updateOne({ product: "咖啡" }, { $mul: { amount: Decimal128("1.1") } })', output: '{ matchedCount: 1, modifiedCount: 1 }', explain: '$mul 乘以 1.1（涨价 10%）。Decimal128 运算保持精度。' },
      { title: '查询 Decimal128 值', cmd: 'db.prices.find({ amount: Decimal128("21.989") })', output: '[ { product: "咖啡", amount: Decimal128("21.989") } ]', explain: '查询时必须也用 Decimal128() 构造，不能直接用数字字面量。' }
    ],
    diagnosis: [
      { symptom: '金额计算累积误差越来越大', cause: '使用了 Double 类型存储金额，浮点精度问题在累加中放大', fix: '金额必须用 Decimal128 存储。迁移方案：db.collection.updateMany({}, [{ $set: { amount: { $toDecimal: "$amount" } } }])' },
      { symptom: 'Decimal128("0.1") 结果不对', cause: 'Decimal128 构造函数接收的是 JavaScript 数字而非字符串，精度在 JS 层已丢失', fix: '始终用字符串参数：Decimal128("0.1") 而不是 Decimal128(0.1)' }
    ],
    exercises: [
      { level: '基础', task: '插入一个 Decimal128 类型的价格字段', hint: 'Decimal128("字符串")', answer: 'db.items.insertOne({ name: "书", price: Decimal128("68.50") })' },
      { level: '进阶', task: '将现有集合中的 Double 价格字段迁移为 Decimal128', hint: '聚合管道更新 + $toDecimal', answer: 'db.products.updateMany({}, [{ $set: { price: { $toDecimal: "$price" } } }])\n// 注意方括号 []，表示使用聚合管道更新' },
      { level: '挑战', task: 'Decimal128 最多能表示多少位有效数字？范围是什么？', hint: 'IEEE 754-2008 decimal128', answer: 'Decimal128 支持 34 位有效数字，范围从 -9999999999999999999999999999999999 × 10^6145 到 +9999999999999999999999999999999999 × 10^6145。精度远超任何实际金融计算需求。' }
    ]
  },

  // Node 27: bulkWrite
  "yc2HqhjhIV6UU_2P-ykKB": {
    mentalModel: 'bulkWrite 是 MongoDB 的批量操作引擎：像一次性寄出一个包裹而不是 100 个快递，把多种写操作（插入、更新、删除）打包成一个网络请求发送给服务器。',
    handsOn: [
      { title: '基本 bulkWrite', cmd: 'db.products.bulkWrite([\n  { insertOne: { document: { name: "显示器", price: 1999 } } },\n  { insertOne: { document: { name: "耳机", price: 299 } } },\n  { updateOne: { filter: { name: "键盘" }, update: { $set: { price: 249 } } } },\n  { deleteOne: { filter: { name: "旧鼠标" } } }\n])', output: '{ acknowledged: true, insertedCount: 2, matchedCount: 1, modifiedCount: 1, deletedCount: 1 }', explain: '一次 bulkWrite 包含插入、更新、删除。减少网络往返次数。' },
      { title: 'ordered vs unordered', cmd: 'db.products.bulkWrite([\n  { insertOne: { document: { _id: 1, name: "A" } } },\n  { insertOne: { document: { _id: 1, name: "B" } } },\n  { insertOne: { document: { _id: 3, name: "C" } } }\n], { ordered: false })', output: 'MongoBulkWriteError: insertedCount: 2', explain: 'ordered: false 跳过错误继续执行。默认 ordered: true 在第一个错误处停止。' },
      { title: '批量 upsert', cmd: 'db.inventory.bulkWrite([\n  { updateOne: { filter: { sku: "ABC" }, update: { $inc: { qty: 10 } }, upsert: true } },\n  { updateOne: { filter: { sku: "DEF" }, update: { $inc: { qty: 5 } }, upsert: true } }\n])', output: '{ upsertedCount: 2 }', explain: '每个 updateOne 操作都可以单独设置 upsert: true。' },
      { title: 'replaceOne 操作', cmd: 'db.products.bulkWrite([\n  { replaceOne: { filter: { name: "键盘" }, replacement: { name: "机械键盘", price: 399, category: "外设" } } }\n])', output: '{ matchedCount: 1, modifiedCount: 1 }', explain: 'replaceOne 替换整个文档（保留 _id）。注意 replacement 不能包含更新操作符。' },
      { title: '性能对比', cmd: '// 逐条插入 1000 条\nconsole.time("individual")\nfor (let i = 0; i < 1000; i++) db.test.insertOne({ n: i })\nconsole.timeEnd("individual")\n// bulkWrite 插入 1000 条\nlet ops = Array.from({length:1000}, (_,i) => ({insertOne:{document:{n:i+1000}}}))\nconsole.time("bulk")\ndb.test.bulkWrite(ops)\nconsole.timeEnd("bulk")', output: 'individual: ~10000ms\nbulk: ~200ms', explain: 'bulkWrite 将 1000 次网络往返合并为 1 次（分批），性能提升 50 倍以上。' }
    ],
    diagnosis: [
      { symptom: 'bulkWrite 报 MongoBulkWriteError，部分操作失败', cause: 'ordered 默认 true，某个操作（如 _id 重复）导致后续操作中止', fix: '使用 ordered: false 让非冲突操作继续执行。检查 error.writeErrors 了解具体哪些操作失败及原因。' },
      { symptom: 'bulkWrite 超过 16MB 限制报错', cause: '单次 bulkWrite 操作数量太多，命令文档超过 16MB', fix: 'MongoDB 驱动会自动将 bulkWrite 拆分为每批 100000 条（或 16MB）。手动拆分：每批不超过 100000 个操作。' }
    ],
    exercises: [
      { level: '基础', task: '用 bulkWrite 同时插入 2 条、更新 1 条、删除 1 条', hint: '混合操作数组', answer: 'db.products.bulkWrite([\n  { insertOne: { document: { name: "X", price: 10 } } },\n  { insertOne: { document: { name: "Y", price: 20 } } },\n  { updateOne: { filter: { name: "键盘" }, update: { $set: { stock: 100 } } } },\n  { deleteOne: { filter: { name: "旧产品" } } }\n])' },
      { level: '进阶', task: '什么时候用 bulkWrite 而不是多次单独操作？性能差异的根源是什么？', hint: '网络延迟 vs 批处理', answer: '当需要在一个逻辑操作中执行多种写入（如：创建订单 + 扣减库存 + 记录日志）时使用 bulkWrite。性能根源：1) 网络往返减少（N 次请求变 1 次）。2) 服务器批处理效率更高。3) 减少锁竞争。典型场景：数据导入、批量迁移、复合业务操作。' },
      { level: '挑战', task: '用 bulkWrite 实现"先删后插"（清空并重建）某个用户的所有标签', hint: 'deleteMany + insertOne 组合', answer: 'db.userTags.bulkWrite([\n  { deleteMany: { filter: { userId: "u001" } } },\n  { insertOne: { document: { userId: "u001", tag: "技术" } } },\n  { insertOne: { document: { userId: "u001", tag: "阅读" } } },\n  { insertOne: { document: { userId: "u001", tag: "音乐" } } }\n], { ordered: true })\n// ordered: true 确保先删除再插入' }
    ]
  },

// MongoDB Deep Learning Content — Batch 2 (27 nodes)
// Written as TS object entries, no import/export

  'jQSMLd6gG158tJDzo1k_1': {
    // Min Key
    mentalModel: 'Min Key 是 MongoDB 排序宇宙中的"绝对零度"——它比任何已存在的 BSON 值都小，是排序边界的理论下限，类似于数学中的负无穷。',
    sections: [
      {
        title: 'Min Key 的本质与用途',
        content: 'Min Key 不是你能插入到文档中的值，而是一个内部比较标记。MongoDB 在 B-Tree 索引中用它标记"比所有值都小"的边界位置。\n\nBSON 类型排序顺序（从小到大）：\n1. MinKey（内部标记）\n2. Null\n3. Numbers（int, long, double, decimal）\n4. String\n5. Object\n6. Array\n7. BinData\n8. ObjectId\n9. Boolean\n10. Date / Timestamp\n11. Regular Expression\n12. MaxKey（内部标记）\n\nMinKey 和 MaxKey 主要用在复合索引的边界定义中，帮助 MongoDB 确定索引扫描的起止范围。'
      },
      {
        title: 'Min Key 在索引范围中的作用',
        content: '当你在复合索引 (a, b) 上执行查询 { a: 5 }，MongoDB 的索引扫描范围实际上是：\n  下界: [5, MinKey]  —— a=5 且 b 为最小可能值\n  上界: [5, MaxKey]  —— a=5 且 b 为最大可能值\n\n这意味着即使你没有指定 b 的值，MongoDB 也能精确地定位到 a=5 的所有索引条目，因为 MinKey 和 MaxKey 框定了 b 的全部可能范围。\n\n你可以通过 explain() 看到这些边界值出现在 indexBounds 中。'
      },
      {
        title: 'Min Key 与 null 的区别',
        content: '很多开发者混淆 MinKey 和 null。关键区别：\n\n- null 是一个实际的 BSON 值，可以存储在文档中\n- MinKey 是一个内部排序标记，不出现在文档数据中\n- 在排序顺序中：MinKey < null < 任何数字\n\n当查询 { field: null } 时，MongoDB 会匹配：\n  1. field 值为 null 的文档\n  2. field 不存在的文档（missing field）\n\n但这两种情况在索引中都排在 MinKey 之后、任何数字之前。'
      }
    ],
    diagnosis: [
      {
        symptom: 'explain() 输出中看到 MinKey 出现在 indexBounds 里，以为是数据异常',
        cause: 'MinKey 是 MongoDB 索引扫描的正常边界标记，表示"从最小可能值开始扫描"。它不是你的数据，而是引擎内部的占位符。',
        fix: '无需修复。理解 indexBounds 中的 MinKey/MaxKey 是正常现象，说明引擎正在用索引的完整范围或某个前缀范围进行扫描。'
      },
      {
        symptom: '试图在插入文档时使用 MinKey 作为字段值导致报错',
        cause: 'MinKey 是内部 BSON 类型，mongosh 和大多数驱动不允许你直接将 MinKey 实例插入文档。它只用于索引边界和内部比较。',
        fix: '如果你需要一个"最小值"占位，使用 null、空字符串或 Number.MIN_SAFE_INTEGER 等实际值。MinKey 不应出现在应用数据中。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 products 集合上创建复合索引 { category: 1, price: 1 }，然后用 explain() 查看查询 { category: "electronics" } 的 indexBounds，找到 MinKey 出现的位置。',
        hint: '使用 db.products.createIndex({ category: 1, price: 1 }) 和 db.products.find({ category: "electronics" }).explain("executionStats")',
        answer: 'db.products.createIndex({ category: 1, price: 1 });\ndb.products.find({ category: "electronics" }).explain("executionStats");\n// 在 indexBounds 中你会看到：\n// category: ["electronics", "electronics"]\n// price: [MinKey, MaxKey]\n// 这说明 MongoDB 扫描了 category=electronics 下 price 从最小到最大的全部条目。'
      },
      {
        level: '进阶',
        task: '设计一个实验来验证 BSON 排序顺序：插入包含不同类型值的文档（null, 数字, 字符串, 布尔, 日期），用排序查询验证它们的实际顺序是否符合 MinKey < null < numbers < strings < objects < arrays 的规律。',
        hint: '插入 { v: null }, { v: 1 }, { v: "a" }, { v: true }, { v: new Date() } 等文档，然后用 .sort({ v: 1 }) 查询。',
        answer: 'db.sortTest.drop();\ndb.sortTest.insertMany([\n  { v: null, label: "null" },\n  { v: 1, label: "number" },\n  { v: "a", label: "string" },\n  { v: true, label: "boolean" },\n  { v: new Date(), label: "date" },\n  { v: [], label: "array" },\n  { v: {}, label: "object" }\n]);\ndb.sortTest.find({}, { _id: 0, label: 1 }).sort({ v: 1 });\n// 输出顺序: null → number → string → object → array → boolean → date\n// 注意：这个顺序是 BSON 规范定义的，不同于直觉。'
      }
    ]
  },

  'QF7SL237FyBQdqvKUzop6': {
    // Max Key
    mentalModel: 'Max Key 是 BSON 排序光谱的"绝对天花板"——它比任何已知类型的值都大，与 MinKey 配对，共同定义索引扫描的完整边界。',
    sections: [
      {
        title: 'Max Key 在查询计划中的角色',
        content: 'Max Key 与 MinKey 成对出现，标记索引扫描的上边界。在 explain() 输出中，你经常看到：\n\n  indexBounds: {\n    field1: ["value", "value"],\n    field2: [MinKey, MaxKey]\n  }\n\n这表示 field1 精确匹配 "value"，field2 扫描全部范围。\n\nMaxKey 在 BSON 排序中位于最顶端，比 RegularExpression、Date、Timestamp 都大。它是排序秩序的终极上界。'
      },
      {
        title: 'Max Key 与 $max 查询修饰符的关系',
        content: '$max 查询操作符允许你手动指定索引扫描的上界。当不指定 $max 时，MongoDB 默认使用 MaxKey 作为上界。\n\n// 默认行为（隐式 MaxKey）\ndb.orders.find({ status: "pending" })\n// 索引扫描上界: [status="pending", MaxKey]\n\n// 显式指定上界\ndb.orders.find({ status: "pending" }).max({ status: "pending", total: 500 })\n// 索引扫描上界: [status="pending", total=500]\n\n$max 和 MinKey/$min 让你能手动控制索引扫描窗口，但通常 MongoDB 的查询优化器会自动做出最佳选择。'
      },
      {
        title: '复合索引中 MaxKey 的边界计算',
        content: '对于复合索引 { a: 1, b: 1, c: 1 }，不同查询模式的边界：\n\n查询 { a: 1 }\n  下界: [1, MinKey, MinKey]\n  上界: [1, MaxKey, MaxKey]\n\n查询 { a: 1, b: { $gt: 5 } }\n  下界: [1, 5, MinKey]\n  上界: [1, MaxKey, MaxKey]\n\n查询 { a: 1, b: 5, c: { $lt: 10 } }\n  下界: [1, 5, MinKey]\n  上界: [1, 5, 10]\n\n规律：一旦遇到范围查询（$gt, $lt 等），后续字段用 MinKey/MaxKey 框定全范围，但不能再利用索引的精确排序。'
      }
    ],
    diagnosis: [
      {
        symptom: 'explain() 显示 indexBounds 中某字段范围是 [MinKey, MaxKey]，但查询很慢',
        cause: '该字段的 [MinKey, MaxKey] 范围意味着它在做全范围扫描。如果这个范围覆盖了大量索引条目，即使走了索引也可能扫描数百万条记录。',
        fix: '检查是否可以通过更精确的查询条件缩小范围。如果该字段的选择性很低，考虑重建复合索引调整字段顺序，把高选择性字段放在前面。'
      },
      {
        symptom: '使用 hint() 强制指定索引后，explain() 中 MaxKey 边界的范围比预期大很多',
        cause: 'hint() 绕过了查询优化器，可能选择了一个不太适合该查询模式的索引，导致扫描范围扩大。',
        fix: '去掉 hint()，让 MongoDB 的查询优化器自动选择最优索引。如果必须使用 hint()，确保指定的索引与查询条件的匹配度最高。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 orders 集合上创建索引 { status: 1, amount: 1 }，分别用 explain() 查看 { status: "shipped" } 和 { status: "shipped", amount: { $gt: 100 } } 的 indexBounds，对比 MaxKey 出现的位置差异。',
        hint: '先 createIndex，然后分别 explain 两个查询，关注 indexBounds 中 amount 字段的上下界。',
        answer: 'db.orders.createIndex({ status: 1, amount: 1 });\n\n// 查询1: amount 范围是 [MinKey, MaxKey]——扫描该 status 下所有 amount\ndb.orders.find({ status: "shipped" }).explain().queryPlanner.winningPlan.indexBounds;\n// { status: ["shipped", "shipped"], amount: [MinKey, MaxKey] }\n\n// 查询2: amount 下界是 100，上界是 MaxKey\ndb.orders.find({ status: "shipped", amount: { $gt: 100 } }).explain().queryPlanner.winningPlan.indexBounds;\n// { status: ["shipped", "shipped"], amount: [100.0, MaxKey] }'
      },
      {
        level: '挑战',
        task: '设计一个场景说明为什么在复合索引 { a: 1, b: 1 } 上，查询 { a: { $gt: 5 }, b: 10 } 无法高效利用 b 字段的索引排序，用 explain() 验证你的分析。',
        hint: '关注 indexBounds 中 b 字段的范围是否是精确匹配还是 [MinKey, MaxKey]，以及 totalDocsExamined 的值。',
        answer: '// 复合索引 { a: 1, b: 1 } 的 B-Tree 按 a 排序，a 相同时按 b 排序。\n// 当 a 是范围查询 ($gt: 5) 时，a 的值不固定，b 的排序在每个 a 值内部是有序的，\n// 但跨不同 a 值时 b 是无序的。因此 MongoDB 只能对 b 做过滤，不能利用索引排序。\n\ndb.test.createIndex({ a: 1, b: 1 });\n// 插入测试数据...\nfor (let i = 0; i < 1000; i++) db.test.insertOne({ a: i % 20, b: i % 50 });\n\ndb.test.find({ a: { $gt: 5 }, b: 10 }).explain("executionStats");\n// indexBounds 中 b 会是 [10.0, 10.0]（精确过滤），\n// 但 totalDocsExamined 远大于实际返回数，因为 a 的范围扫描跨了多个 b 排序段。\n// 对比：如果查询是 { a: 5, b: 10 }（等值），totalDocsExamined 会小得多。'
      }
    ]
  },

  '4h8NdcdXmNqJxLkVJqPtX': {
    // validate() 集合验证
    mentalModel: 'validate() 就像给集合做一次"体检"——它扫描集合的数据文件和索引，检查文档结构完整性、索引一致性和存储空间统计，类似于磁盘工具中的 fsck/chkdsk。',
    handsOn: [
      {
        title: '基础 validate 检查',
        cmd: 'db.products.validate()',
        output: '{\n  ns: "shop.products",\n  uuid: UUID("abc123..."),\n  valid: true,\n  repaired: false,\n  errors: [],\n  warnings: [],\n  nrecords: 15000,\n  nIndexes: 3,\n  keysPerIndex: { _id_: 15000, category_1: 15000, price_1: 15000 },\n  indexDetails: { _id_: { valid: true }, category_1: { valid: true } },\n  storageSize: 4096000,\n  ...',
        explain: 'validate() 返回 valid: true 表示集合数据文件和索引一致。nrecords 是文档数，nIndexes 是索引数，keysPerIndex 显示每个索引的键数量。'
      },
      {
        title: '完整验证模式（包含所有文档检查）',
        cmd: 'db.products.validate({ full: true })',
        output: '{\n  ns: "shop.products",\n  valid: true,\n  full: true,\n  nrecords: 15000,\n  nInvalidDocuments: 0,\n  invalidDocuments: [],\n  corruptRecords: [],\n  ...',
        explain: 'full: true 会逐文档检查 BSON 结构的完整性，包括字段名合法性、嵌套深度、BSON 大小限制等。它比默认模式更慢但更彻底，适合排查数据损坏问题。'
      },
      {
        title: 'metadata 模式（只检查索引一致性）',
        cmd: 'db.products.validate({ metadata: true })',
        output: '{\n  ns: "shop.products",\n  valid: true,\n  metadataOnly: true,\n  nIndexes: 3,\n  indexDetails: {\n    _id_: { valid: true, keyCount: 15000 },\n    category_1: { valid: true, keyCount: 15000 }\n  },\n  ...',
        explain: 'metadata: true 只验证索引元数据而不扫描文档内容，速度最快。适用于常规巡检：如果索引键数与文档数一致且 valid 为 true，通常集合是健康的。'
      }
    ],
    diagnosis: [
      {
        symptom: 'validate() 返回 valid: false 并报告 "index key count mismatch"',
        cause: '索引中的键数量与集合文档数不一致。通常由于非正常关机、写入中断或存储层损坏导致索引与数据不同步。',
        fix: '使用 db.collection.reIndex() 重建所有索引，或针对特定索引用 db.collection.dropIndex() + db.collection.createIndex() 重建。在副本集中，也可以从健康的 secondary 重新同步数据。'
      },
      {
        symptom: 'validate({ full: true }) 报告 "corrupt BSON" 或 "invalid document"',
        cause: '集合中存在 BSON 结构损坏的文档。可能原因是磁盘故障、非正常关机、或驱动程序写入了不合法的 BSON 数据。',
        fix: '从最近的备份恢复受影响的文档。如果是副本集成员，可以 resync 该节点。修复后建议运行 validate({ full: true }) 确认问题已解决。同时检查磁盘健康状态（SMART 数据）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '对 users 集合执行三种模式的 validate（默认、full、metadata），对比返回结果中的信息差异，特别关注 valid 字段和各种计数。',
        hint: '分别调用 db.users.validate()、db.users.validate({ full: true })、db.users.validate({ metadata: true })',
        answer: '// 默认模式：检查基本结构和索引\ndb.users.validate();\n// 返回 valid, nrecords, nIndexes, storageSize\n\n// full 模式：逐文档深度检查\ndb.users.validate({ full: true });\n// 额外返回 nInvalidDocuments, invalidDocuments[], corruptRecords[]\n\n// metadata 模式：只检查索引元数据\ndb.users.validate({ metadata: true });\n// 返回 indexDetails 但不扫描文档内容\n\n// 性能: metadata < 默认 < full（速度从快到慢）'
      },
      {
        level: '进阶',
        task: '编写一个集合健康巡检脚本，遍历当前数据库所有集合执行 validate()，输出任何 valid 为 false 的集合名称和错误详情。',
        hint: '用 db.getCollectionNames() 获取集合列表，循环执行 validate()，检查返回结果的 valid 字段。',
        answer: 'const collections = db.getCollectionNames();\nconst issues = [];\nfor (const name of collections) {\n  const result = db.getCollection(name).validate();\n  if (!result.valid) {\n    issues.push({\n      collection: name,\n      errors: result.errors,\n      warnings: result.warnings\n    });\n  }\n}\nif (issues.length === 0) {\n  print("All collections are healthy.");\n} else {\n  print("Issues found:");\n  printjson(issues);\n}'
      }
    ]
  },

  'B8SFhoVV8ei1Yz6vl57l_': {
    // 查询操作符概览
    mentalModel: '查询操作符是 MongoDB 的"搜索词汇表"——就像 SQL 的 WHERE 子句用 =, >, LIKE, IN 等关键字组合条件，MongoDB 用 $eq, $gt, $regex, $in 等操作符构建任意复杂的查询表达式。',
    sections: [
      {
        title: '操作符分类全景',
        content: 'MongoDB 查询操作符按功能分为六大类：\n\n1. 比较操作符：$eq, $ne, $gt, $gte, $lt, $lte, $in, $nin\n2. 逻辑操作符：$and, $or, $not, $nor\n3. 元素操作符：$exists, $type\n4. 求值操作符：$regex, $expr, $mod, $text, $where, $jsonSchema\n5. 数组操作符：$all, $elemMatch, $size\n6. 位操作符：$bitsAllClear, $bitsAllSet, $bitsAnyClear, $bitsAnySet\n\n它们的基本语法统一为：{ field: { $operator: value } }\n这种统一的表达形式让操作符可以自由组合。'
      },
      {
        title: '操作符组合与隐式 $and',
        content: 'MongoDB 的查询对象中，同一字段的多个条件会自动用 AND 组合：\n\n// 这两种写法等价\ndb.users.find({ age: { $gt: 18, $lt: 65 } })\ndb.users.find({ $and: [{ age: { $gt: 18 } }, { age: { $lt: 65 } }] })\n\n但如果你需要对同一字段使用相同操作符两次（比如两个 $in），就必须用显式 $and：\ndb.users.find({\n  $and: [\n    { tags: { $in: ["admin"] } },\n    { tags: { $in: ["active"] } }\n  ]\n})\n\n理解这个隐式合并规则是写出正确查询的基础。'
      },
      {
        title: '操作符与索引的关系',
        content: '并非所有操作符都能高效利用索引：\n\n✅ 能利用索引：$eq, $gt, $gte, $lt, $lte, $in, $ne（部分）, $regex（前缀匹配时）\n⚠️ 需要全表扫描：$where, $mod, $bitsAllSet 等\n❌ 通常需要全集合扫描：$ne, $nin（选择性低时）\n\n$regex 只有"前缀锚定"形式（如 /^pattern/）才能使用索引。包含通配符（如 /.*pattern/）则不能。\n\n$text 操作符需要 text 索引，$near/$geoWithin 需要地理空间索引。\n\n选择操作符时要同时考虑表达能力和索引友好性。'
      }
    ],
    diagnosis: [
      {
        symptom: '查询 { field: { $gt: 5, $lt: 10, $ne: 7 } } 返回结果中没有排除 7',
        cause: '这个查询语法上是正确的，$ne 会生效。但如果 field 是数组类型，$ne 的语义是"数组中没有任何元素等于 7"，而不是"数组本身不等于 7"。这可能不是你期望的行为。',
        fix: '如果 field 是标量字段，检查数据类型是否一致（整数 7 vs 浮点 7.0）。如果是数组字段且你想排除"包含 7 的数组"，当前写法是正确的。使用 $elemMatch 可以更精确地控制数组元素的匹配逻辑。'
      },
      {
        symptom: '使用 $where 操作符时查询极慢，甚至在大数据集上超时',
        cause: '$where 会在服务器端执行 JavaScript 代码，无法使用索引，必须逐文档执行 JS 函数。这是性能最差的操作符。',
        fix: '用原生查询操作符替代 $where。例如 $where: "this.a + this.b > 10" 可以改写为 $expr: { $gt: [{ $add: ["$a", "$b"] }, 10] }。$expr 使用聚合表达式引擎，比 $where 的 JS 执行快得多。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用查询操作符实现：查找 orders 集合中 status 为 "pending" 或 "processing"，且 total 在 100 到 500 之间（不含边界）的所有订单。',
        hint: '使用 $in 做状态匹配，$gt 和 $lt 做金额范围。',
        answer: 'db.orders.find({\n  status: { $in: ["pending", "processing"] },\n  total: { $gt: 100, $lt: 500 }\n})'
      },
      {
        level: '进阶',
        task: '不使用 $and，只用隐式合并语法实现：查找 age 在 25-40 之间（含边界）、role 不是 "guest"、且 email 字段存在的用户。',
        hint: '将 $gte/$lte 放在同一个 age 对象中，$ne 用于 role，$exists 用于 email。',
        answer: 'db.users.find({\n  age: { $gte: 25, $lte: 40 },\n  role: { $ne: "guest" },\n  email: { $exists: true }\n})\n// 三个条件在同一层级，MongoDB 隐式用 AND 连接。'
      },
      {
        level: '挑战',
        task: '用 $expr 和聚合操作符重写以下 $where 查询：查找 price * quantity > 1000 的订单项。对比两种写法的性能差异。',
        hint: '$expr 内使用 $multiply 和 $gt 聚合操作符。',
        answer: '// $where 版本（慢，逐文档执行 JS）\ndb.orderItems.find({ $where: "this.price * this.quantity > 1000" });\n\n// $expr 版本（快，使用原生表达式引擎）\ndb.orderItems.find({\n  $expr: {\n    $gt: [\n      { $multiply: ["$price", "$quantity"] },\n      1000\n    ]\n  }\n});\n\n// $expr 版本可以用索引（如果是单字段条件），\n// 而 $where 永远不能利用索引。在 10 万条数据上，\n// $expr 通常快 10-50 倍。'
      }
    ]
  },

  'K9x7yQP59cB764Q5PqAs_': {
    // Cursors 游标
    mentalModel: '游标是 MongoDB 的"结果传送带"——查询不是一次性返回所有文档，而是返回一个游标，让你按批次拉取结果，就像流水线上的传送带按需送出产品，避免一次性加载海量数据撑爆内存。',
    handsOn: [
      {
        title: '基础游标迭代',
        cmd: 'const cursor = db.users.find({ age: { $gt: 25 } });\nwhile (cursor.hasNext()) {\n  printjson(cursor.next());\n}',
        output: '{ _id: ObjectId("..."), name: "Alice", age: 30 }\n{ _id: ObjectId("..."), name: "Bob", age: 28 }\n...',
        explain: 'find() 返回游标而非数组。hasNext() 检查是否还有文档，next() 取出下一个。这是最基本的游标消费方式。在 mongosh 中，如果不调用任何方法，游标会自动打印前 20 个结果。'
      },
      {
        title: '游标方法链式调用',
        cmd: 'db.orders.find({ status: "active" })\n  .sort({ createdAt: -1 })\n  .skip(20)\n  .limit(10)\n  .batchSize(5)\n  .maxTimeMS(5000)',
        output: '// 返回一个配置好的游标对象，尚未执行查询\n// 直到调用 toArray()、forEach() 或 hasNext() 时才真正发送请求',
        explain: 'sort/skip/limit/batchSize/maxTimeMS 都是游标配置方法，可以链式调用。查询在第一次拉取数据时才真正执行（惰性求值）。batchSize 控制每次网络往返返回的文档数，maxTimeMS 设置查询超时。'
      },
      {
        title: 'toArray() 与 forEach() 的区别',
        cmd: '// toArray: 拉取全部结果到内存数组\nconst allUsers = db.users.find().toArray();\nprint(allUsers.length);\n\n// forEach: 逐个处理，内存友好\ndb.users.find().forEach(doc => {\n  print(doc.name);\n});',
        output: '15000\nAlice\nBob\nCharlie\n...',
        explain: 'toArray() 会把所有文档加载到客户端内存，适合结果集较小的场景。forEach() 逐文档处理，内存占用恒定。对于百万级结果，toArray() 可能导致 OOM，而 forEach() 不会。'
      },
      {
        title: '游标生命周期与超时',
        cmd: '// 默认游标 10 分钟超时\nconst cursor = db.logs.find().noCursorTimeout();\n// 手动关闭\ntry {\n  cursor.forEach(doc => { /* 处理 */ });\n} finally {\n  cursor.close();\n}',
        output: '// noCursorTimeout() 阻止服务器端自动关闭游标\n// 必须确保手动 close()，否则服务端会泄漏游标资源',
        explain: 'MongoDB 默认在游标空闲 10 分钟后自动关闭。长时间处理任务使用 noCursorTimeout() 但要记得 close()。在副本集中，游标绑定到特定 mongod 实例，failover 后游标会失效。'
      }
    ],
    diagnosis: [
      {
        symptom: '遍历大结果集时收到 "cursor not found" 错误（CursorNotFound 异常）',
        cause: '游标在服务器端超时（默认 10 分钟）。当客户端处理每个文档的时间较长（比如复杂计算或网络IO），两次 next() 调用间隔超过超时时间，服务器就会关闭该游标。',
        fix: '使用 noCursorTimeout() 并配合 try/finally 确保 close()。或者减小批次处理量，增加 batchSize 减少网络往返次数。对于批处理任务，考虑用 aggregation pipeline 的 $out 代替客户端遍历。'
      },
      {
        symptom: 'skip(100000).limit(10) 这样的深度分页查询越来越慢',
        cause: 'skip(N) 需要服务器扫描并丢弃前 N 条记录，成本随 N 线性增长。skip(100000) 意味着扫描 100010 条但只返回 10 条。',
        fix: '改用基于游标的分页（keyset pagination）：记录上一页最后一条的排序字段值，下一页用范围查询代替 skip。例如 db.posts.find({ _id: { $gt: lastId } }).sort({ _id: 1 }).limit(10)。这样无论第几页都是 O(1) 的索引查找。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 mongosh 脚本，用游标遍历 products 集合，统计 category 为 "electronics" 的文档数量，不使用 count() 方法。',
        hint: '使用 find({ category: "electronics" }) 获取游标，forEach 遍历并累加计数器。',
        answer: 'let count = 0;\ndb.products.find({ category: "electronics" }).forEach(doc => {\n  count++;\n});\nprint("Electronics count:", count);'
      },
      {
        level: '进阶',
        task: '实现一个基于游标的批量更新脚本：遍历 orders 集合中 status 为 "pending" 的订单，如果 createdAt 超过 30 天则将 status 更新为 "expired"，每批处理 100 条。',
        hint: '用 find() 获取游标，在 forEach 中调用 updateOne()，或者用 bulkWrite 提高效率。',
        answer: 'const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);\nconst cursor = db.orders.find({\n  status: "pending",\n  createdAt: { $lt: cutoff }\n});\n\nconst bulk = db.orders.initializeUnorderedBulkOp();\nlet count = 0;\ncursor.forEach(doc => {\n  bulk.find({ _id: doc._id }).updateOne({ $set: { status: "expired" } });\n  count++;\n  if (count % 100 === 0) {\n    bulk.execute();\n    print("Processed", count);\n  }\n});\nif (count % 100 !== 0) bulk.execute();\nprint("Total expired:", count);'
      },
      {
        level: '挑战',
        task: '解释为什么在副本集中执行 find() 后如果发生 primary 切换，后续 next() 调用可能失败。设计一个容错方案来处理这种情况。',
        hint: '考虑游标绑定的是哪个节点，failover 后该节点的角色可能变化。',
        answer: '// 游标绑定到发起查询的那个 mongod 节点。如果该节点是 primary 且发生 failover，\n// 它可能降级为 secondary，原有游标失效。\n// \n// 容错方案：\n// 1. 记录最后处理的文档位置（如 _id 或排序键值）\n// 2. 捕获 CursorNotFound 异常\n// 3. 用记录的位置重新创建游标继续处理\n\nlet lastId = null;\nlet processed = 0;\nconst maxRetries = 3;\n\nfunction processBatch() {\n  let query = {};\n  if (lastId) query = { _id: { $gt: lastId } };\n  \n  const cursor = db.orders.find(query)\n    .sort({ _id: 1 })\n    .batchSize(200)\n    .maxTimeMS(30000);\n  \n  cursor.forEach(doc => {\n    // 处理逻辑\n    lastId = doc._id;\n    processed++;\n  });\n}\n\nfor (let attempt = 0; attempt < maxRetries; attempt++) {\n  try {\n    processBatch();\n    break;\n  } catch (e) {\n    if (e.codeName === "CursorNotFound") {\n      print("Cursor lost at", lastId, "retrying...");\n      continue;\n    }\n    throw e;\n  }\n}\nprint("Total processed:", processed);'
      }
    ]
  },

  's8El0Q22GD_rOZGlDtkgH': {
    // Retryable Reads/Writes
    mentalModel: 'Retryable Reads/Writes 是 MongoDB 的"自动重试保险"——当网络闪断或副本集选举导致操作失败时，驱动会自动重试一次，对应用透明，就像信用卡交易遇到通信故障时银行自动重新发起扣款请求。',
    sections: [
      {
        title: 'Retryable Reads 机制',
        content: 'Retryable Reads 从 MongoDB 3.6 开始默认启用。当读操作（find, aggregate, count 等）因网络错误或"not primary"错误失败时，驱动会自动选择一个可用节点重试一次。\n\n可重试的读操作：\n- find（包括 getMore 获取后续批次）\n- aggregate（不含 $out/$merge 阶段）\n- count / distinct\n- listCollections / listIndexes\n\n注意：readConcern 为 snapshot 的操作不可重试，因为重试时快照视图可能已过期。'
      },
      {
        title: 'Retryable Writes 机制',
        content: 'Retryable Writes 要求：\n1. 副本集或分片集群（不支持单节点）\n2. writeConcern 的 w 值 >= 1（不能是 w: 0）\n3. 操作必须是单文档操作\n\n可重试的写操作：\n- insertOne / insertMany（每个文档独立重试）\n- updateOne / replaceOne / deleteOne\n- findOneAndUpdate / findOneAndReplace / findOneAndDelete\n- bulkWrite（其中每个单文档操作独立重试）\n\n不可重试的写操作：\n- updateMany / deleteMany（多文档操作）\n- aggregate with $out / $merge\n\n重试机制使用 transaction ID（txnNumber）来确保写操作的幂等性——同一个 txnNumber 的写操作不会被执行两次。'
      },
      {
        title: '重试的局限与陷阱',
        content: '重试只执行一次：如果重试也失败了，错误会抛给应用。这不是无限重试。\n\n不重试的场景：\n- 服务器端逻辑错误（如验证失败、重复键错误）\n- 超时错误（MaxTimeMSExpired）\n- 客户端错误（如非法查询语法）\n\n关键陷阱：如果你的写操作不是幂等的（如 $inc: { views: 1 }），重试可能导致多加一次。但 MongoDB 通过 txnNumber 机制保证了 retryable write 的幂等性——相同 txnNumber 的操作只会执行一次。\n\n连接字符串中可以用 retryWrites=true|false 控制，默认 true。'
      }
    ],
    diagnosis: [
      {
        symptom: '副本集 primary 切换时，应用报 "not primary" 错误而非自动重试',
        cause: '可能原因：1) retryWrites 在连接字符串中被设为 false；2) 使用的是单节点部署（不支持 retryable writes）；3) 使用了 w: 0 的 writeConcern。',
        fix: '确认连接字符串包含 retryWrites=true（默认值）。使用副本集部署而非单节点。确保 writeConcern 的 w >= 1。如果是在 mongosh 中测试，注意 mongosh 默认可能不启用 retryable writes。'
      },
      {
        symptom: 'updateOne({ $inc: { count: 1 } }) 在重试后 count 被加了两次',
        cause: '在正确配置的 retryable writes 下，这不应该发生——MongoDB 用 txnNumber 保证幂等。如果发生了，可能是驱动版本过旧不支持 retryable writes，或者操作被路由到了不同的 mongos 且 txnNumber 未被正确传递。',
        fix: '升级 MongoDB 驱动到最新版本。确保连接的是副本集或分片集群。检查 mongod 日志确认重试请求是否携带了相同的 txnNumber。如果问题持续，在应用层实现幂等控制（如使用唯一请求ID去重）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查看你的 MongoDB 连接是否启用了 retryable writes 和 retryable reads，分别通过连接字符串和 serverStatus 命令验证。',
        hint: '检查连接字符串参数和 db.adminCommand({ getParameter: 1, featureFlags: 1 })',
        answer: '// 查看连接字符串中的配置\n// 通常格式: mongodb://host:27017/?retryWrites=true&retryReads=true\n\n// 服务端特性检查\ndb.adminCommand({ getParameter: 1, retryWrites: 1 });\n// { retryWrites: true, ok: 1 }\n\n// 在 mongosh 中检查当前连接选项\ndb.getMongo().getReadPref();\n// 确认 read preference 和 write concern 不是 w:0'
      },
      {
        level: '进阶',
        task: '设计一个实验验证 retryable write 的幂等性：模拟一次写操作的网络重试，观察 MongoDB 是否真的只执行了一次。',
        hint: '通过 MongoDB 日志或 profile 数据查看相同 txnNumber 的操作记录。',
        answer: '// 1. 开启 profiling\ndb.setProfilingLevel(2);\n\n// 2. 执行一个 insertOne\ndb.counters.insertOne({ _id: "retry_test", value: 1 });\n\n// 3. 查看 profile 中的 txnNumber\ndb.system.profile.find({\n  ns: "test.counters",\n  op: "insert"\n}).sort({ ts: -1 }).limit(1);\n// 注意 lsid 和 txnNumber 字段\n\n// 4. 如果驱动正确发送了相同的 lsid + txnNumber，\n//    服务器会检测到重复并跳过执行，返回上次的结果。\n//    这就是 retryable write 幂等性的保证。\n\n// 5. 清理\ndb.setProfilingLevel(0);\ndb.system.profile.drop();\ndb.counters.deleteOne({ _id: "retry_test" });'
      }
    ]
  },

  'gakF5Zfgk7QIgg_UwqG_Y': {
    // $project 投影
    mentalModel: '$project 是聚合管道中的"数据雕刻刀"——它决定每个文档最终保留哪些字段、计算哪些新字段、隐藏哪些冗余信息，就像雕塑家从石块中去除多余部分只留下作品。',
    handsOn: [
      {
        title: '基础投影：选择保留和排除字段',
        cmd: 'db.users.aggregate([\n  { $project: { name: 1, email: 1, _id: 0 } }\n])',
        output: '[\n  { name: "Alice", email: "alice@example.com" },\n  { name: "Bob", email: "bob@example.com" }\n]',
        explain: '1 表示保留，0 表示排除。_id 默认总是包含的，需要显式设为 0 排除。在 $project 中，除了 _id 以外不能混合使用 1 和 0（不能同时包含和排除）。'
      },
      {
        title: '计算新字段',
        cmd: 'db.orders.aggregate([\n  {\n    $project: {\n      orderId: "$_id",\n      totalDisplay: { $concat: ["$", currency, " ", { $toString: "$amount" }] },\n      isHighValue: { $gt: ["$amount", 1000] },\n      _id: 0\n    }\n  }\n])',
        output: '[\n  {\n    orderId: ObjectId("..."),\n    totalDisplay: "USD 1500.00",\n    isHighValue: true\n  }\n]',
        explain: '$project 不仅能选择字段，还能用表达式计算新字段。$concat 拼接字符串，$toString 类型转换，$gt 比较运算。新字段可以引用原文档的任何字段（用 $fieldName 语法）。'
      },
      {
        title: '嵌套字段的投影',
        cmd: 'db.products.aggregate([\n  {\n    $project: {\n      name: 1,\n      "dimensions.width": 1,\n      "dimensions.height": 1,\n      _id: 0\n    }\n  }\n])',
        output: '[\n  {\n    name: "Monitor",\n    dimensions: { width: 60, height: 35 }\n  }\n]',
        explain: '用点表示法可以投影嵌套文档中的特定字段。注意：即使只选了 dimensions 下的两个字段，返回的仍是整个 dimensions 对象（只包含选中的字段），不会改变嵌套结构。'
      },
      {
        title: '$project 中使用聚合表达式',
        cmd: 'db.sales.aggregate([\n  {\n    $project: {\n      item: 1,\n      profit: { $subtract: ["$revenue", "$cost"] },\n      margin: {\n        $round: [\n          { $multiply: [{ $divide: [{ $subtract: ["$revenue", "$cost"] }, "$revenue"] }, 100] },\n          2\n        ]\n      },\n      _id: 0\n    }\n  }\n])',
        output: '[\n  {\n    item: "Widget A",\n    profit: 250,\n    margin: 33.33\n  }\n]',
        explain: '$subtract 做减法，$divide 做除法，$multiply 做乘法，$round 四舍五入。复杂的表达式可以嵌套。如果某个字段缺失或为 null，整个表达式结果也是 null。'
      }
    ],
    diagnosis: [
      {
        symptom: '$project 中混合使用包含和排除（如 { name: 1, secret: 0 }）报错',
        cause: 'MongoDB 不允许在同一个 $project 中混合使用包含（1）和排除（0），唯一的例外是 _id 字段。这是因为混合模式的语义不明确：你到底是想"只保留 name"还是"保留所有除了 secret"？',
        fix: '选择一种模式。如果想保留大部分字段只排除少数：用排除模式 { secret: 0, internal: 0 }。如果只想要特定字段：用包含模式 { name: 1, email: 1, _id: 0 }。'
      },
      {
        symptom: '$project 中使用 { $toString: "$amount" } 但某些文档的 amount 是 null，导致输出 null 字符串',
        cause: '当引用字段为 null 或不存在时，聚合表达式返回 null。$toString 对 null 输入也返回 null，最终字段值为 null 而非预期的 "0" 或空字符串。',
        fix: '使用 $ifNull 提供默认值：{ $toString: { $ifNull: ["$amount", 0] } }。或者在 $project 前加一个 $match 阶段过滤掉 amount 为 null 的文档。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 $project 从 employees 集合生成报表，只保留 name, department, salary 三个字段，并新增一个 salaryLevel 字段（salary > 80000 为 "high"，否则 "standard"）。',
        hint: '使用 $cond 做条件判断：{ $cond: [condition, trueValue, falseValue] }',
        answer: 'db.employees.aggregate([\n  {\n    $project: {\n      _id: 0,\n      name: 1,\n      department: 1,\n      salary: 1,\n      salaryLevel: {\n        $cond: [{ $gt: ["$salary", 80000] }, "high", "standard"]\n      }\n    }\n  }\n])'
      },
      {
        level: '进阶',
        task: '用 $project 实现：从 events 集合提取 startTime（Date 类型），拆分为 year, month, day, hour, dayOfWeek 五个独立字段，排除原 startTime 和 _id。',
        hint: '使用 $year, $month, $dayOfMonth, $hour, $dayOfWeek 日期提取操作符。',
        answer: 'db.events.aggregate([\n  {\n    $project: {\n      _id: 0,\n      title: 1,\n      year: { $year: "$startTime" },\n      month: { $month: "$startTime" },\n      day: { $dayOfMonth: "$startTime" },\n      hour: { $hour: "$startTime" },\n      dayOfWeek: { $dayOfWeek: "$startTime" }\n    }\n  }\n])\n// 注意：这些操作符返回的时区是 UTC。如需本地时区，\n// 使用 $dateToParts 并指定 timezone 参数。'
      }
    ]
  },

  'sxDyp3bP-YhgmDMVUFTaA': {
    // $include (1 投影)
    mentalModel: '投影中的 1（包含模式）是"白名单过滤器"——你声明想要哪些字段，其余全部丢弃。就像收拾行李时只看清单上的物品，清单以外的都不带。',
    handsOn: [
      {
        title: 'find() 中的包含投影',
        cmd: 'db.users.find({}, { name: 1, email: 1 })',
        output: '[\n  { _id: ObjectId("..."), name: "Alice", email: "alice@mail.com" },\n  { _id: ObjectId("..."), name: "Bob", email: "bob@mail.com" }\n]',
        explain: '第二个参数是投影文档。name: 1 和 email: 1 表示只返回这两个字段。注意 _id 默认总是包含的，即使你没有显式指定。'
      },
      {
        title: '排除 _id 的包含投影',
        cmd: 'db.users.find({}, { name: 1, email: 1, _id: 0 })',
        output: '[\n  { name: "Alice", email: "alice@mail.com" },\n  { name: "Bob", email: "bob@mail.com" }\n]',
        explain: '_id: 0 是包含模式中唯一允许的排除声明。这告诉 MongoDB 不要返回 _id 字段。_id 是唯一可以和包含声明混合使用的字段。'
      },
      {
        title: '嵌套文档的包含投影',
        cmd: 'db.products.find({}, { name: 1, "specs.cpu": 1, "specs.ram": 1, _id: 0 })',
        output: '[\n  {\n    name: "Laptop Pro",\n    specs: { cpu: "M2", ram: "16GB" }\n  },\n  {\n    name: "Desktop X",\n    specs: { cpu: "i9", ram: "64GB" }\n  }\n]',
        explain: '用点表示法包含嵌套文档中的特定字段。只有 specs.cpu 和 specs.ram 被保留，specs 下的其他字段（如 specs.gpu）被过滤。嵌套结构保持不变。'
      },
      {
        title: '数组字段的包含投影',
        cmd: 'db.posts.find({}, { title: 1, tags: 1, _id: 0 })',
        output: '[\n  {\n    title: "MongoDB Guide",\n    tags: ["database", "nosql", "tutorial"]\n  }\n]',
        explain: '数组字段用 1 包含时会返回整个数组。如果你想只返回数组中的部分元素，需要配合 $slice 操作符。包含投影不能基于数组元素的内容来过滤（那需要 $elemMatch 投影）。'
      }
    ],
    diagnosis: [
      {
        symptom: '投影 { name: 1, age: 1, role: 0 } 报错 "Cannot do exclusion on field role in inclusion projection"',
        cause: '包含模式（1）和排除模式（0）不能混合使用（_id 除外）。MongoDB 需要明确的语义：要么只列出要保留的字段，要么只列出要排除的字段。',
        fix: '如果大部分字段都要保留，改用排除模式：{ secret: 0, password: 0 }。如果只需要少数字段，用包含模式：{ name: 1, age: 1, _id: 0 }。把 role 的排除逻辑放到包含列表之外自然就被过滤了。'
      },
      {
        symptom: '包含投影 { "address.city": 1 } 返回了文档但 address 字段是空对象 {}',
        cause: '原文档中 address 字段不存在或不是嵌套文档（比如是字符串或 null）。包含投影只能投影存在的嵌套字段，缺失的嵌套路径会显示为空对象。',
        fix: '先检查数据结构是否正确。如果 address 有时是字符串有时是对象，需要统一 schema。可以用 $type 操作符诊断：db.users.find({ address: { $type: "string" } })。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '从 books 集合查询，只返回 title, author, isbn 三个字段（不含 _id），按 title 字母顺序排序，限制 10 条。',
        hint: 'find 的第二个参数用 { title: 1, author: 1, isbn: 1, _id: 0 }',
        answer: 'db.books.find(\n  {},\n  { title: 1, author: 1, isbn: 1, _id: 0 }\n).sort({ title: 1 }).limit(10);'
      },
      {
        level: '进阶',
        task: '从 students 集合查询，只返回 name 和 scores 数组中的前 3 个元素，不包含 _id。',
        hint: '使用 $slice 投影操作符：{ scores: { $slice: 3 } }',
        answer: 'db.students.find(\n  {},\n  { name: 1, scores: { $slice: 3 }, _id: 0 }\n);\n// $slice: 3 取前 3 个\n// $slice: -3 取后 3 个\n// $slice: [2, 3] 跳过 2 个取 3 个'
      }
    ]
  },

  'ZKHUCskdKQf4IaMUTN_e7': {
    // $nin 不在集合中
    mentalModel: '$nin 是 SQL 中 NOT IN 的 MongoDB 版本——它过滤掉字段值出现在指定列表中的文档，就像一个黑名单过滤器：凡是名单上的人都不允许进入。',
    handsOn: [
      {
        title: '基础 $nin 查询',
        cmd: 'db.users.find({ status: { $nin: ["banned", "suspended", "inactive"] } })',
        output: '[\n  { _id: ObjectId("..."), name: "Alice", status: "active" },\n  { _id: ObjectId("..."), name: "Charlie", status: "pending" }\n]',
        explain: '$nin 匹配 status 不在列表中的文档。它也会匹配 status 字段不存在的文档（与 $ne 行为一致）。如果列表为空数组，所有文档都会匹配。'
      },
      {
        title: '$nin 用于数组字段',
        cmd: 'db.posts.find({ tags: { $nin: ["spam", "nsfw", "deleted"] } })',
        output: '[\n  { title: "MongoDB Tips", tags: ["database", "tutorial"] },\n  { title: "Node.js Guide", tags: ["javascript", "backend"] }\n]',
        explain: '当 tags 是数组时，$nin 匹配"数组中没有任何元素在黑名单中"的文档。如果 posts 的 tags 中只要有一个是 "spam"，整个文档就被排除。这与 $ne 对数组的行为一致。'
      },
      {
        title: '$nin 与正则表达式组合',
        cmd: 'db.logs.find({ message: { $nin: [/^DEBUG/, /^TRACE/, /^INFO/] } })',
        output: '[\n  { level: "error", message: "Connection refused" },\n  { level: "warn", message: "Slow query detected" }\n]',
        explain: '$nin 的列表中可以包含正则表达式。这个查询排除了以 DEBUG、TRACE 或 INFO 开头的日志消息，只保留 WARNING 和 ERROR 级别的日志。'
      }
    ],
    diagnosis: [
      {
        symptom: '$nin 查询非常慢，explain() 显示 COLLSCAN（全集合扫描）',
        cause: '$nin 通常无法高效使用索引。因为"不在集合中"意味着需要检查所有不在列表中的值，这覆盖了索引的大部分范围。MongoDB 的查询优化器通常会放弃使用索引。',
        fix: '1) 将 $nin 改写为正向匹配：如果你知道所有可能的值，用 $in 列出你需要的值。2) 增加更有选择性的条件先缩小范围：{ status: { $nin: ["banned"] }, region: "US" }，让 region 字段走索引。3) 考虑在应用层做排除过滤。'
      },
      {
        symptom: '$nin: [] 空数组返回了所有文档，包括字段不存在的文档',
        cause: '空数组意味着"不在空集中"——任何值都不在空集中，所以所有文档都匹配。字段不存在的文档也匹配，因为 null 也不在空集中。',
        fix: '在应用层做参数校验，确保传给 $nin 的数组不为空。如果空数组是合法输入且你期望返回空结果集，用 $in: [] 代替（$in 空数组匹配零个文档）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 products 集合中 category 不是 "discontinued"、"archived" 或 "draft" 的所有产品，只返回 name 和 price 字段。',
        hint: '使用 { category: { $nin: [...] } } 配合投影 { name: 1, price: 1, _id: 0 }',
        answer: 'db.products.find(\n  { category: { $nin: ["discontinued", "archived", "draft"] } },\n  { name: 1, price: 1, _id: 0 }\n);'
      },
      {
        level: '进阶',
        task: '用 $nin 和 $elemMatch 组合实现：查找 comments 数组中没有被任何 "admin" 角色用户评论过的文章。',
        hint: '$nin 用于排除特定值，但在嵌套数组中需要用 $not + $elemMatch。',
        answer: '// 注意：这里不能直接用 $nin，因为需要检查数组元素的嵌套字段\n// 正确做法是用 $not + $elemMatch\ndb.articles.find({\n  comments: {\n    $not: {\n      $elemMatch: { role: "admin" }\n    }\n  }\n});\n\n// 如果 comments 是简单的角色字符串数组，可以直接用 $nin：\ndb.articles.find({\n  commentRoles: { $nin: ["admin", "moderator"] }\n});\n// 这会排除任何 commentRoles 数组中包含 "admin" 或 "moderator" 的文档'
      }
    ]
  },

  'hPPoO8ysGeEGEQhdveiDO': {
    // $all 操作符
    mentalModel: '$all 是数组的"全都要"检查器——它要求目标数组必须包含指定的所有元素（不要求顺序），就像购物清单检查：你的购物车里必须同时有牛奶、面包和鸡蛋，少一样都不行。',
    handsOn: [
      {
        title: '基础 $all 查询',
        cmd: 'db.products.find({ tags: { $all: ["organic", "vegan", "gluten-free"] } })',
        output: '[\n  { name: "Green Salad", tags: ["organic", "vegan", "gluten-free", "fresh"] },\n  { name: "Veggie Bowl", tags: ["vegan", "gluten-free", "organic", "spicy"] }\n]',
        explain: '$all 匹配 tags 数组同时包含所有三个标签的文档。数组中可以有额外元素（如 "fresh"、"spicy"），只要包含所有指定元素即可。元素顺序无关。'
      },
      {
        title: '$all 配合 $elemMatch',
        cmd: 'db.students.find({\n  scores: {\n    $all: [\n      { $elemMatch: { subject: "math", score: { $gte: 90 } } },\n      { $elemMatch: { subject: "english", score: { $gte: 80 } } }\n    ]\n  }\n})',
        output: '[\n  {\n    name: "Alice",\n    scores: [\n      { subject: "math", score: 95 },\n      { subject: "english", score: 88 },\n      { subject: "science", score: 72 }\n    ]\n  }\n]',
        explain: '当数组元素是文档时，$all 配合 $elemMatch 可以要求"数组中存在一个文档满足条件A，且存在另一个文档满足条件B"。Alice 的 math 分数 >= 90 且 english 分数 >= 80。'
      },
      {
        title: '$all 与单值数组',
        cmd: 'db.users.find({ roles: { $all: ["admin"] } })',
        output: '[\n  { name: "Alice", roles: ["admin", "editor"] },\n  { name: "Bob", roles: ["admin"] }\n]',
        explain: '$all 只包含一个元素时，等价于直接匹配该元素：{ roles: "admin" }。但语义更明确："roles 数组必须包含 admin"。'
      }
    ],
    diagnosis: [
      {
        symptom: '$all: ["A", "B"] 查询很慢，explain() 显示大量 docsExamined',
        cause: '$all 内部会转化为多个独立的元素匹配条件的 AND。MongoDB 需要检查数组中的每个元素是否匹配每个条件。如果数组很大且集合文档多，扫描成本很高。索引只能帮助过滤第一个元素。',
        fix: '1) 创建多键索引（数组字段的索引）。MongoDB 会使用 $all 列表中的第一个元素做索引查找，然后过滤剩余元素。2) 把 $all 列表中最稀有的元素放第一位，减少索引匹配的文档数。3) 考虑反范式设计：增加一个 hasAllTags 这样的冗余字段，在写入时维护。'
      },
      {
        symptom: '$all: [] 空数组没有返回任何文档',
        cause: '$all: [] 的语义是"数组必须包含所有指定元素"，空列表意味着需要包含"无"元素——这在 MongoDB 中被解释为不匹配任何文档。这与 $in: [] 的行为一致。',
        fix: '在应用层校验：如果 $all 的列表可能为空，要么跳过这个查询条件，要么用 $size: 0 检查空数组，根据业务逻辑决定空列表应该匹配什么。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 recipes 集合中 ingredients 数组同时包含 "flour"、"sugar" 和 "eggs" 的所有食谱，返回 name 和 cookTime。',
        hint: '使用 { ingredients: { $all: ["flour", "sugar", "eggs"] } }',
        answer: 'db.recipes.find(\n  { ingredients: { $all: ["flour", "sugar", "eggs"] } },\n  { name: 1, cookTime: 1, _id: 0 }\n);'
      },
      {
        level: '挑战',
        task: '用 $all + $elemMatch 实现：查找 servers 集合中同时满足"有至少一个 CPU 使用率 > 80%"和"有至少一个磁盘使用率 > 90%"的服务器。metrics 数组中每个元素有 { type: "cpu"|"disk", usage: number }。',
        hint: '$all 数组中放两个 $elemMatch 条件，分别匹配 cpu > 80 和 disk > 90。',
        answer: 'db.servers.find({\n  metrics: {\n    $all: [\n      { $elemMatch: { type: "cpu", usage: { $gt: 80 } } },\n      { $elemMatch: { type: "disk", usage: { $gt: 90 } } }\n    ]\n  }\n});\n// 注意：两个 $elemMatch 可以匹配 metrics 数组中的不同元素，\n// 不要求是同一个元素同时满足两个条件。'
      }
    ]
  },

  'haA1ltV6VzgJVJcJNMK0W': {
    // 创建索引
    mentalModel: '创建索引就像给数据库建一本"目录"——没有索引时 MongoDB 必须翻遍每一页（全集合扫描），有了索引它直接查目录定位页码（索引查找），就像图书馆的索引卡片让你快速找到书的位置。',
    handsOn: [
      {
        title: '创建单字段索引',
        cmd: 'db.users.createIndex({ email: 1 })',
        output: 'email_1',
        explain: '1 表示升序索引，-1 表示降序。返回索引名称。MongoDB 会在后台构建 B-Tree 索引，之后对 email 字段的查询可以使用索引查找代替全集合扫描。'
      },
      {
        title: '创建唯一索引',
        cmd: 'db.users.createIndex({ email: 1 }, { unique: true })',
        output: 'email_1',
        explain: 'unique: true 强制索引字段的值唯一。如果集合中已存在重复值，createIndex 会失败。对唯一索引插入重复值会抛出 E11000 duplicate key error。注意：唯一索引允许多个文档的该字段为 null（但在 4.2+ 中可以配合 partialFilterExpression 控制）。'
      },
      {
        title: '后台创建索引（不阻塞生产操作）',
        cmd: 'db.orders.createIndex(\n  { customerId: 1, createdAt: -1 },\n  { background: true, name: "idx_customer_date" }\n)',
        output: 'idx_customer_date',
        explain: 'background: true 允许在构建索引期间继续处理读写操作（4.2+ 中所有索引构建都默认使用优化的流水线方式，background 选项被弃用但仍兼容）。自定义 name 便于后续管理。复合索引的字段顺序影响查询效率。'
      },
      {
        title: '查看和管理索引',
        cmd: '// 查看集合的所有索引\ndb.users.getIndexes();\n\n// 删除特定索引\ndb.users.dropIndex("email_1");\n\n// 删除所有非 _id 索引\ndb.users.dropIndexes();',
        output: '[\n  { v: 2, key: { _id: 1 }, name: "_id_" },\n  { v: 2, key: { email: 1 }, name: "email_1", unique: true }\n]',
        explain: 'getIndexes() 返回所有索引的定义。每个集合自动有 _id 索引，不能删除。dropIndex() 用索引名称删除。生产环境删除索引要谨慎，可能影响查询性能。'
      }
    ],
    diagnosis: [
      {
        symptom: 'createIndex 报错 "Index build failed: E11000 duplicate key error"',
        cause: '创建唯一索引时，集合中已经存在重复的字段值。唯一索引要求所有文档的索引字段值都不相同。',
        fix: '先用聚合查找重复值：db.users.aggregate([{ $group: { _id: "$email", count: { $sum: 1 } } }, { $match: { count: { $gt: 1 } } }])。清理重复数据后再创建索引。或者不使用 unique 选项（如果业务不需要唯一约束）。'
      },
      {
        symptom: '创建索引后查询性能没有改善，explain() 仍然显示 COLLSCAN',
        cause: '可能原因：1) 查询条件没有使用索引字段；2) 查询优化器认为全集合扫描更快（当查询返回大部分文档时）；3) 索引尚未构建完成。',
        fix: '1) 用 db.collection.getIndexes() 确认索引已创建。2) 用 explain("executionStats") 检查查询计划。3) 尝试 hint() 强制使用特定索引看效果。4) 如果查询覆盖集合大部分文档，全集合扫描确实可能更快——考虑加更多过滤条件。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 products 集合创建复合索引 { category: 1, price: 1 }，然后用 explain() 验证查询 { category: "electronics", price: { $lt: 100 } } 是否使用了该索引。',
        hint: 'createIndex 后执行 find().explain("executionStats")，关注 winningPlan.stage 是否为 IXSCAN。',
        answer: 'db.products.createIndex({ category: 1, price: 1 });\n\nconst result = db.products.find({\n  category: "electronics",\n  price: { $lt: 100 }\n}).explain("executionStats");\n\n// 检查 winningPlan 是否包含 IXSCAN\nprint(result.queryPlanner.winningPlan.inputStage?.stage);\n// 应输出 "IXSCAN"\nprint("Index used:", result.queryPlanner.winningPlan.inputStage?.indexName);\n// 应输出 "category_1_price_1"\nprint("Docs examined:", result.executionStats.totalDocsExamined);\nprint("Docs returned:", result.executionStats.nReturned);'
      },
      {
        level: '进阶',
        task: '创建一个部分索引（partial index），只索引 status 为 "active" 的用户。验证对 active 用户的查询使用了索引，而对 inactive 用户的查询使用了全集合扫描。',
        hint: '使用 partialFilterExpression 选项。',
        answer: '// 创建部分索引\ndb.users.createIndex(\n  { email: 1 },\n  {\n    partialFilterExpression: { status: "active" },\n    name: "idx_active_email"\n  }\n);\n\n// active 用户查询 —— 使用索引\ndb.users.find({ email: "alice@mail.com", status: "active" })\n  .explain("executionStats");\n// winningPlan 包含 IXSCAN\n\n// inactive 用户查询 —— 全集合扫描\ndb.users.find({ email: "bob@mail.com", status: "inactive" })\n  .explain("executionStats");\n// winningPlan 包含 COLLSCAN（因为索引不覆盖 inactive 文档）\n\n// 部分索引的优势：索引更小，只维护 active 用户的条目。'
      }
    ]
  },

  'nk0V3o3oKuIb8A0gDECFJ': {
    // $exclude (0 投影)
    mentalModel: '投影中的 0（排除模式）是"黑名单过滤器"——你声明不要哪些字段，其余全部保留。就像编辑照片时擦除不想要的部分，其他内容原样保留。',
    handsOn: [
      {
        title: '基础排除投影',
        cmd: 'db.users.find({}, { password: 0, secretKey: 0, __v: 0 })',
        output: '[\n  {\n    _id: ObjectId("..."),\n    name: "Alice",\n    email: "alice@mail.com",\n    age: 30,\n    role: "admin"\n  }\n]',
        explain: 'password、secretKey、__v 三个字段被排除，文档中所有其他字段都保留。这是最常见的投影场景：隐藏敏感字段或内部字段。'
      },
      {
        title: '排除嵌套文档的特定字段',
        cmd: 'db.users.find({}, { "address.coordinates": 0, "settings.debug": 0 })',
        output: '[\n  {\n    _id: ObjectId("..."),\n    name: "Alice",\n    address: { city: "NYC", street: "5th Ave" },\n    settings: { theme: "dark", lang: "en" }\n  }\n]',
        explain: '可以用点表示法排除嵌套文档中的特定字段。address 对象保留但去掉了 coordinates 子字段，settings 保留但去掉了 debug 子字段。这是排除模式独有的能力——包含模式无法做到"保留大部分只去掉少数"。'
      },
      {
        title: '排除模式与聚合管道',
        cmd: 'db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $project: { internalNotes: 0, auditLog: 0 } }\n])',
        output: '[\n  {\n    _id: ObjectId("..."),\n    customerId: "C001",\n    items: [...],\n    total: 250.00,\n    status: "completed"\n  }\n]',
        explain: '在聚合管道的 $project 阶段中使用排除模式。internalNotes 和 auditLog 被移除，所有其他字段流过到下一阶段。在聚合管道中，排除模式通常用在最后阶段清理输出。'
      }
    ],
    diagnosis: [
      {
        symptom: '排除投影 { password: 0 } 后，返回的文档中仍然看到类似密码的数据',
        cause: '密码可能存储在多个字段中（如 hashedPassword、resetToken），或者字段名拼写不同（如 passWord、Password）。排除投影只作用于你指定的精确字段名。',
        fix: '先检查文档的完整结构：db.users.findOne()，确认所有敏感字段的准确名称。可以用 Object.keys() 遍历：db.users.find().forEach(d => print(Object.keys(d)))。确保所有敏感字段都在排除列表中。'
      },
      {
        symptom: '排除 _id 字段失败，使用 { _id: 0, password: 0 } 后 _id 仍然出现',
        cause: '这种情况很少见。如果确实发生，可能是驱动层面的问题（某些 ODM 如 Mongoose 会自动注入 _id）或 mongosh 的显示行为。',
        fix: '确认是在 mongosh 还是应用代码中观察到的。在 Mongoose 中，如果 schema 没有 _id: false，它可能在 toObject() 时重新添加 _id。在 Mongoose 查询中使用 .select("-_id -password") 语法。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '从 articles 集合查询所有文章，排除 content（可能很长）、metadata.internal 和 _id 字段，只返回标题、作者、发布时间等概要信息。',
        hint: '使用排除投影 { content: 0, "metadata.internal": 0, _id: 0 }',
        answer: 'db.articles.find({}, {\n  content: 0,\n  "metadata.internal": 0,\n  _id: 0\n});\n// 返回每个文档除 content、metadata.internal 和 _id 外的所有字段\n// 包括 title, author, publishedAt, summary 等'
      },
      {
        level: '进阶',
        task: '比较排除模式和包含模式在带宽节省上的差异：一个文档有 20 个字段，你只需要 3 个。分别用排除（排除 17 个）和包含（包含 3 个）两种方式，分析哪种更健壮。',
        hint: '考虑文档结构变化时的维护成本。',
        answer: '// 排除模式：排除 17 个字段\ndb.users.find({}, {\n  field4: 0, field5: 0, ..., field20: 0\n});\n\n// 包含模式：包含 3 个字段\ndb.users.find({}, {\n  name: 1, email: 1, avatar: 1, _id: 0\n});\n\n// 分析：\n// 1. 当新增字段时：\n//    排除模式：新字段自动返回（可能泄露敏感数据）\n//    包含模式：新字段不返回（安全默认行为）\n//\n// 2. 维护性：\n//    排除模式：字段多时列表很长，容易遗漏\n//    包含模式：只需维护少量字段，更简洁\n//\n// 3. 最佳实践：\n//    对外 API 响应：使用包含模式（白名单更安全）\n//    内部数据处理：使用排除模式（保留大部分上下文）\n//    敏感字段：始终使用排除模式确保不泄露'
      }
    ]
  },

  '9mmxYBtvPYZlvFjQvE-2N': {
    // $slice 操作符
    mentalModel: '$slice 是数组的"切片刀"——从数组中截取指定范围的子集，就像从一叠照片中取出第 5 到第 10 张。支持从头取、从尾取、或跳过若干后取固定数量。',
    handsOn: [
      {
        title: '取数组前 N 个元素',
        cmd: 'db.posts.find({}, { title: 1, comments: { $slice: 3 }, _id: 0 })',
        output: '[\n  {\n    title: "MongoDB Tips",\n    comments: ["Great post!", "Very helpful", "Thanks!"]\n  }\n]',
        explain: '$slice: 3 取 comments 数组的前 3 个元素。如果数组不足 3 个元素，返回整个数组。这是最常用的场景：分页显示评论时只取最新的几条。'
      },
      {
        title: '取数组后 N 个元素',
        cmd: 'db.posts.find({}, { title: 1, comments: { $slice: -2 }, _id: 0 })',
        output: '[\n  {\n    title: "MongoDB Tips",\n    comments: ["Love it!", "Well written"]\n  }\n]',
        explain: '$slice: -2 取数组的最后 2 个元素。负数表示从尾部开始取。适合获取最新的评论或最近的活动记录。'
      },
      {
        title: '跳过并取：[skip, limit]',
        cmd: 'db.leaderboard.find({}, { name: 1, scores: { $slice: [2, 3] }, _id: 0 })',
        output: '[\n  {\n    name: "Alice",\n    scores: [88, 92, 79]\n  }\n]',
        explain: '$slice: [2, 3] 跳过前 2 个元素，然后取 3 个。等价于 scores[2], scores[3], scores[4]。第一个参数是偏移量（从 0 开始），第二个是数量。负偏移表示从尾部开始。'
      },
      {
        title: '在聚合管道中使用 $slice',
        cmd: 'db.orders.aggregate([\n  {\n    $project: {\n      customerId: 1,\n      recentItems: { $slice: ["$items", -5] },\n      _id: 0\n    }\n  }\n])',
        output: '[\n  {\n    customerId: "C001",\n    recentItems: [\n      { product: "Phone", qty: 1 },\n      { product: "Case", qty: 2 }\n    ]\n  }\n]',
        explain: '在聚合管道中 $slice 是一个表达式操作符（不是投影操作符）。语法：{ $slice: [array, n] } 或 { $slice: [array, skip, limit] }。这里取 items 数组的最后 5 个元素。'
      }
    ],
    diagnosis: [
      {
        symptom: '$slice: [10, 5] 对某些文档返回空数组',
        cause: '这些文档的数组长度不足 10 个元素，跳过 10 个后已经没有剩余元素了。$slice 不会报错，只是返回空数组。',
        fix: '这是预期行为。如果需要在应用层处理这种情况，检查返回的数组长度。或者在查询中加条件确保数组足够长：{ "items.10": { $exists: true } }（检查第 11 个元素是否存在）。'
      },
      {
        symptom: '在聚合管道中使用 { $slice: "$items", 3 } 报错 "Expression $slice takes exactly N arguments"',
        cause: '聚合管道中的 $slice 语法与投影中的不同。投影中用 { comments: { $slice: 3 } }，聚合中用 { $slice: ["$items", 3] }（数组参数形式）。',
        fix: '聚合管道中 $slice 必须使用数组参数语法：{ $slice: [arrayExpression, n] }。注意 arrayExpression 需要 $ 引用字段名。投影操作符和聚合操作符的语法不同是常见的混淆点。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '从 blogs 集合查询文章，每篇只返回最新的 2 条评论（comments 数组末尾的 2 个元素），同时返回 title 字段。',
        hint: '使用 $slice: -2 取数组最后 2 个元素。',
        answer: 'db.blogs.find({}, {\n  title: 1,\n  comments: { $slice: -2 },\n  _id: 0\n});'
      },
      {
        level: '进阶',
        task: '实现评论分页功能：给定 page（从 1 开始）和 pageSize，用 $slice 返回对应页的评论。用聚合管道的 $project 实现。',
        hint: 'skip = (page - 1) * pageSize，然后 $slice: [skip, pageSize]',
        answer: 'const page = 3;\nconst pageSize = 10;\nconst skip = (page - 1) * pageSize;\n\ndb.posts.aggregate([\n  { $match: { _id: ObjectId("...") } },\n  {\n    $project: {\n      title: 1,\n      pageComments: { $slice: ["$comments", skip, pageSize] },\n      totalComments: { $size: "$comments" },\n      _id: 0\n    }\n  }\n]);\n// 返回第 3 页的 10 条评论（跳过前 20 条），\n// 同时返回评论总数用于计算总页数。'
      }
    ]
  },

  '-VMIkV6S6H1blngxLXk7Y': {
    // $size 操作符
    mentalModel: '$size 是数组的"计数器"——它匹配数组长度恰好等于指定值的文档，就像检查一个盒子里的物品数量是否刚好是 5 个，但不关心具体是什么物品。',
    handsOn: [
      {
        title: '匹配精确数组长度',
        cmd: 'db.users.find({ hobbies: { $size: 3 } })',
        output: '[\n  { name: "Alice", hobbies: ["reading", "hiking", "coding"] },\n  { name: "Bob", hobbies: ["gaming", "cooking", "music"] }\n]',
        explain: '$size: 3 匹配 hobbies 数组恰好有 3 个元素的文档。注意：$size 不支持范围比较（不能 $gt: 3），只能精确匹配。'
      },
      {
        title: '$size 为 0 匹配空数组',
        cmd: 'db.users.find({ tags: { $size: 0 } })',
        output: '[\n  { name: "Charlie", tags: [] },\n  { name: "Diana", tags: [] }\n]',
        explain: '$size: 0 匹配 tags 为空数组的文档。注意：它不匹配 tags 字段不存在或 tags 不是数组的文档。要匹配字段不存在，用 { tags: { $exists: false } }。'
      },
      {
        title: '配合 $and 实现范围长度匹配',
        cmd: 'db.posts.find({\n  $and: [\n    { "comments.4": { $exists: true } },\n    { "comments.10": { $exists: false } }\n  ]\n})',
        output: '[\n  { title: "Post A", comments: [/* 5-10 个元素 */] }\n]',
        explain: '由于 $size 不支持范围，用点表示法 + $exists 模拟：comments.4 存在说明至少有 5 个元素（索引从 0 开始），comments.10 不存在说明少于 11 个。这样匹配数组长度在 5-10 之间的文档。'
      },
      {
        title: '在聚合管道中用 $size 计算长度',
        cmd: 'db.orders.aggregate([\n  {\n    $project: {\n      orderId: "$_id",\n      itemCount: { $size: "$items" },\n      _id: 0\n    }\n  },\n  { $match: { itemCount: { $gte: 5 } } }\n])',
        output: '[\n  { orderId: ObjectId("..."), itemCount: 7 },\n  { orderId: ObjectId("..."), itemCount: 5 }\n]',
        explain: '聚合管道中的 $size 是表达式操作符，返回数组长度作为新字段的值。与查询操作符不同，聚合中的 $size 可以用于计算和后续比较。这里先计算 itemCount，再过滤 >= 5 的订单。'
      }
    ],
    diagnosis: [
      {
        symptom: '$size 查询很慢，explain() 显示 COLLSCAN',
        cause: '$size 无法使用索引，必须检查每个文档的数组长度。MongoDB 不为数组长度维护索引条目。',
        fix: '在文档中维护一个冗余字段记录数组长度。例如在每次 push 到 comments 数组时，同时 $inc: { commentCount: 1 }。然后对 commentCount 字段创建索引并用范围查询：{ commentCount: 3 }。'
      },
      {
        symptom: '试图用 { arr: { $size: { $gt: 5 } } } 查询长度大于 5 的数组，报错',
        cause: '$size 只接受单个非负整数，不支持范围操作符。这是 MongoDB 的设计限制。',
        fix: '用点表示法代替：{ "arr.5": { $exists: true } } 表示数组至少有 6 个元素（索引 5 存在）。或者维护冗余长度字段后用 { count: { $gt: 5 } } 查询。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 teams 集合中 members 数组恰好有 5 人的团队，返回 teamName 和 members。',
        hint: '使用 { members: { $size: 5 } }',
        answer: 'db.teams.find(\n  { members: { $size: 5 } },\n  { teamName: 1, members: 1, _id: 0 }\n);'
      },
      {
        level: '挑战',
        task: '设计一个方案高效查询数组长度在 10-50 之间的文档（不依赖 $size），并对比与维护冗余长度字段方案的性能差异。',
        hint: '方案一：用点表示法 + $exists 做范围限制。方案二：维护 arrayLength 字段并创建索引。',
        answer: '// 方案一：点表示法（无需修改数据，但不能利用索引）\ndb.collections.find({\n  "arr.9": { $exists: true },   // 至少 10 个元素\n  "arr.50": { $exists: false }  // 少于 51 个元素\n});\n\n// 方案二：冗余长度字段（需要修改数据，但可以走索引）\n// 写入时维护：\ndb.collections.updateOne(\n  { _id: docId },\n  {\n    $push: { arr: newItem },\n    $inc: { arrLength: 1 }\n  }\n);\ndb.collections.createIndex({ arrLength: 1 });\n\n// 查询时：\ndb.collections.find({ arrLength: { $gte: 10, $lte: 50 } });\n\n// 性能对比：\n// 方案一：需要 COLLSCAN 或先走其他索引再过滤，大数据集慢\n// 方案二：IXSCAN，O(log N) 定位，即使亿级数据也很快\n// 代价：每次修改数组都要同步维护 arrLength'
      }
    ]
  },

  'SjPzR6JjdBeIQFsrRJPfW': {
    // Single Field 单字段索引
    mentalModel: '单字段索引是 B-Tree 的"单列电话簿"——按一个字段排序存储所有文档的引用，就像按姓名字母排序的电话簿，让你能快速定位某个人的号码而不用翻遍整本书。',
    handsOn: [
      {
        title: '创建升序单字段索引',
        cmd: 'db.products.createIndex({ price: 1 })',
        output: 'price_1',
        explain: '创建一个按 price 升序排列的 B-Tree 索引。索引中每个条目包含 price 值和对应文档的磁盘位置（RecordId）。查询 { price: 99.99 } 时 MongoDB 在 B-Tree 中二分查找，时间复杂度从 O(N) 降到 O(log N)。'
      },
      {
        title: '验证索引使用效果',
        cmd: 'db.products.find({ price: { $gte: 50, $lte: 100 } }).explain("executionStats")',
        output: '{\n  queryPlanner: {\n    winningPlan: {\n      stage: "FETCH",\n      inputStage: {\n        stage: "IXSCAN",\n        indexName: "price_1",\n        indexBounds: { price: ["50.0", "100.0"] }\n      }\n    }\n  },\n  executionStats: {\n    totalKeysExamined: 350,\n    totalDocsExamined: 350,\n    nReturned: 342\n  }\n}',
        explain: 'IXSCAN 表示使用了索引扫描。indexBounds 显示扫描范围是 price 50 到 100。totalKeysExamined 是检查的索引键数（350），nReturned 是实际返回数（342），比率接近 1 说明索引效率高。'
      },
      {
        title: '单字段索引对排序的支持',
        cmd: '// 无索引时排序需要内存排序（可能溢出到磁盘）\ndb.products.find().sort({ price: 1 }).explain("executionStats");\n\n// 有 price_1 索引后排序直接使用索引顺序\ndb.products.find().sort({ price: -1 }).explain("executionStats");',
        output: '// 有索引时 winningPlan 显示 SORT 阶段被省略\n// 直接用 IXSCAN 的键顺序返回文档\n// 升序索引同样支持降序排序（反向遍历 B-Tree）',
        explain: '单字段索引不仅加速查询，还能避免内存排序。升序索引（1）同样支持降序查询（-1），因为 B-Tree 可以双向遍历。这在大数据集排序时能避免 SORT 阶段的 32MB 内存限制。'
      },
      {
        title: '对嵌套字段创建索引',
        cmd: 'db.restaurants.createIndex({ "address.city": 1 });\n\ndb.restaurants.find({ "address.city": "New York" }).explain();',
        output: 'address.city_1\n// explain 显示 IXSCAN 使用 "address.city_1" 索引',
        explain: '可以对嵌套文档的字段创建索引，用点表示法。索引条目存储的是该路径下的标量值。如果 address 是数组中的嵌套文档，索引会变成多键索引（每个数组元素一个条目）。'
      }
    ],
    diagnosis: [
      {
        symptom: '创建单字段索引后，查询性能反而下降了',
        cause: '可能原因：1) 集合文档很少，全集合扫描比索引查找更快（索引查找需要两次磁盘访问：索引 + 文档）；2) 查询返回大量文档（超过集合 30%），优化器认为全扫描更高效；3) 索引不适合该查询模式（如对数组字段但查询用 $elemMatch）。',
        fix: '用 explain("allPlansExecution") 对比所有候选计划。如果索引确实不适合，可以用 hint() 测试或考虑删除该索引。索引不是万能的——对高选择性（返回少量文档）的查询最有效。'
      },
      {
        symptom: '单字段索引占用的磁盘空间比预期大很多',
        cause: '如果字段值很长（如长字符串或大数值），每个索引条目都存储完整值，导致索引膨胀。另外，多键索引（数组字段）会为每个数组元素创建独立条目，可能使索引大小倍增。',
        fix: '1) 检查索引大小：db.collection.stats().totalIndexSize 和各索引的 size。2) 对长字符串字段考虑 hashed 索引（固定大小）。3) 对数组字段评估是否真的需要索引，或用部分索引减少条目。4) 使用 compact 命令回收碎片空间。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 articles 集合的 publishedAt 字段创建降序索引，然后查询最近 7 天发布的文章，用 explain() 确认使用了索引。',
        hint: 'createIndex({ publishedAt: -1 })，查询用 { publishedAt: { $gte: 七天前 } }',
        answer: 'db.articles.createIndex({ publishedAt: -1 });\n\nconst weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);\n\nconst result = db.articles.find({\n  publishedAt: { $gte: weekAgo }\n}).explain("executionStats");\n\nprint("Stage:", result.queryPlanner.winningPlan.inputStage?.stage);\n// IXSCAN\nprint("Keys examined:", result.executionStats.totalKeysExamined);\nprint("Docs returned:", result.executionStats.nReturned);\n// 理想情况 keysExamined 接近 nReturned'
      },
      {
        level: '进阶',
        task: '对比同一个查询在有索引和无索引时的执行时间差异。使用 10 万条测试数据，查询条件为 { score: { $gte: 90 } }，假设只有 5% 的文档满足条件。',
        hint: '先插入测试数据，测 COLLSCAN 时间，再创建索引测 IXSCAN 时间。',
        answer: '// 生成测试数据\ndb.scores.drop();\nconst bulk = db.scores.initializeUnorderedBulkOp();\nfor (let i = 0; i < 100000; i++) {\n  bulk.insert({ userId: i, score: Math.floor(Math.random() * 100) });\n}\nbulk.execute();\n\n// 无索引测试\ndb.scores.dropIndexes();\nlet start = Date.now();\ndb.scores.find({ score: { $gte: 90 } }).itcount();\nprint("Without index:", Date.now() - start, "ms");\n// COLLSCAN, ~50-200ms\n\n// 有索引测试\ndb.scores.createIndex({ score: 1 });\nstart = Date.now();\ndb.scores.find({ score: { $gte: 90 } }).itcount();\nprint("With index:", Date.now() - start, "ms");\n// IXSCAN, ~5-20ms\n\n// 通常索引方案快 5-20 倍，数据量越大差距越明显'
      }
    ]
  },

  'eSb4WAfWxJu6R95pPX6wm': {
    // Compound 复合索引
    mentalModel: '复合索引是"多列排序电话簿"——先按第一个字段排序，相同值内再按第二个字段排序，就像电话簿先按姓排序、姓相同再按名排序，支持前缀匹配但跳过前导字段就失效。',
    handsOn: [
      {
        title: '创建复合索引',
        cmd: 'db.orders.createIndex({ customerId: 1, createdAt: -1 })',
        output: 'customerId_1_createdAt_-1',
        explain: 'B-Tree 先按 customerId 升序排列，同一客户内再按 createdAt 降序排列。这个索引可以高效支持：1) 查某客户的所有订单；2) 查某客户最近的订单。但不能高效支持：只按 createdAt 查（跳过了前导字段）。'
      },
      {
        title: '前缀查询规则验证',
        cmd: '// ✅ 能使用索引：前导字段 customerId 在查询中\ndb.orders.find({ customerId: "C001", createdAt: { $gte: ISODate("2024-01-01") } }).explain();\n\n// ✅ 能使用索引：只用前导字段\ndb.orders.find({ customerId: "C001" }).explain();\n\n// ❌ 不能高效使用索引：跳过了前导字段\ndb.orders.find({ createdAt: { $gte: ISODate("2024-01-01") } }).explain();',
        output: '// 前两个查询: IXSCAN, indexBounds 中使用 customerId 定位\n// 第三个查询: COLLSCAN 或使用其他索引',
        explain: '复合索引遵循"最左前缀"规则：查询条件必须从索引的第一个字段开始，不能跳过。{ customerId, createdAt } 索引支持 { customerId } 和 { customerId, createdAt } 查询，但不支持单独的 { createdAt }。'
      },
      {
        title: '范围查询对后续字段的影响',
        cmd: '// 索引: { customerId: 1, createdAt: -1, status: 1 }\n// createdAt 是范围查询，status 不能利用索引排序\ndb.orders.find({\n  customerId: "C001",\n  createdAt: { $gte: ISODate("2024-01-01") },\n  status: "completed"\n}).sort({ status: 1 }).explain("executionStats");',
        output: '// indexBounds:\n// customerId: ["C001", "C001"]\n// createdAt: [ISODate("2024-01-01"), MaxKey]\n// status: [MinKey, MaxKey]  ← 无法精确匹配\n// totalDocsExamined 大于 nReturned',
        explain: '复合索引中遇到范围查询（$gte）后，后续字段（status）只能用于过滤，不能利用索引排序或精确边界。这是因为 B-Tree 在 createdAt 范围内，status 的排序是无序的。设计索引时把等值字段放在范围字段前面。'
      },
      {
        title: 'ESR 规则设计复合索引',
        cmd: '// ESR: Equality → Sort → Range\n// 查询: { region: "US", price: { $gt: 100 } } sort { createdAt: -1 }\n// 最优索引: { region: 1, createdAt: -1, price: 1 }\n\ndb.products.createIndex({ region: 1, createdAt: -1, price: 1 });\n\ndb.products.find({\n  region: "US",\n  price: { $gt: 100 }\n}).sort({ createdAt: -1 }).explain("executionStats");',
        output: '// winningPlan: IXSCAN (无 SORT 阶段)\n// totalDocsExamined 接近 nReturned\n// 排序直接使用索引顺序，无需内存排序',
        explain: 'ESR 规则是设计复合索引的黄金法则：1) Equality（等值字段）放最前；2) Sort（排序字段）放中间；3) Range（范围字段）放最后。这样索引既支持精确过滤又避免内存排序。'
      }
    ],
    diagnosis: [
      {
        symptom: '复合索引 { a: 1, b: 1 } 对查询 { b: 5, a: 3 } 有效，但对 { b: 5 } 无效',
        cause: '虽然 MongoDB 的查询优化器会重新排列查询条件顺序来匹配索引（所以 { b: 5, a: 3 } 等价于 { a: 3, b: 5 }），但 { b: 5 } 缺少前导字段 a，无法利用最左前缀。',
        fix: '如果经常按 b 单独查询，额外创建 { b: 1 } 单字段索引。或者调整复合索引顺序，把最常用的过滤字段放第一。但要注意这会影响其他查询的效率。'
      },
      {
        symptom: 'explain() 显示 SORT 阶段消耗大量内存，甚至报 "Sort operation used more than the maximum 33554432 bytes of RAM"',
        cause: '排序字段没有被索引覆盖，MongoDB 必须在内存中排序。当结果集超过 32MB 时，内存排序失败。',
        fix: '创建包含排序字段的复合索引，遵循 ESR 规则。例如查询 { status: "active" }.sort({ score: -1 }) 需要索引 { status: 1, score: -1 }。这样排序直接从索引有序键中读取，无需内存排序。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 events 集合设计复合索引，支持查询 { type: "conference", date: { $gte: startDate } } 并按 date 降序排序。创建索引并用 explain() 验证没有 SORT 阶段。',
        hint: 'ESR 规则：type 是等值（E），date 既是范围（R）又是排序（S），此时 S 和 R 是同一字段，放排序方向即可。',
        answer: '// ESR: Equality(type) → Sort(date) → Range(date 同字段)\ndb.events.createIndex({ type: 1, date: -1 });\n\nconst result = db.events.find({\n  type: "conference",\n  date: { $gte: ISODate("2024-06-01") }\n}).sort({ date: -1 }).explain("executionStats");\n\n// 确认没有 SORT 阶段\nconst plan = result.queryPlanner.winningPlan;\nprint("Has SORT stage:", JSON.stringify(plan).includes("SORT"));\n// false — 排序通过索引顺序完成'
      },
      {
        level: '挑战',
        task: '给定三个查询模式，设计最少数量的复合索引覆盖所有模式：\n1. { region: "X" }.sort({ revenue: -1 })\n2. { region: "X", status: "active" }.sort({ createdAt: -1 })\n3. { status: "pending" }.sort({ createdAt: 1 })',
        hint: '分析每个查询的 ESR，看哪些索引可以共享。',
        answer: '// 分析每个查询的 ESR：\n// Q1: E(region) + S(revenue, -1) → 索引 A: { region: 1, revenue: -1 }\n// Q2: E(region, status) + S(createdAt, -1) → 索引 B: { region: 1, status: 1, createdAt: -1 }\n// Q3: E(status) + S(createdAt, 1) → 索引 C: { status: 1, createdAt: 1 }\n//\n// 能否合并？\n// 索引 B { region: 1, status: 1, createdAt: -1 } 不能服务 Q1（没有 revenue 字段）\n// 索引 C { status: 1, createdAt: 1 } 不能服务 Q2（缺少 region 前缀）\n//\n// 结论：最少需要 3 个索引。\n// 但索引 B 可以稍微调整：{ status: 1, region: 1, createdAt: -1 }\n// 这样 Q2 仍然可以用（status + region 都是等值，顺序无所谓），\n// 但 Q3 不能复用（缺少 region 条件时不能跳过 region 字段）。\n//\n// 最终方案：\ndb.sales.createIndex({ region: 1, revenue: -1 });           // Q1\ndb.sales.createIndex({ region: 1, status: 1, createdAt: -1 }); // Q2\ndb.sales.createIndex({ status: 1, createdAt: 1 });           // Q3'
      }
    ]
  },

  'PV_3TEYdtVZ2VCDZEOsu_': {
    // Text 文本索引
    mentalModel: '文本索引是 MongoDB 内置的"搜索引擎"——它对字符串字段做分词（tokenization）和去停用词，建立倒排索引，支持关键词搜索和文本相关性排序，就像书末的索引页让你按关键词找到相关章节。',
    handsOn: [
      {
        title: '创建文本索引并搜索',
        cmd: 'db.articles.createIndex({ title: "text", body: "text" });\n\ndb.articles.find(\n  { $text: { $search: "mongodb performance tips" } },\n  { score: { $meta: "textScore" } }\n).sort({ score: { $meta: "textScore" } });',
        output: '[\n  {\n    title: "MongoDB Performance Optimization",\n    body: "Tips for improving query performance...",\n    score: 2.5\n  },\n  {\n    title: "Database Best Practices",\n    body: "MongoDB indexing strategies and tips...",\n    score: 1.8\n  }\n]',
        explain: '"text" 类型创建文本索引。$text + $search 执行全文搜索，MongoDB 会分词搜索字符串并做 OR 匹配。$meta: "textScore" 返回相关性评分，用于排序。默认按相关性降序排列。'
      },
      {
        title: '精确短语搜索和排除词',
        cmd: '// 精确短语（用引号包裹）\ndb.articles.find({ $text: { $search: "\\"query optimization\\"" } });\n\n// 排除特定词（用减号前缀）\ndb.articles.find({ $text: { $search: "mongodb -atlas -cloud" } });\n\n// 组合使用\ndb.articles.find({ $text: { $search: "\\"index design\\" -deprecated" } });',
        output: '// 精确短语只匹配包含完整 "query optimization" 的文档\n// 排除词过滤掉包含 atlas 或 cloud 的结果\n// 组合: 必须包含 "index design" 且不包含 "deprecated"',
        explain: '引号内的字符串作为精确短语匹配（所有词按顺序连续出现）。减号前缀排除包含该词的文档。这些特性让 MongoDB 的文本搜索比简单的 LIKE 强大得多。'
      },
      {
        title: '指定语言和使用通配符文本索引',
        cmd: '// 指定语言（影响分词和停用词列表）\ndb.articles.createIndex(\n  { title: "text", body: "text" },\n  { default_language: "chinese", weights: { title: 10, body: 1 } }\n);\n\n// 通配符文本索引（索引所有字符串字段）\ndb.articles.createIndex({ "$**": "text" });',
        output: '// weights 让 title 中的匹配权重是 body 的 10 倍\n// "$**" 对所有字符串字段建立文本索引',
        explain: 'language 影响分词规则和停用词表（如英文停用 the/is/a，中文使用不同的分词器）。weights 调整不同字段的重要性，title: 10 意味着标题中出现关键词的相关性得分是正文中出现的 10 倍。'
      }
    ],
    diagnosis: [
      {
        symptom: '中文文本搜索效果很差，返回很多不相关的结果',
        cause: 'MongoDB 内置的中文分词器比较简单，可能不如专业的中文搜索引擎（如 Elasticsearch 的 IK 分词器）。默认分词器可能按字符或简单的 CJK 规则分词，停用词表也不完善。',
        fix: '1) 创建索引时指定 default_language: "chinese" 或 "none"（禁用停用词和词干化）。2) 考虑使用 $regex 做精确匹配代替全文搜索。3) 对于生产级中文搜索，推荐使用 Elasticsearch 或 Meilisearch，MongoDB 做主存储，搜索数据同步到专用搜索引擎。'
      },
      {
        symptom: '创建文本索引时报 "too many text indexes" 错误',
        cause: 'MongoDB 限制每个集合只能有一个文本索引（除非是通配符文本索引 $**）。你不能为不同字段组合创建多个文本索引。',
        fix: '使用一个文本索引覆盖所有需要搜索的字段。如果之前创建了单字段文本索引，先 dropIndex 再创建覆盖更多字段的索引。或者使用 "$**" 通配符索引覆盖所有字符串字段。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 recipes 集合创建文本索引（覆盖 name, description, ingredients 字段），搜索包含 "chicken" 和 "garlic" 的食谱，按相关性排序。',
        hint: 'createIndex({ name: "text", description: "text", ingredients: "text" })，$search 中用空格分隔多个关键词（默认 OR）。',
        answer: 'db.recipes.createIndex({\n  name: "text",\n  description: "text",\n  ingredients: "text"\n});\n\ndb.recipes.find(\n  { $text: { $search: "chicken garlic" } },\n  { score: { $meta: "textScore" } }\n).sort({ score: { $meta: "textScore" } });\n// 注意："chicken garlic" 是 OR 搜索（包含任一即可）\n// 如果要 AND 搜索（必须同时包含），用：\n// { $search: "\\"chicken\\" \\"garlic\\"" }'
      },
      {
        level: '进阶',
        task: '设计一个博客搜索功能，要求标题匹配权重是正文的 5 倍，标签匹配权重是正文的 3 倍，并排除标记为 draft 的文章。',
        hint: '用 weights 选项设置权重，在 $text 搜索基础上加 $and 条件过滤 draft。',
        answer: '// 创建带权重的文本索引\ndb.posts.createIndex(\n  { title: "text", body: "text", tags: "text" },\n  {\n    weights: { title: 5, tags: 3, body: 1 },\n    name: "blog_search"\n  }\n);\n\n// 搜索并排除 draft\ndb.posts.find({\n  $and: [\n    { $text: { $search: "mongodb indexing" } },\n    { status: { $ne: "draft" } }\n  ]\n}, {\n  score: { $meta: "textScore" }\n}).sort({ score: { $meta: "textScore" } }).limit(20);\n\n// 权重效果：标题出现 "mongodb" 贡献 5 分，\n// 标签出现贡献 3 分，正文出现贡献 1 分。\n// 一篇标题和正文都包含关键词的文章得分高于只在正文中出现的。'
      }
    ]
  },

  'butGgZXGPTZI-sWx24bOr': {
    // TTL 过期索引
    mentalModel: 'TTL 索引是 MongoDB 的"自动过期垃圾桶"——它在后台线程中定期检查并删除过期文档，就像冰箱里的食物过了保质期被自动清理，无需你手动检查和丢弃。',
    handsOn: [
      {
        title: '创建 TTL 索引',
        cmd: 'db.sessions.createIndex(\n  { createdAt: 1 },\n  { expireAfterSeconds: 3600 }\n)',
        output: 'createdAt_1',
        explain: 'TTL 索引建在 Date 类型字段上。expireAfterSeconds: 3600 表示文档在 createdAt 之后 3600 秒（1 小时）过期。后台线程每 60 秒扫描一次，删除过期文档。注意：删除不是精确到秒的，可能有最多 60 秒的延迟。'
      },
      {
        title: '基于特定过期时间的 TTL',
        cmd: '// 每个文档有不同的过期时间\ndb.verifyCodes.createIndex(\n  { expiresAt: 1 },\n  { expireAfterSeconds: 0 }\n);\n\n// 插入时设置过期时间\ndb.verifyCodes.insertOne({\n  phone: "13800138000",\n  code: "123456",\n  expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5分钟后过期\n});',
        output: '// 文档在 expiresAt 指定的时间被自动删除\n// expireAfterSeconds: 0 表示使用文档自身的 Date 字段值作为过期时间',
        explain: '当 expireAfterSeconds 设为 0 时，MongoDB 直接使用索引字段的 Date 值作为过期时间。这允许每个文档有不同的 TTL，比如短信验证码 5 分钟，密码重置链接 24 小时。'
      },
      {
        title: '查看和修改 TTL 设置',
        cmd: '// 查看现有 TTL 索引\ndb.sessions.getIndexes();\n\n// 修改过期时间（不能改索引字段，只能改 expireAfterSeconds）\ndb.runCommand({\n  collMod: "sessions",\n  index: {\n    keyPattern: { createdAt: 1 },\n    expireAfterSeconds: 7200\n  }\n});',
        output: '// getIndexes 显示:\n// { v: 2, key: { createdAt: 1 }, name: "createdAt_1", expireAfterSeconds: 3600 }\n//\n// collMod 修改后 expireAfterSeconds 变为 7200',
        explain: 'collMod 命令可以在线修改 TTL 索引的过期时间，无需删除重建。但不能更改索引的字段或添加新字段。修改立即对新的过期判断生效，但已经过期的文档可能在下一次扫描时才被删除。'
      },
      {
        title: '验证 TTL 删除行为',
        cmd: '// 创建一个 10 秒过期的测试集合\ndb.ttlTest.createIndex({ ts: 1 }, { expireAfterSeconds: 10 });\n\ndb.ttlTest.insertOne({ ts: new Date(), data: "will expire" });\n\n// 等待约 70 秒后检查（TTL 线程每 60 秒运行一次）\ndb.ttlTest.countDocuments();',
        output: '// 刚插入后: count = 1\n// 70 秒后: count = 0 (文档已被 TTL 线程删除)',
        explain: 'TTL 删除有两个时间因素：1) 文档过期时间（expireAfterSeconds）；2) 后台线程扫描间隔（约 60 秒）。所以实际删除时间 = 过期时间 + 最多 60 秒延迟。不能依赖 TTL 做精确定时删除。'
      }
    ],
    diagnosis: [
      {
        symptom: 'TTL 索引创建后文档没有被自动删除',
        cause: '常见原因：1) 索引字段不是 Date 类型（如果是字符串或数字，TTL 不会生效）；2) 索引字段是数组类型（TTL 不支持数组中的 Date）；3) 文档中的 Date 字段不存在；4) 在副本集的 secondary 节点上 TTL 不会运行（只在 primary 上执行删除）。',
        fix: '确认字段类型：db.collection.findOne() 查看字段是否为 ISODate。如果是字符串，用 $dateFromString 转换。确认不在 secondary 上检查。查看 mongod 日志中 TTL 相关的消息。可以用 db.serverStatus().metrics.ttl 查看 TTL 删除统计。'
      },
      {
        symptom: 'TTL 删除导致磁盘 IO 尖峰，影响正常业务',
        cause: '大量文档同时过期时，TTL 后台线程会在短时间内执行大量删除操作，产生大量写 IO 和 oplog 条目（在副本集中）。',
        fix: '1) 错开过期时间：给 expiresAt 加随机偏移量避免集中过期。2) 使用 application 层面的分批删除代替 TTL。3) 如果是日志类数据，考虑使用时间序列集合（time-series collection）或按时间分片。4) 调整磁盘 IO 调度器或在低峰期手动删除。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 cache 集合创建 TTL 索引，使缓存条目在创建后 30 分钟自动过期。插入 3 条测试数据，分别设置不同的创建时间，预测哪条会先被删除。',
        hint: 'expireAfterSeconds: 1800（30分钟 = 1800秒），索引字段必须是 Date 类型。',
        answer: 'db.cache.createIndex({ createdAt: 1 }, { expireAfterSeconds: 1800 });\n\ndb.cache.insertMany([\n  { key: "user:1", value: "data1", createdAt: new Date(Date.now() - 25 * 60 * 1000) }, // 25分钟前创建，5分钟后过期\n  { key: "user:2", value: "data2", createdAt: new Date(Date.now() - 10 * 60 * 1000) }, // 10分钟前创建，20分钟后过期\n  { key: "user:3", value: "data3", createdAt: new Date() }  // 刚创建，30分钟后过期\n]);\n\n// 过期顺序：user:1 → user:2 → user:3\n// 实际删除时间可能比预期晚最多 60 秒（TTL 线程间隔）'
      },
      {
        level: '进阶',
        task: '设计一个"用户活跃度"方案：用户每次操作时刷新活跃时间，如果 30 天没有任何操作则自动标记为不活跃。不使用 TTL 删除文档，而是用 TTL 触发状态变更。',
        hint: 'TTL 只能删除文档，不能更新。考虑将不活跃状态存到单独的集合，或用 Change Stream 监听 TTL 删除事件。',
        answer: '// 方案：TTL 集合 + Change Stream\n\n// 1. 创建活跃跟踪集合，TTL 30 天\ndb.activeTracking.createIndex(\n  { lastActive: 1 },\n  { expireAfterSeconds: 30 * 24 * 3600 }\n);\n\n// 2. 用户每次操作时更新跟踪记录\ndb.activeTracking.updateOne(\n  { userId: "U001" },\n  { $set: { lastActive: new Date() } },\n  { upsert: true }\n);\n\n// 3. 用 Change Stream 监听删除事件\nconst changeStream = db.activeTracking.watch([\n  { $match: { operationType: "delete" } }\n]);\n\nchangeStream.on("change", (event) => {\n  const userId = event.documentKey.userId;\n  // 将用户标记为不活跃\n  db.users.updateOne(\n    { _id: userId },\n    { $set: { status: "inactive", deactivatedAt: new Date() } }\n  );\n});\n\n// 当 TTL 线程删除 activeTracking 记录时，\n// Change Stream 触发回调，将用户状态改为 inactive。'
      }
    ]
  },

  'wbZb0RwmANH4ssF07cAar': {
    // $gt 大于
    mentalModel: '$gt 是"大于门槛"过滤器——它匹配字段值严格大于指定值的文档，就像身高超过 180cm 才能参加篮球选拔，刚好 180cm 不算。',
    handsOn: [
      {
        title: '数值比较',
        cmd: 'db.products.find({ price: { $gt: 100 } })',
        output: '[\n  { name: "Laptop", price: 999 },\n  { name: "Monitor", price: 450 },\n  { name: "Keyboard", price: 150 }\n]',
        explain: '$gt: 100 匹配 price 严格大于 100 的文档。price 恰好等于 100 的不会匹配。注意类型一致性：如果 price 是 Decimal128 类型而查询用整数，可能因为 BSON 类型不同导致匹配失败。'
      },
      {
        title: '日期比较',
        cmd: 'db.orders.find({ createdAt: { $gt: ISODate("2024-06-01") } })',
        output: '[\n  { orderId: "ORD001", createdAt: ISODate("2024-06-15T10:30:00Z") },\n  { orderId: "ORD002", createdAt: ISODate("2024-07-01T08:00:00Z") }\n]',
        explain: '日期字段使用 $gt 时，ISODate("2024-06-01") 表示 2024 年 6 月 1 日 00:00:00 UTC。所有在此时刻之后创建的订单都匹配。注意时区：ISODate 使用 UTC，如果你的应用使用本地时间，需要手动转换。'
      },
      {
        title: '字符串比较',
        cmd: 'db.users.find({ name: { $gt: "M" } }).sort({ name: 1 })',
        output: '[\n  { name: "Nancy" },\n  { name: "Oscar" },\n  { name: "Peter" },\n  { name: "Zara" }\n]',
        explain: '字符串按字典序（lexicographic order）比较。$gt: "M" 匹配所有以 N-Z 开头的名字。注意大小写敏感：小写 "a" > 大写 "Z"，因为 ASCII 码值不同。如果需要不区分大小写的比较，使用 collation。'
      },
      {
        title: '$gt 与索引',
        cmd: 'db.products.createIndex({ price: 1 });\n\ndb.products.find({ price: { $gt: 100 } }).explain("executionStats");',
        output: '// indexBounds: { price: [100.0, MaxKey] }\n// totalKeysExamined 远小于集合文档总数\n// 索引从 price=100 的位置开始向右扫描',
        explain: '$gt 可以高效利用索引。B-Tree 索引直接定位到 price=100 的位置，然后向右扫描所有更大的值。indexBounds 显示 [100, MaxKey]，表示从 100 到最大值的范围。'
      }
    ],
    diagnosis: [
      {
        symptom: '{ price: { $gt: 100 } } 没有匹配到 price 为 100.5 的文档',
        cause: '数据类型不匹配。如果文档中 price 存储为字符串 "100.5" 而非数字 100.5，BSON 比较规则中字符串和数字是不同类型，字符串总是大于数字（按 BSON 类型排序），但具体行为取决于比较方式。',
        fix: '检查字段类型：db.products.findOne({ price: { $type: "string" } })。如果类型不一致，统一为数字类型：db.products.updateMany({}, [{ $set: { price: { $toDouble: "$price" } } }])。然后在应用层确保写入时类型正确。'
      },
      {
        symptom: '{ date: { $gt: new Date("2024-01-01") } } 在 mongosh 中匹配结果与 Node.js 驱动不同',
        cause: 'mongosh 和 Node.js 驱动对 Date 构造的处理可能不同。mongosh 的 new Date() 创建本地时间，而 ISODate() 创建 UTC 时间。Node.js 驱动中 Date 对象默认是 UTC。',
        fix: '始终使用 ISODate() 在 mongosh 中指定日期，确保是 UTC 时间。在应用代码中使用 new Date("2024-01-01T00:00:00Z")（带时区标记）避免歧义。存储和查询都统一用 UTC。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 employees 集合中 salary 严格大于 80000 且 hireDate 在 2023 年 1 月 1 日之后的员工，返回 name, salary, hireDate。',
        hint: '组合两个 $gt 条件在同一查询中。',
        answer: 'db.employees.find(\n  {\n    salary: { $gt: 80000 },\n    hireDate: { $gt: ISODate("2023-01-01") }\n  },\n  { name: 1, salary: 1, hireDate: 1, _id: 0 }\n);'
      },
      {
        level: '进阶',
        task: '解释为什么查询 { score: { $gt: 90 } }.sort({ score: 1 }).limit(10) 在有 score 索引时非常高效，分析 explain() 中 totalKeysExamined 和 nReturned 的关系。',
        hint: '考虑索引排序方向与查询方向的一致性，以及 limit 对扫描范围的影响。',
        answer: '// 有 score_1 索引时：\n// 1. 索引升序排列，$gt: 90 定位到 90 之后\n// 2. sort({ score: 1 }) 与索引方向一致，无需额外排序\n// 3. limit(10) 只需要扫描 10 个索引条目就停止\n// \n// 所以 totalKeysExamined = 10, nReturned = 10\n// 效率比 1.0（完美索引利用）\n//\n// 对比：如果 sort({ score: -1 })\n// 索引升序但排序降序，需要反向扫描\n// 仍然高效（B-Tree 支持双向遍历）\n//\n// 但如果查询是 { score: { $gt: 90 } }.sort({ name: 1 })\n// 排序字段与索引字段不同，需要内存排序\n// totalKeysExamined 可能远大于 10\n\ndb.students.find({ score: { $gt: 90 } })\n  .sort({ score: 1 })\n  .limit(10)\n  .explain("executionStats");\n// totalKeysExamined: 10, nReturned: 10'
      }
    ]
  },

  '5-MLEEigFPRloN7wLa05T': {
    // $lt 小于
    mentalModel: '$lt 是"低于天花板"过滤器——它匹配字段值严格小于指定值的文档，就像考试分数低于 60 分的需要补考，刚好 60 分不算不及格。',
    handsOn: [
      {
        title: '数值范围查询',
        cmd: 'db.products.find({ stock: { $lt: 10 } })',
        output: '[\n  { name: "Widget A", stock: 3 },\n  { name: "Widget B", stock: 0 },\n  { name: "Widget C", stock: 7 }\n]',
        explain: '$lt: 10 匹配 stock 严格小于 10 的文档。适合低库存预警场景。stock 恰好为 10 的不会匹配。'
      },
      {
        title: '组合 $gt 和 $lt 做范围查询',
        cmd: 'db.orders.find({\n  total: { $gt: 100, $lt: 500 }\n}).sort({ total: 1 })',
        output: '[\n  { orderId: "ORD001", total: 150 },\n  { orderId: "ORD002", total: 299 },\n  { orderId: "ORD003", total: 450 }\n]',
        explain: '$gt 和 $lt 在同一字段上组合形成开区间 (100, 500)。MongoDB 隐式将两个条件用 AND 连接。索引扫描范围是 [100, 500]，但两端的精确值不匹配。'
      },
      {
        title: '日期上界查询',
        cmd: 'db.events.find({\n  startDate: { $lt: ISODate("2024-12-31") }\n}).sort({ startDate: -1 }).limit(5)',
        output: '[\n  { title: "Holiday Party", startDate: ISODate("2024-12-20") },\n  { title: "Year Review", startDate: ISODate("2024-12-15") }\n]',
        explain: '$lt 日期上界配合降序排序和 limit，获取截止日期之前的最近事件。索引从 ISODate("2024-12-31") 位置向左扫描（降序方向），取前 5 条。'
      }
    ],
    diagnosis: [
      {
        symptom: '{ age: { $lt: 30 } } 没有匹配到 age 为 25 的文档',
        cause: '可能 age 字段存储为字符串 "25" 而非数字。BSON 比较中，字符串类型总是大于数字类型，所以 "25" > 30 在 BSON 比较中为 true（因为类型优先级 String > Number），$lt: 30 不匹配。',
        fix: '检查类型一致性：db.users.find({ age: { $type: "string" } })。修复数据类型：db.users.updateMany({ age: { $type: "string" } }, [{ $set: { age: { $toInt: "$age" } } }])。确保写入时 age 是数字类型。'
      },
      {
        symptom: '$lt 和 $gt 组合的范围查询走了索引但 totalDocsExamined 很大',
        cause: '范围太宽（如 $gt: 0, $lt: 1000000），匹配了大量文档。即使使用了索引扫描，检查的文档数仍然很多。',
        fix: '1) 缩小范围或添加更多过滤条件。2) 使用覆盖查询（covered query）：如果查询和投影的字段都在索引中，不需要回表取文档，totalDocsExamined 为 0。3) 考虑分页处理大结果集。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 inventory 集合中 quantity 低于安全库存线（reorderLevel）的产品。用 $expr 比较两个字段。',
        hint: '使用 $expr: { $lt: ["$quantity", "$reorderLevel"] }',
        answer: 'db.inventory.find({\n  $expr: { $lt: ["$quantity", "$reorderLevel"] }\n});\n// $expr 允许在查询中比较同一文档的不同字段\n// 返回所有 quantity < reorderLevel 的产品（需要补货）'
      },
      {
        level: '进阶',
        task: '实现一个"价格区间搜索"功能：用户输入最低价和最高价，查询 products 集合。如果只输入最低价用 $gte，只输入最高价用 $lte，都输入用范围查询。考虑如何用动态查询对象实现。',
        hint: '根据输入动态构建查询对象，不要硬编码所有情况。',
        answer: 'function searchByPrice(minPrice, maxPrice) {\n  const filter = {};\n  const priceFilter = {};\n  \n  if (minPrice !== null && minPrice !== undefined) {\n    priceFilter.$gte = minPrice;\n  }\n  if (maxPrice !== null && maxPrice !== undefined) {\n    priceFilter.$lte = maxPrice;\n  }\n  \n  if (Object.keys(priceFilter).length > 0) {\n    filter.price = priceFilter;\n  }\n  \n  return db.products.find(filter).sort({ price: 1 });\n}\n\n// 使用示例：\nsearchByPrice(50, 200);    // { price: { $gte: 50, $lte: 200 } }\nsearchByPrice(50, null);   // { price: { $gte: 50 } }\nsearchByPrice(null, 200);  // { price: { $lte: 200 } }\nsearchByPrice(null, null); // {} 无过滤\n\n// 配合索引 { price: 1 } 所有情况都能高效利用索引'
      }
    ]
  },

  '12kfpSapv2uNxpHzLkFSL': {
    // $exists 操作符
    mentalModel: '$exists 是"字段存在探测器"——它检查文档中是否存在某个字段（不管值是什么），就像检查表格中某列是否填写了内容，哪怕是填了"无"也算存在，只有完全空白（字段缺失）才算不存在。',
    handsOn: [
      {
        title: '查找字段存在的文档',
        cmd: 'db.users.find({ email: { $exists: true } })',
        output: '[\n  { name: "Alice", email: "alice@mail.com" },\n  { name: "Bob", email: "" },\n  { name: "Charlie", email: null }\n]',
        explain: '$exists: true 匹配 email 字段存在的文档，即使值为 null 或空字符串。在 MongoDB 中，"字段存在"意味着文档的 BSON 结构中有这个键，即使值是 null。'
      },
      {
        title: '查找字段不存在的文档',
        cmd: 'db.users.find({ phone: { $exists: false } })',
        output: '[\n  { name: "Alice", email: "alice@mail.com" },\n  { name: "Bob", email: "bob@mail.com", age: 25 }\n]',
        explain: '$exists: false 匹配 phone 字段不存在的文档。这些文档的 BSON 结构中完全没有 phone 键。注意：null 值的字段也算"存在"，不会被 $exists: false 匹配。'
      },
      {
        title: '$exists 与 null 的微妙区别',
        cmd: '// $exists: false —— 字段完全不存在\ndb.users.find({ phone: { $exists: false } });\n\n// 值为 null —— 字段存在但值是 null\ndb.users.find({ phone: null });\n\n// 两者结合 —— 字段不存在或值为 null\ndb.users.find({ phone: { $in: [null], $exists: true } });',
        output: '// $exists: false 不匹配 { phone: null }\n// { phone: null } 匹配 phone 为 null 的文档，也匹配 phone 不存在的文档\n// 这是 MongoDB 的特殊行为：查询 null 同时匹配 null 值和字段缺失',
        explain: 'MongoDB 中 { field: null } 是一个特殊情况：它同时匹配 field 值为 null 和 field 不存在的文档。如果需要精确区分，用 $exists + $type 组合。'
      },
      {
        title: '$exists 与索引',
        cmd: '// $exists 在稀疏索引上的行为\ndb.users.createIndex({ email: 1 }, { sparse: true });\n\ndb.users.find({ email: { $exists: true } }).explain();',
        output: '// 稀疏索引只为 email 字段存在的文档创建索引条目\n// $exists: true 可以使用稀疏索引（IXSCAN）\n// $exists: false 不能使用稀疏索引（COLLSCAN）',
        explain: '稀疏索引（sparse index）跳过字段不存在的文档。$exists: true 查询可以利用稀疏索引，因为索引中只包含字段存在的文档。但 $exists: false 不能用稀疏索引，因为缺失字段的文档不在索引中。'
      }
    ],
    diagnosis: [
      {
        symptom: '{ field: { $exists: false } } 查询很慢，无法使用索引',
        cause: '$exists: false 几乎无法使用标准索引，因为索引存储的是"存在的值"，不存储"不存在的标记"。MongoDB 必须做全集合扫描来找出缺少字段的文档。',
        fix: '1) 使用部分索引（partial index）：db.collection.createIndex({ field: 1 }, { partialFilterExpression: { field: { $exists: false } } })。2) 维护一个冗余标记字段：写入时如果 field 缺失则设 hasField: false，对 hasField 建索引。3) 确保 schema 一致性，所有文档都包含该字段（可以用 null 值）。'
      },
      {
        symptom: '{ field: null } 匹配了意料之外的文档',
        cause: '{ field: null } 不仅匹配 field 值为 null 的文档，还匹配 field 不存在的文档。这是 MongoDB 的默认行为，很多开发者不知道这个"隐式匹配缺失字段"的特性。',
        fix: '如果只想匹配 null 值（排除字段缺失），用 { field: { $eq: null, $exists: true } }。如果只想匹配字段缺失，用 { field: { $exists: false } }。在关键查询中明确你的意图。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '从 contacts 集合中查找有邮箱地址（email 字段存在且不为 null）的联系人，以及没有邮箱的联系人，分别输出两组结果。',
        hint: '有邮箱：{ email: { $exists: true, $ne: null } }。没有邮箱：{ $or: [{ email: { $exists: false } }, { email: null }] }',
        answer: '// 有有效邮箱的联系人\nconst withEmail = db.contacts.find({\n  email: { $exists: true, $ne: null }\n}).toArray();\n\n// 没有邮箱的联系人（字段不存在或值为 null）\nconst withoutEmail = db.contacts.find({\n  $or: [\n    { email: { $exists: false } },\n    { email: null }\n  ]\n}).toArray();\n\n// 或者更简洁地（利用 { email: null } 同时匹配 null 和不存在）：\nconst withoutEmailSimple = db.contacts.find({\n  email: null\n}).toArray();\n\nprint("With email:", withEmail.length);\nprint("Without email:", withoutEmail.length);'
      },
      {
        level: '进阶',
        task: '为 users 集合编写一个数据迁移脚本：找到所有缺少 createdAt 字段的文档，根据 _id 中的时间戳补充 createdAt 值。',
        hint: 'ObjectId 的 getTimestamp() 方法可以提取创建时间。用 $exists: false 找到缺失字段的文档。',
        answer: '// 找到所有缺少 createdAt 的文档\nconst cursor = db.users.find({ createdAt: { $exists: false } });\nconst bulk = db.users.initializeUnorderedBulkOp();\nlet count = 0;\n\ncursor.forEach(doc => {\n  const timestamp = doc._id.getTimestamp();\n  bulk.find({ _id: doc._id }).updateOne({\n    $set: { createdAt: timestamp }\n  });\n  count++;\n  if (count % 500 === 0) {\n    bulk.execute();\n    print("Migrated", count);\n  }\n});\n\nif (count % 500 !== 0) bulk.execute();\nprint("Total migrated:", count);\n\n// 验证：确认没有缺失 createdAt 的文档\nprint("Remaining without createdAt:",\n  db.users.countDocuments({ createdAt: { $exists: false } }));'
      }
    ]
  },

  'BxzMbF7cdvGPuy1EcRvWd': {
    // $type 操作符
    mentalModel: '$type 是 BSON 的"血型检测仪"——它按底层数据类型（string/double/int/date/array 等）筛选文档，就像医院验血区分 A/B/O 型，让你精确匹配字段是什么类型而非字段的值是什么。',
    handsOn: [
      {
        title: '按类型名称查询',
        cmd: '// 查找 age 字段为字符串类型的文档（数据脏数据检测）\ndb.users.find({ age: { $type: "string" } })',
        output: '[\n  { name: "Alice", age: "25" },\n  { name: "Bob", age: "thirty" }\n]',
        explain: '$type 接受类型名称字符串。常用类型：string, int, double, long, date, bool, objectId, array, object, null, decimal, regex, binData, timestamp, javascript。这个查询用于发现数据类型不一致的脏数据。'
      },
      {
        title: '按 BSON 类型编号查询',
        cmd: '// 类型编号: 2=string, 16=int32, 1=double, 9=date, 4=array\ndb.users.find({ age: { $type: 2 } })\n\n// 匹配多种类型\ndb.users.find({ age: { $type: ["int", "double", "long"] } })',
        output: '// 第一个查询：匹配 age 为字符串的文档\n// 第二个查询：匹配 age 为任意数字类型的文档',
        explain: '$type 也接受 BSON 类型编号（数字）。实际使用中推荐用类型名称更直观。数组参数允许匹配多种类型——适合"字段应该是数字但不确定是 int 还是 double"的场景。'
      },
      {
        title: '$type 检测数组类型',
        cmd: '// 查找 tags 字段是数组的文档\ndb.products.find({ tags: { $type: "array" } })\n\n// 查找 tags 不是数组的文档（数据异常检测）\ndb.products.find({ tags: { $not: { $type: "array" } } })',
        output: '[\n  { name: "Widget", tags: ["sale", "new"] }\n]\n// 第二个查询可能返回:\n// { name: "Gadget", tags: "single-tag" }  ← 应该是数组但存了字符串',
        explain: '当字段期望是数组但有时被存为字符串时，$type 可以快速发现不一致。$type: "array" 对应 BSON 类型编号 4。'
      },
      {
        title: '$type "number" 通配',
        cmd: '// "number" 是特殊别名，匹配 int(16), long(18), double(1), decimal(19)\ndb.products.find({ price: { $type: "number" } })',
        output: '[\n  { name: "Item A", price: 99.99 },\n  { name: "Item B", price: NumberInt("50") },\n  { name: "Item C", price: NumberLong("1000") }\n]',
        explain: '"number" 是 $type 的特殊别名，一次性匹配所有 BSON 数字类型（int32, int64, double, decimal128）。当你不关心具体是哪种数字只关心"它是数字"时非常有用。'
      }
    ],
    diagnosis: [
      {
        symptom: '查询 { score: { $gt: 90 } } 返回结果中缺少某些 score 为 "95" 的文档',
        cause: 'score 字段在某些文档中存储为字符串 "95" 而非数字 95。BSON 类型排序中字符串大于数字，所以 "95" 在比较时不按数值比较，$gt: 90 对字符串 "95" 的行为不是数值比较。',
        fix: '1) 诊断：db.collection.find({ score: { $type: "string" } }) 找出字符串类型的文档。2) 修复：db.collection.updateMany({ score: { $type: "string" } }, [{ $set: { score: { $toDouble: "$score" } } }])。3) 在写入时做类型校验（使用 schema validation 或应用层校验）。'
      },
      {
        symptom: '用 $type: "object" 查询时，数组类型的文档也被匹配了',
        cause: '这不应该发生。BSON 中 object（类型 3）和 array（类型 4）是不同的类型。如果确实发生了，检查查询语法是否正确，以及是否用了 $not 等修饰符改变了语义。',
        fix: '确认查询是 { field: { $type: "object" } } 而非 { field: { $type: ["object", "array"] } }。如果需要精确匹配普通文档，用 $type: "object"。如果还要排除 null，加 { field: { $type: "object", $ne: null } }。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '对 users 集合做数据质量检查：分别统计 email 字段为 string、null、array、以及不存在的文档数量。',
        hint: '用 countDocuments() 配合不同的 $type 和 $exists 条件。',
        answer: 'const stringCount = db.users.countDocuments({ email: { $type: "string" } });\nconst nullCount = db.users.countDocuments({ email: { $type: "null" } });\nconst arrayCount = db.users.countDocuments({ email: { $type: "array" } });\nconst missingCount = db.users.countDocuments({ email: { $exists: false } });\n\nprint("String:", stringCount);\nprint("Null:", nullCount);\nprint("Array:", arrayCount);\nprint("Missing:", missingCount);\nprint("Total:", db.users.countDocuments({}));\n// Total 应该等于四项之和'
      },
      {
        level: '进阶',
        task: '编写一个自动化数据清洗脚本：将 users 集合中所有 age 为字符串的文档转换为整数，同时处理无法转换的值（如 "thirty"）。',
        hint: '用 $type: "string" 找到目标文档，尝试 parseInt()，对 NaN 值设为 null 或记录到异常日志。',
        answer: 'const cursor = db.users.find({ age: { $type: "string" } });\nconst bulk = db.users.initializeUnorderedBulkOp();\nlet converted = 0, failed = 0;\n\ncursor.forEach(doc => {\n  const parsed = parseInt(doc.age, 10);\n  if (!isNaN(parsed) && parsed >= 0 && parsed <= 150) {\n    bulk.find({ _id: doc._id }).updateOne({ $set: { age: parsed } });\n    converted++;\n  } else {\n    bulk.find({ _id: doc._id }).updateOne({\n      $set: { age: null, ageParseError: "invalid value: " + doc.age }\n    });\n    failed++;\n  }\n});\n\nif (converted + failed > 0) bulk.execute();\nprint("Converted:", converted, "Failed:", failed);\n\n// 验证\nprint("Remaining string ages:",\n  db.users.countDocuments({ age: { $type: "string" } }));'
      }
    ]
  },

  'bqXlDnPuMQIKulD9cTvPf': {
    // Geospatial 地理空间索引
    mentalModel: '地理空间索引是 MongoDB 的"地图搜索引擎"——它将经纬度坐标建立成 R-Tree 或 2dsphere 索引，支持"附近有什么"、"两点距离"、"是否在区域内"等空间查询，就像外卖 APP 找附近 3 公里内的餐厅。',
    handsOn: [
      {
        title: '创建 2dsphere 索引并插入 GeoJSON 数据',
        cmd: 'db.restaurants.createIndex({ location: "2dsphere" });\n\ndb.restaurants.insertMany([\n  {\n    name: "Pizza Palace",\n    location: { type: "Point", coordinates: [116.4074, 39.9042] }\n  },\n  {\n    name: "Noodle House",\n    location: { type: "Point", coordinates: [116.4174, 39.9142] }\n  },\n  {\n    name: "Tea Garden",\n    location: { type: "Point", coordinates: [116.4274, 39.9242] }\n  }\n]);',
        output: '// 创建 2dsphere 索引成功\n// 插入 3 个餐厅（坐标在北京附近）',
        explain: 'GeoJSON 格式：{ type: "Point", coordinates: [经度, 纬度] }。注意 coordinates 数组是 [longitude, latitude] 顺序（经度在前），这与很多地图 API（纬度在前）不同。2dsphere 索引基于球面几何计算距离和面积。'
      },
      {
        title: '$near 查找附近文档',
        cmd: 'db.restaurants.find({\n  location: {\n    $near: {\n      $geometry: { type: "Point", coordinates: [116.4074, 39.9042] },\n      $maxDistance: 5000\n    }\n  }\n})',
        output: '[\n  { name: "Pizza Palace", location: { type: "Point", coordinates: [116.4074, 39.9042] } },\n  { name: "Noodle House", location: { type: "Point", coordinates: [116.4174, 39.9142] } }\n]',
        explain: '$near 按距离从近到远返回文档。$maxDistance: 5000 限制在 5000 米（5 公里）内。$near 必须配合 2dsphere 索引使用。结果自动按距离排序，无需额外 sort()。'
      },
      {
        title: '$geoWithin 区域包含查询',
        cmd: '// 查找多边形区域内的餐厅\nconst area = {\n  type: "Polygon",\n  coordinates: [[\n    [116.40, 39.90],\n    [116.45, 39.90],\n    [116.45, 39.93],\n    [116.40, 39.93],\n    [116.40, 39.90]\n  ]]\n};\n\ndb.restaurants.find({\n  location: { $geoWithin: { $geometry: area } }\n})',
        output: '[\n  { name: "Pizza Palace", ... },\n  { name: "Noodle House", ... },\n  { name: "Tea Garden", ... }\n]',
        explain: '$geoWithin 查找完全在指定几何区域内的文档。支持 Polygon（多边形）、MultiPolygon、以及 $centerSphere（圆形区域）。与 $near 不同，$geoWithin 不要求结果按距离排序，性能更好。'
      },
      {
        title: '$geoNear 聚合管道阶段',
        cmd: 'db.restaurants.aggregate([\n  {\n    $geoNear: {\n      near: { type: "Point", coordinates: [116.41, 39.91] },\n      distanceField: "distance",\n      maxDistance: 10000,\n      query: { rating: { $gte: 4 } },\n      spherical: true\n    }\n  }\n])',
        output: '[\n  {\n    name: "Noodle House",\n    location: { type: "Point", coordinates: [116.4174, 39.9142] },\n    distance: 892.5\n  }\n]',
        explain: '$geoNear 是聚合管道中的地理空间阶段，比 $near 更强大：它可以输出距离字段（distanceField）、配合其他过滤条件（query）、并且结果可以在后续聚合阶段中使用。每个集合的聚合管道中只能有一个 $geoNear，且必须是第一个阶段。'
      }
    ],
    diagnosis: [
      {
        symptom: '创建 2dsphere 索引时报 "location object expected" 错误',
        cause: '文档的 location 字段不符合 GeoJSON 格式。常见问题：1) 坐标顺序错误（纬度在前而非经度在前）；2) 缺少 type: "Point"；3) 坐标是嵌套对象而非数组；4) 经纬度超出范围（经度 -180~180，纬度 -90~90）。',
        fix: '确保格式正确：{ type: "Point", coordinates: [longitude, latitude] }。经度范围 -180~180，纬度 -90~90。检查数据：db.restaurants.find({ "location.coordinates.0": { $not: { $gte: -180, $lte: 180 } } }) 找异常经度。'
      },
      {
        symptom: '$near 查询报错 "unable to find index for $geoNear query"',
        cause: '目标字段上没有 2dsphere 或 2d 索引。$near 和 $geoNear 必须有地理空间索引才能工作。',
        fix: '创建索引：db.collection.createIndex({ location: "2dsphere" })。如果字段名不是 location，替换为你的实际字段名。注意：每个集合可以有多个 2dsphere 索引（不同字段），但 2d 索引只能有一个。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 stores 集合创建 2dsphere 索引，然后查找距离坐标 [121.4737, 31.2304]（上海）5 公里以内的所有门店，按距离排序。',
        hint: 'createIndex({ location: "2dsphere" })，$near + $maxDistance: 5000',
        answer: 'db.stores.createIndex({ location: "2dsphere" });\n\ndb.stores.find({\n  location: {\n    $near: {\n      $geometry: { type: "Point", coordinates: [121.4737, 31.2304] },\n      $maxDistance: 5000\n    }\n  }\n});\n// 结果自动按距离从近到远排序'
      },
      {
        level: '挑战',
        task: '设计一个"配送范围"系统：每个餐厅有一个配送区域（多边形），用户输入位置，判断该位置在哪些餐厅的配送范围内。用 $geoIntersects 或 $geoWithin 实现。',
        hint: '将配送区域存为 Polygon，用户位置为 Point，用 $geoIntersects 查询包含该点的多边形。',
        answer: '// 存储餐厅及配送区域\ndb.deliveryZones.insertMany([\n  {\n    restaurant: "Pizza Palace",\n    zone: {\n      type: "Polygon",\n      coordinates: [[\n        [116.39, 39.89], [116.43, 39.89],\n        [116.43, 39.92], [116.39, 39.92],\n        [116.39, 39.89]\n      ]]\n    }\n  },\n  {\n    restaurant: "Noodle Express",\n    zone: {\n      type: "Polygon",\n      coordinates: [[\n        [116.41, 39.91], [116.46, 39.91],\n        [116.46, 39.94], [116.41, 39.94],\n        [116.41, 39.91]\n      ]]\n    }\n  }\n]);\n\ndb.deliveryZones.createIndex({ zone: "2dsphere" });\n\n// 用户位置\nconst userLocation = {\n  type: "Point",\n  coordinates: [116.415, 39.915]\n};\n\n// 查找能配送到用户位置的餐厅\ndb.deliveryZones.find({\n  zone: {\n    $geoIntersects: {\n      $geometry: userLocation\n    }\n  }\n});\n// 返回所有配送区域覆盖用户位置的餐厅\n// 如果用户位置在两个区域的重叠部分，两个都会返回'
      }
    ]
  },

  'kV5Tmu9ocDnuPQvkx2W0u': {
    // $gte 大于等于
    mentalModel: '$gte 是"达到门槛即可"过滤器——字段值大于或等于指定值都匹配，就像电影院规定"身高 120cm 及以上需购票"，120cm 刚好也需要买票。',
    handsOn: [
      {
        title: '数值 $gte 查询',
        cmd: 'db.students.find({ score: { $gte: 60 } }).sort({ score: 1 })',
        output: '[\n  { name: "Charlie", score: 60 },\n  { name: "Diana", score: 75 },\n  { name: "Alice", score: 92 }\n]',
        explain: '$gte: 60 匹配 score >= 60 的文档。注意 score 恰好为 60 的文档也会匹配（与 $gt 的区别）。配合 sort 可以获取"及格线以上"的学生并按分数排序。'
      },
      {
        title: '日期 $gte 实现时间范围查询',
        cmd: '// 查询本月创建的订单\nconst monthStart = new Date();\nmonthStart.setDate(1);\nmonthStart.setHours(0, 0, 0, 0);\n\ndb.orders.find({\n  createdAt: { $gte: monthStart }\n}).sort({ createdAt: -1 })',
        output: '[\n  { orderId: "ORD100", createdAt: ISODate("2024-07-15T14:30:00Z") },\n  { orderId: "ORD099", createdAt: ISODate("2024-07-01T00:00:01Z") }\n]',
        explain: '计算当月第一天作为下界，$gte 匹配该日期及之后的所有文档。这是实现"本月数据"查询的标准模式。注意日期对象是 JavaScript Date，会自动转换为 BSON Date。'
      },
      {
        title: '$gte + $lte 构成闭区间',
        cmd: 'db.products.find({\n  price: { $gte: 50, $lte: 200 }\n})',
        output: '[\n  { name: "Keyboard", price: 50 },\n  { name: "Mouse", price: 99 },\n  { name: "Headphones", price: 200 }\n]',
        explain: '$gte 50 和 $lte 200 构成闭区间 [50, 200]，两端的值都匹配。这与 $gt + $lt 的开区间 (50, 200) 不同。在价格搜索中，闭区间更符合用户直觉："50 到 200 元之间"通常包含边界值。'
      }
    ],
    diagnosis: [
      {
        symptom: '$gte 日期查询返回了比预期更多的文档，包含了前一天的数据',
        cause: '时区问题。JavaScript 的 new Date("2024-07-01") 在不同环境中可能解释为 UTC 或本地时间。mongosh 中 new Date("2024-07-01") 可能是本地时区的 2024-07-01 00:00:00，转为 UTC 后变成前一天的 16:00:00。',
        fix: '始终用 ISODate("2024-07-01T00:00:00Z")（显式 UTC）在 mongosh 中。在应用代码中用 new Date("2024-07-01T00:00:00.000Z")（带 Z 后缀确保 UTC）。避免使用无时区标记的日期字符串。'
      },
      {
        symptom: '$gte 查询在混合类型字段上结果不完整',
        cause: '字段在不同文档中类型不同（如有些是数字 50，有些是字符串 "50"）。BSON 比较规则中，不同类型之间的大小比较按类型优先级而非值来排序，导致字符串 "50" 不会匹配 $gte: 50（数字）。',
        fix: '统一字段类型。先用 $type 诊断：db.collection.find({ field: { $not: { $type: "number" } } })。然后批量转换类型。在写入时做类型校验防止再次出现不一致。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 employees 集合中入职日期在 2023 年全年（含 2023-01-01 和 2023-12-31）的员工，返回 name 和 hireDate。',
        hint: '用 $gte 和 $lte 构成闭区间。',
        answer: 'db.employees.find(\n  {\n    hireDate: {\n      $gte: ISODate("2023-01-01T00:00:00Z"),\n      $lte: ISODate("2023-12-31T23:59:59Z")\n    }\n  },\n  { name: 1, hireDate: 1, _id: 0 }\n);'
      },
      {
        level: '进阶',
        task: '实现一个"滑动窗口"查询：查找最近 24 小时到 48 小时之间（不含最近 24 小时，含 48 小时前那一刻）创建的日志条目。',
        hint: '计算两个时间点，用 $gt（不含最近 24h）和 $lte（含 48h 前）。',
        answer: 'const now = new Date();\nconst h24ago = new Date(now.getTime() - 24 * 60 * 60 * 1000);\nconst h48ago = new Date(now.getTime() - 48 * 60 * 60 * 1000);\n\ndb.logs.find({\n  createdAt: { $gt: h48ago, $lte: h24ago }\n}).sort({ createdAt: -1 });\n\n// 时间线：h48ago ←──匹配区间──→ h24ago ←──不匹配──→ now\n// $gt h48ago：严格在 48h 前之后（不含 48h 那一刻... 等等，题目要求含 48h）\n// 修正：如果需要含 48h 前那一刻，用 $gte\ndb.logs.find({\n  createdAt: { $gte: h48ago, $lt: h24ago }\n}).sort({ createdAt: -1 });'
      }
    ]
  },

  'Q8dr1JPEnLX0z4DiQwnAz': {
    // $ne 不等于
    mentalModel: '$ne 是"排除特定值"过滤器——匹配字段值不等于指定值的所有文档，就像一个"VIP 通道"：只要你不是黑名单上的那个人就可以进入，但没带身份证（字段不存在）的人也被允许进入。',
    handsOn: [
      {
        title: '基础 $ne 查询',
        cmd: 'db.users.find({ role: { $ne: "guest" } })',
        output: '[\n  { name: "Alice", role: "admin" },\n  { name: "Bob", role: "editor" },\n  { name: "Charlie" }  // role 字段不存在也匹配\n]',
        explain: '$ne: "guest" 匹配 role 不等于 "guest" 的文档。重要：字段不存在的文档也会匹配（因为"不存在"也不等于 "guest"）。如果不想包含字段缺失的文档，需要加 { role: { $exists: true, $ne: "guest" } }。'
      },
      {
        title: '$ne 与数组字段',
        cmd: 'db.posts.find({ tags: { $ne: "draft" } })',
        output: '[\n  { title: "Published Post", tags: ["tech", "mongodb"] },\n  { title: "No Tags Post" }  // 无 tags 字段\n]',
        explain: '当 tags 是数组时，$ne: "draft" 排除任何包含 "draft" 元素的数组。即 { tags: ["tech", "draft"] } 不匹配（因为数组中有 "draft"），{ tags: ["tech"] } 匹配。这是"数组中没有任何元素等于该值"的语义。'
      },
      {
        title: '$ne 配合 null 值',
        cmd: '// 查找 email 不为 null 的文档\ndb.users.find({ email: { $ne: null } })',
        output: '[\n  { name: "Alice", email: "alice@mail.com" },\n  { name: "Bob", email: "bob@mail.com" }\n]',
        explain: '$ne: null 匹配 email 值不为 null 的文档。注意：它同时排除了 email 字段不存在的文档（因为 { field: null } 匹配字段不存在，$ne: null 就排除了这些文档）。这是一个常用的"查找有有效值的文档"的模式。'
      },
      {
        title: '$ne 与索引效率',
        cmd: 'db.users.find({ status: { $ne: "deleted" } }).explain("executionStats")',
        output: '// 通常显示 COLLSCAN 或 IXSCAN 但扫描大量键\n// totalKeysExamined 通常远大于 nReturned\n// 因为 $ne 需要扫描"不等于"的所有值',
        explain: '$ne 通常无法高效使用索引——因为"不等于"覆盖了索引的大部分范围。优化器可能选择全集合扫描。如果删除用户是少数，用正向匹配 { status: { $in: ["active", "inactive"] } } 代替 $ne 更高效。'
      }
    ],
    diagnosis: [
      {
        symptom: '$ne 查询返回了字段不存在的文档，不符合预期',
        cause: '这是 $ne 的设计行为：字段不存在的文档也被认为"不等于"指定值。MongoDB 对"缺失"的处理与 SQL 的 NULL 不同——SQL 中 NULL != "x" 返回 NULL（被 WHERE 过滤），MongoDB 中缺失字段 $ne "x" 返回 true。',
        fix: '如果需要排除字段不存在的文档，加 $exists: true：{ field: { $exists: true, $ne: "value" } }。或者列出所有合法的值用 $in 代替 $ne。'
      },
      {
        symptom: '在更新操作中 $ne 不能用于过滤数组元素',
        cause: '$ne 在查询条件中的数组语义是"数组中没有任何元素等于该值"。但在数组过滤操作中（如 positional filtered operator $[<identifier>]），$ne 的行为可能不同。',
        fix: '在 arrayFilters 中使用 $ne 时注意语法：db.collection.updateMany({}, { $pull: { tags: "draft" } }) 用 $pull 删除数组中的特定值。如果需要更新"不包含某值的数组"，先查询再更新。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 orders 集合中 status 不是 "cancelled" 且不是 "refunded" 的订单。分别用 $ne 和 $nin 两种方式实现。',
        hint: '$ne 只能排除一个值，需要 $and 组合；$nin 可以一次排除多个值。',
        answer: '// 方式一：$nin（推荐，更简洁）\ndb.orders.find({\n  status: { $nin: ["cancelled", "refunded"] }\n});\n\n// 方式二：$and + $ne\ndb.orders.find({\n  $and: [\n    { status: { $ne: "cancelled" } },\n    { status: { $ne: "refunded" } }\n  ]\n});\n\n// 注意：不能写成 { status: { $ne: "cancelled", $ne: "refunded" } }\n// 因为同一对象中不能有两个相同的键名（第二个会覆盖第一个）'
      },
      {
        level: '进阶',
        task: '优化查询：如果 "deleted" 状态的用户只占 2%，而 "active" 和 "inactive" 各占 49%，用 $ne: "deleted" 还是 $in: ["active", "inactive"] 更好？用 explain() 验证。',
        hint: '关注 totalKeysExamined 和是否使用了索引。',
        answer: '// $ne 版本：\ndb.users.find({ status: { $ne: "deleted" } }).explain("executionStats");\n// totalKeysExamined 很大（扫描了 active + inactive 的索引条目）\n\n// $in 版本：\ndb.users.find({\n  status: { $in: ["active", "inactive"] }\n}).explain("executionStats");\n// totalKeysExamined 也是 active + inactive 的条目数\n\n// 表面上两者扫描量相似，但 $in 可以更好地利用索引：\n// MongoDB 对 $in 的每个值做独立的索引查找然后合并，\n// 而 $ne 可能直接走 COLLSCAN（优化器认为 $ne 选择性太低）。\n//\n// 结论：$in 版本更稳定地使用索引，且语义更明确。\n// 最佳实践：如果排除的值很少而被保留的值可枚举，优先用 $in。\ndb.users.createIndex({ status: 1 });\n// $in 版本几乎总是优于 $ne 版本'
      }
    ]
  },

  'PmfjHFz-DW69pNh_t13Nm': {
    // $regex 正则查询
    mentalModel: '$regex 是 MongoDB 的"文本模式搜索器"——它用正则表达式匹配字符串的模式（前缀、后缀、包含特定字符序列等），就像在通讯录中搜索所有以"张"开头的联系人，或邮箱中包含 "@gmail" 的用户。',
    handsOn: [
      {
        title: '前缀匹配（可利用索引）',
        cmd: 'db.users.find({ name: { $regex: /^Ali/ } })',
        output: '[\n  { name: "Alice" },\n  { name: "Alicia" },\n  { name: "Ali" }\n]',
        explain: '以 ^ 开头的正则表达式是"前缀匹配"。MongoDB 可以将前缀 "Ali" 转化为索引范围扫描：["Ali", "Alj")。这是 $regex 唯一能高效利用索引的形式。'
      },
      {
        title: '包含匹配和选项',
        cmd: '// 包含匹配（不能利用索引）\ndb.users.find({ email: { $regex: /gmail\\.com$/ } });\n\n// 不区分大小写\ndb.users.find({ name: { $regex: /alice/i } });\n\n// 字符串语法（带选项）\ndb.users.find({ name: { $regex: "ali.*bob", $options: "i" } });',
        output: '// 第一个查询：匹配以 gmail.com 结尾的邮箱\n// 第二个查询：匹配包含 "alice"（不区分大小写）的文档\n// 第三个查询：匹配包含 "ali...bob" 模式的文档',
        explain: '非前缀正则（包含、后缀、通配）不能使用索引，必须全集合扫描。i 选项启用不区分大小写匹配。$options 支持 i（忽略大小写）、m（多行模式）、s（点匹配换行）、x（扩展模式）。'
      },
      {
        title: '在聚合管道中使用 $regexMatch',
        cmd: 'db.logs.aggregate([\n  {\n    $match: {\n      message: { $regex: /^ERROR.*timeout/i }\n    }\n  },\n  {\n    $project: {\n      message: 1,\n      isTimeoutError: {\n        $regexMatch: { input: "$message", regex: /timeout/i }\n      },\n      _id: 0\n    }\n  }\n])',
        output: '[\n  { message: "ERROR: connection timeout after 30s", isTimeoutError: true }\n]',
        explain: '$regexMatch 是聚合管道中的正则表达式操作符，返回布尔值。它可以在 $project、$match 等阶段使用。与查询中的 $regex 不同，$regexMatch 可以在计算字段中使用。'
      },
      {
        title: '$regex 安全性：避免 ReDoS',
        cmd: '// 危险的正则（可能导致指数级回溯）\n// db.users.find({ name: { $regex: /(a+)+$/ } })\n\n// 安全的替代方案\ndb.users.find({ name: { $regex: /^a+$/, $maxTimeMS: 5000 } })',
        output: '// 使用 $maxTimeMS 限制查询时间，防止 ReDoS 攻击',
        explain: '恶意或低效的正则表达式可能导致 ReDoS（正则表达式拒绝服务攻击），使服务器 CPU 飙升。MongoDB 没有内置的正则超时机制。务必使用 $maxTimeMS 限制查询时间，并在应用层对用户输入的正则做校验和限制。'
      }
    ],
    diagnosis: [
      {
        symptom: '$regex 查询非常慢，explain() 显示 COLLSCAN',
        cause: '非前缀正则（如 /pattern/、/.*pattern/）无法使用索引。MongoDB 必须对每个文档的字段值执行正则匹配，这是 O(N) 操作。',
        fix: '1) 尽量改用前缀正则：/^pattern/ 可以利用索引。2) 如果必须做包含搜索，考虑用 $text 文本索引或专门的搜索引擎（Elasticsearch）。3) 添加其他可用索引的过滤条件先缩小范围：{ status: "active", name: { $regex: /pattern/ } }。4) 始终设置 $maxTimeMS 防止超时。'
      },
      {
        symptom: '$regex 在数组字段上的行为与预期不同',
        cause: '$regex 对数组字段的行为是：数组中至少有一个元素匹配正则表达式，文档就算匹配。这与 $eq 对数组的行为一致（元素级匹配）。',
        fix: '如果需要精确控制数组元素的正则匹配，使用 $elemMatch：db.products.find({ tags: { $elemMatch: { $regex: /^new/ } } })。这要求至少一个数组元素匹配正则，语义更明确。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 users 集合中邮箱以 "@company.com" 结尾的所有用户，以及姓名以 "Dr." 开头的所有用户，合并为一次查询。',
        hint: '用 $or 组合两个 $regex 条件。',
        answer: 'db.users.find({\n  $or: [\n    { email: { $regex: /@company\\.com$/ } },\n    { name: { $regex: /^Dr\\./ } }\n  ]\n});\n// 注意正则中的特殊字符需要转义：\\. 匹配字面点\n// $ 匹配字符串结尾'
      },
      {
        level: '挑战',
        task: '实现一个"模糊搜索"功能：用户输入关键词（可能包含正则特殊字符），安全地在 products 集合的 name 和 description 字段中搜索。防止 ReDoS 攻击。',
        hint: '用 escape 函数转义用户输入中的正则特殊字符，加上 $maxTimeMS 限制。',
        answer: '// 转义正则特殊字符\nfunction escapeRegex(str) {\n  return str.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&");\n}\n\nfunction fuzzySearch(keyword, maxTime = 5000) {\n  // 转义用户输入\n  const safeKeyword = escapeRegex(keyword);\n  \n  // 构建不区分大小写的正则\n  const regex = new RegExp(safeKeyword, "i");\n  \n  return db.products.find({\n    $or: [\n      { name: { $regex: regex } },\n      { description: { $regex: regex } }\n    ]\n  }).maxTimeMS(maxTime).toArray();\n}\n\n// 使用示例\nfuzzySearch("iphone 15 pro");\n// 安全搜索，即使输入包含 .*+? 等特殊字符也被转义为字面量\n// maxTimeMS 防止极端情况下的长时间阻塞\n\n// 注意：这种模糊搜索仍然是全集合扫描，\n// 生产环境推荐使用 Atlas Search 或 Elasticsearch'
      }
    ]
  },

  '-62S4wRxHpIM2I59xjGun': {
    // $and 逻辑与
    mentalModel: '$and 是"全部满足才通过"的逻辑门——所有子条件都必须为 true 文档才匹配，就像入职体检要求：视力合格 AND 血压正常 AND 无传染病，三项全部通过才算合格。',
    handsOn: [
      {
        title: '显式 $and 语法',
        cmd: 'db.users.find({\n  $and: [\n    { age: { $gte: 18 } },\n    { age: { $lte: 65 } },\n    { status: "active" }\n  ]\n})',
        output: '[\n  { name: "Alice", age: 30, status: "active" },\n  { name: "Bob", age: 45, status: "active" }\n]',
        explain: '$and 数组中的每个条件都必须满足。这里 age >= 18 AND age <= 65 AND status = "active"。显式 $and 在需要对同一字段使用多个条件时是必须的（因为 BSON 文档不能有重复键）。'
      },
      {
        title: '隐式 AND（同一层级条件）',
        cmd: '// 等价于上面的查询（对 age 使用不同操作符时）\ndb.users.find({\n  age: { $gte: 18, $lte: 65 },\n  status: "active"\n})',
        output: '[\n  { name: "Alice", age: 30, status: "active" },\n  { name: "Bob", age: 45, status: "active" }\n]',
        explain: '同一查询文档中的多个字段条件是隐式 AND 关系。同一字段的多个操作符也可以写在一个对象中（如 age: { $gte: 18, $lte: 65 }）。这是最常用的写法，比显式 $and 更简洁。'
      },
      {
        title: '必须用显式 $and 的场景',
        cmd: '// 场景：对同一字段使用两次 $in\ndb.products.find({\n  $and: [\n    { tags: { $in: ["electronics"] } },\n    { tags: { $in: ["sale"] } },\n    { price: { $lt: 500 } }\n  ]\n})',
        output: '[\n  { name: "Laptop", tags: ["electronics", "sale", "new"], price: 499 }\n]',
        explain: 'BSON 文档不能有重复键名，所以 { tags: { $in: [...] }, tags: { $in: [...] } } 是非法的。必须用显式 $and 数组来表达"tags 同时包含 electronics 和 sale"。对于这种场景，$all 是更好的替代：{ tags: { $all: ["electronics", "sale"] } }。'
      },
      {
        title: '$and 嵌套 $or 实现复杂条件',
        cmd: 'db.orders.find({\n  $and: [\n    { total: { $gte: 100 } },\n    {\n      $or: [\n        { status: "confirmed", paymentMethod: "credit" },\n        { status: "paid" }\n      ]\n    }\n  ]\n})',
        output: '[\n  { total: 250, status: "paid" },\n  { total: 180, status: "confirmed", paymentMethod: "credit" }\n]',
        explain: '$and 和 $or 可以自由嵌套构建复杂的布尔逻辑。这个查询：total >= 100 AND (status 为 confirmed 且付款方式为 credit，或者 status 为 paid)。嵌套时要特别注意括号的匹配和逻辑优先级。'
      }
    ],
    diagnosis: [
      {
        symptom: '查询 { status: "active", status: "pending" } 只返回 pending 的文档',
        cause: 'BSON 文档（JavaScript 对象）不能有重复键。当写 { status: "active", status: "pending" } 时，后者覆盖前者，实际查询变成 { status: "pending" }。这是 JavaScript 对象的行为，不是 MongoDB 的 bug。',
        fix: '用 $and 或 $in 表达多值条件。如果意图是"active 或 pending"：{ status: { $in: ["active", "pending"] } }。如果意图是"同时是 active 和 pending"（逻辑上不可能），检查你的查询逻辑。'
      },
      {
        symptom: '$and 查询中某个子条件使用了 $or，结果不符合预期',
        cause: '逻辑优先级问题。$and 和 $or 嵌套时，如果没有正确使用数组和对象分组，条件的逻辑关系可能不是你以为的。例如 { $and: [{ $or: [A, B] }, C] } 是 (A OR B) AND C，但 { $or: [A, B, C] } 是 A OR B OR C。',
        fix: '画出逻辑表达式确认你的意图。使用括号（数组）明确分组：{ $and: [{ $or: [condA, condB] }, condC] } 表示 (A OR B) AND C。可以在 mongosh 中用小数据集验证逻辑是否正确。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查找 products 集合中同时满足以下条件的产品：价格在 50-500 之间，category 是 "electronics" 或 "computers"，且有库存（stock > 0）。',
        hint: '用隐式 AND 组合 price 范围、$in category、stock > 0。',
        answer: 'db.products.find({\n  price: { $gte: 50, $lte: 500 },\n  category: { $in: ["electronics", "computers"] },\n  stock: { $gt: 0 }\n});\n// 三个字段条件在同一层级，隐式 AND'
      },
      {
        level: '进阶',
        task: '将以下 SQL 查询翻译为 MongoDB 查询：\nSELECT * FROM orders\nWHERE (status = "shipped" OR status = "delivered")\n  AND total > 200\n  AND (region = "US" OR (region = "EU" AND currency = "EUR"))',
        hint: '将每个 AND 连接的子句转为查询条件，OR 用 $or 表达。',
        answer: 'db.orders.find({\n  $and: [\n    { status: { $in: ["shipped", "delivered"] } },\n    { total: { $gt: 200 } },\n    {\n      $or: [\n        { region: "US" },\n        { $and: [{ region: "EU" }, { currency: "EUR" }] }\n      ]\n    }\n  ]\n});\n\n// 更简洁的写法（利用隐式 AND）：\ndb.orders.find({\n  status: { $in: ["shipped", "delivered"] },\n  total: { $gt: 200 },\n  $or: [\n    { region: "US" },\n    { region: "EU", currency: "EUR" }\n  ]\n});\n// 注意：第二种写法中 $or 内部的 { region: "EU", currency: "EUR" }\n// 是隐式 AND（同一对象中的条件）'
      },
      {
        level: '挑战',
        task: '分析并优化以下查询的索引策略：{ $and: [{ status: "active" }, { createdAt: { $gte: dateA } }, { tags: { $all: ["premium", "verified"] } }] }，设计最优的复合索引。',
        hint: '分析每个条件的选择性和 ESR 规则，考虑哪些条件可以走索引，哪些只能过滤。',
        answer: '// 条件分析：\n// 1. status: "active" —— 等值匹配（E），选择性取决于 active 占比\n// 2. createdAt: { $gte: dateA } —— 范围查询（R）\n// 3. tags: { $all: [...] } —— 数组匹配，多键索引\n//\n// 索引设计：\n// 按 ESR 规则，等值字段在前，范围字段在后\n// tags 是多键索引，放在范围字段后面不影响索引使用\n\ndb.orders.createIndex({\n  status: 1,\n  createdAt: -1,\n  tags: 1\n});\n\n// 这个索引的工作方式：\n// 1. status = "active" → 精确定位索引前缀\n// 2. createdAt >= dateA → 在 status 内做范围扫描\n// 3. tags $all → 在匹配的文档中过滤（可能需要回表检查）\n//\n// 注意：$all 的第一个元素可以利用多键索引做初步过滤，\n// 但完整的 $all 匹配需要检查数组中的所有元素。\n//\n// 如果 status = "active" 占比 >30%，优化器可能选择 COLLSCAN。\n// 此时考虑部分索引：\ndb.orders.createIndex(\n  { createdAt: -1, tags: 1 },\n  { partialFilterExpression: { status: "active" } }\n);'
      }
    ]
  }
};
