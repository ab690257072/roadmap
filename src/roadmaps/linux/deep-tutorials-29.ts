import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_29: Record<string, DeepTutorial> = {
  "tx0nh6cbBjVxwNlyrBNYm": {
    mentalModel: 'df 看磁盘空间，free 看内存。两者都是"看还剩多少资源"的工具。df -h 和 free -h 是人类可读格式。',
    handsOn: [
      { title: '看磁盘使用情况', cmd: 'df -h', output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       100G   42G   58G  42% /\ntmpfs           7.8G  2.1M  7.8G   1% /dev/shm\n/dev/sdb1       500G  180G  320G  36% /data', explain: '-h 人类可读格式（GB/MB）。Use% 是使用率。/dev/sda1 是系统盘（42% 使用），/dev/sdb1 是数据盘（36% 使用）。' },
      { title: '看内存使用情况', cmd: 'free -h', output: '              total        used        free      shared  buff/cache   available\nMem:           15Gi       5.3Gi       2.3Gi       234Mi       7.8Gi       10Gi\nSwap:         2.0Gi       123Mi       1.9Gi', explain: '看 available 列（不是 free）。Linux 会把空闲内存用作缓存（buff/cache），available 包含了可以释放的缓存。' },
      { title: '找出大文件', cmd: 'du -sh /var/log/* | sort -rh | head -10', output: '45G\t/var/log/syslog\n12G\t/var/log/kern.log\n8.5G\t/var/log/auth.log', explain: 'du -sh 看目录/文件大小。sort -rh 按大小倒序。head -10 取前 10。找出占空间最多的文件。' },
      { title: '看 inode 使用情况', cmd: 'df -i', output: 'Filesystem       Inodes   IUsed   IFree IUse% Mounted on\n/dev/sda1       6553600  234567 6319033    4% /\n/dev/sdb1      32768000 8901234 23866766   27% /data', explain: '-i 看 inode 使用率。小文件多时 inode 可能先满（即使磁盘还有空间）。Use% 100% 就不能创建新文件了。' },
    ],
    diagnosis: [
      { symptom: 'df 显示磁盘 100% 但 du 加起来不到 100%', cause: '有些文件被删除了但进程还打开着（空间未释放）。lsof +L1 找到这些"僵尸文件"。', fix: 'lsof +L1 看已删除但未释放的文件。重启对应进程释放空间。' },
      { symptom: 'free 内存很低但 available 很高', cause: 'Linux 主动把空闲内存用作文件缓存（buff/cache）。这是正常的，不是内存泄漏。', fix: '不用管。available 才是真正可用的内存。如果 available 也低，才需要关注。' },
      { symptom: 'inode 100% 但磁盘还有空间', cause: '大量小文件耗尽了 inode。每个文件占一个 inode，inode 总数在格式化时确定。', fix: 'find /path -type f | wc -l 统计文件数。删除不需要的小文件。或者重新格式化时增加 inode 数量。' },
    ],
    exercises: [
      { level: '基础', task: '查看系统磁盘和内存使用情况，找出使用率最高的分区', hint: 'df -h + free -h + sort', answer: 'echo "=== 磁盘 ==="\ndf -h | grep -v tmpfs | sort -k5 -rh | head -5\n\necho ""\necho "=== 内存 ==="\nfree -h\n\necho ""\necho "=== 最大文件 ==="\ndu -sh /var/log/* 2>/dev/null | sort -rh | head -5' },
      { level: '进阶', task: '写一个"磁盘清理助手"，找出大于 100MB 的日志文件，提示是否删除', hint: 'find -size +100M + read + rm', answer: '#!/bin/bash\necho "查找大于 100MB 的日志文件..."\nfind /var/log -type f -size +100M 2>/dev/null | while read file; do\n  SIZE=$(du -h "$file" | cut -f1)\n  echo "$file ($SIZE)"\n  read -p "删除？(y/n) " confirm\n  if [ "$confirm" = "y" ]; then\n    rm "$file"\n    echo "已删除: $file"\n  fi\ndone' },
      { level: '挑战', task: '写一个"资源监控仪表盘"，每 5 秒刷新一次，显示 CPU、内存、磁盘、网络', hint: 'top + free + df + /proc/net/dev', answer: '#!/bin/bash\nwhile true; do\n  clear\n  echo "=== 系统资源监控 $(date) ==="\n  echo ""\n  \n  echo "--- CPU 负载 ---"\n  uptime | awk -F\'load average:\' \'{print $2}\'\n  \n  echo ""\n  echo "--- 内存 ---"\n  free -h | grep -E "Mem|Swap"\n  \n  echo ""\n  echo "--- 磁盘 ---"\n  df -h | grep -v tmpfs | awk \'NR==1 || $5+0 > 50 {print}\'\n  \n  echo ""\n  echo "--- 网络 (eth0) ---"\n  cat /proc/net/dev | grep eth0 | awk \'{\n    printf "接收: %.1f MB  发送: %.1f MB\\n", $2/1048576, $10/1048576\n  }\'\n  \n  echo ""\n  echo "按 Ctrl+C 退出"\n  sleep 5\ndone' },
    ],
    prereqs: ['ls — 看文件信息', 'du — 看目录大小'],
    nextSteps: ['监控工具 — Prometheus/Grafana', '日志轮转 — logrotate 配置'],
  },
};
