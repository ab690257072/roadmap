import type { TeachingLesson } from '../teaching-types';
import { SYSTEM_DESIGN_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const SYSTEM_DESIGN_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...SYSTEM_DESIGN_TEACHING_HANDCRAFTED,
};

export function hasSystemDesignTeachingLesson(id: string): boolean {
  return id in SYSTEM_DESIGN_TEACHING_LESSONS;
}

export function getSystemDesignTeachingLesson(id: string): TeachingLesson | undefined {
  return SYSTEM_DESIGN_TEACHING_LESSONS[id];
}
