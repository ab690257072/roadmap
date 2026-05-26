import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

type DevopsDiagramKind =
  | 'journey' | 'pipeline' | 'git' | 'cloud' | 'observe' | 'container'
  | 'orchestration' | 'config' | 'network' | 'security' | 'pattern' | 'language';

type DevopsSpec = {
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
  diagram: DevopsDiagramKind;
  route: TeachingLesson['route'];
};

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff' };

function devopsDiagram(spec: DevopsSpec): string {
  const title = spec.label.length > 26 ? spec.label.slice(0, 26) : spec.heading.split('：')[0];
  const command = spec.command;

  switch (spec.diagram) {
    case 'journey':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：DevOps 闭环', 25, 620),
        excalidrawBox(spec.id + '-dev', 48, 126, 112, 72, palette.blue),
        excalidrawText(spec.id + '-dev-t', 70, 148, 'Plan\nCode', 15, 68),
        excalidrawBox(spec.id + '-build', 190, 126, 112, 72, palette.yellow),
        excalidrawText(spec.id + '-build-t', 212, 148, 'Build\nTest', 15, 68),
        excalidrawBox(spec.id + '-release', 332, 126, 112, 72, palette.green),
        excalidrawText(spec.id + '-release-t', 354, 148, 'Release\nDeploy', 15, 68),
        excalidrawBox(spec.id + '-ops', 474, 126, 112, 72, palette.purple),
        excalidrawText(spec.id + '-ops-t', 496, 148, 'Operate\nMonitor', 15, 68),
        excalidrawArrow(spec.id + '-a1', 164, 162, 20, 0),
        excalidrawArrow(spec.id + '-a2', 306, 162, 20, 0),
        excalidrawArrow(spec.id + '-a3', 448, 162, 20, 0),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'pipeline':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：CI/CD 流水线', 25, 620),
        excalidrawBox(spec.id + '-commit', 48, 126, 112, 72, palette.blue),
        excalidrawText(spec.id + '-commit-t', 70, 148, 'Commit\n触发', 15, 68),
        excalidrawBox(spec.id + '-ci', 190, 126, 112, 72, palette.yellow),
        excalidrawText(spec.id + '-ci-t', 212, 148, 'CI\n测试构建', 15, 68),
        excalidrawBox(spec.id + '-cd', 332, 126, 112, 72, palette.green),
        excalidrawText(spec.id + '-cd-t', 354, 148, 'CD\n发布', 15, 68),
        excalidrawBox(spec.id + '-prod', 474, 126, 112, 72, palette.red),
        excalidrawText(spec.id + '-prod-t', 496, 148, 'Prod\n线上', 15, 68),
        excalidrawArrow(spec.id + '-a1', 164, 162, 20, 0),
        excalidrawArrow(spec.id + '-a2', 306, 162, 20, 0),
        excalidrawArrow(spec.id + '-a3', 448, 162, 20, 0),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'git':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：版本控制协作', 25, 620),
        excalidrawBox(spec.id + '-local', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-local-t', 84, 150, 'Local\ncommit', 16, 98),
        excalidrawBox(spec.id + '-remote', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-remote-t', 334, 124, command + '\nremote\nPR/MR', 16, 124),
        excalidrawBox(spec.id + '-ci', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-ci-t', 594, 150, '触发\n流水线', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'cloud':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：云平台能力', 25, 620),
        excalidrawBox(spec.id + '-svc', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-svc-t', 84, 150, 'Compute\nStorage', 16, 98),
        excalidrawBox(spec.id + '-cloud', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-cloud-t', 334, 124, command + '\nIAM\nRegion/AZ', 16, 124),
        excalidrawBox(spec.id + '-app', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-app-t', 594, 150, '托管服务\n弹性', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'observe':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：可观测性', 25, 620),
        excalidrawBox(spec.id + '-logs', 58, 118, 130, 74, palette.blue),
        excalidrawText(spec.id + '-logs-t', 84, 140, 'Logs', 16, 86),
        excalidrawBox(spec.id + '-metrics', 224, 118, 130, 74, palette.yellow),
        excalidrawText(spec.id + '-metrics-t', 250, 140, 'Metrics', 16, 86),
        excalidrawBox(spec.id + '-traces', 390, 118, 130, 74, palette.green),
        excalidrawText(spec.id + '-traces-t', 416, 140, 'Traces', 16, 86),
        excalidrawBox(spec.id + '-alert', 556, 118, 130, 74, palette.red),
        excalidrawText(spec.id + '-alert-t', 582, 140, 'Alerts', 16, 86),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'container':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：容器化交付', 25, 620),
        excalidrawBox(spec.id + '-img', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-img-t', 84, 150, 'Image\n不可变', 16, 98),
        excalidrawBox(spec.id + '-run', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-run-t', 334, 124, command + '\nDocker\n运行时', 16, 124),
        excalidrawBox(spec.id + '-reg', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-reg-t', 594, 150, 'Registry\n分发', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'orchestration':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：编排与调度', 25, 620),
        excalidrawBox(spec.id + '-decl', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-decl-t', 84, 150, '声明式\nYAML', 16, 98),
        excalidrawBox(spec.id + '-k8s', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-k8s-t', 334, 124, command + '\nK8s\n调度自愈', 16, 124),
        excalidrawBox(spec.id + '-pods', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-pods-t', 594, 150, 'Pod\n多副本', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'config':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：基础设施即代码', 25, 620),
        excalidrawBox(spec.id + '-code', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-code-t', 84, 150, 'Terraform\nAnsible', 16, 98),
        excalidrawBox(spec.id + '-apply', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-apply-t', 334, 124, command + '\nplan/apply\n可重复', 16, 124),
        excalidrawBox(spec.id + '-infra', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-infra-t', 594, 150, '云资源\n一致', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'network':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：网络与代理', 25, 620),
        excalidrawBox(spec.id + '-client', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-client-t', 84, 150, 'Client\n外网', 16, 98),
        excalidrawBox(spec.id + '-proxy', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-proxy-t', 334, 124, command + '\nForward/Reverse\nProxy', 16, 124),
        excalidrawBox(spec.id + '-svc', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-svc-t', 594, 150, '内网服务\n负载', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'security':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：安全与合规', 25, 620),
        excalidrawBox(spec.id + '-id', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-id-t', 84, 150, 'IAM\n密钥', 16, 98),
        excalidrawBox(spec.id + '-scan', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-scan-t', 334, 124, command + '\n扫描\n审计', 16, 124),
        excalidrawBox(spec.id + '-policy', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-policy-t', 594, 150, '最小权限\n合规', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'pattern':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：云设计模式', 25, 620),
        excalidrawBox(spec.id + '-prob', 58, 124, 150, 92, palette.red),
        excalidrawText(spec.id + '-prob-t', 84, 150, '问题\n扩展/可用', 16, 98),
        excalidrawBox(spec.id + '-pat', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-pat-t', 334, 124, command + '\nQueue\nCircuit Breaker', 16, 124),
        excalidrawBox(spec.id + '-sol', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-sol-t', 594, 150, '可复用\n架构', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'language':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：自动化脚本语言', 25, 620),
        excalidrawBox(spec.id + '-script', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-script-t', 84, 150, 'Python/Go\nShell', 16, 98),
        excalidrawBox(spec.id + '-auto', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-auto-t', 334, 124, command + '\nAPI 调用\n批处理', 16, 124),
        excalidrawBox(spec.id + '-pipe', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-pipe-t', 594, 150, '接入\nCI/CD', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    default:
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：DevOps 实践', 25, 620),
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

function devopsLesson(spec: DevopsSpec): TeachingLesson {
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
    rawDiagram: devopsDiagram(spec),
  };
}

export const DEVOPS_TEACHING_LESSONS: Record<string, TeachingLesson> = {
