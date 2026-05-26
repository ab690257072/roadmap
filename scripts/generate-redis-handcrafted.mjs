#!/usr/bin/env node
/**
 * Generates src/roadmaps/redis/teaching-handcrafted.ts
 * 162 nodes — unique Chinese copy + semantic Excalidraw per node.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const palette = {
  blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa',
  red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0',
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

function loadNodes() {
  const data = readFileSync('src/roadmaps/redis/data.ts', 'utf8');
  const start = data.indexOf('const data = ') + 'const data = '.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  const parsed = JSON.parse(data.slice(start, end));
  const nodes = [];
  parsed.stages.forEach((s, i) => s.nodes.forEach((n) => nodes.push({ ...n, stage: i + 1, stageEn: s.en, stageZh: s.zh })));
  return nodes;
}

function loadLessonSpecs() {
  const src = readFileSync('src/roadmaps/redis/teaching.ts', 'utf8');
  const start = src.indexOf('export const REDIS_TEACHING_LESSONS');
  const end = src.indexOf('export function hasRedisTeachingLesson');
  let body = src.slice(start, end);
  body = body.replace('export const REDIS_TEACHING_LESSONS: Record<string, TeachingLesson> = ', '');
  body = body.replace(/redisLesson\(/g, '(');
  body = body.replace(/ as RedisDiagramKind/g, '');
  body = body.trim().replace(/;\s*$/, '');
  return new Function('return ' + body)();
}

function slugify(label, id) {
  const base = label.toLowerCase()
    .replace(/\$/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9/-]+/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base || `node-${id.slice(0, 8)}`;
}

const STAGE_HINT = {
  1: 'Redis 定位', 2: '使用场景', 3: '安装启动', 4: '基础命令', 5: 'SET 命令',
  6: 'Hash 操作', 7: 'String 类型', 8: 'Sorted Set', 9: 'ZRANK', 10: 'ZRANGEBYSCORE',
  11: 'Set 成员', 12: 'List 长度', 13: '原子性', 14: 'Pipeline', 15: 'Bitmap',
  16: 'GEO 地理', 17: 'HyperLogLog', 18: 'Stream 流', 19: 'Pub/Sub', 20: '取消订阅',
  21: '持久化', 22: 'TLS 加密', 23: '集群', 24: '内存管理', 25: 'RedisBloom',
  26: 'Redis 模块', 27: '备份恢复',
};

const HEADING_SUFFIX = {
  compare: ['Redis 的定位', '与 SQL/NoSQL 对比', '何时引入 Redis'],
  kv: ['Key 找 Value', 'O(1) 读写', '命名与 TTL'],
  datatype: ['数据结构选型', '按访问模式选类型', 'String/Hash/ZSet 等'],
  cache: ['缓存分层', 'Cache-Aside', '穿透/击穿/雪崩'],
  stream: ['Stream 持久流', '消费组', 'XADD/XREAD'],
  queue: ['消息队列', 'List/Stream 缓冲', 'LPUSH/BRPOP'],
  persistence: ['RDB 与 AOF', '快照与日志', '重启恢复'],
  admin: ['连接与运维', 'redis-cli/INFO', '启动与配置'],
  deploy: ['部署方式', 'Docker/包管理', '实例上线'],
  pattern: ['典型模式', 'Session/排行榜', '限流与锁'],
  cluster: ['Cluster 分片', 'Sentinel 高可用', '16384 slots'],
  observe: ['监控与内存', 'SLOWLOG/latency', '淘汰策略'],
  security: ['安全与 ACL', 'TLS/AUTH', '网络隔离'],
  pipeline: ['Pipeline 批量', '减少 RTT', 'MULTI/EXEC'],
};

const METAPHOR_POOL = {
  compare: ['Redis 像工作台缓存：快，但不是所有东西都能长期放上面', '像前台复印件：原件在 DB，Redis 放热数据副本', '不是万能主库：复杂查询与强持久仍靠 SQL/NoSQL'],
  kv: ['Key 像抽屉标签，Value 是抽屉里的东西——SET/GET 一条命令取放', '命名像地址：业务:实体:id，便于 SCAN 与 TTL 管理', 'O(1) 像直达电梯：不用遍历找 value'],
  datatype: ['数据结构像不同容器：Hash 存对象，ZSet 做排行榜，List 做队列', '一切皆 String+JSON 像用一个万能袋——能装但难维护', '按访问模式选类型：读字段用 Hash，排序用 ZSet'],
  cache: ['缓存像便签：过期要换，源数据还在仓库（DB）', 'Cache-Aside：miss 回源 DB，hit 直接返——像查前台复印件', 'TTL 像保质期：不设过期，内存迟早打满'],
  stream: ['Stream 像可回放的传送带：消息持久，消费组并行读', 'Pub/Sub 像广播：订阅者离线则丢；Stream 像录像带可补看', 'XADD 像往流水账写一行，XREADGROUP 像按组认领任务'],
  queue: ['List 队列像排队窗口：LPUSH 入队，BRPOP 阻塞出队', 'Producer/Worker 像工厂流水线：Redis 当中转缓冲', 'Pub/Sub 广播 vs List 点对点——选型看要不要持久与竞争消费'],
  persistence: ['RDB 像拍照：整点快照，恢复快但可能丢最近写', 'AOF 像录像：每条写命令追加，更完整但文件大', '混合持久化像拍照+录像：Redis 7 常见折中方案'],
  admin: ['启动 Redis 像开电闸：通了才能 redis-cli PING', 'INFO 像仪表盘：内存、连接数、角色一眼看', 'maxmemory-policy 像仓库满时的清货规则：LRU/LFU/TTL'],
  deploy: ['Docker 跑 Redis 像标准化机柜：换机器行为一致', '包管理安装像买整机：版本与路径跟发行版走', 'bind 0.0.0.0 无密码像敞开大门——生产必须改'],
  pattern: ['Session 像存会话便签：TTL 到期自动登出', '排行榜用 ZSet：score 排序，ZRANK 查名次', '分布式锁像厕所门锁：SET NX EX 占坑，过期防死锁'],
  cluster: ['Cluster 像分片货架：16384 slot，key 要落在正确 slot', 'Sentinel 像值班长：监控 master，挂了自动提拔 slave', '跨 slot 多 key 事务会失败——设计 key 时要同 hash tag'],
  observe: ['SLOWLOG 像慢动作回放：哪条命令耗时最长', '热 key 像网红店排队：要拆分或本地缓存', '内存碎片像仓库空隙：active defrag 可整理'],
  security: ['ACL 像命令白名单：谁能执行什么 SET/GET/CONFIG', 'TLS 像加密通道：路上窃听看不懂 RESP', 'requirepass 弱密码暴露公网等于裸奔'],
  pipeline: ['Pipeline 像一次寄多封信：减少往返 RTT', 'MULTI/EXEC 像购物车结算：一批命令原子提交', 'Lua 像自定义脚本：复杂逻辑一次在服务端执行'],
};

function pick(pool, index) {
  const arr = pool || METAPHOR_POOL.kv;
  return arr[index % arr.length];
}

function craftRoute(spec, zh, stage) {
  const cmd = spec.command;
  const kind = spec.diagram;
  const routesByKind = {
    compare: [
      { label: '为何用', title: '缓存/队列/计数', text: '先定场景：读多写少、低延迟、临时状态。' },
      { label: '对比', title: cmd, text: 'Redis 不是万能 DB；复杂查询与强 ACID 仍靠 SQL。' },
      { label: '连接', title: 'redis-cli PING', text: '确认实例活着再谈命令。' },
      { label: '小实验', title: 'SET/GET', text: '感受亚毫秒级读写延迟。' },
    ],
    kv: [
      { label: '认 key', title: '命名规范', text: '业务:实体:id，便于 SCAN 与 TTL。' },
      { label: '读写', title: cmd, text: 'SET/GET/DEL；EX 设过期。' },
      { label: '过期', title: 'EXPIRE/TTL', text: '缓存必有过期，避免内存打满。' },
      { label: '避坑', title: '别 KEYS *', text: '生产用 SCAN 迭代，避免阻塞。' },
    ],
    datatype: [
      { label: '选结构', title: 'String/Hash/ZSet', text: '按访问模式选类型，别一切皆 String。' },
      { label: '命令', title: cmd, text: '对应结构 API：HSET、ZINCRBY、LPUSH 等。' },
      { label: '组合', title: 'Hash 存对象', text: 'ZSet 做排行；Set 做去重标签。' },
      { label: '内存', title: spec.risk.slice(0, 40), text: '避免大 key；看 item 大小与编码。' },
    ],
    cache: [
      { label: '策略', title: 'Cache-Aside', text: 'miss 回源 DB，hit 直接返 Redis。' },
      { label: 'TTL', title: cmd, text: '过期与刷新；随机 TTL 防雪崩。' },
      { label: '问题', title: '穿透/击穿/雪崩', text: '布隆/互斥锁/随机过期各管一类。' },
      { label: '一致性', title: '更新顺序', text: '先删缓存还是先写库要想清。' },
    ],
    stream: [
      { label: '写入', title: 'XADD', text: 'Stream 持久追加，带 ID 可回溯。' },
      { label: '消费', title: cmd, text: 'XREAD / XREADGROUP 按组并行。' },
      { label: '组', title: 'Consumer Group', text: 'Pending 列表处理失败重试。' },
      { label: '对比', title: 'Pub/Sub', text: '要持久与消费组选 Stream。' },
    ],
    queue: [
      { label: '生产', title: 'LPUSH/XADD', text: 'Producer 写入队列或 Stream。' },
      { label: '消费', title: cmd, text: 'BRPOP 阻塞取；Worker 并行。' },
      { label: '可靠', title: 'ACK/Pending', text: 'Stream 消费组可确认与重试。' },
      { label: '边界', title: spec.risk.slice(0, 40), text: 'Pub/Sub 不持久——离线即丢。' },
    ],
    persistence: [
      { label: 'RDB', title: '快照 save', text: '周期性 BGSAVE，恢复快。' },
      { label: 'AOF', title: cmd, text: 'appendonly + appendfsync 策略。' },
      { label: '混合', title: 'Redis 7', text: 'RDB+AOF 混合持久化常见。' },
      { label: '演练', title: '重启恢复', text: '备份必须测 restore，别等丢数据。' },
    ],
    admin: [
      { label: '启动', title: 'redis-server', text: '配置文件 maxmemory、bind、requirepass。' },
      { label: '连接', title: cmd, text: 'redis-cli -h -p；AUTH 如有密码。' },
      { label: '检查', title: 'INFO server/memory', text: '版本、角色、used_memory。' },
      { label: '运维', title: '慢日志/备份', text: 'SLOWLOG GET；定期 RDB/AOF 拷贝。' },
    ],
    deploy: [
      { label: '安装', title: '包管理/Docker', text: '版本与数据目录要记录。' },
      { label: '配置', title: cmd, text: 'redis.conf：端口、持久化、内存上限。' },
      { label: '上线', title: 'systemd/Docker', text: '重启策略与 volume 挂数据。' },
      { label: '检查', title: 'PING + INFO', text: '换环境先验证连通与配置。' },
    ],
    pattern: [
      { label: '场景', title: 'Session/排行/限流', text: '先画读写路径再选命令。' },
      { label: '命令', title: cmd, text: 'INCR/ZINCRBY/SET NX EX 等典型用法。' },
      { label: '业务', title: '低延迟', text: 'Redis 扛热点，DB 扛持久与复杂查询。' },
      { label: '避坑', title: spec.risk.slice(0, 40), text: '模式要配合 TTL 与回源策略。' },
    ],
    cluster: [
      { label: 'Sentinel', title: '监控+切换', text: '主从故障自动 failover。' },
      { label: 'Cluster', title: cmd, text: '16384 slots；多 master+副本。' },
      { label: '客户端', title: '集群路由', text: 'MOVED/ASK；同 slot 多 key。' },
      { label: '演练', title: 'failover', text: '切换与扩容要压测过。' },
    ],
    observe: [
      { label: 'INFO', title: '内存/连接', text: 'used_memory、connected_clients。' },
      { label: '慢日志', title: cmd, text: 'SLOWLOG GET；latency doctor。' },
      { label: '淘汰', title: 'maxmemory-policy', text: '内存满时 LRU/LFU/TTL 策略。' },
      { label: '优化', title: '热 key/大 key', text: '拆分、本地缓存、pipeline。' },
    ],
    security: [
      { label: '网络', title: 'bind/防火墙', text: '别 0.0.0.0 裸奔公网。' },
      { label: '认证', title: cmd, text: 'ACL/requirepass；最小权限账号。' },
      { label: 'TLS', title: '加密传输', text: '证书配置；客户端 tls 参数。' },
      { label: '命令', title: 'ACL 命令级', text: '应用账号禁 CONFIG/FLUSHALL。' },
    ],
    pipeline: [
      { label: 'Pipeline', title: '批量命令', text: '一次往返发多条，减少 RTT。' },
      { label: '原子', title: cmd, text: 'MULTI/EXEC 或 Lua 脚本。' },
      { label: '热 key', title: '拆分/本地缓存', text: '避免单 key QPS 打爆单节点。' },
      { label: '基准', title: 'redis-benchmark', text: '优化要有对比数据。' },
    ],
  };
  if (routesByKind[kind]) return routesByKind[kind];
  const hint = STAGE_HINT[stage] || 'Redis 命令';
  return [
    { label: '场景', title: `${hint} 中的 ${zh}`, text: `${zh} 处理「${spec.subject}」：${spec.action}。` },
    { label: '命令', title: cmd, text: `围绕 ${spec.command} 理解读写边界与数据结构。` },
    { label: '避坑', title: '常见误区', text: spec.risk.slice(0, 88) },
    { label: '实验', title: '动手验证', text: `redis-cli 练 \`${cmd}\`，看 INFO memory/TTL 变化。` },
  ];
}

function craftContent(spec, node, index) {
  const zh = node.zh || spec.label;
  const kind = spec.diagram || 'kv';
  const stage = node.stage;
  const hint = STAGE_HINT[stage] || 'Redis 命令';
  const suffixPool = HEADING_SUFFIX[kind] || HEADING_SUFFIX.kv;

  const heading = `${spec.label}：${pick(suffixPool, index)}`;
  const subheading = `阶段 ${stage}（${hint}）：掌握 ${spec.command}，理解 ${spec.subject} 上的 ${spec.action}。`;
  const scene = `你在使用 Redis 时遇到「${zh}」。先确认它属于 ${spec.subject}，再判断会读写 key、选数据结构、做缓存还是运维集群。`;
  const core = `${spec.label} = ${spec.command} → ${spec.action} → ${spec.result}`;
  const metaphor = pick(METAPHOR_POOL[kind], index);
  const mistake = spec.mistake.includes(spec.label) ? spec.mistake : `别把 ${spec.label} 当孤立命令。${spec.risk} 在生产环境可能一次造成大范围影响。`;
  const confusion = `${spec.label} 的边界是「${spec.action}」，不要与相邻概念混用；先确认作用对象是 ${spec.subject}。`;
  const experiment = spec.experiment.startsWith('执行') ? spec.experiment
    : `redis-cli 练 \`${spec.command}\`：对比 INFO memory、TTL 或 XINFO 输出前后差异。`;

  return {
    id: spec.id,
    label: spec.label,
    slug: slugify(spec.label, spec.id),
    zh,
    heading,
    subheading,
    scene,
    core,
    metaphor,
    mistake,
    confusion,
    experiment,
    route: craftRoute(spec, zh, stage),
    diagramKind: kind,
    command: spec.command,
    subject: spec.subject,
    action: spec.action,
    result: spec.result,
    risk: spec.risk,
  };
}

function buildDiagram(spec) {
  const p = `rd-${spec.slug}`;
  const title = `${spec.label} · ${spec.command}`.slice(0, 44);
  const cmd = spec.command.slice(0, 22);
  const object = spec.subject.slice(0, 14);
  const result = spec.result.slice(0, 12);
  const risk = spec.risk.slice(0, 28);
  const note = spec.metaphor.slice(0, 56);
  const kind = spec.diagramKind;

  const lines = [text(`${p}-title`, 70, 10, title, 22, 620)];

  switch (kind) {
    case 'compare':
      lines.push(
        box(`${p}-redis`, 70, 98, 220, 120, palette.yellow),
        text(`${p}-redis-t`, 98, 126, 'Redis\n内存数据结构\n极快读写', 16, 164),
        box(`${p}-db`, 460, 98, 220, 120, palette.blue),
        text(`${p}-db-t`, 488, 126, 'SQL/NoSQL\n持久化主库\n复杂查询', 16, 164),
      );
      break;
    case 'kv':
      lines.push(
        box(`${p}-key`, 58, 124, 150, 92, palette.blue),
        text(`${p}-key-t`, 84, 150, 'Key\nuser:1', 16, 98),
        box(`${p}-cmd`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-cmd-t`, 334, 124, `${cmd}\nSET/GET\nO(1)`, 16, 124),
        box(`${p}-val`, 568, 124, 150, 92, palette.green),
        text(`${p}-val-t`, 594, 150, 'Value\n字符串/结构', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'datatype':
      ['String', 'Hash', 'List', 'Set', 'ZSet'].forEach((word, i) => {
        lines.push(
          box(`${p}-dt-${i}`, 48 + i * 132, 118, 112, 74, i % 2 ? palette.yellow : palette.blue),
          text(`${p}-dt-t-${i}`, 70 + i * 132, 140, word, 17, 72),
        );
      });
      lines.push(
        box(`${p}-risk`, 248, 276, 278, 70, palette.purple),
        text(`${p}-risk-t`, 286, 298, risk, 16, 200),
      );
      break;
    case 'cache':
      lines.push(
        box(`${p}-app`, 58, 124, 130, 82, palette.blue),
        text(`${p}-app-t`, 82, 146, 'App\n读请求', 15, 84),
        box(`${p}-redis`, 264, 124, 130, 82, palette.yellow),
        text(`${p}-redis-t`, 288, 146, `Redis\n${cmd.slice(0, 12)}`, 15, 84),
        box(`${p}-db`, 470, 124, 130, 82, palette.green),
        text(`${p}-db-t`, 494, 146, 'Database\n源真相', 15, 84),
        box(`${p}-miss`, 676, 124, 130, 82, palette.red),
        text(`${p}-miss-t`, 700, 146, 'Miss\n回源', 15, 84),
        arrow(`${p}-a1`, 194, 164, 64, 0),
        arrow(`${p}-a2`, 400, 164, 64, 0),
      );
      break;
    case 'stream':
      lines.push(
        box(`${p}-pub`, 58, 118, 150, 100, palette.blue),
        text(`${p}-pub-t`, 84, 144, 'Publisher\nXADD/PUBLISH', 16, 98),
        box(`${p}-ch`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-ch-t`, 334, 116, `${cmd.slice(0, 16)}\nStream/Channel\n持久/广播`, 16, 120),
        box(`${p}-sub`, 566, 118, 150, 100, palette.green),
        text(`${p}-sub-t`, 592, 144, 'Consumer\n消费组', 16, 98),
        arrow(`${p}-a1`, 214, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
      break;
    case 'queue':
      lines.push(
        box(`${p}-prod`, 58, 118, 150, 100, palette.blue),
        text(`${p}-prod-t`, 84, 144, 'Producer\nLPUSH', 16, 98),
        box(`${p}-list`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-list-t`, 334, 116, `${cmd.slice(0, 16)}\nList/Stream\n缓冲`, 16, 120),
        box(`${p}-worker`, 566, 118, 150, 100, palette.green),
        text(`${p}-worker-t`, 592, 144, 'Worker\nBRPOP', 16, 98),
        arrow(`${p}-a1`, 214, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
      break;
    case 'persistence':
      lines.push(
        box(`${p}-mem`, 58, 124, 150, 92, palette.yellow),
        text(`${p}-mem-t`, 84, 150, '内存\n热数据', 16, 98),
        box(`${p}-rdb`, 264, 96, 130, 148, palette.blue),
        text(`${p}-rdb-t`, 290, 124, 'RDB\n快照', 16, 98),
        box(`${p}-aof`, 424, 96, 130, 148, palette.green),
        text(`${p}-aof-t`, 450, 124, 'AOF\n追加日志', 16, 98),
        box(`${p}-disk`, 584, 124, 130, 92, palette.purple),
        text(`${p}-disk-t`, 610, 150, '磁盘\n恢复', 16, 98),
      );
      break;
    case 'admin':
    case 'deploy':
      lines.push(
        box(`${p}-cli`, 58, 124, 150, 92, palette.blue),
        text(`${p}-cli-t`, 84, 150, 'redis-cli\nINFO', 16, 98),
        box(`${p}-srv`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-srv-t`, 334, 124, `${cmd.slice(0, 16)}\n启动/配置\nmaxmemory`, 16, 124),
        box(`${p}-mon`, 568, 124, 150, 92, palette.green),
        text(`${p}-mon-t`, 594, 150, '监控\n慢日志', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'pattern':
      lines.push(
        box(`${p}-use`, 58, 124, 150, 92, palette.blue),
        text(`${p}-use-t`, 84, 150, 'Session\n排行榜', 16, 98),
        box(`${p}-cmd`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-cmd-t`, 334, 124, `${cmd.slice(0, 16)}\nINCR/ZINCRBY\n限流`, 16, 124),
        box(`${p}-biz`, 568, 124, 150, 92, palette.green),
        text(`${p}-biz-t`, 594, 150, '业务\n低延迟', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'cluster':
      lines.push(
        box(`${p}-slot`, 58, 124, 150, 92, palette.blue),
        text(`${p}-slot-t`, 84, 150, '16384 slots\n哈希槽', 16, 98),
        box(`${p}-nodes`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-nodes-t`, 334, 124, `${cmd.slice(0, 16)}\n多 master\n副本`, 16, 124),
        box(`${p}-route`, 568, 124, 150, 92, palette.green),
        text(`${p}-route-t`, 594, 150, '客户端\n路由 key', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'observe':
      lines.push(
        box(`${p}-info`, 58, 124, 150, 92, palette.blue),
        text(`${p}-info-t`, 84, 150, 'INFO\nlatency', 16, 98),
        box(`${p}-tool`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-tool-t`, 334, 124, `${cmd.slice(0, 16)}\nSLOWLOG\nmemory`, 16, 124),
        box(`${p}-fix`, 568, 124, 150, 92, palette.green),
        text(`${p}-fix-t`, 594, 150, '淘汰策略\n优化', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'security':
      lines.push(
        box(`${p}-client`, 58, 124, 150, 92, palette.blue),
        text(`${p}-client-t`, 84, 150, 'Client\nAUTH', 16, 98),
        box(`${p}-tls`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-tls-t`, 334, 124, `${cmd.slice(0, 16)}\nTLS/ACL\n最小权限`, 16, 124),
        box(`${p}-net`, 568, 124, 150, 92, palette.green),
        text(`${p}-net-t`, 594, 150, 'bind\n防火墙', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'pipeline':
      lines.push(
        box(`${p}-app`, 58, 124, 150, 92, palette.blue),
        text(`${p}-app-t`, 84, 150, 'App\n多条命令', 16, 98),
        box(`${p}-pipe`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-pipe-t`, 334, 124, `${cmd.slice(0, 16)}\n一次往返\n批量执行`, 16, 124),
        box(`${p}-redis`, 568, 124, 150, 92, palette.green),
        text(`${p}-redis-t`, 594, 150, 'Redis\n批量回复', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    default:
      lines.push(
        box(`${p}-obj`, 58, 124, 150, 92, palette.blue),
        text(`${p}-obj-t`, 84, 150, object, 16, 98),
        box(`${p}-cmd`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-cmd-t`, 334, 124, cmd, 16, 124),
        box(`${p}-res`, 568, 124, 150, 92, palette.green),
        text(`${p}-res-t`, 594, 150, result, 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
  }

  lines.push(text(`${p}-note`, 90, 320, note, 16, 560));
  return scene(spec.slug, lines);
}

const LABEL_OVERRIDES = {
  'What is Redis?': {
    heading: 'Redis 是什么：内存数据结构存储',
    subheading: 'Key-Value、缓存、消息队列——按场景选用，不是万能主库。',
    metaphor: 'Redis 像工作台缓存：快，但不是所有东西都能长期放上面。',
  },
  'In-memory Data Structure Store': {
    heading: '内存数据结构存储：数据在 RAM 中',
    subheading: '读写亚毫秒级；重启可能丢数据，需配合持久化或当纯缓存。',
  },
  'Key-value Database': {
    heading: '键值数据库：Key 映射 Value',
    subheading: 'O(1) 读写；Value 可以是 String 或 Hash/List/Set/ZSet 等结构。',
  },
  Cache: {
    heading: '缓存：热数据放 Redis',
    subheading: '减轻 DB 压力；必须设 TTL，并设计 miss 回源策略。',
  },
  'Redis vs SQL/NoSQL DBs': {
    heading: 'Redis 与 SQL/NoSQL：互补而非替代',
    subheading: 'Redis 扛热点与临时状态；持久化与复杂查询仍靠主库。',
  },
  'When to choose Redis?': {
    heading: '何时选 Redis：低延迟 + 简单访问模式',
    subheading: '缓存、计数、排行榜、Session、消息——不适合复杂 JOIN 与主数据存储。',
  },
  SET: {
    heading: 'SET：写入 Key-Value',
    subheading: 'SET key value [EX seconds]；NX/XX 可做分布式锁。',
  },
  GET: {
    heading: 'GET：读取 Key 对应 Value',
    subheading: 'key 不存在返回 nil；配合 EXPIRE 做缓存。',
  },
  Streams: {
    heading: 'Redis Stream：持久消息流',
    subheading: 'XADD 追加；XREADGROUP 消费组并行消费，可 ACK 与 Pending。',
  },
  'Pub/Sub Messaging': {
    heading: 'Pub/Sub：发布订阅广播',
    subheading: 'PUBLISH/SUBSCRIBE；离线订阅者收不到历史消息。',
  },
  'Persistence Options': {
    heading: '持久化选项：RDB 与 AOF',
    subheading: 'save 快照 + appendonly 日志；生产需演练恢复。',
  },
  Clustering: {
    heading: 'Redis Cluster：分片与高可用',
    subheading: '16384 hash slot；客户端需支持集群协议。',
  },
  'Memory Management': {
    heading: '内存管理：maxmemory 与淘汰',
    subheading: 'INFO memory；maxmemory-policy 决定满内存时删谁。',
  },
  Pipelining: {
    heading: 'Pipeline：批量命令减 RTT',
    subheading: '一次发送多条命令，一次收回复；非事务，需 MULTI/EXEC 或 Lua 保原子。',
  },
};

const nodes = loadNodes();
const lessonSpecs = loadLessonSpecs();
const usedSlugs = new Set();

const allSpecs = nodes.map((node, index) => {
  const base = lessonSpecs[node.id];
  if (!base) throw new Error(`Missing lesson spec for ${node.id} (${node.label})`);
  let spec = craftContent(base, node, index);
  const ov = LABEL_OVERRIDES[node.label];
  if (ov) spec = { ...spec, ...ov };
  if (usedSlugs.has(spec.slug)) spec.slug = `${spec.slug}-${node.id.slice(0, 6)}`;
  usedSlugs.add(spec.slug);
  return spec;
});

if (allSpecs.length !== 162) {
  console.error('Expected 162 nodes, got', allSpecs.length);
  process.exit(1);
}

const dataIds = new Set(nodes.map((n) => n.id));
const lessonIds = new Set(allSpecs.map((s) => s.id));
for (const id of dataIds) {
  if (!lessonIds.has(id)) {
    console.error('Missing lesson for data id', id);
    process.exit(1);
  }
}

const diagramEntries = allSpecs.map((s) => buildDiagram(s)).join('\n');

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
    rawDiagram: REDIS_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const REDIS_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const REDIS_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/redis/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', allSpecs.length, 'nodes,', usedSlugs.size, 'unique diagram slugs');
console.log('ID coverage:', lessonIds.size, '/', dataIds.size);
