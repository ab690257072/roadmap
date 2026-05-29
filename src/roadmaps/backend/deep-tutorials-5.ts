import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_5: Record<string, DeepTutorial> = {
  // ============================================================
  // 89. Message Brokers / 消息队列
  // ============================================================
  "nJ5FpFgGCRaALcWmAKBKT": {
    mentalModel: '消息队列就像餐厅的"出票机"——服务员把订单（消息）放进系统，厨师（消费者）从系统取单做菜。服务员不需要等厨师做好才接下一单（异步解耦），高峰期订单排队不丢（削峰），增加厨师就能加快出餐（水平扩展）。',
    sections: [
      { title: '消息队列解决了什么问题', content: '1) 解耦：订单服务和短信服务不需要直接调用，订单发消息，短信服务自己消费 2) 削峰：秒杀时请求先入队列，后端按能力消费，不会被打垮 3) 异步：发邮件/生成报表等耗时操作异步处理，接口快速返回 4) 可靠投递：消息持久化，消费者挂了重启后继续处理。Kafka 擅长高吞吐日志/事件流（百万条/秒），RabbitMQ 擅长复杂路由和事务性消息。' },
      { title: '消息投递的三种语义', content: '1) At-most-once（最多一次）：消息可能丢但不会重复。性能最好，适合允许少量丢失的场景（如监控指标）2) At-least-once（至少一次）：消息可能重复但不会丢。消费者需要幂等处理（重复消费同一条消息不影响结果）。这是最常用的语义 3) Exactly-once（精确一次）：消息既不丢也不重复。实现最复杂——需要生产端幂等+消费端事务+消息队列的去重支持。Kafka 的事务 API 支持 exactly-once，但代价是性能下降。实战选择：绝大多数场景选 at-least-once + 消费者幂等设计——在消费者端用去重表或唯一约束兜底，比追求 exactly-once 简单可靠得多。' },
    ],
    handsOn: [
      { title: '用 Docker 快速启动 Kafka（含 Zookeeper）', cmd: 'docker run -d --name kafka -p 9092:9092 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 apache/kafka:latest', output: '(Kafka 容器启动)', explain: 'Kafka 依赖 Zookeeper（新版本已支持 KRaft 模式不再需要 Zookeeper）。9092 是 PLAINTEXT 协议的端口。生产环境需要配置多个 broker。' },
    ],
    diagnosis: [
      { symptom: '消费者处理速度越来越慢，消息大量堆积', cause: '消费者数量不够或消费逻辑变慢（如数据库变慢拖累消费速度），或分区数限制导致无法增加消费者并行度', fix: '增加消费者数量（但不超过分区数），优化消费逻辑中的慢操作（数据库查询/外部 API），必要时增加 Topic 分区数扩充并行度上限' },
      { symptom: '消息丢失——生产者发送了但消费者没收到', cause: '生产者 acks 配置不当（Kafka acks=0 发完即忘），或消息未持久化（RabbitMQ 非持久化队列/消息），或消费者 auto-commit 在消息处理前提交', fix: 'Kafka: acks=all + min.insync.replicas>=2；RabbitMQ: durable queue + persistent delivery mode；消费者：处理完再手动 commit offset/ack' },
    ],
    exercises: [
      { level: '基础', task: '说出消息队列的三个核心使用场景', hint: '解耦/削峰/异步', answer: '1) 服务解耦（订单→通知→物流各自独立）2) 流量削峰（秒杀请求排队）3) 异步任务（发邮件/生成报表不必等接口）。' },
      { level: '进阶', task: '设计一个消息重试机制：消息消费失败后，最多重试 3 次，间隔分别为 10s/30s/1min，3 次后进死信队列', hint: '延迟队列 + 重试计数器', answer: '方案 1（RabbitMQ）：消息 header 记录 x-retry-count。消费失败→发到延迟队列（TTL 递增 + DLX）→ 到期后回到主队列。x-retry-count >= 3 → 路由到死信队列（DLX）。方案 2（Kafka）：消费失败→发到重试 Topic retry-orders，用一个消费者专门处理重试消息，根据 header 中的重试次数 sleep 不同时间后再投递。3 次失败后发到 DLQ Topic。所有方案的共同要点：消费者幂等（同一条消息可能被多次投递）。' },
    ],
  },

  "VoYSis1F1ZfTxMlQlXQKB": {
    mentalModel: 'Kafka 是"日志流水线"——想象一条工业传送带，上游不停放东西（生产者写消息），下游按需取（消费者读消息），传送带上的东西不会因为被取走就消失（消息持久化）。适合海量事件流处理。',
    sections: [
      { title: 'Kafka 核心概念', content: 'Topic：消息分类（如 orders/carts/users）。Partition：Topic 分成多个分区，分布在多台机器上（并行+扩展）。Producer：发消息的。Consumer：读消息的，属于 Consumer Group。Consumer Group：组内每个消费者负责部分分区，实现并行消费。Offset：消费者读到哪了（类似书签）。Broker：Kafka 服务器。Kafka 消息不会因为被消费而删除——按时间或大小过期。这让多个消费者可以各自独立消费同一 Topic（如订单事件同时被通知服务和统计服务消费）。' },
      { title: 'Kafka 为什么这么快', content: 'Kafka 的性能秘密：1) 顺序写入磁盘——比随机写入快 6000 倍（HDD），甚至比随机写入 SSD 还快 2) 零拷贝（Zero-Copy）——数据从磁盘到网卡不经过用户态内存，使用 Linux sendfile 系统调用直接从 Page Cache 传输 3) 批量处理——生产者批量发消息、消费者批量拉消息、broker 批量刷盘 4) 页缓存（Page Cache）——消息先写操作系统的页缓存，由 OS 决定何时刷盘，热数据通常都在内存中 5) 无状态 Broker——Consumer 自己管理 Offset（或 Broker 管理但轻量），Broker 不需要为每个 Consumer 维护复杂状态。这些设计让 Kafka 的单机吞吐可达数十万条/秒。' },
    ],
    handsOn: [
      { title: '用 kafka-console-producer 发消息', cmd: 'kafka-console-producer --broker-list localhost:9092 --topic test', output: '> (输入消息，按 Ctrl+C 退出)', explain: 'kafka-console-producer 是 Kafka 自带的命令行生产者，适合调试和测试。每行输入一条消息。' },
    ],
    diagnosis: [
      { symptom: 'Kafka broker 磁盘跑满', cause: '日志保留策略设置过长（retention.ms 或 retention.bytes），或消费者落后无法被 truncate', fix: '调整 log.retention.hours（默认 168 小时=7 天）缩短保留时间，增加磁盘容量，检查消费者 lag（kafka-consumer-groups --describe）确保没有卡住的消费者' },
      { symptom: '生产者发送消息延迟突然飙升', cause: '网络抖动或 broker 负载不均，或 acks=all 模式下某个 ISR 副本落后', fix: '检查 broker 的网络和磁盘 IO，用 kafka-topics --describe 查看 ISR（同步副本）状态，如果某副本持续落后需排查该 broker 硬件或网络' },
    ],
    exercises: [
      { level: '进阶', task: '解释 Kafka 中 Consumer Group 如何实现并行消费', hint: '一个分区只能被组内一个消费者处理', answer: 'Topic 有 N 个分区，Consumer Group 最多 N 个消费者——每个消费者独占若干分区。消费者数 > 分区数 → 多余的会空闲。消费者挂了 → 分区自动重新分配给其他消费者（rebalance）。' },
      { level: '基础', task: '描述 Kafka 的消息生命周期：从生产者发送到消费者收到，经过了哪些步骤', hint: 'Producer → Partition → Replica → Consumer', answer: '1) Producer 按 key 哈希选择目标分区 2) 消息写入该分区的 leader broker 的 page cache 3) follower broker 异步拉取复制（ISR 机制）4) Consumer pull 模式从 broker 拉取消息（按 offset 顺序）5) Consumer 处理完后提交 offset（手动或自动）。消息写入了 leader 的磁盘即可被消费，不等所有副本确认（除非 acks=all）。' },
    ],
  },

  "GPFRMcY1DEtRgnaZwJ3vW": {
    mentalModel: 'RabbitMQ 是"邮局+邮递员"——你可以指定不同类型的投递方式：直接投递到某个邮箱（Direct）、投递给所有订阅了这份报纸的人（Fanout）、根据信封上的关键词投递给感兴趣的订阅者（Topic）。灵活但吞吐不如 Kafka。',
    sections: [
      { title: 'RabbitMQ vs Kafka 选型', content: 'RabbitMQ 适合：1) 需要复杂路由（不同消息走不同队列）2) 需要消息确认和重试机制（ACK/NACK）3) 需要延迟消息（TTL + DLX）4) 消息量中等（万条/秒级）。Kafka 适合：1) 海量事件流（百万条/秒）2) 需要消息回溯（从头重放）3) 多个消费者独立消费同一数据流 4) 日志/监控/点击流等数据管道场景。简单原则：需要复杂消息路由 → RabbitMQ，需要大数据量流处理 → Kafka。' },
      { title: 'RabbitMQ 的 Exchange 类型详解', content: '四种 Exchange：1) Direct——根据完全匹配的 Routing Key 投递到指定队列（如 rk="order.created" 只投递到绑定此 key 的队列）2) Fanout——忽略 Routing Key，广播到所有绑定的队列（如"系统通知"发给所有相关服务）3) Topic——Routing Key 支持通配符（* 匹配一个词、# 匹配零或多个词）。如 *.error 匹配 order.error 和 payment.error，#.critical 匹配所有 .critical 结尾的 key 4) Headers——根据消息 header 匹配而非 Routing Key，性能较差不常用。实际使用中 Direct + Topic 覆盖 90% 场景。多个队列可绑定同一个 Exchange 但不同 Routing Key——实现"一条消息按规则分发到不同消费者"。' },
    ],
    handsOn: [
      { title: 'Docker 启动 RabbitMQ 并访问管理界面', cmd: 'docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management', output: '(容器启动，几分钟后管理界面就绪)', explain: '5672 是 AMQP 协议端口（应用连接），15672 是管理界面端口。访问 http://localhost:15672 用 guest/guest 登录。' },
      { title: '用 rabbitmqadmin 创建一个 Topic Exchange + Queue 绑定', cmd: 'rabbitmqadmin declare exchange name=order_events type=topic && rabbitmqadmin declare queue name=notification_queue && rabbitmqadmin declare binding source=order_events destination=notification_queue routing_key="order.*"', output: 'exchange/queue/binding declared', explain: '创建名为 order_events 的 Topic Exchange，绑定 notification_queue，所有 routing key 以 order. 开头的消息都会路由到这个队列。' },
    ],
    diagnosis: [
      { symptom: 'RabbitMQ 队列消息堆积严重，消费者数量已最大', cause: '消费处理逻辑变慢（如同步调用了变慢的外部 API 或数据库），或 prefetch 设置过大导致消费者一次取太多消息处理不过来', fix: '优化消费端业务逻辑，降低 prefetch_count（如设为 10 或 1）让消息更均匀分布，将耗时操作改为异步，考虑增加消费者实例但不超过队列数' },
      { symptom: '消息消费后总是重新入队（重复消费）', cause: '消费者未发送 ACK（auto_ack=false 但未手动 ack），或 consumer timeout 时间内未 ACK → broker 认为消费者挂了 → 消息重新入队', fix: '确保消费成功后调用 channel.ack()，设置合理的 consumer_timeout，长耗时操作考虑先 ACK 再异步处理（风险：进程崩溃消息丢失，只适合允许丢失的非关键通知）' },
    ],
    exercises: [
      { level: '基础', task: '解释 Exchange 和 Queue 在 RabbitMQ 中的关系和绑定', hint: 'Exchange 是路由器，Queue 是邮箱', answer: 'Producer → Exchange（路由器）→ 根据 Routing Key 和 Binding 规则 → Queue（邮箱）→ Consumer。Exchange 不存消息，只做路由。Queue 存消息等待消费。' },
      { level: '进阶', task: '用 RabbitMQ 实现延迟消息：订单创建 30 分钟后未支付就取消', hint: 'TTL + DLX（Dead Letter Exchange）', answer: '1) 创建 order_timeout_exchange（DLX）和 order_timeout_queue 2) 创建 order_delay_queue，设置 x-message-ttl=1800000（30 分钟）和 x-dead-letter-exchange=order_timeout_exchange 3) 订单创建时发消息到 order_delay_queue 4) 30 分钟后消息 TTL 到期→自动发送到 order_timeout_exchange→order_timeout_queue 5) 取消服务消费 order_timeout_queue，检查订单是否已支付→未支付则取消。注意：如果支付成功，需要有机制标记"已支付"让取消服务的消费逻辑跳过此消息。' },
    ],
  },

  // ============================================================
  // 90-96. 架构模式 (Monolith/SOA/Microservices/Serverless/Service Mesh/12-Factor)
  // ============================================================
  "tHiUpG9LN35E5RaHddMv5": {
    mentalModel: '架构模式就像盖房子的"建筑风格"——单体是四合院（一个整体），微服务是独立小别墅群（各自独立），Serverless 是酒店（需要时开房，用完退房）。没有最好的风格，只有最合适的地块和预算。',
    sections: [
      { title: '选架构的核心考量', content: '架构选择不是技术问题，是组织问题。单体：简单，适合小团队（<5 人），开发快，运维简单。微服务：独立部署、独立扩展，适合多团队（20+ 人）并行开发。代价：网络延迟、分布式事务、运维复杂度。Serverless：按用量付费，零运维。缺点：冷启动延迟、厂商锁定。原则：从单体开始 → 当瓶颈出现（而非"预感会出现"）时 → 逐步拆出微服务。Netflix/Uber 都是这样演进的。' },
      { title: '架构演进的真实路径——从 1 到 100 万用户', content: '1-100 用户：单体应用 + SQLite（直接塞在应用里），一台 5 美元 VPS 搞定。100-1000 用户：加 Nginx 反向代理 + PostgreSQL 独立服务器 + Redis 缓存，还是单体但基础设施拆了。1000-10000 用户：读写分离（主库写从库读）+ CDN + 异步任务队列（发邮件/生成报表），仍是一个代码库但部署多实例。10000-100000 用户：拆分出 2-5 个核心微服务（如用户服务、订单服务、支付服务），各带独立数据库。引入消息队列解耦。100 万+ 用户：全面微服务化 + K8s 编排 + Service Mesh + 多机房。每一步都是因为前一步产生了真实的瓶颈——不是提前设计。' },
    ],
    handsOn: [
      { title: '分析一个现有架构——用 C4 Model 画出架构图', cmd: '# C4 Model 四个层次：\n# L1 System Context（系统上下文）→ L2 Container（容器图）→ L3 Component（组件图）→ L4 Code（代码）\n# 从外到内逐层画，每层面向不同受众', output: '(用 Structurizr/PlantUML 画图)', explain: 'C4 Model 是架构可视化的事实标准。不需要学复杂工具，一张能说清楚"什么系统调什么系统"的白板图比什么都重要。' },
    ],
    diagnosis: [
      { symptom: '新项目一上来就选微服务，开发速度极慢', cause: '团队只有 3 人却要维护 8 个微服务——调试、部署、联调开销远超收益', fix: '合并为 1-2 个模块化单体，内部用清晰的包/模块边界隔离，等服务数和团队都增长后再按边界拆分微服务' },
      { symptom: '单体应用部署越来越频繁、越来越危险', cause: '多人同时提交代码，一次部署包含太多变更，出了问题难以定位是哪个变更导致的', fix: '这是拆分的信号——不是微服务的信号，而是"模块化"的信号。先在单体内部建立模块边界，流程成熟后再按模块拆独立服务' },
    ],
    exercises: [
      { level: '基础', task: '说出一条最重要的架构选择原则', hint: 'Conway\'s Law', answer: '不要过早优化架构——从单体起步，当单体确实成为瓶颈（团队规模/部署频率/性能）再演进。大多数微服务项目失败的原因不是技术，是组织还没准备好。' },
      { level: '进阶', task: '分析你参与过的项目：如果要拆微服务，你会按什么边界拆？说明理由', hint: '按业务边界而非技术边界', answer: '个人回答。要点：按业务领域拆分（如用户/商品/订单），而非技术层拆分（如 controller/service/dao 各成一个服务）。拆分依据：1) 是否有独立发布周期？2) 是否有独立的扩容需求？3) 是否有独立的团队负责？三个都不满足→不要拆。' },
    ],
  },

  "Ke522R-4k6TDeiDRyZbbU": {
    mentalModel: '单体架构是"一站式商场"——所有功能在一个地方，好管理、好部署、好测试。当商场大到功能互相干扰、一个柜台装修全商场停业时，才需要拆分。',
    sections: [
      { title: '单体的真实现状', content: '很多人把"单体"当贬义词，但大多数成功的项目都是从单体起步的——GitHub、Shopify、Basecamp 早期都是单体。优势：1) 开发调试简单（一个 IDE 全搞定）2) 部署简单（一个包/一个进程）3) 事务管理简单（本地事务 vs 分布式事务）4) 测试简单（一个启动就能跑集成测试）。何时拆：1) 团队大到不同组互相阻塞 2) 某个模块需要独立扩缩容 3) 技术栈需要异构（部分模块用 Go 部分用 Python）。' },
      { title: '模块化单体（Modular Monolith）——不拆服务但拆模块', content: '模块化单体是"微服务的最佳替代方案"——代码在一个进程里，但通过严格的模块边界达到类似微服务的组织优势。实现方式：1) 按业务领域分模块（如 user/、order/、payment/ 各一个 package）2) 模块间只能通过公开 API 通信（禁止直接 import 其他模块的内部实现）3) 共享内核（Shared Kernel）只放被所有模块共用的基础类型和工具 4) 每个模块有自己的数据库 Schema（虽然是同一个物理数据库，但模块间不直接 cross-schema JOIN）。优势：部署简单（还是一个进程）、事务简单（本地事务）、但开发时的模块边界清晰。缺点：模块边界靠"纪律"维持（编译器不帮你检查），需要 Code Review 和 linter 规则（如 Nx/ArchUnit 检查依赖方向）来强制执行。' },
    ],
    handsOn: [
      { title: '运行一个 Spring Boot/Rails/Django 单体应用', cmd: '# Spring Boot: ./mvnw spring-boot:run\n# Rails: rails server\n# Django: python manage.py runserver', output: '(单体应用一行命令启动)', explain: '单体的最大优势——启动只需一个命令，所有功能立即可用。微服务需要先启动 db + redis + nginx + 5 个微服务 + 消息队列...' },
    ],
    diagnosis: [
      { symptom: '单体中改一个小功能需要部署整个应用', cause: '没有做模块化——代码耦合严重，一处改动可能影响全站', fix: '在单体内部建立模块边界（package/namespace），用 CI 的"受影响模块检测"来决定是否需要全量测试，目标：改 user 模块不需要跑 order 模块的测试' },
      { symptom: '单体应用内存占用持续增长最终 OOM', cause: '天然的单进程限制——所有功能共享同一个进程的内存空间，一个内存泄漏影响全局', fix: '识别内存泄漏模块并隔离修复，设置 JVM/进程的内存限制 + 自动重启（K8s 的 limits+OOMKill → 重启），在监控中设置内存告警阈值' },
    ],
    exercises: [
      { level: '基础', task: '举一个适合用单体架构的项目和一个不适合的例子', hint: '考虑团队规模和功能复杂度', answer: '适合：3-5 人团队的内部管理系统——单体快速交付，运维简单。不适合：100+ 工程师的电商平台，不同团队负责商品/订单/支付，需要独立发布、独立扩展。' },
      { level: '进阶', task: '设计一个模块化单体的目录结构和依赖规则', hint: '按业务领域分，单向依赖', answer: '模块结构：user/（register/login/profile）、order/（create/cancel/query）、payment/（pay/refund）、product/（catalog/inventory）。规则：1) 每个模块有自己的 public API（interface/controller）和 internal（db/service）2) order 可以依赖 user.public 和 product.public，不能依赖 user.internal 3) 用 ArchUnit/go-arch 在 CI 中检查依赖规则 4) 每个模块的数据库 migration 放在自己目录下。kernel/ 放共享的 UserID/OrderID 等基础类型。' },
    ],
  },

  "tObmzWpjsJtK4GWhx6pwB": {
    mentalModel: 'SOA（面向服务架构）是微服务的"前身"——把系统拆成多个服务，但通过企业服务总线（ESB）通信。ESB 是"中央电话接线员"，所有服务间通信都要经过它。问题：ESB 本身成了瓶颈和单点。',
    sections: [
      { title: 'SOA vs 微服务', content: 'SOA 诞生于 2000 年代初，目标是整合企业内部各种异构系统（Java/.NET/SAP）。通常有重量级的 ESB（消息路由/协议转换/安全都在上面）。微服务更像是"轻量级 SOA"——去掉 ESB，服务间直接通信（REST/gRPC/消息队列），"智能端点、哑管道"。微服务强调单个服务的独立部署、独立数据库、独立团队。了解 SOA 是为了理解微服务不是凭空防火，而是从 SOA 的教训中演进出来的。' },
      { title: 'SOA 留下了哪些有价值的遗产', content: 'SOA 虽然被微服务"取代"，但很多概念仍然是基础：1) 服务契约（Service Contract）——定义服务的输入输出格式（WSDL→现在的 OpenAPI/Protobuf IDL）2) 服务注册与发现——UDDI→现在的 Consul/Eureka/Nacos 3) 编排（Orchestration）vs 编排（Choreography）——SOA 时代就出现了这个区分，微服务中的 Saga 模式直接继承 4) 标准化通信协议——SOAP（基于 XML）→现在的 REST（JSON）/gRPC（Protobuf）。教训：ESB 的失败表明"智能管道"不可取——管道的逻辑越复杂，越成为瓶颈和单点。微服务的"智能端点、哑管道"正是对这一教训的回应。' },
    ],
    handsOn: [
      { title: '查看一个经典的 SOAP 服务 WSDL 定义', cmd: 'curl -s "https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL" | head -30', output: '<?xml version="1.0" encoding="UTF-8"?>\n<definitions ...>', explain: 'WSDL（Web Services Description Language）是 SOA 时代的接口描述语言——XML 格式，定义了服务的操作、输入输出消息格式。相当于现在的 OpenAPI/Swagger JSON。' },
    ],
    diagnosis: [
      { symptom: '现有系统是 SOA，维护成本越来越高', cause: 'ESB 成为瓶颈——所有修改都要经过 ESB 团队，部署周期长，服务间通信经过 ESB 增加延迟', fix: '逐步去 ESB——新功能用 REST/gRPC 直接通信，老功能保持 ESB 直到可以下线。引入 API Gateway 替代 ESB 的部分路由功能，但保持轻量' },
      { symptom: 'SOA 系统中改一个字段需要改动 WSDL + 生成客户端 + 重新部署', cause: '紧耦合的契约——SOAP 的 XML Schema 要求严格的类型定义', fix: '这是 SOA 的固有问题——强类型契约导致修改成本高。演进方向是用 REST（JSON 的松耦合）或 gRPC（强类型但工具链自动化程度高）。迁移策略：新接口用 REST/gRPC，通过适配层兼容老 SOAP 调用' },
    ],
    exercises: [
      { level: '基础', task: 'SOA 和微服务最大的区别是什么', hint: 'ESB', answer: 'SOA 依赖 ESB（企业服务总线）做服务间通信的中间层，ESB 负责路由/转换/编排。微服务去掉了 ESB，服务间直接通信，使用轻量协议（REST/gRPC/消息队列）。ESB 的消失是最大的哲学差异。' },
      { level: '进阶', task: '你维护一个 SOA 老系统，老板说"改成微服务"，你怎么回应？列出你的评估清单', hint: '不是所有系统都值得重写', answer: '回应要点：1) 先评估——现有系统是否真的遇到了扩展/部署/团队协作瓶颈？2) 如果是 ESB 成为瓶颈→先移除 ESB 用直接通信 3) 如果只是部分服务需要独立扩展→只拆那部分 4) 证明风险——全量重写 SOA→微服务 = 2 年项目 + 期间零新增功能，业务可能等不起。提出渐进方案：用 Strangler Fig Pattern 逐步替换——新功能用微服务，老功能逐个迁移。' },
    ],
  },

  "K55h3aqOGe6-hgVhiFisT": {
    mentalModel: '微服务就像把一家大公司拆成独立事业部——每个事业部有自己的数据库、自己的技术选型、自己的发布周期。好处是不互相拖累，代价是需要花更大精力协调"跨部门沟通"（服务间通信/分布式事务）。',
    sections: [
      { title: '微服务的代价', content: '微服务不是银弹：1) 网络延迟——每次服务间调用都是网络请求（1-10ms vs 单体内部调用 <0.1ms）2) 分布式事务——跨服务转账需要 Saga 模式，不是简单的 BEGIN/COMMIT 3) 数据一致性——每个服务有自己的数据库，数据冗余和不一致是常态 4) 运维复杂度——K8s、服务发现、配置中心、链路追踪、日志聚合...缺一不可 5) 调试困难——一个请求经过 5 个服务，出了 bug 怎么定位？需要分布式追踪（Jaeger/Zipkin）。原则：不要因为"大公司都用微服务"就选微服务——他们能承受这个成本。' },
      { title: '微服务拆分的原则与反模式', content: '正确的拆分（按业务边界——Bounded Context）：用户上下文/订单上下文/支付上下文/库存上下文，每个上下文有自己的数据模型（User Context 的"用户"和 Order Context 的"用户"可以是不同的字段）。错误的拆分（按技术层）：Controller Service + Business Service + Data Service——这不叫微服务，这叫分布式的单体，网络延迟加了三倍但没得到任何独立部署的好处。另一个反模式：Entity Service——为每个数据库表建一个服务（UserService 管 users 表、OrderService 管 orders 表）——服务粒度太细，任何业务操作都需要编排很多个 Entity Service。' },
    ],
    handsOn: [
      { title: '查看微服务间的调用链路（用 Jaeger）', cmd: 'docker run -d --name jaeger -p 16686:16686 -p 6831:6831/udp jaegertracing/all-in-one:latest', output: '(Jaeger 启动，访问 http://localhost:16686)', explain: 'Jaeger 是 CNCF 的分布式追踪系统。在代码中植入 OpenTelemetry SDK，就能在 Jaeger UI 中看到一次请求经过的所有服务和每段耗时。微服务必备。' },
    ],
    diagnosis: [
      { symptom: '微服务架构下，一个简单的功能变更需要改 5 个服务', cause: '服务拆分过细或边界错误——业务操作被分散在多个服务中，违反了"一个业务变更只影响一个服务"的原则', fix: '重新评估服务边界——考虑合并紧密耦合的服务，或引入 BFF（Backend for Frontend）层聚合多个服务的调用，减少前端/调用方的复杂度' },
      { symptom: '某个服务挂了导致整个系统不可用', cause: '没有实施容错机制——调用方没有设置超时、重试、熔断，一个服务卡住耗尽了调用方的连接池，级联影响全局', fix: '对每个服务间调用加超时（如 5s），配置熔断器（连续失败 N 次→快速失败），关键路径降级（如推荐服务挂了→显示默认内容而不是报错）' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个电商系统的微服务拆分方案，说明每个服务负责什么', hint: '用户/商品/订单/支付/库存', answer: '用户服务（注册/登录/资料）、商品服务（商品信息/搜索）、订单服务（创建订单/状态）、支付服务（付款/退款）、库存服务（扣减库存）、通知服务（短信/邮件/推送）。关键：每个服务有自己的数据库，通过 API/消息队列通信。订单服务和支付服务通过"订单创建→支付→库存扣减"的 Saga 协调。' },
      { level: '基础', task: '解释为什么微服务架构中"每个服务有独立数据库"很重要', hint: '如果共享数据库，服务间耦合是什么级别？', answer: '共享数据库 = 服务间最深的耦合——服务 A 改了表结构可能导致服务 B 崩溃。独立数据库使每个服务可以独立选择存储方案（订单服务用 MySQL、搜索服务用 ES、推荐服务用 Neo4j），服务间只能通过 API 通信（不能直接 SQL JOIN），倒逼团队设计好的接口。' },
    ],
  },

  "nkmIv3dNwre4yrULMgTh3": {
    mentalModel: 'Serverless 就像"共享充电宝"——不用自己买发电机（买服务器），需要用时扫一个（触发函数），按使用量付费。适合间歇性工作负载，不适合持续高负载（成本反而更高）。',
    sections: [
      { title: 'Serverless 的适用范围', content: '最适合：1) API Gateway + Lambda：请求量波动大的 API 2) 定时任务（Cron Jobs）3) 文件处理（上传→触发→缩略图/转码→存回 S3）4) 事件驱动管道 5) 轻量 Webhook 处理。不适合：1) 长时间运行的任务（Lambda 限制 15 分钟）2) 对冷启动敏感的实时服务 3) 需要 WebSocket 长连接的场景 4) 已有稳定负载的应用（预留实例比按量付费便宜）。AWS Lambda/Azure Functions/GCP Cloud Functions 是三大主要产品。Cloudflare Workers 在边缘运行。' },
      { title: 'Serverless 冷启动——原理与缓解', content: '冷启动（Cold Start）：当函数长时间未调用或并发超过现有实例数时，云平台需要创建新的执行环境（分配容器/VM、加载运行时、初始化你的代码）。这可能需要几百毫秒到几秒。影响因素：1) 语言——Go/Node.js 启动快（<100ms）、Java/JVM 启动慢（可能 2-3s）2) 包大小——依赖越多加载越慢 3) VPC——配置 VPC 会增加额外的网络初始化时间。缓解策略：1) 用 Provisioned Concurrency（预留实例——花钱换零冷启动）2) 减小部署包体积 3) 选择启动快的基础语言（Go/Node.js > Python > Java）4) 定期 ping 函数保持实例 warm 5) 拆分大函数为小函数（冷启动时间也变小）。对后端：评估冷启动对你的场景是否可接受——用户登录 API 可能在意 500ms 延迟，后台批处理则完全不介意。' },
    ],
    handsOn: [
      { title: '用 AWS SAM CLI 本地运行 Lambda 函数', cmd: 'sam local start-api', output: '(启动本地 API Gateway + Lambda 模拟器)', explain: 'AWS SAM（Serverless Application Model）允许本地开发和测试 Lambda 函数，不需要部署到 AWS。极大加速开发迭代。' },
    ],
    diagnosis: [
      { symptom: 'Lambda 函数偶尔返回 502/超时，大部分时间正常', cause: '冷启动延迟——函数在空闲后被回收，下次请求触发冷启动初始化，网关超时时间内没返回', fix: '增加 API Gateway 超时时间（最大 29 秒），使用 Provisioned Concurrency 预留实例，或改用更快启动的语言' },
      { symptom: 'Serverless 月度费用远超预期', cause: '函数调用频率远超预估，或函数执行时间过长（如一个本该 100ms 的函数实际跑了 5s），或用了过多内存配置', fix: '分析 CloudWatch Logs 中的函数执行时间和调用次数，优化代码性能，降低内存配置（内存 = CPU 比例分配），对于稳定负载考虑预留实例（比按量付费更划算）' },
    ],
    exercises: [
      { level: '基础', task: '说一个 Serverless 最适合和一个最不适合的场景', hint: '间歇 vs 持续', answer: '最适合：图片上传后的缩略图生成——上传才触发，不调用不花钱。最不适合：高频交易系统——需要极低延迟（毫秒级），冷启动的几百毫秒完全不能接受，且持续高负载下按量付费比预留服务器贵。' },
      { level: '进阶', task: '计算 TCO：每月 1000 万次 API 请求、每次执行 100ms、256MB 内存，用 Lambda vs EC2 t3.small(预留实例 $12/月)，哪个更划算？（Lambda: 每百万请求 $0.20 + 每 GB-秒 $0.0000166667）', hint: 'Lambda 总费用 = 请求费 + 计算费；EC2 = 实例费（假设能跑 1000 万次）', answer: 'Lambda 计算费：1000 万次 × 0.1s × (256/1024)GB × $0.0000166667/GB-s = $4.17。请求费：10 × $0.20/百万 = $2.00。Lambda 总计 ~$6.17/月。EC2 t3.small = $12/月。Lambda 更便宜——但前提是 100ms 够用。如果执行时间变为 2s，Lambda 费用 = $4.17 × 20 + $2 = $85.4/月，EC2 更划算。结论：Serverless 的成本取决于执行时间和请求频率——不是永远便宜。' },
    ],
  },

  "n14b7sfTOwsjKTpFC9EZ2": {
    mentalModel: 'Service Mesh 是微服务通信的"智能网络层"——就像给每个微服务配了一个"助理代理"（Sidecar Proxy），所有进出该服务的网络流量都经过这个助理。助理负责负载均衡、重试、超时、加密、监控，服务代码本身不需要关心这些。',
    sections: [
      { title: 'Service Mesh 解决的问题', content: '在微服务架构中，每个服务都要处理：服务发现（去哪调服务B？）、负载均衡（调哪个实例？）、重试/超时/熔断、TLS 加密、链路追踪、流量控制。如果没有 Service Mesh，这些逻辑要在每个服务的代码里实现（或通过 SDK）。Service Mesh 把这些网络层关注点下沉到 Sidecar Proxy（如 Envoy），服务代码只关心业务逻辑。Istio（基于 Envoy）是主流选择。代价：每个 Pod 多一个 Sidecar 容器，增加资源消耗和运维复杂度。' },
      { title: 'Service Mesh 的流量管理能力', content: 'Istio 的核心 CRD（Custom Resource Definitions）：1) VirtualService——定义路由规则（如"20% 流量到 v2 版本、80% 到 v1"——金丝雀发布）2) DestinationRule——定义目标服务的策略（负载均衡算法、连接池大小、TLS 模式）3) Gateway——入口流量管理 4) ServiceEntry——将外部服务纳入 Mesh 管理。实战场景：金丝雀发布——发布 v2 只给 5% 内测用户 → 观察指标 → 调大到 50% → 全量。超时和重试——VirtualService 中配置 http[0].timeout=3s + retries.attempts=3。故障注入——故意给 10% 请求返回 500 或 5s 延迟，测试系统的容错能力（混沌工程入门）。' },
    ],
    handsOn: [
      { title: '用 Istio 做金丝雀发布——5% 流量到 v2', cmd: 'kubectl apply -f - << \'EOF\'\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nspec:\n  hosts: [myapp]\n  http:\n  - route:\n    - destination:\n        host: myapp\n        subset: v1\n      weight: 95\n    - destination:\n        host: myapp\n        subset: v2\n      weight: 5\nEOF', output: '(金丝雀路由规则生效)', explain: 'VirtualService 的 weight 字段决定流量分配比例。配合 DestinationRule 定义 v1/v2 subset 对应的实际 Pod 标签。修改 weight 值即可逐步切流量，不用重启任何服务。' },
    ],
    diagnosis: [
      { symptom: 'Service Mesh 引入后服务间调用延迟明显增加', cause: '每个请求经过两层 Sidecar（客户端+服务端 Envoy），额外增加 1-5ms 延迟', fix: '评估延迟增加是否在可接受范围内（通常 1-3ms 的增加对大多数业务可接受），如果不可接受检查 Envoy 配置是否合理，考虑是否为超低延迟服务禁用 sidecar injection' },
      { symptom: 'Istio 配置更新后某些服务通信中断', cause: 'VirtualService/DestinationRule 配置冲突或 host 匹配错误', fix: '用 istioctl analyze 检查配置错误，istioctl proxy-status 查看各 Sidecar 的配置同步状态，逐一回滚最近修改的配置定位问题' },
    ],
    exercises: [
      { level: '基础', task: 'Service Mesh 的 Sidecar 模式是什么意思', hint: '摩托车 sidecar（边车）', answer: 'Sidecar 是在每个应用容器旁边运行一个代理容器（如 Envoy），负责接管该应用的所有进出网络流量。应用只需要和 localhost 上的 Sidecar 通信，Sidecar 处理服务发现/负载均衡/TLS/追踪等。所有网络逻辑集中在 Sidecar 上，应用代码不感知。' },
      { level: '进阶', task: '评估一个 10 微服务系统：是否真的需要引入 Service Mesh？列出决策矩阵', hint: '规模、团队能力、当前痛点', answer: '决策矩阵：需要 Istio 的场景→1) 需要 mTLS 加密所有服务间通信 2) 需要金丝雀发布/流量镜像 3) 需要统一的超时/重试/熔断策略 4) 服务数量 20+ 且增长中。不需要 Istio 的场景→1) 3-5 个微服务（gRPC 自带负载均衡，用库做重试即可）2) 团队刚学 K8s（再加 Istio 复杂度爆炸）3) 没有流量管理的需求。建议：先不用 Istio，当服务数到 15-20 且确实需要统一流量策略时再引入。' },
    ],
  },

  "8DmabQJXlrT__COZrDVTV": {
    mentalModel: '十二要素应用是云原生的"十二条军规"——一套方法论让你的应用在云上能稳定运行、优雅扩展。不遵循这些原则也能部署，但早晚会遇到坑。',
    sections: [
      { title: '十二要素精要', content: '1) 代码库：一份代码，多处部署（dev/staging/prod）2) 依赖：显式声明依赖（package.json/requirements.txt）3) 配置：环境变量，不进代码 4) 后端服务：当作附加资源（数据库/缓存都是 URL 配置）5) 构建-发布-运行：严格分离三个阶段 6) 进程：无状态，不依赖本地存储 7) 端口绑定：通过端口暴露服务 8) 并发：进程模型扩展（而非线程）9) 易处理：快速启动、优雅关闭 10) 环境一致：dev 和 prod 尽量一致 11) 日志：当作事件流输出到 stdout 12) 管理进程：一次性运行。核心思想：应用应该是"可以随时被销毁和重建的牛"，而不是"需要小心护理的宠物"。' },
      { title: '十二要素中"无状态进程"的实践——Session 放哪里？', content: '第六要素"无状态进程"是最容易违反的：1) 不要把用户 Session 存内存——重启后所有用户掉线，也不能水平扩展（A 服务器内存中有 Session，B 没有）2) Session 放 Redis/数据库——所有实例共享 3) 本地文件存临时数据 → 换用 S3/云存储。无状态 = 任何请求可以被任何实例处理 = 可以随时销毁重建 = 水平扩展无压力。Sticky Session（负载均衡器把同一用户固定到一台服务器）是无状态的妥协——可以短期用但增加复杂性（某台挂了该用户 Session 丢失）。真正做到无状态：JWT Token 自包含用户信息（不需要服务端 Session）、或 Redis 集中存储 Session。' },
    ],
    handsOn: [
      { title: '验证你的应用是否符合"无状态"——kill 掉进程再重启', cmd: '# 假设你的应用运行中\n# 强制 kill: kill -9 $(pgrep your-app)\n# 重新启动: ./your-app\n# 检查：用户登录状态是否还在？上传的文件还在吗？', output: '(如果登录丢失或文件丢失，说明有状态没有外置)', explain: '这是最简单的十二要素测试——强制杀进程再重启，如果有任何功能异常（Session 丢失、临时文件消失），说明没有做到彻底无状态。' },
    ],
    diagnosis: [
      { symptom: '应用在 K8s 中滚动更新时部分请求失败或用户掉线', cause: '应用有状态（如本地内存中存了 Session、本地文件缓存了数据），旧 Pod 被杀时状态丢失', fix: 'Session 迁移到 Redis 集中存储，本地状态迁移到外部存储，确保 Pod SIGTERM 时优雅关闭（preStop hook + 等待 draining），配合 K8s 的 terminationGracePeriodSeconds' },
      { symptom: '同一个应用 dev 环境正常但 prod 报错', cause: 'dev 和 prod 不一致——dev 用的数据库版本不同、系统库版本不同、或 dev 有某些 prod 没有的环境变量', fix: '用 Docker 统一环境（dev 和 prod 用相同镜像），数据库版本在 dev 和 prod 保持一致，所有差异通过环境变量控制，不要有"dev 特殊代码路径"' },
    ],
    exercises: [
      { level: '基础', task: '解释为什么"配置要放在环境变量中"', hint: '如果配置在代码里，改一个数据库密码要怎么做？', answer: '配置在代码里→改配置需要改代码+重新构建+重新部署。配置在环境变量→改环境变量→重启应用即可。环境变量让同一个构建产物可以在不同环境（dev/staging/prod）使用不同配置，无需重新构建。' },
      { level: '进阶', task: '为你的项目做一次"十二要素审计"——逐条检查并记录违规项和修复方案', hint: '从代码库管理到日志输出逐条对照', answer: '检查清单：1) 是否一份代码多环境部署？2) 依赖是否显式声明？3) 密码/密钥是否硬编码在代码中？4) 数据库/Redis 等是否以 URL 配置？5) 构建和发布是否分离？6) 是否有本地文件依赖？7) 是否通过端口暴露？8) 是否通过进程模型扩展？9) 应用能否在 SIGTERM 后 5 秒内优雅关闭？10) dev 和 prod 环境差异在哪？11) 日志是否写到 stdout？12) 管理任务是否独立运行？逐项列出违规和修复计划。' },
    ],
  },

  // ============================================================
  // 97-99. Search Engines / 搜索引擎
  // ============================================================
  "gKTSe9yQFVbPVlLzWB0hC": {
    mentalModel: '搜索引擎是"图书管理员"——你告诉它关键词，它快速从海量书籍中找出相关的那些。和数据库 LIKE 查询的天壤之别：搜索引擎不是"匹配字符串"，而是"理解相关性"（分词、排序、聚合）。',
    sections: [
      { title: '搜索引擎 vs 数据库查询', content: '数据库 LIKE "%keyword%"：全表扫描、无法处理拼写错误、无法理解语义、无法排序相关性。Elasticsearch：倒排索引（关键词→文档映射，查找 O(1)）、全文分词、相关性打分（TF-IDF/BM25）、模糊匹配、聚合分析。场景：商品搜索（"红颜色苹果手机" → iPhone 红色款）、日志分析（搜索包含 error 且 ip 为 10.0.0.x 的日志）、自动补全（边输入边搜索）。数据库负责"精确查询"（where id=123），搜索引擎负责"模糊发现"（找到相关的）。' },
      { title: '倒排索引（Inverted Index）——搜索引擎的核心数据结构', content: '倒排索引 = 词 → 文档列表的映射。例如文档 A："Elasticsearch is fast"，文档 B："PostgreSQL is reliable"。分词后建立索引：elasticsearch→[A], is→[A,B], fast→[A], postgresql→[B], reliable→[B]。查询"fast"→直接查到[A]，O(1)而非全表扫描。进阶：TF-IDF 打分——TF（Term Frequency）= 词在文档中出现的频率，IDF（Inverse Document Frequency）= 该词在整个语料库中出现的稀有度。"fast"在文档 A 中出现 3 次（TF 高），且只有少数文档包含"fast"（IDF 高）→ 文档 A 与查询"fast"的相关性得分高。BM25 是 TF-IDF 的改进版，现在 ES 默认使用。中文搜索额外需要分词（ik 分词器或 jieba），因为中文词与词之间没有空格分隔。' },
    ],
    handsOn: [
      { title: '给 Elasticsearch 索引写入并搜索', cmd: 'curl -X PUT "localhost:9200/blog/_doc/1" -H \'Content-Type: application/json\' -d\'{"title":"Learning ES","content":"Elasticsearch is a search engine"}\' && curl "localhost:9200/blog/_search?q=search"', output: '{"took":5,"hits":{"total":{"value":1},"hits":[{...}]}}', explain: '一行写入、一行搜索。"took":5 表示搜索耗时 5ms——在大规模数据中仍然是毫秒级，因为倒排索引的查找是 O(1)。' },
    ],
    diagnosis: [
      { symptom: 'ES 搜索返回了完全不相关的文档', cause: '分词器不适合你的文本语言（如用 standard analyzer 分词中文，把每个字当成一个 token），或字段映射类型不对', fix: '中文内容使用 ik_smart 或 ik_max_word 分词器，在 index mapping 中指定 analyzer: "ik_max_word"。重新索引数据使新分词器生效' },
      { symptom: 'ES 集群变红（Red Status），搜索返回部分结果或错误', cause: '部分分片不可用——至少一个主分片（Primary Shard）未分配或丢失', fix: 'GET _cluster/health 查看状态，GET _cat/shards 查看哪些分片有问题，如果数据不重要可以删除损坏分片让集群变 Yellow（副本丢失但主分片可用），数据重要则需要从备份恢复' },
    ],
    exercises: [
      { level: '基础', task: '举例说明什么查询应该用数据库、什么查询应该用 Elasticsearch', hint: '精确 vs 模糊', answer: '数据库：根据用户 ID 查用户信息、根据订单号查订单详情（精确匹配）。Elasticsearch：用户在搜索框输入"黑色运动鞋 43码"搜索商品（分词+模糊匹配+相关性排序）。' },
      { level: '进阶', task: '设计一个电商搜索的后端架构：支持多字段搜索（商品名/描述/品牌）、价格范围过滤、按销量排序、自动补全', hint: 'ES multi_match + bool query + suggest', answer: '1) 索引 mapping：name(text+ik_smart)、description(text+ik_smart)、brand(keyword)、price(float)、sales(integer) 2) 搜索 query：bool{ must: multi_match{ query, fields: [name^3, description^1, brand^2] }, filter: range{ price: {gte, lte} } }, sort: sales desc 3) 自动补全：mapping 中加 suggest 字段(completion type)，用户输入"黑色"→GET /_search suggest 返回"黑色运动鞋""黑色T恤"等 4) 搜索建议：如果搜索结果<10 条，自动做模糊查询（fuzziness: AUTO）或 spell check。' },
    ],
  },

  "NulaE1isWqn-feYHg4YQT": {
    mentalModel: 'Elasticsearch 是搜索界的"瑞士军刀"——全文搜索最强，但也被滥用成了"JSON 存储"和"日志分析器"。ELK = Elasticsearch（存+搜）+ Logstash（采集+处理）+ Kibana（可视化）。',
    sections: [
      { title: 'ES 的核心概念', content: 'Index：类似数据库的"表"，一个 Index 存储一类文档。Document：Index 中的一条记录（JSON）。倒排索引：词 → 文档 ID 列表的映射。分词器（Analyzer）：把文本切成词（中文需要 ik 分词器或 jieba）。Mapping：定义字段类型（text 需要分词，keyword 精确匹配，integer/date 等）。查询 DSL：ES 的 JSON 格式查询语言，极其强大但学习曲线陡。别把 ES 当主数据库——它不是 ACID 的，数据可能丢。' },
      { title: 'ES 的集群与分片——水平扩展原理', content: 'ES 集群由多个节点（Node）组成，每个节点存储一部分数据。Index 被分成多个分片（Shard）：主分片（Primary Shard）存储原始数据，副本分片（Replica Shard）是主分片的拷贝，提供冗余和搜索吞吐。数据路由：document → hash(routing) % num_primary_shards → 决定存储到哪个主分片。写入路径：客户端→协调节点→主分片→并行复制到副本→确认。搜索路径：客户端→协调节点→广播到所有分片（主或副本）→每个分片返回 top-N →协调节点合并排序→返回。关键约束：主分片数创建后不可修改（因为它决定数据路由算法）。副本数可随时改。一般建议：主分片数 = 节点数 × 1-2，确保数据分布均匀。' },
    ],
    handsOn: [
      { title: 'Docker 启动 Elasticsearch', cmd: 'docker run -d --name es -p 9200:9200 -e "discovery.type=single-node" -e "xpack.security.enabled=false" elasticsearch:8', output: '(容器启动)', explain: '9200 是 REST API 端口。curl localhost:9200 返回集群信息。单节点模式适合开发测试。' },
      { title: '创建索引并定义中文分词 Mapping', cmd: 'curl -X PUT "localhost:9200/products" -H \'Content-Type: application/json\' -d\'{"mappings":{"properties":{"name":{"type":"text","analyzer":"ik_max_word","search_analyzer":"ik_smart"},"price":{"type":"float"},"brand":{"type":"keyword"}}}}\'', output: '{"acknowledged":true}', explain: 'ik_max_word 做索引分词（最细粒度，如"中华人民共和国"→中华/中华人民/共和国/人民共和国），ik_smart 做搜索分词（粗粒度，如 "中华人民共和国"→中华人民共和国）。keyword 类型不分词，用于精确匹配和聚合。' },
    ],
    diagnosis: [
      { symptom: 'ES 写入变慢，响应时间从几 ms 升到几百 ms', cause: '刷新间隔（refresh_interval）太频繁（默认 1s），每次 refresh 重建 segment；或分片过多导致写入放大', fix: '对于批量写入场景，增大 refresh_interval（如 30s）或写入完成前关闭 refresh（-1），减少分片数（每个分片都是一次写入+复制），检查磁盘 IO 是否成为瓶颈' },
      { symptom: 'ES 查询使用了错误的索引导致全表扫描', cause: '查询字段类型为 text 但没有用全文搜索（match），而是用了 term/terms（精确匹配），或反过来', fix: 'text 字段用 match 查询（会分词），keyword 字段用 term 查询（精确匹配）。用 GET /index/_mapping 确认字段类型，用 EXPLAIN API 查看查询实际执行计划' },
    ],
    exercises: [
      { level: '基础', task: '用 curl 给 ES 索引一篇文档并搜索它', hint: 'PUT /index/_doc/id + GET /index/_search', answer: 'curl -X PUT "localhost:9200/blog/_doc/1" -H \'Content-Type: application/json\' -d\'{"title":"Learning ES","content":"Elasticsearch is great"}\'\ncurl "localhost:9200/blog/_search?q=learning"' },
      { level: '进阶', task: '设计 ES 索引策略：每天 1 亿条日志，保留 30 天，如何设计索引和分片以保证搜索性能？', hint: '按时间分索引 + 合理的分片数', answer: '1) 按天建索引：logs-2026-05-29, logs-2026-05-28...（时间序列数据的最佳实践）2) 每个索引 5-10 个主分片（根据数据量，单分片建议 <50GB）3) 副本=1（数据可靠性 + 搜索并行度）4) 写别名：logs-write 指向今天的索引（应用永远写别名）5) 搜别名：logs-search 指向最近 30 天的索引 6) 过期管理：用 ILM（Index Lifecycle Management）或 curator 自动删除 30 天前的索引。搜索性能：按天分索引意味着查询"最近 7 天"只需搜 7 个索引（而非全量），极大减少扫描量。' },
    ],
  },

  "iN_1EuIwCx_7lRBw1Io4U": {
    mentalModel: 'Solr 是 Elasticsearch 的"前辈"——比 ES 更早，基于 Apache Lucene（ES 也是基于 Lucene）。ES 后来居上，现在市场份额远超 Solr。学它主要是维护老系统。',
    sections: [
      { title: 'Solr vs ES', content: 'Solr 在某些方面仍然优秀：1) 对静态数据集（很少更新的）搜索性能可能更好 2) 更成熟的 Facet（分面搜索）3) 更传统的企业级功能。但 ES 在以下方面完胜：分布式扩展、实时搜索、开发者体验、生态（ELK Stack 无可替代）。新项目选 ES，除非公司已有 Solr 基础设施。' },
      { title: 'Solr 仍有价值的场景', content: 'Solr 在特定场景下可能比 ES 更合适：1) 纯搜索场景（数据很少变更，传统企业搜索门户）——Solr 的搜索质量和配置精细度有优势 2) 需要强大 Facet（分面搜索）的场景——如电商的"品牌/价格区间/尺码"多维度筛选，Solr 的 JSON Facet API 非常强大 3) 以 SolrCloud 模式运行的集群——虽然不如 ES 流行，但在某些行业（出版/学术/政府）有稳定的用户基础 4) 大数据生态集成——Hadoop/HBase 生态与 Solr 的集成更成熟。现状：Solr 维护者致力于缩小与 ES 的差距，但开发者体验和生态方面仍有差距。作为后端，学 ES 足矣，碰不到 Solr 不用担心。' },
    ],
    handsOn: [
      { title: 'Docker 启动 Solr 并创建 collection', cmd: 'docker run -d --name solr -p 8983:8983 solr:latest && sleep 10 && docker exec solr solr create_core -c mycore', output: '(Solr 启动并创建 core)', explain: 'Solr 的"core"相当于 ES 的"index"。Solr 的管理界面在 http://localhost:8983/solr。' },
    ],
    diagnosis: [
      { symptom: 'Solr 搜索突然变得很慢', cause: 'searcher 没有自动 warm（新数据提交后 searcher 需要预热），或缓存（filterCache/queryResultCache）未充分利用', fix: '配置 autoWarmCount（从旧 searcher 预热多少条查询到新 searcher），调整各缓存大小，检查是否有在每次查询时打开新 searcher 的配置' },
      { symptom: 'SolrCloud 模式下节点频繁失联', cause: 'Zookeeper 连接不稳定，或节点间网络延迟超过 zk 的超时时间', fix: '增大 ZK session timeout，检查 Solr 节点与 ZK 之间的网络延迟和丢包率，确保 ZK 集群稳定' },
    ],
    exercises: [
      { level: '基础', task: 'Elasticsearch 和 Solr 底层都是什么？', hint: 'Apache 项目', answer: '都基于 Apache Lucene——Java 编写的高性能全文搜索库。ES 和 Solr 都是在 Lucene 之上构建的分布式搜索服务器，封装了分布式、索引管理、REST API 等能力。' },
      { level: '进阶', task: '对比 ES 和 Solr 在处理实时搜索（数据写入后立即可搜）上的架构差异', hint: 'refresh 机制', answer: 'ES 默认每秒 refresh（refresh_interval=1s），写入的数据在 1s 内可搜索。Near Real-Time（NRT）搜索是 ES 的核心设计。Solr 的数据可见性取决于 commit 策略——soft commit（近实时但稍慢）、hard commit（持久化到磁盘）。ES 的 NRT 设计让它更适合日志分析、监控等"写入后迅速查询"的场景。Solr 更适合"批量加载数据后提供搜索"的场景。' },
    ],
  },

  // ============================================================
  // 100-103. Real-Time Data / 实时数据
  // ============================================================
  "5XGvep2qoti31bsyqNzrU": {
    mentalModel: '实时数据就是"即时通讯"——数据产生后立刻推送到客户端，不需要用户刷新。从股票行情到聊天消息，从在线协作到游戏状态，实时性是现代应用的标配。',
    sections: [
      { title: '实时通信方案对比', content: '短轮询（Polling）：客户端每 N 秒发一次请求→服务器返回数据。简单但浪费带宽+延迟高。长轮询（Long Polling）：客户端请求→服务器挂住连接，有数据才返回→客户端再发新请求。比短轮询好但连接开销大。SSE（Server-Sent Events）：服务端单向推送，适合通知/进度条/股票行情。WebSocket：全双工双向通信，适合聊天/游戏/在线协作。WebTransport（HTTP/3）：基于 QUIC，比 WebSocket 更快更可靠，但还很新。选型：需要双向 → WebSocket；只需服务端推送 → SSE；老浏览器兼容 → 长轮询。' },
      { title: '实时系统的后端挑战', content: '实时系统不是"开个 WebSocket 连接就完事了"。核心挑战：1) 连接管理——WebSocket 连接是长连接，服务器需要维护每个连接的状态。十万个同时在线用户 = 十万个 TCP 连接，需要 epoll/kqueue 等高效的 IO 模型 2) 水平扩展——WebSocket 是有状态的（连接绑定在特定服务器上），用户 A 连在服务器 1 上，服务器 2 无法直接给用户 A 发消息。解决：Redis Pub/Sub 广播或 MQTT Broker 3) 消息可靠传递——用户断线重连期间的消息要不要补发？解决方案：消息持久化+客户端记录最后收到的消息 ID，重连后拉取遗漏的消息 4) 心跳与断线检测——长连接可能静默断开（网络切换/NAT 超时），需要心跳机制（ping/pong）及时发现和清理死连接。' },
    ],
    handsOn: [
      { title: '用 WebSocket + Node.js 实现一个简单的聊天服务', cmd: 'cat > /tmp/ws-server.js << \'EOF\'\nconst http = require("http");\nconst ws = require("ws");\nconst server = http.createServer();\nconst wss = new ws.WebSocketServer({ server });\nwss.on("connection", (socket) => {\n  socket.on("message", (data) => {\n    wss.clients.forEach(c => { if (c !== socket) c.send(data.toString()); });\n  });\n});\nserver.listen(3000, () => console.log("WS on :3000"));\nEOF', output: '(聊天服务代码)', explain: 'ws 是 Node.js 最流行的 WebSocket 库。实现"收到一条消息→广播给所有其他连接的人"只需十几行。' },
    ],
    diagnosis: [
      { symptom: 'WebSocket 连接频繁断开重连', cause: '负载均衡器或反向代理（如 Nginx）的 proxy_read_timeout 太短，关闭了空闲 WebSocket 连接', fix: '在 Nginx 中设置 proxy_read_timeout 和 proxy_send_timeout 为更长时间（如 1h），确保不做 HTTP 响应的缓冲（proxy_buffering off），添加 Upgrade 和 Connection headers 支持' },
      { symptom: 'SSE 连接在某些浏览器或环境下不工作', cause: '浏览器限制——同一个域名最多 6 个 SSE 连接（HTTP/1.1 限制），或 EventSource API 不支持自定义请求头', fix: '使用 HTTP/2（支持多路复用，没有连接数限制），如果需要自定义请求头改用 WebSocket 或通过 cookie 传递认证信息' },
    ],
    exercises: [
      { level: '基础', task: '比较短轮询、长轮询和 WebSocket 的优缺点', hint: '延迟/连接开销/复杂度', answer: '短轮询：简单但延迟高（取决于轮询间隔）、浪费带宽。长轮询：延迟低、兼容性好，但每次重新建连接。WebSocket：延迟最低、双向通信、单连接复用，但需要特殊服务器支持和连接管理。' },
      { level: '进阶', task: '设计一个支持 100 万同时在线的实时通知系统架构', hint: '分布式 WebSocket + 消息中间件', answer: '1) 客户端通过 DNS/负载均衡连接到最近的 WebSocket 网关集群 2) 网关维护 WebSocket 连接，将用户 ID→网关实例的映射存在 Redis 中 3) 业务服务发通知时查 Redis 找到用户所在的网关实例→通过内部 RPC 或 Redis Pub/Sub 将消息路由到对应网关 4) 网关收到后推送给用户的 WebSocket 连接 5) 用户断线→网关标记离线，消息存入离线消息存储（Redis/MongoDB），用户重连后拉取 6) 网关无状态化→可以随意扩缩容，但需要使用外部方式跟踪连接映射。分层：接入层(WebSocket Gateway)、路由层(Redis 映射)、业务层(推送 API)、存储层(离线消息)。' },
    ],
  },

  "RUSdlokJUcEYbCvq5FJBJ": {
    mentalModel: 'SSE（Server-Sent Events）就像"收音机广播"——服务端单向推送，客户端只收不发。比 WebSocket 简单得多（用标准 HTTP 协议），适合通知推送、实时日志、AI 流式输出。',
    sections: [
      { title: 'SSE 的使用场景', content: 'SSE 最适合：1) AI 流式输出（ChatGPT 那种逐字输出就是 SSE）2) 实时通知 3) 服务器日志流 4) 数据看板实时更新 5) 进度条更新。优势：自动重连（浏览器原生支持）、基于 HTTP（不需要额外协议升级）、可以走 HTTP/2 多路复用。前端用 EventSource API：const es = new EventSource("/api/stream"); es.onmessage = e => console.log(e.data); 后端设置 Content-Type: text/event-stream。' },
      { title: 'SSE vs WebSocket——什么时候选哪个', content: 'SSE 优势：1) 实现简单——服务端就是标准 HTTP 响应，不需要升级协议 2) 自动重连——浏览器 EventSource API 内置重连逻辑，断开后自动重新连接 3) HTTP/2 友好——走标准 HTTP，可利用 HTTP/2 多路复用 4) 防火墙友好——某些企业防火墙会阻断 WebSocket 升级请求，SSE 是普通 HTTP 不受影响。WebSocket 优势：1) 双向通信 2) 二进制数据（protobuf/msgpack）3) 请求-响应模型更灵活。选型指南：单向推送+文本→SSE；双向通信或需要二进制→WebSocket。大多数"服务器推客户端"场景用 SSE 就够了。' },
    ],
    handsOn: [
      { title: 'Node.js 实现 SSE 端点', cmd: 'cat > /tmp/sse-server.js << \'EOF\'\nconst http = require("http");\nhttp.createServer((req, res) => {\n  if (req.url === "/stream") {\n    res.writeHead(200, {\n      "Content-Type": "text/event-stream",\n      "Cache-Control": "no-cache",\n      "Connection": "keep-alive",\n    });\n    let count = 0;\n    const timer = setInterval(() => {\n      res.write(`data: Message ${++count}\n\n`);\n      if (count >= 10) { res.end(); clearInterval(timer); }\n    }, 1000);\n  }\n}).listen(3000);\nEOF', output: '(SSE 服务代码)', explain: 'Content-Type: text/event-stream 告诉浏览器这是 SSE 流。每条消息以 data: 开头，\n\n 结束。客户端 EventSource 会自动解析。' },
    ],
    diagnosis: [
      { symptom: 'SSE 连接建立后客户端收不到事件', cause: 'Nginx 或反向代理缓冲了响应（proxy_buffering on），导致事件在反向代理层被累积而非立即转发', fix: '在 Nginx 中对该 location 设置 proxy_buffering off、proxy_cache off、X-Accel-Buffering: no（响应头），确保事件即时转发' },
      { symptom: 'SSE 流在发送大量数据后连接断开', cause: '服务器或代理设置了响应大小限制或超时限制', fix: '设置合理的 timeout（proxy_read_timeout），对于长连接增加 max_execution_time/max_run_time，使用分块传输避免一次性缓冲过多数据' },
    ],
    exercises: [
      { level: '基础', task: '写一个 SSE 服务端的最简实现（伪代码）', hint: '设置 Content-Type + 发送 data:', answer: 'res.setHeader("Content-Type", "text/event-stream"); res.setHeader("Cache-Control", "no-cache"); res.write("data: hello\\n\\n");。每个消息以 data: 开头，\\n\\n 分隔。' },
      { level: '进阶', task: '实现一个 SSE 端点，支持自定义事件类型（event:）、事件 ID（id:）和断线重连后的增量恢复', hint: 'Last-Event-ID 请求头', answer: '服务端：event: new_order\\ndata: {"orderId":123}\\nid: 1\\n\\n。客户端重连时浏览器自动发送 Last-Event-ID: 1 请求头。服务端解析这个头，从事件 ID 1 之后开始重放漏掉的事件。实现：在服务端维护每个用户最后推送的事件 ID（Redis），重连时从该 ID+1 开始推。注意：需要持久化已推送的事件（至少一定时间内），否则无法重放。' },
    ],
  },

  "sVuIdAe08IWJVqAt4z-ag": {
    mentalModel: 'WebSocket 就像一个"电话通话"——客户端和服务端建立一个持久的双向通道，双方都可以随时说话，不用等对方说完。对比 HTTP 的"对讲机"模式（一方说完另一方才能说）。',
    sections: [
      { title: 'WebSocket 的工作机制', content: '1) HTTP 握手：客户端发送 Upgrade: websocket 请求头 2) 服务器回复 101 Switching Protocols 3) 后续通信换成 WebSocket 帧（二进制或文本），不再走 HTTP。特点：全双工、低延迟（不需要 HTTP Header 开销）、有状态（连接保持）。后端注意：1) 需要专门处理 WebSocket 的服务器（或 Nginx 配置支持）2) 连接管理（心跳、重连、认证）3) 水平扩展需要 sticky session 或用 Redis Pub/Sub 广播 4) 安全：wss://（加密）、Origin 验证。' },
      { title: 'WebSocket 认证与安全', content: 'WebSocket 不支持自定义 HTTP 请求头（在握手阶段可以，但 JavaScript WebSocket API 不暴露设置 header 的能力）。认证方式：1) URL 参数——wss://example.com/ws?token=jwt_token_here（简单但有 token 泄露风险，需要配合 HTTPS）2) 首次连接后发送认证消息——连接建立后客户端立即发送 {"type":"auth","token":"..."}，服务端验证后才开始处理其他消息 3) Cookie——WebSocket 握手时会携带同域名的 Cookie（Same-Origin），可以利用已有的 HTTP Session。安全要点：始终用 wss://（WebSocket over TLS），验证 Origin 头防止跨站 WebSocket 劫持，服务端验证每一个消息的权限（不只是连接时验证一次）。' },
    ],
    handsOn: [
      { title: '用 wscat 命令行工具连接 WebSocket 服务', cmd: 'npm install -g wscat && wscat -c wss://echo.websocket.org', output: 'Connected (press CTRL+C to quit)\n> (输入消息，实时看到回声)', explain: 'wscat 是 WebSocket 的命令行客户端，相当于 curl 的 WebSocket 版本。适合调试 WebSocket 服务。' },
    ],
    diagnosis: [
      { symptom: 'WebSocket 服务在 K8s 中滚动更新时客户端全部断连', cause: 'Pod 收到 SIGTERM 后直接退出，没有优雅关闭通知，客户端在下一次心跳超时后才发现断连', fix: '服务端收到 SIGTERM 后：1) 给所有连接发送 close frame（code 1001 Going Away）2) 停止接受新连接 3) 等待已有连接关闭（最多 graceful_timeout 时间）4) 退出。客户端收到 close frame 后立即自动重连到新 Pod' },
      { symptom: '用户反映聊天消息有时顺序错乱或丢失', cause: 'WebSocket 基于 TCP，单连接内有序，但重连后可能错乱。或服务端用多线程处理同一连接的消息导致并发写', fix: '确保单连接的消息处理是串行的（一个 goroutine/线程负责一个连接），每条消息带 sequence number，客户端检测到序号不连续时拉取遗漏的消息。重连时同步上次收到的最后序号' },
    ],
    exercises: [
      { level: '基础', task: '说出 WebSocket 和普通 HTTP 最核心的区别', hint: '双向 vs 请求/响应', answer: 'HTTP 是请求/响应模式——客户端必须先问，服务器才能答。WebSocket 是双向通道——连接建立后双方随时可以发消息，不需要等待对方的请求。' },
      { level: '进阶', task: '设计一个支持 10 万并发 WebSocket 连接的单机优化方案', hint: 'OS 调参 + 连接管理', answer: '系统调优：1) fs.file-max=1000000（最大文件描述符）2) net.core.somaxconn=65535（backlog）3) net.ipv4.tcp_tw_reuse=1（快速复用 TIME_WAIT 连接）4) net.ipv4.ip_local_port_range="1024 65535"。应用调优：1) 使用 epoll（Linux）/ kqueue（macOS）事件模型 2) 每个连接的数据结构尽量小（避免为每个连接维护大对象）3) 心跳间隔 30s+，太频繁会增加大量无意义 IO 4) 使用 uws（C）或 gorilla/websocket（Go）这种高性能库。注意：单机 10 万长连接主要吃内存（每连接 ~10-50KB kernel buffer），10 万连接 ≈ 1-5GB 内核内存，需要足够 RAM。' },
    ],
  },

  "osvajAJlwGI3XnX0fE-kA": {
    mentalModel: '长轮询是"我等你"——客户端发一个请求，服务器不马上回复，而是"挂住"这个连接，等有数据了再回。客户端收到后立刻再发一个新请求继续"等"。就像在餐厅门口等位，服务员说"叫你的时候你在门口"。',
    sections: [
      { title: '长轮询的现状', content: '长轮询是 WebSocket 出现前的实时通信方案。优点：兼容所有浏览器和网络环境（某些企业网络封 WebSocket 但不封 HTTP）。缺点：每个消息一个 HTTP 连接（尽管可以复用）、高频率下效率低。现在主要用于兼容性兜底——例如 Socket.io 库先用 WebSocket，不成功自动降级到长轮询。' },
      { title: '长轮询的服务端实现要点', content: '1) 连接挂起：服务端收到请求后，使用非阻塞的方式等待数据——例如 Redis BLPOP（阻塞队列弹出）、或 Node.js EventEmitter 等待事件 2) 超时处理：连接不能无限挂起——设置 30-60 秒服务端超时，超时后返回空响应（304 Not Modified 或空 body），客户端收到后立即发新请求 3) 并发限制：每个客户端同时只保持一个长轮询连接，收到响应后立即发起下一个 4) 反向代理配置：Nginx 等代理的 proxy_read_timeout 必须大于长轮询的挂起时间 5) 资源消耗：挂起的连接占用服务器线程/连接资源——Java 的 thread-per-request 模型每个挂起占用一个线程，Node.js/Go 则不吃力。这就是为什么长轮询在 Node.js 时代远比 Java Servlet 时代流行。' },
    ],
    handsOn: [
      { title: '用 Node.js 实现长轮询服务', cmd: 'cat > /tmp/long-poll.js << \'EOF\'\nconst http = require("http");\nlet waiting = [];\nhttp.createServer((req, res) => {\n  if (req.url === "/poll") {\n    waiting.push(res);  // h\n    setTimeout(() => { res.end(JSON.stringify({ts: Date.now()})); }, 3000);\n  } else if (req.url === "/push") {\n    waiting.forEach(r => r.end(JSON.stringify({msg: "new data"})));\n    waiting = [];\n    res.end("ok");\n  }\n}).listen(3000);\nEOF', output: '(长轮询服务代码)', explain: '客户端 GET /poll 后挂起 3s 返回时间戳（或等 /push 触发）。/push 立即唤醒所有等待中的客户端。简化的长轮询模型。' },
    ],
    diagnosis: [
      { symptom: '长轮询客户端收不到消息或延迟极高', cause: '服务端或反向代理的超时设置小于长轮询等待时间——代理提前关闭了连接', fix: '设置 Nginx proxy_read_timeout > 长轮询 waiting timeout，长轮询 timeout 设置在 30s 以内避免被 CDN/代理超时切断' },
      { symptom: '大量长轮询连接导致服务器线程/内存枯竭', cause: '每个连接绑定一个线程（如 Java Servlet），连接数达到线程上限', fix: '改用异步 IO 框架（Spring WebFlux/Node.js/Go）、降低长轮询超时时间、或迁移到 WebSocket/SSE 消除连接反复重建的开销' },
    ],
    exercises: [
      { level: '基础', task: '描述长轮询的一次完整交互过程', hint: '请求 → 等待 → 响应 → 立即再请求', answer: '客户端：GET /messages?since=123 → 服务器挂住连接，有新消息时返回数据 → 客户端收到后立即发出下一个 GET /messages?since=456 → 循环。看起来像"持续推送"，实际上是"不断重建连接"。' },
      { level: '进阶', task: '升级一个长轮询聊天系统到 WebSocket，但是需要向后兼容——不支持的客户端仍用长轮询', hint: 'Socket.io 的自动降级机制', answer: '使用 Socket.io——它内置了传输层协商。客户端连接时：1) Socket.io 先尝试 WebSocket 升级 2) 如果 WebSocket 握手失败（浏览器不支持或网络拦截）→ 自动降级到 HTTP 长轮询 3) 两种传输对上层代码透明——socket.emit() 和 socket.on() 的 API 一致。服务端也不需要区分传输方式。默认配置：优先 WebSocket，长轮询作为 fallback。前端：const socket = io("https://example.com", { transports: ["websocket", "polling"] })。' },
    ],
  },
};