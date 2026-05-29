import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_36: Record<string, DeepTutorial> = {
  "zmb5lK_EGMAChPoPvP9E0": {
    mentalModel: 'mount 把磁盘分区"挂载"到目录树下，让你能像访问普通目录一样访问磁盘。/etc/fstab 配置开机自动挂载。',
    handsOn: [
      { title: '看当前挂载', cmd: 'mount | grep "^/dev"', output: '/dev/sda1 on / type ext4 (rw,relatime)\n/dev/sdb1 on /data type xfs (rw,relatime)', explain: 'mount 显示所有挂载点。/dev/sda1 挂载在 /（系统盘），/dev/sdb1 挂载在 /data（数据盘）。' },
      { title: '手动挂载', cmd: 'sudo mount /dev/sdc1 /mnt/usb && df -h /mnt/usb', output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sdc1       32G  8.5G   24G  27% /mnt/usb', explain: 'mount 设备 目录 挂载分区。umount 目录 卸载。挂载后目录里的内容就是磁盘上的文件。' },
      { title: '配置开机自动挂载', cmd: 'sudo nano /etc/fstab', output: '# /etc/fstab\n/dev/sda1  /      ext4  defaults  0  1\n/dev/sdb1  /data  xfs   defaults  0  2\n/dev/sdc1  /mnt/usb  vfat  defaults,nofail  0  0', explain: 'fstab 格式：设备 挂载点 文件系统 选项 dump fsck。nofail 选项让启动时即使设备不存在也不报错（适合 USB）。' },
      { title: '测试 fstab', cmd: 'sudo mount -a && mount | grep "^/dev"', output: '（无报错说明 fstab 配置正确）', explain: 'mount -a 按 fstab 挂载所有未挂载的分区。⚠️ fstab 写错会导致系统启动失败。改 fstab 前先备份，改完后 mount -a 测试。' },
    ],
    diagnosis: [
      { symptom: 'mount 报 "wrong fs type, bad option, bad superblock"', cause: '文件系统类型不对，或者分区没格式化。', fix: 'file -s /dev/sdc1 看文件系统类型。或者 blkid /dev/sdc1 看 UUID 和类型。没格式化就 mkfs.ext4 /dev/sdc1。' },
      { symptom: 'umount 报 "target is busy"', cause: '有进程在使用这个挂载点。', fix: 'lsof +D /mnt/usb 看谁在用。fuser -km /mnt/usb 杀掉所有进程（危险）。或者 umount -l 延迟卸载。' },
      { symptom: 'fstab 写错后系统启动失败', cause: 'fstab 里设备不存在或配置错误，系统启动时 mount -a 失败。', fix: '进 rescue mode（启动时按 e 编辑 GRUB）。mount -o remount,rw / 让根目录可写。nano /etc/fstab 修复。reboot。' },
    ],
    exercises: [
      { level: '基础', task: '列出所有挂载的磁盘分区，显示设备名、挂载点、文件系统类型、使用率', hint: 'df -T + grep', answer: 'df -T | grep "^/dev" | awk \'{\n  printf "设备: %-12s  挂载点: %-15s  类型: %-6s  使用率: %s\\n", $1, $7, $2, $6\n}\'' },
      { level: '进阶', task: '写一个"自动挂载脚本"，检测新插入的 USB 设备并挂载到 /media/usb', hint: 'lsblk + mount + 判断文件系统类型', answer: '#!/bin/bash\nMOUNT_POINT="/media/usb"\nmkdir -p "$MOUNT_POINT"\n\n# 找出所有可移动设备（通常是 USB）\nfor dev in $(lsblk -dpno NAME,TRAN | grep "usb" | awk \'{print $1}\'); do\n  # 获取分区\n  partition="${dev}1"\n  if [ -b "$partition" ]; then\n    # 获取文件系统类型\n    fs_type=$(blkid -o value -s TYPE "$partition")\n    echo "挂载 $partition ($fs_type) → $MOUNT_POINT"\n    mount -t "$fs_type" "$partition" "$MOUNT_POINT"\n  fi\ndone\n\necho "当前挂载:"\nmount | grep "^/dev" | grep -E "usb|media"' },
      { level: '挑战', task: '写一个"磁盘健康监控"脚本，定期检查所有挂载点的空间，超过 90% 就报警', hint: 'df + awk + cron', answer: '#!/bin/bash\nTHRESHOLD=90\nEMAIL="admin@example.com"\n\ndf -h | grep "^/dev" | while read dev size used avail use mount; do\n  use_pct=${use%%%}  # 去掉 % 符号\n  if [ "$use_pct" -gt "$THRESHOLD" ]; then\n    echo "ALERT: $mount 磁盘使用率 $use > $THRESHOLD%"\n    echo "设备: $dev, 大小: $size, 已用: $used, 可用: $avail"\n    \n    # 找出最大的 10 个目录\n    echo "最大目录:"\n    du -sh "$mount"/* 2>/dev/null | sort -rh | head -10\n    \n    # 发送邮件\n    echo "$mount 磁盘使用率 $use > $THRESHOLD%" | mail -s "Disk Alert: $mount" "$EMAIL"\n  fi\ndone\n\n# 加到 crontab（每小时执行一次）：\n# 0 * * * * /path/to/disk-monitor.sh' },
    ],
    prereqs: ['lsblk — 看块设备', '文件系统 — ext4/xfs 的区别'],
    nextSteps: ['LVM — 逻辑卷管理', '网络文件系统 — NFS/SMB'],
  },
};
