import type { DeepTutorial } from '../deep-types';

export const GOLANG_DEEP_TUTORIALS_6: Record<string, DeepTutorial> = {
  'go vet': {
    mentalModel: 'go vet是Go的静态分析器——编译时检查可疑代码，不会跑逻辑但能抓潜在bug。',
    sections: [
      { title: '常用检查', content: 'printf参数不匹配、不可达代码、loop变量捕获(Go 1.22前)、锁拷贝、错误的tag格式。go vet ./...扫描所有。' },
      { title: '集成方式', content: 'go test自动运行vet。golangci-lint集成vet。CI中go vet ./...否则不通过。IDE(gopls)实时vet。' },
    ],
    diagnosis: [{ symptom: 'go vet报错但又没有真正的bug', cause: 'vet的检查是启发式的可能有误报', fix: 'vet的告警值得关注。确认真的是误报可用//nolint注释。或用-json查看详情。' }],
    exercises: [
      { level: '基础', task: '用go vet检查代码', hint: 'go vet ./...', answer: 'go vet ./...;go vet -json ./...' },
      { level: '进阶', task: '解决vet报告"loop variable captured by func literal"', hint: 'Go 1.22前for range变量复用', answer: '旧代码：for _,v:=range items{v:=v;go func(){use(v)}()};新代码升级Go 1.22+' },
    ],
  },
  '6RpfXYHnOGmM6pZ6ZBb29': {
    mentalModel: 'goimports是go fmt的增强版——格式化+自动管理import(增删排序)，省去手工import的烦恼。',
    sections: [
      { title: '基本用法', content: 'goimports -w file.go。goimports -l file.go(列出需修改文件)。goimports -local mycompany/(本地包分组)。' },
      { title: '与go fmt区别', content: 'go fmt:仅格式化不管理import。goimports:格式化+import增删排序。通常用goimports替代go fmt。IDE(gopls)内置。' },
    ],
    diagnosis: [{ symptom: 'goimports把第三方包和标准库混在一起', cause: 'goimports默认不分组', fix: 'goimports -local "mycompany.com/"。标准库/第三方/本地自动分组。配置.golangci.yml或用IDE管理。' }],
    exercises: [
      { level: '基础', task: '用goimports格式化文件', hint: 'goimports -w file.go', answer: 'go install golang.org/x/tools/cmd/goimports@latest;goimports -w main.go' },
      { level: '进阶', task: '配置goimports本地包路径', hint: 'goimports -local', answer: 'goimports -local github.com/myorg -w main.go' },
    ],
  },
  'TstTkc_-2RZMOqtSIklEM': {
    mentalModel: 'go generate是代码生成触发器——在源码中写//go:generate指令，运行go generate自动执行。',
    sections: [
      { title: '基本用法', content: '//go:generate command args。go generate ./...。stringer生成String()方法。mockgen生成mock。protoc生成gRPC。' },
      { title: '常用工具', content: 'stringer:枚举String()。mockgen:生成mock。protoc-gen-go:gRPC代码。go-bindata:嵌入资源(已由embed替代)。' },
    ],
    diagnosis: [{ symptom: 'go generate运行时有些命令报command not found', cause: '生成工具未安装', fix: 'go install tool@latest安装。或在Makefile中用go run代替。//go:generate go run gen.go。' }],
    exercises: [
      { level: '基础', task: '用stringer为枚举生成String()方法', hint: '//go:generate stringer -type=Status', answer: '//go:generate stringer -type=Status;type Status int;const(StatusPending Status=iota;StatusActive;StatusDone)' },
      { level: '进阶', task: '用go generate配合mockgen', hint: '//go:generate mockgen', answer: '//go:generate mockgen -source=repo.go -destination=mock_repo.go -package=repo' },
    ],
  },
  'rW4QPWIS2TWzFY0Ljny2N': {
    mentalModel: 'go run是快速执行——编译+运行一气呵成，开发调试首选，不留可执行文件。',
    sections: [
      { title: '基本用法', content: 'go run main.go单个文件。go run .当前module。go run cmd/server/*.go多个文件。go run -race带竞态检测。' },
      { title: '与go build区别', content: 'go run编译到临时目录运行不留文件。go build生成可执行文件。开发用run，部署用build。run不能用于生产。' },
    ],
    diagnosis: [{ symptom: 'go run .提示"package is not a main package"', cause: '当前目录package声明不是main', fix: 'go run .只运行main包。库包用go test或go build。多main文件用go run *.go。' }],
    exercises: [
      { level: '基础', task: '用go run快速测试程序', hint: 'go run main.go', answer: 'go run main.go -flag1=val -flag2=val' },
      { level: '进阶', task: 'go run带环境变量运行', hint: 'GOOS/GOARCH', answer: 'GOOS=linux GOARCH=amd64 go run main.go' },
    ],
  },
  'LXqEJwGA_0cVUbF6DVwBG': {
    mentalModel: 'go build是编译命令——生成可执行文件或库文件，支持交叉编译、构建标签、trimpath。',
    sections: [
      { title: '基本用法', content: 'go build生成可执行文件。go build -o output指定输出。go build -ldflags传递链接器标志。go build -tags指定构建标签。' },
      { title: '构建优化', content: '-ldflags="-s -w"去除调试信息减小体积。-trimpath移除路径信息(可复现构建)。-gcflags控制编译器优化。CGO_ENABLED=0纯静态。' },
    ],
    diagnosis: [{ symptom: 'go build生成的二进制很大', cause: 'Go默认包含调试信息和runtime', fix: 'go build -ldflags="-s -w" 去符号表和调试信息。upx压缩。tinygo缩体积。' }],
    exercises: [
      { level: '基础', task: '交叉编译Linux amd64二进制', hint: 'GOOS=linux GOARCH=amd64 go build', answer: 'GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o myapp' },
      { level: '进阶', task: '构建时注入版本信息', hint: '-ldflags "-X main.version=1.0"', answer: 'var version="dev";go build -ldflags="-X main.version=1.0.0 -s -w"' },
    ],
  },
  'Jxt4HD2iA6lRXNRJIVCLs': {
    mentalModel: 'Build Tags是条件编译——通过//go:build注释或文件后缀控制哪些文件在特定条件下编译。',
    sections: [
      { title: '语法', content: '//go:build linux amd64(新风格,Go 1.17+)。//+build linux amd64(旧风格)。文件后缀:file_linux.go(file_GOOS.go)。file_amd64.go(file_GOARCH.go)。' },
      { title: '使用场景', content: '平台特定代码。debug/release版本。集成测试隔离(cgo/!cgo)。不同数据库驱动。' },
    ],
    diagnosis: [{ symptom: '两个//go:build标签条件AND关系', cause: '多个tag空格分隔是AND逗号是OR', fix: '//go:build linux,amd64=linux AND amd64。//go:build linux amd64=linux OR amd64。' }],
    exercises: [
      { level: '基础', task: '创建平台特定文件', hint: 'xxx_linux.go xxx_windows.go', answer: '//file_linux.go://go:build linux;func Platform()string{return"linux"}//file_windows.go:func Platform()string{return"windows"}' },
      { level: '进阶', task: '用build tag区分debug和release', hint: '//go:build debug', answer: '//go:build debug;var logLevel="debug"//go:build !debug;var logLevel="info"' },
    ],
  },
  'k35Ogbvr9yTdJPo4RV4tM': {
    mentalModel: 'go install编译并安装——把可执行文件放到$GOPATH/bin，把库编译缓存。',
    sections: [
      { title: '基本用法', content: 'go install安装到GOBIN。go install ./...安装当前模块。go install pkg@version安装远程工具。' },
      { title: '与go build区别', content: 'go build在当前目录生成。go install放到$GOBIN(在PATH中)。开发用build，安装工具用install。' },
    ],
    diagnosis: [{ symptom: 'go install安装的工具找不到', cause: 'GOBIN不在PATH中', fix: 'go env GOBIN查看路径。export PATH=$PATH:$(go env GOPATH)/bin。' }],
    exercises: [
      { level: '基础', task: '用go install安装golangci-lint', hint: 'go install ...@latest', answer: 'go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest' },
      { level: '进阶', task: 'go install本地项目', hint: 'go install ./...', answer: 'go install ./...可执行文件安装到$GOBIN' },
    ],
  },
  'CPFiclXXVQCsbooA0iCEy': {
    mentalModel: 'go fmt是代码格式化——统一团队风格，消除格式争论，所有Go代码看起来一样。',
    sections: [
      { title: '基本用法', content: 'go fmt ./...格式化所有。gofmt -w file.go格式化单个。gofmt -d file.go显示差异。IDE保存时自动fmt。' },
      { title: '格式化规则', content: '缩进用tab。左大括号同行。导入排序。空格统一。不空行。没有配置选项——有意的设计选择。' },
    ],
    diagnosis: [{ symptom: 'go fmt把我的代码格式改了', cause: 'go fmt是强制格式化无配置', fix: '适应go fmt的风格。这是Go社区约定——减少争论。用gofumpt或goimports增强。' }],
    exercises: [
      { level: '基础', task: '格式化整个项目', hint: 'go fmt ./...', answer: 'go fmt ./...' },
      { level: '进阶', task: '检查格式化是否有问题', hint: 'gofmt -l .', answer: 'gofmt -l .;test -z "$(gofmt -l .)"' },
    ],
  },
  'ksimJz7uvSh80ZIekSn_-': {
    mentalModel: 'revive是Go linter——比golint更快更灵活，可配置规则，替代已废弃的golint。',
    sections: [
      { title: '核心特性', content: 'revive -config config.toml。80+规则。白名单/黑名单。快速执行。CI友好。golangci-lint已集成。' },
      { title: '常用规则', content: 'exported:导出符号需注释。error-return:检查未处理错误。context-as-argument:context放第一位。import-shadowing:import别名遮盖。' },
    ],
    diagnosis: [{ symptom: 'revive报error-return但真的不想处理error', cause: '有些场景忽略error是可以接受的', fix: '用 //nolint:revive 注释禁用。或明确 _ = funcThatReturnsError() 表明有意忽略。' }],
    exercises: [
      { level: '基础', task: '安装和运行revive', hint: 'go install+revive ./...', answer: 'go install github.com/mgechev/revive@latest;revive ./...' },
      { level: '进阶', task: '配置revive忽略某条规则', hint: 'revive.toml', answer: '[rule.exported];disabled=true' },
    ],
  },
  '954ffF8CmXYX-L36Lfl44': {
    mentalModel: 'staticcheck是高级静态分析——检测bug、性能问题、代码简化、风格问题，比vet更深入。',
    sections: [
      { title: '核心特性', content: 'staticcheck ./...。SA标准检查(S1001-S1034)。ST风格检查(ST1000-ST1023)。QF快速修复建议(QF1001-QF1012)。' },
      { title: '常见检测', content: '未使用的变量/import。nil检查后的nil指针使用。错误字符串比较。time.Time用==比较。不检查的error。' },
    ],
    diagnosis: [{ symptom: 'staticcheck报"SA4006: this value of x is never used"', cause: '变量赋值后未使用', fix: '删除无用变量或用_忽略。检查逻辑是否正确——可能是bug。' }],
    exercises: [
      { level: '基础', task: '运行staticcheck检查', hint: 'staticcheck ./...', answer: 'go install honnef.co/go/tools/cmd/staticcheck@latest;staticcheck ./...' },
      { level: '进阶', task: '用staticcheck自动修复简单问题', hint: 'staticcheck -fix', answer: 'staticcheck -fix ./...' },
    ],
  },
  '5hnaPrYSBzxEIxFeg5tCK': {
    mentalModel: 'go mod是依赖管理核心——init/tidy/download/vendor/why，所有模块管理都从go mod开始。',
    sections: [
      { title: '核心子命令', content: 'go mod init初始化。go mod tidy清理。go mod download下载。go mod vendor本地化。go mod why解释依赖。go mod graph依赖树。' },
      { title: 'go.mod文件', content: 'module名。go版本。require依赖。replace替换。exclude排除。retract撤回。//indirect间接依赖。' },
    ],
    diagnosis: [{ symptom: 'go mod tidy删除了还在用的依赖', cause: 'go.mod有replace或间接引用导致判断不准', fix: '检查import是否真的删了。检查replace指令。手动require需要的包。golang.org/x/tools/cmd/goimports。' }],
    exercises: [
      { level: '基础', task: '查看依赖树', hint: 'go mod graph', answer: 'go mod graph;go mod graph|grep mypkg' },
      { level: '进阶', task: '解释为什么需要某依赖', hint: 'go mod why', answer: 'go mod why github.com/some/pkg' },
    ],
  },
  'EskFmwCwOmZHcVzedPOJI': {
    mentalModel: 'go test是测试运行器——单元测试/基准/示例/覆盖率/fuzz，一个命令全搞定。',
    sections: [
      { title: '基本用法', content: 'go test ./...运行所有测试。go test -v详细输出。go test -run TestXxx匹配。go test -short跳过慢测。go test -count=N运行N次。' },
      { title: '高级用法', content: 'go test -timeout 30s超时。go test -parallel N并行。go test -shuffle=on随机序。go test -failfast快速失败。' },
    ],
    diagnosis: [{ symptom: 'go test缓存导致测试总是通过', cause: 'Go测试缓存命中时跳过执行', fix: 'go test -count=1禁用缓存。或用go clean -testcache清除。修改代码自动破缓存。' }],
    exercises: [
      { level: '基础', task: '运行特定包的测试', hint: 'go test ./pkg/...', answer: 'go test ./service/... -v -count=1' },
      { level: '进阶', task: '运行测试并生成覆盖率', hint: 'go test -cover', answer: 'go test -cover ./... -coverprofile=c.out;go tool cover -html=c.out' },
    ],
  },
  'hgiNcGh3ggf8dBJ8C0HCL': {
    mentalModel: 'golangci-lint是Go lint全家桶——集成50+ linter(revive/staticcheck/govet/errcheck/gosec...)，一个命令全检查。',
    sections: [
      { title: '核心特性', content: 'golangci-lint run ./...。.golangci.yml配置。50+ linter可选。并行执行快。CI集成简单。new-from-rev只检查新代码。' },
      { title: '常用配置', content: 'linters.enable选择linter。linters.disable禁用。issues.exclude排除规则。run.deadline超时。output.format输出格式。' },
    ],
    diagnosis: [{ symptom: 'golangci-lint报一大堆错不知道从哪修', cause: '50+linter同时跑结果多', fix: '先enable少几个核心linter。用new-from-rev只检查增量。用golangci-lint run --fix自动修复。' }],
    exercises: [
      { level: '基础', task: '安装和运行', hint: 'curl -sSfL ... | sh', answer: 'curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh|sh;golangci-lint run ./...' },
      { level: '进阶', task: '配置.golangci.yml', hint: 'golangci-lint config', answer: 'linters:enable:-errcheck-govet-staticcheck;linters-settings:errcheck:check-blank:true' },
    ],
  },
  'bxXzXM0zUm1vux1DKOLyf': {
    mentalModel: 'go clean是清理命令——删除编译产物、测试缓存、模块缓存，释放磁盘空间。',
    sections: [
      { title: '基本用法', content: 'go clean删除当前目录可执行文件。go clean -testcache清理测试缓存。go clean -modcache清理模块缓存。go clean -cache清理构建缓存。' },
      { title: '使用场景', content: '测试缓存导致旧结果。模块缓存污染。磁盘空间不足。构建环境重置。' },
    ],
    diagnosis: [{ symptom: 'go clean -modcache后所有依赖需重新下载', cause: 'modcache是模块缓存删除后go build重新下载', fix: '正常现象——就像npm的node_modules。必要时才clean。网络好时几分钟重新下载完成。' }],
    exercises: [
      { level: '基础', task: '清理当前目录编译产物', hint: 'go clean', answer: 'go clean;ls -la//可执行文件被删除' },
      { level: '进阶', task: '清理测试缓存重新跑测试', hint: 'go clean -testcache', answer: 'go clean -testcache;go test ./...' },
    ],
  },
  'SoD0P5k4aSVRN96XxR5on': {
    mentalModel: 'go doc是内置文档工具——终端直接查看包/函数/类型的文档，不用打开浏览器。',
    sections: [
      { title: '基本用法', content: 'go doc fmt.Println查看函数。go doc fmt查看包。go doc -src查看源码。go doc -all查看所有(包括未导出)。' },
      { title: 'godoc', content: 'godoc -http=:6060启动Web文档服务器。http://localhost:6060/pkg/浏览。已不随Go分发需go install godoc@latest。' },
    ],
    diagnosis: [{ symptom: 'go doc查不到第三方包的文档', cause: 'go doc默认只查标准库和当前module的包', fix: '先go get下载第三方包。或用go doc -src。或用pkg.go.dev。' }],
    exercises: [
      { level: '基础', task: '查看strings.Builder文档', hint: 'go doc strings.Builder', answer: 'go doc strings.Builder;go doc -src strings.Builder' },
      { level: '进阶', task: '启动本地文档服务器', hint: 'godoc -http=:6060', answer: 'go install golang.org/x/tools/cmd/godoc@latest;godoc -http=:6060' },
    ],
  },
  'Blz9cpgKhuqtY75oUQw6I': {
    mentalModel: 'pprof是Go内置性能分析——CPU/内存/goroutine/阻塞/互斥，一个工具诊断所有性能问题。',
    sections: [
      { title: '采样类型', content: 'CPU profile(函数耗时)。Heap profile(内存分配)。Goroutine profile(goroutine栈)。Block profile(阻塞)。Mutex profile(锁争用)。' },
      { title: '分析工具', content: 'go tool pprof分析文件。http://localhost:6060/debug/pprof/交互式。go tool pprof -http=:8080可视化。flame graph火焰图。' },
    ],
    diagnosis: [{ symptom: 'pprof采样生产环境影响性能', cause: 'pprof采样有开销但通常可接受', fix: 'CPU profile约5%开销。Heap profile几乎无。生产短暂开启。用net/http/pprof加endpoint控制。' }],
    exercises: [
      { level: '基础', task: '在HTTP服务中启用pprof', hint: 'import _ "net/http/pprof"', answer: 'import _ "net/http/pprof";go func(){http.ListenAndServe(":6060",nil)}()//访问/debug/pprof/' },
      { level: '进阶', task: '用pprof分析CPU热点', hint: 'go tool pprof', answer: 'go tool pprof http://localhost:6060/debug/pprof/profile?seconds=30;top10;list funcName' },
    ],
  },
  'RE2jfECHkWvy3ldDZL938': {
    mentalModel: 'trace是Go运行追踪器——比pprof更底层，记录goroutine调度、GC、网络、系统调用等所有事件。',
    sections: [
      { title: '与pprof区别', content: 'pprof:统计采样(热点)。trace:完整事件记录(时序)。trace能看到阻塞/调度问题。trace文件大不适合长采样。' },
      { title: '使用场景', content: 'goroutine阻塞分析。调度延迟。GC STW分布。并发模式可视化。网络/系统调用时间线。' },
    ],
    diagnosis: [{ symptom: 'trace文件几百MB打开太慢', cause: 'trace记录所有事件数据量极大', fix: '采样几秒即可(3-5s)。用runtime/trace.SetMaxEvents限制。适用于微观分析非长期监控。' }],
    exercises: [
      { level: '基础', task: '启动trace', hint: 'runtime/trace', answer: 'f,_:=os.Create("trace.out");trace.Start(f);defer trace.Stop();//do work' },
      { level: '进阶', task: '用go tool trace可视化', hint: 'go tool trace', answer: 'go tool trace trace.out//浏览器打开查看调度/GC/goroutine时间线' },
    ],
  },
  'LnhQJVsEaS_gSijCUqAMq': {
    mentalModel: 'go version是版本查看——看Go版本、看模块依赖版本，简单但常用。',
    sections: [
      { title: '基本用法', content: 'go version查看Go版本。go version -m file查看编译信息。go version file查看可执行文件Go版本。' },
      { title: '编译信息', content: 'go version -m myapp显示模块依赖和版本。buildinfo包括Go版本/GOOS/GOARCH/模块信息。用于排查线上二进制。' },
    ],
    diagnosis: [{ symptom: '线上二进制不知道是用哪个版本编译的', cause: '没有编译时记录版本信息', fix: 'go version -m binary查看。或-ldflags注入版本号。go build -buildvcs自动嵌入git commit。' }],
    exercises: [
      { level: '基础', task: '查看Go版本', hint: 'go version', answer: 'go version//go version go1.22.0 darwin/arm64' },
      { level: '进阶', task: '查看可执行文件的编译信息', hint: 'go version -m', answer: 'go version -m /usr/local/bin/myapp//显示Go版本和各依赖版本' },
    ],
  },
  '7aTYeCd915F3UHqb6j0Az': {
    mentalModel: 'Race Detector是竞态检测器——go test -race或go run -race，在运行时检测并发读写冲突。',
    sections: [
      { title: '工作原理', content: '运行时追踪内存访问。检测无同步保护的并发读写。线程Sanitizer技术。开销5-10x内存+3-5x CPU。' },
      { title: '使用时机', content: '所有测试都应跑-race。CI中必须-race。开发阶段持续用。生产环境不用(开销大)。' },
    ],
    diagnosis: [{ symptom: '-race检测出竞态但无法复现', cause: '竞态有时序依赖榜', fix: '多次运行-count=10。用stress工具。竞态一经报告就应严肃对待——即使偶尔出现也需要修复。' }],
    exercises: [
      { level: '基础', task: '用-race运行测试', hint: 'go test -race', answer: 'go test -race ./...' },
      { level: '进阶', task: '用go run -race本地调试', hint: 'go run -race', answer: 'go run -race main.go' },
    ],
  },
  'K__satcG2ETNRFBpPqrLw': {
    mentalModel: 'govulncheck是官方漏洞扫描——检查Go二进制和依赖中的已知安全漏洞(CVE)，CI/CD安全必备。',
    sections: [
      { title: '基本用法', content: 'govulncheck ./...扫描源代码。govulncheck binary扫描二进制。从Go漏洞数据库获取CVE信息。输出JSON/文本格式。' },
      { title: '集成方式', content: 'govulncheck ./...在CI运行。govulncheck -mode=binary生产扫描。定期扫描部署的二进制。' },
    ],
    diagnosis: [{ symptom: 'govulncheck报告一个严重漏洞但修复版本不兼容', cause: '漏洞数据库中的报告需评估实际影响', fix: '评估漏洞是否真的影响你的使用场景。用govulncheck -show=traces看调用链。' }],
    exercises: [
      { level: '基础', task: '扫描项目漏洞', hint: 'govulncheck ./...', answer: 'go install golang.org/x/vuln/cmd/govulncheck@latest;govulncheck ./...' },
      { level: '进阶', task: '在CI中集成漏洞扫描', hint: 'govulncheck -json', answer: 'govulncheck -json ./... > vuln.json && check if any vulnerabilities found' },
    ],
  },
  'zCUmPIGVslLfECqfUgAr2': {
    mentalModel: '构建可执行文件——从go build到Docker多阶段构建，静态链接的Go天然适合容器化。',
    sections: [
      { title: '构建策略', content: 'CGO_ENABLED=0纯静态。GOOS/GOARCH交叉编译。-ldflags="-s -w"减体积。upx压缩(可选)。Docker多阶段构建。' },
      { title: 'Docker最佳实践', content: 'FROM golang:alpine AS build。go build后FROM scratch/alpine:latest。COPY --from=build。用非root用户。健康检查。' },
    ],
    diagnosis: [{ symptom: 'Docker镜像用golang:alpine很大', cause: '用多阶段构建+scratch最终镜像', fix: 'FROM golang:alpine AS build;RUN CGO_ENABLED=0 go build -o app;FROM scratch;COPY --from=build /app/app;ENTRYPOINT["/app"]' }],
    exercises: [
      { level: '基础', task: '构建最小Docker镜像', hint: '多阶段+scratch', answer: 'docker build -t myapp .//Dockerfile:FROM golang:alpine as builder;WORKDIR /app;COPY . .;RUN CGO_ENABLED=0 go build -o server;FROM scratch;COPY --from=builder /app/server /server;ENTRYPOINT["/server"]' },
      { level: '进阶', task: '用Makefile统一构建流程', hint: 'Makefile', answer: 'build:CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o bin/server; docker:docker build -t myapp .' },
    ],
  },
  '_2JpTdzmXxszFCauJONCi': {
    mentalModel: '内存管理深入——逃逸分析、GC调优、内存泄漏排查、pprof heap分析，写出内存高效Go代码。',
    sections: [
      { title: '内存泄漏排查', content: 'pprof heap profile。goroutine泄漏(最常见)。channel阻塞导致goroutine滞留。map无限增长。slice引用大数组底层。time.Ticker未Stop。' },
      { title: '逃逸分析实战', content: 'go build -gcflags=-m看逃逸。指针返回值逃逸到堆。interface{}参数导致逃逸。闭包捕获导致逃逸。减少堆分配提升性能。' },
    ],
    diagnosis: [{ symptom: 'pprof heap显示内存一直增长但没OOM', cause: 'Go GC会回收内存但某些对象生命周期很长', fix: '用pprof的alloc_space vs inuse_space区分。对比两个时间点heap差异。goroutine泄漏最常见原因。' }],
    exercises: [
      { level: '基础', task: '用pprof分析内存使用', hint: 'pprof heap', answer: 'import _ "net/http/pprof";go tool pprof http://localhost:6060/debug/pprof/heap;top;list funcName' },
      { level: '进阶', task: '检查goroutine泄漏', hint: 'pprof goroutine', answer: 'go tool pprof http://localhost:6060/debug/pprof/goroutine;traces//看goroutine数量和堆栈' },
    ],
  },
  'mvcWcecHA_jyQY1txFgL_': {
    mentalModel: '交叉编译是Go超能力——在Mac上编译Linux二进制，在Linux上编译Windows exe，一句命令搞定。',
    sections: [
      { title: '基本用法', content: 'GOOS=linux GOARCH=amd64 go build。GOOS=windows GOARCH=amd64 go build。go tool dist list 看支持的所有平台。' },
      { title: 'CGO影响', content: 'CGO_ENABLED=0关闭CGO纯Go编译可交叉。CGO_ENABLED=1需目标平台C编译器(复杂)。尽量CGO_ENABLED=0。' },
    ],
    diagnosis: [{ symptom: '交叉编译时报"cannot find -lpthread"', cause: 'CGO_ENABLED=1时需目标平台交叉编译器', fix: '设置CGO_ENABLED=0。或用zig cc/cross等交叉编译工具链。docker buildx也可解决。' }],
    exercises: [
      { level: '基础', task: '编译Linux/Windows/Mac三个平台', hint: 'Makefile多目标', answer: 'GOOS=linux GOARCH=amd64 go build -o bin/myapp-linux;GOOS=darwin GOARCH=arm64 go build -o bin/myapp-mac;GOOS=windows GOARCH=amd64 go build -o bin/myapp.exe' },
      { level: '进阶', task: '用goreleaser一键发布多平台', hint: 'goreleaser', answer: 'goreleaser init;goreleaser release --snapshot --clean' },
    ],
  },
  'ixoXVtRlrvTittqQq-Bgo': {
    mentalModel: '逃逸分析是Go编译器智能内存分配——决定变量上栈还是上堆，栈变量零GC开销。',
    sections: [
      { title: '逃逸分析原理', content: '编译器分析变量是否在函数返回后仍被引用。不逃逸放栈(自动回收)。逃逸放堆(GC回收)。-gcflags=-m查看逃逸分析结果。' },
      { title: '常见逃逸场景', content: '返回指针/interface{}。发送到channel。存到全局变量。闭包捕获。interface{}参数。slice/map存指针。' },
    ],
    diagnosis: [{ symptom: '函数返回struct指针就逃逸了吗', cause: '是的，返回指针通常逃逸', fix: '返回*T比T多一次堆分配。小struct返回值拷贝比堆分配快。benchmark验证。' }],
    exercises: [
      { level: '基础', task: '用-gcflags=-m分析代码逃逸', hint: 'go build -gcflags=-m', answer: 'go build -gcflags=-m 2>&1|grep "escapes to heap"' },
      { level: '进阶', task: '优化代码减少堆分配', hint: '值类型替代指针', answer: '//逃逸:func newUser()*User{return &User{}}\n//不逃逸:func newUser()User{return User{}};然后调用方取地址&u' },
    ],
  },
  'GO50AoBOjO-EaK3s36jSS': {
    mentalModel: '反射(reflect)是Go运行时的镜子——在运行时检查类型、读取/修改值、动态调用方法。强大但慎用。',
    sections: [
      { title: '核心类型', content: 'reflect.TypeOf(v)获取类型。reflect.ValueOf(v)获取值。v.Kind()基础类型。v.Interface()还原。v.Field(i)访问字段。v.Method(i)调用方法。' },
      { title: '使用原则', content: '能不用就不用——常规代码更快更安全。JSON/ORM等底层库用。善用IsValid/CanSet检查。用reflect.StructTag读tag。' },
    ],
    diagnosis: [{ symptom: 'reflect.ValueOf修改值时报"using unaddressable value"', cause: '直接ValueOf(&v).Elem()获取可寻址值', fix: 'v:=reflect.ValueOf(&x).Elem();v.SetInt(42)。必须传指针再Elem()才可修改。' }],
    exercises: [
      { level: '基础', task: '用reflect打印任意struct的字段名和值', hint: 'reflect.TypeOf+Field', answer: 'func printFields(v any){t:=reflect.TypeOf(v);for i:=0;i<t.NumField();i++{f:=t.Field(i);fmt.Printf("%s=%v\\n",f.Name,reflect.ValueOf(v).Field(i).Interface())}}' },
      { level: '进阶', task: '用reflect实现泛型Map(Go 1.18前)', hint: 'reflect.MakeMap', answer: 'func mapSlice(s interface{},fn interface{})interface{}{sv:=reflect.ValueOf(s);fv:=reflect.ValueOf(fn);result:=reflect.MakeSlice(reflect.SliceOf(fv.Type().Out(0)),sv.Len(),sv.Len());...}' },
    ],
  },
  'tM-AAWqMJsYZ1i6DCfBeD': {
    mentalModel: 'unsafe包是Go的安全带——绕过类型系统直接操作内存，性能极致但失去了Go的安全保障。',
    sections: [
      { title: '核心功能', content: 'unsafe.Pointer:通用指针。unsafe.Sizeof:类型大小。unsafe.Offsetof:字段偏移。unsafe.Add:指针算术(Go 1.17+)。' },
      { title: '合理场景', content: '零拷贝类型转换([]byte<>string)。syscall调用。高性能序列化。CGO交互。hash/加密算法。' },
    ],
    diagnosis: [{ symptom: 'unsafe.Pointer转换导致数据损坏', cause: '类型大小/对齐不对', fix: '用unsafe.Sizeof确认大小一致。对齐问题用reflect检查。大部分场景不需要unsafe。' }],
    exercises: [
      { level: '基础', task: '零拷贝[]byte转string', hint: 'unsafe.Pointer', answer: 'func bytesToStr(b[]byte)string{return *(*string)(unsafe.Pointer(&b))}//注意:b不可被修改否则string也会变' },
      { level: '进阶', task: '用unsafe计算struct字段偏移', hint: 'unsafe.Offsetof', answer: 'type S struct{a int;b string};unsafe.Offsetof(S{}.b)//8(x64)' },
    ],
  },
  'zmBYvecc5zSoLCinH68gc': {
    mentalModel: '构建约束与Tags——//go:build是Go 1.17+的条件编译指令，替代旧的//+build。',
    sections: [
      { title: '新语法', content: '//go:build linux && amd64。&& AND。|| OR。! NOT。支持括号分组。多行用逗号。文件后缀也有效。' },
      { title: '与旧语法区别', content: '//go:build(新):标准布尔表达式。//+build(旧):空格OR逗号AND。Go 1.17+推荐新语法。旧语法仍兼容。' },
    ],
    diagnosis: [{ symptom: '新老build tag混用导致编译不到', cause: '两套语法同时存在可能不一致', fix: 'Go 1.17+统一用//go:build。移除旧//+build。一个文件不要混用。' }],
    exercises: [
      { level: '基础', task: '用//go:build限制文件在Linux编译', hint: '//go:build linux', answer: '//go:build linux;package mypkg;//只在Linux编译' },
      { level: '进阶', task: '用//go:build排除Windows且排除cgo', hint: '//go:build !windows && !cgo', answer: '//go:build !windows && !cgo' },
    ],
  },
  'mxbs96wFJ5XGDoETA0fU_': {
    mentalModel: 'CGO是Go和C的桥梁——在Go中调用C代码，或把Go编译成C库。强大但破坏了Go的简单编译。',
    sections: [
      { title: '基本用法', content: 'import "C"上方注释写C代码。C.function()调用C函数。C.xxx引用C类型。#cgo LDFLAGS: -lxxx链接C库。' },
      { title: '代价', content: 'CGO_ENABLED=1编译变慢。交叉编译困难。失去纯Go的静态链接优势。引入C的内存安全问题。' },
    ],
    diagnosis: [{ symptom: 'CGO_ENABLED=0时import"C"编译失败', cause: 'CGO需要C编译器，禁用时无法编译CGO代码', fix: '用构建tag隔离CGO代码：//go:build cgo。考虑纯Go替代方案(如go-sqlite3替代cgo sqlite)。' }],
    exercises: [
      { level: '基础', task: 'Go调C的printf', hint: 'import"C"', answer: '//#include<stdio.h>;import"C";C.puts(C.CString("hello"))//不能直接传Go string' },
      { level: '进阶', task: '用CGO链接系统库', hint: '#cgo LDFLAGS', answer: '//#cgo LDFLAGS:-lm;/*#include<math.h>*/;import"C";C.sqrt(2.0)' },
    ],
  },
  'xsjUeyxweN2GbcjknDjT8': {
    mentalModel: '编译器和链接器标志——-gcflags控制编译器行为，-ldflags控制链接器，优化/调试/注入。',
    sections: [
      { title: '编译器标志(-gcflags)', content: '-N禁用优化。-l禁用内联。-m打印逃逸分析。-e不限制错误数。多个标志空格分隔。-gcflags="all=-N -l"应用到所有包。' },
      { title: '链接器标志(-ldflags)', content: '-s去除符号表。-w去除DWARF调试信息。-X注入变量值。-H windowsgui。对编译结果影响大。' },
    ],
    diagnosis: [{ symptom: '-ldflags="-X main.version=1.0"没生效', cause: '变量必须是string且在main包', fix: 'var version string//必须string;go build -ldflags="-X main.version=1.0.0"。不能注入const。' }],
    exercises: [
      { level: '基础', task: '构建时注入构建时间和commit', hint: '-X', answer: 'var(Version="dev";BuildTime="unknown");go build -ldflags="-X main.Version=$(git describe) -X main.BuildTime=$(date -Iseconds)"' },
      { level: '进阶', task: '查看编译和链接完整命令', hint: 'go build -x', answer: 'go build -x //显示所有执行的命令' },
    ],
  },
  'NlkrCAdUCJ7kU9meQJM5_': {
    mentalModel: '插件和动态加载——Go 1.8+支持plugin包，编译.so动态加载，但限制多不推荐生产使用。',
    sections: [
      { title: 'plugin包', content: 'go build -buildmode=plugin编译.so。plugin.Open加载。p.Lookup查找符号。类型断言使用。' },
      { title: '限制', content: 'Linux only(其他OS支持有限)。Go版本必须完全一致。依赖包必须完全一致。没有卸载机制。不推荐生产。' },
    ],
    diagnosis: [{ symptom: 'plugin加载失败"plugin was built with a different version of package"', cause: 'plugin和主程序编译时Go或依赖版本不同', fix: '确保完全相同Go版本和依赖版本编译。生产建议用microservice+网络调用替代plugin。或用WASM。' }],
    exercises: [
      { level: '基础', task: '编译和加载plugin', hint: 'go build -buildmode=plugin', answer: 'go build -buildmode=plugin -o myplugin.so plugin.go;p,_:=plugin.Open("myplugin.so");sym,_:=p.Lookup("MyFunc");fn:=sym.(func())' },
      { level: '进阶', task: 'plugin的替代方案', hint: 'Wasm/RPC', answer: '用WASM(wazero)或gRPC/HTTP RPC解耦。plugin维护困难生产不推荐。' },
    ],
  }
};