import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_70: Record<string, DeepTutorial> = {
  "23lsrUw8ux6ZP9JlDNNu2": {
    mentalModel: 'cgroups（Control Groups）限制和监控进程组的资源使用——像小区的物业管理，限制每户的水电用量、车位数量，防止某户占用过多资源。',
    handsOn: [
      { title: '查看 cgroups', cmd: 'ls /sys/fs/cgroup/', output: 'blkio  cpu  cpuacct  cpuset  devices  freezer  hugetlb  memory  net_cls  net_prio  perf_event  pids  systemd', explain: '/sys/fs/cgroup/ 下有各种子系统。cpu 限制 CPU，memory 限制内存，pids 限制进程数，blkio 限制磁盘 IO。' },
      { title: '查看进程的 cgroup', cmd: 'cat /proc/self/cgroup', output: '12:memory:/user.slice\n11:cpu,cpuacct:/user.slice\n10:blkio:/user.slice\n9:devices:/user.slice', explain: '/proc/PID/cgroup 显示进程属于哪个 cgroup。user.slice 是普通用户进程组。' },
      { title: '创建 cgroup', cmd: 'sudo cgcreate -g memory:mygroup && sudo cgset -r memory.limit_in_bytes=100M mygroup', output: '（无输出，成功）', explain: 'cgcreate 创建 cgroup。cgset 设置参数。memory.limit_in_bytes=100M 限制内存 100MB。' },
      { title: '在 cgroup 中运行进程', cmd: 'sudo cgexec -g memory:mygroup stress --vm 1 --vm-bytes 200M', output: 'stress: info: dispatching hogs: 1 vm\nstress: FAIL: [1234] out of memory', explain: 'cgexec 在指定 cgroup 中运行进程。stress 尝试分配 200MB，但 cgroup 限制 100MB，所以失败。' },
    ],
    diagnosis: [
      { symptom: '进程被 cgroup 杀死（OOM killed）', cause: '进程内存使用超过 cgroup 限制。', fix: 'dmesg | grep -i oom 查看 OOM 日志。提高 cgroup 限制：cgset -r memory.limit_in_bytes=500M mygroup。或者优化程序减少内存使用。' },
      { symptom: 'cgroup 参数设置不生效', cause: 'cgroup 子系统没挂载，或者参数名错了。', fix: 'ls /sys/fs/cgroup/ 检查子系统。cat /proc/cgroups 查看启用的子系统。或者用 systemd-run 代替 cgexec。' },
      { symptom: 'systemd 服务的资源限制不生效', cause: '服务没用 systemd 的资源控制参数，或者参数名错了。', fix: 'systemctl edit service 添加 LimitNOFILE=65536 或 MemoryMax=1G。systemctl daemon-reload && systemctl restart service。' },
    ],
    exercises: [
      { level: '基础', task: '查看当前系统的所有 cgroup 子系统，以及当前 shell 属于哪个 cgroup', hint: 'ls /sys/fs/cgroup + cat /proc/self/cgroup', answer: '#!/bin/bash\necho "=== cgroup 子系统 ==="\nls /sys/fs/cgroup/\necho ""\n\necho "=== 当前 shell 的 cgroup ==="\ncat /proc/self/cgroup\necho ""\n\necho "=== 启用的子系统 ==="\ncat /proc/cgroups' },
      { level: '进阶', task: '创建一个 cgroup，限制 CPU 使用率 50%，运行一个 CPU 密集程序验证', hint: 'cgcreate + cgset + cgexec + stress', answer: `#!/bin/bash
CGROUP_NAME="cpu-test"

# 1. 创建 cgroup
sudo cgcreate -g cpu:$CGROUP_NAME

# 2. 限制 CPU 50%（quota 50000，period 100000）
sudo cgset -r cpu.cfs_quota_us=50000 $CGROUP_NAME
sudo cgset -r cpu.cfs_period_us=100000 $CGROUP_NAME

echo "cgroup 配置:"
sudo cgget -g cpu $CGROUP_NAME

# 3. 运行 CPU 密集程序
echo ""
echo "运行 stress（限制 50% CPU）..."
sudo cgexec -g cpu:$CGROUP_NAME stress --cpu 2 --timeout 10

# 4. 验证
echo ""
echo "查看 CPU 使用:"
top -bn1 | grep stress | head -2` },
      { level: '挑战', task: '用 systemd 创建一个服务，限制内存 512MB、CPU 1 核、最大 1000 个进程', hint: 'systemd service + MemoryMax + CPUQuota + TasksMax', answer: `#!/bin/bash
# 创建 systemd 服务
sudo tee /etc/systemd/system/limited-service.service > /dev/null << EOF
[Unit]
Description=Limited Resource Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/stress --vm 1 --vm-bytes 1G --cpu 2
# 资源限制
MemoryMax=512M
CPUQuota=100%
TasksMax=1000
# 超限时的行为
OOMPolicy=kill

[Install]
WantedBy=multi-user.target
EOF

# 重载并启动
sudo systemctl daemon-reload
sudo systemctl start limited-service

# 验证
sleep 2
echo "=== 服务状态 ==="
systemctl status limited-service --no-pager

echo ""
echo "=== 资源使用 ==="
systemctl show limited-service | grep -E "MemoryCurrent|CPUUsage|TasksCurrent"

# 清理
sudo systemctl stop limited-service
sudo systemctl disable limited-service
sudo rm /etc/systemd/system/limited-service.service
sudo systemctl daemon-reload` },
    ],
    prereqs: ['进程管理 — ps/kill', 'systemd — systemctl'],
    nextSteps: ['Docker — 容器资源限制', 'Kubernetes — Pod 资源限制'],
  },
};
