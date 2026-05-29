import type { DeepTutorial } from '../deep-types';

export const DEVOPS_DEEP_TUTORIALS: Record<string, DeepTutorial> = {

  "TwVfCYMS9jSaJ6UyYmC-K": {
    mentalModel: 'DevOps 的核心是"自动化一切"，而自动化需要一种比 Shell 更强大、比 Go 更轻量的语言——Python 恰好卡在这个甜蜜点。它拥有覆盖所有云平台的 SDK（boto3/Azure SDK/gcloud），让基础设施管理变成代码；它的可读性让运维脚本可以像文档一样被审查和维护；Ansible、SaltStack、Fabric 等 DevOps 核心工具本身就是 Python 构建的，理解 Python 意味着能深入定制这些工具而非停留在表面使用',
    handsOn: [
      {
        title: '用 Python 批量检查服务器端口',
        cmd: 'python3 -c "import socket; [print(f\'{h}:22 {\"open\" if socket.socket().connect_ex((h,22))==0 else \"closed\"}\') for h in [\'10.0.0.1\',\'10.0.0.2\']]"',
        output: '10.0.0.1:22 open\n10.0.0.2:22 closed',
        explain: '利用 socket 模块的 connect_ex 返回 0 表示连接成功，一行代码完成多主机端口探测，比 shell 循环更快更可靠'
      },
      {
        title: '用 requests 调用云 API 获取实例列表',
        cmd: 'python3 -c "import requests,json; r=requests.get(\'http://metadata/api/instances\', headers={\'Authorization\':\'Bearer TOKEN\'}); print(json.dumps(r.json(),indent=2))"',
        output: '[\n  {"id": "i-0abc", "state": "running"},\n  {"id": "i-1def", "state": "stopped"}\n]',
        explain: 'requests 库让 HTTP 调用变得极其简洁，DevOps 中大量使用 Python 与云平台 REST API 交互来自动化资源管理'
      },
      {
        title: '编写虚拟环境并安装依赖',
        cmd: 'python3 -m venv .venv && source .venv/bin/activate && pip install boto3 ansible',
        output: 'Collecting boto3\n  Downloading boto3-1.34.0-py3-none-any.whl\nInstalling collected packages: boto3, ansible\nSuccessfully installed ansible-9.1.0 boto3-1.34.0',
        explain: '虚拟环境隔离项目依赖，避免系统 Python 包冲突；DevOps 工具链（Ansible、Terraform CDK）都依赖 Python 环境管理'
      }
    ],
    diagnosis: [
      {
        symptom: 'pip install 报 Permission denied',
        cause: '直接在系统 Python 中安装包，没有写权限或冲突',
        fix: '始终使用 python3 -m venv 创建虚拟环境，或使用 pip install --user'
      },
      {
        symptom: 'Python 脚本在 CI 中找不到模块',
        cause: 'CI 容器中的 Python 版本与本地不同，或依赖未写入 requirements.txt',
        fix: '在项目根目录维护 requirements.txt 或 pyproject.toml，CI 第一步执行 pip install -r requirements.txt'
      },
      {
        symptom: 'Ansible playbook 执行缓慢',
        cause: '默认 SSH 连接未开启 pipelining，每次任务都多次 SSH 往返',
        fix: '在 ansible.cfg 中设置 [ssh_connection] pipelining=True，可减少 50%+ 执行时间'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 Python 脚本，读取 /etc/hosts 文件并打印所有 IP-主机名映射',
        hint: '用 open() 读文件，跳过空行和 # 注释行，split() 拆分每行',
        answer: 'with open("/etc/hosts") as f:\n    for line in f:\n        line = line.strip()\n        if not line or line.startswith("#"): continue\n        parts = line.split()\n        print(f"{parts[0]} -> {parts[1:]}")'
      },
      {
        level: '进阶',
        task: '用 boto3 编写脚本，列出所有运行中的 EC2 实例并按标签 Name 排序',
        hint: '使用 ec2.describe_instances(Filters=[{"Name":"instance-state-name","Values":["running"]}])，然后从 Tags 中提取 Name',
        answer: 'import boto3\nec2 = boto3.client("ec2")\nresp = ec2.describe_instances(Filters=[{"Name":"instance-state-name","Values":["running"]}])\ninstances = []\nfor r in resp["Reservations"]:\n    for i in r["Instances"]:\n        name = next((t["Value"] for t in i.get("Tags",[]) if t["Key"]=="Name"), "unnamed")\n        instances.append((name, i["InstanceId"]))\nfor name, iid in sorted(instances): print(f"{name}: {iid}")'
      },
      {
        level: '挑战',
        task: '编写一个 Python 脚本实现日志轮转监控：当日志文件超过 100MB 时自动压缩并归档到 /var/log/archive/',
        hint: '使用 os.path.getsize 检查大小，gzip 模块压缩，shutil.move 移动，logging 模块记录操作',
        answer: 'import os, gzip, shutil, logging, datetime\nlogging.basicConfig(level=logging.INFO)\nLOG = "/var/log/app.log"\nARCHIVE = "/var/log/archive"\nif os.path.getsize(LOG) > 100*1024*1024:\n    ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")\n    gz = f"{ARCHIVE}/app.log.{ts}.gz"\n    with open(LOG,"rb") as fi, gzip.open(gz,"wb") as fo:\n        shutil.copyfileobj(fi, fo)\n    open(LOG,"w").close()\n    logging.info(f"Rotated {LOG} -> {gz}")'
      }
    ]
  },

  "PuXAPYA0bsMgwcnlwJxQn": {
    mentalModel: 'Ruby 是"开发者幸福感优先"的语言——Rails 框架定义了 Web 开发范式，Chef/Puppet 用 Ruby 做基础设施配置，其 DSL 风格让配置文件读起来像自然语言',
    handsOn: [
      {
        title: '用 Ruby 解析 YAML 配置文件',
        cmd: 'ruby -ryaml -e \'cfg = YAML.load_file("config.yml"); cfg["servers"].each{|s| puts "#{s["name"]}: #{s["ip"]}"}\'',
        output: 'web01: 10.0.1.1\nweb02: 10.0.1.2\ndb01: 10.0.2.1',
        explain: 'Ruby 内置 YAML 支持，DevOps 中大量配置文件（Ansible、Docker Compose、Kubernetes）都是 YAML，Ruby 处理它们非常自然'
      },
      {
        title: '用 ERB 模板生成 Nginx 配置',
        cmd: 'ruby -rerb -e \'tpl=ERB.new(File.read("nginx.erb")); servers=["10.0.1.1","10.0.1.2"]; puts tpl.result(binding)\'',
        output: 'upstream backend {\n    server 10.0.1.1;\n    server 10.0.1.2;\n}',
        explain: 'ERB 是 Ruby 的模板引擎，Chef/Puppet 用它动态生成配置文件，将变量注入模板是基础设施即代码的核心模式'
      },
      {
        title: 'Chef recipe 示例：安装并启动 Nginx',
        cmd: 'cat recipes/default.rb',
        output: 'package "nginx" do\n  action :install\nend\n\nservice "nginx" do\n  action [:enable, :start]\nend\n\ntemplate "/etc/nginx/nginx.conf" do\n  source "nginx.conf.erb"\n  notifies :reload, "service[nginx]"\nend',
        explain: 'Chef 用 Ruby DSL 描述期望状态：安装包、启用服务、渲染模板并在配置变化时自动重载——这就是基础设施即代码'
      }
    ],
    diagnosis: [
      {
        symptom: 'gem install 报 SSL certificate error',
        cause: 'RubyGems 源使用 HTTPS 但系统 CA 证书过期或不匹配',
        fix: '更新 CA 证书：update-ca-certificates，或临时切换源 gem sources -r https://rubygems.org -a http://rubygems.org（仅调试用）'
      },
      {
        symptom: 'Chef client run 报 "Resource not found"',
        cause: 'cookbook 依赖未在 metadata.rb 中声明，或 Berksfile 未更新',
        fix: '在 metadata.rb 中添加 depends "cookbook_name"，然后执行 berks install && berks upload'
      },
      {
        symptom: 'Ruby 版本冲突导致工具无法运行',
        cause: '系统 Ruby 版本太旧，不兼容新版 gem 依赖',
        fix: '使用 rbenv 或 rvm 管理多版本 Ruby，在项目中放置 .ruby-version 文件锁定版本'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 Ruby 脚本，读取 CSV 文件（hostname,ip,role）并输出按 role 分组的服务器列表',
        hint: '使用 require "csv"，CSV.foreach 逐行读取，用 Hash 的默认值 Array 来分组',
        answer: 'require "csv"\ngroups = Hash.new { |h,k| h[k] = [] }\nCSV.foreach("servers.csv", headers: true) do |row|\n  groups[row["role"]] << { name: row["hostname"], ip: row["ip"] }\nend\ngroups.each { |role, list| puts "#{role}:"; list.each { |s| puts "  #{s[:name]} (#{s[:ip]})" } }'
      },
      {
        level: '进阶',
        task: '编写一个 ERB 模板，根据环境变量数组动态生成 Docker Compose 的 environment 段',
        hint: '模板中用 <% envs.each do |k,v| %> 循环，输出 - KEY=VALUE 格式',
        answer: '# compose.erb\nenvironment:\n<% envs.each do |k,v| -%>\n  - <%= k %>=<%= v %>\n<% end -%>\n\n# 渲染命令\n# ruby -rerb -e \'envs={"DB_HOST"=>"db","DB_PORT"=>"5432"}; puts ERB.new(File.read("compose.erb")).result(binding)\''
      }
    ]
  },

  "v5FGKQc-_7NYEsWjmTEuq": {
    mentalModel: 'DevOps 工程师学编程语言不是为了写应用——而是为了拥有"自动化一切"的能力。选语言看场景：Shell 做系统胶水、Python 做 API 胶水、Go 做云原生工具、JS 做 CI/CD 脚本，关键是根据任务选最合适的工具',
    handsOn: [
      {
        title: '同一任务用三种语言实现：检查磁盘使用率',
        cmd: 'echo "=== Bash ===" && df -h | awk \'$5+0>80{print "ALERT:",$6,"at",$5}\' && echo "=== Python ===" && python3 -c "import shutil; [print(f\'ALERT: {p} at {shutil.disk_usage(p).percent}%\') for p in [\'/\',\'/tmp\'] if shutil.disk_usage(p).percent>80]"',
        output: '=== Bash ===\nALERT: /var at 87%\n=== Python ===\nALERT: /var at 87%',
        explain: '同一个监控任务，Bash 一行搞定但难扩展，Python 代码更长但易测试和维护——DevOps 工程师需要根据场景权衡选择'
      },
      {
        title: '用 GitHub Actions 运行多语言脚本',
        cmd: 'cat .github/workflows/check.yml',
        output: 'jobs:\n  check:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: bash scripts/health-check.sh\n      - run: python3 scripts/deploy-verify.py\n      - run: node scripts/smoke-test.js',
        explain: '现代 CI/CD 流水线经常混合多种语言，每种语言用在它最擅长的领域，这就是 DevOps 的多语言实践'
      }
    ],
    diagnosis: [
      {
        symptom: '团队对编程语言选型争论不休',
        cause: '没有明确评估标准，各自偏好不同',
        fix: '用三个维度决策：①任务类型（系统/胶水/工具）②团队熟练度 ③生态支持（库和工具数量）'
      },
      {
        symptom: '脚本越来越多但没人维护',
        cause: '缺乏项目化管理，脚本散落在各处',
        fix: '将运维脚本当作项目：版本控制、README、测试、CI，像对待产品代码一样对待运维代码'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '选择一个你熟悉的语言，写一个命令行工具：输入主机名，输出该主机的 ping 延迟和丢包率',
        hint: '用 subprocess 或 os/exec 调用 ping 命令，解析输出中的 avg 和 packet loss',
        answer: '#!/usr/bin/env python3\nimport subprocess, sys, re\nhost = sys.argv[1]\nr = subprocess.run(["ping","-c","5",host], capture_output=True, text=True)\navg = re.search(r"= [\\d.]+/([\\d.]+)/", r.stdout)\nloss = re.search(r"([\\d.]+)% packet loss", r.stdout)\nprint(f"{host}: avg={avg.group(1)}ms, loss={loss.group(1)}%")'
      },
      {
        level: '进阶',
        task: '对比 Bash、Python、Go 实现同一个 HTTP 健康检查脚本的代码量、执行速度和维护性',
        hint: '用 time 命令测量执行时间，用 wc -l 测量代码行数，记录你的感受',
        answer: '评估模板：\n| 维度 | Bash | Python | Go |\n|------|------|--------|----|\n| 代码行数 | 5 | 12 | 25 |\n| 执行速度 | 中 | 慢 | 快 |\n| 错误处理 | 弱 | 强 | 强 |\n| 部署便利性 | 内置 | 需运行时 | 单二进制 |\n| 适用场景 | 快速检查 | API 调用 | 长期工具 |'
      }
    ]
  },

  "npnMwSDEK2aLGgnuZZ4dO": {
    mentalModel: 'Go 是云原生世界的"C 语言"——Docker、Kubernetes、Terraform、Prometheus 全部用 Go 编写。它的编译速度、并发模型（goroutine）和单二进制部署让 DevOps 工具既高效又易于分发',
    handsOn: [
      {
        title: '用 Go 写并发端口扫描器',
        cmd: 'cat portscan.go',
        output: 'package main\n\nimport (\n    "fmt"\n    "net"\n    "sync"\n)\n\nfunc main() {\n    var wg sync.WaitGroup\n    for i := 1; i <= 1024; i++ {\n        wg.Add(1)\n        go func(port int) {\n            defer wg.Done()\n            conn, err := net.DialTimeout("tcp", fmt.Sprintf("localhost:%d", port), time.Second)\n            if err == nil {\n                conn.Close()\n                fmt.Printf("Port %d: open\\n", port)\n            }\n        }(i)\n    }\n    wg.Wait()\n}',
        explain: 'Go 的 goroutine 让并发编程变得极其简单——启动 1024 个并发连接检查只需几行代码，这在 Python/Ruby 中需要复杂的线程池管理'
      },
      {
        title: '编译为单二进制并交叉编译',
        cmd: 'GOOS=linux GOARCH=amd64 go build -o healthcheck-linux ./healthcheck && GOOS=darwin GOARCH=arm64 go build -o healthcheck-mac ./healthcheck',
        output: '# 生成两个二进制文件\nhealthcheck-linux  (Linux x86_64)\nhealthcheck-mac    (macOS ARM64)',
        explain: 'Go 的交叉编译无需任何额外工具链，编译出的二进制包含所有依赖——这就是为什么 Docker/K8s 工具链都选择 Go'
      },
      {
        title: '用 Go 写 Kubernetes 自定义 Controller',
        cmd: 'grep -r "Reconcile" ./controller/',
        output: 'func (r *AppReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {\n    var app v1alpha1.MyApp\n    if err := r.Get(ctx, req.NamespacedName, &app); err != nil {\n        return ctrl.Result{}, client.IgnoreNotFound(err)\n    }\n    // 调谐逻辑...\n    return ctrl.Result{RequeueAfter: 30 * time.Second}, nil\n}',
        explain: 'Kubernetes Operator 模式的核心就是 Go 编写的 Reconcile 循环——监控自定义资源状态并自动修复偏差'
      }
    ],
    diagnosis: [
      {
        symptom: 'Go 程序内存持续增长不释放',
        cause: 'goroutine 泄漏——启动了 goroutine 但没有正确退出，channel 未关闭导致阻塞',
        fix: '用 runtime.NumGoroutine() 监控 goroutine 数量，使用 context.WithCancel 确保 goroutine 能收到退出信号，pprof 分析内存'
      },
      {
        symptom: 'go build 很慢或下载依赖超时',
        cause: 'GOPROXY 设置不当，网络无法访问 goproxy.io',
        fix: '设置国内代理 go env -w GOPROXY=https://goproxy.cn,direct 或使用 vendor 模式 go build -mod=vendor'
      },
      {
        symptom: 'Go 程序在高并发下崩溃',
        cause: '多个 goroutine 并发写入同一个 map 或变量，产生数据竞争',
        fix: '使用 sync.Mutex 保护共享数据，或用 sync.Map 替代普通 map，运行 go run -race 检测竞争'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Go 写一个 HTTP 健康检查服务：监听 :8080，返回 JSON {"status":"ok","uptime":秒数}',
        hint: '使用 net/http 包，记录启动时间 time.Now()，在 handler 中计算 uptime',
        answer: 'package main\n\nimport (\n    "encoding/json"\n    "net/http"\n    "time"\n)\n\nvar start = time.Now()\n\nfunc main() {\n    http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {\n        json.NewEncoder(w).Encode(map[string]interface{}{\n            "status": "ok",\n            "uptime": time.Since(start).Seconds(),\n        })\n    })\n    http.ListenAndServe(":8080", nil)\n}'
      },
      {
        level: '进阶',
        task: '编写一个 CLI 工具，接受 --host 和 --port 参数，并发检查端口范围并输出结果表格',
        hint: '使用 cobra 或 flag 包解析参数，goroutine + channel 收集结果，sync.WaitGroup 等待完成',
        answer: '使用 flag 包定义 host/start/end 参数，for 循环启动 goroutine 检查每个端口，将结果发送到 channel，主 goroutine 从 channel 读取并打印表格'
      },
      {
        level: '挑战',
        task: '用 client-go 编写一个简单的 Kubernetes Controller，监听 Pod 并在 Pod 失败时自动发送通知',
        hint: '使用 controller-runtime 框架，实现 Reconciler 接口，检查 Pod.Status.Phase == "Failed"',
        answer: '基于 controller-runtime 创建 Manager，注册 Controller 监听 Pod 事件，在 Reconcile 中检查 Pod 状态，如果 Failed 则调用 webhook 发送通知，最后 RequeueAfter 持续监控'
      }
    ]
  },

  "eL62bKAoJCMsu7zPlgyhy": {
    mentalModel: 'Rust 是"零成本抽象 + 内存安全"的极致——DevOps 领域中高性能工具（Linkerd proxy、Firecracker 微虚拟机、ripgrep）开始用 Rust 重写，因为它消除了 C/C++ 的内存 bug 同时保持极致性能',
    handsOn: [
      {
        title: '用 Rust 编写高性能日志分析器',
        cmd: 'cargo new log-analyzer && cd log-analyzer && cat src/main.rs',
        output: 'use std::fs::File;\nuse std::io::{BufRead, BufReader};\nuse std::collections::HashMap;\n\nfn main() {\n    let file = File::open("access.log").unwrap();\n    let mut status_counts: HashMap<u16, usize> = HashMap::new();\n    for line in BufReader::new(file).lines() {\n        if let Some(code) = parse_status(&line.unwrap()) {\n            *status_counts.entry(code).or_insert(0) += 1;\n        }\n    }\n    for (code, count) in &status_counts {\n        println!("HTTP {}: {}", code, count);\n    }\n}',
        explain: 'Rust 的 BufReader 和迭代器模式让文件处理既快又安全——处理 1GB 日志文件只需几秒，且不会有缓冲区溢出风险'
      },
      {
        title: '交叉编译并生成极小的静态二进制',
        cmd: 'cargo build --release --target x86_64-unknown-linux-musl && ls -lh target/x86_64-unknown-linux-musl/release/log-analyzer',
        output: '-rwxr-xr-x 2.1M log-analyzer',
        explain: 'musl 静态链接生成完全独立的二进制，2.1MB 包含所有依赖——可以直接复制到任何 Linux 机器运行，无需运行时环境'
      }
    ],
    diagnosis: [
      {
        symptom: 'Rust 编译报错 "cannot borrow as mutable"',
        cause: 'Rust 的所有权系统——同一时间只能有一个可变引用或任意数量的不可变引用',
        fix: '理解借用规则：使用 clone() 复制数据，或使用 RefCell/Mutex 实现内部可变性，重构代码减少引用交叉'
      },
      {
        symptom: '编译时间过长（>5分钟）',
        cause: 'Rust 编译器做了大量静态分析，大型项目增量编译仍慢',
        fix: '使用 cargo build 而非 --release 做开发编译，配置 sccache 缓存编译结果，拆分 crate 减少重编译范围'
      },
      {
        symptom: 'unwrap() 导致生产环境 panic',
        cause: 'unwrap() 在遇到 None/Err 时直接 panic，不适合生产代码',
        fix: '用 ? 操作符传播错误，用 match 或 if let 处理 Option/Result，使用 thiserror/anyhow crate 做结构化错误处理'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Rust 写一个命令行工具，统计指定目录下所有文件的行数、单词数和字节数（类似 wc）',
        hint: '使用 std::fs::read_dir 遍历目录，BufReader 按行读取，str::split_whitespace 计单词',
        answer: '遍历 read_dir 结果，对每个文件用 BufReader 逐行读取，累计 lines/words/bytes，用 format! 对齐输出表格'
      },
      {
        level: '进阶',
        task: '用 tokio 编写异步 HTTP 并发检查器，同时请求 100 个 URL 并报告响应时间',
        hint: '使用 tokio + reqwest，futures::future::join_all 并发执行所有请求',
        answer: '#[tokio::main] async fn main() 中创建 reqwest::Client，map urls 为 futures，join_all 并发执行，每个 future 记录 elapsed 时间并输出结果'
      }
    ]
  },

  "QCdemtWa2mE78poNXeqzr": {
    mentalModel: 'JavaScript/Node.js 是 DevOps 中的"意外英雄"——GitHub Actions 用 JS 写自定义 Action，CDK (Cloud Development Kit) 用 TypeScript 定义云基础设施，Pulumi 也支持 TS，前端全栈能力让 DevOps 工具拥有 Web UI',
    handsOn: [
      {
        title: '编写 GitHub Actions 自定义 JavaScript Action',
        cmd: 'cat action.yml && echo "---" && cat index.js',
        output: 'name: "Health Check"\ninputs:\n  url:\n    required: true\nruns:\n  using: "node20"\n  main: "index.js"\n---\nconst core = require("@actions/core");\nconst http = require("https");\n\nconst url = core.getInput("url");\nhttp.get(url, (res) => {\n  core.setOutput("status", res.statusCode);\n  if (res.statusCode !== 200) core.setFailed(`Got ${res.statusCode}`);\n  else core.info(`${url} is healthy`);\n});',
        explain: 'GitHub Actions 生态中大量自定义 Action 用 Node.js 编写，@actions/core 提供输入输出和日志 API，是 DevOps 工程师扩展 CI/CD 的主要方式'
      },
      {
        title: '用 AWS CDK 定义基础设施',
        cmd: 'cat lib/stack.ts',
        output: 'import * as cdk from "aws-cdk-lib";\nimport * as ec2 from "aws-cdk-lib/aws-ec2";\nimport * as ecs from "aws-cdk-lib/aws-ecs";\n\nexport class AppStack extends cdk.Stack {\n  constructor(scope: cdk.App, id: string) {\n    super(scope, id);\n    const vpc = new ec2.Vpc(this, "Vpc", { maxAzs: 2 });\n    const cluster = new ecs.Cluster(this, "Cluster", { vpc });\n    // 用 TypeScript 定义完整基础设施\n  }\n}',
        explain: 'AWS CDK 让你用 TypeScript（而非 YAML/JSON）定义云资源，享受类型检查、IDE 补全和代码复用——基础设施即代码的真正含义'
      },
      {
        title: 'Node.js 脚本实现 JSON 日志聚合',
        cmd: 'node -e "const fs=require(\"fs\"); const lines=fs.readFileSync(\"app.log\",\"utf8\").trim().split(\"\\n\"); const errs=lines.map(JSON.parse).filter(l=>l.level===\"error\"); console.log(`Errors: ${errs.length}/${lines.length}`);"',
        output: 'Errors: 23/1547',
        explain: 'Node.js 处理 JSON 天然高效（无需解析库），是分析结构化日志和 API 响应的利器'
      }
    ],
    diagnosis: [
      {
        symptom: 'npm install 在 CI 中非常慢',
        cause: '每次 CI 构建都重新下载所有依赖，npm 默认不使用缓存',
        fix: '使用 actions/cache 缓存 ~/.npm，或使用 npm ci 配合 package-lock.json 确保确定性安装，考虑 pnpm 减少磁盘占用'
      },
      {
        symptom: 'Node.js 脚本内存溢出 "heap out of memory"',
        cause: '默认堆内存限制约 1.7GB，处理大文件或大量数据时不够',
        fix: '启动时设置 --max-old-space-size=4096 增加内存，或使用 stream 逐行处理文件而非一次性读入'
      },
      {
        symptom: 'GitHub Action 报 "node: not found"',
        cause: 'Action 的 runs.using 指定了 node20 但 runner 环境不支持',
        fix: '确保使用 actions/setup-node 设置正确版本，或将 Action 打包为 Docker 容器以隔离运行时'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 Node.js 脚本，监控指定 URL 列表的响应时间和状态码，输出表格',
        hint: '使用 https.get 或 node-fetch，Promise.all 并发请求，记录 Date.now() 差值',
        answer: 'const urls = ["https://google.com","https://github.com"];\nPromise.all(urls.map(async url => {\n  const start = Date.now();\n  const res = await fetch(url);\n  return { url, status: res.status, ms: Date.now()-start };\n})).then(results => console.table(results));'
      },
      {
        level: '进阶',
        task: '用 AWS CDK 创建一个包含 VPC、ECS 集群和 ALB 的完整 Web 服务栈',
        hint: '使用 ec2.Vpc、ecs.Cluster、ecs_patterns.ApplicationLoadBalancedFargateService',
        answer: '使用 ecs_patterns 的 ApplicationLoadBalancedFargateService 可以一行代码创建 VPC+Cluster+Service+ALB 的完整架构，然后用 cdk deploy 部署'
      }
    ]
  },

  "UOQimp7QkM3sxmFvk5d3i": {
    mentalModel: 'Windows 在 DevOps 中不可忽视——企业环境中大量 Windows Server 运行着 SQL Server、.NET 应用和 Active Directory。Windows 的 DevOps 围绕 PowerShell、WSL2、Windows Container 和 Azure DevOps 展开',
    handsOn: [
      {
        title: '用 PowerShell 管理 Windows 服务',
        cmd: 'Get-Service -Name "wuauserv","W32Time" | Select-Object Name,Status,StartType | Format-Table',
        output: 'Name      Status  StartType\n----      ------  ---------\nwuauserv  Running Automatic\nW32Time   Stopped Manual',
        explain: 'PowerShell 的 Get-Service 返回结构化对象而非文本，可以直接用管道过滤和操作——这是 Windows 自动化的基础'
      },
      {
        title: 'Windows 上的 Docker 运行 Linux 容器',
        cmd: 'docker run --rm -it mcr.microsoft.com/powershell pwsh -c "Write-Host \'Container ready\'"',
        output: 'Container ready',
        explain: 'Windows 通过 WSL2 后端支持 Linux 容器，DevOps 工程师需要理解 Windows 上两种容器模式：Windows Container（Server Core/Nano）和 Linux Container（通过 WSL2）'
      },
      {
        title: '使用 WSL2 在 Windows 上运行 Linux 工具',
        cmd: 'wsl --list --verbose && wsl -d Ubuntu -- bash -c "kubectl version --client"',
        output: '  NAME      STATE    VERSION\n* Ubuntu    Running  2\nClient Version: v1.29.0',
        explain: 'WSL2 让 Windows 成为完整的 DevOps 开发平台——在 Windows 上写代码，在 WSL2 中运行 Linux 工具和容器，两全其美'
      }
    ],
    diagnosis: [
      {
        symptom: 'Windows 上 Docker 启动失败 "WSL2 installation is incomplete"',
        cause: 'WSL2 内核未更新或虚拟化功能未启用',
        fix: '执行 wsl --update，确保 BIOS 中 VT-x/AMD-V 已启用，Windows 功能中勾选"虚拟机平台"和"适用于 Linux 的 Windows 子系统"'
      },
      {
        symptom: 'PowerShell 脚本执行报 "cannot be loaded because running scripts is disabled"',
        cause: 'PowerShell 执行策略默认禁止运行脚本',
        fix: '执行 Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned 允许本地脚本运行'
      },
      {
        symptom: 'Windows Server 上的 IIS 应用池频繁回收',
        cause: '应用池 idle timeout 设置过短或内存限制触发回收',
        fix: '修改应用池高级设置：Idle Time-out=0，调整 Recycling > Private Memory Limit，配置 Always Running 保持预热'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 PowerShell 脚本，检查 Windows Server 上的磁盘空间、内存使用率和 CPU 负载',
        hint: '使用 Get-WmiObject Win32_LogicalDisk、Get-Counter 和 Get-CimInstance Win32_OperatingSystem',
        answer: 'Get-CimInstance Win32_LogicalDisk | Where-Object DriveType -eq 3 | Select DeviceID,@{N="Free(GB)";E={[math]::Round($_.FreeSpace/1GB,2)}},@{N="Used%";E={[math]::Round(($_.Size-$_.FreeSpace)/$_.Size*100,1)}}\n$os = Get-CimInstance Win32_OperatingSystem\nWrite-Host "Memory: $([math]::Round(($os.TotalVisibleMemorySize-$os.FreePhysicalMemory)/1MB,2)) GB used"'
      },
      {
        level: '进阶',
        task: '配置 Windows Server 上的 Docker，构建一个运行 .NET 应用的 Windows Container 镜像',
        hint: '使用 FROM mcr.microsoft.com/dotnet/aspnet:8.0-windowsservercore-ltsc2022 作为基础镜像',
        answer: 'FROM mcr.microsoft.com/dotnet/aspnet:8.0-windowsservercore-ltsc2022\nWORKDIR /app\nCOPY publish/ .\nEXPOSE 80\nENTRYPOINT ["dotnet", "MyApp.dll"]\n\n# 构建和运行\n# docker build -t myapp:win .\n# docker run -d -p 8080:80 myapp:win'
      }
    ]
  },

  "qe84v529VbCyydl0BKFk2": {
    mentalModel: '操作系统是 DevOps 的"地基层"——所有容器、服务、网络都运行在 OS 之上。理解进程管理、文件系统、权限模型和网络栈是排障的基础，Linux 内核的 namespace/cgroup 正是容器技术的底层实现',
    handsOn: [
      {
        title: '查看 Linux namespace（容器的隔离基础）',
        cmd: 'ls -la /proc/1/ns/ && echo "---" && lsns -t pid | head -5',
        output: 'lrwxrwxrwx cgroup -> cgroup:[4026531839]\nlrwxrwxrwx ipc    -> ipc:[4026531837]\nlrwxrwxrwx mnt    -> mnt:[4026531838]\nlrwxrwxrwx net    -> net:[4026531840]\nlrwxrwxrwx pid    -> pid:[4026531836]\n---\nNS              TYPE NPROCS PID USER COMMAND\n4026531836 pid      45   1   root /sbin/init',
        explain: 'Linux namespace 是容器隔离的底层技术：pid namespace 隔离进程号，net namespace 隔离网络栈，mnt namespace 隔离文件系统——理解它才能调试容器问题'
      },
      {
        title: '查看 cgroup 资源限制（容器的资源控制基础）',
        cmd: 'cat /sys/fs/cgroup/memory/docker/$(docker ps -q | head -1)/memory.max 2>/dev/null || cat /sys/fs/cgroup/memory/memory.limit_in_bytes',
        output: '536870912',
        explain: 'cgroup 限制容器的 CPU、内存、IO 等资源——536870912 字节 = 512MB，这就是容器内存限制的实现原理'
      },
      {
        title: '使用 strace 跟踪系统调用（排障利器）',
        cmd: 'strace -e trace=open,connect -f -p $(pgrep nginx | head -1) 2>&1 | head -10',
        output: '[pid 1234] open("/etc/nginx/nginx.conf", O_RDONLY) = 3\n[pid 1234] open("/var/log/nginx/access.log", O_WRONLY|O_APPEND) = 4\n[pid 1234] connect(3, {sa_family=AF_INET, sin_port=htons(9000)}, 16) = 0',
        explain: 'strace 跟踪进程的系统调用——当应用行为异常但日志无提示时，strace 能看到它实际在做什么（读什么文件、连什么网络）'
      }
    ],
    diagnosis: [
      {
        symptom: '容器 OOM Killed 但应用日志无异常',
        cause: 'cgroup 内存限制被触发，内核直接发送 SIGKILL 终止进程，应用来不及写日志',
        fix: '用 dmesg | grep "oom-kill" 确认，检查 /sys/fs/cgroup/memory/memory.max 限制，适当增加内存限制或优化应用内存使用'
      },
      {
        symptom: '服务启动报 "Permission denied" 但文件权限看起来正确',
        cause: 'SELinux 或 AppArmor 强制访问控制阻止了操作，传统 ls -la 不显示这些标签',
        fix: '检查 SELinux：ls -Z 查看标签，getenforce 查看模式；检查 AppArmor：aa-status 查看配置文件；临时用 setenforce 0 或 aa-complain 排查'
      },
      {
        symptom: '系统负载高但 CPU 使用率低',
        cause: '进程处于 D 状态（不可中断睡眠），通常在等待磁盘 IO 或 NFS 响应',
        fix: 'ps aux | grep " D " 找到阻塞进程，用 iostat -x 1 检查磁盘 IO，检查 NFS 挂载是否超时'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查看当前系统的 namespace 数量、类型，并理解 Docker 容器使用了哪些 namespace',
        hint: '使用 lsns 命令列出所有 namespace，docker inspect 查看容器的 Pid，然后检查 /proc/PID/ns/',
        answer: 'lsns 列出所有 namespace\n# 启动容器\ndocker run -d --name test nginx\nPID=$(docker inspect -f "{{.State.Pid}}" test)\nls -la /proc/$PID/ns/  # 可看到容器的 namespace 与宿主机不同\n# 对比宿主机 init 进程的 namespace\nls -la /proc/1/ns/'
      },
      {
        level: '进阶',
        task: '使用 systemd-analyze 和 systemd-cgtop 分析系统启动时间和 cgroup 资源使用',
        hint: 'systemd-analyze blame 显示各服务启动耗时，systemd-cgtop 实时显示 cgroup 资源占用',
        answer: 'systemd-analyze                    # 总启动时间\nsystemd-analyze blame | head -10    # 最慢的 10 个服务\nsystemd-analyze critical-chain      # 关键启动链\nsystemd-cgtop                       # 实时 cgroup 资源监控'
      }
    ]
  },

  "syBIAL1mHbJLnTBoSxXI7": {
    mentalModel: 'Bash 是 DevOps 的"母语"——几乎所有服务器运维、CI/CD 脚本、容器 ENTRYPOINT 都用 Bash。它的管道模型（命令组合）是 Unix 哲学的体现：每个工具做一件事，通过管道组合完成复杂任务',
    handsOn: [
      {
        title: '编写健壮的 Bash 脚本模板',
        cmd: 'cat deploy.sh',
        output: '#!/usr/bin/env bash\nset -euo pipefail  # 错误退出/未定义变量报错/管道错误传播\nIFS=$\'\\n\\t\'       # 只用换行和tab分词\n\nlog() { echo "[$(date +%H:%M:%S)] $*"; }\ntrap \'log "ERROR on line $LINENO"\' ERR\n\nlog "Starting deployment..."\n# 实际部署逻辑\nlog "Done."',
        explain: 'set -euo pipefail 是生产 Bash 脚本的标配：-e 遇错即停，-u 未定义变量报错，-o pipefail 管道中任何命令失败都传播错误。trap 捕获错误信息'
      },
      {
        title: '用管道组合实现日志分析',
        cmd: 'cat access.log | grep "GET /api" | awk \'{print $9}\' | sort | uniq -c | sort -rn | head -5',
        output: '  1234 200\n   567 404\n   234 500\n    89 401\n    45 403',
        explain: '经典的 Unix 管道：grep 过滤 → awk 提取字段 → sort 排序 → uniq 计数 → sort 按频率排 → head 取 Top5。5 个简单命令组合完成复杂分析'
      },
      {
        title: 'Bash 进程替换和 Here Document',
        cmd: 'diff <(ssh server1 "cat /etc/nginx/nginx.conf") <(ssh server2 "cat /etc/nginx/nginx.conf") && echo "Config identical"',
        output: '5c5\n< worker_processes 4;\n---\n> worker_processes 8;\n# 两台服务器配置不一致',
        explain: '<() 进程替换让命令输出像文件一样被处理，diff 可以直接比较远程服务器配置——DevOps 日常的配置一致性检查'
      }
    ],
    diagnosis: [
      {
        symptom: 'Bash 脚本在本地正常但在 CI 中失败',
        cause: 'CI 环境中没有 .bashrc 加载的环境变量、PATH 或非交互式 shell 行为不同',
        fix: '脚本开头明确设置所有依赖的变量和 PATH，使用 /usr/bin/env bash 而非 /bin/bash，不依赖 shell profile'
      },
      {
        symptom: 'for 循环中变量赋值在循环外消失',
        cause: '管道创建的子 shell——echo "a b" | while read x; do VAR=$x; done 中 VAR 在子 shell 中，循环结束就丢失',
        fix: '使用进程替换避免子 shell：while read x; do VAR=$x; done < <(echo "a b")，或用 here-string <<< "a b"'
      },
      {
        symptom: '脚本中 [[ ]] 和 [ ] 行为不一致',
        cause: '[ ] 是 POSIX 兼容但功能有限，[[ ]] 是 Bash 扩展支持正则和逻辑操作',
        fix: '始终使用 [[ ]]，它支持 &&、||、=~ 正则匹配，不需要转义特殊字符，更安全也更强大'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 Bash 脚本，监控磁盘使用率，超过 80% 时发送告警（输出到文件模拟）',
        hint: 'df -h 输出中 $5 是使用率百分比，用 awk 提取数字，if 比较',
        answer: '#!/usr/bin/env bash\nset -euo pipefail\nTHRESHOLD=80\ndf -h | awk \'NR>1 && $5+0 > 0 {print $5, $6}\' | while read usage mount; do\n  pct=${usage%%%}\n  if (( pct > THRESHOLD )); then\n    echo "[ALERT] $(date): $mount is at ${usage}" >> /var/log/disk-alert.log\n  fi\ndone'
      },
      {
        level: '进阶',
        task: '编写一个 Bash 函数库，提供 log_info、log_error、retry、require_cmd 等通用函数',
        hint: 'retry 函数接受命令和重试次数，用 for 循环和 sleep 实现；require_cmd 检查命令是否存在',
        answer: 'log_info()  { echo "[$(date +%H:%M:%S)] INFO  $*" >&2; }\nlog_error() { echo "[$(date +%H:%M:%S)] ERROR $*" >&2; }\nretry() {\n  local n=$1; shift\n  for ((i=1;i<=n;i++)); do\n    "$@" && return 0\n    log_error "Attempt $i/$n failed, retrying..."\n    sleep $((i*2))\n  done\n  return 1\n}\nrequire_cmd() { command -v "$1" >/dev/null || { log_error "$1 not found"; exit 1; }; }'
      },
      {
        level: '挑战',
        task: '编写一个零依赖的 Bash 部署脚本：拉取 Git 仓库、构建 Docker 镜像、滚动更新容器、失败时自动回滚',
        hint: '用 trap 设置回滚函数，docker stop/rm 旧容器，docker run 新容器，health check 验证后切换',
        answer: '#!/usr/bin/env bash\nset -euo pipefail\nIMAGE=$1; TAG=$2; NAME="myapp"\nROLLBACK_TAG=$(docker inspect --format="{{.Config.Image}}" "$NAME" 2>/dev/null || echo "none")\nrollback() { log_error "Rolling back..."; docker rm -f "$NAME"; docker run -d --name "$NAME" "$ROLLBACK_TAG"; }\ntrap rollback ERR\ndocker pull "$IMAGE:$TAG"\ndocker stop "$NAME" && docker rm "$NAME"\ndocker run -d --name "$NAME" "$IMAGE:$TAG"\nfor i in $(seq 1 30); do\n  curl -sf http://localhost:8080/health && exit 0\n  sleep 2\ndone\nexit 1  # 触发 trap rollback'
      }
    ]
  },

  "z6IBekR8Xl-6f8WEb05Nw": {
    mentalModel: 'PowerShell 是"面向对象的 Shell"——与 Bash 的文本管道不同，PowerShell 管道传递的是 .NET 对象，可以直接访问属性和方法。在 Windows 管理和 Azure DevOps 中不可替代，跨平台的 PowerShell 7 也能在 Linux 上使用',
    handsOn: [
      {
        title: 'PowerShell 对象管道 vs Bash 文本管道',
        cmd: 'Get-Process | Where-Object { $_.WorkingSet64 -gt 100MB } | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 Name,Id,@{N="MemMB";E={[math]::Round($_.WorkingSet64/1MB)}}',
        output: 'Name          Id MemMB\n----          -- -----\nchrome     12345  456\ncode       12346  389\nteams      12347  256',
        explain: 'PowerShell 的管道传递对象而非文本——Where-Object 直接比较属性值，不需要 awk/grep 解析文本。@{} 是计算属性，实时计算 MB 值'
      },
      {
        title: '用 PowerShell 管理 Azure 资源',
        cmd: 'Connect-AzAccount; Get-AzVM | Select-Object Name,ResourceGroupName,Location,PowerState | Format-Table',
        output: 'Name    ResourceGroupName Location  PowerState\n----    ----------------- --------  ----------\nweb-vm  prod-rg           eastus    VM running\ndb-vm   prod-rg           eastus    VM deallocated',
        explain: 'Az 模块让 PowerShell 成为 Azure 管理的首选工具，Cmdlet 的 Verb-Noun 命名模式让命令可预测：Get-*/Set-*/New-*/Remove-*'
      },
      {
        title: '编写 PowerShell DSC（期望状态配置）',
        cmd: 'cat WebServerConfig.ps1',
        output: 'Configuration WebServer {\n    Node "localhost" {\n        WindowsFeature IIS {\n            Ensure = "Present"\n            Name = "Web-Server"\n        }\n        File WebContent {\n            DestinationPath = "C:\\inetpub\\wwwroot\\index.html"\n            Contents = "<h1>Hello from DSC</h1>"\n            DependsOn = "[WindowsFeature]IIS"\n        }\n    }\n}\nWebServer\nStart-DscConfiguration -Path ./WebServer -Wait',
        explain: 'DSC 是 PowerShell 的基础设施即代码——声明期望状态（安装 IIS、放置文件），系统自动收敛到该状态，类似 Ansible/Puppet'
      }
    ],
    diagnosis: [
      {
        symptom: 'PowerShell 远程命令报 "Access is denied"',
        cause: 'WinRM（Windows Remote Management）未启用或防火墙阻止',
        fix: '在远程机器上执行 Enable-PSRemoting -Force，确保防火墙允许 5985/5986 端口，使用 CredSSP 或 Kerberos 认证'
      },
      {
        symptom: 'PowerShell 脚本在 Windows PowerShell 5.1 和 PowerShell 7 行为不同',
        cause: 'PowerShell 7 基于 .NET Core，部分 Windows 专属 Cmdlet 和 .NET Framework API 不可用',
        fix: '使用 #Requires -Version 7 明确版本要求，检查模块兼容性 Install-Module -Name ModuleName -CompatiblePSEditions Core'
      },
      {
        symptom: '执行策略阻止脚本运行',
        cause: 'Windows 默认执行策略为 Restricted，不允许运行 .ps1 脚本',
        fix: 'Set-ExecutionPolicy -Scope CurrentUser RemoteSigned（允许本地脚本，远程脚本需签名），或通过 GPO 在企业范围设置'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 PowerShell 脚本，导出系统中所有已安装软件的名称、版本和安装日期到 CSV',
        hint: '使用 Get-ItemProperty HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* 获取注册表信息',
        answer: 'Get-ItemProperty HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* |\n  Where-Object DisplayName |\n  Select-Object DisplayName,DisplayVersion,InstallDate |\n  Sort-Object DisplayName |\n  Export-Csv -Path installed-software.csv -NoTypeInformation'
      },
      {
        level: '进阶',
        task: '编写 PowerShell 函数，批量检查远程服务器的 Windows 更新状态',
        hint: '使用 Invoke-Command 远程执行 Get-HotFix，-ComputerName 参数指定目标',
        answer: 'function Get-ServerUpdates {\n  param([string[]]$Servers)\n  Invoke-Command -ComputerName $Servers -ScriptBlock {\n    Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 5\n  } | Select-Object PSComputerName,HotFixID,InstalledOn\n}\nGet-ServerUpdates -Servers "srv1","srv2","srv3"'
      }
    ]
  },

  "x-JWvG1iw86ULL9KrQmRu": {
    mentalModel: '进程监控是 DevOps 的"心电图"——通过观察进程状态（存活、CPU/内存使用、重启次数）判断系统健康。核心工具链是 ps/top → systemd → Prometheus+Grafana，从简单到复杂逐层递进',
    handsOn: [
      {
        title: '用 ps 和 top 快速诊断进程状态',
        cmd: 'ps aux --sort=-%mem | head -10 && echo "---" && ps -eo pid,ppid,user,%cpu,%mem,etime,comm --sort=-%cpu | head -10',
        output: 'USER    PID %CPU %MEM    VSZ   RSS COMMAND\nmysql  1234  5.2 34.1 4567890 1234567 /usr/sbin/mysqld\nnginx  5678  0.1  0.5  12345  23456 nginx: worker\n---\nPID  PPID USER  %CPU %MEM  ELAPSED COMM\n1234     1 mysql  5.2 34.1 2-03:45:12 mysqld\n5678     1 nginx  0.1  0.5   12:34:56 nginx',
        explain: 'ps 的 --sort 按内存或 CPU 排序快速找到资源大户，ELAPSED 显示运行时间——长期运行的进程如果突然重启说明有问题'
      },
      {
        title: 'systemd 服务监控和自动重启',
        cmd: 'systemctl status myapp && journalctl -u myapp --since "1 hour ago" --no-pager | tail -20',
        output: '● myapp.service - My Application\n   Loaded: loaded (/etc/systemd/system/myapp.service; enabled)\n   Active: active (running) since Mon 2024-01-15 08:00:00 UTC\n  Process: 12345 ExecStart=/opt/myapp/bin/start (code=exited, status=0)\n   Memory: 256.0M\n      CPU: 12.345s',
        explain: 'systemd 不仅管理服务启动，还提供 Restart=on-failure 自动重启、WatchdogSec= 看门狗健康检查、ResourcesMax= 资源限制——是最基础的进程监控工具'
      },
      {
        title: '用 Prometheus node_exporter 暴露进程指标',
        cmd: 'curl -s http://localhost:9100/metrics | grep "namedprocess" | head -5',
        output: 'namedprocess_namegroup_num_procs{groupname="nginx"} 4\nnamedprocess_namegroup_cpu_seconds_total{groupname="nginx",mode="user"} 1234.56\nnamedprocess_namegroup_memory_bytes{groupname="nginx",memtype="resident"} 67890123',
        explain: 'process-exporter 按进程名聚合指标，通过 Prometheus 采集后在 Grafana 中可视化——这是生产环境进程监控的标准方案'
      }
    ],
    diagnosis: [
      {
        symptom: '进程频繁重启（OOM Kill）',
        cause: '进程内存使用超过 cgroup 或系统限制，内核触发 OOM Killer',
        fix: 'dmesg | grep -i oom 确认，检查 systemd 的 MemoryMax= 限制，分析内存泄漏或增加内存配额'
      },
      {
        symptom: 'CPU 使用率 100% 但不知道哪个线程导致',
        cause: 'top 只显示进程级 CPU，需要线程级分析',
        fix: 'top -H -p <PID> 查看线程级 CPU，用 perf top -p <PID> 或 strace -p <PID> -c 分析热点函数'
      },
      {
        symptom: '僵尸进程（Z 状态）积累',
        cause: '子进程已退出但父进程未调用 wait() 回收，常见于容器 PID 1 问题',
        fix: '找到父进程（PPID）并重启它，容器中使用 tini 或 dumb-init 作为 PID 1 来正确回收子进程'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写脚本，每隔 10 秒检查指定进程是否存活，不存活则记录日志并尝试重启',
        hint: '使用 pgrep 检查进程，systemctl restart 重启，while true + sleep 循环',
        answer: '#!/usr/bin/env bash\nset -euo pipefail\nSERVICE="myapp"\nwhile true; do\n  if ! systemctl is-active --quiet "$SERVICE"; then\n    echo "[$(date)] $SERVICE is down, restarting..." >> /var/log/monitor.log\n    systemctl restart "$SERVICE"\n  fi\n  sleep 10\ndone'
      },
      {
        level: '进阶',
        task: '配置 systemd service 文件，实现自动重启、资源限制和日志管理',
        hint: '使用 Restart=on-failure、MemoryMax=、CPUQuota=、StandardOutput=journal',
        answer: '[Unit]\nDescription=My App\nAfter=network.target\n\n[Service]\nExecStart=/opt/myapp/bin/start\nRestart=on-failure\nRestartSec=5s\nStartLimitBurst=3\nStartLimitIntervalSec=60\nMemoryMax=512M\nCPUQuota=80%\nStandardOutput=journal\nStandardError=journal\n\n[Install]\nWantedBy=multi-user.target'
      }
    ]
  },

  "PiPHFimToormOPl1EtEe8": {
    mentalModel: 'FreeBSD 是"工程卓越的 Unix"——以稳定性、安全性和网络性能著称。Netflix 用它做 CDN 服务器（Open Connect），iXsystems 用它做存储（TrueNAS）。DevOps 中遇到 FreeBSD 主要在高性能网络和存储场景',
    handsOn: [
      {
        title: 'FreeBSD 包管理和服务管理',
        cmd: 'pkg install nginx && sysrc nginx_enable=YES && service nginx start',
        output: 'Updating FreeBSD repository catalogue...\nInstalling nginx-1.24.0...\nnginx_enable: NO -> YES\nStarting nginx.',
        explain: 'FreeBSD 的 pkg 类似 apt/yum，sysrc 安全地修改 /etc/rc.conf（类似 systemctl enable），service 管理服务——概念相通但工具不同'
      },
      {
        title: 'FreeBSD Jail 容器化',
        cmd: 'ezjail-admin create myjail "lo1|127.0.1.1,em0|192.168.1.100" && ezjail-admin start myjail && jexec myjail pkg install nginx',
        output: 'Creating jail myjail...\nStarting jail myjail: OK\nInstalling nginx in jail...',
        explain: 'Jail 是 FreeBSD 的容器技术（早于 Linux 容器），提供进程隔离和资源限制。ezjail 简化管理，jexec 进入 Jail 执行命令'
      },
      {
        title: 'ZFS 文件系统管理',
        cmd: 'zpool status && zfs create -o compression=lz4 tank/data && zfs snapshot tank/data@daily && zfs list -t snapshot',
        output: 'pool: tank\n state: ONLINE\n---\nNAME              USED  AVAIL  COMPRESS  MOUNTPOINT\ntank/data         128K  900G   lz4       /tank/data\n---\ntank/data@daily     0K      -        -  -',
        explain: 'ZFS 是 FreeBSD 的核心存储技术——写时复制、快照、压缩、校验一体化。在 Linux 上也可以用 OpenZFS，是存储 DevOps 的必备知识'
      }
    ],
    diagnosis: [
      {
        symptom: 'FreeBSD 上 pkg install 报 "No repositories available"',
        cause: 'pkg 仓库配置未初始化或网络不通',
        fix: '执行 pkg bootstrap 初始化，检查 /etc/pkg/FreeBSD.conf 仓库 URL，确认 DNS 和 HTTPS 连接正常'
      },
      {
        symptom: 'Jail 中的服务无法访问网络',
        cause: 'Jail 的网络接口未正确配置或防火墙规则阻止',
        fix: '检查 Jail 的 IP 配置，确保宿主机配置了 NAT 或桥接，检查 ipfw/pf 防火墙规则是否允许 Jail 流量'
      },
      {
        symptom: 'ZFS pool 状态显示 DEGRADED',
        cause: '一块磁盘故障或离线，冗余阵列降级运行',
        fix: 'zpool status 确认故障磁盘，zpool replace tank <故障盘> <新盘> 替换，zpool scrub tank 验证数据完整性'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 FreeBSD 上安装并配置 Nginx，启用 HTTPS 和 gzip 压缩',
        hint: '使用 pkg install nginx，编辑 /usr/local/etc/nginx/nginx.conf，使用 sysrc 启用',
        answer: 'pkg install nginx\n# 编辑 nginx.conf 添加 ssl_certificate 和 gzip on;\nsysrc nginx_enable=YES\nservice nginx start\n# 验证\ncurl -k https://localhost'
      },
      {
        level: '进阶',
        task: '创建一个 ZFS 存储方案：RAID-Z2 池 + 定期快照 + 远程复制',
        hint: '使用 zpool create 创建 RAID-Z2，crontab 定期 zfs snapshot，zfs send | zfs receive 远程复制',
        answer: 'zpool create tank raidz2 da1 da2 da3 da4\nzfs create -o compression=lz4 -o atime=off tank/backup\n# crontab\ncrontab -e\n0 */6 * * * zfs snapshot tank/backup@$(date +\\%Y\\%m\\%d-\\%H\\%M)\n0 1 * * * zfs send -i tank/backup@prev tank/backup@latest | ssh backup-server zfs receive -F backup-pool/backup'
      }
    ]
  },

  "cTqVab0VbVcn3W7i0wBrX": {
    mentalModel: 'Ubuntu/Debian 是 DevOps 的"主力发行版"——大多数云服务器、Docker 基础镜像和 CI runner 都基于它们。apt 包管理、systemd 服务、PPA 源和 cloud-init 是日常操作的核心工具链',
    handsOn: [
      {
        title: 'apt 包管理全流程',
        cmd: 'apt update && apt install -y nginx=1.24.* && apt-mark hold nginx && apt list --upgradable | head -5',
        output: 'Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease\nReading package lists... Done\nInstalling nginx 1.24.0...\nnginx set on hold.\nListing upgradable...\ncurl/jammy-updates 7.81.0-1ubuntu1.15 amd64 [upgradable]',
        explain: 'apt-mark hold 锁定包版本——在生产环境中防止关键软件（如 Nginx、Docker）被意外升级。指定版本号安装是确定性部署的基础'
      },
      {
        title: 'cloud-init 首次启动配置',
        cmd: 'cat cloud-config.yml',
        output: '#cloud-config\npackage_update: true\npackages:\n  - docker.io\n  - nginx\n  - htop\n\nusers:\n  - name: deploy\n    groups: sudo\n    ssh_authorized_keys:\n      - ssh-ed25519 AAAA... deploy@ci\n\nruncmd:\n  - systemctl enable docker\n  - usermod -aG docker deploy',
        explain: 'cloud-init 是云服务器首次启动时的标准化配置工具——通过 YAML 声明式地安装包、创建用户、配置 SSH，无需手动 SSH 登录配置'
      },
      {
        title: '使用 dpkg 和 apt 排查依赖问题',
        cmd: 'dpkg -l | grep docker && apt-cache depends docker.io | head -10 && apt-get -f install',
        output: 'ii  docker.io  24.0.7  amd64  Linux container runtime\n---\ndocker.io\n  Depends: containerd (>= 1.2.6)\n  Depends: iptables\n  Depends: libseccomp2 (>= 2.1.1)\n---\nReading package lists... Done\n0 upgraded, 0 newly installed, 0 to remove.',
        explain: 'dpkg -l 查看已安装包状态，apt-cache depends 查看依赖关系，apt-get -f install 修复损坏的依赖——排障三板斧'
      }
    ],
    diagnosis: [
      {
        symptom: 'apt update 报 "GPG error: NO_PUBKEY"',
        cause: '第三方仓库的 GPG 签名密钥未导入或已过期',
        fix: '从错误信息中获取 KEY_ID，执行 apt-key adv --keyserver keyserver.ubuntu.com --recv-keys KEY_ID 或按仓库文档使用 /etc/apt/trusted.gpg.d/ 方式导入'
      },
      {
        symptom: 'apt install 报 "Unable to locate package"',
        cause: '包名拼写错误、PPA 未添加、或 apt update 未执行',
        fix: '确认包名正确，添加所需 PPA (add-apt-repository)，执行 apt update 刷新缓存，apt-cache search <keyword> 搜索可用包'
      },
      {
        symptom: '系统升级后服务启动失败',
        cause: '大版本升级（如 20.04→22.04）可能改变库版本或配置格式',
        fix: '使用 do-release-upgrade 而非手动改源，升级前备份，使用 lxd 容器先测试升级过程，保持 /etc 下的 .dpkg-dist 文件以便对比配置变化'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 cloud-init 配置，实现 Ubuntu 服务器首次启动时自动安装 Docker、创建 deploy 用户并部署一个简单的 Web 应用',
        hint: '使用 #cloud-config，packages 段安装包，users 段创建用户，runcmd 执行部署命令',
        answer: '#cloud-config\npackage_update: true\npackages: [docker.io, git]\nusers:\n  - name: deploy\n    groups: [sudo, docker]\n    shell: /bin/bash\n    ssh_authorized_keys: [ssh-ed25519 AAAA...]\nruncmd:\n  - [systemctl, enable, --now, docker]\n  - [sudo, -u, deploy, git, clone, https://github.com/example/app.git, /home/deploy/app]\n  - [docker, run, -d, --name, web, -p, "80:80", nginx:alpine]'
      },
      {
        level: '进阶',
        task: '配置 apt 自动安全更新，并设置仅在工作日的早上 9 点执行',
        hint: '安装 unattended-upgrades，配置 /etc/apt/apt.conf.d/50unattended-upgrades，使用 systemd timer 或 cron 控制时间',
        answer: 'apt install unattended-upgrades\n# /etc/apt/apt.conf.d/50unattended-upgrades 中启用安全更新\n# /etc/apt/apt.conf.d/20auto-upgrades\nAPT::Periodic::Update-Package-Lists "1";\nAPT::Periodic::Unattended-Upgrade "1";\n# 自定义 cron：工作日 9:00\n0 9 * * 1-5 /usr/bin/unattended-upgrade -d >> /var/log/auto-upgrade.log 2>&1'
      }
    ]
  },

  "gIEQDgKOsoEnSv8mpEzGH": {
    mentalModel: '性能监控是 DevOps 的"体检报告"——通过 CPU/内存/磁盘/网络四大指标的持续采集，发现性能瓶颈和容量趋势。工具链从 vmstat/iostat 单机诊断到 Prometheus+Grafana 集群监控，关键是用 USE 方法（Utilization/Saturation/Errors）系统化分析',
    handsOn: [
      {
        title: 'USE 方法快速诊断系统性能',
        cmd: 'echo "=== CPU ===" && mpstat -P ALL 1 1 && echo "=== Memory ===" && free -h && echo "=== Disk IO ===" && iostat -xz 1 3 && echo "=== Network ===" && sar -n DEV 1 3',
        output: '=== CPU ===\nCPU  %usr  %sys  %iowait  %idle\nall  23.5  8.2    12.3    56.0\n=== Disk IO ===\nDevice  r/s   w/s  %util  await\nsda     150   80   87.5   45.2',
        explain: 'USE 方法：Utilization（使用率：CPU 23.5%、磁盘 87.5%）→ Saturation（饱和度：队列长度）→ Errors（错误数）。磁盘 %util 87.5% 接近饱和，是性能瓶颈'
      },
      {
        title: '用 perf 分析 CPU 热点函数',
        cmd: 'perf record -g -p $(pgrep myapp) sleep 10 && perf report --stdio | head -15',
        output: 'Samples: 12K of event "cycles", 4000 Hz\n  32.45%  myapp  myapp      [.] processRequest\n  18.23%  myapp  libc.so    [.] memcpy\n  12.67%  myapp  myapp      [.] parseJSON\n   8.91%  myapp  [kernel]   [.] copy_user_generic',
        explain: 'perf 是 Linux 内核级性能分析工具——火焰图（flamegraph）可以可视化函数调用栈的 CPU 时间分布，精确定位性能瓶颈到具体函数'
      },
      {
        title: 'Prometheus + Grafana 搭建监控面板',
        cmd: 'cat docker-compose.monitoring.yml',
        output: 'services:\n  prometheus:\n    image: prom/prometheus\n    volumes:\n      - ./prometheus.yml:/etc/prometheus/prometheus.yml\n    ports: ["9090:9090"]\n  node-exporter:\n    image: prom/node-exporter\n    ports: ["9100:9100"]\n  grafana:\n    image: grafana/grafana\n    ports: ["3000:3000"]\n    environment:\n      GF_SECURITY_ADMIN_PASSWORD: admin',
        explain: 'Prometheus 拉取 node-exporter 指标 → Grafana 可视化。这是开源监控的标准架构，配合 Alertmanager 实现告警通知'
      }
    ],
    diagnosis: [
      {
        symptom: '应用响应慢但 CPU 使用率低',
        cause: '瓶颈在 IO（磁盘或网络），CPU 在等待 IO 完成',
        fix: '用 iostat -x 1 检查磁盘 await（>10ms 为异常），用 iftop/nload 检查网络，考虑 SSD 升级或缓存策略'
      },
      {
        symptom: '内存持续增长最终 OOM',
        cause: '应用存在内存泄漏，分配了内存但未释放',
        fix: '用 valgrind --tool=massif 或 heaptrack 分析内存分配，对比不同时间点的堆内存使用，检查缓存是否设置了上限'
      },
      {
        symptom: '监控数据有间隔或丢失',
        cause: 'Prometheus 抓取超时或目标服务短暂不可用',
        fix: '增加 scrape_interval 超时时间，配置 scrape_timeout，检查目标服务的 /metrics 端点响应时间，使用 pushgateway 处理短生命周期任务'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 vmstat、iostat、free 命令创建一个简单的系统性能报告脚本，输出 HTML 格式',
        hint: '各命令输出用变量捕获，嵌入 HTML 模板，使用 cron 定时执行',
        answer: '#!/usr/bin/env bash\nREPORT="/var/www/html/perf-report.html"\ncat > "$REPORT" << EOF\n<html><head><title>Perf Report</title></head><body>\n<h1>System Performance Report - $(date)</h1>\n<h2>Memory</h2><pre>$(free -h)</pre>\n<h2>CPU/IO</h2><pre>$(vmstat 1 5)</pre>\n<h2>Disk</h2><pre>$(iostat -x 1 1)</pre>\n</body></html>\nEOF'
      },
      {
        level: '进阶',
        task: '配置 Prometheus 告警规则：当 CPU 使用率 >80% 持续 5 分钟或磁盘空间 <10% 时触发告警',
        hint: '在 Prometheus rules 文件中定义 alert 规则，使用 for: 5m 设置持续时间',
        answer: 'groups:\n- name: system-alerts\n  rules:\n  - alert: HighCPU\n    expr: 100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80\n    for: 5m\n    labels: {severity: warning}\n    annotations: {summary: "CPU usage > 80%"}\n  - alert: DiskSpaceLow\n    expr: (node_filesystem_avail_bytes / node_filesystem_size_bytes) * 100 < 10\n    for: 5m\n    labels: {severity: critical}\n    annotations: {summary: "Disk space < 10%"}'
      }
    ]
  },

  "wjJPzrFJBNYOD3SJLzW2M": {
    mentalModel: '终端知识是 DevOps 的"键盘功夫"——每天在终端中工作 8 小时，终端效率直接决定工作速度。从基本的文件操作到 tmux 多路复用、SSH 隧道、文本处理三剑客（grep/sed/awk），高手和新手的效率差距可达 10 倍',
    handsOn: [
      {
        title: 'tmux 多路复用：同时管理多台服务器',
        cmd: 'tmux new-session -s deploy \\; split-window -h \\; select-pane -t 0 \\; send-keys "ssh prod-1" C-m \\; select-pane -t 1 \\; send-keys "ssh prod-2" C-m',
        output: '# 左右分屏，左边连接 prod-1，右边连接 prod-2\n# 可以同时在两台服务器上执行命令',
        explain: 'tmux 让你在一个终端窗口中管理多个会话——分屏查看日志、同时操作多台服务器、断线后会话不丢失（tmux attach 重连），是远程运维的标配'
      },
      {
        title: 'SSH 配置和隧道',
        cmd: 'cat ~/.ssh/config',
        output: 'Host prod-*\n  User deploy\n  IdentityFile ~/.ssh/prod_ed25519\n  ForwardAgent yes\n  ServerAliveInterval 60\n\nHost jumphost\n  HostName jump.example.com\n  User admin\n\nHost internal-server\n  HostName 10.0.1.50\n  ProxyJump jumphost',
        explain: 'SSH config 定义连接别名和参数——ProxyJump 通过跳板机连接内网，ServerAliveInterval 防止连接超时，ssh -L 8080:remote:80 创建本地端口转发'
      },
      {
        title: 'grep/sed/awk 文本处理三剑客',
        cmd: 'grep -rn "ERROR" /var/log/app/ --include="*.log" | awk -F: \'{print $1}\' | sort -u | while read f; do sed -i \'s/DEBUG/TRACE/g\' "$f"; done',
        output: '# 找到所有包含 ERROR 的日志文件\n# 提取唯一文件名\n# 在这些文件中将 DEBUG 替换为 TRACE',
        explain: 'grep 搜索 → awk 提取字段 → sed 替换修改。三者组合是终端文本处理的核心技能，处理日志、配置文件和代码修改都靠它们'
      }
    ],
    diagnosis: [
      {
        symptom: 'SSH 连接频繁断开',
        cause: '网络中间设备（防火墙、NAT）在空闲时关闭 TCP 连接',
        fix: '在 SSH config 或 sshd_config 中设置 ServerAliveInterval 60 / ClientAliveInterval 60，定期发送心跳包保持连接'
      },
      {
        symptom: '终端中粘贴多行命令时格式错乱',
        cause: '终端的自动缩进和括号粘贴模式干扰',
        fix: '在 bash 中 set enable-bracketed-paste on（Bash 5.1+ 默认开启），或粘贴前执行 set +o bracketed-paste 关闭'
      },
      {
        symptom: 'tmux 中颜色显示不正确',
        cause: 'tmux 默认 TERM 设置不支持 256 色或 true color',
        fix: '在 .tmux.conf 中添加 set -g default-terminal "screen-256color" 和 set -ga terminal-overrides ",*256col*:Tc" 启用 true color'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 SSH，实现：①别名快速登录 ②通过跳板机连接内网服务器 ③端口转发访问远程数据库',
        hint: '使用 Host 别名、ProxyJump 和 LocalForward 配置',
        answer: 'Host jump\n  HostName jump.example.com\n  User admin\n  IdentityFile ~/.ssh/id_ed25519\n\nHost db\n  HostName 10.0.1.50\n  User deploy\n  ProxyJump jump\n  LocalForward 5432 localhost:5432\n\n# 使用：ssh db 直接通过跳板机连接并转发端口\n# 然后 psql -h localhost -p 5432 访问远程数据库'
      },
      {
        level: '进阶',
        task: '编写一个 awk 脚本，分析 Nginx access log，按小时统计请求量、平均响应时间和错误率',
        hint: 'Nginx 日志格式中 $time_local 包含小时，$status 是状态码，$request_time 是响应时间',
        answer: 'awk \'{\n  split($4, t, ":");\n  hour = t[2];\n  count[hour]++;\n  time_sum[hour] += $NF;\n  if ($9 >= 400) errors[hour]++;\n}\nEND {\n  for (h in count) {\n    printf "Hour %s: %d reqs, avg %.2fms, err %.1f%%\\n",\n      h, count[h], time_sum[h]/count[h],\n      (errors[h]+0)/count[h]*100\n  }\n}\' access.log | sort'
      }
    ]
  },

  "97cJYKqv7CPPUXkKNwM4x": {
    mentalModel: 'OpenBSD 是"安全偏执狂的 Unix"——以代码审计和安全特性闻名。它的 pf 防火墙是最优雅的网络过滤工具，OpenSSH 就诞生于 OpenBSD 项目。在 DevOps 中主要用于安全网关和防火墙场景',
    handsOn: [
      {
        title: 'pf 防火墙配置',
        cmd: 'cat /etc/pf.conf',
        output: '# 默认策略：拒绝所有入站，允许所有出站\nset block-policy drop\nset skip on lo0\n\n# 防欺骗\nantispoof quick for em0\n\n# 允许 SSH 和 HTTP\npass in on em0 proto tcp from any to any port {22, 80, 443} keep state\n\n# 速率限制 SSH 防止暴力破解\npass in on em0 proto tcp from any to any port 22 \\\n  keep state (max-src-conn 10, max-src-conn-rate 3/60)',
        explain: 'pf 的语法极其优雅——一行规则就能实现复杂的过滤策略。keep state 跟踪连接状态，速率限制防止暴力破解，这是 OpenBSD 对网络安全的核心贡献'
      },
      {
        title: 'OpenBSD 包管理',
        cmd: 'pkg_add nginx && rcctl enable nginx && rcctl start nginx && pkg_info | grep nginx',
        output: 'nginx-1.24.0: ok\nnginx-1.24.0:web server\n---\nrcctl: nginx enabled\nrcctl: nginx started',
        explain: 'OpenBSD 的包管理简洁：pkg_add 安装、pkg_info 查询、rcctl 管理服务。没有 systemd，用 rc.d 脚本管理启动——极简但够用'
      },
      {
        title: '使用 relayd 做负载均衡',
        cmd: 'cat /etc/relayd.conf',
        output: 'table <webservers> { 10.0.1.1, 10.0.1.2, 10.0.1.3 }\n\nrelay www {\n    listen on 0.0.0.0 port 80\n    protocol http\n    forward to <webservers> port 80 \\\n        check http "/" code 200 \\\n        mode loadbalance\n}',
        explain: 'relayd 是 OpenBSD 内置的负载均衡器——配置简洁，自动健康检查（check http "/" code 200），支持 L7 负载均衡，适合中小规模场景'
      }
    ],
    diagnosis: [
      {
        symptom: 'pf 规则不生效',
        cause: 'pf 未启用或规则文件有语法错误',
        fix: 'pfctl -e 启用 pf，pfctl -f /etc/pf.conf 加载规则，pfctl -n -f /etc/pf.conf 先验证语法，pfctl -sr 查看当前活跃规则'
      },
      {
        symptom: 'pkg_add 报 "Can\'t find package"',
        cause: 'PKG_PATH 环境变量未设置或镜像站不可用',
        fix: 'export PKG_PATH=https://cdn.openbsd.org/pub/OpenBSD/$(uname -r)/packages/$(uname -m)/ 设置正确的包路径'
      },
      {
        symptom: 'OpenBSD 上编译软件失败',
        cause: '默认不安装编译工具链，且 OpenBSD 的 libc 和 Linux 不同（如没有 glibc 特有函数）',
        fix: 'pkg_add gcc 安装编译器，注意 OpenBSD 特有的 pledge/unveil 安全 API，移植 Linux 代码时需要适配'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 pf 防火墙规则：只允许 SSH/HTTP/HTTPS 入站，记录所有被拒绝的连接，限制每 IP 的并发连接数',
        hint: '使用 pass/block 规则，log 关键字记录，keep state 的 max-src-conn 限制并发',
        answer: '# /etc/pf.conf\nset block-policy drop\nset skip on lo0\nantispoof quick for em0\n\n# 记录所有被拒绝的连接\nblock in log on em0\n\n# 允许已建立的连接\npass out keep state\npass in on em0 proto tcp from any to any port {22, 80, 443} \\\n  keep state (max-src-conn 50, max-src-conn-rate 10/30)\n\n# 加载: pfctl -f /etc/pf.conf && pfctl -e'
      },
      {
        level: '进阶',
        task: '配置 relayd 做 HTTPS 终止和负载均衡，带健康检查和故障自动切换',
        hint: 'relayd 支持 TLS 终止，table 定义后端组，check 配置健康检查',
        answer: 'table <backend> { 10.0.1.1, 10.0.1.2 }\n\nhttp protocol https {\n    match request header set "X-Forwarded-Proto" value "https"\n    tls ca certificate "/etc/ssl/ca.crt"\n    tls certificate "/etc/ssl/server.crt"\n    tls key "/etc/ssl/private/server.key"\n}\n\nrelay www {\n    listen on 0.0.0.0 port 443 tls\n    protocol https\n    forward to <backend> port 80 check http "/" code 200 interval 10\n}'
      }
    ]
  },

  "zhNUK953p6tjREndk3yQZ": {
    mentalModel: 'SUSE Linux（SLES/openSUSE）是"企业级 SAP 和大型机首选"——在欧洲企业市场和 SAP HANA 部署中占据重要地位。YaST 配置工具和 zypper 包管理是其特色，DevOps 在欧洲企业环境中常遇到 SUSE',
    handsOn: [
      {
        title: 'zypper 包管理',
        cmd: 'zypper refresh && zypper install -y docker && zypper info docker && zypper locks',
        output: 'Refreshing repository \'SLE-Module-Containers\'...\nInstalling docker-24.0.7...\n---\nInformation for package docker:\n  Version: 24.0.7-150500.1.1\n  Installed: Yes\n---\nNo package locks defined.',
        explain: 'zypper 是 SUSE 的包管理器，功能对标 apt/yum。zypper locks 查看包锁定状态，zypper patches 查看安全补丁——企业环境中补丁管理极其重要'
      },
      {
        title: 'YaST 系统配置工具',
        cmd: 'yast2 --list && yast2 firewall',
        output: 'Available modules:\n  firewall     Configure firewall\n  network      Configure network\n  services     Configure system services\n  users        Configure users and groups\n  ---\nStarting YaST2 firewall configuration...',
        explain: 'YaST 是 SUSE 独有的系统配置中心——提供 TUI（终端 UI）和 CLI 模式，统一管理网络、防火墙、用户、服务等，比分散的配置文件更不易出错'
      },
      {
        title: 'SUSE 事务更新（Transactional Updates）',
        cmd: 'transactional-update pkg install nginx && transactional-update reboot',
        output: 'Calling zypper install nginx\nCreating snapshot...\nTransaction completed.\nPlease reboot to activate changes.',
        explain: 'SUSE MicroOS 使用事务更新——所有更改在快照中执行，失败可回滚。这是"不可变基础设施"理念在 OS 层的实现，类似 CoreOS/Atomic'
      }
    ],
    diagnosis: [
      {
        symptom: 'zypper 报 "Repository not found" 或证书错误',
        cause: 'SUSE 订阅未注册或 SCC（SUSE Customer Center）连接问题',
        fix: '执行 SUSEConnect --status 检查注册状态，SUSEConnect -r <registration-code> 注册，检查 /etc/zypp/repos.d/ 仓库配置'
      },
      {
        symptom: 'YaST 模块报 "Module not available"',
        cause: '最小化安装缺少 YaST 模块包',
        fix: 'zypper install -t pattern yast2_basis 安装基础 YaST 模块，或 zypper install yast2-<module-name> 安装特定模块'
      },
      {
        symptom: 'SLES 升级后 SAP 应用启动失败',
        cause: '内核参数或库版本变化导致 SAP 兼容性中断',
        fix: '参考 SAP Note 数据库确认 OS 兼容性，使用 sapconf 工具自动配置 SAP 推荐的内核参数，保持 SAP 专用的分区和文件系统独立'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 openSUSE Tumbleweed 上安装并配置 Docker，设置镜像加速器',
        hint: '使用 zypper install docker，编辑 /etc/docker/daemon.json 配置 registry-mirrors',
        answer: 'sudo zypper install -y docker\nsudo systemctl enable --now docker\n# 配置镜像加速\nsudo tee /etc/docker/daemon.json << EOF\n{\n  "registry-mirrors": ["https://mirror.example.com"]\n}\nEOF\nsudo systemctl restart docker\nsudo usermod -aG docker $USER'
      },
      {
        level: '进阶',
        task: '配置 SUSE 的自动安全补丁策略，并设置补丁安装前自动创建快照',
        hint: '使用 zypper 的 patch 命令和 snapper 快照工具配合 cron',
        answer: '# 安装 snapper\nzypper install snapper\nsnapper create-config /\n# 创建自动补丁脚本\ncat > /usr/local/bin/auto-patch.sh << "EOF"\n#!/bin/bash\nsnapper create -d "pre-patch"\nzypper -n patch --category security\nsnapper create -d "post-patch"\nEOF\nchmod +x /usr/local/bin/auto-patch.sh\n# cron: 每周日 3:00\necho "0 3 * * 0 /usr/local/bin/auto-patch.sh" | crontab -'
      }
    ]
  },

  "OaqKLZe-XnngcDhDzCtRt": {
    mentalModel: '网络工具是 DevOps 的"诊断听诊器"——当服务不通时，需要逐层排查（物理层→网络层→传输层→应用层）。核心工具链：ping/traceroute（连通性）→ curl/httpie（应用层）→ tcpdump/wireshark（抓包）→ ss/netstat（连接状态）',
    handsOn: [
      {
        title: '网络连通性逐层诊断',
        cmd: 'echo "=== DNS ===" && dig +short api.example.com && echo "=== Route ===" && traceroute -m 10 api.example.com && echo "=== TCP ===" && nc -zv api.example.com 443 && echo "=== TLS ===" && openssl s_client -connect api.example.com:443 -brief',
        output: '=== DNS ===\n54.230.10.42\n=== Route ===\n 1  gateway (10.0.0.1)  1.2ms\n 2  isp-router (203.0.113.1)  5.4ms\n 3  * * *\n=== TCP ===\nConnection to api.example.com 443 port [tcp/https] succeeded!\n=== TLS ===\nProtocol: TLSv1.3\nCipher: TLS_AES_256_GCM_SHA384',
        explain: '网络排障要逐层验证：DNS 解析是否正确 → 路由是否可达 → TCP 端口是否开放 → TLS 证书是否有效。每层用不同工具，逐层排除'
      },
      {
        title: 'curl 深入调试 HTTP 请求',
        cmd: 'curl -v -w "\\nTime DNS: %{time_namelookup}s\\nTime Connect: %{time_connect}s\\nTime TLS: %{time_appconnect}s\\nTime Total: %{time_total}s\\nHTTP Code: %{http_code}\\n" https://api.example.com/health',
        output: '> GET /health HTTP/2\n> Host: api.example.com\n< HTTP/2 200\n< content-type: application/json\n< {"status":"ok"}\nTime DNS: 0.023s\nTime Connect: 0.089s\nTime TLS: 0.156s\nTime Total: 0.178s\nHTTP Code: 200',
        explain: 'curl 的 -w 格式化输出能精确测量每个阶段耗时——DNS 解析慢说明 DNS 配置问题，TLS 握手慢说明证书链问题，总时间长说明后端处理慢'
      },
      {
        title: 'tcpdump 抓包分析',
        cmd: 'tcpdump -i eth0 -nn -s 0 -w /tmp/capture.pcap port 80 and host 10.0.1.5 &  sleep 10 && kill %1 && tcpdump -r /tmp/capture.pcap | head -10',
        output: '12:34:56.789 IP 10.0.1.5.45678 > 10.0.1.100.80: Flags [S], seq 1234\n12:34:56.790 IP 10.0.1.100.80 > 10.0.1.5.45678: Flags [S.], seq 5678, ack 1235\n12:34:56.790 IP 10.0.1.5.45678 > 10.0.1.100.80: Flags [.], ack 1\n12:34:56.791 IP 10.0.1.5.45678 > 10.0.1.100.80: Flags [P.], seq 1:100',
        explain: 'tcpdump 捕获网络包——可以看到 TCP 三次握手（S→S.→.）是否正常完成，数据传输（P.）是否正常。用 wireshark 打开 .pcap 文件可做更深入分析'
      }
    ],
    diagnosis: [
      {
        symptom: '服务间歇性超时但 ping 正常',
        cause: 'ping 使用 ICMP 不受影响，但 TCP 连接受防火墙状态表满、连接跟踪溢出或 MTU 问题影响',
        fix: '检查 dmesg | grep "nf_conntrack: table full" 是否连接跟踪满，用 ip link show 检查 MTU 不一致，用 ss -s 查看 socket 统计'
      },
      {
        symptom: 'DNS 解析偶尔很慢',
        cause: 'DNS 服务器响应慢或 /etc/resolv.conf 中第一个 nameserver 超时后才尝试第二个',
        fix: '用 dig @8.8.8.8 domain.com 测试不同 DNS 服务器速度，配置 options timeout:1 attempts:2 rotate，考虑本地 DNS 缓存（dnsmasq/systemd-resolved）'
      },
      {
        symptom: '大量 TIME_WAIT 连接导致端口耗尽',
        cause: '短连接频繁创建销毁，TCP TIME_WAIT 状态持续 60 秒占用端口',
        fix: '启用连接复用（HTTP Keep-Alive），调整内核参数 net.ipv4.tcp_tw_reuse=1，增加本地端口范围 net.ipv4.ip_local_port_range="1024 65535"'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个网络诊断脚本，输入目标 URL，自动检查 DNS、TCP 连接、TLS 证书和 HTTP 响应',
        hint: '组合 dig、nc、openssl s_client 和 curl，将结果汇总输出',
        answer: '#!/usr/bin/env bash\nURL=$1; HOST=$(echo $URL | sed "s|https*://||;s|/.*||")\necho "=== DNS ===" && dig +short $HOST\necho "=== TCP ===" && nc -zv $HOST 443 2>&1\necho "=== TLS ===" && echo | openssl s_client -connect $HOST:443 -brief 2>&1 | head -3\necho "=== HTTP ===" && curl -sS -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\\n" $URL'
      },
      {
        level: '进阶',
        task: '使用 tcpdump 抓取所有到 443 端口的流量，分析 TCP 重传率和连接建立时间',
        hint: 'tcpdump 抓取后用 -tt 显示精确时间戳，grep retransmit 或用 Wireshark 的 Statistics 分析',
        answer: '# 抓包 30 秒\ntcpdump -i any -nn -w /tmp/ssl.pcap port 443 &\nTCPDUMP_PID=$!\nsleep 30 && kill $TCPDUMP_PID\n# 分析重传\ntcpdump -r /tmp/ssl.pcap | grep -c "retransmit"\n# 或用 Wireshark 打开 /tmp/ssl.pcap\n# Statistics > TCP Stream Graph > Throughput\n# Statistics > Conversations > TCP 查看连接时间'
      },
      {
        level: '挑战',
        task: '编写一个持续网络监控脚本：每分钟检测 10 个关键 URL 的延迟，异常时自动抓包并发送告警',
        hint: 'curl 检测延迟，阈值触发 tcpdump 抓包，结果写入日志并用 webhook 通知',
        answer: '#!/usr/bin/env bash\nTHRESHOLD=2.0  # 秒\nURLS=("https://api.example.com" "https://web.example.com")\nwhile true; do\n  for url in "${URLS[@]}"; do\n    time=$(curl -sS -o /dev/null -w "%{time_total}" --max-time 10 "$url" 2>/dev/null || echo "99")\n    if (( $(echo "$time > $THRESHOLD" | bc -l) )); then\n      echo "[ALERT] $url slow: ${time}s" >> /var/log/netmon.log\n      tcpdump -i any -nn -w "/tmp/alert_$(date +%s).pcap" -c 100 port 443 &\n      curl -X POST -d "{\"text\":\"$url slow: ${time}s\"}" https://hooks.slack.com/services/XXX\n    fi\n  done\n  sleep 60\ndone'
      }
    ]
  },

  "haiYSwNt3rjiiwCDszPk1": {
    mentalModel: 'NetBSD 是"便携之王"——一个以硬件兼容性为终极目标的 Unix 系统，口号是"Of course it runs NetBSD"，就像一把万能钥匙，能插进几乎所有 CPU 架构的锁孔',
    sections: [
      {
        title: 'NetBSD 核心哲学',
        content: 'NetBSD 是 4.3BSD 的直接后裔，1993 年从 386BSD 分叉而出。与其他 BSD 分支不同，NetBSD 把"可移植性"视为第一原则：\n\n- **硬件抽象层干净**：内核通过 `machine` 和 `arch` 两层抽象隔离硬件差异，使得移植到新架构只需重写少量平台相关代码\n- **pkgsrc 包管理**：一套跨平台包管理系统，不仅支持 NetBSD，还能在 Linux、macOS、Solaris 上运行，目前有超过 20000 个软件包\n- **代码质量优先**：项目对代码风格要求极严，所有提交必须符合 KNF（Kernel Normal Form），且强调"正确比功能多更重要"\n- **RUMP（Runnable Userspace Modularized Programs）**：可以将内核组件以用户态进程运行，用于调试和测试，是 NetBSD 独有的创新',
      },
      {
        title: 'NetBSD 与其他 BSD 的对比',
        content: '```\n分支        起源         侧重点              典型场景\nFreeBSD     386BSD       性能/x86服务器      Netflix CDN、大型网站\nOpenBSD     NetBSD       安全/加密           防火墙、安全审计\nNetBSD      386BSD       可移植性/干净代码   嵌入式、研究、怀旧硬件\nDragonFly   FreeBSD      SMP/集群            高性能计算\n```\n\nNetBSD 曾成功运行在 57 种硬件架构上，包括 Dreamcast 游戏机、NASA 的火星探测器模拟环境、甚至古董级 VAX 小型机。',
      },
      {
        title: 'DevOps 视角下的 NetBSD',
        content: '虽然生产环境中很少直接用 NetBSD，但它在 DevOps 中有独特价值：\n\n1. **pkgsrc 跨平台能力**：可以在标准 Linux 生产服务器上用 pkgsrc 管理构建依赖，保持与开发环境一致\n2. **RUMP 内核用于测试**：不需要完整虚拟机就能测试内核级网络栈和文件系统，加速 CI/CD 中的基础设施测试\n3. **嵌入式 IoT**：在资源受限设备上运行 NetBSD，用于边缘计算节点\n4. **学习价值**：NetBSD 代码库是学习 Unix 内核最干净的素材，理解它有助于调试任何 Unix-like 系统上的问题',
      },
    ],
    diagnosis: [
      {
        symptom: 'pkgsrc 构建软件时报错 "bmake: don\'t know how to make"',
        cause: 'pkgsrc 目录树未正确更新，或 bmake 找不到对应的 Makefile target',
        fix: '运行 `cd /usr/pkgsrc && cvs -q update -dP` 或 `git pull` 更新 pkgsrc 树，然后 `cd pkgcategory/package && bmake install clean`',
      },
      {
        symptom: 'NetBSD 启动后网络接口未获得 IP 地址',
        cause: 'NetBSD 默认不启用 DHCP 客户端，需要手动配置 `/etc/ifconfig.wm0`（wm0 是 Intel 网卡驱动名）',
        fix: '写入 `dhcp` 到接口配置文件：`echo "dhcp" > /etc/ifconfig.wm0`，然后执行 `/etc/rc.d/network restart`',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在 NetBSD 上安装并启动 nginx 服务',
        hint: '使用 pkgsrc 的 www/nginx 目录，安装后用 rc.d 脚本管理',
        answer: 'cd /usr/pkgsrc/www/nginx && bmake install clean\n然后在 /etc/rc.conf.d/ 创建 nginx 文件写入 nginx=YES，最后 /etc/rc.d/nginx start',
      },
      {
        level: '进阶',
        task: '使用 RUMP 在用户态运行一个 TCP echo server 进行内核网络栈测试',
        hint: 'RUMP 提供 rumphijack 库可以劫持标准 socket 调用到 RUMP 内核',
        answer: '先用 `rump_server -lrumpnet -lrumpnet_net -lrumpnet_netinet -lrumpnet_shmif unix://rump.sock` 启动 RUMP 内核，然后用 `RUMP_SERVER=unix://rump.sock ifconfig shmif0 create` 创建虚拟网卡，最后 `LD_PRELOAD=/usr/lib/librumphijack.so ./echo_server` 运行程序',
      },
    ],
  },
  "7mS6Y_BOAHNgM3OjyFtZ9": {
    mentalModel: 'RHEL 及衍生版是"企业级 Linux 的标准化流水线"——Red Hat 在上游 Fedora 实验，中游 CentOS Stream 集成，下游 RHEL 交付，衍生版 AlmaLinux/Rocky 则是免费的平行宇宙',
    sections: [
      {
        title: 'RHEL 生态体系与发行版关系',
        content: 'Red Hat 生态系统是一条从实验到生产的发行版流水线：\n\n```\nFedora (上游实验田，6个月一版)\n   │\n   ▼\nCentOS Stream (滚动预览，RHEL 下一个小版本的开发分支)\n   │\n   ▼\nRHEL (企业级稳定版，10年支持)\n   │\n   ├──▶ AlmaLinux (1:1 二进制兼容，CloudLinux 维护)\n   ├──▶ Rocky Linux (1:1 二进制兼容，CentOS 创始人维护)\n   ├──▶ Oracle Linux (Oracle 增强内核 UEK)\n   └──▶ Amazon Linux (AWS 优化版，API 兼容)\n```\n\n2020 年 CentOS 从"RHEL 下游免费复刻"变为"CentOS Stream 上游预览"后，社区 fork 出 AlmaLinux 和 Rocky Linux 填补空白。',
      },
      {
        title: 'RHEL 系核心工具链',
        content: 'RHEL 及衍生版共享一套独特工具链，与 Debian/Ubuntu 的 apt 体系截然不同：\n\n- **dnf（原 yum）**：包管理器，基于 RPM 格式，支持模块化安装（`dnf module list`）\n- **systemctl**：systemd 服务管理（RHEL 7+ 默认 systemd）\n- **firewalld**：动态防火墙管理，zone/service 模型替代传统 iptables\n- **SELinux**：强制访问控制，RHEL 默认 enforcing 模式\n- **cockpit**：Web 管理界面，RHEL 8+ 内置\n- **subscription-manager**：Red Hat 订阅管理，衍生版通常不需要\n- **tuned**：系统性能调优守护进程，预设 profile 适配不同工作负载',
      },
      {
        title: 'DevOps 中 RHEL 系的关键实践',
        content: '在企业 DevOps 中，RHEL 衍生版扮演重要角色：\n\n1. **Ansible 管理**：RHEL 是 Ansible 的"娘家"（同为 Red Hat 旗下），集成度最高，`/etc/ansible/` 下有预置配置\n2. **容器化基础**：RHEL 8+ 提供 `podman`（无守护进程的 Docker 替代）和 `buildah`（无需 Dockerfile 的容器构建）\n3. **安全加固**：STIG profile、OpenSCAP 扫描、crypto-policies 统一管理加密策略\n4. **内核热补丁**：RHEL 的 kpatch 可在不重启情况下修补内核漏洞，对 7×24 生产环境至关重要\n5. **Satellite/Katello**：Red Hat Satellite 提供补丁管理、配置管理和合规审计的一站式方案',
      },
    ],
    diagnosis: [
      {
        symptom: 'dnf install 报错 "Cannot find a valid baseurl for repo" 或 "No subscription found"',
        cause: 'RHEL 系统未注册订阅或 CentOS/Rocky 的 repo 配置指向了失效的 mirror',
        fix: 'RHEL: `subscription-manager register --username=xxx --password=xxx --auto-attach`。\nRocky/Alma: 检查 `/etc/yum.repos.d/` 下的 mirrorlist URL 是否可达，可改用 `baseurl=https://dl.rockylinux.org/$contentdir/$releasever/BaseOS/$basearch/os/`',
      },
      {
        symptom: 'SELinux 导致服务无法启动，日志显示 "Permission denied" 但文件权限看起来正常',
        cause: 'SELinux 安全上下文（security context）不匹配，例如 nginx 进程无法读取自定义路径下的文件',
        fix: '用 `ausearch -m avc -ts recent` 查看 SELinux 拒绝记录，用 `restorecon -Rv /custom/path` 恢复正确上下文，或用 `semanage fcontext -a -t httpd_sys_content_t "/custom/path(/.*)?"` 添加永久规则',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Rocky Linux 8 上配置 dnf 模块化安装，安装 Node.js 18 版本',
        hint: 'dnf module 可以列出可用模块流（stream），通过 enable 和 install 切换版本',
        answer: 'dnf module list nodejs\ndnf module enable nodejs:18 -y\ndnf module install nodejs:18 -y\nnode --version',
      },
      {
        level: '进阶',
        task: '编写 Ansible playbook 批量加固 10 台 Rocky Linux 服务器的 SELinux 和 firewalld 配置',
        hint: '使用 ansible.posix 集合的 selinux 模块和 ansible.posix.firewalld 模块',
        answer: '- hosts: all\n  become: yes\n  tasks:\n    - name: Set SELinux to enforcing\n      ansible.posix.selinux:\n        policy: targeted\n        state: enforcing\n    - name: Allow HTTPS traffic\n      ansible.posix.firewalld:\n        service: https\n        permanent: yes\n        state: enabled\n        immediate: yes\n    - name: Allow custom port 8443\n      ansible.posix.firewalld:\n        port: 8443/tcp\n        permanent: yes\n        state: enabled\n        immediate: yes',
      },
    ],
  },
  "cUifrP7v55psTb20IZndf": {
    mentalModel: 'awk/sed/grep 是 Linux 文本处理的"瑞士军刀三件套"——grep 负责"找"（像搜索引擎），sed 负责"改"（像查找替换），awk 负责"算"（像迷你电子表格）',
    handsOn: [
      {
        title: 'grep 高级搜索模式',
        cmd: 'grep -rn --include="*.log" "ERROR\\|CRITICAL" /var/log/app/ | grep -v "healthcheck" | head -20',
        output: '/var/log/app/server.log:1024:ERROR 2024-03-15 database connection timeout\n/var/log/app/worker.log:567:CRITICAL 2024-03-15 OOM killed process 12345',
        explain: '-r 递归搜索，-n 显示行号，--include 限制文件类型，管道链式过滤排除噪音。实际运维中，这种 grep 链是排查日志的第一步。',
      },
      {
        title: 'sed 批量文本替换与行操作',
        cmd: 'sed -i \'s/listen 80/listen 8080/g\' /etc/nginx/sites-enabled/*\nsed -i \'/^#/d; /^$/d\' /etc/hosts\ngrep -n "server_name" nginx.conf | sed \'s/^\\([0-9]*\\):.*server_name \\(.*\\);/Line \\1: domain=\\2/\'',
        output: '(sed -i 直接修改文件，无标准输出)\n第三行输出: Line 12: domain=example.com',
        explain: '第一行批量替换所有 nginx 配置中的端口；第二行删除 hosts 文件中的注释和空行；第三行用 sed 正则提取 nginx 配置中的域名。sed 的 -i 直接写回文件，适合批量配置变更。',
      },
      {
        title: 'awk 日志分析与统计',
        cmd: 'awk \'{status[$9]++} END {for (s in status) printf "%s: %d\\n", s, status[s]}\' /var/log/nginx/access.log | sort -k2 -rn\nawk -F\':\' \'$3 >= 1000 && $3 < 65000 {print $1, $3}\' /etc/passwd | column -t\nawk \'/^\\[/{split($0,a,"\\[|\\]"); print a[2]}\' app.log | sort | uniq -c | sort -rn | head -10',
        output: '200: 45892\n301: 2341\n404: 1876\n500: 23\n\nappuser   1001\npostgres  1002\nredis     1003\n\n2024-03-15 10:00: 342\n2024-03-15 10:01: 567',
        explain: '第一段统计 nginx 访问日志中各 HTTP 状态码的分布（$9 是默认空格分隔的第9个字段）；第二段提取所有普通用户账号；第三段按分钟聚合日志条目数量。awk 的关联数组和模式匹配使其成为强大的命令行分析工具。',
      },
      {
        title: '三件套联合使用实战',
        cmd: 'grep -l "OutOfMemoryError" /var/log/app/*.log | xargs sed -n \'/OutOfMemoryError/,/at com\\.app\\.main/p\' | awk \'/OutOfMemoryError/{ts=$1" "$2} /at com\\.app\\.main/{print ts, $0; count++} END{print "Total OOM:", count}\'',
        output: '2024-03-15 10:23:45 at com.app.main.Service.process(Service.java:128)\n2024-03-15 14:56:12 at com.app.main.Cache.load(Cache.java:45)\nTotal OOM: 2',
        explain: 'grep -l 找到包含 OOM 错误的日志文件，xargs 传给 sed 提取错误堆栈范围，awk 提取时间戳和关键代码行并计数。这种三件套管道是日志分析的经典模式。',
      },
    ],
    diagnosis: [
      {
        symptom: 'sed 替换包含特殊字符的字符串时失败，如 URL 中的斜杠',
        cause: 'sed 默认用 / 作分隔符，当替换内容包含 / 时需要转义或换分隔符',
        fix: '使用其他分隔符：`sed -i \'s|http://old-api.example.com|https://new-api.example.com|g\' config.yaml`，或用 `\\#` 分隔：`sed -i \'s\\#old#new#g\' file`',
      },
      {
        symptom: 'awk 处理大文件时内存占用飙升或速度极慢',
        cause: '在 END 块中积累了过多数据到关联数组，或文件没有换行符导致整文件被当作一行',
        fix: '对于大文件，改用 `awk` 逐行处理而不积累：将统计改为流式输出。检查文件是否有换行符：`file large.log`，如果是 "very long lines" 用 `tr -d \'\\r\'` 或 `dos2unix` 预处理',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 awk 统计当前目录下所有 .go 文件的代码行数（排除空行和注释行）',
        hint: 'Go 注释以 // 或 /* 开头，需要用 awk 的模式匹配跳过',
        answer: 'find . -name "*.go" -exec cat {} \\; | awk \'!/^[[:space:]]*$/ && !/^[[:space:]]*\\/\\// && !/^[[:space:]]*\\/\\*/ {count++} END {print "Total lines:", count}\'',
      },
      {
        level: '进阶',
        task: '编写一个单行命令，解析 nginx access log，输出每个 IP 的平均响应时间，并按耗时从高到低排序，只显示前 10',
        hint: 'nginx 日志中 $request_time 通常在最后一个字段，用 awk 的关联数组按 IP 聚合',
        answer: 'awk \'{ip=$1; time=$NF; sum[ip]+=time; count[ip]++} END {for (ip in sum) printf "%s %.3f %d\\n", ip, sum[ip]/count[ip], count[ip]}\' /var/log/nginx/access.log | sort -k2 -rn | head -10',
      },
      {
        level: '进阶',
        task: '用 sed 编写脚本，将 JSON 配置文件中的多个环境变量占位符 ${VAR_NAME} 替换为实际环境变量值',
        hint: 'sed 的 e 标志或配合 eval 可以实现动态替换',
        answer: 'sed -E \'s/\\$\\{([A-Za-z_][A-Za-z_0-9]*)\\}/\\n\\1\\n/g; s/(.*)\\n([A-Za-z_]*)\\n(.*)/"\\1" ENV "\\2" "\\3"/e\' config.template.json\n更实用的方案：envsubst < config.template.json > config.json，这是 gettext 包提供的专用工具',
      },
    ],
  },
  "Jt8BmtLUH6fHT2pGKoJs3": {
    mentalModel: 'Vim/Nano/Emacs 是终端编辑器的"三国演义"——Nano 像便签本（简单直接），Vim 像快捷键驱动的编辑引擎（模式切换是灵魂），Emacs 像可编程的操作系统（Lisp 可扩展一切）',
    handsOn: [
      {
        title: 'Vim 高效编辑实战',
        cmd: 'vim -c \':%s/old_port/new_port/g\' -c \':wq\' nginx.conf\nvim -c \'normal gg=G\' -c \':wq\' deploy.yaml\nvim -O server.log error.log',
        output: '(Vim 直接操作文件，完成后退出)\n第三行在水平分屏中同时打开两个文件',
        explain: '第一行用 Vim 的 -c 参数实现非交互式批量替换（适合脚本中使用）；第二行自动格式化整个 YAML 文件的缩进；第三行水平分屏对比两个日志文件。Vim 的 -c 参数让它在自动化脚本中也能发挥作用。',
      },
      {
        title: 'Vim 配置与插件管理',
        cmd: 'cat > ~/.vimrc << \'EOF\'\nset number relativenumber\nset expandtab tabstop=2 shiftwidth=2\nset hlsearch incsearch\nset wildmenu\nset backupdir=/tmp\nsyntax on\nfiletype plugin indent on\n" 快速保存和退出\nnnoremap <leader>w :w<CR>\nnnoremap <leader>q :q<CR>\nEOF\n# 安装 vim-plug 插件管理器\ncurl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim',
        output: '~/.vimrc 写入完成\nplug.vim 安装到 ~/.vim/autoload/',
        explain: 'relativenumber 显示相对行号方便跳转，expandtab 将 Tab 转为空格（DevOps 中 YAML 必须用空格），wildmenu 增强命令补全。vim-plug 是最流行的 Vim 插件管理器，类似 Neovim 的 lazy.nvim。',
      },
      {
        title: 'Nano 与 Emacs 在运维场景的使用',
        cmd: '# Nano: 快速编辑配置文件（无需学习成本）\nnano +42 /etc/nginx/nginx.conf    # 直接跳到第42行\n# Emacs: 批量编辑与 Org-mode 任务管理\nemacs --batch -l ~/.emacs -f org-agenda-list\n# Emacs 在终端模式下编辑远程文件\nemacs -nw --eval \'(find-file "/ssh:user@server:/etc/app/config.yaml")\'',
        output: 'Nano 直接打开文件并定位到第42行\nEmacs batch 模式生成待办清单\nEmacs TRAMP 模式通过 SSH 编辑远程服务器文件',
        explain: 'Nano 适合紧急修改生产配置（不需要记模式切换）；Emacs 的 TRAMP 可以透明编辑远程文件，批量模式适合自动化。在 DevOps 中，通常 Nano 用于紧急修复，Vim 用于日常编辑，Emacs 用于需要编程能力的复杂任务。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Vim 打开文件时显示 "E325: ATTENTION Found a swap file" 且无法正常编辑',
        cause: '之前 Vim 异常退出（如 SSH 断开），留下了 .filename.swp 交换文件',
        fix: '先用 `ls -la .filename.swp` 确认交换文件存在，如果确认没有其他 Vim 在编辑该文件，删除交换文件：`rm .filename.swp`，然后重新用 Vim 打开。或者用 `vim -r filename` 从交换文件恢复未保存的内容。',
      },
      {
        symptom: 'Vim 粘贴代码时缩进完全错乱，每一行都多了很多空格',
        cause: 'Vim 的 autoindent 和 smartindent 在粘贴模式下会与终端的粘贴内容冲突，导致重复缩进',
        fix: '粘贴前执行 `:set paste` 进入粘贴模式，粘贴完执行 `:set nopaste` 退出。更好的方案是在 .vimrc 中设置 `set pastetoggle=<F2>` 用快捷键切换，或在终端中使用 bracketed paste（`:set t_BE=`）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Vim 宏录制功能，快速给 20 行 YAML 列表项添加一个 `enabled: true` 字段',
        hint: 'Vim 宏用 qa 开始录制到寄存器 a，q 结束，@a 回放',
        answer: '在第一行按 qa 开始录制，按 A 进入插入模式在行尾加回车并输入 `  enabled: true`，按 Esc 退出插入模式，按 j 移到下一行，按 q 结束录制。然后按 19@a 对剩余 19 行执行相同操作。',
      },
      {
        level: '进阶',
        task: '编写 Vim 函数，在打开 .env 文件时自动隐藏值的内容（只显示变量名），按快捷键可展开/折叠',
        hint: '利用 Vim 的 conceal 功能和 syntax match',
        answer: '在 .vimrc 中添加：\naugroup DotEnv\n  autocmd!\n  autocmd BufRead .env* syntax match EnvValue "=\\zs.*" conceal cchar=*\n  autocmd BufRead .env* setlocal conceallevel=2 concealcursor=nc\n  autocmd BufRead .env* nnoremap <buffer> <F3> :setlocal concealcursor=!<CR>\naugroup END\n按 F3 可以在显示/隐藏之间切换',
      },
    ],
  },
  "F93XnRj0BLswJkzyRggLS": {
    mentalModel: '正向代理是"你的代理人"——你（客户端）主动通过代理去访问外部服务器，服务器只看到代理的 IP 而不知道你的存在，就像你让朋友帮你去商店买东西，商店只认识你朋友',
    sections: [
      {
        title: '正向代理工作原理',
        content: '正向代理（Forward Proxy）位于客户端和目标服务器之间，代表客户端发起请求：\n\n```\n客户端 ──▶ 正向代理 ──▶ 目标服务器\n  (知道目标)   (转发请求)   (只看到代理IP)\n\n流程：\n1. 客户端配置代理地址（如 proxy.corp.com:3128）\n2. 客户端发起请求到代理：GET http://example.com/api HTTP/1.1\n3. 代理解析目标地址，建立到 example.com 的连接\n4. 代理转发请求并回传响应给客户端\n5. 目标服务器日志中只记录代理 IP\n```\n\n正向代理的核心特征：**客户端知道目标服务器，但服务器不知道真实客户端**。',
      },
      {
        title: '正向代理的典型应用场景',
        content: '1. **企业出口管控**：公司所有员工的 HTTP 流量必须经过 Squid 代理，可以审计访问内容、过滤恶意网站、限制带宽\n2. **翻越网络限制**：客户端通过境外代理访问被限制的外部服务\n3. **开发调试**：使用 Burp Suite、mitmproxy 等正向代理拦截和修改 HTTP 请求，用于 API 调试和安全测试\n4. **IP 池管理**：爬虫通过代理池轮换出口 IP，避免被封禁\n5. **带宽节省**：代理缓存频繁访问的内容（如软件更新包），减少出口带宽\n\nDevOps 中最常见的正向代理是 Squid 和 mitmproxy。',
      },
      {
        title: 'Squid 正向代理配置实战',
        content: '```bash\n# 安装 Squid\napt install squid\n\n# 基础正向代理配置 /etc/squid/squid.conf\nhttp_port 3128\n# 只允许内网访问\nacl localnet src 10.0.0.0/8\nacl localnet src 192.168.0.0/16\nhttp_access allow localnet\nhttp_access deny all\n\n# 缓存配置\ncache_mem 256 MB\nmaximum_object_size 64 MB\ncache_dir ufs /var/spool/squid 1000 16 256\n\n# 访问日志\naccess_log /var/log/squid/access.log squid\n\n# 客户端使用\ncurl -x http://proxy.corp.com:3128 http://example.com\n# 或设置环境变量\nexport http_proxy=http://proxy.corp.com:3128\nexport https_proxy=http://proxy.corp.com:3128\n```',
      },
    ],
    diagnosis: [
      {
        symptom: '客户端通过正向代理访问 HTTPS 站点失败，报 "SSL handshake failed" 或 "tunnel connection failed"',
        cause: '正向代理需要通过 CONNECT 方法建立隧道，如果代理配置未允许 HTTPS 端口（443）的 CONNECT，隧道无法建立',
        fix: '在 Squid 配置中确保允许 CONNECT 到 443 端口：`acl SSL_ports port 443`、`acl CONNECT method CONNECT`、`http_access allow CONNECT SSL_ports localnet`。然后 `squid -k reconfigure` 重载配置。',
      },
      {
        symptom: 'Squid 代理日志中出现大量 TCP_DENIED/403 条目',
        cause: 'http_access 规则顺序错误，deny all 规则在 allow 规则之前匹配了所有请求',
        fix: 'Squid 的 http_access 规则按顺序匹配，必须把 allow 规则放在 deny all 之前。检查配置文件中的规则顺序，确保 `http_access allow localnet` 在 `http_access deny all` 之前。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '搭建一个 Squid 正向代理，配置基本认证，只允许认证用户访问',
        hint: '使用 htpasswd 创建密码文件，Squid 的 auth_param basic 配置认证',
        answer: 'apt install squid apache2-utils\nhtpasswd -c /etc/squid/passwd proxyuser\n在 squid.conf 中添加：\nauth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd\nauth_param basic realm Proxy Auth\nacl authenticated proxy_auth REQUIRED\nhttp_access allow authenticated\nhttp_access deny all\nsystemctl restart squid',
      },
      {
        level: '进阶',
        task: '使用 mitmproxy 作为开发调试代理，拦截并修改 API 响应',
        hint: 'mitmproxy 的 Python 脚本（addon）可以编程修改请求和响应',
        answer: 'pip install mitmproxy\n创建 addon 脚本 modify_response.py：\nfrom mitmproxy import http\ndef response(flow: http.HTTPFlow):\n    if "api.example.com" in flow.request.host:\n        data = flow.response.json()\n        data["debug"] = True\n        flow.response.text = json.dumps(data)\n        flow.response.headers["X-Modified"] = "true"\n启动：mitmproxy -p 8888 -s modify_response.py\n客户端设置代理并安装 mitmproxy CA 证书后即可看到修改后的响应',
      },
    ],
  },
  "eGF7iyigl57myx2ejpmNC": {
    mentalModel: '反向代理是"服务器的门面"——客户端以为自己在和服务器直接通信，实际上中间站着一个反向代理负责分发、缓存、加密，就像酒店前台代替客人联系不同的部门',
    handsOn: [
      {
        title: 'Nginx 反向代理基础配置',
        cmd: 'cat /etc/nginx/conf.d/backend.conf',
        output: 'upstream app_backend {\n    least_conn;\n    server 10.0.1.10:8080 weight=3;\n    server 10.0.1.11:8080 weight=3;\n    server 10.0.1.12:8080 backup;\n    keepalive 32;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name api.example.com;\n\n    ssl_certificate /etc/ssl/certs/api.pem;\n    ssl_certificate_key /etc/ssl/private/api.key;\n\n    location /api/ {\n        proxy_pass http://app_backend;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_connect_timeout 5s;\n        proxy_read_timeout 30s;\n    }\n}',
        explain: 'upstream 定义后端服务器池，least_conn 选择连接最少的服务器，backup 标记备用节点，keepalive 复用后端连接减少 TCP 握手。proxy_set_header 传递客户端真实 IP，否则后端只能看到代理 IP。',
      },
      {
        title: '反向代理实现蓝绿部署',
        cmd: 'cat /etc/nginx/conf.d/bluegreen.conf',
        output: 'map $cookie_deploy_version $backend {\n    default   "blue";\n    "green"   "green";\n}\n\nupstream blue {\n    server 10.0.1.10:8080;\n    server 10.0.1.11:8080;\n}\n\nupstream green {\n    server 10.0.2.10:8080;\n    server 10.0.2.11:8080;\n}\n\nserver {\n    listen 443 ssl;\n    server_name app.example.com;\n    location / {\n        proxy_pass http://$backend;\n        proxy_set_header Host $host;\n    }\n}',
        explain: '通过 cookie 将流量路由到不同版本的后端集群。QA 团队可以设置 deploy_version=green cookie 测试新版本，普通用户继续使用 blue 版本。切换时只需修改 default 值并 reload nginx。',
      },
      {
        title: '反向代理健康检查与故障转移',
        cmd: '# Nginx 开源版被动健康检查\nupstream api {\n    server 10.0.1.10:8080 max_fails=3 fail_timeout=30s;\n    server 10.0.1.11:8080 max_fails=3 fail_timeout=30s;\n    server 10.0.1.12:8080 max_fails=3 fail_timeout=30s;\n}\n\n# Nginx Plus 主动健康检查\nupstream api {\n    zone api_zone 64k;\n    server 10.0.1.10:8080;\n    server 10.0.1.11:8080;\n    health_check uri=/health interval=5s fails=2 passes=2;\n}',
        output: '(配置写入后 nginx -s reload 生效)',
        explain: '开源版使用被动检查：连续 3 次失败后标记服务器不可用，30 秒后重试。Nginx Plus（商业版）支持主动健康检查：每 5 秒主动请求 /health 端点，连续 2 次失败下线，连续 2 次成功重新上线。开源替代方案可用 OpenResty + lua-resty-healthcheck。',
      },
    ],
    diagnosis: [
      {
        symptom: '反向代理返回 502 Bad Gateway，后端服务实际在运行',
        cause: 'proxy_pass 的端口/协议与后端不匹配，或 SELinux 阻止 nginx 发起网络连接',
        fix: '1) 确认 proxy_pass 的 URL 正确：`proxy_pass http://127.0.0.1:8080`（注意 http 和端口号）\n2) 检查 SELinux：`setsebool -P httpd_can_network_connect 1`\n3) 检查后端是否监听在正确地址：`ss -tlnp | grep 8080`',
      },
      {
        symptom: '后端应用获取到的客户端 IP 全是代理服务器 IP（如 127.0.0.1）',
        cause: '反向代理未传递 X-Forwarded-For 头，或后端应用未正确解析该头',
        fix: '1) Nginx 配置添加：`proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for`\n2) 后端应用配置信任代理 IP（如 Spring Boot 的 `server.forward-headers-strategy=native`）\n3) 如果用 Nginx 的 realip 模块，配置 `set_real_ip_from 10.0.0.0/8` 和 `real_ip_header X-Forwarded-For`',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 Nginx 反向代理，实现基于路径的路由：/api/ 转发到后端 API 服务，/admin/ 转发到管理后台',
        hint: '使用多个 location 块，每个指向不同的 upstream',
        answer: 'upstream api_backend { server 10.0.1.10:8080; }\nupstream admin_backend { server 10.0.2.10:3000; }\nserver {\n    listen 80;\n    location /api/ {\n        proxy_pass http://api_backend/;\n        proxy_set_header Host $host;\n    }\n    location /admin/ {\n        proxy_pass http://admin_backend/;\n        proxy_set_header Host $host;\n    }\n}',
      },
      {
        level: '进阶',
        task: '配置 Nginx 反向代理实现 WebSocket 支持，代理到后端的 WebSocket 服务',
        hint: 'WebSocket 需要特殊的 Upgrade 头传递，并且需要设置较长的超时',
        answer: 'map $http_upgrade $connection_upgrade {\n    default upgrade;\n    \'\' close;\n}\nlocation /ws/ {\n    proxy_pass http://ws_backend;\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection $connection_upgrade;\n    proxy_read_timeout 3600s;\n    proxy_send_timeout 3600s;\n}',
      },
    ],
  },
  "uyDm1SpOQdpHjq9zBAdck": {
    mentalModel: 'Git 是"代码的时光机器"——每次 commit 是一张快照，branch 是平行宇宙，merge 是宇宙合并，rebase 是重写历史让故事更连贯',
    handsOn: [
      {
        title: 'Git 日常工作流核心操作',
        cmd: 'git status\ngit diff --stat\ngit add -p\ngit commit -m "feat: add health check endpoint"\ngit log --oneline --graph --all -20',
        output: 'On branch feature/health-check\nChanges not staged:\n  modified: src/server.go (15 lines)\n  modified: src/health.go (new file, 42 lines)\n...\n* a1b2c3d (HEAD -> feature/health-check) feat: add health check endpoint\n* e4f5g6h (main) feat: add user authentication\n| * i7j8k9l (develop) refactor: extract middleware',
        explain: 'git add -p 逐块（hunk）暂存，避免一次性提交不相关的修改。--graph --all 可视化分支拓扑。养成每次 commit 前先看 diff 的习惯，避免提交调试代码。',
      },
      {
        title: '分支策略与合并操作',
        cmd: 'git checkout -b fix/memory-leak\ngit commit -am "fix: close database connection pool on shutdown"\ngit checkout main\ngit merge --no-ff fix/memory-leak -m "Merge branch \'fix/memory-leak\'"\ngit branch -d fix/memory-leak\ngit tag -a v1.2.1 -m "Hotfix: memory leak in connection pool"',
        output: 'Branch \'fix/memory-leak\' set up to track.\n[fix/memory-leak a1b2c3d] fix: close database connection pool on shutdown\nMerge made by the \'ort\' strategy.\n src/pool.go | 5 ++++-\n 1 file changed, 4 insertions(+), 1 deletion(-)\nDeleted branch fix/memory-leak.\nTagged v1.2.1.',
        explain: '--no-ff 强制创建合并提交（保留分支历史），-d 只在分支已合并时才删除（安全删除），tag 标记发布版本。这种分支模型适合小团队的 GitHub Flow。',
      },
      {
        title: 'Git 高级操作：rebase 与 cherry-pick',
        cmd: 'git fetch origin\ngit rebase -i origin/main\n# 在编辑器中：\n# pick a1b2c3d feat: add health check\n# squash e4f5g6h fix: typo in health check\n# reword g7h8i9j feat: improve health check response\n\ngit cherry-pick abc1234  # 从其他分支挑选单个提交\ngit rebase --onto main feature/old feature/new  # 移动分支基点',
        output: 'Successfully rebased and updated refs/heads/feature/health-check.\n[main abc1234] feat: fix critical security issue\n 1 file changed, 3 insertions(+)',
        explain: 'rebase -i 可以压缩（squash）、重排、修改提交信息，让提交历史更清晰。cherry-pick 可以从其他分支提取特定修复。rebase --onto 用于将分支从旧基础迁移到新基础。注意：永远不要 rebase 已推送到公共分支的提交。',
      },
      {
        title: 'Git 在 CI/CD 中的高级用法',
        cmd: '# 查看两个版本之间的变更（生成 changelog）\ngit log --oneline v1.2.0..v1.3.0\n# 找出哪次提交引入了 bug\ngit bisect start\ngit bisect bad HEAD\ngit bisect good v1.2.0\ngit bisect run ./test.sh\n# 查看某个文件每一行的最后修改者\ngit blame -L 10,30 src/server.go',
        output: 'abc1234 feat: add rate limiting\ndef4567 fix: connection timeout\nghi7890 refactor: middleware stack\n...\nbisect run success\nabc1234 is the first bad commit\nAuthor: dev@example.com\n    feat: add rate limiting\n\n^old1234 (Alice 2024-01-15) func handleRequest(w http.ResponseWriter,',
        explain: 'git bisect 用二分法自动定位引入 bug 的提交，配合自动化测试脚本效率极高。git blame 追溯每行代码的最后修改者，便于找到责任人理解代码意图。',
      },
    ],
    diagnosis: [
      {
        symptom: 'git push 被拒绝，提示 "rejected (non-fast-forward)" 且 "Updates were rejected because the tip of your current branch is behind"',
        cause: '远程分支有其他人推送的新提交，你的本地分支落后于远程',
        fix: '先拉取远程变更：`git pull --rebase origin main`（rebase 保持线性历史），解决可能的冲突后重新 push。如果是自己的功能分支且确认远程版本已废弃，可以用 `git push --force-with-lease`（比 --force 安全，会检查远程是否有其他人的更新）。',
      },
      {
        symptom: '合并冲突后 git 状态显示 "both modified" 文件，不确定如何处理',
        cause: '两个分支修改了同一文件的同一区域，Git 无法自动合并',
        fix: '1) 用编辑器打开冲突文件，搜索 `<<<<<<<` 标记，手动选择保留哪部分代码\n2) 或使用可视化工具：`git mergetool`（推荐 vimdiff 或 VS Code 的 merge editor）\n3) 解决后 `git add <file>` 标记为已解决，`git commit` 完成合并\n4) 如果搞砸了，`git merge --abort` 可以完全回退合并',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 feature 分支，做几次提交，然后用 rebase -i 将 3 个提交压缩成 1 个，再合并回 main',
        hint: 'git rebase -i HEAD~3 打开最近 3 个提交的交互式编辑器',
        answer: 'git checkout -b feature/cleanup\ngit commit -am "first cleanup step"\ngit commit -am "fix typo"\ngit commit -am "add test"\ngit rebase -i HEAD~3\n# 编辑器中将后两个 pick 改为 squash\ngit checkout main\ngit merge feature/cleanup\ngit branch -d feature/cleanup',
      },
      {
        level: '进阶',
        task: '使用 git bisect 自动定位在哪个提交中引入了测试失败',
        hint: 'git bisect run 接受一个脚本，脚本返回 0 表示好提交，返回 1 表示坏提交',
        answer: 'git bisect start\ngit bisect bad HEAD\ngit bisect good v2.0.0  # 已知 v2.0.0 测试通过\ngit bisect run bash -c "npm test"\n# Git 会自动二分查找，最终输出引入 bug 的提交\ngit bisect reset  # 回到原始分支',
      },
    ],
  },
  "LvhFmlxz5uIy7k_nzx2Bv": {
    mentalModel: '版本控制系统是"代码的保险柜+时光机"——它不仅保存每个历史版本，还允许多人同时工作并安全合并，就像一份永远可以回退的魔法文档',
    sections: [
      {
        title: '版本控制系统演进',
        content: '```\n代际          代表工具      架构模型          特点\n第一代       SCCS/RCS     单文件锁定       一次只能一人编辑同一文件\n第二代       CVS/SVN      集中式（C/S）    中央仓库，checkout-commit 模型\n第三代       Git/Mercurial 分布式（P2P）   每人有完整仓库，离线也能提交\n```\n\n**集中式 vs 分布式核心区别**：\n- SVN：所有历史存储在中央服务器，checkout 只获取最新版本，提交必须联网\n- Git：每个开发者本地有完整历史和所有分支，可以离线提交，推送时再同步\n\n分布式模型天然适合开源协作和远程团队，也是 DevOps 流水线的基础。',
      },
      {
        title: '主流版本控制系统对比',
        content: '| 特性 | Git | Mercurial (hg) | SVN | Perforce |\n|------|-----|----------------|-----|----------|\n| 模型 | 分布式 | 分布式 | 集中式 | 集中式 |\n| 大文件支持 | 差(需 LFS) | 差(需 extensions) | 好 | 极好 |\n| 分支成本 | 极低 | 低 | 高 | 高 |\n| 学习曲线 | 陡峭 | 平缓 | 平缓 | 中等 |\n| 生态 | GitHub/GitLab | Bitbucket(旧) | Apache | 游戏/影视 |\n| 适用场景 | 通用开发 | (已式微) | 遗留项目 | 大型二进制资产 |\n\nGit 已赢得版本控制的"标准之战"，但在游戏开发（大量美术资产）领域，Perforce 和 PlasticSCM 仍有优势。',
      },
      {
        title: '版本控制与 DevOps 的深度融合',
        content: '版本控制不仅是"存代码"，而是整个 DevOps 流程的基石：\n\n1. **GitOps**：Git 仓库作为基础设施的唯一真实来源（Single Source of Truth），ArgoCD/Flux 监听 Git 变更自动同步到 Kubernetes\n2. **CI/CD 触发**：push/merge request 事件触发流水线（GitHub Actions、GitLab CI、Jenkins pipeline）\n3. **代码审查**：Pull Request/Merge Request 是代码质量的第一道防线\n4. **分支策略**：\n   - Git Flow：main/develop/feature/release/hotfix（适合定期发布）\n   - GitHub Flow：main + feature branches（适合持续部署）\n   - Trunk-Based：所有人向 main 提交，用 feature flag 控制（适合高频发布）\n5. **版本溯源**：通过 commit hash 关联部署版本与代码变更，生产问题可追溯到具体提交\n6. **Secret 管理**：Git 仓库不应存储敏感信息，使用 git-crypt、SOPS 或 Vault 管理',
      },
    ],
    diagnosis: [
      {
        symptom: '团队成员误将敏感信息（API Key、密码）提交到 Git 仓库',
        cause: '开发时疏忽，未将敏感文件加入 .gitignore，直接 git add . 提交',
        fix: '1) 立即撤销提交（如果未推送）：`git reset HEAD~1`\n2) 如果已推送，用 `git filter-repo --path secret.env --invert-paths` 从历史中彻底删除\n3) 推送修正后的历史：`git push --force-with-lease`\n4) **关键**：即使从 Git 历史删除，也要立即轮换（rotate）泄露的密钥\n5) 预防：配置 pre-commit hook 使用 gitleaks 或 trufflehog 扫描',
      },
      {
        symptom: 'Git 仓库体积膨胀，clone 速度越来越慢',
        cause: '历史中积累了大量二进制文件（日志、构建产物、数据集），即使删除文件，历史中仍保留',
        fix: '1) 分析大文件：`git rev-list --objects --all | git cat-file --batch-check | sort -k3 -rn | head -20`\n2) 用 git-filter-repo 清理：`git filter-repo --strip-blobs-bigger-than 10M`\n3) 大文件改用 Git LFS：`git lfs install && git lfs track "*.tar.gz"`\n4) 团队约定 .gitignore 排除构建产物和二进制文件',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个新项目设计完整的 .gitignore 文件和 pre-commit hook',
        hint: 'gitignore.io 可以按语言/框架生成模板，pre-commit hook 放在 .git/hooks/ 中',
        answer: '从 gitignore.io 获取 Go 项目模板：\ncurl -s https://www.gitignore.io/api/go,vim,vscode > .gitignore\n创建 pre-commit hook (.git/hooks/pre-commit)：\n#!/bin/sh\n# 检查是否包含敏感信息\ngit diff --cached --diff-filter=ACM | grep -iE "(password|api_key|secret)" && echo "Warning: possible secret detected" && exit 1\n# 运行 lint\ngolangci-lint run ./...\nchmod +x .git/hooks/pre-commit',
      },
      {
        level: '进阶',
        task: '设计一个适合持续部署的 Git 分支策略，并用 Git hooks 和 CI 配置强制执行',
        hint: 'Trunk-Based Development 要求所有变更通过短生命周期的 feature branch 或直接 push 到 main',
        answer: '策略：main 分支始终保持可部署状态\n1) Feature branch 生命周期不超过 1-2 天\n2) 所有合并必须通过 PR + 至少 1 人 review\n3) CI 配置（GitHub Actions）：push 到 main 自动运行测试和部署\n4) branch protection：main 禁止直接 push，必须通过 PR\n5) 用 feature flag 控制未完成的特性：main 分支的代码可以通过 flag 隐藏未完成功能',
      },
    ],
  },
  "R4XSY4TSjU1M7cW66zUqJ": {
    mentalModel: '缓存服务器是"记忆的加速器"——把频繁访问的数据从慢速存储（磁盘/数据库）复制到快速存储（内存），就像你把常用工具放在桌面而不是仓库里',
    handsOn: [
      {
        title: 'Redis 缓存服务器基础运维',
        cmd: 'redis-cli INFO memory | grep -E "used_memory_human|maxmemory|fragmentation"\nredis-cli INFO stats | grep -E "keyspace_hits|keyspace_misses|evicted"\nredis-cli --bigkeys',
        output: 'used_memory_human:2.3G\nmaxmemory:4gb\nmem_fragmentation_ratio:1.15\nkeyspace_hits:1589234\nkeyspace_misses:45678\nevicted_keys:123\n\n-------- summary -------\nSampled 5000 keys in the entire dataset\nBiggest string found \'session:user:12345\' has 15.2KB\nBiggest list found \'queue:notifications\' has 45234 members',
        explain: '缓存命中率 = hits/(hits+misses) ≈ 97.2%，这是健康的。fragmentation_ratio > 1.5 说明内存碎片化严重需要重启。--bigkeys 扫描大 key，大 key 可能导致延迟尖峰。',
      },
      {
        title: '缓存策略设计与实现',
        cmd: '# Cache-Aside 模式（最常用）\nredis-cli\n> SET user:1001 \'{"name":"Alice","role":"admin"}\' EX 3600\n> GET user:1001\n\n# Write-Through 模式示例\nredis-cli\n> MULTI\n> SET product:5001 \'{"name":"Widget","price":29.99}\' EX 7200\n> HINCRBY cache:stats product:5001:writes 1\n> EXEC',
        output: 'OK\n"{\\"name\\":\\"Alice\\",\\"role\\":\\"admin\\"}"\n\nQUEUED\nQUEUED\n(1) (integer) 1\n(2) (integer) 5',
        explain: 'Cache-Aside：应用先查缓存，miss 时从数据库读取并写入缓存。Write-Through：写操作同时更新数据库和缓存。EX 设置过期时间防止缓存永不过期导致数据不一致。',
      },
      {
        title: 'Varnish HTTP 缓存配置',
        cmd: 'cat /etc/varnish/default.vcl',
        output: 'vcl 4.1;\nbackend default {\n    .host = "127.0.0.1";\n    .port = "8080";\n    .probe = {\n        .url = "/health";\n        .interval = 5s;\n        .threshold = 3;\n        .window = 5;\n    }\n}\n\nsub vcl_recv {\n    if (req.method == "PURGE") {\n        return (purge);\n    }\n    if (req.url ~ "^/api/" || req.http.Cookie) {\n        return (pass);\n    }\n    return (hash);\n}\n\nsub vcl_backend_response {\n    set beresp.ttl = 1h;\n    set beresp.grace = 24h;\n    unset beresp.http.Set-Cookie;\n}',
        explain: 'Varnish 是专业的 HTTP 反向代理缓存。probe 是后端健康检查，pass 跳过缓存直接到后端（API 请求和带 Cookie 的请求），hash 走缓存。grace 允许在后端故障时使用过期缓存（优雅降级）。',
      },
      {
        title: 'CDN 与分布式缓存',
        cmd: '# 使用 curl 检查 CDN 缓存命中\ncurl -sI https://cdn.example.com/static/app.js | grep -E "X-Cache|Age|Cache-Control"\n# 清除 CDN 缓存（Cloudflare API）\ncurl -X POST "https://api.cloudflare.com/client/v4/zones/zone_id/purge_cache" \\\n  -H "Authorization: Bearer $CF_TOKEN" \\\n  -d \'{"purge_everything":true}\'',
        output: 'X-Cache: Hit from cloudfront\nAge: 3600\nCache-Control: public, max-age=86400\n\n{"result":{"id":"purge_id"},"success":true}',
        explain: 'CDN 是分布式缓存的边缘部署，X-Cache 头显示是否命中，Age 表示缓存已存在的时间。清除缓存（purge）在发布新版本时必要。CloudFront 用 X-Cache，Fastly 用 X-Served-By。',
      },
    ],
    diagnosis: [
      {
        symptom: '应用响应变慢，Redis 缓存命中率从 98% 骤降到 60%',
        cause: '大量缓存 key 同时过期（缓存雪崩），或热点 key 被驱逐导致请求涌入数据库',
        fix: '1) 查看 evicted_keys 增长率：`redis-cli INFO stats | grep evicted`\n2) 如果是雪崩：给过期时间加随机偏移 `EX $((3600 + RANDOM % 300))` 打散过期时间\n3) 如果是驱逐：增加 maxmemory 或调整 maxmemory-policy（如 allkeys-lfu 保留最常用 key）\n4) 紧急处理：在应用层加本地缓存（如 Go 的 singleflight）作为二级缓存',
      },
      {
        symptom: 'Varnish 缓存命中率低，大部分请求穿透到后端',
        cause: 'VCL 中 Cookie 处理不当，带 Cookie 的请求全部 pass；或后端返回了 Cache-Control: private/no-cache',
        fix: '1) 检查 VCL 中的 Cookie 处理逻辑，对静态资源请求去除 Cookie：`unset req.http.Cookie`\n2) 在 vcl_backend_response 中覆盖后端的不合理缓存策略：`unset beresp.http.Cache-Control` 然后 `set beresp.ttl = 1h`\n3) 用 varnishstat 监控：`varnishstat -1 | grep -E "cache_hit|cache_miss|cache_hitpass"`',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Redis 实现一个 API 限流器，限制每个用户每分钟最多 60 次请求',
        hint: '使用 Redis 的 INCR + EXPIRE 或滑动窗口（sorted set）实现',
        answer: '固定窗口方案：\nfunction checkRateLimit(userId) {\n  const key = `ratelimit:${userId}:${Math.floor(Date.now()/60000)}`\n  const count = redis.incr(key)\n  if (count === 1) redis.expire(key, 120)\n  return count <= 60\n}\n\n滑动窗口方案（更精确）：\nfunction checkSlidingWindow(userId) {\n  const key = `ratelimit:${userId}`\n  const now = Date.now()\n  redis.zremrangebyscore(key, 0, now - 60000)\n  redis.zadd(key, now, `${now}:${Math.random()}`)\n  const count = redis.zcard(key)\n  redis.expire(key, 120)\n  return count <= 60\n}',
      },
      {
        level: '进阶',
        task: '设计一个多级缓存架构（L1 本地缓存 + L2 Redis + L3 CDN），并编写缓存一致性策略',
        hint: '使用 Redis Pub/Sub 通知各应用实例清除本地缓存',
        answer: '写入流程：\n1) 更新数据库\n2) 删除 Redis 缓存（DEL 而非 SET，避免并发写不一致）\n3) 发布清除事件：PUBLISH cache:invalidate user:1001\n4) 各应用实例订阅该频道，收到消息后清除本地 L1 缓存\n\n读取流程：\n1) 查 L1（进程内存，TTL 10s）\n2) miss → 查 L2（Redis，TTL 1h）\n3) miss → 查数据库，写入 L2，写入 L1\n4) 静态资源额外有 L3（CDN，TTL 24h）\n\nCDN 层通过 API purge 或 Cache-Control: s-maxage 控制',
      },
    ],
  },
  "f3tM2uo6LLSOmyeFfLc7h": {
    mentalModel: '防火墙是"网络的门卫+交通规则"——它根据预设规则检查每个进出数据包，决定放行还是拦截，就像大楼保安根据访客名单决定谁可以进入',
    handsOn: [
      {
        title: 'iptables 基础规则管理',
        cmd: 'iptables -L -n -v --line-numbers\niptables -A INPUT -p tcp --dport 22 -s 10.0.0.0/8 -j ACCEPT\niptables -A INPUT -p tcp --dport 22 -j DROP\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\niptables -A INPUT -p tcp --dport 80 -j ACCEPT\niptables -A INPUT -p tcp --dport 443 -j ACCEPT\niptables -P INPUT DROP\niptables -L -n -v',
        output: 'Chain INPUT (policy DROP 0 packets)\nnum   pkts bytes target  prot opt source      destination\n1      156 12480 ACCEPT  tcp  --  10.0.0.0/8  0.0.0.0/0   tcp dpt:22\n2       23  1380 DROP    tcp  --  0.0.0.0/0   0.0.0.0/0   tcp dpt:22\n3     8934 6.2M  ACCEPT  all  --  0.0.0.0/0   0.0.0.0/0   state RELATED,ESTABLISHED\n4     2341 140K  ACCEPT  tcp  --  0.0.0.0/0   0.0.0.0/0   tcp dpt:80\n5     5672 340K  ACCEPT  tcp  --  0.0.0.0/0   0.0.0.0/0   tcp dpt:443',
        explain: '策略是默认 DROP 所有入站流量，然后逐条放行。规则顺序至关重要：先允许已建立连接（ESTABLISHED），再按端口放行。SSH 只允许内网网段。pkts 列显示规则匹配了多少包，帮助排查问题。',
      },
      {
        title: 'firewalld 动态防火墙管理',
        cmd: 'firewall-cmd --get-active-zones\nfirewall-cmd --zone=public --list-all\nfirewall-cmd --zone=public --add-service=http --permanent\nfirewall-cmd --zone=public --add-service=https --permanent\nfirewall-cmd --zone=public --add-rich-rule=\'rule family="ipv4" source address="10.0.0.0/8" port port="6379" protocol="tcp" accept\'\nfirewall-cmd --reload\nfirewall-cmd --zone=public --list-all',
        output: 'public\n  interfaces: eth0\n\npublic (active)\n  target: default\n  interfaces: eth0\n  sources:\n  services: ssh dhcpv6-client\n  ports:\n  protocols:\n  rich rules:\n\n(重新加载后)\npublic (active)\n  services: ssh dhcpv6-client http https\n  rich rules:\n    rule family="ipv4" source address="10.0.0.0/8" port port="6379" protocol="tcp" accept',
        explain: 'firewalld 的 zone 模型比 iptables 更直观：public zone 面向互联网，internal zone 面向内网。--permanent 使规则持久化（不加只在运行时生效）。rich rules 是高级规则语法，支持细粒度控制。',
      },
      {
        title: 'nftables（iptables 的继任者）',
        cmd: 'nft list ruleset\nnft add table inet filter\nnft add chain inet filter input \'{ type filter hook input priority 0; policy drop; }\'\nnft add rule inet filter input ct state established,related accept\nnft add rule inet filter input tcp dport 22 ip saddr 10.0.0.0/8 accept\nnft add rule inet filter input tcp dport { 80, 443 } accept\nnft list ruleset',
        output: 'table inet filter {\n    chain input {\n        type filter hook input priority 0; policy drop;\n        ct state established,related accept\n        ip saddr 10.0.0.0/8 tcp dport 22 accept\n        tcp dport { 80, 443 } accept\n    }\n}',
        explain: 'nftables 是 iptables 的现代替代品（RHEL 8+/Debian 10+ 默认）。优势：统一语法支持 IPv4/IPv6（inet family），支持集合（{ 80, 443 }），更高效的规则评估，兼容 iptables-nft 模式。',
      },
    ],
    diagnosis: [
      {
        symptom: '新部署的 Web 服务无法从外部访问（连接超时），但 curl localhost 正常',
        cause: '防火墙未开放 80/443 端口，或 iptables 默认策略为 DROP',
        fix: '1) 检查当前防火墙状态：`iptables -L INPUT -n` 或 `firewall-cmd --list-all`\n2) firewalld：`firewall-cmd --add-service=http --permanent && firewall-cmd --reload`\n3) iptables：`iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT`\n4) 注意：如果是云服务器，还需检查安全组（Security Group）规则',
      },
      {
        symptom: '服务器重启后 iptables 规则丢失，恢复为默认放行所有',
        cause: 'iptables 规则默认不持久化，重启后丢失。firewalld 的 --permanent 规则会自动持久化',
        fix: '1) iptables 持久化：安装 iptables-persistent（Debian/Ubuntu）或 `iptables-save > /etc/sysconfig/iptables`（RHEL）\n2) 迁移到 firewalld 或 nftables（自动持久化）\n3) 用 Ansible 等配置管理工具确保每次启动时规则正确：\n   `ansible all -m iptables -a "chain=INPUT port=80 protocol=tcp jump=ACCEPT"`',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为新服务器配置一套基础防火墙规则：只允许 SSH（限内网）、HTTP、HTTPS 入站，允许所有出站，默认拒绝其他入站',
        hint: '先设置 ESTABLISHED 规则允许已建立的连接回包，再按服务放行',
        answer: '使用 nftables：\nnft add table inet filter\nnft add chain inet filter input \'{ type filter hook input priority 0; policy drop; }\'\nnft add chain inet filter output \'{ type filter hook output priority 0; policy accept; }\'\nnft add rule inet filter input ct state established,related accept\nnft add rule inet filter input iif lo accept\nnft add rule inet filter input tcp dport 22 ip saddr 10.0.0.0/8 accept\nnft add rule inet filter input tcp dport { 80, 443 } accept\nnft add rule inet filter input icmp type echo-request accept\nnft list ruleset > /etc/nftables.conf',
      },
      {
        level: '进阶',
        task: '配置防火墙规则实现端口敲门（Port Knocking），SSH 端口默认关闭，按顺序访问特定端口后才开放',
        hint: '使用 iptables 的 recent 模块追踪连接来源',
        answer: 'iptables -N KNOCKING\niptables -A INPUT -p tcp --dport 22 -m recent --rcheck --seconds 30 --name knock3 -j ACCEPT\niptables -A INPUT -p tcp --dport 22 -j DROP\niptables -A INPUT -p tcp --dport 7777 -m recent --rcheck --seconds 10 --name knock2 --set --name knock3 -j DROP\niptables -A INPUT -p tcp --dport 8888 -m recent --rcheck --seconds 10 --name knock1 --set --name knock2 -j DROP\niptables -A INPUT -p tcp --dport 9999 -m recent --set --name knock1 -j DROP\n\n敲门顺序：先访问 9999，再访问 8888，再访问 7777，30秒内可以 SSH\nnmap -Pn -p 9999,8888,7777 server && ssh user@server',
      },
    ],
  },
  "3pKaPjHfYbKMHQkRfV8R-": {
    mentalModel: 'IIS 是"微软生态的 Web 管家"——Windows Server 原生的 Web 服务器，深度集成 .NET、Active Directory 和 Windows 认证，在企业内网和 ASP.NET 应用中是首选',
    sections: [
      {
        title: 'IIS 架构与核心概念',
        content: 'IIS（Internet Information Services）是 Windows Server 内置的 Web 服务器，采用模块化架构：\n\n```\nHTTP.sys (内核态 HTTP 监听器)\n    │\n    ▼\nWAS (Windows Process Activation Service) — 管理应用池\n    │\n    ▼\nApplication Pool (w3wp.exe) — 进程隔离，每个池独立回收\n    │\n    ├──▶ Site 1 (绑定: example.com:443)\n    │    ├── Application /api  → 指向 C:\\apps\\api\n    │    └── Application /web  → 指向 C:\\apps\\web\n    └──▶ Site 2 (绑定: admin.com:443)\n         └── Virtual Directory /files → \\\\fileserver\\share\n```\n\n关键概念：\n- **HTTP.sys**：内核驱动，处理 TCP 连接和静态文件，性能极高\n- **Application Pool**：进程隔离边界，一个池崩溃不影响其他池\n- **Site > Application > Virtual Directory**：三层层次结构',
      },
      {
        title: 'IIS 管理与配置',
        content: 'IIS 配置存储在 XML 文件中，可通过 GUI、PowerShell 或命令行管理：\n\n```powershell\n# 安装 IIS\nInstall-WindowsFeature Web-Server, Web-Asp-Net45, Web-Mgmt-Tools\n\n# 创建网站\nNew-Website -Name "MyApp" -Port 443 -HostHeader "app.example.com" `\n  -PhysicalPath "C:\\inetpub\\myapp" -Ssl\n\n# 创建应用池并配置\nNew-WebAppPool -Name "MyAppPool"\nSet-ItemProperty IIS:\\AppPools\\MyAppPool -Name managedRuntimeVersion -Value "v4.0"\nSet-ItemProperty IIS:\\AppPools\\MyAppPool -Name processModel.idleTimeout -Value "00:00:00"\nSet-ItemProperty IIS:\\AppPools\\MyAppPool -Name recycling.periodicRestart.time -Value "00:00:00"\n\n# 绑定 SSL 证书\nNew-WebBinding -Name "MyApp" -Protocol https -Port 443 -HostHeader "app.example.com" -SslFlags 1\n$cert = Get-ChildItem Cert:\\LocalMachine\\My | Where {$_.Subject -like "*example*"}\nNew-Item IIS:\\SslBindings\\0.0.0.0!443!app.example.com -Value $cert\n\n# URL Rewrite 规则\nInstall-WindowsFeature Web-Url-Rewrite\n# 在 web.config 中配置重写规则\n```\n\nIIS 配置存储在 `%windir%\\System32\\inetsrv\\config\\applicationHost.config`。',
      },
      {
        title: 'IIS 在 DevOps 中的角色',
        content: '虽然 Linux + Nginx/Apache 在互联网领域占主导，IIS 在企业 DevOps 中仍不可替代：\n\n1. **ASP.NET Core 托管**：IIS 作为反向代理（通过 ASP.NET Core Module）托管 .NET 应用，利用进程管理和健康检查\n2. **Windows 认证集成**：与 Active Directory 无缝集成，支持 Kerberos/NTLM 单点登录\n3. **PowerShell DSC**：用 Desired State Configuration 声明式管理 IIS 配置\n4. **容器化**：Windows Server Core 容器可以运行 IIS：`mcr.microsoft.com/dotnet/framework/aspnet:4.8`\n5. **ARR（Application Request Routing）**：IIS 的反向代理模块，功能类似 Nginx 的 proxy_pass\n6. **日志与监控**：W3C 格式日志、Failed Request Tracing（FREB）、Performance Monitor 计数器',
      },
    ],
    diagnosis: [
      {
        symptom: 'IIS 返回 503 Service Unavailable，应用程序池自动停止',
        cause: '应用程序池的 w3wp.exe 进程反复崩溃（通常 5 分钟内崩溃 5 次），触发 Rapid-Fail Protection 自动停止池',
        fix: '1) 查看事件日志：`Get-EventLog -LogName Application -Source "WAS" -Newest 10`\n2) 启用崩溃转储：安装 Debug Diagnostic Tool，配置崩溃规则\n3) 临时解决：`Set-ItemProperty IIS:\\AppPools\\MyAppPool -Name failure.rapidFailProtection -Value $false`\n4) 根本修复：分析崩溃转储找到代码异常（通常是未处理异常或内存泄漏）',
      },
      {
        symptom: 'IIS 上部署的 ASP.NET 应用返回 404.17 或 500.19 错误',
        cause: 'web.config 中的配置节被锁定（在 applicationHost.config 中 overrideMode="Deny"），或缺少对应的 IIS 模块',
        fix: '1) 检查错误详情中的 Config Source 定位具体配置行\n2) 解锁配置节：`%windir%\\system32\\inetsrv\\appcmd unlock config -section:system.webServer/handlers`\n3) 安装缺失模块：如 URL Rewrite 模块需单独下载安装\n4) 检查 applicationHost.config 中对应节的 overrideModeDefault',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 PowerShell 在 IIS 上部署一个 ASP.NET Core 应用，配置应用池和 HTTPS 绑定',
        hint: 'ASP.NET Core 需要安装 Hosting Bundle，应用池设为 No Managed Code',
        answer: '# 安装 IIS 和 Hosting Bundle\nInstall-WindowsFeature Web-Server\n# (手动下载安装 ASP.NET Core Hosting Bundle)\n\n# 创建应用池（No Managed Code）\nNew-WebAppPool -Name "CoreApp"\nSet-ItemProperty IIS:\\AppPools\\CoreApp -Name managedRuntimeVersion -Value ""\n\n# 创建网站\nNew-Website -Name "CoreApp" -Port 80 -HostHeader "core.example.com" `\n  -PhysicalPath "C:\\apps\\coreapp" -ApplicationPool "CoreApp"\n\n# HTTPS 绑定\n$thumbprint = (New-SelfSignedCertificate -DnsName "core.example.com" `\n  -CertStoreLocation Cert:\\LocalMachine\\My).Thumbprint\nNew-WebBinding -Name "CoreApp" -Protocol https -Port 443 -HostHeader "core.example.com"\nNew-Item IIS:\\SslBindings\\0.0.0.0!443 -Value (Get-ChildItem Cert:\\LocalMachine\\My\\$thumbprint)',
      },
      {
        level: '进阶',
        task: '配置 IIS 的 ARR 模块作为反向代理，实现基于主机头的路由分发',
        hint: 'ARR 需要配合 URL Rewrite 模块使用，在 web.config 中定义 rewrite 规则',
        answer: '# 安装 ARR 和 URL Rewrite（WebPI 或手动下载）\n# 启用代理功能\nSet-WebConfigurationProperty -pspath "MACHINE/WEBROOT" -filter "system.webServer/proxy" -name "enabled" -value "True"\n\n# web.config 中配置反向代理规则\n<configuration>\n  <system.webServer>\n    <rewrite>\n      <rules>\n        <rule name="RouteToBackend" stopProcessing="true">\n          <match url="(.*)" />\n          <conditions>\n            <add input="{HTTP_HOST}" pattern="^api\\.example\\.com$" />\n          </conditions>\n          <action type="Rewrite" url="http://backend-pool/{R:1}" />\n        </rule>\n      </rules>\n    </rewrite>\n  </system.webServer>\n</configuration>',
      },
    ],
  },
  "i8a0TnFC0gF2qKpYjP5vL": {
    mentalModel: 'Tomcat 是"Java Web 的标准化运行时"——它是 Servlet/JSP 规范的参考实现，就像一个专门为 Java Web 应用设计的"小型应用服务器"，轻量但功能完整',
    handsOn: [
      {
        title: 'Tomcat 安装与基础配置',
        cmd: '# 安装 Tomcat 10\nwget https://dlcdn.apache.org/tomcat/tomcat-10/v10.1.19/bin/apache-tomcat-10.1.19.tar.gz\ntar xzf apache-tomcat-10.1.19.tar.gz -C /opt/\nln -s /opt/apache-tomcat-10.1.19 /opt/tomcat\n\n# 关键配置文件\nls /opt/tomcat/conf/\n# server.xml — 核心配置（端口、连接器、虚拟主机）\n# context.xml — 全局 Context 配置（数据源等）\n# web.xml — 默认 Servlet 配置\n# tomcat-users.xml — 管理界面认证\n\n# 修改端口和线程池\nsed -i \'s/port="8080"/port="8080" maxThreads="500" acceptCount="200"/\' /opt/tomcat/conf/server.xml',
        output: 'conf/\n├── catalina.policy\n├── catalina.properties\n├── context.xml\n├── jaspic-providers.xml\n├── logging.properties\n├── server.xml\n├── tomcat-users.xml\n└── web.xml',
        explain: 'server.xml 是 Tomcat 的核心配置。Connector 定义监听端口和协议（HTTP/AJP），maxThreads 控制最大并发连接处理线程数。Tomcat 10+ 使用 Jakarta EE（javax → jakarta 命名空间迁移）。',
      },
      {
        title: 'Tomcat 应用部署与管理',
        cmd: '# 部署 WAR 包\ncp myapp.war /opt/tomcat/webapps/\n# Tomcat 自动解压部署\n\n# 配置 Manager 界面（用于热部署）\ncat > /opt/tomcat/conf/tomcat-users.xml << \'EOF\'\n<tomcat-users>\n  <role rolename="manager-gui"/>\n  <role rolename="manager-script"/>\n  <user username="admin" password="secure_pass" roles="manager-gui,manager-script"/>\n</tomcat-users>\n\n# 通过 API 部署\ncurl -u admin:secure_pass -T myapp.war \\\n  "http://localhost:8080/manager/text/deploy?path=/myapp&update=true"\n\n# 查看运行状态\ncurl -s http://localhost:8080/manager/text/serverinfo -u admin:secure_pass',
        output: 'OK - Deployed application at context path [/myapp]\n\nTomcat Version: Apache Tomcat/10.1.19\nJVM Version: 17.0.10+7\nOS Name: Linux\nArchitecture: amd64',
        explain: 'WAR 包放入 webapps/ 目录会自动部署。Manager 应用提供 Web GUI 和 HTTP API 进行热部署/卸载。生产环境应限制 Manager 的访问 IP 并修改默认密码。',
      },
      {
        title: 'Tomcat 性能调优与生产配置',
        cmd: '# server.xml 中的生产级 Connector 配置\ncat /opt/tomcat/conf/server.xml | grep -A 20 "Connector port"',
        output: '<Connector port="8080" protocol="org.apache.coyote.http11.Http11NioProtocol"\n           maxThreads="500"\n           minSpareThreads="50"\n           acceptCount="200"\n           connectionTimeout="20000"\n           maxKeepAliveRequests="100"\n           keepAliveTimeout="15000"\n           compression="on"\n           compressableMimeType="text/html,text/xml,text/plain,application/json"\n           URIEncoding="UTF-8"\n           secure="true"\n           scheme="https"\n           proxyPort="443" />',
        explain: 'NIO 协议比默认的 BIO 性能好得多（非阻塞 I/O）。maxThreads=500 适合中等并发。compression 启用响应压缩。proxyPort 告诉 Tomcat 它前面的反向代理的端口，用于生成正确的重定向 URL。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Tomcat 启动后应用报 OutOfMemoryError: Java heap space 或 PermGen/Metaspace 错误',
        cause: 'JVM 默认堆内存太小（通常 256MB），应用需要的内存超出限制',
        fix: '修改 /opt/tomcat/bin/setenv.sh（如果不存在则创建）：\nJAVA_OPTS="-server -Xms1g -Xmx2g -XX:MetaspaceSize=256m -XX:MaxMetaspaceSize=512m"\nJAVA_OPTS="$JAVA_OPTS -XX:+UseG1GC -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/opt/tomcat/logs/"\nexport JAVA_OPTS\n重启 Tomcat 生效。-Xms 和 -Xmx 设为相同值避免运行时堆扩展。',
      },
      {
        symptom: 'Tomcat 在反向代理后面，应用生成的 URL 使用 http 和 8080 端口而非 https 和 443',
        cause: 'Tomcat 直接接收的是代理转发的 HTTP 请求，不知道外部是 HTTPS，生成的重定向和链接使用自身端口',
        fix: '1) 在 server.xml 的 Connector 中添加：`scheme="https" secure="true" proxyPort="443"`\n2) Nginx 反向代理传递头：`proxy_set_header X-Forwarded-Proto $scheme`\n3) Tomcat 添加 RemoteIpValve：在 server.xml 的 Engine 下加 `<Valve className="org.apache.catalina.valves.RemoteIpValve" remoteIpHeader="X-Forwarded-For" protocolHeader="X-Forwarded-Proto" />`',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Tomcat 上部署一个简单的 Spring Boot WAR 应用，配置为 systemd 服务自动启动',
        hint: 'Spring Boot 需要继承 SpringBootServletInitializer 并打包为 WAR',
        answer: '# 1. Spring Boot 项目修改：\n# pom.xml: <packaging>war</packaging>\n# 主类继承 SpringBootServletInitializer\n\n# 2. 部署\nmvn clean package -DskipTests\ncp target/myapp.war /opt/tomcat/webapps/\n\n# 3. 创建 systemd 服务\ncat > /etc/systemd/system/tomcat.service << \'EOF\'\n[Unit]\nDescription=Apache Tomcat\nAfter=network.target\n\n[Service]\nType=forking\nUser=tomcat\nEnvironment=JAVA_HOME=/usr/lib/jvm/java-17\nEnvironment=CATALINA_HOME=/opt/tomcat\nExecStart=/opt/tomcat/bin/startup.sh\nExecStop=/opt/tomcat/bin/shutdown.sh\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl enable --now tomcat',
      },
      {
        level: '进阶',
        task: '配置 Tomcat 集群会话复制，实现两台 Tomcat 的 session 共享',
        hint: '使用 Tomcat 内置的 Delta Manager 或 Redis Session Manager',
        answer: '方案一：内置 Delta Manager（小规模）\n在 server.xml 的 Cluster 元素中启用：\n<Cluster className="org.apache.catalina.ha.tcp.SimpleTcpCluster">\n  <Manager className="org.apache.catalina.ha.session.DeltaManager" />\n  <Channel className="org.apache.catalina.tribes.group.GroupChannel">\n    <Membership className="org.apache.catalina.tribes.membership.McastService"\n               address="228.0.0.4" port="45564" />\n    <Receiver className="org.apache.catalina.tribes.transport.nio.NioReceiver"\n             address="auto" port="4000" />\n  </Channel>\n</Cluster>\n\n方案二：Redis Session Manager（生产推荐）\n使用 redisson-tomcat 插件，session 存储在 Redis 中，更适合云环境和容器化部署',
      },
    ],
  },
  "VbVPBsFsZfK2j9YKGxO3n": {
    mentalModel: 'Nginx 是"高并发的瑞士军刀"——一个事件驱动的 Web 服务器，同时胜任反向代理、负载均衡器、静态文件服务、SSL 终止器等多重角色，用极低的资源消耗处理海量连接',
    handsOn: [
      {
        title: 'Nginx 核心配置与虚拟主机',
        cmd: 'cat /etc/nginx/nginx.conf',
        output: 'user nginx;\nworker_processes auto;\nworker_rlimit_nofile 65535;\nerror_log /var/log/nginx/error.log warn;\npid /run/nginx.pid;\n\nevents {\n    worker_connections 4096;\n    multi_accept on;\n    use epoll;\n}\n\nhttp {\n    include mime.types;\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n    keepalive_timeout 65;\n    gzip on;\n    gzip_types text/plain application/json application/javascript text/css;\n\n    # 日志格式\n    log_format main \'$remote_addr - $request_time [$time_local] "\'$request" $status $body_bytes_sent\';\n\n    include /etc/nginx/conf.d/*.conf;\n}',
        explain: 'worker_processes auto 自动匹配 CPU 核心数。worker_connections 4096 × worker 数 = 最大并发连接。epoll 是 Linux 高效事件模型。sendfile + tcp_nopush 优化静态文件传输。gzip 压缩减少带宽。',
      },
      {
        title: 'Nginx 高级负载均衡配置',
        cmd: 'cat /etc/nginx/conf.d/loadbalancer.conf',
        output: 'upstream backend {\n    # 一致性哈希负载均衡\n    hash $request_uri consistent;\n    server 10.0.1.10:8080 weight=5;\n    server 10.0.1.11:8080 weight=5;\n    server 10.0.1.12:8080 weight=3 max_fails=2 fail_timeout=10s;\n    keepalive 64;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name api.example.com;\n\n    ssl_certificate /etc/ssl/certs/api.pem;\n    ssl_certificate_key /etc/ssl/private/api.key;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers HIGH:!aNULL:!MD5;\n    ssl_session_cache shared:SSL:10m;\n\n    location / {\n        proxy_pass http://backend;\n        proxy_http_version 1.1;\n        proxy_set_header Connection "";\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_next_upstream error timeout http_502 http_503;\n        proxy_next_upstream_tries 2;\n        proxy_connect_timeout 3s;\n    }\n\n    location /health {\n        access_log off;\n        return 200 \'{"status":"ok"}\';\n        add_header Content-Type application/json;\n    }\n}',
        explain: 'hash consistent 实现一致性哈希，确保相同 URI 路由到同一后端（利于缓存）。keepalive 64 保持后端连接复用。proxy_next_upstream 在遇到特定错误时自动切换到下一台服务器。/health 端点直接返回 200，供监控系统使用。',
      },
      {
        title: 'Nginx 性能优化与安全加固',
        cmd: 'cat /etc/nginx/conf.d/security.conf',
        output: '# 安全头\nadd_header X-Frame-Options "SAMEORIGIN" always;\nadd_header X-Content-Type-Options "nosniff" always;\nadd_header X-XSS-Protection "1; mode=block" always;\nadd_header Referrer-Policy "strict-origin-when-cross-origin" always;\nadd_header Content-Security-Policy "default-src \'self\'" always;\nadd_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;\n\n# 隐藏版本号\nserver_tokens off;\n\n# 限制请求体大小\nclient_max_body_size 10m;\n\n# 限制请求速率\nlimit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;\n\nserver {\n    listen 80;\n    server_name _;\n    return 301 https://$host$request_uri;\n}\n\nserver {\n    location /api/ {\n        limit_req zone=api burst=20 nodelay;\n        proxy_pass http://backend;\n    }\n}',
        explain: '安全头防御常见 Web 攻击（XSS、点击劫持、MIME 嗅探）。HSTS 强制浏览器使用 HTTPS。limit_req 限制每 IP 的请求速率，burst 允许突发但不超过速率。server_tokens off 隐藏 Nginx 版本信息。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Nginx 报 "worker_connections are not enough" 或大量 502 Bad Gateway',
        cause: '并发连接数超过 worker_connections 限制，或后端服务器过载导致 Nginx 等待超时',
        fix: '1) 增大 worker_connections：`events { worker_connections 8192; }`\n2) 增大文件描述符限制：`worker_rlimit_nofile 65535` 并检查 `ulimit -n`\n3) 优化后端超时：减小 proxy_connect_timeout，增加 proxy_next_upstream\n4) 添加健康检查避免请求发到故障后端',
      },
      {
        symptom: 'Nginx 重启后 SSL 证书更新不生效，浏览器仍显示旧证书',
        cause: '使用了 reload 而非 restart，且旧 worker 进程仍在处理连接；或者证书链不完整',
        fix: '1) 确保 reload 正确执行：`nginx -t && nginx -s reload`（不是 kill -HUP）\n2) 检查证书链是否完整：`openssl s_client -connect example.com:443 -showcerts`\n3) 如果有 CDN 在前面，CDN 也缓存了旧证书，需要更新 CDN 的证书\n4) 确认证书文件路径正确：`nginx -T | grep ssl_certificate`',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 Nginx 同时提供静态文件服务和 API 反向代理，并启用 gzip 压缩',
        hint: '使用 location 块分别处理 /static/ 和 /api/ 路径',
        answer: 'server {\n    listen 443 ssl http2;\n    server_name app.example.com;\n\n    root /var/www/app;\n\n    location /static/ {\n        expires 30d;\n        add_header Cache-Control "public, immutable";\n        try_files $uri =404;\n    }\n\n    location /api/ {\n        proxy_pass http://127.0.0.1:8080/;\n        proxy_set_header Host $host;\n    }\n\n    location / {\n        try_files $uri $uri/ /index.html;\n    }\n\n    gzip on;\n    gzip_min_length 1000;\n    gzip_types text/plain text/css application/json application/javascript text/xml;\n}',
      },
      {
        level: '进阶',
        task: '使用 Nginx 的 Lua 模块（OpenResty）实现动态限流，根据请求头中的 API Key 分配不同速率',
        hint: 'OpenResty 的 lua-resty-limit-traffic 库提供限流功能',
        answer: 'location /api/ {\n    access_by_lua_block {\n        local limit_req = require "resty.limit.req"\n        local api_key = ngx.req.get_headers()["X-API-Key"]\n        local rate = 10  -- 默认速率\n        if api_key == "premium-key" then\n            rate = 100\n        elseif api_key == "basic-key" then\n            rate = 30\n        end\n        local lim, err = limit_req.new("api_limit", rate, rate * 2)\n        if not lim then\n            ngx.log(ngx.ERR, "failed to create limit: ", err)\n            return\n        end\n        local key = api_key or ngx.var.remote_addr\n        local delay, err = lim:incoming(key, true)\n        if not delay then\n            ngx.status = 429\n            ngx.say("Rate limit exceeded")\n            return ngx.exit(429)\n        end\n    }\n    proxy_pass http://backend;\n}',
      },
    ],
  },
  "W84JkVTRk2u-j6VFEtBPx": {
    mentalModel: 'Apache 是"Web 服务器的元老与瑞士军刀"——历史悠久、模块丰富、.htaccess 允许目录级灵活配置，在共享主机和传统 Web 应用中广泛使用',
    handsOn: [
      {
        title: 'Apache 基础配置与虚拟主机',
        cmd: 'cat /etc/apache2/sites-available/app.example.com.conf',
        output: '<VirtualHost *:443>\n    ServerName app.example.com\n    ServerAdmin webmaster@example.com\n    DocumentRoot /var/www/app\n\n    SSLEngine on\n    SSLCertificateFile /etc/ssl/certs/app.pem\n    SSLCertificateKeyFile /etc/ssl/private/app.key\n\n    <Directory /var/www/app>\n        Options -Indexes +FollowSymLinks\n        AllowOverride All\n        Require all granted\n    </Directory>\n\n    # 反向代理到后端 API\n    ProxyPreserveHost On\n    ProxyPass /api/ http://127.0.0.1:8080/\n    ProxyPassReverse /api/ http://127.0.0.1:8080/\n\n    # 日志\n    ErrorLog ${APACHE_LOG_DIR}/app-error.log\n    CustomLog ${APACHE_LOG_DIR}/app-access.log combined\n\n    # 安全头\n    Header always set X-Frame-Options "SAMEORIGIN"\n    Header always set X-Content-Type-Options "nosniff"\n</VirtualHost>',
        explain: 'VirtualHost 定义虚拟主机。AllowOverride All 允许 .htaccess 文件覆盖配置。ProxyPass/ProxyPassReverse 实现反向代理。Apache 使用 MPM（多路处理模块）决定进程/线程模型。',
      },
      {
        title: 'Apache MPM 选择与性能调优',
        cmd: 'apache2ctl -M | grep mpm\na2dismod mpm_prefork\na2enmod mpm_event\nsystemctl restart apache2\ncat /etc/apache2/mods-enabled/mpm_event.conf',
        output: 'mpm_event (shared)\n\n<IfModule mpm_event_module>\n    StartServers             4\n    MinSpareThreads          50\n    MaxSpareThreads          150\n    ThreadsPerChild          50\n    MaxRequestWorkers        600\n    MaxConnectionsPerChild   10000\n    AsyncRequestWorkerFactor 2\n</IfModule>',
        explain: 'Apache 有三种 MPM：prefork（每个请求一个进程，兼容性好但资源占用大）、worker（多线程）、event（异步事件驱动，性能最好）。event MPM 适合高并发场景。MaxRequestWorkers 控制最大并发处理数。',
      },
      {
        title: 'Apache .htaccess 和 mod_rewrite',
        cmd: 'cat /var/www/app/.htaccess',
        output: '# 启用 URL 重写\nRewriteEngine On\n\n# 强制 HTTPS\nRewriteCond %{HTTPS} off\nRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]\n\n# SPA 路由支持（前端路由）\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule ^(.*)$ /index.html [L]\n\n# 禁止访问隐藏文件\n<FilesMatch "^\\.(env|git|htaccess)">\n    Require all denied\n</FilesMatch>\n\n# 启用浏览器缓存\n<IfModule mod_expires.c>\n    ExpiresActive On\n    ExpiresByType image/jpeg "access plus 1 month"\n    ExpiresByType text/css "access plus 1 week"\n    ExpiresByType application/javascript "access plus 1 week"\n</IfModule>\n\n# 启用压缩\n<IfModule mod_deflate.c>\n    AddOutputFilterByType DEFLATE text/html text/css application/json application/javascript\n</IfModule>',
        explain: '.htaccess 是 Apache 独有的目录级配置，无需重启即可生效（适合共享主机）。mod_rewrite 是最强大的 URL 重写模块。但 .htaccess 有性能开销（每次请求都要遍历目录树查找），生产环境建议将规则移入 VirtualHost 配置。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Apache 返回 403 Forbidden，但文件权限和所有权看起来正确',
        cause: 'Apache 2.4 使用 Require 指令替代了 2.2 的 Order/Allow/Deny，可能是访问控制配置错误，或 SELinux 限制',
        fix: '1) 确保 Directory 块中使用 `Require all granted`（Apache 2.4 语法）而非 `Allow from all`（2.2 语法）\n2) 检查 SELinux 上下文：`ls -Z /var/www/app/` 应有 `httpd_sys_content_t` 标签\n3) 修复 SELinux：`chcon -Rt httpd_sys_content_t /var/www/app/`\n4) 检查 Apache 运行用户的权限：`sudo -u www-data ls /var/www/app/`',
      },
      {
        symptom: 'Apache 高并发时响应变慢，prefork MPM 耗尽所有子进程',
        cause: 'prefork MPM 每个请求消耗一个进程（约 20-50MB 内存），高并发时内存不足或达到 MaxRequestWorkers 上限',
        fix: '1) 切换到 event MPM：`a2dismod mpm_prefork && a2enmod mpm_event`\n2) 如果必须用 prefork（如 PHP mod_php 兼容），调整参数：\n   StartServers 10, MinSpareServers 10, MaxSpareServers 20, MaxRequestWorkers 256\n3) PHP 应用改用 php-fpm + mod_proxy_fcgi 替代 mod_php，可以安全使用 event MPM\n4) 监控：`apachectl status` 或 `mod_status` 查看 worker 状态',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 Apache 作为 PHP 应用的 Web 服务器，使用 php-fpm 和 event MPM',
        hint: '使用 mod_proxy_fcgi 将 .php 请求转发给 php-fpm 进程',
        answer: 'a2dismod mpm_prefork php8.1\na2enmod mpm_event proxy proxy_fcgi\n\n# VirtualHost 配置\n<VirtualHost *:80>\n    ServerName app.example.com\n    DocumentRoot /var/www/app\n\n    <Directory /var/www/app>\n        Options -Indexes +FollowSymLinks\n        AllowOverride All\n        Require all granted\n    </Directory>\n\n    # PHP-FPM 集成\n    <FilesMatch \\.php$>\n        SetHandler "proxy:unix:/run/php/php8.1-fpm.sock|fcgi://localhost/"\n    </FilesMatch>\n</VirtualHost>\n\nsystemctl restart php8.1-fpm\nsystemctl restart apache2',
      },
      {
        level: '进阶',
        task: '配置 Apache 的 mod_security 作为 WAF（Web 应用防火墙），使用 OWASP CRS 规则集',
        hint: 'mod_security 是 Apache 的 WAF 模块，OWASP CRS 提供开箱即用的规则集',
        answer: 'apt install libapache2-mod-security2\na2enmod security2\ncp /etc/modsecurity/modsecurity.conf-recommended /etc/modsecurity/modsecurity.conf\n# 改为 DetectionOnly 先观察，不阻断\nsed -i \'s/SecRuleEngine DetectionOnly/SecRuleEngine On/\' /etc/modsecurity/modsecurity.conf\n\n# 安装 OWASP CRS\ngit clone https://github.com/coreruleset/coreruleset.git /etc/modsecurity/crs\ncp /etc/modsecurity/crs/crs-setup.conf.example /etc/modsecurity/crs/crs-setup.conf\n\n# 在 modsecurity.conf 末尾包含 CRS 规则\necho "IncludeOptional /etc/modsecurity/crs/rules/*.conf" >> /etc/modsecurity/modsecurity.conf\n\nsystemctl restart apache2',
      },
    ],
  },
  "MnEzJvFUz3sWZUQwV9y-n": {
    mentalModel: '网络服务器是"互联网的基础设施螺丝钉"——无论是 Nginx、Apache、IIS 还是 Caddy，它们都承担相同的本质工作：接收 HTTP 请求、处理或转发、返回响应',
    sections: [
      {
        title: '网络服务器核心功能对比',
        content: '```\n特性              Nginx        Apache       IIS          Caddy\n─────────────────────────────────────────────────────────────\n架构              事件驱动     进程/线程     内核HTTP.sys  事件驱动\n配置语法          声明式       XML式指令     GUI/PowerShell Caddyfile\nHTTPS自动         手动         手动          手动          自动(Let\'s Encrypt)\n性能(静态)        ★★★★★       ★★★★         ★★★★★        ★★★★\n性能(动态代理)    ★★★★★       ★★★★         ★★★★         ★★★★\n模块生态          丰富         最丰富        中等          精简\n学习曲线          中           中           高            低\n适用场景          通用         共享主机/.htaccess .NET企业    自动化/小项目\n```\n\n选择原则：高并发选 Nginx，需要 .htaccess 选 Apache，.NET 生态选 IIS，追求零配置选 Caddy。',
      },
      {
        title: '网络服务器的核心职责',
        content: '所有网络服务器共享以下核心职责：\n\n1. **HTTP 协议处理**：解析 HTTP/1.1、HTTP/2、HTTP/3 请求，构造合规响应\n2. **静态文件服务**：高效读取磁盘文件并通过网络发送，使用 sendfile()、mmap() 等系统调用优化\n3. **TLS 终止**：处理 SSL/TLS 握手和加解密，卸载后端应用的加密负担\n4. **反向代理**：将请求转发到后端应用服务器，管理连接池和健康检查\n5. **负载均衡**：在多台后端之间分配请求（轮询、加权、最少连接、一致性哈希）\n6. **访问控制**：基于 IP、认证、速率限制控制访问\n7. **日志与监控**：记录访问日志（W3C/combined 格式）和错误日志\n8. **压缩**：gzip/brotli 压缩响应体减少带宽\n9. **缓存**：缓存后端响应或静态内容，减少后端负载',
      },
      {
        title: '现代网络服务器的趋势',
        content: '1. **HTTP/3 (QUIC)**：基于 UDP 的新一代 HTTP 协议，解决 TCP 队头阻塞问题。Nginx 1.25+、Caddy 2.6+ 已支持\n2. **自动 HTTPS**：Caddy 的杀手特性——自动申请和续签 Let\'s Encrypt 证书，Nginx 可通过 certbot 实现\n3. **声明式配置**：从命令式指令向声明式 YAML 发展（如 Traefik、Envoy 的配置风格）\n4. **可编程代理**：WASM（WebAssembly）插件、Lua 脚本、JavaScript 模块让服务器逻辑可编程\n5. **零信任网络**：mTLS 双向认证成为标配，每个连接都验证身份\n6. **边缘计算**：Cloudflare Workers、Fastly Compute 将服务器逻辑推到 CDN 边缘节点\n7. **容器化原生**：服务器以容器方式部署，配置通过环境变量或 ConfigMap 注入',
      },
    ],
    diagnosis: [
      {
        symptom: '网站偶尔返回 504 Gateway Timeout，刷新后可能恢复',
        cause: '后端应用处理请求时间超过网络服务器设置的超时时间（如 Nginx 默认 proxy_read_timeout 60s）',
        fix: '1) 先确认是后端慢还是网络慢：查看后端应用日志的处理耗时\n2) 如果是后端正常但慢（如复杂查询），增大超时：Nginx 的 `proxy_read_timeout 120s`，Apache 的 `ProxyTimeout 120`\n3) 更好的方案：异步处理长任务，立即返回 202 Accepted，客户端轮询结果\n4) 监控 p99 延迟：`awk \'{print $NF}\' access.log | sort -n | tail -1` 查看最慢请求耗时',
      },
      {
        symptom: '服务器 CPU 使用率正常但连接数很高，大量连接处于 TIME_WAIT 或 CLOSE_WAIT 状态',
        cause: 'TIME_WAIT 是 TCP 正常关闭的等待状态（2MSL），CLOSE_WAIT 表示对端已关闭但本端未关闭。大量 CLOSE_WAIT 说明应用代码未正确关闭连接',
        fix: '1) TIME_WAIT 过多：启用 `tcp_tw_reuse`（`sysctl net.ipv4.tcp_tw_reuse=1`），增大端口范围（`sysctl net.ipv4.ip_local_port_range="1024 65535"`）\n2) CLOSE_WAIT 过多：检查后端应用代码，确保 HTTP 响应发送后正确关闭连接\n3) 通用优化：启用 keepalive 减少连接创建/销毁，调整 `tcp_keepalive_time`',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '对比 Nginx 和 Caddy 在相同硬件上服务静态文件的性能差异',
        hint: '使用 wrk 或 ab 进行压测，对比 requests/sec 和延迟分布',
        answer: '# 准备测试文件\necho "Hello World" > /var/www/test.html\n\n# Nginx 配置：listen 8080; root /var/www; location / { try_files $uri =404; }\n# Caddy 配置：caddy file-server --listen :8081 --root /var/www\n\n# 压测\nwrk -t4 -c100 -d30s http://localhost:8080/test.html  # Nginx\nwrk -t4 -c100 -d30s http://localhost:8081/test.html  # Caddy\n\n# 对比指标：Requests/sec, Avg Latency, p99 Latency, Transfer/sec\n# 通常两者静态文件性能接近，Nginx 略有优势',
      },
      {
        level: '进阶',
        task: '设计一个高可用 Web 服务器架构，包含 DNS、负载均衡、反向代理和后端应用的完整链路',
        hint: '考虑每个层的故障转移策略和监控方案',
        answer: 'DNS 层：Route53/CloudFlare 多 IP 轮询 + 健康检查自动摘除\n    ↓\nLB 层：两台 Nginx（keepalived VIP 或云 LB）互相备份\n    ↓\n反向代理层：Nginx 集群（最少连接负载均衡到后端）\n    ↓\n应用层：3+ 台应用服务器（无状态，可水平扩展）\n    ↓\n缓存层：Redis Cluster（Session + 数据缓存）\n    ↓\n数据库层：主从复制 + 自动故障转移\n\n监控：每个层配置 /health 端点，Prometheus 采集指标，AlertManager 告警\n故障转移：Nginx max_fails + fail_timeout 自动摘除故障后端，DNS TTL 设为 60s 快速切换',
      },
    ],
  },
  "Qc7eYSmGdNi2-jYFvIeQb": {
    mentalModel: '服务网格是"微服务的隐形高速公路系统"——在每个服务旁边部署一个 sidecar 代理，所有服务间通信都经过这些代理，实现流量控制、安全通信和可观测性，而应用代码无需修改',
    sections: [
      {
        title: '服务网格核心架构',
        content: '服务网格将服务间通信的关注点从应用代码中剥离，下沉到基础设施层：\n\n```\n┌─────────────┐     ┌─────────────┐     ┌─────────────┐\n│  Service A  │     │  Service B  │     │  Service C  │\n│             │     │             │     │             │\n│ ┌─────────┐ │     │ ┌─────────┐ │     │ ┌─────────┐ │\n│ │Envoy    │◄├────►┤Envoy    │◄├────►┤Envoy    │ │\n│ │Sidecar  │ │     │Sidecar  │ │     │Sidecar  │ │\n│ └────┬────┘ │     │└────┬────┘ │     │└────┬────┘ │\n└──────┼──────┘     └──────┼──────┘     └──────┼──────┘\n       │                    │                    │\n       └────────────────────┴────────────────────┘\n                         │\n                   ┌─────┴─────┐\n                   │ Control   │  ← Istio/Linkerd 控制平面\n                   │ Plane     │     下发路由规则和证书\n                   └───────────┘\n```\n\n数据平面（Envoy sidecar）处理实际流量，控制平面（Istiod/Linkerd controller）下发配置。应用代码完全不需要感知网格的存在。',
      },
      {
        title: '服务网格核心能力',
        content: '1. **流量管理**\n   - 智能路由：基于 header、权重、URI 的精细路由\n   - 金丝雀发布：将 5% 流量导向新版本\n   - 故障注入：模拟延迟和错误测试系统韧性\n   - 重试/超时/熔断：自动处理瞬时故障\n\n2. **安全**\n   - mTLS：服务间自动双向 TLS 加密，证书自动轮换\n   - 身份认证：基于服务身份（而非 IP）的访问控制\n   - 授权策略：细粒度 RBAC（如 "只有 frontend 可以调用 user-service"）\n\n3. **可观测性**\n   - 分布式追踪：自动注入 trace header（Jaeger/Zipkin）\n   - 指标采集：自动统计请求量、延迟、错误率（Prometheus）\n   - 访问日志：记录每次服务间调用\n\n4. **弹性**\n   - 熔断器：下游服务错误率超阈值时快速失败\n   - 速率限制：基于网格级别的流量整形\n   - 故障转移：跨区域/可用区的自动故障转移',
      },
      {
        title: '主流服务网格对比与选型',
        content: '```\n特性              Istio          Linkerd        Consul Connect  Cilium SM\n─────────────────────────────────────────────────────────────────────────\nSidecar           Envoy(重)      micro-proxy(轻) Envoy            eBPF(无)\n控制平面          Istiod(复杂)   linkerd(简单)   Consul Server    Cilium\n学习曲线          陡峭           平缓            中等             中等\nmTLS              默认开启       默认开启         需配置           默认开启\n性能开销          5-15ms         1-3ms           5-10ms           接近零\neBPF 支持         Ambient Mesh   部分             否               原生\n适用规模          大型(100+服务) 中小型           中型             云原生\n社区活跃度        ★★★★★         ★★★            ★★★★            ★★★★\n```\n\nIstio 功能最全但复杂度最高；Linkerd 轻量易用适合入门；Consul Connect 与 HashiCorp 生态集成好；Cilium 的 eBPF 方案是下一代方向（无 sidecar 开销）。',
      },
    ],
    diagnosis: [
      {
        symptom: '服务加入 Istio mesh 后，服务间调用延迟明显增加（增加 10-50ms）',
        cause: 'Envoy sidecar 引入额外的网络跳转（应用 → sidecar → 网络 → sidecar → 应用），以及 mTLS 握手的开销',
        fix: '1) 确认 sidecar 资源配置：`kubectl get pod -o jsonpath=\'{.spec.containers[1].resources}\'`，确保 sidecar 有足够的 CPU\n2) 启用连接复用：Envoy 的 keepalive 避免重复握手\n3) 使用 Istio Ambient Mesh（无 sidecar 模式）减少开销\n4) 只对需要的服务启用网格：用 namespace 标签控制注入\n5) 考虑 Linkerd 的 micro-proxy（约 10MB）替代 Envoy（约 100MB）',
      },
      {
        symptom: 'Istio 的 mTLS 导致与非 mesh 服务（如外部 API）通信失败',
        cause: 'Istio 默认启用 STRICT mTLS 模式，mesh 内的服务无法与非 mesh 服务通信（因为对方没有 Istio 证书）',
        fix: '1) 为外部服务创建 ServiceEntry：\n   apiVersion: networking.istio.io/v1beta1\n   kind: ServiceEntry\n   spec:\n     hosts: ["external-api.com"]\n     ports: [{number: 443, protocol: TLS}]\n     resolution: DNS\n2) 或设置 DestinationRule 的 TLS 模式为 DISABLE：\n   trafficPolicy:\n     tls:\n       mode: DISABLE\n3) 全局方案：将 mTLS 设为 PERMISSIVE 模式（同时接受 mTLS 和普通 TLS）',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Kubernetes 集群中安装 Istio 并启用自动 sidecar 注入，部署一个简单的双服务应用',
        hint: '使用 istioctl 安装，namespace 标签启用注入',
        answer: '# 安装 Istio\nistioctl install --set profile=demo -y\n\n# 启用自动注入\nkubectl label namespace default istio-injection=enabled\n\n# 部署两个服务\nkubectl apply -f service-a.yaml  # 包含 Deployment + Service\nkubectl apply -f service-b.yaml\n\n# 验证 sidecar 注入\nkubectl get pods -o jsonpath=\'{range .items[*]}{.metadata.name}: {.spec.containers[*].name}{"\\n"}{end}\'\n# 每个 Pod 应有 app 和 istio-proxy 两个容器\n\n# 测试 mTLS\nkubectl exec -it service-a-pod -c app -- curl service-b:8080/health',
      },
      {
        level: '进阶',
        task: '使用 Istio 实现金丝雀发布，将 10% 的流量路由到 v2 版本，并配置自动回滚条件',
        hint: '使用 VirtualService 的 weight 路由和 Istio 的 SLO 指标',
        answer: '# VirtualService 权重路由\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: myapp\nspec:\n  hosts: [myapp]\n  http:\n  - route:\n    - destination:\n        host: myapp\n        subset: v1\n      weight: 90\n    - destination:\n        host: myapp\n        subset: v2\n      weight: 10\n\n---\n# DestinationRule 定义版本子集\napiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nmetadata:\n  name: myapp\nspec:\n  host: myapp\n  subsets:\n  - name: v1\n    labels:\n      version: v1\n  - name: v2\n    labels:\n      version: v2\n\n# 自动回滚用 Flagger 或 Argo Rollouts 与 Istio 集成\n# 条件：v2 错误率 > 5% 或 p99 延迟 > 500ms 时自动将 v2 weight 降为 0',
      },
    ],
  },
  "3QY54epQ2AhX8YMNr4p6d": {
    mentalModel: 'DNS 是"互联网的通讯录"——将人类友好的域名（如 google.com）翻译成机器可读的 IP 地址（如 142.250.80.46），就像你不用记住朋友的电话号码，通讯录帮你查找',
    handsOn: [
      {
        title: 'DNS 查询与调试工具',
        cmd: 'dig example.com A +short\ndig example.com AAAA +short\ndig example.com MX +short\ndig example.com NS +short\ndig @8.8.8.8 example.com A\ndig example.com ANY +noall +answer\nhost -t TXT example.com\nnslookup -type=SRV _sip._tcp.example.com',
        output: '93.184.216.34\n2606:2800:220:1:248:1893:25c8:1946\n10 mail.example.com.\nns1.example.com.\nns2.example.com.\n\n; <<>> DiG 9.18 <<>> @8.8.8.8 example.com A\n;; ANSWER SECTION:\nexample.com.  300  IN  A  93.184.216.34\n\nexample.com. descriptive text "v=spf1 include:_spf.google.com ~all"\n\n_sip._tcp.example.com service = 10 60 5060 sip.example.com.',
        explain: 'dig 是最强大的 DNS 查询工具。A 记录是 IPv4 地址，AAAA 是 IPv6，MX 是邮件服务器，NS 是名称服务器，TXT 常用于 SPF/DKIM 验证，SRV 用于服务发现。@8.8.8.8 指定查询 Google DNS。',
      },
      {
        title: '搭建本地 DNS 服务器（BIND9）',
        cmd: 'apt install bind9 bind9utils\ncat /etc/bind/named.conf.local',
        output: 'zone "internal.example.com" {\n    type master;\n    file "/etc/bind/zones/internal.example.com.db";\n    allow-transfer { 10.0.0.2; };\n};\n\nzone "0.10.in-addr.arpa" {\n    type master;\n    file "/etc/bind/zones/10.0.0.0-reverse.db";\n};\n\n// 转发外部查询到上游 DNS\noptions {\n    forwarders {\n        8.8.8.8;\n        1.1.1.1;\n    };\n};',
        explain: 'BIND9 是最广泛使用的 DNS 服务器。master zone 定义正向解析区域，in-addr.arpa 定义反向解析（IP → 域名）。allow-transfer 限制区域传输只允许从服务器。forwarders 将无法解析的查询转发给上游 DNS。',
      },
      {
        title: 'DNS 记录配置实战',
        cmd: 'cat /etc/bind/zones/internal.example.com.db',
        output: '$TTL 300\n@   IN  SOA  ns1.internal.example.com. admin.internal.example.com. (\n            2024031501  ; Serial (修改后必须递增)\n            3600        ; Refresh (从服务器检查间隔)\n            900         ; Retry (失败后重试间隔)\n            604800      ; Expire (从服务器缓存过期)\n            300 )       ; Minimum TTL\n\n@       IN  NS      ns1\n@       IN  NS      ns2\nns1     IN  A       10.0.1.1\nns2     IN  A       10.0.1.2\n\n; Web 服务器\n@       IN  A       10.0.2.10\nwww     IN  CNAME   @\n\n; 邮件\n@       IN  MX  10  mail\nmail    IN  A       10.0.3.10\n@       IN  TXT     "v=spf1 ip4:10.0.3.0/24 -all"\n\n; 负载均衡\nlb      IN  A       10.0.4.1\nlb      IN  A       10.0.4.2\nlb      IN  A       10.0.4.3\n\n; 服务发现\n_api._tcp   IN  SRV 10 20 8080 app1\n_api._tcp   IN  SRV 10 20 8080 app2',
        explain: 'SOA 记录定义区域权威信息。Serial 每次修改必须递增，否则从服务器不会同步。多个 A 记录实现简单 DNS 轮询负载均衡。SRV 记录用于服务发现（优先级、权重、端口、目标）。SPF 记录防止邮件伪造。',
      },
      {
        title: 'DNS 在云环境和 Kubernetes 中的使用',
        cmd: '# Kubernetes 内部 DNS 解析\nkubectl run dns-test --image=busybox --rm -it -- nslookup kubernetes.default\nkubectl run dns-test --image=busybox --rm -it -- nslookup myapp.mynamespace.svc.cluster.local\n\n# 查看 CoreDNS 配置\nkubectl -n kube-system get configmap coredns -o yaml',
        output: 'Server:    10.96.0.10\nAddress 1: 10.96.0.10 kube-dns.kube-system.svc.cluster.local\nName:      kubernetes.default\nAddress 1: 10.96.0.1 kubernetes.default.svc.cluster.local\n\n.:53 {\n    errors\n    health\n    kubernetes cluster.local in-addr.arpa ip6.arpa {\n        pods insecure\n        fallthrough in-addr.arpa ip6.arpa\n    }\n    forward . /etc/resolv.conf\n    cache 30\n    loop\n    reload\n    loadbalance\n}',
        explain: 'Kubernetes 使用 CoreDNS 为每个 Service 自动创建 DNS 记录。服务发现格式：<service>.<namespace>.svc.cluster.local。CoreDNS 的 kubernetes 插件动态监听 Service 创建事件并生成 DNS 记录。forward 将非集群域名的查询转发到上游 DNS。',
      },
    ],
    diagnosis: [
      {
        symptom: '应用间歇性 DNS 解析失败，报错 "Temporary failure in name resolution" 或 "lookup timeout"',
        cause: 'DNS 服务器过载、网络丢包导致 UDP 查询丢失、或 DNS 缓存 TTL 过期后上游 DNS 不可用',
        fix: '1) 检查 DNS 服务器可用性：`dig @dns-server-ip example.com`\n2) 配置多个 DNS 服务器：在 /etc/resolv.conf 中添加备用 `nameserver 8.8.4.4`\n3) 本地启用 DNS 缓存：安装 systemd-resolved 或 dnsmasq 减少对外部 DNS 的依赖\n4) Kubernetes 中检查 CoreDNS Pod 状态和资源使用：`kubectl top pods -n kube-system -l k8s-app=kube-dns`\n5) 使用 TCP 查询避免 UDP 丢包：`dig +tcp example.com`',
      },
      {
        symptom: '修改了 DNS 记录但部分用户仍访问旧 IP',
        cause: 'DNS 缓存未过期——ISP DNS 缓存、操作系统缓存、浏览器缓存都可能缓存旧记录',
        fix: '1) 修改前提前降低 TTL（如从 3600 改为 60），等旧 TTL 过期后再修改记录\n2) 检查权威 DNS 是否已更新：`dig @ns1.example.com record.example.com`\n3) 清除本地缓存：`systemd-resolve --flush-caches`（Linux）或 `ipconfig /flushdns`（Windows）\n4) 对于 Google DNS：访问 https://developers.google.com/speed/public-dns/cache 手动清除\n5) 最佳实践：变更前提前 24-48 小时降低 TTL',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个新域名配置完整的 DNS 记录集：A、AAAA、MX、TXT（SPF + DKIM）、CAA',
        hint: 'CAA 记录指定哪些 CA 可以为域名签发证书',
        answer: '$TTL 300\n@   IN  SOA  ns1.example.com. admin.example.com. (2024031501 3600 900 604800 300)\n\n@       IN  NS      ns1.example.com.\n@       IN  NS      ns2.example.com.\n@       IN  A       203.0.113.10\n@       IN  AAAA    2001:db8::10\nwww     IN  CNAME   @\n\n; 邮件\n@       IN  MX  10  mail.example.com.\nmail    IN  A       203.0.113.20\n@       IN  TXT     "v=spf1 include:_spf.google.com ~all"\ndefault._domainkey  IN  TXT  "v=DKIM1; k=rsa; p=MIGfMA0G..."\n\n; 安全\n@       IN  CAA 0 issue "letsencrypt.org"\n@       IN  CAA 0 issuewild ";"',
      },
      {
        level: '进阶',
        task: '配置 DNS 地理路由（GeoDNS），让不同地区的用户解析到最近的服务器 IP',
        hint: 'BIND 的 GeoIP 模块或 PowerDNS 的 geoipbackend 可以实现基于客户端 IP 的地理路由',
        answer: '使用 PowerDNS + GeoIP 后端：\n# pdns.conf\nlaunch=geoip\ngeoip-zones-file=/etc/powerdns/geoip.yaml\n\n# geoip.yaml\n---\ndomains:\n- domain: example.com\n  ttl: 30\n  records:\n    example.com:\n      - soa: ns1.example.com admin.example.com 1 3600 900 604800 30\n      - ns: ns1.example.com\n    www.example.com:\n      - a:\n          default: 203.0.113.10        # 默认\n          "US,CA": 198.51.100.10       # 北美\n          "DE,FR,GB": 198.51.100.20   # 欧洲\n          "JP,KR,CN": 198.51.100.30   # 亚太\n\n或者使用云 DNS 服务（Route53 Latency Routing、Cloudflare Load Balancing）',
      },
      {
        level: '进阶',
        task: '在 Kubernetes 中配置 ExternalDNS，自动将 Service/Ingress 同步到云 DNS（如 Route53）',
        hint: 'ExternalDNS 是一个 Kubernetes controller，监听资源变化并自动管理 DNS 记录',
        answer: '# 部署 ExternalDNS\nkubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/external-dns/master/docs/contributing/crd-source/crd-manifest.yaml\n\ncat > external-dns.yaml << \'EOF\'\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: external-dns\nspec:\n  selector:\n    matchLabels:\n      app: external-dns\n  template:\n    metadata:\n      labels:\n        app: external-dns\n    spec:\n      serviceAccountName: external-dns\n      containers:\n      - name: external-dns\n        image: registry.k8s.io/external-dns/external-dns:v0.14.0\n        args:\n        - --source=service\n        - --source=ingress\n        - --domain-filter=example.com\n        - --provider=aws\n        - --aws-zone-type=public\n        - --registry=txt\n        - --txt-owner-id=my-cluster\nEOF\n\nkubectl apply -f external-dns.yaml\n\n# 在 Ingress 上添加注解即可自动创建 DNS 记录\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: myapp\n  annotations:\n    external-dns.alpha.kubernetes.io/hostname: myapp.example.com\nspec:\n  rules:\n  - host: myapp.example.com\n    http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: myapp\n            port:\n              number: 80',
      },
    ],
  },

  "j7gK2mD3fV8YQWnLxT5sC": {
    mentalModel: 'HTTP 是互联网的信使协议，像明信片一样明文传递；HTTPS 则是密封快递，用 TLS 加密保护内容不被窥探',
    handsOn: [
      {
        title: '用 curl 对比 HTTP 与 HTTPS 请求头',
        cmd: 'curl -I http://example.com 2>&1 | head -5; echo "---"; curl -I https://example.com 2>&1 | head -5',
        output: 'HTTP/1.1 200 OK\\nAge: 317276\\nCache-Control: max-age=604800\\nContent-Type: text/html; charset=UTF-8\\n---\\nHTTP/2 200\\naccept-ranges: bytes\\ncontent-type: text/html\\ncontent-length: 1256',
        explain: 'HTTP 返回 HTTP/1.1，HTTPS 通常升级到 HTTP/2（多路复用）。注意 HTTPS 站点常返回 Strict-Transport-Security 头强制浏览器后续只用 HTTPS。'
      },
      {
        title: '用 openssl 查看 HTTPS 握手过程',
        cmd: 'openssl s_client -connect example.com:443 -state 2>&1 | grep -E "SSL_connect|Protocol|Cipher"',
        output: 'SSL_connect:before SSL initialization\\nSSL_connect:SSLv3/TLS write client hello\\nSSL_connect:SSLv3/TLS write client hello\\nSSL_connect:SSLv3/TLS read server hello\\n    Protocol  : TLSv1.3\\n    Cipher    : TLS_AES_256_GCM_SHA384',
        explain: 'TLS 握手经历 Client Hello→Server Hello→密钥交换→Finished 四步。TLSv1.3 只需 1-RTT（甚至 0-RTT 恢复），比 TLSv1.2 的 2-RTT 更快。'
      },
      {
        title: '用 tcpdump 抓包验证 HTTP 明文可见',
        cmd: 'sudo tcpdump -i lo -A port 8080 & sleep 1; curl http://localhost:8080/secret?q=password123 >/dev/null 2>&1; kill %1 2>/dev/null',
        output: 'GET /secret?q=password123 HTTP/1.1\\nHost: localhost:8080\\nUser-Agent: curl/8.4.0',
        explain: 'HTTP 请求在抓包中完全可读——URL、查询参数、Header 全部明文。这就是为什么登录、支付等敏感操作必须用 HTTPS。'
      },
      {
        title: '检查 HSTS 安全头配置',
        cmd: 'curl -sI https://github.com | grep -i strict',
        output: 'strict-transport-security: max-age=31536000; includeSubdomains; preload',
        explain: 'HSTS 告诉浏览器在 max-age 秒内（此处 1 年）只能用 HTTPS 访问。preload 表示已提交到浏览器内置的 HSTS 预加载列表。'
      }
    ],
    diagnosis: [
      {
        symptom: 'HTTPS 站点报 SSL_ERROR_RX_RECORD_TOO_LONG',
        cause: '服务器在 443 端口返回了 HTTP 明文而非 TLS 握手，通常是 Nginx/Apache 配置中忘记加 ssl 关键字',
        fix: '检查 listen 443 ssl; 确保包含 ssl 参数，并正确配置 ssl_certificate 和 ssl_certificate_key 路径'
      },
      {
        symptom: '浏览器报 Mixed Content 警告，页面部分资源加载失败',
        cause: 'HTTPS 页面中引用了 http:// 的图片、脚本或样式表，浏览器会阻止不安全资源',
        fix: '将所有资源 URL 改为 https:// 或使用协议相对路径 //cdn.example.com，配置 CSP 头 upgrade-insecure-requests 自动升级'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 curl 获取 https://httpbin.org/get 并查看响应的 TLS 版本和密码套件',
        hint: '使用 curl -v 可以看到详细的握手信息',
        answer: "curl -v https://httpbin.org/get 2>&1 | grep -E 'SSL connection|subject|issuer' 会显示 TLS 版本和证书信息"
      },
      {
        level: '进阶',
        task: '用 openssl 测试服务器是否支持 TLSv1.0（不安全的老版本）',
        hint: 'openssl s_client 可以用 -tls1 参数指定版本',
        answer: "openssl s_client -connect example.com:443 -tls1 2>&1 如果连接成功说明支持 TLSv1.0（应禁用）；报错 alert protocol version 说明已禁用"
      }
    ]
  },

  "B4K5VR3Pz1fYqXOjR8aHn": {
    mentalModel: 'FTP 像老式仓库的搬运工——有专门的调度台（控制连接 21 端口）和搬运通道（数据连接 20 端口或随机端口），但全程不加密，密码和文件都裸奔',
    handsOn: [
      {
        title: '用 lftp 连接 FTP 服务器并列出目录',
        cmd: 'lftp -u anonymous, ftp://speedtest.tele2.net -e "ls; quit"',
        output: 'drwxr-xr-x  2 ftp  ftp  4096 1MB.zip\\ndrwxr-xr-x  2 ftp  ftp  4096 5MB.zip\\ndrwxr-xr-x  2 ftp  ftp  4096 10MB.zip',
        explain: '匿名 FTP 使用 anonymous 用户名，密码为空。lftp 支持 tab 补全和断点续传，比传统 ftp 客户端更易用。'
      },
      {
        title: '用 curl 通过 FTP 协议下载文件',
        cmd: 'curl -o test.zip ftp://speedtest.tele2.net/1MB.zip 2>&1 | tail -3',
        output: '  % Total    % Received Time    Time     Time  Current\\n                         Total   Elapsed  Speed\\n100 1024k  100 1024k    0:00:02  0:00:02  512k/s',
        explain: 'curl 原生支持 FTP 协议。下载时 curl 先建立控制连接（21 端口），协商后开启数据连接传输文件。'
      },
      {
        title: '用 FTPS（FTP over TLS）加密传输',
        cmd: 'curl --ssl-reqd -u user:pass ftps://ftp.example.com/file.txt -o file.txt',
        output: 'curl: (6) Could not resolve host: ftp.example.com  (示例)',
        explain: '--ssl-reqd 强制要求 TLS 加密，如果服务器不支持 TLS 则连接失败。FTPS 在控制通道和数据通道都加密，防止密码和文件被窃听。'
      },
      {
        title: '查看 FTP 主动/被动模式区别',
        cmd: 'lftp -u anonymous, ftp://speedtest.tele2.net -e "set ftp:passive-mode on; debug 5; ls; quit" 2>&1 | grep -i "pasv\\|port"',
        output: '---> PASV\\n<--- 227 Entering Passive Mode (x,x,x,x,p1,p2)',
        explain: '被动模式（PASV）由服务器告知客户端一个端口，客户端主动连接。这对 NAT 后的客户端更友好。主动模式（PORT）由服务器反向连接客户端，常被防火墙阻断。'
      }
    ],
    diagnosis: [
      {
        symptom: 'FTP 连接超时或 ls 命令卡住不动',
        cause: '防火墙阻断了数据连接。主动模式下服务器无法连接客户端；被动模式下服务器返回的内网 IP 不可达',
        fix: '切换到被动模式（passive mode）；若服务器在 NAT 后，配置 FTP 服务器的 pasv_address 为公网 IP，并开放被动模式端口范围'
      },
      {
        symptom: 'FTP 登录报 530 Login incorrect 但账号密码正确',
        cause: '服务器限制匿名登录或只允许特定 IP 访问；vsftpd 的 userlist_deny 或 pam 配置拒绝了用户',
        fix: '检查 /etc/vsftpd/vsftpd.conf 中的 userlist_file 和 anonymous_enable 设置；查看 /var/log/secure 或 vsftpd 日志确认拒绝原因'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 curl 列出匿名 FTP 服务器上的文件',
        hint: 'curl 对 FTP 也支持类似 ls 的操作，使用 URL 后不加文件名',
        answer: "curl ftp://speedtest.tele2.net/ 会返回目录列表"
      },
      {
        level: '进阶',
        task: '解释为什么现代 DevOps 实践中推荐 SFTP 替代 FTP，并演示 SFTP 连接',
        hint: 'SFTP 不是 FTP加 SSL，而是基于 SSH 的完全不同的协议',
        answer: "SFTP 运行在 SSH（22 端口）之上，复用 SSH 的加密和认证。连接命令：sftp user@host，无需额外开放端口，且不存在主动/被动模式的 NAT 问题"
      }
    ]
  },

  "g2X4LdW8kR3fY5PQj7vTn": {
    mentalModel: 'SSL 证书像服务器的身份证——由权威机构（CA）签发，证明"这个公钥确实属于这个域名"，浏览器通过验证证书链来确认对方不是冒充者',
    handsOn: [
      {
        title: '查看网站的 SSL 证书详情',
        cmd: 'echo | openssl s_client -connect github.com:443 -servername github.com 2>/dev/null | openssl x509 -noout -subject -issuer -dates',
        output: "subject=C = US, ST = California, L = San Francisco, O = \"GitHub, Inc.\", CN = github.com\\nissuer=C = US, O = DigiCert Inc, CN = DigiCert TLS Hybrid ECC SHA384 2020 CA1\\nnotBefore=Mar  7 00:00:00 2024 GMT\\nnotAfter=Mar  7 23:59:59 2025 GMT",
        explain: 'subject 是证书持有者信息，issuer 是签发 CA。GitHub 使用 DigiCert 签发的 ECC 证书。证书有明确的有效期，过期后浏览器会报安全警告。'
      },
      {
        title: '验证证书链完整性',
        cmd: 'echo | openssl s_client -connect github.com:443 -servername github.com -showcerts 2>/dev/null | grep -E "s:|i:"',
        output: '   s:C = US, ST = California, O = "GitHub, Inc.", CN = github.com\\n   i:C = US, O = DigiCert Inc, CN = DigiCert TLS Hybrid ECC SHA384 2020 CA1\\n   s:C = US, O = DigiCert Inc, CN = DigiCert TLS Hybrid ECC SHA384 2020 CA1\\n   i:C = US, O = DigiCert Inc, OU = www.digicert.com, CN = DigiCert Global Root G2',
        explain: '证书链：服务器证书 → 中间 CA（DigiCert TLS Hybrid）→ 根 CA（DigiCert Global Root G2）。浏览器内置了根 CA 公钥，可以逐级验证到服务器证书。'
      },
      {
        title: '用 Let\'s Encrypt 签发免费证书',
        cmd: 'sudo certbot certonly --standalone -d example.com --agree-tos -m admin@example.com 2>&1 | tail -5',
        output: 'Successfully received certificate.\\nCertificate is saved at: /etc/letsencrypt/live/example.com/fullchain.pem\\nKey is saved at:         /etc/letsencrypt/live/example.com/privkey.pem\\nThis certificate expires on 2025-08-15.',
        explain: 'Certbot 通过 ACME 协议向 Let\'s Encrypt 证明你拥有该域名（HTTP-01 或 DNS-01 挑战），然后自动签发 90 天有效的证书。--standalone 模式会临时启动一个 Web 服务器完成验证。'
      },
      {
        title: '检查证书是否支持 SAN（Subject Alternative Name）',
        cmd: 'echo | openssl s_client -connect google.com:443 -servername google.com 2>/dev/null | openssl x509 -noout -ext subjectAltName | head -10',
        output: 'X509v3 Subject Alternative Name:\\n    DNS:*.google.com, DNS:*.android.com, DNS:*.appengine.google.com, DNS:*.cloud.google.com, DNS:*.google.ca',
        explain: 'SAN 允许一张证书保护多个域名或通配符域名。Google 的证书覆盖了 *.google.com 及众多子域。现代浏览器已不检查 CN，只检查 SAN。'
      }
    ],
    diagnosis: [
      {
        symptom: '浏览器报 NET::ERR_CERT_DATE_INVALID',
        cause: 'SSL 证书已过期，或服务器系统时钟不准确导致证书看起来不在有效期内',
        fix: '续期证书（certbot renew）；同步服务器时钟（chronyc makestep 或 ntpd）；确认证书的 notBefore/notAfter 时间范围'
      },
      {
        symptom: '浏览器报 NET::ERR_CERT_COMMON_NAME_INVALID',
        cause: '证书中的域名与访问的域名不匹配，例如证书签给 www.example.com 但用户访问 api.example.com',
        fix: '签发包含所需域名的 SAN 证书；通配符证书 *.example.com 只匹配一级子域，不匹配 api.sub.example.com'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查看任意网站的证书有效期和签发机构',
        hint: 'openssl s_client 连接后管道给 openssl x509',
        answer: "echo | openssl s_client -connect baidu.com:443 2>/dev/null | openssl x509 -noout -dates -issuer"
      },
      {
        level: '进阶',
        task: '用 openssl 自签一张证书并配置 Nginx 使用（仅用于开发环境）',
        hint: 'openssl req -x509 可以直接生成自签名证书',
        answer: "openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj '/CN=localhost' 然后 Nginx 配置 ssl_certificate cert.pem; ssl_certificate_key key.pem;"
      }
    ]
  },

  "v6dR8nW2kP4fYj3QLx5Tg": {
    mentalModel: 'Cookie 像游乐场的腕带——服务器在你第一次访问时给你戴上（Set-Cookie），之后每次请求你都亮出腕带（Cookie 头），服务器凭此认出你是谁',
    handsOn: [
      {
        title: '查看网站设置的 Cookie',
        cmd: 'curl -sI https://github.com | grep -i set-cookie | head -5',
        output: 'set-cookie: _gh_sess=xxxxx; Path=/; HttpOnly; Secure; SameSite=Lax\\nset-cookie: logged_out=yes; Path=/; Domain=.github.com; Expires=Tue, 27 May 2025 00:00:00 GMT; Secure; SameSite=Lax',
        explain: 'Set-Cookie 头中各属性含义：HttpOnly 禁止 JS 读取（防 XSS 窃取）；Secure 只在 HTTPS 发送；SameSite=Lax 限制跨站发送（防 CSRF）；Expires 设定过期时间。'
      },
      {
        title: '用 curl 模拟带 Cookie 的请求',
        cmd: 'curl -s -b "session_id=abc123; user=tu" https://httpbin.org/cookies',
        output: '{\\n  "cookies": {\\n    "session_id": "abc123",\\n    "user": "tu"\\n  }\\n}',
        explain: '-b 参数发送 Cookie 头。httpbin 回显收到的 Cookie，可以看到浏览器每次请求都会自动附带域名匹配的所有 Cookie。'
      },
      {
        title: '测试 Cookie 的 Secure 和 HttpOnly 属性',
        cmd: 'curl -sI -c - https://httpbin.org/cookies/set?test=value | grep test',
        output: 'httpbin.org\\tFALSE\\t/cookies\\tFALSE\\t0\\ttest\\tvalue',
        explain: 'curl -c 导出 Cookie jar，各列分别是：域名、是否子域匹配、路径、是否 Secure、过期时间、名称、值。这里 Secure 为 FALSE 说明 httpbin 没有设置 Secure 标记。'
      },
      {
        title: '使用 curl 的 cookie jar 实现会话保持',
        cmd: 'curl -s -c /tmp/cookies.txt https://httpbin.org/cookies/set/session/xyz789 > /dev/null; curl -s -b /tmp/cookies.txt https://httpbin.org/cookies',
        output: '{\\n  "cookies": {\\n    "session": "xyz789"\\n  }\\n}',
        explain: '-c 保存服务器返回的 Cookie 到文件，-b 下次请求时读取并发送。这模拟了浏览器的自动 Cookie 管理，实现跨请求的会话保持。'
      }
    ],
    diagnosis: [
      {
        symptom: '用户登录后刷新页面变成未登录状态',
        cause: 'Cookie 的 Domain 或 Path 不匹配当前 URL；或 SameSite=Strict 阻止了从其他站点跳转过来时携带 Cookie',
        fix: '检查 Set-Cookie 的 Domain（应设为 .example.com 覆盖所有子域）和 Path（通常为 /）；如从外部链接跳转，考虑将 SameSite 改为 Lax'
      },
      {
        symptom: 'API 请求在浏览器中正常，curl 中返回 401',
        cause: 'curl 默认不保存和发送 Cookie，不像浏览器自动管理会话',
        fix: '使用 curl -c cookiejar.txt 保存登录响应中的 Cookie，再用 curl -b cookiejar.txt 发送后续请求'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 curl 查看百度首页设置了哪些 Cookie，并解释每个属性的含义',
        hint: 'curl -sI 只看响应头，grep set-cookie 过滤',
        answer: "curl -sI https://www.baidu.com | grep -i set-cookie 分析每个 Cookie 的 Domain、Path、Expires、Secure、HttpOnly 属性"
      },
      {
        level: '进阶',
        task: '解释为什么 SameSite=None 必须配合 Secure 属性，并演示如何正确设置跨站 Cookie',
        hint: 'Chrome 80+ 的默认 SameSite 行为变化',
        answer: "浏览器要求 SameSite=None 的 Cookie 必须同时设置 Secure，否则 Cookie 会被拒绝。正确示例：Set-Cookie: token=abc; Path=/; SameSite=None; Secure; HttpOnly"
      }
    ]
  },

  "h9K3mF7dW2fYQ4PjL8vTn": {
    mentalModel: 'CORS 像大楼的门禁系统——默认只让本楼住户（同源）进出，外来访客（跨域请求）需要前台（服务器）明确签发 Access-Control-Allow-Origin 通行证才能进入',
    sections: [
      {
        title: 'CORS 触发流程',
        content: "1. 浏览器发现请求的目标与当前页面不同源（协议/域名/端口任一不同）\\n2. 对于简单请求（GET/POST/HEAD + 安全 Content-Type），直接发送并在响应中检查 CORS 头\\n3. 对于非简单请求（PUT/DELETE/自定义头/JSON），先发 OPTIONS 预检请求\\n4. 服务器响应 Access-Control-Allow-Origin、Allow-Methods、Allow-Headers\\n5. 浏览器验证通过后才发送实际请求，否则报 CORS 错误"
      },
      {
        title: '关键响应头详解',
        content: "Access-Control-Allow-Origin: * 或具体域名（不能用 * 搭配 credentials）\\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS\\nAccess-Control-Allow-Headers: Content-Type, Authorization（客户端请求的自定义头需在此放行）\\nAccess-Control-Allow-Credentials: true（允许携带 Cookie，此时 Origin 不能为 *）\\nAccess-Control-Max-Age: 86400（预检结果缓存秒数，减少 OPTIONS 请求）\\nAccess-Control-Expose-Headers: X-Request-Id（允许客户端 JS 读取的响应头）"
      },
      {
        title: 'Nginx CORS 配置模板',
        content: 'location /api/ {\\n    add_header Access-Control-Allow-Origin $http_origin always;\\n    add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS" always;\\n    add_header Access-Control-Allow-Headers "Content-Type, Authorization" always;\\n    add_header Access-Control-Allow-Credentials true always;\\n    if ($request_method = OPTIONS) {\\n        add_header Access-Control-Max-Age 86400;\\n        return 204;\\n    }\\n    proxy_pass http://backend;\\n}'
      }
    ],
    diagnosis: [
      {
        symptom: '浏览器控制台报 CORS error: No Access-Control-Allow-Origin header',
        cause: '服务器没有返回 CORS 响应头；或请求经过了 CDN/反向代理但中间层没有透传 CORS 头',
        fix: '在后端或 Nginx 层添加 CORS 头；确保 CDN 配置了 Vary: Origin 以缓存不同 Origin 的响应；检查 OPTIONS 预检请求是否返回 200/204'
      },
      {
        symptom: '带 credentials 的请求报 CORS 错误：Cannot use wildcard with credentials',
        cause: '前端设置了 withCredentials=true 或 fetch 的 credentials: "include"，但服务器返回 Allow-Origin: *',
        fix: '服务器必须返回具体的 Origin 值（如 Access-Control-Allow-Origin: https://app.example.com）并加上 Access-Control-Allow-Credentials: true'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 curl 模拟一个 OPTIONS 预检请求，检查 api.github.com 的 CORS 策略',
        hint: 'curl -X OPTIONS 加上 Origin 和 Access-Control-Request-Method 头',
        answer: "curl -i -X OPTIONS https://api.github.com/user -H 'Origin: https://github.com' -H 'Access-Control-Request-Method: GET' 查看返回的 Allow-Origin、Allow-Methods、Allow-Headers"
      },
      {
        level: '进阶',
        task: '解释为什么本地开发时 localhost:3000 请求 localhost:8080 也会触发 CORS',
        hint: '同源策略比较协议、域名和端口三个要素',
        answer: "虽然都是 localhost，但端口不同（3000 vs 8080），浏览器认为不同源。解决方案：后端添加 CORS 头允许 http://localhost:3000；或使用开发代理（Vite 的 proxy 配置）让请求看起来同源"
      }
    ]
  },

  "m5dR2nK8vW3fYQ7PjL4xT": {
    mentalModel: 'Content-Type 是快递包裹上的物品标签——告诉接收方里面装的是什么（JSON、HTML、图片），接收方才知道用什么方式打开和处理',
    handsOn: [
      {
        title: '查看常见 API 的 Content-Type',
        cmd: 'curl -sI https://api.github.com/users/octocat | grep -i content-type',
        output: 'content-type: application/json; charset=utf-8',
        explain: 'GitHub API 返回 application/json，表明响应体是 JSON 格式。charset=utf-8 说明使用 UTF-8 编码，客户端应按此解码中文字符。'
      },
      {
        title: '用 curl 发送不同 Content-Type 的 POST 请求',
        cmd: 'echo "--- JSON ---"; curl -s -X POST https://httpbin.org/post -H "Content-Type: application/json" -d \'{"name":"tu"}\' | grep -A2 data; echo "--- Form ---"; curl -s -X POST https://httpbin.org/post -d "name=tu&age=25" | grep -A2 form',
        output: '--- JSON ---\\n  "data": "{\\"name\\":\\"tu\\"}",\\n--- Form ---\\n  "form": {\\n    "age": "25",\\n    "name": "tu"\\n  }',
        explain: '不指定 Content-Type 时 curl 默认用 application/x-www-form-urlencoded。服务器根据 Content-Type 决定如何解析请求体——JSON 解析为对象，form 解析为键值对。'
      },
      {
        title: '查看 multipart/form-data 文件上传',
        cmd: 'echo "hello" > /tmp/test.txt; curl -s -X POST https://httpbin.org/post -F "file=@/tmp/test.txt" -F "name=tu" | grep -A5 files',
        output: '"files": {\\n    "file": "hello\\n"\\n  }',
        explain: '-F 参数自动设置 Content-Type 为 multipart/form-data 并生成 boundary 分隔符。每个表单项用 boundary 隔开，文件内容直接嵌入请求体。'
      },
      {
        title: '测试 Content-Type 与实际内容不匹配时的行为',
        cmd: 'curl -s https://httpbin.org/json -H "Accept: text/html" -w "\\nContent-Type: %{content_type}\\nHTTP Code: %{http_code}"',
        output: '{\\n  "slideshow": { ... }\\n}\\nContent-Type: application/json\\nHTTP Code: 200',
        explain: 'Accept 头是客户端告诉服务器"我想要什么格式"，但服务器不一定遵从。Content-Type 由服务器决定并返回，客户端应按此解析。如果服务器错误地将 JSON 标记为 text/html，浏览器会当 HTML 处理，导致 JSON 语法显示为纯文本。'
      }
    ],
    diagnosis: [
      {
        symptom: 'POST JSON 数据后服务器返回 400 Bad Request 或数据解析为空',
        cause: '忘记设置 Content-Type: application/json，服务器按默认的 form-urlencoded 解析，无法识别 JSON 格式',
        fix: '请求时加上 -H "Content-Type: application/json"；在后端框架中检查 body parser 是否配置了 JSON 中间件（如 Express 的 express.json()）'
      },
      {
        symptom: '浏览器下载文件而非显示，或中文显示为乱码',
        cause: '服务器返回了错误的 Content-Type（如将 HTML 标为 application/octet-stream 触发下载）或缺少 charset 导致中文乱码',
        fix: '确保服务器返回正确的 MIME 类型和 charset；Nginx 中配置 charset utf-8; 和 default_type application/octet-stream; 并在具体 location 覆盖为正确类型'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 curl 发送一个 Content-Type 为 application/xml 的 POST 请求到 httpbin',
        hint: '用 -H 设置头，-d 发送 XML 字符串',
        answer: 'curl -s -X POST https://httpbin.org/post -H "Content-Type: application/xml" -d \'<user><name>tu</name></user>\' | grep data'
      },
      {
        level: '进阶',
        task: '解释 Content-Type 和 Accept 头的区别，并演示同时使用两者的请求',
        hint: 'Content-Type 描述发送的数据，Accept 描述期望接收的数据',
        answer: "curl -s https://api.github.com/users/octocat -H 'Accept: application/vnd.github.v3+json' -X POST -H 'Content-Type: application/json' -d '{\"key\":\"value\"}' Content-Type 告诉服务器请求体格式，Accept 告诉服务器客户端想要的响应格式"
      }
    ]
  },

  "0o6ejhfpmO4S8A6djVWva": {
    mentalModel: 'SSL/TLS 是互联网的信封密封术——SSL 是老版本（已不安全），TLS 是进化版，它们在 TCP 和应用层之间插入一层加密隧道，让中间人只能看到密文',
    sections: [
      {
        title: 'TLS 1.3 握手四步曲',
        content: '1. Client Hello：客户端发送支持的 TLS 版本、密码套件列表、客户端随机数、密钥共享（Key Share）\\n2. Server Hello：服务器选择密码套件、发送证书、服务器随机数和密钥共享\\n3. 双方各自用 DH 算法计算出预主密钥（Pre-Master Secret），结合随机数派生出会话密钥\\n4. Finished：双方互发加密的 Finished 消息验证握手完整性\\n\\nTLS 1.3 将握手从 2-RTT 优化到 1-RTT，并废除了 RSA 密钥交换（不支持前向保密），只保留 (EC)DHE。'
      },
      {
        title: 'TLS 版本与安全等级',
        content: 'SSL 2.0/3.0：已废弃，存在 POODLE、DROWN 等严重漏洞\\nTLS 1.0：2020 年各大浏览器已停止支持，存在 BEAST 攻击\\nTLS 1.1：同期废弃，缺乏现代密码套件\\nTLS 1.2：当前主流，支持 AEAD 密码（AES-GCM、ChaCha20-Poly1305）\\nTLS 1.3：最新标准，握手更快、更安全，废除了所有遗留算法\\n\\n生产环境应最低要求 TLS 1.2，优先启用 TLS 1.3。'
      },
      {
        title: '密码套件解读',
        content: 'TLS_AES_256_GCM_SHA384 拆解：\\n- TLS：协议前缀\\n- AES_256：对称加密算法和密钥长度\\n- GCM：工作模式（AEAD，同时提供加密和完整性验证）\\n- SHA384：哈希函数（用于 HKDF 密钥派生）\\n\\n常见安全套件：TLS_CHACHA20_POLY1305_SHA256（移动端性能更好）\\n应避免的弱套件：RC4、3DES、AES-CBC（易受 Lucky13 攻击）'
      }
    ],
    diagnosis: [
      {
        symptom: 'ssllabs 评级为 B 或更低',
        cause: '服务器仍支持 TLS 1.0/1.1 或使用了弱密码套件（如 CBC 模式、3DES）',
        fix: '在 Nginx 中配置 ssl_protocols TLSv1.2 TLSv1.3; ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384; ssl_prefer_server_ciphers on;'
      },
      {
        symptom: '客户端连接报 sslv3 alert handshake failure',
        cause: '客户端和服务器没有共同支持的密码套件或 TLS 版本，常见于老旧客户端（如 Java 7、IE 8）访问只启用 TLS 1.3 的服务器',
        fix: '评估客户端兼容性需求，必要时在服务器添加 TLS 1.2 支持；更新客户端库到支持现代 TLS 的版本'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 openssl 测试一个网站支持的 TLS 版本',
        hint: '分别用 -tls1、-tls1_1、-tls1_2、-tls1_3 参数连接',
        answer: "for v in tls1 tls1_1 tls1_2 tls1_3; do echo -n \"$v: \"; echo | openssl s_client -connect example.com:443 -$v 2>&1 | grep -q 'Cipher is' && echo 'supported' || echo 'not supported'; done"
      },
      {
        level: '进阶',
        task: '解释前向保密（Forward Secrecy）的含义，并验证网站是否支持',
        hint: '前向保密要求使用 DHE 或 ECDHE 密钥交换，而非 RSA',
        answer: "echo | openssl s_client -connect example.com:443 2>/dev/null | grep 'Server Temp Key' 如果显示 ECDH 或 DH 则支持前向保密；如果显示 RSA 则不支持（即使私钥泄露也无法解密过去的通信记录）"
      }
    ]
  },

  "wcIRMLVm3SdEJWF9RPfn7": {
    mentalModel: 'SSH 像一条加密隧道——你拿着钥匙（私钥）敲开远程服务器的大门，之后的所有对话都被加密保护，即使有人窃听也听不懂',
    handsOn: [
      {
        title: '生成 SSH 密钥对',
        cmd: 'ssh-keygen -t ed25519 -C "devops@example.com" -f /tmp/demo_key -N ""',
        output: 'Generating public/private ed25519 key pair.\\nYour identification has been saved in /tmp/demo_key\\nYour public key has been saved in /tmp/demo_key.pub\\nThe key fingerprint is:\\nSHA256:xxxxxxxxxxxxxxxxxx devops@example.com',
        explain: 'Ed25519 是目前推荐的算法——比 RSA 密钥更短、速度更快、安全性更高。-N "" 设置空密码短语（生产环境建议设置 passphrase）。生成的私钥权限必须是 600。'
      },
      {
        title: '配置 SSH Config 简化登录',
        cmd: 'cat ~/.ssh/config',
        output: 'Host prod\\n    HostName 192.168.1.100\\n    User deploy\\n    Port 22\\n    IdentityFile ~/.ssh/id_ed25519\\n    ForwardAgent yes\\n\\nHost jump\\n    HostName bastion.example.com\\n    User admin',
        explain: '配置后可直接 ssh prod 登录，无需记 IP 和用户名。ForwardAgent 允许在跳板机上使用本地密钥访问内网服务器。多跳可通过 ProxyJump 配置。'
      },
      {
        title: '通过 SSH 隧道转发端口',
        cmd: 'ssh -L 5433:db-server:5432 user@bastion -N -f; psql -h localhost -p 5433 -U admin mydb',
        output: 'psql (15.4)\\nType "help" for help.\\nmydb=>',
        explain: '-L 5433:db-server:5432 将本地 5433 端口通过跳板机转发到内网数据库的 5432。-N 不执行远程命令，-f 后台运行。这样可以在本地直接连接远程内网服务。'
      },
      {
        title: '查看 SSH 连接使用的加密算法',
        cmd: 'ssh -vv user@example.com exit 2>&1 | grep -E "kex:|cipher:|MAC:|compression:"',
        output: 'kex: server->client cipher: chacha20-poly1305@openssh.com MAC: <implicit> compression: none\\nkex: client->server cipher: chacha20-poly1305@openssh.com MAC: <implicit> compression: none',
        explain: 'SSH 使用 ChaCha20-Poly1305 同时提供加密和完整性验证（AEAD）。密钥交换使用 curve25519-sha256，支持前向保密。'
      }
    ],
    diagnosis: [
      {
        symptom: 'ssh 报 Permission denied (publickey)',
        cause: '公钥未添加到服务器的 ~/.ssh/authorized_keys；或私钥文件权限过于宽松（应 600）；或 sshd_config 中 PubkeyAuthentication 未启用',
        fix: '将公钥复制到服务器：ssh-copy-id user@host；检查 chmod 600 ~/.ssh/id_ed25519；服务端检查 /var/log/auth.log 确认拒绝原因'
      },
      {
        symptom: 'SSH 连接极慢，等待 10-30 秒才出现密码提示',
        cause: 'sshd 默认会尝试反向 DNS 解析客户端 IP，DNS 超时导致延迟',
        fix: '在 /etc/ssh/sshd_config 中设置 UseDNS no，重启 sshd 服务。也可以设置 GSSAPIAuthentication no 跳过 Kerberos 认证尝试。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '生成一对 Ed25519 密钥并查看公钥内容',
        hint: 'ssh-keygen -t ed25519，公钥在 .pub 文件中',
        answer: "ssh-keygen -t ed25519 -f ~/.ssh/test_key -C 'my-laptop'; cat ~/.ssh/test_key.pub 输出格式为：ssh-ed25519 AAAA...base64... my-laptop"
      },
      {
        level: '进阶',
        task: '配置 SSH 反向隧道，让远程服务器能访问你本地的 8080 服务',
        hint: 'ssh -R 参数创建反向隧道',
        answer: "ssh -R 9090:localhost:8080 user@remote -N 这条命令让远程服务器的 9090 端口转发到你本地的 8080。适用于让远程团队临时访问你的开发服务器。"
      }
    ]
  },

  "QZ7bkY-MaEgxYoPDP3nma": {
    mentalModel: 'OSI 模型像快递系统的七层分工——从物理运输（网线/光纤）到最终拆包裹（应用层），每层只管一件事并向上一层提供服务',
    sections: [
      {
        title: '七层速记与实际协议对照',
        content: '第 7 层 应用层（Application）：HTTP/HTTPS、SMTP、FTP、DNS、SSH——用户直接交互的协议\\n第 6 层 表示层（Presentation）：TLS/SSL 加密、数据压缩、编码转换（UTF-8、ASN.1）\\n第 5 层 会话层（Session）：建立/维护/终止会话，如 TLS 握手、SMB 会话\\n第 4 层 传输层（Transport）：TCP（可靠）和 UDP（快速），端口号区分不同应用\\n第 3 层 网络层（Network）：IP 地址 + 路由，决定数据包从 A 到 B 的路径\\n第 2 层 数据链路层（Data Link）：MAC 地址 + 以太网帧，局域网内设备间传输\\n第 1 层 物理层（Physical）：电缆、光纤、WiFi 信号，传输比特流'
      },
      {
        title: 'DevOps 视角：为什么关注 OSI',
        content: '排障时按层定位效率最高：\\n- "ping 不通" → 第 3 层（IP/路由/防火墙）\\n- "ping 通但连不上端口" → 第 4 层（TCP 端口未开放/安全组）\\n- "连上了但返回 502" → 第 7 层（后端应用挂了/Nginx 配置错误）\\n- "连上了但证书错误" → 第 6 层（TLS 证书问题）\\n\\n云网络中也经常涉及：VPC（第 3 层）、安全组（第 4 层）、负载均衡器（第 4/7 层）、WAF（第 7 层）。'
      },
      {
        title: 'TCP 三次握手与四次挥手',
        content: '三次握手（建立连接）：\\n1. 客户端 → SYN → 服务器\\n2. 服务器 → SYN+ACK → 客户端\\n3. 客户端 → ACK → 服务器\\n\\n四次挥手（断开连接）：\\n1. 主动方 → FIN → 被动方\\n2. 被动方 → ACK → 主动方（可能还有数据要发）\\n3. 被动方 → FIN → 主动方（数据发完了）\\n4. 主动方 → ACK → 被动方\\n\\nTIME_WAIT 状态：主动关闭方在发送最后一个 ACK 后等待 2MSL（约 60 秒），确保对方收到 ACK。高并发服务器会因此积累大量 TIME_WAIT 连接。'
      }
    ],
    diagnosis: [
      {
        symptom: 'telnet 能连上端口但 curl 请求超时或报错',
        cause: 'TCP 连接（第 4 层）正常，但应用层（第 7 层）处理异常——可能是后端服务内部错误、代理配置问题或请求格式不对',
        fix: '检查应用日志（journalctl -u service）；用 curl -v 查看 HTTP 请求/响应细节；检查 Nginx/HAProxy 的 upstream 配置'
      },
      {
        symptom: '服务在高并发时出现大量 TIME_WAIT 连接',
        cause: '短连接模式下每次请求都经历完整的 TCP 握手和挥手，主动关闭方积累 TIME_WAIT',
        fix: '使用连接池和 Keep-Alive 复用 TCP 连接；调整内核参数 net.ipv4.tcp_tw_reuse=1；考虑使用长连接协议（WebSocket、gRPC）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 ss 命令查看当前所有 TCP 连接状态，统计各状态数量',
        hint: 'ss -ant 显示所有 TCP 连接及其状态',
        answer: "ss -ant | awk '{print $1}' | sort | uniq -c | sort -rn 可以看到 ESTAB（已建立）、TIME-WAIT、LISTEN 等各状态的数量"
      },
      {
        level: '进阶',
        task: '用 tcpdump 抓取一次完整的 TCP 三次握手过程',
        hint: 'tcpdump -i any port 80 并用 SYN 标志过滤',
        answer: "sudo tcpdump -i any -nn 'tcp[tcpflags] & (tcp-syn|tcp-ack) != 0' and port 80 然后在另一个终端 curl http://localhost 可以看到 SYN、SYN-ACK、ACK 三个包"
      }
    ]
  },

  "2Wd9SlWGg6QtxgiUVLyZL": {
    mentalModel: '云服务提供商像水电煤——你不用自己建发电厂（买服务器），按需接入就能获得计算、存储、网络等基础设施，按用量付费',
    sections: [
      {
        title: '三大巨头对比',
        content: 'AWS（Amazon）：市场份额第一，服务最全（200+），全球 33 个区域。核心服务：EC2、S3、Lambda、ECS/EKS。优势：生态成熟、文档丰富、企业级功能完善\\n\\nAzure（Microsoft）：与 Windows/Office 365/AD 深度集成，企业用户迁移成本低。核心服务：VM、Blob Storage、Functions、AKS。优势：混合云方案（Azure Arc）、.NET 生态\\n\\nGCP（Google）：数据分析/AI 能力突出，Kubernetes 发源地。核心服务：GCE、GCS、Cloud Functions、GKE、BigQuery。优势：全球网络低延迟、Kubernetes 原生体验、BigQuery 数据分析'
      },
      {
        title: '服务模型：IaaS / PaaS / SaaS / FaaS',
        content: 'IaaS（基础设施即服务）：你管理 OS 和应用，云商管硬件。例：AWS EC2、Azure VM\\nPaaS（平台即服务）：你只管代码，云商管运行时。例：Heroku、Azure App Service\\nSaaS（软件即服务）：你直接用软件。例：Gmail、Salesforce、Office 365\\nFaaS（函数即服务）：你写函数，按调用付费。例：AWS Lambda、Azure Functions\\n\\nDevOps 工程师最常接触 IaaS 和 FaaS，需要理解共享责任模型（Shared Responsibility Model）：云商负责物理安全、网络基础设施；你负责应用安全、数据加密、身份管理。'
      },
      {
        title: '选择云商的关键考量',
        content: '1. 区域覆盖：服务目标用户的区域是否有数据中心（中国用户考虑 AWS 宁夏/北京、Azure 中国）\\n2. 成本模型：按量 vs 预留实例 vs Spot 实例；数据传输费用常被低估\\n3. 团队技能：团队熟悉哪家就选哪家，迁移学习成本不可忽视\\n4. 生态集成：已有 Office 365 → Azure 更顺畅；已有 Google Workspace → GCP 更自然\\n5. 合规要求：GDPR、等保三级等合规认证是否满足\\n6. 多云策略：避免厂商锁定，使用 Terraform 等多云 IaC 工具'
      }
    ],
    diagnosis: [
      {
        symptom: '云账单突然暴涨，出现意外的高额费用',
        cause: '未设置预算告警；资源未释放（开发/测试环境 24/7 运行）；数据传输费用（跨区域/出网流量）；被攻击后资源被滥用',
        fix: '设置 AWS Budgets / Azure Cost Management 告警；使用自动伸缩和定时开关机（非生产环境夜间关闭）；检查 NAT Gateway 和跨区域流量；启用 IAM 权限边界防止资源滥用'
      },
      {
        symptom: '跨区域访问延迟高，用户体验差',
        cause: '服务和用户不在同一区域，或没有使用 CDN 加速静态资源',
        fix: '将资源部署在离用户最近的区域；使用 CloudFront/Azure CDN 分发静态内容；使用 Global Accelerator/Azure Front Door 优化动态路由'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 AWS CLI 列出你账户中所有 EC2 实例及其所在区域',
        hint: 'aws ec2 describe-instances 加上 --region 参数',
        answer: "aws ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId,State.Name,Placement.AvailabilityZone]' --output table"
      },
      {
        level: '进阶',
        task: '比较同一规格虚拟机在 AWS、Azure、GCP 的月费（如 2 vCPU / 8GB RAM）',
        hint: '查看各云商的按需定价页面，注意区域差异',
        answer: "参考各云商定价计算器：AWS m6i.large (2C/8G) 约 $70/月（us-east-1）；Azure D2s v5 约 $73/月（East US）；GCP e2-standard-2 约 $54/月（us-central1）。GCP 通常最便宜，但功能和支持有差异"
      }
    ]
  },

  "9p_ufPj6QH9gHbWBQUmGw": {
    mentalModel: 'Serverless 像打车服务——你不用买车（服务器）、不用保养（运维），叫一辆（调用函数）就到了，按里程（执行时间）付费，没人在用就不花钱',
    sections: [
      {
        title: 'Serverless 核心特征',
        content: '1. 无服务器管理：不需要预配置、维护或扩展服务器\\n2. 事件驱动：由 HTTP 请求、消息队列、定时器等事件触发\\n3. 自动伸缩：从 0 到数千个并发实例，无需手动配置\\n4. 按用量付费：只为实际执行时间/次数付费，空闲时不收费\\n5. 冷启动延迟：首次或长时间未调用后，需要 100ms-数秒初始化运行时\\n\\n适合场景：API 端点、定时任务、文件处理管道、Webhook 处理\\n不适合：长时间运行的进程（超 15 分钟）、低延迟要求（冷启动不可接受）、有状态服务'
      },
      {
        title: '各云 Serverless 对比',
        content: 'AWS Lambda：支持 Node/Python/Java/Go/.NET/Ruby，最大 10GB 内存，最长 15 分钟，冷启动 200ms-2s\\nAzure Functions：与 Azure 生态集成好，Premium Plan 可消除冷启动，支持 Durable Functions 工作流\\nGCP Cloud Functions：第二代支持并发请求，最长 60 分钟，与 Cloud Run 互补\\nCloudflare Workers：边缘计算，全球 300+ 节点，V8 Isolate 冷启动 <5ms，但只支持 JS/Wasm\\n\\n共同限制：执行时间上限、包大小限制、无本地持久存储、调试困难'
      },
      {
        title: 'Serverless 架构模式',
        content: '1. API Gateway + Lambda：HTTP 请求触发函数，最常见的 Web 后端模式\\n2. 事件流处理：S3 上传 → Lambda 处理图片 → 存储结果\\n3. 定时任务：CloudWatch Events / Azure Timer Trigger 定期触发\\n4. 消息队列消费者：SQS/Service Bus 消息触发函数异步处理\\n5. Step Functions / Durable Functions：编排多个函数组成工作流，处理重试和状态\\n\\n最佳实践：函数保持小而专注（单一职责）；使用 Lambda Layers / 共享层管理依赖；配置并发限制防止失控；使用 X-Ray / Application Insights 追踪调用链'
      }
    ],
    diagnosis: [
      {
        symptom: 'Serverless 函数冷启动延迟过高（>2 秒），影响用户体验',
        cause: '运行时初始化慢（Java/.NET 启动重）；包体积大导致下载和解压慢；VPC 内的 Lambda 需要初始化 ENI 网络接口',
        fix: '使用 Provisioned Concurrency（AWS）保持预热实例；减小包体积（tree-shaking、esbuild）；选择轻量运行时（Go/Rust/Node）；避免 Lambda 连 VPC（除非必须）'
      },
      {
        symptom: 'Serverless 函数的成本超过了传统服务器',
        cause: '高频调用 + 高内存配置 = 按量计费反而比预留实例贵；函数执行时间长；过多的 API Gateway 请求费用',
        fix: '分析调用频率，高频稳定负载考虑 Fargate/EC2；优化函数执行时间；使用 Lambda Power Tuning 找到最佳内存配置；考虑 Savings Plans'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '解释 Serverless 冷启动的原因和三种缓解方法',
        hint: '冷启动发生在函数实例首次创建时',
        answer: "冷启动原因：平台需要分配容器/沙箱、下载代码、初始化运行时。缓解方法：1) Provisioned Concurrency 保持预热实例；2) 定时 ping 函数防止休眠；3) 减小部署包和优化启动代码"
      },
      {
        level: '进阶',
        task: '设计一个 Serverless 图片处理管道的架构',
        hint: '考虑上传触发、处理步骤、结果存储和错误重试',
        answer: "S3 上传原图 → Event Notification 触发 Lambda → Lambda 生成缩略图/WebP → 存储到另一个 S3 Bucket → SNS 通知客户端处理完成。使用 SQS Dead Letter Queue 处理失败，Step Functions 编排多步骤处理"
      }
    ]
  },

  "E-lSLGzgOPrz-25ER2Hk7": {
    mentalModel: '白名单像 VIP 名单——只有名单上的人能进入；灰名单像待审核名单——不在黑白名单上的人需要额外验证才能通过',
    sections: [
      {
        title: '白名单（Whitelist / Allowlist）应用场景',
        content: 'IP 白名单：只允许特定 IP 访问管理后台、数据库端口或 API\\n域名白名单：公司防火墙只放行批准的域名\\n邮箱白名单：只接收来自特定发件人的邮件\\n应用白名单：只允许安装经过审批的软件\\n\\n配置示例（Nginx IP 白名单）：\\nlocation /admin {\\n    allow 10.0.0.0/8;\\n    allow 192.168.1.0/24;\\n    deny all;\\n}\\n\\n优点：默认拒绝，攻击面最小\\n缺点：管理成本高，新需求需要手动添加；过于严格会阻碍业务发展'
      },
      {
        title: '灰名单（Greylist）在邮件安全中的应用',
        content: '邮件灰名单原理：\\n1. 首次收到来自新发件人/新 IP 的邮件时，临时拒绝（451 Try again later）\\n2. 合法的邮件服务器会在几分钟后重试\\n3. 大多数垃圾邮件发送器不会重试（追求效率，发完就走）\\n4. 重试成功后将发件人加入临时白名单\\n\\n优点：零误杀合法邮件，有效阻挡 80-90% 的垃圾邮件\\n缺点：首次邮件延迟数分钟；现代垃圾邮件工具也开始支持重试\\n\\n实现工具：Postgrey（Postfix 插件）、postscreen（Postfix 内置）'
      },
      {
        title: 'DevOps 中的访问控制策略',
        content: '网络层：安全组白名单（AWS SG 只允许办公 IP SSH）、NACL 黑白名单\\n应用层：WAF 规则（允许/拒绝特定 User-Agent、路径、IP 段）\\nCI/CD：分支保护规则（只允许特定角色合并到 main）\\n容器：PodSecurityPolicy / OPA Gatekeeper 白名单允许的镜像仓库\\n\\n最佳实践：\\n- 默认拒绝（deny by default），按需开放\\n- 使用基础设施即代码管理白名单（Terraform），留下审计轨迹\\n- 定期审查白名单，移除不再需要的条目\\n- 结合灰名单/速率限制作为第一道防线'
      }
    ],
    diagnosis: [
      {
        symptom: '新用户或新服务无法访问被白名单保护的资源',
        cause: 'IP 或身份未添加到白名单中；VPN 出口 IP 变更后白名单未更新',
        fix: '确认客户端的真实 IP（注意 CDN/代理会改变源 IP）；更新白名单配置并重新加载（nginx -s reload）；考虑使用动态白名单（基于身份而非 IP）'
      },
      {
        symptom: '灰名单导致重要邮件延迟，收到投诉',
        cause: '发送方服务器重试间隔较长或根本不重试；首次联系的客户邮件被延迟',
        fix: '将重要合作伙伴域名加入灰名单例外（whitelist_domains）；缩短灰名单重试等待时间（从 5 分钟减到 1 分钟）；使用 DNSWL 白名单服务自动跳过已知合法发送者'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Nginx 中配置 IP 白名单，只允许 10.0.0.0/8 和 172.16.0.0/12 访问 /admin 路径',
        hint: '使用 allow 和 deny 指令',
        answer: "location /admin {\\n    allow 10.0.0.0/8;\\n    allow 172.16.0.0/12;\\n    deny all;\\n    proxy_pass http://admin-backend;\\n}"
      },
      {
        level: '进阶',
        task: '设计一个结合白名单、灰名单和速率限制的 API 防护策略',
        hint: '分三层防御：已知信任、未知验证、恶意阻断',
        answer: "第一层：已知合作伙伴 API Key 白名单，不限速率。第二层：新客户端灰名单，首次请求要求验证码/Token 验证，通过后加入临时白名单。第三层：所有请求速率限制（如 100 req/min），超限返回 429。使用 Redis 存储客户端状态和计数器"
      }
    ]
  },

  "UfQrIJ-uMNJt9H_VM_Q5q": {
    mentalModel: 'AWS Lambda 是 AWS 的按需代码执行引擎——你上传一个函数，AWS 在收到事件时自动运行它，执行完立刻释放资源，按毫秒计费',
    handsOn: [
      {
        title: '用 AWS CLI 创建一个 Lambda 函数',
        cmd: 'zip function.zip index.js; aws lambda create-function --function-name hello-devops --runtime nodejs20.x --handler index.handler --role arn:aws:iam::123456789:role/lambda-role --zip-file fileb://function.zip',
        output: '{\\n    "FunctionName": "hello-devops",\\n    "Runtime": "nodejs20.x",\\n    "Handler": "index.handler",\\n    "CodeSize": 312,\\n    "MemorySize": 128,\\n    "Timeout": 3\\n}',
        explain: '创建 Lambda 需要指定运行时（nodejs20.x）、入口函数（index.handler）、执行角色（IAM Role 决定函数能访问哪些 AWS 服务）。zip 包是部署单元。'
      },
      {
        title: '调用 Lambda 函数并查看输出',
        cmd: 'aws lambda invoke --function-name hello-devops --payload \'{"name":"DevOps"}\' /tmp/response.json; cat /tmp/response.json',
        output: '{\\n    "statusCode": 200,\\n    "body": "{\\"message\\":\\"Hello DevOps\\"}"\\n}',
        explain: 'aws lambda invoke 同步调用函数。--payload 传入事件数据（JSON），函数处理后返回结果。返回的 StatusCode 200 表示调用成功（不等于函数内部逻辑成功）。'
      },
      {
        title: '配置 Lambda 环境变量和超时',
        cmd: 'aws lambda update-function-configuration --function-name hello-devops --environment Variables={DB_HOST=mydb.xxx.rds.amazonaws.com,STAGE=prod} --timeout 30 --memory-size 512',
        output: '{\\n    "FunctionName": "hello-devops",\\n    "Timeout": 30,\\n    "MemorySize": 512,\\n    "Environment": {\\n        "Variables": {\\n            "DB_HOST": "mydb.xxx.rds.amazonaws.com",\\n            "STAGE": "prod"\\n        }\\n    }\\n}',
        explain: '环境变量用于注入配置而不硬编码。Lambda 的 CPU 与内存成正比——512MB 内存约分配 0.5 个 vCPU。增大内存可以同时加速 CPU 密集型任务。'
      },
      {
        title: '查看 Lambda 调用日志',
        cmd: 'aws logs tail /aws/lambda/hello-devops --since 1h --format short',
        output: 'START RequestId: a1b2c3d4-xxxx\\nHello DevOps\\nEND RequestId: a1b2c3d4-xxxx\\nREPORT RequestId: a1b2c3d4 Duration: 23.45 ms Billed Duration: 24 ms Memory Size: 512 MB Max Memory Used: 67 MB',
        explain: 'REPORT 行是性能调优的关键：Duration 是实际执行时间，Billed Duration 是计费时间（向上取整到毫秒），Max Memory Used 显示峰值内存——如果远低于配置内存，可以降配节省成本。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Lambda 报 Task timed out after 3.00 seconds',
        cause: '函数执行时间超过了配置的超时限制（默认 3 秒），常见于等待外部 API 或数据库连接',
        fix: '增大 Timeout 配置（最大 900 秒）；优化代码减少执行时间；使用连接池复用数据库连接；检查 VPC 安全组是否阻止了出站连接'
      },
      {
        symptom: 'Lambda 报 AccessDeniedException: not authorized to perform: dynamodb:PutItem',
        cause: 'Lambda 的执行角色（Execution Role）没有附加访问 DynamoDB 的 IAM 策略',
        fix: '为 Lambda Role 附加策略：aws iam attach-role-policy --role-name lambda-role --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess（生产环境应限制到具体表和最小权限）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 AWS CLI 列出账户中所有 Lambda 函数及其运行时',
        hint: 'aws lambda list-functions 配合 --query 过滤输出',
        answer: "aws lambda list-functions --query 'Functions[].[FunctionName,Runtime,MemorySize,Timeout]' --output table"
      },
      {
        level: '进阶',
        task: '解释 Lambda 并发限制和预留并发的用途，演示如何设置',
        hint: '默认区域并发限制为 1000，预留并发可以为关键函数保留配额',
        answer: "aws lambda put-function-concurrency --function-name critical-api --reserved-concurrent-executions 100 这会为 critical-api 保留 100 个并发，同时防止它消耗其他函数的配额。账户级限制可在 AWS Support 申请提升"
      }
    ]
  },

  "1ieK6B_oqW8qOC6bdmiJe": {
    mentalModel: 'AWS 像一座巨大的工具超市——从虚拟机到 AI 服务应有尽有，你按需拿取工具搭建自己的技术架构，全球 33 个区域是你的货架',
    sections: [
      {
        title: 'DevOps 必知的 AWS 核心服务',
        content: '计算：EC2（虚拟机）、Lambda（无服务器）、ECS/EKS（容器编排）\\n存储：S3（对象存储）、EBS（块存储/磁盘）、EFS（文件存储/NFS）\\n网络：VPC（虚拟网络）、Route 53（DNS）、CloudFront（CDN）、ELB（负载均衡）\\n数据库：RDS（关系型）、DynamoDB（NoSQL）、ElastiCache（Redis/Memcached）\\n安全：IAM（身份权限）、KMS（密钥管理）、Secrets Manager、WAF\\nDevOps：CodePipeline（CI/CD）、CodeBuild（构建）、CodeDeploy（部署）、CloudFormation（IaC）\\n监控：CloudWatch（指标/日志/告警）、X-Ray（链路追踪）'
      },
      {
        title: 'VPC 网络架构',
        content: 'VPC（Virtual Private Cloud）是你在 AWS 中的虚拟数据中心：\\n\\n- 子网（Subnet）：按可用区划分\\n  - 公有子网：有 Internet Gateway，实例有公网 IP\\n  - 私有子网：无直接公网访问，通过 NAT Gateway 出站\\n- 路由表（Route Table）：控制子网的流量走向\\n- 安全组（Security Group）：实例级防火墙，有状态（允许入站自动允许出站响应）\\n- NACL（Network ACL）：子网级防火墙，无状态\\n\\n典型三层架构：\\nALB（公有子网）→ ECS/EC2（私有子网）→ RDS（私有子网，不同安全组）'
      },
      {
        title: 'IAM 权限最佳实践',
        content: '1. 最小权限原则：不使用 AdministratorAccess，用具体 Action + Resource 限制\\n2. 角色优于密钥：EC2/ECS/Lambda 使用 IAM Role，不在代码中硬编码 Access Key\\n3. 启用 MFA：所有 IAM 用户启用多因素认证\\n4. 使用 Policy 而非内联权限：便于复用和审计\\n5. 定期轮换：Access Key 定期轮换，使用 AWS Config 检测不合规\\n6. 跨账户访问：使用 IAM Role AssumeRole，不共享凭证\\n\\n示例最小权限策略：\\n{\\n  "Effect": "Allow",\\n  "Action": ["s3:GetObject", "s3:PutObject"],\\n  "Resource": "arn:aws:s3:::my-bucket/uploads/*"\\n}'
      }
    ],
    diagnosis: [
      {
        symptom: 'EC2 实例无法通过 SSH 连接',
        cause: '安全组未开放 22 端口入站；实例没有公网 IP；路由表没有到 Internet Gateway 的路径；NACL 阻止了入站或出站',
        fix: '检查安全组入站规则添加 SSH 22 端口；确认子网路由表有 0.0.0.0/0 → igw-xxx；确认实例有 Public IP 或通过 Bastion Host 访问；使用 EC2 Instance Connect 作为备用方案'
      },
      {
        symptom: 'S3 存储桶被公开访问，安全审计告警',
        cause: '存储桶策略或 ACL 允许了 public 访问；Block Public Access 设置未启用',
        fix: '启用 S3 Block Public Access（账户级和桶级）；审查 Bucket Policy 移除 Principal: "*" 的 Allow 规则；使用 CloudTrail 监控 S3 访问事件'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 AWS CLI 查看你的 VPC 及子网配置',
        hint: 'aws ec2 describe-vpcs 和 describe-subnets',
        answer: "aws ec2 describe-vpcs --query 'Vpcs[].[VpcId,CidrBlock,IsDefault]' --output table; aws ec2 describe-subnets --query 'Subnets[].[SubnetId,AvailabilityZone,CidrBlock,MapPublicIpOnLaunch]' --output table"
      },
      {
        level: '进阶',
        task: '设计一个高可用的 Web 应用 AWS 架构（至少 2 个可用区）',
        hint: '考虑 ALB、Auto Scaling Group、多 AZ 的 RDS',
        answer: "Application Load Balancer（跨 2 AZ 公有子网）→ Auto Scaling Group（EC2 分布在 2 AZ 私有子网）→ RDS Multi-AZ（主从跨 AZ 自动故障转移）。S3 + CloudFront 分发静态资源。Route 53 做 DNS 和健康检查。所有数据层在私有子网，只通过 ALB 暴露 Web 端口"
      }
    ]
  },

  "ctor79Vd7EXDMdrLyUcu_": {
    mentalModel: 'Azure 是微软的云平台——与 Windows 生态（AD、Office 365、.NET）深度集成，混合云能力强，适合已有微软技术栈的企业平滑上云',
    sections: [
      {
        title: 'Azure 核心服务与 AWS 对照',
        content: '计算：Virtual Machines（≈EC2）、Azure Functions（≈Lambda）、AKS（≈EKS）、App Service（≈Elastic Beanstalk）\\n存储：Blob Storage（≈S3）、Managed Disks（≈EBS）、Azure Files（≈EFS）\\n网络：Virtual Network（≈VPC）、Azure DNS（≈Route 53）、Azure CDN（≈CloudFront）、Application Gateway（≈ALB）\\n数据库：Azure SQL（≈RDS SQL Server）、Cosmos DB（≈DynamoDB 多模型）、Azure Cache for Redis（≈ElastiCache）\\n安全：Microsoft Entra ID（≈IAM）、Key Vault（≈KMS/Secrets Manager）、Azure Firewall\\nDevOps：Azure DevOps（CI/CD）、Azure Pipelines、Bicep/ARM Templates（≈CloudFormation）\\n监控：Azure Monitor（≈CloudWatch）、Application Insights（≈X-Ray）'
      },
      {
        title: 'Azure 独特优势',
        content: '1. 混合云 Azure Arc：统一管理本地、多云的 Kubernetes 集群和 SQL Server\\n2. Entra ID（原 Azure AD）：企业级身份管理，与 Office 365 共享用户目录，支持 SSO、Conditional Access\\n3. Azure DevOps：完整的 DevOps 平台（Boards/Repos/Pipelines/Artifacts），可独立于 Azure 使用\\n4. .NET 生态：App Service 对 ASP.NET 应用有最佳支持和性能优化\\n5. Azure Front Door：全球任播网络 + WAF + 负载均衡一体化\\n6. 合规覆盖：拥有最多的行业合规认证（FedRAMP、HIPAA、等保三级等）'
      },
      {
        title: 'Azure CLI 常用操作',
        content: 'az login                              # 登录\\naz group create -n myRG -l eastus      # 创建资源组\\naz vm create -g myRG -n myVM --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys\\naz webapp create -g myRG -p myPlan -n myapp --runtime "PYTHON:3.11"\\naz aks create -g myRG -n myAKS --node-count 3 --enable-managed-identity\\naz storage blob upload -f app.tar.gz -c releases -n app-v1.tar.gz\\naz monitor metrics list --resource myVM -n "Percentage CPU" --interval 5m\\naz group delete -n myRG --yes --no-wait  # 删除整个资源组（含所有资源）'
      }
    ],
    diagnosis: [
      {
        symptom: 'Azure VM 无法通过 SSH/RDP 连接',
        cause: 'NSG（网络安全组）未放通端口；没有分配公网 IP；Azure Firewall 或路由规则阻止了流量',
        fix: '检查 NSG 入站安全规则添加 SSH(22)/RDP(3389) 放通；确认 VM 关联了 Public IP；使用 Azure Bastion 作为安全的远程访问方案（无需暴露公网 IP）'
      },
      {
        symptom: 'Azure 资源部署报 QuotaExceeded 错误',
        cause: '区域的 vCPU 配额或特定 VM 系列配额不足，新订阅默认配额较低',
        fix: '在 Azure Portal → 订阅 → 用量+配额 中提交配额增加请求；或使用 az quota 命令申请；选择其他 VM 系列或区域部署'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Azure CLI 列出当前订阅中所有资源组及其所在区域',
        hint: 'az group list 配合 --query 过滤',
        answer: "az group list --query '[].[name,location]' --output table"
      },
      {
        level: '进阶',
        task: '对比 Azure AKS 和 AWS EKS 的主要差异',
        hint: '考虑控制平面费用、集成度、网络方案',
        answer: "AKS 控制平面免费（EKS 收 $0.10/hr）；AKS 内置 Azure CNI 或 kubenet 网络（EKS 用 VPC CNI）；AKS 与 Azure AD/ACR 深度集成（EKS 与 IAM/ECR 集成）；AKS 支持虚拟节点（ACI burst）；EKS 有更丰富的附加组件生态（Istio、Cert-Manager 等 AWS 托管 add-on）"
      }
    ]
  },

  "zJy9dOynWgLTDKI1iBluG": {
    mentalModel: 'SMTP 是电子邮件的邮局协议——写信（邮件客户端）→ 投递到本地邮局（发件 SMTP 服务器）→ 邮局间转运（MTA 到 MTA）→ 到达目标邮局 → 收信人取信（IMAP/POP3）',
    handsOn: [
      {
        title: '用 telnet 手动发送一封邮件',
        cmd: 'telnet smtp.example.com 25',
        output: '220 smtp.example.com ESMTP Postfix\\nHELO myhost\\n250 smtp.example.com\\nMAIL FROM:<sender@example.com>\\n250 2.1.0 Ok\\nRCPT TO:<user@target.com>\\n250 2.1.5 Ok\\nDATA\\n354 End data with <CR><LF>.<CR><LF>\\nSubject: Test\\n\\nHello from SMTP\\n.\\n250 2.0.0 Ok: queued\\nQUIT',
        explain: 'SMTP 是纯文本协议：HELO 打招呼→MAIL FROM 指定发件人→RCPT TO 指定收件人→DATA 发送邮件内容→以单独的 . 结束。整个过程可读，这就是为什么需要 SPF/DKIM/DMARC 来防伪造。'
      },
      {
        title: '用 swaks 工具测试 SMTP 发送',
        cmd: 'swaks --to user@example.com --from sender@mydomain.com --server smtp.mydomain.com:587 --auth LOGIN --auth-user sender --auth-pass secret --header "Subject: DevOps Alert" --body "Disk usage > 90%"',
        output: '=== Trying smtp.mydomain.com:587\\n=== Connected to smtp.mydomain.com.\\n<- 220 smtp.mydomain.com ESMTP\\n-> EHLO myhost\\n<- 250-AUTH LOGIN PLAIN\\n-> AUTH LOGIN\\n...\\n<- 250 2.0.0 Ok: queued as ABC123\\n=== Connection closed.',
        explain: 'swaks 是 SMTP 调试利器，可以精确控制每个 SMTP 阶段。587 端口是 MSA（邮件提交代理），需要认证。swaks 常用于测试邮件服务器配置和排查投递问题。'
      },
      {
        title: '查看邮件头和路由路径',
        cmd: 'swaks --to user@gmail.com --from test@mydomain.com --server smtp.mydomain.com:587 -h-Subject "Header Test" --add-header "X-Mailer: swaks" 2>&1 | head -20',
        output: '-> EHLO myhost\\n-> MAIL FROM:<test@mydomain.com>\\n-> RCPT TO:<user@gmail.com>\\n-> DATA\\n-> From: test@mydomain.com\\n-> To: user@gmail.com\\n-> Subject: Header Test\\n-> X-Mailer: swaks\\n-> Date: Wed, 28 May 2025 10:00:00 +0800\\n-> .',
        explain: '邮件头记录了完整的路由路径（Received 头链）、发件人验证结果（SPF/DKIM/DMARC）和反垃圾邮件评分。分析邮件头是排查邮件被拒/进垃圾箱的关键手段。'
      }
    ],
    diagnosis: [
      {
        symptom: '发送的邮件总是进入收件人的垃圾箱',
        cause: '缺少 SPF/DKIM/DMARC 记录；发件 IP 信誉差（在黑名单中）；邮件内容触发垃圾邮件规则（过多链接/大写/感叹号）',
        fix: '配置 SPF TXT 记录授权发件 IP；设置 DKIM 签名；添加 DMARC 策略；使用 mxtoolbox.com 检查 IP 信誉；避免垃圾邮件关键词'
      },
      {
        symptom: 'SMTP 连接超时或被拒绝 relay',
        cause: '目标服务器不开放 25 端口（ISP 封锁）；服务器未配置为允许 relay（中继）；发件人域名未通过 SPF 验证',
        fix: '改用 587（STARTTLS）或 465（SMTPS）端口；确认 Postfix 的 mynetworks 包含你的 IP；检查发件人 SPF 记录是否正确配置'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查询一个域名的 MX 记录，确认其邮件服务器地址',
        hint: 'dig 命令可以查询各种 DNS 记录类型',
        answer: "dig MX gmail.com +short 返回类似 '5 alt1.gmail-smtp-in.l.google.com.' 优先级和服务器地址的列表"
      },
      {
        level: '进阶',
        task: '解释 STARTTLS 和 SMTPS 的区别，并演示检测服务器是否支持 STARTTLS',
        hint: 'STARTTLS 在明文连接上升级为加密；SMTPS 直接建立 TLS 连接',
        answer: "swaks --to test@example.com --server smtp.example.com:25 --tls-on-connect 测试 SMTPS(465)；swaks --server smtp.example.com:587 -tls 测试 STARTTLS(587)。STARTTLS 先用明文 EHLO 再升级加密，SMTPS 从一开始就是 TLS"
      }
    ]
  },

  "5vUKHuItQfkarp7LtACvX": {
    mentalModel: 'DMARC 是邮件世界的身份核验制度——它告诉收件方：如果 SPF 或 DKIM 验证失败该怎么处理（放行/隔离/拒绝），并提供反馈报告让发件人知道谁在冒充自己',
    sections: [
      {
        title: 'DMARC 工作原理',
        content: 'DMARC 建立在 SPF 和 DKIM 之上：\\n\\n1. SPF 验证：收件方检查发件 IP 是否在域名 SPF 记录授权的列表中\\n2. DKIM 验证：收件方用公钥验证邮件签名是否有效（内容未被篡改）\\n3. DMARC 对齐检查：SPF/DKIM 中的域名必须与 From 头的域名一致（对齐）\\n4. DMARC 策略执行：如果对齐失败，按策略处理\\n\\nDNS 记录示例：\\n_dmarc.example.com TXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com; pct=100; adkim=s; aspf=s"\\n\\n关键字段：\\n- p=none/quarantine/reject：策略（无操作/隔离/拒绝）\\n- rua=mailto:xxx：聚合报告接收邮箱\\n- pct=100：应用策略的邮件百分比（灰度部署用）\\n- adkim/aspf=s/r：严格/宽松对齐模式'
      },
      {
        title: 'DMARC 部署三阶段',
        content: '阶段一：监控（p=none）\\n- 发布 p=none 策略，收集 2-4 周的聚合报告\\n- 分析 RUA 报告，发现所有合法发件源（CRM 系统、营销平台、通知服务）\\n- 工具：dmarcian、Postmark DMARC Reports、PowerDMARC\\n\\n阶段二：隔离（p=quarantine pct=10）\\n- 逐步提升 pct：10→25→50→100\\n- 验证失败的邮件进垃圾箱而非直接拒绝\\n- 持续监控报告确保不误拦合法邮件\\n\\n阶段三：拒绝（p=reject pct=100）\\n- 完全拒绝未通过 DMARC 验证的邮件\\n- 最大程度防止域名被伪造用于钓鱼\\n- 定期审查报告，及时处理新增发件源'
      },
      {
        title: 'SPF + DKIM + DMARC 完整配置',
        content: '1. SPF 记录（DNS TXT）：\\nexample.com TXT "v=spf1 include:_spf.google.com include:mail.zendesk.com ip4:203.0.113.0/24 -all"\\n\\n2. DKIM 记录（DNS TXT）：\\nselector1._domainkey.example.com TXT "v=DKIM1; k=rsa; p=MIIBIjANBg..."\\n（由邮件服务器生成密钥对，公钥发布到 DNS）\\n\\n3. DMARC 记录（DNS TXT）：\\n_dmarc.example.com TXT "v=DMARC1; p=reject; rua=mailto:dmarc-rua@example.com; ruf=mailto:dmarc-forensic@example.com; pct=100; fo=1"\\n\\n验证工具：\\n- mxtoolbox.com/dmarc.aspx 检查记录语法\\n- mail-tester.com 发送测试邮件获取评分\\n- Google Admin Toolbox Messageheader 分析邮件头'
      }
    ],
    diagnosis: [
      {
        symptom: '合法邮件被收件方拒绝（550 DMARC policy violation）',
        cause: '邮件通过了第三方服务（如 Mailchimp、CRM）发送，但这些 IP 未包含在 SPF 记录中，DKIM 签名也未配置',
        fix: '将所有第三方发件服务加入 SPF include；为第三方服务配置 DKIM 签名（大多数 SaaS 提供 DKIM CNAME 记录）；确保 From 域名与 SPF/DKIM 对齐'
      },
      {
        symptom: 'DMARC 聚合报告显示大量验证失败但找不到来源',
        cause: 'SPF 记录中 include 了过宽的域名（如 include:spf.google.com 允许所有 Google Workspace 用户代发）；或存在未知的转发链破坏了 SPF/DKIM',
        fix: '收紧 SPF 记录到具体的发件源；使用 DMARC 报告工具（如 dmarcian）分析失败来源 IP；检查邮件转发场景（邮件列表、自动转发），考虑使用 ARC 协议保持验证链'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查询 google.com 的 DMARC、SPF 和 DKIM 记录',
        hint: '使用 dig 查询 _dmarc 子域名的 TXT 记录',
        answer: "dig TXT _dmarc.google.com +short 查看 DMARC 策略；dig TXT google.com +short | grep spf 查看 SPF；dig TXT google._domainkey.google.com +short 查看 DKIM（selector 因域而异）"
      },
      {
        level: '进阶',
        task: '为一个新域名设计完整的邮件认证方案（SPF + DKIM + DMARC），并解释每个配置选项的含义',
        hint: '考虑使用 Google Workspace 发邮件，Mailchimp 发营销邮件，自有机房发通知',
        answer: "SPF: v=spf1 include:_spf.google.com include:servers.mcsv.net ip4:203.0.113.0/24 -all（授权 Google、Mailchimp 和自有 IP，-all 严格拒绝其他）。DKIM: 为 Google 和 Mailchimp 分别配置 DKIM CNAME。DMARC: 先 v=DMARC1; p=none; rua=mailto:dmarc@example.com; pct=100 监控两周，确认所有合法来源后升级到 p=reject; pct=100"
      }
    ]
  },

  // ============================================================
  // DevOps Deep Learning — Batch 2b (nodes 53-70)
  // ============================================================

  "l8VAewSEXzoyqYFhoplJj": {
    mentalModel: 'Cloudflare 是网站的防弹玻璃+全球快递网络——既是 CDN 缓存加速访问，又是 WAF/DDoS 盾牌拦截恶意流量',
    handsOn: [
      {
        title: '通过 API 列出 Cloudflare 区域',
        cmd: 'curl -s -X GET "https://api.cloudflare.com/client/v4/zones" \\\n  -H "Authorization: Bearer $CF_API_TOKEN" \\\n  -H "Content-Type: application/json" | jq \'.result[] | {name, status, plan}\'',
        output: '{ "name": "example.com", "status": "active", "plan": { "name": "Free" } }',
        explain: '通过 Cloudflare REST API 可程序化管理所有区域。Bearer Token 在"我的个人资料 → API 令牌"创建，建议限定到特定区域和权限。'
      },
      {
        title: '启用/禁用安全级别',
        cmd: 'curl -s -X PATCH "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/settings/security_level" \\\n  -H "Authorization: Bearer $CF_API_TOKEN" \\\n  -d \'{"value":"medium"}\' | jq \'.result\'',
        output: '{ "id": "security_level", "value": "medium", "editable": true }',
        explain: 'security_level 控制 Cloudflare 的 IP 信誉检查阈值。medium 对大多数站点合适；高流量攻击时可临时调高到 "high" 或 "under_attack"。'
      },
      {
        title: '清除缓存',
        cmd: 'curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/purge_cache" \\\n  -H "Authorization: Bearer $CF_API_TOKEN" \\\n  -d \'{"purge_everything":true}\'',
        output: '{ "success": true, "errors": [], "result": { "id": "purge_cache" } }',
        explain: '部署新版本后需要清缓存。可选择 purge_everything 或按 URL/tag 精细清除。Cache-Tag 头配合按标签清除是大型站点的最佳实践。'
      },
      {
        title: '配置 WAF 自定义规则',
        cmd: 'curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rulesets/phases/http_request_firewall_custom/entrypoint/rules" \\\n  -H "Authorization: Bearer $CF_API_TOKEN" \\\n  -d \'{"expression":"(ip.src in {1.2.3.0/24})","action":"block","description":"Block known bad subnet"}\'',
        output: '{ "id": "rule-abc123", "expression": "(ip.src in {1.2.3.0/24})", "action": "block" }',
        explain: 'WAF 自定义规则使用 Cloudflare 的过滤表达式语法，可按 IP、路径、User-Agent、国家等维度拦截或质询流量。'
      }
    ],
    diagnosis: [
      {
        symptom: '源站 521 Web server is down 错误',
        cause: 'Cloudflare 无法连接源站：源服务器宕机、防火墙拦截 Cloudflare IP 段、或端口未开放',
        fix: '检查源站服务是否运行 (systemctl status nginx)；确保放行 Cloudflare IP 段 (https://www.cloudflare.com/ips)；确认端口 80/443 可达'
      },
      {
        symptom: 'SSL 证书 ERR_SSL_VERSION_OR_CIPHER_MISMATCH',
        cause: 'Cloudflare SSL/TLS 模式设置为 Flexible 但源站只监听 80，或 Full Strict 模式但源站用了自签证书',
        fix: '推荐 Full (Strict) 模式 + 在源站安装 Let\'s Encrypt 证书或 Cloudflare Origin CA 证书；用 cloudflared 隧道可彻底关闭源站公网端口'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Cloudflare API 获取你域名下所有 DNS 记录，并统计 A、CNAME、MX 各有多少条',
        hint: 'GET /client/v4/zones/{zone_id}/dns_records，用 jq group_by 统计',
        answer: 'curl -s "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records?per_page=100" -H "Authorization: Bearer $CF_API_TOKEN" | jq \'[.result[].type] | group_by(.) | map({type: .[0], count: length})\''
      },
      {
        level: '进阶',
        task: '配置 Cloudflare Tunnel (cloudflared) 将内网服务安全暴露到公网，源站无需开放任何入站端口',
        hint: 'cloudflared tunnel create + config.yml 指定 ingress 规则，然后 DNS 路由',
        answer: 'cloudflared tunnel create myapp → 编辑 ~/.cloudflared/config.yml 添加 ingress: [{hostname: app.example.com, service: http://localhost:3000}] → cloudflared tunnel route dns myapp app.example.com → systemctl enable cloudflared'
      }
    ]
  },

  "zYrOxFQkl3KSe67fh3smD": {
    mentalModel: 'Google Cloud (GCP) 是 Google 对外开放的基础设施超市——从虚拟机到 AI 模型，按用量付费，像用自来水和电一样消费算力',
    handsOn: [
      {
        title: '初始化 gcloud 并选择项目',
        cmd: 'gcloud init\ngcloud config set project my-devops-project\ngcloud config list',
        output: '[core]\nproject = my-devops-project\n\n[compute]\nregion = us-central1\nzone = us-central1-a',
        explain: 'gcloud 是 GCP 的主 CLI。init 完成 OAuth 认证；config set 设定默认项目和区域，后续命令无需每次指定。'
      },
      {
        title: '创建 GCE 虚拟机',
        cmd: 'gcloud compute instances create demo-vm \\\n  --zone=us-central1-a \\\n  --machine-type=e2-micro \\\n  --image-family=debian-12 \\\n  --image-project=debian-cloud \\\n  --tags=http-server',
        output: 'Created [https://www.googleapis.com/.../instances/demo-vm].\nNAME     ZONE           MACHINE_TYPE  STATUS\ndemo-vm  us-central1-a  e2-micro      RUNNING',
        explain: 'e2-micro 属于免费套餐范围。--tags=http-server 自动匹配防火墙规则允许 80 端口入站。生产环境应使用 --subnet 指定 VPC 子网。'
      },
      {
        title: '使用 GCS 存储桶',
        cmd: 'gsutil mb -l us-east1 gs://my-backup-bucket-2024\ngsutil -m cp -r ./data gs://my-backup-bucket-2024/\ngsutil du -sh gs://my-backup-bucket-2024/',
        output: 'Creating gs://my-backup-bucket-2024/...\nCopying file://./data/file1 [Content-Type=text/plain]...\nOperation completed over 42 objects/1.3 GiB.',
        explain: 'gsutil 是 GCS 的命令行工具。-m 启用多线程加速上传。GCS 是对象存储，类似 AWS S3，适合备份、日志归档、静态资源托管。'
      },
      {
        title: '部署到 Cloud Run',
        cmd: 'gcloud run deploy my-api \\\n  --source=. \\\n  --region=us-central1 \\\n  --allow-unauthenticated \\\n  --memory=512Mi \\\n  --port=8080',
        output: 'Deploying... Done.\nService [my-api] revision [my-api-00001] has been deployed and is serving 100% of traffic.\nService URL: https://my-api-abc123-uc.a.run.app',
        explain: 'Cloud Run 是容器化的 Serverless 平台——给一个 Dockerfile 即可部署，自动缩放至零。--source 触发 Cloud Build 自动构建镜像。'
      }
    ],
    diagnosis: [
      {
        symptom: 'gcloud 报 PERMISSION_DENIED: The caller does not have permission',
        cause: '当前 gcloud 认证的服务账号或用户缺少目标资源所需的 IAM 角色',
        fix: '用 gcloud auth list 确认活跃账号；在 IAM 页面授予对应角色（如 Editor、Compute Admin）；服务账号用 gcloud auth activate-service-account --key-file=key.json'
      },
      {
        symptom: 'Cloud Run 部署后请求返回 500，日志显示 container failed to start',
        cause: '容器未在指定 PORT 环境变量上监听，或启动命令有误',
        fix: 'Cloud Run 注入 PORT=8080 环境变量，应用必须监听该端口。检查 Dockerfile 的 CMD 和 EXPOSE，用 gcloud run services describe 查看容器端口配置',
        }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 gcloud 创建一个 GCS 存储桶，上传文件，然后设置生命周期策略让对象 30 天后自动删除',
        hint: 'gsutil mb + cp + lifecycle 命令配合 JSON 配置',
        answer: 'gsutil mb gs://temp-bucket-$$ → echo \'{"lifecycle":{"rule":[{"action":{"type":"Delete"},"condition":{"age":30}}]}}\' > lifecycle.json → gsutil lifecycle set lifecycle.json gs://temp-bucket-$$ → gsutil cp test.txt gs://temp-bucket-$$'
      },
      {
        level: '进阶',
        task: '配置 GCE 实例的自动缩放：创建实例模板 + 托管实例组 + 自动缩放策略（CPU > 60% 扩容）',
        hint: 'gcloud compute instance-templates create + instance-groups managed create + autoscaling policies create',
        answer: 'gcloud compute instance-templates create web-tpl --machine-type=e2-small --image-family=debian-12 → gcloud compute instance-groups managed create web-mig --template=web-tpl --size=2 --zone=us-central1-a → gcloud compute instance-groups managed set-autoscaling web-mig --max-num-replicas=10 --target-cpu-utilization=0.6 --zone=us-central1-a'
      }
    ]
  },

  "WMuXqa4b5gyRuYAQKQJRj": {
    mentalModel: 'IMAP 是邮箱的远程文件夹——你在客户端看到的邮件结构是服务器上邮件的实时映射，操作（读/删/移）都同步回服务器，像操作云盘里的文件',
    sections: [
      {
        title: 'IMAP 协议核心概念',
        content: 'IMAP (Internet Message Access Protocol, RFC 3501) 运行在端口 143 (明文/STARTTLS) 或 993 (隐式 TLS)。\n\n核心特性：\n- 服务器端存储：邮件始终保存在服务器，客户端只缓存\n- 文件夹 (Mailbox)：支持 INBOX/Sent/Drafts/Trash 等多文件夹\n- UID 系统：每封邮件有唯一 UID，跨会话稳定引用\n- 标志 (Flags)：\\Seen \\Answered \\Flagged \\Deleted 等状态标记\n- IDLE 命令：客户端可保持长连接实时接收新邮件推送\n\n与 POP3 的区别：\nPOP3 下载后通常从服务器删除，不支持多设备同步；IMAP 是双向同步协议。'
      },
      {
        title: 'IMAP 会话流程',
        content: '典型 IMAP 会话（使用 openssl 手动连接）：\n\nS: * OK IMAP4rev1 Server Ready\nC: a001 LOGIN user@example.com password\nS: a001 OK LOGIN completed\nC: a002 SELECT INBOX\nS: * 15 EXISTS\nS: * 2 RECENT\nS: a002 OK [READ-WRITE] SELECT completed\nC: a003 FETCH 1:* (FLAGS SUBJECT DATE)\nS: * 1 FETCH (FLAGS (\\Seen) SUBJECT "Hello" DATE "Mon, 1 Jan 2024...")\nS: a003 OK FETCH completed\nC: a004 FETCH 1 BODY[TEXT]\nS: ...邮件正文...\nC: a005 LOGOUT\nS: * BYE\nS: a005 OK LOGOUT completed\n\n注意：每个命令前带标签 (a001, a002...)，服务器响应带相同标签表示该命令完成。'
      },
      {
        title: '常用 IMAP 客户端工具',
        content: '命令行工具：\n- curl：curl -s --url "imaps://imap.gmail.com:993/INBOX" --user "user:pass"\n- mbsync (isync)：双向同步 IMAP 到本地 Maildir\n- offlineimap：Python 实现的 IMAP 同步工具\n- neomutt：终端邮件客户端，原生支持 IMAP\n\n诊断工具：\n- openssl s_client -connect imap.example.com:993\n- telnet imap.example.com 143 (配合 STARTTLS)\n\nGUI 客户端：Thunderbird, Outlook, Apple Mail 均默认使用 IMAP。'
      }
    ],
    diagnosis: [
      {
        symptom: 'IMAP 连接超时或报 Connection refused',
        cause: '服务器未开启 IMAP 服务，或防火墙未开放 143/993 端口，或 ISP 封锁出站',
        fix: '用 nmap -p 143,993 imap.example.com 检查端口；用 openssl s_client -connect imap.example.com:993 测试 TLS；检查服务器 dovecot/cyrus 服务状态'
      },
      {
        symptom: '登录成功但看不到邮件 (SELECT INBOX 返回 0 EXISTS)',
        cause: 'IMAP 命名空间配置错误，邮件存储在其他文件夹；或邮箱索引损坏',
        fix: '用 LIST "" "*" 命令枚举所有文件夹；检查 dovecot 的 mail_location 配置；重建索引 doveadm index -u user INBOX'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 openssl s_client 手动连接 IMAP 服务器，登录后列出所有文件夹',
        hint: 'openssl s_client -connect + LIST "" "*" 命令',
        answer: 'openssl s_client -connect imap.example.com:993 → a001 LOGIN user@example.com mypassword → a002 LIST "" "*" → a003 LOGOUT'
      },
      {
        level: '进阶',
        task: '配置 mbsync 将远程 IMAP 邮箱双向同步到本地 Maildir，并设置定时同步',
        hint: '~/.mbsyncrc 配置文件 + mbsync 命令 + crontab',
        answer: '在 ~/.mbsyncrc 中定义 IMAPAccount (host/user/pass) + IMAPStore + MaildirStore + Channel (Patterns *) → mbsync -a 全量同步 → crontab: */10 * * * * mbsync -a 每 10 分钟同步'
      }
    ]
  },

  "ewcJfnDFKXN8I5TLpXEaB": {
    mentalModel: 'SPF 是域名的"授权发件人名单"——在 DNS 中声明哪些 IP 有权以你的域名发邮件，收件方据此判断邮件是否伪造，像公司前台的访客白名单',
    sections: [
      {
        title: 'SPF 记录结构',
        content: 'SPF (Sender Policy Framework, RFC 7208) 通过 DNS TXT 记录声明合法发件源。\n\n典型记录：v=spf1 include:_spf.google.com ip4:192.168.1.0/24 ~all\n\n字段解析：\n- v=spf1：版本号，必须是开头\n- include:：引用另一个域名的 SPF 记录（如 Google Workspace）\n- ip4:/ip6:：直接声明 IP 地址或网段\n- a / mx：引用域名的 A 记录或 MX 记录\n- exists:：查询指定域名是否存在\n- ~all：软失败（softfail）——不匹配时标记但不拒绝\n- -all：硬失败（hardfail）——不匹配时建议拒绝\n- +all：允许所有（危险！等于没设 SPF）\n\n查找限制：SPF 最多 10 次 DNS 查询，超出则 PermError。过多 include 需要扁平化工具。'
      },
      {
        title: 'SPF 验证流程',
        content: '收件方 SPF 验证步骤：\n\n1. 收到来自 203.0.113.5 的邮件，MAIL FROM 声称 user@example.com\n2. 查询 example.com 的 TXT 记录，找到 SPF 记录\n3. 检查 203.0.113.5 是否匹配任一机制\n4. 匹配到 ip4:203.0.113.0/24 → 结果为 pass\n5. 不匹配任何机制 → 使用 all 机制的结果（~all = softfail, -all = fail）\n\n验证结果处理：\n- pass：发件人合法，正常投递\n- fail：可拒绝或放入垃圾箱\n- softfail：标记但通常不拒绝\n- neutral：不表态\n- none：域名未发布 SPF\n- permerror / temperror：配置错误或 DNS 临时故障'
      },
      {
        title: 'SPF 与 DKIM/DMARC 协作',
        content: '三大邮件认证协议形成防线：\n\nSPF → 验证"谁有权发"（MAIL FROM 域名 + 发件 IP）\nDKIM → 验证"内容没被篡改"（数字签名）\nDMARC → 定义"验证失败怎么办"（策略 + 报告）\n\nSPF 的局限：\n- 只验证 MAIL FROM，不验证 From: 头（用户看到的发件人）\n- 邮件转发会破坏 SPF（因为转发服务器的 IP 不在原始 SPF 中）\n- 因此 DMARC 依赖 DKIM 作为补充\n\n完整配置示例：\nTXT "v=spf1 include:_spf.google.com include:mail.zendesk.com -all"\nTXT "v=DKIM1; k=rsa; p=MIGfMA0G..."\nTXT "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"'
      }
    ],
    diagnosis: [
      {
        symptom: '发出的邮件被对方标为垃圾邮件，SPF 检查结果为 softfail',
        cause: '发件服务器 IP 不在域名 SPF 记录中，常见于新增了邮件发送服务但未更新 SPF',
        fix: '用 dig TXT example.com 查看当前 SPF；用 whatismyipaddress 确认发件 IP；添加对应 ip4: 或 include: 机制；注意 10 次 DNS 查询限制'
      },
      {
        symptom: 'SPF PermError: Too many DNS lookups',
        cause: 'SPF 记录的 include 链展开后超过 10 次 DNS 查询限制',
        fix: '使用 SPF 扁平化工具（如 spf-flattener）将 include 展开为 ip4/ip6 记录；移除不再使用的 include；或将多个域名合并为单一子域名的 SPF 记录'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查询任意域名的 SPF 记录并解读含义',
        hint: 'dig +short TXT 或 nslookup -type=TXT',
        answer: 'dig +short TXT gmail.com → "v=spf1 redirect=_spf.google.com" → dig +short TXT _spf.google.com → 展开查看最终的 ip4 网段列表'
      },
      {
        level: '进阶',
        task: '为使用 Google Workspace + Mailchimp + 自建 SMTP 的域名编写完整 SPF 记录，并验证 10 次查询限制',
        hint: '合并所有发件源的 include/ip4，用 spf-tools 或手动计算 lookup 次数',
        answer: 'v=spf1 include:_spf.google.com include:servers.mcsv.net ip4:203.0.113.50 -all（Google 2 次 + Mailchimp 1 次 + 直接 ip4 0 次 + all = 共约 4 次 DNS 查询，在限制内）'
      }
    ]
  },

  "mlrlf2McMI7IBhyEdq0Nf": {
    mentalModel: 'Azure Functions 是微软云的"按调用付费的代码执行器"——写一个函数，绑定触发器（HTTP/定时器/消息队列），Azure 自动分配算力，闲时零费用',
    handsOn: [
      {
        title: '使用 Azure CLI 创建 Function App',
        cmd: 'az functionapp create \\\n  --resource-group myRG \\\n  --consumption-plan-location eastus \\\n  --runtime node \\\n  --runtime-version 20 \\\n  --functions-version 4 \\\n  --name my-func-app-2024 \\\n  --storage-account mystorageacct',
        output: '"name": "my-func-app-2024",\n"state": "Running",\n"kind": "functionapp,linux",\n"siteConfig": { "linuxFxVersion": "NODE|20" }',
        explain: 'Consumption Plan 按执行次数和时长计费，闲时缩放到零。每个 Function App 需要一个 Storage Account 存储状态和日志。'
      },
      {
        title: '创建 HTTP 触发器函数',
        cmd: 'func init MyFuncProject --javascript\ncd MyFuncProject\nfunc new --template "HTTP trigger" --name HttpHello',
        output: 'Writing /home/user/MyFuncProject/HttpHello/index.js\nWriting /home/user/MyFuncProject/HttpHello/function.json\nThe function "HttpHello" was created.',
        explain: 'func CLI 生成模板代码。function.json 定义触发器类型和绑定；index.js 是函数逻辑。HTTP trigger 默认生成 GET/POST 路由。'
      },
      {
        title: '本地运行和测试',
        cmd: 'func start\n\n# 另一个终端\ncurl http://localhost:7071/api/HttpHello?name=DevOps',
        output: 'Worker process started and initialized.\nHost lock lease acquired.\nHosting environment: Production\n\nHello, DevOps. This HTTP triggered function executed successfully.',
        explain: 'func start 启动本地模拟器 (Core Tools)，完整模拟 Azure Functions Runtime。支持断点调试：VS Code 中 Attach to Node Functions。'
      },
      {
        title: '部署到 Azure',
        cmd: 'func azure functionapp publish my-func-app-2024 --javascript',
        output: 'Getting site publishing info...\nPreparing archive...\nUploading 3.2 MB...\nUpload completed successfully.\nDeployment completed successfully.\nFunctions in my-func-app-2024:\n    HttpHello - [httpTrigger]\n        Invoke url: https://my-func-app-2024.azurewebsites.net/api/httphello',
        explain: 'publish 命令打包上传并触发远程构建。--publish-native-deps 可在 Linux 上编译原生依赖。部署后通过 HTTPS URL 直接调用。'
      }
    ],
    diagnosis: [
      {
        symptom: '函数执行超时（Consumption Plan 默认 5 分钟限制）',
        cause: 'Consumption Plan 函数最大执行时长 5 分钟（可通过 host.json 调到 10 分钟），长任务会被强制终止',
        fix: '对长任务使用 Durable Functions 编排模式，或切换到 Premium/App Service Plan（无时长限制）；将长任务拆分为多个短函数通过队列串联'
      },
      {
        symptom: '部署后函数找不到，portal 显示 0 functions',
        cause: 'function.json 配置错误或文件未正确上传；Node.js 项目的 node_modules 未包含在部署包中',
        fix: '检查 function.json 的 scriptFile 指向正确文件；使用 --build remote 让 Azure 端执行 npm install；确认 WEBSITE_RUN_FROM_PACKAGE=1 时 zip 包包含完整目录结构'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 Azure Function，接收 HTTP POST JSON body，返回处理后的结果',
        hint: 'func new 选 HTTP trigger，修改 index.js 中 context.req.body 处理逻辑',
        answer: 'module.exports = async function(context, req) { const { name, age } = req.body; if (!name) { context.res = { status: 400, content: "name required" }; return; } context.res = { content: { greeting: `Hello ${name}, you are ${age}`, timestamp: new Date().toISOString() } }; }'
      },
      {
        level: '进阶',
        task: '配置 Timer Trigger 函数每 5 分钟检查 Azure Storage Queue，处理消息并写入 Cosmos DB',
        hint: 'function.json 中用 timerTrigger + schedule: "0 */5 * * * *"，output binding 指向 Cosmos DB',
        answer: 'function.json bindings: [{type:"timerTrigger",schedule:"0 */5 * * * *"},{type:"cosmosDB",direction:"out",databaseName:"mydb",collectionName:"logs",connectionStringSetting:"COSMOS_CONN"}] → index.js 中 context.bindings.outputDocument = {id, data, processedAt}'
      }
    ]
  },

  "-h-kNVDNzZYnQAR_4lfXc": {
    mentalModel: 'DigitalOcean 是开发者的"精品小酒店"——相比 AWS/Azure 的复杂性，DO 提供简洁直观的云服务，Droplet (虚拟机) 5 分钟上线，定价透明，适合个人项目和小团队',
    handsOn: [
      {
        title: '使用 doctl CLI 创建 Droplet',
        cmd: 'doctl compute droplet create my-server \\\n  --region nyc3 \\\n  --size s-1vcpu-1gb \\\n  --image ubuntu-22-04-x64 \\\n  --ssh-keys $(doctl compute ssh-key list --no-header --format ID | head -1) \\\n  --wait',
        output: 'ID          Name        Public IPv4     Private IPv4    Memory    VCPUs    Status\n398765432   my-server   143.198.1.2     10.132.0.2      1024      1        active',
        explain: 'doctl 是 DO 的官方 CLI。--wait 阻塞直到 Droplet 激活。SSH key 需预先上传到 DO 账户。'
      },
      {
        title: '配置防火墙规则',
        cmd: 'doctl compute firewall create \\\n  --name web-fw \\\n  --inbound-rules "protocol:tcp,ports:22,addresses:0.0.0.0/0" \\\n  --inbound-rules "protocol:tcp,ports:80,addresses:0.0.0.0/0" \\\n  --inbound-rules "protocol:tcp,ports:443,addresses:0.0.0.0/0"\n\ndoctl compute firewall add-droplets $FW_ID --droplet-ids $DROPLET_ID',
        output: 'ID                                      Name     Status    Inbound Rules\na1b2c3d4-...                            web-fw   succeeded 3 rules',
        explain: 'DO Cloud Firewall 在网络层过滤入站流量，免费无限制。建议只开 SSH + 必要端口。'
      },
      {
        title: '创建并挂载块存储卷',
        cmd: 'doctl compute volume create data-vol \\\n  --region nyc3 \\\n  --size 100 \\\n  --format id,name,size\n\ndoctl compute volume-action attach $VOL_ID $DROPLET_ID\n\n# SSH into droplet\nssh root@143.198.1.2 "mkfs.ext4 /dev/disk/by-id/scsi-0DO_Volume_data-vol && mkdir -p /data && mount /dev/disk/by-id/scsi-0DO_Volume_data-vol /data"',
        output: 'ID                    Name       Size\nvol-abc123...         data-vol   100 GiB',
        explain: '块存储卷独立于 Droplet 生命周期，可热插拔。适合数据库存储等需要持久化的场景。最大 16TB。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Droplet 无法 SSH 连接：Connection refused 或 Permission denied',
        cause: 'SSH key 未添加到 Droplet、root 密码登录被禁用、或防火墙未放行 22 端口',
        fix: '在 DO 面板通过 Console Access 登录；检查 /etc/ssh/sshd_config 中 PubkeyAuthentication yes；确认防火墙规则包含端口 22；重新添加 SSH key 并重建 Droplet'
      },
      {
        symptom: 'Droplet 磁盘空间满了，但 DO 面板显示卷还有空间',
        cause: '挂载的 Volume 未使用或被 Droplet 自身的 25GB 系统盘占满',
        fix: 'df -h 确认哪个挂载点满了；如果是系统盘满了，清理日志 (journalctl --vacuum-size=100M) + Docker (docker system prune)；数据应迁移到 Volume 上'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 doctl 创建一个 Droplet，安装 Nginx，并通过防火墙只开放 80/443 端口',
        hint: 'droplet create + ssh + apt install nginx + firewall create + add-droplets',
        answer: 'doctl compute droplet create web --image ubuntu-22-04-x64 --size s-1vcpu-1gb --region nyc3 --ssh-keys $KEY_ID --wait → ssh root@$IP "apt update && apt install -y nginx && systemctl enable nginx" → doctl compute firewall create --name web-fw --inbound-rules "protocol:tcp,ports:22;80;443,addresses:0.0.0.0/0" → doctl compute firewall add-droplets $FW_ID --droplet-ids $DROPLET_ID'
      },
      {
        level: '进阶',
        task: '使用 DigitalOcean App Platform 从 GitHub 仓库自动部署一个 Node.js 应用',
        hint: 'doctl apps create --spec app.yaml 或 DO 面板 GUI 连接 GitHub',
        answer: '创建 app.yaml: name: myapp; services: [{name: api, github: {repo: user/repo, branch: main}, run_command: npm start, environment_slug: node-js}] → doctl apps create --spec app.yaml → 每次 push 到 main 自动触发构建部署'
      }
    ]
  },

  "fzO6xVTBxliu24f3W5zaU": {
    mentalModel: 'POP3S 是邮箱的"一次性取件"——通过 SSL/TLS 加密连接下载邮件到本地，像从邮局取回信件，默认取走后服务器不再保留',
    sections: [
      {
        title: 'POP3S 协议详解',
        content: 'POP3S (POP3 over implicit SSL/TLS) 运行在端口 995。\n与 POP3 (端口 110) 的区别：POP3S 连接一开始就是加密的，类似 HTTPS 与 HTTP 的关系。\n\n协议流程：\n1. 客户端连接服务器 995 端口，建立 TLS 连接\n2. 服务器发送欢迎：+OK POP3 server ready\n3. 客户端发送 USER username\n4. 服务器：+OK\n5. 客户端发送 PASS password\n6. 服务器：+OK Logged in\n7. 客户端 STAT → 获取邮件数和总大小\n8. 客户端 LIST → 列出每封邮件编号和大小\n9. 客户端 RETR n → 下载第 n 封邮件全文\n10. 客户端 DELE n → 标记删除（QUIT 后生效）\n11. 客户端 QUIT → 提交删除并断开\n\n默认行为：下载后服务器删除邮件。部分服务器支持 UIDL 保留 + 客户端配置"不删除"。'
      },
      {
        title: 'POP3S 与 IMAPS 对比',
        content: '特性对比：\n\n| 特性         | POP3S (995)          | IMAPS (993)              |\n|-------------|---------------------|--------------------------|\n| 连接方式     | 隐式 TLS             | 隐式 TLS                  |\n| 存储位置     | 下载到本地           | 保留在服务器              |\n| 文件夹支持   | 只有 INBOX           | 支持多文件夹              |\n| 多设备       | 不适合（邮件分散）    | 完美支持                  |\n| 离线访问     | 好（本地有副本）      | 需缓存                   |\n| 带宽消耗     | 低（只下载一次）      | 较高（持续同步）           |\n| 适用场景     | 单设备+需归档         | 多设备+协作               |\n\n现代推荐：除非特殊需求（合规归档、带宽受限），一般用 IMAPS。'
      },
      {
        title: '诊断与调试 POP3S',
        content: '常用诊断命令：\n\n# 测试 TLS 连接\nopenssl s_client -connect pop.example.com:995\n\n# 手动 POP3 会话\n$ openssl s_client -connect pop.example.com:995 -quiet\n+OK Dovecot ready.\nUSER test@example.com\n+OK\nPASS mypassword\n+OK Logged in.\nSTAT\n+OK 5 12345\nLIST\n+OK 5 messages:\n1 2345\n2 3456\n...\nUIDL\n+OK\n1 abc123\n2 def456\n...\nRETR 1\n+OK 2345 octets\n...邮件内容...\nQUIT\n+OK Bye\n\n常见问题：\n- 证书不匹配 → 检查 SAN\n- 连接超时 → 995 端口可能被 ISP 封锁\n- 认证失败 → 可能需要 App Password (如 Gmail 开 2FA)'
      }
    ],
    diagnosis: [
      {
        symptom: 'POP3S 连接报 SSL handshake failure 或 certificate verify failed',
        cause: '服务器证书过期、自签证书、或证书 CN/SAN 不匹配主机名',
        fix: 'openssl s_client -connect pop.example.com:995 -showcerts 查看证书链；确认证书有效期和域名匹配；临时可用 -verify_return_error 跳过验证（不推荐生产）'
      },
      {
        symptom: '登录后 STAT 返回 0 封邮件，但邮箱确实有邮件',
        cause: '之前客户端下载时已标记删除并 QUIT；或服务器 POP3 配置了自动清理',
        fix: '通过 Webmail 或 IMAP 确认邮件是否仍在服务器；检查 POP3 客户端是否配置了"下载后保留副本"；Dovecot 检查 pop3_uidl_format 和 pop3_reuse_xuidl 设置'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 openssl s_client 连接 POP3S 服务器，手动登录并统计邮箱中有多少封邮件',
        hint: 'openssl s_client -connect host:995 → USER → PASS → STAT',
        answer: 'echo -e "USER user@example.com\\nPASS mypass\\nSTAT\\nQUIT" | openssl s_client -connect pop.example.com:995 -quiet'
      },
      {
        level: '进阶',
        task: '编写脚本批量下载 POP3 邮箱中所有邮件并保存为 .eml 文件',
        hint: '用 Python imaplib 或 poplib + email 库',
        answer: 'import poplib, email; p = poplib.POP3_SSL("pop.example.com"); p.user("user"); p.pass_("pass"); count = len(p.list()[1]); [open(f"mail_{i}.eml","wb").write(b"\\n".join(p.retr(i)[1])) for i in range(1, count+1)]; p.quit()'
      }
    ]
  },

  "LZDRgDxEZ3klp2PrrJFBX": {
    mentalModel: 'Vercel 是前端开发者的"零配置发布平台"——git push 即部署，自动 HTTPS，全球 CDN，把 Next.js/React 项目从代码到上线压缩到 30 秒',
    handsOn: [
      {
        title: '安装 Vercel CLI 并登录',
        cmd: 'npm i -g vercel\nvercel login\nvercel whoami',
        output: 'Vercel CLI 34.1.0\n> Success! Logged in as tu-dev\n\ntu-dev',
        explain: 'vercel login 支持 GitHub/GitLab/Bitbucket/Email 认证。登录后 token 保存在 ~/.local/share/com.vercel.cli 下。'
      },
      {
        title: '部署 Next.js 项目',
        cmd: 'cd my-nextjs-app\nvercel --prod',
        output: 'Vercel CLI 34.1.0\n? Set up and deploy? [Y/n] y\n? Which scope? tu-dev\n? Link to existing project? [y/N] n\n? What\'s your project\'s name? my-nextjs-app\n\n🔍  Inspect: https://vercel.com/tu-dev/my-nextjs-app/abc123\n✅  Production: https://my-nextjs-app.vercel.app [copied to clipboard] [32s]',
        explain: 'Vercel 自动检测 Next.js 并优化构建。--prod 部署到生产域名；不加则部署到 preview URL。每次 push 自动生成唯一 preview URL。'
      },
      {
        title: '配置环境变量和域名',
        cmd: 'vercel env add DATABASE_URL production\n# 输入值后...\nvercel env ls\nvercel --prod\n\nvercel domains add api.mydomain.com',
        output: 'Added Environment Variable DATABASE_URL to Project my-nextjs-app [production]\n\nProduction:  DATABASE_URL  2m ago\n\n> Success! Domain api.mydomain.com verified and added.',
        explain: '环境变量分 production/preview/development 三个环境。自定义域名需先在 DNS 添加 CNAME 指向 cname.vercel-dns.com 或 A 记录指向 76.76.21.21。'
      },
      {
        title: '使用 Edge Functions',
        cmd: '# app/api/geo/route.ts (Next.js App Router)\nexport const runtime = \'edge\';\n\nexport async function GET(request: Request) {\n  const country = request.headers.get(\'x-vercel-ip-country\') || \'unknown\';\n  return Response.json({ country, time: Date.now() });\n}',
        output: '// 部署后访问 /api/geo\n{"country":"US","time":1700000000000}',
        explain: 'Edge Functions 在 Vercel 全球边缘节点执行，延迟极低。Next.js App Router 中 export const runtime = "edge" 即可启用。支持 Web API (Request/Response)。'
      }
    ],
    diagnosis: [
      {
        symptom: '部署失败：Build failed with exit code 1，日志显示 Module not found',
        cause: '依赖未正确安装、Node.js 版本不兼容、或 pnpm/yarn 锁文件与 package.json 不一致',
        fix: '在 vercel.json 指定 Node 版本 { "engines": { "node": "20" } }；确保 lockfile 已提交；本地用 vercel build 复现问题；检查是否缺少 .env 中引用的环境变量'
      },
      {
        symptom: '自定义域名显示 SSL 证书错误或一直 Pending',
        cause: 'DNS 未正确指向 Vercel，或域名验证未完成',
        fix: 'Vercel 用 Let\'s Encrypt 自动签证书，但需要 DNS 先正确解析。CNAME 必须指向 cname.vercel-dns.com；裸域用 A 记录 76.76.21.21。验证可能需要几分钟。用 dig CNAME api.mydomain.com 确认 DNS 指向正确；在 Vercel Dashboard → Domains 查看验证状态；如有 CAA 记录限制，添加 letsencrypt.org 到允许列表'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '将一个本地 React/Vite 项目部署到 Vercel，并绑定自定义域名',
        hint: 'vercel 命令 + DNS CNAME 配置',
        answer: 'cd my-react-app → vercel (按提示创建项目) → vercel --prod → 在域名 DNS 添加 CNAME www → cname.vercel-dns.com + A @ → 76.76.21.21 → vercel domains add www.mydomain.com'
      },
      {
        level: '进阶',
        task: '配置 Vercel 的 Rewrites 和 Middleware 实现 API 代理和地理位置路由',
        hint: 'vercel.json rewrites + middleware.ts',
        answer: 'vercel.json: {"rewrites":[{"source":"/api/:path*","destination":"https://backend.example.com/:path*"}]} + middleware.ts: export function middleware(req) { const country = req.geo?.country; if(country==="CN") return NextResponse.redirect("https://mirror.example.com"); } export const config = {matcher: "/"}'
      }
    ]
  },

  "YUJf-6ccHvYjL_RzufQ-G": {
    mentalModel: '阿里云是中国最大的公有云平台——相当于中国版的 AWS，提供 ECS(虚拟机)、OSS(对象存储)、RDS(数据库) 等全套服务，覆盖中国大陆和亚太合规需求',
    handsOn: [
      {
        title: '使用 aliyun CLI 查询 ECS 实例',
        cmd: 'aliyun configure set --profile myProfile --mode AK \\\n  --access-key-id $ALIBABA_CLOUD_ACCESS_KEY_ID \\\n  --access-key-secret $ALIBABA_CLOUD_ACCESS_KEY_SECRET \\\n  --region cn-hangzhou\n\naliyun ecs DescribeInstances --RegionId cn-hangzhou',
        output: '"Instances": {\n  "Instance": [\n    {\n      "InstanceId": "i-bp1abc...",\n      "InstanceName": "web-server",\n      "Status": "Running",\n      "PublicIpAddress": { "IpAddress": ["47.96.1.2"] }\n    }\n  ]\n}',
        explain: 'aliyun CLI 使用 AccessKey 认证。生产环境建议用 RAM 角色 (STS Token) 代替长期密钥。DescribeInstances 列出所有实例及其状态。'
      },
      {
        title: '创建 ECS 实例',
        cmd: 'aliyun ecs CreateInstance \\\n  --RegionId cn-hangzhou \\\n  --InstanceType ecs.t6-c1m1.large \\\n  --ImageId ubuntu_22_04_x64_20G_alibase_20240101.vhd \\\n  --SecurityGroupId sg-bp1abc \\\n  --VSwitchId vsw-bp1abc \\\n  --InstanceName my-server',
        output: '"InstanceId": "i-bp1xyz789"',
        explain: 'CreateInstance 创建实例但不自动启动，需配合 StartInstance。ecs.t6 系列是经济型突发性能实例，适合轻量负载。VPC + VSwitch 是必选的网络配置。'
      },
      {
        title: '使用 OSS 对象存储',
        cmd: 'ossutil mb oss://my-backup-bucket --region cn-hangzhou\nossutil cp -r ./logs oss://my-backup-bucket/logs/ --update\nossutil ls oss://my-backup-bucket/logs/ --limited-num 5',
        output: '0.123456(s) elapsed\nSucceed: Object oss://my-backup-bucket/logs/app.log is uploaded.\n\nLastModified         Size(B)   Storage Class   ETAG\n2024-01-15 10:30:00  1048576   Standard        ABC123...\nNumber is: 3',
        explain: 'ossutil 是 OSS 的命令行工具。--update 只上传新增/修改的文件。OSS 支持 Standard/IA/Archive/ColdArchive 四种存储类型，按访问频率递减定价。'
      }
    ],
    diagnosis: [
      {
        symptom: 'ECS 实例 SSH 连接超时，安全组已放行 22 端口',
        cause: '可能是 VPC 路由表未配置公网网关、EIP 未绑定、或 iptables/firewalld 在实例内部阻止连接',
        fix: '确认实例有公网 IP (DescribeInstances 检查 PublicIpAddress 或 EipAddress)；检查 VPC 路由表是否有 0.0.0.0/0 指向 NAT 网关；SSH 进入后检查 iptables -L -n'
      },
      {
        symptom: 'OSS 跨域访问 (CORS) 被浏览器拦截',
        cause: 'OSS Bucket 未配置 CORS 规则，前端直接请求 OSS 被浏览器同源策略阻止',
        fix: '在 OSS 控制台 → 权限管理 → 跨域设置 → 创建规则：AllowedOrigin=* (或指定域名), AllowedMethod=GET/PUT, AllowedHeader=*, ExposeHeader=ETag'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 aliyun CLI 创建一个 ECS 实例，安装 Nginx 并验证可公网访问',
        hint: 'CreateInstance + AllocatePublicIpAddress + StartInstance + SSH 安装 Nginx',
        answer: 'aliyun ecs CreateInstance --RegionId cn-hangzhou --InstanceType ecs.t6-c1m1.large --ImageId ubuntu_22_04 --SecurityGroupId sg-xxx --VSwitchId vsw-xxx → aliyun ecs AllocatePublicIpAddress --InstanceId i-xxx → aliyun ecs StartInstance --InstanceId i-xxx → ssh root@公网IP "apt update && apt install -y nginx"'
      },
      {
        level: '进阶',
        task: '配置阿里云 SLB (负载均衡) + 两台 ECS 后端 + 健康检查',
        hint: 'CreateLoadBalancer + AddBackendServers + CreateHealthCheck',
        answer: 'aliyun slb CreateLoadBalancer --RegionId cn-hangzhou --AddressType internet → aliyun slb CreateLoadBalancerHTTPListener --LoadBalancerId lb-xxx --ListenerPort 80 --BackendServerPort 80 → aliyun slb AddBackendServers --LoadBalancerId lb-xxx --BackendServers "[{ServerId:i-xxx,Weight:100},{ServerId:i-yyy,Weight:100}]" → aliyun slb SetLoadBalancerHTTPListenerAttribute --HealthCheck on --HealthCheckURI /health'
      }
    ]
  },

  "RYCD78msIR2BPJoIP71aj": {
    mentalModel: 'DKIM (DomainKeys Identified Mail) 是邮件的数字公章——发件方用私钥给邮件签名，收件方用 DNS 公钥验证，证明邮件确实来自该域名且内容未被篡改',
    sections: [
      {
        title: 'DKIM 工作原理',
        content: 'DKIM (RFC 6376) 通过非对称加密实现邮件签名验证：\n\n发送流程：\n1. 发件 MTA 对邮件头和正文计算哈希 (canonicalization)\n2. 用私钥签名，生成 DKIM-Signature 头：\n   DKIM-Signature: v=1; a=rsa-sha256; d=example.com; s=mail;\n   h=from:to:subject:date; bh=abc123...; b=xyz789...\n3. 签名附加到邮件头，随邮件传输\n\n验证流程：\n1. 收件 MTA 提取 DKIM-Signature 中的 d= (域名) 和 s= (选择器)\n2. 查询 DNS TXT: mail._domainkey.example.com\n3. 获取公钥：v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4...\n4. 用公钥验证签名 b= 值\n5. 重新计算 bh= 验证正文完整性\n\n签名失败原因：\n- 邮件被中间服务器修改了签名覆盖的头字段\n- 邮件转发修改了 From 或 Subject\n- DNS 公钥记录丢失或被篡改'
      },
      {
        title: 'DKIM 密钥生成与配置',
        content: '生成 DKIM 密钥对 (以 OpenDKIM 为例)：\n\n# 生成 2048 位 RSA 密钥\nopendkim-genkey -b 2048 -d example.com -s mail -D /etc/opendkim/keys/\n\n生成文件：\n- mail.private：私钥（保存在发件服务器）\n- mail.txt：公钥记录（添加到 DNS）\n\nDNS TXT 记录内容：\nmail._domainkey.example.com. IN TXT "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A..."\n\n常见邮件服务的 DKIM：\n- Google Workspace：Admin Console → Apps → Gmail → Authenticate email → 生成密钥\n- Microsoft 365：自动轮换密钥，portal 中启用\n- Amazon SES：Easy DKIM 自动管理密钥\n\n最佳实践：\n- 使用 2048 位密钥（1024 位可被破解）\n- 定期轮换密钥（每季度）\n- 使用多个选择器实现密钥轮换过渡'
      },
      {
        title: 'DKIM 与 DMARC 策略配合',
        content: 'DKIM 单独使用只提供验证结果，不定义处理策略。配合 DMARC：\n\nDMARC 记录：\nv=DMARC1; p=reject; adkim=s; aspf=s; rua=mailto:dmarc@example.com\n\n字段说明：\n- p=reject：DKIM 和 SPF 都失败时拒绝邮件\n- adkim=s：DKIM 严格对齐（签名域名必须精确匹配 From 域名）\n- adkim=r：DKIM 宽松对齐（允许子域名，如 mail.example.com 签名的邮件对 example.com 有效）\n- rua：聚合报告发送地址\n\n对齐 (Alignment) 是关键概念：\n- SPF 对齐：MAIL FROM 域名 ≈ From: 头域名\n- DKIM 对齐：d= 签名域名 ≈ From: 头域名\n- DMARC 要求至少一个通过且对齐\n\n监控工具：\n- dmarcian.com 解析 DMARC 报告\n- Postmark DMARC 报告查看器\n- Google Postmaster Tools'
      }
    ],
    diagnosis: [
      {
        symptom: 'DKIM 验证结果 permfail (签名无效)',
        cause: 'DNS 公钥记录与发件服务器私钥不匹配，或邮件头被转发过程中修改',
        fix: '用 dig TXT selector._domainkey.example.com 确认公钥存在且正确；对比发件服务器私钥是否匹配；检查邮件是否经过修改内容的中间件（如邮件列表软件改写了 Subject）'
      },
      {
        symptom: 'DKIM 验证 none (找不到签名)',
        cause: '发件服务器未配置 DKIM 签名，或签名选择器与 DNS 记录不一致',
        fix: '检查邮件原始头是否包含 DKIM-Signature；确认发件 MTA (Postfix/Sendmail) 已集成 OpenDKIM milter；验证 selector 名称与 DNS 记录路径一致'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查询某个域名的 DKIM 公钥记录，并判断密钥长度',
        hint: 'dig TXT selector._domainkey.domain + openssl rsa -pubin',
        answer: 'dig +short TXT google._domainkey.google.com → 获取 p= 值 → echo "MIGfMA0..." | base64 -d | openssl rsa -pubin -text -noout → 显示 RSA Public-Key: (2048 bit)'
      },
      {
        level: '进阶',
        task: '在 Postfix 邮件服务器上配置 OpenDKIM 签名，并通过 Gmail 发送测试邮件验证',
        hint: '安装 opendkim + 配置 milter + 生成密钥 + 添加 DNS + 发送测试',
        answer: 'apt install opendkim → opendkim-genkey -b 2048 -s mail -d example.com → 配置 /etc/opendkim.conf 和 TrustedHosts → postfix main.cf 添加 smtpd_milters=inet:localhost:8891 → DNS 添加 TXT 记录 → systemctl restart postfix → echo "test" | mail -s "DKIM Test" user@gmail.com → 在 Gmail 查看原始邮件确认 DKIM: PASS'
      }
    ]
  },

  "hCKODV2b_l2uPit0YeP1M": {
    mentalModel: 'Netlify 是静态站点的"自动售货机"——放入 Git 仓库，出来的是全球 CDN 部署 + 自动 HTTPS + Serverless Functions，专注 Jamstack 架构',
    handsOn: [
      {
        title: '安装 Netlify CLI 并部署',
        cmd: 'npm install -g netlify-cli\nnetlify login\nnetlify deploy --build --prod',
        output: 'Opening https://app.netlify.com/authorize...\nYou are now logged into your Netlify account!\n\nDeploy path: /home/user/my-site/dist\nDeploying to main site URL...\n\n✔ Finished hashing 42 files\n✔ CDN requesting 0 files\n✔ Finished uploading 0 assets\n✔ Deploy is live!\n\nWebsite URL: https://my-site.netlify.app',
        explain: 'netlify deploy --build 先执行构建命令再部署。--prod 部署到主域名；否则部署到 draft URL。首次 deploy 会创建新站点。'
      },
      {
        title: '配置 netlify.toml 构建规则',
        cmd: 'cat netlify.toml',
        output: '[build]\n  command = "npm run build"\n  publish = "dist"\n\n[[redirects]]\n  from = "/api/*"\n  to = "https://backend.example.com/:splat"\n  status = 200\n\n[[headers]]\n  for = "/assets/*"\n  [headers.values]\n    Cache-Control = "public, max-age=31536000, immutable"',
        explain: 'netlify.toml 是项目级配置。redirects 可做 API 代理（status=200 不跳转 URL）；headers 精细控制缓存策略。_redirects 和 _headers 文件是替代方案。'
      },
      {
        title: '部署 Netlify Edge Function',
        cmd: '# netlify/edge-functions/geo.ts\nexport default async (request: Request) => {\n  const country = request.headers.get(\'x-nf-geo\') || \'unknown\';\n  return new Response(JSON.stringify({ country }), {\n    headers: { \'content-type\': \'application/json\' }\n  });\n};\n\nexport const config = { path: \'/api/geo\' };\n\nnetlify deploy --prod',
        output: 'Deploy complete!\nEdge Functions:\n  geo → /api/geo (Deno runtime)',
        explain: 'Netlify Edge Functions 使用 Deno 运行时，在全球边缘节点执行。比 AWS Lambda@Edge 配置简单得多。支持 TypeScript 和 Web Streams API。'
      }
    ],
    diagnosis: [
      {
        symptom: 'SPA 刷新页面后 404 Not Found',
        cause: 'Netlify 未配置 fallback 规则，直接请求 /about 等客户端路由路径时找不到对应文件',
        fix: '在 public 目录添加 _redirects 文件：/* /index.html 200；或在 netlify.toml 中 [[redirects]] from = "/*" to = "/index.html" status = 200'
      },
      {
        symptom: '构建失败：command not found: npm（或 Node 版本过低）',
        cause: 'Netlify 构建环境默认 Node 版本可能不匹配项目要求',
        fix: '在 netlify.toml 中设置 [build.environment] NODE_VERSION = "20"；或添加 .nvmrc 文件指定版本；确认构建命令在 [build] command 中正确配置'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Netlify CLI 部署一个静态 HTML 站点并配置自定义域名',
        hint: 'netlify deploy --prod + Netlify Dashboard 添加域名',
        answer: '创建 dist/index.html → netlify deploy --dir=dist --prod → Netlify Dashboard → Domain settings → Add custom domain → 在 DNS 添加 CNAME 指向 xxx.netlify.app 或 A 记录指向 75.2.60.5'
      },
      {
        level: '进阶',
        task: '配置 Netlify 的 Split Testing (A/B 测试)，根据 Cookie 将用户路由到不同分支部署',
        hint: 'netlify.toml 中 [[split_tests]] 或 Netlify Dashboard 配置',
        answer: 'netlify.toml: [[split_tests]] name = "landing-test" path = "/" branches = [{branch = "main", percentage = 70}, {branch = "feature/new-landing", percentage = 30}] → 部署后 Netlify 自动按百分比分配流量，通过 nf_split_test cookie 保持会话一致性'
      }
    ]
  },

  "I327qPYGMcdayRR5WT0Ek": {
    mentalModel: 'Hetzner 是欧洲的"性价比之王"——德国老牌托管商，以极低价格提供高性能独服和云主机，数据中心遍布欧洲，适合需要 GDPR 合规和低成本的项目',
    handsOn: [
      {
        title: '使用 hcloud CLI 创建云服务器',
        cmd: 'hcloud context create my-project\n# 输入 API Token\n\nhcloud server create \\\n  --name web-server \\\n  --type cx22 \\\n  --image ubuntu-22.04 \\\n  --location nuremberg \\\n  --ssh-key my-key',
        output: 'Server 48765432 created\nIPv4: 88.99.123.45\nIPv6: 2a01:4f8:c0c:xxxx::/64\nStatus: running',
        explain: 'hcloud 是 Hetzner Cloud CLI。cx22 (2 vCPU/4GB RAM) 约 €4.5/月。Hetzner 同时提供 IPv4 和 IPv6，包含 20TB 流量。'
      },
      {
        title: '配置 Hetzner Firewall',
        cmd: 'hcloud firewall create --name web-fw\n\nhcloud firewall add-rule web-fw \\\n  --protocol tcp --port 22 --source-ips 0.0.0.0/0\n\nhcloud firewall add-rule web-fw \\\n  --protocol tcp --port 80 --source-ips 0.0.0.0/0\n\nhcloud firewall add-rule web-fw \\\n  --protocol tcp --port 443 --source-ips 0.0.0.0/0\n\nhcloud firewall apply-to-resource web-fw --server web-server',
        output: 'Firewall 12345 created\nRule added: tcp/22 from 0.0.0.0/0\nRule added: tcp/80 from 0.0.0.0/0\nRule added: tcp/443 from 0.0.0.0/0\nFirewall applied to server web-server',
        explain: 'Hetzner Cloud Firewall 免费使用，支持入站和出站规则。建议 SSH 限制为特定 IP。'
      },
      {
        title: '创建 Hetzner 私有网络',
        cmd: 'hcloud network create --name internal --ip-range 10.0.0.0/16\nhcloud network add-subnet internal \\\n  --network-zone eu-central \\\n  --type cloud \\\n  --ip-range 10.0.1.0/24\n\nhcloud server attach-to-network web-server \\\n  --network internal --ip 10.0.1.10',
        output: 'Network 1234 created\nSubnet added: 10.0.1.0/24 in eu-central\nServer web-server attached to network with IP 10.0.1.10',
        explain: '私有网络让服务器间通过内网通信，零延迟、无额外费用。适合前后端分离架构、数据库隔离等场景。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Hetzner 服务器被标记为滥用并关停',
        cause: '服务器发送垃圾邮件 (端口 25 未限制)、被用于 DDoS 攻击、或挖矿等违反 TOS 的行为',
        fix: '检查 Hetzner Robot/Cloud Console 的 abuse 通知；关闭不必要的出站端口（特别是 25）；配置防火墙出站规则；回复 abuse 邮件说明已采取的修复措施'
      },
      {
        symptom: '跨地区访问 Hetzner 服务器延迟高',
        cause: 'Hetzner 数据中心只在欧洲（德国、芬兰），亚太/美洲用户访问延迟 200ms+',
        fix: '在前面加 CDN（Cloudflare/CloudFront）缓存静态内容；API 可用 Vercel Edge Functions 代理；或使用 Hetzner 的 Load Balancer + 其他地区的节点做多区域部署'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 hcloud CLI 创建一台 CX22 服务器，安装 Docker 并运行一个 Nginx 容器',
        hint: 'hcloud server create + SSH + docker run',
        answer: 'hcloud server create --name docker-host --type cx22 --image ubuntu-22.04 --ssh-key my-key → ssh root@IP "apt update && apt install -y docker.io && docker run -d -p 80:80 --name web nginx" → 浏览器访问 http://服务器IP'
      },
      {
        level: '进阶',
        task: '在 Hetzner 上搭建 Docker Swarm 集群（1 manager + 2 worker），并部署一个多副本服务',
        hint: '创建 3 台服务器 + docker swarm init/join + docker service create',
        answer: '创建 3 台 CX22 → Manager: docker swarm init --advertise-addr 10.0.1.10 → Workers: docker swarm join --token <token> 10.0.1.10:2377 → docker service create --name web --replicas 6 -p 80:80 nginx → Hetzner LB 分发到 Swarm 节点'
      }
    ]
  },

  "eJZdjheptmiwKsVokt7Io": {
    mentalModel: 'Contabo 是预算型 VPS 的"大碗便宜"——用极低价格给到大内存和大存储，适合个人实验室、测试环境、轻量级服务，但网络和 I/O 性能不如一线云商',
    sections: [
      {
        title: 'Contabo 产品与定价',
        content: 'Contabo (原 myLoc) 是德国 VPS/独服提供商，主打高性价比：\n\nCloud VPS 系列（2024 参考价格）：\n- VPS 1: 4 vCPU / 8 GB RAM / 50 GB SSD / €4.99/月\n- VPS 2: 6 vCPU / 16 GB RAM / 100 GB SSD / €7.99/月\n- VPS 3: 8 vCPU / 24 GB RAM / 200 GB SSD / €12.99/月\n- VPS 4: 12 vCPU / 48 GB RAM / 400 GB SSD / €24.99/月\n\n优势：\n- 内存和 CPU 核数远超同价位竞品\n- 支持 Windows/Linux 多种操作系统\n- 数据中心覆盖德国、美国、英国、日本、新加坡、澳大利亚\n\n限制：\n- 网络带宽共享（公平使用政策），峰值可能限速\n- SSD IOPS 不如 AWS/Azure 的高端 NVMe\n- 无原生 API（需第三方或面板操作）\n- 技术支持响应较慢\n\n适用场景：\n- 个人开发/测试环境\n- 小型 Web 应用托管\n- 自建 VPN / 代理\n- 学习 Linux 和 DevOps'
      },
      {
        title: 'Contabo 服务器初始化',
        content: '新服务器首次配置清单：\n\n# 1. SSH 连接\nssh root@your-server-ip\n\n# 2. 更新系统\napt update && apt upgrade -y\n\n# 3. 创建非 root 用户\nadduser deploy\nusermod -aG sudo deploy\n\n# 4. 配置 SSH 安全\ncat >> /etc/ssh/sshd_config << EOF\nPermitRootLogin no\nPasswordAuthentication no\nPubkeyAuthentication yes\nPort 2222\nEOF\nsystemctl restart sshd\n\n# 5. 配置防火墙\nufw default deny incoming\nufw default allow outgoing\nufw allow 2222/tcp\nufw allow 80/tcp\nufw allow 443/tcp\nufw enable\n\n# 6. 自动安全更新\napt install -y unattended-upgrades\ndpkg-reconfigure -plow unattended-upgrades\n\n# 7. 配置 fail2ban\napt install -y fail2ban\nsystemctl enable fail2ban'
      },
      {
        title: '性能优化与监控',
        content: 'Contabo VPS 的常见性能调优：\n\n# 磁盘 I/O 测试\nfio --name=test --ioengine=libaio --direct=1 --bs=4k --size=1G --rw=randread\n# 典型结果：SSD 约 10K-30K IOPS (共享)\n\n# 网络速度测试\napt install -y speedtest-cli\nspeedtest\n# 注意：共享带宽，高峰期可能 100-300Mbps\n\n# 内存监控 (16GB 实例)\nfree -h\n# 设置 swap 防止 OOM\nfallocate -l 4G /swapfile\nchmod 600 /swapfile\nmkswap /swapfile\nswapon /swapfile\necho \'/swapfile none swap sw 0 0\' >> /etc/fstab\n\n# 系统监控\napt install -y htop vnstat\nvnstat -i eth0  # 流量统计\nhtop  # 实时资源监控\n\n# 推荐监控方案：Node Exporter + Grafana Cloud (免费 3 个 Dashboard)'
      }
    ],
    diagnosis: [
      {
        symptom: 'Contabo VPS 磁盘 I/O 明显变慢',
        cause: '共享 SSD 的 IOPS 被同宿主机其他用户占满（noisy neighbor 问题）',
        fix: '用 iostat -x 1 确认 await 延迟是否异常；尝试在非高峰时段执行大 I/O 任务；如持续严重可联系客服请求迁移宿主机；关键业务考虑升级到独享存储的方案'
      },
      {
        symptom: '服务器突然无法 SSH 且面板显示运行中',
        cause: '可能触发了 Contabo 的网络 abuse 检测被临时封禁，或 IP 被 DDoS 攻击导致黑洞路由',
        fix: '通过 Contabo 面板的 VNC Console 登录检查系统日志；检查 /var/log/auth.log 是否有异常；联系 support 确认是否有 abuse 封禁；考虑更换 IP 或使用 Cloudflare Tunnel 避免直接暴露'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Contabo VPS 上安装 Docker + Docker Compose，并部署 WordPress + MySQL',
        hint: 'curl docker install + docker-compose.yml',
        answer: 'curl -fsSL https://get.docker.com | sh → 创建 docker-compose.yml 定义 wordpress + mysql 服务 → docker compose up -d → 访问 http://服务器IP 完成 WordPress 安装向导'
      },
      {
        level: '进阶',
        task: '在 Contabo 上搭建完整的自建监控栈：Prometheus + Grafana + Node Exporter + AlertManager',
        hint: 'docker compose 部署全套组件 + 配置 scrape targets + 告警规则',
        answer: 'docker compose 部署 Prometheus (9090) + Grafana (3000) + node-exporter (9100) → prometheus.yml 添加 targets: [node-exporter:9100] → 创建 alert rules: InstanceDown → AlertManager 配置邮件/webhook 通知 → Grafana 导入 Dashboard ID 1860 (Node Exporter Full)'
      }
    ]
  },

  "JXsctlXUUS1ie8nNEgIk9": {
    mentalModel: 'GCP Cloud Functions 是 Google 云的"事件驱动微执行器"——绑定触发器 (HTTP/CloudEvent) 的短函数，按调用次数和执行时间计费，空闲时零费用',
    handsOn: [
      {
        title: '创建 HTTP 触发函数 (第二代)',
        cmd: 'mkdir my-function && cd my-function\ncat > main.py << \'PYEOF\'\nimport functions_framework\n\n@functions_framework.http\ndef hello(request):\n    name = request.args.get("name", "World")\n    return f"Hello, {name}!", 200, {"Content-Type": "text/plain"}\nPYEOF\n\ncat > requirements.txt << \'EOF\'\nfunctions-framework==3.*\nEOF',
        output: 'main.py written\nrequirements.txt written',
        explain: '第二代 Cloud Functions 基于 Cloud Run，支持更长执行时间 (60 分钟) 和更大内存。functions_framework 是 Google 的 Python SDK。'
      },
      {
        title: '本地测试函数',
        cmd: 'pip install functions-framework\nfunctions-framework --target=hello --port=8080 &\n\nsleep 2\ncurl -v "http://localhost:8080?name=DevOps"',
        output: 'Hello, DevOps!\n* Connection #0 to host localhost left intact',
        explain: 'functions-framework 提供本地模拟器。--target 指定函数名。可在 VS Code 中 attach debugger 进行断点调试。'
      },
      {
        title: '部署到 GCP',
        cmd: 'gcloud functions deploy hello \\\n  --gen2 \\\n  --runtime=python312 \\\n  --region=us-central1 \\\n  --source=. \\\n  --entry-point=hello \\\n  --trigger-http \\\n  --allow-unauthenticated',
        output: 'Preparing function...done.\nDeploying function...done.\nAvailable endpoints:\n  https://us-central1-my-project.cloudfunctions.net/hello',
        explain: '--gen2 使用第二代运行时。--trigger-http 创建 HTTP 端点。部署后得到唯一 URL，可直接用 curl 或浏览器调用。'
      },
      {
        title: '创建 CloudEvent 触发函数 (Pub/Sub)',
        cmd: 'cat > main.py << \'PYEOF\'\nimport functions_framework\nimport base64\n\n@functions_framework.cloud_event\ndef process_message(cloud_event):\n    data = cloud_event.data\n    message = base64.b64decode(data["message"]["data"]).decode("utf-8")\n    print(f"Received: {message}")\n    return f"Processed: {message}"\nPYEOF\n\ngcloud functions deploy process_message \\\n  --gen2 --runtime=python312 --region=us-central1 \\\n  --source=. --entry-point=process_message \\\n  --trigger-topic=my-topic',
        output: 'Deploying function...done.\nTrigger: projects/my-project/topics/my-topic',
        explain: 'CloudEvent 函数响应 Google Cloud 事件 (Pub/Sub, Cloud Storage, Firestore 等)。--trigger-topic 自动创建 Pub/Sub 订阅。'
      }
    ],
    diagnosis: [
      {
        symptom: '函数部署失败：Build failed: pip install returned code 1',
        cause: 'requirements.txt 中的包版本冲突，或需要编译的原生包缺少构建工具',
        fix: '检查 requirements.txt 版本兼容性；对原生包使用预编译 wheel；在函数目录添加 .gcloudignore 排除不必要文件；查看 Cloud Build 日志 gcloud builds log'
      },
      {
        symptom: 'HTTP 函数返回 403 Forbidden',
        cause: '函数未设置 --allow-unauthenticated，调用方缺少 IAM 权限 (Cloud Functions Invoker 角色)',
        fix: '重新部署加 --allow-unauthenticated；或对服务调用，给服务账号添加 roles/cloudfunctions.invoker 角色；在请求头加 Authorization: Bearer $(gcloud auth print-identity-token)'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '部署一个 Cloud Function，接收 HTTP POST JSON 并写入 Firestore',
        hint: '@functions_framework.http + google-cloud-firestore SDK',
        answer: 'from google.cloud import firestore; db = firestore.Client(); @functions_framework.http def save_item(request): data = request.get_json(); doc_ref = db.collection("items").add({"data": data, "created": firestore.SERVER_TIMESTAMP}); return {"id": doc_ref[1].id}, 201'
      },
      {
        level: '进阶',
        task: '配置 Cloud Function 响应 GCS 文件上传事件，自动将图片压缩后存回另一个 bucket',
        hint: '--trigger-resource=bucket --trigger-event=google.storage.object.finalize + Pillow 库',
        answer: '@functions_framework.cloud_event def resize_image(cloud_event): bucket_name = cloud_event.data["bucket"]; file_name = cloud_event.data["name"]; blob = storage.Client().bucket(bucket_name).blob(file_name); img_bytes = blob.download_as_bytes(); img = Image.open(BytesIO(img_bytes)); img.thumbnail((800, 800)); buf = BytesIO(); img.save(buf, "JPEG"); out_bucket = storage.Client().bucket("resized-images"); out_bucket.blob(file_name).upload_from_file(buf, content_type="image/jpeg")'
      }
    ]
  },

  "FaPf567JGRAg1MBlFj9Tk": {
    mentalModel: 'Heroku 是云部署的"全自动餐厅"——git push heroku main 即部署，平台帮你管运行时、数据库、日志、扩缩容，开发者只管写代码',
    handsOn: [
      {
        title: '安装 Heroku CLI 并创建应用',
        cmd: 'heroku login\nheroku create my-node-app\ngit remote -v',
        output: 'heroku: Press any key to open up the browser to login or q to exit:\nLogging in... done\nLogged in as user@example.com\n\nCreating ⬢ my-node-app... done\nhttps://my-node-app.herokuapp.com/\n\nheroku  https://git.heroku.com/my-node-app.git (push)\nheroku  https://git.heroku.com/my-node-app.git (fetch)',
        explain: 'heroku create 创建应用并自动添加 git remote。应用名全局唯一。Basic 计划约 $5/月，Eco dyno 共享 $5 额度。'
      },
      {
        title: '配置 Procfile 和环境变量',
        cmd: 'cat > Procfile << \'EOF\'\nweb: node server.js\nworker: node worker.js\nEOF\n\nheroku config:set DATABASE_URL=postgres://user:pass@host/db\nheroku config:set NODE_ENV=production\nheroku config:list',
        output: '=== my-node-app Config Vars\nDATABASE_URL: postgres://user:pass@host/db\nNODE_ENV:     production',
        explain: 'Procfile 定义进程类型和启动命令。web 类型接收 HTTP 流量。config:set 管理环境变量，Heroku 注入到运行时。'
      },
      {
        title: '部署和扩容',
        cmd: 'git push heroku main\n\nheroku ps:scale web=2:standard-1x worker=1:basic\nheroku ps',
        output: 'Enumerating objects: 42, done.\nremote: Building source:\nremote: -----> Node.js app detected\nremote: -----> Installing dependencies\nremote: -----> Launching...\nremote:        https://my-node-app.herokuapp.com/ deployed to Heroku\n\n=== web (standard-1x): node server.js (2)\nweb.1: up 2024/01/15 10:30:00 (~ 1m ago)\nweb.2: up 2024/01/15 10:30:00 (~ 1m ago)\n=== worker (basic): node worker.js (1)\nworker.1: up 2024/01/15 10:29:00',
        explain: 'git push heroku 触发构建和部署。ps:scale 指定 dyno 数量和类型。standard-1x 有 512MB RAM + 不睡眠；basic 会睡眠。'
      },
      {
        title: '查看日志和管理附加组件',
        cmd: 'heroku logs --tail --dyno web\n\nheroku addons:create heroku-postgresql:essential-0\nheroku addons:create heroku-redis:mini\nheroku pg:info',
        output: '2024-01-15T10:30:00 app[web.1]: Server listening on port 5000\n2024-01-15T10:30:05 heroku[web.1]: State changed from starting to up\n2024-01-15T10:30:10 app[web.1]: GET / 200 12ms\n\nCreating heroku-postgresql:essential-0 on ⬢ my-node-app... ~$0.007/hour\nDATABASE_URL has been set.',
        explain: 'Heroku 日志系统聚合所有 dyno 输出。--tail 实时流式查看。附加组件 (Add-ons) 提供数据库、缓存、监控等托管服务。'
      }
    ],
    diagnosis: [
      {
        symptom: '应用启动后崩溃：heroku[web.1]: Process exited with status 1',
        cause: '应用未绑定到 $PORT 环境变量（Heroku 动态分配端口），或缺少必要环境变量',
        fix: '确保 server.listen(process.env.PORT)；用 heroku config 检查环境变量是否完整；用 heroku run bash 进入 dyno 手动调试；查看 heroku logs --tail 完整错误信息'
      },
      {
        symptom: '应用响应慢，请求超时 (H12 - Request timeout)',
        cause: 'Heroku 请求 30 秒超时限制；dyno 资源不足 (内存/CPU)；或数据库查询太慢',
        fix: '用 heroku logs 搜索 H12 错误；添加 New Relic 或 Scout APM 监控瓶颈；优化数据库查询加索引；考虑使用 worker dyno 异步处理耗时任务；ps:scale 升级 dyno 类型'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '将一个 Express.js 应用部署到 Heroku，配置 Procfile 和环境变量',
        hint: 'package.json 添加 start script + Procfile + heroku config:set',
        answer: 'package.json: {"scripts":{"start":"node server.js"}} → Procfile: web: npm start → git push heroku main → heroku config:set PORT=3000 (不需要，Heroku 自动注入) → heroku open 打开浏览器'
      },
      {
        level: '进阶',
        task: '为 Heroku 应用配置 Review Apps：每个 PR 自动创建独立的预览环境',
        hint: 'app.json 定义 + Heroku Dashboard 启用 Review Apps + GitHub 集成',
        answer: '创建 app.json: {"name":"my-app","environments":{"review":{"addons":["heroku-postgresql:essential-0"],"scripts":{"postdeploy":"npm run db:migrate"}}}} → Dashboard → Pipeline → Enable Review Apps → 连接 GitHub repo → 每个新 PR 自动创建独立 app + 数据库'
      }
    ]
  },

  "cjjMZdyLgakyVkImVQTza": {
    mentalModel: 'Papertrail 是日志的"全局搜索框"——将分散在几十台服务器上的日志汇聚到一个界面，实时流式查看 + 全文搜索 + 告警，告别 SSH 逐台翻日志',
    handsOn: [
      {
        title: '配置 rsyslog 发送日志到 Papertrail',
        cmd: '# 获取你的 Papertrail 端口\n# Dashboard → Systems → Add Systems → 复制配置\n\ncat >> /etc/rsyslog.d/99-papertrail.conf << \'EOF\'\n$ActionQueueFileName fwdRule1\n$ActionQueueMaxDiskSpace 1g\n$ActionQueueSaveOnShutdown on\n$ActionResumeRetryCount -1\n$ActionResumeInterval 10\n\n*.* @logs3.papertrailapp.com:12345\nEOF\n\nsystemctl restart rsyslog',
        output: 'rsyslog restarted, logs now forwarding to Papertrail',
        explain: 'Papertrail 使用 syslog 协议接收日志。每台服务器分配唯一的端口号。@表示 UDP，@@表示 TCP。建议用 TLS 加密传输。'
      },
      {
        title: '使用 Papertrail CLI 搜索日志',
        cmd: 'export PAPERTRAIL_API_TOKEN=your-token\n\n# 实时跟踪日志\ncurl -s -H "X-Papertrail-Token: $PAPERTRAIL_API_TOKEN" \\\n  "https://papertrailapp.com/api/v1/events/search.json?q=ERROR&tail=true" | jq \'.events[] | {time, hostname, message}\'\n\n# 搜索特定服务器\ncurl -s -H "X-Papertrail-Token: $PAPERTRAIL_API_TOKEN" \\\n  "https://papertrailapp.com/api/v1/events/search.json?q=hostname:web-server+status:500"',
        output: '{"time":"2024-01-15T10:30:00Z","hostname":"web-server","message":"ERROR: Database connection refused"}\n{"time":"2024-01-15T10:30:05Z","hostname":"web-server","message":"ERROR: Retrying connection..."}',
        explain: 'Papertrail API 支持全文搜索、主机名过滤、时间范围查询。tail=true 持续流式返回新日志。适合集成到监控脚本。'
      },
      {
        title: '配置告警',
        cmd: '# 通过 API 创建搜索告警\ncurl -X POST -H "X-Papertrail-Token: $PAPERTRAIL_API_TOKEN" \\\n  "https://papertrailapp.com/api/v1/searches.json" \\\n  -d \'search[name]=HighErrorRate&search[query]=level:ERROR&search[group_id]=12345\'\n\n# 配置 Webhook 通知\ncurl -X POST "https://papertrailapp.com/api/v1/searches/SEARCH_ID/destinations.json" \\\n  -H "X-Papertrail-Token: $PAPERTRAIL_API_TOKEN" \\\n  -d \'destination[webhook_url]=https://hooks.slack.com/services/xxx\'',
        output: '{"id":67890,"name":"HighErrorRate","query":"level:ERROR"}',
        explain: '搜索告警定期执行查询，匹配结果时触发通知。支持 Email、Slack、PagerDuty、Webhook。适合错误率突增、安全事件等场景。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Papertrail 上某台服务器的日志停止更新',
        cause: 'rsyslog 服务崩溃、网络问题导致无法连接 Papertrail、或日志文件权限变化',
        fix: '在服务器上 systemctl status rsyslog 检查服务状态；用 tcpdump -i eth0 host logs3.papertrailapp.com 确认有出站流量；检查 /var/log/syslog 是否有 rsyslog 错误；重启 rsyslog 服务'
      },
      {
        symptom: '日志搜索很慢或超时',
        cause: '查询时间范围太大、搜索语法不正确、或日志量超过计划限制',
        fix: '缩小时间范围；使用精确搜索语法 (program:nginx level:ERROR)；添加 hostname 过滤缩小范围；检查 Papertrail 用量是否超出计划配额'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '将一台 Ubuntu 服务器的所有 syslog 转发到 Papertrail，并在 Web 界面验证收到日志',
        hint: '配置 /etc/rsyslog.d/ + restart rsyslog + Papertrail Dashboard 添加系统',
        answer: '在 Papertrail Dashboard 点 Add Systems 获取端口 → 创建 /etc/rsyslog.d/99-papertrail.conf: *.* @logsN.papertrailapp.com:XXXXX → systemctl restart rsyslog → logger "test from Papertrail setup" → Dashboard 确认日志到达'
      },
      {
        level: '进阶',
        task: '编写脚本监控 Papertrail 日志，当 5 分钟内出现超过 10 次 "OutOfMemory" 时发送 Slack 告警',
        hint: 'Papertrail API search + jq 统计 + curl Slack webhook',
        answer: '#!/bin/bash\nCOUNT=$(curl -s -H "X-Papertrail-Token: $TOKEN" "https://papertrailapp.com/api/v1/events/search.json?q=OutOfMemory&min_time=$(date -d \'5 min ago\' +%s)" | jq \'.events | length\')\nif [ "$COUNT" -gt 10 ]; then\n  curl -X POST -H "Content-type: application/json" --data "{\\"text\\":\\"OOM Alert: $COUNT occurrences in 5 min\\"}" $SLACK_WEBHOOK\nfi'
      }
    ]
  },

  "kv508kxzUj_CjZRb-TeRv": {
    mentalModel: 'Chef 是基础设施的"菜谱大师"——用 Ruby 编写的 Recipe/Cookbook 描述服务器应有的状态，Chef Client 在每台机器上"烹饪"，确保配置始终一致',
    handsOn: [
      {
        title: '安装 Chef Workstation',
        cmd: 'curl -L https://omnitruck.chef.io/install.sh | sudo bash -s -- -P chef-workstation\nchef --version\nchef generate repo my-infra\ncd my-infra',
        output: 'Chef Workstation version: 24.1.1064\n\nGenerating cookbook my-infra\n- Ensuring correct Chef Infra file content\n- Your new Chef Infra repo is ready!',
        explain: 'Chef Workstation 包含 knife (管理 CLI)、chef (本地测试)、cookbook 生成器等工具。repo 目录结构遵循 Chef 标准布局。'
      },
      {
        title: '编写 Cookbook 和 Recipe',
        cmd: 'chef generate cookbook cookbooks/webserver\ncat > cookbooks/webserver/recipes/default.rb << \'RUBY\'\npackage "nginx" do\n  action :install\nend\n\ntemplate "/etc/nginx/sites-available/default" do\n  source "nginx.conf.erb"\n  variables(\n    server_name: node["webserver"]["domain"],\n    root_dir: "/var/www/html"\n  )\n  notifies :reload, "service[nginx]"\nend\n\nservice "nginx" do\n  action [:enable, :start]\nend\nRUBY',
        output: 'Cookbook webserver created\nRecipe default.rb written',
        explain: 'Chef Recipe 用 Ruby DSL 声明期望状态。package/service/template 是内置资源。notifies 实现资源间的依赖通知。node 属性在 attributes/ 目录定义。'
      },
      {
        title: '本地测试 (Test Kitchen)',
        cmd: 'cd cookbooks/webserver\nkitchen init --driver=docker\ncat > .kitchen.yml << \'YAML\'\n---\ndriver:\n  name: docker\n  privileged: true\nprovisioner:\n  name: chef_zero\nplatforms:\n  - name: ubuntu-22.04\nsuites:\n  - name: default\n    run_list:\n      - recipe[webserver::default]\nYAML\n\nkitchen converge',
        output: '-----> Starting Test Kitchen (v3.6.0)\n-----> Converging <default-ubuntu-2204>\n       Preparing files for transfer\n       Installing Chef Infra Client\n       Converging node\n       * apt_package[nginx] action install - install version 1.18.0\n       * service[nginx] action enable - enable service\n       * service[nginx] action start - start service\n       Chef Infra Client finished, 3/10 resources updated',
        explain: 'Test Kitchen 在 Docker/VM 中模拟真实节点测试 cookbook。converge 执行 recipe；verify 运行 InSpec 测试；destroy 清理环境。'
      },
      {
        title: '上传到 Chef Server 并应用',
        cmd: 'knife cookbook upload webserver\nknife node run_list add web-node-01 "recipe[webserver]"\n\n# 在目标节点上执行\nssh web-node-01 "sudo chef-client"',
        output: 'Uploading webserver [1.0.0]\nUploaded 1 cookbook.\nweb-node-01:\n  run_list: recipe[webserver]\n\n[web-node-01] Starting Chef Infra Client Run\n[web-node-01] Converging 3 resources\n[web-node-01] Chef Infra Client finished, 3 resources updated in 12 seconds',
        explain: 'Chef Server 是中心化的 cookbook 仓库和节点管理。每个节点定期运行 chef-client 拉取最新 recipe 并收敛到期望状态。'
      }
    ],
    diagnosis: [
      {
        symptom: 'chef-client 运行报 CookbookNotFound: cookbook webserver not found',
        cause: 'cookbook 未上传到 Chef Server，或节点的 environment/role 限制了 cookbook 版本',
        fix: 'knife cookbook list 确认 cookbook 已上传；检查 environment 文件中的 cookbook_versions 约束；确认 node 的 environment 设置正确 knife node environment set <node> <env>'
      },
      {
        symptom: 'Recipe 幂等性破坏：每次 chef-client 都重新安装/重启',
        cause: '资源声明缺少 guard 条件，或 template 源文件每次都变（如包含时间戳）',
        fix: '添加 not_if/only_if 守卫：not_if { ::File.exist?("/etc/nginx/installed") }；确保 template 变量不包含动态值；用 notifies :reload 代替 :restart 减少不必要重启'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 Chef cookbook，安装 Docker 并启动一个 Redis 容器',
        hint: 'package[docker.io] + execute[docker run redis] + service 资源',
        answer: 'package "docker.io" do action :install end → service "docker" do action [:enable, :start] end → execute "start redis" do command "docker run -d --name redis -p 6379:6379 redis:7" not_if "docker ps | grep redis" end'
      },
      {
        level: '进阶',
        task: '使用 Chef Roles 和 Environments 实现多环境部署 (dev/staging/prod 使用不同 cookbook 版本和属性)',
        hint: 'knife role create + knife environment create + cookbook_versions 约束',
        answer: 'roles/web.rb: name "web", run_list "recipe[webserver]", default_attributes(webserver: {domain: "example.com"}) → environments/production.rb: name "production", cookbook_versions({"webserver" => "= 2.0.0"}), override_attributes(webserver: {ssl: true}) → knife node environment set prod-node production'
      }
    ]
  },

  "h9vVPOmdUSeEGVQQaSTH5": {
    mentalModel: 'Ansible 是基础设施的"无代理指挥官"——通过 SSH 远程执行 YAML 剧本 (Playbook)，无需在目标机器安装 agent，像远程批量执行指令的超级脚本',
    handsOn: [
      {
        title: '安装 Ansible 并配置 inventory',
        cmd: 'pip install ansible\n\ncat > inventory.ini << \'EOF\'\n[webservers]\nweb1.example.com ansible_user=deploy\nweb2.example.com ansible_user=deploy\n\n[databases]\ndb1.example.com ansible_user=deploy\n\n[all:vars]\nansible_ssh_private_key_file=~/.ssh/id_ed25519\nansible_python_interpreter=/usr/bin/python3\nEOF\n\nansible all -i inventory.ini -m ping',
        output: 'web1.example.com | SUCCESS => {\n    "ping": "pong"\n}\nweb2.example.com | SUCCESS => {\n    "ping": "pong"\n}\ndb1.example.com | SUCCESS => {\n    "ping": "pong"\n}',
        explain: 'Ansible 用 SSH 连接目标机器执行模块。inventory 定义主机分组和连接参数。-m ping 测试连通性。无需在目标机器安装任何 agent。'
      },
      {
        title: '编写并运行 Playbook',
        cmd: 'cat > site.yml << \'YAML\'\n---\n- name: Configure web servers\n  hosts: webservers\n  become: true\n  vars:\n    nginx_worker_processes: auto\n  tasks:\n    - name: Install Nginx\n      ansible.builtin.apt:\n        name: nginx\n        state: present\n        update_cache: true\n\n    - name: Configure Nginx\n      ansible.builtin.template:\n        src: templates/nginx.conf.j2\n        dest: /etc/nginx/nginx.conf\n      notify: Restart Nginx\n\n    - name: Ensure Nginx is running\n      ansible.builtin.service:\n        name: nginx\n        state: started\n        enabled: true\n\n  handlers:\n    - name: Restart Nginx\n      ansible.builtin.service:\n        name: nginx\n        state: restarted\nYAML\n\nansible-playbook -i inventory.ini site.yml',
        output: 'PLAY [Configure web servers] ****\nTASK [Install Nginx] ****\nchanged: [web1.example.com]\nchanged: [web2.example.com]\nTASK [Configure Nginx] ****\nchanged: [web1.example.com]\nchanged: [web2.example.com]\nRUNNING HANDLER [Restart Nginx] ****\nchanged: [web1.example.com]\nchanged: [web2.example.com]\nPLAY RECAP ****\nweb1.example.com: ok=4 changed=3\nweb2.example.com: ok=4 changed=3',
        explain: 'Playbook 是 Ansible 的核心——YAML 格式定义目标主机、变量、任务列表。handlers 只在 notify 触发时执行。幂等设计：重复运行只改变需要变的部分。'
      },
      {
        title: '使用 Roles 组织代码',
        cmd: 'ansible-galaxy init roles/nginx\n\n# 自动生成目录结构\ntree roles/nginx/\n\n# 使用 role\ncat > site.yml << \'YAML\'\n---\n- hosts: webservers\n  become: true\n  roles:\n    - role: nginx\n      vars:\n        nginx_port: 80\n    - role: common\nYAML\n\nansible-playbook -i inventory.ini site.yml',
        output: '- /home/user/roles/nginx was created successfully\n\nroles/nginx/\n├── defaults/main.yml\n├── files/\n├── handlers/main.yml\n├── meta/main.yml\n├── README.md\n├── tasks/main.yml\n├── templates/\n└── vars/main.yml',
        explain: 'Roles 是 Ansible 的代码复用单元。每个 role 有标准化的目录结构。ansible-galaxy 可从 Ansible Galaxy 社区下载现成 roles（如 geerlingguy.docker）。'
      },
      {
        title: 'Ansible Vault 管理敏感数据',
        cmd: 'ansible-vault create group_vars/all/vault.yml\n# 输入密码后编辑 YAML\n\n# 内容：\n# vault_db_password: s3cret!\n# vault_api_key: abc123\n\nansible-playbook -i inventory.ini site.yml --ask-vault-pass\n\n# 或使用 vault 密码文件\necho "my-vault-pass" > .vault_pass\nansible-playbook -i inventory.ini site.yml --vault-password-file .vault_pass',
        output: 'New Vault password:\nConfirm New Vault password:\nEncryption successful\n\nPLAY [Configure web servers] ****\n...\nVault password: \nPLAY RECAP ****',
        explain: 'Ansible Vault 用 AES-256 加密敏感变量。加密文件可安全提交到 Git。引用方式与其他变量相同——Ansible 自动解密。建议每项目一个 vault 密码文件。'
      }
    ],
    diagnosis: [
      {
        symptom: 'UNREACHABLE! SSH Error: Permission denied (publickey)',
        cause: 'Ansible 无法通过 SSH 连接目标主机——密钥未部署、用户错误、或 SSH 配置不匹配',
        fix: 'Ansible 依赖 SSH 连接，任何 SSH 问题都会导致 UNREACHABLE。',
        },
      {
        symptom: 'Playbook 运行报错 module not found: ansible.builtin.xxx',
        cause: 'Ansible 版本过低不包含该模块，或使用了完全限定名 (FQCN) 但安装了错误的 collection',
        fix: 'ansible --version 确认版本；用 ansible-doc -l | grep xxx 查看可用模块；如需第三方 collection：ansible-galaxy collection install community.general；旧版本可用短名 (apt 代替 ansible.builtin.apt)'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 Playbook 在三台服务器上安装 Docker，创建 docker 组，并将 deploy 用户加入该组',
        hint: 'apt 模块安装 + group 模块 + user 模块 append groups',
        answer: 'tasks: [{name: Install Docker, apt: {name: docker.io, state: present}}, {name: Ensure docker group, group: {name: docker, state: present}}, {name: Add user to docker, user: {name: deploy, groups: docker, append: true}}, {name: Restart Docker, service: {name: docker, state: restarted}}]'
      },
      {
        level: '进阶',
        task: '使用 Ansible 实现滚动更新：逐台从负载均衡器摘除 → 部署新版本 → 健康检查 → 重新加入，期间零停机',
        hint: 'serial: 1 + pre_tasks (deregister) + tasks (deploy) + post_tasks (register) + wait_for 健康检查',
        answer: 'playbook: serial: 1 → pre_tasks: [uri: url=http://lb/deregister?host={{inventory_hostname}}] → tasks: [git: repo=... dest=/app, command: docker compose up -d] → post_tasks: [wait_for: port=8080 delay=5, uri: url=http://lb/register?host={{inventory_hostname}}] → 配合 max_fail_percentage: 0 确保失败立即停止'
      }
    ]
  },

// DevOps 深度学习内容 — Batch 3 (35 nodes)
// 格式：直接 TS 对象条目，无 import/export

  // 71. Splunk
  "dZID_Y_uRTF8JlfDCqeqs": {
    mentalModel: 'Splunk 是机器数据的「全文检索引擎 + 可视化仪表盘」——把散落在几百台服务器上的日志、指标、事件汇聚到一个地方，用 SPL 语言像查数据库一样查询它们，就像给整个基础设施装了一个可搜索的监控摄像头。',
    handsOn: [
      {
        title: '安装 Splunk Free 并导入示例数据',
        cmd: 'docker run -d --name splunk -p 8000:8000 -e "SPLUNK_START_ARGS=--accept-license" -e "SPLUNK_PASSWORD=changeme123" splunk/splunk:latest',
        output: 'a1b2c3d4e5f6... (container id)\nWaiting for splunk to start...\nSplunk> Free license active. Web UI at http://localhost:8000',
        explain: 'Splunk 官方 Docker 镜像启动后，8000 端口提供 Web 管理界面。Free 版每天可索引 500MB 数据，足够学习用。首次登录用户名 admin、密码 changeme123。'
      },
      {
        title: '用 SPL 查询最近 1 小时的错误日志',
        cmd: 'index=main sourcetype=syslog level=ERROR earliest=-1h | stats count by host, message | sort -count | head 10',
        output: 'host              message                              count\nweb-01            Connection refused to db             47\nweb-03            Timeout waiting for response         32\napi-02            NullPointerException in handler      18',
        explain: 'SPL（Search Processing Language）是 Splunk 的核心查询语言。管道 | 把搜索结果依次传给 stats（聚合）、sort（排序）、head（截取）。这跟 SQL 的 GROUP BY + ORDER BY + LIMIT 等价，但操作的是实时日志流。'
      },
      {
        title: '创建告警：5 分钟内错误超过阈值时触发',
        cmd: '| search index=main level=ERROR\n| timechart span=5m count\n| where count > 50\n# 在 Splunk Web: Settings > Searches, Reports, Alerts > New Alert\n# Schedule: every 5 minutes, Trigger: number of results > 0\n# Action: Send email to ops-team@company.com',
        output: 'Alert "High Error Rate" saved. Next scheduled run: 2024-03-15T10:05:00Z\nTrigger condition: count > 0 in 5-minute window',
        explain: 'Splunk 告警本质是一个定时执行的 SPL 查询 + 触发动作。当查询返回结果时（即 5 分钟内错误 >50 条），执行预设动作（邮件/Slack/Webhook）。生产环境通常配合 PagerDuty 或 OpsGenie 做分级通知。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Splunk 搜索极慢，一个 24 小时的查询要跑好几分钟',
        cause: '未使用 tstats 或数据模型加速，直接在原始事件上做全量扫描。当数据量超过几百万条时，raw search 会逐条扫描。',
        fix: '对高频查询建立 Data Model 并开启 Acceleration（自动建摘要索引）；使用 tstats 代替 stats 查询摘要数据；合理设置 index 的 time-based bucket 大小。'
      },
      {
        symptom: 'Forwarder 发送的数据在 Splunk 中搜不到',
        cause: 'Forwarder 的 outputs.conf 配置的接收端口与 Indexer 的 inputs.conf 不一致，或者 Indexer 未开启 9997 端口的 receiving。',
        fix: '在 Indexer 上执行 splunk enable listen 9997；检查 Forwarder 的 /opt/splunkforwarder/etc/system/local/outputs.conf 中 server=indexer:9997 是否正确；用 splunk list forward-server 确认连接状态。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 SPL 查询，统计过去 24 小时每个 HTTP 状态码的请求数量，并按数量降序排列',
        hint: '使用 index=web status=* | stats count by status',
        answer: 'index=web status=* earliest=-24h | stats count by status | sort -count'
      },
      {
        level: '进阶',
        task: '设计一个 Splunk Dashboard，包含三个面板：实时错误率折线图、Top 10 错误主机柱状图、告警历史表格',
        hint: '使用 Simple XML 定义 <dashboard>，每个面板用 <panel> 包裹 <chart> 或 <table>',
        answer: '在 Splunk Web 的 Dashboard 编辑器中创建三个 panel：Panel1 用 timechart span=1m count(level=ERROR)；Panel2 用 top limit=10 host WHERE level=ERROR；Panel3 用 saved search "Alert History" 渲染为 table。XML 中用 <option name="charting.chart">line</option> 控制图表类型。'
      }
    ],
  },

  // 72. 配置管理
  "V9sOxlNOyRp0Mghl7zudv": {
    mentalModel: '配置管理是基础设施的「版本控制 + 自动同步」——你在中心仓库声明"所有 Web 服务器应该长什么样"，工具自动让每台机器收敛到这个期望状态，就像 Git 让代码保持同步一样。',
    handsOn: [
      {
        title: '对比手动配置 vs 配置管理的灾难恢复',
        cmd: '# 场景：10 台 Nginx 服务器需要统一修改 TLS 配置\n# 手动方式（容易遗漏）\nfor host in web-{01..10}; do\n  ssh $host "sed -i \'s/TLSv1.1/TLSv1.2/\' /etc/nginx/nginx.conf && systemctl reload nginx"\ndone\n\n# Ansible 方式（声明式、幂等、可审计）\nansible webservers -m template -a "src=nginx.conf.j2 dest=/etc/nginx/nginx.conf" --become\nansible webservers -m service -a "name=nginx state=reloaded" --become',
        output: 'web-01 | CHANGED => {"changed": true, "state": "started"}\nweb-02 | SUCCESS => {"changed": false, "state": "started"}\nweb-03 | CHANGED => {"changed": true, "state": "started"}\n...(10/10 台全部确认)',
        explain: '手动 SSH 循环有三个致命问题：1) 某台机器可能 SSH 超时但你没注意到 2) 无法确认每台机器的最终状态 3) 没有审计记录。配置管理工具保证幂等性——重复执行不会出错，且每次执行都有完整的变更报告。'
      },
      {
        title: '理解配置漂移检测',
        cmd: 'ansible-playbook audit.yml --check --diff',
        output: 'TASK [Check sshd_config] ****\nweb-03 | changed => {"diff": {"before": "PermitRootLogin yes\\n", "after": "PermitRootLogin no\\n"}}\nTASK [debug] ****\nweb-03 | DRIFT DETECTED on web-03',
        explain: '配置漂移是指机器实际状态偏离了预期配置——可能是有人手动登录改了配置，或者其他工具覆盖了。--check --diff 做"干跑"检测差异但不实际修改，这是生产环境做合规审计的标准做法。'
      },
      {
  title: '配置管理的四个层次',
  cmd: '# 见下方说明',
  explain: '**Level 1: 脚本化**: Shell/Python 脚本 + cron——最原始的方式，没有幂等保证，难以扩展到百台以上机器。适合 <5 台的小环境。\n\n**Level 2: 配置管理工具**: Ansible/Puppet/Chef/Salt——声明式描述期望状态，自动收敛，有变更报告。这是大多数团队的起步点。\n\n**Level 3: 不可变基础设施**: Packer + Terraform——不修改运行中的服务器，而是构建新镜像替换旧实例。消除配置漂移的根源。\n\n**Level 4: GitOps**: Git 仓库作为唯一配置源，ArgoCD/Flux 自动同步——配置变更必须经过 PR 审核，自动检测并修复漂移。'
}
    ],
    diagnosis: [
      {
        symptom: 'Ansible playbook 在部分主机上失败，但整体报 SUCCESS',
        cause: 'playbook 中设置了 ignore_errors: yes 或者 max_fail_percentage 过高，导致部分失败被吞掉。',
        fix: '去掉 ignore_errors，改用 failed_when 精确控制失败条件；用 ansible-inventory --list 确认 host group 包含所有目标机器。'
      },
      {
        symptom: '配置管理执行后服务挂了，但工具报告一切正常',
        cause: '配置变更没有触发服务重启（notify/handler 遗漏），或者配置语法正确但语义错误（如端口冲突）。',
        fix: '在每个配置变更后添加 health check task；使用 handler 确保配置变更触发服务重启；添加 post-validation 步骤验证服务状态。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Ansible 写一个 role，确保所有服务器的 /etc/motd 显示主机名和当前时间，并保证幂等',
        hint: '使用 template 模块 + motd.j2 模板，Jinja2 中用 {{ ansible_hostname }}',
        answer: 'roles/motd/templates/motd.j2: "Welcome to {{ ansible_hostname }}\\nLast managed: {{ ansible_date_time.iso8601 }}"。tasks/main.yml: "- template: src=motd.j2 dest=/etc/motd owner=root mode=0644"。template 模块自带幂等——模板内容不变时不会触发写入。'
      },
      {
        level: '进阶',
        task: '设计一个配置漂移自动修复方案：检测到漂移后自动创建 PR 而不是直接修复',
        hint: '结合 Ansible --check + Git + CI pipeline',
        answer: '1) cron 定时跑 ansible-playbook --check --diff 2) 解析 diff 输出发现漂移 3) 在 Git 仓库修改配置使其匹配实际状态 4) 创建 PR 由人工审核 5) 合并后自动执行 ansible-playbook 收敛。'
      }
    ],
  },

  // 73. Provisioning
  "1oYvpFG8LKT1JD6a_9J0m": {
    mentalModel: 'Provisioning 是基础设施的「自动售货机」——你投入一段声明式代码（我要 3 台 4C8G 的 VM + 1 个负载均衡器），它就自动在云平台上创建、连接、配置好这些资源，就像自动售货机投币出货一样确定。',
    handsOn: [
      {
        title: '用 Terraform 在 AWS 上 Provision 一台 EC2',
        cmd: 'cat > main.tf << \'EOF\'\nprovider "aws" {\n  region = "ap-northeast-1"\n}\nresource "aws_instance" "web" {\n  ami           = "ami-0c7217cdde317cfec"\n  instance_type = "t3.micro"\n  tags = { Name = "devops-lab" }\n}\nEOF\nterraform init && terraform plan',
        output: 'Terraform will perform the following actions:\n  # aws_instance.web will be created\n  + resource "aws_instance" "web" {\n      + ami           = "ami-0c7217cdde317cfec"\n      + instance_type = "t3.micro"\n    }\nPlan: 1 to add, 0 to change, 0 to destroy.',
        explain: 'terraform plan 是干跑——只计算差异，不实际创建。Terraform 通过比较 .tf 文件（期望状态）和 terraform.tfstate（当前状态）计算出需要做的操作。'
      },
      {
  title: 'Provisioning vs Configuration 的区别',
  cmd: '# 见下方说明',
  explain: '**Provisioning（创建基础设施）**: 负责从无到有创建资源：VM、网络、数据库实例、DNS 记录。工具：Terraform, CloudFormation, Pulumi。关注资源的生命周期（create/update/destroy）。\n\n**Configuration（配置软件）**: 负责在已有资源上安装和配置软件：装 Nginx、改配置、启服务。工具：Ansible, Puppet, Chef。关注软件状态的收敛（当前状态到期望状态）。\n\n**典型工作流**: Terraform provision 一台 EC2 + 安全组 → 输出 IP 到 inventory → Ansible 配置 Nginx + 应用部署。两者通过 terraform output 或 dynamic inventory 衔接。'
},
      {
        title: '用 terraform apply 执行并验证',
        cmd: 'terraform apply -auto-approve && terraform output',
        output: 'aws_instance.web: Creating...\naws_instance.web: Creation complete after 32s [id=i-0abc123def456]\nApply complete! Resources: 1 added, 0 changed, 0 destroyed.\n---\npublic_ip = "54.123.45.67"',
        explain: 'apply 执行 plan 中计算出的变更，完成后更新 tfstate 文件。terraform output 读取在 .tf 中声明的 output 变量——这是 Terraform 向下游工具传递信息（如 IP 地址）的标准方式。'
      }
    ],
    diagnosis: [
      {
        symptom: 'terraform apply 报 Error: State lock，无法执行',
        cause: '另一个 terraform 进程正在操作同一个 state 文件，state 被 DynamoDB/S3 锁住了。也可能是上次操作异常退出导致锁没有释放。',
        fix: '先用 terraform force-unlock <LOCK_ID> 释放锁（确认没有其他人正在操作后再执行）；检查 CI pipeline 是否有挂起的 terraform 进程。'
      },
      {
        symptom: 'terraform plan 显示要销毁并重建大量资源，但你只改了一个小参数',
        cause: '某些参数的修改会触发 force replacement（如修改 AWS EC2 的 AMI 或 VPC）。Terraform 无法原地修改这些属性，只能销毁重建。',
        fix: '仔细阅读 plan 输出中 "# forces replacement" 的标注；使用 terraform plan -target= 缩小操作范围；对生产环境使用 create_before_destroy lifecycle 策略避免停机。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Terraform 创建一个 AWS VPC（10.0.0.0/16）+ 一个公有子网（10.0.1.0/24）+ Internet Gateway，并在子网中启动一台 EC2',
        hint: '需要 aws_vpc, aws_subnet, aws_internet_gateway, aws_route_table, aws_route_table_association, aws_instance 六个资源',
        answer: '依次定义：aws_vpc { cidr_block = "10.0.0.0/16" }、aws_subnet { vpc_id, cidr_block = "10.0.1.0/24", map_public_ip_on_launch = true }、aws_internet_gateway { vpc_id }、route_table 中添加 0.0.0.0/0 指向 igw、association 绑定子网和路由表、instance 指定 subnet_id。'
      },
      {
        level: '进阶',
        task: '设计一个多环境 Provisioning 方案：dev/staging/prod 使用相同代码但不同参数，且 prod 需要手动审批',
        hint: '使用 Terraform workspaces + .tfvars + CI pipeline 中的 approval gate',
        answer: '目录结构：environments/{dev,staging,prod}/terraform.tfvars + 共享的 modules/。CI pipeline 中 dev 自动 apply，staging 需要 team lead 审批，prod 需要 SRE + 业务方双人审批。用 terraform workspace select prod 切换环境，-var-file 加载对应参数。'
      }
    ],
  },

  // 74. Salt (SaltStack)
  "Kumwd6XOlEMeDohDH0q9P": {
    mentalModel: 'Salt 是配置管理工具中的「高速广播系统」——它用 ZeroMQ 消息总线同时向成千上万台 minion 广播指令，像广播电台一样一对多推送，特别适合大规模（千台以上）基础设施的并行管理。',
    handsOn: [
      {
        title: '安装 Salt Master + Minion 并建立连接',
        cmd: '# Master 端\ndocker run -d --name salt-master -h salt-master -p 4505:4505 -p 4506:4506 saltstack/salt:latest\n# Minion 端\ndocker run -d --name salt-minion -h minion-01 -e SALT_MASTER=salt-master saltstack/salt-minion:latest\n# Master 接受密钥\ndocker exec salt-master salt-key -A -y',
        output: 'The following keys are going to be accepted:\nUnaccepted Keys:\nminion-01\nKey for minion minion-01 accepted.\n\ndocker exec salt-master salt \'*\' test.ping\nminion-01:\n    True',
        explain: 'Salt 使用 Master-Minion 架构，通过 ZeroMQ 通信（端口 4505 发布/订阅，4506 请求/响应）。Minion 首次连接需要 Master 接受其公钥——这是双向认证，比 Ansible 的 SSH 方式更适合大规模场景。'
      },
      {
        title: '编写 Salt State (SLS) 管理 Nginx',
        cmd: 'cat > /srv/salt/nginx.sls << \'EOF\'\nnginx:\n  pkg.installed: []\n  service.running:\n    - enable: True\n    - require:\n      - pkg: nginx\n\n/etc/nginx/nginx.conf:\n  file.managed:\n    - source: salt://nginx/nginx.conf\n    - user: root\n    - mode: \'0644\'\n    - watch_in:\n      - service: nginx\nEOF\nsalt \'web-*\' state.apply nginx',
        output: 'web-01:\n  ID: nginx\n  Function: pkg.installed\n  Result: True\n  Comment: Package nginx is already installed\n  ID: /etc/nginx/nginx.conf\n  Function: file.managed\n  Result: True\n  Comment: File updated\n  ID: nginx\n  Function: service.running\n  Result: True\n  Comment: Service restarted (triggered by watch)',
        explain: 'Salt State 是声明式的 YAML，描述期望状态而非操作步骤。watch_in 实现了配置文件变更时自动重启服务——类似 Ansible 的 handler，但 Salt 用"监听"而非"通知"的方式，语义更清晰。'
      },
      {
        title: 'Salt 的 Grains 和 Pillar 系统',
        cmd: '# Grains = Minion 自动采集的静态信息\nsalt \'*\' grains.item os osrelease cpu_model\n# Pillar = Master 端定义的秘密/差异化数据\nsalt \'web-01\' pillar.items',
        output: 'web-01:\n    os: Ubuntu\n    osrelease: 22.04\n    cpu_model: Intel Xeon Platinum 8375C\n\nweb-01:\n    ssl_cert: /etc/ssl/certs/web.pem\n    max_workers: 8',
        explain: 'Grains 是 Minion 端自动采集的事实（类似 Ansible facts），用于目标匹配。Pillar 是 Master 端管理的敏感数据（密码、证书路径），只有目标 Minion 能看到自己的 Pillar，实现了数据的分层隔离。'
      }
    ],
    diagnosis: [
      {
        symptom: 'salt * test.ping 某些 Minion 无响应',
        cause: 'Minion 进程挂了、网络不通、或者密钥被 Master 拒绝/删除了。也可能是 ZeroMQ 的 pub socket 队列满了。',
        fix: '检查 Minion 进程：systemctl status salt-minion；检查密钥状态：salt-key -L；大规模无响应时检查 Master 的 worker_threads 配置（默认 5，千台以上建议 50+）。'
      },
      {
        symptom: 'state.apply 报 Rendering SLS failed: Jinja variable dict object has no attribute',
        cause: 'State 文件中引用了 Pillar 或 Grains 中不存在的键。常见于新 Minion 还没分配 Pillar 数据。',
        fix: '用 salt minion-id pillar.items 确认数据存在；在 SLS 中用 Jinja 默认值：pillar.get(\'key\', \'default_value\')。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 Salt State，在所有 CentOS 机器上安装 httpd，在所有 Ubuntu 机器上安装 apache2，使用同一份 SLS',
        hint: '使用 Grains 条件判断和 Jinja',
        answer: '在 SLS 中用 Jinja：{% set pkg = \'httpd\' if grains[\'os\'] == \'CentOS\' else \'apache2\' %}，然后 apache: pkg.installed: - name: {{ pkg }}。也可以用 grains.filter_by 做多 OS 映射。'
      },
      {
        level: '进阶',
        task: '设计 Salt 的 Orchestration Runner 实现滚动更新：先更新 25% 的 Minion，健康检查通过后再更新剩余 75%',
        hint: '使用 salt-run state.orchestrate + batch 参数',
        answer: '编写 orchestrate SLS：1) 选取 25% Minion 执行 state.apply 2) 用 salt.function http.query 做健康检查 3) 条件判断全部 200 后对剩余 75% 执行。或者用 salt -b \'25%\' state.apply update 利用内置 batch 模式。'
      }
    ],
  },

  // 75. Puppet
  "yP1y8U3eblpzbaLiCGliU": {
    mentalModel: 'Puppet 是配置管理领域的「声明式合同法」——你用 Puppet 语言写一份资源合同（Manifest），Puppet Agent 定期（默认 30 分钟）检查机器现状是否违反合同，违反则自动修正，就像审计师定期查账。',
    handsOn: [
      {
        title: '安装 Puppet Server 并编写第一个 Manifest',
        cmd: 'docker run -d --name puppet -h puppet -p 8140:8140 puppet/puppetserver-standalone\n\ncat > ntp.pp << \'EOF\'\nclass ntp {\n  package { \'chrony\':\n    ensure => installed,\n  }\n  service { \'chronyd\':\n    ensure  => running,\n    enable  => true,\n    require => Package[\'chrony\'],\n  }\n  file { \'/etc/chrony.conf\':\n    content => template(\'ntp/chrony.conf.erb\'),\n    notify  => Service[\'chronyd\'],\n  }\n}\nEOF',
        output: 'Puppet Server started on port 8140\nManifest compiled successfully.\nCatalog compiled for agent-01.example.com',
        explain: 'Puppet 的核心概念是 Resource（资源）：package、service、file 都是资源类型。ensure => installed 声明期望状态。require 和 notify 定义依赖关系——Puppet 自动构建 DAG 确定执行顺序。'
      },
      {
        title: '理解 Puppet 的 Catalog 编译过程',
        cmd: 'puppet agent --test --debug --verbose',
        output: 'Info: Retrieving pluginfacts\nInfo: Loading facts\nInfo: Caching catalog for agent-01.example.com\nInfo: Applying configuration version 1710495600\nNotice: /Stage[main]/Ntp/Package[chrony]/ensure: created\nNotice: /Stage[main]/Ntp/File[/etc/chrony.conf]/content: content changed\nNotice: /Stage[main]/Ntp/Service[chronyd]: Triggered refresh from 1 event\nNotice: Applied catalog in 3.42 seconds',
        explain: 'Puppet 的工作流程：Agent 发送 Facts → Server 用 Facts + Manifests 编译 Catalog（执行计划）→ Agent 执行 Catalog。Catalog 是一个 JSON 文档，描述了在这台机器上需要做什么。'
      },
      {
        title: 'Puppet Module 和 Puppet Forge',
        cmd: 'puppet module install puppetlabs-nginx --version 4.0.0\npuppet module list --tree',
        output: '/etc/puppetlabs/code/environments/production/modules\n+-- puppetlabs-nginx (v4.0.0)\n+-- puppetlabs-stdlib (v9.0.0)  [dependency]\n+-- puppetlabs-concat (v9.0.0)  [dependency]',
        explain: 'Puppet Forge 是官方的模块市场，提供经过测试的标准化配置。生产环境推荐用社区模块而不是手写 Manifest——它们处理了跨平台兼容性、SELinux、防火墙等边界情况。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Puppet Agent 报 Could not retrieve catalog: Error 400',
        cause: 'Server 端 Manifest 编译失败——通常是语法错误、依赖的 Facts 缺失、或者 Module 版本不兼容。',
        fix: '在 Server 上执行 puppet parser validate manifests/*.pp 检查语法；查看 puppetserver.log 获取详细编译错误；用 puppet apply --noop 在本地测试。'
      },
      {
        symptom: 'Puppet run 成功但服务没启动',
        cause: 'Service 资源的 name 参数与实际 systemd 服务名不匹配，或者 provider 检测错了 init 系统。',
        fix: '用 puppet resource service nginx 查看 Puppet 认为的服务状态；在 Service 资源中显式指定 provider => systemd 和 hasstatus => true。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 Puppet Class 管理 SSH：确保 openssh-server 已安装、sshd_config 禁止 root 登录、sshd 服务正在运行',
        hint: '使用 package, file, service 三个资源，通过 require/notify 建立依赖链',
        answer: 'class ssh_hardening { package { \'openssh-server\': ensure => installed } file { \'/etc/ssh/sshd_config\': ensure => file, content => template(\'ssh/sshd_config.erb\'), require => Package[\'openssh-server\'], notify => Service[\'sshd\'] } service { \'sshd\': ensure => running, enable => true } }'
      },
      {
        level: '进阶',
        task: '使用 Hiera 实现环境差异化配置：dev 环境 Nginx worker_processes=2，prod 环境=auto',
        hint: '配置 hiera.yaml 的 hierarchy，在 dev.yaml 和 prod.yaml 中设置不同值',
        answer: 'hiera.yaml 配置 hierarchy 按 node/environment/common 三层查找。prod.yaml 中写 nginx::worker_processes: auto，dev.yaml 写 2。Manifest 中用 lookup(\'nginx::worker_processes\') 获取值。'
      }
    ],
  },

  // 76. Loki
  "w2eCgBC-ydMHSxh7LMti8": {
    mentalModel: 'Loki 是日志界的「只建索引不存全文」——它不像 ELK 那样给日志的每个字段建索引，而是只给标签（label）建索引，日志正文原样压缩存储。就像图书馆只在卡片目录里记录分类和作者，书本身放在书架上。',
    handsOn: [
      {
        title: '用 Docker Compose 部署 Loki + Promtail + Grafana',
        cmd: 'cat > docker-compose.yml << \'EOF\'\nversion: "3"\nservices:\n  loki:\n    image: grafana/loki:2.9.0\n    ports: ["3100:3100"]\n  promtail:\n    image: grafana/promtail:2.9.0\n    volumes: ["/var/log:/var/log"]\n  grafana:\n    image: grafana/grafana:latest\n    ports: ["3000:3000"]\nEOF\ndocker compose up -d',
        output: 'Container loki-loki-1      Started\nContainer loki-promtail-1  Started\nContainer loki-grafana-1   Started\n\ncurl -s http://localhost:3100/ready\nready',
        explain: 'Loki 的最小部署只需三个组件：Loki（存储+查询引擎）、Promtail（日志采集 Agent）、Grafana（可视化）。相比 ELK 省去了 Elasticsearch 和 Kibana 的资源开销。'
      },
      {
        title: '用 LogQL 查询日志',
        cmd: '# 查询错误日志\nlogcli query \'{job="nginx"} |= "error"\' --limit=5\n\n# 统计每个 status code 的请求数\ncurl -G -s "http://localhost:3100/loki/api/v1/query_range" \\\n  --data-urlencode \'query=sum by (status) (count_over_time({job="nginx"} | json | status >= 400 [1h]))\'',
        output: '[2024-03-15T10:23:45Z] level=error msg="connection refused" host=db-01\n[2024-03-15T10:23:46Z] level=error msg="query timeout" host=db-02\n\n{status="500"} 42\n{status="502"} 18\n{status="503"} 7',
        explain: 'LogQL 的语法灵感来自 PromQL。{job="nginx"} 是标签选择器（像 SQL WHERE），|= "error" 是行过滤（grep），| json 是解析器（提取 JSON 字段）。Loki 只索引标签，所以标签选择器是必须的。'
      },
      {
  title: 'Promtail 配置：采集 Docker 容器日志并添加标签',
  cmd: '# 见下方说明',
  explain: '**服务发现**: docker_sd_configs 自动发现运行中的容器，relabel_configs 把容器名和标签映射为 Loki 标签。\n\n**日志解析**: pipeline_stages 中用 json 解析器提取日志中的 level/msg 字段，再用 labels 把 level 提升为 Loki 标签。\n\n**标签设计原则**: 标签应该是低基数（<100 个唯一值）的分类信息，如 app、env、level。绝对不要把 request_id 或 user_id 做标签——会导致索引爆炸。'
}
    ],
    diagnosis: [
      {
        symptom: 'Loki 查询超时：context deadline exceeded',
        cause: '查询没有指定有效的标签选择器，导致 Loki 需要扫描全部日志块。',
        fix: '始终在查询中包含至少一个高选择性标签（如 {app="web"}）；缩短查询时间范围；对大时间范围的聚合查询配置 Recording Rules 预计算。'
      },
      {
        symptom: 'Promtail 采集的日志在 Loki 中搜不到',
        cause: 'Loki 的 ingestion_rate_limit 触发了限流，Promtail 推进了位置指针但数据被丢弃。',
        fix: '增大 limits_config.ingestion_rate_mb 和 ingestion_burst_size_mb；查看 Loki 的 /metrics 端点中 discarded_samples_total 指标。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 LogQL 编写查询：找出过去 5 分钟内 Nginx 返回 5xx 错误的请求，按路径分组统计',
        hint: '使用 {job="nginx"} | json | status >= 500 过滤，然后用 sum by (path)',
        answer: 'sum by (path) (count_over_time({job="nginx"} | json | status >= 500 [5m]))'
      },
      {
        level: '进阶',
        task: '设计 Loki 的多租户方案：开发团队只能看 dev 命名空间的日志，运维能看所有',
        hint: '使用 Loki 的 multi-tenancy + Nginx 反向代理注入 X-Scope-OrgID',
        answer: '1) 启用 auth_enabled: true 2) Promtail 根据 K8s namespace 设置 tenant_id 3) Nginx 代理根据用户角色注入 X-Scope-OrgID header 4) dev 用户注入 X-Scope-OrgID: dev，运维不注入（查全部）。'
      }
    ],
  },

  // 77. AWS CDK
  "XA__697KgofsH28coQ-ma": {
    mentalModel: 'AWS CDK 把 CloudFormation 的 JSON/YAML 模板变成了「用编程语言写的基础设施代码」——你用 TypeScript/Python 写类和对象来描述 AWS 资源，CDK 帮你编译成 CloudFormation 模板执行。就像用高级语言写代码然后编译成汇编。',
    handsOn: [
      {
        title: '初始化 CDK 项目并定义第一个 Stack',
        cmd: 'mkdir my-cdk-app && cd my-cdk-app\ncdk init app --language typescript',
        output: '@types/node installed\naws-cdk-lib installed\nApp synthesized successfully\n\nStack: MyCdkAppStack\nResources:\n  + AWS::S3::Bucket (LogsBucket)\n  + AWS::Lambda::Function (Handler)\n  + AWS::IAM::Role (ServiceRole)',
        explain: 'CDK 用编程语言的类型系统替代了 CloudFormation 的手动 JSON 编写。bucket.grantReadWrite(fn) 自动生成了 IAM Role、Policy、环境变量配置——手写 CloudFormation 需要 50+ 行 YAML。'
      },
      {
  title: 'CDK 的 Construct 三层抽象',
  cmd: '# 见下方说明',
  explain: '**L1 (CFN Resources)**: 1:1 映射 CloudFormation，如 new CfnBucket()。完全控制但繁琐，一般不直接使用。\n\n**L2 (Curated Constructs)**: 带默认值和便利方法，如 new s3.Bucket()。自动配置加密、访问日志等最佳实践。这是日常使用的主力。\n\n**L3 (Patterns)**: 多资源组合的最佳实践，如 new ecsPatterns.ApplicationLoadBalancedFargateService()。一行代码创建 ALB + ECS + Auto Scaling + CloudWatch。团队可以封装自己的 L3 Construct 作为内部标准。'
},
      {
        title: 'cdk synth 和 cdk diff 部署前预览',
        cmd: 'cdk synth > template.yaml\ncdk diff',
        output: 'Stack MyStack\nResources\n[+] AWS::Lambda::Function NewHandler\n[~] AWS::S3::Bucket LogsBucket\n    +-- [+] VersioningConfiguration: Enabled\n[-] AWS::EC2::Instance LegacyServer\n\nWarning: The following resources will be DESTROYED:\n  AWS::EC2::Instance LegacyServer',
        explain: 'cdk diff 是部署前的安全检查——显示即将发生的变更，特别标注会被销毁的资源。生产环境应该在 CI pipeline 中强制执行 cdk diff 并要求人工审批后才能 cdk deploy。'
      }
    ],
    diagnosis: [
      {
        symptom: 'cdk deploy 报 Stack is in UPDATE_ROLLBACK_FAILED state',
        cause: '上一次 CloudFormation 更新失败且回滚也失败——通常是某个资源在删除时仍被其他资源引用导致死锁。',
        fix: '登录 AWS Console 查看 Events 找到失败原因；手动解决依赖冲突；点击 Continue Update Rollback；或用 aws cloudformation continue-update-rollback。'
      },
      {
        symptom: 'CDK synth 生成的 IAM Policy 权限过宽（s3:* on *）',
        cause: '使用了手动编写的 PolicyStatement 配了 Action: ["s3:*"]，没有使用 CDK 内置的精确授权方法。',
        fix: '使用 CDK 内置的 grant 方法（如 bucket.grantRead, bucket.grantPut）；用 cdk nag 插件在 synth 阶段自动检测权限过宽的 Policy。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 CDK 创建一个 API Gateway + Lambda + DynamoDB 的 Serverless REST API',
        hint: '使用 aws-apigateway, aws-lambda, aws-dynamodb 模块',
        answer: '创建 DynamoDB Table（partition key: id），Lambda Function（CRUD handler），API Gateway LambdaRestApi。用 table.grantReadWriteData(fn) 授权。API Gateway 自动根据 Lambda 路由创建 REST 端点。'
      },
      {
        level: '进阶',
        task: '设计一个可复用的 VPC Construct，支持自定义子网数量和 NAT Gateway 策略，并编写单元测试',
        hint: '继承 Construct 类，用 @aws-cdk/assertions 编写测试',
        answer: 'class CustomVpc extends Construct，构造器中 new ec2.Vpc(this, \'Vpc\', { maxAzs, natGateways, subnetConfiguration })。测试用 Template.fromStack(stack).hasResourceProperties(\'AWS::EC2::VPC\', { CidrBlock: \'10.0.0.0/16\' }) 断言。'
      }
    ],
  },

  // 78. Elastic Stack (ELK)
  "K_qLhK2kKN_uCq7iVjqph": {
    mentalModel: 'ELK 是日志分析的「三件套流水线」——Logstash 负责采集和清洗（洗碗机），Elasticsearch 负责存储和搜索（超大索引柜），Kibana 负责可视化展示（仪表盘），三者配合把原始日志变成可查询、可分析、可告警的结构化数据。',
    handsOn: [
      {
        title: '用 Docker 快速搭建 ELK Stack',
        cmd: 'docker compose up -d  # elasticsearch + kibana + logstash\ncurl -s localhost:9200 | jq \'.cluster_name, .version.number\'',
        output: 'Container elk-elasticsearch-1  Started\nContainer elk-kibana-1         Started\nContainer elk-logstash-1       Started\n\n"docker-cluster"\n"8.12.0"\n\n# Kibana UI: http://localhost:5601',
        explain: 'ELK 启动顺序很重要：Elasticsearch 必须先就绪，Kibana 才能连接；Logstash 需要 Elasticsearch 地址。生产环境至少需要 3 个 ES 节点保证高可用。'
      },
      {
        title: 'Logstash Pipeline：从采集到输出',
        cmd: 'cat > logstash.conf << \'EOF\'\ninput {\n  beats { port => 5044 }\n}\nfilter {\n  grok {\n    match => { "message" => "%{COMBINEDAPACHELOG}" }\n  }\n  date {\n    match => ["timestamp", "dd/MMM/yyyy:HH:mm:ss Z"]\n  }\n  geoip { source => "clientip" }\n  mutate { remove_field => ["agent", "ecs"] }\n}\noutput {\n  elasticsearch {\n    hosts => ["http://elasticsearch:9200"]\n    index => "logs-%{+YYYY.MM.dd}"\n  }\n}\nEOF',
        output: 'Logstash started, pipeline main started\n{\n  "clientip" => "192.168.1.100",\n  "request" => "/api/users",\n  "response" => 200,\n  "bytes" => 1234,\n  "geoip" => { "country_name" => "China", "city_name" => "Beijing" },\n  "@timestamp" => 2024-03-15T10:29:58.000Z\n}',
        explain: 'Logstash Pipeline 三段式：input（从哪采集）→ filter（如何清洗）→ output（送到哪里）。grok 用正则解析非结构化文本，date 修正时间戳，geoip 添加地理位置。filter 阶段是 ELK 的核心价值。'
      },
      {
        title: 'Elasticsearch 查询',
        cmd: 'curl -s \'localhost:9200/logs-*/_search\' -H \'Content-Type: application/json\' -d \'{\n  "query": {\n    "bool": {\n      "must": [{ "match": { "level": "ERROR" } }],\n      "filter": [{ "range": { "@timestamp": { "gte": "now-1h" } } }]\n    }\n  },\n  "size": 5,\n  "sort": [{ "@timestamp": "desc" }]\n}\' | jq \'.hits.hits[]._source | {message, level, host}\'',
        output: '{ "message": "Connection pool exhausted", "level": "ERROR", "host": "api-03" }\n{ "message": "Timeout after 30000ms", "level": "ERROR", "host": "api-01" }',
        explain: 'Elasticsearch 的 bool query 组合多个条件：must（必须匹配，参与评分）、filter（必须匹配，不评分，可缓存）。Kibana 的 Index Pattern 把多个时间索引聚合为一个虚拟视图。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Elasticsearch 集群状态变为 Yellow 或 Red',
        cause: 'Yellow = 副本分片未分配（常见于单节点）。Red = 主分片未分配（节点宕机或磁盘超过 85% watermark）。',
        fix: 'Yellow: 单节点设 index.number_of_replicas: 0；生产检查离线节点。Red: GET _cluster/allocation/explain 查看原因；清理磁盘或增加节点。'
      },
      {
        symptom: 'Logstash 处理速度下降，日志积压',
        cause: 'filter 阶段有耗时操作（DNS lookup 阻塞）、ES 写入瓶颈（bulk queue 满）、或 JVM 频繁 GC。',
        fix: '启用 persistent queue 防数据丢失；增大 pipeline.workers 和 pipeline.batch.size；给网络操作添加 timeout；监控 node stats API 定位瓶颈。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 Logstash filter 解析：[2024-03-15 10:30:00] [ERROR] [web-01] Connection refused',
        hint: '使用 grok 模式匹配方括号内的字段',
        answer: 'filter { grok { match => { "message" => "\\[%{TIMESTAMP_ISO8601:timestamp}\\] \\[%{LOGLEVEL:level}\\] \\[%{DATA:host}\\] %{GREEDYDATA:msg}" } } date { match => ["timestamp", "yyyy-MM-dd HH:mm:ss"] } }'
      },
      {
        level: '进阶',
        task: '设计 ELK 的索引生命周期管理（ILM）：热数据 7 天 → 温数据 30 天 → 冷数据 90 天 → 删除',
        hint: '创建 ILM Policy 并关联 Index Template',
        answer: 'PUT _ilm/policy/logs-lifecycle { phases: { hot: { actions: { rollover: { max_size: "50gb", max_age: "1d" } } }, warm: { min_age: "7d", actions: { shrink, forcemerge } }, cold: { min_age: "30d", actions: { freeze } }, delete: { min_age: "90d", actions: { delete } } } }。在 Index Template 中关联此 policy。'
      }
    ],
  },

  // 79. CloudFormation
  "TgBb4aL_9UkyU36CN4qvS": {
    mentalModel: 'CloudFormation 是 AWS 原生的「基础设施蓝图系统」——你写一份 JSON/YAML 模板描述所有 AWS 资源及其关系，CloudFormation 负责创建、更新、删除整个资源栈。就像建筑蓝图交给施工队按图建楼。',
    handsOn: [
      {
        title: '编写第一个 CloudFormation 模板',
        cmd: 'cat > vpc-stack.yaml << \'EOF\'\nAWSTemplateFormatVersion: "2010-09-09"\nParameters:\n  Environment:\n    Type: String\n    Default: dev\n    AllowedValues: [dev, staging, prod]\nResources:\n  VPC:\n    Type: AWS::EC2::VPC\n    Properties:\n      CidrBlock: 10.0.0.0/16\n      Tags: [{ Key: Name, Value: !Sub "${Environment}-vpc" }]\n  PublicSubnet:\n    Type: AWS::EC2::Subnet\n    Properties:\n      VpcId: !Ref VPC\n      CidrBlock: 10.0.1.0/24\n      MapPublicIpOnLaunch: true\nOutputs:\n  VpcId:\n    Value: !Ref VPC\n    Export: { Name: !Sub "${Environment}-VpcId" }\nEOF\naws cloudformation validate-template --template-body file://vpc-stack.yaml',
        output: '{ "Parameters": [{ "ParameterKey": "Environment", "DefaultValue": "dev" }],\n  "Description": "VPC with public and private subnets" }',
        explain: '模板核心：Parameters（输入变量）、Resources（AWS 资源定义）、Outputs（对外暴露的值）。!Ref 引用资源 ID，!Sub 做字符串插值。validate-template 只检查语法不检查权限。'
      },
      {
        title: '部署、更新和变更集',
        cmd: 'aws cloudformation create-stack --stack-name dev-vpc --template-body file://vpc-stack.yaml --parameters ParameterKey=Environment,ParameterValue=dev\naws cloudformation wait stack-create-complete --stack-name dev-vpc\naws cloudformation create-change-set --stack-name dev-vpc --template-body file://vpc-v2.yaml --change-set-name v2-update',
        output: '"Changes": [{\n  "ResourceChange": {\n    "Action": "Modify",\n    "LogicalResourceId": "PublicSubnet",\n    "Replacement": "False"\n  }\n}]',
        explain: 'Change Set 是安全网——展示即将发生的变更。注意 Replacement 字段：True 意味着资源会被销毁重建，可能丢数据。'
      },
      {
  title: 'Stack 嵌套和跨 Stack 引用',
  cmd: '# 见下方说明',
  explain: '**嵌套 Stack**: 在父模板中用 AWS::CloudFormation::Stack 引用子模板，父管理子的生命周期。适合紧耦合的资源组。\n\n**跨 Stack Export/Import**: 网络 Stack 导出 VpcId，应用 Stack 用 !ImportValue shared-VpcId 引用。松耦合，独立部署。生产环境推荐此方式。\n\n**限制**: Export 被其他 Stack 引用时不能删除或改名。值的变更如果导致导出方资源替换，引用方也会受影响。'
}
    ],
    diagnosis: [
      {
        symptom: 'Export cannot be deleted as it is in use by app-stack',
        cause: '试图删除或修改一个被其他 Stack 引用的 Export 输出值。CloudFormation 禁止删除正在被 ImportValue 使用的导出。',
        fix: '先更新引用方 Stack（移除 ImportValue 引用），再更新导出方 Stack（删除 Export）。'
      },
      {
        symptom: 'Resource handler returned message: Resource not found 但资源确实存在',
        cause: 'Stack state 与实际 AWS 资源不一致——可能有人通过 Console 手动删除了资源。',
        fix: '使用 aws cloudformation detect-stack-drift 检测漂移；对关键资源设置 DeletionPolicy: Retain 防止意外删除。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写模板创建 ALB + 2 个 EC2 + Auto Scaling Group，EC2 通过 UserData 安装 Nginx',
        hint: '使用 LaunchTemplate + ASG + ALB，UserData 中用 #!/bin/bash',
        answer: '定义 ALB + Listener + TargetGroup，LaunchTemplate 的 UserData 执行 yum install nginx + systemctl start nginx。ASG 的 TargetGroupARNs 引用 TargetGroup，HealthCheckType 设为 ELB。'
      },
      {
        level: '进阶',
        task: '实现 CloudFormation 的蓝绿部署：创建新 Stack → 切换 DNS → 验证 → 删除旧 Stack',
        hint: '使用 Route53 Weighted Routing + CloudFormation Stack',
        answer: '1) 创建新 Stack（v2）2) 更新 Route53 权重从旧 90/新 10 逐步切换到旧 10/新 90 3) 每阶段用 CloudWatch Alarm 监控错误率 4) 全部切换后保留旧 Stack 24h 作为回滚方案。'
      }
    ],
  },

  // 80. TeamCity
  "L000AbzF3oLcn4B1eUIYX": {
    mentalModel: 'TeamCity 是 JetBrains 出品的「CI/CD 管家」——它管理构建队列、追踪每个提交的状态、在失败时自动通知责任人，特别适合已有 IntelliJ/IDEA 生态的 Java/Kotlin 团队。',
    handsOn: [
      {
        title: '用 Docker 启动 TeamCity Server + Agent',
        cmd: 'docker run -d --name teamcity-server -p 8111:8111 -v teamcity-data:/data/teamcity_server/datadir jetbrains/teamcity-server:latest\nsleep 120\ndocker run -d --name teamcity-agent -e SERVER_URL=http://teamcity-server:8111 jetbrains/teamcity-agent:latest',
        output: 'TeamCity Professional 2024.03 started on port 8111\nWeb UI: http://localhost:8111\nAgent authorized: 1 agent connected',
        explain: 'TeamCity 分 Server 和 Agent：Server 管理配置和调度，Agent 执行实际构建。Professional 版免费支持 3 个 Agent。Agent 首次连接需在 Server UI 中手动授权。'
      },
      {
  title: '配置 Kotlin DSL 构建流水线',
  cmd: '# 见下方说明',
  explain: '**settings.kts**: TeamCity 用 Kotlin DSL 定义构建配置——这是一个真正的编程语言文件，支持循环、条件、函数复用。比 YAML 更强大，适合复杂构建逻辑。\n\n**构建步骤**: steps { gradle { tasks = "clean build test" } } 定义一个 Gradle 构建步骤。支持 shell、docker、maven、npm 等多种步骤类型。\n\n**触发器和依赖**: triggers { vcs {} } 设置每次提交自动触发。dependencies { dependency(Build) { snapshot {} } } 定义构建链——Deploy 等 Build 完成后才执行。'
},
      {
        title: 'TeamCity 特色功能',
        cmd: '# 构建历史查看\n# Build #142: Success (3m 24s) - commit abc123 by alice\n# Build #141: Failed (2m 18s) - commit def456 by bob - "testLogin FAILED"\n# Build #140: Success (3m 12s) - commit ghi789 by carol\n\n# 构建参数化\necho "Deploying %env.VERSION% to %deploy.target%"',
        output: 'Build Configuration Summary:\n- Build steps: 3 (compile, test, package)\n- Triggers: VCS, Schedule (nightly)\n- Dependencies: Build -> Integration Test -> Deploy\n- Artifacts: target/*.jar => build-artifacts\n- Notifications: Slack on failure, Email on fix',
        explain: 'TeamCity 的杀手特性：1) 构建链（Build Chains）可视化依赖关系 2) 智能测试重跑（只重跑失败的测试）3) 合并队列（Merge Queue）防止坏代码合入主干 4) 与 IntelliJ 深度集成，IDE 内可查看构建状态。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Build Agent 显示 "unauthorized" 或 "disconnected"',
        cause: 'Agent 未在 Server UI 中授权，或 Agent 与 Server 的网络连接中断。Docker 环境中常见于容器重启后 Agent token 失效。',
        fix: '在 Server UI 的 Agents 页面点击 Authorize；检查 Agent 的 conf/buildAgent.properties 中 serverUrl 是否正确；确保 Agent 容器的 conf volume 是持久化的。'
      },
      {
        symptom: '构建排队时间很长，即使 Agent 显示空闲',
        cause: '构建配置的 Agent Requirements 与 Agent 不匹配（如要求 docker 但 Agent 没装），或者 Snapshot Dependency 导致构建在等待上游完成。',
        fix: '检查 Build Configuration 的 Agent Requirements 标签页；查看 Queue 中的 "Compatible Agents" 列为 0 的原因；适当放松 requirements 或安装所需工具。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Kotlin DSL 配置一个 Java 项目的 CI：编译 → 测试 → 打包 JAR → 上传 Artifact',
        hint: '使用 gradle 步骤类型，artifactRules 定义输出',
        answer: 'steps { gradle { tasks = "clean build" } }，artifactRules = "build/libs/*.jar => artifacts/"，triggers { vcs {} }，failureConditions { testFailure {} }。'
      },
      {
        level: '进阶',
        task: '配置 Build Chain：PR 提交 → 编译 → 单元测试（并行） → 集成测试 → 部署到 Staging',
        hint: '使用 snapshot dependencies 和 parallel builds',
        answer: '创建四个 BuildType：Compile、UnitTest（设置多个 Agent 并行）、IntegrationTest（依赖 Compile + UnitTest 的 snapshot）、DeployStaging（依赖 IntegrationTest）。在 DeployStaging 中添加 VCS trigger 限制只响应 master 分支。'
      }
    ],
  },

  // 81. Jenkins
  "dUapFp3f0Rum-rf_Vk_b-": {
    mentalModel: 'Jenkins 是 CI/CD 领域的「瑞士军刀」——它本身只是一个任务调度引擎，通过 1800+ 插件可以集成几乎所有工具链。灵活但复杂，像一个万能遥控器，需要自己配按钮。',
    handsOn: [
      {
        title: '用 Docker 启动 Jenkins 并安装推荐插件',
        cmd: 'docker run -d --name jenkins -p 8080:8080 -p 50000:50000 \\\n  -v jenkins-data:/var/jenkins_home \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  jenkins/jenkins:lts',
        output: 'Jenkins initial setup wizard\nhttp://localhost:8080\nUnlock code: cat /var/jenkins_home/secrets/initialAdminPassword\na1b2c3d4e5f6...\n\nInstall suggested plugins: Git, Pipeline, Docker, Blue Ocean, ...',
        explain: 'Jenkins 首次启动进入安装向导。推荐安装 suggested plugins 后再按需添加。挂载 docker.sock 让 Jenkins 容器内可以构建 Docker 镜像（Docker-in-Docker 模式）。'
      },
      {
        title: '编写 Declarative Pipeline (Jenkinsfile)',
        cmd: 'cat > Jenkinsfile << \'EOF\'\npipeline {\n    agent { docker { image \'maven:3.9-eclipse-temurin-17\' } }\n\n    environment {\n        DOCKER_REGISTRY = \'registry.company.com\'\n        IMAGE_TAG = "${env.BUILD_NUMBER}"\n    }\n\n    stages {\n        stage(\'Build\') {\n            steps {\n                sh \'mvn clean package -DskipTests\'\n            }\n        }\n        stage(\'Test\') {\n            steps {\n                sh \'mvn test\'\n            }\n            post {\n                always {\n                    junit \'target/surefire-reports/*.xml\'\n                }\n            }\n        }\n        stage(\'Docker Build & Push\') {\n            when { branch \'main\' }\n            steps {\n                sh "docker build -t ${DOCKER_REGISTRY}/myapp:${IMAGE_TAG} ."\n                sh "docker push ${DOCKER_REGISTRY}/myapp:${IMAGE_TAG}"\n            }\n        }\n    }\n    post {\n        failure { slackSend color: \'danger\', message: "Build failed: ${env.JOB_NAME}#${env.BUILD_NUMBER}" }\n        success { slackSend color: \'good\', message: "Deployed: ${env.JOB_NAME}#${env.BUILD_NUMBER}" }\n    }\n}\nEOF',
        output: '[Pipeline] stage: Build\n[Pipeline] sh: mvn clean package -DskipTests\nBUILD SUCCESS in 45s\n[Pipeline] stage: Test\n[Pipeline] sh: mvn test\nTests run: 142, Failures: 0, Errors: 0\n[Pipeline] stage: Docker Build & Push\nSuccessfully tagged registry.company.com/myapp:42\nPushed successfully\n[Pipeline] slackSend: Deployed: myapp#42',
        explain: 'Declarative Pipeline 是 Jenkins 推荐的流水线语法。agent 定义执行环境（这里是 Docker 容器），stages 定义步骤，post 定义后置动作。when 条件控制阶段是否执行。Jenkinsfile 存放在代码仓库中，实现了 Pipeline as Code。'
      },
      {
        title: 'Jenkins Shared Library 实现 DRY',
        cmd: '# vars/deployToK8s.groovy\ndef call(String env, String image) {\n    stage("Deploy to ${env}") {\n        sh "kubectl set image deployment/myapp myapp=${image} -n ${env}"\n        sh "kubectl rollout status deployment/myapp -n ${env} --timeout=120s"\n    }\n}\n\n# Jenkinsfile 中使用\n@Library(\'my-shared-lib\') _\npipeline {\n    stages {\n        stage(\'Deploy\') {\n            steps {\n                deployToK8s(\'staging\', \'myapp:42\')\n                input \'Promote to production?\'\n                deployToK8s(\'production\', \'myapp:42\')\n            }\n        }\n    }\n}',
        output: '[Pipeline] stage: Deploy to staging\ndeployment.apps/myapp image updated\nWaiting for deployment "myapp" rollout to finish...\ndeployment "myapp" successfully rolled out\n[Pipeline] input: Promote to production? (Proceed/Abort)\n[Pipeline] stage: Deploy to production\ndeployment "myapp" successfully rolled out',
        explain: 'Shared Library 把重复的 Pipeline 逻辑抽成可复用的函数，存放在独立 Git 仓库中。vars/ 目录下的 .groovy 文件自动变成全局可调用的函数。这样 20 个微服务的 Jenkinsfile 可以共用同一套部署逻辑。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Pipeline 执行时报 "java.lang.OutOfMemoryError: Java heap space"',
        cause: 'Jenkins Master 的 JVM 堆内存不足。当同时运行的 Pipeline 很多、或者有大量构建历史时，默认内存不够用。',
        fix: '在启动参数中增加 JAVA_OPTS="-Xmx4g"；减少 Build History 保留数量（Discard old builds: max 20）；把构建任务分发到 Agent 而不是在 Master 上执行。'
      },
      {
        symptom: 'Agent 连接 Master 失败，报 "Connection refused" 或 "JNLP port not reachable"',
        cause: 'Master 的 JNLP Agent 端口（默认 50000）未开放，或 Docker/K8s 环境中网络策略阻止了 Agent 连接 Master。',
        fix: '确保 docker run 映射了 -p 50000:50000；在 Manage Jenkins > Security 中确认 TCP port for inbound agents 配置正确；K8s 中创建对应的 Service 和 NetworkPolicy。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 Jenkinsfile：检出代码 → npm install → npm test → 构建 Docker 镜像 → 推送到 Registry',
        hint: '使用 pipeline {} 声明式语法，agent any，stages 中用 sh 步骤执行命令',
        answer: 'pipeline { agent any; stages { stage(\'Checkout\') { steps { checkout scm } }; stage(\'Install\') { steps { sh \'npm ci\' } }; stage(\'Test\') { steps { sh \'npm test\' } }; stage(\'Docker\') { steps { sh \'docker build -t app:${BUILD_NUMBER} .\'; sh \'docker push registry/app:${BUILD_NUMBER}\' } } } }'
      },
      {
        level: '进阶',
        task: '实现 Jenkins 的 Matrix Authorization：开发者只能触发 dev 分支的构建，运维可以触发任何分支和管理节点',
        hint: '使用 Matrix Authorization Strategy 插件 + Role-Based Authorization Strategy',
        answer: '安装 Role-Based Authorization Strategy 插件。创建角色：developer（Job/Build + Job/Read，限制 dev-* job）、ops（全部权限）。将用户分配到对应角色。在 Pipeline 中用 when { branch pattern } 限制可触发的分支。'
      }
    ],
  },

  // 82. Graylog
  "s_kss4FJ2KyZRdcKNHK2v": {
    mentalModel: 'Graylog 是日志管理的「即插即用方案」——它把 Elasticsearch + MongoDB + 日志采集器打包成一个开箱即用的产品，比 ELK 多了内置的告警、Pipeline 规则和权限管理，适合不想自己拼装 ELK 组件的团队。',
    handsOn: [
      {
        title: 'Docker Compose 部署 Graylog',
        cmd: 'cat > docker-compose.yml << \'EOF\'\nversion: "3.8"\nservices:\n  mongodb:\n    image: mongo:6.0\n    volumes: ["mongo-data:/data/db"]\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:7.17.0\n    environment:\n      - discovery.type=single-node\n      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"\n    volumes: ["es-data:/usr/share/elasticsearch/data"]\n  graylog:\n    image: graylog/graylog:5.2\n    environment:\n      GRAYLOG_PASSWORD_SECRET: "somepasswordpepper1234567890"\n      GRAYLOG_ROOT_PASSWORD_SHA2: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"\n      GRAYLOG_HTTP_EXTERNAL_URI: "http://localhost:9000/"\n    ports: ["9000:9000", "1514:1514", "12201:12201/udp"]\n    depends_on: [mongodb, elasticsearch]\nvolumes:\n  mongo-data:\n  es-data:\nEOF\ndocker compose up -d',
        output: 'Container graylog-mongodb-1        Started\nContainer graylog-elasticsearch-1  Started\nContainer graylog-graylog-1        Started\n\n# Web UI: http://localhost:9000\n# Login: admin / admin',
        explain: 'Graylog 的三个组件：MongoDB（存配置和元数据）、Elasticsearch（存日志数据）、Graylog Server（处理引擎）。GRAYLOG_ROOT_PASSWORD_SHA2 是 admin 密码的 SHA-256 哈希——这里是 "admin" 的哈希。'
      },
      {
        title: '配置 GELF Input 接收应用日志',
        cmd: '# 在 Graylog Web UI 中：\n# System > Inputs > Select "GELF UDP" > Launch new input\n# Title: "App Logs", Port: 12201, Bind: 0.0.0.0\n\n# 从应用发送 GELF 日志（Python 示例）\npip install graypy\ncat > app.py << \'EOF\'\nimport logging\nimport graypy\nhandler = graypy.GELFUDPHandler(\'graylog\', 12201)\nlogger = logging.getLogger(\'myapp\')\nlogger.addHandler(handler)\nlogger.setLevel(logging.DEBUG)\nlogger.error(\'Database connection failed\', extra={\'db_host\': \'db-01\', \'retry_count\': 3})\nEOF\npython app.py',
        output: 'Graylog Input "GELF UDP" started on port 12201\n\n# In Graylog Search:\n# source: myapp AND level: ERROR\n# db_host: db-01, retry_count: 3, message: Database connection failed',
        explain: 'GELF（Graylog Extended Log Format）是 Graylog 的原生日志格式，支持结构化字段（extra 中的键值对自动变成可搜索字段）。Graylog 还支持 Syslog、Raw/Plaintext、CEF 等多种 Input 类型。'
      },
      {
        title: 'Graylog Pipeline Rules 处理日志',
        cmd: '# 创建 Pipeline Rule 解析 Nginx access log\n# System > Pipelines > Manage rules > Create rule\nrule "parse nginx access log" when has_field("message") then\n  let parsed = grok(\n    pattern: \'%{IPORHOST:clientip} %{USER:ident} %{USER:auth} \\[%{HTTPDATE:timestamp}\\] "%{WORD:verb} %{DATA:request} HTTP/%{NUMBER:httpversion}" %{NUMBER:response} %{NUMBER:bytes}\',\n    value: to_string($message.message)\n  );\n  set_fields(parsed);\n  set_field("response_code", to_long(parsed.response));\nend',
        output: 'Pipeline Rule "parse nginx access log" created.\nProcessing order: 1\n\n# Before: message = "192.168.1.1 - - [15/Mar/2024:10:30:00] GET /api HTTP/1.1 200 1234"\n# After:  clientip=192.168.1.1, verb=GET, request=/api, response_code=200, bytes=1234',
        explain: 'Graylog Pipeline Rules 类似 Logstash 的 filter，但语法更简洁。规则按 Pipeline 顺序执行：解析 → 丰富（GeoIP lookup）→ 路由（发送到不同 Stream）→ 输出。Pipeline 处理在写入 ES 之前完成，不影响写入性能。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Graylog 显示 "Elasticsearch cluster is unreachable or unhealthy"',
        cause: 'Elasticsearch 节点宕机、网络分区、或者 ES 的 JVM 内存不足导致频繁 GC 超时。Graylog 会自动将 Journal 中的消息缓存，但缓存有上限。',
        fix: '检查 ES 状态：curl localhost:9200/_cluster/health；增大 ES 堆内存；如果 ES 无法恢复，Graylog 的 Journal 会暂存消息（默认 5GB），ES 恢复后自动补发。'
      },
      {
        symptom: '日志在 Graylog 中搜不到但 GELF sender 没有报错',
        cause: 'Input 未启动或绑定了错误的端口/IP；Graylog Pipeline 规则丢弃了消息（有 drop_message() 操作）；或者 Stream 路由规则把消息路由到了不可见的 Stream。',
        fix: '检查 System > Inputs 确认 Input 状态为 RUNNING；查看 Input 的 "Throughput" 是否有数据进入；在 Pipeline 中临时禁用 drop_message 规则排查；检查 Stream 的匹配规则。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Graylog 中创建一个告警：当 5 分钟内 ERROR 级别日志超过 100 条时发送 Slack 通知',
        hint: '使用 Event Definition + Notification',
        answer: 'System > Event Definitions > Create：Condition = "Filter: level:ERROR, Time range: 5m, Threshold: > 100"。Notification 配置 Slack webhook URL 和消息模板。Event 触发时自动 POST 到 Slack。'
      },
      {
        level: '进阶',
        task: '设计 Graylog 的 Stream 路由方案：Nginx 日志到 "Web" Stream，应用日志到 "App" Stream，系统日志到 "Infra" Stream',
        hint: '创建三个 Stream + Pipeline 路由规则',
        answer: '创建三个 Stream（Web/App/Infra）。在 Pipeline 中创建路由规则：when source contains "nginx" then route_to_stream("Web")；when source contains "myapp" then route_to_stream("App")；default route_to_stream("Infra")。每个 Stream 可以有不同的索引保留策略和访问权限。'
      }
    ],
  },

  // 83. Pulumi
  "O0xZ3dy2zIDbOetVrgna6": {
    mentalModel: 'Pulumi 是「全栈 IaC 工具」——它让你用 TypeScript/Python/Go 等通用语言管理任何云平台的基础设施，不像 Terraform 用 HCL 专用语言，也不绑定 AWS。就像用 Java 写跨平台应用而不是用某个 OS 的脚本。',
    handsOn: [
      {
        title: '用 TypeScript 创建 AWS S3 存储桶',
        cmd: 'mkdir my-infra && cd my-infra\npulumi new aws-typescript\n\ncat > index.ts << \'EOF\'\nimport * as aws from "@pulumi/aws";\n\nconst bucket = new aws.s3.Bucket("my-bucket", {\n    versioning: { enabled: true },\n    tags: { Environment: "dev" },\n});\n\nexport const bucketName = bucket.id;\nexport const bucketArn = bucket.arn;\nEOF\n\npulumi preview',
        output: 'Previewing update (dev):\n     Type                 Name          Plan\n +   pulumi:pulumi:Stack  my-infra-dev  create\n +   aws:s3:Bucket        my-bucket     create\n\nOutputs:\n  + bucketName: "my-bucket-abc123"\n  + bucketArn: "arn:aws:s3:::my-bucket-abc123"\n\nResources:\n  + 2 to create',
        explain: 'Pulumi 用真正的编程语言写基础设施代码——你可以用 if/for/try-catch、import npm 包、写单元测试。preview 等价于 terraform plan，显示即将执行的变更。'
      },
      {
        title: 'Pulumi 的 Component Resource 复用模式',
        cmd: 'cat > components/secure-bucket.ts << \'EOF\'\nimport * as pulumi from "@pulumi/pulumi";\nimport * as aws from "@pulumi/aws";\n\ninterface SecureBucketArgs {\n    retentionDays: number;\n    enableLogging?: boolean;\n}\n\nexport class SecureBucket extends pulumi.ComponentResource {\n    public readonly bucket: aws.s3.Bucket;\n\n    constructor(name: string, args: SecureBucketArgs, opts?: pulumi.ComponentResourceOptions) {\n        super("custom:storage:SecureBucket", name, {}, opts);\n\n        this.bucket = new aws.s3.Bucket(`${name}-bucket`, {\n            versioning: { enabled: true },\n            serverSideEncryptionConfiguration: {\n                rule: { applyServerSideEncryptionByDefault: { sseAlgorithm: "aws:kms" } },\n            },\n            lifecycleRules: [{\n                enabled: true,\n                expiration: { days: args.retentionDays },\n            }],\n        }, { parent: this });\n    }\n}\nEOF\n\n// 使用\nconst prod = new SecureBucket("prod-data", { retentionDays: 365 });\nconst dev = new SecureBucket("dev-data", { retentionDays: 30 });',
        output: 'Component Tree:\n  pulumi:pulumi:Stack\n  ├── custom:storage:SecureBucket "prod-data"\n  │   └── aws:s3:Bucket "prod-data-bucket" (KMS encrypted, 365d retention)\n  └── custom:storage:SecureBucket "dev-data"\n      └── aws:s3:Bucket "dev-data-bucket" (KMS encrypted, 30d retention)',
        explain: 'ComponentResource 是 Pulumi 的复用单元——把多个资源打包成一个逻辑组件（类似 Terraform Module），暴露配置参数。团队可以封装 SecureBucket、StandardVPC 等组件作为内部标准。'
      },
      {
        title: 'Pulumi State 管理和 Stack 引用',
        cmd: '# State 后端选择\npulumi login           # 默认用 Pulumi Cloud（免费）\npulumi login s3://my-pulumi-state  # 用 S3 存 state\npulumi login --local    # 本地存 state\n\n# Stack 引用（跨 Stack 共享输出）\nconst networkStack = new pulumi.StackReference("org/network/dev");\nconst vpcId = networkStack.getOutput("vpcId");\n\n# 部署\npulumi up --yes\npulumi stack output',
        output: 'Updating (dev):\n  + aws:s3:Bucket my-bucket created [id=bucket-abc123]\n  + pulumi:pulumi:Stack my-infra-dev created\n\nOutputs:\n  bucketName: "my-bucket-abc123"\n  bucketArn: "arn:aws:s3:::my-bucket-abc123"\n\nResources: 2 created\nDuration: 12s',
        explain: 'Pulumi 的 state 管理与 Terraform 类似但更灵活：可以用 Pulumi Cloud（带免费 tier）、S3、Azure Blob、或本地文件。StackReference 让一个 Stack 引用另一个 Stack 的输出——适合拆分网络/应用/数据库等不同关注点。'
      }
    ],
    diagnosis: [
      {
        symptom: 'pulumi up 报 "resource already exists" 但 state 中没有这个资源',
        cause: '资源已经在云平台上存在（通过 Console 手动创建或其他工具创建），但 Pulumi state 中没有记录。Pulumi 尝试创建时发现同名资源已存在。',
        fix: '用 pulumi import aws:s3/bucket:Bucket my-bucket bucket-abc123 把已有资源导入 state；或者用 protect: true 防止意外删除；删除冲突资源后重新 pulumi up。'
      },
      {
        symptom: 'pulumi destroy 失败，报资源正在被其他资源引用',
        cause: '云平台上的资源存在依赖关系（如安全组被 ENI 引用），Pulumi 的删除顺序无法解决这些依赖。',
        fix: '先手动删除依赖方资源（如 EC2 实例），然后重试 pulumi destroy；或在代码中为关键资源添加 retainOnDelete: true，从 Pulumi 管理中移除但不实际删除。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Pulumi (TypeScript) 创建一个 Lambda 函数 + API Gateway，实现一个简单的 Hello World API',
        hint: '使用 aws.lambda.CallbackFunction + aws.apigateway.RestAPI',
        answer: 'const handler = new aws.lambda.CallbackFunction("hello", { callback: async (event) => ({ statusCode: 200, content: JSON.stringify({ message: "Hello!" }) }) }); const api = new aws.apigateway.RestAPI("api", { routes: [{ path: "/hello", method: "GET", eventHandler: handler }] }); export const url = api.url;'
      },
      {
        level: '进阶',
        task: '用 Pulumi 编写单元测试：验证 VPC 组件创建的子网 CIDR 正确、安全组规则符合最小权限原则',
        hint: '使用 @pulumi/pulumi 的 runtime mocks',
        answer: '用 pulumi.runtime.setMocks() 模拟 AWS API 返回。在测试中 new VpcComponent()，然后用 pulumi.all([vpc.subnets]).apply(subnets => { assert(subnets[0].cidr === "10.0.1.0/24") }) 做断言。配合 Jest 或 Mocha 运行。'
      }
    ],
  },

  // 84. GitLab CI
  "2KjSLLVTvl2G2KValw7S7": {
    mentalModel: 'GitLab CI 是「住在 Git 仓库里的流水线」——它在 .gitlab-ci.yml 中定义构建、测试、部署步骤，每次 push 自动触发，不需要额外安装 CI Server（GitLab 自带 Runner），是 Git 和 CI 的一体化方案。',
    handsOn: [
      {
        title: '编写 .gitlab-ci.yml 基础流水线',
        cmd: 'cat > .gitlab-ci.yml << \'EOF\'\nstages:\n  - build\n  - test\n  - deploy\n\nvariables:\n  DOCKER_IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA\n\nbuild:\n  stage: build\n  image: docker:24\n  services: [docker:dind]\n  script:\n    - docker build -t $DOCKER_IMAGE .\n    - docker push $DOCKER_IMAGE\n  artifacts:\n    reports:\n      dotenv: build.env\n\ntest:\n  stage: test\n  image: $DOCKER_IMAGE\n  script:\n    - npm test\n  artifacts:\n    reports:\n      junit: junit.xml\n    paths: [coverage/]\n\ndeploy-staging:\n  stage: deploy\n  environment:\n    name: staging\n    url: https://staging.example.com\n  script:\n    - kubectl set image deployment/app app=$DOCKER_IMAGE -n staging\n  only: [main]\n\ndeploy-prod:\n  stage: deploy\n  environment:\n    name: production\n    url: https://example.com\n  script:\n    - kubectl set image deployment/app app=$DOCKER_IMAGE -n prod\n  when: manual\n  only: [main]\nEOF',
        output: 'Pipeline #12345 for main (abc1234)\n  build    ✓ passed (2m 14s)\n  test     ✓ passed (1m 38s)\n  deploy-staging  ✓ passed (45s)\n  deploy-prod     ⏸ manual (waiting for approval)',
        explain: 'GitLab CI 的关键概念：stages 定义执行顺序（同 stage 内的 job 并行），artifacts 在 job 间传递文件，environment 关联部署环境（支持回滚），when: manual 实现人工审批门。$CI_* 是内置变量。'
      },
      {
        title: 'GitLab CI 的 include 和 extends 复用',
        cmd: '# .gitlab/ci/docker.yml\n.docker-build:\n  image: docker:24\n  services: [docker:dind]\n  before_script:\n    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY\n\n# .gitlab-ci.yml\ninclude:\n  - local: .gitlab/ci/docker.yml\n  - project: devops/templates\n    file: /templates/security-scan.yml\n  - template: Security/SAST.gitlab-ci.yml\n\nbuild-api:\n  extends: .docker-build\n  script:\n    - docker build -t api:$CI_COMMIT_SHORT_SHA .\n\nbuild-web:\n  extends: .docker-build\n  script:\n    - docker build -t web:$CI_COMMIT_SHORT_SHA .',
        output: 'Pipeline resolved:\n  build-api (extends .docker-build, stage: build)\n  build-web (extends .docker-build, stage: build)\n  security-sast (from template, stage: test)\n  deploy (stage: deploy)\n\n# 两个 build job 并行执行（同属 build stage）',
        explain: 'GitLab CI 的复用三层：1) extends 继承隐藏 job 的属性 2) include 引用外部文件/模板/项目 3) component 可发布的 CI 组件。这让团队可以维护中央模板仓库，各项目 include 引用。'
      },
      {
        title: 'GitLab Runner 部署和标签',
        cmd: '# 安装 Runner\ndocker run -d --name gitlab-runner \\\n  -v gitlab-runner-config:/etc/gitlab-runner \\\n  gitlab/gitlab-runner:latest\n\n# 注册 Runner（在 GitLab UI 获取 token）\ndocker exec gitlab-runner gitlab-runner register \\\n  --url https://gitlab.com \\\n  --token glrt-xxxx \\\n  --executor docker \\\n  --docker-image alpine:latest \\\n  --tag-list "docker,kubernetes" \\\n  --non-interactive\n\n# 在 .gitlab-ci.yml 中指定 Runner\ndeploy:\n  tags: [kubernetes]  # 只调度到有 kubernetes 标签的 Runner',
        output: 'Runner registered successfully.\nRunner ID: 12345\nTags: docker, kubernetes\nExecutor: docker\n\nJobs with tags: [kubernetes] will only run on this runner.',
        explain: 'GitLab Runner 是执行 CI job 的 worker。可以部署在不同环境中（Docker、K8s、Shell），通过 tags 匹配 job 需求。生产环境推荐用 Kubernetes Executor——每个 job 在独立 Pod 中运行，天然隔离。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Pipeline 报 "This job is stuck because you don\'t have any active runners"',
        cause: '没有可用的 Runner 匹配 job 的 tags 要求，或者所有匹配 tags 的 Runner 都处于离线状态。',
        fix: '在 GitLab UI 的 CI/CD > Runners 中检查 Runner 状态；确保 Runner 的 tags 包含 job 要求的所有 tag；如果 Runner 是新注册的，确认已在项目/组级别启用。'
      },
      {
        symptom: 'artifact 在下游 stage 中找不到',
        cause: '上游 job 的 artifacts 配置没有正确指定 paths，或者 artifacts:expire_in 太短已过期。也可能是 dependencies: [] 显式声明了不依赖上游 artifact。',
        fix: '检查上游 job 的 artifacts.paths 是否包含所需文件；设置合理的 expire_in（如 1 hour）；在下游 job 中用 dependencies 或 needs 明确指定依赖的上游 job。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 .gitlab-ci.yml：每次 push 自动跑 lint + test，PR 到 main 时构建 Docker 镜像，merge 到 main 后自动部署到 staging',
        hint: '使用 stages + only/except 或 rules 控制触发条件',
        answer: 'stages: [lint, build, deploy]。lint 和 test 默认每次 push 触发。build 用 rules: [{ if: $CI_PIPELINE_SOURCE == "merge_request_event" && $CI_MERGE_REQUEST_TARGET_BRANCH_NAME == "main" }]。deploy 用 rules: [{ if: $CI_COMMIT_BRANCH == "main" }]。'
      },
      {
        level: '进阶',
        task: '设计一个多项目 Pipeline：monorepo 中只有被修改的子项目才触发构建',
        hint: '使用 changes rules + downstream pipeline',
        answer: '在 rules 中使用 changes: [{ paths: ["services/api/**/*"] }]，只有 api 目录有变更时才触发 api 的 build job。或者用 parent-child pipeline：根 .gitlab-ci.yml 检测变更目录，触发对应子项目的 downstream pipeline。'
      }
    ],
  },

  // 85. Circle CI
  "1-JneOQeGhox-CKrdiquq": {
    mentalModel: 'CircleCI 是「为速度而生的 CI 服务」——它的并行化、缓存和 Docker Layer Caching 让构建速度极快， orbs（可复用的配置包）让项目配置极度精简。就像一个专门做流水线的 SaaS 工厂。',
    handsOn: [
      {
        title: '编写 .circleci/config.yml',
        cmd: 'cat > .circleci/config.yml << \'EOF\'\nversion: 2.1\n\norbs:\n  node: circleci/node@5.2\n  docker: circleci/docker@2.4\n\nexecutors:\n  node-executor:\n    docker:\n      - image: cimg/node:20.10\n    resource_class: medium\n\njobs:\n  test:\n    executor: node-executor\n    parallelism: 4\n    steps:\n      - checkout\n      - node/install-packages:\n          pkg-manager: npm\n          cache-path: ~/project/node_modules\n      - run:\n          name: Run tests (parallel)\n          command: |\n            TESTFILES=$(circleci tests glob "src/**/*.test.ts" | circleci tests split --split-by=timings)\n            npm test -- $TESTFILES\n      - store_test_results:\n          path: test-results\n      - store_artifacts:\n          path: coverage\n\n  build-and-push:\n    executor: docker/docker\n    steps:\n      - checkout\n      - docker/build:\n          image: myapp\n          tag: ${CIRCLE_SHA1}\n      - docker/push:\n          image: myapp\n          tag: ${CIRCLE_SHA1}\n\nworkflows:\n  build-test-deploy:\n    jobs:\n      - test\n      - build-and-push:\n          requires: [test]\n          filters:\n            branches:\n              only: main\nEOF',
        output: 'Pipeline #5678 - workflow build-test-deploy\n  test (4x parallel)\n    executor 0: 12 tests passed (45s)\n    executor 1: 11 tests passed (42s)\n    executor 2: 13 tests passed (48s)\n    executor 3: 10 tests passed (38s)\n  build-and-push: passed (1m 12s)',
        explain: 'CircleCI 的 parallelism: 4 把测试文件分成 4 份并行执行（按历史耗时均衡分配），测试时间缩短到 1/4。orbs 是预封装的配置包（类似 npm），docker/build 一个 orb 命令完成构建+缓存。'
      },
      {
  title: 'CircleCI 缓存策略',
  cmd: '# 见下方说明',
  explain: '**依赖缓存**: save_cache / restore_cache 用 checksum("package-lock.json") 做缓存键。依赖不变时跳过 npm install，节省 1-3 分钟。缓存键支持模板：v1-deps-{{ checksum "package-lock.json" }}-{{ .Branch }}。\n\n**Docker Layer Caching**: DLC 在多次构建之间缓存 Docker 层。第一次构建慢（无缓存），后续只重建变更的层。需要 Performance 或更高计划。\n\n**Workspace 传递**: persist_to_workspace + attach_workspace 在同一 workflow 的 job 之间传递文件（如编译产物），比 artifacts 更快因为是内部网络传输。'
},
      {
        title: 'CircleCI Matrix 和 Dynamic Config',
        cmd: '# Matrix: 同时在多个环境中测试\njobs:\n  test:\n    parameters:\n      node-version:\n        type: string\n    docker:\n      - image: cimg/node:<< parameters.node-version >>\n    steps:\n      - checkout\n      - run: npm test\n\nworkflows:\n  test-matrix:\n    jobs:\n      - test:\n          matrix:\n            parameters:\n              node-version: ["18", "20", "22"]\n\n# Dynamic Config: 运行时生成配置\nsetup: true  # 启用 setup workflow\n# 用 path-filtering orb 只构建变更的模块',
        output: 'Workflow test-matrix:\n  test[node-18]: passed (1m 20s)\n  test[node-20]: passed (1m 15s)\n  test[node-22]: passed (1m 18s)\n\nAll 3 matrix jobs completed successfully.',
        explain: 'Matrix 让一个 job 在多个参数组合下并行运行（如多 Node 版本、多 OS）。Dynamic Config（setup workflow）在运行时根据代码变更生成实际配置——monorepo 中只构建受影响的模块，大幅减少 CI 时间。'
      }
    ],
    diagnosis: [
      {
        symptom: 'CircleCI 构建比预期慢很多，缓存没有命中',
        cause: '缓存键（cache key）不匹配——通常是因为 checksum 的文件内容变了（如 package-lock.json 格式微调），或者缓存 key 包含了 .Branch 但你在不同分支上。',
        fix: '在 save_cache 中用多个 fallback key：v1-{{ checksum "package-lock.json" }}、v1-、这样即使精确 key 不命中也能用宽泛 key 恢复部分缓存。用 CircleCI 的 Cache 管理页面检查缓存大小和命中率。'
      },
      {
        symptom: 'Job 报 "Spin up environment" 极慢（超过 1 分钟）',
        cause: 'Docker image pull 慢——使用了很大的 image（如 node:latest 超过 1GB），或者 Docker Hub 的 rate limit 限制了 pull 速度。',
        fix: '使用 CircleCI 的 Convenience Images（如 cimg/node:20.10），它们预缓存在 CircleCI 的基础设施中，pull 速度极快。避免使用 latest 标签，固定版本号。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 CircleCI config：安装依赖 → 并行运行 lint 和 test → 构建 Docker 镜像 → 仅在 main 分支推送',
        hint: '使用 workflows + requires 定义依赖，filters 控制分支',
        answer: 'workflows 中定义：lint 和 test 无 requires（并行），build 的 requires: [lint, test]，push 的 requires: [build] + filters: { branches: { only: main } }。'
      },
      {
        level: '进阶',
        task: '用 CircleCI orb 封装团队的标准化部署流程：lint → test → build → security scan → deploy to K8s',
        hint: '创建自定义 orb，封装 commands 和 jobs',
        answer: '创建 orb 结构：commands/{lint,test,build,scan,deploy}.yml 定义可复用步骤，jobs/standard-pipeline.yml 组合这些 commands。发布到 orb registry 后项目只需：orbs: { team: my-org/standard-ci@1.0 }，workflows 中调用 team/standard-pipeline。'
      }
    ],
  },

  // 86. CI/CD Tools 概览
  "aQJaouIaxIJChM-40M3HQ": {
    mentalModel: 'CI/CD 工具是软件交付的「自动装配线」——CI 是"每次提交自动编译+测试"的质量守门员，CD 是"通过测试后自动部署到环境"的交付快递员。选择合适的工具就像选车：小团队用自行车（GitHub Actions），大企业用集装箱车队（Jenkins+ArgoCD）。',
    handsOn: [
      {
  title: 'CI/CD 工具选型对比',
  cmd: '# 见下方说明',
  explain: '**托管型（SaaS）**: GitHub Actions: 与 GitHub 深度集成，免费额度大，YAML 配置简单。适合 GitHub 项目。\nCircleCI: 并行化和缓存优秀，构建速度快。适合追求效率的团队。\nGitLab CI: 与 GitLab 一体化，Runner 可自托管。适合 GitLab 项目。\nCloud Build: Google Cloud 原生，与 GKE 集成好。适合 GCP 用户。\n\n**自托管型**: Jenkins: 插件生态最大，灵活但运维成本高。适合需要深度定制的企业。\nTeamCity: JetBrains 出品，Kotlin DSL 配置，与 IntelliJ 集成好。适合 Java 团队。\nGoCD: ThoughtWorks 出品，Pipeline 可视化优秀。适合复杂部署流程。\n\n**GitOps 型（CD only）**: ArgoCD: K8s 原生，声明式部署，自动同步 Git 到集群。适合 K8s 环境。\nFluxCD: 类似 ArgoCD 但更轻量，支持 Helm 和 Kustomize。适合多集群管理。\nSpinnaker: Netflix 出品，多云部署能力强。适合复杂多云架构。'
},
      {
  title: 'CI/CD 的四个成熟度级别',
  cmd: '# 见下方说明',
  explain: '**Level 1: 手动部署**: 开发者本地构建 JAR/WAR，SCP 到服务器，手动重启。没有测试门控，没有回滚能力。每次部署都是祈祷仪式。\n\n**Level 2: 持续集成**: 每次 push 触发自动编译+单元测试。测试失败则阻塞合入。但部署仍是手动。代表：Jenkins 只做 build+test。\n\n**Level 3: 持续交付**: CI + 自动部署到 staging 环境，但 production 部署需要手动审批。所有代码都经过完整测试，随时可以一键上线。\n\n**Level 4: 持续部署**: CI + 自动部署到 production。每次通过测试的代码自动上线。需要完善的灰度发布、自动回滚、监控告警体系支撑。'
},
      {
        title: '一个典型 CI/CD Pipeline 的全流程',
        cmd: '# 完整的 Pipeline 步骤\n1. Code Push → Webhook 触发\n2. Checkout → 拉取代码\n3. Lint → 静态检查 (ESLint, golangci-lint)\n4. Build → 编译 (mvn package, go build)\n5. Unit Test → 单元测试 + 覆盖率\n6. SAST → 静态安全扫描 (SonarQube, Snyk)\n7. Docker Build → 构建镜像\n8. Push Registry → 推送到 Harbor/ECR\n9. Deploy Staging → 部署到测试环境\n10. Integration Test → 集成测试\n11. Deploy Prod → 灰度发布到生产\n12. Smoke Test → 冒烟测试验证',
        output: 'Pipeline Duration: ~8-12 minutes\nFeedback time (lint+test): ~3 minutes\nDeploy to staging: ~5 minutes\nDeploy to prod (canary): ~10 minutes\n\nSuccess rate target: >99% (pipeline itself, not tests)',
        explain: '一个好的 Pipeline 应该在 10 分钟内给出反馈。如果超过 15 分钟，开发者会跳过测试直接部署。关键指标：反馈时间、成功率、部署频率。DORA 指标建议：Elite 团队每天部署多次，变更失败率 <5%。'
      }
    ],
    diagnosis: [
      {
        symptom: '团队有 CI/CD 工具但部署频率仍然很低',
        cause: 'Pipeline 只是"编译+测试"，没有自动部署环节（Level 2 停滞）。或者测试太慢/不稳定，团队不信任 Pipeline 结果。',
        fix: '1) 添加自动部署到 staging 2) 优化测试速度（并行化、只跑受影响的测试）3) 解决 Flaky Test（标记并修复不稳定的测试）4) 建立部署指标看板（DORA metrics）。'
      },
      {
        symptom: 'Pipeline 频繁误报失败（Flaky Pipeline）',
        cause: '测试依赖外部服务（数据库、API）但没有 mock、Docker 构建因网络超时失败、或者并行测试共享了数据库状态。',
        fix: '用 testcontainers 替代外部依赖；给网络操作加 retry 和 timeout；每个并行测试用独立的数据库 schema；标记已知 Flaky Test 并限期修复。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 Node.js 项目设计 CI/CD Pipeline，列出所有阶段和使用的工具',
        hint: '从 Code Push 到 Production Deploy，考虑 lint、test、build、scan、deploy',
        answer: 'Push → GitHub Actions trigger → ESLint + Prettier → npm test (Jest) → Docker build → Trivy scan → Push to ECR → Deploy to staging (kubectl apply) → Integration test (Playwright) → Manual approve → Deploy to prod (ArgoCD sync) → Smoke test。'
      },
      {
        level: '进阶',
        task: '设计一个从 Jenkins 迁移到 GitHub Actions 的方案，保证迁移过程中不中断现有部署',
        hint: '分阶段迁移，先只迁移 CI，再迁移 CD',
        answer: 'Phase 1: 在 GitHub Actions 中复制 Jenkins 的 build+test 步骤，两个系统并行运行，对比结果。Phase 2: 确认 GHA 结果一致后，关闭 Jenkins 的 build 触发器。Phase 3: 迁移部署步骤（Jenkinsfile 中的 deploy stage 转为 GHA workflow）。Phase 4: 迁移 Shared Library 为 GHA composite actions。全程 Jenkins 保持可用作为回退。'
      }
    ],
  },

  // 87. Terraform
  "nUBGf1rp9GK_pbagWCP9g": {
    mentalModel: 'Terraform 是基础设施的「声明式 Git」——你用 HCL 语言声明"我有什么资源"，Terraform 计算差异并执行变更，state 文件记录当前状态。就像 Git 追踪代码变更一样，Terraform 追踪基础设施变更。',
    handsOn: [
      {
        title: 'Terraform 核心工作流：write → plan → apply',
        cmd: '# 1. 编写配置\ncat > main.tf << \'EOF\'\nterraform {\n  required_version = ">= 1.5"\n  backend "s3" {\n    bucket = "my-tf-state"\n    key    = "prod/terraform.tfstate"\n    region = "ap-northeast-1"\n    dynamodb_table = "tf-lock"\n  }\n}\n\nprovider "aws" { region = "ap-northeast-1" }\n\nmodule "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "~> 5.0"\n  name    = "prod-vpc"\n  cidr    = "10.0.0.0/16"\n  azs     = ["ap-northeast-1a", "ap-northeast-1c"]\n  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]\n  private_subnets = ["10.0.10.0/24", "10.0.11.0/24"]\n  enable_nat_gateway = true\n}\n\nresource "aws_instance" "web" {\n  count         = 2\n  ami           = "ami-0c7217cdde317cfec"\n  instance_type = "t3.small"\n  subnet_id     = module.vpc.private_subnets[count.index]\n  tags = { Name = "web-${count.index + 1}" }\n}\nEOF\n\n# 2. 初始化 + Plan\nterraform init\nterraform plan -out=plan.tfplan',
        output: 'Initializing modules...\n- vpc in .terraform/modules/vpc\nInitializing backend...\nSuccessfully configured the backend "s3"!\n\nPlan: 15 to add, 0 to change, 0 to destroy.\n  + module.vpc.aws_vpc.this\n  + module.vpc.aws_subnet.public[0]\n  + module.vpc.aws_subnet.public[1]\n  + module.vpc.aws_subnet.private[0]\n  + module.vpc.aws_subnet.private[1]\n  + module.vpc.aws_nat_gateway.this[0]\n  + aws_instance.web[0]\n  + aws_instance.web[1]\n  + ... (7 more resources)',
        explain: 'Terraform 工作流：init（下载 provider 和 module）→ plan（计算差异，输出执行计划）→ apply（执行变更）。S3 backend + DynamoDB 锁确保团队协作时 state 不冲突。-out 保存 plan 文件，apply 时保证执行的是审核过的计划。'
      },
      {
        title: 'Terraform Module 复用和版本管理',
        cmd: '# 目录结构\nterraform/\n├── modules/\n│   ├── vpc/         # 网络模块\n│   ├── ecs/         # 容器服务模块\n│   └── rds/         # 数据库模块\n├── environments/\n│   ├── dev/\n│   │   └── main.tf  # 引用 modules，传入 dev 参数\n│   └── prod/\n│       └── main.tf  # 引用 modules，传入 prod 参数\n\n# environments/prod/main.tf\nmodule "web_service" {\n  source = "../../modules/ecs"\n  cluster_name = "prod"\n  desired_count = 3\n  cpu = 512\n  memory = 1024\n}\n\n# 使用远程 Module（Terraform Registry）\nmodule "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "~> 5.0"\n}',
        output: 'Module tree:\n  root\n  ├── module.vpc (registry, v5.4.1)\n  │   ├── aws_vpc\n  │   ├── aws_subnet x4\n  │   └── aws_nat_gateway x2\n  ├── module.web_service (local, modules/ecs)\n  │   ├── aws_ecs_cluster\n  │   ├── aws_ecs_service\n  │   ├── aws_ecs_task_definition\n  │   └── aws_cloudwatch_log_group\n  └── module.rds (local, modules/rds)\n      ├── aws_db_instance\n      └── aws_db_subnet_group',
        explain: 'Module 是 Terraform 的复用单元。本地 module 适合公司内部标准，远程 module（Registry 或 Git）适合社区共享。版本号用 ~> 约束（~> 5.0 表示 >= 5.0, < 6.0）防止意外升级。'
      },
      {
        title: 'Terraform State 管理最佳实践',
        cmd: '# 查看 state 中的资源\nterraform state list\nterraform state show aws_instance.web[0]\n\n# 移动资源（重构时不改名导致重建）\nterraform state mv aws_instance.server aws_instance.web[0]\n\n# 导入已有资源\nterraform import aws_s3_bucket.existing my-bucket-abc123\n\n# 远程 State 锁定\n# S3 + DynamoDB: 同一时间只有一个人能 apply\nterraform force-unlock LOCK_ID  # 紧急解锁',
        output: '# terraform state list\naws_instance.web[0]\naws_instance.web[1]\nmodule.vpc.aws_vpc.this[0]\nmodule.vpc.aws_subnet.public[0]\n...\n\n# terraform state show aws_instance.web[0]\nresource "aws_instance" "web" {\n    ami           = "ami-0c7217cdde317cfec"\n    instance_type = "t3.small"\n    id            = "i-0abc123def456"\n    ...\n}',
        explain: 'State 是 Terraform 的记忆——它记录了"当前基础设施长什么样"。远程 State（S3+DynamoDB）让团队共享状态，锁机制防止并发修改。永远不要把 state 文件提交到 Git——它包含敏感信息（密码、密钥）。'
      }
    ],
    diagnosis: [
      {
        symptom: 'terraform plan 报 "Error refreshing state: AccessDenied"',
        cause: 'IAM 角色/用户没有 S3 或 DynamoDB 的权限，无法读取 state 文件或获取锁。',
        fix: '确保 IAM policy 包含 s3:GetObject, s3:PutObject（对 state bucket）和 dynamodb:GetItem, dynamodb:PutItem, dynamodb:DeleteItem（对 lock table）。推荐用专用 IAM role 而非共享凭证。'
      },
      {
        symptom: 'terraform apply 后实际资源和 state 不一致',
        cause: '有人通过 AWS Console 手动修改了资源（如改了安全组规则），但 Terraform state 不知道。下次 plan 时 Terraform 会尝试"修正"回配置中声明的状态。',
        fix: '定期运行 terraform plan 检测漂移；使用 CI pipeline 在每次 PR 中自动跑 plan 并显示差异；启用 AWS Config 追踪所有手动变更；设置关键资源的 lifecycle { prevent_destroy = true }。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Terraform Module 封装一个标准化的 ECS Fargate 服务：包含 Cluster、Task Definition、Service、ALB Target Group、CloudWatch Log Group',
        hint: '定义 variables.tf 暴露 cpu/memory/image/desired_count，main.tf 中定义资源，outputs.tf 暴露 service_arn',
        answer: 'variables: image, cpu(default 256), memory(default 512), desired_count(default 1), port。main.tf: aws_ecs_task_definition 用 var.image 和 var.cpu，aws_ecs_service 关联 task def 和 cluster，aws_cloudwatch_log_group 配置日志。outputs: service_name, task_definition_arn。'
      },
      {
        level: '进阶',
        task: '设计 Terraform 的 CI/CD 流程：PR 中自动跑 plan 并评论结果，merge 后自动 apply',
        hint: '使用 GitHub Actions + terraform plan -out + atlantis 或自定义 action',
        answer: 'PR workflow: checkout → terraform init → terraform plan -out=plan.tfplan → terraform show -json plan.tfplan → 把 plan 结果作为 PR comment 发布。Merge workflow: checkout → terraform init → terraform apply -auto-approve（或 terraform apply plan.tfplan 确保执行的是审核过的计划）。使用 pull_request 和 push 事件分别触发。'
      }
    ],
  },

  // 88. Octopus Deploy
  "TsXFx1wWikVBVoFUUDAMx": {
    mentalModel: 'Octopus Deploy 是「专注部署的 CD 专家」——它不做 CI（构建/测试），只负责把打包好的 Artifact 可靠地部署到多个环境。像一位专业的物流调度员，只管把货物安全送到目的地。',
    handsOn: [
      {
  title: 'Octopus Deploy 核心概念',
  cmd: '# 见下方说明',
  explain: '**Project**: 一个部署项目的配置容器，包含部署流程（Steps）、变量、包引用。每个微服务通常对应一个 Project。\n\n**Environment**: 部署目标环境（Dev/Staging/Production）。支持 Promotion Rules：必须先通过 Staging 才能部署到 Production。\n\n**Tenant**: 多租户部署——同一套流程部署到不同客户的独立环境。SaaS 公司用来管理数百个客户实例。\n\n**Lifecycles**: 定义环境间的流转规则：Dev 自动推进到 Staging，Staging 需人工审批后到 Production。支持 Retention Policy 自动清理旧版本。'
},
      {
        title: '部署流程设计',
        cmd: '# Octopus Deploy 部署步骤（通过 Web UI 配置）\nStep 1: Deploy Kubernetes manifests\n  - Package: myapp.1.2.3.nupkg\n  - Namespace: #{Environment}\n  - Variable substitution in YAML files\n\nStep 2: Run database migration\n  - Script: dotnet MyMigrator.dll --connection "#{DbConnectionString}"\n  - Run condition: Only if variable "RunMigrations" is true\n\nStep 3: Health check\n  - HTTP request to https://#{Environment}.example.com/health\n  - Retry: 3 times, 30s interval\n  - Run condition: Always (even if Step 2 failed)\n\nStep 4: Slack notification\n  - On success: "myapp v#{Octopus.Release.Number} deployed to #{Environment}"\n  - On failure: "Deployment failed! #{Octopus.Deployment.Error}"',
        output: 'Deployment #42 of myapp to Production\n  Step 1: Deploy K8s manifests... Success (45s)\n  Step 2: Run database migration... Success (12s)\n  Step 3: Health check... Success (5s)\n    GET /health -> 200 OK\n  Step 4: Slack notification... Success\n  Total: 1m 02s',
        explain: 'Octopus 的部署步骤支持条件执行（成功时/失败时/总是）、变量替换（#{Var}）、手动干预（Manual Intervention）。每个步骤有详细的日志输出，可以精确定位部署失败原因。'
      },
      {
        title: 'Octopus CLI 和自动化',
        cmd: '# 安装 Octopus CLI\ndotnet tool install --global Octopus.DotNet.Cli\n\n# 推送包到 Octopus\nocto push --package=myapp.1.2.3.nupkg --server=https://octopus.company.com --apiKey=API-XXX\n\n# 创建 Release 并部署\nocto create-release --project=myapp --version=1.2.3 --deployto=Staging\n\n# 通过 API 触发部署（CI pipeline 集成）\ncurl -X POST https://octopus.company.com/api/deployments \\\n  -H "X-Octopus-ApiKey: API-XXX" \\\n  -d \'{"ReleaseId": "Releases-123", "EnvironmentId": "Environments-2"}\'',
        output: 'Pushing package myapp.1.2.3.nupkg...\nPackage pushed successfully.\n\nCreating release 1.2.3...\nRelease created: Releases-123\nDeploying to Staging...\nDeployment created: Deployments-456\nDeployment URL: https://octopus.company.com/app#/deployments/Deployments-456',
        explain: 'Octopus CLI 和 REST API 让 CI pipeline 可以自动触发部署。典型流程：GitHub Actions 做 CI（build+test+push package）→ Octopus 做 CD（deploy+verify）。分离关注点让每个工具专注自己最擅长的领域。'
      }
    ],
    diagnosis: [
      {
        symptom: '部署步骤报 "Package not found" 但包确实已推送',
        cause: 'Package ID 不匹配（如推送的是 My.App 但步骤引用的是 MyApp），或者 Feed 配置指向了错误的包源（NuGet vs Docker vs Maven）。',
        fix: '确认 octo push 时使用的 Package ID 与 Step 中引用的一致；检查 Project 的 Package References 指向正确的 Feed；用 octo list-releases 查看已创建的 Release 中包含的包版本。'
      },
      {
        symptom: '变量替换 #{Var} 没有生效，部署后配置还是占位符',
        cause: 'Variable 在目标 Environment/Scope 下没有定义值，或者 Variable 的 Scope 不包含当前部署目标。也可能是 Variable 名字拼写错误。',
        fix: '在 Project > Variables 中检查变量在目标 Environment 下是否有值；使用 Octopus 的 Variable Snapshot 功能查看 Release 创建时变量的值；在步骤中用 #{Octopus.Action[Step].Output.Variable} 引用步骤输出变量。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '设计一个 Octopus Deploy 项目的部署流程：部署 K8s 应用 → 运行数据库迁移 → 冒烟测试 → 通知团队',
        hint: '使用 4 个 Step，配置 Run Condition 和变量',
        answer: 'Step 1: Deploy K8s manifests（条件：成功）。Step 2: Run database migration（条件：变量 RunMigrations=true）。Step 3: Smoke test - HTTP check /health（条件：Always）。Step 4: Slack notification（条件：Success 发绿色消息，Failure 发红色消息带错误详情）。'
      },
      {
        level: '进阶',
        task: '用 Octopus 实现金丝雀部署：先部署 10% 流量 → 等待 15 分钟 → 监控错误率 → 自动决定全量或回滚',
        hint: '使用 Manual Intervention + Script Step 检查指标 + Rollback Step',
        answer: 'Step 1: Deploy canary（replicas=1, weight=10%）。Step 2: Wait 15 minutes。Step 3: Script - 查询 Prometheus 获取错误率，>1% 则 Set-OctopusVariable -name "ShouldRollback" -value "true"。Step 4: Manual Intervention（如果 ShouldRollback=true 则执行 Rollback，否则继续）。Step 5: Scale to full（replicas=10, weight=100%）。'
      }
    ],
  },

  // 89. 日志管理
  "gaoZjOYmU0J5aM6vtLNvN": {
    mentalModel: '日志管理是运维的「飞行记录仪」——它解决三个核心问题：1) 日志在哪（采集）2) 怎么找（检索）3) 什么时候叫人（告警）。没有日志管理就像开飞机没有黑匣子，出事后完全靠猜。',
    handsOn: [
      {
  title: '日志管理的完整数据流',
  cmd: '# 见下方说明',
  explain: '**1. 产生（Application）**: 应用用结构化日志库（如 winston/zerolog/logback）输出 JSON 格式日志。关键字段：timestamp, level, message, trace_id, service_name。结构化日志是可搜索的前提。\n\n**2. 采集（Shipper）**: Filebeat/Promtail/Fluentd 从文件/stdout 读取日志并转发。K8s 中每个 Node 跑一个 DaemonSet Agent。关键：处理背压（backpressure），当目标不可用时缓存到磁盘。\n\n**3. 处理（Processor）**: Logstash/Fluentd/Vector 做日志解析（JSON/grok）、丰富（GeoIP、用户信息）、过滤（丢弃 debug 日志）、路由（分发到不同索引）。\n\n**4. 存储（Storage）**: Elasticsearch/Loki/Splunk 存储和索引日志。关键设计：索引按天分片（logs-2024.03.15）、冷热分层（SSD 存热数据，HDD 存冷数据）、保留策略（30 天后删除）。'
},
      {
        title: '结构化日志最佳实践',
        cmd: '# 好的日志（结构化 JSON）\necho \'{"ts":"2024-03-15T10:30:00Z","level":"error","msg":"DB connection failed","service":"api","trace_id":"abc123","host":"api-01","db_host":"db-01","retry":3}\'\n\n# 坏的日志（非结构化文本）\necho \'[ERROR] 2024/03/15 10:30:00 Failed to connect to database after 3 retries on api-01\'\n\n# Node.js 结构化日志示例（winston）\ncat > logger.js << \'EOF\'\nconst winston = require(\'winston\');\nconst logger = winston.createLogger({\n  format: winston.format.combine(\n    winston.format.timestamp(),\n    winston.format.json()\n  ),\n  defaultMeta: { service: \'api\', version: process.env.APP_VERSION },\n  transports: [new winston.transports.Console()],\n});\nlogger.error(\'DB connection failed\', { db_host: \'db-01\', retry: 3 });\nEOF\nnode logger.js',
        output: '{"level":"error","message":"DB connection failed","service":"api","version":"1.2.3","db_host":"db-01","retry":3,"timestamp":"2024-03-15T10:30:00.000Z"}',
        explain: '结构化日志的每个字段都是可搜索的——你可以在 ELK 中查询 db_host:db-01 AND level:error。非结构化文本日志需要 grok 正则解析，既慢又容易出错。trace_id 是分布式追踪的关键，能把跨服务的日志串联起来。'
      },
      {
        title: '日志保留策略和成本优化',
        cmd: '# Elasticsearch ILM 策略\ncurl -X PUT \'localhost:9200/_ilm/policy/logs-policy\' -H \'Content-Type: application/json\' -d \'{\n  "policy": {\n    "phases": {\n      "hot": {\n        "actions": {\n          "rollover": { "max_size": "50gb", "max_age": "1d" },\n          "set_priority": { "priority": 100 }\n        }\n      },\n      "warm": {\n        "min_age": "7d",\n        "actions": {\n          "shrink": { "number_of_shards": 1 },\n          "forcemerge": { "max_num_segments": 1 },\n          "set_priority": { "priority": 50 }\n        }\n      },\n      "cold": {\n        "min_age": "30d",\n        "actions": { "freeze": {} }\n      },\n      "delete": {\n        "min_age": "90d",\n        "actions": { "delete": {} }\n      }\n    }\n  }\n}\'',
        output: '{"acknowledged": true}\n\n# 日志成本对比（每天 100GB 日志）\n# 热存储（SSD, ES hot node）: 7 天 = 700GB ≈ $140/月\n# 温存储（HDD, ES warm node）: 23 天 = 2.3TB ≈ $115/月\n# 冷存储（S3 Glacier）: 60 天 = 6TB ≈ $24/月\n# 总计: ≈ $279/月（vs 全热存储 $1400/月）',
        explain: '日志成本优化的核心是冷热分层：7 天内的日志存 SSD（高频查询），7-30 天存 HDD（偶尔查询），30-90 天存对象存储（合规保留），90 天后删除。force-merge 和 shrink 减少温/冷数据的分片数量，降低内存开销。'
      }
    ],
    diagnosis: [
      {
        symptom: '日志量暴增导致存储成本失控',
        cause: '应用输出了过多的 DEBUG/INFO 日志，或者某个错误导致日志风暴（每秒数万条相同错误）。',
        fix: '在采集层添加采样/过滤（如 Vector 的 filter transform 丢弃 debug 日志）；设置日志速率限制（rate limit per service）；用日志指标（log metrics）替代详细日志——把"每分钟 N 次错误"做成指标而不是记录每条错误。'
      },
      {
        symptom: '分布式系统中无法追踪一个请求的完整链路',
        cause: '各服务日志没有统一的 trace_id，无法关联同一请求在不同服务中的日志。',
        fix: '在网关层生成 trace_id（如 UUID），通过 HTTP header（X-Trace-ID）传递给下游服务。所有服务在日志中输出 trace_id。配合 Jaeger/Zipkin 做全链路追踪。OpenTelemetry 是统一标准。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个微服务设计日志方案：定义日志格式、关键字段、保留策略',
        hint: '考虑结构化 JSON 日志 + 7/30/90 天冷热分层',
        answer: '格式：JSON，必含字段 timestamp, level, message, service, trace_id, host。级别策略：生产环境只输出 INFO+，开发环境可开 DEBUG。保留：7 天热存储（SSD），30 天温存储（HDD），90 天冷存储（S3），之后删除。ERROR 级别日志额外保留 180 天用于审计。'
      },
      {
        level: '进阶',
        task: '设计一个日志告警系统：根据日志内容自动触发不同级别的告警',
        hint: '使用 ELK Watcher 或 Grafana Alert 配合日志查询',
        answer: 'Level 1 (P1 - 立即): "fatal" OR "panic" 出现 → PagerDuty 电话告警。Level 2 (P2 - 5分钟内): ERROR 日志速率 > 100/min 持续 5 分钟 → Slack + PagerDuty。Level 3 (P3 - 15分钟): WARN 日志异常增长（比昨日同期多 3 倍）→ Slack 通知。每个告警附带：受影响服务、Top 错误消息、最近日志样本链接。'
      }
    ],
  },

  // 90. GitHub Actions
  "JnWVCS1HbAyfCJzGt-WOH": {
    mentalModel: 'GitHub Actions 是「住在 GitHub 里的 CI/CD 引擎」——你在 .github/workflows/ 中定义 YAML 流水线，每次 push/PR/issue 自动触发，Runner 由 GitHub 托管（或自托管），零基础设施运维。',
    handsOn: [
      {
        title: '编写一个完整的 GitHub Actions Workflow',
        cmd: 'cat > .github/workflows/ci.yml << \'EOF\'\nname: CI/CD Pipeline\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\nenv:\n  REGISTRY: ghcr.io\n  IMAGE_NAME: ${{ github.repository }}\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16\n        env:\n          POSTGRES_DB: test\n          POSTGRES_PASSWORD: test\n        ports: ["5432:5432"]\n        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: npm\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n        env:\n          DATABASE_URL: postgresql://postgres:test@localhost:5432/test\n      - uses: actions/upload-artifact@v4\n        with:\n          name: coverage\n          path: coverage/\n\n  build:\n    needs: test\n    if: github.ref == \'refs/heads/main\'\n    runs-on: ubuntu-latest\n    permissions:\n      packages: write\n    steps:\n      - uses: actions/checkout@v4\n      - uses: docker/login-action@v3\n        with:\n          registry: ${{ env.REGISTRY }}\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n      - uses: docker/build-push-action@v5\n        with:\n          push: true\n          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}\n          cache-from: type=gha\n          cache-to: type=gha,mode=max\nEOF',
        output: 'Workflow run #123\n  test   ✓ passed (3m 42s)\n    - checkout ✓\n    - setup-node ✓\n    - npm ci ✓ (cache hit, 12s)\n    - npm run lint ✓\n    - npm test ✓ (142 tests passed)\n    - upload-artifact ✓\n  build  ✓ passed (1m 18s)\n    - build & push ✓ (cache hit for layers 1-4)',
        explain: 'GitHub Actions 的核心概念：on 定义触发条件，jobs 定义并行/串行任务，steps 定义具体步骤，uses 引用社区 Action（数千个可用），needs 定义依赖关系。services 自动启动容器作为测试依赖。'
      },
      {
        title: '自定义 Composite Action 封装复用逻辑',
        cmd: 'cat > .github/actions/deploy-k8s/action.yml << \'EOF\'\nname: Deploy to Kubernetes\ndescription: Standard K8s deployment with health check\ninputs:\n  environment:\n    description: Target environment\n    required: true\n  image-tag:\n    description: Docker image tag\n    required: true\n  kubeconfig:\n    description: Base64 encoded kubeconfig\n    required: true\nruns:\n  using: composite\n  steps:\n    - name: Setup kubectl\n      uses: azure/setup-kubectl@v3\n    - name: Configure kubeconfig\n      shell: bash\n      run: |\n        mkdir -p ~/.kube\n        echo "${{ inputs.kubeconfig }}" | base64 -d > ~/.kube/config\n    - name: Deploy\n      shell: bash\n      run: |\n        kubectl set image deployment/app app=ghcr.io/myorg/app:${{ inputs.image-tag }} -n ${{ inputs.environment }}\n        kubectl rollout status deployment/app -n ${{ inputs.environment }} --timeout=120s\n    - name: Health check\n      shell: bash\n      run: |\n        for i in {1..5}; do\n          STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://${{ inputs.environment }}.example.com/health)\n          [ "$STATUS" = "200" ] && exit 0\n          sleep 10\n        done\n        exit 1\nEOF\n\n# 在 workflow 中使用\n# - uses: ./.github/actions/deploy-k8s\n#   with:\n#     environment: staging\n#     image-tag: ${{ github.sha }}\n#     kubeconfig: ${{ secrets.KUBECONFIG }}',
        output: 'Deploy to Kubernetes:\n  Setup kubectl ✓\n  Configure kubeconfig ✓\n  Deploy: deployment.apps/app image updated ✓\n  rollout status: deployment "app" successfully rolled out ✓\n  Health check: GET /health -> 200 OK ✓',
        explain: 'Composite Action 把多个步骤封装成一个可复用的 Action，存放在仓库内（./.github/actions/）或独立仓库中。团队可以维护统一的部署 Action，各项目引用同一个，确保部署流程一致。'
      },
      {
        title: 'GitHub Actions 的 Matrix 策略和并发控制',
        cmd: 'jobs:\n  test:\n    strategy:\n      fail-fast: false\n      matrix:\n        node: [18, 20, 22]\n        os: [ubuntu-latest, windows-latest]\n        exclude:\n          - node: 18\n            os: windows-latest\n    runs-on: ${{ matrix.os }}\n    steps:\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node }}\n      - run: npm test\n\n# concurrency 控制：同一 PR 的多次 push 只保留最新的运行\nconcurrency:\n  group: ${{ github.workflow }}-${{ github.ref }}\n  cancel-in-progress: true',
        output: 'Matrix jobs:\n  test (node=18, ubuntu-latest): ✓ passed\n  test (node=20, ubuntu-latest): ✓ passed\n  test (node=20, windows-latest): ✓ passed\n  test (node=22, ubuntu-latest): ✓ passed\n  test (node=22, windows-latest): ✓ passed\n  # node=18 + windows 被 exclude 跳过\n\nConcurrency: Previous run #122 cancelled (superseded by #123)',
        explain: 'Matrix 让一个 job 在多个参数组合下并行运行（如多 Node 版本 × 多 OS）。fail-fast: false 让所有组合都跑完（不因一个失败而取消其他的）。concurrency 防止同一 PR 的多次 push 浪费 Runner 资源。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Workflow 运行时间超过 30 分钟仍未完成',
        cause: '测试套间太慢、Docker 构建没有缓存、或者某个 step 挂起（如等待永远不会就绪的 service container）。',
        fix: '启用 GitHub Actions Cache（actions/cache 或 type=gha）缓存依赖和 Docker 层；给每个 step 设置 timeout-minutes；优化测试（并行化、只运行受影响的测试）；考虑用 self-hosted runner 获得更好的性能。'
      },
      {
        symptom: 'PR 中的 Workflow 没有自动触发',
        cause: 'on.pull_request 的 branches 过滤不包含目标分支；或者 workflow 文件在 PR 中被修改（安全限制：fork PR 中修改 workflow 不会触发）。',
        fix: '检查 on.pull_request.branches 配置；对于 fork PR，使用 pull_request_target 事件（注意安全风险——不要 checkout PR 代码后执行）；确认 workflow 文件在目标分支中存在。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 GitHub Actions workflow：PR 时跑 lint + test，push 到 main 时构建 Docker 镜像并推送到 GHCR',
        hint: '使用 on: push/pull_request + needs + if 条件',
        answer: 'on: { push: { branches: [main] }, pull_request: { branches: [main] } }。test job 每次触发都跑。build job 用 needs: test + if: github.ref == refs/heads/main，用 docker/build-push-action 构建并推送。'
      },
      {
        level: '进阶',
        task: '设计 monorepo 的 GitHub Actions 方案：只有被修改的包才触发 CI',
        hint: '使用 dorny/paths-filter action 或 Turborepo/Nx 的 affected 命令',
        answer: '使用 dorny/paths-filter 检测变更目录，条件触发对应包的 job。或者用 Nx affected --target=test --base=origin/main 只跑受影响包的测试。缓存 .nx/cache 加速后续构建。'
      }
    ],
  },

  // 91. Sealed Secrets
  "ZWq23Q9ZNxLNti68oltxA": {
    mentalModel: 'Sealed Secrets 是 K8s 秘密的「加密信封」——你用公钥加密 Secret 生成 SealedSecret YAML，这个加密后的文件可以安全地提交到 Git，只有集群内的 Sealed Secrets Controller 持有私钥能解密。解决了"Secret 不能提交到 Git 但又想 GitOps"的矛盾。',
    handsOn: [
      {
        title: '安装 Sealed Secrets Controller 并加密一个 Secret',
        cmd: '# 安装 Controller（集群内）\nkubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.26.0/controller.yaml\n\n# 安装客户端工具 kubeseal\nbrew install kubeseal  # macOS\n\n# 创建普通 Secret（明文，不提交到 Git）\nkubectl create secret generic db-creds \\\n  --from-literal=username=admin \\\n  --from-literal=password=\'S3cr3t!P@ss\' \\\n  --dry-run=client -o yaml > secret.yaml\n\n# 加密为 SealedSecret（可安全提交到 Git）\nkubeseal < secret.yaml > sealed-secret.yaml \\\n  --format yaml\n\n# 查看加密后的内容\ncat sealed-secret.yaml',
        output: 'apiVersion: bitnami.com/v1alpha1\nkind: SealedSecret\nmetadata:\n  name: db-creds\n  namespace: default\nspec:\n  encryptedData:\n    username: AgBy3i4OJSWK+PiTySYZZA9rO43cGDEq...\n    password: AgBj2k5pKQXL+RiUzZZBB0sQ54dHEr...\n  template:\n    type: Opaque\n\n# 应用到集群后自动解密\nkubectl apply -f sealed-secret.yaml\nkubectl get secret db-creds -o jsonpath=\'{.data.password}\' | base64 -d\n# S3cr3t!P@ss',
        explain: '工作流：1) 本地创建明文 Secret 2) kubeseal 用 Controller 的公钥加密 3) 加密后的 SealedSecret 提交到 Git 4) ArgoCD/Flux 部署 SealedSecret 5) Controller 自动解密为普通 Secret。明文 Secret 永远不出现在 Git 中。'
      },
      {
  title: 'Sealed Secrets 的 scope 模式',
  cmd: '# 见下方说明',
  explain: '**strict（默认）**: 加密时绑定 name + namespace。SealedSecret 只能在指定的 name 和 namespace 中解密。最安全——防止攻击者把加密内容复制到其他 namespace 解密。\n\n**namespace-wide**: 加密时只绑定 namespace。同一 namespace 内的任何 Secret name 都能解密。适合 Secret 名称可能变化的场景。\n\n**cluster-wide**: 不绑定 name 和 namespace。任何 namespace 都能解密。最灵活但最不安全——仅用于非敏感的共享配置。'
},
      {
        title: '密钥轮换和灾难恢复',
        cmd: '# 查看当前使用的加密密钥\nkubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key\n\n# 手动触发密钥轮换\nkubectl exec -n kube-system deploy/sealed-secrets-controller -- kill -1 1\n\n# 备份所有加密密钥（灾难恢复必须）\nkubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml > master-key-backup.yaml\n\n# 恢复（新集群导入旧密钥后可以解密旧的 SealedSecret）\nkubectl apply -f master-key-backup.yaml\nkubectl rollout restart deploy/sealed-secrets-controller -n kube-system',
        output: '# 密钥列表\nsealed-secrets-key2024  Opaque  2024-01-15\nsealed-secrets-keyabc1  Opaque  2024-03-01  (active)\n\n# 备份文件包含 RSA 私钥\n# 重要：这个文件必须安全保管（如保险箱），丢失后旧的 SealedSecret 无法解密',
        explain: 'Sealed Secrets 的加密密钥默认每年自动轮换，但旧密钥保留用于解密旧数据。备份密钥是灾难恢复的关键——没有密钥，加密后的 SealedSecret 就是一堆无法解读的乱码。'
      }
    ],
    diagnosis: [
      {
        symptom: 'kubeseal 报 "cannot fetch certificate: no key could decrypt"',
        cause: 'Controller 的公钥证书无法获取——Controller Pod 没启动、RBAC 权限不足、或者 Controller 版本与 kubeseal 版本不兼容。',
        fix: '确认 Controller Pod 在 Running 状态；检查 kubeseal 版本与 Controller 版本兼容；手动获取证书 kubeseal --fetch-cert > cert.pem 后用 --cert cert.pem 加密。'
      },
      {
        symptom: 'SealedSecret apply 后 Secret 没有被创建',
        cause: '加密时用的密钥已被轮换且旧密钥被清理了，或者 SealedSecret 的 name/namespace 与加密时不一致（strict scope 下会解密失败）。',
        fix: '检查 Controller 日志 kubectl logs -n kube-system -l name=sealed-secrets-controller 查看解密错误；用 kubeseal --re-encrypt 重新加密 SealedSecret 使用最新密钥；确保 name 和 namespace 与加密时完全一致。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Sealed Secrets 管理一个应用的数据库凭证，并将 SealedSecret YAML 提交到 Git',
        hint: '创建 Secret → kubeseal 加密 → 提交加密后的文件',
        answer: 'kubectl create secret generic db-creds --from-literal=password=xxx --dry-run=client -o yaml | kubeseal --format yaml > sealed-db-creds.yaml。将 sealed-db-creds.yaml 提交到 Git。明文 secret.yaml 加入 .gitignore。'
      },
      {
        level: '进阶',
        task: '设计 Sealed Secrets 的多环境方案：dev/staging/prod 使用不同的加密密钥',
        hint: '使用多个 Controller 实例或 scope 配置',
        answer: '方案 1：每个环境一个集群，各自有独立的 Controller 和密钥（最安全）。方案 2：单集群多 namespace，使用 namespace-wide scope，每个 namespace 的 SealedSecret 用各自的公钥加密。方案 3：使用 kubeseal --scope namespace-wide 为每个 namespace 生成不同的 SealedSecret。'
      }
    ],
  },

  // 92. ESO (External Secrets Operator)
  "lUUJAEBrGJvL8dRs2n1GD": {
    mentalModel: 'ESO 是 K8s 和外部密钥库之间的「同步桥梁」——它从 AWS Secrets Manager/Vault/Azure Key Vault 等外部系统读取密钥，自动创建 K8s Secret，并定期同步更新。就像给 K8s 配了一个自动补货的密码保险柜。',
    handsOn: [
      {
        title: '安装 ESO 并配置 AWS Secrets Manager 后端',
        cmd: '# 安装 ESO\nhelm repo add external-secrets https://charts.external-secrets.io\nhelm install external-secrets external-secrets/external-secrets \\\n  -n external-secrets --create-namespace \\\n  --set installCRDs=true\n\n# 创建 SecretStore（指定外部密钥库）\ncat > secret-store.yaml << \'EOF\'\napiVersion: external-secrets.io/v1beta1\nkind: SecretStore\nmetadata:\n  name: aws-secrets\n  namespace: myapp\nspec:\n  provider:\n    aws:\n      service: SecretsManager\n      region: ap-northeast-1\n      auth:\n        jwt:\n          serviceAccountRef:\n            name: eso-sa  # 需要 IRSA 配置\nEOF\nkubectl apply -f secret-store.yaml',
        output: 'namespace/external-secrets created\nhelm.sh/release: external-secrets\n\nsecretstore.external-secrets.io/aws-secrets created\n\n# 验证连接\nkubectl get secretstore aws-secrets\nNAME          AGE   STATUS   READY\naws-secrets   10s   Valid    True',
        explain: 'ESO 通过 SecretStore 定义"从哪里取密钥"，通过 ExternalSecret 定义"取哪些密钥、存到哪里"。SecretStore 支持 20+ 后端：AWS Secrets Manager、GCP Secret Manager、Azure Key Vault、HashiCorp Vault、1Password 等。'
      },
      {
        title: '创建 ExternalSecret 同步密钥',
        cmd: 'cat > external-secret.yaml << \'EOF\'\napiVersion: external-secrets.io/v1beta1\nkind: ExternalSecret\nmetadata:\n  name: db-credentials\n  namespace: myapp\nspec:\n  refreshInterval: 1h\n  secretStoreRef:\n    name: aws-secrets\n    kind: SecretStore\n  target:\n    name: db-creds  # K8s Secret 名称\n    creationPolicy: Owner\n  data:\n    - secretKey: username  # K8s Secret 中的 key\n      remoteRef:\n        key: prod/db/credentials  # AWS Secrets Manager 中的 Secret ID\n        property: username        # JSON 属性名\n    - secretKey: password\n      remoteRef:\n        key: prod/db/credentials\n        property: password\n  dataFrom:\n    - extract:\n        key: prod/db/config  # 提取整个 JSON 为 K8s Secret\nEOF\nkubectl apply -f external-secret.yaml',
        output: 'externalsecret.external-secrets.io/db-credentials created\n\n# 验证同步\nkubectl get externalsecret db-credentials\nNAME               STORE         REFRESH   STATUS   READY\ndb-credentials     aws-secrets   1h        Synced   True\n\n# 查看生成的 K8s Secret\nkubectl get secret db-creds -o jsonpath=\'{.data.username}\' | base64 -d\nadmin',
        explain: 'ExternalSecret 声明"从 AWS Secrets Manager 的 prod/db/credentials 读取 username 和 password，存到 K8s Secret db-creds 中"。refreshInterval: 1h 每小时同步一次——如果外部密钥更新了，K8s Secret 也会自动更新。'
      },
      {
  title: 'ESO vs Sealed Secrets 对比',
  cmd: '# 见下方说明',
  explain: '**Sealed Secrets**: 适合：小型团队、密钥不频繁变更、没有外部密钥管理系统。优势：简单，不需要外部依赖。劣势：密钥轮换需要手动重新加密，没有集中管理。\n\n**ESO**: 适合：已有密钥管理系统（Vault/AWS SM）、密钥需要频繁轮换、多集群共享密钥。优势：集中管理、自动同步、审计日志。劣势：依赖外部系统的可用性。\n\n**最佳实践**: 生产环境推荐 ESO + Vault/AWS SM：密钥在外部系统集中管理和轮换，ESO 自动同步到 K8s。开发环境可用 Sealed Secrets 简化流程。两者可以在同一集群共存。'
}
    ],
    diagnosis: [
      {
        symptom: 'ExternalSecret 状态为 SecretSyncedError: could not get secret data',
        cause: 'ESO 无法从外部密钥库读取——IAM 权限不足、SecretStore 配置错误、或者外部密钥 ID 不存在。',
        fix: '检查 ESO Pod 日志获取详细错误；验证 IRSA（IAM Role for Service Accounts）配置正确；确认 AWS Secrets Manager 中的 Secret ID 和属性名拼写正确。'
      },
      {
        symptom: '外部密钥更新后 K8s Secret 没有自动更新',
        cause: 'refreshInterval 设置过长，或者 ESO Controller 与外部系统的连接有问题（如 API 限流导致同步跳过）。',
        fix: '临时缩短 refreshInterval 测试同步是否正常；手动触发同步：kubectl annotate externalsecret my-secret force-sync=$(date +%s) --overwrite；检查 ESO 日志中的 API rate limit 告警。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 ESO 从 HashiCorp Vault 同步一个数据库密码到 K8s Secret',
        hint: '创建 vault SecretStore + ExternalSecret，vault auth 用 Kubernetes auth method',
        answer: 'SecretStore provider: vault { server: "https://vault:8200", path: "secret", auth: { kubernetes: { mountPath: "kubernetes", role: "myapp" } } }。ExternalSecret remoteRef: { key: "secret/data/db", property: "password" }。ESO 使用 K8s ServiceAccount 的 token 自动认证 Vault。'
      },
      {
        level: '进阶',
        task: '设计 ESO 的多集群方案：一个 Vault 给 dev/staging/prod 三个集群提供密钥，但每个集群只能读自己的路径',
        hint: '使用 ClusterSecretStore + Vault policies 限制路径访问',
        answer: '每个集群创建 ClusterSecretStore 指向同一个 Vault 但使用不同的 K8s auth role。Vault 中为每个 role 创建 policy：dev 角色只能读 secret/data/dev/*，prod 角色只能读 secret/data/prod/*。这样即使 dev 集群的 ESO 也无法读取 prod 的密钥。'
      }
    ],
  },

  // 93. 基础设施监控
  "qqRLeTpuoW64H9LvY0U_w": {
    mentalModel: '基础设施监控是给整个系统装的「体检仪器 + 心电图」——指标（Metrics）是实时心率，日志（Logs）是详细病历，追踪（Traces）是药物代谢路径。三者配合才能在出问题时从"发现异常"快速定位到"找到根因"。',
    handsOn: [
      {
  title: '监控三支柱：Metrics + Logs + Traces',
  cmd: '# 见下方说明',
  explain: '**Metrics（指标）**: 数值型时间序列：CPU 使用率、请求延迟 P99、错误率。特点：体积小、查询快、适合告警。工具：Prometheus + Grafana。示例：rate(http_requests_total{status=~"5.."}[5m]) > 0.05。\n\n**Logs（日志）**: 离散事件记录：用户登录失败、数据库查询超时。特点：信息量大但体积大、适合事后分析。工具：ELK/Loki/Splunk。示例：{service="api"} |= "timeout"。\n\n**Traces（分布式追踪）**: 请求在多个服务间的完整路径：Gateway → Auth → API → DB，每段耗时多少。特点：定位瓶颈最直观。工具：Jaeger/Zipkin/Tempo。示例：一个请求在 Auth 服务耗时 2s（正常 50ms）。'
},
      {
        title: '用 Prometheus 采集关键基础设施指标',
        cmd: '# prometheus.yml 配置\ncat > prometheus.yml << \'EOF\'\nglobal:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  - "alert_rules.yml"\n\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets: ["alertmanager:9093"]\n\nscrape_configs:\n  - job_name: "nodes"\n    static_configs:\n      - targets: ["node-exporter:9100"]\n  - job_name: "kubernetes-pods"\n    kubernetes_sd_configs:\n      - role: pod\n    relabel_configs:\n      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]\n        action: keep\n        regex: true\nEOF\n\n# Node Exporter 采集的关键指标\ncurl -s http://localhost:9100/metrics | grep -E "node_cpu|node_memory|node_disk|node_filesystem"',
        output: 'node_cpu_seconds_total{cpu="0",mode="idle"} 45678.9\nnode_cpu_seconds_total{cpu="0",mode="system"} 1234.5\nnode_memory_MemTotal_bytes 16777216000\nnode_memory_MemAvailable_bytes 8388608000\nnode_disk_read_bytes_total{device="sda"} 1073741824\nnode_disk_written_bytes_total{device="sda"} 2147483648\nnode_filesystem_avail_bytes{mountpoint="/"} 5368709120',
        explain: 'Prometheus 通过 pull 模型定期抓取目标端点的 /metrics。Node Exporter 暴露操作系统级指标（CPU/内存/磁盘/网络）。kubernetes_sd_configs 自动发现 Pod 并抓取应用指标。这些指标是告警和 Dashboard 的数据源。'
      },
      {
        title: '关键告警规则设计',
        cmd: 'cat > alert_rules.yml << \'EOF\'\ngroups:\n  - name: infrastructure\n    rules:\n      - alert: HighCPUUsage\n        expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80\n        for: 10m\n        labels:\n          severity: warning\n        annotations:\n          summary: "CPU usage > 80% for 10 minutes"\n\n      - alert: DiskSpaceLow\n        expr: node_filesystem_avail_bytes{mountpoint="/"} / node_filesystem_size_bytes < 0.1\n        for: 5m\n        labels:\n          severity: critical\n        annotations:\n          summary: "Disk space < 10% on {{ $labels.instance }}"\n\n      - alert: HighErrorRate\n        expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05\n        for: 3m\n        labels:\n          severity: critical\n        annotations:\n          summary: "Error rate > 5% for 3 minutes"\n\n      - alert: HighLatency\n        expr: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 2\n        for: 5m\n        labels:\n          severity: warning\n        annotations:\n          summary: "P99 latency > 2s for 5 minutes"\nEOF',
        output: 'Alert rules loaded: 4 rules in group "infrastructure"\n\nFiring alerts:\n  [CRITICAL] HighErrorRate - Error rate 7.2% on api-server\n    Active since: 2024-03-15T10:23:00Z (5m)\n  [WARNING] HighCPUUsage - CPU 85% on web-03\n    Active since: 2024-03-15T10:15:00Z (12m)',
        explain: '告警设计原则：1) 告警应该是可操作的（收到后知道该做什么）2) 用 for 避免瞬时抖动误报 3) 用 severity 分级（critical 打电话，warning 发消息）4) 避免"告警疲劳"——如果超过 5% 的告警不需要采取行动，就该调整阈值。'
      }
    ],
    diagnosis: [
      {
        symptom: '监控指标突然断点（数据缺失一段时间）',
        cause: 'Prometheus 与采集目标的网络中断、target 重启导致 scrape 失败、或者 Prometheus 自身磁盘满导致 WAL（Write-Ahead Log）写入失败。',
        fix: '检查 Prometheus targets 页面查看 target 状态；查看 Prometheus 日志中的 scrape 错误；确保 Prometheus 数据目录有足够的磁盘空间；配置 scrape 超时的告警。'
      },
      {
        symptom: '告警风暴：一个故障触发几十条告警同时响起',
        cause: '缺乏告警聚合和抑制——底层交换机故障导致上面所有服务的告警同时触发。',
        fix: '在 Alertmanager 中配置 group_by（按服务/集群聚合）和 inhibit_rules（底层故障时抑制上层告警）；使用 grouping 把相关告警合并为一条通知；设置 repeat_interval 避免重复通知。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '设计一个 Web 应用的监控方案：列出需要采集的关键指标和告警规则',
        hint: '考虑 RED 方法（Rate, Errors, Duration）+ USE 方法（Utilization, Saturation, Errors）',
        answer: '应用层（RED）：请求速率、错误率、延迟 P50/P95/P99。基础设施层（USE）：CPU/内存/磁盘使用率、网络带宽、磁盘 IO 饱和度。业务层：活跃用户数、订单成功率、注册转化率。告警：错误率>5% (P1)、P99>3s (P2)、CPU>80% 持续10min (P2)、磁盘<10% (P1)。'
      },
      {
        level: '进阶',
        task: '设计一个 SLO（Service Level Objective）监控方案：99.9% 的请求在 500ms 内完成',
        hint: '使用 Error Budget + SLI（Service Level Indicator）',
        answer: 'SLI = rate(http_request_duration_seconds_bucket{le="0.5"}[30d]) / rate(http_request_duration_seconds_count[30d])。SLO = SLI >= 0.999。Error Budget = 1 - SLO = 0.001（每月允许 43.2 分钟超标）。告警分两级：Budget Burn Rate > 14.4x（1 小时消耗 2% 月度预算）触发 P1，> 1x（3 天消耗全部预算）触发 P2。'
      }
    ],
  },

  // 94. 密钥管理
  "hcrPmjFxPi_iLiMdLKJrO": {
    mentalModel: '密钥管理是信息安全的「中央保险库」——所有密码、API Key、证书都集中存储在一个加固的金库里，应用通过身份认证按需取用，而且密钥会自动定期更换。就像银行的保险箱服务，比把现金藏在床垫下安全得多。',
    handsOn: [
      {
  title: '密钥管理的核心原则',
  cmd: '# 见下方说明',
  explain: '**集中存储**: 所有密钥存放在专用系统（Vault、AWS Secrets Manager）中，不散落在代码、配置文件、环境变量中。审计员只需要审查一个地方。\n\n**最小权限**: 每个应用只能读取它需要的密钥。API 服务能读数据库密码，但不能读支付密钥。基于角色/策略的访问控制。\n\n**自动轮换**: 密钥定期自动更换（如每 90 天），旧密钥在宽限期后失效。减少密钥泄露后的影响窗口。\n\n**审计追踪**: 谁在什么时候读取/修改了什么密钥，全部有日志记录。满足 SOC2/ISO27001 等合规要求。'
},
      {
        title: '常见的密钥泄露场景和防范',
        cmd: '# 检测代码中的硬编码密钥\n# 使用 truffleHog 扫描 Git 历史\ntrufflehog git file://. --json | jq \'. | {DetectorName, Raw}\' \n\n# 使用 git-secrets 防止提交密钥\ngit secrets --install\ngit secrets --register-aws  # 防止提交 AWS 密钥\ngit secrets --add \'(?i)(password|secret|token)\\s*=\\s*["\\\'][^"\\\']{8,}\'\n\n# 在 CI 中扫描\ngitleaks detect --source . --verbose',
        output: 'trufflehog scan results:\n{ "DetectorName": "AWS", "Raw": "AKIA..." }\n  Found in commit abc123 (2023-06-15)\n  File: config/database.yml\n\ngitleaks:\n  Finding: Generic API Key\n  Secret: sk_live_abc123...\n  File: src/payment.js:42\n  Commit: def456\n\n# 修复步骤：\n# 1. 立即轮换泄露的密钥\n# 2. 从 Git 历史中删除（git filter-branch 或 BFG）\n# 3. 把密钥移到 Vault/Secrets Manager',
        explain: '密钥泄露的头号原因是硬编码在代码中并推送到 Git。防范三层：1) 本地 pre-commit hook（git-secrets）2) CI 扫描（gitleaks/truffleHog）3) GitHub Secret Scanning（自动检测）。一旦泄露，必须立即轮换——即使从 Git 删除，历史仍可被恢复。'
      },
      {
  title: '密钥管理工具对比',
  cmd: '# 见下方说明',
  explain: '**HashiCorp Vault**: 功能最全面的开源方案：动态密钥（每次请求生成临时数据库凭证）、PKI 证书自动签发、多后端支持。适合中大型团队，运维复杂度较高。\n\n**AWS Secrets Manager**: AWS 原生，与 IAM 集成，支持自动轮换（Lambda 触发器）。适合纯 AWS 环境。按密钥数量和 API 调用次数计费。\n\n**SOPS (Secrets OPerationS)**: Mozilla 出品，用 KMS/PGP 加密 YAML/JSON/ENV 文件。加密后的文件可提交到 Git。适合 GitOps 流程，不需要运行中的密钥服务。\n\n**age / SOPS + Git**: 最轻量的方案：用 age 密钥加密文件，SOPS 编辑。适合小团队和无云环境。没有 API、没有服务、没有额外基础设施。'
}
    ],
    diagnosis: [
      {
        symptom: '应用启动时报 "Access denied to secret" 或 "secret not found"',
        cause: '应用的 IAM 角色/ServiceAccount 没有读取密钥的权限，或者密钥路径/名称配置错误。在 K8s 中常见于 ESO 的 SecretStore 配置问题。',
        fix: '检查密钥管理系统的访问日志确认请求是否到达；验证 IAM policy/Vault policy 包含正确的路径和权限；确认密钥名称和版本号正确（AWS SM 支持版本化）。'
      },
      {
        symptom: '密钥轮换后应用无法连接数据库',
        cause: '应用没有重新加载新密钥——缓存了旧的数据库密码，或者连接池中的旧连接没有断开。',
        fix: '应用使用短生命周期的连接（或监听密钥变更事件重新建立连接）；K8s 中 ESO 更新 Secret 后触发 Pod 滚动重启（用 Reloader 或 Stakater）；数据库端支持新旧密码同时有效的宽限期。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 Node.js 应用设计密钥管理方案：数据库密码、JWT 密钥、第三方 API Key 如何存储和读取',
        hint: '使用 Vault + 环境变量注入或 K8s ESO',
        answer: '1) 三个密钥存入 Vault 的 secret/data/myapp 路径 2) K8s 中用 ESO 的 ExternalSecret 同步到 K8s Secret 3) Deployment 中通过 envFrom 引用 Secret 注入为环境变量 4) 应用启动时从 process.env 读取 5) Vault 配置 90 天自动轮换策略。'
      },
      {
        level: '进阶',
        task: '实现 Vault 的动态数据库凭证：每次请求生成临时用户名/密码，1 小时后自动失效',
        hint: '使用 Vault 的 Database Secrets Engine',
        answer: '1) vault secrets enable database 2) vault write database/config/mydb plugin_name=mysql-database-plugin connection_url="..." 3) vault write database/roles/readonly db_name=mydb creation_statements="CREATE USER ... GRANT SELECT ..." default_ttl=1h max_ttl=24h 4) 应用启动时 vault read database/creds/readonly 获取临时凭证。每个应用实例有独立的凭证，1 小时后 Vault 自动在数据库中删除用户。'
      }
    ],
  },

  // 95. Vault
  "tZzvs80KzqT8aDvEyjack": {
    mentalModel: 'HashiCorp Vault 是密钥管理的「瑞士银行」——它不仅安全存储静态密钥（密码/证书），还能动态生成临时凭证（数据库用户/API Token），并自动签发和吊销 TLS 证书。就像一个永远在线的安全管家。',
    handsOn: [
      {
        title: '启动 Vault 并初始化',
        cmd: '# 开发模式启动（内存存储，自动 unseal）\ndocker run -d --name vault-dev -p 8200:8200 \\\n  -e \'VAULT_DEV_ROOT_TOKEN_ID=myroot\' \\\n  hashicorp/vault:1.15\n\nexport VAULT_ADDR=\'http://localhost:8200\'\nexport VAULT_TOKEN=\'myroot\'\n\n# 检查状态\nvault status\nvault secrets list',
        output: 'Key             Value\n---             -----\nSeal Type       shamir\nInitialized     true\nSealed          false\nTotal Shares    1\nThreshold       1\nVersion         1.15.0\nStorage Type    inmem\n\nPath          Type         Description\n----          ----         -----------\ncubbyhole/    cubbyhole    per-token private secret storage\nidentity/     identity     identity store\nsecret/       kv           key/value secret storage\nsys/          system       system endpoints',
        explain: 'Vault 的核心概念：Seal/Unseal（加密密钥的分片管理）、Token（认证凭证）、Secret Engine（存储后端）、Policy（访问控制）。开发模式跳过了 Unseal 步骤，生产环境需要 Shamir 分片或 Auto Unseal。'
      },
      {
        title: 'KV Secrets Engine 存储和读取密钥',
        cmd: '# 启用 KV v2（支持版本化）\nvault secrets enable -path=secret kv-v2\n\n# 写入密钥\nvault kv put secret/myapp/config \\\n  db_host="db.example.com" \\\n  db_port="5432" \\\n  db_password="S3cur3P@ss!"\n\n# 读取密钥\nvault kv get secret/myapp/config\nvault kv get -field=db_password secret/myapp/config\n\n# 查看版本历史\nvault kv metadata get secret/myapp/config\n\n# 回滚到旧版本\nvault kv rollback -version=1 secret/myapp/config',
        output: '=== Secret Path ===\nsecret/data/myapp/config\n\n====== Metadata ======\nKey              Value\n---              -----\ncreated_time     2024-03-15T10:30:00Z\ncurrent_version  2\nmax_versions     0\noldest_version   0\n\n====== Data ======\nKey           Value\n---           -----\ndb_host       db.example.com\ndb_port       5432\ndb_password   S3cur3P@ss!',
        explain: 'KV v2 支持版本化——每次写入创建新版本，可以回滚到任意旧版本。这在密钥误更新时非常有用。生产环境中，密钥路径应按环境/服务组织：secret/data/prod/myapp/db、secret/data/staging/myapp/db。'
      },
      {
        title: '动态密钥：Database Secrets Engine',
        cmd: '# 启用 Database Engine\nvault secrets enable database\n\n# 配置 MySQL 连接\nvault write database/config/mydb \\\n  plugin_name=mysql-database-plugin \\\n  connection_url="{{username}}:{{password}}@tcp(db.example.com:3306)/" \\\n  allowed_roles="readonly" \\\n  username="vault_admin" \\\n  password="admin_pass"\n\n# 创建角色（定义临时用户的权限和 TTL）\nvault write database/roles/readonly \\\n  db_name=mydb \\\n  creation_statements="CREATE USER \'{{name}}\'@\'%\' IDENTIFIED BY \'{{password}}\'; GRANT SELECT ON mydb.* TO \'{{name}}\'@\'%\';" \\\n  default_ttl="1h" \\\n  max_ttl="24h"\n\n# 获取临时凭证\nvault read database/creds/readonly',
        output: 'Key                Value\n---                -----\nlease_id           database/creds/readonly/abc123\nlease_duration     1h\nlease_renewable    true\npassword           A1a-B2bC3cD4dE5e\nusername           v-root-readonly-xyz789\n\n# 1 小时后 Vault 自动执行:\n# DROP USER \'v-root-readonly-xyz789\'@\'%\'',
        explain: '动态密钥是 Vault 最强大的功能——每次请求生成一个临时数据库用户，TTL 到期后自动删除。这意味着：1) 没有长期存在的共享密码 2) 每个应用实例有独立凭证 3) 泄露的凭证最多有效 1 小时。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Vault 报 "Vault is sealed"，所有操作被拒绝',
        cause: 'Vault 重启后需要 Unseal（提供分片密钥）才能解密存储的数据。生产环境使用 Shamir Secret Sharing，需要 5 个分片中的 3 个来 Unseal。',
        fix: '执行 vault operator unseal 输入 3 个分片密钥；或配置 Auto Unseal（使用 AWS KMS/GCP CKMS/Azure Key Vault 自动解封）；开发环境用 VAULT_DEV_ROOT_TOKEN_ID 跳过 Unseal。'
      },
      {
        symptom: '应用通过 Vault Agent 获取的 Token 过期后无法续期',
        cause: 'Token 的 TTL 已到期且不可续期（renewable=false），或者 Vault 的 Token 角色配置了 max_ttl 限制。',
        fix: '使用 Vault Agent 的 auto-auth 功能自动获取新 Token（而非续期旧 Token）；配置 AppRole auth method，Agent 定期用 AppRole 凭证获取新 Token；设置合理的 token_ttl 和 token_max_ttl。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Vault 的 PKI Secrets Engine 签发一个 TLS 证书，有效期 24 小时',
        hint: '启用 PKI engine → 配置 CA → 创建角色 → 签发证书',
        answer: '1) vault secrets enable pki 2) vault write pki/root/generate/internal common_name="My CA" ttl=87600h 3) vault write pki/roles/web allowed_domains="example.com" max_ttl=24h 4) vault write pki/issue/web common_name="app.example.com"。Vault 返回证书 + 私钥 + CA 链。24 小时后需要重新签发。'
      },
      {
        level: '进阶',
        task: '设计 Vault 的高可用部署：3 节点集群 + Consul 存储 + Auto Unseal (AWS KMS)',
        hint: 'Vault HA 模式需要共享存储（Consul/Raft）+ 负载均衡',
        answer: '3 个 Vault 实例配置 storage "consul" { address = "consul:8500" }，seal "awskms" { region, kms_key_id } 实现 Auto Unseal。前面放 ALB/Nginx 做负载均衡（active 节点处理请求，standby 节点转发）。使用 Integrated Storage（Raft）可替代 Consul 简化架构。'
      }
    ],
  },

  // 96. SOPs
  "GHQWHLxsO40kJ6z_YCinJ": {
    mentalModel: 'SOP（Standard Operating Procedure）是运维的「飞行检查单」——把复杂操作分解成一步步的标准动作，确保任何人在凌晨 3 点被叫醒时都能正确执行。就像飞行员起飞前逐项检查，不因经验丰富就跳过步骤。',
    handsOn: [
      {
  title: '一个优秀的 SOP 模板',
  cmd: '# 见下方说明',
  explain: '**元信息**: 标题：数据库主从切换 SOP\n版本：v2.3\n最后更新：2024-03-15\n负责人：DBA Team\n预计耗时：15-30 分钟\n风险等级：高（涉及生产数据）\n\n**前置条件**: 1. 确认主库确实不可用（不是网络分区）\n2. 通知值班经理和相关团队\n3. 确认从库延迟 < 1 秒\n4. 准备回滚方案\n\n**执行步骤**: 1. 停止写入（设置应用为只读模式）\n2. 等待从库完全同步（Seconds_Behind_Master = 0）\n3. 在从库执行 STOP SLAVE; RESET SLAVE ALL;\n4. 更新 DNS/VIP 指向新主库\n5. 更新应用配置中的数据库地址\n6. 恢复应用写入\n7. 验证写入成功\n\n**验证和回滚**: 验证：SELECT NOW(), @@read_only; 确认新主库可写\n回滚：如果步骤 4-6 失败，恢复旧主库（如果可访问）或搭建新的从库\n事后：24 小时内完成 Postmortem 报告'
},
      {
        title: '用 Runbook 自动化 SOP',
        cmd: '# PagerDuty Runbook 示例（自动化 + 人工步骤混合）\ncat > runbook-db-failover.yml << \'EOF\'\nname: Database Failover\ntrigger:\n  - alert: "PrimaryDBDown"\n\nsteps:\n  - name: Verify primary is actually down\n    type: automated\n    action: ssh db-primary "pg_isready"\n    expect: exit_code != 0\n    timeout: 30s\n\n  - name: Notify on-call manager\n    type: automated\n    action: pagerduty-notify --channel=managers --msg="DB failover initiated"\n\n  - name: Check replication lag\n    type: automated\n    action: ssh db-replica "psql -c \\"SELECT seconds_behind FROM pg_stat_replication\\""\n    expect: seconds_behind < 5\n\n  - name: Promote replica\n    type: manual\n    instructions: |\n      Run: ssh db-replica "sudo -u postgres pg_ctl promote"\n      Confirm with \'y\' when ready\n    approval_required: true\n\n  - name: Update DNS\n    type: automated\n    action: aws route53 change-resource-record-sets --hosted-zone-id Z123 --change-batch file://dns-update.json\n\n  - name: Verify new primary\n    type: automated\n    action: ssh db-replica "pg_isready && psql -c \\"SELECT pg_is_in_recovery()\\""\n    expect: "pg_is_in_recovery = false"\nEOF',
        output: 'Runbook: Database Failover\nStep 1 [AUTO] Verify primary down... ✓ (exit code 2)\nStep 2 [AUTO] Notify manager... ✓ (notification sent)\nStep 3 [AUTO] Check replication lag... ✓ (lag: 0.3s)\nStep 4 [MANUAL] Promote replica... ⏸ Waiting for approval\n  → Approved by alice@company.com\n  → Executed: pg_ctl promote... ✓\nStep 5 [AUTO] Update DNS... ✓\nStep 6 [AUTO] Verify new primary... ✓\nTotal time: 8m 23s',
        explain: '好的 Runbook 混合自动化步骤（减少人为错误）和人工审批步骤（关键决策需要人类判断）。每个步骤都有 expect（预期结果）和 timeout（超时限制），失败时可以安全中止。'
      },
      {
  title: 'SOP 的生命周期管理',
  cmd: '# 见下方说明',
  explain: '**创建**: 从 Postmortem 中提炼：每次事故后总结哪些步骤应该标准化。第一次手动执行时记录每一步。由经验丰富的工程师和新手一起审核——确保新手也能理解和执行。\n\n**测试**: 定期做 Game Day（模拟故障演练）：在 staging 环境执行 SOP，发现遗漏或过时的步骤。每季度至少演练一次关键 SOP。\n\n**更新**: 每次执行后检查是否有步骤需要修改。架构变更时（如从 MySQL 迁移到 PostgreSQL）必须更新相关 SOP。设置 SOP Owner 和 Review Schedule（如每半年审核一次）。\n\n**废弃**: 当 SOP 对应的系统被替换或自动化后，标记为废弃并归档。过时的 SOP 比没有 SOP 更危险——执行错误步骤可能导致更大的故障。'
}
    ],
    diagnosis: [
      {
        symptom: 'SOP 执行过程中发现步骤过时或不适用',
        cause: 'SOP 长期未更新，系统架构已变化（如从单主变为多主），但 SOP 仍描述旧架构。',
        fix: '在 SOP 中添加"如果发现步骤不适用"的逃生路线（如联系架构师获取实时指导）；执行后必须更新 SOP；建立定期审核机制。'
      },
      {
        symptom: '团队不愿意按照 SOP 执行，觉得太慢',
        cause: 'SOP 过于冗长或包含不必要的步骤，或者团队对 SOP 的价值缺乏认识。',
        fix: '精简 SOP 到必要步骤（去掉明显的常识操作）；用自动化替代手动步骤；分享"因为没有 SOP 导致事故扩大"的案例建立共识。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 Web 应用的"紧急回滚"场景编写 SOP：从发现问题到回滚完成的所有步骤',
        hint: '包含：确认问题、通知团队、执行回滚、验证恢复、事后报告',
        answer: '1) 确认：检查监控/日志确认是部署导致的问题（非基础设施故障）2) 通知：Slack 通知团队 + PagerDuty 通知值班人 3) 回滚：kubectl rollout undo deployment/app 或切换流量到旧版本 4) 验证：curl /health + 检查错误率恢复正常 5) 报告：24h 内写 Postmortem，更新 SOP。预计耗时：5-10 分钟。'
      },
      {
        level: '进阶',
        task: '设计一个自动化 Runbook：当 Prometheus 告警"磁盘使用率>90%"触发时自动清理旧日志和临时文件',
        hint: '使用 Alertmanager webhook + 自动化脚本',
        answer: '1) Alertmanager 配置 webhook 接收磁盘告警 2) Webhook 服务验证告警有效性（持续时间>5min）3) SSH 到目标机器执行清理：journalctl --vacuum-size=500M、find /tmp -mtime +7 -delete、docker system prune -f 4) 检查清理后磁盘使用率 5) 如果仍>90% 则升级为人工处理 6) 记录操作日志。安全措施：只清理预定义的安全路径，不删除应用数据。'
      }
    ],
  },

  // 97. Cloud Specific Tools
  "yQ4d2uiROZYr950cjYnQE": {
    mentalModel: '云特定工具是每个云厂商的「独家武器库」——AWS 有 CloudWatch + Systems Manager，GCP 有 Cloud Operations，Azure 有 Monitor。它们与自家云服务深度集成，是"用他家云就必须用他家工具"的原生监控/运维套件。',
    handsOn: [
      {
  title: '三大云的核心工具对比',
  cmd: '# 见下方说明',
  explain: '**AWS**: CloudWatch: 指标+日志+告警一体化。Systems Manager (SSM): 远程执行命令、Patch Manager、Parameter Store。CloudTrail: API 审计日志。Config: 资源配置合规检查。X-Ray: 分布式追踪。\n\n**GCP**: Cloud Monitoring: 指标+Dashboard+告警。Cloud Logging: 日志采集+查询（原 Stackdriver）。Cloud Trace: 分布式追踪。Cloud Profiler: 应用性能分析。Error Reporting: 自动聚合错误。\n\n**Azure**: Azure Monitor: 指标+日志+告警统一平台。Log Analytics: 用 KQL 查询日志。Application Insights: APM（追踪+性能+依赖映射）。Azure Security Center: 安全态势管理。'
},
      {
        title: 'AWS CloudWatch 实战',
        cmd: '# 创建 CloudWatch 告警\ncat > alarm.json << \'EOF\'\n{\n  "AlarmName": "High-CPU-EC2",\n  "MetricName": "CPUUtilization",\n  "Namespace": "AWS/EC2",\n  "Statistic": "Average",\n  "Period": 300,\n  "EvaluationPeriods": 3,\n  "Threshold": 80,\n  "ComparisonOperator": "GreaterThanThreshold",\n  "Dimensions": [\n    { "Name": "InstanceId", "Value": "i-0abc123def456" }\n  ],\n  "AlarmActions": [\n    "arn:aws:sns:ap-northeast-1:123456:ops-alerts"\n  ]\n}\nEOF\naws cloudwatch put-metric-alarm --cli-input-json file://alarm.json\n\n# 查询 CloudWatch Logs\naws logs filter-log-events \\\n  --log-group-name "/aws/ecs/myapp" \\\n  --filter-pattern \'ERROR\' \\\n  --start-time $(date -d \'1 hour ago\' +%s000)',
        output: 'Alarm "High-CPU-EC2" created.\nState: OK → ALARM (threshold crossed: 3 datapoints > 80.0)\n\nLog events:\n[2024-03-15T10:30:00Z] ERROR Connection pool exhausted\n[2024-03-15T10:30:01Z] ERROR Query timeout after 30s\n[2024-03-15T10:30:02Z] ERROR Failed to send response',
        explain: 'CloudWatch 是 AWS 的原生监控服务——所有 AWS 服务自动发送指标到 CloudWatch，无需额外配置 Agent。CloudWatch Logs 的 filter-pattern 语法类似 grep，支持 Metric Filter 把日志模式转化为指标和告警。'
      },
      {
        title: 'AWS Systems Manager (SSM) 远程管理',
        cmd: '# 在一批 EC2 上远程执行命令（无需 SSH）\naws ssm send-command \\\n  --targets "Key=tag:Role,Values=web-server" \\\n  --document-name "AWS-RunShellScript" \\\n  --parameters \'commands=["systemctl status nginx", "curl -s localhost/health"]\'\n\n# Parameter Store（轻量级密钥/配置管理）\naws ssm put-parameter \\\n  --name "/prod/myapp/db-password" \\\n  --value "S3cur3P@ss" \\\n  --type SecureString \\\n  --key-id "alias/aws/ssm"\n\n# 在 EC2 中读取\naws ssm get-parameter --name "/prod/myapp/db-password" --with-decryption',
        output: 'Command ID: abc123-def456\nTargets: 5 instances (web-server)\n\nInstance i-0abc123:\n  nginx is active (running)\n  {"status":"healthy"}\n\nInstance i-0def456:\n  nginx is active (running)\n  {"status":"healthy"}\n\nParameter stored: /prod/myapp/db-password (SecureString, encrypted with KMS)',
        explain: 'SSM 的杀手级功能：1) Run Command 无需 SSH 密钥就能远程执行命令（通过 IAM 认证）2) Parameter Store 存储配置和密钥（SecureString 用 KMS 加密）3) Patch Manager 自动给 EC2 打补丁。这比 Ansible 更适合纯 AWS 环境。'
      }
    ],
    diagnosis: [
      {
        symptom: 'CloudWatch 告警延迟很高（指标触发后 10+ 分钟才收到通知）',
        cause: 'CloudWatch 指标的 Period 设置过大（如 5 分钟），加上 EvaluationPeriods 要求连续多个周期超标才触发。总延迟 = Period × EvaluationPeriods。',
        fix: '缩短 Period（最短 1 分钟，但自定义指标最短 1 分钟，AWS 原生指标最短 1 分钟）；减少 EvaluationPeriods（1-2 个即可）；使用 High Resolution Alarm（10 秒粒度，费用更高）。'
      },
      {
        symptom: '跨云环境的监控数据分散在多个 Dashboard 中',
        cause: 'AWS 用 CloudWatch，GCP 用 Cloud Monitoring，自建机房用 Prometheus——三套独立的监控系统无法统一查看。',
        fix: '方案 1：用 Grafana 作为统一 Dashboard，配置 CloudWatch/Prometheus/Stackdriver 三个数据源。方案 2：用 OpenTelemetry Collector 统一采集所有指标发送到中心存储。方案 3：用 Datadog/New Relic 等商业 SaaS 统一所有云的监控。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 AWS ECS Fargate 服务配置完整的 CloudWatch 监控：指标告警 + 日志查询 + 自动扩缩容',
        hint: '使用 CloudWatch Alarm + ECS Service Auto Scaling + CloudWatch Logs Insights',
        answer: '1) CloudWatch Alarm: CPUUtilization > 70% 连续 3 个 5 分钟周期 2) ECS Auto Scaling: 基于 CPU 的 Target Tracking（目标 60%），min=2, max=10 3) CloudWatch Logs: 配置 Log Group + Metric Filter 将 "ERROR" 模式转化为指标 4) 告警通知 SNS topic → Slack webhook。'
      },
      {
        level: '进阶',
        task: '设计一个多云监控统一方案：AWS + GCP + 自建 K8s 集群的指标和日志集中到一个 Grafana Dashboard',
        hint: '使用 Grafana 多数据源 + OpenTelemetry Collector',
        answer: '1) 每个云部署 OpenTelemetry Collector 采集指标和日志 2) Collector 发送到中心 Prometheus（或 Thanos）3) 日志发送到中心 Loki 4) Grafana 配置 Prometheus + Loki 数据源 5) 创建统一 Dashboard 使用变量切换云/区域/集群 6) 统一告警规则通过 Grafana Alerting 管理。'
      }
    ],
  },

  // 98. Prometheus
  "NiVvRbCOCDpVvif48poCo": {
    mentalModel: 'Prometheus 是指标监控的「主动巡检员」——它每隔 N 秒主动去拉取（pull）各个服务的 /metrics 端点，把数值存入时间序列数据库，用 PromQL 查询和告警。就像巡检员定时拿着体温计去量每个人的体温。',
    handsOn: [
      {
        title: '部署 Prometheus 并理解数据模型',
        cmd: 'docker run -d --name prometheus -p 9090:9090 \\\n  -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml \\\n  prom/prometheus:v2.50.0\n\n# Prometheus 的数据模型：时间序列 = 指标名 + 标签 + 时间戳 + 值\n# http_requests_total{method="GET", status="200", path="/api"} 42.0 @1710495600\n# http_requests_total{method="POST", status="200", path="/api"} 18.0 @1710495600\n# http_requests_total{method="GET", status="500", path="/api"} 3.0 @1710495600\n\n# 四种指标类型\necho "Counter: 只增不减的计数器 (http_requests_total)"\necho "Gauge: 可增可减的仪表 (temperature, memory_bytes)"\necho "Histogram: 分桶统计 (request_duration_seconds_bucket)"\necho "Summary: 客户端计算的分位数 (request_duration_seconds{quantile=0.99})"',
        output: 'Prometheus started on :9090\n\n# 查询示例\n# http://localhost:9090/graph\n# http_requests_total{method="GET"} → 42\n# rate(http_requests_total[5m]) → 0.14 (每秒请求数)\n# sum(rate(http_requests_total[5m])) by (status) → {status="200"} 0.13, {status="500"} 0.01',
        explain: 'Prometheus 的数据模型是时间序列（Time Series）：每个唯一的指标名+标签组合是一个序列。Counter 只能增加（重启归零），Gauge 可任意变化。rate() 函数计算 Counter 的每秒增长率——这是 PromQL 最常用的函数。'
      },
      {
        title: 'PromQL 常用查询实战',
        cmd: '# 1. QPS（每秒请求数）\nsum(rate(http_requests_total[5m])) by (service)\n\n# 2. 错误率\nsum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))\n\n# 3. P99 延迟\nhistogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))\n\n# 4. 内存使用率\n(1 - node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes) * 100\n\n# 5. 磁盘预测（线性回归预测何时磁盘满）\npredict_linear(node_filesystem_avail_bytes{mountpoint="/"}[6h], 24*3600) < 0\n\n# 6. 服务可用性\navg_over_time(up{job="myapp"}[30d]) > 0.999  # SLO 检查',
        output: '# QPS:\n{service="api"}     125.3\n{service="web"}     89.7\n{service="worker"}  12.1\n\n# 错误率:\n0.023  (2.3%)\n\n# P99 延迟:\n0.456  (456ms)\n\n# 磁盘预测:\n{instance="web-01"} -1234567890  # 负值 = 24h 内磁盘将满',
        explain: 'PromQL 的核心函数：rate() 计算速率、histogram_quantile() 计算分位数、predict_linear() 做线性预测、avg_over_time() 计算时间窗口平均值。[5m] 是回溯窗口——取过去 5 分钟的数据点来计算。'
      },
      {
        title: 'Prometheus 的 Recording Rules 和 Alerting Rules',
        cmd: 'cat > rules.yml << \'EOF\'\ngroups:\n  - name: recording_rules\n    interval: 30s\n    rules:\n      # 预计算常用查询（减少 Dashboard 加载时间）\n      - record: job:http_requests:rate5m\n        expr: sum(rate(http_requests_total[5m])) by (job)\n\n      - record: job:http_errors:ratio_rate5m\n        expr: |\n          sum(rate(http_requests_total{status=~"5.."}[5m])) by (job)\n          / sum(rate(http_requests_total[5m])) by (job)\n\n  - name: alerting_rules\n    rules:\n      - alert: HighErrorRate\n        expr: job:http_errors:ratio_rate5m > 0.05\n        for: 5m\n        labels:\n          severity: critical\n        annotations:\n          summary: "{{ $labels.job }} error rate > 5%"\n          runbook: "https://wiki.company.com/runbooks/high-error-rate"\nEOF',
        output: 'Recording rules loaded: 2 rules\nAlerting rules loaded: 1 rule\n\n# Recording rules 每 30s 预计算一次\n# job:http_requests:rate5m{job="api"} = 125.3\n# Dashboard 查询这个预计算结果比实时算 rate() 快 100 倍',
        explain: 'Recording Rules 把复杂查询预计算为新指标，Dashboard 查询时直接读取预计算结果（毫秒级响应 vs 原始查询可能需要数秒）。Alerting Rules 定义告警条件，for: 5m 表示持续 5 分钟才触发（防止瞬时抖动误报）。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Prometheus 查询超时或 OOM',
        cause: '查询涉及过多时间序列（如 http_requests_total 没有标签过滤会匹配数万条序列），或者回溯窗口过大（如 [30d]）。也可能是 Prometheus 的内存限制不足。',
        fix: '始终添加标签过滤（{job="api"}）；缩小回溯窗口（[5m] 而非 [1h]）；使用 Recording Rules 预计算复杂查询；增大 --storage.tsdb.retention.time 但限制 --query.max-samples。'
      },
      {
        symptom: '某些 target 的指标数据出现断点',
        cause: 'scrape 失败——target 的 /metrics 端点响应超时、网络抖动、或者 target 重启导致 scrape 间隔丢失。',
        fix: '检查 Prometheus UI 的 Status > Targets 查看 scrape 状态和最后一次成功时间；增大 scrape_timeout（默认 10s）；确认 target 的 /metrics 端点响应时间 < scrape_interval。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 PromQL 查询：过去 5 分钟内，API 服务中 P95 延迟最高的 3 个端点',
        hint: '使用 histogram_quantile + topk',
        answer: 'topk(3, histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket{job="api"}[5m])) by (le, path)))'
      },
      {
        level: '进阶',
        task: '设计 Prometheus 的长期存储方案：本地保留 15 天，远程存储保留 1 年',
        hint: '使用 Thanos 或 VictoriaMetrics 作为远程存储',
        answer: '方案 1（Thanos）：部署 Thanos Sidecar 与 Prometheus 并行，上传 TSDB blocks 到 S3。Thanos Store Gateway 查询 S3 中的历史数据。方案 2（VictoriaMetrics）：Prometheus remote_write 到 VictoriaMetrics，后者原生支持长期存储和高效压缩。本地 Prometheus 设 --storage.tsdb.retention.time=15d。'
      }
    ],
  },

  // 99. Artifactory
  "C_sFyIsIIpriZlovvcbSE": {
    mentalModel: 'Artifactory 是构建产物的「中央仓库管理员」——它统一管理 Maven/npm/Docker/PyPI 等所有类型的包，既做私有包的存储，也做公共包的代理缓存。就像一个超级图书馆，自己出版的书和别家的书都在这管理。',
    handsOn: [
      {
  title: 'Artifactory 的三种仓库类型',
  cmd: '# 见下方说明',
  explain: '**Local Repository（本地仓库）**: 存储团队自己构建的私有包。如 libs-release-local 存放 Maven JAR，docker-local 存放 Docker 镜像。支持访问控制、版本保留策略。\n\n**Remote Repository（远程代理）**: 代理公共仓库（如 Maven Central、npm registry、Docker Hub）。首次请求时下载并缓存到本地，后续请求直接从缓存返回。解决网络不稳定和公共仓库宕机问题。\n\n**Virtual Repository（虚拟仓库）**: 把多个 Local + Remote 仓库聚合为一个入口。开发者只需配置一个 URL，Artifactory 自动在聚合的仓库中查找。如 libs-release 聚合 libs-release-local + maven-central-remote。'
},
      {
        title: '配置 npm 和 Docker 使用 Artifactory',
        cmd: '# 配置 npm 使用 Artifactory 作为 Registry\nnpm config set registry https://artifactory.company.com/api/npm/npm-virtual/\nnpm config set //artifactory.company.com/api/npm/npm-virtual/:_authToken $ARTIFACTORY_TOKEN\n\n# 发布私有包\nnpm publish --registry https://artifactory.company.com/api/npm/npm-local/\n\n# 配置 Docker 使用 Artifactory\ndocker login artifactory.company.com -u admin -p $TOKEN\ndocker tag myapp:1.0 artifactory.company.com/docker-local/myapp:1.0\ndocker push artifactory.company.com/docker-local/myapp:1.0\n\n# 查看仓库中的包\ncurl -s -u admin:$TOKEN "https://artifactory.company.com/api/search/artifact?name=myapp&repos=docker-local" | jq \'.results[].uri\'',
        output: 'npm publish: + @company/utils@1.0.0\nPublished to artifactory.company.com/npm-local/\n\ndocker push: The push refers to repository [artifactory.company.com/docker-local/myapp]\nabc123: Pushed\ndef456: Pushed\n1.0: digest: sha256:abc... size: 1234\n\nSearch results:\n"https://artifactory.company.com/api/storage/docker-local/myapp/1.0"',
        explain: 'Artifactory 作为统一代理层，npm 和 Docker 只需要配置一个地址。Remote 仓库自动缓存公共包（如 lodash），下次构建直接从 Artifactory 下载，不受 npm registry 宕机影响。'
      },
      {
        title: '构建产物追踪和清理',
        cmd: '# 查看 Docker 镜像的构建信息（Build Info）\ncurl -s -u admin:$TOKEN "https://artifactory.company.com/api/build/myapp/42" | jq \'{buildName, buildNumber, started, modules}\'\n\n# 清理策略：删除 90 天前的 SNAPSHOT 版本\ncat > cleanup-spec.json << \'EOF\'\n{\n  "files": [\n    {\n      "aql": {\n        "items.find": {\n          "repo": "libs-snapshot-local",\n          "created": { "$before": "90d" }\n        }\n      }\n    }\n  ]\n}\nEOF\njfrog rt del --spec cleanup-spec.json --dry-run',
        output: 'Build Info:\n  buildName: myapp\n  buildNumber: 42\n  started: 2024-03-15T10:30:00Z\n  modules: [{ id: "com.company:myapp:1.0.0-SNAPSHOT" }]\n\nCleanup preview:\n  Would delete: libs-snapshot-local/com/company/myapp/0.9.0-SNAPSHOT/\n  Would delete: libs-snapshot-local/com/company/utils/2.1.0-SNAPSHOT/\n  Total: 234 artifacts, 12.5 GB',
        explain: 'Artifactory 的 Build Info 记录了每次构建的完整信息：输入依赖、输出产物、环境变量、Git commit。这让任何一个构建都是完全可追溯和可复现的。定期清理 SNAPSHOT 版本防止存储空间失控。'
      }
    ],
    diagnosis: [
      {
        symptom: 'npm install 从 Artifactory 下载极慢',
        cause: 'Remote Repository 的缓存过期了（Cache TTL 太短），每次都要从上游 npm registry 重新下载。或者网络到上游仓库的带宽不足。',
        fix: '增大 Remote Repository 的 Metadata Retrieval Cache Period（如 3600s）和 Assumed Offline Period；配置 Content Synchronisation 定期预缓存常用包；检查 Artifactory 到上游的网络延迟。'
      },
      {
        symptom: 'Docker push 报 "denied: requested access to the resource is denied"',
        cause: 'Docker 认证 Token 过期或权限不足，或者 Docker 仓库的 Include/Exclude pattern 拒绝了该镜像路径。',
        fix: '重新生成 API Token（jfrog rt access-token-create）；检查 Docker 仓库的 Repository Permissions 确认用户有 deploy 权限；确认镜像 tag 不包含仓库拒绝的特殊字符。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 CI Pipeline 中配置：构建完成后自动上传 JAR 到 Artifactory，并记录 Build Info',
        hint: '使用 jfrog CLI 或 Gradle/Maven 的 Artifactory 插件',
        answer: '在 Maven 的 pom.xml 中配置 distributionManagement 指向 Artifactory。CI 中执行 mvn deploy -DbuildInfo=true。或者用 jfrog CLI：jfrog rt mvn-clean-install --build-name=myapp --build-number=$BUILD_NUMBER，然后 jfrog rt build-publish myapp $BUILD_NUMBER。'
      },
      {
        level: '进阶',
        task: '设计 Artifactory 的多环境 promotion 方案：dev build → QA 验证通过 → 自动 promote 到 release 仓库',
        hint: '使用 Artifactory Build Promotion API',
        answer: '1) CI 构建后上传到 libs-dev-local 2) QA 测试通过后调用 POST /api/build/promote/myapp/42 { "targetRepo": "libs-release-local", "status": "released" } 3) Artifactory 把构建产物从 dev 仓库复制到 release 仓库（保留 Build Info）4) 生产部署只从 release 仓库拉取。这确保了只有经过验证的构建才能进入生产。'
      }
    ],
  },

  // 100. Grafana
  "niA_96yR7uQ0sc6S_OStf": {
    mentalModel: 'Grafana 是可观测性的「统一仪表盘」——它不采集数据，而是连接各种数据源（Prometheus、Loki、MySQL、Elasticsearch 等），用统一的界面展示指标、日志、追踪。就像一个万能电视，切换频道就能看不同摄像头的画面。',
    handsOn: [
      {
        title: '部署 Grafana 并配置多数据源',
        cmd: 'docker run -d --name grafana -p 3000:3000 \\\n  -e "GF_SECURITY_ADMIN_PASSWORD=admin" \\\n  -v grafana-data:/var/lib/grafana \\\n  grafana/grafana:10.3.0\n\n# 通过 API 添加数据源\ncurl -X POST http://localhost:3000/api/datasources \\\n  -H "Content-Type: application/json" \\\n  -u admin:admin \\\n  -d \'{\n    "name": "Prometheus",\n    "type": "prometheus",\n    "url": "http://prometheus:9090",\n    "access": "proxy",\n    "isDefault": true\n  }\'\n\ncurl -X POST http://localhost:3000/api/datasources \\\n  -H "Content-Type: application/json" \\\n  -u admin:admin \\\n  -d \'{\n    "name": "Loki",\n    "type": "loki",\n    "url": "http://loki:3100",\n    "access": "proxy"\n  }\'',
        output: 'Grafana started on :3000\nDatasource "Prometheus" created (id: 1, default)\nDatasource "Loki" created (id: 2)\n\n# Web UI: http://localhost:3000\n# Login: admin / admin',
        explain: 'Grafana 支持 50+ 数据源插件：Prometheus（指标）、Loki（日志）、Tempo（追踪）、MySQL/PostgreSQL（业务数据）、Elasticsearch、CloudWatch 等。一个 Dashboard 可以混合使用多个数据源。'
      },
      {
        title: '用 JSON 定义 Dashboard（Dashboard as Code）',
        cmd: 'cat > dashboard.json << \'EOF\'\n{\n  "dashboard": {\n    "title": "API Service Overview",\n    "panels": [\n      {\n        "title": "Request Rate",\n        "type": "timeseries",\n        "gridPos": { "h": 8, "w": 12, "x": 0, "y": 0 },\n        "targets": [{\n          "expr": "sum(rate(http_requests_total{job=\\"api\\"}[5m])) by (method)",\n          "legendFormat": "{{ method }}"\n        }],\n        "datasource": "Prometheus"\n      },\n      {\n        "title": "Error Rate",\n        "type": "stat",\n        "gridPos": { "h": 4, "w": 6, "x": 12, "y": 0 },\n        "targets": [{\n          "expr": "sum(rate(http_requests_total{job=\\"api\\",status=~\\"5..\\"}[5m])) / sum(rate(http_requests_total{job=\\"api\\"}[5m])) * 100",\n          "legendFormat": "Error %"\n        }],\n        "fieldConfig": {\n          "defaults": {\n            "thresholds": {\n              "steps": [\n                { "value": 0, "color": "green" },\n                { "value": 1, "color": "yellow" },\n                { "value": 5, "color": "red" }\n              ]\n            },\n            "unit": "percent"\n          }\n        }\n      },\n      {\n        "title": "Recent Errors (Loki)",\n        "type": "logs",\n        "gridPos": { "h": 8, "w": 12, "x": 12, "y": 4 },\n        "targets": [{\n          "expr": "{job=\\"api\\"} |= \\"error\\"",\n          "datasource": "Loki"\n        }]\n      }\n    ],\n    "templating": {\n      "list": [{\n        "name": "instance",\n        "type": "query",\n        "query": "label_values(http_requests_total{job=\\"api\\"}, instance)"\n      }]\n    }\n  }\n}\nEOF\n\ncurl -X POST http://localhost:3000/api/dashboards/db \\\n  -H "Content-Type: application/json" \\\n  -u admin:admin \\\n  -d @dashboard.json',
        output: '{"id":1, "slug":"api-service-overview", "status":"success", "url":"/d/abc123/api-service-overview"}',
        explain: 'Dashboard as Code 把仪表盘定义为 JSON，存放在 Git 仓库中。这样可以：1) 版本控制（追踪谁改了什么面板）2) 代码审查（PR 中审核新面板）3) 自动部署（CI 中推送到 Grafana API）。Grafana 也有 provisioning 机制从文件加载 Dashboard。'
      },
      {
  title: 'Grafana Alerting 和 Notification',
  cmd: '# 见下方说明',
  explain: '**Alert Rules**: 在 Grafana 10+ 中，告警规则独立于 Dashboard 面板管理。支持 Prometheus/Graphite/SQL 查询作为告警条件，可设置 for（持续时间）、labels（标签）和 annotations（描述）。\n\n**Contact Points**: 定义通知渠道：Slack webhook、PagerDuty、Email、Teams、Webhook。每个 Contact Point 可以配置多个渠道（如同时发 Slack 和 Email）。\n\n**Notification Policies**: 定义告警路由规则：severity=critical → PagerDuty + 电话；severity=warning → Slack；team=dba → 专用 Slack 频道。支持 group_by（聚合）和 group_wait（等待窗口）。\n\n**与 Prometheus Alertmanager 的关系**: Grafana Alerting 可以替代 Alertmanager（直接查询 Prometheus 发告警），也可以与 Alertmanager 共存（Grafana 管理告警规则，Alertmanager 负责路由和去重）。'
}
    ],
    diagnosis: [
      {
        symptom: 'Dashboard 面板加载很慢或显示 "Data query failed"',
        cause: 'Prometheus 查询太复杂（无标签过滤或回溯窗口过大）、数据源连接超时、或者 Grafana 的 proxy 模式增加了额外延迟。',
        fix: '优化 PromQL 查询（添加标签过滤、使用 Recording Rules）；检查 Grafana 到数据源的网络连通性；对于大数据量查询使用 maxDataPoints 限制返回点数；启用 Grafana 的 query caching。'
      },
      {
        symptom: '告警没有触发，但 Dashboard 上看起来数据已超阈值',
        cause: '告警规则的查询条件与 Dashboard 面板不一致（如时间范围不同），或者告警评估间隔设置过大。也可能是 Grafana Alerting 的 Notification Policy 没有匹配到这个告警。',
        fix: '在 Alert Rules 页面手动测试告警条件（Test rule）；检查 alert evaluation interval（默认 1 分钟）；确认 Notification Policy 的 label matcher 能匹配到告警的 labels。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 Grafana Dashboard，包含 4 个面板：QPS 折线图、错误率 Stat 面板、P99 延迟热力图、最近错误日志（Loki）',
        hint: '使用 timeseries, stat, heatmap, logs 四种面板类型',
        answer: 'Panel 1 (timeseries): sum(rate(http_requests_total[5m])) by (path)。Panel 2 (stat): 错误率百分比，阈值绿<1%/黄<5%/红>=5%。Panel 3 (heatmap): histogram_quantile 按 bucket 展示延迟分布。Panel 4 (logs): {job="api"} |= "error" 从 Loki 查询。'
      },
      {
        level: '进阶',
        task: '用 Grafana Provisioning 实现 Dashboard as Code：Git 仓库中的 JSON 文件自动同步到 Grafana',
        hint: '使用 config provisioning YAML + CI pipeline',
        answer: '1) Grafana 配置 provisioning/dashboards/default.yaml 指定从 /var/lib/grafana/dashboards 目录加载 2) 把 dashboard JSON 文件存放在 Git 仓库 3) CI pipeline 中：git clone → 复制 JSON 到 Grafana 的 dashboard 目录（或通过 API 推送）4) Grafana 检测到文件变化自动重新加载。配合 grafana-dashboard-manager 工具支持文件夹组织。'
      }
    ],
  },

  // 101. Nexus
  "ootuLJfRXarVvm3J1Ir11": {
    mentalModel: 'Nexus 是 Sonatype 出品的「Artifact 仓库管理器」——和 Artifactory 类似但开源版功能更丰富，特别擅长 Maven/npm/Docker 包管理，是 Java 生态中最常用的私有仓库方案。',
    handsOn: [
      {
        title: '部署 Nexus Repository Manager',
        cmd: 'docker run -d --name nexus -p 8081:8081 \\\n  -v nexus-data:/nexus-data \\\n  sonatype/nexus3:3.65.0\n\n# 等待启动（约 1 分钟）\nsleep 60\n\n# 获取初始 admin 密码\ndocker exec nexus cat /nexus-data/admin.password\n\n# Web UI: http://localhost:8081\n# Login: admin / <initial-password>',
        output: 'Nexus Repository Manager 3.65.0 started\nWeb UI: http://localhost:8081\nInitial admin password: a1b2c3d4-5678-90ef-ghij\n\nDefault repositories:\n  maven-central (proxy) → Maven Central\n  maven-releases (hosted) → 私有 Release 包\n  maven-snapshots (hosted) → 私有 SNAPSHOT 包\n  maven-public (group) → 聚合以上三个\n  nuget.org-proxy (proxy) → NuGet Gallery',
        explain: 'Nexus 开箱即用提供了 Maven 的 proxy + hosted + group 三种仓库。proxy 代理 Maven Central 并缓存，hosted 存私有包，group 把多个仓库聚合为一个入口。开发者只需配置 maven-public 一个地址。'
      },
      {
        title: '配置 Maven 和 npm 使用 Nexus',
        cmd: '# Maven settings.xml（~/.m2/settings.xml）\ncat > ~/.m2/settings.xml << \'EOF\'\n<settings>\n  <mirrors>\n    <mirror>\n      <id>nexus</id>\n      <mirrorOf>*</mirrorOf>\n      <url>http://nexus.company.com:8081/repository/maven-public/</url>\n    </mirror>\n  </mirrors>\n  <servers>\n    <server>\n      <id>nexus-releases</id>\n      <username>deployer</username>\n      <password>xxx</password>\n    </server>\n  </servers>\n</settings>\nEOF\n\n# pom.xml distributionManagement\n# <distributionManagement>\n#   <repository>\n#     <id>nexus-releases</id>\n#     <url>http://nexus.company.com:8081/repository/maven-releases/</url>\n#   </repository>\n# </distributionManagement>\n\n# 发布到 Nexus\nmvn deploy\n\n# npm 配置\nnpm config set registry http://nexus.company.com:8081/repository/npm-group/',
        output: 'mvn deploy:\n  Uploading: com/company/myapp/1.0.0/myapp-1.0.0.jar (2.3 MB)\n  Uploading: com/company/myapp/1.0.0/myapp-1.0.0.pom (1.2 KB)\n  Uploaded to nexus-releases\n\nnpm install: packages fetched from nexus proxy (cached)',
        explain: 'Maven 的 mirror 配置把所有依赖请求重定向到 Nexus——Nexus 先在 hosted 仓库找，再去 proxy 的 Maven Central 下载并缓存。首次构建后，后续构建的依赖全部从 Nexus 本地缓存获取，大幅提升构建速度。'
      },
      {
        title: 'Nexus 的 Blob Store 和清理策略',
        cmd: '# 创建清理策略（通过 Web UI 或 API）\n# 删除 SNAPSHOT 版本（保留最新 5 个，超过 30 天的全部删除）\n\n# 通过 Nexus API 执行清理\ncurl -X POST http://localhost:8081/service/rest/v1/script \\\n  -u admin:pass -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "cleanup-snapshots",\n    "type": "groovy",\n    "content": "import org.sonatype.nexus.repository.storage.*\\ndef repos = repository.repositoryManager.browse()\\nrepos.each { repo -> if(repo.name.contains(\\"snapshot\\")) { log.info(\\"Processing: ${repo.name}\\") } }"\n  }\'\n\n# 查看存储空间使用\ncurl -s http://localhost:8081/service/rest/v1/blobstores | jq \'.[] | {name, totalSize, availableSpace}\'',
        output: 'Blob Store Usage:\n  default: 45.2 GB used, 154.8 GB available\n  docker-blob: 120 GB used, 80 GB available\n\nCleanup results:\n  Deleted 234 SNAPSHOT artifacts (12.5 GB freed)\n  Deleted 45 Docker images older than 90 days (23 GB freed)',
        explain: 'Nexus 的存储空间（Blob Store）是物理文件存储。定期清理很重要：SNAPSHOT 版本会无限增长、Docker 镜像层会累积。建议为 Docker 创建独立的 Blob Store（可以挂载大容量磁盘），并配置定期 cleanup task。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Nexus 磁盘空间耗尽，服务不可用',
        cause: 'Docker 镜像和 Maven SNAPSHOT 不断累积，没有配置自动清理策略。Docker 镜像层尤其占空间——一个基础镜像可能 500MB，100 个版本就是 50GB。',
        fix: '创建 Cleanup Policy：SNAPSHOT 保留最新 5 个且不超过 30 天，Docker 保留最新 tag 且不超过 90 天。执行 Compact Blob Store 回收已删除 artifact 的磁盘空间（删除只是标记，需要 compact 才真正释放）。'
      },
      {
        symptom: 'mvn deploy 报 "400 Bad Request: Repository does not allow updating assets"',
        cause: 'maven-releases 仓库默认禁止覆盖已有版本——同一个版本号不能发布两次。这是正确行为（release 版本应该是不可变的）。',
        fix: '如果需要重新发布，先手动删除旧版本再 deploy；或者升级版本号（推荐）；SNAPSHOT 仓库允许覆盖，开发阶段用 SNAPSHOT 版本号（如 1.0.0-SNAPSHOT）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 CI Pipeline 中配置 Maven 项目使用 Nexus：构建 → 测试 → deploy 到 Nexus → 通知团队',
        hint: '在 settings.xml 中配置 mirror 和 server，CI 中执行 mvn deploy',
        answer: '1) CI 容器挂载 settings.xml（包含 Nexus mirror 和 deploy 凭证）2) 执行 mvn clean deploy -DskipTests=false 3) deploy 阶段自动上传 JAR 到 maven-releases（tag 构建）或 maven-snapshots（分支构建）4) 成功后 Slack 通知版本号。'
      },
      {
        level: '进阶',
        task: '设计 Nexus 的高可用方案：两个 Nexus 实例 + 共享存储 + 负载均衡',
        hint: 'Nexus HA 需要共享 Blob Store 和数据库',
        answer: 'Nexus Pro（商业版）原生支持 HA。开源方案：1) 两个 Nexus 实例共享 NFS Blob Store 2) 外部 PostgreSQL 存储 Nexus 元数据 3) Nginx 负载均衡（active-passive，因为 Nexus 不支持多 active 写入）4) 定期备份 Blob Store + DB。推荐方案：用 S3 作为 Blob Store 替代 NFS，性能更好。'
      }
    ],
  },

  // 102. ArgoCD
  "i-DLwNXdCUUug6lfjkPSy": {
    mentalModel: 'ArgoCD 是 K8s 的「Git 同步器」——它持续监听 Git 仓库中的 K8s 清单文件，当 Git 中的期望状态与集群中的实际状态不一致时，自动或手动同步。Git 是唯一的事实来源（Single Source of Truth）。',
    handsOn: [
      {
        title: '安装 ArgoCD 并部署第一个应用',
        cmd: 'kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\nkubectl port-forward svc/argocd-server -n argocd 8080:443 &\n\n# 创建 Application\ncat > app.yaml << \'EOF\'\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: argocd\nspec:\n  project: default\n  source:\n    repoURL: https://github.com/myorg/k8s-manifests\n    targetRevision: main\n    path: overlays/staging\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: staging\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true\nEOF\nkubectl apply -f app.yaml',
        output: 'namespace/argocd created\nAll ArgoCD components deployed.\n\nApplication "myapp" created.\nSync Status: Synced\nHealth Status: Healthy\nResources: Deployment/myapp, Service/myapp, Ingress/myapp\n\n# ArgoCD UI: https://localhost:8080',
        explain: 'ArgoCD 的 Application 定义"从哪个 Git 仓库的哪个路径，部署到哪个 K8s 集群的哪个 namespace"。automated 让 ArgoCD 自动检测 Git 变更并同步。selfHeal 在集群被手动修改后自动恢复为 Git 中的状态。'
      },
      {
        title: 'ArgoCD Sync 操作和健康检查',
        cmd: '# CLI 操作\nargocd app sync myapp\nargocd app get myapp\nargocd app diff myapp\nargocd app history myapp\nargocd app rollback myapp 1',
        output: 'Name:               myapp\nSync Status:        Synced to main (abc1234)\nHealth Status:      Healthy\n\nGROUP  KIND        NAMESPACE  NAME   STATUS  HEALTH\n       Deployment  staging    myapp  Synced  Healthy\n       Service     staging    myapp  Synced  Healthy\n       Ingress     staging    myapp  Synced  Healthy\n\nHistory:\nID  DATE             REVISION\n1   2024-03-14 15:00 main:def456\n2   2024-03-15 10:30 main:abc123 (current)',
        explain: 'ArgoCD 追踪两个状态：Sync Status（Git 和集群是否一致）和 Health Status（资源是否健康）。Deployment 的 Health 检查 Pod 是否 Ready。rollback 回滚到 Git 历史 commit 对应的状态。diff 显示 Git 期望状态和集群实际状态的差异。'
      },
      {
  title: 'ApplicationSet 和 App of Apps 模式',
  cmd: '# 见下方说明',
  explain: '**ApplicationSet**: 用模板批量创建 Application。generator 支持：List（枚举环境）、Git（扫描目录）、Cluster（遍历集群）。如为 dev/staging/prod 三个环境各创建一个 Application。\n\n**App of Apps**: 用一个"根 Application"管理其他 Application。根 Application 指向一个包含所有子 Application YAML 的 Git 目录。修改 Git 中的子 Application 定义就能添加/删除/修改应用。\n\n**多集群管理**: ArgoCD Hub-Spoke 模式：一个 ArgoCD 实例管理多个 K8s 集群。通过 Cluster Secret 注册远程集群，Application 的 destination.server 指向不同集群。适合管理 10-50 个集群的中等规模。'
}
    ],
    diagnosis: [
      {
        symptom: 'ArgoCD 应用状态一直 OutOfSync，即使 Git 没有变更',
        cause: 'K8s 资源的某些字段被 admission webhook 或 operator 自动修改（如 sidecar injection 添加了 init container），导致实际状态与 Git 不同。或者 CRD 的 status 字段变化被误认为是 spec 变化。',
        fix: '在 Application 中配置 ignoreDifferences 忽略自动修改的字段；对于 status 字段变化，配置 resource.customizations 排除 status 的比较；使用 CompareOption 的 ServerSideDiff 模式。'
      },
      {
        symptom: 'ArgoCD sync 卡在 Progressing 状态，Pod 一直 Pending',
        cause: '集群资源不足（CPU/内存/PVC），Pod 无法调度。或者 ImagePullBackOff 拉取镜像失败。ArgoCD 等待所有资源 Healthy 才算 Sync 完成。',
        fix: 'kubectl describe pod 查看 Pending 原因（资源不足/节点选择器不匹配）；检查镜像 tag 和 Registry 凭证；如果不需要等待所有资源就绪，配置 syncOptions: ApplyOutOfSyncOnly=true 或设置 resource hook。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 ArgoCD 部署一个 Kustomize 应用：base + overlays/dev + overlays/prod，两个环境共用同一个 Git 仓库',
        hint: '创建两个 Application，source.path 分别指向 overlays/dev 和 overlays/prod',
        answer: 'Git 仓库结构：base/(deployment.yaml, service.yaml, kustomization.yaml)、overlays/dev/(kustomization.yaml 修改 replicas=1)、overlays/prod/(kustomization.yaml 修改 replicas=3)。ArgoCD 中创建两个 Application：myapp-dev 指向 overlays/dev 部署到 dev namespace，myapp-prod 指向 overlays/prod 部署到 prod namespace。'
      },
      {
        level: '进阶',
        task: '设计 ArgoCD 的渐进式交付方案：Git 变更 → 自动部署 canary → 等待 Prometheus 指标正常 → 自动全量发布',
        hint: '结合 Argo Rollouts + Analysis Template + Prometheus 查询',
        answer: '1) 使用 Argo Rollouts 替代 Deployment 2) 定义 AnalysisTemplate 查询 Prometheus 错误率 < 1% 3) Rollout 配置 steps: [setWeight: 10, pause: {duration: 5m}, analysis, setWeight: 50, analysis, setWeight: 100] 4) ArgoCD 同步 Rollout 资源后，Rollouts Controller 自动执行渐进式发布并在分析失败时回滚。'
      }
    ],
  },

  // 103. CloudSmith
  "vsmE6EpCc2DFGk1YTbkHS": {
    mentalModel: 'CloudSmith 是「云原生的 Universal Package Management」——它是一个 SaaS 托管的 Artifact 仓库，支持几乎所有包格式（Maven/npm/Docker/Debian/RPM 等），不需要自建和运维仓库基础设施。像 Dropbox 但专门存软件包。',
    handsOn: [
      {
  title: 'CloudSmith 核心特性',
  cmd: '# 见下方说明',
  explain: '**Universal 支持**: 一个平台支持 30+ 包格式：Maven, npm, PyPI, Docker, Helm, Debian, RPM, NuGet, Go, CocoaPods, Composer, Conan, Cargo 等。不需要为每种格式部署不同工具。\n\n**SaaS 托管**: 不需要运维仓库服务器。CloudSmith 负责可用性、备份、CDN 加速。有免费 tier（开源项目免费）和企业版。\n\n**安全扫描**: 内置漏洞扫描（基于 Snyk 数据库）：上传包后自动扫描已知漏洞，阻止有严重漏洞的包被下载。\n\n**分发和 CDN**: 全球 CDN 加速包下载。支持 Bandwidth 和 Storage 配额控制。适合给开源项目或客户分发软件。'
},
      {
        title: '配置 CI 使用 CloudSmith',
        cmd: '# npm 发布到 CloudSmith\necho "//dl.cloudsmith.io/public/myorg/npm/npm/:_authToken=${CLOUDSMITH_TOKEN}" > .npmrc\necho "registry=https://dl.cloudsmith.io/public/myorg/npm/npm/" >> .npmrc\nnpm publish\n\n# Docker 推送到 CloudSmith\ndocker login docker.cloudsmith.io -u myorg -p $CLOUDSMITH_TOKEN\ndocker tag myapp:1.0 docker.cloudsmith.io/myorg/docker/myapp:1.0\ndocker push docker.cloudsmith.io/myorg/docker/myapp:1.0\n\n# Debian 包上传\ncurl -u "myorg:$CLOUDSMITH_TOKEN" \\\n  -F "file=@myapp_1.0.0_amd64.deb" \\\n  "https://api.cloudsmith.io/v1/packages/myorg/debian/"',
        output: 'npm publish: + @myorg/utils@1.0.0\nPublished to dl.cloudsmith.io/public/myorg/npm/\n\ndocker push: 1.0: digest: sha256:abc... size: 1234\n\nDebian upload: myapp_1.0.0_amd64.deb uploaded successfully\nVulnerability scan: 0 critical, 2 high, 5 medium',
        explain: 'CloudSmith 的 URL 结构统一：dl.cloudsmith.io/{org}/{repo}/{format}/。上传包后自动触发漏洞扫描。CI 中通过 Token 认证（环境变量注入），不需要在每个开发者机器上配置凭证。'
      },
      {
  title: 'CloudSmith vs Artifactory vs Nexus',
  cmd: '# 见下方说明',
  explain: '**CloudSmith 优势**: 零运维（SaaS）、全球 CDN 加速、开箱即用的漏洞扫描、适合对外分发软件。劣势：依赖外部服务、大规模使用成本可能高于自建。\n\n**Artifactory 优势**: 功能最全面（Build Info、Xray 安全扫描）、支持私有部署（合规要求）、生态成熟。劣势：企业版价格高、运维复杂。\n\n**Nexus 优势**: 开源版功能丰富（特别是 Maven）、社区活跃、私有部署免费。劣势：UI 不够现代、Docker 支持不如 Artifactory、没有 SaaS 版。'
}
    ],
    diagnosis: [
      {
        symptom: '从 CloudSmith 下载包时 403 Forbidden',
        cause: '仓库设为 private 但 Token 没有 read 权限，或者 Token 已过期/被撤销。也可能是 IP 白名单限制了访问。',
        fix: '在 CloudSmith 管理后台检查 Token 权限（需要 Read 或 Read/Write）；重新生成 Token；检查仓库的 Entitlements 和 IP restrictions 设置。'
      },
      {
        symptom: 'Docker push 到 CloudSmith 报 "manifest invalid"',
        cause: '镜像名称不符合 CloudSmith 的 Docker registry 路径格式，或者使用了不支持的 Docker manifest 版本。',
        fix: '确认镜像 tag 格式为 docker.cloudsmith.io/{org}/{repo}/{image}:{tag}；使用 docker push 前先 docker login docker.cloudsmith.io；检查镜像是否包含多架构 manifest（CloudSmith 支持 OCI image-spec）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 GitHub Actions 中配置：构建 npm 包 → 推送到 CloudSmith → 在另一个项目中使用',
        hint: 'CI 中设置 .npmrc 指向 CloudSmith，使用 secrets 存储 Token',
        answer: '发布：CI 中 echo "//dl.cloudsmith.io/..." > .npmrc && npm publish。使用：消费方的 .npmrc 配置同样的 registry URL + Token。GitHub Actions 中用 secrets.CLOUDSMITH_TOKEN 注入 Token。'
      },
      {
        level: '进阶',
        task: '用 CloudSmith 搭建开源项目的包分发方案：自动发布 + 漏洞门控 + 用户下载统计',
        hint: '结合 CI 自动发布 + CloudSmith 的 vulnerability policy + download analytics',
        answer: '1) CI 中 test 通过后自动发布到 CloudSmith 公开仓库 2) 配置 Vulnerability Policy：Critical/High 漏洞自动阻止发布，Medium 标记警告 3) 使用 CloudSmith 的 Entitlements 给不同客户生成带使用统计的下载链接 4) 配置 Webhook 通知 Slack 发布成功/失败。'
      }
    ],
  },

  // 104. FluxCD
  "6gVV_JUgKgwJb4C8tHZn7": {
    mentalModel: 'FluxCD 是 K8s 的「Git 自动同步引擎」——和 ArgoCD 类似做 GitOps，但更轻量、更模块化、更符合 K8s 原生哲学。它由多个独立 Controller 组成，每个只负责一件事，像 Unix 工具一样可以灵活组合。',
    handsOn: [
      {
        title: '安装 FluxCD 并 Bootstrap',
        cmd: '# 安装 Flux CLI\ncurl -s https://fluxcd.io/install.sh | sudo bash\n\n# 检查前提条件\nflux check --pre\n\n# Bootstrap（在集群中安装 Flux + 连接 Git）\nflux bootstrap github \\\n  --owner=myorg \\\n  --repository=fleet-infra \\\n  --branch=main \\\n  --path=./clusters/production \\\n  --personal\n\n# 验证安装\nflux get all',
        output: '► connecting to github.com\n► cloning branch "main" from repository "myorg/fleet-infra"\n► generating component manifests\n✔ installed flux in "flux-system" namespace\n✔ cluster components are healthy\n► configured deploy key for "myorg/fleet-infra"\n✔ reconciled components\n► determining source URL\n► determining revision\n► pushed commit "abc1234"\n✔ bootstrap finished\n\nNAME                    READY   STATUS\nsource/git/flux-system  True    stored artifact\nkustomization/flux-system True  Applied revision: main@sha:abc123',
        explain: 'flux bootstrap 做了三件事：1) 在集群中安装 Flux 组件 2) 在 Git 仓库中创建 deploy key 3) 把 Flux 系统自身的配置推送到 Git。之后所有变更都通过 Git PR 管理——包括 Flux 自身的升级。'
      },
      {
  title: 'FluxCD 的四大核心 Controller',
  cmd: '# 见下方说明',
  explain: '**Source Controller**: 从 Git/Helm/OCI 仓库拉取源代码。生成 Artifact（tarball）供其他 Controller 使用。每 1 分钟检查一次 Git 变更（可配置）。\n\n**Kustomize Controller**: 接收 Source 的 Artifact，执行 Kustomize 渲染，将 K8s 资源 apply 到集群。支持 health check 和 dependency ordering。\n\n**Helm Controller**: 管理 Helm Release 的生命周期：install/upgrade/rollback。支持 Helm values 从 ConfigMap/Secret 引用。\n\n**Notification Controller**: 处理事件通知（Slack/Teams/Webhook）和 webhook 接收（GitHub/GitLab push 触发即时同步，不用等 polling interval）。'
},
      {
        title: '配置 HelmRelease 自动部署',
        cmd: '# 定义 Helm Repository\ncat > helmrepo.yaml << \'EOF\'\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: podinfo\n  namespace: flux-system\nspec:\n  interval: 1h\n  url: https://stefanprodan.github.io/podinfo\nEOF\n\n# 定义 HelmRelease\ncat > helmrelease.yaml << \'EOF\'\napiVersion: helm.toolkit.fluxcd.io/v2beta2\nkind: HelmRelease\nmetadata:\n  name: podinfo\n  namespace: default\nspec:\n  interval: 5m\n  chart:\n    spec:\n      chart: podinfo\n      version: ">=6.0.0 <7.0.0"\n      sourceRef:\n        kind: HelmRepository\n        name: podinfo\n        namespace: flux-system\n  values:\n    replicaCount: 2\n    ingress:\n      enabled: true\n      hosts:\n        - host: podinfo.example.com\nEOF\n\nflux reconcile helmrelease podinfo',
        output: 'HelmRepository/podinfo reconciled\nHelmRelease/podinfo reconciled\n✔ Helm install succeeded for release default/podinfo.v1 with chart podinfo@6.5.4\n\n# Flux 会自动检测 chart 新版本\n# 当 podinfo 6.6.0 发布时，自动升级（在 >=6.0.0 <7.0.0 范围内）',
        explain: 'Flux 的 HelmRelease 支持版本范围约束（如 >=6.0.0 <7.0.0），自动升级到范围内的最新版本。这是 Flux 相比 ArgoCD 的优势之一——ArgoCD 需要额外工具（如 argocd-image-updater）实现自动升级。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Flux Kustomization 状态为 "not ready"，reconcile 超时',
        cause: 'K8s 资源 apply 失败——可能是 RBAC 权限不足、资源配额超限、或者 CRD 不存在但 Kustomize 引用了 CR。也可能是 health check 超时（等待 Deployment Ready 但 Pod CrashLoopBackOff）。',
        fix: 'flux logs kustomize-controller 查看详细错误；kubectl get events 查看资源级错误；如果是 CRD 依赖问题，用 dependsOn 确保 CRD 先于 CR 安装；设置 spec.timeout 增加超时时间。'
      },
      {
        symptom: 'Flux 没有检测到 Git 变更（新的 commit 没有同步）',
        cause: 'Source Controller 的 polling interval 未到（默认 1 分钟），或者 deploy key 失效导致 Git clone 失败。也可能是 webhook 未配置，只能依赖 polling。',
        fix: 'flux reconcile source git flux-system 手动触发同步；检查 Git 仓库的 deploy key 是否有效；配置 GitHub/GitLab webhook 实现即时同步（不用等 polling）；检查 Source Controller 日志中的 Git 认证错误。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 FluxCD 管理一个 K8s 集群的所有应用：namespace、nginx-ingress、cert-manager、应用 Deployment',
        hint: '在 fleet-infra 仓库中按目录组织，用 Kustomization 的 dependsOn 控制顺序',
        answer: '目录结构：clusters/production/{infra,apps}。infra/ 包含 namespace、nginx-ingress、cert-manager 的 Kustomization。apps/ 包含应用的 Kustomization。apps 的 dependsOn: [{name: infra}] 确保基础设施先部署。每个 Kustomization 指向不同的 Git 路径。'
      },
      {
        level: '进阶',
        task: '用 FluxCD 实现镜像自动更新：CI 推送新镜像后，Flux 自动检测并更新 K8s Deployment 的镜像 tag',
        hint: '使用 Image Automation Controller（ImageRepository + ImagePolicy + ImageUpdateAutomation）',
        answer: '1) ImageRepository 定义要监控的镜像仓库 2) ImagePolicy 定义选择策略（如 semver: >=1.0.0）3) ImageUpdateAutomation 定义 Git 更新规则（替换 YAML 中的 image tag）4) 当新镜像推送后，Flux 自动修改 Git 中的 YAML → 触发 Kustomization sync → 部署新版本。'
      }
    ],
  },

  // 105. Zabbix
  "W9sKEoDlR8LzocQkqSv82": {
    mentalModel: 'Zabbix 是传统 IT 监控的「全能管家」——它能监控服务器、网络设备、数据库、应用等一切东西，用 Agent 或 SNMP 采集数据，自带告警、Dashboard 和报表。像一位经验丰富的老管家，什么都能管但界面略显传统。',
    handsOn: [
      {
        title: 'Docker 部署 Zabbix Server + Agent',
        cmd: 'cat > docker-compose.yml << \'EOF\'\nversion: "3.8"\nservices:\n  postgres:\n    image: postgres:16\n    environment:\n      POSTGRES_DB: zabbix\n      POSTGRES_USER: zabbix\n      POSTGRES_PASSWORD: zabbix\n    volumes: ["pg-data:/var/lib/postgresql/data"]\n  zabbix-server:\n    image: zabbix/zabbix-server-pgsql:6.4-ubuntu\n    environment:\n      DB_SERVER_HOST: postgres\n      POSTGRES_USER: zabbix\n      POSTGRES_PASSWORD: zabbix\n    ports: ["10051:10051"]\n    depends_on: [postgres]\n  zabbix-web:\n    image: zabbix/zabbix-web-nginx-pgsql:6.4-ubuntu\n    environment:\n      DB_SERVER_HOST: postgres\n      POSTGRES_USER: zabbix\n      POSTGRES_PASSWORD: zabbix\n      ZBX_SERVER_HOST: zabbix-server\n    ports: ["8080:8080"]\n  zabbix-agent:\n    image: zabbix/zabbix-agent2:6.4-ubuntu\n    environment:\n      ZBX_HOSTNAME: monitored-host\n      ZBX_SERVER_HOST: zabbix-server\nvolumes:\n  pg-data:\nEOF\ndocker compose up -d',
        output: 'Container zabbix-postgres-1  Started\nContainer zabbix-server-1    Started\nContainer zabbix-web-1       Started\nContainer zabbix-agent-1     Started\n\n# Web UI: http://localhost:8080\n# Login: Admin / zabbix',
        explain: 'Zabbix 的四组件：PostgreSQL（存配置和历史数据）、Server（处理引擎）、Web（管理界面）、Agent（被监控主机上的数据采集器）。Agent2 是新一代 Agent，用 Go 重写，支持更多插件。'
      },
      {
  title: 'Zabbix 的监控方式',
  cmd: '# 见下方说明',
  explain: '**Zabbix Agent**: 安装在被监控主机上的守护进程。主动（Agent 定期发送数据到 Server）和被动（Server 请求 Agent 返回数据）两种模式。采集 CPU/内存/磁盘/网络等系统指标，也支持自定义脚本。\n\n**SNMP**: Simple Network Management Protocol——监控网络设备（交换机/路由器/打印机）的标准协议。Zabbix 通过 SNMP OID 读取设备指标。适合无法安装 Agent 的设备。\n\n**IPMI**: Intelligent Platform Management Interface——监控服务器硬件（温度/风扇/电源）的底层协议。需要 BMC（Baseboard Management Controller）支持。\n\n**JMX**: Java Management Extensions——监控 Java 应用（JVM 内存/GC/线程池）。Zabbix Java Gateway 作为中间层连接 JMX。'
},
      {
        title: '配置 Zabbix 告警和自定义监控',
        cmd: '# 自定义 UserParameter（在 Agent 配置中）\ncat > /etc/zabbix/zabbix_agent2.d/nginx.conf << \'EOF\'\nUserParameter=nginx.active,curl -s http://localhost/stub_status | awk \'/Active/ {print $3}\'\nUserParameter=nginx.requests,curl -s http://localhost/stub_status | awk \'/Reading|Writing/ {sum+=$2+$4} END {print sum}\'\nEOF\n\n# 在 Zabbix Web UI 中创建 Trigger\n# Name: Nginx active connections too high\n# Expression: last(/monitored-host/nginx.active) > 1000\n# Severity: High\n\n# 配置告警通知\n# Administration > Media types > Slack\n# Webhook URL: https://hooks.slack.com/services/xxx\n# Default message: {HOST.NAME}: {TRIGGER.NAME} is {TRIGGER.STATUS}',
        output: 'UserParameter "nginx.active" registered\nAgent restarted.\n\nTrigger created: "Nginx active connections too high"\n  Expression: last(/monitored-host/nginx.active) > 1000\n  Status: Enabled\n\nAction created: "Slack Notification"\n  Conditions: Trigger severity >= High\n  Operations: Send to Slack channel #alerts\n\n# Alert fired:\n# [PROBLEM] web-01: Nginx active connections too high is PROBLEM\n# Active connections: 1234 (threshold: 1000)',
        explain: 'Zabbix 的监控层次：Item（采集数据）→ Trigger（判断条件）→ Action（执行动作）→ Media（发送通知）。UserParameter 让你用任何命令/脚本采集自定义指标。Zabbix 6.4 也支持 Prometheus exporter 直接抓取。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Zabbix Agent 在 Web UI 中显示为 "not available"',
        cause: 'Agent 与 Server 之间的网络连接被防火墙阻止（端口 10050/10051），或者 Agent 配置中的 Server= 地址不正确。',
        fix: '检查防火墙规则允许 10050（Agent 被动模式）和 10051（Server 接收）端口；确认 Agent 的 zabbix_agent2.conf 中 Server=<server-ip> 正确；用 zabbix_get -s <agent-ip> -k agent.ping 测试连通性。'
      },
      {
        symptom: 'Zabbix 数据库增长过快，查询变慢',
        cause: '历史数据（history）和趋势数据（trends）保留时间过长。默认 history 保留 90 天、trends 保留 365 天，对于大规模监控数据量巨大。',
        fix: '缩短历史数据保留时间（Administration > General > Housekeeping）：history 7-30 天，trends 90-365 天；启用 partitioning（按时间分表）提升清理效率；对于不需要长期趋势的 Item 减少 update interval。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Zabbix 监控一组 Linux 服务器：CPU、内存、磁盘、网络，配置当磁盘使用率>90% 时发邮件告警',
        hint: '安装 Agent → 链接 Template OS Linux → 创建 Trigger 和 Action',
        answer: '1) 每台服务器安装 zabbix-agent2 2) Web UI 中添加 Host，链接 Template Linux by Zabbix agent 3) 创建 Trigger: last(/host/vfs.fs.pused[/]) > 90 4) 创建 Action: 条件 Trigger severity >= Warning → 操作 Send email to admin。'
      },
      {
        level: '进阶',
        task: '设计 Zabbix 的多级告警方案：工作时间 Slack 通知，非工作时间电话告警',
        hint: '使用 Time Periods + Escalations + 多种 Media Type',
        answer: '1) 创建两个 Media Type：Slack（webhook）和 PagerDuty（电话）2) 创建两个 Action：Action-WorkHours 条件 Time period = Mon-Fri 9:00-18:00 → Slack；Action-OffHours 条件 Time period = 其他 → PagerDuty 3) 配置 Escalation：如果 30 分钟未确认，升级到经理。'
      }
    ],
  },


  "bujq_C-ejtpmk-ICALByy": {
    mentalModel: 'Datadog 是一站式云监控平台，如同为分布式系统安装的全景摄像头，将指标、日志、追踪、告警统一到一个仪表盘中，让运维团队拥有上帝视角。',
    handsOn: [
      {
        title: '安装 Datadog Agent 并查看主机指标',
        cmd: 'DD_API_KEY=your_api_key DD_SITE="datadoghq.com" bash -c "$(curl -L https://install.datadoghq.com/scripts/install_script_agent7.sh)" && sudo systemctl status datadog-agent',
        output: '● datadog-agent.service - Datadog Agent\n     Loaded: loaded (/lib/systemd/system/datadog-agent.service; enabled)\n     Active: active (running) since Mon 2026-05-27 10:15:23 UTC',
        explain: 'Agent 是 Datadog 的数据采集器，部署在每台主机上，自动收集 CPU、内存、磁盘、网络等系统指标并上报到 Datadog 云端。'
      },
      {
        title: '配置 Nginx 集成并查看预置仪表盘',
        cmd: 'sudo cat > /etc/datadog-agent/conf.d/nginx.d/conf.yaml << \'EOF\'\ninit_config:\ninstances:\n  - nginx_status_url: http://localhost/nginx_status\n    tags:\n      - service:web\n      - env:production\nEOF\nsudo systemctl restart datadog-agent',
        output: '# 重启后 Agent 开始采集 Nginx 的 connections、requests 等指标',
        explain: 'Datadog 提供 400+ 预置集成，只需写 YAML 配置文件就能采集各种中间件和应用的指标，无需编写采集代码。'
      },
      {
        title: '使用 DogStatsD 发送自定义应用指标',
        cmd: 'cat > app_metrics.py << \'EOF\'\nfrom datadog import initialize, statsd\nimport time\n\noptions = {\'statsd_host\': \'127.0.0.1\', \'statsd_port\': 8125}\ninitialize(**options)\n\ndef process_order(order_id):\n    start = time.time()\n    # 模拟业务逻辑\n    time.sleep(0.1)\n    duration = time.time() - start\n    statsd.histogram(\'order.processing_time\', duration, tags=[\'service:orders\'])\n    statsd.increment(\'order.processed\', tags=[\'status:success\'])\n    return duration\n\nfor i in range(100):\n    process_order(i)\nEOF\npython3 app_metrics.py',
        output: '# 100 个订单处理完成，指标已发送到 DogStatsD\n# 在 Datadog Metrics Explorer 可看到 order.processing_time 和 order.processed',
        explain: 'DogStatsD 是 StatsD 协议的扩展，支持 histogram、gauge、counter、distribution 等指标类型，应用代码通过 UDP 发送指标，延迟极低。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Datadog 仪表盘显示 No data，Agent 状态正常但无数据',
        cause: 'Agent 配置文件中 api_key 错误或网络无法连接 Datadog 后端（443 端口被防火墙拦截）',
        fix: '运行 datadog-agent status 检查 connectivity，确认 api_key 有效，检查防火墙是否允许出站 HTTPS'
      },
      {
        symptom: '告警规则频繁触发但实际服务正常，产生大量误报',
        cause: '告警阈值设置过紧或查询窗口太短，瞬时波动触发误报',
        fix: '调整告警查询时间窗口（如 avg(last_5m)），添加 for 持续时间条件，使用 forecast 或 anomaly 检测替代静态阈值'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Datadog 中创建一个 Monitor，当 Web 服务的错误率超过 5% 时触发告警',
        hint: '使用 Metric Alert 类型，查询 avg:web.errors{*}.as_rate() / avg:web.requests{*}.as_rate()',
        answer: '创建 Metric Alert，query 为 avg(last_5m):avg:web.errors{*}.as_rate() / avg:web.requests{*}.as_rate() > 0.05，设置 warning 阈值为 0.03，配置通知渠道（Slack/PagerDuty）'
      },
      {
        level: '进阶',
        task: '使用 Datadog APM 追踪一个跨 3 个微服务的请求链路',
        hint: '需要安装 dd-trace 库并配置 APM Agent',
        answer: '在三个服务中分别安装 dd-trace（Python: ddtrace-run, Node: dd-trace），配置 DD_ENV、DD_SERVICE、DD_VERSION 标签，启用 Distributed Tracing，在 APM 页面可看到完整的 trace 火焰图，包含每个 span 的耗时和状态'
      }
    ]
  },
  "Yq8kVoRf20aL_o4VZU5--": {
    mentalModel: '容器编排是自动化管理大规模容器集群的指挥官，如同交响乐团的指挥，决定每个容器在哪里运行、何时伸缩、如何自愈，让成百上千个容器协同工作。',
    handsOn: [
      {
  title: '理解编排的核心职责：调度、伸缩、自愈',
  cmd: '# 见下方说明',
  explain: '**容器编排的三大核心能力**: 1. 调度（Scheduling）：根据资源需求、亲和性规则、污点容忍，将容器分配到最合适的节点\n2. 伸缩（Scaling）：根据 CPU/内存/自定义指标自动增减副本数，如 HPA 根据 QPS 扩容\n3. 自愈（Self-healing）：容器崩溃自动重启，节点故障自动迁移 Pod，健康检查失败自动重新调度\n\n**主流编排工具对比**: Kubernetes：功能最全，生态最大，适合中大规模\nDocker Swarm：简单易用，与 Docker 深度集成，适合小团队\nNomad：HashiCorp 出品，支持容器和非容器工作负载，轻量灵活\nECS：AWS 原生，与 AWS 服务深度集成，适合纯 AWS 环境\n\n**编排带来的运维变革**: 手动时代：SSH 到服务器，docker run 启动容器，手动处理故障\n编排时代：声明式配置，Git 管理版本，系统自动执行调度、伸缩、故障恢复\n结果：运维从"操作工人"变为"系统设计师"，专注架构而非操作'
},
      {
        title: '使用 Docker Compose 体验基础编排',
        cmd: 'cat > docker-compose.yml << \'EOF\'\nversion: "3.8"\nservices:\n  web:\n    image: nginx:alpine\n    deploy:\n      replicas: 3\n      restart_policy:\n        condition: on-failure\n    ports:\n      - "8080-8082:80"\n  redis:\n    image: redis:alpine\n    deploy:\n      replicas: 1\nEOF\ndocker compose up -d --scale web=3',
        output: 'Creating network "app_default" with the default driver\nCreating app_redis_1 ... done\nCreating app_web_1   ... done\nCreating app_web_2   ... done\nCreating app_web_3   ... done',
        explain: 'Docker Compose 是最简单的编排工具，通过 YAML 定义多容器应用，支持副本、重启策略、网络隔离，适合单机开发环境。'
      },
      {
        title: '观察 Kubernetes 的自动调度与自愈',
        cmd: 'kubectl create deployment nginx --image=nginx:alpine --replicas=3 && kubectl get pods -o wide && kubectl delete pod $(kubectl get pods -o name | head -1) && sleep 3 && kubectl get pods',
        output: 'NAME                     READY   STATUS    RESTARTS   AGE   IP           NODE\nnginx-7d4f6bf4b-abc12   1/1     Running   0          30s   10.244.1.5   node-1\nnginx-7d4f6bf4b-def34   1/1     Running   0          30s   10.244.2.8   node-2\nnginx-7d4f6bf4b-ghi56   1/1     Running   0          30s   10.244.1.6   node-1\n# 删除一个 Pod 后\nnginx-7d4f6bf4b-abc12   1/1     Terminating   0          1m    10.244.1.5   node-1\nnginx-7d4f6bf4b-def34   1/1     Running       0          1m    10.244.2.8   node-2\nnginx-7d4f6bf4b-ghi56   1/1     Running       0          1m    10.244.1.6   node-1\nnginx-7d4f6bf4b-jkl78   1/1     Running       0          2s    10.244.2.9   node-2',
        explain: 'Kubernetes 的 Deployment 控制器持续确保副本数为 3，当一个 Pod 被删除，控制器立即创建新 Pod 补充，实现自愈。调度器根据节点资源情况选择新 Pod 的放置位置。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Pod 一直处于 Pending 状态，无法被调度到任何节点',
        cause: '集群资源不足（CPU/内存请求超过节点容量），或节点存在污点（Taint）而 Pod 没有对应的容忍（Toleration）',
        fix: '运行 kubectl describe pod 查看 Events 中的调度失败原因，检查节点资源 kubectl top nodes，调整 resource requests 或添加节点'
      },
      {
        symptom: '服务扩缩容后新 Pod 无法接收流量',
        cause: '新 Pod 的 Readiness Probe 未通过，Endpoint Controller 未将其加入 Service 的 Endpoints 列表',
        fix: '检查 Pod 的 readiness probe 配置，确认应用启动后探针返回成功，kubectl describe pod 查看 Probe 状态'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 Docker Compose 部署一个包含 Web、API、数据库三个服务的应用，配置健康检查和依赖顺序',
        hint: '使用 depends_on 和 healthcheck 指令',
        answer: '在 docker-compose.yml 中为数据库配置 healthcheck（如 pg_isready），API 通过 depends_on: db: condition: service_healthy 确保数据库就绪后才启动，Web 依赖 API，实现有序启动'
      },
      {
        level: '进阶',
        task: '在 Kubernetes 中配置 Pod 反亲和性，确保同一服务的副本分散到不同节点',
        hint: '使用 podAntiAffinity 和 topologyKey',
        answer: '在 Deployment 的 spec.template.spec.affinity.podAntiAffinity 中配置 requiredDuringSchedulingIgnoredDuringExecution，topologyKey 设为 kubernetes.io/hostname，labelSelector 匹配当前 Deployment 的标签，确保同 label 的 Pod 不会调度到同一节点'
      }
    ]
  },
  "wNguM6-YEznduz3MgBCYo": {
    mentalModel: '可观测性是系统的"自我表达能力"——通过指标(Metrics)、日志(Logs)、追踪(Traces)三大支柱，让外部无需打开黑盒就能推断系统内部状态，如同医生通过体温、血压、心电图诊断病情。',
    handsOn: [
      {
  title: '理解可观测性三大支柱及其协同',
  cmd: '# 见下方说明',
  explain: '**Metrics（指标）——系统的温度计**: 指标是时间序列数值数据，如 CPU 使用率、请求 QPS、错误率\n特点：存储小、查询快、适合告警\n局限：只能告诉你"发生了什么"，无法深入"为什么"\n工具：Prometheus、Datadog、InfluxDB\n\n**Logs（日志）——系统的日记本**: 日志是离散的事件记录，包含时间戳和上下文\n特点：信息丰富、可搜索、适合事后分析\n局限：数据量大、成本高、难以关联\n工具：ELK Stack、Loki、Splunk\n\n**Traces（追踪）——系统的 X 光片**: 追踪记录一个请求在分布式系统中的完整路径，由多个 Span 组成\n特点：可视化调用链、定位瓶颈、理解依赖\n局限：采样率影响精度、存储成本高\n工具：Jaeger、Zipkin、Tempo'
},
      {
        title: '使用 OpenTelemetry 同时采集三大支柱数据',
        cmd: 'cat > otel_collector_config.yaml << \'EOF\'\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n        endpoint: 0.0.0.0:4317\n      http:\n        endpoint: 0.0.0.0:4318\nexporters:\n  prometheus:\n    endpoint: 0.0.0.0:8889\n  loki:\n    endpoint: http://loki:3100/loki/api/v1/push\n  jaeger:\n    endpoint: jaeger:14250\nservice:\n  pipelines:\n    metrics:\n      receivers: [otlp]\n      exporters: [prometheus]\n    logs:\n      receivers: [otlp]\n      exporters: [loki]\n    traces:\n      receivers: [otlp]\n      exporters: [jaeger]\nEOF\ndocker run -v $(pwd)/otel_collector_config.yaml:/etc/otel/config.yaml otel/opentelemetry-collector:0.88.0',
        output: '2026-05-27T10:00:00.000Z\tinfo\tservice/telemetry.go:110\tSetting up own telemetry...\n2026-05-27T10:00:00.100Z\tinfo\tpipelines/pipelines.go:74\tStarting exporters...\n2026-05-27T10:00:00.200Z\tinfo\tpipelines/pipelines.go:84\tPipeline is started.\t{"kind": "pipeline", "name": "metrics"}\n2026-05-27T10:00:00.250Z\tinfo\tpipelines/pipelines.go:84\tPipeline is started.\t{"kind": "pipeline", "name": "logs"}\n2026-05-27T10:00:00.300Z\tinfo\tpipelines/pipelines.go:84\tPipeline is started.\t{"kind": "pipeline", "name": "traces"}',
        explain: 'OpenTelemetry Collector 是统一的数据管道，接收 OTLP 协议的指标、日志、追踪数据，路由到不同的后端存储（Prometheus/Loki/Jaeger），实现三大支柱的统一采集。'
      },
      {
        title: '通过三大支柱协同定位生产问题',
        cmd: 'echo "=== 场景：API 响应变慢 ===" && echo "Step 1: 查看指标 - 发现 p99 延迟从 200ms 飙升到 2s" && echo "curl -s http://prometheus:9090/api/v1/query?query=histogram_quantile(0.99,rate(http_request_duration_seconds_bucket[5m]))" && echo "Step 2: 查看追踪 - 找到慢请求的完整调用链，发现数据库查询占 1.8s" && echo "Step 3: 查看日志 - 搜索该 trace_id 关联的日志，发现慢查询 SQL" && echo "kubectl logs deployment/api | grep \\"trace_id=abc123\\" && echo \\"SELECT * FROM orders WHERE user_id = 12345  -- 缺少索引，全表扫描\\""',
        output: '=== 场景：API 响应变慢 ===\nStep 1: 查看指标 - 发现 p99 延迟从 200ms 飙升到 2s\ncurl -s http://prometheus:9090/api/v1/query?query=histogram_quantile(0.99,rate(http_request_duration_seconds_bucket[5m]))\nStep 2: 查看追踪 - 找到慢请求的完整调用链，发现数据库查询占 1.8s\nStep 3: 查看日志 - 搜索该 trace_id 关联的日志，发现慢查询 SQL\nkubectl logs deployment/api | grep "trace_id=abc123"\nSELECT * FROM orders WHERE user_id = 12345  -- 缺少索引，全表扫描',
        explain: '可观测性的真正价值在于三大支柱的关联：指标发现问题 → 追踪定位瓶颈 → 日志查看细节。通过 trace_id 关联三者，实现从宏观到微观的完整诊断链。'
      }
    ],
    diagnosis: [
      {
        symptom: '系统告警频繁但运维团队无法快速定位根因，MTTR（平均修复时间）很长',
        cause: '只实现了监控（Metrics）但缺乏日志和追踪，无法从"知道出了问题"快速定位到"哪里出了问题、为什么"',
        fix: '补全可观测性三大支柱：引入结构化日志（JSON 格式），集成分布式追踪（OpenTelemetry），建立 trace_id 关联机制，实现从告警到根因的完整链路'
      },
      {
        symptom: '追踪系统显示大量 span，但无法关联到具体的日志条目',
        cause: '日志中未注入 trace_id 和 span_id，三大支柱数据孤立，无法交叉查询',
        fix: '在日志输出时注入 trace context（trace_id, span_id），使用 OpenTelemetry SDK 的 context propagation 功能，确保日志、指标、追踪共享相同的关联标识'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 Node.js 服务添加结构化日志，每条日志包含 timestamp、level、service、trace_id 字段',
        hint: '使用 pino 或 winston 日志库，配合 OpenTelemetry 的 context API',
        answer: '使用 pino 创建 logger，配置 messageKey、timestamp、formatters 输出 JSON 格式，在中间件中从 OpenTelemetry context 获取 trace_id 和 span_id，注入到每条日志的 fields 中'
      },
      {
        level: '进阶',
        task: '设计一个 SLO（服务级别目标）监控体系，当错误预算消耗过快时自动触发告警',
        hint: '使用多窗口告警策略，结合 burn rate（消耗速率）',
        answer: '定义 SLO（如 99.9% 成功率），计算错误预算（0.1% 请求可失败），配置多窗口告警：1h burn rate > 14.4x 触发 Page，6h burn rate > 6x 触发 Warning，24h burn rate > 3x 触发 Ticket，使用 Prometheus recording rules 预计算 burn rate'
      }
    ]
  },
  "zuBAjrqQPjj-0DHGjCaqT": {
    mentalModel: '制品管理是 CI/CD 流水线的"仓库管理员"——存储、版本化、分发构建产物（Docker 镜像、JAR 包、Helm Chart），确保每次部署使用的制品都经过验证且可追溯。',
    handsOn: [
      {
        title: '搭建私有 Docker Registry 并推送镜像',
        cmd: 'docker run -d -p 5000:5000 --name registry registry:2 && docker tag nginx:alpine localhost:5000/myapp:1.0.0 && docker push localhost:5000/myapp:1.0.0',
        output: 'The push refers to repository [localhost:5000/myapp]\n48ecf305gfe2: Pushed\n64b2c736afab: Pushed\ndigest: sha256:abc123... size: 739\nlocalhost:5000/myapp:1.0.0',
        explain: 'Docker Registry 是最简单的制品仓库，存储 Docker 镜像，支持多版本标签，可通过 HTTP API 查询和拉取。生产环境需配置 TLS 和认证。'
      },
      {
        title: '使用 Nexus Repository 管理多类型制品',
        cmd: 'docker run -d -p 8081:8081 --name nexus sonatype/nexus3 && echo "等待 Nexus 启动（约 60s）..." && sleep 60 && curl -u admin:$(docker exec nexus cat /nexus-data/admin.password) http://localhost:8081/service/rest/v1/repositories',
        output: '[{"name":"maven-central","type":"proxy","format":"maven2"},\n {"name":"maven-releases","type":"hosted","format":"maven2"},\n {"name":"nuget.org","type":"proxy","format":"nuget"}]',
        explain: 'Nexus 是通用制品仓库，支持 Maven、npm、Docker、PyPI、NuGet 等多种格式，一个实例管理所有类型的制品，提供代理、宿主、分组三种仓库类型。'
      },
      {
        title: '使用 Helm Chart 仓库管理 Kubernetes 应用包',
        cmd: 'helm create myapp && helm package myapp --version 1.2.3 && helm repo index . --url https://charts.example.com && helm push myapp-1.2.3.tgz oci://registry.example.com/helm',
        output: 'Successfully packaged chart and saved it to: /home/user/myapp-1.2.3.tgz\nPushed: registry.example.com/helm/myapp:1.2.3\nDigest: sha256:def456...',
        explain: 'Helm Chart 是 Kubernetes 应用的打包格式，包含 YAML 模板和依赖关系。OCI Registry 统一存储 Docker 镜像和 Helm Chart，简化制品管理基础设施。'
      }
    ],
    diagnosis: [
      {
        symptom: 'CI 构建成功但部署失败，提示 image not found 或 manifest unknown',
        cause: '镜像标签不一致（CI 推送的 tag 与部署配置中的 tag 不同），或镜像被垃圾回收策略清理',
        fix: '使用不可变标签（如 Git SHA 或构建号）代替 latest，配置制品保留策略避免误删，在 CI 和部署配置中使用相同的变量引用镜像 tag'
      },
      {
        symptom: 'Docker pull 速度极慢，跨地域部署时经常超时',
        cause: '所有节点都从中心 Registry 拉取镜像，跨地域网络延迟高',
        fix: '部署 Registry Mirror（如 Dragonfly、Harbor 的 P2P 分发），或在每个地域部署本地 Registry 副本，配置 pull-through cache 自动同步'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 GitHub Actions 在每次合并到 main 分支时自动构建 Docker 镜像并推送到私有 Registry',
        hint: '使用 docker/build-push-action，tag 使用 Git SHA',
        answer: '在 workflow 中 checkout 代码，登录 Registry（docker login），使用 build-push-action 构建并推送，tag 格式为 registry/app:${{ github.sha }}，同时推送 latest tag 便于快速部署'
      },
      {
        level: '进阶',
        task: '实现制品的漏洞扫描和签名验证，确保只有安全的镜像才能部署',
        hint: '使用 Trivy 扫描，Cosign 签名，OPA 策略验证',
        answer: 'CI 中用 trivy image 扫描漏洞（--severity HIGH,CRITICAL --exit-code 1 阻断），通过后用 cosign sign 签名，部署时用 cosign verify 验证签名，配合 Kubernetes Admission Controller（如 Kyverno）拒绝未签名的镜像'
      }
    ]
  },
  "-INN1qTMLimrZgaSPCcHj": {
    mentalModel: 'GitOps 是以 Git 为唯一事实来源的运维模式——所有基础设施和应用配置都存储在 Git 中，通过自动化工具持续将 Git 状态同步到集群，如同用版本控制管理整个数据中心。',
    handsOn: [
      {
        title: '使用 Argo CD 实现 GitOps 自动部署',
        cmd: 'kubectl create namespace argocd && kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml && kubectl port-forward svc/argocd-server -n argocd 8080:443',
        output: 'namespace/argocd created\ncustomresourcedefinition.apiextensions.k8s.io/applications.argoproj.io created\n...\nForwarding from 127.0.0.1:8080 -> 8080\nForwarding from [::1]:8080 -> 8080',
        explain: 'Argo CD 是 Kubernetes 原生的 GitOps 控制器，持续监控 Git 仓库和集群状态，自动检测并同步差异，提供可视化的应用拓扑和同步历史。'
      },
      {
        title: '创建 Argo CD Application 连接 Git 仓库',
        cmd: 'cat > app.yaml << \'EOF\'\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: argocd\nspec:\n  project: default\n  source:\n    repoURL: https://github.com/myorg/myapp-config.git\n    targetRevision: main\n    path: kubernetes/\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: production\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true\n    syncOptions:\n      - CreateNamespace=true\nEOF\nkubectl apply -f app.yaml',
        output: 'application.argoproj.io/myapp created\n# Argo CD 开始监控 Git 仓库并同步配置到 production namespace',
        explain: 'Application 资源定义 GitOps 的核心配置：Git 源（repoURL + path + revision）、目标集群、同步策略。automated 模式实现全自动同步，prune 删除 Git 中移除的资源，selfHeal 修复手动修改。'
      },
      {
        title: '验证 GitOps 自愈能力：手动修改后被自动恢复',
        cmd: 'echo "当前 Deployment 副本数：" && kubectl get deployment myapp -n production -o jsonpath=\'{.spec.replicas}\' && echo "" && kubectl scale deployment myapp -n production --replicas=1 && echo "手动缩容后副本数：" && kubectl get deployment myapp -n production -o jsonpath=\'{.spec.replicas}\' && sleep 10 && echo "Argo CD 自愈后副本数：" && kubectl get deployment myapp -n production -o jsonpath=\'{.spec.replicas}\'',
        output: '当前 Deployment 副本数：3\n手动缩容后副本数：1\nArgo CD 自愈后副本数：3',
        explain: 'Argo CD 的 selfHeal 机制持续对比 Git 中的期望状态（3 副本）和集群中的实际状态（1 副本），发现漂移后自动将集群状态恢复为 Git 定义的状态，防止配置漂移。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Argo CD 显示应用状态为 OutOfSync，但 Git 和集群配置看起来一致',
        cause: 'Kubernetes 资源的 default 值或 webhook 注入的字段导致实际状态与 Git 定义存在差异（如 ServiceAccount 自动注入的 token secret）',
        fix: '在 Application 中配置 ignoreDifferences 忽略特定字段的差异，或使用 jsonPointers 精确指定要忽略的路径'
      },
      {
        symptom: 'GitOps 同步失败，提示 "comparison error" 或资源无法应用',
        cause: 'Git 中的 YAML 语法错误、Kubernetes API 版本不兼容、或资源依赖顺序问题（如 CRD 未先创建）',
        fix: '检查 Argo CD 的 Sync 日志获取具体错误，使用 sync waves（metadata.annotations: argocd.argoproj.io/sync-wave）控制资源创建顺序，确保 CRD 先于 CR 创建'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 Argo CD 部署一个应用，配置自动同步和自动剪枝（prune），验证删除 Git 中的资源文件后集群自动清理',
        hint: '在 syncPolicy.automated 中设置 prune: true',
        answer: '创建 Application 资源，配置 automated.prune: true，推送代码到 Git，确认应用部署成功，然后删除 Git 中的一个 ConfigMap，等待同步后验证集群中该 ConfigMap 已被自动删除'
      },
      {
        level: '进阶',
        task: '实现多环境 GitOps 部署：dev、staging、production 使用不同分支和不同参数',
        hint: '使用 Kustomize overlay 或 Helm values 文件区分环境',
        answer: 'Git 仓库结构：base/（共享配置）+ overlays/dev、overlays/staging、overlays/production（环境特定配置）。每个环境创建独立的 Application，指向对应的 overlay 路径，targetRevision 分别为 dev、staging、main 分支，实现环境隔离和独立发布节奏'
      }
    ]
  },
  "8rd7T5ahK2I_zh5co-IF-": {
    mentalModel: 'Jaeger 是分布式追踪系统，如同给微服务请求装上 GPS 追踪器，可视化一个请求在多个服务间的完整旅程，精确标注每段路程的耗时，帮你找到性能瓶颈和故障点。',
    handsOn: [
      {
        title: '部署 Jaeger All-in-One 并查看 UI',
        cmd: 'docker run -d --name jaeger -p 16686:16686 -p 4317:4317 -p 4318:4318 jaegertracing/all-in-one:1.51 && echo "Jaeger UI: http://localhost:16686"',
        output: 'Unable to find image \'jaegertracing/all-in-one:1.51\' locally\n1.51: Pulling from jaegertracing/all-in-one\n...\ndocker.io/jaegertracing/all-in-one:1.51\nJaeger UI: http://localhost:16686',
        explain: 'All-in-One 模式包含 Agent、Collector、Query、Storage 四个组件，适合开发和测试。生产环境应使用分布式部署（独立 Collector + Elasticsearch/Cassandra 存储）。'
      },
      {
        title: '在 Python 应用中集成 OpenTelemetry 发送追踪到 Jaeger',
        cmd: 'pip install opentelemetry-api opentelemetry-sdk opentelemetry-exporter-otlp && cat > traced_app.py << \'EOF\'\nfrom opentelemetry import trace\nfrom opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter\nfrom opentelemetry.sdk.trace import TracerProvider\nfrom opentelemetry.sdk.trace.export import BatchSpanProcessor\nimport requests, time\n\n# 配置追踪\nexporter = OTLPSpanExporter(endpoint="http://localhost:4317", insecure=True)\nprovider = TracerProvider()\nprovider.add_span_processor(BatchSpanProcessor(exporter))\ntrace.set_tracer_provider(provider)\ntracer = trace.get_tracer("order-service")\n\ndef process_order(order_id):\n    with tracer.start_as_current_span("process_order") as root_span:\n        root_span.set_attribute("order.id", order_id)\n        with tracer.start_as_current_span("validate_inventory"):\n            time.sleep(0.05)  # 模拟库存检查\n        with tracer.start_as_current_span("charge_payment"):\n            time.sleep(0.1)   # 模拟支付\n        with tracer.start_as_current_span("send_confirmation"):\n            time.sleep(0.03)  # 模拟发送确认\n        root_span.set_attribute("order.status", "completed")\n\nfor i in range(10):\n    process_order(f"ORD-{i}")\nEOF\npython3 traced_app.py',
        output: '# 10 个订单处理完成\n# 在 Jaeger UI (http://localhost:16686) 的 Service 下拉选择 "order-service"\n# 可看到 10 个 trace，每个包含 4 个 span：process_order → validate_inventory + charge_payment + send_confirmation',
        explain: 'OpenTelemetry SDK 自动将 span 数据通过 OTLP 协议发送到 Jaeger Collector，每个 span 记录操作名称、耗时、属性（如 order.id），span 之间的父子关系形成完整的调用树。'
      },
      {
  title: '使用 Jaeger UI 分析性能瓶颈',
  cmd: '# 见下方说明',
  explain: '**Trace 视图分析**: 打开 Jaeger UI → 选择 Service → 点击 Find Traces → 选择一个 trace\n火焰图显示：\n- process_order (总耗时 180ms)\n  ├─ validate_inventory (50ms) - 28%\n  ├─ charge_payment (100ms) - 56% ← 瓶颈\n  └─ send_confirmation (30ms) - 17%\n结论：charge_payment 占总耗时 56%，是优化重点\n\n**对比分析不同时间段的延迟**: 使用 Jaeger 的 Compare Trace 功能：\n- 选择正常 trace（p50 延迟）和慢 trace（p99 延迟）\n- 对比发现：慢 trace 的 charge_payment span 耗时 800ms（正常 100ms）\n- 进一步查看 span tags：slow_trace 中 payment_gateway.response_time = 750ms\n- 根因：支付网关在高峰期响应变慢\n\n**配置采样策略控制数据量**: 全量追踪会产生巨量数据，需要配置采样策略：\n- const sampler: 固定采样率（如 0.1 = 10%）\n- probabilistic: 概率采样，适合高 QPS 服务\n- rate limiting: 限制每秒追踪数（如 100 traces/s）\n- remote: 从 Jaeger Agent 动态获取采样策略，无需重启服务'
}
    ],
    diagnosis: [
      {
        symptom: 'Jaeger UI 中看不到某些服务的 trace 数据',
        cause: '该服务未配置 OpenTelemetry SDK，或环境变量 OTEL_EXPORTER_OTLP_ENDPOINT 指向错误的 Collector 地址',
        fix: '检查服务的 OTEL 配置，确认 endpoint 正确，使用 jaeger-agent 的 --reporter.grpc.host-port 指向 Collector，检查网络连通性'
      },
      {
        symptom: '追踪数据量过大导致 Jaeger 存储（Elasticsearch）写入延迟高',
        cause: '采样率设置过高（如 100%），所有请求都被追踪，产生海量 span 数据',
        fix: '配置合理的采样策略：生产环境使用 probabilistic sampler（1-10%），对关键路径使用 rate limiting sampler，使用 Jaeger 的 adaptive sampling 根据流量自动调整'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个包含 API Gateway、User Service、Order Service 的调用链添加分布式追踪',
        hint: '使用 OpenTelemetry 的 context propagation 传递 trace context',
        answer: '在三个服务中分别集成 OpenTelemetry SDK，配置 W3C Trace Context propagator，API Gateway 创建 root span，通过 HTTP Header（traceparent）传递 context 到下游服务，下游服务从 header 中提取 parent span context，创建子 span，形成完整调用链'
      },
      {
        level: '进阶',
        task: '配置 Jaeger 的 Service Performance Monitoring，自动识别性能退化的服务',
        hint: '使用 spanmetrics processor 生成 RED 指标',
        answer: '在 OpenTelemetry Collector 中配置 spanmetrics processor，将 span 数据转换为 Rate（请求率）、Error（错误率）、Duration（延迟）指标，导出到 Prometheus，在 Grafana 中创建 RED 仪表盘，配置告警规则监控性能退化'
      }
    ]
  },
  "XbrWlTyH4z8crSHkki2lp": {
    mentalModel: 'GKE/EKS/AKS 是三大云厂商的托管 Kubernetes 服务——云厂商帮你运维 Kubernetes 控制平面（Master 节点），你只需管理 Worker 节点和部署应用，如同住在物业管理完善的小区，不用自己维护电梯和水电。',
    handsOn: [
      {
  title: '对比三大托管 Kubernetes 服务的特性差异',
  cmd: '# 见下方说明',
  explain: '**控制平面管理**: GKE：控制平面免费（Autopilot 模式连 Worker 也托管），自动升级，多区域集群\nEKS：控制平面收费 $0.10/h，支持 EKS Fargate（无节点模式），与 IAM 深度集成\nAKS：控制平面免费，支持虚拟节点（ACI 突发扩容），与 Azure AD 集成\n\n**自动扩缩容能力**: GKE：Cluster Autoscaler + HPA + VPA（垂直自动扩缩容），Node Auto-provisioning\nEKS：Karpenter（智能节点调度，比 Cluster Autoscaler 更快更灵活），HPA\nAKS：Cluster Autoscaler + HPA，支持 Spot 节点池降低成本\n\n**网络与服务**: GKE：默认使用 Cilium（eBPF），Gateway API 原生支持，Mesh 集成 Istio\nEKS：VPC CNI（Pod 直接使用 VPC IP），ALB Ingress Controller，App Mesh\nAKS：Azure CNI，Application Gateway Ingress，OSM（Open Service Mesh）'
},
      {
        title: '使用 gcloud 创建 GKE Autopilot 集群',
        cmd: 'gcloud container clusters create-auto my-cluster --region us-central1 --cluster-version 1.28 && kubectl get nodes',
        output: 'Creating cluster my-cluster in us-central1...done.\nCreated [https://container.googleapis.com/v1/projects/my-project/zones/us-central1/clusters/my-cluster].\nkubeconfig entry generated for my-cluster.\nNAME                                      STATUS   ROLES    AGE   VERSION\ngk3-my-cluster-default-pool-abc123-xxxx   Ready    <none>   2m    v1.28.3-gke.1200',
        explain: 'GKE Autopilot 模式完全托管节点——你只需定义 Pod 的资源需求，GKE 自动创建和管理节点，按 Pod 实际使用资源计费，无需关心节点运维。'
      },
      {
        title: '使用 eksctl 创建 EKS 集群并添加托管节点组',
        cmd: 'eksctl create cluster --name my-eks --region us-west-2 --nodegroup-name workers --node-type t3.medium --nodes 3 --managed && kubectl get nodes -o wide',
        output: 'EKS cluster "my-eks" in "us-west-2" region is ready\n2 sequential tasks: { create cluster control plane "my-eks",\n  create managed nodegroup "workers" }\nkubectl configured with cluster credentials\nNAME                                        STATUS   ROLES    AGE   VERSION   INTERNAL-IP\nip-192-168-45-123.us-west-2.compute.internal   Ready    <none>   3m    v1.28.0   192.168.45.123\nip-192-168-67-89.us-west-2.compute.internal    Ready    <none>   3m    v1.28.0   192.168.67.89\nip-192-168-12-45.us-west-2.compute.internal    Ready    <none>   3m    v1.28.0   192.168.12.45',
        explain: 'eksctl 是 AWS 官方的 EKS 集群管理工具，自动创建 VPC、子网、IAM 角色、安全组，配置 kubectl 认证。托管节点组由 ASG 管理，支持自动升级和滚动更新。'
      }
    ],
    diagnosis: [
      {
        symptom: 'EKS 集群的 Pod 无法拉取 ECR 私有镜像，提示 unauthorized',
        cause: '节点 IAM 角色缺少 ECR 拉取权限（AmazonEC2ContainerRegistryReadOnly），或 IRSA（IAM Roles for Service Accounts）未正确配置',
        fix: '为节点 IAM 角色附加 AmazonEC2ContainerRegistryReadOnly 策略，或为 ServiceAccount 配置 IRSA 注解 eks.amazonaws.com/role-arn 指向有 ECR 权限的角色'
      },
      {
        symptom: 'GKE 集群升级后部分 Pod 无法启动，提示 "no nodes available to schedule"',
        cause: '新版本 Kubernetes 废弃了旧 API 版本（如 PodSecurityPolicy），或节点的 OS 镜像变更导致容器运行时不兼容',
        fix: '检查 Release Notes 确认 breaking changes，更新 Pod 配置使用新 API（如 Pod Security Admission），使用 GKE release channels 控制升级节奏，先在 regular channel 测试再推 stable'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 EKS 中配置 Karpenter 实现智能节点自动扩缩容',
        hint: '安装 Karpenter Helm Chart，创建 NodePool 和 EC2NodeClass',
        answer: '安装 Karpenter Controller（通过 Helm），创建 EC2NodeClass 定义实例类型（如 t3、m5）和子网，创建 NodePool 设置资源限制和 consolidation 策略，当 Pod Pending 时 Karpenter 秒级创建最合适的节点，空闲时自动合并和删除节点'
      },
      {
        level: '进阶',
        task: '设计跨可用区的高可用 Kubernetes 部署方案，确保单个可用区故障时服务不中断',
        hint: '使用 Pod Anti-Affinity、PDB、多副本跨 AZ 分布',
        answer: 'Deployment 配置 6 副本 + topologySpreadConstraints（maxSkew: 1，topologyKey: topology.kubernetes.io/zone），确保每个 AZ 2 个 Pod；配置 PodDisruptionBudget（minAvailable: 4），使用 Cluster Autoscaler 确保每个 AZ 至少 2 个节点，Service 自动跨 AZ 负载均衡'
      }
    ]
  },
  "XsSnqW6k2IzvmrMmJeU6a": {
    mentalModel: 'Istio 是最流行的 Kubernetes 服务网格——通过在每个 Pod 旁注入 Envoy 代理（Sidecar），实现流量管理、安全通信、可观测性，如同在每个服务旁边放了一个智能路由器，所有进出流量都经过它。',
    handsOn: [
      {
        title: '安装 Istio 并启用自动 Sidecar 注入',
        cmd: 'istioctl install --set profile=demo -y && kubectl label namespace default istio-injection=enabled && kubectl create deployment httpbin --image=kennethreitz/httpbin && kubectl get pods -o jsonpath=\'{.items[0].spec.containers[*].name}\'',
        output: '✔ Istio core installed\n✔ Istiod installed\n✔ Ingress gateways installed\nnamespace/default labeled\ndeployment.apps/httpbin created\nhttpbin istio-proxy',
        explain: 'istioctl install 安装 Istio 控制平面（Istiod），label namespace 后新创建的 Pod 会自动注入 istio-proxy sidecar，每个 Pod 包含业务容器和 Envoy 代理两个容器。'
      },
      {
        title: '使用 VirtualService 实现金丝雀发布',
        cmd: 'cat > canary.yaml << \'EOF\'\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: reviews-route\nspec:\n  hosts:\n    - reviews\n  http:\n    - route:\n        - destination:\n            host: reviews\n            subset: v1\n          weight: 90\n        - destination:\n            host: reviews\n            subset: v2\n          weight: 10\n---\napiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nmetadata:\n  name: reviews-destination\nspec:\n  host: reviews\n  subsets:\n    - name: v1\n      labels:\n        version: v1\n    - name: v2\n      labels:\n        version: v2\nEOF\nkubectl apply -f canary.yaml',
        output: 'virtualservice.networking.istio.io/reviews-route created\ndestinationrule.networking.istio.io/reviews-destination created',
        explain: 'VirtualService 定义路由规则（90% 流量到 v1，10% 到 v2），DestinationRule 定义子集（通过 label 区分版本）。Istio 通过 Envoy 代理在数据层面精确控制流量分配，无需修改应用代码。'
      },
      {
        title: '配置流量镜像和故障注入测试',
        cmd: 'cat > fault-test.yaml << \'EOF\'\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: ratings-fault\nspec:\n  hosts:\n    - ratings\n  http:\n    - fault:\n        delay:\n          percentage:\n            value: 20\n          fixedDelay: 3s\n        abort:\n          percentage:\n            value: 10\n          httpStatus: 503\n      route:\n        - destination:\n            host: ratings\n---\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: reviews-mirror\nspec:\n  hosts:\n    - reviews\n  http:\n    - route:\n        - destination:\n            host: reviews\n            subset: v1\n      mirror:\n        host: reviews\n        subset: v2\n      mirrorPercentage:\n        value: 100\nEOF\nkubectl apply -f fault-test.yaml',
        output: 'virtualservice.networking.istio.io/ratings-fault created\nvirtualservice.networking.istio.io/reviews-mirror created',
        explain: '故障注入：20% 请求延迟 3 秒，10% 请求返回 503，测试服务的容错能力。流量镜像：将 v1 的流量复制到 v2（异步，不影响响应），用于新版本上线前的真实流量验证。'
      }
    ],
    diagnosis: [
      {
        symptom: '启用 Istio 后服务间通信延迟明显增加（从 5ms 到 50ms）',
        cause: 'Envoy sidecar 引入额外跳数，且默认配置未优化（如未启用 connection pooling，未调整并发连接数）',
        fix: '配置 DestinationRule 的 connectionPool（tcp.maxConnections、http.h2UpgradePolicy），调整 Envoy 的 concurrency 参数，使用 Istio 的 telemetry v2 减少指标采集开销'
      },
      {
        symptom: 'Istio mTLS 配置后某些服务通信失败，提示证书验证错误',
        cause: '部分服务未注入 sidecar（如外部服务、Job Pod），但 PeerAuthentication 设置了 STRICT 模式，要求所有通信必须使用 mTLS',
        fix: '为未注入 sidecar 的服务创建 PeerAuthentication 例外（mode: PERMISSIVE），或使用 DestinationRule 为外部服务禁用 mTLS（tls.mode: DISABLE），逐步迁移所有服务到 STRICT 模式'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 Istio 实现基于 HTTP Header 的路由：携带 x-test-user: true 的请求路由到 v2 版本',
        hint: '在 VirtualService 中使用 match.headers 条件',
        answer: '配置 VirtualService 的 http.match 条件为 headers: x-test-user: exact: "true"，匹配的路由到 v2 subset，default route 指向 v1，实现基于 header 的精确灰度测试'
      },
      {
        level: '进阶',
        task: '使用 Istio 的 AuthorizationPolicy 实现零信任网络：只允许特定服务调用支付服务',
        hint: '使用 AuthorizationPolicy 的 from.source.principals 限制调用方',
        answer: '创建 AuthorizationPolicy（action: ALLOW），from.source.principals 设为 cluster.local/ns/default/sa/order-service（只允许 order-service 的 ServiceAccount），to.operation.methods 限制为 POST，path 限制为 /pay，其他所有请求默认拒绝（zero trust 原则）'
      }
    ]
  },
  "pk76Us6z8LoX3f0mhnCyR": {
    mentalModel: 'New Relic 是应用性能监控（APM）领域的先驱——专注于应用层面的深度洞察，从代码级追踪到用户体验指标，如同给应用做全身 CT 扫描，精确到每一行代码的性能表现。',
    handsOn: [
      {
        title: '安装 New Relic APM Agent 并监控 Java 应用',
        cmd: 'curl -Ls https://download.newrelic.com/newrelic/java-agent/newrelic-agent/current/ -o newrelic-java.zip && unzip newrelic-java.zip && cat > newrelic/newrelic.yml << \'EOF\'\ncommon:\n  license_key: YOUR_LICENSE_KEY\n  app_name: My Java App\n  log_level: info\n  transaction_tracer:\n    enabled: true\n    record_sql: obfuscated\nEOF\njava -javaagent:newrelic/newrelic.jar -jar myapp.jar',
        output: 'INFO: New Relic Agent v8.7.0 is initializing...\nINFO: Instrumentation loaded for: com.mysql.jdbc.Driver\nINFO: Instrumentation loaded for: org.springframework.web.servlet.DispatcherServlet\nINFO: New Relic Agent v8.7.0 has started\nINFO: Connected to collector.collector-001.newrelic.com',
        explain: 'New Relic Java Agent 通过 javaagent 机制在 JVM 启动时注入字节码增强，自动追踪 Spring、MySQL、Redis、HTTP 等框架的性能，无需修改应用代码。'
      },
      {
        title: '使用 NRQL（New Relic Query Language）分析应用数据',
        cmd: 'echo "=== NRQL 查询示例 ===" && echo "# 过去 1 小时错误率最高的 5 个服务" && echo "SELECT percentage(count(*), WHERE error IS true) AS \'error_rate\' FROM Transaction FACET appName LIMIT 5 SINCE 1 hour ago" && echo "" && echo "# P95 响应时间趋势" && echo "SELECT percentile(duration, 95) FROM Transaction TIMESERIES 5 minutes SINCE 24 hours ago" && echo "" && echo "# 最慢的数据库查询" && echo "SELECT average(duration), max(duration), count(*) FROM SqlTransaction FACET operation ORDER BY average(duration) DESC LIMIT 10 SINCE 1 day ago"',
        output: '=== NRQL 查询示例 ===\n# 过去 1 小时错误率最高的 5 个服务\nSELECT percentage(count(*), WHERE error IS true) AS \'error_rate\' FROM Transaction FACET appName LIMIT 5 SINCE 1 hour ago\n结果：\n| appName       | error_rate |\n|---------------|------------|\n| payment-svc   | 4.2%       |\n| order-svc     | 1.8%       |\n| user-svc      | 0.3%       |',
        explain: 'NRQL 是 New Relic 的查询语言，类似 SQL，支持 FACET（分组）、TIMESERIES（时间序列）、WHERE（过滤）、LIMIT（限制），可以灵活查询所有遥测数据。'
      },
      {
  title: '配置 New Relic Alerts 和异常检测',
  cmd: '# 见下方说明',
  explain: '**创建告警策略**: 1. 创建 Alert Policy：Production Services\n2. 添加 Condition：Apdex < 0.7 for 5 minutes（用户体验下降）\n3. 添加 Condition：Error rate > 5% for 3 minutes（错误率飙升）\n4. 添加 Condition：Response time (95th percentile) > 2s for 10 minutes（性能退化）\n5. 配置 Notification Channel：Slack #alerts-prod + PagerDuty on-call\n\n**使用 Anomaly Detection（异常检测）**: New Relic 的 Baseline 告警基于机器学习：\n- 学习过去 7 天的正常模式（考虑工作日/周末、白天/夜晚的差异）\n- 自动检测偏离基线的异常（如周一上午 10 点的 QPS 通常是 1000，突然变成 5000）\n- 减少误报：不会在正常高峰时告警，只在真正异常时触发\n\n**关联告警与根因分析**: 当告警触发时，New Relic 自动关联：\n- 相关的部署事件（是否刚刚发布了新版本？）\n- 相关的错误追踪（哪些异常在增加？）\n- 相关的基础设施指标（是否某个节点的 CPU 飙升？）\n- 相关的日志（错误日志是否同时增加？）\n结果：告警通知中包含初步根因分析，大幅缩短 MTTR'
}
    ],
    diagnosis: [
      {
        symptom: 'New Relic APM 显示应用的吞吐量（Throughput）突然下降但错误率未增加',
        cause: '上游服务或负载均衡器限流，导致请求未到达应用层；或 New Relic Agent 采样率变化',
        fix: '检查上游负载均衡器的监控（如 ALB 的 503 计数），确认 New Relic 的采样配置（newrelic.yml 中的 transaction_tracer.transaction_threshold），检查是否有流量路由变更'
      },
      {
        symptom: 'New Relic 的数据库查询耗时与应用实际执行时间不匹配',
        cause: 'New Relic 记录的是网络往返+数据库执行时间，不包含连接池等待时间；或 SQL 被截断（record_sql 配置为 off）',
        fix: '将 record_sql 设为 obfuscated（记录脱敏 SQL）或 raw（完整 SQL），检查连接池配置，在 New Relic 的 Databases 页面查看连接池等待指标'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 NRQL 查询找出过去 7 天中响应时间最长的 10 个 API 端点',
        hint: '使用 FACET 按 name（事务名）分组，ORDER BY 排序',
        answer: 'SELECT average(duration), percentile(duration, 95), count(*) FROM Transaction WHERE type = \'Web\' FACET name ORDER BY percentile(duration, 95) DESC LIMIT 10 SINCE 7 days ago，结果包含每个端点的平均延迟、P95 延迟和调用次数'
      },
      {
        level: '进阶',
        task: '配置 New Relic Synthetics 模拟用户从不同地区访问关键用户旅程，设置断言验证',
        hint: '使用 Scripted Browser 或 API Test',
        answer: '创建 Scripted Browser Monitor，模拟用户登录→浏览商品→加入购物车→结账流程，从 5 个地区（美东、欧洲、亚太等）每 5 分钟执行一次，断言页面加载 < 3s、关键元素存在、购物车数量正确，失败时触发 PagerDuty 告警'
      }
    ]
  },
  "FE2h-uQy6qli3rKERCI1j": {
    mentalModel: 'AWS ECS/Fargate 是 AWS 原生的容器运行平台——ECS 负责调度容器到 EC2 实例，Fargate 进一步抽象掉服务器，你只需定义任务（Task），AWS 自动分配计算资源并运行，如同从"自己开车"升级到"打出租车"。',
    handsOn: [
      {
        title: '使用 ECS CLI 创建集群并运行任务',
        cmd: 'cat > task-definition.json << \'EOF\'\n{\n  "family": "web-app",\n  "networkMode": "awsvpc",\n  "requiresCompatibilities": ["FARGATE"],\n  "cpu": "512",\n  "memory": "1024",\n  "executionRoleArn": "arn:aws:iam::123456789:role/ecsTaskExecutionRole",\n  "containerDefinitions": [\n    {\n      "name": "nginx",\n      "image": "nginx:alpine",\n      "portMappings": [{"containerPort": 80, "protocol": "tcp"}],\n      "logConfiguration": {\n        "logDriver": "awslogs",\n        "options": {\n          "awslogs-group": "/ecs/web-app",\n          "awslogs-region": "us-west-2",\n          "awslogs-stream-prefix": "ecs"\n        }\n      }\n    }\n  ]\n}\nEOF\naws ecs register-task-definition --cli-input-json file://task-definition.json',
        output: '{\n  "taskDefinition": {\n    "taskDefinitionArn": "arn:aws:ecs:us-west-2:123456789:task-definition/web-app:1",\n    "family": "web-app",\n    "revision": 1,\n    "status": "ACTIVE"\n  }\n}',
        explain: 'Task Definition 是 ECS 的蓝图，定义容器镜像、资源需求、网络模式、日志配置。Fargate 模式使用 awsvpc 网络（每个 Task 独立 ENI），无需管理 EC2 实例。'
      },
      {
        title: '创建 ECS Service 实现负载均衡和自动恢复',
        cmd: 'aws ecs create-service --cluster my-cluster --service-name web-service --task-definition web-app:1 --desired-count 3 --launch-type FARGATE --network-configuration "awsvpcConfiguration={subnets=[subnet-abc123,subnet-def456],securityGroups=[sg-xyz789],assignPublicIp=ENABLED}" --load-balancers "targetGroupArn=arn:aws:elasticloadbalancing:us-west-2:123456789:targetgroup/web-tg/abc123,containerName=nginx,containerPort=80"',
        output: '{\n  "service": {\n    "serviceName": "web-service",\n    "taskDefinition": "arn:aws:ecs:us-west-2:123456789:task-definition/web-app:1",\n    "desiredCount": 3,\n    "launchType": "FARGATE",\n    "status": "ACTIVE",\n    "deployments": [\n      {\n        "status": "PRIMARY",\n        "runningCount": 0,\n        "desiredCount": 3,\n        "rolloutState": "IN_PROGRESS"\n      }\n    ]\n  }\n}',
        explain: 'ECS Service 确保指定数量的 Task 持续运行，与 ALB/NLB 集成实现负载均衡，Task 失败时自动重启，支持蓝绿部署和滚动更新。'
      },
      {
        title: '配置 ECS Service Auto Scaling',
        cmd: 'aws application-autoscaling register-scalable-target --service-namespace ecs --resource-id service/my-cluster/web-service --scalable-dimension ecs:service:DesiredCount --min-capacity 2 --max-capacity 10 && aws application-autoscaling put-scaling-policy --service-namespace ecs --resource-id service/my-cluster/web-service --scalable-dimension ecs:service:DesiredCount --policy-name cpu-scaling --policy-type TargetTrackingScaling --target-tracking-scaling-policy-configuration \'{"targetValue": 70.0, "predefinedMetricSpecification": {"predefinedMetricType": "ECSServiceAverageCPUUtilization"}, "scaleOutCooldown": 60, "scaleInCooldown": 300}\'',
        output: '{\n  "policyARN": "arn:aws:autoscaling:us-west-2:123456789:scalingPolicy:abc123:resource/ecs/service/my-cluster/web-service:policyName/cpu-scaling"\n}',
        explain: 'ECS Service Auto Scaling 使用 Application Auto Scaling，支持目标追踪策略（如维持 CPU 70%）、步进策略、计划策略。scaleInCooldown 防止频繁缩容导致容量不足。'
      }
    ],
    diagnosis: [
      {
        symptom: 'ECS Task 启动后立即退出，Event 显示 "Essential container in task exited"',
        cause: '容器启动命令错误、健康检查失败、或资源不足（Fargate 的 CPU/Memory 配置低于应用需求）',
        fix: '检查 Task Definition 的 command 和 entryPoint，查看 CloudWatch Logs 获取容器输出，增加 Fargate 的 cpu/memory 配置，确认健康检查 grace period 足够长'
      },
      {
        symptom: 'ECS Service 部署新版本时旧 Task 不释放，新 Task 无法启动',
        cause: 'deploymentCircuitBreaker 未启用，或新 Task 的健康检查持续失败导致滚动更新卡住',
        fix: '启用 deploymentCircuitBreaker（rollback: true），检查新镜像是否正常启动，调整 healthCheckGracePeriodSeconds，确认 ALB Target Group 的健康检查配置正确'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 ECS 部署一个包含 Web 和 Sidecar（日志收集）两个容器的 Task',
        hint: '在 containerDefinitions 中定义两个容器，配置 links 或共享 volume',
        answer: 'Task Definition 中定义两个 containerDefinitions：web（nginx:alpine，端口 80）和 log-agent（fluentbit，挂载共享 volume /var/log），web 容器将日志写到共享 volume，log-agent 读取并转发到 CloudWatch，实现日志收集解耦'
      },
      {
        level: '进阶',
        task: '设计 ECS 蓝绿部署方案，使用 CodeDeploy 自动切换流量',
        hint: '使用 CODE_DEPLOY 部署控制器，配置两个 Target Group',
        answer: '创建 ECS Service（deploymentController: CODE_DEPLOY），CodeDeploy 创建 Blue/Green 部署组，配置两个 Target Group（blue/green），新 Task 启动在 green TG，通过 listener rule 切换流量（10%→50%→100%），配置 bake time 和自动回滚触发条件（如 ALB 5xx > 5%）'
      }
    ]
  },
  "OXOTm3nz6o44p50qd0brN": {
    mentalModel: 'Consul 是分布式系统的"电话簿+健康检查员"——提供服务注册与发现、健康检查、KV 存储、服务网格四大能力，让微服务能自动找到彼此并建立安全通信。',
    handsOn: [
      {
        title: '启动 Consul 开发服务器并注册服务',
        cmd: 'consul agent -dev -node=machine-1 -bind=127.0.0.1 &  sleep 3 && cat > web-service.json << \'EOF\'\n{\n  "service": {\n    "name": "web",\n    "tags": ["production", "v2"],\n    "port": 8080,\n    "check": {\n      "http": "http://localhost:8080/health",\n      "interval": "10s",\n      "timeout": "1s"\n    }\n  }\n}\nEOF\ncurl -X PUT -d @web-service.json http://localhost:8500/v1/agent/service/register && curl -s http://localhost:8500/v1/catalog/service/web | jq \'.[].ServiceName\'',
        output: '"web"',
        explain: 'Consul Agent 运行在每个节点上，通过 HTTP API 或配置文件注册服务，服务信息存储在 Consul 的分布式 KV 存储中，其他服务可通过 DNS 或 HTTP API 查询服务地址。'
      },
      {
        title: '使用 Consul DNS 和 HTTP API 发现服务',
        cmd: 'echo "=== DNS 查询 ===" && dig @127.0.0.1 -p 8600 web.service.consul SRV +short && echo "" && echo "=== HTTP API 查询 ===" && curl -s http://localhost:8500/v1/health/service/web?passing | jq \'.[0].Service | {Name, Address, Port, Tags}\'',
        output: '=== DNS 查询 ===\n1 1 8080 machine-1.node.consul.\n\n=== HTTP API 查询 ===\n{\n  "Name": "web",\n  "Address": "127.0.0.1",\n  "Port": 8080,\n  "Tags": ["production", "v2"]\n}',
        explain: 'Consul 提供 DNS 接口（端口 8600），服务名自动解析为健康实例的 IP，SRV 记录包含端口号。HTTP API 提供更丰富的查询能力，passing 参数只返回健康检查通过的实例。'
      },
      {
        title: '使用 Consul KV 存储配置并监听变更',
        cmd: 'echo "=== 写入配置 ===" && curl -X PUT -d \'max_connections=100\' http://localhost:8500/v1/kv/config/web/max_connections && curl -X PUT -d \'timeout=30s\' http://localhost:8500/v1/kv/config/web/timeout && echo "" && echo "=== 读取配置 ===" && curl -s http://localhost:8500/v1/kv/config/web/?recurse | jq \'.[] | {key: .Key, value: (.Value | @base64d)}\'',
        output: '=== 写入配置 ===\ntrue\ntrue\n\n=== 读取配置 ===\n{\n  "key": "config/web/max_connections",\n  "value": "max_connections=100"\n}\n{\n  "key": "config/web/timeout",\n  "value": "timeout=30s"\n}',
        explain: 'Consul KV 是分布式键值存储，用于存储动态配置、功能开关、协调信息。支持 Watch 机制（长轮询或 blocking query），配置变更时自动通知应用，无需重启。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Consul 集群中某些服务的健康检查持续失败，但服务实际正常运行',
        cause: '健康检查的 HTTP URL 或端口配置错误，或 Consul Agent 无法访问服务的健康端点（网络隔离或防火墙）',
        fix: '检查服务注册的健康检查配置（URL、端口、超时），确认 Agent 节点能访问服务端口（curl 测试），调整 timeout 和 interval 参数，对于启动慢的服务增加 DeregisterCriticalServiceAfter 延迟'
      },
      {
        symptom: 'Consul 集群的 Leader 频繁切换，服务发现延迟增加',
        cause: '节点间网络延迟高或丢包（跨地域部署），或 Server 节点负载过高导致 Raft 心跳超时',
        fix: '检查节点间网络延迟（ping、mtr），调整 Raft 超时参数（raft_multiplier），确保 Server 节点有足够的 CPU/内存，跨地域部署使用 Consul WAN Federation 而非单集群'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 Consul 实现两个微服务的自动服务发现和负载均衡',
        hint: '服务 A 通过 Consul DNS 查询服务 B 的地址，结合健康检查',
        answer: '服务 B 注册到 Consul（包含健康检查），服务 A 启动时查询 Consul DNS（service-b.service.consul SRV）获取所有健康实例地址，实现客户端负载均衡（如轮询），定期重新查询以感知实例变化'
      },
      {
        level: '进阶',
        task: '使用 Consul Connect（服务网格）实现服务间的 mTLS 加密通信',
        hint: '配置 intention 和 sidecar proxy',
        answer: '启用 Consul Connect，为每个服务配置 sidecar proxy（Envoy），创建 intention 规则（如 web → api: allow，其他 → api: deny），sidecar 自动管理证书和 mTLS，应用代码使用 localhost 通信，sidecar 透明加密和验证身份'
      }
    ]
  },
  "EeWsihH9ehbFKebYoB5i9": {
    mentalModel: 'Service Mesh（服务网格）是微服务通信的基础设施层——通过 Sidecar 代理拦截所有进出流量，统一处理服务发现、负载均衡、加密、监控、限流，将网络复杂性从应用代码中剥离到基础设施层。',
    handsOn: [
      {
  title: '理解 Service Mesh 的架构和工作原理',
  cmd: '# 见下方说明',
  explain: '**数据平面（Data Plane）**: 由 Sidecar 代理（如 Envoy）组成，每个服务 Pod 旁运行一个代理\n所有进出流量经过代理，代理负责：\n- 服务发现：从控制平面获取目标服务地址\n- 负载均衡：智能分配请求（轮询、最少连接、一致性哈希）\n- 安全：mTLS 加密、身份验证、授权\n- 可观测性：自动采集指标、日志、追踪\n- 弹性：重试、超时、熔断、限流\n\n**控制平面（Control Plane）**: 集中管理所有 Sidecar 代理，核心组件：\n- 服务发现：维护服务注册表和端点信息\n- 配置分发：将路由规则、安全策略推送到 Sidecar\n- 证书管理：签发和轮换 mTLS 证书\n- 遥测收集：聚合 Sidecar 上报的指标和追踪\n代表：Istio (Istiod)、Linkerd (linkerd-controller)、Consul Connect\n\n**Service Mesh vs API Gateway vs SDK**: Service Mesh：东西向流量（服务间），透明代理，无需改代码\nAPI Gateway：南北向流量（外部→内部），集中入口，路由聚合\nSDK/Client Library：嵌入应用代码，灵活但侵入性强，升级困难\n最佳实践：Service Mesh 处理服务间通信，API Gateway 处理外部入口'
},
      {
        title: '对比主流 Service Mesh 实现',
        cmd: 'echo "=== Istio vs Linkerd vs Consul Connect ===" && echo "" && echo "Istio:" && echo "  代理: Envoy (功能强大但复杂)" && echo "  部署: 需要 Istiod + ingress/egress gateway" && echo "  资源: 每个 sidecar 约 100MB 内存" && echo "  适用: 大规模集群，需要高级流量管理" && echo "" && echo "Linkerd:" && echo "  代理: micro-proxy (Rust 编写，轻量)" && echo "  部署: linkerd-control-plane + data-plane" && echo "  资源: 每个 sidecar 约 10MB 内存" && echo "  适用: 中小规模，追求简单和性能" && echo "" && echo "Consul Connect:" && echo "  代理: Envoy (可选)" && echo "  部署: Consul server + client + sidecar" && echo "  资源: 中等" && echo "  适用: 已使用 Consul 做服务发现的团队"',
        output: '=== Istio vs Linkerd vs Consul Connect ===\n\nIstio:\n  代理: Envoy (功能强大但复杂)\n  部署: 需要 Istiod + ingress/egress gateway\n  资源: 每个 sidecar 约 100MB 内存\n  适用: 大规模集群，需要高级流量管理\n\nLinkerd:\n  代理: micro-proxy (Rust 编写，轻量)\n  部署: linkerd-control-plane + data-plane\n  资源: 每个 sidecar 约 10MB 内存\n  适用: 中小规模，追求简单和性能\n\nConsul Connect:\n  代理: Envoy (可选)\n  部署: Consul server + client + sidecar\n  资源: 中等\n  适用: 已使用 Consul 做服务发现的团队',
        explain: '选择 Service Mesh 需权衡功能、性能、复杂度：Istio 功能最全但学习曲线陡峭，Linkerd 轻量简单但功能较少，Consul Connect 适合已使用 Consul 的团队。'
      },
      {
        title: '使用 Linkerd 快速体验 Service Mesh 的核心能力',
        cmd: 'curl -sL https://run.linkerd.io/install | sh && linkerd install --crds | kubectl apply -f - && linkerd install | kubectl apply -f - && linkerd check && kubectl annotate namespace default linkerd.io/inject=enabled',
        output: 'linkerd-cni\n√ cni plugin installed\n\nStatus check results are all valid\n\nlinkerd-existence\n√ \'linkerd-config\' config map exists\n√ heartbeat ServiceAccount exists\n√ control plane replica sets are ready\n√ no unschedulable pods\n√ all operator pods are ready\n√ all pods are running',
        explain: 'Linkerd 的安装极简：两条命令安装 CRD 和控制平面，annotate namespace 后自动注入 sidecar。linkerd check 验证所有组件正常运行，整个过程 5 分钟内完成。'
      }
    ],
    diagnosis: [
      {
        symptom: '启用 Service Mesh 后，部分服务间通信失败，日志显示 "connection refused"',
        cause: 'Sidecar 代理尚未就绪时应用已启动，应用尝试连接但 sidecar 的 iptables 规则已生效，流量被拦截但无代理处理',
        fix: '配置 init container 等待 sidecar 就绪（如 wait-for-sidecar），使用 Kubernetes 的 holdApplicationUntilProxyStarts 特性（Istio），或调整 Pod 的启动顺序'
      },
      {
        symptom: 'Service Mesh 的 mTLS 导致与外部系统（如数据库、第三方 API）的连接失败',
        cause: 'Sidecar 对所有出站流量启用 mTLS，但外部系统不支持 mTLS 协议',
        fix: '为外部服务创建 ServiceEntry（Istio）或配置 TLS 例外，设置 egress 规则允许明文通信，逐步将外部服务也纳入 mesh 或使用 egress gateway 统一处理'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Istio 中配置重试策略：对 5xx 错误自动重试 3 次，每次间隔 100ms',
        hint: '使用 VirtualService 的 retries 配置',
        answer: '在 VirtualService 的 http.route 旁配置 retries: attempts: 3, retryOn: "5xx,retriable-4xx", perTryTimeout: 1s，Istio 通过 Envoy 自动重试失败的请求，应用代码无需修改'
      },
      {
        level: '进阶',
        task: '设计 Service Mesh 的渐进式迁移方案：从零开始逐步将服务迁移到 mesh',
        hint: '考虑兼容性、风险、回滚策略',
        answer: '阶段 1：部署 mesh 控制平面，不注入 sidecar；阶段 2：为非关键服务注入 sidecar，配置 PERMISSIVE mTLS（兼容非 mesh 服务）；阶段 3：逐步迁移核心服务，配置 STRICT mTLS；阶段 4：启用全 mesh 模式，配置 AuthorizationPolicy 零信任；每阶段可独立回滚，使用 feature flag 控制迁移进度'
      }
    ]
  },
  "BHny2Emf96suhAlltiEro": {
    mentalModel: 'Datadog 的高级功能（第二层）——从基础监控进阶到 APM、日志分析、安全监控、CI 可视化，如同从"体温计"升级到"全身 MRI+基因检测"，提供从代码到基础设施的全栈洞察。',
    handsOn: [
      {
  title: '使用 Datadog CI Visibility 监控 CI/CD 流水线',
  cmd: '# 见下方说明',
  explain: '**启用 CI Visibility**: 在 CI 环境中安装 datadog-ci 插件：\nGitHub Actions: 添加 datadog/action-setup-ci 步骤\nGitLab CI: 在 before_script 中安装 datadog-ci-agent\nJenkins: 安装 Datadog 插件并配置 API Key\n效果：每次 CI 运行自动采集测试耗时、失败率、覆盖率数据\n\n**分析测试套件性能**: CI Visibility 仪表盘展示：\n- 测试套件总耗时趋势（发现回归）\n- 最慢的 10 个测试用例（优化目标）\n- 测试 flakiness 分析（间歇性失败的测试）\n- 代码覆盖率变化（与 commit 关联）\n示例：发现 integration test 从 5min 增长到 15min，定位到新增的数据库迁移测试未使用 mock\n\n**优化 CI 成本**: 通过 CI Visibility 数据优化：\n- 识别冗余测试（重复覆盖相同代码路径）\n- 智能测试选择（只运行受影响的测试，基于代码变更）\n- 并行化优化（将慢测试拆分到多个 runner）\n- 缓存优化（识别重复下载依赖的测试）\n结果：CI 时间从 30min 降到 8min，成本降低 70%'
},
      {
        title: '使用 Datadog Security Monitoring 检测安全威胁',
        cmd: 'cat > security_rule.json << \'EOF\'\n{\n  "name": "Suspicious SSH Brute Force",\n  "queries": [\n    {\n      "query": "source:auditd @evt.name:ssh @evt.outcome:failure",\n      "groupByFields": ["@network.client.ip"]\n    }\n  ],\n  "cases": [\n    {\n      "name": "High volume SSH failures",\n      "condition": "a > 20",\n      "notifications": ["@pagerduty-security"]\n    }\n  ],\n  "options": {\n    "evaluationWindow": 300,\n    "keepAlive": 3600\n  }\n}\nEOF\necho "安全规则已定义：5 分钟内同一 IP 失败 SSH 登录 > 20 次触发告警"',
        output: '安全规则已定义：5 分钟内同一 IP 失败 SSH 登录 > 20 次触发告警',
        explain: 'Datadog Security Monitoring 从日志和审计数据中检测安全威胁，支持预置规则（CIS Benchmark、MITRE ATT&CK）和自定义规则，与 SIEM 集成实现统一安全管理。'
      },
      {
  title: '使用 Datadog Watchdog 自动发现异常',
  cmd: '# 见下方说明',
  explain: '**Watchdog 的工作原理**: Watchdog 是 Datadog 的 AI 异常检测引擎：\n- 持续分析所有指标和日志，无需手动配置告警\n- 学习正常模式（考虑季节性、趋势、周期性）\n- 自动发现异常模式（如突增、突降、趋势变化）\n- 关联多个异常事件，识别根本原因\n\n**实际场景：Watchdog 发现内存泄漏**: Watchdog Story 示例：\n异常：api-service 的内存使用率呈线性增长（过去 6 小时）\n关联：同时发现 GC 频率增加、响应时间 P99 上升\n根因推断：可能是内存泄漏（持续分配未释放）\n建议：检查最近的代码变更，关注对象缓存和连接池\n结果：发现新版本引入了未关闭的数据库连接，修复后内存稳定\n\n**与 APM 的联动**: Watchdog 发现异常后自动关联 APM 数据：\n- 异常时间段内哪些 endpoint 延迟增加\n- 哪些数据库查询变慢\n- 哪些外部服务调用失败\n- 是否有相关部署事件\n结果：从"发现异常"到"定位根因"的时间从小时级降到分钟级'
}
    ],
    diagnosis: [
      {
        symptom: 'Datadog 日志分析显示大量 "Connection pool exhausted" 错误，但连接池配置看起来合理',
        cause: '存在连接泄漏（获取连接后未正确释放），或某些请求处理时间过长导致连接被长时间占用',
        fix: '启用 APM 追踪慢请求，检查代码中是否正确关闭连接（try-with-resources），调整连接池超时（idleTimeout、maxLifetime），增加连接池监控指标（active/idle/pending）'
      },
      {
        symptom: 'Datadog APM 显示某个服务的错误率突然上升，但日志中无明显错误',
        cause: '错误被上层捕获并静默处理（如 catch 块只记录 debug 日志），或错误发生在中间件层（如超时）但未被业务日志记录',
        fix: '在 Datadog APM 中查看错误 span 的详情（stack trace、tags），检查中间件和框架的错误处理配置，增加 error 级别日志，配置 Datadog 的 error tracking 捕获所有异常'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 Datadog 的 Log Patterns 功能自动聚类日志，快速识别异常日志模式',
        hint: '在 Logs 页面启用 Pattern 视图',
        answer: '在 Datadog Logs 页面切换到 Pattern 视图，系统自动将相似日志聚类为模式（如 "Failed to connect to {ip}:{port}"），按时间分布发现新模式（最近 1 小时出现的 pattern），快速定位异常日志（如新出现的 timeout pattern）'
      },
      {
        level: '进阶',
        task: '设计 Datadog 的全栈监控方案：从用户端到数据库的完整链路监控',
        hint: '整合 RUM、Synthetics、APM、Infrastructure、Logs',
        answer: 'RUM（Real User Monitoring）监控真实用户体验（页面加载、JS 错误），Synthetics 模拟关键用户旅程（登录、下单），APM 追踪后端调用链（API→Service→DB），Infrastructure 监控主机/容器/K8s 资源，Logs 关联所有层的日志，通过 trace_id 和 session_id 实现端到端关联'
      }
    ]
  },
  "VD24HC9qJOC42lbpJ-swC": {
    mentalModel: 'Docker Swarm 是 Docker 原生的容器编排工具——内置于 Docker Engine，用熟悉的 docker service 命令管理多主机容器集群，如同从"手动挡"升级到"自动挡"，简单但功能够用。',
    handsOn: [
      {
        title: '初始化 Swarm 集群并添加节点',
        cmd: 'docker swarm init --advertise-addr 192.168.1.100 && echo "" && echo "=== Manager 节点加入命令 ===" && docker swarm join-token manager && echo "" && echo "=== Worker 节点加入命令 ===" && docker swarm join-token worker',
        output: 'Swarm initialized: current node (abc123) is now a manager.\n\nTo add another manager to this swarm, run:\n  docker swarm join --token SWMTKN-1-manager-token 192.168.1.100:2377\n\nTo add a worker to this swarm, run:\n  docker swarm join --token SWMTKN-1-worker-token 192.168.1.100:2377',
        explain: 'docker swarm init 将当前节点初始化为 Swarm Manager，生成加入令牌。Manager 节点参与集群决策（Raft 共识），Worker 节点只运行容器。生产环境建议 3 或 5 个 Manager 节点（奇数避免脑裂）。'
      },
      {
        title: '创建 Service 并配置滚动更新',
        cmd: 'docker service create --name web --replicas 5 --publish 8080:80 --update-parallelism 2 --update-delay 10s --rollback-parallelism 1 nginx:1.24 && docker service ls && docker service ps web',
        output: 'x7j8k9l2m3n4\nNAME   MODE      REPLICAS   IMAGE        PORTS\nweb    replicated   5/5     nginx:1.24   *:8080->80/tcp\n\nID       NAME     IMAGE       NODE      STATUS\nabc1     web.1    nginx:1.24  node-1    Running 2 minutes\nabc2     web.2    nginx:1.24  node-2    Running 2 minutes\nabc3     web.3    nginx:1.24  node-3    Running 2 minutes\nabc4     web.4    nginx:1.24  node-1    Running 2 minutes\nabc5     web.5    nginx:1.24  node-2    Running 2 minutes',
        explain: 'docker service create 创建可伸缩的服务，--update-parallelism 控制每次更新 2 个容器，--update-delay 间隔 10 秒，--rollback-parallelism 回滚时每次 1 个，确保零停机更新。'
      },
      {
        title: '执行滚动更新和回滚',
        cmd: 'echo "=== 滚动更新到新版本 ===" && docker service update --image nginx:1.25 web && echo "" && echo "=== 更新后状态 ===" && docker service ps web && echo "" && echo "=== 回滚到上一版本 ===" && docker service rollback web && docker service ps web',
        output: '=== 滚动更新到新版本 ===\nweb\noverall progress: 5 out of 5 tasks\n1/5: running   [==================================================>\n2/5: running   [==================================================>\n...\nverify: Service converged\n\n=== 回滚到上一版本 ===\nweb\noverall progress: 5 out of 5 tasks\nverify: Service converged',
        explain: 'docker service update 执行滚动更新，每次替换指定数量的容器，确保服务持续可用。docker service rollback 回滚到上一版本，Swarm 自动维护版本历史。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Swarm Service 的部分 Task 状态为 "Rejected"，无法启动',
        cause: '节点资源不足（CPU/内存耗尽），或镜像拉取失败（私有 Registry 认证问题），或端口冲突（多个 Service 使用相同的 host port）',
        fix: '运行 docker service ps web 查看 rejected task 的错误信息，docker node inspect 检查节点资源，docker service logs 查看容器启动日志，调整 resource limits 或添加节点'
      },
      {
        symptom: 'Swarm 集群的 Manager 节点故障后集群无法正常工作',
        cause: 'Manager 节点数量为偶数或只有 1 个，无法达成 Raft 共识（需要多数派存活）',
        fix: '确保 Manager 节点数量为奇数（3 或 5），使用 docker swarm join-token manager 添加新的 Manager 节点，如果所有 Manager 都丢失需要从备份恢复（/var/lib/docker/swarm）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 Swarm Service，配置健康检查、资源限制、环境变量和挂载卷',
        hint: '使用 --health-cmd、--limit-cpu、--env、--mount 参数',
        answer: 'docker service create --name api --replicas 3 --health-cmd "curl -f http://localhost:8080/health || exit 1" --health-interval 30s --limit-cpu 0.5 --limit-memory 512M --env DB_HOST=postgres --mount type=volume,source=data,target=/data myapp:1.0'
      },
      {
        level: '进阶',
        task: '设计 Swarm 集群的高可用方案：3 Manager + N Worker，配置故障自动恢复',
        hint: '使用 --restart-condition、placement constraints、global service',
        answer: '3 个 Manager 节点（奇数保证共识），Worker 节点使用 --availability drain 维护模式，配置 Service 的 restart_policy（--restart-condition on-failure --restart-delay 5s --restart-max-attempts 3），使用 placement constraints 确保关键服务分布在不同节点，配置 global service 运行监控 Agent（如 node_exporter）在每个节点'
      }
    ]
  },
  "hhoSe4q1u850PgK62Ubau": {
    mentalModel: 'Linkerd 是最轻量的 Service Mesh——用 Rust 编写的微型代理（每个 sidecar 仅 10MB 内存），专注于简单性和性能，如同给服务通信装上"隐形高速公路"，几乎零开销。',
    handsOn: [
      {
        title: '安装 Linkerd 并验证集群就绪',
        cmd: 'curl -sL https://run.linkerd.io/install | sh && export PATH=$PATH:$HOME/.linkerd2/bin && linkerd check --pre && linkerd install --crds | kubectl apply -f - && linkerd install | kubectl apply -f -',
        output: 'kubernetes-api\n√ can initialize the client\n√ can query the Kubernetes API\n\nkubernetes-version\n√ is running the minimum Kubernetes API version\n\npre-kubernetes-connectivity\n√ control plane namespace does not already exist\n√ can create namespaces\n...\nlinkerd-cni\n√ cni plugin installed\nlinkerd-control-plane\n√ control plane installed\n√ ready',
        explain: 'linkerd check --pre 验证集群是否满足 Linkerd 的要求（Kubernetes 版本、RBAC 权限等），install 分两步：先安装 CRD（自定义资源定义），再安装控制平面组件。'
      },
      {
        title: '为应用启用 mTLS 并查看实时指标',
        cmd: 'kubectl annotate namespace default linkerd.io/inject=enabled && kubectl rollout restart deployment/web deployment/api && sleep 30 && linkerd viz install | kubectl apply -f - && linkerd viz stat deploy -n default',
        output: 'NAME   MESHED   SUCCESS      RPS   LATENCY_P50   LATENCY_P95   LATENCY_P99   TCP_CONN\napi       3/3   100.00%   45.2rps          3ms          12ms          25ms          12\nweb       3/3   100.00%   89.7rps          5ms          18ms          35ms          18',
        explain: 'annotate namespace 后新创建的 Pod 自动注入 Linkerd proxy，所有服务间通信自动启用 mTLS（零信任网络）。linkerd viz 安装可视化组件，stat 命令显示实时 RED 指标（Request rate、Error rate、Duration）。'
      },
      {
        title: '使用 Linkerd 实现流量分割和灰度发布',
        cmd: 'cat > traffic-split.yaml << \'EOF\'\napiVersion: split.smi-spec.io/v1alpha2\nkind: TrafficSplit\nmetadata:\n  name: api-split\n  namespace: default\nspec:\n  service: api\n  backends:\n    - service: api-stable\n      weight: 900\n    - service: api-canary\n      weight: 100\nEOF\nkubectl apply -f traffic-split.yaml && linkerd viz stat deploy/api-stable deploy/api-canary -n default',
        output: 'NAME          MESHED   SUCCESS      RPS   LATENCY_P50   LATENCY_P95   LATENCY_P99\napi-stable       3/3   100.00%   40.7rps          3ms          12ms          25ms\napi-canary       2/2   100.00%    4.5rps          4ms          15ms          30ms',
        explain: 'TrafficSplit 是 SMI（Service Mesh Interface）标准资源，Linkerd 原生支持。weight 900:100 表示 90% 流量到 stable，10% 到 canary，实现精确的灰度发布。'
      }
    ],
    diagnosis: [
      {
        symptom: '启用 Linkerd 后部分服务的 gRPC 流式调用（streaming）断开',
        cause: 'Linkerd proxy 默认对 HTTP/2 连接进行负载均衡，但 gRPC streaming 需要保持长连接不被中断',
        fix: '为 gRPC streaming 服务配置 ServiceProfile，设置 isRetryable: false，调整 proxy 的 load balancer 策略为 "least loaded"，或使用 tap 接口排除特定服务'
      },
      {
        symptom: 'Linkerd 的 mTLS 证书过期导致服务间通信失败',
        cause: 'Linkerd 的 identity service（证书颁发机构）的 trust anchor 证书过期（默认有效期 10 年），或 issuer 证书未自动轮换',
        fix: '检查证书过期时间 linkerd check --proxy，使用 linkerd identity 命令查看证书状态，配置自动证书轮换（通过 cert-manager 集成），定期更新 trust anchor（需要提前规划，因为更新需要重启所有 proxy）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 Linkerd 的 tap 功能实时观察服务的请求和响应',
        hint: '使用 linkerd viz tap 命令',
        answer: 'linkerd viz tap deploy/api --output json 实时显示进出 api 服务的所有请求（源/目标、方法、路径、状态码、延迟），--output json 格式便于程序化处理，可用于调试和流量分析'
      },
      {
        level: '进阶',
        task: '使用 Linkerd 的 ServiceProfile 配置智能重试和超时',
        hint: '创建 ServiceProfile CRD，定义 routes 和 retryPolicy',
        answer: '为 api 服务创建 ServiceProfile，定义 routes（如 GET /users/{id}），配置 isRetryable: true（仅对幂等请求重试），设置 timeout: 500ms，配置 retryBudget（retryRatio: 0.2，minRetriesPerSecond: 10），防止重试风暴压垮下游服务'
      }
    ]
  },
  "eOyu4wmKOrcMlhD8pUGGh": {
    mentalModel: 'Prometheus 进阶（第二层）——从基础采集进阶到联邦集群、长期存储、告警管理、性能调优，如同从"家用温度计"升级到"气象站网络"，支撑大规模生产环境的监控需求。',
    handsOn: [
      {
        title: '配置 Prometheus 联邦（Federation）实现多集群监控',
        cmd: 'cat > prometheus-federation.yml << \'EOF\'\nglobal:\n  scrape_interval: 30s\nscrape_configs:\n  - job_name: \'federate-cluster-1\'\n    scrape_interval: 15s\n    honor_labels: true\n    metrics_path: \'/federate\'\n    params:\n      \'match[]\':\n        - \'{job="prometheus"}\'\n        - \'{__name__=~"node_.*"}\'\n        - \'up{job=~"kubernetes-.*"}\'\n    static_configs:\n      - targets:\n          - \'prometheus-cluster-1:9090\'\n        labels:\n          cluster: \'production-us\'\n  - job_name: \'federate-cluster-2\'\n    scrape_interval: 15s\n    honor_labels: true\n    metrics_path: \'/federate\'\n    params:\n      \'match[]\':\n        - \'{job="prometheus"}\'\n        - \'{__name__=~"node_.*"}\'\n    static_configs:\n      - targets:\n          - \'prometheus-cluster-2:9090\'\n        labels:\n          cluster: \'production-eu\'\nEOF',
        output: '# 联邦配置完成\n# 全局 Prometheus 从各区域 Prometheus 拉取聚合指标\n# 减少网络传输（只拉取关键指标），统一告警和仪表盘',
        explain: '联邦架构：每个区域/集群运行独立 Prometheus（本地采集），全局 Prometheus 通过 /federate 端点拉取聚合指标，适合多集群、多地域的大规模部署，降低单点压力。'
      },
      {
        title: '集成 Thanos 实现长期存储和全局查询',
        cmd: 'cat > thanos-sidecar.yaml << \'EOF\'\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: prometheus\nspec:\n  template:\n    spec:\n      containers:\n        - name: prometheus\n          image: prom/prometheus:v2.48.0\n          args:\n            - "--config.file=/etc/prometheus/prometheus.yml"\n            - "--storage.tsdb.path=/prometheus"\n            - "--storage.tsdb.min-block-duration=2h"\n            - "--storage.tsdb.max-block-duration=2h"\n            - "--web.enable-lifecycle"\n        - name: thanos-sidecar\n          image: quay.io/thanos/thanos:v0.32.0\n          args:\n            - "sidecar"\n            - "--prometheus.url=http://localhost:9090"\n            - "--tsdb.path=/prometheus"\n            - "--objstore.config-file=/etc/thanos/objstore.yml"\n          volumeMounts:\n            - name: prometheus-data\n              mountPath: /prometheus\nEOF\nkubectl apply -f thanos-sidecar.yaml',
        output: 'statefulset.apps/prometheus configured\n# Thanos Sidecar 与 Prometheus 共享数据，上传到对象存储（S3/GCS）',
        explain: 'Thanos Sidecar 与 Prometheus 并行运行，将 TSDB 数据块上传到对象存储（S3/GCS/MinIO），Thanos Querier 跨多个 Prometheus 实例查询，实现全局视图和长期历史数据查询。'
      },
      {
        title: '配置 Alertmanager 高可用和告警分组',
        cmd: 'cat > alertmanager.yml << \'EOF\'\nglobal:\n  resolve_timeout: 5m\nroute:\n  group_by: [\'alertname\', \'cluster\', \'service\']\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 4h\n  receiver: \'default-receiver\'\n  routes:\n    - match:\n        severity: critical\n      receiver: \'pagerduty-critical\'\n      group_wait: 10s\n      repeat_interval: 1h\n    - match:\n        severity: warning\n      receiver: \'slack-warnings\'\n      repeat_interval: 12h\nreceivers:\n  - name: \'pagerduty-critical\'\n    pagerduty_configs:\n      - service_key: \'your-pagerduty-key\'\n  - name: \'slack-warnings\'\n    slack_configs:\n      - api_url: \'https://hooks.slack.com/services/xxx\'\n        channel: \'#alerts-warning\'\n        title: \'{{ .GroupLabels.alertname }}\'\n        text: \'{{ range .Alerts }}{{ .Annotations.description }}\\n{{ end }}\'\n  - name: \'default-receiver\'\n    webhook_configs:\n      - url: \'http://alertmanager-webhook:5001/\'\ninhibit_rules:\n  - source_match:\n      severity: \'critical\'\n    target_match:\n      severity: \'warning\'\n    equal: [\'alertname\', \'cluster\']\nEOF',
        output: '# Alertmanager 配置完成\n# 告警按 alertname+cluster+service 分组\n# critical 告警发 PagerDuty（10s 等待，1h 重复）\n# warning 告警发 Slack（12h 重复）\n# inhibit_rules：critical 触发时抑制同名的 warning',
        explain: 'Alertmanager 的分组（group_by）将相关告警合并为一条通知，抑制（inhibit_rules）避免级联告警风暴，静默（silences）在维护期间暂停告警，多实例部署通过 Gossip 协议去重。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Prometheus 查询超时，提示 "context deadline exceeded" 或 "query timed out"',
        cause: '时间范围过大（如查询 30 天的高基数指标），或 PromQL 表达式复杂度过高（如大量 label 组合的 rate + histogram_quantile）',
        fix: '缩小查询时间范围，使用 recording rules 预计算常用查询，优化 PromQL（避免高基数 label），启用 --query.max-samples 限制，使用 Thanos Query 的 partial response 模式'
      },
      {
        symptom: 'Prometheus 的 WAL（Write-Ahead Log）增长过快，磁盘空间不足',
        cause: 'scrape 间隔过短（如 5s）且目标数量多，产生大量样本数据；或 compaction 失败导致旧数据未清理',
        fix: '调整 scrape_interval（15-30s 通常足够），减少不必要的 target，使用 metric_relabel_configs 过滤无用指标，检查 compaction 日志，手动触发 TSDB 压缩，配置 --storage.tsdb.retention.time 限制数据保留时间'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 Prometheus recording rule 预计算常用查询，提升查询性能',
        hint: '在 rules 文件中定义 record 规则',
        answer: '创建 recording rule：record: job:http_requests:rate5m，expr: sum(rate(http_requests_total[5m])) by (job)，Prometheus 每 15s 预计算并存储结果，查询时直接读取预计算值，避免每次查询都扫描原始数据'
      },
      {
        level: '进阶',
        task: '设计 Prometheus 的高可用部署方案：双副本 + Thanos + Alertmanager 集群',
        hint: '使用 Prometheus Operator 和 Thanos 组件',
        answer: '部署 2 个 Prometheus 副本（通过 Prometheus Operator），每个配置 Thanos Sidecar 上传到 S3，部署 Thanos Querier 聚合两个实例的查询（deduplication 去重），部署 3 个 Alertmanager 实例（Gossip 去重），使用 Thanos Compactor 压缩和降采样历史数据（1h→5m→1h 分辨率）'
      }
    ]
  },
  "hIBeTUiAI3zwUY6NgAO-A": {
    mentalModel: 'Kubernetes（K8s）是容器编排的事实标准——通过声明式 API 和控制器模式自动管理容器的部署、伸缩、网络、存储，如同一个自动驾驶系统，你设定目的地（期望状态），它自动导航（持续调谐）。',
    handsOn: [
      {
  title: '理解 Kubernetes 的核心架构',
  cmd: '# 见下方说明',
  explain: '**控制平面（Control Plane）**: API Server：所有操作的入口，RESTful API，认证→授权→准入控制\netcd：分布式 KV 存储，存储集群所有状态（唯一数据源）\nScheduler：为新 Pod 选择最优节点（资源、亲和性、污点）\nController Manager：运行各种控制器（Deployment、ReplicaSet、Node 等），持续调谐状态\n\n**工作节点（Worker Node）**: kubelet：节点代理，接收 API Server 指令，管理 Pod 生命周期\nkube-proxy：网络代理，维护 Service → Pod 的路由规则（iptables/IPVS）\nContainer Runtime：运行容器（containerd/CRI-O）\nCoreDNS：集群内 DNS，解析 Service 名称\n\n**声明式 API 与控制器模式**: 声明式：你定义"期望状态"（如 3 个副本），系统自动达成\n命令式：你执行"操作步骤"（如创建 3 个 Pod），系统执行一次\n控制器：持续对比期望状态和实际状态，发现差异则执行动作（如 Deployment Controller 确保副本数一致）\nReconciliation Loop：控制器不断循环"观察→对比→调整"，最终一致性'
},
      {
        title: '使用 kubectl 探索 Kubernetes 资源模型',
        cmd: 'kubectl api-resources --verbs=list --namespaced | head -20 && echo "" && echo "=== 查看 Pod 的详细事件 ===" && kubectl describe pod nginx-7d4f6bf4b-abc12 | grep -A 20 "Events:" && echo "" && echo "=== 查看资源的 YAML 定义 ===" && kubectl get deployment nginx -o yaml | head -30',
        output: 'NAME                SHORTNAMES   APIVERSION                    NAMESPACED   KIND\nconfigmaps          cm           v1                            true         ConfigMap\nendpoints           ep           v1                            true         Endpoints\npersistentvolumeclaims  pvc      v1                            true         PersistentVolumeClaim\npods                po           v1                            true         Pod\nservices            svc          v1                            true         Service\ndeployments         deploy       apps/v1                       true         Deployment\n\n=== 查看 Pod 的详细事件 ===\nEvents:\n  Type    Reason     Age   From               Message\n  ----    ------     ----  ----               -------\n  Normal  Scheduled  2m    default-scheduler  Successfully assigned default/nginx-7d4f6bf4b-abc12 to node-1\n  Normal  Pulling    2m    kubelet            Pulling image "nginx:alpine"\n  Normal  Pulled     1m    kubelet            Successfully pulled image "nginx:alpine"\n  Normal  Created    1m    kubelet            Created container nginx\n  Normal  Started    1m    kubelet            Started container nginx',
        explain: 'Kubernetes 的一切皆资源：Pod（最小调度单元）、Deployment（管理 Pod 副本）、Service（负载均衡）、ConfigMap（配置）等。describe 查看资源详情和事件，get -o yaml 查看完整定义。'
      },
      {
        title: '部署完整的微服务应用（Deployment + Service + ConfigMap + Secret）',
        cmd: 'cat > app-full.yaml << \'EOF\'\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  DATABASE_URL: "postgres://db:5432/myapp"\n  LOG_LEVEL: "info"\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: app-secret\ntype: Opaque\nstringData:\n  API_KEY: "super-secret-key-123"\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n        - name: app\n          image: myapp:1.0\n          ports:\n            - containerPort: 8080\n          envFrom:\n            - configMapRef:\n                name: app-config\n            - secretRef:\n                name: app-secret\n          resources:\n            requests:\n              cpu: 100m\n              memory: 128Mi\n            limits:\n              cpu: 500m\n              memory: 512Mi\n          livenessProbe:\n            httpGet:\n              path: /health\n              port: 8080\n            initialDelaySeconds: 10\n          readinessProbe:\n            httpGet:\n              path: /ready\n              port: 8080\n            initialDelaySeconds: 5\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: app-service\nspec:\n  selector:\n    app: myapp\n  ports:\n    - port: 80\n      targetPort: 8080\n  type: ClusterIP\nEOF\nkubectl apply -f app-full.yaml',
        output: 'configmap/app-config created\nsecret/app-secret created\ndeployment.apps/app created\nservice/app-service created',
        explain: '完整的 Kubernetes 部署包含：ConfigMap（明文配置）、Secret（加密配置）、Deployment（Pod 模板、副本数、探针、资源限制）、Service（负载均衡入口）。所有资源通过 kubectl apply 声明式创建。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Pod 处于 CrashLoopBackOff 状态，重启次数不断增加',
        cause: '应用启动失败（配置错误、依赖服务不可用、端口冲突），或 liveness probe 配置错误（应用正常运行但探针失败触发重启）',
        fix: 'kubectl logs <pod> --previous 查看上一次崩溃的日志，kubectl describe pod 查看探针状态，检查配置（ConfigMap/Secret 是否正确挂载），确认依赖服务可达'
      },
      {
        symptom: 'Service 无法访问后端 Pod，curl 返回 "no endpoints available"',
        cause: 'Service 的 selector 与 Pod 的 labels 不匹配，或 Pod 的 readiness probe 未通过（未加入 Endpoints）',
        fix: 'kubectl get endpoints <service> 查看是否有后端 Pod，kubectl get pods --show-labels 确认标签匹配，kubectl describe pod 检查 readiness probe 状态'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 Deployment，配置资源限制、健康检查、环境变量，并通过 Service 暴露',
        hint: '使用 resources、livenessProbe、readinessProbe、env 字段',
        answer: 'Deployment 配置 resources.requests/limits（CPU/内存），livenessProbe（HTTP GET /health，initialDelaySeconds: 15），readinessProbe（HTTP GET /ready，periodSeconds: 5），env 从 ConfigMap 引用，Service 使用 ClusterIP 类型，selector 匹配 Pod 标签'
      },
      {
        level: '进阶',
        task: '使用 Kubernetes 的 RBAC 实现最小权限：开发者只能查看和重启自己的 Pod',
        hint: '创建 Role 和 RoleBinding，限制 verbs 和 resources',
        answer: '创建 Role（verbs: get/list/watch/delete/create, resources: pods, pods/log），RoleBinding 绑定到开发者用户，添加 resourceName 限制只能操作特定命名空间的 Pod，使用 labelSelector 进一步限制只能操作自己标签的 Pod（需配合 Admission Controller）'
      }
    ]
  },
  "K81bmtgnB1gfhYdi3TB5a": {
    mentalModel: 'OpenTelemetry 是可观测性的统一标准——定义了一套厂商无关的 API 和 SDK，用于生成、采集、导出 Metrics/Logs/Traces 三大支柱数据，如同为遥测数据制定了"USB 接口标准"，任何工具都能即插即用。',
    handsOn: [
      {
        title: '使用 OpenTelemetry SDK 为 Node.js 应用添加追踪',
        cmd: 'npm install @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/exporter-trace-otlp-http @opentelemetry/instrumentation-express @opentelemetry/instrumentation-http && cat > tracing.js << OTEOF\nconst { NodeSDK } = require("@opentelemetry/sdk-node");\nconst { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");\nconst { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");\nconst { ExpressInstrumentation } = require("@opentelemetry/instrumentation-express");\n\nconst sdk = new NodeSDK({\n  traceExporter: new OTLPTraceExporter({ url: "http://localhost:4318/v1/traces" }),\n  instrumentations: [new HttpInstrumentation(), new ExpressInstrumentation()],\n  serviceName: "order-service",\n});\nsdk.start();\nconsole.log("OpenTelemetry SDK started");\nOTEOF\nnode -r ./tracing.js server.js',
        output: 'OpenTelemetry SDK started\nServer listening on port 3000\n# 所有 HTTP 请求自动追踪，Express 路由自动生成 span',
        explain: 'OpenTelemetry SDK 通过 instrumentation（插桩）自动追踪 HTTP 请求、Express 路由、数据库查询等，无需修改业务代码。trace-otlp-http exporter 将追踪数据发送到 Collector。'
      },
      {
        title: '部署 OpenTelemetry Collector 作为统一数据管道',
        cmd: 'cat > otel-collector-config.yaml << OTEOF\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n        endpoint: 0.0.0.0:4317\n      http:\n        endpoint: 0.0.0.0:4318\nprocessors:\n  batch:\n    timeout: 5s\n    send_batch_size: 1024\n  memory_limiter:\n    check_interval: 1s\n    limit_mib: 512\nexporters:\n  otlp/tempo:\n    endpoint: tempo:4317\n    tls:\n      insecure: true\n  prometheusremotewrite:\n    endpoint: http://prometheus:9090/api/v1/write\n  loki:\n    endpoint: http://loki:3100/loki/api/v1/push\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch, memory_limiter]\n      exporters: [otlp/tempo]\n    metrics:\n      receivers: [otlp]\n      processors: [batch, memory_limiter]\n      exporters: [prometheusremotewrite]\n    logs:\n      receivers: [otlp]\n      processors: [batch, memory_limiter]\n      exporters: [loki]\nOTEOF\ndocker run -v $(pwd)/otel-collector-config.yaml:/etc/otel/config.yaml otel/opentelemetry-collector-contrib:0.88.0',
        output: 'info  service/telemetry.go:110  Setting up own telemetry...\ninfo  pipelines/pipelines.go:74  Starting exporters...\ninfo  pipelines/pipelines.go:84  Pipeline is started.  {"kind": "pipeline", "name": "traces"}\ninfo  pipelines/pipelines.go:84  Pipeline is started.  {"kind": "pipeline", "name": "metrics"}\ninfo  pipelines/pipelines.go:84  Pipeline is started.  {"kind": "pipeline", "name": "logs"}',
        explain: 'OTel Collector 是统一的数据管道：receivers 接收 OTLP 数据，processors 批量处理和添加标签，exporters 路由到不同后端（Tempo/Prometheus/Loki），支持多 pipeline 并行处理三大支柱数据。'
      },
      {
        title: '使用 OpenTelemetry 手动创建自定义 Span',
        cmd: 'cat > custom_span.js << OTEOF\nconst { trace } = require("@opentelemetry/api");\nconst tracer = trace.getTracer("payment-service");\n\nasync function processPayment(orderId, amount) {\n  return tracer.startActiveSpan("processPayment", async (span) => {\n    span.setAttribute("order.id", orderId);\n    span.setAttribute("payment.amount", amount);\n    try {\n      await tracer.startActiveSpan("validateCard", async (childSpan) => {\n        await new Promise(r => setTimeout(r, 50));\n        childSpan.setStatus({ code: 1 });\n        childSpan.end();\n      });\n      await tracer.startActiveSpan("chargeCard", async (childSpan) => {\n        await new Promise(r => setTimeout(r, 100));\n        childSpan.setStatus({ code: 1 });\n        childSpan.end();\n      });\n      span.setStatus({ code: 1 });\n      return { success: true };\n    } finally {\n      span.end();\n    }\n  });\n}\nprocessPayment("ORD-123", 99.99).then(r => console.log(r));\nOTEOF\nnode -r ./tracing.js custom_span.js',
        output: '{ success: true }\n# 追踪数据已发送到 Collector，可在 Tempo/Jaeger 中查看：\n# processPayment (150ms)\n#   +- validateCard (50ms)\n#   +- chargeCard (100ms)',
        explain: 'startActiveSpan 创建父 span，嵌套调用自动建立父子关系。setAttribute 添加业务属性（如 order.id），setStatus 标记成功/失败，span.end() 必须调用以完成计时并导出。'
      }
    ],
    diagnosis: [
      {
        symptom: 'OpenTelemetry Collector 内存使用持续增长直到 OOM',
        cause: 'exporter 处理速度慢于 receiver 接收速度（如后端存储写入慢），导致数据在 batch processor 中积压',
        fix: '添加 memory_limiter processor（在 batch 之前），配置 limit_mib 限制内存使用，启用 backpressure 机制，优化 exporter 的并发和超时配置'
      },
      {
        symptom: '追踪数据中缺少跨服务的 span 关联，trace 断裂',
        cause: 'Context propagation 未正确配置，HTTP Header 中的 traceparent（W3C Trace Context）未被传递或解析',
        fix: '确保 SDK 配置了 W3C Trace Context propagator，HTTP Client 和 Server 使用相同的 instrumentation 版本，检查是否使用了自定义 Header 传递 context'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 Express API 添加 OpenTelemetry 自动追踪，并将数据导出到 Jaeger',
        hint: '使用 @opentelemetry/instrumentation-express 和 OTLP exporter',
        answer: '安装 SDK 和 Express instrumentation，配置 OTLP exporter 指向 Jaeger（http://localhost:4318/v1/traces），在 server.js 中 require tracing.js，启动后访问 API，在 Jaeger UI 中查看自动生成的 span（包含 HTTP 方法、路由、状态码）'
      },
      {
        level: '进阶',
        task: '配置 OpenTelemetry Collector 的 tail-based sampling，只对慢请求和错误请求保存完整追踪',
        hint: '使用 tail_sampling processor，定义策略',
        answer: '在 Collector 的 processors 中配置 tail_sampling：策略 1 latency（duration_ms >= 1000），策略 2 status_code（ERROR），策略 3 probabilistic（1% 正常请求），wait_decision 设为 30s（等待 30s 后做采样决策），大幅减少存储成本同时保留有价值的追踪数据'
      }
    ]
  },
  "epLLYArR16HlhAS4c33b4": {
    mentalModel: 'Envoy 是云原生时代的高性能代理——用 C++ 编写的 L7 代理，支持 HTTP/2、gRPC、WebSocket，作为 Istio/Consul/Contour 的数据平面，如同微服务通信的"高速公路收费站"，所有流量经过它检查和处理。',
    handsOn: [
      {
        title: '启动 Envoy 并配置基础路由',
        cmd: 'cat > envoy.yaml << ENVOYEOF\nstatic_resources:\n  listeners:\n    - name: listener_0\n      address:\n        socket_address: { address: 0.0.0.0, port_value: 10000 }\n      filter_chains:\n        - filters:\n            - name: envoy.filters.network.http_connection_manager\n              typed_config:\n                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\n                stat_prefix: ingress_http\n                route_config:\n                  virtual_hosts:\n                    - name: backend\n                      domains: ["*"]\n                      routes:\n                        - match: { prefix: "/api" }\n                          route: { cluster: api_service }\n                        - match: { prefix: "/" }\n                          route: { cluster: web_service }\n                http_filters:\n                  - name: envoy.filters.http.router\n  clusters:\n    - name: api_service\n      type: STRICT_DNS\n      load_assignment:\n        cluster_name: api_service\n        endpoints:\n          - lb_endpoints:\n              - endpoint:\n                  address: { socket_address: { address: api, port_value: 8080 } }\n    - name: web_service\n      type: STRICT_DNS\n      load_assignment:\n        cluster_name: web_service\n        endpoints:\n          - lb_endpoints:\n              - endpoint:\n                  address: { socket_address: { address: web, port_value: 80 } }\nENVOYEOF\ndocker run -d -p 10000:10000 -v $(pwd)/envoy.yaml:/etc/envoy/envoy.yaml envoyproxy/envoy:v1.28-latest',
        output: 'Unable to find image envoyproxy/envoy:v1.28-latest locally\n...\n[info][main] initializing epoch 0\n[info][main] starting workers\n[info][upstream] cm init: all clusters initialized',
        explain: 'Envoy 配置分为 listeners（监听端口）、clusters（后端集群）、routes（路由规则）。static_resources 是静态配置，生产环境通常使用 xDS 动态配置。'
      },
      {
        title: '配置 Envoy 的负载均衡和健康检查',
        cmd: 'cat > envoy-lb.yaml << ENVOYEOF\nclusters:\n  - name: backend_cluster\n    connect_timeout: 0.25s\n    type: STRICT_DNS\n    lb_policy: LEAST_REQUEST\n    health_checks:\n      - timeout: 5s\n        interval: 10s\n        unhealthy_threshold: 3\n        healthy_threshold: 2\n        http_health_check:\n          path: /health\n    outlier_detection:\n      consecutive_5xx: 5\n      interval: 10s\n      base_ejection_time: 30s\n      max_ejection_percent: 50\nENVOYEOF\necho "Load balancing: LEAST_REQUEST" && echo "Health check: every 10s on /health" && echo "Outlier detection: eject after 5 consecutive 5xx"',
        output: 'Load balancing: LEAST_REQUEST\nHealth check: every 10s on /health\nOutlier detection: eject after 5 consecutive 5xx',
        explain: 'Envoy 支持多种负载均衡策略（ROUND_ROBIN、LEAST_REQUEST、RING_HASH、RANDOM），health_checks 主动探测后端状态，outlier_detection 自动驱逐异常节点（熔断），实现智能流量分配。'
      },
      {
  title: '理解 Envoy 的 xDS 动态配置 API',
  cmd: '# 见下方说明',
  explain: '**xDS API 家族**: LDS (Listener Discovery Service): 动态管理监听器和过滤器链\nRDS (Route Discovery Service): 动态更新路由规则\nCDS (Cluster Discovery Service): 动态管理后端集群\nEDS (Endpoint Discovery Service): 动态更新集群中的端点\nSDS (Secret Discovery Service): 动态分发 TLS 证书和密钥\nADS (Aggregated Discovery Service): 聚合所有 xDS，保证一致性\n\n**xDS 的工作流程**: 1. Envoy 启动时连接控制平面（如 Istiod）获取初始配置\n2. 控制平面推送新的配置（如新增路由、更新端点）\n3. Envoy 原子地应用新配置（不中断现有连接）\n4. Envoy 定期发送 ACK/NACK 确认配置是否生效\n优势：无需重启 Envoy 即可更新配置，支持大规模动态集群管理\n\n**Envoy Filter Chain 架构**: Envoy 使用可组合的 Filter Chain 处理请求：\nNetwork Filter: L4 层处理（TCP proxy、Redis proxy、MongoDB proxy）\nHTTP Filter: L7 层处理（Router、CORS、Rate Limit、JWT Auth）\nFilter 按顺序执行，每个 Filter 可修改请求/响应或终止处理链\n通过组合不同的 Filter，实现路由、认证、限流、转换等功能'
}
    ],
    diagnosis: [
      {
        symptom: 'Envoy 代理返回 503 Service Unhealthy，所有后端端点被标记为不健康',
        cause: '后端服务的健康检查端点返回非 200 状态码，或健康检查超时时间设置过短',
        fix: '检查后端 /health 端点是否正常响应，调整 health_checks 的 timeout 和 interval，查看 Envoy 管理接口 :9901/clusters 确认端点健康状态'
      },
      {
        symptom: 'Envoy 的延迟比预期高 10-20ms',
        cause: 'Envoy 的 HTTP/2 多路复用开销、TLS 握手延迟、或未启用连接池复用',
        fix: '检查连接池配置（max_connections、max_requests_per_connection），启用 HTTP/2 upstream，配置 TLS session resumption，使用 :9901/stats 查看 p99 延迟分布'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 Envoy 实现基于 URL 前缀的路由：/api/v1 -> service-v1，/api/v2 -> service-v2',
        hint: '在 route_config 中配置多个 routes，按 prefix 匹配',
        answer: '在 virtual_hosts.routes 中添加两条路由：match: { prefix: "/api/v2" } route: { cluster: service_v2 }，match: { prefix: "/api/v1" } route: { cluster: service_v1 }，注意 routes 按顺序匹配，v2 必须放在 v1 前面'
      },
      {
        level: '进阶',
        task: '使用 Envoy 的 rate limit filter 实现 API 限流：每个用户每分钟最多 60 次请求',
        hint: '配置 rate limit service 和 http_filters 中的 envoy.filters.http.ratelimit',
        answer: '部署 rate limit service（如 Lyft ratelimit），在 Envoy 的 http_filters 中添加 envoy.filters.http.ratelimit，配置 domain 和 descriptors（generic_key: per_minute: 60），rate limit service 使用 Redis 存储计数器'
      }
    ]
  },
  "3GryoQuI67JTHg9r3xUHO": {

    mentalModel: 'OpenShift 是 Red Hat 的企业级 Kubernetes 发行版——在原生 K8s 之上增加了安全加固、开发者工具、运维自动化，如同从"毛坯房"升级到"精装修"，开箱即用但需要遵循更严格的安全规范。',
    handsOn: [
      {
  title: '理解 OpenShift 与原生 Kubernetes 的核心差异',
  cmd: '# 见下方说明',
  explain: '**安全增强**: 默认禁止 root 容器（SCC: Security Context Constraints）\n内置 OAuth 认证（LDAP、OIDC、GitHub）\n自动为每个 namespace 分配 UID 范围（避免容器以 host UID 运行）\n内置镜像扫描（Image Policy）\n网络隔离默认开启（NetworkPolicy）\n\n**开发者体验**: oc 命令行（kubectl 的增强版，支持 login、new-app、start-build）\nWeb Console 可视化部署和监控\nSource-to-Image (S2I)：从源码自动构建镜像并部署\nDeveloper Catalog：一键部署 Helm Chart 和 Operator\nPipelines：内置 Tekton CI/CD 界面\n\n**运维自动化**: Machine Config Operator：自动化节点配置和升级\nCluster Version Operator：管理集群版本和升级\n内置监控（Prometheus + Grafana，预配置告警）\n内置日志（Loki + Vector）\n内置 Service Mesh（基于 Istio）'
},
      {
        title: '使用 oc 命令行部署应用（Source-to-Image）',
        cmd: 'oc login https://api.openshift.example.com:6443 -u developer -p password && oc new-project myapp && oc new-app --name=myapi --image-stream=nodejs:18 --code=https://github.com/myorg/myapi.git && oc logs -f bc/myapi',
        output: 'Login successful.\nUsing project "myapp".\n--> Found image nodejs:18-ubi8\n--> Creating resources ...\n    buildconfig.build.openshift.io "myapi" created\n    deploymentconfig.apps.openshift.io "myapi" created\n    service "myapi" created\n--> Success\nCloning "https://github.com/myorg/myapi.git" ...\nStep 12/12 : CMD /usr/libexec/s2i/run\nSuccessfully built abc123\nPush successful',
        explain: 'oc new-app 是 OpenShift 的魔法命令：自动检测源码语言，创建 BuildConfig（构建配置）、ImageStream（镜像流）、DeploymentConfig（部署配置）、Service（服务），一键完成从源码到运行服务的全流程。'
      },
      {
        title: '使用 OpenShift Routes 暴露服务（对比 Ingress）',
        cmd: 'oc expose service myapi --hostname=myapi.apps.example.com && oc create route edge myapi-secure --service=myapi --hostname=myapi.apps.example.com --insecure-policy=Redirect && oc get routes',
        output: 'route.route.openshift.io/myapi exposed\nroute.route.openshift.io/myapi-secure created\n\nNAME           HOST/PORT                    PATH   SERVICES   PORT   TERMINATION\nmyapi          myapi.apps.example.com              myapi      8080\nmyapi-secure   myapi.apps.example.com              myapi      8080   edge/Redirect',
        explain: 'OpenShift Route 是 Ingress 的前身（早于 K8s Ingress 标准），支持 TLS 终止（edge）、TLS 透传（passthrough）、重新加密（reencrypt），自动配置 HAProxy 负载均衡。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Pod 在 OpenShift 中启动失败，提示 "container has runAsNonRoot and image will run as root"',
        cause: 'OpenShift 的默认 SCC（restricted）禁止容器以 root 用户运行，但镜像默认使用 root 用户',
        fix: '修改 Dockerfile 使用非 root 用户（USER 1001），或在 Deployment 中设置 securityContext.runAsUser 为特定 UID，或使用 oc adm policy add-scc-to-user anyuid 授权（不推荐生产环境）'
      },
      {
        symptom: 'OpenShift 集群升级后某些 Operator 不兼容新版本',
        cause: 'Operator 的 CSV（ClusterServiceVersion）未声明支持新版本，或 API 废弃导致 Operator 无法正常工作',
        fix: '检查 Operator 的兼容性矩阵，升级 Operator 到支持新版本的 release，使用 oc adm upgrade 查看升级前的兼容性检查报告，在测试集群先验证升级'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 OpenShift 的 S2I 从 Git 仓库自动构建并部署一个 Python Flask 应用',
        hint: '使用 oc new-app 和 python 镜像流',
        answer: 'oc new-app --name=flask-app --image-stream=python:3.11 --code=https://github.com/myorg/flask-app.git，OpenShift 自动检测 requirements.txt，执行 pip install，创建 BuildConfig 和 DeploymentConfig，配置 Webhook 触发自动构建'
      },
      {
        level: '进阶',
        task: '配置 OpenShift 的多租户隔离：不同团队使用不同 namespace，限制资源配额和网络访问',
        hint: '使用 ResourceQuota、LimitRange、NetworkPolicy、RBAC',
        answer: '为每个团队创建 namespace，配置 ResourceQuota（限制 CPU/内存/PVC 总量），LimitRange（限制单 Pod 资源上限），NetworkPolicy（只允许同 namespace 通信），RoleBinding（限制团队只能访问自己的 namespace），SCC（禁止特权容器）'
      }
    ]
  },
  "4aJVaimsuvGIPXMZ_WjaA": {

    mentalModel: 'Dynatrace 是 AI 驱动的全栈可观测平台——核心特色是 OneAgent（单代理采集所有数据）和 Davis AI（自动根因分析），如同给系统配备了一个"AI 运维助手"，自动发现问题并给出修复建议。',
    handsOn: [
      {
        title: '安装 Dynatrace OneAgent 并查看 Smartscape 拓扑',
        cmd: 'curl -o Dynatrace-OneAgent-Linux.sh "https://ENV_ID.live.dynatrace.com/api/v1/deployment/installer/agent/unix/default/latest?Api-Token=YOUR_TOKEN" && sudo sh Dynatrace-OneAgent-Linux.sh APP_LOG_CONTENT_ACCESS=1',
        output: 'Dynatrace OneAgent 1.281.0 installation started...\nInstalling Dynatrace OneAgent...\nOneAgent installed successfully.\nStarting OneAgent service...\nOneAgent is running. PID: 12345\n# 登录 Dynatrace Web UI，Smartscape 自动发现并可视化所有主机、进程、服务、应用及其依赖关系',
        explain: 'OneAgent 是 Dynatrace 的核心采集器，单个代理自动采集主机指标、进程指标、应用追踪、日志、网络流量，无需配置即可发现所有服务和依赖关系。'
      },
      {
  title: '使用 Davis AI 进行自动根因分析',
  cmd: '# 见下方说明',
  explain: '**Davis AI 的工作原理**: Davis 是 Dynatrace 的 AI 引擎：\n1. 持续学习正常基线（性能、行为、依赖）\n2. 检测异常（偏离基线的指标变化）\n3. 关联分析（将多个异常关联为一个 Problem）\n4. 根因定位（基于拓扑关系和因果关系推断根因）\n5. 影响评估（受影响的用户、服务、收入）\n\n**实际场景：Davis 自动诊断数据库性能问题**: Problem 自动创建：\n- 标题：Database response time degradation\n- 影响：12 个服务，约 5000 用户/分钟\n- 根因：PostgreSQL 主节点的磁盘 I/O 延迟增加（从 5ms 到 50ms）\n- 原因链：磁盘延迟 -> 数据库查询变慢 -> API 响应变慢 -> 用户体验下降\n- 建议：检查磁盘健康状态，考虑迁移到 SSD 存储\n\n**Davis 的自动化修复建议**: Davis 不仅诊断问题，还提供修复建议：\n- 基础设施问题：建议扩容、迁移、更换实例类型\n- 应用问题：指出具体代码行和 SQL 查询\n- 配置问题：提供具体的配置修改建议\n- 依赖问题：建议添加重试、熔断、降级策略\n- 可与自动化平台集成（如 Ansible、Terraform）实现自动修复'
},
      {
        title: '使用 Dynatrace Query Language (DQL) 查询数据',
        cmd: 'echo "=== DQL 查询示例 ===" && echo "# 查询过去 1 小时错误率最高的服务" && echo "timeseries error_count = count(), by:{dt.entity.service}, from:-1h | filter error_count > 100 | sort error_count desc | limit 10" && echo "" && echo "# 查询特定用户的会话详情" && echo "fetch bizevents | filter user.email == admin@example.com | fields timestamp, action.name, duration, status"',
        output: '=== DQL 查询示例 ===\n# 查询过去 1 小时错误率最高的服务\ntimeseries error_count = count(), by:{dt.entity.service}, from:-1h\n| filter error_count > 100\n| sort error_count desc\n| limit 10\n\n结果：\n| service          | error_count |\n|------------------|-------------|\n| payment-service  | 1234        |\n| order-service    | 567         |',
        explain: 'DQL 是 Dynatrace 的查询语言，支持 timeseries（时间序列）、fetch（原始数据）、filter（过滤）、fields（选择字段），语法接近 SQL 但针对可观测性数据优化。'
      }
    ],
    diagnosis: [
      {
        symptom: 'OneAgent 安装后某些进程未被监控，Dynatrace 中看不到这些进程',
        cause: 'OneAgent 的进程监控规则未包含特定进程类型，或进程使用了不支持的运行时',
        fix: '在 Dynatrace Settings 中添加进程检测规则，对于不支持的语言使用 OneAgent SDK 手动插桩，检查 OneAgent 日志排查问题'
      },
      {
        symptom: 'Davis AI 频繁创建 Problem 但实际服务正常，产生大量误报',
        cause: '基线学习期不足（新部署的服务还未建立稳定基线），或告警阈值设置过于敏感',
        fix: '确保服务运行至少 7 天让 Davis 学习基线，调整 Alerting profile 的敏感性，使用 Maintenance window 在已知变更期间暂停告警'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 Dynatrace 的 Synthetic Monitoring 创建一个 HTTP 监控，每 5 分钟检查关键 API 的可用性',
        hint: '在 Dynatrace UI 中创建 HTTP monitor',
        answer: '创建 HTTP monitor，配置 URL（https://api.example.com/health），设置断言（status code = 200，response time < 2s），从 3 个地区每 5 分钟执行一次，失败时触发告警（邮件 + Slack），配置 Maintenance window 避免计划内维护时误报'
      },
      {
        level: '进阶',
        task: '配置 Dynatrace 的 Application Security 模块，自动检测应用漏洞并关联到受影响的业务服务',
        hint: '启用 Application Security，配置 vulnerability management',
        answer: '启用 Application Security 模块，OneAgent 自动扫描应用依赖（如 Log4j、OpenSSL 版本），检测已知漏洞（CVE），关联到使用受影响库的服务和业务应用，评估暴露风险（内部/外部），提供修复优先级（基于 CVSS 评分 + 业务影响 + 暴露程度）'
      }
    ]
  },
  "JCe3fcOf-sokTJURyX1oI": {

    mentalModel: '可用性是系统"随时可用"的能力——用 N 个 9 衡量（如 99.99% = 年停机 < 52 分钟），通过冗余、故障转移、自愈机制确保服务持续可用，如同医院的急诊室必须 24/7 运营，不能"系统维护中"。',
    handsOn: [
      {
  title: '理解可用性的量化指标和设计原则',
  cmd: '# 见下方说明',
  explain: '**可用性的数学定义**: Availability = MTBF / (MTBF + MTTR)\nMTBF (Mean Time Between Failures)：平均无故障时间\nMTTR (Mean Time To Recovery)：平均恢复时间\n提高可用性的两条路径：增加 MTBF（更好的硬件/软件）或减少 MTTR（更快的故障检测和恢复）\n\n**"N 个 9" 的含义**: 99% (两个9)：年停机 3.65 天 -- 内部系统可接受\n99.9% (三个9)：年停机 8.76 小时 -- 一般商业系统\n99.99% (四个9)：年停机 52.6 分钟 -- 关键业务系统\n99.999% (五个9)：年停机 5.26 分钟 -- 电信/金融核心系统\n99.9999% (六个9)：年停机 31.5 秒 -- 航天/医疗设备\n每增加一个 9，成本呈指数级增长\n\n**可用性的设计模式**: 冗余（Redundancy）：多副本、多节点、多地域\n故障转移（Failover）：主备切换、DNS 故障转移\n负载均衡（Load Balancing）：分散流量，单点故障不影响整体\n自愈（Self-healing）：自动重启、自动扩容、自动修复\n降级（Degradation）：部分功能不可用时核心功能仍可用\n熔断（Circuit Breaker）：依赖服务故障时快速失败，避免雪崩'
},
      {
        title: '计算系统的整体可用性（串联 vs 并联）',
        cmd: 'python3 << PYEOF\n# 串联系统：所有组件都必须工作，整体可用性 = 各组件可用性的乘积\nlb_availability = 0.9999   # 负载均衡器\napp_availability = 0.999   # 应用服务器（单实例）\ndb_availability = 0.9995   # 数据库\n\n# 串联：整体 = 0.9999 * 0.999 * 0.9995 = 0.9984\nseries = lb_availability * app_availability * db_availability\nprint(f"串联系统可用性: {series:.4f} ({series*100:.3f}%)")\nprint(f"  年停机: {(1-series) * 365 * 24:.2f} 小时")\n\n# 并联：应用层 3 个实例，任一工作即可\napp_parallel = 1 - (1 - app_availability)**3\nprint(f"\\n应用层 3 实例并联: {app_parallel:.6f} ({app_parallel*100:.5f}%)")\n\n# 改进后的串联\nimproved = lb_availability * app_parallel * db_availability\nprint(f"\\n改进后整体: {improved:.6f} ({improved*100:.4f}%)")\nprint(f"  年停机: {(1-improved) * 365 * 24 * 60:.1f} 分钟")\nPYEOF',
        output: '串联系统可用性: 0.9984 (99.840%)\n  年停机: 14.02 小时\n\n应用层 3 实例并联: 0.999999 (99.99999%)\n\n改进后整体: 0.999499 (99.9499%)\n  年停机: 263.3 分钟',
        explain: '串联系统的可用性是各组件的乘积（最弱环节决定整体），并联系统通过冗余大幅提升可用性。关键洞察：单点故障是可用性的最大敌人，消除单点故障是提升可用性的首要任务。'
      },
      {
        title: '使用 Kubernetes 实现高可用部署',
        cmd: 'cat > ha-deployment.yaml << HAEEOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api\nspec:\n  replicas: 6\n  selector:\n    matchLabels:\n      app: api\n  template:\n    metadata:\n      labels:\n        app: api\n    spec:\n      topologySpreadConstraints:\n        - maxSkew: 1\n          topologyKey: topology.kubernetes.io/zone\n          whenUnsatisfiable: DoNotSchedule\n          labelSelector:\n            matchLabels:\n              app: api\n      containers:\n        - name: api\n          image: api:1.0\n          resources:\n            requests:\n              cpu: 500m\n              memory: 512Mi\n          readinessProbe:\n            httpGet:\n              path: /ready\n              port: 8080\n            periodSeconds: 5\n---\napiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: api-pdb\nspec:\n  minAvailable: 4\n  selector:\n    matchLabels:\n      app: api\nHAEEOF\nkubectl apply -f ha-deployment.yaml && kubectl get pods -o wide',
        output: 'deployment.apps/api created\npoddisruptionbudget.policy/api-pdb created\n\nNAME                  READY   STATUS    NODE     ZONE\napi-7d4f6bf4b-abc1   1/1     Running   node-1   us-west-2a\napi-7d4f6bf4b-def2   1/1     Running   node-2   us-west-2b\napi-7d4f6bf4b-ghi3   1/1     Running   node-3   us-west-2c\napi-7d4f6bf4b-jkl4   1/1     Running   node-1   us-west-2a\napi-7d4f6bf4b-mno5   1/1     Running   node-2   us-west-2b\napi-7d4f6bf4b-pqr6   1/1     Running   node-3   us-west-2c',
        explain: '6 副本跨 3 个可用区均匀分布（topologySpreadConstraints），PodDisruptionBudget 确保至少 4 个 Pod 可用（允许 2 个同时不可用），单个可用区故障时仍有 4 个 Pod 运行，服务不中断。'
      }
    ],
    diagnosis: [
      {
        symptom: '系统的 SLA 承诺是 99.9%，但实际可用性只有 99.5%，每月超标',
        cause: '单点故障（如单实例数据库）、部署时全量重启导致短暂不可用、监控盲区（故障未被及时发现）',
        fix: '消除单点故障（数据库主从复制），实现零停机部署（滚动更新/蓝绿部署），完善监控覆盖（确保所有故障都能在 1 分钟内被检测），计算错误预算并控制发布频率'
      },
      {
        symptom: '数据库主从切换时应用出现 30 秒的连接中断',
        cause: '应用使用硬编码的数据库连接地址，主从切换后 DNS 未及时更新，连接池未自动重连',
        fix: '使用数据库代理（如 ProxySQL、RDS Proxy）抽象连接地址，配置连接池的 connectionTimeout 和 validationQuery，应用层实现重试逻辑（指数退避），使用读写分离中间件自动感知主从变化'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '计算一个包含 2 个负载均衡器（并联）、3 个应用实例（并联）、1 个数据库（无冗余）的系统的整体可用性',
        hint: '并联 = 1-(1-A)^n，串联 = 乘积',
        answer: 'LB 并联 = 1-(1-0.999)^2 = 0.999999，App 并联 = 1-(1-0.999)^3 = 0.999999999，DB 串联 = 0.9995，整体 = 0.999999 * 0.999999999 * 0.9995 = 0.9995（99.95%），瓶颈是数据库单点，建议添加数据库从库'
      },
      {
        level: '进阶',
        task: '设计一个 99.99% 可用性的电商订单系统，考虑计算、存储、网络、外部依赖的冗余',
        hint: '从每个组件的冗余和故障转移角度设计',
        answer: '计算：6 副本跨 3 AZ + HPA 自动扩容；存储：PostgreSQL 主从同步复制 + 自动故障转移（如 RDS Multi-AZ），Redis Sentinel 集群；网络：多 ALB + Route53 健康检查 + CloudFront CDN；外部依赖：支付网关配置熔断 + 备用网关 + 异步消息队列（SQS）解耦；部署：金丝雀发布 + 自动回滚；监控：全链路追踪 + 多窗口告警'
      }
    ]
  },
  "5FN7iva4DW_lv-r1tijd8": {

    mentalModel: '数据管理是 DevOps 中常被忽视但至关重要的领域——涵盖数据库迁移、备份恢复、数据同步、数据治理，如同搬家时打包、运输、拆包贵重物品的全套流程，确保数据在流转中不丢失、不损坏、不泄露。',
    handsOn: [
      {
        title: '使用 Flyway 管理数据库版本迁移',
        cmd: 'mkdir -p db/migration && cat > db/migration/V1__create_users.sql << SQLEOF\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\nCREATE INDEX idx_users_email ON users(email);\nSQLEOF\ncat > db/migration/V2__add_orders.sql << SQLEOF\nCREATE TABLE orders (\n    id SERIAL PRIMARY KEY,\n    user_id INTEGER REFERENCES users(id),\n    amount DECIMAL(10,2) NOT NULL,\n    status VARCHAR(50) DEFAULT pending,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\nSQLEOF\nflyway -url=jdbc:postgresql://localhost/mydb -user=admin -password=secret migrate',
        output: 'Flyway Community Edition 9.22.0\nSuccessfully validated 2 migrations\nCurrent version of schema "public": 2\nMigrating schema "public" to version "2 - add orders"\nSuccessfully applied 2 migrations to schema "public", now at version v2',
        explain: 'Flyway 通过版本号前缀（V1__、V2__）管理迁移顺序，每次执行记录已应用的迁移到 flyway_schema_history 表，确保迁移幂等性（不重复执行），支持回滚（需要 Flyway Pro 或手动写反向迁移）。'
      },
      {
        title: '配置 PostgreSQL 的自动备份和恢复',
        cmd: 'cat > backup.sh << BKEOF\n#!/bin/bash\nset -e\nBACKUP_DIR="/backups"\nDATE=$(date +%Y%m%d_%H%M%S)\nDB_NAME="production"\n\n# 全量备份\npg_dump -Fc -Z 9 -f ${BACKUP_DIR}/${DB_NAME}_${DATE}.dump ${DB_NAME}\n\n# 验证备份完整性\npg_restore --list ${BACKUP_DIR}/${DB_NAME}_${DATE}.dump > /dev/null\n\n# 清理 30 天前的备份\nfind ${BACKUP_DIR} -name "*.dump" -mtime +30 -delete\n\necho "Backup completed: ${DB_NAME}_${DATE}.dump"\nBKEOF\nchmod +x backup.sh && echo "0 2 * * * /opt/scripts/backup.sh >> /var/log/backup.log 2>&1" | crontab - && echo "Cron job installed: daily at 2am"',
        output: 'Cron job installed: daily at 2am',
        explain: 'pg_dump -Fc 生成自定义格式备份（支持并行恢复），-Z 9 最大压缩，crontab 定时执行。生产环境应同时配置 WAL 归档（实现时间点恢复 PITR）和异地备份（防止地域级灾难）。'
      },
      {
        title: '使用 Debezium 实现数据库变更数据捕获（CDC）',
        cmd: 'cat > debezium-connector.json << CDCEOF\n{\n  "name": "orders-connector",\n  "config": {\n    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",\n    "database.hostname": "postgres",\n    "database.port": "5432",\n    "database.user": "debezium",\n    "database.password": "secret",\n    "database.dbname": "orders",\n    "database.server.name": "dbserver1",\n    "table.include.list": "public.orders",\n    "plugin.name": "pgoutput",\n    "slot.name": "debezium_slot"\n  }\n}\nCDCEOF\ncurl -X POST -H "Content-Type: application/json" -d @debezium-connector.json http://connect:8083/connectors && echo "" && echo "CDC started: all orders table changes will be pushed to Kafka topic: dbserver1.public.orders"',
        output: '{"name":"orders-connector","config":{...},"tasks":[],"type":"source"}\n\nCDC started: all orders table changes will be pushed to Kafka topic: dbserver1.public.orders',
        explain: 'Debezium 通过 PostgreSQL 的逻辑复制（WAL）捕获每一行数据变更（INSERT/UPDATE/DELETE），实时推送到 Kafka，下游消费者可用于同步缓存、更新搜索索引、触发业务流程，实现事件驱动架构。'
      }
    ],
    diagnosis: [
      {
        symptom: '数据库迁移失败，应用启动报错 "relation does not exist" 或 "column does not exist"',
        cause: '迁移脚本执行顺序错误、迁移脚本被跳过（版本号冲突）、或迁移脚本在目标环境执行失败（如权限不足）',
        fix: '检查 flyway_schema_history 表确认已执行的迁移，验证迁移脚本语法（在测试环境先执行），确保数据库用户有 CREATE TABLE/ALTER TABLE 权限，使用 flyway info 查看迁移状态'
      },
      {
        symptom: '数据库恢复后数据与预期不一致，丢失了最近几小时的变更',
        cause: '只使用了全量备份（每天一次），未配置 WAL 归档，无法恢复到故障前的精确时间点',
        fix: '配置 PostgreSQL 的 archive_mode 和 archive_command（将 WAL 文件归档到 S3），恢复时先恢复最近的全量备份，再应用 WAL 文件到目标时间点（PITR），定期测试恢复流程确保可靠'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个电商应用设计数据库迁移策略：支持多环境（dev/staging/prod）的独立迁移和回滚',
        hint: '使用 Flyway 的环境配置和 baseline 功能',
        answer: '每个环境独立的 flyway.conf（不同数据库连接），使用 flyway baseline 初始化已有数据库，迁移脚本按功能模块组织（V1__users、V2__orders），配置 flyway validateOnMigrate 检测脚本篡改，回滚通过编写反向迁移脚本（如 DROP TABLE、DROP COLUMN）'
      },
      {
        level: '进阶',
        task: '设计零停机数据库迁移方案：添加新列、修改列类型、重命名列时不中断服务',
        hint: '使用扩展-收缩模式（Expand and Contract）',
        answer: '添加列：先添加可空列 -> 部署新代码（双写新旧列）-> 回填历史数据 -> 部署代码（只读新列）-> 删除旧列。修改类型：添加新类型列 -> 双写 -> 回填 -> 切换读取 -> 删除旧列。重命名：添加新列 -> 双写 -> 回填 -> 切换 -> 删除。每次部署只做一步，确保可回滚'
      }
    ]
  },
  "Qc0MGR5bMG9eeM5Zb9PMk": {

    mentalModel: '云设计模式是云原生架构的"经验公式"——总结了在云上构建可靠、可扩展、安全系统的常见解决方案，如同建筑学的"结构力学"，告诉你如何设计才能在云环境中承受各种"压力"。',
    handsOn: [
      {
  title: '掌握核心云设计模式分类和典型场景',
  cmd: '# 见下方说明',
  explain: '**可靠性模式**: Circuit Breaker（熔断器）：依赖服务故障时快速失败，避免雪崩\nRetry with Backoff（指数退避重试）：临时故障自动重试，间隔递增避免压垮下游\nHealth Endpoint Monitoring（健康端点监控）：定期探测服务健康状态\nLeader Election（领导者选举）：分布式系统中选举唯一协调者\nGeodes（地理分布）：将计算和数据靠近用户，减少延迟\n\n**可扩展性模式**: Queue-Based Load Leveling（队列削峰）：用消息队列缓冲突发流量\nSharding（分片）：将数据按 key 分散到多个存储节点\nCompeting Consumers（竞争消费者）：多个消费者并行处理队列消息\nPipes and Filters（管道和过滤器）：将复杂处理拆分为可复用的流水线步骤\nEvent Sourcing（事件溯源）：以事件序列而非当前状态存储数据\n\n**数据管理模式**: CQRS（命令查询职责分离）：写操作和读操作使用不同的模型和数据存储\nMaterialized View（物化视图）：预计算查询结果，加速读取\nCache-Aside（旁路缓存）：应用显式管理缓存的读写和失效\nSaga（长事务）：跨多个服务的分布式事务，通过补偿操作实现最终一致性\nStrangler Fig（绞杀者模式）：逐步替换旧系统，新功能用新系统实现'
},
      {
        title: '实现 Circuit Breaker 熔断器模式',
        cmd: 'cat > circuit_breaker.js << CBEOF\nclass CircuitBreaker {\n  constructor(fn, options = {}) {\n    this.fn = fn;\n    this.state = "CLOSED"; // CLOSED, OPEN, HALF_OPEN\n    this.failureCount = 0;\n    this.successCount = 0;\n    this.failureThreshold = options.failureThreshold || 5;\n    this.resetTimeout = options.resetTimeout || 30000;\n    this.halfOpenMaxAttempts = options.halfOpenMaxAttempts || 3;\n  }\n\n  async execute(...args) {\n    if (this.state === "OPEN") {\n      if (Date.now() - this.lastFailureTime > this.resetTimeout) {\n        this.state = "HALF_OPEN";\n        this.successCount = 0;\n        console.log("Circuit: OPEN -> HALF_OPEN");\n      } else {\n        throw new Error("Circuit breaker is OPEN");\n      }\n    }\n    try {\n      const result = await this.fn(...args);\n      this.onSuccess();\n      return result;\n    } catch (err) {\n      this.onFailure();\n      throw err;\n    }\n  }\n\n  onSuccess() {\n    this.failureCount = 0;\n    if (this.state === "HALF_OPEN") {\n      this.successCount++;\n      if (this.successCount >= this.halfOpenMaxAttempts) {\n        this.state = "CLOSED";\n        console.log("Circuit: HALF_OPEN -> CLOSED");\n      }\n    }\n  }\n\n  onFailure() {\n    this.failureCount++;\n    this.lastFailureTime = Date.now();\n    if (this.failureCount >= this.failureThreshold) {\n      this.state = "OPEN";\n      console.log("Circuit: CLOSED -> OPEN (failures: " + this.failureCount + ")");\n    }\n  }\n}\nCBEOF\necho "Circuit Breaker implemented with 3 states: CLOSED, OPEN, HALF_OPEN" && echo "Usage: const cb = new CircuitBreaker(fetchPayment, { failureThreshold: 5 })" && echo "await cb.execute(orderId)"',
        output: 'Circuit Breaker implemented with 3 states: CLOSED, OPEN, HALF_OPEN\nUsage: const cb = new CircuitBreaker(fetchPayment, { failureThreshold: 5 })\nawait cb.execute(orderId)',
        explain: '熔断器三种状态：CLOSED（正常放行）、OPEN（快速失败，保护下游）、HALF_OPEN（试探性放行）。避免级联故障，给故障服务恢复时间。'
      },
      {
  title: '理解 Queue-Based Load Leveling 队列削峰模式',
  cmd: '# 见下方说明',
  explain: '**队列削峰的工作原理**: 突发流量写入消息队列（而非直接处理）\n消费者按自己的速度从队列读取并处理\n队列作为缓冲区，平滑流量峰值\n示例：每秒 10000 请求 -> 队列 -> 10 个消费者每秒处理 100 个\n\n**实现方式**: 生产者：接收请求，立即写入队列（SQS/Kafka/RabbitMQ），返回 "已接收"\n消费者：从队列读取消息，处理业务逻辑，删除消息\n监控：队列深度（积压量）、消费者延迟、处理速率\n扩缩容：根据队列深度自动增加/减少消费者数量\n\n**适用场景**: 订单处理（突发下单高峰）\n邮件/短信发送（批量通知）\n数据处理（ETL 任务）\n日志处理（日志聚合）\n不适用于：实时性要求高的场景（如支付确认）'
}
    ],
    diagnosis: [
      {
        symptom: '使用队列削峰后，请求处理延迟增加（从秒级到分钟级）',
        cause: '消费者数量不足或处理速度慢，队列积压严重',
        fix: '增加消费者实例（自动扩缩容），优化消费者处理逻辑（批处理、并行），调整队列的 visibility timeout（避免消息被重复处理）'
      },
      {
        symptom: '队列中的消息被重复处理，导致业务逻辑错误（如重复扣款）',
        cause: '消费者处理超时（visibility timeout 到期），队列重新投递消息，或消费者崩溃未删除消息',
        fix: '实现幂等性（使用唯一 ID 去重），调整 visibility timeout（大于最大处理时间），使用死信队列（DLQ）处理多次失败的消息'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 AWS SQS 实现一个简单的队列削峰系统：生产者写入消息，消费者处理并删除',
        hint: '使用 boto3 的 send_message 和 receive_message',
        answer: '生产者：sqs.send_message(QueueUrl=QUEUE_URL, MessageBody=json.dumps(order))，消费者：while True: response = sqs.receive_message(QueueUrl=QUEUE_URL)，处理消息后 sqs.delete_message(QueueUrl=QUEUE_URL, ReceiptHandle=receipt_handle)'
      },
      {
        level: '进阶',
        task: '设计一个完整的云原生架构方案：使用 CQRS + Event Sourcing + Saga 模式实现电商订单系统',
        hint: '考虑命令/查询分离、事件存储、分布式事务协调',
        answer: '命令端：接收订单请求，验证业务规则，发布 OrderCreated 事件到 Kafka；事件存储：Kafka 持久化所有事件（Event Sourcing）；查询端：消费事件，更新读取优化的物化视图（Elasticsearch）；Saga 协调：Order Saga 监听事件，调用 Payment Service、Inventory Service，失败时发布补偿事件（OrderCancelled）；最终一致性：通过事件驱动实现跨服务的数据一致性'
      }
    ]
  },
  "8kby89epyullS9W7uKDrs": {
    mentalModel: '管理与监控是 DevOps 的"运营中心"——涵盖资源管理、成本优化、容量规划、变更管理、合规审计，如同航空公司的调度中心，确保所有航班（服务）安全、准时、经济地运行。',
    handsOn: [
      {
        title: '使用 Kubernetes 资源配额和限制管理资源',
        cmd: 'cat > resource-management.yaml << RMEOF\napiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: team-a-quota\n  namespace: team-a\nspec:\n  hard:\n    requests.cpu: "10"\n    requests.memory: 20Gi\n    limits.cpu: "20"\n    limits.memory: 40Gi\n    pods: "50"\n    services: "10"\n    persistentvolumeclaims: "10"\n---\napiVersion: v1\nkind: LimitRange\nmetadata:\n  name: team-a-limits\n  namespace: team-a\nspec:\n  limits:\n    - type: Container\n      default:\n        cpu: 500m\n        memory: 512Mi\n      defaultRequest:\n        cpu: 100m\n        memory: 128Mi\n      max:\n        cpu: "2"\n        memory: 2Gi\n      min:\n        cpu: 50m\n        memory: 64Mi\n---\napiVersion: scheduling.k8s.io/v1\nkind: PriorityClass\nmetadata:\n  name: high-priority\nvalue: 1000000\nglobalDefault: false\ndescription: "High priority for critical services"\nRMEOF\nkubectl apply -f resource-management.yaml && kubectl describe resourcequota team-a-quota -n team-a',
        output: 'resourcequota/team-a-quota created\nlimitrange/team-a-limits created\npriorityclass.scheduling.k8s.io/high-priority created\n\nName:            team-a-quota\nNamespace:       team-a\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       0     20\nlimits.memory    0     40Gi\npods             0     50\nrequests.cpu     0     10\nrequests.memory  0     20Gi',
        explain: 'ResourceQuota 限制 namespace 的总资源使用量，LimitRange 设置单个 Pod/Container 的默认资源限制和最大/最小值，PriorityClass 定义调度优先级（资源不足时低优先级 Pod 被驱逐）。三者配合实现精细化资源管理。'
      },
      {
        title: '使用 Kubecost 分析和优化 Kubernetes 成本',
        cmd: 'helm repo add kubecost https://kubecost.github.io/cost-model && helm install kubecost kubecost/cost-analyzer --namespace kubecost --create-namespace --set kubecostToken="your-token" && kubectl port-forward svc/kubecost-cost-analyzer -n kubecost 9090:9090',
        output: 'NAME: kubecost\nNAMESPACE: kubecost\nSTATUS: deployed\nREVISION: 1\nNOTES:\nKubecost has been successfully installed.\nAccess the UI at: http://localhost:9090\n\n# Kubecost 仪表盘展示：\n# - 按 namespace/deployment/pod 的成本分配\n# - 未使用的资源（请求但未使用的 CPU/内存）\n# - 优化建议（如降低过高的 resource requests）\n# - Spot 实例节省分析',
        explain: 'Kubecost 分析 Kubernetes 的实际资源使用和成本，识别过度配置（requests 远大于实际使用）、未使用的资源、可优化的实例类型，提供具体的成本优化建议。'
      },
      {
  title: '实施变更管理流程（Change Management）',
  cmd: '# 见下方说明',
  explain: '**变更分级和审批**: 变更分级：\n- Standard Change（标准变更）：低风险、预批准、有 SOP（如扩容、配置调整）\n- Normal Change（常规变更）：中等风险、需要审批（如新功能部署、数据库迁移）\n- Emergency Change（紧急变更）：高风险、快速审批（如安全补丁、故障修复）\n\n审批流程：\nStandard -> 自动审批（CI/CD 通过即可）\nNormal -> 技术 Lead 审批 -> 变更窗口执行\nEmergency -> On-call Lead 快速审批 -> 立即执行 -> 事后补文档\n\n**变更窗口和冻结期**: 变更窗口：\n- 生产环境：工作日 10:00-16:00（避开高峰和下班时间）\n- 非关键系统：任何工作时间\n- 紧急变更：任何时间\n\n冻结期：\n- 重大节假日前 3 天（如春节、双十一）\n- 财报发布前 1 周\n- 重大活动期间\n冻结期只允许 Emergency Change，其他变更推迟到冻结期后\n\n**变更回滚和事后回顾**: 每个变更必须有回滚计划：\n- 代码变更：git revert + 重新部署\n- 数据库变更：反向迁移脚本\n- 配置变更：版本化的配置文件\n- 基础设施变更：terraform destroy/apply\n\n事后回顾（Post-Change Review）：\n- 变更是否按预期执行？\n- 是否有意外影响？\n- 回滚是否顺利？\n- 流程有哪些改进点？'
}
    ],
    diagnosis: [
      {
        symptom: 'Kubernetes 集群成本持续增长，但资源利用率只有 30%',
        cause: '过度配置资源（requests 远大于实际使用），未使用自动扩缩容，空闲节点未及时清理',
        fix: '使用 VPA（Vertical Pod Autoscaler）推荐合理的 resource requests，启用 Cluster Autoscaler 自动缩容空闲节点，使用 Karpenter 选择更经济的实例类型，定期清理未使用的资源（PVC、Service、ConfigMap）'
      },
      {
        symptom: '变更频繁导致生产事故，每次变更都需要紧急回滚',
        cause: '缺乏变更管理流程，变更未经充分测试和审批，没有回滚计划',
        fix: '建立变更分级和审批流程，要求所有变更有回滚计划，实施变更窗口（避开高峰），引入自动化测试和金丝雀发布，每次变更后进行监控观察（15-30 分钟）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 Kubernetes 集群配置资源配额：限制每个 namespace 最多使用 10 CPU 和 20Gi 内存',
        hint: '使用 ResourceQuota 资源',
        answer: '创建 ResourceQuota（spec.hard: requests.cpu: "10", requests.memory: 20Gi, limits.cpu: "20", limits.memory: 40Gi），应用到目标 namespace，配合 LimitRange 设置单个 Pod 的默认资源限制，防止单个 Pod 占用过多资源'
      },
      {
        level: '进阶',
        task: '设计一个完整的变更管理流程，涵盖变更申请、审批、执行、验证、回滚的完整生命周期',
        hint: '考虑变更分级、审批流程、自动化、回滚策略',
        answer: '变更申请（JIRA ticket，包含变更内容、影响范围、回滚计划）-> 自动检查（CI/CD 测试通过）-> 审批（Standard 自动，Normal Lead 审批，Emergency 快速审批）-> 执行（金丝雀发布，10%->50%->100%）-> 验证（监控关键指标 30 分钟）-> 回滚（如指标异常自动回滚）-> 回顾（事后分析，改进流程）'
      }
    ]
  },
  "1_NRXjckZ0F8EtEmgixqz": {
    mentalModel: '设计与实施是将云设计模式落地为可运行系统的过程——从需求分析到架构设计，再到分阶段实施和验证，如同建筑设计师画图纸并监督施工，确保设计蓝图变成坚固的建筑。',
    handsOn: [
      {
        title: '使用架构决策记录（ADR）文档化设计决策',
        cmd: 'mkdir -p docs/adr && cat > docs/adr/001-use-postgresql.md << ADREOF\n# ADR 001: 使用 PostgreSQL 作为主数据库\n\n## 状态\n已采纳\n\n## 背景\n- 需要强一致性保证（金融交易）\n- 复杂查询需求（多表 JOIN、聚合）\n- 团队有 PostgreSQL 经验\n\n## 决策\n选择 PostgreSQL 15 作为主数据库\n\n## 后果\n### 正面\n- ACID 事务保证数据一致性\n- 成熟的生态和工具链\n- 支持 JSON 字段（灵活性）\n\n### 负面\n- 水平扩展比 NoSQL 复杂\n- 需要管理 schema 迁移\n\n### 风险缓解\n- 使用读写分离应对读负载\n- 使用 Flyway 管理迁移\nADREOF\necho "ADR created: docs/adr/001-use-postgresql.md"',
        output: 'ADR created: docs/adr/001-use-postgresql.md',
        explain: 'ADR（Architecture Decision Record）是轻量级的设计决策文档，记录"为什么"而非"是什么"。每个重要决策都应该有 ADR，方便团队理解和追溯。格式：状态、背景、决策、后果（正面/负面/风险缓解）。'
      },
      {
  title: '使用 C4 模型绘制系统架构图',
  cmd: '# 见下方说明',
  explain: '**C4 模型的四层抽象**: Level 1 - System Context（系统上下文）：\n  展示系统与外部用户、外部系统的关系\n  示例：[用户] --> [电商系统] --> [支付网关]\n\nLevel 2 - Container（容器）：\n  展示系统内的运行时单元（Web、API、数据库）\n  示例：[React SPA] --> [Spring Boot API] --> [PostgreSQL]\n\nLevel 3 - Component（组件）：\n  展示容器内的模块或服务\n  示例：[AuthComponent] [OrderComponent] [PaymentComponent]\n\nLevel 4 - Code（代码）：\n  展示组件的类和方法实现（可选，通常用 UML 类图）\n\n**使用 PlantUML 绘制 C4 图**: !include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml\n\nPerson(user, "用户", "浏览商品、下单")\n\nSystem_Boundary(ecom, "电商系统") {\n  Container(spa, "React SPA", "React", "用户界面")\n  Container(api, "Order API", "Spring Boot", "处理订单")\n  ContainerDb(db, "PostgreSQL", "PostgreSQL 15", "订单数据")\n  Container(cache, "Redis", "Redis 7", "会话缓存")\n}\n\nSystem_Ext(payment, "支付网关", "处理支付")\n\nRel(user, spa, "访问", "HTTPS")\nRel(spa, api, "调用", "REST/JSON")\nRel(api, db, "读写", "JDBC")\nRel(api, cache, "缓存", "Redis Protocol")\nRel(api, payment, "支付请求", "HTTPS")\n\n**C4 图的最佳实践**: 1. 从 Level 1 开始，逐步细化（不要跳过层级）\n2. 每张图只关注一个层级（不要混合）\n3. 使用工具生成图（PlantUML、Structurizr），避免手绘\n4. 图与代码一起版本控制（docs/ 目录）\n5. 定期回顾和更新（每个迭代或重大变更后）\n6. 配合 ADR 使用（图展示"是什么"，ADR 解释"为什么"）'
},
      {
        title: '使用 Terraform 实施基础设施即代码（IaC）',
        cmd: 'cat > terraform/main.tf << TFEOF\nterraform {\n  required_version = ">= 1.5.0"\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n  backend "s3" {\n    bucket = "myapp-terraform-state"\n    key    = "production/terraform.tfstate"\n    region = "us-west-2"\n  }\n}\n\nprovider "aws" {\n  region = "us-west-2"\n}\n\nmodule "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "5.0.0"\n  name    = "myapp-vpc"\n  cidr    = "10.0.0.0/16"\n  azs             = ["us-west-2a", "us-west-2b", "us-west-2c"]\n  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]\n  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]\n  enable_nat_gateway = true\n}\n\nmodule "eks" {\n  source  = "terraform-aws-modules/eks/aws"\n  version = "19.0.0"\n  cluster_name    = "myapp-cluster"\n  cluster_version = "1.28"\n  vpc_id          = module.vpc.vpc_id\n  subnet_ids      = module.vpc.private_subnets\n}\nTFEOF\ncd terraform && terraform init && terraform plan -out=tfplan',
        output: 'Initializing modules...\nInitializing provider plugins...\n\nTerraform will perform the following actions:\n\n  # module.vpc.aws_vpc.this[0] will be created\n  # module.eks.aws_eks_cluster.this[0] will be created\n  # ... (45 resources total)\n\nPlan: 45 to add, 0 to change, 0 to destroy.\n\nSaved the plan to: tfplan\n\nTo perform exactly these actions, run:\n  terraform apply "tfplan"',
        explain: 'Terraform 通过声明式配置管理基础设施，backend "s3" 将状态存储在 S3（团队协作），module 封装可复用的组件（VPC、EKS），plan 预览变更（不实际执行），apply 执行变更。分阶段实施降低风险。'
      }
    ],
    diagnosis: [
      {
        symptom: '架构设计看起来很完美，但实施时发现成本超预算',
        cause: '设计阶段未做成本估算，选择了过于昂贵的实例类型或过多的冗余',
        fix: '使用 AWS Pricing Calculator 估算成本，从最小可行架构开始（MVP），根据实际负载逐步扩展，定期回顾和优化（每月成本审查）'
      },
      {
        symptom: '实施过程中发现模块间耦合过紧，修改一个模块需要同时修改多个其他模块',
        cause: '设计时未充分解耦，接口定义不清晰，模块间存在隐式依赖',
        fix: '重新审视模块边界，使用接口（Interface）解耦，引入事件驱动架构（通过消息队列通信），逐步重构为独立可部署的微服务'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个电商系统编写 ADR：选择消息队列（Kafka vs RabbitMQ vs SQS）',
        hint: '从需求、团队经验、成本、运维复杂度角度分析',
        answer: 'ADR 格式：状态（已采纳）、背景（需要异步处理订单、高吞吐、持久化）、决策（选择 Kafka，因为高吞吐、持久化、生态丰富）、后果（正面：高吞吐、可回溯；负面：运维复杂、学习曲线；风险缓解：使用 MSK 托管服务、团队培训）'
      },
      {
        level: '进阶',
        task: '设计一个渐进式实施计划：将单体应用拆分为微服务，使用 Strangler Fig 模式',
        hint: '识别边界、逐步拆分、并行运行、逐步切换',
        answer: '阶段 1：识别域边界（用户、订单、商品、支付），创建 API Gateway 统一入口；阶段 2：将用户域拆分为独立服务，API Gateway 路由到新旧两个实现；阶段 3：逐步拆分其他域，每个域独立部署和测试；阶段 4：验证所有域的新实现，逐步将流量切换到新服务；阶段 5：下线单体应用。每阶段可独立回滚'
      }
    ]
  },
  "kq8Gjb2sN5fYT9pL3vRxW": {

    mentalModel: '容器运行时是执行和管理容器的底层软件——实现 OCI 标准定义的容器生命周期管理（创建、启动、停止、删除），如同汽车的引擎，用户（容器编排）踩油门（API 调用），引擎（运行时）实际驱动汽车（容器）运行。',
    handsOn: [
      {
  title: '理解容器运行时的层次结构和 OCI 标准',
  cmd: '# 见下方说明',
  explain: '**容器运行时的层次**: 高级运行时（High-level）：提供完整 API（镜像管理、容器生命周期）\n  代表：Docker Engine、containerd、CRI-O\n  职责：拉取镜像、管理存储、提供 gRPC API\n\n低级运行时（Low-level）：实际创建和运行容器进程\n  代表：runc（OCI 标准实现）、crun（C 语言实现，更快）\n  职责：设置 namespace、cgroup、seccomp，启动容器进程\n\n**OCI 标准（Open Container Initiative）**: OCI Image Spec：定义容器镜像格式（manifest、layers、config）\n  所有运行时都能运行 OCI 标准的镜像\nOCI Runtime Spec：定义容器运行时接口（create、start、kill、delete）\n  runc 是参考实现，crun、kata-containers 也遵循此标准\nCRI（Container Runtime Interface）：Kubernetes 定义的接口\n  containerd 和 CRI-O 实现 CRI，Kubernetes 通过 CRI 调用它们\n\n**容器运行时的演进**: 2013: Docker 发布（包含完整的构建、分发、运行工具链）\n2016: containerd 从 Docker 中拆分（专注运行时，去除构建功能）\n2017: CRI-O 发布（专为 Kubernetes 设计的轻量运行时）\n2020: Kubernetes 弃用 dockershim（不再直接支持 Docker）\n2022: Kubernetes 完全移除 dockershim，只支持 CRI 运行时\n趋势：containerd 和 CRI-O 成为主流，Docker 退化为开发工具'
},
      {
        title: '对比主流容器运行时',
        cmd: 'echo "=== 容器运行时对比 ===" && echo "" && echo "containerd:" && echo "  来源: Docker 拆分，CNCF 毕业项目" && echo "  定位: 通用容器运行时，支持 Docker 和 Kubernetes" && echo "  组件: containerd + runc" && echo "  镜像管理: 支持 OCI 和 Docker 格式" && echo "  适用: Kubernetes 集群，通用场景" && echo "" && echo "CRI-O:" && echo "  来源: Red Hat，专为 Kubernetes 设计" && echo "  定位: 最小化运行时，只做 Kubernetes 需要的" && echo "  组件: cri-o + runc/crun" && echo "  镜像管理: 只支持 OCI 格式" && echo "  适用: OpenShift，纯 Kubernetes 环境" && echo "" && echo "Docker Engine:" && echo "  来源: Docker Inc" && echo "  定位: 完整的容器平台（构建+运行）" && echo "  组件: dockerd + containerd + runc" && echo "  镜像管理: 支持 Docker 格式" && echo "  适用: 开发环境，单机部署"',
        output: '=== 容器运行时对比 ===\n\ncontainerd:\n  来源: Docker 拆分，CNCF 毕业项目\n  定位: 通用容器运行时，支持 Docker 和 Kubernetes\n  组件: containerd + runc\n  镜像管理: 支持 OCI 和 Docker 格式\n  适用: Kubernetes 集群，通用场景\n\nCRI-O:\n  来源: Red Hat，专为 Kubernetes 设计\n  定位: 最小化运行时，只做 Kubernetes 需要的\n  组件: cri-o + runc/crun\n  镜像管理: 只支持 OCI 格式\n  适用: OpenShift，纯 Kubernetes 环境\n\nDocker Engine:\n  来源: Docker Inc\n  定位: 完整的容器平台（构建+运行）\n  组件: dockerd + containerd + runc\n  镜像管理: 支持 Docker 格式\n  适用: 开发环境，单机部署',
        explain: '选择容器运行时需考虑：Kubernetes 兼容性（CRI 支持）、性能开销、功能需求（是否需要构建功能）、社区支持。生产环境推荐 containerd 或 CRI-O，开发环境使用 Docker。'
      },
      {
        title: '使用 crictl 调试容器运行时',
        cmd: 'apt-get install -y cri-tools && crictl --runtime-endpoint unix:///run/containerd/containerd.sock pods && crictl --runtime-endpoint unix:///run/containerd/containerd.sock ps && crictl --runtime-endpoint unix:///run/containerd/containerd.sock images',
        output: 'POD ID              NAME                 NAMESPACE       ATTEMPT\nabc123def456        nginx-7d4f6bf4b-xyz  default         0\n\nCONTAINER ID   IMAGE          NAME    POD ID          STATE\n789ghi012jkl   nginx:alpine   nginx   abc123def456    Running\n\nIMAGE               TAG       IMAGE ID        SIZE\nnginx:alpine        latest    sha256:abc...   23.5MB',
        explain: 'crictl 是 CRI 兼容的命令行工具，直接查询容器运行时（绕过 Kubernetes API），用于调试底层问题（如容器未启动、镜像拉取失败）。支持 pods、ps、images、logs、exec 等命令。'
      }
    ],
    diagnosis: [
      {
        symptom: 'Kubernetes Pod 卡在 ContainerCreating 状态，事件显示 "failed to create containerd task"',
        cause: 'containerd 服务异常（崩溃或卡死），或底层 runc 版本与容器镜像不兼容',
        fix: '检查 containerd 状态（systemctl status containerd），查看 containerd 日志（journalctl -u containerd），重启 containerd 服务，检查 runc 版本（runc --version），升级 containerd 和 runc 到兼容版本'
      },
      {
        symptom: '容器启动后无法访问网络，但其他节点上的容器网络正常',
        cause: '该节点的容器运行时网络插件（CNI）配置错误或未安装，导致容器无法获得 IP 地址',
        fix: '检查 CNI 插件是否安装（ls /opt/cni/bin），检查 CNI 配置（/etc/cni/net.d），重启 kubelet 和容器运行时，确认网络插件 DaemonSet 在该节点正常运行'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Kubernetes 节点上从 Docker 迁移到 containerd，验证集群正常运行',
        hint: '安装 containerd，配置 crictl，修改 kubelet 配置',
        answer: '安装 containerd（apt install containerd.io），生成默认配置（containerd config default > /etc/containerd/config.toml），启用 systemd cgroup driver，配置 crictl（crictl config runtime-endpoint unix:///run/containerd/containerd.sock），修改 kubelet 启动参数（--container-runtime-endpoint），重启 kubelet，验证 Pod 正常调度'
      },
      {
        level: '进阶',
        task: '使用 runc 手动创建一个容器，理解底层原理（namespace、cgroup、rootfs）',
        hint: '使用 runc spec 生成配置，手动准备 rootfs',
        answer: 'mkdir container && cd container && mkdir rootfs && docker export $(docker create alpine) | tar -C rootfs -xvf - && runc spec（生成 config.json），修改 config.json 设置 hostname、mounts、process.args，runc run mycontainer 启动容器，观察 namespace 隔离（ps -ef 看不到宿主机进程）和 cgroup 限制（cat /sys/fs/cgroup/memory/mycontainer/memory.limit_in_bytes）'
      }
    ]
  },
  "M3pR7tYv2xK5fQj8LdWnB": {

    mentalModel: 'containerd 是从 Docker 中拆分出的工业级容器运行时——专注于核心运行时功能（镜像管理、容器生命周期、存储、网络），去除了构建和分发功能，如同从"瑞士军刀"中取出最锋利的刀刃，专注做好一件事。',
    handsOn: [
      {
        title: '安装和配置 containerd',
        cmd: 'apt-get update && apt-get install -y containerd.io && mkdir -p /etc/containerd && containerd config default > /etc/containerd/config.toml && sed -i \'s/SystemdCgroup = false/SystemdCgroup = true/\' /etc/containerd/config.toml && systemctl restart containerd && systemctl status containerd',
        output: '● containerd.service - containerd container runtime\n     Loaded: loaded (/lib/systemd/system/containerd.service; enabled)\n     Active: active (running) since Mon 2026-05-27 10:0<think>:23 UTC\n       Docs: https://containerd.io\n   Main PID: 1234 (containerd)\n      Tasks: 15\n     Memory: 45.2M\n        CPU: 1.234s',
        explain: 'containerd 安装后生成 systemd 服务，config.toml 配置文件控制镜像仓库、存储驱动、运行时等。SystemdCgroup = true 是使用 Kubernetes 时的推荐配置（与 kubelet 的 cgroup driver 一致）。'
      },
      {
        title: '使用 ctr 和 crictl 管理容器',
        cmd: 'echo "=== 使用 ctr（containerd 原生 CLI）===" && ctr images pull docker.io/library/nginx:alpine && ctr run -d docker.io/library/nginx:alpine nginx-test && ctr tasks ls && echo "" && echo "=== 使用 crictl（CRI 兼容 CLI）===" && crictl pull nginx:alpine && cat > pod.json << PEOF\n{"metadata":{"name":"test-pod","namespace":"default"},"log_directory":"/tmp","linux":{}}\nPEOF\nPOD_ID=$(crictl runp pod.json) && crictl pods && crictl stopp $POD_ID && crictl rmp $POD_ID',
        output: '=== 使用 ctr（containerd 原生 CLI）===\ndocker.io/library/nginx:alpine:                                         resolved\nNAME                    PID     STATUS\nnginx-test              5678    RUNNING\n\n=== 使用 crictl（CRI 兼容 CLI）===\nImage is up to date for nginx:alpine\nPOD ID              NAME        NAMESPACE       ATTEMPT\nabc123              test-pod    default         0',
        explain: 'ctr 是 containerd 的原生 CLI（直接调用 containerd API），crictl 是 CRI 兼容 CLI（通过 CRI 接口调用，更接近 Kubernetes 的使用方式）。生产环境调试推荐 crictl，因为它与 Kubernetes 的行为一致。'
      },
      {
        title: '配置 containerd 的镜像仓库和安全策略',
        cmd: 'cat > /etc/containerd/config.toml << CTEOF\nversion = 2\n\n[plugins."io.containerd.grpc.v1.cri"]\n  sandbox_image = "registry.k8s.io/pause:3.9"\n  [plugins."io.containerd.grpc.v1.cri".registry]\n    [plugins."io.containerd.grpc.v1.cri".registry.mirrors]\n      [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]\n        endpoint = ["https://mirror.gcr.io", "https://registry-1.docker.io"]\n      [plugins."io.containerd.grpc.v1.cri".registry.mirrors."private.registry.com"]\n        endpoint = ["https://private.registry.com"]\n    [plugins."io.containerd.grpc.v1.cri".registry.configs]\n      [plugins."io.containerd.grpc.v1.cri".registry.configs."private.registry.com".auth]\n        username = "myuser"\n        password = "mypassword"\n  [plugins."io.containerd.grpc.v1.cri".containerd]\n    [plugins."io.containerd.grpc.v1.cri".containerd.runtimes]\n      [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]\n        runtime_type = "io.containerd.runc.v2"\n        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]\n          SystemdCgroup = true\nCTEOF\nsystemctl restart containerd && echo "containerd configured with mirror and auth"',
        output: 'containerd configured with mirror and auth',
        explain: 'containerd 配置支持镜像仓库镜像加速（mirror）、私有仓库认证（auth）、自定义运行时（如 runc、kata-containers）。registry.mirrors 配置多个镜像源，拉取时按顺序尝试，提升拉取速度和可靠性。'
      }
    ],
    diagnosis: [
      {
        symptom: 'containerd 拉取镜像失败，提示 "failed to resolve reference" 或 "x509: certificate signed by unknown authority"',
        cause: '镜像仓库的 TLS 证书不被信任（自签名证书），或网络无法访问仓库（DNS 解析失败、防火墙拦截）',
        fix: '对于自签名证书，在 containerd 配置中添加 [plugins."io.containerd.grpc.v1.cri".registry.configs."registry.example.com".tls] insecure_skip_verify = true（仅测试环境），生产环境应导入 CA 证书到系统信任链，检查网络连通性（curl -v https://registry.example.com/v2/）'
      },
      {
        symptom: 'Kubernetes Pod 频繁 OOMKilled，但 containerd 日志显示容器内存使用正常',
        cause: 'Pod 的 memory limit 设置过低，或容器内应用存在内存泄漏，containerd 的 cgroup 限制触发 OOM killer',
        fix: '检查 Pod 的 resources.limits.memory 配置，使用 kubectl top pod 查看实际内存使用，检查应用是否有内存泄漏（heap dump 分析），适当增加 memory limit，配置 VPA 自动调整资源'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 containerd 使用镜像仓库加速器，提升国内拉取 Docker Hub 镜像的速度',
        hint: '在 config.toml 中配置 registry.mirrors',
        answer: '编辑 /etc/containerd/config.toml，在 [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"] 下添加 endpoint = ["https://mirror.ccs.tencentyun.com", "https://registry-1.docker.io"]，重启 containerd，拉取镜像时优先使用腾讯云镜像源'
      },
      {
        level: '进阶',
        task: '配置 containerd 使用 kata-containers 运行时，为特定 Pod 提供虚拟机级别的隔离',
        hint: '在 config.toml 中添加 kata 运行时，使用 RuntimeClass 选择',
        answer: '在 containerd 配置中添加 [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.kata] runtime_type = "io.containerd.kata.v2"，创建 Kubernetes RuntimeClass（handler: kata），在 Pod spec 中设置 runtimeClassName: kata，该 Pod 将运行在轻量虚拟机中，提供内核级隔离（适合多租户或运行不受信任的代码）'
      }
    ]
  },
  "H6vN9kW2mP4fYQj3Lx8Tg": {

    mentalModel: 'CRI-O 是专为 Kubernetes 设计的最小化容器运行时——只实现 Kubernetes 需要的 CRI 接口，不包含任何额外功能，如同为 Kubernetes 量身定制的"专用工具"，比 containerd 更轻量、更专注。',
    handsOn: [
      {
        title: '安装 CRI-O 并配置为 Kubernetes 的容器运行时',
        cmd: 'OS=Debian_12 && VERSION=1.28 && echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /" | tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list && echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /" | tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list && curl -L https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable:cri-o:$VERSION/$OS/Release.key | apt-key add - && apt-get update && apt-get install -y cri-o cri-o-runc && systemctl start crio && systemctl status crio',
        output: '● crio.service - Container Runtime Interface for OCI (CRI-O)\n     Loaded: loaded (/lib/systemd/system/crio.service; enabled)\n     Active: active (running) since Mon 2026-05-27 10:00:00 UTC\n       Docs: https://github.com/cri-o/cri-o\n   Main PID: 2345 (crio)\n      Tasks: 12\n     Memory: 32.1M',
        explain: 'CRI-O 的安装比 containerd 更简单，专为 Kubernetes 设计，默认配置即可工作。cri-o-runc 包含 runc 运行时（也可选择 crun 替代 runc 获得更好性能）。'
      },
      {
        title: '对比 CRI-O 和 containerd 的配置差异',
        cmd: 'cat /etc/crio/crio.conf | head -50 && echo "" && echo "=== CRI-O 关键配置 ===" && echo "registries.conf: 配置镜像仓库镜像和认证" && echo "policy.json: 配置镜像签名验证策略" && echo "storage.conf: 配置存储驱动（overlay）" && echo "" && echo "=== CRI-O vs containerd ===" && echo "配置复杂度: CRI-O 更简单（默认配置即可）" && echo "镜像管理: CRI-O 只支持 OCI 格式，containerd 支持 OCI + Docker" && echo "CLI 工具: CRI-O 无专用 CLI，使用 crictl 调试" && echo "Kubernetes 集成: CRI-O 专为 K8s 设计，containerd 更通用" && echo "内存占用: CRI-O 约 30MB，containerd 约 45MB" && echo "社区支持: CRI-O 由 Red Hat 主导，containerd 由 Docker/CNCF 主导"',
        output: '=== CRI-O 关键配置 ===\nregistries.conf: 配置镜像仓库镜像和认证\npolicy.json: 配置镜像签名验证策略\nstorage.conf: 配置存储驱动（overlay）\n\n=== CRI-O vs containerd ===\n配置复杂度: CRI-O 更简单（默认配置即可）\n镜像管理: CRI-O 只支持 OCI 格式，containerd 支持 OCI + Docker\nCLI 工具: CRI-O 无专用 CLI，使用 crictl 调试\nKubernetes 集成: CRI-O 专为 K8s 设计，containerd 更通用\n内存占用: CRI-O 约 30MB，containerd 约 45MB\n社区支持: CRI-O 由 Red Hat 主导，containerd 由 Docker/CNCF 主导',
        explain: 'CRI-O 的优势是简单和专注：默认配置即可工作，无需调优。劣势是功能较少（不支持 Docker 镜像格式、无专用 CLI）。适合纯 Kubernetes 环境，尤其是 OpenShift（默认使用 CRI-O）。'
      },
      {
        title: '使用 crictl 调试 CRI-O 运行的容器',
        cmd: 'crictl --runtime-endpoint unix:///var/run/crio/crio.sock pods && crictl --runtime-endpoint unix:///var/run/crio/crio.sock ps -a && crictl --runtime-endpoint unix:///var/run/crio/crio.sock logs <container-id> && crictl --runtime-endpoint unix:///var/run/crio/crio.sock inspect <container-id> | jq .info',
        output: 'POD ID              NAME                 NAMESPACE       ATTEMPT   STATE\nabc123              nginx-7d4f6bf4b-xyz  default         0         Ready\n\nCONTAINER ID   IMAGE          NAME    POD ID          STATE\n789ghi         nginx:alpine   nginx   abc123          Running\n\n# logs 输出:\n# 172.17.0.1 - - [27/May/2026:10:00:00 +0000] "GET / HTTP/1.1" 200 615\n# 172.17.0.1 - - [27/May/2026:10:00:05 +0000] "GET /health HTTP/1.1" 200 2\n\n# inspect 输出:\n{\n  "pid": 5678,\n  "runtimeSpec": {\n    "process": {\n      "args": ["nginx", "-g", "daemon off;"]\n    }\n  }\n}',
        explain: 'CRI-O 没有专用 CLI，使用 crictl 通过 CRI 接口调试。crictl pods/ps/logs/inspect 命令与 containerd 相同，只需指定不同的 runtime-endpoint（unix:///var/run/crio/crio.sock）。'
      }
    ],
    diagnosis: [
      {
        symptom: 'CRI-O 启动失败，日志显示 "Failed to create CNI config list"',
        cause: 'CNI 插件未安装或配置文件缺失，CRI-O 依赖 CNI 为容器配置网络',
        fix: '安装 CNI 插件（apt install containernetworking-plugins），检查 /etc/cni/net.d/ 目录下是否有网络配置文件（如 10-crio-bridge.conf），确认 CNI 插件路径正确（/opt/cni/bin）'
      },
      {
        symptom: 'Kubernetes Pod 在 CRI-O 节点上启动失败，提示 "image not found" 但镜像已拉取',
        cause: 'CRI-O 的镜像存储与 containerd 独立，从 containerd 迁移到 CRI-O 后需要重新拉取镜像，或镜像名称格式不兼容',
        fix: '使用 crictl pull 重新拉取镜像，检查镜像名称格式（CRI-O 需要完整的 registry/path:tag 格式，如 docker.io/library/nginx:alpine 而非 nginx:alpine），配置 unqualified-search-registries 允许短名称'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 Kubernetes 集群中安装 CRI-O 作为容器运行时，验证 Pod 正常运行',
        hint: '安装 CRI-O，配置 kubelet 使用 CRI-O',
        answer: '安装 CRI-O（apt install cri-o cri-o-runc），启动 crio 服务，配置 kubelet（--container-runtime-endpoint=unix:///var/run/crio/crio.sock），重启 kubelet，创建测试 Pod（kubectl run test --image=nginx:alpine），验证 Pod Running 状态'
      },
      {
        level: '进阶',
        task: '配置 CRI-O 的镜像签名验证，确保只运行经过签名的可信镜像',
        hint: '使用 policy.json 和 registries.d 配置签名验证',
        answer: '在 /etc/containers/policy.json 中配置 default policy 为 reject（默认拒绝所有镜像），为可信仓库添加 accept 规则（如 registry.example.com），配置签名密钥（GPG public key），使用 cosign 签名镜像，CRI-O 拉取镜像时自动验证签名，拒绝未签名或签名不匹配的镜像'
      }
    ]
  },
  "D4rK8nW3vP5fYQj7Lx2Tm": {

    mentalModel: 'LXC（Linux Containers）是容器技术的先驱——在 Docker 之前就存在的操作系统级虚拟化方案，提供完整的 Linux 环境（包含 init 系统），如同在宿主机上运行多个独立的"虚拟房间"，每个房间有自己的 systemd、sshd、日志系统。',
    handsOn: [
      {
        title: '安装 LXC 并创建容器',
        cmd: 'apt-get install -y lxc lxc-templates && lxc-create -n mycontainer -t ubuntu -- --release jammy && lxc-start -n mycontainer && lxc-attach -n mycontainer -- bash -c "hostname && cat /etc/os-release | head -3"',
        output: 'Creating container...\nContainer rootfs created\nContainer mycontainer created\n\nmycontainer\nNAME="Ubuntu"\nVERSION="22.04.3 LTS (Jammy Jellyfish)"\nID=ubuntu',
        explain: 'lxc-create 使用模板（-t ubuntu）创建容器，--release jammy 指定 Ubuntu 版本。与 Docker 不同，LXC 容器是完整的 Linux 环境（包含 init 系统、多个进程），适合需要传统 VM 体验但更轻量的场景。'
      },
      {
        title: '对比 LXC 容器和 Docker 容器的差异',
        cmd: 'echo "=== LXC 容器内部 ===" && lxc-attach -n mycontainer -- bash -c "ps aux | head -10" && echo "" && echo "=== Docker 容器内部 ===" && docker run --rm alpine ps aux && echo "" && echo "=== 核心差异 ===" && echo "LXC: 完整 OS（systemd + 多进程），持久化，类似 VM" && echo "Docker: 单进程（PID 1），临时性，应用容器" && echo "" && echo "=== 使用场景 ===" && echo "LXC: 需要完整 OS 环境（如运行 systemd 服务、开发环境）" && echo "Docker: 微服务、CI/CD、不可变基础设施" && echo "" && echo "=== 资源占用 ===" && echo "LXC: 约 50-100MB（包含完整 init 系统）" && echo "Docker: 约 5-20MB（只有应用进程）"',
        output: '=== LXC 容器内部 ===\nUSER       PID %CPU %MEM    VSZ   RSS TTY  STAT START   TIME COMMAND\nroot         1  0.0  0.1  45678  2345 ?     Ss   10:00   0:00 /sbin/init\nroot        23  0.0  0.0  12345  1234 ?     Ss   10:00   0:00 /lib/systemd/systemd-journald\nroot        45  0.0  0.0  23456  2345 ?     Ss   10:00   0:00 /usr/sbin/sshd -D\n\n=== Docker 容器内部 ===\nPID   USER     TIME  COMMAND\n    1 root      0:00 /bin/sh\n\n=== 核心差异 ===\nLXC: 完整 OS（systemd + 多进程），持久化，类似 VM\nDocker: 单进程（PID 1），临时性，应用容器\n\n=== 使用场景 ===\nLXC: 需要完整 OS 环境（如运行 systemd 服务、开发环境）\nDocker: 微服务、CI/CD、不可变基础设施\n\n=== 资源占用 ===\nLXC: 约 50-100MB（包含完整 init 系统）\nDocker: 约 5-20MB（只有应用进程）',
        explain: 'LXC 提供完整的 Linux 环境（systemd、sshd、多个进程），适合需要传统 VM 体验的场景（如开发环境、运行需要 init 系统的软件）。Docker 容器是单进程、临时性的，适合微服务架构。两者使用相同的底层技术（namespace + cgroup）但设计理念不同。'
      },
      {
        title: '使用 LXC 创建隔离的开发环境',
        cmd: 'cat > dev-env.sh << DEVEOF\n#!/bin/bash\nCONTAINER_NAME="dev-ubuntu"\n\n# 创建开发容器\nlxc-create -n $CONTAINER_NAME -t ubuntu -- --release jammy\n\n# 配置资源限制\nlxc-cgroup -n $CONTAINER_NAME memory.limit_in_bytes 2G\nlxc-cgroup -n $CONTAINER_NAME cpu.cfs_quota_us 200000  # 2 CPU\n\n# 挂载开发目录\nmkdir -p /var/lib/lxc/$CONTAINER_NAME/rootfs/home/dev/workspace\necho "/home/user/workspace /var/lib/lxc/$CONTAINER_NAME/rootfs/home/dev/workspace none bind 0 0" >> /etc/fstab\n\n# 启动容器并安装开发工具\nlxc-start -n $CONTAINER_NAME\nlxc-attach -n $CONTAINER_NAME -- bash -c "\n  apt-get update && apt-get install -y \\\\\n    build-essential git vim curl \\\\\n    python3 python3-pip \\\\\n    golang-go \\\\\n    nodejs npm\n"\n\necho "Dev environment ready: lxc-attach -n $CONTAINER_NAME"\nDEVEOF\nchmod +x dev-env.sh && echo "Dev environment script created"',
        output: 'Dev environment script created\n# 使用：./dev-env.sh 创建开发环境\n# 进入：lxc-attach -n dev-ubuntu\n# 停止：lxc-stop -n dev-ubuntu\n# 删除：lxc-destroy -n dev-ubuntu',
        explain: 'LXC 容器适合创建持久化的开发环境：完整的 Linux 环境（可以运行 systemd 服务、安装各种软件），资源隔离（限制 CPU/内存），目录挂载（共享代码），快照功能（保存/恢复开发环境状态）。'
      }
    ],
    diagnosis: [
      {
        symptom: 'LXC 容器启动失败，提示 "Failed to mount cgroup" 或 "Failed to setup namespaces"',
        cause: '宿主机内核不支持某些 namespace（如 user namespace），或 cgroup v2 与 LXC 版本不兼容',
        fix: '检查内核配置（grep CONFIG_NAMESPACES /boot/config-*），升级 LXC 到最新版本（支持 cgroup v2），在容器配置中禁用不支持的 namespace（lxc.namespace.drop = user）'
      },
      {
        symptom: 'LXC 容器内的网络无法访问外部，但宿主机网络正常',
        cause: 'LXC 的网络桥接（lxcbr0）未正确配置，或 iptables NAT 规则未生效',
        fix: '检查 lxcbr0 桥接（ip addr show lxcbr0），确认 DHCP 服务运行（systemctl status lxc-net），检查 iptables NAT 规则（iptables -t nat -L POSTROUTING），重启 lxc-net 服务（systemctl restart lxc-net）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 LXC 创建一个 Ubuntu 容器，配置 1GB 内存限制和 1 CPU，安装并运行 Nginx',
        hint: '使用 lxc-create、lxc-cgroup、lxc-attach',
        answer: 'lxc-create -n nginx-lxc -t ubuntu -- --release jammy，lxc-start -n nginx-lxc，lxc-cgroup -n nginx-lxc memory.limit_in_bytes 1G，lxc-cgroup -n nginx-lxc cpu.cfs_quota_us 100000，lxc-attach -n nginx-lxc -- apt-get install -y nginx，lxc-attach -n nginx-lxc -- systemctl start nginx'
      },
      {
        level: '进阶',
        task: '使用 LXC 的快照功能实现开发环境的版本管理（保存状态、恢复、克隆）',
        hint: '使用 lxc-snapshot 和 lxc-copy',
        answer: 'lxc-stop -n dev && lxc-snapshot -n dev -s base（创建快照 "base"），lxc-snapshot -n dev -L（列出快照），lxc-snapshot -n dev -r base（恢复到 "base" 状态），lxc-copy -n dev -N dev-clone（克隆容器），实现开发环境的版本管理（如 "clean state"、"with dependencies installed"、"production-like"）'
      }
    ]
  },
  "A7tL2mF8dW4fYQj3Kx5Pg": {

    mentalModel: 'rkt（读作 "rocket"）是 CoreOS 开发的安全优先容器运行时——强调安全性（默认启用 SELinux、seccomp）和 Pod 原生支持，虽然已被废弃（2019 年归档），但其设计理念影响了后来的 OCI 标准和 containerd。',
    handsOn: [
      {
  title: '理解 rkt 的设计理念和历史意义',
  cmd: '# 见下方说明',
  explain: '**rkt 的核心设计理念**: 安全性优先：默认启用 SELinux、seccomp、隔离的进程树\nPod 原生：直接支持 Pod 概念（多个容器共享网络和存储），早于 Kubernetes Pod 概念\n无中心守护进程：rkt 是 CLI 工具，不需要常驻的 daemon 进程（与 Docker dockerd 对比）\n可组合性：可以与 systemd 集成（systemd 管理 rkt 容器的生命周期）\n镜像发现：支持多种镜像格式（ACI、Docker 镜像）和自动发现机制\n\n**rkt vs Docker 的关键差异**: 架构：rkt 无 daemon（CLI 直接调用内核），Docker 需要 dockerd 常驻\n权限模型：rkt 的 rkt fetch 不需要 root（通过 rkt group），Docker 需要 root 或 docker group\n镜像格式：rkt 原生支持 ACI（App Container Image），也兼容 Docker 镜像\nPod 支持：rkt run 直接支持多容器 Pod，Docker 需要 docker-compose 或 K8s\n安全默认：rkt 默认启用 seccomp 和 SELinux，Docker 需要手动配置\n\n**rkt 的历史地位和遗产**: 2014: CoreOS 发布 rkt，作为 Docker 的安全替代\n2015: rkt 成为 Kubernetes 的备选运行时（rktnetes）\n2016: OCI 标准发布，吸收了 rkt 和 Docker 的最佳实践\n2018: CoreOS 被 Red Hat 收购，rkt 维护减缓\n2019: rkt 项目归档（archived），推荐使用 containerd 或 CRI-O\n遗产：rkt 的安全理念（默认 seccomp、无 daemon）影响了 containerd 和 CRI-O 的设计'
},
      {
        title: 'rkt 的基本操作（历史回顾）',
        cmd: 'echo "=== rkt 基本命令（历史回顾）===" && echo "" && echo "# 拉取镜像" && echo "rkt fetch docker://nginx:alpine" && echo "# 输出: sha512:abc123..." && echo "" && echo "# 运行容器" && echo "rkt run --insecure-options=image docker://nginx:alpine --port=http:80" && echo "# 输出: [12345.678] nginx: 172.16.28.3 - - [27/May/2026:10:00:00] GET / 200" && echo "" && echo "# 查看运行中的 Pod" && echo "rkt list" && echo "# UUID     APP    STATE    NETWORKS" && echo "# abc123   nginx  running  default:ip=172.16.28.3" && echo "" && echo "# 进入容器" && echo "rkt enter abc123" && echo "" && echo "# 停止和删除" && echo "rkt stop abc123 && rkt rm abc123"',
        output: '=== rkt 基本命令（历史回顾）===\n\n# 拉取镜像\nrkt fetch docker://nginx:alpine\n# 输出: sha512:abc123...\n\n# 运行容器\nrkt run --insecure-options=image docker://nginx:alpine --port=http:80\n# 输出: [12345.678] nginx: 172.16.28.3 - - [27/May/2026:10:00:00] GET / 200\n\n# 查看运行中的 Pod\nrkt list\n# UUID     APP    STATE    NETWORKS\n# abc123   nginx  running  default:ip=172.16.28.3\n\n# 进入容器\nrkt enter abc123\n\n# 停止和删除\nrkt stop abc123 && rkt rm abc123',
        explain: 'rkt 的命令设计与 Docker 类似（fetch/run/list/enter/stop/rm），但关键差异是 rkt 是 CLI 工具（无 daemon），直接调用内核 API 创建容器。rkt 原生支持 Docker 镜像（docker://前缀），也支持 ACI 格式。'
      },
      {
        title: '从 rkt 迁移到 containerd/CRI-O 的实践',
        cmd: 'cat > migration-guide.md << MGEOF\n# rkt 到 containerd/CRI-O 迁移指南\n\n## 1. 镜像迁移\n- rkt 使用 ACI 格式，containerd/CRI-O 使用 OCI 格式\n- 大多数 Docker 镜像已经是 OCI 兼容的\n- 自定义 ACI 镜像需要转换为 OCI（使用 acbuild 或 skopeo）\n\n## 2. 命令映射\n- rkt fetch -> crictl pull\n- rkt run -> kubectl apply (推荐) 或 crictl\n- rkt list -> crictl pods\n- rkt enter -> crictl exec\n\n## 3. 网络配置\n- rkt 使用 CNI，containerd/CRI-O 也使用 CNI\n- 网络配置可复用，只需调整路径\n\n## 4. 存储迁移\n- rkt 的 /var/lib/rkt 数据不兼容\n- 需要重新拉取镜像和重建容器\n\n## 5. systemd 集成\n- rkt 的 systemd unit 文件需要改写\n- 使用 kubelet 管理容器生命周期（推荐）\nMGEOF\necho "Migration guide created" && echo "" && echo "关键迁移步骤：" && echo "1. 将 ACI 镜像转换为 OCI 格式" && echo "2. 将 rkt 命令替换为 kubectl 或 crictl" && echo "3. 复用 CNI 网络配置" && echo "4. 重新配置 systemd unit 或使用 kubelet"',
        output: 'Migration guide created\n\n关键迁移步骤：\n1. 将 ACI 镜像转换为 OCI 格式\n2. 将 rkt 命令替换为 kubectl 或 crictl\n3. 复用 CNI 网络配置\n4. 重新配置 systemd unit 或使用 kubelet',
        explain: 'rkt 迁移到 containerd/CRI-O 的关键是镜像格式转换（ACI -> OCI）和命令替换（rkt -> kubectl/crictl）。网络配置（CNI）可复用，存储数据不兼容需要重建。迁移后获得更好的 Kubernetes 集成和社区支持。'
      }
    ],
    diagnosis: [
      {
        symptom: 'rkt 容器无法拉取 Docker 镜像，提示 "image not found" 或 "manifest verification failed"',
        cause: 'rkt 的 Docker 镜像兼容性有限（某些 Docker 镜像的 layer 格式不被支持），或镜像签名验证失败',
        fix: '使用 --insecure-options=image 跳过签名验证（仅测试），检查 Docker 镜像的 layer 格式（rkt 只支持 v2 schema 1 和 2），对于不兼容的镜像，使用 skopeo 转换为 OCI 格式后再拉取'
      },
      {
        symptom: 'rkt 项目已归档，生产环境面临安全风险（无安全补丁）',
        cause: 'rkt 项目于 2019 年归档，不再有安全更新和 bug 修复',
        fix: '迁移到 containerd 或 CRI-O（活跃的 CNCF 项目），制定迁移计划（镜像转换、命令替换、测试验证），迁移期间使用其他安全措施（如网络隔离、定期安全扫描）降低风险'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '理解 rkt 的"无 daemon"架构优势，对比 Docker 的 daemon 架构',
        hint: '从安全性、资源占用、故障影响范围角度分析',
        answer: 'rkt 无 daemon 架构：CLI 直接调用内核，无常驻进程（节省内存），故障影响范围小（CLI 崩溃不影响运行中的容器），与 systemd 集成（systemd 管理容器生命周期）。Docker daemon 架构：dockerd 常驻（约 50-100MB 内存），daemon 崩溃影响所有容器，需要 docker.sock 通信（安全风险）。优势：rkt 更轻量、更安全、故障隔离更好'
      },
      {
        level: '进阶',
        task: '设计一个从 rkt 迁移到 containerd 的完整方案，包括镜像、网络、存储、监控的迁移',
        hint: '考虑兼容性、数据迁移、停机时间、回滚策略',
        answer: '阶段 1（准备）：盘点所有 ACI 镜像，使用 skopeo 转换为 OCI 格式并推送到新 Registry；阶段 2（基础设施）：安装 containerd，配置 CNI 网络（复用 rkt 的 CNI 配置），配置监控（Prometheus + containerd metrics）；阶段 3（迁移）：逐步将 rkt 容器迁移到 Kubernetes（使用 Deployment 管理），验证功能正常；阶段 4（清理）：停止 rkt 容器，删除 rkt 安装，更新文档和 SOP；回滚策略：保留 rkt 环境 1 个月，发现问题可快速切回'
      }
    ]
  }


};
