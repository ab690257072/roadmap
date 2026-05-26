#!/usr/bin/env node
/**
 * Generates src/roadmaps/linux/teaching-handcrafted.ts
 * 102 nodes — unique Chinese copy + semantic Excalidraw per node.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const palette = {
  blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa',
  red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0',
};

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
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

function loadNodes() {
  const data = readFileSync('src/roadmaps/linux/data.ts', 'utf8');
  const start = data.indexOf('const data = ') + 'const data = '.length;
  const end = data.indexOf(';\n\nexport const stages', start);
  const parsed = JSON.parse(data.slice(start, end));
  const nodes = [];
  parsed.stages.forEach((s, i) => s.nodes.forEach((n) => nodes.push({ ...n, stage: i + 1, stageEn: s.en, stageZh: s.zh })));
  return nodes;
}

function slugify(label, id) {
  const base = label.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9/-]+/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return base || `node-${id.slice(0, 8)}`;
}

const baseSpecs = JSON.parse(readFileSync('scripts/linux-node-specs.json', 'utf8'));
const specById = Object.fromEntries(baseSpecs.map((s) => [s.id, s]));

const ZH = {
  'Basic Commands': '基础命令', 'Moving Files / Directories': '移动文件与目录', 'Navigation Basics': '目录导航',
  'Creating & Deleting Files / Dirs': '创建与删除', 'Vim': 'Vim 编辑器', 'Nano': 'Nano 编辑器',
  'Editing Files': '编辑文件', 'Directory Hierarchy Overview': '目录层级', 'Command Path': '命令搜索路径',
  'stdout / stdin / stderr': '标准流', 'cut': 'cut 列切割', 'Environment Variables': '环境变量',
  paste: 'paste 合并列', sort: 'sort 排序', tr: 'tr 字符替换', head: 'head 取头部', 'Command Help': '命令帮助',
  'Shell and Other Basics': 'Shell 基础', tail: 'tail 取尾部', join: 'join 关联', split: 'split 拆分',
  pipe: '管道', Redirects: '重定向', tee: 'tee 分流', nl: 'nl 行号', wc: 'wc 计数', expand: 'expand 制表符',
  'Super User': '超级用户', unexpand: 'unexpand', uniq: 'uniq 去重', grep: 'grep 搜索', awk: 'awk 处理',
  'File Permissions': '文件权限', 'Archiving and Compressing': '打包压缩', 'Working with Files': '文件操作',
  'Text Processing': '文本处理', 'Copying and Renaming': '复制与重命名', 'Soft Links / Hard Links': '软链与硬链',
  'Process Management': '进程管理', 'Server Review': '服务器巡检', 'Background / Foreground Processes': '前后台进程',
  'Uptime and Load': '负载与 uptime', 'User Management': '用户管理', 'Listing / Finding Processes': '查找进程',
  'Authentication Logs': '认证日志', 'Create / Delete / Update': '用户增删改', 'Process Signals': '进程信号',
  'Killing Processes': '终止进程', 'Services Running': '运行中的服务', 'Users and Groups': '用户与组',
  'Process Priorities': '进程优先级', 'Process Forking': '进程 fork', 'Available Memory / Disk': '内存与磁盘',
  'Managing Permissions': '权限管理', 'Creating New Services': '创建 systemd 服务', Inodes: 'inode',
  Filesystems: '文件系统', 'Checking Service Logs': '服务日志', 'Service Management (systemd)': 'systemd 管理',
  Mounts: '挂载', LVM: 'LVM 逻辑卷', 'Starting / Stopping Services': '启停服务', 'Adding Disks': '添加磁盘',
  Swap: 'Swap 交换区', 'Checking Service Status': '服务状态', 'Package Management': '包管理',
  'Disks and Filesystems': '磁盘与文件系统', 'Package Repositories': '软件源', Snap: 'Snap 包', Logs: '系统日志',
  'Finding & Installing Packages': '查找安装包', 'Boot Loaders': '引导加载器', 'Booting Linux': 'Linux 启动',
  'Listing Installed Packages': '已装包列表', 'TCP/IP Stack': 'TCP/IP 协议栈', 'Install / Remove / Upgrade Packages': '包安装升级',
  Subnetting: '子网划分', 'Ethernet & arp/rarp': '以太网与 ARP', Networking: '网络基础', Literals: 'Shell 字面量',
  Variables: 'Shell 变量', DHCP: 'DHCP', 'IP Routing': 'IP 路由', Loops: 'Shell 循环', Conditionals: 'Shell 条件',
  'DNS Resolution': 'DNS 解析', Debugging: 'Shell 调试', Netfilter: 'Netfilter 防火墙', SSH: 'SSH 远程',
  'File Transfer': '文件传输', 'Shell Programming': 'Shell 编程', ICMP: 'ICMP 协议', ping: 'ping 探测',
  ulimits: 'ulimit 资源限制', cgroups: 'cgroups 资源组', traceroute: 'traceroute 路由跟踪', Troubleshooting: 'Linux 排障',
  'Container Runtime': '容器运行时', netstat: 'netstat 连接', Docker: 'Docker 入门', 'Packet Analysis': '抓包分析',
  Containerization: '容器化原理',
};

const STAGE_HINT = {
  1: '文件导航', 2: 'Shell 与路径', 3: '文本流基础', 4: '管道与重定向', 5: '文本统计', 6: '文件与文本处理',
  7: '进程与服务巡检', 8: '用户与进程控制', 9: '资源与权限', 10: 'systemd 与磁盘', 11: '服务与包管理',
  12: '磁盘、日志与引导', 13: '启动与 TCP/IP', 14: '网络与 Shell', 15: '脚本与 DNS/防火墙', 16: 'Shell 编程与网络工具',
  17: '排障与容器',
};

const METAPHOR_POOL = {
  map: ['像 GPS：先定位再导航', '像图书馆索书号：先找架位再取书', '像仓库货架编号：A 区 3 排 2 层'],
  move: ['像搬家：箱子上要贴新旧地址', '像快递转运：揽收点和派送点不能写反', '像数据库 UPDATE：WHERE 写错整表遭殃'],
  editor: ['像手术：先消毒备份再下刀', '像合同修订：track changes 比直接改安全', '像飞行检查单：改完要复核再签字'],
  tree: ['像公司组织架构：先找部门再找小组', '像 DOM 树：父节点决定子路径', '像 git 目录：根 commit 下挂分支'],
  path: ['像快递分拣：按 PATH 顺序试投递口', '像电话簿检索：第一个匹配就用', '像 DNS 递归：一层层找解析器'],
  streams: ['像三条水管：清水、污水、备用口', '像广播/对讲/告警三个频道', '像 stdin 喂料 stdout 出货 stderr 报警'],
  slice: ['像切蛋糕：先定刀口再取块', '像 SQL SELECT 列：只拿需要的字段', '像日志 grep 前先看一行样本'],
  env: ['像环境变量是进程的配置单', '像 export 给子进程发通行证', '像 .env 文件是启动前的 checklist'],
  table: ['像 Excel 分列：定分隔符再拆', '像 CSV 解析：逗号还是制表符', '像 awk 按列编程'],
  filter: ['像筛网：孔径决定留下什么', '像安检：匹配规则才放行', '像 grep 正则：模式越准噪音越少'],
  permission: ['像三重门禁：业主、员工、访客', '像 chmod 发钥匙：r 看 w 改 x 进', '像最小权限：只开需要的门'],
  archive: ['像快递打包：tar 装箱 gzip 压缩', '像 zip 归档：多个文件一个包', '像备份磁带：完整包比散文件可靠'],
  link: ['软链像快捷方式：目标删了链就断', '硬链像同一文件的多个名字', 'ln -s 是指路牌，ln 是别名'],
  process: ['像 Task Manager：先看 PID 再结束', '像 kill 发通知：TERM 礼貌 KILL 强制', '像父子进程：杀父不一定杀子'],
  user: ['像 UID/GID 是工牌和部门证', '像 sudo 是临时授权不是换身份', '像 /etc/passwd 是人事档案'],
  service: ['像 systemd 是总调度：start/stop/status', '像 unit 文件是服务说明书', '像 journalctl 是黑匣子'],
  disk: ['像磁盘→分区→文件系统→挂载四连', '像 LVM 是弹性隔断', '像 df/du 是库存盘点'],
  package: ['像 apt/yum 是应用商店+依赖解析', '像 repo 是软件仓库清单', '像 dpkg -l 是已购清单'],
  boot: ['像接力赛：固件→GRUB→内核→systemd', '像 GRUB 选内核菜单', '像 initramfs 是内核临时拐杖'],
  network: ['像 OSI 分层：逐层 ping 到通', '像 DNS→IP→路由→端口四步排查', '像 tcpdump 是网络显微镜'],
  script: ['像脚本 = 输入+判断+退出码', '像 set -e 遇错即停', '像函数是 reusable 积木'],
  firewall: ['像 iptables/nftables 安检口', '像规则链：匹配→ACCEPT/DROP', '像默认策略是最后一道门'],
  ssh: ['像加密隧道：本机命令在远端执行', '像密钥对：公钥锁、私钥开', '像 scp/rsync 走同一条 SSH 管道'],
  container: ['像 namespace 戴 VR 眼镜', '像 cgroup 是电闸限流', '像容器共享内核不是小 VM'],
  trouble: ['像漏斗排障：现象→观察→假设→验证', '像一次只改一个变量', '像写 postmortem 留证据链'],
};

const HEADING_SUFFIX = {
  map: ['先定位再操作', '目录是地图', 'pwd 定锚点'],
  move: ['来源目标要分清', 'mv/cp 前先 pwd', '覆盖前先确认'],
  editor: ['能改也要能退', '改配置先备份', 'Esc :wq 是安全带'],
  tree: ['层级比命令重要', '父子路径关系', '从 / 往下走'],
  path: ['PATH 决定找谁', 'which 验证命中', '同名命令谁先'],
  streams: ['三条标准流', '重定向接水管', '2>&1 合并 stderr'],
  slice: ['切列再加工', '先 head 看样本', '定分隔符'],
  env: ['export 传子进程', 'env 看当前', '$VAR 展开'],
  table: ['分列再合并', 'paste/join 联表', 'sort 后再 uniq'],
  filter: ['筛噪音留信号', 'grep 正则', 'awk 模式动作'],
  permission: ['三组 rwx', 'chmod 最小权限', 'umask 默认掩码'],
  archive: ['tar 打包', 'gzip 压缩', '解压到临时目录'],
  link: ['软链 vs 硬链', 'ln -s 快捷方式', '别链到生产目录'],
  process: ['先看 PID', 'ps/top 巡检', 'TERM 再 KILL'],
  user: ['UID/GID 三角', 'useradd/usermod', 'sudo 审计'],
  service: ['systemd 生命周期', 'unit + journalctl', 'enable 开机自启'],
  disk: ['磁盘四层链', 'mount 挂载点', 'LVM 弹性扩容'],
  package: ['仓库→包管理器→本机', 'apt/yum/dnf', '锁版本防漂移'],
  boot: ['启动接力赛', 'GRUB 选内核', 'journalctl -b'],
  network: ['分层排查', 'DNS/IP/路由/端口', 'ping 不通先查哪层'],
  script: ['变量+条件+循环', '退出码 $?', 'set -x 调试'],
  firewall: ['规则链匹配', 'INPUT/OUTPUT/FORWARD', '默认策略'],
  ssh: ['加密远程通道', '密钥登录', 'scp/sftp 传文件'],
  container: ['namespace+cgroup', '共享内核', 'docker run 本质'],
  trouble: ['证据漏斗', '一次一假设', '改完要验证'],
};

function pick(pool, index) {
  return pool[index % pool.length];
}

function craftRoute(spec, zh, stage) {
  const cmd = spec.command;
  const routesByKind = {
    map: [
      { label: '定位置', title: 'pwd 与 ls', text: `先用 pwd 确认当前目录，ls 看清 ${zh} 操作的对象在哪。` },
      { label: '读命令', title: cmd, text: '把命令拆成「对象 + 动作 + 选项」，搞清会改什么。' },
      { label: '小步试', title: '临时目录练手', text: '在 /tmp 或测试目录先跑一遍，避免误伤生产路径。' },
      { label: '验结果', title: 'ls/stat 复查', text: '无报错不等于正确，用 ls -la 或 stat 确认最终状态。' },
    ],
    move: [
      { label: '双路径', title: '来源与目标', text: 'mv/cp 前写全路径或先 cd 到安全目录，防止覆盖错文件。' },
      { label: '执行', title: cmd, text: '加 -i 交互确认，或 --dry-run（若工具支持）先看计划。' },
      { label: '风险', title: spec.risk, text: '跨文件系统 mv 可能变 copy+delete；同名目标会直接覆盖。' },
      { label: '复查', title: 'ls 两边对照', text: '源侧应消失/减少，目标侧应出现预期内容。' },
    ],
    editor: [
      { label: '备份', title: 'cp 一份再改', text: '改 nginx.conf、unit 文件前先 cp file file.bak。' },
      { label: '编辑', title: cmd, text: 'Vim 记 Esc 回普通模式；Nano 看底部快捷键提示。' },
      { label: '保存', title: '写盘前 diff', text: ':w 或 Ctrl+O 后，用 diff 或 cat 看变更是否符合预期。' },
      { label: '生效', title: 'reload/restart', text: '配置类文件改完常需 systemctl reload 或 nginx -t && reload。' },
    ],
    process: [
      { label: '列表', title: 'ps aux / top', text: '先拿到 PID、USER、CPU/MEM、CMD，别凭名字猜进程。' },
      { label: '详情', title: cmd, text: '用 ps -p PID -o 或 /proc/PID/ 看状态、父进程、打开文件。' },
      { label: '信号', title: 'TERM → KILL', text: '先 SIGTERM 优雅退出，超时再 SIGKILL；注意孤儿进程。' },
      { label: '记录', title: '谁杀了什么', text: '生产操作记 audit/journal，方便复盘。' },
    ],
    service: [
      { label: 'unit', title: '看单元文件', text: 'systemctl cat 服务名，理解 ExecStart、Type、Restart 策略。' },
      { label: '状态', title: cmd, text: 'systemctl status 看 Active 与最近几行日志摘要。' },
      { label: '日志', title: 'journalctl -u', text: '失败时 journalctl -xe 或 -u unit --since today 查原因。' },
      { label: '自启', title: 'enable/disable', text: 'enable 是开机；disable 不删 unit，只是不自动拉。' },
    ],
    network: [
      { label: '本机', title: 'ip addr / ss', text: '先确认本机地址、路由、监听端口是否正常。' },
      { label: '邻居', title: cmd, text: 'ping/traceroute/dig 按层验证：链路→IP→DNS→端口。' },
      { label: '防火墙', title: 'iptables/nft', text: '通不通还要看本机与中间防火墙是否 DROP。' },
      { label: '抓包', title: 'tcpdump 佐证', text: '仍有疑义时抓包看 SYN/RST 和 DNS 响应。' },
    ],
    script: [
      { label: '结构', title: 'shebang + set -euo', text: '脚本开头声明解释器；set -e 遇错退出，-u 未定义变量报错。' },
      { label: '逻辑', title: cmd, text: '条件 [ ]、循环 for/while、函数封装重复逻辑。' },
      { label: '调试', title: 'bash -x script.sh', text: 'set -x 打印每条命令；echo "$var" 看变量展开。' },
      { label: '退出码', title: 'echo $?', text: '0 成功非 0 失败；CI 和 cron 依赖退出码判断。' },
    ],
  };
  if (routesByKind[spec.diagram]) return routesByKind[spec.diagram];
  return [
    { label: '场景', title: `${STAGE_HINT[stage] || 'Linux'} 中的 ${zh}`, text: spec.core.slice(0, 90) },
    { label: '命令', title: cmd, text: `围绕「${spec.subject}」完成${spec.action}。` },
    { label: '避坑', title: '常见误区', text: spec.mistake.slice(0, 90) },
    { label: '实验', title: '动手验证', text: spec.experiment.slice(0, 90) },
  ];
}

function craftContent(spec, node, index) {
  const zh = ZH[spec.label] || spec.label;
  const kind = spec.diagram || 'map';
  const stage = node.stage;
  const hint = STAGE_HINT[stage] || 'Linux 运维';

  const heading = `${zh}：${pick(HEADING_SUFFIX[kind] || HEADING_SUFFIX.map, index)}`;
  const subheading = `Stage ${stage}（${hint}）：用 ${spec.command} 理解 ${spec.subject}，而不是死记英文术语。`;
  const scene = `生产排障遇到「${spec.label}」：${spec.subject} 出问题时常要 ${spec.action}。你要在 ${hint} 语境下读懂命令输出与风险边界。`;
  const core = `${zh} = ${spec.command} → ${spec.action} → ${spec.result}（对象：${spec.subject}）`;
  const metaphor = pick(METAPHOR_POOL[kind] || METAPHOR_POOL.map, index);
  const mistake = `别跳过观察直接 ${spec.command}：${spec.risk} 在真实环境可能一次就造成不可恢复损失。`;
  const confusion = `${zh} 的边界是「${spec.action}」，不要和同 stage 其它命令混为一谈；先确认对象属于 ${spec.subject}。`;
  const experiment = `mkdir -p /tmp/linux-lab && cd /tmp/linux-lab，安全演练：${spec.command}，观察输出并用 echo $? 看退出码。`;

  return {
    id: spec.id,
    label: spec.label,
    slug: slugify(spec.label, spec.id),
    heading,
    subheading,
    scene,
    core,
    metaphor,
    mistake,
    confusion,
    experiment,
    route: craftRoute(spec, zh, stage),
    diagramKind: kind,
    command: spec.command,
    subject: spec.subject,
    action: spec.action,
    result: spec.result,
    risk: spec.risk,
  };
}

/** Semantic Excalidraw builders — one layout per diagram kind, node-specific text */
function buildDiagram(spec) {
  const p = `lx-${spec.slug}`;
  const title = `${ZH[spec.label] || spec.label} · ${spec.command}`;
  const shortTitle = (ZH[spec.label] || spec.label).slice(0, 18);
  const cmd = spec.command;
  const object = spec.subject;
  const action = spec.action;
  const result = spec.result;
  const risk = spec.risk;
  const note = spec.metaphor.slice(0, 56);
  const kind = spec.diagramKind;

  const lines = [text(`${p}-title`, 70, 10, title, 22, 620)];

  switch (kind) {
    case 'map':
      lines.push(
        box(`${p}-you`, 52, 124, 136, 90, palette.blue),
        text(`${p}-you-t`, 78, 148, '当前目录\npwd / ls', 16, 84),
        box(`${p}-map`, 286, 84, 178, 168, palette.yellow),
        text(`${p}-map-t`, 314, 110, `${object}\n${cmd}`, 16, 122),
        box(`${p}-target`, 560, 124, 146, 90, palette.green),
        text(`${p}-target-t`, 584, 148, result, 16, 98),
        arrow(`${p}-a1`, 194, 168, 86, -10),
        arrow(`${p}-a2`, 470, 168, 84, 0),
      );
      break;
    case 'move':
      lines.push(
        box(`${p}-src`, 48, 118, 150, 100, palette.blue),
        text(`${p}-src-t`, 74, 144, '来源\n旧路径', 16, 98),
        box(`${p}-cmd`, 304, 92, 154, 150, palette.yellow),
        text(`${p}-cmd-t`, 330, 120, `${cmd}\n${action}`, 16, 102),
        box(`${p}-dst`, 560, 118, 150, 100, palette.green),
        text(`${p}-dst-t`, 586, 144, '目标\n新路径', 16, 98),
        box(`${p}-risk`, 304, 278, 154, 68, palette.red),
        text(`${p}-risk-t`, 330, 298, risk, 15, 102),
        arrow(`${p}-a1`, 204, 168, 94, 0),
        arrow(`${p}-a2`, 464, 168, 90, 0),
      );
      break;
    case 'editor':
      lines.push(
        box(`${p}-file`, 54, 108, 150, 112, palette.blue),
        text(`${p}-file-t`, 80, 134, '先备份\n再打开', 16, 98),
        box(`${p}-edit`, 300, 74, 180, 180, palette.yellow),
        text(`${p}-edit-t`, 330, 104, `${cmd}\n编辑\n保存退出`, 16, 120),
        box(`${p}-check`, 566, 108, 142, 112, palette.green),
        text(`${p}-check-t`, 590, 134, 'cat/diff\n验证', 16, 94),
        box(`${p}-panic`, 300, 286, 180, 68, palette.red),
        text(`${p}-panic-t`, 330, 306, '不会退?\n先 Esc', 15, 120),
        arrow(`${p}-a1`, 210, 164, 84, -10),
        arrow(`${p}-a2`, 486, 164, 74, 0),
      );
      break;
    case 'tree':
      lines.push(
        box(`${p}-root`, 310, 78, 140, 64, palette.yellow),
        text(`${p}-root-t`, 338, 96, object, 16, 84),
        box(`${p}-left`, 90, 212, 140, 74, palette.blue),
        text(`${p}-left-t`, 116, 234, cmd.split(' ')[0] || cmd, 15, 92),
        box(`${p}-mid`, 310, 212, 140, 74, palette.green),
        text(`${p}-mid-t`, 336, 234, result.slice(0, 12), 15, 92),
        box(`${p}-right`, 530, 212, 140, 74, palette.purple),
        text(`${p}-right-t`, 556, 234, risk.slice(0, 12), 15, 92),
        arrow(`${p}-a1`, 330, 148, -120, 58),
        arrow(`${p}-a2`, 380, 148, 0, 58),
        arrow(`${p}-a3`, 430, 148, 120, 58),
      );
      break;
    case 'path':
      lines.push(
        box(`${p}-type`, 48, 134, 142, 82, palette.blue),
        text(`${p}-type-t`, 72, 156, `输入\n${cmd}`, 16, 94),
        box(`${p}-path`, 284, 82, 190, 188, palette.yellow),
        text(`${p}-path-t`, 316, 110, 'PATH 顺序\n/usr/local/bin\n/usr/bin\n/bin', 16, 126),
        box(`${p}-hit`, 574, 134, 142, 82, palette.green),
        text(`${p}-hit-t`, 598, 156, 'which\n命中', 16, 94),
        arrow(`${p}-a1`, 196, 174, 82, -14),
        arrow(`${p}-a2`, 480, 174, 88, 0),
      );
      break;
    case 'streams':
      lines.push(
        box(`${p}-stdin`, 46, 88, 142, 76, palette.blue),
        text(`${p}-stdin-t`, 72, 110, 'stdin 0', 16, 90),
        box(`${p}-cmd`, 306, 142, 154, 86, palette.yellow),
        text(`${p}-cmd-t`, 332, 166, cmd, 16, 102),
        box(`${p}-stdout`, 574, 88, 142, 76, palette.green),
        text(`${p}-stdout-t`, 600, 110, 'stdout 1', 16, 90),
        box(`${p}-stderr`, 574, 236, 142, 76, palette.red),
        text(`${p}-stderr-t`, 600, 258, 'stderr 2', 16, 90),
        arrow(`${p}-a1`, 194, 126, 106, 52),
        arrow(`${p}-a2`, 466, 168, 102, -44),
        arrow(`${p}-a3`, 466, 198, 102, 68, '#e8590c'),
      );
      break;
    case 'slice':
      lines.push(
        box(`${p}-file`, 50, 90, 180, 190, palette.blue),
        text(`${p}-file-t`, 82, 120, '原始文本\n多行样本', 15, 120),
        box(`${p}-tool`, 314, 116, 150, 136, palette.yellow),
        text(`${p}-tool-t`, 340, 144, `${cmd}\n${action}`, 15, 100),
        box(`${p}-out`, 548, 112, 160, 144, palette.green),
        text(`${p}-out-t`, 574, 140, '切列/统计\n可管道', 15, 108),
        arrow(`${p}-a1`, 236, 184, 72, 0),
        arrow(`${p}-a2`, 470, 184, 72, 0),
      );
      break;
    case 'env':
      lines.push(
        box(`${p}-shell`, 80, 100, 200, 80, palette.blue),
        text(`${p}-shell-t`, 100, 122, '当前 Shell\nenv | grep', 16, 160),
        box(`${p}-export`, 340, 88, 200, 104, palette.yellow),
        text(`${p}-export-t`, 360, 110, `${cmd}\nexport 传子进程`, 16, 160),
        box(`${p}-child`, 600, 100, 200, 80, palette.green),
        text(`${p}-child-t`, 620, 122, '子进程\n继承变量', 16, 160),
        arrow(`${p}-a1`, 286, 140, 48, 0),
        arrow(`${p}-a2`, 546, 140, 48, 0),
      );
      break;
    case 'table':
      lines.push(
        box(`${p}-c1`, 48, 100, 160, 100, palette.blue),
        text(`${p}-c1t`, 68, 120, '列 A', 15, 120),
        box(`${p}-c2`, 240, 100, 160, 100, palette.yellow),
        text(`${p}-c2t`, 260, 120, '列 B', 15, 120),
        box(`${p}-join`, 432, 100, 160, 100, palette.green),
        text(`${p}-joint`, 452, 120, cmd, 15, 120),
        box(`${p}-out`, 624, 100, 120, 100, palette.purple),
        text(`${p}-outt`, 644, 120, '合并\n结果', 15, 80),
        arrow(`${p}-a1`, 212, 150, 22, 0),
        arrow(`${p}-a2`, 404, 150, 22, 0),
        arrow(`${p}-a3`, 596, 150, 22, 0),
      );
      break;
    case 'filter':
      lines.push(
        box(`${p}-noise`, 48, 108, 170, 130, palette.blue),
        text(`${p}-noise-t`, 76, 136, '大量输入\n日志/列表', 16, 114),
        box(`${p}-filter`, 318, 82, 156, 184, palette.yellow),
        text(`${p}-filter-t`, 344, 112, `${cmd}\n过滤`, 16, 104),
        box(`${p}-signal`, 570, 108, 150, 130, palette.green),
        text(`${p}-signal-t`, 594, 136, result.slice(0, 16), 16, 98),
        arrow(`${p}-a1`, 224, 172, 88, 0),
        arrow(`${p}-a2`, 480, 172, 84, 0),
      );
      break;
    case 'permission':
      lines.push(
        box(`${p}-user`, 72, 92, 132, 86, palette.blue),
        text(`${p}-user-t`, 96, 116, 'owner\nrwx', 17, 84),
        box(`${p}-group`, 316, 92, 132, 86, palette.yellow),
        text(`${p}-group-t`, 340, 116, 'group\nr-x', 17, 84),
        box(`${p}-other`, 560, 92, 132, 86, palette.red),
        text(`${p}-other-t`, 584, 116, 'other\n---', 17, 84),
        box(`${p}-cmd`, 242, 244, 278, 74, palette.green),
        text(`${p}-cmd-t`, 278, 266, `${cmd}\n最小权限`, 16, 206),
        arrow(`${p}-a1`, 190, 184, 116, 58),
        arrow(`${p}-a2`, 382, 184, 0, 54),
        arrow(`${p}-a3`, 574, 184, -90, 58),
      );
      break;
    case 'archive':
      lines.push(
        box(`${p}-files`, 48, 110, 160, 120, palette.blue),
        text(`${p}-files-t`, 72, 140, '多个文件\n目录树', 16, 110),
        box(`${p}-tar`, 280, 90, 180, 160, palette.yellow),
        text(`${p}-tar-t`, 300, 120, `${cmd}\n打包/压缩`, 16, 140),
        box(`${p}-one`, 532, 110, 180, 120, palette.green),
        text(`${p}-one-t`, 556, 140, '单个归档\n.tgz/.zip', 16, 140),
        arrow(`${p}-a1`, 214, 170, 60, 0),
        arrow(`${p}-a2`, 466, 170, 60, 0),
      );
      break;
    case 'link':
      lines.push(
        box(`${p}-src`, 60, 120, 180, 100, palette.blue),
        text(`${p}-src-t`, 80, 148, '源文件\ninode', 16, 140),
        box(`${p}-soft`, 300, 80, 180, 80, palette.yellow),
        text(`${p}-soft-t`, 320, 100, '软链 ln -s\n快捷方式', 16, 140),
        box(`${p}-hard`, 300, 190, 180, 80, palette.green),
        text(`${p}-hard-t`, 320, 210, '硬链 ln\n同 inode', 16, 140),
        box(`${p}-path`, 540, 120, 180, 100, palette.purple),
        text(`${p}-path-t`, 560, 148, '新路径名\n访问同一数据', 16, 140),
        arrow(`${p}-a1`, 246, 120, 48, 0),
        arrow(`${p}-a2`, 246, 230, 48, -70),
        arrow(`${p}-a3`, 484, 160, 50, 0),
      );
      break;
    case 'process':
      lines.push(
        box(`${p}-list`, 48, 92, 190, 190, palette.blue),
        text(`${p}-list-t`, 80, 122, 'ps/top\nPID 表', 16, 126),
        box(`${p}-inspect`, 314, 104, 158, 150, palette.yellow),
        text(`${p}-inspect-t`, 342, 132, `${cmd}\n状态`, 16, 102),
        box(`${p}-action`, 560, 114, 150, 130, palette.green),
        text(`${p}-action-t`, 586, 142, 'TERM\nKILL', 16, 98),
        arrow(`${p}-a1`, 244, 182, 64, 0),
        arrow(`${p}-a2`, 478, 182, 76, 0),
      );
      break;
    case 'user':
      lines.push(
        box(`${p}-u`, 92, 92, 150, 90, palette.blue),
        text(`${p}-u-t`, 118, 118, '用户 UID', 16, 98),
        box(`${p}-g`, 310, 232, 150, 90, palette.yellow),
        text(`${p}-g-t`, 336, 258, '组 GID', 16, 98),
        box(`${p}-r`, 536, 92, 150, 90, palette.green),
        text(`${p}-r-t`, 562, 118, '资源\n权限', 16, 98),
        arrow(`${p}-a1`, 248, 134, 282, 0),
        arrow(`${p}-a2`, 204, 188, 116, 38),
        arrow(`${p}-a3`, 464, 260, 92, -72),
      );
      break;
    case 'service':
      lines.push(
        box(`${p}-unit`, 54, 102, 150, 110, palette.blue),
        text(`${p}-unit-t`, 80, 130, 'unit 文件\nExecStart', 15, 98),
        box(`${p}-systemd`, 304, 78, 172, 158, palette.yellow),
        text(`${p}-systemd-t`, 334, 106, `${cmd}\nstart/stop`, 16, 112),
        box(`${p}-logs`, 568, 102, 148, 110, palette.green),
        text(`${p}-logs-t`, 594, 130, 'journalctl\n日志', 16, 96),
        arrow(`${p}-a1`, 210, 158, 88, 0),
        arrow(`${p}-a2`, 482, 158, 80, 0),
      );
      break;
    case 'disk':
      lines.push(
        box(`${p}-disk`, 44, 124, 128, 86, palette.blue),
        text(`${p}-disk-t`, 66, 148, '/dev/sdb', 16, 84),
        box(`${p}-part`, 220, 124, 128, 86, palette.yellow),
        text(`${p}-part-t`, 242, 148, '分区/LV', 16, 84),
        box(`${p}-fs`, 396, 124, 128, 86, palette.purple),
        text(`${p}-fs-t`, 418, 148, 'ext4/xfs', 16, 84),
        box(`${p}-mnt`, 572, 124, 128, 86, palette.green),
        text(`${p}-mnt-t`, 594, 148, '/data', 16, 84),
        arrow(`${p}-a1`, 178, 166, 36, 0),
        arrow(`${p}-a2`, 354, 166, 36, 0),
        arrow(`${p}-a3`, 530, 166, 36, 0),
        box(`${p}-risk`, 244, 280, 270, 62, palette.red),
        text(`${p}-risk-t`, 282, 298, risk, 16, 194),
      );
      break;
    case 'package':
      lines.push(
        box(`${p}-repo`, 54, 100, 160, 118, palette.blue),
        text(`${p}-repo-t`, 82, 128, '软件仓库\n签名/版本', 16, 104),
        box(`${p}-pm`, 308, 84, 160, 150, palette.yellow),
        text(`${p}-pm-t`, 336, 112, `${cmd}\n依赖解析`, 16, 104),
        box(`${p}-host`, 560, 100, 156, 118, palette.green),
        text(`${p}-host-t`, 586, 128, '本机包\n服务', 16, 104),
        arrow(`${p}-a1`, 220, 158, 82, 0),
        arrow(`${p}-a2`, 474, 158, 80, 0),
      );
      break;
    case 'boot':
      lines.push(
        box(`${p}-fw`, 40, 126, 112, 72, palette.blue),
        text(`${p}-fw-t`, 62, 148, 'UEFI', 15, 68),
        box(`${p}-grub`, 190, 126, 112, 72, palette.yellow),
        text(`${p}-grub-t`, 212, 148, 'GRUB', 15, 68),
        box(`${p}-kernel`, 340, 126, 112, 72, palette.purple),
        text(`${p}-kernel-t`, 362, 148, 'Kernel', 15, 68),
        box(`${p}-init`, 490, 126, 112, 72, palette.green),
        text(`${p}-init-t`, 512, 148, 'systemd', 15, 68),
        box(`${p}-login`, 640, 126, 92, 72, palette.cyan),
        text(`${p}-login-t`, 658, 148, '可用', 15, 56),
        arrow(`${p}-a1`, 156, 160, 28, 0),
        arrow(`${p}-a2`, 306, 160, 28, 0),
        arrow(`${p}-a3`, 456, 160, 28, 0),
        arrow(`${p}-a4`, 606, 160, 28, 0),
      );
      break;
    case 'network':
      lines.push(
        box(`${p}-name`, 48, 96, 130, 78, palette.blue),
        text(`${p}-name-t`, 70, 118, 'DNS', 16, 82),
        box(`${p}-ip`, 224, 96, 130, 78, palette.yellow),
        text(`${p}-ip-t`, 246, 118, 'IP', 16, 82),
        box(`${p}-route`, 400, 96, 130, 78, palette.purple),
        text(`${p}-route-t`, 422, 118, '路由', 16, 82),
        box(`${p}-port`, 576, 96, 130, 78, palette.green),
        text(`${p}-port-t`, 598, 118, '端口', 16, 82),
        box(`${p}-cmd`, 224, 250, 306, 70, palette.cyan),
        text(`${p}-cmd-t`, 260, 270, cmd, 16, 234),
        arrow(`${p}-a1`, 184, 134, 34, 0),
        arrow(`${p}-a2`, 360, 134, 34, 0),
        arrow(`${p}-a3`, 536, 134, 34, 0),
        arrow(`${p}-a4`, 376, 180, 0, 64),
      );
      break;
    case 'script':
      lines.push(
        box(`${p}-input`, 52, 116, 140, 92, palette.blue),
        text(`${p}-input-t`, 76, 142, '参数/变量', 16, 92),
        box(`${p}-logic`, 298, 82, 180, 158, palette.yellow),
        text(`${p}-logic-t`, 328, 110, `${cmd}\nif/for`, 16, 120),
        box(`${p}-exit`, 568, 116, 140, 92, palette.green),
        text(`${p}-exit-t`, 592, 142, '退出码\n$?', 16, 92),
        box(`${p}-debug`, 298, 280, 180, 62, palette.red),
        text(`${p}-debug-t`, 328, 298, 'set -x', 15, 120),
        arrow(`${p}-a1`, 198, 162, 94, 0),
        arrow(`${p}-a2`, 484, 162, 78, 0),
      );
      break;
    case 'firewall':
      lines.push(
        box(`${p}-packet`, 48, 132, 132, 78, palette.blue),
        text(`${p}-packet-t`, 72, 154, '数据包', 15, 84),
        box(`${p}-rules`, 294, 76, 180, 192, palette.yellow),
        text(`${p}-rules-t`, 324, 104, `${cmd}\n匹配链`, 16, 120),
        box(`${p}-pass`, 574, 88, 132, 76, palette.green),
        text(`${p}-pass-t`, 598, 110, 'ACCEPT', 16, 84),
        box(`${p}-drop`, 574, 230, 132, 76, palette.red),
        text(`${p}-drop-t`, 598, 252, 'DROP', 16, 84),
        arrow(`${p}-a1`, 186, 170, 102, 0),
        arrow(`${p}-a2`, 480, 140, 88, -10),
        arrow(`${p}-a3`, 480, 204, 88, 58, '#e8590c'),
      );
      break;
    case 'ssh':
      lines.push(
        box(`${p}-local`, 54, 122, 150, 92, palette.blue),
        text(`${p}-local-t`, 80, 148, '本机\n私钥', 16, 98),
        box(`${p}-tunnel`, 300, 104, 178, 128, palette.yellow),
        text(`${p}-tunnel-t`, 330, 132, `${cmd}\n加密通道`, 16, 118),
        box(`${p}-remote`, 572, 122, 146, 92, palette.green),
        text(`${p}-remote-t`, 596, 148, '远程 Shell', 16, 98),
        arrow(`${p}-a1`, 210, 166, 84, 0),
        arrow(`${p}-a2`, 484, 166, 82, 0),
      );
      break;
    case 'container':
      lines.push(
        box(`${p}-host`, 70, 82, 610, 220, palette.cyan),
        text(`${p}-host-t`, 102, 106, '宿主机 Linux 内核', 18, 180),
        box(`${p}-c1`, 118, 154, 132, 88, palette.blue),
        text(`${p}-c1-t`, 142, 180, 'namespace\nPID/NET', 15, 84),
        box(`${p}-c2`, 314, 154, 132, 88, palette.yellow),
        text(`${p}-c2-t`, 338, 180, '容器进程', 15, 84),
        box(`${p}-limit`, 510, 154, 132, 88, palette.green),
        text(`${p}-limit-t`, 534, 180, 'cgroup\n限额', 15, 84),
      );
      break;
    case 'trouble':
      lines.push(
        box(`${p}-symptom`, 54, 86, 154, 82, palette.red),
        text(`${p}-symptom-t`, 80, 110, '现象', 16, 102),
        box(`${p}-observe`, 300, 74, 170, 110, palette.blue),
        text(`${p}-observe-t`, 330, 100, `${cmd}\n日志`, 16, 112),
        box(`${p}-hypo`, 300, 226, 170, 86, palette.yellow),
        text(`${p}-hypo-t`, 330, 250, '单假设', 16, 112),
        box(`${p}-fix`, 560, 132, 148, 88, palette.green),
        text(`${p}-fix-t`, 586, 156, '验证修复', 16, 96),
        arrow(`${p}-a1`, 214, 126, 80, 0),
        arrow(`${p}-a2`, 386, 190, 0, 30),
        arrow(`${p}-a3`, 476, 268, 78, -78),
      );
      break;
    default:
      lines.push(
        box(`${p}-obj`, 54, 120, 150, 100, palette.blue),
        text(`${p}-obj-t`, 80, 146, object, 16, 98),
        box(`${p}-cmd`, 304, 104, 170, 130, palette.yellow),
        text(`${p}-cmd-t`, 334, 132, `${cmd}\n${action}`, 16, 110),
        box(`${p}-res`, 570, 120, 150, 100, palette.green),
        text(`${p}-res-t`, 596, 146, result, 16, 98),
        arrow(`${p}-a1`, 210, 168, 88, 0),
        arrow(`${p}-a2`, 480, 168, 84, 0),
      );
  }

  lines.push(text(`${p}-note`, 90, 320, note, 16, 560));
  return scene(spec.slug, lines);
}

const LABEL_OVERRIDES = {
  'Basic Commands': { heading: '基础命令：pwd/ls/cd/cat 四件套', subheading: '不会导航目录，后面所有运维命令都容易在错误路径上执行。', metaphor: '像进陌生大楼先看楼层指示：pwd 是「你在几楼」，ls 是「这层有哪些房间」。' },
  grep: { heading: 'grep：从日志海里捞 needle', subheading: '正则 + 管道是排障最高频组合；先小样本再全量。', metaphor: 'grep 像渔网——网眼（正则）不对，要么漏鱼要么捞一堆垃圾。' },
  awk: { heading: 'awk：按列编程的瑞士军刀', subheading: 'pattern { action } 结构处理结构化文本，比纯 shell 循环更清晰。', metaphor: 'awk 像流水线质检员：匹配行（pattern）才执行动作（action）。' },
  'Service Management (systemd)': { heading: 'systemd：现代 Linux 的服务总线', subheading: 'unit 文件 + systemctl + journalctl 三件套替代 SysV init。', metaphor: 'systemd 像机场塔台：飞机（服务）起降、延误、备降都有标准口令。' },
  SSH: { heading: 'SSH：加密的远程操作主通道', subheading: '登录、传文件、隧道、Git 部署都建立在 SSH 之上。', metaphor: 'SSH 像地下密道：外面只看到入口，里面运的是加密_payload。' },
  Docker: { heading: 'Docker：Linux 容器化的用户界面', subheading: '底层是 namespace/cgroup，Docker 把 run/build/push 包装成日常命令。', metaphor: 'Docker 像 standardized 集装箱接口——港口不关心箱里装的是 Node 还是 Go。' },
  Troubleshooting: { heading: 'Linux 排障：证据驱动而非猜命令', subheading: '现象→观测→假设→验证；一次只改一个变量。', metaphor: '排障像医生问诊：先化验（日志/metrics）再开药（改配置）。' },
  'File Permissions': { heading: '文件权限：owner/group/other 三组 rwx', subheading: 'Permission denied 九成是身份或 chmod/umask 问题，不是「Linux 坏了」。', metaphor: 'rwx 像三张不同的门卡：读是窗户、写是笔、执行是进门。' },
};

const nodes = loadNodes();
const usedSlugs = new Set();

const allSpecs = nodes.map((node, index) => {
  const base = specById[node.id];
  if (!base) throw new Error(`Missing spec for ${node.id}`);
  let spec = craftContent(base, node, index);
  const ov = LABEL_OVERRIDES[node.label];
  if (ov) spec = { ...spec, ...ov };
  if (usedSlugs.has(spec.slug)) spec.slug = `${spec.slug}-${node.id.slice(0, 6)}`;
  usedSlugs.add(spec.slug);
  return spec;
});

if (allSpecs.length !== 102) {
  console.error('Expected 102 nodes, got', allSpecs.length);
  process.exit(1);
}

const diagramEntries = allSpecs.map((s) => buildDiagram(s)).join('\n');

const lessonEntries = allSpecs.map((s) => {
  const routeStr = s.route.map((r) =>
    `      { label: '${esc(r.label)}', title: '${esc(r.title)}', text: '${esc(r.text)}' },`,
  ).join('\n');
  return `  "${s.id}": {
    heading: '${esc(s.heading)}',
    subheading: '${esc(s.subheading)}',
    scene: '${esc(s.scene)}',
    core: '${esc(s.core)}',
    metaphor: '${esc(s.metaphor)}',
    mistake: '${esc(s.mistake)}',
    confusion: '${esc(s.confusion)}',
    experiment: '${esc(s.experiment)}',
    route: [
${routeStr}
    ],
    rawDiagram: LINUX_DIAGRAMS['${s.slug}'],
  },`;
}).join('\n');

const out = `import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff', gray: '#f8fafc', slate: '#e2e8f0' };

export const LINUX_DIAGRAMS: Record<string, string> = {
${diagramEntries}
};

export const LINUX_TEACHING_HANDCRAFTED: Record<string, TeachingLesson> = {
${lessonEntries}
};
`;

writeFileSync('src/roadmaps/linux/teaching-handcrafted.ts', out);
console.log('Wrote teaching-handcrafted.ts with', allSpecs.length, 'nodes,', usedSlugs.size, 'unique diagram slugs');
