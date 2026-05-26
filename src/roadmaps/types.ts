export type RoadmapNode = {
  id: string;
  label: string;
  zh: string;
  desc: string;
  level: string;
  nodeType: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Stage = {
  id: string;
  zh: string;
  en: string;
  desc: string;
  nodes: RoadmapNode[];
  index?: number;
  mapX: number;
  mapY: number;
  mapW: number;
  mapH: number;
};

export type Tutorial = {
  id: string;
  zh: string;
  en: string;
  level: string;
  nodeType: string;
  analogy: string;
  story: string;
  what: string;
  why: string;
  howSteps: string[];
  practice: string;
  pitfalls: string[];
  details: { title: string; body: string }[];
  diagram?: string;
};

export type DeepLessonStep = {
  label: string;
  title: string;
  text: string;
};

export type DeepLesson = {
  scene: string;
  core: string;
  route: DeepLessonStep[];
  confusion: string;
  experiment: string;
};

export type RoadmapId =
  | 'backend' | 'git' | 'linux' | 'sql' | 'api-design' | 'golang'
  | 'postgresql' | 'mongodb' | 'redis' | 'docker' | 'kubernetes' | 'devops' | 'system-design';

export type RoadmapConfig = {
  id: string;
  title: string;
  displayTitle: string;
  description: string;
  sourceUrl: string;
  mapWidth: number;
  mapHeight: number;
  storageKey: string;
  stages: Stage[];
  tutorials: Record<string, Tutorial>;
  lessons?: Record<string, DeepLesson>;
};
