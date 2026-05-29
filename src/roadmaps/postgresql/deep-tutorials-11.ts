import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_11: Record<string, DeepTutorial> = {
  "pvj33qDiG3sSjtiW6sUra": {
    mentalModel: 'top 是 Linux 的"任务管理器"——看哪些进程吃了 CPU 和内存。PG 的 backend 进程在 top 里叫 postgres: user dbname。一堆 postgres 进程比一个 postgres 进程占得多很正常。',
    handsOn: [
      { title: '用 top 监控 PG 进程', cmd: 'top -c -p $(pgrep -d, postgres)', output: 'PID  %CPU %MEM  COMMAND\n1234  85.0  2.3  postgres: app mydb SELECT\n1235   5.0  1.5  postgres: app mydb idle', explain: '-c 显示完整命令（可以看到 SQL）。注意 %CPU 高的进程 → pg_stat_activity 查详情。VACUUM 和慢查询是主要 CPU 消费者。' },
    ],
    diagnosis: [
      { symptom: 'top 显示 PG 进程 %MEM 远超预期', cause: 'work_mem 积累——某 session 跑了大量排序。或 shared_buffers 使用大页 top 不准确统计。', fix: '用 pg_top（PG 专用 top）更准确显示内存。检查 work_mem 设置和并发排序。pmap -x PID 看 per-process 内存。' },
      { symptom: 'top 中 PG COMMAND 不完整看不到 SQL', cause: 'top 默认截断 COMMAND 列宽度。track_activity_query_size 限制 query 列长度。', fix: 'top -c 显示完整命令。按 c 键切换 COMMAND 显示。增大 track_activity_query_size。用 pg_stat_activity 取代 top。' },
    ],
  exercises: [
      { level: '基础', task: '用 top 找出当前最占 CPU 的 PG 进程', hint: 'top -c | grep postgres', answer: 'top -c -p $(pgrep -d, postgres) 后按 Shift+P 按 CPU 排序。对 %CPU 高的 PID → SELECT * FROM pg_stat_activity WHERE pid = PID; 看是什么查询。' },
    ],
  },

  "TytU0IpWgwhr4w4W4H3Vx": {
    mentalModel: 'pgcenter 是 PG 的"实时仪表盘"——把 pg_stat_activity/pg_stat_statements/系统信息汇总成类似 top 的 TUI 界面。不需要配 Grafana，一个命令看全局。',
    sections: [
      { title: 'pgcenter 使用', content: '安装：pgcenter 是 Go 写的单二进制文件。连接：pgcenter top -h localhost -U postgres mydb。界面分几个面板：Statements（当前活跃查询）/ Activity（连接状态分布）/ Tables（表 IO 统计）/ Indexes（索引使用统计）/ System（CPU/内存/IO）。pgcenter report 生成性能报告。适合快速排查问题——比一遍遍跑 SQL 查 pg_stat_* 方便太多。' },
    ],
    diagnosis: [
      { symptom: 'pgcenter top 连接 PG 失败报 authentication error', cause: 'pgcenter 使用当前 OS 用户连接本地 PG——认证方式和 pg_hba.conf 不匹配。', fix: 'pgcenter top -h localhost -U postgres -d mydb。确保 pg_hba.conf 允许连接。或编辑 ~/.pg_service.conf。' },
      { symptom: 'pgcenter 和 pg_stat_statements 指标不一致', cause: 'pgcenter 显示当前快照值——pg_stat_statements 显示历史累计值。', fix: '理解两者差异：pgcenter 像 top（瞬时），pg_stat_statements 像统计报表（累计）。两者互补非替代。' },
    ],
  exercises: [
      { level: '基础', task: 'pgcenter 和 pg_stat_statements 的区别是什么', hint: '一个是展示工具，一个是数据源', answer: 'pg_stat_statements 是 PG 扩展——它采集 SQL 统计数据。pgcenter 是客户端工具——它读取 pg_stat_statements 和其他 pg_stat_* 视图并可视化展示。两者互补：pg_stat_statements 提供数据，pgcenter 让数据好看。' },
    ],
  },

  "V2iW8tJQXwsRknnZXoHGd": {
    mentalModel: 'pgBadger 是"把 PG 日志变报表"的工具——它分析 PostgreSQL 日志文件生成 HTML 报告：慢查询 Top N、连接数曲线、错误分布、VACUUM 统计。',
    sections: [
      { title: 'pgBadger 使用场景', content: 'pgBadger 依赖 PG 日志（需要配置 log_min_duration_statement 记录慢查询）。报告包含：总体统计（查询数/错误数/连接数）、慢查询排名、按时间分布、按用户/数据库分组。适合做"每周 PG 性能回顾"——pgBadger -d last_week.log -o report.html，浏览器打开直接看。' },
    ],
    diagnosis: [
      { symptom: 'pgBadger 只生成空报告', cause: 'PG 日志配置不满足 pgBadger 要求——log_min_duration_statement 未设、log_line_prefix 缺必要字段。', fix: '检查配置：log_destination=stderr; log_min_duration_statement=100; log_line_prefix=%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h; log_checkpoints=on。' },
      { symptom: 'pgBadger 报告慢查询排名第一的 SQL 其实不慢', cause: 'log_min_duration_statement=0 记录所有查询——毫秒级查询也显示在慢查询列表中。', fix: '调整阈值为有意义的慢查询阈值（如 500ms）。关注 >1s 的查询。pgBadger incremental 模式分析趋势。' },
    ],
  exercises: [
      { level: '基础', task: '配置 PG 记录慢查询到日志以便 pgBadger 分析', hint: 'log_min_duration_statement', answer: 'ALTER SYSTEM SET log_min_duration_statement = 100; （记录耗时 > 100ms 的 SQL）。SELECT pg_reload_conf(); 重启日志收集后，用 pgBadger 分析生成的日志。' },
    ],
  },

  "WiOgUt5teG9UVRa6zo4h3": {
    mentalModel: 'check_pgactivity 是 Nagios/Naemon 的 PG 监控插件——检查各种指标（连接数/复制延迟/慢查询/VACUUM状态）并返回 OK/WARNING/CRITICAL。不是最现代的方案，但老牌企业还在用。',
    sections: [
      { title: 'Nagios + PG 监控', content: 'Nagios 是传统企业监控（比 Zabbix 更老）。check_pgactivity 覆盖：连接数检查、WAL 延迟、流复制延迟、autovacuum 状态、备份年龄。现代替代：Prometheus + postgres_exporter + Grafana。但如果公司已有 Nagios → 装这个插件接入即可。' },
    ],
    diagnosis: [
      { symptom: 'Nagios 监控 PG 连接数一直 OK 但实际连接满了', cause: 'check_pgactivity 默认检查有延迟——采集间隔内连接数暴涨可能漏掉。', fix: '降低 Nagios 检查间隔到 1 分钟。PG 端 pg_stat_statements 持续记录。告警用连接使用率 80% 触发而非 100%。' },
      { symptom: 'Nagios 告警太多——每 PG 指标一个告警邮件轰炸', cause: 'Nagios 默认每服务独立告警——PG 挂了所有依赖指标同时告警。', fix: '配置 service dependencies——PG 进程 DOWN 后抑制其他 PG 告警。升级 Prometheus+Alertmanager——支持告警分组抑制。' },
    ],
  exercises: [
      { level: '基础', task: 'Prometheus 替代 Nagios 的主要原因是什么', hint: '拉模型 vs 推模型', answer: 'Prometheus 的拉模型（pull）+ 多维标签（label）+ PromQL 查询语言比 Nagios 的固定检查脚本灵活太多。而且 Prometheus 是云原生标准——K8s/Grafana/Alertmanager 生态完整集成。' },
    ],
  },

  "DDPuDDUFxubWZmWXCmF7L": {
    mentalModel: 'check_pgbackrest 类似 check_pgactivity 但专门检查 pgBackRest 备份状态——上次备份是否成功、备份有多旧、WAL 归档是否正常。防止"以为备份在跑其实早就失败好几天了"。',
    sections: [
      { title: '备份监控的重要性', content: '备份失败的监控比备份本身还重要。如果备份已经偷偷失败了一周而没人知道 → 出故障时你只有一周前的备份（丢了 7 天数据）。必须监控：1) 上次备份完成时间（过期告警 > 24h）2) 上次备份状态（FAILED 告警）3) WAL 归档延迟（延迟 > 5min 告警）4) 备份存储空间（可用空间 < 20% 告警）。' },
    ],
    diagnosis: [
      { symptom: 'check_pgbackrest 告警最后备份是 36 小时前但脚本在跑', cause: '备份脚本跑了但失败——pgBackRest 写了错误日志但脚本未检查退出码。告警检测到最新成功备份已超时。', fix: '检查 pgBackRest 日志：pgbackrest info 看最新备份状态。脚本加错误检查：if ! pgbackrest backup; then alert; fi。' },
      { symptom: 'WAL 归档延迟告警触发了但 PG 一切正常', cause: '网络抖动致短暂 WAL 积压——短暂延迟后已自动赶上。告警阈值太敏感。', fix: '告警加持续时间：WAL 归档延迟>30s 持续 10 分钟才告警。确认非持续失败。用 pgBackRest archive-get 定期测试。' },
    ],
  exercises: [
      { level: '基础', task: '设计一个备份监控方案的告警规则', hint: '完成时间/状态/空间', answer: '1) 上次全量备份 > 25h 告警（每天全量备份）2) 上次增量备份 > 2h 告警（每 1-2h 增量）3) WAL 归档延迟 > 10min 告警（PITR 最多丢 10min 数据）4) 备份存储 < 20% 告警 5) 备份状态 != OK 告警。' },
    ],
  },

  "IkB28gO0LK1q1-KjdI9Oz": {
    mentalModel: 'Consul 是分布式系统的"电话簿+健康检查员"——服务注册自身到 Consul、其他服务从 Consul 发现地址、Consul 持续健康检查。在 PG 高可用中 Consul 常和 Patroni 配合存储集群状态。',
    sections: [
      { title: 'Consul + Patroni', content: 'Patroni 支持多种 DCS（分布式配置存储）作为 backend——Consul/etcd/ZooKeeper。Consul 优势：自带健康检查（HTTP/TCP/脚本）、服务发现（DNS/HTTP API）、多数据中心。配置：Patroni 配置中 dcs.type = consul，Consul 集群自动选主、存集群成员。选 DCS 一般：K8s 环境用 K8s API，非 K8s 环境用 etcd 或 Consul。' },
    ],
    diagnosis: [
      { symptom: 'Consul 集群重启后 Patroni 无法选举 Leader', cause: 'Consul 集群重启 session 全部失效——Patroni 的 consul session 过期需重新初始化。', fix: '确保 Consul 集群启动且 quorum 达成。Patroni 重启后自动创建新 session。patronictl resume 手动恢复。' },
      { symptom: 'Consul 健康检查误报 PG 不健康导致反复切换', cause: 'Consul 健康检查超时或 TG 响应慢——check interval 太短未考虑延迟波动。', fix: '调大 check interval 和 timeout。Patroni REST API 健康检查不被慢 SQL 阻塞——用 ttl 模式。' },
    ],
  exercises: [
      { level: '进阶', task: 'Consul、etcd 和 ZooKeeper 分别适合什么场景做 Patroni 的 DCS', hint: 'K8s/已有基础设施', answer: 'K8s 环境：直接用 K8s API（不需要额外 DCS）。已有 Consul 基础设施（如 Nomad 环境）：用 Consul。已有 etcd：用 etcd（和 K8s 共用 etcd 也行）。ZooKeeper：老系统还有但新项目不推荐（太重）。' },
    ],
  },

  "ISuU1lWH_zVDlCHnWXbf9": {
    mentalModel: 'pgCluu 是"PG 集群利用率工具"——收集 PG 和 OS 的性能指标生成报告（HTML + 图表）。和 pgBadger 专注日志不同，pgCluu 专注"系统级性能指标"。',
    sections: [
      { title: 'pgCluu vs pgBadger', content: 'pgBadger：分析 PG 日志（SQL 级别）。pgCluu：分析 PG 的系统视图和 OS 指标（连接/IO/内存/CPU）。两者互补——需要分析"为什么慢查询慢"时结合用：pgBadger 告诉你哪些 SQL 慢，pgCluu 告诉你系统当时 CPU/IO/连接情况。' },
    ],
    diagnosis: [
      { symptom: 'pgCluu 采集期间 PG 性能明显下降', cause: 'pgCluu 同时采集大量 OS 和 PG 指标——sar 和采集脚本在高负载系统上额外开销大。', fix: '低负载时段采集。降低采集频率：pgcluu -W 60。对持续监控用 Prometheus——pull 模型开销更低。' },
      { symptom: 'pgCluu HTML 报告加载极慢', cause: '报告含大量 SVG 图表——浏览器渲染大量 DOM 节点慢。数据量大致报告文件几百 MB。', fix: '限制采集时长：-D 3600 只采集 1 小时。导出时过滤不关心的指标。大报告用 pgBadger+pgCluu 组合分开加载。' },
    ],
  exercises: [
      { level: '基础', task: '什么时候用 pgBadger、什么时候用 pgCluu', hint: 'SQL 级别 vs 系统级别', answer: '想知道"哪些 SQL 最慢" → pgBadger（分析日志中的 SQL 耗时）。想知道"数据库为什么整体变慢" → pgCluu（系统级指标：CPU/IO/连接/锁等待组合分析）。' },
    ],
  },

  "VekAMpcrugHGuvSbyPZVv": {
    mentalModel: 'OLTP（在线事务处理）就是你要处理的 90% 场景——用户下单、查询订单、修改资料。大量并发小事务、读写都有、需要 ACID。PG 天生为 OLTP 优化。',
    sections: [
      { title: 'OLTP vs OLAP', content: 'OLTP：每秒数千个小事务（INSERT/UPDATE/SELECT 单行）。索引多用 B-Tree、表结构高度范式化、连接池重要。OLAP：对海量历史数据做大查询（GROUP BY/JOIN/聚合/窗口函数）。索引用 BRIN/列存更合适、反范式化常见、结果集巨大。PG 本身是 OLTP 数据库（行存），OLAP 场景比 ClickHouse/DuckDB 慢很多。但 PG 可以"客串"OLAP——用物化视图/并行查询/窗口函数做中等复杂度的分析。' },
    ],
    diagnosis: [
      { symptom: 'PG 混用 OLTP 和 OLAP 后 OLTP 查询突然变慢', cause: 'OLAP 大查询扫描大量数据——占用 shared_buffers 和 IO，把 OLTP 热点数据挤出缓存。', fix: '分离 OLTP/OLAP——用流复制只读从库跑分析查询。用物化视图+预聚合减少实时 OLAP 负载。监控 OLAP 查询避开 OLTP 高峰。' },
      { symptom: 'PG OLAP 聚合比 ClickHouse 慢 100 倍', cause: 'PG 是行存（row-based）——OLAP 只需少数列但 PG 每次读整个行。ClickHouse 是列存只读需要的列。', fix: '合理预期：PG 适合中小型 OLAP（<1TB）。>1TB 且延迟敏感→同步数据到 ClickHouse/DuckDB。PG 也支持列存扩展 cstore_fdw。' },
    ],
  exercises: [
      { level: '基础', task: '给出一个 OLTP 和一个 OLAP 查询的例子', hint: '下单 vs 月度统计', answer: 'OLTP：UPDATE accounts SET balance = balance - 100 WHERE id = 1;（单行操作、毫秒级、高并发）。OLAP：SELECT date_trunc(\'month\', created_at), SUM(amount) FROM orders WHERE created_at > now() - interval \'1 year\' GROUP BY 1 ORDER BY 1;（扫描百万行、秒级、偶尔执行）。' },
    ],
  },
};