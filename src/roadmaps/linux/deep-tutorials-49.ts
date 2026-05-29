import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_49: Record<string, DeepTutorial> = {
  "48wAoAAlCNt3j5mBpKTWC": {
    mentalModel: 'Linux 启动流程：BIOS/UEFI → Boot Loader (GRUB) → 内核 → initramfs → systemd (PID 1) → 多用户目标。像接力赛，每一棒把控制权传给下一棒。',
    handsOn: [
      { title: '看启动耗时', cmd: 'systemd-analyze', output: 'Startup finished in 2.345s (kernel) + 4.567s (userspace) = 6.912s\ngraphical.target reached after 6.890s in userspace', explain: 'systemd-analyze 显示启动总耗时。kernel 是内核初始化，userspace 是 systemd 启动服务。graphical.target 是图形界面目标。' },
      { title: '看最慢的服务', cmd: 'systemd-analyze blame | head -10', output: '   3.456s NetworkManager-wait-online.service\n   1.234s snapd.service\n   1.123s docker.service\n     890ms postgresql.service', explain: 'blame 按启动耗时排序所有服务。找出启动最慢的服务，考虑优化或延迟启动。' },
      { title: '看启动链', cmd: 'systemd-analyze critical-chain', output: 'graphical.target @6.890s\n└─multi-user.target @6.889s\n  └─postgresql.service @5.766s +1.123s\n    └─network.target @5.765s', explain: 'critical-chain 显示关键依赖链。@5.766s 是到达时间，+1.123s 是服务本身耗时。找出阻塞启动的瓶颈。' },
      { title: '看启动日志', cmd: 'dmesg | tail -30', output: '[    0.000000] Linux version 5.15.0-91-generic\n[    0.000000] Command line: BOOT_IMAGE=/vmlinuz-5.15.0-91-generic root=/dev/sda1\n[    1.234567] systemd[1]: Started PostgreSQL database server.', explain: 'dmesg 显示内核日志（启动过程中的硬件事件、驱动加载、内核消息）。tail -30 看最后 30 行。' },
    ],
    diagnosis: [
      { symptom: '启动很慢（超过 1 分钟）', cause: '某个服务启动耗时太长，或者等待网络/磁盘就绪。', fix: 'systemd-analyze blame 找最慢的服务。systemd-analyze critical-chain 找阻塞链。考虑禁用不需要的服务：systemctl disable service。' },
      { symptom: '启动后某些服务没自动启动', cause: '服务没 enable，或者依赖没满足。', fix: 'systemctl is-enabled service 检查。systemctl list-dependencies service 看依赖。journalctl -u service 看启动日志。' },
      { symptom: 'dmesg 里有很多错误信息', cause: '硬件问题、驱动不兼容、或者内核参数不对。', fix: 'dmesg | grep -i error 过滤错误。搜索具体错误信息。可能需要更新内核或安装驱动。' },
    ],
    exercises: [
      { level: '基础', task: '查看系统的启动耗时，找出最慢的 5 个服务', hint: 'systemd-analyze + systemd-analyze blame', answer: 'echo "=== 启动总耗时 ==="\nsystemd-analyze\n\necho ""\necho "=== 最慢的 5 个服务 ==="\nsystemd-analyze blame | head -5\n\necho ""\necho "=== 关键启动链 ==="\nsystemd-analyze critical-chain | head -10' },
      { level: '进阶', task: '写一个脚本，优化系统启动速度（禁用不需要的服务）', hint: 'systemd-analyze blame + systemctl disable', answer: '#!/bin/bash\necho "=== 启动优化 ==="\necho "当前启动耗时:"\nsystemd-analyze\n\necho ""\necho "=== 最慢的服务 ==="\nsystemd-analyze blame | head -10\n\necho ""\necho "=== 建议禁用的服务 ==="\n# 常见的可以禁用的服务\nSUGGESTED="cups bluetooth avahi-daemon ModemManager"\n\nfor svc in $SUGGESTED; do\n  if systemctl is-enabled "$svc" 2>/dev/null | grep -q "enabled"; then\n    echo "  $svc (当前: enabled)"\n    read -p "    禁用？(y/n) " confirm\n    if [ "$confirm" = "y" ]; then\n      sudo systemctl disable "$svc"\n      echo "    已禁用"\n    fi\n  fi\ndone\n\necho ""\necho "优化完成，重启后生效"\necho "预计启动时间:"\nsystemd-analyze' },
      { level: '挑战', task: '写一个"启动诊断器"，生成完整的启动报告（耗时、服务、日志、建议）', hint: 'systemd-analyze + dmesg + 生成 markdown', answer: '#!/bin/bash\nREPORT="/tmp/boot-diagnosis-$(date +%Y%m%d).md"\n\ncat > "$REPORT" << EOF\n# 系统启动诊断报告\n\n**时间**: $(date)\n**主机**: $(hostname)\n**内核**: $(uname -r)\n\n## 1. 启动耗时\n\n\\\`\\\`\\\`\n$(systemd-analyze)\n\\\`\\\`\\\`\n\n## 2. 最慢的服务（Top 10）\n\n\\\`\\\`\\\`\n$(systemd-analyze blame | head -10)\n\\\`\\\`\\\`\n\n## 3. 关键启动链\n\n\\\`\\\`\\\`\n$(systemd-analyze critical-chain)\n\\\`\\\`\\\`\n\n## 4. 启动失败的服务\n\n\\\`\\\`\\\`\n$(systemctl --failed --no-pager)\n\\\`\\\`\\\`\n\n## 5. 内核日志（最后 50 行）\n\n\\\`\\\`\\\`\n$(dmesg | tail -50)\n\\\`\\\`\\\`\n\n## 6. 优化建议\n\n### 6.1 可以禁用的服务\n\\\`\\\`\\\`\n$(systemctl list-unit-files --type=service --state=enabled --no-legend | grep -E "cups|bluetooth|avahi|ModemManager")\n\\\`\\\`\\\`\n\n### 6.2 可以延迟启动的服务\n\\\`\\\`\\\`\n$(systemd-analyze blame | awk \'$1 ~ /s$/ && $1+0 > 1.0 {print $2}\')\n\\\`\\\`\\\`\n\n### 6.3 一般建议\n- 禁用不需要的服务（如打印机、蓝牙）\n- 延迟启动非关键服务（使用 systemd timer）\n- 优化慢服务的启动脚本\n- 考虑使用更快的 init 系统（如 runit）\nEOF\n\necho "报告已生成: $REPORT"\ncat "$REPORT"' },
    ],
    prereqs: ['systemctl — 服务管理', 'dmesg — 内核日志'],
    nextSteps: ['systemd target — 运行级别', '快速启动 — 优化 initramfs'],
  },
};
