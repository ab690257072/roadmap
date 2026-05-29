import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_19: Record<string, DeepTutorial> = {
  "19lTWqAvZFT2CDlhLlPSq": {
    mentalModel: 'uptime 显示系统运行时间和 load average。load = 等待 CPU 的任务数。nproc 看核心数。load/核心数 < 0.7 健康，> 1.0 开始排队。',
    handsOn: [
      { title: '看 uptime 和 load', cmd: 'uptime', output: ' 14:30:45 up 5 days,  3:22,  2 users,  load average: 0.50, 0.38, 0.25', explain: '1/5/15 分钟负载均值。数值 < CPU 核心数 = 正常，> 核心数 = 过载。比如 4 核机器 load 2.5 是健康的，load 8 就危险了。' },
      { title: '看 CPU 核心数', cmd: 'nproc', output: '4', explain: 'nproc 显示 CPU 核心数。load average 要跟核心数比较才有意义。4 核机器 load 3.0 = 75% 利用率。' },
      { title: '计算负载比', cmd: 'awk \'{printf "1min: %.1f, cores: %d, ratio: %.1f%%\\n", $1, nproc, $1/nproc*100}\' /proc/loadavg', output: '1min: 0.5, cores: 4, ratio: 12.5%', explain: '/proc/loadavg 文件包含负载信息。awk 计算 load/核心数 的百分比。< 70% 健康，> 100% 过载。' },
      { title: '看负载趋势', cmd: 'sar -q 1 5', output: '12:00:01 AM   runq-sz  plist-sz   ldavg-1   ldavg-5  ldavg-15   blocked\n12:00:02 AM         1       234      0.50      0.38      0.25         0', explain: 'sar -q 显示负载历史。需要安装 sysstat 包。看 1/5/15 分钟的趋势判断负载是在上升还是下降。' },
    ],
    diagnosis: [
      { symptom: 'load average 很高但 CPU 使用率不高', cause: '可能是 IO wait（等待磁盘）。top 看 %wa（IO wait 比例）。iostat -x 1 看磁盘 IO。', fix: '检查磁盘 IO：iostat -x 1。可能是数据库慢查询、日志写入过多、NFS 挂载卡住。' },
      { symptom: 'load average 1min > 15min', cause: '负载在急剧上升。可能是刚启动了大任务（如编译、备份）或流量突增。', fix: 'top 看哪个进程 CPU 最高。如果是定时任务，调整执行时间避开高峰。如果是流量问题，考虑扩容。' },
      { symptom: 'load average 长期 > 核心数', cause: '服务器长期过载。需要优化或扩容。', fix: 'top 找 CPU 大户。优化慢查询、缓存热点数据、或者加 CPU 核心。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前系统的负载和 CPU 核心数，计算负载比', hint: 'uptime + nproc', answer: 'echo "负载: $(uptime | awk -F\'load average:\' \'{print $2}\')"\necho "核心数: $(nproc)"\necho "负载比: $(awk \'{printf "%.1f%%", $1/nproc*100}\' /proc/loadavg)"' },
      { level: '进阶', task: '写一个监控脚本，每 10 秒检查一次负载，超过阈值就记录到日志', hint: 'while + sleep + uptime + awk + >>', answer: '#!/bin/bash\nTHRESHOLD=$(nproc)\nLOGFILE="/tmp/load-monitor.log"\nwhile true; do\n  LOAD=$(awk \'{print $1}\' /proc/loadavg)\n  if (( $(echo "$LOAD > $THRESHOLD" | bc -l) )); then\n    echo "$(date): Load $LOAD > $THRESHOLD" >> "$LOGFILE"\n    # 可选：发送邮件或调用 webhook\n  fi\n  sleep 10\ndone' },
      { level: '挑战', task: '写一个"负载分析器"，显示过去 1/5/15 分钟的负载趋势，并判断是否在恶化', hint: '读取 /proc/loadavg 的三个值，比较大小', answer: '#!/bin/bash\nread LOAD1 LOAD5 LOAD15 REST < /proc/loadavg\nCORES=$(nproc)\n\necho "=== 负载分析 ==="\necho "1 分钟: $LOAD1 ($(echo "scale=1; $LOAD1/$CORES*100" | bc)%)"\necho "5 分钟: $LOAD5 ($(echo "scale=1; $LOAD5/$CORES*100" | bc)%)"\necho "15 分钟: $LOAD15 ($(echo "scale=1; $LOAD15/$CORES*100" | bc)%)"\necho ""\n\nif (( $(echo "$LOAD1 > $LOAD5" | bc -l) )); then\n  echo "趋势: ↑ 负载在上升"\n  if (( $(echo "$LOAD1 > $CORES" | bc -l) )); then\n    echo "警告: 负载已超过 CPU 核心数！"\n  fi\nelif (( $(echo "$LOAD1 < $LOAD5" | bc -l) )); then\n  echo "趋势: ↓ 负载在下降"\nelse\n  echo "趋势: → 负载稳定"\nfi' },
    ],
    prereqs: ['ps — 查看进程', 'top — 实时监控'],
    nextSteps: ['iostat — 磁盘 IO 监控', 'sar — 系统活动报告'],
  },
};
