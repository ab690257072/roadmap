import type { TeachingLesson } from '../teaching-types';
import { LINUX_TEACHING_HANDCRAFTED } from './teaching-handcrafted';

export const LINUX_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...LINUX_TEACHING_HANDCRAFTED,
};

export function hasLinuxTeachingLesson(id: string): boolean {
  return id in LINUX_TEACHING_LESSONS;
}

export function getLinuxTeachingLesson(id: string): TeachingLesson | undefined {
  return LINUX_TEACHING_LESSONS[id];
}
