import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_20: Record<string, DeepTutorial> = {
  "g6n7f1Qi0BPr_BGvisWuz": {
    mentalModel: 'Linux 是多用户系统。useradd 创建用户，passwd 设密码，usermod 修改属性，userdel 删除用户。/etc/passwd 存用户列表。',
    handsOn: [
      { title: '创建用户', cmd: 'sudo useradd -m -s /bin/bash newuser && sudo passwd newuser', output: 'Enter new UNIX password:\nRetype new UNIX password:\npasswd: password updated successfully', explain: 'useradd -m 创建家目录，-s /bin/bash 指定 shell。passwd 设置密码。新用户创建后需要设密码才能登录。' },
      { title: '查看用户信息', cmd: 'id newuser && cat /etc/passwd | grep newuser', output: 'uid=1001(newuser) gid=1001(newuser) groups=1001(newuser)\nnewuser:x:1001:1001::/home/newuser:/bin/bash', explain: 'id 显示 UID、GID、所属组。/etc/passwd 格式：用户名:密码占位:UID:GID:注释:家目录:shell。密码实际存在 /etc/shadow（只有 root 能读）。' },
      { title: '修改用户', cmd: 'sudo usermod -aG docker newuser && groups newuser', output: 'newuser : newuser docker', explain: 'usermod -aG 把用户加到组（-a append 追加，不加 -a 会覆盖现有组）。改完组后用户需要重新登录才生效。' },
      { title: '删除用户', cmd: 'sudo userdel -r newuser && ls /home/newuser 2>&1', output: 'ls: cannot access \'/home/newuser\': No such file or directory', explain: 'userdel 删除用户。-r 同时删除家目录和邮件池。不加 -r 只删账号不删文件。删除前先确认用户没有正在运行的进程。' },
    ],
    diagnosis: [
      { symptom: 'useradd 报 "user exists"', cause: '用户名已存在。/etc/passwd 里已经有这个用户。', fix: '换个用户名。或者 userdel 删掉旧用户再创建。' },
      { symptom: 'usermod -G docker 后用户的其他组没了', cause: '-G 设置附加组（覆盖），不是追加。没加 -a（append）。', fix: 'usermod -aG docker user 加 -a 追加。或者 usermod -G group1,group2,docker user 一次性设所有组。' },
      { symptom: '删除用户报 "user is currently used by process"', cause: '用户有正在运行的进程。userdel 不会杀进程。', fix: '先杀进程：pkill -u username。或者 userdel -f 强制删除（不推荐）。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个用户 devuser，加到 sudo 和 docker 组，设密码', hint: 'useradd + usermod -aG + passwd', answer: 'sudo useradd -m -s /bin/bash devuser\nsudo passwd devuser\nsudo usermod -aG sudo devuser\nsudo usermod -aG docker devuser\ngroups devuser' },
      { level: '进阶', task: '列出所有使用 /bin/bash 的用户', hint: 'grep "/bin/bash" /etc/passwd + cut', answer: 'grep "/bin/bash" /etc/passwd | cut -d: -f1\n\n# 或者用 awk：\nawk -F: \'$7 == "/bin/bash" {print $1}\' /etc/passwd' },
      { level: '挑战', task: '写一个"用户管理脚本"，支持 add/del/list/info 操作', hint: 'case 语句 + useradd/userdel/getent', answer: '#!/bin/bash\ncase "$1" in\n  add)\n    sudo useradd -m -s /bin/bash "$2"\n    sudo passwd "$2"\n    echo "用户 $2 已创建"\n    ;;\n  del)\n    read -p "确认删除用户 $2 及其家目录？(y/n) " confirm\n    if [ "$confirm" = "y" ]; then\n      sudo userdel -r "$2"\n      echo "用户 $2 已删除"\n    fi\n    ;;\n  list)\n    echo "=== 使用 /bin/bash 的用户 ==="\n    awk -F: \'$7 == "/bin/bash" {print $1}\' /etc/passwd\n    ;;\n  info)\n    getent passwd "$2"\n    id "$2"\n    echo "家目录: $(eval echo ~$2)"\n    echo "最近登录: $(lastlog -u $2 | tail -1)"\n    ;;\n  *)\n    echo "用法: $0 {add|del|list|info} [username]"\n    ;;\nesac' },
    ],
    prereqs: ['sudo — 需要 root 权限管理用户', '文件权限 — 理解 /etc/passwd 和 /etc/shadow'],
    nextSteps: ['组管理 — groupadd/groupmod', 'sudoers — 配置 sudo 权限'],
  },

  "lf3_CRyOI2ZXGzz5ff451": {
    mentalModel: 'ps 看进程列表，pgrep 按名查 PID，pidof 查进程的 PID，lsof -i :port 查端口对应的进程。',
    handsOn: [
      { title: '按名查 PID', cmd: 'pgrep -la nginx', output: '5678 nginx: master process /usr/sbin/nginx\n5679 nginx: worker process', explain: 'pgrep nginx 返回 PID 列表。-l 显示进程名。-a 显示完整命令行。-u user 只看某用户的进程。' },
      { title: '查端口占用', cmd: 'sudo lsof -i :80', output: 'COMMAND  PID     USER   FD   TYPE DEVICE SIZE/OFF NODE NAME\nnginx   5678     root   6u  IPv4  12345      0t0  TCP *:http (LISTEN)', explain: 'lsof -i :port 查端口被谁占用。需要 sudo 才能看到其他用户的进程。ss -tlnp 是更现代的替代。' },
      { title: '看进程树', cmd: 'pstree -p $(pgrep -o nginx)', output: 'nginx(5678)─┬─nginx(5679)\n            └─nginx(5680)', explain: 'pstree -p 显示进程树（父子关系）。一个 nginx master 下挂多个 worker 一目了然。fork 出来的子进程缩进显示。' },
      { title: '按条件过滤', cmd: 'ps aux | awk \'$3 > 50.0 {print $2, $3, $11}\'', output: '1234 85.3 /usr/bin/java\n5678 62.1 /usr/bin/python3', explain: 'awk 过滤 CPU > 50% 的进程。$2 PID，$3 %CPU，$11 COMMAND。或者用 ps aux --sort=-%cpu | head -10。' },
    ],
    diagnosis: [
      { symptom: 'ps aux | grep nginx 把 grep 自身也显示出来', cause: 'grep nginx 匹配到了 "grep nginx" 这个进程。', fix: '加 grep -v grep 排除。或者用 pgrep nginx 直接按名查。或者用 [n]ginx 技巧（正则不匹配自身）。' },
      { symptom: 'lsof -i :80 什么都没显示', cause: '可能没加 sudo（看不到其他用户的进程），或者端口没被占用。', fix: 'sudo lsof -i :80。或者用 ss -tlnp | grep :80。' },
      { symptom: 'ps 输出太长看不清', cause: '进程太多，输出刷屏。', fix: 'ps aux | less 翻页。或者 ps aux | grep keyword 过滤。或者用 htop（交互式）。' },
    ],
    exercises: [
      { level: '基础', task: '找出占用 8080 端口的进程 PID', hint: 'lsof -i :8080 或 ss -tlnp | grep 8080', answer: 'sudo lsof -i :8080 | grep LISTEN\n\n# 或者：\nss -tlnp | grep :8080' },
      { level: '进阶', task: '写一个函数，接受进程名参数，显示该进程的所有实例的 PID、CPU、内存', hint: 'pgrep + ps -p', answer: 'procinfo() {\n  local name=$1\n  local pids=$(pgrep -d "," "$name")\n  if [ -z "$pids" ]; then\n    echo "未找到进程: $name"\n    return 1\n  fi\n  echo "=== $name ==="\n  ps -p "$pids" -o pid,pcpu,pmem,rss,cmd\n}' },
      { level: '挑战', task: '写一个"端口扫描器"，列出本机所有监听的端口和对应进程', hint: 'ss -tlnp + awk 解析', answer: '#!/bin/bash\necho "=== 本机监听端口 ==="\nss -tlnp | awk \'NR>1 {\n  split($4, addr, ":");\n  port = addr[length(addr)];\n  pid = $6;\n  gsub(/.*pid=/, "", pid);\n  gsub(/,.*/, "", pid);\n  printf "端口: %-6s  PID: %-8s  进程: %s\\n", port, pid, $7\n}\' | sort -n' },
    ],
    prereqs: ['ps — 查看进程列表', 'grep/awk — 文本过滤'],
    nextSteps: ['netstat/ss — 网络连接查看', 'strace — 进程系统调用追踪'],
  },
};
