import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_55: Record<string, DeepTutorial> = {
  "-pW7R76yNIeGf7TQoX4QL": {
    mentalModel: 'Shell 字面量（Literals）是脚本中的固定值——字符串、数字、布尔值。像数学公式里的常数：3.14、"hello"、true。',
    handsOn: [
      { title: '字符串字面量', cmd: 'echo "Hello World" && echo \'Single quotes\' && echo $\'Special\\nchars\'', output: 'Hello World\nSingle quotes\nSpecial\nchars', explain: '双引号允许变量替换（$VAR）。单引号原样输出（不替换）。$\'...\' 支持转义字符（\\n 换行，\\t Tab）。' },
      { title: '数字字面量', cmd: 'echo $((5 + 3)) && echo $((16#FF)) && echo $((8#77))', output: '8\n255\n63', explain: '$(( )) 做算术运算。默认十进制。16#FF 是十六进制（255）。8#77 是八进制（63）。' },
      { title: '特殊字符转义', cmd: 'echo "Price: \\$10" && echo "Path: C:\\\\Users" && echo "Quote: \\""', output: 'Price: $10\nPath: C:\\Users\nQuote: "', explain: '\\$ 转义美元符号。\\\\ 转义反斜杠。\\" 转义双引号。在双引号内需要转义这些字符。' },
      { title: 'Here Document', cmd: 'cat << EOF\nLine 1\nLine 2 with $USER\nEOF', output: 'Line 1\nLine 2 with tu', explain: '<< EOF 开始 Here Document，EOF 结束。中间的文本原样输出，但变量会替换。适合多行文本。' },
    ],
    diagnosis: [
      { symptom: '变量没替换（输出了 $VAR 而不是值）', cause: '用了单引号 \'...\'，单引号内不替换变量。', fix: '改用双引号 "..."。或者用 ${VAR} 明确变量边界。' },
      { symptom: '算术运算报错', cause: '$(( )) 内用了非数字字符，或者语法错误（如 5++ 而不是 5+1）。', fix: '检查变量是否是数字：echo "$VAR" | grep -E \'^[0-9]+$\'。用 $(( VAR + 0 )) 强制转数字。' },
      { symptom: 'Here Document 报 "unexpected EOF"', cause: '结束标记 EOF 没单独占一行，或者前面有空格。', fix: 'EOF 必须单独一行，且行首不能有字符（除非用 <<-EOF 允许 Tab）。' },
    ],
    exercises: [
      { level: '基础', task: '写一个脚本，输出格式化的个人信息（用 Here Document）', hint: 'cat << EOF + 变量替换', answer: `#!/bin/bash
NAME="Alice"
AGE=30
CITY="Beijing"

cat << EOF
=== 个人信息 ===
姓名: $NAME
年龄: $AGE
城市: $CITY
================
EOF` },
      { level: '进阶', task: '写一个"计算器脚本"，支持加减乘除和十六进制转换', hint: 'case 语句 + $(( ))', answer: `#!/bin/bash
OP=$1
NUM1=$2
NUM2=$3

case "$OP" in
  +) echo "$NUM1 + $NUM2 = $((NUM1 + NUM2))" ;;
  -) echo "$NUM1 - $NUM2 = $((NUM1 - NUM2))" ;;
  \\*) echo "$NUM1 * $NUM2 = $((NUM1 * NUM2))" ;;
  /)
    if [ "$NUM2" -eq 0 ]; then
      echo "错误: 除数不能为 0"
    else
      echo "$NUM1 / $NUM2 = $((NUM1 / NUM2))"
    fi
    ;;
  hex) printf "十进制: %d\\n十六进制: 0x%X\\n" "$NUM1" "$NUM1" ;;
  *) echo "用法: $0 {+|-|*|/|hex} 数字1 [数字2]" ;;
esac` },
      { level: '挑战', task: '写一个"字符串处理库"，实现常用字符串操作（长度、子串、替换、大小写）', hint: '${#VAR} + ${VAR:offset:length} + ${VAR//old/new} + ${VAR^^}', answer: `#!/bin/bash
STR=$1

echo "=== 字符串处理: $STR ==="
echo ""

# 1. 长度
echo "长度: \${#STR}"

# 2. 子串（从位置 2 开始，取 5 个字符）
echo "子串 (2,5): \${STR:2:5}"

# 3. 替换（把所有 o 替换为 0）
echo "替换 o→0: \${STR//o/0}"

# 4. 删除（删除所有数字）
echo "删除数字: \${STR//[0-9]/}"

# 5. 大小写
echo "转大写: \${STR^^}"
echo "转小写: \${STR,,}"

# 6. 前缀/后缀
echo "去掉前缀 He: \${STR#He}"
echo "去掉后缀 ld: \${STR%ld}"

# 7. 默认值
EMPTY=""
echo "默认值: \${EMPTY:-default}"` },
    ],
    prereqs: ['echo — 输出文本', '变量基础'],
    nextSteps: ['正则表达式 — 高级模式匹配', 'awk/sed — 文本处理工具'],
  },
};
