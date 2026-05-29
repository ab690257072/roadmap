import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_71: Record<string, DeepTutorial> = {
  "BnB3Rirh4R7a7LW7-k-95": {
    mentalModel: 'traceroute 显示数据包从源到目标经过的每一跳（路由器）——像快递的物流追踪，显示包裹经过了哪些中转站。',
    handsOn: [
      { title: '基础 traceroute', cmd: 'traceroute google.com', output: 'traceroute to google.com (142.250.80.46), 30 hops max, 60 byte packets\n 1  192.168.1.1 (192.168.1.1)  1.234 ms  1.456 ms  1.678 ms\n 2  10.0.0.1 (10.0.0.1)  5.678 ms  5.890 ms  6.012 ms\n 3  72.14.215.1 (72.14.215.1)  10.234 ms  10.456 ms  10.678 ms\n 4  ord38s33-in-f14.1e100.net (142.250.80.46)  10.890 ms  10.912 ms  10.934 ms', explain: '每跳显示 3 次延迟（发 3 个包）。如果某跳显示 * * * 表示没回应（可能被防火墙拦截）。延迟突然变大说明那一跳有瓶颈。' },
      { title: 'TCP traceroute', cmd: 'sudo traceroute -T -p 80 google.com', output: 'traceroute to google.com (142.250.80.46), 30 hops max, 60 byte packets\n 1  192.168.1.1 (192.168.1.1)  1.234 ms  1.456 ms  1.678 ms\n 2  10.0.0.1 (10.0.0.1)  5.678 ms  5.890 ms  6.012 ms', explain: '-T 用 TCP SYN 包代替 UDP。-p 80 目标端口 80。适合测试防火墙规则（很多防火墙拦截 UDP 但放行 TCP 80）。' },
      { title: 'mtr 持续监控', cmd: 'mtr google.com', output: 'Host              Loss%   Snt   Last   Avg  Best  Wrst StDev\n1. 192.168.1.1     0.0%    10    1.2   1.3   1.1   1.5   0.1\n2. 10.0.0.1        0.0%    10    5.6   5.7   5.5   5.9   0.1', explain: 'mtr 结合 ping 和 traceroute，持续发送包并统计每跳的丢包率和延迟。适合监控网络稳定性。' },
      { title: 'tracepath（无需 root）', cmd: 'tracepath google.com', output: ' 1?: [LOCALHOST]                                         pmtu 1500\n 1:  192.168.1.1                                           1.234ms\n 2:  10.0.0.1                                              5.678ms', explain: 'tracepath 不需要 root 权限，还能检测路径 MTU（最大传输单元）。' },
    ],
    diagnosis: [
      { symptom: 'traceroute 某跳显示 * * *', cause: '那一跳的路由器不回应 ICMP/UDP（被防火墙拦截），或者延迟太高超时了。', fix: '换 TCP traceroute：traceroute -T -p 80 host。或者用 mtr 持续监控看是否有丢包。' },
      { symptom: 'traceroute 延迟突然变大', cause: '那一跳有网络瓶颈（带宽不足、拥塞），或者跨运营商（互联点拥塞）。', fix: '用 mtr 看那一跳的丢包率。或者换网络测试（如手机热点）对比。' },
      { symptom: 'traceroute 只有一跳就到达', cause: '目标在同一局域网，或者用了 VPN/代理。', fix: '检查网络配置：ip route。或者 traceroute -n 不解析域名看 IP。' },
    ],
    exercises: [
      { level: '基础', task: '用 traceroute 追踪到 3 个不同网站的路线，比较跳数和延迟', hint: 'traceroute + 比较', answer: `#!/bin/bash
TARGETS=("google.com" "cloudflare.com" "github.com")

for TARGET in "\${TARGETS[@]}"; do
  echo "=== $TARGET ==="
  traceroute -n "$TARGET" 2>/dev/null | head -15
  echo ""
done` },
      { level: '进阶', task: '写一个"网络路径监控器"，定期 traceroute 并记录变化', hint: 'traceroute + cron + diff', answer: `#!/bin/bash
TARGET=\${1:-google.com}
LOG_DIR="/tmp/traceroute-logs"
mkdir -p "$LOG_DIR"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="$LOG_DIR/traceroute_$TARGET_$TIMESTAMP.log"

echo "=== traceroute: $TARGET ($TIMESTAMP) ===" | tee "$LOG_FILE"
traceroute -n "$TARGET" 2>/dev/null | tee -a "$LOG_FILE"

# 比较历史
PREV_LOG=$(ls -t "$LOG_DIR"/traceroute_$TARGET_*.log 2>/dev/null | head -2 | tail -1)
if [ -n "$PREV_LOG" ] && [ "$PREV_LOG" != "$LOG_FILE" ]; then
  echo ""
  echo "=== 与上次比较 ==="
  diff "$PREV_LOG" "$LOG_FILE" | head -20
fi` },
      { level: '挑战', task: '用 mtr 生成网络质量报告，分析每跳的丢包率和延迟', hint: 'mtr -r -c 100（报告模式，100 个包）', answer: `#!/bin/bash
TARGET=\${1:-google.com}
REPORT="/tmp/network-report-$TARGET.txt"

echo "=== 网络质量报告: $TARGET ===" | tee "$REPORT"
echo "时间: $(date)" | tee -a "$REPORT"
echo "" | tee -a "$REPORT"

# 运行 mtr（报告模式，100 个包）
echo "运行 mtr（100 个包）..." | tee -a "$REPORT"
mtr -r -c 100 -n "$TARGET" | tee -a "$REPORT"

echo "" | tee -a "$REPORT"
echo "=== 分析 ===" | tee -a "$REPORT"

# 找出丢包率最高的跳
WORST_LOSS=$(mtr -r -c 100 -n "$TARGET" | awk 'NR>2 {print $2, $1}' | sort -rn | head -1)
echo "最差丢包: $WORST_LOSS" | tee -a "$REPORT"

# 找出延迟最高的跳
WORST_LATENCY=$(mtr -r -c 100 -n "$TARGET" | awk 'NR>2 {print $5, $1}' | sort -rn | head -1)
echo "最差延迟: $WORST_LATENCY" | tee -a "$REPORT"` },
    ],
    prereqs: ['网络基础 — IP/路由', 'ping — 连通性测试'],
    nextSteps: ['mtr — 持续路径监控', 'Wireshark — 深度网络分析'],
  },
};
