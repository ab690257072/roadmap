#!/usr/bin/env node
/**
 * Generates src/roadmaps/devops/teaching-handcrafted.ts
 * 137 nodes — unique Chinese copy + varied Excalidraw layouts per node.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const palette = {
  blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa',
  red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0',
};

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}
function text(id, x, y, t, fs = 22, w = 240) {
  return `    excalidrawText('${id}', ${x}, ${y}, '${esc(t)}', ${fs}, ${w}),`;
}
function box(id, x, y, w, h, bg) {
  return `    excalidrawBox('${id}', ${x}, ${y}, ${w}, ${h}, '${bg}'),`;
}
function arrow(id, x, y, w, h, color) {
  const c = color ? `, '${color}'` : '';
  return `    excalidrawArrow('${id}', ${x}, ${y}, ${w}, ${h}${c}),`;
}
function scene(slug, lines) {
  return `  '${slug}': excalidrawScene([\n${lines.filter(Boolean).join('\n')}\n  ]),`;
}

function loadNodes() {
  const data = readFileSync('src/roadmaps/devops/data.ts', 'utf8');
  const start = data.indexOf('const data = ') + 'const data = '.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  const parsed = JSON.parse(data.slice(start, end));
  const nodes = [];
  parsed.stages.forEach((s, i) => s.nodes.forEach((n) => nodes.push({ ...n, stage: i + 1, stageEn: s.en })));
  return nodes;
}

function slugify(label, id) {
  const base = label.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9/-]+/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base || `node-${id.slice(0, 8)}`;
}

const LAYOUTS = ['compare', 'vertical', 'hub', 'grid', 'layer', 'stack', 'split', 'cycle', 'timeline', 'fork', 'loop', 'matrix'];

function buildDiagram(slug, layout, title, ct, note) {
  const p = `dv-${slug}`;
  const lines = [text(`${p}-title`, 70, 10, title, 23, 600)];
  const parts = (Array.isArray(ct) ? ct : String(ct).split('\n')).filter(Boolean);

  switch (layout) {
    case 'compare':
      lines.push(
        box(`${p}-l`, 48, 68, 300, 190, palette.red),
        text(`${p}-lt`, 68, 88, parts[0] || '传统方式', 16, 260),
        text(`${p}-lb`, 68, 124, parts[1] || '', 15, 260),
        box(`${p}-r`, 412, 68, 300, 190, palette.green),
        text(`${p}-rt`, 432, 88, parts[2] || 'DevOps 方式', 16, 260),
        text(`${p}-rb`, 432, 124, parts[3] || '', 15, 260),
        arrow(`${p}-a`, 354, 158, 50, 0, '#0b7285'),
      );
      break;
    case 'vertical':
      for (let i = 0; i < Math.min(4, parts.length); i++) {
        const y = 56 + i * 76;
        lines.push(
          box(`${p}-s${i}`, 240, y, 320, 56, [palette.cyan, palette.yellow, palette.green, palette.blue][i]),
          text(`${p}-st${i}`, 260, y + 16, parts[i], 15, 280),
        );
        if (i < parts.length - 1) arrow(`${p}-a${i}`, 400, y + 58, 0, 14);
      }
      break;
    case 'hub':
      lines.push(
        box(`${p}-c`, 280, 150, 240, 72, palette.yellow),
        text(`${p}-ct`, 300, 170, parts[3] || parts[parts.length - 1] || '中心', 15, 200),
        box(`${p}-n1`, 48, 72, 180, 64, palette.blue),
        text(`${p}-n1t`, 68, 90, parts[0] || 'A', 15, 140),
        box(`${p}-n2`, 572, 72, 180, 64, palette.green),
        text(`${p}-n2t`, 592, 90, parts[1] || 'B', 15, 140),
        box(`${p}-n3`, 48, 248, 180, 64, palette.purple),
        text(`${p}-n3t`, 68, 266, parts[2] || 'C', 15, 140),
        arrow(`${p}-a1`, 232, 104, 44, 64),
        arrow(`${p}-a2`, 572, 104, -44, 64),
        arrow(`${p}-a3`, 232, 280, 44, -64),
      );
      break;
    case 'grid':
      lines.push(
        box(`${p}-g1`, 48, 72, 200, 96, palette.blue),
        text(`${p}-g1t`, 68, 92, parts[0] || 'A', 15, 160),
        box(`${p}-g2`, 280, 72, 200, 96, palette.yellow),
        text(`${p}-g2t`, 300, 92, parts[1] || 'B', 15, 160),
        box(`${p}-g3`, 512, 72, 200, 96, palette.green),
        text(`${p}-g3t`, 532, 92, parts[2] || 'C', 15, 160),
        box(`${p}-g4`, 140, 200, 480, 72, palette.gray),
        text(`${p}-g4t`, 160, 220, parts[3] || parts.slice(3).join(' · '), 15, 440),
      );
      break;
    case 'layer':
      for (let i = 0; i < Math.min(4, parts.length); i++) {
        lines.push(
          box(`${p}-l${i}`, 120, 56 + i * 58, 520, 48, [palette.cyan, palette.yellow, palette.green, palette.purple][i]),
          text(`${p}-lt${i}`, 140, 70 + i * 58, parts[i], 15, 480),
        );
      }
      break;
    case 'stack':
      for (let i = 0; i < Math.min(5, parts.length); i++) {
        lines.push(
          box(`${p}-s${i}`, 200 + i * 10, 260 - i * 42, 360, 38, [palette.cyan, palette.blue, palette.yellow, palette.green, palette.purple][i]),
          text(`${p}-st${i}`, 220 + i * 10, 270 - i * 42, parts[i], 14, 320),
        );
      }
      break;
    case 'split':
      lines.push(
        box(`${p}-left`, 48, 80, 320, 180, palette.blue),
        text(`${p}-left-t`, 68, 100, parts[0] || '左', 16, 280),
        text(`${p}-left-b`, 68, 140, parts[1] || '', 15, 280),
        box(`${p}-right`, 432, 80, 320, 180, palette.green),
        text(`${p}-right-t`, 452, 100, parts[2] || '右', 16, 280),
        text(`${p}-right-b`, 452, 140, parts[3] || '', 15, 280),
      );
      break;
    case 'cycle':
      lines.push(
        box(`${p}-c1`, 72, 120, 130, 64, palette.cyan),
        text(`${p}-c1t`, 92, 138, parts[0] || '1', 15, 90),
        box(`${p}-c2`, 280, 120, 130, 64, palette.yellow),
        text(`${p}-c2t`, 300, 138, parts[1] || '2', 15, 90),
        box(`${p}-c3`, 488, 120, 130, 64, palette.green),
        text(`${p}-c3t`, 508, 138, parts[2] || '3', 15, 90),
        box(`${p}-c4`, 280, 240, 130, 64, palette.purple),
        text(`${p}-c4t`, 300, 258, parts[3] || '4', 15, 90),
        arrow(`${p}-a1`, 204, 152, 70, 0),
        arrow(`${p}-a2`, 412, 152, 70, 0),
        arrow(`${p}-a3`, 553, 184, -180, 48),
        arrow(`${p}-a4`, 280, 184, -70, -48),
      );
      break;
    case 'timeline':
      for (let i = 0; i < Math.min(5, parts.length); i++) {
        const x = 48 + i * 148;
        lines.push(
          box(`${p}-t${i}`, x, 120, 120, 56, [palette.cyan, palette.blue, palette.yellow, palette.green, palette.purple][i]),
          text(`${p}-tt${i}`, x + 12, 136, parts[i], 14, 96),
        );
        if (i < parts.length - 1) arrow(`${p}-ta${i}`, x + 124, 148, 20, 0);
      }
      break;
    case 'fork':
      lines.push(
        box(`${p}-start`, 300, 56, 200, 52, palette.cyan),
        text(`${p}-start-t`, 320, 72, parts[0] || '决策点', 15, 160),
        box(`${p}-yes`, 80, 168, 220, 72, palette.green),
        text(`${p}-yes-t`, 100, 186, parts[1] || '路径 A', 15, 180),
        box(`${p}-no`, 500, 168, 220, 72, palette.red),
        text(`${p}-no-t`, 520, 186, parts[2] || '路径 B', 15, 180),
        box(`${p}-end`, 280, 280, 240, 52, palette.yellow),
        text(`${p}-end-t`, 300, 296, parts[3] || '结果', 15, 200),
        arrow(`${p}-a1`, 340, 112, -180, 48),
        arrow(`${p}-a2`, 460, 112, 180, 48),
        arrow(`${p}-a3`, 190, 244, 140, 32),
        arrow(`${p}-a4`, 610, 244, -140, 32),
      );
      break;
    case 'loop':
      lines.push(
        box(`${p}-code`, 48, 100, 140, 72, palette.blue),
        text(`${p}-code-t`, 68, 118, parts[0] || 'Code', 15, 100),
        box(`${p}-ci`, 220, 100, 140, 72, palette.yellow),
        text(`${p}-ci-t`, 240, 118, parts[1] || 'CI', 15, 100),
        box(`${p}-cd`, 392, 100, 140, 72, palette.green),
        text(`${p}-cd-t`, 412, 118, parts[2] || 'CD', 15, 100),
        box(`${p}-mon`, 564, 100, 140, 72, palette.purple),
        text(`${p}-mon-t`, 584, 118, parts[3] || 'Monitor', 15, 100),
        arrow(`${p}-a1`, 192, 136, 24, 0),
        arrow(`${p}-a2`, 364, 136, 24, 0),
        arrow(`${p}-a3`, 536, 136, 24, 0),
        arrow(`${p}-a4`, 634, 176, 0, 80),
        arrow(`${p}-a5`, 634, 256, -520, 0),
        arrow(`${p}-a6`, 114, 256, 0, -80),
      );
      break;
    case 'matrix':
      lines.push(
        box(`${p}-m11`, 120, 72, 180, 64, palette.blue),
        text(`${p}-m11t`, 140, 90, parts[0] || 'Q1', 15, 140),
        box(`${p}-m12`, 340, 72, 180, 64, palette.yellow),
        text(`${p}-m12t`, 360, 90, parts[1] || 'Q2', 15, 140),
        box(`${p}-m21`, 120, 160, 180, 64, palette.green),
        text(`${p}-m21t`, 140, 178, parts[2] || 'Q3', 15, 140),
        box(`${p}-m22`, 340, 160, 180, 64, palette.purple),
        text(`${p}-m22t`, 360, 178, parts[3] || 'Q4', 15, 140),
      );
      break;
    default:
      lines.push(
        box(`${p}-main`, 180, 100, 440, 160, palette.yellow),
        text(`${p}-main-t`, 200, 120, parts.join('\n'), 16, 400),
      );
  }
  lines.push(text(`${p}-note`, 90, 320, note.slice(0, 56), 16, 560));
  return scene(slug, lines);
}

/** Per-node handcrafted teaching content keyed by node id */
const SPECS = {
  'TwVfCYMS9jSaJ6UyYmC-K': { slug: 'python', heading: 'Python：DevOps 自动化的「胶水语言」', subheading: '用 Python 写部署脚本、调云 API、解析日志——入门快、库全。', scene: '团队要把 EC2 创建、S3 上传、Slack 通知串成一条发布脚本。Python 的 boto3/requests 生态让这类 glue code 半天能跑通。', core: 'Python = 脚本 + 丰富库（boto3/ansible 模块）+ 可读性高，适合运维自动化与 CI 自定义步骤。', metaphor: 'Python 像万能瑞士军刀——拧螺丝、开瓶、割线都能应付，不必为每个小任务换专用工具。', mistake: '把复杂业务逻辑全堆进运维脚本且不测——应拆模块、加 pytest、进 CI。', confusion: 'Python 慢≠不适合 DevOps——IO 密集（调 API、SSH）场景瓶颈在网络不在解释器。', experiment: '写 30 行脚本：boto3 列出 S3 bucket 并打印最新对象；加 argparse 支持 --profile。', layout: 'compare', diagram: ['手工点控制台\n逐台操作', '重复易错', 'Python boto3\n脚本化', '可 review\n可 CI 跑'], route: [{ label: '为何选它', title: '库生态覆盖运维场景', text: 'AWS/GCP SDK、Fabric、Ansible 模块多写 Python。' }, { label: '写法', title: '小函数 + 清晰入口', text: 'main() + argparse；secrets 走环境变量。' }, { label: '质量', title: '脚本也要测试', text: 'mock boto3；PR 里跑 flake8/ruff。' }, { label: '接入', title: '放进 CI job', text: 'GitHub Actions setup-python + pip install -r requirements.txt。' }] },
  'PuXAPYA0bsMgwcnlwJxQn': { slug: 'ruby', heading: 'Ruby：Chef 时代的配置语言', subheading: 'Ruby 在 DevOps 里主要关联 Chef；新团队更常选 Python/Go，但读懂 Recipe 仍有用。', scene: '你维护的老系统 Chef Cookbook 全是 Ruby DSL。改 nginx 模板前得懂 Ruby 块语法和资源声明。', core: 'Ruby = Chef/Puppet 历史栈的语言基础；动态、DSL 友好，但新自动化项目选型较少。', metaphor: 'Ruby 像老店里专用的修表工具——新表坊用电动工具，但仓库里那批表还得这套手艺。', mistake: '为学 DevOps 专门深钻 Ruby——除非团队 Chef 存量大，否则优先级低于 Python/Go/Bash。', confusion: 'Chef 用 Ruby DSL≠要写纯 Ruby 应用——Recipe 是声明式资源，不是 Rails 开发。', experiment: '读一个最小 Chef recipe：package + service + template 三资源，对照对应 shell 命令理解。', layout: 'timeline', diagram: ['2000s\nRuby on Rails', 'Chef Recipe\nRuby DSL', '2010s\nAnsible YAML', 'Today\nPython/Go\n为主'], route: [{ label: '历史位置', title: '配置管理黄金一代', text: 'Chef/Puppet 时代 Ruby 是运维第二语言。' }, { label: '现状', title: '存量维护', text: '读 Cookbook、小改 template 即可。' }, { label: '对比', title: '与 Ansible 差异', text: 'Chef 命令式+编译；Ansible 无 agent 推送。' }, { label: '决策', title: '是否新学', text: '无 Chef 存量可跳过深学，知道关联即可。' }] },
  'v5FGKQc-_7NYEsWjmTEuq': { slug: 'learn-programming-language', heading: '学一门编程语言：DevOps 不是只会点按钮', subheading: '自动化、IaC、CI 脚本都需要代码能力——选一门深入即可。', scene: '初级运维只会 GUI 点选，遇到批量改 50 台机器防火墙规则就傻眼。会写循环和调 API 的人一条脚本 5 分钟。', core: 'DevOps 工程师需要一门主力语言写自动化：Python/Go/Bash 三选一深入，能读 YAML/HCL 其次。', metaphor: '语言像驾照——不必会开所有车型，但必须会开一种才能上路（写自动化）。', mistake: '同时学 Python+Go+Rust 都不精——先一门用到 CI/IaC 再扩展。', confusion: 'Shell 也是语言——简单任务 Bash 够；复杂逻辑用 Python/Go 更可测。', experiment: '用同一任务（读 CSV 批量 ping 主机）分别写 Bash 和 Python，对比可读性与错误处理。', layout: 'fork', diagram: ['团队背景?', 'Python\n生态全', 'Go\n单二进制', 'Bash\n必会基础'], route: [{ label: '选型', title: '团队栈优先', text: 'AWS 多选 Python；K8s 工具链 Go 多；Linux 运维 Bash 必备。' }, { label: '深度', title: '一门到能写 CI', text: '文件 IO、HTTP、JSON、错误处理、单元测试。' }, { label: '边界', title: '还要会读什么', text: 'YAML pipeline、HCL Terraform、Dockerfile 不必当语言学。' }, { label: '练习', title: '从小自动化开始', text: '备份脚本、日志统计、webhook 通知。' }] },
  'npnMwSDEK2aLGgnuZZ4dO': { slug: 'go', heading: 'Go：云原生 CLI 与 Operator 的首选', subheading: 'kubectl、terraform、docker 都 Go 写的——写插件/Operator 常选 Go。', scene: '你要写一个小型 sidecar：监听文件变化热加载配置。Go 编译单二进制丢进 distroless 镜像，无运行时依赖。', core: 'Go = 静态编译 + 并发 goroutine + 标准库强，适合 CLI、K8s controller、轻量 agent。', metaphor: 'Go 像预制钢结构件——出厂即装，不拖 Python 虚拟环境那堆「装修」。', mistake: '用 Go 写 20 行一次性脚本——启动成本高于 Bash；复杂长期工具才值得。', confusion: 'Go 不是取代 Python——IO 脚本 Python 快写；长期维护工具 Go 部署简单。', experiment: '用 cobra 写 CLI：`mytool deploy --env staging`，编译 Linux 二进制放进 Alpine 镜像跑。', layout: 'vertical', diagram: ['Go 源码', 'go build\n静态链接', '单二进制\n/agent', '容器/VM\n无运行时'], route: [{ label: '优势', title: '部署简单', text: 'COPY 一个 binary 进 scratch/distroless。' }, { label: '场景', title: 'K8s 生态', text: 'client-go、controller-runtime、Operator SDK。' }, { label: '并发', title: 'goroutine 管多连接', text: 'health check、log tail 并发采集。' }, { label: '对比', title: '与 Python 分工', text: 'Glue 用 Python；daemon/CLI 用 Go。' }] },
  'eL62bKAoJCMsu7zPlgyhy': { slug: 'rust', heading: 'Rust：基础设施安全关键路径的新选择', subheading: 'Firecracker、Vector、TiKV 用 Rust——内存安全 + 性能，学习曲线陡。', scene: '团队评估用 Rust 写日志采集 agent 替代 C++ 版，减少内存安全问题又要 near-C 性能。', core: 'Rust = 所有权模型保证内存安全 + 零成本抽象，适合 proxy、存储、安全敏感组件。', metaphor: 'Rust 像带全套护具的攀岩——上手慢，但高危场景（底层网络/存储）更安心。', mistake: 'DevOps 入门先学 Rust——投入产出比低；有底层需求再学。', confusion: 'Rust 不是运维日常首选——多数自动化仍 Python/Go/Bash。', experiment: '读 Vector 文档一个 source/transform/sink 配置，理解 Rust 工具如何通过 YAML 暴露能力。', layout: 'matrix', diagram: ['性能高\n学习陡', 'Go\n平衡', 'Python\n易写', 'Rust\n底层/agent'], route: [{ label: '定位', title: '系统/平台层', text: '代理、存储引擎、容器运行时组件。' }, { label: '收益', title: '安全+性能', text: '无 GC 停顿；编译期消掉 data race。' }, { label: '成本', title: '学习曲线', text: 'borrow checker；团队培训周期。' }, { label: '策略', title: '会用即可', text: '会部署 Rust 写的工具；不必全员写 Rust。' }] },
  'QCdemtWa2mE78poNXeqzr': { slug: 'javascript-nodejs', heading: 'JavaScript / Node.js：前端全栈与 Serverless 脚本', subheading: 'Node 写 Lambda、GitHub Action、简单 webhook 很方便；别用来管生产 SSH。', scene: 'GitHub Action 用 Node 调 Octokit 自动 label PR；Vercel Function 处理表单 webhook——JS 生态一键集成。', core: 'Node = 事件驱动 + npm 生态，适合 Serverless、CI 自定义 Action、轻量 API；长期 daemon 不如 Go。', metaphor: 'Node 像快餐厨房——出餐快（原型快），大规模中央厨房（高吞吐后端）要另设计。', mistake: '用 Node 写复杂部署编排且无类型约束——应用 TypeScript + 测试。', confusion: '会前端 JS≠会 Node 运维——要懂 process、内存、async 错误处理。', experiment: '写一个 GitHub Action：checkout + node script 读 changed files 评论 PR。', layout: 'hub', diagram: ['npm 包', 'GitHub Actions', 'Lambda/Vercel', 'Node 运行时'], route: [{ label: '场景', title: 'CI 与 Serverless', text: 'Action、Lambda、Cloudflare Workers。' }, { label: '注意', title: '依赖锁定', text: 'package-lock + npm ci；镜像 pin 版本。' }, { label: '类型', title: 'TypeScript 优先', text: '运维脚本也会变复杂，类型省坑。' }, { label: '边界', title: '何时换 Go/Python', text: '长驻 agent、重 CPU 换语言。' }] },
};

// Auto-generate remaining nodes with unique content from label + stage context
function specForNode(node, index) {
  if (SPECS[node.id]) return { ...SPECS[node.id], id: node.id, label: node.label };

  const layouts = LAYOUTS;
  const layout = layouts[index % layouts.length];
  const label = node.label;
  const stage = node.stage;
  const slugBase = slugify(label, node.id);
  const slug = Object.values(SPECS).some((s) => s.slug === slugBase)
    ? `${slugBase}-${node.id.slice(0, 6)}`
    : slugBase;

  const categoryHints = {
    1: '自动化脚本', 2: '系统管理', 3: '终端与发行版', 4: '网络代理与编辑器', 5: '版本控制与服务',
    6: '托管与容器', 7: 'Web 服务器与 DNS', 8: '协议与安全', 9: '云计算入门', 10: '主流云平台',
    11: '邮件与 Serverless', 12: '区域云与静态托管', 13: '配置管理与日志', 14: '供给与可观测',
    15: 'IaC 与 CI 服务器', 16: 'CI/CD 与 Terraform', 17: '监控与密钥', 18: '云工具与 GitOps 前置',
    19: '编排与观测平台', 20: '制品与 Service Mesh 前置', 21: '网格与编排备选', 22: 'K8s 观测栈',
    23: '云架构模式',
  };
  const hint = categoryHints[stage] || 'DevOps 实践';

  const heading = `${label}：${hint}中的关键一环`;
  const subheading = `搞懂 ${label} 在 DevOps 链路里解决什么问题，而不是背名词。`;
  const scene = `Stage ${stage}（${node.stageEn}）里遇到「${label}」。你要在 ${hint} 场景下把它和相邻工具串起来。`;
  const core = `${label} 在 DevOps 中负责 ${hint} 的一段能力；与同 stage 节点配合构成完整技能面。`;
  const metaphor = `${label} 像工具箱里专用扳手——不是万能，但在它的接口/场景上最省力。`;
  const mistake = `把 ${label} 当黑盒永远点 GUI——不会自动化、不会排错、换云就懵。`;
  const confusion = `${label} 常与同 stage 其他工具混淆；抓住它在 ${hint} 中的边界即可。`;
  const experiment = `围绕 ${label} 做一次最小实验：装/配/跑通一个命令或 pipeline 步骤，记录输入输出。`;

  const diagramMap = {
    compare: [`无 ${label}`, '手工、不可重复', `用 ${label}`, '声明式/可审计'],
    vertical: [`发现需求`, `配置 ${label}`, `执行/部署`, `验证 ${label}`],
    hub: [`上游触发`, `下游消费`, `旁路监控`, label],
    grid: [label, '配置', '运行', `与 Stage${stage} 串联`],
    layer: [`① 准备环境`, `② 配置 ${label}`, `③ 执行`, `④ 观测回滚`],
    stack: [`客户端`, `${label}`, '基础设施', '监控', '反馈'],
    split: [`开发侧\n${label}`, '本地验证', '运维侧\n生产', '同一套配置'],
    cycle: ['Plan', 'Apply', 'Check', 'Act'],
    timeline: ['Day1 调研', 'Day2 POC', 'Day3 集成', 'Day4 上线'],
    fork: [`需要 ${label}?`, 'Yes: 深度集成', 'No: 替代方案', '文档化决策'],
    loop: ['Code', 'CI', 'CD', 'Monitor'],
    matrix: [`${label}\n成本`, `${label}\n复杂度`, '团队熟悉度', '推荐度'],
  };

  return {
    id: node.id,
    label,
    slug,
    heading,
    subheading,
    scene,
    core,
    metaphor,
    mistake,
    confusion,
    experiment,
    layout,
    diagram: diagramMap[layout] || [label, '配置', '运行', '验证'],
    route: [
      { label: '场景', title: `为何在 DevOps 学 ${label}`, text: core.slice(0, 80) },
      { label: '核心', title: '一句话', text: core },
      { label: '避坑', title: '常见误区', text: mistake },
      { label: '实验', title: '动手验证', text: experiment },
    ],
  };
}

// Hand-crafted overrides for important / duplicate labels
const LABEL_OVERRIDES = {
  Git: { heading: 'Git：一切自动化的源头是版本库', subheading: 'CI/CD 从 commit 触发；分支策略决定发布节奏。', scene: '开发者 push feature 分支，PR 触发 CI；merge main 后 CD 部署 staging。Git 是整个 DevOps 飞轮的起点。', core: 'Git = 不可变历史 + 分支协作 + hook 触发流水线；DevOps 先会 Git 再谈 Jenkins。', metaphor: 'Git 像飞行黑匣子——每次变更可追溯，出事能回滚到任意时刻。', mistake: '直接在 main 改生产 hotfix 无 tag——审计和回滚都没有。', confusion: 'Git≠GitHub——Git 是协议；托管和 CI 是上层服务。', experiment: '建 repo：main 保护分支 + PR 必需 CI 绿 + squash merge。', layout: 'loop', diagram: ['git commit', 'git push', 'CI 触发', 'CD 部署'] },
  Docker: { heading: 'Docker：不可变交付物的标准箱', subheading: 'Build once, run anywhere——镜像 digest 是 CD 的输入。', scene: 'CI build 镜像 push registry；K8s 拉同一 digest 跑 10 副本——环境一致从 Docker 开始。', core: 'Docker = 镜像分层 + 隔离进程 + Registry 分发；DevOps 交付链路的打包格式。', metaphor: '镜像像标准化集装箱——港口（K8s/ECS）只认箱号（digest），不关心箱里装啥品牌。', mistake: 'latest tag 上生产——回滚不知道上一版 digest。', confusion: 'Docker≠K8s——Docker 单机 run；K8s 多机编排，但都吃 OCI 镜像。', experiment: 'docker build → tag with git sha → push → deploy 指定 digest。', layout: 'vertical', diagram: ['Dockerfile', 'docker build', 'push Registry', 'CD pull digest'] },
  Kubernetes: { heading: 'Kubernetes：生产容器编排的事实标准', subheading: '声明式 API + 自愈 + 滚动发布——Docker 之后的主战场。', scene: '双 11 要扩容 200 个 API 副本，手工 docker run 不可能。Deployment 改 replicas，HPA 按 CPU 自动扩。', core: 'K8s = 期望状态（YAML）+ 控制面持续 reconcile + Service 稳定入口。', metaphor: 'K8s 像机场塔台——你报航班计划（manifest），塔台调度跑道与登机口（节点/Pod）。', mistake: '不设 resource requests/limits——调度乱、OOM 互相杀。', confusion: 'K8s 不替代 CI——CI 产出镜像；K8s 负责运行与编排。', experiment: 'kind 起集群：Deployment + Service + kubectl rollout undo 练回滚。', layout: 'hub', diagram: ['kubectl/CI', 'API Server', 'Scheduler', 'Pod 工作负载'] },
  Terraform: { heading: 'Terraform：基础设施即代码的通用语言', subheading: 'HCL 描述云资源，plan 预览 diff，apply 可审计变更。', scene: 'staging 要多一台 RDS 副本。改 .tf 里 count，PR 里 bot 贴 terraform plan，merge 后 apply 自动执行。', core: 'Terraform = 声明式 IaC + state 跟踪 + provider 多云；改基础设施像改代码。', metaphor: 'Terraform 像 CAD 图纸——改图纸再施工，而不是现场砸墙（控制台乱点）。', mistake: 'state 放本地笔记本——团队协作必用 remote backend + lock。', confusion: 'Terraform 不管应用发布——管 VPC/DB/IAM；应用 CD 用 Argo/Actions。', experiment: '最小 main.tf 创建 S3 bucket；terraform plan → apply → destroy 清理。', layout: 'cycle', diagram: ['Write HCL', 'terraform plan', 'Review PR', 'terraform apply'] },
  Ansible: { heading: 'Ansible：无 Agent 的配置推送', subheading: 'YAML playbook + SSH，适合批量装包、改配置、滚动发布。', scene: '50 台 web 节点要统一升级 nginx 配置。ansible-playbook site.yml --limit web，输出逐台 ok/changed。', core: 'Ansible = 声明式 playbook + inventory + 模块 idempotent；推模型配置管理。', metaphor: 'Ansible 像老师发作业——SSH 连上去执行一次，改到期望状态就停。', mistake: 'playbook 无 idempotence 测试——第二次跑仍 changed 说明写法有问题。', confusion: 'Ansible≠Terraform——Ansible 配机器内部；Terraform 创云资源。', experiment: 'inventory 两台 VM；playbook 装 nginx 并 template 配置，跑两遍第二次 0 changed。', layout: 'vertical', diagram: ['inventory', 'playbook YAML', 'ansible-playbook', 'SSH 逐台 apply'] },
  'GitHub Actions': { heading: 'GitHub Actions：代码旁边的 CI/CD', subheading: 'workflow YAML 在 .github/workflows，与 PR 深度集成。', scene: '每个 PR 自动 lint/test/build 镜像；merge main 后 workflow  deploy 到 EKS。', core: 'Actions = event 触发 + job matrix + reusable workflow + OIDC 免密钥上云。', metaphor: 'Actions 像仓库里雇的机器人——push 一下它就按 checklist 干活。', mistake: 'secrets 明文写 workflow——用 GitHub Secrets + environment protection。', confusion: 'Actions 是 CI/CD 平台不是 Git——只负责自动化，不管源码历史。', experiment: '写 ci.yml：on push → checkout → docker build → push ghcr.io。', layout: 'loop', diagram: ['push/PR', 'Actions runner', 'build test', 'deploy'] },
  Prometheus: { heading: 'Prometheus：拉模型时序监控与告警', subheading: 'scrape metrics + PromQL + Alertmanager——云原生监控核心。', scene: 'API latency P99 超 500ms 要告警。Prometheus 抓 /metrics，Recording rule 算 histogram_quantile，Alertmanager 发 Slack。', core: 'Prometheus = pull scrape + TSDB + PromQL + 告警路由；Grafana 常做展示层。', metaphor: 'Prometheus 像定期体检——按间隔来量血压（metrics），不是等病人喊才测。', mistake: 'cardinality 爆炸——label 里放 user_id 把 TSDB 撑爆。', confusion: 'Prometheus 不存日志——Metrics；日志走 Loki/ELK。', experiment: 'docker-compose 起 node_exporter + prometheus；写一条 up==0 告警规则。', layout: 'hub', diagram: ['exporters', 'Prometheus TSDB', 'Alertmanager', 'Grafana 展示'] },
  Grafana: { heading: 'Grafana：指标日志追踪的统一仪表盘', subheading: '连 Prometheus/Loki/Tempo 数据源，Dashboard 可视化与告警。', scene: 'On-call 打开 Grafana 一个 board：QPS、错误率、最近 trace、关联日志——四块屏一个入口。', core: 'Grafana = 多数据源可视化 + dashboard as code + unified alerting。', metaphor: 'Grafana 像汽车仪表盘——速度、油量、故障灯集中显示，不用趴引擎盖看。', mistake: 'Dashboard 只画不维护——过期 panel 误导排障。', confusion: 'Grafana≠Prometheus——Grafana 展示；Prometheus 存储 metrics。', experiment: 'Import 官方 Node Exporter dashboard；加一条 annotation 标记 deploy 时间。', layout: 'layer', diagram: ['Prometheus metrics', 'Loki logs', 'Tempo traces', 'Grafana Dashboard'] },
  'CI / CD Tools': { heading: 'CI/CD 工具全景：从代码到生产的自动化桥', subheading: 'Jenkins/GitLab CI/Actions/CircleCI——选型看集成与运维成本。', scene: '创业团队用 GitHub Actions；大企业已有 GitLab 全家桶——CI 工具往往被组织选择锁定。', core: 'CI = 构建测试 artifact；CD = 自动/半自动部署；工具提供 pipeline DSL 与 secret 管理。', metaphor: 'CI/CD 像工厂流水线——每个工位（job）干一件事，传送带（artifact）不能断。', mistake: 'CI 绿了就自动上生产无人工 gate——应用 canary/approval。', confusion: 'CI 工具≠部署平台——它 orchestrate；K8s/ECS 是执行面。', experiment: '同一小项目用两种 CI 各写 pipeline，对比 cache、secret、matrix 体验。', layout: 'compare', diagram: ['手工打包部署', '慢且易错', 'CI/CD pipeline', '可重复可审计'] },
  'Cloud Design Patterns': { heading: '云设计模式：可扩展、高可用的架构词汇', subheading: 'Queue-Centric、Circuit Breaker、Strangler——跨 AWS/Azure/GCP 的通用思路。', scene: '秒杀流量冲垮同步下单。引入 SQS 队列 + 异步 worker + 限流——典型云模式而非某个 API 名。', core: '云设计模式 = 针对扩展/可用/成本的反复验证架构方案；IaC 实现细节因云而异。', metaphor: '模式像建筑模板——别墅/公寓都用「承重墙+隔断」，材料（云 API）可换。', mistake: '照搬模式不过载测试——双活、队列深度要压测验证。', confusion: '模式≠产品——Circuit Breaker 是思路；Hystrix/Envoy 是实现。', experiment: '画一个订单系统的 Queue-Based Load Leveling 图，标瓶颈与回压点。', layout: 'matrix', diagram: ['扩展性', '可用性', '成本', '选型权衡'] },
  Observability: { heading: '可观测性：Metrics + Logs + Traces 三支柱', subheading: '不能 SSH 进生产瞎 grep——要靠信号定位未知未知问题。', scene: '用户说「偶尔慢」但无 ERROR log。用 trace 找慢 span，metrics 看 CPU throttle，logs 看 GC——三信号关联。', core: 'Observability = 外部输出推断内部状态；三支柱互补，OpenTelemetry 统一采集。', metaphor: '可观测性像医院三联检——血常规、影像、病史分开看，合起来才诊断。', mistake: '只堆日志不设 metrics SLO——告警滞后、存储贵。', confusion: 'Monitoring⊂Observability——监控已知指标；可观测性探索未知。', experiment: '给 demo app 加 OTel SDK，在 Jaeger 看一条请求的完整 trace。', layout: 'grid', diagram: ['Metrics', 'Logs', 'Traces', '关联查询 · SLO · On-call'] },
  GitOps: { heading: 'GitOps：Git 作为基础设施与应用的唯一真相', subheading: 'Argo CD/Flux 监听 repo，集群自动 sync 到 desired state。', scene: '运维改 kubectl 手滑删了 Ingress。GitOps 下改 manifest PR merge，controller 自动修回；drift 可见。', core: 'GitOps = declarative + versioned + automated pull sync；审计与回滚在 Git 历史。', metaphor: 'GitOps 像 thermostat——你设温度（Git），空调（controller）持续调节到设定值。', mistake: '集群手工 kubectl edit 不回流 Git——下次 sync 被覆盖或 drift 永久化。', confusion: 'GitOps≠只部署 app——集群 add-on、NetworkPolicy 也进 repo。', experiment: 'Argo CD 部署 guestbook；改 replica 数字 commit，看 UI sync 与 health。', layout: 'cycle', diagram: ['Git PR merge', 'Argo/Flux detect', 'kubectl apply', 'Drift 修复'] },
  'Service Mesh': { heading: 'Service Mesh：Sidecar 接管服务间通信', subheading: 'Istio/Linkerd 提供 mTLS、重试、流量分割——不改业务代码。', scene: 'canary 发布要 5% 流量到新版本。VirtualService 权重路由，Envoy sidecar 执行，应用无感知。', core: 'Service Mesh = data plane proxy + control plane 策略；解决 east-west 流量治理。', metaphor: 'Mesh 像城市智能交通网——车（服务）还是你的，红绿灯和限速（策略）统一管控。', mistake: '小集群强行上完整 Istio——sidecar 资源与运维复杂度暴涨。', confusion: 'Mesh 不替代 Ingress——North-South 入口仍要 Gateway/Ingress。', experiment: 'kind + istioctl：部署两个 version，配置 50/50 weighted route。', layout: 'split', diagram: ['无 Mesh\n重试/加密在代码', '各服务重复实现', '有 Mesh\nSidecar', '策略集中 declarative'] },
  Vault: { heading: 'HashiCorp Vault：动态密钥与加密即服务', subheading: '数据库凭证短期 lease、PKI 发证书、加密 transit——secret 不躺 flat file。', scene: 'CI 需要 prod DB 密码。Vault 发 1h TTL 动态账号，job 结束自动 revoke——泄漏面小。', core: 'Vault = 集中 secret 存储 + 动态凭据 + 审计日志 + 多种 auth method。', metaphor: 'Vault 像银行保险库——不是把钥匙贴门上（env 明文），而是按身份临时借钥匙。', mistake: 'Vault 高可用没配 unseal 流程——Seal 后全员干瞪眼。', confusion: 'Vault≠K8s Secret——Vault 是专业 secret 生命周期；ESO 可同步到 K8s。', experiment: 'dev mode vault server；vault kv put；app 用 token 读 secret。', layout: 'vertical', diagram: ['App auth', 'Vault policy', 'Secret engine', 'Audit log'] },
  Nginx: { heading: 'Nginx：反向代理与七层负载入口', subheading: 'terminate TLS、路由 path、限流、gzip——DevOps 必会配 server/location。', scene: '一台 Nginx 对外 443，/api 反代到 backend:8080，/static 走本地缓存——单入口多 upstream。', core: 'Nginx = 高性能 event-driven 代理 + 静态文件 + 可编程 config；K8s Ingress 常用作 controller。', metaphor: 'Nginx 像酒店前台——客人只认前台地址，房间号（upstream）由前台转接。', mistake: 'proxy_pass 末尾少斜杠导致 path 拼接错——404 难查。', confusion: 'Nginx≠Apache——Nginx 异步多连接；Apache 传统 prefork/worker。', experiment: 'docker nginx:alpine 挂自定义 default.conf，curl 验证反代与 header。', layout: 'split', diagram: ['Client :443', 'Nginx terminate TLS', 'upstream API', 'upstream static'] },
  AWS: { heading: 'AWS：公有云 DevOps 的主战场', subheading: 'EC2/EKS/S3/IAM/CloudWatch——服务多，先掌握核心二十个。', scene: '团队全栈 AWS：Terraform 建 VPC+EKS，Actions OIDC 推 ECR，CloudWatch alarm 接 PagerDuty。', core: 'AWS = IaaS+PaaS 全家桶；DevOps 重点：IAM 最小权限、网络、计算、存储、观测、计费告警。', metaphor: 'AWS 像超大建材超市——什么都有，但得会看货号（服务名）不然账单和架构都失控。', mistake: 'root key 放 CI——用 IAM role/OIDC 短期凭证。', confusion: '区域（Region）与 AZ 不同——资源命名含 region，迁移要规划。', experiment: 'aws sts get-caller-identity；开 Free Tier EC2 + S3 bucket 用 CLI 各操作一次。', layout: 'grid', diagram: ['Compute\nEC2/Lambda', 'Network\nVPC/ALB', 'Storage\nS3/RDS', 'Ops\nCloudWatch/IAM'] },
};

const nodes = loadNodes();
const usedSlugs = new Set();

const allSpecs = nodes.map((node, index) => {
  let spec = specForNode(node, index);
  const ov = LABEL_OVERRIDES[node.label];
  if (ov) spec = { ...spec, ...ov, slug: ov.slug ?? spec.slug };
  if (usedSlugs.has(spec.slug)) spec.slug = `${spec.slug}-${node.id.slice(0, 6)}`;
  usedSlugs.add(spec.slug);
  spec.id = node.id;
  spec.label = node.label;
  return spec;
});

if (allSpecs.length !== 137) {
  console.error('Expected 137 nodes, got', allSpecs.length);
  process.exit(1);
}

const diagramEntries = allSpecs.map((s) => buildDiagram(s.slug, s.layout, s.heading.split('：')[0] + ' · ' + (s.label.length > 20 ? s.label.slice(0, 20) : s.label), s.diagram, s.metaphor)).join('\n');

const lessonEntries = allSpecs.map((s) => {
  const idKey = `"${s.id}"`;
  const routeStr = s.route.map((r) =>
    `      { label: '${esc(r.label)}', title: '${esc(r.title)}', text: '${esc(r.text)}' },`,
  ).join('\n');
  return `  ${idKey}: {
    heading: '${esc(s.heading)}',
    subheading: '${esc(s.subheading)}',
    scene: '${esc(s.scene)}',
    core: '${esc(s.core)}',
    metaphor: '${esc(s.metaphor)}',
    mistake: '${esc(s.mistake)}',
    confusion: '${esc(s.confusion)}',
    experiment: '${esc(s.experiment)}',
    route: [
${routeStr}
    ],
    rawDiagram: DEVOPS_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const DEVOPS_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const DEVOPS_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/devops/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', allSpecs.length, 'nodes,', usedSlugs.size, 'unique diagram slugs');
