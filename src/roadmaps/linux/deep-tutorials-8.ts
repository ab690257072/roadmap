import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_8: Record<string, DeepTutorial> = {
  "vfcCS1GoyKpU1rQaE8I5r": {
    mentalModel: 'Linux 的 join 命令按字段值合并两个文件——类似 SQL 的 INNER JOIN。两个文件必须先按连接列排序。',
    handsOn: [
      { title: '基础 join', cmd: 'join file1.txt file2.txt', output: '1 Alice 25\n2 Bob 30\n3 Carol 28', explain: '默认按第一列匹配。两个文件中第一列相同的行会被合并。文件必须预先按第一列排序。' },
      { title: '指定分隔符', cmd: 'join -t "," users.csv orders.csv', output: '1,Alice,100.50\n2,Bob,200.75', explain: '-t "," 指定逗号分隔（CSV 文件）。默认分隔符是空格/Tab。' },
      { title: '指定连接列', cmd: 'join -1 2 -2 3 file1.txt file2.txt', output: '（按 file1 第 2 列和 file2 第 3 列匹配）', explain: '-1 2 指定 file1 用第 2 列，-2 3 指定 file2 用第 3 列。默认都是第 1 列。' },
      { title: 'LEFT JOIN', cmd: 'join -a 1 file1.txt file2.txt', output: '1 Alice 25\n2 Bob 30\n3 Carol\n4 Dave', explain: '-a 1 显示 file1 中所有行（包括没匹配上的）。没匹配的行列 2 字段为空。类似 SQL LEFT JOIN。' },
    ],
    diagnosis: [
      { symptom: 'join 结果不对或为空', cause: '文件没按连接列排序。join 要求两个文件都按连接列排序。', fix: '先排序：sort -k 1,1 file1.txt > sorted1.txt && sort -k 1,1 file2.txt > sorted2.txt && join sorted1.txt sorted2.txt。' },
      { symptom: 'join 和 paste 搞混了', cause: 'paste 按行号对齐（第 1 行拼第 1 行），join 按字段值匹配。', fix: '按行号拼用 paste，按字段值匹配用 join。' },
    ],
    exercises: [
      { level: '基础', task: '创建两个文件（用户 ID+名字，用户 ID+邮箱），用 join 合并', hint: '先 sort 再 join', answer: 'echo -e "1 Alice\\n2 Bob\\n3 Carol" > names.txt\necho -e "1 alice@x.com\\n2 bob@x.com\\n3 carol@x.com" > emails.txt\nsort -k 1,1 names.txt > sorted_names.txt\nsort -k 1,1 emails.txt > sorted_emails.txt\njoin sorted_names.txt sorted_emails.txt' },
      { level: '进阶', task: '用 join 做 CSV 文件的 INNER JOIN（按第 2 列匹配）', hint: 'sort -t "," -k 2,2 + join -t "," -1 2 -2 2', answer: 'sort -t "," -k 2,2 file1.csv > sorted1.csv\nsort -t "," -k 2,2 file2.csv > sorted2.csv\njoin -t "," -1 2 -2 2 sorted1.csv sorted2.csv' },
      { level: '挑战', task: '用 join 实现 FULL OUTER JOIN（显示两边所有行）', hint: 'join -a 1 -a 2', answer: 'sort -k 1,1 file1.txt > sorted1.txt\nsort -k 1,1 file2.txt > sorted2.txt\njoin -a 1 -a 2 -e "NULL" -o auto sorted1.txt sorted2.txt\n\n# -e "NULL" 用 NULL 填充空字段\n# -o auto 自动推断输出格式' },
    ],
    prereqs: ['sort — join 要求文件预先排序', 'cut — 取列'],
    nextSteps: ['awk — 更强大的文本处理', 'SQL JOIN — 数据库版本的 join'],
  },

  "Pl9s2ti25hsSEljXJvBTj": {
    mentalModel: 'split 把大文件切成小块——像切面包，一整条面包太大不好拿，切成均匀的小片。每片标注序号，拼回去还是完整的一条。',
    handsOn: [
      { title: '按行数切', cmd: 'split -l 1000 big.log part_', output: 'part_aa  part_ab  part_ac  part_ad', explain: '-l 1000 每 1000 行切一个文件。输出文件名默认 xaa、xab... 加 prefix 自定义前缀（这里是 part_）。' },
      { title: '按大小切', cmd: 'split -b 10m bigfile.tar.gz chunk_', output: 'chunk_aa  chunk_ab  chunk_ac', explain: '-b 10m 每 10MB 切一块。单位：k/m/g。适合切大文件用于传输（邮件限制 25MB）。' },
      { title: '数字后缀', cmd: 'split -l 1000 -d big.log part_', output: 'part_00  part_01  part_02  part_03', explain: '-d 用数字后缀（00、01、02）而不是字母（aa、ab、ac）。更符合直觉。' },
      { title: '合并', cmd: 'cat part_* > restored.log && diff big.log restored.log', output: '（无输出表示相同）', explain: 'cat 按文件名顺序拼回去。用 diff 验证总行数是否一致。' },
    ],
    diagnosis: [
      { symptom: 'split 切完后不知道原始文件名', cause: 'split 切完后的文件没有头部信息告诉你它属于哪个原始文件。', fix: '切之前记录文件名和总行数。或者用 prefix 包含原始文件名：split -l 1000 big.log big.log.part_。' },
      { symptom: '合并后文件顺序不对', cause: '文件名排序问题。xaa、xab... xaz、xba 排序正确，但 xaa、xab... xaz、xaaa 排序会乱。', fix: '用 -d 数字后缀（00、01...99）避免字母排序问题。或者用 sort -V（版本排序）。' },
    ],
    exercises: [
      { level: '基础', task: '把 /etc/passwd 切成每 5 行一块，然后合并回去验证', hint: 'split -l 5 + cat + diff', answer: 'split -l 5 -d /etc/passwd passwd_part_\nls passwd_part_*\ncat passwd_part_* > restored.txt\ndiff /etc/passwd restored.txt\nrm passwd_part_* restored.txt' },
      { level: '进阶', task: '把一个 1GB 的文件切成 100MB 的块，用数字后缀，加 .chunk 扩展名', hint: 'split -b 100m -d --additional-suffix', answer: 'split -b 100m -d --additional-suffix=.chunk bigfile.bin bigfile_\nls -lh bigfile_*.chunk\n\n# 合并：\ncat bigfile_*.chunk > restored.bin\ndiff bigfile.bin restored.bin' },
      { level: '挑战', task: '写一个脚本，把大日志按天切分（假设日志格式是 "2024-01-15 ..."）', hint: 'awk 按日期字段切分，或者用 csplit', answer: '#!/bin/bash\nawk \'{\n  date = substr($1, 1, 10)  # 取日期部分\n  print >> ("log_" date ".txt")\n}\' big.log\n\n# 或者用 csplit（按正则切分）：\n# csplit -z big.log \'/^[0-9]\\{4\\}-[0-9]\\{2\\}-[0-9]\\{2\\}/\' \'*\' --prefix=log_ --suffix-format=%02d.log' },
    ],
    prereqs: ['cat — 合并文件'],
    nextSteps: ['tar — 打包压缩', 'rsync — 增量传输'],
  },
};
