import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Button, Card, Flex, Input, Layout, Progress, Select, Space, Statistic, Tag, Typography } from 'antd';
import { TutorialDrawer } from './components/TutorialDrawer';
import { RoadmapGraph } from './components/RoadmapGraph';
import { roadmaps, roadmapOrder } from './roadmaps/registry';
import { buildRoutePath } from './roadmaps/route-path';
import type { RoadmapConfig, RoadmapId, RoadmapNode, Stage, Tutorial } from './roadmaps/types';

const { Header, Content } = Layout;
const { Text, Title } = Typography;

function useDoneState(storageKey: string) {
  const [done, setDone] = useState<Set<string>>(() => new Set(JSON.parse(localStorage.getItem(storageKey) || '[]')));

  useEffect(() => {
    setDone(new Set(JSON.parse(localStorage.getItem(storageKey) || '[]')));
  }, [storageKey]);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  };

  const reset = () => {
    localStorage.removeItem(storageKey);
    setDone(new Set());
  };

  return { done, toggle, reset };
}

function StageCard({ stage, index, done, tutorials, onOpen }: { stage: Stage; index: number; done: Set<string>; tutorials: Record<string, Tutorial>; onOpen: (id: string) => void }) {
  return (
    <Card className="stage-card" style={{ left: stage.mapX, top: stage.mapY, width: stage.mapW, height: stage.mapH }} styles={{ body: { padding: 0 } }}>
      <div className="stage-head">
        <div className="stage-index">{String(stage.index ?? index + 1).padStart(2, '0')}</div>
        <div className="stage-title">
          <Text strong>{stage.zh}</Text>
          <Text type="secondary" className="mono one-line">{stage.en}</Text>
        </div>
        <Tag color="blue">{stage.nodes.length} 个</Tag>
      </div>
      <div className="node-grid">
        {stage.nodes.map((node: RoadmapNode) => {
          const tutorial = tutorials[node.id];
          return (
            <button
              key={node.id}
              className={`node-chip ${node.nodeType} ${done.has(node.id) ? 'done' : ''}`}
              data-search={`${node.zh} ${node.label} ${tutorial?.what || ''}`.toLowerCase()}
              onClick={() => onOpen(node.id)}
              type="button"
            >
              <span className="node-zh">{tutorial?.zh || node.zh}</span>
              <span className="node-en">{tutorial?.en || node.label}</span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}

export default function App() {
  const [roadmapId, setRoadmapId] = useState<RoadmapId>('backend');
  const activeRoadmap: RoadmapConfig = roadmaps[roadmapId];
  const { stages, tutorials } = activeRoadmap;
  const { done, toggle, reset } = useDoneState(activeRoadmap.storageKey);
  const [selectedId, setSelectedId] = useState<string>();
  const [query, setQuery] = useState('');
  const [scale, setScale] = useState(0.75);
  const [isPanning, setIsPanning] = useState(false);
  const panRef = useRef({ x: 0, y: 0, left: 0, top: 0 });
  const scaleRef = useRef(scale);
  const zoomAnchorRef = useRef<{ contentX: number; contentY: number; anchorX: number; anchorY: number } | undefined>(undefined);
  const viewportRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const order = useMemo(() => stages.flatMap((stage) => stage.nodes.map((node) => node.id)), [stages]);
  const routePath = useMemo(() => buildRoutePath(stages), [stages]);
  const tutorial = selectedId ? tutorials[selectedId] : undefined;
  const lesson = selectedId ? activeRoadmap.lessons?.[selectedId] : undefined;

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  useEffect(() => {
    setSelectedId(undefined);
    setQuery('');
    requestAnimationFrame(() => focusStage(stages[0]?.id, 'auto'));
  }, [roadmapId]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const layer = layerRef.current;
    const anchor = zoomAnchorRef.current;
    if (!viewport || !layer || !anchor) return;
    const baseLeft = layer.parentElement?.offsetLeft ?? 0;
    const baseTop = layer.parentElement?.offsetTop ?? 0;

    viewport.scrollLeft = Math.max(0, baseLeft + anchor.contentX * scale - anchor.anchorX);
    viewport.scrollTop = Math.max(0, baseTop + anchor.contentY * scale - anchor.anchorY);
    zoomAnchorRef.current = undefined;
  }, [scale]);

  const centerMap = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollLeft = Math.max(0, (viewport.scrollWidth - viewport.clientWidth) / 2);
    viewport.scrollTop = Math.max(0, (viewport.scrollHeight - viewport.clientHeight) / 2);
  };

  const zoomAtPoint = (nextScale: number, clientX?: number, clientY?: number) => {
    const viewport = viewportRef.current;
    const clampedScale = Math.max(0.45, Math.min(1.2, nextScale));
    if (!viewport) {
      setScale(clampedScale);
      return;
    }

    const layer = layerRef.current;
    const rect = viewport.getBoundingClientRect();
    const layerRect = layer?.getBoundingClientRect();
    const anchorX = clientX === undefined ? viewport.clientWidth / 2 : clientX - rect.left;
    const anchorY = clientY === undefined ? viewport.clientHeight / 2 : clientY - rect.top;
    const currentScale = scaleRef.current;
    const contentX = layerRect ? (rect.left + anchorX - layerRect.left) / currentScale : (viewport.scrollLeft + anchorX) / currentScale;
    const contentY = layerRect ? (rect.top + anchorY - layerRect.top) / currentScale : (viewport.scrollTop + anchorY) / currentScale;

    zoomAnchorRef.current = { contentX, contentY, anchorX, anchorY };
    scaleRef.current = clampedScale;
    setScale(clampedScale);
  };

  const focusStage = (id?: string, behavior: ScrollBehavior = 'smooth') => {
    const viewport = viewportRef.current;
    const layer = layerRef.current;
    const stage = stages.find((item) => item.id === id);
    if (!viewport || !layer || !stage) return;
    const currentScale = scaleRef.current;
    const baseLeft = layer.parentElement?.offsetLeft ?? 0;
    const baseTop = layer.parentElement?.offsetTop ?? 0;
    viewport.scrollTo({
      left: Math.max(0, baseLeft + (stage.mapX + stage.mapW / 2) * currentScale - viewport.clientWidth / 2),
      top: Math.max(0, baseTop + (stage.mapY + stage.mapH / 2) * currentScale - viewport.clientHeight / 2),
      behavior,
    });
  };

  const fitMap = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const next = Math.max((viewport.clientWidth - 80) / activeRoadmap.mapWidth, (viewport.clientHeight - 80) / activeRoadmap.mapHeight);
    setScale(Math.max(0.45, Math.min(1.2, next)));
    requestAnimationFrame(centerMap);
  };

  const openByOffset = (offset: number) => {
    if (!selectedId) return;
    const index = order.indexOf(selectedId);
    const nextId = order[index + offset];
    if (nextId) setSelectedId(nextId);
  };

  const filteredStages = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stages;
    return stages.map((stage) => ({
      ...stage,
      nodes: stage.nodes.filter((node) => `${node.zh} ${node.label} ${tutorials[node.id]?.what || ''}`.toLowerCase().includes(q)),
    })).filter((stage) => stage.nodes.length > 0);
  }, [query, stages, tutorials]);

  return (
    <Layout className="app-shell">
      <Header className="app-header">
        <Flex justify="space-between" align="center" gap={24} wrap="wrap">
          <div>
            <Tag color="processing">Index</Tag>
            <Title level={4}>{activeRoadmap.displayTitle}</Title>
            <Text type="secondary">{activeRoadmap.description}</Text>
          </div>
          <Space size={12} wrap>
            <Statistic title="节点" value={order.length} />
            <Statistic title="站点" value={stages.length} />
            <Statistic title="已学" value={done.size} />
          </Space>
        </Flex>
      </Header>
      <Content className="app-content">
        <RoadmapGraph currentId={roadmapId} onSelect={setRoadmapId} />
        <Flex className="toolbar" gap={10} align="center" wrap="wrap">
          <Select
            value={roadmapId}
            className="roadmap-select"
            options={roadmapOrder.map((id) => ({ label: roadmaps[id].title, value: id }))}
            onChange={(id) => setRoadmapId(id)}
          />
          <Input.Search value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索：HTTP / Redis / OAuth / Docker" allowClear className="search-input" />
          <Select
            placeholder="跳转站点"
            className="jump-select"
            options={stages.map((stage, index) => ({ label: `${String(index + 1).padStart(2, '0')} · ${stage.zh}`, value: stage.id }))}
            onChange={(id) => focusStage(id)}
          />
          <Button onClick={() => zoomAtPoint(scaleRef.current - 0.08)}>缩小</Button>
          <Button onClick={() => zoomAtPoint(scaleRef.current + 0.08)}>放大</Button>
          <Button onClick={fitMap}>撑满画布</Button>
          <Button onClick={centerMap}>居中</Button>
          <Button onClick={() => focusStage(stages[0]?.id)}>起点</Button>
          <Button onClick={reset}>重置进度</Button>
          <Text type="secondary">按住 Cmd/Ctrl + 滚轮缩放，空白处拖动平移</Text>
        </Flex>
        <Card className="map-card" title="路线图视图" extra={<Space><Progress percent={Math.round((done.size / Math.max(order.length, 1)) * 100)} size="small" style={{ width: 120 }} /><Text type="secondary">{Math.round(scale * 100)}%</Text></Space>}>
          <div
            ref={viewportRef}
            className={`map-viewport ${isPanning ? 'dragging' : ''}`}
            onPointerDown={(event) => {
              if (event.button !== 0 || (event.target as HTMLElement).closest('.stage-card')) return;
              const viewport = viewportRef.current;
              if (!viewport) return;
              panRef.current = { x: event.clientX, y: event.clientY, left: viewport.scrollLeft, top: viewport.scrollTop };
              setIsPanning(true);
              viewport.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (!isPanning) return;
              const viewport = viewportRef.current;
              if (!viewport) return;
              viewport.scrollLeft = panRef.current.left - (event.clientX - panRef.current.x);
              viewport.scrollTop = panRef.current.top - (event.clientY - panRef.current.y);
            }}
            onPointerUp={() => setIsPanning(false)}
            onPointerCancel={() => setIsPanning(false)}
            onWheel={(event) => {
              if (!(event.metaKey || event.ctrlKey)) return;
              event.preventDefault();
              zoomAtPoint(scaleRef.current - event.deltaY * 0.0012, event.clientX, event.clientY);
            }}
          >
            <div
              className="map-scroll-sizer"
              style={{
                width: activeRoadmap.mapWidth * scale,
                height: activeRoadmap.mapHeight * scale,
              }}
            >
              <div
                ref={layerRef}
                className="map-layer"
                style={{
                  width: activeRoadmap.mapWidth,
                  height: activeRoadmap.mapHeight,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }}
              >
                <svg className="route-svg" viewBox={`0 0 ${activeRoadmap.mapWidth} ${activeRoadmap.mapHeight}`}>
                  <defs>
                    <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#1677ff" />
                      <stop offset="1" stopColor="#13c2c2" />
                    </linearGradient>
                  </defs>
                  <path className="route-bg" d={routePath} />
                  <path className="route-main" d={routePath} />
                  <path className="route-dash" d={routePath} />
                </svg>
                {filteredStages.map((stage) => {
                  const stageIndex = stages.findIndex((item) => item.id === stage.id);
                  return <StageCard key={stage.id} stage={stage} index={stageIndex} done={done} tutorials={tutorials} onOpen={setSelectedId} />;
                })}
              </div>
            </div>
          </div>
        </Card>
      </Content>
      <TutorialDrawer
        tutorial={tutorial}
        lesson={lesson}
        open={Boolean(tutorial)}
        onClose={() => setSelectedId(undefined)}
        done={selectedId ? done.has(selectedId) : false}
        onToggleDone={() => selectedId && toggle(selectedId)}
        onPrev={() => openByOffset(-1)}
        onNext={() => openByOffset(1)}
      />
    </Layout>
  );
}
