import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

type RedisDiagramKind =
  | 'compare' | 'kv' | 'datatype' | 'cache' | 'stream' | 'queue' | 'persistence'
  | 'admin' | 'deploy' | 'pattern' | 'cluster' | 'observe' | 'security' | 'pipeline';

type RedisSpec = {
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
  diagram: RedisDiagramKind;
  route: TeachingLesson['route'];
};

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff' };

function redisDiagram(spec: RedisSpec): string {
  const title = spec.label.length > 26 ? spec.label.slice(0, 26) : spec.heading.split('：')[0];
  const command = spec.command;
  const subject = spec.subject;
  const result = spec.result;

  switch (spec.diagram) {
    case 'compare':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 78, 18, title + '：Redis 的定位', 25, 620),
        excalidrawBox(spec.id + '-redis', 70, 98, 220, 120, palette.yellow),
        excalidrawText(spec.id + '-redis-t', 98, 126, 'Redis\n内存数据结构\n极快读写', 16, 164),
        excalidrawBox(spec.id + '-db', 460, 98, 220, 120, palette.blue),
        excalidrawText(spec.id + '-db-t', 488, 126, 'SQL/NoSQL\n持久化主库\n复杂查询', 16, 164),
        excalidrawText(spec.id + '-note', 112, 286, command + '：Redis 常作缓存/队列，不是万能主库', 18, 520),
      ]);
    case 'kv':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Key 找 Value', 25, 620),
        excalidrawBox(spec.id + '-key', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-key-t', 84, 150, 'Key\nuser:1', 16, 98),
        excalidrawBox(spec.id + '-cmd', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-cmd-t', 334, 124, command + '\nSET/GET\nO(1)', 16, 124),
        excalidrawBox(spec.id + '-val', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-val-t', 594, 150, 'Value\n字符串/结构', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'datatype':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 72, 18, title + '：Redis 数据结构', 25, 640),
        ...['String', 'Hash', 'List', 'Set', 'ZSet'].map((word, i) => [
          excalidrawBox(spec.id + '-dt-' + i, 48 + i * 132, 118, 112, 74, i % 2 ? palette.yellow : palette.blue),
          excalidrawText(spec.id + '-dt-t-' + i, 70 + i * 132, 140, word, 17, 72),
        ]).flat(),
        excalidrawText(spec.id + '-note', 106, 304, command + '：按访问模式选类型', 18, 540),
      ]);
    case 'cache':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：缓存分层', 25, 620),
        excalidrawBox(spec.id + '-app', 58, 124, 130, 82, palette.blue),
        excalidrawText(spec.id + '-app-t', 82, 146, 'App\n读请求', 15, 84),
        excalidrawBox(spec.id + '-redis', 264, 124, 130, 82, palette.yellow),
        excalidrawText(spec.id + '-redis-t', 288, 146, 'Redis\n' + command, 15, 84),
        excalidrawBox(spec.id + '-db', 470, 124, 130, 82, palette.green),
        excalidrawText(spec.id + '-db-t', 494, 146, 'Database\n源真相', 15, 84),
        excalidrawBox(spec.id + '-miss', 676, 124, 130, 82, palette.red),
        excalidrawText(spec.id + '-miss-t', 700, 146, 'Miss\n回源', 15, 84),
        excalidrawArrow(spec.id + '-a1', 194, 164, 64, 0),
        excalidrawArrow(spec.id + '-a2', 400, 164, 64, 0),
      ]);
    case 'stream':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Stream / PubSub', 25, 620),
        excalidrawBox(spec.id + '-pub', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-pub-t', 84, 144, 'Publisher\nXADD/PUBLISH', 16, 98),
        excalidrawBox(spec.id + '-ch', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-ch-t', 334, 116, command + '\nStream/Channel\n持久/广播', 16, 120),
        excalidrawBox(spec.id + '-sub', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-sub-t', 592, 144, 'Consumer\n消费组', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'queue':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：消息队列', 25, 620),
        excalidrawBox(spec.id + '-prod', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-prod-t', 84, 144, 'Producer\nLPUSH', 16, 98),
        excalidrawBox(spec.id + '-list', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-list-t', 334, 116, command + '\nList/Stream\n缓冲', 16, 120),
        excalidrawBox(spec.id + '-worker', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-worker-t', 592, 144, 'Worker\nBRPOP', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'persistence':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：RDB 与 AOF', 25, 620),
        excalidrawBox(spec.id + '-mem', 58, 124, 150, 92, palette.yellow),
        excalidrawText(spec.id + '-mem-t', 84, 150, '内存\n热数据', 16, 98),
        excalidrawBox(spec.id + '-rdb', 264, 96, 130, 148, palette.blue),
        excalidrawText(spec.id + '-rdb-t', 290, 124, 'RDB\n快照', 16, 98),
        excalidrawBox(spec.id + '-aof', 424, 96, 130, 148, palette.green),
        excalidrawText(spec.id + '-aof-t', 450, 124, 'AOF\n追加日志', 16, 98),
        excalidrawBox(spec.id + '-disk', 584, 124, 130, 92, palette.purple),
        excalidrawText(spec.id + '-disk-t', 610, 150, '磁盘\n恢复', 16, 98),
        excalidrawText(spec.id + '-note', 112, 314, command, 18, 520),
      ]);
    case 'admin':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：连接与运维', 25, 620),
        excalidrawBox(spec.id + '-cli', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-cli-t', 84, 150, 'redis-cli\nINFO', 16, 98),
        excalidrawBox(spec.id + '-srv', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-srv-t', 334, 124, command + '\n启动/配置\nmaxmemory', 16, 124),
        excalidrawBox(spec.id + '-mon', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-mon-t', 594, 150, '监控\n慢日志', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'deploy':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：部署与高可用', 25, 620),
        excalidrawBox(spec.id + '-cfg', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-cfg-t', 84, 150, 'Docker\n包管理', 16, 98),
        excalidrawBox(spec.id + '-ha', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-ha-t', 334, 124, command + '\nSentinel\nCluster', 16, 124),
        excalidrawBox(spec.id + '-run', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-run-t', 594, 150, '故障切换\n分片', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'pattern':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：典型使用模式', 25, 620),
        excalidrawBox(spec.id + '-use', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-use-t', 84, 150, 'Session\n排行榜', 16, 98),
        excalidrawBox(spec.id + '-cmd', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-cmd-t', 334, 124, command + '\nINCR/ZINCRBY\n限流', 16, 124),
        excalidrawBox(spec.id + '-biz', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-biz-t', 594, 150, '业务\n低延迟', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'cluster':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Cluster 分片', 25, 620),
        excalidrawBox(spec.id + '-slot', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-slot-t', 84, 150, '16384 slots\n哈希槽', 16, 98),
        excalidrawBox(spec.id + '-nodes', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-nodes-t', 334, 124, command + '\n多 master\n副本', 16, 124),
        excalidrawBox(spec.id + '-route', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-route-t', 594, 150, '客户端\n路由 key', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'observe':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：监控与内存', 25, 620),
        excalidrawBox(spec.id + '-info', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-info-t', 84, 150, 'INFO\nlatency', 16, 98),
        excalidrawBox(spec.id + '-tool', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-tool-t', 334, 124, command + '\nSLOWLOG\nmemory', 16, 124),
        excalidrawBox(spec.id + '-fix', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-fix-t', 594, 150, '淘汰策略\n优化', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'security':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：安全与 ACL', 25, 620),
        excalidrawBox(spec.id + '-client', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-client-t', 84, 150, 'Client\nAUTH', 16, 98),
        excalidrawBox(spec.id + '-tls', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-tls-t', 334, 124, command + '\nTLS/ACL\n最小权限', 16, 124),
        excalidrawBox(spec.id + '-net', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-net-t', 594, 150, 'bind\n防火墙', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'pipeline':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Pipeline 批量', 25, 620),
        excalidrawBox(spec.id + '-app', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-app-t', 84, 150, 'App\n多条命令', 16, 98),
        excalidrawBox(spec.id + '-pipe', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-pipe-t', 334, 124, command + '\n一次往返\n批量执行', 16, 124),
        excalidrawBox(spec.id + '-redis', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-redis-t', 594, 150, 'Redis\n批量回复', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    default:
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Redis 命令', 25, 620),
        excalidrawBox(spec.id + '-obj', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-obj-t', 84, 150, subject, 16, 98),
        excalidrawBox(spec.id + '-cmd', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-cmd-t', 334, 124, command, 16, 124),
        excalidrawBox(spec.id + '-res', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-res-t', 594, 150, result, 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
  }
}

function redisLesson(spec: RedisSpec): TeachingLesson {
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
    rawDiagram: redisDiagram(spec),
  };
}

export const REDIS_TEACHING_LESSONS: Record<string, TeachingLesson> = {
