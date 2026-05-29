import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_3: Record<string, DeepTutorial> = {
  "yqRwmcZThjQuqh2ao0dWK": {
    mentalModel: 'Nano 是 Vim 的"友好替代品"：没有模式切换，打开就能打字，底部始终显示快捷键提示。适合快速改一两行配置文件。',
    handsOn: [
      {
        title: '打开文件并编辑',
        cmd: 'nano /tmp/test.txt\n# 直接打字：Hello Nano\n# 底部显示快捷键菜单',
        output: '^G Get Help  ^O Write Out  ^W Where Is  ^K Cut Text  ^X Exit',
        explain: 'Nano 打开后直接就能打字——不需要像 Vim 那样切换模式。底部两行是快捷键菜单，^ 表示 Ctrl 键。^O 是 Ctrl+O（保存），^X 是 Ctrl+X（退出）。',
      },
      {
        title: '保存文件',
        cmd: '# 按 Ctrl+O\n# 底部显示文件名，按 Enter 确认\n# 底部显示 "Wrote 1 line"',
        output: '[ Wrote 1 line ]',
        explain: 'Ctrl+O 触发保存，Nano 会在底部显示文件名让你确认。直接 Enter 就是覆盖保存。如果你改了文件名再 Enter，就是"另存为"。保存后你还在编辑器里，需要 Ctrl+X 退出。',
      },
      {
        title: '搜索内容',
        cmd: '# 按 Ctrl+W\n# 输入关键词：error\n# 按 Enter',
        output: '（光标跳到匹配位置）',
        explain: 'Ctrl+W 搜索关键词。找到后光标跳到匹配位置。再按 Ctrl+W 跳到下一个匹配。在大配置文件里找特定选项时非常有用。',
      },
      {
        title: '剪切和粘贴',
        cmd: '# 光标移到某行，按 Ctrl+K（剪切整行）\n# 移到目标位置，按 Ctrl+U（粘贴）',
        output: '（行被移动到新位置）',
        explain: 'Ctrl+K 剪切当前行（Cut），Ctrl+U 粘贴（Uncut）。可以连续 Ctrl+K 剪切多行，然后 Ctrl+U 一次性粘贴。这比 Vim 的 dd/p 更直观。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Ctrl+O 保存时改了文件名',
        cause: 'Ctrl+O 后你可以编辑文件名。如果不小心改了，就变成了"另存为"。',
        fix: '保存时不要改文件名，直接 Enter。如果已经改了，记住新文件名，退出后 rm 旧文件 + mv 新文件为旧文件名。',
      },
      {
        symptom: 'Nano 没装在系统上',
        cause: '某些最小化安装的 Linux（如 Alpine、某些 Docker 镜像）没有 nano。',
        fix: 'apt install nano（Debian/Ubuntu）或 yum install nano（RHEL/CentOS）。Docker 里用 apk add nano（Alpine）。',
      },
      {
        symptom: 'Ctrl+S 卡住终端',
        cause: 'Ctrl+S 是 XOFF（暂停输出），不是保存。和 Vim 一样的终端流控制问题。',
        fix: '按 Ctrl+Q 恢复。永久禁用：stty -ixon 加到 ~/.bashrc。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Nano 创建一个文件 /tmp/nano-test.txt，写入 3 行内容，保存退出，再打开确认',
        hint: 'nano file → 打字 → Ctrl+O → Enter → Ctrl+X',
        answer: 'nano /tmp/nano-test.txt\nLine 1\nLine 2\nLine 3\n# Ctrl+O → Enter → Ctrl+X\nnano /tmp/nano-test.txt  # 重新打开确认\n# Ctrl+X 退出',
      },
      {
        level: '进阶',
        task: '打开 /etc/hosts 的副本，搜索包含 "localhost" 的行，在它下面加一行 "127.0.0.1 myapp.local"',
        hint: 'cp /etc/hosts /tmp/hosts → nano /tmp/hosts → Ctrl+W 搜索',
        answer: 'cp /etc/hosts /tmp/hosts\nnano /tmp/hosts\n# Ctrl+W → localhost → Enter\n# 移到该行末尾，按 End 键，Enter 开新行\n# 输入：127.0.0.1 myapp.local\n# Ctrl+O → Enter → Ctrl+X',
      },
      {
        level: '挑战',
        task: '用 Nano 编辑一个脚本，把第 5-10 行移到文件末尾',
        hint: 'Ctrl+K 连续剪切多行，Ctrl+End 跳到末尾，Ctrl+U 粘贴',
        answer: 'nano /tmp/script.sh\n# 光标移到第 5 行\n# 按 Ctrl+K 6 次（剪切第 5-10 行）\n# Alt+\\ 或 Ctrl+Home 跳到文件开头确认\n# Alt+/ 或 Ctrl+End 跳到文件末尾\n# Ctrl+U 粘贴\n# Ctrl+O → Enter → Ctrl+X',
      },
    ],
    prereqs: ['基础命令 — 能用终端'],
    nextSteps: ['Vim — 更强大但学习曲线陡', '编辑文件流程 — 备份 → 编辑 → diff → 验证'],
  },

  "HGmeYvRf7_XusZl_K4x9k": {
    mentalModel: '服务器改配置的完整流程是：备份 → 编辑 → diff 对比 → 语法检查 → reload。跳过任何一步都可能出事。',
    handsOn: [
      {
        title: '第一步：备份',
        cmd: 'cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak.$(date +%Y%m%d)',
        output: '（无输出，成功）',
        explain: '改配置文件前永远先备份。加日期戳方便追溯。如果改坏了，cp 备份文件回来就行。用 cp -p 保留权限和时间戳。',
      },
      {
        title: '第二步：编辑',
        cmd: 'nano /etc/nginx/nginx.conf\n# 改 worker_connections 1024 → 4096',
        output: '（编辑界面）',
        explain: '选择你熟悉的编辑器。nano 适合改一两行，vim 适合大段编辑。改完保存前，在编辑器里先通读一遍确认语法正确。',
      },
      {
        title: '第三步：diff 对比变更',
        cmd: 'diff /etc/nginx/nginx.conf.bak.* /etc/nginx/nginx.conf',
        output: '< worker_connections 1024;\n---\n> worker_connections 4096;',
        explain: 'diff 显示备份和当前的差异。< 是旧文件，> 是新文件。只看 + 和 - 行，确认只有你打算改的部分变了。如果多了意外改动，说明编辑时可能误操作了。',
      },
      {
        title: '第四步：语法检查 + reload',
        cmd: 'nginx -t && systemctl reload nginx',
        output: 'nginx: configuration file /etc/nginx/nginx.conf test is successful',
        explain: 'nginx -t 检查配置语法。通过后才 reload。reload 只重新加载配置（不断连接），restart 完全停止再启动（会断开所有连接）。能用 reload 就别用 restart。',
      },
    ],
    diagnosis: [
      {
        symptom: 'reload 后服务挂了',
        cause: '配置文件语法错误或逻辑错误。nginx -t 没跑或者跑了但忽略了警告。',
        fix: '用备份文件恢复：cp /etc/nginx/nginx.conf.bak.* /etc/nginx/nginx.conf && systemctl reload nginx。然后仔细检查修改内容。',
      },
      {
        symptom: 'diff 显示很多意外改动',
        cause: '编辑器可能改了缩进、换行符（CRLF vs LF）、或不小心删了内容。',
        fix: '从备份恢复，用更小心地编辑。用 diff -w 忽略空白变化，diff --color 彩色显示。',
      },
      {
        symptom: '改了配置但没生效',
        cause: '忘了 reload/restart 服务。配置文件改了但服务还在用旧配置（内存中的）。',
        fix: 'systemctl reload servicename。或者某些服务需要 SIGHUP：kill -HUP $(cat /var/run/service.pid)。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '复制 /etc/hosts 到 /tmp/hosts.bak，编辑 /tmp/hosts 加一行，diff 对比，确认只改了一行',
        hint: 'cp → nano → diff',
        answer: 'cp /etc/hosts /tmp/hosts.bak\ncp /etc/hosts /tmp/hosts\nnano /tmp/hosts\n# 加一行：127.0.0.1 test.local\ndiff /tmp/hosts.bak /tmp/hosts\n# 应该只看到一行 > 127.0.0.1 test.local',
      },
      {
        level: '进阶',
        task: '写一个 shell 函数 safe-edit，接受文件名参数，自动备份、打开编辑器、编辑后 diff 确认',
        hint: '函数接收 $1，cp 备份，$EDITOR 打开，diff 对比',
        answer: 'safe-edit() {\n  local file=$1\n  local backup="${file}.bak.$(date +%Y%m%d%H%M%S)"\n  cp -p "$file" "$backup"\n  ${EDITOR:-nano} "$file"\n  echo "=== 变更内容 ==="\n  diff "$backup" "$file"\n  echo "=== 如果满意请手动 reload 服务 ==="\n}',
      },
      {
        level: '挑战',
        task: '写一个自动化的"改配置+检查+reload"脚本，支持 nginx 和 sshd 两个服务',
        hint: 'case 语句根据服务名选择不同的检查命令（nginx -t / sshd -t）和 reload 命令',
        answer: '#!/bin/bash\nedit-service() {\n  local service=$1\n  local config=$2\n  local backup="${config}.bak.$(date +%Y%m%d)"\n  cp -p "$config" "$backup"\n  ${EDITOR:-nano} "$config"\n  case "$service" in\n    nginx) nginx -t || { cp "$backup" "$config"; echo "语法错误，已恢复"; return 1; } ;;\n    sshd) sshd -t || { cp "$backup" "$config"; echo "语法错误，已恢复"; return 1; } ;;\n    *) echo "未知服务"; return 1 ;;\n  esac\n  systemctl reload "$service"\n  echo "$service 已 reload"\n}',
      },
    ],
    prereqs: ['Vim 或 Nano — 会用终端编辑器', 'cp/mv — 文件操作', 'diff — 对比文件'],
    nextSteps: ['systemd 服务管理 — systemctl reload/restart', '日志查看 — journalctl'],
  },

  "3fzuXKH7az_LVnmnoXB1p": {
    mentalModel: 'Linux 目录不是随便放的——FHS（Filesystem Hierarchy Standard）规定了每个目录放什么。知道标准就能快速找到文件。',
    handsOn: [
      {
        title: '看根目录结构',
        cmd: 'ls -la / | grep "^d"',
        output: 'drwxr-xr-x  18 root root  4096 Jan 10  /bin\ndrwxr-xr-x   4 root root  4096 Jan 10  /boot\ndrwxr-xr-x   5 root root   360 Jan 15  /dev\ndrwxr-xr-x 132 root root 12288 Jan 15  /etc\ndrwxr-xr-x   3 root root  4096 Jan 10  /home',
        explain: '/bin 放基本命令，/boot 放启动文件，/dev 放设备，/etc 放配置，/home 放用户文件。每个目录有特定用途。',
      },
      {
        title: '配置文件在 /etc',
        cmd: 'ls /etc/nginx/ /etc/ssh/ /etc/mysql/ 2>/dev/null | head -15',
        output: '/etc/nginx/:\nnginx.conf\nsites-available\nsites-enabled\n\n/etc/ssh/:\nsshd_config\nssh_config',
        explain: '服务的配置文件都在 /etc/服务名/ 下。nginx.conf、sshd_config、my.cnf 都在这里。修改需要 sudo。',
      },
      {
        title: '日志在 /var/log',
        cmd: 'ls -lhS /var/log/ | head -10',
        output: '-rw-r----- 1 syslog adm  45M Jan 15 syslog\n-rw-r----- 1 syslog adm  12M Jan 15 auth.log\ndrwxr-xr-x 2 root   root 4.0K Jan 15 nginx',
        explain: '/var/log 存系统和应用日志。-lhS 按大小排序。日志文件会越来越大，需要 logrotate 自动轮转。',
      },
      {
        title: '用户程序在 /usr',
        cmd: 'which git && which python3 && which nginx',
        output: '/usr/bin/git\n/usr/bin/python3\n/usr/sbin/nginx',
        explain: '/usr/bin 放用户命令（git、python3），/usr/sbin 放系统管理员命令（nginx）。apt/yum 安装的软件放这里。',
      },
    ],
    diagnosis: [
      {
        symptom: '找不到某个服务的配置文件',
        cause: '不知道 FHS 标准，在错误的位置找。',
        fix: '配置文件通常在 /etc/服务名/。或者用 find / -name "nginx.conf" 2>/dev/null 全局搜索。',
      },
      {
        symptom: '/tmp 里的文件消失了',
        cause: '/tmp 是临时目录，系统会定期清理（通常重启后清空，或者 10 天未访问的文件）。',
        fix: '重要数据不要放 /tmp。用 ~/tmp 或 /var/tmp（保留更久）。',
      },
      {
        symptom: '磁盘满了但不知道什么占了空间',
        cause: '不知道哪些目录最大。/var/log 和 /home 是常见的空间大户。',
        fix: 'du -sh /* | sort -rh | head -10 看根目录下哪些最大。du -sh /var/log/* | sort -rh 看日志里哪些最大。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 /etc、/var/log、/usr/bin 下各 5 个文件，理解它们分别放什么',
        hint: 'ls 每个目录',
        answer: 'echo "=== /etc（配置）===" && ls /etc | head -5\necho "=== /var/log（日志）===" && ls /var/log | head -5\necho "=== /usr/bin（命令）===" && ls /usr/bin | head -5',
      },
      {
        level: '进阶',
        task: '找出 /etc 下所有 .conf 文件，按修改时间从新到旧排列',
        hint: 'find + ls -lt 或 find -printf',
        answer: 'find /etc -name "*.conf" -exec ls -lt {} + | head -20\n\n# 或用 -printf 更精确：\nfind /etc -name "*.conf" -printf "%T@ %p\\n" | sort -rn | head -20 | cut -d" " -f2-',
      },
      {
        level: '挑战',
        task: '统计 /usr/bin 下所有命令的总大小，和 /usr/local/bin 对比，看哪个更大',
        hint: 'du -sh 目录',
        answer: 'echo "=== /usr/bin ===" && du -sh /usr/bin\necho "=== /usr/local/bin ===" && du -sh /usr/local/bin 2>/dev/null || echo "/usr/local/bin 不存在"\n\n# /usr/bin 通常更大（系统包管理器安装的程序）\n# /usr/local/bin 放手动编译安装的程序',
      },
    ],
    prereqs: ['目录导航 — pwd/cd/ls'],
    nextSteps: ['文件权限 — chmod/chown', '包管理 — apt/yum 安装软件'],
  },
};
