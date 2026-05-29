import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_23: Record<string, DeepTutorial> = {
  "VkLWTvKnRXzvLGWza2v45": {
    mentalModel: '进程信号是进程间通信的方式。kill 可以发多种信号：SIGTERM（请退出）、SIGKILL（强制终止）、SIGHUP（重新加载配置）。',
    handsOn: [
      { title: 'SIGTERM：优雅退出', cmd: 'kill 1234', output: '（无输出，发送 SIGTERM）', explain: 'kill PID 默认发 SIGTERM（信号 15）。进程可以捕获这个信号，做清理工作（关闭数据库连接、保存状态）后退出。' },
      { title: 'SIGKILL：强制终止', cmd: 'kill -9 1234', output: '（无输出，发送 SIGKILL）', explain: 'kill -9 PID 发 SIGKILL（信号 9）。不可捕获，立即生效。可能导致数据损坏。只在 SIGTERM 无效时使用。' },
      { title: 'SIGHUP：重新加载配置', cmd: 'kill -HUP $(cat /var/run/nginx.pid)', output: '（无输出，发送 SIGHUP）', explain: 'kill -HUP PID 让进程重新加载配置文件。Nginx、sshd 等守护进程都支持。比 restart 更安全（不断开现有连接）。' },
      { title: '查看所有信号', cmd: 'kill -l', output: ' 1) SIGHUP   2) SIGINT   3) SIGQUIT  4) SIGILL   5) SIGTRAP\n 6) SIGABRT  7) SIGBUS   8) SIGFPE   9) SIGKILL 10) SIGUSR1\n11) SIGSEGV 12) SIGUSR2 13) SIGPIPE 14) SIGALRM 15) SIGTERM', explain: 'kill -l 列出所有信号。常用：1=SIGHUP（重加载），9=SIGKILL（强杀），15=SIGTERM（优雅退出），19=SIGSTOP（暂停），18=SIGCONT（恢复）。' },
    ],
    diagnosis: [
      { symptom: 'kill PID 后进程还在', cause: 'SIGTERM 可以被进程捕获并忽略。或者进程在做清理工作需要时间。', fix: '等几秒再检查。或者 kill -9 PID 强制终止（不可捕获）。' },
      { symptom: 'kill -9 后数据损坏了', cause: 'SIGKILL 不给进程清理的机会。数据库可能写到一半被中断，文件可能不完整。', fix: '优先用 SIGTERM。只在 SIGTERM 无效时才用 SIGKILL。重要服务要有崩溃恢复机制（如 WAL、事务日志）。' },
      { symptom: 'SIGHUP 后服务挂了', cause: '配置文件有语法错误。SIGHUP 让进程重新加载配置，如果配置有错进程可能退出。', fix: '改配置前先测试：nginx -t、sshd -t。确认语法正确再 reload。' },
    ],
    exercises: [
      { level: '基础', task: '启动一个 sleep 1000，然后用 SIGTERM 停止它', hint: 'sleep & + kill', answer: 'sleep 1000 &\nPID=$!\necho "PID: $PID"\nkill $PID\nps -p $PID  # 应该找不到进程了' },
      { level: '进阶', task: '写一个脚本，捕获 SIGTERM 信号并做清理工作后再退出', hint: 'trap \'cleanup\' SIGTERM', answer: '#!/bin/bash\ncleanup() {\n  echo "收到 SIGTERM，正在清理..."\n  rm -f /tmp/myapp.pid\n  echo "清理完成，退出"\n  exit 0\n}\n\ntrap cleanup SIGTERM\n\necho $$ > /tmp/myapp.pid\necho "服务已启动 (PID: $$)"\n\n# 模拟长时间运行\nwhile true; do\n  sleep 1\ndone' },
      { level: '挑战', task: '写一个"进程管理器"，支持 start/stop/reload/status，使用 PID 文件和信号', hint: 'case 语句 + kill -HUP/SIGTERM + PID 文件', answer: '#!/bin/bash\nPIDFILE="/tmp/myapp.pid"\nAPP="./myapp.sh"\n\ncase "$1" in\n  start)\n    if [ -f "$PIDFILE" ] && ps -p $(cat "$PIDFILE") > /dev/null; then\n      echo "已在运行 (PID: $(cat $PIDFILE))"\n      exit 1\n    fi\n    $APP &\n    echo $! > "$PIDFILE"\n    echo "已启动 (PID: $!)"\n    ;;\n  stop)\n    if [ -f "$PIDFILE" ]; then\n      kill $(cat "$PIDFILE")\n      rm "$PIDFILE"\n      echo "已停止"\n    else\n      echo "未运行"\n    fi\n    ;;\n  reload)\n    if [ -f "$PIDFILE" ]; then\n      kill -HUP $(cat "$PIDFILE")\n      echo "已发送 SIGHUP"\n    else\n      echo "未运行"\n    fi\n    ;;\n  status)\n    if [ -f "$PIDFILE" ] && ps -p $(cat "$PIDFILE") > /dev/null; then\n      echo "运行中 (PID: $(cat $PIDFILE))"\n    else\n      echo "未运行"\n    fi\n    ;;\n  *)\n    echo "用法: $0 {start|stop|reload|status}"\n    ;;\nesac' },
    ],
    prereqs: ['ps — 查看进程', 'kill — 停止进程'],
    nextSteps: ['systemd — 服务管理（自动处理信号）', 'trap — Shell 脚本信号处理'],
  },
};
