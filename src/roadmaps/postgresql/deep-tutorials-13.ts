import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_13: Record<string, DeepTutorial> = {
  "3V1PPIeB0i9qNUsT8-4O-": { mentalModel: 'PgBouncer 替代品有多种选择——Odyssey（Yandex 开发，多线程+更灵活的路由）、pgpool-II（不只是连接池还有读写分离/负载均衡）、Heimdall（新项目）。选型关键看功能需求。', sections: [{ title: '连接池选型', content: 'PgBouncer：最轻量、单线程、transaction pooling 模式成熟、最广泛使用。pgpool-II：功能多（连接池+读写分离+负载均衡+查询缓存），但重、复杂、出问题难排查。Odyssey：多线程性能好、支持更灵活的路由规则、较新。推荐：先用 PgBouncer（简单可靠），如果需要读写分离用 pgpool-II 但要做好运维准备。' }],
    diagnosis: [
      { symptom: 'pgpool-II 读写分离后读请求仍走主库', cause: '默认读请求也走主库——需显式配置 load balance。或从库延迟过大被自动排除。', fix: '配置 pgpool.conf：load_balance_mode=on。设 delay_threshold。SHOW POOL_NODES; 查看各节点状态。' },
      { symptom: 'pgpool-II 自身成为性能瓶颈', cause: 'pgpool-II 单进程模型——高并发（>200）时自身 CPU 100%。所有请求经过增加网络跳转延迟。', fix: '多 pgpool-II 实例+VIP/HAProxy 分流。如果只需连接池用 PgBouncer（更轻量）。读写分离也可应用层实现。' },
    ],
  exercises: [{ level: '基础', task: '什么场景下 pgpool-II 比 PgBouncer 更合适', hint: '读写分离', answer: '当需要自动读写分离（写走主库、读走从库）时——pgpool-II 内置了这个能力。PgBouncer 只做连接池，读写分离需要在应用层或中间件实现。' }] },
  "MwLlVbqceQ-GTgPJlgoQY": { mentalModel: '流复制（Streaming Replication）是 PG 的主从同步机制——主库把 WAL 记录持续发送给从库，从库实时重放 WAL 保持同步。就像"影子跟读"——主库做什么，从库跟着做一样的。', sections: [{ title: '流复制配置', content: '主库：创建复制用户 CREATE ROLE repl WITH LOGIN REPLICATION PASSWORD \'pw\'; 允许 pg_hba.conf 中 repl 用户的 replication 连接。从库：pg_basebackup -h primary -D /data -R 获取基础备份。创建 standby.signal 文件（PG 12+）或 recovery.conf（PG 11-）。primary_conninfo 指向主库。启动从库→自动连接主库→持续同步 WAL。' }],
    diagnosis: [
      { symptom: '流复制从库 pg_basebackup 后启动报 timeline 不一致', cause: 'pg_basebackup 期间主库发生 timeline 变更（如 pg_rewind 后或之前是 recovery 状态）。', fix: '确保用最新 timeline。必要时重新 pg_basebackup。检查主库：SELECT timeline_id FROM pg_control_checkpoint();' },
      { symptom: '流复制从库突然变为主库——脑裂', cause: '无 fencing 机制——原主库短暂网络隔离后以为自己是主库，同时新主库已提升。两个主库接受写入致数据不一致。', fix: '用 Patroni 管理——自动 fencing 旧主库。配置 synchronous_commit=remote_write。脑裂后用 pg_rewind 对齐。' },
    ],
  exercises: [{ level: '进阶', task: '配置一个异步流复制的主从环境', hint: 'wal_level=replica + pg_basebackup + standby.signal', answer: '主库：wal_level=replica, max_wal_senders=5。从库：pg_basebackup -h primary -D /data -R。从库 data 目录 standby.signal 自动生成，启动即可。SELECT * FROM pg_stat_replication; 确认复制状态。' }] },
  "Q_B9dlXNMXZIRYQC74uIf": { mentalModel: 'Salt（SaltStack）是一个基础设施自动化工具——用 YAML 描述服务器配置，批量管理多台服务器。和 Ansible 的竞争关系。PG 部署可以用 Salt 管理配置一致性。', sections: [{ title: 'Salt vs Ansible', content: 'Ansible：SSH 连接 → 无需 agent、YAML playbook、学习简单。Salt：需要装 minion agent、用 ZeroMQ 通信（比 SSH 快）、YAML + Jinja、状态模块丰富。选型：小团队用 Ansible（简单）、大规模运维用 Salt（性能更好）。两者都能管理 PG 配置——确保所有 PG 实例的 postgresql.conf/pg_hba.conf 配置一致。' }],
    diagnosis: [
      { symptom: 'Salt 管理 PG 配置后 postgresql.conf 被覆盖修改丢失', cause: 'Salt state 文件中 postgresql.conf 是完整模板——错误覆盖了手动修改。', fix: '建议用 file.blockreplace 或 lineinfile 管理局部配置。或用 conf.d/ 目录模式。' },
      { symptom: 'Salt minion 大批量执行时部分节点超时', cause: 'Salt master 默认超时不够——同时几十节点下发命令时网络延迟和负载差异致超时。', fix: '增大 Salt timeout：salt -t 60 '*' state.apply。分批执行。用 Salt Orchestration 控制并发度。' },
    ],
  exercises: [{ level: '基础', task: 'Ansible 相比 Salt 最大的优势是什么', hint: '不需要装什么', answer: 'Ansible 不需要在被管理机器上装 agent——通过 SSH 连接执行命令。这意味着你可以用 Ansible 管理任何能 SSH 的机器，不需要预先安装任何软件。' }] },
  "RqSfBR_RuvHrwHfPn1jwZ": { mentalModel: 'Ansible 是"基础设施即代码"中最简单易上手的工具——用 YAML 写 playbook，用 inventory 管理主机列表，用 ssh 执行任务。部署 PG 集群只需一个 playbook。', sections: [{ title: 'Ansible 管理 PG', content: '典型 PG Ansible playbook 包含：1) 安装 PG（apt/yum 安装指定版本）2) 配置 postgresql.conf（用 template 模块渲染 Jinja2 模板）3) 配置 pg_hba.conf 4) 创建用户/数据库（postgresql_user/postgresql_db 模块）5) 配置备份 cron 6) 配置监控 exporter。Ansible Galaxy 有现成的 PG role（如 geerlingguy.postgresql），但生产环境建议自己写——理解每一步。' }],
    diagnosis: [
      { symptom: 'Ansible PG playbook 重复执行每次都安装 PG', cause: '使用 shell 模块而非 apt 模块——apt 模块 idempotent（已安装则跳过），shell 不检查状态。', fix: '用 Ansible 原生模块：apt: name=postgresql-16 state=present。避免用 shell 模块执行 apt 命令。' },
      { symptom: 'Ansible template 渲染 postgresql.conf 把变量写了变量名', cause: 'Jinja2 模板 {{ variable }} 和 PG 配置值冲突——模板引擎将 PG 占位符当作 Jinja 变量解析。', fix: '对 PG 配置中 {{ }} 转义：{% raw %}{{ PG 配置 }}{% endraw %}。或用 lineinfile 修改配置。测试渲染结果。' },
    ],
  exercises: [{ level: '基础', task: 'Ansible 用什么语言写配置', hint: 'YAML', answer: 'Ansible Playbook 用 YAML 写。例：- hosts: db_servers → tasks: → - name: Install PostgreSQL → apt: name=postgresql-16 state=present。' }] },
  "7EHZ9YsNjCyTAN-LDWYMS": { mentalModel: 'Chef 和 Puppet 是更老牌的配置管理工具（比 Ansible 更早）——用 Ruby（Chef）或自有 DSL（Puppet）写配置。现在新项目倾向 Ansible，Chef/Puppet 主要是老系统维护。', sections: [{ title: '配置管理工具演进', content: '第一代（Puppet/Chef）：agent 模式、有中央服务器、学习曲线陡。第二代（Ansible/Salt）：YAML 配置、更简单、无 agent（Ansible）或更快通信（Salt）。现代（Terraform/Pulumi）：不只是配置管理，是基础设施即代码——管理云资源（VM/网络/存储）而非安装软件。PG 部署推荐：云环境用 Terraform 定义资源 + Ansible 管理配置。' }],
    diagnosis: [
      { symptom: 'Chef recipe 执行慢——每次 chef-client 跑 10 分钟', cause: 'Chef Agent 周期运行——检查所有 resource 状态。大量 resource 或 systemd 检查消耗时间。', fix: '优化 recipe——条件判断 skip 不需要的 resource。增大 chef-client 运行间隔。新项目考虑 Ansible——无 agent 更轻量。' },
      { symptom: 'Terraform+Ansible 配合时 Terraform 创建资源 Ansible 找不到', cause: 'Terraform 创建 VM 后 IP/hostname 未传给 Ansible inventory 或 SSH 密钥分发延迟。', fix: 'Terraform output 导出 IP。local-exec 调用 Ansible。或 Terraform 动态 inventory 脚本：terraform-inventory。' },
    ],
  exercises: [{ level: '基础', task: 'Terraform 和 Ansible 的分工是什么', hint: '创建 vs 配置', answer: 'Terraform：创建基础设施资源（云 VM/网络/磁盘/安全组）。Ansible：在已创建的资源上安装和配置软件（装 PG/调参数/建库）。Terraform provision + Ansible configure = 全自动化。' }] },
  "e39bceamU-lq3F2pmLz6v": { mentalModel: 'Puppet 是配置管理的"老祖宗"之一——2005 年诞生。现在学它不是为了用它，而是为了理解"为什么 Ansible 后来居上"。很多金融/政府老系统还在用 Puppet。', sections: [{ title: 'Puppet 的现状', content: 'Puppet 使用自有 DSL（不是 YAML）、agent 模式（每台机器跑 puppet agent 定期从 master 拉配置）、声明式（你描述最终状态，Puppet 决定怎么达到）。现在新项目很少选 Puppet——Ansible 更简单、不需要 agent。但遇到 Puppet 管理的 PG 环境，还是要看得懂配置。' }],
    diagnosis: [
      { symptom: 'Puppet 管理 PG 配置不一致——三台服务器三种配置', cause: 'Puppet agent 运行间隔不同——部分节点上次运行时出错致部分配置未应用。或 facts 在各节点返回值不同。', fix: '检查各节点 Puppet agent 日志。手动强制执行：puppet agent -t。PuppetDB 查询配置差异。考虑迁移 Ansible。' },
      { symptom: 'Puppet 报 "Could not find class postgresql::server"', cause: 'Puppet module 未安装或 module path 不正确。或版本不兼容。', fix: 'puppet module list | grep postgresql。puppet module install puppetlabs-postgresql --version 8.0.0。检查 Puppetfile 中 modulepath。' },
    ],
  exercises: [{ level: '基础', task: 'Puppet 的"声明式"和 Ansible 的"命令式"有什么区别', hint: '描述结果 vs 描述步骤', answer: 'Puppet 声明式：你写"PG 版本应该是 16"，Puppet 自己判断如何达到（装哪个包、怎么配）。Ansible 命令式：你写"apt install postgresql-16"然后"template postgresql.conf"，一步步指定。声明式更易维护但更不灵活。' }] },
  "507TY35b8iExakbBMrHgZ": { mentalModel: 'PG 的统计信息 + 报告功能让你知道"数据库这段时间在干嘛"——pg_stat_database/pg_stat_user_tables/pg_stat_user_indexes 是了解"数据库工作量"的窗口。', sections: [{ title: '统计报告', content: 'pg_stat_database：每个数据库的 stats（提交/回滚事务数、块读取数、元组操作数）。pg_stat_user_tables：每张表的 scans 次数、ins/upd/del 行数、最后 VACUUM/ANALYZE 时间。pg_stat_user_indexes：每个索引的使用情况（idx_scan=0 的索引占了空间但从没用过→可以删！）。pg_stat_bgwriter：后台写进程统计。定期看这些视图→发现趋势（索引没用到、表持续膨胀、某张表读取量暴增）。' }],
    diagnosis: [
      { symptom: 'pg_stat_user_indexes 所有 idx_scan=0——但查询用了索引', cause: '计数器 PG 重启后清零——刚重启或 stats collector 未启动，计数器从 0 开始。', fix: '是累积计数器——持续运行一段时间后查看。执行几条查询后等 1 分钟再看。pg_stat_reset() 可手动清零——确认无人误调用。' },
      { symptom: 'pg_stat_user_tables last_vacuum 和 last_autovacuum 都在几周前', cause: 'autovacuum 可能关闭或阈值太高——表变更量未达阈值所以不 VACUUM。死元组持续增长。', fix: '检查 autovacuum 配置：SHOW autovacuum; ALTER TABLE t SET(autovacuum_vacuum_scale_factor=0.01); 手动 VACUUM VERBOSE 看死元组。' },
    ],
  exercises: [{ level: '基础', task: '找出数据库中有哪些索引从未被使用（可以删除释放空间）', hint: 'pg_stat_user_indexes + idx_scan = 0', answer: 'SELECT schemaname, tablename, indexname, pg_size_pretty(pg_relation_size(indexrelid)) FROM pg_stat_user_indexes WHERE idx_scan = 0 AND indexrelid NOT IN (SELECT conindid FROM pg_constraint) ORDER BY pg_relation_size(indexrelid) DESC;' }] },
  "j5YeixkCKRv0sfq_gFVr9": { mentalModel: '用任何编程语言管理 PG——Python（psycopg2/SQLAlchemy）、Go（pgx/database/sql）、Node.js（pg）、Java（JDBC/HikariCP）。不同语言的驱动和最佳实践不同。', sections: [{ title: 'PG 驱动对比', content: 'Go：pgx 是最快的 PG 驱动（原生协议、连接池、COPY 协议支持），database/sql 是标准接口。Node.js：pg（node-postgres）最流行，支持连接池和 Promise。Python：psycopg2 是老牌（C 扩展快），psycopg3 是现代版（async 支持）。Java：JDBC + HikariCP（连接池标配）。关键：用连接池（不要对每个请求建新连接）、用参数化查询（不要拼 SQL 字符串）。' }],
    diagnosis: [
      { symptom: 'Go pgx 连接池中连接数一直增长——从不释放', cause: '连接池配置不当——MaxConns 太大或 MinConns 接近 MaxConns。应用未正确关闭获取的连接。', fix: 'pgxpool 配置：MaxConns=20,MinConns=2,MaxConnLifetime=1h,MaxConnIdleTime=30m。defer rows.Close() 和 conn.Release()。监控 pool.Stat()。' },
      { symptom: 'Node.js pg Pool 报 "sorry, too many clients already"', cause: 'PG max_connections 达上限——pg Pool 的 max 配置超过 PG 限制，或存在连接泄漏。', fix: '调整 Pool：max:20,idleTimeoutMillis:30000。监控 pg_stat_activity。确保每次查询后 client.release()。' },
    ],
  exercises: [{ level: '基础', task: '说出为什么数据库连接要池化而不是每次请求新建', hint: 'PG fork 进程的开销', answer: 'PG 每个连接 fork 一个 OS 进程（几 MB 内存）。如果每个 HTTP 请求都新建连接→每分钟几百个连接→几百个进程→OOM。连接池复用少量连接（如 20 个）服务数百请求。' }] },
  "TZvZ_jNjWnM535ZktyhQN": { mentalModel: 'Patroni 替代品——Stolon（Go 写的 PG 高可用，已被 Patroni 取代）、repmgr（老牌 PG 复制管理）、PAF（Pacemaker-based）。现在 Patroni 是公认标准。', sections: [{ title: 'PG 高可用生态', content: 'Patroni（Python + etcd/Consul）：最流行、社区最活跃、配置最简单。Stolon（Go）：更复杂但 PG 原生（不需要 Python 依赖）。repmgr + Pacemaker：传统企业方案，还在用的老系统多。CloudNativePG Operator（K8s）：K8s 原生方案，云原生首选。选型：非 K8s → Patroni；K8s → CNPG Operator。' }],
    diagnosis: [
      { symptom: 'Stolon Sentinel 意外提升从库为新主', cause: 'Sentinel 检测主库心跳超时——网络抖动而非主库真的挂。缺少 fencing 致脑裂。', fix: '调大心跳超时：failInterval=20s。增加 Sentinel 节点数。考虑新项目用 Patroni——社区更活跃。' },
      { symptom: 'repmgr 故障切换时手动操作步骤出错', cause: 'repmgr 自动 failover 但很多人手动切换——步骤多、压力大易出错。', fix: '编写切换 SOP 并演练。repmgr cluster show 确认状态后再操作。repmgr standby follow 勿手动改 recovery.conf。考虑 Patroni——自动 failover。' },
    ],
  exercises: [{ level: '基础', task: '为什么 Patroni 成为了 PG 高可用的事实标准', hint: '简单+灵活', answer: '1) 配置简单（一个 YAML）2) 支持多种 DCS（etcd/Consul/ZooKeeper/K8s API）3) REST API 管理 4) 社区最活跃、文档最好 5) 支持计划性 switchover 和自动 failover。' }] },
  "xk2G-HUS-dviNW3BAMmJv": { mentalModel: 'Keepalived 是 Linux 的"虚拟 IP 漂移工具"——多台 PG 服务器共享一个虚拟 IP（VIP），主库挂了这个 VIP 自动漂移到从库。客户端始终连 VIP，不用关心谁当前是主。', sections: [{ title: 'Keepalived + PG', content: 'Keepalived 用 VRRP 协议，多个节点选举 master，master 持有 VIP。可以和 Patroni 配合——Patroni 检测到主从切换后，通过回调脚本让 Keepalived 把 VIP 漂移到新主。更简单的方案：用 HAProxy（自动检测主从）+ Patroni（自动 failover），不需要 VIP。云环境不需要 Keepalived——用云厂商的负载均衡器（AWS ELB/GCP LB）。' }],
    diagnosis: [
      { symptom: 'Keepalived VIP 漂移后 Split-Brain——两台都有 VIP', cause: 'VRRP 心跳包丢失（网络分区）——两台都以为对方挂，各自接管 VIP。', fix: 'VRRP 组配置不同 priority 和 preempt_delay。确保心跳走独立网卡。脑裂后手动 down 掉一个节点 keepalived。' },
      { symptom: 'Keepalived VIP 切换耗时 >10s 但要求 <3s', cause: 'VRRP 默认通告间隔 1s+检测超时 3s+ARP 刷新延迟。交换机需时间更新 MAC 地址表。', fix: '缩短 advert_int=0.5。garp_master_delay=0。评估 HAProxy（TCP 代理）+Patroni——对客户端透明。' },
    ],
  exercises: [{ level: '进阶', task: '设计一个 PG 高可用方案：客户端连一个不变地址，背后 PG 主从切换对客户端透明', hint: 'VIP 或 Proxy', answer: '方案 A：Keepalived VIP → Patroni 切换时 VIP 漂移。方案 B：HAProxy 健康检查 → Patroni 切换时 HAProxy 自动更新路由。方案 C（云）：云 LB（TCP 健康检查）→ 后端 PG 节点。所有方案核心：中间层隔离客户端和数据库实例的对应关系。' }] },
  "kCw6oEVGdKokCz4wYizIT": { mentalModel: 'etcd 是"分布式系统的共享记事本"——所有节点读写同一个 key-value 存储，用来选主（Leader Election）、存配置、服务发现。Patroni 用它存"谁现在是主库"这个最关键的信息。', sections: [{ title: 'etcd 在 PG HA 中的角色', content: 'Patroni 用 etcd 做：1) Leader Lock——主库的 Patroni 持有 Leader Key（带 TTL），不断续租。从库的 Patroni 发现锁过期→竞选新主。2) 集群配置——主库的 host/port、复制配置等存 etcd。3) 成员列表——哪些节点在线。etcd 本身也是分布式系统（Raft 协议），需要 3 或 5 个节点保证高可用。' }],
    diagnosis: [
      { symptom: 'etcd 集群一个节点 OOM 后整体不可用', cause: 'etcd 数据全在内存——数据过多单节点 OOM。Raft 要求过半存活→OOM kill 一个后只剩 2/3 但内存压力仍在。', fix: '监控 etcd 内存：etcdctl endpoint status。限制存储数据量（<8GB）。设 cgroup 内存限额。定期压缩：etcdctl compact。' },
      { symptom: 'etcd 日志 "apply entries took too long"', cause: 'etcd 写入性能跟不上——磁盘 IO 慢或 fsync 延迟高。每次 PUT 需过半节点 fsync 确认。', fix: 'SSD 存储 etcd 数据——fsync 延迟最关键。增大 etcd 心跳间隔和选举超时。PG HA 场景 etcd 负载不高。' },
    ],
  exercises: [{ level: '基础', task: 'etcd 集群为什么至少要 3 个节点', hint: 'Raft 协议', answer: 'Raft 协议要求过半数（N/2+1）节点同意才能做出决策。1 个节点→挂了全挂。2 个节点→挂 1 个=没有多数→集群不可用。3 个节点→挂 1 个还有 2>1.5→仍可用。3 节点是最小高可用配置。' }] },
  "EkbT6SYxSWCE9iHQimQvC": { mentalModel: 'PG 调试不只是 SQL 层面——系统调用（strace）、网络包（tcpdump）、内存分配（valgrind）甚至内核事件（perf/bpftrace）。综合调试工具栈 = 更快定位根因。', sections: [{ title: 'PG 调试工具栈', content: 'SQL 层面：EXPLAIN ANALYZE + pg_stat_statements。连接层面：pg_stat_activity（当前状态）+ pg_locks（锁）。OS 层面：strace（系统调用） + perf（CPU 采样） + bpftrace（内核追踪）。网络层面：tcpdump/Wireshark 抓包分析 PG 协议（端口 5432）。自定义：PG 的 debug 编译选项 + 日志级别 debug5（输出大量内部信息）。' }],
    diagnosis: [
      { symptom: 'tcpdump 抓包 PG 端口发现数据未加密', cause: '虽然 ssl=on 但客户端未指定 sslmode=require——PG 默认允许非 SSL 连接。', fix: 'psql 连接加 sslmode=require。pg_hba.conf 将 host 改为 hostssl。SELECT ssl,version FROM pg_stat_ssl WHERE pid=pg_backend_pid(); 检查。' },
      { symptom: 'perf top 采样 PG 全是内核函数——看不出用户态问题', cause: 'perf 默认含内核和用户态——CPU 花在 IO 等待（内核态），内核函数不是根因而非 IO 症状。', fix: 'perf top -p PID --call-graph fp 看调用链。结合 iostat 和 wait_event 区分 IO vs CPU 问题。perf record+report 离线分析。' },
    ],
  exercises: [{ level: '进阶', task: '用 tcpdump 抓包观察 PG 客户端和服务器的通信协议', hint: 'tcpdump -i lo port 5432 -X', answer: 'tcpdump -i lo port 5432 -X -s 0。然后 psql 执行 SELECT 1; 可以看到 PG 前端/后端的协议交互：简单查询（Query message → RowDescription → DataRow → CommandComplete → ReadyForQuery）。' }] },
  "3pLn1mhRnekG537ejHUYA": { mentalModel: 'Checkpoint 是 PG 的"存档点"——定期把内存中所有脏页刷到磁盘并更新 WAL 中的检查点位置。Crash Recovery 从上次 Checkpoint 之后重放 WAL。', sections: [{ title: 'Checkpoint 调优', content: 'checkpoint_timeout：多久强制一次 Checkpoint（默认 5min）。max_wal_size：WAL 积累到多大触发 Checkpoint（默认 1GB）。checkpoint_completion_target：Checkpoint 分散在多长时间内完成（默认 0.9 = 90% 的 checkpoint_timeout 时间内完成）。调优目标：减少 Checkpoint 频率但每次写更慢、更平滑——降低 impacting 正常查询。如果磁盘 IO 差，增大 checkpoint_timeout 到 15-30min。' }],
    diagnosis: [
      { symptom: 'checkpoint 过程中 PG 几乎不可用——查询全卡', cause: 'checkpoint 一次性刷太多脏页——timeout 和 max_wal_size 配合不当。或磁盘 IO 太慢无法吸收突发写入。', fix: '增大 checkpoint_timeout 到 15-30min。调小 max_wal_size。提高 checkpoint_completion_target 到 0.9-1.0。检查磁盘 IO。' },
      { symptom: 'checkpoint 每 5 分钟固定触发——即使无写入', cause: 'checkpoint_timeout=5min 强制每 5 分钟一次 checkpoint——即使无写入也写 checkpoint 记录。正确行为（限制 crash recovery 时间）。', fix: '写入极少且 recovery 时间不敏感→增大 timeout 到 30min-1h。监控 pg_stat_bgwriter 看 checkpoints_req vs checkpoints_timed 比例。' },
    ],
  exercises: [{ level: '基础', task: '什么情况下需要调整 checkpoint_timeout', hint: 'IO 抖动', answer: '如果监控发现每 5 分钟磁盘写入量暴增（Checkpoint 导致的 IO 尖峰）→ 增大 checkpoint_timeout 到 15min，让 Checkpoint 更分散。代价是 Crash Recovery 时间更长（因为要重放更多 WAL）。' }] },
  "IWubGe3oquSj882QVnhLU": { mentalModel: 'PG 的 Extension 生态让它从"数据库"变成"数据平台"——PostGIS（地理信息）、pgvector（AI 向量）、Citus（分布式）、TimescaleDB（时序）、pg_partman（分区管理）。', sections: [{ title: '必装 Extension', content: 'pg_stat_statements（查询分析——没有不装的）、postgis（地理——如果涉及位置）、pgvector（向量——如果做 AI）、uuid-ossp（UUID 生成）、pg_cron（定时任务）、pg_partman（自动分区管理）。micron 扩展：hstore/pg_trgm/btree_gin/btree_gist（小工具但好用）。选 Extension 原则：1) 是否有活跃维护 2) 是否会影响升级（Extension 需要兼容新 PG 版本）。' }],
    diagnosis: [
      { symptom: 'PG 升级到 16 后 Extension 报 "incompatible"', cause: 'Extension 版本不兼容新 PG——SQL 脚本或共享库（.so）针对旧 PG 编译。升级大版本需同步升级 Extension。', fix: 'ALTER EXTENSION name UPDATE; 第三方 Extension 安新版本。SELECT * FROM pg_extension; 检查版本。升级前查兼容性矩阵。' },
      { symptom: '安装了 10 个 Extension 但大部分从未使用', cause: '跟风安装——每 Extension 占资源（shared_preload_libraries 增启动时间，增升级复杂度）。', fix: '整理列表：SELECT * FROM pg_extension; DROP EXTENSION name 删未用的。最小集合：pg_stat_statements+业务必需。' },
    ],
  exercises: [{ level: '基础', task: '列出你会在生产 PG 中必装的 3 个 Extension', hint: '监控/安全/性能', answer: '1) pg_stat_statements（查询监控分析——必装）2) auto_explain（自动记录慢查询 EXPLAIN，排查问题用）3) pg_stat_kcache（OS 层面 IO 统计，配合 pg_stat_statements 用）。' }] },
  "8H7hJhGKxr1nrjkHv9Xao": { mentalModel: 'PG 邮件列表是 PostgreSQL 社区的"广场"——全球开发者和用户在这里讨论问题、提交补丁、决定功能方向。没有 Slack/Discord，就是传统的邮件列表。', sections: [{ title: 'PG 社区参与', content: 'pgsql-general：一般问题和讨论（新手友好）。pgsql-admin：运维管理讨论。pgsql-hackers：核心开发和补丁讨论（硬核）。pgsql-performance：性能调优讨论。pgsql-announce：新版本和安全公告（必订）。新手参与方式：先订阅 pgsql-general 和 pgsql-announce，每天扫一眼标题→熟悉 PG 社区的讨论文化。' }],
    diagnosis: [
      { symptom: '订阅 5 个 PG 邮件列表每天 200 封邮件', cause: 'pgsql-hackers 和 pgsql-general 邮件量极大——CommitFest 期间尤甚。', fix: '先订阅 pgsql-announce（低频高价值）和 pgsql-general。pgsql-hackers 用 Digest 模式。设置过滤规则归档。每天扫标题。' },
      { symptom: '在 pgsql-general 回复问题被纠正', cause: 'PG 社区重视技术准确性——被纠正很正常不是针对个人。', fix: '被纠正后感谢并学习——最快的学习方式。不确定的事加"IIUC"和引用来源。PG 社区：技术严谨但对人友善。' },
    ],
  exercises: [{ level: '基础', task: '订阅 pgsql-announce 邮件列表', hint: '访问 lists.postgresql.org', answer: '访问 https://lists.postgresql.org/ → pgsql-announce → Subscribe → 输入邮箱 → 确认。新版本和安全补丁会第一时间推送到你邮箱。' }] },
};