import type { RoadmapId } from './types';

export type GraphNode = {
  id: RoadmapId;
  short: string;
};

export type GraphLayer = {
  step: string;
  title: string;
  hint: string;
  groups: { label?: string; nodes: GraphNode[] }[];
};

export const ROADMAP_ROLES: Partial<Record<RoadmapId, string>> = {
  git: '版本协作',
  linux: '服务器操作',
  sql: '关系型查询',
  backend: '后端主线',
  'api-design': '接口规范',
  golang: 'Go 语言',
  postgresql: '关系型库',
  mongodb: '文档库',
  redis: '缓存/锁',
  docker: '容器打包',
  kubernetes: '集群编排',
  devops: 'CI/CD',
  'system-design': '架构设计',
};

/** 前端转后端推荐学习顺序：自上而下，同层可并行 */
export const LEARNING_LAYERS: GraphLayer[] = [
  {
    step: '①',
    title: '前置基础',
    hint: '写代码前先会协作、会登服务器',
    groups: [{ nodes: [{ id: 'git', short: 'Git' }, { id: 'linux', short: 'Linux' }] }],
  },
  {
    step: '②',
    title: '后端核心',
    hint: '从 SQL 和后端总览入手，再学怎么设计 API',
    groups: [{ nodes: [{ id: 'sql', short: 'SQL' }, { id: 'backend', short: '后端' }, { id: 'api-design', short: 'API' }] }],
  },
  {
    step: '③',
    title: '语言 & 数据',
    hint: '选一门后端语言，再配一种或多种数据库',
    groups: [
      { label: '语言', nodes: [{ id: 'golang', short: 'Go' }] },
      { label: '存储', nodes: [{ id: 'postgresql', short: 'PostgreSQL' }, { id: 'mongodb', short: 'MongoDB' }, { id: 'redis', short: 'Redis' }] },
    ],
  },
  {
    step: '④',
    title: '部署运维',
    hint: 'Docker 打包 → Kubernetes 上集群 → DevOps 自动化',
    groups: [{ nodes: [{ id: 'docker', short: 'Docker' }, { id: 'kubernetes', short: 'K8s' }, { id: 'devops', short: 'DevOps' }] }],
  },
  {
    step: '⑤',
    title: '架构进阶',
    hint: '能写能部署后，再系统学高可用与扩展性',
    groups: [{ nodes: [{ id: 'system-design', short: '系统设计' }] }],
  },
];

/** 同层节点之间的弱关联（虚线） */
export const GRAPH_LINKS: [RoadmapId, RoadmapId][] = [
  ['golang', 'docker'],
  ['golang', 'postgresql'],
  ['golang', 'mongodb'],
  ['postgresql', 'redis'],
  ['mongodb', 'redis'],
  ['backend', 'docker'],
];
