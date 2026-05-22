import { stages as backendStages, tutorials as backendTutorials } from './backend/data';

export const roadmaps = {
  backend: {
    id: 'backend',
    title: '后端开发路线图',
    displayTitle: '技术资料',
    description: '推荐顺序是蛇形路线。它是为了可读性重新编排的学习路径，内容仍保留 roadmap.sh 的节点。',
    sourceUrl: 'https://roadmap.sh/backend',
    mapWidth: 2170,
    mapHeight: 1830,
    storageKey: 'roadmap-backend-done',
    stages: backendStages,
    tutorials: backendTutorials,
  },
} as const;

export type RoadmapId = keyof typeof roadmaps;
