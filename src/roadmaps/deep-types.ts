/** 深度学习内容 — 实操、诊断、练习、连接 */

export type HandsOnStep = {
  title: string;
  cmd: string;
  output?: string;
  explain: string;
};

export type DiagnosisItem = {
  symptom: string;
  cause: string;
  fix: string;
};

export type ExerciseItem = {
  level: '基础' | '进阶' | '挑战';
  task: string;
  hint?: string;
  answer: string;
};

export type Section = {
  title: string;
  content: string;
};

export type DeepTutorial = {
  handsOn?: HandsOnStep[];
  diagnosis?: DiagnosisItem[];
  exercises?: ExerciseItem[];
  prereqs?: string[];
  nextSteps?: string[];
  mentalModel?: string;
  sections?: Section[];
  summary?: string;
};
