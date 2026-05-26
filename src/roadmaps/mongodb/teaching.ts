import type { TeachingLesson } from '../teaching-types';
import { MONGODB_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const MONGODB_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...MONGODB_TEACHING_HANDCRAFTED,
};

export function hasMongodbTeachingLesson(id: string): boolean {
  return id in MONGODB_TEACHING_LESSONS;
}

export function getMongodbTeachingLesson(id: string): TeachingLesson | undefined {
  return MONGODB_TEACHING_LESSONS[id];
}
