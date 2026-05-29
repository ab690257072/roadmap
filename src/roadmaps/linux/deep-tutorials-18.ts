import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_18: Record<string, DeepTutorial> = {
  "mUKoiGUTpIaUgQNF3BND_": {
    mentalModel: '前台进程占用终端，后台进程不占用。& 放后台，Ctrl+Z 暂停，fg 恢复前台，bg 恢复后台，nohup 让进程在 SSH 断开后继续跑。',
    handsOn: [
      { title: '后台运行', cmd: 'sleep 100 &', output: '[1] 12345', explain: '命令末尾加 & 放后台。[1] 是任务号，12345 是 PID。jobs 看后台任务列表。终端可以继续用。' },
      { title: '暂停和恢复', cmd: '# 运行一个前台命令后按 Ctrl+Z\nsleep 100\n^Z\n[1]+  Stopped   sleep 100\nbg 1\n[1]+ sleep 100 &', explain: 'Ctrl+Z 暂停当前进程（SIGSTOP）。bg 让它在后台继续跑。fg 把它切回前台。' },
      { title: 'nohup 持久运行', cmd: 'nohup ./long-script.sh > output.log 2>&1 &', output: 'nohup: ignoring input and appending output to \'nohup.out\'', explain: 'nohup 让进程忽略 SIGHUP（终端关闭信号）。输出默认存到 nohup.out。配合 & 在后台跑，断开 SSH 也不停。' },
      { title: '查看后台任务', cmd: 'jobs', output: '[1]-  Running   nohup ./long-script.sh > output.log 2>&1 &\n[2]+  Stopped   vim file.txt', explain: 'jobs 显示当前 shell 的后台任务。- 表示上一个任务，+ 表示当前任务。fg %2 或 fg 2 恢复第 2 个任务到前台。' },
    ],
    diagnosis: [
      { symptom: 'SSH 断开后进程停了', cause: 'SSH 断开时会发 SIGHUP 给所有子进程，进程默认收到 SIGHUP 就退出。', fix: '用 nohup command & 或者 tmux/screen 创建持久会话。' },
      { symptom: 'Ctrl+Z 后进程没继续跑', cause: 'Ctrl+Z 是暂停（SIGSTOP），不是终止。暂停的进程还在内存里，需要 bg 或 fg 恢复。', fix: 'bg 让它在后台继续跑。fg 切回前台。jobs 看所有暂停的任务。' },
      { symptom: 'nohup.out 文件很大', cause: 'nohup 默认把所有输出存到 nohup.out。长时间运行的进程会积累大量日志。', fix: '重定向输出：nohup command > /dev/null 2>&1 &（丢弃）或 nohup command > myapp.log 2>&1 &（自定义文件）。' },
    ],
    exercises: [
      { level: '基础', task: '后台运行一个 sleep 30，然后查看后台任务，最后等它完成', hint: '& + jobs + wait', answer: 'sleep 30 &\njobs\nwait %1  # 等待第 1 个后台任务完成\necho "完成了"' },
      { level: '进阶', task: '用 nohup 运行一个脚本，输出存到 myapp.log，断开 SSH 后重新连上确认还在跑', hint: 'nohup + > + & + ps', answer: '# 第一次 SSH：\nnohup ./my-script.sh > myapp.log 2>&1 &\necho "PID: $!" > myapp.pid\ndisconnect  # 断开 SSH\n\n# 重新连上：\ncat myapp.pid  # 拿到 PID\nps -p $(cat myapp.pid)  # 确认还在跑\ntail -f myapp.log  # 看输出' },
      { level: '挑战', task: '写一个"任务管理器"函数，支持 start/stop/status/list 操作', hint: 'case 语句 + PID 文件 + kill', answer: 'task() {\n  local cmd=$1\n  local name=$2\n  local pidfile="/tmp/task-$name.pid"\n  case "$cmd" in\n    start)\n      nohup "${@:3}" > "/tmp/task-$name.log" 2>&1 &\n      echo $! > "$pidfile"\n      echo "已启动: $name (PID: $!)"\n      ;;\n    stop)\n      if [ -f "$pidfile" ]; then\n        kill $(cat "$pidfile")\n        rm "$pidfile"\n        echo "已停止: $name"\n      else\n        echo "PID 文件不存在"\n      fi\n      ;;\n    status)\n      if [ -f "$pidfile" ] && ps -p $(cat "$pidfile") > /dev/null; then\n        echo "$name 正在运行 (PID: $(cat $pidfile))"\n      else\n        echo "$name 未运行"\n      fi\n      ;;\n    list)\n      ls /tmp/task-*.pid 2>/dev/null | sed \'s/.*task-\\(.*\\)\\.pid/\\1/\'\n      ;;\n  esac\n}' },
    ],
    prereqs: ['ps — 查看进程', 'kill — 停止进程'],
    nextSteps: ['tmux/screen — 持久终端会话', 'systemd — 服务管理'],
  },
};
