import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_11: Record<string, DeepTutorial> = {
  "TZuDVFS7DZFBgaSYYXoGe": {
    mentalModel: 'expand 把 Tab 转成空格——像度量衡转换，英制和公制说的是同一件事但数字不同。',
    handsOn: [
      { title: 'Tab 转空格', cmd: 'printf "a\\tb\\tc\\n" | expand', output: 'a       b       c', explain: '默认 1 Tab = 8 空格。expand 考虑 Tab stop 位置（每 8 列一个停止点），不是简单替换。' },
      { title: '自定义 Tab 宽度', cmd: 'printf "a\\tb\\tc\\n" | expand -t 4', output: 'a   b   c', explain: '-t 4 设置 Tab 宽度为 4 空格。代码常用 2 或 4 空格缩进。' },
      { title: '只转行首 Tab', cmd: 'printf "\\thello\\tworld\\n" | expand -i', output: '        hello\tworld', explain: '-i（initial）只转换行首的 Tab（缩进），保留中间的 Tab 不变。适合统一代码缩进风格。' },
      { title: '验证转换', cmd: 'printf "a\\tb\\n" | expand | cat -A', output: 'a       b$', explain: 'cat -A 显示 Tab 为 ^I、行尾为 $。转换前后对比，确认 Tab 被替换成空格。' },
    ],
    diagnosis: [
      { symptom: 'expand 后对齐还是不对', cause: '原始文件混用了 Tab 和空格。expand 只转 Tab，不处理已有的空格。', fix: '先用 unexpand 统一成 Tab，再用 expand 转成空格。或者用编辑器（如 VS Code）的"Convert Indentation"功能。' },
      { symptom: 'expand 和 tr \'\\t\' \' \' 结果不同', cause: 'expand 考虑 Tab stop 位置（每 8 列对齐），tr 只是简单的一对一字符替换。', fix: '需要对齐用 expand，简单替换用 tr。' },
    ],
    exercises: [
      { level: '基础', task: '把一个用 Tab 缩进的文件转成 2 空格缩进', hint: 'expand -t 2', answer: 'expand -t 2 file.txt > file_spaces.txt\n\n# 验证：\nhead -5 file.txt | cat -A\nhead -5 file_spaces.txt | cat -A' },
      { level: '进阶', task: '写一个脚本，把目录下所有 .py 文件的 Tab 缩进转成 4 空格', hint: 'find + expand -i -t 4', answer: '#!/bin/bash\nfind . -name "*.py" | while read f; do\n  expand -i -t 4 "$f" > "$f.tmp"\n  mv "$f.tmp" "$f"\n  echo "已转换: $f"\ndone' },
      { level: '挑战', task: '写一个函数，检测文件是 Tab 缩进还是空格缩进，并统计缩进宽度', hint: 'grep "^\\t" 检测 Tab，grep "^  " 检测空格，计算连续空格数', answer: 'detect-indent() {\n  local file=$1\n  local tab_count=$(grep -c "^\\t" "$file" 2>/dev/null || echo 0)\n  local space_count=$(grep -c "^  " "$file" 2>/dev/null || echo 0)\n  \n  if [ "$tab_count" -gt "$space_count" ]; then\n    echo "Tab 缩进 ($tab_count 行)"\n  elif [ "$space_count" -gt 0 ]; then\n    # 统计最常见的缩进宽度\n    local width=$(grep -o "^ *" "$file" | awk \'{print length}\' | sort | uniq -c | sort -rn | head -1 | awk \'$1 > 1 {print $2}\')\n    echo "空格缩进 (${width:-2} 空格, $space_count 行)"\n  else\n    echo "无缩进或混合缩进"\n  fi\n}' },
    ],
    prereqs: ['cat -A — 看隐藏字符'],
    nextSteps: ['unexpand — 空格转回 Tab', '编辑器配置 — .editorconfig 统一缩进'],
  },

  "NIBSZGE9PskVrluJpdom0": {
    mentalModel: 'root 是超级管理员，能改任何文件、杀任何进程。sudo 让你临时获得 root 权限——输你自己的密码，不是 root 密码。',
    handsOn: [
      { title: '看当前用户', cmd: 'whoami && id', output: 'tu\nuid=1000(tu) gid=1000(tu) groups=1000(tu),27(sudo),999(docker)', explain: 'whoami 显示用户名。id 显示 UID、GID、所属组。UID 0 是 root，1000 通常是第一个普通用户。' },
      { title: 'sudo 执行命令', cmd: 'sudo apt update', output: '[sudo] password for tu:\nHit:1 http://archive.ubuntu.com/ubuntu jammy InRelease', explain: 'sudo 以 root 身份运行命令。输入你自己的密码（不是 root 密码）。sudo 记录在 /var/log/auth.log 里，可审计。' },
      { title: '看 sudo 权限', cmd: 'sudo -l', output: 'User tu may run the following commands:\n    (ALL : ALL) ALL', explain: 'sudo -l 查看你有哪些 sudo 权限。(ALL : ALL) ALL 表示可以以任何用户身份运行任何命令。' },
      { title: '切换到 root', cmd: 'sudo -i', output: 'root@prod-web-01:~#', explain: 'sudo -i 切换到 root 账户（类似 su -）。提示符从 $ 变成 #。exit 回到普通用户。推荐用 sudo 而不是 su。' },
    ],
    diagnosis: [
      { symptom: 'sudo 报 "user is not in the sudoers file"', cause: '你的用户没被授权 sudo。/etc/sudoers 里没有你的条目。', fix: '用 root 账户（或让管理员）运行 visudo，加一行：youruser ALL=(ALL) ALL。或者加到 sudo 组：usermod -aG sudo youruser。' },
      { symptom: 'sudo 每次都要输密码很烦', cause: 'sudo 默认每次都要验证密码（5 分钟内重复 sudo 不用再输）。', fix: 'visudo 加 NOPASSWD：youruser ALL=(ALL) NOPASSWD: ALL。⚠️ 安全风险：如果账户被入侵，攻击者可以直接 root。' },
      { symptom: 'sudo 编辑文件后普通用户看不了', cause: 'sudo 创建的文件所有者是 root，权限通常是 644（其他人只能读）。如果权限是 600（只有 root 读写），普通用户连读都不行。', fix: 'sudo chmod 644 /path/to/file 加读权限。或者 sudo chown youruser:yourgroup /path/to/file 改成你的。' },
    ],
    exercises: [
      { level: '基础', task: '用 sudo 查看 /etc/shadow（普通用户没权限读的文件）', hint: 'sudo cat /etc/shadow', answer: 'sudo cat /etc/shadow | head -5\n\n# 或者用 sudo less 翻页看：\nsudo less /etc/shadow' },
      { level: '进阶', task: '创建一个新用户，给它 sudo 权限，但只能运行 systemctl restart nginx', hint: 'useradd + visudo 限制命令', answer: '# 创建用户\nsudo useradd -m -s /bin/bash newuser\nsudo passwd newuser\n\n# 限制 sudo 权限\nsudo visudo\n# 加一行：\n# newuser ALL=(ALL) /bin/systemctl restart nginx\n\n# 测试\nsu - newuser\nsudo systemctl restart nginx  # 应该成功\nsudo apt update               # 应该失败' },
      { level: '挑战', task: '写一个脚本，列出所有有 sudo 权限的用户', hint: 'getent group sudo 看 sudo 组成员，grep "^sudo" /etc/sudoers 看 sudoers 文件', answer: '#!/bin/bash\necho "=== sudo 组成员 ==="\ngetent group sudo | cut -d: -f4 | tr "," "\\n"\n\necho ""\necho "=== sudoers 文件中的用户 ==="\nsudo grep -E "^[^#].*ALL" /etc/sudoers | awk \'{print $1}\'\n\necho ""\necho "=== wheel 组成员（RHEL/CentOS）==="\ngetent group wheel 2>/dev/null | cut -d: -f4 | tr "," "\\n"' },
    ],
    prereqs: ['用户管理 — useradd/usermod', '文件权限 — chmod/chown'],
    nextSteps: ['visudo — 配置 sudo 权限', 'PAM — 可插拔认证模块'],
  },
};
