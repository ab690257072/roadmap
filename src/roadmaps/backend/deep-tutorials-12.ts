import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_12: Record<string, DeepTutorial> = {
  // Replacing/fixing thin nodes from deep-tutorials-11.ts
  "cnZFR67IbmEL-SkNwYc5S": {
    mentalModel: '这是指向 roadmap.sh 网站的导航节点——本项目的路线图数据来源于此。点击可跳转到 roadmap.sh 查看交互式路线图。',
    diagnosis: [{ symptom: '导航节点引用失效', cause: '这是一个占位节点指向外部网站', fix: '确认 https://roadmap.sh 可正常访问。本节点作为链接跳转使用。' }],
    exercises: [{ level: '基础', task: '打开 roadmap.sh 浏览 backend 路线图', hint: '浏览器访问 roadmap.sh/backend', answer: 'roadmap.sh/backend 展示完整后端学习路线，交互式点击节点查看详情。' }],
  },
  "Kvqsa2B03-sEQrlIeE_Kt": {
    mentalModel: 'AI 在开发中的应用——不是替代开发者，而是让开发者效率翻倍。理解 AI 能做什么、不能做什么，是 2025 年后端的基本素养。',
    sections: [{ title: 'AI 开发工具全景', content: '编码助手：GitHub Copilot（代码补全）、Claude Code/Cursor（AI 原生 IDE）、ChatGPT/Claude（问答+生成）。集成模式：RAG（检索增强生成）、Function Calling（LLM 调用你的 API）、Agent（自主多步任务）。关键原则：AI 是副驾驶不是自动驾驶——生成的代码必须理解+审查+测试后才能上线。' }],
    diagnosis: [{ symptom: '团队过度依赖 AI 后代码风格碎片化', cause: '每个人用不同 AI 工具生成代码，没有统一的规范和 review', fix: 'AI 生成的代码也要走相同的 lint+review+test 流程。团队统一 AI 使用规范：哪些场景可用 AI、哪些必须人工写。' }],
    exercises: [{ level: '基础', task: '列举 3 个后端开发中 AI 能提效的场景和 3 个不能依赖 AI 的场景', hint: '样板代码 vs 安全/架构', answer: '能用：1) 生成 CRUD 样板 2) 写单元测试 3) 解释陌生代码。不能依赖：1) 加密/认证实现 2) 系统架构设计 3) 性能关键路径。' }],
  },
  "Nx7mjvYgqLpmJ0_iSx5of": {
    mentalModel: 'AI 应用场景遍布后端——智能客服（RAG）、异常检测（向量相似度）、代码审查（PR 分析）、SQL 优化建议（EXPLAIN 解读）、自动文档生成。',
    sections: [{ title: '后端 AI 应用选型', content: '最适合落地：1) 内部知识库搜索（RAG+embedding）2) 日志异常检测 3) 自动生成单元测试 4) API 文档自动补全。需要慎重：1) 面向用户的 AI 客服（幻觉风险）2) 自动代码修复（可能引入新 bug）3) 金融级决策。原则：内部提效优先、用户面谨慎、关键路径人工兜底。' }],
    diagnosis: [{ symptom: 'AI 日志异常检测产生大量误报', cause: '阈值式异常检测对业务正常波动敏感', fix: '用 ML 异常检测（Isolation Forest）替代固定阈值。人工反馈循环标记误报持续优化模型。' }],
    exercises: [{ level: '基础', task: '为你的后端项目设计一个 AI 能改进的地方', hint: '重复劳动/搜索/分类', answer: '例如：内部文档搜索——把所有技术文档 embedding 存入 pgvector，开发者用自然语言搜索"数据库连接池怎么配置"。' }],
  },
  "fVgKQ27R3HxbZvrqXM7Zi": {
    mentalModel: 'AI Provider 选择——OpenAI（最成熟）、Anthropic（长上下文+安全）、Google Gemini（多模态）、开源模型（Llama/Mistral 自部署）。多 Provider 策略避免锁定。',
    sections: [{ title: 'Provider 选型考量', content: '成本：GPT-4o $2.50/1M input、Claude Sonnet $3/1M input、Gemini 有免费层。质量：复杂推理→OpenAI/Claude、简单分类→Haiku/Gemini Flash。隐私：数据不出境→开源模型自部署。多 Provider 策略：核心路径用最好的模型，非关键用便宜的模型。用 LiteLLM/OpenRouter 统一 API 适配多个 Provider。' }],
    exercises: [{ level: '进阶', task: '设计一个 AI Provider 切换方案：主 Provider 挂了自动切到备用', hint: 'Circuit Breaker + Fallback', answer: '主 Provider 连续失败 N 次→熔断→自动切备用 Provider。备用也失败→返回缓存结果或降级响应。用 LiteLLM 统一接口切换 Provider 不需要改业务代码。' }],
  },
  "vpimgXt10UQFBDVHR21IU": {
    mentalModel: 'AI Agent 路线图——从简单问答到自主多步任务。Agent = LLM（推理）+ Tools（调用 API）+ Memory（记忆上下文）+ Planning（拆解任务）。',
    sections: [{ title: 'Agent 开发技能', content: '后端需掌握：1) Function Calling 实现（定义工具的 JSON Schema）2) 状态管理（Agent 的中间结果存储）3) 安全控制（限制 Agent 可调用的工具和数据范围）4) 可观测性（追踪 Agent 每一步决策和 Token 消耗）。框架：LangChain/LlamaIndex/CrewAI。MCP 协议：Agent 调用工具的标准协议。' }],
    exercises: [{ level: '进阶', task: '设计一个"自动处理 GitHub Issue"的 Agent 流程', hint: '获取 Issue → 分析 → 分类标签 → 分配 → 回复', answer: 'Agent 收到 Issue → 调 GitHub API 获取内容和标签 → LLM 分析问题类型（bug/feature/question）→ 调 API 加标签和 assignee → 如果是常见问题→从知识库检索答案→调 API 回复模板。需要人工确认才执行（Human-in-the-loop）。' }],
  },
  "UTupdqjOyLh7-56_0SXJ8": {
    mentalModel: 'AI 基础——后端不需要成为 ML 工程师，但要懂 Token/上下文/推理、会用 LLM API、会写 Prompt、能实现 RAG。这是 2025 年的"会写 SQL"。',
    sections: [{ title: '后端学 AI 的最小路径', content: '1) Token 概念：按 token 计费，中文字≈1-2 token，英文单词≈1-2 token 2) LLM API 调用：OpenAI/Anthropic SDK 3) Prompt Engineering：角色设定+清晰指令+示例+约束+输出格式 4) RAG：Embedding→向量数据库→检索→LLM 答案 5) Function Calling：定义工具让 LLM 调用你的 API。4-6 周即可掌握。' }],
    exercises: [{ level: '基础', task: '用你学的后端语言调用 OpenAI API 完成一次对话', hint: '安装 openai 包→设置 API Key→调用 chat.completions.create', answer: 'Python: openai.chat.completions.create(model="gpt-4o-mini", messages=[{"role":"user","content":"Hello"}])。print(response.choices[0].message.content)' }],
  },
  "k4hMVVBMatedUq5EKiMo4": {
    mentalModel: 'Prompt Engineering 是"学会和 AI 沟通"——同样的问题，好的 Prompt 得到的答案质量差 10 倍。角色设定+清晰指令+Few-Shot 示例+约束+输出格式。',
    sections: [{ title: 'Prompt 模板', content: '结构化 Prompt = System Prompt（角色+全局约束）+ User Prompt（具体任务+输入数据+输出格式要求）。示例：{"role":"system","content":"你是资深后端工程师，回答必须包含代码示例和最佳实践"}。Few-Shot 技巧：给 2-3 个输入→输出范例，LLM 会模仿格式。Chain-of-Thought：要求"一步步分析"显著提升推理质量。' }],
    exercises: [{ level: '进阶', task: '写一个 Prompt：让 LLM 为一段代码生成单元测试', hint: '指定语言/框架/覆盖场景', answer: '"你是一个 Go 测试专家。为以下函数写 Table-Driven Test，覆盖正常输入、边界值、错误场景。只返回 Go 代码，不要解释。函数：[粘贴代码]"' }],
  },
  "E7-LveK7jO2npxVTLUDfw": {
    mentalModel: 'Antigravity 是一个 AI 开发工具。作为路线图中的参考节点——AI 工具日新月异，保持关注但不盲目追新。',
    sections: [{ title: 'AI 工具选择策略', content: '不要做工具收藏家——看到新 AI 工具就换。原则：1) 选定 1-2 个核心 AI 工具深入使用（如 Copilot+Cursor 或 Claude Code）2) 新工具试用 1 周后再决定是否切换 3) 团队统一工具链避免碎片化。工具是手段不是目的——代码质量和交付速度才是。' }],
    exercises: [{ level: '基础', task: '评估一下你当前用的 AI 编码工具效率', hint: '记录一天中 AI 帮了你多少次', answer: '记录一天：AI 补全了几次、Debug 了几次、解释了几段代码、生成了几个测试。如果日节省 < 30 分钟→考虑换工具或改进使用方式。' }],
  },
  "FQwaN_0-E9rx_CixqUqIE": {
    mentalModel: '到这里你已经具备后端求职能力——"知识学了 70%，剩下的 30% 在项目中学"。现在最重要的不是继续学，而是用项目验证你的能力。',
    sections: [{ title: '求职行动清单', content: '1) 2-3 个完整项目推上 GitHub（README+测试+部署）2) 准备 50 道 LeetCode Easy/Medium 3) 准备系统设计面试（3-5 经典案例）4) 更新简历+LinkedIn 5) 找内推而非海投。项目 > 证书 > 课程。一个好的 CRUD 全栈项目比 10 个 Udemy 证书有说服力。' }],
    exercises: [{ level: '基础', task: '列出你准备找后端工作的 3 个最有力的项目', hint: '全栈/有部署/有用户', answer: '例：1) 多人博客平台（用户系统+CRUD+搜索+部署）2) 任务管理 API（认证+WebSocket 实时推送+K8s 部署）3) AI 代码审查工具（RAG+LLM API+GitHub Webhook）。' }],
  },
  "iogwMmOvub2ZF4zgg6WyF": {
    mentalModel: '后端开发是整个路线图的终点——从"互联网基础"一路学到"系统设计"和"AI 集成"。但地图不是道路——真正的学习在写代码的路上。',
    sections: [{ title: '下一步做什么', content: '1) 选一个项目开始写（不要等"学完"——项目驱动学习最快）2) 遇到不会的回来查路线图节点 3) 定期回顾——做完项目后重看路线图会发现新的理解 4) 深入一个方向：数据库专家/分布式系统/DevOps/AI 集成。后端是起点不是终点——优秀后端持续学习 10 年+。' }],
    exercises: [{ level: '基础', task: '设定你接下来 3 个月的后端学习目标', hint: '具体+可衡量', answer: '例：每周写 200 行代码、3 个月内完成 2 个全栈项目并部署上线、参加 1 次技术分享。' }],
  },
  "ruK1Bf7XVIgOHguNFxYlY": {
    mentalModel: '系统设计是后端工程师最重要的进阶能力——从"能写功能"到"能设计系统"。详见 system-design 路线图了解 CAP/扩展/缓存/分片等核心概念。',
    sections: [{ title: '为什么系统设计重要', content: '初级后端写功能，高级后端设计系统。系统设计能力直接影响：1) 面试表现（大厂必考）2) 技术决策质量（选什么架构/数据库/中间件）3) 故障预防（设计时考虑了故障模式）。建议：做完 2-3 个 CRUD 项目后，开始学习系统设计——理解你的项目如何在 10 倍/100 倍流量下演进。' }],
    exercises: [{ level: '基础', task: '从 system-design 路线图中选 3 个最想先学的话题', hint: 'CAP/缓存/分片/消息队列', answer: '个人选择。推荐：1) CAP 定理（分布式理论基础）2) 缓存策略（最常见优化手段）3) 负载均衡（水平扩展基础）。' }],
  },
  "RyJFLLGieJ8Xjt-DlIayM": {
    mentalModel: 'Firebase 是 Google 的"后端即服务"——实时数据库+认证+云函数+存储一站式。适合快速原型和移动 App，不适合复杂业务系统。',
    sections: [{ title: 'Firebase 的适用边界', content: 'Firebase 优势：零运维、Firestore 实时同步、Auth 集成多社交登录、免费额度慷慨。劣势：NoSQL 不适合复杂关联查询、供应商锁定、成本随规模非线性增长（某日活跃用户 10 万可能月费 $3000+）。适合：MVP 验证、移动 App 后端、实时协作应用。不适合：需要复杂 SQL/JOIN、数据量 > 100GB 且持续增长、需要多供应商灵活性的系统。' }],
    exercises: [{ level: '基础', task: '对比 Firebase 和自建 PG+Node.js 后端的场景选型', hint: '快速 vs 灵活', answer: 'Firebase 适合：3 天出 MVP、移动端为主、团队没有后端经验。自建适合：复杂业务逻辑、需要对数据有完全控制、长期成本可控、需要 JOIN 和事务。' }],
  },
  "5T0ljwlHL0545ICCeehcQ": {
    mentalModel: 'RethinkDB 是"为实时推送而生的数据库"——所有查询默认支持 Changefeed（数据变化自动推送）。但在商业上失败了（公司已关闭），现在由 Linux 基金会维护。',
    sections: [{ title: 'RethinkDB 的遗产', content: 'RethinkDB 的 Changefeed 设计影响了后来的 MongoDB Change Streams 和 Supabase Realtime。它的核心理念——"数据库应该主动推数据变化而非让应用轮询"——现在已是主流。虽然它本身不再流行，但学它的设计思想有助理解实时数据库的演进。' }],
    exercises: [{ level: '基础', task: 'RethinkDB 的 Changefeed 理念在现代哪些工具中延续', hint: 'MongoDB/Supabase', answer: 'MongoDB Change Streams、Supabase Realtime（基于 PG 逻辑复制+WebSocket）、Firebase Realtime Database 都继承了"数据库主动推送变更"的思想。' }],
  },
  "5xy66yQrz1P1w7n6PcAFq": {
    mentalModel: 'AWS Neptune 是 AWS 的全托管图数据库——支持 Property Graph（Gremlin/openCypher）和 RDF（SPARQL）。不用自己运维 Neo4j 集群，AWS 帮你搞定。',
    sections: [{ title: 'Neptune vs Neo4j', content: 'Neptune 优势：全托管（自动备份/多 AZ/自动扩容）、和 AWS 服务集成（IAM/Lambda/S3/CloudWatch）、支持两种图模型。Neo4j 优势：更成熟的查询语言（Cypher）、社区更大、非 AWS 锁定的跨云方案。适合：已在 AWS 生态且需要图数据库→选 Neptune，跨云/需要 Cypher 灵活性→选 Neo4j。' }],
    exercises: [{ level: '基础', task: '什么是图数据库的两个主要查询标准', hint: 'Gremlin vs SPARQL', answer: 'Property Graph 模型用 Gremlin 或 openCypher（类似 Neo4j 的 Cypher）。RDF 模型用 SPARQL。Neptune 两种都支持——根据数据模型选择查询语言。' }],
  },
  "GKrcTsUi5XWj_pP1TOK0S": {
    mentalModel: 'DGraph 是用 Go 写的分布式图数据库——原生支持 GraphQL 风格查询（DQL）、水平扩展。和 Neo4j 的区别：DGraph 天生分布式、Neo4j 更偏单机/集群。',
    sections: [{ title: 'DGraph 的定位', content: 'DGraph 特色：1) DQL（Dgraph Query Language）是 GraphQL 的超集——如果你会 GraphQL，上手很快 2) 原生分片——数据按 predicate 自动分布到多个节点 3) 事务支持——分布式 ACID 事务 4) Go 编写——对 Go 生态友好。适合：需要水平扩展的图数据场景。缺点：社区小、文档不如 Neo4j 全、招人难。' }],
    exercises: [{ level: '基础', task: 'DGraph 的查询语言和 GraphQL 有什么关系', hint: '超集', answer: 'DQL 是 GraphQL 的超集——继承了 GraphQL 的语法风格但增加了图遍历（@filter/@recurse/@cascade）和更灵活的数据修改能力。如果你用过 GraphQL，DGraph 的查询语法 5 分钟就能看懂。' }],
  },
  "aArZ3gKwObzafCkTOd-Hj": {
    mentalModel: 'ScyllaDB 是 Cassandra 的"C++高性能替代版"——用 C++ 重写（Cassandra 是 Java），兼容 Cassandra 的 CQL 协议但性能 5-10 倍。适合极高性能的宽列存储场景。',
    sections: [{ title: 'ScyllaDB vs Cassandra', content: 'ScyllaDB 优势：1) C++ 实现无 GC 停顿 2) 异步 shard-per-core 架构——每个 CPU 核心独立工作，无锁竞争 3) 吞吐量/延迟显著优于 Cassandra。劣势：1) 部分 Cassandra 功能不支持（如物化视图）2) 生态工具兼容性需验证 3) 调优参数更多。适合：对延迟敏感的在线服务（Cassandra 的 GC 停顿可能造成 P99 延迟尖刺）。' }],
    exercises: [{ level: '基础', task: 'ScyllaDB 最大的设计差异是什么', hint: '架构', answer: 'Shard-per-core——每个 CPU 核心独立管理自己的数据和请求，避免跨核心锁竞争和上下文切换。这也是它比 Java 写的 Cassandra 快的关键原因。' }],
  },
  "qOlNzZ7U8LhIGukb67n7U": {
    mentalModel: 'CouchDB 是"以 HTTP 为接口的文档数据库"——所有操作（CRUD）都是 HTTP 请求。最独特的是多主复制（离线写入→网络恢复→自动同步），适合边缘设备/离线优先应用。',
    sections: [{ title: 'CouchDB 的独特定位', content: 'CouchDB 最大特色：1) HTTP API——用 curl 就能操作数据库 2) 多主复制——多个节点各自接受写入，CouchDB 自动解决冲突并同步 3) 离线优先——移动端/边缘设备离线写入，联网后自动同步。场景：物联网（传感器离线收集→联网同步）、移动 App（离线操作→同步到云端）、分布式边缘计算。不适合：需要复杂查询和事务的标准 Web 应用。' }],
    exercises: [{ level: '基础', task: 'CouchDB 的多主复制和其他数据库的主从复制有什么不同', hint: '谁可以写', answer: '主从复制：只有主库接受写入。CouchDB 多主复制：每个节点都可以接受写入→异步同步→自动冲突解决（或人工介入）。这适合网络不稳定/离线场景——App 本地写 CouchDB→联网后自动同步到云端。' }],
  },
  "4X-sbqpP0NDhM99bKdqIa": {
    mentalModel: '埋点（Instrumentation）是代码中"装传感器"——OpenTelemetry 是标准 SDK，一次埋点可发送到任何兼容后端（Jaeger/Prometheus/Datadog）。',
    sections: [{ title: 'OpenTelemetry 核心概念', content: 'Traces：一次请求在多个服务间的完整路径（Span 链）。Metrics：计数器/直方图记录性能指标。Logs：结构化日志关联 Trace ID。自动埋点：很多框架有 OTel 中间件——HTTP 请求自动创建 Span、数据库查询自动记录。手动埋点：在关键业务操作创建 Span——tracer.startSpan("createOrder") → 执行业务 → span.end()。' }],
    exercises: [{ level: '进阶', task: '用 OpenTelemetry SDK 在 HTTP 中间件中自动为每个请求创建 Span', hint: 'otelhttp.NewHandler', answer: 'Go: handler = otelhttp.NewHandler(mux, "my-service")。Node.js: const sdk = new NodeSDK({traceExporter: new OTLPTraceExporter()}); sdk.start()。自动为每个请求创建根 Span，记录 method/path/status_code。' }],
  },
};