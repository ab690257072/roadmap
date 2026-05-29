import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_26: Record<string, DeepTutorial> = {
  "h8wc8XEwWYHErna68w7Mg": {
    mentalModel: 'Linux 用户属于组（group）。组用来批量管理权限。/etc/group 存组信息。usermod -aG 把用户加到组。',
    handsOn: [
      { title: '查看用户的组', cmd: 'groups && id', output: 'tu sudo docker\nuid=1000(tu) gid=1000(tu) groups=1000(tu),27(sudo),999(docker)', explain: 'groups 显示当前用户属于哪些组。id 更详细，显示 UID、GID、所有组。主组（primary group）通常和用户名相同。' },
      { title: '查看所有组', cmd: 'cat /etc/group | tail -10', output: 'docker:x:999:tu\nsudo:x:27:tu\nwww-data:x:33:\nmysql:x:118:', explain: '/etc/group 格式：组名:密码占位:GID:成员列表（逗号分隔）。root 组的成员通常为空（因为 root 用户的主组就是 root）。' },
      { title: '把用户加到组', cmd: 'sudo usermod -aG docker tu && groups', output: 'tu sudo docker', explain: 'usermod -aG group user 把用户加到组。-a（append）追加，不加 -a 会覆盖现有附加组。改完组后用户需要重新登录才生效。' },
      { title: '创建新组', cmd: 'sudo groupadd developers && sudo usermod -aG developers tu', output: '（无输出，成功）', explain: 'groupadd 创建新组。groupdel 删除组。gpasswd -a user group 也能加用户到组（等价于 usermod -aG）。' },
    ],
    diagnosis: [
      { symptom: 'usermod -aG 后用户还是没有新组的权限', cause: '组变更需要重新登录才生效。当前 shell 还是旧的组列表。', fix: '退出终端重新登录。或者 newgrp groupname 立即切换到新组（只影响当前 shell）。' },
      { symptom: 'usermod -G docker 后用户的其他组没了', cause: '-G 设置附加组（覆盖），不是追加。没加 -a（append）。', fix: 'usermod -aG docker user 加 -a 追加。或者 usermod -G group1,group2,docker user 一次性设所有组。' },
      { symptom: '文件权限显示组名而不是 GID', cause: 'ls -l 默认显示组名。如果组不存在了（被删了），会显示 GID。', fix: 'ls -n 显示 GID 而不是组名。或者重新创建组：groupadd -g GID groupname。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前用户属于哪些组，找出主组（primary group）', hint: 'id 命令', answer: 'id\n\n# 主组是 gid= 后面的组\n# 或者：\nid -gn  # 只显示主组名\nid -Gn  # 显示所有组名' },
      { level: '进阶', task: '创建一个 "webteam" 组，把 3 个用户加进去，设置 /var/www 目录的组为 webteam', hint: 'groupadd + usermod -aG + chgrp', answer: 'sudo groupadd webteam\nsudo usermod -aG webteam alice\nsudo usermod -aG webteam bob\nsudo usermod -aG webteam carol\n\nsudo chgrp -R webteam /var/www\nsudo chmod -R 775 /var/www  # 组成员可读写' },
      { level: '挑战', task: '写一个脚本，列出所有"没有附加组"的用户（只有主组）', hint: '遍历 /etc/passwd，对每个用户检查 id -Gn 的输出', answer: '#!/bin/bash\necho "=== 只有主组的用户 ==="\nwhile IFS=: read -r username _ uid _; do\n  # 跳过系统用户（UID < 1000）\n  [ "$uid" -lt 1000 ] 2>/dev/null && continue\n  \n  # 获取所有组\n  groups=$(id -Gn "$username" 2>/dev/null | wc -w)\n  \n  # 如果只有 1 个组（主组），输出\n  if [ "$groups" -eq 1 ]; then\n    echo "$username (主组: $(id -gn $username))"\n  fi\ndone < /etc/passwd' },
    ],
    prereqs: ['用户管理 — useradd/usermod', '文件权限 — chmod/chgrp'],
    nextSteps: ['setgid 目录 — 新文件自动继承目录的组', 'ACL — 更细粒度的权限控制'],
  },
};
