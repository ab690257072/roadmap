import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_28: Record<string, DeepTutorial> = {
  "Rib7h9lh_ndiXkwNbftz_": {
    mentalModel: 'fork() 是 Unix 创建新进程的唯一方式。父进程 fork 出子进程（复制），子进程 exec 替换成新程序。你看到的"启动程序"底层是这两步。',
    handsOn: [
      { title: '看进程的父子关系', cmd: 'ps -eo pid,ppid,comm | head -15', output: ' PID  PPID COMMAND\n   1     0 systemd\n   2     0 kthreadd\n 567     1 sshd\n1234   567 bash\n5678  1234 ps', explain: 'PID 是进程号，PPID 是父进程号。systemd (PID 1) 是所有进程的祖先。sshd (567) fork 出 bash (1234)，bash fork 出 ps (5678)。' },
      { title: '看进程树', cmd: 'pstree -p $$', output: 'bash(1234)─┬─pstree(5678)\n           ├─vim(5679)\n           └─python3(5680)', explain: 'pstree 显示进程树。$$ 是当前 shell 的 PID。可以看到 bash fork 出了 pstree、vim、python3 三个子进程。' },
      { title: 'strace 看 fork 系统调用', cmd: 'strace -e fork,execve bash -c "echo hello"', output: 'fork() = 5678\n[pid 5678] execve("/bin/echo", ["echo", "hello"], ...) = 0\nhello', explain: 'strace 追踪系统调用。bash fork 出子进程 (PID 5678)，子进程 execve 执行 /bin/echo。这就是"运行命令"的底层过程。' },
      { title: '看孤儿进程', cmd: 'bash -c "sleep 100 &" && sleep 1 && ps -eo pid,ppid,comm | grep sleep', output: '5678     1 sleep', explain: '父进程（bash -c）退出后，子进程（sleep）变成孤儿，被 init (PID 1) 接管。PPID 变成了 1。' },
    ],
    diagnosis: [
      { symptom: '僵尸进程（Z 状态）越来越多', cause: '子进程退出但父进程没 wait() 回收。僵尸进程不占资源但占 PID（系统 PID 有限）。', fix: '杀掉父进程让 init 接管并回收。或者修复父进程的代码，让它正确 wait() 子进程。' },
      { symptom: 'fork 失败 "Cannot allocate memory"', cause: '进程数达到系统限制（/proc/sys/kernel/pid_max）或用户限制（ulimit -u）。', fix: '检查进程数：ps -e | wc -l。临时增加：sudo sysctl -w kernel.pid_max=65536。永久改 /etc/sysctl.conf。' },
      { symptom: '子进程继承了父进程的文件描述符', cause: 'fork 会复制所有文件描述符。子进程 exec 后仍然持有这些 fd（除非设了 FD_CLOEXEC）。', fix: '子进程 exec 前关闭不需要的 fd。或者在 open 时加 O_CLOEXEC 标志。' },
    ],
    exercises: [
      { level: '基础', task: '用 ps 画出当前 shell 的进程树', hint: 'pstree -p $$', answer: 'pstree -p $$\n\n# 或者用 ps：\nps -eo pid,ppid,comm --forest | grep -A 20 $$' },
      { level: '进阶', task: '写一个 C 程序，fork 出子进程，父子进程分别打印不同信息', hint: 'fork() 返回值：父进程得到子 PID，子进程得到 0', answer: '#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    pid_t pid = fork();\n    \n    if (pid == 0) {\n        // 子进程\n        printf("我是子进程, PID: %d, 父 PID: %d\\n", getpid(), getppid());\n    } else if (pid > 0) {\n        // 父进程\n        printf("我是父进程, PID: %d, 子 PID: %d\\n", getpid(), pid);\n        wait(NULL);  // 等待子进程退出\n    } else {\n        perror("fork 失败");\n    }\n    \n    return 0;\n}' },
      { level: '挑战', task: '写一个"进程监控器"，找出所有孤儿进程（PPID=1 但不是 systemd 直接管理的）', hint: 'ps -eo pid,ppid,comm + awk 过滤 PPID=1', answer: '#!/bin/bash\necho "=== 孤儿进程（PPID=1）==="\nps -eo pid,ppid,user,comm | awk \'$2 == 1 && $1 != 1 {\n  printf "PID: %-6s  用户: %-10s  命令: %s\\n", $1, $3, $4\n}\'\n\necho ""\necho "=== 非系统用户的孤儿进程 ==="\nps -eo pid,ppid,user,comm | awk \'$2 == 1 && $3 != "root" && $1 != 1 {\n  printf "PID: %-6s  用户: %-10s  命令: %s\\n", $1, $3, $4\n}\' | head -10' },
    ],
    prereqs: ['ps — 查看进程', '进程信号 — SIGTERM/SIGKILL'],
    nextSteps: ['exec — 替换当前进程', 'daemon — 后台守护进程的创建'],
  },
};
