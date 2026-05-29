import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_53: Record<string, DeepTutorial> = {
  "4ees23q281J1DPVAc7iXd": {
    mentalModel: 'Ethernet 是局域网的物理和数据链路层协议。ARP（Address Resolution Protocol）把 IP 地址翻译成 MAC 地址——像查电话簿，知道名字（IP）找号码（MAC）。',
    handsOn: [
      { title: '看 ARP 缓存', cmd: 'arp -a', output: '? (192.168.1.1) at 00:11:22:33:44:55 [ether] on eth0\n? (192.168.1.100) at aa:bb:cc:dd:ee:ff [ether] on eth0', explain: 'arp -a 显示 ARP 缓存表。IP → MAC 映射。[ether] 表示以太网。缓存有超时时间（通常 20 分钟）。' },
      { title: '查看网卡信息', cmd: 'ip link show eth0', output: '2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000\n    link/ether aa:bb:cc:dd:ee:ff brd ff:ff:ff:ff:ff:ff', explain: 'link/ether 是 MAC 地址（物理地址，全球唯一）。brd 是广播地址。mtu 是最大传输单元（通常 1500 字节）。' },
      { title: '手动添加 ARP 条目', cmd: 'sudo arp -s 192.168.1.50 00:11:22:33:44:55', output: '（无输出，成功）', explain: 'arp -s IP MAC 手动添加静态 ARP 条目（永久有效，不超时）。适合防止 ARP 欺骗攻击。' },
      { title: '抓 ARP 包', cmd: 'sudo tcpdump -i eth0 arp', output: '14:30:01.123456 ARP, Request who-has 192.168.1.100 tell 192.168.1.1\n14:30:01.234567 ARP, Reply 192.168.1.100 is-at aa:bb:cc:dd:ee:ff', explain: 'tcpdump 抓 ARP 包。Request 是"谁有 192.168.1.100？告诉我"，Reply 是"192.168.1.100 的 MAC 是 aa:bb:cc:dd:ee:ff"。' },
    ],
    diagnosis: [
      { symptom: 'ping 报 "Destination Host Unreachable"', cause: 'ARP 找不到目标 MAC。目标设备没开机，或者不在同一子网。', fix: '检查目标设备是否在线。检查子网掩码是否一致。arp -a 看有没有目标的 MAC。' },
      { symptom: '网络时断时续', cause: 'ARP 欺骗攻击（有人冒充网关 MAC），或者 IP 冲突。', fix: 'arp -a 看网关 MAC 是否变化。静态绑定网关：arp -s 网关IP 网关MAC。检查有没有设备用了相同的 IP。' },
      { symptom: 'MAC 地址全是 0', cause: '网卡驱动问题，或者虚拟机没分配 MAC。', fix: '重启网络服务：systemctl restart networking。或者重新生成 MAC：ip link set dev eth0 address xx:xx:xx:xx:xx:xx。' },
    ],
    exercises: [
      { level: '基础', task: '查看本机的 MAC 地址，以及 ARP 缓存中的所有设备', hint: 'ip link + arp -a', answer: 'echo "=== 本机 MAC 地址 ==="\nip link show | grep "link/ether" | awk \'{print $2}\'\n\necho ""\necho "=== ARP 缓存 ==="\narp -a | awk \'{\n  ip = $2;\n  gsub(/[()]/, "", ip);\n  mac = $4;\n  printf "IP: %-15s MAC: %s\\n", ip, mac\n}\'' },
      { level: '进阶', task: '写一个脚本，扫描局域网内的所有活跃设备（IP + MAC）', hint: 'arp-scan 或 nmap + arp', answer: '#!/bin/bash\nSUBNET=$(ip route | grep "kernel" | awk \'{print $1}\')\n\necho "=== 局域网设备扫描 ==="\necho "子网: $SUBNET"\necho ""\n\n# 方法 1: 用 arp-scan（需要安装）\nif command -v arp-scan > /dev/null; then\n  sudo arp-scan --localnet | grep -v "Interface\\|packets"\nelse\n  # 方法 2: 用 nmap + arp\n  echo "arp-scan 未安装，使用 nmap..."\n  nmap -sn "$SUBNET" 2>/dev/null | grep -E "report for|MAC" | awk \'\n    /report for/ {ip=$5; gsub(/[()]/, "", ip)}\n    /MAC/ {mac=$3; printf "IP: %-15s MAC: %s\\n", ip, mac}\n  \'\nfi\n\necho ""\necho "=== 本地 ARP 缓存 ==="\narp -a | wc -l\necho "个设备"' },
      { level: '挑战', task: '写一个"ARP 监控器"，检测 ARP 欺骗攻击（同一 IP 对应多个 MAC）', hint: 'tcpdump 抓 ARP + awk 统计', answer: `#!/bin/bash
echo "=== ARP 监控器 ==="
echo "监听 ARP 流量，检测异常..."
echo "按 Ctrl+C 停止"
echo ""

# 抓 ARP 包，提取 IP-MAC 对
sudo tcpdump -i eth0 -n arp 2>/dev/null | \\
  grep "Reply" | \\
  awk '{
    # 提取 IP 和 MAC
    for(i=1;i<=NF;i++) {
      if($i == "is-at") {
        ip = $(i-1);
        mac = $(i+1);
        key = ip " " mac;
        if (!seen[key]++) {
          print "新设备: " ip " → " mac;
        }
        # 检测同一 IP 多个 MAC
        ip_count[ip]++;
        if (ip_count[ip] > 1) {
          print "警告: " ip " 有多个 MAC（可能 ARP 欺骗）";
        }
      }
    }
  }' | while read line; do
    echo "$(date +%H:%M:%S) $line"
  done` },
    ],
    prereqs: ['ip link — 看网卡信息', 'tcpdump — 抓包'],
    nextSteps: ['Wireshark — 深度网络分析', '网络扫描 — nmap'],
  },
};
