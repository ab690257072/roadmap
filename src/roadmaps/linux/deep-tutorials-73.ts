import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_73: Record<string, DeepTutorial> = {
  "bVCwRoFsYb3HD8X4xuKOo": {
    mentalModel: 'Container Runtime 是运行容器的底层引擎——Docker 用 containerd，Kubernetes 用 CRI-O。像汽车的引擎，你踩油门（docker run），引擎（containerd）驱动车轮。',
    handsOn: [
      { title: '查看容器运行时', cmd: 'docker info | grep -i runtime', output: 'Runtimes: runc io.containerd.runc.v2 io.containerd.runtime.v1.linux\nDefault Runtime: runc', explain: 'Docker 默认用 runc（OCI 标准容器运行时）。containerd 是 Docker 的核心组件，管理容器生命周期。' },
      { title: 'containerd CLI', cmd: 'sudo ctr containers ls', output: 'CONTAINER                                                           IMAGE                              RUNTIME\nabc123def456                                                          docker.io/library/nginx:latest       io.containerd.runc.v2', explain: 'ctr 是 containerd 的命令行工具（比 docker 更底层）。通常用 docker 或 kubectl，ctr 用于调试。' },
      { title: 'crictl（Kubernetes CRI）', cmd: 'sudo crictl ps', output: 'CONTAINER           IMAGE               CREATED             STATE               NAME                ATTEMPT             POD ID\nabc123def456        nginx:latest        2 hours ago         Running             nginx               0                   xyz789', explain: 'crictl 是 Kubernetes CRI 的命令行工具（containerd 或 CRI-O）。用于调试 K8s 节点上的容器。' },
      { title: '查看容器进程', cmd: 'sudo ctr tasks ls', output: 'TASK            PID      STATUS\nabc123def456    12345    RUNNING', explain: 'ctr tasks 查看运行中的容器进程。PID 是宿主机上的进程号。容器本质是隔离的进程。' },
    ],
    diagnosis: [
      { symptom: 'docker run 报 "Cannot connect to Docker daemon"', cause: 'Docker daemon 没启动，或者用户没权限。', fix: 'systemctl status docker 检查服务。sudo systemctl start docker 启动。或者把用户加到 docker 组：usermod -aG docker user。' },
      { symptom: '容器启动后立即退出', cause: '容器内进程退出（如 nginx 配置错误），或者 ENTRYPOINT/CMD 命令错了。', fix: 'docker logs container 看日志。docker inspect container 看退出码。或者 docker run -it image /bin/sh 进入调试。' },
      { symptom: 'crictl 报 "connection refused"', cause: 'containerd 或 CRI-O 没启动，或者 socket 路径不对。', fix: 'systemctl status containerd 检查服务。或者指定 socket：crictl --runtime-endpoint unix:///var/run/containerd/containerd.sock ps。' },
    ],
    exercises: [
      { level: '基础', task: '用 Docker 运行一个 Nginx 容器，查看容器进程和日志', hint: 'docker run + docker ps + docker logs', answer: '#!/bin/bash\n# 1. 运行 Nginx 容器\ndocker run -d --name nginx-test -p 8080:80 nginx:latest\n\n# 2. 查看运行中的容器\ndocker ps | grep nginx-test\n\n# 3. 查看容器进程\ndocker top nginx-test\n\n# 4. 查看容器日志\ndocker logs nginx-test\n\n# 5. 测试访问\ncurl http://localhost:8080\n\n# 6. 清理\ndocker stop nginx-test\ndocker rm nginx-test' },
      { level: '进阶', task: '用 crictl 调试 Kubernetes 节点上的容器', hint: 'crictl ps + crictl logs + crictl inspect', answer: `#!/bin/bash
# 1. 查看运行中的容器
echo "=== 运行中的容器 ==="
sudo crictl ps

# 2. 查看特定容器的日志
CONTAINER_ID=$(sudo crictl ps | grep nginx | awk '{print $1}' | head -1)
if [ -n "$CONTAINER_ID" ]; then
  echo ""
  echo "=== 容器日志 ==="
  sudo crictl logs "$CONTAINER_ID"

  echo ""
  echo "=== 容器详情 ==="
  sudo crictl inspect "$CONTAINER_ID" | jq '.status'
fi` },
      { level: '挑战', task: '用 containerd 直接运行一个容器（不通过 Docker）', hint: 'ctr images pull + ctr run', answer: `#!/bin/bash
# 1. 拉取镜像
echo "拉取镜像..."
sudo ctr images pull docker.io/library/nginx:latest

# 2. 运行容器
echo "运行容器..."
sudo ctr run -d docker.io/library/nginx:latest nginx-test

# 3. 查看容器
echo ""
echo "=== 容器列表 ==="
sudo ctr containers ls

# 4. 查看任务
echo ""
echo "=== 运行中的任务 ==="
sudo ctr tasks ls

# 5. 清理
echo ""
echo "清理..."
sudo ctr tasks kill nginx-test
sudo ctr containers delete nginx-test
sudo ctr images rm docker.io/library/nginx:latest` },
    ],
    prereqs: ['Docker — 容器基础', 'Kubernetes — Pod 概念'],
    nextSteps: ['Kubernetes — CRI 详解', 'containerd — 配置和插件'],
  },
};
