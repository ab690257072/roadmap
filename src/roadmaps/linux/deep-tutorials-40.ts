import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_40: Record<string, DeepTutorial> = {
  "AWosNs2nvDGV8r6WvgBI1": {
    mentalModel: 'Swap 是内存的"溢出区"——内存不够时，系统把不活跃的内存页换到 swap（磁盘上的空间）。',
    handsOn: [
      { title: '看 swap 使用情况', cmd: 'free -h', output: '              total        used        free      shared  buff/cache   available\nMem:           15Gi       5.3Gi       2.3Gi       234Mi       7.8Gi       10Gi\nSwap:         2.0Gi       123Mi       1.9Gi', explain: 'Swap 行显示总量、已用、剩余。used 很低说明内存够用。如果 used 接近 total，系统会频繁 swap，变得很慢。' },
      { title: '看 swap 设备', cmd: 'swapon --show', output: 'NAME      TYPE      SIZE USED PRIO\n/dev/sda2 partition   2G 123M   -2', explain: 'swapon --show 显示 swap 设备。可以是分区（/dev/sda2）或文件（/swapfile）。PRIO 是优先级。' },
      { title: '创建 swap 文件', cmd: 'sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile', output: 'Setting up swapspace version 1, size = 4 GiB', explain: 'fallocate 创建 4GB 文件。chmod 600 设置权限。mkswap 格式化为 swap。swapon 启用。写入 /etc/fstab 永久生效。' },
      { title: '调整 swappiness', cmd: 'cat /proc/sys/vm/swappiness && sudo sysctl vm.swappiness=10', output: '60\nvm.swappiness = 10', explain: 'swappiness 控制系统使用 swap 的倾向。0-100，值越高越倾向用 swap。服务器通常设 10（少用 swap），默认 60。写入 /etc/sysctl.conf 永久生效。' },
    ],
    diagnosis: [
      { symptom: '系统很慢，swap used 接近 total', cause: '物理内存不足，系统频繁 swap（磁盘比内存慢几个数量级）。', fix: '加内存是最优解。临时缓解：关闭不需要的服务，调低 swappiness（sysctl vm.swappiness=1），找出内存大户进程（top 按 M 排序）。' },
      { symptom: 'swapon 报 "insecure permissions"', cause: 'swap 文件权限不对。必须是 600（只有 root 能读写）。', fix: 'chmod 600 /swapfile。然后 swapon /swapfile。' },
      { symptom: '重启后 swap 没了', cause: '没写入 /etc/fstab。swapon 是临时的，重启后失效。', fix: 'echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab。swapon -a 测试。' },
    ],
    exercises: [
      { level: '基础', task: '查看系统的 swap 使用情况，计算 swap 使用率', hint: 'free + awk', answer: 'free | awk \'/Swap:/ {\n  total = $2\n  used = $3\n  if (total > 0) {\n    pct = used / total * 100\n    printf "Swap 总量: %.1f GB\\n", total/1048576\n    printf "Swap 已用: %.1f GB\\n", used/1048576\n    printf "使用率: %.1f%%\\n", pct\n    if (pct > 80) print "警告: Swap 使用率过高！"\n  } else {\n    print "未配置 Swap"\n  }\n}\'' },
      { level: '进阶', task: '写一个脚本，根据物理内存大小自动创建 swap（内存 < 8GB 创建 4GB swap，8-16GB 创建 2GB swap，>16GB 不创建）', hint: 'free + awk 获取内存大小 + fallocate + mkswap', answer: '#!/bin/bash\n# 获取物理内存（GB）\nMEM_GB=$(free -g | awk \'/Mem:/ {print $2}\')\n\necho "物理内存: ${MEM_GB}GB"\n\nif [ "$MEM_GB" -lt 8 ]; then\n  SWAP_SIZE="4G"\nelif [ "$MEM_GB" -lt 16 ]; then\n  SWAP_SIZE="2G"\nelse\n  echo "内存充足，不需要 swap"\n  exit 0\nfi\n\necho "创建 ${SWAP_SIZE} swap..."\n\n# 检查是否已有 swap\nif swapon --show | grep -q "/swapfile"; then\n  echo "swap 已存在"\n  exit 0\nfi\n\n# 创建 swap 文件\nsudo fallocate -l "$SWAP_SIZE" /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\n\n# 写入 fstab\necho "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab\n\n# 调整 swappiness\nsudo sysctl vm.swappiness=10\necho "vm.swappiness=10" | sudo tee -a /etc/sysctl.conf\n\necho "Swap 创建完成"\nswapon --show' },
      { level: '挑战', task: '写一个"内存压力测试"脚本，逐步占用内存，观察 swap 行为', hint: 'stress 或 python 分配内存 + watch free', answer: '#!/bin/bash\n# 需要安装 stress: apt install stress\n\necho "=== 内存压力测试 ==="\necho "当前内存状态:"\nfree -h\nswapon --show\n\necho ""\necho "开始测试（每 30 秒增加 1GB 内存占用）..."\n\nfor i in {1..10}; do\n  echo "分配 ${i}GB 内存..."\n  stress --vm 1 --vm-bytes ${i}G --timeout 30s &\n  sleep 5\n  \n  echo "当前状态:"\n  free -h | grep -E "Mem|Swap"\n  \n  # 检查 swap 使用率\n  SWAP_PCT=$(free | awk \'/Swap:/ {if ($2 > 0) print int($3/$2*100); else print 0}\')\n  if [ "$SWAP_PCT" -gt 50 ]; then\n    echo "警告: Swap 使用率 ${SWAP_PCT}% > 50%"\n  fi\n  \n  sleep 25\ndone\n\necho "测试完成"\nfree -h' },
    ],
    prereqs: ['free — 看内存使用', 'mount/umount — 挂载/卸载'],
    nextSteps: ['内存管理 — OOM killer', '性能调优 — vm.swappiness 等参数'],
  },
};
