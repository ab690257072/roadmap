import type { DeepTutorial } from '../deep-types';

export const MONGODB_DEEP_TUTORIALS_3: Record<string, DeepTutorial> = {
// MongoDB Deep Learning Content — Batch 4 (25 nodes)
// Written as TS object entries, no import/export

  'YuzMOO7kf2tO6V6WehqF_': {
    // Kerberos 认证
    mentalModel: 'Kerberos 是 MongoDB 的企业级"门卫系统"——它不依赖密码传输，而是通过加密票据（ticket）证明身份，就像机场安检不看你身份证原件，而是验证由可信机构签发的登机牌。',
    sections: [
      {
        title: 'Kerberos 认证流程',
        content: 'MongoDB 的 Kerberos 认证基于 GSSAPI（Generic Security Services API），工作流程：\n\n1. 客户端向 KDC（Key Distribution Center）请求 TGT（Ticket Granting Ticket）\n2. 客户端用 TGT 向 KDC 请求 MongoDB 服务的 Service Ticket\n3. 客户端将 Service Ticket 发送给 mongod\n4. mongod 验证 ticket 有效性，确认客户端身份\n\n关键配置项：\n- mongod.conf 中设置 security.authorization: enabled\n- 启动参数 --setParameter authenticationMechanisms=GSSAPI\n- 需要为 mongod 进程创建 Kerberos service principal：mongodb/hostname@REALM\n\n连接字符串示例：\nmongodb://user%40REALM@host:27017/?authMechanism=GSSAPI&authSource=$external'
      },
      {
        title: 'Kerberos 用户映射与授权',
        content: 'Kerberos 认证成功后，MongoDB 需要在 $external 数据库中找到对应用户：\n\n// 创建 Kerberos 用户（用户名必须匹配 Kerberos principal）\ndb.getSiblingDB("$external").createUser({\n  user: "appuser@EXAMPLE.COM",\n  roles: [\n    { role: "readWrite", db: "myapp" },\n    { role: "clusterMonitor", db: "admin" }\n  ]\n})\n\n注意事项：\n- 用户名区分大小写，必须与 Kerberos realm 完全匹配\n- 密码由 KDC 管理，MongoDB 不存储也不验证密码\n- 可以通过 --setParameter saslHostName 和 saslServiceName 自定义 principal 映射\n- 支持跨 realm 信任（cross-realm trust），适合多域企业环境'
      },
      {
        title: 'Kerberos 与副本集/分片集群的配合',
        content: '在集群环境中部署 Kerberos：\n\n1. 每个 mongod/mongos 实例都需要自己的 service principal：\n   mongodb/rs0-node1.example.com@EXAMPLE.COM\n   mongodb/rs0-node2.example.com@EXAMPLE.COM\n\n2. 内部认证也需要 Kerberos（或单独用 x.509）：\n   security.clusterAuthMode: sendX509UserRoles\n\n3. Keyfile 不能与 Kerberos 混用于内部认证，但外部认证可以用 Kerberos\n\n4. 客户端连接到 mongos 时，只需对 mongos 做一次 Kerberos 认证，mongos 代表客户端与各 shard 通信\n\n常见问题：\n- 时间偏差超过 5 分钟会导致 ticket 失效（Kerberos 对时钟同步要求严格）\n- DNS 反向解析必须正确，因为 principal 中包含主机名\n- krb5.conf 中必须正确配置 KDC 地址和 realm 映射'
      }
    ],
    diagnosis: [
      {
        symptom: '连接时返回 Authentication failed，mongod 日志显示 "GSSAPI Error: Unspecified GSS failure. Minor code may provide more information"',
        cause: '通常是 Kerberos ticket 过期或不存在。客户端需要先通过 kinit 获取有效的 TGT，或者 ticket 缓存（ccache）中的 ticket 已过期。',
        fix: '运行 kinit appuser@EXAMPLE.COM 获取新 ticket，然后用 klist 确认 ticket 有效且未过期。检查客户端与 KDC 的时钟是否同步（使用 ntpdate 或 chrony）。'
      },
      {
        symptom: 'mongod 启动后日志报 "Could not load service key" 或 "Key table file not found"',
        cause: 'mongod 进程无法读取 keytab 文件。keytab 文件路径不正确、权限不足、或者文件中没有对应的 service principal。',
        fix: '确认 keytab 文件路径正确（默认 /etc/krb5.keytab 或通过 KRB5_KTNAME 环境变量指定），用 ktutil -k /path/to/mongodb.keytab list 检查是否包含 mongodb/hostname@REALM 条目，确保 mongod 进程用户有读权限。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 $external 数据库中创建一个 Kerberos 认证用户 "devops@CORP.NET"，赋予 myapp 库的 readWrite 角色和 admin 库的 clusterMonitor 角色。',
        hint: '使用 db.getSiblingDB("$external").createUser()，user 字段必须包含完整 principal（含 realm）。',
        answer: 'db.getSiblingDB("$external").createUser({\n  user: "devops@CORP.NET",\n  roles: [\n    { role: "readWrite", db: "myapp" },\n    { role: "clusterMonitor", db: "admin" }\n  ]\n});\n// 注意：用户名必须与 Kerberos principal 完全一致，包括大小写。'
      },
      {
        level: '进阶',
        task: '为一个 3 节点副本集设计完整的 Kerberos 部署方案：列出需要创建的 service principal、mongod.conf 中的关键配置、以及客户端连接字符串。',
        hint: '每个节点需要自己的 principal，格式为 mongodb/hostname@REALM。内部认证和外部认证需要分开考虑。',
        answer: '// Service Principals（每个节点一个）：\n// mongodb/rs0-n1.corp.net@CORP.NET\n// mongodb/rs0-n2.corp.net@CORP.NET\n// mongodb/rs0-n3.corp.net@CORP.NET\n\n// mongod.conf 关键配置：\n// security:\n//   authorization: enabled\n//   clusterAuthMode: x509  // 内部认证用 x.509\n// setParameter:\n//   authenticationMechanisms: GSSAPI,SCRAM-SHA-256\n// net:\n//   tls:\n//     mode: requireTLS\n//     certificateKeyFile: /etc/ssl/mongodb.pem\n\n// 客户端连接：\n// mongodb://devops%40CORP.NET@rs0-n1,rs0-n2,rs0-n3/?authMechanism=GSSAPI&authSource=$external&replicaSet=rs0'
      }
    ]
  },

  'LC923iJhfiUDIs_0-9rc7': {
    // MongoDB 安全概览
    mentalModel: 'MongoDB 安全是一个"洋葱模型"——从外到内依次是网络隔离、传输加密（TLS）、身份认证（Auth）、授权（RBAC）、数据加密（CSFLE/EAR），每一层独立提供保护，纵深防御。',
    sections: [
      {
        title: '安全层级与威胁模型',
        content: 'MongoDB 安全体系分为 5 层：\n\n第 1 层：网络隔离\n- 绑定 IP（bind_ip）、防火墙规则、VPC 安全组\n- 默认只监听 127.0.0.1，生产环境必须显式配置\n\n第 2 层：传输加密\n- TLS/SSL 加密客户端-服务器和节点间通信\n- 防止网络嗅探和中间人攻击\n\n第 3 层：身份认证\n- SCRAM-SHA-256（默认密码认证）\n- x.509 证书认证\n- LDAP / Kerberos 企业认证\n- 认证解决"你是谁"的问题\n\n第 4 层：授权（RBAC）\n- 基于角色的访问控制\n- 内置角色 + 自定义角色\n- 字段级和集合级权限\n- 授权解决"你能做什么"的问题\n\n第 5 层：数据加密\n- Encryption at Rest（磁盘加密，用 AES-256）\n- Client-Side Field Level Encryption（字段级客户端加密）\n- Queryable Encryption（可查询加密，MongoDB 7.0+）'
      },
      {
        title: '最小安全基线配置',
        content: '任何生产环境 MongoDB 必须满足的最低安全要求：\n\n1. 启用认证：security.authorization: enabled\n2. 创建管理员用户并删除默认无密码访问\n3. 启用 TLS：net.tls.mode: requireTLS\n4. 限制网络绑定：net.bindIp 不设为 0.0.0.0\n5. 使用强密码策略（SCRAM-SHA-256）\n6. 副本集启用内部认证（keyFile 或 x.509）\n\n// 快速创建管理员\ndb.getSiblingDB("admin").createUser({\n  user: "siteRootAdmin",\n  pwd: "complex-password-here",\n  roles: [{ role: "root", db: "admin" }]\n})\n\n检查清单：\n□ 不能从公网直接访问 27017 端口\n□ 所有连接强制 TLS\n□ 每个应用使用独立的受限用户\n□ 审计日志开启（企业版）\n□ 定期轮换密钥和密码'
      },
      {
        title: '安全扫描与合规工具',
        content: 'MongoDB 提供多种工具评估安全状态：\n\n1. mongod --setParameter diagnosticDataCollectionEnabled=true\n   启用诊断数据收集，可用于安全审计\n\n2. db.serverStatus().security\n   查看当前认证机制、TLS 状态、活跃会话\n\n3. db.getRole("roleName", { showPrivileges: true })\n   审查角色权限是否最小化\n\n4. MongoDB Atlas 提供：\n   - 自动安全扫描\n   - IP 白名单\n   - 网络对等连接（Peering）\n   - 私有端点（Private Endpoint）\n   - 合规报告（SOC2, HIPAA, PCI-DSS）\n\n常见安全反模式：\n- 使用 root 用户运行应用（应该用最小权限用户）\n- 在连接字符串中明文写密码（应使用环境变量或密钥管理服务）\n- 关闭认证"方便开发"后忘记重新开启\n- 所有应用共用同一个数据库用户'
      }
    ],
    diagnosis: [
      {
        symptom: '新安装的 MongoDB 可以直接无密码连接，任何网络可达的客户端都能读写所有数据',
        cause: 'MongoDB 默认不启用认证（authorization: disabled），这是为了开发便利。如果没有显式开启 security.authorization，任何能访问 27017 端口的客户端都有完整权限。',
        fix: '立即创建管理员用户，然后在 mongod.conf 中设置 security.authorization: enabled，重启 mongod。同时检查 net.bindIp 是否暴露在不安全的网络上。'
      },
      {
        symptom: '副本集添加新节点后，新节点无法加入集群，日志显示 "auth failed" 或 "unauthorized"',
        cause: '副本集内部通信也需要认证。新节点没有配置 keyFile 或 x.509 证书，无法通过内部认证握手。',
        fix: '将 keyFile 复制到新节点（权限设为 400），确保所有节点使用相同的 keyFile 内容。如果使用 x.509 内部认证，确保新节点的证书由同一 CA 签发且包含正确的 subject。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个电商应用的 MongoDB 实例设计安全配置：需要启用认证、TLS、限制绑定 IP，并创建三个用户——管理员、应用读写用户、只读报表用户。',
        hint: '在 mongod.conf 中配置 security 和 net.tls 段，然后用 createUser 分别创建三个用户并赋予不同角色。',
        answer: '// mongod.conf:\n// security:\n//   authorization: enabled\n// net:\n//   bindIp: 10.0.1.0/24,127.0.0.1\n//   tls:\n//     mode: requireTLS\n//     certificateKeyFile: /etc/ssl/mongodb.pem\n//     CAFile: /etc/ssl/ca.pem\n\n// 创建用户：\ndb.getSiblingDB("admin").createUser({ user: "admin", pwd: "Admin@2024!", roles: [{ role: "root", db: "admin" }] });\ndb.getSiblingDB("shop").createUser({ user: "app_user", pwd: "App@2024!", roles: [{ role: "readWrite", db: "shop" }] });\ndb.getSiblingDB("shop").createUser({ user: "report_user", pwd: "Report@2024!", roles: [{ role: "read", db: "shop" }] });'
      },
      {
        level: '进阶',
        task: '审计一个 MongoDB 实例的安全配置：列出需要检查的 5 个方面，以及每个方面对应的 mongosh 命令或配置文件检查项。',
        hint: '从认证、授权、网络、加密、日志五个维度检查。使用 db.serverStatus()、db.getUsers()、db.getRoles() 等命令。',
        answer: '// 1. 认证状态\ndb.serverStatus().security;\n// 检查 authentication.mechanisms 和 authentication.clusterAuthMode\n\n// 2. 用户权限审查\ndb.getSiblingDB("admin").getUsers();\n// 检查是否有过多 root/dbOwner 用户\n\n// 3. 网络暴露\n// 检查 mongod.conf 中 net.bindIp 和 net.port\n// 检查防火墙是否只允许必要 IP 访问 27017\n\n// 4. TLS 配置\ndb.serverStatus().security.transportSecurity;\n// 确认 TLS 已启用且使用强密码套件\n\n// 5. 审计日志（企业版）\n// 检查 mongod.conf 中 auditLog 配置\n// 确认审计目标包含认证事件和授权失败事件'
      }
    ]
  },

  'iJjqlTgXxHWC-8bh6uCGQ': {
    // Encryption at Rest
    mentalModel: 'Encryption at Rest 是 MongoDB 的"保险箱锁"——它用 AES-256-CBC 加密磁盘上的数据文件，即使攻击者偷走了物理硬盘也无法读取数据，就像文件被锁在保险箱里，没有钥匙只能看到乱码。',
    sections: [
      {
        title: 'Encryption at Rest 的工作原理',
        content: 'MongoDB 企业版（及 Atlas）原生支持 Encryption at Rest（EAR）：\n\n加密层级：\n- 每个数据库有一个 Database Key（DBK）\n- 每个 DBK 由 Master Key（MK）加密保护\n- MK 存储在外部 Key Management Server（KMS）中\n\n数据流：\n  写入：明文 → AES-256-CBC 加密 → 写入磁盘\n  读取：从磁盘读取 → AES-256-CBC 解密 → 明文\n\n配置方式（mongod.conf）：\nsecurity:\n  enableEncryption: true\n  encryptionCipherMode: AES256-CBC\n  encryptionKeyFile: /etc/mongodb/encryption-key\n\n或使用 KMIP 协议对接企业 KMS：\nsecurity:\n  kmip:\n    serverName: kms.corp.net\n    port: 5696\n    clientCertificateFile: /etc/ssl/kmip-client.pem\n    serverCAFile: /etc/ssl/kmip-ca.pem\n\n注意：EAR 是实例级别设置，一旦启用不可关闭（除非重新初始化数据目录）。'
      },
      {
        title: '密钥管理与轮换',
        content: '密钥管理是 EAR 安全性的核心：\n\n本地密钥文件方式：\n- 生成：openssl rand -base64 32 > /etc/mongodb/encryption-key\n- 权限：chmod 400 /etc/mongodb/encryption-key\n- 轮换：需要停机，用新密钥重新加密所有数据\n\nKMIP 方式（推荐）：\n- 密钥存储在外部 HSM/KMS 中（如 AWS KMS, HashiCorp Vault）\n- 支持在线密钥轮换（rotate master key）\n- mongod 只持有加密的 DBK，MK 从不离开 KMS\n\n密钥轮换命令：\ndb.adminCommand({ rotateMasterKey: 1 })\n// 这个操作会：\n// 1. 从 KMS 获取新的 Master Key\n// 2. 用新 MK 重新加密所有 DBK\n// 3. 不需要重新加密数据文件本身（因为 DBK 没变）\n// 4. 操作期间数据库保持可用\n\n重要：密钥轮换是审计合规要求（如 PCI-DSS 要求每年轮换密钥）。'
      },
      {
        title: 'EAR 与 TLS 的关系及性能影响',
        content: 'EAR 和 TLS 解决不同层面的安全问题：\n\n| 层面 | TLS | EAR |\n|------|-----|-----|\n| 保护对象 | 传输中的数据 | 静止的数据 |\n| 防护威胁 | 网络嗅探 | 物理介质窃取 |\n| 加密时机 | 连接建立时 | 每次磁盘 I/O |\n| 密钥位置 | 证书中 | KMS 中 |\n\n性能影响：\n- EAR 增加约 3-5% 的 CPU 开销（主要是 AES 加密/解密）\n- 现代 CPU 的 AES-NI 硬件加速可以显著降低影响\n- 写入密集场景影响略大于读取密集\n- 建议在支持 AES-NI 的硬件上部署\n\n验证 EAR 是否启用：\ndb.serverStatus().security\n// 输出中应包含：\n// "encryption" : { "enabled" : true, "cipherMode" : "AES256-CBC" }'
      }
    ],
    diagnosis: [
      {
        symptom: 'mongod 启动失败，日志报 "Encryption key file not found" 或 "Failed to read encryption key"',
        cause: 'encryptionKeyFile 指定的路径不存在、文件权限不正确、或文件内容被损坏。本地密钥文件必须是 base64 编码的 16、24 或 32 字节密钥。',
        fix: '确认文件存在且 mongod 用户可读（chmod 400），验证文件内容是合法的 base64 编码：openssl rand -base64 32 > /new/key && chmod 400 /new/key，然后更新 mongod.conf 中的路径。'
      },
      {
        symptom: 'db.adminCommand({ rotateMasterKey: 1 }) 返回 "KMIP server connection failed"',
        cause: 'mongod 无法连接到 KMIP 服务器。可能原因：KMIP 服务器地址/端口配置错误、TLS 证书过期或不受信任、网络不通。',
        fix: '检查 mongod.conf 中 security.kmip 配置，用 openssl s_client -connect kms.corp.net:5696 测试网络连通性和证书有效性，确认 clientCertificateFile 未过期且被 KMIP 服务器信任。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '生成一个用于 Encryption at Rest 的 256 位加密密钥文件，并设置正确的文件权限。写出对应的 shell 命令。',
        hint: '使用 openssl rand 生成 base64 编码的 32 字节随机数据，然后用 chmod 设置权限。',
        answer: '# 生成 256 位（32 字节）加密密钥\nopenssl rand -base64 32 > /etc/mongodb/encryption-key\n# 设置权限：仅所有者可读\nchmod 400 /etc/mongodb/encryption-key\nchown mongodb:mongodb /etc/mongodb/encryption-key\n# 验证\nls -la /etc/mongodb/encryption-key\n# 应该显示 -r-------- 1 mongodb mongodb'
      },
      {
        level: '进阶',
        task: '解释 rotateMasterKey 操作为什么不需要重新加密数据文件，并画出密钥层级关系图。',
        hint: '理解 Master Key → Database Key → Data 的三层加密关系。rotateMasterKey 只影响最顶层。',
        answer: '密钥层级：\n  Master Key (MK) ← 存储在 KMS 中\n    └─ Database Key (DBK) ← 被 MK 加密后存储在数据目录\n        └─ Data Files ← 被 DBK 加密后存储在磁盘\n\nrotateMasterKey 操作：\n1. 从 KMS 获取新的 MK（MK_new）\n2. 用 MK_old 解密 DBK → 得到明文 DBK\n3. 用 MK_new 加密 DBK → 写回磁盘\n4. 数据文件本身没变（仍然被同一个 DBK 加密）\n\n所以数据文件不需要重新加密——加密它们的 DBK 没有改变，只是 DBK 的"包装"（被 MK 加密的版本）变了。'
      }
    ]
  },

  'NoDNdno9UOlMrOC0Wga9E': {
    // LDAP 代理认证
    mentalModel: 'LDAP 代理认证让 MongoDB 成为"门禁转发器"——它不验证密码，而是把用户名密码转发给企业 LDAP 服务器验证，就像公寓前台不记住每个访客的密码，而是打电话给住户确认身份。',
    sections: [
      {
        title: 'LDAP 代理认证的工作机制',
        content: 'MongoDB LDAP Proxy Authentication 的流程：\n\n1. 客户端用 PLAIN 机制发送用户名和密码给 mongod\n2. mongod 作为 LDAP 客户端，用收到的凭据向 LDAP 服务器发起 bind 操作\n3. LDAP 服务器验证凭据，返回成功或失败\n4. mongod 根据结果允许或拒绝连接\n\n关键配置（mongod.conf）：\nsecurity:\n  authorization: enabled\n  ldap:\n    servers: ldap.corp.net:636\n    transportSecurity: tls\n    bind:\n      queryUser: cn=mongodb,ou=service,dc=corp,dc=net\n      queryPassword: service-account-password\n    userToDNMapping: >-\n      [{\n        match: "(.+)",\n        ldapQuery: "ou=users,dc=corp,dc=net??sub?(uid={0})"\n      }]\n    authz:\n      queryTemplate: "ou=groups,dc=corp,dc=net??sub?(uniqueMember={USER})"\n\n重要区别：\n- 直接 LDAP 认证：每个 MongoDB 用户映射到一个 LDAP DN\n- LDAP 代理认证：MongoDB 用户映射到 LDAP 组，组名映射到 MongoDB 角色'
      },
      {
        title: '用户到 DN 的映射策略',
        content: 'userToDNMapping 定义了如何将 MongoDB 用户名转换为 LDAP DN：\n\n策略 1：直接替换（适合简单场景）\nuserToDNMapping: >-\n  [{\n    match: "(.+)",\n    substitution: "uid={0},ou=users,dc=corp,dc=net"\n  }]\n// 用户名 "alice" → "uid=alice,ou=users,dc=corp,dc=net"\n\n策略 2：LDAP 查询（适合复杂目录结构）\nuserToDNMapping: >-\n  [{\n    match: "(.+)",\n    ldapQuery: "dc=corp,dc=net??sub?(sAMAccountName={0})"\n  }]\n// 用 LDAP 搜索找到用户的完整 DN\n\n策略 3：多规则匹配（适合多域环境）\nuserToDNMapping: >-\n  [\n    { match: "^(.+)@corp.net$", substitution: "uid={1},ou=users,dc=corp,dc=net" },\n    { match: "^(.+)@partner.com$", substitution: "uid={1},ou=partners,dc=partner,dc=com" }\n  ]\n\n规则按顺序匹配，第一个命中的规则生效。'
      },
      {
        title: 'LDAP 组映射到 MongoDB 角色',
        content: 'LDAP 代理认证的核心优势：用 LDAP 组管理 MongoDB 权限。\n\n1. 在 MongoDB 中创建与 LDAP 组同名的角色：\ndb.getSiblingDB("admin").createRole({\n  role: "cn=dba-team,ou=groups,dc=corp,dc=net",\n  roles: [{ role: "dbAdminAnyDatabase", db: "admin" }],\n  privileges: []\n})\n\ndb.getSiblingDB("admin").createRole({\n  role: "cn=dev-team,ou=groups,dc=corp,dc=net",\n  roles: [{ role: "readWrite", db: "myapp" }],\n  privileges: []\n})\n\n2. 配置 authz.queryTemplate 查询用户所属组：\nauthz:\n  queryTemplate: "ou=groups,dc=corp,dc=net??sub?(uniqueMember={USER})"\n\n3. 用户登录时，MongoDB 查询 LDAP 获取用户所属组列表，然后匹配 MongoDB 中同名的角色。\n\n效果：\n- LDAP 管理员在 AD/LDAP 中调整组成员 → 自动影响 MongoDB 权限\n- 不需要在 MongoDB 中单独管理用户\n- 支持 LDAP 组嵌套（需要配置查询深度）'
      }
    ],
    diagnosis: [
      {
        symptom: 'LDAP 用户登录失败，mongod 日志显示 "LDAP authentication failed for user alice"',
        cause: '可能是 userToDNMapping 配置错误，导致用户名无法正确转换为 LDAP DN。也可能是 LDAP 服务器不可达或 bind 凭据无效。',
        fix: '先用 ldapsearch 手动测试：ldapsearch -H ldaps://ldap.corp.net -D "uid=alice,ou=users,dc=corp,dc=net" -W -b "dc=corp,dc=net"。如果手动 bind 成功但 MongoDB 失败，检查 userToDNMapping 的正则和替换是否正确。'
      },
      {
        symptom: '用户认证成功但没有权限执行任何操作，db.runCommand({ usersInfo: 1 }) 显示用户的 roles 为空',
        cause: 'LDAP 组查询（authz.queryTemplate）没有返回任何组，或者返回的组名在 MongoDB 中没有对应的角色定义。',
        fix: '1. 用 ldapsearch 手动查询用户所属组：ldapsearch -b "ou=groups,dc=corp,dc=net" "(uniqueMember=uid=alice,ou=users,dc=corp,dc=net)"。2. 确认 MongoDB 中有与组 DN 同名的角色。3. 检查 authz.queryTemplate 中的 {USER} 占位符是否正确替换为用户 DN。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为 MongoDB 配置 LDAP 认证，LDAP 服务器地址为 ldap.mycompany.com:636（TLS），用户目录在 ou=people,dc=mycompany,dc=com，用户名对应 uid 属性。写出 mongod.conf 的 security.ldap 部分。',
        hint: '配置 servers、transportSecurity、bind（查询用户）和 userToDNMapping（用 substitution 策略）。',
        answer: 'security:\n  authorization: enabled\n  ldap:\n    servers: ldap.mycompany.com:636\n    transportSecurity: tls\n    bind:\n      queryUser: cn=mongodb,ou=service,dc=mycompany,dc=com\n      queryPassword: "LDAP_BIND_PASSWORD"\n    userToDNMapping: >-\n      [{\n        match: "(.+)",\n        substitution: "uid={0},ou=people,dc=mycompany,dc=com"\n      }]\n    authz:\n      queryTemplate: "ou=groups,dc=mycompany,dc=com??sub?(member={USER})"'
      },
      {
        level: '进阶',
        task: '设计一个方案：公司有三个 LDAP 组（dba-team, dev-team, qa-team），需要映射到 MongoDB 不同的权限。写出完整的 MongoDB 角色创建命令和 LDAP 查询配置。',
        hint: '在 admin 库创建与 LDAP 组 DN 同名的自定义角色，然后配置 authz.queryTemplate。',
        answer: '// 创建映射角色\ndb.getSiblingDB("admin").createRole({\n  role: "cn=dba-team,ou=groups,dc=mycompany,dc=com",\n  roles: [{ role: "root", db: "admin" }],\n  privileges: []\n});\ndb.getSiblingDB("admin").createRole({\n  role: "cn=dev-team,ou=groups,dc=mycompany,dc=com",\n  roles: [{ role: "readWriteAnyDatabase", db: "admin" }],\n  privileges: []\n});\ndb.getSiblingDB("admin").createRole({\n  role: "cn=qa-team,ou=groups,dc=mycompany,dc=com",\n  roles: [{ role: "readAnyDatabase", db: "admin" }],\n  privileges: []\n});\n\n// LDAP authz 查询配置\n// authz:\n//   queryTemplate: "ou=groups,dc=mycompany,dc=com??sub?(member={USER})"\n// 当 alice（属于 dev-team）登录时，MongoDB 查询到 cn=dev-team,... 组，自动赋予 readWriteAnyDatabase 角色。'
      }
    ]
  },

  'w1L-yFBM2AyeNBFyH5skW': {
    // MongoDB 审计
    mentalModel: 'MongoDB 审计是数据库的"黑匣子记录仪"——它忠实地记录每一次认证、授权、数据操作，用于安全审计、合规检查和问题回溯，就像飞机的黑匣子为事故调查提供完整证据链。',
    sections: [
      {
        title: '审计配置与事件类型',
        content: 'MongoDB 企业版支持审计功能，配置在 mongod.conf 中：\n\nauditLog:\n  destination: file          # 或 syslog、console\n  format: JSON               # 或 BSON\n  path: /var/log/mongodb/audit.json\n  filter: >-\n    { atype: { $in: ["authenticate", "authCheck"] } }\n\n可审计的事件类型（atype）：\n- authenticate：登录认证事件\n- authCheck：权限检查（每次操作前的授权验证）\n- createCollection / dropCollection：集合生命周期\n- createIndex / dropIndex：索引操作\n- createUser / dropUser / updateUser：用户管理\n- grantRolesToUser / revokeRolesFromUser：权限变更\n- insert / update / delete：数据操作（需显式开启）\n- shutdown / replSetReconfig：集群管理\n\n过滤器示例（只记录删除操作和认证失败）：\nfilter: >-\n  { $or: [\n    { atype: "authCheck", param: { command: "delete" } },\n    { atype: "authenticate", result: { $ne: 0 } }\n  ] }'
      },
      {
        title: '审计日志格式与解析',
        content: 'JSON 格式的审计日志示例：\n\n{\n  "atype": "authCheck",\n  "ts": { "$date": "2024-03-15T10:30:00.123Z" },\n  "uuid": { "$binary": "abc123...", "$type": "04" },\n  "local": { "ip": "10.0.1.5", "port": 27017 },\n  "remote": { "ip": "10.0.2.100", "port": 54321 },\n  "users": [{ "user": "app_user", "db": "admin" }],\n  "roles": [{ "role": "readWrite", "db": "myapp" }],\n  "param": {\n    "command": "find",\n    "ns": "myapp.orders",\n    "args": { "find": "orders", "filter": { "status": "pending" } }\n  },\n  "result": 0\n}\n\n关键字段：\n- atype：事件类型\n- ts：时间戳（毫秒精度）\n- users：执行操作的用户（可能多个，如通过 $merge）\n- param.ns：操作的命名空间（database.collection）\n- param.args：操作参数（注意可能包含敏感数据）\n- result：0 表示成功，非零表示错误码\n\n审计日志文件会快速增长，需要配合 logrotate 管理。'
      },
      {
        title: '审计的性能影响与最佳实践',
        content: '审计对性能的影响：\n- authCheck 审计增加约 5-15% 的写入延迟\n- 全量审计（包括 CRUD）可能增加 20-30% 的 I/O 负载\n- JSON 格式比 BSON 格式慢（JSON 序列化开销更大）\n- 建议在高吞吐场景使用 BSON 格式 + 独立磁盘\n\n最佳实践：\n1. 将审计日志写入独立磁盘，避免与数据文件竞争 I/O\n2. 使用过滤器减少不必要的审计事件\n3. 配合集中日志系统（ELK, Splunk）分析审计日志\n4. 定期归档旧审计日志（保留期根据合规要求）\n5. 监控审计日志文件大小和写入速度\n\n审计日志查询示例（找出所有失败的认证）：\ncat audit.json | jq \'select(.atype=="authenticate" and .result != 0)\' \n\n// 或用 MongoDB 分析（将 JSON 日志导入集合）：\ndb.auditLog.find({\n  atype: "authCheck",\n  result: { $ne: 0 }\n}).sort({ ts: -1 }).limit(50)'
      }
    ],
    diagnosis: [
      {
        symptom: '审计日志文件增长过快，一天内达到数十 GB，导致磁盘空间告警',
        cause: '审计过滤器过于宽泛，记录了所有 authCheck 事件（每次操作都会触发）。高吞吐环境下，authCheck 事件量与操作量成正比。',
        fix: '缩窄审计过滤器范围，例如只审计写操作和管理操作：filter: { atype: { $in: ["authenticate", "createUser", "dropCollection", "grantRolesToUser"] } }。同时将审计日志写入独立磁盘，并配置 logrotate 自动压缩和清理。'
      },
      {
        symptom: '在 mongod.conf 中配置了 auditLog 但 mongod 启动失败，日志报 "auditLog.destination must be one of: syslog, console, file"',
        cause: '审计功能仅在 MongoDB Enterprise 版和 Atlas 中可用。社区版（Community Edition）不包含审计功能。',
        fix: '确认使用的是 MongoDB Enterprise 版本：mongod --version 输出中应包含 "Enterprise"。如果使用的是社区版，需要升级到 Enterprise 版或改用 MongoDB Atlas（自带审计功能）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '配置 MongoDB 审计日志，要求：只记录认证事件（authenticate）和用户权限变更事件（createUser, grantRolesToUser, revokeRolesFromUser），输出为 JSON 格式到 /var/log/mongodb/audit.json。',
        hint: '在 mongod.conf 中配置 auditLog 段，使用 filter 指定 atype 的 $in 条件。',
        answer: 'auditLog:\n  destination: file\n  format: JSON\n  path: /var/log/mongodb/audit.json\n  filter: >-\n    { atype: { $in: [\n      "authenticate",\n      "createUser",\n      "grantRolesToUser",\n      "revokeRolesFromUser"\n    ] } }'
      },
      {
        level: '进阶',
        task: '分析一段审计日志：找出所有对 production 数据库的删除操作，并列出执行这些操作的用户和时间。写出 mongosh 中的分析命令（假设审计日志已导入到 auditLog 集合）。',
        hint: '使用聚合管道，先 $match 过滤 atype 和命名空间，然后 $project 提取关键字段。',
        answer: 'db.auditLog.aggregate([\n  { $match: {\n    atype: "authCheck",\n    "param.command": { $in: ["delete", "findAndModify"] },\n    "param.ns": /^production\\./,\n    result: 0\n  }},\n  { $project: {\n    timestamp: "$ts",\n    user: { $arrayElemAt: ["$users.user", 0] },\n    command: "$param.command",\n    namespace: "$param.ns",\n    args: "$param.args"\n  }},\n  { $sort: { timestamp: -1 } },\n  { $limit: 20 }\n]);\n// 这会列出最近 20 次对 production 库的删除操作，包括时间、用户和命令详情。'
      }
    ]
  },

  'YJiWemHO1l5q9WhgoHyYd': {
    // Client-Side Field Level Encryption
    mentalModel: 'CSFLE 是 MongoDB 的"信封加密"——数据在客户端就被加密，服务端只能看到密文，就像你把信件装进只有收件人有钥匙的信封里，邮局（MongoDB 服务器）只能传递但无法阅读内容。',
    sections: [
      {
        title: 'CSFLE 架构与数据流',
        content: 'Client-Side Field Level Encryption 的核心思想：加密和解密在客户端完成，MongoDB 服务器永远不接触明文。\n\n数据流：\n  客户端 → [用 DEK 加密敏感字段] → 密文 → mongod 存储\n  mongod 返回密文 → 客户端 → [用 DEK 解密] → 明文\n\n密钥层级：\n  Master Key (MK) ← 存储在 KMS（AWS KMS, Azure Key Vault, 本地）\n    └─ Data Encryption Key (DEK) ← 被 MK 加密，存储在 Key Vault 集合中\n        └─ 文档字段 ← 被 DEK 加密\n\nKey Vault 集合示例（__keyVault 集合）：\n{\n  _id: UUID("..."),\n  keyMaterial: Binary(...),  // 被 MK 加密的 DEK\n  creationDate: ISODate("..."),\n  updateDate: ISODate("..."),\n  status: 0,\n  masterKey: { provider: "aws", key: "arn:aws:kms:...", region: "us-east-1" }\n}\n\n重要：丢失 MK 意味着永远无法解密数据。必须有 MK 备份策略。'
      },
      {
        title: '加密方案设计',
        content: 'CSFLE 支持两种加密方案：\n\n1. Deterministic（确定性加密）\n- 相同明文 → 相同密文\n- 支持等值查询：db.users.find({ ssn: "123-45-6789" })\n- 不支持范围查询\n- 安全性略低（可能泄露频率信息）\n\n2. Random（随机加密）\n- 相同明文 → 不同密文（每次加密结果不同）\n- 不支持任何查询（只能在客户端解密后过滤）\n- 安全性最高\n\nJSON Schema 定义加密规则：\n{\n  properties: {\n    patient: {\n      properties: {\n        ssn: {\n          encrypt: {\n            keyId: [UUID("...")],\n            bsonType: "string",\n            algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic"\n          }\n        },\n        billing: {\n          encrypt: {\n            keyId: [UUID("...")],\n            bsonType: "object",\n            algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Random"\n          }\n        }\n      }\n    }\n  }\n}'
      },
      {
        title: 'mongosh 中使用 CSFLE',
        content: '在 mongosh 中配置 CSFLE 自动加密：\n\n// 1. 创建 KMS 提供者配置\nconst kmsProviders = {\n  local: {\n    key: Buffer.from("your-96-byte-master-key-base64...", "base64")\n  }\n};\n\n// 2. 指定 Key Vault 集合\nconst keyVaultNamespace = "encryption.__keyVault";\n\n// 3. 创建 DEK\nconst clientEncryption = new ClientEncryption(client, {\n  keyVaultNamespace,\n  kmsProviders\n});\nconst dataKeyId = clientEncryption.createDataKey("local");\n\n// 4. 定义加密 Schema\nconst schemaMap = {\n  "myapp.patients": {\n    properties: {\n      ssn: {\n        encrypt: {\n          keyId: [dataKeyId],\n          bsonType: "string",\n          algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic"\n        }\n      }\n    },\n    bsonType: "object"\n  }\n};\n\n// 5. 连接时启用自动加密\nconst encryptedClient = Mongo(uri, {\n  autoEncryption: {\n    keyVaultNamespace,\n    kmsProviders,\n    schemaMap\n  }\n});\n\n// 6. 使用——透明加密/解密\nencryptedClient.getDB("myapp").patients.insertOne({ ssn: "123-45-6789", name: "Alice" });\nencryptedClient.getDB("myapp").patients.findOne({ ssn: "123-45-6789" });\n// 返回明文，但服务器端存储的是密文'
      }
    ],
    diagnosis: [
      {
        symptom: '插入文档时报错 "Cannot encrypt field: no matching encryption schema found"',
        cause: 'autoEncryption 的 schemaMap 中没有覆盖到该集合或该字段。CSFLE 需要预先定义哪些字段需要加密，未定义的字段不会自动加密。',
        fix: '检查 schemaMap 中是否包含目标集合的完整命名空间（"database.collection"）和目标字段。确保 keyId 指向一个存在的 DEK（在 Key Vault 集合中可查到）。'
      },
      {
        symptom: '客户端能插入加密数据，但用另一个客户端读取时看到的是 Binary 密文而非明文',
        cause: '读取数据的客户端没有配置 autoEncryption 或没有正确的 KMS 凭据，无法自动解密。CSFLE 要求每个需要看到明文的客户端都配置加密设置。',
        fix: '确保读取客户端也配置了相同的 autoEncryption 设置（keyVaultNamespace 和 kmsProviders）。如果是只读场景，可以配置 bypassAutoEncryption: true 跳过加密但仍执行解密。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '解释 CSFLE 中 Deterministic 和 Random 加密的区别，以及各自的适用场景。为什么 Social Security Number 适合用 Deterministic，而医疗账单信息适合用 Random？',
        hint: '考虑查询需求和安全性的权衡。Deterministic 允许等值查询但泄露频率信息。',
        answer: 'Deterministic 加密：相同明文始终产生相同密文，因此支持等值查询（db.find({ssn: "xxx"})）。适用于需要按值查找的字段，如 SSN、邮箱。缺点是攻击者可能通过密文频率分析推断信息。\n\nRandom 加密：相同明文每次产生不同密文，不支持任何服务端查询。适用于不需要查询的敏感数据，如医疗账单详情——你通常通过患者 ID（已加密为 Deterministic）找到文档，然后解密整个文档。\n\nSSN 用 Deterministic：因为需要按 SSN 查找患者。医疗账单用 Random：因为不需要直接按账单内容查询，安全性更高。'
      },
      {
        level: '进阶',
        task: '设计一个医疗数据库的 CSFLE 方案：patients 集合有 name, ssn, insurance_id, diagnosis, billing 字段。定义每个字段的加密策略（Deterministic/Random/不加密），并说明理由。',
        hint: '根据每个字段的查询需求和敏感度决定加密方式。',
        answer: '// 加密方案：\n// name: 不加密 — 需要全文搜索和模糊查询，敏感度较低\n// ssn: Deterministic — 高敏感度，需要按值精确查找患者\n// insurance_id: Deterministic — 需要按保险号查找，支持保险验证\n// diagnosis: Random — 极高敏感度（受 HIPAA 保护），不需要直接查询\n// billing: Random — 财务数据敏感，通过 patient_id 间接访问\n\n// JSON Schema 片段：\n{\n  properties: {\n    ssn: { encrypt: { algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic" } },\n    insurance_id: { encrypt: { algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic" } },\n    diagnosis: { encrypt: { algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Random" } },\n    billing: { encrypt: { algorithm: "AEAD_AES_256_CBC_HMAC_SHA_512-Random" } }\n  }\n}'
      }
    ]
  },

  '5F7zAAnvnVTTnBzOB7TSu': {
    // TLS/SSL 加密
    mentalModel: 'TLS 是 MongoDB 通信的"密封管道"——它在客户端和服务器之间建立加密通道，防止数据在传输过程中被窃听或篡改，就像把明信片放进上锁的管道中传递。',
    sections: [
      {
        title: 'MongoDB TLS 配置',
        content: '启用 TLS 的 mongod.conf 配置：\n\nnet:\n  tls:\n    mode: requireTLS\n    certificateKeyFile: /etc/ssl/mongodb.pem\n    CAFile: /etc/ssl/ca.pem\n    allowConnectionsWithoutCertificates: true  # 客户端不强制证书\n\nmode 可选值：\n- disabled：禁用 TLS（默认）\n- allowTLS：接受 TLS 和非 TLS 连接\n- preferTLS：优先 TLS，但接受非 TLS\n- requireTLS：强制所有连接使用 TLS\n\ncertificateKeyFile 是 PEM 格式文件，包含证书和私钥：\n-----BEGIN CERTIFICATE-----\n...server certificate...\n-----END CERTIFICATE-----\n-----BEGIN PRIVATE KEY-----\n...server private key...\n-----END PRIVATE KEY-----\n\n生成自签名证书（仅开发环境）：\nopenssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes\ncat cert.pem key.pem > mongodb.pem'
      },
      {
        title: '双向 TLS（mTLS）认证',
        content: '双向 TLS 要求客户端也提供证书，实现相互认证：\n\nmongod.conf 配置：\nnet:\n  tls:\n    mode: requireTLS\n    certificateKeyFile: /etc/ssl/mongodb.pem\n    CAFile: /etc/ssl/ca.pem\n    allowConnectionsWithoutCertificates: false  # 强制客户端证书\n\nsecurity:\n  clusterAuthMode: x509  # 用证书进行内部认证\n\n客户端连接（mongosh）：\nmongosh "mongodb://host:27017/?tls=true&tlsCertificateKeyFile=/etc/ssl/client.pem&tlsCAFile=/etc/ssl/ca.pem"\n\n创建 x.509 用户（用户名必须是证书的 subject）：\ndb.getSiblingDB("$external").createUser({\n  user: "CN=app-client,OU=Engineering,O=MyCorp,L=City,ST=State,C=US",\n  roles: [{ role: "readWrite", db: "myapp" }]\n})\n\nx.509 认证优势：\n- 无需密码，避免密码泄露风险\n- 证书可自动轮换\n- 支持短生命周期证书（如 24 小时）'
      },
      {
        title: 'TLS 在副本集和分片集群中的应用',
        content: '集群环境中的 TLS 配置：\n\n1. 所有节点使用同一 CA 签发的证书\n2. 节点间通信也需要 TLS：\n\nnet:\n  tls:\n    mode: requireTLS\n    certificateKeyFile: /etc/ssl/mongodb.pem\n    CAFile: /etc/ssl/ca.pem\n    clusterFile: /etc/ssl/cluster.pem  # 内部通信专用证书\n\n3. 客户端连接字符串需要 TLS 参数：\nmongodb://host1:27017,host2:27017/?replicaSet=rs0&tls=true&tlsCAFile=/etc/ssl/ca.pem\n\n4. mongos 也需要 TLS：\nnet:\n  tls:\n    mode: requireTLS\n    certificateKeyFile: /etc/ssl/mongos.pem\n    CAFile: /etc/ssl/ca.pem\n\n5. 证书轮换（不重启服务）：\ndb.adminCommand({ rotateCertificates: 1 })\n// MongoDB 4.4+ 支持在线证书轮换\n\n常见 TLS 问题：\n- 证书过期：设置监控告警，提前 30 天提醒\n- 主机名不匹配：证书的 CN 或 SAN 必须匹配连接使用的主机名\n- 时钟偏差：TLS 握手验证证书有效期，时钟不同步会导致失败'
      }
    ],
    diagnosis: [
      {
        symptom: 'mongosh 连接时报错 "SSL peer certificate validation failed: certificate has expired"',
        cause: 'MongoDB 服务器的 TLS 证书已过期。证书有有效期限制，过期后 TLS 握手会失败。',
        fix: '1. 签发新证书并替换旧文件。2. 使用 db.adminCommand({ rotateCertificates: 1 }) 在线轮换（4.4+）。3. 设置证书过期监控告警。紧急情况下可用 tlsAllowInvalidCertificates: true 临时跳过验证（不推荐生产环境）。'
      },
      {
        symptom: '副本集节点间无法通信，日志报 "SSL handshake failed: hostname mismatch"',
        cause: '节点证书的 CN 或 SAN（Subject Alternative Name）与实际连接使用的主机名不匹配。例如证书 CN 是 rs0-node1，但连接时用的是 IP 地址 10.0.1.5。',
        fix: '重新签发证书，在 SAN 中包含所有可能的连接方式（主机名和 IP）：openssl 配置中添加 subjectAltName = DNS:rs0-node1,DNS:rs0-node1.corp.net,IP:10.0.1.5。或者确保所有连接使用与证书 CN 匹配的主机名。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '生成一个用于 MongoDB TLS 的自签名证书（开发环境），要求 RSA 4096 位，有效期 365 天，CN 为 mongo-dev.local。写出完整的 openssl 命令和 mongod.conf TLS 配置。',
        hint: '使用 openssl req -x509 生成自签名证书，然后用 cat 合并证书和密钥为 PEM 文件。',
        answer: '# 生成证书和密钥\nopenssl req -x509 -newkey rsa:4096 \\\n  -keyout /etc/ssl/mongo-key.pem \\\n  -out /etc/ssl/mongo-cert.pem \\\n  -days 365 -nodes \\\n  -subj "/CN=mongo-dev.local"\n\n# 合并为 PEM 文件\ncat /etc/ssl/mongo-cert.pem /etc/ssl/mongo-key.pem > /etc/ssl/mongodb.pem\nchmod 600 /etc/ssl/mongodb.pem\n\n# mongod.conf 配置：\n# net:\n#   tls:\n#     mode: requireTLS\n#     certificateKeyFile: /etc/ssl/mongodb.pem'
      },
      {
        level: '进阶',
        task: '为一个 3 节点副本集配置双向 TLS（mTLS），需要哪些证书？每个证书的 CN/SAN 应该包含什么内容？写出创建 x.509 用户的命令。',
        hint: '需要 CA 证书、每个节点的服务器证书、客户端证书。CN/SAN 要覆盖所有连接方式。',
        answer: '// 需要的证书：\n// 1. CA 证书（ca.pem）— 签发所有其他证书\n// 2. 节点证书（3 个）：\n//    rs0-n1.pem: CN=rs0-n1.corp.net, SAN=DNS:rs0-n1.corp.net,IP:10.0.1.1\n//    rs0-n2.pem: CN=rs0-n2.corp.net, SAN=DNS:rs0-n2.corp.net,IP:10.0.1.2\n//    rs0-n3.pem: CN=rs0-n3.corp.net, SAN=DNS:rs0-n3.corp.net,IP:10.0.1.3\n// 3. 客户端证书（app-client.pem）: CN=app-client,OU=Engineering,O=MyCorp\n\n// 创建 x.509 用户（用户名 = 客户端证书的完整 subject）：\ndb.getSiblingDB("$external").createUser({\n  user: "CN=app-client,OU=Engineering,O=MyCorp,L=City,ST=State,C=US",\n  roles: [{ role: "readWrite", db: "myapp" }]\n});\n\n// 注意：subject 中的字段顺序和空格必须与证书完全匹配。'
      }
    ]
  },

  'qh8MEbXKPVt8mqlarhUj0': {
    // 何时使用 MongoDB
    mentalModel: '选择 MongoDB 就像选择瑞士军刀——它在灵活性和开发速度上无可匹敌，但当你的需求是"砍大树"（强关系型数据、复杂事务），一把专用斧头（PostgreSQL）可能更合适。',
    sections: [
      {
        title: 'MongoDB 的理想使用场景',
        content: 'MongoDB 在以下场景中优势明显：\n\n1. 快速迭代的产品开发\n- Schema 灵活，不需要预定义表结构\n- 新功能可以随时添加新字段，不影响已有数据\n- 适合敏捷开发、MVP 快速验证\n\n2. 内容管理系统（CMS）\n- 内容类型多样（文章、视频、评论）有不同的字段结构\n- 嵌套文档天然适合树形评论、分类层级\n- 全文搜索内置支持\n\n3. IoT 和时序数据\n- 高吞吐写入（每秒数十万条）\n- 传感器数据天然适合文档模型\n- Time Series 集合（5.0+）优化存储效率\n\n4. 用户画像和个性化\n- 每个用户的属性集不同，灵活 Schema 很自然\n- 嵌套文档存储偏好、行为历史\n- 实时聚合分析用户行为\n\n5. 地理空间应用\n- 内置 GeoJSON 和 2dsphere 索引\n- 附近搜索、区域查询开箱即用\n- 比 PostGIS 更简单的 API\n\n6. 产品目录（电商）\n- 不同品类的商品属性差异巨大\n- 嵌套的规格、图片、评价\n- 灵活的搜索和筛选'
      },
      {
        title: 'MongoDB 不适合的场景',
        content: '以下场景应慎重选择 MongoDB：\n\n1. 复杂多表 JOIN 是核心需求\n- MongoDB 的 $lookup 不如 SQL JOIN 灵活\n- 涉及 5+ 表的关联查询性能差\n- 替代方案：PostgreSQL + 适当反规范化\n\n2. 强一致性金融交易\n- 多文档事务虽然支持（4.0+），但性能开销大\n- 银行转账等场景，RDBMS 的 ACID 更成熟\n- 替代方案：PostgreSQL / 专用金融数据库\n\n3. 数据分析与报表（OLAP）\n- MongoDB 的聚合管道功能强大但不是列存储\n- 大规模分析查询不如 ClickHouse / BigQuery\n- 替代方案：将 MongoDB 数据 ETL 到分析数据库\n\n4. 高度规范化的关系数据\n- 如果数据模型是严格的 3NF，用 MongoDB 反而增加复杂性\n- 替代方案：MySQL / PostgreSQL\n\n5. 需要声明式查询语言\n- SQL 的表达力和标准化程度远高于 MQL\n- 复杂查询在 SQL 中更简洁\n- 替代方案：任何 SQL 数据库'
      },
      {
        title: '决策框架：MongoDB vs 关系型数据库',
        content: '选择数据库的快速决策框架：\n\n问：数据结构是否经常变化？\n  是 → MongoDB 优势\n  否 → 关系型数据库也可以\n\n问：核心查询是否涉及多表 JOIN？\n  是 → 关系型数据库优势\n  否 → MongoDB 可以胜任\n\n问：是否需要高并发写入（>10万/秒）？\n  是 → MongoDB 的分片集群更适合\n  否 → 两者都可以\n\n问：团队是否有 NoSQL 经验？\n  否 → 关系型数据库学习成本更低\n  是 → MongoDB 开发效率高\n\n问：是否需要水平扩展（分片）？\n  是 → MongoDB 原生支持，配置简单\n  否 → 垂直扩展即可，两者均可\n\n实际案例：\n- eBay：产品目录用 MongoDB（灵活 Schema）\n- Forbes：CMS 用 MongoDB（内容类型多样）\n- SEGA：游戏玩家数据用 MongoDB（快速迭代）\n- Cisco：网络分析用 MongoDB（高吞吐写入）'
      }
    ],
    diagnosis: [
      {
        symptom: '团队选择了 MongoDB，但随着业务发展发现大量使用 $lookup 做关联查询，性能瓶颈明显',
        cause: '数据模型实际上是关系型的，但用了 MongoDB。核心业务涉及多表关联（如订单-商品-用户-物流），$lookup 的性能远不如 SQL JOIN。',
        fix: '两种方案：1. 重构数据模型，通过嵌入和反规范化减少 $lookup 需求（如将常用关联数据嵌入文档中）。2. 如果关联是核心需求，考虑迁移到 PostgreSQL，将 MongoDB 用于其擅长的场景（如日志、缓存）。'
      },
      {
        symptom: '选择 MongoDB 后发现多文档事务频繁使用，性能不如预期',
        cause: '如果大量操作需要跨集合事务一致性，MongoDB 的 WiredTiger 事务开销比 RDBMS 大。事务涉及多个文档分布在多个分片上时尤其明显。',
        fix: '1. 重新审视数据模型：能否将需要事务一致性的数据合并到同一文档中（利用文档级原子性）。2. 如果无法避免多文档事务，确保事务涉及的数据尽量在同一分片上。3. 评估是否关系型数据库更适合此场景。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '列举 3 个适合 MongoDB 的应用场景和 3 个不适合的场景，对每个场景用一句话说明原因。',
        hint: '考虑 MongoDB 的优势（灵活 Schema、高写入吞吐、水平扩展）和劣势（JOIN 弱、事务开销大、OLAP 弱）。',
        answer: '适合：\n1. 产品目录 — 不同品类属性差异大，MongoDB 的灵活 Schema 天然适配\n2. IoT 传感器数据 — 高吞吐写入 + 时序集合优化，比 RDBMS 写入效率高\n3. 用户画像系统 — 每个用户属性不同，嵌套文档存储行为历史自然\n\n不适合：\n1. 银行核心账务 — 多表关联+强一致性事务是核心需求，RDBMS 更成熟\n2. 数据分析仓库 — OLAP 查询需要列存储，ClickHouse/BigQuery 更适合\n3. ERP 系统 — 数据模型高度规范化（3NF），关系型数据库更自然'
      },
      {
        level: '进阶',
        task: '你的团队正在开发一个在线教育平台，有课程、讲师、学生、订单、学习记录等实体。设计一个混合方案：哪些数据放 MongoDB，哪些放 PostgreSQL，为什么？',
        hint: '分析每个实体的查询模式和数据特征，按"MongoDB 擅长的"和"PostgreSQL 擅长的"分配。',
        answer: 'MongoDB（灵活 Schema + 高写入）：\n- 课程内容：每门课结构不同（视频课 vs 编程课 vs 文档课），嵌套的章节/课时\n- 学习记录：高吞吐写入（每次播放、暂停、完成都记录），嵌套文档\n- 学生画像：属性灵活，行为数据嵌套\n\nPostgreSQL（关系 + 事务）：\n- 订单和支付：需要强一致性事务，关联用户/课程/支付\n- 讲师收入结算：涉及多表 JOIN 和聚合，需要 ACID\n- 权限和角色管理：关系型数据，RBAC 模型\n\n连接方案：MongoDB Change Streams → Kafka → PostgreSQL ETL，实现数据同步。'
      }
    ]
  },

  'F4W9XBSbkpzWIrAhRBSRS': {
    // BSON vs JSON
    mentalModel: 'BSON 是 MongoDB 的"二进制方言"——它在 JSON 的基础上增加了类型信息和长度前缀，让解析更快、类型更丰富，就像速记法在自然语言基础上增加了特殊符号以提高记录效率。',
    sections: [
      {
        title: 'BSON 与 JSON 的核心区别',
        content: 'BSON（Binary JSON）是 MongoDB 的存储和传输格式：\n\n1. 二进制编码 vs 文本\n- JSON 是人类可读的文本格式\n- BSON 是二进制格式，包含长度前缀和类型标记\n- BSON 解析不需要逐字符扫描，直接跳转（O(1) 访问字段）\n\n2. 类型系统差异\nJSON 类型：string, number, boolean, null, object, array\nBSON 额外类型：\n  - int32, int64, double, Decimal128（4 种数字类型 vs JSON 的 1 种）\n  - Date（精确到毫秒的时间戳）\n  - ObjectId（12 字节唯一标识）\n  - Binary（原始二进制数据）\n  - Regular Expression\n  - Timestamp（内部复制时间戳）\n  - MinKey / MaxKey\n  - Code（JavaScript 代码）\n  - Symbol（已废弃）\n  - Undefined（已废弃）\n\n3. 大小差异\n{"a": 1} 在 JSON 中是 7 字节\n{"a": 1} 在 BSON 中约 16 字节（含长度前缀、类型标记、终止符）\n\nBSON 通常比 JSON 大，但解析速度快得多。'
      },
      {
        title: 'BSON 类型在 mongosh 中的表现',
        content: 'mongosh 中的 BSON 类型演示：\n\n// 数字类型区分\ndb.types.insertOne({\n  int32: NumberInt("42"),       // 32 位整数\n  int64: NumberLong("42"),      // 64 位整数\n  double: 42.0,                 // 64 位浮点（JS 默认）\n  decimal: NumberDecimal("42")  // 128 位十进制\n})\n\n// 查看存储类型\ndb.types.findOne({}, { _id: 0 })\n// 输出：\n// {\n//   int32: Int32(42),\n//   int64: Long("42"),\n//   double: 42,\n//   decimal: Decimal128("42")\n// }\n\n// 日期 vs 时间戳\ndb.types.insertOne({\n  date: new Date(),           // Date 类型\n  timestamp: new Timestamp()  // Timestamp 类型（内部用）\n})\n\n// 二进制数据\ndb.types.insertOne({\n  binData: HexData(0, "deadbeef"),  // Generic binary\n  objectId: new ObjectId()          // ObjectId\n})\n\n// BSON 文档大小限制：16 MB\ndb.runCommand({ buildInfo: 1 }).maxBsonObjectSize  // 16777216'
      },
      {
        title: '类型差异带来的实际影响',
        content: 'BSON 类型系统对开发的影响：\n\n1. 数字精度问题\n// JavaScript 中所有数字都是 double，精度只有 53 位\nNumber.MAX_SAFE_INTEGER  // 9007199254740991 (约 9 × 10^15)\n// 超过这个值的整数必须用 Long 或 Decimal128\n\n// 错误：大整数丢失精度\ndb.orders.insertOne({ orderId: 9007199254740993 })  // 实际存储为 9007199254740992\ndb.orders.insertOne({ orderId: NumberLong("9007199254740993") })  // 正确\n\n2. JSON 导入丢失类型\n// JSON 文件中的数字导入后都变成 double\n// 解决方案：使用 Extended JSON 格式\n{ "count": { "$numberInt": "42" } }      // → Int32\n{ "total": { "$numberLong": "100000" } }  // → Int64\n{ "price": { "$numberDecimal": "9.99" } } // → Decimal128\n\n3. 查询时的类型匹配\ndb.data.find({ count: 42 })         // 匹配 Int32(42)、Long("42")、42.0\ndb.data.find({ count: NumberInt("42") })  // 只匹配 Int32(42)\ndb.data.find({ count: { $type: "int" } }) // 只匹配 32 位整数字段\n\n4. 排序时不同类型按 BSON 排序规则排序，不是数值大小。'
      }
    ],
    diagnosis: [
      {
        symptom: '从 JSON 文件导入数据后，查询 { count: 100 } 无法匹配到文档，但 { count: "100" } 可以',
        cause: 'JSON 导入时数字可能被解析为字符串（取决于导入工具和 JSON 格式）。BSON 严格区分类型，整数 100 和字符串 "100" 是不同的值。',
        fix: '使用 mongoimport 时确保 JSON 中的数字不带引号。如果已导入为字符串，用聚合管道转换：db.collection.updateMany({}, [{ $set: { count: { $toInt: "$count" } } }])。或者使用 Extended JSON 格式确保类型正确。'
      },
      {
        symptom: '存储超过 Number.MAX_SAFE_INTEGER 的整数后，查询结果中的数字与插入时不同',
        cause: 'JavaScript 的 Number 类型是 64 位浮点数，只能精确表示 53 位整数。超过 2^53 - 1 的整数会丢失精度。这是 JS 引擎的限制，不是 MongoDB 的问题。',
        fix: '大整数必须使用 NumberLong("...") 或 NumberDecimal("...") 插入，用字符串传入避免 JS 精度丢失。查询结果也需要用 .toString() 检查 Long 值。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 types_test 集合中插入一个文档，包含以下字段：一个 32 位整数（值为 100）、一个 64 位整数（值为 2^60）、一个 Decimal128（值为 99.99）、一个 Date（当前时间）、一个 ObjectId。然后查询并观察每个字段的类型。',
        hint: '使用 NumberInt()、NumberLong()、NumberDecimal()、new Date()、new ObjectId() 构造函数。',
        answer: 'db.types_test.drop();\ndb.types_test.insertOne({\n  int32: NumberInt("100"),\n  int64: NumberLong("1152921504606846976"),  // 2^60\n  decimal: NumberDecimal("99.99"),\n  date: new Date(),\n  oid: new ObjectId()\n});\n\n// 查看类型\ndb.types_test.findOne({}, { _id: 0 });\n// 输出：\n// {\n//   int32: Int32(100),\n//   int64: Long("1152921504606846976"),\n//   decimal: Decimal128("99.99"),\n//   date: ISODate("2024-..."),\n//   oid: ObjectId("...")\n// }\n\n// 用 $type 验证\ndb.types_test.find({ int32: { $type: "int" } });     // 匹配\ndb.types_test.find({ decimal: { $type: "decimal" } }); // 匹配'
      },
      {
        level: '进阶',
        task: '解释为什么 BSON 文档比等价的 JSON 文本更大，但 MongoDB 仍然选择 BSON 作为存储格式。列出 BSON 的三个设计优势。',
        hint: '考虑解析效率、类型表达和遍历速度三个方面。',
        answer: 'BSON 的三个设计优势：\n\n1. 高效遍历：每个文档和子文档都有长度前缀，引擎可以直接跳过不需要的字段（O(1) 跳转），而 JSON 需要逐字符解析（O(n)）。\n\n2. 丰富类型：BSON 区分 int32/int64/double/Decimal128，支持 Date、ObjectId、Binary 等类型。JSON 只有一种 number 类型，无法精确表达不同类型。\n\n3. 快速编码/解码：二进制格式可以直接 memcpy 到内存结构，不需要 JSON 的词法分析和语法分析。对于 MongoDB 的存储引擎（WiredTiger），BSON 可以直接映射到内存中的数据结构。\n\n代价是存储空间增加（长度前缀和类型标记的开销），但 MongoDB 的设计哲学是"用空间换时间"——存储成本低，CPU 和延迟更宝贵。'
      }
    ]
  },

  'kx_GOr51UMpdUAnS5u9qZ': {
    // Undefined 类型
    mentalModel: 'Undefined 是 BSON 的"已废弃幽灵"——它曾经表示"有字段但没有值"，现在已被 null 取代，MongoDB 会把它当作 null 处理，就像一个已经退休但偶尔还在花名册上出现的员工。',
    sections: [
      {
        title: 'Undefined 类型的历史与现状',
        content: 'BSON 规范中 Undefined 类型（type code 0x06）的来龙去脉：\n\n历史：\n- 早期 MongoDB（2.x 之前）支持 undefined 作为字段值\n- 区分 null（显式设为空）和 undefined（字段未定义）\n- 与 JavaScript 的 undefined 语义对齐\n\n现状：\n- BSON 规范已将 Undefined 标记为 deprecated\n- MongoDB 服务器不再允许插入 undefined 值\n- 驱动层会自动将 undefined 转换为 null 或忽略\n- 读取旧数据中的 undefined 时，返回 null\n\n验证：\n// 尝试插入 undefined\ndb.test.insertOne({ x: undefined })\n// mongosh 中实际行为：字段被忽略或存为 null\n// 不同驱动行为不同：\n//   Node.js 驱动：默认忽略 undefined 字段\n//   Python 驱动：转换为 null\n//   Java 驱动：抛出异常\n\nBSON 类型代码：\nnull: 0x0A\nundefined: 0x06（已废弃）'
      },
      {
        title: 'Undefined 与 null 和 missing 的区别',
        content: 'MongoDB 中"无值"的三种状态：\n\n1. null — 字段存在，值为 null\n{ name: "Alice", email: null }  // email 字段存在但为空\n\n2. missing — 字段不存在\n{ name: "Alice" }  // email 字段不存在\n\n3. undefined — 已废弃，等价于 null\n{ name: "Alice", email: undefined }  // 历史遗留数据\n\n查询行为：\n// { field: null } 同时匹配 null 和 missing\ndb.users.find({ email: null })\n// 匹配：{ name: "Alice", email: null }\n// 匹配：{ name: "Bob" }（email 不存在）\n\n// 只匹配 null（排除 missing）\ndb.users.find({ email: { $eq: null }, email: { $exists: true } })\n// 或者：\ndb.users.find({ email: { $type: "null" } })\n\n// 只匹配 missing\ndb.users.find({ email: { $exists: false } })\n\n// $type 查询 undefined（可能存在于旧数据中）\ndb.users.find({ email: { $type: "undefined" } })'
      },
      {
        title: '应用层处理 Undefined 的最佳实践',
        content: '不同编程语言驱动对 undefined 的处理：\n\nNode.js (MongoDB Node Driver)：\n// 默认行为：undefined 字段被忽略\nconst doc = { name: "Alice", email: undefined };\n// 实际插入：{ name: "Alice" }\n\n// 配置 ignoreUndefined: false 时存为 null\nnew MongoClient(uri, { ignoreUndefined: false });\n// 实际插入：{ name: "Alice", email: null }\n\nPython (PyMongo)：\n# None 存为 BSON null\ncollection.insert_one({"name": "Alice", "email": None})\n# 实际存储：{ name: "Alice", email: null }\n\nJava (MongoDB Java Driver)：\n// null 存为 BSON null\ndocument.append("email", null);\n// 实际存储：{ name: "Alice", email: null }\n\n最佳实践：\n1. 新代码中永远不要使用 undefined，用 null 代替\n2. 需要区分"无值"和"不存在"时，用 $exists 查询\n3. 迁移旧数据时将 undefined 转换为 null：\n   db.collection.updateMany(\n     { field: { $type: "undefined" } },\n     { $set: { field: null } }\n   )\n4. Schema 验证中用 bsonType: ["null", "string"] 允许空值'
      }
    ],
    diagnosis: [
      {
        symptom: '从旧版 MongoDB 迁移数据后，某些字段的值在 mongosh 中显示为 null，但 $type 查询为 "undefined"',
        cause: '旧数据中确实存在 BSON undefined 类型。mongosh 显示为 null 但底层 BSON 类型不同。$type: "null" 不匹配 undefined，$type: "undefined" 才能匹配。',
        fix: '批量转换 undefined 为 null：db.collection.updateMany({ field: { $type: "undefined" } }, [{ $set: { field: null } }])。这确保类型统一，避免查询行为不一致。'
      },
      {
        symptom: 'Node.js 应用插入包含 undefined 字段的文档后，查询 { field: null } 无法匹配到这些文档',
        cause: 'Node.js MongoDB 驱动默认 ignoreUndefined: true，undefined 字段在插入时被静默移除（不是存为 null）。所以文档中根本没有该字段，{ field: null } 查询虽然能匹配 missing 字段，但语义可能不符合预期。',
        fix: '如果需要字段存在且为 null，在插入前显式将 undefined 转为 null：const doc = { name: "Alice", email: emailValue ?? null }。或者在 MongoClient 配置中设置 ignoreUndefined: false。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '设计一个查询，分别找出 users 集合中 email 字段为 null、email 字段不存在、email 字段为 undefined（旧数据）的文档数量。',
        hint: '使用 $type 操作符区分不同类型，结合 $exists 判断字段是否存在。',
        answer: '// email 为 null（存在且为 null）\ndb.users.countDocuments({ email: { $type: "null" } });\n\n// email 不存在\ndb.users.countDocuments({ email: { $exists: false } });\n\n// email 为 undefined（旧数据）\ndb.users.countDocuments({ email: { $type: "undefined" } });\n\n// 注意：{ email: null } 会同时匹配 null 和 missing，\n// 而 { email: { $type: "null" } } 只匹配值为 null 的文档。'
      },
      {
        level: '进阶',
        task: '写一个数据迁移脚本（mongosh），将集合中所有 undefined 类型的字段转换为 null，并统计转换了多少个字段。',
        hint: '遍历集合中的所有字段名，对每个字段检查 $type: "undefined"，然后用 updateMany 批量转换。',
        answer: '// 迁移脚本\nconst collection = db.myCollection;\nconst sample = collection.findOne();\nconst fields = Object.keys(sample).filter(k => k !== "_id");\nlet totalConverted = 0;\n\nfields.forEach(field => {\n  const count = collection.countDocuments({ [field]: { $type: "undefined" } });\n  if (count > 0) {\n    collection.updateMany(\n      { [field]: { $type: "undefined" } },\n      { $set: { [field]: null } }\n    );\n    totalConverted += count;\n    print(`Converted ${count} "${field}" fields from undefined to null`);\n  }\n});\n\nprint(`Total fields converted: ${totalConverted}`);'
      }
    ]
  },

  'T6cq--pute6-8aG7z6QKN': {
    // Date 类型
    mentalModel: 'MongoDB 的 Date 类型是一个"毫秒精度时钟"——它存储自 1970-01-01T00:00:00Z 以来的毫秒数（64 位整数），所有时间都以 UTC 存储，时区转换完全在应用层处理。',
    sections: [
      {
        title: 'Date 类型的存储与表示',
        content: 'MongoDB Date 类型的本质：\n\n存储：64 位有符号整数，表示自 Unix 纪元（1970-01-01T00:00:00Z）以来的毫秒数\n范围：从 2.9 亿年前到 2.9 亿年后（足够覆盖任何业务需求）\n精度：毫秒级（不支持微秒/纳秒）\n\nmongosh 中的创建方式：\n// 当前时间\ndb.events.insertOne({ ts: new Date() })\n\n// 指定时间（UTC）\ndb.events.insertOne({ ts: ISODate("2024-03-15T10:30:00Z") })\ndb.events.insertOne({ ts: new Date("2024-03-15T10:30:00Z") })\n\n// 从毫秒时间戳创建\ndb.events.insertOne({ ts: new Date(1710498600000) })\n\n// 注意时区陷阱\nnew Date("2024-03-15T10:30:00+08:00")  // 带时区偏移，自动转换为 UTC\n// 存储为 ISODate("2024-03-15T02:30:00Z")\n\nnew Date("2024-03-15")  // 无时间的日期\n// 不同驱动行为不同，可能解析为 UTC 00:00 或本地 00:00'
      },
      {
        title: 'Date 查询与聚合',
        content: 'Date 类型的常用查询：\n\n// 范围查询\ndb.events.find({\n  ts: {\n    $gte: ISODate("2024-03-01"),\n    $lt: ISODate("2024-04-01")\n  }\n})\n\n// 聚合管道中的日期操作\ndb.events.aggregate([\n  { $match: { ts: { $gte: ISODate("2024-01-01") } } },\n  { $group: {\n    _id: {\n      year: { $year: "$ts" },\n      month: { $month: "$ts" },\n      day: { $dayOfMonth: "$ts" }\n    },\n    count: { $sum: 1 }\n  }},\n  { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } }\n])\n\n// 日期运算（聚合表达式）\n{ $addFields: {\n  hourOfDay: { $hour: "$ts" },\n  dayOfWeek: { $dayOfWeek: "$ts" },  // 1=周日, 7=周六\n  weekOfYear: { $week: "$ts" },\n  // 日期加减\n  nextWeek: { $dateAdd: { startDate: "$ts", unit: "week", amount: 1 } },\n  daysSince: { $dateDiff: { startDate: "$ts", endDate: "$$NOW", unit: "day" } }\n}}\n\n// 时区转换（5.0+）\n{ $addFields: {\n  localTime: { $dateToString: {\n    date: "$ts",\n    format: "%Y-%m-%d %H:%M:%S",\n    timezone: "Asia/Shanghai"\n  }}\n}}'
      },
      {
        title: 'Date 常见陷阱与最佳实践',
        content: 'Date 类型的常见陷阱：\n\n1. 时区问题\n// 错误：用字符串比较日期\ndb.events.find({ ts: "2024-03-15" })  // 不匹配！类型不同\n\n// 正确：用 Date 对象\ndb.events.find({ ts: { $gte: ISODate("2024-03-15"), $lt: ISODate("2024-03-16") } })\n\n2. 精度问题\n// MongoDB Date 只精确到毫秒\nnew Date("2024-03-15T10:30:00.123456Z")  // 微秒部分被截断\n// 存储为 ISODate("2024-03-15T10:30:00.123Z")\n\n3. 索引优化\n// Date 字段上的索引支持范围查询\ndb.events.createIndex({ ts: 1 })\n// explain() 显示精确的索引边界\ndb.events.find({ ts: { $gte: ISODate("2024-03-01") } }).explain()\n// indexBounds: { ts: [ISODate("2024-03-01"), MaxKey] }\n\n4. TTL 索引（自动过期）\ndb.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })\n// 文档在 createdAt + 3600 秒后自动删除\n\n最佳实践：\n- 始终使用 UTC 存储，应用层做时区转换\n- 范围查询用 $gte/$lt 而不是字符串比较\n- 大时间范围查询考虑按月分片或使用 Time Series 集合'
      }
    ],
    diagnosis: [
      {
        symptom: '按日期查询时，某些文档"消失"了——比如查询 3 月 15 日的数据，但有些当天创建的文档查不到',
        cause: '时区问题。如果插入时使用了本地时间（如 UTC+8），MongoDB 存储的是 UTC 时间。"2024-03-15 23:00:00 +08:00" 存储为 "2024-03-15T15:00:00Z"，仍在 3 月 15 日范围内；但 "2024-03-15 01:00:00 +08:00" 存储为 "2024-03-14T17:00:00Z"，属于 3 月 14 日。',
        fix: '查询时考虑时区偏移。查询"北京时间 3 月 15 日全天"应该用：ts: { $gte: ISODate("2024-03-14T16:00:00Z"), $lt: ISODate("2024-03-15T16:00:00Z") }。或者在聚合中使用 $dateToString 带 timezone 参数转换后再过滤。'
      },
      {
        symptom: 'TTL 索引没有按时删除过期文档，有些文档超过过期时间后仍然存在',
        cause: 'TTL 索引的后台任务每 60 秒运行一次，且删除不是精确到秒的。此外，如果 Date 字段的值不是 BSON Date 类型（比如是字符串），TTL 索引不会生效。',
        fix: '1. 确认字段是 BSON Date 类型：db.collection.findOne({ field: { $type: "date" } })。2. TTL 有约 60 秒延迟是正常的。3. 如果字段是字符串，需要转换为 Date：db.collection.updateMany({}, [{ $set: { field: { $toDate: "$field" } } }])。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 events 集合中查询 2024 年 3 月（北京时间 UTC+8）的所有事件。写出 mongosh 查询命令，注意时区转换。',
        hint: '北京时间 3 月 1 日 00:00 = UTC 2 月 29 日 16:00，北京时间 4 月 1 日 00:00 = UTC 3 月 31 日 16:00。',
        answer: '// 北京时间 2024-03 月范围转换为 UTC：\n// 开始：2024-03-01 00:00:00 +08:00 = 2024-02-29T16:00:00Z\n// 结束：2024-04-01 00:00:00 +08:00 = 2024-03-31T16:00:00Z\n\ndb.events.find({\n  ts: {\n    $gte: ISODate("2024-02-29T16:00:00Z"),\n    $lt: ISODate("2024-03-31T16:00:00Z")\n  }\n}).sort({ ts: 1 });\n\n// 或者使用聚合管道带时区：\ndb.events.aggregate([\n  { $addFields: { bjMonth: { $dateToString: { date: "$ts", format: "%Y-%m", timezone: "Asia/Shanghai" } } } },\n  { $match: { bjMonth: "2024-03" } },\n  { $project: { bjMonth: 0 } }\n]);'
      },
      {
        level: '进阶',
        task: '设计一个聚合管道，统计 orders 集合中每天的订单数和总收入，按日期排序，时区为北京时间。',
        hint: '使用 $group 配合 $year、$month、$dayOfMonth 提取日期部分，用 timezone 参数处理时区。',
        answer: 'db.orders.aggregate([\n  { $match: {\n    orderDate: { $gte: ISODate("2024-01-01") }\n  }},\n  { $group: {\n    _id: {\n      $dateToString: {\n        date: "$orderDate",\n        format: "%Y-%m-%d",\n        timezone: "Asia/Shanghai"\n      }\n    },\n    orderCount: { $sum: 1 },\n    totalRevenue: { $sum: "$amount" }\n  }},\n  { $sort: { _id: 1 } },\n  { $project: {\n    _id: 0,\n    date: "$_id",\n    orderCount: 1,\n    totalRevenue: { $round: ["$totalRevenue", 2] }\n  }}\n]);\n// 输出示例：\n// { date: "2024-01-01", orderCount: 156, totalRevenue: 45230.50 }\n// { date: "2024-01-02", orderCount: 203, totalRevenue: 62150.75 }'
      }
    ]
  },

  'XAS4jQlsHkttLDuSSsD2o': {
    // Symbol 类型
    mentalModel: 'Symbol 是 BSON 的"退休老兵"——它曾经用于表示语言级别的符号（如 Ruby 的 :symbol），现在已被废弃并映射为普通字符串，只在兼容旧数据时才会遇到。',
    sections: [
      {
        title: 'Symbol 类型的历史背景',
        content: 'BSON Symbol 类型（type code 0x0E）的故事：\n\n起源：\n- BSON 规范早期为了兼容动态语言（Ruby、Lisp）的 Symbol 类型而引入\n- Ruby 中 :name 是一个 Symbol（不可变字符串，常用于哈希键）\n- Lisp 中 symbol 是一等公民\n\n存储格式：\n- 与 String 几乎相同：4 字节长度 + UTF-8 数据 + 终止符 \\0\n- BSON type code: 0x0E（区别于 String 的 0x02）\n\n现状：\n- BSON 规范已标记 Symbol 为 deprecated\n- MongoDB 服务器不接受插入 Symbol 值\n- 大多数驱动将 Symbol 当作字符串处理\n- 读取旧数据中的 Symbol 时，返回字符串\n\n为什么废弃：\n- 大多数语言没有 Symbol 概念，导致跨语言兼容性问题\n- JavaScript 的 Symbol（ES6）与 BSON Symbol 完全不同\n- 用字符串替代 Symbol 不会丢失语义'
      },
      {
        title: 'Symbol 与 String 的对比',
        content: '在旧数据中可能遇到的 Symbol 值：\n\n// 假设旧集合中有 Symbol 类型的字段\ndb.legacy.findOne({ status: { $type: "symbol" } })\n// mongosh 返回字符串值，但 $type 仍然识别为 symbol\n\n// 对比 String 和 Symbol 的 $type 查询\ndb.legacy.find({ status: { $type: "string" } })  // type code 0x02\ndb.legacy.find({ status: { $type: "symbol" } })  // type code 0x0E\n\n// 两种类型在查询匹配时行为相同\ndb.legacy.find({ status: "active" })\n// 同时匹配 String "active" 和 Symbol "active"\n\n// 但索引存储不同：\n// String 和 Symbol 在索引中按不同的类型排序\n// BSON 排序顺序：String (0x02) < Symbol (0x0E)\n// 虽然值相同，类型不同时排序也不同\n\n迁移建议：\n// 将 Symbol 转为 String\ndb.legacy.updateMany(\n  { field: { $type: "symbol" } },\n  [{ $set: { field: { $toString: "$field" } } }]\n)'
      },
      {
        title: '在聚合管道中处理 Symbol',
        content: '处理旧数据中的 Symbol 类型：\n\n// 检查集合中有多少 Symbol 字段\ndb.legacy.aggregate([\n  { $match: { status: { $type: "symbol" } } },\n  { $count: "symbolCount" }\n])\n\n// 批量转换 Symbol → String\ndb.legacy.updateMany(\n  { status: { $type: "symbol" } },\n  [{ $set: { status: { $toString: "$status" } } }]\n)\n\n// 在聚合中统一类型\ndb.legacy.aggregate([\n  { $addFields: {\n    status: { $toString: "$status" }  // Symbol → String\n  }},\n  { $group: {\n    _id: "$status",\n    count: { $sum: 1 }\n  }}\n])\n\n// Schema 验证中处理混合类型\ndb.createCollection("validated", {\n  validator: {\n    $jsonSchema: {\n      properties: {\n        status: {\n          bsonType: ["string", "symbol"],  // 兼容旧数据\n          description: "must be a string"\n        }\n      }\n    }\n  }\n})'
      }
    ],
    diagnosis: [
      {
        symptom: '从旧版 MongoDB 迁移数据后，某些字段的值看起来是字符串但 $type: "string" 匹配不到',
        cause: '这些字段实际上是 BSON Symbol 类型（0x0E），虽然显示为字符串但底层类型不同。$type: "string" 不匹配 Symbol 类型。',
        fix: '使用 $type: "symbol" 查找这些字段，然后用 updateMany 批量转换为字符串：db.collection.updateMany({ field: { $type: "symbol" } }, [{ $set: { field: { $toString: "$field" } } }])。'
      },
      {
        symptom: '从 Ruby 应用写入的 Symbol 值在 Node.js 应用中读取后变成了普通字符串',
        cause: 'Node.js MongoDB 驱动不支持 BSON Symbol 类型，会自动将其转换为 JavaScript 字符串。这是预期行为，因为 BSON Symbol 已被废弃。',
        fix: '这是正常行为，不需要修复。但建议在 Ruby 端也改用字符串，避免跨语言兼容性问题。如果需要保留 Symbol 语义，在应用层用特殊前缀标记（如 "symbol:active"）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写一个 mongosh 脚本，扫描 legacy_data 集合中所有字段，找出值为 Symbol 类型的字段名和数量。',
        hint: '用 findOne() 获取字段列表，然后对每个字段用 countDocuments({ field: { $type: "symbol" } }) 检查。',
        answer: 'const sample = db.legacy_data.findOne();\nconst fields = Object.keys(sample).filter(k => k !== "_id");\nconst results = {};\n\nfields.forEach(field => {\n  const count = db.legacy_data.countDocuments({ [field]: { $type: "symbol" } });\n  if (count > 0) {\n    results[field] = count;\n    print(`Field "${field}": ${count} Symbol values`);\n  }\n});\n\nprint(`\\nTotal fields with Symbol values: ${Object.keys(results).length}`);\nprint(JSON.stringify(results, null, 2));'
      },
      {
        level: '进阶',
        task: '解释为什么 BSON Symbol 类型被废弃，以及在现代 MongoDB 开发中如何处理原本需要 Symbol 的场景。',
        hint: '从跨语言兼容性、JavaScript Symbol 的冲突、以及替代方案三个角度分析。',
        answer: 'BSON Symbol 被废弃的原因：\n\n1. 跨语言兼容性差：只有 Ruby 和 Lisp 有原生 Symbol 类型，Java、Python、Go 等主流语言没有对应类型，导致驱动实现不一致。\n\n2. 与 JS Symbol 冲突：ES6 引入的 JavaScript Symbol 是完全不同的概念（唯一且不可变的原始值），名称相同容易混淆。\n\n3. 无实际价值：Symbol 的核心语义是"不可变标识符"，但字符串在 MongoDB 中已经足够，Symbol 没有提供额外功能。\n\n现代替代方案：\n- 枚举值：用字符串 + Schema 验证的 enum 约束\n- 状态码：用整数 + 应用层映射\n- 常量标识符：用普通字符串，在应用层封装为常量\n- 如需 Ruby Symbol 语义：在 Ruby 端用 String 存储，读取时 .to_sym 转换'
      }
    ]
  },

  'zbFH2NRHZEOv5eKLL_HR0': {
    // Timestamp 类型
    mentalModel: 'Timestamp 是 MongoDB 内部的"复制时钟"——它不是给人用的时间戳，而是给复制集用的逻辑时钟（秒数+递增序号），确保操作在集群中按正确顺序重放，就像流水线的工序编号。',
    sections: [
      {
        title: 'Timestamp 的内部结构与用途',
        content: 'BSON Timestamp 类型（type code 0x11）是 64 位值，分为两部分：\n\n高 32 位：秒级时间戳（Unix 纪元以来的秒数）\n低 32 位：递增序号（同一秒内的操作序号）\n\n表示法：Timestamp(1710498600, 1) → 2024-03-15 14:30:00 UTC 的第 1 个操作\n\n主要用途：\n1. 操作日志（oplog）：每个 oplog 条目都有 ts 字段\n2. 复制一致性：从节点通过 ts 确定需要同步的操作\n3. Change Streams：resume token 基于 Timestamp\n4. MVCC 版本控制：WiredTiger 用 Timestamp 实现快照隔离\n\n注意区分：\n- Timestamp：内部逻辑时钟（32位秒+32位序号），用于复制\n- Date：人类可读时间戳（毫秒精度），用于业务数据\n\n// 永远不要在业务数据中使用 Timestamp 类型！\n// 用 Date 存储业务时间戳。'
      },
      {
        title: 'Timestamp 在 oplog 中的角色',
        content: 'oplog（操作日志）是 Timestamp 最核心的应用：\n\n// 查看 oplog 最近的条目\ndb.getSiblingDB("local").oplog.rs.find().sort({ $natural: -1 }).limit(5)\n// 输出示例：\n// { ts: Timestamp(1710498600, 1), op: "i", ns: "myapp.orders", o: { ... } }\n// { ts: Timestamp(1710498601, 1), op: "u", ns: "myapp.users", o2: {...}, o: { $set: {...} } }\n// { ts: Timestamp(1710498602, 1), op: "c", ns: "myapp.$cmd", o: { createIndexes: "orders", ... } }\n\nop 字段含义：\n- i：insert\n- u：update\n- d：delete\n- c：command（createIndex, dropCollection 等）\n- n：no-op（心跳）\n\n从节点同步流程：\n1. 从节点记录最后应用的 oplog ts\n2. 向主节点请求 ts 之后的所有操作\n3. 按 ts 顺序重放操作\n4. 更新最后应用的 ts\n\n// 查看复制延迟\ndb.getSiblingDB("admin").runCommand({ replSetGetStatus: 1 }).members.forEach(m => {\n  if (m.stateStr === "SECONDARY") {\n    const lag = (m.optimeDate - m.optimeDurableDate) / 1000;\n    print(`${m.name}: lag = ${lag}s`);\n  }\n});'
      },
      {
        title: 'Timestamp 与 Change Streams 和 MVCC',
        content: 'Timestamp 在其他 MongoDB 机制中的应用：\n\n1. Change Streams\n// 创建 Change Stream\nconst cursor = db.orders.watch();\n// 每个事件包含 clusterTime（即 Timestamp）\n// {\n//   _id: { _data: "..." },  // resume token，内含 Timestamp\n//   operationType: "insert",\n//   clusterTime: Timestamp(1710498600, 1),\n//   fullDocument: { ... }\n// }\n\n// 从指定 Timestamp 恢复\nconst cursor = db.orders.watch([], {\n  startAtOperationTime: Timestamp(1710498600, 1)\n});\n\n2. MVCC（多版本并发控制）\n// WiredTiger 为每个事务分配 read timestamp\n// 事务只能看到 commit timestamp ≤ read timestamp 的数据\n// 这就是为什么 MongoDB 4.0+ 的多文档事务能提供快照隔离\n\n3. 因果一致性（Causal Consistency）\n// 客户端记录最后操作的 Timestamp（operationTime）\n// 后续操作携带 afterClusterTime 参数\n// 确保读取到之前写入的数据\n\n// 查看 operationTime\ndb.runCommand({ ping: 1 }).operationTime\n// 返回 Timestamp，可用于因果一致性会话'
      }
    ],
    diagnosis: [
      {
        symptom: '从节点复制延迟告警，rs.status() 显示某个 SECONDARY 节点的 optimeDate 远落后于 PRIMARY',
        cause: '从节点应用 oplog 的速度跟不上主节点产生 oplog 的速度。可能原因：从节点硬件性能差、网络带宽不足、oplog 中有大文档操作（如大数组的 $push）。',
        fix: '1. 检查从节点硬件（CPU、磁盘 I/O）是否足够。2. 检查网络带宽和延迟。3. 分析 oplog 中大操作：db.oplog.rs.find().sort({ $natural: -1 }).limit(100) 查看大文档操作。4. 考虑使用 initial sync 重新同步从节点。'
      },
      {
        symptom: 'Change Streams 断开重连后丢失了部分事件',
        cause: 'Change Streams 依赖 oplog。如果断线期间 oplog 被覆盖（oplog 大小有限，旧条目会被新条目覆盖），则无法从之前的 Timestamp 恢复。',
        fix: '1. 增大 oplog 大小：db.adminCommand({ replSetResizeOplog: 1, size: 50000 })（MB）。2. 使用 resume token 而非 Timestamp 恢复（resume token 包含更多上下文）。3. 考虑使用 Atlas 的 Extended Events 保留期。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查看当前副本集 oplog 中最近 10 条操作记录，解释每条记录的 ts、op、ns 字段含义。',
        hint: 'oplog 在 local 数据库的 oplog.rs 集合中。使用 find().sort({$natural: -1}) 查看最近条目。',
        answer: 'db.getSiblingDB("local").oplog.rs.find().sort({ $natural: -1 }).limit(10);\n\n// 输出示例：\n// { ts: Timestamp(1710498600, 1), t: Long(1), op: "i", ns: "shop.orders",\n//   wall: ISODate("2024-03-15T14:30:00Z"), o: { _id: ObjectId("..."), total: 99.99 } }\n\n// 字段解释：\n// ts: Timestamp — 操作的时间戳（秒+序号），用于复制排序\n// t: term — 选举任期号，主节点变更时递增\n// op: 操作类型 — "i"=插入, "u"=更新, "d"=删除, "c"=命令\n// ns: 命名空间 — "数据库.集合" 格式\n// wall: 挂钟时间 — 人类可读的时间（用于诊断，不用于复制）\n// o: 操作内容 — 插入/命令的完整文档，更新时的修改操作'
      },
      {
        level: '进阶',
        task: '解释 Timestamp 的高 32 位和低 32 位各自的作用，以及为什么需要这种设计而不是只用毫秒级时间戳。',
        hint: '考虑同一秒内多个操作的排序需求，以及 32 位序号的容量。',
        answer: 'Timestamp 的 64 位结构：\n\n高 32 位（秒级时间戳）：\n- 记录操作的 UTC 秒数\n- 范围：约 136 年（到 2106 年）\n- 提供粗略的时间排序\n\n低 32 位（递增序号）：\n- 同一秒内的操作序号（从 1 开始）\n- 范围：每秒最多 2^32 ≈ 43 亿个操作\n- 确保同一秒内的操作有确定性的顺序\n\n为什么不用毫秒时间戳：\n1. 毫秒精度仍然无法保证同一毫秒内多个操作的排序\n2. 64 位毫秒时间戳的范围有限（约 2.9 亿年 vs 秒+序号的 136 年+精确排序）\n3. 复制需要严格的总序关系（total ordering），秒+序号的设计天然保证操作的先后顺序\n4. 32 位序号容量足够——现实中不可能在一秒内产生 43 亿次操作'
      }
    ]
  },

  'thOckmrCJ45NVNPNxm4eg': {
    // Read/Write Concerns
    mentalModel: 'Read/Write Concern 是 MongoDB 的"可靠性调节旋钮"——Write Concern 决定写操作需要多少节点确认才算成功，Read Concern 决定读操作看到的数据有多"新鲜"，就像快递的签收方式（自取 vs 本人签收 vs 多人签收）。',
    sections: [
      {
        title: 'Write Concern 详解',
        content: 'Write Concern 控制写操作的确认级别：\n\n语法：{ w: <value>, j: <boolean>, wtimeout: <ms> }\n\nw 值选项：\n- 0：不等待确认（fire-and-forget），最快但可能丢失数据\n- 1：只等主节点确认（默认），主节点崩溃可能丢数据\n- "majority"：等大多数节点确认（如 3 节点集群需 2 个确认）\n- 数字 N：等 N 个节点确认\n- 自定义标签：如 { w: "dc-east" }\n\nj 选项：\n- false（默认）：写入内存即确认\n- true：写入 journal 日志才确认（防崩溃丢失）\n\n常用组合：\n// 最高安全：大多数节点 + journal\ndb.orders.insertOne(doc, { writeConcern: { w: "majority", j: true } })\n\n// 平衡性能和安全：主节点 + journal\ndb.logs.insertOne(doc, { writeConcern: { w: 1, j: true } })\n\n// 最高性能：不等待确认\ndb.metrics.insertOne(doc, { writeConcern: { w: 0 } })\n\n// 带超时的大多数写入\ndb.orders.insertOne(doc, { writeConcern: { w: "majority", wtimeout: 5000 } })\n// 如果 5 秒内无法获得大多数确认，返回超时错误（但写入可能仍在后台进行）'
      },
      {
        title: 'Read Concern 详解',
        content: 'Read Concern 控制读操作的数据一致性级别：\n\n选项：\n- "local"（默认）：读取当前节点的数据，可能未提交\n- "available"：类似 local，但在分片集群中可能返回孤儿文档\n- "majority"：只读取已被大多数节点确认的数据\n- "linearizable"：确保读到最新的大多数确认数据（仅主节点）\n- "snapshot"：事务中的一致性快照读\n\n// 大多数确认读\ndb.orders.find({}).readConcern("majority")\n// 保证读到的数据不会回滚（已被大多数节点复制）\n\n// 线性一致读\ndb.orders.find({}).readConcern("linearizable")\n// 保证读到最新数据（等待主节点追上最新的 majority 提交点）\n// 性能最低，延迟最高\n\n// 事务中的快照读\nsession.startTransaction({ readConcern: { level: "snapshot" } });\n// 事务内的所有读操作看到一致的数据快照\n\nRead Concern 与 Write Concern 的配合：\n// 因果一致性：写用 majority，读用 majority\n// 确保写入对后续读可见\ndb.orders.insertOne(doc, { writeConcern: { w: "majority" } });\ndb.orders.find({ _id: id }).readConcern("majority");'
      },
      {
        title: 'Read/Write Concern 的实际选择指南',
        content: '不同场景的推荐配置：\n\n1. 金融交易（最高一致性）\n   Write: { w: "majority", j: true }\n   Read: "linearizable" 或在事务中用 "snapshot"\n   代价：高延迟（每次写等待大多数确认）\n\n2. 电商订单（强一致性）\n   Write: { w: "majority", j: true }\n   Read: "majority"\n   代价：中等延迟\n\n3. 用户会话（平衡）\n   Write: { w: 1, j: true }\n   Read: "local"\n   代价：主节点崩溃可能丢失最近写入\n\n4. 日志和指标（最高吞吐）\n   Write: { w: 1 } 或 { w: 0 }\n   Read: "local"\n   代价：可能丢数据，但吞吐量最高\n\n5. 分片集群中的注意事项\n   - "majority" write 需要所有分片的大多数节点确认\n   - 跨分片事务需要 "majority" 才能获得一致性\n   - "available" read concern 在分片集群中可能读到孤儿文档\n\n// 全局默认设置（mongod.conf）\n// setParameter:\n//   defaultWriteConcern: { w: "majority", j: true }\n//   defaultReadConcern: "majority"'
      }
    ],
    diagnosis: [
      {
        symptom: '写入操作频繁超时，报 "waiting for replication timed out"（WriteConcernError）',
        cause: 'Write Concern 设为 "majority" 但某个从节点延迟过高或宕机，导致无法在 wtimeout 时间内获得大多数确认。例如 3 节点集群中 1 个从节点宕机，另一个从节点延迟高。',
        fix: '1. 检查从节点健康状态：rs.status()。2. 增大 wtimeout 值。3. 如果从节点持续不可用，临时降级为 { w: 1, j: true }。4. 修复从节点后恢复 "majority"。5. 考虑增加节点数提高容错能力。'
      },
      {
        symptom: '应用写入数据后立即读取，有时读不到刚写入的数据',
        cause: 'Read Concern 为默认的 "local"，在副本集中可能读到从节点的旧数据（从节点复制有延迟）。或者客户端连接到了不同的 mongos，读到了不同的节点。',
        fix: '1. 写操作使用 { w: "majority" } 确保大多数节点确认。2. 后续读操作使用 Read Concern "majority" 或 "linearizable"。3. 在需要因果一致性的场景使用 causal consistency session。4. 最简单的方案：写入后立即读取时强制读主节点（readPreference: "primary"）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 5 节点副本集（1 主 4 从），解释 w: "majority" 需要多少个节点确认。如果 2 个从节点宕机，w: "majority" 的写入还能成功吗？',
        hint: 'majority = 总节点数 / 2 + 1。5 节点的 majority 是 3。',
        answer: '5 节点副本集的 majority = 5 / 2 + 1 = 3（向上取整）。\n\nw: "majority" 需要至少 3 个节点确认写入。\n\n如果 2 个从节点宕机：\n- 剩余节点：1 主 + 2 从 = 3 个节点\n- majority 仍为 3\n- 写入需要全部 3 个存活节点确认\n- 如果 3 个存活节点都正常，写入可以成功\n- 如果再宕 1 个节点（只剩 2 个），majority 写入将失败\n\n这就是为什么偶数节点集群（如 4 节点）的容错能力与 3 节点相同——majority 都是 3，但 4 节点允许 1 个宕机，3 节点也允许 1 个宕机。所以推荐奇数节点集群。'
      },
      {
        level: '进阶',
        task: '设计一个支付系统的数据写入策略：核心支付记录、通知消息、审计日志三种数据分别应该用什么 Write Concern？解释理由。',
        hint: '考虑每种数据丢失的后果和写入频率。',
        answer: '核心支付记录：{ w: "majority", j: true }\n- 理由：丢失支付记录会导致资金不一致，是灾难性的。必须确保大多数节点确认 + journal 持久化。延迟代价可接受（支付不是高频操作）。\n\n通知消息：{ w: 1, j: true }\n- 理由：通知丢失可以重发（通过定时任务检查未发送的通知），不需要 majority 确认。但需要 journal 确保主节点崩溃不丢失。低延迟更重要。\n\n审计日志：{ w: 1, j: false } 或 { w: 0 }\n- 理由：审计日志是追加写入、量极大。偶尔丢失几条不影响合规（有其他审计手段补充）。最高吞吐量最重要。如果合规要求严格，可以升级为 { w: 1, j: true }。\n\n关键原则：数据丢失的代价越高，Write Concern 越强。写入频率越高，越需要权衡性能。'
      }
    ]
  },

  '2h8z2mrgRKSLKI-eBc3zM': {
    // $eq 等于
    mentalModel: '$eq 是 MongoDB 查询的"等号放大镜"——它精确匹配字段值，但比简写形式 { field: value } 多了两个能力：可以匹配 null 值和用在聚合管道中。',
    handsOn: [
      {
        title: '基本等值查询',
        cmd: 'db.products.find({ category: { $eq: "electronics" } }, { _id: 0, name: 1, category: 1, price: 1 })',
        output: '[\n  { name: "Wireless Mouse", category: "electronics", price: 29.99 },\n  { name: "USB-C Hub", category: "electronics", price: 45.00 },\n  { name: "Mechanical Keyboard", category: "electronics", price: 89.99 }\n]',
        explain: '$eq 与简写形式 { category: "electronics" } 功能等价。MongoDB 查询优化器会将两者生成完全相同的执行计划。如果 category 字段有索引，两种写法都会使用索引。'
      },
      {
        title: '$eq 匹配 null 值',
        cmd: 'db.users.find({ email: { $eq: null } }, { _id: 0, name: 1, email: 1 })',
        output: '[\n  { name: "Alice", email: null },\n  { name: "Bob" },\n  { name: "Charlie", email: null }\n]',
        explain: '{ email: { $eq: null } } 同时匹配 email 为 null 的文档和 email 字段不存在的文档。这与 { email: null } 行为一致。如果只想匹配值为 null（排除字段不存在），需要加上 { email: { $eq: null, $exists: true } }。'
      },
      {
        title: '$eq 在嵌套字段和数组中的使用',
        cmd: 'db.orders.find({ "shipping.address.city": { $eq: "Beijing" } }, { _id: 0, orderId: 1 });\ndb.products.find({ tags: { $eq: "sale" } }, { _id: 0, name: 1, tags: 1 })',
        output: '// 第一个查询输出：\n[{ orderId: "ORD-001" }, { orderId: "ORD-003" }]\n// 第二个查询输出（tags 是数组）：\n[{ name: "Headphones", tags: ["audio", "sale"] }, { name: "Webcam", tags: ["video", "sale"] }]',
        explain: '$eq 可以用点号语法查询嵌套文档字段。对于数组字段，$eq: "sale" 会匹配数组中任意元素等于 "sale" 的文档——这与直觉一致，不需要 $elemMatch。'
      },
      {
        title: '$eq 在聚合管道中的使用',
        cmd: 'db.products.aggregate([\n  { $match: { price: { $eq: 29.99 } } },\n  { $addFields: { isExactPrice: { $eq: ["$price", 29.99] } } },\n  { $project: { _id: 0, name: 1, price: 1, isExactPrice: 1 } }\n])',
        output: '[\n  { name: "Wireless Mouse", price: 29.99, isExactPrice: true }\n]',
        explain: '$eq 在聚合管道中有两种用法：$match 阶段中作为查询操作符（与 find 相同），以及 $addFields/$project 中作为表达式（比较两个值，返回 true/false）。表达式语法是 { $eq: [expr1, expr2] }。'
      }
    ],
    diagnosis: [
      {
        symptom: '查询 { status: { $eq: "active" } } 没有返回预期结果，但 { status: "active" } 能返回',
        cause: '如果两个查询行为不同，通常是语法错误——可能多了一层花括号或者字段名拼写不一致。在标准情况下，$eq 和简写形式行为完全相同。',
        fix: '检查查询语法是否正确，确保 $eq 前面有冒号和花括号：{ status: { $eq: "active" } }。如果两者结果仍然不同，用 .explain() 对比执行计划。'
      },
      {
        symptom: '{ count: { $eq: 100 } } 无法匹配 count 为 NumberInt("100") 的文档',
        cause: '在旧版 MongoDB 中，$eq 严格区分数字类型。NumberInt(100) 和 double 100.0 可能在某些比较场景下行为不同。但现代 MongoDB（4.4+）中 $eq 对数值类型做了统一比较。',
        fix: '确认 MongoDB 版本。如果确实遇到类型不匹配，使用 $type 检查实际存储类型，然后用 $toInt/$toLong 统一类型：db.collection.updateMany({}, [{ $set: { count: { $toInt: "$count" } } }])。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 $eq 查询 employees 集合中 department 为 "Engineering" 的所有员工，只返回 name 和 title 字段。然后用 $eq 表达式在聚合管道中添加一个 isEngineering 布尔字段。',
        hint: '$match 中用 { department: { $eq: "Engineering" } }，$addFields 中用 { $eq: ["$department", "Engineering"] }。',
        answer: '// 查询\ndb.employees.find(\n  { department: { $eq: "Engineering" } },\n  { _id: 0, name: 1, title: 1 }\n);\n\n// 聚合\ndb.employees.aggregate([\n  { $addFields: {\n    isEngineering: { $eq: ["$department", "Engineering"] }\n  }},\n  { $project: { _id: 0, name: 1, title: 1, isEngineering: 1 } }\n]);'
      },
      {
        level: '进阶',
        task: '解释 { field: null } 和 { field: { $eq: null } } 的行为是否完全相同。设计一个实验验证你的答案。',
        hint: '插入三种文档：field 为 null、field 不存在、field 为其他值。分别用两种查询测试。',
        answer: 'db.test_eq.drop();\ndb.test_eq.insertMany([\n  { name: "has_null", field: null },\n  { name: "missing" },\n  { name: "has_value", field: "hello" }\n]);\n\n// 查询 1：{ field: null }\ndb.test_eq.find({ field: null }, { _id: 0, name: 1 });\n// 结果：has_null, missing（匹配 null 和不存在）\n\n// 查询 2：{ field: { $eq: null } }\ndb.test_eq.find({ field: { $eq: null } }, { _id: 0, name: 1 });\n// 结果：has_null, missing（行为完全相同）\n\n// 结论：两者行为完全相同。{ field: null } 是 { field: { $eq: null } } 的语法糖。\n// 要只匹配 null（排除 missing），用 { field: { $type: "null" } }。'
      }
    ]
  },

  'eOfsrmOQI0dJW6HV_myVH': {
    // $lte 小于等于
    mentalModel: '$lte 是 MongoDB 范围查询的"右闭边界"——它匹配小于或等于指定值的所有文档，常与 $gte 配对构建闭区间查询，就像用两把尺子量出一段精确的范围。',
    handsOn: [
      {
        title: '基本范围查询',
        cmd: 'db.products.find({ price: { $lte: 50 } }, { _id: 0, name: 1, price: 1 }).sort({ price: -1 })',
        output: '[\n  { name: "USB-C Hub", price: 45.00 },\n  { name: "Mouse Pad", price: 19.99 },\n  { name: "Cable Organizer", price: 9.99 }\n]',
        explain: '$lte 匹配 price ≤ 50 的所有文档。配合 .sort({ price: -1 }) 可以从高到低排列。如果有 price 索引，$lte 查询会使用索引的范围扫描（indexBounds 中显示 [-inf.0, 50.0]）。'
      },
      {
        title: '$gte + $lte 构建闭区间',
        cmd: 'db.orders.find({ total: { $gte: 100, $lte: 500 } }, { _id: 0, orderId: 1, total: 1 }).sort({ total: 1 })',
        output: '[\n  { orderId: "ORD-101", total: 150.00 },\n  { orderId: "ORD-205", total: 299.99 },\n  { orderId: "ORD-312", total: 450.00 }\n]',
        explain: '$gte + $lte 构建 [100, 500] 闭区间。如果需要半开区间 [100, 500)，改用 $gte + $lt。实际开发中半开区间更常见（避免边界重复），比如按天查询时用 $gte: "2024-03-15" + $lt: "2024-03-16"。'
      },
      {
        title: '$lte 在日期和嵌套字段中的使用',
        cmd: 'db.sessions.find({ lastActive: { $lte: new Date("2024-03-01") } }, { _id: 0, userId: 1, lastActive: 1 });\ndb.products.find({ "specs.weight": { $lte: 500 } }, { _id: 0, name: 1, "specs.weight": 1 })',
        output: '// 第一个查询（过期会话）：\n[{ userId: "u001", lastActive: ISODate("2024-02-15T...") }, { userId: "u007", lastActive: ISODate("2024-01-20T...") }]\n// 第二个查询（轻量产品）：\n[{ name: "Wireless Mouse", specs: { weight: 85 } }, { name: "USB Drive", specs: { weight: 15 } }]',
        explain: '$lte 适用于所有可比较的 BSON 类型：数字、日期、字符串（字典序）。嵌套字段用点号语法访问。日期比较中 $lte 常用于"在某个时间之前"的场景。'
      }
    ],
    diagnosis: [
      {
        symptom: '{ price: { $lte: 50 } } 返回了 price 为字符串 "45" 的文档，或者没有返回 price 为 50 的文档',
        cause: 'BSON 类型排序规则中，字符串和数字不是直接比较的。在 BSON 排序中，所有数字 < 所有字符串。所以数字 50 小于字符串 "45"。如果字段混合了数字和字符串类型，范围查询的结果可能不符合预期。',
        fix: '确保字段类型一致。用 $type 检查：db.products.find({ price: { $type: "string" } })。然后统一为数字：db.products.updateMany({ price: { $type: "string" } }, [{ $set: { price: { $toDouble: "$price" } } }])。'
      },
      {
        symptom: '$lte 查询在大数据集上很慢，explain() 显示 COLLSCAN 而非 IXSCAN',
        cause: '查询字段没有索引。$lte 范围查询在无索引时需要全集合扫描。即使有索引，如果范围过大（覆盖大部分数据），优化器也可能选择全表扫描。',
        fix: '创建索引：db.products.createIndex({ price: 1 })。如果范围查询是高频操作，考虑复合索引把等值条件字段放前面：db.products.createIndex({ category: 1, price: 1 })。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查询 orders 集合中 2024 年 2 月份（包含边界）的所有订单，按日期升序排列。使用 $gte 和 $lte 构建日期范围。',
        hint: '2 月范围是 2024-02-01 到 2024-02-29（2024 是闰年）。注意 $lte 需要包含 2 月 29 日的最后一刻。',
        answer: 'db.orders.find({\n  orderDate: {\n    $gte: ISODate("2024-02-01T00:00:00Z"),\n    $lte: ISODate("2024-02-29T23:59:59.999Z")\n  }\n}, { _id: 0, orderId: 1, orderDate: 1, total: 1 }).sort({ orderDate: 1 });\n\n// 更推荐用 $lt 构建半开区间（避免边界问题）：\ndb.orders.find({\n  orderDate: {\n    $gte: ISODate("2024-02-01"),\n    $lt: ISODate("2024-03-01")\n  }\n}).sort({ orderDate: 1 });'
      },
      {
        level: '进阶',
        task: '在 products 集合上设计一个复合索引来优化查询 { category: "electronics", price: { $lte: 100 } }。解释为什么索引字段顺序很重要。',
        hint: '复合索引中等值条件字段应放在范围条件字段前面。',
        answer: '// 创建复合索引\ndb.products.createIndex({ category: 1, price: 1 });\n\n// 为什么 category 在前：\n// 索引结构是 B-Tree，先按 category 排序，再按 price 排序。\n// 查询 { category: "electronics", price: { $lte: 100 } } 的索引扫描：\n//   1. 先定位到 category = "electronics" 的索引区间\n//   2. 在该区间内扫描 price ≤ 100 的条目\n//   indexBounds: { category: ["electronics", "electronics"], price: [-inf.0, 100.0] }\n//   → 精确扫描，只检查相关条目\n\n// 如果索引顺序反过来 { price: 1, category: 1 }：\n//   indexBounds: { price: [-inf.0, 100.0], category: ["electronics", "electronics"] }\n//   → 先扫描所有 price ≤ 100 的条目（跨所有 category），再过滤 category\n//   → 扫描范围更大，效率更低\n\n// 规则：等值条件放前面，范围条件放后面。'
      }
    ]
  },

  'Wd20OKQYYuW_bT6U-yRxT': {
    // $in 在集合中
    mentalModel: '$in 是 MongoDB 的"批量等值匹配器"——它将一个字段的值与一组候选值比较，只要匹配其中任何一个就命中，就像在菜单上勾选多个选项，任何被勾选的都能通过。',
    handsOn: [
      {
        title: '基本 $in 查询',
        cmd: 'db.products.find({ category: { $in: ["electronics", "books", "toys"] } }, { _id: 0, name: 1, category: 1 })',
        output: '[\n  { name: "Wireless Mouse", category: "electronics" },\n  { name: "Clean Code", category: "books" },\n  { name: "USB Hub", category: "electronics" },\n  { name: "Lego Set", category: "toys" }\n]',
        explain: '$in 等价于多个 $eq 的 OR 组合：{ category: "electronics" } OR { category: "books" } OR { category: "toys" }。如果有 category 索引，$in 会为每个值做一次索引查找然后合并结果。'
      },
      {
        title: '$in 与数组字段的交互',
        cmd: 'db.products.find({ tags: { $in: ["sale", "new"] } }, { _id: 0, name: 1, tags: 1 })',
        output: '[\n  { name: "Headphones", tags: ["audio", "sale"] },\n  { name: "Smart Watch", tags: ["wearable", "new", "sale"] },\n  { name: "Phone Case", tags: ["accessory", "new"] }\n]',
        explain: '当目标字段是数组时，$in 检查数组中是否有任何元素在候选列表中。例如 tags 包含 "sale" 或 "new" 的文档都会匹配。这比用 $or + 多个 $elemMatch 更简洁。'
      },
      {
        title: '$in 与正则表达式组合',
        cmd: 'db.users.find({ email: { $in: [/^admin/, /@gmail\\.com$/] } }, { _id: 0, name: 1, email: 1 })',
        output: '[\n  { name: "Admin User", email: "admin@company.com" },\n  { name: "John", email: "john@gmail.com" },\n  { name: "Admin Bot", email: "admin-bot@company.com" }\n]',
        explain: '$in 数组中可以混合精确值和正则表达式。匹配以 "admin" 开头的邮箱或以 "@gmail.com" 结尾的邮箱。注意：正则表达式在 $in 中无法使用索引（除非是前缀正则 /^prefix/）。'
      },
      {
        title: '$in 在 ObjectId 和数字类型中的使用',
        cmd: 'db.orders.find({ _id: { $in: [ObjectId("65f1a2b3c4d5e6f7a8b9c0d1"), ObjectId("65f1a2b3c4d5e6f7a8b9c0d2")] } }, { _id: 1, orderId: 1, total: 1 })',
        output: '[\n  { _id: ObjectId("65f1a2b3c4d5e6f7a8b9c0d1"), orderId: "ORD-001", total: 99.99 },\n  { _id: ObjectId("65f1a2b3c4d5e6f7a8b9c0d2"), orderId: "ORD-002", total: 149.50 }\n]',
        explain: '$in 常用于按 _id 批量查询文档。ObjectId 必须用 ObjectId() 构造，不能直接传字符串。这是批量获取已知 ID 文档的最高效方式（利用 _id 索引）。'
      }
    ],
    diagnosis: [
      {
        symptom: '$in 查询包含 10000 个值时性能很差，远慢于 100 个值的查询',
        cause: '$in 数组过大时，每个值都需要索引查找（或全表扫描中的逐个比较）。MongoDB 对 $in 数组大小没有硬性限制，但超过数千个值时性能线性下降。此外大数组会增加查询解析和优化的开销。',
        fix: '1. 将大列表存入临时集合，用 $lookup 代替 $in。2. 如果值是连续的，用 $gte/$lte 范围查询。3. 分批查询（每批 1000 个），在应用层合并结果。4. 预计算：将 $in 的匹配结果物化为一个标记字段。'
      },
      {
        symptom: '{ status: { $in: ["active"] } } 和 { status: "active" } 返回不同结果',
        cause: '通常不会发生——两者在语义上完全等价。如果结果不同，检查是否有拼写差异、类型不匹配（如 "active" vs NumberInt(1)），或查询条件被意外嵌套。',
        fix: '用 .explain() 对比两个查询的执行计划，确认 indexBounds 和 nReturned 是否一致。检查查询文档的 JSON 结构是否正确。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 $in 查询 employees 集合中 department 属于 "Engineering"、"Design" 或 "Product" 的所有员工，按 department 排序。',
        hint: '使用 { department: { $in: ["Engineering", "Design", "Product"] } } 作为查询条件。',
        answer: 'db.employees.find(\n  { department: { $in: ["Engineering", "Design", "Product"] } },\n  { _id: 0, name: 1, department: 1, title: 1 }\n).sort({ department: 1, name: 1 });'
      },
      {
        level: '进阶',
        task: '比较 { status: { $in: ["A", "B", "C"] } } 和 { $or: [{ status: "A" }, { status: "B" }, { status: "C" }] } 的执行计划差异。哪种写法更优？为什么？',
        hint: '分别用 .explain("executionStats") 查看两个查询的执行计划，比较 indexBounds 和 executionTimeMillis。',
        answer: 'db.collection.createIndex({ status: 1 });\n\n// $in 的执行计划\nlet plan1 = db.collection.find({ status: { $in: ["A", "B", "C"] } }).explain("executionStats");\n// indexBounds: { status: ["A", "A"], ["B", "B"], ["C", "C"] }\n// 使用一次索引扫描，三个范围区间\n\n// $or 的执行计划\nlet plan2 = db.collection.find({ $or: [{ status: "A" }, { status: "B" }, { status: "C" }] }).explain("executionStats");\n// 可能使用 $or 优化器：每个分支独立索引扫描然后合并\n// 或者被优化为等价于 $in\n\n// 结论：$in 更优\n// 1. $in 是单一查询条件，优化器处理更简单\n// 2. $or 每个分支可能独立评估，开销更大\n// 3. $in 生成的索引边界更紧凑\n// 4. 代码更简洁，可读性更好\n// 推荐：当 $or 的所有分支都是同一字段的等值比较时，始终用 $in 替代。'
      }
    ]
  },

  'TJHVY8DRWbDKeT_pIPJay': {
    // $elemMatch
    mentalModel: '$elemMatch 是数组查询的"多条件约束器"——它要求数组中至少有一个元素同时满足所有条件，而不是让不同元素分别满足各条件，就像招聘要求"同一段工作经历中既有管理经验又有技术背景"。',
    handsOn: [
      {
        title: '$elemMatch 解决的核心问题',
        cmd: '// 数据：\ndb.students.insertMany([\n  { name: "Alice", scores: [{ subject: "math", score: 90 }, { subject: "english", score: 60 }] },\n  { name: "Bob", scores: [{ subject: "math", score: 70 }, { subject: "english", score: 85 }] },\n  { name: "Charlie", scores: [{ subject: "math", score: 95 }, { subject: "english", score: 92 }] }\n]);\n\n// 找出有科目成绩 >= 90 且 subject 是 "math" 的学生\ndb.students.find(\n  { scores: { $elemMatch: { subject: "math", score: { $gte: 90 } } } },\n  { _id: 0, name: 1, scores: 1 }\n)',
        output: '[\n  { name: "Alice", scores: [{ subject: "math", score: 90 }, { subject: "english", score: 60 }] },\n  { name: "Charlie", scores: [{ subject: "math", score: 95 }, { subject: "english", score: 92 }] }\n]',
        explain: '$elemMatch 要求同一个数组元素同时满足 subject: "math" AND score >= 90。Alice 的 math 成绩 90 满足，Bob 的 math 成绩 70 不满足。不用 $elemMatch 的话，{ "scores.subject": "math", "scores.score": { $gte: 90 } } 可能误匹配——Bob 有 math 科目（score 70）且有 score >= 90（english 92），会被错误匹配。'
      },
      {
        title: '不用 $elemMatch 的陷阱',
        cmd: '// 错误：不用 $elemMatch\ndb.students.find(\n  { "scores.subject": "math", "scores.score": { $gte: 90 } },\n  { _id: 0, name: 1 }\n)\n\n// 正确：使用 $elemMatch\ndb.students.find(\n  { scores: { $elemMatch: { subject: "math", score: { $gte: 90 } } } },\n  { _id: 0, name: 1 }\n)',
        output: '// 不用 $elemMatch 的结果（多匹配了 Bob）：\n[{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]\n\n// 用 $elemMatch 的正确结果：\n[{ name: "Alice" }, { name: "Charlie" }]',
        explain: '不用 $elemMatch 时，两个条件分别匹配数组中的任意元素。Bob 的 scores 数组中有一个元素 subject 是 "math"（score 70），另一个元素 score >= 90（english 92），所以被误匹配。$elemMatch 强制要求同一个元素同时满足所有条件。'
      },
      {
        title: '$elemMatch 与投影的配合',
        cmd: 'db.students.find(\n  { name: "Charlie" },\n  { _id: 0, name: 1, scores: { $elemMatch: { score: { $gte: 90 } } } }\n)',
        output: '[ { name: "Charlie", scores: [ { subject: "math", score: 95 } ] } ]',
        explain: '$elemMatch 在投影中（第二个参数）的作用不同：它只返回数组中第一个匹配条件的元素。Charlie 有 math 95 和 english 92 两个 >= 90 的成绩，但投影只返回第一个匹配的。如果需要所有匹配元素，用聚合管道的 $filter。'
      }
    ],
    diagnosis: [
      {
        symptom: '数组查询返回了"看起来不对"的结果——某些文档的数组元素并不完全满足条件',
        cause: '没有使用 $elemMatch，多个条件分别匹配数组中的不同元素。例如 { "tags.color": "red", "tags.size": "large" } 可能匹配一个有红色小号和一个有大号蓝色的文档。',
        fix: '将多个条件包裹在 $elemMatch 中：{ tags: { $elemMatch: { color: "red", size: "large" } } }。这确保同一个数组元素同时满足所有条件。'
      },
      {
        symptom: '$elemMatch 查询无法使用索引，explain() 显示 COLLSCAN',
        cause: '$elemMatch 内的条件字段没有合适的索引。对于嵌套文档数组，需要在数组内的字段上创建索引（不是数组字段本身）。',
        fix: '创建索引：db.students.createIndex({ "scores.subject": 1, "scores.score": 1 })。复合索引可以加速 $elemMatch 中的多条件匹配。注意 $elemMatch 只能利用索引的前缀字段做精确匹配。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '在 orders 集合中，items 是嵌套文档数组 [{ product: "...", qty: N, price: N }]。找出至少有一件商品数量 >= 5 且单价 <= 20 的订单。',
        hint: '使用 $elemMatch 同时约束 qty 和 price 条件。',
        answer: 'db.orders.find(\n  { items: { $elemMatch: { qty: { $gte: 5 }, price: { $lte: 20 } } } },\n  { _id: 0, orderId: 1, items: 1 }\n);\n// 只匹配同一件商品同时满足 qty >= 5 AND price <= 20 的订单。\n// 如果一件商品 qty=10 但 price=50，另一件 qty=2 但 price=10，该订单不会被匹配。'
      },
      {
        level: '进阶',
        task: '解释 $elemMatch 在查询条件中和在投影中的行为差异，并给出各自的示例。',
        hint: '查询中的 $elemMatch 过滤文档（是否包含匹配元素），投影中的 $elemMatch 过滤数组元素（返回第一个匹配元素）。',
        answer: '// 查询条件中的 $elemMatch：过滤文档\ndb.students.find({\n  scores: { $elemMatch: { subject: "math", score: { $gte: 90 } } }\n});\n// 返回至少有一个 math 成绩 >= 90 的文档\n// 返回的文档包含完整的 scores 数组\n\n// 投影中的 $elemMatch：过滤数组元素\ndb.students.find(\n  { name: "Alice" },\n  { scores: { $elemMatch: { score: { $gte: 80 } } } }\n);\n// 返回 Alice 文档，但 scores 数组只包含第一个 score >= 80 的元素\n// 限制：只能返回一个元素，不能返回所有匹配元素\n\n// 如果需要返回所有匹配元素，用聚合 $filter：\ndb.students.aggregate([\n  { $match: { name: "Alice" } },\n  { $project: {\n    name: 1,\n    highScores: { $filter: {\n      input: "$scores",\n      as: "s",\n      cond: { $gte: ["$$s.score", 80] }\n    }}\n  }}\n]);'
      }
    ]
  },

  'qaUj9916Fh4BtiLz_pwQs': {
    // $not 操作符
    mentalModel: '$not 是 MongoDB 查询的"逻辑反转器"——它否定紧跟其后的操作符表达式的结果，但不等同于"不等于"，因为 $not 还会匹配字段不存在的文档，就像说"不是红色"包括蓝色、绿色和没有颜色的东西。',
    handsOn: [
      {
        title: '$not 否定比较操作符',
        cmd: 'db.products.find({ price: { $not: { $gt: 100 } } }, { _id: 0, name: 1, price: 1 })',
        output: '[\n  { name: "Mouse Pad", price: 19.99 },\n  { name: "USB Cable", price: 9.99 },\n  { name: "Screen Protector", price: 5.99 },\n  { name: "No Price Item" }\n]',
        explain: '$not: { $gt: 100 } 等价于"price 不大于 100"，即 price <= 100 或 price 不存在。注意输出中包含了没有 price 字段的文档——这是 $not 的关键特性：它匹配字段不存在的情况。'
      },
      {
        title: '$not 否定正则表达式',
        cmd: 'db.users.find({ email: { $not: /@gmail\\.com$/ } }, { _id: 0, name: 1, email: 1 })',
        output: '[\n  { name: "Alice", email: "alice@company.com" },\n  { name: "Bob", email: "bob@yahoo.com" },\n  { name: "Charlie" }\n]',
        explain: '$not 可以直接否定正则表达式，匹配 email 不以 "@gmail.com" 结尾的文档。注意：Charlie 没有 email 字段也被匹配了。如果需要排除字段不存在的情况，添加 { email: { $exists: true, $not: /@gmail\\.com$/ } }。'
      },
      {
        title: '$not 与 $ne 的区别',
        cmd: '// 使用 $ne（不等于）\ndb.products.find({ status: { $ne: "discontinued" } }, { _id: 0, name: 1, status: 1 })\n\n// 使用 $not + $eq\ndb.products.find({ status: { $not: { $eq: "discontinued" } } }, { _id: 0, name: 1, status: 1 })',
        output: '// 两者结果相同：\n[\n  { name: "Wireless Mouse", status: "active" },\n  { name: "Old Keyboard", status: "archived" },\n  { name: "Mystery Item" }\n]',
        explain: '$ne 和 $not: { $eq: ... } 语义相同，都匹配"值不等于 X 或字段不存在"的文档。$not 的语法更冗长但更通用——它可以否定任何操作符（$gt, $lt, $regex, $in 等），而 $ne 只能做等值否定。'
      },
      {
        title: '$not 否定 $in 和 $regex',
        cmd: 'db.products.find({ category: { $not: { $in: ["electronics", "books"] } } }, { _id: 0, name: 1, category: 1 })',
        output: '[\n  { name: "Yoga Mat", category: "sports" },\n  { name: "Coffee Mug", category: "kitchen" },\n  { name: "Unknown Item" }\n]',
        explain: '$not: { $in: [...] } 等价于 $nin。匹配 category 不在 ["electronics", "books"] 中的文档，包括 category 不存在的文档。实际开发中更常用 $nin 代替 $not + $in，两者行为相同但 $nin 更简洁。'
      }
    ],
    diagnosis: [
      {
        symptom: '使用 $not 查询后发现结果比预期多——包含了一些字段不存在的文档',
        cause: '$not 的语义是"不满足条件"，而字段不存在的文档自然也不满足条件（因为字段没有值可以被比较）。所以 $not 总是匹配字段不存在的文档。',
        fix: '如果需要排除字段不存在的情况，添加 $exists: true：{ price: { $exists: true, $not: { $gt: 100 } } }。或者使用 $lte 代替 $not + $gt（如果业务逻辑允许）。'
      },
      {
        symptom: '{ field: { $not: "value" } } 报错 "unknown operator: $not"',
        cause: '$not 必须否定一个操作符表达式，不能直接否定一个值。正确语法是 { field: { $not: { $eq: "value" } } } 或简写为 { field: { $ne: "value" } }。',
        fix: '将值包裹在操作符中：{ field: { $not: { $eq: "value" } } }。对于正则表达式，可以直接否定：{ field: { $not: /pattern/ } }（这是 $not 唯一可以直接否定非操作符表达式的情况）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '查询 products 集合中价格不大于 50 且状态不是 "discontinued" 的所有产品。使用 $not 操作符实现，然后改写为不使用 $not 的等价查询。',
        hint: '$not: { $gt: 50 } 等价于 $lte: 50（但不完全等价，因为 $not 还匹配字段不存在的文档）。',
        answer: '// 使用 $not：\ndb.products.find({\n  price: { $not: { $gt: 50 } },\n  status: { $not: { $eq: "discontinued" } }\n}, { _id: 0, name: 1, price: 1, status: 1 });\n\n// 等价的不使用 $not 的查询（排除字段不存在的文档）：\ndb.products.find({\n  price: { $exists: true, $lte: 50 },\n  status: { $ne: "discontinued", $exists: true }\n}, { _id: 0, name: 1, price: 1, status: 1 });\n\n// 注意：$not 版本会匹配字段不存在的文档，$lte/$ne 版本不会。\n// 如果业务要求字段必须存在，后者更准确。'
      },
      {
        level: '进阶',
        task: '列出 $not、$ne、$nin 三者的关系，并证明 $nin 等价于 $not + $in。',
        hint: '通过构造测试数据，分别用三种方式查询并比较结果。',
        answer: '// 关系：\n// $ne = $not + $eq 的简写\n// $nin = $not + $in 的简写\n// $not 是通用的否定操作符，$ne 和 $nin 是特定场景的简写\n\ndb.test_not.drop();\ndb.test_not.insertMany([\n  { name: "A", status: "active" },\n  { name: "B", status: "pending" },\n  { name: "C", status: "closed" },\n  { name: "D" }  // 没有 status 字段\n]);\n\n// 方式 1：$not + $in\nlet r1 = db.test_not.find({ status: { $not: { $in: ["active", "pending"] } } }, { _id: 0, name: 1 }).toArray();\n// [{ name: "C" }, { name: "D" }]\n\n// 方式 2：$nin\nlet r2 = db.test_not.find({ status: { $nin: ["active", "pending"] } }, { _id: 0, name: 1 }).toArray();\n// [{ name: "C" }, { name: "D" }]\n\n// 结论：r1 和 r2 完全相同，$nin 是 $not + $in 的语法糖。'
      }
    ]
  },

  'kG0ZeGatgvC1azZKMQiA_': {
    // 查询优化(2)
    mentalModel: '查询优化是 MongoDB 性能调优的"手术刀"——通过分析执行计划、优化索引策略和调整查询结构，将慢查询从秒级降到毫秒级，就像给汽车换更好的引擎和调整齿轮比。',
    handsOn: [
      {
        title: '分析慢查询的执行计划',
        cmd: 'db.orders.find({ status: "shipped", total: { $gte: 100 } }).sort({ orderDate: -1 }).explain("executionStats")',
        output: '{\n  queryPlanner: {\n    winningPlan: {\n      stage: "FETCH",\n      inputStage: { stage: "IXSCAN", indexName: "status_1_total_1", ... }\n    }\n  },\n  executionStats: {\n    executionTimeMillis: 245,\n    totalDocsExamined: 50000,\n    totalKeysExamined: 50000,\n    nReturned: 1200\n  }\n}',
        explain: '关键指标：totalDocsExamined/nReturned 比率接近 1 时效率最高（这里 50000/1200 ≈ 42:1，说明扫描了大量不需要的文档）。需要创建更优的索引来减少扫描量。'
      },
      {
        title: 'ESR 规则优化索引',
        cmd: '// ESR 规则：Equality → Sort → Range\n// 当前索引（不够优）：\ndb.orders.getIndexes()\n// [{ v: 2, key: { status: 1, total: 1 }, name: "status_1_total_1" }]\n\n// 优化索引（加入 sort 字段）：\ndb.orders.createIndex({ status: 1, orderDate: -1, total: 1 })\n\n// 重新执行查询：\ndb.orders.find({ status: "shipped", total: { $gte: 100 } }).sort({ orderDate: -1 }).explain("executionStats")',
        output: '{\n  executionStats: {\n    executionTimeMillis: 12,\n    totalDocsExamined: 1200,\n    totalKeysExamined: 1200,\n    nReturned: 1200\n  }\n}',
        explain: 'ESR 规则：等值条件（status）放最前，排序字段（orderDate）放中间，范围条件（total）放最后。优化后 totalDocsExamined = nReturned（比率 1:1），查询从 245ms 降到 12ms。排序字段放在范围字段前是因为范围条件后的字段无法用于排序。'
      },
      {
        title: '使用 hint() 和 profile 分析',
        cmd: '// 强制使用特定索引：\ndb.orders.find({ status: "shipped" }).hint("status_1_orderDate_-1_total_1").explain("executionStats")\n\n// 开启数据库 profiling 记录慢查询：\ndb.setProfilingLevel(1, { slowms: 100 })\n\n// 查看最近的慢查询：\ndb.system.profile.find().sort({ ts: -1 }).limit(5).pretty()',
        output: '// system.profile 输出：\n{\n  op: "query",\n  ns: "myapp.orders",\n  command: { find: "orders", filter: { status: "shipped" } },\n  millis: 350,\n  planSummary: "IXSCAN { status: 1, total: 1 }",\n  ts: ISODate("2024-03-15T14:30:00Z")\n}',
        explain: 'hint() 强制使用指定索引，用于测试不同索引的性能。profiling 级别：0=关闭，1=记录慢查询（>slowms），2=记录所有操作。生产环境建议级别 1，slowms 设为 100ms。'
      }
    ],
    diagnosis: [
      {
        symptom: '某个查询在测试环境很快（< 10ms），但在生产环境很慢（> 5s）',
        cause: '数据量差异导致查询优化器选择了不同的执行计划。测试环境数据少，COLLSCAN 也很快；生产环境数据多，优化器可能因为统计信息过时而选择了次优索引。',
        fix: '1. 在生产环境用 explain() 对比实际执行计划。2. 运行 db.collection.reIndex() 或 db.collection.validate() 更新统计信息。3. 如果优化器持续选择错误索引，使用 hint() 强制指定最优索引。4. 考虑添加复合索引覆盖生产环境的查询模式。'
      },
      {
        symptom: 'explain() 显示 PROJECTION_COVERED 但查询仍然慢',
        cause: '虽然查询被索引覆盖（不需要回表），但如果索引本身很大（高基数字段、长字符串），索引扫描仍然耗时。此外网络传输大量结果也会增加延迟。',
        fix: '1. 用 .limit() 限制返回结果数量。2. 检查索引键大小（长字符串索引键效率低，考虑哈希索引）。3. 用投影只返回需要的字段。4. 检查网络延迟（mongosh 到服务器的往返时间）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '对查询 db.logs.find({ level: "error", service: "api" }).sort({ timestamp: -1 }).limit(20) 设计最优索引，并解释 ESR 规则的应用。',
        hint: '等值条件：level + service，排序字段：timestamp，无范围条件。',
        answer: '// 最优索引：\ndb.logs.createIndex({ level: 1, service: 1, timestamp: -1 });\n\n// ESR 规则应用：\n// E (Equality)：level = "error" 和 service = "api" 是等值条件，放最前\n//    两个字段的顺序不影响性能（都是等值匹配）\n// S (Sort)：timestamp 是排序字段，放中间\n// R (Range)：无范围条件\n//\n// 执行计划：\n// indexBounds: {\n//   level: ["error", "error"],\n//   service: ["api", "api"],\n//   timestamp: [MaxKey, MinKey]  // 降序扫描\n// }\n// totalDocsExamined = 20（因为 limit(20) 且索引已排序）\n// 无需内存排序（SORT 阶段被消除）'
      },
      {
        level: '进阶',
        task: '分析以下查询的索引选择问题：db.events.find({ type: { $in: ["click", "view", "scroll"] }, ts: { $gte: ISODate("2024-03-01") } }).sort({ ts: -1 })。有两个可用索引：{ type: 1, ts: 1 } 和 { ts: -1 }，哪个更优？',
        hint: '考虑 $in 在复合索引中的行为，以及排序是否可以被索引消除。',
        answer: '// 分析：\n\n// 索引 1：{ type: 1, ts: 1 }\n// $in 会展开为 3 个子查询：\n//   type="click" + ts >= "2024-03-01"\n//   type="view" + ts >= "2024-03-01"\n//   type="scroll" + ts >= "2024-03-01"\n// 每个子查询使用索引，但合并后需要内存排序（因为 ts 方向不一致）\n// 执行计划：IXSCAN × 3 → MERGE → SORT → LIMIT\n\n// 索引 2：{ ts: -1 }\n// 直接使用 ts 索引降序扫描，过滤 type\n// 执行计划：IXSCAN → FETCH（过滤 type）→ LIMIT\n// 排序被索引消除，但可能扫描大量不符合 type 条件的文档\n\n// 哪个更优取决于数据分布：\n// - 如果 type 选择性高（click/view/scroll 只占 5%）：索引 1 更优\n// - 如果 type 选择性低（占 80%）：索引 2 更优\n// - 如果 ts 范围很小（最近 1 天）：索引 2 更优\n\n// 最佳方案：创建 { type: 1, ts: -1 }（注意 ts 降序）\ndb.events.createIndex({ type: 1, ts: -1 });\n// 这样每个 $in 子查询都能利用索引排序，消除内存排序。'
      }
    ]
  },

  'dO2mJejkWBH903LG0dWgN': {
    // $project 投影(2)
    mentalModel: '$project 是聚合管道的"数据雕塑刀"——它精确控制输出文档的形状：保留、排除、重命名、计算新字段，就像雕塑家去掉多余的石头、留下需要的形状。',
    handsOn: [
      {
        title: '字段重命名与嵌套展开',
        cmd: 'db.orders.aggregate([\n  { $project: {\n    _id: 0,\n    orderId: "$orderNumber",\n    customerName: "$customer.name",\n    items: 1,\n    totalUSD: { $multiply: ["$total", 1.0] }\n  }}\n])',
        output: '[\n  {\n    orderId: "ORD-2024-001",\n    customerName: "Alice Chen",\n    items: [{ product: "Mouse", qty: 2 }],\n    totalUSD: 59.98\n  }\n]',
        explain: '$project 中的 "$fieldName" 引用原文档字段值，可实现重命名（orderId: "$orderNumber"）和嵌套字段提升（customerName: "$customer.name"）。_id: 0 排除 _id 字段（默认包含）。'
      },
      {
        title: '计算新字段与条件表达式',
        cmd: 'db.products.aggregate([\n  { $project: {\n    _id: 0,\n    name: 1,\n    price: 1,\n    discount: { $cond: {\n      if: { $gte: ["$price", 100] },\n      then: 0.15,\n      else: 0.05\n    }},\n    finalPrice: { $round: [{ $multiply: [\n      "$price",\n      { $cond: { if: { $gte: ["$price", 100] }, then: 0.85, else: 0.95 } }\n    ]}, 2] },\n    priceRange: { $switch: {\n      branches: [\n        { case: { $lt: ["$price", 20] }, then: "budget" },\n        { case: { $lt: ["$price", 100] }, then: "mid" }\n      ],\n      default: "premium"\n    }}\n  }}\n])',
        output: '[\n  { name: "Mouse Pad", price: 19.99, discount: 0.05, finalPrice: 18.99, priceRange: "budget" },\n  { name: "Keyboard", price: 89.99, discount: 0.05, finalPrice: 85.49, priceRange: "mid" },\n  { name: "Monitor", price: 399.00, discount: 0.15, finalPrice: 339.15, priceRange: "premium" }\n]',
        explain: '$cond 是三元条件表达式（if/then/else），$switch 是多分支条件。$multiply 和 $round 是数学表达式。这些表达式在 $project 中计算新字段，不需要额外的 $addFields 阶段。'
      },
      {
        title: '数组操作与子文档重组',
        cmd: 'db.students.aggregate([\n  { $project: {\n    _id: 0,\n    name: 1,\n    avgScore: { $round: [{ $avg: "$scores.score" }, 1] },\n    topScores: { $filter: {\n      input: "$scores",\n      as: "s",\n      cond: { $gte: ["$$s.score", 90] }\n    }},\n    scoreCount: { $size: "$scores" },\n    firstSubject: { $arrayElemAt: ["$scores.subject", 0] }\n  }}\n])',
        output: '[\n  {\n    name: "Alice",\n    avgScore: 85.5,\n    topScores: [{ subject: "math", score: 95 }],\n    scoreCount: 3,\n    firstSubject: "math"\n  }\n]',
        explain: '$avg 计算数组平均值，$filter 过滤数组元素，$size 获取数组长度，$arrayElemAt 获取指定索引的元素。$$s 是 $filter 的变量引用（双 $ 号），$scores.score 是路径表达式（提取数组中所有元素的 score 字段）。'
      }
    ],
    diagnosis: [
      {
        symptom: '$project 后文档中某些字段消失了，但预期是保留它们',
        cause: '$project 是排他性的：一旦指定了要包含的字段（除 _id 外），所有未指定的字段都被排除。{ name: 1 } 只保留 name 和 _id，其他字段全部丢失。',
        fix: '1. 显式列出所有需要保留的字段。2. 如果只是添加/修改少量字段，用 $addFields 代替 $project（$addFields 保留所有原字段）。3. 用 $unset 排除特定字段（保留其余所有字段）。'
      },
      {
        symptom: '$project 中引用嵌套字段 "$a.b.c" 返回 null，但文档中确实存在该路径',
        cause: '如果路径中某个中间字段是数组，路径表达式会返回数组而不是单个值。例如 "scores.subject" 当 scores 是数组时返回 ["math", "english"]，而不是报错。如果数组为空或中间字段类型不对，可能返回 null。',
        fix: '用 $let 或 $map 处理数组中的嵌套字段：{ $map: { input: "$scores", as: "s", in: "$$s.subject" } }。如果中间字段可能是数组也可能是对象，用 $cond + $isArray 检查类型。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '用 $project 将 orders 集合的文档转换：重命名 orderNumber 为 id，提升 customer.email 为顶层 email 字段，计算 tax（total 的 8%），排除原始字段。',
        hint: '使用 "$fieldName" 语法引用原字段，用 $multiply 计算 tax，_id: 0 排除 _id。',
        answer: 'db.orders.aggregate([\n  { $project: {\n    _id: 0,\n    id: "$orderNumber",\n    email: "$customer.email",\n    total: 1,\n    tax: { $round: [{ $multiply: ["$total", 0.08] }, 2] }\n  }}\n]);\n// 输出示例：\n// { id: "ORD-001", email: "alice@example.com", total: 99.99, tax: 8.00 }'
      },
      {
        level: '进阶',
        task: '比较 $project、$addFields 和 $unset 三个阶段的区别，并说明各自最适合的使用场景。',
        hint: '考虑它们对原文档字段的处理方式：全部替换 vs 追加 vs 删除。',
        answer: '// $project：完全重塑文档\n// 行为：只保留显式指定的字段 + _id，其余全部排除\n// 适合：大幅精简文档，只保留少量字段\n{ $project: { name: 1, price: 1, _id: 0 } }\n\n// $addFields：在原文档上追加字段\n// 行为：保留所有原字段，添加/覆盖指定字段\n// 适合：计算派生字段而不丢失原数据\n{ $addFields: { discount: { $multiply: ["$price", 0.1] } } }\n\n// $unset：删除指定字段\n// 行为：保留所有原字段，只删除指定的字段\n// 适合：移除敏感或冗余字段\n{ $unset: ["password", "internalNotes"] }\n\n// 推荐用法：\n// - 需要 90% 的字段 → 用 $unset 排除 10%\n// - 需要 10% 的字段 → 用 $project 包含 10%\n// - 需要全部字段 + 新字段 → 用 $addFields'
      }
    ]
  },

  'JAosQ9tFj7y70lGQ0vHzC': {
    // Kafka 集成
    mentalModel: 'MongoDB + Kafka 是"数据库 + 消息总线"的经典组合——MongoDB 负责持久存储和查询，Kafka 负责事件流传输和系统解耦，两者通过 Connector 桥接，就像仓库（MongoDB）和物流网络（Kafka）通过装卸平台（Connector）连接。',
    sections: [
      {
        title: 'MongoDB Kafka Connector 架构',
        content: 'MongoDB Kafka Connector 是官方提供的 Kafka Connect 插件，支持两个方向：\n\nSource Connector（MongoDB → Kafka）：\n- 基于 Change Streams 捕获 MongoDB 的数据变更\n- 将变更事件写入 Kafka Topic\n- 支持过滤、转换、投影\n\nSink Connector（Kafka → MongoDB）：\n- 从 Kafka Topic 读取消息\n- 写入 MongoDB 集合\n- 支持 upsert、批量写入、死信队列\n\n部署架构：\n  MongoDB ──[Change Streams]──> Source Connector ──> Kafka Topic\n  Kafka Topic ──> Sink Connector ──> MongoDB\n\nConnector 配置（Source 示例）：\n{\n  "name": "mongo-source",\n  "config": {\n    "connector.class": "com.mongodb.kafka.connect.MongoSourceConnector",\n    "connection.uri": "mongodb://mongo1:27017,mongo2:27017/?replicaSet=rs0",\n    "database": "myapp",\n    "collection": "orders",\n    "topic.prefix": "mongo",\n    "pipeline": "[{\\"$match\\": {\\"operationType\\": {\\"$in\\": [\\"insert\\",\\"update\\"]}}}]",\n    "publish.full.document.only": true\n  }\n}'
      },
      {
        title: 'Change Streams 作为 Kafka Source',
        content: 'Source Connector 依赖 MongoDB Change Streams（需要副本集）：\n\n工作原理：\n1. Connector 在 MongoDB 上打开 Change Stream\n2. 每个数据变更（insert/update/delete）生成一个事件\n3. 事件包含 _id（resume token）、operationType、fullDocument\n4. Connector 将事件序列化为 JSON 写入 Kafka\n\n事件格式示例：\n{\n  "_id": { "_data": "82604A..." },\n  "operationType": "insert",\n  "clusterTime": { "$timestamp": { "t": 1710498600, "i": 1 } },\n  "fullDocument": { "_id": "...", "product": "Mouse", "qty": 5 },\n  "ns": { "db": "myapp", "coll": "orders" }\n}\n\n关键配置项：\n- publish.full.document.only: true — 只发送 fullDocument，不含元数据\n- pipeline: 聚合管道过滤事件（如只捕获 insert 和 update）\n- copy.existing: true — 首次启动时复制所有现有数据\n- topic.suffix: 自定义 Topic 后缀\n\n断点续传：\n- resume token 存储在 Kafka Connect 的 offset 中\n- Connector 重启后从上次位置继续'
      },
      {
        title: 'Sink Connector 与数据一致性',
        content: 'Sink Connector 将 Kafka 消息写入 MongoDB：\n\n配置示例：\n{\n  "name": "mongo-sink",\n  "config": {\n    "connector.class": "com.mongodb.kafka.connect.MongoSinkConnector",\n    "connection.uri": "mongodb://mongo1:27017/?replicaSet=rs0",\n    "database": "analytics",\n    "collection": "events",\n    "topics": "web-events",\n    "document.id.strategy": "com.mongodb.kafka.connect.sink.processor.id.strategy.BsonOidStrategy",\n    "writemodel.strategy": "com.mongodb.kafka.connect.sink.writemodel.strategy.UpsertOneBusinessKeyStrategy",\n    "max.batch.size": 1000,\n    "bulk.write.ordered": false\n  }\n}\n\n写入策略：\n- InsertOne：简单插入，重复 key 报错\n- UpsertOne：基于业务键 upsert（幂等写入）\n- UpdateOne：只更新指定字段\n- DeleteOne：基于 key 删除\n\n数据一致性保证：\n- Kafka 的 at-least-once 语义 → MongoDB 可能有重复写入\n- 使用 upsert + 业务键实现幂等性\n- bulk.write.ordered: false 提高吞吐量但牺牲顺序\n- 死信队列（DLQ）处理写入失败的消息\n\n监控指标：\n- source-records-poll-rate：Change Stream 事件产生速率\n- sink-record-write-rate：MongoDB 写入速率\n- 两者差异反映处理延迟'
      }
    ],
    diagnosis: [
      {
        symptom: 'MongoDB Source Connector 启动后 Kafka Topic 中没有消息，但 MongoDB 中有数据变更',
        cause: '可能原因：1. MongoDB 不是副本集（Change Streams 要求副本集）。2. readPreference 不是 primary 或 primaryPreferred。3. pipeline 过滤条件排除了所有事件。',
        fix: '1. 确认 MongoDB 是副本集：rs.status()。2. 连接字符串中设置 readPreference=primaryPreferred。3. 检查 pipeline 配置，先用空管道测试。4. 检查 Connector 日志（Kafka Connect worker 的 log）。'
      },
      {
        symptom: 'Sink Connector 报 "E11000 duplicate key error"，消息写入失败',
        cause: '使用 InsertOne 策略时，如果 Kafka 消息被重复投递（at-least-once 语义），相同的文档会被重复插入导致唯一键冲突。',
        fix: '改用 UpsertOneBusinessKeyStrategy（基于业务键 upsert），确保幂等写入。配置 document.id.strategy 使用业务字段作为 _id，而非生成新的 ObjectId。设置 errors.tolerance: all 和 errors.deadletterqueue.topic.name 将失败消息路由到死信队列。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '设计一个 MongoDB → Kafka → MongoDB 的数据同步管道：源库是 orders 集合，目标是 analytics 库的 order_events 集合。写出 Source 和 Sink Connector 的核心配置。',
        hint: 'Source 捕获 orders 的 Change Stream，Sink 写入 analytics.order_events。',
        answer: '// Source Connector 配置：\n{\n  "name": "orders-source",\n  "config": {\n    "connector.class": "com.mongodb.kafka.connect.MongoSourceConnector",\n    "connection.uri": "mongodb://src-mongo:27017/?replicaSet=rs0",\n    "database": "shop",\n    "collection": "orders",\n    "topic.prefix": "shop",\n    "publish.full.document.only": false,\n    "copy.existing": true\n  }\n}\n\n// Sink Connector 配置：\n{\n  "name": "orders-sink",\n  "config": {\n    "connector.class": "com.mongodb.kafka.connect.MongoSinkConnector",\n    "connection.uri": "mongodb://analytics-mongo:27017/?replicaSet=rs0",\n    "database": "analytics",\n    "collection": "order_events",\n    "topics": "shop.shop.orders",\n    "writemodel.strategy": "com.mongodb.kafka.connect.sink.writemodel.strategy.UpsertOneBusinessKeyStrategy",\n    "document.id.strategy": "com.mongodb.kafka.connect.sink.processor.id.strategy.PartialValueStrategy",\n    "document.id.strategy.partial.value.projection.list": "_id",\n    "max.batch.size": 500\n  }\n}'
      },
      {
        level: '进阶',
        task: '解释为什么 MongoDB Kafka Source Connector 需要副本集而不能用于单机 MongoDB。如果只有单机实例，有哪些替代方案？',
        hint: 'Change Streams 依赖 oplog，而 oplog 只在副本集中存在。',
        answer: '原因：\nMongoDB Kafka Source Connector 基于 Change Streams API，而 Change Streams 依赖 oplog（操作日志）。oplog 只在副本集配置中存在——它是副本集节点间数据同步的基础。单机 MongoDB（standalone）没有 oplog，因此不支持 Change Streams。\n\n替代方案：\n1. 将单机转为单节点副本集：\n   初始化时加 --replSet rs0，然后 rs.initiate()\n   功能完全相同，额外开销极小\n\n2. 轮询方案（Polling）：\n   定时查询 updatedAt > lastPollTime 的文档\n   缺点：有延迟、无法捕获删除操作\n\n3. 应用层双写：\n   应用同时写入 MongoDB 和 Kafka\n   缺点：一致性难以保证、代码复杂\n\n4. 使用 MongoDB Atlas：\n   Atlas 自动配置副本集，自带 Change Streams 支持\n\n推荐方案 1：单节点副本集几乎没有额外开销，是最简单的解决方案。'
      }
    ]
  },

  'xaWDHCkcGm4oovPPxVMB9': {
    // mongodump 备份
    mentalModel: 'mongodump 是 MongoDB 的"快照相机"——它将数据库的当前状态导出为 BSON 文件，用于备份和迁移，就像给数据库拍一张照片保存下来，随时可以用 mongorestore 恢复。',
    handsOn: [
      {
        title: '基本备份操作',
        cmd: '# 备份整个实例\nmongodump --uri "mongodb://localhost:27017" --out /backup/2024-03-15\n\n# 备份单个数据库\nmongodump --uri "mongodb://localhost:27017/myapp" --out /backup/2024-03-15\n\n# 备份单个集合\nmongodump --uri "mongodb://localhost:27017/myapp" --collection orders --out /backup/2024-03-15',
        output: '2024-03-15T14:30:00.000+0800\twriting myapp.orders to\n2024-03-15T14:30:01.200+0800\tdone dumping myapp.orders (150000 documents)\n2024-03-15T14:30:01.210+0800\twriting myapp.users to\n2024-03-15T14:30:02.500+0800\tdone dumping myapp.users (50000 documents)',
        explain: 'mongodump 将每个集合导出为 .bson 文件（数据）和 .metadata.json 文件（索引定义）。--out 指定输出目录。备份过程中数据库保持可用（在线备份），但不是事务一致的快照。'
      },
      {
        title: '压缩和流式备份',
        cmd: '# 压缩备份（gzip）\nmongodump --uri "mongodb://localhost:27017/myapp" --gzip --out /backup/compressed\n\n# 流式备份到 stdout（配合管道压缩）\nmongodump --uri "mongodb://localhost:27017/myapp" --archive=/backup/myapp.archive --gzip\n\n# 备份到远程（通过 SSH）\nmongodump --uri "mongodb://localhost:27017/myapp" --archive --gzip | ssh backup-server "cat > /backup/myapp_$(date +%Y%m%d).archive.gz"',
        output: '# 压缩备份输出：\n2024-03-15T14:30:00.000+0800\twriting myapp.orders to\n2024-03-15T14:30:01.200+0800\tdone dumping myapp.orders (150000 documents)\n# 文件大小对比：\n# 未压缩：orders.bson  256 MB\n# gzip压缩：orders.bson.gz  45 MB（约 82% 压缩率）',
        explain: '--gzip 压缩 BSON 文件（通常压缩率 70-85%）。--archive 将所有数据打包到单个文件（便于传输和管理）。流式备份适合大数据库，避免中间文件占用磁盘空间。'
      },
      {
        title: '一致性备份与 oplog',
        cmd: '# 带 oplog 的一致性备份（仅全实例备份时有效）\nmongodump --uri "mongodb://rs0/mongo1:27017,mongo2:27017" --oplog --out /backup/consistent\n\n# 查看备份内容\nls -la /backup/consistent/\n# oplog.bson 包含了备份期间的 oplog 条目\n\n# 恢复时应用 oplog\nmongorestore --uri "mongodb://localhost:27017" --oplogReplay /backup/consistent/',
        output: '# 目录结构：\n/backup/consistent/\n├── myapp/\n│   ├── orders.bson\n│   ├── orders.metadata.json\n│   ├── users.bson\n│   └── users.metadata.json\n└── oplog.bson    # 备份期间的操作日志',
        explain: '--oplog 在备份期间同时捕获 oplog 条目，使备份成为一个时间点一致的快照。恢复时用 --oplogReplay 重放这些 oplog 条目。没有 --oplog 的备份可能在集合间不一致（备份过程中有写入操作）。'
      },
      {
        title: '备份策略与自动化',
        cmd: '# 自动化备份脚本（crontab）\n# 每天凌晨 2 点执行全量备份\n# 0 2 * * * /opt/scripts/mongo-backup.sh\n\n#!/bin/bash\nBACKUP_DIR="/backup/mongodb/$(date +%Y%m%d)"\nmongodump \\\n  --uri "mongodb://admin:password@rs0/mongo1:27017/?authSource=admin" \\\n  --gzip \\\n  --oplog \\\n  --out "$BACKUP_DIR"\n\n# 压缩并加密\ntar czf "${BACKUP_DIR}.tar.gz" "$BACKUP_DIR" && rm -rf "$BACKUP_DIR"\n\n# 清理 30 天前的备份\nfind /backup/mongodb -name "*.tar.gz" -mtime +30 -delete',
        output: '# 备份完成后目录结构：\n/backup/mongodb/\n├── 20240313.tar.gz  (1.2 GB)\n├── 20240314.tar.gz  (1.3 GB)\n└── 20240315.tar.gz  (1.2 GB)',
        explain: '生产环境备份策略：定期全量 + 持续 oplog 备份。全量备份保证恢复基线，oplog 备份支持任意时间点恢复（PITR）。Atlas 提供自动备份和 PITR，无需手动管理。'
      }
    ],
    diagnosis: [
      {
        symptom: 'mongodump 在大集合上运行很慢，而且备份期间应用性能下降',
        cause: 'mongodump 读取整个集合（包括不在内存中的冷数据），可能导致 WiredTiger 缓存被冷数据填满，挤出热数据，影响在线查询性能。',
        fix: '1. 在从节点上执行备份（连接从节点而非主节点）。2. 使用 --readPreference=secondary。3. 低峰期执行备份。4. 考虑使用文件系统快照（LVM snapshot / EBS snapshot）替代 mongodump。5. Atlas 用户可直接使用自动备份。'
      },
      {
        symptom: 'mongodump 连接副本集时报错 "not master and slaveOk=false"',
        cause: 'mongodump 默认连接主节点。如果主节点不可达或连接字符串中只包含从节点，且没有设置 readPreference，mongodump 无法读取。',
        fix: '在连接字符串中指定 readPreference：mongodump --uri "mongodb://mongo1:27017,mongo2:27017/?replicaSet=rs0&readPreference=secondary"。或者确保连接字符串包含主节点地址。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '写出完整的 mongodump 命令来备份 myapp 数据库，要求：启用 gzip 压缩、连接到副本集 rs0、包含 oplog 以实现一致性备份、输出到 /backup/daily 目录。',
        hint: '使用 --uri 连接副本集，--gzip 压缩，--oplog 包含 oplog，--out 指定目录。',
        answer: 'mongodump \\\n  --uri "mongodb://admin:pass@node1:27017,node2:27017,node3:27017/myapp?replicaSet=rs0&authSource=admin" \\\n  --gzip \\\n  --oplog \\\n  --out /backup/daily\n\n# 恢复命令：\nmongorestore \\\n  --uri "mongodb://localhost:27017" \\\n  --gzip \\\n  --oplogReplay \\\n  /backup/daily/'
      },
      {
        level: '进阶',
        task: '比较 mongodump 和文件系统快照（如 LVM snapshot）两种备份方式的优缺点，说明各自适合的场景。',
        hint: '从一致性保证、备份速度、恢复速度、存储空间和跨平台兼容性五个维度比较。',
        answer: 'mongodump 优点：\n- 逻辑备份，跨版本/跨平台兼容（可在不同 MongoDB 版本间迁移）\n- 可以选择性备份（单库、单集合、查询过滤）\n- 不依赖存储层，适用于任何存储系统\n\nmongodump 缺点：\n- 速度慢（需要读取+序列化所有数据）\n- 恢复慢（需要反序列化+重新创建索引）\n- 对在线性能有影响（缓存污染）\n\n文件系统快照优点：\n- 速度极快（瞬间完成，COW 机制）\n- 恢复快（直接恢复数据文件）\n- 对在线性能影响最小\n- 物理一致性（WiredTiger 的 checkpoint 保证）\n\n文件系统快照缺点：\n- 依赖存储层（需要 LVM/EBS/ZFS 支持）\n- 不跨平台/版本（数据文件格式可能不兼容）\n- 备份整个实例，不能选择性备份\n- 需要停止写入或 fsync+lock 确保一致性\n\n推荐：\n- 小数据库（< 100GB）：mongodump 足够\n- 大数据库（> 100GB）：文件系统快照\n- 跨版本迁移：mongodump\n- 生产环境：Atlas 自动备份 或 快照 + oplog 备份'
      }
    ]
  },

  'yRJ6jeysFXBpwLEqvrdKk': {
    // Role-based Access Control
    mentalModel: 'RBAC 是 MongoDB 的"权限菜单系统"——每个用户被赋予一个或多个角色（role），每个角色定义了一组权限（privilege），就像餐厅服务员只能点菜、厨师只能做菜、经理可以看报表，各司其职。',
    handsOn: [
      {
        title: '内置角色与权限层级',
        cmd: '// 查看内置角色\ndb.getSiblingDB("admin").getRoles({ showPrivileges: false })\n\n// 查看特定角色的权限\ndb.getSiblingDB("admin").getRole("readWrite", { showPrivileges: true })',
        output: '// readWrite 角色的权限：\n{\n  role: "readWrite",\n  db: "admin",\n  privileges: [\n    { resource: { db: "", collection: "" }, actions: ["find", "insert", "update", "remove", "createCollection", "createIndex", "dropIndex", ...] }\n  ],\n  inheritedRoles: [{ role: "read", db: "" }],\n  inheritedPrivileges: [...]\n}',
        explain: 'MongoDB 内置角色分两类：数据库角色（read, readWrite, dbAdmin, dbOwner）和集群角色（clusterAdmin, clusterMonitor, hostManager）。角色可以继承——readWrite 继承 read 的所有权限。'
      },
      {
        title: '创建自定义角色',
        cmd: '// 创建一个"只能查询特定集合"的角色\ndb.getSiblingDB("admin").createRole({\n  role: "ordersReadOnly",\n  privileges: [\n    {\n      resource: { db: "myapp", collection: "orders" },\n      actions: ["find", "aggregate", "count"]\n    },\n    {\n      resource: { db: "myapp", collection: "order_items" },\n      actions: ["find"]\n    }\n  ],\n  roles: []\n})\n\n// 创建用户并赋予自定义角色\ndb.getSiblingDB("myapp").createUser({\n  user: "report_service",\n  pwd: "SecureP@ss2024",\n  roles: [\n    { role: "ordersReadOnly", db: "admin" },\n    { role: "read", db: "myapp" }\n  ]\n})',
        output: '{ ok: 1 }\n// 用户 report_service 现在可以：\n// - 查询 myapp.orders（find, aggregate, count）\n// - 查询 myapp.order_items（find）\n// - 读取 myapp 库的其他集合（read 角色）\n// 但不能写入任何集合',
        explain: '自定义角色通过 privileges 精确控制资源（db + collection）和操作（actions）。可以只允许特定集合的特定操作，实现最小权限原则。角色定义在 admin 库中，可以在任何库中使用。'
      },
      {
        title: '权限审查与角色管理',
        cmd: '// 查看用户的所有权限（包括继承的）\ndb.getSiblingDB("myapp").getUser("report_service", { showPrivileges: true })\n\n// 修改用户角色\ndb.getSiblingDB("myapp").updateUser("report_service", {\n  roles: [\n    { role: "ordersReadOnly", db: "admin" }\n    // 移除了 read 角色\n  ]\n})\n\n// 授予额外角色\ndb.getSiblingDB("myapp").grantRolesToUser("report_service", [\n  { role: "read", db: "analytics" }\n])\n\n// 回收角色\ndb.getSiblingDB("myapp").revokeRolesFromUser("report_service", [\n  { role: "read", db: "analytics" }\n])',
        output: '// grantRolesToUser 后用户角色：\n// [{ role: "ordersReadOnly", db: "admin" }, { role: "read", db: "analytics" }]\n\n// revokeRolesFromUser 后用户角色：\n// [{ role: "ordersReadOnly", db: "admin" }]',
        explain: '权限管理命令：grantRolesToUser 添加角色、revokeRolesFromUser 移除角色、updateUser 完全替换角色列表。定期审查用户权限是安全最佳实践——避免权限积累（privilege creep）。'
      }
    ],
    diagnosis: [
      {
        symptom: '用户有 readWrite 角色但无法执行 aggregate 操作，报 "not authorized"',
        cause: '某些聚合操作需要额外权限。例如 $out 和 $merge 阶段需要对目标集合有 insert 和 remove 权限。$lookup 需要对关联集合有 find 权限。如果 readWrite 只限于一个数据库，跨库操作会失败。',
        fix: '1. 检查聚合管道中是否有 $out/$merge（需要目标集合的写权限）。2. 检查 $lookup 是否涉及其他数据库的集合。3. 为需要的操作添加额外角色或自定义权限。'
      },
      {
        symptom: '创建角色时报错 "Cannot create role in admin database from non-admin database context"',
        cause: '自定义角色必须在 admin 数据库中创建（如果要跨库使用）。如果当前上下文不是 admin 库，createRole 会失败。',
        fix: '切换到 admin 库创建角色：db.getSiblingDB("admin").createRole({...})。数据库级别的角色（只影响一个库）可以在该库中创建，但跨库角色必须在 admin 库中创建。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '为一个 SaaS 应用设计 RBAC 方案：需要 admin（全部权限）、developer（读写测试库，只读生产库）、analyst（只能对 analytics 库做聚合查询）。写出创建角色和用户的命令。',
        hint: 'admin 可以用内置 dbOwner 角色，developer 需要两个库的不同角色，analyst 需要自定义角色。',
        answer: '// admin：使用内置角色\ndb.getSiblingDB("admin").createUser({\n  user: "admin_user",\n  pwd: "Admin@2024!",\n  roles: [{ role: "root", db: "admin" }]\n});\n\n// developer：测试库读写 + 生产库只读\ndb.getSiblingDB("admin").createUser({\n  user: "dev_user",\n  pwd: "Dev@2024!",\n  roles: [\n    { role: "readWrite", db: "test_db" },\n    { role: "read", db: "prod_db" }\n  ]\n});\n\n// analyst：自定义角色（只能聚合查询）\ndb.getSiblingDB("admin").createRole({\n  role: "analyticsAggregator",\n  privileges: [{\n    resource: { db: "analytics", collection: "" },\n    actions: ["find", "aggregate", "count", "collStats"]\n  }],\n  roles: []\n});\ndb.getSiblingDB("admin").createUser({\n  user: "analyst_user",\n  pwd: "Analyst@2024!",\n  roles: [{ role: "analyticsAggregator", db: "admin" }]\n});'
      },
      {
        level: '进阶',
        task: '解释 MongoDB RBAC 中"角色继承"的机制，并设计一个三层角色继承结构：baseRole → appRole → adminRole。',
        hint: '创建角色时在 roles 字段中指定继承的父角色。子角色自动获得父角色的所有权限。',
        answer: '// 第 1 层：基础角色（只读）\ndb.getSiblingDB("admin").createRole({\n  role: "baseReadOnly",\n  privileges: [{\n    resource: { db: "myapp", collection: "" },\n    actions: ["find", "count", "collStats", "dbStats"]\n  }],\n  roles: []  // 不继承任何角色\n});\n\n// 第 2 层：应用角色（读写，继承基础角色）\ndb.getSiblingDB("admin").createRole({\n  role: "appReadWrite",\n  privileges: [{\n    resource: { db: "myapp", collection: "" },\n    actions: ["insert", "update", "remove", "createCollection", "createIndex"]\n  }],\n  roles: [{ role: "baseReadOnly", db: "admin" }]  // 继承 baseReadOnly\n});\n// appReadWrite 拥有：find + count + collStats + dbStats + insert + update + remove + ...\n\n// 第 3 层：管理角色（全部权限，继承应用角色）\ndb.getSiblingDB("admin").createRole({\n  role: "appAdmin",\n  privileges: [{\n    resource: { db: "myapp", collection: "" },\n    actions: ["dropCollection", "dropDatabase", "reIndex", "convertToCapped"]\n  }],\n  roles: [{ role: "appReadWrite", db: "admin" }]  // 继承 appReadWrite\n});\n// appAdmin 拥有所有三层角色的权限\n\n// 权限传递链：appAdmin → appReadWrite → baseReadOnly\n// 修改 baseReadOnly 的权限会自动影响所有子角色。'
      }
    ]
  },

  'LpfuM6SuhlNNjBcHM68ee': {
    // Queryable Encryption
    mentalModel: 'Queryable Encryption 是 MongoDB 的"魔法索引"——它让服务器在不解密数据的情况下执行等值查询，就像图书馆管理员不需要打开密封的档案袋就能找到特定编号的档案，密码学上的突破让"加密"和"可查询"不再矛盾。',
    sections: [
      {
        title: 'Queryable Encryption 的核心原理',
        content: 'Queryable Encryption（QE）是 MongoDB 7.0 引入的突破性功能：\n\n核心问题：CSFLE 中 Random 加密的字段无法查询（因为相同明文产生不同密文）。QE 通过结构化加密解决这个问题。\n\n工作原理：\n1. 客户端用结构化加密算法加密敏感字段\n2. 生成的密文包含"查询令牌"（query token），允许服务器比较\n3. 服务器维护加密索引（encrypted index），用令牌查找匹配文档\n4. 服务器不知道明文内容，但能确定"这两条记录的这个字段值相同"\n\n安全属性：\n- 服务器无法从密文推断明文（语义安全）\n- 服务器无法知道哪些字段有相同值（除非收到查询令牌）\n- 每次查询生成唯一的令牌，不泄露查询模式\n- 比 CSFLE Deterministic 加密更安全（Deterministic 泄露频率信息）\n\n对比：\n| 特性 | CSFLE Deterministic | CSFLE Random | QE |\n|------|--------------------|----|----|\n| 等值查询 | 支持 | 不支持 | 支持 |\n| 频率泄露 | 是 | 否 | 否 |\n| 查询模式泄露 | 是 | 否 | 否 |\n| 安全性 | 中 | 高 | 高 |'
      },
      {
        title: 'QE 的配置与使用',
        content: 'MongoDB 7.0+ 中的 Queryable Encryption 配置：\n\n1. 创建加密字段配置（EncryptedFieldsMap）：\nconst encryptedFieldsMap = {\n  "myapp.patients": {\n    fields: [\n      {\n        keyId: dataKeyId,      // DEK 的 UUID\n        path: "ssn",           // 要加密的字段路径\n        bsonType: "string",\n        queries: { queryType: "equality" }  // 支持等值查询\n      },\n      {\n        keyId: dataKeyId,\n        path: "billing",\n        bsonType: "object",\n        queries: {}  // 不支持查询，但仍加密\n      }\n    ]\n  }\n};\n\n2. 创建加密集合：\ndb.createCollection("myapp.patients", {\n  encryptedFields: encryptedFieldsMap["myapp.patients"]\n});\n// MongoDB 自动创建辅助集合：\n// - enclv2_patients_esc  （加密搜索集合）\n// - enclv2_patients_ecoc （加密内容集合）\n// - enclv2_patients_state （状态集合）\n\n3. 连接并使用：\nconst encryptedClient = new MongoClient(uri, {\n  autoEncryption: {\n    keyVaultNamespace: "encryption.__keyVault",\n    kmsProviders: kmsProviders,\n    encryptedFieldsMap: encryptedFieldsMap\n  }\n});\n\n// 插入 — 透明加密\nencryptedClient.getDB("myapp").patients.insertOne({\n  ssn: "123-45-6789",\n  name: "Alice",\n  billing: { cardNumber: "4111...", amount: 500 }\n});\n\n// 查询 — 服务器在加密索引上匹配\nencryptedClient.getDB("myapp").patients.findOne({ ssn: "123-45-6789" });\n// 返回明文结果，但服务器从未看到明文'
      },
      {
        title: 'QE 的限制与性能考量',
        content: 'Queryable Encryption 的当前限制：\n\n1. 查询类型限制：\n- 只支持等值查询（queryType: "equality"）\n- 不支持范围查询（$gt, $lt）、正则表达式、文本搜索\n- 不支持聚合操作（$group, $sort）\n\n2. 性能影响：\n- 插入延迟增加约 2-5 倍（需要构建加密索引）\n- 查询延迟增加约 2-3 倍（需要生成查询令牌 + 加密索引查找）\n- 存储空间增加（三个辅助集合）\n- 加密索引的维护开销\n\n3. 运维限制：\n- 不能对已有集合添加 QE（必须新建集合）\n- 不能修改已加密字段的加密配置\n- 需要 MongoDB 7.0+ 企业版或 Atlas\n- Change Streams 对加密字段的输出是密文\n\n4. 密钥管理：\n- 丢失 DEK 意味着数据永久不可读\n- MK 轮换不影响已加密数据（与 CSFLE 相同）\n- 建议使用 AWS KMS / Azure Key Vault 管理 MK\n\n适用场景：\n- 医疗记录（HIPAA 合规）\n- 金融数据（PCI-DSS 合规）\n- 个人隐私信息（GDPR 合规）\n- 需要在加密数据上按精确值查找的场景'
      }
    ],
    diagnosis: [
      {
        symptom: '创建 QE 加密集合时报错 "Queryable Encryption is not enabled" 或 "feature requires enterprise"',
        cause: 'Queryable Encryption 仅在 MongoDB 7.0+ Enterprise 版本和 Atlas M10+ 集群中可用。社区版不支持此功能。',
        fix: '确认 MongoDB 版本和许可证：db.serverStatus().enterprise 应返回 true。如果使用社区版，需要升级到 Enterprise 版或使用 MongoDB Atlas。确保 mongod 启动时配置了 QE 所需的 cryptd 或 mongocryptd 进程。'
      },
      {
        symptom: 'QE 加密集合的写入性能明显下降，插入延迟从 5ms 增加到 50ms',
        cause: '每次写入需要：1. 客户端加密字段值。2. 生成加密索引条目。3. 写入三个辅助集合（ESC、ECOC、state）。4. 更新加密索引。这些额外操作显著增加写入开销。',
        fix: '1. 评估是否所有字段都需要 QE——不需要查询的字段用 CSFLE Random 加密（开销更小）。2. 批量写入减少网络往返。3. 如果写入是瓶颈，考虑将 QE 限制在真正需要等值查询的敏感字段上。4. 升级硬件（SSD、更多 CPU 核心）。'
      }
    ],
    exercises: [
      {
        level: '基础',
        task: '比较 CSFLE（Deterministic/Random）和 Queryable Encryption 三者的安全性、查询能力和性能。用表格形式列出。',
        hint: '从等值查询支持、频率泄露、查询模式泄露、写入开销四个维度比较。',
        answer: '| 特性 | CSFLE Deterministic | CSFLE Random | QE Equality |\n|------|-------------------|-------------|-------------|\n| 等值查询 | 支持 | 不支持 | 支持 |\n| 范围查询 | 不支持 | 不支持 | 不支持 |\n| 频率泄露 | 是（相同明文→相同密文） | 否 | 否 |\n| 查询模式泄露 | 是 | 否 | 否（每次查询令牌不同） |\n| 写入开销 | 低（1x） | 低（1x） | 高（2-5x） |\n| 查询开销 | 低（1x） | N/A | 中（2-3x） |\n| 存储开销 | 低 | 低 | 高（3个辅助集合） |\n| 安全性 | 中等 | 高 | 高 |\n\n推荐：\n- 需要查询 + 安全要求一般 → CSFLE Deterministic\n- 不需要查询 + 高安全 → CSFLE Random\n- 需要查询 + 高安全 → QE'
      },
      {
        level: '进阶',
        task: '为一个医疗系统设计完整的加密方案，结合 CSFLE 和 QE：patients 集合有 name, ssn, dob, diagnosis, insurance 字段。决定每个字段使用哪种加密方式，并说明理由。',
        hint: '根据每个字段的查询需求（是否需要等值/范围查询）和安全敏感度选择加密方式。',
        answer: '// 加密方案设计：\n\n// name: 不加密\n// 理由：需要模糊搜索和排序，安全敏感度中等，可通过网络隔离保护\n\n// ssn: Queryable Encryption (equality)\n// 理由：极高敏感度（身份标识），需要按值精确查找患者。\n// 用 QE 而非 CSFLE Deterministic，因为 QE 不泄露频率信息。\n\n// dob: CSFLE Random\n// 理由：中等敏感度，通常需要范围查询但加密后无法支持。\n// 用 Random 加密保护，按年龄查找时先按 name/ssn 找到患者再看 dob。\n\n// diagnosis: CSFLE Random\n// 理由：极高敏感度（受 HIPAA 保护），不需要直接查询。\n// 通过 ssn（QE 加密）找到患者后解密查看诊断信息。\n\n// insurance: CSFLE Deterministic\n// 理由：中等敏感度，需要按保险号查找（保险验证流程频繁）。\n// 用 Deterministic 因为保险号基数高（频率泄露风险低）且查询频率高。\n// 如果安全要求更高可升级为 QE，但写入开销会更大。\n\n// 总结：\n// ssn → QE（高安全 + 等值查询）\n// insurance → CSFLE Deterministic（中等安全 + 高频查询）\n// dob, diagnosis → CSFLE Random（高安全 + 无需查询）\n// name → 不加密（低安全 + 需要模糊查询）'
      }
    ]
  }
};
