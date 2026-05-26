import type { BoardDiagram } from '../roadmaps/diagram-generator';

export function LessonBlackboard({
  diagram,
  boardId,
  active,
  onPick,
}: {
  diagram: BoardDiagram;
  boardId: string;
  active: number;
  onPick: (index: number) => void;
}) {
  const pick = (index: number) => () => onPick(index);
  const activeClass = (index?: number) => (index === undefined ? '' : active === index ? ' active' : '');

  return (
    <div className="foundation-board lesson-board">
      <svg viewBox="0 0 760 360" role="img" aria-label={diagram.heading}>
        <defs>
          <marker id={`lesson-arrow-${boardId}`} markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M2,2 L10,6 L2,10" className="chalk-arrow-head" />
          </marker>
          <filter id={`lesson-shadow-${boardId}`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#5b4630" floodOpacity="0.1" />
          </filter>
        </defs>

        <text x="36" y="42" className="board-heading">{diagram.heading}</text>

        {diagram.decorations?.map((item, index) => {
          if (item.kind === 'badge') {
            return (
              <g key={`dec-${index}`}>
                <circle cx={item.x} cy={item.y} r="18" className="diagram-badge" />
                <text x={item.x} y={item.y + 5} textAnchor="middle" className="diagram-badge-text">{item.text}</text>
              </g>
            );
          }
          if (item.kind === 'note') {
            return <text key={`dec-${index}`} x={item.x} y={item.y} className="chalk-label">{item.text}</text>;
          }
          if (item.kind === 'code') {
            return (
              <g key={`dec-${index}`} className="chalk-code">
                <rect x={item.x} y={item.y} width={item.w} height={item.h} rx="12" />
                {item.lines.map((line, li) => (
                  <text key={line} x={item.x + 16} y={item.y + 22 + li * 18} className="chalk-hint">{line}</text>
                ))}
              </g>
            );
          }
          return null;
        })}

        {diagram.arrows.map((arrow) => (
          <g key={arrow.d}>
            <path
              d={arrow.d}
              className={`story-arrow${activeClass(arrow.stepIndex)}`}
              markerEnd={`url(#lesson-arrow-${boardId})`}
            />
            {arrow.label && (
              <text
                x={Number(arrow.d.match(/M(\d+)/)?.[1] || 0) + 20}
                y={Number(arrow.d.match(/\s(\d+)/g)?.[1]?.trim() || 0) - 8}
                className="chalk-hint"
              >
                {arrow.label}
              </text>
            )}
          </g>
        ))}

        {diagram.boxes.map((box) => (
          <g
            key={`${box.title}-${box.x}`}
            className={`chalk-box${activeClass(box.stepIndex)}`}
            onClick={box.stepIndex === undefined ? undefined : pick(box.stepIndex)}
          >
            <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="14" filter={`url(#lesson-shadow-${boardId})`} />
            <text x={box.x + box.w / 2} y={box.y + 30} textAnchor="middle" className="chalk-title">{box.title}</text>
            {box.sub && <text x={box.x + box.w / 2} y={box.y + 52} textAnchor="middle" className="chalk-sub">{box.sub}</text>}
          </g>
        ))}
      </svg>
    </div>
  );
}
