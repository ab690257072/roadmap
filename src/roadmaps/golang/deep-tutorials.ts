import type { DeepTutorial } from '../deep-types';

export const GOLANG_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  "4PrKkoZ5fY-oow0O-bVhu": {
    mentalModel: 'Go 像特种作战小队——成员精干、配合默契(goroutine+channel)、装备精良(GMP+GC)。没有花哨战术,只有极致高效。',
    handsOn: [
      { title: 'Go 版本', cmd: 'go version', output: 'go version go1.22.0 darwin/arm64', explain: 'go version 显示编译器版本和目标平台。Go 编译器从 1.5 起自举(用 Go 写 Go)。' },
      { title: '环境变量', cmd: 'go env GOROOT GOPATH GOOS GOARCH GOMODCACHE', output: '/usr/local/go\n/Users/tu/go\ndarwin\narm64\n/Users/tu/go/pkg/mod', explain: 'GOROOT=编译器位置。GOPATH=工作空间。GOOS/GOARCH=交叉编译目标。GOMODCACHE=模块缓存。' },
      { title: 'Hello World', cmd: 'echo "package main; import \"fmt\"; func main() { fmt.Println(\"Hello Go!\") }" > /tmp/h.go && go run /tmp/h.go', output: 'Hello Go!', explain: 'go run 编译+执行。main 包的 main() 是入口。左大括号必须与 func 同行。' },
      { title: '交叉编译', cmd: 'go tool dist list | wc -l', output: '70', explain: 'Go 原生支持 70+ 平台。GOOS=linux GOARCH=amd64 go build 即可交叉编译。' },
    ],
    diagnosis: [
      { symptom: 'go: command not found', cause: 'Go 未安装或 PATH 未配置。', fix: 'brew install go (Mac) 或解压 tar.gz 到 /usr/local/go。验证: which go。' },
      { symptom: 'package ... is not in GOROOT', cause: 'import 不存在的标准库包。', fix: '检查拼写。标准库列表: https://pkg.go.dev/std。' },
      { symptom: 'go.mod file not found', cause: '未初始化模块。', fix: 'go mod init <name>。Go 1.16+ 默认 module 模式。' },
    ],
    exercises: [
      { level: '基础', task: '安装 Go 并运行 hello world。', hint: 'go run main.go', answer: 'go version\necho "package main; import \"fmt\"; func main() { fmt.Println(\"Hello\") }" > main.go\ngo run main.go' },
      { level: '进阶', task: '解释 GOROOT/GOPATH/GOMODCACHE 区别。', hint: 'go env | grep GO', answer: 'GOROOT=编译器位置\nGOPATH=工作空间\nGOMODCACHE=模块缓存目录' },
      { level: '挑战', task: '交叉编译 Linux amd64 可执行文件,file 验证。', hint: 'GOOS=linux GOARCH=amd64', answer: 'GOOS=linux GOARCH=amd64 go build -o app .\nfile app\n# ELF 64-bit LSB executable' },
    ],
  },

  "2rlmLn_yQQV-7DpX1qT98": {
    mentalModel: 'Go 语法像极简家具——去掉所有不必要装饰(class/继承/try-catch),只留核心组件。大团队代码风格天然统一。',
    handsOn: [
      { title: '未使用变量编译错误', cmd: 'echo "package main; func main() { x := 1 }" > /tmp/u.go && go run /tmp/u.go 2>&1 || true', output: 'x declared and not used', explain: 'Go 编译器强制:未使用局部变量是编译错误。未使用的 import 同理。' },
      { title: '分号自动插入', cmd: 'echo "package main; import \"fmt\"; func main() { a := 1; fmt.Println(a) }" > /tmp/s.go && go run /tmp/s.go', output: '1', explain: 'Go 在行尾自动插入分号。+2 在新行首会被当作独立语句。修复: a := 1 +\n2。' },
      { title: '大小写控制可见性', cmd: 'echo "package main; import \"fmt\"; var A = \"pub\"; var b = \"pri\"; func main() { fmt.Println(A, b) }" > /tmp/v.go && go run /tmp/v.go', output: 'pub pri', explain: '大写=exported,小写=private。结构体字段同理,大写才能 json 序列化。' },
    ],
    diagnosis: [
      { symptom: 'expected statement, found +', cause: '分号自动插入导致换行处的运算符被当作新语句。', fix: '运算符放上一行尾: a := 1 +\n2。' },
      { symptom: 'imported and not used: "fmt"', cause: 'import 了未使用的包,编译器拒绝编译。', fix: '删除或 _ "pkg"。用 goimports 自动管理。' },
      { symptom: 'Println 输出不显示', cause: 'stdout 有缓冲,panic 时未刷新。', fix: '用 log.Println(写 stderr,无缓冲)。' },
    ],
    exercises: [
      { level: '基础', task: '故意创建未使用变量观察编译错误。', hint: '声明但不读取', answer: 'func main() { x := 1 } // 编译错误' },
      { level: '进阶', task: '解释 func main()\n{ 为何语法错误。', hint: '分号自动插入', answer: 'func main()\n{ 扫描为 func main(); {。左大括号必须同行。' },
      { level: '挑战', task: 'go tool compile -S 查看汇编。', hint: 'go tool compile -S', answer: 'echo "package main; func main() { x := 42; _ = x }" > /tmp/a.go\ngo tool compile -S /tmp/a.go 2>&1 | head -20' },
    ],
  },

  "J5mU0v491qrm-mr1W3Msd": {
    mentalModel: 'Goroutine 像蚂蚁搬家——每只超轻量(初始 2KB 栈),成千上万只同时工作,不需大象(OS 线程)般内存。由 GMP 调度器在少量线程上多路复用。',
    handsOn: [
      { title: '启动 goroutine', cmd: 'echo "package main; import(\"fmt\";\"time\"); func main(){go fmt.Println(\"gor\");fmt.Println(\"main\");time.Sleep(10*time.Millisecond)}" > /tmp/g.go && go run /tmp/g.go', output: 'main\ngor', explain: 'go 关键字启动。去除 sleep 则 goroutine 可能无机会执行—main 退出程序终止。' },
      { title: '查看 goroutine 数', cmd: 'echo "package main; import(\"fmt\";\"runtime\";\"time\"); func main(){fmt.Println(\"init:\",runtime.NumGoroutine());for i:=0;i<10;i++{go func(){time.Sleep(time.Second)}()};fmt.Println(\"after:\",runtime.NumGoroutine())}" > /tmp/gc.go && go run /tmp/gc.go', output: 'init: 1\nafter: 11', explain: 'NumGoroutine() 返回 goroutine 数。创建 10 个后变 11 个。可能只跑在 1-2 个 OS 线程上。' },
      { title: '栈大小对比', cmd: 'echo "package main; import(\"fmt\";\"runtime\"); func main(){fmt.Println(\"GOMAXPROCS:\",runtime.GOMAXPROCS(0));fmt.Println(\"goroutine 初始栈: 2KB -> 1GB\");fmt.Println(\"OS 线程栈: 8MB 固定\")}" > /tmp/stk.go && go run /tmp/stk.go', output: 'GOMAXPROCS: 8\ngoroutine 初始栈: 2KB -> 1GB\nOS 线程栈: 8MB 固定', explain: 'goroutine 初始 2KB 可动态增长到 1GB。线程栈 8MB 固定。这就是 Go 可运行百万 goroutine 的原因。' },
    ],
    diagnosis: [
      { symptom: 'goroutine 没执行:程序退出', cause: 'main goroutine 退出时程序立即终止。', fix: '用 sync.WaitGroup 或 channel 等待。永远不要用 time.Sleep 同步。' },
      { symptom: 'all goroutines asleep - deadlock!', cause: '所有 goroutine 等待,无 goroutine 可继续。', fix: '检查 channel 配对、mutex unlock、WaitGroup Add/Done。' },
      { symptom: 'goroutine 泄漏', cause: 'goroutine 等待永不发送的 channel 或死循环。', fix: '用 context 传播取消。select+timeout。NumGoroutine() 监控。' },
    ],
    exercises: [
      { level: '基础', task: '创建 5 个 goroutine,WaitGroup 等待。', hint: 'wg.Add(1) 前于 go func()', answer: 'var wg sync.WaitGroup\nfor i:=0;i<5;i++{wg.Add(1);go func(id int){defer wg.Done();fmt.Println(id)}(i)}\nwg.Wait()' },
      { level: '进阶', task: 'NumGoroutine() 验证创建前后数量变化。', hint: '关键点打印', answer: 'fmt.Println(runtime.NumGoroutine())\n// create...\nfmt.Println(runtime.NumGoroutine())\nwg.Wait()\nfmt.Println(runtime.NumGoroutine())' },
      { level: '挑战', task: 'GOMAXPROCS=1 观察单线程调度。', hint: 'GOMAXPROCS=1 go run', answer: 'GOMAXPROCS=1 go run main.go\n// 单 OS 线程上 GMP 调度多 goroutine\n// CPU 密集型本质串行' },
    ],
  },

  "WwLLyHL5psm0GOI9bmOne": {
    mentalModel: 'Channel 像传送带——上游放零件(ch <-),下游取零件(<-ch)。无缓冲必须两端同时,有缓冲中间有暂存区。',
    handsOn: [
      { title: '无缓冲:同步', cmd: 'echo "package main; import(\"fmt\";\"time\"); func main(){ch:=make(chan string);go func(){time.Sleep(100*time.Millisecond);ch<-\"ok\"}();fmt.Println(\"wait...\");fmt.Println(<-ch)}" > /tmp/ch1.go && go run /tmp/ch1.go', output: 'wait...\nok', explain: '无缓冲 channel 同步阻塞。收发必须同时发生,天然同步点。' },
      { title: '有缓冲:异步', cmd: 'echo "package main; import\"fmt\"; func main(){ch:=make(chan int,3);ch<-1;ch<-2;ch<-3;fmt.Println(\"full\");fmt.Println(<-ch,<-ch,<-ch)}" > /tmp/ch2.go && go run /tmp/ch2.go', output: 'full\n1 2 3', explain: '容量 3 的缓冲。前 3 个发送不阻塞,第 4 个阻塞。适合生产者-消费者。' },
      { title: '关闭+range', cmd: 'echo "package main; import\"fmt\"; func main(){ch:=make(chan int,5);go func(){for i:=0;i<5;i++{ch<-i};close(ch)}();for v:=range ch{fmt.Print(v,\" \")}}" > /tmp/ch3.go && go run /tmp/ch3.go', output: '0 1 2 3 4', explain: 'close(ch) 通知无新数据。range 自动读到关闭。关闭后发送 panic,接收零值+false。' },
      { title: 'nil channel 阻塞', cmd: 'echo "package main; import\"fmt\"; func main(){var ch chan int;select{case ch<-1:default:fmt.Println(\"nil sends block\")}}" > /tmp/ch4.go && go run /tmp/ch4.go', output: 'nil sends block', explain: 'nil channel 收发永远阻塞。select 中设 nil 可禁用 case。' },
    ],
    diagnosis: [
      { symptom: 'deadlock 在 channel', cause: '主 goroutine 对无缓冲 channel 发送但无接收(或反之)。', fix: '收发必须在不同 goroutine。或用缓冲 channel。' },
      { symptom: 'send on closed channel panic', cause: '在已关闭 channel 上继续发送。', fix: '发送者关闭 channel。确保所有发送完成后关闭。' },
      { symptom: '关闭后接收零值误用', cause: 'v:=<-ch 收到零值未用 ok 检测。', fix: '始终 val,ok:=<-ch。range 自动处理。' },
    ],
    exercises: [
      { level: '基础', task: '无缓冲 channel:goroutine 发送,main 接收。', hint: 'go func(){ch<-msg}()', answer: 'ch:=make(chan string);go func(){ch<-\"hi\"}();fmt.Println(<-ch)' },
      { level: '进阶', task: '生产者-消费者:生产 1-10,消费平方打印。', hint: '缓冲 channel + close', answer: 'ch:=make(chan int,5);go func(){for i:=1;i<=10;i++{ch<-i};close(ch)}();for v:=range ch{fmt.Println(v*v)}' },
      { level: '挑战', task: 'select+time.After 实现 200ms 超时。', hint: 'select + time.After', answer: 'select{case msg:=<-ch:fmt.Println(msg);case <-time.After(200*time.Millisecond):fmt.Println("timeout!")}' },
    ],
  },


  "PHHviBSqhYDSNuHBFbw3l": {
    mentalModel: 'Go 错误处理像快递签收——每包裹当面检查(value, err := fn()),确认完好才签收,不靠 try-catch 事后追责。',
    handsOn: [
      { title: '基本错误检查', cmd: 'echo "package main; import(\"fmt\";\"os\"); func main(){_,err:=os.Open(\"/nope\");if err!=nil{fmt.Println(\"error:\",err)}}" > /tmp/eh1.go && go run /tmp/eh1.go', output: 'error: open /nope: no such file or directory', explain: 'Go 错误是值(error interface),不是异常。先检查 err,再用返回值。' },
      { title: '自定义错误+errors.As', cmd: 'echo "package main; import(\"errors\";\"fmt\"); type MyErr struct{Code int}; func(e*MyErr)Error()string{return fmt.Sprintf(\"code=%d\",e.Code)}; func do()error{return &MyErr{404}}; func main(){var me*MyErr;if errors.As(do(),&me){fmt.Println(me.Code)}}" > /tmp/eh2.go && go run /tmp/eh2.go', output: '404', explain: 'Error() string 的实现就是 error。errors.As 比类型断言更安全,沿错误链查找。' },
      { title: '错误包装 %w', cmd: 'echo "package main; import(\"errors\";\"fmt\";\"os\"); func open()error{_,err:=os.Open(\"x\");return fmt.Errorf(\"open: %w\",err)}; func main(){err:=open();var p*os.PathError;fmt.Println(\"PathError?\",errors.As(err,&p))}" > /tmp/eh3.go && go run /tmp/eh3.go', output: 'PathError? true', explain: '%w 包装错误使 errors.Is/As 可沿链回溯。Is 比较值,As 比较类型。' },
    ],
    diagnosis: [
      { symptom: 'err!=nil 后再用返回值 panic', cause: '函数返非 nil error + 部分结果。', fix: 'err!=nil 时不信任其他返回值(除非文档说明)。' },
      { symptom: 'errors.Is 返回 false 但消息有关键词', cause: 'Is 比较值本身非消息。%v 打断链。', fix: '用 %w 包装。避免 strings.Contains(err.Error(),...)。' },
      { symptom: '库代码中用 log.Fatal(err)', cause: '库代码不应决定退出。log.Fatal=os.Exit。', fix: '库函数 return err。只有 main 包可终止程序。' },
    ],
    exercises: [
      { level: '基础', task: 'os.ReadFile 读不存在文件,检查错误。', hint: 'os.ReadFile + err check', answer: 'data,err:=os.ReadFile("/tmp/x");if err!=nil{fmt.Println(err);return};fmt.Println(string(data))' },
      { level: '进阶', task: '创建 sentinel error ErrTimeout,包装后 errors.Is 验证。', hint: 'errors.Is', answer: 'var ErrTimeout=errors.New("timeout")\nfunc work()error{return fmt.Errorf("work: %w",ErrTimeout)}\nfmt.Println(errors.Is(work(),ErrTimeout))//true' },
      { level: '挑战', task: '自定义错误类型含错误码,用 errors.As 提取。', hint: 'errors.As', answer: 'type CodeErr struct{Code int;Msg string}\nfunc(e*CodeErr)Error()string{return fmt.Sprintf("[%d]%s",e.Code,e.Msg)}\nvar ce*CodeErr\nif errors.As(err,&ce){fmt.Println(ce.Code)}' },
    ],
  },

  "_3_tFOpQisx6DSP4Yc2E2": {
    mentalModel: 'Go 接口像万能充电插头——不管什么品牌(type),插头形状(方法签名)匹配就能充电。无需 implements 声明。隐式接口:接受接口,返回结构体。',
    handsOn: [
      { title: '隐式接口', cmd: 'echo "package main; import(\"fmt\";\"strings\"); type Speaker interface{Speak()string}; type Dog struct{Name string}; func(d Dog)Speak()string{return\"Woof \"+d.Name}; type Cat struct{Name string}; func(c Cat)Speak()string{return\"Meow \"+c.Name}; func greet(s Speaker){fmt.Println(strings.ToUpper(s.Speak()))}; func main(){greet(Dog{\"Buddy\"});greet(Cat{\"Kitty\"})}" > /tmp/if1.go && go run /tmp/if1.go', output: 'WOOF BUDDY\nMEOW KITTY', explain: 'Dog/Cat 无需 implements。有 Speak() 方法即满足接口。鸭子类型。' },
      { title: 'any = interface{}', cmd: 'echo "package main; import\"fmt\"; func p(v any){fmt.Printf(\"%%T: %%v\\n\",v,v)}; func main(){p(42);p(\"hi\");p([]int{1,2})}" > /tmp/if2.go && go run /tmp/if2.go', output: 'int: 42\nstring: hi\n[]int: [1 2]', explain: 'Go 1.18+ any 是 interface{} 别名。内部 (type,value) 对,nil 指针赋值后接口!=nil。' },
      { title: 'nil 接口陷阱', cmd: 'echo "package main; import\"fmt\"; type MyErr struct{}; func(e*MyErr)Error()string{return\"err\"}; func retErr()error{var e*MyErr=nil;return e}; func main(){err:=retErr();fmt.Println(err);fmt.Println(\"err==nil?\",err==nil)}" > /tmp/if3.go && go run /tmp/if3.go', output: '<nil>\nerr==nil? false', explain: 'Go 最常见坑:具体类型 nil 指针赋给接口,接口!=nil(type 非 nil)。修复:直接 return nil。' },
    ],
    diagnosis: [
      { symptom: '接口!=nil 但打印 nil', cause: '具体类型 nil 指针赋给接口,type 字段非 nil。', fix: 'return nil 而非 return (nil *T)。' },
      { symptom: 'type X does not implement Y', cause: '方法签名不匹配。常见值/指针接收者不一致。', fix: '指针接收者(*T)方法只有 *T 满足接口。值接收者 T 和 *T 都满足。' },
      { symptom: 'wrong type for method M', cause: '方法签名细微不同:参数或返回值差异。', fix: '逐字符对比接口和类型的方法签名。' },
    ],
    exercises: [
      { level: '基础', task: '定义 Writer 接口和实现。', hint: 'type Writer interface', answer: 'type Writer interface{Write([]byte)(int,error)}\ntype FW struct{}\nfunc(fw FW)Write(d []byte)(int,error){return len(d),nil}' },
      { level: '进阶', task: '解释 nil 指针赋给接口后接口!=nil。', hint: 'nil pointer -> interface', answer: 'var p *int=nil\nvar i interface{}=p\nfmt.Println(i==nil)//false!' },
      { level: '挑战', task: 'Shape 接口多态:Circle/Rect 实现 Area()。', hint: 'interface + slice', answer: 'type Shape interface{Area()float64}\ntype Circle struct{R float64}\nfunc(c Circle)Area()float64{return 3.14*c.R*c.R}\ntype Rect struct{W,H float64}\nfunc(r Rect)Area()float64{return r.W*r.H}' },
    ],
  },

  "BZKSsTgm28WV4nA74NYHO": {
    mentalModel: 'struct 像整理箱——相关字段装一起,带标签(tag)和工具(method)。无继承,通过 embedding 借用功能。',
    handsOn: [
      { title: '定义和初始化', cmd: 'echo "package main; import\"fmt\"; type User struct{Name string;Age int;Email string}; func main(){u1:=User{\"Alice\",30,\"a@e.com\"};u2:=User{Name:\"Bob\",Age:25};var u3 User;u3.Name=\"Charlie\";fmt.Printf(\"%%+v\\n%%+v\\n%%+v\\n\",u1,u2,u3)}" > /tmp/st1.go && go run /tmp/st1.go', output: '{Name:Alice Age:30 Email:a@e.com}\n{Name:Bob Age:25 Email:}\n{Name:Charlie Age:0 Email:}', explain: '三方式:按位置、按字段名(推荐)、零值+赋值。%+v 显示字段名。未赋值自动零值。' },
      { title: 'JSON tag', cmd: 'echo "package main; import(\"encoding/json\";\"fmt\"); type User struct{Name string \\`json:\"name\"\\`;Age int \\`json:\"age,omitempty\"\\`;Pass string \\`json:\"-\"\\`}; func main(){u:=User{Name:\"Alice\",Pass:\"secret\"};d,_:=json.Marshal(u);fmt.Println(string(d))}" > /tmp/st2.go && go run /tmp/st2.go', output: '{"name":"Alice"}', explain: 'json:"name" 指定字段名。omitempty 零值省略。json:"-" 完全忽略(密码等)。' },
      { title: '空结构体 struct{}', cmd: 'echo "package main; import(\"fmt\";\"unsafe\"); func main(){var a struct{};var b [100]struct{};fmt.Println(unsafe.Sizeof(a),unsafe.Sizeof(b))}" > /tmp/st3.go && go run /tmp/st3.go', output: '0 0', explain: 'struct{} 零宽度,不占内存。map[string]struct{} 做 set。chan struct{} 发信号。' },
    ],
    diagnosis: [
      { symptom: 'json.Marshal 字段消失', cause: '字段小写(unexported),json 包无法访问。', fix: '大写开头。或实现 MarshalJSON()。' },
      { symptom: 'struct literal uses unkeyed fields', cause: '位置初始化,warning。', fix: '始终用字段名:User{Name:"Alice"}。' },
      { symptom: '结构体内存比预期大', cause: '字段内存对齐产生 padding。', fix: 'unsafe.Sizeof/Offsetof 分析。大字段放前面。' },
    ],
    exercises: [
      { level: '基础', task: '定义 Book 结构体,切片存储打印。', hint: 'struct + slice', answer: 'type Book struct{Title string;Author string;Pages int}\nbooks:=[]Book{{\"Go\",\"X\",300}}\nfor _,b:=range books{fmt.Printf(\"%+v\\n\",b)}' },
      { level: '进阶', task: '结构体加 json+xml tag,分别序列化。', hint: 'json + xml tags', answer: 'type Item struct{Name string \\`json:\"name\" xml:\"name\"\\`;Price float64 \\`json:\"price\" xml:\"price\"\\`}' },
      { level: '挑战', task: 'unsafe.Sizeof/Offsetof 分析 padding。', hint: 'unsafe.Sizeof', answer: 'type Bad struct{a bool;b int64;c bool}//24\ntype Good struct{b int64;a bool;c bool}//16' },
    ],
  },

  "0FJxELyk7_IiVHvZFFVm2": {
    mentalModel: '指针像门牌号——不搬房子(值),记门牌号(&取地址),随时找到房子修改(*解引用)。Go 指针比 C 安全:无指针算术,有 GC。',
    handsOn: [
      { title: '指针基本操作', cmd: 'echo "package main; import\"fmt\"; func main(){x:=42;p:=&x;fmt.Println(x,*p);*p=100;fmt.Println(x)}" > /tmp/ptr1.go && go run /tmp/ptr1.go', output: '42 42\n100', explain: '&x 取地址返 *int。*p 解引用。*p 修改=修改 x。Go 无指针算术。' },
      { title: '值传递 vs 指针传递', cmd: 'echo "package main; import\"fmt\"; type User struct{Name string}; func byVal(u User){u.Name=\"Bob\"}; func byPtr(u*User){u.Name=\"Bob\"}; func main(){u:=User{\"Alice\"};byVal(u);fmt.Println(u.Name);byPtr(&u);fmt.Println(u.Name)}" > /tmp/ptr2.go && go run /tmp/ptr2.go', output: 'Alice\nBob', explain: 'Go 所有参数都是值传递。byVal 收到副本。byPtr 收到指针副本但通过指针改原值。' },
      { title: 'new vs &', cmd: 'echo "package main; import\"fmt\"; type User struct{Name string}; func main(){p1:=new(int);p2:=&User{};fmt.Println(*p1,p2)}" > /tmp/ptr3.go && go run /tmp/ptr3.go', output: '0 &{}', explain: 'new(T) 分配零值返 *T。&T{} 等效但支持字面量。逃逸分析决定栈/堆。' },
    ],
    diagnosis: [
      { symptom: '函数内修改参数无效', cause: '参数值传递,改的是副本。', fix: '传指针:func modify(x *T) 或返回新值。' },
      { symptom: 'nil pointer dereference', cause: '对 nil 指针解引用。', fix: '使用前检查 if p!=nil{...}。nil map 可读不可写。' },
      { symptom: 'cannot take address of map value', cause: 'map 扩容时元素移动,不能取地址。', fix: '用 map[string]*Value。或取改写回:v:=m[k];v.F=x;m[k]=v。' },
    ],
    exercises: [
      { level: '基础', task: 'int 变量用指针修改,打印前后值。', hint: '&x + *p', answer: 'x:=10;p:=&x;*p=20;fmt.Println(x)//20' },
      { level: '进阶', task: '实现 swap(a,b *int) 交换两个 int。', hint: '*a,*b=*b,*a', answer: 'func swap(a,b*int){*a,*b=*b,*a}\nx,y:=1,2;swap(&x,&y)//2,1' },
      { level: '挑战', task: 'unsafe.Pointer 将 float64 位重解释为 uint64。', hint: 'unsafe.Pointer', answer: 'f:=3.14;bits:=*(*uint64)(unsafe.Pointer(&f))' },
    ],
  },

  "EAqL8Up3J63AWCZnqQph0": {
    mentalModel: 'package 像工具箱分类——函数和类型按用途放不同箱子。import 打开箱子,大写标签可外借,小写只能箱内用。',
    handsOn: [
      { title: '创建自定义包', cmd: 'mkdir -p /tmp/mypkg/greet && echo "package greet; func Hello(n string)string{return\"Hello, \"+n}" > /tmp/mypkg/greet/greet.go && echo "package main; import(\"fmt\";\"mypkg/greet\"); func main(){fmt.Println(greet.Hello(\"Alice\"))}" > /tmp/mypkg/main.go && cd /tmp/mypkg && go mod init mypkg 2>/dev/null && go run main.go', output: 'Hello, Alice', explain: '大写 Hello 可导出。小写 hello 则包外不可见。go mod init 初始化模块。' },
      { title: 'init 函数', cmd: 'echo "package main; import\"fmt\"; func init(){fmt.Println(\"init1\")}; func init(){fmt.Println(\"init2\")}; func main(){fmt.Println(\"main\")}" > /tmp/idemo/main.go && cd /tmp/idemo && go mod init id 2>/dev/null && go run main.go', output: 'init1\ninit2\nmain', explain: '多个 init() 按声明顺序执行。init 在 main 前自动执行。import _ "pkg" 仅执行 init。' },
      { title: 'import 别名', cmd: 'echo "package main; import(p\"fmt\";.\"strings\"); func main(){p.Println(ToUpper(\"hello\"))}" > /tmp/ademo/main.go && cd /tmp/ademo && go mod init ad 2>/dev/null && go run main.go', output: 'HELLO', explain: 'p "fmt" 起别名。. "strings" 直接导入命名空间(不推荐)。_ "pkg" 仅执行 init。' },
    ],
    diagnosis: [
      { symptom: 'package not in GOROOT', cause: 'import 路径不在标准库且无 go.mod。', fix: 'go mod init + go get。检查拼写。' },
      { symptom: 'import cycle not allowed', cause: 'A import B, B import A。', fix: '提取公共接口到第三包。或用接口解耦。' },
      { symptom: 'undefined: xxx', cause: '函数或变量小写,其他包无法访问。', fix: '导出符号首字母大写。检查 import 路径。' },
    ],
    exercises: [
      { level: '基础', task: '创建自定义包 calc,导出 Add 函数。', hint: 'package calc', answer: 'mkdir calc && echo "package calc; func Add(a,b int)int{return a+b}" > calc/add.go\ngo mod init demo\n// main: import "demo/calc"; calc.Add(1,2)' },
      { level: '进阶', task: 'import _ "net/http/pprof" 观察 init 注册路由。', hint: '_ import', answer: 'import _ "net/http/pprof"\nhttp.ListenAndServe(":6060",nil)\n// http://localhost:6060/debug/pprof/' },
      { level: '挑战', task: '检测并解决循环依赖:用接口解耦。', hint: '提取公共接口', answer: '// 包 C: type Service interface{Do()}\n// 包 A: 实现 Service\n// 包 B: 引用 C.Service,依赖注入获取 A 实例\n// A 和 B 都只依赖 C,无循环' },
    ],
  },

  "ndd2ELlvbaj58A-55GrqI": {
    mentalModel: 'Go Modules 像快递管理系统——每个包裹(module)有唯一编号(module path)和版本号(semver),go.sum 是签收单,go.mod 是收货清单。',
    handsOn: [
      { title: '初始化模块', cmd: 'cd /tmp && mkdir md && cd md && go mod init example.com/demo && cat go.mod', output: 'module example.com/demo\ngo 1.22', explain: 'go.mod 是模块身份证。module 行声明路径,go 行声明 Go 版本。' },
      { title: '添加依赖', cmd: 'cd /tmp/md && go get github.com/google/uuid@v1.6.0 2>/dev/null && cat go.mod', output: 'require github.com/google/uuid v1.6.0', explain: 'go get 下载指定版本并更新 go.mod。go.sum 记录哈希用于校验。' },
      { title: '整理和验证依赖', cmd: 'cd /tmp/md && go mod tidy && go mod verify', output: '(无输出=成功)', explain: 'tidy:添加需要的移除不需要的。verify:验证模块未被篡改。' },
      { title: 'MVS 算法', cmd: 'echo "A需要X@v1.2, B需要X@v1.5, 选v1.5\\n最小满足所有需求的版本"', output: 'A需要X@v1.2, B需要X@v1.5, 选v1.5', explain: 'Go 使用 MVS(最小版本选择)。go mod graph 查看依赖树。go mod why 解释依赖原因。' },
    ],
    diagnosis: [
      { symptom: 'module found but not contain package', cause: '模块路径和源码 package 路径不匹配。', fix: 'import 时含子目录:import "X/Y/subdir"。或修改 go.mod 的 module 行。' },
      { symptom: 'go.mod go version higher than installed', cause: 'go.mod 声明版本高于安装版本。', fix: '升级 Go。或降级 go.mod 中 go 行版本号。' },
      { symptom: 'GO111MODULE=off 行为异常', cause: 'off 模式 go get 下载到 GOPATH/src。', fix: 'Go 1.16+ 默认 on。go env -w GO111MODULE=on。永不用 off。' },
    ],
    exercises: [
      { level: '基础', task: '初始化模块,添加依赖,go mod tidy。', hint: 'go mod init + get + tidy', answer: 'go mod init myapp && go get github.com/google/uuid && go mod tidy && cat go.mod' },
      { level: '进阶', task: 'go mod graph + go mod why 分析依赖。', hint: 'go mod graph | head', answer: 'go mod graph | head -20\ngo mod why golang.org/x/text' },
      { level: '挑战', task: 'replace 替换远程依赖为本地路径调试。', hint: 'go mod edit -replace', answer: 'go mod edit -replace github.com/X/Y=../local-Y\ngo mod tidy\ngo test ./...\ngo mod edit -dropreplace github.com/X/Y' },
    ],
  },

  "NQFVV96try781NHCclGSi": {
    mentalModel: 'go mod 命令像仓库管理员——进货(go get)、盘点(go mod tidy)、验货(go mod verify)、打包(go mod vendor)。每环节都有对应命令。',
    handsOn: [
      { title: 'go mod edit', cmd: 'cd /tmp && rm -rf et && mkdir et && cd et && go mod init et && go mod edit -require=github.com/gin-gonic/gin@v1.10.0 && cat go.mod', output: 'module et\ngo 1.22\nrequire github.com/gin-gonic/gin v1.10.0', explain: 'go mod edit 程序化修改 go.mod。-require 添加,-droprequire 删除。' },
      { title: 'go mod vendor', cmd: 'cd /tmp && rm -rf vt && mkdir vt && cd vt && go mod init vt && go get github.com/google/uuid@v1.4.0 2>/dev/null && go mod vendor && ls vendor/ | head -2', output: 'github.com\nmodules.txt', explain: 'go mod vendor 复制依赖到 vendor/。go build -mod=vendor 可离线编译。适合 CI。' },
      { title: 'go mod download', cmd: 'cd /tmp/vt && go mod download -x 2>&1 | head -2', output: '# get https://proxy.golang.org/...', explain: '预下载所有依赖到缓存(-x 显示过程)。Docker 构建利用缓存层。GOPROXY 可换 goproxy.cn。' },
    ],
    diagnosis: [
      { symptom: 'cannot find module providing package', cause: '包的 import 路径不存在。', fix: '检查 pkg.go.dev。私有仓库设 GOPRIVATE。' },
      { symptom: 'checksum mismatch', cause: 'go.sum 哈希与下载不匹配。可能是重新打 tag。', fix: 'go clean -modcache && go mod download。生产不要重新打 tag。' },
      { symptom: 'module declares path X but required as Y', cause: '模块 go.mod 声明 module X,被 import 为 Y。', fix: '用 replace:replace Y => X@version。或 fork 后修改 module 行。' },
    ],
    exercises: [
      { level: '基础', task: '初始化模块,go mod tidy + verify。', hint: 'go mod init + tidy + verify', answer: 'go mod init demo && go get github.com/gorilla/mux && go mod tidy && go mod verify' },
      { level: '进阶', task: 'go mod vendor 打包,离线编译。', hint: 'go mod vendor && go build -mod=vendor', answer: 'go mod vendor\ngo build -mod=vendor' },
      { level: '挑战', task: 'replace 替换依赖为本地版本,验证后还原。', hint: 'go mod edit -replace + -dropreplace', answer: 'go mod edit -replace github.com/X/Y=../Y\ngo mod tidy\ngo test ./...\ngo mod edit -dropreplace github.com/X/Y\ngo mod tidy' },
    ],
  },

  "abG_9xxdxSWYcXKNLdWPC": {
    mentalModel: '变量声明像入住登记——var 是正式登记,:= 是快捷入住(类型自动识别)。一旦入住类型固定,不能换。空房间被管理员(编译器)查出。',
    handsOn: [
      { title: 'var vs :=' , cmd: 'echo "package main; import\"fmt\"; var global=\"g\"; func main(){var a int=10;var b=20;c:=30;var d int;fmt.Println(a,b,c,d)}" > /tmp/v1.go && go run /tmp/v1.go', output: '10 20 30 0', explain: 'var a int=10:完整声明。var b=20:类型推断。c:=30:短声明(仅函数内)。var d int:零值。' },
      { title: ':= 重声明特性', cmd: 'echo "package main; import(\"fmt\";\"os\"); func main(){f,err:=os.Open(\"/tmp/x\");fmt.Println(f,err);data,err:=os.ReadFile(\"/tmp/x\");fmt.Println(data,err)}" > /tmp/v2.go && go run /tmp/v2.go 2>&1', output: '<nil> open /tmp/x: ...\n[] open /tmp/x: ...', explain: ':= 允许重声明已有变量(至少一个 new var)。err 第二次是重赋值。' },
      { title: '零值保证', cmd: 'echo "package main; import\"fmt\"; func main(){var i int;var s string;var b bool;var p*int;var m map[string]int;var sl []int;fmt.Printf(\"%%d %%q %%t %%v %%v %%v %%d\",i,s,b,p,m,sl,len(sl))}" > /tmp/v3.go && go run /tmp/v3.go', output: '0 "" false <nil> map[] [] 0', explain: '所有变量自动零值。nil map 可读不可写。nil slice len()=0 可调用。' },
    ],
    diagnosis: [
      { symptom: 'no new variables on left side of :=', cause: ':= 左侧所有变量都已存在。', fix: '改用 = 赋值:err=fn()。或 if/for 初始化中用 := 建新作用域。' },
      { symptom: 'assignment to nil map', cause: 'var m map[K]V 后 m[key]=value。nil map 可读不可写。', fix: 'm=make(map[K]V) 或 m:=map[K]V{}。' },
      { symptom: '变量遮蔽(shadowing)', cause: 'if/for 块内 := 创建块级变量遮蔽外部同名变量。', fix: 'go vet -shadow 检测。避免短块内声明同名变量。' },
    ],
    exercises: [
      { level: '基础', task: 'var 和 := 分别声明 int/string/bool。', hint: 'var a int=1; b:="hello"', answer: 'var a int=1;var b="hello";c:=true\nfmt.Println(a,b,c)' },
      { level: '进阶', task: '测试 := 重声明:先声明 err,再 := 同时声明新变量和重声明 err。', hint: '至少一个 new var', answer: 'f,err:=os.Open("go.mod");data,err:=io.ReadAll(f);fmt.Println(string(data),err)' },
      { level: '挑战', task: 'go vet -shadow 检测遮蔽:写触发代码并修复。', hint: 'var x int=0;if true{x:=1}', answer: 'var x int=0\nif true{x:=1;fmt.Println(x)}//遮蔽\nfmt.Println(x)//0 not 1\n//修复:内层用 x=1' },
    ],
  },

  // ═══════════════ Node 13: Functions ═══════════════
  "ILjSTHLQENyiYXJVPLktS": {
    mentalModel: 'Go 函数像多功能工具箱——一个工具多种输入(多参数),多种输出(多返回值),还能自带备用工具(闭包)。函数是一等公民:可赋值给变量、作为参数传递、作为返回值返回。',
    handsOn: [
      { title: '多返回值和命名返回值', cmd: 'echo "package main; import (\"fmt\"; \"errors\"); func div(a, b float64) (float64, error) { if b == 0 { return 0, errors.New(\"div by 0\") }; return a / b, nil }; func nr() (r int, err error) { r = 42; return }; func main() { v, _ := div(10, 3); r, _ := nr(); fmt.Println(v, r) }" > /tmp/fn1.go && go run /tmp/fn1.go', output: '3.3333333333333335 42', explain: '多返回值:最后一个通常是 error。命名返回值 + 裸 return:函数体内可直接使用命名返回值,return 无参数时返回它们的当前值。裸 return 推荐仅用于短函数,长函数中容易出错。' },
      { title: '可变参数 variadic ...', cmd: 'echo "package main; import \"fmt\"; func sum(nums ...int) int { total := 0; for _, n := range nums { total += n }; return total }; func main() { fmt.Println(sum(1, 2, 3)); arr := []int{1, 2, 3, 4}; fmt.Println(sum(arr...)) }" > /tmp/fn2.go && go run /tmp/fn2.go', output: '6\n10', explain: 'func sum(nums ...int) 中 nums 在函数内部是 []int 切片。调用时传多个值或 slice... 展开切片。... 必须放在参数列表最后。sum() 无参数调用是合法的,nums 为空切片(len=0)。' },
      { title: '闭包和逃逸分析', cmd: 'echo "package main; import \"fmt\"; func counter() func() int { count := 0; return func() int { count++; return count } }; func main() { c1 := counter(); c2 := counter(); fmt.Println(c1(), c1(), c2(), c1()) }" > /tmp/fn3.go && go run /tmp/fn3.go', output: '1 2 1 3', explain: '闭包捕获外部变量 count。每次 counter() 创建独立的作用域。c1 和 c2 的 count 互相独立。闭包变量逃逸到堆上(通过逃逸分析决定)。go build -gcflags="-m" 可查看逃逸分析结果。' },
    ],
    diagnosis: [
      { symptom: '函数参数未使用但能编译通过', cause: '函数参数可以不使用,但函数内声明的局部变量必须使用。', fix: '用 _ 代替未使用的参数:func fn(_ int, name string)。保留签名但表明该参数故意未使用(实现接口时常见)。' },
      { symptom: 'too few values in return statement', cause: 'return 语句中值的数量与函数签名声明的返回值数量不匹配。', fix: '检查 return 语句的参数数量。命名返回值 + 裸 return 也可满足。确保 return 的值数量与签名一致。' },
      { symptom: '闭包中引用的循环变量取到错误的值', cause: 'Go 1.21 及以前:for 循环中创建闭包引用循环变量,所有闭包共享同一个变量。', fix: 'Go 1.22+ 自动为每次迭代创建新变量。旧版本:for i := range items { i := i; go func() { use(i) }() }。或将循环变量作为参数传入闭包。' },
    ],
    exercises: [
      { level: '基础', task: '实现函数接收两个 int 返回它们的和与积。', hint: 'func calc(a, b int) (int, int)', answer: 'func calc(a, b int) (int, int) {\n    return a + b, a * b\n}\nsum, product := calc(3, 5)' },
      { level: '进阶', task: '实现可变参数函数 max(nums ...int) int,返回切片中的最大值。', hint: '遍历 nums,维护当前最大值', answer: 'func max(nums ...int) int {\n    if len(nums) == 0 { return 0 }\n    m := nums[0]\n    for _, n := range nums[1:] { if n > m { m = n } }\n    return m\n}' },
      { level: '挑战', task: '用闭包实现斐波那契生成器:每次调用返回下一个斐波那契数。', hint: '闭包内维护 a, b 两个变量', answer: 'func fib() func() int {\n    a, b := 0, 1\n    return func() int {\n        a, b = b, a+b\n        return a\n    }\n}\nf := fib()\nfor i := 0; i < 10; i++ { fmt.Println(f()) }' },
    ],
  },

  // ═══════════════ Node 14: Arrays ═══════════════
  "TAor8KoBmoZ5VE5E7-IkM": {
    mentalModel: 'Go 数组像固定座位大巴车——座位数出厂时固定(长度是类型一部分,[3]int 和 [4]int 是不同的类型),不能超载也不能空驶。每个座位的位置确定,可以直接按索引找到。',
    handsOn: [
      { title: '数组是值类型:赋值和传参都会复制', cmd: 'echo "package main; import \"fmt\"; func modify(a [3]int) { a[0] = 999 }; func main() { a := [3]int{1, 2, 3}; modify(a); fmt.Println(a); b := a; b[0] = 888; fmt.Println(\"a:\", a, \"b:\", b) }" > /tmp/arr1.go && go run /tmp/arr1.go', output: '[1 2 3]\na: [1 2 3] b: [888 2 3]', explain: '数组是值类型,赋值和传参会复制整个数组。modify 收到的是副本,修改不影响原值。b := a 也是完整复制。这是数组和切片(slice)的核心区别。' },
      { title: '数组长度是类型的一部分', cmd: 'echo "package main; import \"fmt\"; func main() { var a [3]int; var b [4]int; fmt.Printf(\"a type: %%T, b type: %%T\\n\", a, b) }" > /tmp/arr2.go && go run /tmp/arr2.go', output: 'a type: [3]int, b type: [4]int', explain: '[3]int 和 [4]int 是完全不同的类型,不能互相赋值。数组长度必须在编译时确定。需要动态长度时用切片(slice)。' },
      { title: '... 自动推导数组长度', cmd: 'echo "package main; import \"fmt\"; func main() { a := [...]int{1, 2, 3, 4, 5}; fmt.Printf(\"type: %%T, len: %%d\\n\", a, len(a)) }" > /tmp/arr3.go && go run /tmp/arr3.go', output: 'type: [5]int, len: 5', explain: '[...] 让编译器自动推导数组长度。a 的类型是 [5]int。注意:这是数组字面量,不是切片。len() 和 cap() 作用于数组时都返回数组长度。' },
    ],
    diagnosis: [
      { symptom: 'index out of range [3] with length 3', cause: '数组索引从 0 开始,长度为 3 的数组有效索引是 0,1,2。访问[3]越界。', fix: '遍历用 for i := 0; i < len(arr); i++ 或 for i, v := range arr。range 是安全的,不会越界。' },
      { symptom: 'cannot use [3]int as type []int', cause: '数组和切片是不同的类型,函数需要 []int 但你传了 [3]int。', fix: '用 arr[:] 将数组转换为切片:slice := arr[:]。这会创建一个引用原数组的切片,共享底层数据。' },
      { symptom: '大数组赋值导致性能问题', cause: '数组是值类型,赋值 [1000000]int 会复制 8MB 内存。', fix: '用指针:*[1000000]int。或用切片:make([]int, 1000000)。切片 header 只有 24 bytes,赋值开销极小。' },
    ],
    exercises: [
      { level: '基础', task: '创建长度为 5 的 int 数组,填充 1-5,打印每个元素。', hint: 'arr := [5]int{1, 2, 3, 4, 5}', answer: 'arr := [5]int{1, 2, 3, 4, 5}\nfor i, v := range arr {\n    fmt.Printf("arr[%d] = %d\\n", i, v)\n}' },
      { level: '进阶', task: '验证数组是值类型:将一个数组赋值给另一个,修改新变量,原数组不变。', hint: 'arr2 := arr1; arr2[0] = 999', answer: 'a := [3]int{1, 2, 3}\nb := a\nb[0] = 999\nfmt.Println(a, b) // [1 2 3] [999 2 3]' },
      { level: '挑战', task: '将数组转切片后 append,验证扩容后不再共享底层数组。', hint: 'arr[:] + append 触发扩容', answer: 'arr := [3]int{1, 2, 3}\ns := arr[:]\ns = append(s, 4)\nfmt.Println("arr:", arr, "s:", s)\n// arr: [1 2 3] s: [1 2 3 4] (不同底层数组)' },
    ],
  },

  // ═══════════════ Node 15: Slices ═══════════════
  "6vQfLYLr0n1UN4E4S6PyS": {
    mentalModel: 'Go 切片像窗外风景的视野——窗户框(slice header: ptr+len+cap)定义你能看到的范围(length),但身后还有整片视野(capacity)。移动窗户(切片操作)或扩建窗户(append)时,窗外的墙(底层数组)可能在扩建时被整个换掉(扩容后新数组)。',
    handsOn: [
      { title: 'slice header 内部结构', cmd: 'echo "package main; import (\"fmt\"; \"unsafe\"); func main() { s := make([]int, 3, 5); fmt.Printf(\"len=%%d cap=%%d val=%%v headerSize=%%d bytes\\n\", len(s), cap(s), s, unsafe.Sizeof(s)) }" > /tmp/sl1.go && go run /tmp/sl1.go', output: 'len=3 cap=5 val=[0 0 0] headerSize=24 bytes', explain: 'Slice header 24 bytes 结构:ptr(8 bytes) + len(8 bytes) + cap(8 bytes)。make([]int, 3, 5) 分配底层数组 5 个 int(40 bytes),len=3 可访问前 3 个元素。Slice 本身是值类型(header 复制),但共享底层数组。' },
      { title: 'append 扩容规则', cmd: 'echo "package main; import \"fmt\"; func main() { s := make([]int, 0, 2); for i := 0; i < 6; i++ { s = append(s, i); fmt.Printf(\"i=%%d len=%%d cap=%%d\\n\", i, len(s), cap(s)) } }" > /tmp/sl2.go && go run /tmp/sl2.go', output: 'i=0 len=1 cap=2\ni=1 len=2 cap=2\ni=2 len=3 cap=4\ni=3 len=4 cap=4\ni=4 len=5 cap=8\ni=5 len=6 cap=8', explain: 'Go 扩容策略(近似):cap < 256 时扩容约 2 倍;cap >= 256 时扩容约 1.25 倍。扩容时分配新底层数组并复制数据。必须 s = append(s, x),因扩容后 header 变了(新指针)。' },
      { title: '子切片共享底层数组的陷阱', cmd: 'echo "package main; import \"fmt\"; func main() { orig := []int{1, 2, 3, 4, 5}; sub := orig[1:3]; fmt.Println(\"sub:\", sub, \"cap:\", cap(sub)); sub[0] = 999; fmt.Println(\"orig after:\", orig) }" > /tmp/sl3.go && go run /tmp/sl3.go', output: 'sub: [2 3] cap: 4\norig after: [1 999 3 4 5]', explain: 'orig[1:3] 的子切片 sub 共享底层数组。sub[0]=999 反映到 orig[1]。sub 的 cap=4(从索引1到数组末尾),所以 sub = append(sub, 100) 会修改 orig[3]! 这是常见的数据损坏和内存泄漏陷阱。' },
    ],
    diagnosis: [
      { symptom: 'slice 在函数中 append 后调用方没变化', cause: 'slice header 是值传递,append 前复制了 header。如果触发扩容,调用方的 header 仍然指向旧数组。', fix: '返回新 slice:func add(s []int) []int { return append(s, x) };调用方 s = add(s)。或传指针:func add(s *[]int) { *s = append(*s, x) }。' },
      { symptom: '子切片修改导致原切片数据被意外修改', cause: '子切片和原切片共享同一底层数组,任何修改都会相互影响。', fix: '如果需独立副本,用 copy:dst := make([]T, len(src)); copy(dst, src)。full slice expression s[low:high:max] 可限制子切片的 cap。' },
      { symptom: '大切片取小部分后,底层大数组无法被 GC 回收', cause: '子切片仍引用整个底层大数组,即使你只需要其中几个元素。', fix: '用 copy 创建独立的小切片:small := make([]T, len(sub)); copy(small, sub)。然后可安全地丢弃大切片。' },
    ],
    exercises: [
      { level: '基础', task: '创建切片,用 append 添加 10 个元素,观察每次 len 和 cap 的变化。', hint: 'make([]int, 0, 2) + append', answer: 's := make([]int, 0, 2)\nfor i := 0; i < 10; i++ {\n    s = append(s, i)\n    fmt.Printf("len=%%d cap=%%d\\n", len(s), cap(s))\n}' },
      { level: '进阶', task: '创建切片,取子切片,修改子切片,验证原切片是否也被修改。', hint: 'sub := original[1:4]', answer: 'orig := []int{1, 2, 3, 4, 5}\nsub := orig[1:4]\nsub[0] = 999\nfmt.Println(orig) // [1 999 3 4 5]' },
      { level: '挑战', task: '实现函数:接受一个大切片,返回其中前 10 个元素的独立拷贝(不共享底层数组)。', hint: 'copy(dst, src) 创建独立副本', answer: 'func first10Copy(src []int) []int {\n    result := make([]int, 10)\n    copy(result, src[:10])\n    return result\n}' },
    ],
  },

  // ═══════════════ Node 16: Maps ═══════════════
  "1YFc0_iOBviRFm9CozAs9": {
    mentalModel: 'Go 的 map 像电话簿——按名字(key)快速查号码(value),不能有重名(key 唯一)。活页本(引用类型),传给别人的是同一本(共享底层数据)。Go 的 map 不支持并发写,多 goroutine 同时写会触发 fatal error。',
    handsOn: [
      { title: 'map 创建和 comma ok 惯用法', cmd: 'echo "package main; import \"fmt\"; func main() { m := make(map[string]int); m[\"a\"] = 5; m[\"b\"] = 3; v, ok := m[\"a\"]; fmt.Println(\"a:\", v, ok); v, ok = m[\"c\"]; fmt.Println(\"c:\", v, ok); delete(m, \"b\"); fmt.Println(m) }" > /tmp/map1.go && go run /tmp/map1.go', output: 'a: 5 true\nc: 0 false\nmap[a:5]', explain: 'comma ok 惯用法:v, ok := m[key]。ok 为 true 表示 key 存在;false 表示不存在(v 是零值)。delete 安全:删除不存在的 key 不会报错。map 是引用类型,赋值不复制数据。' },
      { title: '并发写 map 触发 fatal error', cmd: 'echo "package main; import \"sync\"; func main() { m := make(map[int]int); var wg sync.WaitGroup; for i := 0; i < 100; i++ { wg.Add(1); go func(i int) { defer wg.Done(); m[i] = i }(i) }; wg.Wait() }" > /tmp/map2.go && go run /tmp/map2.go 2>&1 | head -1', output: 'fatal error: concurrent map writes', explain: 'Go 内建 map 不是并发安全的。多个 goroutine 并发写时会触发 fatal error(不是 panic,不能用 recover 捕获)。这是 Go 运行时主动检测的,性能代价极低。' },
      { title: 'map 遍历顺序随机化', cmd: 'echo "package main; import \"fmt\"; func main() { m := map[string]int{\"a\": 1, \"b\": 2, \"c\": 3}; for i := 0; i < 3; i++ { fmt.Print(\"run\", i, \": \"); for k := range m { fmt.Print(k, \" \") }; fmt.Println() } }" > /tmp/map3.go && go run /tmp/map3.go', output: 'run0: a b c\nrun1: c a b\nrun2: b c a', explain: 'Go 有意随机化 map 遍历顺序(每次运行不同)。防止开发者依赖遍历顺序。如需有序遍历:先收集 keys 到切片,排序后依次访问。maps.Keys(m) (Go 1.23+) 可获取键切片。' },
    ],
    diagnosis: [
      { symptom: 'assignment to entry in nil map', cause: 'var m map[K]V 声明 nil map 后直接 m[key]=value。nil map 可读但不可写。', fix: '初始化:m = make(map[K]V)。或 m := map[K]V{}。结构体的 map 字段注意零值初始化。' },
      { symptom: 'fatal error: concurrent map read and map write', cause: '一个 goroutine 在写 map,另一个在读。Go 运行时检测到并发读写冲突。', fix: '加锁:var mu sync.RWMutex。写前 mu.Lock(),读前 mu.RLock()。或用 sync.Map(适合读多写少)。或用 channel 统一由单 goroutine 操作。' },
      { symptom: 'map 作为 struct 的字段但不是 comparable,不能作为 map key', cause: 'map 本身不是可比较类型(只能与 nil 比较),所以不能作为另一个 map 的 key。', fix: '元组 key 用结构体:type Key struct { K1, K2 string }。多层 map:map[K1]map[K2]V。' },
    ],
    exercises: [
      { level: '基础', task: '创建 map,添加 3 个元素,用 comma ok 检查存在的 key 和不存在的 key。', hint: 'v, ok := m[key]', answer: 'm := map[string]int{"a": 1, "b": 2}\nv, ok := m["a"]; fmt.Println(v, ok) // 1 true\nv, ok = m["z"]; fmt.Println(v, ok) // 0 false' },
      { level: '进阶', task: '用 map[string]struct{} 实现一个 set,支持 Add、Contains、Remove。', hint: 'struct{} 零内存占用', answer: 'type Set struct { m map[string]struct{} }\nfunc (s *Set) Add(k string) { s.m[k] = struct{}{} }\nfunc (s *Set) Contains(k string) bool { _, ok := s.m[k]; return ok }\nfunc (s *Set) Remove(k string) { delete(s.m, k) }' },
      { level: '挑战', task: '用 sync.Mutex 保护 map,实现并发安全的计数器:10 个 goroutine 各执行 1000 次 increment。', hint: 'type SafeCounter struct { mu sync.Mutex; m map[string]int }', answer: 'type SafeCounter struct { mu sync.Mutex; m map[string]int }\nfunc (c *SafeCounter) Inc(k string) { c.mu.Lock(); defer c.mu.Unlock(); c.m[k]++ }\nfunc (c *SafeCounter) Get(k string) int { c.mu.Lock(); defer c.mu.Unlock(); return c.m[k] }' },
    ],
  },


  // ═══════════════ Node 17: Type Casting ═══════════════
  "INcNoEFJc1mbO4X44axkA": {
    mentalModel: 'Go 的类型转换像货币兑换——同一资产(数值)可用不同货币(类型)表示,但每次兑换都要明确申请(T(v)),不能自动转换。有些兑换有损(float64→int 丢失小数),有些可能溢出(int64→int8)。',
    handsOn: [
      { title: '数值类型转换和溢出', cmd: 'echo "package main; import \"fmt\"; func main() { var i int = 42; var f float64 = float64(i); var u uint = uint(f); fmt.Println(i, f, u); var b byte = 255; fmt.Println(int8(b)) }" > /tmp/cast1.go && go run /tmp/cast1.go', output: '42 42 42\n-1', explain: 'Go 没有隐式类型转换,所有转换必须显式。byte(255) 转为 int8(-1):因为 int8 范围 -128~127,255 溢出(二进制 11111111 就是 -1)。float64→int 截断小数部分,不是四舍五入。' },
      { title: 'string 与 []byte 转换(复制数据)', cmd: 'echo "package main; import \"fmt\"; func main() { s := \"Hello Go!\"; b := []byte(s); s2 := string(b); fmt.Println(s == s2); fmt.Printf(\"string len=%%d bytes len=%%d\\n\", len(s), len(b)) }" > /tmp/cast2.go && go run /tmp/cast2.go', output: 'true\nstring len=9 bytes len=9', explain: 'string 和 []byte 间的转换会复制数据(分配新内存)。对性能敏感的代码应避免频繁转换。bytes 和 strings 包提供了很多无需转换的操作。Go 1.22+ 编译器优化了某些转换。' },
      { title: 'strconv:字符串与数值互转', cmd: 'echo "package main; import (\"fmt\"; \"strconv\"); func main() { i, _ := strconv.Atoi(\"42\"); s := strconv.Itoa(100); f, _ := strconv.ParseFloat(\"3.14\", 64); b, _ := strconv.ParseBool(\"true\"); fmt.Println(i, s, f, b) }" > /tmp/cast3.go && go run /tmp/cast3.go', output: '42 100 3.14 true', explain: 'Atoi=ASCII to Integer(简便方法,等价 ParseInt(s, 10, 0))。Itoa=整数→ASCII。ParseFloat 第二参数 bitSize(32/64)。ParseBool 接受 "1","t","T","TRUE","true","True" 等多种格式。' },
    ],
    diagnosis: [
      { symptom: 'cannot use x (type float64) as type int', cause: 'Go 不允许隐式类型转换,即使看起"安全"的转换也要显式。', fix: '显式转换:int(x)。注意:这会截断小数。需要四舍五入:int(math.Round(x))。' },
      { symptom: 'constant 3.14 truncated to integer', cause: '将浮点常量直接赋值给整数类型:var i int = 3.14。', fix: '显式转换:var i int = int(3.14)。常量的类型转换在编译时检查边界,不能溢出。' },
      { symptom: 'strconv.Atoi: parsing "12.5": invalid syntax', cause: 'Atoi 不能解析浮点数字符串,只能解析整数格式。', fix: '先 ParseFloat 再转 int:f, _ := strconv.ParseFloat(s, 64); i := int(f)。或用 strings.Split + Atoi。' },
    ],
    exercises: [
      { level: '基础', task: '将 int 转为 float64,再转回 int,观察精度是否损失。', hint: 'float64(i); int(f)', answer: 'i := 42\nf := float64(i)\ni2 := int(f)\nfmt.Println(i == i2) // true (42 在 float64 中可精确表示)' },
      { level: '进阶', task: '用 strconv 将字符串 "3.14159" 转为 float64,再四舍五入到两位小数。', hint: 'ParseFloat + math.Round', answer: 'f, _ := strconv.ParseFloat("3.14159", 64)\nr := math.Round(f*100) / 100\nfmt.Println(r) // 3.14' },
      { level: '挑战', task: '测试 int8(256) 的编译错误,再用 int16(256) 成功。解释溢出原理。', hint: 'int8 范围 -128~127', answer: '// var x int8 = 256 // 编译错误: constant 256 overflows int8\nvar y int16 = 256 // OK (int16 范围 -32768~32767)\n// int8 只能表示 8 位(-128 到 127),256 需要至少 9 位' },
    ],
  },

  // ═══════════════ Node 18: Type Assertions ═══════════════
  "mtQfyYscNVbLtGyNPM0Nn": {
    mentalModel: '类型断言像拆快递——收到普通包装(interface{}),但知道里面是什么(具体类型),拆开检查:val, ok := iface.(Book)。包装不对就退货(ok=false);暴力拆 val := iface.(Book) 错了会 panic。',
    handsOn: [
      { title: '安全断言:comma ok 惯用法', cmd: 'echo "package main; import \"fmt\"; func main() { var i interface{} = \"hello\"; s, ok := i.(string); fmt.Println(\"string:\", s, ok); n, ok := i.(int); fmt.Println(\"int:\", n, ok) }" > /tmp/ta1.go && go run /tmp/ta1.go', output: 'string: hello true\nint: 0 false', explain: 'val, ok := iface.(Type) 是安全断言。匹配时 ok=true,val 是转换后的值;不匹配时 ok=false,val 是零值。永远不会 panic。始终使用 comma ok 形式,除非 100% 确定类型。' },
      { title: '非安全断言导致 panic', cmd: 'echo "package main; import \"fmt\"; func main() { defer func() { if r := recover(); r != nil { fmt.Println(\"recovered:\", r) } }(); var i interface{} = \"hello\"; n := i.(int); fmt.Println(n) }" > /tmp/ta2.go && go run /tmp/ta2.go', output: 'recovered: interface conversion: interface {} is string, not int', explain: 'i.(int) 不带 ok 的断言在类型不匹配时 panic。recover 可捕获,但最佳实践:永远使用 comma ok 形式。type switch 中不需要 ok。' },
      { title: 'type switch:按类型分发', cmd: 'echo "package main; import \"fmt\"; func desc(i interface{}) { switch v := i.(type) { case string: fmt.Printf(\"string: %%q\\n\", v); case int: fmt.Printf(\"int: %%d\\n\", v); case []int: fmt.Printf(\"slice: %%v\\n\", v); default: fmt.Printf(\"unknown: %%T\\n\", v) } }; func main() { desc(\"hi\"); desc(42); desc([]int{1, 2}) }" > /tmp/ta3.go && go run /tmp/ta3.go', output: 'string: "hi"\nint: 42\nslice: [1 2]', explain: 'switch v := i.(type) 是 type switch。v 在每个 case 里自动是断言后的类型。case 按书写顺序检查,具体类型放前面,interface{} 或 any 放最后。' },
    ],
    diagnosis: [
      { symptom: 'interface conversion: panic on type assertion', cause: '直接用 i.(Type) 断言,但接口变量的实际类型不匹配。', fix: '用 val, ok := i.(Type); if ok { ... }。对所有不确定的类型断言都使用 comma ok 惯用法。' },
      { symptom: 'type switch 中 case 顺序错误导致某些分支永远匹配不到', cause: 'case interface{} 匹配所有类型,放前面则后续 case 永不执行。', fix: '具体类型放前面,interface{} 或 any 放最后。Go 不允许重复 case。' },
      { symptom: '接口值是 nil 时,type assertion 的 ok 也是 false', cause: 'val, ok := nilIface.(Type)。接口本身是 nil 时,ok 总是 false,即使你要断言的类型"可以接受 nil"。', fix: '先检查 iface == nil:if iface == nil { ... }。区分接口==nil 和 (type=*T, value=nil) 两种不同的 nil。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 interface{} 变量存 string,用 comma ok 断言并打印。', hint: 's, ok := data.(string)', answer: 'var data interface{} = "hello"\nif s, ok := data.(string); ok {\n    fmt.Println(s)\n}' },
      { level: '进阶', task: '用 type switch 处理不同形状:Circle(半径)和 Rect(长宽),打印各自的面积。', hint: 'switch v := shape.(type) { case Circle: ... }', answer: 'type Circle struct{ R float64 }; type Rect struct{ W, H float64 }\nfunc area(s interface{}) float64 {\n    switch v := s.(type) {\n    case Circle: return 3.14 * v.R * v.R\n    case Rect: return v.W * v.H\n    default: return 0\n    }\n}' },
      { level: '挑战', task: '实现通用函数:接受 interface{},如果是数字(int/float64)返回平方值,否则返回 nil,false。', hint: 'type switch + 多返回值', answer: 'func square(v interface{}) (interface{}, bool) {\n    switch x := v.(type) {\n    case int: return x * x, true\n    case float64: return x * x, true\n    default: return nil, false\n    }\n}' },
    ],
  },

  // ═══════════════ Node 19: Loops ═══════════════
  "0oVJPpWL-eTMeaJJijm-v": {
    mentalModel: 'Go 只有 for 一种循环关键词,像瑞士军刀——一个工具干所有事:传统三语句 for、while 式 for、无限 for、range 遍历 for。设计哲学:少即是多,只保留真正需要的那一个。',
    handsOn: [
      { title: 'for 的三种形式', cmd: 'echo "package main; import \"fmt\"; func main() { fmt.Print(\"三语句: \"); for i := 0; i < 5; i++ { fmt.Print(i, \" \") }; fmt.Print(\"\\nwhile式: \"); i := 0; for i < 5 { fmt.Print(i, \" \"); i++ }; fmt.Print(\"\\n无限: \"); c := 0; for { c++; fmt.Print(c, \" \"); if c >= 4 { break } }; fmt.Println() }" > /tmp/for1.go && go run /tmp/for1.go', output: '三语句: 0 1 2 3 4\nwhile式: 0 1 2 3 4\n无限: 1 2 3 4', explain: 'Go 只有 for 一种循环。C 风格 for init; cond; post。while 等价:for cond。无限循环:for {},用 break 退出。Go 没有 while 或 do-while,统一用 for。' },
      { title: 'range 遍历不同集合', cmd: 'echo "package main; import \"fmt\"; func main() { slice := []string{\"a\", \"b\", \"c\"}; for i, v := range slice { fmt.Printf(\"%%d:%%s \", i, v) }; fmt.Println(); s := \"Go 语言\"; for i, r := range s { fmt.Printf(\"s[%%d]=%%c \", i, r) }; fmt.Println() }" > /tmp/for2.go && go run /tmp/for2.go', output: '0:a 1:b 2:c\ns[0]=G s[1]=o s[2]=  s[3]=语 s[6]=言', explain: 'range 可遍历:数组、切片、map、string、channel。string 按 rune(Unicode 字符)遍历,中文占 3 字节所以索引从 3 跳到 6。用 _ 忽略不需要的值。' },
      { title: 'Go 1.22 修复:for range 循环变量独立', cmd: 'echo "Go 1.21及之前:for _, v := range items { go func() { fmt.Println(v) }() }\n  所有 goroutine 都取到最终值(惨案)\nGo 1.22+:每次迭代创建新变量,goroutine 得到各自的值\n旧版修复:for _, v := range items { v := v; go func() { use(v) }() }"', output: 'Go 历史上最著名的 bug 之一,已在 Go 1.22 彻底修复。', explain: '这是 Go 历史上最广泛的踩坑之一。Go 1.22 修复了 for range 的循环变量复用问题。升级到 Go 1.22+ 可彻底解决。go vet 之前也能检测此问题。' },
    ],
    diagnosis: [
      { symptom: 'range string 时索引不连续', cause: 'range string 按 rune 遍历而非 byte,中文等多字节字符会使索引跳跃。', fix: '需要逐字节:for i:=0; i<len(s); i++ { b:=s[i] }。需要逐字符:for _, r:=range s。了解两种不同语义。' },
      { symptom: 'for range 中修改 v(v 是副本)不影响原切片', cause: 'for _, v := range slice 中 v 是元素副本,修改 v 不影响原切片元素。', fix: 'for i := range slice { slice[i] = newValue }。或 for i, _ := range slice 然后操作 slice[i]。' },
      { symptom: 'range map 中删除安全,但添加元素行为不确定', cause: 'range map 时可安全删除当前 key。添加新 key,新元素可能或可能不出现在本次迭代中。', fix: '避免在 range map 过程中添加元素。如需同时改,先收集 keys 到切片再遍历切片操作 map。' },
    ],
    exercises: [
      { level: '基础', task: '用 for range 遍历切片,分别打印索引+值和只用 _ 忽略索引。', hint: 'for i, v := range s; for _, v := range s', answer: 's := []string{"Go", "Python", "Rust"}\nfor i, v := range s { fmt.Printf("%d: %s\\n", i, v) }\nfor _, v := range s { fmt.Println(v) }' },
      { level: '进阶', task: '用 for range 遍历包含中文字符串 "你好 Go",打印每个 rune 和它的字节索引。', hint: 'for i, r := range "你好 Go"', answer: 's := "你好 Go"\nfor i, r := range s { fmt.Printf("index=%%d rune=%%c\\n", i, r) }\n// index=0 rune=你, index=3 rune=好, index=6 rune= , index=7 rune=G, index=8 rune=o' },
      { level: '挑战', task: '用 for 循环(不用 sort 包)实现冒泡排序对 []int 升序排列。', hint: '双层 for:for i...for j...if arr[j]>arr[j+1]{swap}', answer: 'func bubbleSort(arr []int) {\n    n := len(arr)\n    for i := 0; i < n-1; i++ {\n        for j := 0; j < n-i-1; j++ {\n            if arr[j] > arr[j+1] { arr[j], arr[j+1] = arr[j+1], arr[j] }\n        }\n    }\n}' },
    ],
  },

  // ═══════════════ Node 20: Conditionals ═══════════════
  "OybzXxx00rLeMnEIZfHPM": {
    mentalModel: 'Go 条件判断像门禁系统——if 符合条件才通过,没有括号要求更流畅。每个 if 可自带初始化语句声明临时变量。Go 刻意没有三元运算符(?:),因为清晰比简洁重要。',
    handsOn: [
      { title: 'if 自带初始化语句(Go 最常用模式)', cmd: 'echo "package main; import (\"fmt\"; \"os\"); func main() { if data, err := os.ReadFile(\"/etc/hosts\"); err != nil { fmt.Println(\"fail:\", err) } else { fmt.Println(\"size:\", len(data)) } }" > /tmp/if1.go && go run /tmp/if1.go', output: 'size: 277', explain: 'if data, err := ...; err != nil 中,data 和 err 的作用域仅在 if/else 块内。变量不会泄漏到外部作用域。这是 Go 最常用的错误处理模式。else 块也能访问 if 初始化变量。' },
      { title: 'Go 无三元运算符,用 if/else', cmd: 'echo "package main; import \"fmt\"; func main() { x := 10; var result string; if x > 5 { result = \"big\" } else { result = \"small\" }; fmt.Println(result) }" > /tmp/if2.go && go run /tmp/if2.go', output: 'big', explain: 'Go 设计者认为三元运算符容易写出难以理解的嵌套表达式。在 Go 中用 if/else 更清晰。需要内联判断时可写辅助函数或用 map 查找。' },
      { title: '可比较的类型和不可比较的类型', cmd: 'echo "package main; import \"fmt\"; func main() { a := [3]int{1,2,3}; b := [3]int{1,2,3}; if a == b { fmt.Println(\"array comparable\") } /* slice/map/func 只能与 nil 比较 */ }" > /tmp/if3.go && go run /tmp/if3.go', output: 'array comparable', explain: '== 只能用于可比较类型。数组可比较(元素类型可比较时)。slice/map/function 不可比较,仅能与 nil 比较。struct 可比较当所有字段可比较。interface 可比较,但动态类型不可比较时运行时会 panic。' },
    ],
    diagnosis: [
      { symptom: 'invalid operation: s1 == s2 (slice can only be compared to nil)', cause: '尝试用 == 比较两个切片,但切片不可比较。', fix: '用 reflect.DeepEqual(s1, s2) 或 bytes.Equal(b1, b2) 或 slices.Equal(s1, s2)(Go 1.21+)。手动遍历比较也可。' },
      { symptom: 'if x = 5 { ... } 和 if x == 5 { ... } 混淆', cause: 'if x = 5 是赋值,Go 不允许将其作为条件(除非类型是 bool)。', fix: 'Go 编译器会报错:if 条件必须是 bool 表达式。这避免了 C/C++ 的经典 =/== 混淆 bug。' },
      { symptom: 'if 初始化语句中的变量出了 if/else 块不可用', cause: 'if 初始化语句声明的变量作用域仅限于 if/else 块。', fix: '如需外部使用,在 if 前声明:var data []byte; var err error; if data, err = ...; err != nil { ... }。用 = 而非 :=。' },
    ],
    exercises: [
      { level: '基础', task: '写一个 if/else 判断数是正数、负数还是零。', hint: 'if x > 0 { ... } else if x < 0 { ... } else { ... }', answer: 'if x > 0 { fmt.Println("positive") } else if x < 0 { fmt.Println("negative") } else { fmt.Println("zero") }' },
      { level: '进阶', task: '用 if 初始化语句打开文件并检测错误,在 else 块读取文件大小。', hint: 'if f, err := os.Open(name); err != nil { ... } else { ... }', answer: 'if f, err := os.Open("file.txt"); err != nil {\n    fmt.Println("open failed:", err)\n} else {\n    defer f.Close()\n    stat, _ := f.Stat()\n    fmt.Println("size:", stat.Size())\n}' },
      { level: '挑战', task: '用 reflect.DeepEqual 和手写循环两种方式比较两个 map 是否相等,并分析各自的适用场景。', hint: 'maps.Equal (Go 1.21+) 或手动遍历', answer: 'func equalMaps(a, b map[string]int) bool {\n    if len(a) != len(b) { return false }\n    for k, v := range a {\n        if bv, ok := b[k]; !ok || bv != v { return false }\n    }\n    return true\n}' },
    ],
  },


  // ═══════════════ Node 21: Switch ═══════════════
  "8GoaIBdbJPVYIHR9KsMI-": {
    mentalModel: 'Go 的 switch 像智能分拣快递——不需要 break(自动 break)、可匹配表达式、支持多值 case、可 switch true 实现多条件判断。比 if/else 链更整洁。',
    handsOn: [
      { title: 'switch 自动 break (不会穿透)', cmd: 'echo "package main; import \"fmt\"; func main() { n := 2; switch n { case 1: fmt.Println(\"one\"); case 2: fmt.Println(\"two\"); fmt.Println(\"no fallthrough\"); case 3: fmt.Println(\"three\"); default: fmt.Println(\"other\") } }" > /tmp/sw1.go && go run /tmp/sw1.go', output: 'two\nno fallthrough', explain: 'Go switch 不需要写 break,默认不会 fallthrough 到下一个 case。C/Java 程序员最容易犯的错误(忘记 break)在 Go 中不存在。需要穿透时显式用 fallthrough 关键字(极少使用)。' },
      { title: 'switch true:无表达式 switch', cmd: 'echo "package main; import \"fmt\"; func main() { x := 75; switch { case x >= 90: fmt.Println(\"A\"); case x >= 80: fmt.Println(\"B\"); case x >= 70: fmt.Println(\"C\"); default: fmt.Println(\"F\") } }" > /tmp/sw2.go && go run /tmp/sw2.go', output: 'C', explain: 'switch 后面不跟表达式等价 switch true。每个 case 是布尔表达式,执行第一个为 true 的 case。比多个 if/else if 更整洁。注意:case 按书写顺序检查。' },
      { title: 'switch 初始化语句和多值匹配', cmd: 'echo "package main; import (\"fmt\"; \"os\"); func main() { switch lang := os.Getenv(\"LANG\"); lang { case \"en_US.UTF-8\", \"C\": fmt.Println(\"English\"); case \"zh_CN.UTF-8\": fmt.Println(\"Chinese\"); default: fmt.Println(\"Other:\", lang) } }" > /tmp/sw3.go && go run /tmp/sw3.go', output: 'Other: ', explain: '和 if 一样,switch 也支持初始化语句。lang 作用域仅在 switch 块内。case 可以用逗号分隔多个值:case "a", "b", "c":。' },
    ],
    diagnosis: [
      { symptom: 'case 条件不是常量却使用了 fallthrough', cause: 'fallthrough 必须放在 case 块的最后,且只能跳转到下一个 case(不能跳过)。', fix: '用逗号:case 1, 2, 3: 匹配多个值。避免 fallthrough,它降低可读性。现代 Go 中 fallthrough 极少使用。' },
      { symptom: 'type switch 的 case 值不能使用变量', cause: 'type switch 中 case 只能是类型(如 int, string),不能是值或表达式。', fix: '需要匹配值时使用普通 switch 表达式,需要匹配类型时使用 switch x.(type)。' },
      { symptom: 'default 写在最前面但不会被优先执行', cause: 'switch 按 case 书写顺序检查,default 总是在最后(不论写在哪)。', fix: 'default 的位置不影响语义,但惯例放最后。把 default 放前面可能会误导读者。' },
    ],
    exercises: [
      { level: '基础', task: '用 switch 实现星期几判断:1=Monday,2=Tuesday,...', hint: 'switch day { case 1: ... }', answer: 'switch day {\ncase 1: fmt.Println("Monday")\ncase 2: fmt.Println("Tuesday")\ndefault: fmt.Println("Other")\n}' },
      { level: '进阶', task: '用 switch true 实现成绩等级:90+A,80+B,70+C,60+D,<60 F。', hint: 'switch { case score >= 90: ... }', answer: 'switch {\ncase score >= 90: fmt.Println("A")\ncase score >= 80: fmt.Println("B")\ncase score >= 70: fmt.Println("C")\ncase score >= 60: fmt.Println("D")\ndefault: fmt.Println("F")\n}' },
      { level: '挑战', task: '用 type switch 实现格式打印函数:对 int 打印数字,string 加引号,bool 转 yes/no。', hint: 'switch v := x.(type) { case int: ... }', answer: 'func format(x interface{}) string {\n    switch v := x.(type) {\n    case int: return strconv.Itoa(v)\n    case string: return "\\"" + v + "\\""\n    case bool: return map[bool]string{true: "yes", false: "no"}[v]\n    default: return fmt.Sprint(v)\n    }\n}' },
    ],
  },

  // ═══════════════ Node 22: Strings ═══════════════
  "sMUb6HCQIsU5s-XjY8Pas": {
    mentalModel: 'Go 的 string 是封印的字节瓶——UTF-8 编码的字节序列,不可变。想修改?必须倒出来(转 []byte 或 []rune),改完再封回去。频繁倒来倒去成本很高。',
    handsOn: [
      { title: 'string 是不可变字节序列', cmd: 'echo "package main; import (\"fmt\"; \"strings\"); func main() { s := \"hello\"; fmt.Println(\"len:\", len(s), \"s[0]:\", s[0]); s = strings.Replace(s, \"h\", \"H\", 1); fmt.Println(\"replaced:\", s) }" > /tmp/str1.go && go run /tmp/str1.go', output: 'len: 5 s[0]: 104\nreplaced: Hello', explain: 'len(s) 返回字节数(不是字符数)。s[0] 是 byte(uint8),不是 rune。string 不可变,s[0]=\'H\' 编译错误。修改字符串唯一方式:创建新字符串。strings 包返回的都是新字符串。' },
      { title: '中文:字节 vs 字符长度', cmd: 'echo "package main; import (\"fmt\"; \"unicode/utf8\"); func main() { s := \"你好世界\"; fmt.Println(\"字节:\", len(s)); fmt.Println(\"字符:\", utf8.RuneCountInString(s)); fmt.Println(\"[]rune len:\", len([]rune(s))) }" > /tmp/str2.go && go run /tmp/str2.go', output: '字节: 12\n字符: 4\n[]rune len: 4', explain: '每中文 3 字节(UTF-8),4 个字符=12 字节。len(s)=字节数。utf8.RuneCountInString(s)=字符数。遍历中文必须 for _, r := range s(自动 UTF-8 解码)。' },
      { title: 'strings.Builder 高效拼接', cmd: 'echo "package main; import (\"fmt\"; \"strings\"; \"time\"); func main() { start := time.Now(); var b strings.Builder; for i := 1; i <= 10000; i++ { b.WriteString(\"x\") }; _ = b.String(); fmt.Println(\"took\", time.Since(start)) }" > /tmp/str3.go && go run /tmp/str3.go', output: 'took 150us (极快)', explain: 'Builder 内部以 []byte 存储,减少内存分配。s += "x" 每次拼接创建新字符串,O(n^2) 复杂度。循环中大量拼接必须用 Builder。b.Grow(totalLen) 可预分配避免扩容。' },
    ],
    diagnosis: [
      { symptom: '遍历中文字符串出现乱码', cause: '用 for i := 0; i < len(s); i++ 按 byte 遍历,中文等多字节字符被拆成多个字节。', fix: '用 for _, r := range s 按 rune 遍历。range 会自动解码 UTF-8。' },
      { symptom: 'strings.Split 结果中存在意料之外的空字符串', cause: '分隔符在字符串开头、结尾或连续出现时,Split 产生空字符串元素。', fix: '用 strings.Fields 处理空格分割(自动去空白)。或用 strings.Cut 只分割一次。分词场景用 strings.FieldsFunc。' },
      { symptom: '大量字符串拼接造成性能灾难', cause: '每次 s += item 都分配新内存并复制全部内容。循环 N 次=O(n^2) 的复制开销。', fix: '用 strings.Builder。已知总长时 b.Grow(totalLen) 预分配。或用 strings.Join([]string, sep) 一次性完成。' },
    ],
    exercises: [
      { level: '基础', task: '用 len() 和 for range 分别计算 "Hello, 世界" 的字节数和字符数。', hint: 'len(s)=字节; range=字符', answer: 's := "Hello, 世界"\nfmt.Println("bytes:", len(s)) // 13\ncount := 0; for range s { count++ }; fmt.Println("chars:", count) // 9' },
      { level: '进阶', task: '用 strings.Builder 拼接 1 到 1000 的数字,测量耗时,对比 + 拼接。', hint: 'b.WriteString(strconv.Itoa(i))', answer: 'var b strings.Builder\nfor i := 1; i <= 1000; i++ { b.WriteString(strconv.Itoa(i)) }\nresult := b.String()' },
      { level: '挑战', task: '实现反转字符串函数,正确处理中文("你好Go" 反转为 "oG好你")。', hint: '[]rune 然后交换位置', answer: 'func reverse(s string) string {\n    rs := []rune(s)\n    for i, j := 0, len(rs)-1; i < j; i, j = i+1, j-1 {\n        rs[i], rs[j] = rs[j], rs[i]\n    }\n    return string(rs)\n}' },
    ],
  },

  // ═══════════════ Node 23: Rune ═══════════════
  "oM2B5nhghNuPPuFXiEUh0": {
    mentalModel: 'rune 是 Go 对 Unicode 的一视同仁——英文字母和中文汉字都当作一个字符单位(code point),都是 int32 别名。不是 byte(1字节),是 1-4 字节的 UTF-8 编码,Go 帮你把它当作一个整体来处理。',
    handsOn: [
      { title: 'byte 遍历 vs rune 遍历对比', cmd: 'echo "package main; import \"fmt\"; func main() { s := \"Go 语言\"; fmt.Print(\"Bytes: \"); for i := 0; i < len(s); i++ { fmt.Printf(\"%%c \", s[i]) }; fmt.Println(); fmt.Print(\"Runes: \"); for _, r := range s { fmt.Printf(\"%%c \", r) }; fmt.Println() }" > /tmp/rune1.go && go run /tmp/rune1.go', output: 'Bytes: G o . . .\nRunes: G o   语 言', explain: '按 byte 遍历:中文每字节单独显示=乱码(每中文 3 字节)。按 rune 遍历:每个字符正确显示。byte = uint8(1 字节),rune = int32(4 字节)。' },
      { title: 'rune 字面量和类型信息', cmd: 'echo "package main; import (\"fmt\"; \"unsafe\"); func main() { var r rune = \'中\'; fmt.Printf(\"char:%%c int:%%d hex:%%x size:%%d\\n\", r, r, r, unsafe.Sizeof(r)); var b byte = \'A\'; fmt.Printf(\"byte:%%c int:%%d size:%%d\\n\", b, b, unsafe.Sizeof(b)) }" > /tmp/rune2.go && go run /tmp/rune2.go', output: 'char:中 int:20013 hex:4e2d size:4\nbyte:A int:65 size:1', explain: 'rune 是 int32 别名,占 4 字节。\'中\' 的 Unicode code point 是 U+4E2D(十进制 20013)。byte 是 uint8 别名,占 1 字节。\'A\' 同时是 byte 和 rune(ASCII 在两者范围内)。' },
      { title: 'utf8 编解码', cmd: 'echo "package main; import (\"fmt\"; \"unicode/utf8\"); func main() { buf := make([]byte, 4); n := utf8.EncodeRune(buf, \'中\'); fmt.Printf(\"encoded: %%x (%%d bytes)\\n\", buf[:n], n); r, _ := utf8.DecodeRune(buf[:n]); fmt.Printf(\"decoded: %%c\\n\", r) }" > /tmp/rune3.go && go run /tmp/rune3.go', output: 'encoded: e4b8ad (3 bytes)\ndecoded: 中', explain: 'utf8.EncodeRune 将 rune 编码为 1-4 字节 UTF-8。\'中\' 编码: e4 b8 ad (3 字节)。utf8.DecodeRune 反向解码。utf8.ValidRune 检查有效 Unicode code point。' },
    ],
    diagnosis: [
      { symptom: 'len(s) 计算中文字符数得到错误结果', cause: 'len(s) 返回字节数,中文每字 3 字节,len("你好") = 6。', fix: '用 utf8.RuneCountInString(s) 或 len([]rune(s)) 获取字符数。但两者都是 O(n) 操作。' },
      { symptom: 's[i] 返回的是 byte 不是 rune', cause: 'string 索引操作 s[i] 返回该位置的 byte,不是完整的字符。', fix: 'rune(s[i]) 也只能处理单字节 ASCII。获取第 i 个字符:[]rune(s)[i](O(n) 转换)。需要频繁随机访问字符时预先转 []rune。' },
      { symptom: '字符串截取截断多字节字符', cause: 's[:3] 按字节截取,如果第 3 字节在多字节字符中间,该字符被截断。', fix: '用 for range 计数字节直到字符边界。或用 strings 包函数。截取前 n 个字符需遍历。' },
    ],
    exercises: [
      { level: '基础', task: '打印 rune \'中\' 的整数值和十六进制表示。', hint: 'fmt.Printf("%d %x")', answer: 'r := \'中\'\nfmt.Printf("decimal: %d, hex: %x\\n", r, r)\n// decimal: 20013, hex: 4e2d' },
      { level: '进阶', task: '判断字符串是否包含中文字符(Unicode CJK 范围:U+4E00 ~ U+9FFF)。', hint: 'if r >= 0x4E00 && r <= 0x9FFF', answer: 'func hasChinese(s string) bool {\n    for _, r := range s {\n        if r >= 0x4E00 && r <= 0x9FFF { return true }\n    }\n    return false\n}' },
      { level: '挑战', task: '安全截取字符串前 n 个字符(非字节),正确处理中文等多字节字符。', hint: '循环计数 rune,记录字节边界', answer: 'func truncate(s string, n int) string {\n    count := 0\n    for i := range s {\n        if count == n { return s[:i] }\n        count++\n    }\n    return s\n}' },
    ],
  },

  // ═══════════════ Node 24: Struct Embedding ═══════════════
  "CEMWlMVi6mz075E2noQlg": {
    mentalModel: 'Go 的结构体嵌入是组装而非继承——没有 is-a(基类),而是 has-a(组件)。但匿名字段让嵌入组件的方法和字段自动提升到外部结构体,就像你拥有了组件的一切能力。',
    handsOn: [
      { title: '匿名字段和字段提升', cmd: 'echo "package main; import \"fmt\"; type Animal struct { Name string }; func (a Animal) Speak() { fmt.Println(\"I am\", a.Name) }; type Dog struct { Animal; Breed string }; func main() { d := Dog{Animal: Animal{Name: \"Buddy\"}, Breed: \"Lab\"}; fmt.Println(d.Name); d.Speak(); fmt.Println(d.Animal.Name) }" > /tmp/emb1.go && go run /tmp/emb1.go', output: 'Buddy\nI am Buddy\nBuddy', explain: 'Dog 嵌入 Animal(匿名字段)。Name 和 Speak() 自动提升到 Dog。d.Name 等价 d.Animal.Name。注意:这不是继承,不能把 Dog 当 Animal 多态使用。Go 用组合代替继承。' },
      { title: '接口嵌入(标准库核心模式)', cmd: 'echo "package main; import \"fmt\"; type Reader interface { Read() string }; type Writer interface { Write(string) }; type ReadWriter interface { Reader; Writer }; type File struct{ c string }; func (f *File) Read() string { return f.c }; func (f *File) Write(s string) { f.c = s }; func main() { var rw ReadWriter = &File{}; rw.Write(\"hello\"); fmt.Println(rw.Read()) }" > /tmp/emb2.go && go run /tmp/emb2.go', output: 'hello', explain: 'ReadWriter 通过嵌入 Reader 和 Writer 组合而成。类型只要有 Read() 和 Write() 就自动满足 ReadWriter。io.Reader + io.Writer = io.ReadWriter。这是 Go 最强大的设计模式。' },
      { title: '方法遮蔽和歧义处理', cmd: 'echo "package main; import \"fmt\"; type A struct{}; func (A) Who() string { return \"A\" }; type B struct{}; func (B) Who() string { return \"B\" }; type C struct{ A; B }; func main() { c := C{}; fmt.Println(c.A.Who(), c.B.Who()) }" > /tmp/emb3.go && go run /tmp/emb3.go', output: 'A B', explain: '两个嵌入类型有同名方法时不提升(避免歧义)。必须显式指定 c.A.Who() 或 c.B.Who()。如果 C 自己定义 Who(),会遮蔽所有嵌入的 Who()。' },
    ],
    diagnosis: [
      { symptom: '嵌入的类型方法没有提升到外部结构体', cause: '嵌入的类型首字母小写(unexported),方法和字段不会跨包提升。', fix: '嵌入类型必须大写(exported)才能在包外提升。同包内小写也能提升。不想提升用命名字段(非匿名)。' },
      { symptom: '嵌入的指针类型未初始化导致 nil 指针', cause: 'type Dog struct{ *Animal }; d := Dog{} 中 *Animal 是 nil,调用提升方法会 panic。', fix: '初始化:d := Dog{Animal: &Animal{Name: \"Buddy\"}}。构造时检查 nil:if d.Animal != nil { d.Speak() }。' },
      { symptom: 'JSON 序列化时嵌入类型字段展平了', cause: '匿名嵌入 struct 在 JSON 序列化时字段会"展平"到父级(无嵌套)。', fix: '如需保留嵌套结构用命名字段。或用 json tag 控制。匿名嵌入默认展平,这通常是期望的行为。' },
    ],
    exercises: [
      { level: '基础', task: 'Person 嵌入 Employee,访问 Employee 的 Name 字段(自动提升)。', hint: 'type Employee struct { Person; Company string }', answer: 'type Person struct { Name string; Age int }\ntype Employee struct { Person; Company string }\ne := Employee{Person: Person{Name: "Alice"}, Company: "ACME"}\nfmt.Println(e.Name) // "Alice" (自动提升)' },
      { level: '进阶', task: '定义 Reader/Writer 接口,嵌入为 ReadWriter,实现满足该接口的类型。', hint: 'type ReadWriter interface { io.Reader; io.Writer }', answer: 'type ReadWriter interface { Reader; Writer }\ntype RW struct{ data []byte }\nfunc (rw *RW) Read(p []byte) (int, error) { return copy(p, rw.data), nil }\nfunc (rw *RW) Write(p []byte) (int, error) { rw.data = append(rw.data, p...); return len(p), nil }' },
      { level: '挑战', task: '用嵌入实现装饰器:Logger 结构体嵌入 io.Writer,在每次 Write 前后自动打印日志。', hint: 'type LoggerWriter struct { io.Writer }', answer: 'type LoggerWriter struct { io.Writer }\nfunc (lw *LoggerWriter) Write(p []byte) (int, error) {\n    log.Printf("[WRITE] %d bytes\\n", len(p))\n    n, err := lw.Writer.Write(p)\n    log.Printf("[DONE] %d bytes\\n", n)\n    return n, err\n}' },
    ],
  },

  // ═══════════════ Node 25: Methods ═══════════════
  "cPWjPuYR6HHi86qSPlhSL": {
    mentalModel: '方法像工具挂件——任何自定义类型都可挂上专门的工具(method),通过 receiver 确定归属。值接收者 vs 指针接收者的选择是最重要的设计决策:需要修改原值吗?原值很大要避免复制吗?',
    handsOn: [
      { title: '值接收者 vs 指针接收者', cmd: 'echo "package main; import \"fmt\"; type Counter struct{ Value int }; func (c Counter) IncVal() { c.Value++ }; func (c *Counter) IncPtr() { c.Value++ }; func main() { c := Counter{0}; c.IncVal(); fmt.Println(c.Value); c.IncPtr(); fmt.Println(c.Value) }" > /tmp/meth1.go && go run /tmp/meth1.go', output: '0\n1', explain: '值接收者(c Counter):收到副本,修改不影响原值。指针接收者(c *Counter):修改影响原值。Go 自动处理:调用 c.IncPtr() 等价 (&c).IncPtr();调用 (&c).IncVal() 也有效。' },
      { title: '在任何自定义类型上定义方法', cmd: 'echo "package main; import \"fmt\"; type MyInt int; func (m MyInt) Double() MyInt { return m * 2 }; type Strings []string; func (s Strings) Join(sep string) string { r := \"\"; for i, v := range s { if i > 0 { r += sep }; r += v }; return r }; func main() { fmt.Println(MyInt(5).Double()); fmt.Println(Strings{\"a\",\"b\",\"c\"}.Join(\",\")) }" > /tmp/meth2.go && go run /tmp/meth2.go', output: '10\na,b,c', explain: '不仅 struct,当前包定义的任何类型都可有方法。不能为内置类型(int, string)或其他包的类型定义方法。' },
      { title: 'nil receiver 方法调用', cmd: 'echo "package main; import \"fmt\"; type Node struct{ V int; Next *Node }; func (n *Node) Sum() int { if n == nil { return 0 }; return n.V + n.Next.Sum() }; func main() { var n *Node; fmt.Println(n.Sum()) }" > /tmp/meth3.go && go run /tmp/meth3.go', output: '0', explain: 'Go 允许 nil receiver 调用方法(只要方法处理了 nil)。n.Sum() 不会 panic。这是 Go 的特性:C++/Java 调用 nil 对象的方法会崩溃,Go 允许且是惯用模式。' },
    ],
    diagnosis: [
      { symptom: '方法用指针接收者,但接口要求值接收者', cause: '如果方法用指针接收者(*T)实现,只有 *T 满足接口,T 不满足。值接收者(T)方法 T 和 *T 都满足。', fix: '统一用指针接收者(推荐)。除非是小型不可变类型(如 time.Time 的值接收者方法)。' },
      { symptom: '方法调用时 nil receiver 导致 panic', cause: '方法内未检查 nil 就直接访问 receiver 的字段。', fix: '在方法开头检查 nil:if r == nil { return zeroValue }。标准库中很多方法不检查 nil(如 *os.File),由调用者负责。' },
      { symptom: 'cannot define new methods on non-local type', cause: '尝试为不属于当前包的类型(如 int, string, 其他包的 struct)定义方法。', fix: '创建自定义类型:type MyInt int,然后为 MyInt 定义方法。或使用包装器:type Wrapper struct{ original.Type }。' },
    ],
    exercises: [
      { level: '基础', task: '为 Counter 类型写值接收者和指针接收者方法,验证行为差异。', hint: 'func (c Counter) vs func (c *Counter)', answer: 'type Counter struct{ n int }\nfunc (c Counter) ValInc() { c.n++ } // 不改原值\nfunc (c *Counter) PtrInc() { c.n++ } // 改原值' },
      { level: '进阶', task: '为 []string 类型定义 Filter 方法,返回包含指定子串的元素。', hint: 'type Strings []string; func (s Strings) Filter(sub string) Strings', answer: 'type Strings []string\nfunc (s Strings) Filter(sub string) Strings {\n    result := Strings{}\n    for _, str := range s {\n        if strings.Contains(str, sub) { result = append(result, str) }\n    }\n    return result\n}' },
      { level: '挑战', task: '实现链表 List 类型:Append、Length、Get 方法,正确处理 nil receiver。', hint: 'type List struct { head *Node; len int }', answer: 'type Node struct{ V int; Next *Node }\ntype List struct{ head *Node; len int }\nfunc (l *List) Append(v int) {\n    n := &Node{V: v}\n    if l.head == nil { l.head = n } else { cur := l.head; for cur.Next != nil { cur = cur.Next }; cur.Next = n }\n    l.len++\n}\nfunc (l *List) Len() int { return l.len }' },
    ],
  },

  // ═══════════════ Node 26: Defer ═══════════════
  "2vIGEVnM2R7mRKeFZlrZl": {
    mentalModel: 'defer 像写在门框上的备忘录——每次 defer 贴一张纸条,出门(函数返回)时按贴纸相反顺序(LIFO)执行。即使急事(panic)也能优雅收拾。',
    handsOn: [
      { title: 'defer LIFO 执行顺序', cmd: 'echo "package main; import \"fmt\"; func main() { defer fmt.Println(\"1st\"); defer fmt.Println(\"2nd\"); defer fmt.Println(\"3rd\"); fmt.Println(\"body\") }" > /tmp/def1.go && go run /tmp/def1.go', output: 'body\n3rd\n2nd\n1st', explain: 'defer 在函数返回前按 LIFO 执行。先 defer 的语句最后执行。像栈:push 压入,返回时 pop 执行。多个 defer 常见:第一个 defer 打开资源,最后一个 defer 关闭资源。' },
      { title: 'defer 参数求值时机(关键!)', cmd: 'echo "package main; import \"fmt\"; func main() { x := 1; defer fmt.Println(\"val:\", x); defer func() { fmt.Println(\"closure:\", x) }(); x = 100; fmt.Println(\"end:\", x) }" > /tmp/def2.go && go run /tmp/def2.go', output: 'end: 100\nclosure: 100\nval: 1', explain: 'defer 语句的参数在声明时立即计算! 所以 fmt.Println(x) 捕获了 x=1。但闭包捕获变量引用,读取的是最终值 x=100。这是 Go defer 最常见的陷阱! 始终注意参数何时求值。' },
      { title: 'defer 标准资源清理', cmd: 'echo "package main; import (\"fmt\"; \"os\"); func write() error { f, err := os.Create(\"/tmp/dt\"); if err != nil { return err }; defer f.Close(); _, err = f.WriteString(\"hello\"); return err }; func main() { write(); d, _ := os.ReadFile(\"/tmp/dt\"); fmt.Println(string(d)) }" > /tmp/def3.go && go run /tmp/def3.go', output: 'hello', explain: 'defer f.Close() 是标准资源清理模式。即使 WriteString 出错 return 时,Close 也会执行。在获取资源后立即 defer 释放。注意:defer Close 的 error 可能覆盖原函数的 error。' },
    ],
    diagnosis: [
      { symptom: 'defer 闭包捕获循环变量,所有 defer 拿到最终值', cause: 'Go 1.21 前循环变量复用。defer 闭包捕获变量引用,取到循环结束后的值。', fix: 'Go 1.22+ 已修复。旧版本:for i := range items { i := i; defer func() { use(i) }() }。或将值作为参数传入 defer。' },
      { symptom: 'defer 函数的 error 被忽略', cause: 'defer f.Close() 可能返回 error,但原函数返回值已经确定。', fix: '命名返回值 + defer func() { err = f.Close() }。或用 defer func() { if cerr := f.Close(); cerr != nil && err == nil { err = cerr } }()。' },
      { symptom: 'defer 在热点循环中累积性能开销', cause: '每次 defer ~35ns 开销。循环内大量 defer 累积延迟。', fix: '不要在循环内部使用 defer。提取循环体为单独函数,在该函数内 defer。或手动清理。热路径避免 defer。' },
    ],
    exercises: [
      { level: '基础', task: '写函数包含 3 个 defer,验证 LIFO 执行顺序。', hint: 'defer fmt.Println(1); defer fmt.Println(2); defer fmt.Println(3)', answer: 'func test() { defer fmt.Println(1); defer fmt.Println(2); defer fmt.Println(3); fmt.Println("main") }\ntest() // main 3 2 1' },
      { level: '进阶', task: '用 defer 实现函数执行时间测量(进入时记录时间,退出时计算耗时)。', hint: 'defer func() { fmt.Println(time.Since(start)) }()', answer: 'func timed() {\n    start := time.Now()\n    defer func() { fmt.Println("took:", time.Since(start)) }()\n    time.Sleep(100 * time.Millisecond)\n}' },
      { level: '挑战', task: 'defer 实现 mutex 安全使用:获取锁后 defer unlock,确保即使 error 返回也会释放锁。', hint: 'mu.Lock(); defer mu.Unlock()', answer: 'func safeOp() error {\n    mu.Lock()\n    defer mu.Unlock()\n    // 即使这里 return err, Unlock 也会执行\n    return doSomething()\n}' },
    ],
  },

  // ═══════════════ Node 27: Panic and Recover ═══════════════
  "RuUSN0mK9d1LJzScoQnF9": {
    mentalModel: 'panic 像火警——无法挽回时拉响,程序开始撤离(沿调用栈展开)。recover 像消防员——在 defer 中拦截火警,防止崩溃。Go 哲学:能用 error 处理的不要 panic。panic 是最后手段。',
    handsOn: [
      { title: 'panic 基本行为', cmd: 'echo "package main; import \"fmt\"; func main() { defer fmt.Println(\"defer 1\"); defer fmt.Println(\"defer 2\"); fmt.Println(\"before panic\"); panic(\"boom!\"); fmt.Println(\"after panic\") }" > /tmp/pnc1.go && go run /tmp/pnc1.go 2>&1', output: 'before panic\ndefer 2\ndefer 1\npanic: boom!\ngoroutine 1 [running]:', explain: 'panic 发生:1)当前函数停止执行(\"after panic\"未输出);2)按 LIFO 执行所有 defer;3)沿调用栈向上传播直到 main,打印 stack trace 并退出。' },
      { title: 'recover 捕获 panic', cmd: 'echo "package main; import \"fmt\"; func mayPanic() { panic(\"oops\") }; func safeCall() { defer func() { if r := recover(); r != nil { fmt.Println(\"recovered:\", r) } }(); mayPanic() }; func main() { safeCall(); fmt.Println(\"continues\") }" > /tmp/pnc2.go && go run /tmp/pnc2.go', output: 'recovered: oops\ncontinues', explain: 'recover 必须在 defer 函数中调用才有效。当 panic 发生,recover 返回 panic 的参数,程序恢复执行。recover 在其他地方调用永远返回 nil。正确模式:defer func() { if r := recover(); r != nil { ... } }()。' },
      { title: 'Must* 模式:初始化时 panic 可接受', cmd: 'echo "Go 标准库 MustCompile 模式:\\nvar emailRegex = regexp.MustCompile(\\`^[a-z]+@[a-z]+\\\\\\\\.com$\\`)\\n// 如果正则无效,panic 在 init 时发生,程序无法启动\\n// 这是可接受的:配置错误不如早崩溃,比运行时静默失败好"', output: 'Must* 模式用于程序初始化。regexp.Compile 返回 error,regexp.MustCompile 遇到错误直接 panic。', explain: '标准库 MustCompile 模式:程序初始化时 panic 是可接受的(程序无法运行)。recover 场景:1)防止单个 handler panic 导致服务器崩溃;2)库边界上把 panic 转 error。库代码绝不用 panic 作正常控制流。' },
    ],
    diagnosis: [
      { symptom: 'recover 返回 nil,没有捕获到 panic', cause: 'recover 不在 defer 函数中直接调用,或被嵌套包装了。', fix: 'recover 必须在 defer 的函数调用链中直接或间接执行。defer func() { recover() } 正确,defer myRecover() 中 myRecover 调用 recover 也正确。' },
      { symptom: '捕获 panic 后程序状态可能已损坏', cause: 'panic 发生时 goroutine 的部分变量可能处于不一致状态(map 部分更新,mutex 未释放)。', fix: 'recover 后通常:1)记录日志;2)清理资源;3)返回 error。状态可能损坏时,恢复整个 goroutine 或优雅退出。' },
      { symptom: '库代码中 panic,调用者无法恢复', cause: '库函数 panic 导致调用者程序崩溃,除非调用者预料到并 recover。', fix: '库代码返回 error 而非 panic。只有 Must* 模式(main 包初始化)可以用 panic。标准错误(io.EOF, sql.ErrNoRows)都是返回 error。' },
    ],
    exercises: [
      { level: '基础', task: '写会 panic 的函数,在 main 中 recover 并打印 panic 信息。', hint: 'defer func() { if r := recover(); r != nil { fmt.Println(r) } }()', answer: 'func main() {\n    defer func() { if r := recover(); r != nil { fmt.Println("caught:", r) } }()\n    panic("test panic")\n}' },
      { level: '进阶', task: '实现 MustAtoi 函数:strconv.Atoi 返回 error 时直接 panic。', hint: 'func MustAtoi(s string) int', answer: 'func MustAtoi(s string) int {\n    i, err := strconv.Atoi(s)\n    if err != nil { panic(fmt.Sprintf("MustAtoi: %v", err)) }\n    return i\n}' },
      { level: '挑战', task: '实现 HTTP handler 包装器:捕获 handler panic,返回 500 而非服务器崩溃。', hint: 'defer recover + http.Error', answer: 'func recoverMiddleware(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        defer func() {\n            if err := recover(); err != nil {\n                log.Printf("panic: %v", err)\n                http.Error(w, "Internal Server Error", 500)\n            }\n        }()\n        next.ServeHTTP(w, r)\n    })\n}' },
    ],
  },

  // ═══════════════ Node 28: Select ═══════════════
  "J2qynyv6aj5l5TKk0A4Uw": {
    mentalModel: 'select 是 Go 的多路监听器——同时监听多个 channel,哪个先有信号就先处理哪个。多个同时就绪时随机选(公平)。加 default 变成非阻塞的"试听"。',
    handsOn: [
      { title: 'select 基本用法:等待多个 channel', cmd: 'echo "package main; import (\"fmt\"; \"time\"); func main() { ch1, ch2 := make(chan string), make(chan string); go func() { time.Sleep(50*time.Millisecond); ch1 <- \"from ch1\" }(); go func() { time.Sleep(10*time.Millisecond); ch2 <- \"from ch2\" }(); for i := 0; i < 2; i++ { select { case m := <-ch1: fmt.Println(m); case m := <-ch2: fmt.Println(m) } } }" > /tmp/sel1.go && go run /tmp/sel1.go', output: 'from ch2\nfrom ch1', explain: 'ch2 先收到(10ms vs 50ms),对应 case 执行。for 循环 2 次收集两个 channel。多 case 同时就绪时随机选(防止饥饿)。select 是 Go 并发核心原语之一。' },
      { title: 'select default:非阻塞操作', cmd: 'echo "package main; import \"fmt\"; func main() { ch := make(chan int, 1); ch <- 1; select { case v := <-ch: fmt.Println(\"received:\", v); default: fmt.Println(\"would block\") }; select { case v := <-ch: fmt.Println(\"received:\", v); default: fmt.Println(\"would block\") } }" > /tmp/sel2.go && go run /tmp/sel2.go', output: 'received: 1\nwould block', explain: '第一次 select:ch 有数据,接收成功。第二次:ch 空,执行 default。default 使 select 非阻塞——有就绪 case 则执行,否则 default。' },
      { title: 'time.After 超时(注意 timer 泄漏)', cmd: 'echo "package main; import (\"fmt\"; \"time\"); func main() { ch := make(chan string); select { case m := <-ch: fmt.Println(m); case <-time.After(100*time.Millisecond): fmt.Println(\"timeout!\") } }" > /tmp/sel3.go && go run /tmp/sel3.go', output: 'timeout!', explain: 'time.After 返回 channel,指定时间后发送值。但:每次 select 创建新 timer! 循环中会造成 timer 泄漏。循环中应用 time.NewTimer + Reset 代替 time.After。' },
    ],
    diagnosis: [
      { symptom: 'select 中 time.After 造成内存泄漏', cause: '每次 select 的 time.After 创建新 timer,未被 GC 前累积。循环中快速泄漏。', fix: '循环外创建 timer:t := time.NewTimer(d); for { t.Reset(d); select { case <-t.C: ... } }。或用 context.WithTimeout。' },
      { symptom: 'select 所有 case 都阻塞且无 default:死锁', cause: '所有 channel 操作都在等待,没有 goroutine 继续执行。Go 运行时检测并 panic。', fix: '确保至少有一个 case 将来会有数据。或加 default(非阻塞)。或加 time.After 超时。检查是否忘记启动对应 goroutine。' },
      { symptom: 'nil channel 的 case 被忽略(有用特性)', cause: '在 select 中,nil channel 收发永远阻塞,对应 case 被跳过。', fix: '利用此特性动态禁用 select 的 case:超时后把 channel 设为 nil,避免该 case 被重复选中。' },
    ],
    exercises: [
      { level: '基础', task: '创建两个 channel,用 select 从两者接收,打印先到达的那个。', hint: 'select { case v := <-ch1: ... case v := <-ch2: ... }', answer: 'ch1, ch2 := make(chan string, 1), make(chan string, 1)\nch1 <- "first"\nselect {\ncase v := <-ch1: fmt.Println("ch1:", v)\ncase v := <-ch2: fmt.Println("ch2:", v)\n}' },
      { level: '进阶', task: '用 select + default 实现非阻塞发送:channel 满了就跳过,不等待。', hint: 'select { case ch <- val: default: }', answer: 'ch := make(chan int, 1)\nch <- 1 // filled\nselect {\ncase ch <- 2: fmt.Println("sent")\ndefault: fmt.Println("full, dropped")\n}' },
      { level: '挑战', task: '用 select + time.NewTimer 实现可靠重试:最多 3 次,每次超时 500ms。', hint: 'timer := time.NewTimer(d); select { case result := <-ch: ... case <-timer.C: retry }', answer: 'for i := 0; i < 3; i++ {\n    timer := time.NewTimer(500 * time.Millisecond)\n    select {\n    case result := <-ch: timer.Stop(); return result, nil\n    case <-timer.C: continue\n    }\n}\nreturn nil, errors.New("max retries")' },
    ],
  },


  // ═══════════════ Node 29: WaitGroup ═══════════════
  "XuDRgF60xaChbric7nFco": {
    mentalModel: 'sync.WaitGroup 像家长等孩子们回家——家长说"等 3 个孩子"(wg.Add(3)),每个孩子到家说一声(wg.Done()),家长等到 3 声都听到才放心(wg.Wait())。少说了永远等,多说了家长生气(panic)。',
    handsOn: [
      { title: 'WaitGroup 基本使用模式', cmd: 'echo "package main; import (\"fmt\"; \"sync\"; \"time\"); func main() { var wg sync.WaitGroup; for i := 1; i <= 3; i++ { wg.Add(1); go func(id int) { defer wg.Done(); time.Sleep(time.Duration(id*100)*time.Millisecond); fmt.Println(\"worker\", id, \"done\") }(i) }; wg.Wait(); fmt.Println(\"all done\") }" > /tmp/wg1.go && go run /tmp/wg1.go', output: 'worker 1 done\nworker 2 done\nworker 3 done\nall done', explain: 'wg.Add(1) 必须在 go func() 之前调用(关键!否则 Wait 可能提前返回)。wg.Done() 在 goroutine 退出时执行(defer 确保)。wg.Wait() 阻塞直到计数器归零。Done() = Add(-1)。' },
      { title: 'WaitGroup 必须传指针', cmd: 'echo "package main; import (\"fmt\"; \"sync\"); func worker(id int, wg *sync.WaitGroup) { defer wg.Done(); fmt.Println(id) }; func main() { var wg sync.WaitGroup; for i := 0; i < 3; i++ { wg.Add(1); go worker(i, &wg) }; wg.Wait() }" > /tmp/wg2.go && go run /tmp/wg2.go', output: '0\n1\n2', explain: 'WaitGroup 必须作为指针传递。值传递会复制(内部计数器和信号量),导致每个 goroutine 操作不同的 WaitGroup。go vet 会警告"sync.WaitGroup passed by value"。' },
      { title: 'Done 超过 Add 导致 panic', cmd: 'echo "package main; import \"sync\"; func main() { var wg sync.WaitGroup; defer func() { if r := recover(); r != nil { fmt.Println(\"panic:\", r) } }(); wg.Add(1); wg.Done(); wg.Done() }" > /tmp/wg3.go && go run /tmp/wg3.go 2>&1', output: 'panic: sync: negative WaitGroup counter', explain: 'Done() 次数超过 Add() 时,计数器变负数,WaitGroup panic。确保每个 Add(1) 对应恰好一次 Done()。用 defer wg.Done() 保证所有返回路径都执行。' },
    ],
    diagnosis: [
      { symptom: 'WaitGroup 卡住:程序永不退出(goroutine 泄漏)', cause: 'wg.Add(N) 后某些 goroutine 没调用 Done()(如提前 return、panic 未 recover)。', fix: '用 defer wg.Done() 确保执行。检查所有退出路径。用 pprof goroutine profile 查看阻塞 goroutine。' },
      { symptom: 'sync: negative WaitGroup counter (panic)', cause: 'Done() 调用次数超过 Add() 次数。或 Add() 在 Done() 之后被调用(race)。', fix: '确保 Add 和 Done 匹配。Add 总在 goroutine 启动前。使用 defer wg.Done() 避免重复调用。' },
      { symptom: 'WaitGroup 拷贝后行为异常', cause: 'sync.WaitGroup 内部字段不可导出,不能拷贝。值传递创建副本,原 WaitGroup 的 Wait 可能等不到 Done。', fix: '始终用指针:func fn(wg *sync.WaitGroup)。go vet 可检测此类错误。' },
    ],
    exercises: [
      { level: '基础', task: '创建 5 个 goroutine,每个打印编号,用 WaitGroup 等待全部完成。', hint: 'wg.Add(1) 在 go func() 前, defer wg.Done() 内', answer: 'var wg sync.WaitGroup\nfor i := 0; i < 5; i++ {\n    wg.Add(1)\n    go func(id int) { defer wg.Done(); fmt.Println(id) }(i)\n}\nwg.Wait()' },
      { level: '进阶', task: '实现并行任务处理器:将 100 个任务的切片分成 4 组,每组一个 goroutine,WaitGroup 等待全部完成。', hint: 'chunkSize := len(tasks) / workers', answer: 'var wg sync.WaitGroup\nworkers, chunk := 4, len(tasks)/4\nfor w := 0; w < workers; w++ {\n    wg.Add(1)\n    go func(start int) { defer wg.Done(); for i := start; i < start+chunk; i++ { tasks[i] = i*i } }(w * chunk)\n}\nwg.Wait()' },
      { level: '挑战', task: '用 WaitGroup + channel 实现并行执行器:收集每个 goroutine 的结果到 channel,Wait 后 close channel。', hint: 'wg.Wait(); close(results)', answer: 'var wg sync.WaitGroup\nresults := make(chan int, 5)\nfor i := 0; i < 5; i++ { wg.Add(1); go func(id int) { defer wg.Done(); results <- id*id }(i) }\ngo func() { wg.Wait(); close(results) }()\nfor r := range results { fmt.Println(r) }' },
    ],
  },

  // ═══════════════ Node 30: Mutex ═══════════════
  "K9OMPN7FU-ScSgdBsIKRI": {
    mentalModel: 'sync.Mutex 像公共卫生间门锁——每次只一人进入,进去的锁门(Lock),出来的开门(Unlock)。sync.RWMutex 升级成阅览室:多读者同时在里面,写者独占整个房间。',
    handsOn: [
      { title: 'Mutex 保护共享变量', cmd: 'echo "package main; import (\"fmt\"; \"sync\"); func main() { var mu sync.Mutex; var count int; var wg sync.WaitGroup; for i := 0; i < 1000; i++ { wg.Add(1); go func() { defer wg.Done(); mu.Lock(); count++; mu.Unlock() }() }; wg.Wait(); fmt.Println(count) }" > /tmp/mu1.go && go run /tmp/mu1.go', output: '1000', explain: '不用锁时 count++(读-改-写)有 data race,结果<1000。mu.Lock()/Unlock() 间是临界区。Go Mutex 不可重入:同一 goroutine Lock 两次会死锁。Unlock 未锁的 Mutex 会 panic。' },
      { title: 'RWMutex 读写锁', cmd: 'echo "package main; import (\"fmt\"; \"sync\"; \"time\"); func main() { var rw sync.RWMutex; var data int; read := func(id int) { rw.RLock(); fmt.Println(\"r\",id,data); time.Sleep(10*time.Millisecond); rw.RUnlock() }; write := func(v int) { rw.Lock(); data=v; fmt.Println(\"w\",v); time.Sleep(10*time.Millisecond); rw.Unlock() }; go write(100); go read(1); go read(2); time.Sleep(50*time.Millisecond) }" > /tmp/mu2.go && go run /tmp/mu2.go', output: 'w 100\nr 1 100\nr 2 100', explain: 'RWMutex:读锁(RLock/RUnlock)允许多个同时持有;写锁(Lock/Unlock)独占。当写锁等待时,新来读锁也等待(防止写饥饿,Go 的 RWMutex 写优先)。' },
      { title: 'go run -race 检测 data race', cmd: 'echo "package main; import \"sync\"; func main() { var count int; var wg sync.WaitGroup; for i := 0; i < 100; i++ { wg.Add(1); go func() { defer wg.Done(); count++ }() }; wg.Wait() }" > /tmp/mu3.go && go run -race /tmp/mu3.go 2>&1 | head -5', output: 'WARNING: DATA RACE\nRead at 0x... by goroutine ...', explain: 'go run -race 启用竞态检测器(race detector)。检测到 count++ 的并发读写冲突。有 5-10 倍性能开销,仅在测试环境启用。CI 必须 go test -race。只检测实际发生的 race,不保证检测所有。' },
    ],
    diagnosis: [
      { symptom: 'fatal error: sync: unlock of unlocked mutex', cause: '在未 Lock 时调用 Unlock,或 Lock/Unlock 不在同一控制流中。', fix: '始终使用 defer mu.Unlock() 紧随 Lock。避免在多个分支中手动 Unlock。' },
      { symptom: 'Mutex 拷贝后锁失效', cause: 'Mutex 值传递,内部状态被拷贝,操作的是不同的 Mutex 实例。', fix: 'go vet 警告"copylocks"。始终指针传递。Mutex 作为结构体字段时用指针接收者。' },
      { symptom: 'Mutex 死锁:同一 goroutine Lock 两次', cause: 'Go Mutex 不可重入。递归或嵌套调用中重复 Lock 会导致死锁。', fix: '重构避免嵌套加锁。拆分为更细粒度锁。或用 sync.Map 或 channel 替代复杂锁。简单计数器用 atomic。' },
    ],
    exercises: [
      { level: '基础', task: '用 Mutex 保护 map,实现并发安全计数器 Inc/Get。', hint: 'type SafeCounter struct { mu sync.Mutex; m map[string]int }', answer: 'type SafeCounter struct { mu sync.Mutex; m map[string]int }\nfunc (c *SafeCounter) Inc(k string) { c.mu.Lock(); defer c.mu.Unlock(); c.m[k]++ }\nfunc (c *SafeCounter) Get(k string) int { c.mu.Lock(); defer c.mu.Unlock(); return c.m[k] }' },
      { level: '进阶', task: '用 RWMutex 实现线程安全缓存:多 goroutine 读取,偶尔更新。', hint: 'Get 用 RLock,Set 用 Lock', answer: 'type Cache struct { mu sync.RWMutex; data map[string]string }\nfunc (c *Cache) Get(k string) string { c.mu.RLock(); defer c.mu.RUnlock(); return c.data[k] }\nfunc (c *Cache) Set(k, v string) { c.mu.Lock(); defer c.mu.Unlock(); c.data[k] = v }' },
      { level: '挑战', task: '用 go test -race 验证:无锁计数器有 data race,加锁后消失。', hint: 'go test -race ./...', answer: '// 无锁版本:go test -race 会报 DATA RACE\n// 加锁版本:go test -race 无告警\n// CI 流程:go test -race ./...' },
    ],
  },

  // ═══════════════ Node 31: Context ═══════════════
  "KE30H2gRlo8ulc9WN7vIs": {
    mentalModel: 'context.Context 是任务派遣单——携带截止时间(deadline)、取消信号(你取消,所有人停工)、沿途贴纸(metadata 如 trace ID),从上级一层层往下传。每个领取任务的人(goroutine)都要检查"派遣单"(ctx.Done())是否过期或取消。',
    handsOn: [
      { title: 'context.WithCancel 取消传播', cmd: 'echo "package main; import (\"context\"; \"fmt\"; \"time\"); func worker(ctx context.Context, id int) { for { select { case <-ctx.Done(): fmt.Println(\"w\",id,\"cancelled\"); return; default: fmt.Println(\"w\",id,\"working\"); time.Sleep(100*time.Millisecond) } } }; func main() { ctx, cancel := context.WithCancel(context.Background()); go worker(ctx, 1); go worker(ctx, 2); time.Sleep(250*time.Millisecond); cancel(); time.Sleep(50*time.Millisecond) }" > /tmp/ctx1.go && go run /tmp/ctx1.go', output: 'w 1 working\nw 2 working\nw 1 working\nw 2 working\nw 1 cancelled\nw 2 cancelled', explain: 'WithCancel 返回 ctx 和 cancel。调用 cancel() 关闭 ctx.Done() channel,所有监听它的 goroutine 收到信号。cancel 后 ctx.Err() 返回 context.Canceled。' },
      { title: 'context.WithTimeout 超时控制', cmd: 'echo "package main; import (\"context\"; \"fmt\"; \"time\"); func slowOp(ctx context.Context) error { select { case <-time.After(2 * time.Second): fmt.Println(\"done\"); case <-ctx.Done(): return ctx.Err() }; return nil }; func main() { ctx, cancel := context.WithTimeout(context.Background(), 500*time.Millisecond); defer cancel(); if err := slowOp(ctx); err != nil { fmt.Println(\"failed:\", err) } }" > /tmp/ctx2.go && go run /tmp/ctx2.go', output: 'failed: context deadline exceeded', explain: 'WithTimeout 在指定时间后自动取消。defer cancel() 确保资源释放(防止 goroutine 泄漏)。ctx.Err() 返回 DeadlineExceeded。HTTP 请求自带 context(http.Request.Context())。' },
      { title: 'context.WithValue 传递请求级别元数据', cmd: 'echo "package main; import (\"context\"; \"fmt\"); type ctxKey string; func handler(ctx context.Context) { if v, ok := ctx.Value(ctxKey(\"traceID\")).(string); ok { fmt.Println(\"trace:\", v) } }; func main() { ctx := context.WithValue(context.Background(), ctxKey(\"traceID\"), \"abc-123\"); handler(ctx) }" > /tmp/ctx3.go && go run /tmp/ctx3.go', output: 'trace: abc-123', explain: 'WithValue 存储键值对。Key 必须是不导出的自定义类型(避免冲突),不能用 string。value 只传请求范围数据(trace ID、user ID),不传可选函数参数。context 不可变,WithValue 返回新 context。' },
    ],
    diagnosis: [
      { symptom: 'WithCancel 返回的 cancel 未调用导致 goroutine 泄漏', cause: 'context 生命周期结束时未调用 cancel,内部计时器和 goroutine 未释放。', fix: '始终使用 defer cancel()。WithTimeout 也要 cancel(虽然会自动取消,但及早释放资源)。go vet 检测未调用的 cancel。' },
      { symptom: 'context.Value 类型断言 panic 或取到错误类型', cause: 'key 类型冲突(两个库用相同 string key),取到错误的类型。', fix: '用不可导出自定义类型作 key:type ctxKey struct{}。value 只传请求范围数据。' },
      { symptom: 'context 作为结构体字段存储', cause: '将 context 作为 struct 持久字段而不是按需传递。', fix: 'context 应该作为函数第一个参数传递:func Do(ctx context.Context, arg Arg)。不要存储在 struct 中,不同请求需要不同 context。这是 Go 官方建议。' },
    ],
    exercises: [
      { level: '基础', task: '创建 1 秒超时 context,在 goroutine 中监听 ctx.Done(),验证超时收到信号。', hint: 'ctx, cancel := context.WithTimeout(...)', answer: 'ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)\ndefer cancel()\n<-ctx.Done()\nfmt.Println(ctx.Err()) // context deadline exceeded' },
      { level: '进阶', task: '实现函数接受 context,在 3 个操作中传递 ctx,任一失败或 ctx 取消则立即返回。', hint: '每个操作前 select { case <-ctx.Done(): return ctx.Err() }', answer: 'func doWork(ctx context.Context) error {\n    for _, task := range tasks {\n        select { case <-ctx.Done(): return ctx.Err(); default: }\n        if err := task(ctx); err != nil { return err }\n    }\n    return nil\n}' },
      { level: '挑战', task: '用 context.WithValue 实现 HTTP 中间件:注入 request ID,handler 中提取并记录日志。', hint: 'type requestIDKey struct{}', answer: 'type reqIDKey struct{}\nfunc middleware(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        ctx := context.WithValue(r.Context(), reqIDKey{}, uuid.New().String())\n        next.ServeHTTP(w, r.WithContext(ctx))\n    })\n}' },
    ],
  },

  // ═══════════════ Node 32: Testing ═══════════════
  "aM6kIKCSVhGpoXOyBz-KZ": {
    mentalModel: 'Go 测试像出厂质检——每个零件(函数)配质检报告(*_test.go),go test 一键全检。质检项写在"检测表格"(table-driven tests)里,每项包含输入、预期输出。所有项都过才算合格。内置测试框架,无需第三方工具。',
    handsOn: [
      { title: '编写和运行测试', cmd: 'mkdir -p /tmp/tdemo && echo "package main; import \"testing\"; func Add(a, b int) int { return a + b }; func TestAdd(t *testing.T) { if got := Add(1, 2); got != 3 { t.Errorf(\"Add(1,2) = %%d; want 3\", got) } }" > /tmp/tdemo/add_test.go && cd /tmp/tdemo && go mod init tdemo 2>/dev/null && go test -v', output: '=== RUN   TestAdd\n--- PASS: TestAdd (0.00s)\nPASS', explain: '测试文件 _test.go 结尾。Test 开头函数接受 *testing.T。go test 自动发现运行。t.Error 报错但继续;t.Fatal 立即停止。t.Helper() 标记辅助函数。' },
      { title: 'Table-Driven Tests(Go 惯用模式)', cmd: 'echo "package main; import \"testing\"; func Add(a, b int) int { return a + b }; func TestAddTable(t *testing.T) { tests := []struct { name string; a, b, want int }{ {\"pos\", 1, 2, 3}, {\"neg\", -1, -2, -3}, {\"zero\", 0, 0, 0} }; for _, tt := range tests { t.Run(tt.name, func(t *testing.T) { if got := Add(tt.a, tt.b); got != tt.want { t.Errorf(\"Add(%%d,%%d)=%%d; want %%d\", tt.a, tt.b, got, tt.want) } }) } }" > /tmp/tdemo/table_test.go && cd /tmp/tdemo && go test -v -run TestAddTable', output: '=== RUN   TestAddTable/pos\n=== RUN   TestAddTable/neg\n=== RUN   TestAddTable/zero\n--- PASS', explain: 'Table-Driven Tests 是 Go 最流行测试模式。测试用例放匿名结构体切片。t.Run 创建子测试,可独立运行:go test -run TestAddTable/zero。易添加用例和维护。' },
      { title: '测试覆盖率', cmd: 'cd /tmp/tdemo && go test -cover -coverprofile=coverage.out 2>&1 && go tool cover -func=coverage.out 2>&1 | tail -3', output: 'PASS\ncoverage: 100.0% of statements', explain: '-cover 显示覆盖率。-coverprofile 生成文件。go tool cover -html=coverage.out 浏览器可视化。100% 覆盖无 bug,但未覆盖代码肯定没测试。CI 设最低阈值。' },
    ],
    diagnosis: [
      { symptom: 'go test 没有运行任何测试', cause: '文件名不以 _test.go 结尾,或函数名不以 Test 开头,或文件不在正确的包中。', fix: 'xxx_test.go。函数:func TestXxx(t *testing.T)。外部测试包包名 xxx_test。go test ./... -v 查看输出。' },
      { symptom: 't.Error 后继续执行导致后续代码 panic', cause: 't.Error 不停止测试(t.Fatal 才停止),如果后续代码依赖前一步成功会 panic。', fix: '关键失败用 t.Fatalf。检查和失败后 return 提前退出:if err != nil { t.Fatal(err) }。' },
      { symptom: '子测试 t.Run 的闭包引用循环变量(Go 1.21 前)', cause: '循环变量复用,t.Run 闭包可能引用最终值。', fix: 'Go 1.22+ 自动修复。旧版:循环体开头 tt := tt。或将 tt 作为参数传入:t.Run(tt.name, func(t *testing.T) { use(tt) })。' },
    ],
    exercises: [
      { level: '基础', task: '写 Multiply 函数和测试,验证 2*3=6 和 0*5=0。', hint: 'func TestMultiply(t *testing.T)', answer: 'func Multiply(a, b int) int { return a * b }\nfunc TestMultiply(t *testing.T) {\n    if got := Multiply(2, 3); got != 6 { t.Errorf("got %d", got) }\n    if got := Multiply(0, 5); got != 0 { t.Errorf("got %d", got) }\n}' },
      { level: '进阶', task: '为字符串函数写 Table-Driven Test:空串、单字符、中文、特殊字符。', hint: 'tests := []struct{ name, in, want string }', answer: 'func TestReverse(t *testing.T) {\n    tests := []struct{ name, in, want string }{\n        {"empty", "", ""}, {"single", "a", "a"}, {"chinese", "你好", "好你"},\n    }\n    for _, tt := range tests {\n        t.Run(tt.name, func(t *testing.T) {\n            if got := reverse(tt.in); got != tt.want { t.Errorf("got %q want %q", got, tt.want) }\n        })\n    }\n}' },
      { level: '挑战', task: '用 testing/quick 进行随机测试:验证 Add(a,b) == Add(b,a) 交换律。', hint: 'func TestAddCommute(t *testing.T) { quick.Check(f, nil) }', answer: 'import "testing/quick"\nfunc TestAddCommute(t *testing.T) {\n    f := func(a, b int) bool { return Add(a, b) == Add(b, a) }\n    if err := quick.Check(f, nil); err != nil { t.Error(err) }\n}' },
    ],
  },

  // ═══════════════ Node 33: Benchmarking ═══════════════
  "EkbT6SYxSWCE9iHQimQvC": {
    mentalModel: 'Go benchmark 像秒表测速——同一段代码反复跑 N 次,测稳定的单次执行时间。Go 自动调整迭代次数(b.N)直到稳定,还能对比版本、分析内存分配。',
    handsOn: [
      { title: '编写和运行 Benchmark', cmd: 'mkdir -p /tmp/bdemo && echo "package main; import (\"strings\"; \"testing\"); func ConcatPlus(n int) string { s := \"\"; for i := 0; i < n; i++ { s += \"x\" }; return s }; func ConcatBuilder(n int) string { var b strings.Builder; for i := 0; i < n; i++ { b.WriteString(\"x\") }; return b.String() }; func BenchmarkPlus(b *testing.B) { for i := 0; i < b.N; i++ { ConcatPlus(100) } }; func BenchmarkBuilder(b *testing.B) { for i := 0; i < b.N; i++ { ConcatBuilder(100) } }" > /tmp/bdemo/bench_test.go && cd /tmp/bdemo && go mod init bdemo 2>/dev/null && go test -bench=. -benchmem 2>&1', output: 'BenchmarkPlus-8     30000   45000 ns/op   20000 B/op   100 allocs/op\nBenchmarkBuilder-8 5000000     250 ns/op     256 B/op    1 allocs/op', explain: 'Benchmark 函数以 Benchmark 开头,参数 *testing.B。b.N 框架自动调整。输出:迭代次数|耗时(ns/op)|内存分配(B/op)|分配次数(allocs/op)。Builder 比 + 快 180 倍,内存少 77 倍。' },
      { title: 'ResetTimer 排除 setup 时间', cmd: 'echo "package main; import (\"testing\"; \"time\"); func BenchmarkWithSetup(b *testing.B) { time.Sleep(10*time.Millisecond); b.ResetTimer(); for i := 0; i < b.N; i++ { _ = 1+1 }; b.StopTimer(); time.Sleep(10*time.Millisecond) }" > /tmp/bdemo/setup_test.go && cd /tmp/bdemo && go test -bench=WithSetup -benchtime=1000x', output: 'BenchmarkWithSetup-8  1000  0.3 ns/op', explain: 'b.ResetTimer() 重置计时器排除 setup 时间。b.StopTimer()/StartTimer() 控制计时。-benchtime=10s 或 -benchtime=1000x 指定时长/次数。-count=N 运行 N 次取平均。' },
      { title: '防止编译器优化掉 benchmark', cmd: 'echo "Go 编译器可能优化掉未使用的计算结果,导致 benchmark 显示 0 ns/op\\n解决:var result int; func BenchmarkX(b *testing.B) { var r int; for ... { r = ... }; result = r }\\n赋值给包级变量防止编译器优化掉整个计算"', output: '包级变量防止优化。Go 1.23+ 可用 testing.B.Loop() 新 API。', explain: '编译器可能检测到 benchmark 结果未使用,优化掉全部计算。解决方案:计算结果赋值给包级变量。' },
    ],
    diagnosis: [
      { symptom: 'benchmark 结果不稳定,每次运行差异很大', cause: '系统负载、CPU 频率变化(thermal throttling)、GC 干扰。', fix: '运行多次:go test -bench=. -count=10 | tee bench.txt。用 benchstat 工具分析。固定 CPU 频率,关闭省电模式。-benchtime 足够长以减少噪声。' },
      { symptom: 'benchmark 被优化掉,显示 0 ns/op', cause: '编译器检测到计算结果未使用,优化掉了整个循环。', fix: '赋值给包级变量:var Sink int; func Benchmark(b *testing.B) { var r int; for ... { r = ... }; Sink = r }。' },
      { symptom: 'benchmark 中 allocs/op 很大但代码无明显分配', cause: '看似简单的操作也可能触发内存分配(fmt.Println、interface 装箱、闭包逃逸)。', fix: '-benchmem 观察分配。用逃逸分析定位:go build -gcflags="-m"。fmt 打印是常见分配源,headless benchmark 避免。' },
    ],
    exercises: [
      { level: '基础', task: '写 benchmark 比较 strconv.Itoa 和 fmt.Sprintf 的性能。', hint: 'BenchmarkItoa vs BenchmarkSprintf', answer: 'func BenchmarkItoa(b *testing.B) { for i:=0;i<b.N;i++{ _=strconv.Itoa(123) } }\nfunc BenchmarkSprintf(b *testing.B) { for i:=0;i<b.N;i++{ _=fmt.Sprintf("%d",123) } }' },
      { level: '进阶', task: '用 -benchmem 对比 string 拼接 3 种方式:+, fmt.Sprintf, strings.Builder 的内存分配。', hint: 'go test -bench=. -benchmem', answer: 'func BenchmarkPlus(b *testing.B) { for i:=0;i<b.N;i++{ _ = "a"+"b"+"c" } }\nfunc BenchmarkBuilder(b *testing.B) { for i:=0;i<b.N;i++{ var bb strings.Builder; bb.WriteString("a"); bb.WriteString("b"); _=bb.String() } }' },
      { level: '挑战', task: 'benchmark 对比 Mutex、RWMutex、atomic 三种同步方式的并发性能。', hint: 'b.RunParallel + sync.Mutex / atomic', answer: 'func BenchmarkMutex(b *testing.B) { var mu sync.Mutex; var n int; b.RunParallel(func(pb *testing.PB) { for pb.Next() { mu.Lock(); n++; mu.Unlock() } }) }\nfunc BenchmarkAtomic(b *testing.B) { var n int64; b.RunParallel(func(pb *testing.PB) { for pb.Next() { atomic.AddInt64(&n, 1) } }) }' },
    ],
  },

  // ═══════════════ Node 34: JSON ═══════════════
  "R4TxsYBnxZ4fducqK1pQO": {
    mentalModel: 'encoding/json 是 Go 的翻译官——Go 结构体翻成 JSON(Marshal),JSON 翻回 Go 结构体(Unmarshal)。翻译依赖"标注"(struct tag)确定词汇对应。嵌套、可选字段、自定义格式都支持,但 omitempty 不认识"有意义的零值"。',
    handsOn: [
      { title: 'Marshal:结构体转 JSON', cmd: 'echo "package main; import (\"encoding/json\"; \"fmt\"); type User struct { Name string \\`json:\"name\"\\`; Age int \\`json:\"age,omitempty\"\\`; Pass string \\`json:\"-\"\\` }; func main() { u := User{Name: \"Alice\", Pass: \"secret\"}; d, _ := json.Marshal(u); fmt.Println(string(d)); u2 := User{Name: \"Bob\", Age: 25}; d2, _ := json.MarshalIndent(u2, \"\", \"  \"); fmt.Println(string(d2)) }" > /tmp/json1.go && go run /tmp/json1.go', output: '{"name":"Alice"}\n{\n  "name": "Bob",\n  "age": 25\n}', explain: 'json:"name" 指定 JSON 字段名。omitempty:零值时省略(Age=0 被省略)。json:"-" 完全忽略(密码)。MarshalIndent 生成格式化 JSON。omitempty 陷阱:无法区分"未设置"和"设为 0"。' },
      { title: 'Unmarshal:JSON 转结构体', cmd: 'echo "package main; import (\"encoding/json\"; \"fmt\"); type Config struct { Host string \\`json:\"host\"\\`; Port int \\`json:\"port\"\\` }; func main() { raw := \\`{\"host\": \"localhost\", \"port\": 8080, \"extra\": \"ignored\"}\\`; var cfg Config; json.Unmarshal([]byte(raw), &cfg); fmt.Printf(\"%%+v\\n\", cfg) }" > /tmp/json2.go && go run /tmp/json2.go', output: '{Host:localhost Port:8080}', explain: 'Unmarshal 忽略 JSON 中结构体无对应字段(默认)。json.Decoder.DisallowUnknownFields() 可报错。Unmarshal 可能返回部分结果+error。第二个参数必须是指针。' },
      { title: '自定义 MarshalJSON/UnmarshalJSON', cmd: 'echo "package main; import (\"encoding/json\"; \"fmt\"; \"time\"); type Event struct { Time time.Time \\`json:\"time\"\\` }; func main() { e := Event{Time: time.Now()}; d, _ := json.Marshal(e); fmt.Println(string(d)) }" > /tmp/json3.go && go run /tmp/json3.go', output: '{"time":"2009-11-10T23:00:00Z"}', explain: 'time.Time 自动序列化 RFC 3339 格式。因为它实现了 json.Marshaler(MarshalJSON) 和 json.Unmarshaler(UnmarshalJSON)。自定义类型实现这些接口可控制序列化。' },
    ],
    diagnosis: [
      { symptom: 'Unmarshal 后字段全是零值,但 JSON 明明有数据', cause: '结构体字段小写(unexported),json 包无法访问。或 tag 拼写/大小写不匹配 JSON key。', fix: '导出字段(大写)。JSON key 大小写敏感。检查 tag:`json:"field_name"`。用 DisallowUnknownFields 检测未匹配字段。' },
      { symptom: 'omitempty 省略了 int=0,但 0 是有效值', cause: 'omitempty 对数值类型:0 就是零值,被省略。', fix: '用指针:*int `json:"age,omitempty"`。nil 指针省略,非 nil(即使值=0)序列化。或用自定义类型+MarshalJSON。Go 2 或引入更灵活的 omitempty。' },
      { symptom: 'json.Unmarshal vs json.NewDecoder', cause: 'Unmarshal 读完整 []byte 到内存。NewDecoder 从 io.Reader 流式读取,适合大 JSON。', fix: 'HTTP 响应:json.NewDecoder(resp.Body).Decode(&v)。注意:Decoder 可能多读字节(影响 HTTP 连接复用)。流式用 Decoder.Token() 逐个处理。' },
    ],
    exercises: [
      { level: '基础', task: '定义结构体,用 json.Marshal 序列化,再 Unmarshal 反序列化,验证数据一致。', hint: 'json.Marshal + json.Unmarshal', answer: 'type Item struct { Name string \\`json:"name"\\`; Price float64 \\`json:"price"\\` }\nitem := Item{Name: "book", Price: 29.99}\ndata, _ := json.Marshal(item)\nvar item2 Item; json.Unmarshal(data, &item2)\nfmt.Println(item == item2) // true' },
      { level: '进阶', task: '处理字段可能是 string 也可能是 int 的 JSON:用 json.RawMessage 延迟解析。', hint: 'type Flexible struct { Value json.RawMessage }', answer: 'type Flexible struct { Value json.RawMessage \\`json:"value"\\` }\nvar f Flexible\njson.Unmarshal([]byte(\\`{\"value\": 123}\\`), &f)\n// 之后根据情况 Unmarshal f.Value 到具体类型' },
      { level: '挑战', task: '实现自定义类型,序列化为 base64 编码的 JSON 字符串(适合二进制数据)。', hint: 'type Base64Data []byte; MarshalJSON() ([]byte, error)', answer: 'type Base64Data []byte\nfunc (b Base64Data) MarshalJSON() ([]byte, error) { return json.Marshal(base64.StdEncoding.EncodeToString(b)) }\nfunc (b *Base64Data) UnmarshalJSON(data []byte) error { var s string; json.Unmarshal(data, &s); *b, _ = base64.StdEncoding.DecodeString(s); return nil }' },
    ],
  },

  // ═══════════════ Node 35: net/http ═══════════════
  "5VNh2U6BVRqSH6Uwlqv5r": {
    mentalModel: 'net/http 是 Go 现成的邮局——http.ListenAndServe 搭建邮局(服务器),http.HandleFunc 注册邮箱(路由),Request 是收到的信,ResponseWriter 是回信工具。不需要 Nginx/Apache,标准库就是生产级 HTTP 服务器。',
    handsOn: [
      { title: '最小 HTTP 服务器', cmd: 'echo "package main; import (\"fmt\"; \"net/http\"); func main() { http.HandleFunc(\"/\", func(w http.ResponseWriter, r *http.Request) { fmt.Fprintf(w, \"Hello %%s!\", r.URL.Path[1:]) }); fmt.Println(\"listening :8080\"); go http.ListenAndServe(\":8080\", nil); time.Sleep(100*time.Millisecond) }" > /tmp/http1.go && go run /tmp/http1.go & sleep 0.5; curl -s http://localhost:8080/World 2>/dev/null; kill %1 2>/dev/null', output: 'listening :8080\nHello World!', explain: 'HandleFunc 注册路由。ListenAndServe 启动服务器,nil=DefaultServeMux。每个请求在独立 goroutine 处理(handler 必须并发安全)。DefaultServeMux 用最长前缀匹配。' },
      { title: '自定义 Server 配置超时(生产必须!)', cmd: 'echo "package main; import (\"net/http\"; \"time\"); func main() { srv := &http.Server{ Addr: \":8081\", ReadTimeout: 5*time.Second, WriteTimeout: 5*time.Second, IdleTimeout: 30*time.Second }; println(\"configured\"); go srv.ListenAndServe(); time.Sleep(100*time.Millisecond) }" > /tmp/http2.go && go run /tmp/http2.go 2>&1 & sleep 0.5; kill %1 2>/dev/null', output: 'configured', explain: '默认 ListenAndServe 无超时! 恶意客户端可慢读慢写耗尽资源。生产环境必须设置 ReadTimeout(读整个请求超时)、WriteTimeout(写响应超时)、IdleTimeout(Keep-Alive 空闲超时)。' },
      { title: '中间件模式(Go HTTP 核心)', cmd: 'echo "package main; import (\"fmt\"; \"log\"; \"net/http\"; \"time\"); func loggingMid(next http.Handler) http.Handler { return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) { start := time.Now(); next.ServeHTTP(w, r); log.Printf(\"%%s %%s %%s\", r.Method, r.URL.Path, time.Since(start)) }) }; func main() { mux := http.NewServeMux(); mux.HandleFunc(\"/hello\", func(w http.ResponseWriter, r *http.Request) { fmt.Fprintln(w, \"hi\") }); http.ListenAndServe(\":8082\", loggingMid(mux)) }" > /tmp/http3.go && go run /tmp/http3.go & sleep 0.5; curl -s http://localhost:8082/hello 2>/dev/null; kill %1 2>/dev/null', output: 'hi', explain: '中间件:一个 Handler 包装另一个 Handler。在调用 next.ServeHTTP 前后记录日志、认证、CORS、panic 恢复等。http.TimeoutHandler 是标准库提供的中间件。Go 1.22+ NewServeMux 支持方法+通配符路由。' },
    ],
    diagnosis: [
      { symptom: '服务器启动后第一个请求非常慢', cause: 'DNS 解析延迟、反向代理的初始化或 tcp 连接 backlog。', fix: '检查 ListenAndServe 返回 error:if err := srv.ListenAndServe(); err != nil { log.Fatal(err) }。端口<1024 需 sudo。检查防火墙。' },
      { symptom: 'DefaultServeMux 路由匹配行为意外', cause: '默认使用最长前缀匹配。/foo/ 匹配 /foo/bar,但 /foo 不匹配 /foo/。', fix: '用 http.NewServeMux()(Go 1.22+):mux.HandleFunc("GET /items/{id}", handler)。旧版用 gorilla/mux 或 chi。' },
      { symptom: 'ResponseWriter 在 handler 返回后写入导致 panic', cause: 'handler 中启动 goroutine 写响应,handler 返回后 ResponseWriter 失效。', fix: 'handler 返回后 ResponseWriter 不可用。如需异步,在 handler 返回前完成 write。或用 channel 同步。' },
    ],
    exercises: [
      { level: '基础', task: '创建 HTTP 服务器,监听 8080,处理 /ping 返回 "pong"。', hint: 'http.HandleFunc + ListenAndServe', answer: 'http.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) { w.Write([]byte("pong")) })\nhttp.ListenAndServe(":8080", nil)' },
      { level: '进阶', task: '创建自定义 http.Server,设置 ReadTimeout/WriteTimeout/IdleTimeout 为合理值。', hint: '&http.Server{ Addr, ReadTimeout, WriteTimeout, IdleTimeout }', answer: 'srv := &http.Server{\n    Addr: \":8080\", ReadTimeout: 10*time.Second,\n    WriteTimeout: 10*time.Second, IdleTimeout: 60*time.Second,\n}\nsrv.ListenAndServe()' },
      { level: '挑战', task: '实现日志中间件 + panic 恢复中间件,链式组合到同一个 handler。', hint: 'recoverMiddleware(loggingMiddleware(handler))', answer: 'func recoverMid(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        defer func() { if err := recover(); err != nil { log.Printf("panic: %v", err); http.Error(w, "500", 500) } }()\n        next.ServeHTTP(w, r)\n    })\n}\nhandler := recoverMid(loggingMid(mux))' },
    ],
  },

};
