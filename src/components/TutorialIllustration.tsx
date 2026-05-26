import type { Tutorial } from '../roadmaps/types';

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

export function TutorialIllustration({ tutorial }: { tutorial: Tutorial }) {
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
  const middleTitle = type === 'database' ? '数据层' : type === 'deploy' ? '运行环境' : type === 'auth' ? '校验' : title.slice(0, 8);

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
        <DiagramBox x={42} y={96} w={120} h={72} title="输入" sub="用户/数据" />
        <DiagramBox x={280} y={82} w={120} h={100} title={middleTitle} sub="核心规则" tone={type === 'security' ? 'red' : 'orange'} />
        <DiagramBox x={518} y={96} w={120} h={72} title="输出" sub="结果/影响" tone="green" />
        <FlowArrow d="M164 132 H276" danger={type === 'security'} />
        <FlowArrow d="M402 132 H514" />
        <text x="340" y="218" textAnchor="middle" className="diagram-note">先理解链路，再补充术语和配置细节</text>
      </svg>
      <div className="concept-caption">{captionByType[type]}</div>
    </div>
  );
}
