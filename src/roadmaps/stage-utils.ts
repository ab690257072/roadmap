import type { Stage } from './types';
import { isMapNode } from './node-filter';

const STAGE_HEIGHT = 250;
const STAGE_WIDTH = 430;
const COL_GAP = 90;
const ROW_GAP = 48;
const START_X = 90;
const Y0 = 90;

/** 按学习顺序分组，同一原始 mapY 带为一行 */
function groupRowsByPathOrder(stages: Stage[]): Stage[][] {
  const rows: Stage[][] = [];
  for (const stage of stages) {
    const last = rows[rows.length - 1];
    if (last && Math.abs(stage.mapY - last[0].mapY) <= 40) last.push(stage);
    else rows.push([stage]);
  }
  return rows;
}

function relayoutRows(stages: Stage[]): Stage[] {
  const rows = groupRowsByPathOrder(stages);
  let y = Y0;

  return rows.flatMap((row) => {
    const laid = row.map((s, i) => ({
      ...s,
      mapX: START_X + i * (STAGE_WIDTH + COL_GAP),
      mapY: y,
      mapW: STAGE_WIDTH,
      mapH: STAGE_HEIGHT,
    }));
    y += STAGE_HEIGHT + ROW_GAP;
    return laid;
  });
}

export function sanitizeStages(stages: Stage[]): Stage[] {
  return stages
    .map((stage) => {
      const nodes = stage.nodes.filter(isMapNode);
      if (!nodes.length) return null;
      return { ...stage, nodes, mapH: STAGE_HEIGHT };
    })
    .filter(Boolean) as Stage[];
}

export function prepareStages(stages: Stage[]): { stages: Stage[]; mapWidth: number; mapHeight: number } {
  const cleaned = sanitizeStages(stages);
  const laid = relayoutRows(cleaned);
  const maxRight = laid.reduce((max, s) => Math.max(max, s.mapX + s.mapW), START_X);
  const maxBottom = laid.reduce((max, s) => Math.max(max, s.mapY + s.mapH), Y0);
  return { stages: laid, mapWidth: maxRight + START_X, mapHeight: maxBottom + 90 };
}
