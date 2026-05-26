import type { TeachingLesson } from '../teaching-types';
import { DEVOPS_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const DEVOPS_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...DEVOPS_TEACHING_HANDCRAFTED,
};

export function hasDevopsTeachingLesson(id: string): boolean {
  return id in DEVOPS_TEACHING_LESSONS;
}

export function getDevopsTeachingLesson(id: string): TeachingLesson | undefined {
  return DEVOPS_TEACHING_LESSONS[id];
}
