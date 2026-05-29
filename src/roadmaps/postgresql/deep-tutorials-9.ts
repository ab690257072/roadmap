import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_9: Record<string, DeepTutorial> = {
  "Id_17Ya-NUvoXxijAZvmW": {
    mentalModel: 'pg_probackup 是 PG 的企业级备份管理工具——支持增量备份（只备份变化的部分）、并行备份/恢复、备份验证、备份保留策略。比手工 pg_dump + cron 专业太多。',
    sections: [
      { title: 'pg_probackup 优势', content: '增量备份：全量备份后只备份改变的页（节省空间和时间）。并行：多线程备份恢复（加速）。验证：自动验证备份完整性。保留策略：按时间/数量自动清理旧备份。时间点恢复（PITR）：配合 WAL 归档恢复到任意时间点。对生产环境：pg_probackup 或 pgBackRest 二选一。pgBackRest 更流行（支持 S3/Azure 直接备份、加密、压缩更强）。' },
    ],
    diagnosis: [
      { symptom: 'pg_probackup 增量备份接近全量大小', cause: '大量 UPDATE 导致很多页被修改——增量备份是页级，UPDATE 修改的页也需备份。', fix: '对频繁 UPDATE 的表调低 fillfactor 减少页分裂。区分增量备份大小的根因是 INSERT 还是 UPDATE。' },
      { symptom: 'pg_probackup 验证报 corruption 但源库正常', cause: '备份过程中磁盘 IO 错误或网络传输损坏。或备份的 WAL 不完整。', fix: '重新备份验证。检查备份存储磁盘 SMART。备份存储用 RAID/ZFS 等容错文件系统。' },
    ],
  exercises: [
      { level: '基础', task: '为什么增量备份比每次全量备份快', hint: '只备份变化的', answer: '增量备份只备份上次全量以来变化的数据库页（page-level 增量）。如果数据库 1TB 但每天只改 1GB 数据，增量备份只需要保存 1GB，全量需要 1TB。' },
    ],
  },

  "5LLYxCj22RE6Nf0fVm8GO": {
    mentalModel: 'pgBackRest 是目前最流行的 PG 开源备份工具——支持并行、增量、压缩、加密、直接备份到 S3/Azure/GCS 对象存储。生产环境首选。',
    sections: [
      { title: 'pgBackRest 核心功能', content: '全量/增量/差异备份。并行备份和恢复（利用多核 CPU 和磁盘带宽）。块级增量（只备份变化的 8KB 数据页）。压缩：lz4/zstd 实时压缩。加密：备份文件加密。归档：备份到本地/S3/Azure，支持多仓库。恢复：快速时间点恢复（PITR）。异步归档：WAL 分段归档不影响主库性能。保留策略：按时间/数量保留备份。' },
    ],
    diagnosis: [
      { symptom: 'pgBackRest 备份 S3 速度远慢于本地', cause: 'S3 单连接带宽有限，默认并发度不够。或 S3 endpoint 网络延迟大。', fix: '增大 process-max 并行上传线程数。选择同区域的 S3 endpoint。' },
      { symptom: 'pgBackRest restore 完成但 PG 启动报 WAL 不完整', cause: '归档 WAL 段有缺失——archive-push 失败未检测到，或 async 模式下部分 WAL 未推送。', fix: '检查 archive-push 日志。用 archive-timeout 限制归档等待。恢复前 pgbackrest check 验证完整性。' },
    ],
  exercises: [
      { level: '进阶', task: '设计一个生产环境的备份策略：每周全量 + 每日增量 + WAL 持续归档', hint: 'pgbackrest --type=full / --type=incr + archive', answer: 'cron 每周日 pgbackrest --type=full，每天 pgbackrest --type=incr，WAL 归档持续进行。恢复时：停 PG → pgbackrest restore 到指定时间 → 启动 PG。RPO（最多丢多少数据）取决于 WAL 归档间隔。' },
    ],
  },

  "QHbdwiMQ8otxnVIUVV2NT": {
    mentalModel: 'Helm 是 K8s 的"应用商店"——把 PG 部署到 K8s 不用手写一堆 YAML，helm install postgresql bitnami/postgresql 一行搞定。适合 K8s 环境中的 PG 部署。',
    sections: [
      { title: 'Helm 部署 PG 的考量', content: 'Helm Chart 能快速部署 PG（含持久化存储/PVC/密码/监控）。但生产 PG 在 K8s 上需谨慎：1) 存储性能（网络存储 IOPS 可能不够）2) 主从切换（Patroni + K8s 的配合）3) 备份策略（pgBackRest + S3）。推荐：用 CloudNativePG 或 StackGres Operator 而非裸 Helm Chart——Operator 能管理 PG 集群生命周期（创建/扩缩/升级/备份/故障恢复）。' },
    ],
    diagnosis: [
      { symptom: 'Helm 部署的 PG 重启后数据丢失', cause: 'PVC 未正确配置——默认 Helm chart 的 PVC 未启用或 storageClass 不匹配致数据存临时存储。', fix: '确认 PVC 状态：kubectl get pvc。helm install 加 --set persistence.enabled=true。' },
      { symptom: 'Helm PG 性能远低于预期', cause: 'K8s 默认网络存储（NFS）IOPS 和延迟远不如本地 SSD。', fix: '用 SSD storageClass。监控磁盘 IO：kubectl exec -- iostat -x 1。考虑 local PV 或更快网络存储。' },
    ],
  exercises: [
      { level: '基础', task: '用 Helm 部署一个单实例 PG 用于开发测试', hint: 'helm install pg bitnami/postgresql', answer: 'helm repo add bitnami https://charts.bitnami.com/bitnami && helm install my-pg bitnami/postgresql --set auth.password=secret --set auth.database=mydb。部署后 kubectl get pods 查看 Pod 状态。' },
    ],
  },

  "nRJKfjW2UrmKmVUrGIfCC": {
    mentalModel: 'K8s Operator 是"自动化 PG 管理员"——不只是一个部署脚本，而是持续监控 PG 状态并自动处理的程序。主库挂了？Operator 自动切换。要扩容？Operator 自动处理。',
    sections: [
      { title: 'PG Operator 简介', content: 'CloudNativePG（CNPG）：CNCF 孵化项目，用 K8s 原生方式管理 PG。StackGres：功能更全（内置连接池、备份、监控）。Zalando Operator：老牌但暂停维护。Operator 管理：Cluster 定义（几主几从/存储大小/版本）、自动主从切换、自动备份（S3）、滚动升级、水平扩展（加只读副本）。Operator 模式 = K8s 中运行有状态应用的最佳实践。' },
    ],
    diagnosis: [
      { symptom: 'PG Operator 自动切换后新主库数据少', cause: '异步复制——旧主库 crash 前从库未收到最后一批 WAL。切换后丢失部分已提交事务。', fix: '评估同步复制：synchronous_commit=remote_apply。用 replication slot 监控延迟。' },
      { symptom: 'Operator 管理的 PG 升级操作失败数据库不可用', cause: 'Operator 升级逻辑与 PG 实际状态不一致——升级时从库未完全同步或脚本超时。', fix: '升级前验证集群状态。确保所有从库延迟 <1s。先升级从库验证→再切换主库。升级前全量备份。' },
    ],
  exercises: [
      { level: '基础', task: '为什么在 K8s 中运行 PG 不用 Deployment 而用 Operator', hint: '有状态 vs 无状态', answer: 'Deployment 管无状态 Pod——挂了新建即可。PG 是有状态应用——每个 Pod 有自己的数据/身份（主/从），不能随便删了重建。Operator 理解 PG 的运维逻辑（主从关系、复制配置、故障切换顺序），自动处理这些复杂流程。' },
    ],
  },

  "09QX_zjCUajxUqcNZKy0x": {
    mentalModel: 'PG 进阶话题是"从会开车到能改装车"的跨越——不是日常必须，但遇到极端场景（海量数据、超高并发、特殊数据类型）时这些是你的救命稻草。',
    sections: [
      { title: '进阶路线图', content: '已覆盖：分区表 / 窗口函数 / CTE & 递归 CTE / 各种索引类型 / 锁机制 / 流复制 & 逻辑复制 / 备份恢复 / 监控。进阶话题继续：JIT 编译（PG 12+）、并行查询、外部数据包装器（FDW → 在 PG 里直接查 MySQL/Redis/CSV）、表继承（了解即可——分区表替代）、Citus 分布式、PG 源码定制。这些遇到具体场景时再深入，不用现在全学。' },
    ],
    diagnosis: [
      { symptom: '学了 PG 高级功能但生产环境用不上', cause: '高级功能（JIT/表继承/FDW/Citus）是特定场景解决方案——80% 场景基础功能就够了。', fix: '优先深耕基础和中级功能——分区表/窗口函数/CTE/索引优化/VACUUM 调优。高级功能遇到具体场景再深入。' },
      { symptom: 'PG 功能太多不知道学习重点', cause: 'PG 功能范围极广——从基础 SQL 到内核 C 代码。不加选择学导致广度有余深度不足。', fix: '按需学习：日常开发→SQL/索引/EXPLAIN；性能优化→VACUUM/统计信息；运维→备份/复制/监控；架构→分区/分片/连接池。' },
    ],
  exercises: [
      { level: '基础', task: '从本书已学内容中选 3 个你最想在生产环境实践的高级功能', hint: '分区/逻辑复制/GIN 索引？', answer: '个人选择。推荐：1) 分区表——大表管理必备 2) pg_stat_statements + EXPLAIN 分析——性能优化利器 3) pgBackRest 备份——数据安全底线。' },
    ],
  },

  "rNp3ZC6axkcKtAWYCPvdR": {
    mentalModel: '简单有状态部署 = 一台机器跑 PG + 定时备份 + 监控。不要一上来就搞 K8s Operator + Patroni + 3 副本 + 异地容灾。先让它稳定跑起来，再逐步加固。',
    sections: [
      { title: '生产就绪清单', content: '最小生产部署：1) PG 配置调优（shared_buffers/work_mem/effective_cache_size）2) 定时备份（pg_dump 或 pgBackRest）3) 备份验证（定期恢复测试）4) 基础监控（pg_stat_statements + Prometheus exporter）5) 磁盘空间监控告警 6) 日志记录（log_statement=ddl + log_duration）7) 连接池（PgBouncer）。这 7 条做到了，你的 PG 就比 90% 的部署更稳。' },
    ],
    diagnosis: [
      { symptom: '最小部署清单部署后一个月磁盘满了', cause: '含定时备份但无自动清理——每天备份占满磁盘。或日志文件未轮转持续增长。', fix: "备份保留策略：最近 7 天每天+最近 4 周每周+最近 6 月每月。日志轮转：log_rotation_age='1d'。磁盘告警设 75%。" },
      { symptom: '最小部署清单部署后 PG 不明原因重启', cause: 'OOM killer——Linux 内存不足杀 PG 进程。PG 被杀后自动重启但期间连接全断。', fix: '检查 dmesg | grep -i oom。调整 vm.overcommit_memory=2。降低 work_mem 和 max_connections。监控内存使用。' },
    ],
  exercises: [
      { level: '基础', task: '列出 PG 生产环境的 5 项必备配置', hint: '备份/监控/连接池/日志/调参', answer: '1) shared_buffers 调整为内存 25% 2) pg_stat_statements 扩展 3) PgBouncer 连接池 4) 定时 pg_dump/pgBackRest 备份 5) Prometheus + Grafana 监控告警。' },
    ],
  },

  "NhodBD8myUTljNdn3y40I": {
    mentalModel: 'PG 是社区驱动的开源项目——不是某家公司的产品。参与社区开发不只是写 C 代码（虽然那最硬核），还包括报告 Bug、测试补丁、完善文档、翻译、回答问题。',
    sections: [
      { title: '如何参与 PG 社区', content: '1) 邮件列表（pgsql-general/pgsql-hackers）：提问题、讨论、提交补丁 2) CommitFest：每两个月一次，评审和提交补丁 3) PGCon/Postgres Vision 会议 4) 翻译和文档贡献 5) 扩展开发：写开源 PG 扩展。就算不参与核心开发，在邮件列表帮人回答问题、提供可复现的 Bug 报告就是对社区的大贡献。' },
    ],
    diagnosis: [
      { symptom: '在 pgsql-general 邮件列表提问没人回复', cause: '问题太泛无具体信息。社区期望提供 PG 版本、EXPLAIN 输出、表结构、复现步骤。', fix: '提供完整信息：SELECT version(); EXPLAIN(ANALYZE,BUFFERS)输出；\d+ 表结构；复现步骤。参考 PG 报告问题指南。' },
      { symptom: '想给 PG 贡献代码但不知道从哪开始', cause: 'PG 用 C 写、代码量 150 万行——入门贡献不限于 C 代码。', fix: '从文档完善开始。报告可复现 Bug。Review CommitFest 中的 Patch。从简单错误消息改进或新增回归测试写起。' },
    ],
  exercises: [
      { level: '基础', task: '订阅 pgsql-general 邮件列表并浏览最近的讨论主题', hint: 'https://www.postgresql.org/list/', answer: '访问 lists.postgresql.org，订阅 pgsql-general（新手友好）。看最近一周的讨论——你会发现 PG 的全球开发者就在你面前讨论问题。' },
    ],
  },
};