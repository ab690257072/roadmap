import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

type SdDiagramKind =
  | 'journey' | 'pattern' | 'scale' | 'cache' | 'api' | 'queue' | 'reliability'
  | 'security' | 'compare' | 'stream' | 'proxy' | 'observe' | 'storage';

type SdSpec = {
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
  diagram: SdDiagramKind;
  route: TeachingLesson['route'];
};

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff' };

function sdDiagram(spec: SdSpec): string {
  const title = spec.label.length > 26 ? spec.label.slice(0, 26) : spec.heading.split('：')[0];
  const command = spec.command;

  switch (spec.diagram) {
    case 'journey':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：系统设计流程', 25, 620),
        excalidrawBox(spec.id + '-req', 48, 126, 112, 72, palette.blue),
        excalidrawText(spec.id + '-req-t', 70, 148, '需求\nQPS/SLA', 15, 68),
        excalidrawBox(spec.id + '-design', 190, 126, 112, 72, palette.yellow),
        excalidrawText(spec.id + '-design-t', 212, 148, '架构\n组件', 15, 68),
        excalidrawBox(spec.id + '-deep', 332, 126, 112, 72, palette.green),
        excalidrawText(spec.id + '-deep-t', 354, 148, '深入\n瓶颈', 15, 68),
        excalidrawBox(spec.id + '-trade', 474, 126, 112, 72, palette.purple),
        excalidrawText(spec.id + '-trade-t', 496, 148, '权衡\nCAP', 15, 68),
        excalidrawArrow(spec.id + '-a1', 164, 162, 20, 0),
        excalidrawArrow(spec.id + '-a2', 306, 162, 20, 0),
        excalidrawArrow(spec.id + '-a3', 448, 162, 20, 0),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'compare':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 78, 18, title + '：CAP 与一致性', 25, 620),
        excalidrawBox(spec.id + '-cp', 70, 98, 200, 120, palette.blue),
        excalidrawText(spec.id + '-cp-t', 98, 126, 'CP\n强一致\n牺牲可用', 16, 150),
        excalidrawBox(spec.id + '-ap', 300, 98, 200, 120, palette.yellow),
        excalidrawText(spec.id + '-ap-t', 328, 126, 'AP\n高可用\n最终一致', 16, 150),
        excalidrawBox(spec.id + '-ca', 530, 98, 200, 120, palette.green),
        excalidrawText(spec.id + '-ca-t', 558, 126, 'CA\n单机\n非分布式', 16, 150),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'pattern':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：架构模式', 25, 620),
        excalidrawBox(spec.id + '-mono', 70, 98, 220, 120, palette.blue),
        excalidrawText(spec.id + '-mono-t', 98, 126, 'Monolith\n简单\n单部署', 16, 164),
        excalidrawBox(spec.id + '-micro', 460, 98, 220, 120, palette.green),
        excalidrawText(spec.id + '-micro-t', 488, 126, 'Microservices\n独立扩展\n治理成本', 16, 164),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'scale':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：水平扩展', 25, 620),
        excalidrawBox(spec.id + '-lb', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-lb-t', 84, 150, 'Load Balancer\n入口', 16, 98),
        excalidrawBox(spec.id + '-apps', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-apps-t', 334, 124, command + '\n多实例\n无状态', 16, 124),
        excalidrawBox(spec.id + '-shard', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-shard-t', 594, 150, '分片\n数据库', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'cache':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：缓存与 CDN', 25, 620),
        excalidrawBox(spec.id + '-user', 58, 124, 130, 82, palette.blue),
        excalidrawText(spec.id + '-user-t', 82, 146, 'User\n请求', 15, 84),
        excalidrawBox(spec.id + '-cdn', 264, 124, 130, 82, palette.yellow),
        excalidrawText(spec.id + '-cdn-t', 288, 146, 'CDN\n边缘', 15, 84),
        excalidrawBox(spec.id + '-cache', 470, 124, 130, 82, palette.green),
        excalidrawText(spec.id + '-cache-t', 494, 146, 'App Cache\nRedis', 15, 84),
        excalidrawBox(spec.id + '-db', 676, 124, 130, 82, palette.purple),
        excalidrawText(spec.id + '-db-t', 700, 146, 'DB\n源', 15, 84),
        excalidrawArrow(spec.id + '-a1', 194, 164, 64, 0),
        excalidrawArrow(spec.id + '-a2', 400, 164, 64, 0),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'api':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：API 与应用层', 25, 620),
        excalidrawBox(spec.id + '-client', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-client-t', 84, 150, 'Client\nWeb/Mobile', 16, 98),
        excalidrawBox(spec.id + '-api', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-api-t', 334, 124, command + '\nREST/GraphQL\n鉴权限流', 16, 124),
        excalidrawBox(spec.id + '-svc', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-svc-t', 594, 150, 'Services\n业务', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'queue':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：异步与解耦', 25, 620),
        excalidrawBox(spec.id + '-api', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-api-t', 84, 144, 'API\n同步入口', 16, 98),
        excalidrawBox(spec.id + '-q', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-q-t', 334, 116, command + '\nQueue/Topic\n缓冲', 16, 120),
        excalidrawBox(spec.id + '-worker', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-worker-t', 592, 144, 'Worker\n后台任务', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'reliability':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：容错与降级', 25, 620),
        excalidrawBox(spec.id + '-svc', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-svc-t', 84, 150, 'Service A\n调用 B', 16, 98),
        excalidrawBox(spec.id + '-cb', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-cb-t', 334, 124, command + '\nCircuit Breaker\n超时重试', 16, 124),
        excalidrawBox(spec.id + '-fallback', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-fallback-t', 594, 150, '降级\n兜底', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'security':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：安全边界', 25, 620),
        excalidrawBox(spec.id + '-edge', 58, 124, 150, 92, palette.red),
        excalidrawText(spec.id + '-edge-t', 84, 150, 'Internet\n不可信', 16, 98),
        excalidrawBox(spec.id + '-gw', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-gw-t', 334, 124, command + '\nGateway\nGatekeeper', 16, 124),
        excalidrawBox(spec.id + '-trust', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-trust-t', 594, 150, '内网\n服务', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'stream':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：事件驱动', 25, 620),
        excalidrawBox(spec.id + '-prod', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-prod-t', 84, 144, 'Producer\n发事件', 16, 98),
        excalidrawBox(spec.id + '-bus', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-bus-t', 334, 116, command + '\nEvent Bus\n解耦', 16, 120),
        excalidrawBox(spec.id + '-cons', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-cons-t', 592, 144, 'Consumer\n订阅', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'proxy':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：网关模式', 25, 620),
        excalidrawBox(spec.id + '-client', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-client-t', 84, 150, 'Clients\n统一入口', 16, 98),
        excalidrawBox(spec.id + '-gw', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-gw-t', 334, 124, command + '\nRouting\nAggregation', 16, 124),
        excalidrawBox(spec.id + '-svc', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-svc-t', 594, 150, 'Backend\nServices', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'observe':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：监控与 SLO', 25, 620),
        excalidrawBox(spec.id + '-sys', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-sys-t', 84, 150, 'System\n指标', 16, 98),
        excalidrawBox(spec.id + '-mon', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-mon-t', 334, 124, command + '\nDashboard\n告警', 16, 124),
        excalidrawBox(spec.id + '-slo', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-slo-t', 594, 150, 'SLO/SLI\n可用性', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'storage':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：存储与分片', 25, 620),
        excalidrawBox(spec.id + '-app', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-app-t', 84, 150, 'App\n读写', 16, 98),
        excalidrawBox(spec.id + '-store', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-store-t', 334, 124, command + '\nKV/SQL\nFederation', 16, 124),
        excalidrawBox(spec.id + '-shard', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-shard-t', 594, 150, '分片\n复制', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    default:
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：系统设计', 25, 620),
        excalidrawBox(spec.id + '-a', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-a-t', 84, 150, spec.subject, 16, 98),
        excalidrawBox(spec.id + '-b', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-b-t', 334, 124, command, 16, 124),
        excalidrawBox(spec.id + '-c', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-c-t', 594, 150, spec.result, 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
  }
}

function sdLesson(spec: SdSpec): TeachingLesson {
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
    rawDiagram: sdDiagram(spec),
  };
}

export const SYSTEM_DESIGN_TEACHING_LESSONS: Record<string, TeachingLesson> = {
