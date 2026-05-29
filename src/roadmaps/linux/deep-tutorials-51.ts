import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_51: Record<string, DeepTutorial> = {
  "xEHiB-egkkcBuZmgMoqHT": {
    mentalModel: 'apt install/remove/upgrade 是包管理的核心操作。install 安装新软件，remove 卸载（留配置），purge 彻底删除（连配置一起），upgrade 升级所有可升级的包。',
    handsOn: [
      { title: '安装软件', cmd: 'sudo apt install -y nginx curl git', output: 'Reading package lists... Done\nThe following NEW packages will be installed:\n  nginx curl git\n0 upgraded, 3 newly installed, 0 to remove', explain: 'install 下载并安装软件。-y 自动确认。可以一次装多个。apt 会自动处理依赖。' },
      { title: '卸载软件', cmd: 'sudo apt remove nginx && sudo apt purge nginx', output: 'Removing nginx...\nPurging configuration files for nginx...', explain: 'remove 删程序留配置（/etc/nginx/ 还在）。purge 连配置一起删。如果以后重装，remove 的会保留配置，purge 的会重新生成默认配置。' },
      { title: '升级软件', cmd: 'sudo apt update && sudo apt upgrade -y', output: 'Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease\n23 upgraded, 0 newly installed, 0 to remove', explain: 'update 更新软件源列表（不升级软件）。upgrade 升级所有可升级的包。full-upgrade 处理依赖变更（可能删旧包）。' },
      { title: '清理系统', cmd: 'sudo apt autoremove -y && sudo apt clean', output: 'Removing unused dependencies...\n0 upgraded, 0 newly installed, 5 to remove', explain: 'autoremove 删不再需要的依赖（之前安装软件时自动装的）。clean 删已下载的 .deb 包缓存（/var/cache/apt/archives/）。' },
    ],
    diagnosis: [
      { symptom: 'apt install 报 "Unable to locate package"', cause: '软件源没更新，或者包名拼错了，或者软件不在官方源里。', fix: '先 apt update。确认包名：apt search keyword。如果不在官方源，添加 PPA 或第三方源。' },
      { symptom: 'apt upgrade 报 "held broken packages"', cause: '依赖冲突。某些包被标记为"保留"（不升级），导致其他包无法升级。', fix: 'apt-mark unhold package 取消保留。apt --fix-broken install 修复依赖。或者 aptitude 交互式解决冲突。' },
      { symptom: 'dpkg 报 "interrupted, must be reconfigured"', cause: '上次安装被中断（Ctrl+C 或断电），dpkg 状态不一致。', fix: 'sudo dpkg --configure -a 完成未完成的配置。然后 apt --fix-broken install。' },
    ],
    exercises: [
      { level: '基础', task: '安装 nginx 和 htop，查看版本，然后卸载 htop', hint: 'apt install + --version + apt remove', answer: 'sudo apt update\nsudo apt install -y nginx htop\n\nnginx -v\nhtop --version\n\nsudo apt remove -y htop\nsudo apt autoremove -y' },
      { level: '进阶', task: '写一个"系统更新脚本"，更新所有软件并清理缓存，生成更新报告', hint: 'apt update + upgrade + autoremove + clean + 记录日志', answer: '#!/bin/bash\nLOGFILE="/var/log/system-update-$(date +%Y%m%d).log"\n\necho "=== 系统更新 $(date) ===" | tee "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 更新软件源 ---" | tee -a "$LOGFILE"\nsudo apt update 2>&1 | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 可升级的包 ---" | tee -a "$LOGFILE"\napt list --upgradable 2>/dev/null | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 升级软件 ---" | tee -a "$LOGFILE"\nsudo apt upgrade -y 2>&1 | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 清理不再需要的依赖 ---" | tee -a "$LOGFILE"\nsudo apt autoremove -y 2>&1 | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "--- 清理缓存 ---" | tee -a "$LOGFILE"\nsudo apt clean 2>&1 | tee -a "$LOGFILE"\n\necho "" | tee -a "$LOGFILE"\necho "更新完成，日志: $LOGFILE" | tee -a "$LOGFILE"' },
      { level: '挑战', task: '写一个"依赖分析器"，显示指定包的所有依赖（正向和反向）', hint: 'apt-cache depends + apt-cache rdepends', answer: '#!/bin/bash\nPACKAGE=${1:-nginx}\n\necho "=== $PACKAGE 依赖分析 ==="\necho ""\n\necho "--- 正向依赖（$PACKAGE 需要什么）---"\napt-cache depends "$PACKAGE" | grep "Depends:" | awk \'{print $2}\' | while read dep; do\n  echo "  $dep"\ndone\n\necho ""\necho "--- 反向依赖（谁需要 $PACKAGE）---"\napt-cache rdepends "$PACKAGE" | tail -n +3 | while read rev; do\n  rev=$(echo "$rev" | tr -d \' \')\n  if dpkg -l "$rev" 2>/dev/null | grep -q "^ii"; then\n    echo "  ✓ $rev (已安装)"\n  else\n    echo "  ○ $rev (未安装)"\n  fi\ndone\n\necho ""\necho "--- 包信息 ---"\napt show "$PACKAGE" 2>/dev/null | grep -E "Package|Version|Size|Priority"' },
    ],
    prereqs: ['apt update — 更新软件源', 'sudo — 需要 root 权限'],
    nextSteps: ['dpkg — 底层包管理工具', 'aptitude — 高级包管理界面'],
  },
};
