# Roadmap Learn

一个用于学习技术路线图的 React 应用。当前内置 `backend`、`golang`、`docker`、`kubernetes`、`mongodb` 五条路线图，并为每个节点提供中文精讲、完整说明、练习和学习进度。

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

## 导入 Roadmap 数据

```bash
npm run import:roadmaps -- golang docker kubernetes mongodb
```

导入脚本会优先读取 `roadmap.sh` 官方 API 的节点结构，并尝试拉取 `developer-roadmap` 仓库的 content 正文。GitHub API 受限时会跳过正文，使用本地中文模板生成教程和精讲骨架。

## 目录结构

```text
src/
  App.tsx                 # 应用主界面：路线图画布、多路线切换、学习进度
  components/             # 教程抽屉、精讲、图解组件
  main.tsx                # React 入口
  styles.css              # 页面和教学图样式
  roadmaps/
    registry.ts           # roadmap 注册表
    types.ts              # 路线图共享类型
    backend/
      data.ts             # 后端路线图节点、阶段、教程数据
      lessons.ts          # 后端深度精讲数据
    golang|docker|kubernetes|mongodb/
      data.ts             # 导入后的节点、阶段、教程、精讲数据
scripts/
  import-roadmaps.mjs     # roadmap.sh 数据导入脚本
```

## 添加新的 Roadmap

1. 使用 `npm run import:roadmaps -- <roadmap-id>` 生成数据，或在 `src/roadmaps/<roadmap-id>/` 下新增数据文件。
2. 在 `src/roadmaps/registry.ts` 里注册新的 roadmap 元信息和数据。
3. 确认 `storageKey` 唯一，避免不同路线图的学习进度串线。

## 说明

当前五条路线内容来自 roadmap.sh。`backend` 保留本地化重排；其余路线保留官方节点顺序并按当前项目的学习卡片结构生成本地中文内容。

如果从前端转后端，下一批建议优先补充 `git-github`、`sql`、`postgresql-dba`、`redis`、`linux`、`shell-bash`、`devops`，再补 `api-design`、`system-design`、`nodejs`、`graphql`。
