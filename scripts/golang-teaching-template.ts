import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

type GoDiagramKind =
  | 'journey' | 'request' | 'internet' | 'browser' | 'language' | 'git' | 'datastore' | 'query'
  | 'api' | 'compare' | 'auth' | 'shield' | 'hash' | 'cache' | 'proxy' | 'pipeline' | 'container'
  | 'orchestration' | 'queue' | 'pattern' | 'search' | 'stream' | 'document' | 'graph' | 'kv'
  | 'observe' | 'scale' | 'ai' | 'goroutine' | 'channel';

type GoSpec = {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  scene: string;
  core: string;
  metaphor: string;
  mistake: string;
  confusion: string;
  experiment: string;
  command: string;
  subject: string;
  action: string;
  result: string;
  risk: string;
  diagram: GoDiagramKind;
  route: TeachingLesson['route'];
};

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff' };

function goDiagram(spec: GoSpec): string {
  const title = spec.label.length > 24 ? spec.label.slice(0, 24) : spec.heading.split('：')[0];
  const command = spec.command;
  const subject = spec.subject;
  const result = spec.result;

  switch (spec.diagram) {
    case 'journey':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Go 语言学习路径', 25, 620),
        excalidrawBox(spec.id + '-fe', 58, 118, 130, 100, palette.blue),
        excalidrawText(spec.id + '-fe-t', 84, 144, '前端技能\nHTML/JS\nDevTools', 16, 98),
        excalidrawBox(spec.id + '-bridge', 284, 86, 190, 164, palette.yellow),
        excalidrawText(spec.id + '-bridge-t', 314, 116, command + '\nHTTP/DB\n部署运维', 16, 120),
        excalidrawBox(spec.id + '-be', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-be-t', 592, 144, '后端能力\nAPI/数据\n可上线', 16, 98),
        excalidrawArrow(spec.id + '-a1', 194, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 480, 168, 80, 0),
      ]);
    case 'request':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：一次 HTTP 请求', 25, 620),
        excalidrawBox(spec.id + '-client', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-client-t', 84, 150, 'Browser/App\n发起请求', 16, 98),
        excalidrawBox(spec.id + '-server', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-server-t', 334, 124, command + '\n路由\n业务逻辑', 16, 124),
        excalidrawBox(spec.id + '-resp', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-resp-t', 594, 150, 'Response\n状态码+Body', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'internet':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：名字如何变成地址', 25, 620),
        excalidrawBox(spec.id + '-name', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-name-t', 84, 150, '域名\nexample.com', 16, 98),
        excalidrawBox(spec.id + '-dns', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-dns-t', 334, 124, command + '\nDNS 解析\nA/CNAME', 16, 124),
        excalidrawBox(spec.id + '-ip', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-ip-t', 594, 150, 'IP 地址\n路由到达', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'browser':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：浏览器里发生了什么', 25, 620),
        excalidrawBox(spec.id + '-html', 54, 108, 130, 74, palette.blue),
        excalidrawText(spec.id + '-html-t', 78, 130, 'HTML\n结构', 16, 82),
        excalidrawBox(spec.id + '-css', 214, 108, 130, 74, palette.yellow),
        excalidrawText(spec.id + '-css-t', 238, 130, 'CSS\n样式', 16, 82),
        excalidrawBox(spec.id + '-js', 374, 108, 130, 74, palette.green),
        excalidrawText(spec.id + '-js-t', 398, 130, 'JS\n交互', 16, 82),
        excalidrawBox(spec.id + '-net', 534, 108, 170, 74, palette.purple),
        excalidrawText(spec.id + '-net-t', 558, 130, 'Network\n' + command, 15, 130),
        excalidrawText(spec.id + '-note', 112, 286, '后端不必会写页面，但要能读 Network 面板', 18, 520),
      ]);
    case 'language':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：代码到服务', 25, 620),
        excalidrawBox(spec.id + '-code', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-code-t', 84, 144, '源码\nhandler\n路由', 16, 98),
        excalidrawBox(spec.id + '-runtime', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-runtime-t', 334, 116, command + '\n运行时\n框架/库', 16, 120),
        excalidrawBox(spec.id + '-svc', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-svc-t', 592, 144, '监听端口\n处理请求', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'git':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：本地到远程', 25, 620),
        excalidrawBox(spec.id + '-local', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-local-t', 84, 144, '工作区\ncommit', 16, 98),
        excalidrawBox(spec.id + '-remote', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-remote-t', 334, 116, command + '\npush/PR\nreview', 16, 120),
        excalidrawBox(spec.id + '-main', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-main-t', 592, 144, 'main 可发布\nCI 验收', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'datastore':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：应用与数据库', 25, 620),
        excalidrawBox(spec.id + '-app', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-app-t', 84, 150, 'App/ORM\n业务代码', 16, 98),
        excalidrawBox(spec.id + '-db', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-db-t', 334, 124, command + '\n表/索引\n事务', 16, 124),
        excalidrawBox(spec.id + '-disk', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-disk-t', 594, 150, '持久化\n备份', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'query':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：查询与性能', 25, 620),
        excalidrawBox(spec.id + '-sql', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-sql-t', 84, 144, 'SQL/ORM\n一次查询', 16, 98),
        excalidrawBox(spec.id + '-plan', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-plan-t', 334, 116, command + '\n索引\n执行计划', 16, 120),
        excalidrawBox(spec.id + '-rows', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-rows-t', 592, 144, result + '\n避免 N+1', 15, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'api':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：资源 + HTTP 方法', 25, 620),
        excalidrawBox(spec.id + '-client', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-client-t', 84, 150, 'Client\n调用方', 16, 98),
        excalidrawBox(spec.id + '-api', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-api-t', 334, 124, command + '\nREST 资源\nJSON', 16, 124),
        excalidrawBox(spec.id + '-svc', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-svc-t', 594, 150, '业务服务\n持久化', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'compare':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：按场景选风格', 25, 620),
        excalidrawBox(spec.id + '-rest', 54, 98, 150, 120, palette.blue),
        excalidrawText(spec.id + '-rest-t', 80, 124, 'REST\n资源+HTTP', 16, 98),
        excalidrawBox(spec.id + '-gql', 228, 98, 150, 120, palette.yellow),
        excalidrawText(spec.id + '-gql-t', 254, 124, 'GraphQL\n灵活查询', 16, 98),
        excalidrawBox(spec.id + '-grpc', 402, 98, 150, 120, palette.green),
        excalidrawText(spec.id + '-grpc-t', 428, 124, 'gRPC\n强类型', 16, 98),
        excalidrawBox(spec.id + '-soap', 576, 98, 150, 120, palette.purple),
        excalidrawText(spec.id + '-soap-t', 602, 124, 'SOAP\n企业集成', 16, 98),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'auth':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：证明身份', 25, 620),
        excalidrawBox(spec.id + '-login', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-login-t', 84, 144, '登录/换票\n凭证', 16, 98),
        excalidrawBox(spec.id + '-token', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-token-t', 334, 116, command + '\nsession/JWT\nOAuth', 16, 120),
        excalidrawBox(spec.id + '-api', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-api-t', 592, 144, 'API 校验\n通过/拒绝', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'shield':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：多层防护', 25, 620),
        excalidrawBox(spec.id + '-req', 70, 92, 560, 86, palette.cyan),
        excalidrawText(spec.id + '-req-t', 98, 118, 'Incoming Request', 18, 500),
        excalidrawBox(spec.id + '-tls', 84, 214, 120, 74, palette.blue),
        excalidrawText(spec.id + '-tls-t', 108, 236, 'TLS\n传输', 16, 72),
        excalidrawBox(spec.id + '-auth', 236, 214, 120, 74, palette.yellow),
        excalidrawText(spec.id + '-auth-t', 260, 236, '认证\n授权', 16, 72),
        excalidrawBox(spec.id + '-validate', 388, 214, 120, 74, palette.green),
        excalidrawText(spec.id + '-validate-t', 412, 236, '校验\n输入', 16, 72),
        excalidrawBox(spec.id + '-audit', 540, 214, 120, 74, palette.red),
        excalidrawText(spec.id + '-audit-t', 564, 236, '审计\n限流', 16, 72),
        excalidrawText(spec.id + '-note', 112, 346, command, 18, 520),
      ]);
    case 'hash':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：密码不能明文存', 25, 620),
        excalidrawBox(spec.id + '-plain', 58, 124, 150, 92, palette.red),
        excalidrawText(spec.id + '-plain-t', 84, 150, '明文密码\n禁止入库', 16, 98),
        excalidrawBox(spec.id + '-hash', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-hash-t', 334, 124, command + '\nsalt+cost\n单向', 16, 124),
        excalidrawBox(spec.id + '-store', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-store-t', 594, 150, '存哈希\n验登录', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'cache':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：缓存分层', 25, 620),
        excalidrawBox(spec.id + '-browser', 54, 124, 130, 82, palette.blue),
        excalidrawText(spec.id + '-browser-t', 78, 146, 'Browser/CDN', 16, 84),
        excalidrawBox(spec.id + '-redis', 228, 124, 130, 82, palette.yellow),
        excalidrawText(spec.id + '-redis-t', 252, 146, 'Redis\n' + command, 15, 84),
        excalidrawBox(spec.id + '-app', 402, 124, 130, 82, palette.green),
        excalidrawText(spec.id + '-app-t', 426, 146, 'App 内存', 16, 84),
        excalidrawBox(spec.id + '-db', 576, 124, 130, 82, palette.purple),
        excalidrawText(spec.id + '-db-t', 600, 146, 'Database\n源真相', 16, 84),
        excalidrawArrow(spec.id + '-a1', 190, 164, 32, 0),
        excalidrawArrow(spec.id + '-a2', 364, 164, 32, 0),
        excalidrawArrow(spec.id + '-a3', 538, 164, 32, 0),
      ]);
    case 'proxy':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：反向代理入口', 25, 620),
        excalidrawBox(spec.id + '-user', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-user-t', 84, 150, '用户\n443/80', 16, 98),
        excalidrawBox(spec.id + '-nginx', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-nginx-t', 334, 116, command + '\nTLS\n静态/转发', 16, 120),
        excalidrawBox(spec.id + '-apps', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-apps-t', 592, 144, 'App 实例\n:3000/:8080', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 170, 74, 0),
      ]);
    case 'pipeline':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：提交到上线', 25, 620),
        excalidrawBox(spec.id + '-commit', 48, 126, 112, 72, palette.blue),
        excalidrawText(spec.id + '-commit-t', 70, 148, 'Commit\n代码', 15, 68),
        excalidrawBox(spec.id + '-test', 190, 126, 112, 72, palette.yellow),
        excalidrawText(spec.id + '-test-t', 212, 148, 'Test\n自动化', 15, 68),
        excalidrawBox(spec.id + '-build', 332, 126, 112, 72, palette.green),
        excalidrawText(spec.id + '-build-t', 354, 148, 'Build\n镜像', 15, 68),
        excalidrawBox(spec.id + '-deploy', 474, 126, 112, 72, palette.purple),
        excalidrawText(spec.id + '-deploy-t', 496, 148, 'Deploy\n发布', 15, 68),
        excalidrawBox(spec.id + '-prod', 616, 126, 112, 72, palette.red),
        excalidrawText(spec.id + '-prod-t', 638, 148, 'Prod\n线上', 15, 68),
        excalidrawArrow(spec.id + '-a1', 164, 162, 20, 0),
        excalidrawArrow(spec.id + '-a2', 306, 162, 20, 0),
        excalidrawArrow(spec.id + '-a3', 448, 162, 20, 0),
        excalidrawArrow(spec.id + '-a4', 590, 162, 20, 0),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'container':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：镜像到容器', 25, 620),
        excalidrawBox(spec.id + '-code', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-code-t', 84, 150, 'Dockerfile\n应用代码', 16, 98),
        excalidrawBox(spec.id + '-image', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-image-t', 334, 124, command + '\n镜像层\n可移植', 16, 124),
        excalidrawBox(spec.id + '-run', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-run-t', 594, 150, 'Container\n隔离运行', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'orchestration':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：集群调度容器', 25, 620),
        excalidrawBox(spec.id + '-ctrl', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-ctrl-t', 84, 144, 'Control Plane\n声明期望状态', 16, 98),
        excalidrawBox(spec.id + '-cluster', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-cluster-t', 334, 116, command + '\nPod/Service\n自动恢复', 16, 120),
        excalidrawBox(spec.id + '-nodes', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-nodes-t', 592, 144, 'Worker 节点\n跑容器', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'queue':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：异步解耦', 25, 620),
        excalidrawBox(spec.id + '-prod', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-prod-t', 84, 144, 'Producer\n发消息', 16, 98),
        excalidrawBox(spec.id + '-queue', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-queue-t', 334, 116, command + '\nTopic/Queue\n缓冲', 16, 120),
        excalidrawBox(spec.id + '-cons', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-cons-t', 592, 144, 'Consumer\n异步处理', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'pattern':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：单体 vs 分布式', 25, 620),
        excalidrawBox(spec.id + '-mono', 70, 98, 220, 120, palette.blue),
        excalidrawText(spec.id + '-mono-t', 98, 126, 'Monolith\n一个部署单元\n模块内调用', 16, 164),
        excalidrawBox(spec.id + '-micro', 460, 98, 220, 120, palette.green),
        excalidrawText(spec.id + '-micro-t', 488, 126, 'Microservices\n多服务+API\n独立扩展', 16, 164),
        excalidrawText(spec.id + '-note', 112, 286, command + '：先业务边界，再拆服务', 18, 520),
      ]);
    case 'search':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：索引加速检索', 25, 620),
        excalidrawBox(spec.id + '-docs', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-docs-t', 84, 150, '原始文档\n日志/商品', 16, 98),
        excalidrawBox(spec.id + '-index', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-index-t', 334, 124, command + '\n倒排索引\n分片', 16, 124),
        excalidrawBox(spec.id + '-hits', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-hits-t', 594, 150, 'Search Hits\n排序聚合', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'stream':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：长连接推送', 25, 620),
        excalidrawBox(spec.id + '-client', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-client-t', 84, 144, 'Client\n订阅', 16, 98),
        excalidrawBox(spec.id + '-pipe', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-pipe-t', 334, 116, command + '\nWS/SSE\n心跳', 16, 120),
        excalidrawBox(spec.id + '-server', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-server-t', 592, 144, 'Server\n推送事件', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'document':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：文档模型', 25, 620),
        excalidrawBox(spec.id + '-coll', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-coll-t', 84, 150, 'Collection\n集合', 16, 98),
        excalidrawBox(spec.id + '-doc', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-doc-t', 334, 124, command + '\nJSON 文档\n嵌套字段', 16, 124),
        excalidrawBox(spec.id + '-query', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-query-t', 594, 150, '按字段查询\n灵活 schema', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'graph':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：点与边', 25, 620),
        excalidrawBox(spec.id + '-a', 110, 118, 100, 74, palette.blue),
        excalidrawText(spec.id + '-a-t', 136, 140, 'Node A', 16, 48),
        excalidrawBox(spec.id + '-b', 430, 118, 100, 74, palette.green),
        excalidrawText(spec.id + '-b-t', 456, 140, 'Node B', 16, 48),
        excalidrawBox(spec.id + '-edge', 260, 228, 180, 62, palette.yellow),
        excalidrawText(spec.id + '-edge-t', 290, 246, command + '\n关系/权重', 15, 120),
        excalidrawArrow(spec.id + '-a1', 214, 154, 210, 0),
        excalidrawText(spec.id + '-note', 112, 326, '图数据库适合关系网络查询', 18, 520),
      ]);
    case 'kv':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Key 找 Value', 25, 620),
        excalidrawBox(spec.id + '-key', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-key-t', 84, 150, 'Key\nuser:1', 16, 98),
        excalidrawBox(spec.id + '-store', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-store-t', 334, 124, command + '\nO(1) 查找\nTTL 可选', 16, 124),
        excalidrawBox(spec.id + '-val', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-val-t', 594, 150, 'Value\nJSON/字符串', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'observe':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Logs/Metrics/Traces', 25, 620),
        excalidrawBox(spec.id + '-req', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-req-t', 84, 144, 'Request\ntrace id', 16, 98),
        excalidrawBox(spec.id + '-logs', 264, 92, 130, 74, palette.yellow),
        excalidrawText(spec.id + '-logs-t', 288, 114, 'Logs', 16, 86),
        excalidrawBox(spec.id + '-metrics', 424, 92, 130, 74, palette.green),
        excalidrawText(spec.id + '-metrics-t', 448, 114, 'Metrics', 16, 86),
        excalidrawBox(spec.id + '-traces', 584, 92, 130, 74, palette.purple),
        excalidrawText(spec.id + '-traces-t', 608, 114, 'Traces', 16, 86),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'scale':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：水平扩展', 25, 620),
        excalidrawBox(spec.id + '-lb', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-lb-t', 84, 150, 'Load Balancer\n流量入口', 16, 98),
        excalidrawBox(spec.id + '-apps', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-apps-t', 334, 116, command + '\n实例 1/2/3\n无状态', 16, 120),
        excalidrawBox(spec.id + '-shard', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-shard-t', 592, 144, '分片/副本\n数据层扩展', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'ai':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：提示到能力', 25, 620),
        excalidrawBox(spec.id + '-app', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-app-t', 84, 150, '你的应用\n业务上下文', 16, 98),
        excalidrawBox(spec.id + '-llm', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-llm-t', 334, 124, command + '\nLLM API\nRAG/Agent', 16, 124),
        excalidrawBox(spec.id + '-out', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-out-t', 594, 150, '代码/答案\n需人工校验', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'goroutine':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：轻量并发', 25, 620),
        excalidrawBox(spec.id + '-main', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-main-t', 84, 144, 'main goroutine\n顺序代码', 16, 98),
        excalidrawBox(spec.id + '-go', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-go-t', 334, 116, command + '\ngo func()\n独立栈', 16, 120),
        excalidrawBox(spec.id + '-sched', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-sched-t', 592, 144, '调度器\n并行/并发', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'channel':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：goroutine 之间传信', 25, 620),
        excalidrawBox(spec.id + '-send', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-send-t', 84, 144, '发送方\nch <- v', 16, 98),
        excalidrawBox(spec.id + '-ch', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-ch-t', 334, 116, command + '\n缓冲/非缓冲\n同步点', 16, 120),
        excalidrawBox(spec.id + '-recv', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-recv-t', 592, 144, '接收方\n<-ch', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    default:
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Go 的一环', 25, 620),
        excalidrawBox(spec.id + '-ctx', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-ctx-t', 84, 150, subject, 16, 98),
        excalidrawBox(spec.id + '-cmd', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-cmd-t', 334, 124, command, 16, 124),
        excalidrawBox(spec.id + '-res', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-res-t', 594, 150, result, 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
  }
}

function goLesson(spec: GoSpec): TeachingLesson {
  return {
    scene: spec.scene,
    core: spec.core,
    route: spec.route,
    confusion: spec.confusion,
    experiment: spec.experiment,
    heading: spec.heading,
    subheading: spec.subheading,
    metaphor: spec.metaphor,
    mistake: spec.mistake,
    rawDiagram: goDiagram(spec),
  };
}

export const GOLANG_TEACHING_LESSONS: Record<string, TeachingLesson> = {
