import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_63: Record<string, DeepTutorial> = {
  "bZ8Yj6QfBeDdh8hRM_aZs": {
    mentalModel: 'Netfilter 是 Linux 内核的防火墙框架——iptables 是它的用户态工具。像海关检查站，根据规则决定数据包是放行、拒绝还是转发。',
    handsOn: [
      { title: '查看当前规则', cmd: 'sudo iptables -L -n -v', output: 'Chain INPUT (policy ACCEPT 0 packets, 0 bytes)\n pkts bytes target     prot opt in     out     source               destination\n  100  8000 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:22\n   50  4000 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:80', explain: '-L 列出规则，-n 数字格式（不解析域名），-v 详细信息。policy ACCEPT 表示默认策略是放行。pkts/bytes 是匹配的数据包数/字节数。' },
      { title: '添加规则', cmd: 'sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT', output: '（无输出，成功）', explain: '-A INPUT 追加到 INPUT 链（入站）。-p tcp 协议是 TCP。--dport 22 目标端口 22。-j ACCEPT 动作是放行。' },
      { title: '拒绝规则', cmd: 'sudo iptables -A INPUT -p tcp --dport 23 -j DROP', output: '（无输出，成功）', explain: '-j DROP 丢弃数据包（不回应）。-j REJECT 拒绝并回应（发送 ICMP 不可达）。DROP 更隐蔽，REJECT 更友好。' },
      { title: '保存规则', cmd: 'sudo iptables-save > /etc/iptables/rules.v4', output: '（无输出，成功）', explain: 'iptables 规则重启后失效。iptables-save 导出规则。写入 /etc/iptables/rules.v4 并安装 iptables-persistent 自动加载。' },
    ],
    diagnosis: [
      { symptom: 'SSH 连不上服务器', cause: '防火墙拦截了 22 端口，或者规则顺序不对（拒绝规则在放行规则前面）。', fix: 'iptables -L INPUT -n --line-numbers 看规则顺序。iptables -I INPUT 1 -p tcp --dport 22 -j ACCEPT 插入到第一条。' },
      { symptom: '规则重启后丢失', cause: 'iptables 规则只存在内存中，重启后清空。', fix: '安装 iptables-persistent：apt install iptables-persistent。或者用 systemd 服务自动加载：iptables-restore < /etc/iptables/rules.v4。' },
      { symptom: '规则不生效', cause: '规则顺序问题（iptables 从上到下匹配，第一条匹配的规则生效）。或者规则写错了（如 -s 和 -d 搞反）。', fix: 'iptables -L INPUT -n --line-numbers 看顺序。iptables -D INPUT 编号 删除错误规则。重新添加正确规则。' },
    ],
    exercises: [
      { level: '基础', task: '配置防火墙：只允许 SSH（22）、HTTP（80）、HTTPS（443），其他全部拒绝', hint: 'iptables -A INPUT -p tcp --dport ... -j ACCEPT + 最后 DROP', answer: '#!/bin/bash\n# 清空现有规则\nsudo iptables -F\n\n# 允许本地回环\nsudo iptables -A INPUT -i lo -j ACCEPT\n\n# 允许已建立的连接\nsudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n\n# 允许 SSH、HTTP、HTTPS\nsudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT\nsudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT\nsudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT\n\n# 拒绝其他所有\nsudo iptables -A INPUT -j DROP\n\n# 保存规则\nsudo iptables-save | sudo tee /etc/iptables/rules.v4\n\necho "防火墙配置完成"\nsudo iptables -L INPUT -n --line-numbers' },
      { level: '进阶', task: '写一个"防火墙管理器"，支持添加/删除/列出规则', hint: 'case 语句 + iptables 命令', answer: '#!/bin/bash\ncase "$1" in\n  add)\n    PORT=$2\n    ACTION=${3:-ACCEPT}\n    sudo iptables -A INPUT -p tcp --dport "$PORT" -j "$ACTION"\n    echo "已添加规则: 端口 $PORT → $ACTION"\n    ;;\n  remove)\n    PORT=$2\n    RULE_NUM=$(sudo iptables -L INPUT -n --line-numbers | grep "dpt:$PORT" | awk \'{print $1}\' | head -1)\n    if [ -n "$RULE_NUM" ]; then\n      sudo iptables -D INPUT "$RULE_NUM"\n      echo "已删除规则 #$RULE_NUM (端口 $PORT)"\n    else\n      echo "未找到端口 $PORT 的规则"\n    fi\n    ;;\n  list)\n    sudo iptables -L INPUT -n --line-numbers\n    ;;\n  save)\n    sudo iptables-save | sudo tee /etc/iptables/rules.v4\n    echo "规则已保存"\n    ;;\n  *)\n    echo "用法: $0 {add|remove|list|save} [port] [action]"\n    ;;\nesac' },
      { level: '挑战', task: '配置 NAT（网络地址转换），让内网设备通过本机访问外网', hint: 'iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE', answer: '#!/bin/bash\n# 启用 IP 转发\necho 1 | sudo tee /proc/sys/net/ipv4/ip_forward\nsudo sysctl -w net.ipv4.ip_forward=1\n\n# 配置 NAT\n# eth0 是外网网卡，eth1 是内网网卡\nsudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\nsudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT\nsudo iptables -A FORWARD -i eth0 -o eth1 -m state --state ESTABLISHED,RELATED -j ACCEPT\n\n# 保存规则\nsudo iptables-save | sudo tee /etc/iptables/rules.v4\n\necho "NAT 配置完成"\necho "内网设备设置网关为本机 IP (192.168.1.1) 即可上网"' },
    ],
    prereqs: ['网络基础 — IP/TCP/端口', 'sudo — root 权限'],
    nextSteps: ['nftables — iptables 的替代方案', 'firewalld — 动态防火墙管理'],
  },
};
