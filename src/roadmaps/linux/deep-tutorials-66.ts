import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_66: Record<string, DeepTutorial> = {
  "4tFZ1PLpz50bddf7zSFrW": {
    mentalModel: 'Shell 编程是把命令、变量、条件、循环组合成可复用的脚本——像写菜谱，把步骤、材料、火候都写清楚，下次照着做就行。',
    handsOn: [
      { title: '创建脚本', cmd: 'cat > hello.sh << \'EOF\'\n#!/bin/bash\necho "Hello, $1!"\nEOF\nchmod +x hello.sh && ./hello.sh World', output: 'Hello, World!', explain: '#!/bin/bash 是 shebang，指定用 bash 执行。chmod +x 加执行权限。$1 是第一个参数。' },
      { title: '函数定义', cmd: 'cat > func.sh << \'EOF\'\n#!/bin/bash\ngreet() {\n  local name=$1\n  echo "Hello, $name!"\n}\ngreet "Alice"\ngreet "Bob"\nEOF\nchmod +x func.sh && ./func.sh', output: 'Hello, Alice!\nHello, Bob!', explain: '函数名() { ... } 定义函数。local 声明局部变量。函数可以接受参数（$1, $2...）。' },
      { title: '错误处理', cmd: 'cat > error.sh << \'EOF\'\n#!/bin/bash\nset -euo pipefail\necho "Starting..."\nls /nonexistent  # 会失败，脚本停止\necho "This won\'t print"\nEOF\nchmod +x error.sh && ./error.sh 2>&1 | head -3', output: 'Starting...\nls: cannot access \'/nonexistent\': No such file or directory', explain: 'set -e 遇到错误就退出。set -u 使用未定义变量就退出。set -o pipefail 管道中任一命令失败就退出。' },
      { title: '参数解析', cmd: 'cat > args.sh << \'EOF\'\n#!/bin/bash\nwhile [[ $# -gt 0 ]]; do\n  case $1 in\n    -n|--name) NAME="$2"; shift 2;;\n    -v|--verbose) VERBOSE=true; shift;;\n    *) echo "Unknown: $1"; exit 1;;\n  esac\ndone\necho "Name: ${NAME:-default}"\nEOF\nchmod +x args.sh && ./args.sh -n Alice -v', output: 'Name: Alice', explain: 'while 循环遍历参数（$# 是参数个数）。case 匹配参数。shift 移除已处理的参数。${VAR:-default} 提供默认值。' },
    ],
    diagnosis: [
      { symptom: '脚本报 "command not found"', cause: '命令不在 PATH 里，或者拼写错误。', fix: '用绝对路径：/bin/ls 而不是 ls。或者检查 PATH：echo $PATH。或者安装缺失的命令。' },
      { symptom: '脚本报 "syntax error near unexpected token"', cause: '语法错误（如少了 fi、done、}，或者引号没闭合）。', fix: 'bash -n script.sh 检查语法。或者用 shellcheck 静态分析：shellcheck script.sh。' },
      { symptom: '脚本变量没值', cause: '变量没赋值，或者拼写错误（大小写敏感）。', fix: 'echo $VAR 检查。用 set -u 让未定义变量报错。或者用 ${VAR:-default} 提供默认值。' },
    ],
    exercises: [
      { level: '基础', task: '写一个"系统信息脚本"，显示 CPU、内存、磁盘、网络信息', hint: 'lscpu + free + df + ip', answer: `#!/bin/bash
echo "=== 系统信息 ==="
echo ""

echo "--- CPU ---"
echo "型号: $(lscpu | grep 'Model name' | cut -d: -f2 | xargs)"
echo "核心数: $(nproc)"
echo "负载: $(uptime | awk -F'load average:' '{print $2}' | xargs)"
echo ""

echo "--- 内存 ---"
free -h | grep -E "Mem|Swap"
echo ""

echo "--- 磁盘 ---"
df -h | grep -E "^/dev|^Filesystem"
echo ""

echo "--- 网络 ---"
echo "IP: $(ip -4 addr show | grep inet | grep -v 127.0.0.1 | awk '{print $2}' | head -1)"
echo "网关: $(ip route | grep default | awk '{print $3}')"
echo "DNS: $(grep nameserver /etc/resolv.conf | awk '{print $2}' | head -1)"` },
      { level: '进阶', task: '写一个"日志轮转脚本"，压缩 7 天前的日志，删除 30 天前的日志', hint: 'find -mtime + gzip + rm', answer: `#!/bin/bash
LOG_DIR="/var/log/myapp"
COMPRESS_DAYS=7
DELETE_DAYS=30

echo "=== 日志轮转 ==="
echo "目录: $LOG_DIR"
echo ""

# 压缩 7 天前的日志
echo "--- 压缩 \${COMPRESS_DAYS} 天前的日志 ---"
find "$LOG_DIR" -name "*.log" -mtime +$COMPRESS_DAYS -exec gzip {} \\;
COMPRESSED=$(find "$LOG_DIR" -name "*.log.gz" -mtime +$COMPRESS_DAYS -mtime -$DELETE_DAYS | wc -l)
echo "✓ 已压缩 $COMPRESSED 个文件"
echo ""

# 删除 30 天前的日志
echo "--- 删除 \${DELETE_DAYS} 天前的日志 ---"
DELETED=$(find "$LOG_DIR" -name "*.log.gz" -mtime +$DELETE_DAYS -delete -print | wc -l)
echo "✓ 已删除 $DELETED 个文件"
echo ""

# 显示当前状态
echo "--- 当前状态 ---"
du -sh "$LOG_DIR"
find "$LOG_DIR" -type f | wc -l
echo "个文件"` },
      { level: '挑战', task: '写一个"部署脚本"，支持多环境（dev/staging/prod），自动备份、部署、回滚', hint: 'case 语句 + rsync + 备份目录', answer: `#!/bin/bash
set -euo pipefail

ENV=\${1:-dev}
APP_DIR="/var/www/myapp"
BACKUP_DIR="/var/backups/myapp"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

deploy() {
  echo "=== 部署到 $ENV ==="

  # 1. 备份当前版本
  echo "备份当前版本..."
  mkdir -p "$BACKUP_DIR"
  tar -czf "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz" "$APP_DIR"
  echo "✓ 已备份: backup_$TIMESTAMP.tar.gz"

  # 2. 部署新版本
  echo "部署新版本..."
  rsync -avz --delete ./dist/ "$APP_DIR/"
  echo "✓ 部署完成"

  # 3. 重启服务
  echo "重启服务..."
  sudo systemctl restart myapp
  echo "✓ 服务已重启"

  # 4. 健康检查
  sleep 5
  if curl -f http://localhost:8080/health > /dev/null 2>&1; then
    echo "✓ 健康检查通过"
  else
    echo "✗ 健康检查失败，回滚..."
    rollback
  fi
}

rollback() {
  LATEST_BACKUP=$(ls -t "$BACKUP_DIR"/backup_*.tar.gz | head -1)
  echo "回滚到: $LATEST_BACKUP"
  tar -xzf "$LATEST_BACKUP" -C /
  sudo systemctl restart myapp
  echo "✓ 已回滚"
}

case "$ENV" in
  dev|staging|prod)
    deploy
    ;;
  rollback)
    rollback
    ;;
  *)
    echo "用法: $0 {dev|staging|prod|rollback}"
    exit 1
    ;;
esac` },
    ],
    prereqs: ['变量 — 存储数据', '条件判断 — if/else', '循环 — for/while'],
    nextSteps: ['调试 — bash -x', '测试 — bats'],
  },
};
