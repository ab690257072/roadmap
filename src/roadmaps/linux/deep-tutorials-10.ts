import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_10: Record<string, DeepTutorial> = {
  "YSfGrmT795miIeIZrtC3D": {
    mentalModel: 'nl 给文件加行号——像给论文加行号，审阅者可以说"第 42 行有错别字"，而不是"中间偏上那个段落"。',
    handsOn: [
      { title: '基础加行号', cmd: 'nl /etc/passwd | head -5', output: '     1\troot:x:0:0:root:/root:/bin/bash\n     2\tdaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\n     3\tbin:x:2:2:bin:/bin:/usr/sbin/nologin\n     4\tsys:x:3:3:sys:/dev:/usr/sbin/nologin\n     5\tsync:x:4:65534:sync:/bin:/bin/sync', explain: 'nl 给每行加行号输出。默认跳过空行不加行号。输出格式是"行号\\t内容"。' },
      { title: '含空行也编号', cmd: 'echo -e "first\\n\\nthird" | nl -b a', output: '     1\tfirst\n     2\t\n     3\tthird', explain: '-b a（all）给所有行编号，包括空行。默认 -b t（non-empty）只给非空行编号。' },
      { title: '零填充格式', cmd: 'seq 5 | nl -n rz -w 4', output: '0001\t1\n0002\t2\n0003\t3\n0004\t4\n0005\t5', explain: '-n rz 右对齐零填充，-w 4 设宽度 4 位。输出变成 0001、0002... 适合对齐显示。' },
      { title: '配合 grep 定位', cmd: 'nl /var/log/syslog | grep "ERROR" | head -5', output: '   237\tJan 15 14:30:45 prod myapp[5678]: ERROR Connection timeout\n   456\tJan 15 14:31:12 prod myapp[5678]: ERROR Database unreachable', explain: '先 nl 加行号，再 grep 关键词，能同时看到行号和内容。或者用 grep -n 直接显示行号，不需要 nl。' },
    ],
    diagnosis: [
      { symptom: 'nl 和 cat -n 结果不一样', cause: 'nl 默认跳过空行，cat -n 给所有行编号。', fix: 'nl -b a 给所有行编号（和 cat -n 一样）。或者直接用 cat -n。' },
      { symptom: '行号格式不整齐', cause: '默认行号右对齐但不补零。', fix: 'nl -n rz -w 6 零填充 6 位宽度。或者用 awk：awk \'{printf "%06d\\t%s\\n", NR, $0}\'。' },
    ],
    exercises: [
      { level: '基础', task: '给 /etc/passwd 加行号，显示前 10 行', hint: 'nl + head', answer: 'nl /etc/passwd | head -10' },
      { level: '进阶', task: '找出 /var/log/syslog 里包含 "ERROR" 的行号', hint: 'grep -n 或 nl + grep', answer: 'grep -n "ERROR" /var/log/syslog | head -10\n\n# 或者：\nnl /var/log/syslog | grep "ERROR" | head -10' },
      { level: '挑战', task: '写一个函数，显示文件的指定行范围（如 showlines file 10 20 显示第 10-20 行）', hint: 'nl + awk 或 sed -n', answer: 'showlines() {\n  local file=$1\n  local start=${2:-1}\n  local end=${3:-10}\n  nl -b a "$file" | awk -v s="$start" -v e="$end" \'$1 >= s && $1 <= e\'\n\n  # 或者用 sed：\n  # sed -n "${start},${end}p" "$file" | nl -b a -v "$start"\n}' },
    ],
    prereqs: ['cat — 看文件内容', 'head/tail — 看部分文件'],
    nextSteps: ['grep -n — 直接显示行号', 'awk — 更灵活的行号格式化'],
  },

  "LIGOJwrXexnIcPyHVlhQ8": {
    mentalModel: 'wc 统计行数、单词数、字节数。wc -l 数行数是 Linux 里用得最多的统计命令。',
    handsOn: [
      { title: '统计行数', cmd: 'wc -l /etc/passwd', output: '45 /etc/passwd', explain: '-l 数行数。最常用的用法。cat file | wc -l 或 wc -l < file 也行。后者更快因为不需要 cat。' },
      { title: '统计单词和字节', cmd: 'wc /etc/passwd', output: '  45  102 2843 /etc/passwd', explain: '不加参数同时显示三列：行数、单词数、字节数。-w 只数单词，-c 只数字节，-m 数字符（UTF-8 下一个中文算 1 字符但 3 字节）。' },
      { title: '管道中用', cmd: 'grep "ERROR" app.log | wc -l', output: '42', explain: 'grep 过滤出 ERROR 行，wc -l 统计数量。find . -name "*.go" | wc -l 统计 Go 文件数量。' },
      { title: '多文件汇总', cmd: 'wc -l file1.txt file2.txt file3.txt', output: '  23 file1.txt\n  45 file2.txt\n  67 file3.txt\n 135 total', explain: 'wc -l file1 file2 分别显示每个文件的行数，最后给一个 total 行。适合批量检查日志大小。' },
    ],
    diagnosis: [
      { symptom: 'wc -l 少数了一行', cause: '文件最后一行没有换行符。wc -l 数的是换行符数量。', fix: '这不是 bug 但经常让人困惑。用 grep -c "" file 数行数（包括没有换行符的最后一行）。' },
      { symptom: 'wc -c 和 wc -m 结果不同', cause: 'UTF-8 文件中一个中文字占 3 字节但算 1 字符。wc -c 数字节数，wc -m 数字符数。', fix: '根据需求选择：文件大小用 -c，文本长度用 -m。' },
      { symptom: 'wc 统计很慢', cause: '大文件（GB 级）wc 需要读完整个文件。', fix: '用 ls -l 看文件大小（字节数）代替 wc -c。行数没有快速方法，除非预先建索引。' },
    ],
    exercises: [
      { level: '基础', task: '统计 /etc 目录下有多少个 .conf 文件', hint: 'find + wc -l', answer: 'find /etc -name "*.conf" | wc -l' },
      { level: '进阶', task: '找出当前目录下最大的 5 个文件（按字节数）', hint: 'find + ls -l + sort -k5 -rn + head', answer: 'find . -type f -exec ls -l {} \\; | sort -k5 -rn | head -5\n\n# 或者用 du：\nfind . -type f -exec du -b {} \\; | sort -rn | head -5' },
      { level: '挑战', task: '写一个脚本，统计当前目录下每种文件扩展名的数量和总大小', hint: 'find + sed 取扩展名 + awk 统计', answer: '#!/bin/bash\nfind . -type f | sed \'s/.*\\.//\' | sort | uniq -c | sort -rn | head -20\n\n# 带大小统计：\nfind . -type f -exec ls -l {} \\; | \\\n  awk \'{\n    ext = $NF\n    sub(/.*\\./, "", ext)\n    count[ext]++\n    size[ext] += $5\n  }\n  END {\n    for (e in count)\n      printf "%10d files  %15d bytes  .%s\\n", count[e], size[e], e\n  }\' | sort -rn' },
    ],
    prereqs: ['管道 | — wc 常在管道中使用', 'find — 搜索文件'],
    nextSteps: ['awk — 更强大的统计工具', 'sort/uniq — 排序去重统计'],
  },
};
