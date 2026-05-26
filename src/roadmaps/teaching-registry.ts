import { API_DESIGN_TEACHING_LESSONS } from './api-design/teaching';
import { BACKEND_TEACHING_LESSONS } from './backend/teaching';
import { DEVOPS_TEACHING_LESSONS } from './devops/teaching';
import { DOCKER_TEACHING_LESSONS } from './docker/teaching';
import { GIT_TEACHING_LESSONS } from './git/teaching';
import { GOLANG_TEACHING_LESSONS } from './golang/teaching';
import { KUBERNETES_TEACHING_LESSONS } from './kubernetes/teaching';
import { LINUX_TEACHING_LESSONS } from './linux/teaching';
import { MONGODB_TEACHING_LESSONS } from './mongodb/teaching';
import { POSTGRESQL_TEACHING_LESSONS } from './postgresql/teaching';
import { REDIS_TEACHING_LESSONS } from './redis/teaching';
import { SQL_TEACHING_LESSONS } from './sql/teaching';
import { SYSTEM_DESIGN_TEACHING_LESSONS } from './system-design/teaching';
import type { TeachingLesson } from './teaching-types';

export const TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...GIT_TEACHING_LESSONS,
  ...LINUX_TEACHING_LESSONS,
  ...SQL_TEACHING_LESSONS,
  ...API_DESIGN_TEACHING_LESSONS,
  ...BACKEND_TEACHING_LESSONS,
  ...GOLANG_TEACHING_LESSONS,
  ...POSTGRESQL_TEACHING_LESSONS,
  ...MONGODB_TEACHING_LESSONS,
  ...REDIS_TEACHING_LESSONS,
  ...DOCKER_TEACHING_LESSONS,
  ...KUBERNETES_TEACHING_LESSONS,
  ...DEVOPS_TEACHING_LESSONS,
  ...SYSTEM_DESIGN_TEACHING_LESSONS,
};

export function hasTeachingLesson(id?: string): boolean {
  return Boolean(id && id in TEACHING_LESSONS);
}

export function getTeachingLesson(id: string): TeachingLesson | undefined {
  return TEACHING_LESSONS[id];
}
