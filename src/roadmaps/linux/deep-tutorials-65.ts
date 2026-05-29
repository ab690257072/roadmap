import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_65: Record<string, DeepTutorial> = {
  "tVrbVcNEfc11FbEUoO2Dk": {
    mentalModel: '文件传输是在不同系统间移动数据——scp 是加密的单次传输，rsync 是增量同步（只传变化的部分），wget/curl 是下载。',
    handsOn: [
      { title: 'SCP 传输文件', cmd: 'scp file.txt user@192.168.1.100:/tmp/', output: 'file.txt                                    100% 1234     1.2MB/s   00:00', explain: 'scp source destination。scp file user@host:path 上传，scp user@host:file . 下载。-r 递归传输目录。' },
      { title: 'rsync 增量同步', cmd: 'rsync -avz /local/dir/ user@192.168.1.100:/remote/dir/', output: 'sending incremental file list\n./\nfile1.txt\nfile2.txt\nsent 12345 bytes  received 123 bytes', explain: '-a 归档模式（保留权限、时间等）。-v 显示详情。-z 压缩传输。rsync 只传变化的部分，比 scp 快得多。' },
      { title: 'wget 下载文件', cmd: 'wget https://example.com/file.zip', output: '--2024-01-15 14:30:00--  https://example.com/file.zip\nResolving example.com... 93.184.216.34\nConnecting to example.com|93.184.216.34|:443... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 1234567 (1.2M) [application/zip]\nSaving to: \'file.zip\'', explain: 'wget 下载文件。-O 指定保存文件名。-c 断点续传。-q 安静模式。' },
      { title: 'curl 下载和上传', cmd: 'curl -O https://example.com/file.zip && curl -F "file=@local.txt" https://upload.example.com/', output: '  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100 1234k  100 1234k    0     0  5678k      0 --:--:-- --:--:-- --:--:-- 5678k', explain: 'curl -O 下载（保留远程文件名）。curl -F 上传文件（multipart/form-data）。curl 比 wget 更灵活，支持更多协议。' },
    ],
    diagnosis: [
      { symptom: 'scp/rsync 传输很慢', cause: '网络带宽不足，或者没开压缩（-z）。', fix: '加 -C 压缩：rsync -avzC。或者限制带宽：--bwlimit=1000（KB/s）。或者用更快的网络。' },
      { symptom: 'rsync 报 "connection refused"', cause: '远程服务器没开 SSH，或者防火墙拦截了 22 端口。', fix: '检查远程 SSH 服务：ssh user@host。检查防火墙：telnet host 22。' },
      { symptom: 'wget 下载中断', cause: '网络不稳定，或者服务器不支持断点续传。', fix: 'wget -c 断点续传。或者用 aria2c（多线程下载）。或者用 curl -C - 断点续传。' },
    ],
    exercises: [
      { level: '基础', task: '用 rsync 同步本地目录到远程服务器，排除 .git 和 node_modules', hint: 'rsync -avz --exclude', answer: '#!/bin/bash\nLOCAL_DIR="/home/user/project"\nREMOTE_USER="user"\nREMOTE_HOST="192.168.1.100"\nREMOTE_DIR="/home/user/backup"\n\nrsync -avz \\\n  --exclude=".git" \\\n  --exclude="node_modules" \\\n  --exclude="*.log" \\\n  "$LOCAL_DIR/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/"\n\necho "✓ 同步完成"' },
      { level: '进阶', task: '写一个"自动备份脚本"，每天同步指定目录到远程服务器', hint: 'rsync + crontab', answer: `#!/bin/bash
BACKUP_DIRS=("/home/user/documents" "/home/user/photos")
REMOTE="user@192.168.1.100:/backup"
LOG="/var/log/backup.log"
DATE=$(date +%Y-%m-%d\\ %H:%M:%S)

echo "[$DATE] 开始备份" >> "$LOG"

for DIR in "\${BACKUP_DIRS[@]}"; do
  if [ -d "$DIR" ]; then
    rsync -avz --delete "$DIR/" "$REMOTE/$(basename "$DIR")/" >> "$LOG" 2>&1
    echo "[$DATE] ✓ 已备份: $DIR" >> "$LOG"
  else
    echo "[$DATE] ✗ 目录不存在: $DIR" >> "$LOG"
  fi
done

echo "[$DATE] 备份完成" >> "$LOG"
echo "" >> "$LOG"

# 加到 crontab（每天凌晨 3 点执行）：
# 0 3 * * * /path/to/backup.sh` },
      { level: '挑战', task: '写一个"文件传输服务器"，支持 HTTP 上传/下载', hint: 'python3 -m http.server + nginx', answer: '#!/bin/bash\n# 方法 1: 简单 HTTP 服务器（Python）\ncd /var/www/files\npython3 -m http.server 8080\n\n# 方法 2: Nginx + WebDAV（支持上传）\nsudo apt install -y nginx nginx-extras\n\nsudo tee /etc/nginx/sites-available/fileserver > /dev/null << EOF\nserver {\n    listen 80;\n    server_name files.example.com;\n    \n    root /var/www/files;\n    \n    location / {\n        dav_methods PUT DELETE MKCOL COPY MOVE;\n        dav_ext_methods PROPFIND OPTIONS;\n        dav_access user:rw group:rw all:r;\n        \n        autoindex on;\n        client_max_body_size 1G;\n    }\n}\nEOF\n\nsudo ln -s /etc/nginx/sites-available/fileserver /etc/nginx/sites-enabled/\nsudo systemctl restart nginx\n\necho "文件服务器已启动: http://files.example.com"\necho "上传: curl -T file.txt http://files.example.com/"\necho "下载: curl -O http://files.example.com/file.txt"' },
    ],
    prereqs: ['SSH — 远程登录', '网络基础 — HTTP'],
    nextSteps: ['SFTP — SSH 文件传输协议', 'NFS — 网络文件系统'],
  },
};
