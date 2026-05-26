import type { TeachingLesson } from '../teaching-types';
import { POSTGRESQL_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const POSTGRESQL_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...POSTGRESQL_TEACHING_HANDCRAFTED,
};

export function hasPostgresqlTeachingLesson(id: string): boolean {
  return id in POSTGRESQL_TEACHING_LESSONS;
}

export function getPostgresqlTeachingLesson(id: string): TeachingLesson | undefined {
  return POSTGRESQL_TEACHING_LESSONS[id];
}
