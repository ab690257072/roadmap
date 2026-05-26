import { Segmented, Tag } from 'antd';
import { useState } from 'react';
import relationDiagramRaw from '../../backend-roadmap-relation.excalidraw?raw';
import { ExcalidrawSvg } from './ExcalidrawSvg';
import { LEARNING_LAYERS, ROADMAP_ROLES } from '../roadmaps/graph-config';
import { roadmaps, type RoadmapId } from '../roadmaps/registry';

type ViewMode = 'flow' | 'relation';

function RelationGraph({ currentId, onSelect }: { currentId: RoadmapId; onSelect: (id: RoadmapId) => void }) {
  void currentId;
  void onSelect;

  return (
    <div className="roadmap-relation-wrap">
      <div className="excalidraw-embed-card">
        <ExcalidrawSvg raw={relationDiagramRaw} />
      </div>
    </div>
  );
}
function FlowGraph({ currentId, onSelect }: { currentId: RoadmapId; onSelect: (id: RoadmapId) => void }) {
  return (
    <div className="roadmap-flow">
      {LEARNING_LAYERS.map((layer, layerIndex) => (
        <div key={layer.step} className="roadmap-flow-block">
          <div className="roadmap-layer">
            <div className="roadmap-layer-side">
              <span className="roadmap-layer-step">{layer.step}</span>
              <div className="roadmap-layer-meta">
                <strong>{layer.title}</strong>
                <span>{layer.hint}</span>
              </div>
            </div>
            <div className="roadmap-layer-body">
              {layer.groups.map((group, groupIndex) => (
                <div key={`${layer.step}-${groupIndex}`} className="roadmap-node-group">
                  {group.label && <span className="roadmap-group-label">{group.label}</span>}
                  <div className={`roadmap-node-row ${group.nodes.length > 1 ? 'multi' : 'single'}`}>
                    {group.nodes.map((node, nodeIndex) => {
                      const config = roadmaps[node.id];
                      const active = node.id === currentId;
                      const isMain = node.id === 'backend';
                      return (
                        <div key={node.id} className="roadmap-node-wrap">
                          {nodeIndex > 0 && layer.step === '④' && <span className="roadmap-inline-arrow" aria-hidden>→</span>}
                          <button
                            type="button"
                            className={`roadmap-node-card ${active ? 'active' : ''} ${isMain ? 'main' : ''}`}
                            onClick={() => onSelect(node.id)}
                          >
                            <span className="roadmap-node-short">{node.short}</span>
                            <span className="roadmap-node-title">{config.displayTitle}</span>
                            <span className="roadmap-node-role">{ROADMAP_ROLES[node.id]}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {layerIndex < LEARNING_LAYERS.length - 1 && (
            <div className="roadmap-flow-arrow" aria-hidden>
              <span className="roadmap-flow-arrow-line" />
              <span className="roadmap-flow-arrow-label">接着学</span>
              <span className="roadmap-flow-arrow-line" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function RoadmapGraph({ currentId, onSelect }: { currentId: RoadmapId; onSelect: (id: RoadmapId) => void }) {
  const [mode, setMode] = useState<ViewMode>('flow');

  return (
    <div className="roadmap-graph">
      <div className="roadmap-graph-head">
        <Tag color="blue">学习路径</Tag>
        <div className="roadmap-graph-title">
          <strong>前端转后端 · 13 条路线</strong>
          <p>
            {mode === 'flow'
              ? '学习顺序图：从上到下推进，同层可并行。'
              : '关联图：用模块和连线表达路线之间的联系。'}
          </p>
        </div>
        <Segmented
          className="roadmap-view-toggle"
          value={mode}
          onChange={(v) => setMode(v as ViewMode)}
          options={[
            { label: '学习顺序', value: 'flow' },
            { label: '关联关系', value: 'relation' },
          ]}
        />
      </div>
      {mode === 'flow' ? <FlowGraph currentId={currentId} onSelect={onSelect} /> : <RelationGraph currentId={currentId} onSelect={onSelect} />}
    </div>
  );
}
