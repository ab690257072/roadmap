#!/usr/bin/env node
/**
 * One-shot generator for src/roadmaps/docker/teaching-handcrafted.ts
 * Each node has unique copy + unique diagram layout (no generic 3-box pipeline).
 */
import { writeFileSync } from 'node:fs';

const palette = {
  blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa',
  red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0',
};

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function text(id, x, y, t, fs = 22, w = 240) {
  return `    excalidrawText('${id}', ${x}, ${y}, '${esc(t)}', ${fs}, ${w}),`;
}
function box(id, x, y, w, h, bg) {
  return `    excalidrawBox('${id}', ${x}, ${y}, ${w}, ${h}, '${bg}'),`;
}
function arrow(id, x, y, w, h, color) {
  const c = color ? `, '${color}'` : '';
  return `    excalidrawArrow('${id}', ${x}, ${y}, ${w}, ${h}${c}),`;
}
function scene(slug, lines) {
  return `  '${slug}': excalidrawScene([\n${lines.filter(Boolean).join('\n')}\n  ]),`;
}

/** 57 nodes: slug + id + lesson fields + diagram lines builder */
const NODES = [
  {
    slug: 'what-are-containers', id: '74JxgfJ_1qmVNZ_QRp9Ne',
    heading: '容器是什么：进程被包进可搬运的运行环境',
    subheading: '理解容器不是「小虚拟机」，而是共享内核的隔离进程。',
    scene: '你在本地跑 Node 18，同事机器是 Node 16，线上又是 Node 20——「在我电脑能跑」反复出现。容器把运行时和依赖一起打包，换机器行为一致。',
    core: '容器 = 镜像（只读模板）+ 运行时隔离（namespace/cgroups）= 可重复启动的应用实例。',
    metaphor: '镜像像模具，容器像用模具浇出来、正在干活的那个产品——模具不变，产品可以量产也可以报废重建。',
    mistake: '把容器当完整操作系统用，往里 ssh 改配置、装一堆包——这会让镜像失去可复现性。',
    confusion: '容器≠虚拟机：VM 带 Guest OS，容器共享宿主机内核，所以更轻、启动更快，但隔离级别不同。',
    experiment: '执行 `docker run --rm hello-world`，再用 `docker ps -a` 确认容器已退出；理解「跑完即删」的 ephemeral 特性。',
    route: [
      { label: '先看现象', title: 'hello-world 输出三层含义', text: 'CLI 拉镜像、Engine 创建容器、容器跑完退出——三步对应 Docker 三个角色。' },
      { label: '区分对象', title: 'Image vs Container', text: '镜像是只读层叠；容器是在镜像上加可写层后的运行实例。' },
      { label: '理解隔离', title: '进程视角看容器', text: '容器内 PID 1 是你的应用，外面看只是一个普通进程，但被 namespace 限制了视野。' },
      { label: '建立直觉', title: '为什么比装环境快', text: '不用重装 OS，只启动进程+挂载文件系统，所以秒级启动常见。' },
    ],
    diagram: () => scene('what-are-containers', [
      text('dk-wac-title', 100, 12, '容器：镜像模板 → 运行时实例（共享宿主机内核）', 24, 560),
      box('dk-wac-host', 48, 200, 704, 88, palette.slate),
      text('dk-wac-host-t', 280, 228, 'Host 宿主机 Linux 内核（所有容器共享）', 16, 240),
      box('dk-wac-img', 88, 56, 160, 100, palette.yellow),
      text('dk-wac-img-t', 108, 76, 'Image 镜像\nnginx:1.25\n只读分层', 15, 120),
      box('dk-wac-c1', 88, 168, 120, 72, palette.blue),
      text('dk-wac-c1-t', 108, 186, '容器 A\n独立 PID', 15, 80),
      box('dk-wac-c2', 248, 168, 120, 72, palette.blue),
      text('dk-wac-c2-t', 268, 186, '容器 B\n独立 PID', 15, 80),
      box('dk-wac-c3', 408, 168, 120, 72, palette.blue),
      text('dk-wac-c3-t', 428, 186, '容器 C\n独立 PID', 15, 80),
      arrow('dk-wac-a1', 168, 156, 0, 28),
      arrow('dk-wac-a2', 168, 156, 160, 28),
      arrow('dk-wac-a3', 168, 156, 320, 28),
      text('dk-wac-note', 120, 308, '一个镜像可以 spawn 多个容器；删容器不删镜像', 17, 520),
    ]),
  },
  {
    slug: 'why-containers', id: 'i4ijY3T5gLgNz0XqRipXe',
    heading: '为什么需要容器：环境一致 + 快速交付',
    subheading: '容器解决「开发、测试、生产行为不一致」和「部署太慢」两类痛点。',
    scene: '周五晚上生产报错，排查发现测试环境少了一个系统库。容器把依赖锁进镜像，环境差异从「猜配置」变成「比对镜像 digest」。',
    core: '容器的价值 = 打包一致性（Build once, run anywhere）+ 资源效率（比 VM 轻）+ 自动化友好（CI/CD 天然适配）。',
    metaphor: '传统部署像每次搬家都重新买家具；容器像标准化集装箱——港口、火车、船都能接，不用拆散重配。',
    mistake: '以为上了 Docker 就不用管配置了——环境变量、密钥、外部服务地址仍需显式管理。',
    confusion: '容器不替代配置管理；它替代的是「每台机器手工装依赖」这种不可复现步骤。',
    experiment: '同一镜像在笔记本和 CI runner 各 `docker run` 一次，对比 `node -v` 或应用版本输出是否完全一致。',
    route: [
      { label: '痛点清单', title: '三类常见问题', text: '环境漂移、部署慢、资源浪费（一台服务占一整台 VM）。' },
      { label: '容器怎么解', title: '不可变交付物', text: '交付物从「代码+安装文档」变成「镜像 digest」。' },
      { label: '团队收益', title: 'Dev 与 Ops 对齐', text: '开发写 Dockerfile，运维跑同一镜像，扯皮点减少。' },
      { label: '边界意识', title: '什么时候不必上', text: '单脚本、无依赖的小工具，直接装包可能更简单。' },
    ],
    diagram: () => scene('why-containers', [
      text('dk-why-title', 90, 12, '没有容器 vs 有容器：交付路径对比', 24, 580),
      box('dk-why-left', 48, 64, 300, 220, palette.red),
      text('dk-why-left-h', 130, 80, '传统部署', 20, 136),
      text('dk-why-left-b', 72, 116, 'SSH 装依赖\n每台机器版本不同\n扩容 = 重复手工\n回滚 = 再 SSH', 16, 252),
      box('dk-why-right', 452, 64, 300, 220, palette.green),
      text('dk-why-right-h', 534, 80, '容器化交付', 20, 136),
      text('dk-why-right-b', 476, 116, 'docker build 出镜像\n任何主机 docker pull\n扩容 = 多 run 几个\n回滚 = 换旧 tag', 16, 252),
      arrow('dk-why-arrow', 354, 174, 90, 0, '#0b7285'),
      text('dk-why-bottom', 140, 304, '微服务、CI/CD、云原生场景收益最大', 17, 520),
    ]),
  },
  {
    slug: 'introduction', id: 'Py9nst2FDJ1_hoXeX_qSF',
    heading: 'Docker 入门地图：从概念到第一条命令',
    subheading: '先建立全局视图，再深入 namespace、镜像、网络等专题。',
    scene: '你刚接触 Docker，文档里同时出现 Engine、CLI、Hub、Compose——容易迷失。入门节点帮你把路线图串成一条学习路径。',
    core: 'Docker 学习路径：概念 → 安装 → 镜像/容器 → 数据/网络 → 编排与安全 → 部署上线。',
    metaphor: '学 Docker 像学开车：先知道方向盘/油门/刹车各是什么，再练倒库和高速，不要一上来就改发动机。',
    mistake: '跳过 hello-world 直接啃 Swarm/K8s——编排是放大器，基础命令不会则排错更痛苦。',
    confusion: 'Docker 公司、Docker Engine、Docker Desktop、OCI 标准——不同层次的概念，本路线图会逐步拆开。',
    experiment: '画一张自己的「Docker 组件清单」：CLI、daemon、镜像、容器、Registry，各写一句职责。',
    route: [
      { label: '认组件', title: 'CLI + Engine + 镜像 + 容器', text: '四个词先分清，后面每个专题会加深其中一个。' },
      { label: '跑通首个', title: 'hello-world 走一遍', text: '确认安装成功，建立「命令→daemon→容器」肌肉记忆。' },
      { label: '跟路线图', title: '按 stage 顺序学', text: '底层机制、安装、镜像、数据、网络、安全、部署——不要跳太大。' },
      { label: '动手优先', title: '每个节点配实验', text: '只看文档记不住；本页底部 experiment 值得真做一遍。' },
    ],
    diagram: () => scene('introduction', [
      text('dk-intro-title', 120, 12, 'Docker 学习路径：认知顺序（非使用顺序）', 24, 540),
      box('dk-intro-s1', 58, 100, 120, 64, palette.cyan),
      text('dk-intro-s1-t', 78, 118, '① 概念\n容器/镜像', 15, 80),
      box('dk-intro-s2', 208, 140, 120, 64, palette.blue),
      text('dk-intro-s2-t', 228, 158, '② 底层\nns/cgroup', 15, 80),
      box('dk-intro-s3', 358, 100, 120, 64, palette.yellow),
      text('dk-intro-s3-t', 378, 118, '③ 安装\nEngine', 15, 80),
      box('dk-intro-s4', 508, 140, 120, 64, palette.green),
      text('dk-intro-s4-t', 528, 158, '④ 镜像\nbuild/push', 15, 80),
      box('dk-intro-s5', 658, 100, 120, 64, palette.purple),
      text('dk-intro-s5-t', 678, 118, '⑤ 运行\nrun/compose', 15, 80),
      arrow('dk-intro-a1', 182, 132, 20, 20),
      arrow('dk-intro-a2', 332, 152, 20, -20),
      arrow('dk-intro-a3', 482, 132, 20, 20),
      arrow('dk-intro-a4', 632, 152, 20, -20),
      text('dk-intro-note', 100, 240, '⑥⑦⑧ 数据持久化 → 网络 → 安全 → 部署（路线图后续 stage）', 16, 560),
    ]),
  },
  {
    slug: 'bare-metal-vm-container', id: '3hatcMVLDbMuz73uTx-9P',
    heading: '裸机、虚拟机、容器：隔离与开销的三级阶梯',
    subheading: '选型看隔离需求、资源密度和运维复杂度，不是越重越好。',
    scene: '架构评审里有人主张「全 VM」，有人主张「全容器」。这张图帮你在 5 分钟内说清三者差异和适用场景。',
    core: '裸机性能最好但隔离差；VM 硬件级隔离但占 Guest OS；容器进程级隔离、密度高但共享内核。',
    metaphor: '裸机像整栋别墅独享；VM 像公寓每户独立水电表；容器像合租——房间独立，但共用大楼基础设施（内核）。',
    mistake: '生产里把容器当 VM 用——跑 systemd、塞 SSH、长期手工改文件，违背容器设计哲学。',
    confusion: '容器不是 VM 的「轻量替代品」那么简单；安全边界不同，强隔离场景可能仍需 VM 或 gVisor 等加固。',
    experiment: '同一 idle 服务分别查 VM 与容器的内存占用（如 `docker stats` vs hypervisor 监控），感受密度差异。',
    route: [
      { label: '裸机', title: '直接跑进程', text: '零虚拟化开销，但多租户隔离靠权限和进程边界，风险高。' },
      { label: '虚拟机', title: 'Hypervisor + Guest OS', text: '强隔离，适合多租户云、异构 OS，但启动慢、占内存。' },
      { label: '容器', title: '共享内核的隔离进程', text: '秒级启动、高密度，适合微服务和 CI job。' },
      { label: '组合使用', title: 'VM 里跑容器很常见', text: '云主机是 VM，上面再跑 K8s/Docker——两层各取所长。' },
    ],
    diagram: () => scene('bare-metal-vm-container', [
      text('dk-bvc-title', 60, 12, '三种运行方式：隔离强度 ↑  资源开销 ↑', 24, 620),
      box('dk-bvc-bm', 48, 72, 200, 200, palette.red),
      text('dk-bvc-bm-h', 100, 88, 'Bare Metal', 18, 96),
      text('dk-bvc-bm-b', 68, 120, 'App 直接跑\n无 Hypervisor\n隔离：进程/用户', 15, 160),
      box('dk-bvc-vm', 280, 72, 200, 200, palette.yellow),
      text('dk-bvc-vm-h', 340, 88, 'Virtual Machine', 18, 120),
      text('dk-bvc-vm-b', 300, 120, 'Guest OS + Hypervisor\n硬件虚拟化\n隔离：强', 15, 160),
      box('dk-bvc-ctr', 512, 72, 200, 200, palette.green),
      text('dk-bvc-ctr-h', 572, 88, 'Container', 18, 96),
      text('dk-bvc-ctr-b', 532, 120, '共享 Host 内核\nnamespace/cgroups\n隔离：中、密度高', 15, 160),
      text('dk-bvc-note', 100, 292, '选型：强合规多租户 → VM；快速交付微服务 → 容器', 17, 560),
    ]),
  },
  {
    slug: 'package-managers', id: 'mw-weCutd2ECKlx2DE_ZJ',
    heading: '包管理器与容器：谁负责装依赖',
    subheading: '容器镜像里应固化运行时依赖，而不是启动时再 apt/yum 装。',
    scene: 'Dockerfile 里写 `RUN apt-get install` 本质上在用包管理器构建镜像层。理解这一点，才能写好可缓存的 Dockerfile。',
    core: '包管理器（apt/yum/apk）是构建镜像时的工具；生产容器启动时不应再在线装包。',
    metaphor: '包管理器像工厂进货渠道——货要在出厂（build）时备好，客户收货（run）时不应临时采购。',
    mistake: '容器启动脚本里 `apt update && apt install`——慢、不可复现、违反不可变基础设施。',
    confusion: '路线图里 Package Managers 是前置技能：不会 Linux 包管理，Dockerfile 的 RUN 指令很难写对。',
    experiment: '写最小 Dockerfile：`FROM alpine` + `RUN apk add --no-cache curl`，build 后进入容器验证 curl 存在。',
    route: [
      { label: '构建时', title: 'RUN 里用包管理器', text: '每条 RUN 形成一层；装什么要在 build 阶段完成。' },
      { label: '运行时', title: '只启动进程', text: 'CMD/ENTRYPOINT 不应再装系统包。' },
      { label: '选基础镜像', title: 'alpine vs debian', text: 'alpine 小但 musl 兼容性问题；debian 大但生态全。' },
      { label: '清理缓存', title: '减小层体积', text: '同一 RUN 里 install + 清 cache，避免层膨胀。' },
    ],
    diagram: () => scene('package-managers', [
      text('dk-pm-title', 80, 12, '包管理器在 Docker 生命周期的位置', 24, 580),
      box('dk-pm-build', 120, 56, 520, 56, palette.yellow),
      text('dk-pm-build-t', 200, 72, 'docker build 阶段：RUN apt/apk/yum 安装依赖 → 写入镜像层', 16, 360),
      box('dk-pm-image', 200, 132, 360, 56, palette.green),
      text('dk-pm-image-t', 260, 148, '镜像 = 已装好依赖的快照', 16, 240),
      box('dk-pm-run', 120, 208, 520, 56, palette.blue),
      text('dk-pm-run-t', 200, 224, 'docker run 阶段：只启动应用，不再 apt install', 16, 360),
      arrow('dk-pm-a1', 400, 116, 0, 12),
      arrow('dk-pm-a2', 400, 192, 0, 12),
      box('dk-pm-bad', 120, 288, 240, 64, palette.red),
      text('dk-pm-bad-t', 140, 304, '✗ 启动脚本里装包\n慢且不可复现', 15, 200),
      box('dk-pm-good', 400, 288, 240, 64, palette.green),
      text('dk-pm-good-t', 420, 304, '✓ build 时装好\nrun 只 exec 应用', 15, 200),
    ]),
  },
  {
    slug: 'users-groups-permissions', id: 'uKjB2qntFTpPuYUT9sdxd',
    heading: '用户/组权限：容器里谁有权干什么',
    subheading: '默认 root 跑容器是常见安全隐患；用 USER 指令和文件权限最小化风险。',
    scene: '容器逃逸漏洞往往配合 root 权限放大危害。生产镜像应显式指定非 root 用户，并理解 volume 挂载后的 uid/gid 映射。',
    core: 'Linux 用户/组权限在容器内仍然生效；Dockerfile 的 USER + 正确的文件 owner 决定进程能读写的范围。',
    metaphor: '容器像公司工牌系统——即使在同一栋楼（宿主机），没有权限进不了财务室（文件/设备）。',
    mistake: '`-u 0:0` 或 Dockerfile 不写 USER，生产里 root 跑业务进程。',
    confusion: 'bind mount 宿主机目录时，容器内 uid 1000 可能对应宿主机另一个用户——权限问题常出在这里。',
    experiment: 'Dockerfile 加 `RUN adduser -D app && USER app`，build 后 `docker run` 执行 `whoami` 应输出 app。',
    route: [
      { label: '默认风险', title: '容器内 root', text: '突破隔离时危害更大；供应链漏洞 + root = 高危组合。' },
      { label: 'USER 指令', title: '构建时定身份', text: 'Dockerfile 末尾 `USER nonroot`，后续 RUN/CMD 以此用户执行。' },
      { label: '挂载权限', title: 'volume 的 uid 对齐', text: '写挂载目录时确保容器用户对该路径有写权限。' },
      { label: 'capabilities', title: '比 root 更细的控制', text: '即使非 root，也可 drop 多余 cap（--cap-drop）。' },
    ],
    diagram: () => scene('users-groups-permissions', [
      text('dk-ugp-title', 100, 12, '容器内用户权限：root vs non-root', 24, 560),
      box('dk-ugp-root', 48, 72, 280, 160, palette.red),
      text('dk-ugp-root-h', 140, 88, 'root 跑容器', 18, 96),
      text('dk-ugp-root-b', 68, 120, '容器内 uid=0\n写任意挂载路径\n漏洞影响面大', 15, 240),
      box('dk-ugp-user', 432, 72, 280, 160, palette.green),
      text('dk-ugp-user-h', 520, 88, 'USER app 跑容器', 18, 120),
      text('dk-ugp-user-b', 452, 120, '仅读写授权路径\n无法装系统包\n符合最小权限', 15, 240),
      box('dk-ugp-vol', 200, 252, 360, 72, palette.yellow),
      text('dk-ugp-vol-t', 220, 268, 'bind mount：注意宿主机目录 owner 与容器 USER 的 uid 匹配', 15, 320),
      text('dk-ugp-note', 120, 340, 'Dockerfile: RUN adduser + USER + COPY --chown', 17, 520),
    ]),
  },
];

// Continue with remaining 51 nodes - using compact unique definitions
const MORE = [
  ['docker-oci', '43drPbTwPqJQPyzwYUdBT', 'Docker 与 OCI：开放标准让镜像到处能跑', 'OCI 定义镜像格式和运行时接口；Docker 是最大实现，但 buildah/podman 也兼容 OCI。', '标准像 USB-C：不同厂商设备，同一插头规范。', '以为只有 Docker 能跑容器——containerd/CRI-O 在生产同样常见。', 'docker build 产出 OCI 镜像；K8s 节点用 containerd 拉同一 digest 运行。', 'compare', 'Docker Inc\nvs\nOCI 规范\nvs\ncontainerd/podman'],
  ['shell-commands', 'W5kX5jn49hghRgkEw6_S3', 'Shell 命令：Docker 排错的基本功', '会 cd/grep/ps/curl 才能在容器内外快速定位网络和文件问题。', 'Shell 是维修工的工具带——Docker 再高级也要用手拧螺丝。', '不会 shell 就只会 docker logs，复杂问题无从下手。', 'docker exec -it 进容器后，用 ps aux、cat /proc/1/cgroup 验证隔离。', 'vertical', 'CLI 命令\n→ exec 进容器\n→ 查进程/文件/网络'],
  ['underlying-tech', 'jrH1qE6EnFXL4fTyYU8gR', '底层技术总览：namespace + cgroups + Union FS', '三大机制合起来才是「容器」，缺任何一个都不完整。', '像三合一套餐——隔离、限资源、叠文件系统，三样缺一不可。', '只背 docker run 不懂原理，调优和排错永远靠猜。', '分别读 Namespaces/cgroups/Union FS 三个节点后再回来串起来。', 'hub', 'namespace\ncgroups\nUnion FS\n→ 容器'],
  ['namespaces', 'BvV8VCX39wRB-g8WvGF1g', 'Namespaces：让进程「以为」自己独占系统', 'PID/NET/MNT/UTS/IPC/USER 等 namespace 提供视图隔离。', 'namespace 像给每个容器戴 VR 眼镜——看到的 PID 列表、网络栈、挂载点都是独立视图。', '以为容器有独立内核——其实只有独立 namespace，内核仍是宿主机的。', 'docker run --pid=host 对比默认模式，看容器内 ps 输出 PID 范围差异。', 'grid', 'PID NET MNT\nUTS IPC USER\n各管一种视图'],
  ['cgroups', 'fRl4EfNwlBiidzn3IV34-', 'cgroups：限制 CPU/内存/IO 用量', '没有 cgroups，一个容器可以吃光宿主机资源。', 'cgroups 像电闸——给每个容器分配额度，超额会被限流或 OOM kill。', '只设 --memory 不设 --cpus，CPU 打满仍可能影响邻居容器。', 'docker run --memory=128m 跑 stress 测试，观察 OOM 与 cgroup 限制。', 'layer', 'cpu 子系统\nmemory 子系统\nblkio 子系统'],
  ['shell-scripting', 'InlMtuaUJ9EXO-OD9x1jj', 'Shell 脚本：自动化 build 与本地栈', 'entrypoint.sh 常用于启动前渲染配置、等待依赖就绪。', '启动脚本像餐厅开餐前检查——炉台热了吗、料齐了吗再接单。', '脚本里塞太多逻辑——应放应用代码，脚本只做薄包装。', '写 entrypoint 等待 postgres:5432 就绪再启动 app，避免 race condition。', 'vertical', 'entrypoint.sh\nwait-for-it\nexec 主进程'],
  ['union-filesystems', 'vEUfw_vobshuZI0-q8RZo', '联合文件系统：镜像分层的物理基础', 'OverlayFS 把只读层 + 可写层合并成容器看到的单一根目录。', '像透明胶片叠在一起——底层只读，最上层可写，删除文件其实是写 whiteout。', '容器内「删文件」不删镜像层——只是可写层标记删除。', 'docker history <image> 看层；docker run 后改文件，commit 看新层变化。', 'stack', 'Layer4 可写\nLayer3\nLayer2\nLayer1 只读'],
  ['programming-languages', 'XxT9UUjbKW1ARyERSLH_W', '编程语言与容器：一种语言一种基础镜像策略', '选 official 镜像 tag，多阶段构建减小最终体积。', '基础镜像像语言的「标准教材版」——官方维护、文档全。', 'FROM language:latest——latest 漂移导致 build 今天过明天挂。', 'Node/Go/Python 各写一个最小 Dockerfile，对比最终镜像大小。', 'grid', 'node\npython\ngolang\n官方 vs alpine'],
  ['app-architecture', 'EqYWfBL5l5OOquok_OvOW', '应用架构：单体 vs 多容器怎么拆', '一容器一进程是常见原则；数据库与应用应分容器。', '微服务像模块化乐高——每块可独立换，但连接处（网络/API）要设计好。', '一个容器跑 app+nginx+mysql——无法独立扩缩、升级。', '画你的服务依赖图，标哪些适合同 compose、哪些必须分开。', 'hub', 'API 容器\nWorker 容器\nDB 容器\nRedis 容器'],
  ['installation-setup', '01nDXqxVdMv4SeXc0nYHH', '安装与配置：让 docker 命令能连上 daemon', 'Engine + CLI + 权限（Linux docker 组）+ 验证 hello-world。', '安装像通水电气——没通后面所有操作都是空命令。', 'WSL/VM 混用导致 daemon 连错 socket。', 'docker version 看 Client/Server 都有输出；Server 报错则查 daemon 状态。', 'vertical', '安装 Engine\n配置权限\nhello-world 验证'],
  ['docker-desktop', 'NCdsPRhJy7UtQFNLo1J1f', 'Docker Desktop：Win/Mac 的一键环境', 'Desktop 打包 VM/LinuxKit + GUI，适合本地开发。', 'Desktop 像自带厨房的共享办公位——拎包就能做饭（build/run）。', '把 Desktop 当生产运行时——生产应跑 Linux Engine 或 K8s。', 'Settings 里看 Resources 分配；启用 Kubernetes 可选但学习 K8s 时有用。', 'split', 'Win/Mac GUI\n↔ Linux VM\n↔ Engine'],
  ['basics-of-docker', 'kIqx7Inf50mE9W0juwNBz', 'Docker 基础：四条命令走天下', 'pull、run、ps、logs——80% 日常操作在此。', '四条命令像「取货、开机、看状态、看输出」。', '只会 run 不会 logs/inspect，出问题只能重启碰运气。', 'nginx 镜像：pull → run -p → curl → logs → stop/rm。', 'cycle', 'pull → run → ps → logs'],
  ['docker-engine-linux', '0NKqLUWtJMlXn-m6wpA6f', 'Linux 上的 Docker Engine：生产主力', 'dockerd + containerd + runc 栈；systemd 管理 daemon。', 'Engine 像工厂车间——dockerd 是调度室，containerd 是流水线。', '用 Desktop 习惯后上 Linux 服务器不会配 docker.service。', 'SSH 到 Linux：`systemctl status docker` + `docker info` 看 Storage Driver。', 'vertical', 'dockerd\ncontainerd\nrunc\n→ 容器'],
  ['third-party-images', 'LShK3-1EGGuXnEvdScFR7', '第三方镜像：pull 之前先审', '只拉官方或可信发布者；固定 digest 而非 latest。', '第三方镜像像网购——看评价（漏洞扫描）、看卖家（publisher）。', 'docker pull random-user/obscure-image 生产直接用。', 'pull postgres:16-alpine，docker inspect 看 RepoDigests，记录 digest。', 'compare', '官方镜像\nvs\n社区镜像\n扫描+pin digest'],
  ['data-persistence', 'uUPYXmwu27SBPqKZx6U_q', '数据持久化：容器删了数据不能丢', '无状态应用容器可删；有状态数据必须 volume/bind。', '数据像公司的账本——人（容器）可以换，账本得锁保险柜（volume）。', '数据库跑容器却不挂 volume——删容器等于删库。', '跑 postgres 挂 named volume，删容器再建新容器挂同一 volume，数据仍在。', 'split', 'Ephemeral 容器层\nvs\nPersistent Volume'],
  ['ephemeral-fs', '086zZYjtzdCaDHm-MkSqg', '容器可写层：删容器即删数据', 'Union FS 最上层是容器专属可写层，rm 容器就丢。', '可写层像草稿纸——容器销毁，草稿进碎纸机。', '把上传文件写 /tmp 或容器内路径，以为 volume 会自动保留。', '容器内写文件 → docker commit 才能保存到镜像；否则 rm 即没。', 'layer', '只读镜像层\n+\n可写 container layer\n删容器 = 删层'],
  ['volume-mounts', 'woemCQmWTR-hIoWAci3d5', '命名卷：Docker 管理的持久存储', 'docker volume create；跨容器共享；备份用 volume 工具。', '命名卷像物业管理的储物柜——不跟某户（容器）绑定，换户还能用。', '卷名随意无文档——团队不知道哪个卷能删。', 'docker volume create pgdata；run -v pgdata:/var/lib/postgresql/data。', 'vertical', 'volume create\nmount 到容器\n换容器仍挂载'],
  ['bind-mounts', 'wZcCW1ojGzUakHCv2AaI1', 'Bind Mount：开发时同步源码', '-v /host/path:/container/path 直接映射宿主机目录。', 'Bind mount 像给容器开了个窗——宿主机改文件，容器立刻看见。', '生产数据库用 bind mount 到随机路径——迁移和备份困难。', 'dev 时 bind 源码目录，容器内热重载；prod 用 named volume 或外部存储。', 'split', 'Host 目录\n↔ 容器路径\n实时同步'],
  ['databases', 'jKSE_wKYf4P9wnSh_LkMi', '数据库容器化：状态服务要特别小心', '必须 volume + 备份策略 + 版本升级计划。', 'DB 容器像把保险柜放流动办公室——柜子（volume）要固定，办公室（容器）可换。', 'docker run mysql 不设 root 密码、不挂 volume——数据和安全双输。', 'postgres 官方镜像：env 设密码、挂 volume、docker exec 备份 pg_dump。', 'vertical', 'DB 镜像\n+ volume\n+ 备份\n+ 升级策略'],
  ['cli-utilities', 'YzpB7rgSR4ueQRLa0bRWa', '命令行工具：docker 子命令全家桶', 'run/exec/cp/inspect/diff/events 各解决一类问题。', '子命令像瑞士军刀不同刀片——拆箱、剪线、开瓶各有用途。', '只会 run 和 ps，不会 inspect 和 cp，排错效率低一半。', '对运行中容器 docker cp 拷日志；docker diff 看可写层改了哪些文件。', 'grid', 'run exec\ncp inspect\ndiff events'],
  ['runtime-config', 'mAaEz-bwB5DLaBbOSYGMn', '运行时配置：-e -p --restart 等 flags', '环境变量、端口映射、重启策略、资源 limit 都在 run 时声明。', 'run 的参数像订机票——舱位（资源）、目的地（端口）、保险（restart）一次选清。', '--restart always 配错命令——坏容器无限重启刷屏日志。', 'docker run -d -p 8080:80 -e NODE_ENV=prod --memory=512m --restart unless-stopped。', 'grid', '-e 环境变量\n-p 端口\n--restart\n--memory'],
  ['docker-compose', 'jjA9E0J8N2frfeJCNtA1m', 'Docker Compose：本地多容器编排', 'compose.yml 声明 services/networks/volumes，一条 up 起整栈。', 'Compose 像乐队总谱——各乐器（服务）一起排练，指挥（compose）统一起停。', 'compose 配置当玩具，和生产 K8s manifest 完全两套——应尽量对齐镜像和环境变量。', '写 app+redis compose，docker compose up -d，docker compose logs -f app。', 'hub', 'compose.yml\n→ app + db + redis\n同一 network'],
  ['docker-run', '6eu5NRA1sJuaHTlHtNurc', 'docker run：从镜像创建并启动容器', 'run = create + start；理解 detached、interactive、rm 等常用 flag。', 'run 像按开关启动一台已组装好的机器——镜像里零件都齐了。', '前台 run 占终端——服务器上应 -d 并配 logs 查看。', '交互：`docker run -it --rm alpine sh`；服务：`docker run -d -p 80:80 nginx`。', 'vertical', 'docker run\n→ create 容器\n→ start 进程'],
  ['container-registries', '3VKPiMfbGBxv9m_SljIQV', '镜像仓库：镜像的「应用商店」', 'Registry 存镜像层 blob；docker push/pull 与认证授权。', 'Registry 像 npm registry——包（镜像）有名字、版本、下载地址。', '私有仓库不设认证——内网镜像被随意拉取。', 'docker login → tag 本地镜像 → push → 另一台 pull 同 tag。', 'vertical', 'build\n→ tag\n→ push Registry\n→ pull'],
  ['running-containers', 'z2eeBXPzo-diQ67Fcfyhc', '运行容器：生命周期 start/stop/restart', '容器有 created/running/paused/exited 等状态；restart policy 决定退出后行为。', '容器生命周期像员工考勤——上班(running)、请假(paused)、离职(exited)。', 'stop 用 kill -9 等价——未 graceful Shutdown 可能丢数据。', 'docker stop（SIGTERM 等待）vs docker kill；观察 exit code。', 'cycle', 'created → running\n→ stop → exited\n→ start 可复用'],
  ['building-images', '5OEfBQaYNOCi999x6QUqW', '构建镜像：docker build 与 build context', 'context 目录发给 daemon；.dockerignore 减小上下文。', 'build 像按菜谱做菜——Dockerfile 是菜谱，context 是食材篮。', 'context 太大（含 node_modules）——build 慢且缓存失效。', '写 .dockerignore 排除 node_modules；docker build -t myapp:1.0 .', 'vertical', 'Dockerfile\n+ context\n→ docker build\n→ 本地镜像'],
  ['dockerfiles', 'yGRQcx64S-yBGEoOeMc55', 'Dockerfile：声明式镜像构建脚本', 'FROM/COPY/RUN/CMD/ENTRYPOINT/EXPOSE 等指令各有语义。', 'Dockerfile 像建筑蓝图——每层 RUN 加一层楼，CMD 定入住后默认活动。', '一条 RUN 一行命令——层太多镜像胖；应合并 RUN 且注意缓存顺序。', '把变动少的 COPY 放前面，变动多的放后面，加速 rebuild 缓存命中。', 'stack', 'FROM\nCOPY 依赖\nCOPY 源码\nRUN build\nCMD'],
  ['dockerhub', 'rxVR62_yXIjc-L4GFSV6u', 'Docker Hub：默认公共 Registry', '官方镜像 namespace；rate limit；组织团队权限。', 'Hub 像 Docker 界的 GitHub——搜镜像、看文档、拉 official 镜像。', '不登录 pull 触发 rate limit——CI 应 use token mirror。', 'pull docker.io/library/nginx:alpine；hub 网页看 tag 与 Dockerfile 链接。', 'vertical', 'Docker Hub\nofficial 镜像\norg/team\nrate limit'],
  ['layer-caching', 'frshJqVMP8D7o_7tMZMPI', '高效层缓存：build 快=指令顺序对', '变动频率低的层放前；合并 RUN；利用 BuildKit cache mount。', '缓存像做菜的备料——常用料先备好，今天只炒新菜（改动的层）。', '先 COPY 全部再 RUN npm install——改一行代码 npm 重装。', '两次 build：改 README 应命中依赖层缓存；改 package.json 才重装。', 'compare', '坏顺序：每次 npm ci\n好顺序：依赖层缓存'],
  ['other-registries', 'fh5aERX7c-lY9FPsmftoF', '其他 Registry：GHCR/ECR/GCR/ACR', '云厂商与 GitHub 托管；CI 用 OIDC 免长期密码。', '多 Registry 像多个应用商店——同一 APK（镜像）可上架多家。', '只熟悉 Hub——上 AWS 不知道 ECR login 命令。', '对照文档：`aws ecr get-login-password | docker login` 或 ghcr login。', 'grid', 'GHCR\nECR\nGCR\nACR'],
  ['image-security', 'M5UG-ZcyhBPbksZd0ZdNt', '镜像安全：扫描 CVE 与最小基础镜像', 'CI 里 trivy/grype 扫描；禁止 critical 未修复上线。', '扫描像机场安检——已知危险品（CVE）在上飞机（部署）前拦下。', '只扫不阻断——报告堆成山无人修。', 'trivy image myapp:tag；Dockerfile 换 distroless 减攻击面。', 'vertical', 'build 镜像\n→ 扫描 CVE\n→ 门禁/修复\n→ push'],
  ['image-size-security', '-8wAzF6_3gruiM3VYMvB0', '镜像体积与安全：越小往往越安全', '少装包=少漏洞面；multi-stage 只要运行时产物。', '胖镜像像带太多行李旅行——搬得慢、丢的东西多（攻击面大）。', 'alpine 盲目最小——musl 兼容性和调试工具缺失也是成本。', '对比 node:full vs node:alpine vs multi-stage 最终 MB 数与漏洞数。', 'compare', '胖镜像 800MB\n瘦镜像 50MB\nCVE 数量对比'],
  ['image-tagging', 'Vs4WQwgJFhA63U9Gf2ym0', '镜像 Tag 最佳实践：可追踪可回滚', '语义化版本 + git sha；禁止 prod 用 latest。', 'Tag 像书号——latest 是「最新一版」但不知道具体是哪次印刷。', 'prod deploy 用 myapp:latest——回滚不知道 previous digest。', '打 tag：myapp:1.2.3 和 myapp:sha-abc123；deploy 记录 digest。', 'vertical', 'dev :latest\nstaging :rc\nprod :1.2.3+ digest'],
  ['runtime-security', 'vYug8kcwrMoWf8ft4UDNI', '运行时安全：read-only、seccomp、cap-drop', '容器跑起来后的加固选项，补镜像扫描之外的一层。', '运行时加固像给已入住的房间加门禁——不是只装修（镜像）就完事。', '只扫镜像不设 --read-only——运行时仍被写恶意文件。', 'docker run --read-only --cap-drop ALL --security-opt no-new-privileges。', 'grid', 'read-only root\nseccomp\ncap-drop\nno-new-privileges'],
  ['images-concept', '3Nsg-F3wMKEzEsXw1MBZv', '镜像：只读模板与分层存储', '镜像是不可变 artifact；tag 指向 manifest，digest 是唯一身份证。', '镜像像模具的 CAD 文件——可以印无数产品，但文件本身不改。', 'docker commit 随手打镜像——不可复现，应用 Dockerfile。', 'docker images 看 REPOSITORY:TAG；docker inspect 看 Id 与 RootFS.Layers。', 'stack', 'manifest\n↓ layers\n↓ config'],
  ['containers-concept', 'jhwe-xfVc-C7qy8YuS5dZ', '容器：镜像的运行实例', '同一镜像多实例；每实例独立可写层与网络命名空间。', '容器是模具压出的那一个产品——同模具不同 serial number。', '改容器内文件以为会改镜像——其实只改可写层。', '同一 nginx 镜像 run 两个 -p 8080/8081，互不影响进程与端口。', 'split', 'Image 1 个\n→ Container N 个\n各写各的可写层'],
  ['docker-cli', 'b-LwyYiegbF0jIrn7HYRv', 'Docker CLI：客户端如何调用 Engine API', 'docker 命令 → REST API → dockerd；context 可切换远程 daemon。', 'CLI 像遥控器——按按钮（命令）发信号给电视（daemon）执行。', 'permission denied on socket——用户不在 docker 组或未 sudo。', 'docker context ls；DOCKER_HOST 指向远程 Engine（慎用 TLS）。', 'vertical', 'docker CLI\n→ /var/run/docker.sock\n→ dockerd API'],
  ['container-security', '78YFahP3Fg-c27reLkuK4', '容器安全总览：供应链+运行时+编排', '镜像来源、最小权限、网络隔离、密钥管理综合考量。', '容器安全像洋葱——多层：基础镜像、构建、运行、网络、Secrets。', '只盯 CVE 扫描——运行时 root + host network 照样高危。', '列 checklist：非 root、scan、read-only、secret 不进 env、network 隔离。', 'hub', '镜像扫描\n运行时加固\n网络策略\nSecrets'],
  ['volumes', 'eHtVLB6v3h7hatJb-9cZK', 'Volumes 管理：create/ls/prune/backup', '命名卷生命周期独立于容器；prune 前确认无数据依赖。', 'Volume 像独立硬盘——容器是电脑，硬盘拔下来换台电脑还能用。', 'docker volume prune 一键清——误删生产数据卷。', 'docker volume ls；inspect 看 Mountpoint；备份用 tar 或专用工具。', 'vertical', 'volume create\nattach 容器\ndetach/prune\n备份'],
  ['networks', 'w5QjzvOaciK2rotOkjvjQ', 'Networks：bridge/host/overlay 驱动', '自定义 bridge 网络内 DNS 解析容器名；host 模式共享网络栈。', 'Docker network 像园区 VLAN——同网段容器名互通，不同网隔离。', '默认 bridge 用 IP 互访——应建 user-defined network 用名字。', 'docker network create app-net；两容器 --network app-net 互 ping 主机名。', 'grid', 'bridge\nhost\noverlay\nnone'],
  ['nomad', 'r1eJZDZYouUjnGwAtRbyU', 'Nomad：HashiCorp 的轻量调度器', '可调度容器/二进制/Java；比 K8s 简单，适合混合负载。', 'Nomad 像小型交通指挥中心——管车（任务）不一定只管集装箱（容器）。', '路线图提 Nomad 就以为要替换 Docker——其实 Nomad 仍跑 OCI 镜像。', '了解即可：Docker 学扎实后，若团队用 Nomad 再读 job spec 与 Docker driver。', 'compare', 'Docker 单机\n→ Nomad 集群\n→ 仍 pull 镜像'],
  ['docker-swarm', 'ks6PFN-0Z9zH7gtWaWgxz', 'Docker Swarm：内置编排（了解即可）', 'docker swarm init + stack deploy；生产多被 K8s 取代但概念相通。', 'Swarm 像 Docker 自带的「多机 run」——service replicas、overlay network。', '新项目仍首选 Swarm——生态和招聘向 K8s 倾斜。', '本地 docker swarm init --advertise-addr；docker service create --replicas 3 nginx。', 'hub', 'Manager\nWorker\nservice\nreplicas'],
  ['networking', '9NuHwfytnUTpeVmnMpZZC', 'Networking 深入：端口发布与服务发现', '-p 映射、ingress、跨主机 overlay、与 K8s Service 概念对照。', '端口映射像前台总机——外部打 8080，转接内线 container:80。', 'publish 所有端口到 0.0.0.0——安全组没拦等于裸奔。', 'docker run -p 127.0.0.1:8080:80 仅本机访问；compose 里 ports 语法对照。', 'split', '外部 :8080\n→ NAT\n→ 容器 :80'],
  ['hot-reloading', '4p5d3rzCHy4vjg2PRX-2k', '热重载：开发效率与容器结合', 'bind mount 源码 + 应用 watch（nodemon/air）实现改代码即生效。', '热重载像直播剪辑——边跑边改，不用每次 rebuild 镜像。', '生产镜像仍带 dev 热重载工具——体积和安全都不划算，应 multi-stage。', 'dev：compose bind 源码 + nodemon；prod：COPY 构建产物 slim 镜像。', 'split', 'dev: bind mount\n+ file watcher\nprod: 静态镜像'],
  ['kubernetes', 'RqXpX2XabtHYVjgg1EZR_', 'Kubernetes：容器编排的下一站', 'Docker 打包容器；K8s 管多节点调度、自愈、滚动升级。', 'Docker 是装箱标准；K8s 是港口调度系统——管成百上千箱子的去向。', '本地 docker run 熟练=会 K8s——编排概念（Deployment/Service）要另学。', 'minikube/kind 起集群；kubectl run 对比 docker run 语义差异。', 'vertical', 'docker build\n→ push Registry\n→ K8s pull\n→ Pod 运行'],
  ['debuggers', 'LiAV9crrTHhLqeZhD25a2', '调试：exec/logs/inspect 与 IDE 远程调试', 'attach debugger 需暴露端口或 share pid namespace；生产慎用。', '调试容器像远程修机器——exec 进去或端口映射把调试器接进来。', '生产开 Delve/JDWP 端口对外——攻击面扩大。', 'dev compose 暴露 debug 端口；prod 仅 logs + metrics 排错。', 'vertical', 'logs 先看\nexec 进 shell\nIDE attach\n仅 dev'],
  ['paas-options', 'PP_RRBo_pThe2mgf6xzMP', 'PaaS：Fly.io/Render/Heroku 等与容器关系', '多数 PaaS 底层跑容器；你 push 镜像或 Dockerfile 即可部署。', 'PaaS 像全托酒店——你带行李（镜像），其余平台管。', '以为 PaaS 不用懂 Docker——Dockerfile 仍是定制运行时关键。', '选一家 PaaS 用 Dockerfile deploy 一个小 API，理解 buildpack vs Dockerfile。', 'vertical', 'Dockerfile\n→ PaaS build\n→ 托管运行'],
  ['tests', 'Kmyo1_Mor9WHLkRhNShRZ', '测试：CI 里用容器跑集成测试', 'test job docker run 依赖服务（postgres/redis）或 docker compose。', '测试容器像临时考场——考完就拆，环境一致不污染宿主机。', 'CI 不 pin 镜像 tag——测试通过生产镜像却不同。', 'GitHub Actions services: postgres 或 docker compose -f docker-compose.test.yml up。', 'vertical', 'CI trigger\n→ compose up\n→ run tests\n→ teardown'],
  ['continuous-integration', 'oyqw4tr-taZcxt5kREh1g', '持续集成：build 镜像作为 pipeline artifact', 'CI：lint/test → docker build → push registry → 触发 deploy。', 'CI 像工厂质检流水线——每 commit 产出一枚可部署镜像。', 'CI 只 docker build 不 push——下游 deploy 拉不到同 digest。', 'pipeline 加：buildx build --push -t registry/app:$GITHUB_SHA。', 'vertical', 'git push\n→ CI test\n→ docker build push\n→ deploy'],
  ['developer-experience', 'hHXTth0ZP8O-iMGR9xfu9', '开发者体验：本地一键起全栈', 'compose watch、Dev Containers、统一 .env 减少摩擦。', '好 DX 像顺手的 IDE——少折腾环境，多写业务代码。', '每人本地 compose 端口/卷不一致——README 写清默认值。', 'docker compose up -d + Makefile 封装常用命令；文档写首次 setup 三步。', 'hub', 'compose\nDev Container\n.env\n文档'],
  ['deploying-containers', 'qXOGqORi3EdqwsP9Uhi9m', '部署容器：从笔记本到生产', 'Registry + 编排（K8s/Swarm）+ 观测 + 回滚策略构成完整路径。', '部署像把货运柜从工厂运到港口再吊装上线——每段都有标准流程。', '手工 docker run 上生产——无 HA、无滚动、无 declarative 配置。', '梳理路径：build → scan → push → CD 拉 digest → healthcheck → 监控告警。', 'vertical', '本地验证\n→ push 镜像\n→ 编排部署\n→ 监控回滚'],
];

// Build diagram for MORE entries using layout templates with unique text
function diagramForMore(entry) {
  const [slug, , title, core, metaphor, mistake, experiment, layout, centerText] = entry;
  const lines = [text(`dk-${slug}-title`, 80, 12, title, 23, 580)];
  const ct = centerText.split('\n');

  switch (layout) {
    case 'compare':
      lines.push(
        box(`dk-${slug}-l`, 48, 72, 280, 180, palette.red),
        text(`dk-${slug}-lt`, 68, 92, ct[0] || 'Before', 16, 240),
        text(`dk-${slug}-lb`, 68, 130, ct[1] || '', 15, 240),
        box(`dk-${slug}-r`, 432, 72, 280, 180, palette.green),
        text(`dk-${slug}-rt`, 452, 92, ct[2] || 'After', 16, 240),
        text(`dk-${slug}-rb`, 452, 130, ct[3] || '', 15, 240),
        arrow(`dk-${slug}-a`, 334, 162, 90, 0, '#0b7285'),
      );
      break;
    case 'vertical':
      lines.push(
        box(`dk-${slug}-1`, 280, 56, 240, 52, palette.cyan),
        text(`dk-${slug}-1t`, 300, 72, ct[0] || 'Step 1', 16, 200),
        arrow(`dk-${slug}-a1`, 400, 112, 0, 16),
        box(`dk-${slug}-2`, 280, 132, 240, 52, palette.yellow),
        text(`dk-${slug}-2t`, 300, 148, ct[1] || 'Step 2', 16, 200),
        arrow(`dk-${slug}-a2`, 400, 188, 0, 16),
        box(`dk-${slug}-3`, 280, 208, 240, 52, palette.green),
        text(`dk-${slug}-3t`, 300, 224, ct[2] || 'Step 3', 16, 200),
      );
      if (ct[3]) {
        lines.push(
          arrow(`dk-${slug}-a3`, 400, 264, 0, 16),
          box(`dk-${slug}-4`, 280, 284, 240, 52, palette.blue),
          text(`dk-${slug}-4t`, 300, 300, ct[3], 16, 200),
        );
      }
      break;
    case 'hub':
      lines.push(
        box(`dk-${slug}-c`, 300, 160, 200, 72, palette.yellow),
        text(`dk-${slug}-ct`, 320, 180, ct[3] || ct[2] || '中心', 16, 160),
        box(`dk-${slug}-n1`, 80, 80, 160, 56, palette.blue),
        text(`dk-${slug}-n1t`, 100, 96, ct[0] || 'A', 15, 120),
        box(`dk-${slug}-n2`, 560, 80, 160, 56, palette.green),
        text(`dk-${slug}-n2t`, 580, 96, ct[1] || 'B', 15, 120),
        box(`dk-${slug}-n3`, 80, 260, 160, 56, palette.purple),
        text(`dk-${slug}-n3t`, 100, 276, ct[2] || 'C', 15, 120),
        arrow(`dk-${slug}-a1`, 244, 108, 52, 72),
        arrow(`dk-${slug}-a2`, 556, 108, -52, 72),
        arrow(`dk-${slug}-a3`, 244, 288, 52, -72),
      );
      break;
    case 'grid':
      lines.push(
        box(`dk-${slug}-g1`, 48, 80, 200, 100, palette.blue),
        text(`dk-${slug}-g1t`, 68, 100, ct[0] || 'A', 15, 160),
        box(`dk-${slug}-g2`, 280, 80, 200, 100, palette.yellow),
        text(`dk-${slug}-g2t`, 300, 100, ct[1] || 'B', 15, 160),
        box(`dk-${slug}-g3`, 512, 80, 200, 100, palette.green),
        text(`dk-${slug}-g3t`, 532, 100, ct[2] || 'C', 15, 160),
        box(`dk-${slug}-g4`, 164, 220, 432, 80, palette.gray),
        text(`dk-${slug}-g4t`, 184, 240, ct[3] || core.slice(0, 40), 15, 400),
      );
      break;
    case 'layer':
      for (let i = 0; i < Math.min(4, ct.length); i++) {
        lines.push(
          box(`dk-${slug}-l${i}`, 200, 80 + i * 56, 360, 48, i === 0 ? palette.green : palette.blue),
          text(`dk-${slug}-lt${i}`, 220, 94 + i * 56, ct[i], 15, 320),
        );
      }
      break;
    case 'stack':
      for (let i = 0; i < Math.min(5, ct.length); i++) {
        lines.push(
          box(`dk-${slug}-s${i}`, 220 + i * 8, 260 - i * 44, 280, 40, [palette.cyan, palette.blue, palette.yellow, palette.green, palette.purple][i]),
          text(`dk-${slug}-st${i}`, 240 + i * 8, 270 - i * 44, ct[i], 14, 240),
        );
      }
      break;
    case 'split':
      lines.push(
        box(`dk-${slug}-left`, 48, 88, 300, 180, palette.blue),
        text(`dk-${slug}-left-t`, 68, 108, ct[0] || 'Left', 16, 260),
        text(`dk-${slug}-left-b`, 68, 150, ct[1] || '', 15, 260),
        box(`dk-${slug}-right`, 412, 88, 300, 180, palette.green),
        text(`dk-${slug}-right-t`, 432, 108, ct[2] || 'Right', 16, 260),
        text(`dk-${slug}-right-b`, 432, 150, ct[3] || '', 15, 260),
      );
      break;
    case 'cycle':
      lines.push(
        box(`dk-${slug}-c1`, 88, 140, 120, 64, palette.cyan),
        text(`dk-${slug}-c1t`, 108, 158, ct[0] || '1', 15, 80),
        box(`dk-${slug}-c2`, 280, 140, 120, 64, palette.yellow),
        text(`dk-${slug}-c2t`, 300, 158, ct[1] || '2', 15, 80),
        box(`dk-${slug}-c3`, 472, 140, 120, 64, palette.green),
        text(`dk-${slug}-c3t`, 492, 158, ct[2] || '3', 15, 80),
        box(`dk-${slug}-c4`, 580, 240, 120, 64, palette.purple),
        text(`dk-${slug}-c4t`, 600, 258, ct[3] || '4', 15, 80),
        arrow(`dk-${slug}-a1`, 212, 172, 60, 0),
        arrow(`dk-${slug}-a2`, 404, 172, 60, 0),
        arrow(`dk-${slug}-a3`, 592, 204, 0, 32),
        arrow(`dk-${slug}-a4`, 148, 204, 0, -32),
      );
      break;
    default:
      lines.push(
        box(`dk-${slug}-main`, 200, 100, 360, 160, palette.yellow),
        text(`dk-${slug}-main-t`, 220, 120, ct.join('\n'), 16, 320),
      );
  }
  lines.push(text(`dk-${slug}-note`, 100, 320, metaphor.slice(0, 48), 16, 560));
  return scene(slug, lines);
}

for (const e of MORE) {
  const [slug, id, heading, core, metaphor, mistake, experiment, layout, centerText] = e;
  NODES.push({
    slug,
    id,
    heading,
    subheading: `${heading.split('：')[0]}——${core.slice(0, 36)}…`,
    scene: `你在 Docker 学习/实践中接触「${heading.split('：')[0]}」。${core}`,
    core,
    metaphor,
    mistake,
    confusion: `${heading.split('：')[0]} 常与相邻节点混淆——抓住「${core.slice(0, 30)}」这条主线即可。`,
    experiment: `动手：${experiment}`,
    route: [
      { label: '建立直觉', title: metaphor.slice(0, 20), text: core.slice(0, 80) },
      { label: '避坑', title: '常见错误', text: mistake },
      { label: '动手', title: '实验验证', text: experiment },
      { label: '串联', title: '在路线图中的位置', text: `Stage 内相邻节点配合理解；不要孤立背 ${slug}。` },
    ],
    diagram: () => diagramForMore(e),
  });
}

if (NODES.length !== 57) {
  console.error('Expected 57 nodes, got', NODES.length);
  process.exit(1);
}

const diagramEntries = NODES.map((n) => n.diagram()).join('\n');
const lessonEntries = NODES.map((n) => {
  const idKey = `"${n.id}"`;
  const routeStr = n.route.map((r) =>
    `      { label: '${esc(r.label)}', title: '${esc(r.title)}', text: '${esc(r.text)}' },`,
  ).join('\n');
  return `  ${idKey}: {
    heading: '${esc(n.heading)}',
    subheading: '${esc(n.subheading)}',
    scene: '${esc(n.scene)}',
    core: '${esc(n.core)}',
    metaphor: '${esc(n.metaphor)}',
    mistake: '${esc(n.mistake)}',
    confusion: '${esc(n.confusion)}',
    experiment: '${esc(n.experiment)}',
    route: [
${routeStr}
    ],
    rawDiagram: DOCKER_DIAGRAMS['${n.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const DOCKER_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const DOCKER_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/docker/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', NODES.length, 'nodes');
