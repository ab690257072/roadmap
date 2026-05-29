import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_17: Record<string, DeepTutorial> = {
  "h01Y6dW09ChidlM2HYoav": {
    mentalModel: '程序运行起来就是进程。ps 看有哪些进程在跑，top 实时监控，kill 发信号停止进程。',
    handsOn: [
      { title: '查看所有进程', cmd: 'ps aux | head -10', output: 'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1 168432 11200 ?        Ss   Jan10   0:15 /sbin/init\ntu        1234  0.5  2.3 1234567 89012 ?       Sl   14:30   1:23 /usr/bin/firefox', explain: 'ps aux 列出所有进程。USER 用户，PID 进程号，%CPU/%MEM 资源占用，STAT 状态（S 睡眠，R 运行，Z 僵尸）。' },
      { title: '找特定进程', cmd: 'ps aux | grep nginx | grep -v grep', output: 'root      5678  0.0  0.1  45678  5678 ?        Ss   14:30   0:00 nginx: master process\nwww-data  5679  0.1  0.2  56789  8901 ?        S    14:30   0:05 nginx: worker process', explain: 'grep nginx 过滤，grep -v grep 排除 grep 自身。或者用 pgrep nginx 直接按名查 PID。' },
      { title: '实时监控', cmd: 'top', output: '（实时显示进程 CPU/内存占用，按 P 排序）', explain: 'top 实时显示进程资源占用。按 P 按 CPU 排序，M 按内存排序，q 退出。htop 更好看（需要安装）。' },
      { title: '停止进程', cmd: 'kill 1234', output: '（无输出，发送 SIGTERM 信号）', explain: 'kill PID 发 SIGTERM（请退出）。kill -9 PID 发 SIGKILL（强制终止）。优先用 SIGTERM，实在不行再 SIGKILL。' },
    ],
    diagnosis: [
      { symptom: 'kill PID 后进程还在', cause: 'SIGTERM 可以被进程捕获并忽略。或者进程在做清理工作需要时间。', fix: '等几秒再检查。或者 kill -9 PID 强制终止（不可捕获）。' },
      { symptom: 'top 里看到很多僵尸进程（Z 状态）', cause: '子进程退出但父进程没 wait() 回收。僵尸进程不占资源但占 PID。', fix: '杀掉父进程让 init 接管并回收。或者等父进程自己 wait()。' },
      { symptom: 'ps aux 输出太长看不清', cause: '进程太多，输出刷屏。', fix: '用 less 翻页：ps aux | less。或者用 grep 过滤：ps aux | grep keyword。或者用 htop（交互式）。' },
    ],
    exercises: [
      { level: '基础', task: '找出占用 CPU 最高的 5 个进程', hint: 'ps aux --sort=-%cpu + head', answer: 'ps aux --sort=-%cpu | head -6\n\n# 或者用 top 按 P 排序后截图' },
      { level: '进阶', task: '写一个脚本，监控某个进程是否存在，不存在就自动重启', hint: 'pgrep + 条件判断 + 重启命令', answer: '#!/bin/bash\nPROCESS="nginx"\nif ! pgrep -x "$PROCESS" > /dev/null; then\n  echo "$PROCESS 未运行，正在重启..."\n  sudo systemctl restart "$PROCESS"\n  echo "已重启"\nelse\n  echo "$PROCESS 正在运行 (PID: $(pgrep -x $PROCESS))"\nfi' },
      { level: '挑战', task: '写一个"进程树查看器"，显示指定进程的所有子进程', hint: 'pstree -p PID 或 ps --ppid', answer: '#!/bin/bash\nPID=${1:-$$}\necho "进程树 (PID: $PID):"\npstree -p "$PID"\n\necho ""\necho "子进程列表:"\nps -o pid,ppid,cmd --ppid "$PID"\n\n# 递归查找所有后代：\nfind_children() {\n  local parent=$1\n  ps -o pid --ppid "$parent" | tail -n +2 | while read child; do\n    echo "  $child"\n    find_children "$child"\n  done\n}\nfind_children "$PID"' },
    ],
    prereqs: ['基础命令 — 会用终端'],
    nextSteps: ['进程信号 — SIGTERM/SIGKILL/SIGHUP 的区别', 'systemd — 服务管理'],
  },

  "jSzfQf0MlnXtWHCc-HYvr": {
    mentalModel: '登录服务器后，用一组命令快速了解 CPU、内存、磁盘、网络、服务的整体状况。几分钟就能知道服务器健不健康。',
    handsOn: [
      { title: '看负载', cmd: 'uptime', output: ' 14:30:45 up 5 days,  3:22,  2 users,  load average: 0.50, 0.38, 0.25', explain: 'load average 的 1/5/15 分钟值。数值 < CPU 核心数 = 正常。4 核机器 load 2.5 健康，load 8 危险。nproc 看核心数。' },
      { title: '看内存', cmd: 'free -m', output: '              total        used        free      shared  buff/cache   available\nMem:          15892        5432        2345         234        8115       10123\nSwap:          2047         123        1924', explain: '看 available 列（不是 free）。Linux 会把空闲内存用作缓存（buff/cache），available 包含了可以释放的缓存。' },
      { title: '看磁盘', cmd: 'df -h', output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       100G   42G   58G  42% /\n/dev/sdb1       500G  180G  320G  36% /data', explain: 'Use% > 85% 该清理了。df -i 看 inode 使用率（小文件多时 inode 可能先满）。du -sh /var/log/* 找大日志。' },
      { title: '看服务', cmd: 'systemctl --failed && ss -tlnp | head -10', output: '0 loaded units listed.\nState  Recv-Q Send-Q Local Address:Port  Peer Address:Port Process\nLISTEN 0      128    0.0.0.0:22         0.0.0.0:*     users:(("sshd",pid=567,fd=3))', explain: 'systemctl --failed 看挂了的服务。ss -tlnp 看监听端口和对应进程。netstat -tlnp 是旧版等价命令。' },
    ],
    diagnosis: [
      { symptom: 'load average 很高但 CPU 使用率不高', cause: '可能是 IO wait（等待磁盘）。top 看 %wa（IO wait 比例）。iostat -x 1 看磁盘 IO。', fix: '检查磁盘 IO：iostat -x 1。可能是数据库慢查询、日志写入过多、NFS 挂载卡住。' },
      { symptom: 'free 内存很低但 available 很高', cause: 'Linux 主动把空闲内存用作文件缓存（buff/cache）。这是正常的，不是内存泄漏。', fix: '不用管。available 才是真正可用的内存。如果 available 也低，才需要关注。' },
      { symptom: 'df 显示 100% 但 du 加起来不到 100%', cause: '有些文件被删除了但进程还打开着（空间未释放）。', fix: 'lsof +L1 找已删除但未释放的文件。重启对应进程释放空间。' },
    ],
    exercises: [
      { level: '基础', task: '写一个"服务器健康检查"脚本，显示负载、内存、磁盘、失败服务', hint: 'uptime + free + df + systemctl', answer: '#!/bin/bash\necho "=== 服务器健康检查 ==="\necho ""\necho "--- 负载 ---"\nuptime | awk -F\'load average:\' \'{print $2}\'\necho ""\necho "--- 内存 ---"\nfree -h | grep -E "Mem|Swap"\necho ""\necho "--- 磁盘 ---"\ndf -h | grep -v tmpfs\necho ""\necho "--- 失败的服务 ---"\nsystemctl --failed --no-pager' },
      { level: '进阶', task: '写一个监控脚本，每 5 秒检查一次负载，超过阈值就报警', hint: 'while + sleep + uptime + awk', answer: '#!/bin/bash\nTHRESHOLD=$(nproc)  # 阈值 = CPU 核心数\nwhile true; do\n  LOAD=$(uptime | awk -F\'load average:\' \'{print $2}\' | cut -d, -f1 | tr -d \' \')\n  if (( $(echo "$LOAD > $THRESHOLD" | bc -l) )); then\n    echo "ALERT: Load $LOAD > $THRESHOLD at $(date)" | mail -s "High Load" admin@example.com\n  fi\n  sleep 5\ndone' },
      { level: '挑战', task: '写一个"服务器巡检报告"生成器，输出 HTML 格式的报告', hint: '收集所有指标 + echo HTML 标签', answer: '#!/bin/bash\nREPORT="/tmp/server-report-$(date +%Y%m%d).html"\ncat > "$REPORT" << EOF\n<!DOCTYPE html>\n<html><head><title>服务器巡检报告</title></head><body>\n<h1>服务器巡检报告 - $(date)</h1>\n<h2>负载</h2><pre>$(uptime)</pre>\n<h2>内存</h2><pre>$(free -h)</pre>\n<h2>磁盘</h2><pre>$(df -h)</pre>\n<h2>Top 10 CPU 进程</h2><pre>$(ps aux --sort=-%cpu | head -11)</pre>\n</body></html>\nEOF\necho "报告已生成: $REPORT"' },
    ],
    prereqs: ['ps — 查看进程', 'df — 查看磁盘', 'free — 查看内存'],
    nextSteps: ['监控工具 — Prometheus/Grafana', '日志分析 — ELK stack'],
  },
};
