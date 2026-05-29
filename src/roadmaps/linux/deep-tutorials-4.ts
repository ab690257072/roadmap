import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_4: Record<string, DeepTutorial> = {
  "moGMHNR58wFlzhS7je1wc": {
    mentalModel: 'PATH 是系统的"命令通讯录"：当你打 ls 时，shell 按 PATH 里的目录顺序搜索，找到第一个匹配就执行。',
    handsOn: [
      { title: '看当前 PATH', cmd: 'echo $PATH | tr ":" "\\n"', output: '/usr/local/bin\n/usr/bin\n/bin\n/usr/sbin\n/sbin', explain: 'PATH 是冒号分隔的目录列表。shell 按从左到右顺序搜索。左边的优先级高——同名命令用左边目录的。' },
      { title: '找命令在哪', cmd: 'which ls && which python3 && which git', output: '/bin/ls\n/usr/bin/python3\n/usr/local/bin/git', explain: 'which 告诉你命令实际在哪个目录。type 更全面（还会告诉你是不是 alias 或内建命令）。' },
      { title: '临时加 PATH', cmd: 'export PATH="/opt/go/bin:$PATH" && which go', output: '/opt/go/bin/go', explain: 'export PATH="新目录:$PATH" 把新目录加到 PATH 前面（优先级最高）。只在当前终端会话生效，关掉就没了。' },
      { title: '永久加 PATH', cmd: 'echo \'export PATH="/opt/go/bin:$PATH"\' >> ~/.bashrc && source ~/.bashrc', output: '（无输出）', explain: '写进 ~/.bashrc 每次开终端都会加载。source ~/.bashrc 立即生效。$PATH 放后面表示新目录优先，放前面表示旧目录优先。' },
    ],
    diagnosis: [
      { symptom: 'command not found 但确定装了', cause: '命令所在的目录不在 PATH 里。比如手动装的软件在 /opt/app/bin 但没加 PATH。', fix: 'echo $PATH 确认。export PATH="/opt/app/bin:$PATH" 临时加。写进 ~/.bashrc 永久加。' },
      { symptom: '改了 PATH 但命令还是找不到', cause: 'shell 有命令缓存（hash table）。改了 PATH 后缓存没刷新。', fix: 'hash -r 清除缓存。或者开新终端。source ~/.bashrc 重新加载。' },
      { symptom: 'which 和实际执行的不是同一个', cause: 'alias 覆盖了命令。或者 shell 缓存了旧路径。', fix: 'type command 看真实来源。unalias command 取消别名。hash -r 清缓存。' },
    ],
    exercises: [
      { level: '基础', task: '查看你的 PATH 有几个目录，找出 python3 在哪个目录', hint: 'echo $PATH | tr 分行，which python3', answer: 'echo $PATH | tr ":" "\\n" | wc -l\nwhich python3\nls -la $(which python3)' },
      { level: '进阶', task: '把 ~/bin 加到 PATH（如果不存在则创建），在里面放一个自定义命令 hello', hint: 'mkdir -p ~/bin，写脚本，chmod +x，加 PATH', answer: 'mkdir -p ~/bin\ncat > ~/bin/hello << \'EOF\'\n#!/bin/bash\necho "Hello from ~/bin!"\nEOF\nchmod +x ~/bin/hello\nexport PATH="$HOME/bin:$PATH"\nhello' },
      { level: '挑战', task: '写一个函数 add-to-path，检查目录是否存在、是否已在 PATH 里，满足条件才加', hint: '[ -d dir ] 检查目录存在，echo $PATH | grep -q dir 检查是否在 PATH', answer: 'add-to-path() {\n  local dir=$1\n  [ ! -d "$dir" ] && echo "目录不存在: $dir" && return 1\n  echo "$PATH" | grep -q "$dir" && echo "已在 PATH 中" && return 0\n  export PATH="$dir:$PATH"\n  echo "已添加: $dir"\n}' },
    ],
    prereqs: ['环境变量 — export 和 $VAR', 'Shell 基础 — ~/.bashrc'],
    nextSteps: ['别名 alias — 给命令取短名字', 'Shell 脚本 — 自动化 PATH 配置'],
  },

  "Z5Mf_e5G24IkmxEHgYBe2": {
    mentalModel: 'cut 按列截取文本——像切蛋糕，一刀下去只取你要的那块。-d 定切的位置（分隔符），-f 定取第几块（字段编号）。',
    handsOn: [
      { title: '按分隔符取列', cmd: 'echo "alice,25,alice@mail.com" | cut -d "," -f 1,3', output: 'alice,alice@mail.com', explain: '-d "," 指定逗号分隔，-f 1,3 取第 1 和第 3 列。CSV 文件处理必备。列号从 1 开始，不是 0。' },
      { title: '取 /etc/passwd 的用户名', cmd: 'cut -d ":" -f 1 /etc/passwd | head -5', output: 'root\ndaemon\nbin\nsys\nsync', explain: '/etc/passwd 用冒号分隔，第一列是用户名。cut -d ":" -f 1 取第一列。' },
      { title: '按字符位置截取', cmd: 'echo "2024-01-15 10:30:00" | cut -c 1-10', output: '2024-01-15', explain: '-c 1-10 取前 10 个字符。适合固定宽度的日志格式，比如从日期时间字段里只取日期部分。' },
      { title: '配合管道', cmd: 'grep "ERROR" app.log | cut -d " " -f 1-3', output: '2024-01-15 10:30:00 ERROR', explain: '先用 grep 过滤错误行，再用 cut 取前三个字段（时间+级别）。管道组合让 cut 更强大。' },
    ],
    diagnosis: [
      { symptom: 'cut 输出的列不对', cause: '分隔符没指定对。cut 默认分隔符是 Tab，不是空格。如果文件用空格分隔，必须加 -d " " 或改用 awk。', fix: '确认分隔符：head -1 file | cat -A 看实际字符（^I 是 Tab）。加 -d 指定正确分隔符。' },
      { symptom: 'cut 处理不了多空格分隔的文件', cause: 'cut 的分隔符只能是单个字符。多空格分隔（如 ps 输出）处理不了。', fix: '用 awk 代替：ps aux | awk \'{print $1, $2}\'。awk 默认按空白字符分列（支持多空格）。' },
      { symptom: 'cut -f 没效果', cause: '没指定 -d，默认用 Tab 分隔。文件实际用逗号或其他分隔符。', fix: '加 -d 指定分隔符：cut -d "," -f 1,3。' },
    ],
    exercises: [
      { level: '基础', task: '从 /etc/passwd 提取所有用户的用户名和家目录（第 1 和第 6 列）', hint: 'cut -d ":" -f 1,6', answer: 'cut -d ":" -f 1,6 /etc/passwd | head -10' },
      { level: '进阶', task: '统计 /etc/passwd 里用 /bin/bash 的用户有多少个', hint: 'grep "/bin/bash" | cut 取用户名 | wc -l', answer: 'grep "/bin/bash" /etc/passwd | cut -d ":" -f 1 | wc -l\n\n# 或者直接 grep -c：\ngrep -c "/bin/bash" /etc/passwd' },
      { level: '挑战', task: '解析 CSV 文件，提取第 2 列和第 4 列，去重后按字母排序', hint: 'cut -d "," -f 2,4 | sort -u', answer: 'cut -d "," -f 2,4 data.csv | sort -u\n\n# 如果 CSV 有 header，跳过第一行：\ntail -n +2 data.csv | cut -d "," -f 2,4 | sort -u' },
    ],
    prereqs: ['管道 | — cut 通常在管道中使用', 'stdout/stdin — 理解数据流'],
    nextSteps: ['awk — 更强大的文本处理', 'sed — 文本替换', 'sort/uniq — 排序去重'],
  },

  "zwXEmpPYjA7_msS43z7I0": {
    mentalModel: '环境变量是键值对，存在 shell 会话中。程序通过系统调用读取环境变量——这是传递配置的标准方式。',
    handsOn: [
      { title: '设置和读取变量', cmd: 'MY_VAR="hello" && echo $MY_VAR', output: 'hello', explain: 'MY_VAR="hello" 赋值（等号两边不能有空格）。$MY_VAR 或 ${MY_VAR} 取值。推荐用 ${MY_VAR} 避免粘连问题。' },
      { title: 'export 让子进程可见', cmd: 'export DB_HOST="localhost" && bash -c "echo $DB_HOST"', output: 'localhost', explain: 'export 让变量对子进程可见。不加 export 的变量只在当前 shell 里。脚本里通常需要 export。' },
      { title: '看所有环境变量', cmd: 'env | grep -i path', output: 'PATH=/usr/local/bin:/usr/bin:/bin\nMANPATH=/usr/share/man', explain: 'env 列出所有环境变量。printenv HOME 打印指定变量。grep 过滤你关心的。' },
      { title: '常用环境变量', cmd: 'echo "HOME=$HOME USER=$USER SHELL=$SHELL PWD=$PWD"', output: 'HOME=/home/tu USER=tu SHELL=/bin/bash PWD=/home/tu/projects', explain: 'HOME 家目录，USER 当前用户，SHELL 默认 shell，PWD 当前目录。这些由系统自动设置。' },
    ],
    diagnosis: [
      { symptom: '程序读不到环境变量', cause: '变量没 export。KEY=value 只在当前 shell 可见，子进程（程序）看不到。', fix: 'export KEY=value。或者 KEY=value command 只给这条命令设置。' },
      { symptom: '改了 ~/.bashrc 但没生效', cause: '改了配置文件但没重新加载。需要 source 或开新终端。', fix: 'source ~/.bashrc 立即加载。或者关掉终端重新开。' },
      { symptom: '变量值里有空格被截断了', cause: '取值时没加引号。echo $VAR 如果 VAR="hello world" 会变成 echo hello world（两个参数）。', fix: 'echo "$VAR" 加引号保留空格。在脚本里始终用 "$VAR" 而不是 $VAR。' },
    ],
    exercises: [
      { level: '基础', task: '设置环境变量 APP_ENV=production，验证子进程能读到', hint: 'export + bash -c', answer: 'export APP_ENV=production\nbash -c "echo APP_ENV=$APP_ENV"\nenv | grep APP_ENV' },
      { level: '进阶', task: '写一个脚本，根据 APP_ENV 变量的值（dev/staging/production）设置不同的 DB_HOST', hint: 'case 语句或 $APP_ENV', answer: '#!/bin/bash\ncase "${APP_ENV:-dev}" in\n  dev) export DB_HOST="localhost" ;;\n  staging) export DB_HOST="staging-db.internal" ;;\n  production) export DB_HOST="prod-db.internal" ;;\n  *) echo "未知环境: $APP_ENV"; exit 1 ;;\nesac\necho "DB_HOST=$DB_HOST"' },
      { level: '挑战', task: '写一个函数 load-env，从 .env 文件加载环境变量（格式 KEY=VALUE，忽略 # 注释和空行）', hint: 'while read line，grep -v "^#" 过滤注释，export 设置', answer: 'load-env() {\n  local file=${1:-.env}\n  [ ! -f "$file" ] && echo "文件不存在: $file" && return 1\n  while IFS= read -r line; do\n    [[ -z "$line" || "$line" =~ ^# ]] && continue\n    export "$line"\n  done < "$file"\n  echo "已加载 $file"\n}' },
    ],
    prereqs: ['Shell 基础 — 变量赋值和读取'],
    nextSteps: ['PATH — 命令搜索路径', 'Shell 脚本 — 自动化配置', 'Docker -e — 容器环境变量'],
  },
};
