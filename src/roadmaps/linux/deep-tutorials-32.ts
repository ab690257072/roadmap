import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_32: Record<string, DeepTutorial> = {
  "AwQJYL60NNbA5_z7iLcM7": {
    mentalModel: 'inode 是文件的"身份证号"——存储文件的元数据（权限、大小、时间、数据块位置），但不存文件名。文件名存在目录里。',
    handsOn: [
      { title: '看文件的 inode', cmd: 'ls -i /etc/passwd /etc/hosts', output: '123456 /etc/passwd\n789012 /etc/hosts', explain: 'ls -i 显示 inode 号。两个硬链接的 inode 相同（同一份数据）。软链接的 inode 不同（独立文件）。' },
      { title: '看 inode 使用情况', cmd: 'df -i', output: 'Filesystem       Inodes   IUsed   IFree IUse% Mounted on\n/dev/sda1       6553600  234567 6319033    4% /\n/dev/sdb1      32768000 8901234 23866766   27% /data', explain: 'df -i 看 inode 使用率。Use% 100% 就不能创建新文件了（即使磁盘还有空间）。小文件多时 inode 可能先满。' },
      { title: '看 inode 详细信息', cmd: 'stat /etc/passwd', output: '  File: /etc/passwd\n  Size: 2843       Blocks: 8          IO Block: 4096   regular file\nDevice: 801h/2049d      Inode: 123456      Links: 1', explain: 'stat 显示文件大小、块数、inode 号、硬链接数、权限、时间戳。比 ls -l 更详细。' },
      { title: '找出 inode 耗尽的原因', cmd: 'find /var -xdev -printf \'%h\\n\' | sort | uniq -c | sort -rn | head -10', output: '   5678 /var/lib/dpkg/info\n   3456 /var/lib/apt/lists\n   2345 /var/cache/apt/archives', explain: '统计每个目录的文件数。找出文件最多的目录，通常是包管理器的缓存或日志。' },
    ],
    diagnosis: [
      { symptom: '创建文件报 "No space left on device" 但 df -h 显示还有空间', cause: 'inode 用完了。df -h 看磁盘空间，df -i 看 inode 空间。小文件多时 inode 可能先满。', fix: 'df -i 确认。find /path -type f | wc -l 统计文件数。删除不需要的小文件。' },
      { symptom: 'inode 使用率 100% 但找不到大目录', cause: '文件分散在很多目录，或者有大量隐藏文件（.开头的）。', fix: 'find / -xdev -type f | wc -l 统计总文件数。find / -xdev -printf \'%h\\n\' | sort | uniq -c | sort -rn | head -20 找文件最多的目录。' },
      { symptom: '删除大量小文件很慢', cause: 'rm * 参数太多（Argument list too long）。或者文件系统需要逐个更新元数据。', fix: 'find /path -type f -delete（比 rm 快）。或者 rsync -a --delete empty_dir/ target_dir/（用空目录覆盖，最快）。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前分区的 inode 使用情况，找出使用率最高的分区', hint: 'df -i + sort', answer: 'df -i | grep -v tmpfs | sort -k5 -rh | head -5\n\necho ""\necho "当前目录文件数:"\nfind . -type f | wc -l' },
      { level: '进阶', task: '写一个脚本，监控 inode 使用率，超过 80% 就报警', hint: 'df -i + awk + 条件判断', answer: '#!/bin/bash\nTHRESHOLD=80\n\ndf -i | grep -v "Filesystem" | while read fs inodes iused ifree iuse mount; do\n  use_pct=${iuse%%%}  # 去掉 % 符号\n  if [ "$use_pct" -gt "$THRESHOLD" ]; then\n    echo "ALERT: $mount inode 使用率 $iuse > $THRESHOLD%"\n    echo "  Inodes: $inodes, Used: $iused, Free: $ifree"\n    echo "  文件最多的目录:"\n    find "$mount" -xdev -printf \'%h\\n\' 2>/dev/null | sort | uniq -c | sort -rn | head -5\n    echo "" | mail -s "Inode Alert: $mount" admin@example.com\n  fi\ndone' },
      { level: '挑战', task: '写一个"inode 清理器"，找出并删除指定目录下的空文件、0 字节文件、重复文件', hint: 'find -empty + find -size 0 + fdupes', answer: '#!/bin/bash\nTARGET=${1:-.}\n\necho "=== Inode 清理器 ==="\necho "目标目录: $TARGET"\necho ""\n\necho "--- 空目录 ---"\nfind "$TARGET" -type d -empty 2>/dev/null | head -10\necho ""\n\necho "--- 0 字节文件 ---"\nfind "$TARGET" -type f -size 0 2>/dev/null | head -10\necho ""\n\necho "--- 重复文件（需要 fdupes）---"\nif command -v fdupes > /dev/null; then\n  fdupes -r "$TARGET" 2>/dev/null | head -20\nelse\n  echo "fdupes 未安装，跳过"\nfi\n\necho ""\nread -p "确认删除？(y/n) " confirm\nif [ "$confirm" = "y" ]; then\n  find "$TARGET" -type d -empty -delete\n  find "$TARGET" -type f -size 0 -delete\n  echo "已清理"\nfi' },
    ],
    prereqs: ['ls -l — 看文件信息', 'df — 看磁盘空间'],
    nextSteps: ['文件系统 — ext4/xfs/btrfs 的区别', 'LVM — 逻辑卷管理'],
  },
};
