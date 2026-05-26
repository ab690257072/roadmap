import { stages as apiDesignStages, lessons as apiDesignLessons, tutorials as apiDesignTutorials } from './api-design/data';
import { stages as backendStages, tutorials as backendTutorials } from './backend/data';
import { lessons as backendLessons } from './backend/lessons';
import { stages as devopsStages, lessons as devopsLessons, tutorials as devopsTutorials } from './devops/data';
import { stages as dockerStages, lessons as dockerLessons, tutorials as dockerTutorials } from './docker/data';
import { stages as gitStages, lessons as gitLessons, tutorials as gitTutorials } from './git/data';
import { stages as golangStages, lessons as golangLessons, tutorials as golangTutorials } from './golang/data';
import { stages as kubernetesStages, lessons as kubernetesLessons, tutorials as kubernetesTutorials } from './kubernetes/data';
import { stages as linuxStages, lessons as linuxLessons, tutorials as linuxTutorials } from './linux/data';
import { stages as mongodbStages, lessons as mongodbLessons, tutorials as mongodbTutorials } from './mongodb/data';
import { stages as postgresqlStages, lessons as postgresqlLessons, tutorials as postgresqlTutorials } from './postgresql/data';
import { stages as redisStages, lessons as redisLessons, tutorials as redisTutorials } from './redis/data';
import { stages as sqlStages, lessons as sqlLessons, tutorials as sqlTutorials } from './sql/data';
import { stages as systemDesignStages, lessons as systemDesignLessons, tutorials as systemDesignTutorials } from './system-design/data';
import { prepareStages } from './stage-utils';
import type { RoadmapConfig, RoadmapId, Stage } from './types';

function withLayout(rawStages: Stage[]) {
  return prepareStages(rawStages);
}

const backendLayout = withLayout(backendStages);
const gitLayout = withLayout(gitStages);
const linuxLayout = withLayout(linuxStages);
const sqlLayout = withLayout(sqlStages);
const apiDesignLayout = withLayout(apiDesignStages);
const golangLayout = withLayout(golangStages);
const postgresqlLayout = withLayout(postgresqlStages);
const mongodbLayout = withLayout(mongodbStages);
const redisLayout = withLayout(redisStages);
const dockerLayout = withLayout(dockerStages);
const kubernetesLayout = withLayout(kubernetesStages);
const devopsLayout = withLayout(devopsStages);
const systemDesignLayout = withLayout(systemDesignStages);

export const roadmaps = {
  backend: {
    id: 'backend',
    title: '后端开发路线图',
    displayTitle: '后端开发',
    description: '推荐顺序是蛇形路线。它是为了可读性重新编排的学习路径，内容仍保留 roadmap.sh 的节点。',
    sourceUrl: 'https://roadmap.sh/backend',
    mapWidth: backendLayout.mapWidth,
    mapHeight: backendLayout.mapHeight,
    storageKey: 'roadmap-backend-done',
    stages: backendLayout.stages,
    tutorials: backendTutorials,
    lessons: backendLessons,
  },
  git: {
    id: 'git',
    title: 'Git & GitHub 路线图',
    displayTitle: 'Git & GitHub',
    description: '版本控制、分支协作、PR 与 CI 前置技能。',
    sourceUrl: 'https://roadmap.sh/git-github',
    mapWidth: gitLayout.mapWidth,
    mapHeight: gitLayout.mapHeight,
    storageKey: 'roadmap-git-done',
    stages: gitLayout.stages,
    tutorials: gitTutorials,
    lessons: gitLessons,
  },
  linux: {
    id: 'linux',
    title: 'Linux 路线图',
    displayTitle: 'Linux 运维',
    description: '服务器日常：文件、进程、网络、权限与 Shell。',
    sourceUrl: 'https://roadmap.sh/linux',
    mapWidth: linuxLayout.mapWidth,
    mapHeight: linuxLayout.mapHeight,
    storageKey: 'roadmap-linux-done',
    stages: linuxLayout.stages,
    tutorials: linuxTutorials,
    lessons: linuxLessons,
  },
  sql: {
    id: 'sql',
    title: 'SQL 路线图',
    displayTitle: 'SQL 查询',
    description: '关系型数据库查询语言，PostgreSQL/MySQL 的基础。',
    sourceUrl: 'https://roadmap.sh/sql',
    mapWidth: sqlLayout.mapWidth,
    mapHeight: sqlLayout.mapHeight,
    storageKey: 'roadmap-sql-done',
    stages: sqlLayout.stages,
    tutorials: sqlTutorials,
    lessons: sqlLessons,
  },
  'api-design': {
    id: 'api-design',
    title: 'API Design 路线图',
    displayTitle: 'API 设计',
    description: 'REST 规范、版本管理、错误码与接口文档。',
    sourceUrl: 'https://roadmap.sh/api-design',
    mapWidth: apiDesignLayout.mapWidth,
    mapHeight: apiDesignLayout.mapHeight,
    storageKey: 'roadmap-api-design-done',
    stages: apiDesignLayout.stages,
    tutorials: apiDesignTutorials,
    lessons: apiDesignLessons,
  },
  golang: {
    id: 'golang',
    title: 'Go 开发路线图',
    displayTitle: 'Go 后端开发',
    description: '完整导入 roadmap.sh/golang，并按前端转后端学习方式补充本地中文精讲。',
    sourceUrl: 'https://roadmap.sh/golang',
    mapWidth: golangLayout.mapWidth,
    mapHeight: golangLayout.mapHeight,
    storageKey: 'roadmap-golang-done',
    stages: golangLayout.stages,
    tutorials: golangTutorials,
    lessons: golangLessons,
  },
  postgresql: {
    id: 'postgresql',
    title: 'PostgreSQL 路线图',
    displayTitle: 'PostgreSQL',
    description: '主流生产级关系型数据库，索引、事务、备份与运维。',
    sourceUrl: 'https://roadmap.sh/postgresql-dba',
    mapWidth: postgresqlLayout.mapWidth,
    mapHeight: postgresqlLayout.mapHeight,
    storageKey: 'roadmap-postgresql-done',
    stages: postgresqlLayout.stages,
    tutorials: postgresqlTutorials,
    lessons: postgresqlLessons,
  },
  mongodb: {
    id: 'mongodb',
    title: 'MongoDB 路线图',
    displayTitle: 'MongoDB 数据库',
    description: '完整导入 roadmap.sh/mongodb，覆盖文档模型、查询、索引、聚合、复制和分片。',
    sourceUrl: 'https://roadmap.sh/mongodb',
    mapWidth: mongodbLayout.mapWidth,
    mapHeight: mongodbLayout.mapHeight,
    storageKey: 'roadmap-mongodb-done',
    stages: mongodbLayout.stages,
    tutorials: mongodbTutorials,
    lessons: mongodbLessons,
  },
  redis: {
    id: 'redis',
    title: 'Redis 路线图',
    displayTitle: 'Redis 缓存',
    description: '内存缓存、Session、分布式锁与消息队列。',
    sourceUrl: 'https://roadmap.sh/redis',
    mapWidth: redisLayout.mapWidth,
    mapHeight: redisLayout.mapHeight,
    storageKey: 'roadmap-redis-done',
    stages: redisLayout.stages,
    tutorials: redisTutorials,
    lessons: redisLessons,
  },
  docker: {
    id: 'docker',
    title: 'Docker 路线图',
    displayTitle: 'Docker 容器化',
    description: '完整导入 roadmap.sh/docker，覆盖容器基础、镜像、网络、存储、Compose 与生产实践。',
    sourceUrl: 'https://roadmap.sh/docker',
    mapWidth: dockerLayout.mapWidth,
    mapHeight: dockerLayout.mapHeight,
    storageKey: 'roadmap-docker-done',
    stages: dockerLayout.stages,
    tutorials: dockerTutorials,
    lessons: dockerLessons,
  },
  kubernetes: {
    id: 'kubernetes',
    title: 'Kubernetes 路线图',
    displayTitle: 'Kubernetes 云原生',
    description: '完整导入 roadmap.sh/kubernetes，覆盖集群、工作负载、网络、存储、安全和运维。',
    sourceUrl: 'https://roadmap.sh/kubernetes',
    mapWidth: kubernetesLayout.mapWidth,
    mapHeight: kubernetesLayout.mapHeight,
    storageKey: 'roadmap-kubernetes-done',
    stages: kubernetesLayout.stages,
    tutorials: kubernetesTutorials,
    lessons: kubernetesLessons,
  },
  devops: {
    id: 'devops',
    title: 'DevOps 路线图',
    displayTitle: 'DevOps',
    description: '持续集成、持续交付与运维自动化闭环。',
    sourceUrl: 'https://roadmap.sh/devops',
    mapWidth: devopsLayout.mapWidth,
    mapHeight: devopsLayout.mapHeight,
    storageKey: 'roadmap-devops-done',
    stages: devopsLayout.stages,
    tutorials: devopsTutorials,
    lessons: devopsLessons,
  },
  'system-design': {
    id: 'system-design',
    title: 'System Design 路线图',
    displayTitle: '系统设计',
    description: '高可用、扩展性、缓存、消息队列与架构模式。',
    sourceUrl: 'https://roadmap.sh/system-design',
    mapWidth: systemDesignLayout.mapWidth,
    mapHeight: systemDesignLayout.mapHeight,
    storageKey: 'roadmap-system-design-done',
    stages: systemDesignLayout.stages,
    tutorials: systemDesignTutorials,
    lessons: systemDesignLessons,
  },
} as const satisfies Record<RoadmapId, RoadmapConfig>;

export { type RoadmapId } from './types';

/** Select 下拉按学习顺序排列 */
export const roadmapOrder: RoadmapId[] = [
  'git', 'linux', 'sql', 'backend', 'api-design', 'golang',
  'postgresql', 'mongodb', 'redis', 'docker', 'kubernetes', 'devops', 'system-design',
];
