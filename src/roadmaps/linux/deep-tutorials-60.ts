import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_60: Record<string, DeepTutorial> = {
  "rQxfp7UWqN72iqewZhOdc": {
    mentalModel: 'Shell 条件判断（if/else）根据条件执行不同代码——像岔路口，条件决定走哪条路。[ condition ] 或 [[ condition ]] 测试条件真假。',
    handsOn: [
      { title: '基础 if/else', cmd: 'AGE=20; if [ $AGE -ge 18 ]; then echo "成年人"; else echo "未成年"; fi', output: '成年人', explain: 'if [ condition ]; then ... else ... fi。-ge 是大于等于。其他比较：-eq 等于，-ne 不等于，-lt 小于，-gt 大于，-le 小于等于。' },
      { title: '字符串比较', cmd: 'NAME="Alice"; if [ "$NAME" = "Alice" ]; then echo "Hello Alice"; fi', output: 'Hello Alice', explain: '= 字符串相等。!= 不相等。-z 字符串为空。-n 字符串非空。记得加引号："$NAME"。' },
      { title: '文件测试', cmd: 'if [ -f /etc/passwd ]; then echo "文件存在"; fi; if [ -d /etc ]; then echo "目录存在"; fi', output: '文件存在\n目录存在', explain: '-f 文件存在且是普通文件。-d 目录存在。-e 路径存在（文件或目录）。-r/-w/-x 可读/可写/可执行。' },
      { title: '逻辑组合', cmd: 'AGE=25; if [ $AGE -ge 18 ] && [ $AGE -le 65 ]; then echo "工作年龄"; fi', output: '工作年龄', explain: '&& 逻辑与（两个条件都真）。|| 逻辑或（至少一个真）。! 逻辑非（取反）。[[ ]] 支持 && || 内部使用，更简洁。' },
    ],
    diagnosis: [
      { symptom: 'if 报 "[: too many arguments"', cause: '变量没加引号，空格被当成多个参数。如 [ $NAME = Alice ] 如果 NAME 是 "Alice Smith" 会变成 [ Alice Smith = Alice ]。', fix: '加引号：[ "$NAME" = "Alice" ]。或者用 [[ ]]：[[ $NAME = "Alice" ]]。' },
      { symptom: '字符串比较总是 false', cause: '用了 == 而不是 =。在 [ ] 里 = 是相等，== 在某些 shell 里不支持。', fix: '用 =：[ "$VAR" = "value" ]。或者用 [[ ]]：[[ $VAR == "value" ]]（== 在 [[ ]] 里支持）。' },
      { symptom: '文件测试总是 false', cause: '路径错误，或者权限不够（无法访问）。', fix: '用绝对路径。检查权限：ls -ld 路径。用 sudo 测试。' },
    ],
    exercises: [
      { level: '基础', task: '写一个脚本，判断用户输入的数是正数、负数还是零', hint: 'read + if/elif/else + 数字比较', answer: `#!/bin/bash
echo -n "请输入一个数: "
read NUM

if [ "$NUM" -gt 0 ] 2>/dev/null; then
  echo "$NUM 是正数"
elif [ "$NUM" -lt 0 ] 2>/dev/null; then
  echo "$NUM 是负数"
elif [ "$NUM" -eq 0 ] 2>/dev/null; then
  echo "零"
else
  echo "输入的不是数字"
fi` },
      { level: '进阶', task: '写一个"文件检查器"，检查文件是否存在、类型、权限、大小', hint: '[ -f ] + [ -d ] + [ -r ] + stat', answer: `#!/bin/bash
FILE=$1

if [ -z "$FILE" ]; then
  echo "用法: $0 <文件路径>"
  exit 1
fi

echo "=== 文件检查: $FILE ==="

if [ -e "$FILE" ]; then
  echo "✓ 存在"

  if [ -f "$FILE" ]; then
    echo "  类型: 普通文件"
  elif [ -d "$FILE" ]; then
    echo "  类型: 目录"
  elif [ -L "$FILE" ]; then
    echo "  类型: 符号链接"
  else
    echo "  类型: 其他"
  fi

  # 权限
  PERMS=""
  [ -r "$FILE" ] && PERMS="可读 "
  [ -w "$FILE" ] && PERMS+="可写 "
  [ -x "$FILE" ] && PERMS+="可执行"
  echo "  权限: $PERMS"

  # 大小
  if [ -f "$FILE" ]; then
    SIZE=$(stat -c %s "$FILE" 2>/dev/null || stat -f %z "$FILE")
    echo "  大小: $SIZE 字节"
  fi
else
  echo "✗ 不存在"
fi` },
      { level: '挑战', task: '写一个"系统健康检查器"，检查 CPU、内存、磁盘、网络，给出建议', hint: 'top + free + df + ping + 条件判断', answer: `#!/bin/bash
echo "=== 系统健康检查 ==="
echo ""

# 1. CPU 负载
LOAD=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | tr -d ',')
CORES=$(nproc)
THRESHOLD=$(echo "$CORES * 0.8" | bc)

echo "--- CPU 负载 ---"
echo "负载: $LOAD (核心数: $CORES)"
if (( $(echo "$LOAD > $THRESHOLD" | bc -l) )); then
  echo "⚠️  负载过高，建议检查 CPU 密集进程"
  top -bn1 | head -12
else
  echo "✓ 正常"
fi
echo ""

# 2. 内存使用
MEM_USED=$(free | grep Mem | awk '{print $3/$2 * 100}')
echo "--- 内存使用 ---"
echo "使用率: \${MEM_USED}%"
if (( $(echo "$MEM_USED > 80" | bc -l) )); then
  echo "⚠️  内存使用率高，建议关闭不需要的服务"
else
  echo "✓ 正常"
fi
echo ""

# 3. 磁盘空间
DISK_USED=$(df / | tail -1 | awk '{print $5}' | tr -d '%')
echo "--- 磁盘空间 ---"
echo "使用率: \${DISK_USED}%"
if [ "$DISK_USED" -gt 80 ]; then
  echo "⚠️  磁盘空间不足，建议清理大文件"
  du -sh /var/log/* 2>/dev/null | sort -rh | head -5
else
  echo "✓ 正常"
fi
echo ""

# 4. 网络连通性
echo "--- 网络连通性 ---"
if ping -c 1 8.8.8.8 2>&1 | grep -q "1 received"; then
  echo "✓ 外网连通"
else
  echo "⚠️  外网不通，检查网络配置"
fi` },
    ],
    prereqs: ['变量 — 存储数据', 'echo — 输出文本'],
    nextSteps: ['循环 — for/while', '函数 — 代码复用'],
  },
};
