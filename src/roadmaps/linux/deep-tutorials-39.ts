import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_39: Record<string, DeepTutorial> = {
  "4xBaZPk0eSsWG1vK3e2yW": {
    mentalModel: '新磁盘插上后需要：分区 → 格式化 → 挂载 → 写入 fstab。四步走完才能用。',
    handsOn: [
      { title: '识别新磁盘', cmd: 'lsblk', output: 'NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 100G  0 disk \n├─sda1   8:1    0  50G  0 part /\n└─sda2   8:2    0  50G  0 part [SWAP]\nsdb      8:16   0 500G  0 disk', explain: 'lsblk 列出所有块设备。/dev/sdb 是新磁盘（500G，没有分区，没有挂载点）。' },
      { title: '创建分区', cmd: 'sudo fdisk /dev/sdb\n# n (新建分区) → p (主分区) → 1 → 回车 → 回车 → w (写入)', output: 'Command (m for help): n\nPartition type: p\nPartition number: 1\nFirst sector: (default)\nLast sector: (default)\nCommand (m for help): w', explain: 'fdisk 交互式分区。n 新建，p 主分区，1 分区号，回车用默认值，w 写入。大磁盘（>2TB）用 parted 支持 GPT。' },
      { title: '格式化', cmd: 'sudo mkfs.ext4 /dev/sdb1', output: 'mke2fs 1.46.5 (30-Dec-2021)\nCreating filesystem with 131072000 4k blocks and 32768000 inodes', explain: 'mkfs.ext4 格式化为 ext4。⚠️ 格式化会清空分区所有数据。mkfs.xfs 格式化为 xfs（大文件更快）。' },
      { title: '挂载 + fstab', cmd: 'sudo mount /dev/sdb1 /data && sudo blkid /dev/sdb1', output: '/dev/sdb1: UUID="12345678-1234-1234-1234-123456789abc" TYPE="ext4"', explain: 'mount 临时挂载。blkid 获取 UUID。写入 /etc/fstab：UUID=xxx /data ext4 defaults 0 2。mount -a 测试。' },
    ],
    diagnosis: [
      { symptom: 'lsblk 看不到新磁盘', cause: '磁盘没插好，或者内核没识别。虚拟机可能需要重新扫描 SCSI 总线。', fix: 'echo "- - -" > /sys/class/scsi_host/host0/scan 重新扫描。或者重启。' },
      { symptom: 'fdisk 报 "Device does not contain a recognized partition table"', cause: '新磁盘没有分区表。这是正常的，fdisk 会创建。', fix: '继续 fdisk 操作，n 创建分区，w 写入。或者用 parted mklabel gpt 创建 GPT 分区表（>2TB 磁盘）。' },
      { symptom: 'mount 后重启磁盘没了', cause: '没写入 /etc/fstab。mount 是临时的，重启后失效。', fix: 'blkid /dev/sdb1 获取 UUID。写入 /etc/fstab：UUID=xxx /data ext4 defaults 0 2。mount -a 测试。' },
    ],
    exercises: [
      { level: '基础', task: '列出系统所有磁盘和分区，显示大小、文件系统类型、挂载点', hint: 'lsblk -f', answer: 'lsblk -f\n\n# 或者更详细：\nlsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT,UUID | grep -v "^$"' },
      { level: '进阶', task: '写一个"自动挂载脚本"，检测新磁盘并自动分区、格式化、挂载', hint: 'lsblk 找未挂载磁盘 + fdisk + mkfs + mount', answer: '#!/bin/bash\necho "检测未挂载的磁盘..."\nfor disk in $(lsblk -dpno NAME,TYPE | grep "disk" | awk \'{print $1}\'); do\n  # 检查是否有分区\n  if ! lsblk "$disk" | grep -q "part"; then\n    echo "发现未分区磁盘: $disk"\n    read -p "自动分区、格式化、挂载？(y/n) " confirm\n    if [ "$confirm" = "y" ]; then\n      # 创建分区\n      echo -e "n\\np\\n1\\n\\n\\nw" | sudo fdisk "$disk"\n      \n      # 格式化\n      partition="${disk}1"\n      sudo mkfs.ext4 "$partition"\n      \n      # 挂载\n      mount_point="/mnt/$(basename $disk)"\n      sudo mkdir -p "$mount_point"\n      sudo mount "$partition" "$mount_point"\n      \n      # 写入 fstab\n      uuid=$(sudo blkid -o value -s UUID "$partition")\n      echo "UUID=$uuid $mount_point ext4 defaults 0 2" | sudo tee -a /etc/fstab\n      \n      echo "已完成: $partition → $mount_point"\n    fi\n  fi\ndone' },
      { level: '挑战', task: '写一个"磁盘迁移脚本"，把旧磁盘的数据完整复制到新磁盘，并更新 fstab', hint: 'dd 或 rsync + blkid + 修改 fstab', answer: '#!/bin/bash\nOLD_DISK=$1  # 如 /dev/sda1\nNEW_DISK=$2  # 如 /dev/sdb1\nMOUNT_POINT=$(mount | grep "$OLD_DISK" | awk \'{print $3}\')\n\nif [ -z "$MOUNT_POINT" ]; then\n  echo "错误: $OLD_DISK 未挂载"\n  exit 1\nfi\n\necho "=== 磁盘迁移 ==="\necho "旧磁盘: $OLD_DISK (挂载点: $MOUNT_POINT)"\necho "新磁盘: $NEW_DISK"\necho ""\n\n# 1. 格式化新磁盘\necho "格式化新磁盘..."\nsudo mkfs.ext4 "$NEW_DISK"\n\n# 2. 挂载到临时目录\nTEMP_MOUNT="/tmp/migrate-$$"\nsudo mkdir -p "$TEMP_MOUNT"\nsudo mount "$NEW_DISK" "$TEMP_MOUNT"\n\n# 3. 复制数据\necho "复制数据..."\nsudo rsync -avh --progress "$MOUNT_POINT/" "$TEMP_MOUNT/"\n\n# 4. 更新 fstab\necho "更新 fstab..."\nOLD_UUID=$(sudo blkid -o value -s UUID "$OLD_DISK")\nNEW_UUID=$(sudo blkid -o value -s UUID "$NEW_DISK")\nsudo sed -i "s/$OLD_UUID/$NEW_UUID/g" /etc/fstab\n\n# 5. 卸载并重新挂载\necho "重新挂载..."\nsudo umount "$TEMP_MOUNT"\nsudo umount "$MOUNT_POINT"\nsudo mount "$MOUNT_POINT"\n\necho "迁移完成！"\necho "旧磁盘 $OLD_DISK 可以安全移除"' },
    ],
    prereqs: ['lsblk — 看块设备', 'mount/umount — 挂载/卸载'],
    nextSteps: ['LVM — 逻辑卷管理', 'RAID — 磁盘冗余阵列'],
  },
};
