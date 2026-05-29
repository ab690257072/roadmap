import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_52: Record<string, DeepTutorial> = {
  "Xszo9vXuwwXZo26seHehD": {
    mentalModel: '子网划分（Subnetting）是把大网络切成小网络——像把一个大办公室隔成多个小房间。每个子网有自己的 IP 范围。',
    handsOn: [
      { title: '看当前网络配置', cmd: 'ip addr show eth0', output: '2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\n       valid_lft forever preferred_lft forever', explain: 'inet 192.168.1.100/24 表示 IP 是 192.168.1.100，子网掩码是 /24（255.255.255.0）。brd 是广播地址。' },
      { title: '计算子网信息', cmd: 'ipcalc 192.168.1.100/24', output: 'Address:   192.168.1.100        11000000.10101000.00000001. 01100100\nNetmask:   255.255.255.0 = 24   11111111.11111111.11111111. 00000000\nNetwork:   192.168.1.0/24       11000000.10101000.00000001. 00000000\nHostMin:   192.168.1.1          11000000.10101000.00000001. 00000001\nHostMax:   192.168.1.254        11000000.10101000.00000001. 11111110\nBroadcast: 192.168.1.255        11000000.10101000.00000001. 11111111\nHosts/Net: 254', explain: 'ipcalc 计算子网信息。/24 表示前 24 位是网络号，后 8 位是主机号。可用 IP 范围：192.168.1.1 ~ 192.168.1.254（254 个）。' },
      { title: '划分子网', cmd: 'ipcalc 192.168.1.0/24 | grep -A 10 "Subnets"', output: 'Subnets:   4 = 2^2\nNetmask:   255.255.255.192 = 26\nSubnet 0:  192.168.1.0/26       (64 hosts)\nSubnet 1:  192.168.1.64/26      (64 hosts)\nSubnet 2:  192.168.1.128/26     (64 hosts)\nSubnet 3:  192.168.1.192/26     (64 hosts)', explain: '把 /24 切成 /26（借 2 位），得到 4 个子网，每个 64 个 IP（62 可用）。适合把网络分成多个 VLAN。' },
      { title: '看路由表', cmd: 'ip route', output: 'default via 192.168.1.1 dev eth0 proto dhcp metric 100\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.100', explain: 'ip route 显示路由表。default 是默认网关。192.168.1.0/24 是本地子网（直接连接）。' },
    ],
    diagnosis: [
      { symptom: '同一子网的设备 ping 不通', cause: '子网掩码配置不对，或者防火墙拦截了 ICMP。', fix: '检查子网掩码：ip addr show。确认两边掩码一致。临时关闭防火墙测试：iptables -F。' },
      { symptom: '能 ping 通网关但 ping 不通外网', cause: '网关没开 NAT，或者 DNS 配置不对。', fix: '检查网关的 NAT 配置（iptables -t nat -L）。检查 DNS：cat /etc/resolv.conf。用 IP 测试：ping 8.8.8.8。' },
      { symptom: 'IP 地址冲突', cause: '两台设备配了相同的 IP，或者 DHCP 分配了已占用的 IP。', fix: 'arp -a 看 MAC 地址。找到冲突设备改 IP。或者重启 DHCP 服务：systemctl restart isc-dhcp-server。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前网络的 IP、子网掩码、网关、DNS，计算可用 IP 范围', hint: 'ip addr + ip route + cat /etc/resolv.conf + ipcalc', answer: 'echo "=== 网络配置 ==="\necho "IP 地址: $(ip -4 addr show eth0 | grep inet | awk \'{print $2}\')"\necho "网关: $(ip route | grep default | awk \'{print $3}\')"\necho "DNS: $(grep nameserver /etc/resolv.conf | awk \'{print $2}\')"\n\necho ""\necho "=== 子网信息 ==="\nipcalc $(ip -4 addr show eth0 | grep inet | awk \'{print $2}\')' },
      { level: '进阶', task: '把 192.168.1.0/24 切成 8 个子网，写出每个子网的网络地址、掩码、可用 IP 范围', hint: '借 3 位（2^3=8），新掩码 /27', answer: '#!/bin/bash\necho "=== 子网划分: 192.168.1.0/24 → 8 个子网 ==="\necho ""\n\n# 借 3 位，新掩码 /27（255.255.255.224）\n# 每个子网 32 个 IP（30 可用）\n\nfor i in {0..7}; do\n  network=$((i * 32))\n  first=$((network + 1))\n  last=$((network + 30))\n  broadcast=$((network + 31))\n  \n  printf "子网 %d:\\n" $((i+1))\n  printf "  网络地址: 192.168.1.%d\\n" $network\n  printf "  子网掩码: 255.255.255.224 (/27)\\n"\n  printf "  可用 IP: 192.168.1.%d ~ 192.168.1.%d (30 个)\\n" $first $last\n  printf "  广播地址: 192.168.1.%d\\n\\n" $broadcast\ndone' },
      { level: '挑战', task: '写一个"子网计算器"，输入 IP 和掩码，输出所有子网信息', hint: 'ipcalc + awk 格式化', answer: '#!/bin/bash\nIP=$1\nCIDR=$2\n\nif [ -z "$IP" ] || [ -z "$CIDR" ]; then\n  echo "用法: $0 <IP> <CIDR>"\n  echo "示例: $0 192.168.1.0 24"\n  exit 1\nfi\n\necho "=== 子网计算器 ==="\necho "输入: $IP/$CIDR"\necho ""\n\n# 调用 ipcalc\nINFO=$(ipcalc "$IP/$CIDR")\n\necho "--- 基本信息 ---"\necho "$INFO" | grep -E "Address|Netmask|Network|HostMin|HostMax|Broadcast|Hosts"\n\necho ""\necho "--- 子网划分建议 ---"\n\n# 计算可以切成多少个子网\nHOST_BITS=$((32 - CIDR))\nfor borrow in 1 2 3 4; do\n  new_cidr=$((CIDR + borrow))\n  if [ $new_cidr -le 30 ]; then\n    subnets=$((2 ** borrow))\n    hosts_per_subnet=$((2 ** (HOST_BITS - borrow) - 2))\n    printf "借 %d 位 → /%d → %d 个子网，每个 %d 可用 IP\\n" $borrow $new_cidr $subnets $hosts_per_subnet\n  fi\ndone\n\necho ""\necho "--- 完整子网列表（借 2 位，4 个子网）---"\nipcalc -s "$IP/$((CIDR+2))" | grep "Subnet" | head -10' },
    ],
    prereqs: ['ip addr — 看 IP 配置', '基础网络概念'],
    nextSteps: ['VLAN — 虚拟局域网', 'CIDR — 无类域间路由'],
  },
};
