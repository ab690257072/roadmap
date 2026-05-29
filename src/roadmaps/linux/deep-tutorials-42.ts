import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_42: Record<string, DeepTutorial> = {
  "4eINX8jYMJxfYh7ZV47YI": {
    mentalModel: '包管理器是 Linux 的"应用商店"——apt（Debian/Ubuntu）、yum/dnf（RHEL/CentOS）、pacman（Arch）。它们帮你下载、安装、更新、卸载软件，还处理依赖关系。',
    handsOn: [
      { title: '更新软件源', cmd: 'sudo apt update', output: 'Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease\nGet:2 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]\n...', explain: 'update 从服务器下载最新的软件包列表（不升级软件）。类似刷新应用商店的目录。每次安装前都应该先 update。' },
      { title: '安装软件', cmd: 'sudo apt install -y nginx curl git', output: 'Reading package lists... Done\nBuilding dependency tree... Done\nThe following NEW packages will be installed:\n  nginx curl git\n...', explain: 'install 下载并安装软件。-y 自动确认（不交互）。可以一次装多个。apt 会自动处理依赖。' },
      { title: '升级所有软件', cmd: 'sudo apt upgrade -y', output: 'Reading package lists... Done\nBuilding dependency tree... Done\nCalculating upgrade... Done\nThe following packages will be upgraded:\n  23 upgraded, 0 newly installed', explain: 'upgrade 升级所有可升级的包。full-upgrade 处理依赖变更（可能删旧包）。autoremove 删不再需要的依赖。' },
      { title: '搜索和查看', cmd: 'apt search nginx && apt show nginx', output: 'p   nginx - small, powerful, scalable web/proxy server\n\nPackage: nginx\nVersion: 1.18.0-0ubuntu1.4\nPriority: optional\nSection: web\n...', explain: 'search 搜索包名和描述。show 看包详情（版本、依赖、大小）。list --installed 看已装的包。' },
    ],
    diagnosis: [
      { symptom: 'apt install 报 "Unable to locate package"', cause: '软件源没更新，或者包名拼错了，或者软件不在官方源里。', fix: '先 apt update。确认包名：apt search keyword。如果不在官方源，需要添加 PPA 或第三方源。' },
      { symptom: 'apt upgrade 报 "held broken packages"', cause: '依赖冲突。某些包被标记为"保留"（不升级），导致其他包无法升级。', fix: 'apt-mark unhold package 取消保留。apt --fix-broken install 修复依赖。或者 aptitude 交互式解决冲突。' },
      { symptom: 'dpkg 报 "interrupted, must be reconfigured"', cause: '上次安装被中断（Ctrl+C 或断电），dpkg 状态不一致。', fix: 'sudo dpkg --configure -a 完成未完成的配置。然后 apt --fix-broken install。' },
    ],
    exercises: [
      { level: '基础', task: '更新软件源，安装 nginx 和 htop，查看版本，然后卸载 htop', hint: 'apt update + install + --version + remove', answer: 'sudo apt update\nsudo apt install -y nginx htop\n\nnginx -v\nhtop --version\n\nsudo apt remove -y htop\nsudo apt autoremove -y' },
      { level: '进阶', task: '写一个"系统更新脚本"，更新所有软件并清理缓存，生成更新报告', hint: 'apt update + upgrade + autoremove + clean + 记录日志', answer: '#!/bin/bash\nLOGFILE="/var/log/system-update-$(date +%Y%m%d).log"\n\necho "=== 系统更新 $(date) ===" | tee "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 更新软件源 ---" | tee -a "$LOGFILE"\nsudo apt update 2>&1 | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 可升级的包 ---" | tee -a "$LOGFILE"\napt list --upgradable 2>/dev/null | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 升级软件 ---" | tee -a "$LOGFILE"\nsudo apt upgrade -y 2>&1 | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 清理不再需要的依赖 ---" | tee -a "$LOGFILE"\nsudo apt autoremove -y 2>&1 | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 清理缓存 ---" | tee -a "$LOGFILE"\nsudo apt clean 2>&1 | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "更新完成，日志: $LOGFILE" | tee -a "$LOGFILE"' },
      { level: '挑战', task: '写一个"依赖分析器"，显示指定包的所有依赖（正向和反向）', hint: 'apt-cache depends + apt-cache rdepends', answer: '#!/bin/bash\nPACKAGE=${1:-nginx}\n\necho "=== $PACKAGE 依赖分析 ==="\necho ""\n\necho "--- 正向依赖（$PACKAGE 需要什么）---"\napt-cache depends "$PACKAGE" | grep "Depends:" | awk \'{print $2}\' | while read dep; do\n  echo "  $dep"\ndone\n\necho ""\necho "--- 反向依赖（谁需要 $PACKAGE）---"\napt-cache rdepends "$PACKAGE" | tail -n +3 | while read rev; do\n  rev=$(echo "$rev" | tr -d \' \')\n  if dpkg -l "$rev" 2>/dev/null | grep -q "^ii"; then\n    echo "  ✓ $rev (已安装)"\n  else\n    echo "  ○ $rev (未安装)"\n  fi\ndone\n\necho ""\necho "--- 包信息 ---"\napt show "$PACKAGE" 2>/dev/null | grep -E "Package|Version|Size|Priority"' },
    ],
    prereqs: ['基础命令 — 会用终端', 'sudo — 需要 root 权限'],
    nextSteps: ['PPA — 第三方软件源', '编译安装 — 从源码构建软件'],
  },
};
