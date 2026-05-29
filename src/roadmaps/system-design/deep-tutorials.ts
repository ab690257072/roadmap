import type { DeepTutorial } from '../deep-types';

export const SYSTEM_DESIGN_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  // ==================== STAGE 01: Introduction ====================
  "_hYN0gEi9BL24nptEtXWU": {
    mentalModel: '系统设计就像城市规划——你不能上来就盖楼，要先规划道路（网络）、分区（服务拆分）、供水供电（基础设施）、交通调度（负载均衡）。架构师的职责是在图纸阶段发现问题，而不是楼塌了再补救。',
    sections: [
      { title: '什么是系统设计?', content: '系统设计是将业务需求转化为可运行的技术架构的过程。它涵盖数据模型、API 设计、组件拓扑、容量规划、可靠性策略。现实例子：Twitter 从单机 MySQL 起步，发展到微服务+Kafka+缓存多级架构，就是为了应对亿级 DAU。' },
      { title: '为什么要学系统设计?', content: '面试重灾区（FAANG 必考），也是高级工程师的日常。你不会今天写个 hashmap，明天写个 trie，但你会每天做容量评估、技术选型、故障预案。系统设计的本质是 trade-off：没有完美架构，只有合适方案。' },
      { title: '学习路径', content: '从 CAP 定理出发，理解分布式系统的根本约束 → 掌握常用组件（LB/CDN/Cache/MQ/DB）→ 学习设计模式（pub-sub/circuit-breaker/CQRS）→ 实战：设计 Twitter/YouTube/Uber。每一步都有真实案例支撑。' },
    ],
    diagnosis: [{ symptom: '面试时不知道从哪里开始做系统设计', cause: '缺少结构化框架——上来就画数据库 schema，而不是先理清需求和约束。', fix: '使用 4 步法：①明确需求（功能+非功能）②估算规模（QPS/存储/带宽）③设计顶层架构图 ④深入每个组件。从粗到细，逐层展开。' }],
    exercises: [
      { level: '基础', task: '用一句话向非技术人员解释：什么是系统设计?', hint: '用城市规划和盖房子的类比', answer: '系统设计就是给软件系统画蓝图——先决定需要哪些"房间"（服务），它们怎么互通（API），怎么保证不会停水停电（高可用），并且将来能随时加盖楼层（可扩展）。' },
      { level: '进阶', task: '评估一个每秒 1000 次请求的电商网站：它需要什么样的核心组件？列出至少 5 个。', hint: '考虑负载均衡、缓存、数据库、消息队列、CDN', answer: '①负载均衡器（分发流量到多台服务器）②Web/应用服务器集群 ③缓存层（Redis）缓存热点商品 ④数据库（主从复制+读写分离）⑤CDN（静态资源加速）⑥消息队列（订单异步处理）⑦搜索服务（Elasticsearch）' },
    ],
  },

  "idLHBxhvcIqZTqmh_E8Az": {
    mentalModel: '系统设计如同赛车改装——你不仅要选择发动机（核心算法）、变速箱（数据处理流程）、悬挂（扩展性），还要确保任何一个零件的升级不会让整车报废（向后兼容）。',
    sections: [
      { title: '核心定义', content: '系统设计回答：系统由哪些组件构成？组件之间如何通信？数据如何流动？如何保证可靠性、可扩展性、可维护性？例如 Netflix 的架构演进：DC 单机房→AWS 多云→微服务+Chaos Engineering，每次重构都是根据业务需求驱动。' },
      { title: '从问题到方案', content: '设计 Uber 时，核心问题是：怎么把最近的司机匹配给乘客？方案：①用 Geohash 做地理分区 ②Google S2 做球形网格索引 ③实时位置通过 WebSocket 上报 ④匹配引擎用 Redis Geo+消息队列。每一步解决一个具体问题。' },
    ],
    diagnosis: [{ symptom: '设计出的架构"大而全"但无法落地', cause: '没有优先级的意识——把所有组件都塞进 V1，结果复杂度爆炸。', fix: '先画出 MVP 架构（最小可行系统），再逐步演进。Twitter V1 就是单台 MySQL+几台 Web 服务器。等瓶颈出现再引入缓存、队列、微服务。Every system starts simple.' }],
    exercises: [
      { level: '基础', task: '列举系统设计的 3 个核心目标并各给一个真实系统例子', hint: '可扩展性、可用性、可维护性', answer: '①可扩展性：Netflix 从几千用户增长到 2 亿+，通过微服务+弹性伸缩实现 ②可用性：Amazon 要达到 99.99% 可用，使用多 AZ 部署+自动故障转移 ③可维护性：Google 的代码 monorepo 让工程师可以跨服务修改代码，保持一致性。' },
      { level: '进阶', task: '假设你要设计一个短链接系统（类似 bit.ly），列出完整的非功能性需求', hint: 'QPS、延迟、存储、可用性、安全性', answer: '①QPS：假设日活 1000 万，每日生成 100 万短链→约 12 QPS 写（峰值 3x = 36 QPS），读 QPS 约为写的 10 倍 ②延迟：重定向 P99 < 10ms ③存储：1 亿条短链×500B = 50GB，5 年=250GB ④可用性 99.99%（用户点链接不能失败）⑤安全性：防止枚举短链、防止恶意链接、限流防刷' },
    ],
  },

  "os3Pa6W9SSNEzgmlBbglQ": {
    mentalModel: '做系统设计就像解数学压轴题——你需要一个清晰的解题步骤，而不是凭感觉乱画。面试官想看的不是标准答案，而是你拆解问题、权衡取舍、沟通思考的过程。',
    sections: [
      { title: '标准 4 步法', content: '第 1 步：需求澄清（问清楚功能边界、用户量级、技术约束）第 2 步：容量估算（算 QPS、存储、带宽——用数字说话）第 3 步：顶层架构（画方块图：哪些服务、怎么通信）第 4 步：深挖瓶颈（数据库怎么扩展？缓存怎么设计？怎么处理故障？）每一步都要和面试官确认方向。' },
      { title: '常见陷阱', content: '①上来就画数据库 ER 图（太细节）②不提非功能性需求（可用性、延迟、一致性）③忽略边缘 case（ID 冲突、时区问题、恶意请求）④不说 trade-off（为什么选 Kafka 而不是 RabbitMQ）⑤一言不发自己画图（面试是对话不是独角戏）。' },
    ],
    diagnosis: [{ symptom: '系统设计面试中说到一半卡壳了', cause: '对某个组件不够了解，或者没有事先准备结构化思考路径。', fix: '诚实说"这部分我不太确定，但我的思路是……"然后跳到下一个话题。面试官重视的是你的思维框架，不是每个细节都完美。准备时用白板练习，计时 45 分钟完成一个设计。' }],
    exercises: [
      { level: '基础', task: '用系统设计 4 步法流程，5 分钟内概述一个"URL 缩短服务"的设计方向', hint: '功能→估算→架构图→细节', answer: '①功能：用户输入长 URL→生成短码→用户访问短 URL→302 重定向到长 URL ✅分析统计（可选）②估算：日生成 100 万 URL，读写比 1:10，QPS ~1200 ③架构：LB→Web Server→(短码生成+Redis 缓存)→MySQL 持久化 ④细节：短码用 base62 编码发号器生成的 ID，缓存命中率目标 90%+。' },
      { level: '进阶', task: '模拟面试：设计一个限时抢购系统（秒杀），写出你的 4 步思路', hint: '高并发写、库存扣减一致性、防黄牛', answer: '①需求：100 万用户抢 1 万件商品，瞬时 QPS 可能 10 万+ ②架构：CDN→LB→Web 层（静态化抢购页面）→Redis 预减库存→MQ 异步下单→DB 幂等处理 ③关键设计：静态页面（零 DB 查询）、Redis Lua 脚本原子扣库存、请求排队削峰、IP/用户限流 ④trade-off：用最终一致性（下单成功异步通知）换极致吞吐。' },
    ],
  },

  "e_15lymUjFc6VWqzPnKxG": {
    mentalModel: '性能是跑车的极速，扩展性是加个挂斗还能跑多快。性能不够→用户等得烦；扩展性不够→多加服务器也没用。一个好系统两者都要——快，而且能成群结队地快。',
    sections: [
      { title: '性能 vs 扩展性', content: '性能（Performance）衡量单机能力：一个请求多快被处理？通常看延迟（latency）。扩展性（Scalability）衡量加机器是否线性提升能力：加 2 倍机器，吞吐是否增加 2 倍？现实中的例子：早期的 MySQL 单库读性能很好，但写扩展性差；引入分库分表后扩展性好了，但单次查询性能变差——这就是 trade-off。' },
      { title: '扩展的两种方式', content: '垂直扩展（scale up）：换更大的机器（更多 CPU/内存/磁盘）。简单粗暴但有限，而且贵。水平扩展（scale out）：加更多机器组成集群。复杂但几乎无限，且便宜。Google 用百万台普通 PC 而非几台小型机就是水平扩展哲学的极致。' },
    ],
    diagnosis: [{ symptom: '系统加机器后吞吐量不升反降', cause: '存在瓶颈点——可能是数据库连接池不够、共享状态竞争（锁）、或网络带宽打满。', fix: '用性能剖析工具找出瓶颈（火焰图/p99 延迟分桶）。常见解决：连接池调大、减少锁粒度（cas 替代 mutex）、异步化写操作、数据分片消除热 key。' }],
    exercises: [
      { level: '基础', task: '用一句话向非技术人员解释"性能"和"扩展性"的区别', hint: '一辆卡车 vs 一支车队', answer: '性能是一辆卡车的马力——装 1 吨货跑多快。扩展性是你加 10 辆卡车时，车队整体是不是能拉 10 吨货并且每辆还跑那么快。有的系统像"拖拉机车队"：多加一辆反而堵路。' },
      { level: '进阶', task: '一个 Web 服务当前 4 台机器支撑 1000 QPS（每台 250 QPS）。加 4 台后达到 1600 QPS（每台 200 QPS，共 8 台）。计算扩展效率，并分析可能原因', hint: '扩展效率 = 实际吞吐增长 / 理想吞吐增长', answer: '理想吞吐：1000×2 = 2000 QPS，实际：1600 QPS，扩展效率 = 600/1000 = 60%。可能原因：①数据库连接池上限（共享瓶颈）②集中式缓存竞争 ③锁竞争（同步写日志）④负载不均衡（新机器处理更少）。排查：检查 DB 慢查询、连接池等待时间、CPU 利用率是否打满。' },
    ],
  },

  "O3wAHLnzrkvLWr4afHDdr": {
    mentalModel: '延迟-吞吐的比喻是高速公路收费站：每辆车通过耗时是延迟，每小时总通过车数是吞吐。窗口越多（并行），吞吐越大——但每个窗口的速度（延迟）不会变快。系统设计就是在不提高延迟的前提下最大化吞吐。',
    sections: [
      { title: '延迟', content: '延迟（Latency）= 数据从 A 到 B 再回来的时间（RTT）。包括：网络传输（光速限制，SF 到纽约~40ms）+ 排队等待 + 服务处理。亚马逊发现每 100ms 延迟减少 1% 销售额。Netflix CDN 把视频推到 ISP 边缘就是为了减少延迟。P50/P99/P999 分位比平均值重要：1% 用户的糟糕体验决定口碑。' },
      { title: '吞吐', content: '吞吐（Throughput）= 单位时间内处理的数据量（QPS/Mbps/TPS）。批处理可以提高吞吐但增加延迟——100 个请求打包一次处理，单个请求等待时间变长。Kafka 以毫秒延迟达到百万 TPS 是通过顺序写磁盘+零拷贝+分区并行实现的。' },
    ],
    diagnosis: [{ symptom: 'P50 延迟很小（5ms），但 P99 延迟巨大（500ms）', cause: '长尾延迟（tail latency）——个别请求在队列中久等，或触发了慢路径、GC 暂停、锁竞争。', fix: '采用"对冲请求"（发送请求到多台服务器，取最先返回的）或"备份请求"（P95 延迟时发第二个请求）。Google 的 Bigtable 和大规模 RPC 系统大量使用这种策略。' }],
    exercises: [
      { level: '基础', task: '一台服务器处理能力 100 QPS，平均延迟 10ms。如果 QPS 增加到 150，吞吐和延迟会怎样？', hint: '排队论——当请求到达率接近处理能力时', answer: '当到达率 > 处理能力时，请求开始排队，延迟飙升。100→150 QPS 时，部分请求失败或超时，有效吞吐可能反而低于 100 QPS。延迟曲线呈"曲棍球棒"形状：在饱和点之前平缓，饱和之后指数增长。' },
      { level: '进阶', task: '设计一个延迟敏感的实时竞价系统，要求 P99 延迟 < 50ms，QPS 10 万。用什么存储和通信模式？', hint: '不能落盘、不能用锁、尽量无 GC', answer: '存储：全内存（Redis/本地内存），数据预热加载。通信：protobuf+gRPC 或 FlatBuffers（零反序列化开销）。语言：C++/Rust/Go（避免 GC 停顿）。架构：无状态服务+一致性哈希路由，确保请求落在缓存了其数据的节点上。限流在入口处丢弃超阈值请求（drop fast > wait slow）。' },
    ],
  },

  "uJc27BNAuP321HQNbjftn": {
    mentalModel: 'CAP 定理是分布式系统的广义已知定律——可用性和一致性是一对跷跷板：你踩低一头，另一头就翘起。银行取款（强一致）宁可停机不可算错；微博点赞（最终一致）宁可数错一会儿不可停机——场景决定取舍。',
    sections: [
      { title: 'PACELC 扩展', content: 'CAP 太粗糙了。现实系统在正常运行（无网络分区时）也要权衡延迟（Latency）和一致性（Consistency）。PACELC 定理说：if Partition, choose A or C; else choose L or C。DynamoDB 默认 PA/EL（分区时可用优先、正常时延迟优先），可以配置为 PC/EC 的强一致读。' },
      { title: '实际案例', content: '①Amazon DynamoDB：选择 AP（分区时保证可用性，用冲突解决替代强一致）②Google Spanner：选择 CP（用 TrueTime API 实现外部一致性，承诺强一致但全球可用性问题）③ZooKeeper：CP 系统，Leader 挂了集群会短暂不可写。这就是为什么 etcd 在 Kubernetes 中也是 CP。' },
    ],
    diagnosis: [{ symptom: '系统突然不一致了，主从数据库数据不一样', cause: '主从复制延迟（replication lag）——主库写完，从库还没同步。', fix: '方案 A：关键读（如刚写的订单）路由到主库（写后读一致性）。方案 B：使用中间件如 ProxySQL 根据 GTID 等待从库追上。方案 C：（最终一致性场景）接受短暂不一致，UI 层做乐观更新。' }],
    exercises: [
      { level: '基础', task: '判断下面系统的 CAP 选择：①银行转账 ②微博时间线 ③DNS ④分布式锁', hint: '哪些能容忍短暂不一致？哪些必须强一致？', answer: '①银行转账：CP（宁可不行也不能转错）②微博：AP（看到稍旧时间线可接受）③DNS：AP（最终一致性，缓存 TTL 策略）④分布式锁：CP（宁可不获锁也不能两个客户端同时持锁）。' },
      { level: '进阶', task: '设计一个支持"读写分离"的数据库集群，如何在不同场景下平衡可用性和一致性？给出具体读写策略', hint: '主库写+从库读，但考虑 replication lag', answer: '策略 1："刚写就查"→读主库。策略 2："读已写"→写操作返回 version，读请求带 version 校验。策略 3："最终一致可容忍"→读从库，P99 lag < 1s。策略 4："同步复制"→写主库+至少一个从库 ack 后才返回，保证从库数据不丢。根据业务关键性选择策略组合。' },
    ],
  },

  "tcGdVQsCEobdV9hgOq3eG": {
    mentalModel: 'CAP 定理就像一个"既要又要还要"的不可能三角——同时要强一致、高可用、分区容错是不可能的。就像三角恋：C-ambridge（MIT）、A-mazon（Dynamo）、P-artition 是分布式网络的宿命，你只能选两个。',
    sections: [
      { title: 'CAP 的精确含义', content: 'C（Consistency）= 所有节点在同一时刻看到相同数据（原子一致性）。A（Availability）= 每个请求都能获得（非错误的）响应，即使某些节点挂了。P（Partition Tolerance）= 系统在网络分区（消息丢失/延迟）的情况下仍继续运行。网络分区在分布式系统中不可逃避，所以 CAP 实际上是 CP vs AP 的选择。' },
      { title: '为什么 P 不能舍弃', content: '广域网通信中丢包、延迟不可避免。放弃 P = 单机系统（没有分区风险）。分布式系统做不到——除非你愿意在交换机故障时整个系统停机。这就是为什么真正的分布式数据库（Cassandra、MongoDB、CockroachDB）必须选 CP 或 AP。' },
    ],
    diagnosis: [{ symptom: '面试官问"你的系统是 CP 还是 AP"，答不上来', cause: '没有从这个角度分析过自己的系统，或者在某个场景下选错了。', fix: '列出系统所有读写操作，判断每个是否需要强一致。大部分互联网业务不需要全强一致——只对关键操作（余额扣减、库存）做 CP，其余做 AP。混合系统 = BASE（Basically Available, Soft state, Eventually consistent）。' }],
    exercises: [
      { level: '基础', task: 'MySQL 主从复制架构属于 CP 还是 AP？发生了什么分区时它会怎样？', hint: '主从切换过程', answer: '默认属于 CP（优先一致性）。当主库宕机时：①自动切换场景：从库提升为主库期间不可写入（牺牲可用性保一致性）②手动切换：系统完全不可用直到 DBA 介入。但如果开了半同步复制且超时不等待，则降级为 AP。' },
      { level: '进阶', task: '设计一个跨 3 个数据中心的分布式 KV 存储，要求：网络分区时依然可写，但分区恢复后数据不丢。用什么一致性协议？', hint: '考虑 Dynamo 风格 + 向量时钟', answer: '使用 AP 模型 + 最终一致性：①写请求只需 W 个节点确认（W < N），可用性高 ②用向量时钟（vector clock）追踪版本冲突 ③分区恢复后用"读修复"（read repair）和"暗示移交"（hinted handoff）恢复一致 ④如果有无法自动解决的冲突，交由应用层或用户解决（如购物车合并）⑤副本数 N=3，W=2, R=2 保证最终一致且读取正确。' },
    ],
  },

  "GHe8V-REu1loRpDnHbyUn": {
    mentalModel: '一致性模式就像朋友圈消息——有些必须立即送达（强一致如转账），有些可以延迟但最终会看到（最终一致如点赞数），有些甚至允许看不到（弱一致如 Web 缓存）。选择取决于：用户看到过期数据会不会出事故？',
    sections: [
      { title: '三种一致性模式', content: '①强一致：写完后所有读立即看到新值。代价是延迟和可用性。实现方式：同步复制、分布式共识（Paxos/Raft）、锁。②最终一致：如果停止写入，所有副本最终会一致。DynamoDB/S3/Cassandra 都用这个。③弱一致：不保证读能看到最新写。Memcached 的"读写可能会漏"就是弱一致。实际系统中常见于缓存。' },
      { title: '什么时候用什么', content: '银行余额、库存扣减→强一致。用户资料、微博时间线→最终一致。热搜榜、推荐列表→弱一致。Netflix 的推荐系统用最终一致：你刚看完的电影不需要立刻影响推荐结果，延迟几分钟无伤大雅。' },
    ],
    diagnosis: [{ symptom: '用户投诉刚改了头像，看帖时头像还是旧的', cause: '头像 CDN 缓存了旧版本——典型的最终一致性问题。', fix: '上传新头像后主动刷新 CDN 缓存（purge/invalidate），或者用"版本化 URL"（avatar.jpg?v=1234），每次都指向新资源。对于关键资源可设短 TTL（5 分钟）。' }],
    exercises: [
      { level: '基础', task: '列出至少 3 个适合最终一致性的系统场景和 2 个必须强一致性的场景', hint: '社交 vs 金融', answer: '最终一致可接受：①社交动态的时间线②视频播放计数③搜索引擎索引更新④推荐系统模型更新。必须强一致：①银行转账（A→B 扣 100 元，不能两边不一致）②电商库存扣减（超卖=事故）③分布式锁。' },
      { level: '进阶', task: '如何给最终一致性系统设置用户体验上的"一致性保障"？给出 3 个 UI/UX 策略', hint: '让用户感觉不到不一致', answer: '①"读己所写"（read-your-writes）：同一个用户的写后读强制走主库。②乐观更新（optimistic UI）：先在前端显示新数据（灰色标记），收到服务端确认后变正常。③版本化：显示数据版本号或"刚刚更新"标签。④过期暗示：在数据旁显示"最后更新于 3 秒前"让用户知道可能有延迟。' },
    ],
  },

  "EKD5AikZtwjtsEYRPJhQ2": {
    mentalModel: '弱一致性就像便利贴：你贴在同事桌上的留言，他不一定立刻看到，也可能被风吹走。它是"差不多"的保证——缓存中的过期数据、DNS 的陈旧记录都是它的身影。你不在乎看到的可能是旧数据，只管快。',
    sections: [
      { title: '弱一致性的定义与案例', content: '弱一致性保证：如果你不继续写入，最终你可能看到最新值。注意"可能"——它甚至不保证最终会一致。典型场景：①Memcached 纯缓存（数据还可能被 LRU 淘汰）②浏览器缓存（不保证服务端已更新）③多级 DNS 缓存（中间缓存可能过期）。关键是：失配成本要低，或无所谓。' },
      { title: '何时可以使用', content: '当数据有"权威来源"（source of truth）且缓存/代理只是加速层时。比如 CDN 缓存的图片，过期几小时只影响展示不影响数据正确性。如果缓存挂了，回源即可。Netflix 视频缩略图用弱一致缓存，错了大不了用户看到旧封面（无伤大雅）。' },
    ],
    diagnosis: [{ symptom: '用户看到"旧版"数据时 system 没有自动纠正', cause: '弱一致 + 没有失效策略（TTL 太长/没有 purge 机制）', fix: '为缓存设置合理 TTL；关键数据提供手动刷新入口；使用 stale-while-revalidate 策略（返回旧数据同时后台刷新）。对于不能容忍旧数据的场景，改用强一致。' }],
    exercises: [
      { level: '基础', task: '浏览器 DNS 缓存属于哪种一致性？如果网站刚换了 IP，你什么时候看到新 IP？', hint: 'TTL', answer: '弱一致性。你看到新 IP 的最晚时间是：旧 IP 的 TTL 过期后。通常 TTL 设 5 分钟到 24 小时不等。Chrome 甚至有自己的 DNS 缓存层（1 分钟默认），不遵循系统 DNS TTL。部分浏览器需要清除缓存或重启。' },
      { level: '进阶', task: '设计一个"高命中率+最新数据"兼顾的缓存策略：如何让客户端缓存"弱一致快速响应"同时保证关键写操作"强一致即时可见"？', hint: '组合策略，不同的数据不同的一致性级别', answer: '分层策略：①静态资源（图片/JS/CSS）→弱一致，长 TTL + 版本化文件名 ②用户内容（帖子正文）→最终一致，Redis 缓存 + DB 写入后发消息刷新 ③关键操作（余额/订单状态）→强一致，绕过缓存直接读主库 ④通知机制：写操作推 WebSocket 通知客户端刷新对应缓存。' },
    ],
  },

  "rRDGVynX43inSeQ9lR_FS": {
    mentalModel: '最终一致性就像公司的公告板——你贴上去的通知不会立刻被所有同事看到，但如果没人撕掉，大家最终都会看到。它是分布式世界里最实在的承诺：不保证什么时候一致，但保证"如果你停止写了，某一天大家会看到一样的"。',
    sections: [
      { title: 'Dynamo 的最终一致性实践', content: 'Amazon DynamoDB 是最终一致性的教科书实现。三板斧：①向量时钟（vector clock）追踪多版本冲突 ②提示移交（hinted handoff）——临时节点替宕机节点保存数据，恢复后移交 ③读修复（read repair）——读取时对比所有副本，发现不一致就修复。这些机制共同保证"最终"确实会到来。' },
      { title: 'CRDT 的无冲突方案', content: '最终一致性最大的痛点是冲突解决。CRDT（Conflict-free Replicated Data Type）从数学上保证并发更新可自动合并。例子：计数器用 G-Counter（只增不减）、集合用 G-Set（只加不删）、文本编辑用 RGA Tree。Redis 的企业版 Active-Active 就是基于 CRDT 实现的。' },
    ],
    diagnosis: [{ symptom: '同一数据在多副本间出现"永久不一致"', cause: '冲突解决逻辑缺失——两个客户端同时修改同一条记录，没定义谁赢。', fix: '选择冲突解决策略：①LWW（last-writer-wins）按时间戳 ②应用级合并逻辑（如购物车取并集）③CRDT 自动合并 ④向量时钟暴露冲突让客户端决策。Amazon 购物车用的是合并策略（取并集）。' }],
    exercises: [
      { level: '基础', task: 'DynamoDB 默认是最终一致读，但也支持强一致读。强一致读的代价是什么？', hint: '延迟、成本、可用性', answer: '代价：①延迟增加（需要从至少多数副本确认）②成本翻倍（读取消耗更多读取单位）③可用性降低（如果有副本不可达，强一致读可能失败而最终一致读不受影响）④吞吐受限（强一致读的 QPS 上限更低）。' },
      { level: '进阶', task: '设计一个协同编辑系统（如 Google Docs 的简化版），要求支持离线编辑、最终一致性、冲突自动解决', hint: 'OT vs CRDT', answer: '方案：基于 CRDT 的 RGA（Replicated Growable Array）或 YATA 算法。①每个字符有唯一 ID（siteID+clock）②插入操作：新字符插入位置由左右邻居字符 ID 确定（不会冲突）③删除操作：标记墓碑（tombstone）而非真删④离线操作在本地记录，上线后同步并合并。Google Docs 用的是 OT（Operational Transformation），但 CRDT 更适合去中心化场景。' },
    ],
  },

  "JjB7eB8gdRCAYf5M0RcT7": {
    mentalModel: '强一致性就像公务护照：每个字都卡得很严，稍有不符就不让你过——任何一次读都要拿到最新值，宁可刚开始写着慢点，也不能有一瞬的出错。银行转账就是这个逻辑。',
    sections: [
      { title: '强一致的实现方式', content: '①两阶段提交（2PC）：协调者→所有参与者"准备"，全确认后再"提交"。MySQL XA 事务用了它。②Paxos/Raft 共识协议：多数节点确认才提交。etcd、Consul、CockroachDB 基于此。③同步复制：主库写入必须等从库 ACK。④分布式锁：Redis Redlock 模式、ZooKeeper 临时顺序节点。付出代价 = 延迟增加 + 可用性降低。' },
      { title: 'Google Spanner 的强一致创新', content: 'Spanner 用 TrueTime API 实现外部一致性（比线性一致更强）。原理：使用原子钟和 GPS 给每个事务加全局时间戳，保证如果 T1 提交在 T2 开始之前，那么 T1 的时间戳 < T2。这意味着全球分布的数据可以严格按时间排序而无需分布式锁。代价：原子钟硬件投入。' },
    ],
    diagnosis: [{ symptom: '强一致系统性能低下，吞吐量只有最终一致系统的 1/10', cause: '同步等待（网络往返 + 共识协议）是瓶颈。', fix: '优化：①批处理多个写操作在一个共识轮次中 ②使用 leader lease 减少选出 leader 的频率 ③将不要求强一致的操作拆出去（读写分离）④地理感知：把需要强一致的数据限制在同一区域内（co-locate）。' }],
    exercises: [
      { level: '基础', task: '分布式事务（如 XA 两阶段提交）有什么致命弱点？', hint: '考虑协调者故障的情况', answer: '协调者单点故障时，参与者不知道是提交还是回滚，资源被锁定（阻塞直到协调者恢复）。这就是所谓的"两阶段提交的阻塞问题"。解决方案：3PC（增加超时机制但仍不完美），或使用 Saga（拆成多个本地事务无需全局锁）。' },
      { level: '进阶', task: '设计一个需要强一致的分布式 ID 生成器：要求单调递增、无单点故障、高性能。对比 ZooKeeper 顺序节点、Snowflake、和自研方案', hint: '考虑可用性和一致性如何平衡', answer: '方案对比：①ZooKeeper 顺序节点：强一致但性能低（需要 Leader 确认每次写）②Snowflake（Twitter）：本地生成（时间戳+机器ID+序号），高性能但弱一致（时钟回拨风险）③自研：Paxos 组 + 号段预分配。一台机器用 Paxos 确认 1000 个号段，本地用完再申请。这样 99.9% 的 ID 生成无需共识（批量预取），仅在分配号段时走共识。' },
    ],
  },

  "ezptoTqeaepByegxS5kHL": {
    mentalModel: '可用性模式就像看病——小病吃药（Failover），大病住院（Replication），平时健身（Health Check）。关键在于：你能在几秒内从"系统挂了"恢复到"用户无感"？',
    sections: [
      { title: '可用性三大模式', content: '①故障转移（Failover）：主节点挂了→备用节点接管。MySQL MHA、Redis Sentinel 都是这个模式。关键指标：RTO（恢复时间目标）、RPO（恢复点目标）。②复制（Replication）：主从、多主、无主。数据多副本存储。③冗余：N+1、2N、Active-Active——别无单点故障。AWS 每个区域至少 2 个 AZ 就是这个道理。' },
      { title: 'SLA 与可用性', content: '服务等级协议（SLA）：99% = 年宕 3.65 天，99.9% = 8.76 小时，99.99% = 52.6 分钟，99.999% = 5.26 分钟。Google Cloud Spanner 承诺 99.999% 可用，这意味着全球多层冗余+自动故障转移+持续健康检查。每增加一个 9，架构复杂度可能增加 10 倍。' },
    ],
    diagnosis: [{ symptom: '单台 Redis 挂了导致整个服务不可用', cause: 'SPOF（单点故障）——Redis 是缓存，但它挂了所有请求落到 DB，DB 被打爆。', fix: 'Redis Cluster（多节点分片 + 从节点）+ Sentinel 监控自动切换。设置合理的连接超时和熔断机制（不要无限等待 Redis）。缓存层挂了应降级到"无缓存模式"而非全挂。' }],
    exercises: [
      { level: '基础', task: '计算一个要求 99.95% 可用性的服务每年允许的最大宕机时间', hint: '365天 × 24小时 × 60分 × (1 - 0.9995)', answer: '365 × 24 × 60 × 0.0005 = 262.8 分钟 ≈ 4.38 小时。这意味着每次部署、故障、维护加起来一年不能超过 4.38 小时。如果每次部署宕机 1 分钟，最多部署 262 次/年。如果加上故障和意外，留给你部署的窗口很窄。' },
      { level: '进阶', task: '设计一个跨 3 个 AZ（可用区）部署的方案，目标是任何单个 AZ 完全挂掉时服务不中断（99.99% 可用性要求）', hint: '负载均衡 + 数据复制 + 自动切换', answer: '①每 AZ 至少 2 台应用服务器（共 6 台），通过 LB 分发流量 ②数据库：MySQL 主在 AZ1，半同步复制到 AZ2 和 AZ3 的从库。如果 AZ1 挂了，自动提升 AZ2 从库为主 ③Redis Cluster 跨 3 AZ 部署，每个分片的主从节点分布在不同 AZ ④DNS 做跨 AZ 健康检查 ⑤定期 Chaos Engineering 演练，确保切换自动化正确工作。' },
    ],
  },

  "L_jRfjvMGjFbHEbozeVQl": {
    mentalModel: '故障转移（Fail-Over）是汽车的安全气囊——平时你感觉不到它的存在，但一旦遭遇事故，它必须在瞬间弹出。主备切换的关键是：别让切换过程比故障本身更灾难。',
    sections: [
      { title: '冷备 vs 热备', content: '冷备（Cold Standby）：备用节点平时关机或空闲，故障时手工启动。恢复 O(minutes)。省钱但 RTO 大。热备（Hot Standby）：备用节点持续同步数据/接收心跳，故障时自动接管。恢复 O(seconds)。贵但 RTO 小。MySQL 半同步复制就是热备：至少一个从库确认收到 binlog。' },
      { title: '自动切换的风险', content: 'Sentinel/Coordinator 判断节点是否故障是个经典难题：是它真挂了还是网络抖动？误切换（split-brain）可能导致双主——两个节点都以为自己是主，各写各的，数据永久不一致。ZooKeeper 用超过半数投票避免脑裂，Kubernetes lease 机制也一样。' },
    ],
    diagnosis: [{ symptom: '主备切换后，老主恢复上线，两个节点同时写入', cause: '脑裂（Split-Brain）——老主在网络分区期间不知道自己被"罢免"，仍在处理写入。', fix: 'Fencing Token（栅栏令牌）：新主上任时获得一个递增的数字令牌，写存储时附带令牌。存储层拒绝旧令牌的写入。或者在老主恢复时强制 STONITH（Shoot The Other Node In The Head）——K8s 中 Pod 被驱逐算温和版。' }],
    exercises: [
      { level: '基础', task: 'MySQL 主从复制中，主库宕机后如何把从库提升为主库？写出具体步骤', hint: '停止从库复制→提升→应用指向新主', answer: '①确认主库确实不可恢复 ②在从库上 STOP SLAVE → RESET SLAVE ALL ③确保从库已应用所有 relay log ④在从库上开写权限（SET GLOBAL read_only=OFF）⑤更新应用连接配置指向新主 ⑥事后旧主恢复后作为新从库加入（重建复制关系，注意 GTID 一致性）。' },
      { level: '进阶', task: '使用 Redis Sentinel 实现自动故障转移时，如何避免脑裂？给出低风险配置方案', hint: 'min-replicas + 多数投票', answer: '防脑裂配置：①设置 min-replicas-to-write = N/2（至少一半从节点可达才允许写入）②min-replicas-max-lag = 10（从节点延迟不超过 10 秒）③Sentinel 至少 3 个（奇数个，避免平票）④quorum=2（至少 2 个 Sentinel 同意才切换）⑤down-after-milliseconds 适当设长（3-5 秒），避免网络抖动误切换。⑥配置 parallel-syncs=1 避免新主被全量同步压垮。' },
    ],
  },

  "0RQ5jzZKdadYY0h_QZ0Bb": {
    mentalModel: '数据复制就像出版书的多个印刷厂—同一本书在不同工厂同时印刷，确保一个工厂着火时其他工厂还能出货。同步复制=要求所有工厂同一天出书；异步复制=某些厂晚两周但终会印完。',
    sections: [
      { title: '同步 vs 异步复制', content: '同步复制：主库等所有从库（或至少 N 个）确认收到才返回成功。强一致+低吞吐+高延迟。MongoDB 的 write concern majority 就是这种。异步复制：主库写完立即返回，从库后台追赶。高吞吐+低延迟+可能有数据丢失。MySQL 默认 binlog 复制是异步。半同步（semi-sync）：主库等至少一个从库确认，兼顾性能和安全。' },
      { title: '多主复制', content: '多个节点都可写，各自复制给对方。适合：多数据中心（用户就近写入）、协作编辑。挑战：冲突解决（两个主同时修改同一行）。方案：①LWW（最后时间戳胜）②冲突透明（暴露多版本给用户）③CRDT（自动合并）④限制写（每个 key 只由一个主写入）。Google Docs 和 CouchDB 用多主+冲突解决。' },
    ],
    diagnosis: [{ symptom: '主从复制延迟导致用户读不到刚写的数据', cause: '异步复制 + 从库负载高导致 relay log 应用慢。', fix: '①刚写的数据通过 session/cookie 将后续读取路由到主库（sticky master）②使用 GTID 确保读到指定位置之后的从库 ③监控复制延迟（seconds_behind_master），延迟超阈值时告警 ④从库不足时增加更多从库分摊读负载。' }],
    exercises: [
      { level: '基础', task: 'MySQL 异步复制"从库延迟"是怎么产生的？列出 3 个常见原因', hint: '考虑从库性能、网络、并发', answer: '①从库性能低于主库（小规格实例承担和主库一样的写入流量）②主库有大量并行的写操作，但从库用单线程应用 relay log（MySQL 5.6 以前）③网络延迟+主库高写入量导致 binlog 传输积压④从库同时承接大量读流量，CPU 打满无暇应用 relay log。' },
      { level: '进阶', task: '设计一个支持多数据中心写入的高可用系统：3 个 DC（US/Europe/Asia），用户写就近 DC，数据不能丢，全球延迟 300ms 内可读', hint: '同步=低延迟冲突，考虑一致性级别', answer: '方案：①每个 DC 都有完整副本，用户写到就近 DC ②"写"需要本地 DC + 至少一个远程 DC 的多数确认（如 3/5），确保不会单 DC 故障丢数据 ③用向量时钟追踪版本，读的时候从多数 DC 读取合并 ④对冲突数据采取 LWW+保留冲突版本供应用层决策 ⑤对延迟敏感的读走本地 DC 弱一致，关键查询走跨 DC 强一致。这就是 Cassandra 多 DC 配置的思路。' },
    ],
  },

  "uHdrZllrZFAnVkwIB3y5-": {
    mentalModel: '可用性是系统的"上钟率"——一年 365 天，你有多少天是"在线"状态。99% 听起来不错，但意味着每年有 3.65 天离线——你的用户会在那几天里骂街。99.999%（5 个 9）是"在你退休前最多故障 5 分钟"。',
    sections: [
      { title: '可用性数字对照表', content: '90%：年宕 36.5 天（个人博客可以）99%：年宕 3.65 天（小企业内网）99.9%：年宕 8.76 小时（电商需努力）99.99%：年宕 52.6 分钟（金融/支付）99.999%：年宕 5.26 分钟（关键基础设施）99.9999%：年宕 31.5 秒（电话交换机级别）。每增加一个 9，成本呈指数增长。' },
      { title: '可用性的计算', content: '可用性 = (总时间 - 宕机时间) / 总时间。注意：定期维护算不算宕机取决于 SLA 定义。混合系统的可用性：两个 99% 串联 = 98%（更差）；两个 99% 并联 = 99.99%（更好）。所以冗余并联是提高可用性的核心手段。如果依赖链上每个组件 99.9%（S3、DB、Redis、LB），串联=99.6%。' },
    ],
    diagnosis: [{ symptom: '声称 99.9% 但用户经常报不可用', cause: '计算方式有问题——可能是按服务器在线时间算但没考虑应用层错误；或者对不可用时间定义太窄。', fix: '从用户视角定义可用性——一个请求返回 4xx/5xx 或超时就算不可用。对所有请求采样计算错误率，而不是看机器心跳。每分钟错误率 > 1% 算不可用分钟。这比硬件在线率诚实得多。' }],
    exercises: [
      { level: '基础', task: '如果你的服务依赖 3 个外部服务（可用性各 99.9%），串联后的理论可用性是多少？', hint: '串联 = 全部同时可用才可用', answer: '0.999³ = 0.99700299... ≈ 99.7%。年宕机 = 365 × 24 × 60 × (1-0.997) ≈ 1578 分钟 ≈ 26.3 小时。接近一天多不可用。这就是为什么云厂商强调每个服务至少 99.95% 。' },
      { level: '进阶', task: '设计一个故障预算（error budget）策略：你的 SLO 是 99.9%，本月已用 80% 预算。接下来应该什么操作？', hint: 'Google SRE 的 error budget 策略', answer: 'Google SRE 实践：error budget = 1 - SLO。99.9% 的 budget = 每月 43.8 分钟。用掉 80% = 剩余 8.76 分钟：①冻结本月的非必要的部署（除非安全修复）②分析这 80% 的故障分布，找最大贡献者 ③虽然部署冻结，但要预研下个月的改进方案 ④如果预算用完（100%），必须启动事后复盘，可能重新协商 SLO 或增加系统性改进。' },
    ],
  },

  "DOESIlBThd_wp2uOSd_CS": {
    mentalModel: '后台任务是餐厅的厨房后台——食客（用户请求）在前厅得到即时服务，洗菜、慢炖汤、准备食材在后台进行。不能让食客等着你去刮鱼鳞。同步=厨师当场做，异步=提前备菜。',
    sections: [
      { title: '后台任务模式', content: '①异步任务/消息队列：提交任务即返回，后台 Worker 拉取执行。适合：发邮件、转码视频、生成报表。②定时任务/Cron：定时触发（每天 3 点清算）。适合：对账、数据清理、日活统计。③事件驱动：某事件触发后续动作。适合：用户注册→发欢迎邮件+创建默认设置。④守护进程：持续监听队列或 watch 文件变化。' },
      { title: 'Netflix 的后台任务架构', content: 'Netflix 用 Conductor（开源工作流引擎）编排复杂的后台流程。例如视频编码流程：上传→格式检测→分片→多种分辨率编码→生成缩略图→内容审核→CDN 分发。每一个步骤是一个 Worker，Conductor 管理重试、超时、依赖、并行度。失败后自动回滚已完成步骤。' },
    ],
    diagnosis: [{ symptom: '后台任务处理速度跟不上产生速度，队列积压越来越长', cause: 'Worker 数量不足或处理逻辑有瓶颈（慢查询、大文件处理）。', fix: '①增加 Worker 并行度（水平扩展）②优化单任务处理时间（性能分析）③设置消息 TTL（丢弃过期任务）④优先级队列：重要任务优先处理⑤死信队列：失败超 N 次的任务转人工处理，不要占着队列位置。' }],
    exercises: [
      { level: '基础', task: '用户在网站上点"发送验证码"，请求同步下发并等待，会很慢。怎么改成后台任务？', hint: '提交任务→异步执行→前端轮询或推送', answer: '①点"发送验证码"→后端立即返回 task_id（耗时 50ms）②后台 Worker 从任务队列取到发短信任务→调用短信服务→成功则写入 Redis（task_id→"ok"）③前端每 2 秒轮询 GET /task/{task_id}/status，或 WebSocket 推送结果 ④超时 30 秒后显示"发送失败请重试"。' },
      { level: '进阶', task: '设计一个支持"有依赖关系的后台任务编排系统"：任务 B 依赖任务 A 的结果，任务 C 等 A+B 都完成。失败要回滚', hint: 'DAG + Saga 模式', answer: '定义任务 DAG（有向无环图）：A→B, A→C, B+C→D。工作流引擎：①解析 DAG，先调度 A ②A 成功后，同时调度 B 和 C ③B 和 C 都成功后，调度 D ④每个任务有对应的补偿事务（Saga）——例如 A 发邮件，补偿=发道歉邮件 ⑤如果 D 失败，逆序执行补偿：D.comp→C.comp→B.comp→A.comp。Airflow 和 Temporal 就是这种模式。' },
    ],
  },

  "NEsPjQifNDlZJE-2YLVl1": {
    mentalModel: '事件驱动是邮局投递系统——你的信件（事件）投进邮箱后，你不用管后续怎么分拣、怎么运输、谁会收到。寄件人（生产者）和收件人（消费者）完全是松耦合的。订单系统发"订单已支付"事件，库存、物流、积分系统各自监听并处理。',
    sections: [
      { title: '事件驱动核心概念', content: '事件=过去发生的事实（不可变）。生产者发布事件到中间人（Broker/Kafka）→消费者订阅感兴趣的事件。优势：松耦合（生产者和消费者互不知晓）、可回溯（事件日志可重放）、天然适合横向扩展。挑战：最终一致性、追踪链路复杂、事件顺序保证。' },
      { title: 'Kafka 在事件驱动中的核心设计', content: 'Topic（主题）= 事件分类。Partition（分区）= 并行+顺序保证——同一 key 的事件落同一分区保证顺序。Consumer Group = 负载均衡消费组——组内每个消费者负责不同分区，实现并行。Offset = 消费位置（可回溯重放）。日志压缩=保留每个 key 最新值（适合存储状态快照）。' },
    ],
    diagnosis: [{ symptom: '事件驱动系统中，支付事件发出了但积分没加上', cause: '消费者故障或消费速度慢导致消息积压，或消费者逻辑有 bug 静默丢弃。', fix: '①消费者使用死信队列捕获异常消息 ②监控消费 lag（Kafka consumer lag）③增加消费者实例（但需确保消息处理幂等）④使用 exactly-once 语义（Kafka 事务）⑤关键业务加对账系统——定时比对"已支付订单"与"已加积分"差异表。' }],
    exercises: [
      { level: '基础', task: '在事件驱动系统中，为什么消费者处理逻辑必须幂等？', hint: '消息可能被重复投递', answer: '因为"至少一次"投递语义可能导致同一事件被处理多次（Broker 没收到 ACK 就重发、消费者崩溃重启 rebalance）。如果不幂等：发两封邮件、加两次积分。幂等方案：①每条消息带唯一 ID（uuid），消费者本地记录已处理 ID ②数据库唯一约束阻止重复写入 ③处理前先查有没有处理过。' },
      { level: '进阶', task: '设计一个支持"同一订单的事件必须有序处理"的事件驱动方案。订单状态改变：待支付→已支付→已发货。不能先处理"已发货"再处理"已支付"', hint: 'Kafka 分区键 + 单线程消费', answer: '①发送时：事件 key=order_id，Kafka 保证同 key 的事件进入同一分区→分区内有序 ②消费时：每个分区仅由 1 个消费者线程处理（顺序保证）③消费者内做状态机校验：当前状态=待支付，收到"已支付"→允许；(当前状态=待支付，收到"已发货")→拒绝/死信 ④跨分区：不保证全局顺序，但那无所谓——不同订单间不需顺序 ⑤若单分区吞吐不够，可用一致性哈希路由到多个小状态机。' },
    ],
  },

  "zoViI4kzpKIxpU20T89K_": {
    mentalModel: '定时驱动=钟楼时光设备——每天固定时刻敲钟，不论当时城市是否安静。Cron 是分布式世界里最古老的自动化手段："每天凌晨 3 点统计昨日流量"，雷打不动，从 Unix 诞生以来就没变过。',
    sections: [
      { title: '定时调度方式', content: '①系统级 Cron：Linux crontab 管理定时任务。简单但无中心化调度。②Quartz/Spring Scheduler：JVM 内定时任务（单点风险）。③分布式定时调度：Kubernetes CronJob（容器化，失败自动重试）、Apache Airflow（DAG 编排+回溯）、AWS CloudWatch Events / EventBridge。选型核心：①单次触发还是重复？②失败是否需要重试/告警？③任务之间有依赖吗？' },
      { title: 'Airflow 的 DAG 排程', content: 'Airflow 不只做时间触发，还能处理回填（backfill）。比如一个新数据管道上线，需要处理过去 3 个月的历史数据。Airflow 的 DAG 定义：schedule_interval=@daily, start_date=3 个月前→自动为每一天生成一个 dag_run，按时间顺序执行。任务失败后可以重跑单个 dag_run 而无需从头开始。' },
    ],
    diagnosis: [{ symptom: '定时任务在分布式环境下被执行了两次', cause: '多个 CronJob 实例同时触发（没有分布式锁），或者手动重试+自动调度叠加。', fix: '①使用分布式锁（如 Redis SETNX/etcd lease）保证只有一个实例执行 ②为每次执行生成唯一 run_id，数据库记录 run_id 并加唯一约束 ③K8s CronJob 设置 concurrencyPolicy=Forbid 避免重叠执行 ④任务逻辑开头检查是否已在运行（DB 状态标记）。' }],
    exercises: [
      { level: '基础', task: '若定时任务每小时运行一次，但前一次运行了 55 分钟后被新的定时触发——这次会同时跑两个吗？如何避免？', hint: '重叠执行问题', answer: '取决于调度器：标准 Linux Cron 不知道上次任务是否结束，会照常触发第二个（两个并行）。K8s CronJob 默认也是允许重叠的。解决：①设置 concurrencyPolicy=Forbid（K8s）②任务启动时加文件锁（flock）③检查运行状态表判断上次是否还在跑。' },
      { level: '进阶', task: '设计一个"分布式定时任务调度平台"：支持分钟级触发、任务依赖、失败重试、任务状态可视化', hint: '考虑 leader election、任务分发、执行监控', answer: '架构：①控制面（Scheduler）：基于时间轮扫描（1 分钟轮），生成 job_run 放进队列。用数据库行锁或 etcd leader election 保证只有一个实例调度 ②执行面（Worker）：从队列拉取 job_run，执行后上报结果 ③存储：MySQL 存任务定义+调度历史，Redis 做队列和心跳 ④重试：失败后按退避策略（1s/5s/25s）重排队 ⑤依赖：DAG 定义，调度器在前置节点完成后触发后置节点。类似 Airflow 架构简化版。' },
    ],
  },

  "2gRIstNT-fTkv5GZ692gx": {
    mentalModel: '返回结果是"交作业"的学问——有些作业老师要求当面交（同步等待结果），有些塞进老师信箱就行（提交后查询），有些作业被改完了会自动发短信通知你（异步回调）。面对长任务，别让用户傻等。',
    sections: [
      { title: '三种返回模式', content: '①同步返回：请求-响应，简单直接。适合快速操作（<1 秒）。②异步轮询：返回 task_id，客户端定时查状态。适合几分钟级任务（视频转码）。③回调/Webhook：任务完成后主动调用客户端提供的 URL。适合长时间或不定期任务（审批流程）。④推送：服务端主动推结果（WebSocket/SSE/Webhook）。⑤长轮询：客户端 hold 住连接，服务端有结果再响应。' },
      { title: '实际选型指南', content: 'AWS S3 大文件上传用分段+异步轮询；Stripe PaymentIntent 用同步返回+Webhook 双重确认；GitHub Actions 构建用轮询+WebSocket 实时日志流。关键决策：任务最坏执行时间？用户期望多久看到结果？客户端是否长期在线？' },
    ],
    diagnosis: [{ symptom: '异步任务完成后客户端收不到通知', cause: '回调 URL 不可达（客户端离线/防火墙）或推送失败无重试机制。', fix: '①服务端重试回调（指数退避，最多 N 次）②轮询作为兜底：即使收到了回调，也定期查状态确认③客户端启动时主动检查未完成任务状态④使用可靠的消息队列做回调投递（有 ACK 机制）。' }],
    exercises: [
      { level: '基础', task: '一个导出报表的任务（耗时 2-10 分钟），应该用哪种返回结果模式？完整流程是什么？', hint: '异步 + 多种结果获取方式', answer: '①前端提交导出请求 → 后端返回 task_id + 预估完成时间 ②后端丢任务进队列 ③Worker 处理后生成文件存 S3，写入 task 状态表 ④前端每 5 秒轮询 GET /export/{task_id} ⑤完成后返回 S3 临时下载链接 ⑥同时发邮件/站内信通知用户。超时任务显示"耗时较长，稍后查看"。' },
      { level: '进阶', task: '设计一个支持"任务取消"和"进度汇报"的长任务系统。已处理 30%，用户点取消，怎么优雅停止？', hint: '检查点 + 取消令牌', answer: '①Worker 在每个步骤完成后检查取消标记（Redis/Database flag）②如果发现 cancel=true，停止处理并补偿：已写入的数据回滚或标记"部分完成"③进度更新：Worker 每 5% 更新 Redis（task_id → progress）④前端轮询进度条展示 ⑤取消后状态设置为"已取消"，保留中间产物（方便 debug）⑥如果任务已经 95% 完成，限制取消（用户可能误操作）。' },
    ],
  },

  "Uk6J8JRcKVEFz4_8rLfnQ": {
    mentalModel: 'DNS 是互联网的电话号码本——你只知道 google.com，它帮你翻到 142.250.80.46。分层的设计就像"省→市→区→街道"逐级缩小范围，高效又不冗余。没有 DNS 你就得背所有网站的 IP，就像没有通讯录你得记所有人的手机号。',
    sections: [
      { title: 'DNS 解析链条', content: '浏览器→OS DNS Resolver→递归 DNS（ISP/8.8.8.8）→根域名服务器→.com TLD 服务器→权威 DNS（Route53）。每层有缓存——OS 缓存 1 分钟，浏览器缓存 1 分钟，递归 DNS 缓存按 TTL。一个 DNS 记录的实际传播时间 = max TTL 分钟（如 TTL=300 就是最多 5 分钟全球生效）。' },
      { title: 'DNS 负载均衡', content: 'AWS Route53 的妙用：①简单路由：返回单个 IP ②加权路由：80% 流量到 A，20% 到 B（灰度发布）③延迟路由：返回离用户最近的实例 ④故障转移：主 IP 挂了切备 IP ⑤地理位置路由：欧洲用户→欧洲服务器，符合 GDPR。⑥多值应答：返回随机排序的多个健康 IP（类似 Round Robin）。Netflix 用 DNS + 地理位置路由实现全球用户就近访问。' },
    ],
    diagnosis: [{ symptom: '刚改了 DNS A 记录指向新 IP，但部分用户仍访问旧 IP', cause: 'DNS 缓存传播延迟——各级 DNS 缓存尚未过期。', fix: '①提前降低 TTL（旧 IP 的 TTL 提前设为 60 秒，等 1 个 TTL 周期再切换）②切换后新 IP 用长 TTL（3600）③强制刷新：用 dig/purge 清理 CDN/递归 DNS 缓存④灰度切换：加权路由 5%→20%→50%→100% 分阶段转移流量⑤监控新旧 IP 流量分布，确认切换完成。' }],
    exercises: [
      { level: '基础', task: '用 dig 命令查询 baidu.com 的 A 记录，并解释输出的每个字段', hint: 'dig baidu.com A +trace 看完整链路', answer: ';; QUESTION SECTION：查询内容。;; ANSWER SECTION：A 记录结果。TTL（秒）缓存多久。;; AUTHORITY SECTION：哪个 DNS 服务器是权威。;; Query time：总耗时 ms。重点关注 TTL 和 ANSWER 部分。+trace 能看到从根到 .com 到 baidu 的完整查询链。' },
      { level: '进阶', task: '设计一个"自建 DNS 服务"用于内部服务发现：微服务 A 要调用服务 B，通过 b.internal 访问，而不是硬编码 IP', hint: 'Consul/CoreDNS + DNS SRV 记录', answer: '方案：①Consul/etcd 做服务注册中心，服务启动时注册（名称+IP+端口+健康检查）②CoreDNS 对接 Consul，将服务名解析为 Pod IP（类似 Kubernetes DNS）③SRV 记录包含端口信息，A 记录只有 IP。例如：_http._tcp.b.service.consul → SRV → 10.0.1.5:8080 ④健康检查失败的实例从 DNS 结果中自动摘除（DNS TTL 5s 实现毫秒级故障摘除）⑤客户端库集成 Consul DNS 自动解析。' },
    ],
  },

  "O730v5Ww3ByAiBSs6fwyM": {
    mentalModel: 'CDN 像是全球连锁便利店——用户不需要飞到总部（源站）买货，就近的门店（边缘节点）就能买到。既减少了交通（骨干网带宽），又缩短了等待时间（延迟）。Netflix 把视频提前分发到全球 ISP 的 CDN 节点——你点"播放"时，视频数据就在你隔壁。',
    sections: [
      { title: 'CDN 核心机制', content: 'CDN 有两层：①分发层：将原始内容从源站分发到全球边缘节点（Push 或 Pull）②服务层：用户请求被 DNS 解析到最近边缘节点，直接从边缘返回内容。关键：命中率（90%+ 才算合格）。未命中时回源拉取（增加延迟）。Netflix Open Connect CDN 全球有 17000+ 服务器在 ISP 机房里，你看的视频 99% 直接从你所在的 ISP 传输。' },
      { title: 'Push vs Pull CDN', content: 'Push：上传时主动推到所有节点。适合提前知道所有内容（软件下载站、游戏更新包）。缺点是存储成本高。Pull：用户请求时如果边缘没缓存，自行回源拉取并缓存。适合大规模用户内容（YouTube、Netflix）。缺点是首次访问慢。实际系统：Push 热门电影到所有节点，Pull 长尾冷门内容。' },
    ],
    diagnosis: [{ symptom: '更新了图片但 CDN 用户看到的还是旧图', cause: 'CDN 缓存了旧内容且未过期，或源站更新后未主动 purge 边缘缓存。', fix: '三步走：①源站更新时触发 CDN purge API（按 URL 或通配符）②使用"版本化 URL"避免缓存问题：logo.v2.png 而非 logo.png（新文件=新 URL=新缓存）③设置合理的 Cache-Control 头：max-age 平衡新鲜度与命中率，stale-while-revalidate 避免用户等待回源。' }],
    exercises: [
      { level: '基础', task: '一个视频网站使用 CDN 分发视频，边缘节点没命中缓存时会发生什么？', hint: '回源到 origin server', answer: '①边缘节点向源站发送请求（回源）②源站返回视频数据 ③边缘节点缓存内容（按预设规则和 TTL）并响应给用户 ④首次访问慢于后续访问（回源延迟+缓存写入）⑤如果回源失败（源站挂了），CDN 可能返回旧的缓存内容（stale）或报错。这就是为什么源站也要高可用——CDN 不能替代源站。' },
      { level: '进阶', task: '设计一个视频 CDN 的分发策略：热门视频全球都看，冷门视频只有特定地区。如何平衡存储成本和命中率？', hint: '分级缓存+预推', answer: '策略：①热门 Top 10% 视频主动 Push 到所有边缘节点（内容预测）②中热度 Top 10-50% 按区域 Push（亚洲热播剧只 Push 亚洲边缘）③长尾视频纯 Pull（请求时回源拉取+缓存一定时间）④使用机器学习预测未来 24 小时热点，提前分发 ⑤设置多级缓存：L1（边缘 SSD 缓存最近 100TB 热门内容），L2（区域 HDD 缓存 1PB 中热度内容），L3（源站全量）⑥根据访问频率自动升/降级内容层级。' },
    ],
  },

  "14KqLKgh090Rb3MDwelWY": {
    mentalModel: '负载均衡器 = 餐厅的迎宾员——看哪张桌子（服务器）有空位，把你引过去。他不知道你要吃什么（请求内容），只管分配座位。好的迎宾员能让每个服务员工作量均匀，差的会让某个服务员忙死而其他人在玩手机。',
    sections: [
      { title: '负载均衡器原理', content: '四层 LB（L4）：基于 IP+端口分发（只看 TCP/UDP 连接）。速度快但粗放。七层 LB（L7）：基于 HTTP 内容分发（URL、Header、Cookie）。功能强但开销大。Nginx/HAProxy 都可做 L4 或 L7。AWS ALB= L7（可以路由 /api/订单 到不同后端组），AWS NLB = L4（百万级并发）。' },
      { title: 'Amazon ALB 的高级特性', content: 'ALB 不只是分发流量：①路径路由：/api/users→用户服务，/api/orders→订单服务。②主机路由：api.example.com→API 集群，admin.example.com→管理后台。③优雅停机：deregistration_delay 机制——标记下线后等待现有连接完成。④Slow start：冷启动的新实例逐渐获得流量（避免被突发流量打炸）。⑤健康检查（health check）：定制路径/HTTP 状态码判断存活。' },
    ],
    diagnosis: [{ symptom: '负载均衡器后 4 台服务器，其中 1 台 CPU 满载，另 3 台空闲', cause: '粘性会话（sticky session）导致流量不均，或负载算法+权重配置不当。', fix: '①检查是否开启了 sticky session/会话保持（某个用户一直被路由到同一台服务器导致热点）②调整负载算法：从 round-robin 改为最少连接数（least_conn）③让高负载节点请求健康检查失败（自动摘除），等 CPU 降下来再放回④检查是否有来自少数 IP 的高频请求集中在特定节点。' }],
    exercises: [
      { level: '基础', task: 'HAProxy/Nginx 中的 round-robin、least_conn、ip_hash 分别适用于什么场景？', hint: '考虑后端均衡、会话保持需求', answer: 'round-robin：后端服务器配置相同、请求耗时均等时最佳（简单、公平）。least_conn：后端请求耗时差异大时使用——把新请求分给活跃连接最少的机器（避免短请求等长请求）。ip_hash：需要粘性会话但不想用 Cookie 时——同一客户端 IP 始终路由到同一后端（适合无状态服务间保持缓存局部性）。' },
      { level: '进阶', task: '设计一个"支持灰度发布"的负载均衡方案：10% 用户路由到新版本服务，90% 到旧版本。灰度用户发生产问题时能秒级回退', hint: 'cookie 染色 + 加权路由', answer: '①请求入口 LB 检查 Cookie/Header 中的灰度标识（canary=true）②有灰度标识 → 路由到新版本集群 ③无标识 → 加权分配：10% 概率生成灰度 Cookie 路由新版，90% 路由旧版（随机染色）④管理面：后台可实时调整灰度比例（Nginx 动态 upstream 或 Envoy xDS）⑤回退：将灰度比例设为 0%，所有请求删灰度 Cookie。秒级生效。⑥监控：新版错误率、延迟 vs 旧版实时对比，异常自动回退。' },
    ],
  },

  "e69-JVbDj7dqV_p1j1kML": {
    mentalModel: '七层负载均衡是"智能迎宾"——不只根据大厅空位（IP/端口），还根据你点的菜品（URL/Header）引到不同区域。/api/checkout 去 VIP 快速通道，/images/ 去自助餐区，/admin 需要先验身份。',
    sections: [
      { title: 'L7 vs L4 核心差异', content: 'L4 工作在 TCP 层，看一眼 IP+端口就转发（类似邮局按地址派信）。L7 工作在 HTTP 层，能读取 URL、Header、Cookie 内容做出路由决策。L7 的代价：需要解密 TLS（SSL termination），增加 CPU 开销和少量延迟。L7 的优势：内容路由、限流、认证、请求改写。Nginx 做 L7 LB 时可以基于 Header 中的 User-Agent 区分移动端和桌面端流量。' },
      { title: 'L7 LB 高级功能', content: '①路径路由：/api/* 到应用服务器集群，/static/* 到 CDN。②主机路由：api.example.com 和 admin.example.com 不同后端。③限流：基于 IP/Token 的 rate limit。④A/B 测试：根据 cookie 分流量到不同版本。⑤金丝雀部署：灰度比例动态调整。⑥内容缓存：对 GET 请求缓存响应。Envoy/Istio 就是 L7 代理的集大成者。' },
    ],
    diagnosis: [{ symptom: 'L7 LB 引入后 P99 延迟增加了 50ms', cause: 'SSL Termination 解密 + 请求解析增加开销，尤其是大并发时 CPU 瓶颈。', fix: '①使用硬件 SSL 卸载卡或专用 SSL 加速器 ②开启 session resumption 减少 TLS 握手次数 ③LB 与后端之间用 HTTP 而非 HTTPS（内网信任域）④必要时升级 LB 实例规格（更多 CPU）⑤使用 L4 LB + L7 LB 分层：L4 处理 TCP 分发，L7 仅处理需要内容路由的流量。' }],
    exercises: [
      { level: '基础', task: '列举 3 个只能 L7 做但 L4 做不了的功能', hint: '访问日志、限流、SSL', answer: '①基于 URL 的路由（/api/users→不同的后端集群）②HTTP 限流（限制某个 IP 每秒最多 100 个请求）③SSL 终止后在请求头中添加客户端证书信息④基于 Cookie 的粘性会话⑤请求/响应重写（添加安全头、修改路径）⑥访问日志记录完整的 HTTP 方法和 URL。' },
      { level: '进阶', task: '设计一个"API Gateway"基于 L7 LB 实现：统一入口、认证、限流、路由。对比 Nginx + Lua 和 Envoy 方案', hint: '网关 = L7 LB + 插件', answer: 'Nginx + Lua（OpenResty）：①Lua 脚本灵活实现认证逻辑 ②limit_req 模块限流 ③proxy_pass 路由 ④劣势：Lua 生态小，调试复杂。Envoy（Istio 数据面）：①原生 L7 代理 ②xDS 动态配置 ③内置限流、熔断 ④全观测性（metrics/tracing/logging 开箱即用）⑤劣势：复杂（学习曲线陡）。推荐：新项目用 Envoy/Kong，简单场景 Nginx。' },
    ],
  },

  "MpM9rT1-_LGD7YbnBjqOk": {
    mentalModel: '四层负载均衡是高速收费站——不管你车里坐几个人、要去哪儿（HTTP 内容），只要看见你的车牌（IP+端口），就放你进对应车道。速度快到几乎无感，适合极致性能要求的场景。',
    sections: [
      { title: 'L4 LB 工作原理', content: 'L4 LB 基于传输层（TCP/UDP）信息分发。流程：客户端 TCP SYN→LB→选择后端→转发 SYN→后端 SYN-ACK→客户端 ACK→连接建立。后续数据包直接转发（或不经过 LB——DSR 模式下响应直接走服务器到客户端）。HAProxy mode tcp 就是 L4 模式。最大优势：低延迟（无需解析 HTTP）、高吞吐（百万级并发）。' },
      { title: 'DSR（Direct Server Return）模式', content: 'L4 LB 的高性能秘诀：响应不经过 LB。LB 只处理入站流量（客户端→LB→服务器），服务器直接回复客户端（不绕回 LB）。节省 LB 出站带宽（通常是入站带宽的 10-100 倍）。实现：LB 改 MAC 地址而非 IP（L2 DSR）或服务器持有 LB 的 VIP 并直接回复（L3 DSR）。LVS（Linux Virtual Server）是 DSR 的经典实现。' },
    ],
    diagnosis: [{ symptom: 'L4 LB 健康检查通过但后端服务实际返回 500 错误', cause: 'L4 健康检查只验证端口可连接（TCP handshake 成功），不检查应用层健康。', fix: '虽然 L4 层无法解析 HTTP，但可以通过以下方式增强：①用外部监控程序定期做 HTTP 健康检查，发现异常调用 LB API 摘除节点 ②LB 主动模式：LB 发送简单 HTTP 请求并检查响应（有些 L4 LB 支持基本 HTTP 健康检查）③后端服务自己监控：触发健康检查失败时主动向 LB 上报不健康。' }],
    exercises: [
      { level: '基础', task: 'L4 LB 和 L7 LB 的延迟差异大概是多少？为什么？', hint: '解析开销', answer: 'L4 LB 通常比 L7 LB 延迟低 0.5-2ms。L4 只需检查 TCP 包头（固定 20 字节），直接转发。L7 需要完整接收 HTTP 请求头、解析 URL/Header、可能需要解密 SSL。对于简单转发，L4 延迟接近网络转发本身。高 QPS 下差异更大（L7 的 CPU 开销在高并发时成为瓶颈）。' },
      { level: '进阶', task: '设计一个 L4 + L7 双层 LB 架构：L4 挡前面处理 DDoS 和初级分发，L7 做智能路由。画出流量路径', hint: '分层防护+功能分离', answer: '流量路径：Client→DDoS 清洗→L4 LB（高吞吐，简单 TCP 转发）→L7 LB（路径路由、认证、限流）→后端应用。优势：①L4 扛住大流量和 SYN flood ②只有正常流量进入 L7（减少 SSL 解密开销）③L4 做初步健康检查和快路径（static 资源直接从 L4 转发到 CDN）④L7 做精细路由和业务逻辑。AWS 的 NLB+ALB 组合就是典型的这种架构。' },
    ],
  },

  "IkUCfSWNY-02wg2WCo1c6": {
    mentalModel: '水平扩展就像开连锁店而不是扩店面——一个店做不下生意了，就开分店，10 个店服务 10 倍客人。关键在于每家店（服务器）互不依赖，客人去任意一家都能完成交易。',
    sections: [
      { title: '水平 vs 垂直扩展', content: '垂直扩展（scale up）= 买更大的机器：8C→64C, 32G→256G RAM。优点：简单（无需改代码）、数据集中。缺点：有上限（最大机型就那么大）、贵（成本非线性）、单点故障。水平扩展（scale out）= 加更多机器：1 台→10 台→100 台。优点：理论无限、成本线性、容错好。缺点：复杂（需要分布式协调、数据分片）。Facebook 的 TAO 图谱服务就是通过水平分片支撑数十亿用户。' },
      { title: '无状态是扩展前提', content: '水平扩展的核心前提：应用层无状态（stateless）。状态（session、缓存、文件）放在共享层（Redis、DB、S3）。这样任意一台服务器挂了，流量转到另一台不受影响。如果必须要有状态，做 sticky session（session 亲和）或复制 session（内存网格如 Hazelcast）。但长期看，无状态才是王道。' },
    ],
    diagnosis: [{ symptom: '应用水平扩展后，某些用户操作出错或不一致', cause: '应用层有隐含的状态依赖——本地缓存、内存 session、文件系统。请求分流到新机器后状态丢失。', fix: '①将 session 外化到 Redis/DB ②清除本地缓存或改分布式内存网格（Hazelcast）③文件上传存到共享存储（S3/NFS）④使用分布式任务调度替代本地定时任务⑤确认所有机器上的代码/配置一致（容器化可解决）。' }],
    exercises: [
      { level: '基础', task: '一台 4 核服务器支撑 200 QPS。如果线性扩展，10 台能撑多少？为什么实际达不到？', hint: 'Amdahl 定律——共享资源瓶颈', answer: '理论上 10×200=2000 QPS，但实际取决于瓶颈在哪。如果瓶颈在无状态应用层（计算密集），接近线性。如果瓶颈在数据库（共享资源），加再多的应用层也没用——受限于数据库的连接池和 IO。实际扩展效率：应用层 80-90% 线性，数据库 50-70%。这就是为什么缓存能大幅提高实际扩展能力。' },
      { level: '进阶', task: '设计一个自动伸缩（Auto Scaling）方案：根据 CPU 利用率动态增减服务器。考虑冷启动、缩容时如何排空流量', hint: 'K8s HPA + 预热 + 优雅下线', answer: '扩容策略：①CPU > 70% 持续 2 分钟→加 1 台 ②实例启动后进入"预热"阶段（5 分钟），LB 只分配少流量 ③预热完成（健康检查通过+性能指标正常）→正式加入集群。缩容策略：①CPU < 30% 持续 5 分钟→减 1 台 ②标记缩容实例→LB deregister（停止新连接）③等待现有连接 drain（最多 300 秒）④优雅关闭应用（等待队列清空）⑤终止实例。冷却时间：扩容后 5 分钟内不缩容，防止振荡。' },
    ],
  },

  "5FXwwRMNBhG7LT5ub6t2L": {
    mentalModel: '数据库是整个软件体系的"心脏"——所有业务数据在这泵送、流转、永存。选型错误就像给人装了个马的心脏：跑不动，甚至会死。数据库选型是系统设计中最不可逆的决策之一。',
    sections: [
      { title: '关系型 vs 非关系型', content: 'SQL（关系型）：强 schema、ACID 事务、JOIN 支持。MySQL/PostgreSQL 是经典。适用于：用户、订单、财务——数据结构清晰且依赖关系多。NoSQL：灵活 schema、水平扩展友好。四家族：KV（Redis/DynamoDB）、文档（MongoDB）、列族（Cassandra/HBase）、图（Neo4j）。适用于：日志、社交图谱、物联网时序。' },
      { title: '数据库演进案例', content: 'Netflix 从 Oracle（单点瓶颈）→Cassandra（高扩展 AP 系统）→同时使用多种数据库：Cassandra（播放历史），MySQL（用户账户），Elasticsearch（搜索），S3（视频文件元数据）。没有一个数据库能解决所有问题——polyglot persistence（多语种持久化）是正确方向。' },
    ],
    diagnosis: [{ symptom: '非关键功能也用了强事务型数据库，成本奇高', cause: '一刀切选型——所有数据都进 PostgreSQL，不做区分。', fix: 'CQRS 分层：命令（写操作）用 MySQL/PostgreSQL 保一致性，查询（读操作）用 Elasticsearch/Read Replica 保性能。日志类数据直接进 Elasticsearch/Kafka。文件/图片进 S3 或 Blob Store。每种数据按访问模式选最合适的存储，而非统一数据库。' }],
    exercises: [
      { level: '基础', task: '列出 NoSQL 数据库的 4 个主要类别，每类给一个代表产品和其典型场景', hint: 'KV、文档、列族、图', answer: '①KV（Key-Value）：Redis/DynamoDB——缓存、session、购物车 ②文档：MongoDB——内容管理、用户配置（JSON 文档天然匹配对象结构）③列族：Cassandra/HBase——时序数据、消息历史、推荐系统 ④图：Neo4j/Amazon Neptune——社交关系、推荐引擎、欺诈检测。' },
      { level: '进阶', task: '设计一个电商系统的数据库方案：用户、订单、商品、库存、推荐各用什么数据库？', hint: '每种数据有不同的读写模式和一致性需求', answer: '①用户（User Profile）：PostgreSQL——结构固定、需要 JOIN（用户+地址+偏好）②商品（Product Catalog）：MongoDB——结构灵活（不同品类字段不同）③订单（Order）：MySQL——强一致 ACID 事务 ④库存（Inventory）：Redis——高并发原子扣减 + 异步同步到 MySQL ⑤推荐（Recommendation）：Cassandra——海量行为数据写入+用户画像宽表 ⑥搜索：Elasticsearch——全文搜索+聚合。综合：MySQL 做主库，Redis 扛库存峰值，MongoDB 存商品灵活信息。' },
    ],
  },

  "KLnpMR2FxlQkCHZP6-tZm": {
    mentalModel: 'SQL vs NoSQL 就像正规表格 vs 便签纸——SQL 是 Excel 表格：有固定列、有公式、可以 JOIN。NoSQL 是便签：随便写、灵活、但没有关系的概念。不能简单说谁更好——这取决于你写的是发票还是购物清单。',
    sections: [
      { title: '核心差异对比', content: 'Schema：SQL 固定（ALTER TABLE 改结构），NoSQL 灵活（每条记录可有不同字段）。事务：SQL 完整 ACID，NoSQL 大部分无多行 ACID 或仅最终一致。扩展：SQL 通常垂直扩展或手动分库分表，NoSQL 天然水平扩展。查询：SQL 强大（JOIN/子查询/聚合），NoSQL 受限（部分不支持 JOIN）。成熟度：SQL 40 年验证，NoSQL 各产品有各自坑。' },
      { title: '实际选型指南', content: '用 SQL 当数据模型稳定、需要复杂事务和关联查询。用 NoSQL 当需要快速水平扩展、schema 不断变化、高吞吐写入。真实案例：Uber 核心结算用 MySQL（ACID 刚性要求），司机位置追踪用 Redis（高吞吐），行程事件用 Cassandra（海量时序），用户快照用 MySQL。不同问题用不同数据库。' },
    ],
    diagnosis: [{ symptom: 'MongoDB 中做多表关联查询，性能很差', cause: '用错了工具——文档数据库不适合做 JOIN 操作。', fix: '①如果关联查询是核心需求，迁移到 PostgreSQL（支持 JSONB 做灵活 schema + 表 JOIN）②或者做 data denormalization（把关联数据嵌套在一个文档内）③用应用层做 join（多次查询拼装结果——性能差但可行）④采用 database view 或 secondary index 加速。' }],
    exercises: [
      { level: '基础', task: '以下场景选 SQL 还是 NoSQL：①银行交易系统 ②微博时间线 ③IoT 传感器数据 ④博客系统（文章+评论+用户）', hint: '事务需求、扩展需求、查询复杂度', answer: '①银行：SQL（ACID 强制）②微博：NoSQL（海量写入+最终一致性可接受，Cassandra/MongoDB）③IoT：NoSQL 时序库（InfluxDB/TimescaleDB）④博客：SQL（用户、文章、评论多表 JOIN）。但如果博客要扩展成大型 CMS→NoSQL 也可以。' },
      { level: '进阶', task: '设计一个使用 PostgreSQL 作为主库 + Redis 缓存层的方案。什么场景下可以减少 Redis 开销直接用 PG？', hint: 'PG 也有缓存能力', answer: 'PG 的 shared_buffers 是内置数据缓存（默认 128MB，可调大到物理内存的 25%）。优化好的 PG：①使用连接池（PgBouncer）②合理索引 ③增大 shared_buffers 达到工作集大小 ④使用物化视图预计算复杂查询 ⑤只读流量用 PG 读副本。当这些优化后 QPS 满足需求（<1 万 QPS），可以不要 Redis，减少架构复杂度。Redis 的价值在 10 万+ QPS 场景和需要复杂缓存策略时。' },
    ],
  },

  "dc-aIbBwUdlwgwQKGrq49": {
    mentalModel: '数据库复制是拍电影的分镜头剧本——同一个故事（数据）同时拍摄多个副本（分镜），保证一个副本损坏了还能用另一个。主从复制=导演主导；多主复制=全剧组各自发挥但要协调。',
    sections: [
      { title: 'MySQL 复制演进', content: '①异步复制：主库写 binlog→从库 IO 线程拉取→SQL 线程应用。主从延迟可达数秒。②半同步复制（semi-sync）：主库等待至少一个从库确认收到 binlog 才返回。延迟可控但吞吐降低。③组复制（Group Replication）：Paxos 协议多主写入。MySQL 8.0 MGR 支持。④GTID（全局事务 ID）：让从库切换更可靠——不用记 binlog 文件名和位置，直接按事务 ID 追。' },
      { title: '复制拓扑', content: '①一主多从：适合读多写少（Web 应用经典模式）。②级联复制：主→一级从→二级从，减少主的 IO 压力。③环形复制：多主环状复制，写任意节点。复杂度最高（冲突解决）。④星形复制：多主到一个中央从库聚合数据（分析/备份）。选型取决于：读写比例、数据一致性要求、容灾需求。' },
    ],
    diagnosis: [{ symptom: 'MySQL 主从延迟 > 10 秒，从库数据严重滞后', cause: '主库写入量大 + 从库单线程回放 relay log（MySQL 5.6 之前）或从库性能不足。', fix: '①MySQL 5.7+ 启用并行复制（slave_parallel_workers=4）②检查是否有大事务（一条 SQL 更新百万行）导致 relay log 积压——拆成小事务 ③从库替换为与主库同规格的机器 ④使用 GTID 监控精确的延迟量 ⑤业务层：读取后核对版本号判断数据是否新鲜。' }],
    exercises: [
      { level: '基础', task: '主从复制的"读扩展"能提升多少？为什么不能"写扩展"？', hint: '主库是写的瓶颈，从库分担读', answer: '读扩展可通过加更多从库几乎线性提升（负载均衡分发读请求）。但写操作必须经过主库——所有从库也要接收和回放这些写操作。所以加从库不能提升写性能，反而增加主库的 binlog 发送压力。要扩展写只能：①分库分表（sharding）②升级主库硬件（scale up）。' },
      { level: '进阶', task: '设计一个使用 MySQL 组复制（MGR）的多主方案：3 个节点，任意节点可读写。如何处理冲突和故障恢复？', hint: 'Paxos + 乐观冲突检测', answer: '①MGR 基于 Paxos 协议：写事务需多数节点同意才提交（3 节点需 2 个同意）②冲突检测：每个事务携带 writeset（修改了哪些行）。如果两个节点同时写同行，先提交的胜出，后提交的回滚并通知应用重试 ③故障恢复：单节点故障不影响写入（仍有 2 节点多数），但只剩 1 节点时 MGR 进入只读状态（防脑裂）④ 应用层需要处理事务重试逻辑。MySQL MGR 适合小规模（3-5 节点），大规模用分库分表+一主多从更好。' },
    ],
  },

  "FX6dcV_93zOfbZMdM_-li": {
    mentalModel: '分片 = 把大部队分成不同帐篷——按地区分配到各自独立的"数据库空间"中处理各自数据。好处是写操作不再受单机限制，坏处是跨帐篷找人（JOIN）要跑很远。分片把线性瓶颈打散到多个并行单元。',
    sections: [
      { title: '分片策略', content: '①范围分片：user_id 1-100万→Shard A, 100万-200万→Shard B。简单但可能倾斜（新用户全到最新 Shard）。②哈希分片：hash(user_id) % N。均匀但扩展难（加节点要 rehash）。③一致性哈希：圆环分布，加节点只迁移少量数据。Dynamo/Cassandra 都基于此。④目录分片：查分片表决定数据位置。最灵活但多一次查询。⑤地理分片：按用户地区分片（中国用户→中国节点）。满足数据合规。' },
      { title: '分片后的跨片查询', content: '最大的挑战：怎么查"所有用户中注册最早的 10 个"？每个 Shard 只存部分数据。方案：①分散-聚合（scatter-gather）：并行查每个 Shard，聚合结果（费时，N 倍开销）。②全局二级索引：独立的索引服务存储所有 key→shard 映射③分布式查询引擎：Presto/Apache Drill 可以跨多个数据源做 JOIN④双写：同时维护分片库和一个全量查询库（Elasticsearch）——这是 Twitter 的做法。' },
    ],
    diagnosis: [{ symptom: '分片后某 Shard 成为了热点，QPS 是平均的 5 倍', cause: '分片键选错了——某些值导致数据或流量集中（如名人账户、热门话题）。', fix: '①对热点 key 做更细粒度分片（user_id + tweet_id 组合分片键）②热点数据单独缓存（Redis local cache）③增加该分片的读副本数④换分片策略（从 user_id hash 改为基于内容属性的分片）⑤用"虚拟分片"：实际存储单元多于物理节点数，热点虚拟分片可迁移到专用强机。' }],
    exercises: [
      { level: '基础', task: '一个系统用 hash(user_id) % 4 做了 4 个分片。现在要扩展到 8 个分片，最少要迁移多少数据？', hint: '简单取模迁移量', answer: '用 %8 替换 %4 后：user_id%4 落在 0 的数据，在 %8 落在 0 和 4——大约 75% 的数据需要迁移！具体：hash%4=0 的 25% 数据有一半（12.5%）仍落在 %8=0，另一半（12.5%）需要迁到 %8=4。总共 50% 数据需要迁移。这就是简单取模分片的缺点。一致性哈希可以将迁移量降到 ~1/N。' },
      { level: '进阶', task: '设计一个"支持 re-sharding 的最小数据迁移"方案。从 4 节点扩展到 5 节点，迁移量占比多少？', hint: '一致性哈希 + 虚拟节点', answer: '方案：一致性哈希环上每个物理节点对应多个虚拟节点（如 150 个/物理节点）。从 4 节点→5 节点时：①5 节点在环上分布虚拟节点 ②仅相邻虚拟节点之间的数据需要迁移 ③迁移量 = 1/5 = 20% ④详细步骤：识别需要迁移的范围→复制数据→更新元数据→确认后删除旧数据→整个过程对读写透明（应用层查询目标 shard 的路由表）。实际实现参考 Cassandra 的 vnode 和 Redis Cluster 的 hash slot。' },
    ],
  },

  "-X4g8kljgVBOBcf1DDzgi": {
    mentalModel: '缓存是系统的"速记板"——把最常用的数据写在便签上放桌边（内存），不用每次跑到隔壁档案室（数据库）去翻。关键是：便签上的信息可能过期，核心数据还得以档案室为准。',
    sections: [
      { title: '缓存层级', content: '①浏览器/客户端缓存：HTTP Cache-Control/ETag/Service Worker。②CDN 缓存：边缘节点，减少回源次数。③应用层缓存：Redis/Memcached——缓存数据库查询结果、计算中间值、session。④数据库缓存：MySQL buffer pool、PostgreSQL shared_buffers。⑤操作系统文件缓存：page cache。Facebook 80% 的读流量被缓存层吸收，DB 压力降一个数量级。' },
      { title: '缓存失效策略', content: '缓存最难的两件事：命名和失效。策略：①TTL（Time to Live）：设过期时间，最简单 ②主动失效：数据更新时删除对应缓存 ③write-through：写 DB 同时也写缓存 ④write-behind：先写缓存，异步同步 DB ⑤Cache Aside（旁路缓存）：先读缓存，miss 则读 DB 并回填缓存。Twitter 的 Timeline Cache 用"每个用户预生成并缓存时间线"，有新推文时更新该用户粉丝的时间线缓存（fan-out on write）。' },
    ],
    diagnosis: [{ symptom: '缓存命中率突然从 95% 降到 50%，数据库被压垮', cause: '缓存雪崩——大批 key 同时过期，流量瞬间打到后台 DB。', fix: '①TTL 加随机偏移（原始 TTL + random(0, 0.1×TTL)），避免同时过期②缓存高可用（Redis Cluster/Sentinel 多副本）③热点 key 不过期（永不过期，更新时覆盖）④限流+熔断保护 DB（缓存 miss 也有限流）⑤提前预热：每日高峰前跑一遍热门数据预加载进缓存。' }],
    exercises: [
      { level: '基础', task: '解释缓存穿透、缓存击穿、缓存雪崩的区别', hint: '分别针对不存在的数据、单个 key、大批 key', answer: '①缓存穿透：查不存在的数据（id=-1），缓存也没存，每次都打到 DB。解决：缓存空值（null）或布隆过滤器。②缓存击穿：某个热门 key 过期瞬间，大量请求同时查 DB。解决：互斥锁（只让一个请求回源 DB 重建缓存）。③缓存雪崩：大量 key 同时过期，DB 瞬间被打爆。解决：过期时间加随机值、多层缓存、限流。' },
      { level: '进阶', task: '设计一个"支持热点自动发现和自动保护"的缓存系统。某个 key 瞬时 QPS 增长 100 倍时自动处理', hint: '热点探测 + 本地缓存', answer: '①热点探测：客户端或中间件统计各 key 的访问频次，在滑动窗口内（如 5 秒）统计 topN②发现热点 key 后：将热点 key 的缓存推到各应用实例的本地内存（local cache），减少 Redis 网络开销 ③设置热点自动过期时间（较短的 TTL），热点消退后自动释放本地内存 ④多级缓存：本地缓存→Redis→DB，热点在 L1 命中速度最快 ⑤更新策略：DB 更新时发消息到 MQ，各实例监听并刷新 local cache。Weibo 的热搜和明星微博大量用这个策略。' },
    ],
  },

  "bffJlvoLHFldS0CluWifP": {
    mentalModel: 'Cache Aside = 创业者看报表——平时从自己电脑里的缓存（Redis）看指标，缓存里没有就去数据库拉一份并记到本子上。做了决定（写入）后，把本子上的旧数据划掉（删缓存），下次用到时重新去数据库取。',
    sections: [
      { title: 'Cache Aside 流程', content: '读：①查缓存 → 命中返回 ②未命中 → 查 DB → 写入缓存 → 返回。写：①更新 DB（先更新 DB，后删缓存）②删除缓存 key（不等更新缓存——等下次读时自然回填）。为什么删缓存而不是更新缓存？因为并发写可能让缓存变成过期数据，且很多缓存值是复杂计算/聚合的结果，与其重算不如 lazy 重建。' },
      { title: '先删缓存还是先更新 DB？', content: '先删缓存再更新 DB 的风险：A 删缓存→B 读 miss→B 读 DB 旧数据→B 写缓存旧数据→A 更新 DB 新数据→缓存中是旧数据！解决方案：延时双删——先删缓存→更新 DB→等一会（如 500ms）再删一次缓存。或先更新 DB 再删缓存（Facebook 的方案：更新 DB→删缓存，虽然短暂不一致但极少发生）。' },
    ],
    diagnosis: [{ symptom: 'Cache Aside 模式下，缓存和 DB 数据长期不一致', cause: '删除缓存失败（Redis 挂了/网络超时）或者并发写入导致缓存被旧数据覆盖。', fix: '①删除缓存失败时重试（最多 3 次，指数退避）②重试仍失败则记录到 MQ 死信队列，异步补偿③使用 binlog 监听（Canal/Debezium）在 DB 变更时异步刷新缓存④设置合理的 TTL 兜底（即使删缓存失败，TTL 过期后也会回源更新）。' }],
    exercises: [
      { level: '基础', task: '在 Cache Aside 模式下，为什么更新 DB 和删除缓存两个操作之间可能出现不一致？画时序', hint: '并发读写交叉', answer: '时序：T1: A 读缓存 miss → A 读 DB（旧值=v1）→ T2: B 更新 DB（v1→v2）→ T2: B 删缓存 → T1: A 写缓存（v1）→ 缓存中依然是旧值 v1！虽然窗口很短（毫秒级），但在超高并发下会重现。解决方法：更新操作延迟双删（间隔 500ms-1s 再删一次）或使用分布式锁。' },
      { level: '进阶', task: '设计一个"防并发写导致缓存脏数据"的版本控制方案。确保缓存中永远是有序的最新版本', hint: '版本号/时间戳校验', answer: '①DB 中每条记录带 version 字段，每次更新自增 ②读缓存 miss 时，从 DB 取数据+版本号一起缓存（value: data, version: n）③写更新：先更新 DB（version = n+1），再删缓存 ④读重建缓存时带条件写入：Redis Lua 脚本检查"当前缓存的版本号 < 新的版本号"才允许写入。这样即使并发读拿到了旧版本 n，要写入时发现缓存中已经是 n+1（或未命中被其他请求写过），则放弃。⑤Redis 不支持 CAS，用 Lua 实现原子版本检查。' },
    ],
  },

  "84N4XY31PwXRntXX1sdCU": {
    mentalModel: '异步学就像请助理——你让他"去把这堆信寄了"然后继续做重要的事，不用站在原地等每封信都贴完邮票再离开。异步的本质是：把慢的操作剥离出去，不让它拖慢快速的操作。',
    sections: [
      { title: '异步的三大场景', content: '①耗时操作解耦：发送验证码、导出报表、视频转码——用户提交任务，先返回"受理了"，后台慢慢做。②流量削峰：秒杀双 11 大量并发→队列排队，Worker 匀速处理，不让 DB 过载。③系统解耦：订单系统不直接调库存系统，而是发"订单已支付"事件到 MQ，库存服务按自己节奏消费。微服务的前置条件就是异步。' },
      { title: '异步的代价', content: '①系统复杂度增加——要处理消息丢失、重复、顺序。②调试变难——调用链从同步的 call stack 变成了分布的 event chain。③用户体验需要额外设计——用户点了按钮没反应不一定是挂了，可能是异步处理中。④最终一致性——你提交"发送验证码"后，可能在 3 秒后才收到（用户心理模型是"立即收到"）。' },
    ],
    diagnosis: [{ symptom: '异步消息处理中，某条消息处理失败后卡在队列', cause: '消费者没有正确处理异常——消息被 NACK 后又回到队列头，反复失败形成死循环。', fix: '①消费者 catch 所有异常，记录日志但不崩溃②对于不可重试的错误（数据格式错误）→移入死信队列（DLQ），不 re-queue③对于可重试的临时故障（网络超时）→NACK 重试（最多 3 次）④设置消息 TTL，过期自动丢弃⑤监控死信队列，定时人工复查。' }],
    exercises: [
      { level: '基础', task: '以下哪些操作适合异步化？①用户登录验证 ②导出 Excel 报表 ③扣减库存 ④发送注册邮件 ⑤实时聊天消息', hint: '需要即时反馈 vs 可延迟', answer: '①登录验证：必须同步（用户当场等待结果）②导出 Excel：应该异步（可能很长时间）③扣减库存：核心路径同步（秒杀时逻辑可异步+乐观锁补偿）④发送邮件：异步（发邮件可能 2 秒，不要让注册卡住）⑤实时聊天：必须同步（延迟<100ms），但消息存储可异步。' },
      { level: '进阶', task: '设计一个支持"异步处理+同步感知"的秒杀系统：用户点击"立即抢购"，后端异步处理但前端能感知进度', hint: '请求排队 + 轮询/推送结果', answer: '流程：①用户点击抢购→后端鉴权限流（同步，100ms 内）→通过后生成 task_id 返回"已进入队列"②抢购请求进 Redis 队列，Worker 按次序处理（库存扣减→下单→支付）③前端拿到 task_id 后建立 WebSocket 连接等待结果推送④Worker 每步骤完成时更新 task 状态（Redis key→status: "checking_stock"/"creating_order"/"done"），推送给 WebSocket ⑤30 秒超时无响应→前端提示"抢购人数过多请稍后查看订单"。' },
    ],
  },

  "37X1_9eCmkZkz5RDudE5N": {
    mentalModel: '消息队列 = 快递中转站——发件人（生产者）把包裹（消息）放到中转仓（Broker），收件人（消费者）按自己节奏来取。关键好处：①发件人不用亲自等收件人 ②收件人忙不过来时包裹在中转仓排队 ③多个收件人可以同时从不同分区取件。',
    sections: [
      { title: 'MQ 核心模型', content: '生产者（Producer）→Broker（Kafka/RabbitMQ/RocketMQ）→消费者（Consumer）。关键特性：①持久化：消息落盘，Broker 挂了不丢 ②ACK 确认：消费者处理后发送 ACK，Broker 才标记消息已处理 ③分区：Topic → 多 Partition 并行处理 ④顺序：同分区内有序 ⑤消息生命周期：保留 N 天或基于大小自动删除。' },
      { title: 'Kafka vs RabbitMQ 选型', content: 'Kafka：高吞吐（百万 TPS）、持久化存储、消息回溯、日志流处理。适合：大数据管道、事件溯源、指标收集。RabbitMQ：低延迟、复杂路由（exchange/binding 灵活匹配）、AMQP 标准。适合：业务消息、RPC 调用、任务队列。LinkedIn（Kafka 发源地）用 Kafka 处理每日万亿条消息。Uber 用 Kafka 做实时数据管道。' },
    ],
    diagnosis: [{ symptom: '消费速度跟不上生产速度，消息越积越多', cause: '消费者处理逻辑过慢（调用外部服务慢/DB 写入慢），或消费者数量不足。', fix: '①增加消费者数量和 partition 数量（partition 是并行度的上限）②优化消费逻辑（批量处理、异步 IO）③如果是 RabbitMQ：使用 prefetch 限制（避免一个消费者积压太多未 ACK 消息）④设置消息 TTL（过期自动丢弃）⑤拆分慢任务和快任务到不同 Topic，让快任务不被慢任务拖累。' }],
    exercises: [
      { level: '基础', task: 'Kafka 中一个 topic 有 4 个 partition，3 个 consumer 在同一个 consumer group 中。怎么分配 partition？', hint: '每个 partition 只能被 group 中的一个 consumer 消费', answer: '4 partition 分配给 3 个 consumer：①至少一个 consumer 分配 2 个 partition ②其余 consumer 各 1 个（不均衡）③如果增加到 4 个 consumer→每人 1 个（均衡）④增加到 5 个 consumer→1 个 idle（partition 数是并行上限）⑤Kafka 用 rebalance 协议自动分配，Rebalance 期间消费暂停。' },
      { level: '进阶', task: '设计一个"业务事件总线"（Event Bus），用消息队列实现微服务间通信。要求：支持消息重放、追踪链路、死信处理', hint: 'Kafka + 事件 schema + tracing', answer: '①Topic 设计：per 业务域（order_events、user_events）②事件 schema 用 Avro/Protobuf 注册在 Schema Registry（保证兼容性）③每个事件带 trace_id、event_id（uuid）、timestamp、source、version④消费者写处理日志（event_id+status），幂等去重 ⑤失败重试 3 次后进 Dead Letter Topic⑥消息重放：重置 Consumer Group offset 到指定时间点，Kafka 保留 7 天消息 ⑦OpenTelemetry 集成，在 Broker/Consumer 中自动传递 trace context。Uber 的 Cadence 和 Netflix 的 Keystone 都是类似架构。' },
    ],
  },

  "uQFzD_ryd-8Dr1ppjorYJ": {
    mentalModel: '通信协议是系统组件间的"官方语言"——有些需要精准无歧义（TCP/HTTP），有些只要够快就行（UDP/WebSocket）。选择合适的协议就像选择交通工具：飞机快但不适合送快递文件，卡车慢但啥都能装。',
    sections: [
      { title: 'OSI 模型与协议栈', content: '应用层（HTTP/gRPC/REST/WebSocket）→传输层（TCP/UDP）→网络层（IP）→链路层/物理层。系统设计主要在应用层和传输层做选择：①HTTP/1.1：文本协议，简单但 head-of-line blocking ②HTTP/2：多路复用，解决 HOL blocking ③HTTP/3（QUIC）：基于 UDP，0-RTT 握手④gRPC：基于 HTTP/2+Protobuf，强类型+双向流⑤WebSocket：全双工持久连接（聊天/实时数据）。' },
      { title: '协议选型案例', content: '①浏览器→Web 服务器：HTTPS（TLS 传输加密）②微服务间同步调用：gRPC（Protobuf 高效序列化+多语言代码生成）③实时推送（股价/赛事）：WebSocket（长连接主动推）④日志/埋点上报：UDP（允许丢一些日志但绝对不能阻塞主业务）⑤文件传输：HTTP multipart 或专用协议（FTP/SFTP）⑥聊天消息：WebSocket（在线）+ 离线消息通过 MQ 异步推送。' },
    ],
    diagnosis: [{ symptom: '微服务间用 REST+JSON 通信，高并发下延迟 P99 超过 200ms', cause: 'JSON 序列化/反序列化开销大 + HTTP/1.1 无连接复用', fix: '①升级到 HTTP/2（连接复用）②改用 gRPC+Protobuf（二进制编码比 JSON 快 3-10 倍）③启用 HTTP 长连接（keep-alive）④批量请求合并（避免 N+1 问题）⑤数据压缩。' }],
    exercises: [
      { level: '基础', task: '对比 HTTP/1.1、HTTP/2、HTTP/3 的核心差异', hint: '多路复用、队头阻塞、0-RTT', answer: 'HTTP/1.1：简单，队头阻塞。HTTP/2：多路复用、服务端推送。HTTP/3：基于 UDP，消除 TCP 队头阻塞，0-RTT 握手。适合移动弱网。' },
      { level: '进阶', task: '设计一个多协议 API Gateway：外部 HTTPS，内部可转 gRPC/HTTP/异步消息', hint: '协议转换层+路由表', answer: '入口层 SSL termination→协议路由（/api/grpc/*→gRPC 后端，/api/rest/*→HTTP 后端）→协议转换（REST JSON↔Protobuf 基于 proto 定义自动转换）→异步桥接（POST /orders→Kafka topic，消费者异步处理）→统一鉴权限流在入口层。' },
    ],
  },

  // ==================== CDN Types & Advanced Networking ====================
  "HkXiEMLqxJoQyAHav3ccL": {
    mentalModel: 'Pull CDN 是自助餐——菜（内容）不提前摆上桌，客人来了（用户请求）才从厨房（源站）端出来。第一次慢，后面就快了（缓存）。适合内容太多摆不下（长尾内容）的场景。',
    sections: [
      { title: 'Pull CDN 工作原理', content: '①用户请求边缘节点 → ②节点检查本地缓存：命中则直接返回，未命中则向源站拉取 → ③拉取后缓存（按 Cache-Control 头设置的 TTL）→ ④后续请求命中缓存。适合：大量用户生成内容（YouTube/Instagram/Flickr），无法预知哪个内容会火。首次访问延迟高（回源+缓存写入），但后续命中只需边缘响应。' },
      { title: '与 Push CDN 对比', content: 'Pull：源站控制，不需预上传。存储成本低（只在有人访问时缓存）。但首次访问慢、源站可能被打爆（冷启动）。Push：提前推送到所有边缘，首次就快。但存储成本高、需要预知内容。Netflix 的混合策略：热门剧集 Push 到所有边缘，冷门纪录片 Pull on demand。' },
    ],
    diagnosis: [{ symptom: 'Pull CDN 缓存命中率极低（<30%），大部分请求都回源', cause: 'TTL 设置太短或内容太多导致缓存频繁被淘汰。', fix: '①延长 TTL（对不常变的静态资源设 max-age=1年）②增大边缘节点缓存容量③使用版本化 URL（新版本=新缓存 key，不会淘汰旧内容）④分析访问模式，对高频内容主动 pre-warm 到 CDN。' }],
    exercises: [
      { level: '基础', task: 'Pull CDN 首次访问某资源慢，第二次快——解释原理', hint: '缓存 warming', answer: '首次：边缘没缓存→回源拉取。第二次：边缘有缓存（TTL 未过期），直接从边缘返回，不需要回源。就像一个图书馆，第一次借书要去仓库取，之后放在前台还书处。' },
      { level: '进阶', task: '设计 CDN 的"缓存预热"策略：新上线的营销页面预计 10 万 QPS，怎么确保 CDN 已经缓存好了？', hint: '提前请求+分层预热', answer: '①先在 staging 环境测试 CDN 配置正确②部署前 1 小时，用脚本从全球多个区域发起预热请求（模拟真实用户访问）③预热脚本请求关键资源（HTML/CSS/JS/图片/字体）④监控各边缘节点确认缓存命中率>95%⑤使用加权 DNS 将小比例流量切到新页面，确认无问题后全量切换⑥若 CDN 支持 Push，直接预推关键资源到所有节点。' },
    ],
  },

  "uIerrf_oziiLg-KEyz8WM": {
    mentalModel: 'Push CDN 像送报纸——编辑确定内容后，印刷厂连夜印好送到各分发点。用户一出门就能拿到，不用等。适合内容提前确定（软件更新包、大版本发布），所有边缘提前准备就绪。',
    sections: [
      { title: 'Push CDN 使用场景', content: '①大型软件/游戏更新：iOS 更新包提前推送到全球 CDN（否则发布日源站被 1 亿台设备同时请求打爆）。②视频点播热门内容：Netflix 提前把下周要上线的爆款剧 Push 到边缘。③营销物料：双 11 海报和静态资源提前 Push。④固件更新：智能设备 OTA 更新包提前推送到各地 CDN。核心：内容提前确定 + 大规模并发下载。' },
      { title: '实现复杂度', content: 'Push CDN 需要管理推送任务——推哪些文件到哪些区域？推失败了怎么重试？存储成本高（文件在所有边缘都要存一份）。不适合频繁更新或内容极其庞大的场景。AWS CloudFront 和 Google Cloud CDN 主要支持 Pull 模式，Push 通常通过 API 触发缓存预热或使用专门的 CDN Push API。' },
    ],
    diagnosis: [{ symptom: 'Push CDN 推送失败，部分边缘节点还是旧版本', cause: '推送是异步的，网络中断或边缘节点暂时不可用导致推送任务失败但未重试。', fix: '①推送后验证每个边缘节点的内容 hash（MD5/SHA256）②失败节点自动重试③提供 fallback 机制：如果边缘没有新版本，回源到区域中心节点取④推送时带上版本号，边缘节点可以用版本号做原子切换。' }],
    exercises: [
      { level: '基础', task: 'Push CDN 和 Pull CDN 各适合哪种内容？举 2 个例子', hint: '预知内容 vs 长尾内容', answer: 'Push：预先确定的少量大文件（iOS 更新包、电影新片上线）。Pull：海量用户生成内容无法预知（YouTube 视频、Facebook 图片——每天上亿条新内容，不可能都 Push）。' },
      { level: '进阶', task: '设计 iOS 系统更新（全球 10 亿设备）的 CDN 分发方案，确保发布日源站不被打爆', hint: 'Push + 分级 + P2P', answer: '①更新包发布前 72 小时 Push 到全球 CDN 所有边缘节点（验证 hash）②分级推送：先推核心区域（US/CN/Europe），再扩展到其他区域③使用 Apple 的 P2P Caching Service（macOS/macOS Server 在本地网络缓存更新，减少 CDN 流量）④灰度发布：5%→25%→50%→100% 分阶段开放下载⑤每个阶段监控 CDN 带宽和错误率。' },
    ],
  },

  // ==================== Architecture Patterns ====================
  "UKTiaHCzYXnrNw31lHriv": {
    mentalModel: '微服务是"拆零件"哲学——一辆汽车拆成发动机、变速箱、轮胎独立制造。每个零件有自己的产线和团队，能独立升级——刹车系统改进不需要等发动机团队。但协调成本激增：零件间怎么配合变成大问题。',
    sections: [
      { title: '微服务核心特征', content: '①单一职责：一个服务只做一件事（订单服务只管理订单生命周期）②独立部署：不改其他服务就能上线③独立技术栈：订单用 Java，推荐用 Python，互不约束④去中心化数据：每个服务自有数据库⑤容错设计：一个服务挂了，其他服务不雪崩。Uber 从单 PHP 应用→2200+ 微服务，就是业务复杂度驱动的。' },
      { title: '什么时候不该用微服务', content: 'Monolith First 原则（Martin Fowler）：创业初期用单体快速迭代。MVPs 不需要微服务——拆分带来的部署/调试/网络延迟成本远超收益。当团队人数 > 20、多业务线并行开发、单体部署频繁冲突时再考虑拆分。Segment 分享了他们从微服务退回单体的经验：运维成本压垮了小团队。' },
    ],
    diagnosis: [{ symptom: '微服务间调用链过长，一个请求穿透 8 个服务', cause: '拆分过细——服务粒度太小，做了过多的远程调用而非同进程调用。', fix: '①合并强耦合的服务（如果 A 和 B 总是同时部署+同时改，合并回去）②使用 API Gateway 做聚合（BFF 模式：为前端定制聚合层）③异步化非关键路径（事件驱动替代同步 RPC 链）④使用 gRPC 减少序列化开销。' }],
    exercises: [
      { level: '基础', task: '列出微服务的 3 个优点和 3 个缺点', hint: '独立 vs 复杂', answer: '优点：①独立部署/扩容（只扩瓶颈服务）②团队自治（小团队负责独立服务）③故障隔离（一个服务挂了不影响全局）。缺点：①分布式系统复杂性（网络延迟/数据一致性/调试困难）②运维成本高（K8s/服务发现/监控链路）③数据孤岛（跨服务查询/事务难实现）。' },
      { level: '进阶', task: '设计一个电商系统从单体到微服务的拆分方案：先拆哪些模块？为什么？', hint: '按变更频率和瓶颈拆分', answer: '第 1 批拆分（最高价值）：①商品搜索（读多写少，Elasticsearch 独立）②消息推送（非核心路径，可异步+MQ）③推荐引擎（计算密集，独立扩缩）。第 2 批拆分：①订单服务（核心路径，拆分后独立 DB）②库存服务（高并发瓶颈）。第 3 批拆分：①用户服务（相对稳定，最后拆）②支付服务（强依赖第三方，边界清晰）。原则：先拆不核心路径的、后拆核心路径的；先拆读写分离的、后拆强事务耦合的。' },
    ],
  },

  "Nt0HUWLOl4O77elF8Is1S": {
    mentalModel: '服务发现=大楼前台名录——新公司搬进来（服务注册），前台记下"XX公司在 5 楼 508"。访客（调用方）问前台就能找到。没有服务发现，你得记住每个公司的房间号——某天人家搬了，你的名片就作废了。',
    sections: [
      { title: '客户端 vs 服务端发现', content: '客户端发现：服务 A 查询注册中心（Consul/etcd/Eureka）→拿到服务 B 的 IP 列表→负载均衡选择一台→直接调用。简单但客户端得集成发现逻辑。服务端发现：服务 A 调 LB（Nginx/Envoy）→LB 查询注册中心→转发到服务 B。客户端无感知但 LB 是瓶颈和单点。Kubernetes Service 就是服务端发现：kube-proxy + iptables 自动转发。' },
      { title: '注册中心选型', content: 'Consul：健康检查+KV 存储+多 DC。适合 HashiCorp 生态。etcd：Raft 共识+Watch 机制，Kubernetes 内置。Eureka：AP 系统（Netflix），优先可用性（节点挂了他不在乎，客户端缓存兜底）。ZooKeeper：CP 系统，临时节点自动删除。Nacos：阿里开源，兼具配置管理和服务发现。' },
    ],
    diagnosis: [{ symptom: '服务 B 已经挂了但注册中心还显示在线', cause: '健康检查间隔太长或心跳超时设得太大，注册中心还没发现它挂了。', fix: '①缩短健康检查间隔（如每 5 秒）和超时时间（3 次失败=不健康）②服务端主动上报心跳，而非被动被检查③客户端实现断路器（CircuitBreaker）：连续失败 N 次→自动摘除不健康节点，不依赖注册中心④Eureka 自保护模式：宁可保留旧数据也不驱逐（防止网络分区误删）。' }],
    exercises: [
      { level: '基础', task: 'Kubernetes 中 Service 和 Pod 的关系是什么？DNS 解析 Service 名返回什么？', hint: 'ClusterIP + kube-proxy', answer: 'Service 是一组 Pod 的逻辑抽象（通过 label selector 匹配）。DNS 解析 Service 名返回 ClusterIP（虚拟 IP）。kube-proxy 通过 iptables/IPVS 将 ClusterIP 流量随机分发到后端的健康 Pod。Pod 挂了会自动从 endpoints 中移除。' },
      { level: '进阶', task: '设计一个支持"多数据中心"的服务发现方案：服务跨 3 个 DC 部署，同 DC 内优先调用，故障时跨 DC', hint: 'Consul WAN + 延迟路由', answer: '①每个 DC 内部有本地 Consul 集群（注册本地服务）②Consul WAN Gossip 跨 DC 同步服务目录③客户端优先查询本地 DC 的服务实例（延迟最低）④本地 DC 无健康实例时，fallback 到其他 DC⑤客户端实现跨 DC 故障转移：加权选择（本地实例权重 10、其他 DC 权重 1）⑥跨 DC 调用走内部专线/VPN。' },
    ],
  },

  // ==================== Database Types ====================
  "KFtdmmce4bRkDyvFXZzLN": {
    mentalModel: 'KV 存储是大字典——你只能通过"key"这个单词查它的解释"value"。没有目录、没有索引、没有关联。快就是因为简单——字典查词 O(1)，但你想"查所有解释中包含 分布式 的词"就得翻完整本字典。',
    sections: [
      { title: 'KV 存储核心设计', content: 'Amazon DynamoDB 论文定义了 KV 存储的蓝图：①一致性哈希分区（无中心节点）②向量时钟冲突检测③Hinted Handoff（结点暂替故障结点存储）④Merkle Tree 同步差异⑤Gossip 协议成员通信。这些设计让 DynamoDB 可以在 10ms 内响应任意规模的读写。Redis 则是内存 KV 的极致：单线程事件循环+多种数据结构（不仅是简单 KV，还有 Hash/List/Set/SortedSet）。' },
      { title: '何时使用', content: '①缓存层（Redis/Memcached）：存储频繁访问的热点数据②Session 存储：用户登录状态③购物车：高并发读写的临时数据④配置中心：key=配置项，value=配置值⑤分布式锁：Redis SETNX 实现。选择 DynamoDB 风格（持久化）vs Redis 风格（内存速度）取决于是否接受重启丢数据。' },
    ],
    diagnosis: [{ symptom: 'Redis 内存使用率 95%，频繁触发 eviction（淘汰）', cause: '数据量超过了内存容量，或者没有设置合理的过期策略。', fix: '①设置 maxmemory-policy（allkeys-lru：淘汰最近最少使用的 key）②对不同类型的 key 设置不同 TTL ③检查是否有"永不过期"但实际不再使用的 key（僵尸数据）④使用 Redis Cluster 分片扩展内存⑤分离冷热数据：冷数据落盘（SSD），热数据在 Redis。' }],
    exercises: [
      { level: '基础', task: 'DynamoDB 和 Redis 都是 KV 存储，核心区别是什么？', hint: '持久化 vs 内存、一致模型、使用场景', answer: 'DynamoDB：持久化（SSD）、最终一致（可选强一致）、全托管自动扩缩、适合 TB 级持久存储。Redis：纯内存（可选 RDB/AOF 持久化）、单线程极快（100K+ QPS）、适合缓存和低延迟（<1ms）场景。' },
      { level: '进阶', task: '设计一个"多级 KV"方案：热 key 在本地内存，温 key 在 Redis，冷 key 在 DynamoDB。自动升降级', hint: '访问频率追踪+数据迁移', answer: '①统计 key 访问频次（Redis SortedSet 存储计数）②Top 1% key→升级到本地 Caffeine Cache（Java）或 LRU Map③中间 20%→保留在 Redis④剩余→存在 DynamoDB（缓存未命中时从 DB 拉取并升温）⑤每 10 分钟重新计算热度，升降级迁移⑥成本：本地内存极小，Redis 中等，DynamoDB 便宜。Facebook TAO 缓存就是类似模型。' },
    ],
  },

  "didEznSlVHqqlijtyOSr3": {
    mentalModel: '文档存储是文件抽屉柜——你放进去的是完整文档（JSON），取出来也是完整文档。不像关系数据库要把文档拆成表格存。MongoDB 让你按"文档"思维工作，而不是"行-列"思维。',
    sections: [
      { title: 'MongoDB 核心特征', content: '①文档模型（BSON=Binary JSON）：嵌套子文档、数组、灵活 schema。②自动分片：按 shard key 自动分布数据。③副本集：primary+secondary+arbiter 高可用。④聚合管道（Aggregation Pipeline）：类似 SQL GROUP BY 但更灵活。⑤索引（包括地理空间、文本全文索引）。适合：内容管理、商品目录（不同品类字段不同）、用户配置（非结构化的偏好设置）。' },
      { title: '什么时候不该用 MongoDB', content: '①需要复杂跨文档 JOIN：文档数据库的 $lookup 性能远不如 SQL JOIN。②需要 ACID 多文档事务：虽然 MongoDB 4.0+ 支持多文档事务，但性能开销大。③数据模型关系明确且稳定：表结构清晰时 SQL 更好。④需要强一致性写入：MongoDB 默认写多数副本确认，不是即时一致性。' },
    ],
    diagnosis: [{ symptom: 'MongoDB 查询变慢，explain 显示全集合扫描', cause: '查询字段没有索引，或索引不能有效利用（如复杂嵌套字段）。', fix: '①为查询字段建索引（单字段/复合/文本索引）②使用 explain() 分析执行计划③检查嵌套文档的索引是否生效（确保字段路径正确）④如果必须扫描，限制结果集（limit+projection）⑤考虑使用 materialized view 或预计算聚合结果。' }],
    exercises: [
      { level: '基础', task: 'MongoDB 的 document 最大 16MB 限制有什么影响？怎么存超大的数据？', hint: 'GridFS', answer: '16MB 限制是为了防止单个文档占用过多内存。超过限制的方案：①GridFS：把大文件拆成 255KB 的 chunk 分开存，元数据存文档 ②存外部引用：在文档中存 S3/文件系统 URL ③拆分为多个子文档关联。' },
      { level: '进阶', task: '设计一个商品系统：不同品类商品（衣服/手机/食品）字段完全不同。用 MongoDB 的优势体现', hint: '灵活 schema + 继承模式', answer: 'MongoDB 方案：①每个商品一个文档（collection: products）②公共字段：name/price/created_at③品类特有字段自由添加：衣服有 size/color/material，手机有 ram/storage/os④利用多键索引：buildIndex({ "specs.ram": 1 })——尽管只有手机有 ram 字段⑤搜索时按品类过滤+品类内字段查询。如果用 MySQL 需要 EAV 模式（效率低）或多张品类表（JOIN 多）。' },
    ],
  },

  "WHq1AdISkcgthaugE9uY7": {
    mentalModel: '宽列存储是大货架仓库——每个产品（行 Key）的标签（列）独立存储，不是每个产品都有相同标签。查询时按行一口气拖出整条，适合"取某人所有行为"而非"取所有人今天的某行为"。Cassandra 和 HBase 是典型。',
    sections: [
      { title: 'Cassandra 的数据模型', content: 'Cassandra 由 Facebook 开发，用于 inbox search。数据组织：Keyspace（类似 Database）→ Table（类似 SQL 表但稀疏列）→ Partition Key 决定数据在哪个节点，Clustering Key 决定分区内排序。查询必须先确定 Partition Key。设计原则：围绕查询设计表（而非围绕实体）——如果查询需求变了，你得新建一张表。' },
      { title: '实际应用', content: '①Netflix 播放历史：user_id 是 Partition Key，video_id 是 Clustering Key，查询某用户最近看的 50 部影片极快。②Uber 行程事件：trip_id 是 Partition Key，事件时间戳是 Clustering Key，一次行程的所有事件存在一起。③IoT 传感器数据：device_id 是 Partition Key，timestamp 是 Clustering Key，设备数据按时间自然排序。' },
    ],
    diagnosis: [{ symptom: 'Cassandra 查询慢，检查发现跨了多个分区', cause: '查询条件不包含 Partition Key 或用了 ALLOW FILTERING（强制全表扫描）。', fix: '①确保所有查询都有 Partition Key（设计阶段就定好）②如果新查询需求找不到 Partition Key，创建新表（反范式化）③使用物化视图（materialized view）为不同查询提供不同排列④ALLOW FILTERING 只用于小数据集测试，产线禁用。' }],
    exercises: [
      { level: '基础', task: 'Cassandra 为什么查询必须有 Partition Key？不能像 SQL 那样随便查吗？', hint: '分布式数据分布', answer: 'Cassandra 按 Partition Key 的哈希值把数据分散到不同节点。没有 Partition Key 的查询不知道去哪找数据，必须扫描所有节点（全集群扫描）——不可接受。SQL 单机数据库可以全表扫描（成本可控），分布式数据库不行。' },
      { level: '进阶', task: '设计一个消息系统的 Cassandra schema：用户之间发消息，要支持"查看我和用户的对话列表"和"查看某条对话的所有消息"', hint: '两个表 + 不同排序', answer: '表 1 - user_conversations：Partition Key=user_id, Clustering Key=last_message_time DESC。查询：SELECT * WHERE user_id=xxx→该用户的所有对话按最后消息时间降序。表 2 - conversation_messages：Partition Key=conversation_id, Clustering Key=message_time ASC。查询：SELECT * WHERE conversation_id=xxx→对话内消息按时间升序。写入时双写两张表。' },
    ],
  },

  "6RLgnL8qLBzYkllHeaI-Z": {
    mentalModel: '图数据库是社交网络的关系地图——每个人是一个点（Node），认识关系是连线（Edge）。查"你和某人之间的最短关系链"在 MySQL 里是 SQL 噩梦（N 次 JOIN），在图数据库里只是一次遍历。',
    sections: [
      { title: '图数据库模型', content: '核心概念：Node（节点/实体）、Edge（关系/连接，有方向）、Property（属性，在 Node 或 Edge 上）。查询语言：Cypher（Neo4j）、Gremlin（Apache TinkerPop）、SPARQL（RDF 三元组）。关键能力：图遍历——BFS/DFS 沿 Edge 走，找到路径。这是关系数据库做不到或极慢的操作。Neo4j 宣称 1000 层深度遍历毫秒级——MySQL 1000 次 JOIN 不敢想象。' },
      { title: '经典应用', content: '①社交推荐："你的朋友也关注了..."=二度邻居查询。②欺诈检测："这个账户和其他欺诈账户有多少共同关系？"=子图匹配。③知识图谱：Google Knowledge Graph 理解实体间关系。④网络拓扑：设备和连接关系天然是图。⑤推荐引擎：协同过滤构建用户-物品关系图。LinkedIn 用图数据库做 People You May Know。' },
    ],
    diagnosis: [{ symptom: '图数据库中某类查询性能骤降', cause: '超级节点（supernode）——某个节点有过多的边（如明星用户有 100 万粉丝），遍历时瞬间展开成海量数据。', fix: '①限制遍历深度（如最多 3 层）②对超级节点建索引（按 Edge 类型+属性过滤减小结果集）③使用采样替代全量遍历④如果业务允许，将超级节点的边分批处理⑤图分区：将超级节点复制到多个分片减少单点压力。' }],
    exercises: [
      { level: '基础', task: '用 Cypher 语法写一个查询："找出和我（user_id=me）在同一公司的同事中，也关注了"系统设计"话题的人"', hint: 'MATCH (me)-[:WORKS_AT]->(c)<-[:WORKS_AT]-(colleague)-[:FOLLOWS]->(t:Topic)', answer: 'MATCH (me:User {id: "me"})-[:WORKS_AT]->(c:Company)<-[:WORKS_AT]-(colleague:User)\nMATCH (colleague)-[:FOLLOWS]->(t:Topic {name: "系统设计"})\nRETURN DISTINCT colleague.name AS name\nORDER BY name。两步：先找到同事，再筛选关注了指定话题的。' },
      { level: '进阶', task: '设计一个基于图数据库的欺诈检测系统：检测"循环担保"（A 担保 B，B 担保 C，C 担保 A）', hint: '环检测算法', answer: 'schema：Node=Person/Company, Edge=GUARANTEES（担保关系）。检测算法：①对每个新担保关系边 e=(A→B)，运行 BFS/DFS 从 B 出发，检查是否能回到 A ②如果找到环路径，标记该环上所有节点的风险分数+1③定期批量运行环检测算法做全量扫描④设置风险阈值——风险分数超过阈值的交易拒绝或标记人工审核⑤可视化风险图供风控分析师查看。' },
    ],
  },

  // ==================== Caching Strategies ====================
  "Bgqgl67FK56ioLNFivIsc": {
    mentalModel: 'Refresh Ahead 是预见性维护——缓存不是等过期了才去数据库拿，而是在快过期时提前自动刷新。就像冰箱里的牛奶——不是等喝完再买，而是看快没了就去买。用户永远能拿到新鲜数据而不需要等待回源。',
    sections: [
      { title: 'Refresh Ahead 机制', content: '缓存系统在 key 剩余 TTL 不足一定比例时（如 20%），异步触发后台线程去数据库查询最新值并更新缓存，同时重置 TTL。这样高频访问的 key 永远不会真正过期——它在过期前就被续命了。适用于访问频率高且 TTL 适中的数据（如热门商品价格）。缺点：缓存了实际没人访问的数据（浪费内存）。' },
      { title: '与 Write-through 的区别', content: 'Refresh Ahead 是读路径优化——读的时候发现快过期了，后台刷新。Write-through 是写路径优化——写数据库的时候同时写缓存。两者可以组合：写用 Write-through 保证缓存即时更新，读用 Refresh Ahead 保证冷 key 在被访问时预热。' },
    ],
    diagnosis: [{ symptom: 'Refresh Ahead 导致数据库压力没减反增', cause: '提前刷新阈值设太高（如剩余 50% TTL 就刷新），导致还在有效期的 key 被频繁更新，数据库请求量暴增。', fix: '①降低刷新阈值到 10-20% ②只对高频 key 用 Refresh Ahead（低频 key 到期自然淘汰）③设置最小刷新间隔（一个 key 至少 N 秒后才允许再次刷新）④使用概率刷新：只有一定概率（如 1%）触发提前刷新，减少集中刷新。' }],
    exercises: [
      { level: '基础', task: 'Refresh Ahead 和简单的"长 TTL"有什么区别？', hint: '考虑数据新鲜度', answer: '长 TTL：数据在 TTL 周期内不变，可能是过期数据。Refresh Ahead：数据持续被后台刷新，接近实时新鲜度。差异：新闻标题用长 TTL 1 小时没问题（过期也不是大错），股票价格必须用 Refresh Ahead（不能给用户 1 小时前的价格）。' },
      { level: '进阶', task: '设计一个"自适应 Refresh Ahead"：根据 key 的访问频率自动决定是否提前刷新', hint: '热度追踪 + 差异化策略', answer: '①维护访问统计（滑动窗口内访问次数）②高频 key（>100/min）：Refresh Ahead 激进策略（剩余 30% TTL 时刷新）③中频 key（10-100/min）：保守策略（剩余 10% TTL 刷新）④低频 key（<10/min）：不提前刷新（过期直接淘汰，下次访问时重建）⑤资源控制：同时最多 N 个刷新任务并发执行（防止刷新请求打爆 DB）。' },
    ],
  },

  "vNndJ-MWetcbaF2d-3-JP": {
    mentalModel: 'Write-behind（写后写）= 秘书代办——你先在便利贴上写"把这条记到账本上"，然后继续干活。秘书（后台线程）攒够一批便利贴后统一写入账本（数据库）。快是因为你只写了便签（缓存），慢的部分（写磁盘/网络）交给了后台。',
    sections: [
      { title: 'Write-behind 机制', content: '应用先写到缓存（Redis/内存），立即返回成功。后台异步 job 定期将缓存中的变更批量写入数据库。优点：写入延迟极低（只写了内存），数据库写入合并（多次改同一 key 只写最后一次），支持高吞吐写入。风险：如果缓存挂了/进程崩溃，未持久化的写入永久丢失。适用场景：高频计数（页面浏览量/点赞数）、日志、非关键数据。' },
      { title: '实际案例', content: 'YouTube 的视频观看计数：每秒数万次观看，不可能每看一次就 UPDATE 数据库一次（行锁竞争）。实际做法：Redis 中记录观看次数，每 5 分钟批量刷新到 MySQL。你看到的观看次数可能是几分钟前的——这就是为什么数字有时会"跳"。同样，Twitter 的 Like 计数也是 Write-behind。' },
    ],
    diagnosis: [{ symptom: 'Write-behind 缓存宕机后数据丢失', cause: '缓存中的数据还没落盘就没了——比如 Redis 挂了但还有 5 分钟的数据没同步到 DB。', fix: '①Redis 开启 AOF 持久化（appendonly yes, fsync everysec）——至少不会全丢 ②缩小刷新间隔（5 分钟→1 分钟）③双写：同时写 Redis + 本地日志文件，崩溃后重放日志④风险分级：关键数据（订单）不用 Write-behind，非关键数据（计数）容忍丢失。' }],
    exercises: [
      { level: '基础', task: 'Write-behind 和 Write-through 的核心区别是什么？各适合什么场景？', hint: '数据一致性 vs 写入延迟', answer: 'Write-behind：先写缓存，异步写 DB。写入快（ms 级），但可能丢数据。适合：高吞吐非关键数据（计数器、日志）。Write-through：同步写缓存和 DB。写入慢但数据安全。适合：关键数据（用户资料、订单状态）。' },
      { level: '进阶', task: '设计一个"分级 Write-behind"：关键数据同步写 DB，非关键异步写。区分策略基于什么？', hint: '数据分类 + 可接受损失', answer: '策略定义：①L0（不允许丢失）：订单/支付→同步写 DB，缓存是读取优化②L1（容忍秒级丢失）：用户行为/页面浏览→Write-behind 每 5 秒刷一次③L2（容忍分钟级丢失）：统计数据/日活/漏斗→Write-behind 每 5 分钟刷一次④配置：每个数据操作标记 level，缓存层根据 level 走不同写路径⑤监控：L1/L2 的积压量和延迟，告警阈值。' },
    ],
  },

  "RNITLR1FUQWkRbSBXTD_z": {
    mentalModel: 'Write-through 就像会计做账——每笔交易同时登记到账本子（缓存）和总账（数据库），两边永远一致。慢一点，但查阅子账时永远准确——不存在"本子上有总账上没有"的情况。',
    sections: [
      { title: 'Write-through 流程', content: '写操作：①先写缓存（如果缓存中有这个 key）②同时写数据库③两者都成功才返回。读操作：先读缓存，命中返回；未命中读 DB 并回填缓存。优势：缓存和 DB 永远一致（对于已经缓存的数据）。劣势：写入延迟大（两次写入+等待 DB 确认），如果数据从未被读（cold data），写入缓存是浪费。适合：读写比例均衡、需要缓存新鲜度的场景。' },
      { title: '与 Cache Aside 的对比', content: 'Cache Aside：写时删缓存（不更新），读时重建。写入快但首次读取需要回源（cache miss）。Write-through：写时同时更新缓存和 DB，写入慢但读取总是命中。选型：如果写操作后通常会立刻读（如用户更新个人资料后刷新页面）→Write-through。如果写后不一定会读（如后台批量更新）→Cache Aside。' },
    ],
    diagnosis: [{ symptom: 'Write-through 模式下写入延迟很高，用户体验差', cause: '每次写都要等 DB 确认——如果 DB 慢，写缓存也跟着等。', fix: '①缓存失败不影响主流程——写 DB 成功但写缓存失败时，降级到 Cache Aside 模式（后续读会重建缓存）②使用异步 Write-behind 替代同步 Write-through（牺牲一致性换性能）③DB 层优化：连接池调大、索引优化、考虑读写分离。' }],
    exercises: [
      { level: '基础', task: 'Write-through 模式中，如果写 DB 成功但写缓存失败怎么处理？', hint: '不能让用户看到写失败', answer: '①写 DB 成功后写缓存失败→记录日志告警（但不回滚 DB 写入）②返回用户成功（数据在 DB 中是安全的）③下个读请求会 cache miss → 从 DB 读取 → 回填缓存（自动修复）④监控缓存写入失败率，频繁失败说明缓存集群有问题需要排查。' },
      { level: '进阶', task: '设计一个支持"Write-through + 分布式事务"缓存方案：更新 MySQL 订单 + Redis 缓存，要保证原子性', hint: '2PC 简化版', answer: '①更新 MySQL 订单（开启事务）→②发送缓存更新指令到 MQ→③MySQL 提交事务→④如果提交成功，MQ 消费者执行 Redis 更新（最终一致性）⑤或者反过来：先更新 Redis（SET order:123），再 MySQL 事务提交。如果 MySQL 回滚，发 MQ 删除 Redis 中的 key 作为补偿。要点：不能使用真正的 2PC（Redis 不支持 XA），所以用"补偿事务"实现最终一致性。' },
    ],
  },

  "RHNRb6QWiGvCK3KQOPK3u": {
    mentalModel: '客户端缓存是随身口袋——把常用的小东西放口袋里（浏览器/App 内存），用的时候直接掏，不用每次都开背包（网络去服务端）。HTTP 的 Cache-Control 头是服务端对客户端说："这东西你可以放心放在口袋里 N 秒"。',
    sections: [
      { title: 'HTTP 缓存机制', content: '①Cache-Control: max-age=3600（缓存 1 小时）②ETag：资源版本 hash，客户端发 If-None-Match，服务端比对是否变化（304 Not Modified）③Last-Modified + If-Modified-Since：基于时间戳判断④Service Worker：完全拦截请求自己做缓存策略⑤本地存储：localStorage/sessionStorage/IndexedDB 存储结构化数据。Gmail 离线模式利用 Service Worker + IndexedDB 缓存邮件。' },
      { title: '缓存策略模式', content: '①Cache-First（缓存优先）：先从缓存取，miss 再网络。适合静态资源。②Network-First（网络优先）：先请求网络，失败/超时 fallback 缓存。适合新闻/数据。③Stale-While-Revalidate：返回缓存，后台更新缓存。适合需要即时展示的数据。④Network-Only：永远不缓存（交易/支付）。⑤Cache-Only：永远不网络请求（离线应用）。' },
    ],
    diagnosis: [{ symptom: '发布了新版本前端，用户看到的是旧 UI', cause: '浏览器/Service Worker 缓存了旧版本的 JS/CSS/HTML。', fix: '①文件名版本化（main.v3.js 而非 main.js）——Webpack/Vite 的 contenthash 自动生成②HTML 不缓存（Cache-Control: no-cache）③Service Worker 检测新版本自动更新④短期 TTL（1 小时）+ 强制刷新提示⑤定期清理旧版本的缓存文件。' }],
    exercises: [
      { level: '基础', task: 'ETag 和 Last-Modified 有什么区别？哪个更精确？', hint: '版本 vs 时间', answer: 'Last-Modified 是基于时间戳（秒精度），如果 1 秒内改 2 次，只记录最新时间，可能丢失中间版本。ETag 是内容 hash（MD5/SHA256），内容变了 hash 就变，精确到字节级别。ETag 更强但计算开销稍大。两者可同时使用。' },
      { level: '进阶', task: '设计一个支持离线模式的 Web 应用：有网时用最新数据，断网时用本地缓存无缝工作', hint: 'Service Worker + IndexedDB + sync', answer: '①Service Worker 拦截所有请求②在线时：请求走网络，响应自动缓存到 Cache Storage③离线时：返回缓存数据④结构化数据存 IndexedDB（支持查询/索引）⑤用户操作：离线时存入 outbox queue，在线时自动同步（Background Sync API）⑥冲突解决：服务端返回版本号，客户端判断本地编辑是否冲突⑦UI 显示同步状态（绿色=在线同步，黄色=离线本地保存，红色=冲突需解决）。' },
    ],
  },

  "Kisvxlrjb7XnKFCOdxRtb": {
    mentalModel: 'CDN 缓存是机场免税店的商品——世界各地的旅客（用户）走到哪都能在就近的免税店（边缘节点）买到同样的东西。CDN 缓存了静态资源（JS/CSS/图片/视频），服务端无需为每次请求重新"生产"这些不变的产出。',
    sections: [
      { title: 'CDN 缓存最佳实践', content: '①静态资源用长 TTL + 版本化文件名：style.v3.css 永远不会变，Cache-Control: max-age=31536000（1 年）。②HTML 入口不缓存：Cache-Control: no-cache（每次验证 ETag）。③API 响应看场景：产品列表可缓存 60 秒，用户数据不缓存。④s-maxage vs max-age：s-maxage 对共享缓存（CDN），max-age 对浏览器私人缓存。Cloudflare CDN 默认缓存静态文件扩展名（.css/.js/.jpg）。' },
      { title: '缓存 key 设计', content: 'CDN 缓存 key 默认 = 完整 URL。但有时需要更灵活的策略：①忽略查询参数：image.jpg?size=100 和 image.jpg?size=200 存同一份缓存，用 Vary 头区别②基于 Cookie 分版本：Vary: Cookie（不同登录状态的缓存区分）③基于 Accept-Encoding 分版本：gzip 和 br 的两份缓存。CloudFront 的 Cache Policy 可以自定义哪些请求头/查询参数参与缓存 key。' },
    ],
    diagnosis: [{ symptom: 'CDN 缓存了错误的内容——登录用户的页面对未登录用户可访问', cause: '公共 CDN 缓存了包含私人数据的响应，因为没有设置 Cache-Control: private。', fix: '①私人数据响应设置 Cache-Control: private（只浏览器缓存，CDN 不缓存）②使用 Authorization 头的请求 CDN 默认不缓存（CloudFront/Cloudflare 都如此）③检查 Vary 头是否正确④如果已缓存错误内容，紧急 purge CDN 缓存+缩短 TTL。' }],
    exercises: [
      { level: '基础', task: '一张产品图片 URL 是 /products/shirt.jpg?v=3，CDN 会认为 v=3 和 v=4 是不同的两个缓存对象吗？', hint: 'URL 完整匹配', answer: '是的。默认 CDN 缓存 key 是整个 URL，包含查询参数。v=3 和 v=4 是两个独立缓存。这就是版本化缓存的好处：新版本有新 URL，CDN 自动当做新对象缓存，不影响旧版本。但需要用 purge 或设定过期时间清理旧版本。' },
      { level: '进阶', task: '设计一个"动静分离"的 CDN 方案：半私有数据（朋友圈动态）的有效缓存策略', hint: 'Edge Side Includes (ESI) 或 AJAX 动态加载', answer: '方案：①HTML 框架 CDN 缓存（不包含好友动态）max-age=60 秒②好友动态部分用 AJAX 异步加载（请求带 Authorization Cookie，CDN 穿透到源站）③或者用 ESI（Edge Side Includes）：CDN 缓存页面骨架，边缘节点拼装动态碎片④动态碎片从源站取，公共骨架从 CDN 缓存取。效果：页面主框架缓存 1 小时，动态内容实时获取，用户体验接近全静态页面。' },
    ],
  },

  "o532nPnL-d2vXJn9k6vMl": {
    mentalModel: 'Web 服务端缓存=Nginx 在前台帮忙储存已写好的文档复印件——同样内容的请求来了，不用每次都后端翻箱倒柜查资料。Nginx fastcgi_cache 把 PHP/后端响应存到磁盘/内存，下一次同样请求直接从 Nginx 返回。',
    sections: [
      { title: 'Nginx 缓存配置', content: 'proxy_cache 系列指令：proxy_cache_path 定义缓存存储位置和大小（levels=1:2 二级目录，keys_zone=共享内存区域），proxy_cache_key 定义缓存的 key（默认是完整 URL），proxy_cache_valid 为不同状态码定义不同 TTL（200 缓存 1 小时，404 缓存 1 分钟）。Nginx Plus 还支持缓存清除（purge）、stale-while-revalidate（异步更新）。' },
      { title: '反向代理缓存的价值', content: '在 Nginx/Varnish 层缓存后端响应，可以挡掉 80%+ 的请求。WordPress 用 Nginx FastCGI Cache 后，服务器负载降 90%。因为 PHP 生成一个页面可能要 200ms（读 DB+渲染模板），Nginx 返回缓存页面只要 1ms。但要注意缓存哪些内容：登录用户页面不能缓存（私人数据），公开页面可以。' },
    ],
    diagnosis: [{ symptom: 'Nginx 缓存占满磁盘空间', cause: '缓存未设上限或淘汰策略不当，且缓存文件过多。', fix: '①max_size 限制缓存总大小（如 10GB）②设置合理的 inactive（长期不访问的文件会被删除）③使用 tmpfs（内存文件系统）替代磁盘缓存（速度快但占用内存）④清理策略：proxy_cache_path 中的 max_size + inactive + 自动 LRU 淘汰。' }],
    exercises: [
      { level: '基础', task: 'Nginx proxy_cache 和浏览器 Cache-Control 有什么区别？', hint: '服务端缓存 vs 客户端缓存', answer: 'proxy_cache：Nginx 层面缓存后端响应。浏览器不知道，每次都请求 Nginx，Nginx 决定是否返回缓存。Cache-Control：服务器告诉浏览器应该缓存多久。浏览器自己决定是否用缓存还是重新请求。两者独立且可以叠加（CDN 缓存级、Nginx 缓存级、浏览器缓存级）。' },
      { level: '进阶', task: '设计一个"分层 Web 缓存"：浏览器→CDN→Nginx→Redis→DB。每层负责什么？', hint: '从近到远，容量从小到大，速度从快到慢', answer: '浏览器缓存：用户个人设备（最快 0ms，但只缓存个人资源）。CDN：区域边缘节点（快 10-50ms，缓存公共静态资源）。Nginx proxy_cache：数据中心入口（快 1-5ms，缓存 API 响应和页面片段）。Redis：应用层缓存（快 0.5-2ms，缓存数据库查询和计算结果）。DB：最终数据源（慢 5-20ms，持久化和事务保证）。每层逐级减少后端压力。' },
    ],
  },

  "BeIg4jzbij2cwc_a_VpYG": {
    mentalModel: '数据库缓存（Buffer Pool）是 MySQL 的"脑子里的便签"——常查的数据放在脑子里（内存），不用每次去柜子里（磁盘）翻。InnoDB Buffer Pool 默认 128MB，调大到物理内存的 70-80% 能让 90% 查询直接从内存返回。',
    sections: [
      { title: 'InnoDB Buffer Pool', content: 'Buffer Pool 缓存数据页（16KB 页）和索引页。查询时先从 Buffer Pool 查，miss 则从磁盘读取并缓存。使用 LRU 变种算法淘汰冷页（new page 进 mid-point 而非 LRU head，避免全表扫描冲走热数据）。show engine innodb status 看 Buffer Pool hit rate（应该 > 99%）。MySQL 8.0 支持多个 Buffer Pool 实例减少并发竞争。' },
      { title: 'PostgreSQL 的缓存层', content: 'PG 依赖 OS 的 page cache（shared_buffers 是 PG 内部缓存，OS page cache 是外部缓存）。通常设置 shared_buffers 为物理内存的 25%，剩下的留给 OS page cache。PG 的缓存命中率查看：pg_stat_bgwriter 的 buffers_alloc。另外 PG 支持物化视图（materialized view）——把复杂查询结果物化存储，类似"预缓存"。' },
    ],
    diagnosis: [{ symptom: '加了大的查询后，原本快的查询变慢了', cause: '全表扫描的大查询把 Buffer Pool 中的热点数据冲刷掉，后续查询全从磁盘读。', fix: '①限制大查询（加 LIMIT 或分页）②为全表扫描的查询建索引（避免扫描）③MySQL 8.0 的 Buffer Pool 分多个实例减少全扫描影响④大查询在从库执行（避免影响主库 OLTP 性能）⑤PG 中用 pg_prewarm 重新加载热点数据到缓存。' }],
    exercises: [
      { level: '基础', task: 'MySQL 的 Buffer Pool hit rate 从 99.9% 降到 95% 意味着什么？', hint: '每 100 次查询', answer: '99.9% hit rate=1000 次查询中有 1 次读磁盘。95%=1000 次中有 50 次读磁盘——磁盘读增加了 50 倍。每个磁盘读约 5-10ms，而内存读 <0.1ms。查询性能可能下降 10 倍以上。通常意味着 Buffer Pool 不够大或数据量增长了。' },
      { level: '进阶', task: '设计一个"预热 Buffer Pool"方案：MySQL 重启后快速恢复到之前的热数据状态，避免服务抖动', hint: 'dump + reload 或 audit 分析', answer: '①MySQL 5.6+ 支持 Buffer Pool dump/load：SET GLOBAL innodb_buffer_pool_dump_now=ON（关机前）→ SET GLOBAL innodb_buffer_pool_load_now=ON（启动后）。自动配置：innodb_buffer_pool_dump_at_shutdown=ON, innodb_buffer_pool_load_at_startup=ON②定期 dump Buffer Pool 状态（每 30 分钟）③启动后立即执行预热查询脚本（执行 top 100 高频 SQL）④监控预热进度（SHOW STATUS LIKE "Innodb_buffer_pool_load_status"）。' },
    ],
  },

  "5Ux_JBDOkflCaIm4tVBgO": {
    mentalModel: '应用层缓存=开发者在业务逻辑中手动管理的内存便签。不是透明的（你知道 Key 是什么），而是显式的——"查用户时，先看 Redis 中有没有 user:123，没有再去 MySQL 查"。给了你最精细的控制权，但也给了你管理一致性的责任。',
    sections: [
      { title: '应用缓存策略', content: '①热点数据占位：每日推荐列表提前计算并缓存。②防缓存穿透：布隆过滤器判断 key 是否可能存在，不存在直接返回③大 Value 拆分：user:123:profile, user:123:followers, user:123:posts 分开缓存（按需加载）④多级过期：热数据长 TTL+Refresh Ahead，温数据短 TTL，冷数据不缓存⑤序列化选型：JSON（可读性）vs Protobuf（性能）vs MsgPack（平衡）。' },
      { title: '缓存与 DB 的一致性工程', content: 'Facebook TAO 缓存的做法：①读：Miss→DB→回填缓存 ②写：更新 DB→更新缓存（同步，TAO 中缓存是异步更新的）③缓存是按需填充的（lazy fill），不是预填充④使用"租约"（lease）机制：缓存告诉客户端"这个数据我能保证新鲜到 timestamp T"，减少验证请求。' },
    ],
    diagnosis: [{ symptom: '缓存代码散落各处，不同开发者用不同策略，缓存行为不一致', cause: '缺乏统一的缓存抽象层——每个模块自己写 get/set 逻辑。', fix: '①封装缓存装饰器/注解 (@Cacheable(key="user:#id", ttl=600))②统一缓存管理器（如 Spring Cache、Guava Cache）③所有缓存操作通过中心化 CacheManager 进行④监控：统一的缓存命中率 dashboards⑤Code review 时检查是否有直接访问 DB 绕过缓存的代码。' }],
    exercises: [
      { level: '基础', task: '创建缓存 key 的最佳实践是什么？避免 key 冲突和数据泄露', hint: '命名空间 + 版本 + 参数', answer: '格式：{service}:{entity}:{id}:{optional_version}。例如 user:123:profile、order:456:details。注意：①必须有命名空间前缀（user:）避免不同实体 id 冲突②包含版本号以防 schema 变更（user:v2:123）③参数用冒号分隔方便监控分组④不要用特殊字符（空格/中文）防止编码问题。' },
      { level: '进阶', task: '设计一个"缓存装饰器"框架：一行注解实现方法级缓存，支持 TTL、条件缓存、失效策略', hint: 'AOP + 方法签名作为 key', answer: '@Cacheable(key="user:#args[0]", ttl=3600, condition="#args[0]>0")：①方法调用前计算 key→查缓存→命中直接返回②Miss→执行方法→结果存缓存→返回③@CacheEvict(key="user:#args[0].id")：方法执行后删除缓存④失效策略：allEntries=true 删除 user:* 所有缓存⑤统计：每个注解 report metrics（hit/miss count, latency）⑥支持本地缓存+分布式缓存双级（L1=Caffeine local, L2=Redis）。' },
    ],
  },

  // ==================== Communication Protocols ====================
  "I_nR6EwjNXSG7_hw-_VhX": {
    mentalModel: 'HTTP 是互联网的通用语——浏览器敲 URL、App 调 API、前端 fetch 数据，底层都是 HTTP。无状态设计是双刃剑：简单（请求-响应一次搞定），但也笨（每次都重新自我介绍），所以有了 Cookie/JWT 等手段。',
    sections: [
      { title: 'HTTP 方法语义', content: 'GET：安全+幂等（查数据）。POST：非幂等（创建资源，每次调用可能返回不同结果）。PUT：幂等（完整替换）。PATCH：部分更新。DELETE：幂等（删除）。HEAD：只返回头。OPTIONS：CORS 预检。关键：用对方法——GET 不应该有副作用（不能修改数据），搜索引擎爬虫会无脑 GET 所有页面，如果 GET 触发了删除就灾难了。' },
      { title: 'HTTP 状态码设计', content: '2xx 成功：200 OK，201 Created（POST 成功返回新资源 URI），204 No Content（删除成功无 body）。3xx 重定向：301 永久移走（SEO 权重转移），302 临时移走，304 Not Modified（缓存新鲜）。4xx 客户端错：400 参数不对，401 没登录，403 没权限，404 不存在，429 限流了。5xx 服务端错：500 内部出 bug，502 Bad Gateway（上游挂了），503 维护中/过载，504 上游超时。Netflix API 严格使用这些状态码。' },
    ],
    diagnosis: [{ symptom: 'REST API 返回 200 OK 但 body 是错误信息', cause: '滥用 200 状态码——把错误也包在 200 返回，日志和监控无法区分成功和失败。', fix: '①严格使用 HTTP 状态码：错误用 4xx/5xx ②监控 5xx 错误率作为告警指标③错误响应 body 包含 error_code（机器可读）、message（人类可读）、request_id（追踪用）。' }],
    exercises: [
      { level: '基础', task: 'POST 和 PUT 的核心区别是什么？什么时候用 POST，什么时候用 PUT？', hint: '幂等性', answer: 'PUT 是幂等的：发送多次相同请求结果一样（PUT /users/123 name=Bob 执行 10 次还是 Bob）。POST 非幂等：POST /users 创建用户，执行 10 次=创建 10 个用户。用 PUT 当你已知资源 URI（客户端决定 URI），用 POST 当服务端生成 URI。' },
      { level: '进阶', task: '设计一个 RESTful API 的版本化策略：支持 v1/v2 共存，旧客户端不受影响', hint: 'URL 版本、Header 版本、请求参数版本', answer: '3 种方案：①URL 版本：/api/v1/users 和 /api/v2/users。最直观，但维护整套路由。②Accept Header：Accept: application/vnd.company.v2+json。URL 干净但不直观。③请求参数：/api/users?version=2。简单但污染参数。推荐：对外 API 用 URL 版本（清晰+可缓存），内部微服务用 Header 版本（灵活）。' },
    ],
  },

  "2nF5uC6fYKbf0RFgGNHiP": {
    mentalModel: 'TCP 像挂号信——保证送到、顺序不乱、送到后签字确认（ACK）。但代价是：三次握手建立连接、丢包重传延迟。适合传输不能出错的（网页、文件、API）。UDP 像明信片——直接扔出去，丢了不补。但对视频、直播来说，丢掉几帧比卡住等待要好。',
    sections: [
      { title: 'TCP 核心机制', content: '①三次握手：SYN→SYN-ACK→ACK，建立连接（1 RTT）。②可靠传输：ACK 确认 + 重传超时（RTO）。③流量控制：接收方窗口（rwnd），防止快发送端压垮慢接收端。④拥塞控制：慢启动→拥塞避免→快重传→快恢复。TCP Reno/CUBIC/BBR 是不同拥塞算法。⑤队头阻塞（HOL）：TCP 要求数据严格按序交付，一个包丢了后面的包都得等——这正是 HTTP/3 换 QUIC/UDP 的原因。' },
      { title: 'TCP 在系统设计中的影响', content: 'TCP 连接是成本：每个 DB 连接、HTTP Keep-Alive 连接、gRPC stream 都消耗 fd 和内存。Nginx 默认每个 worker 1024 连接，过大时会 OOM。TCP 的长肥管道（LFN）：大带宽×高延迟 = 需要大窗口，否则带宽利用不足。跨大西洋（100ms RTT）TCP 默认窗口下带宽上限 ~50Mbps，需要调大窗口才能用满 10Gbps。' },
    ],
    diagnosis: [{ symptom: '服务间调用延迟极低（<1ms），但偶尔出现 200ms 的尖峰', cause: 'TCP 重传——丢包触发了 RTO 超时重传（默认最小 200ms）。', fix: '①检查网卡/交换机丢包统计②降低 RTO 初始值（Linux tcp_rto_min 可调到 50ms）③应用层加超时重试（发 2 个并行请求，取最快的）④改用 UDP（QUIC）避免 TCP HOL blocking⑤同 DC 内用 RDMA 或 Unix Socket 替代 TCP。' }],
    exercises: [
      { level: '基础', task: 'TCP 的"可靠传输"是怎么保证的？简述 ACK + 重传机制', hint: '确认应答 + 超时重传', answer: '①每发一个数据包，启动重传定时器②接收方收到后返回 ACK（确认号=期望的下一个字节序号）③如果定时器超时未收到 ACK→重传该包④如果收到 3 个重复 ACK→快重传（不等超时）⑤接收方按序号重排数据，确保顺序交付。' },
      { level: '进阶', task: '在微服务架构中，如何减少 TCP 连接数？设计连接池策略', hint: '连接复用+池化+HTTP/2 多路复用', answer: '①gRPC 天然支持连接复用（基于 HTTP/2 多路复用，一个 TCP 连接承载多个并发 RPC）②REST 客户端用 HTTP Keep-Alive+连接池（如 Go 的 http.Transport 自动池化）③连接池配置：max_idle_conns=100, max_conns_per_host=20, idle_timeout=90s④数据库连接池：PgBouncer 做事务级连接复用⑤避免服务膨胀导致连接数爆炸（N 个服务×M 个实例，全互联=NM 连接）。' },
    ],
  },

  "LC5aTmUKNiw9RuSUt3fSE": {
    mentalModel: 'UDP 是轰炸机——只管不停扔炸弹（数据包），不关心目标有没有接住。没有连接建立、没有重传、没有顺序保证、没有流控。代价是简单+快，适合丢几个包无所谓的场景（视频直播、实时游戏、DNS 查询）。',
    sections: [
      { title: 'UDP 的使用场景', content: '①DNS：查询小（512 字节以内），超时重试即可。不需要 TCP 的开销（3 次握手来回 2 个 RTT）。②视频直播/VoIP：几帧数据丢失只是短暂花屏，而等待 TCP 重传会造成卡顿。③游戏（FPS/MOBA）：实时状态更新（位置、血量），过期数据无意义。④IoT 传感器上报：低功耗设备，UDP 省计算和电量。⑤QUIC（HTTP/3）：在 UDP 上实现了 TCP 的可靠性和 TLS 加密——取 UDP 之轻、TCP 之可靠。' },
      { title: 'UDP 的局限', content: '①不保证送达——需要应用层自己做 ACK 和重传。②不保证顺序——需要应用层排序。③不防拥堵——发送速率需要应用层控制。④包大小限制——通常最大 1500 字节（MTU），超出需要分片。⑤没有流量控制——接收方可能被淹没。这就是为什么 QUIC 在 UDP 之上重新实现了这些——UDP 给你了控制权，但也把责任推给了你。' },
    ],
    diagnosis: [{ symptom: 'UDP 数据包大量丢失，接收方信息残缺', cause: '网络拥塞或发包速率过快——UDP 没有拥塞控制，持续高速发会挤爆路径上的路由器缓冲区。', fix: '①应用层实现简单的拥塞控制（类似 TCP but 更轻量）②限制发包速率（不超过路径瓶颈带宽）③使用 MTU 以内包大小避免分片④关键数据加序号 + ACK + 重传（如 QUIC 做法）⑤监控丢包率，超阈值降速。' }],
    exercises: [
      { level: '基础', task: '为什么 DNS 查询用 UDP 而不是 TCP？', hint: 'DNS 查询特点：小、快、无状态', answer: '①DNS 查询响应小（<512 字节），UDP 一包搞定②UDP 无连接开销（1 RTT vs TCP 的 1.5 RTT）③DNS 是请求-响应一次交互，不需要 TCP 的连接持续能力④超时重试即可解决丢包问题（发起重试的代价和建立 TCP 连接差不多）⑤但 DNS 响应 >512 字节时回退 TCP（DNS over TCP 或者 EDNS0）。' },
      { level: '进阶', task: '设计一个基于 UDP 的可靠传输协议（简化版 QUIC）：在 UDP 上实现可靠性+有序交付+拥塞控制', hint: '序号 + ACK + 窗口', answer: '①每个包带递增序号（seqno），接收方按序交付②ACK 机制：收到包后发送 ACK（包含已连续收到的最大序号）③发送方维护重传定时器，超时未 ACK=重传④顺序保证：接收方维护乱序缓冲区，等缺失包到达或超时放弃⑤拥塞控制：慢启动（CWND 从 1 开始翻倍增长），丢包时拥塞窗口减半⑥滑动窗口：接收方通告可接收窗口（rwnd），发送方不超发。这就是 QUIC 做的事。' },
    ],
  },

  "ixqucoAkgnphWYAFnsMe-": {
    mentalModel: 'RPC（远程过程调用）是"假装远程是本地"的黑魔法——你写 getUser(123)，感觉像调用本地函数，但底层它序列化参数→网络发送→远程执行→返回结果→反序列化。gRPC 是 Google 开源的现代 RPC 框架：用 Protobuf 定义接口，强类型检查让调用远程和调用本地几乎一样。',
    sections: [
      { title: 'RPC vs REST', content: 'RPC 关注"动作"（getUser/updateOrder），REST 关注"资源"（GET /users/123, PUT /orders/456）。RPC 优势：强类型接口（Protobuf IDL 自动生成客户端/服务端桩代码），二进制编码高效，支持双向流。REST 优势：HTTP 工具链成熟（curl/浏览器/CDN 缓存），人和机器可读。选型：内部服务间用 gRPC（高性能+类型安全），对外开放 API 用 REST（通用+可缓存）。' },
      { title: 'gRPC 高级特性', content: '①一元 RPC：请求-响应（类似 HTTP）②服务端流：客户端发一个请求，服务端持续返回多个响应（如推送实时股价）③客户端流：客户端持续发送，服务端最后汇总响应（如上传大文件分块）④双向流：双方同时发（如聊天/协同编辑）。⑤Deadline/Timeout：每个 RPC 都可设超时（context.WithTimeout）避免无限等待。⑥拦截器：鉴权、日志、重试、熔断，类似 HTTP 中间件。' },
    ],
    diagnosis: [{ symptom: 'gRPC 服务超时错误大量发生', cause: '未设置 deadline 或 deadline 太短，或者上游服务处理慢没有及时返回。', fix: '①每个 RPC 调用必须设 deadline（context.WithTimeout）②Client 端 add retry policy（TransientFailure 自动重试）③服务端检查慢请求并优化④使用 Hedge Request（多发一个备份请求，取最快的结果）⑤熔断：连续失败超过阈值时停止发送请求保护下游。' }],
    exercises: [
      { level: '基础', task: 'gRPC 比 REST+JSON 快的主要原因是什么？', hint: '编码 + 传输', answer: '①二进制编码（Protobuf）比文本 JSON 序列化/反序列化快 3-10 倍②HTTP/2 多路复用（一个 TCP 连接承载多个并发 RPC，无队头阻塞）③强类型 IDL——无需运行时反射/解析 JSON schema④连接复用——不像 HTTP/1.1 连接池限制，gRPC 长连接复用效率更高。' },
      { level: '进阶', task: '设计一个"gRPC 网关"：外部 REST 客户端也能调 gRPC 服务。自动将 REST JSON 转为 gRPC Protobuf', hint: 'grpc-gateway + protobuf annotation', answer: '①在 proto 文件中添加 HTTP 注解：option (google.api.http) = { get: "/v1/users/{id}" }②grpc-gateway 读取 proto 注解自动生成反向代理③请求流程：Client→REST GET /v1/users/123→gateway 解析→转换成 gRPC GetUser(id=123)→调用 gRPC 服务→返回 Protobuf→gateway 序列化为 JSON→返回 Client④支持：URL 参数映射、body 映射、错误码转换。gRPC-Gateway/grpc-web 都是成熟方案。' },
    ],
  },

  "Hw2v1rCYn24qxBhhmdc28": {
    mentalModel: 'gRPC 是跨语言通信的"统一纸笔"——你写一份 proto 文件描述接口，它就给你生成 Java/Go/Python/Node.js/C++ 的代码。服务 A 用 Go 写，服务 B 用 Java 写，但通信无感——因为它们共享同一份 proto 定义。',
    sections: [
      { title: 'Protobuf 核心设计', content: 'proto 文件定义 message（数据结构）和 service（RPC 方法）。每个字段有编号（field number）——编号永远不变（改变的是字段名）。有 backward/forward 兼容设计：新增字段给默认值，废弃字段标记 reserved（编号不回收）。编码格式：varint（变长整型）+ length-delimited（字符串/嵌套消息）。比 JSON 省 30-60% 带宽。' },
      { title: 'gRPC 的负载均衡', content: 'gRPC 使用 HTTP/2 长连接，传统的 L4 LB（按连接分发）不适合——因为所有 RPC 复用同一个 TCP 连接。需要：①客户端负载均衡（lookaside LB：客户端查询注册中心，自己选后端）②Proxy 模式 LB（如 Linkerd/Envoy 做 sidecar，截获 gRPC 流量做 L7 LB）③无代理 LB（gRPC 内置 naming resolver 和 load balancing policy：round_robin/pick_first）。' },
    ],
    diagnosis: [{ symptom: 'gRPC 连接似乎"卡住"了——超时但不报错', cause: 'HTTP/2 连接静默故障（TCP 连接还在但服务端进程已不可达）——中间 NAT/防火墙没发 RST。', fix: '①gRPC keepalive：配置 GRPC_ARG_KEEPALIVE_TIME_MS（定期发 PING）②GRPC_ARG_KEEPALIVE_TIMEOUT_MS（超时未响应关闭连接）③GRPC_ARG_HTTP2_MIN_RECV_PING_INTERVAL_WITHOUT_DATA_MS：服务端限制 PING 频率④客户端连接空闲超时（IdleTimeout）自动关闭重建。' }],
    exercises: [
      { level: '基础', task: 'Protobuf 的 varint 编码是如何节省空间的？举例说明', hint: '小数字用少量字节', answer: 'varint 每个字节最高位表示"后面还有没有"，低 7 位存数据。数字 1→1 字节（0x01），数字 150→2 字节（0x96 0x01），数字 300→2 字节。而 JSON/int 数字 300 是 3 字节(ASCII "300")+开销。对于小整数（ID/枚举/状态码），varint 可节省 50-80% 空间。' },
      { level: '进阶', task: '设计一个"gRPC 服务网格"：所有 gRPC 流量走 sidecar proxy，统一管理负载均衡、熔断、可观测性', hint: 'Istio/Envoy + gRPC', answer: '架构：①每个 Pod 部署一个 Envoy sidecar 容器②应用发出的 gRPC 请求被 iptables 劫持到 Envoy③Envoy 查询控制面（xDS）获取后端端点列表和负载策略④Envoy 处理：L7 负载均衡（least request）、熔断、重试、TLS 加密⑤Metrics/Tracing 自动注入（无代码侵入）⑥优势：应用代码无需集成 gRPC-LB 逻辑，所有流量策略在 Envoy 层配置。Istio 就是这套方案的实现。' },
    ],
  },

  "6-bgmfDTAQ9zABhpmVoHV": {
    mentalModel: 'REST 是"资源管理器"——把世界抽象为资源（Resources），通过标准 HTTP 方法操作它们。GET /users/123（获取）→PUT /users/123（更新）→DELETE /users/123（删除）。URL 就是资源的地址，HTTP 方法就是操作。',
    sections: [
      { title: 'REST 成熟度模型', content: 'Level 0：一个 POST 接口包揽所有（RPC over HTTP）。Level 1：按资源分 URL（/users, /orders）。Level 2：正确使用 HTTP 方法（GET/POST/PUT/DELETE）+ 状态码。Level 3：HATEOAS（响应中包含链接，客户端发现下一步可做什么——如支付后返回取消/退款链接）。大部分 API 做到 Level 2 就够了，HATEOAS 学习成本高、实际收益小。' },
      { title: 'REST API 设计实践', content: '①复数命名：/users 而非 /user②嵌套资源：/users/123/orders（合理嵌套一层，避免 /users/123/orders/456/items/789）③分页：/users?offset=0&limit=20，返回 total_count④过滤：/users?status=active&role=admin⑤排序：/users?sort=-created_at（-号降序）⑥字段裁剪：/users?fields=id,name,email⑦版本化：/v1/users 或 Accept: application/vnd.api.v1+json。' },
    ],
    diagnosis: [{ symptom: 'REST API 返回的 JSON 结构和文档不一致，客户端解析崩溃', cause: '缺少 API 版本管理和 schema 校验——后端改了字段，前端不知情。', fix: '①API 版本化（/v1 和 /v2 共存）②使用 JSON Schema 或 OpenAPI 定义合约③自动化测试：验证响应是否符合 schema④向后兼容原则：只新增字段（默认值），不改类型，不删除字段（标记 deprecated）⑤使用 contract testing（Pact）确保前后端一致。' }],
    exercises: [
      { level: '基础', task: '设计一个博客系统的 REST API：列出文章、创建文章、查看评论、添加评论', hint: '资源嵌套 + HTTP 方法', answer: '①GET /posts（列表，支持分页和过滤）②POST /posts（创建，返回 201 Created + Location header）③GET /posts/:id（详情）④PUT /posts/:id（更新）⑤DELETE /posts/:id（删除）⑥GET /posts/:id/comments（文章评论）⑦POST /posts/:id/comments（添加评论）⑧GET /comments/:id（单条评论）。' },
      { level: '进阶', task: '设计一个"支持关联资源 Graph 预览"的 REST API 增强：一次请求获取文章 + 作者 + 前 3 条评论而不需要 N+1 请求', hint: 'Compound Documents / JSON:API spec', answer: '使用 JSON:API 的 compound documents：GET /posts/123?include=author,comments:limit(3)。返回：{ data: { id, title, body }, included: [{ type: "user", id: "456", name: "Bob" }, { type: "comment", id: "789", body: "Great" }] }。更好的方案：如果需要复杂关联，考虑 GraphQL 作为补充而非改造 REST。' },
    ],
  },

  "jwv2g2Yeq-6Xv5zSd746R": {
    mentalModel: 'GraphQL 是"餐厅自主点餐"——你想吃什么点什么，服务员一次性端上来。不像 REST 的固定套餐（固定返回字段），前端说"我要用户的名字、头像、最近 3 篇文章的标题"，GraphQL 精准返回这些，不多不少。',
    sections: [
      { title: 'GraphQL 核心概念', content: '①Schema：定义类型系统（type User { id: ID! name: String posts: [Post] }），是前端和后端之间的合约。②Query：读操作（类似 GET），可以嵌套——一个请求同时取 user+posts+comments。③Mutation：写操作，可以一次修改多个资源。④Subscription：实时推送（基于 WebSocket）。⑤Resolver：每个字段都有 resolver 函数，告诉 GraphQL 怎么获取数据。⑥N+1 问题：嵌套查询时每个子字段都可能触发一次数据库查询——用 DataLoader 批处理和缓存解决。' },
      { title: 'Facebook 的 GraphQL 实践', content: 'Facebook 2012 年创建 GraphQL 解决移动端痛点：每次新功能都要改后端 API（增加返回字段），前后端耦合。GraphQL 让前端指定字段需求，后端不变。代价是：查询复杂度可能失控（攻击者可以构造深度嵌套查询打爆服务器）——需要深度限制、复杂度计分、查询白名单。GitHub v4 API 从 REST 迁到 GraphQL 后，请求量减少 60%。' },
    ],
    diagnosis: [{ symptom: '某个 GraphQL 查询导致数据库 CPU 100%', cause: '深度嵌套查询（用户→文章→评论→点赞人→该人的文章→...），每层都触发数据库查询，数据爆炸。', fix: '①限制查询深度（max_depth=5）②查询复杂度计分（每个字段有权重，超限拒绝）③persisted queries（白名单模式：只允许预先注册的查询，防随意构造）④DataLoader 批量加载（同批次的子查询合并为一次 DB IN 查询）⑤timeout + rate limiting。' }],
    exercises: [
      { level: '基础', task: 'GraphQL 和 REST 的核心区别是什么？什么时候用 GraphQL？', hint: '前端需求灵活性 vs 简单和缓存', answer: 'GraphQL：前端决定返回什么（单端点，query/mutation 语言），避免 over-fetching/under-fetching。适合：复杂前端（移动+Web 不同数据需求）、快速迭代的产品。REST：服务端定义返回结构（多端点），缓存简单（URL=缓存 key），工具成熟。适合：固定数据结构、需要 CDN 缓存、公开 API。' },
      { level: '进阶', task: '设计一个"GraphQL + 缓存"方案：如何在 CDN/Nginx 层缓存 GraphQL 查询结果？', hint: 'persisted queries + GET 请求', answer: '①使用 persisted queries（客户端只发 query_id+variables，而非完整查询文本）②Persisted Query 转为 GET 请求：GET /graphql?queryId=abc&variables={"id":123}③这个 GET URL 可以被 CDN 缓存（基于 queryId+variables 作为 key）④对 queryId 的结果设置 TTL（根据数据实时性需求）⑤数据变更时 purge 相关 queryId 的缓存⑥Apollo Client 支持 Automatic Persisted Queries (APQ) 开箱即用。' },
    ],
  },

  "ocdcbhHrwjJX0KWgmsOL6": {
    mentalModel: 'LB（负载均衡器）vs Reverse Proxy（反向代理）是一对长得像但分工不同的孪生兄弟——LB 专注于"分发"（把流量分给多个后端），Reverse Proxy 专注于"代理"（代表客户端去后端取东西，顺便加工一下）。实际产品中两者高度重叠：Nginx 既可做 LB 也可做 Reverse Proxy。',
    sections: [
      { title: '功能重叠与差异', content: '重叠功能：两者都接收客户端请求、转发给后端、返回响应。可用在同一产品（Nginx/HAProxy）（Envoy）。差异视角：LB 更关注"多后端分发+高可用"；Reverse Proxy 更关注"安全/缓存/改写/SSL 卸载"。Reverse Proxy 甚至可以只代理单个后端（做安全保护层）。典型区分：微服务入口用 LB 分发流量，微服务前的 Reverse Proxy 做限流/鉴权/日志。' },
      { title: '实际架构定位', content: '典型的 N 层代理链：Internet→CDN→L4 LB→L7 Reverse Proxy（Nginx）→应用服务。每层职责：CDN=加速+防 DDoS；L4 LB=高吞吐 TCP 转发；L7 Reverse Proxy=SSL 终止+路由+鉴权+限流+日志；应用层=业务逻辑。在现代服务网格（Istio）中，每个 Pod 的 Envoy sidecar 就是一个微型 Reverse Proxy（处理其 Pod 的进出流量）。' },
    ],
    diagnosis: [{ symptom: 'Nginx 既做 LB 又做 Reverse Proxy 时配置混乱', cause: '角色不清晰——把所有功能堆在一个 Nginx 上：负载均衡 + SSL + 缓存 + 限流 + WebSocket 代理。', fix: '①分层：L4 LB（简单转发）+ L7 Reverse Proxy（智能路由+安全）②功能分离：SSL 在 L7 层做 termination，限流在应用层做（更灵活）③使用专门的 API Gateway（Kong/APISIX）替代功能堆砌的 Nginx④配置文件分模块（nginx.conf 主文件 + conf.d/ 按功能拆分配置）。' }],
    exercises: [
      { level: '基础', task: 'LB 和 Reverse Proxy 在架构中分别放在什么位置？画出简单的请求流', hint: '入口→LB→代理→应用', answer: 'Client→DNS→CDN→(防火墙)→L4 LB→L7 Reverse Proxy→App Server。L4 LB 在最前端做快速 TCP 分发（高吞吐）。L7 Reverse Proxy 做 SSL termination、URL 路由、限流、鉴权。App Server 专注业务逻辑。两层各有分工，互相补充。' },
      { level: '进阶', task: '设计一个"高可用 LB + Reverse Proxy"方案：LB 和 RP 各部署 2 台，任意一台挂了不影响服务', hint: 'VIP + keepalived 或云 LB', answer: '①LB 层：2 台 L4 LB + keepalived VIP（对外暴露 VIP）。Active-Backup 模式，主挂备接管（<1s 切换）。②Reverse Proxy 层：2 台 Nginx + 注册中心（Consul）动态发现后端。LB 将流量分给 2 台 RP（active-active）③后端：每台 RP 通过 Consul/DNS 拿到后端列表，独立做负载均衡④健康检查：LB 检查 RP 端口，RP 检查应用端口⑤避免单点：VIP 在 LB 之间漂移，RP 至少 2 台。云方案：AWS NLB（L4 托管，天然高可用）+ ALB（L7 托管）。' },
    ],
  },

  "XXuzTrP5UNVwSpAk-tAGr": {
    mentalModel: '应用层（Application Layer）＝城市功能规划——不同区块负责不同的城市功能（商业区=订单处理、住宅区=用户管理、工业区=后台任务）。分层不是让城市更复杂，而是避免商业区里突然冒出工厂的怪象。',
    sections: [
      { title: '典型应用层架构', content: '①单体架构：所有功能在一个进程——简单部署、调试方便；代价是巨型部署耦合。②分层架构（N-tier）：表示层→业务逻辑层→数据访问层。每层只调用下一层，依赖清晰。Linux 基金会的典型后端架构。③六边形架构（端口&适配器）：领域逻辑在中心，通过端口与外部交互——让框架成为适配器可插拔。④整洁架构：用例驱动，外层依赖内层。核心原则：业务逻辑不依赖框架/DB/Web。' },
      { title: '职责分离原则', content: 'Controller/Handler：接收 HTTP 请求、参数校验、调用 Service、返回响应。不包含业务逻辑。Service/UseCase：纯业务逻辑（下单=校验库存+计算价格+生成订单+扣库存），无 HTTP/DB 依赖。Repository/DAO：数据存取抽象。这种分离让你可以独立测试每层——Mock Repository 测 Service 是否正确计算了价格，无需启动 DB。' },
    ],
    diagnosis: [{ symptom: 'Controller/Handler 中包含了大量业务逻辑——检查库存、计算运费全在路由处理函数里', cause: '缺少 Service 层抽象，导致业务逻辑和 HTTP 细节耦合。', fix: '①抽取 Service 层——Controller 只做：解析请求→调用 Service→返回响应②Service 纯函数面向接口设计（输入 DTO，输出 Result，无 HTTP 依赖）③使用依赖注入（构造函数注入 Service 接口，Controller 不知道实现）④Controller 瘦到 5-10 行，所有逻辑在 Service 中。' }],
    exercises: [
      { level: '基础', task: '分层架构（Controller→Service→DAO）中，如果要在下单时发送通知，应该在哪层？为什么？', hint: '业务逻辑 vs 基础设施', answer: '发通知是业务逻辑的一部分（下单完成→通知用户）。放在 Service 层调用通知接口（NotificationService.send())，但通知的具体实现（邮件/短信/Push）应在基础设施层。Service 依赖接口而非具体实现：notificationService.notify(user, order)。这样做到了业务逻辑独立于通知渠道。' },
      { level: '进阶', task: '设计一个"支持多前端"的后端应用架构：Web 前端、Mobile App、第三方 API 都使用同一套业务逻辑', hint: '六边形架构 / 端口适配器', answer: '①核心：Domain Service（纯业务逻辑，无框架依赖）②端口接口：OrderRepository（数据存取）、NotificationPort（通知）、PaymentPort（支付）③适配器（Adapters）：REST Controller（HTTP→DTO→Service）、gRPC Handler、Console Command 都是适配器④基础设施：MySQLOrderRepository、EmailNotificationAdapter、StripePaymentAdapter 实现端口接口⑤扩展新前端：只需增加新适配器（如 tRPC Handler），核心逻辑零修改。' },
    ],
  },

  // ==================== Database Advanced ====================
  "DGmVRI7oWdSOeIUn_g0rI": {
    mentalModel: '联邦数据库是"全球图书馆联盟"——每个成员国图书馆（数据库）有自己的目录系统（schema），你用一个统一查询入口搜所有图书馆。联盟不实际拥有图书，只是代理查询。MySQL 的 FEDERATED 引擎可以查远程 MySQL 表，就像它在本地一样。',
    sections: [
      { title: '联邦 vs 分片', content: '联邦（Federation）：多个独立自治的数据库，统一查询接口。每个数据库有完整 schema。适合：并购公司后整合系统（每个公司自己的 DB 不变）、跨部门数据共享。分片（Sharding）：数据按 key 分布到多个节点，每节点只存部分数据。节点间不可独立使用。联邦的节点是"自治"的——关掉联邦层，各个库还能独立工作。分片的节点是"残疾"的——丢了就丢了那部分数据。' },
      { title: '联邦查询引擎', content: 'Presto/Trino（Meta 开源）：连接 MySQL/PostgreSQL/MongoDB/Kafka 等异构数据源，用标准 SQL 做联邦查询。Apache Drill：无 schema 的联邦查询（适合 JSON/Parquet 等）。AWS Athena：S3 数据用 SQL 查询（基于 Presto）。这些引擎不做数据存储，只是查询中间层——它们自己不做数据持久化。' },
    ],
    diagnosis: [{ symptom: '联邦查询的性能非常差，跨库 JOIN 耗时几十秒', cause: '联邦引擎需要从远端数据库拉数据到本地 JOIN——数据量大的时候网络传输成为瓶颈。', fix: '①避免跨库 JOIN（改为两次独立查询+应用层合并）②下推查询条件（Predicate Pushdown——把 WHERE 条件推到远端数据库，减少拉回的数据量）③对远端数据源建物化视图/缓存④使用列式存储（Parquet/ORC）加速读取⑤如果经常跨库查询，考虑合并数据库或定期 ETL 汇总。' }],
    exercises: [
      { level: '基础', task: '联邦数据库和分库分表有什么区别？', hint: '自治 vs 分布', answer: '联邦：各数据库独立自治（完整 schema，可独立运行），联邦层只做查询路由。分库分表：数据按 key 拆分到不同库（每个库只存一部分数据），单个库不能独立回答"全量"问题。联邦=各是完整的图书馆，分库=整本书拆成章节放不同图书馆。' },
      { level: '进阶', task: '设计一个"多数据中心联邦查询"方案：美国、欧洲、亚洲各有独立数据库，总部需要查到全球汇总数据', hint: 'Presto + 数据联邦 + 汇总表', answer: '①每 DC 独立运行自己的业务数据库（DC 自治）②部署 Presto 集群作为联邦查询引擎，连接各 DC 数据库③为常用汇总查询预计算物化视图（每 DC 每小时导出汇总数据到 S3）④Presto 查询 S3 汇总数据（而不是在线库），减少对在线业务的影响⑤写操作只往本地 DC，汇总查询通过 Presto 跨 DC 查询 S3⑥数据湖架构：原始数据→S3 Parquet→Presto 查询＝TB 级数据秒级返回。' },
    ],
  },

  "Zp9D4--DgtlAjE2nIfaO_": {
    mentalModel: '反规范化是"把常用资料复印一份放桌面上"——原本数据规范化分散在多张表（用户表+地址表+偏好表），每次查询要 JOIN。反规范化是把这些拼在一起的最终结果提前存好，查的时候一次拿到。牺牲空间和写复杂度，换取读的极速。',
    sections: [
      { title: '何时反规范化', content: '读多写少 + JOIN 成为瓶颈 → 反规范化。例如用户主页显示：用户名+头像+最近 3 篇文章标题+粉丝数。规范化：4 次查询（user、avatar、posts、followers）。反规范化：1 次查询 user_profile 表（冗余了 article_titles 和 follower_count）。写入成本增加：每次发文章要更新 user_profile 表。但如果读写比是 100:1，值得。' },
      { title: '反规范化的代价', content: '①数据冗余：存储空间增加（现代存储便宜，不致命）。②更新异常：一处数据变更需更新多个冗余副本（容易不一致）。③写入放大：发一篇文章可能触发更新用户资料表、话题热度表、首页缓存——一次写变多次写。④应用复杂度：需要知道哪些地方有冗余数据，保持一致。Netflix 的微服务架构大量使用反规范化——每个服务维护自己的"视图"，通过事件驱动保持同步。' },
    ],
    diagnosis: [{ symptom: '反规范化的冗余字段和源数据不一致', cause: '更新源数据时没有同步更新冗余副本——可能是代码遗漏或同步消息丢失。', fix: '①使用 CDC（Change Data Capture）：监听主表 binlog/WAL，自动更新冗余副本②事件溯源：所有数据变更都是 Event，冗余副本订阅事件更新③定期对账：每日凌晨对冗余字段做全量校验，发现不一致修复④减少冗余点：只反规范化最频繁查询的 1-2 个场景，其他地方保持规范化。' }],
    exercises: [
      { level: '基础', task: '电商商品详情页需要显示：商品信息+30 天内销量+好评率。规范化要 3 次查询。怎么反规范化？', hint: '冗余字段', answer: '在商品表（products）增加冗余字段：sales_30d（30 天销量）、positive_rate（好评率）。每次有订单或评价时，更新 products 表的这些字段（通过 MQ 异步更新）。读的时候只需 SELECT * FROM products WHERE id=123 ——一次查询拿到所有数据。' },
      { level: '进阶', task: '设计一个"反规范化一致性保证"的方案：冗余数据和源数据不一致时自动修复', hint: 'CDC + 对账 + 版本号', answer: '①每个源数据记录带 version 字段（每次更新自增）②冗余副本也存这份 version③更新源数据时→发事件到 MQ（带 new_version）→消费者更新冗余副本（条件：new_version > 当前副本 version）④定期全量对账：扫描源表 version 和冗余表 version 对比，不一致则修复⑤对账修复任务限流处理（避免修复风暴影响线上）⑥监控：不一致率 >0.01% 告警。' },
    ],
  },

  "fY8zgbB13wxZ1CFtMSdZZ": {
    mentalModel: 'SQL 调优是"优化慢查询"的侦探工作——发现慢查询（缓查询日志）→分析执行计划（EXPLAIN）→找到瓶颈（全表扫描/缺索引）→修复（建索引/重写查询）。最核心的是理解数据库怎么执行这条 SQL，而不是凭直觉猜。',
    sections: [
      { title: '执行计划解读', content: 'EXPLAIN 关键字段：①type：访问方式。ALL（全表扫描）=灾难，index（索引扫描），range（范围查询），ref（非唯一索引），eq_ref（唯一索引 JOIN），const（主键查）。system > const > eq_ref > ref > range > index > ALL。②key：实际使用的索引。③rows：预计扫描行数。④Extra：Using filesort（文件排序=慢），Using temporary（临时表=慢），Using index（覆盖索引=快）。优化目标：type 尽量靠前，rows 尽可能少，Extra 避免 filesort/temporary。' },
      { title: '实际优化案例', content: '慢查询：SELECT * FROM orders WHERE user_id=123 ORDER BY created_at DESC LIMIT 10。执行计划显示 type=ALL（全表扫描）。优化：建复合索引 (user_id, created_at)。执行计划变为 type=ref, rows=50, Extra=Using index（覆盖索引）。查询时间从 2000ms 降到 5ms。复合索引的最左前缀原则：查询条件必须包含索引的最左列——(user_id, created_at) 索引可以优化 WHERE user_id=123 ORDER BY created_at，但不能优化 WHERE created_at > date ORDER BY user_id。' },
    ],
    diagnosis: [{ symptom: '执行计划显示用了索引但查询仍然很慢', cause: '索引选择性低——如 gender 字段只有 M/F（2 个值），查询 gender=M 时即使走索引也要扫描一半数据。', fix: '①检查索引选择性（基数/总行数）：选择性=1（唯一）最好，选择性接近 0（2-3 个值）索引无意义②更换更优索引字段③使用复合索引提高选择性④如果必须查低选择性字段+排序，用 (gender, created_at) 复合索引。' }],
    exercises: [
      { level: '基础', task: '用 EXPLAIN 分析一条慢查询，解释 type=ALL 和 Using filesort 分别代表什么', hint: '全表扫描 + 排序', answer: 'type=ALL：全表扫描——数据库读取了整张表的每一行，没有用任何索引。大表的话=灾难。Using filesort：查询需要排序但无法利用索引排序→数据库使用"文件排序"（可能用磁盘 tmp 文件）。解决办法：建复合索引覆盖 WHERE+ORDER BY 的所有列。' },
      { level: '进阶', task: '优化以下查询：SELECT * FROM articles WHERE status="published" AND category_id=5 ORDER BY publish_time DESC LIMIT 20 OFFSET 1000。设计和指定最佳索引', hint: '覆盖索引，避免回表', answer: '建索引 (status, category_id, publish_time)。原因：最左prefix满足 WHERE status AND category_id，包含 publish_time 消除 Using filesort，查询走覆盖索引。如果 SELECT * 不是全字段，只查 (id, title, publish_time) 更好。OFFSET 1000 的问题：数据库要扫描 1020 行丢弃前 1000。优化为"游标分页"：WHERE (publish_time, id) < (last_time, last_id) ORDER BY publish_time DESC, id DESC LIMIT 20（避免大 offset）。' },
    ],
  },

  "YiYRZFE_zwPMiCZxz9FnP": {
    mentalModel: '背压（Back Pressure）是"水管阀门"——下游处理速度慢时，上游自动减小流量。就像洗手池：水龙头（生产者）持续放水，但下水道（消费者）堵塞时，水溢出（系统崩溃）。背压=感知下游速度并自我调节。',
    sections: [
      { title: '背压的实现方式', content: '①拉模型（Pull）：消费者告诉生产者"我能处理 N 条"，生产者只发 N 条。Kafka Consumer 的 fetch 就是拉模型——消费者按自己的节奏拉数据。②限流（Rate Limiting）：生产者限制发送速率（token bucket/leaky bucket 算法）。③拒绝+重试：下游返回 429/503，上游退避重试。④队列满时阻塞/丢弃：有界队列满时阻塞生产者（BlockingQueue）或丢弃数据（drop）。⑤Reactive Streams（响应式流）：backpressure 是 Reactive 规范的核心——Subscriber 通过 request(n) 控制 Publisher 发送量。' },
      { title: 'Netflix 的背压实践', content: 'Netflix Zuul 网关做背压：后端服务慢→Zuul 返回降级响应→客户端减少请求。Netflix Hystrix 熔断器：线程池/信号量满时拒绝新请求（快速失败不去排队）。Netflix Concurrency Limits：自适应限流——根据 P99 延迟自动调整并发上限，延迟增加→降低并发，延迟恢复→增加并发。' },
    ],
    diagnosis: [{ symptom: '消息队列中生产者速度 >> 消费者速度，队列无限增长', cause: '消费者处理慢但生产者没有感知——缺少背压机制。', fix: '①限制队列长度（有界队列），满了阻塞生产者②消费者平行扩展（增加 partition + consumer 数量）③监控 lag 设置告警④生产者侧限流（检测 lag 超阈值→拒绝新消息）⑤优化消费者逻辑（批量处理/异步写出）。' }],
    exercises: [
      { level: '基础', task: '为什么消息队列（Kafka/RabbitMQ）天然解决了背压问题？', hint: '缓冲 + 消费者控制', answer: 'MQ 作为缓冲区：生产者写 MQ 极快（内存+顺序磁盘），消费者按自己能力拉取。Kafka 的消费者 pull 模型使背压天然存在——快消费者多拉，慢消费者少拉，互不影响。缓冲 queue 也有上限（满了阻塞生产者或拒绝），避免内存爆炸。' },
      { level: '进阶', task: '设计一个"服务间 RPC 的自适应背压"机制：下游服务过载时，上游自动降速而不是继续猛发', hint: '自适应限流 + CircuitBreaker', answer: '①上游为每个下游维护一个并发窗口（max_concurrency）②动态调节：监控下游错误率和 P99 延迟，使用梯度下降算法更新 max_concurrency③下游返回 429 或超时率>5%→窗口减半④连续 N 秒正常→窗口缓慢增至初始值⑤快速拒绝：窗口满时立即拒绝新请求（不排队等待）⑥熔断兜底：连续失败率>50%→断路器打开→所有请求直接降级返回。Netflix Concurrency Limits 就是这个算法的实践。' },
    ],
  },

  "a9wGW_H1HpvvdYCXoS-Rf": {
    mentalModel: '任务队列是工厂流水线的"待处理区"——订单（任务）进入队列排队，工人（Worker）按顺序处理。你不能让工人干等着订单来（空转），也不能让订单堆积如山没人管（积压）。任务队列就是协调生产速度和消费速度的缓冲。',
    sections: [
      { title: '任务队列 vs 消息队列', content: '任务队列关注"任务的执行"：投递任务→Worker 执行→返回结果。通常有点对点模式（一个任务一个 Worker）。消息队列关注"消息的分发"：事件广播，多个消费者可能都感兴趣。技术选型：Celery（Python 任务队列，基于 Redis/RabbitMQ）、Sidekiq（Ruby）、Bull（Node.js）、Google Cloud Tasks（全托管）。Kafka 也可做任务队列但设计初衷是事件流。' },
      { title: '任务队列关键特性', content: '①任务重试：失败后按退避策略（1s/5s/25s/125s）重试，超过最大重试次数进死信队列②任务优先级：VIP 用户的任务插队处理③任务延迟：定时任务（30 分钟后执行）④任务去重：相同参数的任务不重复入队（幂等 key）⑤任务超时：执行超时自动终止+告警⑥任务进度：长任务实时汇报进度到客户端。' },
    ],
    diagnosis: [{ symptom: '任务重试多次后仍然失败，消耗资源且阻塞其他任务', cause: '没有死信队列或重试上限——失败的任务无限重试。', fix: '①设置最大重试次数（如 3-5 次）②超限后进入死信队列（人工审查/自动诊断）③重试策略：可重试的错（网络超时）重试，不可重试的错（参数格式错误）直接进死信④死信队列监控和告警（及时发现问题）⑤提供死信重放的接口。' }],
    exercises: [
      { level: '基础', task: '任务队列中理想的 Worker 数量是多少？太多会怎样？太少会怎样？', hint: 'CPU/IO 密集与并行度', answer: '太多 Worker：CPU/内存竞争，上下文切换增加，甚至比少 Worker 更慢。太少 Worker：队列积压，吞吐不够。理想数：CPU 密集任务：Worker 数≈CPU 核数。IO 密集任务（网络/DB 等待）：Worker 数 = 核数 × 2-4。实际需压测不同 Worker 数找最佳吞吐点。' },
      { level: '进阶', task: '设计一个"全局任务优先级"方案：优先级 1 的任务应该在全球范围内比优先级 2 的先执行，而不是只在本地队列里靠前', hint: '多级队列+全局调度', answer: '①多级队列：P1（紧急）/P2（正常）/P3（低优先），各独立队列②Worker 先消费 P1→P1 空了再消费 P2→P3③饥饿防止：如果 P3 任务在队列中超过 T 分钟→自动升级优先级④全局公平性：用 Redis sorted set（score=priority+arrival_time）做全局优先级队列⑤扩容弹性：P1 积压时自动启动更多 Worker 实例专门处理 P1。' },
    ],
  },

  "VIbXf7Jh9PbQ9L-g6pHUG": {
    mentalModel: 'Strangler Fig（绞杀榕）是热带榕树生长模式——藤蔓环绕老树生长，最终替代老树。在软件里：新系统和旧系统并存，逐步替换旧功能，直到旧系统完全被"绞杀"。优势：零大爆炸式迁移风险。',
    sections: [
      { title: '三步绞杀', content: '①拦截：所有请求经过 Facade/Proxy，路由规则决定到新系统还是旧系统②迁移：逐个功能模块从旧系统迁到新系统——每迁移一个就更新路由规则③废弃：旧功能全部迁移完成后关停旧系统。Netflix 从数据中心迁移到 AWS 用了这套——微服务逐个迁到 AWS，旧 DC 服务逐步退役，耗时数年但无大规模宕机。' },
    ],
    diagnosis: [{ symptom: '新旧系统数据不一致——用户在旧系统看到的和新系统不一样', cause: '迁移期间双写或数据同步不同步。', fix: '①新系统优先——如果有冲突以新系统为准②数据同步：CDC 或双写确保迁移期间两边数据一致③功能开关：每个迁移功能可独立回退④监控新旧系统流量分布确认迁移进度。' }],
    exercises: [
      { level: '基础', task: 'Strangler Fig 和"大爆炸重写"各有什么优缺点？', hint: '风险 vs 时间', answer: 'Strangler Fig：风险低、可随时回退、渐进迁移。缺点：周期长（可能数年）、维护两套系统成本高。大爆炸重写：快（一刀切）、干净。缺点：高风险（全量上线失败=全业务挂）、无法回退、测试不充分。' },
      { level: '进阶', task: '设计一个"Strangler Fig + 灰度开关"组合方案迁移旧单体到微服务', hint: '入口代理 + 功能开关', answer: '①入口 Nginx/API Gateway 根据 URL 前缀和功能开关路由到旧单体或新微服务②功能开关：后台配置某功能走新系统的用户百分比③灰度：0%→1%→10%→50%→100%分阶段④每阶段对比新旧系统的错误率和延迟⑤发现问题可秒级回滚（切换比例回 0%）。' },
    ],
  },

  "AAgOGrra5Yz3_eG6tD2Fx": {
    mentalModel: 'Sidecar 模式就像摩托车边斗——每个主 Pod 旁挂一个辅助容器（Envoy/日志收集/配置刷新），处理横切关注点。主应用专注业务，Sidecar 处理网络、安全、可观测性。',
    sections: [
      { title: 'Sidecar 典型用途', content: '①服务网格（Istio/Envoy）：Sidecar 代理所有网络流量——负载均衡、重试、熔断、TLS——应用无感知。②日志收集：Filebeat/Fluentd sidecar 收集应用日志推送到 Elasticsearch ③配置刷新：ConfigMaps 变化时 sidecar 通知应用 reload④监控：Prometheus exporter sidecar 暴露 metrics。Kubernetes Pod 多容器模式让 Sidecar 成为一等公民。' },
    ],
    diagnosis: [{ symptom: 'Sidecar 代理占用资源过多导致 Pod 频繁 OOMKilled', cause: 'Envoy 配置不当或流量过高导致 sidecar 内存消耗超出 limit。', fix: '①为 sidecar 设置合理的 resource request/limit②监控 sidecar 资源使用③简化 Envoy 配置（减少 filter/listener）④使用 eBPF/Cilium 替代 sidecar（无代理模式）减少资源开销。' }],
    exercises: [
      { level: '基础', task: 'Sidecar 和 DaemonSet 有什么区别？各适合什么场景？', hint: '每个 Pod vs 每个 Node', answer: 'Sidecar：每个应用 Pod 一个辅助容器，与应用绑定（网络代理/日志收集）。DaemonSet：每个 Node 一个 Pod，与节点绑定（监控代理/日志收集 agent）。Sidecar 更灵活（可按应用粒度配置），但资源开销更大。DaemonSet 更省资源但所有应用共享。' },
      { level: '进阶', task: '设计一个"轻量 Sidecar"替代 Envoy：只做限流和熔断', hint: '简化功能 + Rust/Go', answer: '①用 Go/Rust 写一个轻量代理——只有限流（token bucket）和熔断两个功能②与主应用通过 Unix Socket 通信（避免网络开销）③配置通过 configmap 动态更新④总内存 < 10MB（vs Envoy 的 50-100MB）⑤适合中小规模不需要完整服务网格的场景。' },
    ],
  },

  "W0cUCrhiwH_Nrzxw50x3L": {
    mentalModel: '数据管理（Data Management）在分布式系统中是"分而治之"——命令查询分离（CQRS）、事件溯源（Event Sourcing）、物化视图（Materialized View）、索引表（Index Table）是四种核心数据模式。',
    sections: [
      { title: '数据管理四大模式', content: '①CQRS：命令（写）和查询（读）使用不同模型和数据库。写用 MySQL 强一致，读用 Elasticsearch 高性能搜索。②Event Sourcing：存储事件序列而非当前状态。余额=所有交易事件的累加。③Materialized View：预计算复杂查询结果，类似"物化的 SQL 查询"。④Index Table：为频繁查询的字段建独立的索引表，替代在原文中搜索。' },
    ],
    diagnosis: [{ symptom: '读写混合的业务中，复杂查询拖累写入性能', cause: '读写冲突——查询需要扫描大量行与写入争 IO 和锁。', fix: '①CQRS：写和读用不同数据库，互不影响②读副本：复杂查询在从库执行③物化视图：预计算查询结果避免实时 JOIN④异步刷新：不追求实时一致性可异步构建读模型。' }],
    exercises: [
      { level: '基础', task: 'CQRS 和普通读写分离有什么区别？', hint: '模型和数据库都不同', answer: '读写分离：同样的数据 schema，主库存写、从库读。CQRS：写模型（强一致/正规划 schema）和读模型（性能优/反规范化 schema）完全不同的存储。如：写进 MySQL 的行，Published 到 Elasticsearch 的索引文档。两套存储、两套 schema。' },
      { level: '进阶', task: '设计一个"CQRS + Event Sourcing"组合方案：订单系统用事件溯源存事件，CQRS 提供高性能查询', hint: 'Event Store + Projection', answer: '①写：订单操作都以事件存储（Event Store=Kafka），事件不可变②Projector 监听事件流→构建查询模型（OrderView 表）③命令端查当前状态→读 Event Store 最新快照+增量事件④查询端直接读 OrderView 表（MySQL）→高性能读⑤优势：完整审计日志（所有事件可回溯）、读写独立扩展。' },
    ],
  },

  "dsWpta3WIBvv2K9pNVPo0": {
    mentalModel: '消息（Messaging）模式是分布式系统的"邮政系统"——不同模式对应不同的投递方式。点对点（一封给一人）、发布订阅（公告栏通知所有人）、优先级队列（VIP 通道）、管道过滤器（流水线）。',
    sections: [
      { title: '消息模式汇总', content: '①Publisher/Subscriber：一对多广播（事件）②Competing Consumers：多消费者竞争消费（任务分配）③Priority Queue：高优先级消息先处理④Queue-Based Load Leveling：队列削峰填谷⑤Pipes and Filters：消息流经多个处理阶段⑥Claim Check：大 payload 存外部存储，消息只传引用（类似"取件码"）。' },
    ],
    diagnosis: [{ symptom: '消息被部分消费者处理但其他消费者丢失', cause: 'Pub/Sub 中某些消费者 ACK 超时或崩溃，消息 redistribute 到了错误的分组。', fix: '①使用持久化订阅（Kafka Consumer Group 持久化 offset）②监控 consumer lag ③消息 ID 去重（防止 rebalance 时重复消费）④设置合理的 session timeout 和 heartbeat interval。' }],
    exercises: [
      { level: '基础', task: 'Competing Consumers 和 Pub/Sub 的核心区别？', hint: '一条消息多个接收者 vs 一条一个', answer: 'Competing Consumers：一条消息只被一个消费者处理（任务分发）。Pub/Sub：一条消息被多个消费者同时收到（事件广播通知多个系统）。前者用队列（Queue），后者用 Topic。' },
      { level: '进阶', task: '设计一个"通知中心"：支持多消息通道（Push/短信/邮件/站内信），不同通道有独立的优先级和限流', hint: '优先级队列 + 独立消费者', answer: '①每条通知入队时带 priority 和 channels[]②各通道有独立队列（push_queue/sms_queue/email_queue），各自有独立优先级③通道消费者独立扩缩（短信通道可能需要更多 Worker）④限流保护第三方通道（每日上限、速率上限）⑤失败自动降级通道（push 失败→发短信→发邮件）。' },
    ],
  },

  "VgvUWAC6JYFyPZKBRoEqf": {
    mentalModel: 'Sequential Convoy（顺序护航）是多艘船排成一队的护航运输——领头船的速度决定了整队的速度。在消息处理中：一次只能处理一条消息的业务流程成为瓶颈——后续消息必须排队等候。',
    sections: [
      { title: 'Convoy 的形成', content: '典型场景：所有消息按 FIFO 处理。一条慢消息占用了 Worker（处理 10 秒），导致后续 100 条快消息（各 10ms）排队等。就像收费站：一辆车没带零钱堵 5 分钟，后面 100 辆车等——尽管他们只需 5 秒。FIFO 队列是罪魁祸首。解决：①分区（partition）——不同 key 的消息进不同队列 ②优先级队列 ③专门慢任务通道。' },
    ],
    diagnosis: [{ symptom: '消息队列中某条消息一直在前面，后面消息都在等', cause: 'FIFO 顺序 + 慢消息。', fix: '①为慢任务专门创建独立队列（low_priority_queue）②主队列中慢消息超时就放弃并移到专门队列③增加 Worker 数量（横向扩展）④非关键路径异步化，不阻塞主流程。' }],
    exercises: [
      { level: '基础', task: 'FIFO 队列有什么场景是必要的？为什么有时牺牲性能也要保证顺序？', hint: '状态机', answer: '订单状态变迁（待支付→已支付→已发货→已签收）必须按顺序处理——不能先处理"已签收"再处理"已支付"。这时必须用 FIFO。但可以将不同订单用不同队列分区——同一个订单的状态消息有序，不同订单的并发处理。' },
      { level: '进阶', task: '设计一个"防 Sequential Convoy"的队列方案：快消息不被慢消息阻塞', hint: '多队列 + 自适应路由', answer: '①根据消息处理历史时间分类：<100ms=快队列，100ms-1s=中队列，>1s=慢队列②Worker 优先消费快队列→快队列空了才消费中→中空了才消费慢③实时检测：消息处理时间超过分类阈值→自动重分类到慢队列④监控：慢队列占比告警→优化慢消息路径。' },
    ],
  },

  "stZOcr8EUBOK_ZB48uToj": {
    mentalModel: 'Valet Key（泊车钥匙）是酒店代客泊车——你给服务员的是车钥匙（受限访问令牌），他可以挪车但不能开你的手套箱。在云存储中：客户端直接上传到 S3 用预签名 URL——有权限上传但有限制（只能上传到指定路径、指定大小、指定时间窗口）。',
    sections: [
      { title: 'Valet Key 实现', content: '①客户端请求上传→后端服务生成 S3 Pre-signed URL（包含：acl/public-read, content-length-limit, 5 分钟有效期）→客户端用这个 URL 直接上传到 S3（绕过应用服务器）②下载同理——Pre-signed URL 让客户端直接从 S3 下载，无需服务端中转。优势：节省服务器带宽+CPU（大文件时不消耗后端资源），安全（URL 自动过期）。' },
    ],
    diagnosis: [{ symptom: 'Pre-signed URL 被盗用上传恶意文件', cause: 'URL 泄露或未设置足够的限制条件。', fix: '①设置短有效期（1-5 分钟）②限制文件大小（Content-Length 上限）③限制文件类型（Content-Type 白名单）④单次使用（上传后 URL 失效）⑤上传后服务端验证文件完整性+病毒扫描。' }],
    exercises: [
      { level: '基础', task: 'S3 Pre-signed URL 和传统的"后端接收文件再传 S3"有什么区别？', hint: '带宽+延迟', answer: '传统：Client→后端→S3（后端充当代理，消耗带宽/CPU）。Pre-signed URL：Client→S3 直接上传（绕过应用服务器）。对于 100MB 文件：传统消耗 200MB 后端带宽（收+发），Pre-signed URL 消耗 0。' },
      { level: '进阶', task: '设计一个"安全文件上传"系统：用 Valet Key + 病毒扫描 + 访问控制', hint: '预签名 → 上传 → 后台扫描 → 公开', answer: '①前端请求上传→后端生成 Pre-signed URL（5 分钟有效、max 10MB、Content-Type: image/*）②前端直接上传 S3→通知后端"上传完成"③后台 Lambda/Worker 被 S3 事件触发→病毒扫描（ClamAV）→通过=改 ACL 为 public-read，不通过=删除+通知④用户获取下载链接也是 Pre-signed URL（有效期 1 小时）。' },
    ],
  },

  "beWKUIB6Za27yhxQwEYe3": {
    mentalModel: 'Leader Election（主节点选举）是动物世界的"老大选举"——一群节点需要选出一个 Leader 做决策，Leader 挂了马上重选。谁成为 Leader？第一个喊"我是老大"并获得多数同意的那个。',
    sections: [
      { title: '选举算法', content: '①Bully 算法：节点 ID 最大的当 Leader（简单但不公平）。②Raft/Paxos：多数投票制——候选人请求投票，拿到多数票当选。ZooKeeper 使用 Zab（类 Paxos），etcd 使用 Raft。③租约（Lease）：Leader 持有有时限的租约，到期需续约。K8s 的 Lease 机制。④优先级：选举时考虑节点能力——数据最新的节点优先成为 Leader（Kafka Controller 选举看重 epoch）。' },
    ],
    diagnosis: [{ symptom: '频繁出现双 Leader（Split-Brain）', cause: '网络分区导致旧 Leader 不知道自己被罢免，两节点同时认为自己是 Leader。', fix: '①Fencing Token（递增数字）：写存储时带 token，拒绝旧 token②奇数个节点（3/5/7）③Leader 需定期确认自己仍有超过半数支持④STONITH：旧 Leader 被隔离而非继续运行。' }],
    exercises: [
      { level: '基础', task: '为什么选举需要奇数个节点？', hint: '避免票数持平', answer: '奇数个节点确保总能选出多数（2/3>50%、3/5>50%）。偶数节点可能出现平票（2/4=50%，不超半数）导致无法选出 Leader。3 节点最多容忍 1 节点挂，5 节点容忍 2 节点挂。' },
      { level: '进阶', task: '设计一个"分级 Leader Election"：不同级别的 Leader 负责不同职责', hint: 'Controller vs Worker Leader', answer: '①集群级 Leader（Controller）：负责拓扑管理（节点加入/离开、分片分配）。②分片级 Leader（Shard Leader）：负责分片内的写入协调。③选举分离：Controller 选举用 etcd（Raft 强一致），Shard Leader 用本地判断（数据最新、延迟最低）。Kafka 就是这个模型——Controller 是全局唯一，Partition Leader 每个分区一个。' },
    ],
  },

  "ivr3mh0OES5n86FI1PN4N": {
    mentalModel: 'CQRS（命令查询职责分离）= 进和出走不同的门——进（写操作/Command）走严格的流程（验证→业务规则→事务→持久化），出（读操作/Query）走快速通道（定制视图、缓存、搜索索引）。读模型是写模型为特定查询场景定制的"镜像"。',
    sections: [
      { title: 'CQRS 完整架构', content: 'Command 端：接收写请求→验证→执行业务逻辑→持久化到 Event Store 或 DB→发布事件。Query 端：监听事件→更新读模型（Materialized View/Elasticsearch/缓存）→暴露高性能查询接口。读模型可能有多套：搜索用 ES、列表用 MySQL 反规范化表、详情用 Redis。每套读模型为特定查询优化。Greg Young 和 Udi Dahan 推动了 CQRS 的普及。' },
    ],
    diagnosis: [{ symptom: 'CQRS 中读模型和写模型不一致——读到的数据是旧的', cause: '事件处理延迟——读模型还没消费到最新的写事件。', fix: '①监控读写模型延迟（lag）②如果业务需要一致性，在写入后返回 write_token，读请求带 token 校验一致性（读模型有 token 对应的事件后才返回）③优化投影处理速度（批量投影、并行消费）。' }],
    exercises: [
      { level: '基础', task: 'CQRS 和普通的分层架构（Controller→Service→DAO）有什么区别？', hint: '模型分离', answer: '分层架构：读和写用同一个 Service 和同一个数据模型。CQRS：读和写用完全不同的代码路径和不同的数据模型（甚至不同的数据库）。分层架构是代码层面分离，CQRS 是模型和存储层面分离。' },
      { level: '进阶', task: '设计一个基于 CQRS 的用户行为分析系统：写日志+实时查询', hint: 'Kafka + 多读模型', answer: 'Command：用户行为通过 API 或埋点 SDK 上报→持久化到 Kafka（Event Store）。Query 模型 1（实时计数）：Flink/Spark Streaming 消费 Kafka→计算每分钟 PV/UV→存 Redis→实时 Dashboard。Query 模型 2（历史分析）：Kafka→S3（数据湖）→ClickHouse→复杂 SQL 分析。Query 模型 3（搜索）：Kafka→Elasticsearch→全文搜索特定用户行为。' },
    ],
  },

  "7OgRKlwFqrk3XO2z49EI1": {
    mentalModel: '事件溯源（Event Sourcing）= 会计账本的每笔分录——不存"余额=500"，而是存"+300→-100→+200→+100→余额=500"。事件序列是真实来源（Source of Truth），余额从事件中计算。好处：完整审计日志、时间旅行（回到任意历史点）、不丢失信息。',
    sections: [
      { title: 'Event Sourcing 核心', content: '①事件是不可变的（追加），不修改不删除。②当前状态=聚合所有历史事件。③事件存储（Event Store）是追加日志（Kafka/EventStoreDB/关系型表）。④快照优化：定期保存状态快照（避免每次从事件 #0 重新计算）。⑤CQRS 天然配合：事件=写模型，快照/投影=读模型。Martin Fowler 和 Greg Young 详细阐述了这种模式。' },
    ],
    diagnosis: [{ symptom: '事件溯源中从事件 #1 重放所有事件很慢', cause: '事件数量巨大（如 10 亿条），每次重建状态需要重放所有事件。', fix: '①定期创建快照（Snapshot）——每隔 N 个事件保存状态②恢复时加载最新快照+重放快照之后的事件③快照压缩——删除快照前的旧事件（archive cold storage）④事件分片——按聚合 ID 分区加速重放⑤投影缓存——常用查询用 CQRS 读模型避免每次重放。' }],
    exercises: [
      { level: '基础', task: 'Event Sourcing 和普通 CRUD 的核心区别是什么？', hint: '历史 vs 覆盖', answer: 'CRUD：UPDATE balance=500——旧值 300 丢失。Event Sourcing：INSERT event:deposit(200) + INSERT event:deposit(300)——旧值永远保留。CRUD 简单但不能追溯，Event Sourcing 可回溯但复杂。' },
      { level: '进阶', task: '设计一个"Event Sourcing + 补偿"方案：如果发现事件是错误的，如何修正而不修改历史？', hint: '补偿事件', answer: '①不删除/修改历史事件——追加"补偿事件"（如 original_event_id=#100, type=reversal, amount=-500）②重建状态时补偿事件抵消原事件③标记错误事件为"reversed"供审计④保留完整的操作记录（包括错误和纠正）⑤这一条本身说明：系统永不隐藏错误，只是加标记纠正。' },
    ],
  },

  "WB7vQ4IJ0TPh2MbZvxP6V": {
    mentalModel: '物化视图是"提前算好结果放那"——每日销售报表不是每次都 SUM 全表，而是每天晚上算好存起来，第二天直接用。相当于把耗时计算冻结成一个快照结果。',
    sections: [
      { title: '物化视图的应用', content: '①数据库视图（Materialized View）：MySQL/PostgreSQL 创建 MV（CREATE MATERIALIZED VIEW），存储查询结果②数据仓库：预先聚合维度数据（每日按地区汇总销售）③缓存：把复杂 SQL 结果存 Redis（手工 MV）④搜索引擎：Elasticsearch 索引=物化视图（从原始数据转化为倒排索引）⑤定期刷新或实时更新（CDC 同步）。' },
    ],
    diagnosis: [{ symptom: '物化视图数据过期——和源表数据不一致', cause: '刷新频率太低或刷新失败。', fix: '①缩短刷新间隔②CDC 实时同步替代定时刷新③监控物化视图的"新鲜度延迟"④源数据更新后主动触发刷新⑤使用"在线更新"（不发锁，原子切换新旧版本）。' }],
    exercises: [
      { level: '基础', task: 'View 和 Materialized View 的区别是什么？', hint: '计算时机', answer: 'View=每次查询时实时计算（慢但最新）。Materialized View=提前计算好存盘（快但可能过时）。View 不占额外存储，MV 占存储。View 适合低频简单查询，MV 适合高频复杂聚合查询。' },
      { level: '进阶', task: '设计一个"多级物化视图"方案：小时级→天级→月级，各粒度数据都能查', hint: 'Rollup 聚合', answer: '①原始数据（秒级）→Kafka②Flink 滚动窗口→小时级 MV（每小时按维度聚合）→存入 ClickHouse③天级 MV：小时 MV 进一步聚合④月级 MV：天级 MV 进一步聚合⑤查询时：选最接近的粒度（查 3 个月趋势→月级 MV；查最近 3 天→小时级 MV）。类似 Druid/ClickHouse 的预聚合机制。' },
    ],
  },

  "AH0nVeVsfYOjcI3vZvcdz": {
    mentalModel: '索引表是"为查询定制的目录"——一本书的章节索引查找特定主题极快，比翻遍全书快得多。索引表就是为复杂查找单独建的低成本索引空间。',
    sections: [
      { title: '索引表模式', content: '当主表的查询无法被常规索引优化时：①全文搜索→Elasticsearch 索引表（通过 CDC 同步主表数据到 ES）②空间查询→MongoDB GeoIndex 或 PostGIS 索引表③多条件过滤→独立宽表（预 JOIN 多个表的数据）④聚合加速→按维度预聚合的汇总表。索引表 = 专门为一种查询模式优化的次要存储。' },
    ],
    diagnosis: [{ symptom: '主表上索引过多导致写入性能下降', cause: '每个索引都需要在写入时更新——10 个索引使写入放大 10 倍。', fix: '①将辅助查询的索引迁移到独立的索引表（ES/ClickHouse）②主表只保留必要的主键和唯一索引③辅助索引通过 CDC 异步更新（不阻塞写入）④给不同的查询需求建不同的索引表。' }],
    exercises: [
      { level: '基础', task: '主表索引和独立索引表各有什么优缺点？', hint: '一致性 vs 性能', answer: '主表索引：强一致（写入和索引原子），但写入放大、受限于单一数据库。独立索引表（ES）：最终一致（CDC 延迟），但写入快、查询能力强（全文/模糊/空间查询）。' },
      { level: '进阶', task: '设计一个"自动索引表生成"系统：分析慢查询日志，自动创建物化视图或索引表加速', hint: 'SQL 分析 + 自动建索引', answer: '①收集慢查询日志→分析 SQL 模式②发现某查询频繁出现且耗时>1s→3.生成优化方案（添加索引/创建 MV/创建 ES 索引）④自动执行（先建在 staging 环境验证）⑤灰度应用（部分流量导到新索引→对比性能）⑥效果监控：索引表命中率和延迟改善。' },
    ],
  },

  "uR1fU6pm7zTtdBcNgSRi4": {
    mentalModel: 'Scheduling Agent Supervisor（调度代理监督者）是"任务分配的管工"——你有一堆工作需要分发到各个 Worker，还要监控进度、处理死 Worker、重试失败。就像管工分活给施工队，并检查谁没干完活。',
    sections: [
      { title: 'Agent Supervisor 模式', content: '①Scheduler：决定什么时候、给谁分配什么任务。②Agent/Worker：执行任务的实际单元。③Supervisor：监控 Agent 死活、任务进度、失败重试。④工作分配：推模型（Scheduler 主动分配给 Agent）或拉模型（Agent 空闲时自主拉取）。Kubernetes Scheduler + Kubelet 就是这套模式——Scheduler 决定 Pod 放到哪个 Node，Kubelet 是执行 Pod 的 Agent，Controller Manager 是 Supervisor（确保期望状态）。' },
    ],
    diagnosis: [{ symptom: 'Agent 挂了但 Scheduler 继续给死 Agent 分配任务', cause: '缺少心跳/健康检测——Scheduler 不知道 Agent 已死。', fix: '①Agent 定期发心跳（每 N 秒）②Supervisor 检测心跳超时→标记 Agent 死③死 Agent 的任务重新分配给活 Agent④任务带超时——超时未完成自动重新分配⑤幂等性：任务重新分配后不重复执行。' }],
    exercises: [
      { level: '基础', task: '推模型和拉模型的任务分配各有什么适用场景？', hint: '集中控制 vs 自主节奏', answer: '推（Scheduler 分配）：适合负载均衡、全局优化（K8s Scheduler 能考虑资源碎片化和亲和性）。拉（Agent 主动取）：适合异构 Worker（各 Worker 速度不同自己控制节奏）、动态扩缩（新 Worker 启动自动抢任务）。' },
      { level: '进阶', task: '设计一个"弹性任务调度"系统：Agent 数自动根据积压调整，失败任务分级重试', hint: 'Auto Scaling + DLQ', answer: '①Agent 监控任务积压（pending > 100→自动扩容 Agent 数）②Agent 空闲时（idle > 5min→缩容 Agent）③失败重试：临时错误（网络）→重试 3 次，业务错误→不进重试直接 DLQ④Supervisor 监控 DLQ 增长→告警⑤任务优先级：紧急任务 Scheduler 优先分配⑥分布式锁防止同任务被多 Agent 同时执行。' },
    ],
  },

  "aCzRgUkVBvtHUeLU6p5ZH": {
    mentalModel: 'Choreography（编排）是即兴舞蹈——每个舞者会记住自己的动作和节奏，听到音乐信号自然配合，没有中央指挥。每个服务知道自己要做什么，事件触发了就知道该行动了。',
    sections: [
      { title: 'Choreography vs Orchestration', content: 'Choreography（编排）：事件驱动，服务间松耦合。订单服务发"订单已支付"事件→库存服务监听到后自己扣库存→发货服务监听到后创建运单。没有中央协调者。Orchestration（指挥）：中心协调者指挥各服务。OrderSaga 先调库存扣减→再调创建发货单→再调支付确认。中心知道完整流程。编排适合松耦合（服务独立演进），指挥适合需要严格流程控制的场景。' },
    ],
    diagnosis: [{ symptom: '编排模式中某个环节的处理逻辑被注释了——无人知道影响', cause: '编排分布在各服务中，没有全局视图——可能某个消费者停了但无人发现。', fix: '①事件流监控：检查各消费者 lag 和活跃状态②全局流程可视化（从事件日志重建流程）③端到端监控（模拟完整流程定期执行）④对关键流程用 Saga 指挥模式替代纯编排。' }],
    exercises: [
      { level: '基础', task: 'Choreography 和 Orchestration 各向一个例子', hint: '舞蹈 vs 交响乐', answer: 'Choreography：各微服务独立响应事件（Netflix 的事件驱动架构）。Orchestration：中央 Saga 协调器逐步调各服务（AWS Step Functions、Camunda）。舞蹈没有指挥，交响乐有指挥。' },
      { level: '进阶', task: '设计一个"Saga 编排+Choreography 混合"方案：关键路径用指挥，非关键路径用编排', hint: '主流程指挥 + 副作用事件', answer: '订单 Saga（Orchestration）：协调器顺序调库存→支付→发货。副作用（Choreography）：订单成功后发事件→积分服务加积分→推荐服务更新用户画像→分析服务记录漏斗。这样核心流程可控（指挥），副作用松耦合（编排）。' },
    ],
  },

  "n4It-lr7FFtSY83DcGydX": {
    mentalModel: 'BFF（Backend for Frontend）是"各端专属管家"——手机 App、Web 前端、IoT 设备各有自己的后台服务。Web BFF 返回完整 HTML+数据，Mobile BFF 返回精简 JSON。各端需求差异巨大，一个通用 API 要么浪费带宽要么缺数据。',
    sections: [
      { title: 'BFF 设计原则', content: '①一前端一 BFF：Mobile BFF 和 Web BFF 是两个独立服务②BFF 负责数据聚合——调用多个下游 Service 拼装成一个响应③数据裁剪：Web 需要完整文章正文，Mobile 只需要摘要④格式转换：gRPC 后端→BFF→REST JSON 给移动端。Netflix 的 API 层为不同设备（TV/iOS/Web）定制了不同的 BFF，每个返回最适合该设备的响应。' },
    ],
    diagnosis: [{ symptom: '通用 API 返回 50KB JSON，移动端只用了 5KB', cause: '不必要的 over-fetching——后端不做区分。', fix: '①移动端专属 BFF——只返回移动端需要的字段②可选字段机制（?fields=id,name,summary）③GraphQL 替代 BFF（声明式字段选择）④响应压缩（gzip/br）减少传输。' }],
    exercises: [
      { level: '基础', task: 'BFF 和 API Gateway 有什么区别？', hint: '通用 vs 定制', answer: 'API Gateway：通用入口（路由/限流/鉴权），通常一个所有前端共享。BFF：特定前端专属聚合层（返回该前端需要的格式和数据）。API Gateway 是基础设施，BFF 是业务层。实践中 API Gateway 在前面做路由/安全，BFF 在 Gateway 后面做聚合。' },
      { level: '进阶', task: '设计一个"BFF 层自动生成"方案：基于下游服务的 schema 和前端需求描述自动生成 BFF', hint: 'DSL + 代码生成', answer: '①前端声明需要的字段：{ user: { name, avatar, recentPosts(limit:3) { title } } }②后端提供各服务的 schema（Protobuf/OpenAPI）③BFF 生成器：解析前端声明→确定调用哪些下游→生成聚合代码（并行的 RPC→拼装→返回）④BFF 自动缓存可缓存的子查询结果⑤类似 GraphQL 但 backend 端实现。' },
    ],
  },

  "kl4upCnnZvJSf2uII1Pa0": {
    mentalModel: 'Claim Check 就像行李托运——你拿一个小票（引用），而不是随身扛着行李箱（大 payload）。消息队列中只传引用（如 S3 文件路径），接收方用引用去取实际数据。减少了 MQ 的传输和存储开销。',
    sections: [
      { title: 'Claim Check 模式', content: '适用场景：消息需要携带大的 payload（图片/视频/大 JSON），但消息队列对消息大小有限制（Kafka 默认 1MB，RabbitMQ 理论上无限但不建议）。解决：①将大 payload 存到外部存储（S3/Redis/DB）②消息中只存资源的 key/URL③消费者通过引用取回数据。然而增加了延迟（额外的一次 Fetch）。例子：视频处理管道——上传视频到 S3→MQ 传 "s3://bucket/video-uuid.mp4"→Worker 下载视频处理。' },
    ],
    diagnosis: [{ symptom: '消息队列满是因为消息太大', cause: '直接在消息体中传大文件/大数据。', fix: '①使用 Claim Check：大 payload 存 S3，消息只传引用②分片消息：超大消息拆成多个小消息③压缩 payload（gzip/br）④设置消息大小限制（拒绝超过限制的消息）。' }],
    exercises: [
      { level: '基础', task: 'Kafka 消息最大多大？超过限制怎么办？', hint: '1MB default', answer: 'Kafka 默认 max.message.bytes=1MB。可调到 10MB 但不推荐——大消息影响 broker 性能。超过限制的方案：①Claim Check 存 S3②分片消息③用其他传输方式（HTTP 直传）④压缩。' },
      { level: '进阶', task: '设计一个"自动 Claim Check"中间件：消息 > N KB 时自动转为 Claim Check，对生产者和消费者透明', hint: '中间件拦截', answer: '①生产者 SDK 在发送前检查消息大小 > threshold(100KB)→截获→payload 存 S3→消息替换为引用②消费者 SDK 在接收后检查消息是否为引用→是则自动从 S3 拉取→恢复完整 payload③引用包含 TTL（S3 自动过期）④SDK 内部处理重试和超时⑤对应用层透明：业务代码感觉不到 Claim Check。' },
    ],
  },

  "4hi7LvjLcv8eR6m-uk8XQ": {
    mentalModel: 'Anti-Corruption Layer（防腐层）是新旧系统边界的"海关翻译"——旧系统的数据格式/术语/逻辑和新系统完全不同，防腐层在中间翻译，防止旧系统的"腐臭"渗透到新系统中。',
    sections: [
      { title: '防腐层实践', content: '收购或集成遗留系统时：①定义新系统的领域模型（Clean DDD Model）②防腐层作为适配器：旧系统接口→ACL→新系统模型。ACL 职责：术语翻译（旧系统叫 "CUST_ID"→新系统叫 "customerIds"）、数据结构转换（XML→JSON/Protobuf）、协议转换（SOAP→REST/gRPC）。Eric Evans 在《领域驱动设计》中提出这个模式。' },
    ],
    diagnosis: [{ symptom: '新系统代码中充斥着旧系统的字段名和逻辑', cause: '没有防腐层——集成时直接用了旧系统的 API 和数据结构，旧系统的概念污染了新系统。', fix: '①明确新旧系统边界②所有旧系统调用通过 ACL 层③ACL 负责模型翻译——新系统不应该知道旧系统的字段名④ACL 使用新系统的领域语言定义接口⑤旧系统下线后，只需删除 ACL 层——新系统代码完好。' }],
    exercises: [
      { level: '基础', task: '防腐层和普通 Adapter 模式有什么区别？', hint: '意图：隔离 vs 适配', answer: '普通 Adapter：让两个不同接口一起工作。防腐层：不仅适配接口，而且防止旧系统的架构/设计/命名污染新系统。ACL 是保护性的——旧系统的任何改变都不影响新系统内部。Adapter 是功能性——只做转换。' },
      { level: '进阶', task: '设计一个"ACL 测试策略"：确保旧系统被替换后新系统不需改代码', hint: '合同测试 + 模型隔离', answer: '①ACL 定义成接口（AntiCorruptionInterface）②旧系统实现 ACL 接口③新系统只依赖 ACL 接口④单元测试：Mock ACL 接口测试新系统⑤合同测试：ACL 实现 vs 旧系统 API⑥迁移新系统时：新系统只需新的 ACL 实现，核心代码不变。' },
    ],
  },

  "eNFNXPsFiryVxFe4unVxk": {
    mentalModel: 'Async Request Reply（异步请求-响应）是"发了邮件等回信"——你发了请求后干别的事，收到回复时再处理。不像同步调用那样必须原地等待。HTTP 请求进队列→Worker 处理→回复放结果队列→客户端消费结果。',
    sections: [
      { title: '实现方式', content: '①双队列模式：请求队列（客户端→Worker）+ 响应队列（Worker→客户端）。②回调 URL：客户端在请求中提供 callback URL，Worker 完成后 POST 结果。③消息关联：请求和响应用 correlation_id 关联。④WebSocket：请求异步处理，完成后通过 WebSocket 推送结果。⑤HTTP 202 Accepted + Location 头（返回 task 状态的 URL）+ 轮询。' },
    ],
    diagnosis: [{ symptom: '异步请求完成后客户端没收到回应', cause: '响应队列被错误消费、回调 URL 不可达、correlation 失败。', fix: '①客户端设置响应超时（超时=丢弃等待）②响应队列持久化且只有请求发起者消费③回调 URL 失败重试+fallback 轮询④响应带 complete 标记和 TTL——客户端可根据 correlationId 查询。' }],
    exercises: [
      { level: '基础', task: '异步请求-响应和纯消息队列（Fire-and-Forget）有什么区别？', hint: '是否需要回复', answer: 'Fire-and-Forget：发了就忘——不等待回复（如日志/通知）。Async Request Reply：发了后等回复——通过 reply queue/callback/reply channel 获得结果。前者是单项通信，后者是双向异步通信。' },
      { level: '进阶', task: '设计一个"异步 Request-Reply"支持超时和 fallback。请求 30 秒无回复→返回默认值', hint: '超时机制+fallback', answer: '①Client 发送请求，启动 30 秒超时计时器②Client 同时监听 reply queue（filter by correlation_id）③Client 收到 reply→取消计时器→返回 result④计时器触发→取消等待→返回 fallback 结果⑤Worker 完成时如果 client 已超时→结果丢弃（但记录日志供事后查询）⑥Client 提供"稍后查询"链接（GET /task/{correlation_id}）以防用户想等。' },
    ],
  },

  // ==================== Reliability & Security Patterns ====================
  "DYkdM_L7T2GcTPAoZNnUR": {
    mentalModel: '可靠性模式=系统的"防震建筑标准"——地震（故障）来临时，建筑会晃动但不倒塌。Circuit Breaker（熔断）、Bulkhead（隔舱）、Retry（重试）、Throttling（限流）构成可靠性四件套。',
    sections: [
      { title: '可靠性四件套', content: '①Circuit Breaker：下游挂了就别调了（快速失败好过排队等待）→保护下游，也给上游提示。②Bulkhead：隔离不同服务的连接池/线程池→A 服务出问题不影响 B。③Retry：临时失败自动重试（但要带退避+限制）→从瞬时故障恢复。④Throttling：限制请求速率→保护系统不被突发流量打垮。Netflix Hystrix 实现了前两个，Resilience4j 是继任者。' },
    ],
    diagnosis: [{ symptom: '库 A 超时导致所有使用这个连接池的服务都被阻塞', cause: '没有 Bulkhead 隔离——各服务共享一个连接池。', fix: '①为每个下游服务分配独立的连接池/线程池②设置每个池的大小上限③超时 + 快速失败（不排队）④监控每个池的饱和度和被拒绝请求数。' }],
    exercises: [
      { level: '基础', task: 'Circuit Breaker 的三种状态：CLOSED、OPEN、HALF_OPEN 各自含义', hint: '正常→熔断→尝试恢复', answer: 'CLOSED：正常通行——请求允许通过。失败数达阈值→切换 OPEN。OPEN：拒绝所有请求（快速失败）→过 sleep window→切换 HALF_OPEN。HALF_OPEN：允许少量请求试探→成功→CLOSED，失败→重新 OPEN。' },
      { level: '进阶', task: '设计一个"多级可靠性"方案：不同风险级别的操作应用不同的可靠性策略', hint: '分级熔断', answer: 'L1（关键：支付）：Circuit Breaker + Retry 3次 + 独立 Bulkhead 池 + 全局超时 2s。L2（重要：搜索）：Circuit Breaker + Retry 1次 + shared pool。L3（非关键：推荐）：Throttling + no retry（失败降级默认推荐）。统一用 Resilience4j 配置不同策略。' },
    ],
  },

  "Xzkvf4naveszLGV9b-8ih": {
    mentalModel: '可用性=确保系统"开着的"。冗余（多副本）、故障转移（自动切换）、健康检查（自动摘除故障节点）是可用性三要素。目标不是永不宕机（不可能），而是宕机时间降到可接受范围（5 个 9 = 5 分钟/年）。',
    sections: [
      { title: '高可用架构要素', content: '①消除单点故障（SPOF）：每个关键组件至少 2 个实例（LB、DB、Cache）②自动故障转移：检测故障→自动切换→通知运维③跨 AZ/Region 部署：一个数据中心挂了其他继续工作④优雅降级：部分功能不可用时核心功能仍可用⑤冗余成本：高可用=更多硬件+更复杂的运维。AWS 是可用性工程的教科书——EC2 99.99%、S3 99.999999999% 持久性。' },
    ],
    diagnosis: [{ symptom: '主数据库挂了后手动切换花了 30 分钟', cause: '没有自动故障转移——手动切换流程不熟或缺少演练。', fix: '①部署自动故障转移（MySQL MHA/Orchestrator、Redis Sentinel）②定期灾难演练（每季度一次）③故障转移 SOP 文档（并且是自动化为脚本）④监控切换速度（目标 < 60 秒）。' }],
    exercises: [
      { level: '基础', task: '一个系统要求 99.9% 可用性，允许年宕机多少？', hint: '365×24×60×(1-0.999)', answer: '365×24×60×0.001 = 525.6 分钟 ≈ 8.76 小时。折算=每天 1.44 分钟。所以每次部署、故障、维护加起来不能超过这个时间。' },
      { level: '进阶', task: '设计一个"跨 3 个 Region"的高可用架构：任何 1 个 Region 挂掉不影响服务', hint: '多 Region 多活', answer: '①DNS 做 Region 级路由（延迟路由+健康检查+故障转移）②每 Region 内完整部署（LB+App+DB+Cache）③数据：DB 跨 Region 异步复制，单 Region 写入④Redis 每 Region 独立部署（缓存不跨 Region）⑤故障转移：Region 挂→DNS 自动移除故障 Region 的 IP→流量分流到健康 Region⑥回切：故障恢复后灰度切回流量。' },
    ],
  },

  "wPe7Xlwqws7tEpTAVvYjr": {
    mentalModel: '高可用（High Availability）= 机场的双跑道——一条跑道维护或故障时，另一条跑道继续起降。关键是自动切换和乘客无感。',
    sections: [
      { title: 'HA 架构模式', content: '①Active-Passive：主备——主机工作，备机待命。切换有短暂中断（<30s）。②Active-Active：双活——两台同时工作。无中断，但数据冲突需解决。③N+M 冗余：N 台工作+ M 台备用。④云原生 HA：K8s Deployment（replicas: 3）自动保证 3 个 Pod 运行——Pod 挂了自动重建。AWS Multi-AZ RDS 自动 HA。' },
    ],
    diagnosis: [{ symptom: '主备切换后部分数据丢失', cause: '异步复制延迟——主库故障时从库还没收到最后几秒的数据。', fix: '①改用半同步复制（至少一个从库确认收到）②RPO（恢复点目标）量化：允许丢失多少数据（如 1 秒的交易）③主从切换前检查 replication lag < 1s④金融系统需同步复制（write quorum）。' }],
    exercises: [
      { level: '基础', task: 'Active-Active 和 Active-Passive 各适合什么场景？', hint: '成本 vs 一致性', answer: 'Active-Active：成本高但零切换中断、资源利用率高。适合：大规模 Web 应用、多 Region 部署。挑战：数据冲突解决。Active-Passive：成本低但切换有中断。适合：简单数据库 HA（MySQL 主从）、小型应用。' },
      { level: '进阶', task: '设计一个"数据库 Active-Active"方案：两个 Region 各有一套 MySQL，都能写入', hint: '冲突解决 + 双向复制', answer: '①使用 MySQL Group Replication 或 Galera 多主②冲突解决：auto_increment_offset/step 不同保证 ID 不冲突③应用层：同一用户的请求通过 DNS 路由到同一个 Region（减少跨 Region 冲突）④不能解决的问题：两地同时修改同一订单→LWW 或保留冲突版本⑤实际上大部分公司（包括 Google Spanner）都避免多主写入，选择单 Region 写入+其他 Region 读。' },
    ],
  },

  "wlAWMjxZF6yav3ZXOScxH": {
    mentalModel: 'Resiliency（弹性）= 橡胶球和玻璃球的区别——橡胶球掉地上弹起来（弹性系统），玻璃球碎了（脆弱系统）。弹性系统的设计哲学：快速恢复 > 永远不坏。',
    sections: [
      { title: '弹性的含义', content: '弹性 = 系统从故障中恢复的能力。不同于可用性（防止故障），弹性承认故障必然发生，关注如何在故障后快速恢复。Netflix Chaos Monkey 主动制造故障验证弹性——随机终止生产环境的 EC2 实例。Simian Army 扩展这个理念：Chaos Gorilla（杀整个 AZ）、Latency Monkey（注入延迟）。如果系统扛不住故障，说明设计有问题。' },
    ],
    diagnosis: [{ symptom: '故障恢复后系统不稳定——频繁出现新的小问题', cause: '恢复过程中引入了新问题（缓存过期、连接池未预热）。', fix: '①恢复演练中考虑"恢复后的稳定性"②监控恢复后 30 分钟内的错误率/延迟③渐进恢复（先引入 10% 流量慢慢加）④恢复 checklist（缓存预热、DB 连接池恢复、外部依赖重连）。' }],
    exercises: [
      { level: '基础', task: 'Chaos Engineering 核心思想是什么？和普通故障演练有什么区别？', hint: '主动注入 vs 被动响应', answer: '普通故障演练：被动模拟已知的故障场景。Chaos Engineering：主动在生产环境中引入随机故障验证系统弹性。核心假设：复杂系统的故障模式不可预测，唯一的验证方式是"炸"一下看是否恢复。从发现系统中隐藏的脆弱点。' },
      { level: '进阶', task: '设计一个"弹性评分"系统：综合测量系统的弹性，计算 RTO/RPO 之外的指标', hint: '多维度评估', answer: '评估维度：①故障检测时间（MTTD Mean Time to Detect）= 从故障发生到检测到的时间②恢复时间（MTTR）= 从检测到恢复的时间③降级程度=故障时有多少功能仍可用④用户影响=故障持续期间受影响的用户比例⑤自愈率=无需人工干预自动恢复的比例。总弹性分 = w1×MTTD + w2×MTTR + w3×降级 + w4×影响 + w5×自愈。' },
    ],
  },

  "FPPJw-I1cw8OxKwmDh0dT": {
    mentalModel: 'Deployment Stamps（部署印记）是"复制整套模板"——为不同客户或地区部署完全独立的、相同的系统副本。就像快餐连锁：每家麦当劳（stamp）使用相同的厨房流程（模板），但食材（数据）独立。',
    sections: [
      { title: 'Deployment Stamps 使用场景', content: '①多租户 SaaS：为每个大客户部署独占的 stamp（数据隔离+资源隔离）②地理分布：美国 stamp、欧洲 stamp（遵循 GDPR 数据本地化）③故障隔离：stamp 之间完全独立——A stamp 挂了不影响 B④弹性扩展：新增 stamp 即可扩展容量。Azure 建议为每个 region+客户组各部署一个 stamp。成本高于共享多租户但隔离性最优。' },
    ],
    diagnosis: [{ symptom: 'Stamp 多了之后管理混乱——各 Stamp 版本不一致', cause: 'Stamp 的部署没有统一管理——有些升级了有些没升级。', fix: '①Stamp 作为 IaC 模板管理（Terraform/ARM/Bicep）②所有 Stamp 用同一套 CI/CD Pipeline 更新③金丝雀更新：先升级 1 个 stamp，验证后批量升级其余④Stamp 版本追踪——Dashboard 显示各 stamp 版本。' }],
    exercises: [
      { level: '基础', task: 'Deployment Stamps 和普通的 Scale-Out 有什么区别？', hint: '完全隔离 vs 共享状态', answer: 'Scale-Out：多个实例共享同一个数据库/缓存。Deployment Stamps：每个 stamp 是完全独立的系统副本（包括自己的数据库/缓存/配置）。Scale-Out 共享数据，Stamp 隔离数据。Scale-Out 更省资源，Stamp 更安全/隔离。' },
      { level: '进阶', task: '设计一个"Stamp 扩缩容"方案：根据客户需求自动 add/remove stamp', hint: '自动化编排', answer: '①Stamp 模板（Terraform module）定义标准组件栈②新建 stamp：触发 Pipeline→创建资源（DNS/LB/DB/App）→健康检查→加入路由③数据导入：从现有 stamp 或模板 DB dump 初始化（如预置基础数据）④销毁 stamp：通知客户→数据导出给客户→优雅关闭流量→删除资源→验证无残留⑤成本：按 stamp 计费（像 SaaS 一样计费）。' },
    ],
  },

  "Ml9lPDGjRAJTHkBnX51Un": {
    mentalModel: 'Geode 是"地质节点的分布"——把数据和服务分散到全球各地，用户访问最近的那个节点。和 CDN 不同：Geode 节点有完整的业务逻辑，不仅是静态内容。用户请求被路由到最近的活跃 Geode。',
    sections: [
      { title: 'Geode 架构', content: '①每个地理区域一个完整的系统副本（Geode）②DNS Anycast 或 Global LB 将用户路由到最近的 Geode③数据跨 Geode 异步复制④一个 Geode 挂了，流量自动转到相邻 Geode⑤与 Deployment Stamp 不同：Geode 强调地理分布+延迟优化；Stamp 强调隔离+多租户。AWS 的 Local Zones 和 Wavelength 就是 Geode 思想的体现。' },
    ],
    diagnosis: [{ symptom: 'Geode 间数据冲突——用户在 Geode A 写了数据，去 Geode B 看到旧数据', cause: '跨 Geode 异步复制延迟+未正确处理冲突。', fix: '①写操作 sticky——同一用户的请求尽量路由到同一个 Geode（DNS sticky）②跨 Geode 冲突采用 LWW+Causal Consistency③读关键数据时从多个 Geode 查询取最新版本④延迟显示在 UI 上（"数据同步中..."）。' }],
    exercises: [
      { level: '基础', task: 'Geode 和 CDN 的核心区别是什么？', hint: '静态 vs 动态', answer: 'CDN：缓存静态内容（图片/CSS/视频），无业务逻辑。Geode：完整的系统副本（含应用服务+数据库），有完整业务逻辑。Geode = 全球部署的完整应用栈，CDN = 全球缓存的静态资源。' },
      { level: '进阶', task: '设计一个"Geode 化的微服务"：3 个全球 Geode，就近读全局写，最终一致性', hint: 'DynamoDB Global Tables 思维', answer: '①每个 Geode 内部完整部署（LB+App+DB+Cache）②读：所有读在本地 Geode 完成（延迟<10ms）③写：写入本地 Geode 的数据库④跨 Geode 同步：异步复制到其他 Geode（DynamoDB Global Tables 或自研 CDC 复制）⑤冲突：使用 last-writer-wins⑥混合读写：关键数据的写需要 2/3 Geode 同意（降低不一致风险）。' },
    ],
  },

  "6YVkguDOtwveyeP4Z1NL3": {
    mentalModel: 'Throttling（限流）是高速公路入口的匝道信号灯——每隔几秒放几辆车进高速，防止高速路一次性涌入太多车导致全线拥堵。系统容量有限，超过容量的请求不应该进入系统。',
    sections: [
      { title: '限流算法', content: '①Token Bucket（令牌桶）：定速生成 token，请求需持有 token 才能通过。可以容忍突发（桶中积攒的 token 能支撑短时突发）。②Leaky Bucket（漏桶）：请求进桶→定速漏出。不能突发，平缓输出。③Fixed Window：每时间窗起计数，超上限拒绝。简单但边界突刺。④Sliding Window：滑动窗口计数——比 Fixed Window 平滑。⑤Redis + Lua：分布式限流实现。Google/youtube 使用令牌桶限制 API 调用。' },
    ],
    diagnosis: [{ symptom: '限流阈值设得太高没起作用，系统被流量打爆', cause: '阈值基于"平均 QPS"而非"峰值 QPS"——峰值是平均的 3-5 倍。', fix: '①设置基于压力测试得出的真实容量上限②限流阈值设为容量的 80%（留 20% headroom）③自适应限流：根据系统实际负载动态调整阈值（延迟增加→降低阈值）④入口限流+各下游逐级限流形成多层防护。' }],
    exercises: [
      { level: '基础', task: 'Token Bucket 和 Leaky Bucket 的核心区别？', hint: '突发容忍', answer: 'Token Bucket：允许突发（桶有空余 token 时可突发消费）。Leaky Bucket：不允许突发（严格按恒定速率输出）。API 限流常用 Token Bucket（允许用户短时间高调用），网络流量整形常用 Leaky Bucket（平滑输出避免突发丢包）。' },
      { level: '进阶', task: '设计一个"分层限流"方案：全局限流 + 租户级限流 + API 级限流', hint: '逐级检查', answer: '①全局限流（L4 LB 层）：整个系统 max 10 万 QPS②租户级限流（API Gateway 层）：大客户 max 5000 QPS，小客户 max 100 QPS③API 级限流（应用层）：POST /orders max 100 QPS per tenant④超配策略：全局限额 = 各租户限额之和×1.1（10% 超配容忍）⑤逐级检查：请求先过全局→租户→API 三层限流，任一拒绝即返回 429。' },
    ],
  },

  "PLn9TF9GYnPcbpTdDMQbG": {
    mentalModel: 'Bulkhead（隔舱）是船舶设计思想——船体被分成多个密封隔舱，一个舱进水其他舱不受影响。服务中用独立的资源池（线程池/连接池）为不同下游划分隔舱——下游 A 超时不阻塞下游 B 的请求。',
    sections: [
      { title: 'Bulkhead 实现', content: '①线程池隔离：每个下游服务分配独立的线程池（ThreadPool Bulkhead）——下游 A 超时只会用光 A 的池，不影响 B。②信号量隔离：每次调用需获取信号量许可，池满即拒绝——轻量但无法限制超时中的调用③连接池隔离：为不同下游分配独立的 HTTP 连接池④资源限制：每个下游的最大并发请求数 = 线程池大小。Resilience4j Bulkhead 支持 ThreadPool + Semaphore 两种模式。' },
    ],
    diagnosis: [{ symptom: '下游服务响应变慢，导致整个应用不可用', cause: '所有请求共享同一个连接池/线程池（无 Bulkhead）——一个慢下游耗尽了所有可用连接，其他下游的请求在队列中等待超时。', fix: '①为每个下游分配独立的线程池②设置池大小上限③设置每个请求的 timeout④监控各池的利用率和等待时间⑤自动熔断（Circuit Breaker）作为额外保护。' }],
    exercises: [
      { level: '基础', task: 'Bulkhead 和 Circuit Breaker 的区别和互补？', hint: '隔离 vs 阻断', answer: 'Bulkhead：隔离资源——A 出问题不影响 B 的资源。Circuit Breaker：自动阻断——A 出问题后直接拒绝请求 A（不排队等待）。两者互补：Bulkhead 防止 A 拖跨 B，Circuit Breaker 防止 A 继续浪费自己的资源（快速失败）。' },
      { level: '进阶', task: '设计一个"自适应 Bulkhead"：根据下游服务健康状态动态调整线程池大小', hint: '动态调整池', answer: '①基础池大小 = 10（保证最低并发）②弹性容量：下游 P99<100ms→池扩至 20，100ms-500ms→维持 10，>500ms→池缩至 3（减少资源浪费）③池满时拒绝请求并快速失败④定期检查指标调整池大小⑤新连接建立时 slow-start（逐渐增加到目标池大小）。' },
    ],
  },

  "O4zYDqvVWD7sMI27k_0Nl": {
    mentalModel: 'Circuit Breaker（断路器）是电气保险丝——电路短路时保险丝熔断（开），切断电流防止火灾。在系统中：下游连续失败超过阈值→断路器 OPEN（拒绝请求）→等待恢复窗口→HALF_OPEN（试探）→成功则 CLOSE（恢复）。',
    sections: [
      { title: '断路器参数', content: '①failureRateThreshold：失败率阈值（如 50%）②waitDurationInOpenState：OPEN 状态持续多久后转 HALF_OPEN③ringBufferSizeInClosedState：CLOSED 时记录多少次调用来计算失败率④ringBufferSizeInHalfOpenState：HALF_OPEN 时允许多少次试探调用⑤automaticTransitionFromOpenToHalfOpenEnabled：是否自动从 OPEN 转 HALF_OPEN。Resilience4j 和 Hystrix 都基于这些参数。Netflix 将断路器推广到业界。' },
    ],
    diagnosis: [{ symptom: '断路器频繁 OPEN/CLOSE 振荡', cause: '阈值设得太灵敏或恢复窗口太短——短暂恢复后就 CLOSE 然后立刻又失败 OPEN。', fix: '①增加 waitDurationInOpenState（10s→30s）②降低 failureRateThreshold（50%→30%）③增加 ringBufferSize（增大样本窗口）④退避的 OPEN 恢复（连续 OPEN 增加惩罚时间）。' }],
    exercises: [
      { level: '基础', task: '熔断和重试有什么区别？能同时使用吗？', hint: '退避 vs 阻断', answer: '重试：失败后短暂延迟再试。断路：失败到阈值后停止所有重试（阻断请求）。组合使用：CLOSED 状态允许重试（exponential backoff + jitter）；失败达到阈值→断路器 OPEN→拒绝请求（不重试）→释放资源。两者是重试在前、熔断在后。' },
      { level: '进阶', task: '设计一个"慢调用断路器"：不仅按失败率，还按延迟来熔断', hint: 'Slow Call Ratio', answer: '①记录每次调用的耗时②统计慢调用率 = (耗时 > 阈值) 的调用 / 总调用③断路器触发条件：错误率 > 阈值 OR 慢调用率 > 阈值④场景：下游服务不报错但都超 5 秒（未达到错误阈值但用户体验差）⑤Resilience4j 支持 slowCallRateThreshold 和 slowCallDurationThreshold 实现这个。' },
    ],
  },

  "cNJQoMNZmxNygWAJIA8HI": {
    mentalModel: 'Health Endpoint Monitoring = 系统的心电监护——持续监测各组件的心跳和脉搏。/health 端点不仅检查自己，还检查 DB/Redis/MQ 是否还"活着"，让 LB/K8s 及时摘除不健康的节点。',
    sections: [
      { title: '健康检查实现', content: '①浅度检查（Liveness）：进程运行、端口监听→K8s liveness probe（httpGet /health）。②深度检查（Readiness）：依赖健康→DB ping/Redis ping/MQ connect→K8s readiness probe。③功能检查：关键业务流程端到端验证（能否完成下单）④外部检查：Pingdom/CloudWatch Synthetics 从外部探测⑤健康检查频率：Liveness 10s，Readiness 5s，功能检查 1min。' },
    ],
    diagnosis: [{ symptom: 'K8s readiness probe 把正常节点也标记为 unhealthy', cause: 'Readiness 检查太复杂或超时太低——DB ping 超时 1 秒但 probe 也超时 1 秒就判断失败。', fix: '①调整探针超时时间（给依赖检查预留足够时间）②检查 DB ping 是否用了连接池（复用连接快速检查）③避免把所有依赖的深度检查塞在一个 readiness 端点（分层暴露）④设置 failurethreshold: 3（连续失败 3 次才摘除）。' }],
    exercises: [
      { level: '基础', task: 'K8s readiness probe 失败后会发生什么？', hint: '流量摘除', answer: 'Readiness 失败→K8s 从 Service endpoints 中移除该 Pod→停止向该 Pod 发送流量→Pod 仍在运行但不接收新请求→Probe 恢复后自动重新加入。Pod 不会被重启（那是 Liveness probe 的职责）。' },
      { level: '进阶', task: '设计一个"分级健康检查"API：/health/live、/health/ready、/health/critical', hint: '不同深度', answer: '①/health/live：经量，只检查进程存活（liveness probe 用）②/health/ready：中量，检查关键依赖连通性（readiness probe 用）③/health/critical：重量，执行 smoke test（下单/支付端到端流程），供外部监控用。各 endpoint 独立超时和频率，避免一个慢检查影响其他。' },
    ],
  },

  "MNlWNjrG8eh5OzPVlbb9t": {
    mentalModel: 'Compensating Transaction（补偿事务）= 银行撤销错误转账——不是魔法般"撤销"，而是发起一个反向操作把账做平。Saga 模式的基础：每个正向操作都有对应的逆向补偿。',
    sections: [
      { title: '补偿事务实践', content: '在 Saga 模式中：①Saga Step 1：扣减库存→如果 Saga 失败，补偿 = 恢复库存②Saga Step 2：创建订单→补偿 = 取消订单③Saga Step 3：扣余额→补偿 = 退款。如果 Step 3 失败，Saga Coordinator 会反向执行补偿（退款→取消订单→恢复库存）。注意：补偿不是回滚（数据库的 ROLLBACK），而是对业务世界的外部行动。已发给用户的邮件不可能"收回"，补偿 = 发道歉更正邮件。' },
    ],
    diagnosis: [{ symptom: '补偿失败——退了款但库存没恢复', cause: '补偿操作本身没有重试和持久化——发了退款请求但库存恢复请求失败被忽略。', fix: '①补偿也需持久化（持久化补偿任务）②补偿失败重试③补偿操作幂等④保存已完成步骤的状态→从失败步骤开始补偿⑤如果补偿彻底失败（不可能恢复的），转为人工修复流程。' }],
    exercises: [
      { level: '基础', task: '补偿事务和数据库 ROLLBACK 有什么区别？', hint: '外部 vs 内部', answer: 'ROLLBACK：数据库内部的原子操作——所有修改一起撤销，对外部世界（发邮件/API 调用）无感知。补偿事务：对已发生的对外部有影响的操作做逆向操作——退款、取消订单、发更正邮件。ROLLBACK 是纯内部、补偿是业务操作。' },
      { level: '进阶', task: '设计一个"Saga 补偿框架"：每个参与的服务注册正向操作+补偿操作，框架自动调度和执行补偿', hint: '补偿引擎 + 持久化日志', answer: '①每个服务实现 SagaParticipant 接口：doAction() + compensate()②Saga Coordinator 维护 Saga 日志（执行到哪步、状态）③正向执行：coordinator 调 doAction①→②→③④失败时：coordinator 逆序调 compensate③→②→①⑤持久化 Saga 每一步的结果⑥Saga 日志可恢复——coordinator 重启后从日志恢复并继续等待或补偿。' },
    ],
  },

  "xX_9VGUaOkBYFH3jPjnww": {
    mentalModel: 'Retry 是"再试一次"的乐观策略——网络超时不一定是服务端挂了，可能是暂时性包丢失。重试能超过 90% 的瞬时故障，但要防止重试变成重试风暴。',
    sections: [
      { title: '重试策略', content: '①Exponential Backoff：1s→2s→4s→8s→放弃②Exponential Backoff + Jitter：base×(random(0.8,1.2))，分散重试时间③Retry-Budget：限制每分钟重试总量④Non-Idempotent 请求不重试（POST/PATCH）⑤Only Safe HTTP Methods：GET/PUT/DELETE 可以安全重试⑥设置 maxAttempts（3-5 次）和 retryOn（Exceptions 类型）。' },
    ],
    diagnosis: [{ symptom: '重试导致服务雪崩——下游已经恢复，但上游还在海里重试', cause: '所有重试用相同的退避时间（都重试到第 1 秒）形成脉冲。', fix: '①加入 Jitter 随机分散重试②使用熔断器兜底③限制总的并发重试数④监控重试率——高重试率才是问题根源需要修复。' }],
    exercises: [
      { level: '基础', task: '为什么幂等的 GET 请求可以安全重试，POST 不行？', hint: '副作用', answer: 'GET 没有副作用（不修改数据），重试 10 次和第 1 次一样。POST 创建资源，重试 1 次=创建 1 个新资源。POST 重试需幂等 key 配合。' },
      { level: '进阶', task: '设计一个"智能重试"：分析错误类型决定是否重试——5xx 重试，4xx 不重试，超时重试但有上限', hint: '错误分类', answer: '分类：①5xx（服务端临时故障）→重试 3 次②429（限流）→等 Retry-After header 指定的时间→重试 1 次③4xx（客户端错）→不重试④Timeout →重试 2 次（可能是网络丢包）⑤Connection refused→等退避后重试 1 次（对方可能正在重启）⑥识别特定错误码决定不同的策略。Spring Retry 支持自定义 retryOn/retryNotOn。' },
    ],
  },

  "ZvYpE6-N5dAtRDIwqcAu6": {
    mentalModel: '安全（Security）是银行金库——多层次防护：外围墙（防火墙）、铁门（认证）、保险柜（加密）、监控探头（审计）。每层突破代价递增，让攻击变得不值得。',
    sections: [
      { title: '纵深防御', content: '①边界安全：WAF/DDoS 防护/IP 白名单②认证：JWT/OAuth2.0/SAML/OpenID Connect③授权：RBAC/ABAC/JWT Scopes④传输安全：TLS 1.3/证书管理⑤数据安全：静态加密（AES-256）+字段级加密⑥密钥管理：AWS KMS/HashiCorp Vault⑦审计日志：记录所有关键操作+防篡改日志。不要依赖单一安全层——假设每层都可能被突破，设计多重防线。' },
    ],
    diagnosis: [{ symptom: 'JWT Token 被盗——攻击者模拟用户操作', cause: 'JWT 存储在不安全位置（localStorage）或过长的过期时间。', fix: '①JWT 存在 HttpOnly/Secure Cookie（防 JS 读取）②缩短 token 有效期（15 分钟）+ Refresh Token③Refresh Token Rotation（每次刷新颁发新 refresh token）④Token 黑名单（签出后拒绝使用）。' }],
    exercises: [
      { level: '基础', task: 'OAuth2.0 的 4 种授权模式各自适用场景', hint: 'Authorization Code/Client Credentials/Implicit/Password', answer: 'Authorization Code：Web 应用前后端分离（最安全，code 换 token）→用于 SSO。Client Credentials：服务间认证（client_id+secret 自己换 token）。Implicit：SPA（已弃用，改用 PKCE）。Password：高度信任的应用（已不推荐）。' },
      { level: '进阶', task: '设计一个"零信任架构"API 安全方案：不做网络边界假设，每个请求都验证', hint: 'Zero Trust + mTLS + 持续验证', answer: '①所有请求 mTLS 双向认证（服务间调用需要各自的 TLS 证书）②JWT 短期有效（5 分钟）+ 持续验证（token 内嵌 device/location/behavior context）③每一个服务验证 JWT 后还需检查授权（RBAC + ABAC）④访问日志实时分析异常行为检测⑤假设内网也不安全，所有通信需要加密和认证。Google BeyondCorp 是零信任实践。' },
    ],
  },

  "lHPl-kr1ArblR7bJeQEB9": {
    mentalModel: 'Federated Identity（联合身份）= 国际驾照——你的本国驾照（你自己的 login system）在成员国（其他信任的网站）通用。你不必在每个网站上注册新账号，用 Google/GitHub/Apple 一键登录。',
    sections: [
      { title: '联合身份标准', content: '①SAML 2.0：企业级 SSO（Salesforce/Office 365）②OpenID Connect：基于 OAuth2.0 的身份验证层（Google/Apple Login）③JWT as ID Token：携带用户信息（sub/email/name）④SSO（Single Sign-On）：一个企业内一次登录所有系统⑤Federation Gateway：多个 IdP 的聚合入口（AWS Cognito/Auth0/Okta）。' },
    ],
    diagnosis: [{ symptom: '联合身份中 ID Token 数据过时——用户信息变更了但 token 内是旧的', cause: 'ID Token 不刷新——签发后内容固化。', fix: '①ID Token 短期有效（5-15 分钟）②UserInfo endpoint 拉取最新用户信息③用户信息变更时刷新 token④OIDC Backchannel Logout：用户注销时通知所有 RP 同时注销。' }],
    exercises: [
      { level: '基础', task: 'OAuth2.0 和 OpenID Connect 的关系是什么？', hint: '授权 vs 认证', answer: 'OAuth2.0：授权框架（允许 A 应用访问 B 的资源——"我允许你替我取我的照片"）。OpenID Connect：基于 OAuth2.0 的身份认证层（"告诉我你是谁"）——OAuth2.0 拿到 access_token 后，OIDC 额外返回 id_token（JWT）包含用户身份信息。OAuth=授权，OIDC=认证。' },
      { level: '进阶', task: '设计一个"多 IdP 联合身份 Gateway"：支持 Google/GitHub/企业 SAML 登录统一入口', hint: 'Auth0 模式', answer: '①Gateway 支持多个 IdP connector（OIDC/SAML 各一个）②用户选择 IdP→redirect 到 IdP 登录→IdP 回调 Gateway→Gateway 解析 identity→生成统一的内部 JWT③内部系统只验证内部 JWT（不知道哪个 IdP 来源）④支持账户链接（同一用户用不同 IdP 登录后关联到同一内部账号）⑤Gateway 统一处理 token 刷新和注销。' },
    ],
  },

  "DTQJu0AvgWOhMFcOYqzTD": {
    mentalModel: 'Gatekeeper 是"安检卡口"——大门外先验身份＋检查携带物品，通过后才放行进入大厦（内部服务）。Gatekeeper 在边界处完成安全检查和请求验证，内部服务认为所有经过 Gatekeeper 的请求都是安全的。',
    sections: [
      { title: 'Gatekeeper 模式', content: '①所有外部请求经过 Gatekeeper（应用网关/防火墙/安全代理）②Gatekeeper 职责：认证验证+授权检查+请求验证（参数/大小/格式）③Gatekeeper 转发"已验证"的请求到内部服务④内部服务信任来自 Gatekeeper 的请求（不需重复验证）。与 Ambassador 的区别：Ambassador 是外向的（代内部服务访问外部），Gatekeeper 是内向的（保护内部服务不受外部攻击）。' },
    ],
    diagnosis: [{ symptom: '某些恶意请求通过了 Gatekeeper 到达内部服务', cause: 'Gatekeeper 的验证不够严格——只验了认证没验授权，或没验请求参数。', fix: '①Gatekeeper 做多层验证：认证→授权→参数格式→参数值域→限流②请求内容扫描（SQL injection/XSS pattern 检测）③深度检查（body 结构竟然符合 Swagger schema）④对内部请求 gateway 添加验证标记（signed token）——内部服务也检查 token 防止绕过。' }],
    exercises: [
      { level: '基础', task: 'Gatekeeper 和 API Gateway 有什么区别？', hint: '安全 vs 路由', answer: 'Gatekeeper 聚焦安全验证（认证授权请求检查）。API Gateway 聚焦路由管理（URL 路由/限流/聚合/协议转换）。大部分 API Gateway 也包括了 Gatekeeper 功能。但在关键系统中 Gatekeeper 可能是独立的安全层（如 Nginx AppSec/WAF）。' },
      { level: '进阶', task: '设计一个"双层 Gatekeeper"：第一层在公网边缘（DDoS/基本防火墙），第二层在应用入口（认证/授权/参数验证）', hint: '分层防御', answer: '第一层（CDN/WAF/Cloudflare）：①DDoS 清洗②IP 黑白名单③SQL 注入/XSS 基本规则④大量无关流量直接被挡在外部。第二层（API Gateway Gatekeeper）：①JWT 验证+签名检查②Authorization scope 检查③请求 body schema 验证④限流/配额检查。未通过第一层的流量永不碰内部网络，通过两层后才到达业务服务。' },
    ],
  },

  // ==================== Remaining Patterns (Duplicates & Final) ====================
  "LTD3dn05c0ruUJW0IQO7z": {
    mentalModel: 'CQRS（命令查询职责分离）是银行柜台的"进窗口"和"出窗口"——存取款（命令）走复杂验证流程，查询余额（查询）走快速通道。两个通道独立的系统，互不干扰。',
    sections: [
      { title: 'CQRS 深入', content: '命令模型注重一致性（严格校验+事务写入），查询模型注重性能（去规范化视图+缓存）。两者通过事件同步。写进 MySQL→binlog→Kafka→ES→读从 ES。写延迟 50ms，读延迟 2ms。优势：读写独立扩缩，读模型可为了性能做任何优化（反规范化/缓存/全文搜索）不影响写模型。' },
    ],
    diagnosis: [{ symptom: 'CQRS 读写模型同步延迟导致查询结果不一致', cause: '事件处理有延迟——用户写了数据但读模型还没更新。', fix: '①监控 lag②给写操作返回 write_token，读时可选带 token 验证③UI 上显示"处理中"状态④合理设置 SLA（lag<1s 是可接受的最终一致性）。' }],
    exercises: [
      { level: '基础', task: 'CQRS 增大系统复杂度，什么场景才值得用？', hint: '读远大于写或读写模型截然不同', answer: '①读写比 > 10:1②读模型和写模型结构差异巨大（写是规范化行，读是聚合视图）③需要不同数据库优化读写（写下 MySQL，读从 ES）④需要独立扩展读写能力⑤有复杂的事件驱动架构基础。简单 CRUD 不需要 CQRS。' },
      { level: '进阶', task: '设计一个"轻量 CQRS"：用同个 DB 但读写不同表，无需事件总线', hint: 'DB 端 CQRS', answer: '①写表（orders）：规范化 schema，支持事务②读表（order_summaries）：反规范化宽表，包含所有展示字段③写操作更新写表后同步更新读表（同个事务内）④读操作只查读表⑤简单有效——不需要额外的事件总线或数据库，适合中等规模。' },
    ],
  },

  "PK4V9OWNVi8StdA2N13X2": {
    mentalModel: 'Cache-Aside（旁路缓存）是"自取外卖"——查的时候先去缓存窗口（Redis）看有没有，有就拿走；没有就去厨房（DB）取并放一份在缓存窗口给下次的人。',
    sections: [
      { title: 'Cache-Aside 完整流程', content: '读路径：①请求缓存→hit 返回②miss→请求 DB→结果写回缓存（带 TTL）→返回。写路径：①更新 DB→②删除缓存（不是更新）→下次读重建缓存。为什么删缓存而不是更新？避免并发写导致缓存是旧值；缓存可能是复杂计算/聚合的结果，与其重新计算不如 lazy 重建。' },
    ],
    diagnosis: [{ symptom: '缓存和 DB 不一致', cause: '删除缓存失败（Redis 失去连接）或并发读写的时序问题。', fix: '①删除缓存失败重试②延迟双删：删缓存→更新 DB→等 500ms→再删缓存③监听 binlog→异步补偿删除④设置短暂 TTL 兜底（即使删失败 TTL 过期后也会一致）。' }],
    exercises: [
      { level: '基础', task: 'Cache-Aside 和 Write-Through 的选择依据？', hint: '写后读频率', answer: 'Cache-Aside：写后通常不读（后台批量更新），写入快但首次读 miss。适合写多读少。Write-Through：写后通常会读（用户更新资料后看效果），读取总是命中但写入慢。适合写少读多。' },
      { level: '进阶', task: '设计一个"Cache-Aside + 延迟双删"的统一缓存管理器：对所有缓存操作统一，不需要开发者关心细节', hint: 'AOP 拦截', answer: '①@CacheAside(prefix="user", ttl=600) 注解②读：方法执行前→查缓存→hit→返回；miss→执行方法(查 DB)→缓存结果→返回③写：方法执行后→删缓存→等待延迟(200ms)→再次删缓存④延迟用定时任务异步执行⑤对开发者完全透明——只需加注解。' },
    ],
  },

  "BrgXwf7g2F-6Rqfjryvpj": {
    mentalModel: 'External Config Store = "中央设置库"——大楼中所有电器共用一个中央设置面板。不用到每个房间手动调整——一次改配置，所有节点感知。K8s ConfigMap/Consul KV/AWS Parameter Store 是实践。',
    sections: [
      { title: '配置中心', content: '①环境配置集中管理（服务名/数据库 URL/开关标志）②运维时不改代码改配置③动态更新：应用监听配置变更自动重载（Feature Flag/AB Test 需要）④敏感配置加密存储（密码/API Key→Vault/Secrets Manager）⑤配置版本化+审查 trail。Spring Cloud Config/Nacos/Apollo 是国内常用配置中心。' },
    ],
    diagnosis: [{ symptom: '修改配置后部分节点未生效', cause: '应用缓存了旧配置且没有监听配置更新的机制。', fix: '①配置中心提供 Watch/长轮询机制（etcd watch/Consul watch）②应用订阅配置变更事件并主动 reload③定期检查配置版本号（force refresh）④K8s 中 ConfigMap 更新后需重启 Pod 或用 sidecar 热加载。' }],
    exercises: [
      { level: '基础', task: 'ConfigMap 和环境变量的选择依据？', hint: '动态更新 vs 简单', answer: 'ConfigMap：支持动态更新、可存复杂配置（YAML/JSON）、集中管理。环境变量：简单直接、12-Factor App 标准、但需重启才能生效。对需要动态更新的配置（开关、阈值）用 ConfigMap + 热加载；对固定配置（数据库连接）用环境变量也可以。' },
      { level: '进阶', task: '设计一个"配置版本控制+灰度"系统：新配置先在 1% 节点生效，验证成功再全量', hint: '配置灰度 + 回退', answer: '①配置带版本号（v1/v2）②配置 Label 控制目标节点（version=v2, target=canary）③金丝雀节点带标签 canary=true→只收到 v2 配置④监控金丝雀节点指标（错误率/延迟）⑤正常→全量发布（所有节点切 v2），异常→回退所有节点到 v1⑥保留配置变更历史（谁改了什么什么时候）。' },
    ],
  },

  "9Ld07KLOqP0ICtXEjngYM": {
    mentalModel: 'Competing Consumers（竞争消费者）是"抢工作"模式——多个 Worker 同时监听同一个消息队列，收到消息时唯一一个人抢到并处理。就像食堂阿姨端出一盘菜，一群饿汉只有一个人能吃到。',
    sections: [
      { title: 'Competing Consumers 设计', content: '①多个消费者 sharing 同一队列（或 Kafka Consumer Group）②每条消息只被一个消费者处理③消费者数动态增减——新增 Worker 自动参与消费④消费失败的自动 Redelivery（re-queue）⑤Kafka Consumer Group 实现：每个 partition 只由 group 中的一个 consumer 消费——增加 partition 才能增加 concurrency。' },
    ],
    diagnosis: [{ symptom: 'Competing Consumers 中某条消息被多个消费者并行处理', cause: '消息 ACK 超时后 Broker 重新分配给了另一个消费者——结果重复执行。', fix: '①消费者处理逻辑幂等（去重）②设置合理的 ack timeout（大于消息处理时间）③Kafka enable.auto.commit=false（手动 commit offset），方法完成后才 commit④幂等 key 存储在 DB/Redis 去重。' }],
    exercises: [
      { level: '基础', task: 'RabbitMQ 中，3 个消费者消费同一 queue，每条消息会被几个消费者处理？', hint: '竞争模式', answer: '1 个。RabbitMQ 默认 Round-Robin 分发——每条消息给一个消费者。3 个消费者共享 queue 可以增加 3 倍吞吐。这是 Competing Consumers 最纯粹的形式。' },
      { level: '进阶', task: '设计一个"公平分发"的 Competing Consumers：处理快的消费者应该多消费', hint: 'prefetch count', answer: '①RabbitMQ：设置 prefetch_count=1（每次只预取 1 条消息→处理完才取下一条→快的消费者自然多处理）②Kafka：partition 分配无法随处理速度调整（同一 partition 内的消息必须顺序处理）→可利用 relax 分区数+消费者重分配③自定义调度：消费者处理完后主动上报"ready"状态，调度器动态分配。' },
    ],
  },

  "ODjVoXnvJasPvCS2A5iMO": {
    mentalModel: 'Compute Resource Consolidation（计算资源整合）= 多人合租一套房——本来各自租单人公寓（各自独立 VM），现在搬到同一个大房子（共享 VM Pool）。节省成本但也要防止吵闹邻居（Noisy Neighbor）。',
    sections: [
      { title: '资源整合', content: '①多个轻负载服务部署在同一 VM/Node（降成本）②K8s Pod 调度等于资源整合——多个 Pod 共享同一 Node 的 CPU/内存③优先级和 QoS：Guaranteed（固定分配）> Burstable（可突发）> BestEffort（剩下的）④合理超配：Node 总资源 limit 可以超过物理资源（假设不会同时满）⑤监控实际使用量避免过度超配。' },
    ],
    diagnosis: [{ symptom: '多个服务挤在同一台机器上，其中一个 CPU 飙升影响所有服务', cause: '资源限制未设置或 CPU 被某个服务抢走。', fix: '①K8s resource request+limit 强制限制每个容器的 CPU/内存②CPU throttling 监控——被 throttle 的容器 = 需要更多 CPU③使用 CPU affinity 将关键服务固定在特定核④必要时将 CPU 敏感服务迁移到独占 Node。' }],
    exercises: [
      { level: '基础', task: 'K8s 中 resource request 和 limit 的区别？', hint: '保证 vs 上限', answer: 'request：调度时至少分配的资源（决定 Pod 放到哪个 Node）。limit：运行时资源的上限（不能超过）。request 是底线，limit 是天花板。Node 上 request 总和不能超过 Node 容量（调度限制），limit 总和可以超过（超配）。' },
      { level: '进阶', task: '设计一个"智能 Node 分配"：根据服务的历史资源使用模式分配 Node，防止 Noisy Neighbor', hint: '历史分析 + 亲和/反亲和', answer: '①监控每个服务过去 7 天的 CPU/内存使用模式②识别"燃烧型"服务（高峰期间 CPU 使用暴增）= 标记 burst_heavy③"安静型"服务（使用量稳定）= 标记 stable④Node 分组：把 burst_heavy 分散到不同 Node（反亲和），stable 可以密集部署⑤定时重新评估资源使用模式。' },
    ],
  },

  "Hja4YF3JcgM6CPwB1mxmo": {
    mentalModel: 'Ambassador 是"国际大使"——代表本国（内部服务）在另一国家（外部系统）行使外交（调用）。内部服务不用管对外部的协议/认证/重试细节，大使（Ambassador sidecar）全权处理。',
    sections: [
      { title: 'Ambassador 模式', content: '①Ambassador 是内部服务的外部代理——内部服务调 localhost:port，Ambassador 转发到外部系统②职责：协议转换（HTTP→gRPC）、认证附加（添加 API Key）、重试/熔断、TLS 加密③与 Sidecar 关系：Ambassador 是一种特殊的 Sidecar——专用于外部通信④与 API Gateway 区别：Gateway 是全局入口，Ambassador 是每个服务的单独出口。Twilio Proxy 和 Envoy 做 Ambassador 是常见实践。' },
    ],
    diagnosis: [{ symptom: '外部服务的 API 变更后所有内部服务都需改代码', cause: '外部 API 调用直接写在业务代码中——没有 Ambassador 隔离。', fix: '①将外部 API 调用封装在 Ambassador 中②Ambassador 对外暴露稳定的内部接口③只有 Ambassador 需要更新以匹配外部 API 变更④业务代码只依赖内部接口，不受外部 API 变动影响。' }],
    exercises: [
      { level: '基础', task: 'Ambassador 和 Sidecar 和 API Gateway 的关系和区别？', hint: '内向 vs 外向 vs 全局入口', answer: 'Sidecar：通用辅助容器（日志/监控/代理）。Ambassador：特殊的 Sidecar 专门处理对外部系统的调用（出站）。API Gateway：全局入口，处理所有进入系统的流量（入站）。Ambassador 是一个服务的出站代理，Gateway 是整个系统的入站代理。' },
      { level: '进阶', task: '设计一个"智能 Ambassador"：自动选择最佳的外部 API 端点（就近/最便宜/最快）', hint: '多 endpoint 选择', answer: '①Ambassador 维护外部服务的多个 endpoint（US/EU/AP 各一个）②Ambassador 实时测量各 endpoint 延迟③默认选择延迟最低的→本地最近的④成本优化：off-peak 时选择更便宜的 endpoint（预留 instacne）⑤故障转移：endpoint 挂了切到下一个⑥后台可选 RefId 返回相同 backend（sticky 会话）。' },
    ],
  },

  "LncTxPg-wx8loy55r5NmV": {
    mentalModel: 'Queue-Based Load Leveling = "蓄水池"——流入速度（请求）不恒定，但流出速度（处理）恒定。队列作为缓冲区，削平流量高峰。双 11 大促时请求先拉开蓄水池中排队，Worker 按自己节奏处理，不冲击后面的系统。',
    sections: [
      { title: '负载均衡队列', content: '①用消息队列作为 burst buffer——高峰期请求入队，Worker 从容处理②队列容量有限——满了就拒绝（保护下游）③对用户：异步响应（task_id→稍后查询）④监控队列深度——持续增长说明 Worker 处理不过来需要扩容⑤与 Token Bucket 限流互补：限流拒绝更早，队列拒绝更晚但更平缓。AWS SQS + Auto Scaling 是基于队列的长度自动扩 Worker 的经典实践。' },
    ],
    diagnosis: [{ symptom: '队列长度不断增长，Worker 处理不过来', cause: 'Worker 处理能力不足——消息进入速度 > 消费速度。', fix: '①增加 Worker 数量（Auto Scaling based on queue depth）②优化 Worker 处理逻辑（减少处理耗时）③如果 queue 深度超过阈值告警——考虑扩充 Worker 或拒绝新请求④部分低优先级消息可延迟处理或丢弃。' }],
    exercises: [
      { level: '基础', task: '基于队列的负载均衡和普通负载均衡的区别？', hint: '同步 vs 异步', answer: '普通 LB：同步——请求立即转发到后端，后端处理完返回结果。队列均衡：异步——请求进排队，Worker 抽空处理，客户端不等待结果。普通 LB 不减请求速率，队列能缓冲速率波动，让后端以自己的节奏处理。' },
      { level: '进阶', task: '设计一个"Auto Scaling based on Queue Depth"：K8s HPA 根据 SQS/Kafka Lag 自动扩 Worker Pod', hint: 'KEDA', answer: '①KEDA（Kubernetes Event-Driven Autoscaling）监控 SQS queue length/Kafka consumer lag②lag > 100→扩容（+2 Worker Pods）③lag < 10→缩容（-1）④设置 minReplicas=2（至少 2 Worker）和 maxReplicas=20⑤冷却时间：扩容后 2 分钟内不缩容防止振荡⑥缩容时要优雅退出（drain 现有消息再停机）。' },
    ],
  },

  "DZcZEOi7h3u0744YhASet": {
    mentalModel: 'Priority Queue 是"VIP 通道"——重要的事情标记为 VIP 放进专门通道，正常事情排普通通道。缺点（starvation）：VIP 太多了，普通人怕一辈子排不到。需要防饥饿机制。',
    sections: [
      { title: '优先级队列实现', content: '①多级队列（P1/P2/P3 物理独立队列）②Worker 优先消费高优先队列——P1 空了才消费 P2，P2 空了才消费 P3③Redis Sorted Set 做优先级队列：score=priority_level+timestamp→按优先级+同优先级 FIFO④防饥饿：低优先级消息在队列中超过 T 时间→自动升级⑤真实案例：GitHub Actions 的 Runner 使用优先级队列调度——紧急任务（Security Patch）插队执行。' },
    ],
    diagnosis: [{ symptom: '低优先级任务永远得不到处理', cause: '高优先级任务持续不断——每次有机会处理低优时又有新高优任务进来。', fix: '①低优先级老化升级——超过 N 分钟未处理自动升级②高优比例限制——每处理 N 个高优必须处理 1 个低优③专用 Worker：保留部分 Worker 专门处理低优先级队列④监控各优先级队列深度和平均等待时间。' }],
    exercises: [
      { level: '基础', task: 'Redis 如何实现优先级队列？', hint: 'Sorted Set', answer: 'ZADD tasks 1 "task:low" 2 "task:medium" 3 "task:high" → ZPOPMAX tasks 每次都取最高优先级的。score 可以：priority_level×1e12 + timestamp，既保证优先级顺序又保证同优先级 FIFO。' },
      { level: '进阶', task: '设计一个"动态优先级"系统：任务优先级随时间变化（快过期的任务自动提升优先级）', hint: '加权计算', answer: '①优先级 score = base_priority×deadline_factor。deadline_factor = 1/(minutes_till_deadline+1)②越接近 deadline 的任务分数越高③重新计算间隔：每分钟重新计算所有待处理任务的分数④Western Digital SSD 固件中实时更新任务优先级用类似机制⑤防抖：不要让优先级变化太剧烈导致任务重排序。' },
    ],
  },

  "WkoFezOXLf1H2XI9AtBtv": {
    mentalModel: 'Pipes and Filters = 工厂流水线——原数据→过滤器 A（清洗）→过滤器 B（转换）→过滤器 C（验证）→过滤器 D（最终输出）。每个过滤器独立、可重用、可替换，管道（pipe）连接过滤器。',
    sections: [
      { title: '管道过滤器模式', content: '①每个 Filter 是独立的处理单元——单职责②Pipe 负责传递数据（消息队列/管道）③Filter 可以并行处理（独立无状态）④灵活编排：A→B→C→D 或 A→B→E→D 或 A→B+C→D⑤例子：Logstash（input→filter→output）、Kubernetes admission webhooks、图像处理管道。Apache Camel/Spring Integration 是基于这个模式的集成框架。' },
    ],
    diagnosis: [{ symptom: '管道中某个 Filter 成为瓶颈——上下游积累了但堵在这一步', cause: 'Filter 处理耗时过长——其他 Filter 很快但被这个慢 Filter 拖慢全局。', fix: '①慢 Filter 并行化——部署多个实例并发处理②分析慢 Filter 的性能瓶颈优化③管道拆分：把慢 Filter 的输出分流到多个不同的处理分支④监控各 Filter 的处理速率（消息数/秒）。' }],
    exercises: [
      { level: '基础', task: 'Pipes and Filters 和 Chain of Responsibility 模式有什么区别？', hint: '并行 vs 串行单链', answer: 'Pipes and Filters：消息经管道流过多个 Filter，每个 Filter 都能处理（类似组装线）。Chain of Responsibility：一个对象在链中传递直到一个 Handler 处理了它（类似问题解决递交通道）。CoR 是一人处理完成，PF 是每人都处理一遍。' },
      { level: '进阶', task: '设计一个"可编排的 Pipes and Filters"：用 YAML 定义处理管道，DSL 启动管道', hint: '声明式管道定义', answer: '①Pipeline DSL/YAML 定义：pipeline: name: order-processing→ filters: [validate→enrich→risk_check→persist]②每个 Filter 实现统一接口：process(msg)→msg③编排引擎：解析 YAML→实例化 Filter→启动处理④并行处理：每个 Filter 可有 replicas: 3 指定并发实例数⑤管道分支：risk_check 的 output→approve→persist 或→reject→notify→通过 split/join 实现。' },
    ],
  },

  "2ryzJhRDTo98gGgn9mAxR": {
    mentalModel: 'Publisher/Subscriber = 新闻发布台——发布者发布新闻，所有订阅者同时收到。和消息队列的点对点不同，Pub/Sub 是一对多广播。订单支付→发货通知、积分发放、通知邮件、审计日志——四个订阅者都收到同一事件。',
    sections: [
      { title: 'Pub/Sub 实现', content: '①Topic（主题）是发布通道——生产者 pub 到 Topic②Subscriber 订阅 Topic——收到所有 pub 的消息③支持过滤——只接收特定类型的事件④Kafka Consumer Group 内是队列模式（competition），跨 Group 是 Pub/Sub⑤Google Cloud Pub/Sub、AWS SNS+SQS、Redis PUBLISH/SUBSCRIBE 是不同实现。' },
    ],
    diagnosis: [{ symptom: 'Subscriber 没能收到消息——消息丢失', cause: 'Subscriber 离线时消息被丢弃（Redis Pub/Sub 是 fire-and-forget——不能存储历史消息）。', fix: '①用持久化 Pub/Sub（Kafka 保留消息/Google Pub/Sub 保留未消费消息 7 天）②Subscriber 断线后能从上次点继续消费③Redis 的 Pub/Sub 仅适合实时推送+接收方始终在线+消息不重要的场景。' }],
    exercises: [
      { level: '基础', task: 'Pub/Sub 和 Message Queue 的核心区别？', hint: '一对多 vs 一对一', answer: 'Pub/Sub：一对多——消息被所有订阅者收到。Message Queue：一对一——消息被一个消费者处理。Pub/Sub 用于事件广播（多系统需知），Queue 用于任务分发（一个 Worker 执行）。' },
      { level: '进阶', task: '设计一个"事件网格"：多个 Topic 多级 Pub/Sub，支持消息过滤和路由', hint: 'Topic + Subscription + Filter', answer: '①Topic 按业务域（order_events/user_events/payment_events）②Subscription：subscriber 生命想要接收哪些 Topic 的消息③Filter：基于事件属性的庄重过滤（event_type="order.created"）④消息路由：特定条件的事件路由到专属处理通道⑤Event Grid（Azure）/ EventBridge（AWS）实现了类似能力。' },
    ],
  },

  "LXH_mDlILqcyIKtMYTWqy": {
    mentalModel: 'Gateway Routing = 大楼前台——根据访客的目的，前台指引他们到不同楼层/房间。Gateway 基于请求的 URL/Host/Header 决定路由到哪个后端服务。/api/users→用户服务，/api/orders→订单服务，/admin→管理后台。',
    sections: [
      { title: 'Gateway 路由策略', content: '①路径路由：/api/users/** → UserService②Host 路由：api.example.com vs admin.example.com③Header 路由：x-api-version: v2→新版服务④权重路由：加权分配（灰度发布）⑤地域路由：基于来源 IP 的最远数据 sever⑥自定义路由（Script）：复杂业务规则决定路由。nginx/Envoy/Kong 均支持。' },
    ],
    diagnosis: [{ symptom: '路由配置错误——/api/user 和 /api/users 指向了不同的服务', cause: '路由规则冲突——前缀匹配导致一个请求匹配了多个规则。', fix: '①测试路由规则表：对所有 URL 执行匹配检测是否有重叠②优先级排序——精确匹配优先于前缀匹配③Gateway 提供路由测试工具④部署路由配置变更前运行 automated test。' }],
    exercises: [
      { level: '基础', task: 'Nginx 中如何配置基于路径的路由？写一个配置示例', hint: 'location 块', answer: 'location /api/users/ { proxy_pass http://user-service; } location /api/orders/ { proxy_pass http://order-service; } location / { proxy_pass http://frontend; }。按最长的 location 匹配优先。' },
      { level: '进阶', task: '设计一个"动态路由更新"Gateway：路由变更无需重载 Gateway', hint: 'xDS 协议', answer: '①Gateway 通过 xDS 协议从 Control Plane 同步路由配置②Control Plane 提供 API 管理路由表③路由变更→Control Plane 推送新配置到 Gateway→Gateway 热重载配置④支持 canary 路由——流量 5% 送到新版本的路由⑤Envoy + Istio 默认支持这种动态路由。' },
    ],
  },

  "0SOWAA8hrLM-WsG5k66fd": {
    mentalModel: 'Gateway Offloading = 大管家承包杂务——SSL 终止、请求/响应 gzip 压缩、日志、限流、鉴权全归 Gateway 做。后端服务只做纯业务逻辑，不计较这些杂事。',
    sections: [
      { title: 'Offloading 内容', content: '①SSL Offloading：Gateway 处理 TLS 解密，后端用 HTTP（降低 CPU 开销）②压缩：Gateway 压缩响应（gzip/br），节省带宽③限流/鉴权/日志：集中化处理④Static Resource：静态文件直接从 Gateway 分发（不经过应用服务器）⑤Response Transform：加响应头（CORS/Security headers）⑥Health Check：Gateway ping 后端做健康检测。Nginx 和 Envoy 的 Offloading 效果好。' },
    ],
    diagnosis: [{ symptom: '后端所有服务都重复实现 SSL/日志/限流', cause: '没有 Gateway Offloading——每个服务都自己处理这些非功能需求。', fix: '①部署统一 API Gateway②Gateway 处理所有非功能横切需求③后端服务专注纯业务逻辑④后端服务可用 HTTP（internal network），性能更高。' }],
    exercises: [
      { level: '基础', task: 'SSL Offloading 的安全性考虑——Gateway 和后端之间用 HTTP 安全吗？', hint: '内网 + 防火墙', answer: '如果 Gateway 和后端在同一 VPC/安全组内（内网隔离），HTTP 通常安全。但如果必须跨公网——Gateway 和后端间也需要 TLS（re-encrypt）。Zero Trust 思想：内网也可能被攻破，建议 Gateway→后端也 TLS。' },
      { level: '进阶', task: '设计一个"全配置 Gateway Offloading"：无需写代码，用配置就能完成所有 offloading 功能', hint: '声明式配置', answer: 'Gateway 配置 YAML：routes: /api/users→  backend: user-service  offload: ssl_termination: true  rate_limit: 100/s  auth: JWT  compression: true  logging: true。Gateway 引擎解读配置自动应用所有 offloading。Kong 的 declarative config 就是这种模式。' },
    ],
  },

  "bANGLm_5zR9mqMd6Oox8s": {
    mentalModel: 'Gateway Aggregation = 采购员——不让你跑 5 家店买一样东西，是采购员跑 5 家店然后一次性给你。Gateway 并行调用多个后端服务，把结果拼装成一个响应返回。减少前端的请求数。',
    sections: [
      { title: '聚合策略', content: '①并行调用：Gateway 同时调用用户服务+订单服务+通知服务→组装结果②顺序调用：A 的结果作为 B 的输入③部分聚合：只聚关键数据，非关键数据前端单独请求④缓存中间结果⑤超时和 fallback：个别调用超时，返回不完整但可用的结果（graceful degradation）。Netflix Falcor 和 GraphQL 都有聚合思想。' },
    ],
    diagnosis: [{ symptom: '聚合层超时——其中一个后端服务慢拖累了整个响应', cause: '所有调用都在等这个慢服务。', fix: '①并行调用并设置每个调用的单独超时②慢服务超时后返回空/缓存数据/默认值③不阻塞关键响应——先返回主数据，辅数据 (extra) 异步获取④监控：哪个后端是瓶颈一目了然。' }],
    exercises: [
      { level: '基础', task: 'Gateway Aggregation 和 BFF 有什么区别？', hint: '通用 vs 前端专属', answer: 'Gateway Aggregation：通用汇总层，统一为所有前端聚合。BFF：特定前端专属聚合层（Mobile BFF 聚合不同字段组合）。两者都可聚合，但 BFF 针对特定前端优化，Gateway 聚合是通用数据服务。实践中可两层并用。' },
      { level: '进阶', task: '设计一个"低延迟聚合"Gateway：并行调用多个后端，只要 N-1 个返回就向客户端发送响应', hint: 'scratch off 优化', answer: '①Gateway 并行发起 5 个调用②按响应重要性分批——关键数据（必须等 3 个），次要数据（等 1 个），额外数据（0 等）③关键数据 + 部分次要数据准备好了就返回→剩下的额外数据通过 server-sent events 推送④设置全局最大等待时间（300ms）→超时就返回已就绪的数据⑤监控各调用的 P50/P99。' },
    ],
  },

  "R6YehzA3X6DDo6oGBoBAx": {
    mentalModel: 'Sharding（分片）是将大部队分成不同帐篷——按兵种（数据键）分配到各自独立的"战斗群"。每个战斗群独立作战（独立处理查询），不互相牵制。每群只能看到自己的兵力——跨群协同需要额外努力。',
    sections: [
      { title: '分片模式选择', content: '①键值分片：hash(key) % N（简单但不灵活）②范围分片：[A-M] 和 [N-Z]（容易理解但可能倾斜）③目录分片：查目录决定 key 在哪个 shard（最灵活但额外查询）④地理分片：数据按所属 region 分⑤功能分片：不同功能模块的数据库分离（不基于 key）。MongoDB 和 Vitess 有原生分片支持。' },
    ],
    diagnosis: [{ symptom: '加了分片后跨分片查询性能差', cause: '应用层做 Join/聚合需跨多个 Shard——分散-收集的性能瓶颈。', fix: '①避免跨 shard JOIN（设计上确保关联数据在同一 shard）②用分布式查询引擎（Presto/Spark SQL）③用 Elasticsearch 建全局搜索索引（从所有 shard 聚合成统一搜索）④反规范化+冗余存储避免跨 shard。' }],
    exercises: [
      { level: '基础', task: '4 个分片用 hash(key) % 4，想扩展到 8 个分片。最少迁移多少数据？', hint: '一致性哈希 vs 取模', answer: '用 %N 扩展必然迁移大量数据（~75% 需要重定位）。一致性哈希将迁移量降到 1/N（~12.5%）。取模分片迁移数据量大，一致性哈希迁移少。' },
      { level: '进阶', task: '设计一个"分片自动 rebalance"方案：数据倾斜时自动迁移部分分片到新节点', hint: '自动重平衡', answer: '①监控各 shard 的 CPU/磁盘/QPS②倾斜检测：某个 shard 的负载 > 其他 shard 平均负载 2×持续 30 分钟③触发 rebalance：分裂该 shard 的热点 key range→迁移一部分到空闲节点④在线迁移期间路由表实时更新→零停机⑤迁移完成后更新路由表（一致性哈希调整）。Redis Cluster 的 slot 迁移和 MongoDB 的 chunk 迁移都是类似原理。' },
    ],
  },

  "izPT8NfJy1JC6h3i7GJYl": {
    mentalModel: 'Static Content Hosting = 大仓库——图片/CSS/JS/字体预先放在世界各地的 CDN 仓库中，用户就近取货。静态内容不变，缓存最久。纯静态网站（文档站/博客）可以完全存在 CDN+对象存储中，零服务器成本。',
    sections: [
      { title: '静态内容最佳实践', content: '①全放在对象存储（S3/GCS/OSS）+ CDN 前缘②文件名 content hash（bundle.2024a13.js）：内容变更=新文件名，缓存永远不过期③gzip/brotli 压缩 + CloudFront/GCS 自动解压④Cache-Control: public, max-age=31536000, immutable（永不过期）⑤HTML 不缓存或短缓存（<5min）——保证更新快速传播。' },
    ],
    diagnosis: [{ symptom: '发布了新版本的 JS 但用户仍看到旧版', cause: 'CDN 缓存旧版本文件——文件名未变导致旧文件长期缓存。', fix: '①文件名加 content hash——新版本新文件名（bundle.abc123.js vs bundle.def456.js）②新 HTML 引用新文件名——自动绕过旧缓存③旧文件 Graceful 过期（CDN 中保留一段时间供旧 HTML 引用）。' }],
    exercises: [
      { level: '基础', task: '为什么静态资源文件要用 content hash 命名？', hint: '缓存失效', answer: '内容变了=文件名变了=有新的 URL=CDN 自动当新对象缓存。旧 URL 自然消失（TTL 过期前旧版 HTML 仍引用）。新旧版本同时存在直到旧版 TTL 过期。避免了 purge CDN 缓存的麻烦。' },
      { level: '进阶', task: '设计一个"全静态 SPA 部署"方案：React/Vue 打包后放 S3+CloudFront，零服务器', hint: 'S3 Static Hosting + CDN + API', answer: '①React build→生成静态文件（index.html+JS chunks）②部署到 S3 bucket（Static Website Hosting enabled）③CloudFront 前缘指向 S3④API 指向动态后端（/api 路径在 CloudFront behavior 指向 API Gateway）⑤SPA Routing：CloudFront 配置所有路径返回 index.html（处理 client-side routing）⑥成本：$0 服务器费，只按 CDN+S3 请求计费。' },
    ],
  },

  "siXdR3TB9-4wx_qWieJ5w": {
    mentalModel: 'Pipes and Filters = 加工流水线。每个过滤器是加工站，管道是连接传送带。处理管道—→验证联系→丰富信息→发送通知（串联处理）。不符合条件的剔除，符合条件的继续传递。',
    sections: [
      { title: '管道应用', content: '①日志处理管道：收集→解析→过滤→索引→存储（Elastic Stack）②图片处理管道：上传→格式验证→压缩→缩略图生成→CDN sync③CI/CD Pipeline：代码→build→test→package→deploy④数据处理流：Kafka streams/flink 处理管道⑤Apache Camel 原生管道集成。失败可回退：ACID 的 commit 落在各 Filter。' },
    ],
    diagnosis: [{ symptom: '管中步骤 3 总是慢——堆积了大量消息', cause: '步骤 3（比如网络调用）延迟是前两步的 10 倍——成为瓶颈。', fix: '①让步骤 3 多实例并行（Kafka 增加 partition 数）②异步化步骤 3（发 MQ 后不等回复）③管道分离：把慢步骤单独成管道——其他步骤不受拖累④监控各步骤的消息速率/Hang 消息数。' }],
    exercises: [
      { level: '基础', task: 'Jenkins Pipeline 是典型的 Pipes and Filters 模式——画出 Stage 示意', hint: 'Stage = Filter', answer: 'Stage(Build)→Stage(Test)→Stage(Package)→Stage(Deploy)。每个 Stage 是一个 Filter，之间的数据传递通过 workspace artifact（pass via archive）。一个 Stage 失败=管道中断（不再执行后续）。' },
      { level: '进阶', task: '设计一个"并行管道"：不同产品各有管道，但共享初始化步骤（Filter1），之后分叉', hint: 'Fork/Join', answer: '①Filter1（共享初始化）→ Fork（product A/B/C 不同路径）②A:B:C 并行各自管道③各管道独立成功/失败（不互相影响）④ Optional Join：所有管道完成后收集结果汇总⑤Pipeline DSL 定义：fork: [pipelineA, pipelineB, pipelineC]→join→collect。' },
    ],
  },

  // ==================== Performance Antipatterns ====================
  "p--uEm6klLx_hKxKJiXE5": {
    mentalModel: '性能反模式是常见"坑"的汇编——每个新系统都会犯其中几个错误。理解它们不是为羞耻，而是为预先避开最基本的错误。就像知道了"不要把所有钱放一个口袋"就不会被一刀切。',
    sections: [
      { title: '最常见的 5 个反模式', content: '①Busy Database：所有逻辑都在 DB 里（存储过程），DB CPU 是瓶颈。②No Caching：能缓存的都不缓存，每次请求穿透 DB。③Chatty I/O：微服务间调用链过长，1 个请求引发 50 次 RPC。④Synchronous I/O：非核心路径同步等待（发邮件等 2 秒）。⑤Monolithic Persistence：所有数据存同一个数据库（日志+订单+会话）。' },
      { title: '识别和预防', content: '定期做负载测试（Load Testing）暴露瓶颈——模拟 10x 正常流量看看哪里先炸。记录每个请求的"时间预算"：外部调用 < 200ms，DB 查询 < 50ms，缓存 < 5ms。超过预算就要问为什么。Netflix 用 Chaos Engineering 主动注入故障来发现性能弱点。' },
    ],
    diagnosis: [{ symptom: '系统缓慢但监控看起来正常', cause: '可能是多个反模式同时作用：缓存命中率低+数据库慢查询+N+1 RPC 调用。', fix: '①APM 工具（Datadog/New Relic）追踪端到端调用链②分布式追踪（Jaeger/Zipkin）看时间花哪了③逐个消除反模式：先把最容易改的（加缓存）解决，再优化调用链。' }],
    exercises: [
      { level: '基础', task: '列出你见过的或听过的 3 个性能瓶颈场景', hint: 'DB 慢、缓存无、同步阻塞', answer: '常见：①接口慢→发现没加索引，全表扫描 ②微服务调用慢→追踪发现 8 次 RPC 串行调用 ③页面加载慢→静态资源没 CDN，JS bundle 2MB。' },
      { level: '进阶', task: '设计一个"性能反模式自动检测"的方案：如何在代码或监控中发现这些反模式？', hint: '静态分析 + 动态监控', answer: '静态检测：①SQL 无 LIMIT→检测代码中裸 SELECT ②循环中调 RPC→代码审查 ③未设置 HTTP timeout→默认值检测。动态检测：①追踪中 >5 次 RPC 串行→告警 ②缓存命中率 <50%→问题 ③DB 慢查询 >1s→记录。规则引擎定期扫描。' },
    ],
  },

  "hxiV2uF7tvhZKe4K-4fTn": {
    mentalModel: 'Busy Database 是"全家的饭都一个人做"——存储过程、业务逻辑、报表查询全压在数据库身上。数据库本来是存数据的，你让它又算报表又发邮件又执行业务规则，结果它什么都做不好。',
    sections: [
      { title: '为什么 Busy Database 是反模式', content: '数据库的 CPU/IO 是相对稀缺且难以水平扩展的资源。把业务逻辑放在 DB 层（存储过程/触发器）意味着每次业务调整都要改 DB schema、每次扩容都要 scale DB。实际场景：某公司用 MySQL 存储过程计算推荐列表，用户量增长后 DB CPU 100%，无法水平扩展。迁移到应用层 Java 计算后，DB 仅负责数据存取，应用层可随意加机器。' },
      { title: '正确做法', content: 'DB 只做数据存取（CRUD + 简单聚合）。业务逻辑在应用层（Service/Worker）。复杂查询用读写分离（读副本+物化视图）。报表/分析类查询走数据仓库（OLAP）而非在线库（OLTP）。存储过程仅用于需要原子性+低延迟的简单操作（如库存扣减），不要写 500 行的 SP。' },
    ],
    diagnosis: [{ symptom: '数据库 CPU 100%，但 QPS 并不高', cause: '存储过程中有复杂的计算逻辑（循环/游标/大表 JOIN），每个请求都触发大量 DB CPU 消耗。', fix: '①逐个审计存储过程，把能移到应用层的逻辑迁出②限制存储过程复杂度（<50 行，无游标）③监控 DB CPU 使用率细分（多少来自 SP vs 普通查询）④评估迁出后的性能和可扩展性改进。' }],
    exercises: [
      { level: '基础', task: '什么时候用存储过程是合理的？', hint: '原子性 + 低延迟 + 简单', answer: '①需要在数据库层保证原子性（库存扣减：查库存+减库存 一步完成）②减少网络往返（一个 SP 调用替代 10 次 SQL 网络交换）③数据密集但计算简单（批量更新/归档）。但不要超过 50 行，不要包含业务规则。' },
      { level: '进阶', task: '如何将已有的复杂存储过程迁移到应用层而不影响业务？', hint: '逐步迁移 + 灰度', answer: '①识别所有调用该 SP 的地方②在应用层实现等价逻辑（用 Service + 多次 SQL）③灰度切换：按 user_id hash 分流，部分用户走新逻辑，部分走旧 SP④对比结果（新旧两套结果是否一致）⑤全量切换→废弃旧 SP→清理 DB 中不再使用的 SP。整个过程需要可回退——随时能切回旧 SP。' },
    ],
  },

  "i_2M3VloG-xTgWDWp4ngt": {
    mentalModel: 'Busy Frontend 是"前台的崩溃"——Web 应用每次请求都是满页面渲染（包括模板引擎编译+数据库查询+布局计算），即使页面 90% 的内容没变。这是服务端渲染（SSR）没有缓存时的典型问题。',
    sections: [
      { title: 'Busy Frontend 的根源', content: '传统 SSR 应用（PHP/Ruby on Rails/Django SSR）每次请求都完整渲染页面——包括查询 DB、编译模板、生成 HTML。用户刷新 10 次=10 次完整渲染。现代方案：①CDN 缓存整页 HTML（公开内容）②客户端渲染（CSR）+ API（React/Vue SPA）③SSR + 组件级缓存④动静分离：页面骨架在 CDN，动态数据 API 异步加载。Facebook 用 BigPipe 将页面分块流式传输，不同区块独立渲染。' },
    ],
    diagnosis: [{ symptom: '前端服务器 CPU 高但后端 DB 压力不大', cause: '模板渲染成为瓶颈——大量并发请求同时编译模板。', fix: '①启用模板缓存（预编译模板）②页面级缓存（整页输出缓存 N 秒）③引入 CDN 反向代理缓存 HTML④将 SSR 迁移到客户端渲染（CSR）。' }],
    exercises: [
      { level: '基础', task: '一个新闻网站首页每页都是相同的——如何减少服务端渲染次数？', hint: '缓存', answer: '①Nginx 反向代理缓存首页 HTML 1 分钟②CDN 缓存首页 30 秒③后台发布新闻时主动 purge 缓存④用户评论等动态部分用 AJAX 异步加载。' },
      { level: '进阶', task: '设计一个"动静分离"页面方案：页面框架 CDN 缓存，用户个性化内容异步加载', hint: 'ESI 或 CSR', answer: '方案 1（CDN ESI）：HTML 骨架 CDN 缓存（max-age=3600），动态部分用 Edge Side Includes 标签标记，CDN 边缘节点动态拼装。方案 2（CSR）：首屏 HTML 最小骨架（CDN 缓存），个性化数据通过 API 异步获取（React/Vue 客户端渲染）→首屏加载更快，用户数据实时。' },
    ],
  },

  "0IzQwuYi_E00bJwxDuw2B": {
    mentalModel: 'Chatty I/O（话痨式 I/O）= 点一个汉堡问后厨 8 次——"面包有了吗？肉煎好了吗？生菜洗了吗？"而不是点好后等一次性上齐。在微服务架构中特别常见：一个请求触发 N 次 RPC，串行等待。',
    sections: [
      { title: 'N+1 问题', content: '典型场景：查用户列表→遍历每个用户→调用户服务获取详情+头像+好友数。100 个用户=1+100×3=301 次 RPC。解决方案：①批量接口（getUsersBatch(ids)）一次返回所有数据②BFF 层（Backend for Frontend）聚合数据而非前端逐个查③DataLoader 模式：同一事件循环中的请求合并为 batch 查询④GraphQL 天然解决 N+1（一次性声明所有需求）。' },
    ],
    diagnosis: [{ symptom: '微服务调用链长达 8 层，P99 延迟 500ms', cause: 'Chatty I/O——每个请求穿透 8 个服务，每次 RPC 增加 5-10ms 网络延迟+序列化开销。', fix: '①服务合并：将频繁串行调用的服务合并为一个②异步化非关键路径③BFF 聚合层④gRPC 替代 REST（减少序列化开销）⑤缓存中间结果。' }],
    exercises: [
      { level: '基础', task: '微服务 A 调用 B→B 调用 C→C 调用 D。每次 RPC 延迟 10ms。总延迟多少？怎么优化？', hint: '串行 vs 并行', answer: '串行：10+10+10=30ms。并行方案：如果 B/C/D 的调用无依赖，A 同时调 B、C、D→总延迟=max(10,10,10)=10ms。减少层级：如果 B/C/D 只需要一个聚合结果→BFF 层并行调用。' },
      { level: '进阶', task: '设计一个"批量聚合"方案：前端需要用户列表（含用户名+文章数+粉丝数），避免 N+1 RPC', hint: 'BFF + 批量接口', answer: '①BFF 层接收前端请求②BFF 批量调用 userService.getUsersBatch(ids) 获取用户基本信息③同时调用 statsService.getStatsBatch(ids) 获取每个人的文章数和粉丝数④BFF 合并两个结果返回前端。3 次 RPC 替代 1+2N 次（N 个用户的 3 次 RPC）。时间从 N×30ms 降到 30ms。' },
    ],
  },

  "6u3XmtJFWyJnyZUnJcGYb": {
    mentalModel: 'Extraneous Fetching（过度提取）就是"查所有字段然后只用一个"——SELECT * FROM users 然后只用 username。多余的字段白白消耗了网络带宽、内存和序列化开销。',
    sections: [
      { title: '过度提取的代价', content: '①网络带宽：多余字段数 GB/天浪费 ②内存：ORM 要加载整个对象放到内存 ③索引失效：SELECT * 无法使用覆盖索引（即使索引包含需要的列，数据库也需回表取其他列）④序列化：大 JSON/ORB 对象序列化开销。真实案例：Twitter 优化 feed 查询 Time-to-First-Tweet 从 3s 降到 1s 的一部分就是只查询需要的字段。' },
    ],
    diagnosis: [{ symptom: 'API 返回的 JSON 中 70% 的字段前端没有使用', cause: '后端不关心前端需要什么——直接返回整个 ORM 模型。', fix: '①定义 DTO/Projection——只包含前端需要的字段②GraphQL：前端声明需要的字段③REST API 支持 fields 参数（?fields=id,username,avatar）④后端监控响应大小（超阈值告警）。' }],
    exercises: [
      { level: '基础', task: 'SELECT * 和 SELECT id, username 在性能上有什么差异？', hint: '覆盖索引', answer: '如果索引 (id, username) 存在，SELECT id, username FROM users WHERE id=123 可以直接从索引返回（覆盖索引），无需回表读数据页。SELECT * 必须回表读取所有列。差异：对于大表，覆盖索引查询可快 10-100 倍。' },
      { level: '进阶', task: '设计一个"按需字段"的 API：前端传 fields 参数动态决定返回哪些字段。后端如何高效实现？', hint: '动态 SQL 或 GraphQL', answer: 'REST 方案：?fields=id,name,avatar→后端解析 fields→动态构建 SELECT id, name, avatar→用 JSON 序列化时只包含这些字段。GraphQL 方案：前端 query 中声明字段→GraphQL 解析→resolver 中根据请求字段决定查哪些列（用 DataLoader 缓存）。注意：须防范恶意请求所有字段（加白名单/限流）。' },
    ],
  },

  "lwMs4yiUHF3nQwcvauers": {
    mentalModel: '不当的实例化就是"每次要用螺丝刀就去五金店买一把，用完就扔"——对象/连接频繁创建销毁，GC（垃圾回收）压力山大。连接池、对象池、单例就是"一次性买一套工具放家里反复用"。',
    sections: [
      { title: '常见 Instantiation 问题', content: '①数据库连接：每个请求 new Connection→execute→close（无连接池），TCP 握手+SSL+认证额外 20-50ms。②HTTP Client：每个请求 new HttpClient，而不是复用（HttpClient 应该全局共用一个实例）。③正则表达式：每次调用都编译正则，而不是定义为常量。④线程创建：每次创建新线程而非使用线程池。⑤Jackson ObjectMapper/Protobuf Parser：重用重量级对象。' },
    ],
    diagnosis: [{ symptom: 'Java/Go 应用频繁 Full GC，STW 时间 > 500ms', cause: '大量短命对象频繁创建销毁——HttpClient/Connection 每请求 new 一次。', fix: '①使用连接池（HikariCP/DBCP2）②HttpClient 全局单例③对象池化（Apache Commons Pool）④分析 GC 日志定位高频创建的对象类型⑤用 @Scope("singleton") 确保 Spring Bean 是单例。' }],
    exercises: [
      { level: '基础', task: '为什么数据库连接池是必须的？每次 new Connection 有什么开销？', hint: 'TCP + 认证 + 资源', answer: '每次 new Connection：①TCP 三次握手（1 RTT）②TLS 握手（2 RTT）③MySQL 认证（用户名/密码验证）④分配内存。总计 20-50ms，而连接池复用只需 0.01ms。同时过多连接会消耗数据库的 connection limit。' },
      { level: '进阶', task: '设计一个"连接池监控和动态调整"方案：自动检测连接泄漏和池大小不足', hint: '指标 + 自适应', answer: '①HikariCP 内置指标：activeConnections、idleConnections、pendingThreads（等待获取连接的线程数）②监控：pendingThreads > 0 持续 5 秒→告警（连接池太小）③activeConnections/maxPoolSize > 80%→自动扩大池④连接泄漏检测：连接借出 > 30 秒未归还→告警+强制回收⑤定期打印连接池状态到监控系统。' },
    ],
  },

  "p1QhCptnwzTGUXVMnz_Oz": {
    mentalModel: 'Monolithic Persistence 是所有东西都放进一个衣柜——衣服、鞋子、文件、食品全在一起。日志、订单、会话、分析数据全存同一个数据库，结果日志爆炸把核心业务拖死。',
    sections: [
      { title: '不同类型的存储需求', content: '①OLTP（在线交易）：订单、支付——需要 ACID 事务，低延迟。②OLAP（分析）：报表、BI——大量扫表，复杂聚合。③日志：海量写入，很少读，适合 Kafka/Elasticsearch。④Session：高频读写，可丢失，适合 Redis。⑤文件/媒体：Blob 存储（S3）。⑥搜索：全文索引，Elasticsearch。如果所有类型都塞进 MySQL，结果：OLAP 查询拖慢 OLTP，日志写入占满 IO，成本不必要。' },
    ],
    diagnosis: [{ symptom: '核心业务查询变慢但数据分析脚本运行良好', cause: '分析脚本的大查询占用了 Buffer Pool 和 IO 带宽，挤压 OLTP 资源。', fix: '①读写分离：数据分析在从库进行②ETL：实时同步 OLTP 数据到 OLAP 库（如 ClickHouse/RedShift）③分析查询在 OLAP 库执行，不影响在线业务④用不同的数据库存不同类型数据。' }],
    exercises: [
      { level: '基础', task: 'OLTP 和 OLAP 分别适合什么数据库？', hint: '行存 vs 列存', answer: 'OLTP：MySQL/PostgreSQL（行存，按行存取快，事务支持好）。OLAP：ClickHouse/RedShift/Druid（列存，按列聚合快，压缩比高），适合大规模数据分析。' },
      { level: '进阶', task: '设计一个"多模态存储"：订单（强一致）+日志（海量）+搜索（实时）+推荐（离线计算）分别用什么存储？', hint: '根据数据特征选型', answer: '①订单：MySQL（主库写）+ Read Replica（读）②日志：Kafka（缓冲管道）→ Elasticsearch（检索）→ S3（归档）③搜索：Elasticsearch（近实时全文搜索）④推荐：离线计算用 Spark/Hive 存 HDFS，在线服务用小模型存 Redis⑤数据流：MySQL binlog→Kafka→Flink→Elasticsearch/S3。' },
    ],
  },

  "klvHk1_e03Jarn5T46QNi": {
    mentalModel: 'No Caching（不缓存）是"每次修东西都去五金店买新工具"——明明今天已经查过 100 次"用户 #123 的昵称是同一个人"，还每次跑到数据库查。缓存是用空间换时间，用内存的小额开销替掉数据库的大额开销。',
    sections: [
      { title: '无缓存的痛', content: '参考数字：Redis 返回数据用 0.5ms，MySQL 用 5ms——相差 10 倍。1000 QPS 时：无缓存=DB 需处理 1000 次查询；有缓存 90% 命中=DB 只需处理 100 次查询——负载降 90%。Twitter 时间线缓存将数据库查询减少 95%。即使最简单的"把热门查询结果放 Redis"，效果都显著。' },
    ],
    diagnosis: [{ symptom: '数据库 QPS 很高但大部分是重复查询', cause: '没做缓存层——每个请求都穿透到 DB。', fix: '①引入 Redis 缓存热点数据②为高频查询设置 TTL③Cache Aside 模式：读缓存→miss→读 DB→回填缓存④写操作：删缓存（后续读会重建）。' }],
    exercises: [
      { level: '基础', task: '一天内相同的查询重复率 80%，引入缓存后数据库 QPS 从 1000 降到多少？', hint: '缓存命中 80%', answer: '200 QPS（800 次命中缓存，200 次 miss 走 DB）。DB 负载降 80%。加上缓存 miss 的回填操作，实际 DB QPS 约为原 20%+回填写 1%≈210 QPS。' },
      { level: '进阶', task: '针对只查一次的"长尾数据"是否应该缓存？如何决定缓存策略？', hint: '成本效益分析', answer: '长尾数据（只查一两次）缓存价值低——占用内存但几乎不被使用。策略：①只缓存访问频次 > N/min 的数据②使用 LRU 淘汰自动清理长尾③监控每个 key 的 hit/miss 比率④Bloom Filter 判断可能不存在的数据直接跳过缓存⑤热数据自动发现→缓存；冷数据自然淘汰。' },
    ],
  },

  "r7uQxmurvfsYtTCieHqly": {
    mentalModel: 'Noisy Neighbor（吵闹邻居）是多租户系统的恶梦——一个用户的密集操作（上传大文件/生成报表）抢占了共享资源（CPU/IO/带宽），其他租户的请求被迫等待。就像在同一间办公室，一个大声打电话的人影响所有人工作。',
    sections: [
      { title: '隔离的层级', content: '①硬隔离：独立集群/物理机（最安全但成本高）。②虚拟隔离：K8s resource limit（CPU/Memory 限额）+ QoS 保障。③软隔离：线程池隔离（Hystrix 给不同调用方分配独立线程池）、速率限制（每租户 QPS cap）。④存储隔离：不同租户分不同数据库/schema（防止一个租户的大查询影响全局）。AWS 用 Nitro 硬件虚拟化实现强 VM 隔离。' },
    ],
    diagnosis: [{ symptom: 'A 客户上传大文件时，B/C/D 客户的响应时间同时飙升', cause: '共享 IO/带宽被 A 占满——Noisy Neighbor。', fix: '①限制单请求资源消耗（上传速率限制、查询 timeout）②使用 K8s ResourceQuota+Limited 资源③按租户分数据库（防止 IO 竞争）④引入优先级队列（普通操作 vs 批量操作分不同池）。' }],
    exercises: [
      { level: '基础', task: '在 SaaS 产品中，如何防止一个大客户拖慢所有客户？', hint: '资源隔离 + 限流', answer: '①每租户独立的连接池/线程池（Hystrix 线程隔离）②租户级限流（每个租户最多 100 QPS）③大租户分配到专用资源（独立 DB/实例）④监控每租户响应时间，异常隔离。' },
      { level: '进阶', task: '设计一个"自适应 Noisy Neighbor 检测和隔离"系统：自动发现吵闹的租户并限流', hint: '实时指标 + 策略执行', answer: '①每租户实时统计：QPS/P99 延迟/CPU 时间/查询量②异常检测：租户的延迟超全局 P99 的 3 倍且持续 30 秒→标记为 Noisy③自动降级：Noisy 租户降为低优先级队列、限速 50%、超出部分排队④恢复：指标恢复正常后取消限流⑤通知：告知租户管理员"您的操作影响了系统性能"。' },
    ],
  },

  "LNmAJmh2ndFtOQIpvX_ga": {
    mentalModel: 'Retry Storm（重试风暴）是连锁车祸——服务 B 挂了→调用 B 的服务 A 自动重试→A 的重试请求压满 B 的连接池→B 刚恢复就又被压垮→更多服务重试→系统雪崩。不加控制的重试比不重试更危险。',
    sections: [
      { title: 'Retry Storm 的形成', content: '假设：服务 B 宕机 1 秒。100 个客户端各重试 3 次（指数退避但无上限）。结果：1 秒内 400 个请求涌向刚恢复的 B。如果 B 只能处理 200 QPS，瞬间过载→又挂了→又重试→死循环。YouTube 2012 年的宕机事故就是连锁重试造成的全球中断。' },
      { title: '正确的重试策略', content: '①限制重试次数（最多 3 次）②指数退避（1s/2s/4s）+ 随机抖动（jitter：实际间隔 = 理论间隔×random(0.8,1.2)）③断路器：连续失败 > 阈值直接熔断一段时间④重试预算：每段时间最多重试 N 次⑤只重试可重试的错误（5xx/超时可重试，4xx 参数错误不重试）。AWS SDK 默认支持了这些策略。' },
    ],
    diagnosis: [{ symptom: '系统重启后瞬间又挂了', cause: 'Thundering herd（惊群效应）——所有客户端同时重试/重连，服务器被瞬间流量打垮。', fix: '①随机抖动（jitter）分散重试时间②断路器随机恢复时间③连接池预热（启动时慢慢增加连接，不一下全连）④限流（超过容量直接拒绝，而非排队等待）。' }],
    exercises: [
      { level: '基础', task: '为什么纯指数退避（1s/2s/4s/8s）不够？还需要 jitter？', hint: '同时重试的客户端', answer: '没有 jitter：所有客户端重试时间一致（1s,2s,4s...）→它们同时发起请求→对服务端形成冲击波。加 jitter：1 秒退避实际在 0.8-1.2 秒随机→不同客户端分散在时间线上，避免同步冲击。' },
      { level: '进阶', task: '设计一个"全局重试预算"方案：不仅控制单个客户端的重试，还控制整个系统的重试总量', hint: '令牌桶 + 全局协调', answer: '①全局限流器（Redis counter）：每 QPS 允许重试总量的 10%②每个客户端发起重试前检查全局预算→有余额则允许，无余额则放弃报错③预算逐秒刷新（1 秒 1000 预算，用完后该秒内剩余重试被拒绝）④断路器优先于重试：断路器开启时直接拒绝不消耗预算。' },
    ],
  },

  "Ihnmxo_bVgZABDwg1QGGk": {
    mentalModel: '同步 I/O 是"等电话而不是发短信"——你要对方立即回复，你拿着电话什么都不能做。同步调用日志服务写日志，日志服务慢了 500ms→你的业务也跟着慢 500ms，即使日志写不写不影响核心业务。',
    sections: [
      { title: '哪些操作不应该同步？', content: '①日志/指标上报：写日志不应该阻塞请求处理。②通知/邮件/短信：用户不期望立即收到。③审计记录：记录操作日志。④触发非关键副作用：更新搜索索引、刷新统计、清理缓存。⑤调用不稳定的第三方服务。这些应该用 fire-and-forget（发 MQ 不等待）、async/await（等结果但释放调用线程）、或后台线程处理。' },
    ],
    diagnosis: [{ symptom: '系统 P99 延迟很高，追踪发现大部分时间花在写日志和发通知上', cause: '同步调用日志/通知服务成为长尾延迟的来源。', fix: '①日志：异步 append 到本地缓冲，后台批量发送②通知：投递到 MQ，异步 Worker 发送③使用异步 HTTP 客户端（async/await 释放线程资源）④限定依赖服务超时（1-2 秒），超时就放弃。' }],
    exercises: [
      { level: '基础', task: '把"同步发送注册邮件"改成异步的两种方案', hint: 'MQ 或异步线程池', answer: '方案 A：投递到 RabbitMQ/Kafka（发邮件任务），Worker 异步消费发送。方案 B：线程池（@Async/goroutine）启动新线程发送邮件，主线程不等待。方案 A 更好——进程重启不丢任务。' },
      { level: '进阶', task: '设计一个"异步日志"系统：每请求的日志异步写入但需要在请求结束时确保已落盘（防止进程崩溃丢日志）', hint: '本地缓冲 + 批量 flush', answer: '①每个请求的日志追加到线程本地缓冲（ThreadLocal/LinkedBlockingQueue）②请求处理完成时标记"等待 flush"③后台 flush 线程每 100ms 或满 64KB 时批量写磁盘④请求结束前 wait 直到自己的日志 batch 已持久化⑤设置超时（如 500ms），超时放弃等待但记录丢失数量。' },
    ],
  },

  // ==================== Monitoring ====================
  "hDFYlGFYwcwWXLmrxodFX": {
    mentalModel: '监控是企业系统的"体检报告"——没有它你就不知道系统是死了还是活着。健康监控、性能监控、安全监控、使用监控组成四个检查维度：心电（健康）、血检（性能）、疫苗（安全）、体温（使用）。',
    sections: [
      { title: '四大黄金信号', content: 'Google SRE 定义了 4 个黄金信号：①延迟（Latency）：P50/P90/P99 请求处理时间②流量（Traffic）：QPS/并发连接数③错误（Errors）：5xx 错误率/异常率④饱和度（Saturation）：CPU/内存/磁盘/连接池使用率。任何服务至少要监控这 4 个指标。Datadog/Prometheus/Grafana 是实现工具。' },
      { title: '告警策略', content: '告警过多→狼来了效应（没人看）。最佳实践：①页面告警（page）：需要立即人工响应（如 5xx > 5%，用户正在受影响）②工单告警（ticket）：需要关注但不紧急（如磁盘 80% 满，预计 3 天后满）③日志记录（log）：Informational，供事后分析（如每日用户注册数下降 10%）。Netflix 的经验：告警必须可问责——每个告警对应明确的 runbook。' },
    ],
    diagnosis: [{ symptom: '告警太多，每天收到 200 条，已经麻木不看了', cause: '告警阈值设得太敏感或无优先级区分。', fix: '①告警分级（P0 立即响应 / P1 1 小时内 / P2 今天内）②只有用户真正受影响时才 P0③合并关联告警（DB 挂了就别再报"订单服务超时"）④告警静默期（凌晨维护窗口暂停告警）⑤定期 review 告警质量——低频的告警是否被忽略太多。' }],
    exercises: [
      { level: '基础', task: '为 Web 服务设置 4 个黄金信号的合理告警阈值', hint: '基于用户体验', answer: '①延迟：P99 < 500ms（超→告警）②流量：当前 QPS < 历史同时段 50%（超→可能出问题）③错误：5xx 率 > 1%（超→P0 告警）④饱和度：CPU > 80% 持续 5 分钟（超→扩容警告）。' },
      { level: '进阶', task: '设计一个"智能告警"系统：用机器学习检测异常而非固定阈值。如何区分"正常流量高峰"和"异常"？', hint: '时间序列异常检测', answer: '①收集历史 30 天指标（按分钟粒度）②模型学习每个时间点的正常范围（同时段历史均值±3σ）③实时值 vs 预测范围→超出则告警④考虑周期性：周末、节假日流量模式不同⑤多指标关联分析：QPS+错误率同时上升才是真问题，单 QPS 上升可能是促销活动。' },
    ],
  },

  "hkjYvLoVt9xKDzubm0Jy3": {
    mentalModel: '健康监控是"体检"——医生的听诊器、血压计、血氧仪随时监测身体核心指标。健康端点 /health 返回 200 代表"活的"，但活得健康吗？要检查更多——数据库能连上吗？Redis 在吗？队列积压严重吗？',
    sections: [
      { title: '健康检查层级', content: '①浅健康（liveness）：进程在跑、端口在监听——K8s liveness probe 用这个。②深健康（readiness）：依赖服务正常（DB/Redis/MQ 连通）——K8s readiness probe。③功能健康：核心业务功能正常（如能否完成一次购物流程）。④依赖健康：第三方 API 可用性。推荐：/health 浅健康 + /health/deep 深健康 + /health/critical 关键功能。' },
    ],
    diagnosis: [{ symptom: 'K8s readiness probe 通过但服务仍然不可用', cause: 'readiness 只检查了端口或简单依赖，没检查实际功能。', fix: '①readiness 检查应包括：DB ping、Redis ping、MQ connection status②定期执行 smoke test（/health/critical 模拟关键业务流程）③检查成功率——能连上 DB 不等于能查出数据。' }],
    exercises: [
      { level: '基础', task: 'K8s liveness probe 和 readiness probe 的区别？', hint: '重启 vs 摘流量', answer: 'Liveness：检查容器是否"活着"。失败→K8s 重启容器（process hang 等）应轻量。Readiness：检查容器是否"准备好接收流量"。失败→K8s 从 Service 摘除（DB 连不上等）。恢复后自动加入。' },
      { level: '进阶', task: '设计一个"多级健康评分"系统：0-100 分反映整体健康状态', hint: '各组件得分加权', answer: '①各组件独立评分：DB ping 成功=30 分，Redis 可用=20 分，MQ 连通=15 分，磁盘<80%=15 分，DB 查询成功率>99%=20 分②加权总分：0-100。③>80 分=健康，50-80=亚健康（只读模式），<50=不可用④暴露 metric 给负载均衡器/注册中心做更智能的流量调度。' },
    ],
  },

  "rVrwaioGURvrqNBufF2dj": {
    mentalModel: '可用性监控是"网站有没有开门"的检测——模拟用户登录、浏览、下单的完整流程，从外部确认系统可用。如果健康检查通过但核心功能挂了（比如用户无法登录），可用性监控会发现。',
    sections: [
      { title: '合成监控（Synthetic Monitoring）', content: '外部探针定期模拟用户操作：①每 1 分钟从全球 5 个地理位置探测首页是否可以访问②每 5 分钟模拟完整登录流程③从外部监控 API 响应时间和可用性④Pingdom/UptimeRobot/AWS CloudWatch Synthetics 是常见工具。与内部监控互补：内部监控看代码级问题，外部监控看用户视角。' },
    ],
    diagnosis: [{ symptom: '内部监控一切正常但用户投诉无法访问', cause: 'CDN/DNS/网络问题（外部路径不通），或者功能性问题（能访问首页但登录失败）——内部监控只检查了服务器还活着。', fix: '①部署外部合成监控（多地域、多 ISP）②监控完整业务流程（不只是 HTTP 200 检查）③对比内外监控差异定位问题层（内部健康→外部不行=网络/ DNS/CDN 问题）。' }],
    exercises: [
      { level: '基础', task: '为什么要从外部（用户侧）做可用性监控？内部监控不够吗？', hint: '用户视角 vs 服务器视角', answer: '内部监控看服务器是否活着/CPU 是否正常。但用户能否访问取决于：DNS 解析是否正常、CDN 是否工作、网络路由是否可达、证书是否过期、登录功能是否正常。这些都需要外部探针从用户视角验证。' },
      { level: '进阶', task: '设计一个"全局可用性评分"：综合外部合成监控+内部健康检查+用户真实错误率', hint: '加权得分', answer: '①外部探测（5 地域×首页+登录）：60 分权重（全通=60，一个不通扣 12）②内部健康（DB+Redis+MQ 连通）：20 分③用户真实监控（error_rate<1%=20 分，1-5%=10 分，>5%=0）④总分=外部+内部+用户。>80 分=符合 SLA，<80 分=触发故障响应流程⑤记录每个不可用事件的根本原因和恢复时间。' },
    ],
  },

  "x1i3qWFtNNjd00-kAvFHw": {
    mentalModel: '性能监控是"码表"——测量系统各环节花费的时间。请求进来→中间件→Controller→Service→DB→返回，每个环节耗时多少？瓶颈在哪个环节？性能监控让你一眼看到。',
    sections: [
      { title: '性能监控工具链', content: '①APM（Application Performance Monitoring）：Datadog/New Relic/Dynatrace/Elastic APM——自动追踪请求路径、SQL 耗时、外部调用耗时、慢端点。②分布式追踪：Jaeger/Zipkin/OpenTelemetry——跨服务追踪一个请求的完整路径。③Profiling：pprof/Pyroscope——CPU/内存火焰图，找代码级热点。④基础设施监控：Node Exporter（CPU/内存/磁盘/网络）。' },
    ],
    diagnosis: [{ symptom: 'P50 延迟很低但 P99 很高（长尾问题）', cause: '少数请求遇到了特别慢的路径——大查询、GC 暂停、网络抖动、缓存 miss 后回源。', fix: '①追踪长尾请求的 trace 找共同特征（某个特定的 API 参数/用户）②在 APM 中按 endpoint 分 P50/P99 对比找差异③对长尾请求单独优化（加缓存、建索引、异步化）。' }],
    exercises: [
      { level: '基础', task: '分布式追踪中的 Span 和 Trace 是什么关系？', hint: '调用链树', answer: 'Trace=一个请求的完整调用链（树）。Span=调用链中的一个环节（如 HTTP 请求/DB 查询/MQ 发送）。每个 Span 有 start/end time、parent span、tags（HTTP 状态码/DB 语句等）。多个 Span 组成一棵树=一个 Trace。' },
      { level: '进阶', task: '设计一个"低开销分布式追踪"方案：追踪所有请求但性能开销 < 1%', hint: '采样 + tail-based', answer: '①头部采样（head-based sampling）：请求进来时随机决定是否追踪（如 1%）。缺点：可能错过异常请求。②尾部采样（tail-based sampling）：所有请求都收集 Span→请求结束时根据结果决定是否保留（错误/慢请求 100% 保留，正常请求随机 1%）。③带内传播：trace context 通过 HTTP Header（traceparent）自动传递，无需额外 RPC。④异步批量上报 Span（不阻塞请求处理）。' },
    ],
  },

  "I_NfmDcBph8-oyFVFTknL": {
    mentalModel: '安全监控是"小区保安+监控探头"双重守护——监控异常登录尝试、异常数据访问、DDoS 攻击模式。和可用性监控不同：安全监控关注的是"有没有人在踹门"而非"门是否开着"。',
    sections: [
      { title: '安全监控内容', content: '①认证异常：暴力破解（连续失败登录）、异地登录。②授权异常：访问未授权资源（403 频率增加）。③数据访问异常：短时间内大量数据导出、非工作时间访问管理接口。④DDoS 检测：流量异常暴增、SYN flood。⑤API 滥用：单 IP 高频调用、爬虫行为。工具：AWS GuardDuty、Cloudflare WAF、Datadog Security Monitoring、ELK + 自定义规则。' },
    ],
    diagnosis: [{ symptom: '发现某个 IP 连续尝试 1000 次不同密码登录', cause: '暴力破解——密码喷洒攻击（password spraying）。', fix: '①自动封禁 IP（fail2ban/Cloudflare WAF）②登录频率限制（每 IP 每 5 分钟最多 10 次尝试）③强制 MFA（双因素认证）④告警安全团队⑤使用异常检测——即使频率低，异地/异设备登录也告警。' }],
    exercises: [
      { level: '基础', task: 'WAF（Web 应用防火墙）做什么？和普通防火墙有什么区别？', hint: 'L7 vs L4', answer: '普通防火墙：L3/L4（IP/端口），允许/拒绝数据包。WAF：L7（HTTP 层），分析请求内容——检测 SQL 注入、XSS、CSRF、恶意爬虫。WAF 理解 HTTP 语义，可以拦截"SELECT * FROM users"这样的 SQL 注入。' },
      { level: '进阶', task: '设计一个"实时异常登录检测"系统：识别被盗账号', hint: '行为分析 + 规则引擎', answer: '①特征收集：登录 IP、地理位置、设备指纹、浏览器指纹、登录时间、历史行为模式②规则引擎：异地登录（上次北京这次纽约<10 分钟=异常）、新设备+大额操作=高风险③ML 模型：学习每个用户的正常行为基线，偏离>阈值=告警④响应：低风险=发通知，中风险=验证手机，高风险=冻结账户+强制改密。' },
    ],
  },

  "eSZq74lROh5lllLyTBK5a": {
    mentalModel: '使用监控（Usage Monitoring）是所有服务的"水表"——记录谁、在何时、调用了什么、用了多少。在 SaaS 中这是收费的依据；在内部系统中是容量规划的基础；在安全中可用于审计回溯。',
    sections: [
      { title: '使用监控维度', content: '①API 调用量：每个租户/用户的 API 调用次数（计费+限流依据）。②资源使用量：存储容量、带宽消耗、计算时长。③功能使用率：哪些功能常用、哪些没人用（指导产品优化）。④用户行为：活跃用户数、留存率、转化漏斗。⑤容量趋势：用量增长曲线→规划何时扩容。Kubernetes 的 Resource Metrics 和 AWS Billing Dashboard 都是使用监控。' },
    ],
    diagnosis: [{ symptom: '月底发现某客户的 API 调用量远超配额，但已经产生了超额成本', cause: '缺少实时使用监控和配额 enforcement。', fix: '①实时计数器（Redis INCR）+ 配额检查②超配额后拒绝请求（429）或降级（低优先级）③客户自服务查看用量 dashboard④配额预警：80%/90%/100% 时分阶段通知。' }],
    exercises: [
      { level: '基础', task: 'API 调用计数为什么不适合用数据库每次 INCREMENT？', hint: 'UDPDATE 竞争', answer: '每 API 调用一次 UPDATE count=count+1 会导致：①行锁竞争（高 QPS 下严重）②DB 写入放大（计数器写入和业务数据写入争 IO）。方案：Redis INCR（原子，单线程，10 万+ QPS），定期批量同步到 DB。' },
      { level: '进阶', task: '设计一个"分级使用监控"：实时计数+批量持久化+趋势分析', hint: 'Redis + Kafka + OLAP', answer: '①实时层：Redis 计数器（每 API 调用 INCR，TTL 1 小时）②准实时层：每 5 分钟 Redis snapshot→Kafka→Flink 聚合→存入 OLAP（ClickHouse/Druid）③持久层：每小时/天的汇总存入 MySQL/PostgreSQL④展示：实时仪表板（过去 1 小时）、天级报表、趋势预测⑤成本：Redis 低成本+OLAP 高效聚合。' },
    ],
  },

  "Q0fKphqmPwjTD0dhqiP6K": {
    mentalModel: 'Instrumentation（仪表化）=给系统装"测量仪表"——在代码的关键位置插入测量点（埋点），记录执行时间、调用次数、成功/失败。无仪器就是盲人——你知道系统在用，但不知道怎么用。',
    sections: [
      { title: 'Instrumentation 三个层面', content: '①Metrics（指标）：数值聚合（QPS、错误率、延迟分位），Prometheus/Datadog。②Logging（日志）：离散事件记录（请求日志、错误堆栈），ELK/Loki。③Tracing（追踪）：请求级调用链（跨服务），Jaeger/Zipkin。三者互补：Metrics 告诉你"有问题"，Tracing 告诉你"哪里慢了"，Logging 告诉你"为什么"。OpenTelemetry 目标是统一这三个层面的 API 标准。' },
    ],
    diagnosis: [{ symptom: '上线后不知道功能是否正常，全靠用户反馈', cause: '缺少埋点/仪表化——无法观测实际运行情况。', fix: '①为关键操作加埋点（计数器+耗时+错误）②发布新功能时加上 feature flag + 埋点对比新旧表现③使用自动埋点工具（OTel auto-instrumentation）减少手动工作量④定期查看 dashboard 验证功能表现。' }],
    exercises: [
      { level: '基础', task: 'Metrics、Logging、Tracing 三者各自的适用场景', hint: '宏观趋势 vs 细节 vs 调用链', answer: 'Metrics：监控大盘（QPS 涨跌、P99 延迟变化趋势）→告警。Logging：排查具体问题（某用户下单失败的原因）→debug。Tracing：定位微服务瓶颈（请求在 5 个服务中哪个最慢）→性能优化。' },
      { level: '进阶', task: '设计一个"统一可观测性平台"：用 OpenTelemetry 自动收集 Metrics+Logs+Traces，关联三者', hint: 'OTel Collector + 关联 ID', answer: '①应用集成 OTel SDK（自动注入 trace context）②所有请求带 trace_id→记在日志里（log context）③OTel Collector 接收 Traces+Metrics+Logs→导出到后端（Jaeger+Prometheus+Loki）④UI 层：在 Grafana 中关联——从 Metric 异常点 drill down 到 trace→从 trace 中的 span 看关联的 log。' },
    ],
  },

  "IwMOTpsYHApdvHZOhXtIw": {
    mentalModel: '可视化与告警是"数据变决策"的过程——海量指标通过 Grafana 变成趋势图，一眼就能看出异常。告警是条件-行动规则：CPU > 90%→发告警→值班员介入。可视化让人理解，告警让系统自动决策。',
    sections: [
      { title: 'Dashboard 设计原则', content: '①三行法则：第一行=业务核心指标（收入/订单量/活跃用户）②第二行=系统健康（错误率/延迟/可用性）③第三行=资源使用（CPU/内存/磁盘）④颜色编码：绿色=正常、黄色=关注、红色=告警⑤时间范围选择：常用预设（最近 1 小时/24 小时/7 天）⑥分面：按照服务/数据中心/版本分面展示。Grafana + Prometheus 是开源标配。' },
      { title: '告警最佳实践', content: '每个告警必须有：①Runbook（处理方法文档）②严重等级（P0/P1/P2）③聚合窗口（避免瞬时抖动误报——CPU > 90% 持续 5 分钟才告警）④告警静默窗口（维护期不告警）⑤告警升级（P1 超过 30 分钟没人处理→升级为 P0 告管理团队）。' },
    ],
    diagnosis: [{ symptom: '收到 CPU 告警但 30 秒后又自动恢复——每天几十次', cause: '告警阈值太敏感——CPU 瞬间到 90%（GC/短暂的 spike）就触发。', fix: '①加聚合窗口（CPU > 90% 持续 5 分钟才告警）②使用 for 语句（Prometheus: avg_over_time(cpu[5m]) > 90）③调整阈值（95% 而不是 90%）④告警去重（10 分钟内同类型告警合并为一条）。' }],
    exercises: [
      { level: '基础', task: '设计一个微服务 Dashboard：展示什么指标？分哪些区域？', hint: '黄金信号 + 服务视图', answer: '顶部：全局健康评分+总 QPS+5xx 率。中部：各服务延迟热力图（横轴=服务，纵轴=P99）。底部：资源使用概览（CPU/内存）。左侧导航可按服务切换详情。' },
      { level: '进阶', task: '设计一个"自动生成告警规则"的系统：根据历史指标自动推算合理阈值', hint: '统计学习', answer: '①收集过去 30 天的指标数据②计算每个时间点的均值和标准差③设置阈值 = 均值 ± 3σ④动态更新：每周用最近 30 天数据重新计算⑤区分周期性（工作日 vs 周末）⑥人工确认：生成的规则需人工审核后再启用。' },
    ],
  },

  // ==================== Cloud Design Patterns ====================
  "THlzcZTNnPGLRiHPWT-Jv": {
    mentalModel: '云设计模式=盖楼的最佳实践——不是每个架构都要从第一原理推导，前人的成功模式可以复用。Azure Cloud Design Patterns 和 AWS Well-Architected Framework 是两本"标准图册"。',
    sections: [
      { title: '模式分类', content: '①可用性模式：Circuit Breaker（熔断）、Bulkhead（隔舱）、Health Endpoint Monitoring、Throttling。②数据管理模式：CQRS、Event Sourcing、Index Table、Materialized View、Sharding、Cache-Aside。③设计实现模式：Strangler Fig、Sidecar、Ambassador、Anti-Corruption Layer、Backends for Frontend。④消息模式：Queue-Based Load Leveling、Competing Consumers、Priority Queue、Pipes and Filters。⑤弹性模式：Retry、Circuit Breaker、Deployment Stamps、Geodes、Bulkhead。' },
    ],
    diagnosis: [{ symptom: '面对新项目不知道从哪开始设计', cause: '不了解通用设计模式——从零开始造轮子。', fix: '①熟读 Azure Cloud Design Patterns 目录②每个模式理解其问题场景、解决方案、代价③在设计中主动匹配模式④参考成熟项目（如 eShopOnContainers 微软微服务示例）。' }],
    exercises: [
      { level: '基础', task: '列举 3 个云设计模式并各用一句话描述解决什么问题', hint: '熔断/旁路/Strangler Fig', answer: 'Circuit Breaker：防止故障扩散——下游挂了就不要不断重试。Cache-Aside：读缓存加快——先查缓存 miss 时回源 DB。Strangler Fig：逐步重构——新系统逐步替换旧系统而非一次性重写。' },
      { level: '进阶', task: '设计一个电商系统的"模式地图"：哪些场景用哪些模式？', hint: '按系统层次匹配', answer: 'API 层：Gateway Routing+Gateway Aggregation+Throttling。订单服务：CQRS（读写分离）+Event Sourcing（订单事件溯源）。库存服务：Cache-Aside（缓存库存）+ Circuit Breaker（防止支付服务超时雪崩）。部署：Deployment Stamps（多区域部署）。数据：Sharding（分库）+ Materialized View（报表）。' },
    ],
  },

  "PtJ7-v1VCLsyaWWYHYujV": {
    mentalModel: '设计与实现是"蓝图→施工"的转化过程。',
    sections: [
      { title: '从设计到代码', content: 'API 设计→Protobuf/OpenAPI→自动生成 stub。数据模型→DB Migration→ORM 映射。设计模式→代码库（Circuit Breaker=Resilience4j）。ADR 记录每项技术选型原因。' },
    ],
    diagnosis: [{ symptom: '设计文档和实现不一致', cause: '设计后不再跟进实现。', fix: '①设计评审工程师参与②ADR 记录决策③ArchUnit 自动架构验证。' }],
    exercises: [
      { level: '基础', task: '什么是 ADR？', hint: 'Architecture Decision Record', answer: '记录架构决策：Context/Decision/Consequences。后来者理解"为什么这样做"。' },
      { level: '进阶', task: '自动一致性检查方案', hint: '架构 Lint', answer: 'ArchUnit 定义规则→CI 检查→对比依赖图和设计→差异 issue。' },
    ],
  },

  "urSjLyLTE5IIz0TFxMBWL": {
    mentalModel: '负载均衡算法=带位策略。没有完美算法，只有合适场景。',
    sections: [
      { title: '算法全景', content: 'Round Robin：依次轮流。Least Connection：给连接最少（长连接好）。IP Hash：同 IP 同后端（保持缓存）。Weighted：按能力分配。Power of Two Choices：随机两台挑连接少的→接近最优。' },
    ],
    diagnosis: [{ symptom: '负载不均', cause: 'sticky session 或算法不当。', fix: '①关 sticky session②改用 least_conn③检查高频 IP。' }],
    exercises: [
      { level: '基础', task: '4 台 round-robin，第 10001 请求到哪台？', hint: '10001%4', answer: 'S0（索引 0）。' },
      { level: '进阶', task: '自适应负载算法', hint: 'PID 控制', answer: '每 5s 收集 P99→权重=1/P99→加权随机→阻尼防振荡→慢启动。' },
    ],
  },

  "3pRi8M4xQXsehkdfUNtYL": {
    mentalModel: '幂等=多按几次只付一次钱。"至少一次"投递决定你必须处理重复。',
    sections: [
      { title: '幂等实现', content: '唯一约束、幂等 Key（UUID）、Token 机制、状态机。Stripe 的 Idempotency-Key 是经典实现。' },
    ],
    diagnosis: [{ symptom: '重复扣款', cause: '回调缺幂等。', fix: '查 transaction_id→分布式锁→DB 唯一约束兜底。' }],
    exercises: [
      { level: '基础', task: '支付回调为什么幂等？', hint: '重试', answer: '平台超时重发→查是否已处理。' },
      { level: '进阶', task: '@Idempotent 框架', hint: 'AOP+Redis', answer: '注解→查 Redis→未处理执行业务→标记 complete。' },
    ],
  },

  "-lKq-LT7EPK7r3xbXLgwS": {
    mentalModel: '静态内容=不变化的文件放 CDN 全球就近取。',
    sections: [
      { title: '静态托管', content: 'S3+CloudFront→文件名 hash→新 URL=新缓存→HTML 短缓存。Cache-Control: max-age=31536000, immutable。' },
    ],
    diagnosis: [{ symptom: '更新后用户见旧版', cause: '文件未改名。', fix: '①content hash 文件名②HTML 引用新文件名。' }],
    exercises: [
      { level: '基础', task: '为何加 hash？', hint: '缓存失效', answer: '内容变=新 URL=CDN 新缓存→旧 URL 自然淘汰。' },
      { level: '进阶', task: '零服务器静态网', hint: 'S3+CDN', answer: 'React build→S3→CloudFront→API 路由→SPA fallback。' },
    ],
  },

  "Ze471tPbAwlwZyU4oIzH9": {
    mentalModel: 'Deployment Stamps=复印机——每个客户/地区独立副本。',
    sections: [
      { title: 'Stamp 部署', content: '每 stamp 含全套组件（LB+App+DB+Cache）。故障隔离、数据本地化、弹性扩容。成本高于共享。' },
    ],
    diagnosis: [{ symptom: '版本不一致', cause: '部分 stamp 未升级。', fix: '统一 CI/CD→金丝雀更新→Dashboard 追踪版本。' }],
    exercises: [
      { level: '基础', task: 'Stamp vs Scale-Out', hint: '隔离 vs 共享', answer: 'Scale-Out 共享 DB/Cache。Stamp 完全独立。' },
      { level: '进阶', task: '自动 stamp 扩缩', hint: 'IaC', answer: 'Terraform 模板→Pipeline 创建→健康检查→加入路由。' },
    ],
  },

  "6hOSEZJZ7yezVN67h5gmS": {
    mentalModel: 'Geode=全球分布完整系统节点。',
    sections: [
      { title: 'Geode 架构', content: '每区域一完整副本。DNS Anycast 路由最近节点。数据异步复制。和 CDN 不同：有完整业务逻辑。' },
    ],
    diagnosis: [{ symptom: '数据冲突', cause: '不同 Geode 版本不同。', fix: 'Sticky 用户→LWW→UI 显示同步中。' }],
    exercises: [
      { level: '基础', task: 'Geode vs CDN', hint: '完整业务 vs 静态', answer: 'CDN 缓存静态内容。Geode 完整系统副本。' },
      { level: '进阶', task: '3 Geode 方案', hint: 'DynamoDB Global Tables', answer: '本地读写→异步复制→LWW→关键写需多数确认。' },
    ],
  },

  "IR2_kgs2U9rnAJiDBmpqK": {
    mentalModel: 'Bulkhead=舱壁隔板——一个舱进水不沉船。',
    sections: [
      { title: '隔离实践', content: '每下游独立线程池/连接池。A 超时不影响 B。Resilience4j ThreadPool/Semaphore 隔离。' },
    ],
    diagnosis: [{ symptom: '一个慢下游拖慢全局', cause: '共享资源池。', fix: '独立池+timeout+熔断。' }],
    exercises: [
      { level: '基础', task: 'Bulkhead vs CB', hint: '隔离 vs 阻断', answer: 'Bulkhead 隔离资源。CB 阻断请求。' },
      { level: '进阶', task: '自适应 Bulkhead', hint: '动态池', answer: 'P99<100ms 扩池→>500ms 缩池→定期调节。' },
    ],
  },

  "uK5o7NgDvr2pV0ulF0Fh9": {
    mentalModel: 'Health Endpoint Monitoring=心电监护。',
    sections: [
      { title: '探针体系', content: 'Liveness（进程存活）→Readiness（依赖健康）→Critical（业务功能）。分层暴露不同深度。' },
    ],
    diagnosis: [{ symptom: '探针误报', cause: '超时太低。', fix: '增加超时+分层+failureThreshold=3。' }],
    exercises: [
      { level: '基础', task: 'Liveness vs Readiness', hint: '重启 vs 摘流', answer: 'Liveness 重启。Readiness 摘流量。' },
      { level: '进阶', task: '分级健康检查', hint: '/health/live/ready/critical', answer: '轻/中/重→不同超时/频率→外部监控用 critical。' },
    ],
  },

  "D1OmCoqvd3-_af3u0ciHr": {
    mentalModel: 'Circuit Breaker=保险丝。CLOSED/OPEN/HALF_OPEN 三态循环。',
    sections: [
      { title: '三态循环', content: 'CLOSED 正常→失败达阈→OPEN 拒绝→sleep window→HALF_OPEN 试探→成功 CLOSE / 失败回 OPEN。' },
    ],
    diagnosis: [{ symptom: '频繁开关', cause: '阈太灵敏。', fix: '增加 sleep window+降低阈值+环形冲量。' }],
    exercises: [
      { level: '基础', task: '三态含义', hint: '正常/熔断/试探', answer: 'CLOSED=通，OPEN=拒，HALF_OPEN=探。' },
      { level: '进阶', task: '慢调用熔断', hint: 'slowCallRateThreshold', answer: '错误率+慢调用率双条件熔断。' },
    ],
  },

  "-M3Zd8w79sKBAY6_aJRE8": {
    mentalModel: 'Queue-Based Load Leveling=蓄水池削峰。',
    sections: [
      { title: '削峰机制', content: 'MQ 缓冲→Worker 定速处理→满则拒。SQS+Auto Scaling 基于队列长度自动扩。' },
    ],
    diagnosis: [{ symptom: '队列增长', cause: 'Worker 不够。', fix: '扩容+优化+限流+监控 lag。' }],
    exercises: [
      { level: '基础', task: '队列均衡 vs LB', hint: '异步 vs 同步', answer: 'LB 实时转发。队列异步缓冲。' },
      { level: '进阶', task: 'Auto Scale based on Queue', hint: 'KEDA', answer: 'lag>100→+2→lag<10→-1→冷却防振荡。' },
    ],
  },

  "CKCNk3obx4u43rBqUj2Yf": {
    mentalModel: 'Health Endpoint Monitoring=持续探活自动摘除。',
    sections: [
      { title: '探针策略', content: 'K8s 三探针+Liveness/Readiness/Startup。外部 Pingdom 多地域探测。' },
    ],
    diagnosis: [{ symptom: '频繁摘除', cause: '探针敏感。', fix: '增 failureThreshold+延 periodSeconds。' }],
    exercises: [
      { level: '基础', task: '三探针', hint: 'live/ready/startup', answer: 'Liveness 重启。Readiness 摘流。Startup 启动特殊。' },
      { level: '进阶', task: '内外监控互补', hint: '合成+探针', answer: 'Pingdom 外部探测→报警。内部 health/deep 检查依赖→摘除。' },
    ],
  },

  "AJLBFyAsEdQYF6ygO0MmQ": {
    mentalModel: 'Leader Election=群龙选首。Raft 多数票，Fencing Token 防脑裂。',
    sections: [
      { title: '选举实现', content: 'etcd Raft 任期制。K8s Lease 租约。ZooKeeper 临时节点。Fencing Token 拒旧 Leader。' },
    ],
    diagnosis: [{ symptom: '双主', cause: '网络分区脑裂。', fix: 'Fencing Token+奇数节点+STONITH。' }],
    exercises: [
      { level: '基础', task: '为何奇数节点？', hint: '避免平票', answer: '3 节点 2>半数。5 节点 3>半数。偶数可平票。' },
      { level: '进阶', task: '分级选举', hint: 'Controller+Shard Leader', answer: 'Controller 全局唯一管拓扑。Shard Leader 每分片管写入。Kafka 模型。' },
    ],
  },

  "NybkOwl1lgaglZPRJQJ_Z": {
    mentalModel: 'Queue-Based Load Leveling=削峰填谷。',
    sections: [
      { title: '削峰实践', content: '双 11 抢购→请求入 MQ→Worker 定速消费→保护 DB。用户拿 task_id→完成后通知。' },
    ],
    diagnosis: [{ symptom: '队列深度增长', cause: '消费 < 生产。', fix: '增 partition+优化消费+限流+降级。' }],
    exercises: [
      { level: '基础', task: 'MQ 削峰 vs 限流', hint: '等 vs 拒', answer: 'MQ 排队等。限流立即拒。实际组合使用。' },
      { level: '进阶', task: '秒杀 MQ 方案', hint: 'Redis+MQ', answer: 'Redis 预减库存→通过进 MQ→Worker 下单→推送结果。' },
    ],
  },

  "RTEJHZ26znfBLrpQPtNvn": {
    mentalModel: 'Scheduler Agent Supervisor=管工分配+监督。',
    sections: [
      { title: '调度模式', content: 'Scheduler 分配任务→Agent 执行→Supervisor 监控心跳、检测死 Agent、重分配。K8s 就是这架构。' },
    ],
    diagnosis: [{ symptom: '死 Agent 仍被分配', cause: '缺心跳检测。', fix: 'Agent 发心跳→Supervisor 检测超时→标记 dead→重分配。' }],
    exercises: [
      { level: '基础', task: '推 vs 拉', hint: '分 vs 取', answer: '推：Scheduler 分（K8s）。拉：Agent 取（Kafka consumer）。' },
      { level: '进阶', task: '弹性调度', hint: 'Auto Scale+优先级', answer: 'Agent 数自动调→失败分级重试→DLQ→锁防并发→优先级队列。' },
    ],
  },

  "VltZgIrApHOwZ8YHvdmHB": {
    mentalModel: 'Valet Key=泊车钥匙——受限权限做特定操作。S3 Pre-signed URL 是典型。',
    sections: [
      { title: '实践', content: '上传→后端生成 Pre-signed URL→客户端直传 S3→零带宽消耗→病毒扫描→通过公开。' },
    ],
    diagnosis: [{ symptom: 'URL 盗用', cause: '泄露+长有效期。', fix: '短有效期+限大小+单次+上传后验证。' }],
    exercises: [
      { level: '基础', task: 'Pre-signed vs 代理上传', hint: '带宽', answer: '代理双倍带宽。Pre-signed 直传零服务器带宽。' },
      { level: '进阶', task: '安全上传系统', hint: 'Valet Key+扫描', answer: 'Pre-signed 上传→S3 事件→Lambda 扫描→通过公开→失败删除。' },
    ],
  },
};