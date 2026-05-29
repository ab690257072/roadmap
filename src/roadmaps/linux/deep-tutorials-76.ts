import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_76: Record<string, DeepTutorial> = {
  "7seneb4TWts4v1_x8xlcZ": {
    mentalModel: 'Packet Analysis 是捕获和分析网络数据包——像法医检验证据，用 Wireshark/tcpdump 查看网络通信的每一个细节。',
    handsOn: [
      { title: 'tcpdump 抓包', cmd: 'sudo tcpdump -i eth0 -n -c 10', output: '14:30:01.123456 IP 192.168.1.100.52345 > 142.250.80.46.80: Flags [S], seq 1234567890, win 65535\n14:30:01.234567 IP 142.250.80.46.80 > 192.168.1.100.52345: Flags [S.], seq 9876543210, ack 1234567891, win 65535', explain: 'tcpdump 捕获网络包。-i eth0 指定网卡。-n 不解析域名。-c 10 抓 10 个包。显示 TCP 三次握手过程。' },
      { title: '过滤特定端口', cmd: 'sudo tcpdump -i eth0 -n port 80', output: '14:30:01.123456 IP 192.168.1.100.52345 > 142.250.80.46.80: Flags [S], seq 1234567890', explain: 'port 80 只抓 HTTP 流量。可以组合：port 80 or port 443 抓 HTTP 和 HTTPS。' },
      { title: '保存为 pcap 文件', cmd: 'sudo tcpdump -i eth0 -n -w capture.pcap', output: '（无输出，保存到文件）', explain: '-w capture.pcap 保存到文件（可以用 Wireshark 打开分析）。-r capture.pcap 读取文件。' },
      { title: 'Wireshark 分析', cmd: 'wireshark capture.pcap', output: '（Wireshark GUI 打开）', explain: 'Wireshark 是图形化网络分析工具。可以过滤、搜索、跟踪 TCP 流、分析协议。' },
    ],
    diagnosis: [
      { symptom: 'tcpdump 报 "permission denied"', cause: '抓包需要 root 权限或者 CAP_NET_RAW 能力。', fix: '用 sudo tcpdump。或者给二进制文件加能力：setcap cap_net_raw+ep /usr/bin/tcpdump。' },
      { symptom: '抓不到包', cause: '网卡没选对，或者包被防火墙丢弃。', fix: 'ip link show 看网卡名。tcpdump -i any 抓所有网卡。或者检查防火墙规则。' },
      { symptom: 'Wireshark 显示太多包', cause: '没设置过滤条件。', fix: '设置显示过滤器：http 只看 HTTP，tcp.port == 80 只看 80 端口。或者 ip.addr == 192.168.1.100 只看特定 IP。' },
    ],
    exercises: [
      { level: '基础', task: '用 tcpdump 抓 10 个 HTTP 包，保存为 pcap 文件', hint: 'tcpdump + port 80 + -w', answer: '#!/bin/bash\n# 1. 抓 10 个 HTTP 包\nsudo tcpdump -i eth0 -n -c 10 port 80 -w /tmp/http-capture.pcap\n\n# 2. 查看抓包文件\nsudo tcpdump -r /tmp/http-capture.pcap\n\n# 3. 用 Wireshark 打开（如果可用）\n# wireshark /tmp/http-capture.pcap' },
      { level: '进阶', task: '用 tcpdump 分析 DNS 查询，找出查询最多的域名', hint: 'tcpdump port 53 + awk 提取域名 + sort + uniq', answer: `#!/bin/bash
# 1. 抓 DNS 包（100 个）
sudo tcpdump -i eth0 -n -c 100 port 53 > /tmp/dns.log

# 2. 提取域名并统计
awk '{for(i=1;i<=NF;i++) if($i ~ /\./ && $i !~ /[0-9]/) print $i}' /tmp/dns.log | \\
  grep -v "arpa\\|in-addr" | \\
  sort | uniq -c | sort -rn | head -10

# 3. 清理
rm /tmp/dns.log` },
      { level: '挑战', task: '用 tcpdump 捕获并分析 TCP 三次握手，计算连接建立时间', hint: 'tcpdump + tcp[13] 过滤 SYN/SYN-ACK + awk 计算时间差', answer: `#!/bin/bash
# 1. 抓 TCP 三次握手（SYN 和 SYN-ACK）
sudo tcpdump -i eth0 -n 'tcp[13] & 0x02 != 0' -c 20 > /tmp/syn.log

# 2. 提取 SYN 和 SYN-ACK
echo "=== SYN 包 ==="
grep "Flags \\[S\\]" /tmp/syn.log | head -5

echo ""
echo "=== SYN-ACK 包 ==="
grep "Flags \\[S.\\]" /tmp/syn.log | head -5

# 3. 计算连接建立时间（需要更复杂的脚本）
# 实际应用中可以用 Wireshark 的"TCP Stream"功能

# 4. 清理
rm /tmp/syn.log` },
    ],
    prereqs: ['网络基础 — TCP/IP 协议栈', 'tcpdump — 基础抓包'],
    nextSteps: ['Wireshark — 高级网络分析', 'tshark — 命令行版 Wireshark'],
  },
};
