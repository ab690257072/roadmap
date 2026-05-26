import type { TeachingLesson } from '../teaching-types';
import { GOLANG_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const GOLANG_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...GOLANG_TEACHING_HANDCRAFTED,
};

export function hasGolangTeachingLesson(id: string): boolean {
  return id in GOLANG_TEACHING_LESSONS;
}

export function getGolangTeachingLesson(id: string): TeachingLesson | undefined {
  return GOLANG_TEACHING_LESSONS[id];
}
