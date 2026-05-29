import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_15: Record<string, DeepTutorial> = {
  "-B2Dvz7160Er0OBHzS6ro": {
    mentalModel: 'sed 是流编辑器——逐行处理文本，擅长查找替换。grep 搜索、awk 处理列、sed 替换文本——三者组合能处理几乎所有文本任务。',
    handsOn: [
      { title: '基础替换', cmd: 'echo "Hello World" | sed \'s/World/Linux/\'', output: 'Hello Linux', explain: 's = substitute（替换）。s/old/new/ 把第一个匹配替换。s/old/new/g 全局替换（每行所有匹配）。' },
      { title: '全局替换', cmd: 'echo "aaa bbb aaa" | sed \'s/aaa/xxx/g\'', output: 'xxx bbb xxx', explain: 'g（global）替换每行所有匹配。不加 g 只替换第一个匹配。' },
      { title: '修改原文件', cmd: 'sed -i \'s/foo/bar/g\' file.txt', output: '（无输出，文件已修改）', explain: '-i（in-place）直接修改文件。⚠️ 建议先不加 -i 看结果是否正确。或者用 -i.bak 备份原文件：sed -i.bak \'s/foo/bar/g\' file.txt。' },
      { title: '多命令组合', cmd: 'echo "Hello World" | sed -e \'s/Hello/Hi/\' -e \'s/World/Earth/\'', output: 'Hi Earth', explain: '-e 执行多个命令。也可以用分号分隔：sed \'s/Hello/Hi/; s/World/Earth/\'。' },
    ],
    diagnosis: [
      { symptom: 'sed 没替换任何内容', cause: '搜索字符串没匹配。可能是大小写问题或正则转义问题。', fix: '加 I 标志忽略大小写：sed \'s/error/ERROR/gI\'。或者检查正则转义：. * [ ] 等特殊字符需要 \\ 转义。' },
      { symptom: 'sed -i 后文件被清空了', cause: '命令写错了。比如 sed -i \'\' file.txt（两个单引号）在某些 shell 里会被解释成空命令。', fix: '先不加 -i 测试：sed \'s/foo/bar/g\' file.txt | head。确认正确后再加 -i。或者用 -i.bak 备份。' },
      { symptom: 'sed 替换包含 / 的路径时报错', cause: 'sed 默认用 / 作分隔符。如果替换内容包含 /（如路径），会冲突。', fix: '换分隔符：sed \'s|/old/path|/new/path|g\'。| 或 # 都可以作分隔符。' },
    ],
    exercises: [
      { level: '基础', task: '把文件里所有的 "http://" 替换成 "https://"', hint: 'sed \'s|http://|https://|g\'', answer: 'sed -i \'s|http://|https://|g\' file.txt\n\n# 或者用 # 作分隔符：\nsed -i \'s#http://#https://#g\' file.txt' },
      { level: '进阶', task: '删除文件里所有包含 "DEBUG" 的行', hint: 'sed \'/pattern/d\' 删除匹配行', answer: 'sed -i \'/DEBUG/d\' file.txt\n\n# 或者删除空行：\nsed -i \'/^$/d\' file.txt\n\n# 删除注释行（# 开头）：\nsed -i \'/^#/d\' file.txt' },
      { level: '挑战', task: '用 sed 实现：在文件的每个方法定义（以 "def " 开头）前面加一行注释 "# TODO: review this method"', hint: 'sed \'/pattern/i\\text\' 在匹配行前插入', answer: 'sed \'/^def /i\\# TODO: review this method\' file.py\n\n# 或者在匹配行后插入：\nsed \'/^def /a\\# This method needs review\' file.py\n\n# 多行插入：\nsed \'/^def /i\\# TODO: review\\n# Author: TBD\' file.py' },
    ],
    prereqs: ['grep — 搜索文本', '正则表达式基础'],
    nextSteps: ['awk — 更强大的文本处理', 'Perl — 更强大的脚本语言'],
  },

  "abKO6KuuIfl9ruVxBw6t_": {
    mentalModel: 'cp 复制文件（原文件保留），mv 移动文件（原文件消失）。cp -r 递归复制目录，cp -p 保留属性。',
    handsOn: [
      { title: '复制文件', cmd: 'cp file.txt backup.txt && ls -l file.txt backup.txt', output: '-rw-r--r-- 1 tu staff 1024 Jan 15 14:30 file.txt\n-rw-r--r-- 1 tu staff 1024 Jan 15 14:31 backup.txt', explain: 'cp source dest 复制文件。目标已存在会被覆盖（加 -i 交互确认）。cp file1 file2 dir/ 把两个文件复制进目录。' },
      { title: '复制目录', cmd: 'cp -r project/ project-backup/ && ls project-backup/', output: 'src/  docs/  README.md', explain: '-r（recursive）递归复制整个目录树。-a 更完整：保留权限、时间戳、软链接等。备份时推荐 -a。' },
      { title: '保留属性', cmd: 'cp -p important.txt backup.txt && ls -l important.txt backup.txt', output: '-rw-r--r-- 1 tu staff 1024 Jan 10 09:00 important.txt\n-rw-r--r-- 1 tu staff 1024 Jan 10 09:00 backup.txt', explain: '-p（preserve）保留权限、所有者、时间戳。-a 等于 -d（保留链接）+ -R（递归）+ --preserve=all。' },
      { title: '增量复制', cmd: 'cp -u source.txt dest.txt', output: '（只在 source 比 dest 新时才复制）', explain: '-u（update）只在源文件比目标新时才复制。rsync 更适合大规模同步，但简单场景 cp -u 够用。' },
    ],
    diagnosis: [
      { symptom: 'cp 报 "omitting directory"', cause: '你在复制目录但没加 -r。cp 默认只能复制文件。', fix: 'cp -r dir1 dir2 递归复制目录。或者 cp -a 保留所有属性。' },
      { symptom: 'cp 后权限变了', cause: 'cp 默认不保留权限。新文件的权限由 umask 决定。', fix: 'cp -p 保留权限。或者 cp -a 保留所有属性（权限、时间戳、链接）。' },
      { symptom: 'cp 很慢（大目录）', cause: 'cp -r 会复制所有文件，包括没改过的。', fix: '用 rsync -av 增量同步（只复制变化的文件）。rsync 比 cp 快得多。' },
    ],
    exercises: [
      { level: '基础', task: '复制 /etc/nginx 目录到 /tmp/nginx-backup，保留所有属性', hint: 'cp -a', answer: 'cp -a /etc/nginx /tmp/nginx-backup\nls -la /tmp/nginx-backup' },
      { level: '进阶', task: '写一个备份函数，接受目录参数，自动加日期后缀，保留属性', hint: 'cp -a + date', answer: 'backup() {\n  local dir=$1\n  local backup="${dir}.bak.$(date +%Y%m%d%H%M%S)"\n  cp -a "$dir" "$backup"\n  echo "已备份: $backup"\n  du -sh "$backup"\n}\n\n# 使用：\nbackup ~/Documents' },
      { level: '挑战', task: '写一个脚本，比较两个目录的差异，只复制变化的文件', hint: 'rsync -av 或 diff + cp', answer: '#!/bin/bash\n# 方法 1：用 rsync（推荐）\nrsync -av --delete source/ dest/\n\n# 方法 2：用 diff + cp\ndiff -rq source/ dest/ | grep "Only in source" | awk \'{print $4}\' | while read file; do\n  cp -p "source/$file" "dest/$file"\ndone' },
    ],
    prereqs: ['mv — 移动/重命名文件', '文件权限 — chmod'],
    nextSteps: ['rsync — 增量同步', 'tar — 打包压缩'],
  },
};
