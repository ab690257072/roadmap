import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_61: Record<string, DeepTutorial> = {
  "f5oQYhmjNM2_FD7Qe1zGK": {
    mentalModel: 'DNS（Domain Name System）把域名翻译成 IP 地址——像电话簿，你知道名字（google.com）找号码（142.250.80.46）。',
    handsOn: [
      { title: '查询域名', cmd: 'dig google.com', output: '; <<>> DiG 9.18.18 <<>> google.com\n;; ANSWER SECTION:\ngoogle.com.\t\t300\tIN\tA\t142.250.80.46\n\n;; Query time: 10 msec\n;; SERVER: 8.8.8.8#53(8.8.8.8)', explain: 'dig 查询 DNS。ANSWER SECTION 显示结果（A 记录是 IPv4 地址）。Query time 是查询耗时。SERVER 是使用的 DNS 服务器。' },
      { title: '简短查询', cmd: 'dig +short google.com', output: '142.250.80.46', explain: '+short 只显示 IP 地址。适合脚本中使用。' },
      { title: '查询特定记录类型', cmd: 'dig MX gmail.com && dig NS google.com && dig TXT google.com', output: 'gmail.com.\t\t3600\tIN\tMX\t5 gmail-smtp-in.l.google.com.\ngoogle.com.\t\t172800\tIN\tNS\tns1.google.com.\ngoogle.com.\t\t3600\tIN\tTXT\t"v=spf1 include:_spf.google.com ~all"', explain: 'MX 是邮件服务器，NS 是域名服务器，TXT 是文本记录（常用于 SPF、DKIM 验证）。' },
      { title: '反向查询（IP → 域名）', cmd: 'dig -x 8.8.8.8 +short', output: 'dns.google.', explain: '-x 反向查询（PTR 记录）。不是所有 IP 都有反向记录。' },
    ],
    diagnosis: [
      { symptom: 'dig 报 "connection timed out"', cause: 'DNS 服务器没响应，或者网络不通。', fix: '检查网络：ping 8.8.8.8。换 DNS 服务器：dig @8.8.8.8 google.com。检查 /etc/resolv.conf 配置。' },
      { symptom: 'dig 返回 NXDOMAIN', cause: '域名不存在（拼写错误，或者域名没注册）。', fix: '检查域名拼写。用 whois 查询域名注册信息：whois google.com。' },
      { symptom: 'dig 结果和浏览器访问的 IP 不一样', cause: 'DNS 缓存（本地或 ISP），或者 CDN（不同地区返回不同 IP）。', fix: '清空本地 DNS 缓存：systemd-resolve --flush-caches。换 DNS 服务器测试：dig @1.1.1.1 google.com。' },
    ],
    exercises: [
      { level: '基础', task: '查询 google.com 的 A、AAAA、MX、NS 记录', hint: 'dig A + dig AAAA + dig MX + dig NS', answer: 'echo "=== A 记录 (IPv4) ==="\ndig +short A google.com\n\necho ""\necho "=== AAAA 记录 (IPv6) ==="\ndig +short AAAA google.com\n\necho ""\necho "=== MX 记录 (邮件) ==="\ndig +short MX google.com\n\necho ""\necho "=== NS 记录 (域名服务器) ==="\ndig +short NS google.com' },
      { level: '进阶', task: '写一个"DNS 监控脚本"，定期检查域名解析是否正常，异常时报警', hint: 'dig + cron + 条件判断', answer: `#!/bin/bash
DOMAIN=\${1:-google.com}
EXPECTED_IP="142.250.80.46"  # 预期的 IP（可以多个）
LOG_FILE="/var/log/dns-monitor.log"

# 查询 DNS
ACTUAL_IP=$(dig +short "$DOMAIN" | head -1)

TIMESTAMP=$(date +%Y-%m-%d\\ %H:%M:%S)

if [ -z "$ACTUAL_IP" ]; then
  echo "[$TIMESTAMP] ✗ DNS 查询失败: $DOMAIN" | tee -a "$LOG_FILE"
  # 发送告警
  echo "DNS 查询失败: $DOMAIN" | mail -s "DNS Alert" admin@example.com
elif ! echo "$EXPECTED_IP" | grep -q "$ACTUAL_IP"; then
  echo "[$TIMESTAMP] ⚠️  DNS 解析异常: $DOMAIN → $ACTUAL_IP (预期: $EXPECTED_IP)" | tee -a "$LOG_FILE"
  echo "DNS 解析异常: $DOMAIN → $ACTUAL_IP" | mail -s "DNS Alert" admin@example.com
else
  echo "[$TIMESTAMP] ✓ DNS 正常: $DOMAIN → $ACTUAL_IP" | tee -a "$LOG_FILE"
fi

# 加到 crontab（每 5 分钟检查一次）：
# */5 * * * * /path/to/dns-monitor.sh google.com` },
      { level: '挑战', task: '搭建一个简单的 DNS 服务器（用于测试环境）', hint: 'bind9 + 配置 /etc/bind/named.conf.local', answer: `#!/bin/bash
# 安装 BIND9
sudo apt install -y bind9 bind9utils bind9-doc

# 配置正向解析区域
sudo tee /etc/bind/zones/test.local.db > /dev/null << EOF
\$TTL 86400
@   IN  SOA ns1.test.local. admin.test.local. (
        2024011501  ; Serial
        3600        ; Refresh
        1800        ; Retry
        604800      ; Expire
        86400       ; Minimum TTL
)

@       IN  NS  ns1.test.local.
ns1     IN  A   192.168.1.10
www     IN  A   192.168.1.20
mail    IN  A   192.168.1.30
@       IN  MX  10 mail.test.local.
EOF

# 配置 BIND
sudo tee -a /etc/bind/named.conf.local > /dev/null << EOF
zone "test.local" {
    type master;
    file "/etc/bind/zones/test.local.db";
};
EOF

# 重启 BIND
sudo systemctl restart bind9
sudo systemctl enable bind9

echo "DNS 服务器已启动"
echo "测试: dig @localhost www.test.local"` },
    ],
    prereqs: ['网络基础 — IP/TCP', 'dig — DNS 查询工具'],
    nextSteps: ['DNS 安全 — DNSSEC', 'DNS 缓存 — dnsmasq/unbound'],
  },
};
