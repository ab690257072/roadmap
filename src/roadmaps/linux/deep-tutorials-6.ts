import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_6: Record<string, DeepTutorial> = {
  "6xdkFk_GT93MigeTSSGCp": {
    mentalModel: 'head 只看文件开头几行——像翻书先看前几页，不需要读完整本书就知道大概是什么内容。',
    handsOn: [
      { title: '看文件前 10 行', cmd: 'head /etc/passwd', output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\n...(共 10 行)', explain: '默认显示前 10 行。够你看清文件格式、分隔符和字段顺序。' },
      { title: '指定行数', cmd: 'head -n 3 /etc/passwd', output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin', explain: '-n 3 显示前 3 行。head -n 1 只看第一行（常用来读 CSV 的 header）。' },
      { title: '按字节截取', cmd: 'head -c 20 /etc/hostname', output: 'prod-web-01-very-long', explain: '-c 20 取前 20 字节。对二进制文件或超大文件的快速采样有用。' },
      { title: '多文件', cmd: 'head -n 2 /etc/hostname /etc/os-release', output: '==> /etc/hostname <==\nprod-web-01\n\n==> /etc/os-release <==\nNAME="Ubuntu"\nVERSION="22.04.3 LTS (Jammy Jellyfish)"', explain: '可以同时 head 多个文件，每个文件前面会显示文件名标题。' },
    ],
    diagnosis: [
      { symptom: 'head 显示乱码', cause: '文件是二进制格式（图片、编译后的程序等）或编码不是 UTF-8。', fix: 'file filename 看文件类型。如果是文本但乱码，用 iconv 转编码。' },
      { symptom: 'head -n -5 报错', cause: '某些旧版 head 不支持负数（输出除最后 N 行外的所有行）。', fix: '用 sed：sed -e :a -e \'$d;N;6,${D};ba\' 或用 tail 配合。' },
    ],
    exercises: [
      { level: '基础', task: '看 /etc/os-release 的前 5 行，找出系统名称和版本', hint: 'head -n 5 + grep', answer: 'head -n 5 /etc/os-release\ngrep "^NAME\\|^VERSION" /etc/os-release' },
      { level: '进阶', task: '比较两个文件的前 10 行有什么不同', hint: 'head + diff', answer: 'diff <(head -n 10 file1) <(head -n 10 file2)' },
      { level: '挑战', task: '写一个函数，显示文件的前 N 行和后 N 行（N 作为参数）', hint: 'head -n $N + tail -n $N', answer: 'headtail() {\n  local n=${1:-5}\n  local file=$2\n  echo "=== 前 $n 行 ==="\n  head -n "$n" "$file"\n  echo "=== 后 $n 行 ==="\n  tail -n "$n" "$file"\n}' },
    ],
    prereqs: ['cat — 看完整文件内容'],
    nextSteps: ['tail — 看文件末尾', 'less — 翻页看长文件'],
  },

  "KaMSsQnJzNqGHg0Oia4uy": {
    mentalModel: 'Linux 有三层帮助：--help（快速提示）→ man（完整手册）→ info（详细教程）。忘了命令怎么用？查帮助比背命令快。',
    handsOn: [
      { title: '快速查 --help', cmd: 'ls --help | head -20', output: 'Usage: ls [OPTION]... [FILE]...\nList information about the FILEs...\n  -a, --all            do not ignore entries starting with .\n  -l                   use a long listing format', explain: '--help 输出简要用法和参数列表。大多数命令支持。日常使用最常用的帮助方式。' },
      { title: '完整手册 man', cmd: 'man ls', output: 'LS(1)                          User Commands                         LS(1)\n\nNAME\n       ls - list directory contents\n\nSYNOPSIS\n       ls [OPTION]... [FILE]...', explain: 'man 打开完整手册：名称、语法、参数说明、示例、相关文件。按 q 退出，/ 搜索关键词，空格翻页。' },
      { title: '搜索手册', cmd: 'man -k "file permission"', output: 'chmod (1)            - change file mode bits\nchmod (2)            - change permissions of a file', explain: 'man -k keyword 搜索所有手册。apropos keyword 等价。找到后用 man 命令 看详情。' },
      { title: 'tldr 简明示例', cmd: 'tldr tar', output: 'tar\n\n  Archiving utility.\n\n  Create an archive:\n    tar cf target.tar file1 file2\n\n  Extract an archive:\n    tar xf source.tar', explain: 'tldr 显示社区贡献的简明示例。每条命令只有 5-8 个最常用的用法示例，比 man 实用得多。需要安装：npm i -g tldr 或 apt install tldr。' },
    ],
    diagnosis: [
      { symptom: 'man 命令打开很慢或卡住', cause: 'man 需要格式化手册页，第一次打开可能慢。或者手册页很大（如 bash 有几千行）。', fix: '用 man -k 先搜索，找到具体命令再看。或者用 tldr 看简明示例。' },
      { symptom: '找不到某个命令的 man page', cause: '命令没装 man 文档（某些最小化安装）。或者命令是 shell 内建（如 cd、alias）。', fix: '内建命令用 help cd 或 bash -c "help cd"。没装文档就查在线手册。' },
      { symptom: 'man page 里的信息太旧', cause: '系统版本和文档版本不匹配。或者文档写的是 POSIX 标准，但你的系统有扩展。', fix: '查官方在线文档（如 GNU coreutils 手册）。或者用 --help 看实际支持的参数。' },
    ],
    exercises: [
      { level: '基础', task: '用 man 查 find 命令的 -mtime 参数含义', hint: 'man find → /mtime → n 下一个匹配', answer: 'man find\n# 输入 /mtime 搜索\n# n 跳到下一个匹配\n# q 退出' },
      { level: '进阶', task: '找出所有和 "network" 相关的手册页', hint: 'man -k network 或 apropos network', answer: 'man -k network | head -20\n\n# 看具体某个：\nman netstat' },
      { level: '挑战', task: '写一个函数 quickhelp，结合 --help、man、tldr 显示命令帮助', hint: '先试 tldr，失败则 man，再失败则 --help', answer: 'quickhelp() {\n  local cmd=$1\n  echo "=== tldr ==="\n  tldr "$cmd" 2>/dev/null || echo "(tldr 未安装或无此命令)"\n  echo ""\n  echo "=== --help ==="\n  "$cmd" --help 2>&1 | head -20\n  echo ""\n  echo "=== man (按 q 退出) ==="\n  read -p "按 Enter 打开 man page..."\n  man "$cmd"\n}' },
    ],
    prereqs: ['基础命令 — 会用终端'],
    nextSteps: ['Shell 脚本 — 把常用操作自动化', 'alias — 给长命令取短名字'],
  },
};
