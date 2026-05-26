import type { TeachingLesson } from '../teaching-types';
import { REDIS_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const REDIS_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...REDIS_TEACHING_HANDCRAFTED,
};

export function hasRedisTeachingLesson(id: string): boolean {
  return id in REDIS_TEACHING_LESSONS;
}

export function getRedisTeachingLesson(id: string): TeachingLesson | undefined {
  return REDIS_TEACHING_LESSONS[id];
}
