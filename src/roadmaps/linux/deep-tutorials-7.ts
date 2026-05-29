import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_7: Record<string, DeepTutorial> = {
  "8QBMyL8D5jPovxN8jyZW9": {
    mentalModel: 'Shell 是命令行的引擎：你打一行文字，shell 帮你解析成命令执行。它支持变量、条件、循环——是一门完整的编程语言。',
    handsOn: [
      { title: '看当前 shell', cmd: 'echo $SHELL && ps -p $$', output: '/bin/bash\n  PID TTY          TIME CMD\n 1234 pts/0    00:00:00 bash', explain: '$SHELL 是默认 shell（通常是 bash）。$$ 是当前 shell 的 PID。ps -p $$ 看当前进程。' },
      { title: '命令历史', cmd: 'history | tail -10', output: '  123  ls -la\n  124  cd /var/log\n  125  tail syslog', explain: 'history 显示命令历史。!123 重复第 123 条命令。!! 重复上一条。Ctrl+R 搜索历史。' },
      { title: '快捷键', cmd: '# Ctrl+A 跳到行首\n# Ctrl+E 跳到行尾\n# Ctrl+U 清除光标前内容\n# Ctrl+K 清除光标后内容\n# Ctrl+W 删除前一个单词', output: '（快捷键效果）', explain: '这些快捷键大幅提升编辑效率。Ctrl+R 搜索历史命令特别有用。' },
      { title: 'alias 取短名字', cmd: 'alias ll="ls -lah" && ll /tmp', output: 'total 0\ndrwxrwxrwt  8 root root  160 Jan 15 14:30 .\ndrwxr-xr-x 18 root root 4096 Jan 10 09:00 ..', explain: 'alias 给长命令取短名字。写在 ~/.bashrc 里永久生效。alias 不带参数显示所有别名。' },
    ],
    diagnosis: [
      { symptom: 'alias 没生效', cause: 'alias 只在当前 shell 生效。写在 ~/.bashrc 里需要 source ~/.bashrc 或开新终端。', fix: 'source ~/.bashrc 立即加载。或者关掉终端重新开。' },
      { symptom: '命令执行了错误的版本', cause: '可能是 alias 覆盖了命令。或者 PATH 里有同名命令。', fix: 'type command 看真实来源。unalias command 取消别名。' },
      { symptom: 'Shell 脚本报语法错误但看起来没问题', cause: '可能用了 bash 语法但系统用 sh 执行（sh 是 POSIX 标准，不支持数组等）。', fix: '脚本第一行加 #!/bin/bash。或者用 bash script.sh 显式指定。' },
    ],
    exercises: [
      { level: '基础', task: '创建 3 个常用 alias（ll、gs、gp）', hint: 'alias name="command"', answer: 'alias ll="ls -lah"\nalias gs="git status"\nalias gp="git push"\n# 加到 ~/.bashrc 永久生效：\necho \'alias ll="ls -lah"\' >> ~/.bashrc\necho \'alias gs="git status"\' >> ~/.bashrc\necho \'alias gp="git push"\' >> ~/.bashrc' },
      { level: '进阶', task: '用 history + grep 找出你最常用的 10 个命令', hint: 'history | awk \'{print $2}\' | sort | uniq -c | sort -rn | head', answer: 'history | awk \'{print $2}\' | sort | uniq -c | sort -rn | head -10' },
      { level: '挑战', task: '写一个 shell 函数，接受目录参数，显示该目录的磁盘占用、文件数、最近修改时间', hint: 'du -sh、find | wc -l、find -printf "%T@" | sort -rn | head -1', answer: 'dirinfo() {\n  local dir=${1:-.}\n  echo "=== $dir ==="\n  echo "磁盘占用: $(du -sh "$dir" | cut -f1)"\n  echo "文件数: $(find "$dir" -type f | wc -l)"\n  echo "目录数: $(find "$dir" -type d | wc -l)"\n  local newest=$(find "$dir" -type f -printf "%T@ %p\\n" 2>/dev/null | sort -rn | head -1)\n  if [ -n "$newest" ]; then\n    echo "最新文件: $(echo "$newest" | cut -d" " -f2-)"\n  fi\n}' },
    ],
    prereqs: ['基础命令 — pwd/ls/cd'],
    nextSteps: ['Shell 脚本 — 自动化任务', '环境变量 — export 和 $VAR'],
  },

  "Yyk28H6TiteZEGv6Aps1h": {
    mentalModel: 'tail 看文件末尾，-f 实时追踪——像守在传真机出口，每来一行新内容就立刻显示。排障最常用的命令之一。',
    handsOn: [
      { title: '看文件末尾', cmd: 'tail -n 20 /var/log/syslog', output: 'Jan 15 14:30:01 prod CRON[1234]: (root) CMD (test -x /usr/sbin/anacron)\nJan 15 14:30:05 prod systemd[1]: Started Session 42 of user tu.', explain: '默认显示最后 10 行。-n 20 显示最后 20 行。快速看日志最新内容时最常用。' },
      { title: '实时追踪日志', cmd: 'tail -f /var/log/nginx/access.log', output: '192.168.1.100 - - [15/Jan/2024:14:30:15] "GET /api/users HTTP/1.1" 200 1234\n10.0.0.5 - - [15/Jan/2024:14:30:16] "POST /api/login HTTP/1.1" 401 89', explain: '-f（follow）持续输出新增行。Ctrl+C 停止。可以同时 tail -f file1 file2 看多个日志。' },
      { title: '从第 N 行开始', cmd: 'tail -n +10 /etc/passwd', output: 'uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin\nproxy:x:13:13:proxy:/bin:/usr/sbin/nologin\n...', explain: 'tail -n +10 从第 10 行开始输出（跳过前 9 行）。配合 wc -l 可以跳过文件头。' },
      { title: '配合 grep 过滤', cmd: 'tail -f /var/log/syslog | grep --line-buffered "ERROR"', output: 'Jan 15 14:30:45 prod myapp[5678]: ERROR Connection timeout', explain: '实时追踪日志并只过滤出包含 ERROR 的行。--line-buffered 防止 grep 缓冲（否则可能延迟输出）。' },
    ],
    diagnosis: [
      { symptom: 'tail -f 追踪的文件被轮转后不更新了', cause: '日志轮转（logrotate）会把文件重命名并创建新文件。tail -f 追踪的是文件描述符（旧文件），不是文件名。', fix: '用 tail -F（大写 F）追踪文件名。-F 会在文件被轮转后自动切换到新文件。' },
      { symptom: 'tail -f 在脚本里卡住后续命令', cause: 'tail -f 不会自动退出，会一直等着。在脚本里用会阻塞。', fix: '用 tail -n 100（不跟 -f）或者用 timeout 10 tail -f（10 秒后超时）。' },
      { symptom: 'tail 输出延迟', cause: '管道中的 grep 默认缓冲 4KB 才输出。', fix: 'grep 加 --line-buffered：tail -f log | grep --line-buffered ERROR。' },
    ],
    exercises: [
      { level: '基础', task: '实时追踪 /var/log/syslog，只看包含 "systemd" 的行', hint: 'tail -f + grep --line-buffered', answer: 'tail -f /var/log/syslog | grep --line-buffered "systemd"' },
      { level: '进阶', task: '写一个脚本，同时追踪 3 个日志文件，用不同颜色标记来源', hint: 'tail -f 多文件 + awk 加颜色', answer: '#!/bin/bash\ntail -f /var/log/syslog /var/log/auth.log /var/log/nginx/access.log 2>/dev/null | \\\n  awk \'\n    /^==> \\/var\\/log\\/syslog/ {color="\\033[32m"}  # 绿色\n    /^==> \\/var\\/log\\/auth/ {color="\\033[33m"}   # 黄色\n    /^==> \\/var\\/log\\/nginx/ {color="\\033[36m"}  # 青色\n    {printf "%s%s\\033[0m\\n", color, $0}\n  \'' },
      { level: '挑战', task: '写一个"日志分析器"：实时追踪日志，统计每分钟的 ERROR 数量，超过 10 个就报警', hint: 'tail -f + awk 统计 + 条件判断', answer: '#!/bin/bash\ntail -f /var/log/app.log | \\\n  awk \'\n    /ERROR/ {\n      minute = substr($1, 1, 16)  # 取到分钟\n      count[minute]++\n      if (count[minute] == 10) {\n        system("echo \\"ALERT: 10 errors in " minute "\\" | mail -s \\"Error Alert\\" admin@example.com")\n      }\n    }\n  \'' },
    ],
    prereqs: ['head — 看文件开头', '管道 + grep — 过滤日志'],
    nextSteps: ['journalctl — systemd 日志', 'logrotate — 日志轮转配置'],
  },
};
