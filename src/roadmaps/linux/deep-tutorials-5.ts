import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_5: Record<string, DeepTutorial> = {
  "5658kdqJw-pIOyyhll80a": {
    mentalModel: 'paste 把两个文件按行对齐拼在一起——像拉链，左边文件的一行和右边文件的一行咬合成新的一行。',
    handsOn: [
      { title: '合并两个文件', cmd: 'paste names.txt ages.txt', output: 'Alice\t25\nBob\t30\nCarol\t28', explain: 'paste 默认用 Tab 分隔。两个文件的第 N 行拼成一行。如果文件行数不同，短的用空补齐。' },
      { title: '指定分隔符', cmd: 'paste -d "," names.txt ages.txt', output: 'Alice,25\nBob,30\nCarol,28', explain: '-d "," 用逗号分隔。做 CSV 时常用 -d ","。' },
      { title: '多行变一行', cmd: 'echo -e "a\\nb\\nc" | paste -sd ","', output: 'a,b,c', explain: '-s（serial）把文件的所有行合并成一行。-d "," 用逗号分隔。把 100 个 ID 变成逗号分隔的一行：paste -sd "," ids.txt。' },
      { title: '三文件拼接', cmd: 'paste names.txt ages.txt cities.txt', output: 'Alice\t25\t北京\nBob\t30\t上海\nCarol\t28\t广州', explain: '可以同时 paste 多个文件。每个文件的对应行依次拼在一起。' },
    ],
    diagnosis: [
      { symptom: 'paste 输出列对不齐', cause: '源文件用了空格而不是 Tab 分隔。paste 默认用 Tab。', fix: '用 -d "," 指定分隔符。或者先用 tr 统一分隔符。' },
      { symptom: 'paste 和 join 搞混了', cause: 'paste 按行号对齐（第 1 行拼第 1 行），join 按字段值匹配（类似 SQL JOIN）。', fix: '按行号拼用 paste，按字段值匹配用 join。' },
    ],
    exercises: [
      { level: '基础', task: '创建两个文件（用户名和邮箱），用 paste 合并成 CSV 格式', hint: 'paste -d ","', answer: 'echo -e "alice\\nbob\\ncarol" > names.txt\necho -e "a@x.com\\nb@x.com\\nc@x.com" > emails.txt\npaste -d "," names.txt emails.txt' },
      { level: '进阶', task: '把一个文件里的 100 行数据变成每 10 行一组，用逗号分隔', hint: 'paste 的 -s 和 -d 配合 xargs 或 split', answer: '# 方法 1：用 paste - - - ... (10 个 -)\npaste -d "," - - - - - - - - - - < data.txt\n\n# 方法 2：用 xargs\nxargs -n 10 < data.txt | tr \' \' \',\'' },
      { level: '挑战', task: '用 paste 和 seq 生成一个乘法表（1-9）', hint: 'seq 生成数字，paste 拼接', answer: '#!/bin/bash\nfor i in $(seq 1 9); do\n  for j in $(seq 1 $i); do\n    printf "%dx%d=%d\\t" $j $i $((i*j))\n  done\n  echo\ndone' },
    ],
    prereqs: ['cat/echo — 创建文件内容'],
    nextSteps: ['join — 按字段值匹配', 'awk — 更强大的文本处理'],
  },

  "1WRIy3xHtQfiQFZrprobP": {
    mentalModel: 'sort 按行排序——不只是字母排序，支持数字排序、按列排序、倒序、去重。是文本处理的瑞士军刀。',
    handsOn: [
      { title: '基础排序', cmd: 'echo -e "banana\\napple\\ncherry" | sort', output: 'apple\nbanana\ncherry', explain: '默认按字典序排序。大写字母在小写前（A < a）。' },
      { title: '数字排序', cmd: 'echo -e "100\\n20\\n3" | sort -n', output: '3\n20\n100', explain: '-n 按数值排序。不加 -n 会按字符排（"100" < "20" 因为 "1" < "2"）。-h 更智能，能识别 1K、2M、3G。' },
      { title: '倒序 + 去重', cmd: 'echo -e "b\\na\\nb\\nc\\na" | sort -u -r', output: 'c\nb\na', explain: '-u（unique）去重，-r（reverse）倒序。' },
      { title: '按列排序', cmd: 'echo -e "Alice,25\\nBob,30\\nCarol,22" | sort -t "," -k 2 -n', output: 'Carol,22\nAlice,25\nBob,30', explain: '-t "," 指定逗号分隔，-k 2 按第 2 列排序，-n 数字排序。CSV 文件排序标配。' },
    ],
    diagnosis: [
      { symptom: 'sort 数字排序不对', cause: '没加 -n，按字符排了。"100" < "20" 因为 "1" < "2"。', fix: '加 -n：sort -n。或者 -h（人类可读，支持 K/M/G）。' },
      { symptom: 'sort -u 没去掉所有重复', cause: 'sort -u 只去掉排序后相邻的重复行。如果文件没排序，uniq 会漏掉不连续的重复。', fix: 'sort -u 先排序再去重。或者 sort | uniq -c | sort -rn 统计频率。' },
      { symptom: '按列排序结果不对', cause: '-k 2 表示从第 2 列开始排到行尾。如果只想按第 2 列排，用 -k 2,2。', fix: 'sort -t "," -k 2,2 -n 精确指定第 2 列。' },
    ],
    exercises: [
      { level: '基础', task: '对 /etc/passwd 按用户名（第 1 列）排序', hint: 'sort -t ":" -k 1,1', answer: 'sort -t ":" -k 1,1 /etc/passwd | head -10' },
      { level: '进阶', task: '统计 access.log 里每个 IP 的访问次数，按次数从多到少排前 10', hint: 'awk 取 IP → sort → uniq -c → sort -rn → head', answer: 'awk \'{print $1}\' access.log | sort | uniq -c | sort -rn | head -10' },
      { level: '挑战', task: '对一个 CSV 文件先按第 3 列数字降序排，相同的话再按第 1 列字母升序排', hint: 'sort -t "," -k 3,3rn -k 1,1', answer: 'sort -t "," -k 3,3rn -k 1,1 data.csv\n\n# -k 3,3rn: 第 3 列，反向(r)数字(n)\n# -k 1,1: 第 1 列，默认升序' },
    ],
    prereqs: ['管道 | — sort 常在管道中使用'],
    nextSteps: ['uniq — 去重统计', 'awk — 按列处理', 'sort 性能 — 大文件排序优化'],
  },

  "O9Vci_WpUY-79AkA4HDx3": {
    mentalModel: 'tr 逐个字符替换或删除——像摩尔斯电码翻译机，每个字符进来，查表换成另一个字符出去。',
    handsOn: [
      { title: '大小写转换', cmd: 'echo "Hello World" | tr "a-z" "A-Z"', output: 'HELLO WORLD', explain: 'tr "a-z" "A-Z" 把所有小写字母转大写。tr "A-Z" "a-z" 转小写。' },
      { title: '删除字符', cmd: 'echo "abc123def" | tr -d "0-9"', output: 'abcdef', explain: '-d（delete）删除所有数字。tr -d "\\r" 删除 Windows 换行符。' },
      { title: '压缩重复字符', cmd: 'echo "a  b   c" | tr -s " "', output: 'a b c', explain: '-s（squeeze）把连续多个空格压缩成一个。清理格式化文本时很有用。' },
      { title: '字符替换', cmd: 'echo "hello" | tr "helo" "HELO"', output: 'HELLL', explain: 'tr "helo" "HELO" 把 h→H, e→E, l→L, o→O。注意 l→L 映射了两次（hello 有两个 l）。' },
    ],
    diagnosis: [
      { symptom: 'tr 不处理字符串替换', cause: 'tr 只处理字符级别（把 "h" 换成 "w"），不能把 "hello" 换成 "world"。', fix: '字符串替换用 sed：echo "hello" | sed \'s/hello/world/\'。' },
      { symptom: 'tr 报错 "misaligned []"', cause: '字符集范围没写对。tr "a-z" "A-Z" 对，tr "[a-z]" "[A-Z]" 在某些版本报错。', fix: '不用方括号：tr "a-z" "A-Z"。或者用 POSIX 类：tr \'[:lower:]\' \'[:upper:]\'。' },
      { symptom: 'tr 不能直接指定文件名', cause: 'tr 只读 stdin，不能直接指定文件名。', fix: '用 cat file | tr 或 tr < file。' },
    ],
    exercises: [
      { level: '基础', task: '把文件名里的空格换成下划线', hint: 'echo filename | tr " " "_"', answer: 'echo "my file name.txt" | tr " " "_"\n\n# 批量改文件名：\nfor f in *\\ *; do mv "$f" "$(echo "$f" | tr " " "_")"; done' },
      { level: '进阶', task: '从 Windows 复制的文本文件（\\r\\n 换行）转成 Linux 格式（\\n）', hint: 'tr -d "\\r"', answer: 'tr -d \'\\r\' < windows.txt > linux.txt\n\n# 验证：\nfile windows.txt  # 应该显示 CRLF\nfile linux.txt    # 应该显示 ASCII text' },
      { level: '挑战', task: '用 tr 实现 ROT13 加密（字母表偏移 13 位）', hint: 'tr "a-zA-Z" "n-za-mN-ZA-M"', answer: 'echo "Hello World" | tr "a-zA-Z" "n-za-mN-ZA-M"\n# 输出：Uryyb Jbeyq\n\n# 解密（ROT13 是对称的）：\necho "Uryyb Jbeyq" | tr "a-zA-Z" "n-za-mN-ZA-M"\n# 输出：Hello World' },
    ],
    prereqs: ['管道 | — tr 只读 stdin'],
    nextSteps: ['sed — 字符串替换', 'awk — 更强大的文本处理'],
  },
};
