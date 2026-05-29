import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_25: Record<string, DeepTutorial> = {
  "ewUuI_x-YhOQIYd3MTgJJ": {
    mentalModel: 'systemd 是 Linux 的服务管理器（init 系统）。systemctl 是它的命令行工具：start/stop/restart/enable/disable/status。',
    handsOn: [
      { title: '查看服务状态', cmd: 'systemctl status nginx', output: '● nginx.service - A high performance web server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled)\n     Active: active (running) since Mon 2024-01-15 09:00:00 UTC; 5h ago\n   Main PID: 5678 (nginx)\n      Tasks: 3 (limit: 4659)\n     Memory: 12.3M', explain: 'status 显示服务状态、是否开机启动（enabled）、PID、内存占用。Active: active (running) 表示正常运行。' },
      { title: '启动/停止/重启', cmd: 'sudo systemctl start nginx && sudo systemctl stop nginx && sudo systemctl restart nginx', output: '（无输出，成功）', explain: 'start 启动，stop 停止，restart 重启（先 stop 再 start）。reload 重读配置（不断进程，更安全）。' },
      { title: '开机启动', cmd: 'sudo systemctl enable nginx && sudo systemctl disable nginx', output: 'Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service.', explain: 'enable 设置开机启动（创建 symlink）。disable 取消。is-enabled 查看是否已设置。mask 彻底禁止（即使手动 start 也不行）。' },
      { title: '查看日志', cmd: 'journalctl -u nginx -f', output: '-- Logs begin at Mon 2024-01-15 09:00:00 UTC. --\nJan 15 14:30:01 prod nginx[5678]: 192.168.1.100 - - [15/Jan/2024:14:30:01] "GET / HTTP/1.1" 200', explain: 'journalctl -u service 看指定服务的日志。-f 实时追踪。--since "1 hour ago" 看最近一小时。-n 50 看最近 50 行。' },
    ],
    diagnosis: [
      { symptom: 'systemctl start 报 "Failed to start"', cause: '服务配置文件有错、依赖没满足、或者端口被占用。', fix: 'systemctl status service 看错误信息。journalctl -u service -n 50 看详细日志。检查配置文件语法（如 nginx -t）。' },
      { symptom: '服务启动后又立即停止了', cause: '程序在前台运行但 systemd 期望它在后台。或者程序崩溃了。', fix: '检查 .service 文件的 Type= 设置。Type=simple 的程序应该在前台运行（不 fork）。Type=forking 的程序应该 fork 到后台。' },
      { symptom: 'enable 后重启服务器服务没自动启动', cause: '可能是服务依赖了没启动的其他服务（After= 配置）。或者服务本身启动失败。', fix: 'systemctl list-dependencies service 看依赖。journalctl -u service 看启动日志。systemctl is-enabled service 确认是否 enabled。' },
    ],
    exercises: [
      { level: '基础', task: '查看 sshd 服务的状态，确认是否开机启动', hint: 'systemctl status + is-enabled', answer: 'systemctl status sshd\nsystemctl is-enabled sshd\n\n# 如果没开机启动，启用它：\nsudo systemctl enable sshd' },
      { level: '进阶', task: '写一个自定义 systemd 服务，运行你的脚本，设置开机启动', hint: '创建 .service 文件 + daemon-reload + enable', answer: '# 1. 创建服务文件\nsudo nano /etc/systemd/system/myapp.service\n\n# 内容：\n[Unit]\nDescription=My Application\nAfter=network.target\n\n[Service]\nType=simple\nUser=tu\nWorkingDirectory=/home/tu/myapp\nExecStart=/home/tu/myapp/start.sh\nRestart=on-failure\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n\n# 2. 重新加载配置\nsudo systemctl daemon-reload\n\n# 3. 启动并设置开机\nsudo systemctl start myapp\nsudo systemctl enable myapp\n\n# 4. 查看状态\nsystemctl status myapp' },
      { level: '挑战', task: '写一个"服务健康检查"脚本，每分钟检查一次，失败就自动重启并报警', hint: 'systemctl is-active + cron + mail', answer: '#!/bin/bash\nSERVICE="myapp"\nif ! systemctl is-active --quiet "$SERVICE"; then\n  echo "$SERVICE 未运行，正在重启..." | mail -s "Service Alert" admin@example.com\n  sudo systemctl restart "$SERVICE"\n  sleep 5\n  if systemctl is-active --quiet "$SERVICE"; then\n    echo "$SERVICE 已恢复" | mail -s "Service Recovered" admin@example.com\n  else\n    echo "$SERVICE 重启失败！" | mail -s "Service Critical" admin@example.com\n  fi\nfi\n\n# 加到 crontab（每分钟执行一次）：\n# * * * * * /path/to/health-check.sh' },
    ],
    prereqs: ['ps — 查看进程', '日志系统 — /var/log 和 journalctl'],
    nextSteps: ['systemd unit 文件 — 自定义服务配置', 'systemd timer — 替代 cron 的定时任务'],
  },
};
