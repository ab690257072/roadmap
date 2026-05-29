import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_21: Record<string, DeepTutorial> = {
  "WwybfdKuP9ogCGpT7d3NU": {
    mentalModel: '/var/log/auth.log（Debian）或 /var/log/secure（RHEL）记录所有登录和 sudo 操作。像大楼的门禁记录：谁刷卡进了大楼、几点进的、有没有刷失败的。',
    handsOn: [
      { title: '查看认证日志', cmd: 'sudo tail -20 /var/log/auth.log', output: 'Jan 15 14:30:01 prod sshd[5678]: Accepted publickey for tu from 192.168.1.100 port 52345 ssh2\nJan 15 14:30:05 prod sudo: tu : TTY=pts/0 ; PWD=/home/tu ; USER=root ; COMMAND=/usr/bin/apt update', explain: '成功的 SSH 登录显示 Accepted publickey/password for user。sudo 使用显示 user : TTY=... ; COMMAND=...。' },
      { title: '看登录历史', cmd: 'last | head -10', output: 'tu       pts/0        192.168.1.100    Mon Jan 15 14:30   still logged in\ntu       pts/1        10.0.0.5         Mon Jan 15 10:22 - 12:45  (02:23)\nreboot   system boot  5.15.0-91-generi Mon Jan 15 09:00   still running', explain: 'last 看最近的登录记录（谁从哪个 IP 几点登录的）。lastb 看失败的登录尝试。lastlog 看每个用户最后一次登录时间。' },
      { title: '分析暴力破解', cmd: 'grep "Failed" /var/log/auth.log | awk \'{print $NF}\' | sort | uniq -c | sort -rn | head -10', output: '   523 45.33.22.11\n   312 123.45.67.89\n   189 98.76.54.32', explain: 'grep "Failed" 找失败登录。awk \'{print $NF}\' 取最后一列（IP）。sort | uniq -c | sort -rn 统计频率。如果某个 IP 失败次数特别多，说明在被暴力破解。' },
      { title: '看当前登录用户', cmd: 'who && w', output: 'tu       pts/0        2024-01-15 14:30 (192.168.1.100)\ntu       pts/1        2024-01-15 10:22 (10.0.0.5)\n\nUSER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT\ntu       pts/0    192.168.1.100    14:30    0.00s  0.05s  0.00s w', explain: 'who 显示当前登录的用户。w 更详细，显示用户在干什么（WHAT 列）。' },
    ],
    diagnosis: [
      { symptom: 'auth.log 里有大量失败登录', cause: '有人在暴力破解你的 SSH。常见于公网服务器。', fix: '安装 fail2ban 自动封禁暴力破解 IP。配置 /etc/fail2ban/jail.local 设置重试次数和封禁时间。SSH 建议用密钥登录并禁用密码登录。' },
      { symptom: 'last 显示未知 IP 登录', cause: '可能是你忘了自己从哪登录的，或者真的被入侵了。', fix: '检查 ~/.ssh/authorized_keys 看有没有未知的公钥。检查 /etc/passwd 看有没有新增用户。改密码、换 SSH key。' },
      { symptom: 'auth.log 文件很大', cause: '日志没轮转，积累太多。', fix: '检查 /etc/logrotate.d/rsyslog 配置。auth.log 应该每天轮转，保留 4 周。手动压缩：gzip /var/log/auth.log.1。' },
    ],
    exercises: [
      { level: '基础', task: '查看今天有多少次成功的 SSH 登录', hint: 'grep "Accepted" /var/log/auth.log + grep 今天日期', answer: 'TODAY=$(date +%b\\ %e)\nsudo grep "Accepted" /var/log/auth.log | grep "$TODAY" | wc -l' },
      { level: '进阶', task: '写一个脚本，检测过去 1 小时内失败的 SSH 登录次数，超过 10 次就报警', hint: 'grep "Failed" + awk 过滤时间 + wc -l', answer: '#!/bin/bash\nTHRESHOLD=10\nONE_HOUR_AGO=$(date -d "1 hour ago" "+%b %e %H")\n\nFAILED_COUNT=$(sudo grep "Failed" /var/log/auth.log | awk -v hour="$ONE_HOUR_AGO" \'$1" "$2" "$3 ~ hour {count++} END {print count+0}\')\n\nif [ "$FAILED_COUNT" -gt "$THRESHOLD" ]; then\n  echo "ALERT: $FAILED_COUNT failed SSH attempts in the last hour" | mail -s "SSH Alert" admin@example.com\nfi' },
      { level: '挑战', task: '写一个"登录报告"生成器，显示每个用户的登录次数、最近登录时间、失败次数', hint: 'lastlog + last + lastb + awk', answer: '#!/bin/bash\necho "=== 用户登录报告 ==="\nprintf "%-15s %-10s %-20s %-10s\\n" "用户" "登录次数" "最近登录" "失败次数"\nprintf "%-15s %-10s %-20s %-10s\\n" "---" "---" "---" "---"\n\nfor user in $(awk -F: \'$3 >= 1000 {print $1}\' /etc/passwd); do\n  LOGIN_COUNT=$(last "$user" 2>/dev/null | grep -c "^$user")\n  LAST_LOGIN=$(lastlog -u "$user" | tail -1 | awk \'{print $4" "$5" "$6" "$7}\')\n  FAILED_COUNT=$(sudo lastb 2>/dev/null | grep -c "^$user")\n  printf "%-15s %-10s %-20s %-10s\\n" "$user" "$LOGIN_COUNT" "$LAST_LOGIN" "$FAILED_COUNT"\ndone' },
    ],
    prereqs: ['grep/awk — 文本过滤', '日志系统 — /var/log 结构'],
    nextSteps: ['fail2ban — 自动封禁暴力破解', 'SSH 安全 — 密钥登录 + 禁用密码'],
  },
};
