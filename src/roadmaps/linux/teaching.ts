import type { TeachingLesson } from '../teaching-types';
import { LINUX_TEACHING_HANDCRAFTED } from './teaching-handcrafted';
import { LINUX_TEACHING_GOLD } from './teaching-gold';

export const LINUX_TEACHING_LESSONS: Record<string, TeachingLesson> = {
  ...LINUX_TEACHING_HANDCRAFTED,
  ...LINUX_TEACHING_GOLD,
};

export function hasLinuxTeachingLesson(id: string): boolean {
  return id in LINUX_TEACHING_LESSONS;
}

export function getLinuxTeachingLesson(id: string): TeachingLesson | undefined {
  return LINUX_TEACHING_LESSONS[id];
}
