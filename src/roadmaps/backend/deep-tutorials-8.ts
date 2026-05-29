import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_8: Record<string, DeepTutorial> = {
  // ============================================================
  // 161-194: Code Review, Refactoring, AI Features, Docs, Related Roadmaps
  // ============================================================
  "0TMdly8yiqnNR8sx36iqc": {
    mentalModel: '代码评审（Code Review）是团队共享代码质量的"检查站"——不是找茬，而是知识传递、风险发现、标准对齐。被审的人学最佳实践，审的人了解代码变更。双向受益。',
    sections: [
      { title: '高效 Code Review 原则', content: '提交者：PR 小（<400 行）、写清楚做了什么和为什么、自审一遍再提。评审者：关注逻辑正确性和安全性、不纠结风格（lint 自动处理）、24 小时内给反馈、区分"必须改"和"建议改"。AI 辅助：用 Copilot/Cursor 做第一轮审查（发现明显问题），人工做第二轮（发现业务逻辑和架构问题）。不要流于形式——"LGTM" 不是 Code Review。' },
      { title: 'Code Review 检查清单', content: 'L1 必须检查（安全问题）：1) SQL 拼接/注入——是否使用了参数化查询 2) 认证/授权——是否有越权访问的可能 3) 密钥/密码——是否硬编码 4) 输入校验——所有外部输入是否验证。L2 应该检查（逻辑和设计）：5) 业务逻辑正确性——边界条件是否处理 6) 错误处理——不吞异常、不暴露堆栈 7) 并发安全——共享状态是否加锁 8) 数据库——是否有 N+1 查询、是否缺索引。L3 建议检查（可维护性）：9) 命名是否清晰 10) 函数是否太长（>50 行建议拆分）11) 是否有重复代码。好的 Review comment：指出位置 + 解释为什么是问题 + 给出替代建议。' },
    ],
    handsOn: [
      { title: '用 Git Diff 自审即将提交的代码', cmd: 'git diff origin/main...HEAD -- . | head -200', output: '(显示即将提交的 diff 前 200 行)', explain: '自审就是把自己当 Reviewer 读一遍 diff。很多低级错误（console.log 没删、注释掉的代码、写死的路径）自审时就能发现。' },
    ],
    diagnosis: [
      { symptom: 'Code Review 拖了 3 天没人看', cause: 'PR 太大（>1000 行）——Reviewer 看到巨大 diff 产生心理负担', fix: '拆分 PR——每个 PR <400 行，单一目的。团队公约：PR 24 小时内给反馈，超过 24h 提起提醒' },
      { symptom: 'Code Review 变成"拼写纠错"和"格式审查"，没人关注逻辑和安全', cause: '团队缺少自动化 lint/format 工具——人为关注了机器能做的事，耗尽了 Reviewer 的注意力', fix: 'prettier/eslint/golangci-lint 在 CI 中强制执行——格式问题由 CI 报错而非 Reviewer 指出。Reviewer 只关注逻辑、安全、设计' },
    ],
    exercises: [
      { level: '基础', task: '列出好的 PR 应该包含的 3 个要素', hint: '大小/描述/自审', answer: '1) 小——一次只做一件事（<400 行）2) 清晰的描述——写了什么、为什么这样写、如何测试 3) 自审——提交前自己过一遍 diff，把低级错误在提 PR 前修正。' },
      { level: '进阶', task: '编写一份团队的 Code Review 指南——包含 Review 优先级、评论分类、和处理分歧的流程', hint: 'P0=安全 P1=逻辑 P2=风格', answer: '优先级：P0（安全/数据丢失风险）→必须在合并前修复。P1（逻辑错误/性能问题）→必须在合并前修复或记录为已知债务。P2（命名/风格/可读性）→建议改但作者有最终决定权。评论分类：[blocking] 必须修复、[suggestion] 建议改进、[question] 询问原因、[praise] 写得好的地方。分歧处理：引入第三方 Reviewer 仲裁。"不同意但支持"——争议不阻塞合入，作者标记 TODO 并在后续 PR 中改进。' },
    ],
  },

  "EYT2rTLZ8tUW2u8DOnAWF": {
    mentalModel: '重构就像"搬家整理"——不是买新家具（加新功能），而是把现有的东西重新归类、扔掉不用的、把常用的放在好拿的地方。代码的行为不变，结构变好。',
    sections: [
      { title: '重构的原则', content: '红→绿→重构：先写测试（红）→ 让测试通过（绿）→ 重构优化代码结构（保持绿）。不要在没有测试的情况下大规模重构。常见重构手法：提取函数（太长的函数拆小）、提取类（一个类做了太多事）、消除重复（DRY 但不能过度）、简化条件表达式、用多态代替 switch。AI 辅助重构很好用：选中要重构的代码→让 AI 提出重构建议→审查后应用。但必须跑测试确认行为没变。' },
      { title: '何时重构——识别"坏味道"代码', content: 'Martin Fowler 的《重构》定义了代码坏味道（Code Smells），最常见且危害最大的 5 种：1) 过长函数（>50 行）→ 提取小函数，每个函数只做一件事 2) 过大类（>300 行）→ 按职责拆分为多个类 3) 重复代码 → 提取公共函数（但不要过度 DRY——业务含义不同的相同代码不应合并）4) 长参数列表（>4 个参数）→ 封装参数对象 5) 神秘命名（a/b/temp/data）→ 用有意义的命名。最佳时机：在添加功能前先重构，而非专门安排"重构周期"。' },
    ],
    handsOn: [
      { title: '用 AI 工具重构一个长函数', cmd: '# 在 AI 工具中输入："重构下面这个函数，按职责拆分为更小的函数，保持行为不变"\n# (粘贴长函数代码)\n# AI 返回拆分建议，人工审查后应用', output: '(AI 重构方案)', explain: 'AI 擅长识别逻辑边界并给出拆分建议。关键步骤：先确保有测试覆盖（绿→重构→绿），再让 AI 重构，最后跑测试确认。' },
    ],
    diagnosis: [
      { symptom: '重构后功能坏了但测试全部通过', cause: '测试覆盖不够——测试了 happy path 但没有测试边界和异常情况', fix: '重构前先补充测试（用 mutation testing 工具检查测试覆盖质量），确保测试覆盖了所有关键路径和边界' },
      { symptom: '重构"停不下来"——改了一个地方引发连锁修改', cause: '缺少解耦——代码模块之间依赖太强，改一处需要同步改多处', fix: '先解耦再重构——用接口隔离、依赖注入降低模块间直接依赖。如果改一处引发 10 处改动→先停下来分析依赖关系→先解决耦合问题再继续' },
    ],
    exercises: [
      { level: '基础', task: '举一个"坏味道"代码和它重构后的版本', hint: '长函数拆小', answer: '坏味道：一个 200 行的 processOrder 函数包含了参数校验+库存扣减+价格计算+发通知。重构：拆成 validateOrder() + reserveInventory() + calculatePrice() + notifyUser()，processOrder() 变成调用这四个函数的编排器。' },
      { level: '进阶', task: '为一个复杂的条件逻辑做重构：if-else 有 10+ 个分支，每个分支处理不同支付方式。如何用多态优雅重构？', hint: '策略模式（Strategy Pattern）', answer: '坏味道：if payment_type == "credit_card": ... elif payment_type == "alipay": ...（10+ 分支）。重构：interface PaymentProcessor { process(order) } → 每个支付方式实现一个类（CreditCardProcessor、AlipayProcessor、WechatProcessor）。工厂：PaymentProcessorFactory.get(payment_type).process(order)。新支付方式只需添加新类（开闭原则——对扩展开放、对修改封闭）。' },
    ],
  },

  "q7NpwqQXUp4wt2to-yFiP": {
    mentalModel: 'AI 写文档就像有个"技术文档实习生"——能快速生成草稿，但你需要审查事实准确性、补充业务上下文、修正过度自信的错误。用 AI 写文档可以节省 70% 时间但需要 30% 人工打磨。',
    sections: [
      { title: 'AI 辅助文档实践', content: '适合 AI 生成：API 文档（从代码注解生成 OpenAPI）、README 骨架（项目介绍+安装+用法）、变更日志（从 commit history 生成）、代码注释。需要人工补充：架构决策（为什么选这个方案）、业务背景（为什么这样做）、故障处理文档（事故原因和修复过程）。工具：让 AI 分析代码库自动生成 API 文档和 README，然后人工补充非技术信息。' },
      { title: '用 AI 生成并维护 API 文档的完整流程', content: '1) 在代码中添加 OpenAPI 注解——注释是文档的源，代码即文档 2) CI 中自动生成 OpenAPI JSON/YAML——每次提交自动更新 3) 用 Redoc/Swagger UI 将 OpenAPI 渲染为可交互文档页面 4) 用 AI 检查——将 OpenAPI 文档发给 AI："检查这个 API 文档的完整性" 5) AI 补充——让 AI 生成缺少的字段说明、边界情况的使用建议 6) 人工审查——确认业务逻辑正确性、补充实际使用中的注意事项。原则：AI 生成文档的骨架和细节，人工注入业务灵魂。' },
    ],
    handsOn: [
      { title: '用 AI 从代码生成 API 文档', cmd: '# 在 AI 工具中输入："分析以下 REST API handler 代码，生成 OpenAPI 3.0 规范文档（YAML），包含所有端点的请求/响应 schema 和错误码"\n# (粘贴你的 handler/controller 代码)', output: '(AI 生成完整的 OpenAPI YAML)', explain: 'AI 能自动识别路由、参数、返回值并生成标准格式的 OpenAPI 文档。比手写快 10 倍，但需要人工确认参数类型和描述是否准确。' },
    ],
    diagnosis: [
      { symptom: 'AI 文档和实际代码不一致——文档说有参数但代码已删除', cause: '文档在一次 AI 生成后再没更新——没有纳入 CI 流程自动更新', fix: '文档必须和代码绑定——OpenAPI 注解在代码中，CI 中对文档和代码的一致性做检查（如字段有变动时 CI 报错提示需更新文档）' },
      { symptom: 'AI 生成的文档太啰嗦——简单 API 也生成 3 页文档', cause: 'AI 倾向过度解释——对简单操作也生成长段落', fix: '在 Prompt 中加约束——"简洁描述（每端点不超过 3 句），只列出重要的参数和错误码"。文档是给人类工程师看的——POST /login 不需要 500 字解释什么是登录' },
    ],
    exercises: [
      { level: '基础', task: '用 AI 工具为一个项目生成 README 草稿，说出需要人工补充哪些部分', hint: '项目名字/技术栈 AI 能生成，什么不行？', answer: 'AI 能生成：项目说明、技术栈、安装步骤、基本用法示例。需要人工补充：架构图、为什么这样设计、部署注意事项、贡献指南、许可证。' },
      { level: '进阶', task: '为一个已有项目设计"文档即代码"的工作流——确保代码和文档永远同步', hint: '注解 + CI 生成 + CI 检查', answer: '1) 代码中用 OpenAPI 注解描述 API 2) CI 每次提交自动生成 openapi.json 3) CI 用 spectral/openapi-diff 检查——breaking change 但版本号没变→CI 报错；新增端点但没注解→CI 报错 4) 文档站点自动从最新 openapi.json 渲染 5) 文档变更和代码变更在同一个 PR 中——不允许"先合代码、稍后补文档"。' },
    ],
  },

  "AAKnlJqWaAc8-zRvtIC6E": {
    mentalModel: '构建 AI 功能时，后端是"AI 的管家"——接收用户请求、拼装 Prompt、调用 LLM API、处理流式响应、解析结构化输出、管理 Token 用量。AI 是工具，后端是使用工具的手。',
    sections: [
      { title: '后端集成 AI 的常见模式', content: '1) Chat 模式：POST /chat → 拼 Prompt + 上下文 → 调 LLM → SSE 流式返回 2) RAG 模式：嵌入文档→向量数据库，用户提问→检索相关文档→拼上下文→LLM 回答 3) Function Calling：LLM 决定调用哪个 API → 后端执行 API → 返回结果给 LLM → LLM 总结回答 4) 结构化输出：要求 LLM 返回 JSON Schema → 后端解析并执行业务逻辑。技术栈：LangChain/LlamaIndex（编排层）+ OpenAI/Anthropic SDK + pgvector/Pinecone（向量存储）。' },
      { title: '生产环境的 LLM 集成——可靠性、成本、延迟', content: 'LLM 集成到生产不像 Demo 那么简单。核心挑战：1) 可靠性——LLM 调用可能超时、返回格式不合 Schema。必需：重试 + 降级（缓存常见问题的答案、超时时返回"AI 暂不可用"）2) 成本——每次 LLM 调用都有费用。节省策略：缓存相同/相似的输入、使用便宜的模型做简单任务、缩短 Prompt 3) 延迟——LLM 响应时间不可预测。解决方案：流式输出、设置超时（如 30s）4) 评估——建立 eval 集（标注好"正确答案"的测试问题），每次改 prompt/换模型后跑 eval。' },
    ],
    handsOn: [
      { title: '用 LangChain 快速搭建 RAG 应用（Python）', cmd: 'cat > /tmp/rag_app.py << \'EOF\'\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.vectorstores import Chroma\nfrom langchain.llms import OpenAI\nfrom langchain.chains import RetrievalQA\n\nloader = TextLoader("docs.txt")\ndocs = loader.load_and_split()\nvectordb = Chroma.from_documents(docs, OpenAIEmbeddings())\nqa = RetrievalQA.from_chain_type(OpenAI(model="gpt-4o"), retriever=vectordb.as_retriever())\nprint(qa.run("如何重置密码？"))\nEOF', output: '(RAG 应用代码)', explain: 'LangChain 封装了 embedding、检索、调用 LLM 的完整流程。生产环境需替换 Chroma 为 Pinecone/pgvector（持久化）。' },
    ],
    diagnosis: [
      { symptom: '用户反馈 AI 回答有时完全不对（幻觉），但有时又很准', cause: 'RAG 检索失败——检索到的文档和用户问题不相关，LLM 基于不相关文档生成答案', fix: '在 RAG pipeline 中加检索质量检查——如果 top-1 相似度 < 阈值（如 0.7），返回"抱歉，没有找到相关信息"而非让 LLM 强行回答' },
      { symptom: 'AI 功能上线后 Token 成本月均 2000 美金', cause: '没有成本控制——每次请求都把完整聊天历史+全量知识库发给 LLM', fix: '1) 裁剪历史消息（只保留最近 N 轮）2) 简单问题用便宜模型（如 gpt-4o-mini）3) 加缓存——相同问题直接返回缓存结果 4) Prompt Caching 节省重复 system prompt 费用' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个 AI 客服系统的后端架构', hint: '用户问题 → RAG 检索 → LLM → 如果需要人工→转人工', answer: '1) 用户 POST /chat {question} 2) embedding 用户问题→向量数据库检索 FAQ 和产品文档→取 top-5 相关文档 3) 拼 Prompt: system="你是客服...根据以下文档回答" + 文档 + 用户问题 4) 调 LLM（stream=true）→ SSE 返回 5) 如果 LLM 置信度低或用户要求转人工→创建工单→通知人工客服。' },
      { level: '基础', task: '对比直接调用 LLM API 和使用 LangChain 的差异，什么时候选哪个', hint: '简单场景 vs 复杂 Pipeline', answer: '直接调用 API：适合简单 Prompt-响应、不需要编排的纯 LLM 调用。代码更少、依赖更少、调试更简单。LangChain：适合需要多个步骤编排（检索→LLM→解析→再检索）的复杂 AI 功能。代价：额外的抽象层，调试困难，API 变化频繁。建议：简单场景用原生 SDK，场景变复杂后再引入 LangChain。' },
    ],
  },

  "9f-aWi3_7USy4XpNzrTL6": {
    mentalModel: '流式输出（Streaming）就是把响应分成小块逐块发送——就像餐厅"做好了就端上"，而不是等全部菜做完一起上。用户看到第一个字只要 0.5 秒，体验远好于等 10 秒看完整答案。',
    sections: [
      { title: 'SSE 实现流式输出', content: '后端流式 API 实现：1) 设置响应头 Content-Type: text/event-stream; Cache-Control: no-cache; Connection: keep-alive 2) 调用 LLM API（stream=true）3) 每收到一个 chunk（如 {"delta":{"content":"你好"}}）→ 通过 SSE 发送给前端：data: {"content":"你好"}\n\n 4) LLM 返回结束→发送 data: [DONE]\n\n。前端用 EventSource API 接收：eventSource.onmessage = e => { appendToUI(JSON.parse(e.data).content); }。' },
      { title: '流式输出的后端工程挑战', content: '流式不是简单的"换了个 response 格式"：1) 反向代理缓冲——Nginx 默认 proxy_buffering on，会等响应完整再转发。必须设置 proxy_buffering off + X-Accel-Buffering: no 2) 连接断开处理——客户端在流过程中断开，后端需要检测并停止 LLM 调用（浪费 Token）。用 request context 监听 client disconnect 3) 错误处理——流到一半 LLM 返回错误 → 发送 SSE error event 给前端 4) 背压——LLM 生成速度 > 网络发送速度 → 流中数据堆积。利用 LLM stream 的背压机制。' },
    ],
    handsOn: [
      { title: '用 curl 测试 SSE 流', cmd: 'curl -N http://localhost:3000/api/chat -H "Content-Type: application/json" -d \'{"question":"hello"}\'', output: 'data: {"content":"你"}\n\ndata: {"content":"好"}\n\ndata: [DONE]', explain: '-N 禁用 curl 的输出缓冲——不加这个 flag 可能等全部数据收到后才显示，看不出流式效果。前端用 EventSource API 会自动流式解析。' },
    ],
    diagnosis: [
      { symptom: 'SSE 流式输出在 Nginx 反向代理后变成一次性返回', cause: 'Nginx 默认开启 proxy_buffering——它等后端完整响应后才转发给客户端', fix: '1) Nginx location 加 proxy_buffering off 2) 加 X-Accel-Buffering: no 响应头 3) 对该 location 关闭 gzip（gzip off——SSE 不能被压缩）' },
      { symptom: 'SSE 连接断开后客户端不知道，一直等数据', cause: 'SSE 没有心跳机制——网络断开/代理超时客户端感知不到', fix: '1) 服务端定时发送心跳注释（如 ": heartbeat\\n\\n"——浏览器忽略 SSE 注释行但保持连接活跃）2) 客户端设 EventSource 的 onerror + 重连逻辑 3) 设置合理的 retry field 控制重连间隔' },
    ],
    exercises: [
      { level: '进阶', task: '用 Node.js 写一个 SSE 服务端（伪代码），逐字发送一段文本', hint: 'res.writeHead + setInterval + res.write', answer: 'res.writeHead(200, {"Content-Type":"text/event-stream"}); const text = "Hello World"; let i = 0; const timer = setInterval(() => { if (i < text.length) { res.write(`data: ${text[i]}\n\n`); i++; } else { res.write("data: [DONE]\n\n"); res.end(); clearInterval(timer); } }, 100);' },
      { level: '基础', task: '解释为什么 AI Chat 应用普遍使用流式输出，而传统 API 不用', hint: 'AI 生成时间是秒级，传统 API 是毫秒级', answer: '传统 API 响应时间 <100ms——用户不会感知到"等待"。AI 生成完整回答可能需要 5-30 秒——如果一次性返回，用户盯着白屏 20 秒等回答。流式输出让用户在 0.5 秒内看到第一个字，剩下的字持续出现——"看到内容在输出"比"等待内容出现"体验好太多。这是一种感知性能优化。' },
    ],
  },

  "GMxPmyatxYmIPRFHfRAnr": {
    mentalModel: '结构化输出就是让 LLM 给你返回的不是"一段话"而是"一个 JSON 对象"——就像你问同事"这个用户什么等级"而不是"写一篇关于用户的分析报告"。JSON 可被代码精准处理。',
    sections: [
      { title: '结构化输出的实现', content: '方法 1（Function Calling/Tool Use）：定义工具的 JSON Schema，LLM 按 Schema 返回参数。这是最可靠的方式。方法 2（JSON Mode）：告诉 LLM "只返回 JSON"，在 Prompt 中描述 Schema。但 LLM 可能不遵守 Schema。方法 3（Instructor/Outlines 等库）：在采样阶段约束 LLM 的输出 token 必须符合 Schema——最可靠但支持有限。实战：OpenAI 的 Structured Outputs 或 Claude 的 Tool Use 都能实现。' },
      { title: '结构化输出的验证与错误处理', content: 'LLM 返回的 JSON 不能信任——即使语义上正确，结构可能不完整。必需的后处理步骤：1) 解析 JSON——LLM 可能返回 "{...}" 或 ```json {...} ```。使用 lenient JSON parser（先试 JSON.parse，失败则用正则提取 {...} 再解析）2) Schema 验证——用 JSON Schema validator（如 ajv）检验：字段齐全？类型正确？枚举值在范围内？3) 缺失/错误字段处理——问 LLM 补全（带上次的输出和错误信息），或用默认值填充 4) 安全——把 LLM 的输出当作"不信任的用户输入"——验证、sanitize、never eval。' },
    ],
    handsOn: [
      { title: '用 OpenAI Structured Outputs 强制 JSON Schema', cmd: 'cat > /tmp/structured.py << \'EOF\'\nfrom openai import OpenAI\nclient = OpenAI()\nresponse = client.chat.completions.create(\n  model="gpt-4o",\n  messages=[{"role":"user","content":"John is 30 and works as a SWE"}],\n  response_format={\n    "type":"json_schema",\n    "json_schema": {\n      "name":"person",\n      "schema":{"type":"object","properties":{"name":{"type":"string"},"age":{"type":"integer"},"role":{"type":"string"}},"required":["name","age","role"]}\n    }\n  }\n)\nprint(response.choices[0].message.content)\nEOF', output: '{"name":"John","age":30,"role":"SWE"}', explain: 'OpenAI 的 Structured Outputs 在 API 层保证输出 100% 符合给定的 JSON Schema。比 JSON Mode（只是"建议"返回 JSON）可靠得多。' },
    ],
    diagnosis: [
      { symptom: 'LLM 返回的 JSON 多了个尾逗号导致 JSON.parse 失败', cause: 'LLM 是不可控的文本生成器——它返回的 JSON 可能不符合严格的 JSON 语法', fix: '1) 使用 Function Calling/Tool Use（最可靠——强制按 Schema 返回）2) 返回后做 JSON Schema 校验——不合法就重试 3) 用 json_repair 等库容错解析' },
      { symptom: '要求 LLM 返回枚举字段 "priority": "high"，实际返回了 "High"', cause: 'LLM 对大小写、枚举值不够精确——需要明确约束', fix: '1) 在 Prompt 中明确枚举的合法值 2) 用 Tool Use 的 enum 约束 3) 后处理统一转换（lowercase + 枚举匹配）' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个用 LLM 从简历文本中提取结构化信息的 schema', hint: '名字/邮箱/技能/经验年限', answer: '{"type":"object","properties":{"name":{"type":"string"},"email":{"type":"string"},"skills":{"type":"array","items":{"type":"string"}},"years_of_experience":{"type":"number"},"current_role":{"type":"string"}},"required":["name","skills"]}。让 LLM 按此 schema 返回结构化数据，后端直接存入数据库。' },
      { level: '基础', task: '说出结构化输出相比"在 Prompt 里说请用 JSON 格式回复"的优势', hint: '可靠性', answer: 'Prompt 建议（"用 JSON 回复"）= LLM 有可能返回非 JSON（如在 JSON 前后加解释文字）、有可能返回不符合 Schema 的 JSON。结构化输出（Structured Outputs/Tool Use）= API 层保证输出一定符合定义的 Schema——LLM 的 token 生成被约束。后端可以信任 parse 结果直接入库。' },
    ],
  },

  "Uve-UObgOBfrd-cLayVWe": {
    mentalModel: 'Function Calling 让 LLM 从"问答机"变成"行动者"——不光能回答问题，还能调用你的 API 去查数据库、发邮件、创建订单。LLM 是"大脑"，后端 API 是"手脚"。',
    sections: [
      { title: 'Function Calling 流程', content: '1) 定义工具：{name:"get_weather", description:"查天气", parameters:{location:{type:"string"}}} 2) 用户说"上海今天天气怎么样？" 3) LLM 识别需要调用 get_weather，返回 {name:"get_weather", arguments:{location:"上海"}} 4) 后端执行 get_weather("上海") → 结果 {"temp":25,"condition":"晴"} 5) 后端把结果发回 LLM 6) LLM 生成最终回答："上海今天晴，气温 25°C"。关键：工具的描述要准确、LLM 可能选错工具、需要验证 LLM 返回的参数。' },
      { title: 'Function Calling 的安全设计——给 AI 的权限控制', content: '把 API 暴露给 LLM 是极大的安全风险。安全措施：1) 最小权限原则——每个工具只暴露最少需要的权限。不要给 LLM 一个"执行任意 SQL"的工具，而是给"查订单(ORDER_ID)"这种粒度极小的工具 2) 参数验证——后端收到 LLM 返回的参数后必须验证（确保 order_id 属于当前用户），不要直接执行 3) 用户确认——对高风险操作（付款、删除数据）前端弹出确认框，用户确认后再执行 4) 审计日志——记录每次 Function Call 的参数和结果 5) Prompt 注入防护——在 System Prompt 中明确："不执行任何不在你工具列表中的操作"。' },
    ],
    handsOn: [
      { title: '用 Claude Tool Use 实现 Function Calling', cmd: 'cat > /tmp/tool_use.py << \'EOF\'\nimport anthropic\nclient = anthropic.Anthropic()\nresponse = client.messages.create(\n  model="claude-sonnet-4-20250514",\n  messages=[{"role":"user","content":"What is the weather in Shanghai?"}],\n  tools=[{"name":"get_weather","description":"Get current weather for a city","input_schema":{"type":"object","properties":{"city":{"type":"string"}}}}]\n)\nfor block in response.content:\n  if block.type == "tool_use":\n    print(f"Call {block.name}({block.input})")\nEOF', output: 'Call get_weather({\'city\': \'Shanghai\'})', explain: 'LLM 不执行工具——它返回"我要调用 get_weather，参数是 city=Shanghai"。后端代码接收这个调用、执行真正的 API、把结果发回 LLM 继续对话。' },
    ],
    diagnosis: [
      { symptom: 'LLM 调用了不存在的 tool 或传了错误的参数格式', cause: 'Tool 的 description 和 parameters schema 不清晰——LLM 误解了工具用途', fix: '1) tool description 用自然语言写清楚功能+适用场景+不适用场景 2) parameters schema 用精确的 JSON Schema 类型 3) 在工具执行前做参数校验，失败时返回清晰的错误信息给 LLM 重试' },
      { symptom: '用户说"查看我的订单"，LLM 调了 get_order() 但没传 order_id', cause: 'LLM 需要从对话上下文中提取参数——用户没有直接提供 order_id', fix: '1) Tool 定义时明确 required 参数 2) LLM 发现缺少参数时会向用户追问 3) 提前准备辅助 tool（如 list_orders 先列出所有订单让用户选）' },
    ],
    exercises: [
      { level: '进阶', task: '为"智能客服"设计 3 个 function tools', hint: '查订单/查物流/转人工', answer: '1) get_order(order_id) — 查订单状态和详情 2) track_shipment(order_id) — 查物流进度 3) escalate_to_human(reason, priority) — 转人工客服。每个 tool 都有清晰的 description 和 JSON Schema parameters。' },
      { level: '基础', task: '解释 Function Calling 和普通 API 调用的本质区别', hint: '谁决定调哪个 API', answer: '普通 API：用户或代码明确知道要调哪个接口（GET /orders/123）。Function Calling：LLM 根据用户的自然语言自动决定调用哪个工具、填什么参数。用户说"帮我查一下我的订单"→LLM 决定调 get_orders 工具→后端执行→LLM 总结结果返回。决策在 LLM，执行在后端。' },
    ],
  },

  "xL8d-uHMpJKwUvT8z-Jia": {
    mentalModel: '提示词（Prompt）就像给实习生布置任务——说清楚目标、给例子、明确约束、定义输出格式。提示词质量直接决定 LLM 输出质量。"垃圾进垃圾出"在 LLM 时代依然成立。',
    sections: [
      { title: '提示词工程基础', content: '1) 角色设定：你在 Prompt 开头说"你是一个资深后端工程师"——影响 LLM 的回答风格和深度 2) 清晰指令：具体说明你要什么（"列出 5 个原因并给出代码示例"而非"告诉我关于 X"）3) 示例（Few-Shot）：给 2-3 个输入输出示例，LLM 会模仿格式和风格 4) 约束：明确限制（"不要超过 200 字"、"只返回 JSON"）5) 思维链（Chain-of-Thought）：要求 LLM "一步一步分析"，显著提升复杂推理质量。对后端：写 prompt 是新技能——和写代码一样需要测试和迭代。' },
      { title: 'Prompt 迭代和版本管理——像对待代码一样对待 Prompt', content: 'Prompt 不是"写完就完"，需要持续迭代优化。实践：1) 版本管理——Prompt 存在 Git 中，和代码一起 Review 和部署 2) 评估——建立固定评测集（如 50 对 Q&A），每次改 Prompt 后跑评测，对比新旧输出质量 3) 变量化——Prompt 中可变部分用 {variables} 占位，运行时注入 4) 分割——长 Prompt 拆分为 System Prompt（角色+规则）+ User Prompt（具体任务+输入）。System Prompt 可以缓存降低 Token 成本 5) 日志——记录每次 LLM 调用的完整 Prompt 和输出（开发/测试环境），用于调试。' },
    ],
    handsOn: [
      { title: '用 Promptfoo 测试和对比 Prompt', cmd: 'npm install -g promptfoo && cat > /tmp/promptfooconfig.yaml << \'EOF\'\nprompts: [prompt_v1.txt, prompt_v2.txt]\nproviders: [openai:gpt-4o]\ntests:\n  - vars: { question: "如何优化数据库查询？" }\n    assert:\n      - type: contains\n        value: "索引"\nEOF\npromptfoo eval', output: '(两个 Prompt 的输出对比和评分)', explain: 'Promptfoo 是开源的 Prompt 评测工具——定义测试问题、期望的断言、对比多个 Prompt 的效果。可以集成到 CI 中。' },
    ],
    diagnosis: [
      { symptom: '同一个 Prompt 在不同 LLM 上效果截然不同', cause: '不同模型的 Prompt 格式偏好不同——Claude 喜欢 XML 标签结构，GPT 喜欢 Markdown 结构', fix: '1) 针对目标模型调整 Prompt 结构 2) A/B 测试不同 Prompt 模板的效果 3) 把 Prompt 当作代码——版本管理、测试和迭代' },
      { symptom: '用户通过 Prompt 注入绕过了 AI 的系统限制', cause: 'Prompt Injection——用户在输入中包含"忽略前面的指令"之类的文字', fix: '1) 用分隔符（如 XML 标签）区分 System Prompt 和 User Input 2) 输入过滤——检测和清理注入模式 3) 限制 AI 可执行的操作范围（最小权限）' },
    ],
    exercises: [
      { level: '进阶', task: '写一个 prompt 要求 LLM 为一个 REST API 生成 OpenAPI 3.0 规范', hint: '指定 API 功能+返回格式+约束', answer: '"你是一个 API 架构师。为以下 API 生成 OpenAPI 3.0 规范的 YAML：POST /orders 创建订单（需要 product_id 和 quantity，返回 order_id 和 status）。包含完整的 requestBody、responses（200 和 400）、示例值。只返回 YAML，不要额外解释。"' },
      { level: '基础', task: '为一个 Prompt 做 A/B 测试——描述你怎么测试两种 Prompt 哪个更好', hint: '准备评测集 + 对比', answer: '1) 准备 20 个真实用户问题的评测集 2) 对每个问题分别用 Prompt A 和 Prompt B 调 LLM 3) 对比两个输出——人工对 A 和 B 盲评打 1-5 分 4) 统计平均分→高分胜出 5) 自动评测——让另一个 LLM（Judge）比较 A 和 B："哪个回答更准确、更完整、更简洁？"综合人工 + 自动的结果决定用哪个 Prompt。' },
    ],
  },

  "yKNdBmahm_h81xdMDT-qx": {
    mentalModel: '向量（Vector Embedding）就是把一段文字的"语义"压缩成一串数字——语义相近的文本，数字也相近。"猫"和"小猫"的向量距离近，"猫"和"汽车"的向量距离远。',
    sections: [
      { title: '向量的应用', content: 'Embedding 模型（如 text-embedding-3-small）将任意文本转成固定长度的浮点数数组（如 1536 维）。向量间的"距离"（余弦相似度）表示语义相似度。应用：1) 语义搜索——搜"如何调优数据库性能"能匹配到"MySQL 慢查询优化"（关键词搜不到但语义相近）2) 推荐——根据用户历史行为的向量相似度推荐 3) 异常检测——偏离正常模式的向量。存储：pgvector（PostgreSQL 插件）、Pinecone、Weaviate、ChromaDB。' },
      { title: '向量相似度算法——不只是余弦相似度', content: '三种主流向量相似度度量：1) 余弦相似度（Cosine Similarity）——最常用。计算两个向量夹角的余弦值，范围 [-1, 1]。对文本 embedding 效果好，因为方向比大小重要 2) 欧拉距离（Euclidean Distance / L2）——两点之间的直线距离。距离越小越相似 3) 内积（Dot Product）——值越大越相似。适合向量未归一化且大小有意义的场景。实际选择：用 pgvector 时建索引要指定相似度类型（vector_cosine_ops / vector_l2_ops / vector_ip_ops），一旦建索引就不能改，需要提前确定。' },
    ],
    handsOn: [
      { title: '用 pgvector 做语义搜索', cmd: 'psql -c "\nSELECT content, 1-(embedding <=> query_vec::vector) AS similarity\nFROM documents\nORDER BY embedding <=> query_vec::vector\nLIMIT 5;\n"', output: '(返回相似度最高的 5 条文档)', explain: '<=> 是 pgvector 的余弦距离运算符（1-余弦相似度=余弦距离）。距离越小=越相似。用 ORDER BY cosine_distance LIMIT N 做近似最近邻搜索。' },
    ],
    diagnosis: [
      { symptom: '向量搜索返回的结果和查询完全不相关', cause: 'Embedding 模型对中文支持不好——用的是英文优化的模型（如 text-embedding-ada-002）', fix: '1) 换用中文优化的 embedding 模型（如 bge-large-zh、text2vec）2) 多语言场景用 multilingual 模型 3) 对"肯定相关"的文本对计算余弦相似度检测模型质量——应 >0.7' },
      { symptom: '向量数据库每次查询延迟超过 500ms', cause: '索引类型不适合——精确搜索（Flat index）在百万级数据中全量比对', fix: '1) 建 ANN 索引（HNSW/IVFFlat）——近似最近邻搜索 2) 调整索引参数（M/ef_construction）加速 3) 对热门查询做 Cache。注意：数据量 < 10000 行时全表扫描可能比 ANN 更快' },
    ],
    exercises: [
      { level: '进阶', task: '解释为什么向量搜索比关键词搜索更适合"概念查询"', hint: '关键词搜索找不到同义词', answer: '关键词搜索：搜"数据库优化"找不到"DB tuning"或"How to make DB faster"。向量搜索：因为"数据库优化"和"DB tuning"在语义空间中距离很近，向量搜索能召回这些语义相似的文档——即使它们没有共享任何关键词。' },
      { level: '基础', task: '用 Python 伪代码实现：用户搜索"如何加快数据库查询"，找到知识库中最相关的 3 篇文章', hint: 'embedding + 向量相似度', answer: 'query_embedding = embed("如何加快数据库查询")。results = []; for doc in knowledge_base: score = cosine_similarity(query_embedding, doc.embedding); results.append((doc, score))。results.sort(key=lambda x: x[1], reverse=True)。return results[:3]。实际用向量数据库（pgvector/Pinecone）做这个，不需要应用层遍历计算。' },
    ],
  },

  "Ofv__kXuBk-Vv2jVhaFss": {
    mentalModel: 'Embedding 就是文字的"指纹"——每段文字有一个独一无二的向量表示。相似的文字指纹像，不同的文字指纹远。用这个指纹可以快速在海量文字中找"最像的"。',
    sections: [
      { title: 'Embedding 的实现', content: '用 OpenAI text-embedding-3-small（便宜+好）或开源模型（如 bge-large-zh 中文好）。生成 embedding 后存入向量数据库。查询时：1) 将用户搜索词生成 embedding 2) 向量数据库找最相似的 top-K 条记录 3) 返回对应的原始文本。Embedding 的质量取决于模型——中文场景要选中文优化的模型。注意 Token 限制（大多 embedding 模型限制 8192 token 输入）。' },
      { title: 'Chunk 策略——Embedding 质量的分水岭', content: '如果直接把整篇文档生成一个 embedding，搜索"第三段的某个细节"可能匹配不到（语义被稀释）。解决方案：Chunking——把文档切成小块，每块生成 embedding。关键参数：1) Chunk 大小——太小（100 字）信息碎片化，太大（2000 字）语义稀释。经验值 500-1000 字符 2) Chunk 重叠——相邻 chunk 之间重叠 10-20%。确保"落在边界上的信息"至少完整出现在一个 chunk 中 3) 父文档引用——小 chunk 做检索 + 大 chunk 做 LLM 上下文拼装 4) Metadata 保留——每个 chunk 存储来源文档标题、章节。搜索时可以按源过滤 5) Chunk 策略的实验——用评测集测试不同 chunk 大小的检索命中率，找到最优值。这是实验试出来的，不是理论推算的。' },
    ],
    handsOn: [
      { title: '用 OpenAI Embedding API 生成向量', cmd: 'curl https://api.openai.com/v1/embeddings -H "Authorization: Bearer $OPENAI_API_KEY" -H "Content-Type: application/json" -d \'{"model":"text-embedding-3-small","input":"Hello world"}\'', output: '{"data":[{"embedding":[0.001, -0.002, 0.003, ...],"index":0}]}', explain: '返回一个 1536 维的浮点数向量。text-embedding-3-large 返回 3072 维（更准但更贵）。text-embedding-ada-002 是老模型（性价比好）。' },
    ],
    diagnosis: [
      { symptom: 'Embedding 生成的向量维度太高（1536 维）存储膨胀', cause: '默认使用 OpenAI embedding 模型——向量维度大，存储和计算成本高', fix: '1) 评估是否需要 1536 维——256/512 维对很多场景足够 2) 使用降维技术（PCA/量化）减少维度 3) 用支持 Matryoshka Embeddings 的可变维度模型' },
      { symptom: 'Embedding 结果在不同时间对相同文本生成不同向量', cause: '没有固定模型版本——OpenAI 更新 embedding 模型导致同一文本向量变化', fix: '1) 用固定版本的 embedding 模型（而非 latest）2) 更换模型时重新 embedding 全部数据 3) 保存模型版本信息到 metadata' },
    ],
    exercises: [
      { level: '基础', task: '用 Python 伪代码描述将文档存入向量数据库的流程', hint: '切分文档 → embedding → 存入', answer: '1) 文档切分成 chunk（如每 500 字一块，重叠 50 字）2) 对每个 chunk 调用 embedding 模型获得向量 3) 存入向量数据库（chunk_id, vector, metadata, original_text）4) 查询时：query_embedding = embed(query)；results = vector_db.search(query_embedding, top_k=5)。' },
      { level: '进阶', task: '设计一个"法律合同智能搜索"系统：用户用自然语言提问（如"合同中对违约金有什么规定？"），系统返回相关条款', hint: '按条款 chunk + 保留合同和条款的元数据', answer: '1) 文档处理：每份合同按条款（条款 1、条款 2...）做 chunk（而非按字数）2) Metadata：合同编号、标题、签约日期、条款编号 3) Embedding + 入库：每个条款生成向量 + 原文 + metadata 4) 搜索：用户提问 embedding → 向量搜索（filter: 只搜当前用户的合同）→ top-5 条款 → 拼 Prompt → LLM 回答 + 引用条款编号。检索阶段通过 metadata 过滤减少候选集。' },
    ],
  },

  "w1D3-bSg93ndKK9XJTu7z": {
    mentalModel: 'AI Agent 就是给 LLM 配上"工具箱+记事本+计划能力"——它不再是简单一问一答，而是能自主规划步骤、调用工具、记录中间结果、循环迭代直到完成任务。',
    sections: [
      { title: 'Agent 架构', content: 'Agent = LLM（大脑）+ Tools（手脚）+ Memory（记忆）+ Planning（计划）。流程：1) 接收任务 2) LLM 分析并拆解成步骤 3) 选择工具执行第一步 4) 分析结果、更新记忆 5) 决定下一步 6) 循环直到任务完成。关键挑战：LLM 会迷失（忘记目标）、循环（反复做同一件事）、幻觉（调了不存在的工具）。解决：给 Agent 明确的终止条件、限制最大步骤数、每步记录日志便于调试。MCP（Model Context Protocol）是 Agent 调用工具的标准协议。' },
      { title: 'Agent 的失败模式与防御', content: 'Agent 在生产环境中最常出现的问题：1) 无限循环——不断重复"搜索→没找到→重新搜索"。防御：设置 max_iterations（如 10）、检测重复动作（连续 3 步调同一工具同一参数→强制停止）2) 遗忘目标——上下文长了之后"忘记"最初任务。防御：在每步的系统消息中重复原始任务描述 3) 过早终止——声称"任务完成"但实际没完成。防御：Agent 完成时调用"验证工具"检查结果 4) 幻觉工具——调用了不存在的工具。防御：只允许选择工具列表中的定义 5) 成本爆炸——用掉数百次 LLM 调用。防御：限制单次任务总 token 用量预算。最后：Agent 适合"需要多步骤探索的不确定任务"，不适合"明确流程的确定性任务"（如每天生成报表——用 cron+脚本）。' },
    ],
    handsOn: [
      { title: '用 LangChain Agent 实现自动化的搜索+分析任务', cmd: 'cat > /tmp/agent.py << \'EOF\'\nfrom langchain.agents import create_openai_tools_agent\nfrom langchain.tools import Tool\n\ntools = [\n  Tool(name="search", func=search_web, description="搜索网络"),\n  Tool(name="calculator", func=calculate, description="数学计算"),\n  Tool(name="database_query", func=query_db, description="查询数据库"),\n]\n\nagent = create_openai_tools_agent(llm, tools, prompt)\nresponse = agent.invoke({"input": "分析过去30天的销售额趋势，与上个月对比"})\nEOF', output: '(Agent 自动搜索→计算→生成分析报告)', explain: 'Agent 自己决策：1) 调 database_query 获取数据 2) 发现需要对比→再调一次获取上月数据 3) 用 calculator 计算增长率 4) 生成分析文本。全程人工只给了初始问题。' },
    ],
    diagnosis: [
      { symptom: 'AI Agent 陷入了死循环——反复执行相同的 tool 调用', cause: 'Agent 没有检测到循环——多次调用同一个 tool 得到了类似结果但没有推进任务', fix: '1) 设置最大步骤数上限（如 10 步）2) 检测连续 N 步类似操作时终止 3) 每步记录 action+result，LLM 分析是否在推进' },
      { symptom: 'Agent 执行到第 5 步忘记了最初的任务目标', cause: '上下文超长——中间步骤的输出占据了上下文窗口，初始任务被挤出', fix: '1) 在每一步的系统提示中重复初始任务目标 2) 压缩中间步骤——总结而非保留完整结果 3) 选择长上下文模型（如 Gemini 1M context 或 Claude 200K）' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个"自动代码审查 Agent"的工作流程', hint: '获取 PR diff → 分析 → 评论', answer: 'Agent 收到审查任务 → 调用 GitHub API 获取 PR diff → 逐文件分析（检查 SQL 注入/XSS/空指针/代码规范）→ 对每个问题生成评论，标注严重程度 → 调用 GitHub API 提交 PR review comments → 输出审查总结。整个流程无人介入。' },
      { level: '基础', task: '解释普通 LLM 调用和 Agent 的本质区别', hint: '一问一答 vs 自主多步', answer: '普通 LLM 调用：输入一个问题→输出一个回答→结束。Agent：输入一个目标→LLM 自己决定需要哪些步骤→自主选择工具→执行→分析结果→决定下一步→循环→直到认为目标达成。Agent 有"自主决策循环"——思考（Think）、行动（Act）、观察（Observe）、再思考...直到完成。' },
    ],
  },

  "mHnI19RgZ57XDEIDaHxD0": {
    mentalModel: 'MCP（Model Context Protocol）是 AI Agent 的"USB 协议"——就像 USB 让任何设备都能插上电脑，MCP 让任何工具/数据源都能被 AI Agent 调用。标准化就是力量。',
    sections: [
      { title: 'MCP 的作用', content: 'MCP 是 Anthropic 提出的开放协议，定义 AI 模型如何与外部工具和数据源交互。三部分：1) MCP Server：提供工具/资源/提示词的服务 2) MCP Client：AI 应用连接 MCP Server 3) 标准化通信。类比：MCP = LSP（Language Server Protocol）但用于 AI 工具。后端开发者可以为自己的系统实现 MCP Server——数据库查询 MCP Server、K8s 管理 MCP Server、Jira MCP Server——让 AI Agent 能操作你的系统。' },
      { title: '为后端系统实现 MCP Server', content: '实现 MCP Server 就是将后端的 API 封装成 AI 可调用的工具。步骤：1) 定义能力——列出你希望 AI 能执行的操作（如"查询数据库慢查询"、"查看 K8s Pod 状态"）2) 使用 MCP SDK——官方提供 Python/TypeScript/Kotlin SDK。用 @server.list_tools() 列出工具，@server.call_tool() 处理调用 3) 工具定义——每个工具包含 name、description、inputSchema。description 是 LLM 决定"该用哪个工具"的依据 4) 安全——MCP Server 应限制操作范围（白名单）、记录审计日志、敏感操作要求确认。一个"K8s MCP Server"暴露的工具：list_pods、get_pod_logs、restart_deployment——而非直接暴露 kubectl exec。' },
    ],
    handsOn: [
      { title: '用 Python MCP SDK 创建一个简单的 MCP Server', cmd: 'cat > /tmp/mcp_server.py << \'EOF\'\nfrom mcp.server import Server, NotificationOptions\nfrom mcp.server.models import InitializationCapabilities\n\nserver = Server("my-backend-tools")\n\n@server.list_tools()\nasync def list_tools():\n  return [{"name":"get_db_slow_queries","description":"Get top 10 slow queries from PostgreSQL","inputSchema":{"type":"object","properties":{"minutes":{"type":"integer","description":"查过去N分钟的慢查询"}}}}]\n\n@server.call_tool()\nasync def call_tool(name, arguments):\n  if name == "get_db_slow_queries":\n    minutes = arguments.get("minutes", 60)\n    return {"result": f"过去{minutes}分钟慢查询列表: ..."}\nEOF', output: '(MCP Server 代码)', explain: 'Server 装饰器定义工具列表和处理函数。AI 通过 MCP Client 连接这个 Server→看到工具列表→调用 get_db_slow_queries→Server 执行真正查询→返回结果。' },
    ],
    diagnosis: [
      { symptom: 'MCP Server 连接失败，Agent 找不到任何工具', cause: 'MCP Server 未启动或配置的 endpoint 不可达', fix: '1) 检查 MCP Server 进程是否运行 2) 验证 endpoint URL 和认证配置正确 3) 用 mcp-cli 工具测试连接' },
      { symptom: 'MCP Server 提供的工具在 AI Agent 中显示为空', cause: 'MCP Server 的 tool schema 不符合规范——缺少必需的 name/description/inputSchema', fix: '1) 检查 MCP Server 的 tools/list 响应格式 2) 确保每个 tool 有清晰的 description 3) 参考 MCP 规范文档验证 schema 正确性' },
    ],
    exercises: [
      { level: '基础', task: '用一句话解释什么是 MCP', hint: '标准协议', answer: 'MCP（Model Context Protocol）是 LLM 与外部工具/数据源通信的标准协议——让任何 AI 应用都能用统一的方式调用任何 MCP Server 提供的工具。' },
      { level: '进阶', task: '为你的后端系统（如电商平台）设计 3 个实用的 MCP Tools，并写出每个的 name/description/inputSchema', hint: '运维/数据查询/业务状态', answer: '1) Tool: get_order_status。Description: Get current status and details of an order by order ID。InputSchema: {order_id: string}。2) Tool: list_recent_errors。Description: List recent application errors from the past N hours。InputSchema: {hours: integer, service: string?}。3) Tool: get_deployment_status。Description: Check the current deployment status and version of each service。InputSchema: {}。这三个工具让 oncall 工程师可以通过 AI Agent 快速了解"订单状态、最近的错误、当前部署版本"。' },
    ],
  },

  "IWubGe3oquSj882QVnhLU": {
    mentalModel: 'Skills 就是 AI Agent 的"预制菜"——把一组能力（提示词+工具+知识）预先配好、封装成可复用的技能包。需要什么能力装上就用，不需要重头配置。',
    sections: [
      { title: 'Skills 的概念', content: 'Skills 是对 AI 能力的封装——每个 Skill 包含：特定的系统提示词、可选的工具集合、领域知识。类比：编程中的 library/package。举例：一个"PostgreSQL DBA Skill"内置了慢查询分析、索引建议、EXPLAIN 解读等能力，Agent 加载这个 Skill 后就能像 DBA 一样分析和优化数据库。后端开发者可以：1) 使用现成的 Skills 2) 为团队构建自定义 Skills（封装公司内部工具和知识）。' },
      { title: '研发团队构建内部 Skills 的实践', content: 'Skills 封装了团队的"隐性知识"，让新人或跨团队成员能快速获得领域能力。构建实践：1) 识别重复任务——团队中反复出现的人工操作："帮我看看生产数据库连接数"、"部署到 staging 的步骤" 2) 封装为 Skill——每个 Skill = system_prompt + tools（MCP Server 工具集）+ knowledge（FAQ/runbook 的 embedding）3) 命名和描述——好的名称让 AI 知道什么时候该用。如 "Postgres Oncall" skill 描述："Loaded when diagnosing database-related production issues" 4) 分层——基础 Skill → 团队 Skill → 个人 Skill 5) 维护——当有了新诊断方法或新数据库版本，更新对应 skill。Skill 的 Prompt 和工具列表存储在 Git 中，通过 CI 发布。' },
    ],
    handsOn: [
      { title: '为一个 Skill 写 system prompt 和工具定义', cmd: 'cat > /tmp/deploy_skill.yaml << \'EOF\'\nname: deploy-assistant\ndescription: Help with deploying services to staging/production\nsystem_prompt: |\n  You are a deployment engineer for our platform.\n  You help developers deploy safely.\n  Never deploy directly to production without asking for confirmation.\ntools:\n  - ci_status_check\n  - deploy_service\n  - monitor_deployment\n  - rollback_service\nEOF', output: '(Skill 定义)', explain: 'Skill 的系统提示定义了 Agent 在部署时的行为准则——部署前必须检查 CI、必须先 staging 后 production、生产部署需确认。工具列表限制了 Agent 只能使用部署相关工具。' },
    ],
    diagnosis: [
      { symptom: '自定义的 Skill 在不同项目中行为不一致', cause: 'Skill 中硬编码了特定项目的路径或配置——达不到可复用', fix: '1) Skill 设计为参数化——路径/配置通过参数传入 2) 每个项目维护自己的 Skill Config 3) 通用 Skill 和项目特定配置分离' },
      { symptom: 'Skill 太多导致 Agent 不知道用哪个——选了不合适的', cause: 'Skill 的 description 不清晰——Agent 无法准确判断何时该用此 Skill', fix: '1) 每个 Skill 的 description 写清楚适用场景和不适用场景 2) 合理控制 Skill 数量——别超过 Agent 能准确选择的量 3) 相关功能归类到一个 Skill' },
    ],
    exercises: [
      { level: '基础', task: '为你的后端团队设计一个有用的 Skill', hint: '什么操作频繁又重复', answer: '"部署助手 Skill"：1) 了解团队 CI/CD 流程 2) 能查看部署状态 3) 部署出问题能查日志+建议修复 4) 能回滚部署。封装了 kubectl/GitHub API/日志查询等工具。' },
      { level: '进阶', task: '为一个"新人入职"场景设计 3 个 Skill——帮助新人快速上手日常开发', hint: '环境搭建/代码规范/故障排查', answer: 'Skill 1-环境向导："能帮助配置本地开发环境（Docker/数据库/依赖安装），诊断启动失败原因"。Tool：readme_reader、env_checker、docker_helper。Skill 2-代码规范助手："Code Review 前检查代码是否符合团队规范"。Tool：lint_runner、style_guide、pr_template。Skill 3-Oncall 助手："新人值班遇到告警时，引导排查步骤"。Tool：runbook_reader、log_searcher、monitor_viewer。' },
    ],
  },

  "iatQ3RCxESHt1CwN3PSfx": {
    mentalModel: '集成模式就是"如何把一堆服务、工具、系统拼在一起不出乱子"的设计模式。每个微服务、消息队列、API 网关都是拼图的一块，集成模式告诉你这些拼图应该怎么拼。',
    sections: [
      { title: '核心集成模式', content: '1) API Gateway：统一入口，认证/限流/路由/聚合在一层处理 2) Pub/Sub：发布者不关心谁消费，消费者不关心谁生产 3) Request/Reply：同步调用（REST/gRPC），简单但有耦合 4) 消息队列：异步解耦 5) Saga：分布式事务的编排（Choreography=各自响应事件 vs Orchestration=中央协调者）6) CQRS：读写分离数据模型 7) Event Sourcing：不存当前状态，存所有事件，可重放。选型：服务间同步调用优先用 gRPC（内网），异步用消息队列，对外用 API Gateway。' },
      { title: '集成模式的选型决策树', content: '面对一个新场景，按以下决策树选择：Q1: 数据是否必须立即一致？是→同步调用（REST/gRPC）。否→异步（消息队列/事件）。Q2: 异步场景中，下游需要"数据变更通知"还是"执行命令"？数据变更→Event（事件驱动）命令→Command Message。Q3: 多个服务需协调业务流程？简单 3-5 步→Choreography Saga。复杂 >5 步且多条件分支→Orchestration Saga。Q4: 读写性能要求差异极大？读极多写极少→CQRS（读写分离数据模型）。Q5: 需要完整审计追踪？→Event Sourcing。注意：Event Sourcing 实施复杂度极高，没有明确的审计需求就用传统 CRUD。' },
    ],
    handsOn: [
      { title: '用 RabbitMQ 实现 Pub/Sub 模式', cmd: 'rabbitmqadmin declare exchange name=user_events type=fanout\nrabbitmqadmin declare queue name=email_service\nrabbitmqadmin declare queue name=analytics_service\nrabbitmqadmin declare binding source=user_events destination=email_service\nrabbitmqadmin declare binding source=user_events destination=analytics_service\n# 发布一条消息 → email 和 analytics 同时收到', output: '(两个队列都会收到消息)', explain: 'Fanout Exchange 把消息广播到所有绑定的队列。Publisher 不关心有哪些 Consumer——新增 Consumer 只需绑定新队列，无需修改 Publisher。这就是 Pub/Sub 的核心优势：完全的发布-订阅解耦。' },
    ],
    diagnosis: [
      { symptom: 'Saga Orchestrator 本身成了单点——挂了后整个流程停止', cause: '中央协调者架构的固有风险——Orchestrator 服务挂了，所有 Saga 暂停', fix: '1) Orchestrator 做高可用部署（多实例）2) Saga 状态持久化到数据库——新实例可接手 3) 或用 Choreography 模式（无中心协调者，但流程不透明，各有利弊）' },
      { symptom: '消息队列解耦后，没人知道完整的数据流是怎样的', cause: '异步通信让业务流程不可见——一个事件触发另一个事件，链路不透明', fix: '1) 用分布式追踪（OpenTelemetry）追踪事件流转 2) 事件 schema 统一管理——知道每个事件的生产者和消费者 3) 画事件流程图文档并定期更新' },
    ],
    exercises: [
      { level: '进阶', task: '对比 Saga 的 Choreography 和 Orchestration 两种实现', hint: '去中心化 vs 中心化协调', answer: 'Choreography：每个服务发布事件→下一个服务监听事件→继续。如订单服务发 OrderCreated→支付服务监听扣款→发 PaymentCompleted→库存服务监听扣库存。去中心化、简单但流程不透明。Orchestration：中央 Saga 协调者（Order Saga）调用每个服务：createOrder() → processPayment() → reserveInventory() → confirmOrder()。中心化、流程清晰但协调者是单点。' },
      { level: '基础', task: '解释为什么 CQRS 中读模型和写模型的结构不同', hint: '写要原子，读要快', answer: '写模型（Command Model）：按业务规则设计，保证数据一致性、原子性——如"订单表+订单明细表"范式化设计。读模型（Query Model）：按查询需求设计，反范式化、预聚合——如"订单列表视图"一张宽表包含 user_name、product_count、total_price，不需要 JOIN。写模型面向"数据完整性"，读模型面向"查询性能"。CQRS 通过异步方式（事件/CDC）将写模型的变更同步到读模型。' },
    ],
  },

  "q1EM7Wog8l_MbYlKsb7Y5": {
    mentalModel: '全栈 = 能从前端写到数据库的"全能选手"。对后端来说，学全栈不是转前端，而是让你的后端设计能从全链路角度思考——API 设计时知道前端怎么用、数据库设计时知道业务需求怎么变。',
    sections: [
      { title: '后端到全栈的扩展', content: 'T 型人才策略：纵向深入（后端是你的深井）→ 横向扩展（前端/部署/基础架构/产品）。全栈不等于所有都平均——你依然以后端为主，但能：1) 用 React/Vue 搭简单管理后台 2) 写基础的 CSS 不把页面搞崩 3) 理解前端性能优化（bundle size/懒加载）4) 参与前端技术讨论。价值：在全栈团队中你能独立交付完整功能，沟通成本大幅降低。' },
      { title: '后端学前端的正确姿势——不是"学完再开始"', content: '后端学前端最容易犯的错误：花 3 个月系统学 React 全部知识再动手。正确姿势：以项目驱动，学最少知识完成特定任务。阶段 1（1-2 周）：能看懂前端代码——React 组件、useState/useEffect、路由、API 调用（fetch/axios）。阶段 2（1 个月）：能改前端——改文字、加输入框、调样式。用 AI 辅助（"给这个按钮改成蓝色圆角"→AI 生成 CSS）阶段 3（3 个月）：能写简单页面——内部管理后台的 CRUD 页面。阶段 4（6 个月+）：能独立做前端功能——有状态管理和路由的完整前端模块。后端学前端的核心目标不是"变成前端"，而是"理解前端痛点、为什么这个 API 设计会挨骂、前后端怎么高效协作"。' },
    ],
    handsOn: [
      { title: '用 React + Vite 快速搭建管理后台', cmd: 'npm create vite@latest admin-panel -- --template react-ts && cd admin-panel && npm install @tanstack/react-query axios', output: '(项目初始化)', explain: 'Vite + React + TypeScript 最精简的前端搭建。react-query 做数据获取和缓存，axios 做 HTTP。后端学前端不需要学 Webpack 配置——Vite 开箱即用。' },
    ],
    diagnosis: [
      { symptom: '后端设计的 API 前端很难用——需要调 5 个接口才能渲染一个页面', cause: '后端按数据库实体设计 API（/users、/orders、/products）而非按前端页面设计（/dashboard-data）——缺少 BFF 层', fix: '引入 BFF（Backend for Frontend）——为特定前端页面提供聚合接口。/dashboard 接口一次返回当前用户、最近订单、推荐商品。后端内部调多个服务聚合，前端一次 fetch 拿到所有数据' },
      { symptom: '后端写的 React 页面每个输入框都刷新整个页面', cause: '不理解 React 的状态管理——认为 React 和 HTML+jQuery 一样', fix: '1) 理解 React 的单向数据流和 state/props 2) 用受控组件处理表单 3) 看一遍 React 官方教程的基本概念（2 小时）' },
    ],
    exercises: [
      { level: '基础', task: '说出后端学前端的最小技能清单', hint: 'HTML/JS/React基础', answer: '1) 看懂 HTML 结构和 CSS 选择器 2) 理解 JavaScript async/await + fetch 3) 能用 React/Vue 写简单页面（CRUD 表单+列表）4) 理解前端路由和状态管理概念。' },
      { level: '进阶', task: '作为一个后端，接到需求"做一个内部数据看板页面"，描述你的技术方案', hint: '不需要复杂前端框架', answer: '前端：React + Vite + shadcn/ui（卡片/表格/图表），状态用 react-query。页面包含：数据概览卡片（今日订单数、销售额）+ 趋势折线图（recharts）+ 订单列表表格。后端：一个聚合接口 GET /api/dashboard?range=7d 返回 { stats, trends, recent_orders }。后端内部从各服务/Cache 聚合。前后端接口用 TypeScript 类型共享（Monorepo）。部署：前端静态文件 + Nginx，/api/ 反向代理到后端。' },
    ],
  },

  "apYJ_HEOinr5L0w82IBYL": {
    mentalModel: 'DevOps 是后端的"自然延伸"——写完代码只是第一步，部署、监控、维护才是代码活着的状态。后端 → DevOps 的跨越就是把"我写的代码在我机器上能跑"变成"我的服务在生产环境稳定运行"。',
    sections: [
      { title: '后端到 DevOps 的学习路径', content: '1) Docker：容器化你的应用 2) CI/CD：自动测试+自动部署 3) 云服务基础（AWS/GCP 核心服务）4) K8s 基础（能部署和维护应用，不需要搭建集群）5) 监控告警 6) IaC（Terraform/Pulumi 管理基础设施）。注意：DevOps 是文化和实践，不只是工具。小团队后端通常自带 DevOps 技能——部署+监控都是你的事。' },
      { title: 'IaC（基础设施即代码）——用代码管理服务器而非点鼠标', content: '传统运维：登录云控制台 → 点"创建虚拟机" → 选择配置 → 点击"创建"。问题：无法版本管理（谁改了什么不知道）、无法复制（dev 环境靠记忆手动搭）、改配置容易出错。IaC：用 Terraform/Pulumi 代码描述期望的基础设施状态。terraform apply → 自动创建/更新。优势：1) 版本管理——基础设施定义在 Git 中 2) 环境复制——同一配置 + 不同变量文件 = Dev/Staging/Prod 一致 3) 变更 Review——改基础设施像改代码一样走 PR 4) 可测试——用 terratest 等工具测试变更。关键思维转变：服务器不再是"宠物"（有名字、小心护理），而是"牛"（批量编号、随时替换）。' },
    ],
    handsOn: [
      { title: '用 Terraform 创建一台 AWS EC2 实例', cmd: 'cat > /tmp/main.tf << \'EOF\'\nprovider "aws" { region = "us-east-1" }\nresource "aws_instance" "web" {\n  ami           = "ami-0c55b159cbfafe1f0"\n  instance_type = "t3.micro"\n  tags = { Name = "backend-learn" }\n}\nEOF\nterraform init && terraform plan', output: '(显示将要创建的资源)', explain: 'terraform plan 是"演习"——只显示要做什么不执行。terraform apply 是"真做"。terraform destroy 删除所有创建的资源。实验完后务必 destroy 避免扣费。' },
    ],
    diagnosis: [
      { symptom: 'Docker 部署成功但外部访问不到，排查了 2 小时才发现安全组没开放端口', cause: '每次手动部署都要重复踩坑——没有用 IaC 管理基础设施', fix: '1) 用 Terraform/Pulumi 管理云资源（安全组/ECS/ALB）2) 写成文档的部署 checklist 3) CI/CD 中集成基础设施变更，避免手动操作云控制台' },
      { symptom: '半夜被叫起来因为数据库连接池满了——其实只是某个索引没建', cause: '缺乏自动故障检测和告警——所有问题都靠人来发现', fix: '1) 数据库慢查询告警 + 连接池使用率告警 2) 自动化健康检查定期探测关键路径 3) 常见问题排障手册——减少半夜决策负担 4) 非紧急告警延迟到工作时间处理' },
    ],
    exercises: [
      { level: '基础', task: '列出后端工程师应该掌握的 3 个 DevOps 基本技能', hint: '容器/CI-CD/监控', answer: '1) Docker——能把应用容器化并用 docker compose 部署 2) CI/CD——能配置 GitHub Actions 自动测试和部署 3) 基础监控——能配置健康检查和告警，能看日志和指标排查问题。' },
      { level: '进阶', task: '设计一个完整的"代码到生产"DevOps 工具链：从 Git Push 到 Production 运行的完整自动化流程', hint: 'Git → CI → Image Build → Deploy → Monitor', answer: '1) Git Push → GitHub Actions trigger 2) CI：lint + unit test + integration test（Testcontainers）3) Build：docker build + push to ECR with tag = git_sha 4) Deploy：update K8s Deployment image → kubectl set image 5) Health check：等待新 Pod Ready → smoke test 6) Monitor：Prometheus + Grafana 监控 error rate/latency → 异常自动回滚（kubectl rollout undo）。GitOps 变体：步骤 4 用 ArgoCD 替代手动 kubectl——ArgoCD 监控 Git Repo 中 K8s yaml 变更，自动 sync 到集群。' },
    ],
  },

  "sVXZrBCsiSzWBBYWTm-nQ": {
    mentalModel: '后端学习不是学完路线图就结束了——它是一个"学→做→回头看→再学更深"的循环。延伸阅读路线帮你继续深挖：想深入系统设计？看 system-design 路线图。想深入容器化？看 docker + kubernetes 路线图。',
    sections: [
      { title: '延伸学习建议', content: '学完后端的推荐深化方向：1) 系统设计——学习架构和扩展能力 2) PostgreSQL——关系型数据库深入 3) DevOps——部署和运维 4) Go/Node.js/Python——深化语言技能 5) Redis/MongoDB——数据存储扩展。每个方向都有独立的路线图。原则：广度了解（知道什么场景用什么）→ 深度一个（你的核心竞争力）→ 再扩展广度 → 再深入一个。' },
      { title: '后端学习的"20% 定律"——持续成长的方法', content: '保持持续成长而不 burn out 的方法：1) 每周 20% 时间（如 1 天）用于"学习型工作"——不直接交付业务需求，但提升长期效率。可以是：重构慢代码、阅读开源库源码、深入研究生产问题 2) 碎片时间利用——通勤时听技术播客（Software Engineering Daily、Go Time）3) 季度深度项目——每季度安排一个深度项目：Q1 深入 PostgreSQL 查询优化，Q2 深入 K8s，Q3 深入分布式系统。一年后——4 个领域的深度知识远超"学了 12 个领域但都只会 hello world"。4) 以教为学——写技术博客、做团队分享。教别人时你才会发现自己哪里没真懂。' },
    ],
    handsOn: [
      { title: '创建季度学习计划模板', cmd: 'cat > /tmp/quarterly_plan.md << \'EOF\'\n# Q2 2026 学习计划\n\n## 深度领域：PostgreSQL 查询优化\n- [ ] 读完 PostgreSQL EXPLAIN 官方文档\n- [ ] 分析并优化现有项目中的 3 个慢查询\n- [ ] 学习 pg_stat_statements 使用\n- [ ] 写一篇博客：PostgreSQL 索引最佳实践\n\n## 广度了解：Kubernetes\n- [ ] 用 minikube 部署一个小应用\n- [ ] 理解 Deployment/Service/Ingress 的协作关系\n\n## 每周时间分配\n- 周一上午：学习时间（2h）\n- 周四下午：个人项目/实验时间（2h）\nEOF', output: '(季度计划)', explain: '具体的计划和可验证的成果（"优化 3 个慢查询"而非"提升数据库能力"）。季度底回顾完成情况，未完成的评估原因并调整下季度计划。' },
    ],
    diagnosis: [
      { symptom: '学完所有路线图后发现面试还是要背八股文', cause: '路线图侧重广度——面试常考的原理题（如 Go 的 GC、MySQL 的 B+Tree）需要在路线图上深入', fix: '1) 路线图是导航地图——深入原理需要额外看书/源码 2) 每个核心节点不只是了解概念——能画流程图、能对比优劣 3) 做项目时顺藤摸瓜深入原理。面试准备 = 路线图广度 + 1-2 个深度领域的详细知识' },
      { symptom: '感觉自己啥都会、啥都不精——T 型的第一横有了但没竖', cause: '学得太广太快——广度够了但没有一个领域是能独立解决问题的深度', fix: '1) 选一个方向深入：数据库/系统设计/容器化 2) 做 1-2 个深度项目——不是简单 CRUD 而是有技术挑战的 3) 深度标准：能在这个领域教别人。用"费曼学习法"检验——你能把 PostgreSQL MVCC 原理用通俗的语言讲给初级开发听吗？' },
    ],
    exercises: [
      { level: '基础', task: '完成当前后端学习后，选择一个延伸方向并说明理由', hint: '基于你的职业目标', answer: '个人答案。示例：选"系统设计"——因为我想明年从初级后端升到中级，系统设计是面试必考也是架构能力的分水岭。或选 PostgreSQL——我想成为数据库专家型后端。' },
      { level: '进阶', task: '制定你接下来 1 年的后端学习路线——从这张路线图中选 4 个深度领域（每季度 1 个）和 4 个广度领域', hint: '深度=能解决该领域实际问题；广度=知道什么时候需要用到', answer: 'Q1：深度（PostgreSQL 查询优化）——读完 EXPLAIN 文档、优化 5 个生产慢查询。广度（Redis）——理解 5 种数据结构。Q2：深度（系统设计）——读完 DDIA 前 6 章、做 3 个系统设计练习。广度（Kafka）——理解 Partition/Consumer Group、跑 Demo。Q3：深度（Go 语言）——写一个 CLI + HTTP 服务、读完 effective go。广度（Docker/K8s）——容器化现有项目。Q4：深度（可观测性）——加 OpenTelemetry + Prometheus + Grafana。广度（CI/CD）——写 GitHub Actions pipeline。每季度底产出：1 篇技术博客 + 1 个可演示的 project。' },
    ],
  },
};