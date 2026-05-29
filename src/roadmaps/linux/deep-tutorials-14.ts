import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_14: Record<string, DeepTutorial> = {
  "iD073xTmpzvQFfXwcwXcY": {
    mentalModel: 'tar 把多个文件合成一个包（打包），gzip 把文件变小（压缩）。通常合用：tar -czf 打包并压缩。',
    handsOn: [
      { title: '打包+压缩（最常用）', cmd: 'tar -czf backup.tar.gz /var/www/html', output: '（无输出，成功）', explain: '-c 创建，-z gzip 压缩，-f 指定文件名。记住 czf 就是 Create+Zip+File。最常用的备份/传输命令。' },
      { title: '解压', cmd: 'tar -xzf backup.tar.gz -C /tmp/restore', output: '（无输出，成功）', explain: '-x 解压（extract）。-C dir/ 指定解压到哪个目录。不加 -C 就解压到当前目录。' },
      { title: '查看包内容', cmd: 'tar -tzf backup.tar.gz | head -10', output: 'var/www/html/\nvar/www/html/index.html\nvar/www/html/style.css', explain: '-t 列出（list）包里的文件。-v 显示详细信息（权限、大小、日期）。下载包后先看一眼内容再决定解压到哪。' },
      { title: '排除文件', cmd: 'tar -czf backup.tar.gz --exclude="node_modules" --exclude=".git" /home/tu/project', output: '（无输出，成功）', explain: '--exclude 排除目录或文件。node_modules 和 .git 通常很大且不需要备份。' },
    ],
    diagnosis: [
      { symptom: '解压时报 "Cannot open: No such file or directory"', cause: '-C 指定的目录不存在。tar 不会自动创建目录。', fix: 'mkdir -p /tmp/restore 先创建目录，再 tar -xzf backup.tar.gz -C /tmp/restore。' },
      { symptom: '解压后文件散落在当前目录', cause: '没加 -C 指定目录。tar 默认解压到当前目录。', fix: '先 mkdir 一个临时目录，cd 进去再解压。或者用 -C 指定：tar -xzf backup.tar.gz -C /tmp/restore。' },
      { symptom: 'tar 包很大', cause: '没排除 node_modules、.git、日志等大目录。', fix: '加 --exclude：tar -czf backup.tar.gz --exclude="node_modules" --exclude=".git" --exclude="*.log" /path。' },
    ],
    exercises: [
      { level: '基础', task: '把 ~/Documents 打包压缩成 backup.tar.gz，然后查看包内容确认', hint: 'tar -czf + tar -tzf', answer: 'tar -czf backup.tar.gz ~/Documents\ntar -tzf backup.tar.gz | head -20\nls -lh backup.tar.gz' },
      { level: '进阶', task: '写一个备份脚本，每天备份 /var/www，文件名带日期，保留最近 7 天', hint: 'tar + date + find -mtime +7 -delete', answer: '#!/bin/bash\nDATE=$(date +%Y%m%d)\nBACKUP_DIR="/backup"\nSOURCE="/var/www"\n\nmkdir -p "$BACKUP_DIR"\ntar -czf "$BACKUP_DIR/www-$DATE.tar.gz" "$SOURCE"\n\n# 删除 7 天前的备份\nfind "$BACKUP_DIR" -name "www-*.tar.gz" -mtime +7 -delete\n\necho "备份完成: www-$DATE.tar.gz"' },
      { level: '挑战', task: '写一个增量备份脚本：只备份最近 24 小时内修改的文件', hint: 'find -mtime -1 找最近修改的文件，tar -T 从文件列表打包', answer: '#!/bin/bash\nDATE=$(date +%Y%m%d)\nBACKUP_DIR="/backup/incremental"\nSOURCE="/var/www"\n\nmkdir -p "$BACKUP_DIR"\n\n# 找最近 24 小时修改的文件\nfind "$SOURCE" -type f -mtime -1 > /tmp/modified_files.txt\n\n# 从文件列表打包\ntar -czf "$BACKUP_DIR/www-inc-$DATE.tar.gz" -T /tmp/modified_files.txt\n\necho "增量备份完成: $(wc -l < /tmp/modified_files.txt) 个文件"' },
    ],
    prereqs: ['find — 搜索文件', '日期命令 — date'],
    nextSteps: ['rsync — 增量同步', 'cron — 定时任务'],
  },

  "RsOTPZPZGTEIt1Lk41bQV": {
    mentalModel: '除了读写文件，你还需要会找文件（find）、看文件类型（file）、查文件元信息（stat）。',
    handsOn: [
      { title: '按名称搜索', cmd: 'find /etc -name "*.conf" -maxdepth 1', output: '/etc/nginx.conf\n/etc/ssh/sshd_config\n/etc/mysql/my.cnf', explain: '-name 按文件名搜（支持通配符 *）。-iname 忽略大小写。-maxdepth 1 不递归（只搜当前层）。' },
      { title: '按条件搜索', cmd: 'find /var/log -size +100M -mtime -7', output: '/var/log/syslog.1\n/var/log/kern.log.1', explain: '-size +100M 大于 100MB。-mtime -7 最近 7 天改过。-perm 644 精确权限匹配。-user www-data 按所有者搜。' },
      { title: '对搜索结果执行动作', cmd: 'find . -name "*.tmp" -delete', output: '（删除了所有 .tmp 文件）', explain: '-delete 直接删除。-exec gzip {} \\; 对每个文件执行 gzip。-exec 后面跟命令，{} 是文件名占位符。' },
      { title: '看文件类型和元信息', cmd: 'file /etc/passwd && stat /etc/passwd', output: '/etc/passwd: ASCII text\n  File: /etc/passwd\n  Size: 2843       Blocks: 8          IO Block: 4096   regular file', explain: 'file 检测文件类型（文本、ELF、图片等）。stat 看大小、权限、inode、三个时间戳（修改/访问/状态变更）。' },
    ],
    diagnosis: [
      { symptom: 'find 搜索很慢', cause: 'find 默认递归搜索整个目录树。在大目录（如 / 或 /home）上很慢。', fix: '加 -maxdepth 1 限制深度。或用 locate 查数据库（更快但可能不是最新，用 updatedb 更新）。' },
      { symptom: 'find -exec 报错 "missing argument to -exec"', cause: '-exec 命令末尾必须有 \\;（转义的分号）或 +（批量执行）。', fix: 'find . -name "*.log" -exec rm {} \\;（逐个执行）或 find . -name "*.log" -exec rm {} +（批量执行，更快）。' },
      { symptom: 'find 结果里有 Permission denied', cause: '某些目录没有读权限（如 /root）。', fix: '加 2>/dev/null 丢弃错误：find / -name "file" 2>/dev/null。或者用 sudo find。' },
    ],
    exercises: [
      { level: '基础', task: '找出 /etc 下所有 .conf 文件，按修改时间从新到旧排列', hint: 'find + ls -lt 或 find -printf', answer: 'find /etc -name "*.conf" -exec ls -lt {} + | head -20\n\n# 或用 -printf 更精确：\nfind /etc -name "*.conf" -printf "%T@ %p\\n" | sort -rn | head -20 | cut -d" " -f2-' },
      { level: '进阶', task: '找出当前目录下所有大于 10MB 的文件，并显示它们的大小', hint: 'find -size +10M + du -h', answer: 'find . -type f -size +10M -exec du -h {} \\; | sort -rh\n\n# 或者用 find -printf：\nfind . -type f -size +10M -printf "%s %p\\n" | sort -rn | awk \'{printf "%.1fM\\t%s\\n", $1/1048576, $2}\'' },
      { level: '挑战', task: '写一个脚本，找出所有 777 权限的文件（安全隐患），并把它们改成 755', hint: 'find -perm 777 + chmod 755', answer: '#!/bin/bash\necho "查找 777 权限的文件..."\nfind / -type f -perm 777 2>/dev/null | while read file; do\n  echo "修复: $file (777 → 755)"\n  chmod 755 "$file"\ndone\n\n# 更安全：先看不改\nfind / -type f -perm 777 -ls 2>/dev/null' },
    ],
    prereqs: ['ls — 看文件信息', 'chmod — 改权限'],
    nextSteps: ['locate — 快速搜索（用数据库）', 'find 高级 — -exec 和 xargs 的区别'],
  },
};
