import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_78: Record<string, DeepTutorial> = {
  "JgoZzx4BfK7tmosgpZOsf": {
    mentalModel: 'I/O 重定向是改变命令输入/输出的来源和去向——像水管改道，把水流（数据）从原来的方向引到新的地方。',
    handsOn: [
      { title: '输出重定向', cmd: 'echo "Hello" > /tmp/hello.txt && cat /tmp/hello.txt', output: 'Hello', explain: '> 把命令的输出重定向到文件（覆盖）。echo "Hello" 本来输出到屏幕，现在写到 /tmp/hello.txt。' },
      { title: '追加重定向', cmd: 'echo "World" >> /tmp/hello.txt && cat /tmp/hello.txt', output: 'Hello\nWorld', explain: '>> 追加到文件末尾（不覆盖）。第一次 echo 写了 "Hello"，第二次 >> 追加 "World"。' },
      { title: '错误重定向', cmd: 'ls /nonexistent 2> /tmp/error.log && cat /tmp/error.log', output: 'ls: cannot access \'/nonexistent\': No such file or directory', explain: '2> 把 stderr（文件描述符 2）重定向到文件。ls 报错时，错误信息写到 /tmp/error.log，屏幕看不到。' },
      { title: '输入重定向', cmd: 'wc -l < /tmp/hello.txt', output: '2', explain: '< 把文件内容作为命令的 stdin。wc -l 本来从键盘读，现在从 /tmp/hello.txt 读，统计行数。' },
    ],
    diagnosis: [
      { symptom: '重定向后文件是空的', cause: '命令没输出，或者输出到了 stderr（没被重定向）。', fix: '检查命令是否有输出。或者用 2>&1 把 stderr 也重定向到 stdout：command > output.log 2>&1。' },
      { symptom: '>> 追加后文件内容重复', cause: '多次运行相同命令，每次都追加。', fix: '用 > 覆盖而不是 >> 追加。或者先删除文件再追加。' },
      { symptom: '重定向到 /dev/null 后看不到任何输出', cause: '/dev/null 是"黑洞"，所有写入的数据都被丢弃。', fix: '正常现象。如果想看输出，重定向到普通文件：command > output.log。' },
    ],
    exercises: [
      { level: '基础', task: '把一个命令的 stdout 和 stderr 分别重定向到两个文件', hint: '> stdout.log 2> stderr.log', answer: '#!/bin/bash\n# 1. 分别重定向\nls /tmp /nonexistent > /tmp/stdout.log 2> /tmp/stderr.log\n\n# 2. 查看 stdout\necho "=== stdout ==="\ncat /tmp/stdout.log\n\n# 3. 查看 stderr\necho ""\necho "=== stderr ==="\ncat /tmp/stderr.log\n\n# 4. 清理\nrm /tmp/stdout.log /tmp/stderr.log' },
      { level: '进阶', task: '写一个脚本，把命令的 stdout 和 stderr 都重定向到同一个文件', hint: '> output.log 2>&1', answer: `#!/bin/bash
# 1. 重定向到同一个文件
ls /tmp /nonexistent > /tmp/combined.log 2>&1

# 2. 查看
echo "=== 合并输出 ==="
cat /tmp/combined.log

# 3. 清理
rm /tmp/combined.log` },
      { level: '挑战', task: '写一个"日志轮转脚本"，把日志文件按大小分割', hint: 'du + split + mv', answer: `#!/bin/bash
LOG_FILE="/tmp/app.log"
MAX_SIZE=1048576  # 1MB

# 1. 检查文件大小
if [ -f "$LOG_FILE" ]; then
  SIZE=$(stat -c%s "$LOG_FILE")
  echo "当前大小: $SIZE bytes"

  if [ "$SIZE" -gt "$MAX_SIZE" ]; then
    # 2. 备份当前日志
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    BACKUP="\${LOG_FILE}_\${TIMESTAMP}"
    mv "$LOG_FILE" "$BACKUP"
    echo "已备份: $BACKUP"

    # 3. 创建新日志文件
    touch "$LOG_FILE"
    echo "已创建新日志: $LOG_FILE"

    # 4. 压缩旧日志
    gzip "$BACKUP"
    echo "已压缩: \${BACKUP}.gz"
  fi
else
  echo "日志文件不存在: $LOG_FILE"
fi` },
    ],
    prereqs: ['Linux 基础 — 文件系统', 'Shell 基础 — echo/cat'],
    nextSteps: ['管道 — 连接命令', '进程替换 — <() 和 >()'],
  },
};
