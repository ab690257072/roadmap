# Roadmap Learn

一个用于学习技术路线图的 React 应用。当前内置 `backend` 路线图，后续可以继续加入 frontend、DevOps、AI 等其他 roadmap。

## 本地开发

```bash
npm install
npm run dev
```

默认地址：`http://127.0.0.1:8766/`

## 构建

```bash
npm run build
```

## 目录结构

```text
src/
  App.tsx                 # 应用主界面：路线图画布、教程抽屉、学习进度
  main.tsx                # React 入口
  styles.css              # 页面和教学图样式
  roadmaps/
    registry.ts           # roadmap 注册表
    backend/
      data.ts             # 后端路线图节点、阶段、教程数据
```

## 添加新的 Roadmap

1. 在 `src/roadmaps/<roadmap-id>/` 下新增数据文件。
2. 在 `src/roadmaps/registry.ts` 里注册新的 roadmap 元信息和数据。
3. 后续可以在 UI 上增加 roadmap 切换入口。

## 说明

当前 `backend` 内容来自 `roadmap.sh/backend`，中文说明和教学图做了本地化学习改造。
