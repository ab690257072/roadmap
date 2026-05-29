import type { DeepTutorial } from '../deep-types';

export const DOCKER_DEEP_TUTORIALS: Record<string, DeepTutorial> = {
  // ═══════════════════════════════════════════════
  // Stage 01 — Docker 入门介绍
  // ═══════════════════════════════════════════════

  "74JxgfJ_1qmVNZ_QRp9Ne": {
    mentalModel: '容器是"轻量级虚拟机"：把应用和依赖打包成隔离的运行环境，共享宿主机内核，秒级启动。Docker 是让这一切变得简单的平台。',
    handsOn: [
      {
        title: '确认 Docker 已安装',
        cmd: 'docker --version',
        output: 'Docker version 24.0.7, build afdd53b',
        explain: 'docker --version 显示客户端版本。如果报 command not found，说明 Docker 没装或没加入 PATH。Docker Desktop（Mac/Windows）安装后自动配置，Linux 需要手动安装 docker-ce。',
      },
      {
        title: '查看 Docker 系统信息',
        cmd: 'docker info 2>&1 | head -20',
        output: 'Client: Docker Engine - Community\n Version:    24.0.7\nServer:\n Containers: 12\n  Running: 3\n  Paused: 0\n  Stopped: 9\n Images: 25\n Storage Driver: overlay2',
        explain: 'docker info 显示 Docker 守护进程的完整状态：有多少容器（运行/暂停/停止）、多少镜像、存储驱动类型。Containers: 12 表示总共有 12 个容器（包括已停止的）。',
      },
      {
        title: '运行第一个容器验证安装',
        cmd: 'docker run --rm hello-world',
        output: 'Hello from Docker!\nThis message shows that your installation appears to be working correctly.\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.',
        explain: 'hello-world 是官方测试镜像，只有 13KB。--rm 表示容器退出后自动删除。如果这个命令成功，说明 Docker 客户端→守护进程→镜像拉取→容器运行的完整链路都正常。',
      },
      {
        title: '查看容器和镜像的区别',
        cmd: 'docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Image}}"',
        output: 'NAMES           STATUS          IMAGE\nweb-server      Up 2 hours      nginx:latest\nmy-redis        Exited (0)      redis:7\nhello-test      Created         hello-world',
        explain: '容器是镜像的运行实例。镜像是只读模板（像类），容器是运行中的实例（像对象）。Status 列显示容器状态：Up（运行中）、Exited（已停止）、Created（已创建但未启动）。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker: command not found',
        cause: 'Docker 未安装，或安装后没有将 docker 加入 PATH。Linux 上安装 docker-ce 后需要 logout 再 login 让 docker 组生效。',
        fix: 'Linux: sudo usermod -aG docker $USER 然后重新登录。Mac/Windows: 安装 Docker Desktop。验证: which docker。',
      },
      {
        symptom: 'Cannot connect to the Docker daemon',
        cause: 'Docker 守护进程（dockerd）没在运行。Linux 上需要手动启动 systemd 服务。Mac/Windows 上 Docker Desktop 没启动。',
        fix: 'Linux: sudo systemctl start docker。Mac/Windows: 启动 Docker Desktop 应用。验证: docker info。',
      },
      {
        symptom: 'permission denied while trying to connect to the Docker daemon socket',
        cause: '当前用户不在 docker 用户组中，没有权限访问 /var/run/docker.sock。',
        fix: 'sudo usermod -aG docker $USER，然后重新登录（或 newgrp docker 临时生效）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '安装 Docker，运行 hello-world 容器，确认输出包含 "Hello from Docker!"',
        hint: 'docker run hello-world',
        answer: 'docker run --rm hello-world',
      },
      {
        level: '进阶',
        task: '用 docker info 查看系统有多少运行中的容器、多少镜像、使用的存储驱动是什么',
        hint: 'docker info 输出很长，用 grep 过滤',
        answer: 'docker info | grep -E "Containers:|Running:|Images:|Storage Driver:"',
      },
    ],
  },

  "i4ijY3T5gLgNz0XqRipXe": {
    mentalModel: '容器解决的是"在我机器上能跑"问题：把应用、依赖、系统库、配置全部打包在一起，在任何 Linux 机器上行为一致。',
    handsOn: [
      {
        title: '对比：不用容器 vs 用容器',
        cmd: '# 不用容器：在每台服务器上安装 Node.js + 依赖\n# apt install nodejs npm && npm install\n# 不同服务器可能 Node.js 版本不同 → 行为不一致\n\n# 用容器：打包成镜像，到处运行\ndocker run --rm node:18-alpine node -v',
        output: 'v18.19.0',
        explain: 'node:18-alpine 镜像自带 Node.js 18 和 Alpine Linux。无论在哪台机器上运行，Node.js 版本都是 18.19.0。不需要在宿主机安装任何东西。',
      },
      {
        title: '观察容器的隔离性',
        cmd: 'docker run --rm alpine cat /etc/os-release',
        output: 'NAME="Alpine Linux"\nID=alpine\nVERSION_ID=3.19.0\nPRETTY_NAME="Alpine Linux v3.19.0"',
        explain: '容器内看到的是 Alpine Linux 的系统信息，即使宿主机是 Ubuntu。容器有自己的文件系统、进程空间、网络栈。但注意：容器共享宿主机内核（uname -r 在容器内外一样）。',
      },
      {
        title: '观察容器的轻量——秒级启动',
        cmd: 'time docker run --rm alpine echo "started"',
        output: 'started\n\nreal    0m0.412s\nuser    0m0.052s\nsys     0m0.023s',
        explain: '容器启动只需 0.4 秒——因为它不需要启动完整的操作系统。虚拟机通常需要 30-120 秒启动。这就是容器"轻量"的含义：共享内核，只隔离用户空间。',
      },
      {
        title: '多个容器互不干扰',
        cmd: 'docker run -d --name web1 -p 8081:80 nginx:latest && \\\ndocker run -d --name web2 -p 8082:80 httpd:latest && \\\ndocker ps --format "table {{.Names}}\t{{.Image}}\t{{.Ports}}"',
        output: 'NAMES   IMAGE           PORTS\nweb2    httpd:latest    0.0.0.0:8082->80/tcp\nweb1    nginx:latest    0.0.0.0:8081->80/tcp',
        explain: '两个容器运行不同的 Web 服务器（Nginx 和 Apache），映射到不同端口。它们完全隔离：不同文件系统、不同进程、不同配置。停止一个不影响另一个。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器启动后立即退出',
        cause: '容器的前台进程（PID 1）退出了。容器必须有一个持续运行的前台进程，否则 Docker 认为容器已完成任务并退出。',
        fix: 'docker logs <container> 查看退出原因。确保 CMD/ENTRYPOINT 指定的进程是长期运行的。用 -d 后台运行时加 --restart unless-stopped。',
      },
      {
        symptom: '容器内安装的东西重启后消失',
        cause: '容器的文件系统是临时的（可写层在容器删除时消失）。这不是 bug，是设计：容器应该是无状态的。',
        fix: '用 Docker 卷（-v）持久化数据。用 Dockerfile 把依赖烘焙到镜像中。不要把容器当虚拟机用。',
      },
      {
        symptom: '"在我机器上能跑"——同事机器上跑不起来',
        cause: '通常是环境变量、配置文件、依赖版本不一致。没有用容器，或容器构建时没有把所有依赖都打进去。',
        fix: '用 Dockerfile 明确声明所有依赖（RUN apt install / npm install）。用 .env 文件管理环境变量。用 docker-compose.yml 声明完整运行环境。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '分别运行 ubuntu:22.04 和 alpine:3.19 容器，执行 cat /etc/os-release 对比它们的系统信息',
        hint: 'docker run --rm <image> cat /etc/os-release',
        answer: 'docker run --rm ubuntu:22.04 cat /etc/os-release\ndocker run --rm alpine:3.19 cat /etc/os-release',
      },
      {
        level: '进阶',
        task: '在宿主机运行 uname -r，在容器内也运行 uname -r，验证它们共享同一个内核',
        hint: 'docker run --rm alpine uname -r',
        answer: 'uname -r\ndocker run --rm alpine uname -r\n# 两者输出相同的内核版本号',
      },
    ],
  },

  "Py9nst2FDJ1_hoXeX_qSF": {
    mentalModel: 'Docker 是"容器化的快递系统"：镜像是打包好的包裹（包含应用+依赖+环境），容器是拆包使用的过程，Docker Hub 是快递公司（分发包裹）。',
    handsOn: [
      {
        title: '查看本地已下载的镜像',
        cmd: 'docker images',
        output: 'REPOSITORY   TAG       IMAGE ID       CREATED       SIZE\nnginx        latest    605c77e624dd   2 weeks ago   142MB\nnode         18-alpine a1b2c3d4e5f6   3 weeks ago   178MB\nredis        7         8a9b0c1d2e3f   1 month ago   117MB',
        explain: 'docker images 列出本地所有镜像。REPOSITORY 是镜像名，TAG 是版本标签，IMAGE ID 是唯一标识，SIZE 是镜像大小。latest 不是"最新版"，而是默认标签。',
      },
      {
        title: '拉取一个镜像观察下载过程',
        cmd: 'docker pull alpine:3.19',
        output: '3.19: Pulling from library/alpine\n0a7d14aef6c3: Pull complete\nDigest: sha256:c5b1261d6d3e43071626931fc004f70149baeba2c8ec672bd4f27761f8e1ad6b\nStatus: Downloaded newer image for alpine:3.19\ndocker.io/library/alpine:3.19',
        explain: 'Pulling from library/alpine 表示从 Docker Hub 拉取。镜像按层下载，每层有哈希值。Pull complete 表示该层下载完成。Digest 是镜像的完整哈希，确保内容一致性。',
      },
      {
        title: '查看镜像的层结构',
        cmd: 'docker history alpine:3.19',
        output: 'IMAGE          CREATED       SIZE      COMMENT\n0a7d14aef6c3   2 weeks ago   7.73MB    Alpine base image\n<missing>      2 weeks ago   0B        ADD file:...\n<missing>      2 weeks ago   0B        CMD ["/bin/sh"]',
        explain: '镜像由多层叠加组成。每层是只读的。Alpine 只有 1 层（7.73MB），所以非常小。Ubuntu 镜像通常有 3-5 层（约 77MB）。层可以被多个镜像共享，节省磁盘空间。',
      },
      {
        title: '查看镜像详细信息',
        cmd: 'docker inspect alpine:3.19 | head -30',
        output: '[\n  {\n    "Id": "sha256:0a7d14aef6c3...",\n    "RepoTags": ["alpine:3.19"],\n    "Architecture": "amd64",\n    "Os": "linux",\n    "Size": 7726036,',
        explain: 'docker inspect 显示镜像的完整元数据：架构（amd64/arm64）、操作系统、大小（字节）、创建时间、环境变量、默认启动命令等。排查架构不匹配问题时很有用。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker pull 很慢或超时',
        cause: 'Docker Hub 在国外，国内访问慢。或者镜像很大（如 nvidia/cuda 超过 5GB）。',
        fix: '配置镜像加速器：编辑 /etc/docker/daemon.json 加 {"registry-mirrors": ["https://mirror.ccs.tencentyun.com"]}，然后 sudo systemctl restart docker。',
      },
      {
        symptom: 'no space left on device',
        cause: 'Docker 镜像和容器占满了磁盘。默认存储在 /var/lib/docker/。',
        fix: 'docker system prune -a 清理所有未使用的镜像、容器、网络。docker volume prune 清理未使用的卷。用 docker system df 查看磁盘占用。',
      },
      {
        symptom: '拉取的镜像架构不匹配（amd64 镜像在 arm64 上运行报错）',
        cause: '某些镜像只提供 amd64 版本，在 Apple Silicon（arm64）上无法直接运行。',
        fix: 'docker pull --platform linux/amd64 <image> 强制拉取 amd64 版本（通过 Rosetta 模拟运行）。或寻找提供多架构的镜像。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '拉取 nginx:latest 和 nginx:alpine 两个镜像，对比它们的大小',
        hint: 'docker pull + docker images',
        answer: 'docker pull nginx:latest\ndocker pull nginx:alpine\ndocker images nginx\n# nginx:alpine 约 43MB，nginx:latest 约 142MB',
      },
      {
        level: '进阶',
        task: '用 docker inspect 查看 nginx:latest 的默认启动命令和环境变量',
        hint: 'docker inspect --format 可以提取特定字段',
        answer: 'docker inspect --format "{{.Config.Cmd}}" nginx:latest\ndocker inspect --format "{{.Config.Env}}" nginx:latest',
      },
    ],
  },

  "3hatcMVLDbMuz73uTx-9P": {
    mentalModel: '裸机是"自己盖房子"，虚拟机是"租公寓"，容器是"住合租房"——共享基础设施（内核），但各自有独立的空间（文件系统、网络、进程）。',
    handsOn: [
      {
        title: '观察容器共享宿主机内核',
        cmd: 'echo "宿主机内核:" && uname -r && \\\necho "容器内核:" && docker run --rm alpine uname -r',
        output: '宿主机内核: 5.15.0-91-generic\n容器内核: 5.15.0-91-generic',
        explain: '容器和宿主机内核版本完全一样——容器不启动自己的内核，而是共享宿主机的。虚拟机则有自己的内核（所以能运行不同 OS）。这就是容器比虚拟机轻量的根本原因。',
      },
      {
        title: '对比启动速度：容器 vs 虚拟机概念',
        cmd: 'echo "=== 容器启动时间 ===" && \\\ntime docker run --rm alpine echo "hello" 2>&1 && \\\necho "=== 容器内存占用 ===" && \\\ndocker run -d --name test-mem alpine sleep 60 && \\\ndocker stats --no-stream test-mem',
        output: 'hello\n\nreal    0m0.38s\n\nCONTAINER ID   NAME      CPU %   MEM USAGE / LIMIT\nabc123def456   test-mem  0.00%   612KiB / 7.756GiB',
        explain: '容器 0.38 秒启动，仅占用 612KB 内存。同等功能的虚拟机通常需要 30-120 秒启动，至少 256MB 内存。容器在一台机器上可以跑数百个，虚拟机通常只能跑几十个。',
      },
      {
        title: '观察容器的隔离——进程空间',
        cmd: 'docker run -d --name iso-test nginx:alpine && \\\ndocker exec iso-test ps aux && \\\necho "=== 宿主机看到的容器进程 ===" && \\\nps aux | grep nginx | grep -v grep',
        output: 'PID   USER  COMMAND\n    1 root  nginx: master process\n    7 nginx nginx: worker process\n\n=== 宿主机看到的容器进程 ===\nroot  12345  nginx: master process\nwww   12346  nginx: worker process',
        explain: '容器内的 PID 1 在宿主机上其实是 PID 12345——容器有独立的进程命名空间（PID namespace），内部从 1 开始编号。这提供了进程隔离：容器内看不到宿主机的其他进程。',
      },
      {
        title: '清理测试容器',
        cmd: 'docker rm -f test-mem iso-test',
        output: 'test-mem\niso-test',
        explain: 'docker rm -f 强制删除容器（即使还在运行）。-f 发送 SIGKILL 强制终止。不加 -f 只能删除已停止的容器。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器内无法使用某些系统调用（如 iptables、mount）',
        cause: '容器共享宿主机内核，且默认限制了部分系统调用（通过 seccomp profile）。某些操作需要特权模式。',
        fix: 'docker run --privileged（危险！给予完整权限）或 docker run --cap-add NET_ADMIN（只添加需要的能力）。',
      },
      {
        symptom: '容器占用宿主机太多资源，导致其他容器受影响',
        cause: '容器默认没有资源限制，一个容器可以用光宿主机的 CPU/内存。',
        fix: 'docker run --memory=512m --cpus=1.0 限制内存和 CPU。docker stats 监控资源使用。',
      },
      {
        symptom: '不同容器间能互相看到进程（通过 /proc）',
        cause: '默认情况下容器使用 PID namespace 隔离，但某些配置（如 --pid=host）会关闭隔离。',
        fix: '检查 docker inspect <container> | grep PidMode。确保没有设置 --pid=host。使用 --security-opt=no-new-privileges 加固。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '运行一个 ubuntu:22.04 容器，在容器内执行 cat /proc/cpuinfo | head -5，和宿主机对比',
        hint: 'docker run --rm ubuntu:22.04 cat /proc/cpuinfo | head -5',
        answer: 'docker run --rm ubuntu:22.04 cat /proc/cpuinfo | head -5\n# 对比：cat /proc/cpuinfo | head -5\n# CPU 信息相同——共享同一硬件',
      },
      {
        level: '进阶',
        task: '运行两个容器，用 --memory 限制第一个容器 64MB、第二个 128MB，用 docker stats 对比',
        hint: 'docker run -d --memory=64m + docker stats --no-stream',
        answer: 'docker run -d --name mem64 --memory=64m alpine sleep 300\ndocker run -d --name mem128 --memory=128m alpine sleep 300\ndocker stats --no-stream mem64 mem128\n# MEM USAGE / LIMIT 列显示不同的限制\ndocker rm -f mem64 mem128',
      },
    ],
  },

  "mw-weCutd2ECKlx2DE_ZJ": {
    mentalModel: 'Package Manager 是"应用的自动售货机"：apt（Debian/Ubuntu）、yum/dnf（RHEL/CentOS）、apk（Alpine）——不同 Linux 发行版有不同的"售货机"。',
    handsOn: [
      {
        title: '在 Alpine 容器中使用 apk',
        cmd: 'docker run --rm alpine:3.19 sh -c "apk update && apk add curl && curl --version"',
        output: 'fetch https://dl-cdn.alpinelinux.org/alpine/v3.19/main/x86_64/APKINDEX.tar.gz\nOK: 22953 distinct packages available\nInstalling curl (8.5.0-r0)\nOK: 9 MiB in 17 packages\ncurl 8.5.0 (x86_64-alpine-linux-musl)',
        explain: 'Alpine 用 apk 包管理器。apk update 更新索引，apk add 安装软件。Alpine 的包体积特别小（musl libc 代替 glibc），所以 Docker 镜像中常用 alpine 版本减小体积。',
      },
      {
        title: '在 Ubuntu 容器中使用 apt',
        cmd: 'docker run --rm ubuntu:22.04 bash -c "apt-get update && apt-get install -y curl && curl --version" 2>&1 | tail -5',
        output: 'Setting up curl (7.81.0-1ubuntu1.15) ...\ncurl 7.81.0 (x86_64-pc-linux-gnu) libcurl/7.81.0',
        explain: 'Ubuntu 用 apt（apt-get 是非交互版本，适合脚本和 Dockerfile）。apt-get update 更新索引，apt-get install -y 安装（-y 自动确认）。Ubuntu 的 curl 版本和 Alpine 不同。',
      },
      {
        title: '在 CentOS 容器中使用 yum',
        cmd: 'docker run --rm centos:7 yum install -y curl 2>&1 | tail -5',
        output: 'Installed:\n  curl.x86_64 0:7.29.0-59.el7_9.1\nComplete!',
        explain: 'CentOS 7 用 yum，CentOS 8+ 和 Fedora 用 dnf。yum install -y 安装软件。CentOS 的 curl 版本通常较旧（企业版追求稳定而非最新）。',
      },
      {
        title: '对比不同发行版的包数量',
        cmd: 'echo "Alpine:" && docker run --rm alpine sh -c "apk info | wc -l" && \\\necho "Ubuntu:" && docker run --rm ubuntu:22.04 bash -c "apt list --installed 2>/dev/null | wc -l" && \\\necho "CentOS:" && docker run --rm centos:7 yum list installed 2>/dev/null | wc -l',
        output: 'Alpine: 14\nUbuntu: 238\nCentOS: 148',
        explain: 'Alpine 基础镜像只有 14 个包（极小），Ubuntu 有 238 个，CentOS 有 148 个。包越少→镜像越小→攻击面越小→启动越快。这就是为什么 Docker 推荐用 alpine 做基础镜像。',
      },
    ],
    diagnosis: [
      {
        symptom: 'apt-get install 报 "Unable to locate package"',
        cause: '没有先运行 apt-get update 更新包索引。Docker 镜像中的索引通常是过期的。',
        fix: '先 apt-get update 再 apt-get install。在 Dockerfile 中写在一行：RUN apt-get update && apt-get install -y package。',
      },
      {
        symptom: 'apk add 报 "package not found"',
        cause: '包名拼写错误或该包不在官方仓库中。Alpine 的包名和 Ubuntu 不同（如 curl-dev vs libcurl4-openssl-dev）。',
        fix: 'apk search <keyword> 搜索包名。查看 https://pkgs.alpinelinux.org/packages 确认包名。',
      },
      {
        symptom: 'yum install 很慢',
        cause: 'CentOS 7 的官方镜像源已停止维护（EOL），需要切换到 vault 或镜像站。',
        fix: 'sed -i \'s/mirrorlist/#mirrorlist/g\' /etc/yum.repos.d/CentOS-*.repo && sed -i \'s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g\' /etc/yum.repos.d/CentOS-*.repo',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '在 alpine 容器中安装 wget 和 curl，验证两个命令都可用',
        hint: 'apk update && apk add',
        answer: 'docker run --rm alpine sh -c "apk update && apk add wget curl && wget --version && curl --version"',
      },
      {
        level: '进阶',
        task: '对比 ubuntu:22.04 和 alpine:3.19 安装 curl 后的镜像大小差异',
        hint: '写两个简单 Dockerfile，分别用 ubuntu 和 alpine 做基础镜像安装 curl',
        answer: 'echo "FROM alpine:3.19\nRUN apk update && apk add curl" > Dockerfile.alpine\necho "FROM ubuntu:22.04\nRUN apt-get update && apt-get install -y curl" > Dockerfile.ubuntu\ndocker build -f Dockerfile.alpine -t curl-alpine .\ndocker build -f Dockerfile.ubuntu -t curl-ubuntu .\ndocker images curl-*\n# alpine 版约 12MB，ubuntu 版约 120MB',
      },
    ],
  },

  "uKjB2qntFTpPuYUT9sdxd": {
    mentalModel: '容器内的用户和宿主机用户是"两套门牌号"：容器内 root（UID 0）在宿主机上也是 root——这是安全隐患。所以生产环境要用非 root 用户运行容器。',
    handsOn: [
      {
        title: '查看容器内默认用户',
        cmd: 'docker run --rm alpine id',
        output: 'uid=0(root) gid=0(root) groups=0(root)',
        explain: '默认情况下，容器以 root（UID 0）运行。虽然容器有 namespace 隔离，但 root 容器一旦逃逸，就是宿主机的 root。生产环境应该用 --user 指定非 root 用户。',
      },
      {
        title: '以非 root 用户运行容器',
        cmd: 'docker run --rm --user 1000:1000 alpine id',
        output: 'uid=1000 gid=1000',
        explain: '--user 1000:1000 指定 UID 和 GID。容器内的进程以普通用户身份运行，即使逃逸也不是宿主机 root。1000 通常是第一个普通用户的 UID。',
      },
      {
        title: '在 Dockerfile 中设置非 root 用户',
        cmd: 'mkdir -p /tmp/docker-user-test && cat > /tmp/docker-user-test/Dockerfile << \'EOF\'\nFROM node:18-alpine\nWORKDIR /app\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nCOPY --chown=appuser:appgroup . /app\nUSER appuser\nCMD ["id"]\nEOF\ndocker build -t user-test /tmp/docker-user-test && docker run --rm user-test',
        output: 'uid=1000(appuser) gid=1000(appgroup)',
        explain: 'Dockerfile 中用 adduser 创建用户，USER 指令切换到非 root。COPY --chown 确保文件属主正确。这是 Docker 安全的最佳实践之一。',
      },
      {
        title: '查看容器内的用户和组',
        cmd: 'docker run --rm alpine cat /etc/passwd | head -5',
        output: 'root:x:0:0:root:/root:/bin/sh\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\nadm:x:3:4:adm:/var/adm:/sbin/nologin\nlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin',
        explain: '容器内有自己的 /etc/passwd 文件（通过 namespace 隔离）。root 是 UID 0，bin 是 UID 1。/sbin/nologin 表示该用户不能登录。容器内的 UID 和宿主机是同一套编号（没有 user namespace 时）。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器内写文件报 Permission denied',
        cause: '用 --user 切换到非 root 后，该用户没有权限写入目标目录。默认目录通常是 root 所有的。',
        fix: '在 Dockerfile 中用 chown 修改目录所有者：RUN chown -R appuser:appgroup /app。或者用 VOLUME 挂载时指定权限。',
      },
      {
        symptom: '容器内无法绑定 80 或 443 端口',
        cause: 'Linux 上绑定 1024 以下端口需要 root 权限（CAP_NET_BIND_SERVICE）。非 root 用户无法绑定低端口。',
        fix: '方案1：应用监听 8080 等高端口，用 -p 80:8080 映射。方案2：docker run --cap-add NET_BIND_SERVICE。方案3：setcap \'cap_net_bind_service=+ep\' /path/to/binary。',
      },
      {
        symptom: '容器内创建的文件在宿主机上是 root 所有',
        cause: '容器以 root 运行时，创建的文件 UID=0。挂载卷时这些文件在宿主机上也是 root 所有，普通用户无法删除。',
        fix: '用 --user $(id -u):$(id -g) 运行容器，使容器内 UID 和宿主机用户一致。或在容器内用非 root 用户。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '分别以 root 和 UID 1000 运行 alpine 容器，执行 whoami 和 id 对比',
        hint: 'docker run --rm alpine id vs docker run --rm --user 1000 alpine id',
        answer: 'docker run --rm alpine id\n# uid=0(root)\ndocker run --rm --user 1000 alpine id\n# uid=1000',
      },
      {
        level: '进阶',
        task: '写一个 Dockerfile，创建 appuser 用户，以该用户运行，挂载卷写入文件验证权限',
        hint: 'adduser + USER + docker run -v',
        answer: 'cat > Dockerfile << \'EOF\'\nFROM alpine:3.19\nRUN adduser -D appuser\nWORKDIR /data\nRUN chown appuser:appuser /data\nUSER appuser\nCMD ["sh", "-c", "echo hello > /data/test.txt && cat /data/test.txt"]\nEOF\ndocker build -t perm-test .\ndocker run --rm -v /tmp/data:/data perm-test',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 02 — Docker CLI 核心命令
  // ═══════════════════════════════════════════════

  "43drPbTwPqJQPyzwYUdBT": {
    mentalModel: 'Docker CLI 是"遥控器"：客户端（你）通过 CLI 发指令，守护进程（dockerd）执行操作。OCI 标准确保不同容器运行时（Docker、Podman、containerd）可以互换。',
    handsOn: [
      {
        title: '查看 Docker 客户端和服务端版本',
        cmd: 'docker version',
        output: 'Client: Docker Engine - Community\n Version:           24.0.7\n API version:       1.43\nServer: Docker Engine - Community\n Version:           24.0.7\n API version:       1.43 (minimum version 1.12)',
        explain: 'docker version 显示客户端和服务端两个版本。API version 是客户端和服务端通信的协议版本。如果客户端版本比服务端新太多，可能报 API 不兼容。',
      },
      {
        title: '查看 Docker 系统状态概览',
        cmd: 'docker system df',
        output: 'TYPE            TOTAL    ACTIVE   SIZE      RECLAIMABLE\nImages          15       5        3.214GB   2.108GB (65%)\nContainers      8        3        256.3MB   128.7MB (50%)\nLocal Volumes   6        2        1.024GB   512MB (50%)\nBuild Cache     42       0        892.5MB   892.5MB',
        explain: 'docker system df 类似磁盘使用概览。RECLAIMABLE 是可回收空间（未使用的镜像/停止的容器/未挂载的卷）。65% 可回收意味着可以清理 2.1GB 空间。',
      },
      {
        title: '查看 Docker 运行时配置',
        cmd: 'docker info --format "{{.CgroupDriver}} / {{.StorageDriver}} / {{.LoggingDriver}}"',
        output: 'systemd / overlay2 / json-file',
        explain: 'CgroupDriver 控制资源限制方式（systemd 推荐），StorageDriver 是镜像层存储方式（overlay2 是主流），LoggingDriver 是日志存储方式（json-file 是默认）。这些配置影响性能和兼容性。',
      },
      {
        title: '测试 OCI 兼容性——用 containerd 直接运行',
        cmd: '# Docker 底层用 containerd，可以直接用 ctr 命令\nwhich ctr 2>/dev/null && ctr --version || echo "ctr not in PATH, try /usr/bin/ctr"',
        output: 'Client:\n  Version:  1.6.26\n  Revision: 3dd1e886e55dd695541fdcd67420c795546c3b50',
        explain: 'Docker 底层使用 containerd 作为容器运行时。OCI（Open Container Initiative）标准化了镜像格式和运行时接口。Podman、nerdctl 等工具也遵循 OCI 标准，可以替代 Docker。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker version 显示 client 和 server 版本差距很大',
        cause: '升级了 docker CLI 但没升级 dockerd，或反过来。API 不兼容可能导致某些命令失败。',
        fix: '确保客户端和服务端版本匹配。Linux: sudo apt-get upgrade docker-ce docker-ce-cli。Mac/Windows: 更新 Docker Desktop。',
      },
      {
        symptom: 'docker system df 显示大量 RECLAIMABLE 空间',
        cause: '积累了很多旧镜像、停止的容器和未使用的卷。长期不清理会占满磁盘。',
        fix: 'docker system prune -a --volumes 彻底清理（谨慎！会删除所有未使用的资源）。或 docker image prune 只清理悬空镜像。',
      },
      {
        symptom: 'docker info 报 "WARNING: No swap limit support"',
        cause: 'Linux 内核没有启用 swap limit 功能。某些旧内核或特定发行版默认关闭。',
        fix: '编辑 /etc/default/grub，GRUB_CMDLINE_LINUX 加 "cgroup_enable=memory swapaccount=1"，update-grub 后重启。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker version 查看你的 Docker 版本，用 docker system df 查看磁盘占用',
        hint: '直接运行命令',
        answer: 'docker version\ndocker system df',
      },
      {
        level: '进阶',
        task: '用 docker info --format 提取存储驱动、日志驱动、Cgroup 驱动三个关键配置',
        hint: 'docker info --format 使用 Go 模板语法',
        answer: 'docker info --format "Storage: {{.StorageDriver}}, Logging: {{.LoggingDriver}}, Cgroup: {{.CgroupDriver}}"',
      },
    ],
  },

  "W5kX5jn49hghRgkEw6_S3": {
    mentalModel: 'docker ps 是"容器点名册"：列出运行中的容器及其状态。加 -a 看所有容器（包括停止的），加 --format 自定义输出格式。',
    handsOn: [
      {
        title: '查看运行中的容器',
        cmd: 'docker ps',
        output: 'CONTAINER ID   IMAGE          COMMAND                  STATUS         PORTS                  NAMES\na1b2c3d4e5f6   nginx:latest   "/docker-entrypoint.…"   Up 2 hours     0.0.0.0:8080->80/tcp   web-server\nb2c3d4e5f6a1   redis:7        "docker-entrypoint.s…"   Up 2 hours     6379/tcp               cache',
        explain: '默认只显示运行中的容器。每行显示：容器 ID、镜像、启动命令、状态、端口映射、名称。STATUS 中 "Up 2 hours" 表示运行了 2 小时。',
      },
      {
        title: '查看所有容器（包括停止的）',
        cmd: 'docker ps -a --format "table {{.Names}}\t{{.Image}}\t{{.Status}}"',
        output: 'NAMES        IMAGE          STATUS\nweb-server   nginx:latest   Up 2 hours\ncache        redis:7        Up 2 hours\nold-app      myapp:1.0      Exited (0) 3 hours ago\nfailed-job   batch:latest   Exited (1) 1 day ago',
        explain: '-a 显示所有容器。Exited (0) 表示正常退出，Exited (1) 表示异常退出（退出码非 0）。--format 使用 Go 模板自定义输出列。',
      },
      {
        title: '过滤特定状态的容器',
        cmd: 'docker ps -f status=exited --format "{{.Names}}: {{.Status}}"',
        output: 'old-app: Exited (0) 3 hours ago\nfailed-job: Exited (1) 1 day ago',
        explain: '-f status=exited 只显示已停止的容器。其他过滤条件：status=running、status=created、name=web、ancestor=nginx（按镜像过滤）。',
      },
      {
        title: '只显示容器 ID（用于脚本）',
        cmd: 'echo "运行中:" && docker ps -q && echo "所有:" && docker ps -aq',
        output: '运行中:\na1b2c3d4e5f6\nb2c3d4e5f6a1\n所有:\na1b2c3d4e5f6\nb2c3d4e5f6a1\nc3d4e5f6a1b2\nd4e5f6a1b2c3',
        explain: '-q 只输出容器 ID（短格式）。常用于批量操作：docker stop $(docker ps -q) 停止所有运行中的容器。docker rm $(docker ps -aq -f status=exited) 删除所有已停止的容器。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker ps 显示容器状态是 "Restarting"',
        cause: '容器进程反复崩溃退出，Docker 的 restart policy 在自动重启。常见原因：应用启动失败、配置错误、依赖服务不可用。',
        fix: 'docker logs <container> 查看错误日志。docker inspect --format "{{.RestartCount}}" <container> 查看重启次数。修复应用问题后用 docker restart 重启。',
      },
      {
        symptom: '容器状态是 Exited (137)',
        cause: '退出码 137 = 128 + 9（SIGKILL）。容器被 OOM Killer 杀死（内存超限）或被手动 docker kill。',
        fix: 'docker inspect --format "{{.State.OOMKilled}}" <container> 确认是否 OOM。如果是，增加 --memory 限制或优化应用内存使用。',
      },
      {
        symptom: 'docker ps 很慢',
        cause: '容器数量太多（数百个），或 Docker 守护进程负载高。',
        fix: 'docker ps --format "{{.ID}}" 只查 ID 会更快。清理停止的容器：docker container prune。检查守护进程状态：systemctl status docker。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '启动 3 个不同的容器（nginx、redis、alpine sleep），用 docker ps 查看，然后用一条命令停止所有',
        hint: 'docker run -d + docker ps + docker stop $(docker ps -q)',
        answer: 'docker run -d --name web nginx:alpine\ndocker run -d --name cache redis:alpine\ndocker run -d --name worker alpine sleep 3600\ndocker ps --format "table {{.Names}}\t{{.Status}}"\ndocker stop $(docker ps -q)\ndocker rm $(docker ps -aq)',
      },
      {
        level: '进阶',
        task: '写一个 shell 函数 dps，显示所有容器，按状态分组（运行中的在前），只显示名字、镜像、状态',
        hint: 'docker ps -a --format + sort',
        answer: 'dps() {\n  docker ps -a --format "table {{.Names}}\t{{.Image}}\t{{.Status}}" | \\\n    sort -t$\'\\t\' -k3 -r\n}\n# 或更精确：先显示 running，再显示 exited\ndps() {\n  echo "=== Running ==="\n  docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}"\n  echo "=== Stopped ==="\n  docker ps -a -f status=exited --format "table {{.Names}}\t{{.Image}}\t{{.Status}}"\n}',
      },
    ],
  },

  "jrH1qE6EnFXL4fTyYU8gR": {
    mentalModel: 'docker stop 是"优雅关机"（先发 SIGTERM，等 10 秒，再发 SIGKILL），docker start 是"开机"。docker restart 是"重启"。',
    handsOn: [
      {
        title: '启动一个测试容器',
        cmd: 'docker run -d --name lifecycle nginx:alpine',
        output: 'a1b2c3d4e5f6789012345678',
        explain: '-d（detach）后台运行。--name 给容器起名（不设则 Docker 随机生成）。输出是容器完整 ID（64 位十六进制），可以用前几位来引用。',
      },
      {
        title: '优雅停止容器',
        cmd: 'time docker stop lifecycle',
        output: 'lifecycle\n\nreal    0m0.85s',
        explain: 'docker stop 发送 SIGTERM（请求退出），等待 10 秒，超时则发 SIGKILL（强制杀死）。Nginx 收到 SIGTERM 后会处理完当前请求再退出，所以只用了 0.85 秒。可以用 -t 30 设置等待 30 秒。',
      },
      {
        title: '启动已停止的容器',
        cmd: 'docker start lifecycle && docker ps --filter name=lifecycle --format "{{.Names}}: {{.Status}}"',
        output: 'lifecycle\nlifecycle: Up 1 second',
        explain: 'docker start 重新启动已停止的容器。容器的文件系统和配置都保留（不像 docker run 创建新的）。状态从 "Exited" 变回 "Up"。',
      },
      {
        title: '重启容器',
        cmd: 'docker restart lifecycle && docker ps --filter name=lifecycle --format "{{.Names}}: {{.Status}}"',
        output: 'lifecycle\nlifecycle: Up 1 second',
        explain: 'docker restart = stop + start。会先 SIGTERM 优雅停止，等待后再启动。如果应用支持优雅关闭，正在处理的请求不会中断。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker stop 很慢（等了 10 秒才停）',
        cause: '容器内进程没有正确处理 SIGTERM 信号。Docker 等 10 秒后发送 SIGKILL 强制杀死。常见于 PID 1 是 shell 脚本（shell 不转发信号）。',
        fix: '在 Dockerfile 中用 exec 形式：CMD ["nginx", "-g", "daemon off;"]（不是 CMD nginx -g "daemon off;"）。或在 entrypoint 脚本中用 exec "$@" 替换 shell 进程。',
      },
      {
        symptom: 'docker start 后容器立即退出',
        cause: '容器的原始进程启动失败了（比如依赖的端口被占用，配置文件被删除）。',
        fix: 'docker logs <container> 查看错误。docker start -a（attach 模式）看实时输出。修复问题后 docker restart。',
      },
      {
        symptom: 'docker restart 后应用状态丢失',
        cause: '容器内的内存数据在 stop 时丢失（进程退出→内存释放）。如果应用没有把状态持久化到卷，重启后就是全新状态。',
        fix: '用 Docker 卷持久化数据。应用层面做好状态持久化（数据库写磁盘、Redis 开 AOF、应用把 session 存到外部存储）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建 nginx 容器，停止它，重启它，查看状态变化',
        hint: 'docker run -d → docker stop → docker start → docker ps -a',
        answer: 'docker run -d --name test-life nginx:alpine\ndocker ps  # 状态: Up\ndocker stop test-life\ndocker ps -a  # 状态: Exited\ndocker start test-life\ndocker ps  # 状态: Up\ndocker rm -f test-life  # 清理',
      },
      {
        level: '进阶',
        task: '创建一个容器，用 docker stop -t 30 设置 30 秒等待时间，和默认 10 秒对比停止速度',
        hint: 'docker stop -t 设置 SIGTERM 到 SIGKILL 的等待时间',
        answer: 'docker run -d --name slow-stop alpine sh -c "trap \\"echo got SIGTERM; sleep 5; exit 0\\" TERM; while true; do sleep 1; done"\ntime docker stop -t 30 slow-stop  # 约 5 秒（应用处理 SIGTERM 需要 5 秒）\ndocker rm slow-stop',
      },
    ],
  },

  "BvV8VCX39wRB-g8WvGF1g": {
    mentalModel: 'docker rm 是"销毁容器"：删除容器的可写层和元数据。镜像不会被删除（可以再次 docker run）。加 -f 可以强制删除运行中的容器。',
    handsOn: [
      {
        title: '删除已停止的容器',
        cmd: 'docker run --name temp alpine echo "hello" && \\\ndocker rm temp',
        output: 'hello\ntemp',
        explain: '容器退出后，docker rm 删除它。容器 ID 和名称被释放，可以复用。镜像（alpine）不受影响。docker ps -a 中不再显示该容器。',
      },
      {
        title: '强制删除运行中的容器',
        cmd: 'docker run -d --name running-test alpine sleep 3600 && \\\ndocker rm -f running-test',
        output: 'a1b2c3d4e5f6\nrunning-test',
        explain: '-f（force）对运行中的容器发送 SIGKILL 然后删除。不加 -f 删除运行中的容器会报错：You cannot remove a running container。',
      },
      {
        title: '删除容器同时删除关联的匿名卷',
        cmd: 'docker run --name vol-test -v /data alpine echo "test" && \\\ndocker rm -v vol-test',
        output: 'test\nvol-test',
        explain: '-v 删除容器时同时删除关联的匿名卷（没有名字的卷）。命名卷（有名字的）不会被删除。这个选项防止"孤儿卷"占用磁盘空间。',
      },
      {
        title: '批量清理已停止的容器',
        cmd: 'echo "清理前:" && docker ps -a --format "{{.Names}}: {{.Status}}" && \\\ndocker container prune -f && \\\necho "清理后:" && docker ps -a --format "{{.Names}}: {{.Status}}"',
        output: '清理前:\nvol-test: Exited (0)\nold-app: Exited (1)\nweb: Up 5 hours\nWARNING! This will remove all stopped containers.\nDeleted Containers:\nvol-test\nold-app\nTotal reclaimed space: 1.234 MB\n清理后:\nweb: Up 5 hours',
        explain: 'docker container prune 删除所有已停止的容器（一次性清理）。-f 跳过确认提示。运行中的容器不受影响。比 docker rm $(docker ps -aq -f status=exited) 更安全。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker rm 报 "container is running"',
        cause: '容器还在运行中。默认不能删除运行中的容器。',
        fix: '先 docker stop <container> 再 docker rm <container>。或 docker rm -f <container> 强制删除。',
      },
      {
        symptom: '删除容器后磁盘空间没有释放',
        cause: '容器关联的匿名卷没有被一起删除。docker rm 默认不删除卷。',
        fix: 'docker rm -v <container> 同时删除匿名卷。或 docker volume prune 清理所有未使用的卷。',
      },
      {
        symptom: 'docker rm 报 "container name already in use"',
        cause: '删除容器时用了旧名称（容器可能已经被重命名或名称被另一个容器占用）。',
        fix: '用容器 ID 而不是名称来删除：docker rm <container_id>。docker ps -a 找到正确的容器 ID。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建 3 个容器（一个运行中，两个已停止），用不同方法清理',
        hint: 'docker run + docker stop + docker rm + docker container prune',
        answer: 'docker run -d --name c1 alpine sleep 3600\ndocker run --name c2 alpine echo "done"\ndocker run --name c3 alpine echo "done"\n# 方法1：逐个删除\ndocker rm c2 c3\n# 方法2：强制删除运行中的\ndocker rm -f c1\n# 方法3：一次性清理\ndocker container prune -f',
      },
      {
        level: '进阶',
        task: '创建一个有匿名卷的容器，分别用 docker rm 和 docker rm -v 删除，观察卷的变化',
        hint: 'docker volume ls 查看卷',
        answer: 'docker run --name v1 -v /data alpine echo "test"\ndocker volume ls  # 看到一个匿名卷\ndocker rm v1\ndocker volume ls  # 匿名卷还在！\n\ndocker run --name v2 -v /data alpine echo "test"\ndocker rm -v v2\ndocker volume ls  # 这次匿名卷被删了',
      },
    ],
  },

  "fRl4EfNwlBiidzn3IV34-": {
    mentalModel: 'docker rmi 是"删除镜像"：从本地删除镜像文件。如果有容器（即使是停止的）引用该镜像，需要先删除容器。镜像可以从 registry 重新拉取。',
    handsOn: [
      {
        title: '删除一个镜像',
        cmd: 'docker pull hello-world && docker rmi hello-world',
        output: 'Untagged: hello-world:latest\nUntagged: hello-world@sha256:...\nDeleted: sha256:d2c94e258dcb3c5ac2798d32e1249e42ef01cba4841c52509...',
        explain: 'docker rmi（remove image）删除本地镜像。输出显示 "Untagged"（移除标签）和 "Deleted"（删除层数据）。如果镜像有多个标签，只有指定的标签被移除，层数据保留。',
      },
      {
        title: '强制删除被容器引用的镜像',
        cmd: 'docker run --name test-ref alpine echo "hi" && \\\ndocker rmi alpine:3.19 2>&1; \\\ndocker rmi -f alpine:3.19',
        output: 'hi\nError: conflict: unable to remove repository reference "alpine:3.19" (must force) - container test-ref is using it\nUntagged: alpine:3.19\nDeleted: sha256:...',
        explain: '有容器（即使已停止）引用镜像时，docker rmi 报错。-f 强制删除（会移除标签但层数据保留直到容器删除）。推荐先 docker rm 容器再 docker rmi 镜像。',
      },
      {
        title: '清理悬空镜像（dangling images）',
        cmd: 'docker images -f dangling=true && \\\ndocker image prune -f',
        output: 'REPOSITORY   TAG       IMAGE ID       CREATED       SIZE\n<none>       <none>    abc123def456   2 hours ago   142MB\nDeleted: sha256:abc123def456...\nTotal reclaimed space: 142MB',
        explain: '悬空镜像是 TAG 为 <none> 的镜像（通常是重新构建同名镜像后旧的变成悬空）。docker image prune 清理所有悬空镜像。docker image prune -a 清理所有未使用的镜像（更激进）。',
      },
      {
        title: '查看镜像占用空间',
        cmd: 'docker system df -v | head -20',
        output: 'Images space usage:\n\nREPOSITORY   TAG       IMAGE ID       SIZE      SHARED SIZE\nnginx        latest    605c77e624dd   142MB     0B\nnode         18-alpine a1b2c3d4e5f6   178MB     120MB\n<none>       <none>    abc123def456   142MB     142MB',
        explain: '-v（verbose）显示详细信息。SHARED SIZE 是和其他镜像共享的层大小。悬空镜像（<none>）可以安全删除。共享层大的镜像删除后不一定能释放很多空间。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker rmi 报 "image has dependent child images"',
        cause: '有其他镜像是基于这个镜像构建的（Dockerfile 中 FROM 了这个镜像）。Docker 不允许删除被依赖的镜像。',
        fix: '先删除子镜像再删除父镜像。docker images --filter "reference=*parent*" 查看依赖关系。或 docker rmi -f 强制删除（会留下悬空层）。',
      },
      {
        symptom: '删除镜像后 docker images 还是显示',
        cause: '镜像有多个标签（如 myapp:latest 和 myapp:v1.0），只删了一个标签。层数据还在。',
        fix: 'docker images myapp 查看所有标签。docker rmi myapp:latest myapp:v1.0 删除所有标签。或用 IMAGE ID 删除。',
      },
      {
        symptom: '磁盘空间不释放，即使删了很多镜像',
        cause: 'Build cache 占用空间。docker build 产生的缓存层不会出现在 docker images 中。',
        fix: 'docker builder prune 清理构建缓存。docker system prune -a --volumes 全面清理。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '拉取 3 个不同标签的 nginx 镜像（latest、alpine、stable），然后全部删除',
        hint: 'docker pull + docker rmi',
        answer: 'docker pull nginx:latest nginx:alpine nginx:stable\ndocker images nginx\ndocker rmi nginx:latest nginx:alpine nginx:stable\ndocker images nginx  # 应该为空',
      },
      {
        level: '进阶',
        task: '构建一个同名镜像两次，观察旧镜像变成 <none>，然后清理',
        hint: 'docker build 同名镜像 + docker images + docker image prune',
        answer: 'mkdir -p /tmp/img-test\necho "FROM alpine\nRUN echo v1" > /tmp/img-test/Dockerfile\ndocker build -t test-img /tmp/img-test\necho "FROM alpine\nRUN echo v2" > /tmp/img-test/Dockerfile\ndocker build -t test-img /tmp/img-test\ndocker images  # 看到 test-img:latest 和一个 <none>:<none>\ndocker image prune -f\ndocker images  # <none> 被清理了',
      },
    ],
  },

  "InlMtuaUJ9EXO-OD9x1jj": {
    mentalModel: 'docker logs 是"容器的黑匣子"：记录容器标准输出（stdout）和标准错误（stderr）的所有内容。容器崩溃后日志还在，是排查问题的第一手资料。',
    handsOn: [
      {
        title: '查看容器完整日志',
        cmd: 'docker run -d --name log-test nginx:alpine && \\\nsleep 2 && curl -s http://localhost > /dev/null 2>&1; \\\ndocker logs log-test',
        output: '/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration\n172.17.0.1 - - [15/Jan/2024:10:30:00 +0000] "GET / HTTP/1.1" 304 0 "-" "curl/8.5.0"',
        explain: 'Nginx 日志输出到 stdout（被 Docker 捕获）。每行包含客户端 IP、时间、请求方法、状态码。304 表示缓存命中。docker logs 显示从容器启动以来的所有日志。',
      },
      {
        title: '实时追踪日志（类似 tail -f）',
        cmd: 'docker logs -f --tail 5 log-test &\ncurl -s http://localhost/test1 > /dev/null 2>&1\ncurl -s http://localhost/test2 > /dev/null 2>&1\nsleep 1 && kill %1 2>/dev/null',
        output: '172.17.0.1 - - "GET /test1 HTTP/1.1" 404 153 "-"\n172.17.0.1 - - "GET /test2 HTTP/1.1" 404 153 "-"',
        explain: '-f（follow）实时追踪日志输出。--tail 5 只显示最后 5 行再开始追踪。Ctrl+C 或 kill 退出追踪。调试时常用：docker logs -f <container>。',
      },
      {
        title: '按时间过滤日志',
        cmd: 'docker logs --since 10m log-test | wc -l && \\\ndocker logs --until "2024-01-15T10:00:00" log-test | head -5',
        output: '23\n172.17.0.1 - - [15/Jan/2024:09:55:00 +0000] "GET / HTTP/1.1" 200',
        explain: '--since 10m 显示最近 10 分钟的日志。--until 显示某个时间之前的日志。支持相对时间（10m, 1h）和绝对时间（RFC3339 格式）。排查问题时精确定位时间段很有用。',
      },
      {
        title: '查看容器退出后的日志',
        cmd: 'docker run --name fail-test alpine sh -c "echo starting; echo error >&2; exit 1" && \\\necho "--- 退出码 ---" && \\\ndocker inspect --format "{{.State.ExitCode}}" fail-test && \\\necho "--- 日志 ---" && \\\ndocker logs fail-test',
        output: '--- 退出码 ---\n1\n--- 日志 ---\nstarting\nerror',
        explain: '容器退出后日志依然可查看。exit code 1 表示异常退出。stdout 和 stderr 都被记录。排查容器启动失败问题时，先看 exit code，再看 logs。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker logs 什么也不输出',
        cause: '应用把日志写到文件而不是 stdout/stderr。Docker 只捕获标准输出和标准错误。',
        fix: '修改应用配置，让日志输出到 stdout。或者 docker exec 进入容器查看日志文件：docker exec <container> cat /var/log/app.log。',
      },
      {
        symptom: 'docker logs 输出太大，终端卡住',
        cause: '容器运行了很久，日志积累了很多。docker logs 默认输出所有日志。',
        fix: 'docker logs --tail 100 <container> 只看最后 100 行。docker logs --since 5m <container> 只看最近 5 分钟。docker logs -f 实时追踪（不显示历史）。',
      },
      {
        symptom: '日志文件占满磁盘（/var/lib/docker/containers/）',
        cause: '默认的 json-file 日志驱动不限制文件大小。长期运行的容器日志可以增长到 GB 级别。',
        fix: '配置日志轮转：docker run --log-opt max-size=10m --log-opt max-file=3。或在 /etc/docker/daemon.json 全局配置。已有的日志文件需要重启容器才生效。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '运行一个 nginx 容器，用 curl 访问 5 次，然后查看日志确认有 5 条访问记录',
        hint: 'docker run -d + curl + docker logs',
        answer: 'docker run -d --name log-ex -p 8080:80 nginx:alpine\nfor i in $(seq 1 5); do curl -s http://localhost:8080 > /dev/null; done\ndocker logs log-ex | grep "GET"\ndocker rm -f log-ex',
      },
      {
        level: '进阶',
        task: '运行一个输出到文件而非 stdout 的容器，想办法查看它的日志',
        hint: 'docker exec 进入容器查看文件，或用 ln -s 做符号链接',
        answer: 'docker run -d --name filelog alpine sh -c "while true; do echo $(date) >> /tmp/app.log; sleep 1; done"\n# 方法1：docker exec 查看\ndocker exec filelog cat /tmp/app.log\n# 方法2：docker exec tail -f\ndocker exec filelog tail -f /tmp/app.log\n# 清理\ndocker rm -f filelog',
      },
    ],
  },

  "vEUfw_vobshuZI0-q8RZo": {
    mentalModel: 'docker exec 是"钻进容器"：在运行中的容器内执行任意命令。-it 模式可以进入交互式 shell，像 SSH 一样操作容器内部。',
    handsOn: [
      {
        title: '进入容器的交互式 shell',
        cmd: 'docker run -d --name exec-test nginx:alpine && \\\ndocker exec -it exec-test sh',
        output: '/ # ls /\nbin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var\n/ # whoami\nroot\n/ # exit',
        explain: '-i（interactive）保持 stdin 打开，-t（tty）分配终端。组合 -it 获得交互式 shell。Alpine 用 sh（不是 bash）。exit 退出 shell 但容器继续运行。',
      },
      {
        title: '在容器内执行单条命令',
        cmd: 'docker exec exec-test cat /etc/nginx/nginx.conf | head -10',
        output: 'user  nginx;\nworker_processes  auto;\n\nerror_log  /var/log/nginx/error.log notice;\npid        /var/run/nginx.pid;\n\nevents {\n    worker_connections  1024;\n}',
        explain: '不加 -it 直接执行命令，输出到终端。适合查看容器内文件、执行管理命令、运行诊断工具。命令在容器命名空间内执行，看到的是容器内的文件系统。',
      },
      {
        title: '在容器内安装调试工具',
        cmd: 'docker exec exec-test sh -c "apk update && apk add curl net-tools" 2>&1 | tail -3',
        output: 'Installing curl (8.5.0-r0)\nInstalling net-tools (2.10-r0)\nOK: 10 MiB in 20 packages',
        explain: '生产镜像通常不包含调试工具。可以用 docker exec 临时安装。注意：容器删除后这些安装就丢失了。如果需要持久化，应该写入 Dockerfile。',
      },
      {
        title: '以不同用户执行命令',
        cmd: 'docker exec -u root exec-test whoami && \\\ndocker exec -u nginx exec-test whoami && \\\ndocker exec exec-test sh -c "ps aux | head -5"',
        output: 'root\nnginx\nPID   USER  COMMAND\n    1 root  nginx: master process nginx -g daemon off;\n    7 nginx nginx: worker process',
        explain: '-u 指定执行用户。master 进程以 root 运行（需要绑定 80 端口），worker 进程以 nginx 用户运行（处理请求，降低权限）。docker exec -u 可以用高权限排查权限问题。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker exec 报 "container is not running"',
        cause: '容器已经停止了。docker exec 只能在运行中的容器内执行命令。',
        fix: 'docker start <container> 启动容器。或 docker run 创建新容器。docker ps 确认容器状态是 Up。',
      },
      {
        symptom: 'docker exec -it 进入后立即退出',
        cause: '容器内没有交互式 shell（如 scratch 镜像），或者 shell 路径不对。Alpine 用 sh，Ubuntu 用 bash。',
        fix: 'docker exec -it <container> sh（Alpine）或 docker exec -it <container> bash（Ubuntu/Debian）。如果都没有，用 docker exec <container> ls 等非交互命令。',
      },
      {
        symptom: 'docker exec 安装的工具重启容器后消失',
        cause: 'docker exec 的修改只影响容器的可写层，容器重建后可写层消失。',
        fix: '把需要的工具写入 Dockerfile（RUN apk add curl）。或用 docker commit 保存当前状态为新镜像（不推荐，不利于可重复性）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '启动 nginx 容器，用 docker exec 进入容器，查看 nginx 配置文件内容',
        hint: 'docker exec -it + cat /etc/nginx/nginx.conf',
        answer: 'docker run -d --name nginx-ex nginx:alpine\ndocker exec -it nginx-ex sh\n# 在容器内：\ncat /etc/nginx/nginx.conf\nexit\ndocker rm -f nginx-ex',
      },
      {
        level: '进阶',
        task: '在运行中的 nginx 容器内安装 curl，用它测试容器内部的 80 端口是否正常响应',
        hint: 'docker exec + apk add curl + curl localhost',
        answer: 'docker run -d --name curl-test nginx:alpine\ndocker exec curl-test sh -c "apk update && apk add curl"\ndocker exec curl-test curl -s -o /dev/null -w "%{http_code}" http://localhost\n# 输出: 200\ndocker rm -f curl-test',
      },
      {
        level: '挑战',
        task: '写一个脚本 debug-container，接受容器名参数，自动：显示容器状态、查看日志最后 20 行、进入容器列出进程和磁盘使用',
        hint: 'docker inspect + docker logs + docker exec',
        answer: '#!/bin/bash\nC=$1\necho "=== 容器状态 ==="\ndocker inspect --format "{{.State.Status}} (exit: {{.State.ExitCode}})" $C\necho "=== 最近日志 ==="\ndocker logs --tail 20 $C\necho "=== 进程列表 ==="\ndocker exec $C ps aux\necho "=== 磁盘使用 ==="\ndocker exec $C df -h',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 03 — 构建与镜像
  // ═══════════════════════════════════════════════

  "6eu5NRA1sJuaHTlHtNurc": {
    mentalModel: 'docker run 是"一键启动"：拉镜像 + 创建容器 + 启动进程。选项决定容器的"装备"：端口映射是开窗，卷挂载是接水管，环境变量是传纸条。',
    handsOn: [
      {
        title: '最简运行——默认配置',
        cmd: 'docker run --rm nginx:alpine',
        output: '/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty...\n172.17.0.1 - - "GET / HTTP/1.1" 200 615 "-"',
        explain: '不加任何选项，容器以默认配置运行：前台模式（可以看到日志）、随机容器名、bridge 网络、不映射端口。Ctrl+C 停止。--rm 退出后自动删除。',
      },
      {
        title: '后台运行 + 端口映射 + 命名',
        cmd: 'docker run -d --name web -p 8080:80 nginx:alpine && \\\ncurl -s -o /dev/null -w "HTTP %{http_code}" http://localhost:8080',
        output: 'a1b2c3d4e5f6\nHTTP 200',
        explain: '-d（detach）后台运行。-p 8080:80 把宿主机 8080 端口映射到容器 80 端口。--name web 命名容器。外部通过 http://localhost:8080 访问容器内的 Nginx。',
      },
      {
        title: '环境变量 + 卷挂载',
        cmd: 'docker run -d --name redis-test \\\n  -e REDIS_PASSWORD=secret123 \\\n  -v redis-data:/data \\\n  redis:7-alpine && \\\ndocker exec redis-test redis-cli -a secret123 PING',
        output: 'd4e5f6a1b2c3\nWarning: Using a password with \'-a\' option on the command line interface may not be safe.\nPONG',
        explain: '-e 传递环境变量。-v redis-data:/data 创建命名卷挂载到容器 /data 目录（Redis 持久化数据）。即使容器删除，redis-data 卷中的数据保留。',
      },
      {
        title: '资源限制 + 重启策略',
        cmd: 'docker run -d --name limited \\\n  --memory=256m --cpus=0.5 \\\n  --restart unless-stopped \\\n  nginx:alpine && \\\ndocker inspect --format "Memory: {{.HostConfig.Memory}}, CPUs: {{.HostConfig.NanoCpus}}" limited',
        output: 'a1b2c3d4e5f6\nMemory: 268435456, CPUs: 500000000',
        explain: '--memory=256m 限制内存 256MB。--cpus=0.5 限制 50% CPU。--restart unless-stopped 容器退出后自动重启（除非手动 stop）。Memory 以字节显示（256MB = 268435456）。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker run 报 "port is already allocated"',
        cause: '宿主机的目标端口已被其他容器或进程占用。如 -p 8080:80 但 8080 已被另一个容器映射。',
        fix: 'docker ps 查看占用端口的容器。lsof -i :8080 或 ss -tlnp 查看端口占用。换一个端口：-p 8081:80。或停止占用端口的容器。',
      },
      {
        symptom: 'docker run 报 "No such image"',
        cause: '镜像名拼写错误，或本地没有该镜像且无法从 registry 拉取。',
        fix: '检查镜像名和标签。docker pull <image> 手动拉取确认。docker search <keyword> 搜索可用镜像。',
      },
      {
        symptom: '容器启动后立即退出（exit code 0）',
        cause: '容器的主进程（PID 1）执行完毕退出了。常见于把 docker run 当脚本运行，命令完成后容器自然退出。',
        fix: '如果需要容器持续运行，确保 PID 1 是长期运行的进程（如 nginx、node server.js）。或用 tail -f /dev/null 保持容器存活（仅调试用）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker run 启动一个 nginx 容器，映射到 9090 端口，用浏览器或 curl 验证能访问',
        hint: 'docker run -d -p 9090:80',
        answer: 'docker run -d --name my-nginx -p 9090:80 nginx:alpine\ncurl http://localhost:9090\n# 应该看到 Nginx 欢迎页\ndocker rm -f my-nginx',
      },
      {
        level: '进阶',
        task: '运行一个 MySQL 容器，设置 root 密码环境变量，挂载数据卷，验证能连接',
        hint: 'docker run -e MYSQL_ROOT_PASSWORD=pass -v mysql-data:/var/lib/mysql',
        answer: 'docker run -d --name db \\\n  -e MYSQL_ROOT_PASSWORD=my-secret \\\n  -v mysql-data:/var/lib/mysql \\\n  mysql:8\n# 等待 MySQL 启动\nsleep 15\ndocker exec db mysql -uroot -pmy-secret -e "SELECT 1"\ndocker rm -f db',
      },
      {
        level: '挑战',
        task: '用一条 docker run 命令启动 nginx 容器，同时设置：后台运行、命名 web、端口 8080、内存限制 128MB、CPU 限制 0.5、自动重启、挂载本地 ./html 目录到 /usr/share/nginx/html',
        hint: '组合 -d --name -p --memory --cpus --restart -v',
        answer: 'mkdir -p ./html && echo "<h1>Hello</h1>" > ./html/index.html\ndocker run -d --name web \\\n  -p 8080:80 \\\n  --memory=128m --cpus=0.5 \\\n  --restart unless-stopped \\\n  -v $(pwd)/html:/usr/share/nginx/html:ro \\\n  nginx:alpine\ncurl http://localhost:8080\n# <h1>Hello</h1>\ndocker rm -f web',
      },
    ],
  },

  "5OEfBQaYNOCi999x6QUqW": {
    mentalModel: 'docker build 是"按菜谱做菜"：Dockerfile 是菜谱，每一行是一条指令，构建出镜像（成品）。层缓存是"做过一遍的步骤不用重做"。',
    handsOn: [
      {
        title: '最简单的 Dockerfile 构建',
        cmd: 'mkdir -p /tmp/build-test && cat > /tmp/build-test/Dockerfile << \'EOF\'\nFROM alpine:3.19\nRUN echo "Hello from Docker" > /greeting.txt\nCMD ["cat", "/greeting.txt"]\nEOF\ndocker build -t hello-test /tmp/build-test',
        output: 'Sending build context to Docker daemon  2.048kB\nStep 1/3 : FROM alpine:3.19\n ---> 0a7d14aef6c3\nStep 2/3 : RUN echo "Hello from Docker" > /greeting.txt\n ---> Running in abc123\n ---> def456\nStep 3/3 : CMD ["cat", "/greeting.txt"]\n ---> ghi789\nSuccessfully built ghi789\nSuccessfully tagged hello-test:latest',
        explain: 'FROM 指定基础镜像。RUN 在构建时执行命令（产生新层）。CMD 指定容器启动命令（不产生层）。每步显示 ---> 表示产生了新的镜像层。',
      },
      {
        title: '构建时观察层缓存',
        cmd: '# 再次构建（不修改 Dockerfile）\ndocker build -t hello-test /tmp/build-test',
        output: 'Step 1/3 : FROM alpine:3.19\n ---> 0a7d14aef6c3\nStep 2/3 : RUN echo "Hello from Docker" > /greeting.txt\n ---> Using cache   ← 命中缓存！\n ---> def456\nStep 3/3 : CMD ["cat", "/greeting.txt"]\n ---> Using cache\nSuccessfully built ghi789',
        explain: '"Using cache" 表示 Docker 发现该层的输入没有变化，直接复用上次构建的结果。这就是层缓存——大幅加速重复构建。一旦某层变化，其后所有层缓存失效。',
      },
      {
        title: '不使用缓存强制重新构建',
        cmd: 'docker build --no-cache -t hello-test /tmp/build-test 2>&1 | grep -E "Step|cache|Running"',
        output: 'Step 1/3 : FROM alpine:3.19\nStep 2/3 : RUN echo "Hello from Docker" > /greeting.txt\n ---> Running in xyz789\nStep 3/3 : CMD ["cat", "/greeting.txt"]',
        explain: '--no-cache 强制每层重新执行（没有 "Using cache"）。适合需要确保最新依赖的场景（如 apt-get update）。但构建时间会明显增加。',
      },
      {
        title: '查看构建后的镜像',
        cmd: 'docker run --rm hello-test && \\\ndocker images hello-test && \\\ndocker history hello-test',
        output: 'Hello from Docker\n\nREPOSITORY   TAG       IMAGE ID       SIZE\nhello-test   latest    ghi789         7.74MB\n\nIMAGE    CREATED BY                              SIZE\nghi789   CMD ["cat" "/greeting.txt"]             0B\ndef456   RUN /bin/sh -c echo "Hello..." > ...    28B\n0a7d..   /bin/sh -c #(nop) CMD ["/bin/sh"]       0B',
        explain: 'docker history 显示镜像的层结构。CMD 层大小为 0（只是元数据）。RUN 层 28B（写入 greeting.txt 的大小）。基础镜像的层在最底部。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker build 很慢，每次都从头开始',
        cause: '层缓存被频繁失效。通常是 COPY . . 放在前面导致后续 RUN 层缓存失效（代码文件频繁变化）。',
        fix: '把不常变化的指令放前面（FROM、RUN apt install），常变化的放后面（COPY 代码）。先 COPY package.json 安装依赖，再 COPY 代码。',
      },
      {
        symptom: 'build context 很大（发送几百 MB）',
        cause: '构建目录包含 node_modules、.git、大文件等不需要发送到 Docker daemon 的文件。',
        fix: '创建 .dockerignore 文件排除不需要的目录：node_modules、.git、*.log、dist/。类似 .gitignore 但用于 Docker 构建。',
      },
      {
        symptom: 'docker build 报 "COPY failed: file not found in build context"',
        cause: 'COPY 的文件不在构建上下文中（构建目录之外的文件）。docker build 只能访问指定目录内的文件。',
        fix: '确保要 COPY 的文件在构建目录内。docker build -f path/to/Dockerfile . 时，. 是构建上下文目录，Dockerfile 中的路径相对于这个目录。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 Dockerfile，基于 alpine，安装 curl，设置环境变量 APP_ENV=production，CMD 输出 curl 版本和环境变量',
        hint: 'FROM + RUN + ENV + CMD',
        answer: 'mkdir -p /tmp/env-test\ncat > /tmp/env-test/Dockerfile << \'EOF\'\nFROM alpine:3.19\nRUN apk update && apk add curl\nENV APP_ENV=production\nCMD ["sh", "-c", "curl --version && echo APP_ENV=$APP_ENV"]\nEOF\ndocker build -t env-test /tmp/env-test\ndocker run --rm env-test',
      },
      {
        level: '进阶',
        task: '验证层缓存：构建两次，第二次修改 CMD 但不修改 RUN，观察 RUN 层是否使用缓存',
        hint: 'docker build 两次，对比输出',
        answer: 'cat > /tmp/cache-test/Dockerfile << \'EOF\'\nFROM alpine:3.19\nRUN echo "building layer 1" && sleep 2\nCMD ["echo", "v1"]\nEOF\ndocker build -t cache-test /tmp/cache-test\ndocker build -t cache-test /tmp/cache-test\n# 第二次 RUN 显示 "Using cache"\n\n# 修改 CMD 为 v2\ncat > /tmp/cache-test/Dockerfile << \'EOF\'\nFROM alpine:3.19\nRUN echo "building layer 1" && sleep 2\nCMD ["echo", "v2"]\nEOF\ndocker build -t cache-test /tmp/cache-test\n# RUN 仍然 "Using cache"——因为 RUN 层没有变化',
      },
    ],
  },

  "yGRQcx64S-yBGEoOeMc55": {
    mentalModel: 'Dockerfile 指令是"积木说明书"：FROM 选底座，RUN 加工，COPY/ADD 放材料，CMD/ENTRYPOINT 定义启动方式，EXPOSE 声明端口，ENV 传配置。',
    handsOn: [
      {
        title: '完整 Dockerfile 示例——Node.js 应用',
        cmd: 'mkdir -p /tmp/node-df && cat > /tmp/node-df/Dockerfile << \'EOF\'\nFROM node:18-alpine\nWORKDIR /app\nENV NODE_ENV=production\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nHEALTHCHECK --interval=30s CMD wget -qO- http://localhost:3000/health || exit 1\nCMD ["node", "server.js"]\nEOF\ncat /tmp/node-df/Dockerfile',
        output: 'FROM node:18-alpine\nWORKDIR /app\nENV NODE_ENV=production\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nHEALTHCHECK --interval=30s CMD wget -qO- http://localhost:3000/health || exit 1\nCMD ["node", "server.js"]',
        explain: 'WORKDIR 设置工作目录（不存在会自动创建）。ENV 设置环境变量。COPY package*.json 先复制依赖文件（利用缓存）。npm ci 比 npm install 更适合 CI/Docker（确定性安装）。EXPOSE 只是文档声明，不实际映射端口。',
      },
      {
        title: 'ENTRYPOINT vs CMD 的区别',
        cmd: 'mkdir -p /tmp/ep-test && cat > /tmp/ep-test/Dockerfile << \'EOF\'\nFROM alpine:3.19\nENTRYPOINT ["echo", "Hello"]\nCMD ["World"]\nEOF\ndocker build -t ep-test /tmp/ep-test && \\\ndocker run --rm ep-test && \\\ndocker run --rm ep-test Docker',
        output: 'Hello World\nHello Docker',
        explain: 'ENTRYPOINT 是固定的命令前缀，CMD 是默认参数。docker run ep-test → "Hello World"（用 CMD 默认值）。docker run ep-test Docker → "Hello Docker"（CMD 被覆盖）。ENTRYPOINT 不会被 docker run 参数覆盖。',
      },
      {
        title: '多阶段构建——减小最终镜像',
        cmd: 'mkdir -p /tmp/multi-stage && cat > /tmp/multi-stage/Dockerfile << \'EOF\'\n# 阶段1：构建\nFROM golang:1.21 AS builder\nWORKDIR /src\nCOPY . .\nRUN CGO_ENABLED=0 go build -o /app main.go\n\n# 阶段2：运行\nFROM alpine:3.19\nCOPY --from=builder /app /app\nCMD ["/app"]\nEOF\ncat > /tmp/multi-stage/main.go << \'EOF\'\npackage main\nimport "fmt"\nfunc main() { fmt.Println("Hello from Go!") }\nEOF\ndocker build -t multi-test /tmp/multi-stage',
        output: 'Step 1/7 : FROM golang:1.21 AS builder\n...\nSuccessfully built abc123\nSuccessfully tagged multi-test:latest',
        explain: '阶段 1 用 golang:1.21（约 800MB）编译代码。阶段 2 用 alpine（约 8MB）只复制编译产物。最终镜像不包含编译器和源码，体积从 800MB+ 降到约 10MB。',
      },
      {
        title: 'ARG vs ENV 的区别',
        cmd: 'mkdir -p /tmp/arg-test && cat > /tmp/arg-test/Dockerfile << \'EOF\'\nFROM alpine:3.19\nARG BUILD_VERSION=1.0.0\nENV APP_VERSION=$BUILD_VERSION\nRUN echo "Building version: $BUILD_VERSION"\nCMD ["sh", "-c", "echo App version: $APP_VERSION"]\nEOF\ndocker build --build-arg BUILD_VERSION=2.0.0 -t arg-test /tmp/arg-test && \\\ndocker run --rm arg-test',
        output: 'Building version: 2.0.0\nApp version: 2.0.0',
        explain: 'ARG 只在构建时可用（容器运行时不存在）。ENV 在构建和运行时都可用。--build-arg 传递构建参数。常用模式：ARG 传递版本号 → ENV 保存到镜像中。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Dockerfile 中 RUN apt-get install 失败',
        cause: '基础镜像中没有 apt-get（如 Alpine 用 apk，CentOS 用 yum）。或者没有先 update。',
        fix: '确认基础镜像的包管理器：alpine→apk, ubuntu/debian→apt-get, centos→yum。总是先 update 再 install：RUN apt-get update && apt-get install -y pkg。',
      },
      {
        symptom: 'EXPOSE 了端口但外部访问不了',
        cause: 'EXPOSE 只是文档声明，不做实际端口映射。必须用 docker run -p 或 docker-compose ports 映射端口。',
        fix: 'docker run -p 8080:3000 映射宿主机 8080 到容器 3000。EXPOSE 3000 告诉使用者"这个容器监听 3000 端口"。',
      },
      {
        symptom: 'CMD 命令没有执行',
        cause: '使用了 shell 形式的 CMD（CMD echo hello），会被 /bin/sh -c 包装。如果 ENTRYPOINT 是 exec 形式，shell 形式的 CMD 可能不工作。',
        fix: '统一用 exec 形式（JSON 数组）：CMD ["echo", "hello"]。或统一用 shell 形式。避免混用 exec 和 shell 形式。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 Dockerfile：基于 python:3.11-alpine，创建 /app 目录，复制一个 Python 脚本，CMD 运行它',
        hint: 'FROM + WORKDIR + COPY + CMD',
        answer: 'mkdir -p /tmp/py-df\ncat > /tmp/py-df/hello.py << \'EOF\'\nimport sys\nprint(f"Python {sys.version}")\nprint("Hello from Docker!")\nEOF\ncat > /tmp/py-df/Dockerfile << \'EOF\'\nFROM python:3.11-alpine\nWORKDIR /app\nCOPY hello.py .\nCMD ["python", "hello.py"]\nEOF\ndocker build -t py-test /tmp/py-df\ndocker run --rm py-test',
      },
      {
        level: '进阶',
        task: '用多阶段构建：第一阶段用 gcc:latest 编译一个 C 程序，第二阶段用 alpine 运行编译产物',
        hint: 'FROM gcc AS builder → FROM alpine → COPY --from=builder',
        answer: 'mkdir -p /tmp/c-multi\ncat > /tmp/c-multi/hello.c << \'EOF\'\n#include <stdio.h>\nint main() { printf("Hello from C!\\n"); return 0; }\nEOF\ncat > /tmp/c-multi/Dockerfile << \'EOF\'\nFROM gcc:latest AS builder\nCOPY hello.c /src/\nRUN gcc /src/hello.c -o /src/hello\n\nFROM alpine:3.19\nRUN apk add --no-cache libc6-compat\nCOPY --from=builder /src/hello /hello\nCMD ["/hello"]\nEOF\ndocker build -t c-test /tmp/c-multi\ndocker run --rm c-test\ndocker images c-test  # 观察最终镜像大小',
      },
    ],
  },

  "3VKPiMfbGBxv9m_SljIQV": {
    mentalModel: '镜像仓库是"镜像的应用商店"：Docker Hub 是官方商城，GitHub Container Registry 是 GitHub 的商店，Harbor 是企业内部仓库。push 上架，pull 下载。',
    handsOn: [
      {
        title: '从 Docker Hub 搜索和拉取镜像',
        cmd: 'docker search nginx --limit 5 --format "table {{.Name}}\t{{.StarCount}}\t{{.IsOfficial}}"',
        output: 'NAME                             STARS   OFFICIAL\nnginx                            18234   [OK]\nbitnami/nginx                    180\nlinuxserver/nginx                75',
        explain: 'docker search 搜索 Docker Hub 上的镜像。[OK] 表示官方镜像（由软件方维护）。Star 数越多越可信。拉取时 library/nginx 可以简写为 nginx（官方镜像自动加 library/ 前缀）。',
      },
      {
        title: '拉取指定版本（标签）的镜像',
        cmd: 'docker pull nginx:1.25-alpine && \\\ndocker images nginx --format "{{.Tag}}\t{{.Size}}"',
        output: '1.25-alpine: Pulling from library/nginx\nDigest: sha256:...\nStatus: Downloaded\n1.25-alpine   43.2MB',
        explain: '用具体标签（如 1.25-alpine）而不是 latest——latest 可能随时变化。alpine 版本体积更小。Digest 是镜像的 SHA256 哈希，确保拉取的内容一致。',
      },
      {
        title: '给镜像打标签（tag）',
        cmd: 'docker tag nginx:1.25-alpine myregistry.com/myapp/nginx:v1.25 && \\\ndocker images myregistry.com/myapp/nginx',
        output: 'REPOSITORY                    TAG     IMAGE ID       SIZE\nmyregistry.com/myapp/nginx    v1.25   605c77e624dd   43.2MB\nnginx                         1.25-alpine  605c77e624dd   43.2MB',
        explain: 'docker tag 只是给同一个镜像加一个新名字（不复制数据）。两个名字指向同一个 IMAGE ID。推送时用新名字推到对应仓库。格式：registry/repository:tag。',
      },
      {
        title: '推送到 Docker Hub（需登录）',
        cmd: 'docker login  # 交互式输入用户名密码\ndocker tag nginx:1.25-alpine your-username/mynginx:latest\ndocker push your-username/mynginx:latest',
        output: 'Login Succeeded\nThe push refers to repository [docker.io/your-username/mynginx]\nlatest: digest: sha256:... size: 528',
        explain: 'docker login 登录 registry。docker push 推送镜像。推送前必须 docker tag 为 your-username/xxx 格式（Docker Hub 要求命名空间是你的用户名）。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker push 报 "denied: requested access to the resource is denied"',
        cause: '没有登录 registry，或镜像名称的命名空间不属于你的账号。',
        fix: 'docker login 登录。确保镜像名以你的用户名开头：docker tag image your-username/image。',
      },
      {
        symptom: 'docker pull 拉到旧版本',
        cause: '使用了 latest 标签，而 Docker 默认不重新拉取已存在的 latest。或者使用了镜像加速器缓存了旧版本。',
        fix: '用具体版本标签（如 nginx:1.25.3）而不是 latest。或 docker pull --no-cache（某些版本支持）。docker rmi 删除本地版本后重新 pull。',
      },
      {
        symptom: 'docker push 很慢',
        cause: '镜像太大，或上传带宽有限。镜像层数多也会增加推送时间。',
        fix: '使用 alpine 基础镜像减小体积。多阶段构建。docker push 支持并发层上传。确保网络连接稳定。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '拉取 redis:7-alpine 镜像，查看它的大小，查看它的 history（层结构）',
        hint: 'docker pull + docker images + docker history',
        answer: 'docker pull redis:7-alpine\ndocker images redis:7-alpine\ndocker history redis:7-alpine',
      },
      {
        level: '进阶',
        task: '给本地镜像打 3 个不同标签，验证它们指向同一个 IMAGE ID',
        hint: 'docker tag + docker images --format',
        answer: 'docker tag alpine:3.19 myapp:dev\ndocker tag alpine:3.19 myapp:staging\ndocker tag alpine:3.19 myapp:production\ndocker images --format "{{.Repository}}:{{.Tag}}\t{{.ID}}"\n# 三个标签的 IMAGE ID 相同',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 04 — Docker Compose
  // ═══════════════════════════════════════════════

  "XxT9UUjbKW1ARyERSLH_W": {
    mentalModel: 'docker-compose 是"多容器遥控器"：一个 YAML 文件定义所有容器和它们的关系，一条命令启动整个应用栈。像乐高的组装说明书。',
    handsOn: [
      {
        title: '创建最简 docker-compose.yml',
        cmd: 'mkdir -p /tmp/compose-test && cat > /tmp/compose-test/docker-compose.yml << \'EOF\'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - "8080:80"\n  redis:\n    image: redis:7-alpine\nEOF\ncd /tmp/compose-test && docker compose up -d',
        output: 'Container compose-test-web-1    Started\nContainer compose-test-redis-1  Started',
        explain: 'docker compose（V2，Docker 子命令）替代 docker-compose（V1，独立工具）。services 定义两个服务：web（Nginx）和 redis。ports 映射端口。-d 后台运行。自动创建默认网络让两个容器互通。',
      },
      {
        title: '查看 compose 管理的容器',
        cmd: 'cd /tmp/compose-test && docker compose ps',
        output: 'NAME                  IMAGE           STATUS     PORTS\ncompose-test-web-1    nginx:alpine    running    0.0.0.0:8080->80/tcp\ncompose-test-redis-1  redis:7-alpine  running    6379/tcp',
        explain: 'docker compose ps 只显示当前项目管理的容器。容器名自动加上项目名（目录名）前缀。STATUS 显示运行状态。',
      },
      {
        title: '查看 compose 日志',
        cmd: 'cd /tmp/compose-test && docker compose logs --tail 5 web',
        output: 'compose-test-web-1  | 172.18.0.1 - - "GET / HTTP/1.1" 200 615 "-"',
        explain: 'docker compose logs 查看所有服务日志。加服务名过滤。--tail 5 只看最后 5 行。-f 实时追踪。日志混合显示服务名前缀，方便区分。',
      },
      {
        title: '停止并清理',
        cmd: 'cd /tmp/compose-test && docker compose down',
        output: 'Container compose-test-web-1    Removed\nContainer compose-test-redis-1  Removed\nNetwork compose-test_default    Removed',
        explain: 'docker compose down 停止并删除所有容器和网络。但不删除卷（数据保留）。加 -v 同时删除卷。加 --rmi all 同时删除镜像。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker compose up 报 "port is already allocated"',
        cause: 'docker-compose.yml 中的端口映射冲突。宿主机的端口被其他容器占用。',
        fix: '修改 ports 映射（如 8081:80 代替 8080:80）。或 docker ps 找到占用端口的容器并停止。',
      },
      {
        symptom: '容器之间不能互相访问',
        cause: '容器不在同一个 Docker 网络中。docker compose 自动创建网络，但如果手动指定了 network，需要确保所有服务加入。',
        fix: '确保 docker-compose.yml 中服务在同一 network 下。容器间用服务名访问（如 web 服务中用 redis:6379 访问 redis 服务）。',
      },
      {
        symptom: 'docker compose down 后再 up，数据丢失',
        cause: '如果用了匿名卷，down 不会删除它们。但如果用了 tmpfs 或容器内的临时存储，数据会丢失。',
        fix: '使用命名卷确保数据持久化：volumes: - redis-data:/data。docker compose down -v 会删除卷（慎用）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建 docker-compose.yml 启动 nginx + redis，验证两个容器都能运行',
        hint: 'services + image + ports',
        answer: 'mkdir -p /tmp/compose-ex && cat > /tmp/compose-ex/docker-compose.yml << \'EOF\'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - "8080:80"\n  cache:\n    image: redis:7-alpine\nEOF\ncd /tmp/compose-ex\ndocker compose up -d\ndocker compose ps\ncurl http://localhost:8080\ndocker compose down',
      },
      {
        level: '进阶',
        task: '在 docker-compose.yml 中添加环境变量、卷挂载、依赖关系（depends_on）',
        hint: 'environment + volumes + depends_on',
        answer: 'cat > /tmp/compose-ex/docker-compose.yml << \'EOF\'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - "8080:80"\n    volumes:\n      - ./html:/usr/share/nginx/html:ro\n    depends_on:\n      - cache\n    environment:\n      - APP_ENV=production\n  cache:\n    image: redis:7-alpine\n    volumes:\n      - redis-data:/data\nvolumes:\n  redis-data:\nEOF\nmkdir -p /tmp/compose-ex/html\necho "<h1>Compose Demo</h1>" > /tmp/compose-ex/html/index.html\ncd /tmp/compose-ex\ndocker compose up -d\ndocker compose down -v',
      },
    ],
  },

  "fh5aERX7c-lY9FPsmftoF": {
    mentalModel: 'docker-compose 进阶是"完整应用蓝图"：用 YAML 声明所有服务的镜像、端口、卷、网络、环境变量、健康检查和依赖关系。一个文件描述整个应用架构。',
    handsOn: [
      {
        title: '完整的 Web 应用 compose 文件',
        cmd: 'mkdir -p /tmp/compose-full && cat > /tmp/compose-full/docker-compose.yml << \'EOF\'\nservices:\n  app:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      DATABASE_URL: postgres://user:pass@db:5432/mydb\n      REDIS_URL: redis://cache:6379\n    depends_on:\n      db:\n        condition: service_healthy\n      cache:\n        condition: service_started\n    volumes:\n      - ./src:/app/src\n    restart: unless-stopped\n\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: pass\n      POSTGRES_DB: mydb\n    volumes:\n      - pg-data:/var/lib/postgresql/data\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready -U user"]\n      interval: 5s\n      timeout: 3s\n      retries: 5\n\n  cache:\n    image: redis:7-alpine\n    volumes:\n      - redis-data:/data\n\nvolumes:\n  pg-data:\n  redis-data:\nEOF\ncat /tmp/compose-full/docker-compose.yml | head -5',
        output: 'services:\n  app:\n    build: .\n    ports:\n      - "3000:3000"',
        explain: 'build: . 从当前目录的 Dockerfile 构建。depends_on + condition 等待依赖就绪。healthcheck 检查数据库是否准备好接受连接。volumes 声明命名卷。restart: unless-stopped 自动重启崩溃的容器。',
      },
      {
        title: '使用 profiles 管理不同环境',
        cmd: 'cat > /tmp/compose-full/docker-compose.yml << \'EOF\'\nservices:\n  app:\n    build: .\n    ports:\n      - "3000:3000"\n\n  db:\n    image: postgres:16-alpine\n    profiles:\n      - full\n\n  debug:\n    image: busybox\n    profiles:\n      - debug\n    command: sleep infinity\nEOF\ncd /tmp/compose-full && docker compose --profile full up -d',
        output: 'Container compose-full-app-1  Started\nContainer compose-full-db-1   Started',
        explain: 'profiles 让服务按需提供。默认 docker compose up 只启动 app。--profile full 额外启动 db。--profile debug 启动调试工具。适合区分开发/测试/生产环境。',
      },
      {
        title: '使用 env_file 管理环境变量',
        cmd: 'cat > /tmp/compose-full/.env << \'EOF\'\nPOSTGRES_USER=admin\nPOSTGRES_PASSWORD=secret123\nAPP_PORT=8080\nEOF\ncat > /tmp/compose-full/docker-compose.yml << \'EOF\'\nservices:\n  app:\n    image: nginx:alpine\n    ports:\n      - "${APP_PORT}:80"\n    env_file:\n      - .env\nEOF\ncd /tmp/compose-full && docker compose config',
        output: 'services:\n  app:\n    environment:\n      APP_PORT: "8080"\n      POSTGRES_PASSWORD: secret123\n      POSTGRES_USER: admin\n    image: nginx:alpine\n    ports:\n    - published: 8080\n      target: 80',
        explain: 'env_file 从文件加载环境变量。${APP_PORT} 引用 .env 中的变量。docker compose config 验证并展开最终配置（不启动容器）。敏感信息（密码）不要提交到 Git，加到 .gitignore。',
      },
      {
        title: '覆盖配置——开发 vs 生产',
        cmd: 'cat > /tmp/compose-full/docker-compose.override.yml << \'EOF\'\nservices:\n  app:\n    volumes:\n      - ./src:/app/src\n    environment:\n      DEBUG: "true"\nEOF\ncd /tmp/compose-full && docker compose config | grep -A3 "environment"',
        output: 'environment:\n      APP_PORT: "8080"\n      DEBUG: "true"\n      POSTGRES_PASSWORD: secret123',
        explain: 'docker-compose.override.yml 自动合并到主文件（开发环境用）。生产环境用 docker compose -f docker-compose.yml config（不加载 override）。DEBUG: "true" 只在开发环境生效。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker compose up 报 "service db has no healthcheck configured"',
        cause: 'depends_on 使用了 condition: service_healthy，但目标服务没有定义 healthcheck。',
        fix: '给 db 服务添加 healthcheck 配置。或改用 condition: service_started（只等容器启动，不等健康检查通过）。',
      },
      {
        symptom: '应用容器连不上数据库容器',
        cause: '数据库还没初始化完成，应用就开始连接。depends_on 默认只等容器启动，不等数据库就绪。',
        fix: '用 depends_on + condition: service_healthy 等待数据库就绪。或在应用代码中加入重试逻辑。',
      },
      {
        symptom: 'docker compose down -v 后数据库数据丢失',
        cause: '-v 删除所有卷，包括命名卷。开发时方便（干净环境），生产时危险。',
        fix: '生产环境不要用 -v。用 docker compose down（保留卷）。备份数据：docker compose exec db pg_dump > backup.sql。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建完整的 docker-compose.yml：nginx（端口 8080）+ redis（有健康检查），nginx depends_on redis',
        hint: 'healthcheck + depends_on condition',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - "8080:80"\n    depends_on:\n      cache:\n        condition: service_started\n  cache:\n    image: redis:7-alpine\n    healthcheck:\n      test: ["CMD", "redis-cli", "ping"]\n      interval: 5s\n      timeout: 3s\n      retries: 3\nEOF\ndocker compose up -d\ndocker compose ps\ndocker compose down',
      },
      {
        level: '进阶',
        task: '使用 docker compose 搭建一个 WordPress 站点（WordPress + MySQL），通过浏览器访问',
        hint: 'wordpress:latest + mysql:8 + 环境变量 + 卷',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  wordpress:\n    image: wordpress:latest\n    ports:\n      - "8080:80"\n    environment:\n      WORDPRESS_DB_HOST: db\n      WORDPRESS_DB_USER: wp\n      WORDPRESS_DB_PASSWORD: secret\n      WORDPRESS_DB_NAME: wordpress\n    depends_on:\n      - db\n    volumes:\n      - wp-data:/var/www/html\n  db:\n    image: mysql:8\n    environment:\n      MYSQL_DATABASE: wordpress\n      MYSQL_USER: wp\n      MYSQL_PASSWORD: secret\n      MYSQL_ROOT_PASSWORD: root-secret\n    volumes:\n      - db-data:/var/lib/mysql\nvolumes:\n  wp-data:\n  db-data:\nEOF\ndocker compose up -d\n# 浏览器访问 http://localhost:8080\ndocker compose down',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 05 — 存储与网络
  // ═══════════════════════════════════════════════

  "EqYWfBL5l5OOquok_OvOW": {
    mentalModel: 'Docker 卷是"外接硬盘"：容器的文件系统是临时的（删除容器就没了），卷是持久的（删除容器数据还在）。就像笔记本电脑坏了，外接硬盘里的数据不会丢。',
    handsOn: [
      {
        title: '创建和管理命名卷',
        cmd: 'docker volume create mydata && \\\ndocker volume ls && \\\ndocker volume inspect mydata',
        output: 'mydata\n\nDRIVER    VOLUME NAME\nlocal     mydata\n\n[{\n  "Mountpoint": "/var/lib/docker/volumes/mydata/_data",\n  "Driver": "local",\n  "Labels": {},\n  "Options": {}\n}]',
        explain: '命名卷有名字（mydata），存储在 /var/lib/docker/volumes/ 下。Mountpoint 是宿主机上的实际路径。命名卷由 Docker 管理，跨容器共享，删除容器不会删除卷。',
      },
      {
        title: '挂载卷到容器并写入数据',
        cmd: 'docker run --rm -v mydata:/data alpine sh -c "echo important > /data/file.txt" && \\\necho "容器已删除，数据在卷中" && \\\ndocker run --rm -v mydata:/data alpine cat /data/file.txt',
        output: '容器已删除，数据在卷中\nimportant',
        explain: '第一个容器写入文件后退出（--rm 自动删除）。第二个容器挂载同一个卷，数据还在。这就是卷的持久化：数据脱离容器生命周期。',
      },
      {
        title: '匿名卷 vs 命名卷',
        cmd: 'docker run --rm -v /data alpine sh -c "echo test > /data/file.txt; echo done" && \\\necho "=== 所有卷 ===" && \\\ndocker volume ls',
        output: 'done\n=== 所有卷 ===\nDRIVER    VOLUME NAME\nlocal     mydata\nlocal     a1b2c3d4e5f6789...  ← 匿名卷（随机哈希名）',
        explain: '-v /data（没有卷名）创建匿名卷——Docker 生成随机哈希名。匿名卷难以管理和追踪。推荐始终使用命名卷：-v mydata:/data。docker volume prune 清理所有未使用的卷（包括匿名卷）。',
      },
      {
        title: '在多个容器间共享卷',
        cmd: 'docker run -d --name writer -v shared:/data alpine sh -c "echo shared-data > /data/file.txt; sleep 3600" && \\\ndocker run --rm -v shared:/data alpine cat /data/file.txt && \\\ndocker run -d --name reader -v shared:/data:ro alpine sleep 3600 && \\\ndocker exec reader sh -c "echo hack > /data/file.txt" 2>&1',
        output: 'shared-data\nsh: can\'t create /data/file.txt: Read-only file system',
        explain: '多个容器可以挂载同一个卷。:ro 表示只读——reader 容器不能修改卷中的数据。适合"一个写者、多个读者"场景。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器内看不到卷中的数据',
        cause: '卷挂载路径错误（大小写、拼写），或容器内的应用读取了错误的路径。',
        fix: 'docker inspect <container> | grep Mounts -A5 确认挂载路径。docker exec 进入容器 ls 挂载目录。确认路径一致。',
      },
      {
        symptom: 'docker volume prune 删除了不该删的卷',
        cause: 'docker volume prune 删除所有未被运行中容器使用的卷。停止的容器的卷也会被删除。',
        fix: '给重要卷加标签：docker volume create --label important mydata。prune 时加 filter：docker volume prune --filter "label!=important"。',
      },
      {
        symptom: '卷的权限问题——容器内无法写入卷',
        cause: '卷挂载到容器后，目录所有者可能是 root，但容器以非 root 用户运行。',
        fix: '在 Dockerfile 中创建挂载目录并设置权限：RUN mkdir /data && chown 1000:1000 /data。或 docker run --user $(id -u):$(id -g)。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建命名卷 test-vol，在容器中写入数据，删除容器，用新容器验证数据还在',
        hint: 'docker volume create + docker run -v + docker run -v',
        answer: 'docker volume create test-vol\ndocker run --rm -v test-vol:/data alpine sh -c "echo persistent > /data/test.txt"\n# 容器已自动删除，但卷还在\ndocker run --rm -v test-vol:/data alpine cat /data/test.txt\n# 输出: persistent\ndocker volume rm test-vol',
      },
      {
        level: '进阶',
        task: '用一个容器写入数据到卷，另一个容器以只读方式挂载，验证只读容器不能写入',
        hint: '-v vol:/data 和 -v vol:/data:ro',
        answer: 'docker volume create shared-vol\ndocker run -d --name w1 -v shared-vol:/data alpine sleep 3600\ndocker exec w1 sh -c "echo hello > /data/shared.txt"\ndocker run --rm -v shared-vol:/data:ro alpine cat /data/shared.txt\n# 输出: hello\ndocker run --rm -v shared-vol:/data:ro alpine sh -c "echo x > /data/test.txt" 2>&1\n# 输出: Read-only file system\ndocker rm -f w1\ndocker volume rm shared-vol',
      },
    ],
  },

  "01nDXqxVdMv4SeXc0nYHH": {
    mentalModel: 'Docker 网络是"容器间的电话线"：默认情况下容器互相隔离（各住各的房间），自定义网络让它们能互相通话（接上电话线）。用容器名当电话号码。',
    handsOn: [
      {
        title: '查看默认网络',
        cmd: 'docker network ls',
        output: 'NETWORK ID     NAME      DRIVER    SCOPE\nabc123def456   bridge    bridge    local\ndef456ghi789   host      host      local\nghi789jkl012   none      null      local',
        explain: 'bridge（默认）：容器有独立网络，通过端口映射访问外部。host：容器共享宿主机网络（无隔离）。none：容器没有网络（完全隔离）。自定义网络通常是 bridge 类型。',
      },
      {
        title: '创建自定义网络',
        cmd: 'docker network create --driver bridge mynet && \\\ndocker network inspect mynet --format "{{.IPAM.Config}}"',
        output: 'mynet\n[{172.19.0.0/16 172.19.0.1}]',
        explain: '自定义 bridge 网络会自动分配子网（如 172.19.0.0/16）。自定义网络的关键优势：容器间可以用容器名互相访问（DNS 解析），默认 bridge 网络不行。',
      },
      {
        title: '容器加入自定义网络——用容器名通信',
        cmd: 'docker run -d --name web --network mynet nginx:alpine && \\\ndocker run --rm --network mynet alpine sh -c "apk add -q curl && curl -s -o /dev/null -w \\"%{http_code}\\" http://web"',
        output: '200',
        explain: '两个容器在同一个自定义网络 mynet 中。alpine 容器可以用 "web" 作为主机名访问 nginx 容器。Docker 内置 DNS 服务器自动将容器名解析为容器 IP。',
      },
      {
        title: '默认 bridge 网络不支持容器名解析',
        cmd: 'docker run -d --name web2 nginx:alpine && \\\ndocker run --rm alpine sh -c "nslookup web2" 2>&1 | head -5 && \\\necho "=== 自定义网络可以 ===" && \\\ndocker run --rm --network mynet alpine sh -c "nslookup web" 2>&1 | head -5',
        output: 'Server:   127.0.0.11\nAddress:  127.0.0.11:53\n** server can\'t find web2: NXDOMAIN\n=== 自定义网络可以 ===\nName:      web\nAddress 1: 172.19.0.2 web.mynet',
        explain: '默认 bridge 网络不支持容器名 DNS 解析（web2 找不到）。自定义网络支持（web 解析到 172.19.0.2）。这就是为什么多容器应用总是用自定义网络。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器间无法通信（ping 不通）',
        cause: '容器不在同一个网络中。默认 bridge 网络的容器和自定义网络的容器互相隔离。',
        fix: '确保容器在同一个自定义网络中：docker run --network mynet。docker network inspect mynet 查看网络中的容器。',
      },
      {
        symptom: '容器名解析失败（NXDOMAIN）',
        cause: '使用了默认 bridge 网络（不支持 DNS 解析）。或容器还没有完全启动。',
        fix: '使用自定义网络（docker network create）。等待容器启动完成。docker exec <container> nslookup <target> 测试 DNS。',
      },
      {
        symptom: 'docker network create 报 "could not find an available, non-overlapping IPv4 address pool"',
        cause: 'Docker 默认子网（172.17-31.x.x）用完了。创建了太多网络（每个自定义网络需要一个子网）。',
        fix: 'docker network prune 删除未使用的网络。或指定子网：docker network create --subnet 10.10.0.0/16 mynet。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建自定义网络 testnet，在网络上运行两个 alpine 容器，验证它们可以用容器名互相 ping',
        hint: 'docker network create + docker run --network + docker exec ping',
        answer: 'docker network create testnet\ndocker run -d --name c1 --network testnet alpine sleep 3600\ndocker run -d --name c2 --network testnet alpine sleep 3600\ndocker exec c1 ping -c 3 c2\n# 输出: 3 packets transmitted, 3 received, 0% packet loss\ndocker rm -f c1 c2\ndocker network rm testnet',
      },
      {
        level: '进阶',
        task: '创建两个不同的自定义网络，容器 A 在 net1，容器 B 在 net2，验证它们不能通信。然后把 B 也加入 net1，验证可以通信',
        hint: 'docker network connect 可以把运行中的容器加入额外网络',
        answer: 'docker network create net1\ndocker network create net2\ndocker run -d --name A --network net1 alpine sleep 3600\ndocker run -d --name B --network net2 alpine sleep 3600\ndocker exec A ping -c 1 B 2>&1  # 失败: bad address\ndocker network connect net1 B\ndocker exec A ping -c 2 B  # 成功\ndocker rm -f A B\ndocker network rm net1 net2',
      },
    ],
  },

  "rxVR62_yXIjc-L4GFSV6u": {
    mentalModel: 'Docker 网络进阶是"企业级组网"：overlay 网络跨主机通信（Swarm/K8s），macvlan 让容器直接接入物理网络（有自己的 MAC 地址），host 模式取消隔离（最高性能）。',
    handsOn: [
      {
        title: 'host 网络模式——容器共享宿主机网络',
        cmd: 'docker run -d --name host-web --network host nginx:alpine && \\\ncurl -s -o /dev/null -w "HTTP %{http_code}" http://localhost:80 && \\\ndocker inspect --format "{{.HostConfig.NetworkMode}}" host-web',
        output: 'HTTP 200\nhost',
        explain: 'host 模式下容器直接使用宿主机网络栈。不需要端口映射（-p），容器直接监听宿主机端口。性能最好（无 NAT 开销），但端口冲突风险高。Linux 上可用，Docker Desktop 不支持。',
      },
      {
        title: 'none 网络模式——完全隔离',
        cmd: 'docker run --rm --network none alpine sh -c "ip addr show eth0" 2>&1',
        output: 'ip: can\'t find device \'eth0\'',
        explain: 'none 模式容器没有任何网络接口（除了 loopback）。适合纯计算任务或安全敏感场景（确保容器不能访问网络）。',
      },
      {
        title: '容器连接（legacy linking）vs 自定义网络',
        cmd: '# Legacy link（已过时，不推荐）\ndocker run -d --name legacy-db redis:alpine && \\\ndocker run --rm --link legacy-db:database alpine sh -c "env | grep DATABASE" 2>&1 && \\\necho "=== 自定义网络（推荐）===" && \\\ndocker network create modern-net && \\\ndocker run -d --name modern-db --network modern-net redis:alpine && \\\ndocker run --rm --network modern-net alpine sh -c "apk add -q curl; getent hosts modern-db" && \\\ndocker rm -f legacy-db modern-db && docker network rm modern-net',
        output: 'DATABASE_PORT=tcp://172.17.0.2:6379\nDATABASE_NAME=database\n=== 自定义网络（推荐）===\n172.19.0.2      modern-db',
        explain: '--link 是旧方案：通过环境变量注入目标容器信息（但 IP 变了不会更新）。自定义网络是推荐方案：内置 DNS，容器名自动解析，IP 变化自动更新。',
      },
      {
        title: '查看网络的详细信息',
        cmd: 'docker network inspect bridge --format "{{.Name}}: Subnet={{range .IPAM.Config}}{{.Subnet}}{{end}}, Containers={{len .Containers}}"',
        output: 'bridge: Subnet=172.17.0.0/16, Containers=0',
        explain: 'docker network inspect 显示网络的子网、网关、连接的容器等信息。bridge 网络的子网是 172.17.0.0/16（最多 65534 个容器 IP）。',
      },
    ],
    diagnosis: [
      {
        symptom: 'host 网络模式下容器端口冲突',
        cause: 'host 模式容器直接监听宿主机端口，如果宿主机已有进程占用该端口会冲突。',
        fix: '检查端口占用：ss -tlnp 或 lsof -i :80。停止占用端口的进程，或改用 bridge 网络 + 端口映射。',
      },
      {
        symptom: '容器能 ping 外网但不能 ping 其他容器',
        cause: '容器在不同的网络中，或 iptables 规则阻止了容器间通信。',
        fix: '确认两个容器在同一网络：docker inspect <container> | grep NetworkMode。iptables -L DOCKER 检查规则。',
      },
      {
        symptom: 'Docker 网络占用了和局域网冲突的 IP 段',
        cause: 'Docker 默认使用 172.17-31.x.x，如果你的内网也用这个段会冲突。',
        fix: '修改 Docker 默认网桥：编辑 /etc/docker/daemon.json，设置 "bip": "10.200.0.1/24"。重启 Docker。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '分别用 bridge、host、none 三种模式运行 alpine 容器，对比它们的网络接口（ip addr）',
        hint: 'docker run --network bridge/host/none alpine ip addr',
        answer: 'echo "=== bridge ===" && docker run --rm --network bridge alpine ip addr\necho "=== host ===" && docker run --rm --network host alpine ip addr\necho "=== none ===" && docker run --rm --network none alpine ip addr\n# bridge: 有 eth0（Docker 分配 IP）\n# host: 和宿主机完全一样\n# none: 只有 lo（loopback）',
      },
      {
        level: '进阶',
        task: '创建自定义网络并指定子网 10.100.0.0/24，运行容器验证 IP 在指定范围内',
        hint: 'docker network create --subnet',
        answer: 'docker network create --subnet 10.100.0.0/24 custom-net\ndocker run --rm --network custom-net alpine ip addr show eth0\n# 输出中 inet 应该在 10.100.0.x 范围\ndocker run --rm --network custom-net --ip 10.100.0.100 alpine ip addr show eth0\n# 指定静态 IP: 10.100.0.100\ndocker network rm custom-net',
      },
    ],
  },

  "frshJqVMP8D7o_7tMZMPI": {
    mentalModel: 'Docker 存储进阶有三种模式：Volume（Docker 管理的持久化存储）、Bind Mount（直接映射宿主机目录，开发时同步代码）、tmpfs（内存临时文件系统，敏感信息不落盘）。',
    handsOn: [
      {
        title: 'Bind Mount——开发时同步代码',
        cmd: 'mkdir -p /tmp/bind-test && echo "<h1>Live Reload</h1>" > /tmp/bind-test/index.html && \\\ndocker run -d --name bind-web -v /tmp/bind-test:/usr/share/nginx/html:ro -p 8080:80 nginx:alpine && \\\ncurl -s http://localhost:8080 && \\\necho "--- 修改文件 ---" && \\\necho "<h1>Updated!</h1>" > /tmp/bind-test/index.html && \\\ncurl -s http://localhost:8080',
        output: '<h1>Live Reload</h1>\n--- 修改文件 ---\n<h1>Updated!</h1>',
        explain: 'Bind Mount 直接映射宿主机目录。修改宿主机文件，容器内立即看到（无需重启）。:ro 只读。开发时非常适合：代码改了立刻生效。生产环境不推荐（路径依赖宿主机）。',
      },
      {
        title: 'Volume vs Bind Mount 对比',
        cmd: 'echo "=== Volume（Docker 管理）===" && \\\ndocker run --rm -v myvol:/data alpine sh -c "echo vol-data > /data/file.txt" && \\\ndocker run --rm -v myvol:/data alpine cat /data/file.txt && \\\necho "=== Bind Mount（宿主机目录）===" && \\\ndocker run --rm -v /tmp/bind-test:/data alpine cat /data/index.html',
        output: '=== Volume（Docker 管理）===\nvol-data\n=== Bind Mount（宿主机目录）===\n<h1>Updated!</h1>',
        explain: 'Volume：Docker 管理（/var/lib/docker/volumes/），跨平台，适合持久化数据。Bind Mount：宿主机绝对路径，开发方便但不跨平台。选择标准：数据持久化用 Volume，代码同步用 Bind Mount。',
      },
      {
        title: 'tmpfs——内存临时文件',
        cmd: 'docker run --rm --tmpfs /secret:rw,size=10m alpine sh -c "echo sensitive > /secret/key.txt; cat /secret/key.txt; echo done" && \\\necho "--- 容器退出后数据消失 ---"',
        output: 'sensitive\ndone\n--- 容器退出后数据消失 ---',
        explain: 'tmpfs 挂载在内存中，读写速度极快，容器退出后自动消失。适合临时文件、敏感数据（密码、密钥不落盘）。限制大小（size=10m）防止吃光内存。',
      },
      {
        title: '查看容器的挂载信息',
        cmd: 'docker run -d --name mount-test \\\n  -v named-vol:/data/named \\\n  -v /tmp/bind-test:/data/bind:ro \\\n  --tmpfs /data/tmp:rw \\\n  alpine sleep 3600 && \\\ndocker inspect --format "{{json .Mounts}}" mount-test | python3 -m json.tool',
        output: '[\n  {"Type":"volume","Name":"named-vol","Destination":"/data/named","RW":true},\n  {"Type":"bind","Source":"/tmp/bind-test","Destination":"/data/bind","RW":false},\n  {"Type":"tmpfs","Destination":"/data/tmp"}\n]',
        explain: 'docker inspect .Mounts 显示所有挂载。Type 区分三种类型。RW 表示读写权限。bind 的 Source 是宿主机路径。volume 的 Name 是卷名。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Bind Mount 后容器内看不到文件',
        cause: '宿主机路径写错了（拼写错误或相对路径问题）。docker run 中的 -v 路径必须是绝对路径。',
        fix: '使用绝对路径：-v /home/user/project:/app。或在 docker-compose.yml 中用 ${PWD}：- ${PWD}:/app。docker inspect 确认 Source 路径。',
      },
      {
        symptom: '容器内修改 Bind Mount 的文件，宿主机看不到',
        cause: '容器和宿主机的文件 UID/GID 不一致，或文件被缓存。某些编辑器（如 vim）保存时创建新文件替代旧文件，Bind Mount 可能不跟踪。',
        fix: '确保 UID/GID 一致。使用 inotify 兼容的编辑器。docker restart 重启容器刷新。',
      },
      {
        symptom: 'Volume 数据突然消失',
        cause: '挂载卷时覆盖了容器内原有文件（卷初始为空时会把容器目录内容复制到卷，但如果卷已有数据则不会复制）。',
        fix: '首次挂载空卷时，容器目录的内容会复制到卷。如果卷已有数据，容器目录内容被遮蔽。确保数据初始化在卷挂载之后进行。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Bind Mount 运行 nginx 容器，映射本地 HTML 文件，修改本地文件验证容器内立即更新',
        hint: 'docker run -v /path/to/html:/usr/share/nginx/html:ro',
        answer: 'mkdir -p /tmp/html-test\necho "<h1>Version 1</h1>" > /tmp/html-test/index.html\ndocker run -d --name bind-ex -v /tmp/html-test:/usr/share/nginx/html:ro -p 8080:80 nginx:alpine\ncurl http://localhost:8080  # Version 1\necho "<h1>Version 2</h1>" > /tmp/html-test/index.html\ncurl http://localhost:8080  # Version 2（实时更新）\ndocker rm -f bind-ex',
      },
      {
        level: '进阶',
        task: '用 docker-compose.yml 同时配置 Volume（数据库持久化）和 Bind Mount（代码开发），验证两者各自的行为',
        hint: 'volumes 节 + 服务级 volumes 列表',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  app:\n    image: nginx:alpine\n    ports:\n      - "8080:80"\n    volumes:\n      - ./html:/usr/share/nginx/html:ro   # Bind Mount（开发）\n      - app-cache:/var/cache/nginx         # Volume（缓存）\n  db:\n    image: redis:alpine\n    volumes:\n      - db-data:/data                      # Volume（持久化）\nvolumes:\n  app-cache:\n  db-data:\nEOF\ndocker compose up -d\ndocker compose down  # 卷保留\ndocker compose down -v  # 卷也删除',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 06 — 安全与监控
  // ═══════════════════════════════════════════════

  "NCdsPRhJy7UtQFNLo1J1f": {
    mentalModel: 'Docker 安全是"洋葱模型"：外层（宿主机加固）→ 中层（容器权限限制）→ 内层（只读文件系统+最小能力）。每多加一层，攻击面就小一圈。',
    handsOn: [
      {
        title: '以非 root 用户运行（最基本的安全措施）',
        cmd: 'docker run --rm --user 1000:1000 alpine sh -c "whoami; id; ls /etc/shadow" 2>&1',
        output: 'whoami: unknown uid 1000\nuid=1000 gid=1000\nls: /etc/shadow: Permission denied',
        explain: '--user 1000:1000 以普通用户运行。UID 1000 在 Alpine 中没有用户名映射（所以 whoami 报错），但权限已受限——无法读取 /etc/shadow。这是 Docker 安全的第一步。',
      },
      {
        title: '只读文件系统',
        cmd: 'docker run --rm --read-only --tmpfs /tmp alpine sh -c "echo test > /tmp/writable; echo test > /readonly" 2>&1',
        output: 'sh: can\'t create /readonly: Read-only file system',
        explain: '--read-only 让容器文件系统只读（镜像层不可写）。--tmpfs /tmp 给应用一个可写的临时目录。这防止恶意程序写入文件系统。配合 --user 使用效果更好。',
      },
      {
        title: '删除 Linux 能力（Capabilities）',
        cmd: 'docker run --rm alpine sh -c "cat /proc/1/status | grep Cap" && \\\necho "=== 删除所有能力后 ===" && \\\ndocker run --rm --cap-drop ALL alpine sh -c "cat /proc/1/status | grep Cap"',
        output: 'CapInh: 0000000000000000\nCapPrm: 00000000a80425fb\nCapEff: 00000000a80425fb\n=== 删除所有能力后 ===\nCapInh: 0000000000000000\nCapPrm: 0000000000000000\nCapEff: 0000000000000000',
        explain: '默认容器有一些 Linux capabilities（如 NET_BIND_SERVICE、CHOWN）。--cap-drop ALL 删除所有能力，容器只能做最基本的事。需要特定能力时用 --cap-add NET_BIND_SERVICE 逐个添加。',
      },
      {
        title: '安全选项（seccomp + no-new-privileges）',
        cmd: 'docker run --rm --security-opt no-new-privileges alpine sh -c "cat /proc/1/status | grep NoNewPrivs"',
        output: 'NoNewPrivs: 1',
        explain: 'no-new-privileges 阻止容器内进程通过 setuid/setgid 提权。即使有 setuid root 的二进制文件也不能提权。Docker 默认还应用 seccomp profile 限制危险系统调用。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器以 root 运行，安全扫描报高危',
        cause: 'Dockerfile 中没有 USER 指令，默认以 root 运行。',
        fix: 'Dockerfile 添加：RUN adduser -D appuser && USER appuser。或运行时加 --user 1000:1000。',
      },
      {
        symptom: '--read-only 导致应用启动失败',
        cause: '应用需要写入临时文件（日志、缓存、PID 文件），但只读文件系统不允许。',
        fix: '--read-only --tmpfs /tmp --tmpfs /run。找出应用需要写入的目录，逐个加 tmpfs 或挂载可写卷。',
      },
      {
        symptom: '--cap-drop ALL 后应用不能绑定端口',
        cause: '绑定 1024 以下端口需要 NET_BIND_SERVICE 能力。',
        fix: '--cap-drop ALL --cap-add NET_BIND_SERVICE。或让应用监听高端口（8080、3000）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 --user 1000:1000 --read-only --tmpfs /tmp 运行 alpine 容器，验证不能写根目录但可以写 /tmp',
        hint: 'docker run --user --read-only --tmpfs',
        answer: 'docker run --rm --user 1000:1000 --read-only --tmpfs /tmp alpine sh -c "\n  echo test > /tmp/file.txt && echo /tmp 可写\n  echo test > /data.txt 2>&1 || echo / 不可写\n"',
      },
      {
        level: '进阶',
        task: '写一个安全加固的 docker run 命令，组合所有安全选项',
        hint: '--user --read-only --cap-drop ALL --cap-add --security-opt --memory --cpus',
        answer: 'docker run -d --name secure-app \\\n  --user 1000:1000 \\\n  --read-only \\\n  --tmpfs /tmp \\\n  --cap-drop ALL \\\n  --cap-add NET_BIND_SERVICE \\\n  --security-opt no-new-privileges \\\n  --memory=256m --cpus=1.0 \\\n  nginx:alpine\ndocker inspect secure-app --format "{{.HostConfig.User}} {{.HostConfig.ReadonlyRootfs}}"',
      },
    ],
  },

  "kIqx7Inf50mE9W0juwNBz": {
    mentalModel: 'docker stats 是"容器的任务管理器"：实时显示 CPU、内存、网络 IO、磁盘 IO。当容器变慢或崩溃时，stats 是第一眼要看的仪表盘。',
    handsOn: [
      {
        title: '查看所有容器的资源使用',
        cmd: 'docker stats --no-stream',
        output: 'CONTAINER ID   NAME     CPU %   MEM USAGE / LIMIT   MEM %   NET I/O        BLOCK I/O\nabc123def456   web      0.05%   12.3MiB / 256MiB    4.80%   1.2kB / 650B   0B / 0B\ndef456ghi789   redis    0.02%   5.6MiB / 128MiB     4.38%   890B / 0B      4.1MB / 0B',
        explain: '--no-stream 获取一次快照（不加则持续刷新）。MEM USAGE / LIMIT 显示当前使用量/限制量。MEM % 使用百分比。NET I/O 显示网络收发。BLOCK I/O 显示磁盘读写。',
      },
      {
        title: '监控特定容器的资源使用',
        cmd: 'docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}" web',
        output: 'NAME   CPU %   MEM USAGE / LIMIT\nweb    0.05%   12.3MiB / 256MiB',
        explain: '--format 自定义输出列。指定容器名只显示该容器的数据。适合写监控脚本或定时检查。',
      },
      {
        title: '观察 CPU 压力——运行压力测试',
        cmd: 'docker run -d --name stress --cpus=1.0 --memory=128m alpine sh -c "apk add -q stress-ng && stress-ng --cpu 1 --timeout 10s" && \\\nsleep 3 && docker stats --no-stream stress',
        output: 'CONTAINER ID   NAME     CPU %   MEM USAGE / LIMIT   MEM %\nabc123         stress   99.8%   2.1MiB / 128MiB     1.64%',
        explain: 'stress-ng 产生 CPU 负载。CPU % 接近 100%（因为限制了 1 个 CPU）。内存使用很低（CPU 密集型任务）。docker stats 帮助确认是 CPU 瓶颈还是内存瓶颈。',
      },
      {
        title: '观察内存压力——OOM 场景',
        cmd: 'docker run -d --name mem-test --memory=64m alpine sh -c "apk add -q stress-ng && stress-ng --vm 1 --vm-bytes 128M --timeout 10s" && \\\nsleep 5 && docker inspect --format "{{.State.OOMKilled}} (exit: {{.State.ExitCode}})" mem-test 2>/dev/null',
        output: 'true (exit: 137)',
        explain: '容器尝试分配 128MB 但限制 64MB。OOM Killer 杀死进程。exit code 137 = SIGKILL（128+9）。OOMKilled: true 确认是内存超限。生产环境要设置合理的 --memory 限制并监控 MEM %。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器 CPU % 持续 100%+',
        cause: '应用有 CPU 密集型计算（死循环、正则回溯、大量加密运算）。或 --cpus 限制太小。',
        fix: 'docker exec 进入容器 top 或 ps 看哪个进程占用 CPU。优化应用代码。或增加 --cpus 限制。',
      },
      {
        symptom: '容器 MEM % 接近 100%，随后被 OOM Kill',
        cause: '内存泄漏或 --memory 限制太小。Java/Node.js 应用特别容易出现。',
        fix: '增加 --memory 限制。应用层面排查内存泄漏。Java：设置 -Xmx 小于容器 --memory。Node.js：设置 --max-old-space-size。',
      },
      {
        symptom: 'docker stats 显示 NET I/O 很高',
        cause: '容器在传输大量数据（文件下载/上传、数据库查询结果、日志传输）。',
        fix: 'docker exec 进入容器 ss -tnp 查看连接。检查是否有不必要的数据传输。考虑压缩传输、分页查询、日志采样。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '启动 3 个容器，用 docker stats --no-stream 一次性查看它们的资源使用',
        hint: 'docker run -d + docker stats --no-stream',
        answer: 'docker run -d --name s1 nginx:alpine\ndocker run -d --name s2 redis:alpine\ndocker run -d --name s3 alpine sleep 3600\ndocker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}"\ndocker rm -f s1 s2 s3',
      },
      {
        level: '进阶',
        task: '限制容器内存为 32MB，运行压力测试触发 OOM，用 docker inspect 确认 OOMKilled',
        hint: '--memory=32m + stress-ng + docker inspect OOMKilled',
        answer: 'docker run -d --name oom-test --memory=32m alpine sh -c "apk add -q stress-ng && stress-ng --vm 1 --vm-bytes 64M --timeout 10s"\nsleep 5\ndocker inspect --format "OOM: {{.State.OOMKilled}}, Exit: {{.State.ExitCode}}" oom-test\ndocker rm -f oom-test',
      },
    ],
  },

  "0NKqLUWtJMlXn-m6wpA6f": {
    mentalModel: 'Docker 日志管理是"集中收集容器的日记"：默认日志写到 json 文件（会撑爆磁盘），生产环境要配置日志轮转或发送到外部系统（ELK、Fluentd）。',
    handsOn: [
      {
        title: '查看默认日志文件位置和大小',
        cmd: 'docker run -d --name log-size nginx:alpine && \\\nfor i in $(seq 1 100); do curl -s http://localhost > /dev/null 2>&1; done; \\\ndocker inspect --format "{{.LogPath}}" log-size',
        output: '/var/lib/docker/containers/abc123.../abc123...-json.log',
        explain: '默认的 json-file 日志驱动把日志写到 /var/lib/docker/containers/<id>/<id>-json.log。长期运行的容器这个文件可以增长到 GB。',
      },
      {
        title: '配置日志轮转（max-size + max-file）',
        cmd: 'docker run -d --name log-rotate \\\n  --log-driver json-file \\\n  --log-opt max-size=10m \\\n  --log-opt max-file=3 \\\n  nginx:alpine && \\\ndocker inspect --format "{{.HostConfig.LogConfig}}" log-rotate',
        output: '{json-file map[max-file:3 max-size:10m]}',
        explain: 'max-size=10m 单个日志文件最大 10MB。max-file=3 保留最多 3 个文件（总共 30MB）。超过限制时自动轮转（旧文件加 .1 .2 后缀）。推荐在所有生产容器上配置。',
      },
      {
        title: '全局配置日志驱动',
        cmd: 'cat /etc/docker/daemon.json 2>/dev/null || echo "文件不存在" && \\\necho "=== 推荐的全局配置 ===" && \\\ncat << \'EOF\'\n{\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "10m",\n    "max-file": "3"\n  }\n}\nEOF',
        output: '文件不存在\n=== 推荐的全局配置 ===\n{\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "10m",\n    "max-file": "3"\n  }\n}',
        explain: '在 /etc/docker/daemon.json 全局配置日志轮转，对所有新容器生效。修改后需要 sudo systemctl restart docker。已运行的容器不受影响（需要重建）。',
      },
      {
        title: '使用 journald 日志驱动（systemd 系统）',
        cmd: 'docker run -d --name log-journald \\\n  --log-driver journald \\\n  nginx:alpine && \\\nsleep 1 && journalctl CONTAINER_NAME=log-journald --no-pager | tail -5',
        output: 'Jan 15 10:30:00 host abc123[1234]: 172.17.0.1 - - "GET / HTTP/1.1" 200',
        explain: 'journald 驱动把容器日志发送到 systemd 日志系统。可以用 journalctl 统一查看所有日志。适合 Linux systemd 环境。自带日志轮转（journalctl --vacuum-size=100M）。',
      },
    ],
    diagnosis: [
      {
        symptom: '/var/lib/docker 磁盘空间被日志撑爆',
        cause: '默认 json-file 日志驱动不限制文件大小。长期运行容器日志可以增长到数十 GB。',
        fix: '立即清理：truncate -s 0 $(docker inspect --format "{{.LogPath}}" <container>)。长期修复：配置 max-size 和 max-file。',
      },
      {
        symptom: 'docker logs 看不到日志（用了 journald 驱动）',
        cause: 'journald 日志驱动不写 json 文件，docker logs 命令无法读取。',
        fix: '用 journalctl 查看：journalctl CONTAINER_NAME=<name>。或改回 json-file 驱动。docker logs 只支持 json-file 和 journald 等本地驱动。',
      },
      {
        symptom: '修改了 daemon.json 但日志轮转不生效',
        cause: '需要重启 Docker 守护进程，且只对新创建的容器生效。已有容器的日志配置不变。',
        fix: 'sudo systemctl restart docker。删除旧容器并重建（docker rm + docker run 或 docker compose up --force-recreate）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '运行一个容器配置日志轮转（max-size=5m, max-file=2），验证配置生效',
        hint: '--log-opt max-size + --log-opt max-file',
        answer: 'docker run -d --name log-ex \\\n  --log-driver json-file \\\n  --log-opt max-size=5m \\\n  --log-opt max-file=2 \\\n  nginx:alpine\ndocker inspect --format "{{json .HostConfig.LogConfig}}" log-ex\ndocker rm -f log-ex',
      },
      {
        level: '进阶',
        task: '写一个脚本找出所有日志文件超过 100MB 的容器',
        hint: 'docker inspect LogPath + du -h',
        answer: '#!/bin/bash\nfor id in $(docker ps -q); do\n  logpath=$(docker inspect --format "{{.LogPath}}" $id)\n  name=$(docker inspect --format "{{.Name}}" $id)\n  size=$(du -h "$logpath" 2>/dev/null | cut -f1)\n  raw=$(du -b "$logpath" 2>/dev/null | cut -f1)\n  if [ "$raw" -gt 104857600 ]; then  # 100MB\n    echo "WARNING: $name ($size) - $logpath"\n  fi\ndone',
      },
    ],
  },

  "Vs4WQwgJFhA63U9Gf2ym0": {
    mentalModel: 'Docker 安全进阶是"纵深防御"：镜像扫描（检查依赖漏洞）+ 运行时限制（资源/网络/权限）+ 网络隔离（最小通信范围）+ 审计日志（记录所有操作）。',
    handsOn: [
      {
        title: '资源限制——防止容器用光宿主机资源',
        cmd: 'docker run -d --name limited-app \\\n  --memory=256m --memory-swap=512m \\\n  --cpus=1.0 --pids-limit=100 \\\n  alpine sleep 3600 && \\\ndocker inspect --format "Mem: {{.HostConfig.Memory}}B, CPUs: {{.HostConfig.NanoCpus}}, PIDs: {{.HostConfig.PidsLimit}}" limited-app',
        output: 'Mem: 268435456B, CPUs: 1000000000, PIDs: 100',
        explain: '--memory-swap 限制 swap（总内存=memory+swap）。--pids-limit 限制进程数（防 fork bomb）。--cpus 限制 CPU 核心数。生产环境每个容器都应该设置资源限制。',
      },
      {
        title: '网络隔离——最小化容器通信范围',
        cmd: 'docker network create --internal isolated-net && \\\ndocker run -d --name isolated-app --network isolated-net alpine sleep 3600 && \\\ndocker exec isolated-app sh -c "ping -c 1 -W 2 8.8.8.8" 2>&1 | tail -2',
        output: 'ping: sendto: Network is unreachable',
        explain: '--internal 创建内部网络——容器不能访问外部网络（包括互联网）。适合纯内部服务（如内部 API、数据库）。只能和同一网络的容器通信。',
      },
      {
        title: 'Seccomp 自定义安全配置',
        cmd: 'docker run --rm --security-opt seccomp=unconfined alpine sh -c "cat /proc/1/status | grep Seccomp" && \\\necho "=== 默认 seccomp ===" && \\\ndocker run --rm alpine sh -c "cat /proc/1/status | grep Seccomp"',
        output: 'Seccomp: 0\n=== 默认 seccomp ===\nSeccomp: 2',
        explain: 'Seccomp: 2 表示 seccomp 启用（过滤模式），阻止约 44 个危险系统调用。Seccomp: 0 表示禁用（unconfined，危险！）。生产环境保持默认 seccomp 或自定义更严格的 profile。',
      },
      {
        title: '容器安全审计——检查配置',
        cmd: 'docker run -d --name audit-test -p 8080:80 --privileged nginx:alpine 2>/dev/null; \\\necho "=== 安全检查 ===" && \\\ndocker inspect --format "Privileged: {{.HostConfig.Privileged}}" audit-test && \\\ndocker inspect --format "User: {{.Config.User}}" audit-test && \\\ndocker inspect --format "ReadonlyRootfs: {{.HostConfig.ReadonlyRootfs}}" audit-test',
        output: '=== 安全检查 ===\nPrivileged: true  ← 危险！\nUser:             ← 空=默认 root\nReadonlyRootfs: false  ← 可写',
        explain: '审计容器配置：Privileged=true 给予完整宿主机权限（极度危险）。User 为空表示 root 运行。ReadonlyRootfs=false 文件系统可写。生产环境应反转所有这些设置。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器以 --privileged 运行',
        cause: '某些应用（如 Docker-in-Docker、GPU 容器）需要特权模式。但特权模式几乎取消了所有隔离。',
        fix: '避免 --privileged。用 --cap-add 只添加需要的能力。DinD 用 rootless Docker。GPU 用 --gpus all 代替 --privileged。',
      },
      {
        symptom: '容器可以访问不需要的网络',
        cause: '默认 bridge 网络允许容器访问外部网络。某些内部服务不需要互联网访问。',
        fix: '用 --internal 网络隔离。用 iptables 限制出站流量。docker run --network none 完全隔离网络。',
      },
      {
        symptom: 'Docker socket 被挂载到容器内',
        cause: '某些 CI/CD 工具需要 -v /var/run/docker.sock:/var/run/docker.sock 来操作 Docker。但这等于给了容器完整宿主机控制权。',
        fix: '避免挂载 Docker socket。用 Docker-in-Docker（DinD）代替。或用 rootless Docker 限制权限。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '运行一个安全加固的容器：非 root、只读文件系统、资源限制、删除所有能力',
        hint: '--user --read-only --memory --cap-drop ALL',
        answer: 'docker run -d --name secure \\\n  --user 1000:1000 \\\n  --read-only --tmpfs /tmp \\\n  --memory=128m --cpus=0.5 \\\n  --cap-drop ALL \\\n  --security-opt no-new-privileges \\\n  alpine sleep 3600\ndocker inspect --format "User:{{.HostConfig.User}} RO:{{.HostConfig.ReadonlyRootfs}}" secure\ndocker rm -f secure',
      },
      {
        level: '进阶',
        task: '创建一个 --internal 网络，验证容器不能访问互联网但可以互相通信',
        hint: 'docker network create --internal',
        answer: 'docker network create --internal secure-net\ndocker run -d --name s1 --network secure-net alpine sleep 3600\ndocker run -d --name s2 --network secure-net alpine sleep 3600\ndocker exec s1 ping -c 1 s2     # 成功\ndocker exec s1 ping -c 1 -W 2 8.8.8.8  # 失败: Network is unreachable\ndocker rm -f s1 s2\ndocker network rm secure-net',
      },
    ],
  },

  "vYug8kcwrMoWf8ft4UDNI": {
    mentalModel: 'Docker 监控进阶是"自动化观察"：从手动 docker stats 升级到 Prometheus + cAdvisor 自动采集，Grafana 可视化，Alertmanager 告警。生产环境必备。',
    handsOn: [
      {
        title: '部署 cAdvisor（容器监控代理）',
        cmd: 'docker run -d --name cadvisor \\\n  -p 8090:8080 \\\n  -v /:/rootfs:ro \\\n  -v /var/run:/var/run:ro \\\n  -v /sys:/sys:ro \\\n  -v /var/lib/docker:/var/lib/docker:ro \\\n  gcr.io/cadvisor/cadvisor:v0.47.2 2>&1 | head -3 && \\\nsleep 3 && curl -s http://localhost:8090/metrics | head -5',
        output: '# HELP container_cpu_usage_seconds_total Cumulative cpu time consumed\n# TYPE container_cpu_usage_seconds_total counter\ncontainer_cpu_usage_seconds_total{container_label_...} 12.345',
        explain: 'cAdvisor 自动采集所有容器的 CPU、内存、网络、磁盘指标。/metrics 端点提供 Prometheus 格式的数据。通过 Bind Mount 读取宿主机系统信息（只读）。',
      },
      {
        title: '用 docker events 监控容器生命周期事件',
        cmd: 'docker events --since 1m --until 0s --format "{{.Action}}: {{.Actor.Attributes.name}}" &\nsleep 1\ndocker run --rm alpine echo "event-test" > /dev/null 2>&1\nsleep 2\nkill %1 2>/dev/null',
        output: 'create: event-test\nstart: event-test\ndie: event-test\ndestroy: event-test',
        explain: 'docker events 实时推送容器生命周期事件：create→start→die→destroy。可以监控容器启动、停止、崩溃。--format 自定义输出。适合接入告警系统。',
      },
      {
        title: '编写简单的监控脚本',
        cmd: 'cat << \'SCRIPT\'\n#!/bin/bash\n# 容器健康监控脚本\nTHRESHOLD_CPU=80\nTHRESHOLD_MEM=80\n\ndocker stats --no-stream --format "{{.Name}},{{.CPUPerc}},{{.MemPerc}}" | while IFS=, read name cpu mem; do\n  cpu_val=${cpu%%%}\n  mem_val=${mem%%%}\n  if (( $(echo "$cpu_val > $THRESHOLD_CPU" | bc -l 2>/dev/null || echo 0) )); then\n    echo "ALERT: $name CPU=$cpu%"\n  fi\n  if (( $(echo "$mem_val > $THRESHOLD_MEM" | bc -l 2>/dev/null || echo 0) )); then\n    echo "ALERT: $name MEM=$mem%"\n  fi\ndone\nSCRIPT',
        output: '#!/bin/bash\n# 容器健康监控脚本\nTHRESHOLD_CPU=80\n...',
        explain: '简单的 shell 监控脚本：解析 docker stats 输出，超过阈值发出告警。生产环境推荐用 Prometheus + cAdvisor + Grafana 完整方案。',
      },
      {
        title: '查看容器的健康检查状态',
        cmd: 'docker inspect --format "{{.State.Health.Status}}" $(docker ps -q --filter "health=healthy" 2>/dev/null | head -1) 2>/dev/null || echo "没有配置健康检查的容器"',
        output: '没有配置健康检查的容器',
        explain: 'docker inspect .State.Health 显示健康检查状态（healthy/unhealthy/starting）。只有 Dockerfile 中配置了 HEALTHCHECK 或 docker run --health-cmd 的容器才有这个信息。',
      },
    ],
    diagnosis: [
      {
        symptom: 'cAdvisor 部署后看不到容器数据',
        cause: 'Bind Mount 路径不正确。cAdvisor 需要读取 /、/var/run、/sys、/var/lib/docker 等目录。',
        fix: '检查 -v 挂载路径。确保以 root 运行 cAdvisor。Docker Desktop 上 cAdvisor 可能不完整支持。',
      },
      {
        symptom: '容器突然停止但没有告警',
        cause: '没有配置监控和告警。容器停止默认不会发通知。',
        fix: '配置 docker events 监控 + 告警。或 Prometheus Alertmanager + cAdvisor。设置 --restart unless-stopped 自动重启。',
      },
      {
        symptom: '监控数据粒度太粗（看不到瞬时峰值）',
        cause: 'Prometheus 采集间隔太长（如 60s），短暂的 CPU 峰值被平均掉了。',
        fix: '减小 Prometheus scrape_interval（如 15s 或 5s）。cAdvisor 默认 15s 采集一次。配合 recording rules 计算更细粒度指标。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker events 监控 1 分钟内的所有容器事件，同时启动和停止一个容器观察',
        hint: 'docker events + docker run + docker stop + docker rm',
        answer: 'docker events --format "{{.Time}} {{.Action}} {{.Actor.Attributes.name}}" &\nEVENTS_PID=$!\ndocker run -d --name monitor-test alpine sleep 10\ndocker stop monitor-test\ndocker rm monitor-test\nkill $EVENTS_PID',
      },
      {
        level: '进阶',
        task: '用 docker-compose 部署 Prometheus + cAdvisor + Grafana 监控栈',
        hint: '三个服务 + 网络 + 卷',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  cadvisor:\n    image: gcr.io/cadvisor/cadvisor:v0.47.2\n    volumes:\n      - /:/rootfs:ro\n      - /var/run:/var/run:ro\n      - /sys:/sys:ro\n      - /var/lib/docker:/var/lib/docker:ro\n    ports:\n      - "8090:8080"\n  prometheus:\n    image: prom/prometheus:latest\n    volumes:\n      - ./prometheus.yml:/etc/prometheus/prometheus.yml\n      - prom-data:/prometheus\n    ports:\n      - "9090:9090"\n  grafana:\n    image: grafana/grafana:latest\n    ports:\n      - "3000:3000"\n    volumes:\n      - grafana-data:/var/lib/grafana\nvolumes:\n  prom-data:\n  grafana-data:\nEOF',
      },
    ],
  },

  "3Nsg-F3wMKEzEsXw1MBZv": {
    mentalModel: 'Docker 日志进阶是"日志高速公路"：从 json-file（写本地文件）升级到 Fluentd/Fluent Bit（采集）→ Elasticsearch（存储搜索）→ Kibana（可视化）的 EFK 栈。',
    handsOn: [
      {
        title: '对比不同日志驱动的行为',
        cmd: 'echo "=== json-file（默认）===" && \\\ndocker run --rm --log-driver json-file alpine echo "json log" && \\\necho "=== journald ===" && \\\ndocker run --rm --log-driver journald --name j-test alpine echo "journal log" && \\\necho "=== none（丢弃所有日志）===" && \\\ndocker run --rm --log-driver none alpine echo "invisible log"',
        output: '=== json-file（默认）===\njson log\n=== journald ===\njournal log\n=== none（丢弃所有日志）===\ninvisible log',
        explain: 'json-file 写本地文件（docker logs 可查看）。journald 写 systemd journal（journalctl 查看）。none 丢弃所有日志（节省空间但无法排查问题）。选择取决于环境。',
      },
      {
        title: '结构化日志——JSON 格式输出',
        cmd: 'cat << \'EOF\' > /tmp/json-log-test.sh\n#!/bin/sh\nwhile true; do\n  echo "{\"timestamp\":\"$(date -Iseconds)\",\"level\":\"info\",\"message\":\"request processed\",\"status\":200}\"\n  sleep 2\ndone\nEOF\ndocker run -d --name json-app --log-driver json-file \\\n  --log-opt max-size=5m --log-opt max-file=2 \\\n  -v /tmp/json-log-test.sh:/app.sh alpine sh /app.sh && \\\nsleep 3 && docker logs json-app | tail -2',
        output: '{"timestamp":"2024-01-15T10:30:00+00:00","level":"info","message":"request processed","status":200}',
        explain: 'JSON 格式日志便于机器解析。Elasticsearch、Splunk 等系统可以自动索引 JSON 字段。timestamp 用 ISO 8601 格式。level 区分日志级别。message 是人类可读描述。',
      },
      {
        title: '在 docker-compose 中配置日志',
        cmd: 'cat << \'EOF\'\nservices:\n  web:\n    image: nginx:alpine\n    logging:\n      driver: json-file\n      options:\n        max-size: "10m"\n        max-file: "3"\n        tag: "{{.Name}}"\n  api:\n    image: node:18-alpine\n    logging:\n      driver: json-file\n      options:\n        max-size: "50m"\n        max-file: "5"\nEOF',
        output: '# docker-compose.yml 日志配置示例',
        explain: '每个服务可以独立配置日志驱动和选项。API 服务日志量大所以 max-size 设 50m。tag 可以给日志加标识便于区分。',
      },
      {
        title: '用 Fluent Bit 采集容器日志（轻量替代 Fluentd）',
        cmd: 'docker run -d --name fluent-bit \\\n  -v /var/log:/var/log:ro \\\n  -v /var/lib/docker/containers:/var/lib/docker/containers:ro \\\n  fluent/fluent-bit:latest \\\n  -i tail -p path=/var/lib/docker/containers/*/*.log \\\n  -o stdout 2>&1 | tail -5',
        output: '[0] tail.0: [1705312200.0, {"log"=>"172.17.0.1 - - ..."}]',
        explain: 'Fluent Bit 是轻量级日志采集器（比 Fluentd 资源占用少 10 倍）。-i tail 从文件读取输入。-o stdout 输出到标准输出（测试用）。生产环境输出到 Elasticsearch：-o es -p Host=es-host。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器日志中时间戳不一致',
        cause: '容器内应用输出本地时间（如 UTC+8），Docker 日志系统用 UTC。ELK 索引时可能再次转换时区。',
        fix: '应用统一输出 UTC 时间（ISO 8601 格式带 Z 后缀）。Elasticsearch 配置 timezone 参数。docker logs --since 使用 UTC 时间。',
      },
      {
        symptom: 'Fluent Bit/Fluentd 采集不到日志',
        cause: 'Bind Mount 路径错误，或 Docker 日志驱动不是 json-file（如 journald）。',
        fix: '确认日志驱动是 json-file。确认挂载路径正确：-v /var/lib/docker/containers:/var/lib/docker/containers:ro。检查 Fluent 配置的 path 通配符。',
      },
      {
        symptom: 'Elasticsearch 存储空间增长过快',
        cause: '容器日志量太大，没有配置日志轮转和 ILM（Index Lifecycle Management）。',
        fix: '配置 Docker 日志轮转（max-size/max-file）。Elasticsearch ILM 自动删除旧索引。Fluent Bit 过滤不需要的日志字段。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '运行容器输出 JSON 格式日志，配置日志轮转（max-size=1m, max-file=2），验证 docker logs 可查看',
        hint: 'echo JSON + --log-opt',
        answer: 'docker run -d --name json-log \\\n  --log-driver json-file \\\n  --log-opt max-size=1m --log-opt max-file=2 \\\n  alpine sh -c "while true; do echo \\"{\\"ts\\":\\"$(date -Iseconds)\\",\\"msg\\":\\"hello\\"}\\"; sleep 1; done"\nsleep 5\ndocker logs json-log\ndocker rm -f json-log',
      },
      {
        level: '进阶',
        task: '用 docker-compose 搭建 EFK 栈（Elasticsearch + Fluent Bit + Kibana），采集 Nginx 容器的日志',
        hint: '三个服务 + 共享网络 + 卷',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  nginx:\n    image: nginx:alpine\n    logging:\n      driver: fluentd\n      options:\n        fluentd-address: localhost:24224\n        tag: nginx.access\n  fluentbit:\n    image: fluent/fluent-bit:latest\n    ports:\n      - "24224:24224"\n    command: >\n      fluent-bit -i forward -p port=24224\n      -o es -p Host=elasticsearch -p Port=9200\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:8.11.0\n    environment:\n      - discovery.type=single-node\n      - xpack.security.enabled=false\n    volumes:\n      - es-data:/usr/share/elasticsearch/data\n  kibana:\n    image: docker.elastic.co/kibana/kibana:8.11.0\n    ports:\n      - "5601:5601"\n    environment:\n      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200\nvolumes:\n  es-data:\nEOF\ndocker compose up -d\n# Kibana: http://localhost:5601',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 07 — 优化与高级
  // ═══════════════════════════════════════════════

  "LShK3-1EGGuXnEvdScFR7": {
    mentalModel: '镜像优化是"给镜像减肥"：多阶段构建（只带运行时需要的东西）、alpine 基础镜像（最小底座）、合并 RUN 层（减少层数）、.dockerignore（不打包垃圾文件）。',
    handsOn: [
      {
        title: '对比不同基础镜像的大小',
        cmd: 'docker pull ubuntu:22.04 alpine:3.19 debian:bookworm-slim scratch 2>/dev/null; \\\ndocker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}" | grep -E "ubuntu|alpine|debian|REPOSITORY"',
        output: 'REPOSITORY   TAG                  SIZE\nubuntu       22.04                77.8MB\ndebian       bookworm-slim        80.6MB\nalpine       3.19                 7.73MB',
        explain: 'alpine 只有 7.73MB（最小完整基础镜像）。ubuntu 77.8MB。debian-slim 80.6MB。scratch 是空镜像（0B，只包含你 COPY 进去的文件）。选择最小够用的基础镜像。',
      },
      {
        title: '合并 RUN 减少层数',
        cmd: 'echo "=== 坏：每行一个 RUN（3 层）===" && \\\ncat << \'EOF\'\nRUN apt-get update\nRUN apt-get install -y curl\nRUN rm -rf /var/lib/apt/lists/*\nEOF\necho "=== 好：合并成一个 RUN（1 层）===" && \\\ncat << \'EOF\'\nRUN apt-get update \\\n    && apt-get install -y --no-install-recommends curl \\\n    && rm -rf /var/lib/apt/lists/*\nEOF',
        output: '=== 坏：每行一个 RUN（3 层）===\n...\n=== 好：合并成一个 RUN（1 层）===\n...',
        explain: '每个 RUN 指令产生一个新镜像层。3 个 RUN = 3 层。合并成 1 个 RUN = 1 层。--no-install-recommends 不安装推荐包（减小体积）。rm -rf lists 清理缓存（同一层内清理不占空间）。',
      },
      {
        title: '使用 .dockerignore 排除不需要的文件',
        cmd: 'mkdir -p /tmp/ignore-test && cd /tmp/ignore-test && \\\nmkdir -p node_modules .git && \\\ndd if=/dev/zero of=node_modules/big-file bs=1M count=50 2>/dev/null && \\\ndd if=/dev/zero of=.git/objects bs=1M count=30 2>/dev/null && \\\ncat > .dockerignore << \'EOF\'\nnode_modules\n.git\n*.log\ndist\nEOF\ncat > Dockerfile << \'EOF\'\nFROM alpine:3.19\nCOPY . /app\nCMD ["ls", "/app"]\nEOF\ndocker build -t ignore-test . 2>&1 | grep "Sending build context"',
        output: 'Sending build context to Docker daemon  4.096kB',
        explain: '.dockerignore 排除了 node_modules（50MB）和 .git（30MB），build context 只有 4KB。不加 .dockerignore 会发送 80MB+ 到 daemon，构建慢且镜像大。',
      },
      {
        title: '多阶段构建实战——Go 应用',
        cmd: 'mkdir -p /tmp/go-multi && cat > /tmp/go-multi/main.go << \'EOF\'\npackage main\nimport "fmt"\nfunc main() { fmt.Println("Optimized!") }\nEOF\ncat > /tmp/go-multi/Dockerfile << \'EOF\'\nFROM golang:1.21 AS builder\nWORKDIR /src\nCOPY . .\nRUN CGO_ENABLED=0 go build -ldflags="-s -w" -o /app main.go\n\nFROM scratch\nCOPY --from=builder /app /app\nCMD ["/app"]\nEOF\ndocker build -t go-optimized /tmp/go-multi && \\\ndocker images go-optimized --format "{{.Size}}"',
        output: '3.47MB',
        explain: '阶段 1 用 golang:1.21（800MB+）编译。阶段 2 用 scratch（0B），只复制编译产物。最终镜像 3.47MB——比基础镜像还小！-ldflags="-s -w" 去掉调试信息进一步压缩。',
      },
    ],
    diagnosis: [
      {
        symptom: '镜像体积过大（超过 500MB）',
        cause: '使用了完整基础镜像（ubuntu/node:18），安装了不必要的依赖，没有多阶段构建。',
        fix: '切换到 alpine 或 slim 版本。多阶段构建。合并 RUN 并清理缓存。使用 .dockerignore。',
      },
      {
        symptom: '构建速度慢——每次构建都要几分钟',
        cause: '层缓存频繁失效（COPY . . 在 RUN npm install 之前），或 build context 太大。',
        fix: '先 COPY package*.json，再 RUN npm install，最后 COPY . .。添加 .dockerignore。利用 --mount=type=cache 缓存 npm/pip 下载。',
      },
      {
        symptom: '多阶段构建报错 "COPY --from=builder" 找不到文件',
        cause: '构建阶段的文件路径不对，或文件没有被正确生成。',
        fix: 'docker build --target builder -t debug-builder . 单独构建第一阶段。docker run --rm debug-builder ls -la /app 检查文件。确认 COPY 路径匹配。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 Node.js 应用的 Dockerfile，使用 alpine 基础镜像和多阶段构建，目标镜像小于 50MB',
        hint: 'FROM node:18 AS builder → FROM node:18-alpine',
        answer: 'cat > Dockerfile << \'EOF\'\nFROM node:18 AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build 2>/dev/null || true\n\nFROM node:18-alpine\nWORKDIR /app\nCOPY --from=builder /app/package*.json ./\nRUN npm ci --only=production\nCOPY --from=builder /app/dist ./dist 2>/dev/null || COPY --from=builder /app .\nCMD ["node", "dist/index.js"]\nEOF\ndocker build -t node-optimized .\ndocker images node-optimized',
      },
      {
        level: '进阶',
        task: '优化一个镜像：从 500MB+ 优化到 50MB 以下，使用所有优化技巧',
        hint: 'alpine + 合并 RUN + .dockerignore + 多阶段构建',
        answer: '# 优化前: FROM ubuntu:22.04 + apt install nodejs npm (约 500MB)\n# 优化后:\n# 1. .dockerignore 排除 node_modules .git\n# 2. 多阶段构建\n# 3. FROM node:18-alpine (最终阶段)\n# 4. 合并 RUN + --no-install-recommends\n# 5. npm ci --only=production\ndocker history <optimized-image>  # 验证层数减少\ndocker images <optimized-image>  # 验证体积',
      },
    ],
  },

  "uUPYXmwu27SBPqKZx6U_q": {
    mentalModel: 'HEALTHCHECK 是"容器的体温计"：Docker 定期执行检查命令，healthy 表示正常，unhealthy 表示异常。配合 restart policy 或编排系统自动处理不健康的容器。',
    handsOn: [
      {
        title: '在 Dockerfile 中添加健康检查',
        cmd: 'mkdir -p /tmp/health-test && cat > /tmp/health-test/Dockerfile << \'EOF\'\nFROM nginx:alpine\nHEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \\\n  CMD wget -qO- http://localhost:80/ || exit 1\nCMD ["nginx", "-g", "daemon off;"]\nEOF\ndocker build -t health-test /tmp/health-test && \\\ndocker run -d --name ht health-test',
        output: 'Successfully built abc123\na1b2c3d4e5f6',
        explain: 'HEALTHCHECK 参数：--interval 检查间隔（10s），--timeout 单次超时（3s），--start-period 启动宽限期（5s），--retries 连续失败次数（3 次后标记 unhealthy）。wget 检查 80 端口是否响应。',
      },
      {
        title: '查看健康检查状态',
        cmd: 'sleep 15 && docker inspect --format "{{.State.Health.Status}}" ht && \\\ndocker inspect --format "{{json .State.Health}}" ht | python3 -m json.tool 2>/dev/null | head -15',
        output: 'healthy\n{\n  "Status": "healthy",\n  "FailingStreak": 0,\n  "Log": [\n    {"ExitCode": 0, "Output": ""},\n    {"ExitCode": 0, "Output": ""}\n  ]\n}',
        explain: 'Status: healthy 表示健康。FailingStreak: 0 表示没有连续失败。Log 记录每次检查的结果（ExitCode 0 = 成功）。start-period 内状态是 starting。',
      },
      {
        title: '用 docker run 命令行添加健康检查（不改 Dockerfile）',
        cmd: 'docker run -d --name ht-cli \\\n  --health-cmd "wget -qO- http://localhost/ || exit 1" \\\n  --health-interval 10s \\\n  --health-timeout 3s \\\n  --health-retries 3 \\\n  nginx:alpine && \\\nsleep 15 && docker ps --filter "health=healthy" --format "{{.Names}}: {{.Status}}"',
        output: 'ht-cli: Up 16 seconds (healthy)',
        explain: '--health-cmd 命令行添加健康检查（不需要改 Dockerfile）。docker ps 的 STATUS 列显示 (healthy) 或 (unhealthy)。--filter "health=healthy" 只看健康容器。',
      },
      {
        title: '模拟健康检查失败',
        cmd: 'docker exec ht sh -c "rm /usr/share/nginx/html/index.html" && \\\nsleep 35 && docker inspect --format "{{.State.Health.Status}}" ht',
        output: 'unhealthy',
        explain: '删除 index.html 后 Nginx 返回 403/404，wget 返回非 0 退出码。连续 3 次失败后标记为 unhealthy。生产环境中编排系统（如 Swarm/K8s）会自动重启 unhealthy 容器。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器一直是 starting 状态，永远不到 healthy',
        cause: '--start-period 太短，应用在宽限期内没启动完。或健康检查命令本身有问题（curl 没安装、端口不对）。',
        fix: '增大 --start-period（如 30s 或 60s）。docker exec 手动运行健康检查命令验证。确保容器内有 curl/wget。',
      },
      {
        symptom: '容器标记为 unhealthy 但没有自动重启',
        cause: 'Docker 本身不会自动重启 unhealthy 容器。需要 restart policy + 外部工具（如 Swarm、K8s、autoheal）。',
        fix: 'Docker Swarm：自动替换 unhealthy 任务。K8s：livenessProbe + restartPolicy。Docker standalone：用 willfarrell/autoheal 容器监控并重启。',
      },
      {
        symptom: '健康检查命令在容器内执行失败',
        cause: '容器内没有 curl/wget。或健康检查 URL 不正确（端口、路径错误）。',
        fix: 'Dockerfile 中安装 curl/wget。用 --health-cmd "wget -qO- http://localhost:PORT/health" 确保端口正确。docker exec 手动测试。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '运行 nginx 容器并添加健康检查（每 5 秒检查一次），等待变成 healthy',
        hint: '--health-cmd + --health-interval',
        answer: 'docker run -d --name hc-test \\\n  --health-cmd "wget -qO- http://localhost/ || exit 1" \\\n  --health-interval 5s \\\n  --health-timeout 3s \\\n  --health-retries 3 \\\n  nginx:alpine\nsleep 20\ndocker ps --format "{{.Names}}: {{.Status}}" | grep hc-test\n# 应显示 (healthy)\ndocker rm -f hc-test',
      },
      {
        level: '进阶',
        task: '写一个 Dockerfile，健康检查应用自定义端口（3000），用 HEALTHCHECK 指令和 ENV 配合',
        hint: 'ENV PORT=3000 + HEALTHCHECK CMD curl localhost:${PORT}',
        answer: 'cat > Dockerfile << \'EOF\'\nFROM node:18-alpine\nENV PORT=3000\nWORKDIR /app\nCOPY . .\nRUN npm ci --only=production\nHEALTHCHECK --interval=10s --timeout=3s --start-period=10s \\\n  CMD wget -qO- http://localhost:${PORT}/health || exit 1\nEXPOSE ${PORT}\nCMD ["node", "server.js"]\nEOF',
      },
    ],
  },

  "jhwe-xfVc-C7qy8YuS5dZ": {
    mentalModel: '镜像优化进阶是"极致瘦身术"：用 BuildKit 缓存挂载（加速依赖安装）、distroless/scratch 基础镜像（最小攻击面）、docker-slim 自动分析精简。',
    handsOn: [
      {
        title: 'BuildKit 缓存挂载——加速依赖安装',
        cmd: 'mkdir -p /tmp/cache-mount && cat > /tmp/cache-mount/Dockerfile << \'EOF\'\n# syntax=docker/dockerfile:1\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN --mount=type=cache,target=/root/.npm \\\n    npm ci --only=production\nCOPY . .\nCMD ["node", "server.js"]\nEOF\nDOCKER_BUILDKIT=1 docker build -t cache-mount-test /tmp/cache-mount 2>&1 | tail -5',
        output: 'Successfully built abc123\nSuccessfully tagged cache-mount-test:latest',
        explain: '--mount=type=cache 挂载 npm 缓存目录。第一次构建下载依赖到缓存，后续构建直接复用（即使 Dockerfile 变化）。比层缓存更精细——只缓存 npm 下载，不缓存代码变化。',
      },
      {
        title: '使用 distroless 基础镜像',
        cmd: 'mkdir -p /tmp/distroless && cat > /tmp/distroless/Dockerfile << \'EOF\'\nFROM node:18 AS builder\nWORKDIR /app\nCOPY . .\nRUN npm ci --only=production\n\nFROM gcr.io/distroless/nodejs18-debian12\nWORKDIR /app\nCOPY --from=builder /app .\nCMD ["server.js"]\nEOF\ndocker build -t distroless-test /tmp/distroless 2>&1 | tail -3',
        output: 'Successfully built def456\nSuccessfully tagged distroless-test:latest',
        explain: 'distroless 镜像只包含运行时，没有 shell、包管理器、系统工具。攻击面极小（没有 sh 就不能 docker exec 进入）。但调试困难——适合生产环境。',
      },
      {
        title: '分析镜像层——找出最大的层',
        cmd: 'docker history node:18-alpine --no-trunc --format "table {{.Size}}\t{{.CreatedBy}}" | head -10',
        output: 'SIZE      CREATED BY\n7.73MB    ADD file:... in /\n120MB     node install\n15MB      npm packages\n23B       CMD ["node"]',
        explain: 'docker history 按层显示大小。最大的层是 npm packages（15MB）和 node install（120MB）。优化思路：用 alpine 版本（更小的 node install）、只安装生产依赖（npm ci --only=production）。',
      },
      {
        title: '使用 docker image inspect 分析镜像元数据',
        cmd: 'docker inspect node:18-alpine --format "{{.Architecture}} / {{.Os}} / Layers: {{len .RootFS.Layers}}"',
        output: 'amd64 / linux / Layers: 6',
        explain: 'Architecture 是 CPU 架构（amd64/arm64）。Layers 数量影响构建和推送速度。层数越少越好（合并 RUN 减少层数）。6 层是合理的。',
      },
    ],
    diagnosis: [
      {
        symptom: 'BuildKit 缓存挂载不生效',
        cause: '没有启用 BuildKit。DOCKER_BUILDKIT=0 或旧版本 Docker 默认不启用。',
        fix: '设置 DOCKER_BUILDKIT=1 环境变量。或在 /etc/docker/daemon.json 加 {"features":{"buildkit":true}}。Docker 23.0+ 默认启用。',
      },
      {
        symptom: 'distroless 镜像中无法执行 docker exec',
        cause: 'distroless 没有 shell（/bin/sh 不存在）。无法交互式进入容器。',
        fix: '用 docker exec 执行静态二进制（如 /healthcheck）。或用 debug 版本：gcr.io/distroless/nodejs18-debian12:debug（包含 busybox shell）。',
      },
      {
        symptom: '多阶段构建后应用缺少系统库（如 libc）',
        cause: '最终阶段用了 scratch 或 distroless，但应用依赖系统库（如 glibc、OpenSSL）。',
        fix: '静态编译（Go: CGO_ENABLED=0）。或用 alpine 代替 scratch（包含 musl libc）。或 COPY --from=builder 所需的 .so 文件。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker history 分析 nginx:alpine 和 nginx:latest 的层结构，对比总大小和层数',
        hint: 'docker history --format',
        answer: 'echo "=== nginx:alpine ===" && docker history nginx:alpine --format "{{.Size}}" && echo "Total layers:" && docker history nginx:alpine | wc -l\necho "=== nginx:latest ===" && docker history nginx:latest --format "{{.Size}}" && echo "Total layers:" && docker history nginx:latest | wc -l',
      },
      {
        level: '进阶',
        task: '写一个使用 BuildKit 缓存挂载的 Python 应用 Dockerfile，加速 pip install',
        hint: 'RUN --mount=type=cache,target=/root/.cache/pip',
        answer: 'cat > Dockerfile << \'EOF\'\n# syntax=docker/dockerfile:1\nFROM python:3.11-alpine\nWORKDIR /app\nCOPY requirements.txt .\nRUN --mount=type=cache,target=/root/.cache/pip \\\n    pip install -r requirements.txt\nCOPY . .\nCMD ["python", "app.py"]\nEOF\nDOCKER_BUILDKIT=1 docker build -t py-cached .',
      },
    ],
  },

  "b-LwyYiegbF0jIrn7HYRv": {
    mentalModel: '健康检查进阶是"自动化运维的眼睛"：不仅检查"活着"（liveness），还检查"准备好接受请求"（readiness）。配合编排系统实现零停机部署。',
    handsOn: [
      {
        title: 'Dockerfile 中的完整健康检查配置',
        cmd: 'cat << \'EOF\'\nFROM node:18-alpine\n\n# 安装 curl（健康检查需要）\nRUN apk add --no-cache curl\n\nWORKDIR /app\nCOPY . .\nRUN npm ci --only=production\n\n# 健康检查\nHEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=3 \\\n  CMD curl -f http://localhost:3000/health || exit 1\n\nEXPOSE 3000\nCMD ["node", "server.js"]\nEOF',
        output: '# Dockerfile with HEALTHCHECK',
        explain: '完整配置：每 15 秒检查一次，超时 5 秒，启动宽限期 30 秒，连续 3 次失败标记 unhealthy。curl -f 对 4xx/5xx 返回非 0 退出码。/health 端点应该检查应用和依赖（数据库、Redis）的状态。',
      },
      {
        title: 'docker-compose 中的健康检查和依赖',
        cmd: 'cat << \'EOF\'\nservices:\n  api:\n    build: .\n    ports:\n      - "3000:3000"\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]\n      interval: 10s\n      timeout: 5s\n      retries: 3\n      start_period: 30s\n    depends_on:\n      db:\n        condition: service_healthy\n\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_PASSWORD: secret\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready -U postgres"]\n      interval: 5s\n      timeout: 3s\n      retries: 5\nEOF',
        output: '# docker-compose.yml with healthcheck dependencies',
        explain: 'db 的 healthcheck 用 pg_isready 检查 PostgreSQL 是否就绪。api 的 depends_on condition: service_healthy 等 db 健康后才启动。避免应用启动时连接数据库失败。',
      },
      {
        title: '编写应用健康检查端点',
        cmd: 'cat << \'EOF\'\n// Express.js 健康检查端点示例\nconst express = require("express");\nconst app = express();\n\napp.get("/health", async (req, res) => {\n  const checks = {\n    app: true,\n    database: await checkDatabase(),\n    redis: await checkRedis(),\n  };\n  const healthy = Object.values(checks).every(Boolean);\n  res.status(healthy ? 200 : 503).json({\n    status: healthy ? "healthy" : "unhealthy",\n    checks,\n    uptime: process.uptime(),\n  });\n});\nEOF',
        output: '// Express.js health check endpoint',
        explain: '健康检查端点应该：1. 检查应用本身（返回 200）。2. 检查关键依赖（数据库、缓存）。3. 任何依赖不健康返回 503。4. 包含 uptime 等诊断信息。5. 不要做重计算（要快速返回）。',
      },
      {
        title: '监控健康检查状态变化',
        cmd: 'docker events --filter "event=health_status" --format "{{.Time}} {{.Actor.Attributes.name}}: {{.Action}}" &\nsleep 20 && kill %1 2>/dev/null',
        output: '1705312200 ht: health_status: healthy\n1705312230 ht: health_status: unhealthy',
        explain: 'docker events 可以过滤 health_status 事件，监控容器健康状态变化。适合接入告警系统。health_status: healthy → unhealthy 表示服务异常。',
      },
    ],
    diagnosis: [
      {
        symptom: '健康检查端点返回 200 但应用实际不工作',
        cause: '健康检查只检查了应用进程，没有检查依赖（数据库、外部 API）。应用可能数据库连接断了但自身进程还在。',
        fix: '健康检查端点应该检查所有关键依赖。/health（完整检查）和 /ready（只检查就绪状态）分开。',
      },
      {
        symptom: '启动期间频繁标记 unhealthy 再恢复',
        cause: '--start-period 太短，应用还没完全启动就被检查。或 --retries 太少（1 次失败就标记 unhealthy）。',
        fix: '增大 --start-period（如 60s）。增大 --retries（如 5）。确保健康检查端点在应用未就绪时返回 503 而不是超时。',
      },
      {
        symptom: 'docker-compose 中 depends_on service_healthy 一直等不到',
        cause: '目标服务没有配置 healthcheck，或 healthcheck 一直失败（命令错误、依赖不可用）。',
        fix: '确认目标服务有 healthcheck 配置。docker inspect 查看健康状态。手动执行健康检查命令验证。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker-compose 启动 nginx + redis，redis 配置健康检查，nginx depends_on redis healthy',
        hint: 'healthcheck + depends_on condition: service_healthy',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - "8080:80"\n    depends_on:\n      cache:\n        condition: service_healthy\n  cache:\n    image: redis:7-alpine\n    healthcheck:\n      test: ["CMD", "redis-cli", "ping"]\n      interval: 5s\n      timeout: 3s\n      retries: 3\nEOF\ndocker compose up -d\ndocker compose ps\ndocker compose down',
      },
      {
        level: '进阶',
        task: '写一个 Node.js/Python 应用的 Dockerfile，包含完整的 HEALTHCHECK 和应用内 /health 端点',
        hint: 'HEALTHCHECK + curl + /health endpoint',
        answer: '# Dockerfile\nFROM node:18-alpine\nRUN apk add --no-cache curl\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nHEALTHCHECK --interval=10s --timeout=3s --start-period=15s --retries=3 \\\n  CMD curl -f http://localhost:3000/health || exit 1\nEXPOSE 3000\nCMD ["node", "server.js"]\n\n# server.js 中添加:\n# app.get("/health", (req, res) => res.json({ status: "ok", uptime: process.uptime() }))',
      },
    ],
  },

  "086zZYjtzdCaDHm-MkSqg": {
    mentalModel: '私有仓库是"企业内部的镜像商店"：不公开的镜像（公司内部应用、定制基础镜像）放在私有仓库。Docker Registry 是最简单的方案，Harbor 是企业级方案（带扫描、权限、复制）。',
    handsOn: [
      {
        title: '搭建简单的私有 Registry',
        cmd: 'docker run -d --name registry -p 5000:5000 \\\n  -v registry-data:/var/lib/registry \\\n  registry:2 && \\\nsleep 2 && curl -s http://localhost:5000/v2/_catalog',
        output: '{"repositories":[]}',
        explain: 'registry:2 是官方 Registry 镜像。-v registry-data 持久化镜像数据。/v2/_catalog 列出所有镜像（初始为空）。Registry 监听 5000 端口。',
      },
      {
        title: '推送镜像到私有 Registry',
        cmd: 'docker pull alpine:3.19 && \\\ndocker tag alpine:3.19 localhost:5000/myorg/alpine:3.19 && \\\ndocker push localhost:5000/myorg/alpine:3.19 && \\\ncurl -s http://localhost:5000/v2/_catalog',
        output: 'The push refers to repository [localhost:5000/myorg/alpine]\n...\n{"repositories":["myorg/alpine"]}',
        explain: '镜像名必须以 registry 地址开头（localhost:5000）。推送后在 catalog 中可见。可以加命名空间（myorg/）组织镜像。',
      },
      {
        title: '从私有 Registry 拉取镜像',
        cmd: 'docker rmi localhost:5000/myorg/alpine:3.19 && \\\ndocker pull localhost:5000/myorg/alpine:3.19 && \\\ndocker run --rm localhost:5000/myorg/alpine:3.19 cat /etc/os-release | head -2',
        output: '3.19: Pulling from myorg/alpine\nNAME="Alpine Linux"\nVERSION_ID=3.19.0',
        explain: '从私有 Registry 拉取：docker pull registry-address/image:tag。可以删除本地镜像后重新拉取验证。Registry 中的数据通过卷持久化。',
      },
      {
        title: '配置 Registry 认证',
        cmd: 'mkdir -p /tmp/registry-auth && \\\ndocker run --entrypoint htpasswd httpd:2 -Bbn testuser testpassword > /tmp/registry-auth/htpasswd && \\\ncat /tmp/registry-auth/htpasswd && \\\necho "=== 用认证启动 Registry ===" && \\\necho "docker run -d -p 5000:5000 -v registry-auth:/auth -e REGISTRY_AUTH=htpasswd -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd registry:2"',
        output: 'testuser:$2y$10$abc123...\n=== 用认证启动 Registry ===\n...',
        explain: 'htpasswd 生成密码文件。Registry 配置 REGISTRY_AUTH=htpasswd 启用认证。推送/拉取时需要 docker login localhost:5000。生产环境应配合 TLS（HTTPS）。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker push 到私有 Registry 报 "http: server gave HTTP response to HTTPS client"',
        cause: 'Docker 默认要求 Registry 使用 HTTPS。本地测试 Registry 用 HTTP，Docker 拒绝连接。',
        fix: '配置 insecure registry：编辑 /etc/docker/daemon.json 加 {"insecure-registries": ["localhost:5000"]}，重启 Docker。生产环境应配置 TLS 证书。',
      },
      {
        symptom: 'Registry 数据在容器删除后丢失',
        cause: '没有挂载卷持久化数据。Registry 容器删除后，/var/lib/registry 中的数据丢失。',
        fix: '-v registry-data:/var/lib/registry 挂载命名卷。或使用外部存储（S3、GCS）：REGISTRY_STORAGE_S3_BUCKET=my-bucket。',
      },
      {
        symptom: '推送大镜像很慢',
        cause: 'Registry 在本地网络，带宽有限。或镜像层数太多。',
        fix: '使用 alpine 基础镜像减小体积。配置 Registry 的并发上传参数。使用 CDN 分发。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '搭建私有 Registry，推送一个自定义镜像，然后删除本地镜像并重新拉取验证',
        hint: 'docker run registry:2 + docker tag + docker push',
        answer: 'docker run -d --name reg -p 5000:5000 registry:2\ndocker pull alpine:3.19\ndocker tag alpine:3.19 localhost:5000/test/alpine:latest\ndocker push localhost:5000/test/alpine:latest\ndocker rmi localhost:5000/test/alpine:latest\ndocker pull localhost:5000/test/alpine:latest\ndocker rm -f reg',
      },
      {
        level: '进阶',
        task: '用 docker-compose 搭建带认证的 Registry，配置 insecure-registries，测试登录、推送、拉取',
        hint: 'registry + htpasswd + daemon.json',
        answer: '# 1. 生成密码\nmkdir -p auth\ndocker run --entrypoint htpasswd httpd:2 -Bbn admin secret > auth/htpasswd\n\n# 2. docker-compose.yml\ncat > docker-compose.yml << \'EOF\'\nservices:\n  registry:\n    image: registry:2\n    ports:\n      - "5000:5000"\n    environment:\n      REGISTRY_AUTH: htpasswd\n      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd\n    volumes:\n      - ./auth:/auth\n      - registry-data:/var/lib/registry\nvolumes:\n  registry-data:\nEOF\n\n# 3. 配置 insecure registry\n# /etc/docker/daemon.json: {"insecure-registries":["localhost:5000"]}\n# sudo systemctl restart docker\n\n# 4. 测试\ndocker login localhost:5000  # admin/secret\ndocker tag alpine:3.19 localhost:5000/alpine:3.19\ndocker push localhost:5000/alpine:3.19',
      },
    ],
  },

  "78YFahP3Fg-c27reLkuK4": {
    mentalModel: '私有仓库进阶是"企业级镜像管理"：Harbor 提供镜像扫描（Trivy）、RBAC 权限控制、镜像签名、跨地域复制、垃圾回收——比 Docker Registry 功能丰富得多。',
    handsOn: [
      {
        title: 'Harbor 简介——企业级 Registry',
        cmd: 'cat << \'EOF\'\n# Harbor vs Docker Registry 功能对比\n# ┌─────────────┬───────────────┬───────────┐\n# │ 功能        │ Harbor        │ Registry  │\n# ├─────────────┼───────────────┼───────────┤\n# │ 镜像扫描    │ ✅ Trivy      │ ❌        │\n# │ RBAC 权限   │ ✅            │ 基础      │\n# │ 镜像签名    │ ✅ Notary     │ ❌        │\n# │ 镜像复制    │ ✅ 跨地域     │ ❌        │\n# │ Web UI      │ ✅            │ ❌        │\n# │ 垃圾回收    │ ✅ 定时       │ 手动      │\n# │ 配额管理    │ ✅            │ ❌        │\n# └─────────────┴───────────────┴───────────┘\nEOF',
        output: '# Harbor 功能对比表',
        explain: 'Harbor 是 CNCF 毕业项目，功能远超 Docker Registry。适合中大型企业：多项目管理、镜像漏洞扫描、跨数据中心复制、完整的审计日志。',
      },
      {
        title: '用 docker-compose 快速部署 Harbor',
        cmd: 'cat << \'EOF\'\n# 安装 Harbor（在线安装器）\n# 1. 下载安装器\ncurl -LO https://github.com/goharbor/harbor/releases/download/v2.10.0/harbor-online-installer.tgz\ntar xzf harbor-online-installer.tgz\ncd harbor\n\n# 2. 配置\ncp harbor.yml.tmpl harbor.yml\n# 编辑 harbor.yml：修改 hostname、密码、关闭 HTTPS（测试用）\n\n# 3. 安装\nsudo ./install.sh --with-trivy\n# 默认端口 80，admin/Harbor12345\nEOF',
        output: '# Harbor 安装步骤',
        explain: 'Harbor 用 docker-compose 部署（约 10 个容器）。--with-trivy 启用漏洞扫描。安装后访问 Web UI 管理项目、用户、镜像。默认 admin/Harbor12345（务必修改）。',
      },
      {
        title: '使用 Harbor 的工作流',
        cmd: 'cat << \'EOF\'\n# 1. 登录 Harbor\ndocker login harbor.example.com\n\n# 2. 推送镜像（项目名/镜像名:标签）\ndocker tag myapp:latest harbor.example.com/myproject/myapp:latest\ndocker push harbor.example.com/myproject/myapp:latest\n\n# 3. Harbor 自动扫描镜像漏洞（如果启用）\n# 4. 查看扫描报告（Web UI 或 API）\ncurl -u admin:password https://harbor.example.com/api/v2.0/projects/myproject/repositories/myapp/artifacts/latest/additions/vulnerabilities\nEOF',
        output: '# Harbor 使用工作流',
        explain: '镜像名格式：harbor-domain/project/image:tag。推送后 Harbor 自动触发 Trivy 扫描。扫描报告列出 CVE 漏洞和严重级别。可以配置策略：严重漏洞的镜像不允许部署。',
      },
      {
        title: '配置镜像复制规则',
        cmd: 'cat << \'EOF\'\n# Harbor 镜像复制：从 A 数据中心自动同步到 B 数据中心\n# 1. 在 Harbor A 添加目标 registry（Harbor B）\n# 2. 创建复制规则：\n#    - 源：项目 myproject\n#    - 目标：Harbor B\n#    - 触发：事件驱动（推送时自动复制）\n#    - 过滤：只复制 latest 和 release-* 标签\nEOF',
        output: '# Harbor 复制规则配置',
        explain: '复制规则实现跨地域镜像同步。事件驱动：推送新镜像时自动复制。定时：每天凌晨同步。过滤：只同步特定标签。适合多数据中心部署、灾备。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Harbor 安装失败——端口被占用',
        cause: 'Harbor 默认使用 80/443 端口，可能和其他服务冲突。',
        fix: '修改 harbor.yml 中的 http.port 和 https.port。或停止占用端口的服务。',
      },
      {
        symptom: 'Harbor 推送镜像报认证失败',
        cause: '项目（Project）不存在，或用户没有推送权限。Harbor 要求先创建项目再推送。',
        fix: '在 Web UI 创建项目。给用户分配项目成员角色（Developer 可以推送，Guest 只能拉取）。',
      },
      {
        symptom: 'Harbor 磁盘空间增长过快',
        cause: '镜像只增不减，没有配置垃圾回收和保留策略。',
        fix: '配置 Tag Retention 策略（如只保留最近 10 个标签）。定期运行垃圾回收（System Administration → Garbage Collection）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 Docker Registry 和 Harbor 的主要功能差异，说明在什么场景下选择哪个',
        hint: '功能对比表',
        answer: '# Docker Registry: 适合小团队/个人项目，只需基本推拉功能\n# Harbor: 适合中大型企业，需要漏洞扫描、权限控制、审计日志\n# 选择标准：团队规模、安全要求、是否需要多地域复制',
      },
      {
        level: '进阶',
        task: '用 docker-compose 部署 Docker Registry + 基本认证 + TLS 自签名证书',
        hint: 'openssl 生成证书 + registry 配置 TLS',
        answer: '# 1. 生成自签名证书\nmkdir -p certs\nopenssl req -newkey rsa:4096 -nodes -sha256 \\\n  -keyout certs/domain.key -x509 -days 365 \\\n  -out certs/domain.crt \\\n  -subj "/CN=registry.local"\n\n# 2. docker-compose.yml\ncat > docker-compose.yml << \'EOF\'\nservices:\n  registry:\n    image: registry:2\n    ports:\n      - "5000:5000"\n    environment:\n      REGISTRY_HTTP_TLS_CERTIFICATE: /certs/domain.crt\n      REGISTRY_HTTP_TLS_KEY: /certs/domain.key\n    volumes:\n      - ./certs:/certs\n      - registry-data:/var/lib/registry\nvolumes:\n  registry-data:\nEOF\n\n# 3. 信任证书\nsudo cp certs/domain.crt /usr/local/share/ca-certificates/\nsudo update-ca-certificates\nsudo systemctl restart docker',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 08 — 编排（Swarm + Kubernetes）
  // ═══════════════════════════════════════════════

  "woemCQmWTR-hIoWAci3d5": {
    mentalModel: 'Docker Swarm 是"小型交响乐团指挥"：把多台 Docker 主机组成集群，用 docker service 声明"我要 3 个 Nginx 副本"，Swarm 自动调度、负载均衡、故障自愈。',
    handsOn: [
      {
        title: '初始化 Swarm 集群',
        cmd: 'docker swarm init --advertise-addr 192.168.1.100',
        output: 'Swarm initialized: current node (abc123) is now a manager.\nTo add a worker to this swarm, run the following command:\n  docker swarm join --token SWMTKN-1-xxx 192.168.1.100:2377',
        explain: 'swarm init 把当前节点变成 Manager（管理者）。--advertise-addr 指定其他节点连接的地址。输出的 join token 用于添加 Worker 节点。单机也可以用 Swarm（用于 service 功能）。',
      },
      {
        title: '创建 Service（声明式副本管理）',
        cmd: 'docker service create --name web --replicas 3 -p 8080:80 nginx:alpine && \\\nsleep 3 && docker service ls && \\\ndocker service ps web',
        output: 'NAME   IMAGE         MODE       REPLICAS\nweb    nginx:alpine  replicated 3/3\n\nNAME    IMAGE         NODE     STATUS\nweb.1   nginx:alpine  node1    Running\nweb.2   nginx:alpine  node2    Running\nweb.3   nginx:alpine  node1    Running',
        explain: 'service create 创建服务（不是单个容器，而是一组容器）。--replicas 3 表示要 3 个副本。Swarm 自动分配到不同节点。REPLICAS 3/3 表示 3 个都在运行。',
      },
      {
        title: '扩缩容',
        cmd: 'docker service scale web=5 && \\\nsleep 2 && docker service ls',
        output: 'web scaled to 5\nNAME   IMAGE         MODE       REPLICAS\nweb    nginx:alpine  replicated 5/5',
        explain: 'docker service scale 调整副本数。从 3 扩到 5，Swarm 自动在节点上创建新容器。缩容时 Swarm 选择性地停止多余容器。比手动 docker run 方便得多。',
      },
      {
        title: '滚动更新',
        cmd: 'docker service update --image nginx:1.25-alpine --update-delay 10s web && \\\ndocker service ps web',
        output: 'web\nNAME    IMAGE               STATUS\nweb.1   nginx:1.25-alpine   Running  (updated 10 seconds ago)\nweb.2   nginx:1.25-alpine   Running  (updated 20 seconds ago)',
        explain: 'service update 触发滚动更新：逐个替换容器（每次更新一个，间隔 10s）。零停机更新。--update-delay 控制速度。如果新版本有问题，docker service rollback web 回滚。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker service create 报 "This node is not a swarm manager"',
        cause: '当前节点没有加入 Swarm，或加入的是 Worker 角色（只有 Manager 能管理服务）。',
        fix: 'docker swarm init（创建新集群）或 docker swarm join（加入现有集群）。docker info | grep Swarm 确认状态。',
      },
      {
        symptom: 'Service 副本数不够（REPLICAS 2/3）',
        cause: '节点资源不足、镜像拉取失败、或节点不健康。',
        fix: 'docker service ps web 查看每个副本状态。docker service logs web 查看错误。检查节点状态：docker node ls。',
      },
      {
        symptom: '滚动更新后应用报错',
        cause: '新版本镜像有问题（bug、配置变化、依赖不兼容）。',
        fix: 'docker service rollback web 立即回滚到上一版本。docker service update --rollback 也可以。然后排查新版本问题。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '初始化 Swarm，创建 3 副本的 nginx service，扩到 5 个，再缩到 2 个',
        hint: 'docker swarm init + service create + service scale',
        answer: 'docker swarm init\ndocker service create --name web --replicas 3 -p 8080:80 nginx:alpine\ndocker service ls\ndocker service scale web=5\ndocker service ls\ndocker service scale web=2\ndocker service rm web\ndocker swarm leave --force',
      },
      {
        level: '进阶',
        task: '创建 service 并配置滚动更新策略：每次更新 2 个副本，间隔 5 秒',
        hint: '--update-parallelism + --update-delay',
        answer: 'docker service create --name web --replicas 6 \\\n  --update-parallelism 2 --update-delay 5s \\\n  -p 8080:80 nginx:alpine\ndocker service update --image nginx:1.25-alpine web\n# 观察滚动过程：每 5 秒更新 2 个\ndocker service ps web',
      },
    ],
  },

  "M5UG-ZcyhBPbksZd0ZdNt": {
    mentalModel: 'Docker Swarm 进阶是"声明式集群管理"：用 docker stack deploy + compose 文件定义整个集群应用。类似 docker-compose，但跨多节点运行。',
    handsOn: [
      {
        title: '用 Stack 部署多服务应用',
        cmd: 'cat > /tmp/stack.yml << \'EOF\'\nversion: "3.8"\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - "8080:80"\n    deploy:\n      replicas: 3\n      restart_policy:\n        condition: on-failure\n        delay: 5s\n      resources:\n        limits:\n          cpus: "0.5"\n          memory: 128M\n  redis:\n    image: redis:7-alpine\n    deploy:\n      replicas: 1\n      placement:\n        constraints:\n          - node.role == manager\nEOF\ndocker stack deploy -c /tmp/stack.yml myapp',
        output: 'Creating network myapp_default\nCreating service myapp_web\nCreating service myapp_redis',
        explain: 'docker stack deploy 用 compose 文件部署到 Swarm。deploy 节配置副本数、重启策略、资源限制。placement 控制调度（如只在 Manager 节点运行 Redis）。',
      },
      {
        title: '查看 Stack 状态',
        cmd: 'docker stack ls && \\\ndocker stack services myapp && \\\ndocker stack ps myapp',
        output: 'NAME    SERVICES\nmyapp   2\n\nNAME       IMAGE          REPLICAS\nmyapp_web  nginx:alpine   3/3\nmyapp_redis redis:7-alpine 1/1',
        explain: 'docker stack ls 列出所有 Stack。stack services 显示每个服务的副本状态。stack ps 显示每个任务（容器）的详细状态和所在节点。',
      },
      {
        title: '更新 Stack（修改 compose 文件后重新部署）',
        cmd: '# 修改 replicas 为 5\ndocker stack deploy -c /tmp/stack.yml myapp && \\\ndocker stack services myapp',
        output: 'Updating service myapp_web (id: abc123)\nNAME       IMAGE          REPLICAS\nmyapp_web  nginx:alpine   5/5',
        explain: '重新执行 stack deploy 会对比当前状态和目标状态，只更新变化的部分（如副本数从 3 变 5）。不会重建没变化的服务。',
      },
      {
        title: '配置 Swarm Secret（安全传递密码）',
        cmd: 'echo "super-secret-password" | docker secret create db_password - && \\\ndocker service create --name db \\\n  --secret db_password \\\n  -e POSTGRES_PASSWORD_FILE=/run/secrets/db_password \\\n  postgres:16-alpine && \\\ndocker exec $(docker ps -q -f name=db) cat /run/secrets/db_password',
        output: 'super-secret-password',
        explain: 'Swarm Secret 安全传递敏感信息（密码、证书）。Secret 以文件形式挂载到 /run/secrets/。比环境变量安全（不出现在 docker inspect 中）。应用读取文件内容作为密码。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker stack deploy 报 "network not found"',
        cause: 'compose 文件引用了外部网络，但该网络在 Swarm 中不存在。',
        fix: '在 compose 文件中声明网络（driver: overlay），或先创建：docker network create -d overlay mynet。',
      },
      {
        symptom: 'Stack 中的服务无法互相通信',
        cause: '服务不在同一个 overlay 网络中。Stack 默认创建 overlay 网络，但手动指定 external 网络时可能配置错误。',
        fix: '确保服务在同一网络下。docker network inspect 确认。overlay 网络支持跨节点通信。',
      },
      {
        symptom: 'Secret 创建后服务读不到',
        cause: '服务创建时没有 --secret 参数，或 Secret 名和文件路径不匹配。',
        fix: 'docker service update --secret-add my_secret myservice。Secret 文件路径：/run/secrets/<secret_name>。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker stack 部署 nginx + redis，nginx 3 副本，redis 1 副本',
        hint: 'docker-compose.yml with deploy section + docker stack deploy',
        answer: 'cat > stack.yml << \'EOF\'\nversion: "3.8"\nservices:\n  web:\n    image: nginx:alpine\n    ports: ["8080:80"]\n    deploy:\n      replicas: 3\n  redis:\n    image: redis:7-alpine\n    deploy:\n      replicas: 1\nEOF\ndocker swarm init 2>/dev/null\ndocker stack deploy -c stack.yml myapp\ndocker stack services myapp\ndocker stack rm myapp',
      },
      {
        level: '进阶',
        task: '用 Swarm Secret 传递 Redis 密码，验证容器内能读取',
        hint: 'docker secret create + --secret + /run/secrets/',
        answer: 'echo "redis-secret" | docker secret create redis_pass -\ndocker service create --name redis-secure \\\n  --secret redis_pass \\\n  redis:7-alpine \\\n  redis-server --requirepass "$(cat /run/secrets/redis_pass)"\n# 验证\ndocker exec $(docker ps -q -f name=redis) redis-cli -a redis-secret PING',
      },
    ],
  },

  "ks6PFN-0Z9zH7gtWaWgxz": {
    mentalModel: 'Docker Swarm 高级是"集群运维"：节点管理（添加/移除/排空）、overlay 网络（跨主机通信）、滚动更新策略（零停机）、故障自愈（节点挂了自动迁移容器）。',
    handsOn: [
      {
        title: '管理 Swarm 节点',
        cmd: 'docker node ls',
        output: 'ID          HOSTNAME   STATUS   AVAILABILITY   MANAGER STATUS\nabc123 *    manager1   Ready    Active         Leader\ndef456      worker1    Ready    Active\nghi789      worker2    Ready    Active',
        explain: 'docker node ls 显示所有节点。Leader 是主 Manager（决策者）。AVAILABILITY: Active（正常调度）、Pause（暂停调度）、Drain（排空——迁移现有容器到其他节点）。',
      },
      {
        title: '排空节点（维护模式）',
        cmd: 'docker node update --availability drain worker1 && \\\ndocker node ls && \\\necho "=== worker1 上的容器已迁移 ===" && \\\ndocker service ps web',
        output: 'worker1  Drain  Active\n\nNAME    NODE      STATUS\nweb.1   worker2   Running\nweb.2   manager1  Running  ← 从 worker1 迁移过来\nweb.3   worker2   Running',
        explain: 'drain 排空节点：Swarm 把该节点上的容器迁移到其他节点。适合节点维护（升级系统、更换硬件）。维护完成后 docker node update --availability active worker1 恢复。',
      },
      {
        title: 'Overlay 网络——跨节点通信',
        cmd: 'docker network create -d overlay --attachable app-net && \\\ndocker service create --name api --network app-net node:18-alpine node -e "console.log(\'api running\')" && \\\ndocker service create --name worker --network app-net alpine sh -c "ping -c 2 api"',
        output: 'PING api (10.0.0.3): 56 data bytes\n64 bytes from 10.0.0.3: seq=0 ttl=64 time=0.3ms',
        explain: 'overlay 网络跨多个 Docker 主机通信。--attachable 允许独立容器也加入（不仅是 service）。容器在不同物理节点上也能用服务名互相访问。',
      },
      {
        title: '配置故障自愈',
        cmd: 'docker service create --name resilient \\\n  --replicas 3 \\\n  --restart-condition on-failure \\\n  --restart-delay 5s \\\n  --restart-max-attempts 3 \\\n  nginx:alpine && \\\ndocker service inspect --format "{{.Spec.TaskTemplate.RestartPolicy}}" resilient',
        output: '{on-failure 5000000000 3 0}',
        explain: '--restart-condition on-failure 只在异常退出时重启。--restart-delay 5s 重启间隔。--restart-max-attempts 3 最多重试 3 次。节点挂了，Swarm 自动在其他节点重建容器。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Swarm Manager 节点挂了，集群不可用',
        cause: '只有一个 Manager 节点（单点故障）。Raft 共识需要多数 Manager 存活。',
        fix: '生产环境至少 3 个 Manager 节点（容忍 1 个挂掉）。docker swarm join-token manager 添加 Manager。',
      },
      {
        symptom: 'Overlay 网络性能差',
        cause: 'Overlay 网络使用 VXLAN 封装，有一定开销（约 5-10%）。加密 overlay 网络开销更大。',
        fix: '高性能场景使用 host 网络模式（--network host）或 macvlan。不加密 overlay（--opt encrypted=false）。',
      },
      {
        symptom: '节点 drain 后容器迁移很慢',
        cause: '镜像需要在新节点上拉取（如果新节点没有缓存该镜像）。',
        fix: '使用私有 Registry 加速拉取。预拉取常用镜像到所有节点。docker service update --image 触发重新调度。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 Swarm 所有节点，查看角色（Manager/Worker）和状态',
        hint: 'docker node ls',
        answer: 'docker swarm init 2>/dev/null\ndocker node ls\n# 单机只有一个 Manager\ndocker node inspect self --format "{{.ManagerStatus.Level}}"',
      },
      {
        level: '进阶',
        task: '创建 overlay 网络，在其上运行两个 service，验证跨节点通信',
        hint: 'docker network create -d overlay + docker service create --network',
        answer: 'docker network create -d overlay test-overlay\ndocker service create --name s1 --network test-overlay alpine sleep 3600\ndocker service create --name s2 --network test-overlay alpine sleep 3600\n# 验证通信（在同一节点上 exec）\ndocker exec $(docker ps -q -f name=s1) ping -c 2 s2\ndocker service rm s1 s2\ndocker network rm test-overlay',
      },
    ],
  },

  "wZcCW1ojGzUakHCv2AaI1": {
    mentalModel: 'Kubernetes（K8s）是"容器编排的操作系统"：Swarm 是小团队的项目经理，K8s 是大公司的 CTO——功能全面但复杂。Pod 是最小部署单元，Deployment 管副本，Service 管网络。',
    handsOn: [
      {
        title: '验证 kubectl 和集群连接',
        cmd: 'kubectl version --short 2>/dev/null || kubectl version && \\\nkubectl cluster-info',
        output: 'Client Version: v1.28.4\nServer Version: v1.28.4\nKubernetes control plane is running at https://127.0.0.1:6443',
        explain: 'kubectl 是 K8s 命令行工具。version 显示客户端和服务端版本。cluster-info 显示控制平面地址。本地开发用 minikube、kind 或 Docker Desktop 内置 K8s。',
      },
      {
        title: '创建第一个 Pod',
        cmd: 'kubectl run nginx --image=nginx:alpine --port=80 && \\\nkubectl get pods -o wide',
        output: 'pod/nginx created\nNAME    READY   STATUS    IP          NODE\nnginx   1/1     Running   10.244.0.5  minikube',
        explain: 'kubectl run 创建单个 Pod（K8s 最小部署单元）。Pod 包含一个或多个容器。READY 1/1 表示 1 个容器就绪。Pod 有集群内部 IP（10.244.x.x）。',
      },
      {
        title: '创建 Deployment（管理 Pod 副本）',
        cmd: 'kubectl create deployment web --image=nginx:alpine --replicas=3 && \\\nkubectl get deployments && \\\nkubectl get pods -l app=web',
        output: 'deployment.apps/web created\nNAME   READY   UP-TO-DATE   AVAILABLE\nweb    3/3     3            3\n\nNAME                  READY   STATUS\nweb-6d4f5b7c8-abc12   1/1     Running\nweb-6d4f5b7c8-def34   1/1     Running\nweb-6d4f5b7c8-ghi56   1/1     Running',
        explain: 'Deployment 管理一组相同 Pod 的副本。3/3 表示 3 个副本都就绪。Pod 名自动加哈希后缀。Deployment 自动处理故障（Pod 挂了自动创建新的）。',
      },
      {
        title: '创建 Service（暴露 Pod 网络）',
        cmd: 'kubectl expose deployment web --type=NodePort --port=80 && \\\nkubectl get services web',
        output: 'service/web exposed\nNAME   TYPE       CLUSTER-IP      PORT(S)        AGE\nweb    NodePort   10.96.123.45    80:31234/TCP   10s',
        explain: 'Service 提供稳定的访问入口（IP + 端口）。Pod IP 会变，Service IP 不变。NodePort 类型在节点上开放端口（31234）。LoadBalancer 类型在云上自动创建负载均衡器。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Pod 状态一直是 Pending',
        cause: '集群资源不足（CPU/内存不够调度）、没有匹配的节点（nodeSelector 不匹配）、PVC 未绑定。',
        fix: 'kubectl describe pod <name> 查看 Events。检查节点资源：kubectl describe nodes。调整 requests/limits。',
      },
      {
        symptom: 'Pod 状态是 CrashLoopBackOff',
        cause: '容器反复启动失败退出。可能是应用 bug、配置错误、依赖不可用。',
        fix: 'kubectl logs <pod> 查看日志。kubectl logs <pod> --previous 查看上一次崩溃的日志。kubectl describe pod 查看退出码。',
      },
      {
        symptom: 'Service 无法访问 Pod',
        cause: 'Service 的 selector 和 Pod 的 label 不匹配。或 Pod 还没就绪（readiness probe 没通过）。',
        fix: 'kubectl get endpoints <service> 查看 Service 关联的 Pod。确认 label 匹配。kubectl describe pod 检查 readiness 状态。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建 Deployment（3 副本 nginx），创建 Service，用 curl 访问',
        hint: 'kubectl create deployment + kubectl expose + kubectl port-forward',
        answer: 'kubectl create deployment nginx --image=nginx:alpine --replicas=3\nkubectl expose deployment nginx --port=80\nkubectl port-forward svc/nginx 8080:80 &\ncurl http://localhost:8080\nkill %1\nkubectl delete deployment nginx\nkubectl delete svc nginx',
      },
      {
        level: '进阶',
        task: '用 YAML 文件创建 Deployment + Service，配置资源限制和健康检查',
        hint: 'kubectl apply -f',
        answer: 'cat > deployment.yml << \'EOF\'\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:alpine\n        ports:\n        - containerPort: 80\n        resources:\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n        livenessProbe:\n          httpGet:\n            path: /\n            port: 80\n          initialDelaySeconds: 5\n          periodSeconds: 10\nEOF\nkubectl apply -f deployment.yml\nkubectl get pods',
      },
    ],
  },

  "-8wAzF6_3gruiM3VYMvB0": {
    mentalModel: 'K8s 进阶是"声明式配置管理"：YAML 文件声明"我要什么"（而非"怎么做"），K8s 自动维护目标状态。ConfigMap/Secret 管理配置，PV/PVC 管理存储，HPA 自动扩缩容。',
    handsOn: [
      {
        title: 'ConfigMap——外部化配置',
        cmd: 'kubectl create configmap app-config --from-literal=DATABASE_URL=postgres://db:5432/mydb --from-literal=LOG_LEVEL=info && \\\nkubectl get configmap app-config -o yaml | head -15',
        output: 'apiVersion: v1\nkind: ConfigMap\ndata:\n  DATABASE_URL: postgres://db:5432/mydb\n  LOG_LEVEL: info',
        explain: 'ConfigMap 存储非敏感配置。可以注入为环境变量或挂载为文件。修改 ConfigMap 后重启 Pod 生效（或用 watch 机制自动重载）。',
      },
      {
        title: 'Secret——安全存储敏感信息',
        cmd: 'kubectl create secret generic db-secret --from-literal=POSTGRES_PASSWORD=super-secret && \\\nkubectl get secret db-secret -o yaml',
        output: 'apiVersion: v1\nkind: Secret\ntype: Opaque\ndata:\n  POSTGRES_PASSWORD: c3VwZXItc2VjcmV0  # base64 编码',
        explain: 'Secret 存储敏感信息（密码、证书、Token）。数据以 base64 编码存储（不是加密！）。生产环境用 Sealed Secrets 或 External Secrets Operator 加密。',
      },
      {
        title: 'HPA——自动扩缩容',
        cmd: 'kubectl autoscale deployment web --min=2 --max=10 --cpu-percent=70 && \\\nkubectl get hpa',
        output: 'horizontalpodautoscaler.autoscaling/web autoscaled\nNAME   REFERENCE        TARGETS   MINPODS   MAXPODS   REPLICAS\nweb    Deployment/web   5%/70%    2         10        3',
        explain: 'HPA（Horizontal Pod Autoscaler）根据 CPU/内存使用率自动调整副本数。CPU 使用率 >70% 扩容，<30% 缩容。MINPODS/MAXPODS 设定边界。需要 metrics-server 提供指标数据。',
      },
      {
        title: 'PV/PVC——持久化存储',
        cmd: 'cat << \'EOF\' | kubectl apply -f -\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-data\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\nEOF\nkubectl get pvc',
        output: 'persistentvolumeclaim/app-data created\nNAME       STATUS   VOLUME   CAPACITY   ACCESS MODES\napp-data   Bound    pv-abc   1Gi        RWO',
        explain: 'PVC（Persistent Volume Claim）申请存储。K8s 自动分配 PV（Persistent Volume）。RWO（ReadWriteOnce）只能被一个节点挂载。Pod 中通过 volumeMount 引用 PVC。Pod 删除数据不丢失。',
      },
    ],
    diagnosis: [
      {
        symptom: 'PVC 状态一直是 Pending',
        cause: '没有可用的 PV 匹配请求（容量、accessMode 不匹配）。或 StorageClass 不存在。',
        fix: 'kubectl describe pvc <name> 查看 Events。检查可用的 PV：kubectl get pv。创建匹配的 PV 或配置 StorageClass 自动供给。',
      },
      {
        symptom: 'HPA 不工作（副本数不变）',
        cause: 'metrics-server 没有安装或配置。HPA 需要 CPU/内存指标数据。',
        fix: '安装 metrics-server：kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml。kubectl top pods 验证。',
      },
      {
        symptom: 'Secret 以明文存储在 etcd 中',
        cause: 'K8s 默认不加密 Secret（只 base64 编码）。etcd 备份包含所有 Secret 明文。',
        fix: '配置 etcd 加密（EncryptionConfiguration）。使用 External Secrets Operator + Vault/KMS。最小化 Secret 访问权限（RBAC）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建 ConfigMap 和 Secret，在 Pod 中注入为环境变量',
        hint: 'kubectl create configmap/secret + envFrom',
        answer: 'kubectl create configmap app-cfg --from-literal=APP_ENV=production\nkubectl create secret generic app-sec --from-literal=DB_PASS=secret\ncat << \'EOF\' | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: env-test\nspec:\n  containers:\n  - name: app\n    image: alpine\n    command: ["sh", "-c", "env | grep -E APP_|DB_ && sleep 3600"]\n    envFrom:\n    - configMapRef:\n        name: app-cfg\n    - secretRef:\n        name: app-sec\nEOF\nkubectl logs env-test',
      },
      {
        level: '进阶',
        task: '配置 HPA，用压力测试触发自动扩容，观察副本数变化',
        hint: 'kubectl autoscale + kubectl run stress + kubectl get hpa -w',
        answer: 'kubectl create deployment web --image=nginx:alpine --replicas=2\nkubectl expose deployment web --port=80\nkubectl autoscale deployment web --min=2 --max=5 --cpu-percent=50\n# 生成负载\nkubectl run stress --image=busybox --restart=Never -- \\\n  sh -c "while true; do wget -qO- http://web; done"\n# 观察扩容\nkubectl get hpa -w\ndeployment/web   85%/50%   2   5   4\n# 清理\nkubectl delete pod stress\nkubectl delete hpa deployment svc web',
      },
    ],
  },

  "RqXpX2XabtHYVjgg1EZR_": {
    mentalModel: 'K8s 高级是"生产级运维"：Namespace 隔离环境，Ingress 管理外部访问，RBAC 控制权限，Network Policy 限制网络通信，PDB 保证滚动更新时的可用性。',
    handsOn: [
      {
        title: 'Namespace——隔离环境',
        cmd: 'kubectl create namespace dev && \\\nkubectl create namespace staging && \\\nkubectl create namespace production && \\\nkubectl get namespaces',
        output: 'NAME        STATUS   AGE\ndefault     Active   30d\ndev         Active   5s\nstaging     Active   3s\nproduction  Active   1s',
        explain: 'Namespace 逻辑隔离资源。不同 Namespace 的资源名可以重复。kubectl -n dev 指定命名空间。ResourceQuota 限制每个 Namespace 的资源配额。',
      },
      {
        title: 'Ingress——HTTP 路由和 TLS 终止',
        cmd: 'cat << \'EOF\' | kubectl apply -f -\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\nspec:\n  rules:\n  - host: app.example.com\n    http:\n      paths:\n      - path: /api\n        pathType: Prefix\n        backend:\n          service:\n            name: api-service\n            port:\n              number: 80\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: web-service\n            port:\n              number: 80\nEOF',
        output: 'ingress.networking.k8s.io/app-ingress created',
        explain: 'Ingress 管理外部 HTTP/HTTPS 访问。基于域名和路径路由到不同 Service。/api → api-service，/ → web-service。需要 Ingress Controller（如 nginx-ingress）才能生效。',
      },
      {
        title: 'Network Policy——限制 Pod 间通信',
        cmd: 'cat << \'EOF\' | kubectl apply -f -\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: db-access\nspec:\n  podSelector:\n    matchLabels:\n      app: database\n  policyTypes:\n  - Ingress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          app: api\n    ports:\n    - port: 5432\nEOF',
        output: 'networkpolicy.networking.k8s.io/db-access created',
        explain: 'NetworkPolicy 限制 Pod 网络。此策略只允许 label app=api 的 Pod 访问 database Pod 的 5432 端口。其他 Pod 无法连接数据库。默认 K8s 不限制网络（全部开放）。',
      },
      {
        title: 'PodDisruptionBudget——保证滚动更新可用性',
        cmd: 'cat << \'EOF\' | kubectl apply -f -\napiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: web-pdb\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: web\nEOF\nkubectl get pdb',
        output: 'poddisruptionbudget.policy/web-pdb created\nNAME      MIN AVAILABLE   ALLOWED DISRUPTIONS\nweb-pdb   2               1',
        explain: 'PDB 保证至少 2 个 Pod 始终可用。ALLOWED DISRUPTIONS=1 表示最多同时中断 1 个 Pod。滚动更新时 K8s 遵守 PDB，不会同时停太多 Pod。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Ingress 不生效（404 或无法访问）',
        cause: '没有安装 Ingress Controller。Ingress 资源只是规则声明，需要 Controller 执行。',
        fix: '安装 Ingress Controller：kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml。',
      },
      {
        symptom: 'Namespace 删除后资源没被清理',
        cause: 'Namespace 处于 Terminating 状态，可能有 finalizer 阻止删除。',
        fix: 'kubectl get namespace <name> -o json | jq \'.spec.finalizers=[]\' | kubectl replace --raw "/api/v1/namespaces/<name>/finalize" -f -。或等待 finalizer 完成。',
      },
      {
        symptom: 'NetworkPolicy 不生效（Pod 间仍然可以通信）',
        cause: 'CNI 插件不支持 NetworkPolicy（如 flannel 默认不支持）。',
        fix: '使用支持 NetworkPolicy 的 CNI（Calico、Cilium、Weave）。检查：kubectl get pods -n kube-system | grep -E "calico|cilium"。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建 dev 和 prod 两个 Namespace，分别在每个 Namespace 中创建 nginx Deployment',
        hint: 'kubectl create namespace + kubectl -n',
        answer: 'kubectl create namespace dev\nkubectl create namespace prod\nkubectl create deployment web --image=nginx:alpine -n dev\nkubectl create deployment web --image=nginx:alpine -n prod\nkubectl get pods -n dev\nkubectl get pods -n prod\nkubectl delete namespace dev prod',
      },
      {
        level: '进阶',
        task: '创建 Ingress 规则，将 /api 路由到 api-service，其他路由到 web-service',
        hint: 'Ingress YAML with paths',
        answer: 'cat << \'EOF\' | kubectl apply -f -\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app-router\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /api\n        pathType: Prefix\n        backend:\n          service:\n            name: api-service\n            port:\n              number: 80\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: web-service\n            port:\n              number: 80\nEOF\nkubectl get ingress',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 09 — CI/CD 与部署
  // ═══════════════════════════════════════════════

  "jKSE_wKYf4P9wnSh_LkMi": {
    mentalModel: '容器监控是"容器的体检报告"：cAdvisor 采集容器指标 → Prometheus 存储和查询 → Grafana 可视化 → Alertmanager 告警。生产环境的标配四件套。',
    handsOn: [
      {
        title: '用 docker stats 快速诊断',
        cmd: 'docker run -d --name monitor-target nginx:alpine && \\\ndocker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}\t{{.BlockIO}}"',
        output: 'NAME              CPU %   MEM USAGE / LIMIT   NET I/O         BLOCK I/O\nmonitor-target    0.01%   8.2MiB / 7.756GiB   1.5kB / 650B    0B / 4.1MB',
        explain: 'docker stats 是最快的诊断工具。CPU% 看计算瓶颈，MEM 看内存瓶颈，NET I/O 看网络瓶颈，BLOCK I/O 看磁盘瓶颈。异常时先看 stats 定位方向。',
      },
      {
        title: '用 Prometheus 格式暴露容器指标',
        cmd: 'docker run -d --name node-exporter \\\n  -v /proc:/host/proc:ro \\\n  -v /sys:/host/sys:ro \\\n  -p 9100:9100 \\\n  prom/node-exporter:latest && \\\ncurl -s http://localhost:9100/metrics | grep "node_cpu_seconds_total" | head -3',
        output: 'node_cpu_seconds_total{cpu="0",mode="idle"} 12345.67\nnode_cpu_seconds_total{cpu="0",mode="system"} 234.56\nnode_cpu_seconds_total{cpu="0",mode="user"} 567.89',
        explain: 'node-exporter 暴露宿主机指标（CPU、内存、磁盘、网络）。Prometheus 格式：metric_name{labels} value timestamp。/metrics 端点供 Prometheus 抓取。',
      },
      {
        title: '用 Grafana 查看预置仪表盘',
        cmd: 'docker run -d --name grafana \\\n  -p 3001:3000 \\\n  -v grafana-data:/var/lib/grafana \\\n  grafana/grafana:latest && \\\necho "Grafana 已启动: http://localhost:3001 (admin/admin)"',
        output: 'Grafana 已启动: http://localhost:3001 (admin/admin)',
        explain: 'Grafana 默认端口 3000，用户名/密码 admin/admin。导入预置仪表盘（Dashboard ID 893 for Docker）可以快速看到容器的 CPU、内存、网络图表。',
      },
      {
        title: '配置 Alertmanager 告警规则',
        cmd: 'cat << \'EOF\'\n# Prometheus 告警规则示例\ngroups:\n- name: docker-alerts\n  rules:\n  - alert: ContainerHighCPU\n    expr: container_cpu_usage_seconds_total > 0.8\n    for: 5m\n    labels:\n      severity: warning\n    annotations:\n      summary: "容器 {{ $labels.name }} CPU 使用率超过 80%"\n\n  - alert: ContainerOOM\n    expr: container_memory_usage_bytes / container_spec_memory_limit_bytes > 0.9\n    for: 2m\n    labels:\n      severity: critical\n    annotations:\n      summary: "容器 {{ $labels.name }} 内存接近限制"\nEOF',
        output: '# Prometheus alerting rules',
        explain: '告警规则用 PromQL 表达式。for: 5m 表示持续 5 分钟才触发（避免瞬时波动）。severity 分级（warning/critical）。annotations 提供人类可读的告警描述。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Prometheus 抓取不到 cAdvisor 指标',
        cause: 'cAdvisor 端口没有暴露，或 Prometheus 配置的 scrape target 不正确。',
        fix: '确认 cAdvisor 端口（默认 8080）。prometheus.yml 中添加 scrape target：- targets: [\'cadvisor:8080\']。',
      },
      {
        symptom: 'Grafana 导入仪表盘后没有数据',
        cause: '数据源（Prometheus）配置不正确，或 Prometheus 没有数据。',
        fix: 'Grafana → Data Sources → 添加 Prometheus。URL: http://prometheus:9090。Test 连接。Prometheus 的 Graph 页面验证有数据。',
      },
      {
        symptom: '告警频繁误报',
        cause: '阈值设得太低、for 时间太短、或指标波动大。',
        fix: '增大 for 时间（如 10m）。调高阈值。使用 recording rules 计算平均值而非瞬时值。配置告警抑制和静默。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '部署 node-exporter，用 curl 获取 /metrics 端点，找出 CPU 和内存指标',
        hint: 'docker run node-exporter + curl /metrics + grep',
        answer: 'docker run -d --name ne \\\n  -v /proc:/host/proc:ro -v /sys:/host/sys:ro \\\n  -p 9100:9100 prom/node-exporter\ncurl -s http://localhost:9100/metrics | grep -E "node_cpu|node_memory_MemTotal"\ndocker rm -f ne',
      },
      {
        level: '进阶',
        task: '用 docker-compose 部署 Prometheus + Grafana + cAdvisor 完整监控栈',
        hint: '三个服务 + 配置文件 + 网络',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  prometheus:\n    image: prom/prometheus:latest\n    volumes:\n      - ./prometheus.yml:/etc/prometheus/prometheus.yml\n      - prom-data:/prometheus\n    ports:\n      - "9090:9090"\n  grafana:\n    image: grafana/grafana:latest\n    ports:\n      - "3000:3000"\n    volumes:\n      - grafana-data:/var/lib/grafana\n    depends_on:\n      - prometheus\n  cadvisor:\n    image: gcr.io/cadvisor/cadvisor:v0.47.2\n    volumes:\n      - /:/rootfs:ro\n      - /var/run:/var/run:ro\n      - /sys:/sys:ro\n      - /var/lib/docker:/var/lib/docker:ro\n    ports:\n      - "8080:8080"\nvolumes:\n  prom-data:\n  grafana-data:\nEOF',
      },
    ],
  },

  "YzpB7rgSR4ueQRLa0bRWa": {
    mentalModel: '安全扫描是"镜像的 X 光机"：在 CI/CD 中自动扫描镜像依赖的已知漏洞（CVE），在部署前拦截高危镜像。Trivy 是最流行的开源扫描器。',
    handsOn: [
      {
        title: '用 Trivy 扫描镜像漏洞',
        cmd: 'docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy:latest image nginx:latest 2>&1 | head -20',
        output: 'nginx:latest (debian 12.4)\nTotal: 156 (UNKNOWN: 0, LOW: 45, MEDIUM: 78, HIGH: 28, CRITICAL: 5)\n\n┌──────────────┬────────────────┬──────────┬───────────────────┐\n│   Library    │ Vulnerability  │ Severity │ Installed Version │\n├──────────────┼────────────────┼──────────┼───────────────────┤\n│ libssl3      │ CVE-2024-xxxxx │ CRITICAL │ 3.0.11-1          │',
        explain: 'Trivy 扫描镜像中的 OS 包和语言依赖的已知漏洞。CRITICAL 表示严重漏洞（应阻止部署）。HIGH 表示高危。Total 156 个漏洞中 5 个 CRITICAL——需要更新基础镜像。',
      },
      {
        title: '扫描结果过滤——只看高危',
        cmd: 'docker run --rm aquasec/trivy:latest image --severity HIGH,CRITICAL nginx:latest 2>&1 | tail -10',
        output: 'Total: 33 (HIGH: 28, CRITICAL: 5)',
        explain: '--severity HIGH,CRITICAL 只显示高危和严重漏洞。LOW 和 MEDIUM 可以暂时忽略（定期处理）。CI/CD 中通常只拦截 CRITICAL。',
      },
      {
        title: '对比 alpine 和 ubuntu 的漏洞数量',
        cmd: 'echo "=== nginx:alpine ===" && \\\ndocker run --rm aquasec/trivy:latest image --severity HIGH,CRITICAL nginx:alpine 2>&1 | grep "Total:" && \\\necho "=== nginx:latest (debian) ===" && \\\ndocker run --rm aquasec/trivy:latest image --severity HIGH,CRITICAL nginx:latest 2>&1 | grep "Total:"',
        output: '=== nginx:alpine ===\nTotal: 3 (HIGH: 2, CRITICAL: 1)\n=== nginx:latest (debian) ===\nTotal: 33 (HIGH: 28, CRITICAL: 5)',
        explain: 'alpine 版本漏洞数远少于 debian（3 vs 33）——因为 alpine 包含的包更少（攻击面更小）。这就是推荐 alpine 基础镜像的安全原因之一。',
      },
      {
        title: '在 CI 中集成扫描（GitHub Actions 示例）',
        cmd: 'cat << \'EOF\'\n# .github/workflows/scan.yml\nname: Security Scan\non: [push]\njobs:\n  scan:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build image\n        run: docker build -t myapp:${{ github.sha }} .\n      - name: Scan with Trivy\n        uses: aquasecurity/trivy-action@master\n        with:\n          image-ref: myapp:${{ github.sha }}\n          severity: CRITICAL\n          exit-code: 1  # 有 CRITICAL 漏洞则 CI 失败\nEOF',
        output: '# GitHub Actions Trivy scan workflow',
        explain: 'exit-code: 1 使 CI 在发现 CRITICAL 漏洞时失败，阻止合并/部署。severity 过滤只关注严重漏洞。每次 push 自动扫描，确保不引入高危依赖。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Trivy 扫描结果很多但不知如何处理',
        cause: '大部分漏洞来自基础镜像的系统库，应用层面无法修复。',
        fix: '更新基础镜像到最新版本。使用 alpine 减少漏洞数量。只关注应用依赖（--pkg-types lang）。设置合理阈值（只拦截 CRITICAL）。',
      },
      {
        symptom: 'CI 扫描太慢（超过 2 分钟）',
        cause: '每次扫描都重新下载漏洞数据库（约 500MB）。',
        fix: '缓存漏洞数据库：--cache-dir /tmp/trivy-cache。或在 CI 中缓存 /home/runner/.cache/trivy。--skip-db-update 跳过更新（配合定期更新任务）。',
      },
      {
        symptom: '扫描通过但生产环境仍然有漏洞',
        cause: '扫描的是构建时的镜像，运行时依赖可能更新（如 apt upgrade）。或扫描没覆盖所有层。',
        fix: 'CI/CD 中扫描最终镜像（不是中间阶段）。定期扫描运行中的镜像（runtime scanning）。用 --ignore-unfixed 只关注有修复方案的漏洞。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Trivy 扫描 nginx:latest 和 nginx:alpine，对比 HIGH+CRITICAL 漏洞数量',
        hint: 'docker run aquasec/trivy image --severity HIGH,CRITICAL',
        answer: 'docker run --rm aquasec/trivy:latest image --severity HIGH,CRITICAL nginx:latest\ndocker run --rm aquasec/trivy:latest image --severity HIGH,CRITICAL nginx:alpine\n# alpine 通常漏洞数远少于 latest',
      },
      {
        level: '进阶',
        task: '写一个脚本扫描本地所有镜像，输出每个镜像的 CRITICAL 漏洞数',
        hint: 'docker images + trivy + loop',
        answer: '#!/bin/bash\nfor img in $(docker images --format "{{.Repository}}:{{.Tag}}" | grep -v "<none>"); do\n  count=$(docker run --rm aquasec/trivy:latest image --severity CRITICAL -q "$img" 2>/dev/null | grep -c "CRITICAL" || true)\n  if [ "$count" -gt 0 ]; then\n    echo "WARNING: $img has $count CRITICAL vulnerabilities"\n  else\n    echo "OK: $img"\n  fi\ndone',
      },
    ],
  },

  "mAaEz-bwB5DLaBbOSYGMn": {
    mentalModel: 'CI/CD 是"应用的生产流水线"：代码提交 → 自动测试 → 构建镜像 → 扫描漏洞 → 推送仓库 → 部署上线。GitHub Actions、GitLab CI、Jenkins 是三大流水线工具。',
    handsOn: [
      {
        title: 'GitHub Actions——完整 CI/CD 流水线',
        cmd: 'cat << \'EOF\'\n# .github/workflows/ci-cd.yml\nname: CI/CD Pipeline\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\nenv:\n  REGISTRY: ghcr.io\n  IMAGE_NAME: ${{ github.repository }}\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Run tests\n        run: npm test\n\n  build-and-push:\n    needs: test\n    runs-on: ubuntu-latest\n    permissions:\n      contents: read\n      packages: write\n    steps:\n      - uses: actions/checkout@v4\n      - name: Login to GHCR\n        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin\n      - name: Build and push\n        run: |\n          docker build -t ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }} .\n          docker push ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}\n\n  deploy:\n    needs: build-and-push\n    runs-on: ubuntu-latest\n    if: github.ref == \'refs/heads/main\'\n    steps:\n      - name: Deploy to production\n        run: |\n          kubectl set image deployment/app app=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}\nEOF',
        output: '# GitHub Actions CI/CD pipeline',
        explain: '三个 Job：test（测试）→ build-and-push（构建推送）→ deploy（部署）。needs 定义依赖。deploy 只在 main 分支执行。镜像标签用 Git commit SHA（唯一追溯）。',
      },
      {
        title: 'GitLab CI——等价流水线',
        cmd: 'cat << \'EOF\'\n# .gitlab-ci.yml\nstages:\n  - test\n  - build\n  - deploy\n\ntest:\n  stage: test\n  script:\n    - npm test\n\nbuild:\n  stage: build\n  script:\n    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .\n    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n\ndeploy:\n  stage: deploy\n  script:\n    - kubectl set image deployment/app app=$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n  only:\n    - main\nEOF',
        output: '# GitLab CI pipeline',
        explain: 'GitLab CI 用 stages 定义阶段。$CI_REGISTRY_IMAGE 是内置变量（镜像名）。$CI_COMMIT_SHA 是 Git 提交哈希。only: main 只在 main 分支执行部署。',
      },
      {
        title: '多阶段构建 + 缓存优化',
        cmd: 'cat << \'EOF\'\n# GitHub Actions 优化 Docker 构建\n- name: Set up Docker Buildx\n  uses: docker/setup-buildx-action@v3\n\n- name: Build and push\n  uses: docker/build-push-action@v5\n  with:\n    push: true\n    tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}\n    cache-from: type=gha\n    cache-to: type=gha,mode=max\nEOF',
        output: '# Docker Buildx with GitHub Actions cache',
        explain: 'Docker Buildx 支持 BuildKit 功能。cache-from/to type=gha 使用 GitHub Actions 缓存（加速构建）。mode=max 缓存所有层（不只是最终镜像的层）。',
      },
      {
        title: '镜像标签策略',
        cmd: 'cat << \'EOF\'\n# 推荐的镜像标签策略\n# 1. Git SHA（唯一，可追溯）\nmyapp:a1b2c3d\n\n# 2. 语义版本（人类可读）\nmyapp:1.2.3\n\n# 3. Git 分支（开发环境）\nmyapp:feature-auth\n\n# 4. latest（不推荐用于生产——不可追溯）\nmyapp:latest\n\n# 生产环境推荐：同时打 Git SHA 和版本标签\ndocker tag myapp:a1b2c3d myapp:1.2.3\ndocker push myapp:a1b2c3d\ndocker push myapp:1.2.3\nEOF',
        output: '# 镜像标签最佳实践',
        explain: 'Git SHA 标签保证每次部署的镜像唯一可追溯。语义版本标签方便回滚。latest 不可靠（不知道具体是哪个版本）。生产环境同时打两个标签。',
      },
    ],
    diagnosis: [
      {
        symptom: 'CI 构建很慢（超过 5 分钟）',
        cause: '没有使用构建缓存。每次构建都从头下载依赖和基础镜像。',
        fix: '使用 BuildKit 缓存（cache-from/to）。Dockerfile 中先 COPY package.json 再 npm install。使用多阶段构建。',
      },
      {
        symptom: '部署后发现问题但不知道回滚到哪个版本',
        cause: '使用了 latest 标签，不知道当前运行的是哪个构建。',
        fix: '使用 Git SHA 标签。kubectl rollout history deployment/app 查看部署历史。kubectl rollout undo deployment/app 回滚。',
      },
      {
        symptom: 'CI/CD 密钥泄露',
        cause: '把密码/Token 硬编码在 CI 配置文件中。',
        fix: '使用 CI 工具的 Secret 功能（GitHub Secrets、GitLab CI Variables）。docker login 用 --password-stdin。定期轮换密钥。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 GitHub Actions workflow：push 时构建 Docker 镜像并推送到 Docker Hub',
        hint: 'on: push + docker build + docker push',
        answer: 'name: Build and Push\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin\n      - run: docker build -t ${{ secrets.DOCKER_USERNAME }}/myapp:${{ github.sha }} .\n      - run: docker push ${{ secrets.DOCKER_USERNAME }}/myapp:${{ github.sha }}',
      },
      {
        level: '进阶',
        task: '在 CI 流水线中加入 Trivy 安全扫描步骤，CRITICAL 漏洞时阻止部署',
        hint: 'trivy-action + exit-code: 1',
        answer: 'security-scan:\n  needs: build\n  runs-on: ubuntu-latest\n  steps:\n    - uses: aquasecurity/trivy-action@master\n      with:\n        image-ref: myapp:${{ github.sha }}\n        severity: CRITICAL\n        exit-code: 1\n\ndeploy:\n  needs: security-scan  # 扫描通过才部署\n  runs-on: ubuntu-latest\n  steps:\n    - run: kubectl set image deployment/app app=myapp:${{ github.sha }}',
      },
    ],
  },

  "eHtVLB6v3h7hatJb-9cZK": {
    mentalModel: '安全扫描进阶是"自动化安全门禁"：不仅在 CI 中扫描，还在 Registry 中扫描（推送后自动扫描），在 K8s 准入控制中拦截（部署前最后一道关）。',
    handsOn: [
      {
        title: '用 Snyk 扫描容器和依赖',
        cmd: 'cat << \'EOF\'\n# Snyk Container 扫描（GitHub Actions）\n- name: Run Snyk Container\n  uses: snyk/actions/docker@master\n  env:\n    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}\n  with:\n    image: myapp:${{ github.sha }}\n    args: --severity-threshold=high --file=Dockerfile\nEOF',
        output: '# Snyk 集成配置',
        explain: 'Snyk 不仅扫描 OS 包，还扫描语言依赖（npm、pip、go modules）。--file=Dockerfile 关联漏洞到 Dockerfile 的哪一行引入的。--severity-threshold=high 只关注高危以上。',
      },
      {
        title: '用 Docker Scout 扫描（Docker 官方工具）',
        cmd: 'docker scout cves nginx:latest 2>&1 | head -15',
        output: 'i Analyzing image\n✓ Image stored for indexing\n✓ Indexed 78 packages\n✗ Detected 45 CVEs\n  - 5 Critical\n  - 12 High\n  - 28 Medium',
        explain: 'Docker Scout 是 Docker 官方的安全扫描工具（集成在 Docker Desktop 和 CLI 中）。自动分析镜像的所有层和依赖。提供修复建议：升级哪个包可以修复哪些 CVE。',
      },
      {
        title: 'K8s 准入控制——拦截不安全镜像',
        cmd: 'cat << \'EOF\'\n# OPA Gatekeeper 策略示例\napiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sblocklatesttag\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sBlockLatestTag\n  targets:\n  - target: admission.k8s.gatekeeper.sh\n    rego: |\n      package k8sblocklatesttag\n      violation[{"msg": msg}] {\n        container := input.review.object.spec.containers[_]\n        endswith(container.image, ":latest")\n        msg := sprintf("不允许使用 latest 标签: %v", [container.image])\n      }\nEOF',
        output: '# OPA Gatekeeper policy to block latest tag',
        explain: 'OPA Gatekeeper 是 K8s 准入控制器。这个策略禁止使用 :latest 标签的镜像。可以扩展：禁止特权容器、强制资源限制、要求健康检查等。部署前自动拦截不合规的配置。',
      },
      {
        title: '镜像签名——验证镜像来源',
        cmd: 'cat << \'EOF\'\n# 使用 cosign 签名镜像\n# 1. 生成密钥对\ncosign generate-key-pair\n\n# 2. 签名镜像\ncosign sign --key cosign.key myapp:v1.2.3\n\n# 3. 验证签名\ncosign verify --key cosign.pub myapp:v1.2.3\n# 输出: Verification for myapp:v1.2.3 -- The following checks were performed on each of these signatures:\n#   - The cosign claims were validated\n#   - The signatures were verified against the specified public key\nEOF',
        output: '# cosign 镜像签名流程',
        explain: 'cosign（Sigstore 项目）为镜像签名。签名存储在 Registry 中（和镜像一起）。K8s 准入控制可以验证签名，只允许签名过的镜像部署。防止镜像被篡改。',
      },
    ],
    diagnosis: [
      {
        symptom: '安全扫描阻塞了 CI 但团队不修复漏洞',
        cause: '漏洞太多（技术债务），团队习惯忽略扫描结果。',
        fix: '只拦截 CRITICAL 级别。设置 SLA（CRITICAL 24 小时修复）。使用 --ignore-unfixed 忽略没有修复方案的漏洞。定期技术债务清理会议。',
      },
      {
        symptom: 'Trivy 数据库更新失败',
        cause: '网络限制（防火墙阻止下载 GitHub releases），或磁盘空间不足。',
        fix: '使用私有 Trivy 数据库镜像。--skip-db-update 跳过自动更新（配合离线更新任务）。确保磁盘空间 >1GB。',
      },
      {
        symptom: '镜像签名验证失败',
        cause: '密钥不匹配（签名用的私钥和验证用的公钥不是同一对）。或镜像被重新推送（覆盖了签名）。',
        fix: '确保使用正确的公钥。使用 keyless signing（Sigstore Fulcio）。重新签名：cosign sign --key cosign.key image:tag。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Docker Scout 扫描 nginx:alpine 镜像，列出 CRITICAL 漏洞',
        hint: 'docker scout cves',
        answer: 'docker scout cves nginx:alpine\ndocker scout cves --only-severity critical nginx:alpine',
      },
      {
        level: '进阶',
        task: '在 GitHub Actions 中配置 Trivy 扫描 + Docker Scout 双重扫描',
        hint: '两个扫描步骤，任一失败则阻止部署',
        answer: 'scan:\n  runs-on: ubuntu-latest\n  steps:\n    - uses: aquasecurity/trivy-action@master\n      with:\n        image-ref: myapp:${{ github.sha }}\n        severity: CRITICAL\n        exit-code: 1\n    - uses: docker/scout-action@v1\n      with:\n        command: cves\n        image: myapp:${{ github.sha }}\n        only-severities: critical\n        exit-code: true',
      },
    ],
  },

  "w5QjzvOaciK2rotOkjvjQ": {
    mentalModel: 'CI/CD 进阶是"蓝绿部署和金丝雀发布"：蓝绿部署（两套环境切换，秒级回滚），金丝雀发布（先给 5% 用户，观察没问题再全量），渐进式交付（Argo Rollouts）。',
    handsOn: [
      {
        title: '蓝绿部署——Docker Compose 实现',
        cmd: 'cat << \'EOF\'\n# blue-green deploy with docker-compose\n# 1. 当前运行绿色\nservices:\n  web-green:\n    image: myapp:v1.2.3\n    ports:\n      - "8080:3000"\n\n# 2. 部署蓝色（不切流量）\n# docker-compose -f docker-compose.blue.yml up -d\n\n# 3. 验证蓝色正常后切换\n# 修改 nginx 上游或 docker-compose 端口映射\n# 4. 如果蓝色有问题，立即切回绿色\nEOF',
        output: '# Blue-Green deployment pattern',
        explain: '蓝绿部署维护两套完全相同的环境。绿色处理线上流量，蓝色部署新版本。验证蓝色正常后切换流量（改 Nginx 上游或 DNS）。问题立即切回绿色（秒级回滚）。',
      },
      {
        title: '金丝雀发布——K8s 实现',
        cmd: 'cat << \'EOF\'\n# 1. 当前版本 100% 流量\nkubectl get svc web -o yaml | grep selector\n# selector: app: web, version: v1\n\n# 2. 部署新版本（1 个副本）\nkubectl create deployment web-v2 --image=myapp:v1.3.0 --replicas=1\nkubectl label deployment web-v2 app=web version=v2\n\n# 3. Service 同时选择 v1 和 v2（约 25% 流量到 v2）\nkubectl patch svc web -p \'{"spec":{"selector":{"version":null}}}\n\n# 4. 监控 v2 指标，正常则扩容 v2、缩容 v1\n# 5. 异常则删除 v2\nEOF',
        output: '# Canary deployment with Kubernetes',
        explain: '金丝雀发布：先给新版本少量流量（如 1 个 Pod vs 3 个 Pod = 25%）。监控错误率和延迟。正常则逐步增加流量。异常则删除新版本。风险可控。',
      },
      {
        title: 'Argo Rollouts——自动化渐进式交付',
        cmd: 'cat << \'EOF\'\napiVersion: argoproj.io/v1alpha1\nkind: Rollout\nmetadata:\n  name: web\nspec:\n  replicas: 5\n  strategy:\n    canary:\n      steps:\n      - setWeight: 20    # 20% 流量\n      - pause: {duration: 5m}  # 观察 5 分钟\n      - setWeight: 50    # 50% 流量\n      - pause: {duration: 5m}\n      - setWeight: 100   # 全量\n  revisionHistoryLimit: 2\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n      - name: app\n        image: myapp:v1.3.0\nEOF',
        output: '# Argo Rollouts canary strategy',
        explain: 'Argo Rollouts 自动化金丝雀发布：20% → 等 5 分钟 → 50% → 等 5 分钟 → 100%。可以配合分析（Analysis）自动判断：错误率 <1% 才继续，否则自动回滚。',
      },
      {
        title: '回滚策略对比',
        cmd: 'cat << \'EOF\'\n# 回滚方式对比\n# ┌──────────────┬──────────────┬──────────────┐\n# │ 部署策略     │ 回滚速度     │ 风险         │\n# ├──────────────┼──────────────┼──────────────┤\n# │ 滚动更新     │ 中（分钟级） │ 中           │\n# │ 蓝绿部署     │ 快（秒级）   │ 低（需双倍资源）│\n# │ 金丝雀发布   │ 快（删 Pod） │ 低（影响少量用户）│\n# │ Argo Rollouts│ 自动（秒级） │ 最低（自动检测+回滚）│\n# └──────────────┴──────────────┴──────────────┘\nEOF',
        output: '# Deployment strategy comparison',
        explain: '选择策略：小团队用滚动更新（简单），重要服务用蓝绿（快速回滚），大流量服务用金丝雀（风险最小），成熟团队用 Argo Rollouts（全自动）。',
      },
    ],
    diagnosis: [
      {
        symptom: '蓝绿部署切换后新版本有问题',
        cause: '测试环境没覆盖所有场景，线上流量触发了 bug。',
        fix: '立即切回绿色环境（改 Nginx 上游或 DNS）。保留蓝色环境用于调试。增加自动化测试覆盖。',
      },
      {
        symptom: '金丝雀发布期间错误率上升',
        cause: '新版本引入了 bug，或数据库迁移不兼容旧代码。',
        fix: '立即删除新版本 Pod。检查数据库迁移是否向后兼容。增加金丝雀阶段的监控指标（错误率、延迟、日志错误数）。',
      },
      {
        symptom: 'Argo Rollouts 自动回滚了但不知道原因',
        cause: 'Analysis 模板配置不合理（阈值太低），正常的指标波动触发了回滚。',
        fix: '检查 Argo Rollouts 的 Analysis 结果：kubectl argo rollouts get rollout web。调整 Analysis 阈值。增加暂停时间观察更多数据。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker-compose 实现蓝绿部署：两个版本的服务，通过修改端口切换',
        hint: '两个 service + 不同端口 + nginx 上游',
        answer: '# docker-compose.yml\nservices:\n  web-green:\n    image: nginx:alpine\n    ports: ["3001:80"]\n  web-blue:\n    image: httpd:alpine\n    ports: ["3002:80"]\n  nginx:\n    image: nginx:alpine\n    ports: ["8080:80"]\n    volumes:\n      - ./nginx.conf:/etc/nginx/conf.d/default.conf\n# 切换流量：修改 nginx.conf 的 upstream 指向，然后 docker compose restart nginx',
      },
      {
        level: '进阶',
        task: '用 K8s 实现金丝雀发布：v1 3 副本 + v2 1 副本，Service 同时选择两者',
        hint: '两个 Deployment + 共享 label + Service',
        answer: 'kubectl create deployment web-v1 --image=nginx:alpine --replicas=3\nkubectl label deployment web-v1 app=web version=v1\nkubectl create deployment web-v2 --image=httpd:alpine --replicas=1\nkubectl label deployment web-v2 app=web version=v2\nkubectl expose deployment web-v1 --name web --port=80 --selector=app=web\nkubectl patch svc web -p \'{"spec":{"selector":{"version":null}}}\nkubectl get pods -l app=web\n# 约 25% 流量到 v2',
      },
    ],
  },

  "oyqw4tr-taZcxt5kREh1g": {
    mentalModel: '持续集成是"代码的自动质检"：每次 push 自动运行测试、lint 检查、安全扫描。失败的 PR 不能合并。保证主分支始终是健康的。',
    handsOn: [
      {
        title: 'GitHub Actions CI 工作流',
        cmd: 'cat << \'EOF\'\nname: CI\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  lint-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 18\n          cache: npm\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm run build\n\n  docker-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: docker build -t myapp:test .\n      - run: docker run --rm myapp:test npm test\nEOF',
        output: '# GitHub Actions CI workflow',
        explain: '两个并行 Job：lint-and-test（在 CI 环境运行）和 docker-test（在 Docker 中运行）。push 和 PR 都触发。npm ci 确定性安装。cache: npm 缓存依赖加速。',
      },
      {
        title: 'Docker 中的集成测试',
        cmd: 'cat << \'EOF\'\n# docker-compose.test.yml（集成测试环境）\nservices:\n  app:\n    build: .\n    depends_on:\n      db:\n        condition: service_healthy\n    environment:\n      DATABASE_URL: postgres://test:test@db:5432/testdb\n    command: npm run test:integration\n\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: testdb\n      POSTGRES_PASSWORD: test\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready"]\n      interval: 3s\n      retries: 5\nEOF\n# 运行集成测试\ndocker compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app',
        output: '# Integration test with docker-compose',
        explain: 'docker-compose.test.yml 创建完整测试环境（应用 + 数据库）。depends_on + healthcheck 确保数据库就绪后再测试。--abort-on-container-exit 任一容器退出就停止所有。--exit-code-from app 用应用的退出码作为结果。',
      },
      {
        title: '测试覆盖率报告',
        cmd: 'cat << \'EOF\'\n# 在 CI 中生成和上传覆盖率报告\n- name: Run tests with coverage\n  run: npm run test:coverage\n\n- name: Upload coverage\n  uses: codecov/codecov-action@v3\n  with:\n    file: ./coverage/lcov.info\n\n# package.json scripts:\n# "test:coverage": "jest --coverage --coverageReporters=lcov"\nEOF',
        output: '# Test coverage in CI',
        explain: '覆盖率报告帮助发现未测试的代码路径。Codecov/Coveralls 在 PR 中显示覆盖率变化。设置最低覆盖率门槛（如 80%），低于则 CI 失败。',
      },
      {
        title: '矩阵测试——多版本兼容',
        cmd: 'cat << \'EOF\'\njobs:\n  test:\n    strategy:\n      matrix:\n        node-version: [16, 18, 20]\n        os: [ubuntu-latest]\n    runs-on: ${{ matrix.os }}\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: ${{ matrix.node-version }}\n      - run: npm ci\n      - run: npm test\nEOF',
        output: '# Matrix testing',
        explain: 'matrix 策略在多个版本组合上并行测试（Node 16、18、20）。确保应用兼容不同运行时。CI 会运行 3 个并行 Job，每个对应一个版本。',
      },
    ],
    diagnosis: [
      {
        symptom: 'CI 测试在本地通过但在 CI 中失败',
        cause: '环境差异：Node 版本不同、环境变量不同、依赖版本不一致（npm install vs npm ci）、时序问题（flaky test）。',
        fix: 'CI 和本地使用相同 Docker 镜像。用 npm ci 代替 npm install。设置 NODE_ENV=test。排查 flaky test（重跑或修复）。',
      },
      {
        symptom: 'CI 流水线太慢（超过 10 分钟）',
        cause: '没有并行化、没有缓存、或测试太慢。',
        fix: '拆分 Job 并行运行。缓存依赖（cache: npm）。只运行变化的测试（影响分析）。拆分慢的集成测试到单独 Job。',
      },
      {
        symptom: 'PR 合并后主分支 CI 失败',
        cause: 'PR CI 和 main CI 配置不同，或合并后代码冲突。',
        fix: 'PR CI 和 main CI 使用相同配置。启用 branch protection rule：CI 必须通过才能合并。合并前 rebase 确保兼容。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 GitHub Actions CI 配置：push 时运行 lint、test、build 三个步骤',
        hint: 'on: push + steps with npm commands',
        answer: 'name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 18 }\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm run build',
      },
      {
        level: '进阶',
        task: '用 docker-compose.test.yml 搭建集成测试环境（应用 + PostgreSQL），CI 中运行',
        hint: 'docker compose up --abort-on-container-exit',
        answer: '# docker-compose.test.yml\nservices:\n  app:\n    build: .\n    command: npm run test:integration\n    depends_on:\n      db: { condition: service_healthy }\n    environment:\n      DATABASE_URL: postgres://test:test@db/test\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_PASSWORD: test\n      POSTGRES_DB: test\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready"]\n      interval: 3s\n      retries: 5\n# CI: docker compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app',
      },
    ],
  },

  "qXOGqORi3EdqwsP9Uhi9m": {
    mentalModel: '部署容器是"最后一公里"：把镜像从 Registry 搬到运行环境。单机用 docker run/docker-compose，集群用 Swarm/K8s，懒人用 PaaS。选择取决于规模和团队能力。',
    handsOn: [
      {
        title: '单机部署——docker-compose',
        cmd: 'cat << \'EOF\'\n# production docker-compose.yml\nservices:\n  app:\n    image: myregistry.com/myapp:1.2.3\n    ports:\n      - "80:3000"\n    environment:\n      NODE_ENV: production\n      DATABASE_URL: ${DATABASE_URL}\n    restart: unless-stopped\n    deploy:\n      resources:\n        limits:\n          memory: 512M\n          cpus: "1.0"\n    healthcheck:\n      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]\n      interval: 15s\n      timeout: 5s\n      retries: 3\n    logging:\n      driver: json-file\n      options:\n        max-size: "10m"\n        max-file: "3"\nEOF\ndocker compose -f docker-compose.yml up -d',
        output: 'Container myapp-app-1 Started',
        explain: '生产环境 docker-compose：指定镜像版本（不用 latest）、资源限制、健康检查、日志轮转、重启策略。环境变量用 ${VAR} 从 .env 文件读取。',
      },
      {
        title: 'K8s 部署——滚动更新',
        cmd: 'cat << \'EOF\'\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  replicas: 3\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1        # 最多多 1 个 Pod\n      maxUnavailable: 0  # 不能少于目标数\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - name: app\n        image: myregistry.com/myapp:1.2.3\n        ports:\n        - containerPort: 3000\n        resources:\n          requests:\n            memory: "256Mi"\n            cpu: "500m"\n          limits:\n            memory: "512Mi"\n            cpu: "1000m"\n        livenessProbe:\n          httpGet:\n            path: /health\n            port: 3000\n          initialDelaySeconds: 10\n        readinessProbe:\n          httpGet:\n            path: /ready\n            port: 3000\n          initialDelaySeconds: 5\nEOF\nkubectl apply -f deployment.yml',
        output: 'deployment.apps/myapp configured',
        explain: 'K8s Deployment：maxSurge=1 更新时最多多 1 个 Pod，maxUnavailable=0 不能减少可用 Pod（零停机）。resources.requests 保证最低资源，limits 限制最大。liveness/readiness 分开。',
      },
      {
        title: '部署脚本——带健康检查',
        cmd: 'cat << \'SCRIPT\'\n#!/bin/bash\nset -e\n\nIMAGE=$1\necho "Deploying $IMAGE..."\n\n# 更新 K8s deployment\nkubectl set image deployment/myapp app=$IMAGE\n\n# 等待 rollout 完成\necho "Waiting for rollout..."\nkubectl rollout status deployment/myapp --timeout=120s\n\n# 验证健康\necho "Verifying health..."\nkubectl get pods -l app=myapp -o jsonpath="{.items[*].status.conditions[?(@.type==\'Ready\')].status}"\n\necho "Deploy complete!"\nSCRIPT',
        output: '# Deployment script',
        explain: '自动化部署脚本：更新镜像 → 等待 rollout → 验证就绪。set -e 任一命令失败则停止。--timeout=120s 超时回滚。适合集成到 CI/CD。',
      },
      {
        title: '回滚——快速恢复',
        cmd: 'echo "=== K8s 回滚 ===" && \\\necho "kubectl rollout history deployment/myapp" && \\\necho "kubectl rollout undo deployment/myapp" && \\\necho "kubectl rollout undo deployment/myapp --to-revision=3" && \\\necho "=== Docker Compose 回滚 ===" && \\\necho "# 修改镜像标签到上一版本" && \\\necho "docker compose up -d --force-recreate"',
        output: '# Rollback commands',
        explain: 'K8s：rollout undo 回滚到上一版本，--to-revision=3 回滚到指定版本。Docker Compose：修改镜像标签后 up --force-recreate 重建容器。',
      },
    ],
    diagnosis: [
      {
        symptom: '部署后应用无法连接数据库',
        cause: '数据库 URL 环境变量不正确，或网络不通（K8s 中 Service 名变化）。',
        fix: 'kubectl exec 进入 Pod 测试数据库连接。检查环境变量：kubectl describe pod | grep DATABASE_URL。确认 Service 名称正确。',
      },
      {
        symptom: '滚动更新卡住（ProgressDeadlineExceeded）',
        cause: '新版本 Pod 无法就绪（健康检查失败、镜像拉取失败、资源不足）。',
        fix: 'kubectl describe deployment 查看 Events。kubectl logs 查看 Pod 日志。kubectl rollout undo 回滚。修复问题后重新部署。',
      },
      {
        symptom: '部署后内存飙升然后 OOM',
        cause: '新版本有内存泄漏，或 resources.limits 设置太低。',
        fix: '增加 memory limits。排查内存泄漏（heap dump 分析）。设置合理的 JVM/Node.js 堆内存限制（小于容器 limits）。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个生产级 docker-compose.yml 部署 nginx，包含资源限制、健康检查、日志轮转、重启策略',
        hint: 'deploy + healthcheck + logging + restart',
        answer: 'services:\n  web:\n    image: nginx:alpine\n    ports:\n      - "80:80"\n    restart: unless-stopped\n    deploy:\n      resources:\n        limits:\n          memory: 128M\n          cpus: "0.5"\n    healthcheck:\n      test: ["CMD", "wget", "-qO-", "http://localhost/"]\n      interval: 10s\n      timeout: 3s\n      retries: 3\n    logging:\n      driver: json-file\n      options:\n        max-size: "10m"\n        max-file: "3"',
      },
      {
        level: '进阶',
        task: '写一个部署脚本，接受镜像版本参数，执行 K8s 滚动更新，等待完成，验证健康，失败自动回滚',
        hint: 'kubectl set image + rollout status + rollback',
        answer: '#!/bin/bash\nset -e\nIMAGE=$1\necho "Deploying $IMAGE..."\nkubectl set image deployment/myapp app=$IMAGE\nif kubectl rollout status deployment/myapp --timeout=120s; then\n  echo "Deploy successful!"\nelse\n  echo "Deploy failed! Rolling back..."\n  kubectl rollout undo deployment/myapp\n  exit 1\nfi',
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // Stage 10-11 — 开发体验与最佳实践
  // ═══════════════════════════════════════════════

  "z2eeBXPzo-diQ67Fcfyhc": {
    mentalModel: '运行容器进阶是"精细化控制"：docker run 的每个选项都在控制容器的一个维度——资源（CPU/内存）、网络（端口/DNS）、存储（卷）、安全（用户/权限）、生命周期（重启策略）。',
    handsOn: [
      {
        title: '完整的运行命令——所有常用选项',
        cmd: 'docker run -d \\\n  --name production-app \\\n  -p 8080:3000 \\\n  -v app-data:/app/data \\\n  -e NODE_ENV=production \\\n  -e DATABASE_URL=postgres://db:5432/prod \\\n  --memory=512m --cpus=1.0 \\\n  --restart unless-stopped \\\n  --log-driver json-file \\\n  --log-opt max-size=10m --log-opt max-file=3 \\\n  --user 1000:1000 \\\n  --read-only --tmpfs /tmp \\\n  --health-cmd "curl -f http://localhost:3000/health || exit 1" \\\n  --health-interval 15s \\\n  nginx:alpine',
        output: 'a1b2c3d4e5f6789012345678901234567890',
        explain: '完整的生产容器运行命令：后台运行、端口映射、数据卷、环境变量、资源限制、重启策略、日志轮转、非 root 用户、只读文件系统、健康检查。每个选项都有明确的安全和运维目的。',
      },
      {
        title: '自定义 DNS 和主机名',
        cmd: 'docker run --rm \\\n  --hostname myapp \\\n  --dns 8.8.8.8 --dns 8.8.4.4 \\\n  --add-host api.local:192.168.1.100 \\\n  alpine sh -c "hostname; cat /etc/resolv.conf; cat /etc/hosts"',
        output: 'myapp\nnameserver 8.8.8.8\nnameserver 8.8.4.4\n192.168.1.100 api.local',
        explain: '--hostname 设置容器主机名。--dns 指定 DNS 服务器。--add-host 添加 /etc/hosts 条目（类似本地 DNS）。适合连接内部服务或覆盖 DNS 解析。',
      },
      {
        title: '使用 --init 处理僵尸进程',
        cmd: 'docker run -d --name zombie-test --init alpine sh -c "sleep 1000 & sleep 1000 & wait" && \\\ndocker exec zombie-test ps aux',
        output: 'PID   USER  COMMAND\n    1 root  /dev/init -- sleep 1000 & sleep 1000 & wait\n    7 root  sleep 1000\n    8 root  sleep 1000',
        explain: '--init 在容器内运行 tini 作为 PID 1，正确转发信号和回收僵尸进程。没有 --init 时，shell 脚本作为 PID 1 不会转发 SIGTERM，导致 docker stop 等 10 秒。',
      },
      {
        title: '时区和语言设置',
        cmd: 'docker run --rm \\\n  -e TZ=Asia/Shanghai \\\n  -e LANG=zh_CN.UTF-8 \\\n  alpine sh -c "apk add -q tzdata && date"',
        output: 'Wed Jan 15 18:30:00 CST 2024',
        explain: 'TZ 环境变量设置时区。LANG 设置语言。容器默认是 UTC 时区。设置正确时区对日志时间戳和定时任务很重要。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器退出码 143',
        cause: '退出码 143 = 128 + 15（SIGTERM）。容器被 docker stop 优雅终止。正常行为。',
        fix: '不需要修复。如果不想被 stop，检查 restart policy。如果应用没有正确处理 SIGTERM，用 --init 或修改 entrypoint。',
      },
      {
        symptom: 'docker run 报 "executable file not found in $PATH"',
        cause: 'CMD/ENTRYPOINT 指定的命令在镜像中不存在。或使用了 shell 形式但镜像没有 /bin/sh（如 scratch 镜像）。',
        fix: '检查 Dockerfile 的 CMD/ENTRYPOINT。scratch 镜像必须用 exec 形式：CMD ["/app"]。确保命令路径正确。',
      },
      {
        symptom: '容器内 DNS 解析失败',
        cause: '宿主机 DNS 配置问题，或 Docker 默认 DNS（127.0.0.11）和某些网络环境冲突。',
        fix: '--dns 8.8.8.8 指定公共 DNS。或在 /etc/docker/daemon.json 配置 {"dns": ["8.8.8.8"]}。检查 VPN 是否影响 DNS。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker run 启动一个容器，设置：主机名 myapp、DNS 8.8.8.8、时区 Asia/Shanghai',
        hint: '--hostname + --dns + TZ 环境变量',
        answer: 'docker run --rm \\\n  --hostname myapp \\\n  --dns 8.8.8.8 \\\n  -e TZ=Asia/Shanghai \\\n  alpine sh -c "apk add -q tzdata; hostname; date"',
      },
      {
        level: '进阶',
        task: '写一个生产级 docker run 命令，组合所有安全和运维选项',
        hint: '参考 handsOn 中的完整命令',
        answer: 'docker run -d \\\n  --name app --init \\\n  -p 8080:3000 \\\n  -v data:/app/data \\\n  -e NODE_ENV=production \\\n  --memory=256m --cpus=0.5 \\\n  --restart unless-stopped \\\n  --log-opt max-size=10m --log-opt max-file=3 \\\n  --user 1000:1000 --read-only --tmpfs /tmp \\\n  --cap-drop ALL --cap-add NET_BIND_SERVICE \\\n  --security-opt no-new-privileges \\\n  --health-cmd "wget -qO- http://localhost:3000/health || exit 1" \\\n  --health-interval 15s \\\n  node:18-alpine node server.js',
      },
    ],
  },

  "9NuHwfytnUTpeVmnMpZZC": {
    mentalModel: '网络实践是"容器间通信的实战"：docker-compose 自动创建网络（服务名即主机名），多容器应用的网络拓扑设计，生产环境的网络安全（内部网络 + 端口最小化）。',
    handsOn: [
      {
        title: 'docker-compose 中的网络拓扑',
        cmd: 'cat << \'EOF\'\nservices:\n  frontend:\n    image: nginx:alpine\n    ports:\n      - "80:80"\n    networks:\n      - frontend-net\n\n  api:\n    image: node:18-alpine\n    networks:\n      - frontend-net  # frontend 可以访问\n      - backend-net   # 也可以访问数据库\n\n  db:\n    image: postgres:16-alpine\n    networks:\n      - backend-net   # 只有 api 可以访问\n\nnetworks:\n  frontend-net:\n  backend-net:\n    internal: true    # 不能访问外网\nEOF',
        output: '# docker-compose network topology',
        explain: 'api 同时在 frontend-net 和 backend-net 中，充当桥梁。frontend 只能访问 api（不能直接访问 db）。db 在 internal 网络中，不能访问外网（防止数据泄露）。',
      },
      {
        title: '验证网络隔离',
        cmd: 'docker compose up -d && \\\necho "=== frontend → api ===" && \\\ndocker compose exec frontend wget -qO- http://api:3000/health 2>&1 && \\\necho "=== frontend → db (应该失败) ===" && \\\ndocker compose exec frontend sh -c "nslookup db" 2>&1 | tail -3',
        output: '=== frontend → api ===\n{"status":"ok"}\n=== frontend → db (应该失败) ===\nserver can\'t find db: NXDOMAIN',
        explain: 'frontend 可以访问 api（在同一个 frontend-net）。frontend 不能访问 db（不在 backend-net 中）。DNS 解析失败说明 Docker DNS 正确地隔离了网络。',
      },
      {
        title: '自定义网络的 DNS 别名',
        cmd: 'docker network create app-net && \\\ndocker run -d --name api-server --network app-net \\\n  --network-alias api --network-alias backend \\\n  nginx:alpine && \\\ndocker run --rm --network app-net alpine sh -c "apk add -q curl; curl -s -o /dev/null -w \\"%{http_code}\\" http://api; echo; curl -s -o /dev/null -w \\"%{http_code}\\" http://backend"',
        output: '200\n200',
        explain: '--network-alias 给容器添加额外的 DNS 名称。同一个容器可以通过 "api" 或 "backend" 访问。适合服务发现和微服务架构。',
      },
      {
        title: '端口安全——最小化暴露',
        cmd: 'cat << \'EOF\'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - "80:80"     # 只暴露 80\n      - "443:443"   # 和 443\n    # 不暴露内部端口\n\n  api:\n    image: node:18-alpine\n    # 不映射 ports！只有同网络容器能访问\n    expose:\n      - "3000"      # expose 只是文档，不做实际映射\n\n  db:\n    image: postgres:16-alpine\n    # 不映射 ports！不暴露\nEOF',
        output: '# Port security: minimize exposed ports',
        explain: '只有 web 暴露端口到宿主机。api 和 db 不映射端口（只在 Docker 网络内可访问）。expose 只是文档声明（告诉使用者这个容器监听哪个端口），不做实际映射。最小化攻击面。',
      },
    ],
    diagnosis: [
      {
        symptom: 'docker-compose 中服务间通信失败',
        cause: '服务不在同一个网络中，或使用了 external 网络但没有正确加入。',
        fix: '确认 docker-compose.yml 中服务在同一 networks 下。docker compose exec <service> nslookup <other-service> 测试 DNS。',
      },
      {
        symptom: 'internal 网络中的容器不能拉取镜像',
        cause: 'internal 网络禁止外网访问，docker pull 需要外网。',
        fix: '先拉取镜像再加入 internal 网络。或使用私有 Registry（在同一内网中）。或在构建时把镜像烘焙进去。',
      },
      {
        symptom: '容器重启后 IP 变化导致通信失败',
        cause: '硬编码了容器 IP 而不是用容器名/服务名。容器 IP 不固定。',
        fix: '始终使用容器名或服务名通信（Docker DNS 自动更新 IP）。不要硬编码 IP。使用自定义网络确保 DNS 可用。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 docker-compose 创建两个服务（web 和 api），验证它们可以用服务名互相访问',
        hint: '默认 docker-compose 创建共享网络',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  web:\n    image: nginx:alpine\n  api:\n    image: nginx:alpine\nEOF\ndocker compose up -d\ndocker compose exec web wget -qO- http://api:80\ndocker compose down',
      },
      {
        level: '进阶',
        task: '设计三层网络拓扑（frontend/api/db），验证 frontend 不能直接访问 db',
        hint: '两个网络 + api 同时加入两个',
        answer: 'cat > docker-compose.yml << \'EOF\'\nservices:\n  frontend:\n    image: nginx:alpine\n    networks: [front]\n  api:\n    image: nginx:alpine\n    networks: [front, back]\n  db:\n    image: nginx:alpine\n    networks: [back]\nnetworks:\n  front:\n  back:\nEOF\ndocker compose up -d\ndocker compose exec frontend sh -c "wget -qO- http://api:80" 2>&1  # 成功\ndocker compose exec frontend sh -c "nslookup db" 2>&1  # 失败: NXDOMAIN\ndocker compose down',
      },
    ],
  },

  "4p5d3rzCHy4vjg2PRX-2k": {
    mentalModel: 'Hot Reloading 是"开发效率神器"：Bind Mount 把代码目录挂载到容器里，文件修改立即同步，nodemon/watchdog 检测到变化自动重启应用。改代码 → 保存 → 立即看到效果。',
    handsOn: [
      {
        title: 'Node.js 热重载——nodemon + Bind Mount',
        cmd: 'mkdir -p /tmp/hotreload && cat > /tmp/hotreload/server.js << \'EOF\'\nconst http = require("http");\nhttp.createServer((req, res) => {\n  res.end("Hello v1\\n");\n}).listen(3000);\nconsole.log("Server running on port 3000");\nEOF\ncat > /tmp/hotreload/package.json << \'EOF\'\n{"name":"app","scripts":{"dev":"nodemon server.js"},"devDependencies":{"nodemon":"*"}}\nEOF\ndocker run -d --name hotreload \\\n  -v /tmp/hotreload:/app -w /app \\\n  -p 3000:3000 \\\n  node:18-alpine \\\n  sh -c "npm install && npx nodemon server.js" && \\\nsleep 5 && curl -s http://localhost:3000',
        output: 'Hello v1',
        explain: '-v /tmp/hotreload:/app 把本地代码挂载到容器 /app。-w /app 设置工作目录。nodemon 监控文件变化，保存时自动重启 Node.js。修改 server.js 后 curl 立即看到新内容。',
      },
      {
        title: '修改文件观察自动重启',
        cmd: 'sed -i \'s/Hello v1/Hello v2 - Hot Reloaded!\' /tmp/hotreload/server.js && \\\nsleep 2 && curl -s http://localhost:3000',
        output: 'Hello v2 - Hot Reloaded!',
        explain: '修改 server.js 后不需要 docker restart。Bind Mount 让文件变化立即同步到容器。nodemon 检测到变化自动重启 Node.js。整个周期约 1-2 秒。',
      },
      {
        title: 'docker-compose 开发环境配置',
        cmd: 'cat > /tmp/hotreload/docker-compose.dev.yml << \'EOF\'\nservices:\n  app:\n    build: .\n    volumes:\n      - .:/app           # 代码同步\n      - /app/node_modules # 排除 node_modules（用容器内的）\n    ports:\n      - "3000:3000"\n    command: npx nodemon server.js\n    environment:\n      - NODE_ENV=development\n      - DEBUG=*\nEOF\necho "docker compose -f docker-compose.dev.yml up"',
        output: '# Development docker-compose with hot reload',
        explain: '两个 volume 配置：.:/app 同步代码，/app/node_modules 匿名卷覆盖（防止本地 node_modules 覆盖容器内的）。command 覆盖 Dockerfile 的 CMD 使用 nodemon。',
      },
      {
        title: 'Python Flask 热重载',
        cmd: 'mkdir -p /tmp/flask-reload && cat > /tmp/flask-reload/app.py << \'EOF\'\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Flask v1"\n\nif __name__ == "__main__":\n    app.run(host="0.0.0.0", debug=True)  # debug=True 启用热重载\nEOF\ndocker run -d --name flask-app \\\n  -v /tmp/flask-reload:/app -w /app \\\n  -p 5000:5000 \\\n  python:3.11-alpine \\\n  sh -c "pip install flask && python app.py" && \\\nsleep 10 && curl -s http://localhost:5000',
        output: 'Flask v1',
        explain: 'Flask 的 debug=True 内置热重载（不需要 nodemon）。修改 app.py 后自动重启。注意：debug 模式绝对不能在生产环境使用（有远程代码执行漏洞）。',
      },
    ],
    diagnosis: [
      {
        symptom: '文件修改后容器没有自动重启',
        cause: 'nodemon/watchdog 没有正确配置，或某些文件系统（如 NFS、WSL2）不支持 inotify 事件。',
        fix: 'nodemon 添加 --legacy-watch（轮询模式代替 inotify）：nodemon --legacy-watch server.js。WSL2/Docker Desktop 用户特别注意。',
      },
      {
        symptom: 'node_modules 被本地目录覆盖导致启动失败',
        cause: 'Bind Mount 把整个项目目录（包括本地 node_modules）挂载到容器，覆盖了容器内 npm install 的结果。',
        fix: '添加匿名卷排除 node_modules：volumes: [".:/app", "/app/node_modules"]。或在容器内执行 npm install（entrypoint 脚本）。',
      },
      {
        symptom: '热重载很慢（5 秒以上）',
        cause: 'Docker Desktop 的文件同步（virtiofs/gRPC FUSE）有延迟。大项目（>10000 文件）同步特别慢。',
        fix: '使用 Docker Desktop 的 virtiofs 文件共享（Settings → Resources → File sharing）。排除不需要同步的目录（node_modules、.git）。考虑用 Mutagen 双向同步。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 Node.js 项目，用 docker run + Bind Mount + nodemon 实现热重载',
        hint: '-v $(pwd):/app + nodemon',
        answer: 'mkdir -p /tmp/node-hot && cd /tmp/node-hot\necho \'const h=require("http");h.createServer((q,r)=>r.end("v1\\n")).listen(3000)\' > server.js\necho \'{"name":"app"}\' > package.json\ndocker run -d --name nh -v $(pwd):/app -w /app -p 3000:3000 \\\n  node:18-alpine sh -c "npm i nodemon && npx nodemon server.js"\nsleep 5 && curl localhost:3000\n# 修改 server.js，再 curl 验证\ndocker rm -f nh',
      },
      {
        level: '进阶',
        task: '写一个 docker-compose.dev.yml，实现 Node.js + PostgreSQL 开发环境，代码热重载，数据库持久化',
        hint: 'volumes + nodemon + depends_on + healthcheck',
        answer: 'services:\n  app:\n    build: .\n    volumes:\n      - .:/app\n      - /app/node_modules\n    ports: ["3000:3000"]\n    command: npx nodemon server.js\n    environment:\n      DATABASE_URL: postgres://user:pass@db:5432/dev\n    depends_on:\n      db: { condition: service_healthy }\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: pass\n      POSTGRES_DB: dev\n    volumes:\n      - pg-dev:/var/lib/postgresql/data\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready"]\n      interval: 5s\n      retries: 5\nvolumes:\n  pg-dev:',
      },
    ],
  },

  "LiAV9crrTHhLqeZhD25a2": {
    mentalModel: 'Debugger 是"容器的急诊室"：当容器行为异常时，用 docker logs 看日志、docker exec 进入排查、docker inspect 查元数据、docker diff 查文件变化、coredump 分析崩溃原因。',
    handsOn: [
      {
        title: '系统化调试流程',
        cmd: 'echo "=== Step 1: 检查容器状态 ===" && \\\ndocker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" && \\\necho "=== Step 2: 查看日志 ===" && \\\ndocker logs --tail 20 $(docker ps -q | head -1) 2>/dev/null && \\\necho "=== Step 3: 检查退出码 ===" && \\\ndocker inspect --format "ExitCode: {{.State.ExitCode}}, OOMKilled: {{.State.OOMKilled}}, Error: {{.State.Error}}" $(docker ps -aq | head -1) 2>/dev/null',
        output: '=== Step 1: 检查容器状态 ===\n=== Step 2: 查看日志 ===\n=== Step 3: 检查退出码 ===\nExitCode: 0, OOMKilled: false, Error:',
        explain: '调试第一步：确认容器状态（Running/Exited/Restarting）。查看日志找错误信息。检查退出码（0=正常，137=OOM/SIGKILL，1=应用错误）。OOMKilled 确认是否内存超限。',
      },
      {
        title: '用 docker exec 进入容器排查',
        cmd: 'docker run -d --name debug-test nginx:alpine && \\\necho "=== 进程列表 ===" && \\\ndocker exec debug-test ps aux && \\\necho "=== 网络连接 ===" && \\\ndocker exec debug-test sh -c "apk add -q net-tools && netstat -tlnp" && \\\necho "=== 磁盘使用 ===" && \\\ndocker exec debug-test df -h && \\\necho "=== 内存使用 ===" && \\\ndocker exec debug-test free -m 2>/dev/null || docker exec debug-test cat /proc/meminfo | head -3',
        output: '=== 进程列表 ===\nPID   USER  COMMAND\n    1 root  nginx: master process\n=== 网络连接 ===\nProto  Local Address  State\n  tcp  0.0.0.0:80     LISTEN\n=== 磁盘使用 ===\nFilesystem  Size  Used  Available',
        explain: 'docker exec 进入容器执行诊断命令：ps（进程）、netstat（网络）、df（磁盘）、free（内存）。Alpine 默认没有这些工具，需要临时安装。',
      },
      {
        title: 'docker diff——查看容器文件系统变化',
        cmd: 'docker exec debug-test sh -c "echo test > /tmp/newfile.txt; mkdir /newdir" && \\\ndocker diff debug-test',
        output: 'A /tmp/newfile.txt\nA /newdir\nC /var/cache/nginx\nA /var/cache/nginx/client_temp',
        explain: 'docker diff 显示容器文件系统相对于镜像的变化。A=Added（新增），C=Changed（修改），D=Deleted（删除）。帮助排查容器运行时写入了哪些文件（应该是无状态的）。',
      },
      {
        title: '用 tcpdump 抓包调试网络',
        cmd: 'docker run -d --name tcpdump-test nginx:alpine && \\\ndocker exec tcpdump-test sh -c "apk add -q tcpdump && timeout 5 tcpdump -i eth0 -c 10 port 80" &\nsleep 2 && curl -s http://$(docker inspect -f "{{.NetworkSettings.IPAddress}}" tcpdump-test)/ > /dev/null\nsleep 5',
        output: '10:30:00.123 IP 172.17.0.1.54321 > 172.17.0.2.80: Flags [S]\n10:30:00.123 IP 172.17.0.2.80 > 172.17.0.1.54321: Flags [S.]',
        explain: 'tcpdump 在容器内抓包，分析网络通信。Flags [S] 是 SYN（连接请求），[S.] 是 SYN-ACK（连接确认）。适合排查连接超时、DNS 问题、TLS 握手失败等网络问题。',
      },
    ],
    diagnosis: [
      {
        symptom: '容器反复重启（CrashLoopBackOff in K8s）',
        cause: '应用启动就崩溃。可能是配置错误、依赖不可用、代码 bug、内存不足。',
        fix: 'docker logs 查看错误。docker logs --previous 看上次崩溃日志。docker inspect ExitCode 判断类型（137=OOM，1=应用错误，2=shell 命令不存在）。',
      },
      {
        symptom: '容器内应用响应很慢',
        cause: 'CPU 不足、内存接近限制、GC 压力大、数据库慢查询、网络延迟。',
        fix: 'docker stats 看 CPU/MEM。docker exec 进入容器 top 看进程。检查应用日志中的慢查询。docker network inspect 检查网络配置。',
      },
      {
        symptom: '容器能启动但健康检查一直失败',
        cause: '应用启动慢（start-period 不够）、端口配置错误、依赖检查失败。',
        fix: 'docker exec 手动运行健康检查命令。docker logs 看应用日志。检查应用监听端口和 HEALTHCHECK 配置的端口是否一致。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '启动一个会失败的容器（exit 1），用 docker logs 和 docker inspect 排查原因',
        hint: 'docker run alpine sh -c "echo error >&2; exit 1"',
        answer: 'docker run --name fail-test alpine sh -c "echo something went wrong >&2; exit 1"\ndocker logs fail-test\n# 输出: something went wrong\ndocker inspect --format "Exit: {{.State.ExitCode}}" fail-test\n# 输出: Exit: 1\ndocker rm fail-test',
      },
      {
        level: '进阶',
        task: '创建一个容器，用 docker diff 观察运行时文件变化，找出哪些目录被写入了',
        hint: 'docker run + docker exec 写文件 + docker diff',
        answer: 'docker run -d --name diff-test nginx:alpine sleep 3600\ndocker exec diff-test sh -c "echo test > /tmp/test.txt; touch /var/log/access.log"\ndocker diff diff-test\n# 观察 A（新增）和 C（修改）的文件\ndocker rm -f diff-test',
      },
    ],
  },

  "PP_RRBo_pThe2mgf6xzMP": {
    mentalModel: 'PaaS 是"容器的酒店"：你只需要带代码入住（git push），酒店帮你搞定一切（构建、部署、扩容、SSL、日志）。Vercel/Railway/Fly.io 是现代 PaaS 代表。',
    handsOn: [
      {
        title: 'Fly.io 部署 Docker 应用',
        cmd: 'cat << \'EOF\'\n# 1. 安装 flyctl\ncurl -L https://fly.io/install.sh | sh\n\n# 2. 登录\nflyctl auth login\n\n# 3. 在项目目录初始化\nflyctl launch\n# 自动检测 Dockerfile，生成 fly.toml\n\n# 4. 部署（自动构建 Docker 镜像并部署到全球边缘节点）\nflyctl deploy\n\n# 5. 查看状态\nflyctl status\nflyctl logs\nEOF',
        output: '# Fly.io deployment workflow',
        explain: 'Fly.io 自动检测 Dockerfile 构建镜像，部署到全球边缘节点（类似 CDN）。内置 SSL、日志、监控。免费额度适合个人项目。fly.toml 配置类似 docker-compose。',
      },
      {
        title: 'Railway 部署',
        cmd: 'cat << \'EOF\'\n# 1. 安装 Railway CLI\nnpm install -g @railway/cli\n\n# 2. 登录\nrailway login\n\n# 3. 初始化项目（自动检测 Dockerfile）\nrailway init\n\n# 4. 部署\nrailway up\n\n# 5. 添加数据库（一键）\nrailway add postgresql\n# 自动注入 DATABASE_URL 环境变量\n\n# 6. 查看日志\nrailway logs\nEOF',
        output: '# Railway deployment workflow',
        explain: 'Railway 一键部署 + 一键添加数据库。自动注入环境变量（DATABASE_URL、REDIS_URL）。内置 CI/CD（git push 自动部署）。支持 Docker Compose（多容器应用）。',
      },
      {
        title: 'Vercel 部署（适合前端 + Serverless）',
        cmd: 'cat << \'EOF\'\n# 1. 安装 Vercel CLI\nnpm i -g vercel\n\n# 2. 部署（在项目目录）\nvercel\n# 自动检测框架（Next.js、Nuxt、React 等）\n# 如果有 Dockerfile，使用 Docker 构建\n\n# 3. 部署到生产\nvercel --prod\n\n# 4. 环境变量\nvercel env add DATABASE_URL production\nEOF',
        output: '# Vercel deployment workflow',
        explain: 'Vercel 最适合前端和 Serverless 应用。自动 CI/CD、预览部署（每个 PR 生成独立 URL）、全球 CDN。Dockerfile 支持但更推荐原生框架部署（更快）。',
      },
      {
        title: 'PaaS vs 自建对比',
        cmd: 'cat << \'EOF\'\n# ┌──────────────┬────────────┬────────────┬────────────┐\n# │              │ PaaS       │ VPS        │ K8s        │\n# ├──────────────┼────────────┼────────────┼────────────┤\n# │ 运维成本     │ 零         │ 中         │ 高         │\n# │ 灵活性       │ 低         │ 中         │ 高         │\n# │ 成本（小）   │ 低         │ 中         │ 高         │\n# │ 成本（大）   │ 高         │ 低         │ 中         │\n# │ 适合         │ 初创/小团队│ 中等规模   │ 大规模     │\n# └──────────────┴────────────┴────────────┴────────────┘\nEOF',
        output: '# PaaS vs VPS vs K8s comparison',
        explain: 'PaaS 适合初创和小团队（零运维、快速迭代）。VPS 适合中等规模（控制成本）。K8s 适合大规模（需要高级功能如自动扩缩容、蓝绿部署）。',
      },
    ],
    diagnosis: [
      {
        symptom: 'PaaS 部署失败——构建超时',
        cause: 'Docker 构建时间太长（PaaS 通常限制 10-15 分钟）。npm install 慢或镜像拉取慢。',
        fix: '优化 Dockerfile（多阶段构建、缓存依赖）。使用 .dockerignore。预构建镜像推送到 Registry，PaaS 直接拉取。',
      },
      {
        symptom: 'PaaS 容器启动后退出',
        cause: '应用绑定了 localhost 而不是 0.0.0.0。或端口和 PaaS 期望的不一致。',
        fix: '应用监听 0.0.0.0（不是 127.0.0.1）。使用 PORT 环境变量（PaaS 会注入）。如：app.listen(process.env.PORT || 3000)。',
      },
      {
        symptom: 'PaaS 成本突然增加',
        cause: '内存泄漏导致自动扩容，或数据库查询太多导致超出免费额度。',
        fix: '监控使用量（PaaS 仪表盘）。设置资源限制。优化应用代码。设置预算告警。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '列出 Vercel、Railway、Fly.io 的主要特点和适用场景',
        hint: '对比表',
        answer: '# Vercel: 最适合前端（Next.js），全球 CDN，预览部署\n# Railway: 全栈应用，一键数据库，Docker Compose 支持\n# Fly.io: 全球边缘部署，低延迟，适合 API 和游戏服务器\n# 选择：前端→Vercel，全栈→Railway，全球分布→Fly.io',
      },
      {
        level: '进阶',
        task: '为一个 Node.js + PostgreSQL 应用选择合适的 PaaS，写出完整部署步骤',
        hint: 'Railway（全栈 + 数据库）',
        answer: '# 选择 Railway（全栈 + 一键数据库）\n# 1. Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nCMD ["node", "server.js"]\n\n# 2. 部署\nrailway login\nrailway init\nrailway add postgresql  # 自动注入 DATABASE_URL\nrailway up\n\n# 3. 应用代码使用 process.env.DATABASE_URL',
      },
    ],
  },

  "Kmyo1_Mor9WHLkRhNShRZ": {
    mentalModel: 'Tests 是"容器的质量保证"：单元测试验证函数正确性，集成测试验证服务间交互（用 docker-compose 搭建测试环境），端到端测试验证完整用户流程。',
    handsOn: [
      {
        title: 'Docker 中的单元测试',
        cmd: 'cat << \'EOF\'\n# Dockerfile.test（专门用于测试的镜像）\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci  # 安装所有依赖（包括 devDependencies）\nCOPY . .\nCMD ["npm", "test"]\n\n# 运行测试\ndocker build -f Dockerfile.test -t myapp:test .\ndocker run --rm myapp:test\n# 输出测试结果和覆盖率\nEOF',
        output: '# Docker-based unit testing',
        explain: '用独立的 Dockerfile.test 确保测试环境和 CI 环境一致。npm ci 安装所有依赖（包括 jest/mocha 等测试框架）。docker run --rm 运行测试后自动清理。',
      },
      {
        title: '集成测试——docker-compose.test.yml',
        cmd: 'cat << \'EOF\'\n# docker-compose.test.yml\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile.test\n    command: npm run test:integration\n    depends_on:\n      db:\n        condition: service_healthy\n      redis:\n        condition: service_started\n    environment:\n      DATABASE_URL: postgres://test:test@db:5432/testdb\n      REDIS_URL: redis://redis:6379\n\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: testdb\n      POSTGRES_USER: test\n      POSTGRES_PASSWORD: test\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready -U test"]\n      interval: 3s\n      retries: 5\n    tmpfs:\n      - /var/lib/postgresql/data  # 用内存存储加速测试\n\n  redis:\n    image: redis:7-alpine\n    tmpfs:\n      - /data\nEOF\ndocker compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app',
        output: '# Integration test environment',
        explain: 'docker-compose.test.yml 创建完整测试环境。tmpfs 把数据库数据存内存（测试更快，退出后自动清理）。--abort-on-container-exit 应用退出就停止所有。--exit-code-from app 用应用退出码作为测试结果。',
      },
      {
        title: '测试数据库迁移',
        cmd: 'cat << \'EOF\'\n# 在 CI 中测试数据库迁移\nservices:\n  migrate-test:\n    build: .\n    command: >\n      sh -c "\n        npm run migrate:up &&\n        npm run migrate:status &&\n        npm run migrate:down &&\n        npm run migrate:up &&\n        echo \'Migrations OK\'\n      "\n    depends_on:\n      db:\n        condition: service_healthy\n    environment:\n      DATABASE_URL: postgres://test:test@db:5432/testdb\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_PASSWORD: test\n      POSTGRES_DB: testdb\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready"]\n      interval: 3s\n      retries: 5\nEOF',
        output: '# Migration testing',
        explain: '测试数据库迁移的可逆性：up → 验证 → down → 再 up。确保迁移脚本可以正向和反向执行。每次 PR 都测试迁移，避免上线时迁移失败。',
      },
      {
        title: '端到端测试——Playwright + Docker',
        cmd: 'cat << \'EOF\'\n# docker-compose.e2e.yml\nservices:\n  app:\n    build: .\n    ports: ["3000:3000"]\n    depends_on: [db]\n    environment:\n      DATABASE_URL: postgres://test:test@db/test\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_PASSWORD: test\n      POSTGRES_DB: test\n  e2e:\n    image: mcr.microsoft.com/playwright:v1.40.0\n    depends_on: [app]\n    command: npx playwright test\n    volumes:\n      - ./e2e:/e2e\n      - ./playwright.config.ts:/playwright.config.ts\n    environment:\n      BASE_URL: http://app:3000\nEOF\ndocker compose -f docker-compose.e2e.yml up --abort-on-container-exit --exit-code-from e2e',
        output: '# E2E testing with Playwright in Docker',
        explain: 'Playwright 官方 Docker 镜像包含浏览器（Chromium、Firefox、WebKit）。e2e 服务等待 app 就绪后运行测试。BASE_URL 指向 app 服务名（Docker 网络内解析）。',
      },
    ],
    diagnosis: [
      {
        symptom: '集成测试在 CI 中不稳定（有时通过有时失败）',
        cause: '数据库还没完全就绪就开始测试（depends_on 只等容器启动不等服务就绪）。或测试之间没有隔离（共享数据库状态）。',
        fix: '用 healthcheck + condition: service_healthy。每个测试用独立数据库事务（测试后 rollback）。或每个测试创建唯一数据。',
      },
      {
        symptom: '测试很慢（超过 5 分钟）',
        cause: '数据库用磁盘存储（I/O 慢）、没有并行化测试、每次都重新构建镜像。',
        fix: '数据库用 tmpfs（内存存储）。并行运行测试（jest --maxWorkers=4）。缓存 Docker 构建层。',
      },
      {
        symptom: 'E2E 测试中浏览器无法连接应用',
        cause: 'BASE_URL 用了 localhost（在 Docker 中指向自己容器，不是 app 容器）。',
        fix: 'BASE_URL 使用服务名：http://app:3000（不是 localhost:3000）。确保 e2e 和 app 在同一个 Docker 网络中。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '创建一个 docker-compose.test.yml，包含应用和 PostgreSQL，运行集成测试',
        hint: 'app + db + healthcheck + depends_on',
        answer: 'services:\n  app:\n    build: .\n    command: npm test\n    depends_on:\n      db: { condition: service_healthy }\n    environment:\n      DATABASE_URL: postgres://test:test@db/testdb\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: testdb\n      POSTGRES_PASSWORD: test\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready"]\n      interval: 3s\n      retries: 5\n# 运行：docker compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app',
      },
      {
        level: '进阶',
        task: '写一个 CI 脚本，依次运行单元测试、集成测试、E2E 测试，任一失败则停止',
        hint: 'set -e + 三种测试命令',
        answer: '#!/bin/bash\nset -e\n\necho "=== Unit Tests ==="\ndocker build -f Dockerfile.test -t app:test .\ndocker run --rm app:test npm test\n\necho "=== Integration Tests ==="\ndocker compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app\n\necho "=== E2E Tests ==="\ndocker compose -f docker-compose.e2e.yml up --abort-on-container-exit --exit-code-from e2e\n\necho "All tests passed!"',
      },
    ],
  },

  "hHXTth0ZP8O-iMGR9xfu9": {
    mentalModel: 'Developer Experience（DX）是"让开发者爱上 Docker"：热重载、一键启动开发环境、清晰的日志、快速的构建、有用的错误信息。好的 DX 让新人 5 分钟跑起项目。',
    handsOn: [
      {
        title: '一键启动开发环境',
        cmd: 'cat << \'EOF\'\n# Makefile 或 scripts/dev.sh\n.PHONY: dev\ndev:\n\tdocker compose -f docker-compose.dev.yml up -d\n\t@echo "Waiting for services..."\n\t@sleep 5\n\t@echo "✅ Development environment ready!"\n\t@echo "  App:     http://localhost:3000"\n\t@echo "  API:     http://localhost:3001"\n\t@echo "  DB:      localhost:5432 (user/pass)"\n\t@echo "  Redis:   localhost:6379"\n\t@echo ""\n\t@echo "Logs:  docker compose -f docker-compose.dev.yml logs -f"\n\t@echo "Stop:  docker compose -f docker-compose.dev.yml down"\nEOF',
        output: '# One-command dev environment',
        explain: '新人只需要 make dev（或 docker compose up），5 分钟内跑起整个开发环境。不需要安装 Node.js、PostgreSQL、Redis——全部在 Docker 中。README 中第一行就写这个命令。',
      },
      {
        title: '开发环境 docker-compose 配置',
        cmd: 'cat << \'EOF\'\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile.dev  # 开发专用 Dockerfile\n    volumes:\n      - .:/app                    # 代码同步\n      - /app/node_modules         # 排除 node_modules\n    ports:\n      - "3000:3000"\n    command: npm run dev          # nodemon/next dev\n    environment:\n      NODE_ENV: development\n      DATABASE_URL: postgres://dev:dev@db:5432/devdb\n    depends_on:\n      db:\n        condition: service_healthy\n\n  db:\n    image: postgres:16-alpine\n    ports:\n      - "5432:5432"              # 暴露端口让本地工具也能连\n    environment:\n      POSTGRES_DB: devdb\n      POSTGRES_USER: dev\n      POSTGRES_PASSWORD: dev\n    volumes:\n      - pg-dev:/var/lib/postgresql/data\n\n  redis:\n    image: redis:7-alpine\n    ports:\n      - "6379:6379"\n\nvolumes:\n  pg-dev:\nEOF',
        output: '# Development docker-compose.yml',
        explain: '开发环境特点：Bind Mount 同步代码、暴露数据库端口（方便用 GUI 工具连接）、使用 dev 用户/密码（简单好记）、命名卷持久化数据。和生产环境用不同的 compose 文件。',
      },
      {
        title: 'Dockerfile.dev——开发专用镜像',
        cmd: 'cat << \'EOF\'\n# Dockerfile.dev（开发镜像，包含开发工具）\nFROM node:18-alpine\n\n# 安装开发工具\nRUN apk add --no-cache git\n\nWORKDIR /app\n\n# 安装所有依赖（包括 devDependencies）\nCOPY package*.json ./\nRUN npm ci\n\n# 复制代码（开发时由 Bind Mount 覆盖）\nCOPY . .\n\n# 默认命令：开发服务器\nCMD ["npm", "run", "dev"]\n\n# 对比 Dockerfile（生产镜像，不含开发工具）\n# FROM node:18-alpine\n# WORKDIR /app\n# COPY package*.json ./\n# RUN npm ci --only=production  # 只安装生产依赖\n# COPY . .\n# CMD ["node", "server.js"]\nEOF',
        output: '# Development Dockerfile vs Production Dockerfile',
        explain: '开发镜像包含 git 等开发工具，安装所有依赖（包括 jest 等测试框架）。生产镜像只包含运行时必需的最小依赖。两个 Dockerfile 分离，避免生产镜像包含不必要的东西。',
      },
      {
        title: '实用的 Makefile 命令',
        cmd: 'cat << \'EOF\'\n# Makefile\n.PHONY: dev stop test lint build shell logs clean\n\ndev:  ## 启动开发环境\n\tdocker compose -f docker-compose.dev.yml up -d\n\nstop:  ## 停止开发环境\n\tdocker compose -f docker-compose.dev.yml down\n\ntest:  ## 运行测试\n\tdocker compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app\n\nlint:  ## 代码检查\n\tdocker compose -f docker-compose.dev.yml exec app npm run lint\n\nshell:  ## 进入应用容器\n\tdocker compose -f docker-compose.dev.yml exec app sh\n\nlogs:  ## 查看日志\n\tdocker compose -f docker-compose.dev.yml logs -f\n\nclean:  ## 清理所有（包括卷）\n\tdocker compose -f docker-compose.dev.yml down -v --rmi local\nEOF',
        output: '# Makefile for Docker development',
        explain: 'Makefile 封装常用命令。make dev 启动、make test 测试、make shell 进入容器、make clean 完全清理。新人不需要记住复杂的 docker compose 命令。## 注释在 make help 中显示。',
      },
    ],
    diagnosis: [
      {
        symptom: '新人入职跑不起开发环境',
        cause: '文档过时、环境变量缺失、依赖版本不兼容、Docker 版本太旧。',
        fix: 'README 第一行就是 make dev。提供 .env.example 模板。CI 中验证 docker compose up 能成功。使用 .tool-versions 锁定工具版本。',
      },
      {
        symptom: '开发环境启动太慢（超过 2 分钟）',
        cause: 'Docker 构建没有利用缓存、镜像太大、数据库初始化太慢。',
        fix: '优化 Dockerfile 层缓存。使用 alpine 基础镜像。数据库初始化用 SQL dump 而不是 migration。预热镜像（定期 docker pull）。',
      },
      {
        symptom: '开发时容器和本地文件不同步',
        cause: 'Docker Desktop 文件共享配置问题，或 Bind Mount 路径不正确。',
        fix: 'Docker Desktop → Settings → Resources → File sharing 添加项目目录。使用 virtiofs（最快）。确认 -v 路径是绝对路径。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 Node.js 项目写 docker-compose.dev.yml，包含应用、PostgreSQL、Redis',
        hint: '三个服务 + volumes + healthcheck',
        answer: 'services:\n  app:\n    build: { context: ., dockerfile: Dockerfile.dev }\n    volumes: [".:/app", "/app/node_modules"]\n    ports: ["3000:3000"]\n    command: npm run dev\n    environment:\n      DATABASE_URL: postgres://dev:dev@db/dev\n      REDIS_URL: redis://redis:6379\n    depends_on:\n      db: { condition: service_healthy }\n  db:\n    image: postgres:16-alpine\n    ports: ["5432:5432"]\n    environment: { POSTGRES_DB: dev, POSTGRES_PASSWORD: dev }\n    volumes: ["pg-dev:/var/lib/postgresql/data"]\n    healthcheck:\n      test: ["CMD-SHELL", "pg_isready"]\n      interval: 5s\n      retries: 5\n  redis:\n    image: redis:7-alpine\n    ports: ["6379:6379"]\nvolumes:\n  pg-dev:',
      },
      {
        level: '进阶',
        task: '写一个 Makefile，封装 dev、test、lint、shell、logs、clean 六个命令',
        hint: '.PHONY + docker compose 命令',
        answer: '.PHONY: dev test lint shell logs clean\ndev:\n\tdocker compose -f docker-compose.dev.yml up -d\ntest:\n\tdocker compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from app\nlint:\n\tdocker compose -f docker-compose.dev.yml exec app npm run lint\nshell:\n\tdocker compose -f docker-compose.dev.yml exec app sh\nlogs:\n\tdocker compose -f docker-compose.dev.yml logs -f\nclean:\n\tdocker compose -f docker-compose.dev.yml down -v --rmi local',
      },
    ],
  },

  "jjA9E0J8N2frfeJCNtA1m": {
    mentalModel: 'Docker 最佳实践是"老司机的经验总结"：镜像要小（alpine+多阶段）、容器要安全（非root+只读）、日志要轮转、健康要检查、数据要持久化、配置要外部化。',
    handsOn: [
      {
        title: '生产级 Dockerfile 模板',
        cmd: 'cat << \'EOF\'\n# 最佳实践 Dockerfile\nFROM node:18-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production && npm cache clean --force\nCOPY . .\nRUN npm run build\n\nFROM node:18-alpine\nRUN apk add --no-cache curl     # 健康检查需要\n    && addgroup -S appgroup && adduser -S appuser -G appgroup\nWORKDIR /app\nCOPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules\nCOPY --from=builder --chown=appuser:appgroup /app/dist ./dist\nCOPY --from=builder --chown=appuser:appgroup /app/package.json ./\n\nUSER appuser\nEXPOSE 3000\nHEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \\\n  CMD curl -f http://localhost:3000/health || exit 1\nCMD ["node", "dist/server.js"]\nEOF',
        output: '# Production Dockerfile best practices',
        explain: '最佳实践清单：✅ 多阶段构建 ✅ alpine 基础镜像 ✅ 非 root 用户 ✅ 健康检查 ✅ 合并 RUN 减少层数 ✅ npm ci（确定性安装）✅ 清理缓存 ✅ chown 设置文件权限。',
      },
      {
        title: '生产级运行命令',
        cmd: 'cat << \'SCRIPT\'\ndocker run -d \\\n  --name production-app \\\n  --init \\                        # 正确处理信号\n  --user 1000:1000 \\              # 非 root\n  --read-only \\                   # 只读文件系统\n  --tmpfs /tmp \\                  # 可写临时目录\n  --memory=512m \\                 # 内存限制\n  --cpus=1.0 \\                    # CPU 限制\n  --pids-limit=100 \\              # 进程数限制\n  --cap-drop ALL \\                # 删除所有能力\n  --cap-add NET_BIND_SERVICE \\   # 只添加需要的\n  --security-opt no-new-privileges \\  # 禁止提权\n  --restart unless-stopped \\      # 自动重启\n  --log-driver json-file \\        # 日志驱动\n  --log-opt max-size=10m \\        # 日志轮转\n  --log-opt max-file=3 \\          # 保留 3 个文件\n  -p 8080:3000 \\                  # 端口映射\n  -v app-data:/app/data \\         # 数据卷\n  myapp:1.2.3                     # 具体版本（不用 latest）\nSCRIPT',
        output: '# Production docker run best practices',
        explain: '生产运行清单：✅ --init ✅ --user ✅ --read-only ✅ 资源限制 ✅ 能力最小化 ✅ no-new-privileges ✅ 自动重启 ✅ 日志轮转 ✅ 数据卷 ✅ 具体版本标签。',
      },
      {
        title: '.dockerignore 最佳实践',
        cmd: 'cat << \'EOF\'\n# .dockerignore\n# 版本控制\n.git\n.gitignore\n\n# 依赖（容器内重新安装）\nnode_modules\n\n# 构建产物（多阶段构建处理）\ndist\nbuild\n\n# IDE 和编辑器\n.vscode\n.idea\n*.swp\n\n# 日志和临时文件\n*.log\n*.tmp\n.env.local\n\n# Docker 文件（避免递归）\nDockerfile*\ndocker-compose*\n.dockerignore\n\n# 文档（不需要在镜像中）\n*.md\ndocs/\n\n# 测试（生产镜像不需要）\ntests/\n__tests__/\ncoverage/\nEOF',
        output: '# .dockerignore best practices',
        explain: '.dockerignore 减小构建上下文：排除 node_modules（几百 MB）、.git（可能很大）、测试文件、文档。加快构建速度，减小镜像体积。',
      },
      {
        title: '安全检查清单',
        cmd: 'cat << \'EOF\'\n# Docker 安全检查清单\n# □ 1. 基础镜像：使用 alpine/slim/distroless，定期更新\n# □ 2. 非 root：USER 指令或 --user 选项\n# □ 3. 只读文件系统：--read-only\n# □ 4. 最小能力：--cap-drop ALL + --cap-add\n# □ 5. 禁止提权：--security-opt no-new-privileges\n# □ 6. 资源限制：--memory --cpus --pids-limit\n# □ 7. 镜像扫描：Trivy/Scout 扫描 CVE\n# □ 8. 日志轮转：max-size + max-file\n# □ 9. 健康检查：HEALTHCHECK 指令\n# □ 10. 数据持久化：命名卷（不是匿名卷）\n# □ 11. 敏感信息：Secret（不是环境变量）\n# □ 12. 网络隔离：自定义网络 + 最小端口暴露\n# □ 13. 具体版本：不用 latest 标签\n# □ 14. .dockerignore：排除不必要的文件\nEOF',
        output: '# Security checklist',
        explain: '14 项安全检查清单。每项都有对应的 Docker 选项或最佳实践。新项目从第一天就遵循，老项目逐步补齐。可以用 Hadolint 检查 Dockerfile 最佳实践。',
      },
    ],
    diagnosis: [
      {
        symptom: 'Hadolint 报很多警告',
        cause: 'Dockerfile 没有遵循最佳实践（如没有版本号、RUN 没合并、用 ADD 代替 COPY）。',
        fix: '安装 Hadolint（docker run --rm -i hadolint/hadolint < Dockerfile）。逐个修复警告。优先级：DL3008（版本号）> DL3059（合并 RUN）> DL3020（用 COPY 代替 ADD）。',
      },
      {
        symptom: '团队不遵循最佳实践',
        cause: '没有自动化检查，全靠人工 review。',
        fix: 'CI 中集成 Hadolint（Dockerfile lint）和 Trivy（安全扫描）。PR 模板加检查清单。Code Review 时检查 Docker 配置。',
      },
      {
        symptom: '生产容器被入侵',
        cause: '以 root 运行、暴露了不必要的端口、使用了有漏洞的基础镜像、没有资源限制。',
        fix: '按照安全检查清单逐项检查。立即更新基础镜像。检查 docker logs 和 docker diff 分析入侵路径。加强安全配置后重新部署。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '用 Hadolint 检查一个 Dockerfile，修复所有警告',
        hint: 'docker run hadolint/hadolint',
        answer: '# 创建有问题的 Dockerfile\ncat > Dockerfile << \'EOF\'\nFROM ubuntu\nRUN apt-get update\nRUN apt-get install curl\nADD https://example.com/file.tar.gz /tmp/\nCMD echo hello\nEOF\n\n# 检查\ndocker run --rm -i hadolint/hadolint < Dockerfile\n\n# 修复后\ncat > Dockerfile << \'EOF\'\nFROM ubuntu:22.04\nRUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*\nCOPY file.tar.gz /tmp/\nCMD ["echo", "hello"]\nEOF',
      },
      {
        level: '进阶',
        task: '为一个现有项目写完整的安全加固方案：Dockerfile + docker run 命令 + CI 检查',
        hint: '参考最佳实践模板和安全检查清单',
        answer: '# 1. Dockerfile: 多阶段 + alpine + 非 root + HEALTHCHECK\n# 2. docker run: --init --user --read-only --cap-drop ALL --memory --restart --log-opt\n# 3. CI: Hadolint + Trivy + 测试\n# 4. .dockerignore: 排除 node_modules .git tests docs\n# 5. 监控: docker stats + healthcheck + 日志轮转',
      },
    ],
  },

  "r1eJZDZYouUjnGwAtRbyU": {
    mentalModel: '最佳实践进阶是"规模化治理"：单个容器做好不够，要在团队/组织层面统一标准——Dockerfile 模板、镜像签名、准入策略、成本监控、安全合规自动化。',
    handsOn: [
      {
        title: '统一 Dockerfile 模板',
        cmd: 'cat << \'EOF\'\n# templates/Dockerfile.node（团队统一模板）\n# 使用方式：复制到项目，修改 APP_NAME 和端口\nARG NODE_VERSION=18\nARG APP_NAME=myapp\n\nFROM node:${NODE_VERSION}-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production && npm cache clean --force\nCOPY . .\nRUN npm run build 2>/dev/null || true\n\nFROM node:${NODE_VERSION}-alpine\nRUN apk add --no-cache curl tini \\\n    && addgroup -S appgroup && adduser -S appuser -G appgroup\nWORKDIR /app\nCOPY --from=builder --chown=appuser:appgroup /app .\nUSER appuser\nHEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:3000/health || exit 1\nENTRYPOINT ["tini", "--"]\nCMD ["node", "dist/server.js"]\nEOF',
        output: '# Team Dockerfile template',
        explain: '团队统一模板确保所有项目遵循相同标准。使用 ARG 参数化版本和名称。tini 作为 init 进程。新人只需要从模板复制并微调。模板更新后所有项目同步升级。',
      },
      {
        title: 'CI 中的 Docker 质量门禁',
        cmd: 'cat << \'EOF\'\n# .github/workflows/docker-quality.yml\nname: Docker Quality Gate\non: [pull_request]\njobs:\n  quality:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      # 1. Dockerfile lint\n      - name: Hadolint\n        uses: hadolint/hadolint-action@v3.1.0\n        with:\n          dockerfile: Dockerfile\n          failure-threshold: warning\n\n      # 2. Build image\n      - name: Build\n        run: docker build -t app:${{ github.sha }} .\n\n      # 3. Security scan\n      - name: Trivy scan\n        uses: aquasecurity/trivy-action@master\n        with:\n          image-ref: app:${{ github.sha }}\n          severity: CRITICAL,HIGH\n          exit-code: 1\n\n      # 4. Image size check\n      - name: Size check\n        run: |\n          SIZE=$(docker image inspect app:${{ github.sha }} --format "{{.Size}}")\n          MAX=$((200 * 1024 * 1024))  # 200MB\n          if [ $SIZE -gt $MAX ]; then\n            echo "Image too large: $(($SIZE / 1024 / 1024))MB > 200MB"\n            exit 1\n          fi\nEOF',
        output: '# Docker quality gate CI pipeline',
        explain: '四重质量门禁：1. Hadolint（Dockerfile 规范）2. 构建成功 3. Trivy 安全扫描（无 CRITICAL/HIGH 漏洞）4. 镜像大小限制（<200MB）。任一失败阻止 PR 合并。',
      },
      {
        title: '镜像标签管理策略',
        cmd: 'cat << \'EOF\'\n# 镜像标签策略\n# 开发环境：feature-branch-name（每个分支一个标签）\n# Staging：staging-latest\n# 生产：git-sha + semver\n\n# GitHub Actions 自动标签\n- name: Docker meta\n  uses: docker/metadata-action@v5\n  with:\n    images: myregistry/myapp\n    tags: |\n      type=sha,prefix=\n      type=semver,pattern={{version}}\n      type=semver,pattern={{major}}.{{minor}}\n      type=ref,event=branch\n      type=ref,event=pr\n# 输出示例：\n# myregistry/myapp:a1b2c3d（git sha）\n# myregistry/myapp:1.2.3（semver）\n# myregistry/myapp:1.2（major.minor）\n# myregistry/myapp:main（分支）\n# myregistry/myapp:pr-42（PR）\nEOF',
        output: '# Image tagging strategy',
        explain: 'docker/metadata-action 自动生成多种标签。Git SHA 用于追溯，semver 用于人类可读，分支名用于开发环境，PR 号用于预览。生产部署用 SHA 标签，回滚用 semver。',
      },
      {
        title: '成本监控——Docker 资源使用报告',
        cmd: 'cat << \'SCRIPT\'\n#!/bin/bash\n# Docker 资源使用报告\necho "=== 磁盘使用 ==="\ndocker system df\n\necho ""\necho "=== 镜像大小 Top 10 ==="\ndocker images --format "{{.Size}}\\t{{.Repository}}:{{.Tag}}" | sort -rh | head -10\n\necho ""\necho "=== 容器资源使用 ==="\ndocker stats --no-stream --format "table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}"\n\necho ""\necho "=== 未使用的资源（可清理）===" \ndocker system df -v | grep -E "reclaimable|unused" || docker system prune --dry-run 2>&1 | tail -5\nSCRIPT',
        output: '# Docker resource usage report',
        explain: '定期运行资源报告：磁盘使用（是否快满了）、大镜像（是否可以优化）、容器资源（是否有资源浪费）、可清理资源（节省空间）。加入 crontab 定期执行。',
      },
    ],
    diagnosis: [
      {
        symptom: '团队有多个不同版本的 Dockerfile（标准不统一）',
        cause: '没有统一模板，每个开发者自己写。有的用 ubuntu 有的用 alpine，有的有健康检查有的没有。',
        fix: '创建团队 Dockerfile 模板（放在 monorepo 的 templates/ 目录）。新项目必须从模板复制。CI 中用 Hadolint 强制规范。',
      },
      {
        symptom: '镜像 Registry 存储成本过高',
        cause: '镜像太多且太大，没有清理策略，没有保留策略。',
        fix: '配置 Tag Retention（只保留最近 N 个标签）。定期 Garbage Collection。优化镜像大小（alpine + 多阶段）。删除废弃项目的镜像。',
      },
      {
        symptom: '生产环境使用了未经验证的镜像',
        cause: '没有镜像签名和准入控制。任何人都可以推送和部署镜像。',
        fix: '配置 cosign 镜像签名。K8s 准入控制只允许签名镜像。CI/CD 自动化确保只有流水线产出的镜像才能部署。',
      },
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 Docker 资源使用报告脚本，显示磁盘、镜像大小、容器资源',
        hint: 'docker system df + docker images + docker stats',
        answer: '#!/bin/bash\necho "=== Docker Resource Report ($(date)) ==="\necho ""\necho "--- Disk Usage ---"\ndocker system df\necho ""\necho "--- Top 5 Largest Images ---"\ndocker images --format "{{.Size}}\\t{{.Repository}}:{{.Tag}}" | head -5\necho ""\necho "--- Running Containers ---"\ndocker stats --no-stream --format "table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}"',
      },
      {
        level: '进阶',
        task: '设计一套 CI/CD 质量门禁：Dockerfile lint + 安全扫描 + 镜像大小限制 + 测试',
        hint: 'Hadolint + Trivy + size check + test',
        answer: '# GitHub Actions quality gate\nname: Docker Quality Gate\non: [pull_request]\njobs:\n  gate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: hadolint/hadolint-action@v3.1.0\n        with: { dockerfile: Dockerfile }\n      - run: docker build -t app:test .\n      - uses: aquasecurity/trivy-action@master\n        with: { image-ref: "app:test", severity: "CRITICAL", exit-code: "1" }\n      - run: |\n          SIZE=$(docker inspect app:test --format "{{.Size}}")\n          [ $SIZE -lt 209715200 ] || { echo "Too large"; exit 1; }\n      - run: docker run --rm app:test npm test',
      },
    ],
  },
};
