import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_67: Record<string, DeepTutorial> = {
  "Ymf3u_sG1dyt8ZR_LbwqJ": {
    mentalModel: 'ICMP（Internet Control Message Protocol）是网络层的控制协议——ping 用 ICMP Echo Request/Reply 测试连通性，像喊话测试回音。',
    handsOn: [
      { title: 'ping 测试连通性', cmd: 'ping -c 3 google.com', output: 'PING google.com (142.250.80.46) 56(84) bytes of data.\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=1 ttl=115 time=10.2 ms\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=2 ttl=115 time=10.5 ms\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=3 ttl=115 time=10.3 ms\n\n--- google.com ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2003ms\nrtt min/avg/max/mdev = 10.234/10.356/10.512/0.123 ms', explain: '-c 3 发 3 个包。0% packet loss 表示无丢包。time=10.2ms 是延迟。rtt 是往返时间统计。' },
      { title: 'ping6 测试 IPv6', cmd: 'ping6 -c 3 google.com', output: 'PING google.com(ord38s33-in-x0e.1e100.net (2607:f8b0:4009:80c::200e)) 56 data bytes\n64 bytes from ord38s33-in-x0e.1e100.net: icmp_seq=1 ttl=115 time=10.5 ms', explain: 'ping6 测试 IPv6 连通性。如果目标不支持 IPv6 会报 "Network is unreachable"。' },
      { title: 'fping 批量 ping', cmd: 'fping google.com cloudflare.com github.com', output: 'google.com is alive\ncloudflare.com is alive\ngithub.com is alive', explain: 'fping 可以同时 ping 多个主机，比 ping 快。适合批量检测网络状态。' },
      { title: 'hping3 高级 ping', cmd: 'sudo hping3 -S -p 80 google.com -c 3', output: 'HPING google.com (eth0 142.250.80.46): S set, 40 headers + 0 data bytes\nlen=46 ip=142.250.80.46 ttl=115 DF id=0 sport=80 flags=SA seq=0 win=65535 rtt=10.5 ms', explain: 'hping3 可以发 TCP/UDP/ICMP 包。-S 发 SYN 包（测试端口）。-p 80 目标端口 80。适合测试防火墙规则。' },
    ],
    diagnosis: [
      { symptom: 'ping 报 "Destination Host Unreachable"', cause: '目标主机不在同一网络，或者路由表没配置，或者 ARP 找不到 MAC 地址。', fix: '检查网络配置：ip addr show。检查路由：ip route。ping 网关看是否通。' },
      { symptom: 'ping 报 "Request timeout"', cause: '目标主机在线但没回应 ICMP（可能被防火墙拦截），或者网络延迟太高。', fix: 'traceroute 看哪一跳断了。用 telnet 或 nc 测试 TCP 端口。或者换网络测试。' },
      { symptom: 'ping 通但网页打不开', cause: 'DNS 解析失败，或者 HTTP 端口被拦截，或者服务没启动。', fix: 'dig 测试 DNS。telnet host 80 测试端口。curl -I http://host 测试 HTTP。' },
    ],
    exercises: [
      { level: '基础', task: '写一个脚本，批量 ping 一组服务器，报告哪些在线', hint: 'for 循环 + ping -c 1 + 条件判断', answer: `#!/bin/bash
SERVERS=("google.com" "cloudflare.com" "github.com" "nonexistent.example.com")

echo "=== 服务器状态检测 ==="
echo ""

for SERVER in "\${SERVERS[@]}"; do
  if ping -c 1 -W 2 "$SERVER" > /dev/null 2>&1; then
    echo "✓ $SERVER 在线"
  else
    echo "✗ $SERVER 离线"
  fi
done` },
      { level: '进阶', task: '写一个"网络监控脚本"，定期检查一组服务器，离线时发送告警', hint: 'ping + cron + 条件判断', answer: `#!/bin/bash
SERVERS=("192.168.1.1" "192.168.1.2" "192.168.1.3")
LOG_FILE="/var/log/network-monitor.log"
ALERT_EMAIL="admin@example.com"

TIMESTAMP=$(date +%Y-%m-%d\\ %H:%M:%S)

for SERVER in "\${SERVERS[@]}"; do
  if ! ping -c 1 -W 2 "$SERVER" > /dev/null 2>&1; then
    echo "[$TIMESTAMP] ✗ $SERVER 离线" | tee -a "$LOG_FILE"
    echo "$SERVER 离线 ($TIMESTAMP)" | mail -s "Network Alert" "$ALERT_EMAIL"
  else
    echo "[$TIMESTAMP] ✓ $SERVER 在线" | tee -a "$LOG_FILE"
  fi
done

# 加到 crontab（每 5 分钟检查一次）：
# */5 * * * * /path/to/network-monitor.sh` },
      { level: '挑战', task: '用 hping3 进行端口扫描，找出目标主机的开放端口', hint: 'hping3 -S --scan 1-1000', answer: '#!/bin/bash\nTARGET=${1:-google.com}\n\necho "=== 端口扫描: $TARGET ==="\necho ""\n\n# 扫描常见端口\nPORTS="21 22 23 25 53 80 110 143 443 993 995 3306 5432 6379 8080 8443"\n\nfor PORT in $PORTS; do\n  RESULT=$(sudo hping3 -S -p $PORT $TARGET -c 1 2>&1 | grep "flags=SA")\n  if [ -n "$RESULT" ]; then\n    echo "✓ 端口 $PORT 开放"\n  else\n    echo "✗ 端口 $PORT 关闭"\n  fi\ndone' },
    ],
    prereqs: ['网络基础 — IP/TCP/ICMP', 'ping — 基础连通性测试'],
    nextSteps: ['nmap — 专业端口扫描', 'Wireshark — 网络抓包分析'],
  },
};
