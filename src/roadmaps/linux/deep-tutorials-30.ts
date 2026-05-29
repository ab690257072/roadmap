import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_30: Record<string, DeepTutorial> = {
  "L6RMExeqi9501y-eCHDt1": {
    mentalModel: '文件权限不只是 chmod 755。还有 setuid（4000）、setgid（2000）、sticky bit（1000）。这些特殊权限位让文件/目录有额外行为。',
    handsOn: [
      { title: '查看特殊权限', cmd: 'ls -la /usr/bin/passwd /tmp /var/mail', output: '-rwsr-xr-x 1 root root 68208 Jan 10  /usr/bin/passwd\ndrwxrwxrwt 18 root root  4096 Jan 15  /tmp\ndrwxrwsr-x  2 root mail  4096 Jan 10  /var/mail', explain: 's 在 user 位 = setuid（4000），s 在 group 位 = setgid（2000），t 在 other 位 = sticky bit（1000）。' },
      { title: 'setuid：以文件所有者权限运行', cmd: 'ls -la /usr/bin/passwd && passwd', output: '-rwsr-xr-x 1 root root 68208 Jan 10  /usr/bin/passwd\n（普通用户可以改自己的密码）', explain: '/usr/bin/passwd 有 setuid（s 在 user 位）。普通用户执行时以 root 权限运行（因为文件所有者是 root），所以能改 /etc/shadow。' },
      { title: 'setgid 目录：新文件继承组', cmd: 'chmod g+s /shared && ls -ld /shared', output: 'drwxrwsr-x 2 root devteam 4096 Jan 15 /shared', explain: '目录有 setgid（s 在 group 位）时，新建文件自动继承目录的组（devteam），而不是创建者的主组。适合共享目录。' },
      { title: 'sticky bit：只能删自己的文件', cmd: 'chmod +t /tmp && ls -ld /tmp', output: 'drwxrwxrwt 18 root root 4096 Jan 15 /tmp', explain: '/tmp 有 sticky bit（t 在 other 位）。所有人都能写 /tmp，但只能删自己创建的文件。防止用户互相删除文件。' },
    ],
    diagnosis: [
      { symptom: 'setuid 程序报 "Operation not permitted"', cause: '文件系统挂载时加了 nosuid 选项（安全考虑）。setuid 被忽略。', fix: 'mount | grep nosuid 检查。如果没必要，重新挂载去掉 nosuid：mount -o remount,suid /mount/point。' },
      { symptom: 'setgid 目录的新文件组不对', cause: '用户没在 setgid 指定的组里。或者文件系统不支持 setgid（如某些 NFS）。', fix: 'usermod -aG groupname user 把用户加到组。或者检查文件系统类型：df -T。' },
      { symptom: 'sticky bit 没生效', cause: '目录权限不对。sticky bit 只在目录的 other 位有写权限时才有意义。', fix: 'chmod 1777 /dir（rwxrwxrwt）或者 chmod o+t /dir。确保 other 有写权限。' },
    ],
    exercises: [
      { level: '基础', task: '创建一个共享目录 /project，设置 setgid，让所有 devteam 成员创建的文件自动属于 devteam 组', hint: 'mkdir + chgrp + chmod g+s', answer: 'sudo mkdir /project\nsudo chgrp devteam /project\nsudo chmod 2775 /project  # 2 = setgid, 775 = rwxrwxr-x\nls -ld /project\n\n# 测试：\nsu - alice  # alice 是 devteam 成员\ntouch /project/test.txt\nls -l /project/test.txt  # 组应该是 devteam' },
      { level: '进阶', task: '找出系统里所有 setuid 程序（潜在安全风险）', hint: 'find / -perm -4000', answer: 'echo "=== setuid 程序 ==="\nsudo find / -type f -perm -4000 2>/dev/null | while read file; do\n  ls -l "$file"\ndone\n\necho ""\necho "=== setgid 程序 ==="\nsudo find / -type f -perm -2000 2>/dev/null | while read file; do\n  ls -l "$file"\ndone' },
      { level: '挑战', task: '写一个"安全审计脚本"，检查常见权限问题（777 文件、setuid 程序、世界可写目录）', hint: 'find -perm 777 + find -perm -4000 + find -perm -0002', answer: '#!/bin/bash\necho "=== 权限安全审计 $(date) ==="\necho ""\n\necho "--- 777 权限的文件（任何人都能读写执行）---"\nsudo find / -type f -perm 777 2>/dev/null | head -10\necho ""\n\necho "--- setuid 程序（以 root 权限运行）---"\nsudo find / -type f -perm -4000 2>/dev/null | head -10\necho ""\n\necho "--- 世界可写目录（没有 sticky bit）---"\nsudo find / -type d -perm -0002 ! -perm -1000 2>/dev/null | head -10\necho ""\n\necho "--- 没有所有者的文件（孤儿文件）---"\nsudo find / -nouser -o -nogroup 2>/dev/null | head -10' },
    ],
    prereqs: ['chmod — 基础权限', '文件所有权 — chown/chgrp'],
    nextSteps: ['ACL — 更细粒度的权限控制', 'SELinux/AppArmor — 强制访问控制'],
  },
};
