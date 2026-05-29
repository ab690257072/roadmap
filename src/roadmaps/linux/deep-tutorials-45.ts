import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_45: Record<string, DeepTutorial> = {
  "eKyMZn30UxQeBZQ7FxFbF": {
    mentalModel: 'Snap 是 Canonical（Ubuntu 母公司）推出的通用包格式——把应用和所有依赖打包成一个独立包，不依赖系统库。类似 Docker 镜像但用于桌面应用。',
    handsOn: [
      { title: '搜索 snap 包', cmd: 'snap find vscode', output: 'Name        Version  Publisher   Summary\ncode        1.85.1   vscode✓     Visual Studio Code\nvscode-insiders  1.86.0  vscode✓  VS Code Insiders', explain: 'snap find keyword 搜索 snap 商店。✓ 表示官方发布的包。' },
      { title: '安装 snap 包', cmd: 'sudo snap install code --classic', output: 'code 1.85.1 from Visual Studio Code✓ installed', explain: 'snap install name 安装。--classic 给完全访问权限（像 apt 安装的一样，不受沙盒限制）。VS Code 等开发工具需要 --classic。' },
      { title: '管理 snap 包', cmd: 'snap list && snap refresh && snap remove code', output: 'Name  Version  Rev  Tracking  Publisher  Notes\ncode  1.85.1   123  latest    vscode✓    classic\n\nAll snaps up to date.\ncode removed', explain: 'snap list 看已装的包。snap refresh 更新全部或指定包。snap remove 删除。snap info name 看详情。' },
      { title: '查看 snap 服务', cmd: 'snap services', output: 'Service              Startup  Current  Notes\nlxd.daemon           enabled  active   socket-activated\nmicrok8s.daemon      disabled inactive -', explain: '某些 snap 包包含后台服务。snap services 看所有 snap 服务。snap start/stop/restart name.service 管理服务。' },
    ],
    diagnosis: [
      { symptom: 'snap install 报 "snap not found"', cause: '包名错了，或者 snap 商店没有这个包。', fix: 'snap find keyword 搜索正确包名。或者包只在 apt 里有，不在 snap 商店。' },
      { symptom: 'snap 应用启动很慢', cause: 'snap 包要挂载 squashfs 文件系统，首次启动需要解压。', fix: '正常现象，首次启动慢，后续会快。或者改用 apt 安装的版本（更快）。' },
      { symptom: 'snap 应用无法访问某些文件', cause: 'snap 默认运行在沙盒里，只能访问 ~/snap/name/ 目录。', fix: '安装时加 --classic 解除沙盒限制。或者用 snap connect name:home 授权访问家目录。' },
    ],
    exercises: [
      { level: '基础', task: '安装 VS Code（snap 版本），查看版本，然后卸载', hint: 'snap install --classic + snap list + snap remove', answer: 'sudo snap install code --classic\n\n# 查看版本\ncode --version\n\n# 查看所有 snap 包\nsnap list\n\n# 卸载\nsudo snap remove code' },
      { level: '进阶', task: '写一个脚本，列出所有已安装的 snap 包，并检查是否有更新', hint: 'snap list + snap refresh --list', answer: '#!/bin/bash\necho "=== 已安装的 Snap 包 ==="\nsnap list\n\necho ""\necho "=== 可更新的包 ==="\nsnap refresh --list 2>/dev/null\n\nif [ $? -eq 0 ]; then\n  echo ""\n  read -p "更新所有包？(y/n) " confirm\n  if [ "$confirm" = "y" ]; then\n    sudo snap refresh\n  fi\nelse\n  echo "所有包都是最新的"\nfi' },
      { level: '挑战', task: '写一个"Snap 包管理器"，支持搜索/安装/更新/删除/备份/恢复', hint: 'case 语句 + snap 命令 + 保存包列表', answer: '#!/bin/bash\nBACKUP_FILE="/root/snap-packages.txt"\n\ncase "$1" in\n  search)\n    snap find "$2"\n    ;;\n  \n  install)\n    echo "安装: $2"\n    if [ "$3" = "--classic" ]; then\n      sudo snap install "$2" --classic\n    else\n      sudo snap install "$2"\n    fi\n    ;;\n  \n  remove)\n    echo "卸载: $2"\n    sudo snap remove "$2"\n    ;;\n  \n  update)\n    if [ -z "$2" ]; then\n      echo "更新所有 snap 包..."\n      sudo snap refresh\n    else\n      echo "更新: $2"\n      sudo snap refresh "$2"\n    fi\n    ;;\n  \n  list)\n    snap list\n    ;;\n  \n  backup)\n    echo "备份 snap 包列表..."\n    snap list | tail -n +2 | awk \'{print $1}\' > "$BACKUP_FILE"\n    echo "已备份到 $BACKUP_FILE"\n    cat "$BACKUP_FILE"\n    ;;\n  \n  restore)\n    echo "恢复 snap 包..."\n    while read pkg; do\n      echo "安装: $pkg"\n      sudo snap install "$pkg" 2>/dev/null || sudo snap install "$pkg" --classic\n    done < "$BACKUP_FILE"\n    echo "恢复完成"\n    ;;\n  \n  *)\n    echo "用法: $0 {search|install|remove|update|list|backup|restore} [package]" ;;\nesac' },
    ],
    prereqs: ['apt — 包管理基础'],
    nextSteps: ['Flatpak — 另一个通用包格式', 'AppImage — 无需安装的便携格式'],
  },
};
