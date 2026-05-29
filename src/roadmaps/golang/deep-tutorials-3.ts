import type { DeepTutorial } from '../deep-types';

export const GOLANG_DEEP_TUTORIALS_3: Record<string, DeepTutorial> = {
  'z8-8nt-3GA7uN-cvOI-Qn': {
    mentalModel: 'Go 函数参数传递像传真机——接收方拿复印件，改不了原件。',
    sections: [
      { title: '值传递语义', content: 'Go 一切参数都是值传递。基本类型、数组、struct 拷贝整个值。slice/map/chan 拷贝 header。指针拷贝地址值。没有引用传递。' },
      { title: '避免大对象拷贝', content: '传指针代替大 struct。slice 头 24 字节。string 头 16 字节。map 和 chan 也是拷贝头。' },
    ],
    diagnosis: [{ symptom: '函数内改了参数但外面没变', cause: 'Go 是值传递，函数内修改的是副本', fix: '改 slice 元素须传指针或返回新值。struct 字段须指针接收者。' }],
    exercises: [
      { level: '基础', task: '实现交换函数对比值传递与指针传递', hint: 'func swap(a,b int)不生效', answer: 'func swap(a,b *int){*a,*b=*b,*a}' },
      { level: '进阶', task: '对比传切片和传数组行为差异', hint: '[]int vs [5]int', answer: 'func modSlice(s[]int){s[0]=999};func modArray(a[5]int){a[0]=999}' },
    ],
  },
  'ItMgLOzaUCCdiTk221pAF': {
    mentalModel: 'Go 内存管理像宾馆保洁——自动打扫、自动分类、不用给小费。',
    sections: [
      { title: '栈 vs 堆分配', content: '编译器通过逃逸分析决定栈还是堆。局部变量不逃逸放栈自动回收。逃逸放堆 GC 负责。查看逃逸：go build -gcflags=-m。' },
      { title: 'GC 调优', content: 'GOGC 控制频率(默认100)。GOGC=off 关闭 GC。GOMEMLIMIT 软上限。runtime.ReadMemStats 读统计。pprof 分析热点。' },
    ],
    diagnosis: [{ symptom: '函数返回局部变量地址却没挂', cause: '逃逸分析检测到逃逸自动分配堆上', fix: 'func newInt()*int{x:=42;return &x} 输出 escapes to heap' }],
    exercises: [
      { level: '基础', task: '用 gcflags 分析变量逃逸', hint: 'go build -gcflags=-m', answer: 'go build -gcflags=-m 2>&1|grep escapes' },
      { level: '进阶', task: '分析 struct 方法返回字段指针是否逃逸', hint: 'go build -gcflags=-m', answer: 'type User struct{Name string};func(u*User)NamePtr()*string{return &u.Name}' },
    ],
  },
  '9EdDI0vJaEmz3XxXMrpX9': {
    mentalModel: '为什么泛型？max 函数在 int/float64/string 复用，不用粘贴三遍。',
    sections: [
      { title: '泛型前痛点', content: '每类型写一套。interface{} + 断言又慢又丢安全。代码生成维护成本高。反射开销不安全。' },
      { title: '泛型红利', content: 'Go 1.18:func Max[T cmp.Ordered](a,b T)T。类型安全编译检查。零开销单态化。slices/maps 泛型包。' },
    ],
    diagnosis: [{ symptom: 'Go 1.17 只能写多套 Max', cause: '无泛型每类型写一份', fix: '升级 Go 1.18+ 用泛型或 go generate。' }],
    exercises: [
      { level: '基础', task: '用 interface{} 实现通用 Max', hint: '类型断言+switch', answer: 'func Max(a,b interface{})interface{}{switch a.(type){case int:if a.(int)>b.(int){return a}};return b}' },
      { level: '进阶', task: '用泛型重写 Max', hint: 'func Max[T cmp.Ordered](a,b T)T', answer: 'func Max[T cmp.Ordered](a,b T)T{if a>b{return a};return b}' },
    ],
  },
  'GG0j6MNVudvITHEOXUxim': {
    mentalModel: 'Go 垃圾回收像隐形管家——感觉不到但默默收拾不用东西。',
    sections: [
      { title: '三色标记法', content: 'GC:1.STW扫描 2.并发标记(白/灰/黑) 3.并发清除。写屏障保证并发。Go 1.5混合写屏障 STW<1ms。' },
      { title: 'GC触发条件', content: '分配达阈值(GOGC)。runtime.GC()手动。每2分钟强制一次。GOMEMLIMIT 内存上限触发。' },
    ],
    diagnosis: [{ symptom: '服务偶尔数百毫秒延迟', cause: 'GC STW——大堆或频繁 GC', fix: '减少堆分配：sync.Pool、预分配、值类型。调高 GOGC。' }],
    exercises: [
      { level: '基础', task: '用 runtime 查看 GC 状态', hint: 'runtime.ReadMemStats', answer: 'var ms runtime.MemStats;runtime.ReadMemStats(&ms);fmt.Printf("GC:%d",ms.NumGC)' },
      { level: '进阶', task: '用 GODEBUG=gctrace=1 观察 GC', hint: 'GODEBUG=gctrace=1 go run', answer: 'GODEBUG=gctrace=1 go run main.go' },
    ],
  },
  'p7L4EUsjMnJlrbb-oDvlf': {
    mentalModel: '泛型函数像通用模具——一个模板适配多种类型，编译时按需生产。',
    sections: [
      { title: '基本语法', content: 'func Print[T any](s[]T){for _,v:=range s{fmt.Println(v)}}。方括号类型参数。any=interface{}。调用可类型推断。' },
      { title: '类型约束', content: 'any=无约束。constraints.Ordered=可排序。Number interface{~int|~float64}。~int 接受 MyInt。' },
    ],
    diagnosis: [{ symptom: '泛型函数编译多版本膨胀', cause: '编译期单态化每类型一份', fix: '大多数可接受。极度敏感用 interface。' }],
    exercises: [
      { level: '基础', task: '写泛型 Print', hint: 'func Print[T any](s[]T)', answer: 'func Print[T any](s[]T){for _,v:=range s{fmt.Println(v)}}' },
      { level: '进阶', task: '写泛型 Find 返回索引', hint: 'func Find[T comparable](s[]T,t T)int', answer: 'func Find[T comparable](s[]T,t T)int{for i,v:=range s{if v==t{return i}};return-1}' },
    ],
  },
  'eWZzradMaH57H4mI7Qw6n': {
    mentalModel: '泛型类型和接口像通用转接头——Stack[T]存任何类型。',
    sections: [
      { title: '泛型类型', content: 'type Stack[T any]struct{items[]T}。方法有类型参数。Pair[K comparable,V any]struct{Key K;Val V}。' },
      { title: '泛型接口', content: 'type Less[T any]interface{Less(T)bool}。泛型接口需实例化。Sorter[T any]interface{Sort([]T)}。' },
    ],
    diagnosis: [{ symptom: '非泛型 struct 定义泛型方法编译错', cause: 'Go 不允许非泛型类型方法带独立类型参数', fix: '让 struct 泛型：type Service[T any]struct{}。' }],
    exercises: [
      { level: '基础', task: '实现泛型 Stack:Push/Pop', hint: 'type Stack[T any]struct{items[]T}', answer: 'func(s*Stack[T])Push(v T){s.items=append(s.items,v)};func(s*Stack[T])Pop()T{v:=s.items[len(s.items)-1];s.items=s.items[:len(s.items)-1];return v}' },
      { level: '进阶', task: '实现泛型 Set[T comparable]', hint: 'map[T]struct{}', answer: 'type Set[T comparable]struct{m map[T]struct{}};func(s*Set[T])Add(v T){s.m[v]=struct{}{}};func(s*Set[T])Has(v T)bool{_,ok:=s.m[v];return ok}' },
    ],
  },
  '6NKgb-OjGdT3QsMrDU05b': {
    mentalModel: '指针接收者改原struct避免拷贝。值接收者只读天然安全。',
    sections: [
      { title: '语法语义', content: 'func(u*User)SetName——指针接收。func(u User)Name——值接收。指针改原值。指针可收*T和T。值可收T和*T。' },
      { title: '选择指南', content: '改接收者>指针。避免大拷贝>指针。一致性全指针。并发安全>值。小不可变>值。' },
    ],
    diagnosis: [{ symptom: '值接收者方法改字段没生效', cause: '值接收者是副本', fix: '改为指针：func(u*User)SetName(n string){u.Name=n}' }],
    exercises: [
      { level: '基础', task: '对比值/指针接收效果', hint: '(u User)vs(u*User)', answer: 'type C struct{n int};func(c C)IncV(){c.n++};func(c*C)IncP(){c.n++}' },
      { level: '进阶', task: '实现不可变 Money 值接收', hint: '(m Money)Add(o Money)Money', answer: 'type Money struct{c int64};func(m Money)Add(o Money)Money{return Money{m.c+o.c}}' },
    ],
  },
  '8o6A2kGnupGYaaTwgsTDp': {
    mentalModel: '类型约束告诉编译器——泛型只接受可比较、可排序或满足接口的类型。',
    sections: [
      { title: '约束语法', content: '[T any]=无约束。[T interface{~int|~float64}]=联合。[T cmp.Ordered]=可排序。[T io.Reader]=接口。' },
      { title: '联合与近似', content: '|联合：int|float64。~T匹配底层类型。comparable=可==比较。' },
    ],
    diagnosis: [{ symptom: '自定义约束写错', cause: 'int|float64不是正确语法', fix: '用[T interface{int|float64}]或[T~int|~float64]。' }],
    exercises: [
      { level: '基础', task: '写 Sum 只接受 int/float64', hint: '[T interface{int|float64}]', answer: 'func Sum[T interface{int|float64}](nums[]T)T{var t T;for _,n:=range nums{t+=n};return t}' },
      { level: '进阶', task: '定义 Number 约束含别名', hint: 'type Number interface{~int64|~float64}', answer: 'type Number interface{~int64|~float64};type MyInt int64;func Add[T Number](a,b T)T{return a+b}' },
    ],
  },
  '99a4irV044ybZN-boMgHv': {
    mentalModel: '值接收者是方法只读模式——不修改原值、天然并发安全。',
    sections: [
      { title: '语法', content: 'func(u User)Greet()string。值接收者接受T和*T。不修改接收者用值。int/string/time.Time用值。' },
      { title: '并发安全', content: '值接收操作副本天然无竞态。多goroutine不需锁。适合不可变类型。含Mutex必须指针。' },
    ],
    diagnosis: [{ symptom: 'struct加Mutex作值接收锁被拷贝', cause: '值接收者拷贝整个struct', fix: '加锁struct必须指针接收。sync原语必须指针。' }],
    exercises: [
      { level: '基础', task: '给Point实现值接收Distance', hint: 'func(p Point)Distance()float64', answer: 'type Point struct{X,Y float64};func(p Point)Distance()float64{return math.Sqrt(p.X*p.X+p.Y*p.Y)}' },
      { level: '进阶', task: '实现不可变Duration方法链', hint: '返回新Duration', answer: 'type Duration struct{n int64};func(d Duration)Add(o Duration)Duration{return Duration{d.n+o.n}}' },
    ],
  },
  'nkONsPlFYCMqzWHTm_EPB': {
    mentalModel: '接口基础像签合同——列出需要什么方法，任何能提供的类型自动签约。',
    sections: [
      { title: '隐式实现', content: 'type Stringer interface{String()string}。有 String()string 自动实现。不需要 implements。鸭子类型。' },
      { title: '接口值内部', content: '接口值(type,value)对。nil 接口=type=nil,value=nil。有类型但 nil 值的接口!=nil——经典坑。' },
    ],
    diagnosis: [{ symptom: '判断接口 nil 但 !=nil 返回 true', cause: 'type不为nil但value nil时接口!=nil', fix: 'var w io.Writer;var b*bytes.Buffer;w=b;w!=nil(type=*bytes.Buffer)' }],
    exercises: [
      { level: '基础', task: '定义Speaker让Dog和Cat实现', hint: 'type Speaker interface{Speak()string}', answer: 'type Speaker interface{Speak()string};type Dog struct{};func(d Dog)Speak()string{return"Woof"}' },
      { level: '进阶', task: '解释接口 nil 判断经典坑', hint: 'var w io.Writer;w=(*bytes.Buffer)(nil)', answer: 'w!=nil! type=*bytes.Buffer,value=nil。接口nil需type和value都nil。' },
    ],
  },
  '36gt0FmNDxuIIV47aqBeH': {
    mentalModel: '类型推断是Go编译器智能推断——泛型调用不用写[int]，从参数自动推出T。',
    sections: [
      { title: '推断规则', content: 'func Max[T cmp.Ordered](a,b T)T。Max(3,5)推断T=int。Max(3.14,2.71)推断T=float64。无法推断需显式。' },
      { title: '局限性', content: '不能从返回值推断只从参数。Convert[From,To any](f From)To需显式To。' },
    ],
    diagnosis: [{ symptom: 'New[T any]()T调用New()编译失败', cause: '无法从参数推断T', fix: '显式指定：New[int]()。或加dummy参数。' }],
    exercises: [
      { level: '基础', task: '写泛型First[T any](s[]T)T省去类型参数', hint: '从参数推断', answer: 'func First[T any](s[]T)T{return s[0]};First([]int{1,2,3})' },
      { level: '进阶', task: '写Convert[From,To any]显式To', hint: '返回值类型需显式', answer: 'func Convert[From,To any](f From)To{return any(f).(To)};Convert[int,string](42)' },
    ],
  },
  'ueJ7ndK2SKniDVjN2aUlO': {
    mentalModel: '空接口interface{}(别名any)是万能容器——任何值都能装，取出要断言。',
    sections: [
      { title: '空接口=any', content: 'var x any="hello"任何类型可赋值。Go 1.18起 any=interface{}别名。fmt.Println参数...any。' },
      { title: '使用场景', content: 'json.Unmarshal接收any。context.WithValue的k/v都是any。sync.Map的k/v是any。泛型前唯一通用容器。' },
    ],
    diagnosis: [{ symptom: '从any取出每次都要断言', cause: 'any不保留编译时类型', fix: '用type switch或用泛型替代。' }],
    exercises: [
      { level: '基础', task: '用any存储不同类型type switch取出', hint: 'switch v:=x.(type)', answer: 'items:=[]any{42,"hello",3.14};for _,it:=range items{switch v:=it.(type){case int:fmt.Println(v)}}' },
      { level: '进阶', task: '用泛型替代any提升安全', hint: 'func Map[T,U any](arr[]T,fn func(T)U)[]U', answer: 'func Map[T,U any](arr[]T,fn func(T)U)[]U{r:=make([]U,len(arr));for i,v:=range arr{r[i]=fn(v)};return r}' },
    ],
  },
  'wK7GNTbOsMNs0N_1N4-dU': {
    mentalModel: '接口嵌入像接口版struct嵌入——小接口拼成大接口。',
    sections: [
      { title: '嵌入语法', content: 'type ReadWriter interface{io.Reader;io.Writer}。自动继承所有方法。接口只能嵌接口。可嵌多个组合。' },
      { title: '标准库实践', content: 'io.Reader(Read)、io.Writer(Write)、io.Closer(Close)。io.ReadWriter=Reader+Writer。io.ReadWriteCloser=三者组合。' },
    ],
    diagnosis: [{ symptom: '嵌入接口有同名方法编译错', cause: '编译器不知用哪个', fix: '显式外层定义覆盖。或重构职责更单一。' }],
    exercises: [
      { level: '基础', task: '嵌入io.Reader和io.Writer组合', hint: 'type ReadWriter interface{io.Reader;io.Writer}', answer: 'type ReadWriter interface{io.Reader;io.Writer}' },
      { level: '进阶', task: '定义Logger嵌入io.Closer+Log', hint: 'type Logger interface{io.Closer;Log(string)}', answer: 'type Logger interface{io.Closer;Log(msg string)error}' },
    ],
  },
  'uEpTANOBHlFwCg5p44Lh0': {
    mentalModel: 'Go 1.18泛型——十年等待，类型安全、零开销、向后兼容。',
    sections: [
      { title: '泛型总览', content: '类型参数：[T any]。类型约束：interface{~int|~float64}。泛型函数/类型。类型推断。' },
      { title: '设计取舍', content: '编译期单态化。无类型擦除。any替代interface{}。不持方法泛型。不持运算符泛型。' },
    ],
    diagnosis: [{ symptom: '泛型代码二进制大很多', cause: '编译期单态化每类型一份', fix: '大多数影响小。极度敏感用any+switch。' }],
    exercises: [
      { level: '基础', task: '用泛型写Contains', hint: 'func Contains[T comparable](s[]T,v T)bool', answer: 'func Contains[T comparable](s[]T,v T)bool{for _,x:=range s{if x==v{return true}};return false}' },
      { level: '进阶', task: '用泛型实现Filter', hint: 'func Filter[T any](s[]T,fn func(T)bool)[]T', answer: 'func Filter[T any](s[]T,fn func(T)bool)[]T{r:=make([]T,0,len(s));for _,v:=range s{if fn(v){r=append(r,v)}};return r}' },
    ],
  },
  'hIRMnPyHRGh8xCU8BTS2n': {
    mentalModel: '接口是Go最强大的抽象——不绑定具体类型，只关心能做什么。',
    sections: [
      { title: '接口即契约', content: '接口定义行为(方法集)不关心数据。隐式实现。接口值(type,value)对。接口值可比较。' },
      { title: '接口设计原则', content: '接口要小——SMI。io.Reader(1方法)。组合小接口成大。接受接口返回结构体。使用方定义。' },
    ],
    diagnosis: [{ symptom: '大而全接口实现负担重', cause: '接口应小而精', fix: '拆多个小接口嵌入组合。接口隔离原则。' }],
    exercises: [
      { level: '基础', task: '定义Payment接口', hint: 'type Payment interface{Pay(float64)error}', answer: 'type Payment interface{Pay(a float64)error};type CC struct{};func(c CC)Pay(a float64)error{return nil}' },
      { level: '进阶', task: '用io.Reader写接受任何可读源的函数', hint: 'func readAll(r io.Reader)([]byte,error)', answer: 'func readAll(r io.Reader)([]byte,error){return io.ReadAll(r)}' },
    ],
  },
  '4EJ4WnH2HA3ci2uoqmNex': {
    mentalModel: '类型断言像拆盲盒——从interface{}取出具体类型，拆对拿到拆错panic或false。',
    sections: [
      { title: '断言语法', content: 'v:=x.(int)不是则panic。v,ok:=x.(int)安全。只对接口类型可用。断言后v类型是int。' },
      { title: '断言 vs type switch', content: '单类型用断言(comma-ok)。多类型用type switch。type switch中v自动转匹配类型。' },
    ],
    diagnosis: [{ symptom: '对非接口类型断言编译错', cause: '断言要求操作数是接口类型', fix: '用类型转换：int(x)而非x.(int)。' }],
    exercises: [
      { level: '基础', task: '用comma-ok安全断言string', hint: 'v,ok:=x.(string)', answer: 'var x any="hello";if v,ok:=x.(string);ok{fmt.Println(v)}' },
      { level: '进阶', task: '实现函数提取接口中的数字', hint: 'type switch', answer: 'func extract(x any)(float64,error){switch v:=x.(type){case int:return float64(v),nil;case float64:return v,nil};return 0,fmt.Errorf("not num")}' },
    ],
  },
  '6r9XbwlBtHmJrhviG2cTD': {
    mentalModel: 'type switch像多车道收费站——每种类型对应一条车道。',
    sections: [
      { title: '语法', content: 'switch v:=x.(type){case int:...case string:...default:...}。v自动转匹配类型。case可多类型。' },
      { title: '与普通switch对比', content: 'type switch关键字.(type)。case后是类型非值。v类型在不同case不同。' },
    ],
    diagnosis: [{ symptom: 'type switch中v自动匹配类型', cause: 'Go在case块中赋匹配类型', fix: '无需再断言。case int:v is int;case string:v is string' }],
    exercises: [
      { level: '基础', task: '用type switch处理JSON解析后any', hint: 'json.Unmarshal返回map[string]any', answer: 'func desc(x any)string{switch v:=x.(type){case string:return v;case float64:return fmt.Sprintf("%f",v);case nil:return"null"};return"unknown"}' },
      { level: '进阶', task: '递归遍历interface{}打印叶子', hint: '递归type switch', answer: 'func leaves(x any){switch v:=x.(type){case map[string]any:for _,val:=range v{leaves(val)};case[]any:for _,it:=range v{leaves(it)};default:fmt.Println(v)}}' },
    ],
  },
  'zWXJOXo8dRnuTvYlWOL6r': {
    mentalModel: 'go mod init是起航第一步——给项目起名，依赖管理有根。',
    sections: [
      { title: '命令解析', content: 'go mod init github.com/you/project创建go.mod。路径用仓库URL。任意目录执行。' },
      { title: '命名实践', content: '仓库路径：github.com/user/proj。全小写。-分隔。版本号不在路径(用tag)。' },
    ],
    diagnosis: [{ symptom: 'go mod init用了不匹配路径', cause: 'go mod init myproject想发布到github.com/user/myproject', fix: '用go mod edit -module修改。' }],
    exercises: [
      { level: '基础', task: '创建新模块查看go.mod', hint: 'go mod init hello&&cat go.mod', answer: 'go mod init hello;cat go.mod' },
      { level: '进阶', task: '为github仓库创建模拟路径', hint: 'go mod init github.com/myuser/myproject', answer: 'go mod init github.com/myuser/myproject' },
    ],
  },
  '7EKUfKx7_7lZOs3d84iyL': {
    mentalModel: '错误处理基础是Go特色——不用try-catch，错误是普通值，显式检查传递。',
    sections: [
      { title: 'error接口', content: 'type error interface{Error()string}。errors.New(msg)创建。fmt.Errorf格式化。nil=无错误。' },
      { title: '处理模式', content: 'if err!=nil{return err}最常见。if err!=nil{return fmt.Errorf("ctx:%w",err)}包装。errors.Is/As判断。' },
    ],
    diagnosis: [{ symptom: 'err被多次赋值覆盖', cause: '每次调用产新err', fix: 'if result,err:=foo();err!=nil{...}每次:=新err。' }],
    exercises: [
      { level: '基础', task: '创建自定义错误实现error', hint: 'type MyError struct{...}', answer: 'type MyError struct{Code int;Msg string};func(e*MyError)Error()string{return fmt.Sprintf("code %d:%s",e.Code,e.Msg)}' },
      { level: '进阶', task: '用errors.Is判断类型', hint: 'errors.Is(err,ErrNotFound)', answer: 'var ErrNotFound=errors.New("not found");err:=fmt.Errorf("get:%w",ErrNotFound);errors.Is(err,ErrNotFound)' },
    ],
  },
  '6rwVq1bMSHoGatEfm9hkp': {
    mentalModel: 'go mod tidy像自动保洁——把依赖下载好不用的清理掉。',
    sections: [
      { title: '作用和场景', content: '下载go.sum缺失。移除未用依赖。添加间接依赖。CI/CD必须。拉新代码后执行。' },
      { title: '与go mod download区别', content: 'tidy修改go.mod+go.sum。download仅下载。tidy更保险。download适合Docker缓存。' },
    ],
    diagnosis: [{ symptom: 'go mod tidy后多了indirect', cause: 'indirect=非直接导入的依赖', fix: 'indirect标签正常。v1.17+直接依赖也可标indirect。不影响。' }],
    exercises: [
      { level: '基础', task: 'git clone后go mod tidy', hint: 'go mod tidy', answer: 'git clone proj;cd proj;go mod tidy;go build' },
      { level: '进阶', task: '引入新依赖后go mod tidy', hint: 'go get+go mod tidy', answer: 'go get github.com/go-chi/chi/v5;go mod tidy' },
    ],
  },
  'kep_536v13aS1V9XwHKSr': {
    mentalModel: '模块和依赖是Go生命线——go.mod管版本、go.sum防篡改。',
    sections: [
      { title: '模块系统', content: 'go.mod是模块定义。require声明依赖。indirect间接。replace替换。exclude排除。' },
      { title: 'MVS最小版本选择', content: 'Go不用最新——用满足约束的最低版本。A要v1.2+B要v1.3+选v1.3。稳定性>新鲜度。' },
    ],
    diagnosis: [{ symptom: '两个依赖需不同主版本同包', cause: '模块路径区分主版本v2后缀', fix: 'v2+必须在module path：module github.com/foo/v2' }],
    exercises: [
      { level: '基础', task: '查看go.mod结构', hint: 'cat go.mod', answer: 'module github.com/my/app;go 1.22;require(gin v1.9.1)' },
      { level: '进阶', task: '用replace本地替换依赖', hint: 'replace=>', answer: 'go.mod:replace github.com/my/lib=>../lib' },
    ],
  },
  '0mMP6QR0V-Zi25njD1TFT': {
    mentalModel: 'error接口是Go最简单接口——只有一个Error()string，撑起整个错误体系。',
    sections: [
      { title: '接口定义', content: 'type error interface{Error()string}。在builtin包预声明。任何有Error()string的是error。nil=无错误。' },
      { title: '自定义error', content: 'type MyError struct{Code int;Msg string}。Error()string。附加字段。errors.As提取。' },
    ],
    diagnosis: [{ symptom: 'Error()返回中文乱码', cause: '终端不支持UTF-8', fix: '确保UTF-8。或Error()返ASCII信息。' }],
    exercises: [
      { level: '基础', task: '用errors.New和fmt.Errorf', hint: 'errors.New+fmt.Errorf', answer: 'e1:=errors.New("not found");e2:=fmt.Errorf("user %d:%s",42,e1)' },
      { level: '进阶', task: '实现BusinessError配合errors.As', hint: 'errors.As(err,&target)', answer: 'type BizErr struct{Code int;Msg string};func(e*BizErr)Error()string{return fmt.Sprintf("[%d]%s",e.Code,e.Msg)}' },
    ],
  },
  'jOiAk5coeDNVXP2QiwQis': {
    mentalModel: 'go mod vendor把依赖下载到vendor——离线构建、CI加速。',
    sections: [
      { title: 'vendor目录', content: 'go mod vendor创建vendor/。-mod=vendor优先用vendor。不需网络构建。' },
      { title: 'vendor vs cache', content: 'vendor项目内部跟仓库。cache全局不跟仓库。vendor可复现。cache省空间。' },
    ],
    diagnosis: [{ symptom: 'go mod vendor后仓库多几千文件', cause: 'vendor含所有依赖源码', fix: '团队协议是否入仓库。不入加.gitignore vendor/。' }],
    exercises: [
      { level: '基础', task: '用go mod vendor生成', hint: 'go mod vendor', answer: 'go mod vendor;ls vendor/' },
      { level: '进阶', task: '对比go build用/不用vendor速度', hint: 'go build vs -mod=vendor', answer: 'go mod vendor;time go build -mod=vendor' },
    ],
  },
  'AcYzrGFrwmeVYFEfhEiSZ': {
    mentalModel: '包是Go代码天然边界——一个目录一个包，大写导出小写私密。',
    sections: [
      { title: '包的基础', content: '每文件首行package<name>。同目录同package。main包可执行。包名小写简短。' },
      { title: '导入规则', content: 'import路径末段是包名。别名：import x path。_导入只执行init。循环导入编译错。' },
    ],
    diagnosis: [{ symptom: '目录名和package名不一致', cause: '目录路径末段通常=package名不强制', fix: '推荐一致。main包目录名可不叫main。' }],
    exercises: [
      { level: '基础', task: '创建两文件包互相调用', hint: 'package shared/file1+file2', answer: '//file1:package shared;var C int; //file2:package shared;func Inc(){C++}' },
      { level: '进阶', task: '演示循环导入并修复', hint: 'A imports B,B imports A', answer: '提取公共接口到shared包。或用interface在A中定义B实现。' },
    ],
  },
  'dHk6Y0zFqxtCuDiQcHQsi': {
    mentalModel: 'errors.New制造最纯粹错误——"某某错了"，不带额外信息。',
    sections: [
      { title: '基本用法', content: 'errors.New("something wrong")返回error。*errors.errorString指针。同消息不等(地址不同)。' },
      { title: '哨兵错误', content: 'var ErrNotFound=errors.New("not found")导出变量。errors.Is(err,ErrNotFound)判断。' },
    ],
    diagnosis: [{ symptom: '==比较两个errors.New不等', cause: '每次返回新指针地址不同', fix: '用errors.Is而非==。errors.Is检查错误链值相等。' }],
    exercises: [
      { level: '基础', task: '创建哨兵错误在函数中使用', hint: 'var ErrX=errors.New(...)', answer: 'var ErrNotFound=errors.New("not found");func get(id int)error{return fmt.Errorf("get %d:%w",id,ErrNotFound)}' },
      { level: '进阶', task: '用errors.Is判断错误链中哨兵', hint: 'errors.Is(err,ErrNotFound)', answer: 'err:=get(-1);if errors.Is(err,ErrNotFound){fmt.Println("missing")}' },
    ],
  },
  'LVaWjZfij6-z_uwkAc0MK': {
    mentalModel: 'fmt.Errorf从Go 1.13支持错误包装——%w把原错误夹心包进新错误。',
    sections: [
      { title: '格式化错误', content: 'fmt.Errorf("fail:%v",err)旧方式丢失。fmt.Errorf("fail:%w",err)保留链。一个error最多一%w。' },
      { title: '错误链操作', content: 'errors.Is沿%w链查找。errors.As沿链查找类型。errors.Unwrap取下层。Go 1.20+多错误。' },
    ],
    diagnosis: [{ symptom: '用%v而非%w找不到原错误', cause: '%v文本化丢失引用', fix: '改%w：fmt.Errorf("ctx:%w",err)。%w保留原始错误。' }],
    exercises: [
      { level: '基础', task: '用%w包装后用errors.Is判断', hint: 'fmt.Errorf("...%w...",orig)', answer: 'err:=fmt.Errorf("wrap:%w",errors.New("root"));errors.Is(err,errors.New("root"))' },
      { level: '进阶', task: '用errors.As从多层包装提取', hint: 'errors.As(err,&target)', answer: 'type MyErr struct{Code int};err:=fmt.Errorf("h:%w",&MyErr{500});var me*MyErr;errors.As(err,&me)' },
    ],
  },
  'dA8SMhCev1NWNM1Tsxu57': {
    mentalModel: '包导入规则是Go交通法规——谁导入谁、怎么导入都有章可循。',
    sections: [
      { title: '导入语法', content: 'import"fmt"单包。import("fmt";"os")多包。别名：import log path。_导入：副作用。.导入不推荐。' },
      { title: '最佳实践', content: '分组：标准库/三方/本地。goimports自动分组排序。不用相对路径。避免循环导入。只导入用的包。' },
    ],
    diagnosis: [{ symptom: '同一包两个文件分别_和正常import', cause: '正常，_导入只执行init', fix: '_ pkg只为副作用。import pkg为用导出符号。两者可共存。' }],
    exercises: [
      { level: '基础', task: '演示三种导入：标准/别名/空白', hint: 'import(...)', answer: 'import("fmt";log"github.com/...";_"net/http/pprof")' },
      { level: '进阶', task: '用goimports自动格式化', hint: 'goimports -w file.go', answer: 'go install golang.org/x/tools/cmd/goimports@latest;goimports -w main.go' },
    ],
  },
  's2WlOMMKNXf6O2Qiqcm_m': {
    mentalModel: '错误包装/解包像剥洋葱——外层包上下文，内层是根因。',
    sections: [
      { title: '包装(Wrap)', content: 'fmt.Errorf("ctx:%w",err)Go1.13+标准。自定义实现Unwrap()error。Go1.20+支持Unwrap()[]error。' },
      { title: '解包(Unwrap)', content: 'errors.Unwrap取下层。errors.Is沿链查找。errors.As沿链查找类型。Error()只显示最外层。' },
    ],
    diagnosis: [{ symptom: '包装5层后errors.Is仍找到', cause: 'errors.Is递归Unwrap直到链结束', fix: 'errors.Is遍历整个链。Error()只显最外层。' }],
    exercises: [
      { level: '基础', task: '实现自定义错误支持Unwrap()', hint: 'type WrapError struct{...}', answer: 'type WE struct{Msg string;Err error};func(e*WE)Error()string{return e.Msg+":"+e.Err.Error()};func(e*WE)Unwrap()error{return e.Err}' },
      { level: '进阶', task: '用errors.As从多层包装提取', hint: 'errors.As(err,&target)', answer: 'type DBE struct{Table string};err:=fmt.Errorf("h:%w",fmt.Errorf("q:%w",&DBE{"users"}));var d*DBE;errors.As(err,&d)' },
    ],
  },
  'eBv3i2cNA7vc01jLAbB8m': {
    mentalModel: '使用第三方包像借书——go get借来，go mod tidy管理记录。',
    sections: [
      { title: 'go get与导入', content: 'go get github.com/gin-gonic/gin@latest下载更新go.mod。go get-u升级。import路径对module路径。' },
      { title: '选择合适的包', content: 'pkg.go.dev查文档/许可证/流行度。优先活跃维护。v2+需在路径。小接口>大框架。依赖越少越好。' },
    ],
    diagnosis: [{ symptom: '导入第三方但go.mod没记录', cause: 'go get后自动更新', fix: '手动编辑后go mod tidy同步。' }],
    exercises: [
      { level: '基础', task: '导入第三方go mod tidy添加', hint: 'import+go mod tidy', answer: 'import"github.com/google/uuid";go mod tidy' },
      { level: '进阶', task: '对比gin vs chi依赖权重', hint: 'go mod graph', answer: 'go mod init cmp;go get gin chi;go mod graph|wc -l//gin~200+chi~50' },
    ],
  },
  'vjfqq1XVS25FVe9smtel0': {
    mentalModel: '哨兵错误是立在门口的哨兵——预先定义好错误的身份。',
    sections: [
      { title: '定义哨兵错误', content: 'var ErrNotFound=errors.New("not found")包级变量。命名Err开头。导出调用方。文档说明。' },
      { title: '使用哨兵错误', content: 'if errors.Is(err,ErrNotFound){...}。不用==比较。包装后可识别。' },
    ],
    diagnosis: [{ symptom: '修改哨兵值匹配不上', cause: '哨兵全局变量不应修改', fix: '不可导出或用函数返回。errors.Is比较值和地址。' }],
    exercises: [
      { level: '基础', task: '定义两个哨兵配合errors.Is', hint: 'var ErrX=errors.New(...)', answer: 'var ErrNotFound=errors.New("not found");var ErrInvalid=errors.New("invalid")' },
      { level: '进阶', task: '对比==和errors.Is', hint: '== vs errors.Is', answer: 'wrapped:=fmt.Errorf("w:%w",ErrNotFound);wrapped==ErrNotFound//false;errors.Is(wrapped,ErrNotFound)//true' },
    ],
  }
};