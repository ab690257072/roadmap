import type { DeepLesson } from './types';

export type TeachingLesson = DeepLesson & {
  heading: string;
  subheading: string;
  rawDiagram: string;
  metaphor: string;
  mistake: string;
};
