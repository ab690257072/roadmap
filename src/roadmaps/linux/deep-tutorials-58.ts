import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_58: Record<string, DeepTutorial> = {
  "D0yUzzaJsfhtdBWMtquAj": {
    mentalModel: 'IP 路由决定数据包从 A 到 B 走哪条路——像快递公司的分拣中心，根据目的地选择最优路径。路由表是"地址→下一跳"的映射。',
    handsOn: [
      { title: '看路由表', cmd: 'ip route', output: 'default via 192.168.1.1 dev eth0 proto dhcp metric 100\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.100\n10.0.0.0/8 via 192.168.1.254 dev eth0', explain: 'default 是默认路由（所有非本地流量走 192.168.1.1）。192.168.1.0/24 是本地子网（直接连接）。10.0.0.0/8 通过 192.168.1.254 转发。' },
      { title: '测试路由路径', cmd: 'ip route get 8.8.8.8', output: '8.8.8.8 via 192.168.1.1 dev eth0 src 192.168.1.100 uid 1000\n    cache', explain: 'ip route get 显示到特定 IP 会走哪条路由。via 是下一跳网关，dev 是出口网卡，src 是源 IP。' },
      { title: '添加静态路由', cmd: 'sudo ip route add 172.16.0.0/16 via 192.168.1.254', output: '（无输出，成功）', explain: '手动添加路由：到 172.16.0.0/16 的流量走 192.168.1.254。重启后失效，写入 /etc/network/interfaces 永久生效。' },
      { title: '追踪路由路径', cmd: 'traceroute google.com', output: ' 1  192.168.1.1 (192.168.1.1)  1.234 ms  1.456 ms  1.678 ms\n 2  10.0.0.1 (10.0.0.1)  5.678 ms  5.890 ms  6.012 ms\n 3  72.14.215.1 (72.14.215.1)  10.234 ms  10.456 ms  10.678 ms', explain: 'traceroute 显示数据包到达目标经过的每一跳（路由器）。每跳显示 3 次延迟。如果某跳延迟突然变大，可能是瓶颈。' },
    ],
    diagnosis: [
      { symptom: 'ping 不通外网但能 ping 通网关', cause: '默认路由没配置，或者网关没开 NAT（网络地址转换）。', fix: 'ip route 检查有没有 default 路由。如果没有：sudo ip route add default via 网关IP。或者检查网关的 NAT 配置。' },
      { symptom: '能 ping 通某些 IP 但 ping 不通其他 IP', cause: '路由表不完整，或者防火墙拦截了特定网段。', fix: 'ip route get 目标IP 看路由是否正确。traceroute 目标IP 看哪一跳断了。检查 iptables 规则。' },
      { symptom: '路由经常丢失', cause: 'DHCP 重新获取 IP 时覆盖了静态路由，或者 NetworkManager 冲突。', fix: '在 /etc/network/interfaces 里配置静态路由。或者禁用 NetworkManager 对特定网卡的管理。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前路由表，找出默认网关和本地子网', hint: 'ip route + grep default', answer: 'echo "=== 路由表 ==="\nip route\n\necho ""\necho "=== 默认网关 ==="\nip route | grep default | awk \'{print $3}\'\n\necho ""\necho "=== 本地子网 ==="\nip route | grep "proto kernel" | awk \'{print $1}\'\n\necho ""\necho "=== 测试路由 ==="\nTARGET="8.8.8.8"\necho "到 $TARGET 的路由:"\nip route get "$TARGET"' },
      { level: '进阶', task: '写一个脚本，自动检测并修复缺失的默认路由', hint: 'ip route + 条件判断 + ip route add', answer: '#!/bin/bash\necho "=== 路由检测 ==="\n\n# 检查默认路由\nDEFAULT_ROUTE=$(ip route | grep "^default")\n\nif [ -z "$DEFAULT_ROUTE" ]; then\n  echo "✗ 缺少默认路由"\n  \n  # 尝试从 DHCP 获取网关\n  GATEWAY=$(sudo dhclient -r eth0 2>/dev/null && sudo dhclient eth0 2>/dev/null && ip route | grep default | awk \'{print $3}\')\n  \n  if [ -n "$GATEWAY" ]; then\n    echo "✓ 已获取网关: $GATEWAY"\n    sudo ip route add default via "$GATEWAY" dev eth0\n    echo "✓ 已添加默认路由"\n  else\n    echo "✗ 无法获取网关，请手动配置"\n    echo "用法: sudo ip route add default via <网关IP> dev eth0"\n  fi\nelse\n  echo "✓ 默认路由正常: $DEFAULT_ROUTE"\nfi\n\n# 测试连通性\necho ""\necho "=== 连通性测试 ==="\nif ping -c 1 8.8.8.8 2>&1 | grep -q "1 received"; then\n  echo "✓ 外网连通"\nelse\n  echo "✗ 外网不通"\nfi' },
      { level: '挑战', task: '写一个"路由监控器"，实时检测路由变化并记录日志', hint: 'ip monitor route + while read + 日志记录', answer: `#!/bin/bash
LOG_FILE="/var/log/route-monitor.log"

echo "=== 路由监控器 ==="
echo "监听路由变化，记录到 $LOG_FILE"
echo "按 Ctrl+C 停止"
echo ""

# 初始化：记录当前路由
ip route > /tmp/route-before.txt

# 监听路由变化
ip monitor route | while read line; do
  TIMESTAMP=$(date +%Y-%m-%d\\ %H:%M:%S)

  # 记录到日志
  echo "[$TIMESTAMP] $line" >> "$LOG_FILE"

  # 检测默认路由变化
  if echo "$line" | grep -q "default"; then
    echo "[$TIMESTAMP] 默认路由变化: $line"

    # 发送告警（可选）
    # echo "默认路由变化: $line" | mail -s "Route Alert" admin@example.com
  fi

  # 对比前后路由
  ip route > /tmp/route-after.txt
  DIFF=$(diff /tmp/route-before.txt /tmp/route-after.txt)
  if [ -n "$DIFF" ]; then
    echo "[$TIMESTAMP] 路由表变化:"
    echo "$DIFF"
    cp /tmp/route-after.txt /tmp/route-before.txt
  fi
done` },
    ],
    prereqs: ['ip route — 看路由表', 'ping — 测试连通性'],
    nextSteps: ['iptables — 防火墙配置', 'BGP — 动态路由协议'],
  },
};
