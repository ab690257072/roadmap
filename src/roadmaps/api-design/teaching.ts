import type { TeachingLesson } from '../teaching-types';
import { API_DESIGN_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const API_DESIGN_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...API_DESIGN_TEACHING_HANDCRAFTED,
};

export function hasApiDesignTeachingLesson(id: string): boolean {
  return id in API_DESIGN_TEACHING_LESSONS;
}

export function getApiDesignTeachingLesson(id: string): TeachingLesson | undefined {
  return API_DESIGN_TEACHING_LESSONS[id];
}
