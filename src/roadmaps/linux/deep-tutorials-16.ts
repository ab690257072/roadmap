import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_16: Record<string, DeepTutorial> = {
  "KaXHG_EKxI5PUXmcvlJt6": {
    mentalModel: '软链接像快捷方式（指向路径），硬链接像别名（指向同一个文件数据）。软链接的目标被删后链接就断了，硬链接不会。',
    handsOn: [
      { title: '创建软链接', cmd: 'ln -s /var/log/syslog ~/syslog-link && ls -la ~/syslog-link', output: 'lrwxrwxrwx 1 tu staff 15 Jan 15 14:30 /home/tu/syslog-link -> /var/log/syslog', explain: 'ln -s target link 创建软链接。ls -l 显示 link -> target。软链接可以指向目录，可以跨文件系统。' },
      { title: '创建硬链接', cmd: 'ln /etc/hostname ~/hostname-hard && ls -li /etc/hostname ~/hostname-hard', output: '123456 -rw-r--r-- 2 root root 12 Jan 10 09:00 /etc/hostname\n123456 -rw-r--r-- 2 root root 12 Jan 10 09:00 /home/tu/hostname-hard', explain: 'ln target link 创建硬链接（不加 -s）。两个文件名指向同一个 inode（123456）。删掉一个，另一个照常使用。' },
      { title: '软链接 vs 硬链接', cmd: 'rm /etc/hostname && cat ~/syslog-link && cat ~/hostname-hard', output: 'cat: /home/tu/syslog-link: No such file or directory\nprod-web-01', explain: '删掉目标文件后：软链接断了（红色显示），硬链接还能用（数据还在，inode 引用计数 > 0）。' },
      { title: '部署技巧：用软链接做零停机切换', cmd: 'ln -sfn app-v2.jar app.jar', output: '（app.jar 现在指向 app-v2.jar）', explain: '-s 软链接，-f 覆盖已有的，-n 不跟踪旧链接。改一行链接就完成版本切换。回滚只需要 ln -sfn app-v1.jar app.jar。' },
    ],
    diagnosis: [
      { symptom: '软链接显示红色（broken symlink）', cause: '目标文件被删除或移动了。软链接指向的路径不存在了。', fix: 'rm link 删除断链。或者重新创建指向正确路径的链接。' },
      { symptom: '硬链接创建失败 "Invalid cross-device link"', cause: '硬链接不能跨文件系统。/home 和 /mnt/usb 是不同的文件系统。', fix: '用软链接代替：ln -s /mnt/usb/file ~/link。软链接可以跨文件系统。' },
      { symptom: 'ln 报 "File exists"', cause: '链接名已存在。ln 默认不覆盖。', fix: 'ln -sf 强制覆盖（-f force）。或者先 rm 旧链接再创建。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个软链接指向 /var/log，放在家目录叫 logs', hint: 'ln -s /var/log ~/logs', answer: 'ln -s /var/log ~/logs\nls -la ~/logs\ncd ~/logs && pwd  # 应该在 /var/log' },
      { level: '进阶', task: '验证硬链接和软链接的区别：创建两种链接，删除原文件，看哪个还能用', hint: 'ln 和 ln -s，然后 rm 原文件', answer: 'echo "test data" > /tmp/original.txt\nln /tmp/original.txt /tmp/hard-link.txt\nln -s /tmp/original.txt /tmp/soft-link.txt\n\nls -li /tmp/original.txt /tmp/hard-link.txt /tmp/soft-link.txt\n\nrm /tmp/original.txt\n\ncat /tmp/hard-link.txt  # 还能用\ncat /tmp/soft-link.txt  # 报错：No such file or directory' },
      { level: '挑战', task: '写一个脚本，找出当前目录下所有的 broken symlinks（断链）', hint: 'find -L -type l 或 find -xtype l', answer: '#!/bin/bash\necho "查找断链..."\nfind . -xtype l 2>/dev/null\n\n# 或者用 -L 跟随链接：\nfind -L . -type l 2>/dev/null\n\n# 删除所有断链：\nfind . -xtype l -delete' },
    ],
    prereqs: ['ls -l — 看文件信息和链接', 'inode — 理解文件的底层标识'],
    nextSteps: ['rsync -a — 保留链接的同步', '部署策略 — 用软链接做蓝绿部署'],
  },
};
