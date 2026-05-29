import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_64: Record<string, DeepTutorial> = {
  "uk6UMuI8Uhf02TBAGVeLS": {
    mentalModel: 'SSH（Secure Shell）是加密的远程登录协议——像加密的信使，所有通信都被加密，防止窃听和篡改。',
    handsOn: [
      { title: '远程登录', cmd: 'ssh user@192.168.1.100', output: 'user@192.168.1.100\'s password:\nWelcome to Ubuntu 22.04.3 LTS', explain: 'ssh user@host 远程登录。首次连接会提示确认主机指纹（防止中间人攻击）。输入密码后进入远程 shell。' },
      { title: '密钥登录（免密码）', cmd: 'ssh-keygen -t ed25519 && ssh-copy-id user@192.168.1.100', output: 'Generating public/private ed25519 key pair.\n...\nNumber of key(s) added: 1', explain: 'ssh-keygen 生成密钥对（私钥 ~/.ssh/id_ed25519，公钥 ~/.ssh/id_ed25519.pub）。ssh-copy-id 把公钥复制到远程服务器。之后登录不需要密码。' },
      { title: '端口转发', cmd: 'ssh -L 8080:localhost:80 user@192.168.1.100', output: '（无输出，但本地 8080 端口转发到远程 80 端口）', explain: '-L 本地端口:远程主机:远程端口。本地访问 localhost:8080 会被转发到远程服务器的 localhost:80。适合访问远程内网服务。' },
      { title: 'SCP 传文件', cmd: 'scp file.txt user@192.168.1.100:/tmp/', output: 'file.txt                                    100% 1234     1.2MB/s   00:00', explain: 'scp 通过 SSH 加密传输文件。scp file user@host:path 上传，scp user@host:file . 下载。rsync 更适合大文件/目录同步。' },
    ],
    diagnosis: [
      { symptom: 'SSH 连不上（Connection refused）', cause: '远程服务器没开 SSH 服务，或者防火墙拦截了 22 端口。', fix: '远程检查：systemctl status sshd。本地检查：telnet host 22 或 nc -zv host 22 测试端口。' },
      { symptom: 'SSH 密码正确但登录失败', cause: '服务器禁用了密码登录（只允许密钥），或者账户被锁定。', fix: '检查 /etc/ssh/sshd_config 的 PasswordAuthentication 设置。或者用密钥登录。' },
      { symptom: 'SSH 很慢', cause: 'DNS 反向解析慢，或者 GSSAPI 认证超时。', fix: '在 /etc/ssh/sshd_config 加 UseDNS no。或者在 ~/.ssh/config 加 GSSAPIAuthentication no。' },
    ],
    exercises: [
      { level: '基础', task: '生成 SSH 密钥对，并配置免密码登录到远程服务器', hint: 'ssh-keygen + ssh-copy-id', answer: '#!/bin/bash\nREMOTE_USER="user"\nREMOTE_HOST="192.168.1.100"\n\n# 1. 生成密钥（如果还没有）\nif [ ! -f ~/.ssh/id_ed25519 ]; then\n  ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519 -N ""\n  echo "✓ 已生成密钥"\nfi\n\n# 2. 复制公钥到远程\nssh-copy-id -i ~/.ssh/id_ed25519.pub "$REMOTE_USER@$REMOTE_HOST"\n\n# 3. 测试免密码登录\nssh "$REMOTE_USER@$REMOTE_HOST" "echo \'✓ 免密码登录成功\'"' },
      { level: '进阶', task: '配置 SSH 别名，简化登录命令', hint: '~/.ssh/config', answer: '#!/bin/bash\n# 编辑 ~/.ssh/config\ncat >> ~/.ssh/config << EOF\n\nHost myserver\n    HostName 192.168.1.100\n    User your_username\n    Port 22\n    IdentityFile ~/.ssh/id_ed25519\n    ForwardAgent yes\nEOF\n\necho "✓ 已配置别名"\necho "现在可以用: ssh myserver" 登录' },
      { level: '挑战', task: '搭建一个"跳板机"，通过中间服务器访问内网服务器', hint: 'ssh -J jump_server target_server', answer: `#!/bin/bash
# 配置 ~/.ssh/config
cat >> ~/.ssh/config << EOF

# 跳板机
Host jump
    HostName 203.0.113.10
    User jump_user
    IdentityFile ~/.ssh/id_ed25519

# 内网服务器（通过跳板机）
Host internal
    HostName 192.168.1.100
    User internal_user
    IdentityFile ~/.ssh/id_ed25519
    ProxyJump jump
EOF

# 现在可以直接：
# ssh internal
# 会自动通过 jump 跳板机连接

# 或者用 -J 参数：
# ssh -J jump_user@203.0.113.10 internal_user@192.168.1.100` },
    ],
    prereqs: ['网络基础 — IP/端口', '加密基础 — 公钥/私钥'],
    nextSteps: ['SSH 安全 — 禁用密码登录、改端口', 'SSH 隧道 — 动态端口转发（SOCKS 代理）'],
  },
};
