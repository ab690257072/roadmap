import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_48: Record<string, DeepTutorial> = {
  "o5lSQFW-V_PqndGqo1mp3": {
    mentalModel: 'Boot Loader（引导加载器）是开机后第一个运行的程序——GRUB 让你选择启动哪个内核或操作系统。像机场安检后的登机口选择。',
    handsOn: [
      { title: '看当前内核版本', cmd: 'uname -r && cat /proc/version', output: '5.15.0-91-generic\nLinux version 5.15.0-91-generic (buildd@lgw01-amd64-045) (gcc-11 (Ubuntu 11.4.0-1ubuntu1~22.04)', explain: 'uname -r 显示内核版本。/proc/version 显示完整编译信息。内核是操作系统和硬件之间的桥梁。' },
      { title: '看 GRUB 配置', cmd: 'cat /etc/default/grub | grep -v "^#" | grep -v "^$"', output: 'GRUB_DEFAULT=0\nGRUB_TIMEOUT_STYLE=hidden\nGRUB_TIMEOUT=0\nGRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`\nGRUB_CMDLINE_LINUX_DEFAULT="quiet splash"\nGRUB_CMDLINE_LINUX=""', explain: 'GRUB_DEFAULT=0 默认启动第一个内核。GRUB_TIMEOUT=0 不显示菜单（直接启动）。GRUB_CMDLINE_LINUX 传内核参数。' },
      { title: '看可用内核', cmd: 'ls /boot/vmlinuz-*', output: '/boot/vmlinuz-5.15.0-91-generic\n/boot/vmlinuz-5.15.0-89-generic', explain: '/boot/ 下放所有内核文件。vmlinuz 是压缩的内核镜像。多个内核可以在 GRUB 菜单选择启动。' },
      { title: '更新 GRUB', cmd: 'sudo update-grub', output: 'Sourcing file `/etc/default/grub\'\nGenerating grub configuration file ...\nFound linux image: /boot/vmlinuz-5.15.0-91-generic\nFound initrd image: /boot/initrd.img-5.15.0-91-generic\ndone', explain: 'update-grub 重新生成 GRUB 配置（/boot/grub/grub.cfg）。改完 /etc/default/grub 后必须运行这个命令才生效。' },
    ],
    diagnosis: [
      { symptom: '开机后黑屏，没看到 GRUB 菜单', cause: 'GRUB_TIMEOUT=0 隐藏了菜单。或者 GRUB 安装在错误的位置。', fix: '开机时按住 Shift（BIOS）或 Esc（UEFI）强制显示菜单。进系统后改 GRUB_TIMEOUT=5，然后 update-grub。' },
      { symptom: '新内核启动后某些驱动不工作', cause: '新内核缺少驱动模块，或者内核参数不对。', fix: 'GRUB 菜单选旧内核启动。检查 dmesg | grep -i error。或者回滚内核：apt remove linux-image-5.15.0-91-generic。' },
      { symptom: 'update-grub 报 "cannot find a GRUB drive"', cause: 'GRUB 没正确安装到 MBR 或 EFI 分区。', fix: '重新安装 GRUB：grub-install /dev/sda（BIOS）或 grub-install --target=x86_64-efi（UEFI）。然后 update-grub。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前系统的内核版本、GRUB 配置、可用内核列表', hint: 'uname + cat /etc/default/grub + ls /boot/vmlinuz-*', answer: 'echo "=== 当前内核 ==="\nuname -r\n\necho ""\necho "=== GRUB 配置 ==="\ncat /etc/default/grub | grep -v "^#" | grep -v "^$"\n\necho ""\necho "=== 可用内核 ==="\nls /boot/vmlinuz-*\n\necho ""\necho "=== 默认启动项 ==="\ngrep "set default" /boot/grub/grub.cfg 2>/dev/null | head -1' },
      { level: '进阶', task: '修改 GRUB 配置，显示菜单（5 秒超时），并添加自定义内核参数', hint: 'nano /etc/default/grub + update-grub', answer: '#!/bin/bash\necho "修改 GRUB 配置..."\n\n# 1. 备份\nsudo cp /etc/default/grub /etc/default/grub.bak\n\n# 2. 修改配置\nsudo sed -i \'s/GRUB_TIMEOUT=0/GRUB_TIMEOUT=5/\' /etc/default/grub\nsudo sed -i \'s/GRUB_TIMEOUT_STYLE=hidden/GRUB_TIMEOUT_STYLE=menu/\' /etc/default/grub\n\n# 3. 添加内核参数（示例：禁用 USB 自动挂起）\nsudo sed -i \'s/GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"/GRUB_CMDLINE_LINUX_DEFAULT="quiet splash usbcore.autosuspend=-1"/\' /etc/default/grub\n\n# 4. 更新 GRUB\nsudo update-grub\n\necho ""\necho "修改完成，下次重启生效"\necho "当前配置:"\ncat /etc/default/grub | grep -v "^#" | grep -v "^$"' },
      { level: '挑战', task: '写一个"内核管理器"，支持列出/切换/删除内核', hint: 'dpkg -l linux-image-* + apt install/remove + update-grub', answer: '#!/bin/bash\ncase "$1" in\n  list)\n    echo "=== 已安装的内核 ==="\n    dpkg -l "linux-image-*" 2>/dev/null | grep "^ii" | awk \'{print $2, $3}\'\n    \n    echo ""\n    echo "=== 当前运行的内核 ==="\n    uname -r\n    ;;\n  \n  switch)\n    KERNEL=$2\n    if [ -z "$KERNEL" ]; then\n      echo "用法: $0 switch <kernel-version>"\n      echo "可用内核:"\n      ls /boot/vmlinuz-* | sed \'s/.*vmlinuz-//\'\n      exit 1\n    fi\n    \n    echo "设置默认内核: $KERNEL"\n    # 找到对应的 GRUB 菜单项\n    ENTRY=$(grep -n "menuentry" /boot/grub/grub.cfg | grep "$KERNEL" | head -1 | cut -d: -f1)\n    if [ -n "$ENTRY" ]; then\n      sudo sed -i "s/GRUB_DEFAULT=.*/GRUB_DEFAULT=\\"$(($ENTRY - 1))\\"/" /etc/default/grub\n      sudo update-grub\n      echo "已设置，下次重启生效"\n    else\n      echo "未找到内核: $KERNEL"\n    fi\n    ;;\n  \n  remove)\n    KERNEL=$2\n    if [ -z "$KERNEL" ]; then\n      echo "用法: $0 remove <kernel-version>"\n      exit 1\n    fi\n    \n    CURRENT=$(uname -r)\n    if [ "$KERNEL" = "$CURRENT" ]; then\n      echo "错误: 不能删除当前运行的内核"\n      exit 1\n    fi\n    \n    echo "删除内核: $KERNEL"\n    sudo apt remove --purge "linux-image-$KERNEL" "linux-headers-$KERNEL" -y\n    sudo apt autoremove -y\n    sudo update-grub\n    echo "已删除"\n    ;;\n  \n  *)\n    echo "用法: $0 {list|switch|remove} [kernel-version]"\n    ;;\nesac' },
    ],
    prereqs: ['apt — 包管理基础', '配置文件编辑 — nano/vim'],
    nextSteps: ['内核编译 — 自定义内核', 'UEFI 启动 — 现代 BIOS 替代方案'],
  },
};
