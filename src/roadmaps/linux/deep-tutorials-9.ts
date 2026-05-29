import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_9: Record<string, DeepTutorial> = {
  "JgoZzx4BfK7tmosgpZOsf": {
    mentalModel: '重定向控制输出写到哪、输入从哪来。> 覆盖写文件，>> 追加写，< 从文件读输入，2> 单独捕获错误。',
    handsOn: [
      { title: '> 覆盖写文件', cmd: 'echo "hello" > file.txt && cat file.txt', output: 'hello', explain: '> 把 stdout 重定向到文件。如果文件已存在会先清空（覆盖）。echo "world" > file.txt 后 file.txt 只有 "world"。' },
      { title: '>> 追加写文件', cmd: 'echo "world" >> file.txt && cat file.txt', output: 'hello\nworld', explain: '>> 在文件末尾追加，不清空原内容。日志文件永远用 >>，不要用 >（会清空之前的日志）。' },
      { title: '< 从文件读输入', cmd: 'sort < unsorted.txt', output: '（排序后的内容）', explain: '< 把文件内容作为 stdin 传给命令。sort < unsorted.txt 等价于 cat unsorted.txt | sort。' },
      { title: '2> 单独捕获 stderr', cmd: 'ls /存在 /不存在 > out.txt 2> err.txt', output: '（out.txt 有正常输出，err.txt 有错误信息）', explain: '2> 把 stderr 重定向到文件。> 只重定向 stdout。这样可以分开保存正常输出和错误信息。' },
    ],
    diagnosis: [
      { symptom: '> file 后屏幕上还是有输出', cause: '那些输出走的是 stderr，不是 stdout。> 只重定向 stdout。', fix: '用 &> file 或 > file 2>&1 同时重定向 stdout 和 stderr。' },
      { symptom: 'command 2>&1 > file 没有把错误写进文件', cause: '重定向从左到右解析。2>&1 把 stderr 指向 stdout 当时的位置（屏幕），然后 > file 把 stdout 改到文件——但 stderr 仍然指向屏幕。', fix: '调换顺序：> file 2>&1（先改 stdout 到文件，再把 stderr 指向 stdout）。或者用 &> file（Bash 简写）。' },
      { symptom: '> file 清空了重要文件', cause: '> 会先清空文件再写入。如果手误用 > 而不是 >>，原内容就没了。', fix: '重要文件用 >> 追加。或者用 set -o noclobber 防止覆盖（> file 会报错，必须 >| file 强制覆盖）。' },
    ],
    exercises: [
      { level: '基础', task: '把 ls /etc 的输出存到文件，但把错误信息（如果有）显示在屏幕上', hint: '> 只重定向 stdout，stderr 默认就在屏幕上', answer: 'ls /etc > output.txt\n\n# 屏幕上不会看到正常输出（进了文件）\n# 如果有错误（比如权限不够），会显示在屏幕上\n# 验证：cat output.txt' },
      { level: '进阶', task: '运行一个命令，把 stdout 存到 success.log，把 stderr 存到 error.log', hint: '分别重定向：1> 和 2>（1 可以省略）', answer: 'command > success.log 2> error.log\n\n# 示例：\nls /存在 /不存在 > success.log 2> error.log\n\ncat success.log  # 正常输出\ncat error.log    # 错误信息' },
      { level: '挑战', task: '写一条命令：执行一个脚本，把输出存到日志文件，同时在屏幕上实时显示（边看边存）', hint: 'tee 命令可以把数据分流——一路到文件，一路到 stdout（屏幕）', answer: './deploy.sh 2>&1 | tee deploy.log\n\n# 2>&1 合并 stderr 到 stdout\n# tee 把合并后的流分成两路：\n#   → 写到 deploy.log\n#   → 继续到 stdout（显示在屏幕）\n\n# 追加模式（不覆盖旧日志）：\n./deploy.sh 2>&1 | tee -a deploy.log' },
    ],
    prereqs: ['stdout/stdin/stderr — 理解三条流'],
    nextSteps: ['管道 | — stdin/stdout 的串联', 'tee — 分流：边看边存'],
  },

  "Bo9CdrGJej-QcNmw46k9t": {
    mentalModel: 'tee 像 T 型水管：数据流过 tee 时分成两路——一路继续走管道（到下一个命令），一路存到文件。',
    handsOn: [
      { title: '边看边存', cmd: 'echo "test data" | tee output.txt', output: 'test data', explain: 'tee 把 stdin 同时写到 stdout 和文件。你在屏幕上看到 "test data"，同时它也被存到了 output.txt。' },
      { title: '在管道中间使用', cmd: 'cat access.log | tee backup.log | grep "ERROR"', output: '（只显示 ERROR 行）', explain: 'cat 的输出通过 tee 分流：一路存到 backup.log，一路继续传给 grep。这样你既备份了完整日志，又只看了 ERROR 行。' },
      { title: '追加模式', cmd: 'echo "new line" | tee -a output.txt', output: 'new line', explain: 'tee 默认覆盖文件。-a（append）追加到文件末尾。日志场景必用 -a，否则每次都清空之前的内容。' },
      { title: 'sudo 写系统文件', cmd: 'echo "127.0.0.1 myapp.local" | sudo tee -a /etc/hosts', output: '127.0.0.1 myapp.local', explain: 'sudo echo "x" > /etc/file 会失败（> 在 sudo 之前执行，没有权限）。正确写法：echo "x" | sudo tee /etc/file。' },
    ],
    diagnosis: [
      { symptom: 'tee 覆盖了文件', cause: 'tee 默认覆盖文件（和 > 一样）。想追加要用 -a。', fix: 'tee -a file 追加模式。或者先备份文件再 tee。' },
      { symptom: 'sudo tee 还是报权限错误', cause: '你对目标文件所在的目录没有写权限（不是文件本身）。', fix: 'sudo 提权。或者 chown 改目录所有者。' },
      { symptom: 'tee 输出到多个文件时报错', cause: '某些 shell 不支持 tee file1 file2（同时写多个文件）。', fix: '用 tee file1 file2 file3 是可以的（tee 支持多文件）。如果报错，检查 shell 版本或用 bash。' },
    ],
    exercises: [
      { level: '基础', task: '运行 ls /etc，把输出同时显示在屏幕和存到 /tmp/etc-list.txt', hint: 'ls | tee file', answer: 'ls /etc | tee /tmp/etc-list.txt\n\n# 验证：\ncat /tmp/etc-list.txt | wc -l\nls /etc | wc -l\n# 两个数应该相同' },
      { level: '进阶', task: '写一个"日志分析器"：实时追踪日志，同时存到备份文件，只显示 ERROR 行', hint: 'tail -f | tee backup.log | grep ERROR', answer: 'tail -f /var/log/app.log | tee backup.log | grep --line-buffered "ERROR"\n\n# 这样你：\n# 1. 实时看到 ERROR 行（屏幕上）\n# 2. 同时备份了完整日志（backup.log）\n# 3. Ctrl+C 停止' },
      { level: '挑战', task: '用 tee 实现"命令输出同时写到 3 个文件 + 屏幕"', hint: 'tee file1 file2 file3', answer: 'echo "test" | tee file1.txt file2.txt file3.txt\n\n# 验证：\nmd5sum file1.txt file2.txt file3.txt\n# 三个文件的 MD5 应该相同\n\n# 或者用 process substitution 做更复杂的事：\ncommand | tee >(grep ERROR > errors.log) >(grep WARN > warnings.log) > all.log' },
    ],
    prereqs: ['管道 | — tee 在管道中使用', '重定向 > >> — tee 是分流版本的 >'],
    nextSteps: ['进程替换 <() — 把命令输出当文件用', 'Shell 脚本 — 自动化日志处理'],
  },
};
