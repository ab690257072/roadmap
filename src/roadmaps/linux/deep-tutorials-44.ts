import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_44: Record<string, DeepTutorial> = {
  "2oQiuQ2j02SCt9t5eV6hg": {
    mentalModel: '软件源（repository）是 Linux 的"应用商店服务器"——apt 从这些服务器下载软件。/etc/apt/sources.list 定义了从哪下载。',
    handsOn: [
      { title: '看当前软件源', cmd: 'cat /etc/apt/sources.list', output: 'deb http://archive.ubuntu.com/ubuntu jammy main restricted\ndeb http://security.ubuntu.com/ubuntu jammy-security main restricted', explain: '每行格式：deb URI distribution component。deb 是二进制包，URI 是服务器地址，distribution 是版本代号（jammy），component 是分类（main/restricted）。' },
      { title: '添加 PPA', cmd: 'sudo add-apt-repository ppa:ondrej/php && sudo apt update', output: 'Repository: \'ppa:ondrej/php\'\nMore info: https://launchpad.net/~ondrej/+archive/ubuntu/php\nPress [ENTER] to continue or Ctrl-c to cancel.', explain: 'PPA（Personal Package Archive）是 Ubuntu 社区维护的第三方软件源。add-apt-repository 添加 PPA 并自动 update。' },
      { title: '换国内镜像源', cmd: 'sudo sed -i \'s/archive.ubuntu.com/mirrors.aliyun.com/g\' /etc/apt/sources.list && sudo apt update', output: 'Hit:1 http://mirrors.aliyun.com/ubuntu jammy InRelease', explain: '把官方源替换成阿里云镜像（国内更快）。也可以用清华（tuna）、中科大（ustc）。替换后必须 apt update。' },
      { title: '管理软件源', cmd: 'sudo add-apt-repository --remove ppa:ondrej/php', output: 'Repository \'ppa:ondrej/php\' removed.', explain: '--remove 删除 PPA。apt-key list 看 GPG 密钥（验证软件来源）。sources.list.d/ 目录下有第三方源的独立文件。' },
    ],
    diagnosis: [
      { symptom: 'apt update 报 "GPG error: NO_PUBKEY"', cause: '软件源的 GPG 公钥没导入。apt 无法验证软件包的签名。', fix: 'apt-key adv --keyserver keyserver.ubuntu.com --recv-keys KEY_ID。或者用新方式：curl -fsSL URL | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/repo.gpg。' },
      { symptom: 'apt update 报 "404 Not Found"', cause: '软件源不存在，或者 distribution 代号错了。', fix: '检查 /etc/apt/sources.list 里的 distribution 是否和系统版本匹配：lsb_release -c。或者源已经下线了（旧版本 Ubuntu）。' },
      { symptom: '添加 PPA 后 apt install 报 "Unable to locate package"', cause: 'PPA 没有你的 Ubuntu 版本的包，或者 apt update 没成功。', fix: 'apt update 看是否有错误。检查 PPA 页面看支持哪些版本：https://launchpad.net/~user/+archive/ubuntu/ppa。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前系统的所有软件源，统计有多少个', hint: 'cat /etc/apt/sources.list + grep', answer: 'echo "=== 主源文件 ==="\ncat /etc/apt/sources.list | grep -v "^#" | grep -v "^$"\n\necho ""\necho "=== 第三方源 ==="\nls /etc/apt/sources.list.d/\n\necho ""\necho "=== 统计 ==="\nTOTAL=$(cat /etc/apt/sources.list /etc/apt/sources.list.d/*.list 2>/dev/null | grep -v "^#" | grep -v "^$" | wc -l)\necho "总共 $TOTAL 个软件源"' },
      { level: '进阶', task: '写一个脚本，自动检测并切换到最快的镜像源', hint: 'apt-select 或 netselect-apt 测速 + sed 替换', answer: '#!/bin/bash\necho "=== 镜像源测速 ==="\n\n# 安装测速工具\nsudo apt install -y netselect-apt\n\n# 测试并生成最快的源列表\necho "测试镜像源速度（可能需要几分钟）..."\nsudo netselect-apt -c CN -n jammy\n\nif [ -f sources.list ]; then\n  echo ""\n  echo "最快的源:"\n  cat sources.list\n  \n  echo ""\n  read -p "应用这个源？(y/n) " confirm\n  if [ "$confirm" = "y" ]; then\n    sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak\n    sudo mv sources.list /etc/apt/sources.list\n    sudo apt update\n    echo "已切换到最快的镜像源"\n  fi\nfi' },
      { level: '挑战', task: '写一个"软件源管理器"，支持添加/删除/列出/备份/恢复操作', hint: 'case 语句 + add-apt-repository + cp', answer: '#!/bin/bash\nBACKUP_DIR="/root/apt-backup"\n\ncase "$1" in\n  add)\n    echo "添加软件源: $2"\n    sudo add-apt-repository "$2"\n    sudo apt update\n    ;;\n  \n  remove)\n    echo "删除软件源: $2"\n    sudo add-apt-repository --remove "$2"\n    sudo apt update\n    ;;\n  \n  list)\n    echo "=== 所有软件源 ==="\n    cat /etc/apt/sources.list | grep -v "^#" | grep -v "^$"\n    echo ""\n    echo "=== 第三方源 ==="\n    for f in /etc/apt/sources.list.d/*.list; do\n      echo "--- $f ---"\n      cat "$f" | grep -v "^#"\n    done\n    ;;\n  \n  backup)\n    echo "备份软件源配置..."\n    mkdir -p "$BACKUP_DIR"\n    sudo cp /etc/apt/sources.list "$BACKUP_DIR/"\n    sudo cp -r /etc/apt/sources.list.d "$BACKUP_DIR/"\n    sudo cp -r /etc/apt/trusted.gpg.d "$BACKUP_DIR/" 2>/dev/null\n    echo "已备份到 $BACKUP_DIR"\n    ;;\n  \n  restore)\n    echo "恢复软件源配置..."\n    sudo cp "$BACKUP_DIR/sources.list" /etc/apt/\n    sudo cp -r "$BACKUP_DIR/sources.list.d" /etc/apt/\n    sudo cp -r "$BACKUP_DIR/trusted.gpg.d" /etc/apt/ 2>/dev/null\n    sudo apt update\n    echo "已恢复"\n    ;;\n  \n  *)\n    echo "用法: $0 {add|remove|list|backup|restore} [repo]"\n    echo "示例:"\n    echo "  $0 add ppa:ondrej/php"\n    echo "  $0 remove ppa:ondrej/php"\n    echo "  $0 list"\n    echo "  $0 backup"\n    echo "  $0 restore"\n    ;;\nesac' },
    ],
    prereqs: ['apt — 包管理基础', 'sed — 文本替换'],
    nextSteps: ['自建镜像源 — apt-mirror', '安全加固 — GPG 签名验证'],
  },
};
