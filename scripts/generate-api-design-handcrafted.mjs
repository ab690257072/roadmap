#!/usr/bin/env node
/**
 * Generates src/roadmaps/api-design/teaching-handcrafted.ts
 * 97 nodes — unique Chinese copy + semantic Excalidraw per diagram kind.
 */
import { readFileSync, statSync, writeFileSync } from 'node:fs';
const palette = {
  blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa',
  red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0',
};

/** Unique teaching copy keyed by roadmap label (97 entries) */
const HANDCRAFTED = {
  "HTTP": {
    "heading": "HTTP：一次调用的请求/响应骨架",
    "subheading": "方法、路径、头、状态码与正文共同表达语义，不是「有个 URL 就算会 API」。",
    "scene": "前端报 404，后端说路由存在；你打开抓包才发现路径少了 /v1 前缀，方法还是 POST 而不是 GET。",
    "core": "HTTP 在 API 链路里负责「怎么发、怎么回」：Request Line + Headers + Body 进去，Status + Headers + Body 出来。",
    "metaphor": "像寄快递：方法是「寄/收/改/退」，URL 是门牌，Header 是备注单，Status 是签收结果。",
    "mistake": "只盯 200 不看 body，或把 404/401/403 都当成「服务器挂了」。",
    "confusion": "HTTP 是传输与语义约定，不等于 REST；REST 是在 HTTP 之上如何设计资源。",
    "experiment": "用 curl -v 打 `GET /users/1 HTTP/1.1`，把 Request/Response 逐行抄到笔记里对照。",
    "route": [
      {
        "label": "拆请求",
        "title": "Method / URL / Headers / Body",
        "text": "四块齐全才算一次调用，缺一块排障会跑偏。"
      },
      {
        "label": "读响应",
        "title": "Status 先分 2xx/4xx/5xx",
        "text": "再看 body 是否业务成功，header 里是否有分页/缓存线索。"
      },
      {
        "label": "对命令",
        "title": "GET /users/1 HTTP/1.1",
        "text": "用真实命令复现，避免 Postman 里藏了隐式重定向或 cookie。"
      },
      {
        "label": "划边界",
        "title": "传输 vs 业务错误",
        "text": "HTTP 成了不代表订单创建成功，业务码可能在 JSON 里。"
      }
    ]
  },
  "What are APIs": {
    "heading": "什么是 API：对外承诺的能力边界",
    "subheading": "API 是系统与系统之间的合约，不是数据库表的直连通道。",
    "scene": "产品要「接支付」，你如果把数据库连接串给合作方，等于把仓库钥匙交出大门。",
    "core": "API = 稳定入口 + 明确输入输出 + 版本与鉴权规则，让调用方不必了解内部实现。",
    "metaphor": "像餐厅菜单：客人点菜（请求），厨房按标准出菜（响应），不必进后厨。",
    "mistake": "把内部 RPC 或 SQL 查询原样暴露给外部，没有契约与兼容策略。",
    "confusion": "API ≠ SDK：SDK 是客户端封装；API 是服务端暴露的接口定义。",
    "experiment": "画一张 client → API → service 三张框图，标出鉴权、限流、日志落在哪一层。",
    "route": [
      {
        "label": "认边界",
        "title": "对外 vs 对内",
        "text": "对内可随意重构；对外 API 改字段就要考虑版本。"
      },
      {
        "label": "看契约",
        "title": "输入/输出/错误",
        "text": "文档与实现一致，是 API 可信的前提。"
      },
      {
        "label": "举场景",
        "title": "开放给第三方",
        "text": "支付、物流、账号体系最常通过 API 集成。"
      },
      {
        "label": "定责任",
        "title": "谁维护兼容性",
        "text": "发布、弃用、下线要有生命周期，不是永久不变。"
      }
    ]
  },
  "HTTP Versions": {
    "heading": "HTTP 版本：1.1 / 2 / 3 各解决什么",
    "subheading": "版本差异在连接复用、头部压缩与传输层，上层 API 设计仍要语义清晰。",
    "scene": "网关启用 HTTP/2 后延迟下降，但团队仍按 1.1 习惯写大量自定义头，带宽没省多少。",
    "core": "HTTP/1.1 最普及；HTTP/2 多路复用；HTTP/3 基于 QUIC 改善弱网与握手。",
    "metaphor": "像公路升级：车道多了（多路复用），但交通规则（方法/状态码）仍要遵守。",
    "mistake": "以为上了 HTTP/2 就不用关心队头阻塞以外的应用层 N+1 请求问题。",
    "confusion": "HTTP/2 ≠ 必须用 REST；它只是传输效率，不决定 API 风格。",
    "experiment": "用 curl --http2 与 HTTP/1.1 各请求同一接口，对比连接数与 TTFB。",
    "route": [
      {
        "label": "认差异",
        "title": "连接与复用",
        "text": "2/3 减少连接建立成本，适合高并发移动端。"
      },
      {
        "label": "看部署",
        "title": "TLS 与网关",
        "text": "很多收益在 CDN/网关终止，源站仍可能是 1.1。"
      },
      {
        "label": "评兼容",
        "title": "老客户端",
        "text": "降级路径要测，不要假设全网 HTTP/2。"
      },
      {
        "label": "抓瓶颈",
        "title": "应用层优先",
        "text": "序列化、DB、缓存往往比协议版本更影响延迟。"
      }
    ]
  },
  "URL, Query & Path Parameters": {
    "heading": "URL：路径定位资源，查询做筛选",
    "subheading": "path 表「是谁」，query 表「怎么筛」，别把动作动词塞进 path。",
    "scene": "合作方调用 /users/1?status=active 返回空，你发现 status 写进 path 里变成了 /users/active/1。",
    "core": "REST 风格下 path 标识资源实例，query 传递过滤、排序、分页等非资源身份参数。",
    "metaphor": "像门牌号 + 信箱筛选标签：地址确定哪一户，标签决定取哪些信件。",
    "mistake": "用 query 传敏感 ID 且不打码，或 path 里塞 getUserByName 这类动词。",
    "confusion": "path 参数与 query 参数在缓存键、日志、权限上行为不同，不能随意互换。",
    "experiment": "设计 /users/{id}?status=active，用 OpenAPI 标清 required 与 enum。",
    "route": [
      {
        "label": "分职责",
        "title": "path vs query",
        "text": "/users/1 定位用户；?status= 过滤状态。"
      },
      {
        "label": "定命名",
        "title": "复数名词",
        "text": "集合 /users，实例 /users/{id}，保持一致。"
      },
      {
        "label": "验编码",
        "title": "URL 编码",
        "text": "空格、中文、+ 号在 query 里要 encode。"
      },
      {
        "label": "想缓存",
        "title": "CDN 键",
        "text": "query 变化会改变缓存键，排序参数要稳定。"
      }
    ]
  },
  "HTTP Methods": {
    "heading": "HTTP 方法：用动词表达安全与语义",
    "subheading": "GET 读、POST 建、PUT 全量替、PATCH 局部改、DELETE 删——语义要稳定。",
    "scene": "移动端用 GET 调「删除收藏」，被爬虫误触删光数据，根因是方法语义用错。",
    "core": "方法告诉中间件与客户端本次操作的意图；幂等与安全属性随方法而变。",
    "metaphor": "像图书馆操作：借阅（GET）、办新证（POST）、换证（PUT/PATCH）、注销（DELETE）。",
    "mistake": "所有操作都用 POST，或 DELETE 不带鉴权与幂等保护。",
    "confusion": "PATCH 与 PUT 不是「随便选一个」：PUT 替换整资源，PATCH 只改字段。",
    "experiment": "对同一资源依次试 GET/POST/PATCH/DELETE，记录各自典型状态码。",
    "route": [
      {
        "label": "对语义",
        "title": "GET/POST/PUT/PATCH/DELETE",
        "text": "先定资源生命周期，再选方法。"
      },
      {
        "label": "谈幂等",
        "title": "重复请求",
        "text": "GET/PUT/DELETE 常幂等；POST 创建要谨慎重试。"
      },
      {
        "label": "守安全",
        "title": "GET 无副作用",
        "text": "有副作用的操作禁止 GET，避免预取/缓存触发。"
      },
      {
        "label": "落文档",
        "title": "OpenAPI method",
        "text": "每个 path+method 对应明确 request/response。"
      }
    ]
  },
  "Learn the Basics": {
    "heading": "API 基础：先建立请求—响应契约观",
    "subheading": "入门不是背 RFC，而是能画清 client、API、service 三者的责任。",
    "scene": "新人直接学 OAuth，却说不清 401 与 403 区别，说明基础层还没打牢。",
    "core": "基础阶段掌握：一次 HTTP 调用结构、常见状态码、JSON 载体、无状态与资源 URI 直觉。",
    "metaphor": "像学开车先认油门刹车，再学高速公路变道（网关、OAuth、消息队列）。",
    "mistake": "跳过抓包与 curl，直接依赖 Postman 点按钮不理解底层。",
    "confusion": "「会调接口」≠「会设计 API」；设计还要考虑演进、错误、安全。",
    "experiment": "选 hello-world 接口：写清 request/response 示例 JSON 各一份。",
    "route": [
      {
        "label": "画链路",
        "title": "client → API → service",
        "text": "标出鉴权、业务、存储各在哪。"
      },
      {
        "label": "写样例",
        "title": "最小 JSON 契约",
        "text": "字段、类型、错误码各给一例。"
      },
      {
        "label": "练工具",
        "title": "curl + 文档",
        "text": "离开 GUI 也能复现问题。"
      },
      {
        "label": "排状态码",
        "title": "2/4/5 家族",
        "text": "建立看到码就知道方向的反射。"
      }
    ]
  },
  "Content Negotiation": {
    "heading": "内容协商：用 Accept 声明要什么格式",
    "subheading": "客户端与服务端通过头协商 JSON/XML/语言，减少「猜格式」。",
    "scene": "老客户端发 Accept: application/xml，新服务默认 JSON，协商失败返回 406。",
    "core": "Accept / Content-Type / Accept-Language 决定表述形式与语言，API 应明确支持范围。",
    "metaphor": "像点外卖备注「不要香菜」：协商在入口完成，避免菜上桌再退单。",
    "mistake": "只返回 200 但 body 格式与 Content-Type 不一致，客户端解析崩溃。",
    "confusion": "内容协商不是 CORS；它解决表述格式，不是跨域权限。",
    "experiment": "同一 GET 分别带 Accept: application/json 与 application/xml 对比响应。",
    "route": [
      {
        "label": "认头",
        "title": "Accept vs Content-Type",
        "text": "请求 Accept 要啥；响应 Content-Type 是啥。"
      },
      {
        "label": "定支持",
        "title": "文档写清",
        "text": "仅支持 json 就明确拒绝其他，返回 406。"
      },
      {
        "label": "做默认",
        "title": "缺省策略",
        "text": "无 Accept 时默认 json，并记录监控。"
      },
      {
        "label": "测兼容",
        "title": "老客户端",
        "text": "版本化或网关转换，别静默改格式。"
      }
    ]
  },
  "HTTP Status Codes": {
    "heading": "状态码：先分家族再记常用码",
    "subheading": "2xx 成功、4xx 调用方问题、5xx 服务端问题；细码各有语义。",
    "scene": "监控把 401 当 5xx 告警，on-call 白紧张——家族分错会误导排障。",
    "core": "状态码是机器可读的「结果摘要」，应与 problem+json 等业务错误体配合。",
    "metaphor": "像快递状态：已签收（2xx）、地址错（4xx）、仓库火警（5xx）。",
    "mistake": "一切失败都返回 200 + success:false，让缓存与中间件失去判断依据。",
    "confusion": "401（未认证）与 403（无权限）不同；404 与 410 也不同。",
    "experiment": "故意触发 400/401/404/409/429/500，记录响应头与 body 结构。",
    "route": [
      {
        "label": "分家族",
        "title": "2 / 4 / 5",
        "text": "先判断责任方，再查具体码。"
      },
      {
        "label": "记常用",
        "title": "201/204/409/429",
        "text": "创建、无体、冲突、限流要熟练。"
      },
      {
        "label": "配 body",
        "title": "RFC 7807",
        "text": "码 + 结构化错误，方便程序处理。"
      },
      {
        "label": "连监控",
        "title": "按码聚合",
        "text": "SLO 与告警按语义分桶，不混为一谈。"
      }
    ]
  },
  "Understand TCP / IP": {
    "heading": "TCP/IP：API 底下的送达与路由",
    "subheading": "DNS 解析、TCP 连接、TLS 握手失败都会表现为「接口超时」。",
    "scene": "接口偶发 30s 超时，应用日志无错，最后是防火墙丢了 SYN 包。",
    "core": "应用层 HTTP 依赖传输层 TCP 与网络层 IP；排障要会分层定位。",
    "metaphor": "像寄信：写地址（IP）、保证送达（TCP）、信里写什么（HTTP）。",
    "mistake": "只会看应用日志，从不 ping/trace/mtr 查网络路径。",
    "confusion": "TCP 慢启动与 HTTP keep-alive 是不同层优化，别混谈。",
    "experiment": "对 api host 做 dig + curl -w time_connect，对比 DNS/TCP/TLS 耗时。",
    "route": [
      {
        "label": "分层",
        "title": "app→TCP→IP",
        "text": "先确定断在哪一层。"
      },
      {
        "label": "测连通",
        "title": "telnet/nc 443",
        "text": "端口不通别急着改业务代码。"
      },
      {
        "label": "看 TLS",
        "title": "证书与 SNI",
        "text": "HTTPS API 常见问题在握手。"
      },
      {
        "label": "关联",
        "title": "超时设置",
        "text": "客户端 read timeout 要大于网络+P99 处理。"
      }
    ]
  },
  "HTTP Headers": {
    "heading": "HTTP 头：承载元数据与策略",
    "subheading": "认证、类型、缓存、关联 ID 大多从头走，设计要克制且一致。",
    "scene": "合作方没带 Authorization，你们返回 200 空列表，其实应 401 并提示头格式。",
    "core": "Header 扩展 HTTP 语义而不改 URL；自定义头要有 X- 前缀或标准注册名。",
    "metaphor": "像快递单上的「易碎」「冷链」标签：不改变包裹内容，但改变处理方式。",
    "mistake": "把所有业务参数塞 header，或头名大小写不一致导致网关剥离。",
    "confusion": "Header 与 query 分工：身份/类型/追踪放头；业务筛选放 query。",
    "experiment": "列出你们 API 允许的 10 个头，写进 OpenAPI components.parameters。",
    "route": [
      {
        "label": "分类",
        "title": "Auth / Type / Cache",
        "text": "Authorization、Content-Type、ETag 各管什么。"
      },
      {
        "label": "标准化",
        "title": "命名与大小写",
        "text": "统一 Bearer、Trace-Id 拼写。"
      },
      {
        "label": "控数量",
        "title": "头过多",
        "text": "超大头可能触发 431，网关要限制。"
      },
      {
        "label": "可观测",
        "title": "关联 ID",
        "text": "request-id 贯穿日志与 trace。"
      }
    ]
  },
  "Basics of DNS": {
    "heading": "DNS：把 api.example.com 变成可达 IP",
    "subheading": "解析失败、TTL 缓存、GeoDNS 都会让「接口突然不可用」。",
    "scene": "切流后一半用户仍访问旧 IP，排查是本地与运营商 DNS 缓存未过期。",
    "core": "DNS 是名字到地址的目录；API 客户端第一步就是解析主机名。",
    "metaphor": "像电话簿查号：名字熟悉，真正拨号的是数字 IP。",
    "mistake": "发布新集群却 TTL 设 24h，回滚困难。",
    "confusion": "DNS 负载均衡与 L7 负载均衡互补，不是替代关系。",
    "experiment": "dig api.example.com + trace，改 hosts 模拟解析到测试机。",
    "route": [
      {
        "label": "查记录",
        "title": "A/AAAA/CNAME",
        "text": "弄清权威 DNS 在哪改。"
      },
      {
        "label": "看 TTL",
        "title": "切换窗口",
        "text": "紧急切流要预案缩短 TTL。"
      },
      {
        "label": "分环境",
        "title": "dev/staging/prod",
        "text": "子域名隔离，避免测打生产。"
      },
      {
        "label": "联证书",
        "title": "SAN 域名",
        "text": "证书域名要与 DNS 一致。"
      }
    ]
  },
  "Cookies": {
    "heading": "Cookie：浏览器会话的携带机制",
    "subheading": "Set-Cookie 与 Cookie 头常用于会话，API 纯移动端更常用 token。",
    "scene": "前后端分离后仍用 Cookie 存 JWT 却未设 HttpOnly/SameSite，遭 XSS 窃取。",
    "core": "Cookie 由服务端 Set-Cookie 下发，浏览器自动带回；适合浏览器会话，不适合所有 API 客户端。",
    "metaphor": "像游乐园手环：进门戴上，玩项目刷卡识别，不必每次报身份证号。",
    "mistake": "把敏感长期令牌放 Cookie 却无 Secure/HttpOnly，或跨站未设 SameSite。",
    "confusion": "Cookie 会话与 Bearer token 是不同会话模型，混用要统一退出与刷新策略。",
    "experiment": "用 curl -c/-b 观察 Set-Cookie 属性：Domain、Path、Max-Age、SameSite。",
    "route": [
      {
        "label": "认属性",
        "title": "HttpOnly / Secure",
        "text": "防 XSS 与明文传输。"
      },
      {
        "label": "选场景",
        "title": "浏览器 vs App",
        "text": "App 多用 Authorization 头。"
      },
      {
        "label": "管续期",
        "title": "滑动过期",
        "text": "refresh 与注销要失效服务端会话。"
      },
      {
        "label": "对 CORS",
        "title": "凭证请求",
        "text": "跨域 Cookie 要 credentials 与 Allow-Credentials。"
      }
    ]
  },
  "CORS": {
    "heading": "CORS：浏览器跨域时的安全闸",
    "subheading": "服务端通过 Access-Control-* 告诉浏览器哪些源、方法、头被允许。",
    "scene": "本地 localhost:3000 调生产 API，预检 OPTIONS 失败，控制台一片红。",
    "core": "CORS 是浏览器的约束；curl/服务端调用不受 CORS 限制，但公网 API 仍要配好。",
    "metaphor": "像小区门卫：访客（Origin）要在名单上，大件（自定义头）要先登记（预检）。",
    "mistake": "Access-Control-Allow-Origin: * 却带 Cookie，或只允许 GET 却发 POST。",
    "confusion": "CORS 错误不是「服务器挂了」，而是响应头不满足浏览器策略。",
    "experiment": "用浏览器发跨域 POST 带 Authorization，抓 OPTIONS 与正式请求的响应头。",
    "route": [
      {
        "label": "认预检",
        "title": "OPTIONS",
        "text": "非简单请求先预检，再发真请求。"
      },
      {
        "label": "配白名单",
        "title": "Allow-Origin",
        "text": "生产禁用 * + 凭证组合。"
      },
      {
        "label": "放方法头",
        "title": "Methods / Headers",
        "text": "PUT、自定义头要显式允许。"
      },
      {
        "label": "分环境",
        "title": "dev 宽松 prod 严",
        "text": "本地代理也是常见解法。"
      }
    ]
  },
  "HTTP Caching": {
    "heading": "HTTP 缓存：用 ETag 与 Cache-Control 减负",
    "subheading": "合理 304 与 max-age 能降延迟与成本，写操作要避免被缓存。",
    "scene": "用户修改头像后仍看到旧图，CDN 缓存了 GET 且未校验 ETag。",
    "core": "缓存靠响应头协商：Cache-Control、ETag、Last-Modified；条件请求返回 304。",
    "metaphor": "像图书馆借书卡：未变则说「还是那本」（304），不用重抄全书。",
    "mistake": "对 POST 响应设长期 public cache，或忘记对个性化数据标 private。",
    "confusion": "浏览器缓存、CDN、应用内 Redis 是不同层，策略别混用。",
    "experiment": "两次 GET 同一 URL，第二次带 If-None-Match，观察 304 与耗时。",
    "route": [
      {
        "label": "选指令",
        "title": "max-age / no-store",
        "text": "静态长缓存，个性化 no-store。"
      },
      {
        "label": "用校验",
        "title": "ETag",
        "text": "资源变则哈希变，避免脏读。"
      },
      {
        "label": "分方法",
        "title": "GET 可缓存",
        "text": "变更用 POST/PUT 并使缓存失效。"
      },
      {
        "label": "查 CDN",
        "title": "缓存键",
        "text": "query/Vary 影响命中，要测试。"
      }
    ]
  },
  "REST Principles": {
    "heading": "REST 原则：资源、无状态、统一接口",
    "subheading": "Roy Fielding 的约束不是口号，而是让 API 可缓存、可演进、可互操作的设计纪律。",
    "scene": "团队把每个 RPC 动作都映射成 POST /doSomething，缓存与网关完全无法按资源治理。",
    "core": "REST 强调资源标识（URI）、表述（JSON/XML）、无状态请求、可缓存与分层系统，通过 HTTP 语义表达状态转移。",
    "metaphor": "像城市公交：站牌（URI）固定，乘客刷卡上车（请求），不需要司机记住你昨天坐过哪路。",
    "mistake": "把 REST 等同于「用 JSON + HTTP」，忽略 HATEOAS、幂等与缓存语义。",
    "confusion": "REST 是架构风格，不是协议；RPC 风格 API 也能跑在 HTTP 上，但约束不同。",
    "experiment": "挑三个接口，逐条对照：是否资源导向、是否无状态、GET 是否安全可缓存。",
    "route": [
      {
        "label": "认约束",
        "title": "六大约束",
        "text": "客户端-服务器、无状态、可缓存、分层、统一接口、按需代码。"
      },
      {
        "label": "转资源",
        "title": "名词非动词",
        "text": "/orders 而非 /createOrder，用方法表达动作。"
      },
      {
        "label": "查状态",
        "title": "表述即快照",
        "text": "响应是资源某时刻的表述，不是内部对象 dump。"
      },
      {
        "label": "评演进",
        "title": "兼容优先",
        "text": "加字段优于改语义，版本与弃用要有策略。"
      }
    ]
  },
  "RESTful APIs": {
    "heading": "RESTful API：把 HTTP 用对的日常实践",
    "subheading": "RESTful 不是理论卷宗，而是团队能一致落地的 URI、方法、状态码约定。",
    "scene": "文档写 GET /users 分页，实现却 POST /users/search，合作方 SDK 全部要重写。",
    "core": "RESTful API 将资源 CRUD 映射到 HTTP 方法，用标准状态码表达结果，错误体结构化，分页过滤走 query。",
    "metaphor": "像标准化集装箱：船港（客户端）不必懂货箱里装什么工艺，只要尺寸与吊点一致就能装卸。",
    "mistake": "201 创建却不返回 Location 头，或 PATCH 成功仍回 200 带全量体浪费带宽。",
    "confusion": "「不够 RESTful」常指不一致，而非缺 HATEOAS；先统一比追求满分更重要。",
    "experiment": "用 OpenAPI 描述 users 资源全套 CRUD，让前后端各实现一遍对照。",
    "route": [
      {
        "label": "定资源",
        "title": "集合与实例",
        "text": "/users 与 /users/{id} 分工清晰。"
      },
      {
        "label": "配方法",
        "title": "CRUD 映射",
        "text": "GET 读、POST 建、PUT/PATCH 改、DELETE 删。"
      },
      {
        "label": "写错误",
        "title": "4xx/5xx + body",
        "text": "409 冲突、422 校验失败要可程序处理。"
      },
      {
        "label": "做评审",
        "title": "API Review",
        "text": "新接口上线前对照 RESTful 清单过一遍。"
      }
    ]
  },
  "URI Design": {
    "heading": "URI 设计：可读、稳定、可缓存的地址",
    "subheading": "好 URI 让日志、权限、CDN 键都更清晰；坏 URI 让每次重构都像搬家。",
    "scene": "运营要按类目查商品，URI 写成 /getProductsByCategory/electronics，CDN 无法按资源失效。",
    "core": "URI 应用名词表资源层级，用 path 表身份、query 表筛选；避免文件扩展名、动词与大写混用。",
    "metaphor": "像门牌编址：省-市-街-号层级清晰，邮差不用猜「找张三」是哪一户。",
    "mistake": "在 URI 里塞 .json 后缀或 sessionId，把会话状态绑死在地址上。",
    "confusion": "URI 设计不等于数据库表结构；一对多关系可用嵌套或扁平两种，要一致。",
    "experiment": "为电商设计 /products/{id}/reviews 与 /reviews?productId= 两种方案并比较权限粒度。",
    "route": [
      {
        "label": "用名词",
        "title": "复数集合",
        "text": "/orders、/users，动作交给 HTTP 方法。"
      },
      {
        "label": "控层级",
        "title": "嵌套不过深",
        "text": "/users/1/orders 可以，再套三层要警惕。"
      },
      {
        "label": "保稳定",
        "title": "ID 不随改名变",
        "text": "slug 可友好展示，主键 URI 不因改名而变。"
      },
      {
        "label": "想权限",
        "title": "路径即边界",
        "text": "URI 结构应方便 RBAC 与审计规则编写。"
      }
    ]
  },
  "Simple JSON APIs": {
    "heading": "简单 JSON API：先小后大，字段宁少勿乱",
    "subheading": "第一个对外 API 不必一次设计完美，但要类型清晰、错误可读、示例可跑。",
    "scene": "v1 返回 user_name 与 userName 混用，移动端解析写满 if-else，联调拖了两周。",
    "core": "简单 JSON API 聚焦：camelCase 或 snake_case 统一、日期 ISO8601、null 与缺字段语义一致、示例即契约。",
    "metaphor": "像便签条沟通：句子短、信息准，比长篇公文更适合快速对齐。",
    "mistake": "把数据库整行 SELECT 输出给客户端，泄露内部 ID 与软删字段。",
    "confusion": "简单不等于无版本；简单是字段与语义少而稳，不是随便改。",
    "experiment": "写一个仅含 id/name/createdAt 的 POST+GET 样例，配 curl 与 JSON Schema。",
    "route": [
      {
        "label": "定命名",
        "title": "一种风格",
        "text": "全项目统一 camelCase 或 snake_case。"
      },
      {
        "label": "限字段",
        "title": "DTO 裁剪",
        "text": "响应只给客户端需要的，内部字段不外露。"
      },
      {
        "label": "写示例",
        "title": "happy/error path",
        "text": "各一份 JSON，比段落描述更管用。"
      },
      {
        "label": "加校验",
        "title": "JSON Schema",
        "text": "CI 校验响应结构，防悄悄改字段。"
      }
    ]
  },
  "Different API Styles": {
    "heading": "API 风格对比：REST、RPC、GraphQL、gRPC 各擅什么",
    "subheading": "没有银弹，选型看调用方、网络环境、团队熟悉度与演进节奏。",
    "scene": "移动端要聚合 12 个 REST 接口，产品改需求一次发版；评估 GraphQL 或 BFF 才解 N+1。",
    "core": "REST 资源+HTTP 语义；RPC 动作导向；GraphQL 客户端定查询；gRPC 二进制高性能；事件驱动偏异步解耦。",
    "metaphor": "像出行方式：公交（REST 标准化）、出租车（RPC 直达）、自助餐（GraphQL 自选）、高铁（gRPC 大批量）。",
    "mistake": "微服务内部也强行 REST +json 跨语言，其实 gRPC 更合适却没人提。",
    "confusion": "风格混用不是罪，但网关与文档要分区，别让用户猜该用哪套。",
    "experiment": "同一「查订单+用户」场景，分别 sketch REST 多次调用 vs GraphQL 一次查询 vs gRPC 定义。",
    "route": [
      {
        "label": "列场景",
        "title": "谁调用、多频繁",
        "text": "浏览器、App、服务间需求不同。"
      },
      {
        "label": "比耦合",
        "title": "客户端/server 绑定",
        "text": "GraphQL 灵活但服务端 resolver 成本上升。"
      },
      {
        "label": "看网络",
        "title": "公网 vs 内网",
        "text": "gRPC 常内网；公网要考虑网关与浏览器支持。"
      },
      {
        "label": "定边界",
        "title": "对外一种主风格",
        "text": "内部可多种，对外文档要清晰分区。"
      }
    ]
  },
  "Resource modeling": {
    "heading": "资源建模：从业务概念到 URI 与生命周期",
    "subheading": "建模决定 API 能否经得住产品迭代，而不是一次 CRUD  demo 就定型。",
    "scene": "「优惠券」既是资源又是规则引擎，URI 拆成 /coupons 与 /promotions 两套，数据重复同步噩梦。",
    "core": "资源建模识别聚合根、关联、状态机与不变量，决定集合/实例 URI、子资源嵌套与哪些操作用 POST 动作资源。",
    "metaphor": "像图书馆编目：书、作者、借阅记录是不同藏品，不能全塞进一个「万能条目」。",
    "mistake": "一张表一个 endpoint，把技术模型直接暴露为 API 模型。",
    "confusion": "资源不等于数据库行；同一业务对象可能有多表述（列表项 vs 详情 vs 管理视图）。",
    "experiment": "画订单域：Order、LineItem、Payment 的 ER 与 URI 树，标状态转移边。",
    "route": [
      {
        "label": "找聚合",
        "title": "边界与一致性",
        "text": "订单行不应独立于订单单独 PATCH 价格。"
      },
      {
        "label": "画状态",
        "title": "生命周期",
        "text": "pending→paid→shipped，哪些转移暴露为 API。"
      },
      {
        "label": "分表述",
        "title": "列表/详情 DTO",
        "text": "同一资源不同视图，字段量不同。"
      },
      {
        "label": "留扩展",
        "title": "扩展字段策略",
        "text": "metadata 或版本化 schema，避免硬编码爆炸。"
      }
    ]
  },
  "SOAP APIs": {
    "heading": "SOAP API：XML 信封里的契约与 WS-* 生态",
    "subheading": "老牌企业集成仍大量存在，理解 WSDL 与 SOAP Fault 才能对接银行、电信、政务。",
    "scene": "对接银行代付，对方只给 WSDL，你用 REST 习惯发 JSON 被拒，根因是 Content-Type 与 Body 结构不对。",
    "core": "SOAP 用 XML Envelope+Body，WSDL 描述操作与类型，常配合 WS-Security；错误在 SOAP Fault 里结构化。",
    "metaphor": "像公证信函：格式固定、盖章（WS-Security），内容严谨但开销比便签大。",
    "mistake": "忽略 mustUnderstand 头或命名空间，解析器直接抛错却看不懂 XML。",
    "confusion": "SOAP ≠ 只能 RPC；文档/literal 风格也可接近资源思维，但工具链偏 RPC。",
    "experiment": "用 SoapUI 导入 WSDL，发起一次成功与一次 Fault，对比 XML 结构。",
    "route": [
      {
        "label": "读 WSDL",
        "title": "portType/binding",
        "text": "弄清 endpoint、操作名与 XSD 类型。"
      },
      {
        "label": "配安全",
        "title": "WS-Security",
        "text": "签名、时间戳、证书链按对方规范来。"
      },
      {
        "label": "解 Fault",
        "title": "faultcode/string",
        "text": "业务失败在 Fault 里，不是 HTTP 200 就完。"
      },
      {
        "label": "做映射",
        "title": "SOAP→内部 DTO",
        "text": "网关层转换，别让 XML 渗透全业务代码。"
      }
    ]
  },
  "Naming Conventions": {
    "heading": "命名约定：字段、路径、错误码的统一语言",
    "subheading": "命名是 API 最便宜的文档；不一致的命名是最贵的联调税。",
    "scene": "同一个「手机号」在三个服务叫 phone、mobile、tel，数据中台清洗规则永远对不齐。",
    "core": "路径用复数 kebab-case 或小写；JSON 字段团队内统一 camelCase 或 snake_case；枚举值用稳定字符串而非魔法数字。",
    "metaphor": "像乐队谱面：音符名统一，否则各吹各的调再天才也合奏不了。",
    "mistake": "对外 API 随开发者个人喜好命名，没有 lint 与 breaking change 审查。",
    "confusion": "命名规范要写入 OpenAPI 与 CI，不是 wiki 里一篇没人看的文章。",
    "experiment": "列出域内 20 个核心名词英译表，新接口 PR 必须引用表中命名。",
    "route": [
      {
        "label": "定路径",
        "title": "复数/小写/连字符",
        "text": "/payment-methods 而非 /PaymentMethod。"
      },
      {
        "label": "定字段",
        "title": "camel vs snake",
        "text": "选一个，全公司 sticking。"
      },
      {
        "label": "定枚举",
        "title": "字符串常量",
        "text": "status: \"ACTIVE\" 优于 status: 1。"
      },
      {
        "label": "自动化",
        "title": "Spectral 规则",
        "text": "OpenAPI lint 拦截命名漂移。"
      }
    ]
  },
  "gRPC APIs": {
    "heading": "gRPC：Protobuf 契约与高性能服务间调用",
    "subheading": "二进制、HTTP/2、强类型，适合微服务内部；对外通常经 grpc-gateway 转 REST。",
    "scene": "订单服务 P99 延迟高，抓包发现 JSON 序列化占 40%，内网改 gRPC 后 CPU 降半。",
    "core": "gRPC 用 .proto 定义 service/rpc/message，支持 unary、流式；status code 在 grpc-status，错误 detail 可扩展。",
    "metaphor": "像专用货运专线：车厢规格固定（proto），装卸极快，但进门要认月台（codegen）。",
    "mistake": "proto 字段编号乱改导致线上兼容崩溃，或未设 deadline 导致级联阻塞。",
    "confusion": "gRPC 不是 REST 的升级版，而是不同场景；浏览器直调还要 gRPC-Web。",
    "experiment": "写 hello.proto 生成 Go/TS stub，测 unary 与 server streaming 各一次。",
    "route": [
      {
        "label": "写 proto",
        "title": "message/service",
        "text": "字段号只增不改，deprecated 标记弃用。"
      },
      {
        "label": "设超时",
        "title": "deadline",
        "text": "客户端必须传 deadline，服务端尊重取消。"
      },
      {
        "label": "选流式",
        "title": "stream 场景",
        "text": "大列表、实时推送用 server/client/bidi stream。"
      },
      {
        "label": "对外桥",
        "title": "grpc-gateway",
        "text": "公网 REST 与内网 gRPC 分工清晰。"
      }
    ]
  },
  "Versioning Strategies": {
    "heading": "版本策略：让旧客户端活着，新能力慢慢长",
    "subheading": "版本不是 v2 按钮，而是 URL、头、字段与弃用时间线的组合治理。",
    "scene": "直接改字段类型导致旧 App 崩溃，商店一星刷屏；事后才加 /v2 与 sunset 头。",
    "core": "常见策略：URI 版本（/v1）、Header（Accept-Version）、字段扩展优先；弃用要公告、监控流量、设 sunset 日期。",
    "metaphor": "像城市改造：新老街区并行（v1/v2），拆迁公告（deprecation）比一夜推平人道。",
    "mistake": "无版本却 breaking change；或 v47 堆叠从不下线，运维与文档爆炸。",
    "confusion": "语义化版本用于包管理；API 版本是契约版本，不必与 semver 一一对应。",
    "experiment": "为 payment 接口写 deprecation 计划：头、文档、监控指标、下线 checklist。",
    "route": [
      {
        "label": "选策略",
        "title": "URI vs Header",
        "text": "URI 直观；Header  URI 更干净，看网关能力。"
      },
      {
        "label": "保兼容",
        "title": "加字段不删改",
        "text": "新行为 opt-in，旧默认不变。"
      },
      {
        "label": "发公告",
        "title": "Sunset/Deprecation",
        "text": "响应头 + 文档 + 邮件，三处一致。"
      },
      {
        "label": "看流量",
        "title": "v1 占比",
        "text": "降到阈值再关，别拍脑袋下线。"
      }
    ]
  },
  "GraphQL APIs": {
    "heading": "GraphQL：客户端自选字段的查询语言",
    "subheading": "一次请求拿齐所需，但要防 N+1 与复杂查询拖垮服务端。",
    "scene": "App 首页要用户、订单、推荐三块数据，REST 连打 8 次；GraphQL 一次 query 搞定但 resolver 没 DataLoader 打爆 DB。",
    "core": "GraphQL 用 schema 定义 type/query/mutation，客户端声明字段树；错误分 partial data 与 top-level errors。",
    "metaphor": "像自助餐：盘子（query）你装什么菜（字段）自己选，厨房（resolver）按单现做，点太多会排队。",
    "mistake": "把 GraphQL 当「万能 GET」，深度嵌套无限制，或 mutation 里塞长事务。",
    "confusion": "GraphQL 不替代 REST 全部场景；文件上传、缓存 CDN 常仍要 REST 或专用方案。",
    "experiment": "写 users { id name orders { id total } }，对比 REST 三次调用与 SQL 次数（加 DataLoader）。",
    "route": [
      {
        "label": "定 schema",
        "title": "type/query/mutation",
        "text": "先建模再写 resolver，别从 DB 反推一团糟。"
      },
      {
        "label": "防 N+1",
        "title": "DataLoader",
        "text": "批量加载关联，监控 resolver 耗时。"
      },
      {
        "label": "限复杂度",
        "title": "depth/cost",
        "text": "拒绝恶意深查询，生产必配。"
      },
      {
        "label": "分场景",
        "title": "读多写少",
        "text": "聚合读用 GraphQL；简单 CRUD 仍可 REST。"
      }
    ]
  },
  "Building JSON / RESTful APIs": {
    "heading": "构建 JSON REST API：从脚手架到上线清单",
    "subheading": "框架能生成路由，但契约、错误、鉴权、观测要你自己补全。",
    "scene": "Spring Boot 一天搭完 CRUD，上线前才发现没统一异常处理，500 堆栈直接返回给客户端。",
    "core": "构建流程：建模→OpenAPI→实现→全局异常→鉴权→分页→集成测试→文档→监控；JSON 序列化与日期时区要早定。",
    "metaphor": "像盖精装房：框架是毛坯，水电（鉴权）、消防（限流）、门牌（文档）不装不能入住。",
    "mistake": "只实现 happy path，错误体各 controller 各写各的。",
    "confusion": "「能跑」与「能对接」差一整层工程化：版本、幂等、关联 ID。",
    "experiment": "用 OpenAPI Generator 从 spec 生成 stub，再 TDD 实现一个 resource 全流程。",
    "route": [
      {
        "label": "先契约",
        "title": "OpenAPI first",
        "text": "spec 评审通过再写实现，减少返工。"
      },
      {
        "label": "统一错",
        "title": "@ControllerAdvice",
        "text": "业务异常映射到 4xx + problem+json。"
      },
      {
        "label": "加中间件",
        "title": "auth/log/trace",
        "text": "鉴权、日志、限流在边界层一次接入。"
      },
      {
        "label": "上 CI",
        "title": "contract test",
        "text": "合并前跑示例请求与 schema 校验。"
      }
    ]
  },
  "HATEOAS": {
    "heading": "HATEOAS：响应里带下一步链接",
    "subheading": "超媒体驱动让客户端少硬编码 URL，但国内落地少，要权衡复杂度。",
    "scene": "工作流引擎返回 order 含 _links: cancel、pay、ship，客户端按 rel 跳转而非写死 /orders/1/pay。",
    "core": "HATEOAS 在表述中嵌入 link（rel+href+method），客户端根据当前状态发现可用转移，服务端控制流程演进。",
    "metaphor": "像 GPS 只告诉你「下一个路口左转」，而不是背整条路书（硬编码 URL）。",
    "mistake": "links 与实际权限不一致，客户端点了 403；或 links 过多像垃圾场没人维护。",
    "confusion": "HATEOAS 是 REST 成熟度最高级，多数团队 Level 2（HTTP 动词）已够用。",
    "experiment": "订单详情 JSON 加 _links.self/cancel/pay，写客户端只解析 rel 完成支付流程。",
    "route": [
      {
        "label": "定 rel",
        "title": "稳定关系名",
        "text": "cancel、approve 用 IANA 或文档注册 rel。"
      },
      {
        "label": "绑状态",
        "title": "可用操作随状态变",
        "text": "shipped 订单不应再出现 pay link。"
      },
      {
        "label": "配方法",
        "title": "method/title",
        "text": "link 里标明 POST 还是 DELETE。"
      },
      {
        "label": "评收益",
        "title": "是否值得",
        "text": "强工作流/多客户端时收益大，简单 CRUD 可跳过。"
      }
    ]
  },
  "CRUD Operations": {
    "heading": "CRUD 操作：Create Read Update Delete 的 API 映射",
    "subheading": "最基础的四个动作，映射错了后面幂等、缓存、权限全乱。",
    "scene": "更新用户邮箱用 POST /updateEmail，重复提交创建两条审计记录，本应 PATCH 幂等键。",
    "core": "Create→POST 集合；Read→GET 实例/集合；Update→PUT/PATCH；Delete→DELETE；列表 Read 配分页过滤。",
    "metaphor": "像档案柜：新建卷宗、翻阅、修订页、销毁，每种操作有不同的审批与留痕规则。",
    "mistake": "Update 用 POST 且无 idempotency-key，Retry 造成双写。",
    "confusion": "软删是 DELETE 语义还是 PATCH isDeleted？要在 API 层统一一种。",
    "experiment": "对 /items 实现四套操作，表格记录每步 HTTP 方法、状态码、是否幂等。",
    "route": [
      {
        "label": "对方法",
        "title": "POST/GET/PUT/PATCH/DELETE",
        "text": "一张表贴墙，PR 对照检查。"
      },
      {
        "label": "定响应",
        "title": "201+Location",
        "text": "创建返回新资源 URI；删除可 204。"
      },
      {
        "label": "管并发",
        "title": "ETag/If-Match",
        "text": "更新带版本，防丢失更新。"
      },
      {
        "label": "软删策略",
        "title": "410 vs 404",
        "text": "文档写清已删资源返回什么。"
      }
    ]
  },
  "Web Sockets": {
    "heading": "WebSocket：全双工长连接实时通道",
    "subheading": "聊天、协作、行情推送常用；要心跳、重连与鉴权，不是「HTTP 升级版」。",
    "scene": "在线客服用轮询每秒 500 次打爆 API，改 WebSocket 后连接数稳定但忘了 ping/pong，NAT 五分钟全断。",
    "core": "WebSocket 握手后持久连接，帧级双向消息；需协议设计（JSON/Protobuf）、心跳、背压与连接级鉴权。",
    "metaphor": "像电话线一直通着：不用每次拨号（HTTP），但占线费（连接资源）要管。",
    "mistake": "把大文件传输全走 WS，或不做消息 id 导致重连后重复/丢消息。",
    "confusion": "WebSocket ≠ Socket.IO 协议；后者含降级与房间抽象，是纯 WS 之上的库。",
    "experiment": "实现 echo WS：连接→鉴权→ping 30s→断线指数退避重连，抓包看帧。",
    "route": [
      {
        "label": "握鉴权",
        "title": "query token 或首帧",
        "text": "连接建立后立即验身份，防裸连。"
      },
      {
        "label": "定协议",
        "title": "type/payload/id",
        "text": "消息 envelope 统一，便于路由与去重。"
      },
      {
        "label": "保活",
        "title": "ping/pong",
        "text": "中间件超时断连，客户端要自动重连。"
      },
      {
        "label": "扩集群",
        "title": "pub/sub 背板",
        "text": "多实例要用 Redis/NATS 广播到正确连接。"
      }
    ]
  },
  "Filtering, Sorting & Search": {
    "heading": "过滤、排序与搜索：列表 API 的三件套",
    "subheading": "query 参数是列表 API 的 UX 核心，设计不好合作方只能全量拉取。",
    "scene": "合作方拉 /products 全量 80 万条超时，其实支持 ?category=shoes&sort=-price&q=跑鞋 却未写进文档。",
    "core": "filter 用明确字段 operato（eq/gte/in）；sort 用 sort=field,-field2；search 用 q 或专用 /search 端点并说明分词规则。",
    "metaphor": "像电商筛选项：左边勾选（filter）、下拉排序（sort）、顶栏搜索框（search），各管一摊。",
    "mistake": "sort 接受任意 SQL 片段，引来注入；或 filter 字段无白名单。",
    "confusion": "全文搜索常该走 Elasticsearch 专用 API，不要强塞关系库 LIKE。",
    "experiment": "设计 products 列表 OpenAPI parameters，含 filter/sort/q 示例与非法参数 400。",
    "route": [
      {
        "label": "白名单",
        "title": "可筛字段",
        "text": "文档列出 status、categoryId 等，其它 400。"
      },
      {
        "label": "定排序",
        "title": "sort=-createdAt",
        "text": "减号表降序，多字段逗号分隔。"
      },
      {
        "label": "搜策略",
        "title": "q vs /search",
        "text": "简单 q 够用；复杂用 POST /search body。"
      },
      {
        "label": "测组合",
        "title": "filter+sort+page",
        "text": "参数组合要测，索引要跟上。"
      }
    ]
  },
  "Server Sent Events": {
    "heading": "SSE：服务端单向推送的轻量方案",
    "subheading": "text/event-stream 适合通知、进度条；比 WebSocket 简单，只服务端→客户端。",
    "scene": "导出任务进度用 SSE 推 percentage，浏览器 EventSource 自动重连，比 WS 少写一半代码。",
    "core": "SSE 基于 HTTP 长连接，事件格式 id/event/data；浏览器 EventSource 原生支持，需 Cache-Control: no-cache。",
    "metaphor": "像电台广播：听众只收不发，换台（重连）自动续上 last-event-id。",
    "mistake": "SSE 走 HTTP/1.1 连接数打满却不升级 HTTP/2；或 nginx 缓冲导致事件延迟。",
    "confusion": "SSE 不能客户端发消息；双向要 WS 或 fetch streaming。",
    "experiment": "写 /events 端点推 10 条 progress，前端 EventSource 打印并断网重连验证 id 续传。",
    "route": [
      {
        "label": "设头",
        "title": "text/event-stream",
        "text": "no-cache + 禁用反向代理缓冲。"
      },
      {
        "label": "用 id",
        "title": "Last-Event-ID",
        "text": "重连时服务端从断点补发。"
      },
      {
        "label": "分事件",
        "title": "event: type",
        "text": "前端按 event 名监听不同业务。"
      },
      {
        "label": "选场景",
        "title": "通知/进度",
        "text": "单向足够时用 SSE，别硬上 WS。"
      }
    ]
  },
  "Real-time APIs": {
    "heading": "实时 API：从轮询到推送的谱系",
    "subheading": "「实时」是延迟目标，不是技术宗教；选型看方向、频率与基础设施。",
    "scene": "股票 tick 用 200ms 轮询，CPU 飙红；改 WS 推送后延迟降但连接治理成了新瓶颈。",
    "core": "实时方案：短轮询、长轮询、SSE、WebSocket、MQTT、gRPC stream；权衡复杂度、双向需求、防火墙与规模。",
    "metaphor": "像等外卖：反复开门看（轮询）、门铃响（推送）、对讲机双向（WS）——场景决定工具。",
    "mistake": "所有「稍快一点」都上 WebSocket，忽略 SSE 或 mqtt 更省资源。",
    "confusion": "实时 API 也要鉴权、限连接数、监控；不是开了 WS 就完事。",
    "experiment": "同一通知场景实现 polling vs SSE vs WS 三版，对比连接数、延迟、实现行数。",
    "route": [
      {
        "label": "定 SLA",
        "title": "可接受延迟",
        "text": "秒级通知 SSE 够；毫秒 tick 才 WS。"
      },
      {
        "label": "看方向",
        "title": "单向/双向",
        "text": "单向优先 SSE；双向聊天用 WS。"
      },
      {
        "label": "管连接",
        "title": "上限与心跳",
        "text": "每用户连接数、空闲断开、集群广播。"
      },
      {
        "label": "做降级",
        "title": "polling fallback",
        "text": "企业网拦 WS 时仍能工作。"
      }
    ]
  },
  "Pagination": {
    "heading": "分页：别让一次响应吞下整张表",
    "subheading": "offset 简单游标稳，meta 里要有 next/prev 或 cursor，别只给数组。",
    "scene": "深分页 ?page=5000&size=20 把 MySQL 拖到超时，改 cursor-based 后 P99 恢复正常。",
    "core": "offset/limit 易实现但深页慢；cursor（after_id）稳定适合 feed；响应含 total 或 hasNext 与 link header。",
    "metaphor": "像看书：页码翻（offset）适合短书；书签续读（cursor）适合厚书且中间插页也不乱。",
    "mistake": "分页参数无上限，?size=100000 一次拖垮服务；或 cursor 可伪造遍历全库。",
    "confusion": "total count 在大表很贵，可以 hasNext 代替精确 total。",
    "experiment": "实现 users 两种分页，压测 page=1 vs page=5000 对比 DB 扫描行数。",
    "route": [
      {
        "label": "选模式",
        "title": "offset vs cursor",
        "text": "管理后台 offset；时间线 feed 用 cursor。"
      },
      {
        "label": "限 size",
        "title": "max 100",
        "text": "超过拒绝或截断并文档说明。"
      },
      {
        "label": "返 meta",
        "title": "next_cursor/has_next",
        "text": "客户端不用猜还有没有页。"
      },
      {
        "label": "保序",
        "title": "稳定 sort key",
        "text": "cursor 必须含 tie-breaker 如 id。"
      }
    ]
  },
  "Idempotency": {
    "heading": "幂等性：重复请求不应重复后果",
    "subheading": "支付、创建、回调最怕 retry；幂等键是 API 与分布式交易的安全带。",
    "scene": "用户双击支付按钮，两笔扣款；补 Idempotency-Key 后第二次返回同一 receipt 不再扣。",
    "core": "幂等：同一语义多次执行结果相同；POST 创建用 Idempotency-Key 存 request hash+response；GET/PUT/DELETE 天然更易幂等。",
    "metaphor": "像银行回执号：同一单号提交多次，柜台只办一次业务。",
    "mistake": "幂等键 TTL 太短，隔天重试又创建一条；或键作用域跨用户可碰撞。",
    "confusion": "幂等≠去重消息队列语义相同但层不同；HTTP 层键要落库或 Redis。",
    "experiment": "POST /payments 带 Idempotency-Key: uuid，连发两次对比 DB 行数与响应 body。",
    "route": [
      {
        "label": "定键",
        "title": "Header Idempotency-Key",
        "text": "客户端生成 UUID，24h 内同键同响应。"
      },
      {
        "label": "存结果",
        "title": "processing/done",
        "text": "先占位防并发双执行，完成后缓存响应。"
      },
      {
        "label": "标方法",
        "title": "POST 重点",
        "text": "GET 幂等也要防副作用参数误用。"
      },
      {
        "label": "写文档",
        "title": "retry 指南",
        "text": "告诉客户端哪些码可安全重试。"
      }
    ]
  },
  "Streaming Responses": {
    "heading": "流式响应：边算边发，不必等全量就绪",
    "subheading": "大导出、AI token 流、日志 tail 都适合 chunked/streaming，客户端要按块解析。",
    "scene": "LLM 接口等 30s 才返回整段 JSON，用户以为卡死；改 Transfer-Encoding: chunked 逐 token 输出体验立刻改善。",
    "core": "HTTP chunked、gRPC server streaming、NDJSON 行流；需 flush、超时、客户端背压与中途 cancel。",
    "metaphor": "像自来水管：不必等整缸水打满才开龙头，有压力就滴出来。",
    "mistake": "中间代理缓冲整个 body，流式名存实亡；或未处理客户端断开仍全量计算。",
    "confusion": "流式≠WebSocket；单向 HTTP 流更简单，双向才考虑 WS。",
    "experiment": "实现 /logs/stream 返回 NDJSON，curl -N 观察逐行输出与 Ctrl+C 后服务端是否停算。",
    "route": [
      {
        "label": "选格式",
        "title": "chunked/NDJSON/SSE",
        "text": "按客户端解析能力选，文档写清。"
      },
      {
        "label": "关缓冲",
        "title": "nginx/proxy",
        "text": "X-Accel-Buffering: no 等配置要测。"
      },
      {
        "label": "可取消",
        "title": "context cancel",
        "text": "客户端断开立即停止昂贵计算。"
      },
      {
        "label": "定边界",
        "title": "帧/行协议",
        "text": "每条消息如何分隔，防半包解析错。"
      }
    ]
  },
  "Rate Limiting": {
    "heading": "限流：保护 API 不被突发流量打穿",
    "subheading": "429 + Retry-After 是礼貌拒绝；限流键要分用户、IP、API Key。",
    "scene": "促销零点爬虫把登录接口打挂，无限流；加令牌桶 100rpm/key 后误伤正常用户，因没白名单与 burst。",
    "core": "算法：固定窗口、滑动窗口、令牌桶、漏桶；响应 429，头 X-RateLimit-Limit/Remaining/Reset；网关或服务内实现。",
    "metaphor": "像景区限流闸机：每分钟进 N 人，满了排队或改日（Retry-After）。",
    "mistake": "只限 IP 不限 key，NAT 下误伤；或 429 无 Retry-After 客户端疯狂重试。",
    "confusion": "限流（rate limit）与节流（throttle）常混用，前者硬拒，后者可排队减速。",
    "experiment": "对 /api 加 10 req/s 限流，ab 压测观察 429 比例与 Retry-After 头。",
    "route": [
      {
        "label": "选算法",
        "title": "token bucket",
        "text": "允许 burst 更人性化，文档说明 burst。"
      },
      {
        "label": "定维度",
        "title": "user/key/ip",
        "text": "分层限流：全站、租户、端点各自配额。"
      },
      {
        "label": "返头",
        "title": "429 + Retry-After",
        "text": "Remaining 头帮助客户端自适应。"
      },
      {
        "label": "可观测",
        "title": "限流指标",
        "text": "监控触顶租户，区分攻击与业务增长。"
      }
    ]
  },
  "Error Handling": {
    "heading": "错误处理：可预测、可程序化的失败",
    "subheading": "好错误告诉调用方「错在哪、能否重试、找谁」，而不是一坨 stack trace。",
    "scene": "合作方集成失败，响应 500 body 是 Java 堆栈；改成 code+message+field 后对接从两周缩到两天。",
    "core": "分层：4xx 客户端、5xx 服务端；body 含 machine-readable code、human message、可选 field 级 detail；日志留 traceId 不泄露内部。",
    "metaphor": "像医院分诊：轻症指引门诊（400），重症转急诊（500），别把所有人都扔 ICU。",
    "mistake": "catch Exception 一律 500；或 200 包 error 字段骗过监控。",
    "confusion": "业务错误（余额不足）与协议错误（缺字段）应用不同 status 与 code。",
    "experiment": "列 10 种失败场景，每种定 status、code、是否可重试，写入错误码表。",
    "route": [
      {
        "label": "分家族",
        "title": "4xx vs 5xx",
        "text": "责任方先分清，再定细码。"
      },
      {
        "label": "结构化",
        "title": "code/message/details",
        "text": "客户端 switch code，不 parse 中文。"
      },
      {
        "label": "藏内幕",
        "title": "生产无 stack",
        "text": "详情进日志+traceId，响应给安全信息。"
      },
      {
        "label": "文档化",
        "title": "错误码表",
        "text": "OpenAPI responses 枚举每种错误。"
      }
    ]
  },
  "RFC 7807 -  Problem Details": {
    "heading": "RFC 7807：application/problem+json 标准错误体",
    "subheading": "type/title/status/detail/instance 五字段让错误跨框架可互认。",
    "scene": "三个微服务错误 JSON 各写各的，BFF 聚合痛苦；统一 problem+json 后前端一个 ErrorBanner 组件搞定。",
    "core": "Problem Details 媒体类型 application/problem+json；type 是 URI 标识错误类；instance 指向本次失败 URI；可扩展字段。",
    "metaphor": "像标准事故报告单：格式固定，交警、保险、4S 店都能读同一份。",
    "mistake": "type 用随便字符串非 URI；或 detail 里泄露 SQL。",
    "confusion": "7807 是错误体格式，不替代选哪个 HTTP status；status 字段应一致。",
    "experiment": "把现有 404/422 改成 {\"type\":\".../not-found\",\"title\":\"...\",\"status\":404,\"instance\":\"/users/9\"}。",
    "route": [
      {
        "label": "定 type",
        "title": "稳定 URI",
        "text": "https://api.example.com/problems/validation 可文档化。"
      },
      {
        "label": "对齐码",
        "title": "status 一致",
        "text": "HTTP 404 则 body.status=404。"
      },
      {
        "label": "加扩展",
        "title": "errors[]",
        "text": "校验失败可附 field 数组，仍用 problem 外壳。"
      },
      {
        "label": "全局化",
        "title": "ExceptionHandler",
        "text": "框架层统一输出，controller 抛领域异常即可。"
      }
    ]
  },
  "Basic Auth": {
    "heading": "Basic Auth：Authorization 头里的用户名密码",
    "subheading": "Base64 编码不是加密，只适合 HTTPS 与简单场景或开发态。",
    "scene": "内网运维脚本用 curl -u admin:pass 调管理 API，简单有效；有人把同样方式用在公网 HTTP 被嗅探。",
    "core": "Header Authorization: Basic base64(user:pass)；服务端解码校验；无 refresh，依赖 TLS 保密。",
    "metaphor": "像明文密码塞进信封：信封为 HTTPS 时路上看不见，信封本身不加密。",
    "mistake": "HTTP 明文传 Basic；或长期不换密码，Base64 被当日志存永久凭证。",
    "confusion": "Basic Auth ≠ 登录页面 session；每次请求都带凭证，无登出除非换密码。",
    "experiment": "curl -u user:pass https://api/admin -v，看 Authorization 头与 401 WWW-Authenticate。",
    "route": [
      {
        "label": "强制 TLS",
        "title": "HTTPS only",
        "text": "公网禁用 HTTP Basic，内网也要评估。"
      },
      {
        "label": "限范围",
        "title": "管理/工具 API",
        "text": "不适合大规模用户登录，适合脚本。"
      },
      {
        "label": "配 401",
        "title": "WWW-Authenticate",
        "text": "挑战头格式正确，便于标准客户端。"
      },
      {
        "label": "轮换密",
        "title": "定期换密码",
        "text": "无 token 撤销，泄露影响直到改密。"
      }
    ]
  },
  "JWT": {
    "heading": "JWT：自包含的三段式令牌",
    "subheading": "Header.Payload.Signature 可离线验签，但要管密钥、过期与撤销。",
    "scene": "JWT 放 localStorage 被 XSS 偷走；改 HttpOnly Cookie + 短 exp + refresh 后风险降，但 logout 要黑名单。",
    "core": "JWT 含 claims（sub、exp、aud）；HMAC 或 RSA 签名；服务端验签不查库即可认人，但 revoke 需黑名单或短 TTL。",
    "metaphor": "像加盖钢印的通行证：门卫看印（签名）知身份，但丢证要挂失名单（黑名单）。",
    "mistake": "alg:none 漏洞、密钥过弱、payload 存密码与 PII、exp 设十年。",
    "confusion": "JWT 是载体不是会话方案；refresh/access 分工与存储位置要整体设计。",
    "experiment": "jwt.io 解码样例，改 exp 或 signature 一位，看服务端拒否。",
    "route": [
      {
        "label": "选 alg",
        "title": "RS256/ES256",
        "text": "非对称便于多服务验签，私钥只签发端。"
      },
      {
        "label": "控 claims",
        "title": "sub/exp/aud",
        "text": "少而精，不放敏感与过大 payload。"
      },
      {
        "label": "管撤销",
        "title": "短 TTL+refresh",
        "text": "或 Redis jti 黑名单，logout 要生效。"
      },
      {
        "label": "防 XSS",
        "title": "存储位置",
        "text": "浏览器优先 HttpOnly Cookie 或内存，慎 localStorage。"
      }
    ]
  },
  "Token Based Auth": {
    "heading": "基于令牌的认证：无状态凭证贯穿请求",
    "subheading": "Bearer token 在 Authorization 头，适合 SPA、App 与微服务；要过期与刷新策略。",
    "scene": "App 把 token 写 SharedPreferences 永不过期，被盗后无法失效；引入 refresh rotation 后安全事件可收敛。",
    "core": "登录换 access token（短）+ refresh token（长）；请求带 Authorization: Bearer；服务端验 token 或 introspection。",
    "metaphor": "像酒店房卡：短期能开门（access），前台可续住（refresh），丢卡可挂失。",
    "mistake": "access 与 refresh 同权同寿命；或 refresh 放 URL query 进日志。",
    "confusion": "Token 认证仍可有服务端 session 存 refresh；「无状态」指 access 验证不查库。",
    "experiment": "实现 login→access 15m→refresh 换票→logout 废 refresh 全链路 Postman 集合。",
    "route": [
      {
        "label": "双 token",
        "title": "access/refresh",
        "text": "access 短、refresh 长且仅换票端点可用。"
      },
      {
        "label": "放头",
        "title": "Authorization Bearer",
        "text": "别混 query/cookie 除非设计 Cookie 方案。"
      },
      {
        "label": "做轮换",
        "title": "refresh rotation",
        "text": "每次刷新发新 refresh，旧作废旧链。"
      },
      {
        "label": "写客户端",
        "title": "401 刷新",
        "text": "统一拦截 401 尝试 refresh 一次再跳登录。"
      }
    ]
  },
  "Authentication Methods": {
    "heading": "认证方式概览：证明「你是谁」",
    "subheading": "密码、API Key、mTLS、OAuth、SSO 各适场景；API 设计要暴露清晰的 401 挑战。",
    "scene": "B2B 用 API Key，C 端用 OAuth 社交登录，内部服务 mTLS——全塞进一种 Basic 密码灾难。",
    "core": "认证方法：知识（密码）、持有（token/key）、属性（生物/设备）；HTTP 层 401 + WWW-Authenticate 提示可用方案。",
    "metaphor": "像进门：工牌（token）、指纹（WebAuthn）、访客登记（API Key）不同门不同验法。",
    "mistake": "把认证与授权混在一层，403 当登录失败用；或多方案并存无文档。",
    "confusion": "Authentication（是谁）≠ Authorization（能做什么）；先 401 再 403。",
    "experiment": "画矩阵：客户端类型×推荐认证方式×头字段，贴到 API 指南首页。",
    "route": [
      {
        "label": "分场景",
        "title": "人 vs 机器",
        "text": "用户 OAuth/SSO；服务 API Key/mTLS。"
      },
      {
        "label": "标准化",
        "title": "401/403",
        "text": "未登录 401，已登录无权限 403。"
      },
      {
        "label": "多因素",
        "title": "MFA/WebAuthn",
        "text": "敏感操作二次验证。"
      },
      {
        "label": "可扩展",
        "title": "WWW-Authenticate",
        "text": "告知支持的 scheme，便于 SDK。"
      }
    ]
  },
  "OAuth 2.0": {
    "heading": "OAuth 2.0：授权而非代传密码",
    "subheading": "用户把有限权限委托给第三方，access token 代表授权范围而非账号密码。",
    "scene": "App 要读 GitHub 仓库，OAuth 授权后拿 token 只含 repo scope，用户可随时在设置里撤销。",
    "core": "Grant types：Authorization Code+PKCE（公网客户端）、Client Credentials（服务间）；token endpoint 换票；scope 限权。",
    "metaphor": "像授权接力：用户把接力棒（授权码）交给 App，App 再换正式通行证（access token），全程不传密码。",
    "mistake": "移动端用隐式 flow；或 redirect_uri 校验不严被劫持 code。",
    "confusion": "OAuth 解决授权；OpenID Connect 在其上解决身份（id_token）。",
    "experiment": "注册 OAuth App，走 Auth Code+PKCE，抓 token 响应看 scope 与 expires_in。",
    "route": [
      {
        "label": "选 flow",
        "title": "Auth Code+PKCE",
        "text": "公网客户端标配，禁用 implicit。"
      },
      {
        "label": "守 redirect",
        "title": "精确匹配",
        "text": "redirect_uri 白名单，防 code 劫持。"
      },
      {
        "label": "缩 scope",
        "title": "最小权限",
        "text": "只要 read 不要 write+admin。"
      },
      {
        "label": "管刷新",
        "title": "refresh token",
        "text": "机密客户端可存 refresh，公开客户端谨慎。"
      }
    ]
  },
  "OIDC": {
    "heading": "OpenID Connect：OAuth 之上的身份层",
    "subheading": "id_token（JWT）告诉客户端用户是谁，userinfo 补 profile；单点登录标配。",
    "scene": "企业 SaaS「用 Google 登录」，OIDC 返回 id_token sub=google-user-id，本地自动建号绑 federation。",
    "core": "OIDC = OAuth2 + id_token + discovery（/.well-known/openid-configuration）+ userinfo endpoint；nonce 防重放。",
    "metaphor": "像 OAuth 办了入场券，OIDC 再发一张带照片的身份证（id_token）。",
    "mistake": "只验 access token 不验 id_token iss/aud/exp；或省略 nonce 遭 mix-up。",
    "confusion": "OIDC id_token 给客户端认人；access token 给 resource server 访问 API。",
    "experiment": "用 Keycloak/Google 走 OIDC，解码 id_token 对照 userinfo 字段。",
    "route": [
      {
        "label": "走 discovery",
        "title": ".well-known",
        "text": "自动拿 authorization/token/jwks URI。"
      },
      {
        "label": "验 id_token",
        "title": "iss/aud/exp/nonce",
        "text": "JWKS 验签，拒绝过期与错 aud。"
      },
      {
        "label": "绑账号",
        "title": "sub+iss 唯一",
        "text": "联邦身份用 sub+issuer 做外部 ID。"
      },
      {
        "label": "分 token",
        "title": "id vs access",
        "text": "API 调用带 access；登录会话用 id_token claims。"
      }
    ]
  },
  "ABAC": {
    "heading": "ABAC：按属性动态决策谁能做什么",
    "subheading": "用户、资源、环境、动作四维属性组合规则，细粒度但策略引擎复杂。",
    "scene": "「经理只能在工作时间从公司 IP 审批本部门 ≤10 万订单」——RBAC 角色堆爆，ABAC 一条策略表达。",
    "core": "ABAC 评估 subject/resource/action/environment 属性；策略语言如 XACML；适合多租户与合规细规则。",
    "metaphor": "像机场安检：不只看出票（角色），还看液体容量、航班类型、是否国际（多属性组合）。",
    "mistake": "策略无测试与版本，改一条规则全站 403；或属性源不一致导致决策漂移。",
    "confusion": "ABAC 常与 RBAC 混合：RBAC 粗筛，ABAC 细判。",
    "experiment": "写三条 policy JSON：time、dept、amount，用单元测试喂不同属性向量验 allow/deny。",
    "route": [
      {
        "label": "建属性",
        "title": "subject/resource/env",
        "text": "属性从哪来、谁维护、缓存多久。"
      },
      {
        "label": "写策略",
        "title": "可测规则",
        "text": "策略即代码，PR 评审+测试矩阵。"
      },
      {
        "label": "选引擎",
        "title": "OPA/Cedar",
        "text": "集中评估，API 网关或 sidecar 调用。"
      },
      {
        "label": "可解释",
        "title": "deny reason",
        "text": "403 返回哪条 policy 失败，方便排障。"
      }
    ]
  },
  "DAC": {
    "heading": "DAC：资源所有者自主授权",
    "subheading": "创建者决定谁可读写的discretionary 模型，协作产品常见。",
    "scene": "云盘文件 Alice 创建，她点「分享给 Bob 只读」——权限由 Alice discretionary 分配，非管理员统一 RBAC。",
    "core": "DAC 资源有 owner，owner 可 grant/revoke 其他 subject 权限；灵活但难审计与防内部泄露。",
    "metaphor": "像自家钥匙：房主决定给邻居哪把钥匙，物业（系统）只记录不默认全员进门。",
    "mistake": "分享链接永不过期且无密码，DAC 变公开网盘；或 owner 离职权限未回收。",
    "confusion": "DAC 是模型不是协议；实现上仍是 ACL 表 owner_id + grants。",
    "experiment": "设计 documents 表 owner+acl JSON，实现 share API 与 list my shared 查询。",
    "route": [
      {
        "label": "标 owner",
        "title": "创建者默认全权",
        "text": "transfer ownership 要明确 API。"
      },
      {
        "label": "做分享",
        "title": "grant/revoke",
        "text": "粒度 read/write/admin，带 expires。"
      },
      {
        "label": "审继承",
        "title": "文件夹继承",
        "text": "子资源是否继承父 ACL 要写清。"
      },
      {
        "label": "离职回收",
        "title": "owner 变更",
        "text": "HR 事件触发权限迁移 workflow。"
      }
    ]
  },
  "PBAC": {
    "heading": "PBAC：基于策略的集中授权",
    "subheading": "策略与代码分离，统一存储评估，接近 ABAC 但强调 policy 生命周期管理。",
    "scene": "金融 API 合规策略 quarterly 更新，PBAC 策略库发版回滚，不用改每个微服务 if 语句。",
    "core": "PBAC 将 allow/deny 写成可版本化 policy，PDP 集中决策，PEP 在 API 网关嵌入；审计策略变更。",
    "metaphor": "像交通法规汇编：交警（PEP）查车，法条（policy）全国统一修订，不是每个路口自定规矩。",
    "mistake": "策略与实现脱节，文档说允许实际 deny；或无 dry-run 直接上生产。",
    "confusion": "PBAC 与 ABAC 边界模糊；PBAC 更强调 governance 与 policy store。",
    "experiment": "用 OPA Rego 写 allow 规则，API 请求 POST /opa/eval 对照网关决策。",
    "route": [
      {
        "label": "集中存",
        "title": "policy repo",
        "text": "Git 管理策略，CI 测后再 publish。"
      },
      {
        "label": "嵌 PEP",
        "title": "网关 sidecar",
        "text": "统一 ask PDP，业务服务少写权限 if。"
      },
      {
        "label": "版本化",
        "title": "rollback",
        "text": "策略 bad deploy 能快速回滚。"
      },
      {
        "label": "审计",
        "title": "who changed policy",
        "text": "合规要求策略变更留痕。"
      }
    ]
  },
  "Session Based Auth": {
    "heading": "Session 认证：服务端记住你是谁",
    "subheading": "sessionId 在 Cookie，状态存服务端 Redis，适合传统 Web 与即时撤销。",
    "scene": "用户点退出，服务端删 Redis session 立刻失效；JWT-only 方案则要等 exp 或维护黑名单。",
    "core": "登录成功创建 session 存用户态，Set-Cookie sessionId；每次请求查 store；可 sliding expiration 与集中 logout。",
    "metaphor": "像游泳馆手环：前台（服务端）有登记册，手环丢了前台一划就作废。",
    "mistake": "session 固定 ID 可预测；或 store 无 TTL 内存泄漏；跨域 Cookie 配置错误。",
    "confusion": "Session 是有状态认证；与 JWT 无状态可并存（session 存 refresh）。",
    "experiment": "实现 login→Cookie→/me→logout，Redis 里观察 key 创建与删除。",
    "route": [
      {
        "label": "存 store",
        "title": "Redis 集群",
        "text": "多实例共享 session，设 TTL。"
      },
      {
        "label": "加固 Cookie",
        "title": "HttpOnly Secure SameSite",
        "text": "防 XSS/CSRF 基础套餐。"
      },
      {
        "label": "做续期",
        "title": "sliding window",
        "text": "活跃用户延长，闲置过期。"
      },
      {
        "label": "扩规模",
        "title": "sticky vs 共享",
        "text": "优先共享 store 少粘会话。"
      }
    ]
  },
  "Authorization Methods": {
    "heading": "授权方法：决定「你能做什么」",
    "subheading": "认证通过后，RBAC/ABAC/scope 决定能否调这个 endpoint 与看到哪些字段。",
    "scene": "实习生 token 有效但调 DELETE /users 应 403；现在返回 200 删成功，授权层缺失。",
    "core": "授权在网关或服务内评估：角色、scope、资源 ownership、policy；拒绝用 403 + 可选 insufficient_scope。",
    "metaphor": "像进实验室：门禁刷卡（认证）过了，还要白大褂权限（授权）才能进危化品室。",
    "mistake": "只检查登录不检查操作；或权限逻辑散落各 controller 无法审计。",
    "confusion": "OAuth scope 是授权；API Key 也常绑 scope 与 IP 白名单。",
    "experiment": "为 admin/user/guest 三角色矩阵化每个 endpoint allow/deny，自动化测试扫一遍。",
    "route": [
      {
        "label": "分层",
        "title": "gateway + service",
        "text": "粗粒度网关，细粒度资源层。"
      },
      {
        "label": "用 scope",
        "title": "orders:read",
        "text": "OAuth 与 API Key 都映射 scope。"
      },
      {
        "label": "返 403",
        "title": "清晰拒绝",
        "text": "区分未登录 401 与无权限 403。"
      },
      {
        "label": "审日志",
        "title": "deny 审计",
        "text": "敏感拒绝记录 who/when/what。"
      }
    ]
  },
  "RBAC": {
    "heading": "RBAC：角色绑定权限的经典模型",
    "subheading": "user→role→permission，适合后台与 enterprise；角色爆炸时要分层。",
    "scene": "「财务审核员」角色只有 invoices:approve，新人误绑 admin 角色一键全开，要有 role 申请审批流。",
    "core": "RBAC 用户分配角色，角色聚合权限（API/action/resource）；可 RBAC0-3 含角色继承与约束。",
    "metaphor": "像公司职级：经理牌能批请假，实习牌只能打卡，牌（角色）决定权限包。",
    "mistake": "一人多角色并集无上限；或 permission 字符串无命名空间 orders:read vs read_orders 混用。",
    "confusion": "RBAC 管功能权限；数据权限（只看本部门）常要 ABAC 或 ReBAC 补充。",
    "experiment": "建 roles admin/editor/viewer 与 permissions 表，中间件 check(role, permission)。",
    "route": [
      {
        "label": "建模",
        "title": "user-role-perm",
        "text": "多对多表结构，迁移脚本可重复。"
      },
      {
        "label": "命名",
        "title": "resource:action",
        "text": "orders:read 稳定可搜索。"
      },
      {
        "label": "防膨胀",
        "title": "角色继承",
        "text": "base→senior 继承，少复制 permission。"
      },
      {
        "label": "审计",
        "title": "role assignment",
        "text": "谁何时给谁加了 admin 要可查。"
      }
    ]
  },
  "MAC": {
    "heading": "MAC：强制访问控制与密级标签",
    "subheading": "系统强制、用户不能自改标签，政企高密场景；API 按 clearance 过滤字段。",
    "scene": "军工文档分绝密/机密/秘密，用户不能自行把绝密文件「分享」给秘密级同事——DAC 不允许，MAC 强制。",
    "core": "MAC 主体与客体带安全标签，系统策略决定 read/write；用户不能降级标签；常见于政府、国防系统。",
    "metaphor": "像化学品柜：标签颜色定死，红柜只能红标人员开，不能自己贴个绿标混进去。",
    "mistake": "在普通 SaaS 硬套 MAC 复杂度爆表；或标签同步滞后导致越权读。",
    "confusion": "MAC 与 DAC 对立：DAC 用户可分享，MAC 用户不能越权改标签。",
    "experiment": "设计 resource.label、user.clearance，写规则 deny read if label > clearance。",
    "route": [
      {
        "label": "定标签",
        "title": "分级体系",
        "text": "标签枚举与排序规则写死。"
      },
      {
        "label": "强策略",
        "title": "系统 enforce",
        "text": "无 user override 分享接口。"
      },
      {
        "label": "滤字段",
        "title": "响应裁剪",
        "text": "同级不同 compartment 也要过滤。"
      },
      {
        "label": "评适用",
        "title": "是否真需要 MAC",
        "text": "多数商业 API 用 RBAC+ABAC 足够。"
      }
    ]
  },
  "ReBAC": {
    "heading": "ReBAC：用关系图做授权",
    "subheading": "Google Zanzibar 思路：user 与 resource 的关系边决定 access，适合社交与协作。",
    "scene": "「Alice 是 doc-1 的 editor，Bob 是 viewer，Alice 所在 team 对 folder 有 admin」——关系组合出权限。",
    "core": "ReBAC 存 tuple (user, relation, object)；查询 check(user, edit, doc)；支持 group 继承与递归 expand。",
    "metaphor": "像社交网络关注链：你是群成员→群有仓库权限→你能 push，关系传递而非单角色。",
    "mistake": "关系图无索引 check 慢；或 tuple 与业务 DB 双写不一致。",
    "confusion": "ReBAC 是细粒度数据权限；与 RBAC 功能权限常组合使用。",
    "experiment": "用 SpiceDB/OpenFGA 写 user:alice#editor@doc:1，调用 Check API 验证。",
    "route": [
      {
        "label": "建 tuple",
        "title": "relation triple",
        "text": "增删关系即授权变更 API。"
      },
      {
        "label": "做继承",
        "title": "folder→doc",
        "text": "父资源关系向下继承规则定义清。"
      },
      {
        "label": "性能",
        "title": "check 缓存",
        "text": "热路径 check 要 ms 级，监控 depth。"
      },
      {
        "label": "同步",
        "title": "业务事件",
        "text": "删用户时清理相关 tuple。"
      }
    ]
  },
  "Key Generation & Rotation": {
    "heading": "密钥生成与轮换：JWT 签名与 API Key 的生命周期",
    "subheading": "密钥泄露是全场事故；生成要够随机，轮换要不宕机。",
    "scene": "JWT 只用一把 HS256 密钥三年没换，离职 DevOps 仍知密钥；改 RS256 双钥 JWKS 平滑轮换。",
    "core": "API Key/JWT signing key：密码学安全随机；轮换支持 kid 多钥验签；旧钥 grace period；泄露立即 revoke。",
    "metaphor": "像换门锁：新钥匙先发（新 kid），旧锁还能开一阵（overlap），到期只认新钥。",
    "mistake": "密钥进 Git；或轮换无 overlap 全站 401；API Key 无 last-used 监控。",
    "confusion": "对称钥轮换难（都要换）；非对称公钥 JWKS 轮换更平滑。",
    "experiment": "部署双 JWKS key，签发用新 kid，验签两个 kid 都接受，一周后下线旧钥。",
    "route": [
      {
        "label": "生成",
        "title": "CSPRNG/HSM",
        "text": "长度与算法符合 NIST 建议。"
      },
      {
        "label": "JWKS",
        "title": "kid+rotate",
        "text": "公开 /.well-known/jwks.json 多钥。"
      },
      {
        "label": "API Key",
        "title": "hash 存储",
        "text": "库中只存 hash，明文只展示一次。"
      },
      {
        "label": "监控",
        "title": "last_used_at",
        "text": "长期未用 key 自动 disable 提醒。"
      }
    ]
  },
  "Swagger / Open API": {
    "heading": "Swagger / OpenAPI：机器可读的 API 契约",
    "subheading": "openapi.yaml 驱动文档、Mock、Codegen 与 contract test，是 API 的「施工图」。",
    "scene": "前后端并行，OpenAPI 3.1 spec 评审通过后 codegen 出 TS 类型，联调零「字段名猜错」。",
    "core": "OpenAPI 描述 paths、components、schemas、securitySchemes；Swagger UI 渲染；Spectral lint 保质量。",
    "metaphor": "像建筑 BIM 模型：工人（客户端/服务端）看同一张图施工，改墙位置（字段）大家同步知道。",
    "mistake": "spec 与实现漂移无人管；或 example 是假的从未跑通。",
    "confusion": "Swagger 2.0 旧称；OpenAPI 3.x 是当前规范，Swagger UI 是渲染工具。",
    "experiment": "写最小 openapi.yaml 含 one path+schema，起 Swagger UI 与 prism mock。",
    "route": [
      {
        "label": "先 spec",
        "title": "design first",
        "text": "PR 改 spec 再改实现，或 CI 比对 diff。"
      },
      {
        "label": "复用",
        "title": "components/schemas",
        "text": "Error、Pagination 抽 components。"
      },
      {
        "label": "lint",
        "title": "Spectral rules",
        "text": "命名、example、security 必填。"
      },
      {
        "label": "联动",
        "title": "codegen/mock/test",
        "text": "一条 spec 多条流水线。"
      }
    ]
  },
  "API Keys & Management": {
    "heading": "API Key 与管理：机器身份的简易通行证",
    "subheading": "Header 或 query 带 key，适合 B2B 与 server-to-server；要轮换、限权与审计。",
    "scene": "合作方 key 泄露在 GitHub，因无 IP 白名单与 scope，被刷 200 万次翻译接口。",
    "core": "API Key 标识租户/应用；存储 hash；绑定 scope、rate limit、expires；管理台创建/撤销/轮换与用量账单。",
    "metaphor": "像停车月卡：一卡一车场（scope），丢卡挂失（revoke），到期续（rotate）。",
    "mistake": "key 永不过期无 scope；或 query 传 key 进 access log。",
    "confusion": "API Key 是认证+粗授权；高敏仍要 OAuth 或 mTLS 补充。",
    "experiment": "实现 X-API-Key 中间件+管理页创建 key 只显示一次明文，调 /api 验证 revoke 立刻 401。",
    "route": [
      {
        "label": "只 hash",
        "title": "库不存明文",
        "text": "创建时展示一次，丢则 rotate。"
      },
      {
        "label": "绑 scope",
        "title": "translate:read",
        "text": "key 最小权限，分环境 key。"
      },
      {
        "label": "加白名单",
        "title": "IP/CIDR",
        "text": "B2B 常用，防 key 外流滥用。"
      },
      {
        "label": "看用量",
        "title": "usage dashboard",
        "text": "按 key 计费与异常检测。"
      }
    ]
  },
  "Scopes & Permissions": {
    "heading": "Scope 与权限：OAuth 与 API 的能力切片",
    "subheading": "scope 字符串声明令牌能访问哪些资源与操作，授权页用户可见。",
    "scene": "日历 App 申请 calendar:write+email:read，用户只批 calendar:read，token 带降 scope 调写接口 403。",
    "core": "scope 命名 resource:action 或 URL 风格；token 携带 scope 集合；resource server 校验每个请求所需 scope 子集。",
    "metaphor": "像酒店房卡只开 1208 不开健身房——scope 是开哪些「门」的清单。",
    "mistake": "scope 粒度过粗 all:admin；或 scope 字符串无文档枚举。",
    "confusion": "scope（OAuth）与 RBAC permission 要映射表，别两套各说各话。",
    "experiment": "定义 users:read/users:write scope，发不同 token 调 GET/POST /users 测 403 矩阵。",
    "route": [
      {
        "label": "命名",
        "title": "resource:action",
        "text": "稳定、可扩展、文档表格式列出。"
      },
      {
        "label": "授权页",
        "title": "用户可读",
        "text": "scope 映射中文说明，避免 internal:foo。"
      },
      {
        "label": "校验",
        "title": "required scope",
        "text": "endpoint 声明所需 scope，中间件统一检。"
      },
      {
        "label": "映射 RBAC",
        "title": "scope→role",
        "text": "企业版常把 role 展开为 scope 集合。"
      }
    ]
  },
  "Readme.com": {
    "heading": "Readme.com：开发者门户与交互文档",
    "subheading": "API 文档、Try It、changelog、开发者仪表盘一体，适合对外 Developer Portal。",
    "scene": "开源 SDK 下载量低，迁 Readme 后文档内嵌「Run in Postman」与 API key 试用，注册转化升 40%。",
    "core": "Readme 托管 MD/OAS、版本化文档、metrics（谁看了哪页）、custom domain 与 login 看私有 doc。",
    "metaphor": "像 API 的官方旗舰店：说明书、试用台、售后（support）都在一个门脸。",
    "mistake": "文档与生产 spec 不同步；Try It 指向 staging 用户却用生产 key。",
    "confusion": "Readme 是平台不是规范；OpenAPI 仍要源 repo 维护。",
    "experiment": "导入 openapi.json 到 Readme，开 Try It 调通一条 GET，看 request logs。",
    "route": [
      {
        "label": "导 OAS",
        "title": "CI 同步",
        "text": "发布 API 时自动 push spec 到 Readme。"
      },
      {
        "label": "写指南",
        "title": "quickstart",
        "text": "3 步拿到 first 200，比端点罗列重要。"
      },
      {
        "label": "开指标",
        "title": "doc analytics",
        "text": "哪页跳出高说明写不清。"
      },
      {
        "label": "管密钥",
        "title": "dashboard key",
        "text": "开发者自助申请 sandbox key。"
      }
    ]
  },
  "Stoplight": {
    "heading": "Stoplight：设计优先的 API 工作台",
    "subheading": "Studio 编辑 OpenAPI、Mock、Spectral 规则与文档发布，适合团队协作定契约。",
    "scene": "产品改字段在 Stoplight Studio 讨论 diff，Spectral 红灯拦下 breaking change 才合并。",
    "core": "Stoplight = 可视化 OAS 编辑 + mock server + style guide + 文档站；Git 同步 spec。",
    "metaphor": "像 API 的 Figma+lint：设计（schema）和规范（Spectral）在同一画布。",
    "mistake": "Studio 改 spec 不回写 Git，成为第二真相源。",
    "confusion": "Stoplight 与 Postman 有重叠；Stoplight 偏 design-first，Postman 偏测试与集合。",
    "experiment": "用 Stoplight Studio 建 project，加 Spectral 规则 require-operationId，故意违规看提示。",
    "route": [
      {
        "label": "Git 同步",
        "title": "single source",
        "text": "spec 以 repo 为准，Studio 双向 sync。"
      },
      {
        "label": "Mock",
        "title": "prism/内置",
        "text": "前端不等后端用 mock 联调。"
      },
      {
        "label": "Spectral",
        "title": "团队规则",
        "text": "命名、example、security 自定义 lint。"
      },
      {
        "label": "发布",
        "title": "docs site",
        "text": "内网/外网文档从同一 spec 生成。"
      }
    ]
  },
  "API Documentation Tools": {
    "heading": "API 文档工具生态：从 OAS 到开发者体验",
    "subheading": "Swagger UI、Redoc、Bump、Docusaurus 插件等，选对工具减少 spec 漂移。",
    "scene": "三套文档：Wiki、Postman、代码注释各写各的，合作方问「哪个准」——只能指向 generated from OpenAPI。",
    "core": "工具链：OAS 源→lint→Swagger UI/Redoc 渲染→Readme/Stoplight 门户→Postman import→SDK codegen。",
    "metaphor": "像同一菜谱印多语言版：源谱（OAS）不变，印刷厂（工具）不同而已。",
    "mistake": "手写 HTML 文档与 spec 双维护；或只生成 docs 无 changelog。",
    "confusion": "文档工具不替代 good API design；烂 API 文档再漂亮仍难用。",
    "experiment": "同一 openapi.yaml 分别用 Swagger UI 与 Redoc 渲染，比较嵌套 schema 可读性。",
    "route": [
      {
        "label": "定源头",
        "title": "OAS in Git",
        "text": "一切文档从 spec 生成或 CI 校验一致。"
      },
      {
        "label": "选渲染",
        "title": "Swagger vs Redoc",
        "text": "Try It 用 Swagger；阅读用 Redoc。"
      },
      {
        "label": "自动化",
        "title": "CI publish",
        "text": "合并 main 自动部署 docs 站。"
      },
      {
        "label": "写变更",
        "title": "changelog",
        "text": "breaking 与 deprecation 对用户可见。"
      }
    ]
  },
  "Postman": {
    "heading": "Postman：集合、环境与新 API 协作",
    "subheading": "调试用起家，现含 collection、monitor、mock、flow，团队共享 API 请求资产。",
    "scene": "新人 onboarding 导入 Postman Collection+Environment，5 分钟复现 staging 登录链路，不用猜 header。",
    "core": "Collection 组织请求；Environment 变量 baseUrl/token；Tests 脚本断言；CLI/Newman CI 跑集合。",
    "metaphor": "像 API 的瑞士军刀：螺丝刀（单次请求）、盒子（collection）、说明书（docs 同步）。",
    "mistake": "collection 里硬编码生产 token 上传 Git；或无人维护过期接口。",
    "confusion": "Postman 不是文档唯一源；应与 OpenAPI 双向 sync 或 import from spec。",
    "experiment": "建 Collection 含 auth 预脚本自动 refresh token，Newman 跑 CI 断言 200。",
    "route": [
      {
        "label": "变量化",
        "title": "env/baseUrl/token",
        "text": "禁止 secrets 进 repo，用 vault 注入。"
      },
      {
        "label": "写测试",
        "title": "pm.test",
        "text": "状态码+JSON schema 断言进 CI。"
      },
      {
        "label": "同步",
        "title": "import OAS",
        "text": "spec 更新 re-import 或 API sync。"
      },
      {
        "label": "分享",
        "title": "workspace",
        "text": "团队 collection 版本化，owner 明确。"
      }
    ]
  },
  "Best Practices": {
    "heading": "API 最佳实践：十年教训浓缩成 checklist",
    "subheading": "一致、可预测、可演进、可观测——比追新框架更重要。",
    "scene": "Review 新 payment API：有 idempotency、problem+json、429、OpenAPI example、deprecation 头——一次过。",
    "core": "实践要点：RESTful 一致、错误结构化、分页限流、版本弃用、安全默认、文档即测试、关联 traceId。",
    "metaphor": "像飞行员检查单：起飞前逐项勾，不靠记忆赌运气。",
    "mistake": "每个服务一套错误格式与命名，BFF 聚合成噩梦。",
    "confusion": "最佳实践要团队化（lint+review），不是个人英雄主义。",
    "experiment": "写 20 条 API checklist 贴 PR 模板，随机抽三个旧接口对照打分改进。",
    "route": [
      {
        "label": "一致性",
        "title": "命名/错误/分页",
        "text": "跨服务复制 components/schemas。"
      },
      {
        "label": "可演进",
        "title": "加不删改",
        "text": "sunset 流程与监控 v1 流量。"
      },
      {
        "label": "安全默认",
        "title": "HTTPS/auth/rate",
        "text": "开放 endpoint 是显式决定不是遗漏。"
      },
      {
        "label": "可观测",
        "title": "trace+metrics",
        "text": "每个请求可关联日志与 SLO。"
      }
    ]
  },
  "API Security": {
    "heading": "API 安全：纵深防御不是只靠 WAF",
    "subheading": "认证、授权、输入校验、TLS、mTLS、密钥管理、审计与威胁建模缺一不可。",
    "scene": "WAF 挡了 SQLi，但 BOLA 越权读他人订单——授权层没检 resource owner。",
    "core": "OWASP API Top 10 导向：对象级授权、认证破坏、过度数据暴露、限流、安全配置、库存管理。",
    "metaphor": "像银行金库：外门（TLS）、内门（auth）、柜员验章（authz）、监控（audit）多层。",
    "mistake": "只测 happy path 渗透；或 security header 缺 HSTS/CSP 在 API 网关。",
    "confusion": "API Security 含 supply chain（依赖漏洞）与 secret 扫描。",
    "experiment": "用 OWASP ZAP 或 api-security-checklist 扫 staging，修一条 BOLA 与一条 mass assignment。",
    "route": [
      {
        "label": "威胁建模",
        "title": "STRIDE",
        "text": "每个新 endpoint 问谁能滥用。"
      },
      {
        "label": "对象授权",
        "title": "BOLA 测试",
        "text": "换 ID 能否读他人资源。"
      },
      {
        "label": "最小暴露",
        "title": "response DTO",
        "text": "别返回 password hash 内部字段。"
      },
      {
        "label": "审计",
        "title": "敏感操作 log",
        "text": "谁删谁导可追溯不可抵赖。"
      }
    ]
  },
  "Common Vulnerabilities": {
    "heading": "常见 API 漏洞：OWASP API Top 10 落地",
    "subheading": "BOLA、认证失效、过度绑定、无限制资源消耗——每个都有对应测试手法。",
    "scene": "PATCH /users/me 可改 role 字段提权；mass assignment 经典漏洞，DTO 白名单字段才安全。",
    "core": "高频：Broken Object Level Authorization、Broken Auth、Unrestricted Resource Consumption、Unsafe Consumption of APIs。",
    "metaphor": "像门禁系统的经典破法：跟车进门（BOLA）、复制门卡（token 泄露）、塞垃圾邮件（DoS）。",
    "mistake": "以为 HTTPS 就安全；或 GraphQL introspection 生产全开泄露 schema。",
    "confusion": "漏洞与 misconfiguration 不同；8080 暴露 actuator 是配置事故也是风险。",
    "experiment": "选 Top 10 中 3 项写自动化测试：越权 ID、无 limit 分页、verbose error。",
    "route": [
      {
        "label": "BOLA",
        "title": "换 UUID 测",
        "text": "自动化遍历他人 resource id。"
      },
      {
        "label": "Mass assign",
        "title": "DTO 白名单",
        "text": "禁止客户端设 isAdmin。"
      },
      {
        "label": "DoS",
        "title": "size/depth limit",
        "text": "分页上限、GraphQL cost。"
      },
      {
        "label": "依赖",
        "title": "SSRF 出站",
        "text": "webhook URL 校验防打内网。"
      }
    ]
  },
  "Performance Metrics": {
    "heading": "性能指标：latency、吞吐与错误率说清 API 健康",
    "subheading": "P50/P95/P99、RPS、error budget——SLO 要用可观测数据说话。",
    "scene": "平均延迟 50ms 掩盖 P99 2s，大客户在 SLA 里索赔；拆 endpoint 指标后定位到 N+1 查询。",
    "core": "黄金信号：延迟分布、流量、错误率、饱和度；RED/USE 方法；按 route+status 标签聚合。",
    "metaphor": "像体检报告：不能只看平均血压，还要看峰值与趋势。",
    "mistake": "只监控 CPU 不看 P99；或高 cardinality label（userId）打爆 Prometheus。",
    "confusion": "客户端延迟含网络；服务端 metrics 要分 gateway vs origin。",
    "experiment": "给 /orders 加 histogram latency，压测看 P95 随 RPS 曲线拐点。",
    "route": [
      {
        "label": "定 SLO",
        "title": "P99<300ms",
        "text": "按 critical endpoint 分别设。"
      },
      {
        "label": "拆标签",
        "title": "route/method/status",
        "text": "别用 unbounded user id 做 label。"
      },
      {
        "label": "看分布",
        "title": "histogram 非 avg",
        "text": "Dashboard 默认 P50/P95/P99。"
      },
      {
        "label": "关联",
        "title": "trace+metrics",
        "text": "慢请求点进 trace 看 span。"
      }
    ]
  },
  "Caching Strategies": {
    "heading": "缓存策略：HTTP、CDN、应用与数据库多层",
    "subheading": "读多写少 API 靠缓存降本提速；写路径要失效策略，别Serving  stale 订单状态。",
    "scene": "商品详情 Redis 缓存 5min，改价后仍显示旧价 4min——缺 publish 时 cache invalidation 与 key 设计。",
    "core": "层：浏览器/CDN（Cache-Control/ETag）、API 网关、Redis 应用缓存、读 replica；策略 cache-aside/write-through/write-behind。",
    "metaphor": "像便利店备货：热销品（热 key）堆前台，改价要同步撤旧价签（invalidation）。",
    "mistake": "缓存穿透无 bloom、击穿无 singleflight、雪崩同一 TTL 同时过期。",
    "confusion": "HTTP 缓存与 Redis 缓存键不同；个性化响应标 private/no-store。",
    "experiment": "实现 cache-aside GET /product/{id}，更新 POST 后 del key，压测对比 hit rate 与 DB QPS。",
    "route": [
      {
        "label": "分层",
        "title": "CDN/Redis/本地",
        "text": "哪层缓存什么 TTL 写架构图。"
      },
      {
        "label": "防击穿",
        "title": "singleflight",
        "text": "热 key 过期时合并回源。"
      },
      {
        "label": "失效",
        "title": "event driven",
        "text": "写成功发消息删缓存，别只靠 TTL。"
      },
      {
        "label": "测 hit",
        "title": "cache_hit_ratio",
        "text": "监控 miss  spike 与延迟关联。"
      }
    ]
  },
  "Load Balancing": {
    "heading": "负载均衡：把流量分到健康实例",
    "subheading": "L4/L7 均衡、健康检查、会话保持与权重发布，API 高可用基础。",
    "scene": "滚动发布时旧实例已 draining 仍接新连接，502 飙；改 LB 健康检查 /health 与 connection draining。",
    "core": "算法 round-robin/least-conn/consistent hash；K8s Service/Ingress、云 ALB、Nginx upstream；蓝绿/金丝雀配合权重。",
    "metaphor": "像银行多窗口叫号：客户（请求）分到空闲柜台（pod），窗口维修（drain）不再接客。",
    "mistake": "健康检查只 ping TCP 不查 DB；或 sticky session 绑死实例扩缩容失败。",
    "confusion": "客户端 LB（gRPC client side）与服务端 LB 可叠加。",
    "experiment": "两实例 Nginx upstream，停一台看 fail-over 时间；测 least_conn vs round_robin。",
    "route": [
      {
        "label": "健康检",
        "title": "/health ready",
        "text": "liveness vs readiness 分工。"
      },
      {
        "label": "选算法",
        "title": "least-conn/hash",
        "text": "长连接 WS 常用 hash 到固定节点。"
      },
      {
        "label": "发布",
        "title": "drain+weight",
        "text": "金丝雀 5% 流量观察 error rate。"
      },
      {
        "label": "TLS",
        "title": "终止点",
        "text": "LB 终止还是 passthrough 影响证书与 HTTP2。"
      }
    ]
  },
  "API Performance": {
    "heading": "API 性能：端到端延迟的系统性优化",
    "subheading": "序列化、DB、N+1、缓存、连接池、payload 大小——别只怪「服务器不够大」。",
    "scene": "列表 API 200 条 each 嵌 user 对象 N+1 查 201 次 SQL；改 batch load + 字段裁剪 P99 从 800ms 到 40ms。",
    "core": "优化路径：profile→找 top span→减 round trip（聚合/BFF）、索引、缓存、压缩、异步化非关键路径。",
    "metaphor": "像快递提速：少中转（round trip）、小包裹（payload）、热门走本地仓（cache）。",
    "mistake": "无测量乱加 Redis；或 gzip 小 JSON 反而 CPU 升。",
    "confusion": "性能与可扩展性相关但不等同；优化单请求 vs 优化总吞吐目标不同。",
    "experiment": "对慢 endpoint 做 flame graph，改一处 N+1 前后对比 P95 与 DB queries/request。",
    "route": [
      {
        "label": "先测",
        "title": "baseline P95",
        "text": "无数据别优化，避免过早优化。"
      },
      {
        "label": "减往返",
        "title": "batch/join/BFF",
        "text": "合并查询与字段 projection。"
      },
      {
        "label": "缩 body",
        "title": "pagination/fields",
        "text": "GraphQL fields 或 sparse fieldsets。"
      },
      {
        "label": "验回归",
        "title": "load test",
        "text": "每次优化后压测防倒退。"
      }
    ]
  },
  "Rate Limiting / Throttling": {
    "heading": "限流与节流：硬顶与软减速",
    "subheading": "Rate limit 超配额直接 429；throttle 可排队或降优先级，保护核心租户体验。",
    "scene": "免费 tier 1000/day 硬限，企业 tier leaky bucket 允许 burst 500/min；同一网关两套 policy。",
    "core": "实现：网关 Redis 计数、sidecar、WAF；组合 global/tenant/endpoint；throttle 用 queue delay 或 503 Retry-After。",
    "metaphor": "像高速路：限流是封闭入口（429），节流是可变限速牌（减速通过）。",
    "mistake": "限流键设计不当误伤 NAT 用户；或只限 ingress 不限 egress 打爆下游。",
    "confusion": "Quota（日总量）与 rate（秒级）要分开建模与响应头。",
    "experiment": "配置 tenant A 10rps tenant B 100rps，压测验证 429 与 Retry-After 差异。",
    "route": [
      {
        "label": "分层",
        "title": "global/tenant/route",
        "text": "三层配额互不覆盖盲区。"
      },
      {
        "label": "区分",
        "title": "limit vs throttle",
        "text": "文档说明是拒还是慢。"
      },
      {
        "label": "公平",
        "title": "burst+refill",
        "text": "令牌桶参数可配置 tier。"
      },
      {
        "label": "告警",
        "title": "near limit",
        "text": "80% 用量邮件提醒增购。"
      }
    ]
  },
  "Synchronous vs Asynchronous APIs": {
    "heading": "同步与异步 API：等结果还是拿工单号",
    "subheading": "同步 200 立即给结果；异步 202+jobId 轮询或 webhook，适合长任务。",
    "scene": "视频转码 20min，同步 HTTP 连接超时；改 POST /jobs 202 + GET /jobs/{id} 或 callback。",
    "core": "同步：request-response 同一连接；异步：accept→queue→worker→status/callback；idempotency 与 job 状态机关键。",
    "metaphor": "像餐厅：现炒等上桌（同步） vs 取号等叫号（异步 job）。",
    "mistake": "长任务硬同步占满 worker 线程；或 async 无 timeout/cancel。",
    "confusion": "异步 API 仍可能用 HTTP 同步返回 202；消息队列是内部实现细节。",
    "experiment": "实现 export：POST 202 Location:/jobs/1，poll 到 succeeded 再 GET /download。",
    "route": [
      {
        "label": "选模式",
        "title": ">30s 用 async",
        "text": "经验阈值+客户端 timeout 对齐。"
      },
      {
        "label": "定状态",
        "title": "pending/running/done",
        "text": "failed 含 error 与 retryable 标志。"
      },
      {
        "label": "通知",
        "title": "poll vs webhook",
        "text": "webhook 要签名与重试文档。"
      },
      {
        "label": "幂等",
        "title": "job 创建",
        "text": "同 Idempotency-Key 返回同 jobId。"
      }
    ]
  },
  "Profiling and Monitoring": {
    "heading": "Profiling 与监控：找到慢在哪一段",
    "subheading": "Metrics 报警、Logs 查因、Traces 定位、Profiles 看 CPU/alloc 热点。",
    "scene": "P99 升监控报警，trace 显示 payment 调用占 70%，profile 发现 JSON marshal 热点，换 protobuf 内网调用。",
    "core": "三支柱 metrics/logs/traces；continuous profiling（Pyroscope）；APM 按 service+endpoint 看 dependency map。",
    "metaphor": "像医院：体温计（metrics）、问诊（logs）、CT（trace）、病理切片（profile）。",
    "mistake": "只有 logs 无 traceId 串不起来；或 sampling 100% 拖垮系统。",
    "confusion": "Monitoring 是盯已知指标；Profiling 是挖未知热点，互补。",
    "experiment": "OpenTelemetry 串 gateway→order→payment，故意 sleep 一处，Jaeger 定位 span。",
    "route": [
      {
        "label": "埋点",
        "title": "OTel SDK",
        "text": "propagate trace context 全链路。"
      },
      {
        "label": "采样",
        "title": "tail sampling",
        "text": "错误与慢请求优先保留。"
      },
      {
        "label": "Profile",
        "title": "CPU/heap",
        "text": "发布窗口开 profile 对比 diff。"
      },
      {
        "label": "告警",
        "title": "SLO burn",
        "text": "error budget 快烧完才叫醒 on-call。"
      }
    ]
  },
  "Performance Testing": {
    "heading": "性能测试：压测证明 API 扛得住",
    "subheading": "load/stress/spike/soak 各回答不同问题，要在 staging 近生产数据量级测。",
    "scene": "上线前 k6 模拟 2x 预期 RPS，DB connection pool 耗尽 503——提前调 pool 与 read replica。",
    "core": "工具 k6/JMeter/Gatling；场景：steady load、step ramp、spike、soak 内存泄漏；指标 RPS、P99、error%。",
    "metaphor": "像桥梁载重试验：先正常车流，再超重卡，最后长期震测看疲劳 crack。",
    "mistake": "压测打 production；或只测 health 不测真实混合读写。",
    "confusion": "性能测试≠功能测试；但通过是上线必要条件之一。",
    "experiment": "k6 script 跑 GET/POST 混合 10min，记录 P95 与 error rate，找第一个拐点 RPS。",
    "route": [
      {
        "label": "定目标",
        "title": "RPS+P99 SLA",
        "text": "与产品/SLA 文档数字一致。"
      },
      {
        "label": "造数据",
        "title": "staging 量级",
        "text": "空表压测结果不可信。"
      },
      {
        "label": "混场景",
        "title": "读写比",
        "text": "模拟真实 traffic mix。"
      },
      {
        "label": "报结论",
        "title": "bottleneck 清单",
        "text": "CPU/DB/pool/下游谁先到顶。"
      }
    ]
  },
  "Event Driven Architecture": {
    "heading": "事件驱动架构：API 触发域事件，松耦合演进",
    "subheading": "POST /orders 返回 201 同时发 OrderCreated，库存、通知、搜索各自订阅。",
    "scene": "单体里下单后同步调 6 个服务，一个挂全挂；改发 Kafka 事件，下单 API P99 降 60%。",
    "core": "模式：event notification/command/CQRS；API 层写聚合根+outbox 发事件；消费者 idempotent。",
    "metaphor": "像小区广播：你按门铃（API），各家听广播自己开门（consumer），不必你挨个敲六户。",
    "mistake": "无 schema registry 事件字段乱改；或 expecting 同步一致性跨服务。",
    "confusion": "EDA 不否定 REST；REST 是入口，内部用事件解耦。",
    "experiment": "实现 outbox：INSERT order + outbox 同事务，relay 发 order.created，consumer 打 log。",
    "route": [
      {
        "label": "定事件",
        "title": "past tense",
        "text": "OrderCreated 非 CreateOrder 命令式。"
      },
      {
        "label": "outbox",
        "title": "可靠发布",
        "text": "DB 与消息一致，防 dual write。"
      },
      {
        "label": "版本",
        "title": "schema evo",
        "text": "Avro/JSON schema 兼容 backward。"
      },
      {
        "label": "观测",
        "title": "lag+DLQ",
        "text": "consumer lag 与死信队列监控。"
      }
    ]
  },
  "Error Handling / Retries": {
    "heading": "错误处理与重试：区分可重试与不可重试",
    "subheading": "429/503 可退避重试；400/409 重试无意义；客户端与服务端都要写清策略。",
    "scene": "SDK 遇 500 无限重试放大故障；改 exponential backoff+jitter 且只 retry idempotent 请求。",
    "core": "Retry-After、idempotency-key、max attempts、circuit breaker；服务端 503 表临时不可用。",
    "metaphor": "像打电话占线：忙音（503）过会儿再打（backoff），空号（400）别一直拨。",
    "mistake": "POST 支付无幂等键却自动 retry 双扣；或 retry 无 jitter 同步 thundering herd。",
    "confusion": "重试在 HTTP 客户端、消息 consumer、网关各层要协调别叠乘。",
    "experiment": "mock 503 带 Retry-After:2，写 client retry 3 次 exponential，抓包看间隔。",
    "route": [
      {
        "label": "分类",
        "title": "retryable codes",
        "text": "文档表：429/503 可，400/404 不可。"
      },
      {
        "label": "退避",
        "title": "exp+jitter",
        "text": "2^n + random 防齐步重试。"
      },
      {
        "label": "幂等",
        "title": "POST 必 key",
        "text": "retry 安全前提。"
      },
      {
        "label": "熔断",
        "title": "circuit breaker",
        "text": "下游连续失败暂停调用自愈。"
      }
    ]
  },
  "API Gateways": {
    "heading": "API 网关：南北流量的统一前门",
    "subheading": "路由、TLS、鉴权、限流、转换、观测集中做，后端服务专注业务。",
    "scene": "Kong 统一 JWT 校验与 per-tenant rate limit，微服务去掉重复 middleware，发布只改路由插件。",
    "core": "网关能力：L7 路由、authn/z、transform、cache、WAF、analytics；Kong/APISIX/AWS API Gateway/Envoy。",
    "metaphor": "像机场安检与登机口：一次验票（auth），分到各航司柜台（upstream service）。",
    "mistake": "网关成「上帝类」塞业务逻辑；或单点无 HA。",
    "confusion": "网关（north-south）与服务网格 sidecar（east-west）职责不同可并存。",
    "experiment": "Kong 配一条 route+rate-limiting+jwt，backend 裸跑，对比直连与经网关延迟。",
    "route": [
      {
        "label": "放边界",
        "title": "auth/rate/TLS",
        "text": "横切关注点放网关，业务放服务。"
      },
      {
        "label": "做转换",
        "title": "REST→gRPC",
        "text": "grpc-gateway 或网关 plugin。"
      },
      {
        "label": "HA",
        "title": "多 AZ 部署",
        "text": "网关本身要无单点。"
      },
      {
        "label": "观测",
        "title": "access log",
        "text": "统一 request log 进 SIEM。"
      }
    ]
  },
  "API Integration Patterns": {
    "heading": "API 集成模式：对接外部世界的套路",
    "subheading": "点对点、网关聚合、事件、anti-corruption layer——选型决定耦合度。",
    "scene": "接三家支付，各 SDK 不同；anti-corruption layer 统一 PaymentPort，业务只认 charge/refund。",
    "core": "模式：API Gateway aggregation、Backend for Frontend、ACL、Strangler Fig、Saga、CQRS 读模型同步。",
    "metaphor": "像出国插头：各国插座（外部 API）不同，转接头（ACL）让你设备只认一种口。",
    "mistake": "业务代码满屏 if provider==stripe；或双写两边不一致无 reconciliation。",
    "confusion": "集成模式是架构层；具体用 REST 还是 webhook 是实现细节。",
    "experiment": "画支付集成 C4：context→container→adapter 三层，标同步与 webhook 边界。",
    "route": [
      {
        "label": "ACL",
        "title": "adapter 层",
        "text": "外部 DTO 不渗透 domain。"
      },
      {
        "label": "聚合",
        "title": "gateway compose",
        "text": "减少客户端 round trip。"
      },
      {
        "label": "对账",
        "title": "reconciliation job",
        "text": "异步 webhook 丢失时定时补拉。"
      },
      {
        "label": "退进",
        "title": "strangler",
        "text": "老系统逐步被新 API 替换。"
      }
    ]
  },
  "Microservices Architecture": {
    "heading": "微服务架构：API 作为服务边界",
    "subheading": "一服务一库，对外 REST/gRPC，对内事件——边界清则 API 稳。",
    "scene": "订单服务改 schema 不影响用户服务 API，因无跨库 join；BFF 聚合移动端所需字段。",
    "core": "服务划分按业务能力；API 契约独立版本；分布式事务用 saga/outbox；发现用 K8s DNS/service mesh。",
    "metaphor": "像美食广场各档口：各做各菜（服务），前台（BFF）帮你拼一份套餐。",
    "mistake": "分布式单体：服务拆很细但共享 DB、同步链式调用。",
    "confusion": "微服务不是目标；API 粒度与团队 Conway 对齐才可持续。",
    "experiment": "划两个 service 各暴露 /health 与 domain API，K8s deploy 互调测 timeout 与 retry。",
    "route": [
      {
        "label": "划边界",
        "title": "DDD bounded context",
        "text": "API 暴露聚合根，不暴露表。"
      },
      {
        "label": "契约",
        "title": "consumer-driven",
        "text": "Pact 或 OAS 版本化。"
      },
      {
        "label": "通信",
        "title": "sync+async mix",
        "text": "查询 sync，副作用 async 事件。"
      },
      {
        "label": "治理",
        "title": "platform team",
        "text": "网关、观测、CI 模板统一。"
      }
    ]
  },
  "Unit Testing": {
    "heading": "单元测试：隔离测 API 层逻辑",
    "subheading": "mock repository，测 controller/service 映射、校验与异常，不启真 HTTP。",
    "scene": "OrderService.create 缺库存抛 InsufficientStockException，单元测试 mock repo 断言映射 409 problem+json。",
    "core": "测纯逻辑：validator、mapper、policy；mock 外部 IO；fast feedback 进 CI 每次 commit。",
    "metaphor": "像零件台检：单个齿轮（函数）转得顺，再装整机（集成测试）。",
    "mistake": "单元测试起 Spring 全容器测 controller，慢且 flaky 还叫 unit。",
    "confusion": "API handler 的单元测试可测 service 层；HTTP 层用 MockMvc 算窄集成。",
    "experiment": "为 POST /orders 写 3 个 unit：成功 201、缺字段 422、库存不足 409，全 mock DB。",
    "route": [
      {
        "label": "隔离",
        "title": "mock port",
        "text": "repository interface mock，不测 SQL。"
      },
      {
        "label": "表驱动",
        "title": "input→status",
        "text": "多组边界值一个测试函数。"
      },
      {
        "label": "测映射",
        "title": "exception→problem",
        "text": "全局 handler 也可单测。"
      },
      {
        "label": "快",
        "title": "<100ms suite",
        "text": "慢测试开发者会跳过。"
      }
    ]
  },
  "Webhooks vs Polling": {
    "heading": "Webhook 与轮询：谁该主动通知",
    "subheading": "Webhook 服务端 POST 回调；polling 客户端定时 GET status——实时性与复杂度权衡。",
    "scene": "支付结果 webhook 秒级通知；合作方只轮询 /payment/status 每 5s，流量 x100 还延迟。",
    "core": "Webhook：注册 URL、签名 HMAC、重试 exponential、idempotent handler；Polling：ETag/If-Modified-Since 减无效响应。",
    "metaphor": "像快递：Webhook 是送货上门；Polling 是你每 hour 去驿站问到了没。",
    "mistake": "webhook 无签名验证 forged 回调；或 handler 非幂等重复发货。",
    "confusion": "Webhook 失败要有 DLQ 与 manual replay；polling 作 fallback 写进 SLA。",
    "experiment": "实现 /webhooks/payment 验 HMAC，本地 ngrok 收 POST，断网后看重试队列。",
    "route": [
      {
        "label": "签名",
        "title": "HMAC-SHA256",
        "text": "timestamp+body 防篡改重放。"
      },
      {
        "label": "幂等",
        "title": "event id",
        "text": "同 event_id 只处理一次。"
      },
      {
        "label": "重试",
        "title": "5xx 才重试",
        "text": "4xx 配置错误别无限重试。"
      },
      {
        "label": "fallback",
        "title": "poll API",
        "text": "文档写 webhook 丢时的对账拉取。"
      }
    ]
  },
  "Integration Testing": {
    "heading": "集成测试：API 与真实依赖协作",
    "subheading": "Testcontainers 起 Postgres/Redis，测 repository+HTTP 或 service 间调用。",
    "scene": "CI 里 Testcontainers MySQL 跑 migration，@SpringBootTest MockMvc 打 POST /users 落库再 GET 验证。",
    "core": "集成测边界：DB、消息 broker、第三方 sandbox；比 unit 慢但抓 wiring 错误。",
    "metaphor": "像整车路试：零件都对，还要看装配后能不能跑。",
    "mistake": "集成测试依赖共享 staging DB 互相污染；或无 cleanup 数据堆积。",
    "confusion": "API contract test 偏 consumer-provider；integration test 偏单服务全栈。",
    "experiment": "Testcontainers 起 Redis，测 rate limit middleware 第 11 次 429。",
    "route": [
      {
        "label": "容器化",
        "title": "Testcontainers",
        "text": "CI 自包含，不依赖外部 staging。"
      },
      {
        "label": "隔离",
        "title": "transaction rollback",
        "text": "或每测 fresh schema。"
      },
      {
        "label": "范围",
        "title": "一条 happy path",
        "text": "集成测少而精，边界放 unit。"
      },
      {
        "label": "并行",
        "title": "random port",
        "text": "多模块并行 CI 不端口冲突。"
      }
    ]
  },
  "BFF Pattern": {
    "heading": "BFF：为每种客户端定制后端",
    "subheading": "Mobile BFF 聚合 5 个微服务调用，裁剪字段，避免胖通用 API。",
    "scene": "Web 要 20 字段 Mobile 要 5 字段，通用 /users 越鼓越大；Mobile BFF 专供 App 版本化。",
    "core": "BFF 按 client type（web/mobile/admin）部署，编排 downstream API，不含核心 domain 逻辑。",
    "metaphor": "像宴会分餐：同一厨房（微服务），婚礼 BFF 与儿童 BFF 配不同套餐。",
    "mistake": "BFF 成新单体塞业务规则；或多个 BFF 复制粘贴聚合逻辑。",
    "confusion": "BFF 与 API Gateway 不同：网关横切，BFF 业务聚合。",
    "experiment": "建 mobile-bff GET /home 并行调 user/feed/banner 三个 API，timeout 2s 部分降级。",
    "route": [
      {
        "label": "按客户端",
        "title": "one BFF per experience",
        "text": "别一个 BFF 服务所有端。"
      },
      {
        "label": "只聚合",
        "title": "no domain rule",
        "text": "复杂规则仍在 domain service。"
      },
      {
        "label": "版本",
        "title": "App 版本绑 BFF",
        "text": "老 App 调 v1/bff 独立演进。"
      },
      {
        "label": " resilient",
        "title": "partial response",
        "text": "非关键块失败仍返回 200 空位。"
      }
    ]
  },
  "Functional Testing": {
    "heading": "功能测试：从用户场景验证 API 行为",
    "subheading": "Given-When-Then 描述业务流，黑盒打 HTTP 断言状态与 JSON。",
    "scene": "「用户注册→登录→下单→支付 mock 成功→订单 paid」一条 Cucumber 场景串 6 个 API。",
    "core": "功能测关注业务规则是否满足，少 mock 内部；数据 setup/teardown 清晰；可 manual 可自动化。",
    "metaphor": "像验收试菜：按菜单点一轮，管后厨用什么锅（实现）不管。",
    "mistake": "断言过脆绑死文案；或测太多 UI 细节进 API functional suite 混杂。",
    "confusion": "功能测试与 E2E 重叠；API 层功能测可不经浏览器。",
    "experiment": "写 feature：创建订单库存不足返回 409，自动化跑 staging nightly。",
    "route": [
      {
        "label": "写场景",
        "title": "Gherkin/清单",
        "text": "产品可读，研发可自动化。"
      },
      {
        "label": "黑盒",
        "title": "HTTP 断言",
        "text": "status+JSON path+业务 invariant。"
      },
      {
        "label": "数据",
        "title": "fixture factory",
        "text": "每场景独立 seed，不互相污染。"
      },
      {
        "label": "分层",
        "title": "API vs UI E2E",
        "text": "API 功能测更快更稳。"
      }
    ]
  },
  "API Testing": {
    "heading": "API 测试：契约、行为与安全一体",
    "subheading": "Postman/Newman、REST Assured、Schemathesis  fuzz——覆盖 happy、sad、security path。",
    "scene": "Schemathesis 对 OpenAPI fuzz 发现 PATCH 缺 schema 导致 500，补 schema 后 CI 绿。",
    "core": "层次：schema 校验、example 回放、property-based fuzz、auth matrix、performance smoke。",
    "metaphor": "像质检流水线：外观（schema）、功能（assertion）、抽检破坏性（fuzz）。",
    "mistake": "只测 200 不测 401/422；或测试数据写 production。",
    "confusion": "API testing 是 umbrella；contract/unit/integration 各管一块。",
    "experiment": "Newman 跑 collection + Schemathesis run openapi.yaml --checks all 进 CI。",
    "route": [
      {
        "label": "schema",
        "title": "response 校验",
        "text": "JSON Schema 或 OAS response。"
      },
      {
        "label": "矩阵",
        "title": "role×endpoint",
        "text": "自动化 401/403/200 网格。"
      },
      {
        "label": "fuzz",
        "title": "Schemathesis",
        "text": "随机输入找 500 与边界。"
      },
      {
        "label": "CI",
        "title": "PR gate",
        "text": "合并前必跑 API test suite。"
      }
    ]
  },
  "Batch Processing": {
    "heading": "批量处理 API：一次提交多条记录",
    "subheading": "POST /items/batch 减 round trip，要部分成功语义与 size 上限。",
    "scene": "同步逐条 POST 1 万 SKU 要 3 小时；batch 100 条/请求 + 202 async job 20 分钟完成。",
    "core": "设计：max batch size、atomic vs partial success（207 Multi-Status）、error per item、async for large。",
    "metaphor": "像超市自助收银：一次扫多件（batch），某件条码错单独亮红灯（partial error）。",
    "mistake": "batch 无 limit 一次 10MB JSON OOM；或 partial fail 客户端不知哪条错。",
    "confusion": "Batch API 与 bulk import 文件上传不同；后者走 multipart/S3。",
    "experiment": "POST /users/batch 10 条含 1 条 invalid email，返回 207 数组标 index+error。",
    "route": [
      {
        "label": "限大小",
        "title": "max 100 items",
        "text": "413 或 400 明确拒绝。"
      },
      {
        "label": "定语义",
        "title": "all-or-nothing vs partial",
        "text": "文档写清，响应结构一致。"
      },
      {
        "label": "异步",
        "title": "large batch job",
        "text": "超阈值 202 jobId。"
      },
      {
        "label": "幂等",
        "title": "batch idempotency",
        "text": "整批 key 或 per-item key。"
      }
    ]
  },
  "Load Testing": {
    "heading": "负载测试：API 在压力下的行为",
    "subheading": "与 performance testing 重叠侧重 capacity；找 breaking point 与 degradation 曲线。",
    "scene": "大促前 load test 发现 auth 服务先顶，扩容 auth 而非盲目加 order pod。",
    "core": "逐步升 RPS 直到 error>1% 或 P99 超标；记录 saturation 资源；对比优化前后曲线。",
    "metaphor": "像电梯额定 13 人，超载实验看报警在哪——API 的「额定载客量」。",
    "mistake": "load test 未 warm cache 结论偏；或忽略下游第三方 rate limit。",
    "confusion": "Load vs stress：load 在 SLA 内；stress 故意超直到崩。",
    "experiment": "k6 stages 100→500→1000 VUs，记录各阶段 P99 与 503 率，画拐点图。",
    "route": [
      {
        "label": "阶梯",
        "title": "ramp stages",
        "text": "别一步顶满，观察 gradual degrade。"
      },
      {
        "label": "盯资源",
        "title": "CPU/conn/lag",
        "text": "瓶颈组件优先扩。"
      },
      {
        "label": " realistic",
        "title": "think time",
        "text": "纯 hammer 不反映真实用户。"
      },
      {
        "label": "报告",
        "title": "max sustainable RPS",
        "text": "写进 runbook 与 autoscale 策略。"
      }
    ]
  },
  "Messaging Queues": {
    "heading": "消息队列：API 与异步世界的缓冲带",
    "subheading": "请求入队立即 202，worker 消费执行，削峰填谷与解耦重试。",
    "scene": "秒杀 POST /order 同步写库被打挂；改入 RabbitMQ queue，worker 按能力消费，API 只验库存入队。",
    "core": "模式 producer→broker→consumer；保证 at-least-once + 幂等 consumer；DLQ  poison message；与 outbox 配合可靠投递。",
    "metaphor": "像银行叫号机：你取号（202），柜台（worker）按序办，大厅（API）不挤爆。",
    "mistake": "无 DLQ 毒消息堵死队列；或 consumer 无 idempotent 重复消费双扣。",
    "confusion": "Queue 是内部实现；对外仍应用 job API 或 webhook 通知完成。",
    "experiment": "发 100 msg 到 queue，停 consumer 再启，验证 at-least-once 与 dedup key。",
    "route": [
      {
        "label": "选语义",
        "title": "at-least-once",
        "text": "多数业务接受，consumer 必须幂等。"
      },
      {
        "label": "DLQ",
        "title": " poison handling",
        "text": "失败 N 次进 DLQ 告警人工。"
      },
      {
        "label": "背压",
        "title": "prefetch/concurrency",
        "text": "consumer 数与 DB 能力匹配。"
      },
      {
        "label": "对外",
        "title": "job status API",
        "text": "用户查进度不直接暴露 queue。"
      }
    ]
  },
  "Mocking APIs": {
    "heading": "Mock API：前后端并行与测试替身",
    "subheading": "Prism、WireMock、MSW 按 OpenAPI 返回假数据，不等后端就绪。",
    "scene": "前端 sprint 0 用 Prism mock openapi.yaml，UI 联调完成；后端晚两周接上真服务切换 baseUrl。",
    "core": "Mock 来源：OAS example、record-replay、handwritten stub；contract 测试确保 mock 与 spec 一致。",
    "metaphor": "像排练用替身演员：台词（schema）对，真主演（backend）稍后换场。",
    "mistake": "mock 行为与真实 API 漂移无人更新；或 mock 返回 200 真实永远 409。",
    "confusion": "Mock server（独立进程）与 unit mock（函数级）层次不同。",
    "experiment": "prism mock openapi.yaml，前端调 /users 得 example；后端就绪后 contract test 对齐。",
    "route": [
      {
        "label": "从 spec",
        "title": "Prism/Mockoon",
        "text": "example 必填，mock 才真实。"
      },
      {
        "label": "录放",
        "title": "WireMock record",
        "text": "抓 staging 流量回放测试。"
      },
      {
        "label": "契约",
        "title": "mock≡spec",
        "text": "CI 校验 mock 响应符合 schema。"
      },
      {
        "label": "切换",
        "title": "env flag",
        "text": "MOCK=true 本地，false 集成。"
      }
    ]
  },
  "Observability": {
    "heading": "可观测性：API 黑盒里看见发生了什么",
    "subheading": "Logs、Metrics、Traces 三支柱 + 业务 KPI，支撑 debug 与 SLO。",
    "scene": "用户说「下单失败」，用 traceId 从网关 log 追到 payment 429，5 分钟定位 tenant quota。",
    "core": "结构化 log（traceId、tenantId）；RED metrics；distributed trace；dashboard 按 API product 聚合。",
    "metaphor": "像飞机黑匣子+仪表盘：记录飞行数据，出事能回放，平时看油表。",
    "mistake": "log 打 PII 进 ELK 合规炸；或 metrics 无 exemplars 链不到 trace。",
    "confusion": "Observability 主动探索未知；Monitoring 盯已知告警，二者互补。",
    "experiment": "一次失败请求从 access log traceId 跳 Jaeger 再跳 Loki，写 runbook 截图。",
    "route": [
      {
        "label": "关联",
        "title": "traceId everywhere",
        "text": "响应头也返回 X-Request-Id。"
      },
      {
        "label": "结构化",
        "title": "JSON log",
        "text": "可检索 tenant_id、route、latency。"
      },
      {
        "label": "SLO",
        "title": "burn rate alert",
        "text": "可用性按 endpoint 分组。"
      },
      {
        "label": "合规",
        "title": "mask PII in log",
        "text": "日志策略与 retention 写清。"
      }
    ]
  },
  "Contract Testing": {
    "heading": "契约测试：消费者驱动 API 演进",
    "subheading": "Pact 等保证 provider 不 breaking consumer 期望，比 E2E 快且准。",
    "scene": "Order service 改字段 userId→customerId，Pact CI 红，provider 保留 alias 或 bump major。",
    "core": "Consumer 写 pact 期望；Provider verify；CI 双向；与 OAS 可互补（schema vs interaction）。",
    "metaphor": "像插座标准：电器（consumer）插头规格写进标准，电厂（provider）不能随意改孔距。",
    "mistake": "pact 文件不 publish broker，各团队本地 json 过期；或只 provider verify 无 consumer 测。",
    "confusion": "Contract test 不测 business logic 全对，只测交互格式兼容。",
    "experiment": "consumer 测 GET /users/1 期望 body.id number；provider pact verify job 进 CI。",
    "route": [
      {
        "label": "CDC",
        "title": "consumer-driven",
        "text": "谁用谁定契约，provider 实现。"
      },
      {
        "label": "Broker",
        "title": "Pact Broker",
        "text": "集中存 pact 与 verify 结果。"
      },
      {
        "label": "版本",
        "title": "can-i-deploy",
        "text": "发布前问 broker 能否部署。"
      },
      {
        "label": "配 OAS",
        "title": "schema+example",
        "text": "OpenAPI 管形状，Pact 管用法。"
      }
    ]
  },
  "Kafka": {
    "heading": "Kafka：高吞吐分布式日志用于 API 事件",
    "subheading": "order.created 进 topic，搜索/BI/通知多 consumer group 各读各的。",
    "scene": "API 写库后发 Kafka event，下游 ES 索引延迟 2s；consumer lag 监控告警防堆积。",
    "core": "Topic partition 并行；consumer group offset；at-least-once；schema registry；与 REST 通过 outbox 衔接。",
    "metaphor": "像中央广播电台：各频道（topic）同时播，听众（consumer group）各录各的，可回放。",
    "mistake": "单 message 超大 payload 打爆 broker；或 key 不均 partition 热点。",
    "confusion": "Kafka 是 log 不是传统 queue；retention 可 days，可 replay。",
    "experiment": "起 local Kafka，producer 发 order.created，两个 consumer group 各打印，改 offset replay。",
    "route": [
      {
        "label": "分区",
        "title": "key=orderId",
        "text": "同 key 有序，并行靠多 partition。"
      },
      {
        "label": "schema",
        "title": "Avro+registry",
        "text": "演进兼容 backward/forward。"
      },
      {
        "label": "lag",
        "title": "consumer lag alert",
        "text": "API 写入快 consumer 慢要扩容。"
      },
      {
        "label": "outbox",
        "title": "API→Kafka",
        "text": "事务 outbox 防丢事件。"
      }
    ]
  },
  "Rabbit MQ": {
    "heading": "RabbitMQ：灵活路由的消息 broker",
    "subheading": "exchange→queue→binding，适合 task queue 与复杂路由，API 异步任务常用。",
    "scene": "邮件/短信/SMS 三种通知，topic exchange routing key notify.email 分流不同 queue worker。",
    "core": "AMQP 模型：direct/topic/fanout exchange；ack/nack；TTL DLX；与 Spring AMQP 集成成熟。",
    "metaphor": "像邮局分拣：信封上 routing key 决定进哪个格子（queue）。",
    "mistake": "无 prefetch 限制 consumer 撑爆内存；或 durable queue 未持久化 message。",
    "confusion": "Rabbit 传统 queue 语义；Kafka 是 log；选型看 replay 与吞吐需求。",
    "experiment": "声明 topic exchange，发 routing key order.paid，绑两个 queue 各消费打印。",
    "route": [
      {
        "label": "建模",
        "title": "exchange+queue",
        "text": "画绑定图再写代码。"
      },
      {
        "label": "可靠",
        "title": "publisher confirm",
        "text": "API 发消息确认进 broker。"
      },
      {
        "label": "DLX",
        "title": "dead letter",
        "text": "失败进 DLQ 与 Kafka DLQ 同理。"
      },
      {
        "label": "对比",
        "title": "Rabbit vs Kafka",
        "text": "任务队列 Rabbit；事件流 Kafka。"
      }
    ]
  },
  "API Lifecycle Management": {
    "heading": "API 生命周期：从设计到退役",
    "subheading": "Design→Build→Document→Publish→Deprecate→Retire，每阶段有 gate 与指标。",
    "scene": "v1 sunset 公告 90 天，监控 v1 流量从 40%→5%，到期网关返回 410 Gone 链文档 v2。",
    "core": "阶段：alpha/beta/GA；semantic 或 URI 版本；changelog；deprecation policy；sunset header；下线 checklist。",
    "metaphor": "像软件产品路线图：内测→公测→维护→EOL，API 也是产品。",
    "mistake": "永久 beta 无 GA；或 silent breaking change 无 deprecation。",
    "confusion": "Lifecycle 管对外承诺；内部 refactors 不属同一流程。",
    "experiment": "写 API lifecycle 一页纸：状态定义、最短 deprecation 90d、流量阈值下线。",
    "route": [
      {
        "label": "定状态",
        "title": "alpha/GA/deprecated",
        "text": "文档 badge 与 SLA 差异。"
      },
      {
        "label": "公告",
        "title": "changelog+email",
        "text": "breaking 提前 N 天。"
      },
      {
        "label": "监控",
        "title": "version traffic",
        "text": "dashboard 按 /v1 /v2 分。"
      },
      {
        "label": "下线",
        "title": "410+迁移指南",
        "text": "别直接拔网线 404。"
      }
    ]
  },
  "GDPR": {
    "heading": "GDPR：欧盟数据保护与 API 设计",
    "subheading": "数据主体权利、合法依据、最小收集、跨境传输——API 要可删可导可同意。",
    "scene": "用户行使被遗忘权 DELETE /users/me，API 要 cascade 匿名化订单日志，不是只删 users 行。",
    "core": "Rights：access/export、erase、rectify、restrict；consent 记录；DPA with processors；PII 最小化字段。",
    "metaphor": "像数据主体权利手册：用户是数据主人，API 是行使权利的窗口（导出/删除/同意）。",
    "mistake": "log/metrics 存 email 无 retention；或 export 含他人 PII。",
    "confusion": "GDPR 适用欧盟用户数据处理，不论公司在哪；API 全球时要分区策略。",
    "experiment": "实现 GET /users/me/export JSON 与 DELETE /users/me，审计 log 不含多余 PII。",
    "route": [
      {
        "label": "最小化",
        "title": "字段必要性",
        "text": "API 少要一样数据。"
      },
      {
        "label": "权利",
        "title": "export/erase API",
        "text": "SLA 30 天内响应删导。"
      },
      {
        "label": "同意",
        "title": "consent record",
        "text": "marketing opt-in 带 timestamp。"
      },
      {
        "label": "DPA",
        "title": "subprocessor 列表",
        "text": "文档公开第三方处理者。"
      }
    ]
  },
  "CCPA": {
    "heading": "CCPA/CPRA：加州消费者隐私与 API",
    "subheading": "知情、删除、退出出售、不歧视——美国西海岸常见合规要求。",
    "scene": "加州用户 POST /privacy/do-not-sell，API 停向广告 partner 同步 segment，并返回确认码。",
    "core": "CCPA：right to know/delete/opt-out of sale；「sale」定义宽；privacy notice；service provider contract。",
    "metaphor": "像加州阳光法：消费者有权知道数据被怎么卖、说停就停。",
    "mistake": "把 CCPA 当 GDPR 照搬；或 opt-out 只改 UI 不改 backend 同步 job。",
    "confusion": "CCPA 侧重加州居民；联邦无全面法时按州法叠加。",
    "experiment": "列 API 哪些 endpoint 涉及「sale」定义数据，实现 opt-out flag  propagated 到下游。",
    "route": [
      {
        "label": "映射",
        "title": "data inventory",
        "text": "哪些 API 字段算 personal info。"
      },
      {
        "label": "opt-out",
        "title": "do-not-sell flag",
        "text": "backend 全链路 respect。"
      },
      {
        "label": "请求",
        "title": "know/delete",
        "text": "类似 GDPR 但时限与范围不同。"
      },
      {
        "label": "文档",
        "title": "privacy policy link",
        "text": "API 文档链隐私声明。"
      }
    ]
  },
  "PII": {
    "heading": "PII：个人身份信息在 API 中的处理",
    "subheading": "姓名、邮箱、手机、身份证、IP——采集、传输、存储、日志全要分级。",
    "scene": "debug log 打印完整 request body 含 password 与 idCard，合规审计不合格；改 mask 与采样。",
    "core": "PII 分类：direct/indirect；传输 TLS；存储加密与 tokenization；响应最小化；log/metrics 脱敏。",
    "metaphor": "像证件复印件：办事交复印件（必要字段），不全套存档（最小化），复印件要锁柜（加密）。",
    "mistake": "PII 进 URL query 进 access log；或 error message 回显用户输入含 phone。",
    "confusion": "PII 与 GDPR personal data  largely 重叠但法规语境不同。",
    "experiment": "扫 OpenAPI 标 PII 字段，加 x-pii: true，lint 禁止 PII 进 query。",
    "route": [
      {
        "label": " inventory",
        "title": "字段清单",
        "text": "每个 API 列 PII 列与用途。"
      },
      {
        "label": "最小化",
        "title": "response DTO",
        "text": "列表不返身份证全号。"
      },
      {
        "label": "脱敏",
        "title": "log/mask",
        "text": "138****5678 模式统一。"
      },
      {
        "label": "加密",
        "title": "at rest",
        "text": "敏感列 AES 或 vault token。"
      }
    ]
  },
  "PCI DSS": {
    "heading": "PCI DSS：支付卡数据与 API 边界",
    "subheading": "卡号 CVV 别碰自家 DB——用 tokenization、hosted fields、PCI  scope 最小化。",
    "scene": "自建 POST /pay 收 PAN 进日志，PCI SAQ-D 噩梦；改 Stripe Elements token 后端只收 payment_method_id。",
    "core": "PCI：保护 CHD（卡号等）；scope 缩小用 SAQ A；网络隔离、加密、访问控制、审计、漏洞扫描。",
    "metaphor": "像危险品专仓：卡数据是易燃品，API 尽量只传「凭证号」（token）不碰原货。",
    "mistake": "CVV 存储（禁止）；或 webhook 日志打印完整 card JSON。",
    "confusion": "PCI 是标准非法律，但卡组织合约要求；用 PSP 可大幅降 scope。",
    "experiment": "画 data flow：卡号在哪停、token 从哪进 API、哪些系统进 PCI scope。",
    "route": [
      {
        "label": "降 scope",
        "title": "tokenization",
        "text": "Stripe/Adyen hosted 字段。"
      },
      {
        "label": "禁存",
        "title": "no CVV/PAN",
        "text": "后端永不 persist 全 PAN。"
      },
      {
        "label": "隔离",
        "title": "CDE network",
        "text": "支付微服务单独 segment。"
      },
      {
        "label": "审计",
        "title": "access log",
        "text": "谁访问过支付 API 可追溯。"
      }
    ]
  },
  "HIPAA": {
    "heading": "HIPAA：美国医疗 PHI 与 API 安全",
    "subheading": "ePHI 传输加密、访问控制、审计、BA 协议——健康类 API 门槛高。",
    "scene": "健康 App 调 /records API 返回诊断，无 BAA 的云日志存 PHI 违规；换 HIPAA-eligible 服务+审计。",
    "core": "HIPAA Security Rule：admin/physical/technical safeguards；PHI 最小必要；BAA with vendors；audit controls。",
    "metaphor": "像病历柜：谁何时看了哪份病历（audit），钥匙分级（RBAC），出院只带摘要（minimum necessary）。",
    "mistake": "PHI 进 analytics 无 de-identify；或 test 环境用真 patient 数据。",
    "confusion": "HIPAA 管 covered entity 与 BA；纯 wellness 数据可能不在 scope，要法律评估。",
    "experiment": "列 /health/* API PHI 字段，加 break-glass access 审计与 emergency access 流程。",
    "route": [
      {
        "label": "BAA",
        "title": "vendor 清单",
        "text": "云、日志、监控都要 BAA。"
      },
      {
        "label": "加密",
        "title": "transit+rest",
        "text": "TLS1.2+ 与磁盘加密 baseline。"
      },
      {
        "label": "审计",
        "title": "who accessed PHI",
        "text": "immutable audit trail。"
      },
      {
        "label": "最小",
        "title": "minimum necessary",
        "text": "API 字段按 role 裁剪 PHI。"
      }
    ]
  },
  "Standards and Compliance": {
    "heading": "标准与合规：API 设计的法律与行业护栏",
    "subheading": "GDPR、PCI、HIPAA、SOC2、ISO27001——映射到技术控制与文档证据。",
    "scene": "企业采购要求 SOC2 Type II，你整理 API access log、change management、pen test 证据包过审。",
    "core": "合规=政策+技术控制+证据；API 层：auth、encryption、logging、retention、DPA、vendor review、incident response。",
    "metaphor": "像交规+车检：不只车能跑（API 能调），还要年检记录（审计证据）齐全。",
    "mistake": "合规当一次性项目贴 badge；或各法规重复建设三套 delete API。",
    "confusion": "标准重叠可 unified control：一次 encryption 满足多项；delete API 设计兼顾 GDPR/CCPA。",
    "experiment": "做 compliance matrix：行=法规，列=API 控制（encrypt/log/delete），填现状 gap。",
    "route": [
      {
        "label": "矩阵",
        "title": "regulation×control",
        "text": "一次建设多处引用。"
      },
      {
        "label": "证据",
        "title": "audit artifact",
        "text": "log retention、access review 记录。"
      },
      {
        "label": "vendor",
        "title": "subprocessor",
        "text": "第三方 API 也在 scope。"
      },
      {
        "label": "持续",
        "title": "annual review",
        "text": "新 endpoint 走 compliance checklist。"
      }
    ]
  }
};

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}
function text(id, x, y, t, fs = 22, w = 240) {
  return `    excalidrawText('${id}', ${x}, ${y}, '${esc(t)}', ${fs}, ${w}),`;
}
function box(id, x, y, w, h, bg) {
  return `    excalidrawBox('${id}', ${x}, ${y}, ${w}, ${h}, '${bg}'),`;
}
function arrow(id, x, y, w, h, color) {
  const c = color ? `, '${color}'` : '';
  return `    excalidrawArrow('${id}', ${x}, ${y}, ${w}, ${h}${c}),`;
}
function scene(slug, lines) {
  return `  '${slug}': excalidrawScene([\n${lines.filter(Boolean).join('\n')}\n  ]),`;
}

function buildDiagram(slug, kind, title, command) {
    const p = `ad-${slug}`;
  switch (kind) {
    case 'overview':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：API 是能力边界', 25, 620),
      box(`${p}-client`, 58, 118, 150, 100, palette.blue),
      text(`${p}-client-t`, 84, 144, '客户端\nApp/Web\n第三方', 16, 98),
      box(`${p}-api`, 304, 92, 176, 152, palette.yellow),
      text(`${p}-api-t`, 332, 120, 'API 层\n' + command + '\n契约/鉴权', 16, 120),
      box(`${p}-svc`, 566, 118, 150, 100, palette.green),
      text(`${p}-svc-t`, 592, 144, '后端服务\n业务逻辑\n数据存储', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
      text(`${p}-note`, 112, 314, 'API 不是数据库直连，而是对外承诺的能力入口', 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'http':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：一次 HTTP 调用的骨架', 25, 620),
      box(`${p}-req`, 54, 104, 190, 150, palette.blue),
      text(`${p}-req-t`, 84, 132, 'Request\n' + command + '\nHeaders\nBody', 16, 126),
      box(`${p}-server`, 304, 118, 170, 122, palette.yellow),
      text(`${p}-server-t`, 334, 146, 'API Server\n路由\n校验\n执行业务', 16, 110),
      box(`${p}-res`, 534, 104, 190, 150, palette.green),
      text(`${p}-res-t`, 564, 132, 'Response\nStatus\nHeaders\nBody', 16, 126),
      arrow(`${p}-a1`, 250, 178, 48, 0),
      arrow(`${p}-a2`, 480, 178, 48, 0),
    ];
    return scene(slug, lines);
  }
    case 'status':
      {
    const lines = [
      text(`${p}-title`, 72, 18, title + '：状态码先分家族', 25, 640),
      box(`${p}-2xx`, 68, 108, 120, 74, palette.green),
      text(`${p}-2xx-t`, 92, 130, '2xx\n成功', 17, 72),
      box(`${p}-4xx`, 228, 108, 120, 74, palette.yellow),
      text(`${p}-4xx-t`, 252, 130, '4xx\n客户端错', 17, 72),
      box(`${p}-5xx`, 388, 108, 120, 74, palette.red),
      text(`${p}-5xx-t`, 412, 130, '5xx\n服务端错', 17, 72),
      box(`${p}-cmd`, 548, 108, 150, 74, palette.blue),
      text(`${p}-cmd-t`, 572, 130, command, 15, 102),
      text(`${p}-note`, 112, 280, '401/403/404/409/429 语义不同，不能一律当失败', 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'headers':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：Header 是请求的备注区', 25, 620),
      box(`${p}-line`, 70, 118, 560, 86, palette.cyan),
      text(`${p}-line-t`, 98, 144, 'HTTP Request Line + Headers + Body', 18, 500),
      box(`${p}-auth`, 84, 236, 150, 74, palette.blue),
      text(`${p}-auth-t`, 108, 258, 'Authorization\nAuth', 16, 102),
      box(`${p}-type`, 274, 236, 150, 74, palette.yellow),
      text(`${p}-type-t`, 298, 258, 'Content-Type\nAccept', 16, 102),
      box(`${p}-cache`, 464, 236, 150, 74, palette.green),
      text(`${p}-cache-t`, 488, 258, 'ETag\nCookie', 16, 102),
      text(`${p}-note`, 112, 346, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'uri':
      {
    const lines = [
      text(`${p}-title`, 74, 18, title + '：URI 是资源的门牌号', 25, 640),
      box(`${p}-host`, 58, 124, 130, 74, palette.blue),
      text(`${p}-host-t`, 82, 146, 'host\napi.example.com', 15, 86),
      box(`${p}-path`, 228, 124, 190, 74, palette.yellow),
      text(`${p}-path-t`, 252, 146, 'path\n/users/{id}', 15, 142),
      box(`${p}-query`, 458, 124, 190, 74, palette.green),
      text(`${p}-query-t`, 482, 146, 'query\n?status=active', 15, 142),
      box(`${p}-note`, 228, 248, 420, 62, palette.purple),
      text(`${p}-note-t`, 262, 266, command + '：路径表资源，query 表筛选', 16, 352),
    ];
    return scene(slug, lines);
  }
    case 'network':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：API 下面还有网络层', 25, 620),
      box(`${p}-app`, 68, 126, 120, 72, palette.blue),
      text(`${p}-app-t`, 92, 148, 'HTTP/API', 16, 72),
      box(`${p}-tcp`, 228, 126, 120, 72, palette.yellow),
      text(`${p}-tcp-t`, 252, 148, 'TCP', 16, 72),
      box(`${p}-ip`, 388, 126, 120, 72, palette.green),
      text(`${p}-ip-t`, 412, 148, 'IP', 16, 72),
      box(`${p}-dns`, 548, 126, 120, 72, palette.purple),
      text(`${p}-dns-t`, 572, 148, 'DNS', 16, 72),
      arrow(`${p}-a1`, 194, 162, 28, 0),
      arrow(`${p}-a2`, 354, 162, 28, 0),
      arrow(`${p}-a3`, 514, 162, 28, 0),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'rest':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：资源 + 方法 = 操作', 25, 620),
      box(`${p}-users`, 72, 104, 170, 130, palette.blue),
      text(`${p}-users-t`, 98, 132, '/users\nGET list\nPOST create', 16, 114),
      box(`${p}-item`, 304, 104, 170, 130, palette.yellow),
      text(`${p}-item-t`, 330, 132, '/users/{id}\nGET read\nPUT/PATCH update\nDELETE remove', 15, 118),
      box(`${p}-state`, 536, 104, 170, 130, palette.green),
      text(`${p}-state-t`, 562, 132, 'Representation\nJSON body\n状态转移', 16, 114),
      arrow(`${p}-a1`, 248, 168, 50, 0),
      arrow(`${p}-a2`, 480, 168, 50, 0),
      text(`${p}-note`, 112, 306, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'compare':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：先选场景，再选风格', 25, 620),
      box(`${p}-rest`, 54, 98, 150, 120, palette.blue),
      text(`${p}-rest-t`, 80, 124, 'REST\n资源+HTTP\n易缓存', 16, 98),
      box(`${p}-gql`, 228, 98, 150, 120, palette.yellow),
      text(`${p}-gql-t`, 254, 124, 'GraphQL\n客户端选字段\n单端点', 16, 98),
      box(`${p}-grpc`, 402, 98, 150, 120, palette.green),
      text(`${p}-grpc-t`, 428, 124, 'gRPC\n强类型\n高性能', 16, 98),
      box(`${p}-soap`, 576, 98, 150, 120, palette.purple),
      text(`${p}-soap-t`, 602, 124, 'SOAP\nXML/WSDL\n企业集成', 16, 98),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'hateoas':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：响应里带下一步链接', 25, 620),
      box(`${p}-res`, 84, 98, 220, 170, palette.blue),
      text(`${p}-res-t`, 112, 126, 'Response JSON\nid/name\n_links.self\n_links.next', 16, 164),
      box(`${p}-next`, 420, 118, 170, 130, palette.green),
      text(`${p}-next-t`, 448, 146, '客户端跟随链接\n发现可用动作\n减少硬编码 URL', 16, 114),
      arrow(`${p}-a1`, 310, 182, 104, 0),
      text(`${p}-note`, 112, 326, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'cors':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：浏览器跨域要过两道门', 25, 620),
      box(`${p}-browser`, 58, 118, 150, 100, palette.blue),
      text(`${p}-browser-t`, 84, 144, '浏览器\nOrigin A\n前端页面', 16, 98),
      box(`${p}-preflight`, 304, 92, 176, 152, palette.yellow),
      text(`${p}-preflight-t`, 332, 120, 'OPTIONS 预检\nAllow-Origin\nAllow-Methods', 16, 120),
      box(`${p}-api`, 566, 118, 150, 100, palette.green),
      text(`${p}-api-t`, 592, 144, 'API\nOrigin B\n真正响应', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'cache':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：缓存分客户端/网关/服务端', 25, 620),
      box(`${p}-client`, 54, 124, 130, 82, palette.blue),
      text(`${p}-client-t`, 78, 146, 'Browser\n本地缓存', 16, 84),
      box(`${p}-cdn`, 228, 124, 130, 82, palette.yellow),
      text(`${p}-cdn-t`, 252, 146, 'CDN/Proxy\n边缘缓存', 16, 84),
      box(`${p}-app`, 402, 124, 130, 82, palette.green),
      text(`${p}-app-t`, 426, 146, 'App Cache\nRedis', 16, 84),
      box(`${p}-origin`, 576, 124, 130, 82, palette.purple),
      text(`${p}-origin-t`, 600, 146, 'Origin\n源站计算', 16, 84),
      arrow(`${p}-a1`, 190, 164, 32, 0),
      arrow(`${p}-a2`, 364, 164, 32, 0),
      arrow(`${p}-a3`, 538, 164, 32, 0),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'realtime':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：长连接持续推送', 25, 620),
      box(`${p}-client`, 58, 118, 150, 100, palette.blue),
      text(`${p}-client-t`, 84, 144, 'Client\n订阅/连接', 16, 98),
      box(`${p}-pipe`, 304, 86, 176, 164, palette.yellow),
      text(`${p}-pipe-t`, 332, 116, command + '\nWS / SSE / Stream\n心跳\n重连', 16, 120),
      box(`${p}-server`, 566, 118, 150, 100, palette.green),
      text(`${p}-server-t`, 592, 144, 'Server\n推送事件\n状态同步', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'pagination':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：分页像翻页或书签', 25, 620),
      box(`${p}-page`, 72, 118, 170, 100, palette.blue),
      text(`${p}-page-t`, 98, 144, 'page/limit\n第 N 页\n固定大小', 16, 114),
      box(`${p}-cursor`, 304, 118, 170, 100, palette.yellow),
      text(`${p}-cursor-t`, 330, 144, 'cursor\n上次位置\n更适合实时流', 16, 114),
      box(`${p}-resp`, 536, 118, 170, 100, palette.green),
      text(`${p}-resp-t`, 562, 144, 'items + next\n稳定排序\n可预测', 16, 114),
      arrow(`${p}-a1`, 248, 168, 50, 0),
      arrow(`${p}-a2`, 480, 168, 50, 0),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'idempotency':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：同样请求，同样结果', 25, 620),
      box(`${p}-req1`, 58, 108, 150, 90, palette.blue),
      text(`${p}-req1-t`, 84, 134, '请求 1\nIdempotency-Key', 16, 98),
      box(`${p}-req2`, 58, 228, 150, 90, palette.blue),
      text(`${p}-req2-t`, 84, 254, '重试请求\n相同 Key', 16, 98),
      box(`${p}-api`, 304, 118, 176, 170, palette.yellow),
      text(`${p}-api-t`, 332, 146, command + '\n识别重复\n不重复副作用', 16, 120),
      box(`${p}-res`, 566, 148, 150, 90, palette.green),
      text(`${p}-res-t`, 592, 174, '同一结果\n安全重试', 16, 98),
      arrow(`${p}-a1`, 214, 152, 84, 20),
      arrow(`${p}-a2`, 214, 272, 84, -40),
      arrow(`${p}-a3`, 486, 192, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'ratelimit':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：令牌桶控制流量', 25, 620),
      box(`${p}-traffic`, 58, 124, 150, 92, palette.blue),
      text(`${p}-traffic-t`, 84, 150, '请求洪峰\n客户端/脚本', 16, 98),
      box(`${p}-bucket`, 304, 86, 176, 168, palette.yellow),
      text(`${p}-bucket-t`, 332, 116, command + '\n令牌补充\n配额窗口\n429 拒绝', 16, 120),
      box(`${p}-api`, 566, 124, 150, 92, palette.green),
      text(`${p}-api-t`, 592, 150, 'API\n稳定服务\n公平使用', 16, 98),
      arrow(`${p}-a1`, 214, 170, 84, 0),
      arrow(`${p}-a2`, 486, 170, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'versioning':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：版本并行，给迁移时间', 25, 620),
      box(`${p}-v1`, 84, 118, 170, 100, palette.blue),
      text(`${p}-v1-t`, 110, 144, 'v1\n旧客户端\n仍可用', 16, 114),
      box(`${p}-v2`, 304, 118, 170, 100, palette.yellow),
      text(`${p}-v2-t`, 330, 144, 'v2\n新字段/语义\n新客户端', 16, 114),
      box(`${p}-sunset`, 524, 118, 170, 100, palette.red),
      text(`${p}-sunset-t`, 550, 144, 'deprecate\nsunset\n下线窗口', 16, 114),
      arrow(`${p}-a1`, 260, 168, 38, 0),
      arrow(`${p}-a2`, 480, 168, 38, 0),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'query':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：查询参数是筛选器', 25, 620),
      box(`${p}-all`, 58, 108, 170, 130, palette.blue),
      text(`${p}-all-t`, 86, 136, '全集数据\n1000 rows', 16, 114),
      box(`${p}-filters`, 304, 92, 176, 162, palette.yellow),
      text(`${p}-filters-t`, 332, 120, command + '\nfilter\nsort\nsearch', 16, 120),
      box(`${p}-page`, 566, 108, 150, 130, palette.green),
      text(`${p}-page-t`, 592, 136, '结果页\n稳定排序\n可分页', 16, 98),
      arrow(`${p}-a1`, 234, 172, 64, 0),
      arrow(`${p}-a2`, 486, 172, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'oauth':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：OAuth 是授权接力', 25, 620),
      box(`${p}-user`, 54, 130, 120, 82, palette.blue),
      text(`${p}-user-t`, 78, 152, '用户\n登录同意', 16, 72),
      box(`${p}-client`, 204, 130, 120, 82, palette.yellow),
      text(`${p}-client-t`, 228, 152, '客户端\n拿 code', 16, 72),
      box(`${p}-auth`, 354, 130, 120, 82, palette.green),
      text(`${p}-auth-t`, 378, 152, '授权服\n发 token', 16, 72),
      box(`${p}-api`, 504, 130, 120, 82, palette.purple),
      text(`${p}-api-t`, 528, 152, '资源 API\n验 token', 16, 72),
      arrow(`${p}-a1`, 180, 170, 18, 0),
      arrow(`${p}-a2`, 330, 170, 18, 0),
      arrow(`${p}-a3`, 480, 170, 18, 0),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'token':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：凭证证明身份', 25, 620),
      box(`${p}-login`, 58, 118, 150, 100, palette.blue),
      text(`${p}-login-t`, 84, 144, '登录/换票\n用户名密码\n或 code', 16, 98),
      box(`${p}-token`, 304, 92, 176, 152, palette.yellow),
      text(`${p}-token-t`, 332, 120, command + '\naccess token\nexp/scope', 16, 120),
      box(`${p}-api`, 566, 118, 150, 100, palette.green),
      text(`${p}-api-t`, 592, 144, 'API 校验\nAuthorization\n通过/拒绝', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'authz':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：谁能做什么', 25, 620),
      box(`${p}-subject`, 72, 104, 150, 90, palette.blue),
      text(`${p}-subject-t`, 98, 130, '主体\n用户/服务\n角色/关系', 16, 98),
      box(`${p}-policy`, 304, 82, 176, 134, palette.yellow),
      text(`${p}-policy-t`, 332, 110, command + '\nRBAC/ABAC\nReBAC 规则', 16, 120),
      box(`${p}-resource`, 536, 104, 170, 90, palette.green),
      text(`${p}-resource-t`, 562, 130, '资源/动作\nread/write/delete', 16, 114),
      arrow(`${p}-a1`, 228, 148, 70, 0),
      arrow(`${p}-a2`, 486, 148, 44, 0),
      box(`${p}-deny`, 304, 262, 176, 58, palette.red),
      text(`${p}-deny-t`, 332, 280, '拒绝也要可解释、可审计', 15, 120),
    ];
    return scene(slug, lines);
  }
    case 'apikey':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：API Key 像门禁卡号', 25, 620),
      box(`${p}-issue`, 58, 118, 150, 100, palette.blue),
      text(`${p}-issue-t`, 84, 144, '签发\n绑定应用\n设 scope', 16, 98),
      box(`${p}-use`, 304, 92, 176, 152, palette.yellow),
      text(`${p}-use-t`, 332, 120, command + '\n请求携带\n限流/审计', 16, 120),
      box(`${p}-rotate`, 566, 118, 150, 100, palette.green),
      text(`${p}-rotate-t`, 592, 144, '轮换/吊销\n泄露响应', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'contract':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：契约连接实现与文档', 25, 620),
      box(`${p}-spec`, 58, 104, 170, 130, palette.blue),
      text(`${p}-spec-t`, 86, 132, 'OpenAPI\npaths/schemas\nexamples', 16, 114),
      box(`${p}-tools`, 304, 92, 176, 152, palette.yellow),
      text(`${p}-tools-t`, 332, 120, command + '\nSwagger\nPostman\nPortal', 16, 120),
      box(`${p}-teams`, 566, 104, 150, 130, palette.green),
      text(`${p}-teams-t`, 592, 132, '前后端\n第三方\n同一份契约', 16, 98),
      arrow(`${p}-a1`, 234, 168, 64, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'security':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：多层门禁', 25, 620),
      box(`${p}-req`, 70, 92, 560, 86, palette.cyan),
      text(`${p}-req-t`, 98, 118, 'Incoming API Request', 18, 500),
      box(`${p}-auth`, 84, 214, 120, 74, palette.blue),
      text(`${p}-auth-t`, 108, 236, '认证\nAuthN', 16, 72),
      box(`${p}-authz`, 236, 214, 120, 74, palette.yellow),
      text(`${p}-authz-t`, 260, 236, '授权\nAuthZ', 16, 72),
      box(`${p}-validate`, 388, 214, 120, 74, palette.green),
      text(`${p}-validate-t`, 412, 236, '校验\n输入', 16, 72),
      box(`${p}-limit`, 540, 214, 120, 74, palette.red),
      text(`${p}-limit-t`, 564, 236, '限流\n审计', 16, 72),
      text(`${p}-note`, 112, 346, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'error':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：错误也要标准化', 25, 620),
      box(`${p}-fail`, 58, 118, 150, 100, palette.red),
      text(`${p}-fail-t`, 84, 144, '失败请求\n4xx/5xx', 16, 98),
      box(`${p}-problem`, 304, 86, 190, 164, palette.yellow),
      text(`${p}-problem-t`, 334, 114, command + '\ntype\ntitle\ndetail\ninstance', 16, 126),
      box(`${p}-client`, 566, 118, 150, 100, palette.green),
      text(`${p}-client-t`, 592, 144, '客户端\n可程序化处理\n可展示给用户', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 500, 168, 60, 0),
    ];
    return scene(slug, lines);
  }
    case 'gateway':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：统一入口', 25, 620),
      box(`${p}-clients`, 58, 124, 150, 92, palette.blue),
      text(`${p}-clients-t`, 84, 150, '多个客户端\nWeb/App/Partner', 16, 98),
      box(`${p}-gw`, 304, 82, 176, 176, palette.yellow),
      text(`${p}-gw-t`, 332, 110, 'API Gateway\n' + command + '\n路由/鉴权/限流', 16, 126),
      box(`${p}-svc`, 566, 124, 150, 92, palette.green),
      text(`${p}-svc-t`, 592, 150, '内部微服务\nA/B/C', 16, 98),
      arrow(`${p}-a1`, 214, 170, 84, 0),
      arrow(`${p}-a2`, 486, 170, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'bff':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：BFF 为前端裁接口', 25, 620),
      box(`${p}-fe`, 58, 118, 150, 100, palette.blue),
      text(`${p}-fe-t`, 84, 144, '前端\nWeb/Mobile\n特定页面', 16, 98),
      box(`${p}-bff`, 304, 86, 176, 164, palette.yellow),
      text(`${p}-bff-t`, 332, 116, 'BFF\n聚合多个后端\n返回 UI 友好 DTO', 16, 120),
      box(`${p}-svc`, 566, 118, 150, 100, palette.green),
      text(`${p}-svc-t`, 592, 144, 'orders/users\ninventory\n多个服务', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'microservice':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：服务边界 + API 契约', 25, 620),
      box(`${p}-a`, 84, 118, 130, 90, palette.blue),
      text(`${p}-a-t`, 108, 142, 'Users Svc\n/users API', 15, 82),
      box(`${p}-b`, 304, 118, 130, 90, palette.yellow),
      text(`${p}-b-t`, 328, 142, 'Orders Svc\n/orders API', 15, 82),
      box(`${p}-c`, 524, 118, 130, 90, palette.green),
      text(`${p}-c-t`, 548, 142, 'Pay Svc\n/payments API', 15, 82),
      arrow(`${p}-a1`, 220, 162, 80, 0),
      arrow(`${p}-a2`, 440, 162, 80, 0),
      text(`${p}-note`, 112, 286, command + '：独立部署，靠 API/事件协作', 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'webhook':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：推和拉两种集成', 25, 620),
      box(`${p}-poll`, 70, 98, 220, 120, palette.blue),
      text(`${p}-poll-t`, 98, 126, 'Polling\n客户端反复问\n有更新吗？', 16, 164),
      box(`${p}-hook`, 460, 98, 220, 120, palette.green),
      text(`${p}-hook-t`, 488, 126, 'Webhook\n服务端主动回调\n事件驱动', 16, 164),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'integration':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：系统之间怎么连', 25, 620),
      box(`${p}-a`, 58, 118, 130, 90, palette.blue),
      text(`${p}-a-t`, 82, 142, '系统 A', 17, 82),
      box(`${p}-pattern`, 264, 86, 210, 154, palette.yellow),
      text(`${p}-pattern-t`, 294, 114, command + '\nREST 同步\n事件异步\nGateway/BFF', 16, 150),
      box(`${p}-b`, 550, 118, 130, 90, palette.green),
      text(`${p}-b-t`, 574, 142, '系统 B', 17, 82),
      arrow(`${p}-a1`, 194, 162, 64, 0),
      arrow(`${p}-a2`, 480, 162, 64, 0),
    ];
    return scene(slug, lines);
  }
    case 'testing':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：测试分层', 25, 620),
      box(`${p}-unit`, 110, 228, 150, 70, palette.blue),
      text(`${p}-unit-t`, 136, 248, 'Unit\nhandler 逻辑', 16, 98),
      box(`${p}-integration`, 304, 168, 150, 70, palette.yellow),
      text(`${p}-integration-t`, 330, 188, 'Integration\n依赖联调', 16, 98),
      box(`${p}-contract`, 498, 108, 150, 70, palette.green),
      text(`${p}-contract-t`, 524, 128, 'Contract\n契约一致', 16, 98),
      box(`${p}-load`, 692, 48, 150, 70, palette.red),
      text(`${p}-load-t`, 718, 68, 'Load\n容量压力', 16, 98),
      text(`${p}-note`, 112, 346, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'observability':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：Logs / Metrics / Traces', 25, 620),
      box(`${p}-req`, 58, 118, 150, 100, palette.blue),
      text(`${p}-req-t`, 84, 144, 'API 请求\ntrace id', 16, 98),
      box(`${p}-logs`, 264, 92, 130, 74, palette.yellow),
      text(`${p}-logs-t`, 288, 114, 'Logs\n发生了什么', 16, 86),
      box(`${p}-metrics`, 424, 92, 130, 74, palette.green),
      text(`${p}-metrics-t`, 448, 114, 'Metrics\n有多快/多错', 16, 86),
      box(`${p}-traces`, 584, 92, 130, 74, palette.purple),
      text(`${p}-traces-t`, 608, 114, 'Traces\n路径在哪', 16, 86),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'performance':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：先测量再优化', 25, 620),
      box(`${p}-metric`, 58, 118, 150, 100, palette.blue),
      text(`${p}-metric-t`, 84, 144, '指标\nP95 延迟\n吞吐/错误率', 16, 98),
      box(`${p}-bottleneck`, 304, 86, 176, 164, palette.yellow),
      text(`${p}-bottleneck-t`, 332, 116, command + '\nDB/CPU/网络\n序列化/锁', 16, 120),
      box(`${p}-fix`, 566, 118, 150, 100, palette.green),
      text(`${p}-fix-t`, 592, 144, '缓存/异步\n扩容/限流', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'messaging':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：异步解耦', 25, 620),
      box(`${p}-prod`, 58, 118, 150, 100, palette.blue),
      text(`${p}-prod-t`, 84, 144, 'Producer\n发布事件', 16, 98),
      box(`${p}-queue`, 304, 86, 176, 164, palette.yellow),
      text(`${p}-queue-t`, 332, 116, command + '\nQueue/Topic\nack/retry/DLQ', 16, 120),
      box(`${p}-cons`, 566, 118, 150, 100, palette.green),
      text(`${p}-cons-t`, 592, 144, 'Consumer\n异步处理', 16, 98),
      arrow(`${p}-a1`, 214, 168, 84, 0),
      arrow(`${p}-a2`, 486, 168, 74, 0),
    ];
    return scene(slug, lines);
  }
    case 'lifecycle':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：API 也有生命周期', 25, 620),
      box(`${p}-design`, 48, 126, 112, 72, palette.blue),
      text(`${p}-design-t`, 70, 148, 'Design\n设计', 15, 68),
      box(`${p}-build`, 190, 126, 112, 72, palette.yellow),
      text(`${p}-build-t`, 212, 148, 'Build\n实现', 15, 68),
      box(`${p}-publish`, 332, 126, 112, 72, palette.green),
      text(`${p}-publish-t`, 354, 148, 'Publish\n发布', 15, 68),
      box(`${p}-deprec`, 474, 126, 112, 72, palette.red),
      text(`${p}-deprec-t`, 496, 148, 'Deprecate\n弃用', 15, 68),
      box(`${p}-retire`, 616, 126, 112, 72, palette.purple),
      text(`${p}-retire-t`, 638, 148, 'Retire\n下线', 15, 68),
      arrow(`${p}-a1`, 164, 162, 20, 0),
      arrow(`${p}-a2`, 306, 162, 20, 0),
      arrow(`${p}-a3`, 448, 162, 20, 0),
      arrow(`${p}-a4`, 590, 162, 20, 0),
      text(`${p}-note`, 112, 286, command, 18, 520),
    ];
    return scene(slug, lines);
  }
    case 'compliance':
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：敏感数据有边界', 25, 620),
      box(`${p}-data`, 58, 104, 170, 130, palette.blue),
      text(`${p}-data-t`, 86, 132, 'API 数据\nPII/PHI\n支付信息', 16, 114),
      box(`${p}-controls`, 304, 82, 190, 174, palette.yellow),
      text(`${p}-controls-t`, 334, 110, command + '\n最小采集\n加密/脱敏\n留存/删除', 16, 126),
      box(`${p}-law`, 566, 104, 150, 130, palette.green),
      text(`${p}-law-t`, 592, 132, '法规要求\nGDPR/CCPA\nHIPAA/PCI', 16, 98),
      arrow(`${p}-a1`, 234, 168, 64, 0),
      arrow(`${p}-a2`, 500, 168, 60, 0),
    ];
    return scene(slug, lines);
  }
    case 'request':
    default:
      {
    const lines = [
      text(`${p}-title`, 76, 18, title + '：请求到响应', 25, 620),
      box(`${p}-client`, 58, 124, 150, 92, palette.blue),
      text(`${p}-client-t`, 84, 150, 'Client\n发起请求', 16, 98),
      box(`${p}-api`, 304, 96, 184, 148, palette.yellow),
      text(`${p}-api-t`, 334, 124, command, 16, 124),
      box(`${p}-res`, 566, 124, 150, 92, palette.green),
      text(`${p}-res-t`, 592, 150, 'Response\n可预期结果', 16, 98),
      arrow(`${p}-a1`, 214, 170, 84, 0),
      arrow(`${p}-a2`, 494, 170, 68, 0),
    ];
    return scene(slug, lines);
  }
  }
}


function slugify(label, id) {
  const base = label.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9/-]+/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base || `node-${id.slice(0, 8)}`;
}

const specs = JSON.parse(readFileSync('scripts/api-design-node-specs.json', 'utf8'));
const usedSlugs = new Set();

const allSpecs = specs.map((node) => {
  const craft = HANDCRAFTED[node.label];
  if (!craft) throw new Error(`Missing HANDCRAFTED for label: ${node.label}`);
  let slug = slugify(node.label, node.id);
  if (usedSlugs.has(slug)) slug = `${slug}-${node.id.slice(0, 6)}`;
  usedSlugs.add(slug);
  const title = node.label.length > 26 ? node.label : craft.heading.split('：')[0];
  return {
    id: node.id,
    label: node.label,
    slug,
    diagram: node.diagram,
    command: node.command,
    title,
    ...craft,
  };
});

if (allSpecs.length !== 97) {
  console.error('Expected 97 nodes, got', allSpecs.length);
  process.exit(1);
}

const diagramEntries = allSpecs.map((s) => buildDiagram(s.slug, s.diagram, s.title, s.command)).join('\n');

const lessonEntries = allSpecs.map((s) => {
  const routeStr = s.route.map((r) =>
    `      { label: '${esc(r.label)}', title: '${esc(r.title)}', text: '${esc(r.text)}' },`,
  ).join('\n');
  return `  "${s.id}": {
    heading: '${esc(s.heading)}',
    subheading: '${esc(s.subheading)}',
    scene: '${esc(s.scene)}',
    core: '${esc(s.core)}',
    metaphor: '${esc(s.metaphor)}',
    mistake: '${esc(s.mistake)}',
    confusion: '${esc(s.confusion)}',
    experiment: '${esc(s.experiment)}',
    route: [
${routeStr}
    ],
    rawDiagram: API_DESIGN_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const API_DESIGN_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const API_DESIGN_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/api-design/teaching-handcrafted.ts', out);
const { size } = statSync('src/roadmaps/api-design/teaching-handcrafted.ts');
console.log('Wrote teaching-handcrafted.ts', size, 'bytes,', allSpecs.length, 'nodes,', usedSlugs.size, 'diagram slugs');
