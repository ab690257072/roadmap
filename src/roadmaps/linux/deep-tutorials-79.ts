import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_79: Record<string, DeepTutorial> = {
  "DQEa8LrJ9TVW4ULBE4aHJ": {
    mentalModel: 'Linux 启动过程是从按下电源键到看到登录界面的完整流程——像一场接力赛，BIOS/UEFI 跑第一棒交给 Bootloader，Bootloader 交给内核，内核启动 init 系统，init 启动所有服务。',
    handsOn: [
      { title: '查看启动日志', cmd: 'journalctl -b | head -50', output: 'Jan 15 09:00:00 prod kernel: Linux version 5.15.0-91-generic...\nJan 15 09:00:01 prod systemd[1]: Starting Network Service...\nJan 15 09:00:02 prod systemd[1]: Started Network Service.', explain: 'journalctl -b 查看本次启动的日志。可以看到内核初始化、systemd 启动服务的过程。' },
      { title: '查看启动时间', cmd: 'systemd-analyze', output: 'Startup finished in 2.345s (kernel) + 4.567s (userspace) = 6.912s\ngraphical.target reached after 6.890s in userspace', explain: 'systemd-analyze 显示启动耗时。kernel 是内核初始化时间，userspace 是 systemd 启动服务时间。' },
      { title: '查看启动服务顺序', cmd: 'systemd-analyze critical-chain', output: 'graphical.target @6.890s\n└─multi-user.target @6.889s\n  └─nginx.service @5.678s +1.211s\n    └─network-online.target @5.677s', explain: 'critical-chain 显示关键服务的启动顺序和耗时。可以看到哪些服务启动最慢。' },
      { title: '查看默认启动目标', cmd: 'systemctl get-default', output: 'graphical.target', explain: 'get-default 显示默认启动目标。graphical.target 是图形界面，multi-user.target 是命令行。' },
    ],
    diagnosis: [
      { symptom: '系统启动很慢', cause: '太多服务在启动时启动，或者某些服务启动超时。', fix: 'systemd-analyze blame 看哪些服务启动最慢。systemctl disable service 禁用不需要的服务。或者 systemctl edit service 加 TimeoutStartSec=30s 设置超时。' },
      { symptom: '某个服务启动失败', cause: '配置文件错误、依赖服务没启动、权限不够。', fix: 'journalctl -u service 看日志。systemctl status service 看状态。或者手动启动：/usr/bin/service --config /etc/service.conf 调试。' },
      { symptom: '系统启动后进入 emergency mode', cause: '文件系统损坏、/etc/fstab 配置错误、根分区挂载失败。', fix: '输入 root 密码进入 emergency shell。fsck /dev/sda1 修复文件系统。或者编辑 /etc/fstab 修复挂载配置。' },
    ],
    exercises: [
      { level: '基础', task: '查看系统的启动时间，找出启动最慢的 5 个服务', hint: 'systemd-analyze + systemd-analyze blame', answer: '#!/bin/bash\necho "=== 启动时间 ==="\nsystemd-analyze\n\necho ""\necho "=== 启动最慢的 5 个服务 ==="\nsystemd-analyze blame | head -5' },
      { level: '进阶', task: '写一个脚本，禁用所有不需要的服务（如蓝牙、打印服务）', hint: 'systemctl disable + systemctl stop', answer: `#!/bin/bash
SERVICES=("bluetooth" "cups" "avahi-daemon" "ModemManager")

for SERVICE in "\${SERVICES[@]}"; do
  if systemctl is-enabled "$SERVICE" 2>/dev/null | grep -q "enabled"; then
    echo "禁用: $SERVICE"
    sudo systemctl stop "$SERVICE"
    sudo systemctl disable "$SERVICE"
    echo "✓ 已禁用: $SERVICE"
  else
    echo "跳过: $SERVICE (未启用)"
  fi
done

echo ""
echo "重启后生效"
echo "sudo reboot"` },
      { level: '挑战', task: '写一个"启动优化脚本"，分析启动日志并给出优化建议', hint: 'systemd-analyze + journalctl + 条件判断', answer: `#!/bin/bash
echo "=== 启动优化分析 ==="
echo ""

# 1. 启动时间
echo "--- 启动时间 ---"
systemd-analyze
echo ""

# 2. 启动最慢的服务
echo "--- 启动最慢的 10 个服务 ---"
systemd-analyze blame | head -10
echo ""

# 3. 失败的服务
echo "--- 失败的服务 ---"
FAILED=$(systemctl --failed --no-legend | wc -l)
if [ "$FAILED" -gt 0 ]; then
  systemctl --failed --no-pager
  echo ""
  echo "建议: 检查这些服务为什么失败"
else
  echo "✓ 没有失败的服务"
fi
echo ""

# 4. 启动日志中的错误
echo "--- 启动日志中的错误 ---"
journalctl -b -p err --no-pager | tail -20
echo ""

# 5. 优化建议
echo "--- 优化建议 ---"
TOTAL_TIME=$(systemd-analyze | grep -oP '[0-9.]+s' | tail -1 | tr -d 's')
if (( $(echo "$TOTAL_TIME > 30" | bc -l) )); then
  echo "⚠️  启动时间超过 30 秒，建议:"
  echo "  - 禁用不需要的服务"
  echo "  - 检查启动慢的服务"
  echo "  - 考虑用 systemd-analyze plot > boot.svg 可视化启动过程"
else
  echo "✓ 启动时间正常"
fi` },
    ],
    prereqs: ['systemd — systemctl', 'Linux 基础 — 文件系统/进程'],
    nextSteps: ['GRUB — Bootloader 配置', '内核参数 — sysctl'],
  },
};
