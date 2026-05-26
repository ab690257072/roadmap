import { exportToSvg } from '@excalidraw/excalidraw';
import { useEffect, useRef, useState } from 'react';

type ExcalidrawElement = {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  containerId?: string | null;
  boundElements?: { id: string; type: string }[] | null;
  textAlign?: string;
  verticalAlign?: string;
  [key: string]: unknown;
};

type ExcalidrawScene = {
  elements: ExcalidrawElement[];
  appState?: Record<string, unknown>;
  files?: Record<string, unknown>;
};

export function ExcalidrawSvg({ raw, label = '教学图' }: { raw: string; label?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);

    try {
      const scene = JSON.parse(raw) as ExcalidrawScene;

      exportToSvg({
        elements: scene.elements as never,
        appState: {
          ...scene.appState,
          exportBackground: true,
          viewBackgroundColor: '#ffffff',
        } as never,
        files: (scene.files || {}) as never,
        exportPadding: 24,
      })
      .then((svg: SVGSVGElement) => {
        if (cancelled || !hostRef.current) return;
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.setAttribute('class', 'excalidraw-exported-svg');
        svg.setAttribute('role', 'img');
        svg.setAttribute('aria-label', label);
        hostRef.current.replaceChildren(svg);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    } catch {
      if (!cancelled) setFailed(true);
    }

    return () => {
      cancelled = true;
    };
  }, [raw]);

  return (
    <div ref={hostRef} className="excalidraw-svg-host">
      {failed ? '图解渲染失败' : '图解加载中...'}
    </div>
  );
}
