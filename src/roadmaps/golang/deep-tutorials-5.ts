import type { DeepTutorial } from '../deep-types';

export const GOLANG_DEEP_TUTORIALS_5: Record<string, DeepTutorial> = {
  '9S1gkzBvt32uLy0IFZjrg': {
    mentalModel: 'os包是操作系统的Go接口——文件、目录、进程、环境变量、信号，一切OS交互都在这。',
    sections: [
      { title: '文件操作', content: 'os.Open/ReadFile/WriteFile。os.Create/OpenFile。os.Remove/Rename。os.Mkdir/MkdirAll。os.ReadDir读取目录。' },
      { title: '进程信息', content: 'os.Args命令行参数。os.Getenv/Setenv环境。os.Exit退出。os.Getpid进程ID。os.FindProcess查找进程。os.Signal处理信号。' },
    ],
    diagnosis: [{ symptom: '用os.Chmod修改权限但数值写法不对', cause: 'Go中权限用八进制0o前缀/os.FileMode', fix: 'os.Chmod("file",0o644)。os.FileMode(0644)。不用十进制。' }],
    exercises: [
      { level: '基础', task: '读取目录内容并列出所有文件名', hint: 'os.ReadDir', answer: 'entries,_:=os.ReadDir(".");for _,e:=range entries{fmt.Println(e.Name(),e.IsDir())}' },
      { level: '进阶', task: '实现文件监视器监听文件修改', hint: 'os.Stat对比ModTime', answer: 'func watchFile(path string){init,_:=os.Stat(path);for{time.Sleep(time.Second);curr,_:=os.Stat(path);if curr.ModTime()!=init.ModTime(){fmt.Println("changed!");init=curr}}}' },
    ],
  },
  'Z8j6Zkg1LYEYcoRgs23Ms': {
    mentalModel: 'bufio是带缓冲的I/O助手——减少系统调用次数，一次读一块存缓冲区，按需取用。',
    sections: [
      { title: 'Reader', content: 'bufio.NewReader(r)创建。ReadLine/ReadString/ReadBytes。Peek偷看不消费。缓冲默认4096字节。' },
      { title: 'Writer', content: 'bufio.NewWriter(w)创建。Write/WriteString写入缓冲。Flush()刷到目标。defer w.Flush()。' },
    ],
    diagnosis: [{ symptom: 'bufio.Writer忘记Flush数据丢失', cause: 'Write写入缓冲区未达到目标', fix: 'defer w.Flush()。或达到缓冲大小自动Flush。程序结束时确保Flush。' }],
    exercises: [
      { level: '基础', task: '用bufio逐行读大文件', hint: 'bufio.NewScanner', answer: 'f,_:=os.Open("big.txt");defer f.Close();s:=bufio.NewScanner(f);for s.Scan(){fmt.Println(s.Text())}' },
      { level: '进阶', task: '用bufio.Writer批量写后Flush', hint: 'bufio.NewWriter', answer: 'w:=bufio.NewWriter(os.Stdout);w.WriteString("hello");w.WriteString(" world");w.Flush()//hello world' },
    ],
  },
  'hFlbSSBMcJtjXNL8jAcbc': {
    mentalModel: 'slog是Go 1.21的结构化日志库——键值对日志、多级别、多handler，替代log包。',
    sections: [
      { title: '基本用法', content: 'slog.Info("msg","key",val)。slog.Error/Warn/Debug。slog.With预绑定字段。slog.NewTextHandler/slog.NewJSONHandler。' },
      { title: '与log区别', content: 'slog是结构化(键值对)vs log是格式化(文本)。slog支持级别过滤。slog支持context传递。slog支持自定义handler(写文件/网络)。' },
    ],
    diagnosis: [{ symptom: 'slog输出JSON格式但key顺序不固定', cause: 'Go map迭代顺序随机', fix: '用slog.NewJSONHandler(&buf,nil)。可控顺序用slog.With提前绑定。业务逻辑不应依赖key顺序。' }],
    exercises: [
      { level: '基础', task: '用slog输出结构化日志', hint: 'slog.Info/Warn/Error', answer: 'slog.Info("user login","userID",123,"ip","1.2.3.4");slog.Error("db fail","err",err,"query","SELECT...")' },
      { level: '进阶', task: '用slog.With预绑定公共字段', hint: 'slog.With', answer: 'logger:=slog.With("service","api","version","1.0");logger.Info("start")//自动带service和version' },
    ],
  },
  '9K5ffACdKNPJiWPq4tUWD': {
    mentalModel: 'regexp包是正则引擎——字符串匹配、提取、替换，RE2标准保证线性时间不回溯爆炸。',
    sections: [
      { title: '基本用法', content: 'regexp.MustCompile(pattern)编译(panic on err)。regexp.Compile(pattern)(error)。MatchString/FindString/FindAllString。ReplaceAllString。' },
      { title: '正则语法', content: '.匹配任意字符。*零或多。+一或多。?零或一。\\d数字\\w字母\\s空白。^开头$结尾。\\b边界。(...)捕获组。' },
    ],
    diagnosis: [{ symptom: '用.*匹配导致性能灾难(ReDoS)', cause: 'Go用RE2算法线性时间不回溯——不会ReDoS', fix: 'Go的正则不受灾难性回溯影响。但.*在长字符串中仍可能慢。精确pattern减少匹配范围。' }],
    exercises: [
      { level: '基础', task: '用正则验证邮箱格式', hint: 'regexp.MustCompile(`^[\\w.-]+@[\\w.-]+\\.\\w+$`)', answer: 're:=regexp.MustCompile(`^[\\w.-]+@[\\w.-]+\\.\\w+$`);fmt.Println(re.MatchString("a@b.com"))//true' },
      { level: '进阶', task: '用正则提取字符串中的所有数字', hint: 'regexp.FindAllString', answer: 're:=regexp.MustCompile(`\\d+`);fmt.Println(re.FindAllString("a1b23c456",-1))//[1 23 456]' },
    ],
  },
  'iIPk-jK1vBCG_rKI_MPiu': {
    mentalModel: 'go:embed是Go 1.16的嵌入指令——把文件、目录编译进二进制，部署单文件不用带资源。',
    sections: [
      { title: '基本用法', content: '//go:embed hello.txt;var content string。//go:embed static/*;var staticFS embed.FS。支持string/[]byte/embed.FS。' },
      { title: '限制', content: '只能嵌入当前目录及子目录。不能用..或绝对路径。不能用*_test.go文件。嵌入变量必须在包级别声明。路径中不能有.和..。' },
    ],
    diagnosis: [{ symptom: 'embed嵌入的目录路径在运行时怎么访问', cause: 'embed.FS实现了fs.FS接口', fix: 'f,_:=staticFS.Open("static/index.html");或http.FileServer(http.FS(staticFS))。路径相对嵌入源目录。' }],
    exercises: [
      { level: '基础', task: '用go:embed嵌入配置文件', hint: '//go:embed config.json', answer: '//go:embed config.json;var config []byte; json.Unmarshal(config,&cfg)' },
      { level: '进阶', task: '用embed.FS嵌入整个静态文件目录', hint: '//go:embed static/*', answer: '//go:embed static/*;var staticFS embed.FS;http.Handle("/static/",http.StripPrefix("/static/",http.FileServer(http.FS(staticFS))))' },
    ],
  },
  '2fk1ewM42WnFlDejVETys': {
    mentalModel: '构建CLI是Go的看家本领——编译成单一二进制，交叉编译全平台，标准库flag就够了。',
    sections: [
      { title: 'CLI框架选择', content: 'flag:标准库简单场景。Cobra:功能最全(Viper+配置)。urfave/cli:轻量优雅。bubbletea:TUI命令行界面。' },
      { title: '输入输出', content: 'os.Stdin/os.Stdout/os.Stderr。fmt.Scan/fmt.Scanln读取输入。bufio.Scanner读行。os.Exit(code)设置退出码。' },
    ],
    diagnosis: [{ symptom: 'flag包帮助信息都是英文想改成中文', cause: 'flag包自动生成Usage默认英文', fix: 'flag.Usage=func(){fmt.Fprintf(flag.CommandLine.Output(),"用法...")}。或换Cobra天然支持国际化。' }],
    exercises: [
      { level: '基础', task: '用flag+os.Args构建简单CLI', hint: 'flag.String/flag.Int', answer: 'name:=flag.String("name","World","名字");flag.Parse();if flag.NArg()>0{fmt.Println("剩余参数:",flag.Args())}' },
      { level: '进阶', task: '用Cobra构建多子命令CLI', hint: 'cobra.Command', answer: 'var rootCmd=&cobra.Command{Use:"app",Run:func(cmd*cobra.Command,args[]string){}};rootCmd.AddCommand(&cobra.Command{Use:"serve",Run:func(...){}});rootCmd.Execute()' },
    ],
  },
  '3frPZLeFXnHroY7_Uk5Dn': {
    mentalModel: 'Cobra是Go CLI事实标准——Kubernetes、Hugo、GitHub CLI都用它，子命令、flag、help一步到位。',
    sections: [
      { title: '核心概念', content: 'cobra.Command:命令定义。Use/Short/Long:帮助文本。Run:命令逻辑。AddCommand:子命令。PersistentFlags:继承flag。' },
      { title: '工程结构', content: 'cmd/root.go:根命令。cmd/sub.go:子命令。main.go只调用Execute()。cobra-cli init生成项目骨架。' },
    ],
    diagnosis: [{ symptom: 'Cobra命令中Run vs RunE搞混', cause: 'Run:无错误返回。RunE:返回error', fix: '用RunE返回error统一处理。rootCmd.Execute()自动打印RunE返回的错误。' }],
    exercises: [
      { level: '基础', task: '用Cobra构建有version和greet子命令的CLI', hint: 'cobra.Command', answer: 'var rootCmd=&cobra.Command{Use:"app"};rootCmd.AddCommand(&cobra.Command{Use:"version",Run:func(cmd*cobra.Command,args[]string){fmt.Println("v1.0")}});rootCmd.Execute()' },
      { level: '进阶', task: '在Cobra中用Viper绑定配置', hint: 'viper.BindPFlag', answer: 'cobra.OnInitialize(initConfig);func initConfig(){viper.AutomaticEnv()};cmd.Flags().String("config","","config file");viper.BindPFlag("config",cmd.Flags().Lookup("config"))' },
    ],
  },
  'bmNLSk-XuK2EuLxPR1Sxh': {
    mentalModel: 'urfave/cli是轻量CLI库——API简洁、代码清晰，适合中小型CLI项目。',
    sections: [
      { title: '核心概念', content: 'app:=&cli.App{Name,Usage,Flags,Action}。app.Run(os.Args)入口。Flags定义参数。Action是命令逻辑。' },
      { title: '与Cobra对比', content: 'urfave/cli更简单(单一context)。Cobra更强大(子命令/cobra-cli)。urfave/cli适合单命令工具。Cobra适合复杂多命令CLI。' },
    ],
    diagnosis: [{ symptom: 'urfave/cli中BoolFlag设为true实际是false', cause: 'Bool flag的默认行为和用法', fix: '用&cli.BoolFlag{Name:"verbose",Value:false}。或cli.BoolTFlag{Name:"no-xxx"}。Bool flag不加值时默认设为true。' }],
    exercises: [
      { level: '基础', task: '用urfave/cli构建有flag的简单CLI', hint: 'cli.App', answer: 'app:=&cli.App{Flags:[]cli.Flag{&cli.StringFlag{Name:"lang",Value:"en"}},Action:func(c*cli.Context)error{fmt.Println("Hello",c.String("lang"));return nil}};app.Run(os.Args)' },
      { level: '进阶', task: '实现子命令用urfave/cli', hint: 'app.Commands', answer: 'app.Commands=[]*cli.Command{{Name:"add",Action:func(c*cli.Context)error{return nil}},{Name:"list",Action:func(c*cli.Context)error{return nil}}}' },
    ],
  },
  'x9hDkF73rmvbewrgRgyOv': {
    mentalModel: 'bubbletea是TUI框架——基于Elm架构(Model/Update/View)，构建交互式终端应用，像写React一样写CLI。',
    sections: [
      { title: 'Elm架构', content: 'Model:状态数据。Init:初始化。Update(msg):处理消息返回新Model。View():渲染视图。消息驱动单向数据流。' },
      { title: '使用场景', content: '终端仪表板、交互式表单、Git TUI(lazygit风格)、SSH客户端、文件管理器。' },
    ],
    diagnosis: [{ symptom: 'bubbletea的Update返回tea.Cmd但没执行', cause: 'tea.Cmd是异步命令需tea.Batch或返回', fix: 'return model,tea.Batch(cmd1,cmd2)。或 model,cmd 然后 bubbletea runtime执行。' }],
    exercises: [
      { level: '基础', task: '用bubbletea写hello world TUI', hint: 'tea.Model', answer: 'type model struct{count int};func(m model)Init()tea.Cmd{return nil};func(m model)Update(msg tea.Msg)(tea.Model,tea.Cmd){return m,nil};func(m model)View()string{return fmt.Sprintf("Count:%d",m.count)}' },
      { level: '进阶', task: '实现计数器TUI监听按键', hint: 'case tea.KeyMsg', answer: 'func(m model)Update(msg tea.Msg)(tea.Model,tea.Cmd){switch msg:=msg.(type){case tea.KeyMsg:switch msg.String(){case"q":return m,tea.Quit;case"+":m.count++}};return m,nil}' },
    ],
  },
  'CwGw3CDVLqErQGTwjzhmL': {
    mentalModel: 'Web开发是Go的强项——标准库net/http就能上生产，加上router和middleware生态如虎添翼。',
    sections: [
      { title: '技术选型', content: '标准库:性能第一依赖最少。gin:最快最流行。echo:轻量高性能。fiber:Express风格。chi:idiomatic Go轻量。' },
      { title: '项目结构', content: 'cmd/:入口。internal/:私有代码。handler/:HTTP处理器。service/:业务逻辑。repository/:数据访问。middleware/:中间件。' },
    ],
    diagnosis: [{ symptom: '把所有代码放在main.go越来越难维护', cause: '项目变大main.go膨胀', fix: 'Go标准项目布局：cmd/internal/pkg。handler/service/repository分层。参考golang-standards/project-layout。' }],
    exercises: [
      { level: '基础', task: '用net/http写带router的API服务', hint: 'http.HandleFunc+http.ServeMux', answer: 'mux:=http.NewServeMux();mux.HandleFunc("GET /users/",listUsers);mux.HandleFunc("POST /users/",createUser);http.ListenAndServe(":8080",mux)' },
      { level: '进阶', task: '实现一个日志中间件', hint: 'func(next http.Handler)http.Handler', answer: 'func logging(next http.Handler)http.Handler{return http.HandlerFunc(func(w http.ResponseWriter,r*http.Request){start:=time.Now();next.ServeHTTP(w,r);log.Printf("%s %s %v",r.Method,r.URL,time.Since(start))})}' },
    ],
  },
  'NMLmbKjfMSqz-Iz2CooCl': {
    mentalModel: 'net/http是Go的HTTP基石——不依赖第三方，ServeMux路由、Handler接口、TLS、HTTP/2一应俱全。',
    sections: [
      { title: '核心类型', content: 'http.Handler接口:ServeHTTP(w,r)。http.HandlerFunc适配函数。http.ServeMux多路复用器。http.Client客户端。http.Server服务器。' },
      { title: 'Go 1.22增强', content: '方法路由:HandleFunc("GET /users/{id}",h)。路径参数:r.PathValue("id")。模式匹配更强大。不再需要第三方router简单场景。' },
    ],
    diagnosis: [{ symptom: '升级Go 1.22后之前的mux路由报错', cause: 'Go 1.22 ServeMux模式匹配规则更严格', fix: '检查路由pattern中是否有通配符冲突。旧style /users/不再隐式匹配/users。用确切pattern。' }],
    exercises: [
      { level: '基础', task: '用Go 1.22 ServeMux写REST API', hint: 'mux.HandleFunc("METHOD /path",handler)', answer: 'mux:=http.NewServeMux();mux.HandleFunc("GET /api/users/{id}",func(w http.ResponseWriter,r*http.Request){id:=r.PathValue("id");fmt.Fprint(w,"user:",id)})' },
      { level: '进阶', task: '用http.Client设置超时和重试', hint: 'http.Client{Timeout:...}', answer: 'client:=&http.Client{Timeout:10*time.Second};resp,err:=client.Get("https://api.example.com")' },
    ],
  },
  'xM1uUCXNrJwfTgi9E75KV': {
    mentalModel: 'gin是Go最快的HTTP框架——基于httprouter，零内存分配的路由，中间件生态丰富。',
    sections: [
      { title: '核心特性', content: 'gin.Default()创建引擎。c.JSON/Html/String响应。c.Query/Param/PostForm获取参数。中间件:r.Use(...)。路由分组:r.Group("/api")。' },
      { title: '与标准库对比', content: 'gin路由性能更高(httprouter基数树)。参数绑定c.ShouldBindJSON。验证器内置。日志/Recovery默认中间件。' },
    ],
    diagnosis: [{ symptom: 'gin.Default()自动加了个Logger和Recovery', cause: 'Default()包含了Logger和Recovery中间件', fix: '生产用Default()。需要无中间件用gin.New()。Recovery捕获panic返回500。' }],
    exercises: [
      { level: '基础', task: '用gin写CRUD API', hint: 'gin.Default', answer: 'r:=gin.Default();r.GET("/users",func(c*gin.Context){c.JSON(200,gin.H{"users":users})});r.POST("/users",func(c*gin.Context){var u User;c.ShouldBindJSON(&u);c.JSON(201,u)});r.Run(":8080")' },
      { level: '进阶', task: 'gin中间件实现请求耗时统计', hint: 'r.Use(...)', answer: 'r.Use(func(c*gin.Context){start:=time.Now();c.Next();fmt.Printf("%s took %v\\n",c.Request.URL,time.Since(start))})' },
    ],
  },
  '1qhqEYf6wYf5sfXgTUnmi': {
    mentalModel: 'echo是轻量高性能HTTP框架——路由快、中间件优雅、API简洁，适合微服务。',
    sections: [
      { title: '核心特性', content: 'e:=echo.New()。e.GET/POST等。c.String/JSON/HTML。c.QueryParam/FormValue。中间件:e.Use(...)。Group:e.Group("/api")。' },
      { title: '与gin对比', content: 'echo更轻量(更少依赖)。echo Context更接近标准http.ResponseWriter。gin更流行文档更多。性能接近。选择看团队偏好。' },
    ],
    diagnosis: [{ symptom: 'echo的c.JSON(200,data)数据被反射多次', cause: 'echo内部用json.Marshal序列化', fix: '性能敏感用c.JSONBlob或直接c.Response().Writer。普通场景不用优化。' }],
    exercises: [
      { level: '基础', task: '用echo写TODO API', hint: 'echo.New', answer: 'e:=echo.New();e.GET("/todos",func(c echo.Context)error{return c.JSON(200,todos)});e.POST("/todos",func(c echo.Context)error{t:=new(Todo);c.Bind(t);return c.JSON(201,t)});e.Start(":8080")' },
      { level: '进阶', task: 'echo自定义错误处理', hint: 'e.HTTPErrorHandler', answer: 'e.HTTPErrorHandler=func(err error,c echo.Context){code:=http.StatusInternalServerError;if he,ok:=err.(*echo.HTTPError);ok{code=he.Code};c.JSON(code,map[string]string{"error":err.Error()})}' },
    ],
  },
  '5lJPsJwgy0_T7Xl6eQxuB': {
    mentalModel: 'fiber是Express风格的Go框架——API类似Express.js，前端转全栈的Go开发者首选。',
    sections: [
      { title: '核心特性', content: 'app:=fiber.New()。app.Get/Post等。c.JSON/Send/String。c.Params/Query/Body。中间件:app.Use(...)。Group:app.Group("/api")。' },
      { title: '与Express对比', content: 'API几乎1:1映射Express。但底层是fasthttp(非net/http)。不是标准库handler兼容。性能极好。前端开发者友好。' },
    ],
    diagnosis: [{ symptom: 'fiber与标准库http.Handler不兼容', cause: 'fiber基于fasthttp不是net/http', fix: '用fiberadaptor转换。或用fasthttpadaptor转回标准库。选fiber就别混用net/http。' }],
    exercises: [
      { level: '基础', task: '用fiber写文件上传API', hint: 'fiber.New', answer: 'app:=fiber.New();app.Post("/upload",func(c*fiber.Ctx)error{file,_:=c.FormFile("file");c.SaveFile(file,"./uploads/"+file.Filename);return c.SendString("uploaded")})' },
      { level: '进阶', task: 'fiber中间件链', hint: 'app.Use', answer: 'app.Use(func(c*fiber.Ctx)error{c.Set("X-Custom","value");return c.Next()});app.Use(logger.New())' },
    ],
  },
  'p7yeYkbQKAjr2aA_eUno4': {
    mentalModel: 'beego是老牌Go框架——MVC架构、ORM内置、脚手架工具，适合传统Web应用快速开发。',
    sections: [
      { title: '核心特性', content: 'bee new/runc脚手架。MVC架构(Models/Views/Controllers)。内置ORM。内置Cache。内置Logs。Swagger自动生成。' },
      { title: '适用场景', content: '传统MVC Web应用。CMS/管理后台。需要完整框架(不拼接)。团队从其他MVC框架(Spring/Django)转Go。' },
    ],
    diagnosis: [{ symptom: 'beego项目生成太多文件不知从哪改', cause: 'bee new生成的MVC结构', fix: '从routers/router.go看路由。views/是模板。controllers/是处理器。bee run热加载。参考beego.me文档。' }],
    exercises: [
      { level: '基础', task: '用bee创建beego项目', hint: 'bee new myapp', answer: 'bee new myapp;cd myapp;bee run' },
      { level: '进阶', task: '在beego controller中返回JSON', hint: 'c.Data["json"]', answer: 'type UserController struct{beego.Controller};func(c*UserController)Get(){c.Data["json"]=map[string]string{"name":"Alice"};c.ServeJSON()}' },
    ],
  },
  'tBY6UB3gWZAxHPCFHoU_d': {
    mentalModel: 'gRPC和Protocol Buffers是微服务通信标配——protobuf定义接口，gRPC高性能RPC，Go原生支持。',
    sections: [
      { title: '核心概念', content: '.proto文件定义服务和消息。protoc编译生成Go代码。服务端实现生成接口。客户端用生成client调用。HTTP/2传输。' },
      { title: '优势', content: '二进制序列化(比JSON小3-10倍)。强类型契约。流式RPC(单向/双向)。自动生成代码。跨语言互操作。' },
    ],
    diagnosis: [{ symptom: '.proto改了但没重新生成代码', cause: 'protobuf定义和代码不同步', fix: 'protoc --go_out=. --go-grpc_out=. *.proto重新生成。或用buf工具自动生成。CI中检查生成代码是否同步。' }],
    exercises: [
      { level: '基础', task: '用protobuf定义用户服务', hint: '.proto+protoc', answer: 'syntax="proto3";service UserService{rpc GetUser(GetUserReq)returns(User);};message GetUserReq{string id=1;};message User{string id=1;string name=2;}' },
      { level: '进阶', task: '实现gRPC服务端和客户端', hint: 'google.golang.org/grpc', answer: '//服务端:lis,_:=net.Listen("tcp",":50051");s:=grpc.NewServer();pb.RegisterUserServiceServer(s,&server{});s.Serve(lis)//客户端:conn,_:=grpc.Dial(":50051");c:=pb.NewUserServiceClient(conn);resp,_:=c.GetUser(ctx,&pb.GetUserReq{Id:"123"})' },
    ],
  },
  'VcHHuIZ4lGzTxOoTwxA3e': {
    mentalModel: 'ORM与数据库访问——Go的database/sql是基础，ORM(GORM)和查询构建器(sqlx/pgx)各有所长。',
    sections: [
      { title: 'database/sql', content: 'sql.Open连接池。Query/QueryRow查询。Exec执行。Prepare预编译。Row.Scan读取。sql.NullString处理NULL。' },
      { title: 'ORM vs 原生SQL', content: 'GORM:自动迁移/关联/Hooks。sqlx:轻量struct映射。pgx:PostgreSQL原生(最快)。原生SQL:完全控制/无魔法。' },
    ],
    diagnosis: [{ symptom: 'GORM的Updates传入struct零值字段不更新', cause: 'GORM Updates只更新非零值字段', fix: '用map[string]any更新：db.Model(&user).Updates(map[string]any{"age":0})。或用Select指定字段。' }],
    exercises: [
      { level: '基础', task: '用database/sql查询SQLite', hint: 'database/sql+driver', answer: 'db,_:=sql.Open("sqlite3","test.db");rows,_:=db.Query("SELECT id,name FROM users");for rows.Next(){var id int;var name string;rows.Scan(&id,&name)}' },
      { level: '进阶', task: '用GORM定义User模型并CRUD', hint: 'gorm.Model', answer: 'type User struct{gorm.Model;Name string;Age int};db.AutoMigrate(&User{});db.Create(&User{Name:"Bob",Age:30});var u User;db.First(&u,"name=?","Bob")' },
    ],
  },
  'cOj6klfBzTQQ8G75umLQZ': {
    mentalModel: 'pgx是PostgreSQL最快的Go驱动——比lib/pq快4倍，原生支持COPY、LISTEN/NOTIFY、数组/hstore。',
    sections: [
      { title: '核心特性', content: 'pgxpool连接池。pgx/v5最新版本。支持PostgreSQL所有类型。批量操作pgx.CopyFrom。LISTEN/NOTIFY异步通知。预处理语句缓存。' },
      { title: '与database/sql', content: 'pgx同时实现了database/sql接口和原生接口。原生接口更快(零适配)。用pgxpool替代sql.DB。用pgx/v5/pgxpool。' },
    ],
    diagnosis: [{ symptom: 'pgx连接池用完后忘了释放', cause: '池耗尽连接池', fix: 'defer conn.Release()。或用defer rows.Close()。pgxpool自动管理但手动获取的conn需Release。' }],
    exercises: [
      { level: '基础', task: '用pgx连接PostgreSQL执行查询', hint: 'pgxpool', answer: 'pool,_:=pgxpool.New(ctx,os.Getenv("DATABASE_URL"));defer pool.Close();var name string;pool.QueryRow(ctx,"SELECT name FROM users WHERE id=$1",1).Scan(&name)' },
      { level: '进阶', task: '用pgx.CopyFrom批量插入', hint: 'pgx.CopyFrom', answer: 'rows:=[][]any{{"Alice",30},{"Bob",25}};_,err:=conn.CopyFrom(ctx,pgx.Identifier{"users"},[]string{"name","age"},pgx.CopyFromRows(rows))' },
    ],
  },
  'fJdZIbAgOAB8nOEHQNsq6': {
    mentalModel: 'GORM是Go最流行的ORM——AutoMigrate、关联、钩子、事务，功能最全但也是"魔法"最多的。',
    sections: [
      { title: '核心特性', content: 'gorm.Model(ID,CreatedAt,UpdatedAt,DeletedAt)。AutoMigrate建表。Create/Find/Update/Delete。Preload预加载。HasMany/BelongsTo。' },
      { title: '最佳实践', content: '明确Select不用*。用Transaction包裹多操作。Preload避免N+1。批量操作用CreateInBatches。软删除用gorm.DeletedAt。' },
    ],
    diagnosis: [{ symptom: 'GORM的软删除后查询自动加WHERE deleted_at IS NULL', cause: 'gorm.Model自带DeletedAt字段', fix: 'db.Unscoped().Find(&users)忽略软删除。db.Delete(&user)设置deleted_at不算真删除。' }],
    exercises: [
      { level: '基础', task: '用GORM定义User有多个Orders', hint: 'HasMany', answer: 'type User struct{gorm.Model;Orders[]Order};type Order struct{gorm.Model;UserID uint;Amount int};db.AutoMigrate(&User{});db.Preload("Orders").Find(&users)' },
      { level: '进阶', task: 'GORM事务示例', hint: 'db.Transaction', answer: 'db.Transaction(func(tx*gorm.DB)error{if err:=tx.Create(&order).Error;err!=nil{return err};if err:=tx.Model(&user).Update("balance",newBalance).Error;err!=nil{return err};return nil})' },
    ],
  },
  'mGia5cJ7HFVXM0Fx5xhQE': {
    mentalModel: '日志是生产环境的眼睛——选对日志库(slog/Zap/Zerolog)，结构化输出，分级可控。',
    sections: [
      { title: '日志选型', content: 'slog:Go 1.21标准库首选。Zap:uber高性能结构化日志。Zerolog:零内存分配JSON日志。logrus:老牌但慢(不推荐新项目)。' },
      { title: '最佳实践', content: '结构化日志(键值对)。分级(DEBUG/INFO/WARN/ERROR)。Context贯穿传递。敏感信息脱敏。采样降低高QPS。' },
    ],
    diagnosis: [{ symptom: '生产环境DEBUG日志太多撑爆磁盘', cause: '日志级别没控制', fix: '生产用INFO或WARN。用环境变量控制级别。用日志采样(如zap的Sampling)。日志轮转。' }],
    exercises: [
      { level: '基础', task: '用slog输出不同级别日志', hint: 'slog.Info/Warn/Error', answer: 'slog.Debug("detail query","sql",query);slog.Info("req complete","status",200);slog.Error("fail","err",err);slog.SetLogLoggerLevel(slog.LevelInfo)' },
      { level: '进阶', task: '用Zerolog输出JSON日志到文件', hint: 'zerolog', answer: 'f,_:=os.OpenFile("app.log",os.O_APPEND|os.O_CREATE|os.O_WRONLY,0644);log:=zerolog.New(f).With().Timestamp().Logger();log.Info().Str("user","alice").Msg("login")' },
    ],
  },
  'TR7N68_evDMu3qWHbGJcz': {
    mentalModel: 'Zerolog是零内存分配JSON日志库——API链式调用，高性能、低开销，适合高吞吐场景。',
    sections: [
      { title: '核心特性', content: 'zerolog.New(w).With().Logger()。链式API:log.Info().Str("key","val").Msg("msg")。零内存分配。JSON输出默认。级别可控。' },
      { title: '使用场景', content: '高QPS服务(每请求多日志)。微服务(JSON便于日志收集)。性能敏感应用。替代logrus。配合loki/elk。' },
    ],
    diagnosis: [{ symptom: 'Zerolog输出的时间格式不对', cause: 'Zerolog默认Unix时间', fix: 'zerolog.TimeFieldFormat=zerolog.TimeFormatUnixMs。或用time.RFC3339。GlobalLevel控制级别。' }],
    exercises: [
      { level: '基础', task: '用Zerolog输出HTTP请求日志', hint: 'zerolog.Hook', answer: 'log:=zerolog.New(os.Stdout).With().Timestamp().Logger();log.Info().Str("method",r.Method).Str("path",r.URL.Path).Int("status",status).Msg("request")' },
      { level: '进阶', task: 'Zerolog子Logger预绑定字段', hint: 'log.With()', answer: 'sub:=log.With().Str("component","db").Logger();sub.Info().Msg("connected");sub.Error().Err(err).Msg("query failed")' },
    ],
  },
  '4D8QsZVAUB9vGbVFgRHt4': {
    mentalModel: 'Zap是Uber出品的高性能结构化日志——比slog快、比logrus快10倍，生产级首选。',
    sections: [
      { title: '核心特性', content: 'zap.NewProduction()/NewDevelopment()。zap.L()全局替换。Sugar便捷API。Field(key,val)结构字段。Level原子动态调整。' },
      { title: '两种API', content: 'zap.Logger:强类型最快(用Field)。zap.SugaredLogger:便捷(用Infow/Infof)。Sugar内部调Logger微损性能。批量建Field用zapcore.Field。' },
    ],
    diagnosis: [{ symptom: 'zap和slog怎么选', cause: 'Go 1.21内置slog后zap的使用场景', fix: '需要极致性能用zap。需零依赖用slog。现有项目有zap不用迁移。新项目优先slog。' }],
    exercises: [
      { level: '基础', task: '用Zap输出结构化日志', hint: 'zap.NewProduction', answer: 'logger,_:=zap.NewProduction();defer logger.Sync();logger.Info("user login",zap.String("user","alice"),zap.Int("age",30))' },
      { level: '进阶', task: 'Zap动态调整日志级别', hint: 'http handler', answer: 'var lvl zap.AtomicLevel;lvl.UnmarshalText([]byte("debug"));logger:=zap.New(zapcore.NewCore(zapcore.NewJSONEncoder(zap.NewProductionEncoderConfig()),zapcore.Lock(os.Stdout),lvl))' },
    ],
  },
  'o2EYfm1WSd8Eq_ZcXYreo': {
    mentalModel: '实时通信是WebSocket的世界——Go的gorilla/websocket加上channel实现聊天、通知、游戏。',
    sections: [
      { title: 'WebSocket基础', content: 'HTTP Upgrade到WebSocket。gorilla/websocket。Upgrader升级连接。ReadMessage/WriteMessage。心跳Ping/Pong。' },
      { title: '扩展方案', content: 'Centrifugo:独立实时消息服务。Melody:gorilla/websocket的简洁封装。SSE:单向服务端推送(不用WebSocket)。gRPC stream:双向流。' },
    ],
    diagnosis: [{ symptom: 'WebSocket连接断开后没有自动重连', cause: 'WebSocket不自动重连需要客户端逻辑', fix: '客户端实现指数退避重连。服务端用Ping/Pong检测心跳。或用Centrifugo内置重连。' }],
    exercises: [
      { level: '基础', task: '用gorilla/websocket实现Echo服务', hint: 'gorilla/websocket', answer: 'var up=websocket.Upgrader{};http.HandleFunc("/ws",func(w http.ResponseWriter,r*http.Request){conn,_:=up.Upgrade(w,r,nil);defer conn.Close();for{_,msg,_:=conn.ReadMessage();conn.WriteMessage(websocket.TextMessage,msg)}})' },
      { level: '进阶', task: '实现聊天广播hub', hint: 'map[*websocket.Conn]bool', answer: 'type Hub struct{clients map[*Client]bool;broadcast chan[]byte};hub:=&Hub{clients:make(map[*Client]bool),broadcast:make(chan[]byte)};go hub.Run()' },
    ],
  },
  'N0EG-7sU9lGFwgidXuPkV': {
    mentalModel: 'Melody是gorilla/websocket的简洁封装——自动处理连接/断开/Ping，简化广播和session管理。',
    sections: [
      { title: '核心特性', content: 'melody.New()创建。m.HandleConnect/HandleDisconnect。m.HandleMessage处理消息。m.Broadcast广播。session存储连接数据。' },
      { title: '适用场景', content: '简单WebSocket应用。不需要Centrifugo的独立服务。快速原型和中小规模实时应用。' },
    ],
    diagnosis: [{ symptom: 'Melody的Broadcast对所有连接发送不含过滤', cause: 'Broadcast是全员广播无分组', fix: '用m.BroadcastFilter实现条件广播。或自行管理房间：map[room][]*Session。' }],
    exercises: [
      { level: '基础', task: '用Melody写WebSocket聊天', hint: 'melody.New()', answer: 'm:=melody.New();m.HandleMessage(func(s*melody.Session,msg[]byte){m.Broadcast(msg)});http.HandleFunc("/ws",func(w http.ResponseWriter,r*http.Request){m.HandleRequest(w,r)})' },
      { level: '进阶', task: 'Melody实现房间广播', hint: 'session.Set+Filter', answer: 'm.HandleConnect(func(s*melody.Session){s.Set("room","lobby")});m.BroadcastFilter(msg,func(s*melody.Session)bool{room,_:=s.Get("room");return room=="lobby"})' },
    ],
  },
  'LOl-7BtdmYrBS0PTtHI1I': {
    mentalModel: 'Centrifugo是独立实时消息服务——用Go编写，支持WebSocket/SockJS/SSE，channel订阅、在线状态、历史消息。',
    sections: [
      { title: '核心特性', content: '独立服务(非框架集成)。多种传输(WS/SSE/HTTP-stream)。频道订阅/发布。在线状态。消息历史。JWT认证。gRPC API。' },
      { title: '适用场景', content: '大规模实时应用(聊天/通知/协作)。微服务架构独立部署。需要消息持久化和历史。不想自己实现实时层。' },
    ],
    diagnosis: [{ symptom: 'Centrifugo和直接WebSocket的区别', cause: 'Centrifugo是独立服务而非库', fix: 'Centrifugo独立部署需单独运维。小项目用gorilla/websocket或melody更简单。大规模才需要Centrifugo。' }],
    exercises: [
      { level: '基础', task: 'Centrifugo基本配置启动', hint: 'centrifugo genconfig', answer: 'centrifugo genconfig;centrifugo -c config.json' },
      { level: '进阶', task: '用Centrifugo的JS客户端订阅频道', hint: 'centrifuge-js', answer: 'const c=new Centrifuge("ws://localhost:8000/connection/websocket");c.connect();c.subscribe("chat",(msg)=>{console.log(msg)})' },
    ],
  }
};