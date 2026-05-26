import type { RoadmapNode } from './types';

const junkLabel = /roadmap\.sh|Find the detailed|Continue learning|partnership|Beginner to Pro|Visit Beginner|Visit the|Click to|Related Roadmaps|Have a look|Share your|Join the|^https?:\/\//i;

export function isMapNode(node: Pick<RoadmapNode, 'label' | 'nodeType'>) {
  if (!node.label || node.label === 'vertical node') return false;
  if (['button', 'paragraph', 'label'].includes(node.nodeType)) return false;
  if (junkLabel.test(node.label)) return false;
  return true;
}
