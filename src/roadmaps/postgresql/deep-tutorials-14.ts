import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_14: Record<string, DeepTutorial> = {
  "Jy0G0ZnHPOM8hba_PbwuA": { mentalModel: 'Reviewing Patches——参与开源不只是写代码，审阅别人的补丁同样重要。读别人的代码、跑测试、验证场景、给反馈——这是成为高级开发者的必经之路。', sections: [{ title: '如何 Review PG Patch', content: '1) 理解 Patch 要解决的问题（读邮件列表中的讨论）2) 从源码编译 PG + 应用 Patch 3) make check（跑回归测试）确保不引入 Regression 4) 阅读 Patch 代码——理解改了什么、为什么改 5) 考虑边界情况——这个改动在极端场景下安全吗？6) 回复邮件列表——给出测试结果和代码审查意见。对 PG 这类 C 写的系统软件，Review 门槛较高但学到的也最多。' }],
    diagnosis: [
      { symptom: 'Review Patch 时 make check 报一堆 fail——不确定是否 Patch 问题', cause: '环境配置差异——不同操作系统/编译器版本致测试结果差异。或依赖库版本不匹配。', fix: '先在 clean 源码跑 make check 确保基础环境通过。应用 Patch 后对比。回归测试对环境差异敏感——检查 expected/*.out。' },
      { symptom: '看了一天 Patch 代码不明白改了什么', cause: 'PG C 代码历史长、内部依赖复杂——改动涉及 parser/executor/optimizer 多层。直接看 diff 难理解上下文。', fix: '先看邮件列表讨论——作者一般解释为什么改。git log --follow 看历史改动。关注测试文件——看测试用例了解预期行为。' },
    ],
  exercises: [{ level: '基础', task: '从 PG 的 CommitFest 中找一个状态为"Needs Review"的 Patch 来 Review', hint: 'commitfest.postgresql.org', answer: '访问 commitfest.postgresql.org → 找一个你感兴趣的 Patch → 阅读描述和讨论 → 如果涉及 SQL 层面可以编译测试 → 回复邮件列表给出反馈。' }] },
  "eQzMU_KyQmHJQ6gzyk0-1": { mentalModel: 'Writing Patches——给 PG 贡献代码是最高级的参与方式。从修复文档拼写、改进错误消息开始，到优化查询计划、添加新功能。每个 PG 开发者都是从一个小 Patch 开始的。', sections: [{ title: '提交 PG Patch 流程', content: '1) 从 PG Git 仓库 fork（git clone https://github.com/postgres/postgres）2) 修改代码+测试 3) 遵循 PG 代码风格（C89 + BSD 缩进 + 命名规约）4) git format-patch 生成 Patch 5) 发送到 pgsql-hackers 邮件列表 6) 等待 Review → 修改 → 重新提交 7) Committer 提交到主仓库（只有少数核心开发者有提交权限）。第一步建议：修改一条错误消息或文档——看似简单但要经历完整流程。' }],
    diagnosis: [
      { symptom: '提交的 Patch 几周没反应——没人 review', cause: '邮件列表流量大 Patch 可能被淹没。或提交格式不规范（非 git format-patch、无 commit message 说明）。', fix: '发送到 pgsql-hackers。Subject 以 [PATCH] 开头。正文说明问题、修复方式、测试方法。添加 Patch 到 CommitFest。' },
      { symptom: 'Patch 被 Reviewer 指出 style 问题——代码风格和 PG 不一致', cause: 'PG 严格 C 代码风格：BSD 缩进（4 空格）、snake_case 命名、errmsg("...") 错误消息格式。', fix: '阅读 PostgreSQL Coding Conventions 文档。用 pgindent 工具自动格式化。参考类似功能已有代码风格。' },
    ],
  exercises: [{ level: '基础', task: '从 PG 源码中找一条你觉得可以改进的错误消息，提交 Patch', hint: 'grep "ERROR" 看源码', answer: 'PG 源码 src/backend/ 目录下 grep "errmsg" 找到错误消息 → 改进措辞使其更清晰 → git format-patch → 发到 pgsql-hackers。' }] },
  "3pKaPjHfYbKMHQkRfV8R-": { mentalModel: 'PG 生态不是一天建成的——二十多年的开源协作、数百贡献者、数千 Extension、百万用户。了解它的历史和治理能帮你理解"为什么 PG 长这样"。', sections: [{ title: 'PG 历史关键节点', content: '1986：Michael Stonebraker 在 UC Berkeley 开始 Postgres 项目。1996：Postgres95 改名为 PostgreSQL。2001：PG 7.1 引入 WAL（预写日志）。2005：PG 8.0 引入 PITR（时间点恢复）+ 表空间。2010：PG 9.0 引入流复制+Hot Standby。2015：PG 9.5 引入 JSONB。2019：PG 12 引入 CTE 内联优化。2021：PG 14 引入管道查询模式。2023：PG 16 引入逻辑复制增强+更多并行。PG 每年 9-10 月发布一个大版本，稳定可靠，不赶时髦。' }],
    diagnosis: [
      { symptom: '学最新版 PG 功能在老项目中用不了', cause: 'PG 每年发大版本——新特性持续加入。维护的可能是 PG 11/12 老版本。', fix: '关注两个版本：维护版本+最新版本。PG 向后兼容好——最新版支持旧语法。新特性（如 MERGE 在 PG 15+）老版本不可用。渐进升级。' },
      { symptom: 'PG 大版本升级前担心兼容性——怕业务中断', cause: 'PG 大版本升级可能有废弃特性变更。测试不全致升级后应用报错。', fix: '升级前 pg_upgrade --check 列潜在问题。staging 环境完整回归测试。关注 Release Notes "Migration to Version X" 部分。检查扩展升级路径。' },
    ],
  exercises: [{ level: '基础', task: '说出 PG 近 5 年最重要的 3 个版本特性', hint: '并行/JSON/分区', answer: 'PG 12：CTE 自动内联、分区性能大幅提升。PG 14：管道查询、JSON 便利函数。PG 15：MERGE 语句、逻辑复制增强。PG 16：更多并行操作、双向逻辑复制。' }] },
  "XvJ5mR2kD8fN7sW1cA4zQ": { mentalModel: 'PG 的 contribute 文化不像某些项目"只有精英才能提交代码"——修复文档拼写和优化查询计划器同等欢迎。社区强调"show your work"：附上测试、演示、性能数据。', sections: [{ title: '如何成为 PG Contributor', content: '1) 从使用开始——在用 PG 的过程中发现 Bug/体验问题 2) 在邮件列表报告 Bug→ 附上可复现的最小用例 3) 尝试修复→ 提交 Patch 4) Review 别人的 Patch 5) 持续参与→ 被邀请成为 Committer。PG 的 Committer 只有约 20 人（全球），但 Contributor 有数千人。不需要成为 Committer 就能做出大贡献。' }],
    diagnosis: [
      { symptom: '想参与 PG 翻译但不知道去哪', cause: 'PG 中文翻译社区分散——不同版本/文档有不同翻译组。PO 翻译和社区文档翻译不同。', fix: 'PG 中文社区：postgres.cn 论坛和翻译组。官方翻译通过 PO 文件贡献。从翻译错误消息开始。联系现有翻译团队。' },
      { symptom: '报告 Bug 给 pgsql-bugs 被要求提供更多信息', cause: 'Bug 报告缺关键信息——PG 版本、OS、复现步骤、测试用例。核心开发者需能重现才能修复。', fix: 'Bug 报告模板：SELECT version();+OS+最小复现 SQL 脚本+期望 vs 实际结果。psql -E 回显元命令 SQL。复现从 CREATE TABLE 开始。' },
    ],
  exercises: [{ level: '基础', task: '为 PG 做一件力所能及的贡献', hint: '文档/翻译/报告Bug', answer: '三种入门方式：1) 在邮件列表帮助回答新手问题 2) 翻译 PG 文档到中文（PG 中文社区）3) 在使用中遇到 Bug→整理最小复现用例→发给 pgsql-bugs 邮件列表。' }] },
};