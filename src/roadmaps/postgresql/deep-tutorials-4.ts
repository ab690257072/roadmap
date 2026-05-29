import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_4: Record<string, DeepTutorial> = {
  // 61-75: 备份/自动化/高可用/监控/性能/索引
  "XZ922juBJ8Om0WyGtSYT5": {
    mentalModel: 'pg_dump 是 PG 的"数据快照机"——把数据库的内容导出为 SQL 脚本，任何时候都能用这个脚本还原到备份时的状态。就像把整个房子的物品清单拍照存档。',
    handsOn: [
      { title: 'pg_dump 常用操作', cmd: 'pg_dump -U postgres -d mydb -F c -f mydb.dump && pg_restore -l mydb.dump | head -10', output: '(dump 文件创建，-l 列出内容)', explain: '-F c 自定义格式（可压缩、可并行恢复）。-F p 纯 SQL（可读可编辑）。pg_dumpall 导出所有数据库（包括全局的 roles/tablespaces）。' },
    ],
    diagnosis: [
      { symptom: 'pg_dump 报 "missing chunk number 0 for toast value"', cause: '表中存在损坏的 TOAST 数据——磁盘故障或不正常关机导致 TOAST 表数据丢失。', fix: '跳过损坏表：pg_dump --exclude-table-data=损坏表。先导 schema 再逐表导数据找出损坏行。损坏通常是硬件问题——检查磁盘 SMART。' },
      { symptom: 'pg_dump SQL 文件恢复时报外键约束错误', cause: 'pg_dump 按字母顺序导出——被引用的表排在引用表后面，恢复时外键约束失败。', fix: '用 -Fc 格式+pg_restore 恢复（会处理依赖顺序）。或加 --clean --if-exists 生成 DROP CASCADE。或 --no-owner --no-privileges 简化恢复。' },
    ],
  exercises: [
      { level: '基础', task: '用 pg_dump 导出单个表的数据（不含表结构）', hint: '--data-only -t tablename', answer: 'pg_dump --data-only -t orders -U postgres mydb > orders_data.sql。--schema-only 只导出结构不含数据。' },
      { level: '进阶', task: '并行恢复一个大型 dump：用 pg_restore -j 加速', hint: 'pg_restore -j 4 -d dbname dumpfile', answer: 'pg_restore -j 4 -U postgres -d mydb mydb.dump。-j 4 用 4 个并行 worker 恢复，大数据库能快 3-4 倍。前提是 -F c 格式的 dump。' },
    ],
  },

  "YSprRhPHkzV8SzDYpIVmp": {
    mentalModel: 'pg_restore 是 dump 文件的"还原说明书"——把 pg_dump 导出的备份恢复成数据库。可以完整恢复、选择性恢复（只恢复部分表）、只恢复数据或只恢复结构。',
    sections: [
      { title: 'pg_restore 选择性恢复', content: '查看 dump 内容：pg_restore -l backup.dump。只恢复部分表：pg_restore -t orders -t users -d newdb backup.dump。只恢复数据不恢复结构：pg_restore --data-only -d newdb backup.dump。恢复到不同数据库：pg_restore -d newdb backup.dump（先 CREATE DATABASE newdb）。' },
    ],
    diagnosis: [
      { symptom: 'pg_restore 到一半失败，不确定已恢复表状态', cause: '默认单事务恢复——中途失败全部回滚。加 --no-single-transaction 则不回滚。', fix: '默认行为安全（全部回滚）。断点续传用 --no-single-transaction。或用 --section=pre-data/data/post-data 分阶段恢复。' },
      { symptom: 'pg_restore 恢复大表磁盘空间不够', cause: '恢复中索引重建和排序操作消耗额外磁盘空间——可能比原表更大。', fix: '设 temp_tablespaces 指向其他磁盘。先恢复 schema 再单独恢复数据。大索引考虑恢复后重建而非从 dump 恢复。' },
    ],
  exercises: [
      { level: '基础', task: '用 pg_restore 只恢复 schema 不恢复数据', hint: '--schema-only', answer: 'pg_restore --schema-only -U postgres -d targetdb sourcedump.dump。同理 --data-only 只恢复数据。这两个参数配合可以实现"结构从 dump A 恢复、数据从 dump B 恢复"。' },
    ],
  },

  "QmV-J6fPYQ5CcdGUkBs7y": {
    mentalModel: 'pg_dumpall 是"整栋楼的保险柜"——备份整个 PG 实例的所有数据库和全局对象（角色、表空间），不只是单个数据库。适合全实例灾难恢复。',
    sections: [
      { title: 'pg_dump vs pg_dumpall', content: 'pg_dump：备份单个数据库，支持自定义格式/并行恢复/选择性恢复。pg_dumpall：备份整个集群（所有数据库+全局对象），只能输出纯 SQL，文件可能很大。恢复：psql -f dumpall.sql。实际使用：日常备份用 pg_dump（灵活），全实例备份用 pg_dumpall 或物理备份（pg_basebackup）。' },
    ],
    diagnosis: [
      { symptom: 'pg_dumpall 导出文件几百 GB，恢复磁盘爆满', cause: 'pg_dumpall 导出所有数据库为纯 SQL 文本，不压缩、无法并行恢复。', fix: '用 pg_dump -Fc 分别导出各数据库（压缩、可并行）。pg_dumpall --globals-only 只导全局对象。写脚本循环导出各数据库。' },
      { symptom: 'pg_dumpall 恢复报 "role already exists"', cause: 'pg_dumpall 含 CREATE ROLE，目标实例中该 role 已存在。', fix: '恢复前清理目标实例全局对象：DROP OWNED BY 冲突role CASCADE; DROP ROLE 冲突role; 或用 pg_dumpall --globals-only --clean。建议恢复到全新空实例。' },
    ],
  exercises: [
      { level: '基础', task: '用 pg_dumpall 只导出全局对象（roles/tablespaces），不导出数据', hint: '--globals-only', answer: 'pg_dumpall --globals-only -U postgres > globals.sql。恢复全局对象后，再用 pg_restore 恢复各数据库的数据。' },
    ],
  },

  "te4PZaqt6-5Qu8rU0w6a1": {
    mentalModel: '备份验证就是"演习"——你存了备份文件，但不知道能不能用？定期把备份恢复到测试环境验证一下。就像消防演习：设备检查了不等于能用，真刀真枪练一次才知道。',
    sections: [
      { title: '备份验证流程', content: '1) 定期（每周/每月）将最新的备份恢复到独立的验证环境 2) 跑数据完整性检查：SELECT count(*) FROM 关键表; 对比生产行数 3) 跑应用冒烟测试——连上验证环境看基本功能是否正常 4) 检查备份时效——如果上次验证是 3 个月前，那过去 3 个月的备份都是"假设可用" 5) 自动化的备份验证 Pipeline。备份没有验证 = 没有备份。' },
    ],
    diagnosis: [
      { symptom: '备份文件存在但恢复时才发现文件损坏', cause: '备份过程磁盘或网络错误致文件不完整，但脚本检查退出码以为成功。', fix: '备份后立即验证：pg_restore -l backup.dump > /dev/null。定期（最少每月）恢复备份到独立验证环境跑基本查询。备份策略=备份+验证+告警。' },
      { symptom: '备份磁盘满了，新备份失败', cause: '磁盘满→新备份需要连续空间但被旧备份占满。清理脚本删了最旧备份但空间仍不够。', fix: '备份前检查磁盘空间：df -h /backup 超 80% 先清理。保留策略：最近 7 天每天+最近 4 周每周+最近 6 月每月。监控磁盘使用率告警。' },
    ],
  exercises: [
      { level: '基础', task: '写一个简单的备份验证脚本步骤', hint: '恢复 → 行数检查 → 关键查询', answer: '1) pg_restore -d verify_db backup.dump 2) psql -d verify_db -c "SELECT count(*) FROM orders;" 对比预期 3) psql -d verify_db -c "SELECT * FROM orders LIMIT 1;" 确认数据可读。三步验证法。' },
    ],
  },

  "e5s7-JRqNy-OhfnjTScZI": {
    mentalModel: '自动化运维就是"不要再手敲命令了"——备份要自动跑（cron/pg_cron）、失败要自动通知（告警）、磁盘快满了要自动清理。把 DBA 从重复劳动中解放出来。',
    sections: [
      { title: 'PG 自动化工具', content: '备份自动化：pgBackRest（企业级备份管理——增量备份/并行/加密/验证）。定时任务：pg_cron（数据库内 cron）+ cron（OS 级）。配置管理：Ansible/Chef/Puppet 部署 PG 配置。监控：Prometheus + postgres_exporter + Grafana 面板。迁移：Flyway/Sqitch 管理数据库变更版本。容器化：Docker + K8s 部署可重复的 PG 环境。自动化不等于一上来就 K8s Operator——先学会写备份脚本+告警就够了。' },
    ],
    diagnosis: [
      { symptom: 'crontab 备份脚本跑了两周后突然不跑了', cause: 'crond 服务停了，或脚本环境变量（PATH/PGPASSWORD）变化，或磁盘满脚本退出。', fix: '脚本中设绝对路径：PATH=/usr/bin:/usr/local/bin。用 .pgpass 文件存密码。脚本加日志：pg_dump ... >> /var/log/pg_backup.log 2>&1。监控备份时间戳。' },
      { symptom: '多个备份脚本同时跑致数据库性能下降', cause: '不同数据库/频次备份同时启动，pg_dump 消耗大量 IO 和 CPU。', fix: '错开备份时间。用 pgBackRest 增量备份。低负载时段执行（凌晨 2-5 点）。设备份 nice/ionice 优先级。' },
    ],
  exercises: [
      { level: '基础', task: '用 crontab 配置每天凌晨 2 点自动备份数据库', hint: '0 2 * * * pg_dump ...', answer: '0 2 * * * pg_dump -U postgres -F c -f /backups/mydb_$(date +%Y%m%d).dump mydb && find /backups -name "*.dump" -mtime +7 -delete。最后一段删除 7 天前的备份，自动清理磁盘空间。' },
    ],
  },

  "V8_zJRwOX9664bUvAGgff": {
    mentalModel: 'HAProxy 是 PG 前面的"流量交警"——客户端连到 HAProxy，HAProxy 自动判断哪个 PG 是主库（可写）、哪些是从库（只读），把读写请求路由到正确的地方。',
    sections: [
      { title: 'HAProxy + PG 高可用', content: 'HAProxy 配置 TCP 代理模式（PG 不是 HTTP 协议）。健康检查：HAProxy 定期向每个 PG 节点执行 SELECT 1，失败的节点自动摘除。读写分离：前端开两个端口——5432（读写→主库）、5433（只读→轮询从库）。HAProxy + Patroni + etcd 构成完整的 PG 高可用方案——Patroni 管理主从切换，etcd 存集群状态，HAProxy 做流量路由。' },
    ],
    diagnosis: [
      { symptom: 'HAProxy 健康检查误判主库不健康导致切换', cause: '健康检查过于敏感——间隔太短、rise/fall 太激进。PG 短暂慢查询被误判不健康。', fix: '调大参数：check inter 3s fall 3 rise 2（连续失败 3 次、9 秒后才判不健康）。timeout check 5s。检查用轻量 SQL：SELECT 1;' },
      { symptom: 'HAProxy 把写请求路由到从库报 "cannot execute INSERT in read-only transaction"', cause: '写端口（5432）后端含从库，或健康检查未正确区分主从。', fix: '写端口 backend 只含主库。健康检查用 pg_is_in_recovery() 区分：主库 false（可写），从库 true（只读）。HAProxy 配置中写端口只路由到 recovery=false 的节点。' },
    ],
  exercises: [
      { level: '进阶', task: '设计一个 HAProxy 配置实现 PG 读写分离（5432=读写，5433=只读）', hint: '两个 listen 块 + 不同的 backend', answer: 'listen pg_write 0.0.0.0:5432 → backend 指向主库（通过健康检查区分主从）。listen pg_read 0.0.0.0:5433 → backend 指向所有从库（balance roundrobin）。主库挂了 Patroni 提一个从库为新主，HAProxy 健康检查更新路由。' },
    ],
  },

  "mm0K_8TFicrYdZQvWFkH4": {
    mentalModel: 'Patroni 是 PG 的"自动消防队"——主库挂了？Patroni 秒级检测到，自动从从库中选一个新主库（Leader Election），更新集群配置，搞定！不需要人工半夜爬起来切库。',
    sections: [
      { title: 'Patroni 工作原理', content: '组件：etcd/Consul/ZooKeeper（分布式配置存储，选主+存状态）、Patroni（每个 PG 节点上的 agent）、PG 实例。流程：1) 所有 Patroni 通过 etcd 竞争 Leader 锁 2) 获得锁的节点的 PG 是主库 3) Patroni 持续更新锁（TTL）——主库挂了锁过期 4) 其他 Patroni 检测到锁过期→重新竞选→新主诞生 5) 新主 PG 被 promote，老主被 fencing（隔离）。Patroni 还管理：复制配置、重启、switchover（计划性主从切换）。' },
    ],
    diagnosis: [
      { symptom: 'Patroni 切换后应用连接失败', cause: '应用直连旧主库 IP 而非 VIP/HAProxy。Patroni 只切换 PG 角色不更新应用配置。', fix: '应用通过 HAProxy（自动检测主从）或 VIP（Keepalived 漂移）连接。Patroni 回调脚本通知 HAProxy/Keepalived 更新路由。curl http://patroni:8008 查看集群状态。' },
      { symptom: 'etcd 3 节点挂了 2 个，Patroni 无法选主', cause: 'etcd 依赖 Raft 协议——需过半数节点存活。3 节点挂 2 个=无多数=不可写=Patroni 无法获取 leader lock。', fix: '部署 etcd 至少 3 节点，生产用 5 节点（允许挂 2 个）。定期备份 etcd 数据。应急：patronictl manually 手动指定主库。监控 etcd 健康：etcdctl endpoint health。' },
    ],
  exercises: [
      { level: '进阶', task: '描述 Patroni 主库故障后自动切换的完整流程', hint: 'Leader Lock 过期 → 选新主 → Promote → 更新 etcd', answer: '主库 PG crash → Patroni 无法续租 Leader Lock → etcd 中 Lock TTL 过期 → 其他 Patroni 节点检测到 → 竞争获取 Leader Lock → 胜出者 pg_ctl promote 将从库提升为新主 → 更新 etcd 集群配置 → 其他从库自动跟随新主。整个过程 30-60 秒。' },
    ],
  },

  "SNnc8CIKuHUAEZaJ_qEar": {
    mentalModel: '容量规划就像"预测什么时候仓库会装满"——根据当前数据增长速度，预估未来 X 个月需要多大磁盘、多少内存。不规划的结果：某天早上磁盘满了，数据库挂了。',
    sections: [
      { title: '容量规划指标', content: '1) 磁盘容量：SELECT pg_database_size(\'mydb\') 当前大小，统计增长率 = 观测每周/每月增长量，预估 XXX GB/月 2) 连接数：SELECT count(*) FROM pg_stat_activity 当前连接，峰值和平均值 3) IOPS：磁盘读写次数（iostat），PG 对随机读敏感 4) 内存：shared_buffers + 连接数 × work_mem 是主要内存消耗。经验公式：内存预算 ≈ shared_buffers + (max_connections × work_mem) + 1GB OS 开销。' },
    ],
    diagnosis: [
      { symptom: '磁盘空间从 50% 突然跳到 95%', cause: 'WAL 堆积——checkpoint 不及时或 archiver 失败导致 pg_wal 膨胀。或 autovacuum 停止死元组堆积。', fix: 'du -sh $PGDATA/pg_wal 检查 WAL 大小。SELECT * FROM pg_stat_archiver 看归档状态。VACUUM VERBOSE 大表。磁盘告警设 75% 而非 95%。' },
      { symptom: '连接数接近 max_connections，新连接被拒绝', cause: 'max_connections 配置太低，或连接泄漏，或大量 idle in transaction 连接。', fix: "增大 max_connections 重启（内存允许）。SELECT state,count(*) FROM pg_stat_activity GROUP BY state; 分析状态分布。设 idle_in_transaction_session_timeout='5min'。用 PgBouncer 连接池。" },
    ],
  exercises: [
      { level: '基础', task: '查看当前数据库的总大小和各表大小', hint: 'pg_database_size + pg_relation_size', answer: 'SELECT pg_database_size(\'mydb\'); → 总大小。SELECT tablename, pg_size_pretty(pg_total_relation_size(schemaname||\'.\'||tablename)) FROM pg_tables WHERE schemaname=\'public\' ORDER BY pg_total_relation_size(schemaname||\'.\'||tablename) DESC; → 各表大小排名。' },
    ],
  },

  "Dhhyg23dBMyAKCFwZmu71": {
    mentalModel: 'PG 索引不只是 B-Tree——还有 GIN（倒排索引，适合 JSON 数组/全文搜索）、GiST（通用搜索树，适合地理范围查询）、BRIN（块范围索引，适合有序大表）、Hash（只能等值查询）。每种索引是不同场景的"特化工具"。',
    sections: [
      { title: '索引类型选型', content: 'B-Tree：默认、最通用——等值查询、范围查询、排序。GIN：倒排索引——数组包含（@>）、全文搜索（tsvector）、JSONB 键存在。GiST：空间数据（PostGIS）、全文搜索（比 GIN 写入快但读取慢）。BRIN：物理顺序相关的大表——千万行日志表按时间排序，BRIN 极省空间（几百 KB vs B-Tree 几十 GB）。Hash：只能 = 查询，PG 10+ 才支持 Hash 索引的 WAL 日志。选择：90% 场景 B-Tree 就够，特殊场景才用专用索引。' },
    ],
    diagnosis: [
      { symptom: '大表建 GIN 索引几小时未完成', cause: 'GIN 索引构建比 B-Tree 慢很多——需提取每值的所有键。大批量数据建 GIN 是 IO 密集操作。', fix: '调整 maintenance_work_mem 到 1-2GB。低峰期进行。考虑先建索引再导入数据。CREATE INDEX CONCURRENTLY 不阻塞写但更慢。' },
      { symptom: 'BRIN 索引查询有时快有时慢', cause: 'BRIN 精度依赖数据物理排序——若数据不按索引列物理顺序排列，每个 page range 范围大→回表检查多页。', fix: 'BRIN 只适合物理有序数据（如按时间 append 的日志表）。物理顺序与索引列不相关用 B-Tree。对已有表：CLUSTER table USING index 按索引重排但会锁表。' },
    ],
  exercises: [
      { level: '进阶', task: '为 tags TEXT[] 数组列建索引支持"包含某标签"的查询', hint: 'GIN + array_ops', answer: 'CREATE INDEX idx_tags ON products USING GIN (tags); 查询：SELECT * FROM products WHERE tags @> ARRAY[\'electronics\']; @> 表示包含。GIN 倒排索引使得无需扫描整个数组。' },
    ],
  },

  "jihXOJq9zYlDOpvJvpFO-": {
    mentalModel: 'B-Tree 是数据库索引的"万能钥匙"——有序平衡树，叶子节点按顺序链接，既能快速定位（O(log n)），又能高效范围扫描（顺着叶子链走）。90% 的索引都是 B-Tree。',
    sections: [
      { title: 'B-Tree 原理', content: 'B-Tree 自平衡，树高通常 2-4 层（每个节点存几百个键）。一次索引查找 = 读 2-4 个 Page。叶子节点有双向链表：支持 ASC 和 DESC 排序。联合索引存储：(a, b, c) 按 a 排序、a 相同按 b 排序、b 相同按 c 排序——这就是"最左前缀"原则的根本原因。PG 的 B-Tree 实现基于 Lehman & Yao 的高并发 B-Link Tree——读不阻塞写、写不阻塞读。' },
    ],
    diagnosis: [
      { symptom: '复合索引 (a,b) 查询 WHERE b=1 不走索引', cause: 'B-Tree 复合索引遵循最左前缀原则——查询条件必须从联合索引第一列开始。WHERE b=1 跳过了 a。', fix: '为常用查询模式建对应索引：若经常单独查 b，为 b 单独建索引或建 (b,a) 索引。复合索引列顺序：等值条件在前、范围条件在后。' },
      { symptom: '主键 B-Tree 索引变大且查询变慢', cause: '索引碎片——大量 INSERT/UPDATE/DELETE 致 B-Tree 页分裂不平衡。随机 UUID 主键尤其严重。', fix: 'REINDEX INDEX 索引名; 重建索引消除碎片。UUID 主键用 v7（时间有序）而非 v4（随机）。定期监控索引膨胀：pg_relation_size()。' },
    ],
  exercises: [
      { level: '基础', task: '解释 B-Tree 索引为什么支持等值和范围查询', hint: '有序性+叶子链表', answer: '树结构保证 O(log n) 定位到任意 Key。叶子节点按 Key 排序且链接——找到起始 Key 后沿着叶子链表顺序扫描就完成了范围查询（BETWEEN/ORDER BY）。' },
    ],
  },

  "43oFhZuXjJd4QHbUoLtft": {
    mentalModel: 'BRIN（Block Range INdex）就是"给物理块做摘要"——不索引每一行，而是索引每 128 个连续页（默认）的值范围。索引极小但查询要回表检查。适合TB级的大日志表。',
    sections: [
      { title: 'BRIN 的适用场景', content: '最适合：数据物理有序的大表（如按时间顺序 append 的日志表）、表太大 B-Tree 装不进内存的场景。BRIN 索引大小：几 MB（vs B-Tree 几十 GB）。查询时：读取所有可能包含目标值的 page range → 对每个 range 中的 page 做 bitmap scan → 回表检查具体行。虽然比 B-Tree 多一步回表，但因为索引极小，内存全部装下，实际很快。' },
    ],
    diagnosis: [
      { symptom: 'BRIN 索引建好后 EXPLAIN 仍走 Seq Scan', cause: '表太小——优化器认为全表扫描比 BRIN 扫描+回表快。或 pages_per_range 太大索引选择性太低。', fix: '小表（<几 GB）BRIN 无意义用 B-Tree。调小 pages_per_range：CREATE INDEX ... USING BRIN(col) WITH(pages_per_range=32); 确保表按索引列物理有序。' },
      { symptom: 'BRIN 索引查询性能随表增长线性下降', cause: '表增长后每 page range 覆盖数据增加，索引选择性下降→需更多回表。', fix: '定期重建 BRIN 索引并调整 pages_per_range。超大表改用分区表+分区裁剪。EXPLAIN (ANALYZE,BUFFERS) 查看实际扫描页数。' },
    ],
  exercises: [
      { level: '进阶', task: '为一亿行的 events 表（按 event_time 顺序插入）建 BRIN 索引', hint: 'CREATE INDEX ... USING BRIN + pages_per_range', answer: 'CREATE INDEX idx_events_time ON events USING BRIN (event_time) WITH (pages_per_range = 32); pages_per_range 越小，索引越精确但也越大。默认 128，32 对时间范围查询精度更好。' },
    ],
  },

  "n2OjwxzIHnATraRWi5Ddl": {
    mentalModel: 'EXPLAIN 是查看"数据库怎么执行你的查询"的 X 光——你看 SQL 是一行文字，EXPLAIN 告诉你背后数据库做了多少次扫描、用了什么索引、排序花了多久、预估行数和实际差多远。',
    sections: [
      { title: 'EXPLAIN 关键指标', content: 'EXPLAIN：显示执行计划但不执行（用于了解"会怎么做"）。EXPLAIN ANALYZE：实际执行并显示实际耗时和行数（用于了解"实际做了什么"）。关键指标：Seq Scan（全表扫描——通常需要加索引）、Index Scan（索引扫描——好）、Bitmap Index Scan + Bitmap Heap Scan（位图扫描——索引+回表）、Nested Loop（小表驱动大表——OK）、Hash Join（哈希连接——大表 JOIN 首选）、Merge Join（有序合并连接——适合已排序的数据）。cost=0.00..8.30 第一个数字是启动代价，第二个是总代价（单位是"单页顺序读的代价"）。actual time=0.012..0.018 rows=5 实际的启动时间和总时间。' },
    ],
    diagnosis: [
      { symptom: 'EXPLAIN 显示 Index Scan 但查询仍慢', cause: 'Index Scan 后需回表读完整行（Heap Fetch）——查询列不全在索引中，随机 IO 开销大。', fix: '覆盖索引：CREATE INDEX idx ON t(filter_col) INCLUDE(select_col1,select_col2); 实现 Index Only Scan。EXPLAIN (ANALYZE,BUFFERS) 看 shared_blks_read。' },
      { symptom: 'EXPLAIN ANALYZE 的 actual time 和 cost 差距巨大', cause: '统计信息过期——优化器按旧统计估算代价，实际数据分布已变（表从 1 万行涨到 1000 万行）。', fix: 'ANALYZE 表名; 更新统计信息。表增长快则调低 autovacuum_analyze_scale_factor。批量变更后手动 ANALYZE。检查 pg_stats 中统计与实际是否一致。' },
    ],
  exercises: [
      { level: '基础', task: '用 EXPLAIN ANALYZE 查看一个查询的执行计划', hint: 'EXPLAIN ANALYZE SELECT ...', answer: 'EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 123; 看输出中是否有 Seq Scan（如果行数多应该建索引），actual time 和 rows 是真实的执行数据。' },
      { level: '进阶', task: '解释 EXPLAIN 中 "Seq Scan" vs "Index Scan" 的区别，什么时候数据库会选择 Seq Scan 而非你建的索引？', hint: '要扫描的行数占总行数多大比例', answer: 'Seq Scan：从头到尾读全表。Index Scan：从索引找到位置再回表读行。当 WHERE 过滤后的行数占表总行数比例大（如 > 10-20%）时，优化器会选择 Seq Scan——因为随机回表的 IO 开销 > 顺序扫描的开销。这就是为什么有些查询"明明有索引却不走"。' },
    ],
  },
};