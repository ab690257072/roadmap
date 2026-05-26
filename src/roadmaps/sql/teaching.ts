import type { TeachingLesson } from '../teaching-types';
import { SQL_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const SQL_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...SQL_TEACHING_HANDCRAFTED,
};

export function hasSqlTeachingLesson(id: string): boolean {
  return id in SQL_TEACHING_LESSONS;
}

export function getSqlTeachingLesson(id: string): TeachingLesson | undefined {
  return SQL_TEACHING_LESSONS[id];
}
