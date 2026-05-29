import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_37: Record<string, DeepTutorial> = {
  "I3LNa1cM_zRkBy8wKdz3g": {
    mentalModel: 'LVM（Logical Volume Manager）把多块磁盘合成一个"存储池"，然后按需切出逻辑卷。类似云盘：物理磁盘是底层存储，LVM 是虚拟化层，逻辑卷是你实际用的"分区"。',
    handsOn: [
      { title: '看 LVM 状态', cmd: 'sudo pvs && sudo vgs && sudo lvs', output: '  PV         VG        Fmt  Attr PSize   PFree\n  /dev/sda2  ubuntu-vg lvm2 a--  <49.00g     0\n  \n  VG        #PV #LV #SN Attr   VSize   VFree\n  ubuntu-vg   1   1   0 wz--n- <49.00g     0\n  \n  LV        VG        Attr       LSize   Pool Origin Data%  Meta%\n  ubuntu-lv ubuntu-vg -wi-ao---- <49.00g', explain: 'pvs 看物理卷（PV），vgs 看卷组（VG），lvs 看逻辑卷（LV）。PV 是物理磁盘，VG 是存储池，LV 是切出来的"分区"。' },
      { title: '扩展逻辑卷', cmd: 'sudo lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv && sudo resize2fs /dev/ubuntu-vg/ubuntu-lv', output: 'Size of logical volume ubuntu-vg/ubuntu-lv changed from 49.00 GiB to 99.00 GiB.\nresize2fs 1.46.5: resizing filesystem on /dev/ubuntu-vg/ubuntu-lv', explain: 'lvextend 扩展 LV 大小。-l +100%FREE 用掉所有剩余空间。resize2fs 扩展文件系统（ext4）。xfs 用 xfs_growfs。' },
      { title: '添加新磁盘到 VG', cmd: 'sudo pvcreate /dev/sdb1 && sudo vgextend ubuntu-vg /dev/sdb1', output: 'Physical volume "/dev/sdb1" successfully created.\nVolume group "ubuntu-vg" successfully extended', explain: 'pvcreate 初始化新磁盘为 PV。vgextend 把它加入 VG。然后 LV 就能用新磁盘的空间了。' },
      { title: '创建快照', cmd: 'sudo lvcreate -L 10G -s -n snap /dev/ubuntu-vg/ubuntu-lv && sudo lvs', output: 'Logical volume "snap" created.\n  LV        VG        Attr       LSize   Pool Origin    Data%\n  snap      ubuntu-vg swi-a-s---  10.00g    ubuntu-lv   0.00', explain: '-s 创建快照。-L 10G 快照大小。-n snap 快照名。快照保存某一时刻的状态，备份后删掉。' },
    ],
    diagnosis: [
      { symptom: 'lvextend 报 "Insufficient free space"', cause: '卷组（VG）没有剩余空间了。', fix: 'vgs 看 VFree。如果 VFree 是 0，需要添加新磁盘：pvcreate /dev/sdb1 && vgextend vg-name /dev/sdb1。' },
      { symptom: 'resize2fs 报 "device is mounted"', cause: 'ext4 支持在线扩展（挂载状态下），但某些旧版本不支持。', fix: '检查内核版本：uname -r。3.0+ 支持在线扩展。如果不行，umount 后再 resize2fs。' },
      { symptom: '快照占满空间后自动删除', cause: '快照空间不够了（Data% 100%）。快照只存变化的数据，变化太多就满了。', fix: '创建更大的快照：lvcreate -L 50G -s ...。或者定期删除旧快照重新创建。' },
    ],
    exercises: [
      { level: '基础', task: '查看系统的 LVM 配置，画出 PV → VG → LV 的关系图', hint: 'pvs/vgs/lvs + 手工整理', answer: 'echo "=== LVM 配置 ==="\necho ""\necho "物理卷 (PV):"\nsudo pvs --noheadings | awk \'{printf "  %s → VG: %s, 大小: %s, 剩余: %s\\n", $1, $2, $5, $6}\'\n\necho ""\necho "卷组 (VG):"\nsudo vgs --noheadings | awk \'{printf "  %s: %s PV, %s LV, 总大小: %s, 剩余: %s\\n", $1, $2, $3, $6, $7}\'\n\necho ""\necho "逻辑卷 (LV):"\nsudo lvs --noheadings | awk \'{printf "  %s/%s: 大小 %s, 属性 %s\\n", $2, $1, $4, $3}\'' },
      { level: '进阶', task: '写一个脚本，自动扩展根目录到最大可用空间', hint: 'lvextend +l +100%FREE + resize2fs', answer: '#!/bin/bash\n# 找到根目录对应的 LV\nROOT_LV=$(df / | tail -1 | awk \'{print $1}\')\n\necho "根目录 LV: $ROOT_LV"\necho ""\n\necho "扩展前:"\nsudo lvs "$ROOT_LV" --noheadings\n\necho ""\necho "扩展 LV..."\nsudo lvextend -l +100%FREE "$ROOT_LV"\n\necho ""\necho "扩展文件系统..."\nsudo resize2fs "$ROOT_LV"\n\necho ""\necho "扩展后:"\nsudo lvs "$ROOT_LV" --noheadings\ndf -h /' },
      { level: '挑战', task: '写一个"自动快照备份"脚本，每天创建快照，保留最近 7 天', hint: 'lvcreate -s + 删除旧快照 + cron', answer: '#!/bin/bash\nVG="ubuntu-vg"\nLV="ubuntu-lv"\nSNAP_PREFIX="snap"\nKEEP_DAYS=7\n\n# 创建今天的快照\nDATE=$(date +%Y%m%d)\nSNAP_NAME="${SNAP_PREFIX}-${DATE}"\n\necho "创建快照: $SNAP_NAME"\nsudo lvcreate -L 50G -s -n "$SNAP_NAME" "/dev/$VG/$LV"\n\n# 删除 7 天前的快照\necho ""\necho "清理旧快照..."\nfor old_snap in $(sudo lvs --noheadings -o lv_name | grep "^${SNAP_PREFIX}-" | tr -d \' \'); do\n  snap_date=${old_snap#${SNAP_PREFIX}-}\n  if [ "$(( ($(date +%s) - $(date -d "$snap_date" +%s)) / 86400 ))" -gt "$KEEP_DAYS" ]; then\n    echo "删除: $old_snap"\n    sudo lvremove -f "/dev/$VG/$old_snap"\n  fi\ndone\n\necho ""\necho "当前快照:"\nsudo lvs | grep "$SNAP_PREFIX"\n\n# 加到 crontab（每天凌晨 2 点执行）：\n# 0 2 * * * /path/to/snapshot-backup.sh' },
    ],
    prereqs: ['lsblk — 看块设备', 'mount/umount — 挂载/卸载'],
    nextSteps: ['RAID — 磁盘冗余阵列', '存储区域网络 — SAN/NAS'],
  },
};
