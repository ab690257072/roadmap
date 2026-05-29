import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_69: Record<string, DeepTutorial> = {
  "QgfenmhMc18cU_JngQ1n0": {
    mentalModel: 'ulimits 限制进程能使用的系统资源——像公司的预算管理，每个部门（用户/进程）有最大文件数、最大内存、最大 CPU 时间等限制。',
    handsOn: [
      { title: '查看当前限制', cmd: 'ulimit -a', output: 'core file size          (blocks, -c) 0\ndata seg size           (kbytes, -d) unlimited\nscheduling priority             (-e) 0\nfile size               (blocks, -f) unlimited\npending signals                 (-i) 62631\nmax locked memory       (kbytes, -l) 65536\nmax memory size         (kbytes, -m) unlimited\nopen files                      (-n) 1024\npipe size            (512 bytes, -p) 8', explain: 'ulimit -a 显示所有限制。常见的：-n 最大打开文件数（1024），-u 最大进程数，-s 栈大小（8192 KB）。' },
      { title: '修改当前 shell 限制', cmd: 'ulimit -n 4096 && ulimit -n', output: '4096', explain: 'ulimit -n 4096 把最大打开文件数改成 4096。只对当前 shell 和子进程有效。' },
      { title: '永久修改（系统级）', cmd: 'sudo nano /etc/security/limits.conf', output: '# 添加：\n* soft nofile 65536\n* hard nofile 65536\n* soft nproc 65536\n* hard nproc 65536', explain: '/etc/security/limits.conf 配置系统级限制。soft 是默认值，hard 是最大值。重新登录生效。' },
      { title: 'systemd 服务限制', cmd: 'sudo systemctl edit nginx', output: '[Service]\nLimitNOFILE=65536\nLimitNPROC=65536', explain: 'systemd 服务有自己的限制。systemctl edit 创建 override 文件。LimitNOFILE 设置最大打开文件数。' },
    ],
    diagnosis: [
      { symptom: 'Too many open files', cause: '进程打开的文件数超过 ulimit -n 限制（默认 1024）。', fix: 'ulimit -n 65536 临时提高。或者编辑 /etc/security/limits.conf 永久修改。或者 systemctl edit service 修改服务限制。' },
      { symptom: 'Resource temporarily unavailable', cause: '进程数超过 ulimit -u 限制，或者系统资源不足。', fix: 'ulimit -u 65536 提高进程数限制。或者检查是否有僵尸进程占用资源。' },
      { symptom: '修改 limits.conf 后不生效', cause: '需要重新登录，或者 PAM 没配置。', fix: '重新登录。或者检查 /etc/pam.d/common-session 是否包含 pam_limits.so。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前 shell 的所有 ulimit 限制，找出最小和最大的限制', hint: 'ulimit -a + sort', answer: '#!/bin/bash\necho "=== 当前 ulimit 限制 ==="\necho ""\n\nulimit -a | while read LINE; do\n  echo "$LINE"\ndone | sort\n\necho ""\necho "=== 关键限制 ==="\necho "最大打开文件数: $(ulimit -n)"\necho "最大进程数: $(ulimit -u)"\necho "栈大小: $(ulimit -s) KB"\necho "最大文件大小: $(ulimit -f) blocks"' },
      { level: '进阶', task: '写一个脚本，测试进程的"最大打开文件数"', hint: 'for 循环 + 打开文件 + 捕获错误', answer: `#!/bin/bash
TEST_DIR="/tmp/ulimit-test"
mkdir -p "$TEST_DIR"

echo "=== 测试最大打开文件数 ==="
echo "当前限制: $(ulimit -n)"
echo ""

# 尝试打开越来越多文件
for i in {1..2000}; do
  exec {FD}>"$TEST_DIR/file_$i" 2>/dev/null
  if [ $? -ne 0 ]; then
    echo "✗ 无法打开第 $i 个文件"
    echo "实际最大打开文件数: $((i-1))"
    break
  fi
done

# 清理
rm -rf "$TEST_DIR"` },
      { level: '挑战', task: '配置 Nginx 服务使用更高的 ulimit（65536），并验证', hint: 'systemctl edit + LimitNOFILE + 验证', answer: '#!/bin/bash\necho "=== 配置 Nginx ulimit ==="\n\n# 1. 创建 override\nsudo mkdir -p /etc/systemd/system/nginx.service.d\nsudo tee /etc/systemd/system/nginx.service.d/override.conf > /dev/null << EOF\n[Service]\nLimitNOFILE=65536\nLimitNPROC=65536\nEOF\n\n# 2. 重载 systemd\nsudo systemctl daemon-reload\nsudo systemctl restart nginx\n\n# 3. 验证\nNGINX_PID=$(pgrep -o nginx)\necho "Nginx PID: $NGINX_PID"\necho ""\necho "Nginx 的限制:"\ncat /proc/$NGINX_PID/limits | grep "Max open files"\n\necho ""\necho "✓ 配置完成"' },
    ],
    prereqs: ['进程管理 — ps/kill', 'systemd — systemctl'],
    nextSteps: ['cgroups — 更细粒度的资源控制', '性能调优 — 系统参数优化'],
  },
};
