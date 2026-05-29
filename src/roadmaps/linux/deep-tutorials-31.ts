import type { DeepTutorial } from '../deep-types';

export const LINUX_DEEP_TUTORIALS_31: Record<string, DeepTutorial> = {
  "34UUrc8Yjc_8lvTL8itc3": {
    mentalModel: 'systemd 服务就是一个 .service 文件，定义了怎么启动、怎么停止、什么时候启动。写一个 .service 文件就能让你的脚本变成"服务"。',
    handsOn: [
      { title: '创建服务文件', cmd: 'sudo nano /etc/systemd/system/myapp.service', output: '（编辑界面）', explain: '.service 文件放在 /etc/systemd/system/ 下。文件名就是服务名（myapp.service → systemctl start myapp）。' },
      { title: '服务文件结构', cmd: 'cat /etc/systemd/system/myapp.service', output: '[Unit]\nDescription=My Application\nAfter=network.target\n\n[Service]\nType=simple\nUser=tu\nWorkingDirectory=/home/tu/myapp\nExecStart=/home/tu/myapp/start.sh\nRestart=on-failure\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target', explain: '[Unit] 描述和依赖。[Service] 启动命令和重启策略。[Install] 开机启动目标。Type=simple 表示程序在前台运行。' },
      { title: '加载并启动', cmd: 'sudo systemctl daemon-reload && sudo systemctl start myapp && sudo systemctl enable myapp', output: 'Created symlink /etc/systemd/system/multi-user.target.wants/myapp.service → /etc/systemd/system/myapp.service.', explain: 'daemon-reload 重新加载配置。start 启动服务。enable 设置开机启动。status 看状态。' },
      { title: '查看日志', cmd: 'journalctl -u myapp -f', output: '-- Logs begin at Mon 2024-01-15 09:00:00 UTC. --\nJan 15 14:30:01 prod myapp[5678]: Server started on port 8080', explain: 'journalctl -u service 看服务日志。-f 实时追踪。systemd 自动捕获服务的 stdout/stderr。' },
    ],
    diagnosis: [
      { symptom: 'systemctl start 报 "Unit not found"', cause: '服务文件没保存、路径错了、或者没 daemon-reload。', fix: '确认文件在 /etc/systemd/system/myapp.service。sudo systemctl daemon-reload 重新加载。' },
      { symptom: '服务启动后立即退出', cause: '程序在前台运行但 Type=forking（期望程序 fork 到后台）。或者程序崩溃了。', fix: 'Type=simple 的程序应该在前台运行（不 fork）。Type=forking 的程序应该 fork 到后台。journalctl -u service 看崩溃日志。' },
      { symptom: 'enable 后重启服务器服务没自动启动', cause: '[Install] 段的 WantedBy 没写对，或者服务依赖了没启动的其他服务。', fix: '确认 WantedBy=multi-user.target（命令行模式）或 graphical.target（图形界面）。systemctl list-dependencies myapp 看依赖。' },
    ],
    exercises: [
      { level: '基础', task: '写一个 systemd 服务，运行一个简单的 HTTP 服务器（python3 -m http.server 8000）', hint: 'Type=simple + ExecStart=/usr/bin/python3 -m http.server 8000', answer: '# 1. 创建服务文件\nsudo nano /etc/systemd/system/httpserver.service\n\n# 内容：\n[Unit]\nDescription=Simple HTTP Server\nAfter=network.target\n\n[Service]\nType=simple\nUser=tu\nWorkingDirectory=/home/tu\nExecStart=/usr/bin/python3 -m http.server 8000\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n\n# 2. 启动\nsudo systemctl daemon-reload\nsudo systemctl start httpserver\nsudo systemctl enable httpserver\n\n# 3. 测试\ncurl http://localhost:8000' },
      { level: '进阶', task: '写一个服务，依赖 PostgreSQL，失败后自动重启（最多重试 3 次）', hint: 'After=postgresql.service + Restart=on-failure + StartLimitBurst=3', answer: '[Unit]\nDescription=My App with PostgreSQL\nAfter=postgresql.service\nRequires=postgresql.service\n\n[Service]\nType=simple\nUser=tu\nWorkingDirectory=/home/tu/myapp\nExecStart=/home/tu/myapp/start.sh\nRestart=on-failure\nRestartSec=5\nStartLimitBurst=3\nStartLimitInterval=60\n\n[Install]\nWantedBy=multi-user.target' },
      { level: '挑战', task: '写一个"服务模板"，用 %i 实例化多个实例（如 myapp@1.service, myapp@2.service）', hint: '服务文件名用 @ 符号，%i 代表实例名', answer: '# 1. 创建模板文件（注意 @ 符号）\nsudo nano /etc/systemd/system/myapp@.service\n\n# 内容：\n[Unit]\nDescription=My App Instance %i\nAfter=network.target\n\n[Service]\nType=simple\nUser=tu\nWorkingDirectory=/home/tu/myapp\nEnvironment=INSTANCE=%i\nEnvironment=PORT=800%i\nExecStart=/home/tu/myapp/start.sh --port ${PORT}\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\n\n# 2. 启动多个实例\nsudo systemctl daemon-reload\nsudo systemctl start myapp@1\nsudo systemctl start myapp@2\nsudo systemctl start myapp@3\n\n# 3. 查看状态\nsystemctl status myapp@1 myapp@2 myapp@3' },
    ],
    prereqs: ['systemctl — 服务管理', '日志系统 — journalctl'],
    nextSteps: ['systemd timer — 定时任务', 'systemd socket — socket 激活'],
  },
};
