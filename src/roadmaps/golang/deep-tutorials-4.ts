import type { DeepTutorial } from '../deep-types';

export const GOLANG_DEEP_TUTORIALS_4: Record<string, DeepTutorial> = {
  '08QOxnF3rKEDekrkX7w1j': {
    mentalModel: 'Goroutines像微服务化的线程——轻量、海量、GMP调度器自动管理，数十万个同时跑不费力。',
    sections: [
      { title: '创建和使用', content: 'go funcName()启动新goroutine。go func(){...}()匿名goroutine。goroutine栈初始2KB可增长。main退出所有goroutine终止。' },
      { title: 'GMP调度模型', content: 'G(goroutine)+M(machine/OS线程)+P(processor逻辑核)。P数量=GOMAXPROCS。M绑定P执行G。阻塞时M分离P接管。' },
    ],
    diagnosis: [{ symptom: 'main函数退出时其他goroutine还在跑但被强制终止', cause: 'Go runtime在main退出时杀掉所有goroutine', fix: '用sync.WaitGroup或channel等待goroutine完成。main中time.Sleep不可靠。' }],
    exercises: [
      { level: '基础', task: '用go启动3个并发goroutine打印信息', hint: 'go func(){fmt.Println("g1")}()', answer: 'for i:=0;i<3;i++{go func(n int){fmt.Println("goroutine",n)}(i)};time.Sleep(time.Second)' },
      { level: '进阶', task: '用WaitGroup等待所有goroutine完成', hint: 'sync.WaitGroup Add/Done/Wait', answer: 'var wg sync.WaitGroup;for i:=0;i<5;i++{wg.Add(1);go func(n int){defer wg.Done();fmt.Println(n)}(i)};wg.Wait()' },
    ],
  },
  'CysLmwRqmQzOGAKM01AKF': {
    mentalModel: '发布模块像开源一本书——版本tag、语义化版本、做好文档，别人go get就能用。',
    sections: [
      { title: '发布流程', content: '打tag：git tag v1.0.0;git push origin v1.0.0。v2+需更新module path：module github.com/u/p/v2。go list-m查看版本。' },
      { title: '语义化版本', content: 'vMAJOR.MINOR.PATCH。v0不稳定(v0.x可break)。v1+承诺兼容。主版本升级需更新module path。pkg.go.dev自动拉取。' },
    ],
    diagnosis: [{ symptom: '发布了v2但import路径还是旧路径', cause: 'v2+需在module path中包含/v2', fix: 'go.mod:module github.com/u/p/v2;import "github.com/u/p/v2"。tag打v2.0.0。' }],
    exercises: [
      { level: '基础', task: '创建发布的模块版本', hint: 'git tag v1.0.0', answer: 'git tag v1.0.0;git push origin v1.0.0' },
      { level: '进阶', task: '发布v2版本的正确方式', hint: 'module path加/v2', answer: '在go.mod改module github.com/u/p/v2;代码import "github.com/u/p/v2";git tag v2.0.0' },
    ],
  },
  '2KyzUjcMiMgo_AvlPjYbx': {
    mentalModel: 'panic和recover像紧急制动——panic是踩死刹车，recover是在defer中接住不翻车。',
    sections: [
      { title: 'panic使用', content: 'panic("something wrong")立即停止函数执行。执行所有defer。向上传播到调用者。最终程序崩溃打印stack trace。' },
      { title: 'recover捕获', content: 'defer func(){if r:=recover();r!=nil{fmt.Println("recovered:",r)}}()。recover只在defer中有效。不能恢复其他goroutine的panic。' },
    ],
    diagnosis: [{ symptom: '在非defer函数中调用recover返回nil', cause: 'recover只在defer调用的函数中有效', fix: '必须defer func(){recover()}()。不能在defer recover()(无外层函数调用)。' }],
    exercises: [
      { level: '基础', task: '用panic和recover演示异常捕获', hint: 'defer+recover', answer: 'func safeCall(){defer func(){if r:=recover();r!=nil{fmt.Println("caught:",r)}}();panic("oops")}' },
      { level: '进阶', task: '实现一个Must函数：失败时panic', hint: 'func Must[T any](v T,err error)T', answer: 'func Must[T any](v T,err error)T{if err!=nil{panic(err)};return v}' },
    ],
  },
  'EgXagvLpJkXUI2od5K1FD': {
    mentalModel: 'Channels是goroutine间的电话线——通过通信来共享内存，不需要锁的并发原语。',
    sections: [
      { title: '创建和操作', content: 'ch:=make(chan int)无缓冲。ch:=make(chan int,10)缓冲。ch<-42发送。v:=<-ch接收。close(ch)关闭。' },
      { title: '关闭和range', content: '关闭后不能再发送(panic)但可继续接收。range ch接收直到关闭。v,ok:=<-ch判断是否关闭。不需发送方可关闭由接收方关。' },
    ],
    diagnosis: [{ symptom: '向已关闭channel发送数据panic', cause: 'channel关闭后send操作触发panic', fix: '在发送前检查或由明确的发送方管理关闭。使用sync.Once保护close。' }],
    exercises: [
      { level: '基础', task: '创建channel在两个goroutine间传数据', hint: 'make(chan int)', answer: 'ch:=make(chan int);go func(){ch<-42}();v:=<-ch;fmt.Println(v)' },
      { level: '进阶', task: '实现生产者消费者模式用channel', hint: '缓冲channel+range', answer: 'ch:=make(chan int,5);go func(){for i:=0;i<10;i++{ch<-i};close(ch)}();for v:=range ch{fmt.Println(v)}' },
    ],
  },
  'rR_BIgiSR63rVlO2Igzin': {
    mentalModel: 'Stack Traces是Go的犯罪现场勘查——panic时打印每层调用栈，debug时第一手线索。',
    sections: [
      { title: '读取堆栈', content: 'panic自动打印stack trace。runtime/debug.Stack()获取当前堆栈。runtime.Caller获取调用信息。log.SetFlags(log.Lshortfile)。' },
      { title: '调试工具', content: 'Delve(dlv)交互式调试。pprof性能分析。trace运行追踪。go tool trace可视化。fmt.Printf简单但有效。' },
    ],
    diagnosis: [{ symptom: 'panic日志中stack trace被截断', cause: '大量goroutine时堆栈信息巨大', fix: '使用runtime/debug.SetTraceback("crash")调整。GOTRACEBACK环境变量控制(0/1/2/crash)。' }],
    exercises: [
      { level: '基础', task: '用debug.Stack()打印当前调用栈', hint: 'runtime/debug.Stack()', answer: 'import"runtime/debug";fmt.Println(string(debug.Stack()))' },
      { level: '进阶', task: '用runtime.Caller获取调用者信息', hint: 'runtime.Caller(0/1/...)', answer: 'pc,file,line,ok:=runtime.Caller(1);fn:=runtime.FuncForPC(pc);fmt.Println(fn.Name(),file,line)' },
    ],
  },
  'RBr1uAdngIsvSpIdHHOyV': {
    mentalModel: 'select像多路电话总机——同时监听多个channel，哪个先响就接哪个，都不用等就走default。',
    sections: [
      { title: '基本语法', content: 'select{case v:=<-ch1:...case ch2<-x:...default:...}。同时满足随机选。default非阻塞。无default且全阻塞则等待。' },
      { title: 'select模式', content: '超时：case<-time.After(1*time.Second)。心跳：case<-ticker.C。done退出：case<-ctx.Done()。多channel聚合：fan-in。' },
    ],
    diagnosis: [{ symptom: 'select中所有case都阻塞也没有default——死锁', cause: 'Go检测到所有goroutine阻塞触发deadlock panic', fix: '加default分支非阻塞退出。或用time.After超时。确保至少一个case会就绪。' }],
    exercises: [
      { level: '基础', task: '用select从两个channel接收并打印先到的', hint: 'select{case v:=<-ch1:...case v:=<-ch2:...}', answer: 'ch1:=make(chan string,1);ch2:=make(chan string,1);ch1<-"first";select{case v:=<-ch1:fmt.Println(v);case v:=<-ch2:fmt.Println(v)}' },
      { level: '进阶', task: '用select实现超时控制', hint: 'time.After', answer: 'select{case v:=<-ch:fmt.Println(v);case<-time.After(time.Second):fmt.Println("timeout")}' },
    ],
  },
  'p5u2tWRmRtyfBgKcSUHFU': {
    mentalModel: 'Deadlines和Cancellations像任务的闹钟和取消按钮——context包统一管理，超时或主动取消都优雅。',
    sections: [
      { title: 'context基础', content: 'ctx,cancel:=context.WithTimeout(parent,duration)。defer cancel()。ctx.Done()返回channel。ctx.Err()获取取消原因。' },
      { title: '传播取消', content: '父context取消子context自动取消。WithDeadline指定绝对时间。WithCancel手动取消。WithValue传递元数据。' },
    ],
    diagnosis: [{ symptom: '忘记调用cancel导致goroutine泄漏', cause: 'context.WithTimeout返回的cancel必须调用', fix: 'defer cancel()确保释放资源。即使超时自动取消也需调cancel让GC回收。' }],
    exercises: [
      { level: '基础', task: '用context.WithTimeout实现3秒超时HTTP请求', hint: 'ctx,cancel:=context.WithTimeout(context.Background(),3*time.Second)', answer: 'ctx,cancel:=context.WithTimeout(context.Background(),3*time.Second);defer cancel();req,_:=http.NewRequestWithContext(ctx,"GET",url,nil)' },
      { level: '进阶', task: '实现一个支持取消的worker', hint: 'select{case<-ctx.Done():return}', answer: 'func worker(ctx context.Context){for{select{case<-ctx.Done():fmt.Println("done");return;default:doWork()}}}' },
    ],
  },
  '4_nvU_YOs9Psey5TZLQFb': {
    mentalModel: '缓冲vs无缓冲像电话vs留言——无缓冲同步等待双方都就绪，缓冲可以先留言(queue)再取。',
    sections: [
      { title: '无缓冲channel', content: 'ch:=make(chan int)。发送方阻塞直到接收方接收。接收方阻塞直到发送方发送。同步语义保证每发必收。' },
      { title: '缓冲channel', content: 'ch:=make(chan int,10)。缓冲未满发送不阻塞。缓冲不空接收不阻塞。满时发送阻塞。空时接收阻塞。FIFO投递。' },
    ],
    diagnosis: [{ symptom: '缓冲channel满了发送方永久阻塞', cause: '无接收方且缓冲满时死锁', fix: '确保有接收方消费。或用select+default非阻塞发送。select{case ch<-v:default:fmt.Println("full")}。' }],
    exercises: [
      { level: '基础', task: '创建无缓冲和缓冲channel对比发送行为', hint: 'make(chan int)vs make(chan int,3)', answer: 'unbuf:=make(chan int);go func(){unbuf<-42}();<-unbuf;buf:=make(chan int,3);buf<-1;buf<-2;buf<-3//不阻塞' },
      { level: '进阶', task: '用缓冲channel实现信号量限制并发', hint: 'make(chan struct{},N)', answer: 'sem:=make(chan struct{},3);for i:=0;i<10;i++{go func(){sem<-struct{}{};defer func(){<-sem}();work()}()}' },
    ],
  },
  'gChqUzY3SbPJH0H0jcoAp': {
    mentalModel: '常见并发场景：超时、重试、限流、后门退出——Go用channel+select+context优雅解决。',
    sections: [
      { title: '超时模式', content: 'select{case<-ch:...;case<-time.After(d):...}。context.WithTimeout更规范。HTTP client自带Timeout。' },
      { title: '重试模式', content: 'for i:=0;i<maxRetries;i++{if result,err:=do();err==nil{return result};time.Sleep(backoff)}。指数退避。' },
    ],
    diagnosis: [{ symptom: 'goroutine数量爆炸导致OOM', cause: '不控制的goroutine创建会耗尽内存', fix: '用semaphore/worker pool限制并发。用errgroup.Group管理一组goroutine。' }],
    exercises: [
      { level: '基础', task: '实现带指数退避的重试', hint: 'time.Sleep(backoff);backoff*=2', answer: 'func retry(fn func()error,max int)error{var err error;for i:=0;i<max;i++{if err=fn();err==nil{return nil};time.Sleep(time.Duration(1<<i)*time.Second)};return err}' },
      { level: '进阶', task: '用errgroup管理并发任务', hint: 'golang.org/x/sync/errgroup', answer: 'g,_:=errgroup.WithContext(ctx);g.Go(func()error{return do1()});g.Go(func()error{return do2()});if err:=g.Wait();err!=nil{...}' },
    ],
  },
  '8BrnnM7HM-bijbUDgnW49': {
    mentalModel: 'fan-in是数据汇聚——多个输入channel汇成一个输出channel，像多条溪流汇入大河。',
    sections: [
      { title: 'fan-in模式', content: '多个goroutine写各自的channel，一个goroutine merge到输出。用select或sync.WaitGroup+range。常用select随机公平接收。' },
      { title: '实现方式', content: 'func fanIn(chs...<-chan int)<-chan int{out:=make(chan int);for _,ch:=range chs{go func(c<-chan int){for v:=range c{out<-v}}}(ch)};return out}。' },
    ],
    diagnosis: [{ symptom: 'fan-in中某个输入关闭后没有通知输出方', cause: '需用WaitGroup或计数跟踪输入关闭', fix: '每个输入goroutine完成任务后wg.Done()。单独goroutine wg.Wait()后close(out)。' }],
    exercises: [
      { level: '基础', task: '实现两个channel的fan-in', hint: 'select从两个ch接收', answer: 'func merge(a,b<-chan int)<-chan int{out:=make(chan int);go func(){for{if a==nil&&b==nil{break};select{case v,ok:=<-a:if!ok{a=nil};out<-v;case v,ok:=<-b:if!ok{b=nil};out<-v}};close(out)}();return out}' },
      { level: '进阶', task: '实现N个channel的fan-in用WaitGroup', hint: 'sync.WaitGroup+close', answer: 'func fanIn(chs...<-chan int)<-chan int{out:=make(chan int);var wg sync.WaitGroup;for _,ch:=range chs{wg.Add(1);go func(c<-chan int){defer wg.Done();for v:=range c{out<-v}}(ch)};go func(){wg.Wait();close(out)}();return out}' },
    ],
  },
  'pN8EsuKUPDUKyskodu_sC': {
    mentalModel: 'fan-out是任务分发——一个输入channel分给多个worker并行处理，像高压水枪分多个喷头。',
    sections: [
      { title: 'fan-out模式', content: '一个generator产生任务到channel，多个goroutine并发处理同一个channel。每个goroutine从channel竞争取任务。' },
      { title: '负载均衡', content: '多个worker从同一channel接收自然负载均衡(快的多取)。用semaphore限流。用errgroup管理。收集结果用fan-in或result channel。' },
    ],
    diagnosis: [{ symptom: '所有worker处理完但结果收集goroutine提前关闭', cause: '结果channel关闭时序不对', fix: '生成方close任务channel后worker退出，再由收集方close结果channel。或用WaitGroup等worker。' }],
    exercises: [
      { level: '基础', task: '实现fan-out:多个worker处理同一channel', hint: 'go func(){for v:=range ch{process(v)}}()', answer: 'ch:=make(chan int,100);for i:=0;i<3;i++{go func(){for v:=range ch{fmt.Println(v)}}()};for i:=0;i<10;i++{ch<-i};close(ch)' },
      { level: '进阶', task: 'fan-out+fan-in完整流水线', hint: 'generator>workers>collector', answer: 'func gen()<-chan int{...};func worker(in<-chan int)<-chan int{out:=make(chan int);go func(){for v:=range in{out<-v*2};close(out)}();return out};func merge(cs...)<-chan int{...}' },
    ],
  },
  'loozcCzPzkni7BOdcvt1S': {
    mentalModel: 'pipeline是流水线——数据流过多个stage，每个stage做一件事，channel连接各stage，像工厂流水线。',
    sections: [
      { title: 'pipeline模式', content: 'generator->stage1->stage2->...->sink。每个stage接收channel返回channel。批处理流水线管。并行stage用fan-out/fan-in。' },
      { title: '构建原则', content: '每个stage返回新channel。stage内部goroutine中range输入处理后send输出。输入关闭后close输出。明确资源生命周期。' },
    ],
    diagnosis: [{ symptom: 'pipeline中某个stage panic导致整个链路卡死', cause: 'goroutine panic不传播到其他goroutine', fix: '每个stage加defer+recover。用errgroup传播错误。或用context.WithCancel传播取消信号。' }],
    exercises: [
      { level: '基础', task: '构建三阶段pipeline:gen->square->print', hint: '<-chan int', answer: 'func gen(nums...int)<-chan int{out:=make(chan int);go func(){for _,n:=range nums{out<-n};close(out)}();return out};func sq(in<-chan int)<-chan int{out:=make(chan int);go func(){for n:=range in{out<-n*n};close(out)}();return out}' },
      { level: '进阶', task: '实现可取消的pipeline', hint: 'context.WithCancel', answer: 'func gen(ctx context.Context)<-chan int{out:=make(chan int);go func(){defer close(out);for i:=0;;i++{select{case<-ctx.Done():return;case out<-i:}}}();return out}' },
    ],
  },
  'z8ItWHAupaastLcXY3npY': {
    mentalModel: 'Worker Pools是车间+工人——固定数量的goroutine从任务队列取活干，控并发防资源耗尽。',
    sections: [
      { title: 'Worker Pool模式', content: '创建worker数量=CPU核数或IO等待数。任务channel缓冲。worker从channel接收并处理。sync.WaitGroup等待完成。' },
      { title: '实现细节', content: 'tasks:=make(chan Task,buffer)。for i:=0;i<numWorkers;i++{go worker(tasks)}。main发送任务后close(tasks)。worker用range取任务。' },
    ],
    diagnosis: [{ symptom: 'worker pool中某个worker panic整个池失效', cause: '单个worker的panic不传播但goroutine死亡池容量缩减', fix: 'worker函数加defer+recover。重启死亡worker：检测并go worker()。或用errgroup。' }],
    exercises: [
      { level: '基础', task: '实现固定数量worker处理string任务', hint: 'for i:=0;i<N;i++{go worker()}', answer: 'tasks:=make(chan string,10);var wg sync.WaitGroup;for i:=0;i<3;i++{wg.Add(1);go func(){defer wg.Done();for t:=range tasks{fmt.Println(t)}}()};for _,t:=range[]string{"a","b","c"}{tasks<-t};close(tasks);wg.Wait()' },
      { level: '进阶', task: '实现动态调整worker数量', hint: '监听负载', answer: '可用ants库(github.com/panjf2000/ants)。或自己实现：atomic.LoadInt32检查队列长度动态增减。' },
    ],
  },
  'nOI0juYhqJXNTiJBU4bKH': {
    mentalModel: 'sync包是并发工具箱——Mutex、RWMutex、WaitGroup、Once、Cond、Pool，每个解决一类并发问题。',
    sections: [
      { title: '核心类型', content: 'Mutex:互斥锁。RWMutex:读写锁。WaitGroup:等待组。Once:单次执行。Cond:条件变量。Pool:对象池。Map:并发安全map。atomic:原子操作。' },
      { title: '选择指南', content: '互斥用Mutex。读多写少用RWMutex。等待goroutine用WaitGroup。懒初始化用Once。高频创建销毁用Pool。' },
    ],
    diagnosis: [{ symptom: '用了sync.Pool后取出的对象不是新的是脏的', cause: 'Pool用来复用对象，Get可能返回之前Put的旧对象', fix: '取出后重置字段。Pool不保证对象存活——GC可能清空。用New函数创建新对象。' }],
    exercises: [
      { level: '基础', task: '用Mutex保护共享计数器', hint: 'sync.Mutex Lock/Unlock', answer: 'type Counter struct{mu sync.Mutex;n int};func(c*Counter)Inc(){c.mu.Lock();defer c.mu.Unlock();c.n++}' },
      { level: '进阶', task: '用sync.Pool复用bytes.Buffer', hint: 'sync.Pool{New:func()any{return new(bytes.Buffer)}}', answer: 'var bp=sync.Pool{New:func()any{return new(bytes.Buffer)}};b:=bp.Get().(*bytes.Buffer);b.Reset();b.WriteString("hi");bp.Put(b)' },
    ],
  },
  'vxB3aGreqWBrNhiu8hcPE': {
    mentalModel: 'context包是请求的生命线——携带deadline、取消信号、请求值，贯穿整个调用链。',
    sections: [
      { title: '四大方法', content: 'WithCancel(parent):手动取消。WithDeadline(parent,time):绝对时间取消。WithTimeout(parent,d):相对时间取消。WithValue(parent,key,val):传值。' },
      { title: '使用建议', content: 'context作第一参数(ctx context.Context)。不用struct字段存储context。不用nil context用context.TODO()。context.Value仅传请求范围数据。' },
    ],
    diagnosis: [{ symptom: '用context.Value传大量数据或频繁修改的值', cause: 'context.Value适合不变的请求范围数据', fix: '频繁变的数据用参数传递。大量数据用struct指针放参数。context.Value适合traceID/userID等。' }],
    exercises: [
      { level: '基础', task: '用context实现请求链路超时传递', hint: 'context.WithTimeout', answer: 'func handler(w http.ResponseWriter,r *http.Request){ctx,cancel:=context.WithTimeout(r.Context(),5*time.Second);defer cancel();result,_:=fetchFromDB(ctx);fmt.Fprint(w,result)}' },
      { level: '进阶', task: '用context.WithValue传递traceID', hint: 'context.WithValue', answer: 'type ctxKey string;ctx:=context.WithValue(ctx,ctxKey("traceID"),uuid.New().String())' },
    ],
  },
  '2yKVKaCXrcv5X4o2d6oqm': {
    mentalModel: '并发模式是Go的武功套路——fan-in/fan-out/pipeline/worker pool/pub-sub，掌握它们写高并发如虎添翼。',
    sections: [
      { title: '经典模式', content: 'Pipeline:数据流经多stage。Fan-out:多worker并发处理。Fan-in:多输入汇聚。Worker Pool:固定goroutine池。Pub/Sub:发布订阅。' },
      { title: '选择指南', content: 'IO密集用worker pool限并发。流处理用pipeline。多源汇聚用fan-in。广播用pub/sub。信号控制用context+select。' },
    ],
    diagnosis: [{ symptom: '用了future/promise模式发现Go没有原生支持', cause: 'Go用channel+goroutine替代future', fix: '用struct{result T;err error;done chan struct{}}。或直接用channel。Go的并发哲学是通信而非等待。' }],
    exercises: [
      { level: '基础', task: '用channel实现简单的pub/sub', hint: 'map[chan T]struct{}', answer: 'type PubSub[T any]struct{mu sync.RWMutex;subs map[chan T]struct{}};func(ps*PubSub[T])Pub(v T){ps.mu.RLock();defer ps.mu.RUnlock();for ch:=range ps.subs{select{case ch<-v:default:}}}' },
      { level: '进阶', task: '实现一个支持背压的pipeline', hint: '缓冲channel+select', answer: '// channel满时跳过：select{case out<-v:default:}。或用ring buffer。背压保护下游。' },
    ],
  },
  '6ydgmac11Zu9Ithe0kKj9': {
    mentalModel: 'Mutex像厕所门锁——一次只能一个人进去，出来前别人都得等。RWMutex像阅览室——可以多人同时读，但写的时候独占。',
    sections: [
      { title: 'Mutex用法', content: 'mu.Lock()获取锁。mu.Unlock()释放锁。defer mu.Unlock()保证释放。Lock之间是互斥的。不能复制Mutex(go vet检测)。' },
      { title: 'RWMutex', content: 'mu.RLock()读锁(多goroutine可同时持有)。mu.RUnlock()。mu.Lock()写锁(独占)。适合读多写少场景。' },
    ],
    diagnosis: [{ symptom: '在Lock中间忘记Unlock导致死锁', cause: 'Lock后return/panic跳过Unlock', fix: 'defer mu.Unlock()紧跟Lock()。即使panic也会执行defer。' }],
    exercises: [
      { level: '基础', task: '用Mutex保护map并发写入', hint: 'sync.Mutex', answer: 'type SafeMap struct{mu sync.Mutex;m map[string]int};func(sm*SafeMap)Set(k string,v int){sm.mu.Lock();defer sm.mu.Unlock();sm.m[k]=v}' },
      { level: '进阶', task: '用RWMutex实现读多写少的缓存', hint: 'sync.RWMutex', answer: 'type Cache struct{mu sync.RWMutex;data map[string]string};func(c*Cache)Get(k string)string{c.mu.RLock();defer c.mu.RUnlock();return c.data[k]};func(c*Cache)Set(k,v string){c.mu.Lock();defer c.mu.Unlock();c.data[k]=v}' },
    ],
  },
  'amqOwSgVFDymAsDIobwiK': {
    mentalModel: 'WaitGroup像旅行团点名——Add加人、Done报到、Wait等齐人，都到了才继续。',
    sections: [
      { title: '基本用法', content: 'var wg sync.WaitGroup。wg.Add(1)加计数。wg.Done()减计数(等同Add(-1))。wg.Wait()阻塞直到计数归零。Count不能为负。' },
      { title: '使用模式', content: 'for tasks{wg.Add(1);go func(){defer wg.Done();process()}()};wg.Wait()。Add必须在goroutine外(或确保先于Wait)。' },
    ],
    diagnosis: [{ symptom: 'Add放在goroutine内导致Wait先返回', cause: 'Wait可能在Add之前执行计数为0', fix: 'Add必须在启动goroutine之前执行。或所有Add完成后才Wait。最安全：先全Add再全go。' }],
    exercises: [
      { level: '基础', task: '用WaitGroup等5个goroutine完成', hint: 'sync.WaitGroup', answer: 'var wg sync.WaitGroup;for i:=0;i<5;i++{wg.Add(1);go func(n int){defer wg.Done();fmt.Println(n)}(i)};wg.Wait()' },
      { level: '进阶', task: '实现并行处理切片元素用WaitGroup', hint: '分段处理', answer: 'var wg sync.WaitGroup;for _,item:=range items{wg.Add(1);go func(it Item){defer wg.Done();process(it)}(item)};wg.Wait()' },
    ],
  },
  'GoV8yaQARJmO47e0_l_GY': {
    mentalModel: 'Race Detection是Go的排雷工具——go test -race自动找出数据竞态，在测试阶段消灭并发bug。',
    sections: [
      { title: '使用方式', content: 'go test -race ./...。go run -race main.go。go build -race。检测读写共享变量时的竞态。有竞态时打印详细信息和goroutine堆栈。' },
      { title: '竞态根源', content: '多个goroutine并发访问同一变量且至少一个是写操作。无同步保护的共享计数器。map并发读写。slice并发append。闭包捕获循环变量(Go 1.21)。' },
    ],
    diagnosis: [{ symptom: '-race 检测让程序变慢 10 倍', cause: 'race detector记录每次内存访问额外开销', fix: '-race 仅用于测试和开发环境。生产环境不要启用。CI 中可加 -race 测试。' }],
    exercises: [
      { level: '基础', task: '用-race检测简单竞态', hint: 'go test -race', answer: 'go test -race ./... 或 go run -race main.go' },
      { level: '进阶', task: '修复一个并发map写入的竞态', hint: '加sync.Mutex', answer: '//有竞态:go func(){m["a"]=1}();go func(){m["b"]=2}()\n//修复:type SafeMap struct{mu sync.Mutex;m map[string]string};所有操作加锁' },
    ],
  },
  'nZkLFmm2GENL81y5LB0c1': {
    mentalModel: 'testing包是Go的原生测试框架——不需要Jest/Mocha，一个go test搞定单元测试、基准、示例。',
    sections: [
      { title: '基本结构', content: 'func TestXxx(t*testing.T)。t.Error/t.Errorf记录错误继续。t.Fatal/t.Fatalf记录并停止。t.Run运行子测试。t.Parallel并行测试。' },
      { title: '表格驱动测试', content: 'tests:=[]struct{name;input;want}{}。for _,tt:=range tests{t.Run(tt.name,func(t*testing.T){got:=fn(tt.input);if got!=tt.want{t.Errorf(...)}})}。' },
    ],
    diagnosis: [{ symptom: '测试函数名不是Test开头未被执行', cause: 'go test只运行TestXxx格式的函数', fix: '确保函数名Test开头且参数*testing.T。ExampleXxx为示例。BenchmarkXxx为基准。' }],
    exercises: [
      { level: '基础', task: '写TestAdd函数测试Add(2,3)==5', hint: 'func TestAdd(t*testing.T)', answer: 'func TestAdd(t*testing.T){got:=Add(2,3);if got!=5{t.Errorf("Add(2,3)=%d;want 5",got)}}' },
      { level: '进阶', task: '用表格驱动测试覆盖加减乘除', hint: 'tests:=[]struct{...}', answer: 'tests:=[]struct{name string;a,b,want int}{{"add",2,3,5},{"sub",5,2,3}};for _,tt:=range tests{t.Run(tt.name,func(t*testing.T){got:=Calc(tt.a,tt.b,tt.name);if got!=tt.want{t.Errorf("got %d want %d",got,tt.want)}})}' },
    ],
  },
  '6-mr65JzXbRzIukE7jzoZ': {
    mentalModel: '表格驱动测试是Go测试的精髓——一个表列出所有用例，循环测试每个，代码少覆盖全。',
    sections: [
      { title: '结构', content: 'type testCase struct{name string;input T;want U}。tests:=[]testCase{...}。for _,tc:=range tests{t.Run(tc.name,func(t*testing.T){...})}。' },
      { title: '好处', content: '一个测试函数覆盖多种场景。添加用例只需加一行。表格自文档化——看表就懂所有case。name清晰描述场景。' },
    ],
    diagnosis: [{ symptom: '表格中有用例失败但不知是哪一行', cause: 't.Run给每个子测试命名', fix: 't.Run(tc.name,func...)。name要明确描述场景。失败时go test输出name。' }],
    exercises: [
      { level: '基础', task: '写表格驱动测试验证字符串反转', hint: 'tests:=[]struct{in,want string}', answer: 'tests:=[]struct{in,want string}{{"hello","olleh"},{"世界","界世"},{},{"a","a"}};for _,tc:=range tests{t.Run(tc.in,func(t*testing.T){got:=reverse(tc.in);if got!=tc.want{t.Errorf("got %q want %q",got,tc.want)}})}' },
      { level: '进阶', task: '表格驱动测试用t.Parallel并行', hint: 't.Parallel()', answer: 'for _,tc:=range tests{tc:=tc;t.Run(tc.name,func(t*testing.T){t.Parallel();...})}//注意tc:=tc拷贝' },
    ],
  },
  '-Qy9DEWVYUNRHWiXXhIWU': {
    mentalModel: '标准库是Go的后盾——不用第三方依赖，标准库就能搞定HTTP、JSON、数据库、加密、压缩、模板。',
    sections: [
      { title: '重要包', content: 'net/http:HTTP服务器。encoding/json:JSON。database/sql:数据库。crypto:加密。io/fs:文件系统。text/template:模板。sync:并发。context:生命周期。' },
      { title: '使用习惯', content: '优先标准库再第三方。标准库文档质量高。API稳定兼容(Go 1承诺)。源码可读性强——直接看源码学习。' },
    ],
    diagnosis: [{ symptom: '导入了第三方加密库其实标准库crypto就够', cause: '标准库已经提供AES/RSA/SHA256等', fix: '查标准库文档：crypto/aes、crypto/rsa、crypto/sha256。第三方库往往是封装不是新增。' }],
    exercises: [
      { level: '基础', task: '用net/http写完整REST API(不用框架)', hint: 'http.HandleFunc', answer: 'http.HandleFunc("/api/users",func(w http.ResponseWriter,r*http.Request){json.NewEncoder(w).Encode(users)});http.ListenAndServe(":8080",nil)' },
      { level: '进阶', task: '用database/sql+sqlite查询', hint: 'database/sql+driver', answer: 'import _ "github.com/mattn/go-sqlite3";db,_:=sql.Open("sqlite3",":memory:");db.Exec("CREATE TABLE...");rows,_:=db.Query("SELECT...")' },
    ],
  },
  'LjLbm4JEZ19howOkju7zQ': {
    mentalModel: 'Mocks和Stubs是测试的替身——Mock验证行为(调用了没)，Stub提供预设数据(别真调数据库)。',
    sections: [
      { title: '概念区分', content: 'Stub:返回预设值替代真实依赖。Mock:记录调用情况验证行为(调用了什么参数)。Fake:轻量实现(内存DB)。' },
      { title: 'Go测试替身', content: '接口是mock的基础——面向接口编程天然可mock。gomock生成mock。testify/mock轻量mock。httptest模拟HTTP。' },
    ],
    diagnosis: [{ symptom: '为每个接口手写mock太费时间', cause: 'Go的接口简化了mock但手写仍繁琐', fix: '用gomock自动生成：mockgen -source=foo.go -destination=mock_foo.go。或testify/mock嵌入mock.Mock。' }],
    exercises: [
      { level: '基础', task: '用接口和手写stub实现依赖注入测试', hint: 'interface{GetUser(id int)User}', answer: 'type UserRepo interface{GetUser(id int)User};type StubRepo struct{users map[int]User};func(s StubRepo)GetUser(id int)User{return s.users[id]}' },
      { level: '进阶', task: '用httptest测试HTTP handler', hint: 'httptest.NewServer', answer: 'ts:=httptest.NewServer(http.HandlerFunc(handler));defer ts.Close();resp,_:=http.Get(ts.URL+"/api");assert.Equal(t,200,resp.StatusCode)' },
    ],
  },
  '7SYEXD5r9WKEDfecQdO5d': {
    mentalModel: 'I/O与文件处理是Go的基本功——os包操作文件、io.Reader/Writer统一抽象，bufio缓冲读写。',
    sections: [
      { title: '核心接口', content: 'io.Reader:Read([]byte)(int,error)。io.Writer:Write([]byte)(int,error)。io.Copy(dst,src)连接读写。' },
      { title: '文件操作', content: 'os.Open打开只读。os.Create创建写。os.ReadFile一次读完。os.WriteFile一次写完。bufio.NewScanner逐行读。defer f.Close()。' },
    ],
    diagnosis: [{ symptom: 'os.ReadFile读大文件耗尽内存', cause: 'os.ReadFile一次把整个文件读入内存', fix: '用os.Open+io.Copy流式读取。或用bufio.NewScanner逐行处理。大文件不用ReadFile。' }],
    exercises: [
      { level: '基础', task: '读文件并打印所有行', hint: 'bufio.NewScanner', answer: 'f,_:=os.Open("file.txt");defer f.Close();sc:=bufio.NewScanner(f);for sc.Scan(){fmt.Println(sc.Text())}' },
      { level: '进阶', task: '用io.Copy复制文件', hint: 'io.Copy(dst,src)', answer: 'src,_:=os.Open("a.txt");defer src.Close();dst,_:=os.Create("b.txt");defer dst.Close();io.Copy(dst,src)' },
    ],
  },
  'Zt4FpqCEVlpMzclJeDiMs': {
    mentalModel: 'httptest是HTTP测试利器——不启动真实服务器，直接测handler逻辑，快速可靠。',
    sections: [
      { title: '基本用法', content: 'httptest.NewRecorder()记录响应。httptest.NewRequest(method,path,body)创建请求。handler.ServeHTTP(w,req)直接调用。w.Result()取响应。' },
      { title: '测试服务器', content: 'httptest.NewServer(handler)启动真实HTTP测试服务器。defer s.Close()。s.URL取测试地址。s.Client()取HTTP客户端。' },
    ],
    diagnosis: [{ symptom: 'httptest.NewServer启动服务器被防火墙拦截', cause: '测试服务器监听本地随机端口', fix: '没有问题——httptest.NewServer只监听127.0.0.1。不需要防火墙配置。用后Close。' }],
    exercises: [
      { level: '基础', task: '用httptest测试GET handler返回200', hint: 'httptest.NewRecorder', answer: 'func TestHandler(t*testing.T){req:=httptest.NewRequest("GET","/",nil);w:=httptest.NewRecorder();handler(w,req);if w.Code!=200{t.Errorf("got %d",w.Code)}}' },
      { level: '进阶', task: '用httptest.NewServer测试完整HTTP调用', hint: 'httptest.NewServer', answer: 'ts:=httptest.NewServer(http.HandlerFunc(handler));defer ts.Close();resp,_:=ts.Client().Get(ts.URL);body,_:=io.ReadAll(resp.Body);fmt.Println(string(body))' },
    ],
  },
  '-8E79Ns4q-uAgcxtghPzf': {
    mentalModel: 'flag包是CLI参数解析器——在main函数里定义flag，自动解析，生成help文档。',
    sections: [
      { title: '基本用法', content: 'name:=flag.String("name","World","your name")。flag.Int、flag.Bool等。flag.Parse()必须调用。剩余参数flag.Args()。' },
      { title: '自定义flag', content: 'flag.Var(&customVal,"name","usage")实现flag.Value接口。String()显示默认值。Set(string)error解析输入值。' },
    ],
    diagnosis: [{ symptom: 'flag.Parse() 在 init 中调用导致测试问题', cause: 'flag.Parse()应在main中调用一次', fix: '测试中flag可能被多次调用。用flag.NewFlagSet创建独立flag集。测试用os.Args=[cmd,-flag=val]。' }],
    exercises: [
      { level: '基础', task: '用flag解析命令行参数', hint: 'flag.String/Int/Bool', answer: 'name:=flag.String("name","World","your name");age:=flag.Int("age",0,"your age");flag.Parse();fmt.Printf("Hello %s, you are %d\\n",*name,*age)' },
      { level: '进阶', task: '实现自定义flag类型(逗号分隔的slice)', hint: 'flag.Var', answer: 'type StrSlice[]string;func(s*StrSlice)String()string{return fmt.Sprintf("%v",*s)};func(s*StrSlice)Set(v string)error{*s=strings.Split(v,",");return nil};var langs StrSlice;flag.Var(&langs,"langs","comma-sep list")' },
    ],
  },
  'aK9EQO1JR9hYIMkS3mdai': {
    mentalModel: 'time包是Go的时间管家——解析、格式化、计算、定时器、时区，一切时间操作都在这。',
    sections: [
      { title: '核心操作', content: 'time.Now()当前时间。time.Date(...)构造时间。t.Format("2006-01-02 15:04:05")格式化。time.Parse解析。t.Add(...)计算。' },
      { title: '定时器', content: 'time.NewTicker(d)周期性触发。time.NewTimer(d)一次性触发。time.After(d)返回channel。time.Since(t)计算间隔。' },
    ],
    diagnosis: [{ symptom: '用time.After在循环中导致内存泄漏', cause: '每次调用time.After创建新timer未被GC直到触发', fix: '用time.NewTimer(d)并手动Stop+Reset复用。短循环中用select+time.After小心。' }],
    exercises: [
      { level: '基础', task: '格式化时间为ISO8601格式', hint: 'time.DateTime或"2006-01-02T15:04:05Z07:00"', answer: 't:=time.Now();fmt.Println(t.Format(time.RFC3339))//2024-01-15T10:30:00+08:00' },
      { level: '进阶', task: '用time.Ticker实现每5秒心跳', hint: 'time.NewTicker', answer: 'ticker:=time.NewTicker(5*time.Second);defer ticker.Stop();for range ticker.C{fmt.Println("tick")}' },
    ],
  },
  'uB1fE15OprBcwN7p7ffJF': {
    mentalModel: 'encoding/json是Go的JSON双刃剑——Marshal序列化、Unmarshal反序列化，struct tag控制一切。',
    sections: [
      { title: '序列化', content: 'json.Marshal(v)返回[]byte。json.MarshalIndent加缩进。json.NewEncoder(w).Encode(v)流式写。首字母大写才导出。tag:json:"name,omitempty"。' },
      { title: '反序列化', content: 'json.Unmarshal(data,&v)。json.NewDecoder(r).Decode(&v)流式读。严格类型匹配。json.RawMessage延迟解析。map[string]any灵活接收。' },
    ],
    diagnosis: [{ symptom: 'JSON中null反序列化成int零值0', cause: 'JSON null≠数字0。Unmarshal到int时null变成0', fix: '用*int或json.RawMessage区分null和0。或Unmarshal到map[string]any先检查nil。' }],
    exercises: [
      { level: '基础', task: '定义struct序列化/反序列化JSON', hint: 'json.Marshal/Unmarshal', answer: 'type User struct{Name string `json:"name"`;Age int `json:"age,omitempty"`};u:=User{Name:"Bob"};b,_:=json.Marshal(u);var u2 User;json.Unmarshal(b,&u2)' },
      { level: '进阶', task: '用json.RawMessage动态解析不同结构的JSON', hint: 'json.RawMessage', answer: 'type Msg struct{Type string `json:"type"`;Data json.RawMessage `json:"data"`};switch msg.Type{case"text":json.Unmarshal(msg.Data,&textMsg);case"image":json.Unmarshal(msg.Data,&imgMsg)}' },
    ],
  },
  't9xOuLBrAzEvv2-bOU2hF': {
    mentalModel: 'Benchmarks衡量性能——go test -bench=.找出慢的函数，对比优化前后效果。',
    sections: [
      { title: '编写基准', content: 'func BenchmarkXxx(b*testing.B)。for i:=0;i<b.N;i++{...}循环。b.ReportAllocs()报告内存分配。b.ResetTimer()排除初始化。' },
      { title: '运行和分析', content: 'go test -bench=.。go test -bench=. -benchmem看内存。go test -bench=. -benchtime=10s延长时间。benchstat对比两次。' },
    ],
    diagnosis: [{ symptom: '基准测试结果不稳定多次运行结果不同', cause: 'CPU频率波动、GC干扰、其他进程影响', fix: '用-benchtime=30s延长时间。用benchstat统计显著性。关闭其他程序。用-count=10多跑取中位数。' }],
    exercises: [
      { level: '基础', task: '为字符串拼接写Benchmark比较+=和Builder', hint: 'BenchmarkConcat', answer: 'func BenchmarkPlus(b*testing.B){for i:=0;i<b.N;i++{s:="";for j:=0;j<100;j++{s+="x"}}};func BenchmarkBuilder(b*testing.B){for i:=0;i<b.N;i++{var b strings.Builder;for j:=0;j<100;j++{b.WriteString("x")}}}' },
      { level: '进阶', task: '用benchstat对比优化前后', hint: 'go test -bench=. -count=10', answer: 'go test -bench=. -count=10 > old.txt; go test -bench=. -count=10 > new.txt; benchstat old.txt new.txt' },
    ],
  }
};