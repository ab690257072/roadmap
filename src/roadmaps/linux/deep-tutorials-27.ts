import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_27: Record<string, DeepTutorial> = {
  "5anSYRhaKIs3dCLWlvZfT": {
    mentalModel: 'Linux 进程有优先级（nice 值）。nice 值越低优先级越高（越优先）。默认 nice 是 0，范围 -20（最高）到 19（最低）。',
    handsOn: [
      { title: '查看进程优先级', cmd: 'ps -eo pid,ni,comm | head -10', output: ' PID  NI COMMAND\n   1   0 systemd\n   2   0 kthreadd\n 567  -5 sshd\n1234   0 bash', explain: 'NI 列显示 nice 值。负值表示高优先级（需要 root）。大多数进程默认是 0。' },
      { title: '以低优先级运行', cmd: 'nice -n 10 ./backup.sh &', output: '[1] 5678', explain: 'nice -n VALUE command 以指定 nice 值启动。值越大越不优先。10 适合后台任务（如备份），不抢占前台资源。' },
      { title: '改变运行中进程的优先级', cmd: 'sudo renice -n 5 -p 1234', output: '1234 (process ID) old priority 0, new priority 5', explain: 'renice VALUE -p PID 改正在运行的进程的 nice 值。普通用户只能增加 nice（降低优先级），root 可以减少 nice（提高优先级）。' },
      { title: '高优先级任务（需要 root）', cmd: 'sudo nice -n -5 ./critical-task.sh', output: '（无输出，以 high priority 运行）', explain: '负 nice 值需要 root。-5 适合关键任务（如实时监控、交易系统）。⚠️ 不要滥用高优先级，可能导致系统卡顿。' },
    ],
    diagnosis: [
      { symptom: 'nice 报 "Permission denied"', cause: '普通用户不能减少 nice 值（提高优先级）。只有 root 可以 nice -n 负数。', fix: '用 sudo nice -n -5 command。或者让管理员在 /etc/security/limits.conf 里给你权限：tu hard nice -5。' },
      { symptom: 'renice 后进程还是很快/很慢', cause: 'nice 只影响 CPU 调度优先级，不影响 IO（磁盘/网络）。如果进程瓶颈在 IO，nice 没用。', fix: 'IO 密集用 ionice：ionice -c 2 -n 0 command（高优先级 IO）。CPU 密集用 nice。' },
      { symptom: '系统卡顿，发现有进程 nice -20', cause: '某个进程被设成最高优先级，抢占了其他进程的 CPU。', fix: 'sudo renice 0 -p PID 恢复正常优先级。或者 kill 掉这个进程。检查是谁设的，避免再次发生。' },
    ],
    exercises: [
      { level: '基础', task: '以 nice 10 运行一个 sleep 30，查看它的优先级', hint: 'nice + ps', answer: 'nice -n 10 sleep 30 &\nPID=$!\nps -p $PID -o pid,ni,comm\n# 应该看到 NI = 10' },
      { level: '进阶', task: '写一个脚本，自动把大文件的压缩任务设成低优先级（nice 15）', hint: 'find + nice + tar', answer: '#!/bin/bash\necho "查找大于 1GB 的文件并压缩（低优先级）..."\nfind /var/log -type f -size +1G | while read file; do\n  echo "压缩: $file (nice 15)"\n  nice -n 15 gzip "$file"\ndone\necho "完成"' },
      { level: '挑战', task: '写一个"优先级管理器"，监控指定进程，如果 CPU 使用率超过 80% 就自动降低优先级', hint: 'top -b + awk + renice', answer: '#!/bin/bash\nTARGET_PROCESS="myapp"\nTHRESHOLD=80\n\nwhile true; do\n  # 获取进程 CPU 使用率\n  CPU=$(top -b -n 1 | grep "$TARGET_PROCESS" | awk \'{print $9}\' | head -1)\n  PID=$(pgrep -f "$TARGET_PROCESS" | head -1)\n  \n  if [ -n "$CPU" ] && (( $(echo "$CPU > $THRESHOLD" | bc -l) )); then\n    CURRENT_NICE=$(ps -p $PID -o ni= | tr -d \' \')\n    if [ "$CURRENT_NICE" -lt 10 ]; then\n      NEW_NICE=$((CURRENT_NICE + 5))\n      echo "进程 $PID CPU $CPU% > $THRESHOLD%，降低优先级: $CURRENT_NICE → $NEW_NICE"\n      sudo renice -n $NEW_NICE -p $PID\n    fi\n  fi\n  \n  sleep 10\ndone' },
    ],
    prereqs: ['ps — 查看进程', 'top — 实时监控'],
    nextSteps: ['ionice — IO 优先级', 'cgroups — 更精细的资源控制'],
  },
};
