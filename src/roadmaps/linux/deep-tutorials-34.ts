import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_34: Record<string, DeepTutorial> = {
  "FStz-bftQBK0M6zz2Bxl4": {
    mentalModel: 'systemd 服务的日志统一由 journalctl 管理。不用看 /var/log 下的文件，journalctl -u service 就能看指定服务的所有日志。',
    handsOn: [
      { title: '查看服务日志', cmd: 'journalctl -u nginx', output: '-- Logs begin at Mon 2024-01-15 09:00:00 UTC. --\nJan 15 09:00:01 prod systemd[1]: Starting A high performance web server...\nJan 15 09:00:02 prod nginx[5678]: nginx/1.18.0\nJan 15 09:00:02 prod systemd[1]: Started A high performance web server.', explain: '-u service 指定服务。journalctl 自动捕获服务的 stdout 和 stderr。' },
      { title: '实时追踪日志', cmd: 'journalctl -u nginx -f', output: '（实时显示新日志，Ctrl+C 退出）', explain: '-f（follow）实时追踪。类似 tail -f。调试时常用。' },
      { title: '按时间过滤', cmd: 'journalctl -u nginx --since "1 hour ago" --until "30 minutes ago"', output: '（只显示指定时间段的日志）', explain: '--since 和 --until 支持多种格式："2024-01-15"、"yesterday"、"1 hour ago"、"2024-01-15 14:00:00"。' },
      { title: '按优先级过滤', cmd: 'journalctl -u nginx -p err', output: 'Jan 15 14:30:45 prod nginx[5678]: [error] 1234#1234: *5678 open() "/var/www/html/missing.html" failed (2: No such file or directory)', explain: '-p 按优先级过滤：emerg/alert/crit/err/warning/notice/info/debug。-p err 只看错误及以上。' },
    ],
    diagnosis: [
      { symptom: 'journalctl 报 "No journal files were found"', cause: 'systemd-journald 服务没运行，或者日志被清空了。', fix: 'sudo systemctl start systemd-journald。检查 /var/log/journal/ 目录是否存在。' },
      { symptom: '日志太多占满磁盘', cause: 'journald 默认保留大量日志。没配置自动清理。', fix: 'journalctl --disk-usage 看占用。journalctl --vacuum-size=100M 只保留 100MB。或者编辑 /etc/systemd/journald.conf 设置 SystemMaxUse=100M。' },
      { symptom: 'journalctl 输出太慢', cause: '日志量太大（GB 级）。或者用了复杂的过滤条件。', fix: '加 --no-pager 不用 less 翻页。加 -n 100 只看最近 100 行。或者用 journalctl -u service --since today 限制范围。' },
    ],
    exercises: [
      { level: '基础', task: '查看 sshd 服务最近 1 小时的日志，找出所有失败的登录尝试', hint: 'journalctl -u sshd --since "1 hour ago" + grep "Failed"', answer: 'journalctl -u sshd --since "1 hour ago" | grep "Failed"\n\n# 或者用 -g 直接 grep（journalctl 内置）：\njournalctl -u sshd --since "1 hour ago" -g "Failed"' },
      { level: '进阶', task: '写一个脚本，监控指定服务的错误日志，出现 ERROR 就发送邮件', hint: 'journalctl -f + grep + mail', answer: '#!/bin/bash\nSERVICE=${1:-nginx}\nEMAIL="admin@example.com"\n\njournalctl -u "$SERVICE" -f -n 0 -p err | while read line; do\n  if echo "$line" | grep -qi "error"; then\n    echo "$line" | mail -s "Service Alert: $SERVICE error" "$EMAIL"\n  fi\ndone' },
      { level: '挑战', task: '写一个"日志分析器"，统计指定服务每小时的错误数量，生成报告', hint: 'journalctl + awk 按小时分组 + 统计', answer: '#!/bin/bash\nSERVICE=${1:-nginx}\nSINCE=${2:-"7 days ago"}\n\necho "=== $SERVICE 错误日志分析 ==="\necho "时间范围: $SINCE 到现在"\necho ""\n\njournalctl -u "$SERVICE" --since "$SINCE" -p err --no-pager | \\\n  awk \'{\n    # 提取日期和小时\n    date = $1\n    hour = substr($2, 1, 2)\n    key = date " " hour ":00"\n    count[key]++\n  }\n  END {\n    for (k in count) {\n      printf "%s  错误数: %d\\n", k, count[k]\n    }\n  }\' | sort\n\necho ""\necho "=== 最常见的错误消息 ==="\njournalctl -u "$SERVICE" --since "$SINCE" -p err --no-pager | \\\n  awk \'{for(i=5;i<=NF;i++) msg=msg" "$i; print msg; msg=""}\' | \\\n  sort | uniq -c | sort -rn | head -10' },
    ],
    prereqs: ['systemctl — 服务管理', 'grep/awk — 文本过滤'],
    nextSteps: ['日志轮转 — logrotate 配置', '集中日志 — ELK stack / Loki'],
  },
};
