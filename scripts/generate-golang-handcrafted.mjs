#!/usr/bin/env node
/**
 * Generates src/roadmaps/golang/teaching-handcrafted.ts
 * 172 nodes — unique Chinese copy + semantic Excalidraw per node.
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
  const data = readFileSync('src/roadmaps/golang/data.ts', 'utf8');
  const start = data.indexOf('const data = ') + 'const data = '.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  const parsed = JSON.parse(data.slice(start, end));
  const nodes = [];
  parsed.stages.forEach((s, i) => s.nodes.forEach((n) => nodes.push({ ...n, stage: i + 1, stageEn: s.en, stageZh: s.zh })));
  return nodes;
}

function loadLessonSpecs() {
  const src = readFileSync('src/roadmaps/golang/teaching.ts', 'utf8');
  const start = src.indexOf('export const GOLANG_TEACHING_LESSONS');
  const end = src.indexOf('export function hasGolangTeachingLesson');
  let body = src.slice(start, end);
  body = body.replace('export const GOLANG_TEACHING_LESSONS: Record<string, TeachingLesson> = ', '');
  body = body.replace(/goLesson\(/g, '(');
  body = body.replace(/ as GoDiagramKind/g, '');
  body = body.trim().replace(/;\s*$/, '');
  return new Function('return ' + body)();
}

function slugify(label, id) {
  const base = label.toLowerCase()
    .replace(/`/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9/-]+/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return `go-${base || `node-${id.slice(0, 8)}`}-${id.slice(0, 6)}`;
}

function cleanZh(zh) {
  return String(zh)
    .replace(/（技术术语）/g, '')
    .replace(/of/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const STAGE_HINT = {
  1: 'Go 入门', 2: '变量与常量', 3: '复数类型', 4: '数组', 5: '切片', 6: '结构体',
  7: '条件与循环', 8: '函数', 9: '指针', 10: 'map 与 slice 进阶', 11: '方法与函数',
  12: '泛型', 13: '模块与依赖', 14: '包', 15: '第三方包', 16: 'channel', 17: 'Worker Pool',
  18: '并发模式', 19: '标准库', 20: 'JSON 编解码', 21: 'CLI', 22: 'Web 开发',
  23: '日志', 24: '实时通信', 25: 'go generate', 26: '静态检查', 27: 'go doc', 28: '构建可执行文件', 29: '构建约束',
};

const goCategoryCopy = {
  intro: { subject: 'Go 语言定位', action: '理解 Go 适合解决什么问题', result: '知道何时选 Go 写后端', risk: '没跑通过环境就背语法', metaphor: 'Go 像精简工具箱：标准库厚、编译快、部署简单。' },
  setup: { subject: '开发环境', action: '安装 Go 并配置模块工作区', result: '能 go run / go build 跑起来', risk: 'GOPATH 和 module 模式混用', metaphor: '环境搭建像厨房点火：灶没开，菜做不了。' },
  syntax: { subject: '基础语法', action: '用变量、类型和控制流写可读代码', result: '能读懂并写小段 Go 程序', risk: ':= 和 = 混用、忽略 zero value', metaphor: '语法像交通规则：先统一写法，再谈速度。' },
  types: { subject: '类型系统', action: '区分值类型、引用语义和零值', result: '类型选择符合业务精度', risk: 'float 表示金额、忽略 rune/byte 区别', metaphor: '类型像容器规格：装什么决定用什么盒。' },
  composite: { subject: '复合类型', action: '用 struct/slice/map 组织数据', result: '数据结构清晰可扩展', risk: 'slice 共享底层数组被意外修改', metaphor: 'struct/slice/map 像三种收纳：固定格、可变长列表、键值抽屉。' },
  function: { subject: '函数与方法', action: '写函数、方法和多返回值', result: '业务逻辑封装合理', risk: '指针/值 receiver 选错导致改不动原值', metaphor: '方法是给类型绑定的技能包。' },
  interface: { subject: '接口与多态', action: '用 interface 做依赖抽象', result: '代码可测试、可替换实现', risk: '过早抽象或空 interface 滥用', metaphor: '接口像插座标准：不关心内部，只关心能不能插。' },
  error: { subject: '错误处理', action: '用 error 值显式传递失败', result: '失败路径可追踪', risk: '忽略 err 或 panic 滥用', metaphor: 'error 像快递异常单：必须签收处理，不能假装没发生。' },
  package: { subject: '包与模块', action: '组织 package 和管理 go.mod 依赖', result: '项目结构清晰、依赖可复现', risk: '循环依赖、乱用 internal', metaphor: 'module 像项目身份证：版本和依赖都写在 go.mod。' },
  test: { subject: '测试与质量', action: '写 table-driven test 和 benchmark', result: '重构有信心、性能可量化', risk: '只测 happy path、不测竞态', metaphor: '测试像安全带：平时感觉不到，出事时救命。' },
  concurrency: { subject: '并发模型', action: '用 goroutine/channel 协调任务', result: '并发安全且不过度复杂', risk: '泄漏 goroutine、无缓冲 channel 死锁', metaphor: 'goroutine 像轻量工人，channel 是传送带。' },
  sync: { subject: '同步原语', action: '用 mutex/waitgroup/context 控生命周期', result: '共享状态访问可控', risk: '忘记 Unlock 或不传 context 取消', metaphor: 'sync 像工地调度：人数、工期、停工信号都要管。' },
  web: { subject: 'Web 服务', action: '用 net/http 或框架处理请求', result: '能暴露 HTTP API 或页面', risk: '无超时、无 graceful shutdown', metaphor: 'HTTP handler 像前台：接请求、调后台、回响应。' },
  db: { subject: '数据库访问', action: '用 database/sql 或 ORM 读写数据', result: '数据层与业务层分离', risk: 'SQL 注入、连接池未配置', metaphor: 'DB 层像仓库管理员：进出都要登记。' },
  cli: { subject: 'CLI 工具', action: '用 flag/cobra 构建命令行程序', result: '运维/脚本任务可自动化', risk: '参数无校验、help 不清晰', metaphor: 'CLI 像遥控器：一个命令触发一套动作。' },
  generic: { subject: '泛型', action: '在需要时用 type parameters 复用逻辑', result: '少写重复代码且类型安全', risk: '为泛型而泛型，可读性下降', metaphor: '泛型像模具：一次定义，多种类型复用。' },
  tool: { subject: 'Go 工具链', action: '用 fmt/vet/test/lint 保障代码质量', result: '提交前问题更少', risk: '不跑 vet/lint 就上线', metaphor: 'go tool 像质检仪器：编译前先把问题照出来。' },
  advanced: { subject: '进阶主题', action: '理解内存、反射、unsafe 等底层机制', result: '性能调优和疑难问题有方向', risk: '没需求就用 unsafe/反射', metaphor: '进阶像拆引擎：能修，但别日常乱拆。' },
};

function goCategory(label) {
  if (/Why use Go|Introduction|History|Hello World|Common Usecases/i.test(label)) return 'intro';
  if (/Setting up|go version|go env|`go` command/i.test(label)) return 'setup';
  if (/var vs :=|const and iota|Variables|Zero Values|Scope|Conditionals|if|switch|for loop|for range|break|continue|goto|Loops/i.test(label)) return 'syntax';
  if (/Data Types|Integers|Floating|Boolean|Complex|Runes|Strings|Type Conversion|Type Inference|Type Switch|Type Assertions|Raw String/i.test(label)) return 'types';
  if (/Structs|Maps|Slices|Arrays|Struct Tags|Embedding|Iterating|make\(\)|Capacity|With Maps/i.test(label)) return 'composite';
  if (/Functions|Methods|Variadic|Closures|Anonymous|Multiple Return|Named Return|Pointer Receivers|Value Receivers|Call by Value/i.test(label)) return 'function';
  if (/Interfaces|Empty Interfaces|Embedding Interfaces|Comma-Ok|Generics|Generic|Why Generics|Type Constraints/i.test(label)) return 'interface';
  if (/error|Error Handling|Sentinel|Wrapping|panic|recover|fmt\.Errorf|errors\.New/i.test(label)) return 'error';
  if (/Packages|Modules|go mod|Import|Publishing|3rd Party|Package Import|go:embed|Build Tags|Build Constraints/i.test(label)) return 'package';
  if (/testing|Table-driven|Benchmarks|Coverage|httptest|Mocks|Race Detector|Race Detection/i.test(label)) return 'test';
  if (/Goroutines|Concurrency Patterns|Worker Pools|fan-in|fan-out|Channels|Buffered vs Unbuffered|Select Statement|Real-time|Melody|Centrifugo/i.test(label)) return 'concurrency';
  if (/WaitGroups|Mutexes|sync Package|context Package|Deadlines|Cancellations/i.test(label)) return 'sync';
  if (/Web Development|net\/http|gin|echo|fiber|beego|gRPC|Protocol Buffers|encoding\/json|I\/O|Zap|logrus|zerolog|slog|Logging/i.test(label)) return 'web';
  if (/GORM|pgx|ORMs|DB Access/i.test(label)) return 'db';
  if (/Building CLIs|Cobra|urfave|flag|Commands & Docs/i.test(label)) return 'cli';
  if (/Generics|Generic Functions|Generic Types/i.test(label)) return 'generic';
  if (/go fmt|go vet|go test|go build|go run|go doc|go install|go clean|go generate|golangci|staticcheck|govulncheck|goimports|revive|pprof|trace|Cross-compilation|Compiler|Escape Analysis|Garbage Collection|Memory|Reflection|Unsafe|CGO|Plugins/i.test(label)) return 'tool';
  return 'advanced';
}

function goDiagramKind(label, cat, i) {
  if (/Why use Go|Introduction|History|Hello World/i.test(label)) return 'journey';
  if (/Setting up|go version/i.test(label)) return 'language';
  if (/Goroutines|Worker Pools|fan-in|fan-out|Concurrency Patterns/i.test(label)) return 'goroutine';
  if (/Channels|Buffered vs Unbuffered|Select Statement/i.test(label)) return 'channel';
  if (/go test|Benchmarks|Coverage|Table-driven|httptest|Mocks/i.test(label)) return 'pipeline';
  if (/go fmt|go vet|go build|go run|golangci|staticcheck|govulncheck|revive|go generate|go doc/i.test(label)) return 'pipeline';
  if (/net\/http|gin|echo|fiber|Web Development|gRPC/i.test(label)) return 'api';
  if (/Zap|logrus|zerolog|slog|Logging/i.test(label)) return 'observe';
  if (/GORM|pgx|ORMs/i.test(label)) return 'datastore';
  if (/Interfaces|Generics|Generic/i.test(label)) return 'pattern';
  if (/WebSockets|Realtime|Melody|Centrifugo/i.test(label)) return 'stream';
  if (/Modules|go mod|Packages|Publishing/i.test(label)) return 'container';
  if (/Mutexes|WaitGroups|sync Package|context|Race/i.test(label)) return 'observe';
  if (/Structs|Maps|Slices|Pointers|Arrays/i.test(label)) return 'language';
  if (/Building CLIs|Cobra|urfave|flag/i.test(label)) return 'pipeline';
  const fallbacks = ['language', 'pattern', 'api', 'datastore', 'pipeline', 'goroutine', 'channel', 'journey'];
  return fallbacks[i % fallbacks.length];
}

const HEADING_SUFFIX = {
  intro: ['认识 Go 的定位', '编译型后端语言', '何时选 Go'],
  setup: ['搭好开发环境', 'module 工作区', 'go 命令入门'],
  syntax: ['掌握基础语法', '控制流与声明', '零值意识'],
  types: ['理解类型与零值', '精度与转换', 'rune 与 string'],
  composite: ['组织复合数据', 'slice/map 机制', 'struct 建模'],
  function: ['写函数与方法', 'receiver 选型', '多返回值'],
  interface: ['用接口做抽象', '隐式实现', '依赖注入'],
  error: ['正确处理 error', '包装与哨兵', 'panic 边界'],
  package: ['管理包与模块', 'go.mod 依赖', '可见性规则'],
  test: ['测试与基准', 'table-driven', 'race 检测'],
  concurrency: ['理解 goroutine', 'channel 通信', '并发模式'],
  sync: ['同步与取消', 'WaitGroup/Mutex', 'context 传递'],
  web: ['构建 Web 服务', 'Handler 与中间件', 'JSON API'],
  db: ['访问数据库', '连接池与事务', 'ORM 边界'],
  cli: ['开发命令行', 'flag/cobra', '退出码约定'],
  generic: ['按需使用泛型', '类型约束', '可读性权衡'],
  tool: ['用好工具链', 'fmt/vet/lint', 'pprof 剖析'],
  advanced: ['进阶与底层', '内存与 GC', 'unsafe 慎用'],
};

const METAPHOR_POOL = {
  journey: ['Go 学习像盖房子：地基语法→框架并发→屋顶部署', '路线图像地铁图：知道换乘站，得自己上车练', '从 Hello World 到可上线服务，阶段不可跳'],
  language: ['源码像菜谱，编译器像厨师把菜端上桌', '类型像容器规格：装什么决定用什么盒', 'package 像抽屉：东西分门别类才好找'],
  goroutine: ['goroutine 像轻量工人：开很多也不如线程重', '并发像多线做饭：要协调谁先谁后', 'worker pool 像固定数量收银台：队列再长也不无限开窗口'],
  channel: ['channel 像传送带：一端放一端取', '无缓冲 channel 像面对面交接：必须同时在线', 'select 像多路监听：谁先响听谁'],
  pipeline: ['工具链像质检流水线：fmt→vet→test→build', 'CI 里每步失败都应拦下发布', 'benchmark 像计时赛：优化要有数据'],
  api: ['HTTP handler 像前台：接请求、调后台、回响应', '中间件像安检链：日志、鉴权、恢复 panic', '路由像前台分诊：URL 决定找哪个部门'],
  observe: ['日志像黑匣子：出事时还原现场', 'metrics 像仪表盘：速度油量故障灯', 'trace 像快递全程跟踪：慢在哪一站'],
  datastore: ['DB 层像仓库管理员：进出都要登记', '连接池像预约车位：占满就排队', 'ORM 像翻译：先看清生成的 SQL'],
  pattern: ['接口像插座标准：不关心内部，只关心能不能插', '泛型像模具：一次定义多种类型复用', '设计模式是经验模板，不是炫技清单'],
  stream: ['WebSocket 像电话线：拨通后双向说话', 'SSE 像广播：服务端一直推', '实时通道要心跳，不然 NAT 悄悄断线'],
  container: ['module 像项目身份证：path+版本+依赖', 'go.mod/go.sum 像锁和清单', '第三方包像外购零件：要验版本和漏洞'],
};

function pick(pool, index) {
  const arr = Array.isArray(pool) ? pool : METAPHOR_POOL[pool] || METAPHOR_POOL.language;
  return arr[index % arr.length];
}

function goRoute(cat, command) {
  const routes = {
    intro: [['为何选 Go', '编译快、部署简单、并发友好', '先看场景再学语法。'], ['看生态', command, '标准库 + 云原生工具链。'], ['跑 Hello', 'go run main.go', '先让程序动起来。'], ['定项目', '小 CLI 或 API', '用项目带动学习。']],
    setup: [['装 Go', '官方安装包/asdf', '确认 go version。'], ['建 module', command, 'go mod init。'], ['配 IDE', 'gopls + lint', '保存即 fmt。'], ['跑样例', 'go run / go test', '验证环境 OK。']],
    syntax: [['读代码', '从上到下', '先 main 再看包。'], ['写变量', command, ':= 短声明 vs var。'], ['控流程', 'if/for/switch', 'Go 只有 for 一种循环。'], ['看零值', '未赋值也有默认', 'nil/false/0 要知道。']],
    types: [['认类型', 'int/string/bool', '精度够用即可。'], ['做转换', command, '显式转换，无隐式。'], ['字符集', 'byte vs rune', '字符串遍历用 range。'], ['避坑', '比较和格式化', '别用 float 做钱。']],
    composite: [['选结构', 'struct 聚合字段', '标签可映射 JSON。'], ['用 slice', command, 'len/cap/append 机制。'], ['用 map', '键必须可比较', '并发写要 sync.Map 或锁。'], ['共享底层', '切片截取', 'append 可能 realloc。']],
    function: [['写函数', '参数和返回值', '多返回值是常态。'], ['绑方法', command, '值/指针 receiver 选型。'], ['闭包', '捕获外部变量', '注意循环变量陷阱。'], ['可读性', '小函数组合', 'main 只做组装。']],
    interface: [['定契约', '方法集 = 接口', '隐式实现，无需 implements。'], ['做抽象', command, '依赖 interface 便于 mock。'], ['空接口', 'any 最后手段', '能用具体类型就用具体类型。'], ['泛型', 'type parameters', '重复逻辑再考虑泛型。']],
    error: [['返回 error', '最后一参常见', '调用方必须处理。'], ['包装错误', command, 'fmt.Errorf %w / errors.Is。'], ['哨兵错误', 'errors.New 常量', '可 errors.Is 判断。'], ['panic', '真正不可恢复再用', 'recover 只在 defer 边界。']],
    package: [['划 package', '目录=包名', '可见性靠首字母大小写。'], ['管依赖', command, 'go mod tidy/vendor。'], ['引第三方', '语义化版本', '锁 go.sum。'], ['发布', 'module path', '语义清晰可导入。']],
    test: [['写单测', '_test.go 同包', 'table-driven 更清晰。'], ['Mock', command, 'interface + fake impl。'], ['测 HTTP', 'httptest', '不真起端口也能测。'], ['Benchmark', 'go test -bench', '优化要有数据。']],
    concurrency: [['开 goroutine', 'go func()', '比线程轻，但要管生命周期。'], ['通信用 channel', command, '不要靠共享内存。'], ['模式', 'worker pool / fan-out', '先画数据流再写代码。'], ['竞态', '-race 检测', 'CI 里跑 race detector。']],
    sync: [['WaitGroup', '等一组任务完成', 'Add/Done/Wait 成对。'], ['Mutex', command, '保护共享 map/计数。'], ['Context', '超时/取消/传值', 'HTTP 请求链必传 ctx。'], ['泄漏', 'goroutine 退出条件', 'select + ctx.Done。']],
    web: [['路由', 'HandlerFunc', '一 URL 一处理函数。'], ['中间件', command, '日志/鉴权/恢复 panic。'], ['JSON', 'encoding/json', '结构体 tag 对齐前端。'], ['优雅退出', 'signal + Shutdown', '别直接 kill -9。']],
    db: [['连池', 'sql.Open + Ping', '配置 MaxOpen/Idle。'], ['查询', command, '参数化 ? / $1。'], ['事务', 'Begin/Commit/Rollback', '业务原子性。'], ['ORM', 'GORM 等', '先看生成的 SQL。']],
    cli: [['定义命令', 'flag 或 cobra', '子命令分层。'], ['参数校验', command, '--help 要清楚。'], ['输出', 'stdout/stderr 分离', '方便脚本管道。'], ['退出码', '0 成功非 0 失败', '自动化依赖 exit code。']],
    generic: [['何时用', '重复且类型不同', '别一开始就泛型。'], ['写约束', command, 'comparable / 自定义 interface。'], ['推断', '编译器补类型参数', '保持签名可读。'], ['权衡', '可读 vs 复用', '团队能读懂才值得。']],
    tool: [['格式化', 'go fmt / goimports', '风格统一零争论。'], ['静态检查', command, 'go vet + staticcheck。'], ['构建', 'go build 交叉编译', 'GOOS/GOARCH。'], ['剖析', 'pprof/trace', '先测量再优化。']],
    advanced: [['内存', '栈/堆/逃逸', 'pprof 看分配热点。'], ['底层', command, 'unsafe/反射慎用。'], ['CGO', '与 C 互操作', '构建和部署变复杂。'], ['原则', '简单优先', '进阶为解决问题，不为炫技。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

function craftContent(base, node, index) {
  const cat = goCategory(node.label);
  const c = goCategoryCopy[cat];
  const zh = cleanZh(node.zh || base.label);
  const command = base.command || node.label;
  const kind = goDiagramKind(node.label, cat, index);
  const hint = STAGE_HINT[node.stage] || node.stageEn;
  const heading = `${zh}：${pick(HEADING_SUFFIX[cat], index)}`;
  const subheading = `阶段 ${node.stage}（${hint}）：${node.label} 的重点是「${c.action.slice(0, 28)}」，不是孤立背语法。`;
  const scene = `你在「${hint}」阶段写 Go 代码时遇到 ${node.label}（${zh}）。典型场景：${c.subject}里需要${c.action}，否则容易${c.risk}。`;
  const core = `${zh} = ${command} → ${c.action} → ${c.result}`;
  const metaphor = pick(kind, index);
  const mistake = `常见坑：${base.risk || c.risk}；对 ${node.label} 尤其要警惕脱离 ${hint} 上下文硬套模式。`;
  const confusion = `${zh} 与相邻节点的边界：负责「${c.action}」，不替代整条 Go 后端链路里的其他层。`;
  const experiment = base.experiment.startsWith('围绕')
    ? base.experiment.replace('你在学 Go 后端开发，遇到', '在「' + hint + '」阶段，')
    : `围绕 \`${command}\` 建最小 demo：go run / go test 跑通并记录输出与错误处理路径。`;

  return {
    id: node.id,
    label: node.label,
    slug: slugify(node.label, node.id),
    zh,
    heading,
    subheading,
    scene,
    core,
    metaphor,
    mistake,
    confusion,
    experiment,
    route: goRoute(cat, command),
    diagramKind: kind,
    command,
    subject: c.subject,
    action: c.action,
    result: c.result,
    risk: base.risk || c.risk,
  };
}

function buildDiagram(spec) {
  const p = spec.slug;
  const title = `${spec.zh} · ${spec.command}`.slice(0, 44);
  const cmd = spec.command.slice(0, 22);
  const object = spec.subject.slice(0, 14);
  const result = spec.result.slice(0, 14);
  const note = spec.metaphor.slice(0, 56);
  const kind = spec.diagramKind;
  const lines = [text(`${p}-title`, 70, 10, title, 22, 620)];

  switch (kind) {
    case 'journey':
      for (let i = 0; i < 5; i++) {
        const x = 48 + i * 148;
        lines.push(
          box(`${p}-s${i}`, x, 120, 120, 56, [palette.cyan, palette.blue, palette.yellow, palette.green, palette.purple][i]),
          text(`${p}-st${i}`, x + 12, 136, ['语法', '类型', '并发', 'Web', '工具链'][i], 14, 96),
        );
        if (i < 4) arrow(`${p}-a${i}`, x + 124, 148, 20, 0);
      }
      break;
    case 'goroutine':
      lines.push(
        box(`${p}-main`, 58, 118, 130, 100, palette.blue),
        text(`${p}-main-t`, 84, 144, 'main\n启动', 16, 98),
        box(`${p}-go`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-go-t`, 334, 116, `${cmd}\n多个 goroutine`, 16, 120),
        box(`${p}-done`, 566, 118, 150, 100, palette.green),
        text(`${p}-done-t`, 592, 144, 'WaitGroup\n或 channel', 16, 98),
        arrow(`${p}-a1`, 194, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
      break;
    case 'channel':
      lines.push(
        box(`${p}-send`, 58, 118, 150, 100, palette.blue),
        text(`${p}-send-t`, 84, 144, '发送方\nch <- v', 16, 98),
        box(`${p}-ch`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-ch-t`, 334, 116, `${cmd}\n缓冲/同步`, 16, 120),
        box(`${p}-recv`, 566, 118, 150, 100, palette.green),
        text(`${p}-recv-t`, 592, 144, '接收方\n<-ch', 16, 98),
        arrow(`${p}-a1`, 214, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
      break;
    case 'pipeline':
      ['fmt/vet', 'test', 'build', 'deploy'].forEach((step, i) => {
        const x = 56 + i * 168;
        lines.push(
          box(`${p}-p${i}`, x, 130, 140, 64, [palette.cyan, palette.blue, palette.yellow, palette.green][i]),
          text(`${p}-pt${i}`, x + 16, 148, i === 1 ? cmd.slice(0, 12) : step, 14, 108),
        );
        if (i < 3) arrow(`${p}-pa${i}`, x + 144, 162, 20, 0);
      });
      break;
    case 'api':
      lines.push(
        box(`${p}-client`, 58, 124, 150, 92, palette.blue),
        text(`${p}-client-t`, 84, 150, 'Client\nHTTP 请求', 16, 98),
        box(`${p}-handler`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-handler-t`, 334, 124, `${cmd}\nHandler`, 16, 124),
        box(`${p}-resp`, 568, 124, 150, 92, palette.green),
        text(`${p}-resp-t`, 594, 150, 'JSON\nResponse', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'observe':
      lines.push(
        box(`${p}-log`, 48, 88, 200, 96, palette.blue),
        text(`${p}-log-t`, 68, 108, 'Logs\n结构化', 15, 160),
        box(`${p}-metric`, 280, 88, 200, 96, palette.yellow),
        text(`${p}-metric-t`, 300, 108, 'Metrics\n延迟/QPS', 15, 160),
        box(`${p}-trace`, 512, 88, 200, 96, palette.green),
        text(`${p}-trace-t`, 532, 108, 'Traces\nspan', 15, 160),
        box(`${p}-cmd`, 200, 220, 360, 72, palette.purple),
        text(`${p}-cmd-t`, 220, 240, cmd, 16, 320),
      );
      break;
    case 'datastore':
      lines.push(
        box(`${p}-app`, 58, 124, 150, 92, palette.blue),
        text(`${p}-app-t`, 84, 150, 'App/ORM', 16, 98),
        box(`${p}-pool`, 304, 96, 184, 148, palette.yellow),
        text(`${p}-pool-t`, 334, 124, `${cmd}\n连接池`, 16, 124),
        box(`${p}-db`, 568, 124, 150, 92, palette.green),
        text(`${p}-db-t`, 594, 150, 'PostgreSQL', 16, 98),
        arrow(`${p}-a1`, 214, 170, 84, 0),
        arrow(`${p}-a2`, 494, 170, 68, 0),
      );
      break;
    case 'pattern':
      lines.push(
        box(`${p}-impl`, 48, 108, 200, 120, palette.blue),
        text(`${p}-impl-t`, 68, 132, '具体类型\n实现方法集', 16, 160),
        box(`${p}-iface`, 300, 82, 200, 172, palette.yellow),
        text(`${p}-iface-t`, 320, 108, `${cmd}\ninterface`, 16, 160),
        box(`${p}-mock`, 552, 108, 200, 120, palette.green),
        text(`${p}-mock-t`, 572, 132, '测试替身\n可替换', 16, 160),
        arrow(`${p}-a1`, 252, 168, 44, 0),
        arrow(`${p}-a2`, 504, 168, 44, 0),
      );
      break;
    case 'stream':
      lines.push(
        box(`${p}-cli`, 54, 108, 130, 74, palette.blue),
        text(`${p}-cli-t`, 78, 130, 'Client\n连接', 16, 82),
        box(`${p}-ws`, 214, 108, 170, 74, palette.yellow),
        text(`${p}-ws-t`, 238, 130, `${cmd}\n长连接`, 15, 130),
        box(`${p}-push`, 414, 108, 130, 74, palette.green),
        text(`${p}-push-t`, 438, 130, 'Push\n事件', 16, 82),
        box(`${p}-hb`, 574, 108, 130, 74, palette.purple),
        text(`${p}-hb-t`, 598, 130, '心跳\n重连', 16, 82),
        arrow(`${p}-a1`, 188, 145, 22, 0),
        arrow(`${p}-a2`, 388, 145, 22, 0),
        arrow(`${p}-a3`, 548, 145, 22, 0),
      );
      break;
    case 'container':
      lines.push(
        box(`${p}-mod`, 120, 56, 520, 56, palette.yellow),
        text(`${p}-mod-t`, 140, 72, 'go.mod / go.sum 锁定依赖', 16, 480),
        box(`${p}-pkg`, 120, 132, 520, 56, palette.blue),
        text(`${p}-pkg-t`, 140, 148, `${cmd}`, 16, 480),
        box(`${p}-build`, 120, 208, 520, 56, palette.green),
        text(`${p}-build-t`, 140, 224, 'go build → 单二进制交付', 16, 480),
        arrow(`${p}-a1`, 380, 116, 0, 12),
        arrow(`${p}-a2`, 380, 192, 0, 12),
      );
      break;
    default:
      lines.push(
        box(`${p}-code`, 58, 118, 150, 100, palette.blue),
        text(`${p}-code-t`, 84, 144, object, 16, 98),
        box(`${p}-runtime`, 304, 86, 176, 164, palette.yellow),
        text(`${p}-runtime-t`, 334, 116, `${cmd}\n编译/运行`, 16, 120),
        box(`${p}-svc`, 566, 118, 150, 100, palette.green),
        text(`${p}-svc-t`, 592, 144, result, 16, 98),
        arrow(`${p}-a1`, 214, 168, 84, 0),
        arrow(`${p}-a2`, 486, 168, 74, 0),
      );
  }

  lines.push(text(`${p}-note`, 90, 320, note, 16, 560));
  return scene(spec.slug, lines);
}

const LABEL_OVERRIDES = {
  'Why use Go': { heading: '为什么选 Go：编译快、部署简、并发友好', subheading: 'Go 适合云原生 CLI、API 与中高并发服务——先认清场景再学语法。', metaphor: 'Go 像精简工具箱：标准库厚、编译快、部署只需一个二进制。' },
  'Hello World in Go': { heading: 'Hello World：让 Go 程序先跑起来', subheading: 'package main + func main + go run 是 every Go 项目的起点。', experiment: '创建 main.go，执行 go run .，再 go build -o app 对比两种运行方式。' },
  Goroutines: { heading: 'Goroutine：轻量并发单元', subheading: 'go 关键字启动；必须配合 channel/sync/context 管理生命周期。', metaphor: 'goroutine 像轻量工人：便宜到可以开很多，但要有下班机制。' },
  Channels: { heading: 'Channel：goroutine 之间的传送带', subheading: 'CSP 模型核心：不要通过共享内存通信，而要通过通信共享内存。', metaphor: 'channel 像传送带：一端放、一端取；无缓冲必须面对面交接。' },
  'net/http (standard)': { heading: 'net/http：标准库 Web 服务', subheading: 'Handler/HandlerFunc + ServeMux 足够搭 REST API，框架是 sugar。', metaphor: 'net/http 像毛坯房：简单可靠，装修（中间件）自己加。' },
  'go mod tidy': { heading: 'go mod tidy：整理依赖清单', subheading: '增删 import 后运行，同步 go.mod/go.sum，CI 可 go mod verify。', experiment: '故意删掉 go.sum 一行再 go mod tidy，观察如何恢复校验和。' },
};

const nodes = loadNodes();
const lessonSpecs = loadLessonSpecs();
const usedSlugs = new Set();

const allSpecs = nodes.map((node, index) => {
  const base = lessonSpecs[node.id];
  if (!base) throw new Error(`Missing lesson spec for ${node.id} (${node.label})`);
  let spec = craftContent(base, node, index);
  const ov = LABEL_OVERRIDES[node.label];
  if (ov) spec = { ...spec, ...ov };
  if (usedSlugs.has(spec.slug)) spec.slug = `${spec.slug}-dup`;
  usedSlugs.add(spec.slug);
  return spec;
});

if (allSpecs.length !== 172) {
  console.error('Expected 172 nodes, got', allSpecs.length);
  process.exit(1);
}

const diagramEntries = allSpecs.map((s) => buildDiagram(s)).join('\n');

const lessonEntries = allSpecs.map((s) => {
  const routeStr = s.route.map((r) =>
    `      { label: '${esc(r.label)}', title: '${esc(r.title)}', text: '${esc(r.text)}' },`,
  ).join('\n');
  return `  "${s.id}": {
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
    rawDiagram: GOLANG_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const GOLANG_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const GOLANG_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/golang/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', allSpecs.length, 'nodes,', usedSlugs.size, 'unique diagram slugs');
