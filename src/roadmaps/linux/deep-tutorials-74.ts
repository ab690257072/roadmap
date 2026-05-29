import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_74: Record<string, DeepTutorial> = {
  "yrxNYMluJ9OAQCKuM5W1u": {
    mentalModel: 'netstat 显示网络连接、路由表、接口统计——像网络的状态仪表盘，显示所有连接、监听端口、流量。',
    handsOn: [
      { title: '查看监听端口', cmd: 'netstat -tlnp', output: 'Active Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      567/sshd\ntcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      5678/nginx', explain: '-t TCP，-l 监听，-n 数字格式，-p 显示进程。显示所有监听的 TCP 端口和对应的进程。' },
      { title: '查看所有连接', cmd: 'netstat -tunap', output: 'Active Internet connections (servers and established)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        0      0 192.168.1.100:22        10.0.0.5:52345          ESTABLISHED 567/sshd', explain: '-a 所有连接（包括已建立）。-u 包括 UDP。显示所有网络连接和对应的进程。' },
      { title: '查看路由表', cmd: 'netstat -rn', output: 'Kernel IP routing table\nDestination     Gateway         Genmask         Flags   MSS Window  irtt Iface\n0.0.0.0         192.168.1.1     0.0.0.0         UG        0 0          0 eth0\n192.168.1.0     0.0.0.0         255.255.255.0   U         0 0          0 eth0', explain: '-r 路由表，-n 数字格式。显示路由表：目标网络、网关、掩码、接口。' },
      { title: '查看接口统计', cmd: 'netstat -i', output: 'Kernel Interface table\nIface             MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg\neth0             1500   123456      0      0 0         98765      0      0      0 BMRU\nlo              65536    12345      0      0 0         12345      0      0      0 LRU', explain: '-i 显示网络接口统计。RX-OK 接收的包数，TX-OK 发送的包数。ERR/DRP/OVR 是错误/丢弃/溢出。' },
    ],
    diagnosis: [
      { symptom: 'netstat 报 "command not found"', cause: 'netstat 已被 ss 替代（net-tools 包没安装）。', fix: 'apt install net-tools 安装。或者用 ss 代替：ss -tlnp。' },
      { symptom: '看到很多 TIME_WAIT 连接', cause: '正常的 TCP 连接关闭过程（持续 60 秒）。大量 TIME_WAIT 说明连接频繁建立/关闭。', fix: '正常现象，不需要处理。如果太多可以调整内核参数：sysctl -w net.ipv4.tcp_tw_reuse=1。' },
      { symptom: '看到很多 CLOSE_WAIT 连接', cause: '应用程序没正确关闭连接（代码 bug）。', fix: '检查应用程序代码，确保关闭 socket。或者重启应用程序。' },
    ],
    exercises: [
      { level: '基础', task: '用 netstat 查看所有监听的 TCP 端口，找出哪些进程在监听', hint: 'netstat -tlnp + grep', answer: '#!/bin/bash\necho "=== 监听的 TCP 端口 ==="\nnetstat -tlnp 2>/dev/null || ss -tlnp\n\necho ""\necho "=== 按进程分组 ==="\nnetstat -tlnp 2>/dev/null | awk \'NR>2 {print $7}\' | cut -d/ -f2 | sort | uniq -c | sort -rn | head -10' },
      { level: '进阶', task: '写一个"连接监控器"，定期检查到特定主机的连接数', hint: 'netstat + grep + wc + cron', answer: `#!/bin/bash
TARGET=\${1:-google.com}
LOG_FILE="/tmp/connection-monitor.log"

COUNT=$(netstat -tunap 2>/dev/null | grep "$TARGET" | wc -l)
TIMESTAMP=$(date +%Y-%m-%d\\ %H:%M:%S)

echo "[$TIMESTAMP] 到 $TARGET 的连接数: $COUNT" | tee -a "$LOG_FILE"

# 加到 crontab（每 5 分钟检查一次）：
# */5 * * * * /path/to/connection-monitor.sh google.com` },
      { level: '挑战', task: '写一个"端口扫描检测器"，找出哪些端口被外部主机连接', hint: 'netstat + awk 提取外部 IP + 统计', answer: `#!/bin/bash
echo "=== 外部连接统计 ==="
echo ""

# 提取所有已建立的连接
netstat -tunap 2>/dev/null | grep ESTABLISHED | awk '{print $5}' | cut -d: -f1 | grep -v "127.0.0.1\\|192.168.\\|10.\\|172.16." | sort | uniq -c | sort -rn | head -20

echo ""
echo "=== 按端口分组 ==="
netstat -tunap 2>/dev/null | grep ESTABLISHED | awk '{print $4}' | cut -d: -f2 | sort | uniq -c | sort -rn | head -20` },
    ],
    prereqs: ['网络基础 — IP/TCP/端口', 'ss — 现代网络工具'],
    nextSteps: ['Wireshark — 深度网络分析', 'nmap — 端口扫描'],
  },
};
