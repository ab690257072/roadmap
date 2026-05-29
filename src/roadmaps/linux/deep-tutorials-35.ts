import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_35: Record<string, DeepTutorial> = {
  "F1sU3O1ouxTOvpidDfN3k": {
    mentalModel: 'systemd 是现代 Linux 的 init 系统（PID 1）。它管理所有服务、挂载、定时任务。systemctl 是它的命令行工具。',
    handsOn: [
      { title: '查看所有服务', cmd: 'systemctl list-units --type=service --state=running', output: 'UNIT                        LOAD   ACTIVE SUB     DESCRIPTION\nnginx.service               loaded active running A high performance web server\nsshd.service                loaded active running OpenSSH server daemon', explain: 'list-units 列出所有 unit。--type=service 只看服务。--state=running 只看运行中的。' },
      { title: '服务生命周期', cmd: 'sudo systemctl start nginx && sudo systemctl stop nginx && sudo systemctl restart nginx && sudo systemctl reload nginx', output: '（无输出，成功）', explain: 'start 启动，stop 停止，restart 重启（先 stop 再 start），reload 重读配置（不断进程，更安全）。' },
      { title: '开机启动', cmd: 'sudo systemctl enable nginx && sudo systemctl disable nginx', output: 'Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service.', explain: 'enable 设置开机启动（创建 symlink）。disable 取消。is-enabled 查看是否已设置。mask 彻底禁止。' },
      { title: '看服务依赖', cmd: 'systemctl list-dependencies nginx', output: 'nginx.service\n● ├─network.target\n● └─nss-lookup.target', explain: 'list-dependencies 显示服务的依赖关系。nginx 依赖 network.target（网络就绪）。After= 和 Requires= 在 .service 文件里定义。' },
    ],
    diagnosis: [
      { symptom: 'systemctl start 报 "Failed to start"', cause: '服务配置文件有错、依赖没满足、或者端口被占用。', fix: 'systemctl status service 看错误信息。journalctl -u service -n 50 看详细日志。检查配置文件语法（如 nginx -t）。' },
      { symptom: '服务启动后又立即停止了', cause: '程序在前台运行但 systemd 期望它在后台。或者程序崩溃了。', fix: '检查 .service 文件的 Type= 设置。Type=simple 的程序应该在前台运行（不 fork）。Type=forking 的程序应该 fork 到后台。' },
      { symptom: 'enable 后重启服务器服务没自动启动', cause: '可能是服务依赖了没启动的其他服务（After= 配置）。或者服务本身启动失败。', fix: 'systemctl list-dependencies service 看依赖。journalctl -u service 看启动日志。systemctl is-enabled service 确认是否 enabled。' },
    ],
    exercises: [
      { level: '基础', task: '列出所有失败的服务，并查看其中一个的详细错误', hint: 'systemctl --failed + systemctl status', answer: 'echo "=== 失败的服务 ==="\nsystemctl --failed --no-pager\n\necho ""\necho "=== 选择一个查看详细错误 ==="\nFAILED_SERVICE=$(systemctl --failed --no-legend | head -1 | awk \'{print $1}\')\nif [ -n "$FAILED_SERVICE" ]; then\n  systemctl status "$FAILED_SERVICE" --no-pager\n  echo ""\n  echo "=== 日志 ==="\n  journalctl -u "$FAILED_SERVICE" -n 20 --no-pager\nfi' },
      { level: '进阶', task: '写一个脚本，监控指定服务的状态，如果停止就自动重启并记录日志', hint: 'systemctl is-active + restart + echo >> log', answer: '#!/bin/bash\nSERVICE=${1:-nginx}\nLOGFILE="/var/log/service-monitor.log"\n\nif ! systemctl is-active --quiet "$SERVICE"; then\n  TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")\n  echo "$TIMESTAMP: $SERVICE 未运行，正在重启..." >> "$LOGFILE"\n  sudo systemctl restart "$SERVICE"\n  sleep 2\n  if systemctl is-active --quiet "$SERVICE"; then\n    echo "$TIMESTAMP: $SERVICE 已恢复" >> "$LOGFILE"\n  else\n    echo "$TIMESTAMP: $SERVICE 重启失败！" >> "$LOGFILE"\n    echo "$SERVICE 重启失败" | mail -s "Service Critical" admin@example.com\n  fi\nfi\n\n# 加到 crontab（每 5 分钟执行一次）：\n# */5 * * * * /path/to/service-monitor.sh nginx' },
      { level: '挑战', task: '写一个"服务依赖分析器"，画出指定服务的完整依赖树', hint: 'systemctl list-dependencies --all + 递归解析', answer: '#!/bin/bash\nSERVICE=${1:-nginx}\n\necho "=== $SERVICE 依赖树 ==="\nsystemctl list-dependencies "$SERVICE" --all --no-pager\n\necho ""\necho "=== 反向依赖（谁依赖了 $SERVICE）==="\nsystemctl list-dependencies --reverse "$SERVICE" --no-pager\n\necho ""\necho "=== 启动顺序 ==="\nsystemctl show "$SERVICE" -p After,Before,Requires,Wants | tr \' \' \'\\n\' | grep -v "^$" | sort -u\n\necho ""\necho "=== 启动耗时 ==="\nsystemd-analyze blame | grep "$SERVICE"' },
    ],
    prereqs: ['ps — 查看进程', '日志系统 — journalctl'],
    nextSteps: ['systemd unit 文件 — 自定义服务', 'systemd target — 运行级别'],
  },
};
