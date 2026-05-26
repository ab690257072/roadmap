import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

type DockerDiagramKind =
  | 'compare' | 'container' | 'image' | 'volume' | 'network' | 'security'
  | 'pipeline' | 'admin' | 'deploy' | 'observe';

type DockerSpec = {
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
  diagram: DockerDiagramKind;
  route: TeachingLesson['route'];
};

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff' };

function dockerDiagram(spec: DockerSpec): string {
  const title = spec.label.length > 26 ? spec.label.slice(0, 26) : spec.heading.split('：')[0];
  const command = spec.command;

  switch (spec.diagram) {
    case 'compare':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 78, 18, title + '：三种运行方式', 25, 620),
        excalidrawBox(spec.id + '-bare', 48, 98, 180, 110, palette.blue),
        excalidrawText(spec.id + '-bare-t', 76, 126, 'Bare Metal\n独占硬件', 16, 130),
        excalidrawBox(spec.id + '-vm', 268, 98, 180, 110, palette.yellow),
        excalidrawText(spec.id + '-vm-t', 296, 126, 'VM\nGuest OS\n较重', 16, 130),
        excalidrawBox(spec.id + '-ctr', 488, 98, 180, 110, palette.green),
        excalidrawText(spec.id + '-ctr-t', 516, 126, 'Container\n共享内核\n更轻', 16, 130),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'container':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：镜像到容器', 25, 620),
        excalidrawBox(spec.id + '-img', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-img-t', 84, 150, 'Image\n只读层', 16, 98),
        excalidrawBox(spec.id + '-run', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-run-t', 334, 124, command + '\ndocker run\n隔离进程', 16, 124),
        excalidrawBox(spec.id + '-ctr', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-ctr-t', 594, 150, 'Container\n运行实例', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'image':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：构建与分发镜像', 25, 620),
        excalidrawBox(spec.id + '-df', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-df-t', 84, 150, 'Dockerfile\nbuild context', 16, 98),
        excalidrawBox(spec.id + '-build', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-build-t', 334, 124, command + '\ndocker build\n分层缓存', 16, 124),
        excalidrawBox(spec.id + '-reg', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-reg-t', 594, 150, 'Registry\npush/pull', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'volume':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：数据持久化', 25, 620),
        excalidrawBox(spec.id + '-ctr', 58, 124, 150, 92, palette.yellow),
        excalidrawText(spec.id + '-ctr-t', 84, 150, 'Container\n可删可重建', 16, 98),
        excalidrawBox(spec.id + '-vol', 304, 96, 184, 148, palette.blue),
        excalidrawText(spec.id + '-vol-t', 334, 124, command + '\nvolume/bind\n挂载', 16, 124),
        excalidrawBox(spec.id + '-host', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-host-t', 594, 150, 'Host 路径\n或命名卷', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'network':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：容器网络', 25, 620),
        excalidrawBox(spec.id + '-a', 58, 124, 130, 92, palette.blue),
        excalidrawText(spec.id + '-a-t', 84, 150, 'Container A\n:8080', 16, 98),
        excalidrawBox(spec.id + '-net', 264, 96, 176, 148, palette.yellow),
        excalidrawText(spec.id + '-net-t', 294, 124, command + '\nbridge/overlay\nDNS', 16, 124),
        excalidrawBox(spec.id + '-b', 568, 124, 130, 92, palette.green),
        excalidrawText(spec.id + '-b-t', 594, 150, 'Container B\n互通', 16, 98),
        excalidrawArrow(spec.id + '-a1', 194, 170, 64, 0),
        excalidrawArrow(spec.id + '-a2', 446, 170, 116, 0),
      ]);
    case 'security':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：镜像与运行时安全', 25, 620),
        excalidrawBox(spec.id + '-scan', 58, 124, 150, 92, palette.red),
        excalidrawText(spec.id + '-scan-t', 84, 150, '扫描\nCVE', 16, 98),
        excalidrawBox(spec.id + '-harden', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-harden-t', 334, 124, command + '\nnon-root\n最小镜像', 16, 124),
        excalidrawBox(spec.id + '-run', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-run-t', 594, 150, '只读根文件系统\ncap drop', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'pipeline':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：开发到运行', 25, 620),
        excalidrawBox(spec.id + '-code', 48, 126, 112, 72, palette.blue),
        excalidrawText(spec.id + '-code-t', 70, 148, 'Code\nDockerfile', 15, 68),
        excalidrawBox(spec.id + '-build', 190, 126, 112, 72, palette.yellow),
        excalidrawText(spec.id + '-build-t', 212, 148, 'Build\n镜像', 15, 68),
        excalidrawBox(spec.id + '-push', 332, 126, 112, 72, palette.green),
        excalidrawText(spec.id + '-push-t', 354, 148, 'Push\nRegistry', 15, 68),
        excalidrawBox(spec.id + '-run', 474, 126, 112, 72, palette.purple),
        excalidrawText(spec.id + '-run-t', 496, 148, 'Run\n容器', 15, 68),
        excalidrawArrow(spec.id + '-a1', 164, 162, 20, 0),
        excalidrawArrow(spec.id + '-a2', 306, 162, 20, 0),
        excalidrawArrow(spec.id + '-a3', 448, 162, 20, 0),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'admin':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Docker CLI', 25, 620),
        excalidrawBox(spec.id + '-cli', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-cli-t', 84, 150, 'docker CLI\n客户端', 16, 98),
        excalidrawBox(spec.id + '-daemon', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-daemon-t', 334, 124, command + '\ndockerd\nEngine API', 16, 124),
        excalidrawBox(spec.id + '-obj', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-obj-t', 594, 150, 'images\ncontainers', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'deploy':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Compose 多容器', 25, 620),
        excalidrawBox(spec.id + '-yml', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-yml-t', 84, 150, 'compose.yml\n服务定义', 16, 98),
        excalidrawBox(spec.id + '-up', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-up-t', 334, 124, command + '\ndocker compose up\n网络+卷', 16, 124),
        excalidrawBox(spec.id + '-stack', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-stack-t', 594, 150, 'app+db\n本地栈', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'observe':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：观察容器', 25, 620),
        excalidrawBox(spec.id + '-logs', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-logs-t', 84, 150, 'logs\nstats', 16, 98),
        excalidrawBox(spec.id + '-inspect', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-inspect-t', 334, 124, command + '\ninspect\nexec', 16, 124),
        excalidrawBox(spec.id + '-fix', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-fix-t', 594, 150, '定位\n重启策略', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    default:
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：容器工作流', 25, 620),
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

function dockerLesson(spec: DockerSpec): TeachingLesson {
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
    rawDiagram: dockerDiagram(spec),
  };
}

export const DOCKER_TEACHING_LESSONS: Record<string, TeachingLesson> = {
