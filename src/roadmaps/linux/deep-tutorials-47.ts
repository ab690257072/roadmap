import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_47: Record<string, DeepTutorial> = {
  "Z23eJZjmWoeXQuezR9AhG": {
    mentalModel: 'Linux 安装软件有三种方式：apt（包管理器，最简单）、编译安装（从源码，最灵活）、二进制包（解压即用，折中）。',
    handsOn: [
      { title: 'apt 安装（最简单）', cmd: 'sudo apt install -y nginx', output: 'Reading package lists... Done\nThe following NEW packages will be installed:\n  nginx\n0 upgraded, 1 newly installed', explain: 'apt 自动下载、安装、处理依赖。软件装到 /usr/bin/、/etc/、/var/lib/ 等标准位置。适合大多数情况。' },
      { title: '编译安装（从源码）', cmd: 'wget https://nginx.org/download/nginx-1.24.0.tar.gz && tar xzf nginx-1.24.0.tar.gz && cd nginx-1.24.0 && ./configure --prefix=/opt/nginx && make && sudo make install', output: '（编译过程输出很多，最后安装到 /opt/nginx）', explain: '下载源码 → 解压 → configure 配置（指定安装路径）→ make 编译 → make install 安装。适合需要特定版本或自定义编译选项。' },
      { title: '二进制包安装', cmd: 'wget https://go.dev/dl/go1.21.6.linux-amd64.tar.gz && sudo tar -C /usr/local -xzf go1.21.6.linux-amd64.tar.gz', output: '（解压到 /usr/local/go）', explain: '下载预编译的二进制包，解压到指定目录。不需要编译，不需要 apt。适合 Go、Node.js 等语言运行时。' },
      { title: '卸载软件', cmd: 'sudo apt remove nginx && sudo apt purge nginx && sudo apt autoremove', output: 'Removing nginx...\nPurging configuration files for nginx...\nRemoving unused dependencies...', explain: 'remove 删程序留配置。purge 连配置一起删。autoremove 删不再需要的依赖。编译安装的用 make uninstall 或手动删文件。' },
    ],
    diagnosis: [
      { symptom: 'apt install 报 "Unable to locate package"', cause: '软件源没更新，或者包不在官方源里。', fix: 'apt update 更新源。apt search keyword 搜索正确包名。如果不在官方源，添加 PPA 或编译安装。' },
      { symptom: '编译时报 "configure: error: missing dependency"', cause: '缺少编译依赖（开发库）。', fix: 'apt build-dep package 自动安装编译依赖。或者看错误信息手动安装：apt install libxxx-dev。' },
      { symptom: '编译安装后找不到命令', cause: '安装路径不在 PATH 里。', fix: '检查安装路径：ls /opt/nginx/sbin/。加到 PATH：export PATH="/opt/nginx/sbin:$PATH"。或者创建 symlink：ln -s /opt/nginx/sbin/nginx /usr/local/bin/。' },
    ],
    exercises: [
      { level: '基础', task: '用 apt 安装 htop，查看版本，然后卸载', hint: 'apt install + --version + apt remove', answer: 'sudo apt update\nsudo apt install -y htop\n\nhtop --version\n\nsudo apt remove -y htop\nsudo apt autoremove -y' },
      { level: '进阶', task: '从源码编译安装最新版的 Git（比 apt 版本更新）', hint: 'git clone + make prefix= + make install', answer: '#!/bin/bash\n# 1. 安装编译依赖\nsudo apt install -y build-essential libssl-dev libcurl4-gnutls-dev libexpat1-dev gettext\n\n# 2. 下载源码\ncd /tmp\nwget https://github.com/git/git/archive/refs/tags/v2.43.0.tar.gz -O git-2.43.0.tar.gz\ntar xzf git-2.43.0.tar.gz\ncd git-2.43.0\n\n# 3. 编译\nmake prefix=/usr/local all\n\n# 4. 安装\nsudo make prefix=/usr/local install\n\n# 5. 验证\ngit --version\n\n# 清理\ncd /tmp\nrm -rf git-2.43.0 git-2.43.0.tar.gz' },
      { level: '挑战', task: '写一个"软件安装器"，支持 apt/编译/二进制三种方式，自动选择最优方式', hint: 'case 语句 + apt-cache show + wget + tar', answer: '#!/bin/bash\nPACKAGE=$1\nMETHOD=${2:-auto}\n\ninstall_apt() {\n  echo "使用 apt 安装: $PACKAGE"\n  sudo apt install -y "$PACKAGE"\n}\n\ninstall_binary() {\n  echo "下载二进制包..."\n  # 这里需要根据包名判断下载 URL（简化版）\n  case "$PACKAGE" in\n    go)\n      URL="https://go.dev/dl/go1.21.6.linux-amd64.tar.gz"\n      sudo tar -C /usr/local -xzf <(wget -qO- "$URL")\n      echo "已安装到 /usr/local/go"\n      ;;\n    *)\n      echo "不支持的二进制包: $PACKAGE"\n      return 1\n      ;;\n  esac\n}\n\ninstall_source() {\n  echo "从源码编译: $PACKAGE"\n  # 简化版：假设源码在 GitHub\n  cd /tmp\n  git clone "https://github.com/$PACKAGE/$PACKAGE.git"\n  cd "$PACKAGE"\n  if [ -f "configure" ]; then\n    ./configure && make && sudo make install\n  elif [ -f "Makefile" ]; then\n    make && sudo make install\n  else\n    echo "无法编译: 没有 configure 或 Makefile"\n    return 1\n  fi\n}\n\ncase "$METHOD" in\n  apt) install_apt ;;\n  binary) install_binary ;;\n  source) install_source ;;\n  auto)\n    # 自动选择：apt 有就用 apt，否则尝试二进制，最后编译\n    if apt-cache show "$PACKAGE" &>/dev/null; then\n      install_apt\n    elif [ "$PACKAGE" = "go" ] || [ "$PACKAGE" = "node" ]; then\n      install_binary\n    else\n      install_source\n    fi\n    ;;\n  *)\n    echo "用法: $0 package [apt|binary|source|auto]"\n    ;;\nesac' },
    ],
    prereqs: ['apt — 包管理基础', 'wget/curl — 下载文件'],
    nextSteps: ['checkinstall — 编译安装生成 .deb 包', 'stow — 管理手动安装的软件'],
  },
};
