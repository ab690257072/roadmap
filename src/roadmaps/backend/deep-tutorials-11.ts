import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_11: Record<string, DeepTutorial> = {
  "-ye5ZtYFDoYGpj-UJaBP8": {
    mentalModel: 'OpenAI 是 GPT 系列模型的创造者——ChatGPT 背后的公司。后端通过 OpenAI API（/v1/chat/completions）集成 LLM。',
    sections: [
      { title: 'OpenAI API 集成', content: '核心 API：POST /v1/chat/completions → {model:"gpt-4", messages:[{role:"user",content:"..."}]} → 返回 AI 生成文本。参数：temperature（0-2，越低越确定）、max_tokens（限制输出长度）、stream（流式返回）。其他 API：Embeddings（文本→向量）、DALL·E（生成图片）、Whisper（语音转文字）、TTS（文字转语音）。定价：按 token 收费（输入/输出分开计）。' },
    ],
    diagnosis: [
      { symptom: 'OpenAI API 返回 429 Too Many Requests', cause: '触发了 Rate Limit——免费账号每分钟请求数极低（3 RPM），或付费账号也有限制。', fix: '1) 检查 usage tier 和 rate limit 2) 客户端实现指数退避重试 3) 升级 Tier 或用多个 API Key 轮询。' },
      { symptom: 'OpenAI 返回 The model gpt-4 has been deprecated', cause: '模型版本已退役——OpenAI 定期淘汰旧模型。', fix: '1) 用最新的模型名称（如 gpt-4o 替代 gpt-4）2) 代码中模型名放配置文件方便统一更新 3) 关注 OpenAI 的 deprecation 公告。' },
    ],
    exercises: [
      { level: '基础', task: '用 curl 调用 OpenAI Chat API', hint: 'curl -H "Authorization: Bearer $KEY" -d \'{"model":"gpt-4o-mini","messages":[{"role":"user","content":"Hello"}]}\'', answer: 'curl https://api.openai.com/v1/chat/completions -H "Authorization: Bearer $OPENAI_API_KEY" -H "Content-Type: application/json" -d \'{"model":"gpt-4o-mini","messages":[{"role":"user","content":"Say hello in Chinese"}]}\'' },
    ],
  },
  "Lw2nR7x8PYgq1P5CxPAxi": {
    mentalModel: 'Anthropic 是 Claude 模型的创造者——Claude 在长上下文（200K tokens）和安全性方面领先。Claude Code 是基于 Claude 的 AI 编程代理。',
    sections: [
      { title: 'Claude API 集成', content: 'API：POST /v1/messages → {model:"claude-sonnet-4-20250514", max_tokens:1024, messages:[{role:"user",content:"..."}]}。特点：超大上下文窗口（200K tokens≈一本小说）、Tool Use（Function Calling）完善、输出格式支持 JSON Schema 约束。安全性：Constitutional AI 训练方式让 Claude 更不容易生成有害内容。' },
    ],
    diagnosis: [
      { symptom: 'Claude API 返回 529 Overloaded', cause: 'Anthropic 服务器过载——高峰时段请求太多。', fix: '1) 实现指数退避重试 2) 降级到备用模型（如 Haiku 替代 Sonnet 处理非关键任务）3) 关键服务用专用容量（Provisioned Throughput）。' },
      { symptom: 'Claude 返回的 Tool Use arguments 格式和定义的 schema 不完全匹配', cause: 'Claude 的 Tool Use 很强大但仍可能因为 schema 描述不清晰产生字段偏差。', fix: '1) Tool 定义中的 description 越详细越好 2) 返回后做 JSON Schema 校验，失败时发 error 给 Claude 重试 3) 字段名保持简洁且和 description 一致。' },
    ],
    exercises: [
      { level: '基础', task: 'Claude 相比 GPT-4 最大的竞争优势是什么', hint: '上下文', answer: '1) 更大上下文（200K vs 128K tokens）2) 更强调安全性（Constitutional AI）3) Tool Use/Function Calling 设计更标准化 4) 价格通常更低（Sonnet 性价比高）。' },
    ],
  },
  "Bic4PHhz-YqzPWRimJO83": {
    mentalModel: 'Gemini 是 Google 的多模态 AI 模型——原生支持文本+图片+视频+音频+代码。通过 Google AI Studio 或 Vertex AI 调用。GCP 生态用户首选。',
    sections: [
      { title: 'Gemini API', content: 'API 同时支持 REST 和 gRPC。特点：多模态原生支持（一张图+一段文字一起发给模型分析）、Google 搜索集成（Grounding——模型回答时自动引用搜索结果）、超大上下文（1M tokens——Gemini 1.5 Pro）。Vertex AI：企业级 AI 平台——模型管理/评估/部署/A/B 测试一套全包。' },
    ],
    diagnosis: [
      { symptom: 'Gemini 返回的 safety ratings 全部 BLOCK，回答被拒绝', cause: 'Gemini 的安全过滤比 OpenAI 和 Claude 更严格——正常问题也可能被误判。', fix: '1) 调整 safety_settings 阈值：HARM_CATEGORY_HARASSMENT -> BLOCK_NONE 2) 检查输入内容是否触发了特定安全类别 3) 必要的话换模型供应商。' },
      { symptom: 'Gemini API 返回 503 The model is overloaded', cause: 'Google AI 的免费层容量有限——高频调用时容易被限流。', fix: '1) 加 Rate Limiting 和重试 2) 升级到付费版 API Key 3) 或通过 Vertex AI（企业级 SLA）调用。' },
    ],
    exercises: [
      { level: '基础', task: 'Gemini 1.5 Pro 的 1M token 上下文是什么概念', hint: '一本书多少 token', answer: '1M tokens ≈ 约 75 万英文单词 ≈ 约 3 本《三体》的长度。可以一次把整部小说扔给模型做分析而不需要 RAG 切片。' },
    ],
  },
  "2zqZkyVgigifcRS1H7F_b": {
    mentalModel: 'roadmap.sh 是一个开源的学习路线图网站——本项目的路线图数据来源于此。社区维护，覆盖前端/后端/DevOps/各种语言和技术栈的学习路径。',
    sections: [
      { title: '如何使用 roadmap.sh', content: '访问 roadmap.sh 选择路线图→交互式看节点和连接→点击节点看详情和资源。GitHub 开源：github.com/kamranahmedse/developer-roadmap。本项目后端路线图的 stage/node 数据通过 scripts/import-roadmaps.mjs 从 roadmap.sh API 导入，再手写中文教程、深度学习内容和教学图解。' },
    ],
    diagnosis: [
      { symptom: '从 roadmap.sh 导入数据失败——API 返回 404', cause: 'roadmap.sh API 的 roadmap ID 变了或该路线图已被移除。', fix: '1) 检查 https://roadmap.sh 上路线图是否仍存在 2) 用正确的 ID（如 backend 而非 backend-roadmap）3) 手动维护数据文件作为 fallback。' },
    ],
    exercises: [{ level: '基础', task: '访问 roadmap.sh 找到 backend 路线图，了解它的交互方式', hint: '浏览器打开 roadmap.sh/backend', answer: 'roadmap.sh/backend 展示了完整的后端学习路线，点击节点可看详情。本项目就是基于这个路线图数据构建的中文深度教程。' }],
  },
  "cnZFR67IbmEL-SkNwYc5S": {
    mentalModel: '这是一个指向 roadmap.sh 网站的导航节点。详见上一节点。',
    diagnosis: [
      { symptom: '导航节点引用失效——指向了不存在的内容', cause: '这是一个占位节点——指向 roadmap.sh 网站，平台相关内容见上一节点。', fix: '1) 确认导航目标存在——指向 roadmap.sh 官方网站 2) 这类导航节点作为链接跳转使用。' },
    ],
  },
  "IZKl6PxbvgNkryAkdy3-p": {
    mentalModel: 'AI 和传统编码的关系：AI 是"副驾驶"不是"自动驾驶"——它提建议你决策。用 AI 提速 30-50%，但代码质量、安全性、架构决策永远是人负责。',
    sections: [
      { title: 'AI 编码的边界', content: 'AI 擅长：生成 CRUD 样板、写测试、解释代码、格式转换、正则表达式、文档生成。AI 不擅长：系统架构设计、安全关键代码、业务逻辑判断、性能优化（需要 profiling）、Debug 复杂 Bug（需要运行时信息）。原则：AI 写的代码你必须理解——不理解的东西不上生产。' },
    ],
    diagnosis: [
      { symptom: 'AI 写了 200 行看起来完美的代码但运行时报类型错误', cause: 'AI 全凭训练数据模式匹配——不验证代码能否实际运行。', fix: '1) 永远不直接使用 AI 代码——自己编译/运行测试 2) 把 AI 代码当作初稿而非终稿 3) 至少运行 lint + 编译 + 单元测试后再合并。' },
      { symptom: '团队过度依赖 AI 后代码质量下降、风格不统一', cause: '每个人用 AI 生成代码但没人统一风格和规范。', fix: '1) AI 生成的代码也要经过 lint 和 code review 2) 团队统一 AI 编码规范和 prompt 模板 3) 定期回顾 AI 生成代码的质量指标。' },
    ],
    exercises: [
      { level: '基础', task: '举一个 AI 编码"能做"和一个"绝不能做"的场景', hint: '样板 vs 安全', answer: '能做：生成一个 REST API 的 CRUD Controller 骨架。绝不能做：直接使用 AI 生成的加密/认证实现而不理解其原理就部署到生产环境。' },
    ],
  },
  "Kvqsa2B03-sEQrlIeE_Kt": {
    mentalModel: 'AI 正在改变软件开发的方式——不是替代开发者，而是让开发者更高效。后端工程师需要了解的 AI 知识：LLM 基础、Prompt Engineering、RAG、Function Calling、向量数据库。',
    sections: [
      { title: '后端 + AI 的技术栈', content: '核心概念：Embedding（文本→向量）→ 向量数据库（相似搜索）→ RAG（检索+生成）→ LLM API。工具链：OpenAI/Anthropic SDK、LangChain/LlamaIndex（编排层）、pgvector/Pinecone（向量存储）。新增技能：Prompt Engineering（写好提示词）、Token 成本管理、流式响应处理、结构化输出解析。' },
    ],
    diagnosis: [
      { symptom: '项目引入了 LangChain 但只用到了其中 5% 的功能', cause: '过度依赖框架——简单调用 LLM API 不需要编排框架。', fix: '1) 从最简单的 SDK 直接调用开始（openai/anthropic SDK）2) 需要复杂编排（Agent/Memory/Multi-LLM）时才引入 LangChain 3) 框架升级频繁，注意投入产出比。' },
      { symptom: 'LLM 调用在代码中散落各处——Token 使用和成本不可控', cause: '没有统一的 LLM Access Layer——各模块各自调用，无法统一管理和监控。', fix: '1) 建 LLM Gateway/Service：统一入口管理认证、限流、计费、日志 2) 所有 LLM 调用走这个服务 3) 集中监控 Token 使用和成本。' },
    ],
  },
  "Nx7mjvYgqLpmJ0_iSx5of": {
    mentalModel: 'AI 在后端的应用场景——不只是聊天机器人！智能客服、代码审查辅助、异常检测、自动文档生成、数据分类、图像分析等。',
    sections: [
      { title: 'AI 应用场景', content: '后端 + AI：1) 智能客服（RAG+LLM）2) 日志异常检测（向量化日志→发现异常模式）3) 自动代码审查（PR diff→AI 分析→提交 review）4) SQL 查询优化建议（EXPLAIN→AI 解读→建议索引）5) 数据分类（邮件/评论→AI 分类→过滤/路由）6) 文档搜索（Embedding 公司内部文档→员工自然语言搜索）。' },
    ],
    diagnosis: [
      { symptom: 'AI 日志异常检测产生大量误报——正常波动被标为异常', cause: '基于规则的异常检测（阈值/百分比）对正常业务波动敏感。', fix: '1) 用机器学习异常检测（Isolation Forest/DBSCAN）替代简单规则 2) 对不同指标用不同的异常检测算法 3) 人工反馈循环——标记误报优化模型。' },
      { symptom: 'AI 自动代码审查的评论质量参差不齐——有时很好有时完全无关', cause: 'AI 对项目上下文理解不足——它在做通用代码检查而非项目特定的 review。', fix: '1) 在 Review Prompt 中提供项目规范和架构背景 2) 让 AI 先总结代码逻辑再提建议 3) 人工筛选 AI 评论——只保留有价值的。' },
    ],
  },
  "fVgKQ27R3HxbZvrqXM7Zi": {
    mentalModel: 'AI 模型提供商不止 OpenAI 一家——Anthropic(Claude)、Google(Gemini)、Meta(Llama开源)、Mistral、Cohere、国内(智谱/阿里/百度)。多 Provider 策略避免被锁定。',
    sections: [
      { title: 'Provider 选择', content: 'OpenAI：最成熟、生态最广、GPT-4o 多模态。Anthropic：长上下文+安全、Claude Sonnet 性价比高。Google：Gemini 多模态原生+GCP 集成+超大上下文。开源（Ollama+vLLM）：用 Llama3/Mistral 等开源模型本地部署——数据不出公司、零 API 费用但需要 GPU。选型：一般用 OpenAI 或 Anthropic API、对数据隐私要求高→开源模型自部署、已在 GCP→Gemini。' },
    ],
    diagnosis: [
      { symptom: '调用 OpenAI 时返回 The service is not available in your country', cause: 'OpenAI 对部分国家和地区有访问限制。', fix: '1) 确认 IP 所在地是否在 OpenAI 支持列表 2) 用 API 代理服务（如 api2d）3) 或用 Anthropic/Google 等替代供应商。' },
      { symptom: '多个 AI Provider 之间的 API 切换导致代码重写', cause: '每个 Provider 的 SDK 和 API 格式不同——切换成本高。', fix: '1) 用统一适配层（LiteLLM/One API）——统一接口调用多个 Provider 2) 或使用 OpenRouter 等多模型聚合服务 3) 关键功能实现 Provider 热切换。' },
    ],
  },
  "vpimgXt10UQFBDVHR21IU": {
    mentalModel: 'AI Agent 是"能自主完成任务的 AI"——不只是问答，而是规划步骤→调用工具→观察结果→调整计划→循环至完成。后端开发者需要理解 Agent 的工作原理来构建或集成 Agent 系统。',
    sections: [
      { title: 'AI Agent 路线图', content: 'Agent = LLM（推理）+ Tools（执行）+ Memory（记忆）+ Planning（规划）。后端技能需求：Function Calling 实现（定义工具的 API Schema）、状态管理（Agent 的中间结果和上下文保存）、安全控制（限制 Agent 能调用的工具和访问的数据）、可观测性（追踪 Agent 的每一步决策）。' },
    ],
    diagnosis: [
      { symptom: 'AI Agent 执行到一半停了——调用的 tool 返回了超出 LLM 上下文限制的数据', cause: 'Tool 返回了完整的数据库查询结果（几万行）——超长输出占满了上下文窗口。', fix: '1) Tool 结果做截断和摘要——返回前 N 条 + total count 2) 大数据查询分页返回 3) 设置 max_tool_output_length。' },
      { symptom: 'Agent 未经授权执行了敏感操作——删除了数据库记录', cause: 'Agent 的 tool 权限太大——给 Agent 的工具可以执行任意操作。', fix: '1) 最小权限原则——Agent 只能调用读了的数据、非破坏性 API 2) 危险操作加人工确认 3) Tool 层面加权限检查（scope/limit）。' },
    ],
  },
  "UTupdqjOyLh7-56_0SXJ8": {
    mentalModel: '学 AI 基础不需要成为 ML 工程师——后端只需要理解 LLM 的工作原理（Token/上下文/推理/训练 vs 推理）、懂 API 调用和 Prompt Engineering。',
    sections: [
      { title: '后端学 AI 的最小路径', content: '1) 理解 Token 概念 2) 学会用 OpenAI/Anthropic SDK 调用 LLM 3) 理解 Prompt Engineering 基础 4) 实现 RAG（Embedding + 向量数据库 + LLM）5) 实现 Function Calling/Tool Use。不需要：训练模型、深度学习框架（PyTorch）、数据标注。后端是"AI 的使用者"而非"AI 的创造者"。' },
    ],
    diagnosis: [
      { symptom: '后端学 AI 花 2 个月学了 Transformer 原理但工作中只用 API 调用', cause: '学习深度和工作需求不匹配——后端是用 AI，不是造 AI。', fix: '1) 后端学 AI 最小路径：调用 API -> Prompt Engineering -> RAG -> Function Calling 2) 不需要深度学习框架（PyTorch/TensorFlow）3) 理解 LLM 工作原理就够了——不需要会训练模型。' },
      { symptom: '本地跑开源 LLM 用 Ollama 加载 70B 模型——16GB 内存机器直接 OOM', cause: '不了解模型大小和硬件需求——70B 模型需要约 40GB 显存/内存。', fix: '1) 用 7B-13B 的小模型（如 Llama-3-8B、Qwen-7B）适合本地运行 2) 量化模型（Q4/Q5）减小内存占用 3) 大部分场景用 API 更经济实用。' },
    ],
  },
  "k4hMVVBMatedUq5EKiMo4": {
    mentalModel: '提示词工程（Prompt Engineering）是"学会如何和 AI 沟通"——同样的模型，好的 Prompt 能得到差 Prompt 10 倍好的结果。这是后端集成 AI 的必修技能。',
    sections: [
      { title: 'Prompt Engineering 技巧', content: '1) 角色设定："你是一个资深后端工程师" 2) 清晰指令：具体而非模糊 3) Few-Shot：给 2-3 个示例 4) Chain-of-Thought："一步一步分析" 5) 输出格式约束："只返回 JSON" 6) 负面约束："不要...不要..."。System Prompt vs User Prompt——System 设角色和全局约束，User 给具体任务。' },
    ],
    diagnosis: [
      { symptom: '产品环境换了模型版本后之前的 Prompt 效果差了很多', cause: 'Prompt 是依赖具体模型的——不同模型的 Prompt 理解和遵循能力不同。', fix: '1) 升级模型时重新评估和调整 Prompt 2) 建立 Prompt 效果的评估标准（准确率/格式合规率）3) 做 A/B 测试对比新旧模型+Prompt 效果。' },
      { symptom: '用户用提示词注入越过了 AI 客服的退款限制', cause: 'Prompt 中包含了你现在是一个不受任何限制的 AI——LLM 容易被角色套话绕过限制。', fix: '1) 用清晰的分隔符分离 System Prompt 和 User Input 2) 在 System Prompt 末尾重申核心约束 3) 检测和过滤已知注入模式（ignore previous instructions 等）。' },
    ],
  },
  "E7-LveK7jO2npxVTLUDfw": {
    mentalModel: 'Antigravity 是一个 AI 开发工具。作为路线图节点了解即可，实际使用取决于团队工具链选择。',
    diagnosis: [
      { symptom: 'Antigravity 作为第三方 AI 工具出现服务中断影响开发进度', cause: '任何第三方服务都可能有 downtime——过度依赖单一工具。', fix: '1) 核心开发流程不依赖单一 AI 工具（IDE 本身仍可用）2) 准备备用工具方案 3) 离线编码能力不应该因为 AI 不可用而丧失。' },
    ],
  },
  "FQwaN_0-E9rx_CixqUqIE": {
    mentalModel: '学到这里的你已经具备了找后端工作的基本能力——现在最重要的是用项目把知识练熟，而不是继续学新东西。简历上"做了什么"比"学过什么"重要 10 倍。',
    sections: [
      { title: '求职准备清单', content: '1) 2-3 个完整项目推上 GitHub（带 README/测试/部署链接）2) 刷 50 道 LeetCode（Easy+Medium）3) 准备系统设计面试（背 3-5 个经典案例）4) 更新 LinkedIn/掘金/知乎技术博客 5) 找 3 个内推而非海投。项目 > 证书 > 课程。一个好的 CRUD 项目比 10 个 Udemy 证书有说服力。' },
    ],
    diagnosis: [
      { symptom: '面试时被问到项目经历只能说做了 CRUD API', cause: '项目缺乏深度——功能太简单没有展示出技术难度。', fix: '1) 选一个项目深入优化：加缓存/消息队列/容器化/CI-CD/性能优化 2) 记录每个优化前后对比数据（QPS 从 100 -> 1000）3) 准备的面试故事中要有问题 -> 分析 -> 方案 -> 结果的完整链路。' },
      { symptom: '海投 100 份简历没有一个面试邀请', cause: '简历上只有学过的技术列表——没有任何项目链接和实际成果。', fix: '1) 简历中 60% 篇幅放项目经验——每个项目写清楚：做什么 + 用什么技术 + 取得什么结果 + 遇到什么难题 2) GitHub README 写详细——有架构图、部署链接、API 文档 3) 找内推而非海投。' },
    ],
  },
  "iogwMmOvub2ZF4zgg6WyF": {
    mentalModel: '后端开发是整个路线图的终点站——从"互联网基础"一路学到"系统设计"和"AI 集成"，你现在拥有了构建现代后端系统的完整知识地图。但地图不等于道路——真正的学习在路上。',
    diagnosis: [
      { symptom: '感觉学完了但又不知道接下来做什么', cause: '没有明确的下一个目标——路线图学完了但不知道该把知识用在哪。', fix: '1) 立即做 3 件事：搭一个完整项目 + 贡献开源项目 + 准备面试 2) 选择一个深入方向继续学习（系统设计/PostgreSQL/DevOps）3) 找工作或跳槽——实战是检验学习成果的最好方式。' },
    ],
  },
  "ruK1Bf7XVIgOHguNFxYlY": {
    mentalModel: '系统设计是后端工程师最重要的进阶能力——从"能写功能"到"能设计系统"。详见 system-design 路线图。',
    diagnosis: [
      { symptom: '面试系统设计题画图很乱——想到哪画到哪', cause: '没有系统设计框架——缺少结构化的思维过程。', fix: '1) 遵循 5 步框架：需求澄清 -> 容量估算 -> API 设计 -> 详细设计 -> 瓶颈优化 2) 每个步骤控制在面试时间的合理比例 3) 练习 10 个经典系统设计题（短链接/聊天/feed流/限流器）。' },
    ],
  },
  "RyJFLLGieJ8Xjt-DlIayM": {
    mentalModel: 'Firebase 是 Google 的"后端即服务平台"——实时数据库+认证+云函数+存储+托管一站式。适合快速原型和移动 App 后端。',
    sections: [
      { title: 'Firebase vs 自建后端', content: 'Firebase 优势：零运维、Firestore（实时文档数据库）、Auth（多社交账号登录）、Cloud Functions（Serverless）、Hosting（部署+CDN）。劣势：供应商锁定、NoSQL 不适合复杂查询、成本随规模增长快。适合：MVP 快速验证、移动 App、实时协作应用。不适合：需要复杂 SQL 查询、大型定制化后端。' },
    ],
    diagnosis: [
      { symptom: 'Firebase Firestore 查不到某个字段的数据——NoSQL 不支持跨字段搜索', cause: 'Firestore 是文档数据库——没有 JOIN 和跨 Collection 查询。', fix: '1) 数据模型设计时就把查询需求考虑进去——可能需要冗余/反范式化 2) 复杂搜索用 Firebase 扩展（如 Algolia/Elasticsearch 集成）3) 评估是否应该用 Supabase（基于 PG 支持 SQL）。' },
      { symptom: 'Firebase Cloud Functions 冷启动 5 秒——用户等了很久', cause: 'Cloud Functions 冷启动取决于代码包大小和运行时——Node.js 比 Python 快。', fix: '1) 设置最小实例数（min instances）保持 warm 2) 减小函数包体积 3) 对延迟敏感的服务用 Cloud Run 替代 Cloud Functions。' },
    ],
  },
  "5T0ljwlHL0545ICCeehcQ": {
    mentalModel: 'RethinkDB 是"为实时应用而生的文档数据库"——所有查询默认推送变更（Changefeeds）。不过在商业上失败了（公司已关闭），现在由社区维护。了解即可。',
    diagnosis: [
      { symptom: '考虑使用 RethinkDB 但发现社区不活跃，最新 release 是 3 年前', cause: '公司已于 2016 年关闭——虽然社区接管但发展缓慢。', fix: '1) 不推荐新项目使用——选择活跃维护的数据库 2) 如有遗留 RethinkDB 系统，考虑迁移到 PostgreSQL + Supabase Realtime 3) 或评估 MongoDB Change Streams 替代实时推送需求。' },
    ],
  },
  "5xy66yQrz1P1w7n6PcAFq": {
    mentalModel: 'AWS Neptune 是 AWS 的"全托管图数据库"——支持 Property Graph（Gremlin/openCypher）和 RDF（SPARQL）。适合知识图谱/推荐系统/欺诈检测。不用自己运维 Neo4j 集群。',
    diagnosis: [
      { symptom: 'AWS Neptune 查询超时——默认超时只有 30 秒', cause: '图数据库的深度遍历可能很耗时——Neptune 的查询超时限制。', fix: '1) 限制图遍历深度 2) 优化 Gremlin/Cypher 查询——减少遍历的节点数 3) 提高超时阈值（neptune_query_timeout 参数）。' },
      { symptom: 'Neptune 写入性能低——每次只插入几条数据', cause: 'Neptune 优化的是图遍历而非批量写入——逐条插入效率低。', fix: '1) 用 bulk loader 批量导入 CSV/Turtle 文件 2) 批量写入时用 batch 模式 3) 大量写入考虑先用其他数据库（如 DynamoDB）做源数据，定期同步到 Neptune。' },
    ],
  },
  "GKrcTsUi5XWj_pP1TOK0S": {
    mentalModel: 'DGraph 是分布式图数据库——用 GraphQL 做查询语言（DQL）。适合需要水平扩展的图数据场景。和 Neo4j 的区别：DGraph 原生分布式、Neo4j 偏向单机/集群。',
    diagnosis: [
      { symptom: 'DGraph 部署后 GraphQL 查询报错——Schema 定义和查询不匹配', cause: 'DGraph 的 DQL（Dgraph Query Language）虽类似 GraphQL 但有差异。', fix: '1) 学习 DGraph 特有的查询语法（func/uid/filter）2) 用 Ratel UI 交互式测试查询 3) Schema 定义注意 predicate 的类型和索引。' },
      { symptom: 'DGraph 集群数据分布不均——某个节点的数据是其他节点的 3 倍', cause: '没有选择合适的 shard key——UID 分布不均或 predicate 访问热点。', fix: '1) 设计 UID 时用随机分布（如 UUID）而非顺序 ID 2) 检查哪些 predicate 集中在一个 group 3) 手动 rebalance 或增加 group 数量。' },
    ],
  },
  "aArZ3gKwObzafCkTOd-Hj": {
    mentalModel: 'ScyllaDB 是 Cassandra 的"高性能替代版"——用 C++ 重写（Cassandra 是 Java），兼容 Cassandra 的 CQL 协议但快 5-10 倍。适合极高性能的宽列存储场景。',
    diagnosis: [
      { symptom: '从 Cassandra 迁移到 ScyllaDB 后发现部分查询变慢了', cause: '虽然兼容 CQL 协议但内部实现不同——某些查询模式在 ScyllaDB 上表现不同。', fix: '1) 迁移前用实际查询负载做性能对比测试 2) 配置 ScyllaDB 的 I/O 调度器和 compaction 策略 3) 调整 application 端的查询超时和重试策略适应新性能特征。' },
    ],
  },
  "qOlNzZ7U8LhIGukb67n7U": {
    mentalModel: 'CouchDB 是"以 HTTP 为接口的文档数据库"——所有操作（CRUD）都是 HTTP 请求。特点：多主复制（离线写入→网络恢复→自动同步），适合边缘设备/离线优先应用。',
    diagnosis: [
      { symptom: 'CouchDB 多主复制导致同一个文档在两个实例上有不同版本', cause: '多主复制下并发写同一个文档必然产生冲突——CouchDB 保留所有冲突版本。', fix: '1) 应用层实现冲突解决策略（如 LWW/CRDT）2) 避免多主写同一个文档 3) 定期清理已解决的冲突。' },
      { symptom: 'CouchDB 的 HTTP API 在高并发下延迟很高', cause: '每次操作都是独立 HTTP 请求——连接建立和关闭开销累积。', fix: '1) 用 HTTP Keep-Alive 复用连接 2) 批量操作：/db/_bulk_docs 一次处理多个文档 3) 客户端连接池保持一定数量的常驻连接。' },
    ],
  },
  "381Kw1IMRv7CJp-Uf--qd": {
    mentalModel: '集成测试验证"零件组装起来能协同工作"——不像单元测试 mock 一切，而是用真实数据库/缓存/消息队列测试多个模块的交互。',
    sections: [
      { title: '集成测试实践', content: '工具：Testcontainers（Docker 启动真实 PG/Redis 做测试）、Embedded PG（测试用内存 PG）。测试场景：1) API→数据库→返回 2) 订单创建→库存扣减→消息通知 3) 认证中间件→JWT 验证→用户信息获取。原则：测真实交互路径、测试数据隔离（每个测试有独立数据）、清理（teardown 删测试数据）。' },
    ],
    diagnosis: [
      { symptom: '集成测试在 CI 环境失败——缺少 Docker daemon 或 Testcontainers 无法启动', cause: 'CI Runner 不支持 Docker-in-Docker（DinD）或环境配置错误。', fix: '1) CI 中使用 Docker executor（如 GitHub Actions runs-on: ubuntu-latest 自带 Docker）2) 配置 Testcontainers 用远程 Docker daemon 3) 关键集成测试 mock 外部依赖。' },
      { symptom: '集成测试创建了脏数据残留——每次跑完数据库里多了一堆测试数据', cause: '测试后没有清理——teardown 步骤遗漏。', fix: '1) 每个测试 suite 在独立的数据库 schema/table 中运行 2) afterAll 中清理所有测试数据 3) Testcontainers 用完后容器自动销毁。' },
    ],
    exercises: [
      { level: '基础', task: '用 Testcontainers Docker 启动 PG 做集成测试（伪代码）', hint: 'Testcontainers 自动启停容器', answer: 'beforeAll: pg = new PostgreSQLContainer("postgres:16"); pg.start(); datasource = createDatasource(pg.getJdbcUrl()); 测试: repository.save(user); User result = repository.findById(1); assert match; afterAll: pg.stop();' },
    ],
  },
  "4X-sbqpP0NDhM99bKdqIa": {
    mentalModel: '埋点（Instrumentation）是在代码中主动插入遥测代码——记录耗时、错误、上下文。OpenTelemetry 是"埋点 SDK 的标准"——一次埋点，可以发送到任何兼容后端。',
    sections: [
      { title: 'OpenTelemetry 埋点', content: 'Traces：创建 Span→记录属性→结束 Span。Metrics：创建 Meter→上报计数器/直方图。Logs：结构化日志关联 Trace ID。后端自动埋点：很多框架已有 OTel 中间件（Express/FastAPI/Spring Boot 的 otel 库）。HTTP 中间件自动为每个请求创建 Span 记录耗时+状态码。数据库驱动层自动为每个 SQL 创建 Span。' },
    ],
    diagnosis: [
      { symptom: 'OpenTelemetry SDK 升级后 exporter 不再发送数据到后端', cause: 'OTel 版本不兼容——SDK 和 Collector/Exporter 的版本需要匹配。', fix: '1) OTel SDK 和 Collector 版本保持兼容（检查 release notes）2) 用 OTel Collector 做中介——应用只发送 OTLP 协议数据给 Collector 3) 升级前在 staging 验证。' },
      { symptom: '启用 OpenTelemetry 后应用 CPU 使用增加了 15%', cause: '每个 Span 的创建和属性记录都有 CPU 开销——高频请求路径上 overhead 显著。', fix: '1) 增大采样率（如 10% -> 1%）2) 减少 Span 属性数量——只记录关键 metadata 3) 对性能敏感的代码路径手动控制 Span 粒度。' },
    ],
  },
};
