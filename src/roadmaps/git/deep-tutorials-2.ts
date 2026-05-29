import type { DeepTutorial } from '../deep-types';

export const GIT_DEEP_TUTORIALS_2: Record<string, DeepTutorial> = {
  // ─────────────────────────────────────────────────────────────
  // 53. Working in a Team — 团队协作
  // ─────────────────────────────────────────────────────────────
  "yMx3LdadPz4g25CL3N8da": {
    mentalModel: '团队协作就像多人接力写一本小说——每人写一章，用分支隔离草稿，用 PR 互相审稿，用 main 分支装订成书。Git 提供的是让多人同时创作而不互相覆盖的协议。',
    sections: [
      { title: '团队协作的核心工作流', content: '1. 从 main 创建功能分支：git checkout -b feature/login\n2. 在功能分支上开发并频繁 commit\n3. push 到远程：git push origin feature/login\n4. 创建 Pull Request，请求队友 Review\n5. Review 通过后合并到 main\n6. 删除功能分支\n\n这条流程保证：每个人在自己的分支上工作互不干扰，代码合并前必须经过至少一人审核，main 分支始终保持可发布状态。' },
      { title: '分支命名规范', content: '好的分支名一眼看出用途：\n• feature/user-auth — 新功能\n• fix/login-crash — 修 bug\n• refactor/api-layer — 重构\n• docs/readme-update — 文档\n• chore/upgrade-deps — 杂务\n\n避免：my-branch、test、wip、asdf。团队统一前缀后，git branch --list \'feature/*\' 就能过滤出所有功能分支。' },
      { title: '避免踩坑的协作规则', content: '1. 开始工作前先 git pull —— 你的本地 main 可能落后远程\n2. 不要直接在 main 上开发 —— 所有改动走分支 + PR\n3. 小步提交、频繁推送 —— 别攒一周的改动一次 push\n4. 合并前先 rebase main —— 保持线性历史、减少冲突\n5. 解决冲突后让队友确认 —— 你可能误解了别人的代码意图\n6. 不要 force push 共享分支 —— 会覆盖队友的提交' },
      { title: '沟通工具与 Git 的配合', content: '• PR 描述中 @mention 相关队友，确保通知到位\n• 用 Fixes #42 关联 Issue，合并时自动关闭\n• 用 Draft PR 分享早期进度，征求设计意见\n• 用 Review 的 Request Changes 明确标记"需要你改"\n• CI 状态检查（绿色勾）确认测试通过后再合并' },
    ],
    diagnosis: [
      { symptom: 'push 时报 "rejected (non-fast-forward)"，你的分支落后于远程', cause: '队友已经 push 了新 commit 到同一分支，你的本地版本落后了。', fix: 'git pull --rebase origin <branch> 拉取远程更新并将你的 commit 重放到最新之上，然后重新 push。' },
      { symptom: '合并到 main 后才发现引入了 bug', cause: 'PR Review 不够仔细，或者 CI 测试覆盖不足。', fix: '立即 git revert <merge-commit> 撤销合并，修复后重新提 PR。长期方案：加强 CI 测试、要求至少两人 Approve。' },
      { symptom: '队友抱怨你的 PR 太大无法 Review', cause: '一个 PR 包含了太多改动（超过 400 行）。', fix: '拆分为多个独立 PR，每个只做一件事。用 git cherry-pick 或重新建分支来拆分。' },
    ],
    exercises: [
      { level: '基础', task: '模拟一次完整的团队协作流程：创建功能分支、修改、push、创建 PR', hint: 'git checkout -b + push + GitHub 创建 PR', answer: 'git checkout -b feature/navbar → 修改文件 → git add + commit → git push origin feature/navbar → GitHub 上创建 PR → 指定 Reviewer → Review 通过后合并' },
      { level: '进阶', task: '在队友 push 了 3 个 commit 到 main 后，把你的功能分支 rebase 到最新 main 上', hint: 'git fetch + git rebase', answer: 'git fetch origin → git checkout feature → git rebase origin/main → 解决冲突（如果有）→ git push --force-with-lease origin feature' },
      { level: '挑战', task: '设计一套适合 5 人团队的 Git 工作流规范文档', hint: '包含分支策略、命名规范、PR 要求、Review 流程', answer: '包含：1) 分支策略（feature/fix/refactor 前缀）2) main 受保护、必须走 PR 3) PR 必须 1 人 Approve + CI 通过 4) commit message 用 Conventional Commits 5) 每天 rebase main 至少一次 6) PR 不超过 400 行' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 54. HEAD — HEAD 指针
  // ─────────────────────────────────────────────────────────────
  "V8nLIvddyOKTzEjOJX5GW": {
    mentalModel: 'HEAD 是 Git 的"你在这里"标记——一个指向当前所在分支（或 commit）的指针。切换分支就是移动 HEAD，它决定了你的工作区显示哪个版本的代码。',
    handsOn: [
      { title: '查看 HEAD 当前指向', cmd: 'cat .git/HEAD', output: 'ref: refs/heads/main', explain: 'HEAD 文件的内容是 ref: refs/heads/main，表示 HEAD 指向 main 分支。main 分支再指向最新的 commit。这是一个"间接引用"——HEAD → main → commit hash。' },
      { title: '用 git symbolic-ref 查看 HEAD', cmd: 'git symbolic-ref HEAD', output: 'refs/heads/main', explain: 'symbolic-ref 解析 HEAD 的符号引用，直接告诉你当前在哪个分支。比 cat .git/HEAD 更规范。' },
      { title: '切换分支时 HEAD 的移动', cmd: 'git checkout feature-login && cat .git/HEAD', output: 'Switched to branch \'feature-login\'\nref: refs/heads/feature-login', explain: 'checkout 把 HEAD 从 main 改为指向 feature-login，同时更新工作区文件到该分支的版本。HEAD 始终跟着你走。' },
      { title: 'HEAD~ 和 HEAD^ 的含义', cmd: 'git log --oneline HEAD~3..HEAD', output: 'a1b2c3d feat: add login form\ne4f5g6h fix: validate email\ni7j8k9l refactor: extract UserService', explain: 'HEAD~3 表示 HEAD 往前数 3 个 commit（即曾祖父）。HEAD^ 等价于 HEAD~1（父 commit）。HEAD~3..HEAD 表示最近 3 个 commit 的范围。' },
      { title: '用 HEAD 引用做操作', cmd: 'git diff HEAD~1 HEAD --stat', output: ' src/auth/login.ts | 15 +++++++++------\n 1 file changed, 9 insertions(+), 6 deletions(-)', explain: 'HEAD~1 是上一个 commit，HEAD 是当前 commit。这个命令对比最近两次提交的文件变更。--stat 显示摘要而非完整 diff。' },
    ],
    diagnosis: [
      { symptom: 'git log 报 "fatal: your current branch \'xxx\' does not have any commits yet"', cause: '你刚创建了一个新分支但还没做任何 commit，HEAD 指向一个空分支。', fix: '先做一个 commit：git add . && git commit -m "Initial commit"。之后 HEAD 就有了有效的指向。' },
      { symptom: '执行 git checkout 后文件"消失了"', cause: 'HEAD 切换到了另一个分支，该分支没有你当前分支新增的文件。文件没消失，只是工作区切换了版本。', fix: '切回原来的分支就能看到：git checkout <原分支名>。用 git stash 可以在切换前暂存未提交的改动。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前 HEAD 指向哪个分支，然后查看 HEAD 的父 commit 的 hash', hint: 'cat .git/HEAD + git rev-parse', answer: 'cat .git/HEAD\n# 输出 ref: refs/heads/main\ngit rev-parse HEAD~1\n# 输出父 commit 的完整 hash' },
      { level: '进阶', task: '用 HEAD 引用查看最近 5 个 commit 的文件变更统计', hint: 'git log --stat + HEAD~5', answer: 'git log --stat HEAD~5..HEAD\n# 或 git log --stat -5' },
      { level: '挑战', task: '解释 HEAD、ORIG_HEAD、FETCH_HEAD、MERGE_HEAD 四个特殊引用的区别和用途', hint: '它们分别在不同操作中被设置', answer: 'HEAD = 当前所在的分支/commit。\nORIG_HEAD = 危险操作（merge/rebase/reset）前的 HEAD 位置，用于回退。\nFETCH_HEAD = 最近一次 git fetch 拉取的远程分支 tip。\nMERGE_HEAD = 正在合并的分支 tip（merge 进行中时存在）。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 55. History — 历史
  // ─────────────────────────────────────────────────────────────
  "zen3RRdK9_nPAYgicRoHk": {
    mentalModel: 'Git 的历史是一条由 commit 串成的"时间线"——每个 commit 是一个带时间戳、作者、说明的快照。理解历史让你能回答"这段代码什么时候变成这样的"和"谁改了什么"。',
    handsOn: [
      { title: '查看完整历史', cmd: 'git log', output: 'commit a1b2c3d4e5f6... (HEAD -> main, origin/main)\nAuthor: Tu <tu@example.com>\nDate:   Mon May 26 14:30:00 2025 +0800\n\n    feat: add user authentication\n\ncommit b2c3d4e5f6a7...\nAuthor: Li <li@example.com>\nDate:   Sun May 25 10:00:00 2025 +0800\n\n    fix: correct pagination offset', explain: 'git log 按时间倒序显示每个 commit 的完整 hash、作者、日期和 message。按 q 退出。' },
      { title: '精简历史视图', cmd: 'git log --oneline --graph -20', output: '* a1b2c3d feat: add user auth\n* e4f5g6h fix: pagination offset\n| * i7j8k9l (feature/search) add search bar\n|/  \n* l0m1n2o refactor: API layer', explain: '--oneline 把每个 commit 压缩成一行（短 hash + message 第一行）。--graph 用 ASCII 画出分支合并关系。-20 只显示最近 20 条。' },
      { title: '查看某个文件的历史', cmd: 'git log --oneline -- src/auth/login.ts', output: 'a1b2c3d feat: add OAuth2 support\nc4d5e6f fix: handle empty password\nf7g8h9i feat: initial login form', explain: '在 git log 后面加 -- <文件路径> 只显示修改过该文件的 commit。这对于理解"这个文件为什么变成现在这样"非常有用。' },
      { title: '搜索历史中的关键词', cmd: 'git log --grep="pagination" --oneline', output: 'e4f5g6h fix: correct pagination offset\np1q2r3s feat: add pagination to user list', explain: '--grep 在 commit message 中搜索关键词。加 --all 搜索所有分支。加 -i 忽略大小写。这是找到"那个改了分页的 commit"的最快方式。' },
      { title: '查看某个作者的提交', cmd: 'git log --author="Tu" --oneline --since="2025-05-01"', output: 'a1b2c3d feat: add user auth\nx1y2z3a feat: add dashboard', explain: '--author 按作者过滤，--since 按时间过滤。组合使用可以快速看到"这个月我做了什么"。' },
    ],
    diagnosis: [
      { symptom: 'git log 显示了太多 commit，找不到想要的那个', cause: '大型项目历史很长，默认显示所有 commit。', fix: '用 --oneline 压缩显示，--grep 搜索关键词，--since/--until 限定时间范围，-n 限制数量。组合使用效率最高。' },
      { symptom: 'git log 某个文件时看不到它的"前世"（重命名之前的历史）', cause: '文件被重命名后，git log 默认不跟踪重命名前的历史。', fix: 'git log --follow -- <新文件名> 会跟踪文件的重命名历史，显示重命名前后的所有 commit。' },
    ],
    exercises: [
      { level: '基础', task: '查看最近 10 个 commit 的精简视图（一行一个 commit 带分支图）', hint: 'git log --oneline --graph', answer: 'git log --oneline --graph -10' },
      { level: '进阶', task: '找到项目中修改次数最多的文件，并查看它的完整历史', hint: 'git log --stat + git log -- <file>', answer: 'git log --stat --pretty=format: | sort | uniq -c | sort -rn | head -5\n# 找到文件后：\ngit log --oneline -- <那个文件>' },
      { level: '挑战', task: '用 git log 找出项目中所有合并提交（merge commit），并解释它们的特征', hint: 'merge commit 有两个 parent', answer: 'git log --oneline --merges\n# merge commit 的特征：有两个 parent（两条线汇聚），message 通常是 "Merge branch \'xxx\' into yyy"' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 56. Project Planning — 项目规划
  // ─────────────────────────────────────────────────────────────
  "q0zy_hXav5iXw8LpGVJVd": {
    mentalModel: '项目规划是把"想做什么"拆成"一步步怎么做"——用 Milestone 划分阶段、用 Issue 拆分任务、用 Label 标记优先级。Git 本身只管版本，但 GitHub 提供了完整的规划工具链。',
    sections: [
      { title: 'Milestone（里程碑）', content: 'Milestone 是一组相关 Issue/PR 的集合，有截止日期和完成进度。\n\n典型用法：\n• v1.0 Release — 包含 15 个 Issue，完成 80%\n• Sprint 2025-W22 — 本周要完成的任务\n• Beta Launch — 上线前必须解决的问题\n\n创建方式：Issues → Milestones → New milestone。给每个 Issue 分配 Milestone 后，进度条自动更新。' },
      { title: 'Issue 任务拆分', content: '把大功能拆成小 Issue 是项目规划的核心技能：\n\n❌ 一个 Issue："实现用户系统"\n✅ 拆分为：\n  - #10 用户注册 API\n  - #11 登录和 JWT 鉴权\n  - #12 密码重置流程\n  - #13 用户 Profile 页面\n  - #14 第三方 OAuth 登录\n\n每个 Issue 独立可交付、可估时、可分配。用 Task List（- [ ] #10）追踪依赖关系。' },
      { title: 'GitHub Projects（项目看板）', content: 'GitHub Projects 是类 Trello/Jira 的项目管理工具：\n• Board 视图：拖拽卡片在列之间移动（Todo → In Progress → Done）\n• Table 视图：类似电子表格，批量编辑字段\n• 自定义字段：优先级、估时、迭代号\n• 自动化：Issue 关闭时自动移到 Done 列\n\n创建方式：仓库页面 → Projects 标签 → New project。' },
      { title: '规划的最佳实践', content: '1. 先列 Milestone（大目标），再拆 Issue（小任务）\n2. 每个 Issue 有明确的 Definition of Done\n3. 用 label 区分类型（bug/feature/chore）和优先级（P0/P1/P2）\n4. 定期（每周）Review Milestone 进度，调整优先级\n5. 关联 PR 和 Issue，让代码变更可追溯到需求\n6. 不要创建太多不切实际的 Milestone —— 3 个月内的规划最靠谱' },
    ],
    diagnosis: [
      { symptom: 'Issue 列表有几百个 open issue，没人知道该做什么', cause: '没有优先级标签、没有 Milestone 分组、没有定期清理。', fix: '给每个 Issue 打优先级标签（P0/P1/P2），分配到 Milestone，关闭过时不再需要的 Issue。定期做 Issue triage。' },
      { symptom: 'Milestone 的截止日期到了但完成度只有 30%', cause: 'Milestone 包含太多 Issue，或者 Issue 粒度太大难以完成。', fix: '把未完成的 Issue 移到下一个 Milestone（批量操作：选中 → Move to milestone），拆大 Issue 为小 Issue。' },
    ],
    exercises: [
      { level: '基础', task: '为一个新项目创建 2 个 Milestone（v0.1 和 v1.0），每个包含 3 个 Issue', hint: 'Issues → Milestones → New milestone', answer: '创建 Milestone v0.1（截止 2 周后）和 v1.0（截止 2 月后）→ 创建 6 个 Issue 分别分配到对应 Milestone → 给每个 Issue 打上类型标签。' },
      { level: '进阶', task: '创建一个 GitHub Projects 看板，配置 Todo / In Progress / Done 三列', hint: 'Projects 标签 → New project → Board template', answer: 'Projects → New project → 选择 Board 模板 → 重命名列（Todo / In Progress / Done）→ 把现有 Issue 添加到看板 → 配置自动化（Issue 关闭 → 移到 Done）。' },
      { level: '挑战', task: '用 Issue 模板 + Milestone + Projects 搭建一个完整的 Sprint 规划流程', hint: 'Issue template 预设 Milestone 和 label', answer: '创建 .github/ISSUE_TEMPLATE/task.yml（预设 label: sprint-task）→ 创建 Sprint-2025-W22 Milestone → 创建 Project 看板 → 把 Sprint Issue 拖到 Todo 列 → 每日站会拖到 In Progress → 关闭后自动到 Done。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 57. Detached HEAD — 游离 HEAD
  // ─────────────────────────────────────────────────────────────
  "0cLf7FiI9CX--UX45sm2f": {
    mentalModel: 'Detached HEAD 就像你离开了主线剧情，独自在一个"历史存档点"探索——你能看、能改，但没有分支记录你的进度。一旦切走，新做的 commit 就会"失踪"。',
    handsOn: [
      { title: '进入 Detached HEAD 状态', cmd: 'git checkout abc1234', output: 'Note: switching to \'abc1234\'.\n\nYou are in \'detached HEAD\' state. You can look around, make experimental\nchanges and commit them, and you can discard any commits you make in this\nstate without impacting any branches by switching back to a branch.\n\nHEAD is now at abc1234 feat: add login form', explain: '直接 checkout 一个 commit hash（而非分支名）会让 HEAD 脱离任何分支。你在"时间旅行"——工作区显示的是那个历史 commit 的版本。' },
      { title: '在 Detached HEAD 状态下做 commit', cmd: 'echo "experiment" > test.txt && git add . && git commit -m "experiment in detached HEAD"', output: '[detached HEAD def5678] experiment in detached HEAD\n 1 file changed, 1 insertion(+)', explain: '你可以在 Detached HEAD 下正常 commit。但注意：这些 commit 不属于任何分支！一旦切走就"悬空"了。' },
      { title: '切回分支时的警告', cmd: 'git checkout main', output: 'Warning: you are leaving 1 commit behind, not connected to any of your branches:\n\n  def5678 experiment in detached HEAD\n\nSwitched to branch \'main\'', explain: 'Git 明确警告你：有 1 个 commit 即将"悬空"。如果你不保存它，之后只能通过 reflog 找回。' },
      { title: '把 Detached HEAD 的 commit 保存为分支', cmd: 'git branch experiment def5678\n# 或在 detached HEAD 状态下直接：\ngit checkout -b experiment', output: 'Branch \'experiment\' set up to track local branch.', explain: '在切走之前，用 git checkout -b <name> 给当前 HEAD 创建一个分支，这样你的实验 commit 就有了归属。' },
      { title: '用 Detached HEAD 做实验后丢弃', cmd: 'git checkout abc1234\n# 做实验性修改...\ngit checkout main\n# 实验代码被丢弃，main 不受影响', output: 'Switched to branch \'main\'', explain: '如果你只是想试试某个旧版本的代码、跑一下测试，不需要保存改动，Detached HEAD 切走后实验代码自然消失。比创建临时分支再删除更省事。' },
    ],
    diagnosis: [
      { symptom: '在 Detached HEAD 下做了好几个 commit，切回 main 后找不到了', cause: 'Detached HEAD 的 commit 不属于任何分支，切走后变成"悬空对象"。', fix: '用 git reflog 找到那些 commit 的 hash（reflog 记录了 HEAD 的每次移动），然后 git branch rescue <hash> 创建分支救回。' },
      { symptom: 'git status 显示 "HEAD detached at abc1234"，不知道怎么回到正常状态', cause: '你 checkout 了一个 commit hash 或 tag，而不是分支名。', fix: 'git checkout main（或任何分支名）即可回到正常状态。如果想基于当前位置创建新分支：git checkout -b new-branch。' },
    ],
    exercises: [
      { level: '基础', task: '进入 Detached HEAD 状态查看某个历史 commit 的代码，然后安全切回 main', hint: 'git checkout <hash> → 查看 → git checkout main', answer: 'git log --oneline -5  # 找一个 hash\ngit checkout <hash>  # 进入 detached HEAD\n# 查看代码、运行测试\ngit checkout main  # 安全切回' },
      { level: '进阶', task: '在 Detached HEAD 状态下做 2 个 commit，然后把它们保存为一个新分支', hint: 'git checkout -b 在 detached HEAD 状态下', answer: 'git checkout abc1234\n# 修改文件 → git add + commit\n# 再修改 → git add + commit\ngit checkout -b experiment  # 给这些 commit 一个分支归属' },
      { level: '挑战', task: '切回 main 后，用 git reflog 找回之前在 Detached HEAD 中"丢失"的 commit', hint: 'git reflog 显示 HEAD 的所有历史位置', answer: 'git reflog\n# 找到类似 "abc1234 HEAD@{5}: commit: experiment in detached HEAD"\ngit branch rescued-commits abc1234\ngit checkout rescued-commits  # 找回丢失的 commit' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 58. GitHub Organizations — GitHub 组织
  // ─────────────────────────────────────────────────────────────
  "RMrxQLhrINO5g4Mhxh5qS": {
    mentalModel: 'GitHub Organization 是"公司的 GitHub 账号"——它把多个仓库、多个成员、权限策略统一管理在一个组织下，而不是散落在个人账号里。组织拥有独立的计费、安全策略和审计日志。',
    sections: [
      { title: 'Organization vs 个人账号', content: '个人账号：\n• 仓库归属于你个人\n• 离职后仓库跟着你走\n• 权限管理粗糙（要么 collaborator，要么不是）\n\nOrganization：\n• 仓库归属于组织（公司/团队）\n• 成员变动不影响仓库所有权\n• 精细权限：Owner / Admin / Write / Read / 自定义角色\n• 团队（Team）分组：frontend-team、backend-team\n• SSO 单点登录、SAML 强制认证\n• 审计日志：谁在什么时候做了什么' },
      { title: 'Organization 核心功能', content: '1. Teams（团队）：按部门分组，批量授权。把 frontend-team 加为仓库的 Write 角色，团队所有成员自动获得写权限。\n2. Repository Roles：Owner（全部权限）、Admin（管理设置）、Write（推送代码）、Read（只读）、Triage（管理 Issue）。\n3. Billing：统一管理付费功能（Actions 分钟数、Packages 存储、Copilot 席位）。\n4. Security：强制 2FA、IP 白名单、仓库创建策略。' },
      { title: '创建和管理 Organization', content: '创建：GitHub 右上角 + → New organization → 选择计划（Free/Team/Enterprise）→ 填写名称和邮箱。\n\n邀请成员：Organization → People → Invite member → 输入用户名或邮箱。\n\n创建仓库：Organization → Repositories → New → 选择可见性和团队权限。\n\n转移仓库：个人仓库 Settings → Danger Zone → Transfer → 输入组织名。' },
      { title: '最佳实践', content: '• 公司项目一律用 Organization，不用个人账号\n• 最小权限原则：默认 Read，按需给 Write\n• 用 Team 管理权限而非逐人授权\n• 开启 2FA 强制要求\n• 设置分支保护规则防止直接 push main\n• 定期审计成员列表，移除离职人员' },
    ],
    diagnosis: [
      { symptom: '团队成员看不到组织的某个私有仓库', cause: '该成员没有被添加到有权限的 Team，也没有被单独授权。', fix: 'Organization → Teams → 找到对应 Team → 添加该仓库的 Read/Write 权限。或直接在仓库 Settings → Collaborators and teams 中添加。' },
      { symptom: '从个人账号转移仓库到组织后，CI/CD 挂了', cause: '转移后仓库 URL 变了（从 user/repo 变成 org/repo），CI 配置中的路径和 token 需要更新。', fix: '更新所有 CI/CD 配置中的仓库路径，重新生成 Deploy Key 或 Personal Access Token。git remote set-url origin <新URL>。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 GitHub Organization，邀请一个成员，创建一个团队', hint: '右上角 + → New organization', answer: 'New organization → 填写名称 → 选择 Free 计划 → Invite members 添加成员 → Teams → New team 创建团队 → 把成员加入团队。' },
      { level: '进阶', task: '配置 Organization 的安全策略：强制 2FA + 限制仓库创建', hint: 'Settings → Authentication security', answer: 'Organization Settings → Authentication security → 勾选 "Require two-factor authentication" → Member privileges → 限制 "Base permissions" 为 None → 限制 "Repository creation" 为 Admin only。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 59. Kanban Boards — 看板
  // ─────────────────────────────────────────────────────────────
  "RFJgfuxoVxt22QlwLI5mW": {
    mentalModel: '看板就像贴在墙上的便签板——每张便签（卡片）是一个任务，列代表进度阶段。拖拽卡片从"To Do"到"Done"就是看板的核心动作，它让项目进度一目了然。',
    sections: [
      { title: '看板的基本结构', content: '经典三列看板：\n\n📋 To Do       | 🔄 In Progress  | ✅ Done\n─────────────┼────────────────┼─────────────\n#12 注册 API  | #10 登录页面    | #8 数据库设计\n#13 密码重置  | #11 JWT 鉴权    | #9 项目初始化\n#14 Profile   |                | #7 CI 配置\n\n每张卡片就是一个 Issue 或 PR。列名和数量可以自定义（如加上 Review、Testing 等列）。' },
      { title: 'GitHub Projects 看板', content: 'GitHub Projects（新版，也叫 Projects V2）功能：\n• Board 视图：拖拽卡片在列间移动\n• Table 视图：批量编辑属性\n• 自定义字段：优先级（P0/P1/P2）、估时（Story Points）、迭代号\n• 自动化工作流：\n  - Issue 关闭 → 自动移到 Done\n  - PR 合并 → 自动移到 Done\n  - Issue 重新打开 → 自动移回 Todo\n• 过滤和分组：按负责人、标签、优先级筛选' },
      { title: '看板工作流最佳实践', content: '1. 每日站会（Stand-up）时过看板：\n   - In Progress 列的卡片：昨天做了什么、今天打算做什么、有没有阻塞\n2. WIP 限制（Work In Progress Limit）：\n   - In Progress 列最多 3 张卡片，防止同时做太多事\n3. 每张卡片要有：\n   - 明确的负责人（Assignee）\n   - 预估时间\n   - Definition of Done\n4. 定期清理 Done 列（已完成的归档）\n5. 不要跳过列：代码必须经过 Review 才能到 Done' },
      { title: '与其他工具的对比', content: 'GitHub Projects vs Trello：\n• Projects 和 Issue/PR 深度集成，Trello 需要手动链接\n• Projects 支持 Table 视图和自定义字段，Trello 更依赖插件\n\nGitHub Projects vs Jira：\n• Projects 更轻量，适合中小团队\n• Jira 功能更强大（Sprint 规划、燃尽图、Velocity 统计），适合大组织\n• 迁移成本：Jira → Projects 可能丢失自定义工作流' },
    ],
    diagnosis: [
      { symptom: '看板的 In Progress 列堆了十几张卡片', cause: '团队成员同时开太多任务，没有 WIP 限制。', fix: '设置 WIP 限制（如最多 3 张），要求完成当前任务才能开始新的。定期 review 看哪些任务被阻塞。' },
      { symptom: '卡片在 Done 列但实际没有部署', cause: 'Done 的定义不明确——"代码写完"不等于"功能上线"。', fix: '增加列：Code Done → Review → Testing → Deployed。或明确 Definition of Done = 代码合并 + 测试通过 + 部署上线。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 GitHub Projects 看板，设置 Todo / In Progress / Done 三列，添加 3 个 Issue 卡片', hint: 'Projects → New project → Board', answer: 'New project → Board → 重命名列 → 添加现有 Issue 或创建新卡片 → 把卡片拖到不同列模拟进度变化。' },
      { level: '进阶', task: '配置自动化：Issue 关闭时自动移到 Done 列，PR 合并时自动移动关联 Issue', hint: 'Project Settings → Workflows', answer: 'Project Settings → Workflows → 启用 "When an issue is closed, move to Done" 和 "When a pull request is merged, move to Done"。' },
      { level: '挑战', task: '为看板添加自定义字段（优先级、估时、迭代），并用 Table 视图批量编辑', hint: 'Project Settings → Custom fields', answer: 'Settings → Add field → 添加 Priority（单选：P0/P1/P2）、Estimate（数字）、Iteration（迭代）→ 切到 Table 视图 → 批量填充字段值。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 60. git log options — git log 选项
  // ─────────────────────────────────────────────────────────────
  "qFEonbCMLri8iA0yONwuf": {
    mentalModel: 'git log 选项就像搜索引擎的"高级搜索"——不加参数是全量倒序输出，加上各种过滤器可以精确找到你要的那个 commit、那段时间、那个人的改动。',
    handsOn: [
      { title: 'oneline + graph + decorate 组合', cmd: 'git log --oneline --graph --decorate --all', output: '* a1b2c3d (HEAD -> main, origin/main) feat: add auth\n* e4f5g6h fix: validate email\n| * i7j8k9l (feature/search) add search\n|/  \n* l0m1n2o (tag: v1.0) initial release', explain: '这是最受欢迎的 log 视图：--oneline 压缩一行、--graph 画分支图、--decorate 显示分支名和 tag、--all 包含所有分支。建议设为别名：git config --global alias.lg "log --oneline --graph --decorate --all"。' },
      { title: '按时间范围过滤', cmd: 'git log --oneline --since="2025-05-01" --until="2025-05-15"', output: 'a1b2c3d feat: add user auth\ne4f5g6h fix: pagination offset\ni7j8k9l refactor: API layer', explain: '--since 和 --until 限定时间范围。支持相对时间：--since="2 weeks ago"、--since="yesterday"。做周报时非常有用。' },
      { title: '按作者和关键词过滤', cmd: 'git log --oneline --author="Tu" --grep="fix"', output: 'e4f5g6h fix: pagination offset\nx1y2z3a fix: null check in login', explain: '--author 按作者名过滤（支持正则），--grep 按 commit message 搜索。两者组合是 AND 关系。加 --all-match 要求所有条件同时满足。' },
      { title: '显示每次提交的文件变更统计', cmd: 'git log --oneline --stat -5', output: 'a1b2c3d feat: add user auth\n src/auth/login.ts  | 45 +++++++++\n src/auth/jwt.ts    | 23 +++++\n 2 files changed, 68 insertions(+)\n\ne4f5g6h fix: pagination\n src/api/users.ts   |  3 +--', explain: '--stat 在每个 commit 下方显示变更文件列表和增删行数。快速了解每个 commit 改了多少东西。--shortstat 只显示汇总行。' },
      { title: '自定义输出格式', cmd: 'git log --pretty=format:"%h %an %ad | %s" --date=short -5', output: 'a1b2c3d Tu       2025-05-26 | feat: add user auth\ne4f5g6h Li       2025-05-25 | fix: pagination\ni7j8k9l Wang     2025-05-24 | refactor: API layer', explain: '%h=短hash, %an=作者, %ad=日期, %s=message 第一行。--date=short 只显示年月日。自定义格式可以做周报、changelog 等各种报表。' },
    ],
    diagnosis: [
      { symptom: 'git log 输出太多，翻不到想要的 commit', cause: '默认显示所有 commit，大项目可能上万条。', fix: '组合使用过滤器：--oneline 压缩显示、-n 限制数量、--since 限定时间、--grep 搜索关键词、--author 指定作者、-- <file> 指定文件。' },
      { symptom: 'git log 看不到某个已合并分支的 commit', cause: '默认只显示当前分支可达的 commit。如果分支已删除且用了 squash merge，原始 commit 不在当前分支的历史线上。', fix: '用 --all 显示所有分支的 commit。如果分支已删除，用 git reflog 查找。或用 --merge 查看与合并相关的 commit。' },
    ],
    exercises: [
      { level: '基础', task: '用一条命令显示最近 7 天的所有提交，每个一行带分支图', hint: '组合 --since --oneline --graph', answer: 'git log --oneline --graph --since="7 days ago"' },
      { level: '进阶', task: '生成一份格式化的周报：显示本周你所有提交的日期、短 hash 和 message', hint: '--pretty=format: + --author + --since', answer: 'git log --pretty=format:"%ad | %h | %s" --date=short --author="Tu" --since="last monday"' },
      { level: '挑战', task: '找出项目中改动最频繁的 5 个文件（hotspots），并分析它们的 commit 数量', hint: 'git log --name-only + shell 管道', answer: 'git log --name-only --pretty=format: | grep -v \'^$\' | sort | uniq -c | sort -rn | head -5\n# 改动频繁的文件可能是代码质量问题的信号（"热点"分析）' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 61. Roadmaps — 路线图
  // ─────────────────────────────────────────────────────────────
  "sxvT2hGko2PDRBoBrCGWD": {
    mentalModel: 'Roadmap（路线图）是项目的"时间轴规划图"——用 Now / Next / Later 三栏或时间线展示"正在做什么、接下来做什么、将来想做什么"。它让团队和用户对产品的未来有清晰预期。',
    sections: [
      { title: 'Roadmap 的三种形式', content: '1. **Markdown 文件**：最简单，放在仓库的 ROADMAP.md 中\n   ## Now (Q2 2025)\n   - [x] User authentication\n   - [ ] Search functionality\n   ## Next (Q3 2025)\n   - Real-time notifications\n   ## Later\n   - Mobile app\n\n2. **GitHub Projects**：用 Board 或 Timeline 视图管理路线图卡片\n   - Now / Next / Later 三列\n   - 或按 Quarter 分列\n\n3. **GitHub 自带 Roadmap 功能**（部分组织可用）：可视化时间线 + 里程碑' },
      { title: '写好 Roadmap 的原则', content: '• 分三层：Now（本季度确定要做）→ Next（下季度大概率做）→ Later（有意向但不确定）\n• Now 栏的任务要具体、可执行；Later 栏可以模糊\n• 不要把 Later 的东西承诺具体日期\n• 定期（每月）Review 和调整——Roadmap 是活的文档\n• 关联 Issue 和 Milestone，让路线图可追踪\n• 对团队公开，让所有人看到大方向' },
      { title: 'roadmap.sh 的 Git Roadmap', content: 'roadmap.sh/git 是一个交互式 Git 学习路线图：\n• 可视化展示 Git 知识的拓扑结构\n• 从基础（init/config/add/commit）到高级（rebase/cherry-pick/hooks）\n• 每个节点可以展开查看详细教程\n• 支持标记已学完的节点\n\n本项目的 26 个知识点就是按照 roadmap.sh 的 Git Roadmap 组织的。路线图式学习的优势：知道"我在哪里"和"还要学什么"，避免盲目学习。' },
    ],
    diagnosis: [
      { symptom: 'Roadmap 写了但没人看，团队还是各干各的', cause: 'Roadmap 没有和日常工作（Issue/PR/Sprint）关联，成了摆设。', fix: '把 Roadmap 的每个条目关联到具体的 Milestone 和 Issue，Sprint 规划时对照 Roadmap 确认方向。在站会或周会上定期提及 Roadmap。' },
      { symptom: 'Roadmap 上的 Later 项目被利益相关者当成承诺', cause: 'Later 栏写了过于具体的描述和时间。', fix: 'Later 栏只写方向和目标，不写日期和具体功能。用"探索"、"调研"等词代替"实现"。明确沟通 Roadmap 不是承诺。' },
    ],
    exercises: [
      { level: '基础', task: '为你的项目创建一个 ROADMAP.md 文件，包含 Now/Next/Later 三个区域', hint: 'Markdown 标题 + 任务列表', answer: '## Now (Q2 2025)\n- [x] 用户认证\n- [ ] 搜索功能\n## Next (Q3 2025)\n- 实时通知\n- 数据导出\n## Later\n- 移动端适配\n- AI 辅助' },
      { level: '进阶', task: '用 GitHub Projects 创建一个带 Timeline 视图的产品路线图', hint: 'New project → Roadmap layout', answer: 'New project → 选择 Roadmap 布局 → 添加卡片（关联 Milestone）→ 设置日期范围 → 用颜色区分 Now/Next/Later 状态。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 62. git revert — git revert 撤销提交
  // ─────────────────────────────────────────────────────────────
  "dLr55Om7IOvI53c1DgTKc": {
    mentalModel: 'git revert 是"创建一个反向 commit 来抵消之前的改动"——不是删除历史，而是在历史中追加一笔"撤销记录"。就像在账本上写"冲正"，而不是涂掉原来的条目。',
    handsOn: [
      { title: '撤销最近一个 commit', cmd: 'git revert HEAD', output: '[main def5678] Revert "feat: add search feature"\n Date: Mon May 26 16:00:00 2025\n 3 files changed, 2 insertions(+), 45 deletions(-)', explain: 'revert HEAD 创建一个新的 commit，内容是 HEAD 那个 commit 的"反向操作"——增加的行变成删除，删除的行变成增加。历史不会被改写。' },
      { title: '撤销一个早期的 commit', cmd: 'git revert abc1234', output: '[main ghi9012] Revert "fix: change login validation"\n Date: Mon May 26 16:05:00 2025\n 1 file changed, 3 insertions(+), 3 deletions(-)', explain: '可以 revert 任何历史 commit。Git 会计算那个 commit 的变更并反向应用。如果和当前代码有冲突，需要手动解决。' },
      { title: 'revert 一个 merge commit', cmd: 'git revert -m 1 abc1234', output: '[main def5678] Revert "Merge branch \'feature/search\'"', explain: 'merge commit 有两个 parent，-m 1 表示"保留第一个 parent（被合入的分支），撤销第二个 parent 带来的变更"。通常 -m 1 是你想要的。' },
      { title: 'revert 多个 commit', cmd: 'git revert HEAD~3..HEAD --no-commit && git commit -m "Revert last 3 commits"', output: '[main xyz7890] Revert last 3 commits\n 5 files changed, 12 insertions(+), 89 deletions(-)', explain: '范围 HEAD~3..HEAD 表示最近 3 个 commit。--no-commit 让 revert 不自动提交，最后手动合并为一个 revert commit。' },
      { title: 'revert 遇到冲突', cmd: 'git revert abc1234\n# 如果有冲突，编辑解决后：\ngit add <files> && git revert --continue', output: 'Revert 完成并创建新的 commit', explain: '如果被 revert 的 commit 修改的代码后来又被其他 commit 改过，revert 可能冲突。解决方式和 merge 冲突一样：编辑文件、add、continue。' },
    ],
    diagnosis: [
      { symptom: 'revert 后代码没有恢复到预期的旧版本', cause: '被 revert 的 commit 之后还有其他 commit 修改了同一文件。revert 只撤销那一个 commit 的变更，不会回滚到那个时间点的状态。', fix: '理解 revert ≠ 回到过去。如果需要完全回到某个版本，用 git reset --hard <commit>（注意会丢失之后的 commit）。或逐个 revert 相关的 commit。' },
      { symptom: 'revert 一个 merge commit 时报 "error: commit abc1234 is a merge but no -m option was given"', cause: 'merge commit 有两个 parent，Git 不知道以哪个为基准来计算"反向变更"。', fix: '加 -m 1（以第一个 parent 为基准，即被合入的分支）：git revert -m 1 <merge-commit-hash>。' },
    ],
    exercises: [
      { level: '基础', task: '做 3 个 commit，然后 revert 中间那个，观察结果', hint: 'git revert <中间commit的hash>', answer: 'echo "a" > f.txt && git add . && git commit -m "commit 1"\necho "b" > f.txt && git add . && git commit -m "commit 2"\necho "c" > f.txt && git add . && git commit -m "commit 3"\ngit log --oneline -3\ngit revert HEAD~1  # revert "commit 2"' },
      { level: '进阶', task: 'revert 一个已经 push 到远程的 commit，并解释为什么不能用 reset --hard 代替', hint: 'revert 不改写历史，对共享分支安全', answer: 'git revert <hash> && git push\n# 不能用 reset --hard 因为：\n# 1) reset --hard 改写历史，force push 后会覆盖队友的本地分支\n# 2) revert 是在历史中追加一笔"撤销"，所有人的历史线保持一致' },
      { level: '挑战', task: 'revert 一个 merge commit 后，再次合并同一分支时发现问题并解决', hint: 'revert merge 后 Git 认为那些变更已经"被处理过了"', answer: 'git revert -m 1 <merge-hash>  # 撤销 merge\n# 之后再次 merge 同一分支时，Git 可能不会重新引入那些变更\n# 解决：git revert <revert-commit-hash>  # 撤销"撤销"，再 merge' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 63. Automations — 自动化
  // ─────────────────────────────────────────────────────────────
  "TNBz5755PhI6iKxTQTqcS": {
    mentalModel: 'Git 自动化是"给仓库装上自动驾驶"——当特定事件发生时（push、PR 创建、Issue 打开），自动执行预定义的操作（跑测试、打标签、部署）。GitHub Actions 是最主流的自动化工具。',
    sections: [
      { title: 'GitHub Actions 核心概念', content: '• Workflow：定义在 .github/workflows/*.yml 中的自动化流程\n• Event（触发器）：什么事件启动 workflow（push、pull_request、schedule、手动）\n• Job：workflow 中的一个任务（可以多个 job 并行或串行）\n• Step：job 中的一个步骤（运行命令或调用 Action）\n• Action：可复用的步骤模块（来自 marketplace 或自定义）\n• Runner：执行 workflow 的服务器（GitHub 托管或自托管）' },
      { title: '典型 CI/CD Workflow', content: '```yaml\n# .github/workflows/ci.yml\nname: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm test\n      - run: npm run build\n```\n\n每次 push 到 main 或有 PR 指向 main 时，自动安装依赖、跑测试、构建。PR 页面显示绿色勾或红色叉。' },
      { title: '常见自动化场景', content: '1. **CI（持续集成）**：push/PR 时自动跑 lint + test + build\n2. **CD（持续部署）**：合并到 main 后自动部署到生产环境\n3. **自动打标签**：PR 修改特定目录时自动加 label（actions/labeler）\n4. **自动关闭过时 Issue**：30 天无回复自动关闭（actions/stale）\n5. **自动分配 Reviewer**：根据修改的文件路径分配（CODEOWNERS）\n6. **Release 自动发布**：push tag 时自动构建并发布到 npm/Docker Hub\n7. **依赖更新**：Dependabot 自动创建升级依赖的 PR' },
      { title: 'Git Hooks vs GitHub Actions', content: 'Git Hooks（本地）：\n• 在 .git/hooks/ 中，开发者电脑上执行\n• 适合：commit 前跑 lint、检查 message 格式\n• 缺点：只在本地生效，队友可能没装\n\nGitHub Actions（远程）：\n• 在 GitHub 服务器上执行\n• 适合：CI/CD、自动化 Issue/PR 管理\n• 优势：对所有 PR 生效、不可绕过\n\n最佳实践：两者配合使用——Hooks 做"快速检查"（秒级反馈），Actions 做"全面验证"（分钟级）。' },
    ],
    diagnosis: [
      { symptom: 'PR 的 CI 检查一直转圈不结束', cause: 'workflow 配置错误、runner 资源不足、或某个 step 挂住了。', fix: '点 PR 底部的 check → Details → 查看具体哪个 step 卡住。常见原因：npm install 超时、测试等待外部服务、workflow 语法错误。' },
      { symptom: 'GitHub Actions 的 workflow 没有被触发', cause: 'on: 触发条件配置不对（比如 PR 的 workflow 配了 push 事件）。', fix: '检查 on: 部分的事件和分支过滤。PR 事件用 pull_request，push 事件用 push。注意 branches 过滤是否匹配你的分支名。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 CI workflow，在每次 push 到 main 时运行 npm test', hint: '.github/workflows/ci.yml', answer: '创建 .github/workflows/ci.yml：\nname: CI\non: {push: {branches: [main]}}\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci && npm test' },
      { level: '进阶', task: '配置 actions/stale 自动关闭 30 天无活动的 Issue', hint: '使用 actions/stale Action', answer: '创建 .github/workflows/stale.yml：\nname: Close stale issues\non: {schedule: [{cron: "0 0 * * *"}]}\njobs:\n  stale:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/stale@v9\n        with:\n          days-before-stale: 30\n          days-before-close: 7\n          stale-issue-message: "This issue has been automatically marked as stale."' },
      { level: '挑战', task: '创建一个 workflow：push tag 时自动构建并发布到 GitHub Releases', hint: 'on: push: tags + softprops/action-gh-release', answer: 'name: Release\non: {push: {tags: ["v*"]}}\njobs:\n  release:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci && npm run build\n      - uses: softprops/action-gh-release@v2\n        with: {files: "dist/*"}' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 64. Between Commits — 提交间差异
  // ─────────────────────────────────────────────────────────────
  "Rwpeltygwzcf6hnuZNURE": {
    mentalModel: '两个 commit 之间的差异就是"从版本 A 到版本 B 改了什么"——Git 用 diff 引擎逐行对比两个快照，精确标出哪些行增加了、删除了、修改了。这是理解代码演化的核心工具。',
    handsOn: [
      { title: '对比两个 commit 的差异', cmd: 'git diff abc1234 def5678', output: 'diff --git a/src/login.ts b/src/login.ts\nindex 1a2b3c4..5d6e7f8 100644\n--- a/src/login.ts\n+++ b/src/login.ts\n@@ -10,6 +10,8 @@\n   const user = findUser(email);\n-  if (!user) return null;\n+  if (!user) {\n+    logger.warn("User not found: " + email);\n+    return null;\n+  }', explain: 'git diff <commit1> <commit2> 逐行对比两个 commit 的文件差异。红色（-）是删除的行，绿色（+）是增加的行。@@ -10,6 +10,8 @@ 表示变更位置信息。' },
      { title: '只看改了哪些文件', cmd: 'git diff abc1234 def5678 --stat', output: ' src/login.ts   | 5 ++++-\n src/config.ts  | 2 +-\n 2 files changed, 5 insertions(+), 2 deletions(-)', explain: '--stat 只显示文件级别的统计：每个文件改了几行、总体增删多少。快速了解变更范围而不看具体代码。' },
      { title: '只看改了哪些文件（文件名列表）', cmd: 'git diff abc1234 def5678 --name-only', output: 'src/login.ts\nsrc/config.ts', explain: '--name-only 只输出变更的文件名，不显示任何代码细节。适合脚本化处理或快速检查变更范围。' },
      { title: '对比某个文件在两个 commit 之间的变化', cmd: 'git diff abc1234 def5678 -- src/login.ts', output: 'diff --git a/src/login.ts b/src/login.ts\n--- a/src/login.ts\n+++ b/src/login.ts\n@@ -10,3 +10,5 @@\n-  if (!user) return null;\n+  if (!user) {\n+    logger.warn("not found");\n+    return null;\n+  }', explain: '-- <file> 限制 diff 只对比特定文件。当你只关心一个文件的演化历史时，排除其他文件的噪音。' },
      { title: '对比某个目录在两个 tag 之间的变化', cmd: 'git diff v1.0.0 v2.0.0 --stat -- src/api/', output: ' src/api/users.ts    | 45 +++++++++\n src/api/orders.ts   | 23 +++++\n src/api/auth.ts     | 12 +--\n 3 files changed, 78 insertions(+), 2 deletions(-)', explain: '可以用 tag 代替 commit hash 来对比版本间的差异。-- src/api/ 限制只看 API 目录的变化。发版 review 时特别有用。' },
    ],
    diagnosis: [
      { symptom: 'git diff 两个 commit 输出太多内容看不过来', cause: '两个 commit 之间改动很大（比如大重构），diff 有几千行。', fix: '用 --stat 先看文件列表，用 -- <特定文件> 只看关心的文件，用 --diff-filter=M 只看修改的文件（排除新增/删除），用 -w 忽略空白变化。' },
      { symptom: 'git diff 显示整个文件都被替换了，但你只改了一行', cause: '行尾符变化（LF → CRLF）或文件编码变化导致每行都被认为不同。', fix: '用 git diff -w --ignore-blank-lines 忽略空白差异。长期方案：统一团队的行尾符配置（core.autocrlf）和编辑器设置。' },
    ],
    exercises: [
      { level: '基础', task: '对比当前 HEAD 和 3 个 commit 之前的差异，只看文件名列表', hint: 'git diff --name-only + HEAD~3', answer: 'git diff --name-only HEAD~3 HEAD' },
      { level: '进阶', task: '对比两个 release tag 之间的变更统计，生成一份简易 changelog', hint: 'git diff --stat + git log --oneline', answer: 'git log --oneline v1.0..v2.0  # 列出所有 commit\ngit diff --stat v1.0 v2.0  # 文件变更统计\n# 组合输出就是一份简易 changelog' },
      { level: '挑战', task: '用 git diff 找出某个文件被修改次数最多的那段时间（git hotspots 分析）', hint: 'git log --format + 时间统计', answer: 'git log --format="%ad" --date=short -- src/login.ts | sort | uniq -c | sort -rn | head\n# 显示该文件在哪些日期被修改最频繁，帮助定位"动荡"的代码区域' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 65. --soft — reset --soft
  // ─────────────────────────────────────────────────────────────
  "Uc7FyfAKpDFRGRNHwztFo": {
    mentalModel: 'git reset --soft 是"只撤回 commit 动作，保留所有改动在暂存区"——就像把信封里的信拿出来重新放回桌上，信（代码改动）还在、且已经整理好（staged），你可以重新写 message 再装进去。',
    handsOn: [
      { title: 'soft reset 撤销最后一次 commit', cmd: 'git log --oneline -3\n# a1b2c3d feat: add search (HEAD)\n# e4f5g6h fix: pagination\n# i7j8k9l refactor: API\n\ngit reset --soft HEAD~1\n\ngit status', output: 'On branch main\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n  modified:   src/search.ts\n  new file:   src/search-ui.ts', explain: 'HEAD 回退了一个 commit，但代码改动完好保留在暂存区（staged）。文件内容没有任何变化，只是 commit 被"拆开"了。' },
      { title: '合并多个 commit 为一个（squash）', cmd: 'git reset --soft HEAD~3 && git commit -m "feat: complete search feature (3 commits squashed)"', output: '[main xyz7890] feat: complete search feature (3 commits squashed)\n 5 files changed, 120 insertions(+)', explain: '把最近 3 个 commit 的改动合并保留在暂存区，然后一次性 commit。这是最简洁的 squash 方式——不需要 rebase -i。' },
      { title: '修改最后一次 commit 的内容和 message', cmd: 'git reset --soft HEAD~1\n# 做一些修改...\ngit add . && git commit -m "feat: add search with improved algorithm"', output: '[main new1234] feat: add search with improved algorithm\n 6 files changed, 130 insertions(+)', explain: '先 soft reset 拆开 commit，修改代码后重新 commit。这比 git commit --amend 更灵活——你可以在重新提交前做任意修改。' },
    ],
    diagnosis: [
      { symptom: 'soft reset 后发现暂存区的内容和预期不一致', cause: '你在 reset 之前有未提交的 staged 改动，soft reset 会把那些改动也保留在暂存区，混在一起。', fix: '操作前先 git status 确认暂存区是干净的。如果已经混了，用 git reset HEAD <file> 逐个取消暂存不需要的文件。' },
      { symptom: 'soft reset 后 git log 看不到被撤销的 commit 了', cause: '这是预期行为——soft reset 把 HEAD 回退了，那些 commit 不在当前分支历史上了。', fix: 'commit 内容没有丢失。用 git reflog 可以看到，30 天内（默认 gc.reflogExpire）都可以恢复：git branch rescue <commit-hash>。' },
    ],
    exercises: [
      { level: '基础', task: '做 2 个 commit，然后用 soft reset 把它们合并成 1 个 commit', hint: 'git reset --soft HEAD~2 + git commit', answer: 'echo "a" > a.txt && git add . && git commit -m "commit 1"\necho "b" > b.txt && git add . && git commit -m "commit 2"\ngit reset --soft HEAD~2\ngit commit -m "combined: commit 1 and 2"' },
      { level: '进阶', task: '用 soft reset 重写最后一次 commit：拆开它、修改代码、用新 message 重新提交', hint: 'soft reset HEAD~1 → 修改 → add → commit', answer: 'git reset --soft HEAD~1\n# 修改代码...\ngit add .\ngit commit -m "improved: better commit message and code"' },
      { level: '挑战', task: '对比 --soft、--mixed（默认）、--hard 三种 reset 对暂存区和工作区的不同影响', hint: '三种模式分别保留了什么', answer: '--soft：改动保留在暂存区（staged），工作区不变。\n--mixed（默认）：改动保留在工作区（unstaged），暂存区清空。\n--hard：改动全部丢弃，工作区和暂存区都回到目标 commit 的状态。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 66. --hard — reset --hard
  // ─────────────────────────────────────────────────────────────
  "V_joZNpQsS9G9PI-o-GmC": {
    mentalModel: 'git reset --hard 是"时光机一键回退"——HEAD、暂存区、工作区全部回到指定 commit 的状态，之后未提交的改动全部丢弃。它是核弹级操作：威力大、不可轻易撤回。',
    handsOn: [
      { title: 'hard reset 到上一个 commit', cmd: 'git status\n# On branch main\n# Changes not staged for commit:\n#   modified: src/login.ts\n\ngit reset --hard HEAD', output: 'HEAD is now at a1b2c3d feat: add search', explain: '所有未提交的改动（无论 staged 还是 unstaged）全部丢弃。工作区回到 HEAD commit 的干净状态。相当于"撤销所有未保存的修改"。' },
      { title: 'hard reset 回退到更早的 commit', cmd: 'git log --oneline -5\n# a1b2c3d feat: add search (HEAD)\n# e4f5g6h fix: pagination\n# i7j8k9l refactor: API\n# l0m1n2o feat: user auth\n# p3q4r5s initial commit\n\ngit reset --hard e4f5g6h', output: 'HEAD is now at e4f5g6h fix: pagination', explain: 'HEAD 回到 e4f5g6h，之后的 commit（a1b2c3d）从分支历史上消失。工作区也回到那个 commit 的版本。⚠️ 如果已经 push 到远程，需要 force push。' },
      { title: 'hard reset 到远程分支的版本', cmd: 'git fetch origin && git reset --hard origin/main', output: 'HEAD is now at z9y8x7w latest remote commit', explain: '丢弃本地所有改动和 commit，强制和远程保持一致。当你本地搞乱了想"从头来过"时最有用。⚠️ 未 push 的 commit 会丢失（可用 reflog 恢复）。' },
    ],
    diagnosis: [
      { symptom: 'git reset --hard 后发现有未 push 的 commit 丢失了', cause: 'hard reset 回退了 HEAD，那些 commit 从分支历史消失。如果没 push 到远程，看起来就"丢了"。', fix: '立即用 git reflog 找到丢失 commit 的 hash，然后 git reset --hard <hash> 恢复，或 git branch rescue <hash> 创建分支救回。reflog 默认保留 30 天。' },
      { symptom: '在共享分支上做了 hard reset 并 force push，队友报错', cause: 'force push 覆盖了远程历史，队友本地的 commit 和远程不一致。', fix: '绝对不要在共享分支上做 hard reset + force push，除非和团队沟通过。如果必须这样做：通知所有人 → git reset --hard → git push --force → 队友执行 git fetch + git reset --hard origin/main。' },
    ],
    exercises: [
      { level: '基础', task: '在工作区做一些修改（不 commit），然后用 hard reset 丢弃所有修改', hint: 'git reset --hard HEAD', answer: 'echo "changes" > file.txt\n# 修改了一些文件但不想保留\ngit reset --hard HEAD\n# 所有未提交的修改被丢弃，工作区回到干净状态' },
      { level: '进阶', task: '做 3 个 commit，hard reset 到第 1 个，然后用 reflog 恢复第 3 个', hint: 'reset --hard + reflog + reset --hard', answer: 'git log --oneline -3\n# c3, c2, c1(HEAD)\ngit reset --hard HEAD~2  # 回到 c1\ngit reflog  # 找到 c3 的 hash\ngit reset --hard <c3的hash>  # 恢复到 c3' },
      { level: '挑战', task: '解释为什么 git reset --hard 后 force push 到共享分支是危险的，并给出安全替代方案', hint: '考虑队友的本地状态', answer: '危险：队友本地有基于旧历史的 commit，force push 后他们 pull 会冲突或丢失工作。\n替代方案：用 git revert 代替 reset——revert 不改写历史，而是创建反向 commit，对所有人安全。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 67. git reset — git reset 重置
  // ─────────────────────────────────────────────────────────────
  "igrR7LguU1jemg_mf_AD6": {
    mentalModel: 'git reset 是"把 HEAD 指针往回拨"——根据参数不同，可以选择保留或丢弃暂存区和工作区的改动。三种模式（soft/mixed/hard）对应三种不同的"回退力度"。',
    handsOn: [
      { title: '默认 reset（--mixed）', cmd: 'git add file.txt && git status\n# Changes to be committed:\n#   modified: file.txt\n\ngit reset HEAD file.txt\n\ngit status', output: 'Changes not staged for commit:\n  modified: file.txt', explain: '不加参数的 git reset 默认是 --mixed 模式：把指定文件从暂存区撤回工作区（unstage），但保留文件内容。这是"取消 git add"的标准操作。' },
      { title: 'reset 整个暂存区', cmd: 'git add . && git status\n# 5 files staged\n\ngit reset\n\ngit status', output: 'Changes not staged for commit:\n  modified: file1.ts\n  modified: file2.ts\n  ...\n  (5 files)', explain: 'git reset（不带文件名）把暂存区所有文件撤回工作区。所有文件变成 unstaged 状态，但内容不变。' },
      { title: 'reset 回退 commit（mixed 模式）', cmd: 'git reset HEAD~2', output: 'Unstaged changes after reset:\nM  src/login.ts\nM  src/config.ts\nA  src/search.ts', explain: 'HEAD 回退 2 个 commit，改动保留在工作区（unstaged）。你可以重新选择要暂存哪些文件、怎么组织 commit。' },
      { title: '三种模式对比', cmd: '假设当前有 3 个 commit：C1 - C2 - C3(HEAD)\n\ngit reset --soft C1   # C2+C3 的改动在暂存区（staged）\ngit reset --mixed C1  # C2+C3 的改动在工作区（unstaged）【默认】\ngit reset --hard C1   # C2+C3 的改动全部丢弃', output: '三种模式移动 HEAD 到同一位置（C1），但对暂存区和工作区的处理不同。', explain: '记忆口诀：soft 只动 HEAD（改动全保留在 staged），mixed 动 HEAD + 暂存区（改动在 unstaged），hard 全动（改动全丢弃）。' },
      { title: 'reset 单个文件到历史版本', cmd: 'git reset HEAD~3 -- src/login.ts', output: 'Unstaged changes after reset:\nM  src/login.ts', explain: '只把 src/login.ts 回退到 3 个 commit 之前的版本（在工作区），其他文件不受影响。精准回退单个文件。' },
    ],
    diagnosis: [
      { symptom: '误操作 git reset --hard 丢失了未提交的修改', cause: 'hard reset 会丢弃工作区和暂存区的所有改动。', fix: '已暂存（staged）的文件可能通过 git fsck --lost-found 恢复（.git/lost-found/other/ 目录下）。未暂存的修改无法恢复。养成 git stash 的习惯。' },
      { symptom: 'git reset 后远程分支和本地不一致，push 被拒绝', cause: 'reset 回退了本地分支，但远程分支还是旧的。', fix: '如果确认要覆盖远程：git push --force-with-lease（比 --force 更安全，会检查远程是否有你不知道的更新）。' },
    ],
    exercises: [
      { level: '基础', task: 'git add 了 3 个文件后，只把其中 1 个文件从暂存区撤回', hint: 'git reset HEAD <file>', answer: 'git add a.txt b.txt c.txt\ngit reset HEAD b.txt  # 只撤回 b.txt\ngit status  # a.txt 和 c.txt 仍在暂存区，b.txt 在工作区' },
      { level: '进阶', task: '用 git reset 把最近 2 个 commit 拆开为 3 个更细粒度的 commit', hint: 'reset --mixed HEAD~2 然后分次 add + commit', answer: 'git reset HEAD~2  # 改动回到工作区\ngit add src/auth/ && git commit -m "feat: add auth module"\ngit add src/login.ts && git commit -m "feat: add login form"\ngit add src/config.ts && git commit -m "chore: update config"' },
      { level: '挑战', task: '解释 git reset 和 git revert 的根本区别，以及各自适用的场景', hint: '一个改写历史，一个不改写', answer: 'reset 把分支指针往回移，"抹掉"后面的 commit——适合还没 push 的本地 commit。\nrevert 创建新的"反向"commit——适合已经 push 到共享分支的 commit。\n核心原则：已共享的历史不要改写。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 68. Undoing Changes — 撤销变更
  // ─────────────────────────────────────────────────────────────
  "0Yi4cryT2v2SGBjouOas3": {
    mentalModel: 'Git 撤销变更是一个"决策树"——根据"改了什么"和"已经做了什么操作"选择不同的撤销命令。改了没 add？add 了没 commit？commit 了没 push？push 了？四种情况对应四种工具。',
    sections: [
      { title: '撤销工作区的修改（还没 add）', content: '场景：你编辑了 file.ts，想撤销修改回到上次 commit 的版本。\n\ngit restore file.ts           # 推荐（Git 2.23+）\ngit checkout -- file.ts       # 旧写法\n\n撤销所有修改：\ngit restore .\n\n⚠️ 这个操作不可逆——未暂存的修改一旦丢弃就找不回来了。操作前确认 git diff 看清要丢什么。' },
      { title: '撤销暂存（已 add 但没 commit）', content: '场景：你 git add 了文件，但想取消暂存（保留修改在工作区）。\n\ngit restore --staged file.ts  # 推荐（Git 2.23+）\ngit reset HEAD file.ts        # 旧写法\n\n取消所有暂存：\ngit restore --staged .\n\n文件内容不变，只是从暂存区移回工作区。' },
      { title: '撤销 commit（已 commit 但没 push）', content: '场景：你 commit 了但 message 写错了，或者想重新组织改动。\n\n方法1：修改 message\ngit commit --amend -m "correct message"\n\n方法2：撤销 commit 保留改动\ngit reset --soft HEAD~1  # 改动回到暂存区\ngit reset HEAD~1         # 改动回到工作区\n\n因为没 push，所以改写本地历史完全安全。' },
      { title: '撤销已 push 的 commit', content: '场景：你 push 了一个有 bug 的 commit 到远程。\n\n✅ 正确做法：git revert\ngit revert HEAD         # 创建反向 commit\ngit push                # 推送撤销 commit\n\n❌ 危险做法：git reset --hard + force push\ngit reset --hard HEAD~1\ngit push --force        # 可能覆盖队友的工作\n\n已 push 的 commit 属于"公共历史"，用 revert 追加而非 reset 改写。' },
      { title: '撤销速查表', content: '| 场景              | 命令                          | 影响范围    |\n|-------------------|-------------------------------|-------------|\n| 撤销工作区修改     | git restore <file>            | 工作区      |\n| 取消暂存           | git restore --staged <file>   | 暂存区      |\n| 修改上次 commit    | git commit --amend            | 最新 commit |\n| 撤销未 push 的 commit | git reset --soft HEAD~1    | HEAD+暂存区 |\n| 撤销已 push 的 commit | git revert HEAD            | 新增 commit |\n| 丢弃所有未提交改动  | git checkout . 或 git restore . | 工作区    |\n| 恢复到某个旧版本    | git checkout <hash> -- <file> | 单个文件   |' },
    ],
    diagnosis: [
      { symptom: '误执行 git restore . 丢失了所有未提交的修改', cause: 'git restore . 会丢弃工作区所有改动，无法恢复。', fix: '养成修改前先 git stash 的习惯。如果已经丢了，已 staged 的文件可能通过 git fsck --lost-found 找回。' },
      { symptom: 'git revert 后代码状态不对', cause: '被 revert 的 commit 之后的其他 commit 依赖了它的改动，revert 导致连锁问题。', fix: '检查 git log 理解 commit 依赖关系，可能需要 revert 多个相关 commit，或用 reset --hard 回到一个已知的稳定版本。' },
    ],
    exercises: [
      { level: '基础', task: '修改一个文件但不 commit，然后用 git restore 恢复原状', hint: 'git restore <file>', answer: 'echo "changes" >> file.txt\ngit diff file.txt  # 确认修改\ngit restore file.txt  # 撤销修改\ngit diff file.txt  # 空输出，已恢复' },
      { level: '进阶', task: '做 2 个 commit（没 push），撤销第 1 个 commit 但保留它的改动在工作区', hint: 'git reset（默认 mixed 模式）', answer: 'git log --oneline -2\n# 找到第 1 个 commit 的 hash\ngit reset <hash>  # 默认 mixed 模式\n# HEAD 回到第 1 个 commit 之前，改动在工作区' },
      { level: '挑战', task: '已经 push 了一个有 bug 的 commit，用 revert 撤销它，然后解释为什么不能用 reset', hint: 'git revert + git push', answer: 'git revert HEAD\ngit push\n\n不能用 reset 的原因：reset 改写历史后需要 force push，会覆盖队友基于那个 commit 做的工作。revert 创建新 commit，不改写历史，对所有人安全。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 69. Viewing Diffs — 查看差异
  // ─────────────────────────────────────────────────────────────
  "-0zQvCHG8jS_ghSjmTeIx": {
    mentalModel: 'git diff 是"代码放大镜"——它逐行对比两个版本的文件，用红色标记删除、绿色标记新增。无论你想看"我改了什么"、"PR 改了什么"还是"两个版本差在哪"，diff 都是答案。',
    handsOn: [
      { title: '查看工作区 vs 暂存区的差异', cmd: '# 修改了文件但还没 git add\ngit diff', output: 'diff --git a/src/app.ts b/src/app.ts\nindex 1a2b3c4..5d6e7f8 100644\n--- a/src/app.ts\n+++ b/src/app.ts\n@@ -5,7 +5,7 @@\n function init() {\n-  const port = 3000;\n+  const port = process.env.PORT || 3000;\n   app.listen(port);', explain: 'git diff（无参数）对比工作区和暂存区。显示你改了但还没 add 的内容。- 号行是旧版本，+ 号行是新版本。' },
      { title: '查看暂存区 vs 最新 commit 的差异', cmd: 'git add src/app.ts && git diff --staged', output: 'diff --git a/src/app.ts b/src/app.ts\n--- a/src/app.ts\n+++ b/src/app.ts\n@@ -5,7 +5,7 @@\n-  const port = 3000;\n+  const port = process.env.PORT || 3000;', explain: '--staged（或 --cached）对比暂存区和 HEAD commit。显示你即将在下次 commit 中提交的改动。等同于 git commit 前预览。' },
      { title: '对比两个分支', cmd: 'git diff main..feature-login --stat', output: ' src/auth/login.ts  | 89 +++++++++\n src/auth/jwt.ts    | 45 +++++\n src/auth/test.ts   | 120 +++++++++++\n 3 files changed, 254 insertions(+)', explain: 'main..feature-login 对比两个分支的差异。--stat 显示汇总。这是创建 PR 前预览"我的分支相对 main 改了什么"的方式。' },
      { title: '只看文件名和变更类型', cmd: 'git diff main..feature-login --name-status', output: 'A  src/auth/login.ts\nA  src/auth/jwt.ts\nA  src/auth/test.ts', explain: '--name-status 显示文件名和变更类型：A=新增、M=修改、D=删除、R=重命名。快速了解变更范围。' },
      { title: '忽略空白变化的 diff', cmd: 'git diff -w --ignore-blank-lines main..feature', output: '（仅显示有意义的代码变化，忽略缩进、空行、行尾空格的变化）', explain: '-w（--ignore-all-space）忽略所有空白差异。当团队混用了不同的格式化工具时，这个选项能帮你只看"真正的代码变化"。' },
    ],
    diagnosis: [
      { symptom: 'git diff 什么也不显示，但你确实修改了文件', cause: '你的修改已经 git add 了。git diff 无参数只对比工作区和暂存区，staged 的改动看不到。', fix: '用 git diff --staged 查看已暂存的改动。或用 git diff HEAD 查看工作区相对于最新 commit 的全部改动（包括 staged 和 unstaged）。' },
      { symptom: 'diff 输出中 @@ -5,7 +5,7 @@ 这些数字看不懂', cause: '这是 unified diff 格式的 hunk header。', fix: '@@ -旧文件起始行,旧行数 +新文件起始行,新行数 @@。例如 @@ -5,7 +5,7 @@ 表示旧文件从第 5 行开始的 7 行 vs 新文件从第 5 行开始的 7 行。' },
    ],
    exercises: [
      { level: '基础', task: '修改两个文件（一个 add，一个不 add），分别用 git diff 和 git diff --staged 查看', hint: 'git diff 看 unstaged，git diff --staged 看 staged', answer: 'echo "a" > a.txt && echo "b" > b.txt\ngit add a.txt\ngit diff          # 只显示 b.txt（unstaged）\ngit diff --staged # 只显示 a.txt（staged）\ngit diff HEAD     # 显示 a.txt 和 b.txt（全部改动）' },
      { level: '进阶', task: '用 git diff 对比两个 commit，只看某个特定目录的变化', hint: 'git diff <c1> <c2> -- <dir>', answer: 'git diff HEAD~5 HEAD -- src/api/\n# 只看 src/api/ 目录在最近 5 个 commit 中的变化' },
      { level: '挑战', task: '配置 git 使用外部 diff 工具（如 VS Code 或 meld）来查看差异', hint: 'git config diff.tool', answer: 'git config --global diff.tool vscode\ngit config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"\n# 之后用 git difftool 代替 git diff 打开 VS Code 的对比视图' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 70. Staged Changes — 已暂存变更
  // ─────────────────────────────────────────────────────────────
  "mzjtCdpke1ayHcEuS-YUS": {
    mentalModel: 'Staged Changes（暂存区的变更）是"你挑选出来准备装入信封的内容"——git add 把文件放入暂存区，git commit 把暂存区打包成一个 commit。暂存区让你精确控制每次 commit 包含什么。',
    handsOn: [
      { title: '查看暂存区的内容', cmd: 'git add src/login.ts src/config.ts && git diff --staged', output: 'diff --git a/src/login.ts b/src/login.ts\n--- a/src/login.ts\n+++ b/src/login.ts\n@@ -10,3 +10,5 @@\n+  const token = generateJWT(user);\n+  return { user, token };\n\ndiff --git a/src/config.ts b/src/config.ts\n...', explain: 'git diff --staged（或 --cached）显示暂存区相对于 HEAD 的差异。这就是你下次 git commit 会提交的内容。' },
      { title: '查看暂存区的文件列表', cmd: 'git diff --staged --name-status', output: 'M  src/login.ts\nM  src/config.ts', explain: '--name-status 只显示文件名和变更类型（M=修改、A=新增、D=删除）。快速确认"我准备提交哪些文件"。' },
      { title: '分块暂存（partial staging）', cmd: 'git add -p src/login.ts', output: 'diff --git a/src/login.ts b/src/login.ts\n@@ -10,3 +10,8 @@\n+  // Change 1: validation\n+  if (!email) throw new Error("Email required");\n+  \n+  // Change 2: JWT\n+  const token = generateJWT(user);\nStage this hunk [y,n,q,a,d,s,e,?]?', explain: 'git add -p（--patch）逐块（hunk）询问你是否暂存。输入 y 暂存这块、n 跳过、s 拆分为更小的块。这让你把一次编辑的不同部分分到不同的 commit 中。' },
      { title: '取消暂存', cmd: 'git restore --staged src/config.ts\n# 或旧写法：git reset HEAD src/config.ts\ngit diff --staged --name-status', output: 'M  src/login.ts', explain: 'restore --staged 把文件从暂存区移回工作区。文件内容不变，只是不会在下次 commit 中包含。' },
    ],
    diagnosis: [
      { symptom: 'git commit 后发现多提交了一个不该提交的文件', cause: 'git add . 把所有改动都暂存了，包括不想提交的文件（如 .env、调试日志）。', fix: 'git reset HEAD~1 撤销 commit（改动回到工作区），重新选择要 add 的文件。或用 git commit --amend 修改提交。' },
      { symptom: 'git add -p 的交互界面看不懂', cause: 'hunk 分割不符合预期，或者不熟悉选项含义。', fix: '关键选项：y=暂存这块、n=不暂存、s=拆分成更小块、e=手动编辑、?=显示帮助。如果 s 不能拆分，用 e 进入编辑模式。' },
    ],
    exercises: [
      { level: '基础', task: '修改 3 个文件，只暂存其中 2 个，commit 后验证第 3 个文件不在提交中', hint: 'git add <file1> <file2> + git commit', answer: 'echo "a" >> a.txt && echo "b" >> b.txt && echo "c" >> c.txt\ngit add a.txt b.txt\ngit diff --staged --name-only  # 确认只有 a.txt b.txt\ngit commit -m "update a and b"\ngit status  # c.txt 仍然显示为 modified' },
      { level: '进阶', task: '用 git add -p 把一个文件的两处修改分到两个不同的 commit 中', hint: 'git add -p → 第一块 y、第二块 n → commit → 再 add → commit', answer: '# 编辑文件在两个不同位置做了修改\ngit add -p file.txt\n# 第一个 hunk: y（暂存）\n# 第二个 hunk: n（不暂存）\ngit commit -m "feat: change 1"\ngit add file.txt\ngit commit -m "feat: change 2"' },
      { level: '挑战', task: '解释 Git 暂存区（Index）的内部实现：它存储的是什么？', hint: '.git/index 文件', answer: '暂存区实际上是一个二进制文件 .git/index，存储了一个"树形快照"——记录了每个暂存文件的路径、权限模式和 blob SHA-1 hash。git commit 时直接把这个树形快照写入新的 commit 对象。这就是为什么 git add 是必需的——它在构建这个快照。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 71. Unstaged Changes — 未暂存变更
  // ─────────────────────────────────────────────────────────────
  "uxqJzQFRcALqatNRIWR0w": {
    mentalModel: 'Unstaged Changes 是"你改了但还没告诉 Git 要提交的"——文件在工作区被修改了，但还没 git add 到暂存区。它们是"草稿纸上的涂改"，Git 知道它们变了，但下次 commit 不会包含它们。',
    handsOn: [
      { title: '查看未暂存的变更', cmd: 'git diff', output: 'diff --git a/src/app.ts b/src/app.ts\n--- a/src/app.ts\n+++ b/src/app.ts\n@@ -3,5 +3,6 @@\n import express from "express";\n const app = express();\n+app.use(cors());\n app.listen(3000);', explain: 'git diff（无参数）显示工作区中已修改但未暂存的文件差异。这些改动不会在下次 commit 中提交。' },
      { title: '查看未暂存变更的文件列表', cmd: 'git diff --name-only', output: 'src/app.ts\nsrc/config.ts\npackage.json', explain: '只看文件名，不看具体内容。快速确认"我改了哪些文件还没 add"。也可以用 git status --short 看更紧凑的视图。' },
      { title: '查看某个文件的未暂存变更', cmd: 'git diff -- src/app.ts', output: 'diff --git a/src/app.ts b/src/app.ts\n--- a/src/app.ts\n+++ b/src/app.ts\n@@ -3,5 +3,6 @@\n+app.use(cors());', explain: '-- <file> 限制只看特定文件的差异。当项目改了很多文件时，聚焦一个文件的变更。' },
      { title: '暂存一部分未暂存的变更', cmd: 'git add src/app.ts && git status --short', output: 'M  src/app.ts\n M src/config.ts\n M package.json', explain: 'add 后 src/app.ts 从 unstaged 变为 staged（注意 M 的位置：左边 M = staged，右边 M = unstaged）。config.ts 和 package.json 还是 unstaged。' },
      { title: '丢弃未暂存的变更', cmd: 'git restore src/config.ts\n# 或旧写法：git checkout -- src/config.ts\ngit diff -- src/config.ts', output: '(空输出，文件已恢复到 HEAD 版本)', explain: 'restore 丢弃工作区的修改，文件回到最新 commit 的状态。⚠️ 这个操作不可逆——没有暂存过的修改一旦丢弃就找不回来。' },
    ],
    diagnosis: [
      { symptom: 'git status 显示 "Changes not staged for commit" 但我不确定要不要提交', cause: '改了代码但还没决定是一次独立提交还是和别的改动一起提交。', fix: '用 git diff 看清楚改了什么，再决定：git add（提交）或 git restore（丢弃）或 git stash（暂存起来稍后处理）。' },
      { symptom: '一个文件同时有 staged 和 unstaged 的改动，git diff 只显示 unstaged 部分', cause: '你先 add 了一些改动（staged），然后又做了更多修改（unstaged）。git diff 只显示 unstaged 部分。', fix: 'git diff HEAD -- <file> 显示全部改动（staged + unstaged），对比基准是 HEAD commit。或分两次看：git diff --staged + git diff。' },
    ],
    exercises: [
      { level: '基础', task: '修改一个文件，查看未暂存的变更，然后决定是暂存还是丢弃', hint: 'git diff → git add 或 git restore', answer: 'echo "new line" >> file.txt\ngit diff  # 查看改了什么\n# 如果满意：git add file.txt\n# 如果不满意：git restore file.txt' },
      { level: '进阶', task: '一个文件做了 3 处修改：暂存第 1 处，保留第 2 处为 unstaged，丢弃第 3 处', hint: 'git add -p 分块暂存 + git restore -p 分块丢弃', answer: 'git add -p file.txt\n# hunk 1: y（暂存）\n# hunk 2: n（不暂存）\n# hunk 3: n（不暂存）\ngit restore -p file.txt\n# hunk 1: 已经 staged 跳过\n# hunk 2: n（保留）\n# hunk 3: y（丢弃）' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 72. commit-msg hook — commit-msg 钩子
  // ─────────────────────────────────────────────────────────────
  "jzYjHx-gIKSP8dQUTqWVw": {
    mentalModel: 'commit-msg hook 是 commit 时的"message 审查员"——在你写完 commit message、Git 正式创建 commit 之前，它运行一个脚本检查 message 是否符合规范。不符合就直接拒绝 commit。',
    handsOn: [
      { title: '创建一个 commit-msg hook 检查格式', cmd: 'cat > .git/hooks/commit-msg << \'EOF\'\n#!/bin/sh\n# 检查 message 是否以 type: 开头（如 feat:, fix:, docs:）\nMSG=$(cat "$1")\nif ! echo "$MSG" | grep -qE "^(feat|fix|docs|refactor|test|chore|style|perf|ci|build|revert):"; then\n  echo "ERROR: Commit message must start with one of:"\n  echo "  feat: fix: docs: refactor: test: chore: style: perf: ci: build: revert:"\n  echo "  Your message: $MSG"\n  exit 1\nfi\nEOF\nchmod +x .git/hooks/commit-msg', output: '(hook 文件创建成功)', explain: 'commit-msg hook 接收一个参数 $1——临时文件路径，包含用户输入的 commit message。脚本退出码为 0 表示通过，非 0 表示拒绝 commit。' },
      { title: '测试 hook 是否生效', cmd: 'echo "test" > test.txt && git add . && git commit -m "some random message"', output: 'ERROR: Commit message must start with one of:\n  feat: fix: docs: refactor: test: chore: style: perf: ci: build: revert:\n  Your message: some random message', explain: 'commit 被拒绝了！hook 检查到 message 不以规定的 type 前缀开头。只有符合格式的 message 才能通过。' },
      { title: '用规范格式通过 hook', cmd: 'git commit -m "feat: add test file"', output: '[main abc1234] feat: add test file\n 1 file changed, 1 insertion(+)', explain: 'message 以 feat: 开头，通过了 hook 检查，commit 成功创建。' },
      { title: '用 commitlint 替代手写 hook', cmd: 'npm install -D @commitlint/cli @commitlint/config-conventional\necho \'module.exports = {extends: ["@commitlint/config-conventional"]};\' > commitlint.config.js\n# 配合 husky 使用：\nnpx husky add .husky/commit-msg "npx commitlint --edit \\"$1\\""', output: 'commitlint 会检查 Conventional Commits 规范：\n✅ feat: add login\n✅ fix(auth): resolve token expiry\n❌ add login (缺少 type)', explain: 'commitlint 是业界标准的 commit message 校验工具，支持丰富的规则配置。配合 husky 自动注册 Git hook，比手写 shell 脚本更可靠。' },
    ],
    diagnosis: [
      { symptom: 'commit-msg hook 没有执行，不符合格式的 message 也能提交', cause: 'hook 文件没有执行权限，或者文件名拼写错误。', fix: 'chmod +x .git/hooks/commit-msg 添加执行权限。确认文件名是 commit-msg（无扩展名）。用 ls -la .git/hooks/commit-msg 检查。' },
      { symptom: 'husky 配置的 commit-msg hook 在队友的机器上不生效', cause: '队友 clone 后没有执行 husky 的安装步骤（npx husky install 或 npm install 中的 prepare 脚本）。', fix: '在 package.json 中添加 "scripts": {"prepare": "husky install"}，这样 npm install 后自动配置 hooks。确认 .husky/ 目录已提交到仓库。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 commit-msg hook，要求 message 长度至少 10 个字符', hint: '检查 $1 文件内容的字符串长度', answer: 'cat > .git/hooks/commit-msg << \'EOF\'\n#!/bin/sh\nMSG=$(cat "$1")\nif [ ${#MSG} -lt 10 ]; then\n  echo "ERROR: Commit message too short (min 10 chars, got ${#MSG})"\n  exit 1\nfi\nEOF\nchmod +x .git/hooks/commit-msg' },
      { level: '进阶', task: '配置 husky + commitlint 让团队所有 commit 都遵循 Conventional Commits 规范', hint: 'npm install husky @commitlint/cli', answer: 'npm install -D husky @commitlint/cli @commitlint/config-conventional\necho \'module.exports = {extends: ["@commitlint/config-conventional"]}\' > commitlint.config.js\nnpx husky init\necho \'npx commitlint --edit "$1"\' > .husky/commit-msg' },
      { level: '挑战', task: '写一个 commit-msg hook 同时检查：1) Conventional Commits 格式 2) message 不超过 72 字符 3) 必须关联 issue 编号（包含 #数字）', hint: '在 shell 脚本中用 grep 和 wc 检查多个条件', answer: '#!/bin/sh\nMSG=$(cat "$1")\n# 检查格式\nif ! echo "$MSG" | head -1 | grep -qE "^(feat|fix|docs|refactor|test|chore):"; then\n  echo "ERROR: Must start with type:"; exit 1\nfi\n# 检查长度\nif [ $(echo "$MSG" | head -1 | wc -c) -gt 72 ]; then\n  echo "ERROR: First line too long"; exit 1\nfi\n# 检查 issue 关联\nif ! echo "$MSG" | grep -qE "#[0-9]+"; then\n  echo "ERROR: Must reference an issue (e.g., #42)"; exit 1\nfi' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 73. What and Why use hooks — 钩子是什么为什么用
  // ─────────────────────────────────────────────────────────────
  "d0-u_-_vtPK8tnUpnj_NB": {
    mentalModel: 'Git hooks 是"代码流水线上的质检站"——在 Git 操作的关键节点（commit、push、merge 等）自动触发你预设的脚本。它们让你在代码进入仓库之前就拦截问题，而不是事后补救。',
    sections: [
      { title: 'Hooks 是什么', content: 'Hooks 是放在 .git/hooks/ 目录下的可执行脚本，Git 在特定事件发生时自动运行它们。\n\n每个 hook 对应一个 Git 生命周期节点：\n• pre-commit：git commit 执行前（检查代码质量）\n• commit-msg：commit message 写好后（检查格式）\n• post-commit：commit 完成后（通知、日志）\n• pre-push：git push 执行前（最后检查）\n• post-checkout：git checkout 后（自动安装依赖）\n• post-update：远程仓库收到 push 后（部署触发）\n\n脚本可以用任何语言写（shell、Python、Node.js），只要能执行。' },
      { title: '为什么要用 Hooks', content: '1. **防患于未然**：在代码进入仓库前拦截问题（lint 错误、敏感信息、格式不合规）\n2. **统一团队规范**：不依赖每个人"自觉"，由工具强制执行\n3. **减少人工 Review 负担**：格式、lint、message 规范由 hook 自动检查，Review 聚焦逻辑\n4. **自动化流程**：commit 后自动跑测试、push 后自动部署\n5. **不可绕过**（相比 IDE 插件）：hooks 和 Git 深度绑定，只要用 Git 就会触发' },
      { title: '常用 Hooks 和典型用途', content: '| Hook           | 触发时机           | 典型用途                          |\n|----------------|--------------------|----------------------------------|\n| pre-commit     | commit 前          | ESLint/Prettier 检查、敏感信息扫描  |\n| commit-msg     | message 写好后     | Conventional Commits 校验         |\n| pre-push       | push 前            | 运行测试套件、检查编译              |\n| post-checkout  | 切换分支后         | npm install（依赖变化时）          |\n| post-merge     | merge 完成后       | npm install（依赖变化时）          |\n| post-update    | 远程收到 push 后   | 触发部署、更新文档                 |' },
      { title: 'Hooks 管理工具', content: '手写 .git/hooks/ 脚本的问题：\n• 不随仓库分享（.git/ 不进入版本控制）\n• 队友 clone 后需要手动安装\n\n解决方案：\n1. **Husky**（最流行）：在 .husky/ 目录管理 hooks，随仓库分享，npm install 自动安装\n2. **lefthook**：用 YAML 配置，支持并行执行\n3. **pre-commit**（Python 生态）：丰富的 hook 库\n\n推荐：JS/TS 项目用 Husky，多语言项目用 lefthook 或 pre-commit。' },
    ],
    diagnosis: [
      { symptom: 'hook 执行时报 "command not found"（如 eslint、python 找不到）', cause: 'hook 脚本运行在非交互式 shell 中，PATH 环境变量和你终端里不同。', fix: '在 hook 脚本开头设置 PATH：export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"。或用绝对路径：npx eslint 而不是 eslint。' },
      { symptom: '队友说"我那边 hook 没生效"，同一个仓库行为不一致', cause: '原生 .git/hooks/ 不进入版本控制，每个人的 hooks 是独立的。', fix: '用 Husky 管理 hooks：hooks 文件放在 .husky/ 目录（进入版本控制），package.json 中添加 "prepare": "husky install" 脚本，npm install 后自动激活。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 pre-commit hook，在每次 commit 前运行 echo "Running checks..."', hint: '.git/hooks/pre-commit', answer: 'cat > .git/hooks/pre-commit << \'EOF\'\n#!/bin/sh\necho "Running checks..."\n# 这里可以添加 lint、test 等命令\nEOF\nchmod +x .git/hooks/pre-commit\n# 测试：git add . && git commit -m "test"' },
      { level: '进阶', task: '用 Husky 配置 pre-commit 和 commit-msg 两个 hook', hint: 'npx husky init', answer: 'npm install -D husky\nnpx husky init\necho "npx lint-staged" > .husky/pre-commit\necho \'npx commitlint --edit "$1"\' > .husky/commit-msg\n# 配置 lint-staged：package.json 中添加\n# "lint-staged": { "*.{ts,js}": ["eslint --fix", "prettier --write"] }' },
      { level: '挑战', task: '写一个 pre-commit hook 检测代码中是否包含敏感信息（API key、密码等），发现则拒绝 commit', hint: '用 grep 正则匹配常见密钥模式', answer: '#!/bin/sh\n# .git/hooks/pre-commit\nif git diff --cached --diff-filter=ACM | grep -iE "(api[_-]?key|password|secret|token)\\s*[:=]\\s*[\'\\"][A-Za-z0-9+/=]{16,}" ; then\n  echo "ERROR: Possible secret detected! Remove before committing."\n  echo "Use .env file or environment variables for secrets."\n  exit 1\nfi' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 74. git commit --amend — 修改提交
  // ─────────────────────────────────────────────────────────────
  "NjPnEXLf1Lt9qzgxccogv": {
    mentalModel: 'git commit --amend 是"最后一次 commit 的涂改液"——它可以修改最后一次 commit 的 message 和内容。本质上它不是"修改"而是"替换"——创建一个新的 commit 替换掉旧的。',
    handsOn: [
      { title: '修改最后一次 commit 的 message', cmd: 'git commit --amend -m "feat: add user authentication with OAuth2 support"', output: '[main abc1234] feat: add user authentication with OAuth2 support\n Date: Mon May 26 16:00:00 2025\n 3 files changed, 45 insertions(+)', explain: '旧的 commit 被新的替换（hash 变了）。message 从原来的简短描述改成了更详细的版本。' },
      { title: '往最后一次 commit 追加修改', cmd: '# 发现漏了一个文件\ngit add src/auth/oauth.ts\ngit commit --amend --no-edit', output: '[main def5678] feat: add user authentication\n 4 files changed, 60 insertions(+)', explain: '--no-edit 保留原来的 message 不变，只是把新 add 的文件追加到 commit 中。hash 变了（因为内容变了），但 message 不变。' },
      { title: '打开编辑器修改 message', cmd: 'git commit --amend', output: '(打开默认编辑器，显示当前 message，可以修改后保存退出)', explain: '不加 -m 参数会打开编辑器让你修改 message。适合需要修改多行 message（标题 + body + footer）的场景。' },
      { title: 'amend 后需要 force push', cmd: 'git push --force-with-lease', output: '+ abc1234...def5678 main -> main (forced update)', explain: 'amend 创建了新 commit（hash 变了），普通 push 会被拒绝。--force-with-lease 比 --force 安全——如果远程有你不知道的更新，它会拒绝 push。' },
    ],
    diagnosis: [
      { symptom: 'amend 后发现丢失了之前 commit 的内容', cause: 'amend 时你不小心修改了工作区文件，或者 add 了不该 add 的文件。', fix: '用 git reflog 找到 amend 之前的 commit hash，然后 git reset --soft <hash> 恢复。' },
      { symptom: 'amend 后 push 报错 "non-fast-forward"', cause: 'amend 改写了 commit hash，普通 push 被拒绝。', fix: 'git push --force-with-lease。注意：只在个人分支上这样做，不要在共享分支上 force push。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 commit，然后用 amend 修改它的 message', hint: 'git commit --amend -m', answer: 'echo "feature" > feature.txt && git add . && git commit -m "add feature"\ngit commit --amend -m "feat: add new feature with validation"' },
      { level: '进阶', task: 'commit 后发现漏了一个文件，用 amend 追加进去（不改 message）', hint: 'git add + git commit --amend --no-edit', answer: 'git add forgotten-file.txt\ngit commit --amend --no-edit\n# forgotten-file.txt 被追加到上一次 commit 中' },
      { level: '挑战', task: '解释为什么 amend 后 commit 的 hash 会变化，以及这对共享分支意味着什么', hint: 'hash 是 commit 内容的 SHA-1', answer: 'commit hash = SHA-1(tree + parent + author + message + timestamp)。amend 改变了其中任何一项（message 或 tree），hash 就完全不同。\n对共享分支意味着：队友可能已经基于旧 hash 做了工作，force push 后他们的本地和远程不一致。所以 amend 只用在还没 push 的 commit 上。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 75. post-checkout hook — post-checkout 钩子
  // ─────────────────────────────────────────────────────────────
  "SANEQI2rgOtsMQyn4qUCq": {
    mentalModel: 'post-checkout hook 在你切换分支后自动执行——就像"切换工作台时自动整理工具"。最常见的用途是检测到 package.json 变化后自动运行 npm install，确保依赖始终和分支匹配。',
    handsOn: [
      { title: '创建一个自动 npm install 的 post-checkout hook', cmd: 'cat > .git/hooks/post-checkout << \'EOF\'\n#!/bin/sh\n# 参数：$1=之前的HEAD, $2=新的HEAD, $3=分支切换(1)还是文件检出(0)\nPREV_HEAD=$1\nNEW_HEAD=$2\nBRANCH_CHECKOUT=$3\n\n# 只在分支切换时执行（不是 git checkout -- <file>）\nif [ "$BRANCH_CHECKOUT" != "1" ]; then\n  exit 0\nfi\n\n# 检查 package.json 是否有变化\nif ! git diff --quiet "$PREV_HEAD" "$NEW_HEAD" -- package.json package-lock.json; then\n  echo "📦 package.json changed, running npm install..."\n  npm install\nfi\nEOF\nchmod +x .git/hooks/post-checkout', output: '(hook 创建成功)', explain: 'post-checkout 接收 3 个参数：切换前后的 HEAD hash 和一个标志位（1=分支切换，0=文件检出）。只在分支切换且 package.json 有变化时才跑 npm install。' },
      { title: '测试 post-checkout hook', cmd: '# 假设 feature 分支的 package.json 比 main 多了一个依赖\ngit checkout feature', output: 'Switched to branch \'feature\'\n📦 package.json changed, running npm install...\n\nadded 3 packages in 2s', explain: '切换到 feature 分支时，hook 检测到 package.json 变了，自动运行 npm install。省去了"切了分支忘记装依赖导致代码跑不起来"的烦恼。' },
      { title: '切换到 package.json 没变的分支', cmd: 'git checkout hotfix', output: 'Switched to branch \'hotfix\'', explain: 'package.json 没变，hook 跳过了 npm install。没有不必要的输出和等待。' },
      { title: 'post-checkout 也可以清理构建产物', cmd: 'cat >> .git/hooks/post-checkout << \'EOF\'\n\n# 清理旧的构建产物\nif [ -d "dist" ]; then\n  echo "🧹 Cleaning old build artifacts..."\n  rm -rf dist/\nfi\nEOF', output: '(追加到 hook 中)', explain: '切换分支后清理 dist/ 目录，避免旧分支的构建产物干扰新分支。特别适合前端项目，不同分支的打包结果可能冲突。' },
    ],
    diagnosis: [
      { symptom: 'post-checkout hook 导致 git checkout 变得很慢', cause: 'hook 中执行了耗时操作（如 npm install），每次 checkout 都要等。', fix: '把耗时操作改为异步或只在必要时执行（检查 package.json 是否变了）。或输出提示让用户手动执行。' },
      { symptom: 'post-checkout hook 在 git checkout -- <file> 时也触发了', cause: '没有检查 $3 参数（分支切换 vs 文件检出）。', fix: '在 hook 开头加判断：if [ "$3" != "1" ]; then exit 0; fi。只在分支切换（$3=1）时执行。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 post-checkout hook，切换分支后打印当前分支名', hint: 'git branch --show-current', answer: 'cat > .git/hooks/post-checkout << \'EOF\'\n#!/bin/sh\nif [ "$3" = "1" ]; then\n  echo "Switched to: $(git branch --show-current)"\nfi\nEOF\nchmod +x .git/hooks/post-checkout' },
      { level: '进阶', task: '配置 post-checkout hook 在 package.json 或 requirements.txt 变化时自动安装依赖', hint: '检查多个依赖文件', answer: '#!/bin/sh\nif [ "$3" != "1" ]; then exit 0; fi\nif ! git diff --quiet "$1" "$2" -- package.json package-lock.json; then\n  echo "Running npm install..." && npm install\nfi\nif ! git diff --quiet "$1" "$2" -- requirements.txt; then\n  echo "Running pip install..." && pip install -r requirements.txt\nfi' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 76. git rebase — git rebase 变基
  // ─────────────────────────────────────────────────────────────
  "HMEfUFNu_Wp_Pac7VWHr-": {
    mentalModel: 'git rebase 是"把你的分支拔起来，重新插到另一个基点上"——它把你的 commit 逐个"重放"到目标分支的最新位置之上，创造出一条干净的线性历史。比喻：把一段铁轨从旧路基拆下来，铺到新路基上。',
    handsOn: [
      { title: '基本 rebase 操作', cmd: '# 当前在 feature 分支，main 有 2 个新 commit\ngit log --oneline --graph --all\n# * c3 (feature) feat: add button\n# * c2 feat: add form\n# | * m3 (main) fix: hotfix\n# | * m2 fix: typo\n# |/\n# * c1 initial\n\ngit rebase main', output: 'First, rewinding head to replay your work on top of it...\nApplying: feat: add form\nApplying: feat: add button\n\n# 结果：\n# * c3\' (feature) feat: add button\n# * c2\' feat: add form\n# * m3 (main) fix: hotfix\n# * m2 fix: typo\n# * c1 initial', explain: 'rebase 把 feature 的 c2、c3 两个 commit "重放"到 main 的 m3 之上。新的 c2\'、c3\' 内容相同但 hash 不同（因为 parent 变了）。历史变成了一条直线。' },
      { title: 'rebase 过程中处理冲突', cmd: 'git rebase main\n# 如果 c2 和 m2 冲突了：\n# CONFLICT (content): Merge conflict in src/app.ts', output: 'Auto-merging src/app.ts\nCONFLICT (content): Merge conflict in src/app.ts\nCould not apply c2... feat: add form', explain: 'rebase 逐个应用你的 commit，任何一个可能和目标分支冲突。解决冲突后：git add <file> + git rebase --continue。放弃：git rebase --abort。' },
      { title: '交互式 rebase（整理 commit 历史）', cmd: 'git rebase -i HEAD~3', output: 'pick abc1234 feat: add form\npick def5678 fix: typo in form\npick ghi9012 feat: add button\n\n# Rebase l0m1n2o..ghi9012 onto l0m1n2o\n#\n# Commands:\n# p, pick = use commit\n# r, reword = use commit, but edit message\n# s, squash = use commit, but meld into previous\n# d, drop = remove commit', explain: '交互式 rebase 让你重新编排 commit：squash 合并、reword 改 message、drop 删除。这是整理"脏历史"的利器。' },
      { title: 'squash 多个 commit 为一个', cmd: '# 在交互式 rebase 编辑器中：\npick abc1234 feat: add form\nsquash def5678 fix: typo in form\npick ghi9012 feat: add button', output: '结果：2 个 commit（form + typo 合并为一个，button 保留）\n合并后的 commit 需要你写新的 message。', explain: 'squash 把多个小 commit 合并成一个有意义的 commit。把中间的 fix typo、debug 等噪音 commit 清理掉，留下干净的历史。' },
      { title: 'rebase vs merge 对比', cmd: '# merge 方式：\ngit merge main\n# *   merge-commit (feature)\n# |\\  \n# | * m3 (main)\n# | * m2\n# * | c3\n# * | c2\n# |/\n# * c1\n\n# rebase 方式：\ngit rebase main\n# * c3\' (feature)\n# * c2\'\n# * m3 (main)\n# * m2\n# * c1', explain: 'merge 保留完整的分支拓扑（有分叉和汇合），rebase 创造线性历史（一条直线）。选择取决于团队偏好：rebase 更干净，merge 更真实。' },
    ],
    diagnosis: [
      { symptom: 'rebase 过程中遇到连续多个冲突要反复解决', cause: '你的每个 commit 都和目标分支有冲突，rebase 逐个应用时每个都要解一次。', fix: '耐心逐个解决 + git rebase --continue。如果太痛苦，可以 git rebase --abort 放弃，改用 merge。' },
      { symptom: 'rebase 后 push 被拒绝', cause: 'rebase 改写了 commit hash（新 commit 和旧的内容相同但 parent 不同），普通 push 被拒绝。', fix: 'git push --force-with-lease。只在个人分支上这样做！共享分支不要 rebase + force push。' },
      { symptom: '交互式 rebase 搞乱了 commit 顺序导致冲突', cause: '调整 commit 顺序后，后面的 commit 依赖前面 commit 的改动。', fix: 'git rebase --abort 放弃，重新开始。注意保持有依赖关系的 commit 的先后顺序。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个 feature 分支做 2 个 commit，同时 main 也有 1 个新 commit，用 rebase 把 feature 变基到 main 上', hint: 'git rebase main', answer: 'git checkout main && echo "fix" >> a.txt && git add . && git commit -m "main fix"\ngit checkout feature && git rebase main\ngit log --oneline --graph  # 确认线性历史' },
      { level: '进阶', task: '用交互式 rebase 把 4 个 commit 整理为 2 个（squash 中间 2 个）', hint: 'git rebase -i HEAD~4', answer: 'git rebase -i HEAD~4\n# 编辑器中：\npick abc1234 feat: add user API\nsquash def5678 fix: typo\nsquash ghi9012 fix: another typo\npick jkl3456 feat: add UI\n# 保存后写新的 squash message' },
      { level: '挑战', task: '解释 "Golden Rule of Rebase"（rebase 黄金法则），并给出一个违反它会造成的具体后果', hint: '不要在共享分支上 rebase', answer: '黄金法则：永远不要在已经 push 到共享仓库的 commit 上执行 rebase。\n违反后果：你 rebase 改写了 hash 并 force push，队友本地还基于旧 hash 工作。他们 pull 时会产生重复 commit 或冲突。多人同时这样做会导致历史混乱到无法修复。' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 77. post-update hook — post-update 钩子
  // ─────────────────────────────────────────────────────────────
  "buxb5TpzQ-xxn0vqtGdS3": {
    mentalModel: 'post-update hook 在远程仓库收到 push 后执行——就像"邮筒收到信后自动通知收件人"。它运行在服务器端（而非你的电脑上），常用于触发部署、更新缓存或通知团队。',
    sections: [
      { title: 'post-update 的运行环境', content: 'post-update hook 运行在远程仓库（服务器端），不在你的本地电脑上。\n\n• 触发时机：远程仓库收到 push 并更新了 ref（分支/tag）后\n• 接收参数：被更新的 ref 名称（如 refs/heads/main）\n• 运行环境：服务器上的 shell，PATH 可能受限\n• 输出：会显示在 push 者的终端上（作为 push 输出的一部分）\n\n注意：GitHub.com 不支持原生 Git hooks。post-update 主要用在自建 Git 服务器或 GitLab/Gitea 等自托管平台。' },
      { title: '典型用途：自动部署', content: '#!/bin/sh\n# .git/hooks/post-update\n# 当 main 分支收到 push 时自动部署\n\nwhile read ref; do\n  if [ "$ref" = "refs/heads/main" ]; then\n    echo "🚀 Deploying to production..."\n    cd /var/www/myapp || exit 1\n    git pull origin main\n    npm install --production\n    npm run build\n    pm2 restart myapp\n    echo "✅ Deploy complete!"\n  fi\ndone' },
      { title: '典型用途：通知团队', content: '#!/bin/sh\n# 收到 push 后发通知到 Slack\nwhile read ref; do\n  BRANCH=$(echo "$ref" | sed \'s|refs/heads/||\')\n  curl -s -X POST https://hooks.slack.com/services/XXX \\\n    -d "{\\"text\\": \\"📢 $BRANCH was updated on the server\\"}"\ndone' },
      { title: '现代替代方案', content: 'post-update hook 的局限：\n• 只在自建 Git 服务器上有效\n• GitHub/GitLab 不支持原生 Git hooks\n• 服务器宕机时 hook 不执行\n• 难以调试（日志在服务器上）\n\n现代替代：\n• GitHub Actions：on: push 触发 workflow（推荐）\n• Webhooks：GitHub Settings → Webhooks → 配置 URL 接收 push 事件\n• CI/CD 平台：Jenkins、CircleCI、GitHub Actions\n\n自建服务器（裸机/VPS）上的小型项目仍然可以用 post-update hook 做简单部署。' },
    ],
    diagnosis: [
      { symptom: 'post-update hook 没有被执行', cause: 'hook 文件没有执行权限，或者你用的是 GitHub.com（不支持原生 hooks）。', fix: 'chmod +x hooks/post-update。如果是 GitHub，改用 Webhooks（Settings → Webhooks）或 GitHub Actions。' },
      { symptom: 'hook 中的命令报 "command not found"', cause: '服务器上的 PATH 环境变量不包含你使用的命令路径。', fix: '在 hook 脚本开头设置完整 PATH，或使用绝对路径（如 /usr/local/bin/node）。' },
    ],
    exercises: [
      { level: '基础', task: '写一个 post-update hook，收到 push 后打印被更新的分支名', hint: '读取 stdin 的 ref 参数', answer: '#!/bin/sh\nwhile read ref; do\n  echo "Updated: $ref"\ndone\n# 保存到 .git/hooks/post-update 并 chmod +x' },
      { level: '进阶', task: '写一个 post-update hook，在 main 分支收到 push 时自动运行测试', hint: '检查 ref 是否为 refs/heads/main', answer: '#!/bin/sh\nwhile read ref; do\n  if [ "$ref" = "refs/heads/main" ]; then\n    echo "Running tests on main..."\n    cd /path/to/worktree && npm test\n  fi\ndone' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 78. Rewriting History — 重写历史
  // ─────────────────────────────────────────────────────────────
  "sOoC-XxEoIvwKct00oKlX": {
    mentalModel: '重写历史是"修改已经录制好的磁带"——你可以改 commit message、合并/拆分/删除 commit、调整 commit 顺序。这让你的历史变得干净可读，但改写了 commit hash，对共享分支是危险的。',
    sections: [
      { title: '为什么要重写历史', content: '开发过程中的真实 commit 历史通常是这样的：\n\n❌ 真实但混乱的历史：\n  feat: add login\n  wip\n  fix typo\n  fix again\n  debug: remove console.log\n  actually fix the thing\n  oops forgot to save\n  final fix\n\n✅ 重写后干净的历史：\n  feat: add user login with OAuth2 support\n\n重写历史不是"欺骗"，而是把开发过程中的噪音清理掉，让 git log 变成一份可读的变更日志。' },
      { title: '重写历史的工具', content: '1. **git commit --amend**：修改最后一次 commit（message + 内容）\n2. **git rebase -i**：交互式重编排多个 commit（squash/reword/drop/reorder）\n3. **git reset**：回退 commit 后重新组织\n4. **git filter-branch / git filter-repo**：批量修改历史（如删除误提交的密钥）\n5. **git replace**：替换特定 commit（不常用）\n\n日常用 1 和 2 就够了。3 适合大规模重组。4 适合安全事件响应。' },
      { title: '交互式 rebase 详解', content: 'git rebase -i HEAD~5 打开编辑器：\n\npick abc1 feat: add login\npick def2 wip\npick ghi3 fix typo\npick jkl4 fix again\npick mno5 clean up\n\n操作选项：\n• pick (p)：保留这个 commit\n• reword (r)：保留 commit 但修改 message\n• squash (s)：合并到前一个 commit\n• fixup (f)：像 squash 但丢弃 message\n• drop (d)：删除这个 commit\n• edit (e)：暂停在这个 commit，允许修改\n\n整理后：\npick abc1 feat: add login\nfixup def2 wip\nfixup ghi3 fix typo\nfixup jkl4 fix again\nfixup mno5 clean up\n→ 5 个 commit 合并为 1 个干净的 commit' },
      { title: '重写历史的黄金法则', content: '⚠️ **永远不要重写已经 push 到共享仓库的历史**\n\n安全场景：\n• 你还没 push 的本地 commit → 随便改\n• 你的个人分支（没人用的 fork）→ 可以改 + force push\n• PR 还没被合并 → 可以改（rebase 后 force push 更新 PR）\n\n危险场景：\n• main/develop 等共享分支 → 绝对不改\n• 别人基于你的 commit 开始工作了 → 不改\n\n如果你不确定，问一句："有人基于这些 commit 工作了吗？"如果答案是"可能"，就不要重写。' },
      { title: '紧急场景：删除历史中的敏感信息', content: '误提交了 API key 或密码到仓库？即使删除文件，密钥还在 git 历史中！\n\n方法1：git filter-repo（推荐）\npip install git-filter-repo\ngit filter-repo --invert-paths --path secret-config.yml\n\n方法2：BFG Repo Cleaner\njava -jar bfg.jar --delete-files secret-config.yml\ngit reflog expire --expire=now --all && git gc --prune=now\n\n⚠️ 之后必须 force push，且所有队友需要重新 clone。\n更重要的是：立即轮换（rotate）泄露的密钥！' },
    ],
    diagnosis: [
      { symptom: 'rebase -i 搞乱了，commit 丢了或者顺序不对', cause: '交互式 rebase 编辑器中操作失误（如把 pick 改成了 drop）。', fix: 'git reflog 找到 rebase 之前的 HEAD 位置，git reset --hard <reflog-hash> 恢复。reflog 记录了所有 HEAD 移动，包括 rebase 前的状态。' },
      { symptom: 'force push 后队友的本地仓库和你的远程不一致', cause: '你重写了共享历史并 force push，队友本地还基于旧历史。', fix: '通知所有队友执行 git fetch + git reset --hard origin/main。以后绝对不要在共享分支上重写历史。' },
      { symptom: 'filter-repo 后仓库的 commit hash 全变了', cause: 'filter-repo 修改了 commit 内容（删除了文件），所有后续 commit 的 hash 都会连锁变化。', fix: '这是预期行为。所有协作者需要重新 clone 仓库。在 README 中通知团队。' },
    ],
    exercises: [
      { level: '基础', task: '做 4 个 commit（包含 "wip" 和 "fix typo"），用 rebase -i 把它们合并为 1 个干净的 commit', hint: 'git rebase -i HEAD~4', answer: 'git rebase -i HEAD~4\n# 编辑器中：第一个 pick，后三个改为 fixup (f)\n# 保存后写一个新的 commit message\n# 结果：4 个 commit 变成 1 个' },
      { level: '进阶', task: '用 rebase -i 的 reword 功能修改 3 个 commit 的 message，使其符合 Conventional Commits', hint: 'git rebase -i + reword', answer: 'git rebase -i HEAD~3\n# 每个 commit 改为 reword (r)\n# 每次暂停时写新的 message：\n# feat: add user registration\n# fix: validate email format\n# docs: update API documentation' },
      { level: '挑战', task: '用 git filter-repo 从仓库历史中删除一个误提交的大文件（如 100MB 的 data.zip），并验证 .git 目录变小了', hint: 'git filter-repo --invert-paths --path', answer: 'du -sh .git/  # 查看当前大小\ngit filter-repo --invert-paths --path data.zip\ndu -sh .git/  # 查看缩小后的大小\n# 注意：需要重新添加 remote 并 force push' },
    ],
  },

  'BKVA6Q7DXemAYjyQOA0nh': {
    mentalModel: 'git filter-branch 是仓库的「时光手术刀」——它能批量改写历史提交，把某个文件从所有提交中彻底抹去，就像从未存在过',
    handsOn: [
      {
        title: '从历史中彻底删除一个大文件',
        cmd: 'git filter-branch --force --index-filter \'git rm --cached --ignore-unmatch secret.key\' --prune-empty --tag-name-filter cat -- --all',
        output: 'Rewrite a3f2c1d (12/45) deleted:secret.key\nRef \'refs/heads/main\' was rewritten',
        explain: '--index-filter 在每个提交上执行 rm --cached，--prune-empty 删除因移除文件而变空的提交，--tag-name-filter cat 保留标签指向新提交',
      },
      {
        title: '用 tree-filter 修改历史中的文件内容',
        cmd: 'git filter-branch --tree-filter \'sed -i "s/old-password/new-password/g" config.yml\' HEAD',
        output: 'Rewrite b4e1a2f (8/20)\nRef \'refs/heads/main\' was rewritten',
        explain: 'tree-filter 检出每个提交的工作树并执行命令，比 index-filter 慢但更直观，适合修改文件内容而非删除文件',
      },
      {
        title: '提取子目录为独立仓库（保留历史）',
        cmd: 'git filter-branch --prune-empty --subdirectory-filter packages/core -- --all',
        output: 'Rewrite c5d6e7f (15/40)\nRef \'refs/heads/main\' was rewritten',
        explain: '将 packages/core 目录提升为仓库根目录，只保留与该目录相关的提交历史，常用于 monorepo 拆分',
      },
    ],
    diagnosis: [
      {
        symptom: 'filter-branch 执行后 reflog 中仍保留旧的大文件，仓库体积没有减小',
        cause: 'filter-branch 只改写分支引用，原始对象仍在 .git/objects 中。需要删除 refs/original 备份并运行 gc',
        fix: 'rm -rf .git/refs/original && git reflog expire --expire=now --all && git gc --prune=now --aggressive',
      },
      {
        symptom: '在 macOS 上执行 filter-branch 时报 sed 命令语法错误',
        cause: 'macOS 的 BSD sed 与 GNU sed 的 -i 参数行为不同，BSD sed 的 -i 必须跟一个备份后缀参数',
        fix: '将 sed -i "s/old/new/g" 改为 sed -i \'\' "s/old/new/g"，或在 tree-filter 中使用 perl -pi -e 替代',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个仓库，提交一个包含密码的文件，然后用 filter-branch 从所有历史中彻底删除该文件',
        hint: '使用 --index-filter 配合 git rm --cached --ignore-unmatch',
        answer: 'git filter-branch --force --index-filter \'git rm --cached --ignore-unmatch password.txt\' --prune-empty -- --all',
      },
      {
        level: '进阶',
        task: '用 filter-branch 将仓库中所有提交者邮箱从旧域名 @old.com 替换为新域名 @new.com',
        hint: '使用 --env-filter 修改 GIT_AUTHOR_EMAIL 和 GIT_COMMITTER_EMAIL',
        answer: 'git filter-branch --env-filter \'if [ "$GIT_AUTHOR_EMAIL" = "user@old.com" ]; then export GIT_AUTHOR_EMAIL="user@new.com"; export GIT_COMMITTER_EMAIL="user@new.com"; fi\' -- --all',
      },
      {
        level: '挑战',
        task: '对比 git filter-branch 与 git filter-repo 的性能差异，在 1000+ 提交的仓库上实测',
        hint: 'git filter-repo 是 filter-branch 的现代替代品，用 Python 编写，速度可快 10-700 倍',
        answer: '使用 time git filter-branch 和 time git filter-repo --path 对比。filter-repo 自动清理 refs/original、reflog 和 gc，且不会意外覆盖远程仓库',
      },
    ],
  },

  'HhpAIzYMlMiQ9msrYZyDB': {
    mentalModel: 'pre-commit hook 是代码提交前的「安检门」——它在 git commit 执行时最先触发，返回非零则阻止提交，像机场安检一样拦截不合规的代码',
    handsOn: [
      {
        title: '创建最基本的 pre-commit hook 阻止包含调试代码的提交',
        cmd: 'cat > .git/hooks/pre-commit << \'HOOK\'\n#!/bin/sh\nif git diff --cached --diff-filter=ACM | grep -q "debugger\\|console.log"; then\n  echo "❌ 检测到调试代码，请移除后再提交"\n  exit 1\nfi\nHOOK\nchmod +x .git/hooks/pre-commit',
        output: '(创建文件并赋予执行权限)',
        explain: 'pre-commit 在提交创建前运行，git diff --cached 检查暂存区变更，发现 debugger 或 console.log 就退出 1 阻止提交',
      },
      {
        title: '用 pre-commit hook 强制执行代码格式化',
        cmd: 'cat > .git/hooks/pre-commit << \'HOOK\'\n#!/bin/sh\n# 对暂存的 .ts 文件运行 prettier\nFILES=$(git diff --cached --name-only --diff-filter=ACM | grep \'\\.ts$\')\nif [ -n "$FILES" ]; then\n  npx prettier --check $FILES\n  if [ $? -ne 0 ]; then\n    echo "格式不符合规范，请先运行: npx prettier --write"\n    exit 1\n  fi\nfi\nHOOK',
        output: '(暂存未格式化的 .ts 文件后提交)\nsrc/utils.ts prettier found issues\n格式不符合规范，请先运行: npx prettier --write',
        explain: '只对暂存区的 TypeScript 文件做格式检查，避免全量检查浪费时间，且不影响未修改的文件',
      },
      {
        title: '用 husky 将 hook 脚本纳入版本控制',
        cmd: 'npx husky init && echo "npx lint-staged" > .husky/pre-commit',
        output: 'created .husky/pre-commit\nupdated package.json',
        explain: '.git/hooks 不会被 git 追踪，husky 通过在 package.json 的 prepare 脚本中安装 hook，让团队成员 clone 后自动获得相同的 pre-commit 检查',
      },
    ],
    diagnosis: [
      {
        symptom: 'pre-commit hook 文件存在且有执行权限，但提交时完全没有触发',
        cause: '使用了 git commit --no-verify 跳过了 hook，或者 core.hooksPath 被设置为其他目录（如 husky 设置的 .husky）',
        fix: '检查 git config core.hooksPath，确认 hook 文件在正确的目录下；去掉 --no-verify 参数重新提交',
      },
      {
        symptom: 'pre-commit hook 中运行 npm test 时报找不到 node_modules',
        cause: 'hook 的执行环境 PATH 可能与你的终端不同，特别是通过 GUI 工具（如 VSCode、SourceTree）提交时',
        fix: '在 hook 脚本开头添加 PATH 设置：export PATH="/usr/local/bin:/usr/bin:$PATH"，或使用 npx 的绝对路径',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 pre-commit hook，阻止提交超过 500KB 的文件到仓库',
        hint: '用 git diff --cached --name-only --diff-filter=ACM 获取暂存文件列表，然后用 stat 或 ls -l 检查大小',
        answer: '在 pre-commit 中遍历暂存文件，对每个文件用 stat -f%z (macOS) 或 stat -c%s (Linux) 获取字节数，超过 512000 就 exit 1',
      },
      {
        level: '进阶',
        task: '配置 husky + lint-staged，使得 pre-commit 只对暂存的 .js 文件运行 ESLint 自动修复',
        hint: '在 package.json 中配置 lint-staged，将 *.js 映射到 eslint --fix 命令',
        answer: 'package.json 中添加 "lint-staged": {"*.js": "eslint --fix"}，pre-commit hook 中运行 npx lint-staged',
      },
    ],
  },

  'OQOmxg9mCfcjt80hpvXkA': {
    mentalModel: 'git push --force 是「推土机」——它用本地分支的历史强行覆盖远程分支，远程上独有的提交会被碾碎消失，对共享分支使用等于团队协作的灾难',
    handsOn: [
      {
        title: 'rebase 后强制推送到个人特性分支',
        cmd: 'git rebase main && git push --force-with-lease origin feature',
        output: 'Successfully rebased and updated refs/heads/feature.\n+ a1b2c3d...e4f5g6h feature -> feature (forced update)',
        explain: 'rebase 改写了提交的 SHA，所以普通 push 会被拒绝。--force-with-lease 比 --force 更安全：如果远程分支在别人推送后发生了变化，它会拒绝执行',
      },
      {
        title: '查看 force push 前后的远程差异',
        cmd: 'git log --oneline origin/main..HEAD && git push --force-with-lease origin feature',
        output: 'e4f5g6h feat: add validation\na1b2c3d refactor: clean up utils\nTo github.com:user/repo.git\n + old1234...e4f5g6h feature -> feature (forced update)',
        explain: 'force push 后远程分支指针被移到你本地 HEAD 的位置，旧提交链从远程分支消失（但仍可通过 reflog 恢复）',
      },
      {
        title: '配置 Git 默认使用 force-with-lease',
        cmd: 'git config --global push.useForceWithLease true',
        output: '(无输出，配置已写入 ~/.gitconfig)',
        explain: '此配置让 git push --force 自动变为 --force-with-lease，防止意外覆盖他人提交。Git 2.30+ 支持',
      },
    ],
    diagnosis: [
      {
        symptom: '执行 git push --force 后，队友的 3 个提交从远程分支消失了',
        cause: '队友在你 force push 之前推送了新提交，你的本地分支不包含这些提交，force push 用你的历史覆盖了远程',
        fix: '先 git fetch 拉取远程最新，git rebase origin/feature 将队友的提交纳入本地，然后再 force-with-lease 推送。已丢失的提交可通过队友的 git reflog 找回',
      },
      {
        symptom: 'git push --force-with-lease 报错 "stale info"',
        cause: '本地的远程追踪引用（remote-tracking ref）过期了，与远程实际状态不一致',
        fix: '先运行 git fetch 更新远程追踪引用，再重试 --force-with-lease',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个特性分支，做几个提交，rebase 到 main 后安全地推送到远程',
        hint: 'rebase 后 SHA 改变，必须 force push；优先使用 --force-with-lease',
        answer: 'git checkout -b feature && git commit ... && git rebase main && git push --force-with-lease origin feature',
      },
      {
        level: '挑战',
        task: '模拟两人协作场景：A 和 B 同时修改同一分支，B 的 force push 覆盖了 A 的提交。用 reflog 恢复 A 的提交',
        hint: 'B 的机器上 git reflog show origin/feature 能看到 force push 前的状态',
        answer: '在 B 的机器上：git reflog show origin/feature 找到 force push 前的 SHA，git push origin <old-sha>:feature 恢复远程，然后 git pull --rebase 合并两人的提交',
      },
    ],
  },

  'j5kWEUKwBFg5EMm8-61K9': {
    mentalModel: 'pre-push hook 是推送前的「最后一道闸门」——它在 git push 发送数据到远程之前触发，可以在本地拦截不安全的推送，比如阻止向 main 分支直接推送',
    handsOn: [
      {
        title: '创建 pre-push hook 阻止直接推送到 main',
        cmd: 'cat > .git/hooks/pre-push << \'HOOK\'\n#!/bin/sh\nprotected="refs/heads/main"\nwhile read local_ref local_sha remote_ref remote_sha; do\n  if [ "$remote_ref" = "$protected" ]; then\n    echo "❌ 禁止直接推送到 main 分支，请使用 Pull Request"\n    exit 1\n  fi\ndone\nexit 0\nHOOK\nchmod +x .git/hooks/pre-push',
        output: '(创建 hook 文件)',
        explain: 'pre-push hook 通过 stdin 接收每对 ref 的本地和远程 SHA，检查目标 ref 是否是受保护的 main 分支',
      },
      {
        title: '在 pre-push 中运行测试套件',
        cmd: 'cat > .git/hooks/pre-push << \'HOOK\'\n#!/bin/sh\necho "🧪 推送前运行测试..."\nnpm test --silent\nif [ $? -ne 0 ]; then\n  echo "❌ 测试未通过，推送被阻止"\n  exit 1\nfi\necho "✅ 测试通过，继续推送"\nHOOK',
        output: '🧪 推送前运行测试...\n❌ 测试未通过，推送被阻止\nerror: failed to push some refs to \'origin\'',
        explain: '在推送前运行完整测试套件，如果有任何测试失败就阻止推送，避免将破损代码推到远程',
      },
      {
        title: '检查推送是否包含 WIP 提交',
        cmd: 'cat > .git/hooks/pre-push << \'HOOK\'\n#!/bin/sh\nremote="$1"\nwhile read local_ref local_sha remote_ref remote_sha; do\n  if [ "$local_sha" != "0000000000000000000000000000000000000000" ]; then\n    commits=$(git log --oneline ${remote_sha}..${local_sha} 2>/dev/null)\n    if echo "$commits" | grep -qi "wip\\|fixme\\|todo\\|hack"; then\n      echo "⚠️  发现包含 WIP/FIXME 的提交:"\n      echo "$commits" | grep -i "wip\\|fixme\\|todo\\|hack"\n      echo "请清理后再推送"\n      exit 1\n    fi\n  fi\ndone\nHOOK',
        output: '⚠️  发现包含 WIP/FIXME 的提交:\na1b2c3d WIP: working on auth\n请清理后再推送',
        explain: '扫描即将推送的所有提交消息，发现包含 wip、fixme 等临时标记的提交就阻止推送',
      },
    ],
    diagnosis: [
      {
        symptom: 'pre-push hook 中运行 npm test 非常慢，每次推送都要等 2 分钟',
        cause: '完整测试套件包括集成测试和 E2E 测试，在 pre-push 阶段全部运行不现实',
        fix: '只运行单元测试（npm test -- --grep unit），或在 pre-push 只跑 lint，把完整测试交给 CI。也可以用 jest --changedSince=origin/main 只测试变更相关的文件',
      },
      {
        symptom: 'pre-push hook 在 CI 环境中导致推送失败',
        cause: 'CI 环境通常直接 push 构建产物或标签，hook 中的测试或检查逻辑在 CI 中不适用',
        fix: '在 hook 中检测 CI 环境变量：if [ -n "$CI" ]; then exit 0; fi，CI 环境下跳过检查',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '编写 pre-push hook，当推送目标为 main 或 release/* 分支时阻止推送并提示使用 PR',
        hint: '用 case 语句或正则匹配 remote_ref',
        answer: 'case "$remote_ref" in refs/heads/main|refs/heads/release/*) echo "请使用 PR"; exit 1;; esac',
      },
      {
        level: '进阶',
        task: '编写 pre-push hook，检查即将推送的提交中是否包含了 .env 或密钥文件，如果有就阻止',
        hint: '用 git diff --name-only ${remote_sha}..${local_sha} 列出变更文件，grep 敏感文件模式',
        answer: 'files=$(git diff --name-only ${remote_sha}..${local_sha}); if echo "$files" | grep -qE "\\.(env|pem|key)$|secrets?/"; then echo "发现敏感文件"; exit 1; fi',
      },
    ],
  },

  'NeU38WPbEphJuJ_AMkH82': {
    mentalModel: '管理标签就像管理图书馆的「书签」——你需要学会创建、查看、删除、验证标签，确保每个版本的书签都准确指向正确的位置',
    handsOn: [
      {
        title: '查看、搜索和排序所有标签',
        cmd: 'git tag -l && echo "---" && git tag -l "v1.*" && echo "---" && git tag -l --sort=-v:refname | head -5',
        output: 'v0.1.0\nv1.0.0\nv1.1.0\nv2.0.0\n---\nv1.0.0\nv1.1.0\n---\nv2.0.0\nv1.1.0\nv1.0.0',
        explain: '-l 列出所有标签，支持 glob 模式过滤；--sort=-v:refname 按版本号倒序排列，快速找到最新版本',
      },
      {
        title: '删除本地和远程标签',
        cmd: 'git tag -d v0.1.0 && git push origin :refs/tags/v0.1.0',
        output: 'Deleted tag \'v0.1.0\' (was a1b2c3d)\nTo github.com:user/repo.git\n - [deleted]         v0.1.0',
        explain: '-d 删除本地标签；推送到 :refs/tags/xxx 删除远程标签。也可以用 git push origin --delete v0.1.0',
      },
      {
        title: '验证带签名的标签',
        cmd: 'git tag -v v2.0.0',
        output: 'gpg: Signature made Thu 25 May 2026 using RSA key ID ABCD1234\ngpg: Good signature from "Developer <dev@example.com>"',
        explain: '-v 使用 GPG 验证标签的签名，确认标签确实由声称的作者创建且未被篡改',
      },
      {
        title: '批量清理合并后的标签',
        cmd: 'git tag -l "release-candidate/*" | xargs -I {} git tag -d {}',
        output: 'Deleted tag \'release-candidate/2024-01\' (was f1e2d3c)\nDeleted tag \'release-candidate/2024-02\' (was a4b5c6d)',
        explain: '列出匹配模式的标签并通过 xargs 逐个删除，常用于清理临时的 RC 标签',
      },
    ],
    diagnosis: [
      {
        symptom: '删除了远程标签但队友 clone 后仍然能看到该标签',
        cause: 'git clone 和 git fetch 默认不会自动删除远程已删除的标签，标签是独立于分支追踪的引用',
        fix: '队友需要运行 git fetch --prune --prune-tags origin 来同步删除远程已移除的标签',
      },
      {
        symptom: 'git push origin v1.0.0 报 "already exists" 错误',
        cause: '远程已存在同名标签。可能是之前创建后删除本地但没删远程，或别人已推送了同名标签',
        fix: '先 git ls-remote --tags origin 查看远程标签，确认后 git push origin --delete v1.0.0 删除远程旧标签再推送',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出仓库中所有 v2.x 系列的标签，按版本号从新到旧排序',
        hint: 'git tag -l 支持 glob 模式，--sort=-version:refname 倒序排列',
        answer: 'git tag -l "v2.*" --sort=-version:refname',
      },
      {
        level: '进阶',
        task: '编写一个脚本，自动删除所有超过 6 个月的标签（保留带签名的标签）',
        hint: 'git for-each-ref --format 可以获取标签的创建时间，git tag -v 检查签名',
        answer: 'git for-each-ref --format="%(refname:short) %(creatordate:unix)" refs/tags | while read tag date; do if [ $(( $(date +%s) - date )) -gt 15552000 ]; then git tag -v "$tag" 2>/dev/null || git tag -d "$tag"; fi; done',
      },
    ],
  },

  'E3HAGNM-kXLL4Oci5JzpQ': {
    mentalModel: '推送标签是把本地的「版本书签」同步到远程仓库——默认 push 不会推送标签，你必须显式操作，就像本地保存的书签不会自动同步到云端',
    handsOn: [
      {
        title: '推送单个标签到远程',
        cmd: 'git push origin v1.2.0',
        output: 'Total 0 (delta 0), reused 0 (delta 0)\nTo github.com:user/repo.git\n * [new tag]         v1.2.0 -> v1.2.0',
        explain: '将指定的标签推送到远程，远程仓库会创建同名标签指向相同的提交。这是最常用的方式',
      },
      {
        title: '一次性推送所有本地标签',
        cmd: 'git push origin --tags',
        output: 'Counting objects: 12, done.\nTo github.com:user/repo.git\n * [new tag]         v1.3.0 -> v1.3.0\n * [new tag]         v1.4.0 -> v1.4.0',
        explain: '--tags 将所有尚未推送的标签一次性推送到远程。注意：这也会推送你不想公开的本地实验标签',
      },
      {
        title: '推送标签同时推送分支（followTags）',
        cmd: 'git push --follow-tags origin main',
        output: 'To github.com:user/repo.git\n   abc1234..def5678  main -> main\n * [new tag]         v1.5.0 -> v1.5.0',
        explain: '--follow-tags 只推送当前分支可达的带注释标签（annotated tags），比 --tags 更安全，不会推送无关的实验标签',
      },
      {
        title: '配置自动跟随推送标签',
        cmd: 'git config --global push.followTags true',
        output: '(无输出，配置已生效)',
        explain: '设置后每次 git push 自动带上 --follow-tags，只推送与当前推送相关的带注释标签',
      },
    ],
    diagnosis: [
      {
        symptom: '推送了标签但 GitHub Releases 页面没有出现新版本',
        cause: '标签推送只是在 Git 层面创建标签引用，GitHub Releases 需要在 GitHub 网页上或通过 gh release create 单独创建',
        fix: '在 GitHub 网页点击 "Draft a new release" 选择该标签，或使用 gh release create v1.2.0 --generate-notes',
      },
      {
        symptom: 'git push --tags 推送了一些不想要的私有实验标签',
        cause: '--tags 推送所有本地标签，包括你在开发过程中创建的临时标签如 wip/test-123',
        fix: '改用 git push --follow-tags 只推送带注释的、与推送分支相关的标签。删除不需要的本地标签：git tag -d wip/test-123',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为当前 HEAD 创建一个带注释的标签 v1.0.0 并推送到远程',
        hint: 'git tag -a 创建带注释标签，然后 git push origin <tagname>',
        answer: 'git tag -a v1.0.0 -m "Initial release" && git push origin v1.0.0',
      },
      {
        level: '进阶',
        task: '配置 Git 使得每次 push 都自动推送相关的带注释标签，但不推送轻量标签',
        hint: '有一个 Git 配置项可以让 --follow-tags 成为默认行为',
        answer: 'git config --global push.followTags true。此设置只推送 annotated tags，轻量标签需要显式推送',
      },
    ],
  },

  'sFf1PdFfmEdQxsEntfeFq': {
    mentalModel: 'Git Patch 是代码变更的「快递包裹」——它将一组提交的差异打包成文本文件，可以通过邮件、U盘或任何方式传递给另一个仓库应用，是最原始也最可靠的代码分发方式',
    handsOn: [
      {
        title: '为最近 3 个提交生成 patch 文件',
        cmd: 'git format-patch -3',
        output: '0001-feat-add-user-auth.patch\n0002-fix-handle-null-token.patch\n0003-refactor-extract-validator.patch',
        explain: 'format-patch 为每个提交生成一个 .patch 文件，文件名带序号和提交消息摘要，包含完整的提交信息和差异',
      },
      {
        title: '检查 patch 能否干净应用',
        cmd: 'git apply --check 0001-feat-add-user-auth.patch',
        output: '(无输出表示可以干净应用)',
        explain: '--check 模拟应用 patch 但不实际修改文件，用于预检冲突。如果有冲突会报错但不修改任何文件',
      },
      {
        title: '应用 patch 并保留提交信息',
        cmd: 'git am 0001-feat-add-user-auth.patch',
        output: 'Applying: feat: add user auth\nApplied cleanly.',
        explain: 'git am（apply mail）应用 format-patch 生成的 patch，保留原始提交者、日期和提交消息，比 git apply 更完整',
      },
      {
        title: '生成包含二进制的 patch',
        cmd: 'git format-patch -1 --binary',
        output: '0001-feat-add-logo.patch (contains binary data)',
        explain: '--binary 参数使 patch 包含二进制文件的完整内容（base85 编码），适用于包含图片等二进制文件的提交',
      },
    ],
    diagnosis: [
      {
        symptom: 'git am 应用 patch 时报冲突 "Patch does not apply"',
        cause: '目标仓库的代码已经变化，patch 基于的上下文与当前代码不匹配',
        fix: '用 git am --3way 尝试三方合并；或先用 git apply --reject 生成 .rej 文件，手动解决冲突后 git am --continue',
      },
      {
        symptom: '收到的 patch 文件应用后中文注释变成乱码',
        cause: 'patch 文件的编码与目标仓库的编码不一致，通常是 UTF-8 和 GBK 混淆',
        fix: '确保双方使用 UTF-8 编码。可以在 git config 中设置 i18n.commitEncoding 和 i18n.logOutputEncoding 为 utf-8',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为当前分支相对于 main 的所有提交生成 patch 文件，放在 /tmp/patches 目录中',
        hint: 'git format-patch 接受分支范围参数，-o 指定输出目录',
        answer: 'mkdir -p /tmp/patches && git format-patch main -o /tmp/patches',
      },
      {
        level: '挑战',
        task: '模拟通过邮件协作：在仓库 A 生成 patch，模拟发送到仓库 B（不同目录的 clone），在 B 中应用 patch',
        hint: 'format-patch 生成的文件可以直接复制粘贴，am 会在 B 中创建相同的提交',
        answer: 'cd repoA && git format-patch -1 -o /tmp && cd ../repoB && git am /tmp/0001-*.patch',
      },
    ],
  },

  'iFJBF-EEnLjQVsFSXjo_i': {
    mentalModel: '打标签是给某个提交「盖印章」——它不会改变提交本身，只是在特定位置贴上一个有意义的名字（如 v1.0.0），让历史中的关键时刻变得一眼可识别',
    handsOn: [
      {
        title: '创建带注释的标签（推荐方式）',
        cmd: 'git tag -a v2.1.0 -m "Release 2.1.0: 新增用户导出功能"',
        output: '(标签已创建)',
        explain: '-a 创建带注释标签（annotated tag），它是 Git 中的完整对象，包含标签创建者、日期和消息，推荐用于正式发布',
      },
      {
        title: '为历史提交打标签',
        cmd: 'git log --oneline | head -5 && git tag -a v1.0.0 abc1234 -m "Retroactive: initial release"',
        output: 'abc1234 feat: complete MVP\ndef5678 fix: login bug\n...\n(标签 v1.0.0 指向 abc1234)',
        explain: '在 git tag 命令末尾加上提交的 SHA，可以为任意历史提交打标签，不限于 HEAD',
      },
      {
        title: '创建带 GPG 签名的标签',
        cmd: 'git tag -s v3.0.0 -m "Signed release 3.0.0"',
        output: 'gpg: signing using RSA key ABCD1234\ngpg: Signature made ...',
        explain: '-s 用 GPG 私钥签名标签，他人可用 git tag -v 验证。适用于对安全要求高的项目，证明标签确实由你创建',
      },
      {
        title: '查看标签详情和关联提交',
        cmd: 'git show v2.1.0',
        output: 'tag v2.1.0\nTagger: dev@example.com\nDate:   Thu May 25 10:00:00 2026\n\nRelease 2.1.0: 新增用户导出功能\n\ncommit abc1234def...\nAuthor: ...\n\n    feat: add user export',
        explain: 'git show 对标签显示标签信息 + 关联提交的详情，一次看到版本的完整上下文',
      },
    ],
    diagnosis: [
      {
        symptom: '创建标签后发现消息写错了，想修改标签消息',
        cause: '标签一旦创建就不可变，不能原地修改消息',
        fix: '删除后重新创建：git tag -d v2.1.0 && git tag -a v2.1.0 -m "正确的消息"。如果已推送，还需要 git push origin :v2.1.0 删远程再重推',
      },
      {
        symptom: 'git tag -s 签名时报 "gpg: signing failed: secret key not available"',
        cause: 'Git 找不到 GPG 私钥，可能是没有配置 user.signingkey 或者使用了错误的 GPG 程序（如系统期望 gpg2）',
        fix: 'git config --global user.signingkey <KEY_ID> && git config --global gpg.program gpg2',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为当前 HEAD 创建带注释标签 v1.0.0，消息为 "First stable release"',
        hint: 'git tag -a <name> -m <message>',
        answer: 'git tag -a v1.0.0 -m "First stable release"',
      },
      {
        level: '进阶',
        task: '为仓库中第一个提交追溯打标签 v0.0.1',
        hint: '用 git rev-list --max-parents=0 HEAD 找到根提交',
        answer: 'git tag -a v0.0.1 $(git rev-list --max-parents=0 HEAD) -m "Initial commit"',
      },
    ],
  },

  '62E1tDMXB6K74OEN0WsS0': {
    mentalModel: 'Checkout 标签就像翻阅相册中标记了日期的照片——你可以查看那个时刻的完整状态，但处于「只读模式」，任何修改都需要创建新分支才能保存',
    handsOn: [
      {
        title: '切换到标签查看代码状态',
        cmd: 'git checkout v1.0.0',
        output: 'Note: switching to \'v1.0.0\'.\nYou are in \'detached HEAD\' state.\nHEAD is now at abc1234 feat: complete v1.0',
        explain: 'checkout 标签会进入 detached HEAD 状态——你可以查看和编译代码，但新提交不属于任何分支',
      },
      {
        title: '基于标签创建新分支（修复旧版本 bug）',
        cmd: 'git checkout -b hotfix/v1.0-security v1.0.0',
        output: 'Switched to a new branch \'hotfix/v1.0-security\'',
        explain: '从标签创建分支是修复旧版本 bug 的标准做法：代码回到 v1.0.0 的状态，但你现在处于正常的分支模式，可以提交和推送',
      },
      {
        title: '对比两个标签之间的差异',
        cmd: 'git diff v1.0.0..v2.0.0 --stat',
        output: ' src/auth.js    | 45 ++++\n src/api.js     | 120 +++++---\n src/db.js      |  30 --\n 3 files changed, 110 insertions(+), 85 deletions(-)',
        explain: '两个标签之间的 diff 就是两个版本间的完整变更，--stat 给出文件级别的统计概览',
      },
      {
        title: '查看两个标签间的提交历史',
        cmd: 'git log --oneline v1.0.0..v2.0.0',
        output: 'def5678 feat: add payment module\nabc1234 refactor: restructure API\n9998887 fix: memory leak in worker',
        explain: '标签在 git log 中可以直接作为范围端点，列出两个版本之间所有提交',
      },
    ],
    diagnosis: [
      {
        symptom: 'checkout 标签后修改了文件并提交，但切回 main 后提交找不到了',
        cause: '在 detached HEAD 状态下的提交不属于任何分支，切换分支后就没有引用指向它们',
        fix: '用 git reflog 找到 detached HEAD 期间的提交 SHA，然后 git checkout -b saved-work <sha> 将它保存到新分支',
      },
      {
        symptom: 'git checkout v1.0 报错 "pathspec did not match any"，但标签确实存在',
        cause: '标签名与某个文件名或目录名冲突，Git 将其解释为路径而非引用',
        fix: '用 git checkout tags/v1.0 显式指定是标签引用，消除歧义',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '切换到 v1.0.0 标签，查看当时的 README.md 内容，然后安全回到 main',
        hint: 'git checkout v1.0.0 后直接 cat 文件，然后 git checkout main 返回',
        answer: 'git checkout v1.0.0 && cat README.md && git checkout main',
      },
      {
        level: '进阶',
        task: '发现 v1.0.0 版本有一个安全漏洞，需要在该版本基础上创建修复分支并提交补丁',
        hint: '从标签创建分支，修复后打新标签 v1.0.1',
        answer: 'git checkout -b hotfix/v1.0.1 v1.0.0 && 修复代码 && git commit -am "fix: security patch" && git tag -a v1.0.1 -m "Security patch"',
      },
    ],
  },

  'v7uabKuMQPOD_hBIaHOVT': {
    mentalModel: 'Git 标签是时间线上的「里程碑石碑」——分支指针不断移动，但标签永远固定在某一个提交上，用来标记"这个版本发布了""这个节点很重要"等不可变的时刻',
    sections: [
      {
        title: '标签解决什么问题',
        content: '分支指针（如 main）会随着每次 push 移动，你无法靠分支名定位"发布时的代码"。标签是固定引用，一旦创建就永远指向同一个提交。\n\n实际场景：\n- 用户报告 v2.3.1 有 bug，你可以精确切回 v2.3.1 的代码复现\n- CI/CD 看到新标签时自动触发构建和发布\n- 回滚时知道"上一个稳定版本"是哪个标签',
      },
      {
        title: '标签 vs 分支的核心区别',
        content: '分支是"活的"——每次新提交，分支指针自动前移。标签是"死的"——创建后永远指向同一个提交。\n\n| 特性 | 分支 | 标签 |\n|------|------|------|\n| 是否移动 | 每次提交自动前移 | 固定不变 |\n| 用途 | 开发工作流 | 版本标记 |\n| 默认推送 | 是 | 否（需显式操作）|\n| checkout 后 | 正常开发模式 | detached HEAD |\n| 命名冲突 | 不能与标签同名 | 不能与分支同名 |',
      },
      {
        title: '语义化版本与标签命名规范',
        content: '社区约定用语义化版本（SemVer）命名标签：vMAJOR.MINOR.PATCH\n\n- MAJOR：不兼容的 API 变更（v1.x.x → v2.0.0）\n- MINOR：向后兼容的功能新增（v1.1.x → v1.2.0）\n- PATCH：向后兼容的缺陷修复（v1.1.1 → v1.1.2）\n\n常见前缀：v（如 v1.0.0）或直接数字（如 1.0.0）。推荐加 v 前缀，更醒目且在 shell 中不易与命令混淆。',
      },
    ],
    diagnosis: [
      {
        symptom: '团队中有人用 v1.0 有人用 1.0.0 作为标签名，导致排序混乱',
        cause: '缺乏统一的标签命名规范',
        fix: '团队约定统一使用 SemVer 格式 vMAJOR.MINOR.PATCH，可通过 pre-push hook 或 CI 检查标签格式',
      },
      {
        symptom: '不确定某个 bug 是在哪个版本引入的，标签之间的提交太多',
        cause: '没有为每个发布版本打标签，导致无法精确定位版本范围',
        fix: '建立发布流程：每次部署到生产环境必须打标签。可以用 git bisect 在两个标签间二分查找引入 bug 的提交',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列举 3 个你熟悉的开源项目的标签命名规范，比较它们的异同',
        hint: '查看 linux、react、vscode 等项目的 GitHub tags 页面',
        answer: 'Linux: v6.x 系列；React: v18.2.0 SemVer；VS Code: 1.xx.y 不带 v 前缀。共同点是都用数字分段，区别在于前缀和段数',
      },
      {
        level: '进阶',
        task: '设计一个标签策略：项目同时维护 v1.x 和 v2.x 两个大版本，如何组织标签和分支',
        hint: '考虑维护分支（maintenance branch）和标签的关系',
        answer: '创建 release/1.x 和 release/2.x 长期维护分支，各版本的 patch 在对应分支开发和打标签（如 v1.3.1, v2.1.0）。main 分支用于下一大版本开发',
      },
    ],
  },

  'Ni3HKVLanFvSrJ3u8i5I1': {
    mentalModel: 'Git 有两种标签：轻量标签像「便签纸条」只记个名字，带注释标签像「正式档案」包含作者、日期和备注——正式发布永远用带注释标签',
    sections: [
      {
        title: '轻量标签（Lightweight Tag）',
        content: '轻量标签只是一个指向提交的"别名"，本质上就是一个不移动的引用。\n\n创建：git tag v1.0-test\n存储：.git/refs/tags/v1.0-test（文件内容就是提交的 SHA）\n\n特点：\n- 没有独立的 Git 对象，只是一个 ref\n- 没有标签创建者、日期、消息\n- git show v1.0-test 直接显示提交信息（不是标签信息）\n- 适合临时标记、个人使用',
      },
      {
        title: '带注释标签（Annotated Tag）',
        content: '带注释标签是 Git 数据库中的完整对象，有自己的 SHA。\n\n创建：git tag -a v1.0.0 -m "Release message"\n存储：.git/objects/ 下的独立对象，.git/refs/tags/v1.0.0 指向该对象的 SHA\n\n特点：\n- 包含标签创建者（Tagger）、日期、消息\n- 有自己的 SHA，可以被签名（GPG）\n- git show v1.0.0 先显示标签信息，再显示提交信息\n- 适合正式发布版本',
      },
      {
        title: '如何区分两种标签',
        content: 'git cat-file -t v1.0.0\n- 输出 "tag" → 带注释标签\n- 输出 "commit" → 轻量标签\n\ngit for-each-ref --format="%(refname:short) %(objecttype)" refs/tags\n- 列出所有标签及其类型\n\n关键实践：\n- git push --follow-tags 只推送带注释标签，不推送轻量标签\n- GitHub Releases 只识别带注释标签\n- GPG 签名只能用于带注释标签',
      },
    ],
    diagnosis: [
      {
        symptom: '用 git push --follow-tags 推送后，发现某些标签没有出现在远程',
        cause: '这些标签是轻量标签（git tag 没有 -a 参数创建的），--follow-tags 只推送带注释标签',
        fix: '用 git push origin <tagname> 显式推送轻量标签，或者删除轻量标签重建为带注释标签',
      },
      {
        symptom: '在 GitHub 上打标签后本地 git fetch 拉不到',
        cause: 'GitHub 网页上直接创建的标签可能使用了不同的标签类型，或者你的 fetch 配置不包含标签',
        fix: 'git fetch origin --tags 强制拉取所有远程标签',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '分别创建一个轻量标签和一个带注释标签，用 git cat-file -t 验证它们的类型差异',
        hint: 'git tag test-lw 创建轻量标签，git tag -a test-ann -m "msg" 创建带注释标签',
        answer: 'git tag test-lw && git tag -a test-ann -m "test" && git cat-file -t test-lw 输出 commit && git cat-file -t test-ann 输出 tag',
      },
      {
        level: '进阶',
        task: '编写一个 Git alias，列出所有轻量标签并提示转为带注释标签',
        hint: '用 git for-each-ref 过滤 objecttype=commit 的标签',
        answer: 'git config --global alias.lw-tags "!git for-each-ref --format=\'%(refname:short) %(objecttype)\' refs/tags | grep commit | awk \'{print $1}\'"',
      },
    ],
  },

  'YmnTrjJtqHPXbEVrP8vd7': {
    mentalModel: 'GitHub Releases 是标签的「产品包装」——标签只是 Git 层面的一个标记，而 Release 在其上叠加了发布说明、二进制附件和下载链接，是面向用户的交付物',
    handsOn: [
      {
        title: '用 GitHub CLI 创建一个 Release',
        cmd: 'gh release create v2.0.0 --title "Version 2.0.0" --notes "全新架构，支持插件系统" ./dist/app-v2.0.0.tar.gz',
        output: 'https://github.com/user/repo/releases/tag/v2.0.0',
        explain: 'gh release create 一步完成：创建标签（如果不存在）、创建 Release、上传附件、设置标题和说明',
      },
      {
        title: '自动生成发布说明',
        cmd: 'gh release create v2.1.0 --generate-notes',
        output: 'https://github.com/user/repo/releases/tag/v2.1.0\n(自动根据 PR 和提交生成 changelog)',
        explain: '--generate-notes 自动从上一个标签到当前标签的提交/PR 中提取变更，生成结构化的 Release Notes',
      },
      {
        title: '列出和下载 Release 资产',
        cmd: 'gh release list --limit 5 && echo "---" && gh release download v2.0.0 --pattern "*.tar.gz"',
        output: 'v2.1.0  Latest  v2.1.0  about 2 days ago\nv2.0.0         v2.0.0  about 1 month ago\n---\n(下载 app-v2.0.0.tar.gz 到当前目录)',
        explain: 'release list 查看所有发布版本，--pattern 过滤要下载的资产文件类型',
      },
      {
        title: '创建预发布版本（Pre-release）',
        cmd: 'gh release create v3.0.0-beta.1 --prerelease --title "v3.0.0 Beta 1" --notes "预览版，请勿用于生产"',
        output: 'https://github.com/user/repo/releases/tag/v3.0.0-beta.1',
        explain: '--prerelease 标记为预发布版本，GitHub 上会显示黄色标签，且不会被当作 Latest release',
      },
    ],
    diagnosis: [
      {
        symptom: 'gh release create 报 "HTTP 403: resource not accessible by integration"',
        cause: 'GitHub Token 缺少 contents: write 权限，常见于 GitHub Actions 中默认 GITHUB_TOKEN 权限不足',
        fix: '在 workflow 中设置 permissions: contents: write，或使用具有 repo scope 的 Personal Access Token',
      },
      {
        symptom: 'Release 创建成功但附件上传失败（大文件）',
        cause: 'GitHub Release 单个资产文件限制为 2GB，超过会上传失败',
        fix: '对大文件进行压缩分割，或使用 GitHub LFS 管理大文件。也可以将大型资产放到 S3/OSS，Release Notes 中只放下载链接',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个测试仓库创建 v1.0.0 Release，附带自动生成的发布说明',
        hint: '先打标签再创建 release，或让 gh release create 自动创建标签',
        answer: 'gh release create v1.0.0 --generate-notes --title "First Release"',
      },
      {
        level: '挑战',
        task: '编写一个脚本，自动将最近的 CHANGELOG.md 内容作为 Release Notes 发布',
        hint: '用 sed 或 awk 提取 CHANGELOG.md 中最新版本段落的内容，通过 --notes-file 参数传给 gh',
        answer: 'sed -n "/^## \\[.*\\]/,/^## \\[.*\\]/p" CHANGELOG.md | head -n -1 | tail -n +2 > /tmp/notes.md && gh release create v1.0.0 --notes-file /tmp/notes.md',
      },
    ],
  },

  'PUnYNBrAZWoZiopjtNgnA': {
    mentalModel: '标签和 Release 的使用场景远不止"标版本号"——它们串联了版本管理、CI/CD 触发、依赖锁定和变更追溯，是软件交付链路的关键锚点',
    sections: [
      {
        title: 'CI/CD 触发器',
        content: '最常见的 CI/CD 模式之一：推送标签触发构建和发布。\n\nGitHub Actions 示例：\n```yaml\non:\n  push:\n    tags:\n      - "v*"\n```\n\n当推送 v1.2.3 这样的标签时，自动触发：\n1. 运行完整测试套件\n2. 构建生产产物\n3. 发布到 npm / Docker Hub / PyPI\n4. 创建 GitHub Release\n\n好处：发布流程由标签驱动，不依赖特定分支，任何人都可以通过打标签触发发布。',
      },
      {
        title: '依赖版本锁定',
        content: '其他项目通过标签引用你的库的特定版本：\n\nGo：require github.com/user/lib v1.2.3（Go modules 通过 Git 标签解析版本）\nNode.js：npm install git+https://github.com/user/lib.git#v1.2.3\nDocker：FROM myregistry/app:v1.2.3\nPython：pip install git+https://github.com/user/lib.git@v1.2.3\n\n没有标签，消费方只能用 commit SHA 引用，可读性和可维护性极差。',
      },
      {
        title: '变更追溯与回滚',
        content: '标签让"这个生产版本到底是什么代码"变得可回答：\n\n- git log v1.2.2..v1.2.3 精确列出两个版本间的所有变更\n- git diff v1.2.2..v1.2.3 --stat 查看文件级别的变更统计\n- git bisect v1.2.2 v1.2.3 在两个版本间二分查找 bug\n- kubectl rollout undo --to-revision=v1.2.2 回滚到上一个标签版本\n\n没有标签，你只能猜测"大概是两周前部署的那个版本"。',
      },
      {
        title: '多版本维护',
        content: '大型项目需要同时维护多个大版本：\n\nNode.js：v18.x (LTS)、v20.x (LTS)、v22.x (Current)\n- 每个大版本有维护分支（release/18.x）\n- 补丁标签打在对应维护分支上（v18.19.1）\n- 用户根据标签选择需要的版本\n\n策略：\n1. main 分支用于下一大版本开发\n2. 发布时创建 release/N.x 分支\n3. 在维护分支上 cherry-pick 修复并打标签\n4. 标签自动触发该版本的 CI/CD 流水线',
      },
    ],
    diagnosis: [
      {
        symptom: 'Go 项目 go get 时报 "unknown revision v1.0.0"，但标签确实存在于 GitHub',
        cause: 'Go modules 要求标签严格遵循 SemVer 格式（vX.Y.Z），v1.0 或 1.0.0 都不被识别',
        fix: '删除错误格式标签，重新创建为 v1.0.0 格式。Go modules 只识别 v 前缀 + 三段数字',
      },
      {
        symptom: 'CI 的标签触发流水线没有执行，推送 v1.0.0 后 workflow 没有被触发',
        cause: 'workflow 的 tags filter 配置不正确，或者推送标签的方式不对（如只推了轻量标签）',
        fix: '检查 workflow 的 on.push.tags 配置是否匹配你的标签格式；确保标签被正确推送到远程',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 3 个你使用过的开源项目的标签策略，描述它们如何通过标签发布新版本',
        hint: '查看 React、Vue、Go 标准库、Docker 等项目的 GitHub tags 和 releases 页面',
        answer: '例如：React 用 SemVer + 带注释标签触发 npm 发布；Go 用 v1.x.y 标签作为 module 版本；Docker 用 vX.Y.Z 标签对应 Docker Hub 镜像版本',
      },
      {
        level: '进阶',
        task: '设计一个完整的发布流程：从打标签到 CI 构建到 GitHub Release 自动创建，用 GitHub Actions 实现',
        hint: 'workflow 监听 tags push 事件，steps 包含 test、build、upload artifacts',
        answer: '创建 .github/workflows/release.yml，on: push: tags: ["v*"]，steps 中 checkout → setup → test → build → gh release create with artifacts',
      },
    ],
  },

  'p6rq3lQ9YRrTqwcc31O23': {
    mentalModel: 'YAML 是 GitHub Actions 的「菜谱格式」——它用缩进表达层级结构，用 key: value 存储配置，读懂 YAML 就能读懂 workflow 的每一步',
    sections: [
      {
        title: 'YAML 基础语法速查',
        content: 'YAML 的核心只有三种结构：\n\n1. 键值对：key: value\n2. 列表（数组）：\n   - item1\n   - item2\n3. 嵌套（靠缩进）：\n   parent:\n     child: value\n     list:\n       - a\n       - b\n\n注意：\n- 缩进只能用空格，不能用 Tab\n- 通常使用 2 个空格缩进\n- # 开头是注释\n- 冒号后面必须有空格（key: value 而非 key:value）',
      },
      {
        title: '在 GitHub Actions 中的典型结构',
        content: '```yaml\nname: CI                    # workflow 名称\non:                         # 触发条件\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:                       # 任务定义\n  build:                    # job id\n    runs-on: ubuntu-latest  # 运行环境\n    steps:                  # 步骤列表\n      - uses: actions/checkout@v4\n      - name: Run tests\n        run: npm test\n        env:\n          NODE_ENV: test\n```\n\n层级关系：workflow → jobs → steps → 每个 step 是 action 或 shell 命令',
      },
      {
        title: 'YAML 常见陷阱',
        content: '1. 多行字符串：\n   run: |\n     echo "line 1"\n     echo "line 2"\n   （| 保留换行，> 折叠换行为空格）\n\n2. 布尔值陷阱：\n   on: true  → 实际被解析为 on: "true"（在 GitHub Actions 上下文中）\n   建议：始终用引号包裹可能被误解的值\n\n3. 数字陷阱：\n   version: 1.20 → 解析为浮点数 1.2，丢失末尾 0\n   修复：version: "1.20"\n\n4. 特殊字符：\n   包含 {}、[]、:、# 的字符串需要加引号\n   name: "Deploy [production]"',
      },
    ],
    diagnosis: [
      {
        symptom: 'GitHub Actions workflow 报 YAML 解析错误 "mapping values are not allowed here"',
        cause: '某行冒号后缺少空格，或者缩进混用了 Tab 和空格',
        fix: '检查报错行附近的缩进和冒号格式。使用 VS Code 的 YAML 扩展可以实时检测语法错误',
      },
      {
        symptom: 'workflow 中的 on 触发器没有按预期工作，push 事件不触发',
        cause: 'YAML 中 on 是布尔关键字（等同于 true），在某些解析器中需要特殊处理',
        fix: '在 GitHub Actions 中 on 作为顶级 key 是安全的，但如果嵌套使用，用引号包裹："on": push',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个合法的 YAML 文件描述一个构建流程：名称、触发条件（push 到 main）、一个 job 包含 3 个 step',
        hint: '参考 GitHub Actions workflow 的基本结构',
        answer: 'name: Build\non:\n  push:\n    branches: [main]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm install\n      - run: npm run build',
      },
      {
        level: '进阶',
        task: '修复以下 YAML 中的 3 个错误：\nname: Deploy\non: push\n  branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n\tsteps:\n      - name: Deploy to prod\n        run: echo "Deploying version 1.20"',
        hint: '检查缩进、Tab 和数字格式',
        answer: '三个错误：1) on: push 应该用块形式 on: {push: {branches: [main]}} 或者正确的缩进；2) steps 前用了 Tab 缩进应改为空格；3) 1.20 应加引号避免浮点数解析',
      },
    ],
  },

  'AmetdCURXXob5TUsikAab': {
    mentalModel: 'GitHub Actions 是 GitHub 内置的「自动化工厂」——你写好 workflow 文件，GitHub 在你 push/PR/定时等事件时自动分配机器执行你的脚本，无需搭建 CI 服务器',
    handsOn: [
      {
        title: '创建最基本的 CI workflow',
        cmd: 'mkdir -p .github/workflows && cat > .github/workflows/ci.yml << \'EOF\'\nname: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm test\nEOF',
        output: '(创建 workflow 文件，提交后自动触发)',
        explain: '这个 workflow 在 push 到 main 和 PR 时触发，在 Ubuntu 环境中安装 Node 20、安装依赖并运行测试',
      },
      {
        title: '查看 workflow 运行状态',
        cmd: 'gh run list --limit 5',
        output: 'STATUS   TITLE          WORKFLOW  BRANCH  EVENT\n✓        feat: auth     CI        main    push\n✗        fix: bug       CI        fix/x   pull_request\n⏳       docs: update   CI        main    push',
        explain: 'gh run list 显示最近的 workflow 运行记录，✓ 成功、✗ 失败、⏳ 进行中',
      },
      {
        title: '查看失败 workflow 的详细日志',
        cmd: 'gh run view --log-failed',
        output: '##[group]Run npm test\nFAIL src/auth.test.ts\n  ● login › should reject invalid password\n    Expected: false\n    Received: true\n##[error]Process completed with exit code 1.',
        explain: '--log-failed 只显示失败步骤的日志，快速定位哪个步骤失败以及错误原因',
      },
      {
        title: '手动重新运行失败的 workflow',
        cmd: 'gh run rerun <run-id>',
        output: 'Requested rerun of run <run-id>',
        explain: '如果是临时性失败（如网络超时），可以直接重新运行。用 gh run list 获取 run-id',
      },
    ],
    diagnosis: [
      {
        symptom: 'workflow 文件已提交但 GitHub 上没有触发运行',
        cause: '文件路径不正确（必须在 .github/workflows/ 目录下），或者触发条件与你的操作不匹配（如只在 push 到 main 触发，但你在 feature 分支推送）',
        fix: '确认文件路径为 .github/workflows/*.yml，检查 on 触发条件，可以通过 workflow_dispatch 添加手动触发按钮',
      },
      {
        symptom: 'workflow 在 npm ci 步骤失败，报 "npm ERR! peer dep missing"',
        cause: 'CI 环境中 npm ci 比 npm install 更严格，peer dependency 冲突在本地可能被忽略但在 CI 中会报错',
        fix: '修复 package.json 中的 peer dependency 冲突，或在 step 中添加 env: NODE_ENV: production 来跳过 devDependencies',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 workflow，在每次 push 到任意分支时运行 npm test',
        hint: 'on: push 不指定 branches 则对所有分支生效',
        answer: 'on: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm install && npm test',
      },
      {
        level: '进阶',
        task: '创建一个多矩阵 workflow，在 Node 18/20/22 三个版本上同时运行测试',
        hint: '使用 strategy.matrix 定义变量矩阵',
        answer: 'jobs:\n  test:\n    strategy:\n      matrix:\n        node: [18, 20, 22]\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node }}\n      - run: npm test',
      },
    ],
  },

  'h9cf_dh_pwjialOXOlNW-': {
    mentalModel: 'GitHub CLI (gh) 是 GitHub 的「命令行遥控器」——它将 GitHub 网页上需要点点点才能完成的操作（PR、Issue、Release、Actions）全部搬到终端，让自动化和脚本化成为可能',
    handsOn: [
      {
        title: '创建 PR 一行命令',
        cmd: 'gh pr create --title "feat: add OAuth login" --body "实现 Google OAuth 登录流程" --base main',
        output: 'https://github.com/user/repo/pull/42',
        explain: '一行命令创建 PR，指定标题、描述和目标分支。当前分支自动作为源分支',
      },
      {
        title: '在终端审查 PR',
        cmd: 'gh pr view 42 && echo "---" && gh pr diff 42 | head -30',
        output: 'feat: add OAuth login\nOpen • user wants to merge feature/oauth into main\n\n---\ndiff --git a/src/auth.ts b/src/auth.ts\n+import { OAuth2Client } from "google-auth-library";',
        explain: 'pr view 显示 PR 元信息，pr diff 显示完整代码差异，无需打开浏览器',
      },
      {
        title: '管理 Issue',
        cmd: 'gh issue create --title "Bug: login timeout" --body "超过 30s 无响应" --label bug && gh issue list --label bug --state open',
        output: 'https://github.com/user/repo/issues/99\n#99  Bug: login timeout  bug  open',
        explain: '一行创建 Issue 并添加标签，然后按标签过滤列出所有 open 状态的 bug',
      },
      {
        title: '查看和管理 Actions 运行',
        cmd: 'gh run list --workflow=CI --limit 3 && gh run watch',
        output: 'STATUS  TITLE        WORKFLOW\n✓       fix: typo    CI\n✗       feat: x      CI\n⏳       refactor     CI\n(实时显示运行进度)',
        explain: 'gh run list 查看运行历史，gh run watch 实时观察当前运行的状态变化',
      },
    ],
    diagnosis: [
      {
        symptom: 'gh pr create 报 "no default remote repository" 错误',
        cause: '当前仓库有多个 remote，gh 不知道应该用哪个',
        fix: '用 gh repo set-default user/repo 设置默认远程仓库，或在命令中加 --repo user/repo 参数',
      },
      {
        symptom: 'gh 命令报 "gh: To use GitHub CLI, please authenticate first"',
        cause: '未登录或 token 过期。gh 需要认证才能访问 GitHub API',
        fix: '运行 gh auth login 重新认证，可以选择浏览器 OAuth 或粘贴 Personal Access Token',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 gh 查看你某个仓库最近 5 个已关闭的 PR',
        hint: 'gh pr list 支持 --state 和 --limit 参数',
        answer: 'gh pr list --state closed --limit 5 --repo user/repo',
      },
      {
        level: '进阶',
        task: '编写一个 shell 脚本，自动将所有 assign 给你的 open issue 列出来并按优先级排序',
        hint: 'gh issue list --assignee @me 加上 --json 输出结构化数据，配合 jq 排序',
        answer: 'gh issue list --assignee @me --state open --json number,title,labels | jq \'sort_by(.labels[0].name)\'',
      },
    ],
  },

  '55uHPFNwYPVZx8Cy3c985': {
    mentalModel: 'Workflow 触发器是 Actions 的「门铃」——它定义了"什么事件响起门铃时开始执行 workflow"，从 push、PR 到定时任务甚至手动按钮，一切皆可控',
    sections: [
      {
        title: '核心触发器类型',
        content: '1. push 触发器：\n   on:\n     push:\n       branches: [main, "release/*"]\n       paths: ["src/**"]\n\n2. pull_request 触发器：\n   on:\n     pull_request:\n       branches: [main]\n       types: [opened, synchronize, reopened]\n\n3. 定时触发（Cron）：\n   on:\n     schedule:\n       - cron: "0 8 * * 1-5"  # UTC 时间，工作日早上8点\n\n4. 手动触发：\n   on:\n     workflow_dispatch:\n       inputs:\n         environment:\n           description: "部署环境"\n           required: true\n           default: "staging"\n           type: choice\n           options: [staging, production]',
      },
      {
        title: '高级触发器',
        content: '5. 标签推送触发（常用于发布）：\n   on:\n     push:\n       tags: ["v*"]\n\n6. Issue/PR 评论触发：\n   on:\n     issue_comment:\n       types: [created]\n   （常用于 /deploy 评论触发部署）\n\n7. 被其他 workflow 调用（可复用 workflow）：\n   on:\n     workflow_call:\n       inputs:\n         version:\n           type: string\n           required: true\n\n8. 外部事件触发（webhook）：\n   on:\n     repository_dispatch:\n       types: [deploy-request]',
      },
      {
        title: '过滤与排除',
        content: '精确控制哪些路径或分支触发 workflow：\n\non:\n  push:\n    branches:\n      - main\n      - "release/**"    # 匹配 release/1.x, release/2.x\n    paths:\n      - "src/**"         # 只关注 src 目录的变更\n      - "!src/docs/**"   # 排除 docs 子目录\n      - "package.json"   # 也关注 package.json 变更\n    paths-ignore:\n      - "**.md"          # 忽略所有 markdown 文件变更\n      - "docs/**"        # 忽略 docs 目录\n\nbranches 和 paths 是 AND 关系：分支匹配且路径匹配才触发。',
      },
    ],
    diagnosis: [
      {
        symptom: '修改了 README.md 后 CI 触发了，但你希望文档变更不触发 CI',
        cause: 'workflow 的 on.push 没有配置 paths 过滤，任何文件的变更都会触发',
        fix: '添加 paths-ignore 过滤：on: push: paths-ignore: ["**.md", "docs/**"]',
      },
      {
        symptom: 'schedule 定时触发的 workflow 在预期时间没有执行',
        cause: 'GitHub 在高峰期可能延迟定时任务最多 60 分钟；如果仓库 60 天无活动，定时任务会被自动禁用',
        fix: '保持仓库活跃（定期有提交或 star），或将关键定时任务移到活跃仓库中。可以通过 workflow_dispatch 手动触发作为后备',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 workflow，仅在 PR 目标为 main 分支且 src/ 目录有变更时触发',
        hint: 'on: pull_request 配合 branches 和 paths 过滤',
        answer: 'on:\n  pull_request:\n    branches: [main]\n    paths: ["src/**"]',
      },
      {
        level: '挑战',
        task: '设计一个手动部署 workflow：通过 workflow_dispatch 选择环境（staging/production），输入版本号，在步骤中读取这些输入',
        hint: 'workflow_dispatch 的 inputs 通过 ${{ inputs.xxx }} 在步骤中引用',
        answer: 'on:\n  workflow_dispatch:\n    inputs:\n      env:\n        type: choice\n        options: [staging, production]\n      version:\n        type: string\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "Deploying ${{ inputs.version }} to ${{ inputs.env }}"',
      },
    ],
  },

  'hru0sL1-D4bJSQI1efEyU': {
    mentalModel: 'Git Reflog 是操作的「黑匣子」——它记录了你本地 HEAD 的每一次移动，即使你 force reset、rebase 或误删分支，reflog 都能帮你找回丢失的提交',
    handsOn: [
      {
        title: '查看 HEAD 的移动历史',
        cmd: 'git reflog',
        output: 'abc1234 HEAD@{0}: commit: feat: add search\ndef5678 HEAD@{1}: rebase finished: refs/heads/main\nghi9012 HEAD@{2}: rebase start: def5678\njkl3456 HEAD@{3}: commit: fix: typo in auth\nmno7890 HEAD@{4}: checkout: moving from feature to main',
        explain: 'reflog 按时间倒序记录 HEAD 的每次移动，HEAD@{0} 是最新位置。每条记录包含操作类型和摘要',
      },
      {
        title: '用 reflog 恢复被 reset 丢失的提交',
        cmd: 'git reflog | head -10 && git reset --hard HEAD@{3}',
        output: 'HEAD is now at jkl3456 fix: typo in auth',
        explain: '假设你 git reset --hard 丢弃了几个提交，通过 reflog 找到 reset 前的 HEAD@{N}，reset --hard 回去即可恢复',
      },
      {
        title: '查看特定分支的 reflog',
        cmd: 'git reflog show feature --date=relative',
        output: 'abc1234 feature@{0} (2 hours ago): commit: add search\ndef5678 feature@{1} (5 hours ago): commit: fix layout\nghi9012 feature@{2} (2 days ago): branch: Created from main',
        explain: '可以查看任意分支的 reflog，--date=relative 显示相对时间，更容易理解时间线',
      },
      {
        title: '清理过期 reflog 条目',
        cmd: 'git reflog expire --expire=30.days.ago --all && git gc --prune=now',
        output: '(reflog 条目已清理，不可恢复的松散对象已被回收)',
        explain: '默认 reflog 保留 90 天。清理旧条目后，那些不再有引用的提交会被 gc 永久删除，释放磁盘空间',
      },
    ],
    diagnosis: [
      {
        symptom: 'git rebase 过程中出现大量冲突，想放弃但已经 rebase 了一部分',
        cause: 'rebase 进行到一半发现方向错误，但已经无法简单 git rebase --abort（因为已经手动解决了部分冲突）',
        fix: '用 git reflog 找到 rebase 开始前的 HEAD@{N}，然后 git reset --hard HEAD@{N} 回到 rebase 前的状态',
      },
      {
        symptom: '误删了一个分支（git branch -D feature），分支上有未合并的提交',
        cause: '分支被删除后，其上的提交如果没有被其他分支引用就变成了"悬挂提交"',
        fix: 'git reflog 找到删除前分支指向的最后一个 SHA（通常在 checkout 记录中），然后 git checkout -b feature <sha> 恢复分支',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个提交，然后 git reset --hard HEAD~1 丢弃它，再用 reflog 恢复',
        hint: 'reflog 中 HEAD@{1} 就是 reset 前的位置',
        answer: 'git commit -m "temp" && git reset --hard HEAD~1 && git reset --hard HEAD@{1}',
      },
      {
        level: '挑战',
        task: '模拟灾难场景：force reset 到 10 个提交之前，然后只恢复其中第 3 和第 7 个提交（使用 cherry-pick）',
        hint: 'reflog 记录每次 HEAD 移动，reset 前的所有提交 SHA 仍在 reflog 中',
        answer: 'git reset --hard HEAD~10 后，git reflog 找到对应 SHA，git cherry-pick <sha-3> <sha-7> 恢复指定提交',
      },
    ],
  },

  'vHfpoVbOW0DHNtiy0VN4X': {
    mentalModel: '安装配置 gh CLI 就像获取 GitHub 的「万能遥控器」——一次认证后，所有 GitHub 操作（PR、Issue、Release、Actions）都能在终端完成',
    handsOn: [
      {
        title: '安装 GitHub CLI',
        cmd: '# macOS\nbrew install gh\n\n# Ubuntu/Debian\ncurl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg && echo "deb [signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list && sudo apt update && sudo apt install gh',
        output: 'gh version 2.50.0 (2026-05-01)',
        explain: 'macOS 推荐用 Homebrew，Linux 用官方 APT 源。安装后 gh --version 确认',
      },
      {
        title: '认证登录',
        cmd: 'gh auth login',
        output: '? What account do you want to log into? GitHub.com\n? What is your preferred protocol for Git operations? HTTPS\n? Authenticate Git with your GitHub credentials? Yes\n? How would you like to authenticate GitHub CLI? Login with a web browser\n✓ Authentication complete.',
        explain: '交互式认证流程：选择 GitHub.com、HTTPS 协议、浏览器认证。认证后 gh 自动配置 Git credential helper',
      },
      {
        title: '验证认证状态和权限',
        cmd: 'gh auth status',
        output: '✓ Logged in to github.com as yourusername\n✓ Git operations protocol: https\n✓ Token: gho_******\n✓ Token scopes: \'repo\', \'read:org\', \'workflow\'',
        explain: '确认认证状态和 token 权限范围。repo 权限覆盖大部分操作，workflow 权限允许管理 Actions',
      },
      {
        title: '配置默认编辑器和分页器',
        cmd: 'gh config set editor "code --wait" && gh config set pager "less -R"',
        output: '✓ Updated editor to "code --wait"\n✓ Updated pager to "less -R"',
        explain: '设置 gh 用 VS Code 打开编辑器（如 pr create 时写描述），用 less 做分页器',
      },
    ],
    diagnosis: [
      {
        symptom: 'gh auth login 在 SSH 服务器上无法打开浏览器认证',
        cause: '无头服务器没有浏览器，无法完成设备码认证流程',
        fix: '在本地浏览器生成 token（https://github.com/settings/tokens），然后用 echo <token> | gh auth login --with-token 或 GH_TOKEN 环境变量',
      },
      {
        symptom: 'gh 命令报 "HTTP 401 Bad credentials"，但 gh auth status 显示已登录',
        cause: 'token 过期或被撤销，GitHub 的 OAuth token 可能会过期',
        fix: '运行 gh auth refresh 刷新 token，或 gh auth login 重新认证',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '安装 gh CLI，完成认证，然后用 gh repo view 查看一个你关注的仓库信息',
        hint: 'brew install gh && gh auth login && gh repo view',
        answer: 'brew install gh && gh auth login && gh repo view facebook/react',
      },
      {
        level: '进阶',
        task: '配置 gh 的 Git credential helper 并验证 push/pull 不再需要输入密码',
        hint: 'gh auth login 时选择 "Authenticate Git with your GitHub credentials"',
        answer: 'gh auth login 选择 Yes to Git credentials，然后 git config credential.helper 应该返回 gh。之后 git push/pull 自动使用 gh token',
      },
    ],
  },

  '6QwlY3dEvjfAOPALcWKXQ': {
    mentalModel: 'Workflow Runners 是 GitHub Actions 的「工人」——每个 job 被分配一台虚拟机（GitHub-hosted）或你自己的服务器（self-hosted）来执行，理解 runner 才能选对执行环境',
    sections: [
      {
        title: 'GitHub-hosted runners',
        content: 'GitHub 提供的托管虚拟机，免费额度内无需维护：\n\n| Runner | OS | CPU | RAM | 磁盘 |\n|--------|----|-----|-----|------|\n| ubuntu-latest | Ubuntu 22.04 | 2 vCPU | 7 GB | 14 GB SSD |\n| windows-latest | Windows Server 2022 | 2 vCPU | 7 GB | 14 GB SSD |\n| macos-latest | macOS 14 | 4 vCPU | 14 GB | 14 GB SSD |\n\n使用：\n```yaml\njobs:\n  build:\n    runs-on: ubuntu-latest\n```\n\n优点：零维护、预装常用工具（Node、Python、Go、Docker 等）\n缺点：每次全新环境（无缓存）、有执行时间限制（6小时）、无法访问内网资源',
      },
      {
        title: 'Self-hosted runners',
        content: '在你自己的机器上运行的 runner，适合特殊需求：\n\n安装：\n```bash\n# 在目标机器上\nmkdir actions-runner && cd actions-runner\ngh release download --repo actions/runner --pattern "actions-runner-linux-x64-*.tar.gz"\ntar xzf actions-runner-linux-x64-*.tar.gz\n./config.sh --url https://github.com/user/repo --token ABCD1234\n./run.sh\n```\n\n使用：\n```yaml\njobs:\n  deploy:\n    runs-on: self-hosted\n```\n\n适用场景：\n- 需要访问内网服务或私有 registry\n- 需要特殊硬件（GPU、大内存）\n- 需要缓存构建产物加速构建\n- 需要超过 6 小时的长时间任务\n\n注意：self-hosted runner 有安全风险，不要在公共仓库中使用（恶意 PR 可在你的机器上执行代码）',
      },
      {
        title: 'Runner 标签与选择',
        content: 'self-hosted runner 可以打标签，workflow 按标签选择：\n\n```yaml\njobs:\n  deploy:\n    runs-on: [self-hosted, linux, gpu]\n```\n\n这会选择同时拥有 self-hosted、linux、gpu 三个标签的 runner。\n\n常用标签组合：\n- [self-hosted, production] → 生产环境部署机器\n- [self-hosted, linux, arm64] → ARM 架构构建\n- [self-hosted, windows] → Windows 特定测试',
      },
    ],
    diagnosis: [
      {
        symptom: 'self-hosted runner 显示为 "Offline" 但进程在运行',
        cause: 'runner 进程崩溃重启后 token 过期，或者网络无法连接 GitHub',
        fix: '检查网络连接，重新运行 ./config.sh 获取新 token，确保 runner 进程正常注册。可以用 ./svc.sh install && ./svc.sh start 配置为系统服务',
      },
      {
        symptom: 'workflow 一直 "Queued" 状态不开始执行',
        cause: '指定的 runner 标签没有可用的在线 runner，或者 GitHub-hosted runner 在高峰期排队',
        fix: '检查 runner 状态（Settings → Actions → Runners），确认有在线的匹配标签的 runner。如果是 GitHub-hosted 排队，等待或简化 workflow',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '编写一个 workflow，在 Ubuntu、Windows 和 macOS 三种环境上分别运行 node --version',
        hint: '使用 strategy.matrix 定义 os 数组',
        answer: 'jobs:\n  test:\n    strategy:\n      matrix:\n        os: [ubuntu-latest, windows-latest, macos-latest]\n    runs-on: ${{ matrix.os }}\n    steps:\n      - run: node --version',
      },
      {
        level: '进阶',
        task: '在本地机器上配置一个 self-hosted runner 并编写 workflow 使用它执行构建',
        hint: '在仓库 Settings → Actions → Runners 页面获取安装命令',
        answer: '按 GitHub 页面指引安装 runner，配置为系统服务。workflow 中 runs-on: self-hosted 即可将 job 分配给本地 runner',
      },
    ],
  },

  'ExXuwTQSI_lg4SRGW3Iu1': {
    mentalModel: 'Git Bisect 是 bug 猎人的「二分搜索法」——它在好版本和坏版本之间自动二分，每次将嫌疑范围减半，log₂(N) 次就能从几百个提交中精确定位引入 bug 的那个',
    handsOn: [
      {
        title: '手动 bisect 定位 bug 引入的提交',
        cmd: 'git bisect start && git bisect bad HEAD && git bisect good v2.0.0',
        output: 'Bisecting: 45 revisions left to test (~6 steps)\n[c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2] feat: refactor auth module',
        explain: '告诉 Git 当前版本有 bug（bad），v2.0.0 是好的（good）。Git 自动检出中间的提交让你测试',
      },
      {
        title: '逐步标记 good/bad 直到定位',
        cmd: '# 测试当前检出的版本...\ngit bisect good  # 或 git bisect bad\n# Git 自动跳到下一个中间点\nBisecting: 22 revisions left (~5 steps)\n...\n# 重复 5-6 次后\nc3d4e5f is the first bad commit\nAuthor: dev@example.com\nDate: ...\n    refactor: change auth token validation',
        output: 'c3d4e5f is the first bad commit',
        explain: '每次测试后标记 good/bad，Git 将搜索范围减半。6 次标记就能在 64 个提交中找到目标，效率极高',
      },
      {
        title: '自动化 bisect（用脚本代替手动测试）',
        cmd: 'cat > /tmp/test.sh << \'EOF\'\n#!/bin/bash\nnpm test -- --grep "auth token validation"\nEOF\nchmod +x /tmp/test.sh\ngit bisect start HEAD v2.0.0 --\ngit bisect run /tmp/test.sh',
        output: 'running /tmp/test.sh\nBisecting: ...\n...\nc3d4e5f is the first bad commit\nbisect run success',
        explain: 'git bisect run 自动运行测试脚本，脚本返回 0 标记为 good，返回 1-124 标记为 bad，返回 125 标记为 skip。完全自动化，无需人工介入',
      },
      {
        title: '完成 bisect 后恢复',
        cmd: 'git bisect reset',
        output: 'Previous HEAD position was c3d4e5f\nSwitched to branch \'main\'',
        explain: 'bisect 结束后必须 reset，将 HEAD 恢复到 bisect 开始前的分支位置',
      },
    ],
    diagnosis: [
      {
        symptom: 'bisect 过程中某个提交无法编译，无法判断 good 还是 bad',
        cause: '中间的提交可能因为依赖变更等原因无法构建，不代表它是好是坏',
        fix: '使用 git bisect skip 跳过这个提交。Git 会尝试用其他提交继续二分。如果跳过的提交恰好是第一个 bad commit 附近的，可能需要手动检查',
      },
      {
        symptom: 'bisect 定位到的提交看起来很无辜，不像引入 bug 的提交',
        cause: 'bisect 只告诉你"从这个提交开始行为变了"，可能是该提交改变了依赖行为、或者暴露了更早存在的 latent bug',
        fix: '仔细审查该提交的 diff（git show <sha>），看是否有间接影响。有时 bug 在更早引入但被该提交的条件变更所暴露',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个有 10 个提交的仓库，其中一个引入了 bug（比如把 1+1=2 改成 1+1=3），用 bisect 找到它',
        hint: 'bisect start，标记 HEAD 为 bad，第一个提交为 good，逐个测试',
        answer: 'git bisect start && git bisect bad HEAD && git bisect good <first-commit-sha>，每次测试后标记 good/bad，约 3-4 次定位',
      },
      {
        level: '挑战',
        task: '编写一个自动化 bisect 脚本，用 grep 检查某个函数是否返回了错误值，在 100 个提交中自动定位',
        hint: 'bisect run 的脚本返回 0=good, 1=bad, 125=skip',
        answer: '#!/bin/bash\nresult=$(node -e "console.log(require(\'./calc\').add(1,1))")\nif [ "$result" = "2" ]; then exit 0; else exit 1; fi\n\ngit bisect start HEAD v1.0 -- && git bisect run /tmp/test.sh',
      },
    ],
  },

  'lw4zHuhtxIO4kDvbyiVfq': {
    mentalModel: '仓库管理是 Git 的「后勤保障」——克隆、备份、镜像、清理、统计，这些不写代码但关乎仓库健康的操作，决定了团队的开发体验和磁盘空间',
    handsOn: [
      {
        title: '完整镜像克隆（用于备份）',
        cmd: 'git clone --mirror https://github.com/user/repo.git repo-backup.git',
        output: 'Cloning into bare repository \'repo-backup.git\'...\nremote: Enumerating objects: 1234\nReceiving objects: 100%',
        explain: '--mirror 克隆所有内容：所有分支、标签、refs、hooks 配置。产出的 bare 仓库可以完整还原原仓库',
      },
      {
        title: '分析仓库大小和对象分布',
        cmd: 'git count-objects -vH',
        output: 'count: 1234\nsize: 45.67 MiB\nin-pack: 5678\npacks: 3\nsize-pack: 234.56 MiB\nprune-packable: 0\ngarbage: 12\nsize-garbage: 1.23 MiB',
        explain: '显示松散对象和打包对象的数量与大小。如果 size-pack 异常大，可能有历史中残留的大文件需要清理',
      },
      {
        title: '清理仓库释放空间',
        cmd: 'git gc --prune=now --aggressive',
        output: 'Enumerating objects: 5678, done.\nCounting objects: 100% (5678/5678), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (4567/4567), done.',
        explain: 'gc 压缩松散对象为 pack 文件，--aggressive 使用更优的压缩算法（更慢），--prune=now 立即删除不可达对象',
      },
      {
        title: '找出仓库中最大的文件',
        cmd: 'git rev-list --objects --all | git cat-file --batch-check="%(objecttype) %(objectsize) %(objectname) %(rest)" | awk "/^blob/" | sort -rnk2 | head -10',
        output: 'blob 52428800 a1b2c3d4 assets/video.mp4\nblob 10485760 e5f6g7h8 dist/bundle.js\nblob 5242880 i9j0k1l2 vendor/lib.min.js',
        explain: '遍历所有 Git 对象找出最大的 blob（文件），帮助定位占据空间的历史文件',
      },
    ],
    diagnosis: [
      {
        symptom: 'git clone 一个老仓库非常慢，仓库大小超过 2GB',
        cause: '历史中包含了被删除但仍在 Git 对象中的大文件（如二进制、数据集）',
        fix: '用 git clone --depth 1 浅克隆只获取最新状态。长期方案是用 git filter-repo 清理历史中的大文件',
      },
      {
        symptom: 'git gc 后仓库大小没有明显减小',
        cause: '有分支或标签仍然引用着旧的大对象，gc 只清理不可达对象',
        fix: '先检查是否有旧的备份引用（refs/original/），删除不再需要的分支/标签，然后 git reflog expire --expire=now --all && git gc --prune=now',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '对你当前的项目仓库运行 git count-objects -vH，报告仓库占用了多少磁盘空间',
        hint: '关注 size-pack 字段，它是主要的空间占用',
        answer: 'git count-objects -vH，查看 size 和 size-pack 了解松散对象和打包对象的大小',
      },
      {
        level: '进阶',
        task: '编写一个定时备份脚本：每天凌晨 mirror clone 指定的 GitHub 仓库到本地，并保留最近 7 天的备份',
        hint: '用 cron 调度，git clone --mirror，用 find 删除超过 7 天的旧备份',
        answer: '#!/bin/bash\nBACKUP_DIR="/backup/git"\nDATE=$(date +%Y%m%d)\nmkdir -p $BACKUP_DIR/$DATE\ngit clone --mirror https://github.com/user/repo.git $BACKUP_DIR/$DATE/repo.git\nfind $BACKUP_DIR -maxdepth 1 -mtime +7 -exec rm -rf {} \\;',
      },
    ],
  },

  '4dxVN81rXWn6VZqK99yq0': {
    mentalModel: 'Git Worktree 是仓库的「分身术」——它让你同时检出同一仓库的多个分支到不同目录，无需 clone 多份，共享同一个 .git 数据库',
    handsOn: [
      {
        title: '创建 worktree 同时工作在两个分支',
        cmd: 'git worktree add ../myproject-hotfix hotfix-branch',
        output: 'Preparing worktree (checking out \'hotfix-branch\')\nHEAD is now at abc1234 fix: critical security issue',
        explain: '在 ../myproject-hotfix 目录创建一个新的工作树，检出 hotfix-branch。两个目录共享同一个 .git 仓库',
      },
      {
        title: '查看所有 worktree',
        cmd: 'git worktree list',
        output: '/home/dev/myproject            abc1234 [main]\n/home/dev/myproject-hotfix     def5678 [hotfix-branch]\n/home/dev/myproject-review     ghi9012 [pr/review-42]',
        explain: '列出所有 worktree 的路径、HEAD 和分支。主 worktree 包含 .git 目录，其他是链接',
      },
      {
        title: '删除不再需要的 worktree',
        cmd: 'git worktree remove ../myproject-hotfix && git worktree prune',
        output: '(worktree 已删除)\n(过期的 worktree 引用已清理)',
        explain: 'remove 删除 worktree 目录，prune 清理已不存在的 worktree 引用。如果目录已被手动删除，只需 prune',
      },
      {
        title: '用 worktree 快速切换上下文',
        cmd: '# 场景：正在 feature 分支开发，突然需要修复生产 bug\n# 不用 stash 或 commit --amend\ngit worktree add ../hotfix -b hotfix/urgent-patch main\ncd ../hotfix\n# 在独立目录修复 bug，不影响 feature 分支的工作',
        output: 'Preparing worktree (new branch \'hotfix/urgent-patch\')\nBranch \'hotfix/urgent-patch\' set up to track \'main\'.',
        explain: '从 main 创建新分支的 worktree，在独立目录修复 bug。feature 分支的未提交修改完全不受影响',
      },
    ],
    diagnosis: [
      {
        symptom: 'git worktree add 报 "fatal: branch is already checked out"',
        cause: '同一个分支不能同时被两个 worktree 检出——这是 Git 的设计约束，防止两个工作树对同一分支做冲突修改',
        fix: '用 -b new-branch 创建新分支的 worktree，或者先在另一个 worktree 中 checkout 到别的分支',
      },
      {
        symptom: 'worktree 中的 npm install 或 pip install 很慢，每次都重新下载依赖',
        cause: '每个 worktree 有独立的工作目录，node_modules 或 venv 不共享',
        fix: '使用 pnpm 的全局存储（默认去重），或为每个 worktree 缓存 node_modules。也可以将 node_modules 放在 worktree 外通过符号链接',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为当前仓库创建一个 worktree，检出 main 分支到 ../project-main 目录',
        hint: 'git worktree add <path> <branch>',
        answer: 'git worktree add ../project-main main',
      },
      {
        level: '挑战',
        task: '使用 worktree 实现"边开发边 review"：一个 worktree 写代码，另一个 worktree 运行测试和 lint',
        hint: '两个 worktree 可以独立运行命令，一个做代码修改，另一个做 CI 式检查',
        answer: '主 worktree 写代码，第二个 worktree 检出同一分支并运行 npm test。注意：同一分支不能被两个 worktree 同时 checkout，可以用 worktree 检出 main 运行 lint 检查已合并的代码',
      },
    ],
  },

  'kGnZifvXbHBf5zXIsfAQw': {
    mentalModel: 'GitHub Issue 是项目的「工单系统」——它追踪 bug 报告、功能请求和任务分配，用标签和里程碑组织，配合 gh CLI 可以完全在终端管理',
    handsOn: [
      {
        title: '创建带标签和指派的 Issue',
        cmd: 'gh issue create --title "API 超时未处理" --body "当第三方 API 响应超过 5s 时，请求挂起无超时错误" --label "bug,priority-high" --assignee @me',
        output: 'https://github.com/user/repo/issues/123',
        explain: '一行命令创建 Issue，自动添加标签和指派给自己。--body 支持 Markdown 格式',
      },
      {
        title: '搜索和过滤 Issue',
        cmd: 'gh issue list --label bug --state open --assignee @me --json number,title,createdAt --jq ".[] | \"\\(.number): \\(.title) (\\(.createdAt | split(\"T\")[0]))\""',
        output: '123: API 超时未处理 (2026-05-25)\n89: 登录页面样式错乱 (2026-05-20)',
        explain: '--json 输出结构化数据，--jq 用 jq 语法格式化。可以精确筛选标签、状态、指派人',
      },
      {
        title: '关闭 Issue 并添加评论',
        cmd: 'gh issue close 123 --comment "已在 PR #145 中修复，添加了 5s 超时配置"',
        output: '✓ Closed issue #123 (API 超时未处理)',
        explain: '关闭 Issue 并留下说明评论，关联修复的 PR 编号便于追溯',
      },
      {
        title: '用 Issue 模板规范化提交',
        cmd: 'mkdir -p .github/ISSUE_TEMPLATE && cat > .github/ISSUE_TEMPLATE/bug_report.md << \'EOF\'\n---\nname: Bug Report\nabout: 报告一个 bug\ntitle: "[BUG] "\nlabels: bug\nassignees: ""\n---\n## 描述\n<!-- 简要描述 bug -->\n\n## 复现步骤\n1.\n2.\n3.\n\n## 期望行为\n\n## 环境\n- OS:\n- 版本:\nEOF',
        output: '(创建 Issue 模板文件)',
        explain: 'Issue 模板让提交者按照固定格式填写信息，减少来回追问，标签和指派人可以自动设置',
      },
    ],
    diagnosis: [
      {
        symptom: 'gh issue create 时报 "label not found" 错误',
        cause: '指定的标签在仓库中不存在，GitHub 不会自动创建标签',
        fix: '先在仓库 Settings → Labels 中创建所需标签，或用 gh label create "priority-high" --color "ff0000" 通过 CLI 创建',
      },
      {
        symptom: 'Issue 数量过多（100+），难以管理和追踪优先级',
        cause: '缺乏标签体系和里程碑规划，所有 Issue 混在一起',
        fix: '建立标签体系（bug/feature/docs + priority-high/medium/low），使用 Milestones 按迭代分组，定期 triage 关闭无效 Issue',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 gh 创建 3 个 Issue（1 个 bug、2 个 feature），分别打上不同标签，然后列出所有 open 的 bug',
        hint: 'gh issue create --label 设置标签，gh issue list --label 过滤',
        answer: 'gh issue create -t "Bug A" -l bug && gh issue create -t "Feature B" -l enhancement && gh issue create -t "Feature C" -l enhancement && gh issue list -l bug -s open',
      },
      {
        level: '进阶',
        task: '编写一个脚本，自动关闭所有超过 90 天未更新的 stale issue 并添加评论提醒',
        hint: 'gh issue list --json 获取 updatedAt，配合 gh issue close 和 --comment',
        answer: 'gh issue list --state open --json number,updatedAt | jq -r ".[] | select(.updatedAt < \\"$(date -d \'90 days ago\' -I)\\") | .number" | while read num; do gh issue close $num --comment "Stale: 90天无更新，自动关闭。如需继续请重新打开。"; done',
      },
    ],
  },

  'aflP7oWsQzAr4YPo2LLiQ': {
    mentalModel: 'Secrets 是 CI/CD 的「保险箱」——它在 GitHub 上加密存储敏感信息（API Key、密码、Token），workflow 运行时按需注入为环境变量，永不明文出现在代码或日志中',
    handsOn: [
      {
        title: '通过 gh CLI 设置仓库 Secret',
        cmd: 'gh secret set DEPLOY_TOKEN --body "ghp_xxxxxxxxxxxxxxxxxxxx"',
        output: '✓ Set Actions secret DEPLOY_TOKEN for user/repo',
        explain: '通过命令行设置 Secret，内容在传输和存储过程中加密。也可以用 --body-file 从文件读取，避免密钥出现在 shell history 中',
      },
      {
        title: '在 workflow 中使用 Secret',
        cmd: 'cat > .github/workflows/deploy.yml << \'EOF\'\nname: Deploy\non:\n  push:\n    branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: |\n          echo "Deploying to production..."\n          curl -H "Authorization: Bearer ${{ secrets.DEPLOY_TOKEN }}" \\\n               https://api.example.com/deploy\nEOF',
        output: '(workflow 文件已创建)',
        explain: '通过 ${{ secrets.NAME }} 引用 Secret，GitHub 在运行时注入值。日志中如果输出 Secret 值会自动被替换为 ***',
      },
      {
        title: '设置环境级别的 Secret（限制访问范围）',
        cmd: 'gh secret set AWS_KEY --env production --body "AKIA..."',
        output: '✓ Set Actions secret AWS_KEY for user/repo environment production',
        explain: 'Environment Secret 只在指定环境的 job 中可用，比 repository secret 更安全。需要在 GitHub Settings 中创建 environment 并配置保护规则',
      },
      {
        title: '使用 OIDC 代替长期密钥',
        cmd: 'cat >> .github/workflows/deploy.yml << \'EOF\'\n    permissions:\n      id-token: write\n      contents: read\n    steps:\n      - uses: aws-actions/configure-aws-credentials@v4\n        with:\n          role-to-assume: arn:aws:iam::123456:role/deploy\n          aws-region: us-east-1\nEOF',
        output: '(配置 OIDC 认证)',
        explain: 'OIDC 让 GitHub Actions 临时获取云服务商凭证，无需存储长期有效的 Secret。每次运行获得短期 Token，运行结束自动失效',
      },
    ],
    diagnosis: [
      {
        symptom: 'workflow 中 ${{ secrets.MY_SECRET }} 解析为空字符串',
        cause: 'Secret 名称拼写错误，或 Secret 的作用域不匹配（如在 fork 仓库的 PR 中访问仓库 Secret，或 environment secret 在没有指定 environment 的 job 中使用）',
        fix: '确认 Secret 名称正确，检查 fork PR 的 Secret 可用策略（默认 fork PR 无法访问 Secret），environment secret 需要在 job 中添加 environment: production',
      },
      {
        symptom: 'Secret 值意外出现在 workflow 日志中',
        cause: 'Secret 通过非标准方式传递（如拼接在 URL 中），GitHub 的自动遮罩没有覆盖到',
        fix: '使用 ::add-mask:: 命令手动注册遮罩：echo "::add-mask::${{ secrets.MY_SECRET }}"。避免在 echo 或 set-output 中直接输出 Secret',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个仓库设置 2 个 Secret（API_KEY 和 DB_PASSWORD），在 workflow 中使用它们作为环境变量',
        hint: 'gh secret set 设置，workflow 中通过 env 映射到环境变量',
        answer: 'gh secret set API_KEY --body "key123" && gh secret set DB_PASSWORD --body "pass456"\n\nenv:\n  API_KEY: ${{ secrets.API_KEY }}\n  DB_PASSWORD: ${{ secrets.DB_PASSWORD }}',
      },
      {
        level: '进阶',
        task: '配置一个 Environment Secret，只在 production 环境的 job 中可用，并设置需要人工审批',
        hint: '在 GitHub Settings → Environments 中创建环境并添加 required reviewers',
        answer: '1. Settings → Environments → New environment "production" → Add required reviewers\n2. gh secret set DEPLOY_KEY --env production\n3. workflow 中添加 environment: production',
      },
    ],
  },

  'CGj_UX5JMOCKinedsNRc': {
    mentalModel: 'Git Attributes 是给文件的「身份证」——它告诉 Git 每种文件应该怎么处理：用什么换行符、做什么 diff、用什么合并策略，让 Git 智能地对待不同类型的文件',
    handsOn: [
      {
        title: '强制统一换行符',
        cmd: 'cat > .gitattributes << \'EOF\'\n# 所有文本文件统一使用 LF\n* text=auto\n\n# 这些文件必须是 LF\n*.sh text eol=lf\n*.yml text eol=lf\n\n# 这些文件必须是 CRLF（Windows 批处理）\n*.bat text eol=crlf\n\n# 二进制文件不处理\n*.png binary\n*.jpg binary\n*.pdf binary\nEOF',
        output: '(创建 .gitattributes 文件)',
        explain: 'text=auto 让 Git 自动检测文本/二进制文件。eol=lf 确保 checkout 和 commit 都使用 LF，避免 Windows 和 macOS 协作时换行符冲突',
      },
      {
        title: '自定义 diff 策略（对二进制文件做可读 diff）',
        cmd: 'cat >> .gitattributes << \'EOF\'\n*.docx diff=docx\nEOF\n\ngit config diff.docx.textconv "pandoc --to=markdown"',
        output: '(配置完成)',
        explain: '默认 .docx 的 diff 显示 "Binary files differ"，配置 textconv 后 Git 先用 pandoc 转成 Markdown 再做 diff，得到可读的文本差异',
      },
      {
        title: '指定合并策略（自动生成文件总是用当前版本）',
        cmd: 'cat >> .gitattributes << \'EOF\'\npackage-lock.json merge=ours\nyarn.lock merge=ours\n*.min.js merge=ours\nEOF',
        output: '(配置完成)',
        explain: 'merge=ours 表示合并冲突时总是保留当前分支的版本。对于 package-lock.json 这类自动生成文件，冲突后重新 npm install 即可，无需手动解决',
      },
      {
        title: '检查文件的 attributes 生效情况',
        cmd: 'git check-attr --all src/main.ts && echo "---" && git check-attr --all assets/logo.png',
        output: 'src/main.ts: text: auto\nsrc/main.ts: eol: lf\n---\nassets/logo.png: binary: set\nassets/logo.png: text: unset',
        explain: 'check-attr 显示文件实际生效的 attributes，用于验证 .gitattributes 配置是否正确匹配',
      },
    ],
    diagnosis: [
      {
        symptom: 'Windows 和 macOS 开发者协作，每次提交都显示大量换行符变更',
        cause: 'Windows 默认 CRLF，macOS 默认 LF，Git 自动转换导致文件在两个系统间看起来不同',
        fix: '在 .gitattributes 中明确设置 * text=auto eol=lf，所有文本文件统一 LF。已有的文件需要 git rm --cached 后重新 add',
      },
      {
        symptom: 'git diff 对 .min.js 或 .lock 文件输出大量无意义的变更',
        cause: '这些自动生成文件的微小变化导致整个文件 diff 巨大，难以看清实际变更',
        fix: '在 .gitattributes 中设置 *.min.js linguist-generated=true 让 GitHub 默认折叠 diff，或设置 -diff 禁用 diff 输出',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为你的项目创建 .gitattributes，确保：源代码用 LF、图片标记为 binary、lock 文件用 ours 合并策略',
        hint: 'text eol=lf / binary / merge=ours',
        answer: '* text=auto\n*.ts text eol=lf\n*.js text eol=lf\n*.png binary\n*.jpg binary\npackage-lock.json merge=ours',
      },
      {
        level: '进阶',
        task: '配置 .gitattributes 使 .ipynb (Jupyter Notebook) 文件可以做 JSON 级别的 diff 而非二进制 diff',
        hint: '使用 textconv 将 .ipynb 转为可读文本，或用 nbdime 工具',
        answer: '.gitattributes: *.ipynb diff=jupyternotebook\nGit config: git config diff.jupyternotebook.textconv "jupyter nbconvert --to script --stdout"',
      },
    ],
  },

};
