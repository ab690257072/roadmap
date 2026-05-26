import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

type K8sDiagramKind =
  | 'journey' | 'orchestration' | 'workload' | 'network' | 'storage' | 'config'
  | 'security' | 'scale' | 'observe' | 'deploy' | 'pipeline' | 'pattern';

type K8sSpec = {
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
  diagram: K8sDiagramKind;
  route: TeachingLesson['route'];
};

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff' };

function k8sDiagram(spec: K8sSpec): string {
  const title = spec.label.length > 26 ? spec.label.slice(0, 26) : spec.heading.split('：')[0];
  const command = spec.command;

  switch (spec.diagram) {
    case 'journey':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：从容器到集群', 25, 620),
        excalidrawBox(spec.id + '-ctr', 58, 118, 130, 100, palette.blue),
        excalidrawText(spec.id + '-ctr-t', 84, 144, 'Container\n单节点', 16, 98),
        excalidrawBox(spec.id + '-k8s', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-k8s-t', 334, 116, command + '\n调度/自愈\n扩缩', 16, 120),
        excalidrawBox(spec.id + '-prod', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-prod-t', 592, 144, '生产集群\n多节点', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'orchestration':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：控制面调度', 25, 620),
        excalidrawBox(spec.id + '-api', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-api-t', 84, 144, 'API Server\n声明期望', 16, 98),
        excalidrawBox(spec.id + '-ctrl', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-ctrl-t', 334, 116, command + '\nScheduler\nController', 16, 120),
        excalidrawBox(spec.id + '-node', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-node-t', 592, 144, 'Node\nkubelet', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'workload':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：工作负载对象', 25, 620),
        excalidrawBox(spec.id + '-pod', 58, 124, 130, 92, palette.blue),
        excalidrawText(spec.id + '-pod-t', 84, 150, 'Pod\n最小单元', 16, 98),
        excalidrawBox(spec.id + '-ctrl', 264, 96, 176, 148, palette.yellow),
        excalidrawText(spec.id + '-ctrl-t', 294, 124, command + '\nDeployment\nStatefulSet/Job', 16, 124),
        excalidrawBox(spec.id + '-rs', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-rs-t', 594, 150, 'ReplicaSet\n副本管理', 16, 98),
        excalidrawArrow(spec.id + '-a1', 194, 170, 64, 0),
        excalidrawArrow(spec.id + '-a2', 446, 170, 116, 0),
      ]);
    case 'network':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Service 与 Ingress', 25, 620),
        excalidrawBox(spec.id + '-ing', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-ing-t', 84, 150, 'Ingress\n七层入口', 16, 98),
        excalidrawBox(spec.id + '-svc', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-svc-t', 334, 124, command + '\nClusterIP\nLoadBalancer', 16, 124),
        excalidrawBox(spec.id + '-pod', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-pod-t', 594, 150, 'Pod\n后端实例', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'storage':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：PV / PVC / StorageClass', 25, 620),
        excalidrawBox(spec.id + '-pvc', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-pvc-t', 84, 150, 'PVC\n应用申请', 16, 98),
        excalidrawBox(spec.id + '-pv', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-pv-t', 334, 124, command + '\nPV\nStorageClass', 16, 124),
        excalidrawBox(spec.id + '-pod', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-pod-t', 594, 150, 'Pod\nvolumeMount', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'config':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：ConfigMap / Secret', 25, 620),
        excalidrawBox(spec.id + '-cm', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-cm-t', 84, 150, 'ConfigMap\n非敏感配置', 16, 98),
        excalidrawBox(spec.id + '-sec', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-sec-t', 334, 124, command + '\nSecret\nbase64/加密', 16, 124),
        excalidrawBox(spec.id + '-pod', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-pod-t', 594, 150, 'env/volume\n注入', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'security':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：RBAC 与 Pod 安全', 25, 620),
        excalidrawBox(spec.id + '-sub', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-sub-t', 84, 150, 'Subject\nUser/SA', 16, 98),
        excalidrawBox(spec.id + '-rbac', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-rbac-t', 334, 124, command + '\nRole/Binding\n最小权限', 16, 124),
        excalidrawBox(spec.id + '-pod', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-pod-t', 594, 150, 'PSA\nseccomp', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'scale':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：资源与 HPA', 25, 620),
        excalidrawBox(spec.id + '-req', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-req-t', 84, 150, 'requests\nlimits', 16, 98),
        excalidrawBox(spec.id + '-hpa', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-hpa-t', 334, 124, command + '\nHPA\n按 CPU/自定义', 16, 124),
        excalidrawBox(spec.id + '-pods', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-pods-t', 594, 150, 'Pod 数\n自动伸缩', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'observe':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：监控与日志', 25, 620),
        excalidrawBox(spec.id + '-pod', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-pod-t', 84, 150, 'Pod\nstdout', 16, 98),
        excalidrawBox(spec.id + '-stack', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-stack-t', 334, 124, command + '\nPrometheus\nLoki/EFK', 16, 124),
        excalidrawBox(spec.id + '-alert', 568, 124, 150, 92, palette.red),
        excalidrawText(spec.id + '-alert-t', 594, 150, '告警\nSLO', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'deploy':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Helm 与应用发布', 25, 620),
        excalidrawBox(spec.id + '-chart', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-chart-t', 84, 150, 'Chart\n模板+值', 16, 98),
        excalidrawBox(spec.id + '-helm', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-helm-t', 334, 124, command + '\nhelm install\n版本回滚', 16, 124),
        excalidrawBox(spec.id + '-rel', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-rel-t', 594, 150, 'Release\n集群资源', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'pipeline':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：CI/CD 到集群', 25, 620),
        excalidrawBox(spec.id + '-git', 48, 126, 112, 72, palette.blue),
        excalidrawText(spec.id + '-git-t', 70, 148, 'Git\n变更', 15, 68),
        excalidrawBox(spec.id + '-ci', 190, 126, 112, 72, palette.yellow),
        excalidrawText(spec.id + '-ci-t', 212, 148, 'CI\n镜像', 15, 68),
        excalidrawBox(spec.id + '-cd', 332, 126, 112, 72, palette.green),
        excalidrawText(spec.id + '-cd-t', 354, 148, 'CD\n部署', 15, 68),
        excalidrawBox(spec.id + '-k8s', 474, 126, 112, 72, palette.purple),
        excalidrawText(spec.id + '-k8s-t', 496, 148, 'Cluster\n滚动', 15, 68),
        excalidrawArrow(spec.id + '-a1', 164, 162, 20, 0),
        excalidrawArrow(spec.id + '-a2', 306, 162, 20, 0),
        excalidrawArrow(spec.id + '-a3', 448, 162, 20, 0),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'pattern':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：部署模式', 25, 620),
        excalidrawBox(spec.id + '-blue', 70, 98, 220, 120, palette.blue),
        excalidrawText(spec.id + '-blue-t', 98, 126, 'Blue/Green\n两套环境\n切换', 16, 164),
        excalidrawBox(spec.id + '-canary', 460, 98, 220, 120, palette.yellow),
        excalidrawText(spec.id + '-canary-t', 488, 126, 'Canary\n灰度流量\n逐步放量', 16, 164),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    default:
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Kubernetes 对象', 25, 620),
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

function k8sLesson(spec: K8sSpec): TeachingLesson {
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
    rawDiagram: k8sDiagram(spec),
  };
}

export const KUBERNETES_TEACHING_LESSONS: Record<string, TeachingLesson> = {
