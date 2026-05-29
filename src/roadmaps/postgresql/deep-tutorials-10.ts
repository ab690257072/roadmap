import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_10: Record<string, DeepTutorial> = {
  // 剩余备份/调试/监控/工具节点
  "-XhONB0FBA6UslbDWoTDv": {
    mentalModel: 'barman（Backup And Recovery MANager）是意大利 PG 公司 2ndQuadrant 开发的备份管理工具——和 pgBackRest 功能类似但更"传统企业"风格。选型：新项目用 pgBackRest，已有 barman 环境就继续用。',
    handsOn: [
      { title: 'barman 备份命令', cmd: 'barman backup mypg && barman list-backup mypg', output: 'myg 20240101T020001 - 1.2 GB - STARTED', explain: 'barman 采用"被动接收"模型——PG 把 WAL 发送到 barman 服务器，barman 管理备份和恢复。' },
    ],
    diagnosis: [
      { symptom: 'barman 备份失败但不报明显错误', cause: 'barman 被动接收 WAL——archive_command 配置有误或网络不通，WAL 未推送但 barman 不知道。', fix: 'PG 端：SELECT * FROM pg_stat_archiver; 看 last_failed_time。barman 端：barman check mypg 查看所有检查项。' },
      { symptom: 'barman 和 pgBackRest 功能重叠选哪个', cause: '两者都做 PG 备份管理——barman 被动接收、pgBackRest 主动连接做备份。', fix: '新项目选 pgBackRest——更活跃、并行更强、支持云存储。已有 barman 环境继续用——迁移成本高。' },
    ],
  exercises: [
      { level: '基础', task: 'barman 和 pgBackRest 最大的架构区别是什么', hint: '主动备份 vs 被动接收', answer: 'barman 被动接收 WAL（PG 推送），pgBackRest 主动连接 PG 做备份。pgBackRest 性能更好（并行+PITR 更快），新项目普遍推荐。' },
    ],
  },

  "4gQSzH-WKFAvmkwlX_oyR": {
    mentalModel: 'WAL-G 是 WAL-E 的 Go 重写版——把 WAL 和备份直接上传到云对象存储（S3/GCS/Azure）。专为云原生设计，比 pgBackRest 更简单（功能也更少）。',
    sections: [
      { title: 'WAL-G vs pgBackRest', content: 'WAL-G：轻量、专注云存储（S3 等）、增量备份、配置简单。pgBackRest：功能更全、支持多仓库、并行更强、PITR 更可控。选型：只用 S3 做备份、喜欢简洁就用 WAL-G。需要本地+云端混合备份、需要精细的保留策略用 pgBackRest。' },
    ],
    diagnosis: [
      { symptom: 'WAL-G 备份 S3 上传突然停止', cause: 'S3 bucket 策略变更、IAM 权限过期或配额满了。或网络中断致上传超时。', fix: '确认 AWS 凭证有效性：aws s3 ls s3://bucket/。检查 IAM 权限含 s3:PutObject。监控 S3 bucket 用量。' },
      { symptom: 'WAL-G 恢复时找不到某时间点 WAL', cause: 'WAL 段在上传前被 PG 清理，或上传失败未重试成功。', fix: '确保 wal_keep_size 足够暂存 WAL。配置 archive_command 支持重试。WAL-G 用 wal-verify 检查连续性。' },
    ],
  exercises: [
      { level: '基础', task: 'WAL-G 为什么用 Go 写', hint: '单二进制部署', answer: 'Go 编译成静态链接的单可执行文件——复制到服务器上直接跑，不需要装依赖（Python/perl 库等）。云原生场景下这点很重要。' },
    ],
  },

  "-clI2RmfhK8F8beHULaIB": {
    mentalModel: 'Shell 脚本是 DBA 的"胶水"——把备份命令、监控检查、定时任务粘在一起。一行 crontab + 20 行 bash = 自动化备份。',
    sections: [
      { title: 'PG Shell 脚本模板', content: '典型备份脚本：#!/bin/bash、export PGPASSWORD=xxx、pg_dump -U user -d db -F c -f /backup/db_$(date +%Y%m%d_%H%M).dump、find /backup -name "*.dump" -mtime +30 -delete。加上错误检查：set -e（任何命令失败就退出）、trap 捕获错误发告警。' },
    ],
    diagnosis: [
      { symptom: 'Shell 备份脚本 crontab 成功但手动失败', cause: 'crontab 和交互 shell 环境变量不同——PATH 不含 PG 工具路径，PGPASSWORD 未设置。', fix: '脚本使用绝对路径：/usr/bin/pg_dump。创建 ~/.pgpass 文件（chmod 600）。脚本开头 source /etc/profile。' },
      { symptom: '备份脚本中 PGPASSWORD 暴露在 ps 输出', cause: '密码明文通过环境变量传递——/proc/<pid>/environ 可被读取。', fix: '使用 ~/.pgpass 文件而非环境变量：echo "localhost:5432:mydb:user:pass" >> ~/.pgpass && chmod 600 ~/.pgpass。' },
    ],
  exercises: [
      { level: '基础', task: '写一个 Shell 脚本：备份 PG 并在失败时发送通知', hint: 'pg_dump + if [ $? -ne 0 ]; then ...', answer: 'if pg_dump ... ; then echo "OK" ; else echo "BACKUP FAILED" | mail -s "Alert" admin@co.com; fi' },
    ],
  },

  "-CIezYPHTcXJF_p4T55-c": {
    mentalModel: 'Core Dump 是"崩溃现场的快照"——进程崩溃时 OS 把内存内容写成 core 文件。分析 core dump = 做法医鉴定，找出"死因"。DBA 用它诊断 PG 内部 bug。',
    sections: [
      { title: 'Core Dump 分析', content: '启用：ulimit -c unlimited。触发 core dump 后，用 gdb 分析：gdb /usr/bin/postgres core_file → bt（backtrace 看调用栈）→ info locals（看变量值）。大多数情况不需要这个技能——PG 很稳定。但当 PG 自身崩溃（非查询超时/死锁等正常报错），core dump 是唯一能定位的办法。' },
    ],
    diagnosis: [
      { symptom: 'ulimit -c unlimited 后 crash 未生成 core 文件', cause: 'systemd 管理服务 core dump 由 systemd-coredump 接管。或 /proc/sys/kernel/core_pattern 指向其他路径。', fix: 'cat /proc/sys/kernel/core_pattern 查看位置。coredumpctl list 查看 systemd 捕获的 dump。安装 debug symbols。' },
      { symptom: 'gdb 附着 PG 后进程暂停——生产服务中断', cause: 'gdb attach 到进程会暂停其执行——在生产环境附着直接停掉服务。', fix: '生产环境绝不 gdb -p 附着。用 gcore <pid> 生成 core dump 不暂停进程。或复制数据目录到测试环境调试。' },
    ],
  exercises: [
      { level: '进阶', task: '启用 core dump 并用 gdb 查看 PG 进程的调用栈', hint: 'ulimit -c unlimited && gdb /path/to/postgres core', answer: 'ulimit -c unlimited → 启动 PG → kill -ABRT <pid>（触发 core dump）→ gdb /usr/bin/postgres core.xxx → bt 查看调用栈。这是诊断 PG 内部崩溃的标准流程。' },
    ],
  },

  "C_cUfEufYeUlAdVfdUvsK": {
    mentalModel: 'strace 是 Linux 的"系统调用跟踪器"——你看到 PG 在等，但不知道在等什么？strace 告诉你它在等哪个 fd、在 read 哪个文件、在 write 什么。排查"卡住不动"的利器。',
    handsOn: [
      { title: '用 strace 跟踪 PG 进程', cmd: 'strace -p PID -e trace=read,write,open,fsync -T', output: 'read(14, "...", 8192) = 8192 <0.000012>\nwrite(15, "...", 8192) = 8192 <0.000345>', explain: '-p 跟踪指定 PID。read/write 显示 IO 操作。-T 显示每个系统调用的耗。如果某个 read 耗时 > 1s，就是磁盘 IO 瓶颈/网络延迟。' },
    ],
    diagnosis: [
      { symptom: 'strace -p PID 后 PG 性能大幅下降', cause: 'strace 拦截每个系统调用——PG 是 IO 密集型进程，每秒数千次调用，开销 10-50%。', fix: '生产慎用 strace。用 strace -c -p PID 先看统计（低开销）。或 bpftrace 替代——开销 <1%。只 trace 特定调用。' },
      { symptom: 'strace 输出太多刷屏找不到关键信息', cause: 'PG 后台进程系统调用频率极高——每秒数千行。不加过滤无法找到问题。', fix: '过滤重点关注：strace -e trace=fsync,open,read,write -T -p PID。用 -o 输出到文件。查找 >1s 的调用。' },
    ],
  exercises: [
      { level: '进阶', task: '用 strace 查看 PG 后端进程在等待什么（找出卡住的原因）', hint: 'SELECT pg_backend_pid() + strace -p', answer: 'SELECT pg_backend_pid() 获取当前进程 PID → 终端另一个窗口：strace -p PID -e trace=futex,read,write。如果看到很多 futex(FUTEX_WAIT) = 在等锁。如果 read() 长时间不返回 = 等 IO。' },
    ],
  },

  "0hRQtRsteGDnKO5XgLF1R": {
    mentalModel: 'sysstat（sar/iostat/mpstat）是 Linux 的性能监控瑞士军刀——不是 PG 专用的，但 CPU/内存/IO 这些底层指标出问题时第一个用它查。',
    sections: [
      { title: 'sysstat 工具集', content: 'iostat -x 1：看磁盘 IO 利用率（%util/r_await/w_await）——IO 是数据库最常见的瓶颈。mpstat -P ALL 1：看各 CPU 核利用率。sar -r 1：看内存使用。sar -n DEV 1：看网络流量。这些不是你每天看的，是"数据库突然慢了"时的第一站——排除硬件/OS 层面的问题再查 PG。' },
    ],
    diagnosis: [
      { symptom: 'iostat %util=100% 但 PG 查询没有明显变慢', cause: '%util 在现代 SSD/NVMe 上不代表瓶颈——SSD 可并行处理多 IO 请求。应关注 await 和 avgqu-sz。', fix: '关注 await（平均等待时间）而非 %util。SSD 下 await >5ms 说明延迟偏高。avgqu-sz >1 说明有排队。' },
      { symptom: 'sar 报告大量 swap 但 PG 进程还有空闲内存', cause: 'Linux 会预测性 swap 长时间未访问的页——不一定内存不足。但 shared_buffers 不应被 swap 出。', fix: '禁用 PG 进程 swap：vm.swappiness=0。监控 si/so 列——持续 >0 才说明真正在 swap。' },
    ],
  exercises: [
      { level: '基础', task: '用 iostat 检查磁盘 IO 是否成为瓶颈', hint: 'iostat -x 1 5', answer: 'iostat -x 1 5 看 %util 列——接近 100% 说明磁盘是瓶颈。await 远大于 10ms（SSD）/ 20ms（HDD）= IO 延迟高。对数据库来说 IO 是头号性能杀手。' },
    ],
  },

  "DSWOLTYuODydvAYRbdA43": {
    mentalModel: 'iotop 是一个"实时磁盘 IO Top 命令"——和 top 类似但看的是谁在用磁盘 IO。数据库突然 IO 飙高？iotop 告诉你是不是 PG 的 checkpoint 或 VACUUM 在狂写盘。',
    handsOn: [
      { title: '用 iotop 查看磁盘 IO 进程', cmd: 'iotop -oP', output: 'PID  USER  DISK READ  DISK WRITE\n1234 postgres  0.00 B/s  50.00 M/s\n5678 postgres  2.00 M/s  0.00 B/s', explain: '-o 只显示有 IO 活动的进程。-P 显示累积 IO 而非瞬时。如果 postgres 某个 PID 持续高写入 → 可能是 WAL Writer/Checkpointer。' },
    ],
    diagnosis: [
      { symptom: 'iotop 显示 PG 持续高写入但无活跃数据库操作', cause: '可能是 autovacuum 在回收死元组、checkpoint 刷脏页、或 WAL writer 持续写 WAL。', fix: 'SELECT pid,backend_type,query FROM pg_stat_activity; 查看后台进程类型。pg_stat_bgwriter 看后台统计。正常后台活动。' },
      { symptom: 'iotop -oP 始终不显示任何 PG 进程', cause: '需 root 权限运行。或内核未启用 TASK_IO_ACCOUNTING。', fix: 'sudo iotop -oP。替代方案：cat /proc/<pid>/io 看进程 IO 统计。或用 pidstat -d 1。' },
    ],
  exercises: [
      { level: '基础', task: '磁盘突然满了，用 iotop 找出谁在大量写盘', hint: 'iotop -oP', answer: 'iotop -oP 按写入量排序。如果看到 PG 进程在高写入：1) 可能是 checkpoint（正常）2) 可能是 VACUUM（正常但说明死元组多）3) 可能是大量 INSERT/UPDATE。' },
    ],
  },

  "HJCRntic0aGVvdmCN45aP": {
    mentalModel: 'awk 是 Unix 的"文本处理神剑"——几十 GB 的 CSV 日志、psql 输出、监控数据，awk 一行命令搞定统计和格式化。用好了 awk 你就不需要把数据导到 Python/Excel 再分析。',
    handsOn: [
      { title: 'awk 处理 CSV 数据', cmd: "awk -F',' '{sum+=$3; count++} END {print \"Total:\", sum, \"Avg:\", sum/count}' data.csv", output: 'Total: 1234567 Avg: 456.78', explain: '-F\',\' 以逗号为分隔符。$3 是第三列。END 在所有行处理完后执行。一行 awk 完成统计。' },
    ],
    diagnosis: [
      { symptom: 'awk 处理 CSV 时部分行解析错误', cause: 'CSV 中逗号在引号内——awk 默认用逗号分隔不处理引号包裹字段。', fix: '简单 CSV 用 awk。复杂用 csvtool/csvcut 或 Python pandas。PG 导出数据用 COPY TO CSV HEADER 配合专业工具。' },
      { symptom: 'awk 统计行数和 SELECT COUNT(*) 不一致', cause: 'awk 统计含标题行或尾部空行。CSV 换行符和 awk 默认换行符处理不一致。', fix: 'awk "NR>1 && NF>0 {count++} END {print count}" data.csv 排除标题和空行。wc -l data.csv 交叉验证。' },
    ],
  exercises: [
      { level: '基础', task: '用 awk 统计 psql 导出的 CSV 中某列的总和', hint: "psql -c \"COPY ... TO STDOUT CSV\" | awk -F',' '{sum+=$2} END {print sum}'", answer: "psql -c \"COPY (SELECT name, amount FROM orders) TO STDOUT CSV HEADER\" | awk -F',' 'NR>1 {sum+=$2} END {print sum}'。NR>1 跳过标题行。" },
    ],
  },

  "cFtrSgboZRJ3Q63eaqEBf": {
    mentalModel: 'grep 是"海量日志的搜索引擎"——百万行 PG 日志中找 FATAL 错误、找特定慢查询、找连接记录。grep + 正则 + 管道 = 最快的日志排查。',
    handsOn: [
      { title: 'grep 排查 PG 日志', cmd: 'grep -c FATAL /var/log/postgresql/postgresql-*.log && grep ERROR /var/log/postgresql/postgresql-*.log | tail -20', output: '42\n2024-01-15 10:30:15 ERROR:  password authentication failed for user "app"\n...', explain: '-c 计数（看故障规模）。不加 -c 看具体内容。组合 grep + sort + uniq -c 做日志统计。' },
    ],
    diagnosis: [
      { symptom: 'grep 搜索 PG 日志找不到错误但明明有', cause: 'log_min_messages 设太高——默认 warning，普通 error 不记录。或日志轮转后旧日志被压缩/删除。', fix: '检查 log_min_messages=error 确保记录所有 ERROR。grep 搜索所有日志含 .gz：zgrep ERROR /var/log/postgresql/*.log*。' },
      { symptom: '日志 ERROR 太多——每分钟几百条但大部分是应用错误', cause: '应用大量 SQL 错误（违反约束/外键约束）正常记录在日志——干扰系统问题排查。', fix: '分离应用和系统错误——log_min_messages=warning 排除普通 ERROR。应用端处理约束错误不要频繁打到 PG。' },
    ],
  exercises: [
      { level: '基础', task: '统计 PG 日志中每小时有多少 FATAL 错误', hint: 'grep FATAL + awk 取时间 + sort + uniq -c', answer: "grep FATAL /var/log/postgresql/*.log | awk '{print $2}' | cut -d: -f1 | sort | uniq -c 输出每小时 FATAL 数。故障模式一目了然。" },
    ],
  },

  "hVL6OtsXrE8BvjKpRjB-9": {
    mentalModel: 'sed 是 Unix 的"流编辑器"——批量替换日志格式、清理数据、转换文件编码。和 grep/awk 组成"文本处理三剑客"。',
    handsOn: [
      { title: 'sed 批量处理 SQL 文件', cmd: "sed -i 's/public\\./myschema./g' dump.sql && sed -i '/^--/d' dump.sql", output: '(dump.sql 中 public. 替换为 myschema.，注释行删除)', explain: '-i 原地修改。s/old/new/g 全局替换。/^--/d 删除 -- 开头的行（SQL 注释）。在恢复 dump 到不同 schema 时常用。' },
    ],
    diagnosis: [
      { symptom: 'sed -i 修改 dump.sql 后 pg_restore 报格式错误', cause: 'sed 修改了自定义格式（-Fc）dump——自定义格式是二进制的，sed 文本替换破坏二进制结构。', fix: 'sed 只用于纯文本格式 dump（-Fp）。-Fc 格式先用 pg_restore 导出为文本再处理。' },
      { symptom: 'sed 替换写错导致源文件损坏', cause: 'sed -i 原地修改无备份——正则写错原始 dump 文件被部分修改无法恢复。', fix: 'sed -i.bak 创建备份：sed -i.bak "s/old/new/g" file。先测试不写回：sed "s/old/new/g" file | head 20 确认。' },
    ],
  exercises: [
      { level: '基础', task: '用 sed 把 dump.sql 中所有 CREATE TABLE 改为 CREATE TABLE IF NOT EXISTS', hint: "sed 's/CREATE TABLE /CREATE TABLE IF NOT EXISTS /g'", answer: "sed -i 's/CREATE TABLE /CREATE TABLE IF NOT EXISTS /g' dump.sql。" },
    ],
  },

  "n8oHT7YwhHhFdU5_7DZ_F": {
    mentalModel: 'iotop 的伴侣——iostat 看全局 IO、iotop 看各进程 IO，两者配合定位"谁在吃磁盘"。',
    sections: [
      { title: 'IO 排查组合', content: '排查流程：应用反馈"数据库变慢" → iostat -x 1 看 %util 和 await → 如果 IO 瓶颈 → iotop -oP 看哪个进程在读写 → 如果 PG 进程 → pg_stat_activity 看哪个查询 → EXPLAIN 分析 → 优化。从上到下逐层定位。' },
    ],
    diagnosis: [
      { symptom: '排查流程 iostat→iotop→pg_stat_activity→EXPLAIN 走完仍找不到瓶颈', cause: '问题不在 IO/CPU 而在网络延迟或锁等待——iostat 只能看 IO 不能看锁或网络。', fix: "排查流程加一步：SELECT wait_event_type,wait_event,count(*) FROM pg_stat_activity WHERE state='active' GROUP BY 1,2; 看等待事件分布。" },
      { symptom: '优化了慢查询但仍慢', cause: '根因不在 SQL——可能是 CPU/IO 饱和、锁竞争、统计信息过期、硬件故障。', fix: '优化后重测 EXPLAIN(ANALYZE,BUFFERS)。检查 pg_locks WHERE NOT granted; 看锁等待。iostat 看 IO。更换角度排查。' },
    ],
  exercises: [
      { level: '基础', task: '描述从"数据库变慢"到定位到具体慢查询的排查流程', hint: 'iostat → iotop → pg_stat_activity → EXPLAIN', answer: '1) iostat 确认是 IO 瓶颈（%util 高）2) iotop 确认 PG 是主要 IO 消耗者 3) pg_stat_activity 找正在执行的查询 4) EXPLAIN ANALYZE 分析慢查询 5) 优化（加索引/改 SQL/调参数）。' },
    ],
  },

  "3Lcy7kBKeV6hx9Ctp_20M": {
    mentalModel: '数据库迁移不只是备份恢复——Flyway/Liquibase/Sqitch 这些工具用"版本化脚本"管理数据库变更，和 Git 管理代码一样管理 schema。',
    sections: [
      { title: 'Migration Tools', content: 'Flyway（Java 生态最流行）：版本号命名的 SQL 文件（V1__init.sql、V2__add_column.sql），自动按序执行、记录执行历史。Sqitch：和 Flyway 类似但支持更多数据库（PG/MySQL/SQLite/Oracle）、脚本而非 Java。Liquibase：用 XML/YAML/JSON 描述变更（更平台无关）。核心价值：所有环境（dev/staging/prod）的 schema 变更是可重现的、有版本的、可回滚的。' },
    ],
    diagnosis: [
      { symptom: 'Flyway 迁移 dev 成功 prod 失败', cause: 'dev 和 prod 数据库状态不一致——prod 可能有手动改过的对象，Flyway check 检测到差异后拒绝。', fix: 'flyway validate 对比 schema 差异。确保所有环境通过 Flyway 管理——禁止手动 DDL。flyway repair 修复 checksum。' },
      { symptom: 'Flyway 迁移脚本 V2__xxx.sql 执行后无法回滚', cause: 'Flyway 默认不支持自动回滚——迁移是单向的。', fix: 'Flyway Pro 支持 undo。开源版手动管理：为每个迁移写对应回滚 SQL。手动执行回滚+删除 flyway_schema_history 记录。' },
    ],
  exercises: [
      { level: '基础', task: '描述 Flyway 迁移的工作模式', hint: '版本号 SQL + 历史表', answer: 'Flyway 扫描 V{version}__{description}.sql 文件 → 对比 flyway_schema_history 表（记录已执行的迁移）→ 执行未跑过的 → 更新历史表。这样每次部署时自动知道"哪些迁移还没执行"。' },
    ],
  },

  "6SCcxpkpLmmRe0rS8WAPZ": {
    mentalModel: '云部署就是"不用买服务器、不用装 PG"——AWS RDS/GCP Cloud SQL/Azure Database for PostgreSQL 一键创建托管 PG 实例。自动备份/高可用/扩容/监控全托管。',
    sections: [
      { title: '云 PG 对比', content: 'AWS RDS for PostgreSQL：最成熟的托管 PG，支持 Multi-AZ 高可用、Read Replicas、Aurora PostgreSQL（兼容 PG 但存储层自研）。GCP Cloud SQL：和 GCP 服务集成好，自动存储扩容。Azure Database for PostgreSQL：支持 Flexible Server（更灵活）和 Hyperscale（Citus 分布式）。Supabase：基于 PG 的 Firebase 替代——内置 Auth/Storage/Realtime。托管 PG 优势：不用做备份/高可用/补丁这些运维活。劣势：不能完全控制配置/扩展/服务器。' },
    ],
    diagnosis: [
      { symptom: 'RDS PG 突然变慢但控制台指标正常', cause: 'RDS 限制——IOPS burst balance 耗尽或 CPU credits 用完（t3/t4 实例），性能被限流。', fix: '检查 RDS 控制台 Burst Balance 和 CPU Credit Balance。耗尽→升级实例类型或增加 IOPS。可突发实例监控 burst balance 告警。' },
      { symptom: 'RDS 自动备份在业务高峰期执行影响性能', cause: '备份虽在低峰窗口但 pg_dump 仍消耗 IO——对 IO 密集型业务影响明显。', fix: '调整备份窗口到绝对低峰。用 Multi-AZ+Read Replicas——从只读副本做备份。考虑用快照功能（比 dump 快且 IO 影响小）。' },
    ],
  exercises: [
      { level: '基础', task: '对比自建 PG 和 AWS RDS 的优劣势', hint: '控制 vs 省心', answer: '自建：完全控制、可定制配置、成本低（自己买/租服务器）。但运维成本高（备份/高可用/补丁/监控都要自己做）。RDS：零运维、自动备份/高可用/扩容。但贵（比同等 EC2 贵 30-50%）、不能完全控制 pg_hba.conf 等。' },
    ],
  },

  "QarPFu_wU6-F9P5YHo6CO": {
    mentalModel: 'eBPF 是最新最强的 Linux 可观测性技术——在 OS 内核中安全运行"小程序"来观测一切：网络/磁盘/进程。比 strace 轻量得多（生产环境可以直接用），是未来方向。',
    sections: [
      { title: 'eBPF 和 PG', content: 'eBPF 工具让 DBA 在生产环境做"无侵入式"观测——不开 PG 慢查询日志就能看到所有 SQL 的执行耗时分布。工具：bpftrace 写动态追踪脚本、pixie（基于 eBPF 的可观测性平台）。但这是高级技能——对于大多数场景，pg_stat_statements 就够了。eBPF 是当 PG 层面的工具不够用（如定位内核层面的 IO 问题）时才需要。' },
    ],
    diagnosis: [
      { symptom: 'bpftrace 脚本报 "function not defined"', cause: '内核函数在当前内核版本不存在或已改名。内核版本差异导致函数名变化。', fix: '检查内核版本：uname -r。bpftrace -l "kprobe:*函数名*" 搜索可用探针点。用 tracepoint 替代 kprobe——接口更稳定。' },
      { symptom: 'eBPF 工具在生产环境被安全团队阻止', cause: 'eBPF 需 CAP_BPF 或 CAP_SYS_ADMIN 权限——安全团队认为危险。或内核未启用 CONFIG_DEBUG_INFO_BTF。', fix: '与安全团队协商展示具体需求。非特权容器可能受限。评估 pg_stat_statements 替代大部分 eBPF 场景。' },
    ],
  exercises: [
      { level: '进阶', task: 'eBPF 相比传统 strace 有什么优势', hint: '性能开销', answer: 'strace 跟踪所有系统调用→ 巨大开销（可能拖慢生产系统 10-50%）。eBPF 在 OS 内核中运行、只跟踪你关心的、开销极小（<1%）。这就是为什么 eBPF 可以在生产环境安全使用而 strace 不行。' },
    ],
  },
};