import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_54: Record<string, DeepTutorial> = {
  "Mb42VFjCzMZn_PovKIfKx": {
    mentalModel: 'Networking 是 Linux 网络配置的总称——IP 地址、路由、DNS、防火墙。像城市的交通系统：IP 是门牌号，路由是道路规划，DNS 是电话簿，防火墙是安检站。',
    handsOn: [
      { title: '看完整网络配置', cmd: 'ip addr show && ip route && cat /etc/resolv.conf', output: '2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\ndefault via 192.168.1.1 dev eth0 proto dhcp metric 100\nnameserver 8.8.8.8\nnameserver 8.8.4.4', explain: 'ip addr 显示 IP 地址（192.168.1.100/24）。ip route 显示路由表（默认网关 192.168.1.1）。/etc/resolv.conf 显示 DNS 服务器（8.8.8.8）。' },
      { title: '测试网络连通性', cmd: 'ping -c 3 google.com', output: 'PING google.com (142.250.80.46) 56(84) bytes of data.\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=1 ttl=115 time=10.2 ms\n--- google.com ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2003ms', explain: 'ping 测试连通性。-c 3 发 3 个包。0% packet loss 表示无丢包。time=10.2ms 是延迟。' },
      { title: '看网络连接状态', cmd: 'ss -tunap | head -10', output: 'Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:Port Process\ntcp   ESTAB  0      0      192.168.1.100:22    10.0.0.5:52345   users:(("sshd",pid=567,fd=3))\ntcp   LISTEN 0      128    0.0.0.0:80         0.0.0.0:*        users:(("nginx",pid=5678,fd=6))', explain: 'ss 显示网络连接。-t TCP，-u UDP，-n 数字格式，-a 所有状态，-p 进程。ESTAB=已连接，LISTEN=监听中。' },
      { title: '追踪路由路径', cmd: 'traceroute google.com', output: 'traceroute to google.com (142.250.80.46), 30 hops max\n 1  192.168.1.1 (192.168.1.1)  1.234 ms  1.456 ms  1.678 ms\n 2  10.0.0.1 (10.0.0.1)  5.678 ms  5.890 ms  6.012 ms\n 3  72.14.215.1 (72.14.215.1)  10.234 ms  10.456 ms  10.678 ms', explain: 'traceroute 显示数据包到达目标经过的每一跳（路由器）。每跳显示 3 次延迟。如果某跳延迟突然变大，可能是瓶颈。' },
    ],
    diagnosis: [
      { symptom: 'ping 不通外网但能 ping 通网关', cause: 'DNS 配置错误，或者网关没开 NAT（网络地址转换）。', fix: '先用 IP 测试：ping 8.8.8.8。如果 IP 能通但域名不通，是 DNS 问题：检查 /etc/resolv.conf。如果 IP 也不通，是 NAT 问题：检查网关配置。' },
      { symptom: '能 ping 通但网页打不开', cause: 'HTTP/HTTPS 端口被防火墙拦截，或者代理配置错误。', fix: 'telnet host 80 测试端口。检查 iptables 规则。检查环境变量：echo $http_proxy。' },
      { symptom: '网络很慢', cause: '带宽不足、延迟高、丢包、或者 DNS 解析慢。', fix: 'ping host 看延迟和丢包。mtr host 看路径上哪一跳有问题。dig @8.8.8.8 host 测试 DNS 速度。' },
    ],
    exercises: [
      { level: '基础', task: '查看本机的完整网络配置（IP、掩码、网关、DNS），并测试连通性', hint: 'ip addr + ip route + cat /etc/resolv.conf + ping', answer: 'echo "=== IP 地址 ==="\nip -4 addr show | grep inet\n\necho ""\necho "=== 路由表 ==="\nip route\n\necho ""\necho "=== DNS 服务器 ==="\ncat /etc/resolv.conf | grep nameserver\n\necho ""\necho "=== 连通性测试 ==="\necho -n "网关: "\nping -c 1 $(ip route | grep default | awk \'{print $3}\') 2>&1 | grep "1 received" && echo "通" || echo "不通"\n\necho -n "外网 (IP): "\nping -c 1 8.8.8.8 2>&1 | grep "1 received" && echo "通" || echo "不通"\n\necho -n "外网 (DNS): "\nping -c 1 google.com 2>&1 | grep "1 received" && echo "通" || echo "不通"' },
      { level: '进阶', task: '写一个"网络诊断脚本"，自动检测常见问题并给出建议', hint: 'ping + dig + curl + 条件判断', answer: `#!/bin/bash
TARGET=\${1:-google.com}

echo "=== 网络诊断: $TARGET ==="
echo ""

# 1. DNS 解析
echo "--- 1. DNS 解析 ---"
IP=$(dig +short "$TARGET" | head -1)
if [ -n "$IP" ]; then
  echo "✓ $TARGET → $IP"
else
  echo "✗ DNS 解析失败"
  echo "建议: 检查 /etc/resolv.conf，尝试 dig @8.8.8.8 $TARGET"
fi
echo ""

# 2. Ping 测试
echo "--- 2. Ping 测试 ---"
if ping -c 3 "$TARGET" 2>&1 | grep -q "0% packet loss"; then
  echo "✓ 连通，无丢包"
  ping -c 3 "$TARGET" | tail -1
else
  echo "✗ 丢包或不通"
  echo "建议: traceroute $TARGET 看哪一跳有问题"
fi
echo ""

# 3. HTTP 测试
echo "--- 3. HTTP 测试 ---"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://$TARGET" 2>/dev/null)
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
  echo "✓ HTTP 正常 (状态码: $HTTP_CODE)"
else
  echo "✗ HTTP 失败 (状态码: $HTTP_CODE)"
  echo "建议: telnet $TARGET 80 测试端口"
fi
echo ""

# 4. 本地网络状态
echo "--- 4. 本地网络状态 ---"
echo "IP: $(ip -4 addr show | grep inet | grep -v 127.0.0.1 | awk '{print $2}' | head -1)"
echo "网关: $(ip route | grep default | awk '{print $3}')"
echo "DNS: $(grep nameserver /etc/resolv.conf | awk '{print $2}' | head -1)"` },
      { level: '挑战', task: '写一个"网络监控仪表盘"，实时显示网络状态（连接数、流量、延迟）', hint: 'ss + iftop + ping + watch', answer: `#!/bin/bash
TARGET=\${1:-8.8.8.8}

while true; do
  clear
  echo "=== 网络监控仪表盘 $(date) ==="
  echo ""

  # 1. 连接统计
  echo "--- 连接统计 ---"
  ss -s | grep -E "TCP|UDP"
  echo ""

  # 2. 监听端口
  echo "--- 监听端口 (Top 10) ---"
  ss -tlnp | awk 'NR>1 {print $4}' | sort | uniq -c | sort -rn | head -10
  echo ""

  # 3. 实时流量
  echo "--- 网络流量 ---"
  RX=$(cat /sys/class/net/eth0/statistics/rx_bytes 2>/dev/null || echo 0)
  TX=$(cat /sys/class/net/eth0/statistics/tx_bytes 2>/dev/null || echo 0)
  printf "接收: %.2f MB  发送: %.2f MB\\n" $(echo "$RX/1048576" | bc -l) $(echo "$TX/1048576" | bc -l)
  echo ""

  # 4. 延迟测试
  echo "--- 延迟测试 ($TARGET) ---"
  ping -c 3 "$TARGET" 2>&1 | tail -1
  echo ""

  echo "按 Ctrl+C 退出"
  sleep 5
done` },
    ],
    prereqs: ['ip addr — 看 IP 配置', 'ping — 测试连通性'],
    nextSteps: ['防火墙 — iptables/nftables', '网络监控 — Prometheus + Grafana'],
  },
};
