import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_24: Record<string, DeepTutorial> = {
  "0FLUI9r7znMqi6YKReLzD": {
    mentalModel: 'kill 是"发信号"，不是"杀进程"。默认发 SIGTERM（请退出），-9 发 SIGKILL（强制终止）。pkill 按名字批量杀。',
    handsOn: [
      { title: '优雅停止进程', cmd: 'kill 1234', output: '（无输出，发送 SIGTERM）', explain: 'kill PID 发 SIGTERM（信号 15）。好的程序会捕获信号、做清理（关闭连接、保存状态）后退出。等 5-10 秒观察。' },
      { title: '强制终止', cmd: 'kill -9 1234', output: '（无输出，发送 SIGKILL）', explain: 'kill -9 PID 发 SIGKILL（信号 9）。不可捕获，立即生效。可能导致数据损坏。只在 SIGTERM 无效时使用。' },
      { title: '按名字杀进程', cmd: 'pkill -f "node server.js"', output: '（无输出，匹配并杀死所有匹配的进程）', explain: 'pkill pattern 按进程名匹配。-f 匹配完整命令行（不只是进程名）。先用 pgrep -f pattern 看会杀哪些进程。' },
      { title: '批量杀同名进程', cmd: 'killall nginx', output: '（无输出，杀死所有叫 nginx 的进程）', explain: 'killall name 按进程名杀所有同名进程。比 pkill 更直接。⚠️ 在某些 Unix（如 Solaris）上 killall 是杀所有进程，Linux 上是按名字杀。' },
    ],
    diagnosis: [
      { symptom: 'kill PID 后进程还在', cause: 'SIGTERM 可以被进程捕获并忽略。或者进程在做清理工作需要时间。', fix: '等几秒再检查：sleep 5 && ps -p PID。如果还在，kill -9 PID 强制终止。' },
      { symptom: 'pkill 误杀了不该杀的进程', cause: '匹配模式太宽泛。pkill "python" 会杀死所有 Python 进程。', fix: '先用 pgrep -f pattern 看会匹配哪些进程。模式要具体：pkill -f "python myapp.py" 而不是 pkill python。' },
      { symptom: 'kill -9 后僵尸进程还在', cause: '僵尸进程（Z 状态）已经死了，只是父进程没 wait() 回收。kill -9 对僵尸进程无效。', fix: '杀掉父进程让 init 接管并回收。或者等父进程自己 wait()。' },
    ],
    exercises: [
      { level: '基础', task: '启动 3 个 sleep 进程，然后用 pkill 一次性全部停止', hint: 'sleep & 三次 + pkill sleep', answer: 'sleep 100 &\nsleep 200 &\nsleep 300 &\n\njobs  # 看 3 个后台任务\n\npkill sleep\n\njobs  # 应该都没了' },
      { level: '进阶', task: '写一个"优雅停止"函数，先发 SIGTERM，等 10 秒，如果还没退出就发 SIGKILL', hint: 'kill + sleep + ps + kill -9', answer: 'graceful_kill() {\n  local pid=$1\n  local timeout=${2:-10}\n  \n  echo "发送 SIGTERM 到 $pid..."\n  kill "$pid"\n  \n  for i in $(seq 1 $timeout); do\n    if ! ps -p "$pid" > /dev/null; then\n      echo "进程已退出"\n      return 0\n    fi\n    sleep 1\n  done\n  \n  echo "超时，发送 SIGKILL..."\n  kill -9 "$pid"\n  echo "已强制终止"\n}' },
      { level: '挑战', task: '写一个"进程清理器"，找出所有运行超过 1 小时的 sleep 进程并停止', hint: 'ps -eo pid,etimes,cmd + awk 过滤 + kill', answer: '#!/bin/bash\necho "查找运行超过 1 小时的 sleep 进程..."\nps -eo pid,etimes,cmd | awk \'$3 == "sleep" && $2 > 3600 {\n  printf "PID: %s, 运行时间: %d 秒, 命令: %s\\n", $1, $2, $3\n  system("kill " $1)\n}\'\n\necho ""\necho "已发送 SIGTERM。10 秒后检查是否还有残留..."\nsleep 10\n\nps -eo pid,etimes,cmd | awk \'$3 == "sleep" && $2 > 3600 {\n  print "强制终止: " $1\n  system("kill -9 " $1)\n}\'' },
    ],
    prereqs: ['ps — 查看进程', '进程信号 — SIGTERM/SIGKILL 的区别'],
    nextSteps: ['systemd — 服务管理（自动处理进程生命周期）', 'supervisor — 进程监控和自动重启'],
  },
};
