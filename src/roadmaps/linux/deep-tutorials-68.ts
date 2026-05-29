import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_68: Record<string, DeepTutorial> = {
  "Uc36t92UAlILgM3_XxcMG": {
    mentalModel: 'ping 是最基础的网络诊断工具——发送 ICMP Echo Request，等待 Echo Reply，测量往返时间和丢包率。',
    handsOn: [
      { title: '基础 ping', cmd: 'ping -c 4 google.com', output: 'PING google.com (142.250.80.46) 56(84) bytes of data.\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=1 ttl=115 time=10.2 ms\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=2 ttl=115 time=10.5 ms\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=3 ttl=115 time=10.3 ms\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=4 ttl=115 time=10.4 ms\n\n--- google.com ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3005ms\nrtt min/avg/max/mdev = 10.234/10.360/10.512/0.112 ms', explain: '-c 4 发 4 个包。0% packet loss 表示无丢包。rtt 是往返时间统计（最小/平均/最大/标准差）。' },
      { title: '持续 ping', cmd: 'ping google.com', output: 'PING google.com (142.250.80.46) 56(84) bytes of data.\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=1 ttl=115 time=10.2 ms\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=2 ttl=115 time=10.5 ms\n^C\n--- google.com ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss, time 1001ms', explain: '不加 -c 会持续 ping，按 Ctrl+C 停止。适合监控网络稳定性。' },
      { title: '指定包大小', cmd: 'ping -c 3 -s 1472 google.com', output: 'PING google.com (142.250.80.46) 1472(1500) bytes of data.\n1480 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=1 ttl=115 time=10.5 ms', explain: '-s 1472 指定数据部分 1472 字节（加上 8 字节 ICMP 头和 20 字节 IP 头 = 1500 字节，MTU 上限）。测试 MTU 问题。' },
      { title: '指定间隔', cmd: 'ping -c 5 -i 0.5 google.com', output: 'PING google.com (142.250.80.46) 56(84) bytes of data.\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=1 ttl=115 time=10.2 ms\n64 bytes from ord38s33-in-f14.1e100.net (142.250.80.46): icmp_seq=2 ttl=115 time=10.5 ms', explain: '-i 0.5 每 0.5 秒发一个包（默认 1 秒）。更快的间隔可以更快发现问题，但可能触发限速。' },
    ],
    diagnosis: [
      { symptom: 'ping 报 "Destination Host Unreachable"', cause: '目标主机不在同一网络，或者路由表没配置，或者 ARP 找不到 MAC 地址。', fix: '检查网络配置：ip addr show。检查路由：ip route。ping 网关看是否通。' },
      { symptom: 'ping 报 "Request timeout"', cause: '目标主机在线但没回应 ICMP（可能被防火墙拦截），或者网络延迟太高。', fix: 'traceroute 看哪一跳断了。用 telnet 或 nc 测试 TCP 端口。或者换网络测试。' },
      { symptom: 'ping 通但网页打不开', cause: 'DNS 解析失败，或者 HTTP 端口被拦截，或者服务没启动。', fix: 'dig 测试 DNS。telnet host 80 测试端口。curl -I http://host 测试 HTTP。' },
    ],
    exercises: [
      { level: '基础', task: '写一个脚本，ping 一组服务器，报告哪些在线', hint: 'for 循环 + ping -c 1 + 条件判断', answer: `#!/bin/bash
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
      { level: '进阶', task: '写一个"网络质量监控器"，持续 ping 并记录延迟和丢包', hint: 'ping -i 1 + awk 解析 + 日志文件', answer: `#!/bin/bash
TARGET=\${1:-google.com}
LOG_FILE="/tmp/ping-monitor.log"

echo "=== 网络质量监控: $TARGET ==="
echo "日志文件: $LOG_FILE"
echo "按 Ctrl+C 停止"
echo ""

ping -i 1 "$TARGET" | while read LINE; do
  if echo "$LINE" | grep -q "time="; then
    TIME=$(echo "$LINE" | awk -F'time=' '{print $2}' | awk '{print $1}')
    TIMESTAMP=$(date +%H:%M:%S)
    echo "[$TIMESTAMP] 延迟: \${TIME}ms" | tee -a "$LOG_FILE"
  elif echo "$LINE" | grep -q "packet loss"; then
    LOSS=$(echo "$LINE" | awk -F', ' '{print $3}')
    echo "" | tee -a "$LOG_FILE"
    echo "统计: $LOSS" | tee -a "$LOG_FILE"
  fi
done` },
      { level: '挑战', task: '写一个"MTU 发现器"，找出到目标主机的最大 MTU', hint: 'ping -s + -M do（Don\'t Fragment）', answer: `#!/bin/bash
TARGET=\${1:-google.com}

echo "=== MTU 发现: $TARGET ==="
echo ""

# 从 1500 开始，逐步减小
for MTU in 1500 1400 1300 1200 1100 1000 900 800 700 600 576; do
  SIZE=$((MTU - 28))  # 减去 IP 和 ICMP 头
  if ping -c 1 -M do -s $SIZE "$TARGET" > /dev/null 2>&1; then
    echo "✓ MTU $MTU 可用"
    BEST_MTU=$MTU
  else
    echo "✗ MTU $MTU 不可用"
  fi
done

echo ""
if [ -n "$BEST_MTU" ]; then
  echo "推荐 MTU: $BEST_MTU"
else
  echo "无法确定 MTU"
fi` },
    ],
    prereqs: ['网络基础 — IP/ICMP', 'ping — 基础连通性测试'],
    nextSteps: ['traceroute — 路径追踪', 'mtr — 持续路径监控'],
  },
};
