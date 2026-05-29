import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_4: Record<string, DeepTutorial> = {
  // ============================================================
  // 75. Web Servers / Web 服务器
  // ============================================================
  "fekyMpEnaGqjh1Cu4Nyc4": {
    mentalModel: 'Web 服务器是后端的"前台接待"——接收 HTTP 请求、判断该给谁处理（路由）、把响应送回客户端。Nginx 是前台经理，Gunicorn/uWSGI 是叫号系统，你的应用代码是实际干活的人。',
    sections: [
      { title: 'Web 服务器的作用', content: '1) 接收 HTTP 请求并解析 2) 静态文件服务（CSS/JS/图片）3) 反向代理——把请求转发给后端应用 4) 负载均衡——分发请求到多个后端实例 5) TLS 终止——处理 HTTPS 加解密 6) 压缩/缓存/限流。常见组合：Nginx（前端）→ Gunicorn/uWSGI（WSGI 服务器）→ Python 应用。Node.js 和 Go 自带 HTTP 服务器（不需要 Gunicorn），但前面通常还是放 Nginx 处理静态文件和 TLS。' },
      { title: '反向代理 vs 正向代理', content: '正向代理：客户端通过代理访问外部网络（翻墙/VPN）。反向代理：客户端访问代理，代理转发到后端服务器（Nginx）。区别：正向代理为"客户端"服务，反向代理为"服务器"服务。Nginx 是典型的反向代理——客户端以为在和 Nginx 通信，实际 Nginx 在背后转发给应用服务器。' },
      { title: 'Web 服务器的并发模型', content: '三种主流并发模型：1) 多进程（Apache prefork）——每个连接 fork 一个进程，简单但内存消耗大 2) 多线程（Apache worker）——每个连接一个线程，比多进程轻量但仍有上限 3) 事件驱动（Nginx/Node.js）——单线程 + 非阻塞 I/O + epoll/kqueue，一个进程处理数万并发连接。事件驱动模型的核心是"不要让线程阻塞等待 I/O"——当磁盘/网络 I/O 未就绪时，先去处理其他连接的数据。这就是 Nginx 能以极少内存支撑海量并发的原因。' },
    ],
    handsOn: [
      { title: '用 Python 一行启动 HTTP 服务器', cmd: 'python3 -m http.server 8000', output: 'Serving HTTP on :: port 8000 (http://[::]:8000/) ...', explain: 'Python 内置的 HTTP 服务器，适合快速测试。浏览器访问 http://localhost:8000 可浏览当前目录。' },
      { title: '用 Nginx 查看并发连接数', cmd: 'curl localhost/nginx_status 2>/dev/null || echo "先在 nginx.conf 中开启 stub_status"', output: 'Active connections: 291 (reading: 3, writing: 1, waiting: 287)', explain: 'stub_status 模块显示 Nginx 当前活跃连接数。绝大多数连接处于 waiting 状态（keep-alive 的空闲连接），实际处理中的很少——这正是事件驱动模型的优势。' },
    ],
    diagnosis: [
      { symptom: '浏览器访问网站显示 502 Bad Gateway', cause: 'Nginx 正常运行，但后端的应用服务器（Gunicorn/Node.js）挂了或未启动', fix: '检查后端应用进程是否存在（ps aux | grep gunicorn），查看后端应用日志是否有报错，确认 Nginx proxy_pass 的端口和地址与实际一致' },
      { symptom: '静态文件（CSS/JS/图片）加载慢或 404', cause: 'Nginx 静态文件路径配置错误或未配置 expires 缓存头', fix: '确认 root/alias 指令指向正确的静态文件目录，添加 expires 30d 启用浏览器缓存，检查 nginx 用户是否有文件的读权限' },
    ],
    exercises: [
      { level: '基础', task: '用 Nginx 反向代理将 /api/ 请求转发到本地 3000 端口', hint: 'location /api/ { proxy_pass http://localhost:3000; }', answer: 'Nginx 配置: location /api/ { proxy_pass http://127.0.0.1:3000/; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; }' },
      { level: '进阶', task: '设计一个能处理 10 万并发连接的 Nginx 调优方案', hint: '调整 worker 数量、连接数限制、系统文件描述符限制', answer: '1) worker_processes auto（匹配 CPU 核心数）2) worker_connections 10240（每个 worker 最大连接数）3) worker_rlimit_nofile 20480（系统级文件描述符限制）4) use epoll（Linux 事件模型）5) multi_accept on（一次接受多个连接）6) keepalive_timeout 65（合理的 keep-alive 超时）7) sysctl: net.core.somaxconn=65535, fs.file-max=200000。总连接上限 = worker_processes × worker_connections。' },
    ],
  },

  // ============================================================
  // 76-79. Web 服务器对比 (Nginx/Caddy/Apache/IIS)
  // ============================================================
  "z5AdThp9ByulmM9uekgm-": {
    mentalModel: 'Nginx 是 Web 服务器的"瑞士军刀"——反向代理、负载均衡、静态文件、TLS 终止一手包办。启动快、内存小、并发强（epoll 模型），几乎成了后端的标配。发音是"Engine-X"。',
    sections: [
      { title: 'Nginx 核心能力', content: '1) 反向代理：proxy_pass 转发到后端应用 2) 负载均衡：upstream 定义后端池，轮询/最少连接/IP Hash 分发 3) 静态文件：直接返回文件，极高效率 4) TLS 终止：处理 HTTPS，后端用 HTTP 5) 重写/重定向：rewrite/return 6) 限流：limit_req_zone 防 DDoS。关键配置路径：/etc/nginx/nginx.conf（主配置），/etc/nginx/sites-available/（站点配置），/var/log/nginx/（日志）。' },
      { title: 'Nginx 的负载均衡算法', content: '1) 轮询（默认）：依次分发给每个后端服务器 2) 最少连接（least_conn）：分发给当前活跃连接最少的服务器，适合长连接场景 3) IP Hash：根据客户端 IP 计算哈希值，同一 IP 始终打到同一台服务器，解决 Session 问题 4) 加权轮询：高性能服务器分配更多请求 5) 一致性哈希（hash）：适合缓存场景，后端增减时最小化缓存失效范围。配置方式：upstream backend { least_conn; server 10.0.0.1:3000 weight=3; server 10.0.0.2:3000; }' },
    ],
    handsOn: [
      { title: '一个最小 Nginx 反向代理配置', cmd: 'cat > /tmp/nginx.conf << \'EOF\'\nserver {\n  listen 80;\n  server_name example.com;\n  location / {\n    proxy_pass http://127.0.0.1:3000;\n  }\n}\nEOF', output: '(配置写入)', explain: '所有 80 端口的请求转发到本地 3000 端口的应用。proxy_pass 是 Nginx 最常用的指令。' },
      { title: '配置一个带健康检查的 upstream', cmd: 'cat > /tmp/upstream.conf << \'EOF\'\nupstream app_backend {\n  server 10.0.0.1:3000 max_fails=3 fail_timeout=30s;\n  server 10.0.0.2:3000 max_fails=3 fail_timeout=30s;\n  server 10.0.0.3:3000 backup;\n}\nEOF', output: '(配置写入)', explain: 'max_fails=3 fail_timeout=30s 表示 30 秒内失败 3 次就标记为不可用。backup 表示备用服务器，只有其他服务器全部不可用时才启用。Nginx 自带基本的被动健康检查。' },
    ],
    diagnosis: [
      { symptom: 'Nginx 返回 504 Gateway Timeout', cause: '上游应用服务器处理请求超时（默认 60 秒），可能是慢 SQL、死循环或外部 API 超时', fix: '增大 proxy_read_timeout（如 120s），同时优化上游慢请求，给上游应用加超时控制和时间限制' },
      { symptom: '升级 Nginx 配置后 reload 失败，服务中断', cause: '新配置文件有语法错误，nginx -s reload 可能部分 worker 用了旧配置', fix: '始终先执行 nginx -t 检查配置语法，通过后再 nginx -s reload。对于生产环境，用 nginx -s reload 平滑重载（不会中断服务）' },
    ],
    exercises: [
      { level: '基础', task: '理解 Nginx event 模型：为什么 Nginx 能处理数万并发而 Apache prefork 不行？', hint: 'epoll vs fork', answer: 'Nginx 用 epoll（事件驱动），一个工作进程处理所有连接（异步非阻塞）。Apache prefork 模式对每个连接 fork 一个进程（或线程），数万连接需要数万进程，内存和调度开销不可承受。' },
      { level: '进阶', task: '设计一个 Nginx + 多个后端实例的方案，实现无感知发布（滚动更新不停服）', hint: 'upstream + 逐个摘除实例', answer: '1) upstream 配置所有后端实例 2) 部署时逐个操作：从 upstream 摘除实例 A（标记 down）→ 等待连接排空 → 更新代码并重启实例 A → 实例 A 健康检查通过 → 加回 upstream → 对实例 B 重复。Nginx 商业版 Nginx Plus 有 API 动态管理 upstream。开源版可以用 Consul Template 动态生成 upstream 配置并 reload。' },
    ],
  },

  "Op-PSPNoyj6Ss9CS09AXh": {
    mentalModel: 'Caddy 是 Nginx 的"新一代挑战者"——用 Go 写的，配置文件更简洁，最亮眼的功能是自动 HTTPS（内置 Let\'s Encrypt，零配置获取和续签证书）。',
    sections: [
      { title: 'Caddy vs Nginx', content: 'Caddy 优势：1) 自动 HTTPS——只需写域名，证书自动申请、自动续签 2) 配置简单——一个 Caddyfile 几行就够了 3) 内置 API（/config/ 端点动态改配置，Nginx 需要 reload）4) Go 编写、安全漏洞少。Nginx 优势：性能略优（尤其是静态文件）、生态更成熟（Nginx Ingress Controller 是 K8s 标配）、文档和社区更大。推荐：新项目、个人项目用 Caddy 省心；老项目、K8s 环境用 Nginx。' },
      { title: 'Caddy 的模块化架构', content: 'Caddy 的设计哲学是"一切皆模块"——HTTP 服务器本身是一个模块，TLS、反向代理、文件服务、日志也都是模块。可以通过 Caddyfile 的指令或 JSON API 动态组装。核心优势：1) 配置通过 REST API 动态更新，无需 reload 2) 内置 pprof/metrics 端点便于可观测性 3) 原生支持 HTTP/3（QUIC）4) Caddy 2 完全重写，比 Caddy 1 更模块化和可扩展。作为 Go 开发者，你甚至可以写自定义 Caddy 模块来扩展功能。' },
    ],
    handsOn: [
      { title: 'Caddyfile 示例：反向代理 + 自动 HTTPS', cmd: 'echo -e "example.com {\n  reverse_proxy localhost:3000\n}" > Caddyfile', output: '(写入配置)', explain: '就四行！Caddy 自动为 example.com 申请 Let\'s Encrypt 证书并配置 HTTPS 重定向。Nginx 要做到同样效果需要 30+ 行配置 + certbot。' },
      { title: 'Caddy 一行启动文件服务器（自动 HTTPS）', cmd: 'caddy file-server --domain example.com --root /var/www', output: '(启动文件服务器并自动获取证书)', explain: '一行命令启动带自动 HTTPS 的静态文件服务器。Caddy 的"零配置哲学"在这里体现得淋漓尽致。' },
    ],
    diagnosis: [
      { symptom: 'Caddy 启动后无法获取证书，HTTPS 不可用', cause: '域名 DNS 未指向服务器 IP，或 80/443 端口被防火墙拦截，或 Let\'s Encrypt 频率限制', fix: '确认域名 A 记录指向正确 IP，检查防火墙是否开放了 80（HTTP-01 challenge）和 443 端口，查看 caddy log 中的 ACME challenge 错误详情' },
      { symptom: 'Caddy 内存使用持续增长', cause: '长期运行后证书缓存和日志在内存中积累，或某个模块存在内存泄漏', fix: '检查 caddy.json 中日志配置是否正确 rotate，重启 Caddy 释放内存，升级到最新版本，使用 pprof 分析内存使用' },
    ],
    exercises: [
      { level: '基础', task: '说出 Caddy 相比 Nginx 最大的差异化优势', hint: '证书', answer: '自动 HTTPS——Caddy 内置 Let\'s Encrypt 集成，域名写在配置里就自动申请和续签 TLS 证书，完全不需要额外工具（如 certbot）和定时任务。' },
      { level: '进阶', task: '配置 Caddy 实现：一个域名反向代理到多个后端，支持自定义 404 页面和请求日志', hint: 'handle_errors + log 指令', answer: 'example.com {\n  reverse_proxy localhost:3001 localhost:3002 {\n    lb_policy least_conn\n  }\n  handle_errors {\n    @404 expression {http.error.status_code} == 404\n    handle @404 {\n      file_server {\n        root /var/www/errors\n      }\n    }\n  }\n  log {\n    output file /var/log/caddy/access.log\n    format json\n  }\n}' },
    ],
  },

  "jjjonHTHHo-NiAf6p9xPv": {
    mentalModel: 'Apache HTTP Server 是 Web 服务器的"老将"——1995 年诞生，曾经统治互联网（巅峰时 70%+ 网站用它）。现在退居二线但仍在大量运行，学它主要是为了维护老系统和理解历史。',
    sections: [
      { title: 'Apache 的现状', content: 'Apache 的 .htaccess 文件——在目录层级放配置文件，共享主机时代非常灵活（每个用户都能自定义自己的配置）。现在用 Apache 的场景：1) 老项目维护 2) cPanel/Plesk 等共享主机面板默认用它 3) 需要 .htaccess 的灵活性 4) mod_php 直接跑 PHP。新项目：Nginx 或 Caddy。不推荐新手花时间深学 Apache。' },
      { title: 'Apache MPM（多处理模块）详解', content: 'Apache 的核心灵活性来自 MPM（Multi-Processing Module），决定如何处理并发连接：1) prefork：每个连接 fork 一个子进程，最稳定但最耗内存（每个进程 ~10MB），适合 PHP 的 mod_php 2) worker：多线程模型，每个子进程内有多个线程，内存效率好于 prefork 但与某些模块不兼容 3) event：worker 的改进版，对 keep-alive 连接使用专用线程，高并发性能最好。Apache 2.4+ 推荐用 event MPM。换 MPM 需要在编译或运行时指定，不像 Nginx 天生事件驱动。' },
    ],
    handsOn: [
      { title: '查看 Apache 当前使用的 MPM', cmd: 'httpd -V 2>/dev/null | grep MPM || apachectl -V | grep -i mpm', output: 'Server MPM:     event', explain: '不同系统和安装方式可能用不同命令。event MPM 是 Apache 2.4+ 的推荐选择，性能最接近 Nginx 的事件驱动模型。' },
    ],
    diagnosis: [
      { symptom: 'Apache 占用内存极高，服务器频繁 OOM', cause: '使用了 prefork MPM + 高并发，或 MaxRequestWorkers 设置过载，大量空闲子进程吃满内存', fix: '切换到 event MPM，降低 MaxRequestWorkers 和 MaxSpareThreads，设置 MaxConnectionsPerChild 控制进程生命周期，定期回收进程避免内存泄漏累积' },
      { symptom: '.htaccess 文件修改后死活不生效', cause: 'AllowOverride 指令在主配置中设为 None，禁止目录级覆盖', fix: '在主配置 <Directory> 块中设置 AllowOverride All（或指定特性如 AuthConfig/FileInfo），然后 reload Apache。注意：生产环境不建议用 All，带来安全风险' },
    ],
    exercises: [
      { level: '基础', task: '说出 Apache 和 Nginx 在处理大量并发连接时架构上的根本区别', hint: '进程/线程 vs 事件驱动', answer: 'Apache（prefork MPM）：每个连接一个进程，内存占用高。Nginx：事件驱动 + 非阻塞 I/O，一个 worker 进程处理数千连接。这就是为什么 Nginx 在高并发场景比 Apache 高效得多。' },
      { level: '进阶', task: '为 Apache 设计一个性能优化方案，使其在 4 核 8GB 服务器上支撑 5000 并发', hint: 'MPM 选择 + 参数调优', answer: '1) 使用 event MPM 2) 参数：ServerLimit=16, StartServers=4, MinSpareThreads=100, MaxSpareThreads=500, ThreadsPerChild=64, MaxRequestWorkers=1024（16×64）3) KeepAlive On, KeepAliveTimeout 5, MaxKeepAliveRequests 100 4) 关闭不需要的模块（mod_info, mod_status 等）5) 如果只做反向代理，关闭 mod_php 等重模块 6) 启用 mod_deflate 压缩文本响应' },
    ],
  },

  "0NJDgfe6eMa7qPUOI6Eya": {
    mentalModel: 'IIS（Internet Information Services）是微软的"Windows 专属 Web 服务器"——如果你在 .NET/Windows 生态，它就是默认选择。和 Windows 认证/权限系统深度绑定。',
    sections: [
      { title: 'IIS 的定位', content: 'IIS 是 Windows Server 的内置 Web 服务器，和 .NET/ASP.NET 深度集成。特点是 GUI 管理界面强大（IIS Manager），和 Active Directory/Windows 认证原生集成。如果公司用 Windows Server + .NET + SQL Server 技术栈，IIS 是自然选择。否则，用 Nginx/Caddy。' },
      { title: 'IIS 的核心架构：Application Pool', content: 'IIS 用 Application Pool（应用程序池）隔离不同 Web 应用——每个池有自己的 worker 进程（w3wp.exe），崩溃不影响其他池。关键配置：1) .NET CLR 版本 2) 托管管道模式（经典 vs 集成——集成模式将 ASP.NET 管道整合到 IIS 核心，性能更好）3) 进程模型——定时回收（默认 1740 分钟）、空闲超时（默认 20 分钟）、最大内存限制 4) 标识（Identity）——池以什么 Windows 用户身份运行，决定访问文件/网络资源的权限。Application Pool 回收会导致"首次请求慢"——新 worker 进程要重新 JIT 编译和预热。' },
    ],
    handsOn: [
      { title: '用 PowerShell 创建一个 IIS 站点', cmd: 'New-IISSite -Name "MySite" -PhysicalPath "C:\\inetpub\\mysite" -BindingInformation "*:8080:"', output: '(站点创建)', explain: 'PowerShell IISAdministration 模块提供的命令行管理方式，比 GUI 的 IIS Manager 更适合自动化。' },
    ],
    diagnosis: [
      { symptom: 'IIS 网站间歇性变慢，重启后恢复正常', cause: 'Application Pool 内存泄漏或 worker 进程积累过高内存，回收间隔太长导致频繁 GC', fix: '设置 Application Pool 的"专用内存限制"（如 1GB）触发自动回收，在非高峰期设置定时回收（如每天凌晨 3 点），检查应用代码中的内存泄漏' },
      { symptom: 'IIS 返回 503 Service Unavailable', cause: 'Application Pool 已停止——可能因为连续快速故障保护（Rapid-Fail Protection）触发，或标识用户密码过期', fix: '检查 Application Pool 状态，查看 Windows Event Log 中的 WAS（Windows Process Activation Service）事件，关闭 Rapid-Fail Protection 或增大故障阈值，更新 Application Pool Identity 密码' },
    ],
    exercises: [
      { level: '基础', task: '说出 IIS 最适合的技术栈', hint: '微软生态', answer: 'Windows Server + .NET/ASP.NET + SQL Server。这个技术栈下 IIS 是原生选择，和 Windows 认证、权限、管理工具无缝集成。' },
      { level: '进阶', task: '设计 IIS 的高可用方案（至少 2 台服务器）', hint: 'ARR + 共享配置 + 共享内容', answer: '1) 使用 ARR（Application Request Routing）做反向代理和负载均衡（或硬件负载均衡器）2) IIS 共享配置——配置存储在 UNC 共享路径，所有服务器读取同一份配置 3) 内容同步——用 DFS-R（分布式文件系统复制）或 CI/CD 同步代码到多台服务器 4) Session 状态——用 Redis/SQL Server 做 Session 集中存储，或启用 ARR 的 client affinity（sticky session）5) 健康检查——ARR 自动探测故障节点并隔离' },
    ],
  },

  // ============================================================
  // 80-82. AI in Development / AI 开发工具
  // ============================================================
  "fA3yi9puMbTFmbPpo6OjN": {
    mentalModel: 'AI 辅助编码就像开车有了"自动驾驶辅助"——帮你变道（重构）、自动跟车（补全代码）、提醒危险（安全漏洞）。但方向盘始终在你手里，AI 的建议必须经过你的审查。',
    sections: [
      { title: 'AI 编码工具全景', content: '1) GitHub Copilot：代码补全+Chat，VS Code/JetBrains 集成 2) Claude Code/Cursor：AI 原生 IDE，对话式编程、跨文件修改 3) ChatGPT/Claude：通用问答，解释代码/生成代码/调试 4) Cody/Sourcegraph：代码库级别理解，搜索+解释。对后端开发：写 CRUD 节省 30% 时间、写测试节省 50% 时间、解释陌生代码库极快。但安全代码（加密/认证/SQL）和业务逻辑必须人工审查。' },
      { title: 'AI 辅助编程的实践边界', content: '什么时候信任 AI：1) 样板代码（CRUD 接口、DTO 定义、简单转换逻辑）2) 单元测试生成（给定函数签名和说明）3) 代码翻译（Python → Go、JavaScript → TypeScript）4) 正则表达式/SQL/Shell 命令等"写一次调试半天"的文本。什么时候不能信任 AI：1) 加密和认证实现——必须用标准库而非 AI 生成的"看起来正确"的代码 2) 涉及金钱/权益的业务逻辑——AI 不理解业务后果 3) 安全敏感的配置（CORS、防火墙规则）4) 任何你没看懂的代码。核心原则：AI 是加速器，不是替代者——你看得懂的代码才敢用。' },
    ],
    handsOn: [
      { title: '用 AI 辅助生成 CRUD 接口', cmd: '# 在 AI 工具中输入：\n# "为 orders 表写完整的 REST CRUD（Go + Gin）+ 参数校验 + 错误处理"', output: '(AI 生成完整代码)', explain: 'AI 可以秒级生成完整的 CRUD 代码，包括路由、Handler、参数校验和错误处理。你需要做的是：检查业务逻辑正确性、补充自定义验证规则、确认错误码符合规范。' },
    ],
    diagnosis: [
      { symptom: 'AI 生成的代码看起来对但不工作', cause: 'AI 用了已废弃的 API、错误的 import 路径、或不存在的函数名（幻觉）', fix: '逐行阅读 AI 生成的代码，在本地跑编译和测试，用 IDE 的代码分析检查 import 和 API 是否正确，不要整段粘贴不经审查' },
      { symptom: 'AI 补全频繁打断思路', cause: 'AI 补全过于积极或建议质量不高', fix: '调整 AI 工具的触发方式（如改为手动触发补全），使用专门的 Chat 面板而非 inline 补全，在需要聚焦时暂时关闭 AI 辅助功能' },
    ],
    exercises: [
      { level: '基础', task: '举一个 AI 辅助编码中"可以用"和一个"绝不能用"的场景', hint: '可以：样板代码。不可以：安全相关', answer: '可用：生成 REST API 的 CRUD 代码、编写单元测试、转换数据格式。绝不能用：直接使用 AI 生成的加密/认证实现而不理解原理、不审查就将 AI 生成的 SQL 查询部署到生产环境。' },
      { level: '进阶', task: '制定一个团队的 AI 辅助编码规范，列出禁止、允许、要求审查的场景', hint: '从安全、质量、责任角度思考', answer: '禁止：AI 生成加密算法、不审查的 SQL（可能含注入）、不理解的生成代码直接入库。允许：生成测试用例、写文档注释、翻译代码、生成 DTO/Model。必须审查：所有涉及认证/授权/支付的代码、生成的正则表达式和 SQL、性能敏感的代码路径。规定：AI 生成代码=草稿，通过 Code Review 的 AI 生成代码=正式代码，责任在提交者不在 AI。' },
    ],
  },

  "tUNP5VRKvrPcufPDPPEo8": {
    mentalModel: 'LLM（大语言模型）就像一个读过全世界所有书但没有任何实践经验的"实习生"——知识广博、反应快，但会编造（幻觉）、有时不理解上下文、时不时胡言乱语。后端需要的是"用好这个实习生"的能力。',
    sections: [
      { title: '后端开发者需要了解什么', content: '1) Token 概念：LLM 按 token 计费和限制上下文——一个中文字 ≈ 1-2 token，英文单词 ≈ 1-2 token 2) 上下文窗口：模型一次能"记住"的内容上限（Claude 200K，GPT-4 128K）3) 温度/Temperature：控制输出的随机性（0=确定性、1=创意性）4) System Prompt vs User Prompt 5) Function Calling/Tool Use：模型调用你的 API 6) Streaming：逐 token 返回，体验更好。后端集成 AI 的核心是实现 RAG（检索增强生成）+ Function Calling + Streaming 响应。' },
      { title: 'Token 计数与成本控制', content: 'Token 是 LLM 的基本计费单位。粗略估算：1 个中文字 ≈ 1.5 token，1 个英文单词 ≈ 1.3 token，1 行代码 ≈ 8-15 token。成本优化策略：1) 精简 System Prompt——每减少 100 token 节省每次请求的费用 2) 使用较短的模型名称（如用 gpt-4o 替代 gpt-4-turbo 不会省钱但 token 定价不同）3) Prompt Caching——对于重复使用的长 system prompt，Anthropic 和 OpenAI 都支持缓存，缓存命中后价格可降 90% 4) 总结对话历史——不要无限制地拼接历史消息，定期总结后重置上下文 5) 输出 Token 限制——max_tokens 控制单次响应的最大输出 Token 数，防止异常长响应消耗预算。后端的职责：监控 API 调用次数和 Token 用量，设置预算告警。' },
    ],
    handsOn: [
      { title: '用 curl 计算一段文本的 token 数量（以 OpenAI 为例）', cmd: 'pip install tiktoken && python3 -c "import tiktoken; enc=tiktoken.get_encoding(\'cl100k_base\'); print(len(enc.encode(\'你好世界 Hello World\')))"', output: '6', explain: 'tiktoken 是 OpenAI 的 tokenizer 库。不同模型用不同的 encoding（gpt-4o 用 o200k_base，gpt-4 用 cl100k_base），计算结果有差异。' },
    ],
    diagnosis: [
      { symptom: 'LLM API 调用费用暴涨', cause: '上下文窗口塞入了太多历史消息，或 max_tokens 设置过大，或 Prompt 没有做缓存优化', fix: '检查每次请求的实际 token 消耗（API 响应的 usage 字段），限制对话历史轮次，开启 Prompt Caching，设置合理的 max_tokens' },
      { symptom: 'LLM 返回的答案与预期严重不符', cause: 'Temperature 设置过高（输出太随机），或 System Prompt 不够清晰，或上下文被截断', fix: '降低 Temperature 到 0-0.3 提高确定性，优化 System Prompt（添加角色、约束、输出格式），检查输入是否超过上下文窗口导致截断' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个 AI 后端架构：用户提问 → 后端处理 → 返回 AI 回答（要求流式输出）', hint: 'SSE/WebSocket + RAG + LLM API', answer: '1) 用户 POST /chat 发送问题 2) 后端用 embedding 模型将问题向量化 3) 在向量数据库中检索相关文档 4) 将文档+问题拼成 Prompt 发送给 LLM API（stream=true）5) 后端用 SSE 逐 chunk 转发 LLM 响应给前端。关键：流式传输让用户不到 1 秒就能看到第一个字，体验比等 10 秒看到完整结果好得多。' },
      { level: '基础', task: '计算：假设每次 API 调用 input 1000 tokens, output 500 tokens，GPT-4o 定价 $2.50/$10.00 每百万 input/output token，每天 10000 次调用，月费多少？', hint: 'input_token_cost + output_token_cost × 次/天 × 30', answer: '每次成本 = (1000/1M)×$2.50 + (500/1M)×$10.00 = $0.0025 + $0.005 = $0.0075。每天 10000 次 = $75/天。月费 = $75 × 30 = $2250。提示：这个费用不低！实际应用中需要权衡是否所有请求都要调 LLM、是否可以缓存常见问题的回答、是否可以本地方案替代。' },
    ],
  },

  "6PCOCzCbx7jo9wO2Hl2gy": {
    mentalModel: 'RAG（检索增强生成）就像给 AI 配了一个"专业资料库管理员"——用户提问时，管理员先去资料库找到最相关的几份文件，递给 AI 说"根据这些资料回答"。这样 AI 的回答就有了"依据"，大大减少幻觉。',
    sections: [
      { title: 'RAG 工作流程', content: '1) 文档准备：把公司文档/产品手册/FAQ 切分成小块（chunk）2) 向量化：用 embedding 模型将每块文本转成向量（一串数字）3) 存入向量数据库（Pinecone/Weaviate/pgvector）4) 检索：用户提问 → 同样转成向量 → 在数据库找最相似的 top-K 文档 5) 生成：把问题 + 检索到的文档发给 LLM → 生成有依据的回答。RAG 是后端工程师实现"AI 功能"的核心模式。' },
      { title: 'RAG 的关键技术决策', content: '1) Chunk 大小：太小（如 100 字）信息碎片化、太大（如 2000 字）检索精度下降。通常 500-1000 字 + 10% 重叠是较好的起点 2) 检索策略：基础是语义相似度检索，进阶用混合检索（Hybrid Search = 语义 + 关键词 BM25），再进阶用 Reranking（粗召回 → 精排）3) 元数据过滤：除了语义搜索，还按时间/类别/来源过滤（如"只搜过去一年的技术文档"）4) 引用溯源：LLM 回答中标注信息来源（"根据《XX 文档》第 3 章..."），增加可信度。高质量的 RAG 系统需要持续调优——检索质量差，LLM 再强也白搭（Garbage In, Garbage Out）。' },
    ],
    handsOn: [
      { title: '用 pgvector 建向量表和索引', cmd: 'psql -c "CREATE EXTENSION vector; CREATE TABLE docs (id SERIAL PRIMARY KEY, content TEXT, embedding VECTOR(1536)); CREATE INDEX ON docs USING ivfflat (embedding vector_cosine_ops);"', output: 'CREATE EXTENSION\nCREATE TABLE\nCREATE INDEX', explain: 'pgvector 是 PostgreSQL 的向量扩展，允许在 PG 中存储和搜索向量。ivfflat 索引提供近似最近邻搜索（ANN），速度比精确搜索快几个数量级。' },
    ],
    diagnosis: [
      { symptom: 'RAG 检索到的文档与用户问题不相关', cause: 'embedding 模型不适合你的文本领域（如用英文模型处理中文文本），或 chunk 切分不当', fix: '换用领域适配的 embedding 模型（中文用 bge-large-zh-v1.5），调整 chunk 大小和重叠量，增加关键词检索作为补充（混合检索）' },
      { symptom: 'RAG 回答质量差，LLM 忽略了检索到的文档', cause: '检索文档和问题拼装的 Prompt 模板设计不佳，或检索文档太长被截断', fix: '优化 Prompt 模板（明确指示"基于以下文档回答，不要编造"），限制每个文档的引用长度，增加 Reranking 筛选最相关的 top-3 文档' },
    ],
    exercises: [
      { level: '进阶', task: '说明 RAG 中的 embedding 是什么，为什么要把文本转成向量', hint: '向量之间的"距离"有什么含义？', answer: 'Embedding 将文本的语义压缩成固定长度的数字向量（如 1536 个 float）。语义相似的文本，向量之间距离近；语义不相关的，向量距离远。用余弦相似度（cosine similarity）计算两个向量的"语义接近程度"，从而在向量数据库中找到和用户问题最相关的文档。' },
      { level: '基础', task: '设计一个简单的 RAG 问答流程——用户问"如何重置密码"，从 FAQ 文档中找到答案', hint: 'embedding 用户问题 → 查向量数据库 → 把相关 FAQ 发给 LLM', answer: '1) embedding("如何重置密码") → 向量 Q 2) 在向量数据库 SELECT content FROM faq ORDER BY embedding <=> Q LIMIT 3（余弦相似度排序取 top-3）3) 假设检索到"密码重置需要登录后进入设置页..." 4) 拼 Prompt: "你是客服助手。根据以下 FAQ 回答用户问题。FAQ: ... \\n\\n 用户问题：如何重置密码？" 5) LLM 回答："您可以登录后进入设置页面，点击密码重置..."' },
    ],
  },

  // ============================================================
  // 83-86. 容器化 (Containerization/Docker/LXC)
  // ============================================================
  "SIzm-oc6cJrTXSeMzC4D9": {
    mentalModel: '容器就像一个"标准化集装箱"——把你的应用和所有依赖（操作系统库、运行时、配置文件）打包在一起。不管装到什么船（服务器）上，箱子里面的东西都一样运行。告别"在我机器上能跑"的噩梦。',
    sections: [
      { title: '容器 vs 虚拟机', content: '虚拟机（VM）：虚拟整个操作系统（包括内核），每个 VM 有自己的 OS，启动慢（分钟级）、占用大（GB 级）。容器：共享宿主机的 OS 内核，只隔离应用层，启动快（秒级）、占用小（MB 级）。就像 VM 是一栋独立别墅（独享一切），容器是公寓里的各单元（共享水电管道但互不干扰）。关键差异：容器的隔离不如 VM 彻底（共享内核），但对大多数应用足够。' },
      { title: '容器化对后端的意义', content: '1) 环境一致性：开发/测试/生产用同一个镜像 2) 快速部署：docker run 一条命令启动 3) 微服务友好：每个服务打包成独立容器 4) 可移植：任何装了 Docker 的机器都能跑 5) 资源高效：比 VM 省资源，一台机器跑几十个容器。容器化是现代后端部署的基础——即使你不用 K8s，至少用 Docker Compose。' },
      { title: '容器镜像的分层存储原理', content: 'Docker 镜像由多层只读的文件系统层叠加而成，每一层对应 Dockerfile 中的一条指令。关键特性：1) 写时复制（Copy-on-Write）——容器启动时在最上层加一个可写层，对文件的修改都写在这一层 2) 层共享——多个镜像可以共享相同的基础层（如都用 python:3.12 则基础层只存一份）3) 层缓存——构建时若某层及之前层的内容没变，Docker 会复用缓存不再重建。最佳实践：把不常变的指令放前面（如先 COPY requirements.txt 再 RUN pip install，再 COPY 代码）——这样改代码时 pip install 层能命中缓存，大幅加速构建。' },
    ],
    handsOn: [
      { title: '运行第一个容器', cmd: 'docker run --rm hello-world', output: 'Hello from Docker!\nThis message shows that your installation appears to be working correctly.', explain: 'hello-world 是 Docker 的测试镜像。docker run 自动拉取镜像（如果本地没有）并启动容器。--rm 表示退出后自动删除容器。' },
      { title: '查看镜像的层历史', cmd: 'docker history nginx:alpine', output: 'IMAGE          CREATED       CREATED BY                                      SIZE\nabc123         2 days ago    CMD ["nginx" "-g" "daemon off;"]               0B\n...', explain: 'docker history 显示镜像每一层的构建指令和大小。可以直观理解镜像的分层结构，也便于分析哪些层占空间大需要优化。' },
    ],
    diagnosis: [
      { symptom: 'Docker 构建镜像时每次都很慢，没有利用缓存', cause: 'Dockerfile 指令顺序不合理——频繁变化的内容（如 COPY . .）放在前面，导致后续层缓存全部失效', fix: '重新排列 Dockerfile：先 COPY 依赖说明文件（package.json/requirements.txt），再 RUN 安装依赖，最后才 COPY 源代码。COPY . . 放在最后' },
      { symptom: 'Docker 镜像体积过大（>1GB）', cause: '用了完整系统镜像（如 ubuntu:22.04 而非 alpine）、在镜像中残留了构建工具和缓存文件', fix: '1) 使用 alpine/slim 版本的基础镜像 2) 多阶段构建——第一阶段编译/安装依赖，第二阶段只复制需要的产物 3) RUN 命令合并并用 && 连接，同层清理缓存（如 apt clean && rm -rf /var/lib/apt/lists/*）' },
    ],
    exercises: [
      { level: '基础', task: '用 Docker 运行 nginx 容器，把本地 8080 端口映射到容器的 80 端口', hint: 'docker run -p 8080:80 nginx', answer: 'docker run -d -p 8080:80 --name my-nginx nginx。浏览器访问 http://localhost:8080 看到 Nginx 欢迎页。-d 后台运行。' },
      { level: '进阶', task: '用多阶段构建（Multi-stage Build）为 Go 应用创建最终镜像 < 20MB', hint: '第一阶段：go build；第二阶段：alpine 只复制二进制', answer: 'FROM golang:1.22-alpine AS builder\nWORKDIR /app\nCOPY go.mod go.sum ./\nRUN go mod download\nCOPY . .\nRUN CGO_ENABLED=0 go build -ldflags="-s -w" -o server .\n\nFROM alpine:3.19\nRUN apk --no-cache add ca-certificates\nCOPY --from=builder /app/server /server\nEXPOSE 8080\nCMD ["/server"]\n\n关键：CGO_ENABLED=0 静态编译，-ldflags="-s -w" 去除调试信息，最终二进制 + alpine + ca-certificates 约 15MB。' },
    ],
  },

  "94oRYuULJPdOMI1wihFrU": {
    mentalModel: 'Docker 是容器的"标准答案"——虽然容器技术早就有（LXC），但 Docker 把容器变得简单到"一个命令搞定"。Dockerfile（构建镜像的配方）→ Image（打包好的成品）→ Container（运行中的实例）。',
    sections: [
      { title: 'Docker 核心三件套', content: 'Dockerfile：定义镜像构建步骤（FROM 基础镜像 → COPY 代码 → RUN 安装依赖 → CMD 启动命令）。Image：构建产物，分层存储（每一行 Dockerfile 是一层，未改动的层可以复用，加速构建）。Container：镜像的运行实例，有独立的文件系统和网络。docker-compose.yml：定义多容器应用（如 app + db + redis + nginx），一个命令 docker compose up 全启动。' },
      { title: 'Docker Compose 实战——定义多服务应用', content: 'docker-compose.yml 是一站式多容器编排文件。结构：services（定义各个服务）、networks（自定义网络）、volumes（持久化存储）。关键指令：build（从 Dockerfile 构建）/image（直接用已有镜像）、ports（端口映射 HOST:CONTAINER）、environment/env_file（环境变量）、depends_on（启动顺序）、volumes（挂载目录或命名卷）、command（覆盖 CMD）。depends_on 只控制启动顺序不等待服务就绪——数据库启动不等于能接受连接。需要用 wait-for-it.sh 或 healthcheck 确保依赖就绪。生产环境通常配合 nginx-proxy/traefik 做反向代理和自动 HTTPS。' },
    ],
    handsOn: [
      { title: '编写一个简单的 Dockerfile', cmd: 'cat > /tmp/Dockerfile << \'EOF\'\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD ["node", "server.js"]\nEOF', output: '(Dockerfile 创建)', explain: 'FROM 选基础镜像（alpine 版本最小）。COPY 先复制 package.json（利用层缓存——package.json 不变时 npm ci 也会被缓存）。最后 CMD 定义启动命令。' },
      { title: '用 docker compose 启动 app + postgres + redis', cmd: 'cat > /tmp/docker-compose.yml << \'EOF\'\nservices:\n  app:\n    build: .\n    ports: ["3000:3000"]\n    depends_on:\n      db:\n        condition: service_healthy\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_PASSWORD: secret\n    volumes: ["pgdata:/var/lib/postgresql/data"]\n    healthcheck:\n      test: ["CMD", "pg_isready"]\n  redis:\n    image: redis:7-alpine\nvolumes:\n  pgdata:\nEOF', output: '(compose 文件创建)', explain: 'condition: service_healthy 让 app 等 db 的健康检查通过后再启动，比单纯的 depends_on 更可靠。pgdata 命名卷持久化数据库文件，容器删除后数据不丢。' },
    ],
    diagnosis: [
      { symptom: '容器启动后立即退出（Exit 0/1）', cause: 'CMD 指定的进程启动后立即结束（前台进程变后台），或启动命令失败', fix: '确保主进程以前台运行（nginx 用 daemon off;，gunicorn 不加 --daemon），docker logs <container> 查看退出前的错误日志' },
      { symptom: 'docker compose up 后 app 连不上数据库', cause: '数据库容器已启动但 PostgreSQL 还没准备好接受连接，app 启动太快', fix: '在 app 的 depends_on 中加 condition: service_healthy，并在 db 服务定义 healthcheck；或在 app 的启动脚本中加 wait-for-it.sh 轮询数据库端口直到可连接' },
    ],
    exercises: [
      { level: '基础', task: '编写一个 Python FastAPI 应用的 Dockerfile', hint: 'FROM python:3.12-slim', answer: 'FROM python:3.12-slim\nWORKDIR /app\nCOPY requirements.txt ./\nRUN pip install -r requirements.txt\nCOPY . .\nEXPOSE 8000\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]' },
      { level: '进阶', task: '优化一个 Docker 镜像：原镜像 1.2GB（ubuntu + apt install + pip install + 源码），用多阶段构建 + alpine 降低到 <200MB', hint: 'builder 阶段编译/安装 → final 阶段只复制产物', answer: 'FROM python:3.12-slim AS builder\nCOPY requirements.txt .\nRUN pip install --user -r requirements.txt\n\nFROM python:3.12-alpine\nCOPY --from=builder /root/.local /root/.local\nCOPY . /app\nWORKDIR /app\nENV PATH=/root/.local/bin:$PATH\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]\n\n优化点：slim 镜像做 pip install（需要 gcc 等编译工具），alpine 镜像只复制已安装的包 + 源码。最终体积通常在 150-200MB。' },
    ],
  },

  "31ZlpfIPr9-5vYZqvjUeL": {
    mentalModel: 'LXC（Linux Containers）是容器的"原始版本"——Docker 早期底层用的就是 LXC。现在了解它主要是为了理解历史和技术演进，实际开发中你只会用 Docker 等高级容器工具。',
    sections: [
      { title: 'LXC 和 Docker 的关系', content: 'LXC 利用 Linux 内核的 namespace（隔离）和 cgroups（资源限制）实现轻量级虚拟化。Docker 早期把 LXC 作为底层引擎，后来换成了自己的 libcontainer（现在是 runc）。LXC 更接近"轻量 VM"（可以跑多个进程、有自己的 init 系统），Docker 的设计哲学是"一个容器一个进程"。实际使用：Docker 用于应用部署，LXC 用于需要"更像 VM"的场景（如 Proxmox VE 用 LXC 做 CT 容器）。' },
      { title: 'Linux 容器底层技术：namespace 与 cgroups 详解', content: 'namespace（命名空间）实现资源隔离，每个容器看到独立的系统资源视图。7 种 namespace 类型：1) PID——独立的进程 ID 空间（容器内的 PID 1 在宿主机可能是 PID 4567）2) NET——独立的网络栈（网卡、IP、路由表、iptables）3) MNT——独立的文件系统挂载点 4) UTS——独立的 hostname 和 domain name 5) IPC——独立的进程间通信资源 6) USER——独立的 UID/GID 映射 7) Cgroup——独立的 cgroup 视图。cgroups（控制组）实现资源限制和监控：cpu.shares 设定 CPU 权重、memory.max 限制内存上限、blkio.throttle 限制磁盘 IO。Docker 的 --cpus 和 --memory 参数底层就是写 cgroups 配置。理解 namespace 和 cgroups 就理解了容器安全边界——容器之间共享内核，所以内核漏洞可能被容器逃逸利用。' },
    ],
    handsOn: [
      { title: '手动创建 namespace 体验隔离', cmd: 'sudo unshare --pid --net --mount --fork --mount-proc /bin/bash -c "hostname container-1; echo \$\$; ip link; exit"', output: '1\n1: lo: <LOOPBACK> ...', explain: 'unshare 创建新的 namespace 并运行 bash。PID 显示为 1（这是新 PID namespace 的第一个进程），ip link 只看到一个 lo 回环接口（新 NET namespace 没有其他网卡）。这就是容器隔离的底层原理。' },
    ],
    diagnosis: [
      { symptom: '容器内进程看到的 CPU/内存与宿主机一致，资源限制未生效', cause: 'Docker daemon 未正确配置 cgroup driver（如 systemd vs cgroupfs 不匹配），或宿主机不支持 cgroup v2', fix: '检查 Docker info 中的 Cgroup Driver 和 Cgroup Version，确保与宿主机 init 系统一致。Linux 新版本推荐 cgroup v2 + systemd' },
      { symptom: '容器应用尝试绑定 1024 以下端口被拒绝', cause: '默认容器内 root 用户的 capabilities 被限制，CAP_NET_BIND_SERVICE 未授予', fix: '要么用 1024 以上的端口 + Nginx 代理，要么 docker run --cap-add NET_BIND_SERVICE 授予该 capability。不建议使用 --privileged——会赋予所有能力，破坏安全隔离' },
    ],
    exercises: [
      { level: '基础', task: '说出容器的底层依赖哪两个 Linux 内核特性', hint: '隔离 + 资源限制', answer: 'namespace（命名空间）实现隔离——每个容器看到独立的 PID/网络/文件系统/mount。cgroups（控制组）实现资源限制——限制 CPU/内存/磁盘 IO 用量。两者配合就是容器的技术基础。' },
      { level: '进阶', task: '假设你是一个容器运行时（Container Runtime）的开发者，描述创建一个容器需要的步骤', hint: '不依赖 Docker，用 Linux 系统调用', answer: '1) 创建新的 namespace：unshare(CLONE_NEWPID|CLONE_NEWNET|CLONE_NEWNS|...) 2) 设置 cgroups：在 /sys/fs/cgroup/下创建子目录，向其中写入资源限制值 3) 设置 rootfs：pivot_root 切换到容器镜像的文件系统 4) 设置网络：创建 veth pair，一端放入容器的 NET namespace，另一端连到宿主机网桥 5) chroot + 执行容器内的 init 进程。这就是 runc（Docker 底层运行时）做的事。' },
    ],
  },

  // ============================================================
  // 87-88. Container Orchestration / Kubernetes
  // ============================================================
  "BQbVZ1Hgr4Vt1kR2Zrtgp": {
    mentalModel: '容器编排就像"机场调度系统"——几百架飞机（容器）需要分配到登机口（服务器）、准时起飞（启动）、处理延误（重启失败容器）、调整航线（扩缩容）。你不可能手动调度几百架飞机，同理不能手动管理几百个容器。',
    sections: [
      { title: '为什么需要容器编排', content: '手动管理 3 个容器还行，30 个呢？300 个呢？容器编排解决：1) 调度——把容器分配到最适合的服务器（资源够、标签匹配）2) 服务发现——容器 IP 会变，需要 DNS/负载均衡 3) 扩缩容——流量大了自动加实例，小了减 4) 自愈——容器挂了自动重启/迁移 5) 滚动更新——逐个替换旧版本，不中断服务 6) 配置和密钥管理。Kubernetes 是容器编排的王者（市场份额 90%+），Docker Swarm 和 Nomad 是替代品。' },
      { title: '容器编排的调度算法', content: 'K8s 调度器（kube-scheduler）的工作流：1) 过滤（Filtering）——排除不符合条件的节点（资源不足、taint/toleration 不匹配、nodeSelector 不满足）2) 打分（Scoring）——对剩余节点打分，综合考量：资源均衡度（LeastRequestedPriority）、镜像本地性（ImageLocalityPriority——如果节点已有镜像则省去拉取时间）、Pod 亲和性/反亲和性（同一服务的 Pod 尽量分布在不同节点避免单点故障）。最终选得分最高的节点。调度策略可自定义——写自己的 Scheduler Plugin 或使用 scheduler extender。Docker Swarm 的调度更简单——主要基于资源可用量和用户自定义的 constraints（如 node.labels.region==us-east）。' },
    ],
    handsOn: [
      { title: '用 Docker Swarm 初始化一个单节点集群', cmd: 'docker swarm init', output: 'Swarm initialized: current node (...) is now a manager.', explain: 'Docker 内置的 Swarm 模式——一条命令创建编排集群。docker service create 启动被 Swarm 管理的服务。比 K8s 轻量得多，适合小规模部署。' },
    ],
    diagnosis: [
      { symptom: 'Pod 一直 Pending，无法调度', cause: '集群中没有节点满足 Pod 的资源请求（CPU/内存），或 nodeSelector/affinity 规则不匹配，或所有节点都处于资源压力下', fix: 'kubectl describe pod 查看 Events 中的详细原因，增加节点或降低 Pod 资源请求，检查 nodeSelector 和 taint/toleration 配置' },
      { symptom: '滚动更新后新 Pod 一直 Not Ready', cause: '新版本镜像有 bug 导致容器无法启动，或 health check（liveness/readiness probe）配置不当', fix: 'kubectl rollout undo 立即回滚到上一版本，检查新 Pod 的日志和 Events，确认 readiness probe 的 initialDelaySeconds 给够启动时间' },
    ],
    exercises: [
      { level: '基础', task: '解释什么情况下需要用 K8s，什么情况下 Docker Compose 就够了', hint: '团队规模和实例数量', answer: 'Docker Compose 适合：单机部署、3-5 个服务、不需要自动扩缩容、不需要高可用。K8s 适合：多机集群、10+ 服务、需要自动扩缩容/滚动更新/服务发现、需要高可用（多副本跨机器）。' },
      { level: '进阶', task: '设计一个小团队（5-10 人）的容器化部署演进路线', hint: '从单机 Compose 到托管 K8s', answer: '阶段 1（现在）：Docker Compose 单机部署，GitHub Actions 自动构建镜像+部署 2) 阶段 2（流量增长）：搬到云 VM + Docker Compose，加 Nginx 反向代理 + Let\'s Encrypt 3) 阶段 3（需要高可用）：用云厂商的托管 K8s（如 GKE/EKS 的 smallest node pool）——免去自己搭集群的运维负担 4) 阶段 4（多团队）：从托管 K8s 学到的经验决定是否自建集群。关键：不要一步跳到 K8s，每阶段等确实需要才演进。' },
    ],
  },

  "vDaxr8AIaPbG_3mHr0N6X": {
    mentalModel: 'Kubernetes（K8s）是"数据中心的操作系统"——它把多台服务器抽象成一台"超级计算机"，你告诉它"我要跑 3 个 API 实例"（声明式），它自己决定放哪台机器、怎么做负载均衡、怎么处理故障。',
    sections: [
      { title: 'K8s 核心概念速览', content: 'Pod：最小调度单元（一个或多个紧密耦合的容器）。Deployment：定义 Pod 的期望状态（几副本、什么镜像）。Service：给 Pod 提供稳定的网络访问（Pod IP 会变，Service IP 不变）。Ingress：对外暴露 HTTP/HTTPS 服务。ConfigMap/Secret：配置和密钥。Namespace：逻辑隔离（dev/staging/prod）。kubectl：命令行工具。对后端：K8s 不是必学的第一优先级——先用 Docker Compose 部署，当需要多机/高可用/自动扩容时再学 K8s。' },
      { title: 'K8s 声明式 vs 命令式——为什么重要', content: '命令式（Imperative）：kubectl run nginx --image=nginx——告诉 K8s"具体怎么操作"。声明式（Declarative）：kubectl apply -f deployment.yaml——告诉 K8s"我的期望状态是什么"。K8s 的核心控制循环（Reconciliation Loop）持续检查：实际状态 == 期望状态？如果不等，执行操作直到一致。这就是自愈的根本——Pod 挂了 → 实际状态（1 个运行）!= 期望状态（3 个运行）→ Deployment Controller 创建新 Pod。也是为什么你不应该手动 kubectl delete pod（Deployment 会立刻重建一个），而应该修改 Deployment 的 replicas 或删除 Deployment。理解声明式是关键——你写 YAML 描述"世界应该长什么样"，K8s 负责把世界变成那样。' },
    ],
    handsOn: [
      { title: '用 kubectl 部署一个 nginx 应用', cmd: 'kubectl create deployment my-nginx --image=nginx --replicas=2 && kubectl expose deployment my-nginx --port=80 --type=NodePort', output: 'deployment.apps/my-nginx created\nservice/my-nginx exposed', explain: '两条命令创建了 Deployment（2 个 nginx Pod）+ Service（对集群暴露 80 端口）。kubectl get pods 能看到 2 个 nginx 实例在运行。' },
    ],
    diagnosis: [
      { symptom: 'kubectl apply 成功但 Service 无法访问 Pod', cause: 'Service 的 selector 标签与 Pod 的 labels 不匹配，或 Pod 的 readiness probe 一直失败', fix: 'kubectl describe service 查看 Endpoints——如果为空说明 selector 没匹配到 Pod。kubectl get pods --show-labels 检查 Pod 标签是否与 Service selector 一致' },
      { symptom: 'Pod 反复 CrashLoopBackOff', cause: '容器启动后立即崩溃退出——命令错误、缺少依赖、端口冲突、OOM Killed', fix: 'kubectl logs <pod> --previous 查看上次崩溃的日志，kubectl describe pod 查看退出码和 OOM 信息，检查 CMD/ENTRYPOINT 是否正确' },
    ],
    exercises: [
      { level: '基础', task: '解释 K8s 中 Deployment 和 Pod 的关系', hint: 'Deployment 管理 Pod', answer: 'Deployment 是"控制器"——声明你期望的 Pod 状态（几副本、什么镜像）。K8s 确保实际状态匹配期望状态。Pod 是实际运行容器的单元。Deployment 创建和管理 Pod，Pod 挂了 Deployment 会新建一个。' },
      { level: '进阶', task: '写一个 Deployment YAML 实现：3 副本、CPU 限制每 Pod 0.5 核、内存 256Mi、滚动更新（max unavailable 1）、health check /healthz', hint: 'replicas + resources + strategy + liveness/readiness probe', answer: 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api-server\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: api-server\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 1\n  template:\n    metadata:\n      labels:\n        app: api-server\n    spec:\n      containers:\n      - name: app\n        image: myapp:v2\n        resources:\n          requests:\n            cpu: "250m"\n            memory: "128Mi"\n          limits:\n            cpu: "500m"\n            memory: "256Mi"\n        livenessProbe:\n          httpGet:\n            path: /healthz\n            port: 8080\n          initialDelaySeconds: 15\n        readinessProbe:\n          httpGet:\n            path: /healthz\n            port: 8080\n          initialDelaySeconds: 5', },
    ],
  },
};