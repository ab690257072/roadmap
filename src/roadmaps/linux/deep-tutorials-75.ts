import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_75: Record<string, DeepTutorial> = {
  "MfengY3ouz6sSOx3PXYf8": {
    mentalModel: 'Docker 是容器化平台——把应用和依赖打包成镜像，在任何地方以相同方式运行。像集装箱运输，不管里面装什么，外面尺寸标准统一。',
    handsOn: [
      { title: '运行容器', cmd: 'docker run -d --name nginx -p 8080:80 nginx:latest', output: 'abc123def456', explain: '-d 后台运行。--name 容器名。-p 8080:80 把宿主机 8080 端口映射到容器 80 端口。nginx:latest 是镜像名。' },
      { title: '查看容器', cmd: 'docker ps', output: 'CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES\nabc123def456   nginx:latest   "/docker-entrypoint.…"   2 minutes ago   Up 2 minutes   0.0.0.0:8080->80/tcp   nginx', explain: 'docker ps 显示运行中的容器。-a 显示所有容器（包括已停止）。' },
      { title: '查看日志', cmd: 'docker logs nginx', output: '172.17.0.1 - - [15/Jan/2024:14:30:00 +0000] "GET / HTTP/1.1" 200 615', explain: 'docker logs 查看容器日志。-f 实时追踪。--tail 100 看最后 100 行。' },
      { title: '进入容器', cmd: 'docker exec -it nginx /bin/bash', output: 'root@abc123def456:/#', explain: '-it 交互模式。/bin/bash 在容器内启动 shell。可以在容器内执行命令。exit 退出。' },
    ],
    diagnosis: [
      { symptom: 'docker run 报 "Cannot connect to Docker daemon"', cause: 'Docker daemon 没启动，或者用户没权限。', fix: 'systemctl status docker 检查服务。sudo systemctl start docker 启动。或者把用户加到 docker 组：usermod -aG docker user。' },
      { symptom: '容器启动后立即退出', cause: '容器内进程退出（如 nginx 配置错误），或者 ENTRYPOINT/CMD 命令错了。', fix: 'docker logs container 看日志。docker inspect container 看退出码。或者 docker run -it image /bin/sh 进入调试。' },
      { symptom: '端口映射不生效', cause: '端口被占用，或者防火墙拦截。', fix: 'ss -tlnp | grep :port 检查端口。sudo ufw status 检查防火墙。或者换端口：-p 9090:80。' },
    ],
    exercises: [
      { level: '基础', task: '用 Docker 运行一个 Nginx 容器，映射端口，查看日志，进入容器', hint: 'docker run + docker logs + docker exec', answer: '#!/bin/bash\n# 1. 运行 Nginx 容器\ndocker run -d --name nginx-test -p 8080:80 nginx:latest\n\n# 2. 查看运行中的容器\ndocker ps | grep nginx-test\n\n# 3. 查看容器日志\ndocker logs nginx-test\n\n# 4. 测试访问\ncurl http://localhost:8080\n\n# 5. 进入容器\ndocker exec -it nginx-test /bin/bash -c "ls /usr/share/nginx/html"\n\n# 6. 清理\ndocker stop nginx-test\ndocker rm nginx-test' },
      { level: '进阶', task: '写一个 Dockerfile，构建自定义 Nginx 镜像（包含自定义 HTML）', hint: 'FROM nginx + COPY + docker build', answer: `#!/bin/bash
# 1. 创建目录
mkdir -p nginx-custom
cd nginx-custom

# 2. 创建自定义 HTML
cat > index.html << EOF
<!DOCTYPE html>
<html>
<head><title>My Custom Nginx</title></head>
<body><h1>Hello from Custom Nginx!</h1></body>
</html>
EOF

# 3. 创建 Dockerfile
cat > Dockerfile << EOF
FROM nginx:latest
COPY index.html /usr/share/nginx/html/
EXPOSE 80
EOF

# 4. 构建镜像
docker build -t my-nginx:latest .

# 5. 运行容器
docker run -d --name my-nginx-test -p 9090:80 my-nginx:latest

# 6. 测试
curl http://localhost:9090

# 7. 清理
docker stop my-nginx-test
docker rm my-nginx-test
docker rmi my-nginx:latest` },
      { level: '挑战', task: '用 docker-compose 运行一个多容器应用（Nginx + Redis + 自定义应用）', hint: 'docker-compose.yml + docker-compose up', answer: `#!/bin/bash
# 1. 创建目录
mkdir -p multi-container-app
cd multi-container-app

# 2. 创建 docker-compose.yml
cat > docker-compose.yml << EOF
version: '3.8'
services:
  nginx:
    image: nginx:latest
    ports:
      - "8080:80"
    depends_on:
      - app
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
  app:
    image: python:3.9-alpine
    command: python -m http.server 5000
    ports:
      - "5000:5000"
EOF

# 3. 启动所有服务
docker-compose up -d

# 4. 查看服务状态
docker-compose ps

# 5. 查看日志
docker-compose logs

# 6. 测试
curl http://localhost:8080
curl http://localhost:5000
redis-cli ping

# 7. 停止并清理
docker-compose down` },
    ],
    prereqs: ['网络基础 — IP/端口', 'Linux 基础 — 文件系统/进程'],
    nextSteps: ['Docker Compose — 多容器编排', 'Kubernetes — 容器编排平台'],
  },
};
