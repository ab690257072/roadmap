import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_50: Record<string, DeepTutorial> = {
  "0pciSsiQqIGJh3x8465_s": {
    mentalModel: 'TCP/IP 协议栈是互联网的基础——4 层模型（应用层/传输层/网络层/链路层）。每层负责不同的事，组合起来让数据从 A 到 B。',
    handsOn: [
      { title: '看网络连接', cmd: 'ss -tunap', output: 'Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:Port Process\ntcp   ESTAB  0      0      192.168.1.100:22    10.0.0.5:52345   users:(("sshd",pid=567,fd=3))\ntcp   LISTEN 0      128    0.0.0.0:80         0.0.0.0:*        users:(("nginx",pid=5678,fd=6))', explain: 'ss 显示网络连接。-t TCP，-u UDP，-n 数字格式，-a 所有状态，-p 进程。ESTAB=已连接，LISTEN=监听中。' },
      { title: '测试端口连通性', cmd: 'telnet google.com 80', output: 'Trying 142.250.80.46...\nConnected to google.com.\nEscape character is \'^]\'.', explain: 'telnet host port 测试 TCP 端口是否通。Connected 表示端口开放。也可以用 nc -zv host port（更快）。' },
      { title: '看路由表', cmd: 'ip route', output: 'default via 192.168.1.1 dev eth0 proto dhcp metric 100\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.100', explain: 'ip route 显示路由表。default 是默认网关（所有非本地流量走这里）。192.168.1.0/24 是本地网络。' },
      { title: '抓包', cmd: 'sudo tcpdump -i eth0 -n port 80', output: '14:30:01.123456 IP 192.168.1.100.52345 > 142.250.80.46.80: Flags [S], seq 1234567890\n14:30:01.234567 IP 142.250.80.46.80 > 192.168.1.100.52345: Flags [S.], seq 9876543210, ack 1234567891', explain: 'tcpdump 抓网络包。-i eth0 指定网卡，-n 不解析域名，port 80 只抓 HTTP。看到 SYN/SYN-ACK 是 TCP 三次握手。' },
    ],
    diagnosis: [
      { symptom: 'ping 不通但端口能连', cause: 'ICMP（ping）被防火墙屏蔽，但 TCP 端口开放。很多企业网络禁 ping。', fix: '用 telnet 或 nc 测试端口：nc -zv host 80。或者 curl 测试 HTTP：curl -I http://host。' },
      { symptom: '能 ping 通但端口连不上', cause: '目标服务没启动，或者端口被防火墙拦截。', fix: 'ss -tlnp | grep :port 检查服务是否监听。iptables -L -n 检查防火墙规则。或者服务绑定在 127.0.0.1（只允许本地访问）。' },
      { symptom: '网络很慢', cause: '带宽不足、延迟高、丢包、或者 DNS 解析慢。', fix: 'ping host 看延迟和丢包。mtr host 看路径上哪一跳有问题。dig @8.8.8.8 host 测试 DNS 速度。' },
    ],
    exercises: [
      { level: '基础', task: '查看本机所有监听的 TCP 端口，找出对应的进程', hint: 'ss -tlnp', answer: 'echo "=== 监听的 TCP 端口 ==="\nss -tlnp | awk \'NR>1 {\n  split($4, addr, ":");\n  port = addr[length(addr)];\n  proc = $6;\n  gsub(/.*\\("/, "", proc);\n  gsub(/".*/, "", proc);\n  printf "端口: %-6s  进程: %s\\n", port, proc\n}\' | sort -n' },
      { level: '进阶', task: '写一个"端口扫描器"，扫描指定主机的常用端口', hint: 'nc -zv + 循环', answer: '#!/bin/bash\nTARGET=${1:-localhost}\nPORTS="21 22 23 25 53 80 110 143 443 993 995 3306 5432 6379 8080 8443"\n\necho "=== 端口扫描: $TARGET ==="\necho ""\n\nfor port in $PORTS; do\n  if nc -zv -w 1 "$TARGET" "$port" 2>&1 | grep -q "succeeded\\|open"; then\n    echo "✓ 端口 $port 开放"\n  else\n    echo "✗ 端口 $port 关闭"\n  fi\ndone\n\necho ""\necho "扫描完成"' },
      { level: '挑战', task: '写一个"网络诊断工具"，自动检测连通性、延迟、丢包、DNS、路由', hint: 'ping + traceroute + dig + ip route', answer: '#!/bin/bash\nTARGET=${1:-google.com}\n\necho "=== 网络诊断: $TARGET ==="\necho ""\n\necho "--- 1. DNS 解析 ---"\ndig +short "$TARGET" | head -3\necho ""\n\necho "--- 2. Ping 测试（10 次）---"\nping -c 10 "$TARGET" | tail -3\necho ""\n\necho "--- 3. 路由追踪 ---"\ntraceroute -m 15 "$TARGET" 2>/dev/null | head -15\necho ""\n\necho "--- 4. TCP 连接测试 ---"\nfor port in 80 443; do\n  if nc -zv -w 3 "$TARGET" "$port" 2>&1 | grep -q "succeeded\\|open"; then\n    echo "✓ 端口 $port 开放"\n  else\n    echo "✗ 端口 $port 关闭或超时"\n  fi\ndone\necho ""\n\necho "--- 5. HTTP 响应 ---"\ncurl -s -o /dev/null -w "HTTP 状态: %{http_code}\\n响应时间: %{time_total}s\\n" "http://$TARGET" 2>/dev/null || echo "HTTP 请求失败"\necho ""\n\necho "--- 6. 本地网络状态 ---"\necho "默认网关: $(ip route | grep default | awk \'{print $3}\')"\necho "本机 IP: $(ip -4 addr show | grep inet | grep -v 127.0.0.1 | awk \'{print $2}\' | head -1)"\necho "DNS 服务器: $(grep nameserver /etc/resolv.conf | awk \'{print $2}\')"' },
    ],
    prereqs: ['ss/netstat — 网络连接查看', 'ping/traceroute — 网络测试'],
    nextSteps: ['iptables — 防火墙配置', 'Wireshark — 深度抓包分析'],
  },
};
