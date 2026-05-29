import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  // ── grep ──
  "umlhxidsvtZG9k40Ca0Ac": {
    mentalModel: 'grep 是文本搜索的"Ctrl+F"，但它能搜索文件、管道输出、整个目录。把它想成一个"逐行检查员"：读一行，匹配就输出，不匹配就跳过。',
    handsOn: [
      {
        title: '在文件里搜关键词',
        cmd: 'grep root /etc/passwd',
        output: 'root:x:0:0:root:/root:/bin/bash\noperator:x:11:0:operator:/root:/sbin/nologin',
        explain: '/etc/passwd 每行代表一个用户。grep root 找出所有包含 "root" 的行。注意 "operator" 也匹配了——因为它的家目录是 /root。如果你只想找用户名叫 root 的，需要更精确的搜索。',
      },
      {
        title: '忽略大小写 + 计数',
        cmd: 'grep -ic error /var/log/syslog',
        output: '42',
        explain: '-i 忽略大小写（ERROR、Error、error 都算）。-c 只输出匹配行数，不显示内容。快速知道日志里有多少错误时非常有用。',
      },
      {
        title: '递归搜索整个目录',
        cmd: 'grep -rn "TODO" src/ --include="*.ts"',
        output: 'src/App.tsx:45:  // TODO: fix this\nsrc/utils.ts:12: // TODO: add tests',
        explain: '-r 递归搜索 src/ 下所有文件。-n 显示行号（方便跳转到代码位置）。--include="*.ts" 只搜 TypeScript 文件。这是开发者每天用得最多的 grep 命令之一。',
      },
      {
        title: '排除 + 组合管道',
        cmd: 'grep "ERROR" app.log | grep -v "health_check"',
        output: '2024-01-15 ERROR Connection timeout to db-master\n2024-01-15 ERROR Redis OOM in session store',
        explain: '先 grep 出所有 ERROR 行，再用 -v（反向匹配）排除健康检查的噪音。管道组合是 grep 最强大的用法——第一个 grep 粗筛，第二个 grep 精筛。',
      },
    ],
    diagnosis: [
      {
        symptom: 'grep: warning: recursive search of stdin',
        cause: '你在管道后面加了 -r，但 stdin 不是目录。-r 只对目录有效。',
        fix: '去掉 -r。管道输入不需要 -r：cat file | grep pattern 就行。',
      },
      {
        symptom: '搜 "error.log" 找不到结果，但文件里明明有',
        cause: '. 在正则里是"任意字符"。grep "error.log" 会匹配 "errorXlog"。如果你搜的是字面量文件名，用 grep -F（固定字符串）或转义 grep "error\\.log"。',
        fix: 'grep -F "error.log" file 或 grep "error\\.log" file',
      },
      {
        symptom: 'grep 搜中文返回空',
        cause: '文件编码和终端编码不一致。文件可能是 GBK，终端是 UTF-8。',
        fix: 'file -i filename 看编码。iconv -f GBK -t UTF-8 file | grep 中文。',
      },
      {
        symptom: '搜索很慢，目录有 node_modules 或 .git',
        cause: '-r 会搜索所有子目录，包括 node_modules（可能几十万文件）。',
        fix: '加 --exclude-dir：grep -rn pattern --exclude-dir=node_modules --exclude-dir=.git。或用 rg（ripgrep）替代 grep，它自动忽略 .gitignore 里的目录。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在 /etc/passwd 中找到所有使用 /bin/bash 的用户',
        hint: '搜索 "/bin/bash" 这个字符串',
        answer: 'grep "/bin/bash" /etc/passwd\n\n# 进阶：只要用户名（第一列）\ngrep "/bin/bash" /etc/passwd | cut -d: -f1',
      },
      {
        level: '进阶',
        task: '统计 /var/log 下每个 .log 文件里 "ERROR" 出现的次数，按次数从多到少排列',
        hint: 'grep -c 可以计数，sort -rn 可以按数字倒序',
        answer: 'grep -c "ERROR" /var/log/*.log | sort -t: -k2 -rn | head -10\n\n# 输出格式：文件名:次数\n# -t: 用冒号分隔，-k2 按第二列排序',
      },
      {
        level: '挑战',
        task: '找出当前目录下所有 Go 文件中定义了 struct 但没写 json tag 的字段（字段名后面没有反引号）',
        hint: 'struct 字段通常以大写开头，json tag 在反引号里。先用 grep -rn 找 struct 定义附近的行',
        answer: '# 思路：找 struct 定义块里大写字母开头、但没有反引号的行\ngrep -rn "^[[:space:]]*[A-Z][a-zA-Z]*[[:space:]]" --include="*.go" | grep -v \'`\'\n\n# 这会找到所有看起来像 struct 字段但没有 tag 的行\n# 注意：可能有误报，需要人工确认',
      },
    ],
    prereqs: [
      'stdout/stdin/stderr — 理解管道怎么传数据',
      '正则表达式基础 — . * ^ $ [] 的含义',
    ],
    nextSteps: [
      'awk — grep 只搜整行，awk 能搜特定列',
      'sed — 搜到之后批量替换',
      'ripgrep (rg) — grep 的现代替代品，更快更智能',
    ],
  },

  // ── pipe ──
  "v32PJl4fzIFTOirOm6G44": {
    mentalModel: '管道 | 把前一个命令的 stdout 变成后一个命令的 stdin。像工厂流水线：原材料从第一道工序进来，经过每道工序加工，最终出成品。每个工序（命令）只做一件事，但组合起来能处理复杂任务。',
    handsOn: [
      {
        title: '最简单的管道：搜 + 过滤',
        cmd: 'ls /etc | grep conf',
        output: 'adduser.conf\nca-certificates.conf\ncontainers.conf\ndeluser.conf\ndns.conf',
        explain: 'ls /etc 列出所有文件（stdout），通过管道喂给 grep，grep 只保留包含 "conf" 的行。不用管道的话，你得把 ls 结果存到文件再 grep。管道省掉了临时文件。',
      },
      {
        title: '统计：sort + uniq + sort',
        cmd: 'cat access.log | awk \'{print $1}\' | sort | uniq -c | sort -rn | head -5',
        output: '   1284 192.168.1.100\n    893 10.0.0.5\n    421 172.16.0.22\n    318 192.168.1.55\n    201 10.0.0.12',
        explain: '这条管道做了 6 件事：① 读日志 ② awk 取第一列（IP）③ sort 排序让相同 IP 相邻 ④ uniq -c 计数 ⑤ sort -rn 按次数倒排 ⑥ head -5 取前 5。这是"谁访问我最多"的标准答案。',
      },
      {
        title: 'tee：分流——边看边存',
        cmd: 'echo "test data" | tee output.txt | wc -c',
        output: '10',
        explain: 'tee 像 T 型水管：数据流过 tee 时分成两路——一路继续走管道（到 wc -c），一路存到文件 output.txt。你在跑长命令时想边看输出边存日志：script.sh 2>&1 | tee log.txt。',
      },
      {
        title: 'xargs：把输入变成参数',
        cmd: 'find . -name "*.tmp" | xargs rm',
        output: '（删除了所有 .tmp 文件）',
        explain: 'find 输出的文件名通过管道变成 rm 的参数。如果不用 xargs，rm 读不到 stdin（rm 只接受参数）。xargs 是"把 stdin 翻译成命令行参数"的桥梁。加 -I {} 可以自定义参数位置：xargs -I {} cp {} /backup/。',
      },
    ],
    diagnosis: [
      {
        symptom: '管道后面那个命令没收到数据',
        cause: '前一个命令的输出走了 stderr 而不是 stdout。比如 ls /不存在 2>/dev/null 什么也收不到——错误信息走 stderr，管道只传 stdout。',
        fix: '加 2>&1 把 stderr 合并到 stdout：command 2>&1 | next_command',
      },
      {
        symptom: '管道里 grep 输出被延迟/缓冲了',
        cause: '管道中的命令默认会缓冲输出（不是实时一行行输出）。grep 在管道中会缓冲 4KB 才输出一次。',
        fix: 'grep 加 --line-buffered：tail -f app.log | grep --line-buffered ERROR | ...。其他命令看是否有类似选项。',
      },
      {
        symptom: '管道某个命令报错了但不知道是哪个',
        cause: '管道默认只返回最后一个命令的退出码（$?）。中间某个命令失败不会被发现。',
        fix: '在脚本开头加 set -o pipefail，这样管道中任何命令失败都会让整条管道失败。',
      },
      {
        symptom: 'xargs 参数太长报错 "Argument list too long"',
        cause: 'find 输出了太多文件名，一次传给 rm 超出了系统的命令行长度限制。',
        fix: 'xargs 加 -n 分批处理：find . -name "*.tmp" | xargs -n 100 rm（每批 100 个文件）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用一条管道命令统计 /etc/passwd 里有多少个用户',
        hint: 'cat /etc/passwd 然后管道到 wc -l',
        answer: 'cat /etc/passwd | wc -l\n\n# 更好的写法（不需要 cat）：\nwc -l < /etc/passwd\n\n# 或者：\ngrep -c "" /etc/passwd',
      },
      {
        level: '进阶',
        task: '找出当前系统占内存最多的 5 个进程，显示进程名和内存占用',
        hint: 'ps aux 输出中第 4 列是 %MEM。用 sort -k4 -rn 按第 4 列倒序排',
        answer: 'ps aux | sort -k4 -rn | head -5 | awk \'{printf "%-20s %s%%\\n", $11, $4}\'\n\n# 输出示例：\n# /usr/lib/firefox/fir  12.3%\n# /opt/google/chrome/c  8.7%\n# /usr/bin/gnome-shell  5.2%',
      },
      {
        level: '挑战',
        task: '实时监控 Nginx 日志，统计每分钟的 HTTP 状态码分布（200/301/404/500 各多少个）',
        hint: 'tail -f 实时追踪 → awk 提取状态码和时间 → 用 cut 截取到分钟级别',
        answer: 'tail -f /var/log/nginx/access.log | \\\n  awk \'{\n    time = substr($4, 2, 17);  # 取时间到分钟\n    code = $9;                  # 第 9 列是状态码\n    print time, code\n  }\' | \\\n  sort | uniq -c | \\\n  grep --line-buffered -v "^$"\n\n# 注意：这只是实时输出，要做分钟汇总需要用 watch 或者脚本配合\n# 生产环境推荐用 goaccess 或 ELK stack',
      },
    ],
    prereqs: [
      'stdout/stdin/stderr — 理解管道的数据流向',
      '重定向 > >> — 管道是"传"，重定向是"存"',
    ],
    nextSteps: [
      '命名管道 (mkfifo) — 在磁盘上创建持久管道',
      '进程替换 <() — 把命令输出当文件用',
      'Shell 脚本 — 把常用管道保存成可复用脚本',
    ],
  },

  // ── 文件权限 ──
  "TnrT-cqMA8urew9nLv0Ns": {
    mentalModel: 'Linux 权限是一张三列的表格：谁能做什么。三列是 owner（所有者）、group（同组）、other（其他人）。谁能 = r（读）、w（写）、x（执行）。对目录来说，x 不是"执行"而是"进入"。',
    handsOn: [
      {
        title: '看懂权限字符串',
        cmd: 'ls -la /etc/passwd',
        output: '-rw-r--r-- 1 root root 2843 Jan 15 10:23 /etc/passwd',
        explain: '-rw-r--r-- 拆开看：-（文件）| rw-（所有者可读写）| r--（同组可读）| r--（其他人可读）。root root 分别是所有者和组。所以只有 root 能改这个文件，其他人只能读。',
      },
      {
        title: '给脚本加执行权限',
        cmd: 'chmod +x deploy.sh && ls -la deploy.sh',
        output: '-rwxr-xr-x 1 tu staff 256 Jan 15 14:30 deploy.sh',
        explain: '+x 加了执行权限。现在所有三组人（owner/group/other）都能执行这个脚本。u+x 只给所有者加，g+x 给同组加，o+x 给其他人加。',
      },
      {
        title: '数字法：755 和 644',
        cmd: 'chmod 755 myapp && ls -la myapp',
        output: '-rwxr-xr-x 1 tu staff 1024 Jan 15 14:35 myapp',
        explain: 'r=4, w=2, x=1。755 = rwx(4+2+1) r-x(4+1) r-x(4+1)。7 给所有者（全权限），5 给同组和其他人（读+执行）。644 = rw- r-- r--（所有者可读写，其他人只读）。文件常用 644，目录常用 755。',
      },
      {
        title: '改所有者：chown',
        cmd: 'sudo chown www-data:www-data /var/www/html/index.html',
        output: '（无输出，成功）',
        explain: '把文件的所有者和组都改成 www-data（Nginx/Apache 的运行用户）。这样 Web 服务器才能写入这个文件。-R 递归改目录：chown -R www-data:www-data /var/www/。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Permission denied',
        cause: '你对这个文件/目录没有所需的权限。读文件需要 r，写文件需要 w，执行文件需要 x，进入目录需要 x。',
        fix: 'ls -la 看权限 → 确定你需要什么权限 → chmod 加权限或 chown 改所有者。如果是系统文件，用 sudo。',
      },
      {
        symptom: 'chmod 777 之后还是 Permission denied',
        cause: '父目录没有 x 权限。进入目录需要 x，即使文件有 777 权限，如果你无法 cd 到它所在的目录，也访问不了。',
        fix: '检查路径上每个目录的权限：namei -l /path/to/file 看每层的权限。',
      },
      {
        symptom: '脚本 chmod +x 后执行报 "bad interpreter"',
        cause: '脚本第一行（shebang）指定的解释器不存在。比如 #!/bin/bash 但系统没装 bash，或者 #!/usr/bin/env python 但 python 不在 PATH 里。',
        fix: 'head -1 script.sh 看 shebang → which python3 确认解释器路径 → 改成正确路径。或者用 bash script.sh 直接执行。',
      },
      {
        symptom: 'sudo 修改的文件普通用户看不到',
        cause: 'sudo 创建的文件所有者是 root，权限通常是 644（其他人只能读）。如果权限是 600（只有 root 读写），普通用户连读都不行。',
        fix: 'sudo chmod 644 /path/to/file 加读权限。或者 sudo chown youruser:yourgroup /path/to/file 改成你的。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个文件，设置权限为：所有者可读写执行，同组可读执行，其他人什么都不能做',
        hint: '先算数字：rwx=7, r-x=5, ---=0',
        answer: 'touch myfile.txt\nchmod 750 myfile.txt\nls -la myfile.txt\n# 输出应该是：-rwxr-x--- 1 tu staff ...',
      },
      {
        level: '进阶',
        task: '一个目录 /shared，要求：组成员都能在里面创建文件，但只能删自己创建的文件（不能删别人的）',
        hint: '目录的权限 + sticky bit。sticky bit 用 chmod +t 设置。',
        answer: '# 1. 设置目录权限：组成员可读写进入\nsudo chmod 770 /shared\nsudo chown :devteam /shared\n\n# 2. 加 sticky bit：只能删自己的文件\nsudo chmod +t /shared\n\n# 结果：drwxrwx--T (T 表示 sticky bit)\n# /tmp 就是这个原理：所有人能写但只能删自己的',
      },
      {
        level: '挑战',
        task: '写一个脚本，找出当前目录下所有权限为 777 的文件（安全隐患），把它们改成 755',
        hint: 'find -perm 可以按权限搜索。配合 xargs 或 -exec 执行 chmod',
        answer: '#!/bin/bash\n# 找出 777 文件并改成 755\nfind . -type f -perm 777 -print | while read file; do\n  echo "修复: $file (777 → 755)"\n  chmod 755 "$file"\ndone\n\n# 一行版本：\nfind . -type f -perm 777 -exec chmod 755 {} +\n\n# 更安全：先看不改\nfind . -type f -perm 777 -ls',
      },
    ],
    prereqs: [
      '用户与组 — 理解 owner/group/other 是谁',
      'ls -la — 看权限字符串',
    ],
    nextSteps: [
      'umask — 控制新建文件的默认权限',
      'ACL — 给特定用户设独立权限（比 chmod 更灵活）',
      'setuid/setgid — 特殊权限位（如 /usr/bin/passwd 为什么能改 root 的文件）',
    ],
  },

  // ── stdin/stdout/stderr ──
  "t3fxSgCgtxuMtHjclPHA6": {
    mentalModel: '每个 Linux 进程启动时自动打开三条"水管"：stdin（标准输入，默认连键盘）、stdout（标准输出，默认连屏幕）、stderr（标准错误，也默认连屏幕但独立于 stdout）。重定向和管道就是在改这些水管的连接方向。',
    handsOn: [
      {
        title: '看三条流的文件描述符',
        cmd: 'ls -la /proc/self/fd/0 /proc/self/fd/1 /proc/self/fd/2',
        output: 'lrwx------ ... /proc/self/fd/0 -> /dev/pts/0\nlrwx------ ... /proc/self/fd/1 -> /dev/pts/0\nlrwx------ ... /proc/self/fd/2 -> /dev/pts/0',
        explain: 'fd 0 = stdin, fd 1 = stdout, fd 2 = stderr。三个都指向你的终端（/dev/pts/0）。这就是为什么默认情况下输入从键盘来，输出和错误都显示在屏幕上。',
      },
      {
        title: '> 重定向 stdout 到文件',
        cmd: 'ls /etc > output.txt 2>/dev/null && wc -l output.txt',
        output: '247 output.txt',
        explain: '> output.txt 把 stdout 从屏幕改到文件。2>/dev/null 把 stderr 丢进"黑洞"（丢弃）。ls /etc 的 247 行文件名进了文件，你看不见它们但 wc -l 能数出来。',
      },
      {
        title: '2>&1 合并 stderr 到 stdout',
        cmd: 'ls /存在 /不存在 > all.txt 2>&1 && cat all.txt',
        output: 'ls: cannot access \'/不存在\': No such file or directory\n/存在:\nfile1.txt\nfile2.txt',
        explain: 'ls 同时处理两个路径：/存在（成功 → stdout）和 /不存在（失败 → stderr）。2>&1 把 stderr 合并到 stdout，这样 > all.txt 能同时捕获正常输出和错误信息。',
      },
      {
        title: '管道只传 stdout',
        cmd: 'ls /存在 /不存在 2>/dev/null | wc -l',
        output: '3',
        explain: '管道 | 只传 stdout。stderr（错误信息）不经过管道，直接显示在屏幕上。这里用 2>/dev/null 丢弃 stderr，只把正常输出传给 wc -l 计数。如果不加 2>/dev/null，错误信息会直接打到屏幕上。',
      },
    ],
    diagnosis: [
      {
        symptom: 'command > file 后屏幕上还是有输出',
        cause: '那些输出走的是 stderr，不是 stdout。> 只重定向 stdout。',
        fix: '用 &> file 或 > file 2>&1 同时重定向 stdout 和 stderr。',
      },
      {
        symptom: 'command 2>&1 > file 没有把错误写进文件',
        cause: '重定向从左到右解析。2>&1 把 stderr 指向 stdout 当时的位置（屏幕），然后 > file 把 stdout 改到文件——但 stderr 仍然指向屏幕。',
        fix: '调换顺序：> file 2>&1（先改 stdout 到文件，再把 stderr 指向 stdout）。或者用 &> file（Bash 简写）。',
      },
      {
        symptom: 'cat file.txt | command 不工作',
        cause: '有些命令不读 stdin（比如 ls、find），它们只接受命令行参数。',
        fix: '用 xargs 把 stdin 转成参数：cat files.txt | xargs ls。或者用 < file.txt 重定向 stdin：command < file.txt。',
      },
      {
        symptom: '脚本里 echo 的输出没有被管道捕获',
        cause: 'echo 默认写 stdout。但如果脚本里有 echo ... >&2（写到 stderr），管道不会捕获。',
        fix: '检查脚本里是否有 >&2。如果是调试信息写到 stderr 是故意的，用 2>&1 合并。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '把 ls /etc 的输出存到文件，但把错误信息（如果有）显示在屏幕上',
        hint: '> 只重定向 stdout，stderr 默认就在屏幕上',
        answer: 'ls /etc > output.txt\n\n# 屏幕上不会看到正常输出（进了文件）\n# 如果有错误（比如权限不够），会显示在屏幕上\n# 验证：cat output.txt',
      },
      {
        level: '进阶',
        task: '运行一个命令，把 stdout 存到 success.log，把 stderr 存到 error.log',
        hint: '分别重定向：1> 和 2>（1 可以省略）',
        answer: 'command > success.log 2> error.log\n\n# 示例：\nls /存在 /不存在 > success.log 2> error.log\n\ncat success.log  # 正常输出\ncat error.log    # 错误信息',
      },
      {
        level: '挑战',
        task: '写一条命令：执行一个脚本，把输出存到日志文件，同时在屏幕上实时显示（边看边存）',
        hint: 'tee 命令可以把数据分流——一路到文件，一路到 stdout（屏幕）',
        answer: './deploy.sh 2>&1 | tee deploy.log\n\n# 2>&1 合并 stderr 到 stdout\n# tee 把合并后的流分成两路：\n#   → 写到 deploy.log\n#   → 继续到 stdout（显示在屏幕）\n\n# 追加模式（不覆盖旧日志）：\n./deploy.sh 2>&1 | tee -a deploy.log',
      },
    ],
    prereqs: [
      '基础命令 — ls、cat、echo 的用法',
    ],
    nextSteps: [
      '管道 | — stdin/stdout 的串联',
      '重定向 > >> < — 更细粒度的流控制',
      '/dev/null — 丢弃不需要的输出',
    ],
  },
};
