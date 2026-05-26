import type { Stage } from './types';

type Point = { x: number; y: number };

const PAD = 14;

function midY(stage: Stage): number {
  return stage.mapY + stage.mapH / 2;
}

function segment(points: Point[]): string {
  if (points.length < 2) return '';
  const [first, ...rest] = points;
  return `M ${first.x} ${first.y}${rest.map((p) => ` L ${p.x} ${p.y}`).join('')}`;
}

/** 相邻 stage 分段连线：同行水平，换行走 U 形管道（右下 → 横廊 → 左上） */
export function buildRoutePath(stages: Stage[]): string {
  if (stages.length < 2) return '';

  const parts: string[] = [];

  for (let i = 0; i < stages.length - 1; i++) {
    const a = stages[i];
    const b = stages[i + 1];

    if (a.mapY === b.mapY) {
      const y = midY(a);
      if (b.mapX > a.mapX) {
        parts.push(segment([
          { x: a.mapX + a.mapW - PAD, y },
          { x: b.mapX + PAD, y },
        ]));
      } else {
        parts.push(segment([
          { x: a.mapX + PAD, y },
          { x: b.mapX + b.mapW - PAD, y },
        ]));
      }
      continue;
    }

    const xOut = a.mapX + a.mapW - PAD;
    const xIn = b.mapX + PAD;
    const yOut = a.mapY + a.mapH - PAD;
    const yIn = b.mapY + PAD;

    if (Math.abs(xOut - xIn) < PAD * 2) {
      parts.push(segment([
        { x: xOut, y: yOut },
        { x: xIn, y: yIn },
      ]));
    } else {
      const yCorridor = yOut + Math.max(PAD * 2, (yIn - yOut) / 2);
      parts.push(segment([
        { x: xOut, y: yOut },
        { x: xOut, y: yCorridor },
        { x: xIn, y: yCorridor },
        { x: xIn, y: yIn },
      ]));
    }
  }

  return parts.join(' ');
}
