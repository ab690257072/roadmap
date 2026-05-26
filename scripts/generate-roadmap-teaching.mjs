import { readFileSync, writeFileSync } from 'node:fs';

const slug = process.argv[2];
if (!slug || !['golang', 'postgresql', 'mongodb', 'redis', 'docker', 'kubernetes', 'devops', 'system-design'].includes(slug)) {
  console.error('Usage: node scripts/generate-roadmap-teaching.mjs <golang|postgresql|mongodb|redis|docker|kubernetes|devops|system-design>');
  process.exit(1);
}

const CONFIG = {
  golang: {
    dataPath: 'src/roadmaps/golang/data.ts',
    templatePath: 'scripts/golang-teaching-template.ts',
    outPath: 'src/roadmaps/golang/teaching.ts',
    exportName: 'GOLANG_TEACHING_LESSONS',
    lessonFn: 'goLesson',
    diagramType: 'GoDiagramKind',
    hasFn: 'hasGolangTeachingLesson',
    getFn: 'getGolangTeachingLesson',
    scenePrefix: '你在学 Go 后端开发，遇到',
    roadmapName: 'Go',
  },
  postgresql: {
    dataPath: 'src/roadmaps/postgresql/data.ts',
    templatePath: 'scripts/postgresql-teaching-template.ts',
    outPath: 'src/roadmaps/postgresql/teaching.ts',
    exportName: 'POSTGRESQL_TEACHING_LESSONS',
    lessonFn: 'pgLesson',
    diagramType: 'PgDiagramKind',
    hasFn: 'hasPostgresqlTeachingLesson',
    getFn: 'getPostgresqlTeachingLesson',
    scenePrefix: '你在管理或开发 PostgreSQL，遇到',
    roadmapName: 'PostgreSQL',
  },
  mongodb: {
    dataPath: 'src/roadmaps/mongodb/data.ts',
    templatePath: 'scripts/mongodb-teaching-template.ts',
    outPath: 'src/roadmaps/mongodb/teaching.ts',
    exportName: 'MONGODB_TEACHING_LESSONS',
    lessonFn: 'mongoLesson',
    diagramType: 'MongoDiagramKind',
    hasFn: 'hasMongodbTeachingLesson',
    getFn: 'getMongodbTeachingLesson',
    scenePrefix: '你在使用 MongoDB，遇到',
    roadmapName: 'MongoDB',
  },
  redis: {
    dataPath: 'src/roadmaps/redis/data.ts',
    templatePath: 'scripts/redis-teaching-template.ts',
    outPath: 'src/roadmaps/redis/teaching.ts',
    exportName: 'REDIS_TEACHING_LESSONS',
    lessonFn: 'redisLesson',
    diagramType: 'RedisDiagramKind',
    hasFn: 'hasRedisTeachingLesson',
    getFn: 'getRedisTeachingLesson',
    scenePrefix: '你在使用 Redis，遇到',
    roadmapName: 'Redis',
  },
  docker: {
    dataPath: 'src/roadmaps/docker/data.ts',
    templatePath: 'scripts/docker-teaching-template.ts',
    outPath: 'src/roadmaps/docker/teaching.ts',
    exportName: 'DOCKER_TEACHING_LESSONS',
    lessonFn: 'dockerLesson',
    diagramType: 'DockerDiagramKind',
    hasFn: 'hasDockerTeachingLesson',
    getFn: 'getDockerTeachingLesson',
    scenePrefix: '你在使用 Docker，遇到',
    roadmapName: 'Docker',
  },
  kubernetes: {
    dataPath: 'src/roadmaps/kubernetes/data.ts',
    templatePath: 'scripts/kubernetes-teaching-template.ts',
    outPath: 'src/roadmaps/kubernetes/teaching.ts',
    exportName: 'KUBERNETES_TEACHING_LESSONS',
    lessonFn: 'k8sLesson',
    diagramType: 'K8sDiagramKind',
    hasFn: 'hasKubernetesTeachingLesson',
    getFn: 'getKubernetesTeachingLesson',
    scenePrefix: '你在使用 Kubernetes，遇到',
    roadmapName: 'Kubernetes',
  },
  devops: {
    dataPath: 'src/roadmaps/devops/data.ts',
    templatePath: 'scripts/devops-teaching-template.ts',
    outPath: 'src/roadmaps/devops/teaching.ts',
    exportName: 'DEVOPS_TEACHING_LESSONS',
    lessonFn: 'devopsLesson',
    diagramType: 'DevopsDiagramKind',
    hasFn: 'hasDevopsTeachingLesson',
    getFn: 'getDevopsTeachingLesson',
    scenePrefix: '你在实践 DevOps，遇到',
    roadmapName: 'DevOps',
  },
  'system-design': {
    dataPath: 'src/roadmaps/system-design/data.ts',
    templatePath: 'scripts/system-design-teaching-template.ts',
    outPath: 'src/roadmaps/system-design/teaching.ts',
    exportName: 'SYSTEM_DESIGN_TEACHING_LESSONS',
    lessonFn: 'sdLesson',
    diagramType: 'SdDiagramKind',
    hasFn: 'hasSystemDesignTeachingLesson',
    getFn: 'getSystemDesignTeachingLesson',
    scenePrefix: '你在做系统设计，遇到',
    roadmapName: 'System Design',
  },
};

const cfg = CONFIG[slug];
const data = readFileSync(cfg.dataPath, 'utf8');
const start = data.indexOf('const data = ') + 'const data = '.length;
const end = data.indexOf(';\n\nexport const stages', start);
const parsed = JSON.parse(data.slice(start, end));
const nodes = parsed.stages.flatMap((stage) =>
  stage.nodes.map((node) => ({
    id: node.id,
    label: node.label,
    zh: node.zh,
    stageId: stage.id,
    stageZh: stage.zh,
  })),
);

function q(s) {
  return JSON.stringify(s);
}

function routeCode(route) {
  return `[\n${route.map((r) => `      { label: ${q(r.label)}, title: ${q(r.title)}, text: ${q(r.text)} }`).join(',\n')}\n    ]`;
}

// --- Golang ---
const goCategoryCopy = {
  intro: { subject: 'Go 语言定位', action: '理解 Go 适合解决什么问题', result: '知道何时选 Go 写后端', risk: '没跑通过环境就背语法', metaphor: 'Go 像精简工具箱：标准库厚、编译快、部署简单。' },
  setup: { subject: '开发环境', action: '安装 Go 并配置模块工作区', result: '能 go run / go build 跑起来', risk: 'GOPATH 和 module 模式混用', metaphor: '环境搭建像厨房点火：灶没开，菜做不了。' },
  syntax: { subject: '基础语法', action: '用变量、类型和控制流写可读代码', result: '能读懂并写小段 Go 程序', risk: ':= 和 = 混用、忽略 zero value', metaphor: '语法像交通规则：先统一写法，再谈速度。' },
  types: { subject: '类型系统', action: '区分值类型、引用语义和零值', result: '类型选择符合业务精度', risk: 'float 表示金额、忽略 rune/byte 区别', metaphor: '类型像容器规格：装什么决定用什么盒。' },
  composite: { subject: '复合类型', action: '用 struct/slice/map 组织数据', result: '数据结构清晰可扩展', risk: 'slice 共享底层数组被意外修改', metaphor: 'struct/slice/map 像三种收纳方式：固定格、可变长列表、键值抽屉。' },
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
  if (/Setting up|go version|go env/i.test(label)) return 'setup';
  if (/var vs :=|const and iota|Variables|Zero Values|Scope|Conditionals|if|switch|for loop|for range|break|continue|goto|Loops/i.test(label)) return 'syntax';
  if (/Data Types|Integers|Floating|Boolean|Complex|Runes|Strings|Type Conversion|Type Inference|Type Switch|Type Assertions/i.test(label)) return 'types';
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
  if (/go fmt|go vet|go build|go run|golangci|staticcheck|govulncheck/i.test(label)) return 'pipeline';
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

const goHeading = { intro: '认识 Go 的定位', setup: '搭好开发环境', syntax: '掌握基础语法', types: '理解类型与零值', composite: '组织复合数据', function: '写函数与方法', interface: '用接口做抽象', error: '正确处理 error', package: '管理包与模块', test: '测试与基准', concurrency: '理解 goroutine', sync: '同步与取消', web: '构建 Web 服务', db: '访问数据库', cli: '开发命令行', generic: '按需使用泛型', tool: '用好工具链', advanced: '进阶与底层' };

const goCommands = {
  'Why use Go': 'compile fast + single binary deploy',
  'Setting up the Environment': 'go version && go mod init demo',
  'Hello World in Go': 'fmt.Println("hello")',
  Goroutines: 'go func() { work() }()',
  Channels: 'ch := make(chan int); ch <- 1',
  'go test': 'go test ./... -cover',
  'net/http (standard)': 'http.HandleFunc("/", handler)',
  'go mod tidy': 'go mod tidy && go mod verify',
};

// --- PostgreSQL ---
const pgCategoryCopy = {
  concept: { subject: '关系型数据库概念', action: '理解表、键、事务和 SQL 角色', result: '知道 PostgreSQL 在系统中的位置', risk: '把 PG 当任意键值库用', metaphor: 'PostgreSQL 像带强规则的智能仓库：schema 是货架，SQL 是出入库单。' },
  query: { subject: 'SQL 查询', action: '用 SELECT/JOIN/聚合取数', result: '查询结果正确且可解释', risk: '不写 WHERE 就 UPDATE', metaphor: '查询像问问题：先定对象，再定条件，最后定要什么列。' },
  ddl: { subject: '对象定义', action: '创建/修改表、索引、约束', result: '结构可演进且一致', risk: '生产直接 DROP', metaphor: 'DDL 像改房屋结构：要审批、要备份。' },
  dml: { subject: '数据变更', action: 'INSERT/UPDATE/DELETE 安全改数据', result: '变更可追踪、可回滚', risk: '无 WHERE 的 UPDATE/DELETE', metaphor: 'DML 像改账本：先圈定行，再动手。' },
  index: { subject: '索引与执行计划', action: '为访问模式设计合适索引', result: '慢查询有依据地优化', risk: '索引过多拖慢写入', metaphor: '索引像书目录：查快，但增删页要维护目录。' },
  transaction: { subject: '事务与 MVCC', action: '用事务保证原子性和隔离', result: '并发下数据一致', risk: '长事务阻塞 vacuum', metaphor: '事务像银行转账：要么都成功，要么都撤销。' },
  security: { subject: '权限与安全', action: '配置角色、RLS 和 pg_hba', result: '最小权限访问', risk: '超级用户给应用用', metaphor: '权限像门禁卡：按人按表发卡。' },
  admin: { subject: '运维管理', action: '用 psql/pg_ctl 管理实例', result: '启停、备份、升级可控', risk: '从不练恢复', metaphor: 'DBA 操作像机组维护：有 checklist 才安全。' },
  backup: { subject: '备份恢复', action: '定期备份并验证可恢复', result: '故障时能 RPO/RTO 达标', risk: '只备份从不 restore 演练', metaphor: '备份像保险：真出事才知道有没有效。' },
  replication: { subject: '复制与高可用', action: '配置流复制或逻辑复制', result: '读扩展或故障切换', risk: '复制延迟无监控', metaphor: '复制像复印机：主本改了，副本要跟上。' },
  vacuum: { subject: 'Vacuum 与 WAL', action: '理解 MVCC 清理和 WAL 机制', result: '空间与性能可维护', risk: 'autovacuum 被长事务阻塞', metaphor: 'VACUUM 像收桌：旧版本占座要清走。' },
  monitor: { subject: '监控诊断', action: '看 pg_stat_* 和慢查询日志', result: '问题能定位到 SQL/锁/IO', risk: '只看 CPU 不看 active queries', metaphor: '监控像心电图：指标异常要先查根因。' },
  extension: { subject: '扩展与 PL/pgSQL', action: '安装扩展并写存储过程', result: '能力按需增强', risk: '扩展版本与 PG 大版本不兼容', metaphor: '扩展像插件：增强能力，但要管兼容性。' },
  deploy: { subject: '部署与自动化', action: '用 Docker/Ansible/云部署 PG', result: '环境一致、可重复', risk: '手工改 prod 配置无记录', metaphor: '自动化部署像流水线：同一套脚本多环境复用。' },
  pattern: { subject: '建模与反模式', action: '按访问模式设计 schema', result: '扩展时少踩坑', risk: 'EAV 滥用、无迁移策略', metaphor: '建模像城市规划：先想人流，再划功能区。' },
};

function pgCategory(label) {
  if (/What are Relational|RDBMS Benefits|Basic RDBMS|High Level|Relational Model|PostgreSQL vs|Introduction|Learn SQL/i.test(label)) return 'concept';
  if (/Queries|Querying|Filtering|Grouping|Joining|Subqueries|Set Operations|Aggregate|Window|CTE|Recursive|Lateral|Operators|EXPLAIN|Query Planner|Query Processing|SQL Query Patterns/i.test(label)) return 'query';
  if (/Tables|Columns|Rows|Schemas|Databases|Domains|Constraints|Normalization|Object Model|Attributes|Relations|Tuples|DDL|Modifying Data|Triggers|Procedures|Functions|PL\/pgSQL/i.test(label)) return /Modifying Data|Triggers|Procedures|Functions|PL/i.test(label) ? 'dml' : 'ddl';
  if (/INSERT|UPDATE|DELETE|COPY|Bulk Loading|Import \/ Export|Modifying Data/i.test(label)) return 'dml';
  if (/Indexes|B-Tree|GIN|GiST|BRIN|SP-GiST|Hash|PEV2|explain\.dalibo/i.test(label)) return 'index';
  if (/Transactions|ACID|MVCC|Lock Management|Isolation/i.test(label)) return 'transaction';
  if (/Security|Roles|Grant|Revoke|Authentication|pg_hba|Row-Level|SELinux|SSL Settings|Default Privileges|Object Privileges/i.test(label)) return 'security';
  if (/Connect using|psql|pg_ctl|pg_ctlcluster|Installation|Configuring|Package Managers|Using `systemd`|Per-User|Storage Parameters|Physical Storage|Buffer Management|Processes & Memory|Checkpoints|Core Dumps|Resource Usage|pg_upgrade/i.test(label)) return 'admin';
  if (/pg_dump|pg_restore|pg_basebackup|barman|pgbackrest|WAL-G|Backup Validation|pg_probackup/i.test(label)) return 'backup';
  if (/Replication|Streaming|Logical Replication|Patroni|PgBouncer|HAProxy|KeepAlived|Simple Stateful|Using Logical/i.test(label)) return 'replication';
  if (/Vacuum|Write-ahead Log|WAL|Checkpoints \/ Background Writer/i.test(label)) return 'vacuum';
  if (/Monitoring|Observability|Prometheus|pgBadger|pg_stat|Golden Signals|RED|pgcenter|check_pg|Zabbix|temBoard|Reporting Logging|Depesz|^USE$/i.test(label)) return 'monitor';
  if (/Extensions|Adding Extra|PostgreSQL Anonymizer|Get Involved|Writing Patches|Reviewing Patches|Mailing Lists/i.test(label)) return 'extension';
  if (/Deployment|Docker|Helm|Cloud|Ansible|Chef|Puppet|Salt|Consul|Etcd|Infrastructure|Learn to Automate|Shell Scripts|Migration Related/i.test(label)) return 'deploy';
  if (/Patterns|Antipatterns|Schema Design|Data Partitioning|Sharding|HTAP|OLTP|OLAP/i.test(label)) return 'pattern';
  if (/Data Types|NULL|Columns/i.test(label)) return 'query';
  return 'admin';
}

function pgDiagramKind(label, cat, i) {
  if (/What are Relational|PostgreSQL vs|RDBMS Benefits/i.test(label)) return 'compare';
  if (/Queries|Querying|Filtering|Operators|EXPLAIN|Query Planner/i.test(label)) return /EXPLAIN|Query Planner|Query Processing/i.test(label) ? 'optimizer' : 'syntax';
  if (/Joining|Lateral Join/i.test(label)) return 'join';
  if (/CTE|Recursive CTE/i.test(label)) return 'cte';
  if (/Aggregate|Window functions|Grouping/i.test(label)) return 'aggregate';
  if (/Subqueries|Set Operations/i.test(label)) return 'subquery';
  if (/Tables|Schemas|Databases|Constraints|Normalization|Columns|Rows|Domains/i.test(label)) return 'ddl';
  if (/Modifying Data|Bulk Loading|COPY|Import/i.test(label)) return 'dml';
  if (/B-Tree|GIN|GiST|BRIN|SP-GiST|Indexes and/i.test(label)) return 'index';
  if (/Transactions|ACID|MVCC|Lock/i.test(label)) return 'transaction';
  if (/Roles|Grant|Security|pg_hba|Row-Level|Authentication|SSL/i.test(label)) return 'security';
  if (/pg_dump|pg_restore|pg_basebackup|barman|pgbackrest|WAL-G|Backup/i.test(label)) return 'backup';
  if (/Replication|Patroni|PgBouncer|Streaming|Logical Replication/i.test(label)) return 'replication';
  if (/Vacuum|Write-ahead Log|WAL/i.test(label)) return 'vacuum';
  if (/Monitoring|Prometheus|pgBadger|pg_stat|Golden Signals|Observability|^USE$/i.test(label)) return 'monitor';
  if (/Connect using|psql|pg_ctl|Installation|Configuring|Package Managers|systemd|pg_upgrade/i.test(label)) return 'admin';
  if (/Extensions|Anonymizer/i.test(label)) return 'extension';
  if (/Deployment|Docker|Helm|Ansible|Chef|Puppet|Cloud/i.test(label)) return 'deploy';
  if (/Data Types|NULL/i.test(label)) return 'datatype';
  if (/Procedures|Functions|PL\/pgSQL|Triggers/i.test(label)) return 'function';
  const fallbacks = ['syntax', 'ddl', 'index', 'transaction', 'admin', 'monitor', 'backup', 'relation'];
  return fallbacks[i % fallbacks.length];
}

function pgRoute(cat, command) {
  const routes = {
    concept: [['建心智', '表/行/键/事务', '先理解 RDBMS 解决什么。'], ['看 PG 特点', command, '扩展、SQL 标准、JSON 等。'], ['连上实例', 'psql 或客户端', '先 \\dt 看有什么。'], ['小查询', 'SELECT 1', '确认权限和网络。']],
    query: [['定对象', 'FROM 哪张表', '先缩小范围。'], ['写条件', command, 'WHERE 过滤行。'], ['看计划', 'EXPLAIN ANALYZE', '优化要有证据。'], ['验结果', '行数/样例/边界', 'NULL 和排序都要看。']],
    ddl: [['设计 schema', '列类型+约束', 'migration 管理变更。'], ['建对象', command, '表/索引/视图。'], ['评影响', '锁/ downtime', '大表改结构要方案。'], ['备份', '改前 pg_dump', 'DDL 失误可回滚。']],
    dml: [['圈行', '先 SELECT 同条件', '确认影响范围。'], ['事务', command, 'BEGIN…COMMIT。'], ['批量', 'COPY/分批', '大变更分块。'], ['复查', '影响行数/抽样', 'DML 事故最常见。']],
    index: [['看访问', 'WHERE/JOIN/ORDER', '索引服务查询。'], ['选类型', command, 'B-Tree/GIN/GiST/BRIN。'], ['EXPLAIN', '是否走索引', '别盲加。'], ['维护', 'bloat/REINDEX', '写入也会代价。']],
    transaction: [['开事务', 'BEGIN', '一组操作原子。'], ['隔离级别', command, '读写冲突怎么表现。'], ['MVCC', '快照读', '理解长事务危害。'], ['结束', 'COMMIT/ROLLBACK', '失败要回滚。']],
    security: [['角色', 'ROLE/LOGIN', '应用不用 superuser。'], ['授权', command, 'GRANT 最小权限。'], ['pg_hba', '谁从哪连', 'SSL 强制。'], ['RLS', '行级策略', '多租户必备。']],
    admin: [['连接', 'psql -h -U', '确认实例活着。'], ['配置', command, 'postgresql.conf/pg_hba。'], ['启停', 'pg_ctl/systemd', '优雅重启。'], ['升级', 'pg_upgrade 演练', '大版本有计划。']],
    backup: [['策略', '全量+增量/WAL', 'RPO 定策略。'], ['工具', command, 'pg_dump/basebackup。'], ['校验', 'restore 到测试库', '备份必须演练。'], ['监控', '备份失败告警', '别等丢数据才发现。']],
    replication: [['选模式', '物理/逻辑复制', '读扩展 vs 切换。'], ['搭建', command, '主从+监控延迟。'], ['切换', 'Patroni/人工', '故障演练。'], ['连接池', 'PgBouncer', '保护 PG 连接数。']],
    vacuum: [['理解 MVCC', '旧版本行', 'UPDATE 产生 dead tuple。'], ['VACUUM', command, 'autovacuum 参数。'], ['WAL', '崩溃恢复', 'checkpoint 频率。'], ['监控', 'bloat/长事务', '阻塞 vacuum 要处理。']],
    monitor: [['系统视图', 'pg_stat_activity', '看谁堵谁。'], ['慢 SQL', command, 'pg_stat_statements。'], ['日志', 'log_min_duration', '指标+日志关联。'], ['告警', '连接数/复制延迟', '可行动告警。']],
    extension: [['查兼容', 'PG 版本', 'CREATE EXTENSION。'], ['安装', command, '文档看配置项。'], ['PL/pgSQL', '存储过程', '复杂逻辑靠近数据。'], ['升级', '扩展版本', '随 PG 大版本测。']],
    deploy: [['IaC', 'Ansible/Terraform', '配置可追溯。'], ['容器', command, '卷/资源限制。'], ['高可用', 'Patroni/K8s', '别单点。'], ['演练', '故障/恢复', '上线前压测。']],
    pattern: [['访问模式', '读写比例', '先建模再索引。'], ['反模式', command, 'EAV/无 FK/大宽表。'], ['分区', '按时间/键', '冷热分离。'], ['演进', 'migration', 'schema 变更可重复。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const pgHeading = { concept: '建立数据库心智', query: '写出正确查询', ddl: '定义数据库对象', dml: '安全变更数据', index: '索引与执行计划', transaction: '事务与并发', security: '权限与安全', admin: '实例运维管理', backup: '备份与恢复', replication: '复制与高可用', vacuum: 'Vacuum 与 WAL', monitor: '监控与诊断', extension: '扩展与过程', deploy: '部署与自动化', pattern: '建模与设计模式' };

const pgCommands = {
  Queries: 'SELECT col FROM t WHERE id = $1',
  'Connect using `psql`': 'psql -h host -U user -d db',
  'pg_dump': 'pg_dump -Fc mydb > backup.dump',
  'Streaming Replication': 'primary -> WAL -> standby',
  VACUUM: 'VACUUM (ANALYZE) large_table',
  EXPLAIN: 'EXPLAIN (ANALYZE, BUFFERS) SELECT ...',
  'B-Tree': 'CREATE INDEX ON t(col)',
  Patroni: 'Patroni + etcd HA cluster',
  PgBouncer: 'transaction pooling mode',
};

// --- MongoDB ---
const mongoCategoryCopy = {
  concept: { subject: '文档数据库概念', action: '理解 BSON、集合、文档与 SQL 的差异', result: '知道何时选 MongoDB', risk: '把所有关系都嵌进一个文档', metaphor: 'MongoDB 像文件柜：每个抽屉（集合）里放 JSON 形状的文件（文档）。' },
  model: { subject: '数据模型', action: '按访问模式设计嵌套或引用', result: '读写路径清晰', risk: '无 schema 不等于无设计', metaphor: '文档模型像乐高：可嵌套，但结构乱了就难拆。' },
  crud: { subject: 'CRUD 操作', action: '用驱动/Shell 增删改查文档', result: '基本数据操作熟练', risk: 'update 不带 filter 误改全表', metaphor: 'CRUD 像对单份文件编辑：先找到哪一份，再改字段。' },
  query: { subject: '查询与算符', action: '用 filter、projection、sort 取文档', result: '查询精准且可分页', risk: '$where 滥用、全表扫描', metaphor: '查询算符像筛子：$eq/$in/$gt 决定留下哪些文档。' },
  index: { subject: '索引', action: '为 filter/sort 建合适索引', result: '慢查询有依据优化', risk: '索引过多拖慢写入', metaphor: '索引像目录卡片：查快，但每写一条要更新目录。' },
  aggregation: { subject: '聚合管道', action: '用 $match/$group/$project 做分析', result: '复杂统计在库内完成', risk: '管道阶段过多无索引', metaphor: '聚合像流水线：文档一站站被加工。' },
  concern: { subject: '读写关注', action: '配置 read/write concern 与事务', result: '一致性预期可解释', risk: '默认 concern 不符合业务', metaphor: 'Concern 像寄快递：要不要签收、要不要保价。' },
  perf: { subject: '性能优化', action: '用 explain、profiler、索引优化', result: '瓶颈可定位', risk: '只看 QPS 不看慢查询', metaphor: '性能优化像查堵点：先测量，再改索引或查询。' },
  admin: { subject: '工具与运维', action: '用 mongosh、Compass、Atlas 管理实例', result: '日常运维可操作', risk: '生产直连无权限控制', metaphor: '管理工具像仪表盘：连接、监控、备份都要会看。' },
  scale: { subject: '扩展与高可用', action: '配置副本集、分片与迁移', result: '容量和可用性可扩展', risk: '未测 failover 就上线', metaphor: '副本集像备份机长：主库挂了副本能顶。' },
  security: { subject: '安全', action: '配置用户、角色、TLS 与加密', result: '访问可控、数据可保护', risk: '默认无认证暴露公网', metaphor: '安全像门禁：谁能进、能看哪些集合。' },
};

function mongoCategory(label) {
  if (/BSON vs JSON|SQL vs NoSQL|What is MongoDB|When to use|MongoDB Basics|Terminology|Embedded Objects|Atlas/i.test(label)) return 'concept';
  if (/Data Model|Data Types|Double|String|Array|Object|Object ID|Boolean|Date|Null|Int|Decimal|Timestamp|Min Key|Max Key|Binary|Undefined|Symbol|Regular Expression|JavaScript/i.test(label)) return 'model';
  if (/insert\(\)|update\(\)|delete\(\)|bulkWrite|Collections & Methods|find\(\)|Counting Documents/i.test(label)) return 'crud';
  if (/Query Operators|Cursors|\$eq|\$gt|\$lt|\$in|\$elemMatch|\$project|\$match|\$group|Retryable|Read Pref/i.test(label)) return 'query';
  if (/Creating Indexes|Index|Performance Optimization|explain|COLLSCAN|IXSCAN/i.test(label)) return /Performance|explain|Optimization/i.test(label) ? 'perf' : 'index';
  if (/\$group|\$lookup|Aggregation|Map-Reduce|\$unwind|\$sort|\$limit/i.test(label)) return 'aggregation';
  if (/Read \/ Write Concerns|Transactions|writeConcern|readConcern|Multi-document/i.test(label)) return 'concern';
  if (/Developer Tools|mongosh|Compass|MongoDB Shell|VS Code|Drivers/i.test(label)) return 'admin';
  if (/Scaling|Replica Set|Sharding|Horizontal|Vertical|Migration|Queryable Encryption/i.test(label)) return /Security|Encryption/i.test(label) ? 'security' : 'scale';
  if (/Security|Authentication|Authorization|Role|SCRAM|TLS|Encryption/i.test(label)) return 'security';
  if (/validate\(\)|Schema Validation|JSON Schema/i.test(label)) return 'model';
  return 'query';
}

function mongoDiagramKind(label, cat, i) {
  if (/BSON vs JSON|SQL vs NoSQL|When to use|What is MongoDB/i.test(label)) return 'compare';
  if (/Embedded Objects|Collections|What is MongoDB Atlas/i.test(label)) return 'document';
  if (/Double|String|Array|Object|Object ID|Boolean|Date|Null|Int|Decimal|Timestamp|Binary|Data Types|Data Model/i.test(label)) return 'datatype';
  if (/insert\(\)|update\(\)|delete\(\)|bulkWrite/i.test(label)) return 'crud';
  if (/find\(\)|Counting Documents/i.test(label)) return 'crud';
  if (/Query Operators|\$eq|\$gt|\$lt|\$lte|\$in|\$elemMatch|Cursors/i.test(label)) return 'query';
  if (/Creating Indexes|Index Types|Text Index|Compound Index/i.test(label)) return 'index';
  if (/Read \/ Write Concerns|writeConcern|readConcern/i.test(label)) return 'concern';
  if (/Transactions|Multi-document/i.test(label)) return 'concern';
  if (/\$project|\$match|\$group|Aggregation|Map-Reduce|\$lookup/i.test(label)) return 'aggregation';
  if (/validate\(\)|Schema Validation/i.test(label)) return 'schema';
  if (/Developer Tools|mongosh|Compass|Drivers|VS Code/i.test(label)) return 'admin';
  if (/Scaling|Replica Set|Sharding|Horizontal Scaling/i.test(label)) return 'replica';
  if (/Security|Authentication|Queryable Encryption|TLS/i.test(label)) return 'security';
  if (/Performance Optimization|explain|Profiler|Performance/i.test(label)) return 'observe';
  const fallbacks = ['document', 'crud', 'query', 'index', 'aggregation', 'concern', 'admin', 'replica'];
  return fallbacks[i % fallbacks.length];
}

function mongoRoute(cat, command) {
  const routes = {
    concept: [['建心智', '文档 vs 关系表', '先理解 BSON 和嵌套。'], ['看场景', command, '何时文档库更合适。'], ['连 Atlas/本地', 'mongosh', 'show dbs / show collections。'], ['小写入', 'insertOne', '先让数据进库。']],
    model: [['定字段', '类型与 _id', 'ObjectId 与嵌套结构。'], ['嵌套 vs 引用', command, '按读写频率选型。'], ['校验', 'JSON Schema', '需要时再上 validator。'], ['迁移', '脚本/backfill', 'schema 演进要有计划。']],
    crud: [['找集合', 'db.coll', '确认 namespace。'], ['写文档', command, 'insert/update/delete。'], ['先查后改', 'find + filter', '避免误改全表。'], ['看结果', 'acknowledged / modifiedCount', '确认影响范围。']],
    query: [['写 filter', '字段条件', '$eq/$in/$gt 等。'], ['投影排序', command, 'projection + sort + limit。'], ['游标', 'batchSize', '大结果集分批读。'], ['explain', 'executionStats', '是否走索引。']],
    index: [['看查询', 'filter + sort', '索引服务访问模式。'], ['建索引', command, '单字段/复合/唯一/TTL。'], ['验证', 'explain()', 'IXSCAN vs COLLSCAN。'], ['维护', 'drop/rebuild', '写入也有代价。']],
    aggregation: [['$match', '先过滤', '减少后续数据量。'], ['$group', command, '聚合统计。'], ['$project', '选字段', '输出形状。'], ['$lookup', '关联', '类似 left join。']],
    concern: [['读级别', 'readConcern', 'local/majority 等。'], ['写级别', command, 'writeConcern w/j。'], ['事务', 'startSession', '多文档原子。'], ['演练', 'failover', 'concern 要实测。']],
    perf: [['找慢查', 'profiler/Atlas', 'Top N 操作。'], ['看计划', command, 'explain executionStats。'], ['加索引', '匹配 filter', '别盲加。'], ['复查', '负载测试', '优化要有对比。']],
    admin: [['连接', 'mongosh URI', '确认权限。'], ['可视化', command, 'Compass 看文档结构。'], ['驱动', '官方 driver', '应用侧接入。'], ['备份', 'mongodump', '改结构前先备份。']],
    scale: [['副本集', 'Primary/Secondary', '高可用基础。'], ['分片', command, 'shard key 选型。'], ['迁移', 'chunk 均衡', '监控 balancer。'], ['演练', 'failover', '切换要测过。']],
    security: [['认证', 'SCRAM user', '禁用无 auth 公网。'], ['授权', command, 'role 最小权限。'], ['传输', 'TLS', '加密链路。'], ['静态加密', 'Queryable Encryption', '敏感字段保护。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const mongoHeading = { concept: '认识 MongoDB', model: '文档与类型', crud: '增删改查', query: '查询与算符', index: '索引设计', aggregation: '聚合分析', concern: '一致性与事务', perf: '性能优化', admin: '工具与运维', scale: '扩展与高可用', security: '安全与加密' };

const mongoCommands = {
  'BSON vs JSON': 'BSON 二进制 vs JSON 文本',
  'What is MongoDB?': 'mongosh → show dbs',
  'find() and relevant': 'db.users.find({ status: "active" })',
  'insert() and relevant': 'db.users.insertOne({ name: "Ada" })',
  'update() and relevant': 'db.users.updateOne({ _id }, { $set: { status: "vip" } })',
  'delete() and relevant': 'db.users.deleteOne({ _id })',
  'Creating Indexes': 'db.users.createIndex({ email: 1 }, { unique: true })',
  'Read / Write Concerns': 'writeConcern: { w: "majority", j: true }',
  Transactions: 'session.startTransaction()',
  '$project': '{ $project: { name: 1, _id: 0 } }',
  'Scaling MongoDB': 'replica set + sharded cluster',
};

// --- Redis ---
const redisCategoryCopy = {
  concept: { subject: 'Redis 定位', action: '理解内存 KV、缓存、队列等角色', result: '知道何时引入 Redis', risk: '把 Redis 当唯一主数据库', metaphor: 'Redis 像工作台缓存：快，但不是所有东西都能长期放上面。' },
  setup: { subject: '安装与连接', action: '启动实例并用 redis-cli 连接', result: '本地/容器环境可用', risk: '默认 bind 0.0.0.0 无密码', metaphor: '启动 Redis 像开电闸：通了才能用命令。' },
  command: { subject: '基础命令', action: '用 SET/GET 和各类结构命令读写', result: '常用操作熟练', risk: 'KEYS * 在生产使用', metaphor: 'Redis 命令像快捷键：选对数据结构，一条命令搞定。' },
  datatype: { subject: '数据结构', action: '按场景选 String/Hash/List/Set/ZSet 等', result: '模型匹配业务访问', risk: '一切皆 String +json', metaphor: '数据结构像不同容器：Hash 适合对象，ZSet 适合排行榜。' },
  cache: { subject: '缓存模式', action: '设计 TTL、穿透/击穿/雪崩策略', result: '缓存提升读性能且可控', risk: '无 TTL 内存打满', metaphor: '缓存像便签：过期要换，源数据还在仓库。' },
  advanced: { subject: '高级结构', action: '使用 Bitmap/HyperLogLog/GEO/Stream 等', result: '特定场景有专用解法', risk: '误用结构导致内存浪费', metaphor: '高级结构像专用工具：排行榜用 ZSet，计数去重用 HyperLogLog。' },
  messaging: { subject: '消息与流', action: '用 Pub/Sub、List 或 Stream 传递消息', result: '异步解耦可实现', risk: 'Pub/Sub 丢消息无持久', metaphor: 'Pub/Sub 像广播，Stream 像可回放的传送带。' },
  persistence: { subject: '持久化', action: '配置 RDB 快照与 AOF 日志', result: '重启可恢复数据', risk: 'AOF always 性能差未评估', metaphor: 'RDB 像拍照，AOF 像录像：恢复粒度不同。' },
  perf: { subject: '性能与原子性', action: '用 pipeline、事务、Lua 保证批量与原子', result: '高 QPS 下仍可控', risk: '大 key / 热 key 无拆分', metaphor: 'Pipeline 像一次寄多封信：减少往返。' },
  cluster: { subject: '集群与高可用', action: '配置 Sentinel 或 Redis Cluster', result: '故障可切换、容量可扩展', risk: '跨 slot 多 key 事务失败', metaphor: 'Cluster 像分片货架：key 要落在正确 slot。' },
  admin: { subject: '运维管理', action: '看 INFO、内存、慢日志与备份', result: '实例健康可观测', risk: 'maxmemory 无淘汰策略', metaphor: '运维像看仪表盘：内存、连接数、延迟都要盯。' },
  security: { subject: '安全', action: '配置 ACL、TLS 和网络隔离', result: '访问受控', risk: 'requirepass 弱密码暴露', metaphor: 'ACL 像命令白名单：谁能执行什么。' },
  module: { subject: '模块扩展', action: '加载 RedisBloom/JSON 等模块', result: '能力按需扩展', risk: '模块版本与 Redis 不兼容', metaphor: '模块像插件：增强能力但要测兼容性。' },
};

function redisCategory(label) {
  if (/What is Redis|In-memory|Key-value|Cache|Message Broker|When to choose|Redis vs SQL|Caching|Session Management|Real-time Analytics|Leaderboards/i.test(label)) return 'concept';
  if (/Starting the Server|Package Managers|Pre-compiled|Docker|Connecting using Redis CLI/i.test(label)) return 'setup';
  if (/Basic Commands|Setting and Getting|SET|GET|DEL|expire|TTL|APPEND|STRLEN|More Commands/i.test(label)) return 'command';
  if (/Strings|Hashes|Lists|Sets|Sorted Sets|Overview of Data Types|HSET|HGET|HGETALL|HDEL|HEXISTS|INCR|DECR|LLEN|SISMEMBER|ZRANK|ZRANGEBYSCORE|GEOADD|HyperLogLog|Bitmaps|Rich Data Structures/i.test(label)) return 'datatype';
  if (/Caching|Cache|Session|Leaderboard|Rate Limit|Distributed Lock/i.test(label)) return 'cache';
  if (/Pub\/Sub|UNSUBSCRIBE|SUBSCRIBE|PUBLISH|Streams|XADD|XREAD|Consumer Group/i.test(label)) return 'messaging';
  if (/Persistence|RDB|AOF|Backup and Recovery|SAVE|BGSAVE/i.test(label)) return 'persistence';
  if (/Pipelining|Atomicity|MULTI|EXEC|Lua|Transaction/i.test(label)) return 'perf';
  if (/Clustering|Sentinel|Cluster|Replication|High Availability|Sharding/i.test(label)) return 'cluster';
  if (/Memory Management|maxmemory|eviction|Slowlog|Monitoring|Latency|INFO/i.test(label)) return 'admin';
  if (/SSL|TLS|ACL|Authentication|Security|Encryption/i.test(label)) return 'security';
  if (/Redis Modules|RedisBloom|RedisJSON|RediSearch|Module/i.test(label)) return 'module';
  if (/GEO|HyperLogLog|Bitmaps/i.test(label)) return 'advanced';
  return 'command';
}

function redisDiagramKind(label, cat, i) {
  if (/What is Redis|Redis vs SQL|When to choose|In-memory Data Structure/i.test(label)) return 'compare';
  if (/SET|GET|Setting and Getting|Basic Commands|DEL|expire|TTL/i.test(label)) return 'kv';
  if (/Strings|Hashes|Lists|Sets|Sorted Sets|Overview of Data Types|HSET|HGET|INCR|DECR|LLEN|ZRANK|GEOADD|HyperLogLog|Bitmaps/i.test(label)) return 'datatype';
  if (/Caching|Cache|Session Management|Leaderboards/i.test(label)) return 'cache';
  if (/Pub\/Sub|UNSUBSCRIBE|Streams|XADD|XREAD/i.test(label)) return 'stream';
  if (/Message Broker|LPUSH|BRPOP|Queue/i.test(label)) return 'queue';
  if (/Persistence|RDB|AOF|Backup and Recovery|Data Persistence/i.test(label)) return 'persistence';
  if (/Starting the Server|Connecting using Redis CLI|Package Managers|Docker|Pre-compiled/i.test(label)) return 'admin';
  if (/Clustering|Sentinel|Cluster|High Performance and Scalability/i.test(label)) return 'cluster';
  if (/Pipelining|Atomicity|MULTI|EXEC/i.test(label)) return 'pipeline';
  if (/Memory Management|Monitoring|Slowlog|Latency|INFO/i.test(label)) return 'observe';
  if (/SSL|TLS|ACL|Security|Encryption/i.test(label)) return 'security';
  if (/Real-time Analytics|Rate Limit|Distributed Lock/i.test(label)) return 'pattern';
  if (/Redis Modules|RedisBloom/i.test(label)) return 'datatype';
  const fallbacks = ['kv', 'datatype', 'cache', 'stream', 'persistence', 'admin', 'cluster', 'pattern'];
  return fallbacks[i % fallbacks.length];
}

function redisRoute(cat, command) {
  const routes = {
    concept: [['为何用', '缓存/队列/计数', '先定场景。'], ['对比', command, 'Redis 不是万能 DB。'], ['连接', 'redis-cli PING', '确认实例活着。'], ['小实验', 'SET/GET', '感受延迟。']],
    setup: [['安装', '包管理/Docker', '版本与配置路径。'], ['启动', command, 'redis-server redis.conf。'], ['连接', 'redis-cli -h -p', 'AUTH 如有密码。'], ['检查', 'INFO server', '确认角色/版本。']],
    command: [['认 key', '命名规范', '业务:实体:id。'], ['读写', command, 'SET/GET/DEL。'], ['过期', 'EXPIRE/TTL', '缓存必有过期。'], ['避坑', '别 KEYS *', '用 SCAN。']],
    datatype: [['选结构', 'String/Hash/ZSet', '按访问模式。'], ['命令', command, '对应结构 API。'], ['组合', 'Hash 存对象', 'ZSet 做排行。'], ['内存', '看 item 大小', '避免大 key。']],
    cache: [['策略', 'Cache-Aside', 'miss 回源 DB。'], ['TTL', command, '过期与刷新。'], ['问题', '穿透/击穿/雪崩', '布隆/互斥/随机 TTL。'], ['一致性', '更新顺序', '先删缓存还是先写库要想清。']],
    advanced: [['场景', '计数/去重/地理', '选专用结构。'], ['命令', command, 'Bitmap/HLL/GEO。'], ['精度', 'HyperLogLog 近似', '接受误差换内存。'], ['验证', '内存占用', '别误当精确计数。']],
    messaging: [['模式', 'Pub/Sub vs Stream', '要不要持久。'], ['生产消费', command, 'XADD/XREADGROUP。'], ['组', 'Consumer Group', '并行消费。'], ['可靠性', 'ACK/Pending', '处理失败要重试。']],
    persistence: [['RDB', '快照周期', 'save 配置。'], ['AOF', command, 'appendfsync 策略。'], ['混合', 'Redis 7 混合持久化', '恢复速度+完整性。'], ['演练', '重启恢复', '备份必须测。']],
    perf: [['Pipeline', '批量命令', '减少 RTT。'], ['原子', command, 'MULTI/EXEC 或 Lua。'], ['热 key', '拆分/本地缓存', '避免单点热点。'], ['基准', 'redis-benchmark', '优化要有数据。']],
    cluster: [['Sentinel', '监控+切换', '主从故障转移。'], ['Cluster', command, '16384 slots。'], ['客户端', '集群路由', '同 slot 多 key。'], ['演练', 'failover', '切换要测过。']],
    admin: [['INFO', '内存/连接', '关键指标。'], ['慢日志', command, 'SLOWLOG GET。'], ['淘汰', 'maxmemory-policy', '内存满怎么办。'], ['备份', 'RDB/AOF 文件', '定期拷贝。']],
    security: [['网络', 'bind/防火墙', '别裸奔公网。'], ['认证', command, 'ACL/requirepass。'], ['TLS', '加密传输', '证书配置。'], ['最小权限', '命令级 ACL', '应用账号受限。']],
    module: [['选型', 'JSON/Search/Bloom', '按需求加载。'], ['加载', command, 'LOADMODULE。'], ['兼容', '版本匹配', '升级要测。'], ['回退', '卸载模块', '变更可逆。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const redisHeading = { concept: '认识 Redis', setup: '安装与连接', command: '基础命令', datatype: '数据结构', cache: '缓存实践', advanced: '高级结构', messaging: '消息与流', persistence: '持久化', perf: '性能与原子性', cluster: '集群与高可用', admin: '运维监控', security: '安全', module: '模块扩展' };

const redisCommands = {
  'What is Redis?': 'redis-cli PING',
  'Basic Commands / SET, GET': 'SET user:1 "{\\"name\\":\\"Ada\\"}" EX 3600',
  SET: 'SET key value EX 3600',
  GET: 'GET key',
  HSET: 'HSET user:1 name Ada score 100',
  INCR: 'INCR page:views',
  expire: 'EXPIRE session:abc 1800',
  Streams: 'XADD events * type login user 1',
  'Pub/Sub Messaging': 'PUBLISH channel msg',
  'Persistence Options': 'appendonly yes / save 900 1',
  Pipelining: 'pipeline batch commands',
  Clustering: 'redis-cli --cluster create ...',
  'Memory Management': 'CONFIG GET maxmemory-policy',
};

function emitLesson(node, i, { catFn, copy, commands, headings, subheadingSuffix, sceneSuffix, mistakeSuffix, confusionSuffix, experimentFn, routeFn, diagramFn, lessonFn, diagramType }) {
  const cat = catFn(node.label);
  const c = copy[cat];
  const command = commands[node.label] || node.label;
  const heading = `${node.label}：${headings[cat]}`;
  const subheading = `${node.label} 的重点不是背名词，而是知道它在${subheadingSuffix}里负责哪一段。`;
  const scene = `${cfg.scenePrefix} ${node.label}（${node.zh}）。${sceneSuffix}`;
  const core = `${node.label} = 用 ${command} 围绕「${c.subject}」完成「${c.action}」，目标是${c.result}。`;
  const mistake = `不要把 ${node.label} 当成孤立${mistakeSuffix}。先确认它在整条链路中的位置。`;
  const confusion = `${node.label} 容易和相邻概念混：它的边界是「${c.action}」，${confusionSuffix}。`;
  const experiment = experimentFn(command);
  const route = routeFn(cat, command);
  const diagram = diagramFn(node.label, cat, i);
  return `  ${q(node.id)}: ${lessonFn}({\n    id: ${q(node.id)},\n    label: ${q(node.label)},\n    heading: ${q(heading)},\n    subheading: ${q(subheading)},\n    scene: ${q(scene)},\n    core: ${q(core)},\n    metaphor: ${q(c.metaphor)},\n    mistake: ${q(mistake)},\n    confusion: ${q(confusion)},\n    experiment: ${q(experiment)},\n    command: ${q(command)},\n    subject: ${q(c.subject)},\n    action: ${q(c.action)},\n    result: ${q(c.result)},\n    risk: ${q(c.risk)},\n    diagram: ${q(diagram)} as ${diagramType},\n    route: ${routeCode(route)},\n  }),\n`;
}

// --- Docker ---
const dockerCategoryCopy = {
  concept: { subject: '容器概念', action: '理解容器相对 VM 的隔离与轻量', result: '知道何时用容器', risk: '把容器当轻量 VM 乱塞进程', metaphor: '容器像标准化货运箱：镜像定义规格，运行时只关心货物。' },
  tech: { subject: '底层机制', action: '理解 namespace/cgroups/联合文件系统', result: '知道容器隔离从哪来', risk: '只会 docker run 不懂原理', metaphor: '底层技术像集装箱的锁和配重：看不见但决定安全边界。' },
  setup: { subject: '环境安装', action: '安装 Docker Engine/Desktop 并验证', result: '本地可 build/run', risk: '权限/架构装错版本', metaphor: '安装像接水电气：没通后面都做不了。' },
  image: { subject: '镜像构建', action: '编写 Dockerfile 并 push 到 Registry', result: '镜像可复现分发', risk: 'latest 标签无版本、层缓存乱', metaphor: '镜像像模具：一次 build，到处 run。' },
  run: { subject: '容器运行', action: '用 run/exec/logs 管理容器生命周期', result: '应用可在容器里跑起来', risk: '容器当虚拟机长期 ssh 进去改', metaphor: '运行容器像按模具浇铸：实例应可删可重建。' },
  storage: { subject: '数据持久化', action: '用 volume/bind mount 保留数据', result: '容器删了数据还在', risk: '把数据库放可写层', metaphor: 'Volume 像外接硬盘：容器换壳数据还在。' },
  network: { subject: '容器网络', action: '配置 bridge/overlay 与服务发现', result: '多容器可互通', risk: 'host 网络模式乱用', metaphor: '容器网络像园区内部邮路：名字解析比记 IP 重要。' },
  security: { subject: '容器安全', action: '扫描镜像、非 root 运行、最小权限', result: '供应链与运行时风险可控', risk: 'root 跑生产容器', metaphor: '安全像门禁+安检：进厂前要查货也要查人。' },
  cli: { subject: 'CLI 操作', action: '熟练使用 docker 子命令排查', result: '问题能定位到镜像/容器/网络', risk: '只会 up 不会 inspect', metaphor: 'CLI 像维修工具箱：命令对应不同部件。' },
  devx: { subject: '开发体验', action: '用 Compose 编排本地多服务栈', result: '开发环境与生产更接近', risk: 'compose 配置提交前不 review', metaphor: 'Compose 像排练场：本地先把整套服务跑通。' },
};

function dockerCategory(label) {
  if (/What are Containers|Why do we need|Bare Metal vs|Introduction|OCI|Application Architecture/i.test(label)) return 'concept';
  if (/Namespaces|cgroups|Union Filesystems|Underlying Technologies|Shell Commands/i.test(label)) return 'tech';
  if (/Installation|Docker Desktop|Docker Engine|Basics of Docker|Setup/i.test(label)) return 'setup';
  if (/3rd Party Container|Container Registries|Dockerfile|Image|Build|Tag|Push|Pull/i.test(label)) return 'image';
  if (/Running Containers|docker run|Exec|Logs|Lifecycle|Restart/i.test(label)) return 'run';
  if (/Volume|Bind Mount|Data Persistence|Ephemeral|Databases/i.test(label)) return 'storage';
  if (/Networking|bridge|overlay|DNS|Port/i.test(label)) return 'network';
  if (/Image Security|Scan|Users \/ Groups|Rootless|Capabilities/i.test(label)) return 'security';
  if (/Docker CLI|docker ps|docker inspect|docker exec/i.test(label)) return 'cli';
  if (/Developer Experience|Compose|Dev Container|Hot Reload/i.test(label)) return 'devx';
  return 'run';
}

function dockerDiagramKind(label, cat, i) {
  if (/Bare Metal vs|Why do we need|What are Containers/i.test(label)) return 'compare';
  if (/Volume|Bind Mount|Data Persistence|Ephemeral/i.test(label)) return 'volume';
  if (/Networking|bridge|overlay/i.test(label)) return 'network';
  if (/Image Security|Scan|Users \/ Groups/i.test(label)) return 'security';
  if (/Dockerfile|Build|Registr|3rd Party/i.test(label)) return 'image';
  if (/Compose|Developer Experience/i.test(label)) return 'deploy';
  if (/Docker CLI|docker ps|inspect/i.test(label)) return 'admin';
  if (/Logs|Stats|inspect/i.test(label)) return 'observe';
  if (/Installation|Desktop|Engine/i.test(label)) return 'pipeline';
  if (/Running|docker run/i.test(label)) return 'container';
  const fallbacks = ['container', 'image', 'volume', 'network', 'pipeline', 'security', 'admin', 'deploy'];
  return fallbacks[i % fallbacks.length];
}

function dockerRoute(cat, command) {
  const routes = {
    concept: [['为何容器', '隔离+打包', '先对比 VM。'], ['看场景', command, '微服务/CI 常见。'], ['装环境', 'docker version', '确认 CLI 可用。'], ['跑 hello', 'docker run hello-world', '先跑通。']],
    tech: [['隔离', 'namespace', 'PID/NET/MNT。'], ['资源', command, 'cgroups 限 CPU/内存。'], ['文件系统', 'Union FS', '镜像分层。'], ['连起来', 'run 背后', '理解再调优。']],
    setup: [['选版本', 'Desktop/Engine', 'OS 架构匹配。'], ['安装', command, '官方文档步骤。'], ['权限', 'docker group', 'Linux 非 root。'], ['验证', 'hello-world', 'daemon 正常。']],
    image: [['写 Dockerfile', 'FROM/COPY/RUN', '少层多缓存。'], ['构建', command, 'docker build -t。'], ['推送', 'docker push', 'Registry 认证。'], ['拉取', 'docker pull', '固定 tag/digest。']],
    run: [['创建', 'docker run', '端口/环境变量。'], ['观察', command, 'ps/logs/stats。'], ['进入', 'docker exec', '调试别改镜像。'], ['清理', 'rm/stop', '可重建原则。']],
    storage: [['识别 ephemeral', '容器层', '删容器数据丢。'], ['命名卷', command, 'docker volume。'], ['绑定挂载', 'bind mount', '开发常用。'], ['数据库', 'volume 必须', '生产别放可写层。']],
    network: [['默认 bridge', '同网络互通', '容器名 DNS。'], ['发布端口', command, '-p host:container。'], ['自定义网络', 'docker network create', '服务隔离。'], ['跨主机', 'overlay/Swarm/K8s', '单机不够再上。']],
    security: [['扫镜像', 'trivy/grype', 'CVE 门禁。'], ['非 root', command, 'USER 指令。'], ['最小镜像', 'distroless/alpine', '面要小。'], ['运行时', 'read-only/cap-drop', '加固选项。']],
    cli: [['看状态', 'docker ps -a', '运行/退出。'], ['查细节', command, 'inspect 看配置。'], ['看日志', 'logs -f', 'stdout/stderr。'], ['资源', 'stats', 'CPU/内存。']],
    devx: [['写 compose', 'services/networks/volumes', '本地栈。'], ['启动', command, 'docker compose up。'], ['迭代', 'build+recreate', '开发循环。'], ['对齐 prod', '尽量同镜像', '减少环境差。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const dockerHeading = { concept: '理解容器', tech: '底层机制', setup: '安装配置', image: '镜像构建', run: '运行容器', storage: '数据持久化', network: '容器网络', security: '容器安全', cli: 'CLI 操作', devx: '开发体验' };
const dockerCommands = { 'What are Containers?': 'docker run hello-world', 'docker build': 'docker build -t myapp:1.0 .', 'Volume Mounts': 'docker run -v mydata:/data', 'Docker CLI': 'docker ps && docker inspect', 'Developer Experience': 'docker compose up -d' };

// --- Kubernetes ---
const k8sCategoryCopy = {
  concept: { subject: 'K8s 定位', action: '理解 Pod/控制面/调度价值', result: '知道何时上 K8s', risk: '单节点小应用硬上 K8s', metaphor: 'K8s 像机场塔台：管很多飞机起降，不是造飞机。' },
  setup: { subject: '集群搭建', action: '选托管或本地集群并 kubectl 连通', result: '有可用的 API Server', risk: 'kubeconfig 指向 prod 误操作', metaphor: '搭集群像建机场：跑道和控制塔要先通。' },
  workload: { subject: '工作负载', action: '用 Deployment/StatefulSet/Job 跑应用', result: 'Pod 可按期望副本运行', risk: '裸 Pod 无控制器', metaphor: 'Deployment 像编制表：要几个副本由它保证。' },
  config: { subject: '配置注入', action: '用 ConfigMap/Secret 注入环境', result: '配置与镜像分离', risk: 'Secret 明文 commit', metaphor: 'ConfigMap/Secret 像行李标签：同样镜像不同配置。' },
  network: { subject: '服务网络', action: '用 Service/Ingress 暴露与负载', result: '集群内外可访问', risk: 'NodePort 乱开端口', metaphor: 'Service 像内部分机号：Pod 换 IP 也能找到。' },
  storage: { subject: '存储', action: '用 PV/PVC/StorageClass 挂卷', result: '有状态应用数据持久', risk: 'emptyDir 当数据库盘', metaphor: 'PVC 像租仓库：应用申请，集群分配。' },
  scale: { subject: '资源与伸缩', action: '设 requests/limits 和 HPA', result: '资源可控、可自动扩缩', risk: '无 limits 拖垮节点', metaphor: 'HPA 像弹性用工：忙时加人，闲时减。' },
  security: { subject: '安全', action: '配置 RBAC 与 Pod 安全标准', result: '权限最小、运行时加固', risk: 'cluster-admin 给应用', metaphor: 'RBAC 像工牌：进哪个机房看角色。' },
  observe: { subject: '可观测性', action: '采集日志指标与追踪', result: '故障可定位到 Pod/节点', risk: '无监控上生产', metaphor: '监控像雷达：看不见就谈不上调度。' },
  deploy: { subject: '发布与 Helm', action: '用 Helm/CI 滚动或金丝雀发布', result: '发布可回滚可重复', risk: '手工 kubectl apply 无记录', metaphor: 'Helm 像装修模板：Chart 打包一整套资源。' },
  pattern: { subject: '部署模式', action: '选蓝绿/金丝雀/滚动策略', result: '升级风险可控', risk: '一次全量替换无回退', metaphor: '金丝雀像试吃：先给小流量验证。' },
};

function k8sCategory(label) {
  if (/Overview of Kubernetes|Why use Kubernetes|Key Concepts|Alternatives|Introduction|Containers/i.test(label)) return 'concept';
  if (/Setting up|Managed Provider|Local Cluster|kubectl|minikube|kind|EKS|GKE|AKS/i.test(label)) return 'setup';
  if (/Pods|ReplicaSets|Deployments|StatefulSets|Jobs|DaemonSets|Running Applications|Deploying your First/i.test(label)) return 'workload';
  if (/ConfigMaps|Secrets|Configuration Management|Injecting Pod/i.test(label)) return 'config';
  if (/Services|Networking|Ingress|Load Balanc|External Access|Network Security|RBAC/i.test(label) && !/Role Based Access/i.test(label)) return 'network';
  if (/Storage|Volumes|PV|PVC|Persistent/i.test(label)) return 'storage';
  if (/Resource Management|HPA|Horizontal Pod|requests|limits|Quota/i.test(label)) return 'scale';
  if (/RBAC|Role Based|Pod Security|Security Context|Admission/i.test(label)) return 'security';
  if (/Monitoring|Logging|Observability|Metrics|Tracing/i.test(label)) return 'observe';
  if (/Helm|CI \/ CD|Deployment Patterns|Blue|Canary|Rolling/i.test(label)) return /Helm/i.test(label) ? 'deploy' : 'pattern';
  if (/Advanced|Operator|CRD|Custom Resource/i.test(label)) return 'pattern';
  return 'workload';
}

function k8sDiagramKind(label, cat, i) {
  if (/Overview|Why use|Alternatives/i.test(label)) return 'journey';
  if (/Setting up|Managed|Local Cluster/i.test(label)) return 'orchestration';
  if (/Pods|Deployments|StatefulSets|Jobs|ReplicaSets/i.test(label)) return 'workload';
  if (/ConfigMaps|Secrets/i.test(label)) return 'config';
  if (/Services|Ingress|Load Balanc|Networking/i.test(label)) return 'network';
  if (/Storage|Volumes|PV|PVC/i.test(label)) return 'storage';
  if (/HPA|Resource Management|requests|limits/i.test(label)) return 'scale';
  if (/RBAC|Pod Security|Security/i.test(label)) return 'security';
  if (/Monitoring|Logging/i.test(label)) return 'observe';
  if (/Helm/i.test(label)) return 'deploy';
  if (/CI \/ CD/i.test(label)) return 'pipeline';
  if (/Deployment Patterns|Blue|Canary|Advanced/i.test(label)) return 'pattern';
  const fallbacks = ['workload', 'network', 'config', 'scale', 'orchestration', 'deploy', 'security', 'observe'];
  return fallbacks[i % fallbacks.length];
}

function k8sRoute(cat, command) {
  const routes = {
    concept: [['为何 K8s', '调度+自愈', '先评估复杂度。'], ['核心对象', command, 'Pod/Node/Control Plane。'], ['连集群', 'kubectl get nodes', 'API 可达。'], ['首个应用', 'kubectl apply', '从 Deployment 开始。']],
    setup: [['选方式', '托管/本地', '学习用 kind/minikube。'], ['安装', command, 'kubectl context。'], ['验证', 'get nodes/pods -A', '组件健康。'], ['权限', 'kubeconfig', '别混 prod。']],
    workload: [['最小单元', 'Pod', '一或多个容器。'], ['控制器', command, 'Deployment/StatefulSet。'], ['声明副本', 'replicas', '期望状态。'], ['观察', 'get/describe/logs', 'Rollout 状态。']],
    config: [['非敏感', 'ConfigMap', 'env/volume 注入。'], ['敏感', command, 'Secret 管理。'], ['分离', '镜像不含配置', '12-factor。'], ['轮换', 'Secret 更新', '滚动重启。']],
    network: [['ClusterIP', '集群内访问', 'Service 选类型。'], ['对外', command, 'Ingress/LB。'], ['DNS', 'service.namespace', '服务发现。'], ['策略', 'NetworkPolicy', '微隔离。']],
    storage: [['申请', 'PVC', '应用视角。'], ['供给', command, 'PV/StorageClass。'], ['挂载', 'volumeMount', '路径权限。'], ['StatefulSet', '稳定标识', '有状态场景。']],
    scale: [['requests/limits', '调度基础', '先设再跑。'], ['HPA', command, 'CPU/自定义指标。'], ['VPA/Cluster', '进阶', '按场景。'], ['压测', '验证伸缩', '别靠猜。']],
    security: [['RBAC', 'Role/Binding', '最小权限。'], ['SA', command, 'Pod 身份。'], ['PSA', '安全标准', 'restricted 目标。'], ['审计', 'audit log', '谁改了啥。']],
    observe: [['日志', 'kubectl logs', 'stdout 采集。'], ['指标', command, 'Prometheus。'], ['追踪', 'OpenTelemetry', '链路。'], ['告警', 'SLO', '可行动。']],
    deploy: [['Chart', '模板+values', '版本化。'], ['发布', command, 'helm upgrade。'], ['回滚', 'helm rollback', '失败可退。'], ['GitOps', 'Argo/Flux', '声明同步。']],
    pattern: [['滚动', 'RollingUpdate', '默认策略。'], ['蓝绿', command, '两套切换。'], ['金丝雀', '流量比例', '逐步验证。'], ['演练', '故障注入', '发布前测。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const k8sHeading = { concept: '认识 Kubernetes', setup: '搭建集群', workload: '工作负载', config: '配置管理', network: '服务网络', storage: '存储卷', scale: '资源伸缩', security: '集群安全', observe: '监控日志', deploy: 'Helm 发布', pattern: '部署模式' };
const k8sCommands = { 'Overview of Kubernetes': 'kubectl get nodes', Pods: 'kubectl apply -f pod.yaml', Deployments: 'kubectl rollout status deploy/app', 'Horizontal Pod Autoscaler (HPA)': 'kubectl autoscale deploy app', 'Helm Charts': 'helm upgrade --install app ./chart' };

// --- DevOps ---
const devopsCategoryCopy = {
  language: { subject: '脚本语言', action: '用 Python/Go/Shell 写自动化', result: '可维护的运维脚本', risk: '一次性脚本进生产无 review', metaphor: '语言像扳手规格：选对工具效率差很多。' },
  os: { subject: '操作系统与终端', action: '在 Linux/Shell 上完成运维与排障', result: '远程服务器可操作', risk: '只会 GUI 不会命令行', metaphor: '终端像维修通道：生产环境主要靠它。' },
  os: { subject: '操作系统', action: '掌握 Linux/Windows 与终端操作', result: '能在服务器上排障', risk: '只会 GUI 不会 shell', metaphor: 'OS 像工地地面：不稳上面都晃。' },
  vcs: { subject: '版本控制', action: '用 Git 协作并触发流水线', result: '变更可追溯', risk: '直接在 main 改无 PR', metaphor: 'Git 像施工日志：谁改了什么有据可查。' },
  network: { subject: '网络基础', action: '理解 DNS/TCP/代理与防火墙', result: '连通性问题能查', risk: '只会 ping 不懂 DNS', metaphor: '网络像公路网：协议是交规。' },
  cloud: { subject: '云平台', action: '使用 AWS/GCP/Azure 等托管服务', result: '基础设施可弹性获取', risk: '云账单无预算告警', metaphor: '云像租赁厂房：快但要把关成本和安全。' },
  iac: { subject: '基础设施即代码', action: '用 Terraform/Ansible/CloudFormation Provisioning', result: '环境可重复创建', risk: '手工改云控制台漂移', metaphor: 'IaC 像施工图：改图再施工，别现场乱敲。' },
  cicd: { subject: 'CI/CD', action: '搭建流水线自动测试与发布', result: '提交到上线自动化', risk: '无测试门禁直接 deploy', metaphor: 'CI/CD 像流水线质检：每站都要过。' },
  monitor: { subject: '监控告警', action: '用 Prometheus/Grafana 等观测系统', result: '故障可发现可定位', risk: '告警太多等于没告警', metaphor: '监控像体检：指标异常要会解读。' },
  orchestration: { subject: '容器编排', action: '用 Kubernetes 管理容器集群', result: '大规模容器可调度', risk: '未懂 Docker 直接上 K8s', metaphor: '编排像调度中心：容器是车辆。' },
  artifact: { subject: '制品管理', action: '管理镜像/包/构建产物版本', result: '发布物可追溯', risk: 'latest 制品上生产', metaphor: '制品库像仓库货架：每件货有批次号。' },
  mesh: { subject: '服务网格', action: '用 Istio/Linkerd 治理微服务流量', result: ' mTLS/限流/观测统一', risk: '网格复杂度超过收益', metaphor: 'Service Mesh 像交通警察：管车与车之间规则。' },
  pattern: { subject: '云设计模式', action: '应用队列、熔断、缓存等模式', result: '架构可扩展可靠', risk: '模式堆砌无业务驱动', metaphor: '设计模式像标准件：解决问题再选用。' },
};

function devopsCategory(label) {
  if (/Python|Ruby|Go|Rust|JavaScript|Learn a Programming Language/i.test(label)) return 'language';
  if (/Windows|Ubuntu|Debian|RHEL|FreeBSD|OpenBSD|NetBSD|SUSE|Operating System|Terminal|Bash|Power Shell|Vim|Text Manipulation|Process Monitoring|Performance Monitoring/i.test(label)) return 'os';
  if (/Git|GitHub|GitLab|Bitbucket|Version Control|VCS Hosting/i.test(label)) return 'vcs';
  if (/Networking|Forward Proxy|Reverse Proxy|DNS|TCP|HTTP|IMAP|Protocol/i.test(label)) return 'network';
  if (/AWS|Azure|GCP|Alibaba|Cloud Providers|Cloud Specific/i.test(label)) return 'cloud';
  if (/Terraform|Ansible|Chef|Puppet|Salt|CloudFormation|Configuration Management|Provisioning|Packer/i.test(label)) return 'iac';
  if (/CI \/ CD|Jenkins|GitHub Actions|GitLab CI|CircleCI|Travis|Argo CD|Spinnaker/i.test(label)) return 'cicd';
  if (/Prometheus|Grafana|Datadog|New Relic|Infrastructure Monitoring|Logging|ELK|Loki/i.test(label)) return 'monitor';
  if (/Kubernetes|Docker|Container Orchestration|Container/i.test(label)) return 'orchestration';
  if (/Nexus|Artifactory|Harbor|Artifact Management|Container Registries/i.test(label)) return 'artifact';
  if (/Istio|Linkerd|Consul|Service Mesh|Envoy/i.test(label)) return 'mesh';
  if (/Cloud Design Patterns|Circuit|Queue|Cache|Saga/i.test(label)) return 'pattern';
  return 'cicd';
}

function devopsDiagramKind(label, cat, i) {
  if (/Learn a Programming Language|Python|Go|Ruby/i.test(label)) return 'language';
  if (/Git|GitHub|GitLab|Bitbucket|Version Control/i.test(label)) return 'git';
  if (/AWS|Azure|GCP|Alibaba|Cloud Providers/i.test(label)) return 'cloud';
  if (/Prometheus|Grafana|Monitoring|Logging|Infrastructure Monitoring/i.test(label)) return 'observe';
  if (/Docker|Container(?! Orchestration)/i.test(label)) return 'container';
  if (/Kubernetes|Container Orchestration/i.test(label)) return 'orchestration';
  if (/Terraform|Ansible|CloudFormation|Configuration Management|Provisioning/i.test(label)) return 'config';
  if (/Forward Proxy|Reverse Proxy|Networking/i.test(label)) return 'network';
  if (/Istio|Linkerd|Service Mesh/i.test(label)) return 'pattern';
  if (/Cloud Design Patterns|Circuit|Saga/i.test(label)) return 'pattern';
  if (/CI \/ CD|Jenkins|GitHub Actions/i.test(label)) return 'pipeline';
  const fallbacks = ['journey', 'pipeline', 'cloud', 'observe', 'config', 'orchestration', 'git', 'pattern'];
  return fallbacks[i % fallbacks.length];
}

function devopsRoute(cat, command) {
  const routes = {
    language: [['选型', 'Python/Go/Shell', '团队熟悉优先。'], ['脚本', command, 'API/CLI 自动化。'], ['规范', 'lint/test', '脚本也要 review。'], ['接入', 'CI 步骤', '可重复执行。']],
    os: [['终端', 'bash/zsh', '远程排障必备。'], ['进程', command, 'ps/top/htop。'], ['文件', 'grep/find', '日志与配置。'], ['权限', 'user/sudo', '最小权限。']],
    vcs: [['分支', 'feature/main', 'PR 流程。'], ['协作', command, 'remote/merge。'], ['钩子', 'pre-commit', '质量门禁。'], ['触发', 'push → CI', '自动化起点。']],
    network: [['分层', 'DNS/L4/L7', '问题定位。'], ['代理', command, 'forward vs reverse。'], ['防火墙', '安全组', '最小开放。'], ['排查', 'curl/dig', '连通性证据。']],
    cloud: [['账号', 'IAM/组织', '权限边界。'], ['区域', command, 'AZ/Region 选型。'], ['服务', '计算/存储/网络', '按需组合。'], ['成本', '预算告警', '别裸奔账单。']],
    iac: [['声明', 'Terraform/Ansible', '期望状态。'], ['计划', command, 'plan/diff。'], ['应用', 'apply/playbook', '可审计。'], ['漂移', '检测', '禁手改控制台。']],
    cicd: [['触发', 'push/tag', '事件驱动。'], ['CI', command, 'test/build/scan。'], ['CD', 'deploy', '灰度/回滚。'], ['门禁', '质量阈值', '不过不发布。']],
    monitor: [['指标', 'Prometheus', 'RED/USE。'], ['看板', command, 'Grafana。'], ['日志', '集中检索', '关联 trace。'], ['告警', 'Runbook', '可行动。']],
    orchestration: [['镜像', '不可变', 'Registry。'], ['编排', command, 'K8s manifest。'], ['发布', 'rolling', '健康检查。'], ['回滚', '版本', '快速恢复。']],
    artifact: [['版本', 'semver/digest', '可追溯。'], ['存储', command, 'Harbor/Nexus。'], ['扫描', 'CVE', '入库门禁。'], ['晋级', 'dev→prod', '晋升流程。']],
    mesh: [['何时用', '多语言微服务', '评估复杂度。'], ['流量', command, 'mTLS/限流。'], ['观测', 'sidecar', '统一指标。'], ['渐进', '试点服务', '别一次全量。']],
    pattern: [['识别问题', '扩展/可用/解耦', '先问题后模式。'], ['选型', command, 'Queue/CB/Cache。'], ['落地', '云原生服务', 'SQS/SNS 等。'], ['验证', '故障演练', '模式要实测。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const devopsHeading = { language: '自动化语言', os: '系统与终端', vcs: '版本控制', network: '网络基础', cloud: '云平台', iac: '基础设施即代码', cicd: 'CI/CD 流水线', monitor: '监控观测', orchestration: '容器编排', artifact: '制品管理', mesh: '服务网格', pattern: '云设计模式' };
const devopsCommands = { Python: 'python deploy.py --env staging', Git: 'git push origin main', AWS: 'aws sts get-caller-identity', Prometheus: 'prometheus.yml scrape configs', 'CI / CD Tools': 'github actions workflow', Terraform: 'terraform plan && terraform apply', Kubernetes: 'kubectl apply -f deployment.yaml' };

// --- System Design ---
const sdCategoryCopy = {
  intro: { subject: '系统设计方法', action: '从需求、估算、接口到组件划分', result: '面试/项目有结构化思路', risk: '一上来画微服务', metaphor: '系统设计像盖楼：先需求面积，再结构图纸。' },
  cap: { subject: 'CAP 与一致性', action: '在 C/A/P 间做业务权衡', result: '一致性预期清晰', risk: '既要强一致又要无限可用', metaphor: 'CAP 像三角约束：三边不能同时拉满。' },
  scale: { subject: '扩展性', action: '区分垂直/水平扩展与瓶颈', result: '性能问题有优化路径', risk: '只加 CPU 不拆瓶颈', metaphor: '扩展像拓宽路或增车道：要看堵点在哪。' },
  cache: { subject: '缓存', action: '设计 CDN/应用缓存/数据库缓存层', result: '读性能提升且可控', risk: '缓存与 DB 不一致', metaphor: '缓存像前台复印件：原件变了要同步。' },
  storage: { subject: '存储设计', action: '选 SQL/NoSQL/KV 与分片复制', result: '数据层匹配访问模式', risk: '一种数据库包打天下', metaphor: '存储像仓库类型：冷链/常温/危险品分库。' },
  pattern: { subject: '架构模式', action: '选单体/微服务/事件驱动等', result: '边界清晰可演进', risk: '微服务过早拆分', metaphor: '架构模式像城市分区：先功能聚类再拆分。' },
  messaging: { subject: '异步消息', action: '用队列/事件总线解耦', result: '峰值削峰、系统解耦', risk: '同步链路过长', metaphor: '消息队列像快递中转站：发送方不必等签收。' },
  reliability: { subject: '可靠性', action: '设计重试、熔断、 failover', result: '部分故障不拖垮全局', risk: '无超时无降级', metaphor: '熔断像电闸：短路时先跳闸保护全网。' },
  gateway: { subject: '网关模式', action: '用 API Gateway 路由/聚合/鉴权', result: '客户端与后端解耦', risk: '网关成上帝对象', metaphor: '网关像酒店前台：对外一个入口，对内分服务。' },
  security: { subject: '安全设计', action: '边界认证、授权与零信任', result: '攻击面可控', risk: '内网默认信任', metaphor: '安全像洋葱：多层防御，每层都要验证。' },
  observe: { subject: '监控', action: '定义 SLI/SLO 与告警', result: '可用性可度量', risk: '无 SLO 谈高可用', metaphor: 'SLO 像合同条款：99.9% 要可测。' },
  impl: { subject: '落地实现', action: '从设计到迭代与权衡记录', result: '设计可执行可复盘', risk: '设计文档与实现脱节', metaphor: '落地像施工图交底：设计要开发能照着做。' },
  network: { subject: 'DNS 与网络', action: '设计域名解析、CDN 与负载路径', result: '全球访问路径清晰', risk: 'DNS TTL 过长导致切换慢', metaphor: 'DNS 像电话簿：名字到地址的映射。' },
  api: { subject: '应用通信', action: '设计 API 与实时通信方式', result: '客户端与服务协作清晰', risk: '协议选型不考虑客户端能力', metaphor: 'API 像服务窗口：格式约定好才能办事。' },
};

function sdCategory(label) {
  if (/What is System Design|How to approach|Introduction|Performance vs Scalability|Latency vs Throughput/i.test(label)) return 'intro';
  if (/CAP Theorem|Availability vs Consistency|Weak Consistency|Strong Consistency|Eventual Consistency|Consistency Patterns|Availability Patterns|Fail-Over|Replication|Availability in Numbers/i.test(label)) return 'cap';
  if (/Performance Antipatterns|Noisy Neighbor|Scalability|Sharding|Federation|Compute Resource/i.test(label)) return 'scale';
  if (/Caching|Application Caching|CDN|Content Delivery|Push CDNs|Pull CDNs/i.test(label)) return 'cache';
  if (/Key-Value Store|Database|SQL|NoSQL|Storage|Data Partition/i.test(label)) return 'storage';
  if (/Microservices|Monolith|Service Discovery|Leader Election|Design Patterns/i.test(label)) return 'pattern';
  if (/Background Jobs|Asynchronism|Messaging|Event-Driven|Message Queue|Pub\/Sub|Schedule Driven/i.test(label)) return 'messaging';
  if (/Circuit Breaker|Reliability Patterns|Retry|Timeout|Bulkhead|Throttling/i.test(label)) return 'reliability';
  if (/Gateway Routing|Gateway Aggregation|Gatekeeper|API Gateway|Load Balancer/i.test(label)) return 'gateway';
  if (/Security|Authentication|Authorization|OAuth|TLS|Encryption/i.test(label)) return 'security';
  if (/Monitoring|Observability|Logging|Metrics|SLO|SLI/i.test(label)) return 'observe';
  if (/Design & Implementation|Design Documentation|Trade-off/i.test(label)) return 'impl';
  if (/Domain Name System|DNS/i.test(label)) return 'network';
  if (/Application Layer|Communication|WebSockets|SSE/i.test(label)) return 'api';
  return 'pattern';
}

function sdDiagramKind(label, cat, i) {
  if (/What is System Design|How to approach/i.test(label)) return 'journey';
  if (/CAP|Availability vs Consistency|Consistency Patterns|Strong|Eventual|Weak/i.test(label)) return 'compare';
  if (/Performance vs Scalability|Latency vs Throughput|Sharding|Federation|Noisy Neighbor/i.test(label)) return 'scale';
  if (/Caching|CDN|Application Caching|Push CDNs|Pull CDNs/i.test(label)) return 'cache';
  if (/Key-Value Store|Database|Storage|Partition/i.test(label)) return 'storage';
  if (/Microservices|Monolith|Design Patterns|Deployment Stamps/i.test(label)) return 'pattern';
  if (/Background Jobs|Asynchronism|Messaging|Event-Driven|Schedule Driven/i.test(label)) return 'queue';
  if (/Circuit Breaker|Reliability|Retry|Fail-Over|Bulkhead/i.test(label)) return 'reliability';
  if (/Gateway|Gatekeeper|Aggregation|Routing/i.test(label)) return 'proxy';
  if (/Security|Authentication|Gatekeeper/i.test(label)) return 'security';
  if (/Monitoring|Observability|SLO/i.test(label)) return 'observe';
  if (/Application Layer|Communication|WebSockets/i.test(label)) return 'api';
  if (/Event-Driven|Pub\/Sub/i.test(label)) return 'stream';
  const fallbacks = ['pattern', 'scale', 'cache', 'queue', 'reliability', 'proxy', 'observe', 'storage'];
  return fallbacks[i % fallbacks.length];
}

function sdRoute(cat, command) {
  const routes = {
    intro: [[' Clarify', '功能/用户/规模', '先问再画。'], ['估算', command, 'QPS/存储/带宽。'], ['接口', 'API 草图', '读写路径。'], ['组件', '高层架构', '再深入。']],
    cap: [['读 CAP', '三选二', '分区必存在。'], ['业务', command, '要 CP 还是 AP。'], ['模式', '强一致/最终一致', '具体策略。'], ['验证', '故障场景', '脑裂怎么办。']],
    scale: [['找瓶颈', 'CPU/IO/网络', 'profile 思维。'], ['垂直', command, '先简单扩容。'], ['水平', '无状态+LB', '分片/复制。'], ['反模式', '邻居干扰', '资源隔离。']],
    cache: [['层级', 'CDN/Redis/本地', '多级缓存。'], ['策略', command, 'TTL/失效。'], ['一致', '更新顺序', 'cache aside。'], ['CDN', '静态资源', '边缘加速。']],
    storage: [['访问模式', '读多写少?', '驱动选型。'], ['SQL vs NoSQL', command, 'KV/文档/图。'], ['分片', 'shard key', '热点规避。'], ['复制', '主从/多主', 'RPO/RTO。']],
    pattern: [['边界', '单体 vs 微服务', '团队/规模。'], ['拆分', command, '按业务能力。'], ['通信', 'sync/async', '耦合度。'], ['演进', '先单体', '必要时再拆。']],
    messaging: [['解耦', '队列/事件', '异步边界。'], ['语义', command, 'at-least-once 等。'], ['顺序', '分区 key', '消费组。'], ['后台任务', 'worker', '重试幂等。']],
    reliability: [['超时', '设上限', '别无限等。'], ['重试', command, '指数退避。'], ['熔断', 'Circuit Breaker', '失败隔离。'], ['降级', 'fallback', '保核心功能。']],
    gateway: [['入口', '统一 API', '路由规则。'], ['聚合', command, '减少往返。'], ['横切', '鉴权/限流', '别进每个服务。'], ['BFF', '按客户端', '必要时拆分。']],
    security: [['边界', '零信任', '内外都要验。'], ['认证', command, 'OAuth/JWT。'], ['授权', 'RBAC/ABAC', '最小权限。'], ['传输', 'TLS', '静态加密。']],
    observe: [['SLI', '选指标', '延迟/错误/吞吐。'], ['SLO', command, '目标可用性。'], ['告警', '用户影响', '少而准。'], ['复盘', 'postmortem', '无 blame。']],
    impl: [['文档', 'ADR/设计说明', '权衡记录。'], ['迭代', command, 'MVP 先上。'], ['对齐', 'review 设计', '开发测试参与。'], ['复盘', '上线后指标', '设计是否成立。']],
    network: [['DNS', '解析链路', 'TTL/缓存。'], ['负载', command, 'L4/L7。'], ['地理', '多区域', '延迟与合规。'], ['故障', 'DNS 挂了', '备用方案。']],
    api: [['协议', 'REST/GraphQL', '客户端需求。'], ['实时', command, 'WS/SSE/长轮询。'], ['版本', '兼容策略', '别 break client。'], ['限流', '保护后端', '公平使用。']],
  };
  return routes[cat].map(([label, title, text]) => ({ label, title, text }));
}

const sdHeading = { intro: '系统设计方法', cap: 'CAP 与一致性', scale: '扩展性', cache: '缓存设计', storage: '存储选型', pattern: '架构模式', messaging: '异步消息', reliability: '可靠性', gateway: '网关设计', security: '安全设计', observe: '监控与 SLO', impl: '设计落地', network: 'DNS 与网络', api: '应用通信' };
const sdCommands = { 'What is System Design?': '需求 → 估算 → 高层设计 → 深入', 'CAP Theorem': 'Partition 发生时 CP vs AP 取舍', 'Content Delivery Networks': 'CDN edge cache static assets', 'Circuit Breaker': 'open/half-open/closed states', 'Microservices': 'service boundaries by domain', 'Key-Value Store': 'consistent hashing + replication' };

const SLUG_HANDLERS = {
  docker: {
    catFn: dockerCategory, copy: dockerCategoryCopy, commands: dockerCommands, headings: dockerHeading,
    subheadingSuffix: 'Docker 容器链路', sceneSuffix: '先跑一条 docker 命令，再看容器/镜像/网络变化。',
    mistakeSuffix: '命令', confusionSuffix: '不是整个容器生态', experimentFn: (cmd) => `执行 \`${cmd}\`：记录 docker ps / docker inspect 前后差异。`,
    routeFn: dockerRoute, diagramFn: dockerDiagramKind,
  },
  kubernetes: {
    catFn: k8sCategory, copy: k8sCategoryCopy, commands: k8sCommands, headings: k8sHeading,
    subheadingSuffix: 'Kubernetes 集群链路', sceneSuffix: '先用 kubectl 对测试集群执行命令，再看 Pod/Service 状态。',
    mistakeSuffix: '对象', confusionSuffix: '不是整个 K8s 生态', experimentFn: (cmd) => `执行 \`${cmd}\`：记录 kubectl get/describe 输出变化。`,
    routeFn: k8sRoute, diagramFn: k8sDiagramKind,
  },
  devops: {
    catFn: devopsCategory, copy: devopsCategoryCopy, commands: devopsCommands, headings: devopsHeading,
    subheadingSuffix: 'DevOps 交付链路', sceneSuffix: '先在本地或 CI 环境跑通一步，再看流水线/监控反馈。',
    mistakeSuffix: '工具名', confusionSuffix: '不是整个 DevOps 工具链', experimentFn: (cmd) => `围绕 \`${cmd}\` 做一次最小自动化或流水线步骤验证。`,
    routeFn: devopsRoute, diagramFn: devopsDiagramKind,
  },
  'system-design': {
    catFn: sdCategory, copy: sdCategoryCopy, commands: sdCommands, headings: sdHeading,
    subheadingSuffix: '系统设计决策链', sceneSuffix: '先写需求与估算，再画组件图并标注权衡。',
    mistakeSuffix: '名词', confusionSuffix: '不是整张架构图的全部', experimentFn: (cmd) => `用 \`${cmd}\` 做一页纸设计：组件、数据流、瓶颈与权衡各写一条。`,
    routeFn: sdRoute, diagramFn: sdDiagramKind,
  },
};

function buildBody() {
  let body = '';
  for (const [i, node] of nodes.entries()) {
    if (slug === 'golang') {
      const cat = goCategory(node.label);
      const c = goCategoryCopy[cat];
      const command = goCommands[node.label] || node.label;
      const heading = `${node.label}：${goHeading[cat]}`;
      const subheading = `${node.label} 的重点不是背语法，而是知道它在 Go 后端链路里负责哪一段。`;
      const scene = `${cfg.scenePrefix} ${node.label}（${node.zh}）。先写一个小可运行例子，再回头看概念。`;
      const core = `${node.label} = 用 ${command} 围绕「${c.subject}」完成「${c.action}」，目标是${c.result}。`;
      const mistake = `不要把 ${node.label} 当成孤立 API。先确认它属于语法、并发、Web、数据还是工具链。`;
      const confusion = `${node.label} 容易和相邻概念混：它的边界是「${c.action}」，不是整个 Go 生态。`;
      const experiment = `围绕 \`${command}\` 建最小 demo：go run / go test 跑通并记录输出。`;
      const route = goRoute(cat, command);
      const diagram = goDiagramKind(node.label, cat, i);
      body += `  ${q(node.id)}: ${cfg.lessonFn}({\n    id: ${q(node.id)},\n    label: ${q(node.label)},\n    heading: ${q(heading)},\n    subheading: ${q(subheading)},\n    scene: ${q(scene)},\n    core: ${q(core)},\n    metaphor: ${q(c.metaphor)},\n    mistake: ${q(mistake)},\n    confusion: ${q(confusion)},\n    experiment: ${q(experiment)},\n    command: ${q(command)},\n    subject: ${q(c.subject)},\n    action: ${q(c.action)},\n    result: ${q(c.result)},\n    risk: ${q(c.risk)},\n    diagram: ${q(diagram)} as ${cfg.diagramType},\n    route: ${routeCode(route)},\n  }),\n`;
    } else if (slug === 'postgresql') {
      const cat = pgCategory(node.label);
      const c = pgCategoryCopy[cat];
      const command = pgCommands[node.label] || node.label;
      const heading = `${node.label}：${pgHeading[cat]}`;
      const subheading = `${node.label} 的重点不是背命令，而是知道它在 PostgreSQL 运维/开发链路里负责哪一段。`;
      const scene = `${cfg.scenePrefix} ${node.label}（${node.zh}）。先连测试库执行一条命令，再看系统目录或日志。`;
      const core = `${node.label} = 用 ${command} 围绕「${c.subject}」完成「${c.action}」，目标是${c.result}。`;
      const mistake = `不要把 ${node.label} 当成孤立名词。先确认它属于建模、查询、索引、事务、备份还是监控。`;
      const confusion = `${node.label} 容易和相邻概念混：它的边界是「${c.action}」，不是整个 DBA 工作。`;
      const experiment = `在测试实例上练 \`${command}\`：记录 SQL/配置变更前后 pg_stat 或 EXPLAIN 输出。`;
      const route = pgRoute(cat, command);
      const diagram = pgDiagramKind(node.label, cat, i);
      body += `  ${q(node.id)}: ${cfg.lessonFn}({\n    id: ${q(node.id)},\n    label: ${q(node.label)},\n    heading: ${q(heading)},\n    subheading: ${q(subheading)},\n    scene: ${q(scene)},\n    core: ${q(core)},\n    metaphor: ${q(c.metaphor)},\n    mistake: ${q(mistake)},\n    confusion: ${q(confusion)},\n    experiment: ${q(experiment)},\n    command: ${q(command)},\n    subject: ${q(c.subject)},\n    action: ${q(c.action)},\n    result: ${q(c.result)},\n    risk: ${q(c.risk)},\n    diagram: ${q(diagram)} as ${cfg.diagramType},\n    route: ${routeCode(route)},\n  }),\n`;
    } else if (slug === 'mongodb') {
      const cat = mongoCategory(node.label);
      const c = mongoCategoryCopy[cat];
      const command = mongoCommands[node.label] || node.label;
      const heading = `${node.label}：${mongoHeading[cat]}`;
      const subheading = `${node.label} 的重点不是背命令，而是知道它在 MongoDB 文档库链路里负责哪一段。`;
      const scene = `${cfg.scenePrefix} ${node.label}（${node.zh}）。先用 mongosh 连测试库跑一条命令，再看返回文档。`;
      const core = `${node.label} = 用 ${command} 围绕「${c.subject}」完成「${c.action}」，目标是${c.result}。`;
      const mistake = `不要把 ${node.label} 当成孤立名词。先确认它属于建模、CRUD、查询、索引、聚合还是运维。`;
      const confusion = `${node.label} 容易和相邻概念混：它的边界是「${c.action}」，不是整个 MongoDB 生态。`;
      const experiment = `在测试库执行 \`${command}\`：对比 explain/返回文档前后差异。`;
      const route = mongoRoute(cat, command);
      const diagram = mongoDiagramKind(node.label, cat, i);
      body += `  ${q(node.id)}: ${cfg.lessonFn}({\n    id: ${q(node.id)},\n    label: ${q(node.label)},\n    heading: ${q(heading)},\n    subheading: ${q(subheading)},\n    scene: ${q(scene)},\n    core: ${q(core)},\n    metaphor: ${q(c.metaphor)},\n    mistake: ${q(mistake)},\n    confusion: ${q(confusion)},\n    experiment: ${q(experiment)},\n    command: ${q(command)},\n    subject: ${q(c.subject)},\n    action: ${q(c.action)},\n    result: ${q(c.result)},\n    risk: ${q(c.risk)},\n    diagram: ${q(diagram)} as ${cfg.diagramType},\n    route: ${routeCode(route)},\n  }),\n`;
    } else if (slug === 'redis') {
      const cat = redisCategory(node.label);
      const c = redisCategoryCopy[cat];
      const command = redisCommands[node.label] || node.label;
      const heading = `${node.label}：${redisHeading[cat]}`;
      const subheading = `${node.label} 的重点不是背命令，而是知道它在 Redis 缓存/消息链路里负责哪一段。`;
      const scene = `${cfg.scenePrefix} ${node.label}（${node.zh}）。先用 redis-cli 连本地实例跑命令，再看内存/TTL 变化。`;
      const core = `${node.label} = 用 ${command} 围绕「${c.subject}」完成「${c.action}」，目标是${c.result}。`;
      const mistake = `不要把 ${node.label} 当成孤立命令。先确认它属于缓存、数据结构、消息、持久化还是集群。`;
      const confusion = `${node.label} 容易和相邻概念混：它的边界是「${c.action}」，不是整个 Redis 能力清单。`;
      const experiment = `执行 \`${command}\`：记录 INFO memory、TTL 或 XINFO 输出变化。`;
      const route = redisRoute(cat, command);
      const diagram = redisDiagramKind(node.label, cat, i);
      body += `  ${q(node.id)}: ${cfg.lessonFn}({\n    id: ${q(node.id)},\n    label: ${q(node.label)},\n    heading: ${q(heading)},\n    subheading: ${q(subheading)},\n    scene: ${q(scene)},\n    core: ${q(core)},\n    metaphor: ${q(c.metaphor)},\n    mistake: ${q(mistake)},\n    confusion: ${q(confusion)},\n    experiment: ${q(experiment)},\n    command: ${q(command)},\n    subject: ${q(c.subject)},\n    action: ${q(c.action)},\n    result: ${q(c.result)},\n    risk: ${q(c.risk)},\n    diagram: ${q(diagram)} as ${cfg.diagramType},\n    route: ${routeCode(route)},\n  }),\n`;
    } else if (SLUG_HANDLERS[slug]) {
      body += emitLesson(node, i, { ...SLUG_HANDLERS[slug], lessonFn: cfg.lessonFn, diagramType: cfg.diagramType });
    }
  }
  return body;
}

const header = readFileSync(cfg.templatePath, 'utf8');
const body = buildBody();
const footer = `\n};\n\nexport function ${cfg.hasFn}(id: string): boolean {\n  return id in ${cfg.exportName};\n}\n\nexport function ${cfg.getFn}(id: string): TeachingLesson | undefined {\n  return ${cfg.exportName}[id];\n}\n`;

writeFileSync(cfg.outPath, header + body + footer);
console.log(`wrote ${nodes.length} ${slug} teaching lessons -> ${cfg.outPath}`);
