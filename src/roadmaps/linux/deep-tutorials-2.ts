import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_2: Record<string, DeepTutorial> = {
  "qLeEEwBvlGt1fP5Qcreah": {
    mentalModel: 'Linux 基础命令是你的"眼睛和脚"：pwd 看自己在哪，ls 看周围有什么，cd 走到目的地，cat 看文件内容。在一台陌生服务器上，这四个命令让你不会迷路。',
    handsOn: [
      {
        title: '确认当前位置',
        cmd: 'pwd',
        output: '/home/tu/projects',
        explain: 'pwd（print working directory）输出当前目录的绝对路径。登录服务器后第一件事就打 pwd，确认自己在哪。比看终端提示符可靠，因为提示符可能被配置成只显示最后一级目录。',
      },
      {
        title: '看目录里有什么',
        cmd: 'ls -lah',
        output: 'total 48K\ndrwxr-xr-x  8 tu staff  256 Jan 15 10:23 .\ndrwxr-xr-x  6 tu staff  192 Jan 10 09:00 ..\n-rw-r--r--  1 tu staff  220 Jan 10 09:00 .bashrc\ndrwxr-xr-x  3 tu staff   96 Jan 14 15:30 src\n-rwxr-xr-x  1 tu staff  8.2K Jan 15 10:23 deploy.sh',
        explain: '-l 长格式（显示权限、所有者、大小、日期），-a 显示隐藏文件（.开头），-h 人类可读大小（8.2K 而不是 8396）。第一列是权限字符串（-rw-r--r--），后面会详细讲。',
      },
      {
        title: '切换目录',
        cmd: 'cd /var/log && pwd && cd .. && cd ~ && pwd',
        output: '/var/log\n/home/tu',
        explain: 'cd /var/log 跳到绝对路径。cd .. 回上一层。cd ~ 或 cd 回家目录（/home/tu）。cd - 回到上一个目录（像浏览器后退键）。Tab 键自动补全路径，省去手打长路径。',
      },
      {
        title: '看文件内容',
        cmd: 'cat /etc/hostname',
        output: 'prod-web-01',
        explain: 'cat 把文件内容输出到屏幕。适合短文件。长文件用 less（可以翻页，q 退出）或 head -20（只看前 20 行）。cat 也常配合重定向：cat a.txt > b.txt 复制文件内容。',
      },
    ],
    diagnosis: [
      {
        symptom: 'ls 什么也不显示',
        cause: '目录是空的，或者你看的不是你以为的目录。先 pwd 确认位置。',
        fix: 'pwd 确认位置，ls -a 显示隐藏文件（.开头的文件默认不显示）。',
      },
      {
        symptom: 'cd 到某个目录报 "No such file or directory"',
        cause: '路径拼错了，或者目录不存在。Tab 补全能帮你避免拼写错误。',
        fix: '用 Tab 补全路径。ls 父目录确认子目录名。如果路径含空格，用引号：cd "My Documents"。',
      },
      {
        symptom: 'cat 一个文件显示乱码',
        cause: '文件是二进制格式（图片、编译后的程序等）或编码不是 UTF-8。',
        fix: 'file filename 看文件类型。如果是文本但乱码，用 iconv 转编码或用 hexdump -C 看原始字节。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '从家目录出发，进入 /var/log 目录，列出所有文件（包括隐藏文件），然后回到家目录',
        hint: 'cd /var/log → ls -a → cd ~',
        answer: 'cd /var/log\nls -la   # 或 ls -a\ncd ~     # 或 cd\npwd      # 确认回到了 /home/你的用户名',
      },
      {
        level: '进阶',
        task: '找出 /etc 目录下所有以 .conf 结尾的文件，并显示它们的大小',
        hint: 'ls 支持通配符 *',
        answer: 'ls -lh /etc/*.conf\n\n# 如果想递归搜索子目录：\nfind /etc -name "*.conf" -exec ls -lh {} \\;',
      },
      {
        level: '挑战',
        task: '用一条命令显示你当前目录下最大的 5 个文件（不包含子目录里的）',
        hint: 'ls -S 按大小排序，head -5 取前 5 个。或者用 du 配合 sort',
        answer: 'ls -lSh | head -6   # head -6 因为第一行是 total\n\n# 更精确（排除目录）：\nfind . -maxdepth 1 -type f -exec ls -lh {} \\; | sort -k5 -rh | head -5',
      },
    ],
    prereqs: [],
    nextSteps: [
      '目录导航 — 理解 Linux 文件系统树结构',
      '创建与删除文件 — touch/mkdir/rm',
      '移动和复制 — mv/cp',
    ],
  },

  "q-Ky0ietZGpyUcBQfh-BJ": {
    mentalModel: 'mv 同时做了两件事：移动和重命名。底层是同一个操作——改变文件的路径。同目录内 mv = 改名，跨目录 mv = 搬家。',
    handsOn: [
      {
        title: '重命名文件（同目录 mv）',
        cmd: 'mv old-name.txt new-name.txt && ls new-name.txt',
        output: 'new-name.txt',
        explain: '在同目录下 mv 就是重命名。文件内容不变，只是名字换了。旧名字消失，新名字出现。',
      },
      {
        title: '移动文件到其他目录',
        cmd: 'mv report.pdf ~/Documents/ && ls ~/Documents/report.pdf',
        output: '/home/tu/Documents/report.pdf',
        explain: '目标路径是目录时，mv 把文件放进去。文件名保持不变。可以同时移动多个文件：mv a.txt b.txt c.txt ~/Documents/。',
      },
      {
        title: '移动并重命名',
        cmd: 'mv ~/Downloads/image.png ~/Pictures/vacation-photo.png',
        output: '（无输出，成功）',
        explain: '目标路径含文件名时，mv 同时做移动+改名。一步到位，不需要先 mv 再 mv。',
      },
      {
        title: '防覆盖：-i 交互确认',
        cmd: 'mv -i important.txt ~/backup/ && echo "y"',
        output: "mv: overwrite '/home/tu/backup/important.txt'? y",
        explain: '-i（interactive）在目标文件已存在时提示确认。不加 -i 会直接覆盖，不会警告。生产环境务必加 -i 或 -n（不覆盖）。',
      },
    ],
    diagnosis: [
      {
        symptom: 'mv 后文件"消失"了',
        cause: '你可能把文件 mv 成了一个不存在的文件名——mv 把它重命名成了那个名字，而不是放到目录里。比如 mv file.txt /tmp（/tmp 是目录 → 移动），但 mv file.txt /tmp.txt（/tmp.txt 不是目录 → 重命名为 /tmp.txt）。',
        fix: 'find / -name "file.txt" 2>/dev/null 全局搜索。以后 mv 时确认目标路径：末尾加 / 表示目录。',
      },
      {
        symptom: 'mv 报 "cannot move: Permission denied"',
        cause: '你对源目录没有写权限（不能"拿走"文件），或者对目标目录没有写权限（不能"放入"文件）。',
        fix: 'ls -ld 源目录 目标目录 看权限。用 sudo mv 提升权限。或者 chown 改目录所有者。',
      },
      {
        symptom: 'mv 跨文件系统很慢',
        cause: '同文件系统 mv 只是改元数据（瞬间完成）。跨文件系统（如从 /home 到 /mnt/usb）实际是 cp + rm（要复制数据）。',
        fix: '大文件跨文件系统 mv 前，先估算时间。或者用 rsync --progress 看进度。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在 /tmp 创建一个文件 test.txt，把它重命名为 hello.txt，然后移动到 /tmp/backup/ 目录（先创建 backup 目录）',
        hint: 'touch → mv → mkdir → mv',
        answer: 'cd /tmp\ntouch test.txt\nmv test.txt hello.txt\nmkdir -p backup\nmv hello.txt backup/\nls backup/',
      },
      {
        level: '进阶',
        task: '把当前目录下所有 .txt 文件移动到 docs/ 目录，已经存在的文件不覆盖',
        hint: 'mv -n 不覆盖已存在的文件',
        answer: 'mkdir -p docs\nmv -n *.txt docs/\n\n# 或用 -i 逐个确认：\nmv -i *.txt docs/',
      },
      {
        level: '挑战',
        task: '写一条命令：把 ~/Downloads 里所有超过 30 天的 .pdf 文件移动到 ~/Documents/archive/',
        hint: 'find -mtime +30 -name "*.pdf" 配合 -exec mv',
        answer: 'mkdir -p ~/Documents/archive\nfind ~/Downloads -name "*.pdf" -mtime +30 -exec mv {} ~/Documents/archive/ \\;\n\n# 更安全的版本（先看会移动哪些）：\nfind ~/Downloads -name "*.pdf" -mtime +30 -ls',
      },
    ],
    prereqs: [
      '基础命令 — pwd/ls/cd',
      '创建文件和目录 — touch/mkdir',
    ],
    nextSteps: [
      'cp — 复制文件（原文件保留）',
      'rm — 删除文件',
      'find — 按条件搜索文件',
    ],
  },

  "y7KjVfSI6CAduyHd4mBFT": {
    mentalModel: 'Linux 文件系统是一棵倒挂的树：/ 是根，/home、/etc、/var 是树枝，你的文件是叶子。所有磁盘和设备都挂载在这棵树的某个节点下。没有 Windows 的 C:\\ D:\\ 盘符概念。',
    handsOn: [
      {
        title: '看文件系统全貌',
        cmd: 'ls /',
        output: 'bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var',
        explain: '根目录 / 下有这些标准目录。每个都有特定用途（FHS 标准）。/etc 放配置，/home 放用户文件，/var 放日志和缓存，/tmp 放临时文件，/usr 放用户程序。',
      },
      {
        title: '绝对路径 vs 相对路径',
        cmd: 'cd /var/log && ls nginx/ && cd nginx && pwd',
        output: '/var/log/nginx',
        explain: '/var/log 是绝对路径（从 / 开始，永远指向同一个地方）。nginx/ 是相对路径（从当前位置出发）。脚本里推荐用绝对路径，避免因为执行位置不同而出错。',
      },
      {
        title: '特殊路径符号',
        cmd: 'echo ~ && echo . && echo .. && echo $OLDPWD',
        output: '/home/tu\n.\n..\n/var/log',
        explain: '~ 是家目录，. 是当前目录，.. 是父目录，$OLDPWD 是上一个目录（cd - 就是跳到这）。这些符号让路径操作更高效。',
      },
      {
        title: '看磁盘挂载情况',
        cmd: 'df -h',
        output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       100G   42G   58G  42% /\ntmpfs           7.8G  2.1M  7.8G   1% /dev/shm\n/dev/sdb1       500G  180G  320G  36% /data',
        explain: 'df 显示磁盘使用情况。可以看到 /dev/sda1 挂载在 /（系统盘 42%），/dev/sdb1 挂载在 /data（数据盘 36%）。Linux 没有盘符，额外磁盘挂载在目录树下。',
      },
    ],
    diagnosis: [
      {
        symptom: 'cd 到一个目录说 "Not a directory"',
        cause: '你 cd 的目标是一个文件，不是目录。cd /etc/hostname 会报这个错——hostname 是文件。',
        fix: 'ls -ld 目标路径 看是文件（-）还是目录（d）。只有目录能 cd。',
      },
      {
        symptom: '找不到某个文件，但确定它存在',
        cause: '可能是相对路径 vs 绝对路径搞混了。./config.yaml 和 /config.yaml 完全不同。',
        fix: '用 find / -name "filename" 2>/dev/null 全局搜索。或者 realpath ./path 看绝对路径。',
      },
      {
        symptom: '磁盘空间显示 100% 但 du 加起来不到 100%',
        cause: '有些文件被删除了但进程还打开着（空间未释放）。lsof +L1 找到这些"僵尸文件"。',
        fix: 'lsof +L1 看已删除但未释放的文件。重启对应进程释放空间。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '从 / 开始，依次访问 /etc、/home、/var/log，每次用 pwd 确认位置，最后回到家目录',
        hint: 'cd /etc → pwd → cd /home → pwd ...',
        answer: 'cd /etc && pwd\ncd /home && pwd\ncd /var/log && pwd\ncd ~ && pwd',
      },
      {
        level: '进阶',
        task: '用相对路径从 /var/log/nginx 跳到 /var/lib/mysql（不输入绝对路径）',
        hint: 'cd .. 回上层，然后进另一个分支',
        answer: 'cd /var/log/nginx\ncd ../../lib/mysql\npwd   # 应该是 /var/lib/mysql',
      },
      {
        level: '挑战',
        task: '找出 /etc 下所有 .conf 文件，并按所在目录分组显示',
        hint: 'find 找文件，dirname 取目录部分，sort 分组',
        answer: 'find /etc -name "*.conf" | while read f; do dirname "$f"; done | sort | uniq -c | sort -rn\n\n# 或者更简洁：\nfind /etc -name "*.conf" -printf "%h\\n" | sort | uniq -c | sort -rn',
      },
    ],
    prereqs: [
      '基础命令 — pwd/ls/cd',
    ],
    nextSteps: [
      '创建与删除 — touch/mkdir/rm',
      '文件权限 — 理解 rwx 和 chmod',
      '挂载 — mount 和 /etc/fstab',
    ],
  },

  "9oo2fxTM2_p0VYPBroqxa": {
    mentalModel: '创建是安全的（最多多一个文件），删除是危险的（rm 没有回收站）。mkdir 建目录，touch 建文件，rm 删除——删除前永远先 ls 确认。',
    handsOn: [
      {
        title: '创建空文件：touch',
        cmd: 'touch new-file.txt && ls -la new-file.txt',
        output: '-rw-r--r-- 1 tu staff 0 Jan 15 14:30 new-file.txt',
        explain: 'touch 创建空文件（大小 0 字节）。如果文件已存在，touch 只更新时间戳（mtime）。这常用来触发 make 重新编译或让脚本检测到文件变化。',
      },
      {
        title: '创建目录：mkdir',
        cmd: 'mkdir -p project/src/components && ls -R project/',
        output: 'project:\nsrc\n\nproject/src:\ncomponents',
        explain: 'mkdir 创建目录。-p（parents）递归创建多层目录——中间任何一层不存在都会自动创建。不加 -p 只能创建一层，父目录不存在会报错。',
      },
      {
        title: '删除文件：rm',
        cmd: 'rm test.txt && ls test.txt 2>&1',
        output: 'ls: cannot access \'test.txt\': No such file or directory',
        explain: 'rm 删除文件。没有回收站，删了就没了。rm -i 会逐个确认。rm -f 强制删除不提示（危险）。rm -r 递归删除目录及内容。',
      },
      {
        title: '删除目录：rm -r',
        cmd: 'rm -r project/ && ls project/ 2>&1',
        output: 'ls: cannot access \'project/\': No such file or directory',
        explain: 'rm -r（recursive）递归删除目录及所有内容。rm -rf 强制递归删除（不提示、忽略错误）。⚠️ rm -rf / 会删除整个系统。生产环境用 rm -i 或先 ls 确认再删。',
      },
    ],
    diagnosis: [
      {
        symptom: 'rm 报 "cannot remove: Is a directory"',
        cause: '你在删目录但没加 -r。rm 默认只能删文件。',
        fix: 'rm -r directory 递归删除。或者 rmdir directory（只能删空目录，更安全）。',
      },
      {
        symptom: 'rm -rf 之后发现删错了',
        cause: '没有回收站，数据从文件系统取消引用。SSD 上基本不可能恢复。',
        fix: '立即停止写入（避免覆盖）。尝试 extundelete 或 testdisk 恢复（HDD 成功率更高）。预防措施：alias rm="rm -i"、用 trash-cli 替代 rm、脚本里 rm 前先 echo 看路径。',
      },
      {
        symptom: 'mkdir 报 "File exists"',
        cause: '目录已存在。mkdir 默认遇到已存在的目录会报错。',
        fix: 'mkdir -p 不会因为目录已存在而报错。或者 [ ! -d dir ] && mkdir dir 先检查再创建。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个目录结构 project/{src,tests,docs}（一行命令），然后在 src/ 下创建 app.js 和 index.html',
        hint: 'mkdir -p 支持花括号展开',
        answer: 'mkdir -p project/{src,tests,docs}\ntouch project/src/app.js project/src/index.html\nfind project/ -type f',
      },
      {
        level: '进阶',
        task: '在 /tmp 创建一个临时目录，里面放 100 个空文件（file-001.txt 到 file-100.txt），然后只删除编号为偶数的文件',
        hint: 'seq 生成数字序列，printf 格式化数字（%03d 补零）',
        answer: 'mkdir /tmp/lab && cd /tmp/lab\nfor i in $(seq -w 1 100); do touch file-$i.txt; done\nls | wc -l   # 应该 100\nfor i in $(seq 2 2 100); do rm file-$(printf "%03d" $i).txt; done\nls | wc -l   # 应该 50',
      },
      {
        level: '挑战',
        task: '写一个安全的删除命令：先显示要删什么，等 3 秒让用户确认（Ctrl+C 取消），然后才删',
        hint: '用 echo 显示、sleep 等待、trap 捕获 Ctrl+C',
        answer: '#!/bin/bash\nsafe_rm() {\n  echo "即将删除: $@"\n  echo "3 秒后执行，Ctrl+C 取消"\n  trap "echo 已取消; return 1" INT\n  sleep 3\n  trap - INT\n  rm -rv "$@"\n}\nsafe_rm /tmp/test-dir',
      },
    ],
    prereqs: [
      '基础命令 — pwd/ls',
      '目录导航 — 理解路径',
    ],
    nextSteps: [
      '移动和复制 — mv/cp',
      '文件权限 — chmod/chown',
      'find — 按条件搜索和操作文件',
    ],
  },

  "XiZz7EFIey1XKS292GN4t": {
    mentalModel: 'Vim 是模式编辑器：普通模式（导航/命令）↔ 插入模式（打字）↔ 命令模式（:保存退出）。大多数新手被困在 Vim 里是因为不知道自己在哪个模式。Esc 是从任何模式回到普通模式的安全键。',
    handsOn: [
      {
        title: '打开文件并进入插入模式',
        cmd: 'vim /tmp/test.txt\n# 打开后按 i 进入插入模式\n# 打几行字：Hello Vim\n# 按 Esc 回到普通模式',
        output: '-- INSERT --（屏幕左下角显示）',
        explain: '打开 Vim 后默认在普通模式——不能直接打字，这和记事本完全不同。按 i 进入插入模式（左下角显示 -- INSERT --），此时打字就像普通编辑器。Esc 回到普通模式。',
      },
      {
        title: '保存并退出',
        cmd: '# 在普通模式下（先按 Esc）\n# 输入 :wq 回车',
        output: '"/tmp/test.txt" 1 line, 10 bytes written',
        explain: ':wq 是 :write + :quit 的缩写。先按 Esc 确保在普通模式（多按几次也没事），然后输入 :wq 回车。只保存不退出：:w。退出不保存：:q!。',
      },
      {
        title: '常用普通模式操作',
        cmd: '# 打开文件后在普通模式下：\n# h j k l  ← ↓ ↑ →\n# dd 删除当前行\n# yy 复制当前行\n# p 粘贴\n# /keyword 搜索，n 下一个',
        output: '（各种操作效果）',
        explain: '普通模式下 hjkl 移动光标（比方向键快，手不用离开主键位）。dd 删除行，yy 复制行，p 粘贴。/搜索词 搜索，n 下一个匹配，N 上一个。u 撤销，Ctrl+r 重做。',
      },
      {
        title: '替换和可视化选择',
        cmd: '# 普通模式下：\n# v 进入可视模式，移动选择，y 复制/d 删除\n# :%s/old/new/g 全文替换\n# :set number 显示行号',
        output: '（操作效果）',
        explain: 'v 进入可视模式（Visual），移动光标选择区域，y 复制/d 删除。:%s/old/new/g 全文替换（% 表示所有行，g 表示每行所有匹配）。:set number 显示行号方便定位。',
      },
    ],
    diagnosis: [
      {
        symptom: '卡在 Vim 里不知道怎么退出',
        cause: '不知道自己在什么模式，或者 :q 报 "No write since last change"。',
        fix: '连按 Esc 三次确保在普通模式。:q! 强制退出不保存。:wq 保存并退出。如果还是不行，Ctrl+C 然后 :q!。',
      },
      {
        symptom: '终端卡住了（打什么字都没反应）',
        cause: '你在普通模式下按了 Ctrl+S（XOFF 暂停终端输出）。这不是 Vim 的问题，是终端流控制。',
        fix: '按 Ctrl+Q（XON）恢复输出。永久禁用：stty -ixon 加到 ~/.bashrc。',
      },
      {
        symptom: '插入模式下的方向键打出 ABCD 字符',
        cause: '终端配置问题，通常发生在 SSH 到某些服务器时。Vim 的方向键转义序列没被正确识别。',
        fix: ':set nocompatible 或确保 ~/.vimrc 存在（即使空的）。SSH 里用 set -o vi 也可能影响。',
      },
      {
        symptom: '保存时报 "E212: Can\'t open file for writing"',
        cause: '你对这个文件没有写权限。比如编辑 /etc/nginx/nginx.conf 但没用 sudo。',
        fix: ':w !sudo tee % 用 sudo 写入（% 是当前文件名）。或者退出后 sudo vim 重新打开。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Vim 创建一个文件，写入 5 行文字，保存退出，然后重新打开确认内容',
        hint: 'vim file → i → 打字 → Esc → :wq',
        answer: 'vim /tmp/vim-test.txt\n# 按 i\nLine 1\nLine 2\nLine 3\nLine 4\nLine 5\n# 按 Esc\n:wq\n# 重新打开：\nvim /tmp/vim-test.txt\n# 确认内容后 :q',
      },
      {
        level: '进阶',
        task: '打开一个文件，在第 3 行后面插入一行新内容，删除第 1 行，把文件中所有 "hello" 替换成 "world"',
        hint: ':3 跳到第 3 行，o 在下方新开一行。dd 删除行。:%s/hello/world/g 替换',
        answer: 'vim /tmp/test.txt\n:3          # 跳到第 3 行\no           # 在下方新开一行\nNew content # 打字\nEsc         # 回普通模式\n:1          # 跳到第 1 行\ndd          # 删除\n:%s/hello/world/g  # 替换\n:wq         # 保存退出',
      },
      {
        level: '挑战',
        task: '用 Vim 的宏（macro）功能：录制一个操作（给每行末尾加一个分号），然后对剩余 99 行批量执行',
        hint: 'qa 录制到寄存器 a，q 停止录制，@a 播放一次，99@a 播放 99 次',
        answer: 'vim /tmp/test.txt\n# 在第 1 行：\nqa          # 开始录制到寄存器 a\n$           # 跳到行尾\na           # 进入插入模式（在光标后）\n;           # 输入分号\nEsc         # 回普通模式\nj           # 跳到下一行\nq           # 停止录制\n# 现在有 99 行需要处理：\n99@a        # 播放宏 99 次\n:wq',
      },
    ],
    prereqs: [
      '基础命令 — 能用终端',
    ],
    nextSteps: [
      'Nano — 更简单的终端编辑器',
      '编辑文件流程 — 备份 → 编辑 → diff → 验证',
      'Vim 插件 — vim-plug + 常用插件配置',
    ],
  },
};
