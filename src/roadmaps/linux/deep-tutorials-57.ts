import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_57: Record<string, DeepTutorial> = {
  "X6Jw95kbyPgsDNRhvkQP9": {
    mentalModel: 'DHCP（Dynamic Host Configuration Protocol）自动分配 IP 地址——像酒店的自动入住系统，告诉你房间号（IP）、电梯在哪（网关）、餐厅在哪（DNS）。',
    handsOn: [
      { title: '看当前 DHCP 配置', cmd: 'cat /var/lib/dhcp/dhclient.eth0.leases | tail -20', output: 'lease {\n  interface "eth0";\n  fixed-address 192.168.1.100;\n  option subnet-mask 255.255.255.0;\n  option routers 192.168.1.1;\n  option domain-name-servers 8.8.8.8,8.8.4.4;\n  renew 2 2024/01/16 10:30:00;\n}', explain: 'DHCP 租约文件。fixed-address 是分配的 IP。routers 是网关。domain-name-servers 是 DNS。renew 是续租时间。' },
      { title: '手动续租 DHCP', cmd: 'sudo dhclient -r eth0 && sudo dhclient eth0', output: '（无输出，成功）', explain: 'dhclient -r 释放当前 IP。dhclient 重新获取。适合 IP 冲突或网络变更时使用。' },
      { title: '看 DHCP 服务器信息', cmd: 'sudo dhclient -v eth0 2>&1 | grep -E "DHCPREQUEST|DHCPACK|bound"', output: 'DHCPREQUEST of 192.168.1.100 on eth0 to 255.255.255.255 port 67\nDHCPACK of 192.168.1.100 from 192.168.1.1\nbound to 192.168.1.100 -- renewal in 43200 seconds.', explain: 'dhclient -v 显示详细过程。DHCPREQUEST 是客户端请求，DHCPACK 是服务器确认，bound 是绑定成功。' },
      { title: '配置静态 IP', cmd: 'sudo nano /etc/network/interfaces', output: 'auto eth0\niface eth0 inet static\n  address 192.168.1.100\n  netmask 255.255.255.0\n  gateway 192.168.1.1\n  dns-nameservers 8.8.8.8 8.8.4.4', explain: '把 dhcp 改成 static，手动指定 IP、掩码、网关、DNS。重启网络服务生效：systemctl restart networking。' },
    ],
    diagnosis: [
      { symptom: '获取不到 IP 地址', cause: 'DHCP 服务器没响应，或者网络不通。', fix: '检查网线/WiFi 连接。ping 网关。重启 DHCP 客户端：systemctl restart dhcpcd。或者手动配置静态 IP。' },
      { symptom: 'IP 地址经常变化', cause: 'DHCP 租期太短，或者多个 DHCP 服务器冲突。', fix: '在路由器上设置 DHCP 保留（固定 MAC → IP）。或者改用静态 IP。' },
      { symptom: 'IP 冲突（两台设备相同 IP）', cause: 'DHCP 分配了已被占用的 IP，或者有人手动配了相同的 IP。', fix: 'arp -a 看 MAC 地址。找到冲突设备改 IP。或者重启 DHCP 服务。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前网络的 DHCP 配置（IP、掩码、网关、DNS、租期）', hint: 'cat /var/lib/dhcp/dhclient.*.leases + ip route + cat /etc/resolv.conf', answer: 'echo "=== DHCP 配置 ==="\necho "IP 地址: $(ip -4 addr show eth0 | grep inet | awk \'{print $2}\')"\necho "网关: $(ip route | grep default | awk \'{print $3}\')"\necho "DNS: $(grep nameserver /etc/resolv.conf | awk \'{print $2}\')"\n\necho ""\necho "=== DHCP 租约 ==="\nsudo cat /var/lib/dhcp/dhclient.eth0.leases 2>/dev/null | tail -15 || \\\nsudo cat /var/lib/dhclient/dhclient.leases 2>/dev/null | tail -15 || \\\necho "未找到租约文件"' },
      { level: '进阶', task: '写一个脚本，监控 DHCP 租期，自动续期', hint: '解析租约文件 + crontab + dhclient', answer: `#!/bin/bash
LEASE_FILE="/var/lib/dhcp/dhclient.eth0.leases"

# 解析续租时间
RENEW=$(grep "renew" "$LEASE_FILE" | tail -1 | awk '{print $3, $4, $5}' | tr -d ';')

if [ -n "$RENEW" ]; then
  RENEW_EPOCH=$(date -d "$RENEW" +%s 2>/dev/null)
  NOW_EPOCH=$(date +%s)
  REMAINING=$(( (RENEW_EPOCH - NOW_EPOCH) / 60 ))

  echo "下次续租: $RENEW"
  echo "剩余时间: \${REMAINING} 分钟"

  # 如果剩余时间小于 10 分钟，立即续租
  if [ "$REMAINING" -lt 10 ]; then
    echo "续租中..."
    sudo dhclient -r eth0
    sudo dhclient eth0
    echo "已续租"
  fi
else
  echo "未找到续租时间"
fi

# 加到 crontab（每 30 分钟检查一次）：
# */30 * * * * /path/to/dhcp-monitor.sh` },
      { level: '挑战', task: '搭建一个简单的 DHCP 服务器（用于测试环境）', hint: 'isc-dhcp-server + 配置 /etc/dhcp/dhcpd.conf', answer: `#!/bin/bash
# 安装 DHCP 服务器
sudo apt install -y isc-dhcp-server

# 配置 DHCP 服务器
sudo tee /etc/dhcp/dhcpd.conf > /dev/null << EOF
default-lease-time 600;
max-lease-time 7200;
authoritative;

subnet 192.168.100.0 netmask 255.255.255.0 {
  range 192.168.100.100 192.168.100.200;
  option routers 192.168.100.1;
  option domain-name-servers 8.8.8.8, 8.8.4.4;
  option domain-name "test.local";
}
EOF

# 配置监听网卡
sudo sed -i 's/INTERFACESv4=""/INTERFACESv4="eth1"/' /etc/default/isc-dhcp-server

# 启动服务
sudo systemctl restart isc-dhcp-server
sudo systemctl enable isc-dhcp-server

echo "DHCP 服务器已启动"
echo "IP 范围: 192.168.100.100 ~ 192.168.100.200"

# 查看状态
sudo systemctl status isc-dhcp-server

# 查看分配的 IP
sudo cat /var/lib/dhcp/dhcpd.leases` },
    ],
    prereqs: ['ip addr — 看 IP 配置', '网络基础'],
    nextSteps: ['DNS — 域名解析', '静态 IP 配置'],
  },
};
