import type { DeepTutorial } from '../deep-types';

export const MONGODB_DEEP_TUTORIALS_2: Record<string, DeepTutorial> = {
  "43BfjlUju-yJaGv-FaJty": {
    mentalModel: '$or 类似 JavaScript 的 || 运算符：数组里放多个条件，满足任意一个就匹配。和 $in 不同——$in 只能匹配同一个字段的多个值，$or 可以跨字段。',
    handsOn: [
      { title: '基础 $or 查询', cmd: "db.products.find({ $or: [{ price: { $lt: 100 } }, { category: 'electronics' }] })", output: '// 返回 price<100 或 category=electronics 的文档', explain: '$or 接收条件数组，文档满足数组中任意一个条件即匹配。每个数组元素是独立的条件对象。' },
      { title: '$or 与 $and 组合', cmd: "db.products.find({ stock: { $gt: 0 }, $or: [{ price: { $lt: 200 } }, { category: 'electronics' }] })", output: '// 有库存 且 (价格<200 或 电子产品)', explain: '顶层字段之间默认 AND 关系。$or 和其他条件并列时自动形成 AND + OR 组合。' },
      { title: '$or 中使用正则', cmd: "db.users.find({ $or: [{ name: /^Dr\\./ }, { email: /@company\\.com$/ }] })", output: '// 名字以 Dr. 开头 或 邮箱以 @company.com 结尾', explain: '$or 的每个分支可以用不同的操作符：正则、范围、$in 等，灵活组合。' },
    ],
    diagnosis: [
      { symptom: '$or 查询很慢', cause: '$or 的每个分支都需要独立扫描，无法使用单个复合索引覆盖所有分支。', fix: '为每个 $or 分支的字段分别建索引。MongoDB 会对每个分支使用各自的索引，然后合并结果（index merge）。' },
      { symptom: '$or 结果不符合预期', cause: '忘了 $or 接收的是数组，写成了对象 { $or: { a: 1, b: 2 } }。', fix: '$or 必须是数组：{ $or: [{ a: 1 }, { b: 2 }] }。每个条件是独立对象。' },
    ],
    exercises: [
      { level: '基础', task: '查找 price < 50 或 quantity > 100 的产品', hint: '$or + $lt + $gt', answer: "db.products.find({ $or: [{ price: { $lt: 50 } }, { quantity: { $gt: 100 } }] })" },
      { level: '进阶', task: '查找 (状态为 active 且 价格<100) 或 (状态为 vip) 的用户', hint: '$or 嵌套 $and', answer: "db.users.find({ $or: [{ status: 'active', price: { $lt: 100 } }, { status: 'vip' }] })" },
    ],
  },

  "7xq_mdQOlUTuhfnogOl8h": {
    mentalModel: '$nor 是 $or 的取反版：数组里的条件都不满足的文档才匹配。相当于 NOT (A OR B) = NOT A AND NOT B。',
    handsOn: [
      { title: '基础 $nor', cmd: "db.products.find({ $nor: [{ price: { $gt: 1000 } }, { status: 'discontinued' }] })", output: '// 排除价格>1000 和 已停产的产品', explain: '$nor 排除满足任一条件的文档。等价于 { price: { $lte: 1000 }, status: { $ne: \'discontinued\' } }。' },
      { title: '$nor 排除缺失字段', cmd: "db.users.find({ $nor: [{ deletedAt: { $exists: true } }] })", output: '// 只返回没有 deletedAt 字段的用户（未删除）', explain: '$nor + $exists: true 是排除有某字段的文档的简洁写法。' },
      { title: '$nor 与 $or 对比', cmd: "// $or: 满足任意一个\ndb.col.find({ $or: [{ a: 1 }, { b: 2 }] })\n// $nor: 都不满足\ndb.col.find({ $nor: [{ a: 1 }, { b: 2 }] })", output: '// $nor 结果是 $or 结果的补集', explain: '$nor 和 $or 互为补集。如果用 $not 包裹 $or 也能达到类似效果，但 $nor 语法更直观。' },
    ],
    diagnosis: [
      { symptom: '$nor 结果比预期少很多', cause: '$nor 条件中有个字段的值大部分文档都有，导致大量文档被排除。', fix: '检查 $nor 数组中每个条件的匹配范围。可以用 countDocuments 分别测试每个条件的匹配数量。' },
      { symptom: '$nor 和 $not + $or 结果不同', cause: '对于缺失字段的处理不同。$nor 对缺失字段的文档：条件不满足 → 文档被保留。$not 对缺失字段可能有不同行为。', fix: '涉及缺失字段时优先用 $nor，行为更可预测。' },
    ],
    exercises: [
      { level: '基础', task: '查找不是 admin 且不是 banned 的用户', hint: '$nor 排除两个条件', answer: "db.users.find({ $nor: [{ role: 'admin' }, { status: 'banned' }] })" },
      { level: '进阶', task: '查找既没有手机号也没有邮箱的联系人', hint: '$nor + $exists', answer: "db.contacts.find({ $nor: [{ phone: { $exists: true } }, { email: { $exists: true } }] })" },
    ],
  },

  "A9W2LsivDc0ialLp83fYP": {
    mentalModel: 'MongoDB 性能优化是一个四层漏斗：Schema 设计（最底层、影响最大）→ 索引策略 → 查询写法 → 服务器配置。90% 的性能问题在前两层就能解决。',
    sections: [
      { title: 'Schema 设计优化', content: '1. 嵌入 vs 引用：频繁一起读取的数据嵌入同一文档，避免 $lookup\n2. 预聚合：在写入时计算好汇总数据（如 totalOrderCount），读取时直接用\n3. 避免深嵌套：超过 3 层嵌套的文档查询和更新都很复杂\n4. 合理用数组：数组适合少量元素（<100），大量元素改用引用+单独集合\n5. 字段名简短：字段名也占存储空间，长字段名在百万文档中浪费显著' },
      { title: '索引策略（ESR 原则）', content: '建索引遵循 ESR 顺序：\n1. Equality（等值匹配）字段放最前：{ status: "active" }\n2. Sort（排序）字段放中间：{ createdAt: -1 }\n3. Range（范围查询）字段放最后：{ price: { $gt: 100 } }\n\n示例：db.orders.createIndex({ status: 1, createdAt: -1, price: 1 })\n\n用 explain("executionStats") 验证索引是否被使用：\n- COLLSCAN = 全表扫描（慢）\n- IXSCAN = 索引扫描（快）\n- totalDocsExamined 应接近 nReturned' },
      { title: '查询优化技巧', content: '1. 投影只取需要的字段：find({}, { name: 1, _id: 0 })\n2. 用 covered query：查询字段和返回字段都在索引中，不回表\n3. 分页用游标代替 skip：skip(10000) 很慢，改用 { _id: { $gt: lastId } }\n4. 批量写入用 bulkWrite 代替循环 insertOne\n5. $match 放管道最前面：越早过滤，后续阶段处理的数据越少' },
      { title: '服务器配置调优', content: '1. WiredTiger 缓存：设为 RAM 的 50-60%（默认 (RAM-1GB)*0.5）\n2. 读写关注：w:1 够用时别用 w:majority（写入慢 2-3 倍）\n3. journalCommitIntervalMs：默认 100ms，降低可减少崩溃丢失但不推荐改\n4. 连接池大小：应用端 minPoolSize=10, maxPoolSize=100 起步' },
    ],
    diagnosis: [
      { symptom: '查询耗时从 10ms 涨到 2000ms', cause: '数据量增长后原来的索引不够用，或查询条件变了没走索引。', fix: '用 db.collection.find(query).explain("executionStats") 查看执行计划。关注 winningPlan.stage（应该是 IXSCAN 不是 COLLSCAN）和 totalDocsExamined vs nReturned 的比值。' },
      { symptom: '写入速度越来越慢', cause: '索引太多。每个索引在写入时都要更新，10 个索引意味着每次 insert 要更新 10 个 B-Tree。', fix: '用 db.collection.getIndexes() 查看所有索引，删除不常用的。用 $indexStats 聚合查看索引使用频率。' },
    ],
    exercises: [
      { level: '基础', task: '对一个慢查询运行 explain 并分析执行计划', hint: '.explain("executionStats")', answer: 'db.orders.find({ status: "active", total: { $gt: 100 } }).explain("executionStats") — 关注 winningPlan.stage 和 totalDocsExamined' },
      { level: '进阶', task: '为订单集合设计 ESR 索引：按状态等值筛选、按日期排序、按金额范围过滤', hint: 'E-S-R 顺序', answer: 'db.orders.createIndex({ status: 1, orderDate: -1, amount: 1 })' },
    ],
  },

  "YidhAuVk_VGukx_FfJSz2": {
    mentalModel: 'Atlas Search 是 MongoDB 内置的全文搜索引擎（底层是 Lucene）。不需要额外部署 Elasticsearch，直接在聚合管道中用 $search 阶段做全文搜索、模糊匹配、分面统计。',
    sections: [
      { title: '创建搜索索引', content: 'Atlas Search 需要先创建搜索索引（和普通索引不同）：\n\nAtlas UI → Cluster → Search → Create Index\n\n或用 JSON 定义：\n{\n  mappings: { dynamic: true },  // 自动映射所有字段\n  analyzers: [{ name: "chineseAnalyzer", tokenizer: "nGram", minGram: 2, maxGram: 4 }]\n}\n\ndynamic: true 自动索引所有字段。生产环境建议用 static mapping 精确控制。' },
      { title: '$search 聚合查询', content: "db.products.aggregate([\n  {\n    $search: {\n      index: 'default',\n      text: {\n        query: 'wireless headphone',\n        path: ['name', 'description'],\n        fuzzy: { maxEdits: 1 }  // 容忍 1 个字符的拼写错误\n      }\n    }\n  },\n  { $limit: 10 },\n  { $project: { name: 1, score: { $meta: 'searchScore' } } }\n])\n\n$search 必须是管道第一阶段。score 表示相关性分数。" },
      { title: '高级功能', content: '1. compound 查询：must/should/mustNot 组合条件\n2. autocomplete：搜索建议（需配置 type: "autocomplete"）\n3. highlight：高亮匹配词\n4. facet：分面统计（类似电商筛选栏的价格区间、品牌分布）\n5. moreLikeThis：相似文档推荐\n6. geo 查询：地理位置搜索' },
    ],
    diagnosis: [
      { symptom: '$search 报错 "index not found"', cause: '没创建 Atlas Search 索引，或索引名不对。', fix: '在 Atlas UI 的 Search 页面确认索引已创建并状态为 Active。默认索引名是 "default"。' },
      { symptom: '搜索结果相关性差', cause: 'dynamic mapping 对所有字段权重相同，重要字段没加权。', fix: '用 static mapping 给关键字段（如 title）设更高 boost：{ path: { value: "title", boost: 5 } }。' },
    ],
    exercises: [
      { level: '基础', task: '在 Atlas 上为 products 集合创建搜索索引', hint: 'Atlas UI → Search', answer: 'Atlas UI → Cluster → Search → Create Index → JSON Editor → { mappings: { dynamic: true } }' },
      { level: '进阶', task: '实现带模糊匹配和高亮的搜索', hint: '$search text + fuzzy + highlight', answer: 'db.products.aggregate([{ $search: { text: { query: "headfone", path: "name", fuzzy: { maxEdits: 1 }, score: { boost: { value: 2 } } }, highlight: { path: "name" } } }])' },
    ],
  },

  "gpihoIJkzSS1WOvmH2ueo": {
    mentalModel: '聚合（Aggregation）是 MongoDB 的数据处理流水线：数据从一端进去，经过多个阶段（过滤→分组→排序→格式化），出来就是你要的分析结果。相当于 SQL 的 GROUP BY + JOIN + 各种函数的组合。',
    sections: [
      { title: '聚合 vs find()', content: 'find() 适合简单查询：筛选 + 投影 + 排序。\n聚合管道适合复杂分析：\n- 分组统计（GROUP BY）：$group\n- 联表查询（JOIN）：$lookup\n- 数组展开：$unwind\n- 条件计算：$addFields + $cond\n- 多路并行分析：$facet\n\n经验法则：如果 find() 能解决，就用 find()（更快）。需要分组/关联/复杂计算时用聚合。' },
      { title: '管道执行原理', content: '每个阶段处理前一阶段的输出：\n\n原始数据 → $match（过滤）→ $group（分组）→ $sort（排序）→ $limit（限制）→ 结果\n\n优化原则：\n1. $match 和 $sort 尽量放前面（可利用索引）\n2. $project 尽早减少后续阶段的字段数\n3. 避免在管道中间产生大量中间数据\n4. $lookup 前先用 $match 减少需要关联的文档数' },
      { title: '常用阶段速查', content: '$match — 筛选（WHERE）\n$group — 分组（GROUP BY）\n$sort — 排序（ORDER BY）\n$project — 选字段（SELECT）\n$limit / $skip — 分页\n$unwind — 展开数组\n$lookup — 关联（LEFT JOIN）\n$addFields — 添加计算字段\n$count — 计数\n$bucket / $bucketAuto — 分桶统计\n$facet — 多路并行分析' },
    ],
    diagnosis: [
      { symptom: '聚合管道执行超时', cause: '管道中没有 $match 或 $match 放太后面，导致前面阶段处理了全部数据。', fix: '把 $match 放到管道最前面。MongoDB 会自动把 $match 提前（pipeline optimization），但 $lookup 等阶段之前的 $match 不会被自动提前。' },
      { symptom: '聚合结果内存溢出', cause: '$group 或 $sort 产生的中间结果超过 100MB 内存限制。', fix: '加 { allowDiskUse: true } 允许使用磁盘临时存储。或先用 $match 减少数据量。' },
    ],
    exercises: [
      { level: '基础', task: '统计每个部门的员工数量', hint: '$group + $sum', answer: 'db.employees.aggregate([{ $group: { _id: "$department", count: { $sum: 1 } } }])' },
      { level: '进阶', task: '找出每个类别中价格最高的 3 个产品', hint: '$sort + $group + $push + $slice', answer: 'db.products.aggregate([{ $sort: { price: -1 } }, { $group: { _id: "$category", top3: { $push: "$$ROOT" } } }, { $project: { top3: { $slice: ["$top3", 3] } } }])' },
    ],
  },

  "eDks8Jmsbq3_nHgLydyxP": {
    mentalModel: '聚合管道由三部分组成：Pipeline（管道，数据的流动路径）、Stages（阶段，每个阶段的处理动作）、Operators（操作符，阶段内的计算工具）。理解这三层结构就能搭建任意复杂的数据分析。',
    sections: [
      { title: 'Pipeline 管道', content: '管道是一个有序的阶段数组：\ndb.collection.aggregate([ stage1, stage2, stage3 ])\n\n数据从左到右流经每个阶段，每个阶段的输出是下一阶段的输入。\n\n特点：\n- 阶段数量没有硬限制\n- 单个阶段的结果不能超过 100MB（除非 allowDiskUse）\n- 管道可以嵌套（$facet 内可以有子管道）' },
      { title: 'Stages 阶段分类', content: '过滤类：$match, $limit, $skip, $sample\n分组类：$group, $bucket, $bucketAuto, $facet\n变形类：$project, $addFields, $unset, $replaceRoot\n关联类：$lookup, $graphLookup, $unwind\n排序类：$sort\n输出类：$out, $merge, $count' },
      { title: 'Operators 操作符分类', content: '比较：$eq, $gt, $lt, $in, $nin\n逻辑：$and, $or, $not, $nor\n算术：$add, $subtract, $multiply, $divide, $mod\n字符串：$concat, $substr, $toLower, $toUpper, $regexMatch\n数组：$arrayElemAt, $filter, $map, $reduce, $size\n日期：$year, $month, $dayOfMonth, $dateToString\n条件：$cond, $switch, $ifNull\n类型转换：$toInt, $toString, $toDouble, $convert\n累加器（用于 $group）：$sum, $avg, $min, $max, $push, $addToSet, $first, $last' },
    ],
    diagnosis: [
      { symptom: '分不清 Stage 和 Operator', cause: '两者名字有时相似（如 $project 是 Stage，$multiply 是 Operator）。', fix: 'Stage 是管道的顶层元素（数组的直接元素），Operator 是 Stage 内部的表达式。$match 是 Stage，$gt 是 $match 内用的 Operator。' },
    ],
    exercises: [
      { level: '基础', task: '说出 3 个 Stage 和 3 个 Operator', hint: 'Stage 是管道顶层元素', answer: 'Stage: $match, $group, $sort。Operator: $sum, $concat, $cond。' },
      { level: '进阶', task: '设计一个管道：筛选今年订单 → 按月份分组统计总额 → 排序取前 3', hint: '$match + $group + $sort + $limit', answer: 'db.orders.aggregate([{ $match: { date: { $gte: ISODate("2024-01-01") } } }, { $group: { _id: { $month: "$date" }, total: { $sum: "$amount" } } }, { $sort: { total: -1 } }, { $limit: 3 }])' },
    ],
  },

  "_c7itVw1R1_UB-NPtL-WI": {
    mentalModel: '$match 是聚合管道的 WHERE 子句：筛选符合条件的文档传给下一个阶段。它和 find() 的查询语法几乎一样，但放在管道里可以和其他阶段组合。',
    handsOn: [
      { title: '基础 $match', cmd: 'db.orders.aggregate([{ $match: { status: "completed", total: { $gt: 100 } } }])', output: '// 只传递 status=completed 且 total>100 的文档给下一阶段', explain: '$match 的查询语法和 find() 一致：支持比较操作符、逻辑操作符、正则等。' },
      { title: '$match + $group 组合', cmd: 'db.orders.aggregate([{ $match: { status: "completed" } }, { $group: { _id: "$customerId", total: { $sum: "$total" } } }])', output: '// 先筛选已完成订单，再按客户汇总金额', explain: '$match 放最前面有两个好处：1) 减少后续阶段处理的数据量 2) 可以利用索引加速。' },
      { title: '$match 中使用 $expr', cmd: 'db.orders.aggregate([{ $match: { $expr: { $gt: ["$total", "$discount"] } } }])', output: '// 筛选 total > discount 的订单（字段间比较）', explain: '$match 不能直接用 $where 或字段间比较。需要字段间比较时用 $expr 包裹。' },
    ],
    diagnosis: [
      { symptom: '$match 放管道中间报错', cause: '$match 在 $project/$addFields/$unset 之后时，不能引用被重命名或删除前的字段。', fix: '确保 $match 引用的字段在前面的阶段中没有被修改。或把 $match 移到管道最前面。' },
      { symptom: '$match 不走索引', cause: '$match 在 $lookup 或 $unwind 之后时，无法利用集合索引。', fix: '尽量把 $match 放在管道第一阶段。MongoDB 的 pipeline optimizer 会自动把第一个 $match 提前到索引可覆盖的位置。' },
    ],
    exercises: [
      { level: '基础', task: '筛选 age > 25 且 city = "Beijing" 的用户', hint: '$match + 比较操作符', answer: 'db.users.aggregate([{ $match: { age: { $gt: 25 }, city: "Beijing" } }])' },
      { level: '进阶', task: '筛选 createdAt 在今年的文档', hint: '$match + $gte + ISODate', answer: 'db.docs.aggregate([{ $match: { createdAt: { $gte: ISODate("2024-01-01") } } }])' },
    ],
  },

  "nz048lC4Q4S7fMVbxLGEk": {
    mentalModel: '$group 是聚合管道的 GROUP BY：按 _id 字段分组，对每组文档计算汇总值（sum/avg/min/max/count 等）。_id 可以是单字段、多字段组合、或表达式。',
    handsOn: [
      { title: '按单字段分组', cmd: 'db.orders.aggregate([{ $group: { _id: "$status", count: { $sum: 1 }, totalAmount: { $sum: "$amount" } } }])', output: '// { _id: "completed", count: 150, totalAmount: 45000 }\n// { _id: "pending", count: 30, totalAmount: 8000 }', explain: '_id: "$status" 按 status 字段分组。$sum: 1 计数，$sum: "$amount" 求和。' },
      { title: '按多字段分组', cmd: 'db.sales.aggregate([{ $group: { _id: { year: { $year: "$date" }, region: "$region" }, revenue: { $sum: "$amount" } } }])', output: '// { _id: { year: 2024, region: "North" }, revenue: 120000 }', explain: '_id 可以是对象，实现多维度分组。类似 SQL 的 GROUP BY year, region。' },
      { title: '常用累加器', cmd: 'db.orders.aggregate([{ $group: { _id: "$customerId", orders: { $push: "$orderId" }, uniqueProducts: { $addToSet: "$productId" }, firstOrder: { $first: "$date" }, maxAmount: { $max: "$amount" } } }])', output: '// $push: 收集所有值（含重复）\n// $addToSet: 收集去重值\n// $first/$last: 第一个/最后一个\n// $max/$min: 最大/最小', explain: '累加器在 $group 中使用，对每组文档计算一个汇总值。$push 保留顺序，$addToSet 不保证顺序。' },
    ],
    diagnosis: [
      { symptom: '$group 内存溢出', cause: '分组太多（如按唯一值分组百万文档），中间结果超过 100MB。', fix: '加 { allowDiskUse: true }。或在 $group 前用 $match 减少数据量。或考虑预聚合。' },
      { symptom: '$group 结果中 _id 是 null', cause: '分组字段在部分文档中不存在，缺失字段的文档 _id 为 null。', fix: '在 $group 前加 $match 排除缺失字段的文档：{ $match: { fieldName: { $exists: true } } }。' },
    ],
    exercises: [
      { level: '基础', task: '统计每个作者的文章数量', hint: '$group + _id + $sum', answer: 'db.articles.aggregate([{ $group: { _id: "$author", count: { $sum: 1 } } }])' },
      { level: '进阶', task: '按月份统计销售额，同时记录每月最大单笔订单', hint: '$group + $year + $month + $sum + $max', answer: 'db.orders.aggregate([{ $group: { _id: { y: { $year: "$date" }, m: { $month: "$date" } }, total: { $sum: "$amount" }, maxOrder: { $max: "$amount" } } }])' },
    ],
  },

  "BCWS8uV2pSWe7CX-VlnTg": {
    mentalModel: '$sort 是聚合管道的 ORDER BY：按指定字段升序（1）或降序（-1）排列文档。如果排序字段有索引，可以直接利用索引排序而不需内存排序。',
    handsOn: [
      { title: '基础排序', cmd: 'db.products.aggregate([{ $sort: { price: -1, name: 1 } }])', output: '// 按 price 降序，同价格按 name 升序', explain: '1 = 升序，-1 = 降序。多字段排序时，先按第一个字段排，相同时按第二个字段排。' },
      { title: '$sort + $limit 优化', cmd: 'db.orders.aggregate([{ $sort: { total: -1 } }, { $limit: 10 }])', output: '// 取金额最高的 10 个订单', explain: 'MongoDB 会自动优化 $sort + $limit：只维护一个大小为 limit 的堆，而不是排序全部文档。非常高效。' },
      { title: '大结果集排序', cmd: 'db.logs.aggregate([{ $sort: { timestamp: -1 } }], { allowDiskUse: true })', output: '// 允许使用磁盘临时存储排序数据', explain: '排序结果超过 100MB 时会报错。加 allowDiskUse: true 允许写入磁盘。但最好先用 $match 或 $limit 减少数据量。' },
    ],
    diagnosis: [
      { symptom: '$sort 报 "Sort operation used more than the maximum 33554432 bytes of RAM"', cause: '排序字段没有索引，且数据量超过内存排序限制（32MB）。', fix: '1) 为排序字段建索引 2) 加 allowDiskUse: true 3) 在 $sort 前用 $limit 或 $match 减少数据量。' },
      { symptom: '$sort 后 $group 的结果顺序不对', cause: '$group 不保证输出顺序。即使先 $sort，经过 $group 后顺序会丢失。', fix: '把 $sort 放在 $group 后面：先分组再排序。{ $group: ... }, { $sort: { field: 1 } }。' },
    ],
    exercises: [
      { level: '基础', task: '按创建时间降序排列文档', hint: '$sort + -1', answer: 'db.posts.aggregate([{ $sort: { createdAt: -1 } }])' },
      { level: '进阶', task: '找出每个类别价格最高的产品', hint: '$sort + $group + $first', answer: 'db.products.aggregate([{ $sort: { price: -1 } }, { $group: { _id: "$category", topProduct: { $first: "$name" }, topPrice: { $first: "$price" } } }])' },
    ],
  },

  "aHcmsaqAfG5fC90VV-EHP": {
    mentalModel: 'MongoDB 事务和 SQL 事务一样：一组操作要么全部成功，要么全部回滚。但 MongoDB 事务有严格前提——必须是副本集（4.0+）或分片集群（4.2+），单机不支持。',
    sections: [
      { title: '事务使用方式', content: "// mongosh 中使用事务\nsession = db.getMongo().startSession()\nsession.startTransaction()\n\ntry {\n  const coll = session.getDatabase('mydb').getCollection('orders')\n  coll.insertOne({ item: 'book', qty: 1 })\n  coll.updateOne({ item: 'pen' }, { $inc: { stock: -1 } })\n  session.commitTransaction()\n} catch (e) {\n  session.abortTransaction()\n  throw e\n} finally {\n  session.endSession()\n}" },
      { title: '事务的限制', content: '1. 不能对 capped 集合使用事务\n2. 不能在事务中创建/删除集合（大部分 DDL）\n3. 事务内的 $lookup 和 $graphLookup 有限制\n4. 默认 60 秒超时（transactionLifetimeLimitSeconds）\n5. 事务内的读操作必须使用 snapshot readConcern\n6. 性能比非事务操作慢 2-3 倍' },
      { title: '重试机制', content: '事务可能因瞬时错误（网络闪断、主节点选举）失败。MongoDB 驱动提供 withTransaction() 方法自动重试：\n\nsession.withTransaction(async () => {\n  await coll1.insertOne(doc1)\n  await coll2.updateOne(filter, update)\n})\n\nwithTransaction 自动处理 commit 重试和 abort。生产环境推荐使用。' },
    ],
    diagnosis: [
      { symptom: 'startTransaction 报 "Transaction numbers are only allowed on replica sets"', cause: '连接的是单机 MongoDB，不是副本集。', fix: '事务需要副本集或分片集群。单机可以转成单节点副本集：mongod --replSet rs0，然后 rs.initiate()。' },
      { symptom: '事务超时', cause: '事务执行时间超过 transactionLifetimeLimitSeconds（默认 60 秒）。', fix: '1) 减少事务内的操作数量 2) db.adminCommand({ setParameter: 1, transactionLifetimeLimitSeconds: 120 }) 3) 考虑把大事务拆成多个小事务。' },
    ],
    exercises: [
      { level: '基础', task: '描述 MongoDB 事务的前提条件', hint: '副本集/分片集群', answer: '必须是副本集（4.0+）或分片集群（4.2+）。单机不支持。' },
      { level: '进阶', task: '用 withTransaction 实现转账：A 账户减 100，B 账户加 100', hint: 'session.withTransaction + updateOne', answer: "session.withTransaction(async () => {\n  await accounts.updateOne({ name: 'A' }, { $inc: { balance: -100 } })\n  await accounts.updateOne({ name: 'B' }, { $inc: { balance: 100 } })\n})" },
    ],
  },

  "73REfcB_T0yBP-KQ0EYmF": {
    mentalModel: '语言驱动（Driver）是 MongoDB 和各种编程语言的桥梁：把语言原生的数据结构自动转换成 BSON 发送给 MongoDB，再把结果转回语言对象。每个语言都有官方驱动。',
    sections: [
      { title: '主流语言驱动', content: 'Node.js: mongodb（官方）/ mongoose（ODM）\nPython: pymongo（官方）/ mongoengine（ODM）\nJava: mongodb-driver-sync / mongodb-driver-reactivestreams\nGo: mongo-go-driver\nC#: MongoDB.Driver\nRust: mongodb（官方）\nPHP: mongodb extension + mongodb/library\n\n选择建议：新项目直接用官方驱动。需要 Schema 验证和关系映射时用 ODM（Mongoose/MongoEngine）。' },
      { title: 'Node.js 驱动示例', content: "import { MongoClient } from 'mongodb'\n\nconst client = new MongoClient('mongodb://localhost:27017', {\n  maxPoolSize: 50,       // 连接池最大连接数\n  minPoolSize: 10,       // 最小连接数\n  connectTimeoutMS: 5000,\n  retryWrites: true,     // 可重试写入\n  retryReads: true,      // 可重试读取\n})\n\nconst db = client.db('myapp')\nconst users = db.collection('users')\n\nawait users.insertOne({ name: 'Alice', age: 30 })\nconst result = await users.findOne({ name: 'Alice' })" },
      { title: '连接池配置', content: '连接池是性能关键：\n- maxPoolSize: 默认 100。每个连接占一个服务端线程。太大浪费内存，太小阻塞。\n- minPoolSize: 保持一定数量的空闲连接，避免突发请求时创建连接的延迟。\n- maxIdleTimeMS: 空闲连接多久后关闭（默认 0 = 不关闭）。\n- 公式参考：maxPoolSize = (核心数 * 2) + 磁盘数\n\n注意：连接池是 per-process 的。10 个 Node.js worker 进程 = 10 个连接池。' },
    ],
    diagnosis: [
      { symptom: '应用启动后第一批请求很慢', cause: '连接池还没预热，第一批请求需要创建新连接（DNS + TCP + 认证 = 几百ms）。', fix: '设置 minPoolSize > 0 保持最小连接数。或在启动时执行一次 db.admin().ping() 预热连接。' },
      { symptom: '连接池满了报 "Timed out while checking out a connection"', cause: '并发请求超过 maxPoolSize，或者连接泄漏（借出后没归还）。', fix: '1) 增大 maxPoolSize 2) 检查是否有异步操作没有 await 导致连接没释放 3) 设置合理的超时时间。' },
    ],
    exercises: [
      { level: '基础', task: '用 Node.js 驱动连接 MongoDB 并插入一条文档', hint: 'MongoClient + insertOne', answer: "const { MongoClient } = require('mongodb');\nconst client = new MongoClient('mongodb://localhost:27017');\nawait client.connect();\nawait client.db('test').collection('items').insertOne({ name: 'test' });" },
    ],
  },

  "4CjjGPOy-385Bco_PeQwa": {
    mentalModel: '$skip 跳过管道中的前 N 个文档，常和 $sort + $limit 搭配实现分页。但 skip 在大偏移量时性能很差——它需要扫描并丢弃前 N 条文档。',
    handsOn: [
      { title: '基础分页', cmd: 'db.posts.aggregate([{ $sort: { createdAt: -1 } }, { $skip: 20 }, { $limit: 10 }])', output: '// 跳过前 20 条，取接下来 10 条（第 3 页）', explain: '顺序必须是 $sort → $skip → $limit。先排序保证顺序一致，再跳过，最后限制数量。' },
      { title: '游标分页（推荐）', cmd: 'db.posts.aggregate([{ $sort: { _id: -1 } }, { $match: { _id: { $lt: lastSeenId } } }, { $limit: 10 }])', output: '// 从上次看到的文档之后开始取', explain: '用 _id 或排序字段的值做游标，避免 skip。无论第几页性能都一样快（O(1) vs O(N)）。' },
    ],
    diagnosis: [
      { symptom: '$skip 10000 非常慢', cause: 'skip 需要先扫描并丢弃前 10000 条文档，是 O(N) 操作。', fix: '改用游标分页：记住上一页最后一条的 _id，下一页用 { _id: { $lt: lastId } } 查询。' },
      { symptom: '翻页结果有重复或遗漏', cause: '在分页期间有新文档插入或旧文档删除，导致偏移量错位。', fix: '游标分页天然避免这个问题。如果用 skip 分页，在排序字段上加唯一性保证。' },
    ],
    exercises: [
      { level: '基础', task: '实现第 5 页数据，每页 10 条，按日期降序', hint: '$sort + $skip + $limit', answer: 'db.posts.aggregate([{ $sort: { createdAt: -1 } }, { $skip: 40 }, { $limit: 10 }])' },
      { level: '进阶', task: '用游标分页替代 skip 实现同样的效果', hint: '$match + $lt + lastId', answer: 'db.posts.aggregate([{ $sort: { _id: -1 } }, { $match: { _id: { $lt: lastSeenId } } }, { $limit: 10 }])' },
    ],
  },

  "AzUVaGnGv9uypJ31alR9r": {
    mentalModel: '$limit 限制管道传递给下一阶段的文档数量。和 $sort 搭配时 MongoDB 会智能优化——只维护一个大小为 limit 的堆，不需要排序全部数据。',
    handsOn: [
      { title: 'Top N 查询', cmd: 'db.products.aggregate([{ $sort: { price: -1 } }, { $limit: 5 }])', output: '// 最贵的 5 个产品', explain: '$sort + $limit 会被优化：只维护 5 个最大值的堆，而不是排序整个集合。' },
      { title: '$limit 位置影响结果', cmd: "// 先限制再分组：分组的数据只有前 100 条\ndb.orders.aggregate([{ $limit: 100 }, { $group: { _id: '$status', count: { $sum: 1 } } }])\n\n// 先分组再限制：分组结果取前 5 个\ndb.orders.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }, { $limit: 5 }])", output: '// $limit 的位置决定了限制的是原始数据还是聚合结果', explain: '$limit 放在不同位置效果完全不同。想要 Top N 分组结果就放在 $group 后面。' },
      { title: '采样查询', cmd: 'db.logs.aggregate([{ $sample: { size: 100 } }])', output: '// 随机取 100 条文档', explain: '$sample 比 $skip(random) + $limit(1) 更高效。内部使用伪随机游标，不会全表扫描。' },
    ],
    diagnosis: [
      { symptom: '$limit 后 $group 结果不准确', cause: '$limit 在 $group 前面会截断原始数据，分组统计不完整。', fix: '把 $limit 放在 $group 后面。先统计完再取 Top N。' },
    ],
    exercises: [
      { level: '基础', task: '找出最新的 3 条日志', hint: '$sort + $limit', answer: 'db.logs.aggregate([{ $sort: { timestamp: -1 } }, { $limit: 3 }])' },
      { level: '进阶', task: '找出订单数最多的 3 个客户', hint: '$group + $sort + $limit', answer: 'db.orders.aggregate([{ $group: { _id: "$customerId", count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $limit: 3 }])' },
    ],
  },

  "AY-8KJGA9ZA6ay3rbURt3": {
    mentalModel: '$unwind 把文档中的数组"炸开"成多条独立文档：数组有 3 个元素就变成 3 条文档，每条包含一个元素。类似 SQL 的 UNNEST 或 lateral join。是 $group 统计数组内容的必经之路。',
    handsOn: [
      { title: '基础展开', cmd: "// 原文档: { _id: 1, tags: ['mongodb', 'database', 'nosql'] }\ndb.posts.aggregate([{ $unwind: '$tags' }])", output: "// { _id: 1, tags: 'mongodb' }\n// { _id: 1, tags: 'database' }\n// { _id: 1, tags: 'nosql' }", explain: '每个数组元素变成一条独立文档，其他字段被复制。1 条变 3 条。' },
      { title: '保留空数组', cmd: "db.posts.aggregate([{ $unwind: { path: '$tags', preserveNullAndEmptyArrays: true } }])", output: '// tags 为空数组或缺失的文档也会保留', explain: '默认 $unwind 会跳过空数组和缺失字段的文档。preserveNullAndEmptyArrays: true 保留它们。' },
      { title: '输出数组索引', cmd: "db.posts.aggregate([{ $unwind: { path: '$tags', includeArrayIndex: 'tagIndex' } }])", output: "// { _id: 1, tags: 'mongodb', tagIndex: 0 }\n// { _id: 1, tags: 'database', tagIndex: 1 }", explain: 'includeArrayIndex 添加一个新字段记录元素在原数组中的位置（从 0 开始）。' },
    ],
    diagnosis: [
      { symptom: '$unwind 后文档数暴增', cause: '数组很大（如 1000 个元素），$unwind 后变成 1000 条文档。后续阶段处理量激增。', fix: '在 $unwind 前用 $match 过滤掉不需要展开的文档。或用 $slice 只展开前 N 个元素。' },
      { symptom: '$unwind 后 $sum 结果偏大', cause: '展开后每条文档都被当作独立记录统计。比如一个订单有 3 个 item，展开后 count 变成 3 而不是 1。', fix: '在 $unwind 前先计算好文档级别的值（用 $addFields），展开后用 $first 取原始值。' },
    ],
    exercises: [
      { level: '基础', task: '展开 products 的 tags 数组，统计每个 tag 出现次数', hint: '$unwind + $group + $sum', answer: 'db.products.aggregate([{ $unwind: "$tags" }, { $group: { _id: "$tags", count: { $sum: 1 } } }, { $sort: { count: -1 } }])' },
      { level: '进阶', task: '展开订单的 items 数组，计算每个产品的总销售额', hint: '$unwind + $multiply + $group', answer: 'db.orders.aggregate([{ $unwind: "$items" }, { $group: { _id: "$items.product", totalRevenue: { $sum: { $multiply: ["$items.price", "$items.qty"] } } } }])' },
    ],
  },

  "strw_oGTkZEH-o8zA4IRP": {
    mentalModel: '$lookup 是 MongoDB 的 LEFT JOIN：根据本地字段去另一个集合查找匹配文档，把结果放进一个数组字段。简单模式用等值匹配，复杂模式用子管道。',
    handsOn: [
      { title: '简单 $lookup', cmd: "db.orders.aggregate([{ $lookup: { from: 'customers', localField: 'customerId', foreignField: '_id', as: 'customer' } }])", output: '// 每个 order 文档新增 customer 数组字段，包含匹配的客户文档', explain: 'from: 目标集合。localField: 本集合字段。foreignField: 目标集合字段。as: 输出数组字段名。' },
      { title: '子管道模式', cmd: "db.orders.aggregate([{ $lookup: { from: 'products', let: { orderId: '$_id' }, pipeline: [{ $match: { $expr: { $eq: ['$orderId', '$$orderId'] } } }, { $project: { name: 1, price: 1 } }], as: 'items' } }])", output: '// 用子管道做复杂关联：可以加 $match 过滤、$project 投影', explain: '子管道模式更灵活：可以传变量（let）、做复杂过滤、甚至在子管道中嵌套 $lookup。' },
      { title: '$lookup + $unwind', cmd: "db.orders.aggregate([{ $lookup: { from: 'customers', localField: 'customerId', foreignField: '_id', as: 'customer' } }, { $unwind: '$customer' }])", output: '// customer 从数组变成对象，方便后续引用 customer.name', explain: '$lookup 输出是数组。用 $unwind 扁平化后可以直接用 $customer.name 访问字段。' },
    ],
    diagnosis: [
      { symptom: '$lookup 很慢', cause: 'foreignField 没有索引，每次关联都要全表扫描目标集合。', fix: '为 foreignField 建索引：db.customers.createIndex({ _id: 1 })。_id 默认有索引，但自定义 foreignField 需要手动建。' },
      { symptom: '$lookup 结果中 as 字段是空数组', cause: 'localField 的值在目标集合中找不到匹配。可能是类型不匹配（ObjectId vs String）。', fix: '检查两个字段类型是否一致。用 $type 查看：db.orders.findOne({ customerId: { $type: "objectId" } })。' },
    ],
    exercises: [
      { level: '基础', task: '订单关联客户信息', hint: '$lookup + from + localField', answer: "db.orders.aggregate([{ $lookup: { from: 'customers', localField: 'customerId', foreignField: '_id', as: 'customer' } }])" },
      { level: '进阶', task: '查找每个作者的文章列表（一对多关联）', hint: '$lookup 从 authors 到 articles', answer: "db.authors.aggregate([{ $lookup: { from: 'articles', localField: '_id', foreignField: 'authorId', as: 'articles' } }])" },
    ],
  },

  "CfM0iyd2bNRIiDWTUkspd": {
    mentalModel: '$sum 是聚合中最常用的累加器：对一组文档的某个字段求和。在 $group 中做累加器，在 $project/$addFields 中做表达式（对单文档的多个字段求和）。',
    handsOn: [
      { title: '$group 中求和', cmd: 'db.orders.aggregate([{ $group: { _id: "$status", totalAmount: { $sum: "$amount" }, count: { $sum: 1 } } }])', output: '// { _id: "completed", totalAmount: 45000, count: 150 }', explain: '$sum: "$amount" 对 amount 字段求和。$sum: 1 计数（每条文档加 1）。' },
      { title: '$project 中求和', cmd: 'db.products.aggregate([{ $project: { name: 1, totalStock: { $sum: ["$warehouse1", "$warehouse2", "$warehouse3"] } } }])', output: '// { name: "Widget", totalStock: 300 }  (100 + 120 + 80)', explain: '在 $project 中 $sum 接收数组，对同一文档的多个字段求和。' },
      { title: '$sum 忽略非数字', cmd: 'db.data.aggregate([{ $group: { _id: null, total: { $sum: "$value" } } }])', output: '// 非数字值（字符串、null、缺失）被当作 0 处理', explain: '$sum 自动跳过非数字值。如果字段全是非数字，结果为 0。' },
    ],
    diagnosis: [
      { symptom: '$sum 结果为 0 但预期不为 0', cause: '字段值是字符串类型而不是数字。比如 "100" 而不是 100。', fix: '用 $convert 或 $toDouble 转换类型：{ $sum: { $toDouble: "$amount" } }。或修复数据源确保写入时就是数字类型。' },
    ],
    exercises: [
      { level: '基础', task: '统计所有订单的总金额', hint: '$group + _id: null + $sum', answer: 'db.orders.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }])' },
      { level: '进阶', task: '按月统计销售额', hint: '$group + $year + $month', answer: 'db.orders.aggregate([{ $group: { _id: { y: { $year: "$date" }, m: { $month: "$date" } }, total: { $sum: "$amount" } } }, { $sort: { "_id.y": 1, "_id.m": 1 } }])' },
    ],
  },

  "K09-nD6xF5YJUQBBpFXMz": {
    mentalModel: 'MongoDB Spark Connector 让 Apache Spark 直接读写 MongoDB：MongoDB 做数据湖的存储层，Spark 做大规模分析计算。支持谓词下推（把过滤条件推给 MongoDB 执行）。',
    sections: [
      { title: '配置连接', content: '// Spark 依赖（Maven）\n// org.mongodb.spark:mongo-spark-connector_2.12:10.2.0\n\nval spark = SparkSession.builder()\n  .appName("MongoDB Analysis")\n  .config("spark.mongodb.read.connection.uri", "mongodb://host/db.collection")\n  .config("spark.mongodb.write.connection.uri", "mongodb://host/db.results")\n  .getOrCreate()\n\n// 读取 MongoDB 为 DataFrame\nval df = spark.read.format("mongodb").load()' },
      { title: '谓词下推与聚合下推', content: '// Spark 会自动把 filter 下推给 MongoDB\ndf.filter($"age" > 25).filter($"city" === "Beijing")\n// 实际执行的是 MongoDB 查询: { age: { $gt: 25 }, city: "Beijing" }\n\n// 聚合也可以下推\ndf.groupBy($"department").agg(sum($"salary"))\n// 转换为 MongoDB 聚合管道: [{ $group: { _id: "$department", total: { $sum: "$salary" } } }]' },
      { title: '写入 MongoDB', content: '// DataFrame 写入 MongoDB\nresultDf.write\n  .format("mongodb")\n  .mode("overwrite")  // 或 "append"\n  .save()\n\n// 使用 upsert\nresultDf.write\n  .format("mongodb")\n  .option("replaceDocument", "true")\n  .option("forceInsert", "true")\n  .save()' },
    ],
    diagnosis: [
      { symptom: 'Spark 读取 MongoDB 很慢', cause: '没有谓词下推，全量读取了整个集合到 Spark。', fix: '在 Spark 端加 filter 条件触发下推。或用 .option("pipeline", "[{ $match: { ... } }]") 显式指定 MongoDB 端过滤。' },
    ],
    exercises: [
      { level: '基础', task: '描述 MongoDB Spark Connector 的谓词下推是什么', hint: 'Spark filter -> MongoDB $match', answer: 'Spark 把 DataFrame.filter() 条件自动转换成 MongoDB 查询的 $match 阶段，在 MongoDB 端过滤后再传数据给 Spark，减少网络传输。' },
    ],
  },

  "6H2MMnEfS6uHGS-6pFo8u": {
    mentalModel: 'MongoDB 开发者工具覆盖了从 GUI 管理到 CLI 运维的全套：Compass（可视化查询/性能分析）、mongosh（交互式 Shell）、Atlas UI（云管理）、VS Code 扩展（IDE 内操作）。',
    sections: [
      { title: 'MongoDB Compass', content: '官方 GUI 工具，核心功能：\n1. 可视化查询构建器：拖拽字段构建查询条件\n2. 聚合管道编辑器：可视化编写和调试管道\n3. Explain Plan 可视化：图形化展示查询执行计划\n4. Schema 分析：自动分析集合的字段类型分布\n5. 性能面板：实时查看慢查询和索引建议\n\n下载地址：mongodb.com/products/compass' },
      { title: 'mongosh 新版 Shell', content: '取代旧版 mongo shell（基于 Node.js REPL）：\n- 语法高亮、自动补全\n- 内置帮助：help + db.collection.<Tab>\n- 可加载 npm 包：require("lodash")\n- 脚本模式：mongosh --eval "db.stats()"\n- 连接字符串支持 SRV：mongosh "mongodb+srv://cluster..." \n\n常用快捷键：\n- .editor 打开多行编辑器\n- .exit 退出\n- .help 显示帮助' },
      { title: 'Atlas UI 与 MongoDB for VS Code', content: 'Atlas UI：\n- 集群管理：创建/扩展/备份\n- Search 索引管理\n- Realm 应用（Functions、Triggers、GraphQL）\n- 监控面板：CPU/内存/连接数/操作数实时图表\n\nVS Code 扩展：\n- 直接在 IDE 中连接和查询 MongoDB\n- Playground 文件：保存和运行 .mongodb 查询脚本\n- 导出查询结果到 JSON/CSV' },
    ],
    diagnosis: [
      { symptom: '不知道该用哪个工具', cause: 'MongoDB 工具太多，选择困难。', fix: '日常开发用 mongosh（快速灵活）+ VS Code 扩展。性能调优用 Compass（Explain Plan）。云管理用 Atlas UI。数据导出用 mongodump/mongoexport。' },
    ],
    exercises: [
      { level: '基础', task: '用 mongosh 连接到本地 MongoDB 并查看数据库列表', hint: 'mongosh + show dbs', answer: 'mongosh "mongodb://localhost:27017" 然后输入 show dbs' },
    ],
  },

  "kJJ-W6BV1ofIvuFT_PCcz": {
    mentalModel: 'Elasticsearch 集成用于 MongoDB 不适合的场景：复杂全文搜索、日志分析（ELK Stack）。通过 MongoDB Connector 或 Change Streams 把数据实时同步到 ES。',
    sections: [
      { title: 'MongoDB vs Elasticsearch', content: 'MongoDB 擅长：事务性数据、文档 CRUD、聚合分析\nElasticsearch 擅长：全文搜索、日志分析、复杂文本分析\n\n集成模式：\n1. MongoDB 做主存储（source of truth）\n2. Elasticsearch 做搜索/分析层\n3. 数据从 MongoDB 实时同步到 ES\n\n注意：ES 不提供 ACID 事务，不能替代 MongoDB 做主存储。' },
      { title: '同步方案对比', content: '方案 1: MongoDB Atlas Search（推荐）\n- 内置在 MongoDB Atlas 中，无需额外部署\n- 底层是 Lucene，功能和 ES 类似\n- 零运维，数据自动同步\n\n方案 2: Change Streams + 自定义同步\n- 监听 MongoDB 的 Change Stream 事件\n- 在应用层把变更写入 ES\n- 灵活但需要自己处理一致性\n\n方案 3: Mongo Connector（已废弃）\n- 官方工具，但已停止维护\n- 不推荐新项目使用' },
      { title: 'Change Streams 同步示例', content: "// Node.js 监听 Change Stream 同步到 ES\nconst changeStream = collection.watch()\n\nchangeStream.on('change', async (change) => {\n  if (change.operationType === 'insert') {\n    await esClient.index({\n      index: 'products',\n      id: change.documentKey._id.toString(),\n      body: change.fullDocument\n    })\n  } else if (change.operationType === 'update') {\n    await esClient.update({\n      index: 'products',\n      id: change.documentKey._id.toString(),\n      body: { doc: change.updateDescription.updatedFields }\n    })\n  } else if (change.operationType === 'delete') {\n    await esClient.delete({\n      index: 'products',\n      id: change.documentKey._id.toString()\n    })\n  }\n})" },
    ],
    diagnosis: [
      { symptom: 'ES 数据和 MongoDB 不一致', cause: '同步过程中的延迟或失败。Change Stream 有 at-least-once 保证但可能重复。', fix: '1) 同步时做幂等处理（upsert） 2) 定期全量校验 3) 考虑用 Atlas Search 替代（内置一致性保证）。' },
    ],
    exercises: [
      { level: '基础', task: '说出 MongoDB 和 Elasticsearch 各自的强项', hint: 'CRUD vs 全文搜索', answer: 'MongoDB 擅长事务性 CRUD 和文档操作。Elasticsearch 擅长全文搜索、模糊匹配、日志分析。' },
    ],
  },

  "QrHT-H12AV4-V-y_nzmNk": {
    mentalModel: '副本集（Replica Set）是 MongoDB 高可用的基石：一组 mongod 进程维护相同数据副本。一个 Primary 接收写入，多个 Secondary 复制数据。Primary 挂了自动选举新的 Primary。',
    sections: [
      { title: '副本集架构', content: '典型配置：3 节点（1 Primary + 2 Secondary）\n\n写入流程：\n1. 客户端写 Primary\n2. Primary 写入 oplog（操作日志）\n3. Secondary 从 Primary 拉取 oplog 并应用\n4. 写入确认（取决于 writeConcern）\n\n读取流程：\n- 默认读 Primary（强一致）\n- secondary 读偏好可分担读负载（可能有延迟）\n\n故障切换：Primary 宕机后，剩余节点投票选出新 Primary（通常 10-12 秒）。' },
      { title: '搭建副本集', content: '# 启动 3 个 mongod 实例\nmongod --replSet rs0 --port 27017 --dbpath /data/rs0\ mongod --replSet rs0 --port 27018 --dbpath /data/rs1\nmongod --replSet rs0 --port 27019 --dbpath /data/rs2\n\n# 在 mongosh 中初始化\nmongo --port 27017\nrs.initiate({\n  _id: "rs0",\n  members: [\n    { _id: 0, host: "localhost:27017" },\n    { _id: 1, host: "localhost:27018" },\n    { _id: 2, host: "localhost:27019" }\n  ]\n})\n\n# 检查状态\nrs.status()' },
      { title: '关键概念', content: 'Oplog：操作日志，Secondary 通过重放 oplog 同步数据。大小固定（默认 5% 磁盘），满了会覆盖旧记录。\n\n选举：Primary 挂了，剩余节点通过投票选新 Primary。需要多数票（quorum），所以节点数必须是奇数。\n\nArbiter：不存储数据的投票节点，用于偶数节点场景凑奇数票。\n\nPriority：优先级高的节点更可能成为 Primary。\n\nHidden：不参与选举、不被客户端访问的节点，用于备份或报表。' },
    ],
    diagnosis: [
      { symptom: 'rs.status() 显示 SECONDARY 一直 RECOVERING', cause: 'Secondary 落后太多，oplog 中需要的操作已经被覆盖了（stale）。', fix: '增大 oplog 大小（rs.resizeOplog）或从备份重新同步（resync）。检查网络带宽是否足够。' },
      { symptom: '写入报 "not primary"', cause: '客户端连到了 Secondary 而不是 Primary。或 Primary 刚切换，客户端还没发现新 Primary。', fix: '连接字符串用副本集格式：mongodb://host1,host2,host3/?replicaSet=rs0。驱动会自动发现 Primary。' },
    ],
    exercises: [
      { level: '基础', task: '说出副本集中 Primary 和 Secondary 的区别', hint: '写入 vs 复制', answer: 'Primary 接收所有写入操作。Secondary 从 Primary 的 oplog 复制数据。默认只读 Primary，Secondary 可用于读分担。' },
      { level: '进阶', task: '为什么副本集节点数应该是奇数？', hint: '选举需要多数票', answer: '选举需要多数票（quorum）。偶数节点时可能出现票数相等无法选出 Primary。3 节点容忍 1 个挂掉，5 节点容忍 2 个。' },
    ],
  },

  "CijW3HCjVRZHQIBsQ9_0H": {
    mentalModel: '分片集群（Sharded Cluster）把数据水平分散到多个 mongod 实例（shard）上：当单个副本集放不下或扛不住时使用。每个 shard 是一个独立的副本集，通过 shard key 决定数据分配。',
    sections: [
      { title: '分片架构', content: '三大组件：\n1. mongos（路由器）：客户端连接 mongos，mongos 把查询路由到正确的 shard\n2. Config Server（配置服务器）：存储集群元数据（shard 映射、chunk 分布）。也是副本集。\n3. Shard（数据节点）：每个 shard 是一个副本集，存储部分数据。\n\n客户端 → mongos → 根据 shard key 路由 → 对应 shard' },
      { title: 'Shard Key 选择', content: 'Shard Key 决定数据如何分布，选择原则：\n1. 高基数（Cardinality）：值范围大，chunk 容易均匀分布\n2. 写入分散：避免热点 shard（所有写入打到一个 shard）\n3. 查询覆盖：常用查询包含 shard key，mongos 可以定向路由（targeted query）而不是 scatter-gather\n\n推荐策略：\n- hashed shard key：写入分散好，但范围查询变 scatter-gather\n- ranged shard key：范围查询高效，但可能有热点\n- compound key：如 { customerId: 1, createdAt: 1 }' },
      { title: 'Chunk 与 Balancer', content: '数据被分成 chunk（默认 64MB）。每个 chunk 属于一个 shard。\n\nBalancer 进程自动在 shard 之间迁移 chunk，保持数据均衡。\n\n问题：\n- chunk 迁移期间查询可能变慢\n- 迁移需要网络带宽\n- 可以设置维护窗口限制迁移时间\n\n手动管理：\nsh.addShardTag() / sh.addTagRange() 控制数据分布（zone sharding）' },
    ],
    diagnosis: [
      { symptom: '一个 shard 数据量远大于其他 shard', cause: 'Shard Key 选择不当导致数据倾斜（jumbo chunk 或热点写入）。', fix: '1) 考虑更换 shard key（需要 reshardCollection，5.0+）2) 使用 hashed shard key 均匀分布 3) 检查是否有 jumbo chunk 阻止迁移。' },
      { symptom: '查询在分片集群上比单节点还慢', cause: '查询不包含 shard key，mongos 做 scatter-gather（向所有 shard 发查询再合并结果）。', fix: '优化查询条件包含 shard key。或在应用层做两次查询：先用辅助索引找到 shard key，再定向查询。' },
    ],
    exercises: [
      { level: '基础', task: '说出分片集群的三大组件', hint: '路由 + 配置 + 数据', answer: 'mongos（路由器）、Config Server（配置服务器）、Shard（数据节点，每个是副本集）。' },
      { level: '进阶', task: '为电商订单集合选择 shard key，说明理由', hint: '考虑写入分散和查询覆盖', answer: '{ customerId: "hashed" }：写入均匀分散（hashed），按客户查询时定向路由。或 compound key { customerId: 1, orderDate: 1 } 支持客户+时间范围查询。' },
    ],
  },

  "TKngxMNGMgrdO26D7eeSg": {
    mentalModel: 'mongorestore 是 mongodump 的逆操作：把 BSON 备份文件恢复到 MongoDB。可以恢复到原集群或新集群，支持选择性恢复（指定数据库/集合）。',
    handsOn: [
      { title: '恢复全部数据', cmd: 'mongorestore --uri "mongodb://localhost:27017" /backup/dump/', output: '2024-01-15T10:00:00  restoring from /backup/dump/\n2024-01-15T10:00:01  mydb.orders  15000 documents restored\n2024-01-15T10:00:02  mydb.users   5000 documents restored', explain: '恢复 /backup/dump/ 下所有 BSON 文件。默认追加模式（不删除已有数据）。' },
      { title: '恢复到指定数据库', cmd: 'mongorestore --uri "mongodb://localhost:27017" --nsFrom "olddb.*" --nsTo "newdb.*" /backup/dump/', output: '// 把 olddb 的所有集合恢复到 newdb', explain: '--nsFrom/--nsTo 实现命名空间映射。可以把备份恢复到不同数据库名。' },
      { title: '覆盖恢复', cmd: 'mongorestore --uri "mongodb://localhost:27017" --drop /backup/dump/', output: '// 恢复前先删除目标集合', explain: '--drop 在恢复前删除已有集合，确保恢复后数据和备份完全一致。不加 --drop 是追加模式。' },
    ],
    diagnosis: [
      { symptom: 'mongorestore 报 "duplicate key error"', cause: '目标集合已有相同 _id 的文档。默认追加模式不会覆盖。', fix: '加 --drop 先清空集合再恢复。或用 --writeConcern "{ w: 1 }" 忽略重复错误（不推荐）。' },
      { symptom: '恢复后索引缺失', cause: 'BSON 文件只包含数据，索引信息在 metadata.json 中。如果 metadata.json 缺失或损坏，索引不会被创建。', fix: '检查备份目录中是否有 .metadata.json 文件。如果缺失，需要手动重建索引：db.collection.getIndexes() 对比后 createIndex。' },
    ],
    exercises: [
      { level: '基础', task: '从备份恢复 mydb 数据库', hint: 'mongorestore + --db', answer: 'mongorestore --uri "mongodb://localhost:27017" --db mydb /backup/dump/mydb/' },
      { level: '进阶', task: '把生产备份恢复到测试环境，数据库名改为 mydb_test', hint: '--nsFrom + --nsTo', answer: 'mongorestore --uri "mongodb://localhost:27017" --nsFrom "mydb.*" --nsTo "mydb_test.*" /backup/dump/' },
    ],
  },

  "cOKQQ7SaiawWF49MdCGTh": {
    mentalModel: 'MongoDB 扩展分两个维度：垂直扩展（升级单机配置）和水平扩展（分片集群）。优先垂直扩展（简单），瓶颈到了再分片（复杂）。',
    sections: [
      { title: '垂直扩展（Scale Up）', content: '升级单节点配置：\n1. RAM：WiredTiger 缓存设为 RAM 的 50-60%。更多 RAM = 更多数据在内存中。\n2. CPU：更多核心 = 更多并发查询。写操作受全局锁限制（WiredTiger 文档级锁已改善）。\n3. 磁盘 IOPS：SSD 必备。NVMe SSD 比 SATA SSD 快 5-10 倍。\n4. 网络：10Gbps 网卡用于副本集同步和大查询。\n\n什么时候够用：大多数应用在 16C 64G + NVMe SSD 上能处理每秒数万 QPS。' },
      { title: '水平扩展（Scale Out）', content: '分片集群（Sharded Cluster）：\n- 数据按 shard key 分布到多个 shard\n- 每个 shard 是独立的副本集\n- mongos 路由器分发查询\n\n适用场景：\n- 数据集超过单机 RAM（>256GB）\n- 写入 QPS 超过单机极限（>50K wps）\n- 需要地理分布（zone sharding）\n\n成本：运维复杂度 10 倍增长。需要经验丰富的 DBA。' },
      { title: '读写分离扩展', content: '副本集读取扩展：\n- 默认读 Primary（强一致）\n- secondary 读偏好分担读负载\n- 连接字符串加 readPreference=secondary\n\n注意：\n- Secondary 可能有复制延迟（几秒到几十秒）\n- 不适合需要强一致的读操作\n- 适合报表、分析等容忍短暂延迟的读操作\n\nAtlas 还提供 Online Archive：把冷数据自动迁移到低成本存储。' },
    ],
    diagnosis: [
      { symptom: '什么时候该分片？', cause: '不确定当前瓶颈是 CPU/内存/IO 还是架构限制。', fix: '先监控：mongotop + mongostat + Atlas 监控面板。如果 CPU 和 IO 都没满但 QPS 上不去，可能是锁竞争或查询效率问题，优化查询比加机器更有效。' },
    ],
    exercises: [
      { level: '基础', task: '说出垂直扩展和水平扩展的区别', hint: '升级配置 vs 增加节点', answer: '垂直扩展：升级单机 CPU/RAM/磁盘。水平扩展：分片集群把数据分散到多个节点。' },
    ],
  },

  "iVDxuERBjKMBHueEfqP0x": {
    mentalModel: 'MongoDB 配置调优的核心是三件事：WiredTiger 缓存大小、写入关注级别、日志与诊断开关。默认配置适合开发，生产环境必须调优。',
    sections: [
      { title: 'mongod.conf 关键配置', content: 'storage:\n  wiredTiger:\n    engineConfig:\n      cacheSizeGB: 32     # 设为 RAM 的 50-60%\n      journalCompressor: snappy  # 日志压缩\n  directoryPerDB: true    # 每个数据库独立目录\n\nnet:\n  maxIncomingConnections: 65536  # 默认 65536\n  compression:\n    compressors: snappy,zstd  # 网络压缩\n\noperationProfiling:\n  mode: slowOp             # slowOp | all | off\n  slowOpThresholdMs: 100   # 慢查询阈值\n\nsetParameter:\n  logLevel: 1              # 0-5，越高越详细' },
      { title: 'WiredTiger 调优', content: 'WiredTiger 是 MongoDB 的存储引擎（3.2+ 默认）：\n\n1. cacheSizeGB：最重要。默认 (RAM-1GB)/2。多实例部署时要手动设置避免争抢。\n2. directoryForIndexes：把索引和数据文件分开目录，方便 SSD 优化。\n3. journalCompressor：snappy（默认，快）或 zlib（压缩率高但慢）。\n4. collectionConfig.blockCompressor：数据块压缩。zstd 比 snappy 多压 30%。\n\n检查当前配置：\ndb.serverStatus().wiredTiger.cache' },
      { title: '连接与超时', content: '# 连接相关\nnet.maxIncomingConnections: 65536\nnet.ipv6: true\n\n# 超时设置\nsetParameter:\n  maxTransactionLockRequestTimeoutMillis: 5000  # 事务锁等待超时\n  transactionLifetimeLimitSeconds: 60           # 事务最长生命周期\n  cursorTimeoutMillis: 600000                   # 游标超时（10 分钟）\n\n# 连接字符串调优\nmongodb://host/?maxPoolSize=100&connectTimeoutMS=5000&socketTimeoutMS=30000' },
    ],
    diagnosis: [
      { symptom: 'WiredTiger 缓存命中率低', cause: 'cacheSizeGB 太小，工作集（hot data）放不进缓存。', fix: 'db.serverStatus().wiredTiger.cache 查看 "tracked dirty bytes" 和 "pages read into cache"。如果 pages read 持续增长说明缓存不够。增大 cacheSizeGB。' },
      { symptom: '连接数达到上限', cause: '应用连接池 maxPoolSize 太大，或多个应用实例连接同一个 MongoDB。', fix: '检查 net.maxIncomingConnections。减少应用端 maxPoolSize。使用 mongos 做连接汇聚。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前 WiredTiger 缓存配置', hint: 'db.serverStatus()', answer: 'db.serverStatus().wiredTiger.cache' },
      { level: '进阶', task: '配置 mongod.conf 让缓存为 32GB，开启慢查询日志（阈值 200ms）', hint: 'wiredTiger + operationProfiling', answer: 'storage:\n  wiredTiger:\n    engineConfig:\n      cacheSizeGB: 32\noperationProfiling:\n  mode: slowOp\n  slowOpThresholdMs: 200' },
    ],
  },

  "XjB0uOnsYl4edzZWpQ-nm": {
    mentalModel: '索引是 MongoDB 查询性能的核心：没有索引就是全表扫描（COLLSCAN），有索引就是索引扫描（IXSCAN）。MongoDB 用 B-Tree 索引，和 MySQL 类似。',
    handsOn: [
      { title: '创建单字段索引', cmd: "db.users.createIndex({ email: 1 })", output: "// 在 email 字段上创建升序索引", explain: "1 = 升序，-1 = 降序。单字段索引方向对查询性能没影响（MongoDB 可以反向遍历索引）。" },
      { title: '复合索引', cmd: "db.orders.createIndex({ status: 1, createdAt: -1 })", output: "// 先按 status 排序，再按 createdAt 排序", explain: "复合索引遵循 ESR 原则：Equality（等值）→ Sort（排序）→ Range（范围）。" },
      { title: '查看和删除索引', cmd: "db.orders.getIndexes()\ndb.orders.dropIndex('status_1_createdAt_-1')", output: "// getIndexes 列出所有索引\n// dropIndex 按名称删除", explain: "每个集合自动有 _id 索引，不能删除。过多索引会拖慢写入速度。" },
    ],
    diagnosis: [
      { symptom: "查询还是 COLLSCAN  despite 建了索引", cause: "查询条件字段和索引字段不匹配，或查询使用了索引不支持的操作符。", fix: "用 explain() 查看 winningPlan。确保查询字段是索引的前缀。注意：$ne、$nin、$not 不能有效使用索引。" },
      { symptom: "写入速度越来越慢", cause: "索引太多。每个索引在写入时都要更新。", fix: "用 db.collection.getIndexes() 检查。用 $indexStats 聚合查看索引使用频率，删除不用的索引。" },
    ],
    exercises: [
      { level: '基础', task: "为 users 集合的 email 字段创建唯一索引", hint: "createIndex + unique", answer: "db.users.createIndex({ email: 1 }, { unique: true })" },
      { level: '进阶', task: "为订单查询设计复合索引：按 status 等值筛选 + 按 date 范围过滤 + 按 date 排序", hint: "ESR 原则", answer: "db.orders.createIndex({ status: 1, date: 1 }) — status 等值放前面，date 范围和排序共用同一方向。" },
    ],
  },

  "4L9UQ4oaaK3wZwOLIMa6T": {
    mentalModel: '查询优化的核心循环：explain() 分析 → 发现问题 → 建索引/改查询 → 再 explain() 验证。没有 explain 的优化都是盲猜。',
    handsOn: [
      { title: 'explain 三种模式', cmd: 'db.orders.find({ status: "active" }).explain("executionStats")', output: '// queryPlanner: 查询计划（选了哪个索引）\n// executionStats: 执行统计（扫描了多少文档）\n// allPlansExecution: 所有候选计划的对比', explain: 'executionStats 最常用。关注 totalDocsExamined（扫描文档数）和 nReturned（返回数）。比值越接近 1 越好。' },
      { title: '识别慢查询', cmd: 'db.collection.find().explain("executionStats").executionStats', output: '// executionTimeMillis: 执行时间（ms）\n// totalDocsExamined: 扫描文档数\n// totalKeysExamined: 扫描索引条目数\n// nReturned: 返回文档数', explain: 'executionTimeMillis > 100ms 要关注。totalDocsExamined >> nReturned 说明索引不够。' },
      { title: 'Covered Query', cmd: "db.users.find({ status: 'active' }, { name: 1, _id: 0 }).explain()", output: "// winningPlan.inputStage.stage: 'IXSCAN'\n// 没有 FETCH 阶段 = covered query", explain: "Covered Query：查询字段和返回字段都在索引中，不需要回表读文档。最快的查询类型。" },
    ],
    diagnosis: [
      { symptom: "explain 显示 COLLSCAN", cause: "没有可用索引。查询条件字段没有建索引。", fix: "为查询条件字段建索引。复合查询建复合索引。" },
      { symptom: "explain 显示 IXSCAN 但 totalDocsExamined 很大", cause: "索引选择性不够（比如 sex 字段只有 M/F 两个值）。", fix: "使用更有选择性的字段做索引。或用复合索引增加区分度。" },
    ],
    exercises: [
      { level: '基础', task: "分析一个查询的执行计划", hint: ".explain('executionStats')", answer: "db.orders.find({ total: { $gt: 100 } }).explain('executionStats') — 看 winningPlan.stage 和 totalDocsExamined。" },
      { level: '进阶', task: "优化一个慢查询并验证效果", hint: "explain → 建索引 → 再 explain", answer: "1) explain 发现 COLLSCAN 2) createIndex 3) 再 explain 确认 IXSCAN 且 totalDocsExamined 接近 nReturned。" },
    ],
  },

  "NV39oWwr7iB_dnlnD_Q6Y": {
    mentalModel: 'X.509 证书认证是 MongoDB 最安全的认证方式：不用传输密码，用 TLS 证书双向验证身份。客户端验证服务端证书（防钓鱼），服务端验证客户端证书（防冒充）。',
    sections: [
      { title: 'X.509 认证流程', content: '1. 生成 CA（证书颁发机构）：openssl genrsa + openssl req\n2. 生成服务端证书：CA 签名\n3. 生成客户端证书：CA 签名\n4. MongoDB 配置：\n   net:\n     tls:\n       mode: requireTLS\n       certificateKeyFile: /certs/server.pem\n       CAFile: /certs/ca.pem\n   security:\n     clusterAuthMode: x509\n5. 在 $external 数据库创建用户：\n   db.getSiblingDB("$external").createUser({\n     user: "CN=myapp,OU=Engineering,O=Company,L=City,ST=State,C=US",\n     roles: [{ role: "readWrite", db: "mydb" }]\n   })' },
      { title: '客户端连接', content: '// mongosh 使用客户端证书连接\nmongosh "mongodb://host:27017/mydb" \\\n  --tls \\\n  --tlsCertificateKeyFile /certs/client.pem \\\n  --tlsCAFile /certs/ca.pem\n\n// Node.js 驱动连接\nconst client = new MongoClient(uri, {\n  tls: true,\n  tlsCertificateKeyFile: "/certs/client.pem",\n  tlsCAFile: "/certs/ca.pem"\n})' },
      { title: '证书管理注意事项', content: '1. 证书有效期：建议 1 年，到期前续期\n2. CRL（证书吊销列表）：被泄露的证书需要加入 CRL\n3. Subject 必须唯一：用户名就是证书的 Subject DN\n4. 内部通信：副本集成员之间也可以用 X.509 互相认证\n5. 自动化：用 cert-manager 或 Vault PKI 自动签发和续期' },
    ],
    diagnosis: [
      { symptom: "连接报 'TLS handshake failed'", cause: "客户端证书不被 CA 信任，或证书过期。", fix: "1) 确认 --tlsCAFile 指向正确的 CA 证书 2) 用 openssl x509 -in cert.pem -noout -dates 检查有效期 3) 确认客户端证书是由同一 CA 签发的。" },
      { symptom: "认证成功但授权失败", cause: "$external 数据库中创建的用户 Subject 和证书的 Subject DN 不完全匹配。", fix: "用 openssl x509 -in client.pem -noout -subject 查看证书的精确 Subject，确保和 createUser 的 user 字段完全一致（包括空格和顺序）。" },
    ],
    exercises: [
      { level: '基础', task: "说出 X.509 认证和用户名密码认证的核心区别", hint: "证书 vs 密码", answer: "X.509 用 TLS 证书双向验证身份，不传输密码。用户名密码认证需要传输和验证密码。X.509 更安全但配置复杂。" },
    ],
  },
};

