import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_77: Record<string, DeepTutorial> = {
  "3OpGaQhyNtk1n1MLp-tlb": {
    mentalModel: 'Containerization 是把应用和依赖打包成标准化单元——像集装箱运输，不管里面装什么，外面尺寸统一，在任何地方以相同方式运行。',
    handsOn: [
      { title: '查看容器化技术', cmd: 'docker --version && podman --version && containerd --version', output: 'Docker version 24.0.7, build afdd53b\npodman version 4.7.2\ncontainerd github.com/containerd/containerd v1.7.9', explain: 'Docker 是最流行的容器平台。Podman 是 Red Hat 的替代品（无 daemon）。containerd 是底层容器运行时。' },
      { title: '查看 OCI 标准', cmd: 'runc --version', output: 'runc version 1.1.9\ncommit: v1.1.9-0-g5357b5ba\nspec: 1.0.2-dev', explain: 'runc 是 OCI 标准的容器运行时实现。OCI（Open Container Initiative）定义了容器镜像和运行时的标准。' },
      { title: '构建镜像', cmd: 'docker build -t myapp:1.0 .', output: 'Sending build context to Docker daemon  2.048kB\nStep 1/3 : FROM alpine:latest\n ---> abc123def456\nStep 2/3 : COPY . /app\n ---> Running in xyz789\n ---> abc123def456\nStep 3/3 : CMD ["/app/start.sh"]\n ---> Running in xyz789\n ---> abc123def456\nSuccessfully built abc123def456\nSuccessfully tagged myapp:1.0', explain: 'docker build 根据 Dockerfile 构建镜像。-t myapp:1.0 指定镜像名和标签。. 表示当前目录。' },
      { title: '推送镜像', cmd: 'docker tag myapp:1.0 myregistry.com/myapp:1.0 && docker push myregistry.com/myapp:1.0', output: 'The push refers to repository [myregistry.com/myapp]\nabc123def456: Pushed\n1.0: digest: sha256:abc123 size: 528', explain: 'docker tag 给镜像打标签（指定仓库）。docker push 推送到远程仓库（如 Docker Hub、私有仓库）。' },
    ],
    diagnosis: [
      { symptom: 'docker build 报 "Cannot connect to Docker daemon"', cause: 'Docker daemon 没启动，或者用户没权限。', fix: 'systemctl status docker 检查服务。sudo systemctl start docker 启动。或者把用户加到 docker 组：usermod -aG docker user。' },
      { symptom: 'docker push 报 "authentication required"', cause: '没登录远程仓库。', fix: 'docker login myregistry.com 登录。或者用 docker login docker.io 登录 Docker Hub。' },
      { symptom: '容器启动后立即退出', cause: '容器内进程退出（如应用崩溃），或者 ENTRYPOINT/CMD 命令错了。', fix: 'docker logs container 看日志。docker inspect container 看退出码。或者 docker run -it image /bin/sh 进入调试。' },
    ],
    exercises: [
      { level: '基础', task: '构建一个简单的 Docker 镜像（基于 Alpine，包含自定义脚本）', hint: 'Dockerfile + docker build', answer: `#!/bin/bash
# 1. 创建目录
mkdir -p docker-test
cd docker-test

# 2. 创建启动脚本
cat > start.sh << 'EOF'
#!/bin/sh
echo "Hello from Docker!"
echo "Current time: $(date)"
echo "Hostname: $(hostname)"
sleep 10
EOF
chmod +x start.sh

# 3. 创建 Dockerfile
cat > Dockerfile << 'EOF'
FROM alpine:latest
COPY start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]
EOF

# 4. 构建镜像
docker build -t hello-docker:latest .

# 5. 运行容器
docker run --rm hello-docker:latest` },
      { level: '进阶', task: '写一个多阶段构建的 Dockerfile（Go 应用）', hint: 'FROM golang AS builder + FROM alpine', answer: `#!/bin/bash
# 1. 创建目录
mkdir -p go-app
cd go-app

# 2. 创建 Go 代码
cat > main.go << 'EOF'
package main
import "fmt"
func main() {
    fmt.Println("Hello from Go in Docker!")
}
EOF

# 3. 创建 Dockerfile（多阶段构建）
cat > Dockerfile << 'EOF'
# 阶段 1: 构建
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY main.go .
RUN go build -o myapp main.go

# 阶段 2: 运行
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/myapp .
CMD ["./myapp"]
EOF

# 4. 构建镜像
docker build -t go-app:latest .

# 5. 运行容器
docker run --rm go-app:latest

# 6. 查看镜像大小
docker images go-app:latest` },
      { level: '挑战', task: '写一个"镜像安全扫描脚本"，检查镜像的漏洞和最佳实践', hint: 'docker scout + trivy', answer: `#!/bin/bash
IMAGE=\${1:-nginx:latest}

echo "=== 镜像安全扫描: $IMAGE ==="
echo ""

# 1. 拉取镜像
echo "拉取镜像..."
docker pull "$IMAGE"

# 2. 使用 Docker Scout（如果可用）
if command -v docker-scout > /dev/null; then
  echo ""
  echo "=== Docker Scout 扫描 ==="
  docker-scout cves "$IMAGE"
fi

# 3. 使用 Trivy（如果可用）
if command -v trivy > /dev/null; then
  echo ""
  echo "=== Trivy 扫描 ==="
  trivy image "$IMAGE"
fi

# 4. 检查镜像层
echo ""
echo "=== 镜像层 ==="
docker history "$IMAGE" | head -20

# 5. 检查镜像大小
echo ""
echo "=== 镜像大小 ==="
docker images "$IMAGE"` },
    ],
    prereqs: ['Linux 基础 — 文件系统/进程', '网络基础 — IP/端口'],
    nextSteps: ['Kubernetes — 容器编排', 'Service Mesh — Istio/Linkerd'],
  },
};
