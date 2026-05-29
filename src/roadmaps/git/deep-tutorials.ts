import type { DeepTutorial } from '../deep-types';

export const GIT_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  // ─────────────────────────────────────────────────────────────
  // 1. git init — 初始化仓库
  // ─────────────────────────────────────────────────────────────
  "1iOkbO5juk2LO-WZHx_W6": {
    mentalModel: 'git init 是给一个文件夹「办身份证」——它在目录下创建隐藏的 .git 文件夹，让 Git 开始追踪这个文件夹里的一切变更。',
    handsOn: [
      { title: '初始化一个新仓库', cmd: 'mkdir my-project && cd my-project && git init', output: 'Initialized empty Git repository in /Users/me/my-project/.git/', explain: 'Git 在当前目录下创建了 .git 隐藏文件夹，里面包含 objects/（数据库）、refs/（分支指针）、HEAD（当前分支指向）等。从这一刻起，这个目录就是一个 Git 仓库。' },
      { title: '查看 .git 目录结构', cmd: 'ls -la .git/', output: 'drwxr-xr-x  HEAD\n-rw-r--r--  config\n-rw-r--r--  description\ndrwxr-xr-x  hooks/\ndrwxr-xr-x  info/\ndrwxr-xr-x  objects/\ndrwxr-xr-x  refs/', explain: 'HEAD 记录当前分支；objects/ 存储所有版本数据（commit、tree、blob）；refs/ 存储分支和标签指针；config 是仓库级配置。' },
      { title: '在已有项目中初始化', cmd: 'cd existing-project && git init && git add . && git commit -m "Initial commit"', output: 'Initialized empty Git repository in /Users/me/existing-project/.git/\n[main (root-commit) a1b2c3d] Initial commit\n 15 files changed, 1234 insertions(+)', explain: '先 git init 建立仓库，git add . 把所有现有文件加入暂存区，然后第一个 commit 把所有内容存入 Git 数据库。root-commit 说明这是仓库的第一个提交。' },
      { title: '初始化裸仓库（用于服务器）', cmd: 'git init --bare my-project.git', output: 'Initialized empty Git repository in /Users/me/my-project.git/', explain: '--bare 创建的仓库没有工作区，只有 .git 里的内容。这种仓库专门用作远程共享仓库（类似 GitHub 上的仓库），别人可以 push 到它。' },
    ],
    diagnosis: [
      { symptom: 'git init 后执行 git status 报 "fatal: not a git repository"', cause: '你不在初始化过的那个目录下，或者 .git 目录被误删了。', fix: '用 pwd 确认当前路径，用 ls -la 检查 .git 目录是否存在。如果被删了，重新 git init 即可。' },
      { symptom: '在子目录里重复 git init 导致嵌套仓库', cause: '在已经 git init 的父目录下的子目录又执行了 git init，产生了 .git/.git 嵌套。', fix: '删除子目录里多余的 .git 文件夹：rm -rf child/.git。Git 会自动向上查找父目录的 .git。' },
      { symptom: 'git init 后默认分支是 master 不是 main', cause: 'Git 2.28 之前默认分支名是 master，之后版本可通过 init.defaultBranch 配置。', fix: 'git config --global init.defaultBranch main 设置全局默认分支为 main。对已有仓库：git branch -m master main 重命名。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个新目录 notes-app 并初始化为 Git 仓库', hint: 'mkdir + git init', answer: 'mkdir notes-app && cd notes-app && git init' },
      { level: '进阶', task: '初始化仓库后，修改默认分支名为 develop', hint: 'git branch -m', answer: 'git init && git branch -m main develop  # 或 git init -b develop（Git 2.28+）' },
      { level: '挑战', task: '初始化一个裸仓库，然后从本地仓库把它添加为 remote 并 push', hint: 'git init --bare + git remote add + git push', answer: 'cd /tmp && git init --bare shared.git && cd ~/my-project && git remote add shared /tmp/shared.git && git push shared main' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. 为什么需要版本控制
  // ─────────────────────────────────────────────────────────────
  "dhIx1GnynvbSUriqYLUt0": {
    mentalModel: '版本控制就像游戏的「存档系统」——每次 commit 是一个存档点，你可以随时回到任何存档，还能开「平行世界」（分支）尝试不同玩法。',
    sections: [
      { title: '没有版本控制的痛苦', content: '常见场景：\n• 文件名变成 final_v2_最终版_真的最终版_v3.docx\n• 多人同时改同一个文件，互相覆盖\n• 删了一段代码，三个月后发现需要它\n• 不知道谁改了什么、为什么改\n• 想回退到上周的版本，但已经覆盖了\n\n这些问题在没有版本控制时是日常，有了 Git 后全部消失。' },
      { title: '版本控制解决的四个核心问题', content: '1. 历史记录：每次变更都有记录——谁改的、什么时候改的、改了什么、为什么改\n2. 回退能力：随时回到任何历史版本，不怕误删误改\n3. 并行开发：分支让多人/多任务同时开发互不干扰\n4. 协作同步：远程仓库让团队成员的改动可以合并到一起\n\n比喻：版本控制 = 时间机器 + 平行宇宙 + 团队协作频道' },
      { title: '真实案例：不用 Git 的代价', content: '场景：小明用 U 盘拷代码，小华用微信传文件\n• 周一：小明改了 main.py，拷给小华\n• 周二：小华也改了 main.py，发回给小明\n• 周三：发现小华的改动覆盖了小明周一的修改\n• 结果：两人花了一下午手动对比两个文件，找回丢失的代码\n\n用 Git 的话：各自在分支上开发，git merge 自动合并，冲突时 Git 标出来让人解决。' },
    ],
    diagnosis: [
      { symptom: '团队成员之间用「发文件」的方式共享代码，频繁覆盖彼此的修改', cause: '没有使用版本控制系统，或者没有正确使用分支。', fix: '引入 Git，每人用独立分支开发，通过 merge 或 rebase 合并。用远程仓库（GitHub）同步。' },
      { symptom: '「我不敢改这段代码，因为不知道改坏了怎么恢复」', cause: '没有版本控制或不会用 git revert/git checkout 回退。', fix: 'git log 查看历史，git diff 对比变更，git checkout <commit> 回到任意版本。Git 保证你永远不会真正「丢失」代码。' },
    ],
    exercises: [
      { level: '基础', task: '列出三个没有版本控制时开发者经常遇到的问题', hint: '想想文件备份、多人协作、代码回退', answer: '1) 文件命名混乱（v1/v2/final/最终版）2) 多人修改同一文件互相覆盖 3) 删掉的代码找不回来' },
      { level: '进阶', task: '用 Git 的视角重新描述「回退到上周的代码」这个操作', hint: '涉及 commit 和 checkout', answer: '每个 commit 是一个快照。用 git log 找到上周那个 commit 的 hash，git checkout <hash> 切换到那个版本，或 git revert <hash> 创建一个「反向提交」来撤销变更。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. git config — 配置 Git
  // ─────────────────────────────────────────────────────────────
  "NMCWgzhhfUvFOMO5GbF_u": {
    mentalModel: 'git config 是 Git 的「设置面板」，分三层：--system（整台电脑）→ --global（当前用户）→ --local（当前仓库），越具体的优先级越高。',
    handsOn: [
      { title: '设置用户名和邮箱（必须）', cmd: 'git config --global user.name "Your Name" && git config --global user.email "you@example.com"', output: '（无输出，成功）', explain: '每个 commit 都会记录 user.name 和 user.email。不设的话 git commit 会直接报错。--global 表示对当前用户的所有仓库生效。' },
      { title: '查看所有配置', cmd: 'git config --list --show-origin', output: 'file:/Users/me/.gitconfig    user.name=Your Name\nfile:/Users/me/.gitconfig    user.email=you@example.com\nfile:.git/config             core.repositoryformatversion=0\nfile:.git/config             core.filemode=true', explain: '--list 列出所有配置项，--show-origin 显示每个配置来自哪个文件。可以看到 global 配置在 ~/.gitconfig，local 配置在 .git/config。' },
      { title: '设置默认编辑器和行尾符', cmd: 'git config --global core.editor "code --wait" && git config --global core.autocrlf input', output: '（无输出，成功）', explain: 'core.editor 设置 Git 打开的编辑器（比如写 commit message 时）。"code --wait" 让 Git 等 VS Code 关闭后再继续。core.autocrlf=input 在 Mac/Linux 上保持 LF 行尾，避免 Windows CRLF 混入。' },
      { title: '设置常用别名', cmd: 'git config --global alias.st status && git config --global alias.co checkout && git config --global alias.br branch && git config --global alias.ci commit', output: '（无输出，成功）', explain: '设置后 git st = git status，git co = git checkout，git br = git branch，git ci = git commit。省时省力，老手都在用。' },
      { title: '仓库级配置覆盖全局配置', cmd: 'cd my-project && git config user.email "work@company.com"', output: '（无输出，成功）', explain: '不加 --global 就是仓库级配置（写入 .git/config）。这让你工作项目用公司邮箱，个人项目用私人邮箱，互不影响。' },
    ],
    diagnosis: [
      { symptom: 'git commit 报错 "Please tell me who you are"', cause: '没有设置 user.name 和 user.email。Git 要求每个 commit 必须有作者信息。', fix: 'git config --global user.name "Your Name" && git config --global user.email "you@example.com"' },
      { symptom: 'commit 记录里显示的是错误的邮箱', cause: '全局配置的邮箱不对，或者某个仓库没有单独设置正确的邮箱。', fix: '用 git config --list --show-origin 查看邮箱来自哪个配置文件。对特定仓库用 git config user.email "correct@email.com" 覆盖。已提交的 commit 用 git commit --amend --reset-author 修改作者。' },
      { symptom: 'Windows 和 Mac 协作时行尾符混乱', cause: 'Windows 用 CRLF（\\r\\n），Mac/Linux 用 LF（\\n）。Git 默认可能自动转换。', fix: 'git config --global core.autocrlf input（Mac/Linux）或 git config --global core.autocrlf true（Windows）。配合 .gitattributes 文件更可靠。' },
    ],
    exercises: [
      { level: '基础', task: '设置全局用户名为你的名字，邮箱为你的邮箱', hint: 'git config --global', answer: 'git config --global user.name "Tu" && git config --global user.email "tu@example.com"' },
      { level: '进阶', task: '给当前仓库设置不同的邮箱，并验证配置生效', hint: '不加 --global + git config --get', answer: 'git config user.email "project-specific@email.com" && git config --get user.email' },
      { level: '挑战', task: '创建一个别名 git last，让它显示最近一条 commit 的详细信息', hint: 'git config alias + git log 参数', answer: 'git config --global alias.last "log -1 HEAD --stat"' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. 基础知识 — Learn the Basics
  // ─────────────────────────────────────────────────────────────
  "HlUUGj3dOZ68t4gIjerXh": {
    mentalModel: 'Git 的基本工作流是一条三站流水线：工作区（改代码）→ 暂存区（挑要提交的）→ 仓库（存档）。每一步都有对应的命令。',
    sections: [
      { title: 'Git 的三个核心区域', content: '1. 工作区（Working Directory）：你实际编辑文件的目录\n2. 暂存区（Staging Area / Index）：下次 commit 要包含的变更清单\n3. 仓库（Repository / .git）：所有 commit 历史的永久存储\n\n流程：编辑文件 → git add（放入暂存区）→ git commit（存入仓库）\n\n比喻：工作区是你的书桌，暂存区是你放在「待发」信封里的文件，仓库是已经寄出归档的信件。' },
      { title: '文件的四种状态', content: '• Untracked：新文件，Git 还不认识它（红色显示在 git status 里）\n• Modified：Git 认识它（已 tracked），但你改过了还没 add\n• Staged：已 add，等待下次 commit（绿色显示在 git status 里）\n• Committed：已存入仓库，安全了\n\n状态转换：\n  新建文件 → Untracked\n  git add → Staged\n  git commit → Committed（tracked 且 clean）\n  再次编辑 → Modified\n  git add → Staged\n  循环往复...' },
      { title: '日常开发流程一览', content: '一个典型的 Git 工作日：\n\n1. git pull          # 拉取团队最新代码\n2. git checkout -b feature/login   # 创建功能分支\n3. 编辑代码...       # 在工作区修改\n4. git status        # 看看改了什么\n5. git add .         # 把所有改动加入暂存区\n6. git commit -m "Add login form"  # 提交一个存档\n7. git push          # 推送到远程\n8. 创建 Pull Request # 请同事审核\n\n这条流水线每天会重复几十次，是所有 Git 操作的基础。' },
    ],
    diagnosis: [
      { symptom: 'git commit 后 git status 还显示有修改', cause: '你 commit 之后又编辑了文件，或者有些文件没有 git add 就 commit 了。', fix: 'git status 看清哪些文件改了，git add 把需要的文件加入暂存区，再 commit。用 git add -p 可以分块暂存。' },
      { symptom: 'git status 里一堆红色文件但我不想管它们', cause: '项目生成了临时文件（node_modules/、.DS_Store、build/）但没有 .gitignore。', fix: '创建 .gitignore 文件，把不需要追踪的目录/文件名写进去。已有的文件用 git rm --cached -r node_modules/ 取消追踪。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个文件、暂存它、提交它，用 git status 验证每个阶段的状态变化', hint: 'echo + git add + git commit + git status', answer: 'echo "hello" > test.txt && git status && git add test.txt && git status && git commit -m "add test" && git status' },
      { level: '进阶', task: '解释 git status 输出中红色和绿色文字分别代表什么', hint: '想想暂存区和工作区', answer: '红色 = 工作区有修改但还没 git add（或 untracked 文件）。绿色 = 已经 git add 进入暂存区，会在下次 commit 中包含。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Git 与其他 VCS 对比
  // ─────────────────────────────────────────────────────────────
  "_jSTrYN9G8EsGHkbusKPU": {
    mentalModel: 'Git 是「分布式」版本控制——每个人都有一份完整的仓库副本（包括全部历史），而 SVN 等「集中式」VCS 只有一个中央服务器存历史。',
    sections: [
      { title: 'Git vs SVN（集中式）', content: 'SVN（Subversion）：\n• 只有一个中央仓库存所有历史\n• 开发者本地只有最新版本\n• 每次查看历史、提交、对比都要联网访问服务器\n• 服务器挂了 = 全团队停工\n\nGit：\n• 每人本地都有完整仓库（全部历史）\n• 查看历史、diff、commit 都在本地完成，秒级响应\n• 不联网也能工作（飞机上也能 commit）\n• 远程仓库只是「同步点」，不是唯一来源\n\n比喻：SVN 像一个共享网盘，Git 像每人一个完整备份 + 同步工具。' },
      { title: 'Git vs Mercurial', content: '两者都是分布式 VCS，诞生于同一时期（2005 年），设计理念相似。\n\nGit 优势：\n• 分支极其轻量（只是一个 41 字节的指针文件）\n• 暂存区（staging area）让你精确控制每次 commit 包含什么\n• 生态碾压：GitHub/GitLab 让 Git 成为事实标准\n\nMercurial 优势：\n• 命令设计更一致、更易学\n• 但市场份额已经很小，Meta（Facebook）内部从 Mercurial 迁移到了 Sapling' },
      { title: '为什么 Git 赢了', content: '2024 年 StackOverflow 调查：Git 使用率 96%+\n\nGit 胜出的关键因素：\n1. GitHub 的出现（2008）——让代码托管和协作变得极其简单\n2. 分支模型革命——创建/切换/删除分支是毫秒级操作，鼓励大胆实验\n3. Linux 内核社区的背书——Linus Torvalds 亲自创造，顶级开发者采用\n4. 暂存区设计——比 SVN 的直接 commit 更灵活\n5. 性能——本地操作都是瞬时的，SVN 大仓库慢到崩溃' },
    ],
    diagnosis: [
      { symptom: '从 SVN 转到 Git，总是忘记 git add 这一步', cause: 'SVN 没有暂存区概念，svn commit 直接提交所有修改。Git 多了一个 staging 步骤。', fix: '习惯养成：改完代码 → git add → git commit。如果想跳过暂存（不推荐），可以用 git commit -a -m "msg" 直接提交所有已 tracked 文件的修改。' },
      { symptom: '从 SVN 转过来，总觉得不 push 就不安全', cause: 'SVN 的 commit = 直接提交到服务器。Git 的 commit 只是本地存档，push 才到远程。', fix: '理解 Git 两步提交模型：commit 是本地存档（快、安全、可撤销），push 是同步到远程。多 commit 勤 push 是好习惯，但不 push 也不怕——本地仓库有完整历史。' },
    ],
    exercises: [
      { level: '基础', task: '说出 Git 和 SVN 最核心的区别是什么', hint: '想想「分布」这个词', answer: 'Git 是分布式 VCS——每个开发者本地都有完整的仓库副本（包括全部历史）。SVN 是集中式——只有中央服务器有完整历史，本地只有最新版本。' },
      { level: '进阶', task: '列举 Git 比 SVN 优秀的三个具体特性', hint: '分支、速度、离线', answer: '1) 分支是轻量指针，创建和切换都是瞬间完成 2) 本地操作（log/diff/commit）不需要网络，速度快 3) 离线也能正常工作（commit、查看历史、创建分支）' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. 安装 Git
  // ─────────────────────────────────────────────────────────────
  "v7hCNbgPByi3YiLSs46BK": {
    mentalModel: '安装 Git 就像给电脑装一个「时间管理器」——装完后你在任何目录都能用 git 命令追踪代码变更。',
    handsOn: [
      { title: '检查 Git 是否已安装', cmd: 'git --version', output: 'git version 2.43.0', explain: '如果输出版本号说明已安装。Git 2.28+ 支持 init.defaultBranch，建议保持最新版本。macOS 通常自带旧版，建议用 brew 更新。' },
      { title: 'macOS 上用 Homebrew 安装', cmd: 'brew install git', output: '==> Installing git\n==> Pouring git--2.43.0.arm64_sonoma.bottle.tar.gz\n🍺  /opt/homebrew/Cellar/git/2.43.0: 1,615 files, 50.2MB', explain: 'Homebrew 是 macOS 的包管理器。安装完后 git 命令全局可用。brew upgrade git 可以升级到最新版。' },
      { title: 'Ubuntu/Debian 上用 apt 安装', cmd: 'sudo apt update && sudo apt install -y git', output: 'Reading package lists... Done\nSetting up git (1:2.34.1-1ubuntu1.10) ...\nProcessing triggers for man-db ...', explain: 'apt 是 Debian/Ubuntu 的包管理器。安装后运行 git --version 验证。CentOS/RHEL 用 yum install git 或 dnf install git。' },
      { title: 'Windows 上安装 Git for Windows', cmd: 'winget install --id Git.Git -e --source winget', output: 'Successfully installed Git.Git', explain: 'Windows 推荐安装 Git for Windows（git-scm.com），它包含 Git Bash 终端和 Git GUI。winget 是 Windows 自带的包管理器。安装后在 CMD/PowerShell/Git Bash 中都能使用 git 命令。' },
      { title: '安装后做三件事', cmd: 'git config --global user.name "Your Name" && git config --global user.email "you@email.com" && git config --global init.defaultBranch main', output: '（无输出，成功）', explain: '安装后必须配置用户名和邮箱（每个 commit 都需要），再设默认分支名为 main。用 git config --list 验证。' },
    ],
    diagnosis: [
      { symptom: '终端报 "git: command not found"', cause: 'Git 没安装，或者装了但不在 PATH 中。', fix: 'macOS: brew install git。Linux: sudo apt install git。Windows: 去 git-scm.com 下载安装，安装时勾选 "Add to PATH"。装完后重启终端。' },
      { symptom: 'macOS 上 git --version 显示的是 Apple Git（旧版本）', cause: 'macOS 自带的 Xcode Command Line Tools 包含一个旧版 Git，优先级高于 brew 安装的版本。', fix: '用 which git 查看用的是哪个 git。修改 PATH 让 brew 的 git 优先：export PATH="/opt/homebrew/bin:$PATH" 加到 ~/.zshrc 里。' },
    ],
    exercises: [
      { level: '基础', task: '安装 Git 并验证版本号', hint: 'git --version', answer: 'brew install git && git --version  # macOS\nsudo apt install git && git --version  # Linux' },
      { level: '进阶', task: '安装后完成完整配置：用户名、邮箱、默认编辑器、默认分支名', hint: '四条 git config 命令', answer: 'git config --global user.name "Name" && git config --global user.email "email@example.com" && git config --global core.editor "code --wait" && git config --global init.defaultBranch main' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. 什么是仓库 — What is a Repository
  // ─────────────────────────────────────────────────────────────
  "PtU5Qwfzn3N1i3oRlCGoR": {
    mentalModel: 'Git 仓库 = 项目文件夹 + .git 隐藏目录。.git 是 Git 的「大脑」，存储了项目的全部历史、配置和分支信息。',
    handsOn: [
      { title: '仓库的完整结构', cmd: 'cd my-repo && find .git -maxdepth 2 -type f | head -20', output: '.git/HEAD\n.git/config\n.git/description\n.git/hooks/pre-commit.sample\n.git/info/exclude\n.git/objects/pack/pack-abc123.pack\n.git/refs/heads/main', explain: 'HEAD 指向当前分支；objects/ 存储所有数据（commit/tree/blob 以 SHA 哈希命名）；refs/heads/ 存储分支指针；config 是仓库配置。' },
      { title: '查看仓库大小', cmd: 'du -sh .git/', output: '  23M    .git/', explain: '.git 目录存储了项目的全部历史。一个活跃项目可能只有几十 MB 的 .git，因为 Git 使用增量存储和压缩，效率极高。' },
      { title: '查看仓库有多少个 commit', cmd: 'git rev-list --count HEAD', output: '1247', explain: 'git rev-list 列出所有可达的 commit，--count 计数。1247 个 commit 意味着这个项目有 1247 个「存档点」，你可以回到其中任何一个。' },
      { title: '检查一个目录是否是 Git 仓库', cmd: 'git rev-parse --is-inside-work-tree', output: 'true', explain: '返回 true 说明当前目录在某个 Git 仓库的工作区内。如果不在仓库里，会报 fatal: not a git repository。Git 会向上递归查找 .git 目录。' },
    ],
    diagnosis: [
      { symptom: '克隆下来的仓库占了几 GB 磁盘空间', cause: '大型仓库（如 Linux 内核）历史很长，.git 目录存储了所有历史版本的文件。', fix: '用 git clone --depth 1 做浅克隆，只拉最新一次 commit。已有仓库用 git gc --aggressive 压缩。或用 git sparse-checkout 只检出需要的目录。' },
      { symptom: '.git 目录损坏报 "object file is empty" 或 "bad object"', cause: '磁盘故障、意外断电、或传输中断导致 .git/objects 里的文件损坏。', fix: '先从远程重新克隆。如果本地有未推送的 commit，尝试 git fsck --full 检查损坏范围。预防：定期 push，不要只依赖本地仓库。' },
    ],
    exercises: [
      { level: '基础', task: '在你的电脑上找到任意一个 Git 仓库，查看 .git 目录里的 HEAD 文件内容', hint: 'cat .git/HEAD', answer: 'cat .git/HEAD  # 输出 ref: refs/heads/main，说明当前在 main 分支上' },
      { level: '进阶', task: '解释 .git/objects 和 .git/refs/heads 分别存储什么', hint: '想想「数据」和「指针」', answer: 'objects/ 存储项目的所有数据（文件内容、目录结构、commit 信息），以 SHA-1 哈希命名。refs/heads/ 存储分支指针，每个文件内容是一个 commit hash，指向该分支的最新 commit。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. 工作区 — Working Directory
  // ─────────────────────────────────────────────────────────────
  "Sv36oxTZwlUv-i1K28NeP": {
    mentalModel: '工作区就是你在磁盘上实际看到和编辑的文件目录——它是 Git 仓库「当前版本的实体呈现」，你的一切修改都从这里开始。',
    handsOn: [
      { title: '查看工作区的状态', cmd: 'git status', output: 'On branch main\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  modified:   src/app.ts\n  modified:   src/utils.ts\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n  new-feature.ts', explain: '工作区状态分两类：modified（已追踪文件被修改）和 untracked（新文件还没被 Git 管理）。Git 用红色标记未暂存的修改。' },
      { title: '查看工作区和暂存区的差异', cmd: 'git diff', output: 'diff --git a/src/app.ts b/src/app.ts\nindex a1b2c3d..e4f5g6h 100644\n--- a/src/app.ts\n+++ b/src/app.ts\n@@ -10,6 +10,7 @@\n function main() {\n   init();\n+  console.log("debug");\n   run();\n }', explain: 'git diff（不加参数）显示工作区 vs 暂存区的差异——也就是你改了但还没 git add 的内容。红色是删除的行，绿色是新增的行。' },
      { title: '丢弃工作区的修改（危险！）', cmd: 'git checkout -- src/app.ts', output: '（无输出，文件恢复到暂存区/仓库的版本）', explain: '把文件恢复到暂存区的状态（如果没暂存过，恢复到最近 commit 的版本）。注意：这个操作不可逆！未保存的修改会永久丢失。Git 2.23+ 推荐用 git restore src/app.ts，语义更清晰。' },
      { title: '恢复被删除的文件', cmd: 'git restore deleted-file.ts', output: '（无输出，文件恢复）', explain: '如果你在工作区删除了一个已追踪的文件，git restore 可以把它找回来。git status 会显示 deleted: deleted-file.ts，用 restore 即可恢复。' },
    ],
    diagnosis: [
      { symptom: '工作区很乱，改了很多文件但只想提交其中一部分', cause: '多个任务交叉进行，修改混在一起。', fix: '用 git add -p（patch 模式）逐块选择要暂存的代码段。或用 git stash push -p 把不想提交的修改临时藏起来。' },
      { symptom: '不小心在工作区删了一个文件', cause: '误操作 rm 或者编辑器意外清空了文件。', fix: 'git restore <filename> 恢复文件。如果还没 commit 过（untracked 文件），Git 无法帮你恢复——这就是为什么重要文件要尽早 commit。' },
    ],
    exercises: [
      { level: '基础', task: '修改一个已追踪的文件，用 git diff 查看你改了什么，然后恢复它', hint: 'git diff + git restore', answer: 'echo "change" >> file.txt && git diff && git restore file.txt' },
      { level: '进阶', task: '解释 git diff 和 git diff --staged 的区别', hint: '想想工作区和暂存区', answer: 'git diff 对比工作区 vs 暂存区（你改了但没 add 的内容）。git diff --staged 对比暂存区 vs 最近 commit（你 add 了但没 commit 的内容）。两者加起来 = 工作区 vs 最近 commit 的全部差异。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. 克隆仓库 — Cloning Repositories
  // ─────────────────────────────────────────────────────────────
  "1Koej79yTv-OAswVZwgGq": {
    mentalModel: 'git clone 是「复制一整个项目到你电脑上」——它把远程仓库的全部历史下载到本地，并自动设好远程连接。',
    handsOn: [
      { title: '克隆一个 GitHub 仓库（HTTPS）', cmd: 'git clone https://github.com/expressjs/express.git', output: 'Cloning into \'express\'...\nremote: Enumerating objects: 56789, done.\nremote: Counting objects: 100% (1234/1234), done.\nReceiving objects: 100% (56789/56789), 34.56 MiB | 12.34 MiB/s, done.\nResolving deltas: 100% (34567/34567), done.', explain: 'Git 下载了 express 项目的全部历史和所有文件，创建了 express/ 目录，自动设好 origin remote 指向 GitHub 地址。你现在拥有完整的本地副本。' },
      { title: '克隆到指定目录', cmd: 'git clone https://github.com/vuejs/core.git my-vue', output: "Cloning into 'my-vue'...", explain: '第二个参数指定了目标目录名。默认是仓库名（core），这里改成了 my-vue。' },
      { title: '浅克隆（只要最新一次 commit）', cmd: 'git clone --depth 1 https://github.com/facebook/react.git', output: "Cloning into 'react'...\nremote: Enumerating objects: 4567, done.\nReceiving objects: 100% (4567/4567), 5.67 MiB | 8.90 MiB/s, done.", explain: '--depth 1 只拉取最新一次 commit，.git 目录小得多。适合：只需要代码不需要历史的场景（如看源码、CI 构建）。缺点是看不到历史、不能 checkout 旧版本。' },
      { title: '用 SSH 克隆（推荐）', cmd: 'git clone git@github.com:torvalds/linux.git', output: "Cloning into 'linux'...\nremote: Enumerating objects: 10234567, done.", explain: 'SSH 方式需要先配置 SSH 密钥。优势：push 时不用每次输密码（HTTPS 每次要输或用 credential helper）。格式是 git@github.com:user/repo.git。' },
    ],
    diagnosis: [
      { symptom: 'git clone 很慢或者卡住', cause: '仓库太大（如 Linux 内核 3GB+）或网络不好。', fix: '用 git clone --depth 1 浅克隆。或用 git clone --filter=blob:none 只克隆 commit 和 tree，文件内容按需下载。换用代理或镜像。' },
      { symptom: 'git clone 报 "Permission denied (publickey)"', cause: '用 SSH 方式克隆但没有配置 SSH 密钥，或者密钥没添加到 GitHub 账户。', fix: '生成密钥：ssh-keygen -t ed25519 -C "email@example.com"。复制公钥：cat ~/.ssh/id_ed25519.pub。添加到 GitHub Settings → SSH Keys。或临时改用 HTTPS 地址。' },
      { symptom: '克隆后 git branch -a 看不到某些分支', cause: 'clone 默认只 checkout 默认分支（main/master），其他分支在远程存在但本地没有。', fix: 'git branch -a 查看所有分支（包括远程分支 remotes/origin/*）。git checkout feature-branch 会自动创建本地分支跟踪远程分支。' },
    ],
    exercises: [
      { level: '基础', task: '克隆 https://github.com/octocat/Hello-World 到本地', hint: 'git clone + URL', answer: 'git clone https://github.com/octocat/Hello-World.git' },
      { level: '进阶', task: '浅克隆一个大型仓库（如 react），对比它和完整克隆的大小差异', hint: '--depth 1 + du -sh', answer: 'git clone --depth 1 https://github.com/facebook/react.git react-shallow && du -sh react-shallow/.git' },
      { level: '挑战', task: '克隆一个仓库后，查看所有远程分支，并 checkout 其中一个', hint: 'git branch -a + git checkout', answer: 'git clone https://github.com/expressjs/express.git && cd express && git branch -a && git checkout 4.x' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. 暂存区 — Staging Area
  // ─────────────────────────────────────────────────────────────
  "h71Tx3nkfUrnhaqcHlDkQ": {
    mentalModel: '暂存区是 commit 的「草稿箱」——你把想一起提交的变更先放进去，检查确认后再一次性 commit。它让你精确控制每次提交包含什么。',
    handsOn: [
      { title: '把文件加入暂存区', cmd: 'git add src/app.ts src/utils.ts', output: '（无输出，成功）', explain: 'git add 把工作区的修改复制到暂存区。可以指定多个文件。暂存区的文件会在下次 git commit 时被存入仓库。git status 里暂存的文件显示为绿色。' },
      { title: '暂存区 vs 工作区的差异', cmd: 'git diff --staged', output: 'diff --git a/src/app.ts b/src/app.ts\nindex a1b2c3d..e4f5g6h 100644\n--- a/src/app.ts\n+++ b/src/app.ts\n@@ -5,6 +5,8 @@\n+import { helper } from "./utils";\n+\n function main() {\n-  oldCode();\n+  helper();\n }', explain: 'git diff --staged（也叫 --cached）显示暂存区和最近 commit 的差异。这是你下次 commit 会包含的变更。如果 diff --staged 的内容不对，说明你暂存了不该暂存的东西。' },
      { title: '分块暂存（只暂存文件的一部分修改）', cmd: 'git add -p src/app.ts', output: 'diff --git a/src/app.ts b/src/app.ts\n@@ -1,3 +1,5 @@\n+import x from "x";\n+\n function main() {\nStage this hunk [y,n,q,a,d,j,J,g,/,e,?]? y', explain: '-p (patch) 模式让你逐块选择：y=暂存这块，n=跳过，s=把这块拆更小，e=手动编辑。适合同一个文件里混了多个不相关修改时，分次提交。' },
      { title: '取消暂存', cmd: 'git restore --staged src/app.ts', output: '（无输出，成功）', explain: '把文件从暂存区移回工作区（文件修改还在，只是不暂存了）。Git 2.23 之前用 git reset HEAD src/app.ts。注意：不会丢失修改，只是取消暂存。' },
      { title: '暂存所有已追踪文件的修改', cmd: 'git add -u', output: '（无输出，成功）', explain: '-u (update) 暂存所有已追踪文件的修改和删除，但不包括新文件（untracked）。git add . 会暂存一切（包括新文件）。git add -A 等于 git add .。' },
    ],
    diagnosis: [
      { symptom: 'git commit 时报 "nothing to commit, working tree clean" 但明明改了文件', cause: '你可能已经 add 并 commit 过了，或者改的是一个被 .gitignore 忽略的文件。', fix: 'git status 查看实际状态。git diff 看工作区差异，git diff --staged 看暂存区差异。如果文件被 .gitignore 忽略了，用 git check-ignore -v filename 确认。' },
      { symptom: '把不该提交的文件（如 .env）加入了暂存区', cause: '用了 git add . 一把梭，把敏感文件也暂存了。', fix: 'git restore --staged .env 取消暂存。然后把这个文件加到 .gitignore。如果已经 commit 了，用 git rm --cached .env 从仓库移除（但本地文件保留），再 commit。' },
    ],
    exercises: [
      { level: '基础', task: '修改两个文件，只暂存其中一个，然后提交', hint: 'git add 指定文件名', answer: 'echo "a" > a.txt && echo "b" > b.txt && git add a.txt && git commit -m "update a only"' },
      { level: '进阶', task: '用 git add -p 只暂存一个文件中的部分修改', hint: '交互模式下按 y/n 选择', answer: '在一个文件里做两处修改 → git add -p file.txt → 第一块按 y，第二块按 n → git commit 只包含第一块修改' },
      { level: '挑战', task: '解释 git add . 和 git add -u 的区别，并举例说明什么时候用哪个', hint: '新文件 vs 已有文件', answer: 'git add . 暂存所有变更（包括新文件）。git add -u 只暂存已追踪文件的修改和删除（忽略新文件）。场景：你创建了一个临时调试文件不想提交，用 git add -u 就不会把它加进去。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. 管理远程 — Managing Remotes
  // ─────────────────────────────────────────────────────────────
  "sBQOInoFBU9XfkPZ-JlyT": {
    mentalModel: 'Remote 是你本地仓库和远程仓库之间的「快递地址」——origin 是默认地址（clone 时自动设的），你可以添加更多地址来连接不同的远程仓库。',
    handsOn: [
      { title: '查看已配置的远程仓库', cmd: 'git remote -v', output: 'origin  https://github.com/user/repo.git (fetch)\norigin  https://github.com/user/repo.git (push)', explain: '-v (verbose) 显示远程名称和 URL。每个 remote 有两个 URL：fetch（拉取用）和 push（推送用），通常相同。origin 是 clone 时自动创建的默认远程。' },
      { title: '添加一个新的远程仓库', cmd: 'git remote add upstream https://github.com/original/repo.git', output: '（无输出，成功）', explain: '添加了名为 upstream 的远程。常见场景：你 fork 了一个项目，origin 指向你的 fork，upstream 指向原始仓库。用 git fetch upstream 拉取上游更新。' },
      { title: '修改远程 URL', cmd: 'git remote set-url origin git@github.com:user/repo.git', output: '（无输出，成功）', explain: '把 origin 的 URL 从 HTTPS 改成 SSH。也可以用来修正 URL 错误。git remote set-url origin --push <url> 可以单独设置 push URL（如 push 到一个不同的服务器）。' },
      { title: '删除一个远程', cmd: 'git remote remove old-remote', output: '（无输出，成功）', explain: '删除指定的远程配置。本地分支不会受影响，但 tracking 关系会断开。' },
      { title: '查看远程分支信息', cmd: 'git remote show origin', output: '* remote origin\n  Fetch URL: https://github.com/user/repo.git\n  Push  URL: https://github.com/user/repo.git\n  HEAD branch: main\n  Remote branches:\n    main   tracked\n    dev    tracked\n  Local branch configured for \'git pull\':\n    main merges with remote main', explain: '显示远程的详细信息：URL、默认分支、哪些远程分支被追踪、本地分支和远程分支的对应关系。' },
    ],
    diagnosis: [
      { symptom: 'git push 报 "fatal: \'origin\' does not appear to be a git repository"', cause: '没有名为 origin 的远程仓库，或者远程 URL 配置错误。', fix: 'git remote -v 检查远程配置。如果没有，用 git remote add origin <url> 添加。如果 URL 错了，用 git remote set-url origin <correct-url> 修改。' },
      { symptom: 'fork 的项目想同步上游的更新但不知道怎么操作', cause: 'fork 后只配了 origin（指向你的 fork），没有配 upstream（指向原始仓库）。', fix: 'git remote add upstream <original-repo-url> && git fetch upstream && git merge upstream/main。这样就把上游 main 分支的更新合并到你的本地了。' },
    ],
    exercises: [
      { level: '基础', task: '克隆一个仓库后，查看它的远程配置，然后添加一个名为 backup 的远程', hint: 'git remote -v + git remote add', answer: 'git clone <url> && cd repo && git remote -v && git remote add backup <backup-url> && git remote -v' },
      { level: '进阶', task: '设置一个仓库同时推送到 GitHub 和 GitLab', hint: '两个 remote 或一个 remote 多个 push URL', answer: '方案1：git remote add gitlab <gitlab-url>，push 时分别 git push origin main 和 git push gitlab main。\n方案2：git remote set-url --add --push origin <gitlab-url>，git push origin main 会同时推到两个。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. 提交变更 — Committing Changes
  // ─────────────────────────────────────────────────────────────
  "2_z3R7seCvQVj-Na4H1SV": {
    mentalModel: 'git commit 是给暂存区里的变更「拍快照存档」——每次 commit 生成一个唯一 ID（hash），你可以随时回到这个时间点。',
    handsOn: [
      { title: '基本提交', cmd: 'git add . && git commit -m "Add user login feature"', output: '[main a1b2c3d] Add user login feature\n 3 files changed, 45 insertions(+), 12 deletions(-)\n create mode 100644 src/login.ts', explain: '先 add 把所有修改加入暂存区，commit -m 把暂存区的内容创建一个新的 commit。输出显示：分支名、commit hash（短格式）、提交信息、修改统计。' },
      { title: '跳过暂存区直接提交（仅限已追踪文件）', cmd: 'git commit -am "Fix typo in README"', output: '[main b2c3d4e] Fix typo in README\n 1 file changed, 1 insertion(+), 1 deletion(-)', explain: '-a 参数自动把所有已追踪文件的修改加入暂存区再提交。注意：新文件（untracked）不会被 -a 包含，必须先 git add。适合快速小修改。' },
      { title: '修改最后一次提交（消息或内容）', cmd: 'git commit --amend -m "Add user login feature with validation"', output: '[main c3d4e5f] Add user login feature with validation\n Date: Mon Jan 15 10:30:00 2024\n 3 files changed, 45 insertions(+), 12 deletions(-)', explain: '--amend 用当前暂存区内容替换最后一次 commit。可以修改提交信息和添加遗漏的文件。注意：会生成新的 commit hash（旧的 commit 还在 reflog 里，30 天后被清理）。' },
      { title: '交互式提交（写长消息）', cmd: 'git commit', output: '（打开编辑器让你写 commit message）\n# Please enter the commit message for your changes.\n# Lines starting with \'#\' will be ignored.\n#\n# On branch main\n# Changes to be committed:\n#   modified:   src/app.ts', explain: '不加 -m 会打开编辑器（由 core.editor 配置决定）。第一行是标题（50 字以内），空一行后写详细描述。适合复杂的 commit 需要详细说明时。' },
    ],
    diagnosis: [
      { symptom: 'git commit 报 "nothing to commit"', cause: '暂存区是空的——你没有 git add，或者改的文件被 .gitignore 忽略了。', fix: 'git status 检查状态。如果有修改但显示红色，先 git add。如果文件被忽略，检查 .gitignore。如果确实没改东西，那就不需要 commit。' },
      { symptom: 'commit message 写错了想改', cause: '刚 commit 完发现消息有 typo 或描述不准确。', fix: 'git commit --amend -m "新的消息"。如果已经 push 了，需要 git push --force（小心使用）。建议：commit 前用 git diff --staged 检查一下。' },
      { symptom: '提交了一个超大 commit，包含了很多不相关的修改', cause: '用 git add . 一把梭后直接 commit，把多个功能的修改混在一起。', fix: '用 git reset HEAD~1 撤销 commit（修改保留在工作区），然后用 git add -p 分块暂存，分多次 commit。以后养成「一个功能一个 commit」的习惯。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个文件、暂存它、提交它，并验证 commit 出现在历史中', hint: 'echo + git add + git commit + git log', answer: 'echo "hello" > hello.txt && git add hello.txt && git commit -m "Add hello.txt" && git log --oneline -1' },
      { level: '进阶', task: '提交后发现漏了一个文件，把它加入上一次 commit 而不是新建 commit', hint: 'git add + --amend', answer: 'git add missed-file.ts && git commit --amend --no-edit  # --no-edit 保留原来的 commit 消息' },
      { level: '挑战', task: '把一个大的修改拆成两个语义清晰的 commit', hint: 'git reset + git add -p', answer: 'git reset HEAD~1 → git add -p big-file.ts（第一块按 y）→ git commit -m "feat: part 1" → git add -p big-file.ts（剩余按 y）→ git commit -m "feat: part 2"' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 13. 创建分支 — Creating Branch
  // ─────────────────────────────────────────────────────────────
  "OegitQ5Ngjvd3ZfMpfrkM": {
    mentalModel: '分支是 Git 里的「平行时间线」——它只是一个指向某个 commit 的轻量指针（41 字节），创建一个分支几乎零成本。',
    handsOn: [
      { title: '查看所有分支', cmd: 'git branch -a', output: '* main\n  develop\n  remotes/origin/main\n  remotes/origin/develop\n  remotes/origin/feature/login', explain: '* 标记当前所在分支。没有 remotes/ 前缀的是本地分支，有前缀的是远程分支的本地镜像。-a 显示所有（本地 + 远程）。' },
      { title: '创建新分支', cmd: 'git branch feature/login', output: '（无输出，成功）', explain: '在当前 commit 的位置创建一个新的分支指针。注意：只是创建分支，不会自动切换过去。用 git branch -v 可以看到新分支指向的 commit。' },
      { title: '创建并切换到新分支', cmd: 'git checkout -b feature/login', output: "Switched to a new branch 'feature/login'", explain: '-b 参数 = 创建 + 切换，两步合一。这是最常用的方式。Git 2.23+ 推荐用 git switch -c feature/login，语义更明确。' },
      { title: '从一个特定的 commit 创建分支', cmd: 'git checkout -b hotfix/bug-123 abc1234', output: "Switched to a new branch 'hotfix/bug-123'", explain: '第二个参数指定从哪个 commit 创建分支。适合从旧版本创建修复分支——不基于最新的 main，而是基于出问题的版本。' },
      { title: '用 git switch 创建分支（Git 2.23+）', cmd: 'git switch -c feature/dashboard', output: "Switched to a new branch 'feature/dashboard'", explain: 'git switch 是 git checkout 的分支专用替代品。switch -c = 创建并切换，switch <name> = 切换到已有分支。比 checkout 语义更清晰，不容易误操作。' },
    ],
    diagnosis: [
      { symptom: 'git checkout -b 报 "fatal: a branch named already exists"', cause: '分支名已经存在了。Git 不允许创建重名分支。', fix: '如果只是切换，用 git checkout feature/login（不加 -b）。如果想重建，先 git branch -D feature/login 删除旧的再创建。' },
      { symptom: '在新分支上发现基于的 commit 不对', cause: '创建分支时 main 不是最新的（忘了 pull），或者想从别的 commit 开始。', fix: 'git rebase main 把当前分支的 commit 变基到最新的 main 上。或者删除重建：git checkout main && git branch -D feature && git checkout -b feature。' },
    ],
    exercises: [
      { level: '基础', task: '从 main 分支创建一个 feature/about-page 分支并切换过去', hint: 'git checkout -b 或 git switch -c', answer: 'git checkout main && git checkout -b feature/about-page' },
      { level: '进阶', task: '列出所有分支并按最近提交排序', hint: 'git branch --sort', answer: 'git branch -a --sort=-committerdate  # 最近有提交的分支排在前面' },
      { level: '挑战', task: '从一个旧 commit 创建 hotfix 分支，修复后合并回 main', hint: 'git checkout -b <name> <hash> + cherry-pick 或 merge', answer: 'git log --oneline 找到目标 commit hash → git checkout -b hotfix <hash> → 修复 → git commit → git checkout main → git merge hotfix' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 14. 推送与拉取变更 — Pushing / Pulling Changes
  // ─────────────────────────────────────────────────────────────
  "ZVMCh9om37ee1qsecFa-N": {
    mentalModel: 'push 是「发货」——把本地 commit 送到远程仓库。pull 是「收货」——从远程拉取别人的 commit 合并到本地。两者配合实现团队同步。',
    handsOn: [
      { title: '推送当前分支到远程', cmd: 'git push origin main', output: 'Enumerating objects: 15, done.\nCounting objects: 100% (15/15), done.\nWriting objects: 100% (8/8), 1.23 KiB | 1.23 MiB/s, done.\nTo https://github.com/user/repo.git\n   abc1234..def5678  main -> main', explain: '把本地 main 分支的 commit 推送到 origin 远程。输出显示推送了多少对象，远程分支从 abc1234 更新到 def5678。' },
      { title: '首次推送新分支并设置追踪', cmd: 'git push -u origin feature/login', output: "Enumerating objects: 10, done.\nTo https://github.com/user/repo.git\n * [new branch]      feature/login -> feature/login\nbranch 'feature/login' set up to track 'origin/feature/login'.", explain: '-u (--set-upstream) 建立本地分支和远程分支的追踪关系。设好后，以后 git push/git pull 不用指定 origin feature/login，直接 git push 就行。只需首次推送时用 -u。' },
      { title: '拉取远程更新并合并', cmd: 'git pull origin main', output: 'remote: Enumerating objects: 20, done.\nUnpacking objects: 100% (12/12), 2.34 KiB | 789.00 KiB/s, done.\nFrom https://github.com/user/repo\n * branch            main     -> FETCH_HEAD\nUpdating abc1234..def5678\nFast-forward\n src/api.ts | 10 ++++++++++\n 1 file changed, 10 insertions(+)', explain: 'git pull = git fetch + git merge。先从远程下载新 commit（fetch），再合并到当前分支（merge）。Fast-forward 表示本地没有新 commit，直接移动指针即可。' },
      { title: '用 rebase 方式拉取（保持线性历史）', cmd: 'git pull --rebase origin main', output: 'From https://github.com/user/repo\n * branch            main     -> FETCH_HEAD\nFirst, rewinding head to replay your work on top of it...\nApplying: Add login feature (1/2)\nApplying: Fix login validation (2/2)', explain: '--rebase 把你的本地 commit「搬到」远程最新 commit 的后面，而不是创建一个合并 commit。结果是线性历史，更清晰。可以在 .gitconfig 中设 pull.rebase=true 作为默认行为。' },
    ],
    diagnosis: [
      { symptom: 'git push 报 "rejected (fetch first)"', cause: '远程有你本地没有的 commit（别人推送了）。Git 拒绝 push 防止覆盖别人的工作。', fix: '先 git pull 合并远程的更新，解决可能的冲突，然后再 git push。或者用 git pull --rebase 保持线性历史。' },
      { symptom: 'git pull 后出现了一堆 "CONFLICT" 消息', cause: '你和远程对同一个文件的同一部分做了不同修改，Git 无法自动合并。', fix: '打开冲突文件，找到 <<<<<<< HEAD 和 ======= 标记，手动选择保留哪段代码。解决后 git add <file> && git commit。或者用 git merge --abort 放弃合并。' },
      { symptom: 'git push 报 "Updates were rejected because the tip of your current branch is behind"', cause: '跟 "rejected (fetch first)" 一样——远程有新 commit。', fix: 'git pull --rebase origin main 然后 git push。如果确实要用 force push（你确认远程的 commit 不需要了），用 git push --force-with-lease（比 --force 安全）。' },
    ],
    exercises: [
      { level: '基础', task: '推送本地 main 分支到 origin，设置上游追踪', hint: 'git push -u', answer: 'git push -u origin main' },
      { level: '进阶', task: '配置 git pull 默认使用 rebase 而不是 merge', hint: 'git config pull.rebase', answer: 'git config --global pull.rebase true  # 以后 git pull 默认用 rebase' },
      { level: '挑战', task: '模拟两人协作：用两个目录模拟两个开发者，互相 push 和 pull', hint: 'git clone 同一仓库到两个目录', answer: 'mkdir dev-a dev-b → 分别 clone → dev-a 修改并 push → dev-b 先 pull 再修改并 push → dev-a 再 pull' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 15. 重命名分支 — Renaming Branch
  // ─────────────────────────────────────────────────────────────
  "_dPOVUbxApx0pfKPH8fgr": {
    mentalModel: '重命名分支就是改一个指针的名字——分支指向的 commit 完全不变，只是标签换了。就像给文件夹改名，里面的文件不动。',
    handsOn: [
      { title: '重命名当前所在分支', cmd: 'git branch -m feature/old-name feature/new-name', output: '（无输出，成功）', explain: '-m (move) 把当前分支从 old-name 改名为 new-name。分支指向的 commit、历史全部不变，只是名字改了。' },
      { title: '重命名其他分支（不在该分支上时）', cmd: 'git branch -m feature/typo feature/login', output: '（无输出，成功）', explain: '当你在 main 分支上时，重命名 feature/typo 分支。第一个参数是旧名字，第二个是新名字。如果重命名当前分支，可以只写新名字：git branch -m new-name。' },
      { title: '同步远程分支名（重命名后）', cmd: 'git push origin feature/new-name && git push origin --delete feature/old-name', output: " * [new branch]      feature/new-name -> feature/new-name\n - [deleted]         feature/old-name", explain: '本地重命名后远程还是旧名字。需要：1) 推送新名字的分支 2) 删除远程旧名字的分支。然后 git branch -u origin/feature/new-name 重新设置追踪。' },
      { title: '完整重命名流程（本地 + 远程）', cmd: 'git branch -m feature/old feature/new && git push origin feature/new && git push origin --delete feature/old && git branch -u origin/feature/new', output: " * [new branch]  feature/new -> feature/new\n - [deleted]     feature/old\nbranch 'feature/new' set up to track 'origin/feature/new'.", explain: '完整的四步：本地重命名 → 推送新分支 → 删除远程旧分支 → 设置追踪关系。如果其他同事也在用旧分支，要通知他们重新 checkout。' },
    ],
    diagnosis: [
      { symptom: '重命名分支后 git push 报 "src refspec does not match any"', cause: '推送了旧名字的分支名，远程不认识。', fix: '确保推送新名字：git push origin feature/new-name。然后删除远程旧分支：git push origin --delete feature/old-name。' },
      { symptom: '重命名默认分支（main/master）后 CI/CD 失败了', cause: 'CI 配置文件（如 .github/workflows）里硬编码了旧分支名。', fix: '同步更新 CI 配置里的分支名，提交并推送。GitHub 上还要在 Settings → Branches 里更新默认分支。' },
    ],
    exercises: [
      { level: '基础', task: '把当前分支从 main 重命名为 develop', hint: 'git branch -m', answer: 'git branch -m develop' },
      { level: '进阶', task: '重命名一个远程分支（包括本地和远程同步）', hint: '本地 -m + push new + delete old + set upstream', answer: 'git checkout feature/old && git branch -m feature/new && git push origin feature/new && git push origin --delete feature/old && git branch -u origin/feature/new' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 16. .gitignore 忽略规则
  // ─────────────────────────────────────────────────────────────
  "oz2oRAhaEQb0Fm3aRJQG8": {
    mentalModel: '.gitignore 是给 Git 的「忽略清单」——列出不需要追踪的文件模式（如编译产物、依赖目录、系统文件），让 git status 只显示有意义的变更。',
    handsOn: [
      { title: '创建一个典型的 .gitignore', cmd: 'cat > .gitignore << \'EOF\'\nnode_modules/\ndist/\n.env\n.DS_Store\n*.log\n*.tmp\nEOF', output: '（无输出，文件创建成功）', explain: 'node_modules/ 忽略整个目录；.env 忽略环境变量文件；*.log 忽略所有 .log 文件；.DS_Store 忽略 macOS 系统文件。每行一个模式，支持 glob 通配符。' },
      { title: '常用 .gitignore 模式', cmd: 'cat > .gitignore << \'EOF\'\n# 目录\nnode_modules/\nbuild/\n\n# 具体文件\n.env\n.env.local\n\n# 通配符\n*.log\n*.tmp\n*.min.js\n\n# 否定规则（不忽略）\n!important.log\n\n# 子目录中\n/logs/*.log\nEOF', output: '（无输出，文件创建成功）', explain: '# 是注释。! 前缀表示否定（即使被其他规则匹配也不忽略）。logs/*.log 只忽略 logs 目录下的 .log 文件，不影响其他目录。' },
      { title: '取消追踪已被 .gitignore 忽略的文件', cmd: 'git rm --cached -r node_modules/', output: "rm 'node_modules/package-a/index.js'\nrm 'node_modules/package-a/package.json'\n... (列出所有被移除的文件)", explain: '--cached 只从 Git 索引中移除（不删除磁盘文件）。文件已在仓库历史中的不会因为 .gitignore 自动消失，需要手动 rm --cached。之后 commit 这个变更。' },
      { title: '检查某个文件为什么被忽略', cmd: 'git check-ignore -v .env', output: '.gitignore:3:.env', explain: '-v (verbose) 显示匹配的规则和行号。输出说明 .env 被 .gitignore 第 3 行的 .env 规则忽略。调试 .gitignore 规则时非常有用。' },
    ],
    diagnosis: [
      { symptom: '.gitignore 写了 node_modules/ 但 git status 还是显示 node_modules 里的文件', cause: 'node_modules 在 .gitignore 创建之前就已经被 Git 追踪了。.gitignore 只影响 untracked 文件。', fix: '先取消追踪：git rm --cached -r node_modules/，然后 commit。之后 .gitignore 规则就能生效了。' },
      { symptom: '想忽略一个文件但不想把它加到 .gitignore 里（因为是团队共享的仓库）', cause: '.gitignore 会被提交到仓库，影响所有人。有些文件只想在你本地忽略。', fix: '把规则加到 .git/info/exclude 文件里（格式和 .gitignore 一样），这个文件不会被提交。或者用 git update-index --assume-unchanged <file> 让 Git 假装文件没改。' },
    ],
    exercises: [
      { level: '基础', task: '为一个 Node.js 项目创建 .gitignore，忽略 node_modules、.env、dist 和日志文件', hint: '每行一个模式', answer: 'printf "node_modules/\\n.env\\ndist/\\n*.log\\n" > .gitignore' },
      { level: '进阶', task: '忽略所有 .log 文件但保留 important.log', hint: '! 否定规则', answer: 'printf "*.log\\n!important.log\\n" > .gitignore  # * 匹配所有 .log，!important.log 排除特定的' },
      { level: '挑战', task: '已经追踪了 dist/ 目录，现在要把它从仓库移除并加入 .gitignore', hint: 'git rm --cached + .gitignore + commit', answer: 'echo "dist/" >> .gitignore && git rm --cached -r dist/ && git add .gitignore && git commit -m "chore: remove dist from tracking and add to gitignore"' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 17. 删除分支 — Deleting Branch
  // ─────────────────────────────────────────────────────────────
  "1uDenoQ6zu7CT69FR2iQB": {
    mentalModel: '删除分支只是移除一个指向 commit 的指针——commit 本身还在（被其他分支或 reflog 引用），只是你不再用那个名字访问它们了。',
    handsOn: [
      { title: '删除已合并的本地分支', cmd: 'git branch -d feature/login', output: 'Deleted branch feature/login (was abc1234).', explain: '-d (delete) 安全删除：如果分支有未合并的 commit，Git 会拒绝删除并警告你。输出显示被删分支指向的 commit hash。' },
      { title: '强制删除未合并的分支', cmd: 'git branch -D feature/experiment', output: 'Deleted branch feature/experiment (was def5678).', explain: '-D 是 --delete --force 的缩写，无视未合并的 commit 直接删除。注意：删除后那些 commit 只能通过 reflog 找回（git reflog），30 天后可能被清理。' },
      { title: '删除远程分支', cmd: 'git push origin --delete feature/login', output: 'To https://github.com/user/repo.git\n - [deleted]         feature/login', explain: '--delete 告诉远程仓库删除指定分支。远程的 commit 不会立即被清理，但分支指针没了。其他人 git fetch --prune 后会看到这个分支消失。' },
      { title: '清理本地的远程分支引用', cmd: 'git fetch --prune origin', output: 'From https://github.com/user/repo\n - [deleted]         (none)     -> origin/feature/login\n - [deleted]         (none)     -> origin/feature/old-stuff', explain: '--prune 删除那些在远程已经不存在的分支的本地引用。别人删了远程分支后，你本地的 remotes/origin/feature/login 还在，prune 一下清理干净。' },
    ],
    diagnosis: [
      { symptom: 'git branch -d 报 "The branch is not fully merged"', cause: '分支上有未合并到其他分支的 commit。Git 用 -d 保护你，防止误删有用代码。', fix: '确认这些 commit 确实不需要了，用 git branch -D 强制删除。或者先 merge 到 main 再用 -d 删除。如果想看哪些 commit 没合并：git log main..feature/login。' },
      { symptom: '删除了远程分支但本地 git branch -a 还能看到', cause: '本地缓存的远程分支引用没有自动清理。', fix: 'git fetch --prune origin 或 git remote prune origin。也可以在 .gitconfig 里设置 fetch.prune=true 让每次 fetch 自动 prune。' },
    ],
    exercises: [
      { level: '基础', task: '创建两个分支，合并一个到 main，分别用 -d 和 -D 删除', hint: 'git branch -d vs git branch -D', answer: 'git branch feature-a && git branch feature-b && git merge feature-a && git branch -d feature-a && git branch -D feature-b' },
      { level: '进阶', task: '删除远程分支后，让团队所有人的本地引用也清理干净', hint: 'git fetch --prune', answer: 'git push origin --delete feature/login → 通知团队 → 每人执行 git fetch --prune origin' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 18. 查看提交历史 — Viewing Commit History
  // ─────────────────────────────────────────────────────────────
  "IfUm5D_zNaUKMd4HX4Fi4": {
    mentalModel: 'git log 是 Git 的「历史档案室」——每个 commit 是一条记录，包含谁做的、什么时候、改了什么。学会不同的查看方式，能快速找到你需要的历史信息。',
    handsOn: [
      { title: '基本日志', cmd: 'git log', output: 'commit abc1234567890abcdef1234567890abcdef123456\nAuthor: Your Name <you@email.com>\nDate:   Mon Jan 15 10:30:00 2024 +0800\n\n    Add user login feature\n\ncommit def5678901234567890abcdef1234567890abcdef\nAuthor: Other Dev <other@email.com>\nDate:   Sun Jan 14 18:00:00 2024 +0800\n\n    Fix database connection pool', explain: '默认显示完整 commit hash、作者、日期、消息。按 q 退出（用 less 翻页）。最新的 commit 在最上面。' },
      { title: '精简日志（推荐日常使用）', cmd: 'git log --oneline --graph -20', output: '* abc1234 (HEAD -> main) Add user login\n* def5678 Fix database pool\n* ghi9012 Update dependencies\n| * jkl3456 (feature/auth) Add OAuth\n| * mno7890 Add JWT token\n|/\n* pqr1234 Initial setup', explain: '--oneline 每个 commit 一行（短 hash + 消息）。--graph 用 ASCII 画出分支合并图。-20 只显示最近 20 条。这个组合是查看历史的最常用方式。' },
      { title: '查看某个文件的修改历史', cmd: 'git log --oneline -p -- src/app.ts', output: '* abc1234 Add user login\n  diff --git a/src/app.ts b/src/app.ts\n  @@ -1,3 +1,5 @@\n  +import { login } from "./auth";\n  +\n   function main() {', explain: '-- 后面跟文件路径，只看涉及该文件的 commit。-p (patch) 显示每个 commit 的具体代码差异。追查某个文件为什么长成现在这样时非常有用。' },
      { title: '按时间和作者筛选', cmd: 'git log --oneline --author="Your" --since="2024-01-01" --until="2024-01-31"', output: '* abc1234 Add user login\n* def5678 Fix database pool\n* ghi9012 Update dependencies', explain: '--author 按作者名匹配（支持正则）。--since/--until 按时间范围。--grep 按 commit message 关键词搜索。可以组合使用。' },
      { title: '查看某个 commit 的详细信息', cmd: 'git show abc1234', output: 'commit abc1234567890abcdef1234567890abcdef123456\nAuthor: Your Name <you@email.com>\nDate:   Mon Jan 15 10:30:00 2024 +0800\n\n    Add user login feature\n\ndiff --git a/src/login.ts b/src/login.ts\nnew file mode 100644\n--- /dev/null\n+++ b/src/login.ts\n@@ -0,0 +1,10 @@\n+function login() {', explain: 'git show <hash> 显示指定 commit 的完整信息 + diff。比 git log -p 更精准，因为你指定了具体哪个 commit。' },
    ],
    diagnosis: [
      { symptom: 'git log 输出太多，找不到想要的 commit', cause: '项目历史很长，默认显示所有 commit。', fix: '用筛选：--oneline 精简、-20 限制数量、--author 按作者、--since 按时间、--grep "keyword" 按消息关键词、-- path/to/file 按文件。' },
      { symptom: '想找到「是谁删了这段代码」', cause: '代码被删了但不知道在哪个 commit、谁干的。', fix: 'git log -p -S "被删的代码片段" -- 文件路径。-S 搜索增加或删除了指定字符串的 commit。也可以用 git blame 查看文件每行的最后修改者。' },
    ],
    exercises: [
      { level: '基础', task: '用 --oneline 查看最近 5 条 commit 记录', hint: 'git log --oneline -5', answer: 'git log --oneline -5' },
      { level: '进阶', task: '找到某文件的所有修改记录，并显示每个 commit 的 diff', hint: 'git log -p -- <path>', answer: 'git log --oneline -p -- src/main.ts' },
      { level: '挑战', task: '用 git log 找出项目中 commit 最多的作者', hint: '--format 自定义输出 + shell 统计', answer: 'git log --format="%aN" | sort | uniq -c | sort -rn | head -5  # %aN 是作者名，uniq -c 计数，sort -rn 按数量降序' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 19. Git 远程仓库 — Git Remotes
  // ─────────────────────────────────────────────────────────────
  "aWx9WHUrgofcTr8B-fQYe": {
    mentalModel: 'Remote 是本地仓库和远程服务器之间的「同步通道」——fetch 只下载不合并，pull 下载并合并，push 上传你的 commit。',
    handsOn: [
      { title: 'fetch：只下载不合并', cmd: 'git fetch origin', output: 'From https://github.com/user/repo\n   abc1234..def5678  main       -> origin/main\n * [new branch]      feature/x  -> origin/feature/x', explain: 'fetch 从远程下载所有新 commit 和分支，但不修改你的工作区。远程的 main 更新到了 origin/main（一个本地引用），你可以用 git log origin/main 查看远程有什么新东西，再决定是否合并。' },
      { title: '对比本地和远程的差异', cmd: 'git log HEAD..origin/main --oneline', output: '* def5678 Fix critical bug\n* ghi9012 Add new feature', explain: '显示远程有但本地没有的 commit。HEAD..origin/main 表示「从我的 HEAD 到 origin/main 之间的差异」。反过来 origin/main..HEAD 显示我有但远程没有的。' },
      { title: 'push --force-with-lease：安全的强制推送', cmd: 'git push --force-with-lease origin feature/login', output: 'To https://github.com/user/repo.git\n + abc1234...def5678  feature/login -> feature/login (forced update)', explain: '--force-with-lease 比 --force 安全：如果远程有你不知道的新 commit，会拒绝 push 并警告你。而 --force 会无条件覆盖，可能丢失别人的工作。永远用 --force-with-lease 代替 --force。' },
      { title: '查看所有远程分支的追踪状态', cmd: 'git branch -vv', output: '* main                 abc1234 [origin/main] Latest commit\n  feature/login        def5678 [origin/feature/login: gone] Add login\n  local-only           ghi9012 Some local work', explain: '-vv 显示每个本地分支的追踪关系和状态。[origin/main] 表示追踪远程 main。: gone 表示远程分支已被删除。没有方括号的表示没有追踪远程分支。' },
    ],
    diagnosis: [
      { symptom: 'git push 报 "non-fast-forward" 被拒绝', cause: '远程有你本地没有的 commit（可能是你之前 rebase 了，或者别人推了新 commit）。', fix: '先 git pull --rebase origin <branch> 同步远程更新，再 push。如果确认远程的 commit 不需要，用 git push --force-with-lease。' },
      { symptom: 'git fetch 后发现 origin/main 比 main 领先很多', cause: '很久没拉取远程更新了。', fix: 'git merge origin/main 合并远程更新，或 git rebase origin/main 把本地 commit 变基到远程最新之上。如果本地没有未推送的 commit，会自动 fast-forward。' },
    ],
    exercises: [
      { level: '基础', task: 'fetch 远程更新，查看远程比你多哪些 commit', hint: 'git fetch + git log', answer: 'git fetch origin && git log HEAD..origin/main --oneline' },
      { level: '进阶', task: '解释 git fetch 和 git pull 的区别', hint: 'fetch 只下载，pull 还合并', answer: 'git fetch 只从远程下载新数据到本地（更新 origin/* 引用），不修改工作区。git pull = git fetch + git merge，下载后自动合并到当前分支。fetch 更安全，因为你可以先检查再决定是否合并。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 20. GitHub 基础 — GitHub Essentials
  // ─────────────────────────────────────────────────────────────
  "NeSvgS2yA5x8qbcJHrV__": {
    mentalModel: 'GitHub 是 Git 仓库的「云端托管 + 协作平台」——它把 Git 的能力加上了网页界面、Pull Request 代码审查、Issue 跟踪、CI/CD 等团队协作功能。',
    handsOn: [
      { title: '创建本地仓库并推送到 GitHub', cmd: 'mkdir my-project && cd my-project && git init && echo "# My Project" > README.md && git add . && git commit -m "Initial commit" && git remote add origin https://github.com/user/my-project.git && git push -u origin main', output: "Enumerating objects: 3, done.\nTo https://github.com/user/my-project.git\n * [new branch]      main -> main\nbranch 'main' set up to track 'origin/main'.", explain: '完整的从零到 GitHub 流程：init → 首次 commit → 添加远程 → 推送并设追踪。之后在 GitHub 网页上就能看到你的代码了。' },
      { title: '用 GitHub CLI 创建仓库', cmd: 'gh repo create my-project --public --clone', output: '✓ Created repository user/my-project on GitHub\n  https://github.com/user/my-project\n✓ Cloned repository', explain: 'gh 是 GitHub 官方命令行工具。repo create 一步完成：在 GitHub 上创建仓库 + 克隆到本地。--public 公开仓库，--private 私有。省去了网页创建 + git remote add 的步骤。' },
      { title: '配置 GitHub 认证（SSH 密钥）', cmd: 'ssh-keygen -t ed25519 -C "you@email.com" && cat ~/.ssh/id_ed25519.pub', output: 'Generating public/private ed25519 key pair.\nEnter file in which to save the key: (press enter)\nEnter passphrase: (optional)\nssh-ed25519 AAAAC3Nza... you@email.com', explain: '生成 SSH 密钥对后，把公钥添加到 GitHub Settings → SSH and GPG keys。之后 git push/pull 用 SSH 地址就不需要输密码了。推荐设 passphrase 增加安全性。' },
      { title: 'Fork 并贡献开源项目', cmd: 'gh repo fork expressjs/express --clone && cd express && git remote -v', output: '✓ Created fork user/express\n✓ Cloned repository\norigin  https://github.com/user/express.git (fetch)\nupstream  https://github.com/expressjs/express.git (fetch)', explain: 'fork 创建一份你自己的副本。gh 自动设好 origin（你的 fork）和 upstream（原始仓库）。改代码 → push 到你的 fork → 在 GitHub 上创建 Pull Request 到 upstream。' },
    ],
    diagnosis: [
      { symptom: 'git push 要求输入用户名密码但总是认证失败', cause: 'GitHub 2021 年起不再支持密码认证，需要用 Personal Access Token（PAT）或 SSH。', fix: '方式1：用 SSH 密钥（推荐）。方式2：Settings → Developer settings → Personal access tokens 生成 token，push 时密码栏输入 token。方式3：安装 gh auth login 自动配置。' },
      { symptom: '克隆的仓库 push 时权限被拒绝', cause: '你没有该仓库的写权限。对于别人的仓库，你需要先 fork。', fix: '用 gh repo fork 创建你自己的 fork，推送到 fork，然后通过 Pull Request 提交到原始仓库。' },
    ],
    exercises: [
      { level: '基础', task: '在 GitHub 上创建一个公开仓库并克隆到本地', hint: 'gh repo create 或网页创建 + git clone', answer: 'gh repo create test-repo --public --clone  # 或网页创建后 git clone https://github.com/user/test-repo.git' },
      { level: '进阶', task: 'Fork 一个开源项目，做一个小修改，提交 Pull Request', hint: 'gh repo fork + 修改 + push + gh pr create', answer: 'gh repo fork owner/repo --clone → cd repo → 修改代码 → git add + git commit → git push origin main → gh pr create --title "fix: ..." --body "..."' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 21. Fast-Forward 与 Non-FF 对比
  // ─────────────────────────────────────────────────────────────
  "agtPWS8j6i6wQPk10cy8E": {
    mentalModel: 'Fast-Forward 是「直接移动指针」——当你的分支没有分叉时，Git 直接把指针往前移，不创建合并 commit。Non-FF 是「创建合并节点」——当两条线分叉后又合到一起时，Git 创建一个新的 commit 把两条线连起来。',
    handsOn: [
      { title: 'Fast-Forward 合并（无分叉）', cmd: 'git checkout main && git merge feature/login', output: 'Updating abc1234..def5678\nFast-forward\n src/login.ts | 20 ++++++++++++++++++++\n 1 file changed, 20 insertions(+)', explain: 'main 和 feature/login 没有分叉（main 在 feature 创建后没有新 commit），Git 直接把 main 指针移到 feature/login 的位置。没有创建额外的合并 commit。历史是线性的。' },
      { title: 'Non-Fast-Forward 合并（有分叉）', cmd: 'git checkout main && git merge feature/login', output: 'Merge made by the \'ort\' strategy.\n src/login.ts  | 20 ++++++++++++++++++++\n src/main.ts   |  2 +-\n 2 files changed, 21 insertions(+), 1 deletion(-)', explain: 'main 和 feature/login 都有各自的新 commit（分叉了），Git 创建一个 merge commit 把两条线合并。这个 merge commit 有两个 parent。' },
      { title: '强制使用 Non-FF（保留分支记录）', cmd: 'git merge --no-ff feature/login', output: 'Merge made by the \'ort\' strategy.\n src/login.ts | 20 ++++++++++++++++++++\n 1 file changed, 20 insertions(+)', explain: '--no-ff 即使可以 fast-forward 也强制创建 merge commit。好处是在历史中能清楚看到「这些 commit 是一个功能的一组」。很多团队用这个策略保持历史清晰。' },
      { title: '强制要求 Fast-Forward', cmd: 'git merge --ff-only feature/login', output: 'Updating abc1234..def5678\nFast-forward', explain: '--ff-only 只允许 fast-forward 合并。如果分支有分叉（需要 merge commit），Git 会拒绝合并并报错。适合作为安全策略：确保只在无分叉时合并。' },
    ],
    diagnosis: [
      { symptom: '合并后历史里看不到 merge commit（分支线消失了）', cause: '发生了 fast-forward 合并，Git 直接移动了 main 指针，没有创建合并节点。', fix: '如果需要保留分支信息，用 git merge --no-ff feature/login。这在 main 分支上推荐——能清楚看到每个功能是从哪个分支合并来的。' },
      { symptom: 'git merge --ff-only 报 "Not possible to fast-forward"', cause: '两个分支有分叉，无法 fast-forward。', fix: '要么用普通 merge（创建 merge commit），要么先 rebase 让历史线性化再 merge。也可以先检查 git log main..feature 看看分叉情况。' },
    ],
    exercises: [
      { level: '基础', task: '画一个 Fast-Forward 合并和 Non-FF 合并的示意图（ASCII）', hint: '用 A-B-C 表示 commit', answer: 'FF: main: A-B-C---D  feature: A-B-C-D → merge 后 main: A-B-C-D（指针直接移到 D）\nNon-FF: main: A-B---E  feature: A-B-C-D → merge 后 main: A-B---E-M（M 是 merge commit，parent 是 E 和 D）' },
      { level: '进阶', task: '创建一个场景分别触发 FF 和 Non-FF 合并', hint: 'FF = 主分支不动；Non-FF = 两个分支都有新 commit', answer: 'FF：main 在创建 feature 后不做任何修改 → git merge feature 触发 FF。\nNon-FF：main 和 feature 各自做不同的 commit → git merge feature 触发 Non-FF。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 22. Merging 基础 — Merging Basics
  // ─────────────────────────────────────────────────────────────
  "sNuy6NMjLOEkJlqdEjFPq": {
    mentalModel: 'git merge 是把两条分支「合二为一」——Git 找到两条线的共同祖先，然后自动合并各自的变化。遇到同一处都改了的情况，需要人手动解决冲突。',
    handsOn: [
      { title: '基本合并操作', cmd: 'git checkout main && git merge feature/login', output: 'Merge made by the \'ort\' strategy.\n src/login.ts | 20 ++++++++++++++++++++\n 1 file changed, 20 insertions(+)', explain: '切到目标分支（main），把 feature/login 合并进来。Git 找到两个分支的共同祖先，计算差异，自动合并。如果改的是不同文件/不同区域，Git 自动解决。' },
      { title: '合并冲突的样子', cmd: 'git merge feature/auth', output: 'Auto-merging src/config.ts\nCONFLICT (content): Merge conflict in src/config.ts\nAutomatic merge failed; fix conflicts and then commit the result.', explain: '当两个分支修改了同一文件的同一区域时，Git 不知道保留哪个，标记为冲突。你需要手动打开文件解决。' },
      { title: '冲突文件的内容', cmd: 'cat src/config.ts', output: '<<<<<<< HEAD\nconst PORT = 3000;\n=======\nconst PORT = 8080;\n>>>>>>> feature/auth', explain: '<<<<<<< HEAD 到 ======= 是当前分支（main）的内容。======= 到 >>>>>>> feature/auth 是要合并进来的内容。你需要手动选择保留哪个（或组合两者），删除标记行。' },
      { title: '解决冲突的完整流程', cmd: 'vim src/config.ts   # 编辑文件，删除冲突标记，保留正确的代码\ngit add src/config.ts\ngit commit -m "Merge feature/auth: resolve port conflict"', output: '[main abc1234] Merge feature/auth: resolve port conflict', explain: '1) 编辑冲突文件，删除 <<<<<<< ======= >>>>>>> 标记，保留正确代码。2) git add 标记为已解决。3) git commit 完成合并（Git 会自动生成 merge commit 消息）。' },
      { title: '放弃合并', cmd: 'git merge --abort', output: '（无输出，工作区恢复到合并前）', explain: '如果合并搞砸了（冲突太多或方向不对），--abort 完全撤销这次合并操作，工作区回到 merge 之前的状态。只在 merge 还没 commit 时可用。' },
    ],
    diagnosis: [
      { symptom: '合并冲突太多，手动解决太痛苦', cause: '两个分支改了太多相同的地方，或者分支存在时间太长积累了大量差异。', fix: '策略1：git merge --abort 放弃，改用 rebase 逐 commit 解决冲突（每次冲突更少）。策略2：用可视化工具（VS Code、Beyond Compare）解决冲突。策略3：经常从 main merge 到 feature 分支，避免积累太多差异。' },
      { symptom: '合并后发现引入了 bug，想撤销整个 merge', cause: '合并的代码有问题，需要回退。', fix: '如果还没 push：git reset --hard HEAD~1 撤销 merge commit。如果已 push：git revert -m 1 <merge-commit-hash> 创建一个「反向 merge」来撤销。-m 1 表示保留第一个 parent（合并前的 main）。' },
    ],
    exercises: [
      { level: '基础', task: '创建两个分支，各自修改不同文件，合并到 main（无冲突）', hint: 'git checkout -b + 修改不同文件 + git merge', answer: 'git checkout -b feat-a → echo "a" > a.txt → git add + commit → git checkout main → git checkout -b feat-b → echo "b" > b.txt → git add + commit → git checkout main → git merge feat-a → git merge feat-b' },
      { level: '进阶', task: '制造一个合并冲突并手动解决', hint: '两个分支修改同一文件的同一行', answer: '两个分支各修改 file.txt 第 1 行 → git merge 触发冲突 → 编辑文件选择保留内容 → git add file.txt → git commit' },
      { level: '挑战', task: '合并后发现有 bug，用 git revert 撤销一个已推送的 merge commit', hint: 'git revert -m 1', answer: 'git log 找到 merge commit hash → git revert -m 1 <hash> → git push  # -m 1 保留 main 分支的内容' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 23. 创建 GitHub Account
  // ─────────────────────────────────────────────────────────────
  "i7fIIHcBEk473te8bniJ5": {
    mentalModel: 'GitHub 账号是你在开源世界的「身份证」——它关联你的代码仓库、贡献记录、协作身份。设置好认证方式是顺畅使用 Git 远程功能的前提。',
    sections: [
      { title: '注册和基本设置', content: '1. 去 github.com 注册（邮箱 + 用户名 + 密码）\n2. 验证邮箱\n3. 设置个人主页：\n   - 头像（真实照片或标识性头像，方便协作者识别）\n   - Bio（简短介绍你的技术栈和方向）\n   - 链接（个人网站、博客等）\n4. 用户名选择建议：\n   - 简短好记（tu-dev、zhangsan 比 xX_coder_2024_Xx 好）\n   - 尽量和其他平台一致（Twitter、Stack Overflow）\n   - 避免频繁更改（改用户名会导致旧链接失效）' },
      { title: '认证方式配置', content: 'GitHub 支持三种认证方式：\n\n1. SSH 密钥（推荐）\n   - 生成：ssh-keygen -t ed25519 -C "email"\n   - 添加公钥到 GitHub Settings → SSH Keys\n   - 使用 ssh:// 地址克隆：git@github.com:user/repo.git\n   - 优势：push/pull 不用输密码\n\n2. Personal Access Token (PAT)\n   - Settings → Developer Settings → Personal Access Tokens\n   - 生成 fine-grained token，设置权限范围和过期时间\n   - push 时在密码栏输入 token\n   - 可以配合 git credential helper 缓存\n\n3. GitHub CLI（gh auth login）\n   - 最简单：gh auth login 交互式引导完成认证\n   - 自动配置 git credential helper' },
      { title: 'GitHub 免费版 vs Pro', content: '免费版（够大多数个人开发者用）：\n• 无限公开仓库 + 无限私有仓库\n• 协作者无限制\n• GitHub Actions 每月 2000 分钟\n• GitHub Pages 免费托管\n\nPro（$4/月，专业开发者推荐）：\n• 3000 Actions 分钟/月\n• 更大的存储和带宽\n• Protected branches 高级规则\n• GitHub Copilot 折扣\n\n团队版：$4/用户/月，增加团队管理功能' },
    ],
    diagnosis: [
      { symptom: '注册 GitHub 后 git push 报认证失败', cause: '注册了账号但没配置本地 Git 的认证方式（SSH 密钥或 PAT）。', fix: '方式1：ssh-keygen 生成密钥 + 添加到 GitHub SSH Keys + git remote set-url origin git@github.com:user/repo.git。方式2：gh auth login 一键配置。' },
      { symptom: 'GitHub 的 Personal Access Token 过期了', cause: 'PAT 设置了过期时间（推荐设置，更安全）。', fix: '重新生成新 token：Settings → Developer Settings → Personal Access Tokens → Generate new token。更新本地 credential helper 中缓存的旧 token。' },
    ],
    exercises: [
      { level: '基础', task: '注册 GitHub 账号并配置 SSH 密钥认证', hint: 'ssh-keygen + 添加公钥', answer: '注册 github.com → ssh-keygen -t ed25519 -C "email" → cat ~/.ssh/id_ed25519.pub → 复制到 GitHub SSH Keys → ssh -T git@github.com 验证' },
      { level: '进阶', task: '配置 git credential helper 缓存 HTTPS 认证信息', hint: 'git config credential.helper', answer: 'git config --global credential.helper store  # 永久保存（明文，注意安全）\n或 git config --global credential.helper "cache --timeout=86400"  # 缓存 24 小时' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 24. Rebase
  // ─────────────────────────────────────────────────────────────
  "99FVJ3Zs8n6lr8L95mG6g": {
    mentalModel: 'git rebase 是把你的分支「拔出来，重新插到另一个位置」——它把你的 commit 逐个搬到目标分支的最新位置后面，结果是线性的历史。',
    handsOn: [
      { title: '基本 rebase 操作', cmd: 'git checkout feature/login && git rebase main', output: 'First, rewinding head to replay your work on top of it...\nApplying: Add login form (1/3)\nApplying: Add validation (2/3)\nApplying: Add tests (3/3)', explain: '把 feature/login 分支的 3 个 commit 搬到 main 最新 commit 后面。结果：历史变成直线，好像你是基于最新的 main 开发的。每个 commit 会生成新的 hash。' },
      { title: 'Rebase 时遇到冲突', cmd: 'git rebase main', output: 'Applying: Add login form (1/3)\nUsing index info to reconstruct a base tree...\nCONFLICT (content): Merge conflict in src/app.ts\nerror: Failed to merge in the changes.', explain: 'Rebase 逐个应用你的 commit，可能在某个 commit 上遇到冲突。和 merge 冲突解决方式一样：编辑文件 → git add → git rebase --continue。或 git rebase --abort 放弃。' },
      { title: '解决 rebase 冲突后继续', cmd: 'vim src/app.ts && git add src/app.ts && git rebase --continue', output: 'Applying: Add login form (1/3)\nApplying: Add validation (2/3)\nApplying: Add tests (3/3)', explain: '解决冲突后 add 文件，然后 --continue 让 rebase 继续应用下一个 commit。注意：不要在这里 commit，Git 会自动 commit。' },
      { title: '交互式 rebase（修改历史）', cmd: 'git rebase -i HEAD~3', output: 'pick abc1234 Add login form\npick def5678 Fix typo\npick ghi9012 Add tests\n\n# Commands:\n# p, pick = use commit\n# r, reword = use commit, but edit message\n# s, squash = meld into previous commit\n# d, drop = remove commit', explain: '-i (interactive) 打开编辑器让你修改 commit 历史：pick 保留、reword 改消息、squash 合并到前一个、drop 删除。这是整理提交历史的强大工具。' },
      { title: 'Golden Rule of Rebase', cmd: '# 绝对不要在公开的分支上 rebase！\n# 错误示范：\ngit checkout main && git rebase feature/login  # 如果 main 是共享分支，不要这样做！', output: '（这是一个反模式警告，不执行）', explain: 'Rebase 会改变 commit hash。如果你 rebase 了已经推送到远程的分支，别人的本地历史会和远程不一致，导致混乱。只在本地还没 push 的分支上 rebase。' },
    ],
    diagnosis: [
      { symptom: 'rebase 过程中搞砸了，想回到 rebase 之前', cause: '解决冲突出错或者选错了操作。', fix: 'git rebase --abort 回到 rebase 前的状态。如果已经 abort 不了，用 git reflog 找到 rebase 前的 commit hash，然后 git reset --hard <hash>。' },
      { symptom: 'rebase 后 push 被拒绝', cause: 'rebase 改变了 commit hash，远程认为你的历史分叉了。', fix: 'git push --force-with-lease origin feature/login。因为 rebase 改变了历史，必须 force push。--force-with-lease 比 --force 安全（防止覆盖别人的新 commit）。' },
      { symptom: 'rebase 后 commit 变多了或少了', cause: '交互式 rebase 时选错了操作（如把 squash 选成了 pick）。', fix: 'git reflog 找到 rebase 前的状态，git reset --hard <hash> 回退。重新执行 rebase -i，这次仔细检查每个 commit 前的命令。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 feature 分支做几个 commit，然后 rebase 到 main 上', hint: 'git rebase main', answer: 'git checkout -b feature → 做几个 commit → git rebase main → git log --oneline --graph 验证线性历史' },
      { level: '进阶', task: '用交互式 rebase 把最近 3 个 commit 的消息改得更规范', hint: 'git rebase -i + reword', answer: 'git rebase -i HEAD~3 → 把 3 个 pick 改成 reword → 逐个修改 commit message → git log 验证' },
      { level: '挑战', task: '用 rebase 整理一个「混乱的 feature 分支」：squash 修复 commit、reword 不规范的消息、drop 调试 commit', hint: 'git rebase -i 配合 squash/reword/drop', answer: 'git rebase -i main → 把 fix typo 改为 squash（合并到前一个）→ 把 wip 改为 drop（删除）→ 把 vague msg 改为 reword（改消息）→ 保存并逐个处理' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 25. Squash — 合并提交
  // ─────────────────────────────────────────────────────────────
  "Z-srOhYFGVEKDexlJ6cjt": {
    mentalModel: 'Squash 是把多个小 commit「压成一个」——开发过程中你可能有很多 fix typo、调试用的 commit，squash 把它们合并成一个干净的提交。',
    handsOn: [
      { title: '交互式 rebase squash', cmd: 'git rebase -i HEAD~4', output: 'pick abc1234 Add login form\nsquash def5678 Fix login typo\nsquash ghi9012 Add login validation\nsquash jkl3456 Remove debug log\n\n# 保存后 Git 打开编辑器让你写合并后的 commit message', explain: '第一个 commit 保持 pick，后面三个改为 squash（或简写 s）。Git 会把后三个 commit 合并到第一个里，然后让你写一个新的 commit message。' },
      { title: 'squash 后的 commit message 编辑', cmd: 'git rebase -i HEAD~4  # 设置 squash 后', output: '# This is a combination of 4 commits.\n# The first commit\'s message is:\nAdd login form\n\n# The 2nd commit\'s message is:\nFix login typo\n\n# The 3rd commit\'s message is:\nAdd login validation\n\n# 编辑为：\nfeat: Add user login with form validation', explain: 'Git 默认把所有被 squash 的 commit message 列出来。你应该删掉这些，写一个干净的总结消息。保存退出后，4 个 commit 变成 1 个。' },
      { title: 'merge --squash：合并时压扁', cmd: 'git checkout main && git merge --squash feature/login', output: 'Squash merge -- not committing; update the commit message and commit.\n src/login.ts | 50 ++++++++++++++++++++++++++++++++++++++\n 1 file changed, 50 insertions(+)', explain: '--squash 把 feature/login 的所有 commit 压扁成暂存区的变更，但不自动 commit。你需要手动 git commit -m "..." 创建一个干净的 commit。结果是 main 上只有一个 commit，看不到 feature 分支的历史。' },
      { title: 'git reset 方式 squash', cmd: 'git reset --soft HEAD~3 && git commit -m "feat: Add user login"', output: '[feature/login abc1234] feat: Add user login\n 3 files changed, 50 insertions(+)', explain: '--soft 回退 3 个 commit 但保留暂存区内容。然后重新 commit 成一个。这是最简单的 squash 方式，适合「我就是想把最近几个 commit 合成一个」。' },
    ],
    diagnosis: [
      { symptom: 'squash 后发现丢了一个 commit 的内容', cause: '交互式 rebase 时不小心把某个 commit 设成了 drop 而不是 squash。', fix: 'git reflog 找到 squash 前的 commit hash，git reset --hard <hash> 恢复。重新 rebase，这次确认每个 commit 是 pick 或 squash 而不是 drop。' },
      { symptom: 'squash 后 push 报 rejected', cause: 'squash 改变了 commit 历史（多个 commit 变成一个），和远程的历史分叉了。', fix: 'git push --force-with-lease origin feature/login。Squash 本质上改写了历史，force push 是必须的。确保只有你一个人在用这个分支。' },
    ],
    exercises: [
      { level: '基础', task: '做 3 个 commit，然后用 rebase -i 把它们 squash 成一个', hint: 'git rebase -i HEAD~3 + squash', answer: '做 3 个 commit → git rebase -i HEAD~3 → 第 1 个 pick，后 2 个 squash → 编辑合并消息 → git log 验证只有 1 个 commit' },
      { level: '进阶', task: '用 merge --squash 合并一个 feature 分支，让 main 上只有一个干净的 commit', hint: 'git merge --squash + git commit', answer: 'git checkout main → git merge --squash feature/login → git commit -m "feat: Add user login" → git log 验证只有一个 commit' },
      { level: '挑战', task: '解释 squash merge 和普通 merge 在历史表现上的区别，以及什么时候该用哪种', hint: '想想 commit 图', answer: '普通 merge 保留完整历史（feature 分支的所有 commit + 一个 merge commit），适合需要追溯每个小步骤的场景。Squash merge 只留一个 commit，适合小功能或修复，保持主分支历史干净。团队约定：大功能用 merge，小改动用 squash。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 26. GitHub 接口 — GitHub Interface
  // ─────────────────────────────────────────────────────────────
  "qZFtRABvlBbVvsy6T00J2": {
    mentalModel: 'GitHub 的网页界面是你管理代码仓库的「控制台」——在这里创建 PR、Review 代码、管理 Issue、查看 CI 结果、配置仓库设置。',
    sections: [
      { title: '核心页面导航', content: '1. 仓库主页（Code tab）\n   - 文件浏览器：点击文件直接查看代码\n   - README 渲染：自动渲染 Markdown 格式的 README\n   - Clone/Download 按钮：获取仓库地址\n   - Branch selector：切换分支\n\n2. Pull Requests tab\n   - 所有 PR 列表（Open / Closed）\n   - 创建新 PR、Review 代码、合并\n\n3. Issues tab\n   - Bug 报告和功能请求的跟踪\n   - 支持标签（Labels）、里程碑（Milestones）、指派（Assignees）\n\n4. Actions tab\n   - CI/CD 流水线（GitHub Actions）的运行状态\n   - 查看构建日志、重新运行失败的 Job\n\n5. Settings tab\n   - 仓库设置：分支保护规则、协作者管理、Webhooks' },
      { title: 'Pull Request 界面详解', content: 'PR 页面结构：\n\n1. Conversation：讨论区\n   - PR 描述（创建时填写）\n   - 评论和讨论\n   - CI 状态（绿色 ✓ 或红色 ✗）\n   - Review 状态\n\n2. Commits：列出 PR 包含的所有 commit\n\n3. Files changed：代码差异\n   - 逐文件查看 diff\n   - 在任意行添加 Review 评论\n   - 支持 inline comment 讨论具体代码\n\n4. 右侧面板：\n   - Reviewers：指定代码审查者\n   - Assignees：负责人\n   - Labels：标签（如 bug、feature、urgent）\n   - Projects：关联项目看板\n   - Milestone：关联里程碑' },
      { title: '常用快捷键', content: 'GitHub 支持键盘快捷键（按 ? 查看所有快捷键）：\n\n全局快捷键：\n• g c → 跳到 Code tab\n• g i → 跳到 Issues tab\n• g p → 跳到 Pull Requests tab\n• / → 聚焦搜索框\n• ? → 显示所有快捷键\n\n文件浏览：\n• t → 打开文件查找（输入文件名快速跳转）\n• y → 把 URL 转为固定 hash 版本（分享链接用）\n\nPR Review：\n• 在 Files changed 页面选中代码行 → 写评论\n• Shift + 点击可以选中多行\n• 按 c 在当前页面创建 Issue' },
    ],
    diagnosis: [
      { symptom: '在 GitHub 上创建的 PR 显示 "Can\'t automatically merge"', cause: 'PR 的分支和目标分支有冲突，需要手动解决。', fix: '在本地合并目标分支（git merge main 或 git rebase main），解决冲突后 push。PR 会自动更新并显示可合并。' },
      { symptom: 'PR 的 CI 检查失败了，不知道怎么重新运行', cause: 'GitHub Actions 的某个 Job 失败了（测试不通过、lint 报错等）。', fix: '点击 Actions tab 找到失败的 workflow → 查看日志定位问题 → 本地修复后 push 新 commit → CI 自动重新运行。或点击 Re-run failed jobs 只重跑失败的部分。' },
    ],
    exercises: [
      { level: '基础', task: '在 GitHub 上浏览一个开源仓库，找到 README、最近的 PR、和 CI 状态', hint: '打开 github.com 搜索仓库', answer: '打开 github.com/torvalds/linux → 浏览 Code tab 看文件结构 → Pull Requests tab 看当前 PR → Actions tab 看 CI 状态' },
      { level: '进阶', task: '创建一个 PR 并使用 GitHub 的 Review 功能审查代码', hint: '创建分支 → push → 创建 PR → Files changed → Review changes', answer: '本地创建 feature 分支并 push → GitHub 上点 New Pull Request → 在 Files changed 页面选中代码行添加评论 → 提交 Review（Comment / Approve / Request changes）' },
    ],
  },

  // 27. 处理冲突 — Handling Conflicts
  "9Dt4Gyiiq5jteWSKxsRMK": {
    mentalModel: '合并冲突就像两个人同时改了同一份文档的同一行——Git 不知道该听谁的，所以把决定权交给你。冲突标记 <<<<<<< / ======= / >>>>>>> 就是 Git 在说"这里你俩写的不同，你来选"。',
    handsOn: [
      { title: '制造一个冲突', cmd: 'git init conflict-demo && cd conflict-demo && echo "hello world" > file.txt && git add . && git commit -m "init"\ngit checkout -b feature && echo "hello feature" > file.txt && git add . && git commit -m "feature change"\ngit checkout main && echo "hello main" > file.txt && git add . && git commit -m "main change"\ngit merge feature', output: 'Auto-merging file.txt\nCONFLICT (content): Merge conflict in file.txt\nAutomatic merge failed; fix the conflicts and then commit the result.', explain: 'main 和 feature 都改了 file.txt 的同一行，Git 无法自动决定用哪个版本，于是标记冲突等你手动解决。' },
      { title: '查看冲突文件内容', cmd: 'cat file.txt', output: '<<<<<<< HEAD\nhello main\n=======\nhello feature\n>>>>>>> feature', explain: '<<<<<<< HEAD 到 ======= 之间是当前分支（main）的内容，======= 到 >>>>>>> feature 之间是要合入的分支内容。你需要手动编辑这个文件，保留想要的部分。' },
      { title: '手动解决冲突', cmd: 'echo "hello main and feature" > file.txt && git add file.txt && git commit -m "resolve merge conflict"', output: '[main a1b2c3d] resolve merge conflict', explain: '编辑文件移除冲突标记、保留正确内容后，git add 标记为"已解决"，再 git commit 完成合并。' },
      { title: '用工具辅助解决', cmd: 'git mergetool', output: 'Merging:\nfile.txt\n\nNormal merge conflict for \'file.txt\':\n  {local}: modified file\n  {remote}: modified file\nHit return to start merge resolution tool (vimdiff):', explain: 'git mergetool 打开可视化对比工具（如 vimdiff、vscode），左边是本地版本、右边是远端版本，可以直接点选保留哪边。配置方式：git config merge.tool vscode。' },
      { title: '放弃合并', cmd: 'git merge --abort', output: '(无输出，回到 merge 之前的状态)', explain: '如果你还没解决完冲突就想放弃这次合并，--abort 会恢复合并前的工作区和暂存区状态。只在合并尚未 commit 时有效。' },
    ],
    diagnosis: [
      { symptom: 'merge 后文件里残留 <<<<<<< HEAD 标记，代码运行报错', cause: '解决冲突时没有删除冲突标记就提交了。', fix: 'grep -rn "<<<<<<< " . 搜索所有残留标记，手动删除后重新 commit。' },
      { symptom: 'git merge 报 "You have not concluded your merge"', cause: '之前有未完成的合并（解决冲突后忘了 commit）。', fix: 'git commit 完成合并，或 git merge --abort 放弃。' },
      { symptom: '冲突太多不知道从哪里开始', cause: '大型合并可能涉及几十个文件。', fix: 'git diff --name-only --diff-filter=U 列出所有有冲突的文件，逐个解决。' },
    ],
    exercises: [
      { level: '基础', task: '在两个分支上修改同一文件的同一行，合并后解决冲突保留两边内容', hint: '先 git checkout -b，各改一行，再 merge', answer: 'git checkout -b feat && echo "new" > a.txt && git add . && git commit -m "feat"\ngit checkout main && echo "old" > a.txt && git add . && git commit -m "main"\ngit merge feat\n# 编辑 a.txt 保留两行，git add a.txt && git commit' },
      { level: '进阶', task: '使用 git rerere 让 Git 记住你的冲突解决方案，下次自动应用', hint: 'git config rerere.enabled true', answer: 'git config rerere.enabled true\n# 第一次解决冲突后 Git 会记录你的选择\n# 下次遇到相同冲突时自动重用之前的解决方案' },
      { level: '挑战', task: '在 rebase 过程中解决冲突（rebase 冲突和 merge 冲突的处理方式有何不同？）', hint: 'rebase 时解决冲突后要 git rebase --continue', answer: 'git rebase main\n# 冲突时编辑文件，git add 后执行 git rebase --continue\n# 区别：merge 解决后 git commit；rebase 解决后 git rebase --continue\n# rebase 可能需要在多个 commit 上重复解决冲突' },
    ],
  },

  // 28. 搭建 GitHub Profile — Setting up Profile
  "GS3f1FKFVKT0-GJQrgCm8": {
    mentalModel: 'GitHub Profile 是你在开源世界的"名片"。完善的 Profile 让面试官、合作者一眼看到你的技术栈、活跃度和开源贡献。',
    handsOn: [
      { title: '查看个人主页 URL', cmd: '打开 https://github.com/<你的用户名>', output: '显示你的 GitHub 个人主页，包含头像、Bio、Pinned repos、贡献热力图等。', explain: '每个 GitHub 用户都有一个公开主页，默认展示仓库列表和活动。Profile 的完整度直接影响他人对你的第一印象。' },
      { title: '编辑个人资料', cmd: '点击头像 → Settings → Public profile，填写 Name、Bio、Company、Location、Website、Twitter', output: 'Bio 最多 160 字符，显示在头像下方。Website 会自动变成可点击链接。', explain: 'Bio 用一句话概括你的角色和技术栈，例如 "Full-stack developer | Go + React | Open source enthusiast"。Website 可以放博客或个人网站。' },
      { title: '设置 Pin 仓库', cmd: '在个人主页点击 "Customize your pins"，选择最多 6 个仓库', output: '选中的仓库会以卡片形式展示在主页顶部，显示描述、语言和 Star 数。', explain: 'Pinned repos 是主页最显眼的部分，选你最能代表自己水平的 6 个项目，而不是最近随手 star 的。' },
      { title: '配置 Pronouns 和时区', cmd: 'Settings → Public profile → Pronouns 和 UTC offset', output: 'Pronouns 显示在名字旁边（如 they/them），方便国际协作。', explain: '在国际化团队中，Pronouns 帮助他人正确称呼你。UTC offset 让别人知道你的工作时段。' },
    ],
    diagnosis: [
      { symptom: '个人主页显示"××× has no public activity"', cause: '所有贡献都在私有仓库中，没有公开活动。', fix: 'Settings → Public profile → Contributions & activity → 开启 "Make profile private contributions visible"（会显示贡献数但不显示仓库名）。' },
      { symptom: '贡献热力图一片空白', cause: '提交用的邮箱没有关联到 GitHub 账号。', fix: 'Settings → Emails → 添加你 git config user.email 使用的邮箱。' },
    ],
    exercises: [
      { level: '基础', task: '完善你的 GitHub Profile：填写 Bio、Location、Website，Pin 3 个仓库', hint: 'Settings → Public profile', answer: '登录 GitHub → 点击右上角头像 → Settings → Public profile，填写所有字段后 Save。回到主页 Customize your pins 选择仓库。' },
      { level: '进阶', task: '让你的贡献热力图显示私有仓库的贡献', hint: 'Contributions settings 在 Public profile 页面底部', answer: 'Settings → Public profile → 滚动到底部 → 勾选 "Show private contributions" → Save。' },
    ],
  },

  // 29. Profile Readme — Profile Readme
  "KbVvFVQ4k77R2_ddsc7WT": {
    mentalModel: 'Profile Readme 是一个特殊的仓库——仓库名和你的用户名完全相同。它的 README.md 会直接渲染在你的 GitHub 个人主页上，相当于自定义的"个人介绍页"。',
    handsOn: [
      { title: '创建 Profile Readme 仓库', cmd: '在 GitHub 上点 New repository → 仓库名填你的用户名（如 tuski） → 勾选 "Add a README file" → Create', output: 'GitHub 提示："You found a secret! Creating a repository named your username will add a README to your profile." 创建后主页顶部出现 README 内容。', explain: '仓库名必须严格匹配你的 GitHub 用户名（大小写也要一致）。只有这个仓库的 README.md 会显示在主页。' },
      { title: '编写 Profile README 内容', cmd: '在仓库 README.md 中写入：\n```\n### Hi there 👋\n- 🔭 I\'m working on [project](url)\n- 🌱 I\'m learning Go and Kubernetes\n- 💬 Ask me about React and TypeScript\n- 📫 Reach me: email@example.com\n```', output: '保存后刷新个人主页，README 内容以 Markdown 渲染形式显示在页面顶部。', explain: 'GitHub 支持标准 Markdown 语法，可以使用标题、列表、链接、图片、表格。很多开发者用 emoji + 列表的形式做简洁的自我介绍。' },
      { title: '添加动态统计卡片', cmd: '在 README 中插入 GitHub Stats 卡片：\n![stats](https://github-readme-stats.vercel.app/api?username=你的用户名&show_icons=true&theme=radical)', output: '主页上显示一个精美的统计卡片，包含 Star 数、Commit 数、PR 数、Issue 数等。', explain: 'github-readme-stats 是第三方开源服务，通过 URL 参数动态生成 SVG 卡片。theme 可选 radical、merko、gruvbox 等几十种主题。' },
      { title: '添加技术栈图标', cmd: '在 README 中使用 shields.io 或 devicon：\n![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)\n![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)', output: '主页显示一排带颜色和 logo 的技术栈标签。', explain: 'shields.io 生成各种徽章（badge），支持自定义颜色、logo 和样式。devicons.dev 提供编程语言和工具的 logo 图标。' },
    ],
    diagnosis: [
      { symptom: '创建了仓库但主页没有显示 README', cause: '仓库名没有严格匹配用户名，或者仓库不是 public。', fix: '确认仓库名 = 你的用户名（区分大小写），仓库设置为 public，且根目录有 README.md 文件。' },
      { symptom: '统计卡片显示 "Username not found"', cause: 'github-readme-stats 的 username 参数拼写错误。', fix: '检查 URL 中 username= 后面的值是否和你的 GitHub 用户名完全一致。' },
    ],
    exercises: [
      { level: '基础', task: '创建你的 Profile Readme 仓库并写一段自我介绍', hint: '仓库名 = 用户名', answer: '在 GitHub 创建仓库名为你的用户名，勾选 Add README，写入 Markdown 自我介绍。' },
      { level: '进阶', task: '在 Profile README 中添加一个自动更新的"最近博客文章"列表', hint: '使用 GitHub Actions + blog-post-workflow', answer: '使用 https://github.com/gautamkrishnar/blog-post-workflow，在 Profile 仓库创建 .github/workflows/blog-posts.yml，配置 RSS 源，每次自动拉取最新文章列表注入 README。' },
      { level: '挑战', task: '用 GitHub Actions 让你的 Profile README 每天自动更新一句名言', hint: '用 cron 触发 workflow 改写 README', answer: '创建 .github/workflows/quote.yml，cron: \'0 0 * * *\'，用 script 从 API 获取名言，替换 README 中的占位符，commit & push。' },
    ],
  },

  // 30. Cherry Picking — Cherry Picking Commits
  "eFf2fesrs-1aVM5tH3ORQ": {
    mentalModel: 'git cherry-pick 就像"复制粘贴"某个特定的 commit 到当前分支——不用把整个分支合过来，只挑你想要的那一笔。比喻：从一盘水果里挑出你想要的那颗樱桃。',
    handsOn: [
      { title: '挑取单个 commit', cmd: 'git cherry-pick abc1234', output: '[main def5678] Fix login validation\n Date: Mon May 26 10:00:00 2025\n 1 file changed, 3 insertions(+), 1 deletion(-)', explain: '把 abc1234 这个 commit 的变更"重新应用"到当前分支。生成的新 commit hash 不同（def5678），但内容变更相同。' },
      { title: '挑取多个 commit', cmd: 'git cherry-pick abc1234 def5678 ghi9012', output: '[main a1b2c3d] commit message 1\n[main e4f5g6h] commit message 2\n[main i7j8k9l] commit message 3', explain: '按顺序逐个应用指定的 commit。如果中间某个有冲突，需要解决后 git cherry-pick --continue。' },
      { title: '挑取时不带 commit（只改工作区）', cmd: 'git cherry-pick --no-commit abc1234', output: '(无输出，工作区已被修改，变更在暂存区)', explain: '--no-commit（-n）把变更应用到暂存区但不自动生成 commit，让你有机会修改后再提交，或把多个 cherry-pick 合并成一个 commit。' },
      { title: '挑取一个范围', cmd: 'git cherry-pick abc1234..ghi9012', output: '逐个应用 abc1234 之后到 ghi9012（含）之间的所有 commit', explain: '范围语法 A..B 表示 A 之后到 B（含 B 但不含 A）。注意这个范围是左开右闭的。' },
      { title: '处理 cherry-pick 冲突', cmd: 'git cherry-pick abc1234\n# 如果有冲突，编辑文件后：\ngit add <冲突文件>\ngit cherry-pick --continue', output: 'After resolving conflicts, run \'git cherry-pick --continue\'', explain: '和 merge 冲突类似，解决冲突后 add + continue。如果想放弃本次 cherry-pick：git cherry-pick --abort。' },
    ],
    diagnosis: [
      { symptom: 'cherry-pick 报 "error: could not apply abc1234"', cause: '目标 commit 的修改和当前分支的代码有冲突。', fix: '编辑冲突文件、git add、git cherry-pick --continue。或 git cherry-pick --abort 放弃。' },
      { symptom: 'cherry-pick 后日志出现重复的 commit', cause: 'cherry-pick 会创建新 commit，不会消除原始 commit。如果后续再 merge 原始分支，两边都有相似变更。', fix: '用 git log --cherry-pick --right-only main...feature 可以忽略"等价"的 commit。更好的做法是统一策略：要么全 cherry-pick，要么 merge。' },
    ],
    exercises: [
      { level: '基础', task: '从 feature 分支 cherry-pick 一个 bugfix commit 到 main', hint: '先用 git log 找到 commit hash', answer: 'git log feature --oneline\n# 找到 bugfix 的 hash 如 abc1234\ngit checkout main\ngit cherry-pick abc1234' },
      { level: '进阶', task: 'cherry-pick 3 个 commit 但合并为一个 commit 提交', hint: '使用 --no-commit 参数', answer: 'git checkout main\ngit cherry-pick --no-commit abc1234 def5678 ghi9012\ngit commit -m "Apply 3 bugfixes from feature branch"' },
      { level: '挑战', task: 'cherry-pick 一个 merge commit 时需要用 -m 参数指定 mainline', hint: 'merge commit 有两个父 commit', answer: 'git cherry-pick -m 1 <merge-commit-hash>\n# -m 1 表示保留 merge commit 中相对于第一个父 commit 的变更\n# -m 2 则保留相对于第二个父 commit 的变更' },
    ],
  },

  // 31. Private 与 Public 对比 — Private vs Public
  "HEqBbw_A4ZbJI5zEy8ViN": {
    mentalModel: 'Public 仓库是"广场上的展览"——全世界可见、可 Fork、可 Star；Private 仓库是"带锁的日记本"——只有你邀请的人能看到。选错了可能泄露商业代码，选对了才能放心开发。',
    sections: [
      { title: 'Public 仓库的特点', content: '任何人可见、可 Fork、可 Star、可提 Issue/PR。搜索引擎可以索引。适合开源项目、个人学习、作品集展示。GitHub Actions 免费额度为 2000 分钟/月。' },
      { title: 'Private 仓库的特点', content: '只有 owner 和被邀请的 collaborator 可见。不能被未授权用户 Fork。适合公司内部项目、敏感数据、未完成的原型。免费账号也有无限私有仓库（但限 3 个 collaborator）。GitHub Actions 免费额度为 500 分钟/月。' },
      { title: '切换可见性', content: 'Settings → Danger Zone → Change visibility。Public→Private：Fork 会消失（别人的 Fork 变成独立仓库）。Private→Public：之前的 private Fork 会被分离。注意：切换前要考虑清楚，Public→Private 后别人的 Star 和 Watch 会保留但他们看不到代码了。' },
      { title: '选择建议', content: '开源项目/学习/作品集 → Public。公司项目/含密钥的实验/未发布的论文 → Private。面试项目建议 Public（展示代码质量）。临时实验可以 Private，稳定后改 Public。' },
    ],
    diagnosis: [
      { symptom: 'Push 时报 "Repository not found" 但仓库确实存在', cause: '你访问的是一个 Private 仓库，但你的 token/SSH key 没有权限。', fix: '检查 GitHub Personal Access Token 是否勾选了 repo scope；或确认 SSH key 已添加到你的 GitHub 账号。' },
      { symptom: '把仓库从 Public 改成 Private 后，Star 数还在但别人看不到了', cause: 'Star 和 Watch 数据在切换可见性时保留，但非 collaborator 无法再访问仓库。', fix: '这是预期行为。如果需要公开，改回 Public。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 Private 仓库，邀请一个 collaborator', hint: 'Settings → Collaborators → Add people', answer: '创建仓库时选 Private → Settings → Collaborators → Add people → 输入对方用户名 → 对方收到邮件邀请接受后即可访问。' },
      { level: '进阶', task: '把现有 Public 仓库改为 Private，观察 Fork 的变化', hint: 'Settings → Danger Zone → Change visibility', answer: 'Settings → Danger Zone → Change visibility → Make private。注意：已有的 public Fork 会变成独立仓库，不再关联你的仓库。' },
    ],
  },

  // 32. Forking 与克隆对比 — Forking vs Cloning
  "l1Wf7Pe_ah8ycCgslfSK4": {
    mentalModel: 'Clone 是"把书从图书馆复印回家"——拿到一份本地副本，但没有自己的线上版本。Fork 是"在图书馆登记一本属于你的副本"——GitHub 服务器上多了一个你的仓库副本，你可以自由修改并提 PR 回去。',
    sections: [
      { title: 'git clone 做了什么', content: 'git clone <url> 把远程仓库完整下载到本地，包括所有分支和历史。本地只有一个 origin 远程。你对本地仓库有完全控制权，但无法直接 push 到别人的仓库（除非被添加为 collaborator）。适合：你自己有写权限的仓库。' },
      { title: 'GitHub Fork 做了什么', content: '点 Fork 按钮后，GitHub 在你的账号下创建一个该仓库的完整副本（包括 Star 数、Issue 等不复制）。你拥有了自己的远程仓库，可以自由 push。原始仓库叫 upstream。你可以从 upstream 拉取更新，也可以向 upstream 提 PR。适合：参与开源项目。' },
      { title: '典型工作流对比', content: '有写权限时：clone → 建分支 → 开发 → push → 创建 PR。\n没有写权限时（开源项目）：fork → clone 你的 fork → 建分支 → push 到你的 fork → 向 upstream 提 PR。\nFork 的本质是"在 GitHub 服务器上先 clone 一份到你的账号下"。' },
      { title: '保持 Fork 同步', content: 'GitHub 现在提供 "Sync fork" 按钮一键同步。命令行方式：\ngit remote add upstream <原始仓库URL>\ngit fetch upstream\ngit merge upstream/main\n或者用 GitHub CLI：gh repo sync <owner>/<repo>。' },
    ],
    diagnosis: [
      { symptom: 'git push 报 "remote: Permission to user/repo denied"', cause: '你 clone 的是别人的仓库，没有 push 权限。', fix: '先 Fork 到你自己的账号，然后 clone 你自己的 Fork：git clone https://github.com/你的用户名/仓库名.git。' },
      { symptom: 'Fork 的仓库落后原始仓库很多 commit', cause: 'Fork 后没有同步上游更新。', fix: '点 GitHub 页面上的 "Sync fork" → "Update branch"，或命令行 git remote add upstream + git pull upstream main。' },
    ],
    exercises: [
      { level: '基础', task: 'Fork 一个开源仓库，clone 到本地，添加 upstream 远程', hint: 'GitHub 页面右上角 Fork 按钮', answer: '在 GitHub 点 Fork → git clone https://github.com/你的用户名/仓库.git → cd 仓库 → git remote add upstream https://github.com/原作者/仓库.git → git remote -v 确认' },
      { level: '进阶', task: '在你的 Fork 上修改后向上游提交 PR', hint: 'push 到你的 Fork，然后在 GitHub 上创建 PR', answer: 'git checkout -b feature → 修改文件 → git add + commit + push origin feature → 在 GitHub 上从你的 Fork 的 feature 分支向上游的 main 分支发起 Pull Request。' },
    ],
  },

  // 33. Commit Messages — Commit Messages
  "7lRUYWNSpHvJ-QyIE8RMa": {
    mentalModel: 'Commit message 是给未来的自己和队友看的"时间胶囊标签"。好的 message 让人秒懂这次改了什么、为什么改；坏的 message 让人对着 git log 一脸茫然。',
    handsOn: [
      { title: '写一个规范的 commit message', cmd: 'git commit -m "fix: resolve null pointer in user login\n\nWhen email field is empty, UserService.login() threw NPE.\nAdded null check with default fallback to prevent crash.\n\nFixes #42"', output: '[main abc1234] fix: resolve null pointer in user login\n 2 files changed, 5 insertions(+), 1 deletion(-)', explain: '遵循 Conventional Commits 规范：<type>(<scope>): <subject>。第一行是摘要（祈使句、小写开头、不超过 72 字符），空行后是详细说明，最后是关联的 issue。' },
      { title: '查看 commit message 历史', cmd: 'git log --oneline -10', output: 'abc1234 fix: resolve null pointer in user login\ndef5678 feat: add email validation\nghi9012 docs: update API readme\njkl3456 refactor: extract UserService helper', explain: '--oneline 只显示 hash 和第一行，快速浏览历史。良好的 commit message 让 git log 变成一份清晰的项目变更日志。' },
      { title: '修改上一次 commit message', cmd: 'git commit --amend -m "fix: add null check for empty email in UserService.login"', output: '[main xyz9876] fix: add null check for empty email in UserService.login', explain: '--amend 会替换最后一次 commit 的 message（和内容）。注意：如果已经 push 到远程，需要 force push，可能影响队友。' },
      { title: '使用 commit message 模板', cmd: 'echo "<type>: <subject>\n\n<body>\n\n<footer>" > ~/.gitmessage\ngit config --global commit.template ~/.gitmessage', output: '(配置完成，之后 git commit 会打开编辑器预填模板)', explain: '模板强制你思考 type、body 和 footer，避免写出 "fix bug" 这种空洞的 message。团队可以共享模板保证风格一致。' },
    ],
    diagnosis: [
      { symptom: 'CI 检查报 "commit message does not follow convention"', cause: '项目配置了 commitlint 等工具检查 message 格式。', fix: '按项目要求的格式重写：git commit --amend。常见格式是 Conventional Commits：feat:/fix:/docs:/refactor: 等前缀。' },
      { symptom: 'git log 看到一堆 "WIP", "fix", "update" 无法理解改了什么', cause: '开发时随手写的 message 没有及时整理。', fix: '用 git rebase -i 合并多个小 commit 为一个有意义的 commit，重写 message。以后养成提交前想清楚 message 的习惯。' },
    ],
    exercises: [
      { level: '基础', task: '用 Conventional Commits 格式写 3 个 commit：一个 feat、一个 fix、一个 docs', hint: '格式：<type>: <subject>', answer: 'git commit -m "feat: add user registration endpoint"\ngit commit -m "fix: correct off-by-one error in pagination"\ngit commit -m "docs: add installation instructions to README"' },
      { level: '进阶', task: '用 git rebase -i 把最后 3 个 commit 合并为 1 个并写规范的 message', hint: 'git rebase -i HEAD~3', answer: 'git rebase -i HEAD~3\n# 第一个 commit 保留 pick，后两个改为 squash (s)\n# 在编辑器中写新的 commit message\n# 保存退出完成合并' },
      { level: '挑战', task: '配置 husky + commitlint 让不符合规范的 commit 自动被拒绝', hint: 'npm install -D @commitlint/cli @commitlint/config-conventional husky', answer: 'npm install -D @commitlint/cli @commitlint/config-conventional husky\n# commitlint.config.js: module.exports = {extends: ["@commitlint/config-conventional"]}\n# npx husky add .husky/commit-msg "npx commitlint --edit $1"' },
    ],
  },

  // 34. Markdown — Markdown
  "1Ulxl4VUvRSfyCPpi-iv8": {
    mentalModel: 'Markdown 是"程序员的排版语言"——用几个简单符号（# * ` []）就能写出结构清晰的文档，GitHub 会把它渲染成漂亮的 HTML 页面。它是 GitHub 上 README、Issue、PR、Wiki 的通用书写格式。',
    sections: [
      { title: '基础语法速查', content: '# 一级标题\n## 二级标题\n**粗体** *斜体* ~~删除线~~\n- 无序列表项\n1. 有序列表项\n[链接文本](url)\n![图片描述](图片url)\n> 引用块\n`行内代码`\n```代码块```' },
      { title: 'GitHub 扩展语法', content: '任务列表：\n- [x] 已完成\n- [ ] 未完成\n\n表格：\n| 列1 | 列2 |\n|-----|-----|\n| 内容 | 内容 |\n\n折叠块：\n<details><summary>点击展开</summary>\n隐藏内容\n</details>\n\n脚注：这是一个脚注[^1]\n[^1]: 脚注内容' },
      { title: '代码块与语法高亮', content: '用三个反引号 + 语言名开启语法高亮：\n```go\nfunc main() {\n    fmt.Println("Hello")\n}\n```\n支持 200+ 语言：go, python, javascript, sql, bash, yaml 等。行内代码用单反引号：`git status`。diff 代码块可以高亮增删行：\n```diff\n- old line\n+ new line\n```' },
      { title: 'Mermaid 图表', content: 'GitHub 原生支持 Mermaid：\n```mermaid\ngraph TD\n    A[开始] --> B{条件?}\n    B -->|是| C[执行]\n    B -->|否| D[跳过]\n```\n支持流程图、序列图、甘特图、类图、状态图等。不需要任何第三方工具，直接在 Markdown 中画图。' },
    ],
    diagnosis: [
      { symptom: 'README.md 在 GitHub 上显示原始 Markdown 文本而不是渲染后的页面', cause: '文件扩展名不是 .md（如 .MD 或 .markdown），或文件编码不是 UTF-8。', fix: '确保文件名以 .md 结尾（小写），文件保存为 UTF-8 编码。' },
      { symptom: 'Markdown 中的图片在 GitHub 上不显示', cause: '图片路径是本地绝对路径（如 /Users/me/img.png），GitHub 无法访问。', fix: '使用相对路径（./images/pic.png，图片放在仓库中）或外部 URL（https://...）。推荐把图片放在仓库的 images/ 目录下。' },
    ],
    exercises: [
      { level: '基础', task: '写一个包含标题、列表、代码块、链接的 README.md', hint: '# 标题\n## 子标题\n- 列表\n```code```', answer: '# My Project\n\n## Features\n- Fast processing\n- Easy to use\n\n## Installation\n```bash\nnpm install my-project\n```\n\n## Links\n[Documentation](https://example.com)' },
      { level: '进阶', task: '用 Markdown 表格对比 3 种编程语言的优缺点', hint: '| 列1 | 列2 | 列3 |', answer: '| 语言 | 优点 | 缺点 |\n|------|------|------|\n| Go | 并发强、编译快 | 泛型支持有限 |\n| Python | 语法简洁、生态丰富 | 运行速度慢 |\n| Rust | 内存安全、零成本抽象 | 学习曲线陡峭 |' },
      { level: '挑战', task: '用 Mermaid 画一个 Git 分支流程图展示 feature 分支工作流', hint: '```mermaid 块内使用 graph TD', answer: '```mermaid\ngraph TD\n    M[main] --> F[feature/xxx]\n    F --> |开发完成| PR[Pull Request]\n    PR --> |Code Review| CR{通过?}\n    CR -->|是| MERGE[合并到 main]\n    CR -->|否| F\n```' },
    ],
  },

  // 35. Issues — Issues
  "crdllx5cH_seIpgVPvHg_": {
    mentalModel: 'Issue 就是项目里的"工单系统"——不管是 bug 报告、功能请求、还是讨论话题，都可以用 Issue 来记录和追踪。每个 Issue 有编号、状态、标签、指派人，就像一个个便签贴在项目看板上。',
    handsOn: [
      { title: '创建一个 Issue', cmd: '在仓库页面点 Issues → New issue → 填写标题和描述 → Submit new issue', output: '创建了 Issue #42: "Login page crashes on Safari"\n状态: Open | 编号: #42 | 可以添加标签、指派人员、里程碑。', explain: '标题要简洁准确（"Login crashes on Safari 16" 比 "page broken" 好太多）。描述中写清楚复现步骤、期望行为、实际行为。附上截图或错误日志更好。' },
      { title: '用命令行创建 Issue', cmd: 'gh issue create --title "Login crashes on Safari" --body "Steps to reproduce: ..." --label "bug"', output: 'https://github.com/user/repo/issues/43', explain: 'GitHub CLI（gh）可以在终端直接创建 Issue，适合不离开终端的工作流。--label 添加标签，--assignee 指派人员。' },
      { title: '关闭和引用 Issue', cmd: '在 commit message 中写 "Fixes #42" 或 "Closes #42"', output: '当这个 commit 合并到默认分支时，#42 自动关闭。', explain: 'GitHub 识别关键词 Fixes/Closes/Resolves + #编号，合并 PR 时自动关闭对应 Issue。在 commit 或 PR 描述中都可以使用。' },
      { title: 'Issue 模板', cmd: '在仓库中创建 .github/ISSUE_TEMPLATE/bug_report.md 文件', output: '之后每次点 New issue 会出现模板选择页面，引导用户填写结构化信息。', explain: 'Issue 模板可以强制要求提交者提供特定信息（如环境版本、复现步骤、日志），避免收到 "它坏了" 这种无法处理的 Issue。' },
      { title: '搜索和过滤 Issue', cmd: '在 Issues 页面搜索栏输入：is:issue is:open label:bug sort:updated-desc', output: '显示所有 open 状态、标记为 bug 的 Issue，按最近更新时间排序。', explain: '常用过滤条件：is:open/closed、label:xxx、assignee:xxx、milestone:xxx、author:xxx、no:assignee（无人认领）。' },
    ],
    diagnosis: [
      { symptom: 'Issues 标签页不显示（"Issues" tab 看不到）', cause: '仓库的 Issues 功能被关闭了。', fix: 'Settings → Features → 勾选 Issues。' },
      { symptom: 'PR 合并后关联的 Issue 没有自动关闭', cause: 'commit message 中的关键词格式不对（如 "fix #42" 小写不行，或者 # 号后面多了空格）。', fix: '使用标准格式：Fixes #42、Closes #42、Resolves #42（首字母大写）。或者手动在 Issue 页面关闭。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 bug report Issue，包含复现步骤、期望行为和实际行为', hint: 'Issues → New issue', answer: 'Issues → New issue → 标题: "Fix: button not responding on mobile" → 描述中写 Steps / Expected / Actual → Submit。' },
      { level: '进阶', task: '创建 Bug Report 和 Feature Request 两个 Issue 模板', hint: '在 .github/ISSUE_TEMPLATE/ 目录下创建 .yml 或 .md 文件', answer: '创建 .github/ISSUE_TEMPLATE/bug_report.yml 和 feature_request.yml，用 YAML 表单定义字段（input、textarea、dropdown），GitHub 会自动生成表单界面。' },
      { level: '挑战', task: '用 GitHub Actions 自动给新 Issue 打上标签并指派给项目维护者', hint: '使用 actions/labeler 或自定义 workflow', answer: '创建 .github/workflows/issue-labeler.yml，on: issues: types: [opened]，用 actions/github-script 根据 Issue 内容关键词自动添加 labels 和 assignees。' },
    ],
  },

  // 36. Project Readme — Project Readme
  "WIVr7JxO1AJTNObW8mtY3": {
    mentalModel: 'Project Readme 是项目的"门面说明书"——它是访客打开仓库看到的第一样东西。一个好的 README 在 30 秒内告诉别人：这个项目是什么、解决什么问题、怎么安装、怎么用。',
    sections: [
      { title: '必备章节', content: '1. **项目名称 + 一句话描述**：在标题下方用一行说清楚项目做什么。\n2. **Badges**：CI 状态、版本号、License（用 shields.io 生成）。\n3. **Installation**：一行命令即可安装（npm install / go get / pip install）。\n4. **Quick Start / Usage**：最小可运行示例，复制粘贴就能跑。\n5. **Configuration**：可配置项说明。\n6. **Contributing**：如何参与贡献（链接到 CONTRIBUTING.md）。\n7. **License**：开源许可证类型。' },
      { title: '可选但加分的章节', content: '- **Screenshots / GIF**：一图胜千言，展示实际效果。\n- **Architecture**：简要架构图或设计决策。\n- **Roadmap**：未来计划（用 GitHub Projects 更好）。\n- **FAQ**：常见问题解答。\n- **Credits**：致谢贡献者和依赖项目。\n- **Changelog**：版本变更记录（或用 GitHub Releases）。' },
      { title: 'README 写法最佳实践', content: '- 第一句话最重要：假设读者只看这一句。\n- 代码示例要能直接复制运行（不要省略 import）。\n- 安装步骤在干净环境下验证过。\n- 保持更新——过时的 README 比没有 README 更有害。\n- 用相对链接引用仓库内的文件（如 [Contributing](./CONTRIBUTING.md)）。\n- 不要把所有文档堆在 README 里——详细内容放 Wiki 或 docs/ 目录。' },
      { title: 'README 自动出现在仓库首页', content: 'GitHub 默认渲染仓库根目录的 README.md（或 README.rst、README.txt）。文件名不区分大小写但推荐 README.md。如果放在 docs/ 目录则不会自动显示。README 中可以使用完整的 GitHub Flavored Markdown。' },
    ],
    diagnosis: [
      { symptom: '仓库首页没有显示 README 内容', cause: '文件名不是 README.md（可能叫 readme.md 在某些系统上没问题，但 README.txt 如果内容不是纯文本可能渲染异常），或文件不在仓库根目录。', fix: '确认根目录有 README.md 文件（推荐全大写 README），内容使用标准 Markdown 语法。' },
      { symptom: 'README 里的相对链接点击后 404', cause: '链接路径相对于 README 文件位置，不是相对于仓库根目录。如果 README 在子目录中，相对路径基准不同。', fix: '根目录 README 用 ./docs/guide.md 格式；子目录 README 用 ../docs/guide.md 格式。或者使用绝对路径 /docs/guide.md。' },
    ],
    exercises: [
      { level: '基础', task: '为一个项目写一个包含标题、安装、用法、License 的 README.md', hint: '参考标准 README 模板结构', answer: '# My App\n\nA fast CLI tool for managing tasks.\n\n## Installation\n```bash\ngo install github.com/user/myapp@latest\n```\n\n## Usage\n```bash\nmyapp add "Buy groceries"\nmyapp list\n```\n\n## License\nMIT' },
      { level: '进阶', task: '给 README 添加 CI badge、版本 badge 和 License badge', hint: '使用 shields.io 生成', answer: '在 README 标题下方添加：\n[![CI](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)](链接)\n[![Version](https://img.shields.io/github/v/release/user/repo)](链接)\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](链接)' },
      { level: '挑战', task: '写一个 README 让完全不懂编程的人也能理解你的项目是做什么的', hint: '用类比和截图代替技术术语', answer: '用"它就像一个……"的类比开头，配上一张截图或 GIF 展示效果，安装步骤写成"一键复制"的命令，避免任何未解释的技术术语。' },
    ],
  },

  // 37. PR from a Fork — PR from a Fork
  "8lXXVFkgK6n5IHaYkYe3l": {
    mentalModel: '从 Fork 发 PR 就像"外人给公司提建议"——你没有原仓库的写入权限，但你可以 Fork 一份到自己账号、修改后请求原作者合并。这是参与开源项目的标准姿势。',
    handsOn: [
      { title: '完整的 Fork PR 流程', cmd: '1. GitHub 上点 Fork\n2. git clone https://github.com/你的用户名/项目.git\n3. git remote add upstream https://github.com/原作者/项目.git\n4. git checkout -b fix-typo\n5. 修改文件 → git add → git commit → git push origin fix-typo\n6. 在 GitHub 上从你的 Fork 的 fix-typo 向上游 main 发起 PR', output: 'PR 页面显示：user:fix-typo → upstream:main\n原仓库维护者会收到通知，可以 Review、评论、合并。', explain: '你的 push 权限只在你 Fork 的仓库上。PR 是从你的分支指向上游分支的"合并请求"。上游 maintainer 决定是否接受。' },
      { title: '同步上游更新到你的 Fork', cmd: 'git fetch upstream && git checkout main && git merge upstream/main && git push origin main', output: 'From https://github.com/upstream/project\n * branch  main -> FETCH_HEAD\nUpdating abc..def\nFast-forward\n 5 files changed, 120 insertions(+)', explain: '在你开发期间上游可能有新 commit，合并前先同步避免冲突。GitHub 也提供网页端 "Sync fork" 按钮。' },
      { title: '允许上游维护者修改你的 PR', cmd: '创建 PR 时勾选 "Allow edits from maintainers"', output: '维护者可以直接 push 到你的 Fork 分支上，修复小问题后合并。', explain: '默认开启。勾选后上游 maintainer 可以直接修改你的 PR 分支，省去反复沟通的来回。如果不勾选，所有修改必须由你本人 push。' },
    ],
    diagnosis: [
      { symptom: 'PR 包含了你不想要的额外 commit', cause: '你的分支是从一个落后的 main 创建的，包含了 main 上之前 PR 的旧 commit。', fix: '创建功能分支前先同步 Fork 的 main：git fetch upstream && git checkout main && git merge upstream/main，然后从最新的 main 创建分支。或用 git rebase upstream/main 变基。' },
      { symptom: 'PR 显示大量文件变更，但你只改了一行', cause: '你的 Fork 的 main 落后上游太多，分支和上游 main 之间的 diff 包含了所有历史差异。', fix: 'git fetch upstream → git rebase upstream/main 把你的 commit 重放到上游最新的 main 之上。' },
    ],
    exercises: [
      { level: '基础', task: 'Fork 一个开源仓库，修改 README 的一个 typo，向上游提 PR', hint: 'Fork → Clone → 修改 → Push → Create PR', answer: 'GitHub Fork → git clone 你的 Fork → git checkout -b fix-typo → 修改 → git add + commit + push origin fix-typo → GitHub 上创建 PR 指向上游 main。' },
      { level: '进阶', task: '在上游更新了 3 个 commit 后，同步你的 Fork 并解决一个冲突', hint: 'git remote add upstream + git rebase', answer: 'git fetch upstream → git checkout main → git merge upstream/main → git checkout feature → git rebase main → 解决冲突 → git push --force-with-lease origin feature。' },
    ],
  },

  // 38. Pull Requests — Pull Requests
  "x6eILrLCQrVpz4j8uOuy6": {
    mentalModel: 'Pull Request（PR）是"请求合并"的正式流程——你把分支上的改动展示给团队，请大家 Review 后再合并到主分支。PR 不只是代码合并工具，更是团队沟通和知识共享的核心场所。',
    handsOn: [
      { title: '创建一个 PR', cmd: 'git push origin feature-branch\n# 然后在 GitHub 上：仓库页面顶部出现 "Compare & pull request" 按钮 → 点击 → 填写标题和描述 → Create pull request', output: 'Pull Request #15 created: "Add user authentication"\n状态: Open | 显示文件变更 diff | 可以添加 Reviewer', explain: 'GitHub 检测到新 push 的分支后会自动提示创建 PR。PR 标题遵循 commit message 规范，描述中说明改了什么、为什么改、如何测试。' },
      { title: '查看 PR 的文件变更', cmd: '在 PR 页面点 "Files changed" 标签', output: '显示逐文件的 diff：绿色是新增行，红色是删除行。可以在任意行添加评论。', explain: 'Files changed 是 Code Review 的主战场。点行号左边的 + 号可以添加行内评论。GitHub 还支持 Suggestion 语法直接建议代码修改。' },
      { title: '在 PR 中添加 Review', cmd: '点 "Review changes" 按钮 → 选择 Comment / Approve / Request changes → 提交 Review', output: 'Review 状态变为 Approved 或 Changes requested，PR 时间线记录 Review 事件。', explain: 'Approve = 我同意合并；Request changes = 有问题需要修改；Comment = 中性评论不表态。团队通常要求至少 1 个 Approve 才能合并。' },
      { title: '合并 PR', cmd: '点 "Merge pull request" → 选择合并方式：\n1. Merge commit（保留所有 commit + 一个合并 commit）\n2. Squash and merge（所有 commit 压成一个）\n3. Rebase and merge（线性历史，无合并 commit）', output: 'Merged! Pull request successfully merged.\n分支可以被删除。', explain: '三种合并策略影响 git 历史。Merge commit 保留完整上下文；Squash 让历史干净；Rebase 保持线性。团队应统一选择一种策略。' },
      { title: 'Draft PR', cmd: '创建 PR 时选择 "Create draft pull request"', output: 'PR 标记为 Draft（草稿），不能被合并。用于早期分享进度、征求反馈。', explain: 'Draft PR 告诉团队"还在进行中，别急着 Review"。完成后点 "Ready for review" 转为正式 PR。适合需要早期反馈的大改动。' },
    ],
    diagnosis: [
      { symptom: 'PR 无法合并，显示 "This branch has conflicts that must be resolved"', cause: '你的分支和目标分支有冲突。', fix: '本地 rebase 或 merge 目标分支解决冲突后 push：git fetch origin → git merge origin/main → 解决冲突 → git push。' },
      { symptom: 'PR 的 CI 检查一直失败', cause: '代码改动触发了测试失败或 lint 错误。', fix: '点 PR 底部的 CI 检查详情查看具体失败原因，本地修复后 push 更新 PR。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个分支，修改一个文件，push 后创建 PR', hint: 'git checkout -b → 修改 → push → GitHub 创建 PR', answer: 'git checkout -b feature-x → 修改文件 → git add + commit + push origin feature-x → GitHub 上点 Compare & pull request → 填写信息 → Create。' },
      { level: '进阶', task: '在 PR 中使用 suggestion 功能建议代码修改', hint: '在 Files changed 页面的行评论中使用 ```suggestion 代码块', answer: '在 PR 的 Files changed 页面，点行号旁的 + → 写评论 → 插入 ```suggestion\\n修改后的代码\\n``` → 提交 Review。对方可以一键 Apply。' },
      { level: '挑战', task: '配置 branch protection rule 要求 PR 必须通过 CI 和至少 1 个 Approve 才能合并', hint: 'Settings → Branches → Add branch protection rule', answer: 'Settings → Branches → Add rule → Branch name pattern: main → 勾选：Require a pull request before merging（1 approval）+ Require status checks to pass + Require branches to be up to date。' },
    ],
  },

  // 39. PR Guidelines — PR Guidelines
  "GwDNk2HBjASr_NWIL4G3-": {
    mentalModel: 'PR Guidelines 是团队约定的"提交规矩"——规定 PR 应该多大、标题怎么写、必须包含什么信息。没有规矩的 PR 像没有封面的邮件，Review 者不知道从何看起。',
    sections: [
      { title: 'PR 大小指南', content: '- **理想大小**：200-400 行变更（Review 者 30 分钟内能看完）。\n- **不要超过 1000 行**：超过后 Review 质量显著下降，容易漏掉 bug。\n- **拆分大 PR**：按功能、层、或 commit 拆分。比如"重构 + 新功能"拆成两个 PR。\n- **原子性**：一个 PR 做一件事。不要把修 bug、重构、新功能混在一起。' },
      { title: 'PR 描述模板', content: '好的 PR 描述包含：\n1. **What**：这次改了什么（一句话说清）。\n2. **Why**：为什么要改（关联 Issue 或需求）。\n3. **How**：怎么实现的（关键设计决策）。\n4. **Testing**：怎么验证的（手动测试步骤 / 自动化测试）。\n5. **Screenshots**：UI 变更必须附截图或 GIF。\n6. **Checklist**：自查清单（测试通过、文档更新、无 TODO 遗留等）。' },
      { title: 'PR 标题规范', content: '遵循与 commit message 相同的 Conventional Commits 格式：\n- feat: add OAuth2 login support\n- fix: prevent race condition in order processing\n- refactor: extract validation logic to separate module\n- docs: update API documentation for v2 endpoints\n\n避免：\n- "Update stuff"\n- "Fix bug"\n- "Changes"（太模糊，等于没说）' },
      { title: 'PR Review 礼仪', content: '- **及时 Review**：24 小时内响应，不要让 PR 等超过 2 天。\n- **区分 blocker 和 suggestion**：必须改的用 "Request changes"，建议改的用 "nit:" 或 "suggestion:"。\n- **关注代码不关注人**：评论 "这个函数可以优化" 而不是 "你怎么写的这么烂"。\n- **Review 也是学习**：看到好的写法可以说 "Nice pattern!"。' },
    ],
    diagnosis: [
      { symptom: 'PR 挂了一周没人 Review', cause: 'PR 太大、描述不清晰、没有指定 Reviewer。', fix: '缩小 PR 范围、补充描述、明确指定 Reviewer（@mention）。团队应建立 Review 轮值制度。' },
      { symptom: 'Review 意见太多导致反复修改', cause: 'PR 做了太多不相关的事情，Review 者对每件事都有意见。', fix: '拆分成多个独立 PR，每个只做一件事。提前和 Review 者沟通设计方案。' },
    ],
    exercises: [
      { level: '基础', task: '为你自己的项目创建一个 PR 模板文件', hint: '.github/pull_request_template.md', answer: '创建 .github/pull_request_template.md，内容包括 ## What、## Why、## Testing、## Checklist 等章节。之后每次创建 PR 自动预填模板。' },
      { level: '进阶', task: '把一个 1500 行的大 PR 拆分为 3 个独立 PR', hint: '用 git cherry-pick 或重新建分支', answer: '方法1：创建 3 个新分支，分别 cherry-pick 相关的 commit。\n方法2：git reset 回起点，分 3 次 add + commit + 创建 PR。\n关键：每个 PR 独立可合并、有明确的目标。' },
    ],
  },

  // 40. GitHub Wikis — GitHub Wikis
  "lONqOqD-4slxa9B5i9ADX": {
    mentalModel: 'GitHub Wiki 是项目自带的"小型网站"——由多个 Markdown 页面组成，有侧边栏导航，适合放长篇文档（架构说明、API 文档、运维手册）。README 放不下的详细内容，放 Wiki 里。',
    handsOn: [
      { title: '启用和创建 Wiki', cmd: 'Settings → Features → 勾选 Wikis → 仓库页面点 Wiki 标签 → Create the first page', output: 'Wiki 首页（Home.md）创建成功，可以在浏览器中直接编辑和浏览多个页面。', explain: 'Wiki 默认对所有仓库可见（Public 仓库对所有人可见，Private 仓库对 collaborator 可见）。可以在 Settings 中限制只有 collaborator 能编辑。' },
      { title: 'Wiki 的结构', cmd: '在 Wiki 中创建多个页面：\n- Home.md（首页）\n- Installation.md\n- API-Reference.md\n- FAQ.md\n在 Home.md 中用 [[Installation]] 链接到其他页面', output: '右侧自动生成 "Pages" 侧边栏导航，点击页面名跳转。', explain: 'Wiki 用 [[页面名]] 语法创建内部链接（GitHub Wiki 特有的链接格式）。页面文件名中的空格会变成连字符。每个页面自动生成历史版本。' },
      { title: 'Wiki 也是一个 Git 仓库', cmd: 'git clone https://github.com/user/repo.wiki.git', output: 'Cloning into \'repo.wiki\'...\nremote: Enumerating objects: 12, done.', explain: 'Wiki 本质上是一个独立的 Git 仓库！你可以 clone 到本地、用编辑器写 Markdown、push 上去。适合习惯本地编辑的开发者。Wiki 仓库的 URL 是原仓库 URL 加 .wiki.git 后缀。' },
      { title: '自定义侧边栏', cmd: '创建 _Sidebar.md 文件，内容：\n## 导航\n- [[Home]]\n- [[安装指南]]\n- [[API 文档]]\n- [[常见问题]]', output: '所有 Wiki 页面右侧显示统一的自定义侧边栏导航。', explain: '_Sidebar.md 会显示在每个 Wiki 页面的侧边栏。类似的还有 _Footer.md（页脚）和 _Header.md（页头）。下划线开头的文件是 Wiki 的特殊文件。' },
    ],
    diagnosis: [
      { symptom: '仓库页面上看不到 Wiki 标签', cause: 'Wiki 功能没有启用。', fix: 'Settings → Features → 勾选 Wikis。' },
      { symptom: 'clone Wiki 仓库报 "Repository not found"', cause: 'Wiki 还没有任何页面（空 Wiki 不能 clone）。', fix: '先在网页端创建一个页面（至少一个 Home.md），然后再 clone。' },
    ],
    exercises: [
      { level: '基础', task: '为项目创建一个包含 3 个页面的 Wiki（Home、安装、FAQ）', hint: 'Wiki 标签 → New Page', answer: '启用 Wiki → 创建 Home.md 作为首页 → New Page 创建 Installation.md 和 FAQ.md → 在 Home 中用 [[Installation]] 和 [[FAQ]] 链接。' },
      { level: '进阶', task: '把 Wiki clone 到本地，用编辑器批量编辑后 push', hint: 'Wiki 仓库 URL 格式：repo.wiki.git', answer: 'git clone https://github.com/user/repo.wiki.git → cd repo.wiki → 编辑/新增 .md 文件 → git add + commit + push → 刷新网页查看更新。' },
    ],
  },

  // 41. Labelling Issues/PRs — Labelling Issues / PRs
  "y4DkB5NvTh41IeT0G2gr-": {
    mentalModel: 'Label（标签）就像给 Issue/PR 贴彩色便签——一眼就知道类型、优先级、模块。好的标签体系让项目从"一堆杂乱的工单"变成"有序的任务看板"。',
    handsOn: [
      { title: '创建自定义标签', cmd: 'Issues → Labels → New label → 填写名称、描述、颜色', output: '创建了标签 "priority: high"（红色 #d73a4a）\n创建了标签 "area: backend"（蓝色 #0075ca）\n创建了标签 "status: needs-review"（黄色 #fbca04）', explain: 'GitHub 默认提供 bug、enhancement、documentation 等标签。建议按类型（bug/feature/question）、模块（frontend/backend/infra）、优先级（high/medium/low）三个维度建立标签体系。' },
      { title: '给 Issue 添加标签', cmd: '打开 Issue → 右侧 Labels 区域 → 点击齿轮图标 → 勾选标签', output: 'Issue #42 被标记为 "bug" + "priority: high"，在 Issue 列表中显示彩色标签。', explain: '一个 Issue 可以有多个标签。建议每个维度至少选一个（类型 + 模块 + 优先级）。也可以用 gh 命令：gh issue edit 42 --add-label "bug,priority:high"。' },
      { title: '按标签过滤 Issue', cmd: '在 Issue 列表搜索栏输入：label:"bug" label:"priority: high" is:open', output: '只显示同时有 bug 和 priority:high 标签的 Open Issue。', explain: '多个 label: 条件是 AND 关系。用 -label:"wontfix" 排除某标签。结合 is:open/closed、assignee:、milestone: 做精细过滤。' },
      { title: '使用标签自动化（GitHub Actions）', cmd: '创建 .github/workflows/labeler.yml：\non: pull_request\njobs:\n  label:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/labeler@v5\n        with:\n          repo-token: "${{ secrets.GITHUB_TOKEN }}"', output: '当 PR 修改了特定路径的文件时，自动添加对应标签。', explain: '配合 .github/labeler.yml 定义规则，如 "frontend: [src/components/**]" 表示修改组件目录自动打 frontend 标签。省去手动分类的麻烦。' },
    ],
    diagnosis: [
      { symptom: '标签太多太乱，同一件事有多个相似标签', cause: '没有统一管理标签，多人随意创建。', fix: '定期清理标签（Settings → Labels），建立标签命名规范（如 type:bug, area:backend, priority:high），只给维护者创建标签的权限。' },
      { symptom: '新 Issue 没有标签，分类困难', cause: '没有自动标注机制。', fix: '使用 Issue 模板预设标签、或配置 actions/labeler 根据内容自动打标签、或使用 issue template 的 labels 字段。' },
    ],
    exercises: [
      { level: '基础', task: '为项目创建一套完整的标签体系（类型、模块、优先级各 3 个）', hint: 'Issues → Labels → New label', answer: '创建 type:bug(红), type:feature(绿), type:docs(蓝), area:frontend(紫), area:backend(橙), area:infra(灰), priority:high(红), priority:medium(黄), priority:low(绿)。' },
      { level: '进阶', task: '配置 actions/labeler 自动给修改了 docs/ 目录的 PR 打上 "documentation" 标签', hint: '创建 .github/labeler.yml 和 workflow', answer: '.github/labeler.yml:\ndocumentation:\n  - changed-files:\n    - any-glob-to-any-file: ["docs/**"]\n\n.github/workflows/labeler.yml 使用 actions/labeler@v5。' },
    ],
  },

  // 42. CITATION files — CITATION files
  "Ddkss13_qDJTquDHbVTVs": {
    mentalModel: 'CITATION 文件告诉别人"如何引用你的项目"——在学术论文、研究项目中尤其重要。GitHub 会自动识别 CITATION.cff 文件并在仓库页面显示 "Cite this repository" 按钮，一键生成引用格式。',
    handsOn: [
      { title: '创建 CITATION.cff 文件', cmd: '在仓库根目录创建 CITATION.cff：\ncff-version: 1.2.0\nmessage: "If you use this software, please cite it as below."\ntitle: "My Awesome Tool"\nauthors:\n  - family-names: "Zhang"\n    given-names: "San"\n    orcid: "https://orcid.org/0000-0001-2345-6789"\nversion: 1.0.0\ndate-released: 2025-01-15\nurl: "https://github.com/user/repo"', output: '仓库页面右侧出现 "Cite this repository" 按钮。', explain: 'CFF（Citation File Format）是 YAML 格式的引用描述文件。GitHub、Zenodo、Mendeley 等工具都支持解析。cff-version 指定 CFF 规范版本。' },
      { title: '使用 Cite 按钮', cmd: '点击仓库右侧的 "Cite this repository" 按钮', output: '弹出对话框，提供多种引用格式：\n- APA 格式文本\n- BibTeX 格式\n- 直接下载 .bib 文件', explain: '生成的引用格式可以直接复制到论文的 References 部分。BibTeX 格式可以导入 LaTeX 或 Zotero 等文献管理工具。' },
      { title: '关联 DOI', cmd: '在 CITATION.cff 中添加 DOI：\ndoi: "10.5281/zenodo.1234567"\nrepository-code: "https://github.com/user/repo"', output: '引用中包含 DOI 链接，指向项目的 Zenodo 归档版本。', explain: 'DOI（Digital Object Identifier）是学术引用的永久标识符。通过 Zenodo-GitHub 集成，每次 Release 自动归档并生成 DOI，确保代码版本可永久引用。' },
    ],
    diagnosis: [
      { symptom: '仓库页面没有显示 "Cite this repository" 按钮', cause: 'CITATION.cff 文件格式有误，或者文件名不对。', fix: '确保文件名严格为 CITATION.cff（大写），内容符合 CFF YAML 格式。可用 https://citation-file-format.github.io/cff-initializer-javascript/ 在线生成。' },
      { symptom: 'CFF 文件验证报错', cause: '必填字段缺失（如 cff-version、message、title）。', fix: '确保包含 cff-version、message、title 三个必填字段。用 cffconvert 工具验证：pip install cffconvert && cffconvert --validate。' },
    ],
    exercises: [
      { level: '基础', task: '为你的项目创建一个 CITATION.cff 文件', hint: '使用 cff-initializer 在线工具', answer: '访问 https://citation-file-format.github.io/cff-initializer-javascript/，填写项目信息，下载 CITATION.cff 放到仓库根目录。' },
      { level: '进阶', task: '配置 Zenodo-GitHub 集成为项目生成 DOI', hint: '在 zenodo.org 上连接 GitHub 账号', answer: '登录 zenodo.org → GitHub → 开启目标仓库的 preservation → 创建 GitHub Release → Zenodo 自动归档并生成 DOI → 将 DOI 填入 CITATION.cff。' },
    ],
  },

  // 43. Code Reviews — Code Reviews
  "xLB2fhsOm0Vu3xg_PusJB": {
    mentalModel: 'Code Review 是"代码互审"——在代码合并前让队友检查你的改动。它不只是找 bug，更是知识传递、统一风格、提升代码质量的核心实践。好的 Review 文化是高效团队的标志。',
    handsOn: [
      { title: '发起 Code Review', cmd: '创建 PR → 在 "Reviewers" 区域点击齿轮图标 → 选择 Reviewer（或通过 CODEOWNERS 自动分配）', output: 'Reviewer 收到邮件和通知：user requested your review on PR #15。\nPR 状态显示 "Review required"。', explain: '选择合适的 Reviewer 很重要：功能改动找模块负责人、架构改动找 Tech Lead、新人代码找 mentor。别随便指一个人。' },
      { title: '作为 Reviewer 审查代码', cmd: '打开 PR → Files changed 标签 → 逐文件查看 diff → 在需要讨论的行点 + 添加评论', output: '评论出现在 PR 对话时间线中，作者会收到通知。\n行内评论可以标记为 resolved 后隐藏。', explain: 'Review 关注点：1. 逻辑正确性 2. 边界条件 3. 命名清晰度 4. 性能问题 5. 安全问题 6. 测试覆盖。不要纠结格式化（那是 linter 的事）。' },
      { title: '使用 Suggestion 建议修改', cmd: '在行评论中点击 "Add a suggestion" 按钮（或手动写 ```suggestion 代码块）', output: 'PR 作者看到建议后，可以点 "Commit suggestion" 一键应用修改。\n多个 suggestion 可以 "Add suggestion to batch" 一起提交。', explain: 'Suggestion 是最友好的 Review 方式——不只是说"这里有问题"，而是直接给出建议的代码。作者一键采纳，减少来回。' },
      { title: '提交 Review 总结', cmd: '点 "Review changes" → 写总结评论 → 选择 Approve / Request changes / Comment → Submit review', output: 'PR 状态更新：\n✅ Approved — Reviewer 同意合并\n🔄 Changes requested — 需要修改后再 Review\n💬 Comment — 仅评论，不表态', explain: 'Approve 意味着你对代码质量负责。如果不确定，用 Comment 加上你的疑问。Request changes 会阻止合并（配合 branch protection）。' },
      { title: '处理 Review 意见', cmd: '收到 Review 后：逐个回复评论 → 修改代码 → push 更新 → 对已解决的评论标记 Resolve', output: 'PR 更新后 Reviewer 收到通知，可以再次 Review。所有 Resolve 的讨论折叠隐藏。', explain: '不要选择性忽略 Review 意见——即使不同意也要回复说明理由。Resolve 通常由 Reviewer 操作（确认问题已解决），也可以由作者 Resolve 后让 Reviewer 确认。' },
    ],
    diagnosis: [
      { symptom: 'PR 挂了很久没有人 Review', cause: 'PR 太大、Reviewer 太忙、没有明确的 Review 流程。', fix: '拆分 PR、在团队中建立 Review SLA（24h 内首次响应）、使用 CODEOWNERS 自动分配、必要时当面提醒。' },
      { symptom: 'Review 意见充满 nit-pick，重要问题反而被忽略', cause: '没有区分优先级，Reviewer 把精力放在风格问题上。', fix: '使用 nit: 前缀标注小建议，用 blocker: 标注必须修改的问题。配置 linter/formatter 自动处理风格问题，让 Review 聚焦逻辑。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 PR 并邀请一个人 Review，处理 Review 意见后合并', hint: '创建 PR → 指定 Reviewer → 等待 Review → 修改 → push → 合并', answer: 'git push origin feature → 创建 PR → 在 Reviewers 中添加同事 → 收到 Review → 根据意见修改代码 → push → Reviewer Approve → 合并。' },
      { level: '进阶', task: '配置 CODEOWNERS 文件让 PR 自动分配 Reviewer', hint: '创建 .github/CODEOWNERS 文件', answer: '.github/CODEOWNERS:\n# 默认 owner\n* @team-lead\n# 前端代码\n/src/components/ @frontend-team\n# 后端代码\n/src/api/ @backend-team\n# 文档\n/docs/ @tech-writer\n\n之后修改对应目录的文件会自动请求对应 owner Review。' },
      { level: '挑战', task: '组织一次团队 Code Review session，用 GitHub 的 Review 功能完成', hint: '使用 PR 的 Review 功能，配合视频会议讨论', answer: '作者创建 PR → 指定 2-3 个 Reviewer → Reviewer 各自在 24h 内完成异步 Review → 团队会议中讨论 Request changes 的评论 → 作者修改后 Resolve → 至少 1 个 Approve 后合并。' },
    ],
  },

  // 44. Saved Replies — Saved Replies
  "dQS1V0zZxeKhHhUo3STBK": {
    mentalModel: 'Saved Replies 是你在 GitHub 上的"常用语快捷回复"——把反复输入的回复模板保存下来，用一个短代码一键插入。适合维护者处理大量 Issue/PR 时使用。',
    handsOn: [
      { title: '创建 Saved Reply', cmd: 'GitHub Settings → Saved replies → Add saved reply → 填写标题和内容\n标题: "需要复现步骤"\n内容: "Thanks for reporting! Could you please provide:\n1. Steps to reproduce\n2. Expected behavior\n3. Actual behavior\n4. Your environment (OS, browser, version)"', output: 'Saved reply "需要复现步骤" created.\n快捷代码: %需要复现步骤%（自动分配一个短标题）', explain: '标题是你在评论框中输入 % 后看到的搜索关键词。内容是你实际想发送的回复文本，支持 Markdown。' },
      { title: '使用 Saved Reply', cmd: '在 Issue/PR 评论框中输入 % → 弹出 Saved Replies 列表 → 输入关键词搜索 → 选择 → 自动插入内容', output: '评论框中自动填入预设的回复内容，可以在此基础上修改后提交。', explain: '输入 % 后会显示所有 Saved Replies，可以用标题关键词快速筛选。插入后你仍然可以编辑修改。适合标准化回复但每次略有不同的场景。' },
      { title: '常用 Saved Reply 示例', cmd: '创建以下 Saved Replies：\n1. "关闭-无法复现": "I was unable to reproduce this issue. Closing for now — please reopen with more details if it persists."\n2. "重复": "This is a duplicate of #{issue_number}. Please follow that issue for updates."\n3. "感谢贡献": "Thanks for your contribution! We\'ll review this within {X} business days."', output: '每次回复时输入 % 就能快速选择。', explain: 'Saved Replies 特别适合开源项目维护者——处理 Issue 时大量回复是重复的（请求更多信息、标记重复、感谢贡献）。节省时间的同时保证回复质量一致。' },
    ],
    diagnosis: [
      { symptom: '输入 % 后没有弹出 Saved Replies 列表', cause: '还没有创建任何 Saved Reply，或者评论框不在焦点状态。', fix: '先到 Settings → Saved replies 创建回复。使用时确保评论框获得焦点后再输入 %。' },
      { symptom: 'Saved Reply 中的变量没有被替换', cause: 'Saved Replies 不支持动态变量（如 {issue_number}），只支持静态文本。', fix: '使用占位符（如 {issue_number}）在插入后手动替换为实际值。或者使用浏览器扩展 / GitHub CLI 实现更复杂的模板。' },
    ],
    exercises: [
      { level: '基础', task: '创建 3 个 Saved Replies 用于处理常见 Issue', hint: 'Settings → Saved replies', answer: 'Settings → Saved replies → 创建 "请求更多信息"、"标记重复"、"感谢贡献" 三个常用回复。' },
      { level: '进阶', task: '在一天内处理 10 个 Issue 时只用 Saved Replies 回复（对比手动输入节省多少时间）', hint: '在评论框中输入 % 搜索', answer: '对每个 Issue 用 % 插入合适的 Saved Reply，微调后提交。对比记录手动输入 vs Saved Reply 的时间差异——通常能节省 50-70% 的回复时间。' },
    ],
  },

  // 45. Collaboration on GitHub — Collaboration on GitHub
  "d_GNnB6PBINz1jxGNWAE-": {
    mentalModel: 'GitHub 协作是"多人共同编辑一本书"的完整工具链——通过 Fork/Branch + PR + Review + Issue 形成闭环。每个人在自己的分支上工作，通过 PR 汇总，通过 Review 保证质量，通过 Issue 追踪任务。',
    sections: [
      { title: '团队协作模型', content: '两种主要模式：\n1. **Shared Repository（共享仓库）**：团队成员都是 collaborator，直接在同一个仓库建分支、提 PR。适合小团队、公司内部项目。\n2. **Fork & Pull（Fork 模式）**：外部贡献者 Fork 仓库，在自己的 Fork 上开发，向上游提 PR。适合开源项目。\n\n两种模式的核心流程相同：分支 → 开发 → PR → Review → 合并。' },
      { title: 'Branch Protection Rules', content: '保护重要分支不被随意破坏：\n- **Require PR**：禁止直接 push，必须通过 PR 合并。\n- **Require approvals**：合并前需要 N 个人 Approve。\n- **Require status checks**：CI 必须通过。\n- **Require linear history**：强制 rebase/squash 合并。\n- **Include administrators**：连管理员也要遵守。\n\n配置路径：Settings → Branches → Add branch protection rule。' },
      { title: 'CODEOWNERS 文件', content: '自动分配 PR Reviewer：\n```\n# .github/CODEOWNERS\n* @default-reviewer\n*.js @frontend-team\n/api/ @backend-team\n/docs/ @doc-team\n```\n匹配规则从上到下，后面的覆盖前面的。当 PR 修改了匹配的文件，自动请求对应 owner 来 Review。' },
      { title: '协作最佳实践', content: '1. **沟通先行**：大改动先开 Issue 讨论，别直接甩一个大 PR。\n2. **小步提交**：每天 push 小 commit，避免一周一次 2000 行 PR。\n3. **及时 Review**：24h 内响应 Review 请求，不阻塞队友。\n4. **善用 Draft PR**：早期分享进度，避免别人 Review 未完成的代码。\n5. **保持 main 健康**：main 分支随时可部署，不要在 main 上开发。\n6. **写有意义的 PR 描述**：Review 者不应该需要猜你改了什么。' },
    ],
    diagnosis: [
      { symptom: '队友直接 push 到 main 分支，破坏了代码', cause: 'main 分支没有设置 branch protection。', fix: 'Settings → Branches → 为 main 添加 protection rule：Require PR + Require 1 approval + Require status checks。' },
      { symptom: '团队成员不知道某个模块该找谁 Review', cause: '没有配置 CODEOWNERS 或者没有明确模块负责人。', fix: '创建 .github/CODEOWNERS 文件，为每个模块目录指定 owner。' },
    ],
    exercises: [
      { level: '基础', task: '为 main 分支配置 protection rule，要求至少 1 个 Approve 和 CI 通过', hint: 'Settings → Branches → Add rule', answer: 'Settings → Branches → Add branch protection rule → Pattern: main → 勾选 Require a pull request（1 approval）+ Require status checks to pass → Save。' },
      { level: '进阶', task: '配置 CODEOWNERS 让前端和后端代码由不同团队 Review', hint: '.github/CODEOWNERS 文件', answer: '.github/CODEOWNERS:\n/src/components/ @alice @bob\n/src/api/ @charlie @dave\n* @tech-lead' },
      { level: '挑战', task: '模拟一个 3 人团队的完整协作流程：Issue → 分支 → PR → Review → 合并', hint: '分别扮演 3 个角色操作', answer: 'A 创建 Issue #1 → B assign 自己 → B 创建 feature 分支开发 → B 创建 PR（引用 Fixes #1）→ C Review 并 Approve → 合并 → Issue #1 自动关闭。' },
    ],
  },

  // 46. Mentions — Mentions
  "oWMaOWU06juoIuzXNe-wt": {
    mentalModel: 'Mentions（@提及）是 GitHub 上的"拍一拍"——用 @用户名 或 @团队名 在评论/Issue/PR 中通知某人，确保他们看到你的消息。就像在群聊中 @某人 一样。',
    handsOn: [
      { title: '在评论中 @ 提及用户', cmd: '在 Issue/PR 评论中写：\n"Hey @octocat, could you review this? @alice has experience with this module."', output: 'octocat 和 alice 收到 GitHub 通知（邮件 + 站内通知），显示"someone mentioned you in issue #42"。', explain: '@用户名 会创建一个指向对方 profile 的链接，同时发送通知。对方在 Notifications 中可以看到。被 @ 的人不需要是仓库 collaborator。' },
      { title: '@ 提及团队', cmd: '在评论中写：\n"cc @org/frontend-team for visibility"', output: 'frontend-team 的所有成员收到通知。', explain: '前提是该团队在 GitHub Organizations 中创建并且有可见性。@org/team-name 格式。可以在 Organizations → Teams 中管理团队。' },
      { title: '@ 提及自动补全', cmd: '在评论框中输入 @ → 弹出下拉列表显示相关用户和团队', output: '显示仓库 collaborator、最近互动过的用户、你所在的团队列表。\n选择后自动插入 @用户名。', explain: '自动补全会优先显示仓库的 collaborator 和组织中的团队。输入更多字母可以缩小范围。这个功能帮助你避免拼错用户名。' },
      { title: '在 commit message 中 @ 提及', cmd: 'git commit -m "refactor: extract helper function (cc @alice)"', output: 'git log 中显示 commit message 包含 @alice 链接。alice 收到通知。', explain: 'commit message 中的 @mention 同样会触发通知。适合在代码中标注需要某人关注但又不想创建 Issue 的场景。' },
    ],
    diagnosis: [
      { symptom: '@ 提及了某人但对方没有收到通知', cause: '对方关闭了 mention 通知（Settings → Notifications → Mentions），或者用户名拼写错误。', fix: '确认用户名拼写正确（区分大小写）。如果对方关闭了通知，可以通过其他方式（Slack、邮件）提醒他们查看。' },
      { symptom: '@ 提及团队没有生效', cause: '团队没有设置为 visible 或你没有权限 @该团队。', fix: '组织管理员需要在 Team settings 中将 Team visibility 设为 visible，并在 Settings → Notifications 中开启 team mention 通知。' },
    ],
    exercises: [
      { level: '基础', task: '在一个 Issue 中 @ 提及两个用户请求帮助', hint: '在评论框中输入 @', answer: '打开 Issue → 在评论中写 "@user1 你好，这个问题需要你帮忙看一下" "@user2 这个模块是你负责的对吗？" → 提交评论。' },
      { level: '进阶', task: '在 PR 描述中 @ 提及一个团队请求 Review', hint: 'PR 描述中写 @org/team-name', answer: '创建 PR → 在描述中写 "Requesting review from @myorg/backend-team since this changes the API layer." → 团队成员都会收到通知。' },
    ],
  },

  // 47. Reactions — Reactions
  "XstmIysIi_lWo6RzszLBt": {
    mentalModel: 'Reactions（表情回应）是 GitHub 上的"轻量表态"——不用写评论就能表达"我也遇到了"、"同意"、"好笑"等态度。一个 👍 比 "+1" 评论更省空间，也不会给作者发多余的邮件通知。',
    handsOn: [
      { title: '给 Issue 添加 Reaction', cmd: '打开 Issue → 点击 Issue 标题右边的 😊 表情按钮 → 选择反应', output: 'Issue 标题下方显示：👍 5  ❤️ 2  😄 1\n数字表示多少人给了同样的反应。', explain: 'GitHub 支持 8 种 Reaction：👍 thumbs up、👎 thumbs down、😄 laugh、🎉 hooray、😕 confused、❤️ heart、🚀 rocket、👀 eyes。每个 Reaction 可以多人点，数字自动累加。' },
      { title: '给评论添加 Reaction', cmd: '在任何评论的右上角点击 😊 按钮 → 选择反应', output: '评论下方显示：👍 3  🚀 1', explain: '对评论的 Reaction 非常适合表达"同意这个建议"（👍）或"这个 idea 太棒了"（🚀），比回复一条 "同意" 简洁得多。' },
      { title: '用 Reaction 投票', cmd: '在 Issue 描述中写 "If you also want this feature, please 👍 this issue" → 用户给 Issue 点 👍', output: '维护者可以通过 GitHub API 按 👍 数量排序 Issue，了解社区最需要的功能。', explain: '很多开源项目用 👍 数量作为功能优先级的参考。比 "我也需要" 的评论更好——不产生大量通知，统计也更方便。用 GitHub CLI 可以查询：gh issue list --sort reactions-+1。' },
      { title: '通过 API 添加 Reaction', cmd: 'curl -X POST \\\n  -H "Accept: application/vnd.github+json" \\\n  -H "Authorization: Bearer $TOKEN" \\\n  https://api.github.com/repos/owner/repo/issues/42/reactions \\\n  -d \'{"content":"thumbs_up"}\'', output: '{"id":1, "content":"thumbs_up", "user":{"login":"you"}}', explain: 'GitHub API 支持程序化添加 Reaction，适合自动化工具。content 可选值：+1, -1, laugh, confused, heart, hooray, rocket, eyes。' },
    ],
    diagnosis: [
      { symptom: '想用 Reaction 但找不到按钮', cause: 'Reaction 按钮是一个小的表情图标（😊），在 Issue/PR 标题右侧或评论的右上角，比较小不容易注意。', fix: '鼠标悬停在 Issue 标题行或评论区域时，右上角会出现一个表情图标，点击即可选择 Reaction。' },
      { symptom: '团队中有人总是用 "+1" 评论而不是 Reaction', cause: '不知道 Reaction 功能或者习惯了文字回复。', fix: '在团队中推广 Reaction 用法：建议用 👍 代替 "+1" 评论，减少通知噪音和评论列表长度。' },
    ],
    exercises: [
      { level: '基础', task: '在一个 Issue 上分别添加 👍 和 🚀 Reaction', hint: '点击 Issue 标题旁的表情按钮', answer: '打开任意 Issue → 点击标题右边的 😊 → 选择 👍 → 再次点击选择 🚀。你会看到 Reaction 计数更新。' },
      { level: '进阶', task: '用 gh CLI 查看一个仓库中 👍 最多的前 5 个 Issue', hint: 'gh issue list --sort', answer: 'gh issue list --repo owner/repo --sort reactions-+1 --limit 5\n# 显示按 👍 数量排序的前 5 个 Issue' },
    ],
  },

  // 48. Contribution Guidelines — Contribution Guidelines
  "pJ-najh7dXhhYA_0bDiR5": {
    mentalModel: 'CONTRIBUTING.md 是项目给贡献者的"入职手册"——告诉他们如何参与：代码规范、提 PR 流程、行为准则。没有这个文件，想贡献的人不知道从何下手；有了它，开源社区才能规模化运转。',
    sections: [
      { title: 'CONTRIBUTING.md 必备内容', content: '1. **欢迎语**：感谢贡献、鼓励新手参与。\n2. **如何报告 Bug**：Issue 模板、需要提供什么信息。\n3. **如何建议新功能**：先开 Issue 讨论再实现。\n4. **开发环境搭建**：clone、安装依赖、运行测试的命令。\n5. **代码规范**：命名规则、代码风格、import 顺序。\n6. **提交流程**：分支命名、commit message 格式、PR 要求。\n7. **Review 流程**：需要几个 Approve、CI 检查要求。\n8. **行为准则**：链接到 CODE_OF_CONDUCT.md。' },
      { title: '文件放置位置', content: 'CONTRIBUTING.md 放在仓库根目录、docs/ 目录或 .github/ 目录下都可以。GitHub 会在以下位置自动展示链接：\n- 创建 Issue/PR 时顶部提示\n- 仓库首页 "Contributing" 链接\n\n推荐放在根目录或 .github/ 目录（.github/ 目录可以让多个仓库共享）。' },
      { title: '好的 CONTRIBUTING.md 示例要素', content: '- 第一步就告诉读者"如何运行项目"（30 秒内能跑起来）\n- 用 Checklist 格式列出 PR 提交前的自查项\n- 明确说明"小改动直接提 PR，大改动先开 Issue"\n- 提供 Good First Issue 标签指引新手\n- 说明代码审查的 SLA（如 "48h 内会收到首次反馈"）\n- 感谢贡献者（在 README 或 CONTRIBUTORS.md 中列出）' },
      { title: '配套文件', content: '- **CODE_OF_CONDUCT.md**：社区行为准则（用 Contributor Covenant 模板）\n- **SECURITY.md**：安全漏洞报告流程（不要公开披露漏洞）\n- **LICENSE**：开源许可证\n- **.github/ISSUE_TEMPLATE/**：Issue 模板\n- **.github/PULL_REQUEST_TEMPLATE.md**：PR 模板\n- **.github/CODEOWNERS**：自动分配 Reviewer' },
    ],
    diagnosis: [
      { symptom: '收到很多低质量 PR（不符合规范、重复工作）', cause: '没有 CONTRIBUTING.md 或内容太模糊，贡献者不知道规矩。', fix: '写详细的 CONTRIBUTING.md，明确分支命名、commit 格式、PR 大小限制。用 Issue 模板要求先讨论再编码。' },
      { symptom: '创建 Issue 时 GitHub 没有提示 "please review our contributing guidelines"', cause: 'CONTRIBUTING.md 不在 GitHub 识别的位置。', fix: '确保文件在仓库根目录、docs/ 或 .github/ 目录下，文件名为 CONTRIBUTING.md（不区分大小写）。' },
    ],
    exercises: [
      { level: '基础', task: '为你的项目写一个 CONTRIBUTING.md 包含开发环境搭建、提交流程、PR 要求', hint: '参考知名开源项目的 CONTRIBUTING.md', answer: '# Contributing\n\n## Getting Started\n1. Fork & clone\n2. `npm install`\n3. `npm test`\n\n## Pull Request Process\n1. Create a feature branch from `main`\n2. Commit message follows Conventional Commits\n3. All tests pass\n4. Request review from a maintainer\n\n## Code of Conduct\nPlease read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).' },
      { level: '进阶', task: '添加 SECURITY.md 定义安全漏洞报告流程', hint: '使用 GitHub 的 private vulnerability reporting 功能', answer: '创建 SECURITY.md：\n# Security Policy\n## Reporting a Vulnerability\nPlease do NOT open a public issue.\nInstead, use GitHub\'s private vulnerability reporting:\nSecurity → Report a vulnerability\nWe will respond within 48 hours.' },
    ],
  },

  // 49. Clean Git History — Clean Git History
  "i3AbARgzQtxtlB-1AS8zv": {
    mentalModel: 'Clean Git History 就像"整理过的笔记本"——开发时你可以随便写草稿（WIP commit），但合并前整理成清晰的章节，让未来的队友（和自己）能通过 git log 理解项目的演进脉络。',
    handsOn: [
      { title: '交互式 rebase 整理 commit', cmd: 'git log --oneline -5\n# abc1234 WIP\n# def5678 fix typo\n# ghi9012 add validation\n# jkl3456 WIP\n# mno7890 more fixes\ngit rebase -i HEAD~5', output: 'pick abc1234 WIP\npick def5678 fix typo\npick ghi9012 add validation\npick jkl3456 WIP\npick mno7890 more fixes\n\n# 编辑为：\npick abc1234 WIP\nsquash def5678 fix typo\nsquash ghi9012 add validation\nsquash jkl3456 WIP\nsquash mno7890 more fixes', explain: '交互式 rebase 可以 squash（合并）、reword（改 message）、reorder（调序）、drop（删除）commit。把这 5 个 commit 合并成一个有意义的 commit："feat: add input validation with error messages"。' },
      { title: 'Squash 后写好的 commit message', cmd: 'squash 后 Git 打开编辑器，显示所有 commit message 的合并。\n替换为：\nfeat: add comprehensive input validation\n\n- Add email format validation\n- Add password strength check\n- Display inline error messages\n- Add unit tests for edge cases', output: '[feature 1234567] feat: add comprehensive input validation\n 8 files changed, 150 insertions(+), 30 deletions(-)', explain: '合并多个 commit 后，写一个统一的、描述性的 message，概括所有变更。这就是 Clean History 的精髓——外部只看到一个干净的 commit。' },
      { title: '使用 fixup commit 快速整理', cmd: 'git commit --fixup=abc1234\n# ... 继续开发 ...\ngit commit --fixup=abc1234\ngit rebase -i --autosquash main', output: 'Git 自动把所有 fixup commit 移到它们对应的 commit 下方并标记为 fixup，无需手动排列。', explain: '--fixup 标记这个 commit 是对 abc1234 的修补。--autosquash 自动把 fixup commit 放到正确位置。这是比手动 rebase 更高效的整理方式。配合 git config rebase.autoSquash true 可以默认启用。' },
      { title: 'PR 合并时 Squash', cmd: '在 GitHub PR 页面选择 "Squash and merge"', output: '所有 PR 中的 commit 被压缩为一个 commit 合并到 main。\nSquash commit message 默认是所有 commit message 的合并，你可以编辑。', explain: 'Squash merge 是最简单的 Clean History 策略：不管 PR 里有多少 WIP commit，合并到 main 只有一个干净的 commit。适合不关心分支历史的团队。' },
    ],
    diagnosis: [
      { symptom: 'git log 充满 "WIP", "fix", "oops", "wip wip" 等无意义 commit', cause: '开发时频繁小 commit 但没有在合并前整理。', fix: '用 git rebase -i 合并和重命名 commit，或在 PR 中使用 Squash merge。养成合并前 review 自己 commit 历史的习惯。' },
      { symptom: 'rebase 后 push 报错 "rejected (non-fast-forward)"', cause: 'rebase 改写了历史，远端不允许覆盖。', fix: 'git push --force-with-lease（比 --force 安全，会检查远端是否有新 commit）。注意：永远不要对公共分支（main）force push。' },
    ],
    exercises: [
      { level: '基础', task: '把 4 个 WIP commit 用 rebase -i 合并为 1 个有意义的 commit', hint: 'git rebase -i HEAD~4', answer: 'git rebase -i HEAD~4\n# 第一个 pick 保留，后三个改为 squash\n# 写新的 commit message\n# 保存退出\n# git push --force-with-lease' },
      { level: '进阶', task: '使用 fixup commit 在 3 次开发迭代中保持 commit 干净', hint: 'git commit --fixup=<hash>', answer: 'git commit -m "feat: add search"\n# ... 修改 ...\ngit commit --fixup=HEAD  # 修补上一个 commit\n# ... 更多开发 ...\ngit commit --fixup=<search-commit-hash>\ngit rebase -i --autosquash main' },
      { level: '挑战', task: '配置 Git alias 让 fixup 更方便：git fixup 自动 fixup 到上一个 commit', hint: 'git config alias', answer: 'git config --global alias.fixup "commit --fixup=HEAD"\ngit config --global alias.squash "commit --squash=HEAD"\n# 之后用 git fixup 代替 git commit --fixup=HEAD' },
    ],
  },

  // 50. Git Stash Basics — Git Stash Basics
  "X9K3PBpGsMoXkJsKdJPI7": {
    mentalModel: 'git stash 是"临时寄存柜"——正在改代码改到一半，突然要切分支修 bug？stash 把你的修改暂存起来，切完分支再取回来继续干。就像把桌上正在做的作业塞进抽屉，做完别的事再拿出来。',
    handsOn: [
      { title: '暂存当前修改', cmd: 'git status\n# modified: src/app.js\n# modified: src/utils.js\ngit stash', output: 'Saved working directory and index state WIP on main: abc1234 Add login\n# 工作区变干净了，修改被存起来了', explain: 'git stash 把工作区和暂存区的修改保存到栈中。之后工作区回到上次 commit 的干净状态。可以多次 stash，形成栈结构（后进先出）。' },
      { title: '查看 stash 列表', cmd: 'git stash list', output: 'stash@{0}: WIP on main: abc1234 Add login\nstash@{1}: WIP on feature: def5678 Update navbar\nstash@{2}: On main: my-custom-stash-message', explain: 'stash 按时间排列，stash@{0} 是最新的。每个 stash 记录了基于哪个 commit 创建的。给 stash 起个名字方便后续找到：git stash save "working on login bug"。' },
      { title: '取回 stash', cmd: 'git stash pop', output: 'On branch main\nChanges not staged for commit:\n  modified: src/app.js\n  modified: src/utils.js\nDropped stash@{0} (abc1234def5678)', explain: 'pop 把最近的 stash 应用到当前工作区并从栈中删除。如果有冲突会提示你手动解决。如果不想删除 stash（想保留备份），用 git stash apply（应用但不删除）。' },
      { title: 'stash 包含未追踪文件', cmd: 'git stash -u', output: 'Saved working directory and index state WIP on main: abc1234\n# 包含新创建但未 git add 的文件', explain: '默认 stash 只保存已追踪文件的修改。-u（--include-untracked）会连新文件一起暂存。-a（--all）还会包含 .gitignore 中的文件（一般不需要）。' },
      { title: '从 stash 创建新分支', cmd: 'git stash branch feature-from-stash stash@{0}', output: 'Switched to a new branch \'feature-from-stash\'\n# stash@{0} 的内容已应用到新分支，并从栈中删除', explain: '如果 stash 是基于旧的 commit 创建的，直接 pop 可能冲突。用 branch 命令直接从 stash 创建一个新分支，避免冲突。' },
      { title: '查看 stash 内容', cmd: 'git stash show stash@{0} -p', output: 'diff --git a/src/app.js b/src/app.js\nindex abc..def 100644\n--- a/src/app.js\n+++ b/src/app.js\n@@ -10,6 +10,8 @@\n+  new line of code', explain: '不加 -p 只显示文件列表，加 -p 显示完整 diff。帮你确认 stash 里到底是什么再决定要不要 pop。' },
    ],
    diagnosis: [
      { symptom: 'git stash pop 报 "CONFLICT (content): Merge conflict"', cause: '当前分支的代码和 stash 中的修改有冲突。', fix: '手动解决冲突（和 merge 冲突一样的标记），或者先 git stash show 确认内容，考虑用 git stash branch 创建新分支来避免冲突。' },
      { symptom: 'stash pop 后发现文件被意外覆盖', cause: '你可能 pop 了错误的 stash（stash@{0} 不是你想要的）。', fix: '先 git stash list 确认，用 git stash show stash@{N} 查看内容，然后 git stash apply stash@{N} 应用特定的 stash（apply 不会删除，更安全）。' },
    ],
    exercises: [
      { level: '基础', task: '修改文件 → stash → 切换到另一个分支 → stash pop 恢复修改', hint: 'git stash → git checkout → git stash pop', answer: 'echo "new code" >> file.txt\ngit stash\ngit checkout other-branch\ngit stash pop\n# 修改恢复到工作区' },
      { level: '进阶', task: '创建 3 个 stash，只 pop 中间那个（stash@{1}）', hint: 'git stash apply stash@{N}', answer: 'git stash save "first"\n# 修改 → git stash save "second"\n# 修改 → git stash save "third"\ngit stash apply stash@{1}  # 应用 "second"，不删除\ngit stash drop stash@{1}  # 手动删除' },
      { level: '挑战', task: '用 stash 实现"在错误的分支上开发了一半，安全转移到正确的分支"', hint: 'stash → checkout 正确分支 → stash pop', answer: '# 在 wrong-branch 上开发了一半\ngit stash\ngit checkout correct-branch\ngit stash pop\n# 如果冲突，手动解决后 git add\ngit commit -m "feat: add new feature"' },
    ],
  },

  // 51. Linear 与 Non-Linear 对比 — Linear vs Non-Linear
  "lXC07j6dOa3rQixY1P-Ob": {
    mentalModel: 'Linear history 是"单行铁路"——所有 commit 排成一条直线，一目了然；Non-linear history 是"地铁网络"——有分支、有交汇，保留完整的开发上下文。两种没有绝对好坏，取决于团队对"历史清晰度 vs 完整信息"的取舍。',
    sections: [
      { title: 'Linear History（线性历史）', content: '**特点**：git log 看起来像一条直线，没有分叉。\n**实现方式**：\n- rebase 功能分支到 main 最新位置再合并\n- 使用 "Rebase and merge" 或 "Squash and merge"\n- 禁止 fast-forward 以外的合并方式\n\n**优点**：\n- git log --oneline 极其清晰\n- git bisect 可以正常工作（二分查找 bug）\n- 回滚简单（git revert 不会产生复杂冲突）\n\n**缺点**：\n- 丢失了"实际开发顺序"信息\n- 大功能的所有 commit 被压成一个，无法 cherry-pick 其中一步\n- rebase 改写 hash，不能对已 push 的公共分支使用' },
      { title: 'Non-Linear History（非线性历史）', content: '**特点**：git log --graph 显示真实的分支拓扑，有 merge commit。\n**实现方式**：\n- 使用 "Merge commit" 方式合并 PR\n- 保留所有分支和 merge commit\n\n**优点**：\n- 完整记录开发过程（谁在什么时间做了什么）\n- merge commit 清楚地标记"这里合入了一个功能"\n- 适合大型项目（如 Linux kernel）追踪复杂的分支交互\n\n**缺点**：\n- git log 变成蜘蛛网，难以阅读\n- git bisect 可能跳到 merge commit 上\n- 回滚一个功能需要 revert merge commit（复杂）' },
      { title: '如何选择', content: '**小团队/初创**：Linear（Squash merge）。简单、清晰、避免混乱。\n**中型团队**：Linear（Rebase merge）。保留 commit 粒度但保持线性。\n**大型项目**：Non-linear（Merge commit）。需要完整上下文，多分支并行开发。\n\n**常见策略**：\n- main 分支保持 linear（squash 或 rebase merge）\n- 功能分支内部允许 non-linear（开发过程中随意 commit）\n- Release 分支用 merge commit 保留上下文' },
      { title: 'git log 可视化对比', content: '**Linear**:\n```\n* abc1234 feat: add payment\n* def5678 feat: add cart\n* ghi9012 feat: add product list\n```\n\n**Non-linear**:\n```\n*   abc1234 Merge pull request #5\n|\\\n| * def5678 fix: handle edge case\n| * ghi9012 feat: add validation\n|/\n* jkl3456 feat: add product list\n```' },
    ],
    diagnosis: [
      { symptom: 'git log 像蜘蛛网，看不出项目演进脉络', cause: '使用了 non-linear 策略但没有约束分支模型。', fix: '统一使用 Squash merge 或 Rebase merge 保持 main 分支线性。用 git log --first-parent --oneline 只看主线。' },
      { symptom: 'Squash merge 后无法回滚某个功能的某一步', cause: 'Squash 把所有 commit 压成一个，无法 cherry-pick 其中的子变更。', fix: '改用 Rebase merge（保留 commit 粒度但保持线性），或者在功能分支上也有意义地组织 commit。' },
    ],
    exercises: [
      { level: '基础', task: '用 rebase 方式合并一个功能分支，使 main 保持线性', hint: 'git rebase main 后再 fast-forward merge', answer: 'git checkout feature\ngit rebase main\ngit checkout main\ngit merge feature  # fast-forward，无 merge commit\ngit log --oneline  # 线性历史' },
      { level: '进阶', task: '对比同一项目用 Squash merge 和 Merge commit 合并后的 git log 差异', hint: '创建两个相同的功能分支，分别用两种方式合并', answer: '创建两个相同分支 → 分支A: Squash merge → 分支B: Merge commit → git log --graph --oneline 对比：A 是直线，B 有分叉和 merge commit。' },
      { level: '挑战', task: '在 Linear history 上用 git bisect 找到一个引入 bug 的 commit', hint: 'git bisect start → good/bad → 自动二分', answer: 'git bisect start\ngit bisect bad HEAD\ngit bisect good <last-known-good>\n# Git 自动跳到中间 commit\n# 测试 → git bisect good/bad\n# 重复直到找到引入 bug 的 commit\n# Linear history 让 bisect 更可靠（不会跳到 merge commit）' },
    ],
  },

  // 52. GitHub Projects — GitHub Projects
  "DzFJDdqnSy5GeGHWOpcVo": {
    mentalModel: 'GitHub Projects 是 GitHub 内置的"轻量项目管理看板"——把 Issue 和 PR 变成看板上的卡片，用拖拽管理任务状态。类似 Trello/Jira 但直接在 GitHub 内，和代码仓库深度集成。',
    handsOn: [
      { title: '创建 GitHub Project', cmd: 'GitHub 页面 → Projects 标签 → New project → 选择模板（Board / Table / Roadmap） → 命名 → Create', output: '创建了 Project "Q2 Roadmap"\n默认视图：Board 视图，包含 Todo / In Progress / Done 三列。\n可以添加 Issue、PR、草稿笔记作为卡片。', explain: 'GitHub Projects 有三种模板：Board（看板）、Table（表格）、Roadmap（甘特图）。Board 最常用，适合 Scrum/Kanban 工作流。一个 Organization 可以创建多个 Project。' },
      { title: '添加 Issue 到 Project', cmd: '方法1：在 Issue 页面右侧 → Projects → 选择 Project\n方法2：在 Project 页面 → Add item → 搜索 Issue 编号\n方法3：在 Issue 评论中写 /project add <project-name>', output: 'Issue #42 出现在 Project 看板的 Todo 列中。\n卡片显示 Issue 标题、标签、指派人和状态。', explain: 'Issue 被添加到 Project 后，在 Issue 页面会显示关联的 Project。一个 Issue 可以属于多个 Project。卡片会自动同步 Issue 的状态变更。' },
      { title: '自定义字段和视图', cmd: 'Project 设置 → 添加自定义字段：\n- Priority（单选：High/Medium/Low）\n- Sprint（迭代：Sprint 1/Sprint 2）\n- Estimate（数字：工时估算）\n- Due date（日期）', output: 'Table 视图显示自定义列。可以按字段排序、过滤、分组。\nBoard 视图可以按 Priority 分组显示。', explain: '自定义字段让 Project 适应你的工作流。常用字段：Priority（优先级）、Sprint（迭代）、Story Points（估点）、Due Date（截止日）。字段类型支持文本、数字、单选、多选、日期、迭代。' },
      { title: '自动化工作流', cmd: 'Project 设置 → Workflows → 启用内置自动化：\n- "Item added to project" → 自动设为 Todo\n- "Issue closed" → 自动移到 Done\n- "PR merged" → 自动标记为 Done', output: '当 Issue 被关闭时，Project 卡片自动从 In Progress 移到 Done。\n当 PR 被合并时，自动更新状态。', explain: 'GitHub Projects 内置了 Issue/PR 状态联动。也可以创建自定义 workflow：当某字段变更时自动更新其他字段。这减少了手动拖拽卡片的工作。' },
      { title: 'Roadmap 视图（甘特图）', cmd: 'Project → 添加视图 → 选择 Roadmap → 配置 Date 字段和 Duration', output: '显示甘特图视图，每个 Issue 按时间线排列。\n可以直观看到任务重叠、截止日期和进度。', explain: 'Roadmap 视图需要自定义 Date 字段（Start date / End date）。适合展示季度规划、发布计划。支持拖拽调整日期范围。' },
    ],
    diagnosis: [
      { symptom: '仓库页面看不到 Projects 标签', cause: 'Projects 功能没有启用，或者你在 Organization 级别创建 Project 而不是仓库级别。', fix: 'Settings → Features → 勾选 Projects。注意：新版 Projects（Projects V2）主要在 Organization 或用户级别管理，不在单个仓库中。' },
      { symptom: 'Issue 关闭后没有自动移到 Done 列', cause: '没有启用 Project 的自动化 workflow。', fix: 'Project → Settings（⚙️）→ Workflows → 启用 "When an issue is closed, move to Done" 或创建自定义自动化规则。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 Board 类型的 Project，添加 3 个 Issue 到不同列', hint: 'Projects → New project → Board template', answer: 'Projects → New project → Board → 创建 3 个 Issue → 分别添加到 Todo、In Progress、Done 列。' },
      { level: '进阶', task: '配置自定义字段（Priority、Sprint）并创建一个按 Priority 分组的 Table 视图', hint: 'Project settings → Add field', answer: 'Project → ⚙️ Settings → 添加 Priority（Single select: High/Medium/Low）和 Sprint（Iteration）字段 → New view → Table → Group by Priority。' },
      { level: '挑战', task: '用 GitHub Projects + 自动化搭建一个完整的 Sprint 看板', hint: '结合 Iteration 字段和 workflow 自动化', answer: '1. 创建 Project → 添加 Iteration 字段（2 周一个 Sprint）\n2. 配置 workflow：Issue closed → Done\n3. 创建 Sprint backlog 视图（按 Iteration 过滤）\n4. Sprint planning：把 Issue 分配到当前 Sprint\n5. Daily：看板站会跟踪 In Progress 列' },
    ],
  },

};
