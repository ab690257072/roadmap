import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_33: Record<string, DeepTutorial> = {
  "LFPhSHOhUqM98fUxMjQUw": {
    mentalModel: '文件系统决定了数据在磁盘上怎么组织。Linux 最常用 ext4（通用稳定），服务器常用 xfs（大文件快），新趋势是 btrfs（快照+压缩）。',
    handsOn: [
      { title: '看当前文件系统', cmd: 'df -T', output: 'Filesystem     Type     1K-blocks      Used Available Use% Mounted on\n/dev/sda1      ext4     103830520  43234560  58483880  42% /\n/dev/sdb1      xfs      524288000 188743680 335544320  36% /data', explain: 'df -T 显示文件系统类型。/dev/sda1 是 ext4（系统盘），/dev/sdb1 是 xfs（数据盘）。' },
      { title: '格式化分区', cmd: 'sudo mkfs.ext4 /dev/sdc1', output: 'mke2fs 1.46.5 (30-Dec-2021)\nCreating filesystem with 26214400 4k blocks and 6553600 inodes', explain: 'mkfs.ext4 格式化为 ext4。mkfs.xfs 格式化为 xfs。⚠️ 格式化会清空分区所有数据。' },
      { title: '挂载分区', cmd: 'sudo mount /dev/sdc1 /mnt/newdisk && df -h /mnt/newdisk', output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sdc1       100G   45M  100G   1% /mnt/newdisk', explain: 'mount 设备 目录 挂载分区。umount 卸载。/etc/fstab 配置开机自动挂载。' },
      { title: '检查文件系统', cmd: 'sudo fsck /dev/sda1', output: 'fsck from util-linux 2.37.2\ne2fsck 1.46.5 (30-Dec-2021)\n/dev/sda1: clean, 234567/6553600 files, 4323456/26214400 blocks', explain: 'fsck 检查并修复文件系统。必须在卸载状态下运行。开机时系统会自动 fsck（如果标记为 dirty）。' },
    ],
    diagnosis: [
      { symptom: 'mount 报 "unknown filesystem type"', cause: '内核不支持这个文件系统，或者没装对应的工具包。', fix: '检查内核模块：lsmod | grep ext4。安装工具：apt install xfsprogs（xfs）或 btrfs-progs（btrfs）。' },
      { symptom: 'fsck 报 "device is mounted"', cause: '不能在挂载状态下 fsck。可能损坏文件系统。', fix: 'umount /dev/sda1 先卸载。如果是根分区，重启进 rescue mode 或用 live USB。' },
      { symptom: '格式化后挂载报 "wrong fs type, bad superblock"', cause: '格式化没成功，或者设备有坏道。', fix: '重新格式化：mkfs.ext4 -F /dev/sdc1（-F 强制）。或者用 smartctl -a /dev/sdc 检查硬盘健康。' },
    ],
    exercises: [
      { level: '基础', task: '查看系统所有分区的文件系统类型，找出使用 xfs 的分区', hint: 'df -T + grep', answer: 'echo "=== 所有分区 ==="\ndf -T | grep -v tmpfs\n\necho ""\necho "=== xfs 分区 ==="\ndf -T | grep xfs\n\necho ""\necho "=== ext4 分区 ==="\ndf -T | grep ext4' },
      { level: '进阶', task: '写一个脚本，自动挂载所有在 /etc/fstab 里定义但还没挂载的分区', hint: 'mount -a 或解析 /etc/fstab + mount', answer: '#!/bin/bash\necho "检查未挂载的 fstab 分区..."\n\nwhile read dev mount fs opts dump pass; do\n  # 跳过注释和空行\n  [[ "$dev" =~ ^#.*$ || -z "$dev" ]] && continue\n  \n  # 检查是否已挂载\n  if ! mountpoint -q "$mount" 2>/dev/null; then\n    echo "挂载: $dev → $mount ($fs)"\n    sudo mount "$mount"\n  fi\ndone < /etc/fstab\n\necho ""\necho "当前挂载:"\nmount | grep "^/dev"' },
      { level: '挑战', task: '写一个"磁盘健康检查"脚本，检查 SMART 状态、文件系统错误、坏道', hint: 'smartctl + fsck + badblocks', answer: '#!/bin/bash\nDEVICE=${1:-/dev/sda}\n\necho "=== 磁盘健康检查: $DEVICE ==="\necho ""\n\necho "--- SMART 状态 ---"\nif command -v smartctl > /dev/null; then\n  sudo smartctl -H "$DEVICE" | grep -E "SMART|PASSED|FAILED"\n  sudo smartctl -a "$DEVICE" | grep -E "Reallocated_Sector|Current_Pending_Sector|Offline_Uncorrectable"\nelse\n  echo "smartctl 未安装 (apt install smartmontools)"\nfi\n\necho ""\necho "--- 文件系统检查（需要卸载）---"\nif mount | grep -q "$DEVICE"; then\n  echo "$DEVICE 已挂载，跳过 fsck"\nelse\n  sudo fsck -n "$DEVICE" 2>&1 | tail -5\nfi\n\necho ""\necho "--- 磁盘使用率 ---"\ndf -h "$DEVICE" 2>/dev/null | tail -1\n\necho ""\necho "--- I/O 性能测试 ---"\ndd if=/dev/zero of=/tmp/test bs=1M count=1024 conv=fdatasync 2>&1 | tail -1\nrm -f /tmp/test' },
    ],
    prereqs: ['lsblk — 看块设备', 'mount/umount — 挂载/卸载'],
    nextSteps: ['LVM — 逻辑卷管理', 'RAID — 磁盘冗余阵列'],
  },
};
