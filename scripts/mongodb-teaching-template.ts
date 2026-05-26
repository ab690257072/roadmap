import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

type MongoDiagramKind =
  | 'compare' | 'document' | 'datatype' | 'crud' | 'query' | 'index' | 'concern'
  | 'aggregation' | 'schema' | 'admin' | 'deploy' | 'security' | 'replica' | 'observe';

type MongoSpec = {
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
  diagram: MongoDiagramKind;
  route: TeachingLesson['route'];
};

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff' };

function mongoDiagram(spec: MongoSpec): string {
  const title = spec.label.length > 26 ? spec.label.slice(0, 26) : spec.heading.split('：')[0];
  const command = spec.command;
  const subject = spec.subject;
  const result = spec.result;

  switch (spec.diagram) {
    case 'compare':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 78, 18, title + '：先看数据形状', 25, 620),
        excalidrawBox(spec.id + '-sql', 70, 98, 220, 120, palette.blue),
        excalidrawText(spec.id + '-sql-t', 98, 126, 'SQL / 关系型\n固定 schema\nJOIN 强', 16, 164),
        excalidrawBox(spec.id + '-mongo', 460, 98, 220, 120, palette.yellow),
        excalidrawText(spec.id + '-mongo-t', 488, 126, 'MongoDB / 文档\n嵌套 JSON\n按访问建模', 16, 164),
        excalidrawText(spec.id + '-note', 112, 286, command + '：选型看一致性、查询模式、团队经验', 18, 520),
      ]);
    case 'document':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：集合里存文档', 25, 620),
        excalidrawBox(spec.id + '-db', 58, 124, 130, 92, palette.blue),
        excalidrawText(spec.id + '-db-t', 84, 150, 'Database\n逻辑库', 16, 98),
        excalidrawBox(spec.id + '-coll', 264, 96, 176, 148, palette.yellow),
        excalidrawText(spec.id + '-coll-t', 294, 124, command + '\nCollection\n多条文档', 16, 124),
        excalidrawBox(spec.id + '-doc', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-doc-t', 594, 150, 'Document\nBSON 字段', 16, 98),
        excalidrawArrow(spec.id + '-a1', 194, 170, 64, 0),
        excalidrawArrow(spec.id + '-a2', 446, 170, 116, 0),
      ]);
    case 'datatype':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 72, 18, title + '：BSON 类型决定能存什么', 25, 640),
        ...['String', 'Number', 'Date', 'ObjectId', 'Array'].map((word, i) => [
          excalidrawBox(spec.id + '-t-' + i, 48 + i * 132, 118, 112, 74, i % 2 ? palette.yellow : palette.blue),
          excalidrawText(spec.id + '-t-t-' + i, 70 + i * 132, 140, word, 17, 72),
        ]).flat(),
        excalidrawText(spec.id + '-note', 106, 304, command + '：类型影响比较、索引和聚合', 18, 540),
      ]);
    case 'crud':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：CRUD 围绕文档', 25, 620),
        excalidrawBox(spec.id + '-write', 54, 124, 130, 82, palette.yellow),
        excalidrawText(spec.id + '-write-t', 78, 146, 'insert\nupdate\ndelete', 15, 84),
        excalidrawBox(spec.id + '-cmd', 264, 96, 176, 148, palette.blue),
        excalidrawText(spec.id + '-cmd-t', 294, 124, command + '\n驱动/Shell\n操作集合', 16, 124),
        excalidrawBox(spec.id + '-read', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-read-t', 594, 150, 'find\n返回文档', 16, 98),
        excalidrawArrow(spec.id + '-a1', 190, 164, 68, 0),
        excalidrawArrow(spec.id + '-a2', 446, 164, 116, 0),
      ]);
    case 'query':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：过滤文档', 25, 620),
        excalidrawBox(spec.id + '-filter', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-filter-t', 84, 150, 'Filter\n字段条件', 16, 98),
        excalidrawBox(spec.id + '-op', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-op-t', 334, 124, command + '\n$eq/$in/$gt\n投影/排序', 16, 124),
        excalidrawBox(spec.id + '-cursor', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-cursor-t', 594, 150, 'Cursor\n分批读取', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'index':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：索引服务查询', 25, 620),
        excalidrawBox(spec.id + '-query', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-query-t', 84, 150, 'Query\nfilter+sort', 16, 98),
        excalidrawBox(spec.id + '-idx', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-idx-t', 334, 124, command + '\n单/复合/文本\nunique/TTL', 16, 124),
        excalidrawBox(spec.id + '-plan', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-plan-t', 594, 150, 'IXSCAN\nvs COLLSCAN', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'concern':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：读写一致性级别', 25, 620),
        excalidrawBox(spec.id + '-app', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-app-t', 84, 150, 'App\n设置 concern', 16, 98),
        excalidrawBox(spec.id + '-concern', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-concern-t', 334, 124, command + '\nwriteConcern\nreadConcern', 16, 124),
        excalidrawBox(spec.id + '-cluster', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-cluster-t', 594, 150, '副本集\n确认写入', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'aggregation':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：聚合管道', 25, 620),
        excalidrawBox(spec.id + '-match', 48, 126, 112, 72, palette.blue),
        excalidrawText(spec.id + '-match-t', 70, 148, '$match\n过滤', 15, 68),
        excalidrawBox(spec.id + '-group', 190, 126, 112, 72, palette.yellow),
        excalidrawText(spec.id + '-group-t', 212, 148, '$group\n聚合', 15, 68),
        excalidrawBox(spec.id + '-project', 332, 126, 112, 72, palette.green),
        excalidrawText(spec.id + '-project-t', 354, 148, '$project\n投影', 15, 68),
        excalidrawBox(spec.id + '-out', 474, 126, 112, 72, palette.purple),
        excalidrawText(spec.id + '-out-t', 496, 148, '输出\n文档', 15, 68),
        excalidrawArrow(spec.id + '-a1', 164, 162, 20, 0),
        excalidrawArrow(spec.id + '-a2', 306, 162, 20, 0),
        excalidrawArrow(spec.id + '-a3', 448, 162, 20, 0),
        excalidrawText(spec.id + '-note', 112, 286, command, 18, 520),
      ]);
    case 'schema':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：Schema 校验', 25, 620),
        excalidrawBox(spec.id + '-design', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-design-t', 84, 150, '建模\n嵌套/引用', 16, 98),
        excalidrawBox(spec.id + '-validate', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-validate-t', 334, 124, command + '\nJSON Schema\nvalidator', 16, 124),
        excalidrawBox(spec.id + '-reject', 568, 124, 150, 92, palette.red),
        excalidrawText(spec.id + '-reject-t', 594, 150, '非法文档\n拒绝写入', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'admin':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：连接与管理', 25, 620),
        excalidrawBox(spec.id + '-client', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-client-t', 84, 150, 'mongosh\nCompass', 16, 98),
        excalidrawBox(spec.id + '-cmd', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-cmd-t', 334, 124, command + '\nAtlas/本地\n实例', 16, 124),
        excalidrawBox(spec.id + '-ops', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-ops-t', 594, 150, '监控\n备份', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'deploy':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：部署拓扑', 25, 620),
        excalidrawBox(spec.id + '-cfg', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-cfg-t', 84, 150, 'Docker\nAtlas', 16, 98),
        excalidrawBox(spec.id + '-topo', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-topo-t', 334, 124, command + '\n副本集\n分片', 16, 124),
        excalidrawBox(spec.id + '-run', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-run-t', 594, 150, '可扩展\n可切换', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'security':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：认证与授权', 25, 620),
        excalidrawBox(spec.id + '-user', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-user-t', 84, 150, 'User\nRole', 16, 98),
        excalidrawBox(spec.id + '-auth', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-auth-t', 334, 124, command + '\nSCRAM\nTLS/加密', 16, 124),
        excalidrawBox(spec.id + '-priv', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-priv-t', 594, 150, '最小权限\n审计', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'replica':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：副本集与分片', 25, 620),
        excalidrawBox(spec.id + '-primary', 58, 118, 130, 100, palette.blue),
        excalidrawText(spec.id + '-primary-t', 84, 144, 'Primary\n写入', 16, 98),
        excalidrawBox(spec.id + '-secondary', 264, 118, 130, 100, palette.green),
        excalidrawText(spec.id + '-secondary-t', 290, 144, 'Secondary\n复制', 16, 98),
        excalidrawBox(spec.id + '-shard', 470, 118, 130, 100, palette.yellow),
        excalidrawText(spec.id + '-shard-t', 496, 144, 'Shard\n水平切', 16, 98),
        excalidrawText(spec.id + '-note', 112, 286, command + '：先副本集高可用，再按需分片', 18, 520),
      ]);
    case 'observe':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：监控与诊断', 25, 620),
        excalidrawBox(spec.id + '-metrics', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-metrics-t', 84, 150, 'Metrics\nProfiler', 16, 98),
        excalidrawBox(spec.id + '-tool', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-tool-t', 334, 124, command + '\n慢查询\nAtlas 监控', 16, 124),
        excalidrawBox(spec.id + '-fix', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-fix-t', 594, 150, '索引/查询\n优化', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    default:
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：文档数据库操作', 25, 620),
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

function mongoLesson(spec: MongoSpec): TeachingLesson {
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
    rawDiagram: mongoDiagram(spec),
  };
}

export const MONGODB_TEACHING_LESSONS: Record<string, TeachingLesson> = {
