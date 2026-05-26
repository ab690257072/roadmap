import type { TeachingLesson } from '../teaching-types';
import { BACKEND_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const BACKEND_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...BACKEND_TEACHING_HANDCRAFTED,
};

export function hasBackendTeachingLesson(id: string): boolean {
  return id in BACKEND_TEACHING_LESSONS;
}

export function getBackendTeachingLesson(id: string): TeachingLesson | undefined {
  return BACKEND_TEACHING_LESSONS[id];
}
