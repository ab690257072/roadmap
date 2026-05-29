import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_13: Record<string, DeepTutorial> = {
  "qnBbzphImflQbEbtFub9x": {
    mentalModel: 'uniq 去掉相邻重复行——像整理书架，把同样的书放在一起后只留一本。如果不先整理（sort），同样的书散落在不同位置就去不干净。',
    handsOn: [
      { title: '去重（必须先排序）', cmd: 'echo -e "a\\nb\\na\\nb\\nb\\nc" | sort | uniq', output: 'a\nb\nc', explain: 'uniq 只去掉相邻的重复行。如果相同内容不相邻（中间隔了其他行），uniq 不会去重。所以几乎总是先 sort 再 uniq。' },
      { title: '计数', cmd: 'echo -e "a\\nb\\na\\nb\\nb\\nc" | sort | uniq -c', output: '      2 a\n      3 b\n      1 c', explain: '-c（count）在每行前显示出现次数。配合 sort -rn 按频率倒排：sort | uniq -c | sort -rn 看最常见的内容。' },
      { title: '只显示重复的行', cmd: 'echo -e "a\\nb\\na\\nb\\nb\\nc" | sort | uniq -d', output: 'a\nb', explain: '-d（duplicate）只显示出现了多次的行（重复行）。-u（unique）只显示出现了 1 次的行（唯一行）。' },
      { title: '忽略大小写', cmd: 'echo -e "Hello\\nhello\\nHELLO" | sort | uniq -i', output: 'Hello', explain: '-i（ignore-case）忽略大小写：Hello 和 hello 被认为是同一行。比较时以第一次出现的写法为准。' },
    ],
    diagnosis: [
      { symptom: 'uniq 没去掉所有重复', cause: 'uniq 只去掉相邻的重复行。如果相同内容不相邻，uniq 不会去重。', fix: '先 sort 让相同行相邻，再 uniq：sort file | uniq。' },
      { symptom: 'sort -u 和 sort | uniq 结果一样但用法不同', cause: 'sort -u 是排序同时去重（一步完成），sort | uniq 是两步。结果一样但 sort | uniq -c 能看频率而 sort -u 不能。', fix: '需要统计频率时用 sort | uniq -c。只需要去重用 sort -u。' },
    ],
    exercises: [
      { level: '基础', task: '统计 /var/log/auth.log 里每个 IP 的失败登录次数，按次数从多到少排前 10', hint: 'grep "Failed" + awk 取 IP + sort + uniq -c + sort -rn + head', answer: 'grep "Failed" /var/log/auth.log | awk \'{print $NF}\' | sort | uniq -c | sort -rn | head -10' },
      { level: '进阶', task: '找出 access.log 里访问量最大的 5 个 URL', hint: 'awk 取 URL（通常是第 7 列）+ sort + uniq -c + sort -rn + head', answer: 'awk \'{print $7}\' access.log | sort | uniq -c | sort -rn | head -5' },
      { level: '挑战', task: '写一个脚本，找出 Git 仓库里提交次数最多的 5 个作者', hint: 'git log --format="%aN" + sort + uniq -c + sort -rn', answer: '#!/bin/bash\ngit log --format="%aN" | sort | uniq -c | sort -rn | head -5\n\n# 或者按邮箱统计：\ngit log --format="%ae" | sort | uniq -c | sort -rn | head -5\n\n# 按月份统计：\ngit log --format="%ad" --date=short | cut -d- -f1,2 | sort | uniq -c | sort -k2' },
    ],
    prereqs: ['sort — uniq 通常配合 sort 使用'],
    nextSteps: ['awk — 更强大的文本处理', 'sort 性能 — 大文件排序优化'],
  },

  "QTmECqpRVMjNgQU70uCF8": {
    mentalModel: 'awk 是文本处理的编程语言——比 grep 更强（不只搜索，还能按列处理、计算、格式化输出），比 sed 更灵活（可以条件判断、循环）。',
    handsOn: [
      { title: '取列', cmd: 'echo -e "Alice 25 engineer\\nBob 30 manager" | awk \'{print $1, $3}\'', output: 'Alice engineer\nBob manager', explain: '$1 第一列、$2 第二列... $NF 最后一列。默认按空白（空格/Tab）分列。-F "," 改成分号或逗号分隔。' },
      { title: '过滤', cmd: 'echo -e "Alice 25\\nBob 30\\nCarol 22" | awk \'$2 > 24 {print $1}\'', output: 'Bob', explain: 'awk \'条件 {动作}\' 只输出满足条件的行。$2 > 24 是条件（第二列大于 24），{print $1} 是动作（打印第一列）。' },
      { title: '计算', cmd: 'echo -e "10\\n20\\n30" | awk \'{sum += $1} END {print "总计:", sum, "平均:", sum/NR}\'', output: '总计: 60 平均: 20', explain: '{sum += $1} 对每行累加。END {print sum/NR} 在所有行处理完后执行一次（NR 是行数）。' },
      { title: '格式化输出', cmd: 'echo -e "Alice 25\\nBob 30" | awk \'{printf "%-10s %5d\\n", $1, $2}\'', output: 'Alice         25\nBob           30', explain: 'printf 格式化输出。%-10s 左对齐 10 字符，%5d 右对齐 5 位数字。比 print 的输出更整齐。' },
    ],
    diagnosis: [
      { symptom: 'awk 的 $0 和 $1 搞混了', cause: '$0 是整行，$1 是第一列（不是 $0）。列号从 1 开始，跟大多数编程语言从 0 开始不同。', fix: '记住：$0 = 整行，$1 = 第一列，$2 = 第二列... $NF = 最后一列。' },
      { symptom: 'awk 分隔符不对', cause: '默认按空白分列。如果文件用逗号分隔，必须加 -F ","。', fix: 'awk -F "," \'{print $1, $3}\' file.csv。或者 BEGIN {FS=","} 在脚本里设置。' },
      { symptom: 'awk 和 cut 都能取列，什么时候用哪个？', cause: 'cut 只能取列，awk 能取列+过滤+计算+格式化。简单取列用 cut，复杂处理用 awk。', fix: '简单取列：cut -d "," -f 1,3。需要过滤/计算/格式化：awk -F "," \'{if ($2 > 100) print $1, $3}\'。' },
    ],
    exercises: [
      { level: '基础', task: '从 /etc/passwd 提取所有使用 /bin/bash 的用户的用户名和家目录', hint: 'awk -F ":" 按冒号分隔，$7 是 shell，$1 是用户名，$6 是家目录', answer: 'awk -F ":" \'$7 == "/bin/bash" {print $1, $6}\' /etc/passwd' },
      { level: '进阶', task: '统计 access.log 里每个 HTTP 状态码的请求数量', hint: 'awk 取状态码（通常是第 9 列）+ sort + uniq -c', answer: 'awk \'{print $9}\' access.log | sort | uniq -c | sort -rn\n\n# 或者用 awk 一步完成：\nawk \'{count[$9]++} END {for (code in count) print count[code], code}\' access.log | sort -rn' },
      { level: '挑战', task: '写一个 awk 脚本，解析 CSV 文件，计算每个品类的平均价格，只输出平均价格超过 100 的品类', hint: 'awk -F "," 累加每个品类的价格和数量，END 块计算平均并过滤', answer: '#!/usr/bin/awk -f\nBEGIN { FS = "," }\n{\n  category = $2\n  price = $3\n  sum[category] += price\n  count[category]++\n}\nEND {\n  for (cat in sum) {\n    avg = sum[cat] / count[cat]\n    if (avg > 100) {\n      printf "%-20s 平均价格: %.2f (共 %d 个产品)\\n", cat, avg, count[cat]\n    }\n  }\n}' },
    ],
    prereqs: ['cut — 简单取列', 'sort/uniq — 排序去重'],
    nextSteps: ['sed — 文本替换', 'Perl/Python — 更强大的脚本语言'],
  },
};
