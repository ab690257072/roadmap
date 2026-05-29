import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_46: Record<string, DeepTutorial> = {
  "ru7mpLQZKE1QxAdiA1sS3": {
    mentalModel: 'Linux 日志系统集中管理所有日志——rsyslog 收集，logrotate 轮转，/var/log/ 存储。像公司的档案室：所有部门的文件都归档到这里，定期清理旧档案。',
    handsOn: [
      { title: '查看系统日志', cmd: 'ls -lh /var/log/ | head -15', output: '-rw-r----- 1 syslog adm  45M Jan 15 syslog\n-rw-r----- 1 syslog adm  12M Jan 15 auth.log\n-rw-r--r-- 1 root   root 8.5K Jan 15 boot.log\ndrwxr-xr-x 2 root   root 4.0K Jan 15 nginx/', explain: '/var/log/ 下存所有系统和服务日志。syslog 是主日志，auth.log 是认证日志，各服务有自己的子目录。' },
      { title: '实时追踪日志', cmd: 'tail -f /var/log/syslog', output: 'Jan 15 14:30:01 prod CRON[5678]: (root) CMD (test -x /usr/sbin/anacron)\nJan 15 14:30:05 prod systemd[1]: Started Session 42 of user tu.', explain: 'tail -f 实时追踪文件变化。Ctrl+C 停止。可以同时追踪多个文件：tail -f /var/log/syslog /var/log/auth.log。' },
      { title: '配置日志轮转', cmd: 'cat /etc/logrotate.d/nginx', output: '/var/log/nginx/*.log {\n    daily\n    missingok\n    rotate 14\n    compress\n    delaycompress\n    notifempty\n    sharedscripts\n    postrotate\n        [ -f /var/run/nginx.pid ] && kill -USR1 `cat /var/run/nginx.pid`\n    endscript\n}', explain: 'logrotate 每天轮转 nginx 日志，保留 14 天，压缩旧日志。postrotate 脚本在轮转后发 USR1 信号让 nginx 重新打开日志文件。' },
      { title: '手动轮转测试', cmd: 'sudo logrotate -d /etc/logrotate.conf', output: 'reading config file /etc/logrotate.conf\n... rotating pattern: /var/log/syslog  forced from command line (7 rotations)\nempty log files are not rotated\nold logs are removed', explain: 'logrotate -d（debug）模拟轮转但不实际执行。看看哪些文件会被轮转、怎么轮转。确认无误后去掉 -d 执行。' },
    ],
    diagnosis: [
      { symptom: '/var/log 占满磁盘', cause: '日志没轮转，或者轮转配置不对（保留太多天、没压缩）。', fix: 'du -sh /var/log/* 找最大的文件。检查 /etc/logrotate.d/ 配置。临时清理：gzip /var/log/syslog.1（压缩旧日志）。' },
      { symptom: '日志文件是空的', cause: 'rsyslog 服务没运行，或者日志被重定向到其他地方（如 journald）。', fix: 'systemctl status rsyslog。或者用 journalctl 看 systemd 日志。检查 /etc/rsyslog.conf 配置。' },
      { symptom: 'logrotate 报 "error: unable to open"', cause: '日志文件不存在，或者权限不对。', fix: '检查文件是否存在：ls -l /var/log/file.log。logrotate 配置加 missingok 忽略不存在的文件。' },
    ],
    exercises: [
      { level: '基础', task: '查看 /var/log 下最大的 5 个日志文件，并计算总大小', hint: 'du -sh + sort -rh + head', answer: 'echo "=== 最大的 5 个日志文件 ==="\nsudo du -sh /var/log/* 2>/dev/null | sort -rh | head -5\n\necho ""\necho "=== /var/log 总大小 ==="\nsudo du -sh /var/log/' },
      { level: '进阶', task: '写一个"日志清理脚本"，删除超过 30 天的旧日志，压缩 7-30 天的日志', hint: 'find -mtime +30 -delete + find -mtime +7 -exec gzip', answer: '#!/bin/bash\nLOG_DIR="/var/log"\n\necho "=== 日志清理 ==="\necho "目标目录: $LOG_DIR"\necho ""\n\n# 1. 删除超过 30 天的日志\necho "--- 删除超过 30 天的日志 ---"\nDELETED=$(sudo find "$LOG_DIR" -name "*.log.*" -mtime +30 -delete -print | wc -l)\necho "删除了 $DELETED 个文件"\n\n# 2. 压缩 7-30 天的日志\necho ""\necho "--- 压缩 7-30 天的日志 ---"\nCOMPRESSED=$(sudo find "$LOG_DIR" -name "*.log.*" -mtime +7 -mtime -30 ! -name "*.gz" -exec gzip {} \\; -print | wc -l)\necho "压缩了 $COMPRESSED 个文件"\n\n# 3. 显示清理后的大小\necho ""\necho "清理后总大小:"\nsudo du -sh "$LOG_DIR"' },
      { level: '挑战', task: '写一个"日志分析器"，从 syslog 提取关键事件（登录、服务启停、错误），生成报告', hint: 'grep + awk + 分类统计', answer: '#!/bin/bash\nLOG_FILE="/var/log/syslog"\nREPORT="/tmp/log-analysis-$(date +%Y%m%d).md"\n\ncat > "$REPORT" << EOF\n# 系统日志分析报告\n\n**时间**: $(date)\n**主机**: $(hostname)\n**日志文件**: $LOG_FILE\n\n## 1. 登录事件\n\n\\\`\\\`\\\`\n$(sudo grep "sshd.*Accepted" "$LOG_FILE" | wc -l) 次成功登录\n$(sudo grep "sshd.*Failed" "$LOG_FILE" | wc -l) 次失败登录\n\\\`\\\`\\\`\n\n### 登录 IP 统计\n\\\`\\\`\\\`\n$(sudo grep "sshd.*Accepted" "$LOG_FILE" | awk \'{print $(NF-3)}\' | sort | uniq -c | sort -rn | head -10)\n\\\`\\\`\\\`\n\n## 2. 服务启停\n\n\\\`\\\`\\\`\n$(sudo grep "systemd.*Started\\|systemd.*Stopped" "$LOG_FILE" | wc -l) 次服务启停\n\\\`\\\`\\\`\n\n### 最近的服务变更\n\\\`\\\`\\\`\n$(sudo grep "systemd.*Started\\|systemd.*Stopped" "$LOG_FILE" | tail -10)\n\\\`\\\`\\\`\n\n## 3. 错误事件\n\n\\\`\\\`\\\`\n$(sudo grep -i "error\\|fail\\|denied" "$LOG_FILE" | wc -l) 个错误/失败/拒绝事件\n\\\`\\\`\\\`\n\n### 最常见的错误\n\\\`\\\`\\\`\n$(sudo grep -i "error\\|fail" "$LOG_FILE" | awk \'{for(i=5;i<=NF;i++) msg=msg" "$i; print msg; msg=""}\' | sort | uniq -c | sort -rn | head -10)\n\\\`\\\`\\\`\n\n## 4. 建议\n\n- 如果失败登录很多，考虑安装 fail2ban\n- 如果错误日志很多，检查相关服务状态\n- 定期轮转日志，避免占满磁盘\nEOF\n\necho "报告已生成: $REPORT"\ncat "$REPORT"' },
    ],
    prereqs: ['tail -f — 实时追踪文件', 'grep/awk — 文本过滤'],
    nextSteps: ['集中日志 — ELK stack / Loki', '日志监控 — 异常检测告警'],
  },
};
