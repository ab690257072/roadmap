import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_56: Record<string, DeepTutorial> = {
  "JyxvZOb7iusOSUYSlniGl": {
    mentalModel: 'Shell 变量是存储数据的容器——像数学里的 x、y。可以给变量赋值、读取、修改。',
    handsOn: [
      { title: '定义和使用变量', cmd: 'NAME="Alice" && echo "Hello $NAME" && echo "Length: ${#NAME}"', output: 'Hello Alice\nLength: 5', explain: 'NAME="Alice" 定义变量。$NAME 或 ${NAME} 读取值。${#NAME} 获取字符串长度。等号两边不能有空格。' },
      { title: '命令替换', cmd: 'TODAY=$(date +%Y-%m-%d) && echo "Today is $TODAY" && FILES=$(ls | wc -l) && echo "Files: $FILES"', output: 'Today is 2024-01-15\nFiles: 23', explain: '$(command) 执行命令并把输出赋给变量。比反引号 `` 更易读，支持嵌套。' },
      { title: '环境变量', cmd: 'export MY_VAR="hello" && bash -c \'echo $MY_VAR\'', output: 'hello', explain: 'export 让变量对子进程可见。普通变量只在当前 shell 有效。env 查看所有环境变量。' },
      { title: '数组', cmd: 'FRUITS=("apple" "banana" "cherry") && echo ${FRUITS[0]} && echo ${FRUITS[@]} && echo ${#FRUITS[@]}', output: 'apple\napple banana cherry\n3', explain: 'FRUITS=(...) 定义数组。${FRUITS[0]} 第一个元素。${FRUITS[@]} 所有元素。${#FRUITS[@]} 数组长度。' },
    ],
    diagnosis: [
      { symptom: '变量没值（空）', cause: '变量没定义，或者拼写错误（大小写敏感）。', fix: 'echo $VAR 检查。用 ${VAR:-default} 提供默认值。用 set -u 让未定义变量报错。' },
      { symptom: '子进程看不到变量', cause: '变量没 export。普通变量只在当前 shell 有效。', fix: 'export VAR=value 让变量对子进程可见。或者在子进程里重新定义。' },
      { symptom: '变量值被截断或包含意外字符', cause: '赋值时没加引号，空格被当成多个参数。', fix: 'VAR="value with spaces" 加引号。读取时也加引号：echo "$VAR"。' },
    ],
    exercises: [
      { level: '基础', task: '写一个脚本，定义变量存储个人信息，并格式化输出', hint: 'NAME= + echo + printf', answer: `#!/bin/bash
NAME="Alice"
AGE=30
CITY="Beijing"
HOBBIES=("reading" "hiking" "coding")

echo "=== 个人信息 ==="
printf "姓名: %s\\n" "$NAME"
printf "年龄: %d\\n" "$AGE"
printf "城市: %s\\n" "$CITY"
echo "爱好: \${HOBBIES[@]}"
echo "爱好数量: \${#HOBBIES[@]}"` },
      { level: '进阶', task: '写一个"系统信息收集器"，用变量存储各种系统信息', hint: '$(command) 命令替换 + 变量赋值', answer: `#!/bin/bash
# 收集系统信息
HOSTNAME=$(hostname)
KERNEL=$(uname -r)
UPTIME=$(uptime -p 2>/dev/null || uptime)
CPU=$(grep "model name" /proc/cpuinfo | head -1 | cut -d: -f2 | xargs)
MEM_TOTAL=$(free -h | grep Mem | awk '{print $2}')
MEM_USED=$(free -h | grep Mem | awk '{print $3}')
DISK=$(df -h / | tail -1 | awk '{print $5}')
IP=$(ip -4 addr show | grep inet | grep -v 127.0.0.1 | awk '{print $2}' | head -1)

# 输出报告
cat << EOF
=== 系统信息报告 ===
主机名: $HOSTNAME
内核版本: $KERNEL
运行时间: $UPTIME
CPU: $CPU
内存: $MEM_USED / $MEM_TOTAL
磁盘使用: $DISK
IP 地址: $IP
=====================
EOF` },
      { level: '挑战', task: '写一个"配置管理器"，支持读取/写入配置文件中的变量', hint: 'source 加载配置 + grep/sed 修改', answer: `#!/bin/bash
CONFIG_FILE="/tmp/app.conf"

# 初始化配置文件
if [ ! -f "$CONFIG_FILE" ]; then
  cat > "$CONFIG_FILE" << EOF
APP_NAME="MyApp"
APP_VERSION="1.0.0"
APP_PORT=8080
APP_DEBUG=false
EOF
fi

# 加载配置
source "$CONFIG_FILE"

case "$1" in
  get)
    echo "\$$2 = \${!2}"
    ;;
  set)
    KEY=$2
    VALUE=$3
    if grep -q "^$KEY=" "$CONFIG_FILE"; then
      sed -i "s/^$KEY=.*/$KEY=\\"$VALUE\\"/" "$CONFIG_FILE"
    else
      echo "$KEY=\\"$VALUE\\"" >> "$CONFIG_FILE"
    fi
    echo "已设置: $KEY = $VALUE"
    source "$CONFIG_FILE"
    ;;
  list)
    echo "=== 配置 ==="
    cat "$CONFIG_FILE"
    ;;
  *)
    echo "用法: $0 {get|set|list} [key] [value]"
    echo "示例:"
    echo "  $0 list"
    echo "  $0 get APP_NAME"
    echo "  $0 set APP_PORT 9090"
    ;;
esac` },
    ],
    prereqs: ['echo — 输出文本', '命令基础'],
    nextSteps: ['条件判断 — if/else', '循环 — for/while'],
  },
};
