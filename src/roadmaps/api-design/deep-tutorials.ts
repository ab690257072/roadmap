import type { DeepTutorial } from '../deep-types';

export const API_DESIGN_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  '2HdKzAIQi15pr3YHHrbPp': {
    mentalModel: 'HTTP 像快递运单——收件地址(URL)、寄件方式(方法)、包裹(Body)、回执(状态码)。全球格式统一。',
    handsOn: [
      {title:'手工 HTTP 请求',cmd:'printf \'GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\' | nc example.com 80',output:'HTTP/1.1 200 OK ...',explain:'原始报文，\\r\\n 行分隔符。'},
      {title:'缺 Host 头测试',cmd:'printf \'GET / HTTP/1.1\\r\\n\\r\\n\' | nc example.com 80',output:'400 Bad Request',explain:'1.1 强制 Host 头，同 IP 多域名区分。'},
    ],
    diagnosis: [
      {symptom:'1.0 客户端调 1.1 返 400',cause:'1.1 强制 Host(RFC 7230)',fix:'升级客户端或加 Host 头。'},
    ],
    exercises: [
      {level:'基础',task:'nc 手工发 1.0/1.1 对比',hint:'1.0 不需 Host 头',answer:'1.0 返 close，1.1 默认 keep-alive。'},
      {level:'进阶',task:'tcpdump 抓包对比连接',hint:'发 10 请求看握手次数',answer:'1.0:10 次握手。1.1:1 次。'},
    ],
  },
  'r8M3quACGO2piu0u_R4hO': {
    mentalModel: 'API 像餐厅服务员——点菜(请求)，去后厨下单上菜(响应)，不用管后厨怎么做。看懂菜单就行。',
    handsOn: [
      {title:'GitHub API',cmd:'curl -s https://api.github.com/users/octocat | jq "{login,public_repos}"',output:'{"login":"octocat","public_repos":8}',explain:'隐藏实现只暴露数据。'},
      {title:'httpie 调用',cmd:'http https://api.github.com/users/octocat',output:'HTTP/1.1 200 OK',explain:'自动格式化 JSON 更直观。'},
    ],
    diagnosis: [
      {symptom:'把 API 当数据库',cause:'不理解抽象层',fix:'API 是受控窗口，限制是设计意图。'},
    ],
    exercises: [
      {level:'基础',task:'调 3 个公开 API 总结',hint:'GitHub/Open-Meteo/RestCountries',answer:'API 设计无唯一标准。'},
      {level:'进阶',task:'fetch 封装通用客户端',hint:'api=async(url,o)=>{const r=await fetch(url,{headers:{Authorization:"Bearer "+tk}});return r.json();}',answer:'隐藏 HTTP 细节，SDK 原理。'},
    ],
  },
  'ACALE93mL4gnX5ThRIdRp': {
    mentalModel: 'HTTP 版本如手机网络 2G→5G。0.9=2G，1.0=3G，1.1=4G(持久)，2=5G(多路复用)，3=6G(QUIC)。',
    handsOn: [
      {title:'对比 1.1 vs 2',cmd:'curl -sI --http1.1 https://httpbin.org/get|head -1 && curl -sI --http2 https://httpbin.org/get|head -1',output:'HTTP/1.1 200 OK\\nHTTP/2 200',explain:'curl 默认协商 2。ALPN 在 TLS 握手定版本。'},
      {title:'nghttp2 看帧',cmd:'nghttp -v https://httpbin.org/get 2>&1|head -30',output:'send SETTINGS/HEADERS frame...',explain:'多路复用本质是帧交叉传输。'},
    ],
    diagnosis: [
      {symptom:'CDN 配了 2 客户端仍用 1.1',cause:'需 TLS 1.2+ 特定加密套件',fix:'ssl_protocols TLSv1.2 TLSv1.3; openssl s_client -alpn h2'},
    ],
    exercises: [
      {level:'基础',task:'curl 100 次对比 1.1 vs 2',hint:'for 循环 + -w %{time_total}',answer:'2 减少 15-30% 总时间。'},
      {level:'进阶',task:'Chrome DevTools 瀑布图对比',hint:'chrome://flags 切换',answer:'1.1 最多 6 并发排队，2 同时发出。'},
    ],
  },
  'P-rGIk50Bg7nFmWieAW07': {
    mentalModel: 'URL 参数如寄快递——路径(/users/123)是收件人，查询(?page=2)是备注，Body 是包裹。',
    handsOn: [
      {title:'路径 vs 查询',cmd:'echo "路径:/users/123" && echo "查询:/users?page=2"',output:'路径标识资源，查询过滤',explain:'路径=身份证号，查询=过滤器。'},
      {title:'同参数多值',cmd:'curl -s \'https://httpbin.org/get?color=red&color=blue\'|jq \'.args\'',output:'{"color":["red","blue"]}',explain:'自动合并为数组，框架处理不同。'},
    ],
    diagnosis: [
      {symptom:'/getUserById?id=123 非 /users/123',cause:'混淆路径和查询参数',fix:'路径=名词标识，查询=修饰，动词由方法表达。'},
    ],
    exercises: [
      {level:'基础',task:'设计查询用户订单 URL',hint:'用户ID路径 时间+状态查询',answer:'GET /users/42/orders?status=paid&since=2024-01-01'},
      {level:'进阶',task:'Express 参数校验中间件',hint:'req.params.id+Joi/Zod',answer:'router.get("/users/:id/orders",...) 校验 id 格式。'},
    ],
  },
  'rADHM-6NAxEjzmgiHefDX': {
    mentalModel: '方法=五种动作。GET(看)POST(放)PUT(换)PATCH(改)DELETE(移)。安全只读(GET)，幂等重复同果(PUT/DELETE)。POST 不幂等。',
    handsOn: [
      {title:'POST 非幂等',cmd:'for i in 1 2 3;do curl -s -X POST https://httpbin.org/post -d \'data=test\'|jq \'.json\';done',output:'每次不同UUID',explain:'POST 不幂等对比 GET 每次同果。'},
      {title:'PUT vs PATCH',cmd:'curl -s -X PUT https://httpbin.org/put -d \'{"name":"Bob"}\'|jq \'.json\'',output:'PUT 全替换 PATCH 部分改',explain:'不传字段清空 vs 只改指定。'},
    ],
    diagnosis: [
      {symptom:'GET 创资源 GET /createUser',cause:'不理解方法语义',fix:'修改必用 POST/PUT/PATCH/DELETE。GET 可被预取缓存。'},
    ],
    exercises: [
      {level:'基础',task:'5 次 POST 记录 id',hint:'for i in $(seq 5);do curl -s -X POST jsonplaceholder.typicode.com/posts -d \'{"title":"test"}\'|jq \'.id\';done',answer:'每次不同 id(101,102...)'},
      {level:'进阶',task:'带乐观锁 PUT',hint:'body 含 version，服务器 SELECT version 比较 UPDATE WHERE version=3',answer:'匹配 200，不匹配 409。防丢失更新。'},
    ],
  },
  'duKkpzPjUU_-8kyJGHqRX': {
    mentalModel: '学 API 如学游泳——看再多教材不如跳进泳池。基础知识是浮板，真正学会在实践中理解设计好坏。',
    handsOn: [
      {title:'完整 API 交互',cmd:'curl -v -X POST https://httpbin.org/post -d \'{"hello":"world"}\' 2>&1|grep -E \'^>|^<\'',output:'> POST /post HTTP/2\\n< HTTP/2 200 OK',explain:'-v 展示请求/响应全貌。httpbin 最佳学习工具。'},
      {title:'httpie 更直观',cmd:'http -v POST https://httpbin.org/post hello=world',output:'POST /post\\n{"hello":"world"}',explain:'自动 JSON、语法着色。'},
    ],
    diagnosis: [
      {symptom:'学了很多但不知怎么选',cause:'知识碎片化',fix:'决策框架:CRUD REST。灵活查询 GraphQL。微服务 gRPC。实时 WebSocket。'},
    ],
    exercises: [
      {level:'基础',task:'一天调 5+ 公开 API 总结',hint:'GitHub/Open-Meteo/RestCountries/JSONPlaceholder/httpbin',answer:'形成自己的 API 设计品味。'},
      {level:'进阶',task:'Charles/Fiddler 抓包分析 App API',hint:'安装 Charles 配 SSL 代理抓包',answer:'真实 App API 常偏离完美 REST。'},
    ],
  },
  'TX_hg7EobNJhmWKsMCaT1': {
    mentalModel: '内容协商如餐厅点餐——"牛排，七分熟"。Accept 头告服务器格式，Accept-Language 选语言，Accept-Encoding 选压缩。',
    handsOn: [
      {title:'Accept 头测试',cmd:'curl -s https://httpbin.org/anything -H \'Accept: application/xml\'|jq \'.headers.Accept\'',output:'"application/xml"',explain:'真实 API 据 Accept 切格式。GitHub:vnd.github.v3+json。'},
      {title:'压缩测试',cmd:'curl -sI https://www.google.com -H \'Accept-Encoding: gzip\'|grep content-encoding',output:'content-encoding: gzip',explain:'压缩减 50-80% 传输量。'},
    ],
    diagnosis: [
      {symptom:'发 Accept:xml 返 JSON',cause:'服务器忽略 Accept',fix:'只支持一种 文档声明。多种 解析 Accept。不满足 406。'},
    ],
    exercises: [
      {level:'基础',task:'测不同 Accept 头',hint:'json/xml/html 对比',answer:'理解 q 值优先级是核心。'},
      {level:'进阶',task:'Express+accepts 实现协商',hint:'npm i accepts; accepts(req).type([\'json\',\'xml\',\'html\'])',answer:'自动解析 q 值选最佳匹配。'},
    ],
  },
  '7szYyzLifKsepNU0c2KnN': {
    mentalModel: '状态码=快递追踪。2xx=签收(成功)，3xx=地址变(重定向)，4xx=你写错(客户端)，5xx=站着火(服务器)。',
    handsOn: [
      {title:'一键测所有',cmd:'for code in 200 201 301 404 500;do curl -sI https://httpbin.org/status/$code|head -1;done',output:'200:OK 201:Created 301:Moved 404:NotFound 500:Error',explain:'httpbin.org/status/xxx 返对应码。'},
      {title:'401 vs 403',cmd:'curl -sI https://api.github.com/user|head -1',output:'HTTP/2 401',explain:'GitHub 统一 401。标准:未认证 401，无权限 403。'},
    ],
    diagnosis: [
      {symptom:'POST 创成功返 200 非 201',cause:'所有成功用 200',fix:'POST 201+Location;PUT 200;DELETE 204。精确码好处理。'},
    ],
    exercises: [
      {level:'基础',task:'选码:登录/密码错/重复/删不存在',hint:'登录:200 密码:401 重复:409/422 删:204/404',answer:'登录=200。密码错=401。重复=409。删不存在=204。'},
      {level:'进阶',task:'状态码决策树 Express 中间件',hint:'AppError 类含 statusCode',answer:'ValidationErr 422,AuthErr 401,ForbiddenErr 403,NotFoundErr 404。'},
    ],
  },
  'KG3wO86F8Of27fU7QRcsn': {
    mentalModel: 'TCP/IP 是公路，HTTP 是快递车。TCP 保证不丢不乱序，IP 负责寻址。HTTP/3 改用 QUIC(UDP 增强)。',
    handsOn: [
      {title:'测 TCP 耗时占比',cmd:'curl -w \'DNS:%{time_namelookup}s TCP:%{time_connect}s Total:%{time_total}s\\n\' -s -o /dev/null https://api.github.com',output:'DNS:0.030s TCP:0.050s Total:0.300s',explain:'TCP+TLS 可能占 50%+。'},
      {title:'抓包看三次握手',cmd:'sudo tcpdump -c 6 host example.com 2>/dev/null || echo "需 sudo"',output:'Flags [S] SYN [S.] SYN-ACK [.] ACK',explain:'SYN SYN-ACK ACK 完成握手。'},
    ],
    diagnosis: [
      {symptom:'API 偶发极慢(>5s)',cause:'每请求新建连接 TCP+TLS 握手',fix:'连接池(keepAlive+maxSockets)。nginx upstream keepalive。'},
    ],
    exercises: [
      {level:'基础',task:'curl -w 测 5 次 time_connect',hint:'for i in 1 2 3 4 5;do curl -s -o /dev/null -w \'%{time_connect}\\n\' https://httpbin.org/get;done',answer:'首次~0.05s 后续~0s。'},
      {level:'进阶',task:'Wireshark 抓完整 HTTPS',hint:'dns||tcp.port==443||http',answer:'DNS TCP TLS HTTP FIN。约10-15往返。'},
    ],
  },
  'rE-0yibRH6B2UBKp351cf': {
    mentalModel: '头部=快递标签——易碎、此面朝上、需签收。非内容但指导处理。请求头表期望，响应头表返馈。',
    handsOn: [
      {title:'看完整头部',cmd:'curl -v https://httpbin.org/get 2>&1|grep -E \'^>|^<\'|head -20',output:'> GET /get HTTP/2\\n< HTTP/2 200',explain:'> 请求 < 响应。curl -v 最强大调试。'},
      {title:'自定义头',cmd:'curl -s https://httpbin.org/headers -H \'X-Request-ID:12345\'|jq \'.headers\'',output:'{"X-Request-ID":"12345"}',explain:'httpbin 回显所有头。历史用 X- 前缀。'},
    ],
    diagnosis: [
      {symptom:'431 Header Fields Too Large',cause:'总大小超 8KB(JWT过大/cookie多)',fix:'精简 JWT。清理 cookie。nginx large_client_header_buffers。'},
    ],
    exercises: [
      {level:'基础',task:'换 UA 为 curl/Chrome/手机',hint:'curl -H \'User-Agent: Mozilla/5.0\'',answer:'真实网站据 UA 变内容。'},
      {level:'进阶',task:'ModHeader 插件改请求头',hint:'Chrome 装 ModHeader',answer:'改 Accept 变格式 Authorization 变权限 Cache-Control 变缓存。'},
    ],
  },
  'v4nJYD9yiIEUviLPhVTCD': {
    mentalModel: 'DNS=互联网电话簿。知道名字(google.com)，DNS 告你号码(142.250.80.46)。影响服务发现和故障转移。',
    handsOn: [
      {title:'跟踪完整解析',cmd:'dig +trace api.github.com 2>&1|head -30',output:'根 .com 顶级 github.com 权威 IP',explain:'递归解析每步。'},
      {title:'测 DNS 耗时',cmd:'curl -w \'DNS:%{time_namelookup}s\\n\' -s -o /dev/null https://api.github.com',output:'DNS:0.030s',explain:'>200ms 可能 DNS 慢。'},
    ],
    diagnosis: [
      {symptom:'DNS 解析 2-5s 超时',cause:'DNS 不稳或 TTL 过短',fix:'用 8.8.8.8/1.1.1.1。加长缓存。合理 TTL(30min-24h)。'},
    ],
    exercises: [
      {level:'基础',task:'dig 查 A 和 CNAME',hint:'dig api.github.com +noall +answer',answer:'不同地区不同 IP(CDN/Anycast)。'},
      {level:'进阶',task:'Node.js DNS 缓存故障转移',hint:'dns.resolve4+Map+TTL',answer:'主域名失败自动切备用。缓存 5min。'},
    ],
  },
  'UFuX8wcxZQ7dvaQF_2Yp8': {
    mentalModel: 'Cookie=寄存柜小票。存包得小票(Set-Cookie)，取包出示(Cookie)，让无状态 HTTP 有记忆。',
    handsOn: [
      {title:'Set-Cookie 交互',cmd:'curl -v -c /tmp/c.txt -b /tmp/c.txt https://httpbin.org/cookies/set/user/alice 2>&1|grep -i cookie',output:'< Set-Cookie: user=alice\\n> Cookie: user=alice',explain:'-c 保存 -b 发送。浏览器自动管。'},
      {title:'属性查看',cmd:'curl -sI https://httpbin.org/cookies/set?session=abc|grep set-cookie',output:'set-cookie: session=abc; Path=/',explain:'生产需 HttpOnly+Secure+SameSite。'},
    ],
    diagnosis: [
      {symptom:'SameSite=Strict 外链总重登录',cause:'Strict 禁跨站带 Cookie',fix:'SameSite=Lax 允许顶级导航 GET。Chrome 默认。'},
    ],
    exercises: [
      {level:'基础',task:'DevTools 对比 Cookie 属性',hint:'github.com vs 小网站',answer:'GitHub 有 HttpOnly+Secure+SameSite。小网站常缺。'},
      {level:'进阶',task:'Express+Redis 会话管理',hint:'express-session+connect-redis',answer:'req.session.userId=user.id。可随时撤销。需共享 Redis。'},
    ],
  },
  'GRlsBogOlOwuqhMMPyHN3': {
    mentalModel: 'CORS=VIP 门禁。前端门外，API 在内。浏览器门卫查跨域请求有无 Allow-Origin 邀请函。curl 没门卫。',
    handsOn: [
      {title:'看 CORS 头',cmd:'curl -sI https://httpbin.org/get -H \'Origin: http://localhost:3000\'|grep access-control',output:'access-control-allow-origin: http://localhost:3000',explain:'不返此头浏览器拒 JS 读响应。'},
      {title:'触发 OPTIONS 预检',cmd:'curl -v -X OPTIONS https://httpbin.org/post -H \'Origin: http://ex.com\' -H \'Access-Control-Request-Method: DELETE\' 2>&1|grep -i access-control',output:'access-control-allow-methods: DELETE',explain:'非简单请求先 OPTIONS 问询。批准才发正式。'},
    ],
    diagnosis: [
      {symptom:'浏览器 CORS 错 curl 正常',cause:'CORS 是浏览器策略 curl 无限制',fix:'服务器加 Allow-Origin。credentials 时不能 *。'},
    ],
    exercises: [
      {level:'基础',task:'Chrome Console 发 fetch 看 CORS 错',hint:'两不同端口本地服务器',answer:'区分预检失败还是缺 Allow-Origin。'},
      {level:'进阶',task:'Express 实现 CORS 中间件',hint:'app.use 设 Allow-Origin+预检 204',answer:'生产用 cors 包。自定义需白名单+credentials。'},
    ],
  },
  'qAolZHf_jp8hCdtqHZwC8': {
    mentalModel: '缓存=冰箱囤菜。新鲜期(max-age)直接吃，过期闻(ETag)没变继续吃(304)，变了买新(200)。no-store=生鱼片。',
    handsOn: [
      {title:'ETag 条件请求',cmd:'curl -sI https://httpbin.org/etag/test123|grep etag',output:'ETag:"test123"',explain:'首次获 ETag。二次 If-None-Match 返 304 无 body。'},
      {title:'强缓存',cmd:'curl -sI https://httpbin.org/cache/60|grep cache-control',output:'Cache-Control: public, max-age=60',explain:'60 秒内不发网络请求。'},
    ],
    diagnosis: [
      {symptom:'B 看到 A 的隐私数据',cause:'Cache-Control:public CDN 缓存了用户数据',fix:'用户数据必用 private。公开可用 public+max-age。'},
    ],
    exercises: [
      {level:'基础',task:'Chrome DevTools 看缓存状态',hint:'memory cache/disk cache/304/200',answer:'理解多级缓存体系。'},
      {level:'进阶',task:'分层缓存策略',hint:'CDN(24h) Gateway Redis(5m) 应用 LRU',answer:'每层独立 TTL 和失效策略。'},
    ],
  },
  '9WI_z34jIFXwoUQuChyRU': {
    mentalModel: 'REST 非协议是建筑规范。六大约束是理想目标，多数 API 止 Level 2，Level 3(HATEOAS)罕见。',
    handsOn: [
      {title:'RESTful vs 非RESTful',cmd:'curl -s -X POST https://httpbin.org/post -d \'action=getUser&id=123\'|jq \'.form\'',output:'非RESTful:POST+action',explain:'RESTful 用 GET+资源 URL。HTTP 当协议非传输通道。'},
      {title:'Stateless 测试',cmd:'curl -s https://httpbin.org/get',output:'每次返回独立无会话',explain:'每请求含所有信息，不依赖服务器存状态。'},
    ],
    diagnosis: [
      {symptom:'自称 RESTful 但全用 POST',cause:'只理解 JSON+HTTP 不理解约束',fix:'严格遵循称 RESTful，否则称 HTTP API。REST 不是 JSON over HTTP。'},
    ],
    exercises: [
      {level:'基础',task:'评定 API Richardson 等级',hint:'GitHub Level 2+Link header',answer:'真正 Level 3 罕见。'},
      {level:'进阶',task:'Level 0 Level 2 重构',hint:'POST /api {action:getUser} GET /users/1',answer:'不再有 action 字段。'},
    ],
  },
  'BvwdASMvuNQ9DNgzdSZ4o': {
    mentalModel: 'RESTful=餐厅菜单。列着菜(资源)，点菜(GET)加菜(POST)换菜(PUT)退菜(DELETE)。非自助(GraphQL)非定制(gRPC)。',
    handsOn: [
      {title:'完整 CRUD',cmd:'curl -s -X POST jsonplaceholder.typicode.com/posts -d \'{"title":"test"}\'|jq \'{id}\'',output:'C:101 R:{id} U:{title} D:200',explain:'JSONPlaceholder 练习 CRUD 最佳。不真正存数据。'},
      {title:'子资源',cmd:'curl -s jsonplaceholder.typicode.com/posts/1/comments|jq ".[0]|{id,name}"',output:'{"id":1,"name":"..."}',explain:'/posts/1/comments 表达资源层级。RESTful 标志。'},
    ],
    diagnosis: [
      {symptom:'/posts 只返 userId 需 N 次 GET /users',cause:'资源粒度不合理 N+1',fix:'嵌入必要摘要(userId+name+avatar)或 expand 参数。'},
    ],
    exercises: [
      {level:'基础',task:'设计博客 API 三层',hint:'/users /users/:id/posts /posts/:id/comments',answer:'完整 CRUD 覆盖三层。'},
      {level:'进阶',task:'Express 实现博客 API',hint:'Router 拆分+关联数据+分页',answer:'统一 {data,pagination,error}。cursor 分页。'},
    ],
  },
  'b3qRTLwCC_9uDoPGrd9Bu': {
    mentalModel: 'URI=门牌号。好的一看就知：/users/42/orders/17。坏的是 /getOrder?userId=42&orderId=17。URI 标识资源非描述操作。',
    handsOn: [
      {title:'好 vs 坏 URI',cmd:'curl -s \'https://httpbin.org/get?action=getUser&id=123\'|jq \'.args\'',output:'坏:含动词(getUser)',explain:'好:/users/1+GET。坏:/api?action=getUser+POST。'},
      {title:'URL 编码',cmd:'curl -s \'https://httpbin.org/get?name=hello%20world\'|jq \'.args\'',output:'{"name":"hello world"}',explain:'%20 是空格。特殊字符必编码。'},
    ],
    diagnosis: [
      {symptom:'/users/1/address 和 /users/1/profiles/address 双地址',cause:'资源建模不清',fix:'先画实体关系图确定归属。一资源一主 URI。'},
    ],
    exercises: [
      {level:'基础',task:'五级嵌套 URI 设计',hint:'扁平化/tasks?projectId=1 非五级嵌套',answer:'URI 不超 3 级。深层改查询参数。'},
      {level:'进阶',task:'URI 命名规范文档',hint:'复数+kebab-case+无动词+版本/v1/',answer:'参考 GitHub+Stripe URI 设计。'},
    ],
  },
  'TVR-SkErlOHbDKLBGfxep': {
    mentalModel: 'JSON=快餐标准化。简单可读语言无关浏览器原生。非 SOAP XML 沉重非 gRPC 需工具。JSON 是 API 通用语。',
    handsOn: [
      {title:'JSON API CRUD',cmd:'curl -s -X POST jsonplaceholder.typicode.com/posts -H \'Content-Type: application/json\' -d \'{"title":"My Post"}\'|jq .',output:'{"title":"My Post","id":101}',explain:'Content-Type 告服务器用 JSON。'},
      {title:'jq 处理 JSON',cmd:'curl -s jsonplaceholder.typicode.com/posts|jq \'[.[]|{id,title:.title[:20]}]|.[0:3]\'',output:'[{"id":1,"title":"sunt..."}]',explain:'jq 过滤转换聚合命令行搞定。调试必备。'},
    ],
    diagnosis: [
      {symptom:'id 有时数字有时字符串',cause:'序列化不一致',fix:'ID 统一字符串(防大数精度)。布尔 true/false。JSON Schema 验证。'},
    ],
    exercises: [
      {level:'基础',task:'设计 JSON 响应格式',hint:'统一信封 {data,pagination,error}',answer:'列表 data=[] 单 data={}。201+Location。'},
      {level:'进阶',task:'JSON Schema+ajv 验证',hint:'ajv.compile(schema) 验证 req/res',answer:'每端点定义 schema，中间件验证。防字段名写错。'},
    ],
  },
  'o8i093VQv-T5Qf1yGqU0R': {
    mentalModel: 'API 风格如通信工具——电话(REST)、对讲机(WebSocket)、短信(SSE)、传呼(Webhook)、专线(gRPC)、信函(SOAP)。',
    handsOn: [
      {title:'同数据不同风格',cmd:'echo \'REST: GET /users/1\' && echo \'GraphQL: query{user(id:1){name}}\' && echo \'gRPC: rpc GetUser(Id) returns (User)\'',output:'同一用户查询三种风格',explain:'理解哲学差异比记代码重要。'},
      {title:'风格选择决策',cmd:'echo \'CRUD REST。灵活前端 GraphQL。微服务间 gRPC。实时 WebSocket。通知 Webhook。\'',output:'每种场景有最佳风格',explain:'不是所有问题都适合 REST。'},
    ],
    diagnosis: [
      {symptom:'全用 REST 觉其他过度设计',cause:'舒适区思维',fix:'决策框架:查询灵活?数据量?微服务内?实时?按需求选。'},
    ],
    exercises: [
      {level:'基础',task:'为场景选风格:聊天/银行/Feed/IoT',hint:'聊天 WebSocket 银行 REST 签名 Feed GraphQL IoT gRPC',answer:'只有最适合没有最好。'},
      {level:'进阶',task:'同功能两种风格实现对比',hint:'REST+GraphQL+gRPC 用户查询',answer:'REST 最简单 GraphQL 最灵活 gRPC 最快。'},
    ],
  },
  '8IDks2DNFZ5nER7wK2Bu4': {
    mentalModel: '资源建模如设计 ER 图但面向 API 使用者。不暴露所有数据库字段，只暴露使用者关心的。好的建模让 API 直观。',
    handsOn: [
      {title:'嵌套 vs 引用',cmd:'echo "嵌套:{\\"order\\":{\\"customer\\":{\\"name\\":\\"Alice\\"}}}" && echo "引用:{\\"order\\":{\\"customerId\\":42}}"',output:'嵌套:一次获所有。引用:精简需两次请求。',explain:'列表用引用，详情嵌套一级关联。'},
      {title:'资源粒度实验',cmd:'curl -s jsonplaceholder.typicode.com/posts|jq ".[0]"',output:'只返 userId 需二次查询',explain:'思考如何权衡资源粒度。'},
    ],
    diagnosis: [
      {symptom:'API 暴露数据库表结构',cause:'API 资源=数据库表 无领域建模',fix:'API 层和数据库层是两种建模。隐藏内部字段。'},
    ],
    exercises: [
      {level:'基础',task:'电商资源建模:User/Product/Order',hint:'1:N 关系图 嵌套 vs 引用',answer:'列表=引用 详情=适度嵌套。'},
      {level:'进阶',task:'社交媒体资源模型+API 实现',hint:'User/Post/Comment/Like',answer:'Post 嵌套 author 摘要+likeCount。Like 独立资源。'},
    ],
  },
  'Wwd-0PjrtViMFWxRGaQey': {
    mentalModel: 'SOAP=政府公文。严格格式(WSDL 模板)，XML 纸张，Envelope/Body 信封。事务、签名、可靠传输场景的优势。',
    handsOn: [
      {title:'调用 SOAP 服务',cmd:'curl -s -X POST \'https://www.dataaccess.com/webservicesserver/NumberConversion.wso\' -H \'Content-Type: text/xml\' -d \'<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/"><ubiNum>42</ubiNum></NumberToWords></soap:Body></soap:Envelope>\'',output:'<m:NumberToWordsResult>forty two</m:NumberToWordsResult>',explain:'完整 SOAP 调用。XML Envelope 包裹 Body。'},
      {title:'查看 WSDL',cmd:'curl -s \'https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL\'|head -20',output:'<wsdl:definitions...>',explain:'WSDL=SOAP 接口定义文档。'},
    ],
    diagnosis: [
      {symptom:'WSDL 升版旧客户端失败',cause:'XML 命名空间不匹配',fix:'版本化 WSDL(/v1/wsdl,/v2/wsdl)。添加可选元素不改类型。'},
    ],
    exercises: [
      {level:'基础',task:'调 NumberToWords 转生日',hint:'改 ubiNum 标签数字',answer:'1995=one thousand nine hundred and ninety five。'},
      {level:'进阶',task:'Python zeep 调 SOAP',hint:'pip install zeep; c=Client(wsdl); c.service.NumberToWords(42)',answer:'3 行 vs raw XML 10+ 行。SOAP 有工具链不复杂。'},
    ],
  },
  '0yY_lWzWVOC_WmPoyHw8W': {
    mentalModel: '命名规范如交通标志——全球统一红灯停绿灯行。API 命名同理：复数资源、camelCase 字段、kebab-case 路径。',
    handsOn: [
      {title:'对比平台风格',cmd:'curl -s https://api.github.com/users/octocat|jq "{login,public_repos,created_at}"\\ncurl -s jsonplaceholder.typicode.com/users/1|jq "{id,name,username}"',output:'GitHub:snake_case JSONPlaceholder:混合',explain:'不同公司不同规范。统一即可不混用。'},
      {title:'URI 风格对比',cmd:'echo "好的: /users/42/orders\\n坏的: /getUserOrders?userId=42"',output:'好:名词+层级。坏:动词+参数。',explain:'命名影响可读性和一致性。'},
    ],
    diagnosis: [
      {symptom:'/get_user_by_id,/user,/users 三种风格共存',cause:'无统一规范',fix:'制定 Style Guide。Spectral 自动检查。重构统一。'},
    ],
    exercises: [
      {level:'基础',task:'制 15 条命名规则',hint:'路径/参数/JSON/Header/Error',answer:'/user-profiles, sortBy, firstName, X-Request-Id, INVALID_PARAM'},
      {level:'进阶',task:'Spectral 规则集成 CI',hint:'.spectral.yaml 规则检查命名',answer:'path-kebab-case+property-camelCase 自动检查。'},
    ],
  },
  '1DrqtOwxCuFtWQXQ6ZALp': {
    mentalModel: 'gRPC=工厂自动化流水线。Protobuf 模具(类型安全)，HTTP/2 传送带(多路复用)，全流程机械化高效但需专门模具。',
    handsOn: [
      {title:'grpcurl 列服务',cmd:'grpcurl -plaintext localhost:50051 list',output:'helloworld.Greeter',explain:'grpcurl 是 gRPC 的 curl。reflection 开启后可动态发现。'},
      {title:'grpcurl 调用',cmd:'grpcurl -plaintext -d \'{"name":"World"}\' localhost:50051 helloworld.Greeter/SayHello',output:'{"message":"Hello World"}',explain:'实际传输是二进制 protobuf，grpcurl 转 JSON 展示。'},
    ],
    diagnosis: [
      {symptom:'改 proto 字段名后仍正常但不该正常',cause:'Protobuf 序列化依赖编号不依赖字段名',fix:'新增字段用新编号。删除标 reserved。不改编号或类型。'},
    ],
    exercises: [
      {level:'基础',task:'定义 proto UserService',hint:'syntax="proto3"; service UserService{rpc CreateUser(CreateUserReq)returns(User);rpc GetUser(GetUserReq)returns(User);}',answer:'protoc --go_out=. --go-grpc_out=. user.proto。'},
      {level:'进阶',task:'实现四种 gRPC 模式',hint:'Unary/ServerStream/ClientStream/Bidirectional',answer:'stream 关键字 rpc Chat(stream Msg)returns(stream Msg) 双向流。'},
    ],
  },
  'itILK2SXvLvAjk1Kul7EK': {
    mentalModel: 'API 版本管理如手机系统升级——不能强制所有人立刻升级，新旧版本共存一段时间，等用户自然迁移。',
    handsOn: [
      {title:'GitHub 版本方式',cmd:'curl -sI https://api.github.com/users/octocat -H "Accept: application/vnd.github.v3+json"|head -1',output:'HTTP/2 200 OK',explain:'GitHub 用 Accept 头版本控制，非 URL 路径。'},
      {title:'Stripe 版本方式',cmd:'echo "Stripe: /v1/customers + Stripe-Version: 2023-08-16"',output:'URL 路径+Header 精确日期版本',explain:'Stripe 组合方式实现滚动升级。'},
    ],
    diagnosis: [
      {symptom:'发 v2 大量客户端仍用 v1',cause:'无弃用策略和迁移激励',fix:'Sunset 头公告 监控使用量 主动通知 限旧版本速率 3-6月弃用周期。'},
    ],
    exercises: [
      {level:'基础',task:'设计 v1 v2 升级方案',hint:'v2 向外兼容保留旧字段不删除',answer:'v1:{"name":"Alice"} v2:{"name":"Alice","firstName":"Alice","lastName":"Smith"}。'},
      {level:'进阶',task:'Express 多版本 API',hint:'app.use("/v1",v1Router);app.use("/v2",v2Router)',answer:'或 Accept 头路由版本分支。'},
    ],
  },
  'MKVcPM2EzAr2_Ieyp9Fu3': {
    mentalModel: 'GraphQL=自助火锅。拿菜单(Schema)点菜(Query)，想吃什么涮什么(精确字段)，不被迫上整桌套餐(REST over-fetching)。',
    handsOn: [
      {title:'SpaceX GraphQL 查询',cmd:'curl -s https://api.spacex.land/graphql/ -H \'Content-Type: application/json\' -d \'{"query":"{launches(limit:3){mission_name rocket{rocket_name}}}"}\'|jq \'.data.launches[]\'',output:'{"mission_name":"Starlink-1","rocket":{"rocket_name":"Falcon 9"}}',explain:'一个请求获 launches+rocket。REST 需多次请求。'},
      {title:'GitHub GraphQL',cmd:'curl -s https://api.github.com/graphql -H \'Authorization: bearer TOKEN\' -d \'{"query":"{repository(owner:\\"facebook\\",name:\\"react\\"){name stargazerCount}}"}\'|jq \'.\'',output:'{"data":{"repository":{"name":"react","stargazerCount":230000}}}',explain:'一个请求精确字段。REST 需要至少 2 个请求。'},
    ],
    diagnosis: [
      {symptom:'查询作者文章 N+1 查询',cause:'每个 resolver 独立查数据库',fix:'DataLoader 批量收集 ID 一次查询。N+1 变 2 次。'},
    ],
    exercises: [
      {level:'基础',task:'SpaceX API 查 3 次发射',hint:'{launches(limit:3){mission_name launch_success}}',answer:'curl 发 query 到 api.spacex.land/graphql/。'},
      {level:'进阶',task:'Apollo Server+DataLoader',hint:'npm i apollo-server graphql dataloader',answer:'userLoader=new DataLoader(async(ids)=>{const users=await db.findByIds(ids);return ids.map(id=>users.find(u=>u.id===id));});'},
    ],
  },
  'awdoiCHz7Yc3kYac_iy-a': {
    mentalModel: '构建 RESTful API 如装修房子——先搭骨架(项目结构)，铺水电(路由+中间件)，刷墙(验证+序列化)，装家具(文档+测试)。',
    handsOn: [
      {title:'Express 最小骨架',cmd:'echo "const express=require(\'express\');const app=express();app.get(\'/health\',(req,res)=>res.json({status:\'ok\'}));app.listen(3000);"',output:'从最小骨架开始逐步添加功能',explain:'每加一组件先问是否真需要它。'},
      {title:'中间件栈',cmd:'echo \'morgan auth validation route errorHandler\'',output:'中间件顺序很重要',explain:'morgan 日志 auth 认证 validation 校验 route 业务 errorHandler 兜底。'},
    ],
    diagnosis: [
      {symptom:'Express 路由文件上千行',cause:'所有端点写在一个文件',fix:'express.Router() 按资源拆分 users/orders。index.js 挂载所有 router。'},
    ],
    exercises: [
      {level:'基础',task:'从零搭 Express API',hint:'npm init && npm i express && 创建 index.js',answer:'app.get(\'/health\',(req,res)=>res.json({status:\'ok\',time:new Date()}));'},
      {level:'进阶',task:'添加校验认证日志测试',hint:'npm i joi morgan jsonwebtoken supertest',answer:'中间件栈:morgan auth validation route errorHandler。'},
    ],
  },
  'LByD1vhzunhY1uY1YGZHP': {
    mentalModel: 'HATEOAS 是 REST 点睛之笔——不仅给你数据，还给你"下一步能做什么"的路线图。如淘宝确认收货页有评价/售后/再买的按钮。',
    handsOn: [
      {title:'HATEOAS 响应示例',cmd:'echo \'{"id":1,"status":"pending","_links":{"self":"/orders/1","cancel":"/orders/1/cancel","pay":"/orders/1/pay"}}\'|jq .',output:'数据+可用操作链接',explain:'客户端读 _links 判断可执行操作。不需预先知道 URL 结构。'},
      {title:'状态驱动链接',cmd:'echo \'pending:{pay,cancel} paid:{ship} shipped:{confirm}\'|jq .',output:'每个状态暴露不同操作',explain:'状态机通过 HATEOAS 链接暴露合法下一步。'},
    ],
    diagnosis: [
      {symptom:'前端硬编码 /api/v1/orders/cancel 升 v2 报 404',cause:'客户端硬编码 URL',fix:'借鉴 HATEOAS 思想:重要 URL 集中配置，文档生成 SDK。'},
    ],
    exercises: [
      {level:'基础',task:'CRUD 改 HATEOAS 格式',hint:'添加 _links 字段',answer:'{"data":{...},"_links":{"self":"/users/1","update":{"href":"/users/1","method":"PATCH"}}}'},
      {level:'进阶',task:'订单状态机 HATEOAS',hint:'pending pay/cancel paid ship/cancel shipped confirm',answer:'每状态只暴露合法操作。防客户端跳过状态。'},
    ],
  },
  'zXxEiM5HeOn7W-Vue0tQf': {
    mentalModel: 'CRUD=仓库管理。Create=入库，Read=查库存，Update=改信息，Delete=出库/报废。POST/GET/PUT/DELETE 映射 CRUD。',
    handsOn: [
      {title:'完整 CRUD 流程',cmd:'echo \'C: POST /posts\'\\necho \'R: GET /posts/1\'\\necho \'U: PUT /posts/1\'\\necho \'D: DELETE /posts/1\'',output:'C:201 R:200 U:200 D:204',explain:'POST GET PUT DELETE 映射 CRUD 四操作。'},
      {title:'软删除',cmd:'echo \'DELETE PATCH /tasks/1 {\\"deletedAt\\":\\"2024-01-15\\"}\'\\necho \'SELECT WHERE deleted_at IS NULL\'',output:'不真删标记时间戳',explain:'软删除让数据可恢复满足审计需求。'},
    ],
    diagnosis: [
      {symptom:'用 POST /users/update?id=1&name=Bob 更新',cause:'混淆 CRUD 和 HTTP 方法',fix:'PATCH /users/1 -d \'{"name":"Bob"}\'。URL 标识资源 方法表达操作 Body 传数据。'},
    ],
    exercises: [
      {level:'基础',task:'TODO 任务 CRUD 设计',hint:'POST /tasks 201 GET /tasks 200 PATCH /tasks/:id 200 DELETE /tasks/:id 204',answer:'标记完成 PATCH 非 PUT。'},
      {level:'进阶',task:'实现软删除 CRUD',hint:'PATCH 设 deletedAt GET 默认排除已删',answer:'GET ?includeDeleted=true 显示全部。'},
    ],
  },
  'UQ8N7gcVpRLAYXgUNHBt5': {
    mentalModel: 'WebSocket=对讲机。一次握手(HTTP Upgrade)将短连接升级为长连接，之后双方随时可发消息，不需每次重拨号。',
    handsOn: [
      {title:'wscat 测试',cmd:'wscat -c wss://echo.websocket.org',output:'Connected\\n> hello\\n< hello',explain:'wscat 是命令行 WebSocket 客户端。echo 服务器原样返回消息。'},
      {title:'看升级握手',cmd:'curl -v -H \'Connection: Upgrade\' -H \'Upgrade: websocket\' https://echo.websocket.org 2>&1|head -20',output:'101 Switching Protocols',explain:'WebSocket 从 HTTP 开始。101 后 TCP 连接转为 WebSocket 协议。'},
    ],
    diagnosis: [
      {symptom:'移动网络 WebSocket 频繁断连',cause:'网络切换/NAT 超时',fix:'心跳 ping/pong 每30s。自动重连指数退避 1s 2s 4s 8s max30s。onclose 触发重连。'},
    ],
    exercises: [
      {level:'基础',task:'Node.js ws 回显服务器',hint:'npm i ws; const wss=new WebSocket.Server({port:8080}); wss.on("connection",ws=>ws.on("message",m=>ws.send(m)));',answer:'wscat -c ws://localhost:8080 消息往返。'},
      {level:'进阶',task:'心跳+自动重连',hint:'30s ping 5s 超时 pong close。onclose setTimeout new WebSocket',answer:'延迟=min(1000*Math.pow(2,attempts),30000)。'},
    ],
  },
  'dL3YellfAszBeJnm8KEYE': {
    mentalModel: '过滤排序搜索如淘宝筛选栏——搜关键词(search)，按价格排(sort)，只看 100-500 元(filter)，叠加精准定位。',
    handsOn: [
      {title:'GitHub 过滤排序示例',cmd:'curl -s \'https://api.github.com/repos/nodejs/node/issues?state=open&labels=good+first+issue&sort=created&direction=desc&per_page=3\'|jq \'.[]|{number,title}\'',output:'{"number":53000+,...}',explain:'state/labels 过滤 sort/direction 排序 per_page 分页。'},
      {title:'操作符语法',cmd:'echo "?price[gte]=100&price[lte]=500&tags=js&tags=node"',output:'范围过滤+多值+模糊搜索',explain:'eq/gte/lte/gt/lt/ne/in/like 操作符白名单。'},
    ],
    diagnosis: [
      {symptom:'前端传 ?sort=database_column 暴露库结构',cause:'直接拼接到 SQL ORDER BY 无白名单',fix:'ALLOWED_SORT={name:"users.name"} 拒绝不在白名单字段返回 400。'},
    ],
    exercises: [
      {level:'基础',task:'设计过滤排序搜索参数',hint:'?q=iphone&category=electronics&price[gte]=5000&sort=-sales',answer:'搜索 q 参数 结构化过滤专有参数 排序 - 降序 + 升序。'},
      {level:'进阶',task:'安全动态查询构建器',hint:'白名单 field+op 遍历 req.query 参数化 SQL',answer:'不白名单字段忽略或 400。避免字符串拼接 SQL。'},
    ],
  },
  'iNsXTtcIHsI_i-mCfjGYn': {
    mentalModel: 'SSE=收音机广播。服务器单向持续推送数据流，客户端只需监听。比 WebSocket 简单(纯 HTTP)，适合通知、进度条、实时日志。',
    handsOn: [
      {title:'测试 SSE 端点',cmd:'curl -N http://localhost:3000/sse',output:'data: {...}\\n\\n',explain:'-N 禁用缓冲。SSE 格式: data: JSON\\n\\n 每条消息双换行分隔。'},
      {title:'EventSource 前端',cmd:'const es=new EventSource(\'/sse\');es.onmessage=e=>console.log(JSON.parse(e.data));',output:'浏览器原生支持，自动重连',explain:'比 WebSocket 轻量。单向推送场景首选。'},
    ],
    diagnosis: [
      {symptom:'SSE 连接数超浏览器限制(6/域名)',cause:'浏览器同源限制也适用 SSE',fix:'HTTP/2 下限制放宽但仍注意。单页面多用单 SSE 连接+事件类型区分。'},
    ],
    exercises: [
      {level:'基础',task:'用 Express 实现 SSE',hint:'app.get(\'/sse\',(req,res)=>{res.set({\'Content-Type\':\'text/event-stream\',\'Cache-Control\':\'no-cache\',\'Connection\':\'keep-alive\'});setInterval(()=>res.write(\'data: \'+JSON.stringify({time:Date.now()})+\'\\n\\n\'),1000);});',answer:'curl -N http://localhost:3000/sse 每秒收一条。'},
      {level:'进阶',task:'SSE vs WebSocket 选型',hint:'SSE:单向推送 HTTP 兼容好。WebSocket:双向实时。',answer:'通知/进度 SSE。聊天/游戏 WebSocket。'},
    ],
  },
  'JE12g5cqnwmgeTle14Vxw': {
    mentalModel: '实时 API=现场直播。数据产生即刻推送给消费者。三种主要方式:WebSocket(双向)、SSE(服务端推送)、Long Polling(兼容降级)。',
    handsOn: [
      {title:'Long Polling',cmd:'echo \'Client: GET /updates\\nServer: 等有新数据再响应\\nClient: 收到后立即再发 GET\'',output:'HTTP 兼容最好但效率最低',explain:'超时重发。适合不支持 WebSocket 的旧环境。'},
      {title:'对比三种方式的延迟',cmd:'echo \'Polling: 间隔延迟\\nLong Polling: 实时但有连接开销\\nWebSocket: 毫秒级延迟\'',output:'延迟: Polling>Long Polling>WebSocket',explain:'选择取决于实时性要求和兼容性需求。'},
    ],
    diagnosis: [
      {symptom:'同时用 WebSocket+SSE+Polling 架构复杂',cause:'未统一实时通道',fix:'评估实际需求。通知 SSE 聊天 WebSocket 兜底 Polling。单一通道降低复杂度。'},
    ],
    exercises: [
      {level:'基础',task:'搭建实时通知系统',hint:'SSE 通知+WebSocket 聊天+Polling 兜底',answer:'根据场景选择最合适的实时方案。'},
      {level:'进阶',task:'实时 dashboard',hint:'WebSocket 推送指标+断线缓存(Redis)+重连补偿',answer:'离线期间消息不丢失。'},
    ],
  },
  'pgJDzP3pJjhjr5wTRtPJO': {
    mentalModel: '分页如看厚书——一次看一页。Offset 分页像"翻到第100页"(书可能被撕导致错乱)，Cursor 分页像"上次看到第3段"(稳定高效)。',
    handsOn: [
      {title:'GitHub Link 头分页',cmd:'curl -sI "https://api.github.com/repos/nodejs/node/issues?per_page=5&page=1"|grep -i link',output:'Link: <...?page=2>; rel="next"',explain:'GitHub 用 Link 头(RFC 5988)实现分页，不影响 body 结构。'},
      {title:'Offset 分页问题',cmd:'echo "GET /items?_start=10&_limit=5"',output:'翻页间数据变化导致重复/遗漏',explain:'翻页漂移。实时数据用 Cursor 分页。'},
    ],
    diagnosis: [
      {symptom:'SELECT COUNT(*) 每次请求极慢',cause:'为了显示共5000条 每请求 COUNT',fix:'不需精确总数不 COUNT。估算用 EXPLAIN。必须精确加缓存(Redis)。'},
    ],
    exercises: [
      {level:'基础',task:'GitHub API 分页遍历',hint:'curl -I "https://api.github.com/repos/facebook/react/issues?page=1"|grep Link',answer:'提取 next URL 遍历。'},
      {level:'进阶',task:'Offset vs Cursor SQL 对比',hint:'LIMIT 20 OFFSET 100000 vs WHERE id>100000 LIMIT 20',answer:'OFFSET 扫 100020 行 Cursor 扫 20 行。性能差 100-1000 倍。'},
    ],
  },
  '20KEgZH6cu_UokqWpV-9I': {
    mentalModel: '幂等=多次重复操作效果相同。PUT(换整个)幂等，POST(创建)不幂等。支付接口必须幂等——用户双击只扣一次钱。',
    handsOn: [
      {title:'测试幂等性',cmd:'for i in 1 2 3;do curl -s -X PUT https://httpbin.org/put -d \'data=same\'|jq \'.json\';done',output:'每次相同',explain:'PUT 重复同果。POST 每次不同。幂等=安全重复。'},
      {title:'幂等键实现',cmd:'curl -s -X POST https://api.stripe.com/v1/charges -H \'Idempotency-Key: unique-key-123\'',output:'同一 Idempotency-Key 重复请求返回相同结果',explain:'Stripe 用 Idempotency-Key 头实现幂等。'},
    ],
    diagnosis: [
      {symptom:'用户双击支付按钮扣了两次钱',cause:'POST 不幂等 无幂等键保护',fix:'引入幂等键(Idempotency-Key)。服务端存储 key 结果 24h。重复请求返回已存结果。'},
    ],
    exercises: [
      {level:'基础',task:'curl 验证 PUT vs POST 幂等',hint:'PUT 5 次看响应是否相同',answer:'PUT 幂等 POST 非幂等的原因: PUT 指定资源 ID POST 自动生成。'},
      {level:'进阶',task:'实现幂等中间件',hint:'Redis 存 idempotent:{key}=>result SETNX',answer:'收到请求 查 Redis 有返缓存 无执行存结果。'},
    ],
  },
  'zeYJPEduAmLQHqq4kNBdx': {
    mentalModel: '流式响应=边做边上菜。不等到全部做完才上桌，而是一道一道上。Transfer-Encoding:chunked 让客户端逐步处理数据。',
    handsOn: [
      {title:'观察 chunked 编码',cmd:'curl -N -s https://httpbin.org/stream/5|head -10',output:'{"id":0,...}\\n{"id":1,...}\\n...',explain:'-N 禁用缓冲。每个 chunk 独立传输逐步显示。'},
      {title:'NDJSON 格式',cmd:'echo \'每行一个 JSON 对象\\n{"id":1}\\n{"id":2}\\n{"id":3}\'',output:'客户端逐行解析',explain:'NDJSON(Newline Delimited JSON)=JSON Lines。流式 API 常用。'},
    ],
    diagnosis: [
      {symptom:'客户端等全部响应才渲染',cause:'未用流式处理',fix:'fetch res.body.getReader() 或 EventSource 逐条处理。大文件/AI 生成内容必须流式。'},
    ],
    exercises: [
      {level:'基础',task:'测试 httpbin stream 端点',hint:'curl -N https://httpbin.org/stream/5',answer:'5 个 JSON 逐条返回。'},
      {level:'进阶',task:'实现流式响应 Express',hint:'res.set({\'Content-Type\':\'application/x-ndjson\'}); for(const item of items){res.write(JSON.stringify(item)+\'\\n\');} res.end();',answer:'客户端 fetch res.body.getReader() 逐条处理。'},
    ],
  },
  'O7wjldZ3yTA2s_F-UnJw_': {
    mentalModel: '限流=游乐场排队栏杆。热门项目不能所有人同时涌入，限制每次进入人数。保护服务器不被单个客户端压垮。',
    handsOn: [
      {title:'GitHub 限流头',cmd:'curl -sI https://api.github.com/users/octocat|grep x-ratelimit',output:'x-ratelimit-limit:60 x-ratelimit-remaining:58 x-ratelimit-reset:1700000000',explain:'limit=总配额 remaining=剩余 reset=重置时间戳。'},
      {title:'触发限流',cmd:'for i in $(seq 65);do curl -sI https://api.github.com/users/octocat|grep "^HTTP";done',output:'HTTP/1.1 403 Forbidden',explain:'GitHub 对未认证超限额返 403(非标准 429)。'},
    ],
    diagnosis: [
      {symptom:'固定窗口边界处两倍流量',cause:'第59秒100次+第61秒100次都合法',fix:'滑动窗口或令牌桶。恒定速率生产令牌支持短时突发。'},
    ],
    exercises: [
      {level:'基础',task:'监控 GitHub 使用量',hint:'while true;do curl -sI https://api.github.com/users/octocat|grep remaining;sleep 5;done',answer:'观察 remaining 递减到0。'},
      {level:'进阶',task:'Redis 令牌桶算法',hint:'Lua 脚本原子操作 GET DECR',answer:'初始化 SET rate:user:123 100。补充定时 INCR 不超容量。消费 EVAL 检查递减。'},
    ],
  },
  '8tELdagrOaGCf3nMVs8t3': {
    mentalModel: '错误处理=医院分诊台。4xx=你的问题(没挂号/跑错科室)，5xx=医院的问题(CT机坏/医生请假)。好的错误清楚告诉调用者哪里错为什么错怎么改。',
    handsOn: [
      {title:'GitHub 错误格式',cmd:'curl -s https://api.github.com/repos/nonexistent/repo|jq "{message,documentation_url}"',output:'{"message":"Not Found","documentation_url":"https://docs.github.com/..."}',explain:'错误含 message+文档链接。很好的错误设计实践。'},
      {title:'Stripe 错误格式',cmd:'echo \'{"error":{"type":"invalid_request_error","code":"api_key_invalid","param":"api_key"}}\'|jq .',output:'type 分类 code 机器可读 param 哪个参数',explain:'param 让前端精准定位表单对应输入框。'},
    ],
    diagnosis: [
      {symptom:'不管什么错误都返 200 body 里放 {"success":false}',cause:'不理解状态码语义',fix:'HTTP 状态码正确使用:400/401/403/404/409/422/429/500。错误格式统一。'},
      {symptom:'500 错误暴露堆栈跟踪',cause:'global error handler 直接暴露 error.stack',fix:'生产只返通用消息+error_id。详细堆栈记日志。error_id 用于技术支持。'},
    ],
    exercises: [
      {level:'基础',task:'curl 制不同类型错误',hint:'curl -I https://api.github.com/nonexistent 404\\ncurl https://api.github.com/user 401',answer:'观察不同 API 错误格式差异。'},
      {level:'进阶',task:'Express 工程级错误格式',hint:'class AppError extends Error{constructor(statusCode,code,message){super(message);this.statusCode=statusCode;this.code=code;}}',answer:'{error:{code,message,details,request_id}}。'},
    ],
  },
  '5CxU3inGcSHp-TDg3BQiY': {
    mentalModel: 'RFC 7807=标准化错误格式。如病历模板——类型(什么问题)、标题(概述)、详情(具体说明)、实例(这条记录的唯一ID)。',
    handsOn: [
      {title:'RFC 7807 格式示例',cmd:'echo \'{"type":"https://api.example.com/errors/insufficient-funds","title":"Insufficient Funds","status":422,"detail":"Account balance 50 is insufficient for charge 99","instance":"/transactions/tx-12345"}\'|jq .',output:'type=错误类型URI title=概述 status=状态码 detail=详情 instance=请求ID',explain:'标准化错误格式让客户端自动处理。'},
      {title:'Content-Type',cmd:'echo "Content-Type: application/problem+json"',output:'专用 MIME type',explain:'明确告诉客户端这是 RFC 7807 格式的错误响应。'},
    ],
    diagnosis: [
      {symptom:'每个公司自定义错误格式互不兼容',cause:'无统一标准 RFC 7807 推广度低',fix:'推荐使用 RFC 7807+扩展字段。至少统一团队内错误格式。'},
    ],
    exercises: [
      {level:'基础',task:'用 RFC 7807 格式写错误',hint:'type+title+status+detail+instance',answer:'把常见错误(验证/认证/业务)用 RFC 7807 格式描述。'},
      {level:'进阶',task:'Express 中间件输出 RFC 7807',hint:'res.status(err.status).json({type,title,status,detail,instance:req.id})',answer:'Content-Type: application/problem+json。'},
    ],
  },
  '0FzHERK5AeYL5wv1FBJbH': {
    mentalModel: 'Basic Auth=明信片。用户名密码写上面，谁都能看(Base64 编码)。但若用 HTTPS(挂号信加密信封)就安全了。最古老的认证方案。',
    handsOn: [
      {title:'Basic Auth 编码',cmd:'echo -n \'alice:secret123\'|base64',output:'YWxpY2U6c2VjcmV0MTIz',explain:'Base64 是编码非加密。任何人都能解码。必须配合 HTTPS。'},
      {title:'curl 测试成功/失败',cmd:'curl -s -u alice:secret123 https://httpbin.org/basic-auth/alice/secret123|jq .',output:'{"authenticated":true,"user":"alice"}',explain:'成功 200 失败 401+WWW-Authenticate 头。'},
    ],
    diagnosis: [
      {symptom:'生产用 Basic Auth 但没用 HTTPS',cause:'误以为 Base64 是加密',fix:'Basic Auth 必须配合 HTTPS。TLS 加密整个 HTTP 通信保护密码。'},
    ],
    exercises: [
      {level:'基础',task:'手动构造 Basic Auth 请求',hint:'Authorization: Basic $(echo -n user:pass|base64)',answer:'理解 curl -u 实际做的事。'},
      {level:'进阶',task:'Node.js Basic Auth 中间件',hint:'app.use((req,res,next)=>{const auth=req.headers.authorization;if(!auth||!auth.startsWith(\'Basic \')){res.set(\'WWW-Authenticate\',\'Basic realm=API\');return res.status(401).end();}const[u,p]=Buffer.from(auth.slice(6),\'base64\').toString().split(\':\');if(u!==\'admin\'||p!==\'secret\')return res.status(401).end();next();});',answer:'解析 Authorization 头校验返回 401+WWW-Authenticate。'},
    ],
  },
  'tWg68AHLIr1gIZA1za3jp': {
    mentalModel: 'JWT=电子签证。护照=用户名密码，签证=JWT。自包含身份信息有防伪水印(签名)，过期自动失效。不需每次都查档案。',
    handsOn: [
      {title:'解码 JWT 三部分',cmd:'JWT=\'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.signature\'\\necho $JWT|cut -d\'.\' -f1|base64 -d\\necho $JWT|cut -d\'.\' -f2|base64 -d',output:'Header:{"alg":"HS256"}\\nPayload:{"sub":"1234567890"}',explain:'JWT=Header.Payload.Signature。任何人都可解码但不能伪造签名。'},
      {title:'jwt.io 调试',cmd:'echo "在线: https://jwt.io"',output:'粘贴 JWT 解码验证签名',explain:'JWT 内容对所有人可见。绝不放密码/信用卡号。'},
    ],
    diagnosis: [
      {symptom:'JWT 存大量用户信息 header 过大>8KB',cause:'把 JWT 当数据库用',fix:'JWT 只存最小必要(user_id+role+exp+iat)。详细从数据库查。控制 1KB 内。'},
    ],
    exercises: [
      {level:'基础',task:'jwt.io 解码 JWT',hint:'识别 Header/Payload/Signature',answer:'修改 Payload 签名失效变红。'},
      {level:'进阶',task:'Node.js JWT 认证+refresh',hint:'jwt.sign(payload,secret,{expiresIn:"15m"});jwt.verify(token,secret);',answer:'refresh token Redis 存储一次性用(Rotation)。'},
    ],
  },
  'QTH7sy9uQZWl6ieBz7erY': {
    mentalModel: 'Token 认证=房卡。登录后拿到 token(房卡)，之后每次请求出示房卡，不用重复输入密码。Token 过期需刷新。',
    handsOn: [
      {title:'Bearer Token 格式',cmd:'echo "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9..."',output:'服务器验证 JWT 签名和过期时间',explain:'Bearer 意为持有此令牌者即为授权用户。必须 HTTPS。'},
      {title:'Token 刷新流程',cmd:'echo "POST /auth/refresh {refreshToken}"',output:'返回新 accessToken+refreshToken',explain:'access Token 短期(15min) refresh Token 长期(7d)。'},
    ],
    diagnosis: [
      {symptom:'Token 泄露后无法主动作废',cause:'JWT 无状态无服务端吊销',fix:'维护 Redis 黑名单(撤销 jti)。短过期+refresh rotation。token version 用户改密 version++。'},
    ],
    exercises: [
      {level:'基础',task:'实现 Token 认证流程',hint:'Login POST /auth/login {email,password} {accessToken,refreshToken}',answer:'accessToken 存内存 refreshToken 存 httpOnly cookie。'},
      {level:'进阶',task:'refresh token rotation',hint:'每次刷新建 refreshToken 旧 token 一次性用',answer:'已用 refreshToken 立即作废防重放。'},
    ],
  },
  'cQnQ9v3mH27MGNwetz3JW': {
    mentalModel: '认证=出示身份证。你是谁?方式多样:密码(Basic)、令牌(JWT/Bearer)、一次性码(OTP)、指纹/面容(Biometric)、证书(mTLS)。',
    handsOn: [
      {title:'多种认证方式对比',cmd:'echo "Basic: Authorization: Basic base64(user:pass)\\nBearer: Authorization: Bearer token\\nAPI Key: X-API-Key: key123\\nmTLS: 客户端证书"',output:'每种方式适用不同场景',explain:'Basic 简单 Bearer 灵活 API Key 机器间 mTLS 零信任。'},
      {title:'多因素认证(MFA)',cmd:'echo \'Step1: POST /auth/login {email,password} requires_mfa:true\\nStep2: POST /auth/mfa/verify {mfa_token,otp_code} access_token\'',output:'两步验证增加安全性',explain:'TOTP 基于时间的一次性密码。'},
    ],
    diagnosis: [
      {symptom:'所有用户用同一种认证方式',cause:'未分层级认证',fix:'普通操作 JWT 敏感操作 MFA 服务间 mTLS。不同场景不同认证强度。'},
    ],
    exercises: [
      {level:'基础',task:'对比三种认证方式实现',hint:'Basic/JWT/API Key 各写一个 Express 中间件',answer:'理解各自优劣和适用场景。'},
      {level:'进阶',task:'设计认证方案选择决策树',hint:'用户登录 JWT 机器间 API Key 高安全 mTLS',answer:'根据场景自动选最合适的认证方式。'},
    ],
  },
  'TLuNtQ6HKYQXmglyVk8-t': {
    mentalModel: 'OAuth 2.0=酒店办入住。前台(Client)查身份证(Authorization)给房卡(Access Token)。房卡只开你房间(scope)，退房失效。不需给前台密码。',
    handsOn: [
      {title:'GitHub Device Flow',cmd:'curl -s -X POST https://github.com/login/device/code -d \'client_id=xxx&scope=repo\'|jq .',output:'{"device_code":"xxx","user_code":"ABCD-1234","verification_uri":"https://github.com/login/device"}',explain:'设备授权流程。用户访问 URL 输入 user_code 完成授权。'},
      {title:'Authorization Code+PKCE',cmd:'echo \'Step1: code_verifier(code_challenge=SHA256(verifier))\\nStep2: /authorize?code_challenge=...\\nStep3: redirect?code=xxx\\nStep4: POST /token {code,code_verifier} access_token\'',output:'PKCE 防止授权码拦截',explain:'即使攻击者拦截 code 无 code_verifier 无法换 token。'},
    ],
    diagnosis: [
      {symptom:'使用 Implicit Flow token 在 URL 被截获',cause:'Implicit flow 将 token 直接放 URL fragment',fix:'用 Authorization Code+PKCE 替代。OAuth 2.1 已移除 Implicit Flow。验证 redirect_uri 完全匹配。'},
    ],
    exercises: [
      {level:'基础',task:'注册 GitHub OAuth App',hint:'Settings Developer settings OAuth Apps',answer:'Client ID+Secret+Callback URL。'},
      {level:'进阶',task:'实现 GitHub OAuth 登录',hint:'授权 URL 接收 callback code 换 token 获取用户',answer:'用 code POST https://github.com/login/oauth/access_token。'},
    ],
  },
  'jWekRGRa1131w92oS1HeW': {
    mentalModel: 'OIDC=OAuth 2.0+身份证。OAuth 只给你房卡(access token)，OIDC 还给身份证(ID Token)写了姓名邮箱。OIDC 是 OAuth 之上的身份认证层。',
    handsOn: [
      {title:'ID Token 结构',cmd:'echo "ID Token=JWT 含 iss,sub,aud,email,name"',output:'iss=签发者 sub=用户ID aud=受众 email=邮箱 name=姓名',explain:'ID Token 证明谁(Authentication)。Access Token 证明授权了什么(Authorization)。'},
      {title:'OIDC Discovery',cmd:'curl -s https://accounts.google.com/.well-known/openid-configuration|jq "{issuer,authorization_endpoint,token_endpoint,jwks_uri}"',output:'{"issuer":"https://accounts.google.com",...}',explain:'只需知道 issuer URL 其他端点自动发现。简化 OIDC 客户端配置。'},
    ],
    diagnosis: [
      {symptom:'用 ID Token 调自己 API 被拒绝',cause:'混淆 ID Token 和 Access Token',fix:'ID Token 客户端验证身份。Access Token 调 API 验证授权。两者不可互换。'},
    ],
    exercises: [
      {level:'基础',task:'对比 OAuth 和 OIDC 区别',hint:'OAuth:授权委托。OIDC:身份认证。',answer:'OAuth 无 ID Token。OIDC 添加 id_token 和 userinfo endpoint。'},
      {level:'进阶',task:'实现 OIDC Client',hint:'注册 App 获取 client_id 和 secret',answer:'authorization code flow+验证 ID Token+获取 userinfo。'},
    ],
  },
  'dZTe_kxIUQsc9N3w920aR': {
    mentalModel: 'ABAC=智能门禁。根据属性(Attribute)动态决定是否可以进入。不是看角色(RBAC)而是评估:你是谁+什么时间+什么资源+什么操作的综合判断。',
    handsOn: [
      {title:'ABAC 策略示例',cmd:'echo "Policy: 允许 部门=工程 且 时间=工作时间 且 IP=公司内网 访问 生产日志"',output:'多维度组合判断',explain:'ABAC=谁(Subject)+做什么(Action)+对什么(Resource)+在什么条件(Environment)下。'},
      {title:'XACML 标准',cmd:'echo "XACML=ABAC 策略语言的 OASIS 标准"',output:'PEP(执行点)+PDP(决策点)+PIP(信息点)',explain:'策略评估流程:PEP 拦截 PDP 评估 PIP 提供属性。'},
    ],
    diagnosis: [
      {symptom:'角色爆炸 RBAC 几千个角色',cause:'权限模型不够灵活',fix:'ABAC 属性组合替代角色。一个策略表达式代替 N 个角色。适用于复杂场景。'},
    ],
    exercises: [
      {level:'基础',task:'设计 ABAC 策略',hint:'who+what+where+when',answer:'用户部门+资源分类+网络位置+时间范围。'},
      {level:'进阶',task:'ABAC vs RBAC 选型',hint:'RBAC:简单组织 ABAC:复杂多维度',answer:'大多数场景 RBAC 足够。银行/医疗等合规场景用 ABAC。'},
    ],
  },
  '_BXgYUlaYfpYrryXTw5n2': {
    mentalModel: 'DAC=文件所有者决定谁能访问。如 Google Doc 分享——文档创建者选择谁可以查看/评论/编辑。权限跟随资源，由资源所有者控制。',
    handsOn: [
      {title:'DAC 模型示例',cmd:'echo "User Alice 创建 file.txt owner=Alice\\nAlice 授权 Bob:read\\nAlice 授权 Charlie:read,write"',output:'权限由资源所有者自行分配',explain:'每个资源有 ACL(Access Control List)记录谁有什么权限。'},
      {title:'Linux 文件权限',cmd:'ls -l',output:'-rw-r--r-- owner group others',explain:'owner/group/others rwx 权限。这是 DAC 的经典实现。'},
    ],
    diagnosis: [
      {symptom:'DAC 权限传递不可控',cause:'Bob 被授权 read 后复制内容给 Eve',fix:'DAC 无法控制信息流动。重要数据用 MAC(强制访问控制)或结合 RBAC。'},
    ],
    exercises: [
      {level:'基础',task:'设计文件共享权限模型',hint:'ACL: {resource_id,user_id,permissions}',answer:'owner read write delete 四种基础权限。'},
      {level:'进阶',task:'DAC+RBAC 混合',hint:'资源 owner 设 RBAC 角色权限',answer:'owner 可设角色 admins 有 full_access managers 有 read_write。'},
    ],
  },
  'nJWtUyn9bljh3T-q_adJK': {
    mentalModel: 'PBAC=基于策略的访问控制。比 ABAC 更注重策略的可管理性和审计。策略集中定义，统一评估执行。',
    handsOn: [
      {title:'PBAC 策略定义',cmd:'echo "Policy: Documents in folder /finance require role=auditor AND clearance_level>=3"',output:'策略=条件+动作+资源',explain:'PBAC 强调策略的可视化管理和合规审计。'},
      {title:'策略引擎',cmd:'echo "OPA(Open Policy Agent) = 通用策略引擎"',output:'Rego 语言定义策略',explain:'OPA 解耦策略决策和业务逻辑。服务问 OPA 是否允许。'},
    ],
    diagnosis: [
      {symptom:'策略分散在各服务代码中修改困难',cause:'硬编码权限逻辑',fix:'OPA/OPAL 集中管理策略。热更新策略无需重启服务。'},
    ],
    exercises: [
      {level:'基础',task:'用 OPA 写访问控制策略',hint:'rego 语言: allow { input.user.role=="admin" }',answer:'OPA 作为 sidecar HTTP API 调用。'},
      {level:'进阶',task:'PBAC 策略生命周期',hint:'策略编写 测试 审批 发布 监控',answer:'策略变更走 CI/CD 管道。审计日志记录所有策略决策。'},
    ],
  },
  'eQWoy4CpYP3TJL2bbhPB_': {
    mentalModel: 'Session 认证=存包处。你来存包(登录)，给个号牌(sessionId)，取包(后续请求)出示号牌。服务器存着号牌和包的对应关系。',
    handsOn: [
      {title:'Session 流程',cmd:'curl -v -c /tmp/sess.txt -b /tmp/sess.txt https://httpbin.org/cookies/set/session/abc123 2>&1|grep -i cookie',output:'< Set-Cookie: session=abc123',explain:'服务器存 sessionId 用户数据。客户端只存 cookie。'},
      {title:'Session vs JWT',cmd:'echo "Session: 服务端存状态 灵活撤销 需存储。JWT: 无状态 自包含 不能主动吊销。"',output:'Session 适合传统 Web。JWT 适合 SPA/API。',explain:'选型:需要主动吊销 Session。扩展性优先 JWT。'},
    ],
    diagnosis: [
      {symptom:'多服务器 Session 不共享',cause:'Session 存在单机内存',fix:'Redis 共享 Session 存储。或改用 JWT 去状态化。'},
    ],
    exercises: [
      {level:'基础',task:'Express+express-session+Redis',hint:'npm i express-session connect-redis',answer:'session({store:new RedisStore({client}),secret:"xxx",cookie:{httpOnly:true,secure:true,sameSite:"lax",maxAge:36e5}})'},
      {level:'进阶',task:'Session 固定攻击防护',hint:'登录成功后 regenerate sessionId',answer:'每次登录重新生成 sessionId。旧 sessionId 失效。'},
    ],
  },
  'nHbn8_sMY7J8o6ckbD-ER': {
    mentalModel: '授权方法=准入资格检查。不是你是谁(认证)，而是你能做什么(授权)。RBAC(看角色)、ABAC(看属性)、DAC(看所有者)、PBAC(看策略)。',
    handsOn: [
      {title:'五种授权模型对比',cmd:'echo "RBAC:按角色\\nABAC:按属性\\nDAC:按所有者\\nPBAC:按策略\\nMAC:强制标签"',output:'RBAC 最常用 ABAC 最灵活',explain:'选择取决于组织复杂度和安全需求。'},
      {title:'RBAC 实现',cmd:'echo \'User assigned Role\\nRole assigned Permission\\nCheck: user.roles.permissions.contains(required)\'',output:'用户=角色=权限三层',explain:'中间角色层隔离用户和权限。角色变更不影响用户。'},
    ],
    diagnosis: [
      {symptom:'简单系统用 RBAC 复杂后用 ABAC 改造成本高',cause:'开始时未评估未来复杂度',fix:'简单用 RBAC。预期复杂场景预留 ABAC 扩展点。权限检查抽象为 can(user,action,resource)。'},
    ],
    exercises: [
      {level:'基础',task:'设计权限模型',hint:'User(用户) Role(角色) Permission(权限)',answer:'admin editor viewer 三种角色。'},
      {level:'进阶',task:'can() 中间件',hint:'app.use((req,res,next)=>{if(!can(req.user,req.action,req.resource))return res.status(403).end();next();});',answer:'统一权限检查入口。后续切换 RBAC ABAC 不影响业务代码。'},
    ],
  },
  'wFsbmMi5Ey9UyDADdbdPW': {
    mentalModel: 'RBAC=职位决定权限——总监能批预算，经理能审报销，员工只能提交。权限不直接给个人而是给角色，个人通过角色获得权限。',
    handsOn: [
      {title:'RBAC 数据模型',cmd:'echo "users(id,name)\\nroles(id,name)\\npermissions(id,resource,action)\\nuser_roles(user_id,role_id)\\nrole_permissions(role_id,permission_id)"',output:'五表设计',explain:'用户 角色 权限 多对多关系。'},
      {title:'角色层级',cmd:'echo "admin>manager>editor>viewer"',output:'上级角色继承下级权限',explain:'角色继承减少重复配置。'},
    ],
    diagnosis: [
      {symptom:'User 表加 role 字段 role 变 admin=all 扩展成多角色需改代码',cause:'扁平角色设计不可扩展',fix:'多对多 user_roles 表。角色=权限集合。新增角色不改代码。'},
    ],
    exercises: [
      {level:'基础',task:'设计 RBAC 权限模型',hint:'admin(全部)/manager(管理)/editor(编辑)/viewer(查看)',answer:'资源粒度:user,post,comment。操作:create,read,update,delete。'},
      {level:'进阶',task:'Express RBAC 中间件',hint:'npm i accesscontrol',answer:'ac.can(req.user.role).readAny("post") 检查权限。'},
    ],
  },
  'tl1wXmOaj_zHL2o38VygO': {
    mentalModel: 'MAC=军事保密级别。文件标"绝密/机密/秘密"，人员有对应安全许可。不是谁创建谁决定(DAC)，而是系统强制规则。',
    handsOn: [
      {title:'MAC 标签模型',cmd:'echo "Subject(用户)有 Clearance Level\\nObject(资源)有 Classification Label\\n规则:用户许可级别 资源标签级别可读"',output:'Bell-LaPadula 模型:不上读不下写',explain:'高密级用户不可写低密级文件(防泄密)。'},
      {title:'SELinux',cmd:'ls -Z',output:'user:role:type:level',explain:'Linux 内核 MAC 实现。每个进程/文件有安全标签。'},
    ],
    diagnosis: [
      {symptom:'API 中很少直接用 MAC',cause:'MAC 太严格不灵活',fix:'微服务间建议 MAC 简化为 mTLS+RBAC。军事/政府系统用 SELinux/AppArmor。'},
    ],
    exercises: [
      {level:'基础',task:'了解 MAC 与 DAC/RBAC 区别',hint:'MAC:系统强制 DAC:所有者决定 RBAC:角色决定',answer:'三种模型适用不同安全需求。'},
      {level:'进阶',task:'SELinux 策略示例',hint:'semanage fcontext 设文件标签',answer:'restorecon 应用策略。'},
    ],
  },
  'CCcY8UsGdd2pdBYHt9L4o': {
    mentalModel: 'ReBAC=关系决定权限。你不是看角色(RBAC)而是看关系——你和资源之间是什么关系。Google Doc 分享是关系: owner/editor/viewer/commenter。',
    handsOn: [
      {title:'ReBAC 核心概念',cmd:'echo "关系:(Alice,owner,Document1)\\n(Alice,editor,Document2)\\n(Bob,viewer,Document1)"',output:'权限从关系派生',explain:'owner 可删除 editor 可编辑 viewer 可读。'},
      {title:'Google Zanzibar',cmd:'echo "Google 的统一权限系统"',output:'ReBAC 的开源参考实现',explain:'支持全局授权检查。SpiceDB 是开源实现。'},
    ],
    diagnosis: [
      {symptom:'社交网络权限复杂 RBAC 不够',cause:'用户对帖子/相册/群组权限各不相同',fix:'ReBAC 用关系建模 (用户,关系,资源)。"朋友"可见 "好友的好友"可见 等。'},
    ],
    exercises: [
      {level:'基础',task:'设计 ReBAC 关系',hint:'user resource relation',answer:'(user1,owner,doc1)(user2,editor,doc1)(user3,viewer,doc1)。'},
      {level:'进阶',task:'SpiceDB 部署',hint:'docker run spicedb',answer:'定义 schema+写入关系+检查权限。'},
    ],
  },
  '0fSfFtskcJ0HNUZPf998l': {
    mentalModel: '密钥管理=定期换锁芯。密钥用久了可能泄露，定期轮换降低风险。生成强随机密钥，安全存储(HSM/Vault)，有序轮换不中断服务。',
    handsOn: [
      {title:'生成随机密钥',cmd:'openssl rand -base64 32',output:'输出 44 字符随机字符串',explain:'/dev/urandom 或 crypto 库生成。足够长度(256bit)。'},
      {title:'密钥轮换流程',cmd:'echo "Step1: 生成新密钥对\\nStep2: 旧密钥继续验证未过期 token\\nStep3: 新密钥签发新 token\\nStep4: 旧密钥最长 token 有效期后废弃"',output:'新旧密钥共存窗口期',explain:'轮换周期=最长 token 有效期。双密钥机制确保平滑。'},
    ],
    diagnosis: [
      {symptom:'密钥硬编码代码中泄露 GitHub',cause:'secret/API key 写在代码里',fix:'环境变量+Secret Manager(HAV)。git-secrets 扫描历史。泄露立即撤销重生成。'},
    ],
    exercises: [
      {level:'基础',task:'生成 RSA 密钥对',hint:'openssl genrsa -out private.pem 2048 && openssl rsa -in private.pem -pubout -out public.pem',answer:'JWT RS256 签名验签。'},
      {level:'进阶',task:'实现 JWT JWKS 轮换',hint:'GET /.well-known/jwks.json 返回公钥列表',answer:'Auth Service 私钥签发。各微服务获取 JWKS 验证。kid 标识密钥。'},
    ],
  },
  '5RY7AlfRQydjxWK65Z4cv': {
    mentalModel: 'Swagger/OpenAPI=API 的说明书。一份 YAML/JSON 描述所有端点、参数、响应。机器可读，人和工具都能理解。实现 Design First 的核心工具。',
    handsOn: [
      {title:'Swagger UI',cmd:'echo "浏览器打开 swagger-ui 加载 openapi.yaml"',output:'交互式 API 文档，可直接测试',explain:'最流行的 API 文档工具。'},
      {title:'OpenAPI 生成代码',cmd:'npx @openapitools/openapi-generator-cli generate -i openapi.yaml -g nodejs-express-server -o ./generated',output:'生成服务端骨架代码',explain:'Design First:先写规范评审后生成代码。'},
    ],
    diagnosis: [
      {symptom:'代码和文档不一致 文档过时',cause:'Code First 方式没有同步机制',fix:'OpenAPI 文档是单一真相来源。CI 中验证实现与规范一致。从代码注释自动生成规范。'},
    ],
    exercises: [
      {level:'基础',task:'写一份 OpenAPI YAML',hint:'openapi:3.0.0 info paths components/schemas',answer:'定义 /users CRUD 完整规范。'},
      {level:'进阶',task:'Prism Mock 服务器',hint:'npx @stoplight/prism-cli mock openapi.yaml',answer:'前端基于 Mock API 并行开发。'},
    ],
  },
  'tzUJwXu_scwQHnPPT0oY-': {
    mentalModel: 'API Key=门禁卡。刷卡进门，物业知是哪户。不关心你是谁(认证)，只关心"你有卡"(有访问权限)。用于计费、限流、统计。',
    handsOn: [
      {title:'API Key 格式',cmd:'echo "pk_live_a1b2c3d4 (public, 前端安全)\\nsk_live_x7y8z9 (secret, 服务端)"',output:'前缀标识环境(公开/私密/只读)',explain:'生成:crypto.randomBytes(32).toString("hex")。'},
      {title:'API Key 验证',cmd:'echo "SHA-256(request_key) vs stored_hash"',output:'只存 hash 不存明文',explain:'原始 key 仅创建时返回一次。后续只比对 hash。'},
    ],
    diagnosis: [
      {symptom:'API Key 泄露 GitHub',cause:'代码中硬编码 API Key',fix:'环境变量+.gitignore。git-secrets/gitleaks 扫描。已泄露立即撤销重生成。'},
    ],
    exercises: [
      {level:'基础',task:'注册 OpenWeatherMap API',hint:'注册获取 API Key',answer:'curl "https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=KEY"。'},
      {level:'进阶',task:'设计 API Key 管理系统',hint:'CRUD /api-keys scope/status/expires_at',answer:'异常检测:用量突增自动冻结+邮件通知。'},
    ],
  },
  'qjawwRcMl2-IDwk8ExpPL': {
    mentalModel: 'Scope=房卡权限——房卡能开自己房间(scope:room_read)，不能开会议室(scope:meeting_write)。OAuth scope 定义 access token 能做什么。',
    handsOn: [
      {title:'GitHub Scope',cmd:'echo "repo(user/repo 读写) read:user(只读用户) admin:org(管理组织)"',output:'空格分隔的多 scope',explain:'授权页面清晰展示应用请求的权限。'},
      {title:'Scope 设计',cmd:'echo "read:users write:users read:orders write:orders admin"',output:'资源:操作 命名模式',explain:'scope 粒度:粗 enough 细控制。不要设计成 * 全权限。'},
    ],
    diagnosis: [
      {symptom:'Access token scope 过大(* 全权限)',cause:'图省事 scope=*',fix:'最小权限原则。每客户端注册时分配最小必要 scope。敏感操作 step-up 认证。'},
    ],
    exercises: [
      {level:'基础',task:'设计 API Scope 体系',hint:'资源(resource):操作(action)',answer:'user:read user:write order:read order:create admin。'},
      {level:'进阶',task:'Express Scope 中间件',hint:'app.use((req,res,next)=>{const scopes=req.auth.scopes;if(!scopes.includes("admin")&&!scopes.includes(req.requiredScope))return res.status(403).end();next();});',answer:'中间件检查 token 中的 scope 数组。'},
    ],
  },
  'LxWHkhlikUaMT2G8YmVDQ': {
    mentalModel: 'Readme.com=API 文档托管平台。上传 OpenAPI 规范自动生成美观文档，含代码示例、交互式测试、版本管理。类似于 GitHub Pages for API docs。',
    handsOn: [
      {title:'Readme.com 功能',cmd:'echo "1.上传 OpenAPI 2.自动文档 3.代码示例 4.Try It 按钮 5.API Key 管理"',output:'一站式 API 文档解决方案',explain:'比 Swagger UI 更专业，含开发者门户。'},
      {title:'对比工具',cmd:'echo "Readme.com vs Swagger UI vs Stoplight vs Redoc"',output:'Readme.com 最全面但收费',explain:'选型:团队规模+预算+文档需求。'},
    ],
    diagnosis: [
      {symptom:'文档只有单个页面无交互测试',cause:'静态 MD 文档过期快',fix:'Readme.com/Stoplight 提供 Try It 功能。用户可直接在文档中调 API。'},
    ],
    exercises: [
      {level:'基础',task:'对比 API 文档工具',hint:'Readme.com/Stoplight/Swagger UI/Redoc',answer:'每工具优劣和适用场景。'},
      {level:'进阶',task:'上传 OpenAPI 到 Readme.com',hint:'注册 创建项目 上传 openapi.yaml',answer:'自动生成文档+Try It 功能。'},
    ],
  },
  'OpS2NX1lPTOtfjV1wKtC4': {
    mentalModel: 'Stoplight=API 设计+文档+Mock+测试的一站式平台。可视化设计 API(不用手写 YAML)，自动生成文档，Prism mock 服务集成。',
    handsOn: [
      {title:'Stoplight Studio',cmd:'echo "可视化编辑器设计 API 自动生成 OpenAPI"',output:'GUI 操作生成规范文件',explain:'非技术用户也能参与 API 设计。'},
      {title:'Spectral Lint',cmd:'npx @stoplight/spectral-cli lint openapi.yaml',output:'检查命名/格式/安全规则',explain:'API 规范检查器(类 ESLint for API)。自定义规则。'},
    ],
    diagnosis: [
      {symptom:'团队手写 YAML 常格式错误',cause:'手工编写 OpenAPI 易出错',fix:'Stoplight Studio 可视化编辑+实时验证+Spectral lint。减少格式错误。'},
    ],
    exercises: [
      {level:'基础',task:'安装 Spectral',hint:'npm i -g @stoplight/spectral-cli',answer:'spectral lint openapi.yaml。'},
      {level:'进阶',task:'自定义 Spectral 规则',hint:'.spectral.yaml rules 定义',answer:'given JSONPath 匹配 then 断言。'},
    ],
  },
  '5R9yKfN1vItuv__HgCwP7': {
    mentalModel: 'API 文档工具=不同档次的菜单——手写菜单(手工 Markdown)、精美画册(Swagger/Redoc)、iPad 点菜(Readme/Stoplight)。',
    handsOn: [
      {title:'Redoc',cmd:'npx @redocly/cli build-docs openapi.yaml -o index.html',output:'美观的三栏式文档',explain:'开源免费。适合公开 API 文档。'},
      {title:'Postman 文档',cmd:'echo "Postman Collection 导出 发布文档"',output:'Postman 自带文档功能',explain:'适合已用 Postman 的团队。'},
    ],
    diagnosis: [
      {symptom:'文档与实际不符客户端调用失败',cause:'Code First 文档滞后',fix:'OpenAPI 规范作为单一真相来源。CI 检查实现一致性。自动生成文档。'},
    ],
    exercises: [
      {level:'基础',task:'对比文档工具',hint:'Swagger/Redoc/Readme/Stoplight/Postman',answer:'每工具定位和适用场景。'},
      {level:'进阶',task:'为 API 生成文档',hint:'用 OpenAPI YAML 生成 Redoc 文档',answer:'自动生成+定时更新。'},
    ],
  },
  'KQAus72RGqx5f-3-YeJby': {
    mentalModel: 'Postman=API 开发的瑞士军刀。发请求、保存集合、写测试、生成文档、Mock 服务、环境变量、团队协作。API 调试的首选工具。',
    handsOn: [
      {title:'Postman Collection',cmd:'echo "新建 Collection 添加请求 GET/POST/PUT/DELETE"',output:'组织 API 请求的最佳方式',explain:'导出为 JSON 可版本控制共享团队。'},
      {title:'Postman 测试脚本',cmd:'pm.test("Status is 200",()=>{pm.response.to.have.status(200);});\\npm.test("Response time < 200ms",()=>{pm.expect(pm.response.responseTime).to.be.below(200);});',output:'请求后自动运行测试',explain:'Newman CLI 在 CI 中运行 Postman 集合。'},
    ],
    diagnosis: [
      {symptom:'API 请求散落无组织新人不重复用',cause:'没使用 Collection',fix:'按资源组织 Collection。导出 JSON 存 Git。团队成员 import 即用。Newman CI 自动测试。'},
    ],
    exercises: [
      {level:'基础',task:'创建 Collection 5 个请求',hint:'组织到 Folders 添加描述',answer:'导出共享团队。'},
      {level:'进阶',task:'Newman 命令行运行',hint:'npm i -g newman; newman run collection.json',answer:'CI 集成: newman run collection.json --reporters cli,junit。'},
    ],
  },
  'q1yaf-RbHIQsOqfzjn4k4': {
    mentalModel: 'API 最佳实践=建房子的经验总结——地基要稳(HTTPS+认证)、布局合理(RESTful URL)、管线规范(错误+日志)、安全到位(限流+CORS)。',
    handsOn: [
      {title:'12 条最佳实践',cmd:'echo "1.HTTPS 2.版本控制 3.名词复数 4.HTTP 方法语义 5.正确状态码 6.统一错误格式 7.分页 8.限流 9.认证 10.CORS 11.文档 12.测试"',output:'每条都是坑中总结的经验',explain:'不是教条而是避免重复踩坑。'},
      {title:'安全清单',cmd:'echo "HTTPS HSTS CORS CSP RateLimit InputValidation SQLInjection XSS"',output:'OWASP API Security Top 10',explain:'每个 API 上线前自查。'},
    ],
    diagnosis: [
      {symptom:'API 上线后发现各种遗漏',cause:'没有最佳实践清单',fix:'上线前 checklist:HTTPS 认证 限流 文档 监控 测试 错误处理。逐项确认。'},
    ],
    exercises: [
      {level:'基础',task:'为团队制 API 最佳实践清单',hint:'安全/设计/错误/文档/测试 五维度',answer:'每个维度 3-5 条核心规则。'},
      {level:'进阶',task:'Spectral 规则实施清单',hint:'.spectral.yaml 自动检查',answer:'规则强制执行而非靠记忆。'},
    ],
  },
  'qIJ6dUppjAjOTA8eQbp0n': {
    mentalModel: 'API 安全=门口的保安+监控+报警。认证(谁)、授权(能干嘛)、加密(TLS)、验证(防注入)、限流(防滥用)、审计(谁做了什么)。',
    handsOn: [
      {title:'OWASP API Top 10',cmd:'echo "1.Broken Object Level Auth 2.Broken Auth 3.Excessive Data Exposure 4.Lack of Resources 5.Broken Function Level Auth 6.Mass Assignment 7.Security Misconfiguration 8.Injection 9.Improper Assets 10.Insufficient Logging"',output:'最常见 API 安全漏洞排名',explain:'每个 API 开发者必读。'},
      {title:'安全头部',cmd:'curl -sI https://api.github.com|grep -iE "strict-transport|x-content|x-frame|csp"',output:'Strict-Transport-Security X-Content-Type-Options X-Frame-Options',explain:'安全头部是第一道防线。'},
    ],
    diagnosis: [
      {symptom:'BOLA-用户 ID=1 可改 ID=2 看他人数据',cause:'没验证资源归属',fix:'每个请求验证资源归属:resource.owner==req.user.id。不是有 token 就行。'},
    ],
    exercises: [
      {level:'基础',task:'OWASP API Top 10 自查',hint:'逐条检查你的 API',answer:'每发现一个漏洞=学习一课。'},
      {level:'进阶',task:'实现安全头部中间件',hint:'helmet 中间件',answer:'npm i helmet; app.use(helmet()); 一行启用。'},
    ],
  },
  'G70wvcOM1Isrx5ZBvS2xP': {
    mentalModel: '常见漏洞=小偷常用手法。SQL 注入(拼接 SQL)、XSS(注入脚本)、CSRF(伪造请求)、Mass Assignment(批量赋值)、Broken Auth(认证绕过)。',
    handsOn: [
      {title:'SQL 注入演示',cmd:'echo "危险: SELECT * FROM users WHERE id=\\"+req.params.id\\n安全: SELECT * FROM users WHERE id=?"',output:'参数化查询防注入',explain:'永远不要拼接 SQL。ORM 参数化查询。'},
      {title:'Mass Assignment',cmd:'echo "Danger: User.update(req.body) saves all fields\\nSafe: only allow name,email from body"',output:'只更新白名单字段',explain:'攻击者可能注入 role:admin。'},
    ],
    diagnosis: [
      {symptom:'API 被 SQL 注入拖库',cause:'拼接 SQL 无参数化',fix:'参数化查询+ORM+输入校验+最小权限数据库账号。WAF 做第二道防线。'},
    ],
    exercises: [
      {level:'基础',task:'找出 API 安全隐患',hint:'渗透测试思路检查',answer:'SQL 注入 XSS CSRF Mass Assignment 逐个验证。'},
      {level:'进阶',task:'Express 防护中间件',hint:'helmet+cors+rate-limit+express-validator',answer:'多层防护:头部 跨域 限流 输入校验。'},
    ],
  },
  'nQpczZUcn-TvrfT80dv0Q': {
    mentalModel: '性能指标=体检报告——响应时间(P50/P95/P99)、吞吐量(RPS)、错误率、延迟分布。指标告诉你 API 健康状况，不用猜测。',
    handsOn: [
      {title:'关键指标',cmd:'echo "P50(中位数) P95(95%用户) P99(长尾)\\nRPS(Requests Per Second)\\nError Rate(%)\\nLatency(ms)"',output:'P95 比平均值更有意义',explain:'平均值掩盖长尾问题。P99 优化提升最多用户体验。'},
      {title:'curl 测响应时间',cmd:'curl -w \'Total:%{time_total}s\\n\' -s -o /dev/null https://api.github.com',output:'Total:0.300s',explain:'简单测量。压测用 wrk/ab/k6。'},
    ],
    diagnosis: [
      {symptom:'只看平均响应时间 忽略 P95/P99',cause:'平均值掩盖了少部分用户的极慢体验',fix:'Prometheus histogram 统计分位数。P95<200ms P99<500ms 常见 SLI。'},
    ],
    exercises: [
      {level:'基础',task:'wrk 压测测延迟分布',hint:'wrk -t4 -c100 -d30s --latency https://example.com/api',answer:'关注 Latency Distribution。'},
      {level:'进阶',task:'Prometheus+Histogram',hint:'histogram_quantile(0.95,rate(http_request_duration_seconds_bucket[5m]))',answer:'Grafana 可视化分位数。'},
    ],
  },
  'PrvRCR4HCdGar0vcUbG_a': {
    mentalModel: '缓存策略=不同食物不同储存方式——新鲜度要求不同。生鱼片(no-store)、快餐(max-age=5min)、罐头(max-age=24h)、调味料(immutable)。',
    handsOn: [
      {title:'缓存策略选择',cmd:'echo "实时数据:no-store\\n用户数据:private,max-age=60\\n公共列表:public,max-age=300,s-maxage=3600\\n静态资源:public,max-age=86400,immutable"',output:'根据数据实时性选择策略',explain:'分级缓存:数据越静态 缓存越激进。'},
      {title:'缓存失效',cmd:'echo "Cache-Aside:读(查缓存 miss 查DB 写缓存) 写(更新DB 删除缓存)\\nWrite-Through:写(同时更新缓存和DB)\\nWrite-Behind:写(只更新缓存 异步写DB)"',output:'三种经典模式',explain:'Cache-Aside 最常用。Write-Through 数据一致性更好。'},
    ],
    diagnosis: [
      {symptom:'缓存和数据库不一致',cause:'先更数据库和删缓存不是原子',fix:'Cache-Aside+延迟双删。或 CDC(Debezium)监听 binlog 更新缓存。'},
    ],
    exercises: [
      {level:'基础',task:'对比三种缓存模式',hint:'Cache-Aside/Write-Through/Write-Behind',answer:'Cache-Aside 最常用 理解每种场景。'},
      {level:'进阶',task:'Redis 缓存实现',hint:'GET cache_key miss SET cache_key JSON EX 300',answer:'缓存穿透:布隆过滤器。击穿:互斥锁。雪崩:随机 TTL。'},
    ],
  },
  'p5wsniYnOS7cbHd92RxGk': {
    mentalModel: '负载均衡=超市多开收银台——均匀分配顾客到各收银台，一个收银台坏了顾客自动分流到其他。Nginx/HAProxy 是收银员分配器。',
    handsOn: [
      {title:'Nginx 负载均衡配置',cmd:'echo "upstream backend { server 10.0.0.1:3000; server 10.0.0.2:3000; }\\nserver { location / { proxy_pass http://backend; } }"',output:'轮询(默认) 最小连接 ip_hash',explain:'nginx 配置 upstream 后端列表。'},
      {title:'健康检查',cmd:'echo "server 10.0.0.1:3000 max_fails=3 fail_timeout=30s;"',output:'3 次失败标记宕 30s',explain:'自动摘除故障节点。'},
    ],
    diagnosis: [
      {symptom:'一台服务器宕机部分用户报错',cause:'无负载均衡或没健康检查',fix:'Nginx/HAProxy 做反向代理+健康检查。AWS ALB/GCP LB 云原生。'},
    ],
    exercises: [
      {level:'基础',task:'Nginx 搭建负载均衡',hint:'安装 nginx 配置 upstream',answer:'至少 2 个后端测试故障转移。'},
      {level:'进阶',task:'测试故障转移',hint:'关一台后端 curl 继续返回正常',answer:'另一台接管。健康检查自动摘除故障节点。'},
    ],
  },
  'd9ZXdU73jiCdeNHQv1_DH': {
    mentalModel: 'API 性能优化=减肥计划——减少传输量(gzip/精简字段)、减少请求数(缓存/合并)、减少等待(异步/预计算)、减少距离(CDN)。',
    handsOn: [
      {title:'性能优化层次',cmd:'echo "1.减少传输:gzip/brotli 精简字段 SQL 优化\\n2.减少请求:缓存 合并 GraphQL\\n3.减少等待:异步 队列 CDN 分页\\n4.减少距离:边缘计算"',output:'逐层优化',explain:'从最容易的开始:开启 gzip 效果立竿见影。'},
      {title:'性能测试',cmd:'ab -n 1000 -c 10 https://example.com/api',output:'Requests per second:xxx Time per request:xxx',explain:'ab(Apache Bench)快速压测。wrk/k6 更强大。'},
    ],
    diagnosis: [
      {symptom:'API 响应 2s 排查发现数据库查询 1.8s',cause:'未优化 SQL 或未用缓存',fix:'EXPLAIN 分析慢查询。加索引。Redis 缓存热点数据。N+1 改为 JOIN。'},
    ],
    exercises: [
      {level:'基础',task:'ab 压测 API',hint:'ab -n 1000 -c 10 url',answer:'看 RPS Transfer rate 优化前后对比。'},
      {level:'进阶',task:'优化慢 API 实例',hint:'开启 gzip 加索引 加缓存 分页 异步',answer:'500ms 优化到 50ms。60%来自缓存 30%索引 10%gzip。'},
    ],
  },
  'tPVtRV818D8zAAuNbqPNa': {
    mentalModel: '限流/节流=水龙头——限流是限制总出水量(100次/小时)，节流是限制出水速度(10次/秒)。两者都用防止 API 被冲垮。',
    handsOn: [
      {title:'限流算法对比',cmd:'echo "固定窗口:每小时100次(简单有边界突发)\\n滑动窗口:过去1小时100次(精确)\\n令牌桶:恒定速率+突发余量(最灵活)\\n漏桶:恒定速率(最平滑)"',output:'选型:令牌桶最推荐',explain:'令牌桶兼顾平均速率限制和短时突发容忍。'},
      {title:'Retry-After 头',cmd:'curl -sI https://httpbin.org/status/429|grep -i retry-after',output:'Retry-After: 3600',explain:'429 时告诉客户端多久后重试。客户端应自动延迟重试。'},
    ],
    diagnosis: [
      {symptom:'固定窗口边界两倍流量',cause:'第59秒100次+第61秒100次=2秒200次',fix:'滑动窗口或令牌桶。令牌桶以恒定速率产令牌支持短时突发。'},
    ],
    exercises: [
      {level:'基础',task:'Redis 实现滑动窗口',hint:'ZADD key score member ZREMRANGEBYSCORE 删窗口前 ZCARD 统计',answer:'score=时间戳 expire=窗口外数据自动删。'},
      {level:'进阶',task:'实现 Retry-After',hint:'429 响应+Retry-After 头',answer:'客户端读取 Retry-After 延迟重试。'},
    ],
  },
  '--mmTKhG58_elbUqyn90G': {
    mentalModel: '同步 vs 异步=快餐 vs 外卖——同步(立刻做给你，排队等)、异步(下单后等通知，不占你的时间)。异步适合耗时操作(转码/导出/AI推理)。',
    handsOn: [
      {title:'同步 API',cmd:'curl -s https://httpbin.org/delay/2',output:'等 2 秒返回',explain:'客户端一直等。适合快速操作(<200ms)。'},
      {title:'异步 API',cmd:'echo "POST /exports {format:pdf} 202 Accepted Location:/exports/123/status\\nGET /exports/123/status {status:processing}\\nGET /exports/123/status {status:done,result_url:...}"',output:'202 Accepted+轮询+Webhook 通知',explain:'耗时操作异步处理。避免 HTTP 超时。'},
    ],
    diagnosis: [
      {symptom:'同步 API 超时+客户端超时 结果丢失',cause:'耗时操作同步处理',fix:'>1s 操作用异步：202 返任务ID 客户端轮询或 Webhook 通知。'},
    ],
    exercises: [
      {level:'基础',task:'httpbin delay 测试',hint:'curl -s https://httpbin.org/delay/3',answer:'体验同步等待。'},
      {level:'进阶',task:'实现异步任务 API',hint:'POST /tasks 202 Location:/tasks/{id}\\nGET /tasks/{id} {status,result}',answer:'客户端间隔轮询或服务端完成后 Webhook。'},
    ],
  },
  '-qdwBg7HvwlbLy3IKCRij': {
    mentalModel: '剖析+监控=API体检+心电监护。剖析(Profiling)找瓶颈(哪里慢)，监控(Monitoring)看趋势(变慢了吗)。Prometheus+Grafana+Jaeger 三件套。',
    handsOn: [
      {title:'Prometheus Metrics',cmd:'echo "http_requests_total\\nhttp_request_duration_seconds\\nhttp_errors_total"',output:'Counter+Gauge+Histogram',explain:'Counter 累计 Gauge 瞬时 Histogram 分布。'},
      {title:'Distributed Tracing',cmd:'echo "Jaeger/Zipkin 追踪跨服务请求"',output:'traceId 贯穿所有微服务',explain:'慢在哪个环节一目了然。'},
    ],
    diagnosis: [
      {symptom:'API 慢了但不知道瓶颈在哪',cause:'无监控和追踪',fix:'Prometheus 指标+Jaeger 追踪。RED 方法:Rate Errors Duration。'},
    ],
    exercises: [
      {level:'基础',task:'Express Prometheus 集成',hint:'npm i prom-client express-prom-bundle',answer:'/metrics 端点暴露指标。'},
      {level:'进阶',task:'Jaeger 追踪集成',hint:'npm i @opentelemetry/api @opentelemetry/node',answer:'traceId 自动注入日志和请求头。'},
    ],
  },
  'DQcAV59vr1-ZRnMfbLXpu': {
    mentalModel: '性能测试=考试——单元测试考知识点(功能对错)，性能测试考速度(多快多稳)。用 k6/wrk 模拟真实用户流量测试系统能力。',
    handsOn: [
      {title:'k6 测试脚本',cmd:'echo \'import http from k6/http;export default function(){http.get("https://api.example.com/users");}\'',output:'JavaScript 编写测试场景',explain:'k6 最流行的开源负载测试工具。'},
      {title:'负载测试类型',cmd:'echo "Smoke:1用户确认基本可用\\nLoad:预期用户量验证\\nStress:超预期找极限\\nSoak:长时间稳定性\\nSpike:突然高峰"',output:'四种测试覆盖不同场景',explain:'CI 中最小 Smoke 每次都跑。发版前 Load 测试。'},
    ],
    diagnosis: [
      {symptom:'上线被流量冲垮',cause:'只做了功能测试没做性能测试',fix:'至少跑 Smoke+Load 测试。验证 SLA。关键 API 每发版跑。'},
    ],
    exercises: [
      {level:'基础',task:'k6 测试 API',hint:'npm i -g k6; k6 run test.js',answer:'10 并发 30s 的简单测试。'},
      {level:'进阶',task:'设计性能测试计划',hint:'Smoke Load Stress Soak 四阶段',answer:'CI 跑 Smoke。发版前跑 Load。季度跑 Stress。'},
    ],
  },
  'oMfOBkVsgiLvFLicOUdx6': {
    mentalModel: '事件驱动架构=多米诺骨牌——推倒第一块(发事件)，后续自动连锁反应。服务间不直接调用，通过事件总线(Broker)解耦。',
    handsOn: [
      {title:'事件发布订阅',cmd:'echo "Producer 发事件到 Topic\\nConsumer 订阅 Topic 消费事件"',output:'Kafka/RabbitMQ/Redis PubSub',explain:'解耦生产者和消费者。'},
      {title:'事件模式',cmd:'echo "Event Notification:简单通知\\nEvent-Carried State Transfer:事件带完整数据\\nEvent Sourcing:事件作为数据源"',output:'三种模式复杂度递增',explain:'Event Sourcing 最强但实现复杂。'},
    ],
    diagnosis: [
      {symptom:'微服务间同步调用链太长 P99 爆炸',cause:'同步链式调用',fix:'异步事件解耦。订单支付后发事件 库存/通知/物流各自消费。'},
    ],
    exercises: [
      {level:'基础',task:'Redis PubSub 事件',hint:'SUBSCRIBE order.created PUBLISH order.created {"orderId":123}',answer:'最简单的发布订阅。'},
      {level:'进阶',task:'设计事件驱动流程',hint:'订单支付发 PaymentCompleted 事件',answer:'库存 通知 物流 积分 独立处理。新增消费者不停现有服务。'},
    ],
  },
  'XD1vDtrRQFbLyKJaD1AlA': {
    mentalModel: '错误处理+重试=快递丢件处理——丢了补发(重试)、地址错退回(不重试 4xx)、物流中心火灾(等恢复 5xx)。不同错误不同策略。',
    handsOn: [
      {title:'重试策略',cmd:'echo "4xx(客户端错):不重试\\n5xx(服务器错):重试\\n429(限流):等 Retry-After 重试\\n网络超时:重试"',output:'指数退避+抖动',explain:'delay=min(base*2^attempt+random, maxDelay)。'},
      {title:'幂等+重试',cmd:'echo "支付请求失败自动重试 幂等键防重复扣款"',output:'重试必须保证幂等',explain:'非幂等操作重试=重复执行。Idempotency-Key。'},
    ],
    diagnosis: [
      {symptom:'网络抖动支付失败用户扣了钱订单未创建',cause:'无重试或无幂等',fix:'关键操作:重试+幂等键+事务。三次重试仍失败必告警人工介入。'},
    ],
    exercises: [
      {level:'基础',task:'实现重试中间件',hint:'async function withRetry(fn,maxRetries=3){for(let i=0;i<=maxRetries;i++){try{return await fn();}catch(e){if(i===maxRetries)throw e;await sleep(Math.min(1000*Math.pow(2,i),30000));}}}',answer:'指数退避+最大重试+总超时。'},
      {level:'进阶',task:'实现幂等键',hint:'Redis setnx idempotent:key result TTL 86400',answer:'重复请求返回已存结果。'},
    ],
  },
  'MJeUD4fOHaJu1oxk4uQ-x': {
    mentalModel: 'API Gateway=前台总机。不让你直接拨各部门分机(微服务)，而是总机统一接听转接。认证/限流/路由/日志都由总机处理。',
    handsOn: [
      {title:'Kong 网关',cmd:'echo "Kong:开源 API 网关\\n插件:认证 限流 日志 转换 缓存"',output:'声明式配置 热更新',explain:'插件市场几十种现成功能。'},
      {title:'Nginx 做网关',cmd:'echo "统一入口 SSL termination 路由 限流 缓存"',output:'轻量级 高性能',explain:'简易场景 Nginx 足够。复杂场景 Kong/APISIX。'},
    ],
    diagnosis: [
      {symptom:'每个微服务各自做认证限流日志',cause:'重复开发维护成本高',fix:'API Gateway 统一处理横切关注点。微服务专注业务逻辑。'},
    ],
    exercises: [
      {level:'基础',task:'Nginx 搭建简易网关',hint:'配置 upstream+proxy_pass+限流',answer:'统一入口+路由分发。'},
      {level:'进阶',task:'Kong 部署和配置',hint:'docker run kong 注册 service+route',answer:'添加 rate-limiting+key-auth 插件。'},
    ],
  },
  'R3aRhqCslwhegMfHtxg5z': {
    mentalModel: 'API 集成模式=不同系统间的翻译官。不同格式(JSON/XML/CSV)、协议(REST/SOAP/gRPC)、认证方式的系统需要中间层协调沟通。',
    handsOn: [
      {title:'集成模式类型',cmd:'echo "1.Point-to-Point:直接连\\n2.Hub-Spoke:星型 ESB 中转\\n3.Pipes-Filters:管道处理\\n4.Event-Driven:事件驱动"',output:'企业常用 ESB/Api Gateway Pattern',explain:'现代微服务倾向 Event-Driven+API Gateway。'},
      {title:'数据转换',cmd:'echo "JSON XML CSV Protocol Buffers 格式转换"',output:'Adapter 模式适配方',explain:'内部统一格式 JSON 外部网关转目标格式。'},
    ],
    diagnosis: [
      {symptom:'两系统同步调用一个挂全挂',cause:'紧耦合 Point-to-Point',fix:'消息队列异步解耦。熔断器(Circuit Breaker)防止级联故障。'},
    ],
    exercises: [
      {level:'基础',task:'设计集成方案',hint:'两个异构系统(REST+SOAP)',answer:'API Gateway 做协议转换+数据格式转换。'},
      {level:'进阶',task:'实现 Circuit Breaker',hint:'npm i opossum',answer:'3 次失败开路 30s 后半开探测 成功闭路。'},
    ],
  },
  'PPeBbooE121zrgNwpVTiA': {
    mentalModel: '微服务架构=乐高积木——每个积木(服务)小而专注，通过标准接口(API)拼接成完整城堡。单体是整块木头雕刻(改一处要整体重雕)。',
    handsOn: [
      {title:'微服务通信',cmd:'echo "同步:REST/gRPC\\n异步:消息队列(Kafka/RabbitMQ)\\n服务发现:Consul/Eureka/K8s DNS"',output:'通信是微服务最大挑战',explain:'同步简单但有级联故障风险。异步解耦但增加复杂度。'},
      {title:'12-Factor App',cmd:'echo "12 条法则构建云原生应用"',output:'独立部署 无状态 配置分离 日志流',explain:'微服务遵循 12-Factor 天然适应云环境。'},
    ],
    diagnosis: [
      {symptom:'微服务拆太细几百个服务维护成本爆炸',cause:'为微服务而微服务',fix:'先单体验证业务。拆分有明确边界+独立部署+独立扩展的服务。'},
    ],
    exercises: [
      {level:'基础',task:'单体拆微服务',hint:'识别边界上下文(订单/用户/支付/库存)',answer:'每个服务独立数据库+独立部署。'},
      {level:'进阶',task:'服务间通信方案',hint:'同步 gRPC+异步 Kafka',answer:'关键路径同步 非关键异步。'},
    ],
  },
  'JvmW78cDm84GNhq8VEYZp': {
    mentalModel: '单元测试=验钞机。每张钞票(函数)都要过验钞机确认真假。API 单元测试验证每个端点/中间件/工具函数的正确性。',
    handsOn: [
      {title:'API 单元测试示例',cmd:'echo "describe("GET /users",()=>{it("returns 200 and user list",async()=>{const res=await request(app).get("/users");expect(res.status).toBe(200);expect(res.body.data).toBeInstanceOf(Array);});});"',output:'supertest 测试 Express 端点',explain:'每个端点至少测:成功 失败 边界。'},
      {title:'测试覆盖率',cmd:'npx jest --coverage',output:'Lines/Branches/Functions 覆盖率',explain:'覆盖率 80%+ 是常见目标。100% 覆盖率不等于零 bug。'},
    ],
    diagnosis: [
      {symptom:'只测 happy path 忽略错误',cause:'无错误场景测试',fix:'至少:200 成功+400 参数错+401 认证+404 不存在+500 服务器错。'},
    ],
    exercises: [
      {level:'基础',task:'写 API 单元测试',hint:'supertest+Jest 测试 REST 端点',answer:'覆盖 CRUD 所有操作。'},
      {level:'进阶',task:'测试覆盖率目标',hint:'jest --coverage 配置 thresholds',answer:'lines:80 branches:70 functions:80。'},
    ],
  },
  '75NVxS0iwoQXxOHCkWQxH': {
    mentalModel: 'Webhook vs 轮询=快递送货上门 vs 自己跑邮局查。Webhook(快递送上门 到了通知你)，Polling(每隔1小时跑邮局问到了没)。',
    handsOn: [
      {title:'Webhook 测试',cmd:'echo "使用 webhook.site 接收测试"',output:'curl 发 POST 到 webhook.site UUID',explain:'webhook.site 实时显示收到请求。'},
      {title:'Polling 对比',cmd:'echo \'setInterval(()=>fetch("/status"),5000)\'',output:'每5秒查一次 浪费资源',explain:'Polling 简单但低效。Webhook 高效但需公网端点。'},
    ],
    diagnosis: [
      {symptom:'Webhook 接收方挂了几小时 事件全丢失',cause:'无重试机制',fix:'发送方应有重试(指数退避)。接收方先 200 确认收+入队列异步处理。'},
    ],
    exercises: [
      {level:'基础',task:'webhook.site 测试 Webhook',hint:'创建 URL curl POST 事件',answer:'实时看到请求头/body/时间。'},
      {level:'进阶',task:'实现 Webhook 接收端点',hint:'先 200 确认+签名验证+入队列异步处理',answer:'幂等去重(用 eventId)。'},
    ],
  },
  'qZELS5vw2feS7QfyD7spX': {
    mentalModel: '集成测试=联排彩排。不是单个演员(单元测试)而是全剧组配合(多模块联动)。API 集成测试验证路由+中间件+数据库+外部服务协作。',
    handsOn: [
      {title:'API 集成测试',cmd:'echo "测试:请求 认证 数据库查询 响应\\n对比单元测试:仅测 function 隔离依赖"',output:'数据库用测试库或 Docker',explain:'集成测试验证真实协作。成本更高但更有价值。'},
      {title:'测试数据库',cmd:'echo "启动测试用 DB(Docker) 迁移 schema 填充 fixture 测试 清理"',output:'每个测试独立数据',explain:'确保测试间不互相影响。'},
    ],
    diagnosis: [
      {symptom:'测试通过但上线就挂',cause:'单元测试 mock 了所有依赖 行为不符',fix:'集成测试用真实 DB。Contract Test 验证服务间契约。E2E 验证关键流程。'},
    ],
    exercises: [
      {level:'基础',task:'写 API 集成测试',hint:'supertest+真实测试 DB',answer:'测试完整请求 认证 数据库 响应流程。'},
      {level:'进阶',task:'Docker Compose 测试环境',hint:'app+db+redis 测试完成后 docker-compose down',answer:'CI 中用 Docker 提供一致测试环境。'},
    ],
  },
  'v8iYctF_k40ES0_hHXS9N': {
    mentalModel: 'BFF(Backend For Frontend)=专属服务员。不是所有客人共用一个服务员，而是每种客人(Web/Mobile/IoT)有专属服务员适配不同需求。',
    handsOn: [
      {title:'BFF 架构',cmd:'echo "Web BFF:iOS UI 数据格式\\nMobile BFF:App 精简数据\\nIoT BFF:设备轻量协议"',output:'每个前端有自己的 BFF',explain:'BFF 聚合多个微服务数据为前端定制格式。'},
      {title:'BFF vs API Gateway',cmd:'echo "Gateway:通用路由 认证 限流\\nBFF:前端专属 数据聚合 格式适配"',output:'BFF 在 Gateway 之上',explain:'BFF 和 Gateway 互补。BFF=前端的专属数据层。'},
    ],
    diagnosis: [
      {symptom:'Web/iOS/Android 共用 API 需各种 workaround',cause:'通用 API 不能满足各端不同需求',fix:'BFF 每端独立数据层。后端微服务保持通用。BFF 做适配和聚合。'},
    ],
    exercises: [
      {level:'基础',task:'设计 BFF 架构',hint:'Web BFF+Mobile BFF+后端通用服务',answer:'BFF 聚合+裁剪+格式转换。'},
      {level:'进阶',task:'Express 实现 BFF',hint:'聚合多个微服务 API 调用 Promise.all',answer:'为前端定制响应格式。'},
    ],
  },
  '6lm3wy9WTAERTqXCn6pFt': {
    mentalModel: '功能测试=完整使用流程。从头到尾按真实用户操作走一遍。不是测零件(单元)而是测整车(整个系统)。',
    handsOn: [
      {title:'API E2E 测试',cmd:'echo "1.注册用户 POST /register\\n2.登录 POST /login 收 token\\n3.创建订单 POST /orders\\n4.支付 POST /orders/1/pay\\n5.查订单 GET /orders/1 状态=paid"',output:'完整业务流程',explain:'验证多个 API 组合的业务流程正确性。'},
      {title:'测试工具',cmd:'echo "Postman Newman/Jest+Cypress/k6 browser"',output:'Postman 集合可做功能测试',explain:'Newman CLI 运行 Postman 集合做自动化。'},
    ],
    diagnosis: [
      {symptom:'单独 API 都对但组合流程出错',cause:'只测单端点没测业务流程',fix:'E2E 测试覆盖核心业务流程。注册 登录 创建 支付 全流程。'},
    ],
    exercises: [
      {level:'基础',task:'Postman 集合做功能测试',hint:'写 Pre-request Script 提取 token',answer:'Newman run collection.json CI 自动跑。'},
      {level:'进阶',task:'设计功能测试场景',hint:'核心流程:注册 登录 CRUD 支付',answer:'Happy path+异常流程(余额不足/过期/取消)。'},
    ],
  },
  'Wpk4TvxcZOJgAoXjrOsZF': {
    mentalModel: 'API 测试=全方位质检。不是只看外观(文档)而是逐项检验:功能(单元/集成)、性能(负载)、安全(渗透)、契约(契约测试)。',
    handsOn: [
      {title:'测试金字塔',cmd:'echo "单元测试(底座) 集成测试(中层) E2E(顶端)"',output:'底座厚 顶端薄',explain:'API 测试以集成测试为主(请求 路由 数据库验证)。'},
      {title:'Contract Testing',cmd:'echo "Provider(服务端)+Consumer(客户端) 验证契约"',output:'Pact 框架',explain:'验证服务端输出和客户端期望一致。'},
    ],
    diagnosis: [
      {symptom:'上线后前端报字段缺失',cause:'后端改了字段名没通知前端',fix:'Contract Test 自动验证。Pact Broker 管理契约。CI 中双方一致才通过。'},
    ],
    exercises: [
      {level:'基础',task:'写 API 测试套件',hint:'单元(supertest)+集成(真实DB)+E2E(多API流程)',answer:'每种覆盖不同层面。'},
      {level:'进阶',task:'Pact Contract Test',hint:'Provider 定义契约 Consumer 验证',answer:'CI 中双方一致才能部署。'},
    ],
  },
  'X68HXAAV-nKo-V4Fu1o72': {
    mentalModel: '批处理=外卖集中配送——不是来一单送一单(实时)，而是集中到中午统一配送(批量)。高效但延迟高。适合报表生成/数据同步/对账。',
    handsOn: [
      {title:'API 批处理端点',cmd:'echo "POST /batch {operations:[{method:POST,path:/users,body:{...}},{method:PATCH,path:/users/1,body:{...}}]}"',output:'一次请求多个操作',explain:'减少 HTTP 往返。服务端事务保证原子性。'},
      {title:'异步批处理',cmd:'echo "POST /exports 202 Accepted\\nGET /exports/1/status processing\\nGET /exports/1/status done download_url"',output:'大数据量异步处理',explain:'实时性不高的批量操作异步化。'},
    ],
    diagnosis: [
      {symptom:'客户端循环调 API 1000 次',cause:'未用批处理',fix:'POST /batch 一次提交所有操作。减少 999 次往返。服务端批量处理更高效。'},
    ],
    exercises: [
      {level:'基础',task:'设计批处理 API',hint:'POST /batch {operations:[...]}',answer:'原子性:全部成功或全部回滚。'},
      {level:'进阶',task:'实现异步批处理',hint:'POST /jobs 202+轮询结果',answer:'文件上传处理后异步导出。'},
    ],
  },
  '7JNEx_cbqnAx3esvwZMOd': {
    mentalModel: '负载测试=消防演习——模拟真实用户量检验系统承压能力。不是娘炮测试(1 用户)，而是模拟 1000/10000 并发看系统能不能扛住。',
    handsOn: [
      {title:'k6 负载测试脚本',cmd:'echo "import http from k6/http; options={stages:[{duration:30s,target:100}]}; export default function(){http.get(https://api.example.com);}"',output:'阶梯式加压 30s 内从 1 到 100 并发',explain:'模拟逐步增加的流量。'},
      {title:'wrk 快速压测',cmd:'wrk -t4 -c100 -d30s https://api.example.com/users',output:'Requests/sec Transfer/sec Latency',explain:'命令行最快压测工具。'},
    ],
    diagnosis: [
      {symptom:'压测 1000 并发 P99 5s',cause:'数据库连接池不够/慢查询/无缓存',fix:'逐步加压定位瓶颈。连接池 慢查询 缓存 代码优化。每次只改一个变量对比。'},
    ],
    exercises: [
      {level:'基础',task:'wrk 压测 API',hint:'wrk -t2 -c50 -d30s url',answer:'看 Latency/Req/Sec 优化前后。'},
      {level:'进阶',task:'k6 性能测试场景',hint:'spike soak stress smoke 四种',answer:'CI 集成每次发版跑 smoke。'},
    ],
  },
  'IkPZel5zxXWIx90Qx7fZI': {
    mentalModel: '消息队列=邮局。发信人(Producer)投信到邮箱(Queue)，收信人(Consumer)有空时取信。双方不直接见面，解耦+削峰填谷。',
    handsOn: [
      {title:'RabbitMQ 基础',cmd:'echo "Producer Exchange Queue Consumer"',output:'Exchange 路由消息到 Queue',explain:'支持多种路由模式:direct/topic/fanout/headers。'},
      {title:'Kafka 基础',cmd:'echo "Producer Topic Partition Consumer Group"',output:'Kafka 高吞吐 持久化 分区有序',explain:'日志型 MQ。适合大数据/流处理。'},
    ],
    diagnosis: [
      {symptom:'订单系统直连库存/通知/物流 同步调用耦合严重',cause:'同步调用链式依赖',fix:'订单发消息到 Queue。库存/通知/物流各自消费。新增下游不加改订单代码。'},
    ],
    exercises: [
      {level:'基础',task:'RabbitMQ Hello World',hint:'amqp.connect sendToQueue consume',answer:'发送+接收一条消息。'},
      {level:'进阶',task:'Kafka Producer/Consumer',hint:'kafka-node 或 kafkajs',answer:'发送 100 条消息 Consumer 消费。'},
    ],
  },
  'bEVCT5QGY3uw0kIfAELKh': {
    mentalModel: 'Mock API=样板间。房子还在盖，先给你看样板间(模拟数据)让前端开始装修(开发)。不用等后端建完，前后端并行开发。',
    handsOn: [
      {title:'Prism Mock',cmd:'npx @stoplight/prism-cli mock openapi.yaml',output:'Mock server 启动 http://127.0.0.1:4010',explain:'从 OpenAPI 定义自动生成 Mock。响应符合 schema。'},
      {title:'json-server',cmd:'npx json-server db.json',output:'RESTful Mock 服务器',explain:'零配置。JSON 文件自动生成 CRUD 端点。'},
    ],
    diagnosis: [
      {symptom:'前端等后端好才能开发联调',cause:'串行开发效率低',fix:'API 文档(Mock)先行。Prism/json-server Mock。前后端并行开发。'},
    ],
    exercises: [
      {level:'基础',task:'Prism Mock 启动',hint:'写 openapi.yaml npx prism mock',answer:'curl http://localhost:4010/users 返回 mock 数据。'},
      {level:'进阶',task:'json-server Mock',hint:'创建 db.json npx json-server --watch',answer:'完整 CRUD 端点自动生成。'},
    ],
  },
  'oIZimEuBHCBGsK6b-s57f': {
    mentalModel: '可观测性=汽车的仪表盘(指标)+黑匣子(日志)+GPS追踪(链路追踪)。不能只有仪表盘(知道速度)，还要知道去哪了怎么去的。Metrics+Logs+Traces 三位一体。',
    handsOn: [
      {title:'三个支柱',cmd:'echo "Metrics:知道什么在发生(Prometheus)\\nLogs:知道为什么发生(ELK)\\nTraces:知道在哪发生(Jaeger)"',output:'三者关联定位问题',explain:'traceId 关联 logs 和 traces。metrics 告警触发查 logs traces。'},
      {title:'OpenTelemetry',cmd:'echo "OTel=统一可观测性标准"',output:'厂商中立的数据采集',explain:'一次埋点 导出到 Prometheus+Jaeger+ELK。'},
    ],
    diagnosis: [
      {symptom:'API 出问题排查几小时',cause:'只有日志无指标追踪',fix:'加 Metrics(知道异常)+Traces(知道哪里慢)+Logs(知道原因)。三者关联快速定位。'},
    ],
    exercises: [
      {level:'基础',task:'Express 加 Prometheus',hint:'npm i prom-client express-prom-bundle',answer:'/metrics 端点暴露。'},
      {level:'进阶',task:'OpenTelemetry 集成',hint:'npm i @opentelemetry/api @opentelemetry/sdk-node',answer:'自动 tracing+metrics 导出。'},
    ],
  },
  'NqeBglhzukVMMEF9p2CXc': {
    mentalModel: '契约测试=婚前协议。Provider(服务端)和 Consumer(客户端)约定好:你给我什么格式，我期望什么字段。哪天你改了格式，契约测试报警。',
    handsOn: [
      {title:'Pact 契约测试',cmd:'echo "Consumer:定义期望 GET /users/1 返回 {id,name,email}\\nProvider:验证自己确实返回这些字段\\nPact Broker:管理契约版本"',output:'双方独立测试 契约保证兼容',explain:'Provider 改了字段 Consumer 测试立即发现。'},
      {title:'契约 vs E2E',cmd:'echo "E2E:需要两端都部署 慢但真实\\nContract:双方独立跑 快但只验收格式"',output:'Contract 轻量 E2E 靠谱',explain:'组合:E2E 覆盖核心流程 Contract 覆盖所有接口。'},
    ],
    diagnosis: [
      {symptom:'后端改字段前端线上报错',cause:'无契约验证',fix:'Contract Test 在 CI 验证。Provider 改字段 Consumer 测试失败阻止部署。'},
    ],
    exercises: [
      {level:'基础',task:'Pact 写 Consumer 测试',hint:'定义期望 interaction+运行 mock service',answer:'验证 Consumer 能正确解析响应。'},
      {level:'进阶',task:'Pact 写 Provider 测试',hint:'验证 Provider 满足 Consumer 期望',answer:'Pact Broker 管理契约 CI 检查。'},
    ],
  },
  'boYX1QcJullypfX4sevdy': {
    mentalModel: 'Kafka=高速公路物流中心。海量包裹(消息)高速分拣(分区)、持久保存(磁盘存储)、按序配送(分区有序)、可回溯(消费者可重置 offset)。',
    handsOn: [
      {title:'Kafka 核心概念',cmd:'echo "Topic(消息分类)\\nPartition(分区并行)\\nProducer(发送)\\nConsumer Group(消费组)\\nBroker(服务器)\\nOffset(消费位置)"',output:'分区=并行单元 消费者=1分区1线程',explain:'Kafka 适合高吞吐场景(日志/事件/流处理)。'},
      {title:'kcat 测试',cmd:'echo "test message"|kcat -P -b localhost:9092 -t test-topic\\nkcat -C -b localhost:9092 -t test-topic',output:'发送和消费消息',explain:'kcat(原 kafkacat) 是 Kafka 的 curl。'},
    ],
    diagnosis: [
      {symptom:'Kafka 消费延迟大',cause:'消费者慢或分区数不足',fix:'增加消费者数量(上限=分区数)。优化消费者处理逻辑。监控 consumer lag。'},
    ],
    exercises: [
      {level:'基础',task:'Docker 启动 Kafka',hint:'docker-compose zookeeper+kafka',answer:'kcat 发送消费消息。'},
      {level:'进阶',task:'Kafka 分区实验',hint:'创建 3 分区 topic 3 个 consumer',answer:'同一 group 内 partition 分给不同 consumer。'},
    ],
  },
  'H22jAI2W5QLL-b1rq-c56': {
    mentalModel: 'RabbitMQ=传统邮局。灵活路由(直发/广播/主题/匹配)，消息确认(签收制)，死信队列(无人认领的信)。比 Kafka 更重路由灵活性和消息确认。',
    handsOn: [
      {title:'RabbitMQ 路由模式',cmd:'echo "Direct:精确路由 key\\nTopic:通配符路由 *.orange.*\\nFanout:广播所有队列\\nHeaders:header 匹配"',output:'四种 Exchange 类型',explain:'选择取决于消息分发需求。'},
      {title:'amqp 测试',cmd:'echo "通过 Management UI(http://localhost:15672) 查看 发送 消费消息"',output:'可视化管理和监控',explain:'RabbitMQ 自带 Web 管理界面。'},
    ],
    diagnosis: [
      {symptom:'消费者挂了消息丢失',cause:'无消息确认',fix:'channel.ack(msg) 确认消费。noAck:false 消息重新入队。'},
    ],
    exercises: [
      {level:'基础',task:'Docker 启动 RabbitMQ',hint:'docker run rabbitmq:management',answer:'Management UI 15672 端口。'},
      {level:'进阶',task:'Node.js amqplib',hint:'connect createChannel assertQueue sendToQueue consume',answer:'发送消费确认重连。'},
    ],
  },
  'At5exN7ZAx2IzY3cTCzHm': {
    mentalModel: 'API 生命周期=产品生命周期——设计 开发 测试 发布 运营 弃用。每个阶段有工具和流程支撑，不是写完就完而是持续运营。',
    handsOn: [
      {title:'生命周期阶段',cmd:'echo "1.Design(OpenAPI设计)\\n2.Develop(实现)\\n3.Test(单元/集成/性能)\\n4.Deploy(发布)\\n5.Manage(监控/版本)\\n6.Retire(弃用)"',output:'全生命周期管理',explain:'生命周期管理=API 产品化思维。'},
      {title:'API Version 弃用',cmd:'echo "Sunset header 公告弃用日期 文档标注 旧版限速 最终移除"',output:'有计划的弃用',explain:'弃用周期 3-6 月。监控旧版使用量。主动通知用户。'},
    ],
    diagnosis: [
      {symptom:'API 版本从 v1 到 v5 旧版本还在维护',cause:'无弃用策略',fix:'每个版本发布时定弃用时间线。Sunset 头+文档+邮件通知+限速+移除。'},
    ],
    exercises: [
      {level:'基础',task:'设计 API 生命周期流程',hint:'Design Develop Test Deploy Manage Retire',answer:'每阶段工具链:OpenAPI Git CI/CD Gateway Monitor。'},
      {level:'进阶',task:'实现弃用策略',hint:'Sunset HTTP 头+Deprecation 文档通知',answer:'监控旧版使用量。3-6月后退役。'},
    ],
  },
  'vZxdswGLHCPi5GSuXEcHJ': {
    mentalModel: 'GDPR=欧盟数据保护法。用户数据神圣不可侵犯——必须告知(收集了什么)、必须同意(用户允许)、必须可删(用户要求删)、必须可移(数据可导出)。',
    handsOn: [
      {title:'API 中的 GDPR',cmd:'echo "1.用户数据加密存储\\n2.提供 GET /users/me/data 导出\\n3.提供 DELETE /users/me 删除\\n4.请求头 X-Data-Request 标识数据请求\\n5.日志脱敏"',output:'API 层面实现 GDPR',explain:'数据处理记录 Consent 管理 Data Portability。'},
      {title:'隐私设计',cmd:'echo "Privacy by Design:最小化收集 目的明确 及时删除"',output:'默认隐私保护',explain:'不是可选项是法律要求。'},
    ],
    diagnosis: [
      {symptom:'日志中打印了用户邮箱和 IP',cause:'违反 GDPR 日志含 PII',fix:'日志脱敏:邮箱只显前 2 字符+域名。IP 哈希。敏感字段 mask。'},
    ],
    exercises: [
      {level:'基础',task:'实现数据导出 API',hint:'GET /users/me/data 返回所有用户数据 JSON',answer:'用户有权获取自己数据。'},
      {level:'进阶',task:'实现数据删除 API',hint:'DELETE /users/me 软删除所有数据',answer:'30 天内可恢复 之后永久删除。'},
    ],
  },
  'a-_iIE7UdoXzD00fD9MxN': {
    mentalModel: 'CCPA=加州消费者隐私法。类似 GDPR 但美国版本。用户有权知道收集了什么、有权拒绝出售、有权删除。',
    handsOn: [
      {title:'CCPA vs GDPR',cmd:'echo "GDPR:欧盟 更严格 需明确同意\\nCCPA:加州 侧重 opt-out 出售个人数据"',output:'地域不同法律不同',explain:'服务加州用户必须遵守 CCPA。'},
      {title:'API 合规',cmd:'echo "Do Not Sell My Info 按钮 用户数据访问/删除 API"',output:'提供 opt-out 接口',explain:'API 层面支持用户隐私请求。'},
    ],
    diagnosis: [
      {symptom:'未区分欧盟和美国用户的隐私处理',cause:'GDPR+CCPA 要求不同',fix:'地理定位(IP)自动选适用法规。欧盟用户 GDPR 规则 加州用户 CCPA 规则。'},
    ],
    exercises: [
      {level:'基础',task:'对比 GDPR 和 CCPA',hint:'相同:访问 删除 可移植。不同:同意机制 opt-in vs opt-out',answer:'API 需支持两种法规要求。'},
      {level:'进阶',task:'实现隐私请求 API',hint:'GDPR:POST /privacy/export POST /privacy/delete',answer:'记录所有隐私请求处理日志。'},
    ],
  },
  'mXCKtLUvwVJkHrpHzOecq': {
    mentalModel: 'PII=个人身份信息。姓名、邮箱、身份证号、IP、位置。这些数据是"放射性物质"——有价值但必须小心处理，泄露后果严重。',
    handsOn: [
      {title:'PII 分类',cmd:'echo "直接标识:姓名 身份证 邮箱 电话\\n间接标识:IP 设备指纹 Cookie\\n敏感:种族 健康 生物特征"',output:'不同级别不同保护',explain:'敏感 PII 需要最高级别保护。'},
      {title:'PII 处理原则',cmd:'echo "1.最小化收集\\n2.加密存储\\n3.传输加密(TLS)\\n4.访问控制\\n5.日志脱敏\\n6.定期清理"',output:'默认安全',explain:'PII 泄露=法律+声誉双重灾难。'},
    ],
    diagnosis: [
      {symptom:'API 响应返回完整手机号和身份证号',cause:'未做数据脱敏',fix:'敏感字段掩码:phone 138****5678。id_card 仅后 4 位。非必要不返回。'},
    ],
    exercises: [
      {level:'基础',task:'识别 API 中的 PII',hint:'审计所有 API 响应和日志',answer:'标记所有含 PII 的字段。'},
      {level:'进阶',task:'实现 PII 脱敏中间件',hint:'res.json 前遍历 body 掩码 PII 字段',answer:'手机号/邮箱/身份证自动脱敏。'},
    ],
  },
  'J0enF8UTVzY3H4n3pbPIF': {
    mentalModel: 'PCI DSS=支付卡行业数据安全标准。处理信用卡数据必须遵守的 12 条安全要求——从网络安全到访问控制到定期测试。',
    handsOn: [
      {title:'PCI DSS 12 条',cmd:'echo "1.防火墙 2.默认密码改 3.保护卡数据 4.加密传输 5.防病毒 6.安全系统 7.访问控制 8.唯一 ID 9.物理安全 10.监控 11.定期测试 12.安全策略"',output:'处理支付卡必须合规',explain:'存储卡号/有效期/CVV 有严格限制。'},
      {title:'API 中的 PCI',cmd:'echo "绝不存储 CVV\\n卡号加密存储(PCI PTS HSM)\\n传输 TLS 1.2+\\n日志不记录完整卡号\\nAPI 响应掩码(****-****-****-1234)"',output:'SAQ 自评问卷',explain:'PCI 合规=持续过程非一次认证。'},
    ],
    diagnosis: [
      {symptom:'日志中意外记录了完整信用卡号',cause:'未脱敏支付相关日志',fix:'日志自动扫描卡号模式(BIN range)并掩码。定期审计日志。'},
    ],
    exercises: [
      {level:'基础',task:'PCI 要求自查',hint:'12 条逐条检查',answer:'识别差距制定补救计划。'},
      {level:'进阶',task:'实现卡号掩码',hint:'maskCard(\'4111111111111111\') -> \'****-****-****-1111\'',answer:'响应/日志/邮件都掩码。'},
    ],
  },
  'W4WwTmgZGnWmiYsB0ezml': {
    mentalModel: 'HIPAA=美国医疗信息保护法。患者健康数据(PHI)的隐私和安全标准。比 GDPR 更严格——泄露 PHI 处罚可达上百万美元。',
    handsOn: [
      {title:'PHI 定义',cmd:'echo "Protected Health Information:医疗记录 诊断 处方 保险 任何可关联到个人的健康信息"',output:'18 类 PHI 标识符',explain:'姓名 日期 电话 地址 病历号等。'},
      {title:'API HIPAA 合规',cmd:'echo "1.BAA(Business Associate Agreement)\\n2.端到端加密\\n3.审计日志\\n4.访问控制\\n5.紧急访问\\n6.数据备份"',output:'HIPAA Security Rule+Privacy Rule',explain:'不是建议是法律要求。'},
    ],
    diagnosis: [
      {symptom:'API 传输 PHI 用 HTTP 非 HTTPS',cause:'违反 HIPAA 传输加密要求',fix:'所有含 PHI 的 API 强制 HTTPS+TLS 1.2+。at-rest 加密(AES-256)。'},
    ],
    exercises: [
      {level:'基础',task:'HIPAA 要求 API Checklist',hint:'逐条检查 Security Rule 合规',answer:'安全+隐私+违约通知。'},
      {level:'进阶',task:'实现审计日志',hint:'记录谁+何时+访问了什么 PHI',answer:'不可篡改审计日志。90 天内可检索。'},
    ],
  },
  'yvdfoly5WHHTq2Puss355': {
    mentalModel: '标准与合规=交通法规。不是限制你开车，而是让你安全到达目的地。标准(OpenAPI/JWT/OAuth)和合规(GDPR/PCI/HIPAA)是成熟 API 的护身符。',
    handsOn: [
      {title:'API 相关标准',cmd:'echo "设计:OpenAPI 3.x\\n认证:OAuth 2.0/OIDC/JWT\\n错误:RFC 7807\\n分页:RFC 5988(Link Header)\\n安全:OWASP API Top 10\\n性能:RED Metrics"',output:'遵循标准降低学习成本',explain:'不要自创标准。用业界公认的。'},
      {title:'合规检查清单',cmd:'echo "GDPR(EU) CCPA(CA) PCI DSS(支付) HIPAA(医疗) SOC2(安全)"',output:'按行业和地域选择合规要求',explain:'不合规=法律风险+罚款+客户流失。'},
    ],
    diagnosis: [
      {symptom:'自行设计认证格式/错误格式/分页方式',cause:'不了解已有标准',fix:'先查 RFC/W3C/IETF 标准。用现有标准而不是自造轮子。标准意味着最佳实践+社区支持+工具兼容。'},
    ],
    exercises: [
      {level:'基础',task:'API 合规自查',hint:'GDOR CCPA PCI HIPAA SOC2',answer:'识别你的 API 需遵守哪些法规。'},
      {level:'进阶',task:'采用 API 标准',hint:'OpenAPI 3.x+OAuth 2.0+JWT+RFC 7807',answer:'标准组合形成完整 API 设计规范。'},
    ],
  },
};