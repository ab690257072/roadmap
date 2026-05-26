import type { TeachingLesson } from '../teaching-types';
import { DOCKER_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const DOCKER_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...DOCKER_TEACHING_HANDCRAFTED,
};

export function hasDockerTeachingLesson(id: string): boolean {
  return id in DOCKER_TEACHING_LESSONS;
}

export function getDockerTeachingLesson(id: string): TeachingLesson | undefined {
  return DOCKER_TEACHING_LESSONS[id];
}
