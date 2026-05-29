import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_2: Record<string, DeepTutorial> = {
  // ============================================================
  // 31. Version Control Systems / 版本控制系统
  // ============================================================
  "ezdqQW9wTUw93F6kjOzku": {
    mentalModel: '版本控制就像写论文时的"另存为"——v1、v2、最终版、最终版2...只不过 Git 帮你在每次"另存为"时记录了什么改了、谁改的、为什么改，而且存储空间极小。',
    sections: [
      { title: '为什么必须用版本控制', content: '现实场景：你改了一个 bug，上线后发现引入了更大的 bug，需要回退——没有版本控制只能从备份恢复或凭记忆改回去。有了 Git：git revert <commit> 一键撤销。版本控制解决了：1) 历史追溯（谁在什么时候改了什么）2) 回退能力（回到任何历史版本）3) 并行开发（分支让多人同时工作）4) 备份（每个 clone 都是完整备份）。' },
      { title: '集中式 vs 分布式', content: 'SVN（集中式）：只有一个中央仓库，离线不能 commit，服务器挂了全员停工。Git（分布式）：每个人本地都有完整仓库和历史，离线也能工作，远程仓库只是同步点。这就是为什么 Git 赢了——Linus 为 Linux 内核社区设计的模型完美匹配分布式协作。' },
    ],
    diagnosis: [
      { symptom: '团队里总有人"不小心覆盖了别人的代码"', cause: '没有使用版本控制，直接通过共享文件夹或 FTP 传文件。', fix: '引入 Git：每人独立分支开发，合并时如有冲突 Git 会精确标记，人工解决后再合并。' },
    ],
    exercises: [
      { level: '基础', task: '说出 Git 和手动"另存为文件"相比的三个优势', hint: '历史/回退/协作', answer: '1) 每次变更有注释记录（commit message）2) 可回到任意历史版本（checkout/revert）3) 多人并行开发不冲突（分支+合并）。' },
    ],
  },

  // ============================================================
  // 32. Copilot / GitHub Copilot
  // ============================================================
  "HQrxxDxKN8gizvXRU5psW": {
    mentalModel: 'Copilot 是你的"AI 结对编程伙伴"——它坐你旁边，看着你写的代码，时不时递上一段建议。你不需要全盘接受，但它能省掉大量重复敲字的时间。',
    sections: [
      { title: 'Copilot 能做什么', content: '1) 代码补全：写函数名，它猜出整个函数体 2) 根据注释生成代码：写 // validate email format，它自动生成正则验证 3) 生成测试：选中函数，让它生成单元测试 4) 解释代码：选中一段复杂代码让它用中文解释 5) 翻译代码：把 Python 代码转成 Go。对后端的价值：写 CRUD 接口、数据库查询、数据结构转换时节省 30-50% 时间。' },
      { title: '使用的原则', content: '1) Copilot 生成的代码你必须理解——它是"建议"不是"答案"2) 安全相关代码（加密/认证/SQL）必须人工审查 3) 不要盲目接受——AI 可能引入过时的 API 或不安全的依赖 4) Copilot 学自公开代码，可能包含 GPL 协议的代码片段（概率极低但需注意）。' },
    ],
    diagnosis: [
      { symptom: 'Copilot 建议的代码包含了过时或不安全的 API 调用', cause: 'Copilot 训练数据来自公开代码，可能包含旧版本 API 或安全漏洞。', fix: '1) 永远不盲目接受安全相关代码（加密/认证/SQL）2) 检查建议代码中引用的库版本是否为最新 3) 对 AI 生成的代码运行 lint 和安全扫描。' },
      { symptom: '过度依赖 Copilot，离开 AI 后自己写不出基础 CRUD', cause: '使用 Copilot 时没有理解代码，只是接受建议。', fix: '1) 每天至少手写 30 分钟代码不用 AI 辅助 2) 接受建议前先思考这里需要什么逻辑 3) 定期关闭 Copilot 做代码练习。' },
    ],
    exercises: [
      { level: '基础', task: '说出 AI 编程助手在后端开发中两个最实用的场景', hint: '重复代码、测试编写', answer: '1) 生成 CRUD 样板代码（节省手写 model/controller 时间）2) 自动生成单元测试（写测试往往是后端最耗时的部分之一）。' },
    ],
  },

  // ============================================================
  // 33. Git / Git
  // ============================================================
  "_I1E__wCIVrhjMk6IMieE": {
    mentalModel: 'Git 是开发者的"存档系统+时光机+平行宇宙"三合一。commit 是存档点，branch 是平行宇宙（你可以同时探索 5 种方案而不互相干扰），checkout/revert 让你穿越到任何时间点。',
    handsOn: [
      { title: '最常用 Git 命令速览', cmd: 'git status && git log --oneline -5 && git diff HEAD~1', output: 'On branch main\nYour branch is up to date with \'origin/main\'.\n\na1b2c3d Fix login bug\nb2c3d4e Add user avatar\nd3e4f5a Update API docs', explain: 'git status 看当前状态，git log 看历史，git diff 看具体改动。这三个命令占了日常使用 80% 的频率。' },
      { title: '分支操作实战', cmd: 'git checkout -b feature/new-api && echo "new code" > api.go && git add api.go && git commit -m "Add new API endpoint" && git checkout main && git merge feature/new-api', output: 'Switched to a new branch \'feature/new-api\'\n[feature/new-api a4b5c6d] Add new API endpoint\n 1 file changed, 1 insertion(+)\nSwitched to branch \'main\'\nUpdating a1b2c3d..a4b5c6d\nFast-forward', explain: '完整的分支工作流：创建分支→开发→提交→切回主分支→合并。Fast-forward 表示无冲突直接合并。' },
    ],
    diagnosis: [
      { symptom: 'git merge 时报 "CONFLICT (content): Merge conflict in ..."', cause: '两个分支修改了同一文件的同一行，Git 无法自动决定保留哪个。', fix: '打开冲突文件，找到 <<<<<<< ======= >>>>>>> 标记，手动选择保留的内容，删除标记，git add + git commit 完成合并。' },
      { symptom: 'commit 之后发现漏了一个文件或 message 写错了', cause: '正常操作失误。', fix: '漏文件：git add 漏掉的文件 + git commit --amend --no-edit（追加到上次 commit）。改 message：git commit --amend -m "New message"。注意：不要 amend 已经 push 的 commit。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个分支，在上面做一次提交，然后合并回 main', hint: 'git checkout -b → commit → checkout main → merge', answer: 'git checkout -b test-branch && echo "test" > test.txt && git add test.txt && git commit -m "test" && git checkout main && git merge test-branch' },
      { level: '进阶', task: '用 git stash 暂存当前修改，切到另一个分支修复紧急 bug，再回来恢复修改', hint: 'git stash → checkout → fix → commit → checkout → stash pop', answer: 'git stash && git checkout hotfix && (修复+commit) && git checkout feature && git stash pop。stash 是"临时保存"——你不想 commit 又需要切换分支时用它。' },
    ],
  },

  // ============================================================
  // 34. GitHub / GitHub
  // ============================================================
  "ptD8EVqwFUYr4W5A_tABY": {
    mentalModel: 'GitHub 是代码界的"社交网络"——全球开发者在这里分享代码、协作开发、讨论技术。它不只是个存代码的地方，更是程序员的简历和作品集。',
    sections: [
      { title: 'GitHub 在后端工作流中的角色', content: '1) 代码托管：远程仓库，push/pull 同步 2) Pull Request：代码审查和合并工作流 3) Issues：Bug 追踪、需求管理 4) Actions：CI/CD 自动构建/测试/部署 5) Projects：看板式项目管理 6) Wiki/Discussion：文档和讨论。完整开发流程：创建 Issue → 开分支 → 开发 → 提 PR → Code Review → CI 通过 → 合并 → 自动部署。' },
      { title: 'GitHub Profile 等于技术名片', content: '招聘方会看你的 GitHub：1) commit 频率和绿点 2) 参与/贡献的开源项目 3) 自己写的项目质量（README/代码规范/测试覆盖率）4) Star/Fork 数量。建议：把学习过程中的项目都推到 GitHub，写好 README（项目介绍+截图+如何运行），这比简历上的"熟练掌握 XX"有说服力 10 倍。' },
    ],
    handsOn: [
      { title: '关联本地仓库到 GitHub', cmd: 'git remote add origin git@github.com:username/repo.git && git push -u origin main', output: 'Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nTo github.com:username/repo.git\n * [new branch]      main -> main\nBranch \'main\' set up to track remote branch \'main\' from \'origin\'.', explain: 'remote add 关联远程仓库，push -u 首次推送并建立追踪关系。之后只需 git push 即可。' },
    ],
    diagnosis: [
      { symptom: 'git push 后 PR 显示大量无关的 diff（缩进/空格/换行符变化）', cause: '没有在项目中统一编辑器配置——不同的编辑器用了不同的缩进格式。', fix: '1) 项目根目录加 .editorconfig 统一配置 2) 添加 .gitattributes 设置 text=auto 3) Prettier/ESLint 作为 pre-commit hook 自动格式化。' },
      { symptom: 'GitHub Actions CI 突然全部失败，但代码没改', cause: 'CI 依赖的外部服务（npm registry/Docker Hub）不可用或 rate limit；或 runner 版本升级导致不兼容。', fix: '1) 检查 Actions workflow 日志中的具体错误 2) 使用官方 action 时指定版本号（@v4 而非 @latest）3) 本地用 act 工具模拟 CI 运行。' },
    ],
    exercises: [
      { level: '基础', task: '在 GitHub 新建仓库，把本地代码 push 上去', hint: 'GitHub 新建仓库后会显示指引命令', answer: '1) GitHub 点 New Repository 2) 本地：git remote add origin git@github.com:user/repo.git 3) git push -u origin main。' },
    ],
  },

  // ============================================================
  // 35. GitLab / GitLab
  // ============================================================
  "Wcp-VDdFHipwa7hNAp1z_": {
    mentalModel: 'GitLab 是 GitHub 的"企业增强版"——代码托管、CI/CD、容器注册、安全扫描全在一个平台。大公司喜欢自建 GitLab 服务器，代码不出公司内网。',
    sections: [
      { title: 'GitLab vs GitHub', content: 'GitLab 的核心差异：1) 自建部署（Self-hosted）是 GitLab 的核心优势——GitHub Enterprise 也可以自建但更贵 2) CI/CD 深度集成——gitlab-ci.yml 是 GitLab 的标配，比 GitHub Actions 更早成熟 3) 内置容器注册表（Container Registry）4) 安全扫描（SAST/DAST/依赖扫描）内置。国内很多大厂（华为、字节）自建 GitLab。' },
      { title: 'GitLab CI/CD 快速了解', content: '.gitlab-ci.yml 文件定义流水线：stages（build/test/deploy）→ jobs（具体任务）→ runners（执行环境）。示例：push 代码 → GitLab Runner 自动拉取 → 运行测试 → 构建 Docker 镜像 → 推送到 GitLab Registry → 部署到 K8s。全部在一个平台完成。' },
    ],
    diagnosis: [
      { symptom: '自建 GitLab 服务器磁盘空间突然耗尽，Push 全部失败', cause: 'GitLab 的 Docker Registry、CI artifacts、日志文件等占用大量空间未清理。', fix: '1) 设置 GitLab artifact 过期策略（默认 30 天）2) 清理旧 Docker 镜像：gitlab-ctl registry-garbage-collect 3) 设置磁盘监控告警。' },
      { symptom: 'GitLab Runner 显示已注册但 job 一直 Pending', cause: 'Runner 的 tag 和 job 的 tag 不匹配，或 Runner 没有启用对当前项目的访问。', fix: '1) gitlab-runner list 确认 Runner 状态 2) 检查 .gitlab-ci.yml 中 job 的 tags 和 Runner 注册时的 tags 一致 3) GitLab Admin > Runners 确认 Runner 对项目可见。' },
    ],
    exercises: [
      { level: '基础', task: '说出 GitLab 相比 GitHub 最大的差异化优势', hint: '企业最关心什么？', answer: '自建部署（Self-hosted）——代码和数据保留在公司自己的服务器上，满足安全合规要求。同时 GitLab 的 CI/CD 和 DevOps 全流程集成比 GitHub 更完整。' },
    ],
  },

  // ============================================================
  // 36. Relational Databases / 关系型数据库
  // ============================================================
  "r45b461NxLN6wBODJ5CNP": {
    mentalModel: '关系型数据库就像一个超大 Excel 工作簿——数据按"表"（Sheet）组织，每个表有定义好的"列"（Column），"行"（Row）是一条条记录。和 Excel 不同的是，表之间可以通过"外键"建立关系，通过 SQL 进行复杂查询。',
    sections: [
      { title: '核心概念', content: '表（Table）：数据存储单元，如 users 表、orders 表。行（Row）：一条记录，如一个用户。列（Column）：记录的字段，如 name/email/created_at。主键（Primary Key）：每行的唯一标识，通常是自增 id。外键（Foreign Key）：指向另一个表的主键，建立表间关系。索引（Index）：加速查询，类似书的目录。SQL：结构化查询语言，和数据库交互的唯一方式。' },
      { title: '关系型数据库为什么是后端的核心', content: '绝大多数应用的数据是结构化的（用户/订单/商品/评论），天然适合关系型存储。关系型数据库提供：1) ACID 事务（保证数据一致性，如转账扣款和加款必须同时成功或同时失败）2) JOIN 查询（关联多张表）3) 数据完整性约束（NOT NULL/UNIQUE/FOREIGN KEY）4) 成熟的工具链（迁移/备份/监控）。NoSQL 在某些场景更优（灵活 Schema/高写入吞吐），但关系型是后端的默认选择。' },
    ],
    diagnosis: [
      { symptom: '数据库设计的表没有主键，更新和删除时找不到唯一的行', cause: '设计时忽略了主键的重要性——没有主键的表无法确保行的唯一性。', fix: '1) 每张表必须有主键——自增 INT、UUID 或雪花 ID 2) 如果没有自然主键，加一列 id 作为代理主键 3) 主键永远不要用业务字段（如身份证号/手机号——会变）。' },
      { symptom: '用户表和订单表之间用字符串拼接查询而非外键', cause: '设计表时不理解关系的概念——在代码里用字符串拼接查关联数据。', fix: '1) 订单表加 user_id (FK -> users.id) 2) 查询用 JOIN 而非代码中拼接 3) 外键约束确保引用完整性。' },
    ],
    exercises: [
      { level: '基础', task: '为一个"学生选课系统"设计数据库表（学生/课程/选课关系）', hint: '多对多关系需要中间表', answer: 'students(id, name), courses(id, title, teacher), enrollments(id, student_id FK, course_id FK, enrolled_at)。enrollments 是关联表，解决多对多关系（一个学生选多门课，一门课有多个学生）。' },
    ],
  },

  // ============================================================
  // 37. MySQL / MySQL
  // ============================================================
  "VPxOdjJtKAqmM5V0LR5OC": {
    mentalModel: 'MySQL 是数据库界的"丰田卡罗拉"——不是最豪华的，但可靠、省油、配件多、到处都会修。全球最多人用的关系型数据库，从 WordPress 博客到淘宝都在用。',
    sections: [
      { title: 'MySQL 的特点', content: '优势：1) 全球最广泛使用的关系型数据库 2) InnoDB 引擎支持事务/行级锁/外键 3) 主从复制成熟 4) 运维工具丰富（Percona Toolkit/phpMyAdmin）5) 各大云厂商都有托管版（AWS RDS/阿里云 RDS）。劣势：1) 对 SQL 标准的支持不如 PostgreSQL（如 CHECK 约束历史不支持）2) 某些高级功能依赖特定引擎 3) Oracle 收购后社区有分裂（MariaDB 分支）。' },
      { title: 'MySQL 在后端的使用', content: '连接方式：mysql2/pymysql/go-sql-driver 等驱动。ORM：Sequelize（Node.js）/GORM（Go）/SQLAlchemy（Python）。关键配置：1) connection pool 大小 2) charset=utf8mb4（支持 emoji）3) sql_mode（建议开启严格模式）4) 慢查询日志（long_query_time）。新手最常踩的坑：字符集乱码（Latin1 vs UTF8）、忘记建索引导致全表扫描。' },
    ],
    handsOn: [
      { title: 'Docker 快速启动 MySQL', cmd: 'docker run -d --name mysql-test -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=testdb -p 3306:3306 mysql:8', output: 'Unable to find image \'mysql:8\' locally\n8: Pulling from library/mysql\nDigest: sha256:...\nStatus: Downloaded newer image for mysql:8\nabc123def456...', explain: '一行命令启动 MySQL，映射到本地 3306 端口。然后 mysql -h 127.0.0.1 -u root -psecret testdb 就能连上。' },
    ],
    diagnosis: [
      { symptom: 'MySQL 查询中文乱码，显示 ??? 或奇怪的字符', cause: '字符集配置错误——表是 latin1 但插入了 utf8 数据，或连接未设置 charset。', fix: '1) 数据库/表/列统一用 utf8mb4（不是 utf8！）2) 连接字符串加 ?charset=utf8mb4 3) 检查现有数据的编码，用 CONVERT() 转换。' },
      { symptom: 'MySQL 查询偶尔特别慢但有索引', cause: '统计信息过时导致优化器选错索引、隐式类型转换导致索引失效、或锁等待。', fix: '1) EXPLAIN 看实际执行计划 2) ANALYZE TABLE 更新统计信息 3) 避免隐式类型转换 4) 用 SHOW PROCESSLIST 检查锁等待。' },
    ],
    exercises: [
      { level: '基础', task: '用 MySQL 命令行创建数据库、建表、插入一条数据、查询', hint: 'CREATE DATABASE / CREATE TABLE / INSERT / SELECT', answer: 'CREATE DATABASE myapp; USE myapp; CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100)); INSERT INTO users (name) VALUES (\'Alice\'); SELECT * FROM users;' },
    ],
  },

  // ============================================================
  // 38. MariaDB / MariaDB
  // ============================================================
  "tD3i-8gBpMKCHB-ITyDiU": {
    mentalModel: 'MariaDB 是 MySQL 的"孪生兄弟"——MySQL 被 Oracle 收购后，原作者 Monty 担心 Oracle 会闭源，于是 fork 了 MySQL 创建 MariaDB。API 和协议完全兼容（同样的驱动、同样的命令）。',
    sections: [
      { title: '为什么选择 MariaDB 而非 MySQL', content: '1) 开源保证——MariaDB 基金会管理，不会受单一公司商业策略影响 2) 部分场景性能更好（如并行复制、更好的优化器）3) 更多存储引擎（Aria/ColumnStore/Connect）4) 部分 Linux 发行版（CentOS/RHEL）默认用 MariaDB。如果你不确定选哪个——选 MySQL 8（生态更大），除非公司用 MariaDB。' },
    ],
    diagnosis: [
      { symptom: '从 MySQL 迁移到 MariaDB 后某些查询结果不同', cause: '虽然高度兼容，但 MariaDB 在优化器、JSON 函数、窗口函数等方面有细微差异。', fix: '1) 迁移前在测试环境用真实数据对比查询结果 2) 检查 MySQL 特有语法（如某些 hint）是否被 MariaDB 支持 3) 关注两个项目的 release notes 中的不兼容变更。' },
      { symptom: 'MariaDB 升级后之前的 SQL 突然变慢', cause: '优化器版本变更导致执行计划变化——新版本可能选择不同的索引策略。', fix: '1) 用 EXPLAIN 对比升级前后的执行计划 2) ANALYZE TABLE 更新统计信息 3) 必要时用 optimizer_switch 调整优化器行为。' },
    ],
    exercises: [
      { level: '基础', task: '说出 MariaDB 和 MySQL 的关系', hint: 'fork', answer: 'MariaDB 是 MySQL 的 fork（分支）。MySQL 被 Oracle 收购后，原作者担心闭源风险，创建了 MariaDB 作为开源替代。两者的协议和 SQL 语法几乎完全相同。' },
    ],
  },

  // ============================================================
  // 39. MS SQL Server / MS SQL Server
  // ============================================================
  "dEsTje8kfHwWjCI3zcgLC": {
    mentalModel: 'SQL Server 是微软生态的"定制西装"——和 Windows/.NET/Active Directory 完美搭配。如果你在微软技术栈的公司工作，这就是你的默认数据库。',
    sections: [
      { title: 'SQL Server 的定位', content: '特点：1) 和 .NET/C# 深度集成（Entity Framework + LINQ）2) SSMS（SQL Server Management Studio）是最好用的数据库 GUI 之一 3) SQL Server Agent 做定时任务 4) SSIS/SSRS/SSAS 做数据集成/报表/分析。价格：Developer 版免费（功能全但不可用于生产），Express 版免费（限制 10GB），Standard/Enterprise 版贵。适合：Windows 企业环境、.NET 技术栈团队。不适合：Linux 为主的团队、预算有限的创业公司。' },
    ],
    diagnosis: [
      { symptom: 'SQL Server 连接池耗尽，新连接报 Timeout expired', cause: '代码中没有正确关闭 SqlConnection——开了连接但在异常路径中忘了 Dispose，连接慢慢泄漏直到池满。', fix: '1) 所有 SqlConnection 用 using 块确保自动释放 2) 监控连接池：SELECT * FROM sys.dm_exec_connections 3) 检查 Max Pool Size 配置（默认 100）。' },
      { symptom: 'Entity Framework 生成的 SQL 包含了 10 表 JOIN，查询超时', cause: 'LINQ 查询中触发了懒加载——Include() 链过长或未禁用 lazy loading，生成了超大 JOIN 查询。', fix: '1) 用 AsNoTracking() 关闭变更追踪（查询场景）2) 用 Select() 只投影需要的字段 3) 检查 SQL Profiler 中实际执行的 SQL。' },
    ],
    exercises: [
      { level: '基础', task: '说出 SQL Server 最适合的使用场景', hint: '技术栈匹配', answer: '.NET/C# 技术栈的 Windows 企业环境。SQL Server 和 Entity Framework、Azure、Active Directory 深度集成，在这个生态里体验最好。' },
    ],
  },

  // ============================================================
  // 40. N+1 Problem / N+1 查询问题
  // ============================================================
  "bQnOAu863hsHdyNMNyJop": {
    mentalModel: 'N+1 问题就像你去图书馆借 10 本书——本该一次性查目录找到 10 本书的位置，但你却查一次目录拿一本书，来回跑 10 趟。每次"查目录"都是一次数据库查询。',
    sections: [
      { title: 'N+1 是什么', content: '典型场景：查询 10 个用户，然后对每个用户查询其订单。代码：users = db.query("SELECT * FROM users")（1 次查询），for user in users: orders = db.query("SELECT * FROM orders WHERE user_id = ?", user.id)（N 次查询）。总共 1+N 次查询。本该用：SELECT * FROM users JOIN orders ON users.id = orders.user_id（1 次查询拿所有数据）。' },
      { title: '如何避免 N+1', content: '1) JOIN 查询：一次性关联多表拿数据 2) ORM 的 eager loading：User.query().include("orders") 告诉 ORM 预加载关联数据 3) Batch loading：先把所有 user_id 收集起来，用 WHERE user_id IN (1,2,3,...10) 一次查询所有订单，在内存里分组匹配 4) DataLoader 模式（GraphQL 常用）：自动收集同一请求中的多个查询，合并成批量查询。' },
    ],
    diagnosis: [
      { symptom: '简单的列表页面加载很慢，日志里同一个 SQL 查询出现了几十次', cause: 'N+1 问题——ORM 的 lazy loading 默认行为对每个关联对象单独查询。', fix: '使用 eager loading（如 Django 的 select_related/prefetch_related、Rails 的 includes、GORM 的 Preload）。用查询日志确认修复后查询数从 N+1 降到 1-2 次。' },
    ],
    exercises: [
      { level: '基础', task: '模拟 N+1 问题：写一段伪代码展示它如何产生', hint: '循环里查数据库', answer: 'posts = db.query("SELECT * FROM posts")  # 1 次\nfor post in posts:\n    comments = db.query("SELECT * FROM comments WHERE post_id = ?", post.id)  # N 次\n# 总共 N+1 次查询' },
      { level: '进阶', task: '解决上面的 N+1 问题：用 JOIN 重写', hint: 'SELECT * FROM posts JOIN comments ON ...', answer: 'db.query("SELECT * FROM posts LEFT JOIN comments ON posts.id = comments.post_id")。1 次查询拿到所有帖子和评论，在应用层按 post_id 分组。' },
    ],
  },

  // ============================================================
  // 41. Migrations / 数据库迁移
  // ============================================================
  "MOLAXgs0CMCT7o84L0EaK": {
    mentalModel: '数据库迁移就像给大楼"加层改造"——不能推倒重建（会丢数据），而是用精确的施工方案（迁移脚本）一步步改造结构。每次迁移是可回滚的，就像施工方案有"逆向方案"。',
    sections: [
      { title: '为什么需要迁移', content: '开发过程中表结构经常变：加字段、改类型、建索引、拆表。没有迁移的话：开发环境手动改 → 测试环境手动改 → 生产环境手动改，三步的修改可能不一致。有了迁移：写一个迁移文件（如 add_avatar_to_users），在所有环境运行同一个迁移，保证结构一致。迁移文件是版本化的（按时间戳排序），可以回滚（down 方法），可以知道当前在哪个版本。' },
      { title: '常见迁移工具', content: 'Node.js: Knex.js / Sequelize / Prisma Migrate。Python: Django ORM / Alembic（搭配 SQLAlchemy）。Go: golang-migrate / Goose。Rails: ActiveRecord Migrations。关键命令：migrate up（执行迁移）、migrate down（回滚）、migrate status（查看当前版本）。迁移文件应该提交到 Git——它是代码的一部分。' },
    ],
    diagnosis: [
      { symptom: '团队成员的数据库表结构不一致，同样的代码有的人能跑有的人报错', cause: '没有使用迁移管理表结构，各自手动修改数据库。', fix: '引入迁移工具，所有表结构变更通过迁移文件管理。迁移文件随代码一起提交到 Git。新成员只需跑 migrate up 就能得到最新结构。' },
    ],
    exercises: [
      { level: '基础', task: '写一个迁移的 up 和 down 伪代码：添加一个 age 列到 users 表', hint: 'up 加列，down 删列', answer: 'up: ALTER TABLE users ADD COLUMN age INT; down: ALTER TABLE users DROP COLUMN age;。up 是正向变更，down 是回滚操作。' },
    ],
  },

  // ============================================================
  // 42. PostgreSQL / PostgreSQL
  // ============================================================
  "FihTrMO56kj9jT8O_pO2T": {
    mentalModel: 'PostgreSQL 是数据库界的"瑞士军刀 Pro"——不仅是个关系型数据库，还能做全文搜索（tsvector）、JSON 查询（JSONB）、地理数据（PostGIS）、时序数据（TimescaleDB）。一个 PG 能干 MySQL + Elasticsearch + Redis 的部分活。',
    sections: [
      { title: 'PG 的核心优势', content: '1) SQL 标准兼容性最好——窗口函数/CTE/CHECK 约束/事务隔离级别都标准实现 2) JSONB 类型——可以在关系型数据库里做文档查询，GIN 索引加速 JSON 内部字段搜索 3) 扩展生态——PostGIS（地理空间）、pgvector（向量检索）、TimescaleDB（时序）、pg_cron（定时任务）4) MVCC 实现最好——读写互不阻塞 5) 分析型查询也不弱——并行查询/JIT 编译。' },
      { title: 'PG vs MySQL 选型', content: '选 PG：复杂查询多、需要 JSON 查询、地理数据、数据完整性要求高（如金融）。选 MySQL：简单 CRUD 为主、需要广泛托管支持、团队更熟悉、需要 GTID 复制（MySQL 的强项）。对新手：两个都学不如先精一个——选 PG，因为它更接近 SQL 标准，学到的知识更通用。' },
    ],
    handsOn: [
      { title: 'Docker 启动 PostgreSQL', cmd: 'docker run -d --name pg-test -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=testdb -p 5432:5432 postgres:16-alpine', output: '16-alpine: Pulling from library/postgres\nDigest: sha256:...\nStatus: Downloaded newer image\nabc123...', explain: 'PostgreSQL 默认端口 5432，连接：psql -h localhost -U postgres -d testdb。' },
    ],
    diagnosis: [
      { symptom: 'PostgreSQL 查询计划突然从 Index Scan 变成 Seq Scan，性能暴跌', cause: '表的统计信息过时（大量 INSERT/DELETE 后没及时 ANALYZE），优化器误判全表扫描比索引扫描更快。', fix: '1) 执行 ANALYZE table_name 更新统计信息 2) 检查 autovacuum 是否正常 3) 大表考虑调高 default_statistics_target。' },
      { symptom: 'PSQL 连接报 too many clients 错误', cause: 'max_connections 达到上限——通常是连接泄漏或连接池配置不当。', fix: '1) pg_stat_activity 查看当前连接数和状态 2) 应用层使用连接池（PgBouncer/pgpool-II）3) 检查代码中是否有未关闭的连接。' },
    ],
    exercises: [
      { level: '基础', task: '用 psql 创建一个表，插入 JSON 数据到 JSONB 列，然后查询 JSON 内部字段', hint: 'CREATE TABLE ... (data JSONB), INSERT, SELECT ... WHERE data->>key', answer: "CREATE TABLE logs (id SERIAL, data JSONB); INSERT INTO logs (data) VALUES ('{\"level\":\"error\",\"msg\":\"timeout\"}'); SELECT * FROM logs WHERE data->>'level' = 'error';" },
    ],
  },

  // ============================================================
  // 43. SQLite / SQLite
  // ============================================================
  "kdulE3Z_BdbtRmq6T2KmR": {
    mentalModel: 'SQLite 是一个"装在文件里的数据库"——不需要安装服务端、不需要配置端口、不需要密码，整个数据库就是磁盘上一个 .db 文件。所有手机 App 内部都是用 SQLite 存储数据的。',
    sections: [
      { title: 'SQLite 的适用场景', content: '最适合：1) 移动 App 本地存储（iOS/Android 内置）2) 桌面应用（如 VS Code 用 SQLite 存配置）3) 嵌入式设备（IoT）4) 开发/测试环境（不需要装数据库服务）5) 小型 Web 应用（单用户/低并发）。不适合：1) 高并发 Web 应用（写锁是库级锁）2) 需要网络访问（SQLite 是文件数据库，不支持网络连接）3) 超大数据库（TB 级）。' },
      { title: '后端的 SQLite 用法', content: 'Django/Rails 默认用 SQLite 做开发数据库——clone 项目后不需要装任何数据库服务就能启动。部署到生产时换成 PostgreSQL/MySQL。对于个人项目、原型、工具脚本，SQLite 完全够用——Litestream 甚至可以让 SQLite 拥有实时备份和容灾能力。' },
    ],
    diagnosis: [
      { symptom: 'SQLite 应用在并发写入时报 database is locked', cause: 'SQLite 的写锁是库级锁——同一时间只允许一个写操作。并发写请求会等待或超时。', fix: '1) 设置合理的 busy timeout：PRAGMA busy_timeout = 5000 2) 所有写入尽量用单线程/队列串行化 3) 如果确实需要高并发写，换 PostgreSQL。' },
      { symptom: 'SQLite 数据库文件越来越大，VACUUM 后也没变小', cause: '删除数据后 SQLite 不会自动回收空间——空闲页留在文件里等待复用。', fix: '1) 执行 VACUUM 重建数据库文件回收空间 2) 开启 auto_vacuum=INCREMENTAL 让 SQLite 自动渐进式回收 3) 定期在大批量删除后执行 VACUUM。' },
    ],
    exercises: [
      { level: '基础', task: '用 sqlite3 命令行创建一个数据库、建表、插入、查询', hint: 'sqlite3 myapp.db', answer: "sqlite3 myapp.db → CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT); → INSERT INTO users (name) VALUES ('Alice'); → SELECT * FROM users;" },
    ],
  },

  // ============================================================
  // 44. Oracle / Oracle
  // ============================================================
  "h1SAjQltHtztSt8QmRgab": {
    mentalModel: 'Oracle 是数据库界的"大型机"——贵、重、强，银行/电信/政府的核心系统跑在上面。对大多数人来说，了解它存在即可，不学也没关系。',
    sections: [
      { title: 'Oracle 的定位', content: 'Oracle Database 是企业级商业数据库的标杆：1) 收费最贵（按 CPU 核心计费，大系统 license 可达百万级）2) 功能最全（RAC 集群/Data Guard 容灾/分区/物化视图/闪回查询）3) PL/SQL 是最完善的存储过程语言 4) 运维复杂度高（需要专业 DBA）。国内市场：银行核心系统、电信计费系统、政府大系统的主要选择。Oracle 有免费版（Oracle XE，限制 12GB 数据），但基本不用它学习——学 PostgreSQL 更实用。' },
    ],
    diagnosis: [
      { symptom: 'Oracle 查询突然变得极慢，DBA 说是执行计划变了', cause: 'Oracle 的绑定变量窥探（Bind Peeking）——首次执行时根据参数选择的执行计划，后续参数变化后可能不再最优。', fix: '1) 用 DBMS_SPM 固定执行计划 2) 升级到 Oracle 12c+ 的 Adaptive Execution Plans 3) 关键 SQL 加 hint 固定执行计划。' },
      { symptom: 'Oracle 表空间满了，插入操作全部失败', cause: '数据文件没有开启自动扩展（AUTOEXTEND），或磁盘真的满了。', fix: '1) ALTER DATABASE DATAFILE ... AUTOEXTEND ON MAXSIZE UNLIMITED 2) 清理旧数据或归档表 3) 加数据文件到其他磁盘。' },
    ],
    exercises: [
      { level: '基础', task: '说出 Oracle 数据库的两个典型使用场景', hint: '什么行业需要最贵最稳的数据库', answer: '1) 银行核心交易系统（转账/清算）2) 电信计费系统。这些系统对数据一致性和可靠性要求极高，愿意为此支付高额 license 费用。' },
    ],
  },

  // ============================================================
  // 45. API Styles / API 风格
  // ============================================================
  "WH2EEQ3SQ8IlZLCv8aXjJ": {
    mentalModel: 'API 风格就像"交流方式"——REST 是写信（标准化格式），GraphQL 是定制问答（你要什么我查什么），gRPC 是对讲机（二进制、高性能），WebSocket 是电话（实时双向）。不同场景选不同方式。',
    sections: [
      { title: '四种主流 API 风格对比', content: 'REST：资源导向，用 HTTP 方法（GET/POST/PUT/DELETE）操作 URL 标识的资源。最通用，生态最成熟。GraphQL：查询语言，客户端指定需要哪些字段，避免 over-fetching/under-fetching。适合复杂前端。gRPC：Google 的 RPC 框架，用 Protocol Buffers 做序列化，HTTP/2 传输，强类型。适合微服务间高性能通信。WebSocket：全双工通信，服务端可主动推送。适合同步协作、实时通知。' },
      { title: '选型决策', content: '公开 API → REST（通用性最好）。移动 App 后端 → REST 或 GraphQL。微服务内部 → gRPC（高性能+强类型）。实时推送 → WebSocket 或 SSE。不要为了"潮流"选技术——REST 覆盖 80% 场景，GraphQL 和 gRPC 解决特定问题。' },
    ],
    diagnosis: [
      { symptom: '选了 gRPC 做公开 API，发现浏览器端调用不了', cause: 'gRPC 基于 HTTP/2 和 Protocol Buffers，浏览器原生不支持——需要 gRPC-Web 转码层。', fix: '1) 公开 API 首选 REST（通用性最好）2) 如果必须用 gRPC，加 gRPC-Web 代理或 Envoy 转码 3) 内部微服务间通信用 gRPC，对外 API 用 REST。' },
      { symptom: '选了 WebSocket 做普通数据接口，开发和维护成本翻倍', cause: '技术选型过度——简单 CRUD 不需要实时双向通信。', fix: '1) 普通 CRUD 用 REST，实时推送才用 WebSocket 2) 如果只需服务端推送（如通知），用 SSE 更简单 3) 选型原则：够用就好，不追求最新潮。' },
    ],
    exercises: [
      { level: '基础', task: '说出 REST 和 GraphQL 最大的区别（一句话）', hint: '谁决定返回什么数据', answer: 'REST：服务器决定返回什么数据（固定结构）。GraphQL：客户端决定返回什么数据（自定义查询字段）。' },
    ],
  },

  // ============================================================
  // 46. Learn about APIs / 学习 API
  // ============================================================
  "EwvLPSI6AlZ4TnNIJTZA4": {
    mentalModel: 'API 是后端对外的"菜单"——告诉别人你能提供什么服务、怎么点（请求格式）、会上什么菜（响应格式）。好的 API 像米其林菜单（清晰、可预期），烂的 API 像手写纸条（费解、容易点错）。',
    sections: [
      { title: 'API 是什么，为什么要学', content: 'API（Application Programming Interface）是程序间的接口。后端提供的 API 让前端、移动 App、第三方服务能使用你的数据和功能。没有 API，每个后端都是孤岛。API 是后端的"门面"——代码写得再好，API 设计烂，消费者就骂娘。好的 API 设计让调用者不用看文档就能猜出怎么用。' },
      { title: '好 API 的标准', content: '1) 一致性：URL 命名、错误格式、认证方式统一 2) 可预测：GET /users 返回用户列表，GET /users/123 返回用户详情——不需要看文档也能猜到 3) 容错：输入了错的数据返回清晰的错误信息，而不是 500 4) 版本化：v1/v2 版本共存，让调用者有升级时间 5) 文档：OpenAPI/Swagger 自动生成，交互式测试。' },
    ],
    diagnosis: [
      { symptom: 'API 上线后调用方频繁抱怨字段名怎么变了、这个接口怎么 404 了', cause: 'API 没有版本管理——改了接口不做版本隔离，所有调用方一起受影响。', fix: '1) URL 路径版本化：/api/v1/users 和 /api/v2/users 共存 2) v1 标记 deprecated 给调用方 30-90 天迁移期 3) 破环性变更只在新版本做。' },
      { symptom: '调用方收到 500 错误但错误信息只有 Internal Server Error', cause: 'API 没有统一的错误响应格式——调用方无法知道哪里错了。', fix: '1) 统一错误格式：{ "error": { "code": "VALIDATION_ERROR", "message": "邮箱格式不正确" } } 2) 4xx 返回明确的问题描述 3) 5xx 不暴露内部细节给客户端。' },
    ],
    exercises: [
      { level: '基础', task: '设计一个"任务管理"API 的 URL 结构', hint: 'RESTful：资源名词复数 + HTTP 方法', answer: 'GET /tasks（列表）、POST /tasks（创建）、GET /tasks/:id（详情）、PUT /tasks/:id（更新）、DELETE /tasks/:id（删除）、POST /tasks/:id/complete（标记完成——这是"动作"而非 CRUD）。' },
    ],
  },

  // ============================================================
  // 47. API Security Best Practices / API 安全最佳实践
  // ============================================================
  "sSG9zK0ZGTBSk-nFIOq8A": {
    mentalModel: 'API 安全就像给房子装安保——锁门（认证）、查身份（授权）、限制访问次数（限流）、检查可疑包裹（输入校验）、装监控（审计日志）。缺一不可，一个漏洞就可能被攻破。',
    sections: [
      { title: 'API 安全清单', content: '1) 认证（Authentication）：确认你是谁——JWT/OAuth/API Key 2) 授权（Authorization）：你能做什么——RBAC/ABAC 3) 输入校验：永远不信任客户端传来的数据——SQL 注入/XSS/参数污染 4) 限流（Rate Limiting）：防滥用/暴力破解/DDoS 5) HTTPS：所有 API 通信必须加密 6) CORS：只允许信任的域名跨域 7) 敏感数据：密码必须 bcrypt 哈希，身份证/银行卡号加密存储 8) 审计日志：谁在什么时候调了什么接口 9) 依赖安全：定期 npm audit/pip audit 检查漏洞。' },
      { title: 'OWASP API Security Top 10', content: 'OWASP 专门为 API 安全出了 Top 10：1) Broken Object Level Authorization（IDOR——用户 A 通过改 URL ID 访问用户 B 的数据）2) Broken Authentication（弱 JWT 密钥/不过期 Token）3) Excessive Data Exposure（返回太多字段泄露敏感信息）4) Lack of Resources & Rate Limiting（无限流被 DDoS）5) Broken Function Level Authorization（普通用户调了管理员接口）...等等。IDOR 排名第一——/api/users/123 返回别人的数据，这是最常见的 API 漏洞。' },
    ],
    diagnosis: [
      { symptom: '用户反馈"我的账号里出现了别人的订单"', cause: 'IDOR 漏洞——接口没有校验请求的资源是否属于当前用户。', fix: '每个涉及用户数据的接口都要校验所有权：不是简单查 users/123，而是查 users/123 且 owner_id = 当前用户 ID。JWT 里存用户 ID，中间件自动过滤。' },
    ],
    exercises: [
      { level: '进阶', task: '解释什么是 IDOR 攻击，分别给出一个"有漏洞"和"修复后"的代码示例', hint: '/api/orders/:id 没有检查订单属于谁', answer: '有漏洞：app.get("/api/orders/:id", (req, res) => { db.orders.find(req.params.id) })——任何人都能访问任何订单。修复后：app.get("/api/orders/:id", auth, (req, res) => { db.orders.find({ id: req.params.id, user_id: req.user.id }) })——加了 user_id 过滤。' },
    ],
  },

  // ============================================================
  // 48. REST / REST
  // ============================================================
  "lfNFDZZNdrB0lbEaMtU71": {
    mentalModel: 'REST 是 API 设计的"普通话"——不是最快的、不是最优雅的，但人人会说、人人能懂。它把一切抽象为"资源"，用 HTTP 已有的方法（GET/POST/PUT/DELETE）操作资源。',
    sections: [
      { title: 'REST 的六大约束', content: '1) Client-Server：前后端分离 2) Stateless：每个请求包含所有信息，服务器不保存客户端状态 3) Cacheable：响应可以标明是否可缓存 4) Uniform Interface：统一接口（资源标识/自描述消息/HATEOAS）5) Layered System：可以加中间层（代理/网关/缓存）6) Code-on-Demand（可选）：服务器可以发送代码给客户端执行。其中"Stateless"影响最大——服务器不保存会话状态，意味着任何服务器都能处理任何请求（水平扩展的关键）。' },
      { title: 'REST 设计实践', content: '资源用名词复数：/users 而非 /getUsers。用 HTTP 方法表达动作：GET /users（列表）、POST /users（创建）、PUT /users/123（全量更新）、PATCH /users/123（部分更新）、DELETE /users/123（删除）。嵌套资源：/users/123/orders（用户 123 的订单）。查询参数用于过滤/排序/分页：/users?role=admin&sort=name&page=2。状态码精确：200（成功）、201（创建成功）、204（删除成功）、400（请求错误）、401（未认证）、403（无权限）、404（不存在）、422（验证失败）、500（服务器错误）。' },
    ],
    diagnosis: [
      { symptom: 'GET /api/orders 返回了所有用户的订单，数据泄露', cause: 'REST API 设计时没有实现权限过滤——只返回了数据库中的所有记录而非当前用户的数据。', fix: '1) 所有涉及用户数据的列表接口默认加 owner 过滤 2) 中间件层注入 currentUserId，DAO 层自动过滤 3) 在代码审查中强制检查。' },
      { symptom: 'REST URL 动词化：/api/getUsers、/api/createOrder', cause: '没理解 REST 的核心——HTTP 方法（GET/POST）已经表达了动作，URL 应该只标识资源。', fix: '1) 改用资源名词：GET /users、POST /orders 2) 特殊动作用子资源：POST /orders/:id/cancel 3) 制定团队 API 设计规范文档。' },
    ],
    exercises: [
      { level: '基础', task: '设计一个"电商商品"的 RESTful URL 结构', hint: '/products 开头', answer: 'GET /products（列表，支持 ?category=xxx&page=1）、GET /products/:id（详情）、POST /products（新增）、PUT /products/:id（更新）、DELETE /products/:id（删除）、GET /products/:id/reviews（关联评论）。' },
    ],
  },

  // ============================================================
  // 49. Open API Specs / OpenAPI 规范
  // ============================================================
  "9cD5ag1L0GqHx4_zxc5JX": {
    mentalModel: 'OpenAPI 是 API 的"说明书标准格式"——就像电器都有统一格式的规格表，OpenAPI 用 YAML/JSON 描述 API 的所有细节（URL/参数/响应/认证），人和机器都能读。Swagger 是最流行的 OpenAPI 工具。',
    sections: [
      { title: 'OpenAPI 的价值', content: '1) 自动生成交互式文档（Swagger UI）——调用者可以在网页上直接试用 API 2) 自动生成客户端 SDK（OpenAPI Generator 支持 50+ 语言）3) 前后端契约——先定 API 规范，前后端并行开发（API-first）4) 自动生成 Mock Server 5) 自动验证 API 是否符合规范。FastAPI（Python）/tsoa（Node.js）/swag（Go）等工具从代码注解自动生成 OpenAPI 文档——不需要手写。' },
    ],
    handsOn: [
      { title: '用 curl 访问一个 OpenAPI 文档', cmd: 'curl https://petstore3.swagger.io/api/v3/openapi.json | python3 -m json.tool | head -30', output: '{\n  "openapi": "3.0.2",\n  "info": {\n    "title": "Swagger Petstore",\n    "version": "1.0.0"\n  },\n  "paths": {\n    "/pet": {\n      "post": {...}\n    }\n  }\n}', explain: 'Petstore 是 Swagger 官方示例。openapi.json 文件完整描述了所有接口——路径、方法、参数类型、响应结构。工具链基于这个文件生成文档/客户端/测试。' },
    ],
    diagnosis: [
      { symptom: 'Swagger 文档显示的参数描述和实际后端代码不一致', cause: 'OpenAPI 文档和代码分别维护，修改代码时忘记更新文档。', fix: '1) 使用代码注解自动生成 OpenAPI 2) CI 中加 OpenAPI 校验——确保文档和代码一致 3) 部署时自动发布更新的文档。' },
      { symptom: 'OpenAPI Generator 生成的客户端代码调不通', cause: 'OpenAPI 规范文件缺少关键的请求/响应示例或认证配置不正确。', fix: '1) 在 OpenAPI spec 中添加完整的 requestBody 和 responses 的 example 2) 确保 securitySchemes 和 security 字段正确配置 3) 先用 Swagger UI 手动测试通过再生成客户端。' },
    ],
    exercises: [
      { level: '基础', task: '找一个后端框架，看看它是否支持自动生成 OpenAPI 文档', hint: '搜索 "FastAPI Swagger" 或 "Express swagger-jsdoc"', answer: 'FastAPI 自带 Swagger（访问 /docs）。Express 用 swagger-jsdoc + swagger-ui-express。Go 用 swaggo/swag。都是写注解自动生成 OpenAPI。' },
    ],
  },

  // ============================================================
  // 50-55 (GraphQL, SOAP, gRPC, JSON APIs, SAML)
  // ============================================================
  "zp3bq38tMnutT2N0tktOW": {
    mentalModel: 'GraphQL 是"自助餐"——你想吃什么、吃多少，自己决定。不像 REST 的"套餐"（固定返回所有字段），GraphQL 让你精确指定需要的字段，避免数据过多（over-fetching）或不够（under-fetching）。',
    sections: [
      { title: 'GraphQL 核心概念', content: 'Schema：定义数据类型和查询入口。Query：读操作（GET 等价）。Mutation：写操作（POST/PUT/DELETE 等价）。Subscription：实时推送。示例查询：query { user(id: 1) { name, posts { title } } }——只返回 name 和 posts.title，不返回 email/avatar 等不需要的字段。一次请求可以获取多个资源（user + posts），不需要像 REST 那样发多次请求。' },
      { title: 'GraphQL vs REST', content: 'GraphQL 优势：1) 精确数据获取——客户端控制返回字段 2) 单次请求获取多资源 3) 强类型 Schema 自动生成文档。GraphQL 劣势：1) 缓存复杂（POST 请求为主，不能用 HTTP 缓存）2) N+1 问题更隐蔽（需要 DataLoader）3) 查询复杂度不可控（恶意查询可以打爆服务器）4) 文件上传支持弱。选型：如果前端数据需求复杂多变（如仪表盘、多端展示），GraphQL 值；如果是标准 CRUD，REST 更简单。' },
    ],
    handsOn: [
      { title: '用 curl 发送 GraphQL 查询', cmd: 'curl -X POST https://countries.trevorblades.com/ -H "Content-Type: application/json" -d \'{"query":"{ countries { name capital } }"}\'', output: '{"data":{"countries":[{"name":"Andorra","capital":"Andorra la Vella"},...]}}', explain: 'GraphQL 总是 POST 到一个 endpoint，查询语句在 body 的 query 字段。返回的 JSON 结构和查询一一对应。' },
    ],
    diagnosis: [
      { symptom: 'GraphQL 查询导致数据库执行了上千次 SQL 查询', cause: 'GraphQL 的 N+1 问题——resolver 中对每个关联对象单独查数据库。', fix: '1) 用 DataLoader 批量化查询——同一请求中的多个相同类型查询合并成一次 WHERE id IN (...) 2) 限制查询深度和复杂度 3) 分析慢查询用 Apollo Studio。' },
      { symptom: '攻击者发送嵌套查询导致服务器 CPU 100%', cause: 'GraphQL 查询可无限嵌套——递归查询消耗大量资源。', fix: '1) 限制查询深度（maxDepth=5）2) 按查询复杂度评分限制 3) 设置请求超时 4) 加 Rate Limiting。' },
    ],
    exercises: [
      { level: '基础', task: '写一个 GraphQL 查询：获取 country 的 name 和 currency（用 countries API 测试）', hint: '在 query 里加 currency 字段', answer: 'query { countries { name currency } }。在 https://countries.trevorblades.com/ 的 GraphQL Playground 里可以交互式测试。' },
    ],
  },

  "sSNf93azjuyMzQqIHE0Rh": {
    mentalModel: 'SOAP 就像"公文往来"——有严格格式（XML）、标准信封（SOAP Envelope）、必须按规矩来（WSDL 定义一切）。老牌企业系统（银行/保险/政府）还在用，新项目基本不选。',
    sections: [
      { title: 'SOAP 的特点', content: 'SOAP（Simple Object Access Protocol）基于 XML，包含：Envelope（信封）→ Header（认证/事务信息）→ Body（实际数据）→ Fault（错误信息）。WSDL 是 SOAP 的"说明书"——用 XML 定义接口的所有操作、参数类型、返回类型。优点：协议严格（安全性高、事务支持好、有状态/无状态都支持）。缺点：重（XML 解析开销）、不灵活（改接口要改 WSDL）、HTTP 方法单一（只用 POST）。对于后端新手：了解即可，不用深学。' },
    ],
    diagnosis: [
      { symptom: '对接 SOAP 接口时 XML 解析失败，报 namespace 相关错误', cause: 'SOAP 强依赖 XML namespace——本地解析缺少 namespace 声明或声明不匹配。', fix: '1) 从 WSDL 文件确认所有 namespace 2) 用 SOAP 客户端库（如 zeep/Python、node-soap）而非手写 XML 3) 先用 SoapUI 测试确保 XML 结构正确。' },
      { symptom: 'SOAP 接口调用成功但返回 faultstring: Server was unable to process request', cause: '请求缺少必需的 SOAP Header（如 WS-Security 认证信息、WS-Addressing 寻址头）。', fix: '1) 对照 WSDL 检查必需的 Header 元素 2) 确保 WS-Security 的 UsernameToken/Timestamp 格式正确 3) 用 SoapUI 导入 WSDL 自动生成正确的请求模板。' },
    ],
    exercises: [
      { level: '基础', task: '说出 SOAP 和 REST 最明显的三个区别', hint: '格式/协议/灵活性', answer: '1) SOAP 只用 XML，REST 支持 JSON/XML/HTML 等 2) SOAP 有严格规范（WSDL），REST 较灵活 3) SOAP 通常是 POST 一个 endpoint，REST 用不同 HTTP 方法操作不同 URL。' },
    ],
  },

  "J-TOE2lT4At1mSdNoxPS1": {
    mentalModel: 'gRPC 是微服务之间的"对讲机"——用二进制 Protocol Buffers 通信，速度快、体积小、强类型。适合后端服务间高频调用，不适合浏览器直接调用（需要 gRPC-Web 转码）。',
    sections: [
      { title: 'gRPC 的核心优势', content: '1) Protocol Buffers：二进制序列化，比 JSON 小 3-10 倍、快 3-5 倍 2) HTTP/2：多路复用+头部压缩+双向流 3) 强类型接口：.proto 文件定义服务和方法，自动生成客户端/服务端代码 4) 四种调用模式：一元调用（请求→响应）、服务端流（请求→流式响应）、客户端流（流式请求→响应）、双向流（双向流式）。适合微服务间高频、低延迟通信。不适合：浏览器直接调用、公开 API（生态不如 REST）。' },
    ],
    diagnosis: [
      { symptom: 'gRPC 服务突然返回 UNAVAILABLE，但服务本身没挂', cause: '连接池耗尽或负载均衡策略导致请求分发到了不健康的节点。', fix: '1) 客户端配置连接池大小和 keepalive 策略 2) 启用 gRPC health check 协议 3) 用 gRPC-Gateway 做 HTTP 到 gRPC 的 fallback。' },
      { symptom: 'gRPC 客户端和服务端 proto 版本不一致导致解析错误', cause: 'proto 文件更新后只部署了服务端，部分客户端还在用旧版本的 stub。', fix: '1) proto 变更遵循向后兼容原则（只加字段不删不改）2) 用 protobuf 的 reserved 字段防止字段号被复用 3) CI 中确保客户端和服务端 proto 生成代码版本一致。' },
    ],
    exercises: [
      { level: '基础', task: '说出 gRPC 使用的序列化格式和传输协议', hint: 'Protocol Buffers + HTTP/2', answer: 'Protocol Buffers（protobuf）做序列化，HTTP/2 做传输。Proto 文件定义接口，自动生成各语言客户端。' },
    ],
  },

  "sNceS4MpSIjRkWhNDmrFg": {
    mentalModel: 'JSON API 是前后端交流的"通用货币"——JSON 格式像人民币，全民通用、简单明了。几乎所有的现代 API 都用 JSON 作为数据交换格式。',
    sections: [
      { title: 'JSON 在后端的地位', content: 'JSON（JavaScript Object Notation）是 API 数据的默认格式：1) 人类可读 2) 所有语言都有 JSON 解析器 3) 结构简单（对象+数组+字符串+数字+布尔+null 六种类型）4) 浏览器原生支持。后端工作：接收 JSON → 解析/校验 → 处理 → 返回 JSON。关键实践：1) 属性名用 camelCase（firstName）或 snake_case（first_name），团队统一 2) 日期用 ISO 8601 格式（"2024-01-15T10:30:00Z"）3) 空值用 null 而非 undefined 或空字符串。' },
      { title: 'JSON Schema', content: 'JSON Schema 像 JSON 的"TypeScript"——定义 JSON 应该长什么样：字段类型、是否必填、值的范围。用途：1) 自动生成表单/UI 2) API 请求校验 3) 生成 API 文档。OpenAPI 内部就用 JSON Schema 描述请求/响应结构。' },
    ],
    diagnosis: [
      { symptom: '前后端联调时 JSON 解析报错 Unexpected token', cause: '响应体不是纯净 JSON——包含了 BOM 头、HTML 错误页面、或 PHP notice/warning 输出混在 JSON 中。', fix: '1) 后端确保 Content-Type: application/json 2) JSON 序列化前不输出任何调试信息 3) 生产环境关闭 debug 输出 4) 前端先用 curl 查看原始响应。' },
      { symptom: 'JSON 中的 Date 字段前端显示为 ISO 字符串而非预期格式', cause: 'JSON 不支持 Date 类型——Date 被序列化为 ISO 8601 字符串，前端需手动格式化。', fix: '1) 前后端约定日期格式（ISO 8601）2) 后端统一用 UTC 时区返回 3) 前端用 dayjs/moment 格式化显示 4) 考虑用 Unix timestamp (number) 避免格式歧义。' },
    ],
    exercises: [
      { level: '基础', task: '设计一个用户对象的 JSON 表示，包含基本信息和一个地址嵌套对象', hint: '{ "name": "...", "email": "...", "address": { ... } }', answer: '{"id": 1, "name": "Alice", "email": "alice@example.com", "address": {"city": "上海", "street": "南京路 100 号", "zip": "200001"}, "created_at": "2024-01-15T10:30:00Z"}' },
    ],
  },

  "UCHtaePVxS-0kpqlYxbfC": {
    mentalModel: 'SAML 是企业的"统一工作证"——公司给你一张工卡，凭这张卡你可以进大门（SSO 登录）、进办公室、用打印机。SAML 就是这套"企业工卡系统"的技术标准。',
    sections: [
      { title: 'SAML 的定位', content: 'SAML（Security Assertion Markup Language）是企业 SSO（单点登录）的老牌标准：1) Identity Provider（IdP）：身份提供方（如 Okta/Azure AD）2) Service Provider（SP）：你的应用。流程：用户访问你的应用 → 重定向到 IdP 登录 → IdP 验证身份，发 SAML Assertion（XML 格式的"身份声明"）→ 你的应用信任此声明并放行。SAML 基于 XML，较重。现代替代方案：OpenID Connect（基于 OAuth 2.0 + JWT，更轻量）。新项目首选 OIDC，老企业系统维护要懂 SAML。' },
    ],
    diagnosis: [
      { symptom: 'SAML 单点登录失败，用户被重定向到登录页面无限循环', cause: 'SAML Assertion 的时间差问题——IdP 和 SP 的时钟不同步，Assertion 的时间判断失败。', fix: '1) IdP 和 SP 服务器时间用 NTP 同步 2) 放宽时间误差窗口（允许 3-5 分钟偏差）3) 检查 Assertion 中 Audience 是否匹配 SP 的 Entity ID。' },
      { symptom: 'SAML 响应中的用户属性缺失，业务系统拿不到用户信息', cause: 'IdP 端没有配置释放所需属性——默认 SAML Attribute Statement 为空或只包含基础字段。', fix: '1) IdP 管理后台配置释放所需属性（如 email、name、groups）2) SP 端根据实际返回的 Attribute name 调整映射 3) 先用 SAML-tracer 插件查看实际返回的 Assertion 内容。' },
    ],
    exercises: [
      { level: '基础', task: '说出 SAML 和 OAuth/OIDC 的最大区别', hint: 'XML vs JSON、企业 vs 互联网', answer: 'SAML 基于 XML，企业 SSO 的标准（Salesforce/Workday 等 SaaS 都支持）。OIDC 基于 OAuth 2.0 + JWT，更现代轻量。SAML 重但功能全（有签名/加密/断言），OIDC 简洁但需要自己组合能力。' },
    ],
  },

  // ============================================================
  // 56. Basic Authentication / Basic 认证
  // ============================================================
  "yRiJgjjv2s1uV9vgo3n8m": {
    mentalModel: 'Basic Auth 就像把钥匙放在门口的脚垫下——方便但极不安全。它是把用户名:密码用 Base64 编码（不是加密！）放在 HTTP Header 里，任何人截获了都能解码。',
    sections: [
      { title: 'Basic Auth 的原理', content: 'HTTP Header: Authorization: Basic base64(username:password)。例如 username=admin, password=secret → base64("admin:secret") = "YWRtaW46c2VjcmV0" → Header 是 Authorization: Basic YWRtaW46c2VjcmV0。Base64 是编码不是加密——任何人都能解码回来。所以 Basic Auth 必须配合 HTTPS 使用（否则密码明文传输）。' },
      { title: '什么时候可以用 Basic Auth', content: '1) 内部工具/管理后台（内网访问）2) API 调试（curl -u user:pass 方便）3) 配合 API Key 的简单场景。不适合：面向用户的系统（没有过期、撤销机制）、需要细粒度权限控制。实际生产中，Web 应用用 Session/Cookie + HTTPS，API 用 JWT 或 OAuth。' },
    ],
    handsOn: [
      { title: '用 curl 发送 Basic Auth 请求', cmd: 'curl -u admin:secret https://httpbin.org/basic-auth/admin/secret', output: '{\n  "authenticated": true,\n  "user": "admin"\n}', explain: '-u 参数等价于 -H "Authorization: Basic base64(user:pass)"。httpbin 会验证并返回认证结果。' },
    ],
    diagnosis: [
      { symptom: 'Basic Auth 登录信息泄露——中间人截获了 HTTP 请求', cause: 'Basic Auth 只做 Base64 编码（非加密），在不加密的 HTTP 上传输等同于明文传输密码。', fix: '1) Basic Auth 必须配合 HTTPS 使用 2) 对公开服务，用 Token/JWT 代替 Basic Auth 3) 内网工具场景，确认只在局域网通过 HTTPS 访问。' },
      { symptom: 'nginx 反向代理后 Basic Auth 失效', cause: 'Proxy 默认不转发 Authorization header——Nginx 需要显式配置。', fix: '1) Nginx 加 proxy_set_header Authorization $http_authorization 2) 或用 proxy_pass_header Authorization 3) 检查 upstream 应用是否读取了该 header。' },
    ],
    exercises: [
      { level: '基础', task: '手动编码一个 Basic Auth 头并发送', hint: 'echo -n "user:pass" | base64', answer: 'echo -n "myuser:mypass" | base64 得到编码后的字符串，然后 curl -H "Authorization: Basic <base64字符串>" https://httpbin.org/basic-auth/myuser/mypass。' },
    ],
  },

  // ============================================================
  // 57. Token Authentication / Token 认证
  // ============================================================
  "0rGj7FThLJZouSQUhnqGW": {
    mentalModel: 'Token 认证就像"游乐园手环"——入园时验票（登录），工作人员给你戴上手环（发 Token），之后玩每个项目只需出示手环，不需要反复掏身份证（密码）。手环遗失或被偷，挂失换新的（Token 撤销刷新）。',
    sections: [
      { title: 'Token vs Session', content: 'Session：服务器存状态，客户端只存 session_id（cookie），服务器查 session 存储（Redis/DB）验证。有状态（服务器记住谁登录了）。Token（JWT）：服务器不存状态，Token 本身包含用户信息和签名，服务器验证签名即可。无状态（任何服务器都能验证，利于水平扩展）。Token 优势：1) 适合分布式系统（不需要共享 Session 存储）2) 适合移动端和第三方 API 3) 可以携带自定义信息（user_id/role等）。Session 优势：1) 可以强制失效（删服务器 session）2) 不暴露数据在客户端。' },
    ],
    diagnosis: [
      { symptom: 'Token 过期后用户突然被登出，所有用户需要重新登录', cause: 'Token 过期时间设置过短（如 5 分钟）或 Token 没有 Refresh 机制。', fix: '1) Access Token 设 15 分钟-2 小时，Refresh Token 设 7-30 天 2) Refresh Token 存在数据库/Redis 可随时撤销 3) 前端实现自动刷新——401 时用 Refresh Token 换新 Access Token。' },
      { symptom: 'Token 泄露后无法强制失效，攻击者一直在用', cause: 'JWT 无状态特性——服务器不存 Token 状态，无法主动撤销单个 Token。', fix: '1) 维护 Token 黑名单（Redis 存已撤销的 jti）2) 缩短 Access Token 有效期（15 分钟）限制泄露窗口 3) 检测异常 IP/设备变化时要求重新认证。' },
    ],
    exercises: [
      { level: '基础', task: '说出 Token 认证相比 Session 认证最大的优势', hint: '分布式系统', answer: 'Token 是无状态的——服务器不需要存储会话信息，任何服务器都能独立验证 Token。这让水平扩展变得简单（不需要共享 Redis Session 存储）。' },
    ],
  },

  // ============================================================
  // 58. Authentication / 认证
  // ============================================================
  "PY9G7KQy8bF6eIdr1ydHf": {
    mentalModel: '认证（Authentication）是"你是谁？"——门卫查你身份证。授权（Authorization）是"你能做什么？"——你进门后哪些房间可以进。先认证，再授权，顺序不能乱。',
    sections: [
      { title: '认证的方式', content: '1) 密码：最传统，需要配合 bcrypt 哈希存储 2) 手机验证码：短信/邮件发一次性验证码 3) 社交登录（OAuth）：用 Google/GitHub/微信账号登录 4) 无密码登录（Magic Link）：发一个登录链接到邮箱 5) Passkey/WebAuthn：指纹/Face ID 生物认证 6) 两步验证（2FA）：密码 + 动态验证码。现代趋势：减少密码依赖——密码易被暴力破解/钓鱼/撞库，优先用 OAuth 或 Passkey 提高安全性同时也提升用户体验。' },
      { title: '认证的安全实践', content: '1) 密码至少 bcrypt 哈希（cost >= 10）2) 登录失败次数限制（5 次错误锁 15 分钟）3) 密码强度要求（最小长度 8，推荐 12+）4) 不使用密码提示问题（社交工程可破解）5) Session/Token 有过期时间（JWT 过期建议 15min-2h，配合 Refresh Token）6) 密码重置链接有时效性（15 分钟过期）。' },
    ],
    diagnosis: [
      { symptom: '用户密码忘了——通过安全问题重置却被别人猜出答案', cause: '密码提示问题/答案容易被社交工程破解。', fix: '1) 废弃安全问题，改用邮箱/手机验证码重置 2) 重置链接设 15 分钟过期 3) 重置后通知用户密码已被修改。' },
      { symptom: '登录接口被暴力破解——日志中有大量同一用户的失败登录记录', cause: '缺少登录失败次数限制——攻击者可以无限次尝试密码。', fix: '1) 同一 IP/账号连续失败 5 次后锁 15 分钟 2) 加验证码（超过失败阈值时触发）3) 监控异常登录模式并告警。' },
    ],
    exercises: [
      { level: '基础', task: '说出认证（Authentication）和授权（Authorization）的区别', hint: '一个问"你是谁"，一个问"你能干什么"', answer: '认证确认身份（登录），授权确认权限（管理员 vs 普通用户）。先认证后授权——不先确认你是谁，就没法知道你能做什么。' },
    ],
  },
};