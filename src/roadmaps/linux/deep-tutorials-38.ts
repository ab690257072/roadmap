import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_38: Record<string, DeepTutorial> = {
  "DuEfJNrm4Jfmp8-8Pggrf": {
    mentalModel: 'systemd 服务的启动/停止不只是 start/stop——还有 enable/disable（开机启动）、mask/unmask（彻底禁止）、reload/restart（重读配置/重启）。',
    handsOn: [
      { title: '启动/停止服务', cmd: 'sudo systemctl start nginx && sudo systemctl stop nginx', output: '（无输出，成功）', explain: 'start 启动服务，stop 停止。status 看状态。is-active 检查是否运行中（脚本里常用）。' },
      { title: '重启/重读配置', cmd: 'sudo systemctl restart nginx && sudo systemctl reload nginx', output: '（无输出，成功）', explain: 'restart 先 stop 再 start（会断开所有连接）。reload 只重读配置（不断连接，更安全）。能用 reload 就别用 restart。' },
      { title: '开机启动', cmd: 'sudo systemctl enable nginx && sudo systemctl disable nginx', output: 'Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service.', explain: 'enable 设置开机启动（创建 symlink 到 multi-user.target.wants/）。disable 取消。is-enabled 查看状态。' },
      { title: '彻底禁止', cmd: 'sudo systemctl mask nginx && sudo systemctl unmask nginx', output: 'Created symlink /etc/systemd/system/nginx.service → /dev/null.', explain: 'mask 把服务链接到 /dev/null（即使手动 start 也启动不了）。用于彻底禁止某个服务。unmask 解除。' },
    ],
    diagnosis: [
      { symptom: 'systemctl start 报 "Unit is masked"', cause: '服务被 mask 了，无法启动。', fix: 'sudo systemctl unmask service 解除 mask。然后 systemctl start service。' },
      { symptom: 'reload 报 "Job type reload is not applicable"', cause: '服务不支持 reload（.service 文件没定义 ExecReload=）。', fix: '用 restart 代替。或者编辑 .service 文件加 ExecReload=/bin/kill -HUP $MAINPID（如果程序支持 SIGHUP）。' },
      { symptom: 'enable 后重启服务器服务没自动启动', cause: '默认 target 不是 multi-user.target（可能是 graphical.target 或 rescue.target）。', fix: 'systemctl get-default 看当前 target。systemctl set-default multi-user.target 设置默认。' },
    ],
    exercises: [
      { level: '基础', task: '写一个"服务管理器"函数，支持 start/stop/restart/status/enable/disable 操作', hint: 'case 语句 + systemctl', answer: 'svc() {\n  local action=$1\n  local service=$2\n  \n  case "$action" in\n    start|stop|restart|reload)\n      sudo systemctl "$action" "$service"\n      systemctl status "$service" --no-pager\n      ;;\n    status)\n      systemctl status "$service" --no-pager\n      ;;\n    enable|disable)\n      sudo systemctl "$action" "$service"\n      systemctl is-enabled "$service"\n      ;;\n    *)\n      echo "用法: svc {start|stop|restart|reload|status|enable|disable} service-name"\n      ;;\n  esac\n}' },
      { level: '进阶', task: '写一个脚本，列出所有"已安装但没启用"的服务，并提示是否启用', hint: 'systemctl list-unit-files + grep disabled', answer: '#!/bin/bash\necho "=== 已安装但未启用的服务 ==="\nsystemctl list-unit-files --type=service --state=disabled --no-legend | \\\n  awk \'{print $1}\' | while read service; do\n    # 跳过模板服务（带 @ 的）\n    [[ "$service" == *"@"* ]] && continue\n    \n    echo ""\n    echo "服务: $service"\n    systemctl status "$service" --no-pager | head -5\n    \n    read -p "启用？(y/n) " confirm\n    if [ "$confirm" = "y" ]; then\n      sudo systemctl enable "$service"\n      echo "已启用: $service"\n    fi\n  done' },
      { level: '挑战', task: '写一个"服务依赖检查器"，找出所有依赖失败的服务（依赖的服务没运行）', hint: 'systemctl list-dependencies + is-active 检查每个依赖', answer: '#!/bin/bash\necho "=== 服务依赖检查 ==="\n\nfor service in $(systemctl list-units --type=service --state=running --no-legend | awk \'{print $1}\'); do\n  # 获取依赖\n  deps=$(systemctl show "$service" -p Requires,Wants | tr \' \' \'\\n\' | grep "\\.service" | sed \'s/.*=//\')\n  \n  for dep in $deps; do\n    # 检查依赖是否运行\n    if ! systemctl is-active --quiet "$dep" 2>/dev/null; then\n      echo "⚠️  $service 依赖 $dep，但 $dep 未运行"\n    fi\n  done\ndone\n\necho ""\necho "=== 失败的服务 ==="\nsystemctl --failed --no-pager' },
    ],
    prereqs: ['systemctl — 服务管理基础', 'systemd unit 文件 — .service 配置'],
    nextSteps: ['systemd target — 运行级别', 'systemd timer — 定时任务'],
  },
};
