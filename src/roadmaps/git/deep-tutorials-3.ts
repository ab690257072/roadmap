import type { DeepTutorial } from '../deep-types';

export const GIT_DEEP_TUTORIALS_3: Record<string, DeepTutorial> = {
  "s3MzDYFPMASqiS8UnvWzW": {
    mentalModel: 'PR 是代码进入主干的「海关通道」——每一次合并都必须经过审查、CI 检验和放行，确保主干永远干净',
    handsOn: [
      {
        title: '用 gh cli 创建 PR 并关联 CI',
        cmd: 'gh pr create --title "feat: add login page" --body "Closes #42" --base main',
        output: 'Creating pull request for feat: add login page into main in owner/repo\nhttps://github.com/owner/repo/pull/15',
        explain: '--base 指定目标分支，body 中 Closes #42 会在 PR 合并后自动关闭 issue。PR 创建后会立即触发 GitHub Actions 工作流'
      },
      {
        title: '查看 PR 的 CI 检查状态',
        cmd: 'gh pr checks 15',
        output: 'PASS  build           2m30s\nFAIL  lint            1m05s\nPASS  test            3m12s',
        explain: '每个 check 对应一个 workflow job。FAIL 状态的 PR 不能合并（如果启用了 branch protection）。点击 URL 可以看详细日志'
      },
      {
        title: '在 PR 上要求 review 并设置合并条件',
        cmd: 'gh pr edit 15 --add-reviewer alice && gh pr merge 15 --squash --delete-branch --auto',
        output: 'Edited pull request #15\n✓ Auto-merge enabled for pull request #15 (squash)',
        explain: '--auto 表示所有 required checks 通过后自动合并。--squash 把所有 commit 压缩成一个干净的提交。--delete-branch 合并后删掉源分支'
      },
      {
        title: '配置 branch protection 强制 CI 通过才能合并',
        cmd: 'gh api repos/{owner}/{repo}/branches/main/protection -X PUT --input protection.json',
        output: '{"url":"...","required_status_checks":{"strict":true,"contexts":["build","test"]}}',
        explain: 'protection.json 包含 {"required_status_checks":{"strict":true,"contexts":["build","test"]},"enforce_admins":true}。strict:true 要求分支必须是最新的才允许合并'
      }
    ],
    diagnosis: [
      {
        symptom: 'PR 显示 "Waiting for status to be reported"，CI 一直没跑',
        cause: 'workflow 文件只在目标分支存在，或者 pull_request trigger 的路径过滤器把改动排除了',
        fix: '确认 .github/workflows/*.yml 存在于 PR 的源分支，且 paths 过滤没有误排。也可以在 workflow_dispatch 手动触发一次'
      },
      {
        symptom: 'PR 通过了 CI 但合并按钮灰色不可点',
        cause: 'Branch protection 设置了 required reviews 但还没人批准；或者管理员没有勾选 "Allow specified actors to bypass required pull requests"',
        fix: '找 code owner 审批，或在 Settings → Branches 调整 required reviewers 数量。团队小时可以用 enforce_admins:false 让管理员绕过'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 PR，添加至少一个 reviewer，并确保 CI 全部通过后合并',
        hint: '用 gh pr create + gh pr edit --add-reviewer + gh pr merge --squash',
        answer: 'gh pr create --title "fix: typos" --body "Fixed README typos" --base main && gh pr edit --add-reviewer bob && gh pr merge --squash --delete-branch'
      },
      {
        level: '进阶',
        task: '写一个 workflow，使得 PR 打开时自动给特定路径的代码分配 reviewer',
        hint: '使用 CODEOWNERS 文件 + CODEOWNERS action',
        answer: '在仓库根目录创建 CODEOWNERS 文件：*.go @golang-team，docs/* @docs-team。GitHub 会自动根据修改文件路径分配 reviewer'
      }
    ]
  },

  "zdunaucVe8J1tKf_z-NQo": {
    mentalModel: 'Git LFS 是 Git 的「快递柜」——大文件不放进仓库本体，只存一个指针，需要时再从远程储物柜取回原件',
    handsOn: [
      {
        title: '安装 Git LFS 并初始化',
        cmd: 'git lfs install',
        output: 'Git LFS initialized.',
        explain: '这一步在当前 git config 中注册了 LFS 的 filter 钩子。以后 git add / checkout 遇到 LFS 追踪的文件时，会自动走 LFS 通道而不是直接进 blob'
      },
      {
        title: '追踪特定类型的大文件',
        cmd: 'git lfs track "*.psd" "*.mp4"',
        output: 'Tracking "*.psd"\nTracking "*.mp4"',
        explain: '命令修改了 .gitattributes 文件，添加 filter=lfs diff=lfs merge=lfs -text 属性。之后匹配的文件都走 LFS 存储。.gitattributes 必须提交到仓库'
      },
      {
        title: '查看 LFS 文件列表和占用空间',
        cmd: 'git lfs ls-files && git lfs status',
        output: 'a1b2c3d4 * logo.psd (23 MB)\ne5f6g7h8 * demo.mp4 (150 MB)\nGit LFS objects to be pushed to origin/master',
        explain: 'ls-files 列出所有被 LFS 管理的文件及其大小。status 显示待上传的对象。星号 * 表示内容已在本地，减号 - 表示只有指针'
      },
      {
        title: '清理旧版 LFS 缓存释放磁盘',
        cmd: 'git lfs prune',
        output: 'prune: 15 local object(s), 8 retained, pruning 7 object(s) ... freed 420 MB',
        explain: 'LFS 默认保留所有下载过的版本。prune 只删除不在当前 HEAD 和近期 ref 中的旧对象，安全释放空间。可用 git config lfs.fetchrecentrefsdays 调整保留天数'
      }
    ],
    diagnosis: [
      {
        symptom: 'clone 仓库后打开 LFS 文件看到的是类似 "version https://git-lfs.github.com/spec/v1" 的文本',
        cause: 'Git LFS 没有安装或没有执行 pull，文件只有指针没有真实内容',
        fix: '先 git lfs install，再 git lfs pull。如果是新 clone，确保 git lfs install 在 clone 之前执行过（全局只需一次）'
      },
      {
        symptom: 'push 时报 "LFS: batch response: repository or object not found"',
        cause: '远端服务器不支持 LFS（如某些自建 GitLab 没启用），或者 LFS endpoint 地址不对',
        fix: '确认远端服务支持 LFS。GitHub/GitLab.com 都支持。自建服务检查 LFS 配置。可用 git config lfs.url 手动指定 LFS API 地址'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在一个新仓库中配置 LFS 追踪所有 .zip 和 .tar.gz 文件，提交并推送到远程',
        hint: 'git lfs install → git lfs track → 提交 .gitattributes → push',
        answer: 'git lfs install && git lfs track "*.zip" "*.tar.gz" && git add .gitattributes && git commit -m "chore: configure LFS" && git push origin main'
      },
      {
        level: '挑战',
        task: '将仓库中已经存在的大文件（已提交到普通 git history）迁移到 LFS，并保持历史完整',
        hint: '使用 git lfs migrate import 重写历史',
        answer: 'git lfs migrate import --include="*.psd" --everything。这会改写所有包含 .psd 的历史 commit，团队需要重新 clone。操作前务必备份'
      }
    ]
  },

  "Y0EWgPsS4kZxH3y53jNxY": {
    mentalModel: 'gh cli 是 GitHub 的「终端遥控器」——让你在脚本和 CI 里像操作网页一样操控 GitHub，不用拼 JSON 也不用装 curl',
    handsOn: [
      {
        title: '在 CI workflow 中用 gh 自动标记 release',
        cmd: 'gh release create v1.2.0 ./dist/app.tar.gz --notes "Release v1.2.0: bug fixes"',
        output: 'https://github.com/owner/repo/releases/tag/v1.2.0',
        explain: 'CI 环境中 GITHUB_TOKEN 环境变量自动注入，gh 无需额外认证。--notes 可以内联说明，也可以用 --notes-file CHANGELOG.md 读取文件'
      },
      {
        title: '批量关闭过期 issue',
        cmd: 'gh issue list --state open --label stale --json number --jq ".[].number" | xargs -I{} gh issue close {} --comment "Closing stale issue"',
        output: 'Closed issue #101\nClosed issue #98\nClosed issue #87',
        explain: '--json + --jq 实现结构化输出提取。配合 xargs 做批量操作。CI 中可以定时运行这个脚本来自动清理陈旧 issue'
      },
      {
        title: '在自动化脚本中查询 PR 状态并通知',
        cmd: 'STATUS=$(gh pr checks 42 --json name,state --jq ".[] | select(.state==\\"FAILURE\\") | .name") && echo "Failed: $STATUS"',
        output: 'Failed: lint-check',
        explain: '--json 输出结构化数据，--jq 进行过滤。可以集成到 cron job 中定期检查关键 PR 的 CI 状态，失败时发送 Slack/邮件通知'
      },
      {
        title: '用 gh api 调用未暴露的 API 端点',
        cmd: 'gh api repos/{owner}/{repo}/actions/runs --jq ".workflow_runs[:3] | .[].conclusion"',
        output: 'success\nfailure\nsuccess',
        explain: 'gh api 是万能后备——任何 REST 端点都可以直接调用。{owner}/{repo} 会自动从当前仓库填充。--jq 做结果过滤'
      }
    ],
    diagnosis: [
      {
        symptom: 'gh 命令报 "HTTP 403: Resource not accessible by integration"',
        cause: 'GITHUB_TOKEN 权限不足，默认的 token 只有读权限',
        fix: '在 workflow yml 中添加 permissions: 块，如 contents: write, issues: write。Organization 级别也需要放开 Actions token 权限'
      },
      {
        symptom: 'gh auth status 显示 "not logged in"，但 GITHUB_TOKEN 已设置',
        cause: '环境变量名错误或 token 已过期。gh 优先读 GH_TOKEN，然后才是 GITHUB_TOKEN',
        fix: 'export GH_TOKEN=<token>，或者 gh auth login --with-token < token.txt。CI 环境中确认 secret 名称和引用语法正确'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 shell 脚本：列出当前仓库最近 5 个已关闭的 PR，输出标题和合并时间',
        hint: 'gh pr list --state merged --limit 5 --json title,mergedAt',
        answer: 'gh pr list --state merged --limit 5 --json title,mergedAt --jq ".[] | \\"\\(.title) — merged at \\(.mergedAt)\\""'
      },
      {
        level: '进阶',
        task: '在 GitHub Actions workflow 中使用 gh cli 在 PR 评论中自动贴上测试覆盖率报告',
        hint: 'gh pr comment <number> --body-file coverage.txt',
        answer: '先生成覆盖率报告到 coverage.txt，然后在 workflow step 中运行 gh pr comment ${{ github.event.pull_request.number }} --body-file coverage.txt。需要 pull-requests: write 权限'
      }
    ]
  },

  "alysXC4b1hGi9ZdQ5-40y": {
    mentalModel: 'Artifacts 是 CI 流水线上的「传送带托盘」——每一步把产物放上去，后面的步骤和人都能拿到，但过了保质期就自动回收',
    handsOn: [
      {
        title: '上传构建产物到 workflow run',
        cmd: '# 在 workflow YAML 中使用 actions/upload-artifact@v4\n- uses: actions/upload-artifact@v4\n  with:\n    name: dist-build\n    path: dist/\n    retention-days: 7',
        output: '[upload-artifact] Uploading dist/ (3 files, 2.4 MB)\n[upload-artifact] Artifact dist-build uploaded successfully',
        explain: 'artifact 以 zip 形式存储在 GitHub 服务器上。retention-days 控制保存期限（默认 90 天，最短 1 天）。同名 artifact 同一 job 不能重复上传'
      },
      {
        title: '在后续 job 中下载前一 job 的产物',
        cmd: '# workflow YAML\n- uses: actions/download-artifact@v4\n  with:\n    name: dist-build\n    path: ./dist',
        output: '[download-artifact] Downloading dist-build to ./dist\n[download-artifact] Extracted 3 files',
        explain: '跨 job 传递数据的标准方式。upload 在 build job 完成，download 在 deploy job 开头。两个 job 之间必须在 needs 中声明依赖关系'
      },
      {
        title: '用 gh cli 从命令行下载 artifact',
        cmd: 'gh run download 12345678 --name dist-build --dir ./downloaded',
        output: 'Downloaded dist-build.zip to ./downloaded/',
        explain: 'run ID 可以从 gh run list 获取。适合在本地拉取 CI 的构建结果做调试，不需要自己搭产物传输管道'
      }
    ],
    diagnosis: [
      {
        symptom: 'deploy job 报 "Unable to find any artifacts for the associated workflow"',
        cause: 'build job 没有成功上传 artifact，或者 deploy job 的 needs 中没有包含 build job 导致并行执行',
        fix: '检查 build job 是否 upload-artifact 步骤真正执行成功。deploy job 的 needs: [build] 不能漏。还要确认 artifact name 拼写完全一致'
      },
      {
        symptom: 'artifact 文件解压后内容是空文件夹',
        cause: 'upload-artifact 的 path 使用了通配符但匹配到了目录而非文件，或者构建实际上没有输出到预期路径',
        fix: '先用 ls -la dist/ 打印确认构建产物存在。path 尽量明确：dist/**/* 比 dist/ 更可靠地匹配所有子文件'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 workflow：build job 编译生成 dist/ 目录并上传为 artifact，deploy job 下载并部署',
        hint: 'upload-artifact@v4 和 download-artifact@v4 配合 needs 声明',
        answer: 'jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci && npm run build\n      - uses: actions/upload-artifact@v4\n        with: { name: dist, path: dist/ }\n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/download-artifact@v4\n        with: { name: dist, path: dist }\n      - run: ls -la dist/'
      },
      {
        level: '进阶',
        task: '如何在多个 matrix job 中上传 artifact 而不冲突？',
        hint: 'artifact name 中加入 matrix 变量做区分',
        answer: 'name: dist-${{ matrix.os }}-${{ matrix.node-version }}。下载时用 download-artifact 不带 name 参数会下载所有 artifact 到一个目录树中'
      }
    ]
  },

  "jc4R1zhd1YeCEbVuxwJWy": {
    mentalModel: 'Workflow Status 是流水线的「体检报告单」——每次跑完都有 pass/fail/cancelled 结论，你可以用它驱动通知、门禁和徽章',
    handsOn: [
      {
        title: '查看所有 workflow runs 的状态',
        cmd: 'gh run list --limit 5',
        output: 'STATUS    TITLE              WORKFLOW   BRANCH  ID\n✓         Fix login bug       CI         main    9876543\n✕         Add search          CI         feat    9876542\n◦         Update docs         Docs       main    9876541\n-         Cancelled           CI         main    9876540\n✓         Release v2.1        Release    main    9876539',
        explain: '✓ = completed+success，✕ = completed+failure，◦ = in_progress，- = cancelled。可以加 --workflow CI.yml 过滤特定 workflow'
      },
      {
        title: '查看某次 run 的详细 job 状态',
        cmd: 'gh run view 9876542',
        output: 'Run: Add search (9876542)\nStatus: failure\nJobs:\n  ✓ build        (2m10s)\n  ✕ test         (1m05s)\n  - deploy       (skipped)',
        explain: '失败的 job 名字一目了然。deploy 因为 test 失败而被 skipped。继续 gh run view --job=<job-id> --log 可以看具体哪一步出错'
      },
      {
        title: '给 README 添加 workflow 状态徽章',
        cmd: '# 在 README.md 中添加\n![CI](https://github.com/owner/repo/actions/workflows/ci.yml/badge.svg)',
        output: 'README 渲染后显示绿色的 passing 或红色的 failing 徽章',
        explain: 'badge URL 格式固定：/actions/workflows/<file>/badge.svg?branch=main。可以直接贴在任何文档页面。还可以加 ?event=push 按事件过滤'
      },
      {
        title: '用 API 轮询 workflow 状态做自动化决策',
        cmd: 'gh api repos/{owner}/{repo}/actions/runs/9876542 --jq ".conclusion"',
        output: 'failure',
        explain: 'conclusion 的可能值：success / failure / cancelled / skipped / timed_out / action_required / neutral。自动化脚本据此决定是否发通知或回滚'
      }
    ],
    diagnosis: [
      {
        symptom: 'workflow 显示 "stale" 或长时间 pending 不动',
        cause: 'runner 资源耗尽（self-hosted runner 离线），或者 workflow 需要手动审批（fork PR 首次触发需 maintainer 批准）',
        fix: '检查 self-hosted runner 连接状态。对 fork PR，维护者在 Actions 页面点击 Approve and run'
      },
      {
        symptom: 'workflow 成功了但徽章还是红色',
        cause: '徽章默认展示的是默认分支（main）的最新 run，而你在 feature 分支上跑的',
        fix: '在 badge URL 追加 ?branch=feature-branch。或者确认 main 分支确实有一次成功的 default-branch run'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '给你项目的 README 添加 CI workflow 的状态徽章，并在一次故意失败的 PR 中观察它变化',
        hint: 'badge URL 来自 Actions 页面的 Workflow file 下拉菜单',
        answer: '![Build Status](https://github.com/YOUR_USER/YOUR_REPO/actions/workflows/ci.yml/badge.svg)。在 Actions 页右上角 ··· 菜单也可以直接 Create status badge 复制 markdown'
      },
      {
        level: '进阶',
        task: '写一个脚本，当某个 PR 的 CI 连续失败 3 次时自动在 PR 下留一条警告评论',
        hint: 'gh run list --branch <branch> 拿历史 run，统计 conclusion，gh pr comment 发评论',
        answer: 'FAILED=$(gh run list --branch feat/search --limit 5 --json conclusion --jq "[.[] | select(.con==\\"failure\\")] | length"); if [ "$FAILED" -ge 3 ]; then gh pr comment 42 --body "⚠️ CI has failed $FAILED times in a row"; fi'
      }
    ]
  },

  "lSCnKhmRr6xrKVYxO8idD": {
    mentalModel: 'REST API 是 GitHub 的「标准柜台窗口」——每个资源都有 CRUD 四个窗口（GET/POST/PATCH/DELETE），URL 就是门牌号，JSON 就是表格',
    handsOn: [
      {
        title: '用 PAT 认证并列出自己的仓库',
        cmd: 'curl -H "Authorization: Bearer ghp_xxxx" https://api.github.com/user/repos?sort=updated&per_page=3',
        output: '[{"full_name":"me/project-a","stargazers_count":42},{"full_name":"me/project-b","stargazers_count":15}]',
        explain: 'Personal Access Token 放在 Authorization header。/user/repos 返回当前用户可见的所有仓库。per_page 最大 100，分页靠 Link header'
      },
      {
        title: '通过 API 创建 issue 并打上标签',
        cmd: 'curl -X POST -H "Authorization: Bearer $TOKEN" https://api.github.com/repos/me/proj/issues -d \'{"title":"Bug: crash on load","labels":["bug","p1"]}\'',
        output: '{"number":87,"html_url":"https://github.com/me/proj/issues/87"}',
        explain: 'POST /repos/{owner}/{repo}/issues 创建 issue。labels 可以是已有标签名字的数组。响应里的 number 就是 issue 编号，后续操作用它'
      },
      {
        title: '翻页获取大量数据（pagination）',
        cmd: 'curl -sI "https://api.github.com/repos/octocat/Hello-World/issues?per_page=100&page=2" | grep -i link',
        output: 'link: <https://api.github.com/repositories/.../issues?per_page=100&page=3>; rel="next", <...page=5>; rel="last"',
        explain: 'GitHub 用 Link header 做分页。rel="next" 指向下一页，rel="last" 指向最后一页。Octokit SDK 自带 paginate 方法帮你自动翻页'
      },
      {
        title: 'Rate limit 检查',
        cmd: 'curl -s https://api.github.com/rate_limit | jq ".rate"',
        output: '{"limit":5000,"remaining":4987,"reset":1700000000}',
        explain: '认证用户 5000 次/小时，匿名 60 次/小时。reset 是 Unix 时间戳，剩余配额在那个时刻重置。写自动化时要主动检查并做退避'
      }
    ],
    diagnosis: [
      {
        symptom: 'API 返回 403 "API rate limit exceeded"',
        cause: '请求频率超过限额（匿名 60/h，认证 5000/h），常见于 CI 中大量并发请求',
        fix: '使用认证 token（5000/h），加入 cache（ETag / If-None-Match），或用 GraphQL 单次请求获取更多数据减少调用次数'
      },
      {
        symptom: 'POST 创建资源返回 422 Unprocessable Entity',
        cause: '请求体字段缺失或类型错误，比如 labels 传了不存在的标签名',
        fix: '查看响应的 errors 数组，里面有具体的 field 和 code。提前用 GET 接口确认 labels/milestones 等引用资源是否存在'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 curl 获取某个公开仓库最近 10 个 closed issue 的标题',
        hint: 'GET /repos/{owner}/{repo}/issues?state=closed&per_page=10',
        answer: 'curl -s "https://api.github.com/repos/facebook/react/issues?state=closed&per_page=10" | jq ".[].title"'
      },
      {
        level: '挑战',
        task: '写一个 Node.js 脚本，用 Octokit 遍历组织下所有仓库，汇总每个仓库的 open issue 数量并排序输出',
        hint: 'octokit.paginate("GET /orgs/{org}/repos") + octokit.rest.issues.listForRepo',
        answer: 'const { Octokit } = require("@octokit/rest");\nconst kit = new Octokit({ auth: process.env.GH_TOKEN });\nconst repos = await kit.paginate("GET /orgs/my-org/repos");\nconst counts = await Promise.all(repos.map(async r => ({ name: r.name, count: (await kit.rest.issues.listForRepo({ owner: "my-org", repo: r.name, state: "open", per_page: 1 })).headers["x-total-count"] || 0 })));\ncounts.sort((a,b) => b.count - a.count); console.table(counts);'
      }
    ]
  },

  "SsogoCgJIbeTD6tk8UhTe": {
    mentalModel: 'Marketplace Actions 是 GitHub 的「插件超市」——别人打包好的 CI 能力，你一行 uses 引用就能用，不用自己造轮子',
    sections: [
      {
        title: 'Actions 的分类与来源',
        content: 'Marketplace 上有三类 Action：\n1. **官方维护**（actions/*）：checkout、upload-artifact、setup-node 等，最稳定\n2. **Verified Creator**（docker/build-push-action 等）：知名组织维护，质量高\n3. **社区贡献**：个人开发者发布，使用前必须审查源码和 star 数\n\n选择原则：优先官方 > Verified > 高 star 社区，永远要 pin 版本号（@v4 而非 @main）'
      },
      {
        title: '如何发现和评估一个 Action',
        content: '1. 在 github.com/marketplace 搜索功能关键词（如 "deploy aws"）\n2. 查看 Action 的 README 了解 inputs/outputs\n3. 检查最近更新时间（>6个月未更新可能废弃）\n4. 阅读源码（特别是 entrypoint.sh/Dockerfile）确认没有恶意行为\n5. 看 Issues 和 Discussions 中的常见问题\n6. 确认 License 兼容你的项目'
      },
      {
        title: '版本锁定与安全最佳实践',
        content: '推荐做法：\n- 锁定大版本：uses: actions/checkout@v4（跟随 major 更新）\n- 锁定 commit SHA：uses: actions/checkout@abc123（最安全，可防供应链攻击）\n- 禁止 @master / @main：上游一改你就变，极其危险\n- 使用 Dependabot 或 Renovate 自动升级 Action 版本'
      }
    ],
    diagnosis: [
      {
        symptom: 'workflow 报 "Unable to resolve action X@v3, unable to find version v3"',
        cause: '该 Action 不存在 v3 tag，可能是作者还没发布那个版本，或者版本号拼错',
        fix: '去 Action 的 GitHub 仓库 Releases 页面确认可用的版本号。常见错误是把 setup-node@v3 写成 setup-node@3（少了 v 前缀）'
      },
      {
        symptom: '使用第三方 Action 后 CI 泄漏了密钥',
        cause: 'Action 的入口脚本会把所有 env 变量打印到日志，或者上传到外部服务器',
        fix: '审查 Action 源码。敏感信息不要放 env，改用 core.setSecret() 机制。只用信任的 Action，pin 到 commit SHA，定期 audit'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '找一个 Marketplace Action 用来在 PR 上自动贴 label，并配置到你的仓库',
        hint: '搜索 "labeler" 相关的 Action',
        answer: '使用 actions/labeler@v5，配置 .github/labeler.yml 定义路径到 label 的映射规则，在 pull_request 事件中触发'
      },
      {
        level: '进阶',
        task: '如何将一个常用的第三方 Action 替换为 fork 到自己组织的私有副本以防供应链风险？',
        hint: 'Fork + 同步上游 + pin 到 commit SHA',
        answer: '1) Fork action repo 到自己的 org；2) 设置 Actions 同步 workflow 定期 pull upstream changes；3) workflow 中改为 uses: my-org/action-name@COMMIT_SHA；4) Dependabot 配置跟踪 fork 的更新'
      }
    ]
  },

  "KlXPt-K6br8PtpLgELaCj": {
    mentalModel: 'GraphQL API 是 GitHub 的「自助餐厅」——你说清楚要什么菜（字段），它就只给你什么，一次端齐，不用跑多个窗口',
    handsOn: [
      {
        title: '用 gh api 执行 GraphQL 查询获取精确数据',
        cmd: 'gh api graphql -f query=\'{ viewer { login repositories(first:3, orderBy:{field:UPDATED_AT,direction:DESC}) { nodes { name updatedAt } } } }\'',
        output: '{"data":{"viewer":{"login":"tu","repositories":{"nodes":[{"name":"proj-a","updatedAt":"2024-03-15T10:00:00Z"},{"name":"proj-b","updatedAt":"2024-03-14T08:00:00Z"}]}}}}',
        explain: 'GraphQL query 直接嵌入请求体。first:3 限制条数，orderBy 指定排序。只返回你请求的字段，不多不少，节省带宽'
      },
      {
        title: '一次请求获取 issue + comments + labels（REST 需要三次）',
        cmd: 'gh api graphql -f query=\'query { repository(owner:"me",name:"proj") { issue(number:42) { title body comments(first:5) { nodes { author { login } body } } labels(first:10) { nodes { name color } } } } }\'',
        output: '{"data":{"repository":{"issue":{"title":"Bug report","body":"...","comments":{"nodes":[{"author":{"login":"alice"},"body":"confirmed"}]},"labels":{"nodes":[{"name":"bug","color":"d73a4a"}]}}}}}',
        explain: '一个请求拿到了 issue 标题、正文、前 5 条评论和前 10 个标签。REST 需要分别调 issues/42、issues/42/comments、issues/42/labels 三个端点'
      },
      {
        title: '使用变量（variables）避免字符串拼接',
        cmd: 'gh api graphql -f query=\'query($owner:String!,$name:String!,$num:Int!){ repository(owner:$owner,name:$name){ issue(number:$num){ title } } }\' -f owner=facebook -f name=react -F num=1234',
        output: '{"data":{"repository":{"issue":{"title":"Cannot read property..."}}}} ',
        explain: '-f 传 String 变量，-F 传 Int/Boolean。变量在 query 签名中声明类型。这样避免了手动转义和 SQL 注入式的问题'
      }
    ],
    diagnosis: [
      {
        symptom: 'GraphQL 查询返回 "Field X doesn\'t exist on type Y"',
        cause: '字段名拼写错误或字段不存在于该类型上。GraphQL schema 是强类型的，不像 REST 那样忽略未知参数',
        fix: '在 docs.github.com/graphql/overview/explorer 交互式 explorer 中验证查询。它会实时标红无效字段并提供补全建议'
      },
      {
        symptom: '查询返回的数据节点不完整，有些字段是 null',
        cause: '嵌套层级触发了节点的 rate limit（每个 connection 有 node limit），或者你没有权限看那些私有数据',
        fix: '缩小 first/last 的值，分多次请求。对 null 数据检查 token scope 是否包含 repo（私有仓库访问需要）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 GraphQL 查询你自己的 GitHub 用户名、bio 和 pinned repositories 的名称',
        hint: 'viewer { login bio pinnedItems(first:6) { nodes { name } } }',
        answer: 'gh api graphql -f query=\'{ viewer { login bio pinnedItems(first:6, types:REPOSITORY) { nodes { name description } } } }\''
      },
      {
        level: '进阶',
        task: '写一个脚本一次性获取某仓库最近 20 个 PR 的标题、作者、review 数量和合并状态',
        hint: 'repository.pullRequests(last:20) { nodes { title author reviews(first:100) { totalCount } merged } }',
        answer: 'gh api graphql -f query=\'{ repository(owner:"facebook",name:"react") { pullRequests(last:20, states:[MERGED,OPEN]) { nodes { title author { login } reviews { totalCount } merged mergedAt } } } }\' | jq ".data.repository.pullRequests.nodes"'
      }
    ]
  },

  "qrdOARfqGPF9xhF6snbAn": {
    mentalModel: 'OAuth Apps 是「委托通行证」——第三方应用拿着用户的授权来代替用户操作 GitHub，就像用 Google 账号登录别的网站',
    sections: [
      {
        title: 'OAuth 三腿流程详解',
        content: '完整的 OAuth 授权流程涉及三方：\n1. **用户**点击「用 GitHub 登录」→ 浏览器跳转 GitHub 授权页\n2. **GitHub** 展示权限范围（scopes），用户同意 → 回调 redirect_uri 并附带 code\n3. **App Server** 用 code + client_secret 换取 access_token → 用 token 调 API\n\n关键安全点：client_secret 只能存在服务器端，绝不能出现在前端代码中。code 是一次性的，换完即销毁'
      },
      {
        title: 'Scopes 权限范围设计',
        content: '常见 scope 及含义：\n- `repo`：完整读写私有和公开仓库（最强权限，慎用）\n- `public_repo`：仅操作公开仓库\n- `read:user` + `user:email`：读用户信息和邮箱（登录场景最小权限）\n- `admin:org`：管理组织成员和团队\n- `workflow`：读写 GitHub Actions workflows\n\n原则：只申请必需的 scope。用户可以随时在 Settings → Applications 撤销权限'
      },
      {
        title: 'OAuth App vs GitHub App 对比',
        content: '| 维度 | OAuth App | GitHub App |\n|------|-----------|------------|\n| 身份 | 代表用户 | 代表自己（bot）或用户 |\n| 权限粒度 | scope 粗粒度 | 细粒度按需选 |\n| Webhook | 不支持 | 原生支持 |\n| Token | 用户级 token | 安装级 token（更短时效）|\n| 适用场景 | 登录、IDE 插件 | CI 工具、机器人、自动化 |\n\n新项目推荐使用 GitHub App，除非只需要「用 GitHub 登录」的功能'
      }
    ],
    diagnosis: [
      {
        symptom: 'OAuth 回调报 "redirect_uri_mismatch"',
        cause: '注册 OAuth App 时填的 callback URL 和实际请求中的 redirect_uri 不完全一致（包括协议、路径、尾部斜杠）',
        fix: '在 Settings → Developer settings → OAuth apps 中确认 Authorization callback URL 和代码中传的 redirect_uri 字符完全相同'
      },
      {
        symptom: '获取到的 token 调用 API 返回 404 而非 403',
        cause: 'token scope 不包含目标资源的权限（如无 repo scope 访问私有仓库），GitHub 故意返回 404 隐藏私有仓库的存在',
        fix: '让用户重新授权并包含所需 scope。可以在 OAuth authorize URL 加 &scope=repo 重新引导。记得检查 token 的 scopes 响应头确认生效'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 GitHub 注册一个 OAuth App（callback 设为 http://localhost:3000/callback），记录 Client ID 和 Secret',
        hint: 'Settings → Developer settings → OAuth Apps → New OAuth App',
        answer: '填入 Application name、Homepage URL(http://localhost:3000)、Authorization callback URL(http://localhost:3000/callback)。创建后 Generate a new client secret。注意 Secret 只显示一次'
      },
      {
        level: '进阶',
        task: '用 Node.js + Express 实现完整的 OAuth 登录回调，获取 token 后调用 /user 接口打印用户名',
        hint: '使用 axios 向 https://github.com/login/oauth/access_token POST code+secret',
        answer: '// server.js\nconst express = require("express"); const axios = require("axios");\nconst app = express();\napp.get("/login", (req,res) => res.redirect(`https://github.com/login/oauth/authorize?client_id=${ID}&scope=read:user`));\napp.get("/callback", async (req,res) => {\n  const { data } = await axios.post("https://github.com/login/oauth/access_token", { client_id: ID, client_secret: SECRET, code: req.query.code }, { headers: { Accept: "application/json" }});\n  const user = await axios.get("https://api.github.com/user", { headers: { Authorization: `Bearer ${data.access_token}` }});\n  res.send(`Hello ${user.data.login}`);\n});\napp.listen(3000);'
      }
    ]
  },

  "5Oax1p7zIZ9HD2hmENPof": {
    mentalModel: 'GitHub App 是一个拥有独立身份的「机器人员工」——你给它分配精确到动作级别的权限卡，它用自己的工牌（installationToken）干活，不占任何人的工位（license seat）',
    handsOn: [
      {
        title: '用 gh 命令行快速创建 GitHub App',
        cmd: 'gh extension install github/gh-api-cli && gh api /app -X GET',
        output: '{"id":12345,"slug":"my-bot","name":"My Bot App","permissions":{"issues":"write","pull_requests":"read"}}',
        explain: 'GitHub App 注册后就有了独立的 App ID 和 slug。通过 /app 端点可以查看当前 App 的配置。真正的 API 调用需要用 installation token'
      },
      {
        title: '生成 Installation Token（短期令牌）',
        cmd: 'JWT=$(ruby -e "require \'jwt\'; puts JWT.encode({iss:APP_ID,iat:Time.now.to_i-60,exp:Time.now.to_i+600}, File.read(\'private-key.pem\'), \'RS256\')") && curl -X POST -H "Authorization: Bearer $JWT" https://api.github.com/app/installations/INSTALL_ID/access_tokens',
        output: '{"token":"ghs_xxxxxxxxxxxx","expires_at":"2024-03-15T11:00:00Z"}',
        explain: '先用私钥签 JWT 证明自己是这个 App，再用 JWT 换 installation token（有效期 1 小时）。token 只对特定安装有效，用完自动过期，泄露风险极低'
      },
      {
        title: '用 installation token 操作仓库',
        cmd: 'curl -H "Authorization: Bearer ghs_xxxxx" https://api.github.com/repos/me/proj/issues',
        output: '[{"number":1,"title":"First issue"}]',
        explain: 'installation token 的行为和 PAT 类似，但权限严格受限于 App 安装时授予的权限集。如果 App 没有 contents:write，就无法 push 代码'
      }
    ],
    diagnosis: [
      {
        symptom: '用 JWT 调 /app/installations 报 "Not a valid JWT"',
        cause: 'JWT 签发时间 iat 早于服务器时钟太多（clock skew），或 exp - iat 超过 10 分钟',
        fix: '确保 iat 设为当前时间减 60 秒（容忍小幅偏差），exp 不超过 iat + 600 秒。检查服务器 NTP 同步'
      },
      {
        symptom: 'App 安装后看不到某些仓库',
        cause: '安装时选择了 "Only select repositories" 但没有勾选目标仓库',
        fix: '仓库 owner 需要在 Settings → Applications → 找到该 App → Configure → 添加仓库到 "Repository access" 列表'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 GitHub 注册一个 GitHub App，赋予 issues:write 权限，生成私钥并下载安装',
        hint: 'Settings → Developer settings → GitHub Apps → New GitHub App',
        answer: '填写名称、Webhook URL（可选）、选择 Permissions → Issues → Read and write。创建后 Generate a private key 下载 .pem 文件。Install App 到你的仓库'
      },
      {
        level: '挑战',
        task: '实现一个 GitHub App，监听 issue.opened 事件，自动在新 issue 上回复欢迎消息',
        hint: 'Webhook 接收 POST → 验签 → 调 issues/comments API',
        answer: '// webhook handler\napp.post("/webhook", async (req,res) => {\n  const sig = req.headers["x-hub-signature-256"]; // verify HMAC\n  const event = req.body;\n  if (event.action === "opened") {\n    const token = await getInstallationToken(event.installation.id);\n    await fetch(event.issue.comments_url, {\n      method: "POST",\n      headers: { Authorization: `Bearer ${token}` },\n      body: JSON.stringify({ body: "Thanks for reporting! We will look into it." })\n    });\n  }\n  res.sendStatus(200);\n});'
      }
    ]
  },

  "NV2HAXLEN7tskfgyFrbaf": {
    mentalModel: 'GitHub API 是整座 GitHub 大楼的「电话总机」——REST 是分机号直拨某个部门，GraphQL 是接线员帮你一次连通多个部门，两者共享同一套认证和限速体系',
    sections: [
      {
        title: '两套 API 的定位与选型',
        content: '**REST API v3**\n- 端点驱动：每个 URL 对应一个资源操作\n- 适合简单 CRUD、webhook 回调处理\n- 文档全面，SDK 覆盖所有语言\n- Rate limit: 5000 requests/hour (authenticated)\n\n**GraphQL API v4**\n- 查询驱动：客户端决定数据结构\n- 适合复杂聚合查询、减少请求次数\n- 学习曲线较陡，需要了解 schema\n- Rate limit: 5000 points/hour（不同查询消耗不同点数）\n\n选型经验：单资源操作用 REST，多实体关联查询用 GraphQL'
      },
      {
        title: '认证方式全景',
        content: '四种身份类型：\n1. **PAT（Personal Access Token）**：代表某个用户，Classic 全 scope 或 Fine-grained 精控\n2. **OAuth token**：第三方应用代表用户\n3. **GitHub App installation token**：App 自身的短期凭证\n4. **GITHUB_TOKEN（Actions）**：workflow 内置的临时 token，生命周期等于 job\n\n优先级建议：CI 用 GITHUB_TOKEN，自动化服务用 GitHub App，用户交互用 OAuth'
      },
      {
        title: '通用模式：请求头与响应约定',
        content: '所有 API 共用这些约定：\n- `Accept: application/vnd.github+json`：推荐请求头\n- `X-GitHub-Request-Id`：每个请求的唯一追踪 ID，排障必备\n- `X-RateLimit-Remaining`：响应头告诉你剩余额度\n- `ETag` + `If-None-Match`：条件请求，命中缓存不扣 quota\n- `Link` header：REST 分页指示器\n- 304 Not Modified：缓存命中，不计入 rate limit'
      }
    ],
    diagnosis: [
      {
        symptom: '同一个操作 REST 和 GraphQL 返回不同的数据',
        cause: '两套 API 的 schema 演进节奏不同，某些新特性只在 GraphQL 首发（如 Projects V2），老特性只在 REST（如部分 admin 端点）',
        fix: '查阅官方文档确认哪个 API 版本支持你需要的字段。新功能优先 GraphQL，legacy 操作查 REST 文档'
      },
      {
        symptom: '调用 API 频繁触发 secondary rate limit（abuse detection）',
        cause: '短时间内大量并发请求，即使总量未超 5000/h，并发过高也会触发二级限速',
        fix: '串行化请求或使用队列。加入指数退避（收到 403 retry-after 时等待指定秒数）。用 GraphQL 减少请求总数'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '分别用 REST 和 GraphQL 获取同一个仓库的 star 数量，对比两次请求的复杂度',
        hint: 'REST: GET /repos/{owner}/{repo}; GraphQL: repository.stargazerCount',
        answer: '# REST\ncurl -s https://api.github.com/repos/vuejs/core | jq .stargazers_count\n# GraphQL\ngh api graphql -f query=\'{ repository(owner:"vuejs",name:"core") { stargazerCount } }\''
      },
      {
        level: '进阶',
        task: '写一个函数，自动检测当前 token 是哪种类型（PAT/OAuth/App）并根据其能力选择合适的 API',
        hint: '调用 /user 和 /app 端点，看哪个返回 200',
        answer: 'async function detectTokenType(token) {\n  try { await fetch("https://api.github.com/app", { headers: { Authorization: `Bearer ${token}` }}).then(r => { if (r.ok) throw "app"; }); } catch(e) { if (e==="app") return "github-app"; }\n  const r = await fetch("https://api.github.com/user", { headers: { Authorization: `Bearer ${token}` }});\n  const scopes = r.headers.get("x-oauth-scopes") || "";\n  return scopes.includes("repo") ? "pat-full" : "pat-limited";\n}'
      }
    ]
  },

  "ZHplGidvhxEIC3HN8KqRa": {
    mentalModel: 'GitHub Pages 是「零运维托管」——你把静态文件推到特定分支，GitHub 自动帮你起一个 HTTPS 站点，连 nginx 都不用装',
    handsOn: [
      {
        title: '最快启动：从 main 分支的 /docs 目录部署',
        cmd: 'mkdir docs && echo "<h1>Hello Pages</h1>" > docs/index.html && git add docs && git commit -m "docs: init pages" && git push',
        output: '[main abc1234] docs: init pages\nTo github.com:me/site.git\n   a1b2..c3d4 main -> main',
        explain: '推送后到 Settings → Pages → Source 选择 Deploy from branch，Branch 选 main /docs。保存后等 1-2 分钟即可访问 https://username.github.io/repo-name'
      },
      {
        title: '用 GitHub Actions 自定义构建和部署',
        cmd: '# .github/workflows/pages.yml\nname: Deploy Pages\non:\n  push:\n    branches: [main]\njobs:\n  build-deploy:\n    runs-on: ubuntu-latest\n    permissions:\n      pages: write\n      id-token: write\n    environment:\n      name: github-pages\n      url: ${{ steps.deploy.outputs.page_url }}\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci && npm run build\n      - uses: actions/configure-pages@v4\n      - uses: actions/upload-pages-artifact@v3\n        with:\n          path: dist\n      - id: deploy\n        uses: actions/deploy-pages@v4',
        output: 'Deploying to github-pages environment...\nPage URL: https://me.github.io/my-site',
        explain: '这是新版推荐方式。configure-pages 设置环境，upload-pages-artifact 打包 dist 目录，deploy-pages 执行部署。permissions 必须包含 pages:write 和 id-token:write'
      },
      {
        title: '配置自定义域名',
        cmd: 'echo "blog.example.com" > docs/CNAME && git add docs/CNAME && git commit -m "pages: custom domain" && git push',
        output: 'Deploying... site available at https://blog.example.com',
        explain: 'CNAME 文件告诉 GitHub Pages 应该用什么域名响应。同时需要在 DNS 供应商处添加 CNAME 记录指向 username.github.io。HTTPS 由 GitHub 通过 Let\'s Encrypt 自动配置'
      }
    ],
    diagnosis: [
      {
        symptom: 'Pages 部署后访问返回 404',
        cause: '没有 index.html 在根目录，或者 build 输出目录与配置的 source 不一致',
        fix: '确认 dist/ 目录下确实有 index.html（不是 Index.html，Linux 大小写敏感）。如果用 Actions 部署，检查 upload-pages-artifact 的 path 是否正确'
      },
      {
        symptom: '自定义域名显示 "There isn\'t a GitHub Pages site here"',
        cause: 'DNS 记录还没生效（最多等 24 小时），或者 CNAME 记录和仓库中 CNAME 文件内容不匹配',
        fix: '用 dig blog.example.com CNAME 检查 DNS 解析。确认指向 username.github.io。在 Pages settings 中输入域名并勾选 Enforce HTTPS'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '将一个简单的 HTML 文件通过 GitHub Pages 部署到公网可访问',
        hint: '创建 gh-pages 分支或在 main/docs 下放 index.html，开启 Pages',
        answer: 'echo "<html><body><h1>My Page</h1></body></html>" > index.html && git add index.html && git commit -m "init pages" && git push。然后在 Settings → Pages → Source 选择 main branch / root'
      },
      {
        level: '进阶',
        task: '用 GitHub Actions 构建一个 Vite 项目并部署到 GitHub Pages，配置 base path',
        hint: 'Vite 的 vite.config.ts 中设 base: "/repo-name/"',
        answer: 'vite.config.ts: export default { base: "/my-repo/" }。workflow 中 build 步骤后 upload dist/ 作为 pages artifact。base path 保证静态资源引用正确'
      }
    ]
  },

  "iWn3zDMOfLLjSp6f1jQoE": {
    mentalModel: 'Copilot 是你的「编程副驾驶」——它在编辑器里实时猜测你的意图并补全代码，像一个看过几十亿行代码的实习生，需要你把关确认',
    sections: [
      {
        title: 'Copilot 的核心能力矩阵',
        content: '1. **Inline Completion**（Tab 键补全）：根据上下文预测接下来 1-20 行代码\n2. **Chat**（Ctrl+Shift+I）：自然语言问答，理解整个文件上下文\n3. **@workspace**：跨文件理解项目结构，回答架构级问题\n4. **Fix**（/fix）：诊断报错并提出修复建议\n5. **Tests**（/tests）：为选中代码自动生成单元测试\n6. **Explain**（/explain）：解释复杂代码的逻辑\n7. **Commit Message**：根据 diff 自动生成有意义的提交消息'
      },
      {
        title: '高效使用的提示工程技巧',
        content: '让 Copilot 写出更好代码的方法：\n- **先写注释再写代码**：// Calculate Fibonacci sequence iteratively → Tab → 高质量实现\n- **命名要精确**：fetchUserOrdersFromAPI() 比 getData() 给出更多上下文\n- **保持文件聚焦**：一个文件只做一件事，Copilot 更容易理解意图\n- **提供示例**：输入输出的例子是最好的 prompt\n- **用 Chat 迭代**：不满意就追问 "Can you make this more efficient?" 或 "Add error handling"'
      },
      {
        title: 'Copilot 的局限与风险意识',
        content: '必须知道的坑：\n- **幻觉**：会编造不存在的库 API，务必查证文档\n- **过时知识**：训练数据有截止日期，最新框架版本可能不知道\n- **License 风险**：可能逐字复制 GPL/LGPL 代码片段（企业版有 filter 可开关）\n- **安全漏洞**：生成的代码可能含 SQL 注入、硬编码密钥等，不能盲信\n- **隐私**：免费版会把代码片段发送到 OpenAI，敏感项目需用 Business 版关闭训练'
      }
    ],
    diagnosis: [
      {
        symptom: 'Copilot 突然不再给出补全建议（Tab 无反应）',
        cause: '网络连接到 GitHub Copilot 服务超时，或者订阅过期，或者当前文件类型被禁用',
        fix: 'VS Code 底部状态栏点击 Copilot 图标检查状态。Settings → Extensions → Copilot 确认 Enabled languages 包含当前语言。检查代理设置'
      },
      {
        symptom: 'Copilot 生成的代码引入了项目中不存在的函数或模块',
        cause: '模型幻觉——它基于训练数据统计规律生成，不会实时验证你的项目实际有什么',
        fix: '每条建议都要人工审核。在 Chat 中附加 "@workspace 这个项目里有 XXX 函数吗？" 来交叉验证。TypeScript 的类型检查是第一道防线'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '使用 Copilot 为一个 parseCSV(text: string): Record<string,string>[] 函数生成实现',
        hint: '先写函数签名和 JSDoc 注释，然后让 Copilot 补全',
        answer: '/** Parse CSV text into array of objects using first row as headers */\nfunction parseCSV(text: string): Record<string,string>[] { ← Tab 补全 → 通常生成 split(\\n) + reduce 的实现。审核后补上 edge case 处理'
      },
      {
        level: '进阶',
        task: '用 Copilot Chat 的 @workspace 功能分析你的项目架构并生成一份简要说明文档',
        hint: '在 Chat 中输入 @workspace Describe the architecture of this project',
        answer: '@workspace Describe the architecture of this project including main modules, data flow, and key design patterns. Focus on how the frontend communicates with the backend.'
      }
    ]
  },

  "M2_hBvXou7cCNqsMnexCt": {
    mentalModel: 'Gist 是 GitHub 的「便签本」——每个便签是一个迷你 git 仓库，可以版本追踪、分享链接、甚至嵌入到其他网页',
    handsOn: [
      {
        title: '用 gh cli 创建一个多文件 Gist',
        cmd: 'gh gist create script.py notes.md --public --desc "Data processing utilities"',
        output: 'https://gist.github.com/abc123def456',
        explain: 'Gist 本质是个 git repo。--public 让任何人可以通过 URL 访问（不会被搜索引擎收录）。可以同时传多个文件，每个文件成为 Gist 中的一个条目'
      },
      {
        title: '克隆 Gist 到本地并编辑',
        cmd: 'gh gist clone abc123def456 && cd abc123def456 && vim script.py && git commit -am "fix: handle empty input" && git push',
        output: 'Cloning into abc123def456...\nTo https://gist.github.com/abc123def456.git\n   a1b2..c3d4 master -> master',
        explain: '克隆后的 Gist 就是一个普通 git 仓库（origin 指向 gist.github.com）。可以正常 commit/push/log。这让代码片段有了完整的版本历史'
      },
      {
        title: '列出自己的所有 Gists 并搜索',
        cmd: 'gh gist list --limit 20',
        output: 'ID              DESCRIPTION                    FILES  VISIBILITY  CREATED\nabc123def456    Data processing utilities      2      public      2 days ago\nxyz789ghi012    SSH config template            1      secret      1 week ago',
        explain: 'secret Gist 只能通过直链访问（知道 URL 的人都能看到），不是真正的加密。重要内容不要用 secret Gist 存密码'
      }
    ],
    diagnosis: [
      {
        symptom: 'Gist 中的图片无法在 Markdown 预览中显示',
        cause: 'Gist 不支持直接上传图片附件（不同于 Issue/PR 评论），相对路径的图片找不到',
        fix: '图片需要先上传到图床（如 imgur），然后用绝对 URL 引用。或者把图片放到一个 GitHub 仓库中 raw.githubusercontent.com 链接引用'
      },
      {
        symptom: '别人可以看到我的 secret Gist',
        cause: 'Secret Gist 只是不被搜索引擎索引和不在 profile 显示，URL 泄露就等于公开',
        fix: '不要在 secret Gist 中存放敏感信息。如需私密分享，用 Private Gist（需 GitHub Pro）或直接用 Private 仓库'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个包含你常用 shell alias 配置的 Gist 并分享给同事',
        hint: 'gh gist create ~/.bash_aliases --public',
        answer: 'gh gist create aliases.sh --public --desc "My shell aliases"。分享输出的 URL 即可。同事可以 gh gist clone <id> 拉到本地'
      },
      {
        level: '进阶',
        task: '如何用 Gist 托管一个可在线运行的 Python 脚本，让人一键 fork 修改？',
        hint: '利用 Gist 的 git 特性和 bl.ocks.org 或直接 embed',
        answer: '创建 Gist 包含 main.py + requirements.txt + README.md。分享 URL。他人可 gh gist clone 后自行修改推送为自己的 Gist（fork 效果）。也可用 gist.github.com/<id>/raw 引用脚本内容'
      }
    ]
  },

  "4slyjdk2Eeg5VYY6gCDG6": {
    mentalModel: 'GitHub Models 是「云端 AI 试车场」——免费调用主流 LLM（GPT-4o、Claude、Llama 等）的 API，不需要自己注册各家的账号和绑信用卡',
    sections: [
      {
        title: '核心定位与使用方式',
        content: 'GitHub Models 解决开发者试用 AI 模型的痛点：\n- **统一入口**：通过 GitHub Marketplace 浏览和测试多种模型\n- **OpenAI 兼容 API**：endpoint 是 models.inference.ai.azure.com，用 GITHUB_TOKEN 认证\n- **Playground**：在 GitHub 网站上直接和模型对话测试 prompt\n- **免费额度**：免费账户有每月请求限制，够原型开发用\n\n适合在决定付费提供商之前先快速验证 prompt 和应用逻辑'
      },
      {
        title: '在代码中调用 Models API',
        content: '```typescript\nimport { AzureOpenAI } from "openai";\nconst client = new AzureOpenAI({\n  baseURL: "https://models.inference.ai.azure.com",\n  apiKey: process.env.GITHUB_TOKEN,\n  apiVersion: "2024-05-01-preview",\n});\nconst resp = await client.chat.completions.create({\n  model: "gpt-4o-mini",\n  messages: [{ role: "user", content: "Explain git rebase" }],\n});\nconsole.log(resp.choices[0].message.content);\n```\n\n注意：Models API 不适合生产环境大规模调用，正式产品应切换到 Azure OpenAI / Anthropic 官方 API'
      },
      {
        title: '模型对比与选择指南',
        content: '常见模型特点：\n- **GPT-4o / GPT-4o-mini**：通用能力强，速度快，适合大部分场景\n- **Claude 3.5 Sonnet**：长上下文好，代码能力强，安全性高\n- **Meta Llama 3**：开源模型，可自部署，适合合规要求严格的场景\n- **Mistral Large**：欧洲厂商，GDPR 友好\n\n选择策略：先用 Playground 用同一组测试 prompt 跑几个候选模型，对比效果和延迟再做决定'
      }
    ],
    diagnosis: [
      {
        symptom: '调用 Models API 返回 429 Too Many Requests',
        cause: '超出免费 tier 的 rate limit（通常每分钟几十个请求）',
        fix: '加入指数退避重试。如果需要更高额度，考虑升级到付费 provider。开发测试阶段可以 mock 响应减少实际 API 调用'
      },
      {
        symptom: '模型返回的内容和直接在 OpenAI 官网的不同',
        cause: 'GitHub Models 可能部署在不同硬件上，量化级别不同会导致微小差异。temperature=0 时通常一致',
        fix: '设定 temperature=0 保证可复现性。如果差异大到影响功能，改用模型官方 API 做对照实验'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 GitHub 的 Models Playground 中测试三个不同模型对同一个编程问题的回答',
        hint: '进入 github.com/marketplace/models 选择模型进入 playground',
        answer: '选择一个 prompt 如 "Implement binary search in Python with docstring"，分别在 GPT-4o、Claude、Llama 上运行，比较代码质量、注释完整性和边界处理'
      },
      {
        level: '进阶',
        task: '用 GitHub Models API 构建一个简单的 CLI 翻译工具',
        hint: 'process.argv 获取输入文本，调用 chat completions API 传入 system prompt 设定翻译方向',
        answer: 'import { AzureOpenAI } from "openai";\nconst c = new AzureOpenAI({ baseURL: "https://models.inference.ai.azure.com", apiKey: process.env.GITHUB_TOKEN });\nconst text = process.argv.slice(2).join(" ");\nconst r = await c.chat.completions.create({ model: "gpt-4o-mini", messages: [{role:"system",content:"Translate to Chinese. Output only translation."},{role:"user",content:text}] });\nconsole.log(r.choices[0].message.content);'
      }
    ]
  },

  "rqPCHh25xX_ROMr-ULpaw": {
    mentalModel: 'GitHub Packages 是「自带仓库货架」——npm 包、Docker 镜像、Maven jar 都能存在 GitHub 仓库旁边，代码和制品住同一栋楼',
    handsOn: [
      {
        title: '发布 npm 包到 GitHub Packages',
        cmd: '# package.json 中添加\n"publishConfig": { "registry": "https://npm.pkg.github.com", "@myorg:registry": "https://npm.pkg.github.com" }\n# 然后\nnpm publish',
        output: '+ @myorg/my-utils@1.0.0\nPublished to https://npm.pkg.github.com',
        explain: '包名必须以 scope（@myorg）开头，scope 必须和你的 GitHub 用户名或组织名一致。publishConfig 告诉 npm 发到 GitHub 而非 npmjs.com'
      },
      {
        title: '在其他项目中安装 GitHub Packages 的包',
        cmd: '# .npmrc 文件中添加\n@myorg:registry=https://npm.pkg.github.com\n# 然后正常安装\nnpm install @myorg/my-utils',
        output: 'added 1 package from https://npm.pkg.github.com/@myorg/my-utils',
        explain: '.npmrc 告诉 npm 凡是 @myorg scope 的包都去 GitHub Packages 找。认证通过 ~/.npmrc 中 //npm.pkg.github.com/:_authToken=${GH_TOKEN} 配置'
      },
      {
        title: '推送 Docker 镜像到 GitHub Container Registry',
        cmd: 'echo $GH_TOKEN | docker login ghcr.io -u USERNAME --password-stdin && docker build -t ghcr.io/myorg/myapp:v1.2 . && docker push ghcr.io/myorg/myapp:v1.2',
        output: 'The push refers to repository [ghcr.io/myorg/myapp]\nv1.2: digest: sha256:abc123 size: 1234',
        explain: 'ghcr.io 是 GitHub Container Registry 的地址。镜像名格式 ghcr.io/{owner}/{image}:{tag}。推送后可以关联到仓库，在 Packages tab 中统一管理'
      }
    ],
    diagnosis: [
      {
        symptom: 'npm publish 报 "401 Unauthorized" 或 "403 Permission denied"',
        cause: '缺少正确的 scope registry 配置，或 token 没有 write:packages 权限',
        fix: '确认 package.json 中有 publishConfig.registry 指向 npm.pkg.github.com。检查 token scope 包含 write:packages。~/.npmrc 中 _authToken 要正确配置'
      },
      {
        symptom: 'Docker push 报 "denied: requested access to the resource is denied"',
        cause: '没有先 docker login ghcr.io，或者 token 没有 package 写权限',
        fix: '用 PAT（含 write:packages scope）执行 docker login。确认镜像名中的 owner 和你的 GitHub 用户名/org 名一致'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '发布一个简单的工具函数 npm 包到 GitHub Packages',
        hint: 'package.json 加 scope + publishConfig，npm publish',
        answer: '1) npm init --scope=@yourusername；2) 在 package.json 加 publishConfig:{registry:"https://npm.pkg.github.com"}；3) npm publish。需要先在 npm whoami --registry=https://npm.pkg.github.com 登录'
      },
      {
        level: '进阶',
        task: '在 GitHub Actions CI 中自动构建 Docker 镜像并推送到 GHCR，带语义化版本标签',
        hint: 'docker/build-push-action + docker/metadata-action',
        answer: 'steps:\n- uses: docker/login-action@v3\n  with:\n    registry: ghcr.io\n    username: ${{ github.actor }}\n    password: ${{ secrets.GITHUB_TOKEN }}\n- uses: docker/metadata-action@v5\n  id: meta\n  with:\n    images: ghcr.io/${{ github.repository }}\n    tags: type=semver,pattern={{version}}\n- uses: docker/build-push-action@v5\n  with:\n    push: true\n    tags: ${{ steps.meta.outputs.tags }}'
      }
    ]
  },

  "R20LXLLEzNn-SpyFDMRXj": {
    mentalModel: 'GitHub Marketplace 是「DevTools 应用商店」——Actions、Apps、Models 三大类扩展集中上架，开发者在这里发现和安装增强工具',
    sections: [
      {
        title: 'Marketplace 的三大品类',
        content: '1. **GitHub Actions**（免费/付费）\n   - CI/CD 可复用组件\n   - 例：docker/build-push-action、aws-actions/configure-aws-credentials\n   - 大部分免费，少数按使用量收费\n\n2. **GitHub Apps**（免费/Freemium/付费）\n   - 深度集成的第三方服务\n   - 例：Dependabot（免费）、Codecov（Freemium）、CircleCI（付费）\n   - 安装到 org 或 repo 级别\n\n3. **GitHub Models**（免费额度）\n   - AI 模型推理服务\n   - 例：GPT-4o、Claude 3.5、Llama 3\n   - 按 token 用量计费，免费 tier 有限额'
      },
      {
        title: '如何挑选合适的 Marketplace 产品',
        content: '评估清单：\n- ✅ 星标数和安装量（社会证明）\n- ✅ 最后更新时间（活跃度）\n- ✅ 开源仓库还是闭源（可审计性）\n- ✅ 定价模型透明还是 "Contact sales"（小团队避开后者）\n- ✅ 数据安全条款（代码是否离开 GitHub 基础设施）\n- ✅ 是否有 free tier 可以先试用\n- ❌ 避免安装量<100 且无团队背书的 App'
      },
      {
        title: '计费与管理',
        content: '付费 Marketplace 产品的账单：\n- 个人：绑信用卡，按月付\n- 组织：从 org billing 统一出账\n- Free trial：通常 14-30 天全功能试用\n\n管理页面：\n- 个人：Settings → Marketplace apps → 查看已安装的、取消订阅\n- 组织：Org settings → Billing → Marketplace → 控制哪些 App 成员可以安装\n- 企业管理员可以全局禁止安装未经批准的 App'
      }
    ],
    diagnosis: [
      {
        symptom: '安装了某 Marketplace App 但它没有出现在仓库的 Actions/Integrations 面板',
        cause: '安装时没有选择目标仓库，或者 App 需要额外的 OAuth 授权步骤',
        fix: '到 Org/User settings → Applications → 找到该 App → Configure → 确认仓库访问范围。某些 App 还需点击 Authorize 按钮完成 OAuth 流程'
      },
      {
        symptom: 'Marketplace 订阅费用突然增加',
        cause: 'App 采用了 usage-based 计费（如每 GB artifact storage），项目增长导致超出免费额度',
        fix: '在 Billing 页面查看详细用量报告。设置 Spending limit 防止超额。考虑降级到 free tier 或寻找替代方案'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '浏览 Marketplace 找到一个免费的代码质量检查 App，安装到你的一个仓库',
        hint: '搜索 "code quality" 或 "linter" 相关 App',
        answer: '推荐 CodeFactor 或 SonarCloud。在 Marketplace 找到后点 Install → 选择仓库 → 确认。通常需要在仓库根目录放配置文件（如 sonar-project.properties）'
      },
      {
        level: '进阶',
        task: '评估三个同类 Marketplace App（如 CI/CD 增强类）并写一份对比报告',
        hint: '从定价、功能、安全、社区四个维度打分',
        answer: '制作对比表：\n| 维度 | App A | App B | App C |\n|------|-------|-------|-------|\n| 价格 | $0/free tier | $9/seat | Contact |\n| 开源 | Yes | No | Yes |\n| Stars | 2.3k | 8.1k | 450 |\n| 最近更新 | 3 days ago | 2 months | 1 year |\n综合得分后选型'
      }
    ]
  },

  "NdfwgwMOewiyEAFyC2l7U": {
    mentalModel: 'Codespaces 是「浏览器里的全能开发机」——30 秒起一台配好环境的 VS Code，关机即销毁，适合快速修 bug 和协作调试',
    handsOn: [
      {
        title: '配置 devcontainer 定制 Codespace 环境',
        cmd: '# .devcontainer/devcontainer.json\n{\n  "name": "Node Dev",\n  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",\n  "features": {\n    "ghcr.io/devcontainers/features/docker-in-docker:2": {}\n  },\n  "postCreateCommand": "npm ci",\n  "forwardPorts": [3000],\n  "customizations": {\n    "vscode": { "extensions": ["dbaeumer.vscode-eslint"] }\n  }\n}',
        output: 'Codespace 启动时自动执行 npm ci 并安装 ESLint 插件',
        explain: 'devcontainer.json 是 Codespace 的灵魂。image 定义基础系统，features 叠加能力（Docker、Python 等），postCreateCommand 自动装依赖，forwardPorts 暴露服务端口'
      },
      {
        title: '用 gh cli 管理 Codespace 生命周期',
        cmd: 'gh codespace create --repo me/proj --machine premiumLinux && gh codespace list && gh codespace ssh --codespace me-proj-abc123',
        output: 'Created codespace me-proj-abc123\nNAME              REPOSITORY  BRANCH  STATE\nme-proj-abc123    me/proj     main    Available\nConnected to codespace me-proj-abc123\n$',
        explain: 'create 启动容器，list 查看活跃实例，ssh 建立终端连接。premiumLinux 是 4 核 8GB 机型（默认 2 核 4GB）。停止的 Codespace 保留 30 天后自动删除'
      },
      {
        title: '在 Codespace 中开发、调试并转发端口',
        cmd: '# 在 Codespace 的 VS Code 终端中\nnpm run dev\n# 端口自动转发，底部 Ports 面板可见\n# 或者显式：\ngh codespace ports --codespace me-proj-abc123',
        output: 'Forwarded ports:\n3000 -> https://me-proj-abc123-3000.app.github.dev (Public)',
        explain: '每个转发的端口都分配一个唯一子域名。默认可见性 Private（需要 GitHub 登录才能访问），可改为 Public 用于演示。浏览器里直接打开该 URL 看到 dev server'
      }
    ],
    diagnosis: [
      {
        symptom: 'Codespace 启动卡在 "Creating codespace..." 超过 5 分钟',
        cause: 'postCreateCommand 执行太久（如在大型 monorepo 中 npm install），或者 image 特别大',
        fix: '优化 postCreateCommand：只安装必要依赖。考虑用 prebuilds（预构建 Codespace 模板）加速启动。GitHub → Settings → Codespaces → Prebuilds 配置'
      },
      {
        symptom: 'Codespace 中端口转发了但外部访问 404',
        cause: '端口可见性设为 Private 但你没有在浏览器中登录 GitHub，或者 devcontainer 中 forwardPorts 没声明该端口',
        fix: '在 VS Code Ports 面板中将端口可见性改为 Public（需 repo 权限允许）。确保 devcontainer.json 的 forwardPorts 包含对应端口号'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为你的一个项目创建 devcontainer.json 并启动一个 Codespace',
        hint: 'VS Code 命令面板 → "Codespaces: Create codespace"',
        answer: '创建 .devcontainer/devcontainer.json，填写 name/image/postCreateCommand/forwardPorts。commit 推送后，在 github.com 的项目页面点 Code → Codespaces → Create codespace on main'
      },
      {
        level: '挑战',
        task: '配置 Codespaces prebuilds 让你的团队启动 Codespace 时间从 3 分钟缩短到 30 秒',
        hint: 'GitHub Settings → Codespaces → Prebuilds → 选 region 和触发条件',
        answer: '在仓库 Settings → Codespaces → Prebuilds 中：1) 选择 target branches（main, develop）；2) 选择 regions（按团队所在地选 2-3 个）；3) 触发条件选 "On push to matching branches"。Prebuild 会定期预热环境，新建 Codespace 直接从快照恢复'
      }
    ]
  },

  "pFyMiyNQ16-kP7jKaKKEU": {
    mentalModel: 'GitHub Education 是「学术界的免费 VIP 通道」——学生和教师可以获得 Pro 账户、Copilot 免费订阅和一堆开发者福利',
    sections: [
      {
        title: '学生与教师的权益对比',
        content: '**Student Developer Pack（学生）**\n- GitHub Pro 免费（通常 $4/月）\n- GitHub Copilot 免费（通常 $10/月）\n- GitHub Codespaces 额外额度\n- 合作伙伴优惠（DigitalOcean $200 credit、Namecheap 免费域名等）\n\n**Teacher Toolbox（教师）**\n- GitHub Pro 免费\n- GitHub Classroom 完整功能\n- 可批量分发作业和评分\n- GitHub Campus Program 接入（学校级别）\n\n共同要求：必须用学校 .edu 邮箱验证身份'
      },
      {
        title: '申请流程与注意事项',
        content: '申请步骤：\n1. 访问 education.github.com\n2. 用 GitHub 账号登录\n3. 上传学生证/在读证明（需要显示姓名、学校、日期）\n4. 绑定学校 .edu 邮箱\n5. 等待审核（通常 24-72 小时，高峰可能 2 周）\n\n常见问题：\n- 照片模糊或过期会被拒绝，重新上传清晰版\n- 非 .edu 邮箱的学校需要提供额外证明\n- 毕业后权益会到期，需要提前转为个人付费'
      },
      {
        title: '教育版与免费版的差别场景',
        content: '| 场景 | Free | Education |\n|------|------|----------|\n| 私有仓库协作者 | 无限 | 无限 |\n| GitHub Actions 分钟/月 | 2000 | 3000+ |\n| Copilot | $10/月 | 免费 |\n| Codespaces 核时/月 | 120 | 180+ |\n| Packages 存储 | 500MB | 2GB |\n| GitHub Pages | 公开仓库 | 任意仓库 |\n\n教学项目中强烈建议申请，可以解锁很多实用功能'
      }
    ],
    diagnosis: [
      {
        symptom: 'Education 申请被拒 "Unable to verify academic status"',
        cause: '上传的学生证不含足够信息（缺日期或校名），或邮箱域名不在 GitHub 认可的学术机构列表中',
        fix: '重新上传清晰的、带有本学期日期的在读证明或课程注册单。如果学校不在列表中，可以联系 GitHub Support 提供学校官网链接申请加入白名单'
      },
      {
        symptom: 'Copilot 仍然显示付费提示',
        cause: 'Education 权益激活后需要在 Copilot 设置中单独启用免费使用权',
        fix: 'Settings → Copilot → 应该会显示 "Your Copilot subscription is sponsored by GitHub Education"。如果没显示，退出重登或清除浏览器缓存后再看'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '检查你是否符合 GitHub Education 的申请资格，并准备所需材料',
        hint: '需要有效的学校邮箱和在读证明',
        answer: '确认：1) 有 .edu 或学校官方域名邮箱；2) 能拿到带日期的学生证扫描件或教务处在读证明；3) GitHub 账号已绑定该邮箱。三者具备就可以提交 education.github.com/discount_requests/application'
      },
      {
        level: '进阶',
        task: '如果你是教师，设计一个使用 GitHub Classroom 布置课程作业的完整流程',
        hint: 'classroom.github.com → 创建 assignment → 分发邀请链接',
        answer: '1) classroom.github.com 创建 Organization；2) 创建 Assignment（Individual 或 Group）；3) 选择 starter repo 模板；4) 设置 deadline 和 autograding；5) 分享邀请链接给学生；6) 学生接受后各自获得私有仓库；7) 教师通过 dashboard 批阅和评分'
      }
    ]
  },

  "f2PG4t6iVtfIH8BVe5H7f": {
    mentalModel: 'GitHub Security 是给仓库装的「三道防线」——Dependabot 扫依赖漏洞、Code Scanning 查代码缺陷、Secret Scanning 抓泄漏密钥',
    handsOn: [
      {
        title: '启用 Dependabot 自动修复依赖漏洞',
        cmd: '# .github/dependabot.yml\nversion: 2\nupdates:\n  - package-ecosystem: "npm"\n    directory: "/"\n    schedule:\n      interval: "weekly"\n    open-pull-requests-limit: 10\n    labels:\n      - "dependencies"',
        output: 'Dependabot creates PR: "Bump lodash from 4.17.20 to 4.17.21"',
        explain: '每周扫描 package-lock.json 中的依赖，发现 CVE 漏洞时自动开 PR 升级版本。open-pull-requests-limit 防止 PR 洪水。可以 group 多个更新到一个 PR 减少噪音'
      },
      {
        title: '启用 CodeQL 代码扫描',
        cmd: '# .github/workflows/codeql.yml\nname: CodeQL\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  analyze:\n    runs-on: ubuntu-latest\n    permissions:\n      security-events: write\n    steps:\n      - uses: actions/checkout@v4\n      - uses: github/codeql-action/init@v3\n        with:\n          languages: javascript\n      - uses: github/codeql-action/analyze@v3',
        output: 'Security alert: SQL injection vulnerability in src/db.js:42',
        explain: 'CodeQL 用数据库查询的方式分析代码。init 步骤建立代码数据库，analyze 运行规则集。发现的漏洞会以 Security Alert 形式出现在仓库的 Security tab'
      },
      {
        title: '检查 Secret Scanning 捕获的泄漏密钥',
        cmd: 'gh api repos/{owner}/{repo}/secret-scanning/alerts --jq ".[0:3] | .[] | {type: .secret_type, location: .locations[0].details.path}"',
        output: '{"type":"aws_access_key_id","location":{"path":"config/settings.json"}}',
        explain: 'Secret Scanning 默认对所有公开仓库开启。检测到 AWS/Azure/GCP 等平台的密钥会立即告警。Private 仓库需要 GitHub Advanced Security 许可证'
      }
    ],
    diagnosis: [
      {
        symptom: 'Dependabot PR 太多造成 PR 疲劳',
        cause: '每个依赖更新都开独立 PR，项目依赖多的时候每周可能十几个',
        fix: '在 dependabot.yml 中使用 groups 合并同类更新：\ngroups:\n  dev-deps:\n    dependency-type: development\n  minor-patches:\n    update-types: [minor, patch]'
      },
      {
        symptom: 'CodeQL 分析太慢或超出 GitHub Actions 免费额度',
        cause: '大型仓库代码量大，默认全量扫描耗时久。PR 触发每次都完整扫描',
        fix: '用 categories 拆分语言。只在 push to main 时做全量扫描，PR 上做增量。设置 schedule 为每周一次而非每次 push。大项目考虑 SaaS 替代如 SonarCloud'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为你的一个仓库启用 Dependabot 并观察它产生的第一个 PR',
        hint: '创建 .github/dependabot.yml 配置 npm 或 pip ecosystem',
        answer: 'dependabot.yml 内容：version: 2, updates: [{ package-ecosystem: npm, directory: "/", schedule: { interval: daily } }]。Push 后几分钟内如果有过期依赖就会看到 Dependabot 的 PR'
      },
      {
        level: '进阶',
        task: '配置 Push Protection 阻止包含硬编码密钥的 commit 被推送',
        hint: 'Settings → Code security → Secret scanning → Push protection',
        answer: '在仓库 Settings → Code security and analysis 中启用 Secret scanning 和 Push protection。启用后，任何包含已知格式密钥（AWS key、GitHub token 等）的 git push 都会被服务端直接拒绝'
      }
    ]
  },

  "VdoxEWaU56-QCbHFRw649": {
    mentalModel: 'Custom Domains 是给你的 GitHub Pages 站点挂上「自家招牌」——把 username.github.io/repo 换成 blog.example.com，看起来专业得多',
    handsOn: [
      {
        title: '在仓库中配置 CNAME 文件',
        cmd: 'echo "docs.mysite.com" > CNAME && git add CNAME && git commit -m "pages: set custom domain" && git push',
        output: 'Deploying... site will be served from docs.mysite.com',
        explain: 'CNAME 文件告诉 GitHub Pages 服务器：当请求打到 docs.mysite.com 时应该路由到这个仓库。文件位置取决于 Source 配置：branch root 或 docs/ 目录'
      },
      {
        title: '配置 DNS 解析指向 GitHub Pages',
        cmd: '# 在你的 DNS 管理界面添加记录\n# 子域名方式（推荐）：\ndocs.mysite.com  CNAME  username.github.io.\n# Apex 域名方式：\nmysite.com  A  185.199.108.153\nmysite.com  A  185.199.109.153\nmysite.com  A  185.199.110.153\nmysite.com  A  185.199.111.153',
        output: 'DNS 解析生效（可能需要几分钟到几小时）',
        explain: '子域名用 CNAME 最简单。Apex 域名（裸域）必须用 A 记录指向 GitHub 的四个 IP。AAAA 记录（IPv6）也是推荐的。ALIAS/ANAME 是另一种 Apex 解决方案（部分 DNS 商支持）'
      },
      {
        title: '启用 HTTPS 并验证配置',
        cmd: 'dig docs.mysite.com CNAME +short && curl -sI https://docs.mysite.com | head -5',
        output: 'username.github.io.\nHTTP/2 200\nserver: GitHub.com\ncontent-type: text/html; charset=utf-8\nstrict-transport-security: max-age=31536000',
        explain: 'dig 验证 CNAME 解析正确。curl 确认 HTTPS 证书已颁发（GitHub 通过 Let\'s Encrypt 自动签发）。在 Pages Settings 勾选 Enforce HTTPS 强制跳转'
      }
    ],
    diagnosis: [
      {
        symptom: 'Enforce HTTPS 复选框灰色不可勾选',
        cause: 'HTTPS 证书尚未签发完成（Let\'s Encrypt 需要验证域名所有权，最长 24 小时）',
        fix: '等 DNS 完全传播（dig 确认 CNAME 已生效），然后到 Pages Settings 刷新页面。如果超过 24 小时还不行，删除再重新添加自定义域名触发重新签发'
      },
      {
        symptom: '访问自定义域名显示其他网站的页面',
        cause: 'CNAME 指错了目标，或者你的 Pages 仓库被删除了但域名还在别人的 CNAME 列表里（subdomain takeover 风险）',
        fix: '立即删除错误的 CNAME DNS 记录。在自己的 Pages Settings 中移除并重新添加域名。永远不要让 CNAME 悬空指向不存在的 username.github.io'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '如果你有域名，将其配置到 GitHub Pages 并启用 HTTPS 强制跳转',
        hint: 'CNAME 文件 + DNS CNAME 记录 + Pages settings Enforce HTTPS',
        answer: '1) 仓库根目录放 CNAME 文件写入域名；2) DNS 管理添加 CNAME 记录指向 username.github.io；3) Pages Settings 输入域名并勾选 Enforce HTTPS；4) 等待证书签发后验证'
      },
      {
        level: '进阶',
        task: '用 apex 裸域（example.com 而非 www.example.com）部署 GitHub Pages，并正确处理 IPv4 和 IPv6',
        hint: '四条 A 记录 + 四条 AAAA 记录',
        answer: 'A 记录指向 185.199.108-111.153，AAAA 记录指向 2606:50c0:8000::153 等四个 IPv6 地址。同时配置 www 子域的 CNAME 作为备用。在 DNS provider 支持的情况下可用 ALIAS 替代 A 记录获得更好的故障转移'
      }
    ]
  },

  "iwfNYDlAgbA_rpWYcoHCC": {
    mentalModel: 'Static Site Generator 是「内容工厂流水线」——你喂 Markdown 进去，它吐出一堆互相链接的 HTML，不需要手写一行页面模板',
    sections: [
      {
        title: '主流 SSG 技术栈对比',
        content: '| 工具 | 语言 | 构建速度 | 适用场景 |\n|------|------|---------|--------|\n| **Hugo** | Go | 极快（毫秒级） | 博客、文档站 |\n| **Jekyll** | Ruby | 中等 | GitHub Pages 原生支持 |\n| **Next.js (SSG)** | JS/TS | 快（增量构建） | 全栈应用、营销站 |\n| **Astro** | JS/TS | 快 | 内容为主 + 岛屿架构 |\n| **VitePress** | Vue/TS | 快 | 技术文档 |\n| **Docusaurus** | React | 中等 | 开源项目文档 |\n| **Eleventy** | JS | 快 | 轻量博客、个人站 |\n\n选择原则：个人博客 Hugo/Jekyll，项目文档 VitePress/Docusaurus，营销站 Astro/Next.js'
      },
      {
        title: '典型 SSG 项目结构',
        content: '```\nmy-blog/\n├── content/         # Markdown 源文件（front matter + 正文）\n│   ├── posts/\n│   │   └── hello-world.md\n│   └── about.md\n├── layouts/         # 模板（header/footer/sidebar）\n├── static/          # 不变的资源（图片、favicon）\n├── themes/          # 主题（可换）\n├── config.toml      # 站点配置\n└── public/          # 构建输出（部署这个目录）\n```\n\n工作流：写 Markdown → SSG 编译 → 输出纯静态 HTML/CSS/JS → 部署到 CDN/Pages'
      },
      {
        title: 'SSG vs SSR vs CSR 的选择决策',
        content: '**SSG（Static Site Generation）**\n- 构建时生成所有 HTML，部署后直接返回\n- 最快 TTFB，SEO 完美，CDN 友好\n- 缺点：每次内容变更需要重新构建\n- 适合：博客、文档、营销落地页\n\n**SSR（Server-Side Rendering）**\n- 请求时动态生成 HTML\n- 可以个性化，但需要服务器\n- 适合：电商详情页、用户 dashboard\n\n**CSR（Client-Side Rendering）**\n- 只下发空壳 HTML，JS 渲染全部内容\n- 首屏慢，SEO 差\n- 适合：后台管理系统、SPA 应用\n\n现代趋势：SSG + ISR（增量静态再生）结合三者优点，Next.js / Nuxt 都支持'
      }
    ],
    diagnosis: [
      {
        symptom: '构建出来的站点本地预览正常但部署后图片和链接 404',
        cause: 'baseUrl/rootURL 配置不正确，资源引用用了绝对路径但部署在子路径（如 /repo-name/）',
        fix: 'Hugo 设置 baseURL = "https://example.com/repo-name/"；VitePress 设 base: "/repo-name/"。所有资源引用应使用相对路径或通过配置函数动态计算'
      },
      {
        symptom: 'Markdown 中的特殊字符（引号、破折号）被奇怪地转换',
        cause: 'SSG 默认启用了 Smart Typography（smartypants），会自动把 "--" 变成 "—"，直引号变弯引号',
        fix: 'Hugo: [markup.goldmark.extensions] typographer = false。Jekyll: 在 _config.yml 禁用 kramdown smart_quotes。或者接受这种排版美化（英文写作通常是好事）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Hugo 或 VitePress 从零搭建一个个人博客，部署到 GitHub Pages',
        hint: 'hugo new site myblog → 添加主题 → 写几篇文章 → hugo 构建 → 部署 public/',
        answer: 'hugo new site myblog && cd myblog && git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke && echo "theme = ananke" >> hugo.toml && hugo new posts/hello.md && hugo server -D 预览。满意后 hugo 构建，把 public/ 部署到 Pages'
      },
      {
        level: '进阶',
        task: '给现有 SSG 站点添加全文搜索功能（不依赖外部服务）',
        hint: '使用 Pagefind 或 Lunr.js 在构建时生成搜索索引',
        answer: '安装 Pagefind：npx pagefind --site dist。它扫描 HTML 生成索引文件。在前端引入 pagefind.js 和 UI 组件：<script src="/pagefind/pagefind-ui.js"></script>。构建后搜索完全在客户端运行，零后端成本'
      }
    ]
  },

  "XRSVRl6iHncMmgSXoB7Lq": {
    mentalModel: 'Student Developer Pack 是一张「开发者大礼包兑换券」——学生凭校园身份免费领取 GitHub Pro + Copilot + 数十个合作商的工具额度',
    sections: [
      {
        title: 'Pack 内含的主要福利',
        content: '**GitHub 自有权益**\n- GitHub Pro（无限私有仓库协作者）\n- GitHub Copilot 免费\n- GitHub Codespaces 额外额度\n- GitHub Actions 更多分钟数\n\n**合作伙伴福利（精选）**\n- DigitalOcean: $200 credit（云服务器）\n- Namecheap: 一年免费 .me 域名 + SSL\n- JetBrains: 全家桶 IDE 免费许可\n- Canva Pro: 一年免费\n- Microsoft Azure: $100 credit（无需信用卡）\n- Bootstrap Studio: 免费 license\n- Educative: 6 个月免费课程\n\n总价值估算超过 $3000，对学生来说极具性价比'
      },
      {
        title: '激活与使用各个福利',
        content: '激活流程：\n1. 登录 education.github.com/pack\n2. 浏览 Partner Offers 列表\n3. 点击 "Redeem" 或 "Get offer"\n4. 多数跳转到合作方网站，用 GitHub OAuth 登录自动激活\n\n常见坑：\n- JetBrains: 必须在 jetbrains.com 用 edu 邮箱注册，然后关联 GitHub\n- DigitalOcean: credit 有效期 60 天，及时使用\n- Namecheap: 域名续费第二年要付费，注意关闭 auto-renewal 避免意外扣款\n- Azure: $100 credit 12 个月有效，别超限以免绑卡'
      },
      {
        title: '毕业后的过渡策略',
        content: '学生身份到期后（通常 2 年一审）：\n- **GitHub Pro** → 降级为 Free（保留仓库但失去高级功能）\n- **Copilot** → 开始收费 $10/月 或切换到 Codeium/TabNine 免费版\n- **JetBrains** → 续费打折或切到 VS Code\n- **DigitalOcean/Azure** → credit 过期失效，迁移资源或继续付费\n\n建议：毕业前提前规划哪些值得长期付费，哪些可以用开源替代。用 Student Pack 期间多做项目积累作品集'
      }
    ],
    diagnosis: [
      {
        symptom: '某个 Partner Offer 点击 Redeem 后报错 "Not eligible"',
        cause: 'Partners 可能有地区限制、年龄限制或需要先完成 Education 认证的最后一步（如邮箱二次验证）',
        fix: '确认 GitHub Education 状态为 Approved（在 education.github.com 主页可见）。个别 Partner 要求学校邮箱验证——确认 Profile 中 edu 邮箱是 primary'
      },
      {
        symptom: 'JetBrains 免费许可到期后 IDE 被锁',
        cause: 'Educational license 是一年一续，需要每年重新验证学生身份',
        fix: '到期前一个月会发邮件提醒。登录 jetbrains.com/account 点击 Renew。如果学生身份还在有效期内，会自动续期。已经毕业则需购买个人许可或切换 IDE'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '盘点 Student Developer Pack 中你最需要的五个福利并制定使用计划',
        hint: '按学习目标优先级排序',
        answer: '示例：1) Copilot（立刻启用辅助编码）；2) DigitalOcean $200（用来练 Linux/Docker 部署）；3) JetBrains IntelliJ IDEA（学 Java/Kotlin）；4) Namecheap 域名（搭建个人品牌站）；5) Educative 课程（系统补分布式知识）'
      },
      {
        level: '进阶',
        task: '用 Student Pack 中的 DigitalOcean credit + Namecheap 域名部署一个公开的 portfolio 站点',
        hint: 'Droplet 跑 nginx + GitHub Pages 自定义域名',
        answer: '1) DigitalOcean 创建 $6/月 Droplet（Ubuntu）；2) apt install nginx；3) 上传静态站点到 /var/www/html；4) Namecheap 注册域名配置 A 记录指向 Droplet IP；5) Certbot 签发 HTTPS 证书；6) 总成本：credit 可撑 30+ 个月'
      }
    ]
  },

  "Pg6G4fzYb_RUhANeRKlRX": {
    mentalModel: 'GitHub Classroom 是「数字教室的作业收发室」——老师发布任务模板，每个学生自动获得一个私有仓库交作业，自动评分像批改试卷',
    sections: [
      {
        title: 'Classroom 的完整工作流',
        content: '教师视角：\n1. classroom.github.com → Sign up as teacher → 验证学术身份\n2. 创建 Organization（如 CS101-2024-Fall）\n3. 创建 Assignment：\n   - Individual（每人独立仓库）或 Group（小组协作）\n   - 可选 Starter repository 作为代码模板\n   - 设置 deadline 和 visibility（public/private）\n4. 分享 Assignment URL（每个学生的链接独一无二）\n5. Autograding：配置测试用例自动评分\n6. 通过 Dashboard 追踪提交情况\n\n学生视角：\n1. 点击老师给的 URL → Accept assignment\n2. GitHub 自动 fork starter repo 到你的账户下（私有）\n3. Clone 到本地开发 → Push 提交\n4. 每次 push 触发 autograding，可在 Actions 看分数\n5. Deadline 后仓库变为只读（默认）'
      },
      {
        title: 'Autograding 配置详解',
        content: '```yaml\n# .github/classroom/autograding.json\n{\n  "tests": [\n    {\n      "name": "Unit tests pass",\n      "setup": "npm install",\n      "run": "npm test",\n      "input": "",\n      "output": "",\n      "comparison": "included",\n      "timeout": 10,\n      "points": 50\n    },\n    {\n      "name": "Hello World output",\n      "run": "node hello.js",\n      "output": "Hello, World!",\n      "comparison": "exact",\n      "points": 25\n    }\n  ]\n}\n```\n\n支持多种 comparison：exact（完全匹配）、included（包含子串）、regex（正则）。总分自动汇总显示给学生'
      },
      {
        title: '高级用法与最佳实践',
        content: '**Feedback Pull Request**\n- 每个 assignment 自动开一个 PR，教师在上面留评审意见\n- 学生可以看到 inline comments 并改进\n\n**Roster 管理**\n- 导入花名册（CSV），批量邀请学生加入 organization\n- 追踪谁接受了 assignment、谁没开始\n\n**反抄袭**\n- 默认仓库 private，学生互相看不到\n- 配合 MOSS (Stanford) 做相似度检测\n\n**期末项目 Demo**\n- Group assignment 鼓励团队协作\n- 最终演示可以用 GitHub Pages 部署 live demo'
      }
    ],
    diagnosis: [
      {
        symptom: '学生反馈点击 Accept 后没有获得仓库',
        cause: '学生的 GitHub 账户未加入 Classroom 对应的 Organization，或 org 设置了 2FA 强制但学生没启用',
        fix: '教师在 Org People 页确认 Invitation 已发出。学生在邮箱或个人通知中接受 org 邀请。要求学生先在 GitHub Settings → Password and authentication 启用 2FA'
      },
      {
        symptom: 'Autograding 显示 0 分但本地 npm test 是通过的',
        cause: 'Classroom 的运行环境和开发环境差异（Node 版本、PATH、case-sensitive 文件名）',
        fix: '在 starter repo 中添加 .nvmrc 锁定 Node 版本。避免大写文件路径（Windows 不敏感但 Linux CI 敏感）。添加 setup 步骤打印 node -v 和 ls 帮助排查'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '以教师身份创建一个最简单的 Individual Assignment：学生写一个输出 Hello World 的脚本',
        hint: 'classroom.github.com → New Assignment → Individual → 配置 autograding',
        answer: '1) 创建 starter repo 包含空 hello.js；2) 添加 .github/classroom/autograding.json 配置测试："run": "node hello.js", "output": "Hello World"；3) Classroom 创建 Individual Assignment 选这个 starter repo；4) 把生成的 invitation URL 发给学生'
      },
      {
        level: '进阶',
        task: '设计一个包含多道题的编程作业，每道题有独立测试和分值，并配置 Feedback PR',
        hint: 'autograding.json 中 tests 数组 + 开启 feedback pull request',
        answer: 'tests 数组中每题一个对象：{ name: "Q1: FizzBuzz", run: "python q1.py", output: "...", points: 20 }。Assignment 设置中勾选 "Enable feedback pull request"。学生每次 push 都得到 PR 上的自动评审评论，可以持续迭代直到满分'
      }
    ]
  },

  "B1KiSOt2b8t8FYD7Jxw2A": {
    mentalModel: 'Campus Program 是 GitHub 给学校的「团购批发价」——全校教职工和学生批量享受 Enterprise 级别的 GitHub 权益，不用一个个去申请',
    sections: [
      {
        title: 'Campus Program 提供的能力',
        content: '**核心权益（对整个机构）**\n- GitHub Enterprise Cloud 免费（通常 $21/user/月）\n- 全校统一的 Organization 管理\n- SAML SSO 集成校园统一认证\n- 高级安全功能（Advanced Security 部分免费）\n- 专属的技术支持和培训资源\n\n**对学生的加成**\n- 在 Student Pack 基础上进一步放宽 Actions minutes 和 storage\n- 可以访问校内私有的 course materials 仓库\n- 参与校内 hackathon 和 capstone project 的基础设施\n\n**对教师的加成**\n- GitHub Classroom 完整功能\n- 批量管理学生和 grading\n- Curriculum development 资助机会'
      },
      {
        title: '申请与实施流程',
        content: 'Phase 1 - 申请（1-4 周）：\n1. 由院/系/IT 部门负责人提交申请（campus.github.com）\n2. 提供学校官方证明材料（在校生人数、教学计划）\n3. GitHub 审核资质（通常要求 accredited institution）\n4. 签订 participation agreement\n\nPhase 2 - 部署（1-2 个月）：\n1. 配置 SAML SSO 对接校园 IdP（CAS/Shibboleth/Azure AD）\n2. 创建校级 Organization（如 PekingUniversity）\n3. 导入师生账户映射（SCIM 自动 provisioning 或 CSV 批量邀请）\n4. 培训教师使用 Classroom 和企业版功能\n\nPhase 3 - 运营（持续）：\n1. 年度 renewal（重新验证资质）\n2. 收集使用报告和教学案例\n3. 参与 GitHub Campus Experts 计划培养学生大使'
      },
      {
        title: '与其他教育项目的关系',
        content: '```\nCampus Program (校级)\n├── GitHub Enterprise Cloud (全校师生)\n│   ├── SAML SSO\n│   ├── Advanced Security (部分)\n│   └── Organization 管理\n├── GitHub Classroom (教师专用)\n│   ├── Assignment 管理\n│   ├── Autograding\n│   └── Roster 整合\n└── Student Developer Pack (学生个人)\n    ├── GitHub Pro\n    ├── Copilot\n    └── Partner offers\n```\n\n三层互斥又互补：学校级的铺底 + 教师工具 + 学生个人福利，构成完整的教育生态'
      }
    ],
    diagnosis: [
      {
        symptom: '学校申请了 Campus Program 但部分教师没有收到邀请',
        cause: 'SCIM provisioning 遗漏了部分院系，或者教师用私人邮箱注册的 GitHub 账户没在名单中',
        fix: 'IT 部门在 Org People → Invite member 手动邀请遗漏教师。完善 SCIM 规则覆盖所有在职教职工。提醒教师把学校邮箱添加到 GitHub 账户的 Emails 列表'
      },
      {
        symptom: 'SAML SSO 登录后提示 "No access to organization"',
        cause: 'IdP 返回的 attributes 没有正确映射到 GitHub 的用户标识（如 email 字段缺失或格式不对）',
        fix: '检查 IdP SAML response 中的 NameID 和 email attribute。GitHub 要求 NameID 是用户 primary email。调整 IdP claim rules 确保发送正确的持久标识'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '调研你的学校是否已经加入了 GitHub Campus Program',
        hint: '问 IT 部门或在 campus.github.com/partners 搜索',
        answer: '1) 搜索 github.com/campus-program-partners 找你的学校；2) 询问学校图书馆/计算机学院/IT 中心是否在使用；3) 如果没有，可以向系主任推荐并协助发起申请流程'
      },
      {
        level: '进阶',
        task: '如果你是教师，设计一套基于 GitHub Enterprise + Classroom 的学期课程管理方案',
        hint: '涵盖账户管理、内容分发、作业评分、协作项目四个环节',
        answer: '1) IT 用 SCIM 把所有选课学生加入 Course-Org；2) 每周 lecture notes 放在私有 repo 通过 team 分发；3) 编程作业通过 Classroom + autograding 自动评分；4) 期末项目用 Group assignment + Projects board 做 agile 管理；5) 全程在 Discussions 进行 Q&A；6) 期末形成 GitHub portfolio 作为求职素材'
      }
    ]
  },

  "bY6b1GV2XQQ52NOx8gWFj": {
    mentalModel: '版本控制是给文件世界装上了「时间轴+后悔药」——每次保存都是快照，任何时候都能回到过去、对比变化、多人同时编辑不冲突',
    sections: [
      {
        title: '为什么每个人都需要版本控制',
        content: '没有版本控制的噩梦：\n- 「论文_v2_终稿_真的最后一版_老板改的.doc」——文件名地狱\n- 两个人改了同一段代码，合并时才发现冲突爆炸\n- 三个月前还能跑的功能现在坏了，没人知道什么时候改的\n- 想试验一个新想法，又怕搞坏现在的代码不敢动\n\n版本控制解决的四大问题：\n1. **历史记录**：谁在什么时候改了什么，为什么改\n2. **并行工作**：多人同时编辑不相互覆盖\n3. **分支实验**：放心尝试新想法，不行就丢弃\n4. **协作协调**：标准化代码流转和审查流程'
      },
      {
        title: '版本控制的三种形态演变',
        content: '**1. 本地版本控制（1970s）**\n- RCS (Revision Control System)\n- 单个文件，本地备份，补丁式存储\n- 缺点：不支持多人协作\n\n**2. 集中式版本控制（1990s-2000s）**\n- SVN (Subversion), CVS, Perforce\n- 单一中央服务器，所有历史都在上面\n- 优点：权限管控清晰\n- 缺点：单点故障，离线无法工作，分支笨重\n\n**3. 分布式版本控制（2005-）**\n- Git, Mercurial\n- 每个开发者都有完整历史副本\n- 优点：离线工作、分支廉价、无单点故障\n- Git 胜出原因：Linus Torvalds 专为 Linux 内核协作设计，性能和灵活性碾压对手'
      },
      {
        title: 'Git vs 其他版本控制系统',
        content: '| 特性 | Git | SVN | Mercurial | Perforce |\n|------|-----|-----|-----------|----------|\n| 架构 | 分布式 | 集中式 | 分布式 | 集中式 |\n| 分支成本 | O(1) | O(n) 复制 | O(1) | 高 |\n| 二进制文件 | LFS 补充 | 原生支持 | 一般 | 优秀 |\n| 学习曲线 | 陡峭 | 平缓 | 中等 | 中等 |\n| 大仓性能 | 一般 | 一般 | 一般 | 极好 |\n| 行业占比 | ~95% | <3% | <1% | 游戏业 |\n\n何时不用 Git：\n- 超大二进制资产（美术、视频）→ Perforce\n- 极简需求且团队熟悉 SVN → 不必强行切换\n- 但 99% 软件开发场景，Git 是正确答案'
      }
    ],
    diagnosis: [
      {
        symptom: '团队成员抗拒使用 Git，说"SVN 挺好用的啊"',
        cause: 'SVN 的心智模型更接近传统文件系统（check-out/edit/check-in），Git 的 staging/branch/merge 概念跳跃更大',
        fix: '安排 Git workshop，从日常场景切入（撤销修改、多人协作、代码审查）而非命令罗列。强调离线工作和分支优势。可以使用 GUI 工具降低初期门槛（SourceTree、GitHub Desktop）'
      },
      {
        symptom: '新手经常把不该提交的文件（node_modules、.env）放进 Git',
        cause: '不理解 .gitignore 的作用，或者项目没有预置 .gitignore',
        fix: '所有项目第一件事就是添加 .gitignore（用 gitignore.io 按栈生成）。已误提交的文件用 git rm --cached -r node_modules 清出历史。建立 pre-commit hook 拦截敏感文件'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '向一个从未用过版本控制的同事用 2 分钟解释为什么需要 Git',
        hint: '用他熟悉的痛点场景做类比',
        answer: '你有没有遇到过 "文档_最终版_v3_老板修改_真的要发了.doc" 这种文件？Git 就是帮你管住这件事的工具——每次保存都有快照，多人可以同时改不怕冲突，搞砸了随时回到昨天还能跑的版本。就像游戏里的存档点，只不过程序员天天都在存'
      },
      {
        level: '进阶',
        task: '画一张对比图展示集中式（SVN）和分布式（Git）在断网场景下的工作流差异',
        hint: '关注 commit、查看历史、创建分支三个操作的可用性',
        answer: '画图要点：SVN 断网 → 无法 commit / 无法 log / 无法 branch（全部要连服务器）；Git 断网 → 所有操作本地可用（commit、diff、branch、merge），联网后 push 同步。这是分布式架构的根本优势'
      }
    ]
  },

  // === Git Deep Learning Batch 6: Nodes 131-155 ===

  "tVvxC5JQgUb_B8kOqYpD8": {
    mentalModel: 'Git 配置像洋葱一样分层——system（系统）> global（用户）> local（仓库），越内层优先级越高，就像公司制度：部门规则覆盖公司通则',
    handsOn: [
      {
        title: '查看三层配置的差异',
        cmd: 'git config --system user.name 2>/dev/null; echo "---"; git config --global user.name; echo "---"; git config --local user.name 2>/dev/null || echo "(未设置)"',
        output: '---\nAlice\n---\n(未设置)',
        explain: 'system 级需要安装时设置，global 是 ~/.gitconfig，local 是 .git/config。读取顺序从外到内，local 覆盖 global 覆盖 system'
      },
      {
        title: '设置 local 配置覆盖 global',
        cmd: 'cd myproject && git config --local user.name "ProjectBot" && git config user.name',
        output: 'ProjectBot',
        explain: '在此仓库中 user.name 被 local 配置覆盖为 ProjectBot，离开此仓库后 git config user.name 仍然返回 global 的 Alice'
      },
      {
        title: '查看所有配置及来源',
        cmd: 'git config --list --show-origin | head -15',
        output: 'file:/Users/alice/.gitconfig\tuser.name=Alice\nfile:/Users/alice/.gitconfig\tuser.email=alice@example.com\nfile:.git/config\tuser.name=ProjectBot\nfile:.git/config\tcore.repositoryformatversion=0',
        explain: '--show-origin 显示每条配置来自哪个文件，排查"为什么我的配置不生效"时极其有用'
      },
      {
        title: '使用 include 拆分配置文件',
        cmd: 'echo \'[include]\n  path = ~/.gitconfig-work\' >> ~/.gitconfig && cat ~/.gitconfig-work 2>/dev/null || echo \'[user]\n  name = WorkBot\n  email = work@company.com\' > ~/.gitconfig-work',
        output: '[user]\n  name = WorkBot\n  email = work@company.com',
        explain: 'include 机制允许把配置拆成多个文件，比如工作项目自动加载 work 配置，个人项目加载 personal 配置'
      }
    ],
    diagnosis: [
      {
        symptom: 'commit 作者在不同仓库显示不同名字',
        cause: '某些仓库的 .git/config 中设置了 local 级的 user.name/email，覆盖了 global 配置',
        fix: '用 git config --list --show-origin 找到覆盖源，git config --local --unset user.name 移除 local 覆盖'
      },
      {
        symptom: '新克隆的仓库 push 时报错 "Please tell me who you are"',
        cause: '没有设置 global 级的 user.name 和 user.email，而新仓库也没有 local 配置',
        fix: 'git config --global user.name "Your Name" && git config --global user.email "you@example.com"'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '设置 global 邮箱为 personal@mail.com，然后在当前仓库设置 local 邮箱为 work@company.com，验证 git config user.email 输出 work@company.com',
        hint: '分别用 --global 和 --local 参数',
        answer: 'git config --global user.email "personal@mail.com"\ngit config --local user.email "work@company.com"\ngit config user.email  # 输出 work@company.com'
      },
      {
        level: '进阶',
        task: '配置 Git 让某个目录下的所有仓库自动使用工作邮箱（不用逐个设置）',
        hint: '使用 includeIf 和 gitdir 条件包含',
        answer: '在 ~/.gitconfig 中添加：\n[includeIf "gitdir:~/work/"]\n  path = ~/.gitconfig-work\n\n然后在 ~/.gitconfig-work 中设置 work 邮箱'
      }
    ]
  },

  "bXfCUG3h1TIFPgD4WUDph": {
    mentalModel: '分支是指向某个 commit 的可移动书签，不是代码的副本——创建一个分支只是贴了一个新标签，成本几乎为零',
    handsOn: [
      {
        title: '查看所有分支及当前所在分支',
        cmd: 'git branch -a',
        output: '* main\n  develop\n  remotes/origin/feature-x',
        explain: '* 标记当前分支。-a 显示远程跟踪分支。分支本质上只是 refs/heads/ 下的一个文件，内容是 commit SHA'
      },
      {
        title: '创建分支但不切换',
        cmd: 'git branch feature-login && git log --oneline --decorate -3',
        output: 'a3f2c1d (HEAD -> main, feature-login) Add user model\nb8e9f42 Fix typo\nc7d1a05 Initial commit',
        explain: 'feature-login 和 main 指向同一个 commit a3f2c1d。创建分支只是新建了一个指针，没有复制任何文件'
      },
      {
        title: '查看分支的包含关系',
        cmd: 'git branch --contains a3f2c1d',
        output: '  feature-login\n* main',
        explain: '显示哪些分支包含 commit a3f2c1d，帮助理解分支之间的分叉点'
      },
      {
        title: '删除已合并的分支',
        cmd: 'git branch -d feature-login',
        output: 'Deleted branch feature-login (was a3f2c1d).',
        explain: '-d 只允许删除已合并的分支，如果分支有未合并的 commit 会报错，保护你不会丢失工作。强制删除用 -D'
      }
    ],
    diagnosis: [
      {
        symptom: 'git branch -d feature 报错 "branch is not fully merged"',
        cause: '该分支上有 commit 没有被合并到当前分支或上游分支',
        fix: '确认不需要这些 commit 后用 git branch -D feature 强制删除，或者先合并再删除'
      },
      {
        symptom: '创建了分支但忘了切换，直接在 main 上开发了',
        cause: '用了 git branch feature 而不是 git checkout -b feature',
        fix: 'git branch feature 把当前 commit 标记为分支起点，然后 git reset --hard HEAD~N 回退 main，再 git checkout feature 继续开发'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建 feature-auth 分支，列出所有分支，然后删除它（假设没做过修改）',
        hint: 'git branch 可以创建、列出、删除',
        answer: 'git branch feature-auth\ngit branch\ngit branch -d feature-auth'
      },
      {
        level: '进阶',
        task: '查看所有已经合并到 main 的分支，以及所有尚未合并的分支',
        hint: 'git branch --merged 和 --no-merged',
        answer: 'git checkout main\ngit branch --merged    # 已合并\ngit branch --no-merged # 未合并'
      }
    ]
  },

  "PtRo-wGiNAagZ6CykfvMr": {
    mentalModel: 'checkout 是把工作区"换装"成某个分支的样子——移动 HEAD 指针、更新暂存区、替换文件，三步一气呵成',
    handsOn: [
      {
        title: '切换到已有分支',
        cmd: 'git checkout develop',
        output: 'Switched to branch \'develop\'',
        explain: 'HEAD 从 main 移到 develop，工作区文件更新为 develop 分支的版本。如果有未提交的修改且与目标分支冲突，checkout 会被拒绝'
      },
      {
        title: '创建并切换到新分支（一步完成）',
        cmd: 'git checkout -b feature-pay',
        output: 'Switched to a new branch \'feature-pay\'',
        explain: '等价于 git branch feature-pay && git checkout feature-pay。新分支从当前 HEAD 的 commit 开始'
      },
      {
        title: '切换到某个 commit（detached HEAD）',
        cmd: 'git checkout a3f2c1d',
        output: 'Note: switching to \'a3f2c1d\'.\n\nYou are in \'detached HEAD\' state...',
        explain: 'HEAD 不再指向任何分支，而是直接指向一个 commit。此时做的 commit 不属于任何分支，切走后容易丢失'
      },
      {
        title: '用 switch 替代 checkout（Git 2.23+）',
        cmd: 'git switch develop && git switch -c hotfix',
        output: 'Switched to branch \'develop\'\nSwitched to a new branch \'hotfix\'',
        explain: 'git switch 只做分支切换，git restore 只做文件恢复。比 checkout 职责更清晰，避免误操作'
      }
    ],
    diagnosis: [
      {
        symptom: 'checkout 时报错 "Your local changes would be overwritten"',
        cause: '工作区有未提交的修改，且目标分支对同一文件有不同内容',
        fix: '先 git stash 保存修改，checkout 后再 git stash pop；或者先 commit'
      },
      {
        symptom: '在 detached HEAD 上做了几个 commit，切回 main 后找不到它们了',
        cause: 'detached HEAD 的 commit 没有被任何分支引用，切走后变成悬空状态',
        fix: 'git reflog 找到那些 commit 的 SHA，git checkout <sha> 回去，然后 git switch -c rescue-branch 创建分支保存'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '从 main 创建并切换到 feature-ui 分支，修改一个文件，commit，然后切回 main',
        hint: 'checkout -b 创建并切换',
        answer: 'git checkout -b feature-ui\necho "new UI" >> style.css\ngit add style.css && git commit -m "Update UI"\ngit checkout main'
      },
      {
        level: '挑战',
        task: '你在 feature 分支上做了 3 个 commit，现在只想把其中第 2 个 commit 的内容带到 main 分支，怎么做？',
        hint: '不需要切换整个分支，cherry-pick 单个 commit',
        answer: '先在 feature 分支用 git log 找到第 2 个 commit 的 SHA，然后：\ngit checkout main\ngit cherry-pick <sha>'
      }
    ]
  },

  "c_FO6xMixrrMo6iisfsvl": {
    mentalModel: 'git init 是在目录里"种下"一个 .git 隐藏文件夹——这个文件夹就是仓库的全部大脑，记录了所有历史、配置和引用',
    handsOn: [
      {
        title: '初始化新仓库',
        cmd: 'mkdir myapp && cd myapp && git init',
        output: 'Initialized empty Git repository in /Users/alice/myapp/.git/',
        explain: '在当前目录创建 .git 文件夹，包含 objects/（对象数据库）、refs/（引用）、HEAD（当前分支指针）等核心结构'
      },
      {
        title: '查看 .git 目录结构',
        cmd: 'ls -la .git/',
        output: 'HEAD\nconfig\ndescription\nhooks/\ninfo/\nobjects/\nrefs/',
        explain: 'objects/ 存储所有数据（blob/tree/commit），refs/ 存储分支和标签指针，HEAD 指向当前分支'
      },
      {
        title: '初始化裸仓库（用于服务器）',
        cmd: 'git init --bare myapp.git && ls myapp.git/',
        output: 'HEAD\nconfig\ndescription\nhooks/\ninfo/\nobjects/\nrefs/',
        explain: '--bare 创建的仓库没有工作区，只有 .git 的内容。适合作为共享中央仓库，不能在上面直接开发'
      },
      {
        title: '在已有项目中初始化 Git',
        cmd: 'cd existing-project && git init && git add . && git commit -m "Initial commit"',
        output: 'Initialized empty Git repository...\n[master (root-commit) a1b2c3d] Initial commit\n 42 files changed, 1234 insertions(+)',
        explain: '已有项目加 Git 只需三步：init → add → commit。第一次 commit 的 parent 为空，称为 root commit'
      }
    ],
    diagnosis: [
      {
        symptom: '嵌套初始化：项目子目录里又 git init 了，导致 git add 不到文件',
        cause: '子目录里有独立的 .git 目录，父仓库把它当成 submodule 或忽略它',
        fix: '删除子目录的 .git：rm -rf subdir/.git，然后回到父仓库重新 git add'
      },
      {
        symptom: 'git init 后默认分支是 master，想改成 main',
        cause: 'Git 2.28 之前默认分支固定为 master',
        fix: 'git config --global init.defaultBranch main，以后新仓库默认用 main。已有仓库用 git branch -m master main'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个新目录，初始化 Git 仓库，创建一个 README.md 并做第一次 commit',
        hint: 'init → add → commit',
        answer: 'mkdir newproj && cd newproj\ngit init\necho "# New Project" > README.md\ngit add README.md\ngit commit -m "Initial commit"'
      },
      {
        level: '进阶',
        task: '初始化一个裸仓库，然后从本地仓库 clone 它、push 内容进去',
        hint: 'bare 仓库作为远程，用 file:// 协议 clone',
        answer: 'git init --bare /tmp/shared.git\ncd myproject\ngit remote add shared /tmp/shared.git\ngit push shared main'
      }
    ]
  },

  "Gybnekbd1rJKTOf4hJ4Sh": {
    mentalModel: 'fetch 是把远程的"新闻"下载到本地存档，但不改变你正在读的"报纸"——远程分支更新了你本地的远程跟踪引用，但你的工作分支纹丝不动',
    handsOn: [
      {
        title: 'fetch 后查看远程更新',
        cmd: 'git fetch origin && git log --oneline origin/main -3',
        output: 'e4f5a6b (origin/main) New feature from Bob\nc3d4e5f Fix bug\nb2c3d4e Update docs',
        explain: 'fetch 更新了 origin/main（远程跟踪分支），但你的 main 分支指针没有移动。你可以先查看差异再决定是否合并'
      },
      {
        title: '比较本地和远程的差异',
        cmd: 'git log --oneline main..origin/main',
        output: 'e4f5a6b New feature from Bob\nd5e6f7g Another fix from team',
        explain: 'main..origin/main 显示"远程有但本地没有"的 commit，这些就是 fetch 下来但你还没合并的内容'
      },
      {
        title: 'fetch 特定分支',
        cmd: 'git fetch origin develop',
        output: 'From github.com:org/repo\n * branch            develop    -> FETCH_HEAD',
        explain: '只 fetch 一个分支，减少网络传输。FETCH_HEAD 指向刚刚 fetch 回来的 commit'
      },
      {
        title: 'fetch 所有远程和所有标签',
        cmd: 'git fetch --all --tags',
        output: 'Fetching origin\nFetching upstream\nFrom github.com:org/repo\n * [new tag]         v2.0.0     -> v2.0.0',
        explain: '--all 获取所有远程仓库的更新，--tags 拉取所有标签。适合在 release 前同步所有信息'
      }
    ],
    diagnosis: [
      {
        symptom: 'fetch 后 git log 看不到远程的新 commit',
        cause: '看的是本地分支 main，应该看 origin/main 或者用 main..origin/main 比较',
        fix: 'git log origin/main 或 git log main..origin/main --oneline'
      },
      {
        symptom: 'fetch 报 "fatal: couldn\'t find remote ref"',
        cause: '远程分支已被删除或拼写错误',
        fix: 'git remote show origin 查看远程实际存在的分支，git fetch --prune 清理本地已失效的远程跟踪分支'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: 'fetch 远程更新，然后查看远程比你本地多了哪些 commit',
        hint: '用 A..B 语法查看差异',
        answer: 'git fetch origin\ngit log --oneline HEAD..origin/main'
      },
      {
        level: '进阶',
        task: 'fetch 后在不合并的前提下，预览合并会产生哪些冲突',
        hint: '用 merge --no-commit --no-ff 做干跑',
        answer: 'git fetch origin\ngit merge --no-commit --no-ff origin/main\n# 查看冲突后放弃：\ngit merge --abort'
      }
    ]
  },

  "r-u1vTpUyuvsB0revOU0C": {
    mentalModel: '协作者是被仓库主人"发邀请"进入私人仓库的开发者——如同给了他们一把备用钥匙，他们可以直接 push 而不需要走 fork 流程',
    sections: [
      {
        title: '添加协作者的流程',
        content: '在 GitHub 仓库 Settings → Collaborators → Add people，输入用户名或邮箱发送邀请。被邀请者接受后获得 write 权限，可以直接 clone 和 push。权限级别有：Read（只读）、Triage（管理 issue）、Write（推送代码）、Maintain（管理仓库设置但不删除）、Admin（完全控制）'
      },
      {
        title: '协作者 vs Fork 模式',
        content: '协作者模式：直接 push 到主仓库，适合小团队和信任的成员，分支在同一个仓库里管理。\nFork 模式：外部贡献者 fork 自己的副本，通过 PR 贡献代码，适合开源项目和大型组织。协作者直接 push 更高效，Fork 模式更安全隔离'
      },
      {
        title: 'CODEOWNERS 文件',
        content: '在仓库根目录创建 CODEOWNERS 文件，指定特定目录的审核负责人：\n*.js @frontend-team\n/api/ @backend-team\n/docs/ @docs-team\nPR 涉及对应目录时自动请求 review，GitHub 会强制执行审核要求'
      }
    ],
    diagnosis: [
      {
        symptom: '被添加为协作者后 push 仍然报 "permission denied"',
        cause: '还未接受邀请，或本地 SSH key/credential 与 GitHub 账号不匹配',
        fix: '检查邮箱中的邀请链接并接受；确认 git config user.email 与 GitHub 账号邮箱一致；测试 ssh -T git@github.com'
      },
      {
        symptom: '协作者推送了受保护分支被拒绝',
        cause: '分支保护规则禁止直接 push，必须通过 PR',
        fix: '创建新分支推送，然后开 PR。管理员可在 Settings → Branches 调整保护规则'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '描述添加协作者并设置权限级别的步骤',
        hint: 'Settings → Collaborators',
        answer: '1. 进入仓库 Settings → Collaborators\n2. 点击 Add people，搜索用户\n3. 选择权限级别（Read/Write/Maintain/Admin）\n4. 发送邀请，对方在邮箱或 GitHub 通知中接受'
      },
      {
        level: '进阶',
        task: '创建 CODEOWNERS 文件，让前端团队负责 /src/components/ 目录，后端团队负责 /api/ 目录',
        hint: 'CODEOWNERS 放在仓库根目录或 .github/ 目录下',
        answer: '创建 .github/CODEOWNERS：\n/src/components/ @org/frontend-team\n/api/ @org/backend-team\n* @org/leads'
      }
    ]
  },

  "0rHDUbAdXqH9zQW2VfJ8v": {
    mentalModel: '合并策略是解决"两条路汇聚"的算法选择——有的保留完整历史，有的让历史线性整洁，取决于你更看重"真相"还是"清晰"',
    handsOn: [
      {
        title: 'fast-forward 合并（无分叉时）',
        cmd: 'git checkout main && git merge feature',
        output: 'Updating a1b2c3d..d4e5f6g\nFast-forward\n src/app.js | 10 ++++++++++',
        explain: 'main 在 feature 分支期间没有新 commit，所以直接把 main 指针快进到 feature 的位置，不产生合并 commit'
      },
      {
        title: 'no-ff 合并（强制产生合并 commit）',
        cmd: 'git merge --no-ff feature -m "Merge feature into main"',
        output: 'Merge made by the \'ort\' strategy.\n src/auth.js | 25 +++++++++',
        explain: '--no-ff 即使可以 fast-forward 也创建一个合并 commit，保留"这里曾经有分支"的记录，历史图上形成清晰的菱形'
      },
      {
        title: 'squash 合并（压缩为一个 commit）',
        cmd: 'git merge --squash feature && git commit -m "Add auth feature"',
        output: 'Squash commit -- not updating HEAD\n[main a1b2c3d] Add auth feature\n 5 files changed, 120 insertions(+)',
        explain: '把 feature 分支上的所有 commit 压成一个，合并到 main 后历史非常干净。缺点是丢失了分支内部的细粒度历史'
      },
      {
        title: 'rebase 代替 merge（线性历史）',
        cmd: 'git checkout feature && git rebase main && git checkout main && git merge feature',
        output: 'First, rewinding head to replay your work on top of it...\nApplying: Add login form\nApplying: Add validation\nFast-forward',
        explain: '先把 feature 的 commit 变基到 main 顶部，再 fast-forward 合并。结果是线性历史，但改写了 commit SHA'
      }
    ],
    diagnosis: [
      {
        symptom: '合并后历史图杂乱无章，大量交叉线',
        cause: '团队成员同时使用 merge 和 rebase，且没有统一策略',
        fix: '团队约定：feature 分支合并前统一 rebase 到 main 上，合并时用 --no-ff 保留分支记录'
      },
      {
        symptom: 'squash merge 后再次合并同一分支出现冲突',
        cause: 'squash 不保留分支的合并记录，Git 不知道那些 commit 已经合过了',
        fix: 'squash 合并后删除原分支重新创建，或者用 merge --no-ff 代替 squash'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 main 上创建一个 feature 分支，做两次 commit，分别用 fast-forward 和 --no-ff 合并到 main，对比 git log --graph 输出',
        hint: '注意 fast-forward 需要先回退再做 --no-ff',
        answer: 'git checkout -b feat1 && touch a.txt && git add . && git commit -m "1" && touch b.txt && git add . && git commit -m "2"\ngit checkout main && git merge feat1  # fast-forward\ngit reset --hard HEAD~2\ngit checkout main && git merge --no-ff feat1 -m "Merge feat1"'
      },
      {
        level: '挑战',
        task: '解释为什么公共分支（多人共享）不应该 rebase，而私有分支可以',
        hint: '考虑 rebase 对 commit SHA 的影响',
        answer: 'rebase 改写 commit SHA。如果别人已经基于旧 SHA 做了工作，rebase 后他们的历史和你的不一致，merge 时会出现重复 commit。私有分支只有自己用，改写 SHA 不影响他人'
      }
    ]
  },

  "ks1Pip-RM-UWD6zuF2j4n": {
    mentalModel: '分支命名是团队的"文件归档规则"——好的命名让你不看代码就知道这个分支做什么、谁做的、关联什么 ticket',
    sections: [
      {
        title: '常见命名模式',
        content: 'type/description：feature/login, bugfix/header-alignment, hotfix/critical-auth-bug\n\n带 ticket 号：feature/PROJ-123-user-auth, bugfix/PROJ-456-fix-null-pointer\n\n带日期：wip/2024-01-15-migration（适合临时实验）\n\n约定：用小写和连字符（不用下划线或驼峰），描述部分用动词开头（add-, fix-, update-, remove-）'
      },
      {
        title: '类型前缀约定',
        content: 'feature/ — 新功能\nbugfix/ — 修复 bug（非紧急）\nhotfix/ — 紧急修复，通常从 main 分支创建\nrelease/ — 准备发版，只修 bug 不加功能\nrefactor/ — 重构，不改变功能\nchore/ — 构建、CI、依赖更新\nwip/ — Work In Progress，实验性代码\ndocs/ — 仅改文档'
      },
      {
        title: '用 Git 强制分支命名规范',
        content: '在 pre-push 钩子中验证分支名：\n\n#!/bin/bash\nbranch=$(git symbolic-ref --short HEAD)\nif ! echo "$branch" | grep -qE \'^(feature|bugfix|hotfix|release|chore|docs)\\/[a-z0-9\\-]+$\'; then\n  echo "分支名不符合规范: $branch"\n  echo "格式: type/description (如 feature/add-login)"\n  exit 1\nfi'
      }
    ],
    diagnosis: [
      {
        symptom: 'CI 流水线拒绝构建，报"branch name does not match pattern"',
        cause: 'CI 配置要求分支名符合特定正则（如 feature/* 或 hotfix/*），你的分支名不匹配',
        fix: '重命名分支：git branch -m old-name feature/new-name，然后 force push'
      },
      {
        symptom: '分支太多找不到自己的分支',
        cause: '团队没有统一的命名前缀',
        fix: '约定用开发者名作为前缀：feature/alice/login, bugfix/bob/header-fix。用 git branch --list \'feature/alice/*\' 快速过滤'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '给以下场景选择合适的分支名：1) 添加用户注册功能 2) 修复支付页面的金额显示 bug 3) 紧急修复生产环境的登录崩溃',
        hint: '使用 type/description 格式',
        answer: '1) feature/add-user-registration\n2) bugfix/fix-payment-amount-display\n3) hotfix/login-crash-on-production'
      },
      {
        level: '进阶',
        task: '写一个 Git hook 脚本，阻止不符合命名规范的分支被 push',
        hint: '使用 pre-push hook 和正则匹配',
        answer: '在 .git/hooks/pre-push 中写入验证脚本（见上方"用 Git 强制分支命名规范"部分），chmod +x 使其可执行'
      }
    ]
  },

  "D2WIExwfSnkAPIa5O-Hp5": {
    mentalModel: 'Git 文档是项目的"说明书 + 地图 + 日记"——README 告诉新来者怎么开始，CHANGELOG 记录发生了什么，代码注释解释为什么这样做',
    sections: [
      {
        title: 'README.md 核心结构',
        content: '1. 项目简介（一句话说清是什么）\n2. 快速开始（安装 + 运行命令）\n3. 架构图或截图\n4. API 示例\n5. 贡献指南链接\n6. License\n\n关键原则：新人 5 分钟内能跑起来。把最常见操作放在最前面，边缘情况放后面'
      },
      {
        title: 'CONTRIBUTING.md 规范',
        content: '包含：开发环境搭建步骤、代码风格要求、PR 提交流程、commit 消息格式、issue 模板说明。\n\n好的 CONTRIBUTING 能减少 80% 的来回沟通。示例：\n\n## 提交 PR 前\n1. 确保所有测试通过: npm test\n2. 运行 lint: npm run lint\n3. commit 格式: type(scope): description\n4. 一个 PR 只做一件事'
      },
      {
        title: 'CHANGELOG 与文档内注释',
        content: 'CHANGELOG.md 按版本倒序记录：\n\n## [2.1.0] - 2024-03-15\n### Added\n- 支持 OAuth 登录\n### Fixed\n- 修复分页在最后一页的错误\n\n代码内文档：用 doc comment（/** ... */）解释"为什么"，用行注释解释"怎么回事"。README 解释"是什么"'
      }
    ],
    diagnosis: [
      {
        symptom: '新成员加入后频繁问"怎么跑起来"、"用什么技术栈"',
        cause: 'README 缺少快速开始章节或步骤不完整',
        fix: '添加 Quick Start 章节，包含前置条件、安装命令、运行命令、验证成功的标志'
      },
      {
        symptom: 'PR 质量参差不齐，review 时经常要求修改格式',
        cause: '没有 CONTRIBUTING.md 或内容太笼统',
        fix: '创建详细的 CONTRIBUTING.md，包含具体的命令、格式要求和示例'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 Express API 项目写一个 README 的快速开始章节',
        hint: '包含前置条件、安装、运行、验证',
        answer: '## Quick Start\n\n要求 Node.js >= 18\n\n```bash\nnpm install\ncp .env.example .env\nnpm run dev\n```\n\n服务启动后访问 http://localhost:3000/health 应返回 {"status":"ok"}'
      },
      {
        level: '进阶',
        task: '为项目创建 issue 和 PR 模板',
        hint: '放在 .github/ 目录下',
        answer: '.github/ISSUE_TEMPLATE/bug_report.md：包含复现步骤、期望行为、实际行为、环境信息\n.github/PULL_REQUEST_TEMPLATE.md：包含变更描述、测试情况、关联 issue 号、截图（如有 UI 变更）'
      }
    ]
  },

  "_ft-uvXt6s_xrcMT3fbSF": {
    mentalModel: '组织成员管理是"公司 HR 系统"——通过团队分组和权限矩阵，控制谁能看到什么仓库、能做什么操作',
    sections: [
      {
        title: '组织成员角色',
        content: 'Owner：完全控制组织，包括删除组织、管理账单\nMember：普通成员，能看到组织内所有仓库\nOutside Collaborator：非组织成员但被邀请到特定仓库\n\n最佳实践：Owner 不超过 3 人，日常开发用 Member 权限，外部贡献者用 Outside Collaborator'
      },
      {
        title: '权限矩阵设计',
        content: '按最小权限原则设计：\n\n开发者 → Member + Write（能 push 到非保护分支）\nTech Lead → Member + Maintain（能管理仓库设置）\nDevOps → Member + Admin（需要管理部署密钥）\n外部审计 → Outside Collaborator + Read\n\n定期审计：Settings → People 查看谁有什么权限'
      },
      {
        title: '邀请与管理流程',
        content: '1. People → Invite member → 输入邮箱\n2. 选择角色（Member/Owner）\n3. 加入团队（可多选）\n4. 被邀请者收到邮件 → 接受邀请\n\n管理操作：移除成员（其 fork 保留但失去访问权）、暂停访问（企业功能）、转换为 Outside Collaborator'
      }
    ],
    diagnosis: [
      {
        symptom: '成员离开公司后仍能访问私有仓库',
        cause: '忘记从组织移除该成员',
        fix: 'Settings → People → 找到成员 → Remove。同时检查是否有 Personal Access Token 或 Deploy Key 需要撤销'
      },
      {
        symptom: '新成员加入后看不到组织的私有仓库',
        cause: '成员没有被添加到对应团队，且仓库不是对所有成员可见',
        fix: 'Settings → Teams → 选择团队 → Repositories → 添加仓库，设置权限级别'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '描述将新开发者加入组织并赋予某仓库写权限的完整步骤',
        hint: '先邀请成员，再加入团队',
        answer: '1. Settings → People → Invite member\n2. 输入邮箱，角色选 Member\n3. 加入对应开发团队\n4. 团队已有该仓库的 Write 权限，成员接受邀请后即可 push'
      },
      {
        level: '进阶',
        task: '设计一个 20 人团队的权限方案，包括前端、后端、DevOps 三个小组',
        hint: '用团队分组管理权限',
        answer: '创建三个团队：frontend（Write 到前端仓库）、backend（Write 到后端仓库）、devops（Admin 到所有仓库+CI仓库）\nTech Lead 加入所有团队并设为 Maintainer\n所有私有仓库对 Member 默认可见'
      }
    ]
  },

  "wydgCxR5VnieBpRolXt8i": {
    mentalModel: '组织内团队是"权限批处理包"——把一组人放进一个团队，一次性给这个团队分配多个仓库的权限，比逐人逐仓库管理高效得多',
    sections: [
      {
        title: '团队的层级结构',
        content: '组织可以创建嵌套团队：\nEngineering（父团队）\n├── Frontend\n├── Backend\n└── DevOps\n\n子团队成员自动继承父团队的权限。例如 Engineering 有 staging 仓库的 Write 权限，所有子团队成员都能访问'
      },
      {
        title: '团队权限分配',
        content: '每个团队对每个仓库有独立的权限级别：\nRead → 克隆和查看\nTriage → 管理 issue 和 PR 标签\nWrite → 推送代码\nMaintain → 管理仓库设置（不删除）\nAdmin → 完全控制（包括删除仓库）\n\n操作：Team Settings → Repositories → Add repository → 选择权限'
      },
      {
        title: '团队 @mention 与代码审查',
        content: 'PR 中可以 @mention 团队：@org/frontend-team 自动通知所有前端成员。\n\nCODEOWNERS 中也可指定团队：\n/src/components/ @org/frontend-team\n\n自动分配 PR reviewer：Settings → Branch protection rules → Required reviews → 指定团队'
      }
    ],
    diagnosis: [
      {
        symptom: '新加入团队的成员无法 push 代码',
        cause: '团队对仓库的权限是 Read 而非 Write',
        fix: 'Team Settings → Repositories → 找到仓库 → 修改权限为 Write'
      },
      {
        symptom: '团队成员收到大量不相关的 PR 通知',
        cause: '团队被加入了 CODEOWNERS 中不相关的文件路径',
        fix: '审查 CODEOWNERS 文件，确保每个团队只负责对应的文件路径'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个名为 backend 的团队，添加 3 个成员，并给该团队分配 api-service 仓库的 Write 权限',
        hint: '在组织页面操作 Teams',
        answer: '1. Organization → Teams → New team → 命名 backend\n2. Members → Add member → 搜索并添加 3 人\n3. Repositories → Add repository → 选 api-service → Write 权限'
      },
      {
        level: '进阶',
        task: '设计嵌套团队结构让 DevOps 能访问所有仓库，但前端团队只能访问前端仓库',
        hint: '父团队权限被子团队继承',
        answer: '创建 Engineering（父团队）→ 给所有仓库 Maintain 权限\n├── Frontend（子团队）→ 给前端仓库 Write\n├── Backend（子团队）→ 给后端仓库 Write\n└── DevOps（子团队）→ 继承父团队所有仓库权限'
      }
    ]
  },

  "snWQHCQECZyUXHdn6ppIk": {
    mentalModel: 'GitHub Discussions 是项目的"社区论坛"——Issue 是待修的任务，PR 是代码变更，Discussion 则是头脑风暴、问答和公告的场所',
    sections: [
      {
        title: 'Discussion 与 Issue 的区别',
        content: 'Issue：有明确的"完成"状态——bug 要修、功能要做，完成后关闭\nDiscussion：开放对话，没有"完成"的概念——提问、想法分享、RFC、公告\n\n经验法则：如果你不确定它是不是 bug 或 feature request，先用 Discussion 讨论，确认后再转为 Issue'
      },
      {
        title: 'Discussion 分类（Categories）',
        content: '默认分类：\n📢 Announcements — 项目公告（仅 Maintainer 可发）\n💡 Ideas — 功能建议和头脑风暴\n🙏 Q&A — 问答（可标记 Answered）\n🎉 Show and Tell — 展示你的作品\n\n可自定义分类。Q&A 类型的 Discussion 可以标记最佳答案，类似 Stack Overflow'
      },
      {
        title: 'Discussion 转 Issue 工作流',
        content: 'Discussion 中的 Ideas 经过投票后变成正式需求：\n1. 社区在 Ideas 分类提出建议\n2. 获得足够的 👍 投票\n3. Maintainer 点击 "Convert to issue"\n4. Issue 自动关联原 Discussion\n5. 开发完成后 PR 关闭 Issue\n\n这个流程让需求从"讨论"自然过渡到"实施"'
      }
    ],
    diagnosis: [
      {
        symptom: 'Issue 列表里混入大量"怎么使用"的问题，真正的 bug 被淹没',
        cause: '用户不知道去哪里提问，把所有东西都发到 Issue',
        fix: '启用 Discussions，在 Issue 模板中添加引导："If this is a question, please use Discussions → Q&A instead"'
      },
      {
        symptom: 'Discussion 功能在仓库中不可见',
        cause: 'Discussions 需要手动启用',
        fix: 'Settings → Features → 勾选 Discussions'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '描述 Discussions 四种默认分类的用途，并说明什么情况用 Discussion 而不是 Issue',
        hint: 'Discussion 适合开放对话',
        answer: 'Announcements：项目公告\nIdeas：功能建议和讨论\nQ&A：技术问答\nShow and Tell：展示作品\n\n当你不确定是 bug 还是用法问题、或想讨论一个功能方向时，用 Discussion'
      },
      {
        level: '进阶',
        task: '设计一个完整的"从讨论到交付"流程',
        hint: 'Discussion → 投票 → Issue → PR',
        answer: '1. 用户在 Ideas 发起 Discussion\n2. 社区讨论和投票\n3. Maintainer 评估后 Convert to Issue\n4. 开发者领取 Issue，创建分支开发\n5. PR 引用 "Closes #123" 自动关闭 Issue\n6. 在原 Discussion 中公告功能已上线'
      }
    ]
  },

  "qis7Z5VRxMcOmbesQlegZ": {
    mentalModel: 'reset --mixed 是"撤回暂存但保留修改"——把 commit 指针回退，工作区的文件改动还在，只是从已提交变成未暂存状态，像把信从邮箱取回桌上',
    handsOn: [
      {
        title: 'reset --mixed 回退一个 commit',
        cmd: 'git log --oneline -3 && echo "---" && git reset --mixed HEAD~1 && echo "---" && git log --oneline -3 && echo "---" && git status',
        output: 'c3d4e5f Add feature X\nb2c3d4e Fix bug\na1b2c3d Initial\n---\n---\nb2c3d4e Fix bug\na1b2c3d Initial\n---\nChanges not staged for commit:\n  modified: src/feature.js',
        explain: 'HEAD 从 c3d4e5f 回退到 b2c3d4e，feature.js 的修改还在工作区但没有被暂存。--mixed 是默认模式，可以省略'
      },
      {
        title: '对比三种 reset 模式',
        cmd: 'echo "soft: 保留暂存+工作区\nmixed: 取消暂存，保留工作区\nhard: 取消暂存+丢弃工作区"',
        output: 'soft: 保留暂存+工作区\nmixed: 取消暂存，保留工作区\nhard: 取消暂存+丢弃工作区',
        explain: 'soft 让改动保持 staged（绿色），mixed 让改动变成 unstaged（红色），hard 直接丢弃所有改动。日常最常用的其实是 mixed'
      },
      {
        title: '用 reset --mixed 拆分 commit',
        cmd: 'git reset --mixed HEAD~1 && git add src/login.js && git commit -m "Add login" && git add src/register.js && git commit -m "Add register"',
        output: '[main a1b2c3d] Add login\n 1 file changed\n[main b2c3d4e] Add register\n 1 file changed',
        explain: '把一个大 commit 拆成两个：先 mixed reset 撤回，然后分两次 add + commit。这是最常见的 reset 用途'
      }
    ],
    diagnosis: [
      {
        symptom: '想撤销上一次 commit 但保留代码修改，误用了 --hard 导致修改丢失',
        cause: '混淆了 --mixed 和 --hard 的效果',
        fix: 'git reflog 找到丢失的 commit SHA，git checkout <sha> -- . 恢复文件内容'
      },
      {
        symptom: 'reset --mixed 后发现某些文件不想保留修改',
        cause: 'mixed 保留了所有工作区修改，但有些文件的修改不需要了',
        fix: 'git restore <file> 丢弃特定文件的工作区修改（等价于以前的 git checkout -- <file>）'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '你做了一次 commit，发现 commit message 写错了，想用 reset 撤回然后重新 commit（保留修改）',
        hint: 'reset --mixed（默认模式）',
        answer: 'git reset HEAD~1\n# 修改在工作区保留但未暂存\ngit add .\ngit commit -m "正确的 commit message"'
      },
      {
        level: '进阶',
        task: '你有 3 个 commit（A、B、C），想把 B 和 C 合并成一个 commit，但保留 A 不变',
        hint: 'reset 到 A，然后重新 commit',
        answer: 'git reset --mixed HEAD~2  # 回到 A\ngit add .\ngit commit -m "B+C 的合并描述"'
      }
    ]
  },

  "O-zoAWkDvyn7B8_TmY257": {
    mentalModel: '分支间差异对比是"找不同游戏"——告诉你两条路在哪里分叉，各自走了多远，以及合并时会撞在哪里',
    handsOn: [
      {
        title: '查看两个分支的 commit 差异',
        cmd: 'git log --oneline main..feature',
        output: 'd4e5f6g Add payment validation\nc3d4e5f Add payment form',
        explain: 'A..B 表示"在 B 中但不在 A 中"的 commit。这里是 feature 分支比 main 多的 commit'
      },
      {
        title: '查看文件级差异',
        cmd: 'git diff main..feature --stat',
        output: ' src/payment.js | 45 ++++++++++\n src/form.js     | 12 ++++\n 2 files changed, 57 insertions(+)',
        explain: '--stat 显示变更的文件和行数概览。不加 --stat 显示详细的 diff 内容'
      },
      {
        title: '三点语法查看分叉后的差异',
        cmd: 'git log --oneline --left-right main...feature',
        output: '< a1b2c3d Hotfix on main\n> d4e5f6g Add payment validation\n> c3d4e5f Add payment form',
        explain: '三个点 ... 显示两个分支从共同祖先分叉后的所有 commit。< 表示左边的分支，> 表示右边的分支'
      },
      {
        title: '预览合并冲突',
        cmd: 'git diff main...feature -- src/payment.js',
        output: 'diff --git a/src/payment.js b/src/payment.js\n@@ -10,7 +10,8 @@\n function validate(amount) {\n-  return amount > 0;\n+  if (amount <= 0) return false;\n+  return amount <= MAX_AMOUNT;',
        explain: '三点 diff 显示 feature 分支相对于分叉点的修改，精确展示合并时会变化的内容'
      }
    ],
    diagnosis: [
      {
        symptom: 'git diff branch1..branch2 没有输出，但两个分支明明不同',
        cause: '.. 比较的是 commit 可达性，如果 branch1 是 branch2 的祖先，差异是空的',
        fix: '确认方向：git log branch1..branch2 和 git log branch2..branch1 分别看看哪边有额外的 commit'
      },
      {
        symptom: '想看两个分支改了什么文件，diff 输出太长看不懂',
        cause: '没用 --stat 或 --name-only 做摘要',
        fix: 'git diff main..feature --stat 看行数概览，--name-only 只看文件名列表'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 feature 分支有但 main 没有的所有 commit，以及 main 有但 feature 没有的 commit',
        hint: '用 .. 语法分别查两个方向',
        answer: 'git log --oneline main..feature  # feature 独有的\ngit log --oneline feature..main  # main 独有的'
      },
      {
        level: '进阶',
        task: '找出 main 和 feature 分支共同修改过的文件（可能产生冲突的文件）',
        hint: '分别获取两边修改的文件，然后取交集',
        answer: 'comm -12 <(git diff --name-only $(git merge-base main feature)..main | sort) <(git diff --name-only $(git merge-base main feature)..feature | sort)'
      }
    ]
  },

  "pqBV7BMAs0z6qpfZeW2XP": {
    mentalModel: 'Git hooks 是 Git 操作的"自动触发器"——在 commit、push 等动作的前后自动执行你的脚本，像门口的安检，不合格的操作被拦截',
    handsOn: [
      {
        title: '创建 pre-commit 钩子',
        cmd: 'cat > .git/hooks/pre-commit << \'HOOK\'\n#!/bin/bash\nif git diff --cached --name-only | grep -q "\\.js$"; then\n  echo "Running lint on staged JS files..."\n  npx eslint --quiet $(git diff --cached --name-only --diff-filter=ACM | grep "\\.js$")\n  if [ $? -ne 0 ]; then\n    echo "Lint 失败，请修复后再 commit"\n    exit 1\n  fi\nfi\nHOOK\nchmod +x .git/hooks/pre-commit',
        output: '(创建 pre-commit 文件并设置可执行权限)',
        explain: 'pre-commit 在 git commit 执行前触发。如果脚本退出码非 0，commit 被取消。这里检查暂存的 JS 文件是否通过 lint'
      },
      {
        title: '查看可用的钩子类型',
        cmd: 'ls .git/hooks/*.sample | sed \'s/.sample$//\' | xargs -I{} basename {}',
        output: 'applypatch-msg\ncommit-msg\nfsmonitor-watchman\npost-update\npre-applypatch\npre-commit\npre-merge-commit\npre-push\npre-rebase\nprepare-commit-msg',
        explain: 'Git 内置了十几种钩子。最常用的：pre-commit（提交前检查）、commit-msg（验证消息格式）、pre-push（推送前检查）'
      },
      {
        title: '创建 commit-msg 钩子验证消息格式',
        cmd: 'cat > .git/hooks/commit-msg << \'HOOK\'\n#!/bin/bash\nmsg=$(cat "$1")\nif ! echo "$msg" | grep -qE \'^(feat|fix|docs|style|refactor|test|chore): .+\'; then\n  echo "Commit message 格式不对！"\n  echo "要求: type: description"\n  echo "例如: feat: add user login"\n  exit 1\nfi\nHOOK\nchmod +x .git/hooks/commit-msg',
        output: '(创建 commit-msg 钩子)',
        explain: 'commit-msg 在用户输入 commit message 后、实际创建 commit 前触发。$1 是包含消息的临时文件路径'
      }
    ],
    diagnosis: [
      {
        symptom: '钩子脚本写好了但不执行',
        cause: '缺少可执行权限，或者文件名不对（比如多了 .sample 后缀）',
        fix: 'chmod +x .git/hooks/pre-commit，确保文件名精确（不带 .sample）。检查脚本第一行是 #!/bin/bash'
      },
      {
        symptom: 'pre-commit 钩子太慢，每次 commit 等很久',
        cause: '钩子对整个项目运行 lint/test，文件多时非常慢',
        fix: '只检查暂存的文件：git diff --cached --name-only --diff-filter=ACM，或者用 lint-staged 工具'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 pre-commit 钩子，阻止包含 TODO 关键字的文件被提交',
        hint: '用 git diff --cached 检查暂存内容',
        answer: '#!/bin/bash\nif git diff --cached | grep -q "+.*TODO"; then\n  echo "暂存的文件包含 TODO，请先处理"\n  exit 1\nfi'
      },
      {
        level: '进阶',
        task: '解释为什么 .git/hooks 不被 Git 跟踪，以及团队如何共享钩子',
        hint: '考虑安全和可移植性',
        answer: '.git/hooks 不被跟踪是因为钩子有执行权限且可能包含环境相关路径，自动执行任意脚本有安全风险。\n共享方案：1) 把钩子脚本放在仓库的 scripts/hooks/ 目录，用 npm 的 prepare 脚本安装 2) 用 husky 工具管理 3) 设置 core.hooksPath 指向仓库内的目录'
      }
    ]
  },

  "zsU6R2zvJKnYNU2ac4o4p": {
    mentalModel: '客户端钩子在你电脑上运行（commit/push 前检查），服务端钩子在 Git 服务器上运行（接收 push 时检查）——一个管"出门前安检"，一个管"进门时验证"',
    sections: [
      {
        title: '客户端钩子（Client-Side Hooks）',
        content: '运行在开发者的本地机器上：\n\npre-commit：git commit 前触发，用于 lint、格式化、测试\nprepare-commit-msg：生成默认 commit message（如加 ticket 号）\ncommit-msg：验证 commit message 格式\npost-commit：commit 完成后触发（如发通知）\npre-push：push 前触发，可阻止推送\npre-rebase：rebase 前触发，可阻止对已推送分支 rebase\n\n特点：可以被绕过（--no-verify），不可靠作为唯一防线'
      },
      {
        title: '服务端钩子（Server-Side Hooks）',
        content: '运行在 Git 服务器上（自托管 GitLab/Gitea 等）：\n\npre-receive：接收 push 前触发，可拒绝整个 push\nupdate：对每个分支单独触发，可拒绝单个分支的更新\npost-receive：push 完成后触发（如部署、通知、CI 触发）\n\n特点：无法绕过，是最终的防线。GitHub 不开放服务端钩子，但提供类似功能的 GitHub Actions 和 Webhooks'
      },
      {
        title: '安全边界对比',
        content: '客户端钩子 — 提升开发者体验，快速反馈，但不能强制执行\n服务端钩子 — 强制执行策略，但需要自托管或企业版\n\n最佳实践：\n- 客户端用 pre-commit 做快速检查（lint、格式）\n- 服务端用 pre-receive 做强制检查（签名验证、敏感信息扫描）\n- CI/CD 做完整测试套件\n- 三层防线互为补充'
      }
    ],
    diagnosis: [
      {
        symptom: '本地 pre-commit 钩子通过了，但 CI 仍然失败',
        cause: '客户端钩子只检查了暂存文件，CI 运行完整测试；或者钩子被 --no-verify 跳过了',
        fix: '把关键检查放在 CI 中，客户端钩子只做快速反馈。不要把客户端钩子作为唯一防线'
      },
      {
        symptom: '想在 GitHub 上实现服务端钩子的效果（如阻止 force push）',
        cause: 'GitHub 不支持自定义服务端钩子',
        fix: '用 Branch Protection Rules 代替：Settings → Branches → 添加规则禁止 force push 和分支删除'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 3 个客户端钩子和 2 个服务端钩子，说明各自触发时机',
        hint: '客户端在本地操作前后，服务端在接收 push 时',
        answer: '客户端：pre-commit（commit前检查代码）、commit-msg（验证消息格式）、pre-push（push前检查）\n服务端：pre-receive（push到达服务器时验证）、post-receive（push完成后触发部署）'
      },
      {
        level: '进阶',
        task: '设计三层代码质量防线：本地钩子 + CI + 服务端策略',
        hint: '每层负责不同粒度的检查',
        answer: '第一层（客户端 pre-commit）：lint + 格式化，2秒内反馈\n第二层（CI/CD）：完整测试套件 + 安全扫描 + 构建验证\n第三层（服务端/CI 策略）：要求 PR review、禁止 force push、要求 CI 通过才能合并'
      }
    ]
  },

  "fjAFNjNNbPOzme9Uk_fDV": {
    mentalModel: 'Submodule 是在 Git 仓库里"引用"另一个 Git 仓库——像一个超链接，父仓库只记住子仓库的 URL 和固定 commit，不包含子仓库的代码',
    handsOn: [
      {
        title: '添加子模块',
        cmd: 'git submodule add https://github.com/vendor/lib.git vendor/lib',
        output: 'Cloning into \'vendor/lib\'...\n...\nwarning: LF will be replaced by CRLF',
        explain: '创建 .gitmodules 文件记录映射关系，在 vendor/lib 目录放置子仓库的特定 commit。父仓库只记录子模块的 SHA，不记录分支'
      },
      {
        title: '查看子模块状态',
        cmd: 'git submodule status',
        output: ' a1b2c3d4e5f6g7h8 vendor/lib (v1.2.0-3-ga1b2c3d)\n+e5f6g7h8i9j0k1l2 vendor/utils (heads/main)',
        explain: '每行显示子模块的当前 commit SHA 和标签。+ 前缀表示子模块 HEAD 与父仓库记录的 commit 不一致（需要更新）'
      },
      {
        title: '克隆包含子模块的项目',
        cmd: 'git clone --recurse-submodules https://github.com/org/project.git',
        output: 'Cloning into \'project\'...\nSubmodule \'vendor/lib\' registered\nCloning into \'vendor/lib\'...',
        explain: '--recurse-submodules 在 clone 时自动初始化并更新所有子模块。忘记加这个参数会导致子模块目录为空'
      },
      {
        title: '更新子模块到最新 commit',
        cmd: 'cd vendor/lib && git pull origin main && cd ../.. && git add vendor/lib && git commit -m "Update submodule"',
        output: '[main a1b2c3d] Update submodule\n 1 file changed, 1 insertion(+), 1 deletion(-)',
        explain: '进入子模块目录 pull 最新代码，回到父仓库 add + commit 更新记录的 SHA。子模块的"更新"本质上就是改一个指针'
      }
    ],
    diagnosis: [
      {
        symptom: 'clone 项目后子模块目录是空的',
        cause: 'clone 时没有加 --recurse-submodules',
        fix: 'git submodule init && git submodule update，或者重新 clone 加 --recurse-submodules'
      },
      {
        symptom: '子模块显示 "modified" 但什么也没改',
        cause: '子模块目录的 HEAD 指向的 commit 与父仓库记录的不一致（可能是别人更新了子模块但你没 pull）',
        fix: 'git submodule update 把子模块 checkout 到父仓库记录的 commit。或者 cd 进子模块 pull 然后回父仓库 commit'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '克隆一个包含子模块的仓库，确保子模块内容完整',
        hint: '--recurse-submodules',
        answer: 'git clone --recurse-submodules https://github.com/org/project.git\n# 或者已经 clone 了：\ngit submodule init && git submodule update'
      },
      {
        level: '挑战',
        task: '解释为什么 submodule 经常被称为" Git 最令人困惑的功能"，以及什么场景下用它比 npm/pip 包管理器更好',
        hint: '考虑子模块的 commit 固定机制和嵌套复杂性',
        answer: 'submodule 记录固定 commit 而非分支，更新流程繁琐（进子模块 pull → 回父仓库 commit），嵌套子模块更是噩梦。\n适合场景：1) 共享的私有库（不在公共包管理器上）2) 需要锁定特定 commit 确保可复现 3) 你想同时修改主项目和子库\n不适合：公共依赖包（用 npm/pip 更好）'
      }
    ]
  },

  "x4bnsPVTiX2xOCSyrgWpF": {
    mentalModel: '子模块的添加和更新就是"固定指针"操作——添加时锁定一个 commit SHA，更新时把指针移到新的 SHA，然后在父仓库提交这个指针变化',
    handsOn: [
      {
        title: '添加新的子模块并查看产生的文件',
        cmd: 'git submodule add -b main https://github.com/vendor/shared-lib.git lib/shared && cat .gitmodules',
        output: '[submodule "lib/shared"]\n\tpath = lib/shared\n\turl = https://github.com/vendor/shared-lib.git\n\tbranch = main',
        explain: '-b main 指定跟踪 main 分支。.gitmodules 记录路径和 URL，父仓库的 git tree 中记录了子模块目录对应的 commit SHA'
      },
      {
        title: '批量更新所有子模块到远程最新',
        cmd: 'git submodule update --remote --merge',
        output: 'Submodule path \'lib/shared\': merged in a1b2c3d\nSubmodule path \'vendor/utils\': merged in d4e5f6g',
        explain: '--remote 拉取子模块远程的最新 commit（而非父仓库记录的 commit），--merge 自动合并。之后需要 git add + commit 更新父仓库的指针'
      },
      {
        title: '移除子模块',
        cmd: 'git submodule deinit -f lib/shared && git rm -f lib/shared && rm -rf .git/modules/lib/shared',
        output: 'rm \'lib/shared\'\nCleared directory \'lib/shared\'',
        explain: '三步移除：deinit 解除注册，git rm 从父仓库删除引用和目录，rm -rf 清理 .git/modules 中的缓存。三步缺一不可'
      },
      {
        title: '子模块内开发并同步',
        cmd: 'cd lib/shared && git checkout -b feature-update && echo "new code" >> index.js && git add . && git commit -m "Update shared lib" && cd ../.. && git diff',
        output: 'Subproject commit a1b2c3d..b2c3d4e',
        explain: '在子模块内创建分支和 commit 后，父仓库的 git diff 显示子模块指针变了。需要先在子模块 push 到远程，再在父仓库 commit 指针变化'
      }
    ],
    diagnosis: [
      {
        symptom: 'CI 构建时子模块拉取失败 "fatal: repository not found"',
        cause: 'CI 环境没有子模块仓库的访问权限（私有仓库），或 URL 用了 HTTPS 但 CI 没配置 credential',
        fix: 'CI 中使用 token：git config --global url."https://TOKEN@github.com/".insteadOf "https://github.com/"，或改用 SSH URL'
      },
      {
        symptom: 'git submodule update 后子模块处于 detached HEAD',
        cause: '这是正常行为——子模块被 checkout 到父仓库记录的特定 commit，不在任何分支上',
        fix: '如果需要在子模块上开发，cd 进去后 git checkout main（或需要的分支）。或者在 .gitmodules 中设置 branch 字段后用 git submodule update --remote'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '添加一个子模块，然后更新所有子模块到最新，提交到父仓库',
        hint: 'add → update --remote → add → commit',
        answer: 'git submodule add https://github.com/vendor/lib.git vendor/lib\ngit submodule update --remote\ngit add vendor/lib .gitmodules\ngit commit -m "Add and update submodules"'
      },
      {
        level: '进阶',
        task: '在子模块中做了修改并 commit，如何把这个改动同步到父仓库并让队友也能拉到？',
        hint: '子模块先 push，父仓库再 commit 指针',
        answer: '1. cd vendor/lib && git push origin main  # 先把子模块推到远程\n2. cd ../..  # 回到父仓库\n3. git add vendor/lib  # 记录新的 commit SHA\n4. git commit -m "Update vendor/lib to latest"\n5. git push origin main  # 推送父仓库\n\n注意：必须先 push 子模块，否则队友 update 时找不到那个 commit'
      }
    ]
  },

  "uS1H9KoKGNONvETCuFBbz": {
    mentalModel: 'Scheduled Workflows 是 GitHub Actions 的"闹钟"——用 cron 表达式定时触发工作流，适合夜间构建、定时测试、自动发布等不需要人工触发的任务',
    handsOn: [
      {
        title: '创建每天凌晨 3 点运行的工作流',
        cmd: 'cat > .github/workflows/nightly.yml << \'EOF\'\nname: Nightly Build\non:\n  schedule:\n    - cron: \'0 3 * * *\'\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci && npm run build && npm test\nEOF',
        output: '(创建 nightly.yml 工作流文件)',
        explain: 'cron 使用 UTC 时间。\'0 3 * * *\' 表示每天 UTC 3:00（北京时间 11:00）。schedule 只在默认分支上生效'
      },
      {
        title: '每周一早 9 点（UTC）运行集成测试',
        cmd: 'cat .github/workflows/weekly-test.yml',
        output: 'name: Weekly Integration Test\non:\n  schedule:\n    - cron: \'0 9 * * 1\'\n  workflow_dispatch:  # 允许手动触发',
        explain: '\'0 9 * * 1\' = 每周一 UTC 9:00。加上 workflow_dispatch 可以手动触发，方便调试和紧急运行'
      },
      {
        title: '常用 cron 表达式速查',
        cmd: 'echo \'*/30 * * * *  每30分钟\n0 */2 * * *   每2小时\n0 0 * * 0     每周日午夜\n0 0 1 * *     每月1日\n0 0 1 1 *     每年1月1日\n0 9-17 * * 1-5 工作日9-17点每小时\'',
        output: '*/30 * * * *  每30分钟\n0 */2 * * *   每2小时\n0 0 * * 0     每周日午夜\n0 0 1 * *     每月1日\n0 0 1 1 *     每年1月1日\n0 9-17 * * 1-5 工作日9-17点每小时',
        explain: 'GitHub 在高峰期可能延迟几分钟触发。不要用定时任务做精确到分钟的操作。可以用 crontab.guru 验证表达式'
      }
    ],
    diagnosis: [
      {
        symptom: '定时工作流没有在预定时间运行',
        cause: '仓库 60 天内没有活动（commit/push/手动触发），GitHub 会暂停定时任务',
        fix: '手动触发一次 workflow_dispatch，或 push 一个 commit 激活仓库。也可以去 Actions 页面手动启用'
      },
      {
        symptom: '定时工作流使用的代码不是最新的',
        cause: 'schedule 只在默认分支（通常是 main）上触发，feature 分支的定时任务不会运行',
        fix: '确保工作流文件在默认分支上。如果需要测试，加上 workflow_dispatch 手动触发'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个工作流，每天 UTC 8:00 自动运行测试并在失败时通知',
        hint: '用 cron 和 workflow_dispatch',
        answer: 'on:\n  schedule:\n    - cron: \'0 8 * * *\'\n  workflow_dispatch:\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci && npm test'
      },
      {
        level: '进阶',
        task: '解释为什么定时工作流不适合做"部署到生产环境"的触发器',
        hint: '考虑 cron 的不精确性和部署的安全性',
        answer: '1. cron 触发可能延迟数分钟，不适合时间敏感的部署\n2. 定时部署无法做人工审批\n3. 仓库不活跃时定时任务会被暂停\n4. 部署应该由明确的动作触发（push tag、合并 PR）而非时间\n5. 用 workflow_dispatch + environment protection rules 更安全'
      }
    ]
  },

  "BnPiTu1Jw2kIW560a2A5T": {
    mentalModel: 'Workflow Context 是 GitHub Actions 运行时的"环境变量全家福"——提供了关于触发事件、仓库、分支、commit 等全部元信息，让你在工作流中做条件判断',
    handsOn: [
      {
        title: '查看 workflow context 的所有信息',
        cmd: 'cat > .github/workflows/debug-context.yml << \'EOF\'\nname: Debug Context\non: push\njobs:\n  debug:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Dump context\n        run: |\n          echo "Event: ${{ github.event_name }}"\n          echo "Repo: ${{ github.repository }}"\n          echo "Ref: ${{ github.ref }}"\n          echo "SHA: ${{ github.sha }}"\n          echo "Actor: ${{ github.actor }}"\n          echo "Run ID: ${{ github.run_id }}"\nEOF',
        output: 'Event: push\nRepo: org/myapp\nRef: refs/heads/main\nSHA: a1b2c3d4e5f6\nActor: alice\nRun ID: 12345678',
        explain: 'github context 包含触发工作流的全部元信息。github.ref 是完整的 ref 路径，github.sha 是触发 commit 的完整 SHA'
      },
      {
        title: '根据分支名做条件执行',
        cmd: 'cat .github/workflows/deploy.yml | head -25',
        output: 'name: Deploy\non: push\njobs:\n  deploy:\n    if: github.ref == \'refs/heads/main\'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm run deploy\n  deploy-staging:\n    if: startsWith(github.ref, \'refs/heads/release/\')\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm run deploy:staging',
        explain: 'if 条件使用 context 变量判断分支。main 分支部署到生产，release/* 分支部署到 staging。startsWith/endsWith/contains 是常用函数'
      },
      {
        title: '获取 PR 相关信息',
        cmd: 'echo \'PR Number: ${{ github.event.pull_request.number }}\nPR Title: ${{ github.event.pull_request.title }}\nPR Author: ${{ github.event.pull_request.user.login }}\nBase Branch: ${{ github.event.pull_request.base.ref }}\nHead Branch: ${{ github.event.pull_request.head.ref }}\'',
        output: 'PR Number: 42\nPR Title: Add login feature\nPR Author: alice\nBase Branch: main\nHead Branch: feature/login',
        explain: '在 pull_request 触发的工作流中，github.event.pull_request 提供 PR 的完整信息，可用于自动标签、评论等操作'
      }
    ],
    diagnosis: [
      {
        symptom: '在 push 触发的工作流中使用 github.event.pull_request 得到空值',
        cause: 'push 事件的 context 没有 pull_request 字段，只有 pull_request 或 pull_request_target 事件才有',
        fix: '确认触发事件类型。push 事件用 github.ref 获取分支信息，PR 事件用 github.event.pull_request'
      },
      {
        symptom: '矩阵构建中想引用当前矩阵参数',
        cause: '不知道 matrix context 的语法',
        fix: '用 ${{ matrix.os }} 和 ${{ matrix.node-version }} 引用。例如：\nstrategy:\n  matrix:\n    os: [ubuntu-latest, macos-latest]\n    node-version: [18, 20]'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个工作流，在 PR 上自动评论 PR 的标题和作者信息',
        hint: '用 github.event.pull_request context 和 actions/github-script',
        answer: 'on: pull_request\njobs:\n  comment:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/github-script@v7\n        with:\n          script: |\n            github.rest.issues.createComment({\n              owner: context.repo.owner,\n              repo: context.repo.repo,\n              issue_number: context.issue.number,\n              body: `PR: ${{ github.event.pull_request.title }} by @${{ github.actor }}`\n            })'
      },
      {
        level: '进阶',
        task: '根据触发来源（push/PR/schedule）执行不同的步骤',
        hint: '用 if 和 github.event_name',
        answer: 'steps:\n  - name: Run tests\n    if: github.event_name == \'pull_request\'\n    run: npm test\n  - name: Deploy\n    if: github.event_name == \'push\' && github.ref == \'refs/heads/main\'\n    run: npm run deploy\n  - name: Nightly cleanup\n    if: github.event_name == \'schedule\'\n    run: npm run cleanup'
      }
    ]
  },

  "HMNhzzV6ApTKj4I_FOmUB": {
    mentalModel: '缓存依赖是给 CI 的"购物清单"加记忆——如果 package-lock.json 没变就直接用上次的 node_modules，跳过 npm install 这最耗时的一步',
    handsOn: [
      {
        title: '使用 setup-node 内置缓存',
        cmd: 'cat .github/workflows/ci.yml',
        output: 'name: CI\non: push\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: \'npm\'\n      - run: npm ci\n      - run: npm test',
        explain: 'cache: \'npm\' 自动根据 package-lock.json 的 hash 缓存 node_modules。首次运行下载依赖并缓存，后续运行如果 lock 文件不变就直接恢复缓存'
      },
      {
        title: '手动配置缓存（适用于复杂场景）',
        cmd: 'cat .github/workflows/build.yml',
        output: 'steps:\n  - uses: actions/cache@v4\n    with:\n      path: |\n        ~/.npm\n        node_modules\n      key: ${{ runner.os }}-node-${{ hashFiles(\'**/package-lock.json\') }}\n      restore-keys: |\n        ${{ runner.os }}-node-\n  - run: npm ci',
        explain: 'key 是唯一标识符，包含 OS 和 lock 文件的 hash。restore-keys 是回退匹配——即使 lock 变了，也恢复部分缓存，npm ci 只需下载变化的包'
      },
      {
        title: '缓存 Python pip 依赖',
        cmd: 'cat .github/workflows/python-ci.yml | grep -A 10 cache',
        output: '- uses: actions/cache@v4\n  with:\n    path: ~/.cache/pip\n    key: ${{ runner.os }}-pip-${{ hashFiles(\'**/requirements.txt\') }}\n    restore-keys: |\n      ${{ runner.os }}-pip-',
        explain: 'Python 的 pip 缓存在 ~/.cache/pip。原理相同：根据 requirements.txt 的 hash 判断是否需要重新下载'
      }
    ],
    diagnosis: [
      {
        symptom: '缓存命中了但 npm ci 仍然报错 "lock file mismatch"',
        cause: '缓存恢复了 node_modules 但 package-lock.json 已更新，两者不一致',
        fix: 'npm ci 会自动清理 node_modules 重新安装，这是正确的行为。如果想加速，改用 npm install（但可能引入不一致）'
      },
      {
        symptom: '缓存大小超过限制导致缓存失效',
        cause: 'GitHub Actions 每个仓库最多 10GB 缓存，超出后旧缓存被自动清理',
        fix: '只缓存必要的目录（如 ~/.npm 而非 node_modules），使用更精确的 key 减少冗余缓存。用 actions/cache/evict 手动清理'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 Node.js 项目配置 GitHub Actions 缓存，使 npm install 跳过重复下载',
        hint: '用 setup-node 的 cache 选项',
        answer: '- uses: actions/setup-node@v4\n  with:\n    node-version: 20\n    cache: \'npm\'\n- run: npm ci'
      },
      {
        level: '进阶',
        task: 'Monorepo 中有 packages/a 和 packages/b 两个子包，如何分别缓存它们的依赖？',
        hint: '用不同的 key 和 path',
        answer: '- uses: actions/cache@v4\n  with:\n    path: packages/a/node_modules\n    key: ${{ runner.os }}-pkg-a-${{ hashFiles(\'packages/a/package-lock.json\') }}\n- uses: actions/cache@v4\n  with:\n    path: packages/b/node_modules\n    key: ${{ runner.os }}-pkg-b-${{ hashFiles(\'packages/b/package-lock.json\') }}'
      }
    ]
  },

  "560GJXFTt7DPdJjKtSDOo": {
    mentalModel: 'GitHub App 是"带身份的机器人账号"——它以独立身份操作 GitHub API（读 issue、写 PR、触发 workflow），权限精确到仓库和操作级别，比 Personal Access Token 更安全',
    sections: [
      {
        title: 'GitHub App vs OAuth App vs PAT',
        content: 'Personal Access Token (PAT)：绑定个人账号，权限=你的权限，Token 泄露=你的账号被入侵\nOAuth App：代表用户操作，需要用户授权，权限范围粗\nGitHub App：独立身份，精细权限（只给 issue 读取 + PR 写入），可以安装到指定仓库，Token 短期自动轮换\n\nGitHub App 是服务端集成的首选方案，权限最小且不需要绑定个人账号'
      },
      {
        title: 'GitHub App 的权限模型',
        content: 'Repository permissions（仓库级别）：\n- Contents: Read-only / Read and Write（代码访问）\n- Issues: Read-only / Read and Write\n- Pull requests: Read-only / Read and Write\n- Webhooks: Read and Write\n\nOrganization permissions（组织级别）：\n- Members: Read-only / Read and Write\n\nSubscribe to events：push、pull_request、issue_comment 等\n\n安装时选择"All repositories"或"Only select repositories"'
      },
      {
        title: '典型使用场景',
        content: '1. CI/CD Bot：监听 PR 事件，自动运行测试并在 PR 上贴结果评论\n2. 代码审查 Bot：分析代码变更，自动添加 review 建议\n3. Issue 管理：自动分类 issue、分配标签、关闭过时 issue\n4. 部署管理：监听 tag push 事件，触发部署流程\n5. 合规检查：检查每个 PR 是否满足组织政策\n\n每个场景只申请必要的最小权限'
      }
    ],
    diagnosis: [
      {
        symptom: 'GitHub App 安装后 API 调用返回 403',
        cause: '权限配置不足，或没有订阅对应的事件',
        fix: 'App Settings → Permissions 添加必要权限，Permissions & events → Subscribe to events 勾选需要的事件'
      },
      {
        symptom: 'App 的 Installation Token 过期',
        cause: 'Installation Token 有效期只有 1 小时',
        fix: '每次调用前重新生成 Token：用 JWT 换取 Installation Token。SDK（如 @octokit/auth-app）会自动处理刷新'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 GitHub App 相比 Personal Access Token 的三个安全优势',
        hint: '考虑权限粒度、身份绑定、Token 管理',
        answer: '1. 精细权限：可以只给特定仓库的特定操作权限\n2. 独立身份：不绑定个人账号，员工离职不影响\n3. 短期 Token：Installation Token 1小时过期，自动轮换，泄露风险低'
      },
      {
        level: '进阶',
        task: '设计一个自动给 PR 贴标签的 GitHub App，需要哪些权限和事件订阅？',
        hint: '需要读取 PR 信息和修改标签',
        answer: '权限：Pull requests: Read and Write（读取 PR 内容 + 添加标签）\n事件订阅：pull_request（opened, synchronize）\n逻辑：收到 PR 事件 → 分析文件路径 → 调用 API 添加标签（如 frontend、backend、docs）'
      }
    ]
  },

  "MoG7D9kqPuA6o52-z_WDN": {
    mentalModel: 'Webhook 是 GitHub 的"推送通知"——当仓库发生事件（push、PR、issue）时，GitHub 主动向你指定的 URL 发送 HTTP POST 请求，让你实时响应',
    handsOn: [
      {
        title: '创建仓库级 Webhook',
        cmd: 'gh api repos/owner/repo/hooks -f name=web -f config.url=https://myapp.com/webhook -f config.content_type=json -f events[]=push -f events[]=pull_request -F active=true',
        output: '{\n  "id": 12345,\n  "name": "web",\n  "active": true,\n  "events": ["push", "pull_request"],\n  "config": {\n    "url": "https://myapp.com/webhook",\n    "content_type": "json"\n  }\n}',
        explain: '通过 GitHub API 创建 Webhook，指定目标 URL、订阅的事件类型。当这些事件发生时 GitHub 会 POST JSON payload 到你的 URL'
      },
      {
        title: '验证 Webhook 签名',
        cmd: 'cat > server.js << \'EOF\'\nconst crypto = require(\'crypto\');\nfunction verifySignature(payload, signature, secret) {\n  const expected = \'sha256=\' + crypto\n    .createHmac(\'sha256\', secret)\n    .update(payload)\n    .digest(\'hex\');\n  return crypto.timingSafeEqual(\n    Buffer.from(signature),\n    Buffer.from(expected)\n  );\n}\nEOF',
        output: '(创建签名验证函数)',
        explain: 'GitHub 在每个 Webhook 请求的 X-Hub-Signature-256 头中包含 HMAC 签名。必须验证签名确认请求来自 GitHub，防止伪造'
      },
      {
        title: '测试 Webhook 重发',
        cmd: 'gh api repos/owner/repo/hooks/12345/deliveries --jq \'.[0] | {id, status_code, event}\'',
        output: '{\n  "id": 67890,\n  "status_code": 200,\n  "event": "push"\n}',
        explain: '查看最近的 delivery 记录。如果某次 delivery 失败了（非 2xx），可以在 GitHub UI 或 API 中 Redeliver 重新发送'
      }
    ],
    diagnosis: [
      {
        symptom: 'Webhook 显示 "Delivery failed" 或超时',
        cause: '你的服务器响应太慢（超过 10 秒）或返回非 2xx 状态码',
        fix: '确保 Webhook 处理异步化：收到请求立即返回 200，把耗时任务放入队列。检查服务器日志确认没有崩溃'
      },
      {
        symptom: '收到重复的 Webhook 事件',
        cause: 'GitHub 在超时或网络错误时会自动重试（最多 3 次，指数退避）',
        fix: '实现幂等处理：用 X-GitHub-Delivery 头的唯一 ID 做去重，已处理过的 delivery ID 直接跳过'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '描述 Webhook 的工作原理：谁触发、发什么、发给谁、如何验证',
        hint: '事件 → HTTP POST → 签名验证',
        answer: '1. GitHub 上发生事件（push/PR 等）触发 Webhook\n2. GitHub 向配置的 URL 发送 HTTP POST，payload 包含事件详情\n3. 请求头包含 X-Hub-Signature-256 签名\n4. 接收方用共享密钥验证签名，确认请求真实性\n5. 处理事件并返回 2xx 状态码'
      },
      {
        level: '进阶',
        task: '写一个 Express 中间件，验证 GitHub Webhook 签名并拒绝伪造请求',
        hint: '用 crypto 模块计算 HMAC',
        answer: 'app.use(\'/webhook\', express.raw({type: \'application/json\'}), (req, res, next) => {\n  const sig = req.headers[\'x-hub-signature-256\'];\n  const hmac = crypto.createHmac(\'sha256\', process.env.WEBHOOK_SECRET);\n  const digest = \'sha256=\' + hmac.update(req.body).digest(\'hex\');\n  if (crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(digest))) {\n    req.body = JSON.parse(req.body);\n    next();\n  } else {\n    res.status(401).send(\'Invalid signature\');\n  }\n});'
      }
    ]
  },

  "vhdGUhMAyre_Xya6IxZ-t": {
    mentalModel: 'GitHub Sponsors 是开源世界的"打赏系统"——让用户按月或一次性资助开源维护者，让维护者能持续投入项目开发',
    sections: [
      {
        title: 'Sponsors 的工作方式',
        content: '维护者开启 Sponsors 后，用户可以：\n- 一次性赞助（$1 起）\n- 月度赞助（自定义层级，如 $5/月、$25/月、$100/月）\n- 企业赞助（更高金额，显示公司 logo）\n\n维护者设置奖励：感谢名单、早期访问、专属 Discord 频道、优先处理 issue 等。\nGitHub 不抽成（0% 平台费用），全额给维护者'
      },
      {
        title: '开启 Sponsors 的条件和步骤',
        content: '条件：\n1. 有至少一个公开的开源仓库\n2. 完成身份验证（个人或组织）\n3. 有支持的收款方式（Stripe 或银行账户）\n\n步骤：\n1. github.com/sponsors → 点击 "Set up GitHub Sponsors"\n2. 填写赞助层级和描述\n3. 配置 FUNDING.yml：在仓库 .github/FUNDING.yml 中加 github: [username]\n4. 在 README 中添加 Sponsor 按钮'
      },
      {
        title: 'FUNDING.yml 配置',
        content: '在 .github/FUNDING.yml 中配置多个赞助平台：\n\ngithub: [username, orgname]\npatreon: username\nopen_collective: project-name\nko_fi: username\nbuy_me_a_coffee: username\ncustom: [\'https://example.com/donate\']\n\nGitHub 会在仓库页面右侧显示赞助按钮，支持所有配置的平台'
      }
    ],
    diagnosis: [
      {
        symptom: '仓库页面没有显示 Sponsor 按钮',
        cause: '没有配置 .github/FUNDING.yml，或 Sponsors 未审核通过',
        fix: '创建 .github/FUNDING.yml 文件，确保 Sponsors 账户已通过审核。检查 Settings → Sponsorship 是否已开启'
      },
      {
        symptom: '想支持项目但不想月付',
        cause: '不知道有一次性赞助选项',
        fix: '在 Sponsor 页面选择 "One-time" 选项卡，选择金额即可。不需要承诺月度赞助'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为你的开源项目配置 FUNDING.yml，支持 GitHub Sponsors 和 Buy Me a Coffee',
        hint: '放在 .github/ 目录下',
        answer: '.github/FUNDING.yml:\ngithub: your-username\nbuy_me_a_coffee: your-username'
      },
      {
        level: '进阶',
        task: '设计三个赞助层级，每个层级有差异化的回报',
        hint: '考虑不同赞助金额的维护者期望',
        answer: '☕ Supporter ($5/月)：README 感谢名单 + 赞助者 badge\n🚀 Booster ($25/月)：以上 + 早期版本访问 + 专属 Discord 频道\n💎 Enterprise ($100/月)：以上 + logo 展示 + 季度 roadmap 讨论 + 优先处理 issue'
      }
    ]
  },

  "bnai6R6pOq_L5CPdbVwMW": {
    mentalModel: 'GitHub Pages 是"零配置静态网站托管"——把 HTML/CSS/JS 或静态站点生成器的输出直接部署到 GitHub 的 CDN 上，免费获得一个公开 URL',
    handsOn: [
      {
        title: '用最简单的方式部署静态页面',
        cmd: 'mkdir -p docs && echo \'<html><body><h1>Hello Pages</h1></body></html>\' > docs/index.html && git add docs/ && git commit -m "Add docs"',
        output: '[main a1b2c3d] Add docs\n 1 file changed, 1 insertion(+)',
        explain: '在仓库创建 docs/ 目录放入静态文件。然后在 Settings → Pages → Source 选择 "Deploy from a branch"，选 main 分支 /docs 目录'
      },
      {
        title: '用 GitHub Actions 部署（推荐方式）',
        cmd: 'cat .github/workflows/pages.yml',
        output: 'name: Deploy Pages\non:\n  push:\n    branches: [main]\npermissions:\n  pages: write\n  id-token: write\njobs:\n  deploy:\n    environment:\n      name: github-pages\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/configure-pages@v4\n      - uses: actions/upload-pages-artifact@v3\n        with:\n          path: \'./dist\'\n      - uses: actions/deploy-pages@v4',
        explain: 'Actions 部署方式更灵活：可以在部署前运行构建步骤（如 npm run build），支持自定义构建流程。pages: write 权限是必须的'
      },
      {
        title: '自定义域名配置',
        cmd: 'echo \'docs.example.com\' > CNAME && git add CNAME && git commit -m "Add custom domain"',
        output: '[main b2c3d4e] Add custom domain\n 1 file changed, 1 insertion(+)',
        explain: '在仓库根目录创建 CNAME 文件写入自定义域名。然后在 DNS 配置中添加 CNAME 记录指向 username.github.io。GitHub 自动配置 HTTPS'
      },
      {
        title: 'Jekyll 站点（内置支持）',
        cmd: 'cat _config.yml',
        output: 'title: My Project Docs\ntheme: minima\nbaseurl: "/myproject"\nmarkdown: kramdown',
        explain: 'GitHub Pages 内置 Jekyll 支持。创建 _config.yml 和 Markdown 文件，push 后自动构建。不需要本地安装 Jekyll 或运行构建命令'
      }
    ],
    diagnosis: [
      {
        symptom: 'Pages 部署后显示 404',
        cause: 'index.html 不在选定的目录中，或文件名大小写不对（GitHub Pages 区分大小写）',
        fix: '确认文件在正确目录，文件名是 index.html（不是 Index.html），且分支设置正确'
      },
      {
        symptom: '自定义域名 HTTPS 证书不生效',
        cause: 'DNS 配置还没传播完成，或 CNAME 记录指向错误',
        fix: '用 dig 或 nslookup 确认 DNS 记录正确。CNAME 应指向 username.github.io（不是项目 URL）。HTTPS 证书可能需要 24 小时生效，可在 Settings → Pages 中 Enforce HTTPS'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 GitHub Pages 部署一个包含 index.html 和 style.css 的简单网站',
        hint: '创建文件 → push → 配置 Pages',
        answer: '1. 创建 docs/ 目录，放入 index.html 和 style.css\n2. git add docs/ && git commit -m "Add pages" && git push\n3. Settings → Pages → Source: Deploy from branch → main /docs\n4. 等待部署完成，访问 https://username.github.io/repo-name/'
      },
      {
        level: '进阶',
        task: '配置 GitHub Actions 工作流，在 push 到 main 时自动构建 React 应用并部署到 GitHub Pages',
        hint: '先 npm run build，再用 deploy-pages action',
        answer: 'steps:\n  - uses: actions/checkout@v4\n  - uses: actions/setup-node@v4\n    with: { node-version: 20 }\n  - run: npm ci && npm run build\n  - uses: actions/configure-pages@v4\n  - uses: actions/upload-pages-artifact@v3\n    with: { path: \'./build\' }\n  - uses: actions/deploy-pages@v4\n\n注意 React Router 需要配置 basename，Vite 需要设置 base 为仓库路径'
      }
    ]
  },

};
