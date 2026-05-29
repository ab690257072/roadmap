import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_72: Record<string, DeepTutorial> = {
  "bdQNcr1sj94aX_gjwf2Fa": {
    mentalModel: 'Troubleshooting 是系统化地找出问题根因——像侦探破案，收集线索（日志、状态、输出），推理原因，验证假设。',
    handsOn: [
      { title: '收集系统状态', cmd: 'top -bn1 | head -20 && free -h && df -h && uptime', output: 'top - 14:30:00 up 5 days,  3:22,  2 users,  load average: 0.50, 0.38, 0.25\nTasks: 234 total,   1 running, 233 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  5.2 us,  2.1 sy,  0.0 ni, 92.5 id,  0.2 wa,  0.0 hi,  0.0 si,  0.0 st\n              total        used        free      shared  buff/cache   available\nMem:           15Gi       5.3Gi       2.3Gi       234Mi       7.8Gi       9.8Gi\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       100G   42G   58G  42% /', explain: 'top 看 CPU 和进程。free 看内存。df 看磁盘。uptime 看负载。这四个命令快速了解系统整体状态。' },
      { title: '查看系统日志', cmd: 'journalctl -xe --since "1 hour ago" | tail -50', output: 'Jan 15 14:30:01 prod nginx[5678]: 2024/01/15 14:30:01 [error] 5678#5678: *123 open() "/var/www/html/missing.html" failed (2: No such file or directory)', explain: 'journalctl 查看 systemd 日志。-xe 显示详情和解释。--since "1 hour ago" 看最近一小时。tail -50 看最后 50 行。' },
      { title: '检查服务状态', cmd: 'systemctl --failed && systemctl status nginx', output: '0 loaded units listed.\n● nginx.service - A high performance web server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled)\n     Active: active (running) since Mon 2024-01-15 09:00:00 UTC; 5h ago', explain: 'systemctl --failed 列出失败的服务。systemctl status 查看具体服务状态。' },
      { title: '检查网络连接', cmd: 'ss -tlnp | grep :80 && ping -c 1 google.com', output: 'LISTEN 0      511    0.0.0.0:80        0.0.0.0:*    users:(("nginx",pid=5678,fd=6))\nPING google.com (142.250.80.46) 56(84) bytes of data.\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=1 ttl=115 time=10.2 ms', explain: 'ss -tlnp 看监听端口。ping 测试外网连通性。' },
    ],
    diagnosis: [
      { symptom: '系统很慢', cause: 'CPU 密集进程、内存不足（频繁 swap）、磁盘 IO 瓶颈、网络延迟。', fix: 'top 看 CPU 密集进程。free 看内存使用（available 低则不足）。iostat -x 1 看磁盘 IO。ping 测试网络延迟。' },
      { symptom: '服务起不来', cause: '配置文件语法错误、端口被占用、依赖服务没启动、权限不够。', fix: 'journalctl -u service 看日志。systemctl status service 看状态。ss -tlnp | grep :port 检查端口。' },
      { symptom: '磁盘满了', cause: '日志文件太大、临时文件没清理、数据库增长。', fix: 'du -sh /* | sort -rh | head -10 找大目录。find /var/log -type f -size +100M 找大文件。清理或扩容。' },
    ],
    exercises: [
      { level: '基础', task: '写一个"系统健康检查脚本"，检查 CPU、内存、磁盘、网络，给出报告', hint: 'top + free + df + ping + 条件判断', answer: `#!/bin/bash
echo "=== 系统健康检查 ==="
echo "时间: $(date)"
echo ""

# 1. CPU 负载
LOAD=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | tr -d ',')
CORES=$(nproc)
echo "--- CPU ---"
echo "负载: $LOAD (核心数: $CORES)"
if (( $(echo "$LOAD > $CORES * 0.8" | bc -l) )); then
  echo "⚠️  负载较高"
else
  echo "✓ 正常"
fi
echo ""

# 2. 内存
MEM_AVAIL=$(free -m | grep Mem | awk '{print $7}')
echo "--- 内存 ---"
echo "可用: \${MEM_AVAIL}MB"
if [ "$MEM_AVAIL" -lt 1000 ]; then
  echo "⚠️  内存不足"
else
  echo "✓ 正常"
fi
echo ""

# 3. 磁盘
DISK_USED=$(df / | tail -1 | awk '{print $5}' | tr -d '%')
echo "--- 磁盘 ---"
echo "使用率: \${DISK_USED}%"
if [ "$DISK_USED" -gt 80 ]; then
  echo "⚠️  磁盘空间不足"
  du -sh /var/log/* 2>/dev/null | sort -rh | head -5
else
  echo "✓ 正常"
fi
echo ""

# 4. 网络
echo "--- 网络 ---"
if ping -c 1 -W 2 8.8.8.8 > /dev/null 2>&1; then
  echo "✓ 外网连通"
else
  echo "⚠️  外网不通"
fi` },
      { level: '进阶', task: '写一个"服务诊断脚本"，检查指定服务的状态、日志、端口、依赖', hint: 'systemctl + journalctl + ss', answer: `#!/bin/bash
SERVICE=\${1:-nginx}

echo "=== 服务诊断: $SERVICE ==="
echo ""

# 1. 服务状态
echo "--- 服务状态 ---"
systemctl status "$SERVICE" --no-pager
echo ""

# 2. 最近日志
echo "--- 最近日志 (50 行) ---"
journalctl -u "$SERVICE" -n 50 --no-pager
echo ""

# 3. 监听端口
echo "--- 监听端口 ---"
PID=$(systemctl show -p MainPID "$SERVICE" | cut -d= -f2)
if [ "$PID" -gt 0 ]; then
  ss -tlnp | grep "pid=$PID"
else
  echo "服务未运行"
fi
echo ""

# 4. 依赖
echo "--- 依赖服务 ---"
systemctl list-dependencies "$SERVICE" --no-pager | head -10
echo ""

# 5. 资源使用
echo "--- 资源使用 ---"
if [ "$PID" -gt 0 ]; then
  echo "CPU: $(ps -p $PID -o %cpu= | xargs)%"
  echo "内存: $(ps -p $PID -o %mem= | xargs)%"
fi` },
      { level: '挑战', task: '写一个"自动故障恢复脚本"，检测服务崩溃并自动重启，记录日志并发送告警', hint: 'systemctl is-active + while + 条件判断 + mail', answer: `#!/bin/bash
SERVICE=\${1:-nginx}
LOG_FILE="/var/log/service-recovery.log"
ALERT_EMAIL="admin@example.com"
CHECK_INTERVAL=30

while true; do
  if ! systemctl is-active --quiet "$SERVICE"; then
    TIMESTAMP=$(date +%Y-%m-%d\\ %H:%M:%S)
    echo "[$TIMESTAMP] $SERVICE 崩溃，正在重启..." | tee -a "$LOG_FILE"

    sudo systemctl restart "$SERVICE"
    sleep 5

    if systemctl is-active --quiet "$SERVICE"; then
      echo "[$TIMESTAMP] ✓ $SERVICE 已恢复" | tee -a "$LOG_FILE"
    else
      echo "[$TIMESTAMP] ✗ $SERVICE 重启失败" | tee -a "$LOG_FILE"
      echo "$SERVICE 重启失败 ($TIMESTAMP)" | mail -s "Service Alert" "$ALERT_EMAIL"
    fi
  fi

  sleep $CHECK_INTERVAL
done` },
    ],
    prereqs: ['进程管理 — ps/top', '日志系统 — journalctl', '网络基础 — ping/ss'],
    nextSteps: ['监控工具 — Prometheus/Grafana', '自动化运维 — Ansible'],
  },
};
