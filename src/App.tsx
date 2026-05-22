import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Alert, Button, Card, Collapse, Drawer, Flex, Input, Layout, List, Progress, Select, Space, Statistic, Steps, Tabs, Tag, Typography } from 'antd';
import type { CollapseProps, TabsProps } from 'antd';
import { roadmaps } from './roadmaps/registry';

const { Header, Content } = Layout;
const { Text, Title, Paragraph } = Typography;

const activeRoadmap = roadmaps.backend;
const { stages, tutorials } = activeRoadmap;

type Stage = (typeof stages)[number];
type StageNode = Stage['nodes'][number];
type Tutorial = (typeof tutorials)[keyof typeof tutorials];

const MAP_WIDTH = activeRoadmap.mapWidth;
const MAP_HEIGHT = activeRoadmap.mapHeight;
const STORAGE_KEY = activeRoadmap.storageKey;

const routePath = stages
  .map((stage) => ({ x: stage.mapX + 46, y: stage.mapY + 42 }))
  .reduce((path, point, index, points) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    const prev = points[index - 1];
    const midX = (prev.x + point.x) / 2;
    return `${path} C ${midX} ${prev.y}, ${midX} ${point.y}, ${point.x} ${point.y}`;
  }, '');

const categoryResources: Record<string, { links: string[]; books: string[] }> = {
  api: {
    links: ['MDN HTTP 概览：https://developer.mozilla.org/zh-CN/docs/Web/HTTP', 'OpenAPI 规范：https://spec.openapis.org/oas/latest.html'],
    books: ['《RESTful Web APIs》', '《Web API Design》'],
  },
  database: {
    links: ['PostgreSQL 官方教程：https://www.postgresql.org/docs/current/tutorial.html', 'Use The Index, Luke：https://use-the-index-luke.com/'],
    books: ['《SQL 必知必会》', '《数据库系统概念》'],
  },
  security: {
    links: ['OWASP Top 10：https://owasp.org/www-project-top-ten/', 'MDN Web Security：https://developer.mozilla.org/en-US/docs/Web/Security'],
    books: ['《Web 应用安全权威指南》', '《OAuth 2 in Action》'],
  },
  ops: {
    links: ['Google SRE Book：https://sre.google/books/', 'Kubernetes 文档：https://kubernetes.io/docs/home/'],
    books: ['《Site Reliability Engineering》', '《Kubernetes in Action》'],
  },
  general: {
    links: ['roadmap.sh backend：https://roadmap.sh/backend', 'MDN Web Docs：https://developer.mozilla.org/'],
    books: ['《代码整洁之道》', '《设计数据密集型应用》'],
  },
};

function inferCategory(text: string) {
  const lower = text.toLowerCase();
  if (/(api|rest|graphql|grpc|openapi|http)/.test(lower)) return 'api';
  if (/(sql|database|redis|mongo|postgres|mysql|index|transaction|nosql)/.test(lower)) return 'database';
  if (/(security|auth|jwt|oauth|tls|https|cors|owasp|hash|bcrypt)/.test(lower)) return 'security';
  if (/(docker|kubernetes|monitor|observability|scale|circuit|devops)/.test(lower)) return 'ops';
  return 'general';
}

function useDoneState() {
  const [done, setDone] = useState<Set<string>>(() => new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')));
  const toggle = (id: string) => {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  };
  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setDone(new Set());
  };
  return { done, toggle, reset };
}

function inferDiagramType(tutorial: Tutorial) {
  const text = `${tutorial.zh} ${tutorial.en} ${tutorial.what}`.toLowerCase();
  if (/(http|https|dns|domain|hosting|cdn|internet|rest|api|openapi|graphql|grpc|soap)/.test(text)) return 'request';
  if (/(sql|database|postgres|mysql|mariadb|oracle|mongodb|nosql|index|transaction|acid|orm)/.test(text)) return 'database';
  if (/(redis|cache|caching|memcached)/.test(text)) return 'cache';
  if (/(auth|authentication|oauth|jwt|cookie|token|saml|openid|basic)/.test(text)) return 'auth';
  if (/(security|cors|csrf|xss|owasp|ssl|tls|md5|bcrypt|hash|content security)/.test(text)) return 'security';
  if (/(git|github|gitlab|version control|repo|copilot)/.test(text)) return 'git';
  if (/(docker|kubernetes|container|ci|cd|deployment|server|linux|terminal|shell|web server|nginx|apache)/.test(text)) return 'deploy';
  if (/(queue|message|rabbitmq|kafka|event|realtime|websocket|sse|polling)/.test(text)) return 'event';
  if (/(scale|scalability|load balancer|circuit breaker|observability|monitoring|architect|system design|monolith|microservice|soa)/.test(text)) return 'system';
  return 'mental-model';
}

function DiagramBox({ x, y, w, h, title, sub, tone = 'blue' }: { x: number; y: number; w: number; h: number; title: string; sub?: string; tone?: 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gray' }) {
  return (
    <g className="diagram-box">
      <rect x={x} y={y} width={w} height={h} rx="14" className={`diagram-rect ${tone}`} />
      <text x={x + w / 2} y={y + 30} textAnchor="middle" className="diagram-title">{title}</text>
      {sub && <text x={x + w / 2} y={y + 52} textAnchor="middle" className="diagram-sub">{sub}</text>}
    </g>
  );
}

function FlowArrow({ d, danger = false }: { d: string; danger?: boolean }) {
  return <path d={d} className={`diagram-flow ${danger ? 'danger' : ''}`} markerEnd={danger ? 'url(#arrow-danger)' : 'url(#arrow)'} />;
}

type FoundationStep = {
  label: string;
  title: string;
  text: string;
};

type FoundationLesson = {
  scene: string;
  core: string;
  route: FoundationStep[];
  confusion: string;
  experiment: string;
};

const foundationLessons: Record<string, FoundationLesson> = {
  SiYUdtYMDImRPmV2_XPkH: {
    scene: '你在浏览器输入一个网址，几秒后页面出现。互联网基础要讲清楚的，就是这几秒里“地址怎么找、路怎么走、东西怎么回来”。',
    core: '互联网不是一个大机器，而是一堆设备按共同规则互相传小包裹。你只要先抓住：客户端、服务器、IP、DNS、HTTP、响应，这条主线就不会迷路。',
    route: [
      { label: '输入网址', title: '你说出“我要去哪”', text: '网址像收件地址，但浏览器还不能直接用它送信。它要先把人类好记的域名换成机器能找的 IP。' },
      { label: 'DNS 找地址', title: '查通讯录', text: 'DNS 像互联网通讯录：把 example.com 查成 93.184.216.34。没有 DNS，你就得背一堆数字地址。' },
      { label: '网络送包', title: '包裹一站站转运', text: '请求会被拆成数据包，经由路由器转发。你不需要知道每个中转站，但要知道它不是“瞬移”。' },
      { label: '服务器处理', title: '后端开始干活', text: '服务器收到请求后，可能查数据库、读缓存、调用其他服务，然后组织出响应。' },
      { label: '浏览器展示', title: '把结果拼成页面', text: '浏览器收到 HTML/CSS/JS/图片等资源，再解析、布局、绘制，最后你才看到页面。' },
    ],
    confusion: '不要把“互联网”“Web”“HTTP”混成一个词：互联网是底层网络，Web 是跑在互联网上的一种应用，HTTP 是 Web 常用的通信规则。',
    experiment: '打开浏览器开发者工具 Network，刷新任意网页，看第一条 Document 请求，再观察后续 CSS、JS、图片请求。你会看到页面不是一次拿完的。',
  },
  yCnn-NfSxIybUQ2iTuUGq: {
    scene: '把互联网想成快递系统：你是寄件人，服务器是收件/发货仓库，IP 是门牌号，路由器是分拣中心。',
    core: '互联网工作的关键不是“连上网”这句话，而是：数据如何被切成包、如何找到目标、如何跨很多中间节点送达。',
    route: [
      { label: '设备入网', title: '先拿到自己的地址', text: '手机或电脑连上网络后，会获得一个局域网地址，并通过网关去访问外部世界。' },
      { label: '目标 IP', title: '知道对方门牌号', text: '要访问服务，最终要找到服务器 IP。域名只是方便人读，机器通信靠 IP。' },
      { label: '路由转发', title: '每一站只决定下一站', text: '路由器不需要知道完整路线，它只根据规则把包交给更接近目标的下一站。' },
      { label: 'TCP/UDP', title: '选择运输方式', text: 'TCP 像挂号信，强调可靠和顺序；UDP 像普通广播，轻快但不保证每个包都到。' },
      { label: '应用协议', title: '最后按约定说话', text: '到达服务器后，还要按 HTTP、WebSocket 等应用层协议解释内容。' },
    ],
    confusion: 'IP 负责“找到哪台机器”，端口负责“找到机器里的哪个程序”。访问 80/443 通常是 Web 服务，不等于整台机器只有这一个服务。',
    experiment: '在终端执行 `ping example.com` 和 `traceroute example.com`，分别观察能否到达目标、经过哪些中转节点。',
  },
  ZhSuu2VArnzPDp6dPQQSC: {
    scene: '你不想记住每家店的经纬度，所以用店名导航。域名就是互联网里的“店名”。',
    core: '域名的价值是把难记、可能变化的 IP 包装成人能记住的名字。真正访问时，域名仍要解析成 IP。',
    route: [
      { label: '域名', title: '人类好记的名字', text: '比如 google.com、github.com。域名有层级，越右边越大，例如 .com 是顶级域。' },
      { label: 'DNS 记录', title: '名字背后的指向', text: 'A 记录指向 IPv4，AAAA 指向 IPv6，CNAME 像别名，MX 用于邮件。' },
      { label: '解析结果', title: '拿到 IP', text: '浏览器拿到 IP 后，才知道要连接哪台服务器或负载均衡入口。' },
      { label: '证书匹配', title: 'HTTPS 还要验身份', text: 'HTTPS 证书也会检查域名，防止你以为去了 A 网站，实际连到假网站。' },
    ],
    confusion: '买了域名不等于网站上线。还需要 DNS 配置、服务器/托管、应用服务、HTTPS 证书。',
    experiment: '执行 `dig github.com` 或 `nslookup github.com`，看返回的 A/AAAA/CNAME 记录。',
  },
  hkxw9jPGYphmjhTjw8766: {
    scene: 'DNS 像问路：你先问身边的人，不知道再问区里、市里、总部，直到找到答案。',
    core: 'DNS 是分层查询和缓存系统。它让域名解析既可管理，又不会每次都从根服务器问到尾。',
    route: [
      { label: '浏览器缓存', title: '先问自己记不记得', text: '浏览器和系统会缓存 DNS 结果，避免每次访问都重新查询。' },
      { label: '递归解析器', title: '交给熟悉路线的人', text: '通常是运营商、公司或公共 DNS。它负责一路替你问到底。' },
      { label: '根域', title: '先问顶层在哪', text: '根服务器告诉你 .com、.cn 这类顶级域该问谁。' },
      { label: '权威 DNS', title: '最终答案保管处', text: '权威 DNS 保存域名真正配置，比如 A、CNAME、MX、TXT。' },
      { label: 'TTL 缓存', title: '答案有保质期', text: 'TTL 决定这个解析结果能缓存多久。改 DNS 后不立刻生效，常常就是 TTL 还没过。' },
    ],
    confusion: 'DNS 解析成功只说明“找到了地址”，不代表服务器活着，也不代表 HTTP 接口正常。',
    experiment: '改用 `dig +trace example.com` 看完整查询链路，再用 `dig example.com` 看普通递归结果。',
  },
  R12sArWVpbIs_PHxBqVaR: {
    scene: 'HTTP 像你在窗口办业务：你递一张表单，窗口按规则处理，再给你回执。',
    core: 'HTTP 要掌握四件事：方法表示意图，URL 表示资源，Header 带元信息，Body 带具体内容。状态码告诉你结果。',
    route: [
      { label: 'Method', title: '我要做什么', text: 'GET 通常是读取，POST 通常是提交，PUT/PATCH 更新，DELETE 删除。方法是请求意图。' },
      { label: 'URL', title: '我要操作谁', text: '/users/123 表示用户 123 这个资源。好的 API 会让 URL 像资源路径，而不是一堆动作名字。' },
      { label: 'Headers', title: '附加说明', text: '例如 Authorization 表示身份，Content-Type 表示 Body 格式，Cookie 带浏览器状态。' },
      { label: 'Body', title: '具体材料', text: 'POST/PUT 常把 JSON、表单、文件放在 Body 里。GET 一般不依赖 Body。' },
      { label: 'Status', title: '办理结果', text: '2xx 成功，3xx 重定向，4xx 是客户端问题，5xx 是服务端问题。先看状态码能少走弯路。' },
    ],
    confusion: 'HTTP 不是“后端接口”本身，而是浏览器/客户端和服务器说话的格式。接口只是用 HTTP 暴露能力。',
    experiment: '打开 Network，点任意请求，依次看 Method、URL、Request Headers、Payload、Response、Status Code。',
  },
  x-WBJjBd8u93ym5gtxGsR: {
    scene: 'HTTPS 像把明信片放进上锁信封，并确认收信人真的是那家公司。',
    core: 'HTTPS = HTTP + TLS。它主要解决三件事：别人看不懂、别人改不了、你连的不是假服务器。',
    route: [
      { label: '握手', title: '先确认怎么加密', text: '浏览器和服务器先协商加密方式，并拿到服务器证书。' },
      { label: '证书', title: '确认对方身份', text: '证书由可信 CA 签发，里面写着域名和公钥。浏览器会验证它是否可信、是否过期、域名是否匹配。' },
      { label: '密钥', title: '生成临时暗号本', text: '双方协商出本次连接使用的会话密钥，后续数据用它加密，速度更快。' },
      { label: '传输', title: '安全发送 HTTP', text: '真正的 HTTP 请求和响应被包在加密通道里传输。中间人看不到明文，也难以篡改。' },
    ],
    confusion: 'HTTPS 不保证业务安全。它保护传输过程，但如果接口越权、密码太弱、服务端泄露，HTTPS 也救不了。',
    experiment: '点击浏览器地址栏小锁，查看证书颁发给谁、由谁签发、什么时候过期。',
  },
  KWTbEVX_WxS8jmSaAX3Fe: {
    scene: 'HTTP 缓存像把常用文件放在手边：不用每次都跑到仓库拿，但也要知道什么时候会过期。',
    core: '缓存要理解两条路：强缓存直接用本地副本；协商缓存先问服务器“我这个还新吗”。',
    route: [
      { label: '第一次请求', title: '先拿到资源和缓存规则', text: '服务器返回文件，同时通过 Cache-Control、ETag、Last-Modified 告诉浏览器怎么缓存。' },
      { label: '强缓存', title: '没过期就直接用', text: 'Cache-Control: max-age=3600 表示 1 小时内可直接用缓存，不发请求。' },
      { label: '协商缓存', title: '过期后先问一句', text: '浏览器带 If-None-Match 或 If-Modified-Since 问服务器。没变就返回 304，不用重新下载内容。' },
      { label: '更新策略', title: '资源变了怎么办', text: '前端静态资源常用文件名 hash：内容变，文件名变，缓存自然失效。' },
    ],
    confusion: '刷新页面不一定等于重新下载。Network 里看到 200、304、memory cache、disk cache，含义都不一样。',
    experiment: 'Network 勾选 Disable cache 前后刷新同一页面，对比 Size 列和 Status Code。',
  },
  P82WFaTPgQEPNp5IIuZ1Y: {
    scene: '浏览器像一个小型操作系统：会下载资源、解析代码、排版、绘制，还要执行 JS。',
    core: '理解浏览器工作流，能帮你判断问题是在网络、缓存、HTML/CSS、JS 执行，还是渲染性能。',
    route: [
      { label: 'Network', title: '先把资源拿回来', text: '浏览器根据 HTML 发现 CSS、JS、图片等资源，发多个请求下载。' },
      { label: 'Parse', title: '解析成结构树', text: 'HTML 变 DOM，CSS 变 CSSOM。浏览器需要这两棵树才能知道页面有什么、长什么样。' },
      { label: 'Layout', title: '计算每个元素的位置', text: '盒模型、宽高、Flex/Grid 都在这里影响元素最终位置。' },
      { label: 'Paint', title: '把像素画出来', text: '颜色、边框、阴影、文字会被绘制到屏幕。动画和滚动还涉及合成。' },
      { label: 'JS', title: '脚本会改变一切', text: 'JS 可以改 DOM、发请求、处理点击。它太慢会卡住页面响应。' },
    ],
    confusion: '页面慢不一定是后端慢。先看 Network 的耗时，再看资源大小和 Console 错误。',
    experiment: '打开 Performance 录制一次刷新，观察 Network、Scripting、Rendering、Painting 各花了多久。',
  },
  aqMaEY8gkKMikiqleV5EP: {
    scene: '托管就是“你的代码到底住在哪里、谁负责让它一直在线”。',
    core: '静态页面、后端服务、数据库、文件存储可以托管在不同地方。后端学习要知道每一类东西放哪、怎么访问、怎么扩容。',
    route: [
      { label: '静态资源', title: 'HTML/CSS/JS/图片', text: '可以放 CDN、对象存储、Vercel、Netlify。特点是文件不主动运行，只被下载。' },
      { label: '后端服务', title: '会运行代码的程序', text: '需要服务器、容器、函数计算或 PaaS。它接请求、查数据、返回结果。' },
      { label: '数据库', title: '保存业务数据', text: '通常单独托管，应用通过连接串访问。数据库最怕误删、泄露和慢查询。' },
      { label: '域名/HTTPS', title: '让用户安全访问', text: '托管完成后，还要绑定域名、配置证书、设置反向代理或网关。' },
    ],
    confusion: '“部署了前端”不等于“部署了后端”。静态页面能打开，但接口可能仍然连不到。',
    experiment: '找一个网站，判断它的静态资源、API 域名、图片域名是不是同一个域。Network 里很容易看出来。',
  },
  oyg5g4-cY5EBEUgVkjnL3: {
    scene: '后端不需要先成为前端高手，但要能看懂页面怎么发请求、数据怎么展示。',
    core: '前端基础对后端的价值是：你能读懂 HTML 表单、CSS 选择器、JS 请求代码、Network 面板，从而定位接口问题。',
    route: [
      { label: 'HTML', title: '页面骨架', text: '按钮、输入框、表单、链接都来自 HTML。接口入参很多时候就是从这些控件收集来的。' },
      { label: 'CSS', title: '页面外观和布局', text: 'CSS 决定元素位置、大小、颜色。它一般不影响后端逻辑，但会影响你看不看得到按钮。' },
      { label: 'JS', title: '交互和请求', text: '点击按钮后，JS 往往会调用 fetch/axios 发 HTTP 请求，然后把响应渲染到页面。' },
      { label: 'Network', title: '前后端交界处', text: '后端排查前端问题时，最重要的是 Network：请求发没发、参数是什么、响应是什么。' },
    ],
    confusion: '页面没变化不一定是后端没返回，可能是前端状态没更新、样式遮住、JS 报错。',
    experiment: '找一个带搜索的网站，搜索一次，然后在 Network 里找到对应请求，看 Query、Payload 和 Response。',
  },
  '9-pCsW650T1mfj5dmRB9L': {
    scene: 'HTML 像房子的结构图：哪里是门、哪里是窗、哪里放表单，先把骨架搭出来。',
    core: 'HTML 不是“画得好看”，而是表达页面语义和结构。后端要能看懂表单字段、链接、按钮和数据展示区域。',
    route: [
      { label: '标签', title: '每个元素的角色', text: 'form 表示表单，input 表示输入，button 表示动作，a 表示跳转。语义清楚，代码才好维护。' },
      { label: '属性', title: '元素的配置', text: 'name、type、href、method、action 等属性会影响数据如何提交、跳到哪里。' },
      { label: '表单', title: '用户输入如何变成请求', text: '表单字段常变成 Query、FormData 或 JSON，最终传给后端。' },
      { label: 'DOM', title: '浏览器理解后的树', text: '浏览器把 HTML 解析成 DOM 树，JS 可以读取和修改它。' },
    ],
    confusion: 'HTML 本身不负责保存数据。它只是结构，真正提交、校验、保存通常要 JS 和后端配合。',
    experiment: '右键页面“检查”，选中一个输入框，看它是什么标签、有哪些属性。',
  },
  utA1W2O6pzoV_LbtDE5DN: {
    scene: 'CSS 像装修规则：同一个房子骨架，可以装修成完全不同的样子。',
    core: 'CSS 要先理解选择器、盒模型、布局。后端不必精通视觉设计，但要知道样式为什么会让元素错位或不可见。',
    route: [
      { label: '选择器', title: '选中谁', text: '.class、#id、div button 都是在说“这条规则应用到哪些元素”。' },
      { label: '盒模型', title: '元素占多大', text: 'content、padding、border、margin 一起决定一个元素真实占位。布局问题常从这里开始。' },
      { label: '布局', title: '元素怎么排队', text: 'Flex 适合一维排列，Grid 适合二维网格。position 会让元素脱离普通文档流。' },
      { label: '层叠', title: '为什么这条样式生效', text: '后写、权重更高、!important 都会影响最终样式。DevTools 的 Computed 面板能看真相。' },
    ],
    confusion: 'CSS 看起来“只是样子”，但它能导致按钮点不到、内容被遮挡、滚动区域异常。',
    experiment: '在 DevTools 里临时修改一个元素的 margin/padding/display，看页面如何变化。',
  },
  NvUcSDWBhzJZ31nzT4UlE: {
    scene: '代码托管平台像团队的代码仓库和协作大厅：代码放这里，讨论、审查、自动构建也在这里发生。',
    core: '你要知道远程仓库、分支、Pull Request、Code Review、CI 的关系。后端工作不是只在本地写代码。',
    route: [
      { label: 'Push', title: '把本地代码上传', text: '你在本地 commit 后，push 到 GitHub/GitLab 这类远程仓库。' },
      { label: 'Branch', title: '独立做一条线', text: '功能分支让你改代码时不影响主线，便于多人并行。' },
      { label: 'PR/MR', title: '请求合并', text: 'Pull Request/Merge Request 是把你的改动交给团队检查和讨论的入口。' },
      { label: 'Review', title: '别人帮你看风险', text: 'Review 不只是挑格式，更重要是发现 bug、越权、性能、兼容问题。' },
      { label: 'CI', title: '机器自动验收', text: 'CI 会跑测试、构建、扫描。失败时不要硬合，要先看日志。' },
    ],
    confusion: 'Git 是版本控制工具，GitHub/GitLab 是托管和协作平台。二者不是一回事。',
    experiment: '打开任意开源项目的 Pull Requests，看看一个改动从提交到讨论再到合并的过程。',
  },
};

function FoundationBlackboard({ tutorial, active, onPick }: { tutorial: Tutorial; active: number; onPick: (index: number) => void }) {
  const id = tutorial.id;
  const pick = (index: number) => () => onPick(index);
  const activeClass = (index: number) => (active === index ? ' active' : '');

  const commonDefs = (
    <defs>
      <marker id={`chalk-arrow-${id}`} markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
        <path d="M2,2 L10,6 L2,10" className="chalk-arrow-head" />
      </marker>
      <filter id={`paper-shadow-${id}`} x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#5b4630" floodOpacity="0.12" />
      </filter>
    </defs>
  );

  const line = (d: string, index?: number) => <path d={d} className={`chalk-line${index === undefined ? '' : activeClass(index)}`} markerEnd={`url(#chalk-arrow-${id})`} />;
  const box = (x: number, y: number, w: number, h: number, title: string, sub?: string, index?: number) => (
    <g className={`chalk-box${index === undefined ? '' : activeClass(index)}`} onClick={index === undefined ? undefined : pick(index)}>
      <rect x={x} y={y} width={w} height={h} rx="14" />
      <text x={x + w / 2} y={y + 34} textAnchor="middle" className="chalk-title">{title}</text>
      {sub && <text x={x + w / 2} y={y + 58} textAnchor="middle" className="chalk-sub">{sub}</text>}
    </g>
  );

  const label = (x: number, y: number, text: string) => <text x={x} y={y} className="chalk-label">{text}</text>;

  return (
    <div className="foundation-board">
      <svg viewBox="0 0 760 360" role="img" aria-label={`${tutorial.zh} 黑板图`}>
        {commonDefs}

        {id === '9-pCsW650T1mfj5dmRB9L' && (
          <>
            <text x="36" y="42" className="board-heading">HTML 像房子的结构图：标签搭骨架，浏览器把它读成 DOM 树</text>
            <g className="chalk-code" onClick={pick(0)}>
              <rect x="34" y="82" width="304" height="218" rx="18" />
              <text x="62" y="122">&lt;form&gt;</text>
              <text x="92" y="160">&lt;input name="keyword" /&gt;</text>
              <text x="92" y="198">&lt;button&gt;搜索&lt;/button&gt;</text>
              <text x="62" y="236">&lt;/form&gt;</text>
              <text x="62" y="278" className="chalk-hint">左边是你写的 HTML 标签</text>
            </g>
            <path d="M350 188 C392 154, 420 154, 462 188" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <g className="dom-tree">
              <g className={`internet-card dns ${activeClass(3)}`} onClick={pick(3)}>
                <rect x="472" y="72" width="154" height="64" rx="16" />
                <text x="549" y="112" textAnchor="middle" className="card-title">form</text>
              </g>
              <g className={`internet-card ${activeClass(1)}`} onClick={pick(1)}>
                <rect x="404" y="190" width="132" height="64" rx="16" />
                <text x="470" y="228" textAnchor="middle" className="card-title">input</text>
              </g>
              <g className={`internet-card ${activeClass(2)}`} onClick={pick(2)}>
                <rect x="586" y="190" width="132" height="64" rx="16" />
                <text x="652" y="228" textAnchor="middle" className="card-title">button</text>
              </g>
              <path d="M548 136 L470 190" className="story-arrow" />
              <path d="M558 136 L652 190" className="story-arrow" />
              <text x="558" y="316" textAnchor="middle" className="card-title">右边是浏览器理解后的 DOM 树</text>
            </g>
          </>
        )}

        {id === 'utA1W2O6pzoV_LbtDE5DN' && (
          <>
            <text x="36" y="42" className="board-heading">CSS 像装修说明：先选中元素，再决定盒子大小、位置和层级</text>
            <g onClick={pick(0)}>
              <rect x="54" y="86" width="198" height="70" rx="14" className="chalk-paper" />
              <text x="82" y="130" className="chalk-title">.card button</text>
              <text x="74" y="184" className="card-title">选择器：先选中谁</text>
            </g>
            {line('M264 120 H338', 0)}
            <g onClick={pick(1)} className="box-model">
              <rect x="352" y="76" width="260" height="180" rx="14" className="margin-box" />
              <rect x="388" y="112" width="188" height="108" rx="12" className="border-box" />
              <rect x="424" y="142" width="116" height="48" rx="8" className="content-box" />
              <text x="485" y="164" textAnchor="middle">内容</text>
              <text x="482" y="100" textAnchor="middle">margin 外边距</text>
              <text x="482" y="136" textAnchor="middle">border / padding</text>
            </g>
            <g className={`internet-card ${activeClass(2)}`} onClick={pick(2)}>
              <rect x="82" y="250" width="168" height="58" rx="14" />
              <text x="166" y="286" textAnchor="middle" className="card-title">Flex / Grid 排队</text>
            </g>
            <g className={`internet-card address ${activeClass(3)}`} onClick={pick(3)}>
              <rect x="330" y="264" width="168" height="58" rx="14" />
              <text x="414" y="300" textAnchor="middle" className="card-title">层叠：谁覆盖谁</text>
            </g>
            <path d="M252 280 H326" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}

        {id === 'R12sArWVpbIs_PHxBqVaR' && (
          <>
            <text x="36" y="42" className="board-heading">HTTP 像一张标准业务单：写清楚我要做什么、找谁、带什么材料</text>
            <g className="request-card">
              <rect x="44" y="78" width="310" height="224" rx="18" />
              <text x="72" y="118" className={active === 0 ? 'chalk-hot' : ''} onClick={pick(0)}>GET  /users/123</text>
              <text x="72" y="154" className={active === 1 ? 'chalk-hot' : ''} onClick={pick(1)}>URL: 要操作哪个资源</text>
              <text x="72" y="190" className={active === 2 ? 'chalk-hot' : ''} onClick={pick(2)}>Header: Authorization...</text>
              <text x="72" y="226" className={active === 3 ? 'chalk-hot' : ''} onClick={pick(3)}>Body: {"{ name: 'tu' }"}</text>
              <text x="72" y="270" className="chalk-hint">请求单 = Method + URL + Header + Body</text>
            </g>
            <path d="M360 188 C398 178, 420 178, 454 188" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <g className={`internet-card server ${activeClass(3)}`}>
              <rect x="466" y="130" width="126" height="84" rx="18" />
              <text x="529" y="166" textAnchor="middle" className="card-title">后端</text>
              <text x="529" y="190" textAnchor="middle" className="mini-text">按规则处理</text>
            </g>
            <path d="M596 188 C626 190, 640 206, 650 230" className={`story-arrow ${activeClass(4)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <g className={`internet-card address ${activeClass(4)}`} onClick={pick(4)}>
              <rect x="620" y="240" width="110" height="60" rx="14" />
              <text x="675" y="276" textAnchor="middle" className="card-title">200 / 404</text>
            </g>
          </>
        )}

        {id === 'KWTbEVX_WxS8jmSaAX3Fe' && (
          <>
            <text x="36" y="42" className="board-heading">HTTP 缓存：能用本地副本就别跑远路，拿不准再问服务器</text>
            <g className={`internet-card browser ${activeClass(0)}`}>
              <rect x="42" y="126" width="134" height="72" rx="16" />
              <text x="109" y="156" textAnchor="middle" className="card-title">浏览器</text>
              <text x="109" y="180" textAnchor="middle" className="mini-text">想要 logo.png</text>
            </g>
            <g className={`internet-card dns ${activeClass(1)}`} onClick={pick(1)}>
              <rect x="286" y="74" width="158" height="76" rx="16" />
              <text x="365" y="106" textAnchor="middle" className="card-title">本地缓存</text>
              <text x="365" y="130" textAnchor="middle" className="mini-text">没过期，直接用</text>
            </g>
            <g className={`internet-card server ${activeClass(2)}`} onClick={pick(2)}>
              <rect x="286" y="226" width="158" height="76" rx="16" />
              <text x="365" y="258" textAnchor="middle" className="card-title">服务器</text>
              <text x="365" y="282" textAnchor="middle" className="mini-text">权威版本</text>
            </g>
            <g className={`internet-card address ${activeClass(1)}`}>
              <rect x="574" y="126" width="128" height="72" rx="16" />
              <text x="638" y="156" textAnchor="middle" className="card-title">直接显示</text>
              <text x="638" y="180" textAnchor="middle" className="mini-text">快</text>
            </g>
            <path d="M178 150 C224 96, 244 100, 282 112" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M446 112 C500 102, 534 130, 570 154" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M178 174 C224 254, 244 260, 282 264" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M446 264 C518 258, 552 208, 574 174" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <text x="364" y="190" textAnchor="middle" className="card-title">强缓存：不发请求</text>
            <text x="364" y="334" textAnchor="middle" className="card-title">协商缓存：ETag / 304，只确认有没有变</text>
          </>
        )}

        {id === 'ZhSuu2VArnzPDp6dPQQSC' && (
          <>
            <text x="36" y="42" className="board-heading">域名是给人看的名字，IP 才是机器真正要去的门牌号</text>
            <g className={`internet-card address ${activeClass(0)}`} onClick={pick(0)}>
              <rect x="58" y="118" width="158" height="76" rx="18" />
              <text x="137" y="150" textAnchor="middle" className="card-title">github.com</text>
              <text x="137" y="174" textAnchor="middle" className="mini-text">人类好记</text>
            </g>
            <g className={`internet-card dns ${activeClass(1)}`} onClick={pick(1)}>
              <rect x="304" y="82" width="158" height="92" rx="18" />
              <path d="M330 106 H434 M330 130 H412 M330 154 H430" className="book-lines" />
              <text x="383" y="202" textAnchor="middle" className="card-title">DNS 记录：A / CNAME / MX</text>
            </g>
            <g className={`internet-card server ${activeClass(2)}`} onClick={pick(2)}>
              <rect x="560" y="118" width="146" height="76" rx="18" />
              <text x="633" y="150" textAnchor="middle" className="card-title">140.82.x.x</text>
              <text x="633" y="174" textAnchor="middle" className="mini-text">机器地址</text>
            </g>
            <path d="M218 154 H300" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M464 154 H556" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <g className={`internet-card browser ${activeClass(3)}`} onClick={pick(3)}>
              <rect x="300" y="252" width="172" height="60" rx="16" />
              <text x="386" y="288" textAnchor="middle" className="card-title">HTTPS 证书也看域名</text>
            </g>
            <path d="M386 210 V248" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}

        {id === 'hkxw9jPGYphmjhTjw8766' && (
          <>
            <text x="36" y="42" className="board-heading">DNS 像层层问路：先问缓存，不知道再一路问到权威答案</text>
            {box(30, 112, 118, 64, '浏览器缓存', '先翻笔记', 0)}
            {box(176, 112, 118, 64, '递归 DNS', '帮你问', 1)}
            {box(322, 112, 118, 64, '根域', '问 .com', 2)}
            {box(468, 112, 118, 64, '.com', '问 github', 2)}
            {box(614, 112, 118, 64, '权威 DNS', '最终答案', 3)}
            <path d="M150 144 H172" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M296 144 H318" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M442 144 H464" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M588 144 H610" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <g className={`internet-card address ${activeClass(4)}`} onClick={pick(4)}>
              <rect x="288" y="242" width="184" height="64" rx="16" />
              <text x="380" y="278" textAnchor="middle" className="card-title">TTL：答案能缓存多久</text>
            </g>
            <text x="380" y="334" textAnchor="middle" className="card-title">改 DNS 不马上生效，常常是 TTL 还没过</text>
          </>
        )}

        {id === 'x-WBJjBd8u93ym5gtxGsR' && (
          <>
            <text x="36" y="42" className="board-heading">HTTPS = HTTP 放进加密信封，再检查收件人是不是真的</text>
            <g className={`internet-card browser ${activeClass(0)}`} onClick={pick(0)}>
              <rect x="50" y="124" width="132" height="72" rx="16" />
              <text x="116" y="156" textAnchor="middle" className="card-title">浏览器</text>
              <text x="116" y="180" textAnchor="middle" className="mini-text">我要安全连接</text>
            </g>
            <g className={`internet-card dns ${activeClass(1)}`} onClick={pick(1)}>
              <rect x="286" y="72" width="174" height="76" rx="16" />
              <text x="373" y="104" textAnchor="middle" className="card-title">证书</text>
              <text x="373" y="128" textAnchor="middle" className="mini-text">证明我是这个域名</text>
            </g>
            <g className={`internet-card address ${activeClass(2)}`} onClick={pick(2)}>
              <rect x="286" y="226" width="174" height="76" rx="16" />
              <text x="373" y="258" textAnchor="middle" className="card-title">会话密钥</text>
              <text x="373" y="282" textAnchor="middle" className="mini-text">本次专用暗号</text>
            </g>
            <g className={`internet-card server ${activeClass(3)}`} onClick={pick(3)}>
              <rect x="584" y="124" width="132" height="72" rx="16" />
              <text x="650" y="156" textAnchor="middle" className="card-title">服务器</text>
              <text x="650" y="180" textAnchor="middle" className="mini-text">解密处理</text>
            </g>
            <path d="M184 148 C226 102, 248 100, 282 108" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M462 108 C510 104, 540 126, 580 148" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M184 176 C226 252, 248 260, 282 264" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M462 264 C526 252, 556 194, 580 176" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <text x="380" y="334" textAnchor="middle" className="card-title">别人能看到你连了谁，但看不到里面的 HTTP 明文</text>
          </>
        )}

        {id === 'P82WFaTPgQEPNp5IIuZ1Y' && (
          <>
            <text x="36" y="42" className="board-heading">浏览器像加工流水线：下载资源，解析结构，算位置，最后画成页面</text>
            {box(34, 112, 112, 62, '下载资源', 'Network', 0)}
            {box(178, 112, 112, 62, '解析', 'DOM/CSSOM', 1)}
            {box(322, 112, 112, 62, '布局', '算位置', 2)}
            {box(466, 112, 112, 62, '绘制', '画像素', 3)}
            {box(610, 112, 112, 62, '交互', 'JS 改页面', 4)}
            <path d="M148 143 H174" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M292 143 H318" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M436 143 H462" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M580 143 H606" className="story-arrow" markerEnd={`url(#chalk-arrow-${id})`} />
            <g className="mini-browser">
              <rect x="210" y="236" width="330" height="76" rx="12" />
              <circle cx="234" cy="258" r="5" />
              <circle cx="252" cy="258" r="5" />
              <rect x="232" y="276" width="104" height="20" rx="4" />
              <rect x="352" y="276" width="70" height="20" rx="4" />
              <rect x="438" y="276" width="76" height="20" rx="4" />
            </g>
          </>
        )}

        {id === 'yCnn-NfSxIybUQ2iTuUGq' && (
          <>
            <text x="36" y="42" className="board-heading">互联网像快递网络：包裹被拆小，一站一站送到目标机器</text>
            {box(42, 130, 124, 64, '你的电脑', '192.168.x.x', 0)}
            {box(232, 82, 112, 58, '路由器 A', '下一站', 2)}
            {box(400, 160, 112, 58, '路由器 B', '再下一站', 2)}
            {box(584, 124, 128, 70, '服务器', 'IP + 端口', 1)}
            <path d="M168 154 C196 108, 210 108, 228 112" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M346 116 C382 126, 390 154, 396 174" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M514 190 C546 184, 560 158, 580 154" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <text x="382" y="284" textAnchor="middle" className="card-title">IP 找机器，端口找程序；TCP 像挂号信，UDP 像广播</text>
          </>
        )}

        {id === 'SiYUdtYMDImRPmV2_XPkH' && (
          <>
            <text x="36" y="42" className="board-heading">打开网站时，浏览器不是“魔法显示”，而是在跑一条真实链路</text>

            <g className={`internet-card address ${activeClass(0)}`} onClick={pick(0)}>
              <rect x="42" y="82" width="164" height="96" rx="18" />
              <rect x="62" y="104" width="124" height="22" rx="11" className="address-bar" />
              <text x="124" y="121" textAnchor="middle" className="mini-text">roadmap.sh</text>
              <text x="124" y="154" textAnchor="middle" className="card-title">输入网址</text>
            </g>

            <g className={`internet-card dns ${activeClass(1)}`} onClick={pick(1)}>
              <rect x="292" y="58" width="146" height="118" rx="16" />
              <path d="M316 78 H414 M316 104 H414 M316 130 H390" className="book-lines" />
              <text x="365" y="156" textAnchor="middle" className="card-title">DNS 通讯录</text>
              <text x="365" y="176" textAnchor="middle" className="mini-text">域名 → IP</text>
            </g>

            <g className={`internet-card server ${activeClass(3)}`} onClick={pick(3)}>
              <rect x="540" y="76" width="138" height="126" rx="18" />
              <text x="609" y="104" textAnchor="middle" className="card-title">服务器</text>
              <rect x="566" y="122" width="86" height="20" rx="6" />
              <rect x="566" y="152" width="86" height="20" rx="6" />
              <rect x="566" y="182" width="86" height="20" rx="6" />
              <circle cx="584" cy="132" r="4" />
              <circle cx="584" cy="162" r="4" />
              <circle cx="584" cy="192" r="4" />
              <text x="609" y="226" textAnchor="middle" className="mini-text">接请求、查数据、组织响应</text>
            </g>

            <g className={`internet-card browser ${activeClass(4)}`} onClick={pick(4)}>
              <rect x="514" y="262" width="176" height="62" rx="14" />
              <circle cx="534" cy="280" r="4" />
              <circle cx="550" cy="280" r="4" />
              <rect x="536" y="296" width="54" height="14" rx="4" />
              <rect x="604" y="296" width="58" height="14" rx="4" />
              <text x="602" y="348" textAnchor="middle" className="card-title">浏览器渲染</text>
            </g>

            <path d="M208 124 C242 90, 258 88, 288 104" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M438 118 C482 108, 506 112, 536 128" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M610 206 C610 228, 608 242, 606 258" className={`story-arrow ${activeClass(4)}`} markerEnd={`url(#chalk-arrow-${id})`} />

            <g className={`packet-road ${activeClass(2)}`} onClick={pick(2)}>
              <path d="M74 270 C154 246, 220 288, 292 268 S410 252, 486 274" />
              <rect x="188" y="260" width="34" height="22" rx="7" />
              <rect x="238" y="274" width="34" height="22" rx="7" />
              <rect x="288" y="254" width="34" height="22" rx="7" />
              <text x="280" y="330" textAnchor="middle" className="card-title">请求会拆成“小包裹”在网络里转运</text>
            </g>
          </>
        )}

        {id === 'oyg5g4-cY5EBEUgVkjnL3' && (
          <>
            <text x="36" y="42" className="board-heading">后端学前端，不是为了画页面，是为了看懂请求从哪里来</text>
            {box(44, 100, 136, 64, 'HTML 表单', '收集输入', 0)}
            {box(44, 220, 136, 64, 'CSS', '别让按钮消失', 1)}
            {box(306, 100, 136, 64, 'JS', 'fetch / axios', 2)}
            {box(574, 100, 136, 64, '后端 API', '接收参数', 3)}
            {box(306, 236, 136, 64, 'Network', '查真相', 3)}
            <path d="M182 132 H302" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M444 132 H570" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M374 166 V232" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}

        {id === 'aqMaEY8gkKMikiqleV5EP' && (
          <>
            <text x="36" y="42" className="board-heading">托管就是给不同东西找“房子”：文件放 CDN，代码放服务器</text>
            {box(42, 92, 150, 66, '静态资源', 'HTML/CSS/JS', 0)}
            {box(42, 218, 150, 66, '后端服务', '会运行代码', 1)}
            {box(318, 154, 140, 66, '域名 + HTTPS', '统一入口', 3)}
            {box(574, 92, 138, 66, '对象存储/CDN', '发文件', 0)}
            {box(574, 218, 138, 66, '服务器/容器', '跑接口', 1)}
            <path d="M194 124 C250 112, 276 142, 314 170" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M194 250 C250 248, 276 206, 314 190" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M460 170 C510 118, 528 118, 570 124" className={`story-arrow ${activeClass(0)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M460 190 C510 244, 528 244, 570 250" className={`story-arrow ${activeClass(1)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}

        {id === 'NvUcSDWBhzJZ31nzT4UlE' && (
          <>
            <text x="36" y="42" className="board-heading">代码托管平台不只是放代码：它还负责协作、审查和自动验收</text>
            {box(42, 128, 124, 62, '本地 commit', '你的存档', 0)}
            {box(218, 128, 112, 62, 'push', '上传', 0)}
            {box(392, 78, 134, 62, 'PR / MR', '请求合并', 2)}
            {box(392, 218, 134, 62, 'CI', '机器验收', 4)}
            {box(600, 128, 112, 62, 'main', '主线', 3)}
            <path d="M168 158 H214" className={`story-arrow ${activeClass(0)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M332 150 C362 106, 372 106, 388 110" className={`story-arrow ${activeClass(2)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M332 166 C362 240, 372 240, 388 250" className={`story-arrow ${activeClass(4)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M528 110 C564 118, 574 136, 596 150" className={`story-arrow ${activeClass(3)}`} markerEnd={`url(#chalk-arrow-${id})`} />
            <path d="M528 250 C564 236, 574 180, 596 166" className={`story-arrow ${activeClass(4)}`} markerEnd={`url(#chalk-arrow-${id})`} />
          </>
        )}
      </svg>
    </div>
  );
}

function FoundationLearningLab({ tutorial, lesson }: { tutorial: Tutorial; lesson: FoundationLesson }) {
  const [active, setActive] = useState(0);
  const step = lesson.route[active];

  return (
    <Space direction="vertical" size={16} className="drawer-section">
      <Card className="foundation-hero" size="small">
        <Tag color="blue">01 精讲</Tag>
        <Title level={4}>{tutorial.zh}</Title>
        <Paragraph>{lesson.scene}</Paragraph>
        <Alert type="info" showIcon title="先抓住这句话" description={lesson.core} />
      </Card>

      <FoundationBlackboard tutorial={tutorial} active={active} onPick={setActive} />

      <div className="foundation-concepts" aria-label={`${tutorial.zh} 概念点`}>
        {lesson.route.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className={`foundation-chip ${index === active ? 'active' : ''}`}
            onClick={() => setActive(index)}
          >
            <span className="step-number">{index + 1}</span>
            <span className="step-label">{item.label}</span>
          </button>
        ))}
      </div>

      <Card className="foundation-focus" title={step.title}>
        <Paragraph>{step.text}</Paragraph>
      </Card>

      <Flex gap={12} className="foundation-two-col">
        <Alert className="foundation-note" type="warning" showIcon title="容易混淆" description={lesson.confusion} />
        <Alert className="foundation-note" type="success" showIcon title="马上动手看见它" description={lesson.experiment} />
      </Flex>
    </Space>
  );
}

function TutorialIllustration({ tutorial }: { tutorial: Tutorial }) {
  const type = inferDiagramType(tutorial);
  const title = tutorial.zh || tutorial.en;
  const captionByType: Record<string, string> = {
    request: '先看清“谁请求谁、带什么、返回什么”，后端大多数概念都藏在这条链路里。',
    database: '把数据库想成资料柜：表负责摆放，索引像目录，事务保证几步操作要么都成、要么都不成。',
    cache: '缓存像把常用答案贴在桌边：先查快的，没命中再回源查慢的。',
    auth: '认证不是“记住你是谁”，而是每次请求都带一张可校验的通行证。',
    security: '安全像门禁和安检：先挡危险输入，再限制谁能访问什么。',
    git: 'Git 像游戏存档：提交是存档点，分支是平行世界，合并是把成果带回来。',
    deploy: '部署就是把代码装箱、放到服务器、持续检查它还活着。',
    event: '事件系统像传纸条：生产者只负责投递，消费者按节奏处理，系统不必互相死等。',
    system: '系统设计关注流量、故障和扩展：哪里会堵，哪里会坏，坏了怎么继续服务。',
    'mental-model': `先把「${title}」放进输入、处理、输出三段里理解，再去记术语。`,
  };

  return (
    <div className={`tutorial-illustration diagram-${type}`}>
      <svg className="concept-svg" viewBox="0 0 680 276" role="img" aria-label={`${title} 概念图`}>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" className="arrow-head" />
          </marker>
          <marker id="arrow-danger" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" className="arrow-head danger" />
          </marker>
        </defs>

        {type === 'request' && (
          <>
            <DiagramBox x={34} y={82} w={128} h={82} title="浏览器" sub="发请求" />
            <DiagramBox x={272} y={56} w={136} h={82} title="后端 API" sub="校验 / 处理" tone="orange" />
            <DiagramBox x={518} y={82} w={128} h={82} title="响应" sub="JSON / HTML" tone="green" />
            <FlowArrow d="M166 112 C220 82, 236 82, 268 96" />
            <FlowArrow d="M408 96 C454 82, 480 94, 514 112" />
            <FlowArrow d="M514 146 C444 210, 232 210, 166 146" />
            <text x="340" y="204" textAnchor="middle" className="diagram-note">请求不是一句话，是：方法 + 地址 + Header + Body</text>
          </>
        )}

        {type === 'database' && (
          <>
            <DiagramBox x={40} y={88} w={122} h={74} title="代码" sub="SELECT ..." />
            <g className="db-cylinder">
              <ellipse cx="340" cy="66" rx="92" ry="24" />
              <rect x="248" y="66" width="184" height="112" />
              <ellipse cx="340" cy="178" rx="92" ry="24" />
              <text x="340" y="122" textAnchor="middle" className="diagram-title">数据表</text>
              <text x="340" y="145" textAnchor="middle" className="diagram-sub">行 / 列 / 约束</text>
            </g>
            <DiagramBox x={512} y={72} w={118} h={58} title="索引" sub="目录" tone="purple" />
            <DiagramBox x={512} y={154} w={118} h={58} title="事务" sub="一起成功" tone="green" />
            <FlowArrow d="M164 124 H242" />
            <FlowArrow d="M432 96 H508" />
            <FlowArrow d="M432 160 H508" />
          </>
        )}

        {type === 'cache' && (
          <>
            <DiagramBox x={38} y={100} w={120} h={72} title="请求" sub="查资料" />
            <DiagramBox x={276} y={54} w={132} h={74} title="缓存" sub="快，但可能旧" tone="green" />
            <DiagramBox x={276} y={170} w={132} h={74} title="数据库" sub="慢，但权威" tone="purple" />
            <DiagramBox x={520} y={100} w={118} h={72} title="结果" sub="返回给用户" tone="orange" />
            <FlowArrow d="M160 126 C202 82, 228 76, 272 86" />
            <FlowArrow d="M408 88 C460 82, 486 104, 516 126" />
            <FlowArrow d="M160 150 C210 210, 230 212, 272 206" />
            <FlowArrow d="M408 206 C460 204, 492 170, 516 146" />
            <text x="340" y="149" textAnchor="middle" className="diagram-note">命中走上路，没命中走下路回源</text>
          </>
        )}

        {type === 'auth' && (
          <>
            <DiagramBox x={34} y={96} w={124} h={72} title="你" sub="账号密码" />
            <DiagramBox x={260} y={54} w={160} h={74} title="认证服务" sub="确认身份" tone="orange" />
            <DiagramBox x={496} y={96} w={134} h={72} title="业务接口" sub="看通行证" tone="green" />
            <FlowArrow d="M160 116 C202 70, 222 70, 256 88" />
            <FlowArrow d="M342 128 V188 C268 210, 212 190, 164 152" />
            <FlowArrow d="M420 90 C458 78, 474 98, 492 118" />
            <text x="342" y="205" textAnchor="middle" className="diagram-note">Token / Cookie 像临时通行证，不是永久身份证</text>
          </>
        )}

        {type === 'security' && (
          <>
            <DiagramBox x={36} y={92} w={118} h={74} title="外部输入" sub="不可信" tone="red" />
            <DiagramBox x={266} y={46} w={148} h={68} title="校验" sub="格式 / 权限" tone="orange" />
            <DiagramBox x={266} y={160} w={148} h={68} title="过滤" sub="危险内容" tone="purple" />
            <DiagramBox x={520} y={92} w={118} h={74} title="系统" sub="只收安全数据" tone="green" />
            <FlowArrow d="M156 116 C204 66, 224 66, 262 78" danger />
            <FlowArrow d="M156 144 C204 194, 224 194, 262 194" danger />
            <FlowArrow d="M416 82 C462 78, 486 104, 516 122" />
            <FlowArrow d="M416 194 C470 190, 494 158, 516 142" />
          </>
        )}

        {type === 'git' && (
          <>
            <circle cx="96" cy="138" r="22" className="git-dot" />
            <circle cx="220" cy="138" r="22" className="git-dot" />
            <circle cx="344" cy="92" r="22" className="git-dot branch" />
            <circle cx="344" cy="184" r="22" className="git-dot branch" />
            <circle cx="488" cy="138" r="22" className="git-dot" />
            <FlowArrow d="M118 138 H198" />
            <FlowArrow d="M242 130 C282 104, 300 96, 322 94" />
            <FlowArrow d="M242 146 C282 172, 300 180, 322 182" />
            <FlowArrow d="M366 94 C414 98, 438 118, 466 132" />
            <FlowArrow d="M366 182 C414 178, 438 158, 466 144" />
            <text x="96" y="196" textAnchor="middle" className="diagram-sub">提交</text>
            <text x="344" y="44" textAnchor="middle" className="diagram-sub">分支 = 平行尝试</text>
            <text x="488" y="196" textAnchor="middle" className="diagram-sub">合并</text>
          </>
        )}

        {type === 'deploy' && (
          <>
            <DiagramBox x={38} y={98} w={118} h={72} title="代码" sub="本地" />
            <DiagramBox x={236} y={98} w={128} h={72} title="镜像/包" sub="装箱" tone="purple" />
            <DiagramBox x={444} y={58} w={136} h={72} title="服务器" sub="运行" tone="green" />
            <DiagramBox x={444} y={164} w={136} h={54} title="监控" sub="活着吗？" tone="orange" />
            <FlowArrow d="M158 134 H232" />
            <FlowArrow d="M366 126 C398 98, 414 94, 440 94" />
            <FlowArrow d="M512 132 V160" />
          </>
        )}

        {type === 'event' && (
          <>
            <DiagramBox x={36} y={96} w={124} h={72} title="生产者" sub="发事件" />
            <DiagramBox x={274} y={82} w={132} h={100} title="队列" sub="先排队" tone="orange" />
            <DiagramBox x={518} y={48} w={116} h={58} title="消费者 A" sub="处理" tone="green" />
            <DiagramBox x={518} y={154} w={116} h={58} title="消费者 B" sub="处理" tone="green" />
            <FlowArrow d="M162 132 H270" />
            <FlowArrow d="M408 112 C456 76, 480 72, 514 76" />
            <FlowArrow d="M408 152 C456 188, 480 184, 514 184" />
          </>
        )}

        {type === 'system' && (
          <>
            <DiagramBox x={34} y={98} w={116} h={72} title="用户流量" sub="变多" />
            <DiagramBox x={232} y={76} w={132} h={72} title="负载均衡" sub="分流" tone="orange" />
            <DiagramBox x={462} y={46} w={126} h={56} title="服务 A" sub="运行" tone="green" />
            <DiagramBox x={462} y={118} w={126} h={56} title="服务 B" sub="运行" tone="green" />
            <DiagramBox x={462} y={190} w={126} h={44} title="告警" sub="发现故障" tone="red" />
            <FlowArrow d="M152 128 H228" />
            <FlowArrow d="M366 108 C410 72, 428 72, 458 74" />
            <FlowArrow d="M366 124 C410 140, 428 144, 458 146" />
            <FlowArrow d="M524 176 V186" danger />
          </>
        )}

        {type === 'mental-model' && (
          <>
            <DiagramBox x={42} y={96} w={120} h={72} title="输入" sub="用户/数据" />
            <DiagramBox x={280} y={82} w={120} h={100} title={title.slice(0, 8)} sub="处理规则" tone="orange" />
            <DiagramBox x={518} y={96} w={120} h={72} title="输出" sub="结果/影响" tone="green" />
            <FlowArrow d="M164 132 H276" />
            <FlowArrow d="M402 132 H514" />
          </>
        )}
      </svg>
      <div className="concept-caption">{captionByType[type]}</div>
    </div>
  );
}

function TutorialDrawer({ tutorial, open, onClose, done, onToggleDone, onPrev, onNext }: {
  tutorial?: Tutorial;
  open: boolean;
  onClose: () => void;
  done: boolean;
  onToggleDone: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const foundationLesson = tutorial ? foundationLessons[tutorial.id] : undefined;
  const resources = useMemo(() => {
    if (!tutorial) return categoryResources.general;
    const key = inferCategory(`${tutorial.zh} ${tutorial.en}`);
    return categoryResources[key] || categoryResources.general;
  }, [tutorial]);

  const detailItems: CollapseProps['items'] = tutorial?.details.map((detail, index) => ({
    key: String(index),
    label: detail.title,
    children: <Paragraph>{detail.body.replace(/\*\*/g, '')}</Paragraph>,
  })) || [];

  const tabItems: TabsProps['items'] = tutorial ? [
    {
      key: 'learn',
      label: '像小孩一样学',
      children: foundationLesson ? (
        <FoundationLearningLab tutorial={tutorial} lesson={foundationLesson} />
      ) : (
        <Space direction="vertical" size={16} className="drawer-section">
          <TutorialIllustration tutorial={tutorial} />
          <Alert type="info" showIcon title="一句话比喻" description={tutorial.analogy} />
          <Card size="small" className="story-card">
            <Text strong>小故事</Text>
            <Paragraph>{tutorial.story}</Paragraph>
          </Card>
          <Steps
            direction="vertical"
            size="small"
            current={-1}
            items={tutorial.howSteps.map((step, index) => ({ title: `第 ${index + 1} 步`, description: step }))}
          />
        </Space>
      ),
    },
    {
      key: 'deep',
      label: '完整说明',
      children: (
        <Space direction="vertical" size={16} className="drawer-section">
          <Collapse items={detailItems} defaultActiveKey={['0', '1']} />
          <Card size="small" title="动手练习">
            <Paragraph>{tutorial.practice}</Paragraph>
          </Card>
          <Alert type="warning" title="常见坑" description={<List size="small" dataSource={tutorial.pitfalls} renderItem={(item) => <List.Item>{item}</List.Item>} />} />
        </Space>
      ),
    },
    {
      key: 'refs',
      label: '参考资料',
      children: (
        <Space direction="vertical" size={16} className="drawer-section">
          <Card size="small" title="推荐链接">
            <List size="small" dataSource={resources.links} renderItem={(item) => <List.Item>{item}</List.Item>} />
          </Card>
          <Card size="small" title="推荐书籍">
            <List size="small" dataSource={resources.books} renderItem={(item) => <List.Item>{item}</List.Item>} />
          </Card>
        </Space>
      ),
    },
  ] : [];

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={tutorial ? <Space direction="vertical" size={0}><span>{tutorial.zh}</span><Text type="secondary" className="mono">{tutorial.en}</Text></Space> : null}
      width={720}
      destroyOnHidden
      extra={<Button type={done ? 'default' : 'primary'} onClick={onToggleDone}>{done ? '取消学完' : '标记学完'}</Button>}
      styles={{ body: { padding: 20 } }}
    >
      {tutorial && <Tabs items={tabItems} />}
      <Flex justify="space-between" className="drawer-nav">
        <Button onClick={onPrev}>上一个</Button>
        <Button onClick={onNext}>下一个</Button>
      </Flex>
    </Drawer>
  );
}

function StageCard({ stage, index, done, onOpen }: { stage: Stage; index: number; done: Set<string>; onOpen: (id: string) => void }) {
  return (
    <Card className="stage-card" style={{ left: stage.mapX, top: stage.mapY, width: stage.mapW, height: stage.mapH }} styles={{ body: { padding: 0 } }}>
      <div className="stage-head">
        <div className="stage-index">{String(index + 1).padStart(2, '0')}</div>
        <div className="stage-title">
          <Text strong>{stage.zh}</Text>
          <Text type="secondary" className="mono one-line">{stage.en}</Text>
        </div>
        <Tag color="blue">{stage.nodes.length} 个</Tag>
      </div>
      <div className="node-grid">
        {stage.nodes.map((node) => {
          const tutorial = tutorials[node.id as keyof typeof tutorials];
          return (
            <button
              key={node.id}
              className={`node-chip ${node.nodeType} ${done.has(node.id) ? 'done' : ''}`}
              data-search={`${node.zh} ${node.label} ${tutorial?.what || ''}`.toLowerCase()}
              onClick={() => onOpen(node.id)}
              type="button"
            >
              <span className="node-zh">{tutorial?.zh || node.zh}</span>
              <span className="node-en">{tutorial?.en || node.label}</span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}

export default function App() {
  const { done, toggle, reset } = useDoneState();
  const [selectedId, setSelectedId] = useState<string>();
  const [query, setQuery] = useState('');
  const [scale, setScale] = useState(0.75);
  const [isPanning, setIsPanning] = useState(false);
  const panRef = useRef({ x: 0, y: 0, left: 0, top: 0 });
  const scaleRef = useRef(scale);
  const zoomAnchorRef = useRef<{ contentX: number; contentY: number; anchorX: number; anchorY: number } | undefined>(undefined);
  const viewportRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const order = useMemo(() => stages.flatMap((stage) => stage.nodes.map((node) => node.id)), []);
  const tutorial = selectedId ? tutorials[selectedId as keyof typeof tutorials] : undefined;

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const layer = layerRef.current;
    const anchor = zoomAnchorRef.current;
    if (!viewport || !layer || !anchor) return;

    viewport.scrollLeft = Math.max(0, layer.offsetLeft + anchor.contentX * scale - anchor.anchorX);
    viewport.scrollTop = Math.max(0, layer.offsetTop + anchor.contentY * scale - anchor.anchorY);
    zoomAnchorRef.current = undefined;
  }, [scale]);

  const centerMap = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollLeft = Math.max(0, (viewport.scrollWidth - viewport.clientWidth) / 2);
    viewport.scrollTop = Math.max(0, (viewport.scrollHeight - viewport.clientHeight) / 2);
  };

  const zoomAtPoint = (nextScale: number, clientX?: number, clientY?: number) => {
    const viewport = viewportRef.current;
    const clampedScale = Math.max(0.45, Math.min(1.2, nextScale));
    if (!viewport) {
      setScale(clampedScale);
      return;
    }

    const layer = layerRef.current;
    const rect = viewport.getBoundingClientRect();
    const layerRect = layer?.getBoundingClientRect();
    const anchorX = clientX === undefined ? viewport.clientWidth / 2 : clientX - rect.left;
    const anchorY = clientY === undefined ? viewport.clientHeight / 2 : clientY - rect.top;
    const currentScale = scaleRef.current;
    const contentX = layerRect ? (rect.left + anchorX - layerRect.left) / currentScale : (viewport.scrollLeft + anchorX) / currentScale;
    const contentY = layerRect ? (rect.top + anchorY - layerRect.top) / currentScale : (viewport.scrollTop + anchorY) / currentScale;

    zoomAnchorRef.current = { contentX, contentY, anchorX, anchorY };
    scaleRef.current = clampedScale;
    setScale(clampedScale);
  };

  const focusStage = (id: string, behavior: ScrollBehavior = 'smooth') => {
    const viewport = viewportRef.current;
    const layer = layerRef.current;
    const stage = stages.find((item) => item.id === id);
    if (!viewport || !layer || !stage) return;
    const currentScale = scaleRef.current;
    viewport.scrollTo({
      left: Math.max(0, layer.offsetLeft + (stage.mapX + stage.mapW / 2) * currentScale - viewport.clientWidth / 2),
      top: Math.max(0, layer.offsetTop + (stage.mapY + stage.mapH / 2) * currentScale - viewport.clientHeight / 2),
      behavior,
    });
  };

  const fitMap = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const next = Math.max((viewport.clientWidth - 80) / MAP_WIDTH, (viewport.clientHeight - 80) / MAP_HEIGHT);
    setScale(Math.max(0.45, Math.min(1.2, next)));
    requestAnimationFrame(centerMap);
  };

  const openByOffset = (offset: number) => {
    if (!selectedId) return;
    const index = order.indexOf(selectedId);
    const nextId = order[index + offset];
    if (nextId) setSelectedId(nextId);
  };

  const filteredStages = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stages;
    return stages.map((stage) => ({
      ...stage,
      nodes: stage.nodes.filter((node) => `${node.zh} ${node.label} ${tutorials[node.id as keyof typeof tutorials]?.what || ''}`.toLowerCase().includes(q)),
    })).filter((stage) => stage.nodes.length > 0);
  }, [query]);

  return (
    <Layout className="app-shell">
      <Header className="app-header">
        <Flex justify="space-between" align="center" gap={24}>
          <div>
            <Tag color="processing">Index</Tag>
            <Title level={4}>{activeRoadmap.displayTitle}</Title>
            <Text type="secondary">{activeRoadmap.description}</Text>
          </div>
          <Space size={12}>
            <Statistic title="节点" value={194} />
            <Statistic title="站点" value={stages.length} />
            <Statistic title="已学" value={done.size} />
          </Space>
        </Flex>
      </Header>
      <Content className="app-content">
        <Flex className="toolbar" gap={10} align="center" wrap="wrap">
          <Input.Search value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索：HTTP / Redis / OAuth / Docker" allowClear className="search-input" />
          <Select
            placeholder="跳转站点"
            className="jump-select"
            options={stages.map((stage, index) => ({ label: `${String(index + 1).padStart(2, '0')} · ${stage.zh}`, value: stage.id }))}
            onChange={(id) => focusStage(id)}
          />
          <Button onClick={() => zoomAtPoint(scaleRef.current - 0.08)}>缩小</Button>
          <Button onClick={() => zoomAtPoint(scaleRef.current + 0.08)}>放大</Button>
          <Button onClick={fitMap}>撑满画布</Button>
          <Button onClick={centerMap}>居中</Button>
          <Button onClick={() => focusStage('group-foundation')}>起点</Button>
          <Button onClick={reset}>重置进度</Button>
          <Text type="secondary">按住 Cmd/Ctrl + 滚轮缩放，空白处拖动平移</Text>
        </Flex>
        <Card className="map-card" title="路线图视图" extra={<Space><Progress percent={Math.round((done.size / order.length) * 100)} size="small" style={{ width: 120 }} /><Text type="secondary">{Math.round(scale * 100)}%</Text></Space>}>
          <div
            ref={viewportRef}
            className={`map-viewport ${isPanning ? 'dragging' : ''}`}
            onPointerDown={(event) => {
              if (event.button !== 0 || (event.target as HTMLElement).closest('.stage-card')) return;
              const viewport = viewportRef.current;
              if (!viewport) return;
              panRef.current = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop };
              setIsPanning(true);
              viewport.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (!isPanning) return;
              const viewport = viewportRef.current;
              if (!viewport) return;
              viewport.scrollLeft = panRef.current.left - (event.clientX - panRef.current.x);
              viewport.scrollTop = panRef.current.top - (event.clientY - panRef.current.y);
            }}
            onPointerUp={() => setIsPanning(false)}
            onPointerCancel={() => setIsPanning(false)}
            onWheel={(event) => {
              if (!(event.metaKey || event.ctrlKey)) return;
              event.preventDefault();
              zoomAtPoint(scaleRef.current - event.deltaY * 0.0012, event.clientX, event.clientY);
            }}
          >
            <div ref={layerRef} className="map-layer" style={{ zoom: scale }}>
              <svg className="route-svg" viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}>
                <defs>
                  <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1677ff" />
                    <stop offset="1" stopColor="#13c2c2" />
                  </linearGradient>
                </defs>
                <path className="route-bg" d={routePath} />
                <path className="route-main" d={routePath} />
                <path className="route-dash" d={routePath} />
              </svg>
              {filteredStages.map((stage) => {
                const stageIndex = stages.findIndex((item) => item.id === stage.id);
                return <StageCard key={stage.id} stage={stage as Stage} index={stageIndex} done={done} onOpen={setSelectedId} />;
              })}
            </div>
          </div>
        </Card>
      </Content>
      <TutorialDrawer
        tutorial={tutorial}
        open={Boolean(tutorial)}
        onClose={() => setSelectedId(undefined)}
        done={selectedId ? done.has(selectedId) : false}
        onToggleDone={() => selectedId && toggle(selectedId)}
        onPrev={() => openByOffset(-1)}
        onNext={() => openByOffset(1)}
      />
    </Layout>
  );
}
