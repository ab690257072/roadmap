import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_59: Record<string, DeepTutorial> = {
  "WJT-yrMq8cEI87RHWA2jY": {
    mentalModel: 'Shell 循环（for/while/until）重复执行代码块——像工厂流水线，同样的操作重复做。for 遍历列表，while 条件为真时循环，until 条件为假时循环。',
    handsOn: [
      { title: 'for 循环（遍历列表）', cmd: 'for fruit in apple banana cherry; do echo "Fruit: $fruit"; done', output: 'Fruit: apple\nFruit: banana\nFruit: cherry', explain: 'for var in list 遍历列表中的每个元素。do...done 之间是循环体。适合已知列表的情况。' },
      { title: 'for 循环（数字范围）', cmd: 'for i in {1..5}; do echo "Number: $i"; done', output: 'Number: 1\nNumber: 2\nNumber: 3\nNumber: 4\nNumber: 5', explain: '{1..5} 生成 1 到 5 的序列。{1..10..2} 步长为 2（1,3,5,7,9）。也可以用 C 风格：for ((i=1; i<=5; i++))。' },
      { title: 'while 循环（条件为真）', cmd: 'COUNT=1; while [ $COUNT -le 5 ]; do echo "Count: $COUNT"; COUNT=$((COUNT+1)); done', output: 'Count: 1\nCount: 2\nCount: 3\nCount: 4\nCount: 5', explain: 'while [ condition ] 条件为真时循环。记得更新条件变量，否则死循环。适合未知次数的循环。' },
      { title: 'while 循环（读取文件）', cmd: 'while IFS= read -r line; do echo "Line: $line"; done < /etc/hosts', output: 'Line: 127.0.0.1 localhost\nLine: ::1 localhost', explain: 'while read line 逐行读取文件。IFS= 保留前导空格。-r 不转义反斜杠。< file 从文件读取。' },
    ],
    diagnosis: [
      { symptom: '死循环（程序不停止）', cause: 'while 条件永远为真，或者忘了更新条件变量。', fix: 'Ctrl+C 强制停止。检查条件变量是否正确更新。或者用 timeout 命令限制执行时间：timeout 10 ./script.sh。' },
      { symptom: '循环变量在子 shell 里丢失', cause: '管道 | 会创建子 shell，子 shell 里的变量修改不影响父 shell。', fix: '用 here string <<< 代替管道：while read line; do ...; done <<< "$(command)"。或者用进程替换 < <(command)。' },
      { symptom: '循环太慢', cause: '每次循环都 fork 新进程（如调用外部命令），或者循环次数太多。', fix: '减少外部命令调用。用 bash 内置命令（如 ${var//old/new}）代替 sed/awk。或者用 xargs -P 并行执行。' },
    ],
    exercises: [
      { level: '基础', task: '写一个脚本，批量创建 10 个用户（user1 到 user10）', hint: 'for i in {1..10} + useradd', answer: `#!/bin/bash
for i in {1..10}; do
  USERNAME="user$i"
  if id "$USERNAME" &>/dev/null; then
    echo "用户 $USERNAME 已存在"
  else
    sudo useradd -m "$USERNAME"
    echo "已创建用户: $USERNAME"
  fi
done` },
      { level: '进阶', task: '写一个"文件批量重命名器"，把所有 .txt 文件改成 .md', hint: 'for file in *.txt + mv', answer: `#!/bin/bash
DIR=\${1:-.}
COUNT=0

for file in "\$DIR"/*.txt; do
  if [ -f "\$file" ]; then
    BASENAME=$(basename "\$file" .txt)
    NEWNAME="\$DIR/\$BASENAME.md"
    mv "\$file" "\$NEWNAME"
    echo "\$file → \$NEWNAME"
    COUNT=\$((COUNT + 1))
  fi
done

echo "已重命名 \$COUNT 个文件"` },
      { level: '挑战', task: '写一个"日志分析器"，逐行读取日志，统计每个 IP 的访问次数', hint: 'while read line + awk 提取 IP + 关联数组', answer: `#!/bin/bash
LOG_FILE=\${1:-/var/log/nginx/access.log}

declare -A IP_COUNT

while IFS= read -r line; do
  # 提取 IP（假设是第一列）
  IP=$(echo "\$line" | awk '{print \$1}')

  # 统计
  if [[ "\$IP" =~ ^[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\$ ]]; then
    IP_COUNT["\$IP"]=\$((IP_COUNT["\$IP"] + 1))
  fi
done < "\$LOG_FILE"

# 输出统计结果
echo "=== IP 访问统计 ==="
for IP in "\${!IP_COUNT[@]}"; do
  printf "%-15s %d 次\\n" "\$IP" "\${IP_COUNT[\$IP]}"
done | sort -k2 -rn | head -20` },
    ],
    prereqs: ['变量 — 存储数据', '条件判断 — if/else'],
    nextSteps: ['函数 — 代码复用', '数组 — 存储多个值'],
  },
};
