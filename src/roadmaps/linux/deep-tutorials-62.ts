import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_62: Record<string, DeepTutorial> = {
  "rOGnHbGIr3xPCFdpkqoeK": {
    mentalModel: '调试（Debugging）是找出程序为什么行为不符合预期的过程——像侦探破案，收集线索（日志、状态、输出），推理原因，验证假设。',
    handsOn: [
      { title: 'strace 追踪系统调用', cmd: 'strace ls /tmp 2>&1 | head -20', output: 'execve("/bin/ls", ["ls", "/tmp"], 0x7ffc8e8e8e80 /* 30 vars */) = 0\nbrk(NULL)                               = 0x55a3c3c3c000\naccess("/etc/ld.so.preload", R_OK)      = -1 ENOENT (No such file or directory)', explain: 'strace 追踪程序的所有系统调用。execve 是执行程序，brk 是分配内存，access 是检查文件权限。返回值 -1 表示失败。' },
      { title: 'ltrace 追踪库函数', cmd: 'ltrace ls /tmp 2>&1 | head -20', output: '__libc_start_main(0x402860, 2, 0x7ffc8e8e8e88, 0x4028d0 <unfinished ...>\nsetlocale(LC_ALL, "")                                            = "en_US.UTF-8"\nbindtextdomain("coreutils", "/usr/share/locale")                = "/usr/share/locale"', explain: 'ltrace 追踪库函数调用（比系统调用更高层）。适合调试 C/C++ 程序。' },
      { title: 'gdb 交互式调试', cmd: 'gdb ./program\n(gdb) break main\n(gdb) run\n(gdb) print variable\n(gdb) next\n(gdb) continue', output: 'Breakpoint 1, main () at program.c:5\n5\t    int x = 10;\n$1 = 10\n6\t    int y = 20;', explain: 'gdb 是 GNU 调试器。break 设断点，run 运行，print 查看变量，next 单步执行，continue 继续。' },
      { title: 'valgrind 内存检查', cmd: 'valgrind --leak-check=full ./program', output: '==1234== HEAP SUMMARY:\n==1234==     in use at exit: 0 bytes in 0 blocks\n==1234==   total heap usage: 10 allocs, 10 frees, 1,024 bytes allocated\n==1234== \n==1234== All heap blocks were freed -- no leaks are possible', explain: 'valgrind 检查内存泄漏、越界访问、未初始化变量等。--leak-check=full 详细检查内存泄漏。' },
    ],
    diagnosis: [
      { symptom: '程序崩溃（Segmentation fault）', cause: '访问了非法内存地址（空指针、越界、已释放内存）。', fix: '用 gdb 运行：gdb ./program，然后 run，崩溃时 backtrace 看调用栈。或者用 valgrind 检查内存错误。' },
      { symptom: '程序卡死（hang）', cause: '死锁、无限循环、等待 I/O、等待网络。', fix: '用 strace -p PID 看卡在哪。或者 gdb attach PID，然后 bt 看调用栈。或者用 lsof -p PID 看打开的文件/网络连接。' },
      { symptom: '程序行为不对但没报错', cause: '逻辑错误、条件判断错、变量值不对。', fix: '加 printf 打印关键变量值。或者用 gdb 设断点单步执行。或者用 assert() 检查不变量。' },
    ],
    exercises: [
      { level: '基础', task: '用 strace 追踪 cat /etc/hosts，找出它打开了哪些文件', hint: 'strace cat /etc/hosts 2>&1 | grep open', answer: 'echo "=== strace 追踪 cat ==="\nstrace cat /etc/hosts 2>&1 | grep -E "open|openat" | head -20\n\necho ""\necho "=== 解释 ==="\necho "openat(AT_FDCWD, \\"/etc/hosts\\", O_RDONLY) = 3"\necho "表示打开 /etc/hosts 文件，返回文件描述符 3"' },
      { level: '进阶', task: '写一个"程序监控器"，定期检查程序是否存活，崩溃时自动重启并记录日志', hint: 'pgrep + while + 条件判断', answer: `#!/bin/bash
PROGRAM="./myapp"
LOG_FILE="/var/log/myapp-monitor.log"
RESTART_DELAY=5

while true; do
  if ! pgrep -f "$PROGRAM" > /dev/null; then
    TIMESTAMP=$(date +%Y-%m-%d\\ %H:%M:%S)
    echo "[$TIMESTAMP] 程序未运行，正在重启..." | tee -a "$LOG_FILE"

    $PROGRAM >> "$LOG_FILE" 2>&1 &
    PID=$!
    echo "[$TIMESTAMP] 已重启 (PID: $PID)" | tee -a "$LOG_FILE"
  fi

  sleep $RESTART_DELAY
done` },
      { level: '挑战', task: '用 gdb 调试一个崩溃的 C 程序，找出崩溃原因', hint: 'gdb + break + run + backtrace', answer: `// 示例崩溃程序 (crash.c)
#include <stdio.h>
#include <stdlib.h>

void crash_function() {
    int *ptr = NULL;
    *ptr = 42;  // 空指针解引用，会崩溃
}

int main() {
    printf("Starting...\\n");
    crash_function();
    printf("This won\'t be printed\\n");
    return 0;
}

// 编译：gcc -g -o crash crash.c
// 调试：
// gdb ./crash
// (gdb) run
// Program received signal SIGSEGV, Segmentation fault.
// 0x0000000000401136 in crash_function () at crash.c:7
// 7           *ptr = 42;
// (gdb) backtrace
// #0  0x0000000000401136 in crash_function () at crash.c:7
// #1  0x000000000040114a in main () at crash.c:12
// (gdb) print ptr
// $1 = (int *) 0x0
// 结论：ptr 是空指针，解引用导致崩溃` },
    ],
    prereqs: ['进程管理 — ps/kill', '编译 — gcc'],
    nextSteps: ['性能分析 — perf', '内核调试 — kgdb'],
  },
};
