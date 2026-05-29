import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_3: Record<string, DeepTutorial> = {
  // ============================================================
  // 59. JWT
  // ============================================================
  "UxS_mzVUjLigEwKrXnEeB": {
    mentalModel: 'JWT 就像一张"签名门票"——门票上印了你的信息和有效期，检票员只看签名是否真实（验证签名），不需要打电话回售票处查询（无状态）。签名伪造不了，但门票过期就作废。',
    sections: [
      { title: 'JWT 结构', content: 'JWT 由三部分组成，用 . 分隔：Header.Payload.Signature。Header：{"alg":"HS256","typ":"JWT"}（签名算法）。Payload：{"sub":"123","name":"Alice","iat":1516239022,"exp":1516242622}（数据，也叫 Claims）。Signature：HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)。任何人都能解码 Header 和 Payload（Base64 不是加密），但无法伪造 Signature（没有密钥）。' },
      { title: 'JWT 实践要点', content: '1) 不要在 Payload 里放敏感信息（如密码、身份证号）——Payload 只是 Base64 编码，任何人都能解码 2) 设置合理过期时间（Access Token 15 分钟-2 小时，Refresh Token 7-30 天）3) 密钥管理：HS256 用单个密钥（适合单服务）；RS256 用公私钥对（适合微服务——认证服务用私钥签发，其他服务用公钥验证）4) Token 撤销：JWT 无法主动撤销（这是无状态的代价），可以实现黑名单或缩短过期时间。' },
    ],
    diagnosis: [
      { symptom: '用户反馈"突然被登出"，但 Token 还没过期', cause: '可能是服务器重启导致内存中的黑名单丢失，或 Token 签发时用了旧密钥。', fix: '使用 Refresh Token 机制——Access Token 短期有效，过期后用 Refresh Token 续期。Refresh Token 存在数据库，可以随时撤销。' },
    ],
    handsOn: [
      { title: '解码 JWT Payload', cmd: 'echo "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4YO3DOGQy7BMX89jj_NEGNsqW8PYApX1vQ" | cut -d. -f2 | base64 -d', output: '{"sub":"1234567890"}', explain: '取 JWT 的第二段（Payload），Base64 解码即可看到内容。第一段是 Header，第三段是 Signature。任何人都能这样解码——所以不要在 JWT 里放敏感信息。' },
    ],
    exercises: [
      { level: '基础', task: '去 jwt.io 网站，粘贴一个 JWT，观察 Header 和 Payload 的内容', hint: '谷歌搜 jwt.io debugger', answer: 'jwt.io 的 Debugger 会自动解码 JWT 的三部分。修改 Payload 会发现 Signature 变红（无效）——这就是为什么 JWT 无法被篡改。' },
    ],
  },

  // ============================================================
  // 60. Cookie Based Auth / Cookie 认证
  // ============================================================
  "ffzsh8_5yRq85trFt9Xhk": {
    mentalModel: 'Cookie 是浏览器自动携带的"身份牌"——登录后服务器给你一个 Session ID 存进 Cookie，之后每次请求浏览器自动带上，服务器根据 Session ID 找到你是谁。全程不用你手动加 Header。',
    sections: [
      { title: 'Cookie-Session 认证流程', content: '1) 用户 POST /login 提交账号密码 2) 服务器验证通过，创建 Session（存 Redis/数据库），Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Lax 3) 浏览器自动在后续请求中带上 Cookie: session_id=abc123 4) 服务器根据 session_id 查找 Session，获得用户信息。优势：简单、可强制失效（删服务器 Session）、HttpOnly 防 XSS 窃取。劣势：需要共享 Session 存储（水平扩展时）、不适合移动 App。' },
      { title: 'Cookie 安全属性', content: 'HttpOnly：JS 无法读取，防 XSS 窃取。Secure：只通过 HTTPS 传输。SameSite：Strict（同站才发 Cookie，最安全）/Lax（允许从外部链接跳转时发 Cookie，默认）/None（跨站也发，必须配 Secure）。Max-Age/Expires：Cookie 有效期。Domain/Path：Cookie 作用范围。生产环境 Cookie 标配：HttpOnly + Secure + SameSite=Lax。' },
    ],
    diagnosis: [
      { symptom: '用户反馈登录后操作一段时间就被登出', cause: 'Cookie 的 Max-Age/Session 过期时间设置过短，或 Session 存储（Redis）过期清理了。', fix: '1) 检查 Session 存储的 TTL 配置 2) 实现滑动过期——每次请求自动续期 3) 区分记住我和临时登录。' },
      { symptom: '前端 JS 无法读取 Cookie（document.cookie 是空的）', cause: 'Cookie 设置了 HttpOnly 属性——这是安全设计，JS 不应该能读。', fix: '1) 确认这是预期行为——认证 Cookie 应该有 HttpOnly 2) 如果确实需要 JS 读非敏感 token，额外设一个非 HttpOnly 的 Cookie 或用 Authorization header。' },
    ],
    exercises: [
      { level: '基础', task: '用浏览器 DevTools 查看当前网站的 Cookie', hint: 'F12 → Application → Cookies', answer: '在 Application → Storage → Cookies 下可以看到所有 Cookie，包括 Name/Value/Domain/Path/Expires/HttpOnly/Secure 等属性。' },
    ],
  },

  // ============================================================
  // 61. OAuth / OAuth
  // ============================================================
  "vp-muizdICcmU0gN8zmkS": {
    mentalModel: 'OAuth 就像"酒店入住"——你不用把房契给前台（密码），而是出示身份证（授权），前台核实后给你房卡（Token），房卡只能开你的房间（限定权限），退房时房卡作废。',
    sections: [
      { title: 'OAuth 2.0 四种授权模式', content: '1) Authorization Code（最常用，最安全）：前端跳转授权页 → 用户同意 → 拿到 code → 后端用 code 换 Token。适合有后端的 Web 应用。2) PKCE（Authorization Code + 验证器）：给没有后端的 SPA/Mobile App 用，防授权码拦截。3) Client Credentials：服务间通信，没有用户参与（如后端定时任务调 API）。4) Device Code：给电视/打印机等没有浏览器的设备用，显示一个码让用户去手机上确认。' },
      { title: 'OAuth 角色', content: 'Resource Owner（用户）→ Client（你的 App）→ Authorization Server（如 Google 登录页）→ Resource Server（如 Google API）。流程：用户在你的 App 点"用 Google 登录"→ 跳转 Google 授权页 → 用户同意 → Google 回调你的 App 并带 code → 你的后端用 code + client_secret 换 access_token → 用 access_token 调 Google API 获取用户信息。' },
    ],
    diagnosis: [
      { symptom: 'OAuth 回调 URL 报 redirect_uri_mismatch', cause: 'OAuth 应用配置中的回调 URL 和实际请求的 redirect_uri 不完全一致（多了尾部斜杠、http vs https、或少了一级路径）。', fix: '1) OAuth Provider 控制台中严格匹配 redirect_uri 2) 注意 http 和 https 是不同的 redirect_uri 3) 开发和生产的 redirect_uri 分别配置。' },
      { symptom: '用 Authorization Code 换取 Token 时报 invalid_grant', cause: 'code 只能使用一次且有效期极短（通常 1-10 分钟），可能已被使用或过期。', fix: '1) 确认没有重复使用同一个 code 2) 检查 code 是否在有效期内（通常 10 分钟内）3) 确认使用 HTTPS，code 在 URL 中可能被代理截获后已被使用。' },
    ],
    exercises: [
      { level: '基础', task: '说出 OAuth 2.0 中 Authorization Code 模式为什么比直接返回 Token 更安全', hint: 'code 只是临时的，换 token 需要 client_secret', answer: 'code 是一次性的、短时效的（通常 10 分钟），即使被拦截，没有 client_secret（存在后端，不会暴露在 URL 中）也无法换成 Token。而且 Token 只传给后端（服务器间通信），不会暴露在前端 URL 或浏览器存储中。' },
    ],
  },

  // ============================================================
  // 62. OpenID Connect / OpenID Connect
  // ============================================================
  "z3EJBpgGm0_Uj3ymhypbX": {
    mentalModel: 'OpenID Connect 是 OAuth 2.0 的"身份层扩展"——OAuth 只管"授权"（我给你房卡），OIDC 加了"认证"（你是谁）。OIDC = OAuth 2.0 + ID Token（JWT 格式的身份信息）。',
    sections: [
      { title: 'OIDC 和 OAuth 的关系', content: 'OAuth 2.0 只有 Access Token（用来访问资源），没有用户身份信息。OIDC 增加了 ID Token（JWT，包含用户信息如 sub/email/name）和 UserInfo Endpoint。现代"社交登录"基本都是 OIDC：Google/Apple/GitHub 登录。为什么要学这个：1) 后端需要验证 ID Token 的签名来确认用户身份 2) 理解 JWT claims（sub = 用户唯一 ID, iss = 签发者, aud = 受众, exp = 过期时间）。' },
    ],
    diagnosis: [
      { symptom: 'OIDC ID Token 验证失败，提示 invalid audience', cause: 'ID Token 的 aud (audience) 字段不匹配——需要匹配你的应用在 IdP 注册的 client_id。', fix: '1) 在验证 ID Token 时指定正确的 audience 参数 2) 确认 IdP 注册的 client_id 和代码中一致 3) 如果 Token 中有多个 audience（数组），确认你的 client_id 在其中。' },
      { symptom: 'OIDC 登录后拿到 ID Token 但 UserInfo endpoint 返回 401', cause: '调用 UserInfo endpoint 时 Authorization header 使用了 ID Token 而非 Access Token。', fix: '1) UserInfo endpoint 需要 Access Token（不是 ID Token）做 Bearer token 2) ID Token 用来看身份信息（解码即可），Access Token 用来调 UserInfo 和 Resource API 3) 确认 Access Token 的 scope 包含 openid profile email。' },
    ],
    exercises: [
      { level: '基础', task: '说出 OAuth 2.0 和 OpenID Connect 最核心的区别', hint: 'OAuth 返回什么？OIDC 多返回了什么？', answer: 'OAuth 2.0 返回 Access Token（授权凭证）。OIDC 在 OAuth 基础上多了 ID Token（JWT 格式的身份信息），让你知道"这个 Access Token 是谁的"。' },
    ],
  },

  // ============================================================
  // 63. Sharding Strategies / 分片策略
  // ============================================================
  "zWstl08R4uzqve4BdYurp": {
    mentalModel: '数据库分片就像把一个巨大的图书馆拆成 10 个分馆——每个分馆藏书类型不同（按类别分片），借书时先去查"目录"找到去哪个分馆。分片让存书量从单馆 10 万本扩展到 100 万本。',
    sections: [
      { title: '分片策略类型', content: '1) Range 分片：按范围分（user_id 1-1000 → 分片 A，1001-2000 → 分片 B）。简单但有热点问题（新用户全进最后一个分片）。2) Hash 分片：hash(user_id) % 4 决定去哪个分片。分布均匀但扩容难（加新分片要重新 hash，数据迁移量大）。3) Directory 分片：维护一个"用户→分片"的映射表（如用 Redis 存），灵活但增加一次查找。4) Geo 分片：按地理位置分（中国用户在亚洲分片，欧洲用户在欧洲分片），降低延迟。' },
      { title: '分片的代价', content: '分片不是免费的：1) JOIN 跨分片几乎不可用 2) 事务跨分片需要分布式事务（2PC/Saga）3) 分片键（Sharding Key）选择至关重要——选错了数据分布不均有热点 4) 运维复杂度翻倍（备份/恢复/迁移）。原则：单体数据库能撑住就别分片——单个 PG/MySQL 实例优化好了能扛几十 TB 数据，很多公司分片是因为"怕被问到怎么扩展"而非真的需要。' },
    ],
    diagnosis: [
      { symptom: '分片数据库中新用户注册集中在某个分片，写入热点严重', cause: '按 user_id 范围分片（Range Sharding）——新用户 ID 都落入最后一个分片，新分片承受全部写入压力。', fix: '1) 改用 Hash 分片：hash(phone) % N，分布均匀 2) 或使用 UUID/雪花 ID 做主键，按 ID hash 分片 3) 如果必须范围分片，定期预创建新分片。' },
      { symptom: '跨分片 JOIN 查询报错或超时', cause: '关联数据分布在不同分片上——orders 在分片 A，users 在分片 B，无法在同一数据库实例做 JOIN。', fix: '1) 反范式化：把常用关联数据冗余存储在一个分片 2) 应用层 JOIN：分别查两个分片，在代码中组合结果 3) 重新设计分片键——让关联数据落在同一分片上。' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个"电商订单表"的分片策略：需要按 buyer_id 查和按 seller_id 查', hint: '单一 Hash 分片只能高效查一种，另一种要查所有分片', answer: '选 buyer_id 做分片键（用户查自己的订单是最频繁操作）。卖家查订单通过异步构建的二级索引（卖家→订单 ID 列表，存在 Elasticsearch 或专门的索引表）。或者索性不用分片而是用读写分离+缓存——大部分电商系统单库能撑很久。' },
    ],
  },

  // ============================================================
  // 64. Web Security / Web 安全
  // ============================================================
  "RBrIP5KbVQ2F0ly7kMfTo": {
    mentalModel: 'Web 安全就像给房子装多层防护——不能只靠一把锁（防火墙），需要多层防御：门锁（HTTPS）、监控（日志）、保安（WAF）、保险柜（加密）、访客登记（认证授权）。安全不是功能点，是贯穿每一层的基础属性。',
    sections: [
      { title: '后端安全基础清单', content: '1) HTTPS 必须——Let\'s Encrypt 免费，没理由不用 2) 密码哈希——bcrypt/argon2，绝不存明文或 MD5 3) SQL 注入防护——永远用参数化查询，不用字符串拼接 SQL 4) XSS 防护——输出编码、CSP Header 5) CSRF 防护——SameSite Cookie + CSRF Token 6) CORS 正确配置——不要设 Access-Control-Allow-Origin: * 7) 输入校验——永远不信任用户输入 8) 依赖漏洞——定期 npm audit / pip audit / go mod tidy 9) 密钥管理——密钥不进代码仓库，用环境变量或 Secret Manager 10) 最小权限——数据库账号只给必要的权限，不用 root。' },
    ],
    diagnosis: [
      { symptom: '安全扫描工具报告大量高危漏洞，但都是理论上的风险', cause: '没有区分漏洞的实际可利用性——扫描工具把所有潜在风险都标为 HIGH。', fix: '1) 人工评估每个漏洞的 CVSS 评分和攻击向量 2) 优先修可远程利用 + 无需认证 + 影响数据的漏洞 3) 修复后重新扫描确认漏洞已消除。' },
      { symptom: '生产环境 API key 被提交到 GitHub 代码仓库', cause: '开发者把密钥写在代码中，提交时忘了排除。', fix: '1) 立即轮换泄露的密钥 2) 用 .gitignore 排除 .env 文件 3) 安装 pre-commit hook 检查密钥（git-secrets/trufflehog）4) 用 Secret Manager/Vault 管理密钥。' },
    ],
    exercises: [
      { level: '基础', task: '列出后端应用必须做的 5 项安全措施', hint: 'HTTPS/哈希/注入/校验/日志', answer: '1) 全站 HTTPS 2) 密码 bcrypt 哈希 3) 所有查询用参数化防 SQL 注入 4) 所有用户输入校验+过滤 5) 审计日志记录关键操作。' },
    ],
  },

  // ============================================================
  // 65-69. 密码哈希算法 (MD5/scrypt/bcrypt/SHA) + CORS/CSP
  // ============================================================
  "jWwA6yX4Zjx-r_KpDaD3c": {
    mentalModel: 'MD5 是一把"已经被撬过的锁"——看起来还像锁的样子，但所有小偷都已经有开锁工具了（彩虹表+碰撞攻击）。2004 年山东大学王小云教授就找到了 MD5 碰撞方法。',
    sections: [
      { title: 'MD5 为什么不能再用', content: 'MD5 设计用于文件完整性校验（如下载后检查文件是否损坏），不适合密码存储：1) 太快——普通 GPU 每秒能算数十亿次 MD5，8 位数字密码几秒就破解 2) 碰撞——不同输入产生相同 MD5 值（已被证明可行）3) 彩虹表——常见密码的 MD5 值早被预先算好存成数据库，秒级反查。如果你看到项目代码里密码用 MD5 存储——这是严重安全漏洞，立即改。唯一保留用途：校验下载文件是否完整（非安全场景）。' },
    ],
    diagnosis: [
      { symptom: '下载文件后检查 MD5 和官网一致但文件内容错误', cause: 'MD5 已可被碰撞攻击——攻击者可以构造两个不同的文件具有相同的 MD5 值。', fix: '1) 使用 SHA-256 或 SHA-512 替代 MD5 做文件校验 2) 重要文件同时检查多个哈希（SHA256 + SHA512）3) MD5 仅用于非安全场景的快速完整性检查。' },
      { symptom: '数据库泄露后发现用户密码用 MD5 存储且大部分已破解', cause: 'MD5 设计为快——GPU 每秒可算数十亿次，弱密码分钟级破解。', fix: '1) 立即迁移到 bcrypt/argon2 2) 对已有用户：下次登录时自动用新算法重新哈希 3) 泄露的密码强制所有用户重置。' },
    ],
    exercises: [
      { level: '基础', task: '用自己的话解释为什么不能用 MD5 存储密码', hint: '两个原因：太快 + 彩虹表', answer: '1) MD5 计算太快，攻击者可以用 GPU 暴力破解尝试大量密码 2) 彩虹表（预计算常见密码的 MD5 值）可以秒级反查——你的密码"123456"的 MD5 值全世界都一样。' },
    ],
  },

  "kGTALrvCpxyVCXHRmkI7s": {
    mentalModel: 'scrypt 是"刻意变慢的密码哈希"——它不仅让算哈希很慢，还要求大量内存。普通攻击者可以用 GPU 堆算力，但很难堆内存——这就是 scrypt 的设计巧思。',
    sections: [
      { title: 'scrypt vs bcrypt vs argon2', content: '三者都是密码专用哈希，共同点：故意慢（防止暴力破解）、自带盐（防彩虹表）、可调节计算成本。区别：bcrypt 内存需求固定（4KB），scrypt 可调节内存使用（防硬件并行破解），argon2 是 2015 年密码哈希竞赛冠军且更灵活（三种模式：argon2d 防 GPU、argon2i 防旁路攻击、argon2id 混合）。推荐：优先用 argon2id（最新最强），其次 bcrypt 也是安全的。' },
    ],
    diagnosis: [
      { symptom: 'scrypt 哈希时内存占用极高，服务器出现 OOM', cause: 'scrypt 的 N（CPU/memory cost 参数）设置过高——N=16384 或更高时每次哈希消耗大量内存。', fix: '1) 降低 N 值到合理范围（N=4096 或 8192 对大多数场景足够）2) 监控哈希操作的内存使用，根据服务器配置调整 3) 如果用默认参数（N=32768），调低到 16384。' },
      { symptom: '使用 scrypt 后登录响应时间增加了 2 秒', cause: 'scrypt 的 cost 参数设置过高——为了安全牺牲了太多用户体验。', fix: '1) 目标哈希时间 200-500ms 即可——比 bcrypt (100ms) 稍慢但更安全 2) 调整 r 和 p 参数：r=8 p=1 是常用组合 3) 在安全性和性能之间找到平衡。' },
    ],
    exercises: [
      { level: '基础', task: '说出密码哈希算法"故意慢"的目的是什么', hint: '攻击者要试多少密码？', answer: '让每次密码哈希计算变慢（如 0.3 秒），这样攻击者暴力破解时每尝试一个密码就要等 0.3 秒，一秒只能试 3 个，破解百万级密码字典需要几十天。但用户登录时只算一次，0.3 秒完全可接受。' },
    ],
  },

  "dlG1bVkDmjI3PEGpkm1xH": {
    mentalModel: 'bcrypt 是密码存储的"黄金标准守门员"——用的人最多、被审计最久、各种语言库最成熟。选它不会错。每个密码加随机盐、故意放慢计算，让暴力破解成本从"几秒"变成"几万年"。',
    sections: [
      { title: 'bcrypt 使用指南', content: '存储：bcrypt.hash(password, 10) → $2b$10$...（cost factor = 10 表示迭代 2^10=1024 次）。验证：bcrypt.compare(input_password, stored_hash) → true/false。Cost factor 选择：10 是默认（~100ms），12 更安全（~400ms），14 以上登录会明显慢。注意：bcrypt 截断超过 72 字节的密码——如果你的系统允许长密码，先用 SHA-512 哈希一次再用 bcrypt，或用 argon2。' },
    ],
    diagnosis: [
      { symptom: 'bcrypt.compare() 总是返回 false 但密码输入正确', cause: '数据库密码字段长度不足——bcrypt 输出固定 60 字符，字段设了 VARCHAR(50) 被截断了。', fix: '1) 数据库密码字段至少 VARCHAR(60)（推荐 VARCHAR(255) 预留扩展）2) 确认存储的是 bcrypt.hash 原始输出未再加工 3) 字符编码保持 UTF-8。' },
      { symptom: 'bcrypt 验证时间突然暴增，登录接口超时', cause: 'cost factor 被错误配置为 16+——每次验证耗时超过 2 秒。', fix: '1) 生产环境 cost=10-12（100-400ms）2) 检查 config 中是否有误写（10 和 16 容易看错）3) cost 每增加 1 时间翻倍——慎重调整。' },
    ],
    exercises: [
      { level: '进阶', task: '写一个 bcrypt 的正确使用和错误使用对比', hint: '错误用法：自己加盐后再 bcrypt', answer: '正确：bcrypt.hash(password, 10)——库自动处理盐。错误：const salted = password + my_salt; bcrypt.hash(salted, 10)——重复加盐没有增加安全性，且自己管理的盐方案可能有问题。' },
    ],
  },

  "JVN38r5jENoteia3YeIQ3": {
    mentalModel: 'SHA 家族像一套"不同尺寸的密封罐"——SHA-256 是一升罐子（256 位输出），SHA-512 是两升罐子。但它们都是"快速哈希"——不适合密码，适合文件校验、数字签名、commit hash。',
    sections: [
      { title: 'SHA 的正确和错误用途', content: '正确：1) Git commit hash（SHA-1，正在迁移到 SHA-256）2) 文件完整性校验（sha256sum）3) 数字签名（证书/代码签名）4) JWT 签名（HMACSHA256）5) 区块链挖矿。错误：用 SHA-256 存密码——它设计为"快"，不防暴力破解。如果你要存密码：用 bcrypt/scrypt/argon2，不是 SHA。' },
    ],
    diagnosis: [
      { symptom: '用 SHA-256 存的密码被彩虹表秒破', cause: 'SHA-256 设计为快速计算——同样的输入永远产生同样的输出，彩虹表可预计算并反查常见密码。', fix: '1) 密码永远不要用 SHA 系列——用 bcrypt/scrypt/argon2 2) 如果已有 SHA 存储的密码，立即迁移方案 3) SHA 的正确用途：文件校验、数字签名、Git commit hash。' },
      { symptom: 'Git 仓库的 commit hash 碰撞导致两个不同 commit 有相同 SHA-1', cause: 'SHA-1 理论上存在碰撞——虽然 Git 中实际发生概率极低，但 Git 正在迁移到 SHA-256。', fix: '1) 了解这是理论风险，日常工作无需担忧 2) 关注 Git 的 SHA-256 迁移进展 3) 高安全项目使用 SHA-256 作为更强的替代。' },
    ],
    exercises: [
      { level: '基础', task: '用 sha256sum 计算一个文件的哈希，然后改动文件一个字符再算一次', hint: 'echo "hello" > test.txt && sha256sum test.txt', answer: 'echo "hello" > test.txt && sha256sum test.txt → 输出一个哈希值。改文件→再算→完全不同。这就是"雪崩效应"——微小输入变化导致完全不同的哈希输出。' },
    ],
  },

  "LU6WUbkWKbPM1rb2_gEqa": {
    mentalModel: 'CORS 是浏览器的"外交政策"——默认不和陌生人（跨域）共享资源，除非对方明确说"我允许"（Access-Control-Allow-Origin）。注意：这是浏览器强制执行的政策，不是服务器端的限制。',
    sections: [
      { title: 'CORS 的工作机制', content: '简单请求（GET/POST + 标准 Header）：浏览器直接发送请求，检查响应头 Access-Control-Allow-Origin 是否匹配当前域名。预检请求（PUT/DELETE/自定义 Header）：浏览器先发 OPTIONS 请求（Preflight）询问服务器"允许什么方法和头？"，服务器回复允许，浏览器再发真实请求。后端需要处理 OPTIONS 请求并返回正确的 CORS 头。' },
      { title: '常见 CORS 错误和修复', content: '错误：Access-Control-Allow-Origin: *（允许所有域名）——不能和 credentials: include 同时用。错误：只设置了 Allow-Origin 但忘了 Allow-Methods 和 Allow-Headers。修复工具：cors 中间件（Node.js 的 cors 包，Go 的 rs/cors）。生产环境：应明确列出允许的域名而不是用 *。' },
    ],
    diagnosis: [
      { symptom: '前端发 OPTIONS 预检请求返回 405 Method Not Allowed', cause: '后端没有处理 OPTIONS 请求——跨域的非简单请求（PUT/DELETE/自定义 Header）浏览器会先发 OPTIONS 询问权限。', fix: '1) 后端全局处理 OPTIONS 请求返回 204 + CORS 头 2) 或使用 cors 中间件自动处理 3) 确认 Allow-Methods 包含实际请求的方法。' },
      { symptom: '设置了 Access-Control-Allow-Origin: * 但请求还是 CORS 失败', cause: '可能同时设置了 credentials: include——CORS 规范禁止 credentials 模式与 Allow-Origin: * 共用。', fix: '1) 如果需要 credentials，Allow-Origin 必须指定具体域名 2) 同时设置 Allow-Credentials: true 3) 或去掉 credentials 使用 Allow-Origin: *。' },
    ],
    exercises: [
      { level: '基础', task: '解释：为什么 curl 能跨域成功但浏览器 fetch 不行？', hint: 'CORS 是谁在限制？', answer: 'CORS 是浏览器限制，curl 不是浏览器。curl 发送请求→服务器处理→返回响应，一切正常。浏览器发同样请求→服务器也返回了→但浏览器检查 CORS 头发现不允许→拦截响应不让你读。服务器其实已经处理了请求！' },
    ],
  },

  "HgQBde1zLUFtlwB66PR6_": {
    mentalModel: 'CSP（Content Security Policy）是给浏览器一张"白名单"——只允许加载名单上的 JS/CSS/图片/字体，任何不在名单上的来源都被拒绝。这让 XSS 攻击即使注入了代码也无法执行。',
    sections: [
      { title: 'CSP 的作用', content: 'CSP 通过 HTTP Header 设置：Content-Security-Policy: default-src \'self\'; script-src \'self\' \'unsafe-inline\'。这告诉浏览器：默认只加载本站资源，脚本只能来自本站和内联脚本。CSP 是"纵深防御"的一环——即使攻击者找到了 XSS 注入点注入了 <script> 标签，CSP 也会阻止它加载执行。注意：CSP 不能替代输入过滤，它是最后一道防线。' },
    ],
    diagnosis: [
      { symptom: '加了 CSP 后网站上所有第三方 JS 都不加载了', cause: 'CSP 默认阻止所有外部资源——没有显式允许的来源都被拦截。', fix: '1) 用 Content-Security-Policy-Report-Only 先观察不拦截 2) 逐步添加白名单：script-src self https://cdn.example.com 3) 查看浏览器 Console 中的 CSP violation 报告逐一放开。' },
      { symptom: '网站上内联 JavaScript 不执行了', cause: 'CSP 默认禁用内联脚本（inline script）——需要使用 nonce 或 hash 才能执行。', fix: '1) 给内联脚本加 nonce，CSP 头加对应的 nonce 值 2) 或把内联脚本移到外部 .js 文件 3) 不建议使用 unsafe-inline（会削弱 CSP 防护效果）。' },
    ],
    exercises: [
      { level: '基础', task: '检查任意网站的 CSP Header', hint: 'curl -I https://github.com 2>&1 | grep -i content-security', answer: 'curl -I https://github.com 可以看到 content-security-policy 头，包含一大堆规则。GitHub 作为大站 CSP 配置很严格。' },
    ],
  },

  // ============================================================
  // 70-74. TLS/OWASP/Server Security + Redis/Memcached/Server Side Cache
  // ============================================================
  "0v3OsaghJEGHeXX0c5kqn": {
    mentalModel: 'SSL/TLS 是互联网的"加密管道"——数据进去前是明文，在管道里变成密文，出来变回明文。管道外面的人只能看到有数据流过，看不到内容。TLS 是 SSL 的后继者（SSL 已不安全）。',
    sections: [
      { title: 'TLS 在后端的配置', content: 'Nginx 配置 TLS：listen 443 ssl; ssl_certificate /path/cert.pem; ssl_certificate_key /path/key.pem。关键安全配置：1) 只启用 TLS 1.2 和 1.3（禁用 SSLv3/TLS 1.0/1.1）2) 禁用弱加密套件（如 RC4/3DES）3) 启用 HSTS（Strict-Transport-Security）强制浏览器只用 HTTPS。工具：Mozilla SSL Configuration Generator 自动生成安全配置。测试：SSL Labs (ssllabs.com) 给你的网站评分。' },
    ],
    diagnosis: [
      { symptom: 'SSL Labs 评分显示 B 级，因为启用了 TLS 1.0/1.1', cause: 'Nginx 配置中未禁用旧版 TLS——ssl_protocols 包含了 TLSv1 和 TLSv1.1。', fix: '1) Nginx 配置：ssl_protocols TLSv1.2 TLSv1.3 2) 禁用弱加密套件 3) 用 Mozilla SSL Configuration Generator 生成推荐配置。' },
      { symptom: '用户反馈浏览器显示时钟不正确的证书错误', cause: '服务器时间严重偏离（如比正确时间早/晚几个月），证书的有效期检查失败。', fix: '1) 检查服务器时间：date 命令 2) 配置 NTP 时间同步：systemctl enable chronyd 3) 确认时区设置正确。' },
    ],
    exercises: [
      { level: '基础', task: '用 openssl 查看一个网站的 TLS 证书有效期', hint: 'openssl s_client -connect 域名:443 </dev/null 2>/dev/null | openssl x509 -noout -dates', answer: 'openssl s_client -connect example.com:443 </dev/null 2>/dev/null | openssl x509 -noout -dates 输出 notBefore（签发日期）和 notAfter（过期日期）。' },
    ],
  },

  "AAgciyxuDvS2B_c6FRMvT": {
    mentalModel: 'OWASP Top 10 是 Web 安全的"十大通缉犯名单"——每年更新的最常见最危险的 Web 漏洞列表。每个后端开发者都应该能认出这 10 个威胁。',
    sections: [
      { title: 'OWASP Top 10 2021', content: 'A1 访问控制失效（IDOR/越权）A2 加密失败（明文传输/弱哈希）A3 注入（SQL/XSS/命令注入）A4 不安全设计（架构层面安全缺陷）A5 安全配置错误（默认密码/暴露调试端点）A6 易受攻击和过时的组件（log4shell！）A7 认证与授权失效（弱密码策略/无 MFA）A8 软件和数据完整性失效（CI/CD 供应链攻击）A9 安全日志和监控失效（被入侵了几个月才发现）A10 SSRF（服务端请求伪造——后端替攻击者访问内网）。作为后端，前三项必须深入理解。' },
    ],
    diagnosis: [
      { symptom: '用户 A 把 URL 中的 orderId=123 改成 124，看到了别人的订单', cause: 'IDOR（不安全的直接对象引用）——OWASP API Security Top 10 排名第一的漏洞。接口没有校验请求资源是否属于当前用户。', fix: '1) 查询时加 user_id 条件：WHERE id = ? AND user_id = currentUserId 2) 中间件层统一注入当前用户 ID 3) 资源 ID 用 UUID 而非自增 ID，降低被枚举的风险。' },
      { symptom: 'Log4Shell 漏洞影响了从未直接使用 log4j 的系统', cause: '间接依赖——通过第三方库传递依赖了存在漏洞的 log4j 版本。', fix: '1) 用依赖扫描工具（OWASP Dependency-Check/Snyk）检查传递依赖 2) 定期更新所有依赖到安全版本 3) 关注关键组件的安全公告。' },
    ],
    exercises: [
      { level: '基础', task: '说出 OWASP Top 10 中排名第一的漏洞是什么', hint: '权限相关', answer: 'A1 访问控制失效（Broken Access Control）。最常见表现：IDOR——修改 URL 中的 ID 就能看到别人的数据（如 /api/orders/123 改成 /api/orders/124）。' },
    ],
  },

  "TZ0BWOENPv6pQm8qYB8Ow": {
    mentalModel: '服务器安全不为"攻不破"，而为"让攻击成本大于收益"——就像你家不用装银行金库门，只要锁比邻居好、有摄像头、有狗，小偷就选别人了。',
    sections: [
      { title: '服务器安全基础', content: '1) SSH 安全：禁用密码登录（只允许 SSH Key）、改默认端口（22→2222减少扫描）、fail2ban 防暴力破解 2) 防火墙：只开放必要的端口（80/443 + SSH），云服务器用安全组 3) 最小权限：不用 root 跑应用，每个应用有独立用户和权限 4) 自动更新安全补丁（unattended-upgrades）5) 日志审计：/var/log/auth.log 和 /var/log/syslog 定期检查 6) Secrets 管理：数据库密码/API Key 用环境变量或 Vault，不进代码仓库。' },
    ],
    diagnosis: [
      { symptom: 'SSH 日志里每天有几万次来自陌生 IP 的登录失败记录', cause: 'SSH 端口暴露在公网——自动化脚本在扫描全网 SSH 端口尝试弱密码登录。', fix: '1) 禁止密码登录：PasswordAuthentication no 2) 改 SSH 端口减少扫描量 3) 安装 fail2ban 自动封禁 4) 用 SSH Key 登录。' },
      { symptom: '用 root 用户运行的 Web 应用被入侵后整台服务器被控制', cause: '没有遵循最小权限原则——应用进程用 root 权限运行，攻击者拿到应用权限就等于拿到 root 权限。', fix: '1) 为每个应用创建独立用户运行 2) 目录权限只给必要的 3) 数据库账号只给 SELECT/INSERT/UPDATE/DELETE，不给 DDL 权限。' },
    ],
    exercises: [
      { level: '基础', task: '列出部署一台生产服务器必须做的最小安全配置', hint: 'SSH/防火墙/用户/日志', answer: '1) 禁用 SSH 密码登录 2) 配置防火墙只开放 80/443/SSH 端口 3) 新建非 root 用户运行应用 4) 开启自动安全更新 5) 配置 fail2ban 防暴力破解。' },
    ],
  },

  "M0iaSSdVPWaCUpyTG50Vf": {
    mentalModel: 'Redis 是后端工具包里"最快的工具"——数据全在内存里，读写微秒级。用作缓存、分布式锁、消息队列、计数器都有出色表现。它像后端的"前台助手"——把最常用的东西放在触手可及的地方。',
    sections: [
      { title: 'Redis 在后端架构中的角色', content: '1) 缓存层：数据库前挡一层，热点数据从 Redis 读（命中率 90%+）2) Session 存储：集中存用户登录状态，所有服务器共享 3) 分布式锁：SETNX + 过期时间，协调多服务对共享资源的访问 4) 计数器/排行榜：INCR/ZADD，原子操作保证并发安全 5) 消息队列：LIST + BRPOP/BRPOPLPUSH，轻量级任务队列 6) Pub/Sub：实时通知。对于后端，Redis 是学完数据库之后的第一个"基础设施组件"。' },
    ],
    handsOn: [
      { title: 'Docker 启动 Redis 并测试', cmd: 'docker run -d --name redis-test -p 6379:6379 redis:7-alpine && redis-cli SET mykey "hello" && redis-cli GET mykey', output: 'OK\n"hello"', explain: 'Redis 默认端口 6379。SET/GET 是最基本操作。redis-cli 是命令行客户端。' },
    ],
    diagnosis: [
      { symptom: 'Redis 内存满了但设置了 maxmemory-policy noeviction，所有写操作失败', cause: 'Redis 内存达到 maxmemory 上限后，noeviction 策略直接拒绝所有写请求。', fix: '1) 改用合适的淘汰策略：allkeys-lru（淘汰最久未使用的 key）或 volatile-lru 2) 增大 maxmemory 或加 Redis 节点 3) 监控内存使用设置告警。' },
      { symptom: '应用重启后之前缓存的数据全丢了', cause: 'Redis 默认不持久化——重启后数据丢失。如果是纯缓存场景可接受，但如果 Redis 被用于存储重要数据则不可接受。', fix: '1) 纯缓存场景：避免在 Redis 中存不可再生的数据 2) 需要持久化时：开启 RDB（snapshot）或 AOF 持久化 3) 重要数据同时写数据库和 Redis。' },
    ],
    exercises: [
      { level: '基础', task: '用 Redis 的 INCR 命令实现一个简单的访问计数器', hint: 'INCR page:home:views', answer: 'redis-cli INCR page:home:views 每次返回 +1 后的新值。INCR 是原子操作——并发环境下不会出现计数错误。' },
    ],
  },

  "g8GjkJAhvnSxXTZks0V1g": {
    mentalModel: 'Redis 除了做缓存，还有一个重要身份——"分布式系统协调者"。多个服务实例通过 Redis 来协商"谁干活"（分布式锁）、"活干完了没"（队列）、"系统现在什么状态"（Pub/Sub）。',
    sections: [
      { title: 'Redis 分布式锁', content: '用 SET resource_name random_value NX EX 30 实现分布式锁。NX：只在 key 不存在时设置（抢锁），EX 30：30 秒自动过期（死锁保护）。释放锁用 Lua 脚本（先检查 value 是否匹配，再删除——防止误删别人的锁）。Redlock 算法：在多台 Redis 实例上加锁，过半数成功才算拿到锁（更可靠但更复杂，适合高安全场景）。' },
    ],
    diagnosis: [
      { symptom: '分布式锁偶尔失效，两个进程同时拿到了锁', cause: 'SETNX + EXPIRE 的经典竞态——在 SETNX 和 EXPIRE 之间进程崩溃或网络延迟，锁没有设置过期时间变成了死锁。', fix: '1) 使用 SET key value NX EX 30 一条命令完成（Redis 2.6.12+ 支持原子操作）2) 释放锁用 Lua 脚本（先比较 value 再删除）3) 用 Redlock 算法多实例加锁提高可靠性。' },
      { symptom: 'Redis 分布式锁的过期时间到了但业务还没处理完，锁被释放', cause: '锁过期时间和业务处理时间不匹配——锁过期了业务还在跑，另一个进程拿到锁开始执行。', fix: '1) 锁过期时间设得足够长（如业务最大耗时 x 2）2) 实现锁续期机制（watchdog）：业务没完成定期延长锁 3) 用 Redisson 等成熟的分布式锁实现。' },
    ],
    exercises: [
      { level: '进阶', task: '说明 Redis 分布式锁必须用 Lua 脚本释放的原因', hint: '如果分两步：先 GET 再 DEL，中间可能出什么问题？', answer: '如果 A 拿到锁，检查 value 匹配，但在 DEL 之前锁过期了→B 拿到了锁→A 的 DEL 删掉了 B 的锁。Lua 脚本在 Redis 内部原子执行，GET+DEL 一步完成，不会有这个问题。' },
    ],
  },

  "xPvVwGQw28uMeLYIWn8yn": {
    mentalModel: 'Memcached 是比 Redis 更"纯粹"的缓存系统——只有一个功能：把数据存内存里，过期的自动丢掉。没有持久化、没有复杂数据结构、没有分布式集群。就是一盒"高速便签纸"。',
    sections: [
      { title: 'Memcached vs Redis', content: 'Memcached 优势：1) 多线程——多核 CPU 利用更好 2) 内存管理简单——不会出现 Redis 的内存碎片问题 3) 极其简单——运维成本低。Redis 优势：1) 数据结构丰富（Hash/List/Set/Sorted Set）2) 持久化（RDB/AOF）3) 主从复制+集群 4) 功能多（Pub/Sub/Lua 脚本）。选择：如果只做简单 KV 缓存且追求极致简单→Memcached。其他所有场景→Redis。现在新项目基本都选 Redis。' },
    ],
    diagnosis: [
      { symptom: 'Memcached 重启后整个网站性能暴跌，数据库被打爆', cause: 'Memcached 重启后缓存全部清空（它不做持久化），所有请求直接打到数据库——缓存雪崩。', fix: '1) 预热缓存：启动后用脚本把热点数据加载到 Memcached 2) 多台 Memcached 实例，不一起重启 3) 应用层加并发控制（互斥锁保护数据库）。' },
      { symptom: 'Memcached 上存储的值突然变小或读取乱码', cause: 'Memcached 默认 value 上限 1MB，存入的数据超过了上限被截断。', fix: '1) 启动时调整 -I 参数增大 value 上限（如 -I 16m）2) 大数据分块存储：多个 key 分别存 3) 考虑用 Redis（数据上限 512MB）处理大数据。' },
    ],
    exercises: [
      { level: '基础', task: '说出一个场景更适合用 Memcached 而不是 Redis', hint: '多核利用', answer: '多线程大并发纯缓存场景——如 CDN 边缘缓存、高流量网站的简单 KV 缓存。Memcached 多线程架构在多核 CPU 上能比单线程 Redis 利用更多 CPU 资源。但实际情况是新项目很少选 Memcached。' },
    ],
  },

  "KrMr6qlHG_ZDpKTIYAHAS": {
    mentalModel: '服务端缓存是一个"分层金字塔"——浏览器缓存（最快最近）→ CDN 缓存（边缘节点）→ 应用缓存（Redis/Memcached）→ 数据库缓存（Buffer Pool）→ 磁盘（最慢）。每一层都在为下一层挡刀。',
    sections: [
      { title: '缓存层级策略', content: '1) 浏览器缓存（Cache-Control/ETag）：静态资源 2) CDN 缓存：全球边缘节点加速 3) 反向代理缓存（Nginx proxy_cache）：整页缓存 4) 应用缓存（Redis）：API 响应/数据库查询结果/计算结果 5) ORM 缓存（Hibernate L2 Cache）：对象缓存 6) 数据库缓存（Buffer Pool）：热数据常驻内存。后端开发者主要管理 3-5 层。关键原则：离用户越近缓存效果越好，但一致性越难保证。' },
    ],
    diagnosis: [
      { symptom: 'CDN 缓存了用户个人信息页面，用户 B 看到了用户 A 的页面', cause: 'CDN 不应该缓存个性化内容——返回了 Cache-Control: public 而页面包含用户私有数据。', fix: '1) 包含用户数据/需认证的页面用 Cache-Control: private, no-store 2) CDN 配置 URL 规则排除 /user/* 和个人化路径 3) 使用 Vary: Cookie 头让 CDN 区分已登录/未登录用户。' },
      { symptom: '缓存时间到了但用户还是看到旧版本', cause: '多层缓存逐层失效时间不一致——CDN 缓存已清除但浏览器缓存还在、或反向代理缓存还在。', fix: '1) 部署时统一 Purge：CDN -> Nginx -> 浏览器（用版本号/Cache-Busting URL）2) 静态资源用 filename.contenthash.js 确保新版本被加载 3) HTML 页面设 Cache-Control: no-cache（每次验证）。' },
    ],
    exercises: [
      { level: '进阶', task: '设计一个"商品详情页"的缓存策略，要求：1) 页面加载快 2) 价格变化 1 分钟内生效 3) 能抗住秒杀流量', hint: 'CDN + Redis + 被动失效', answer: '1) CDN 缓存页面 60s（Cache-Control: public, max-age=60）2) 应用层 Redis 缓存商品数据 3) 修改价格时更新 DB + 删除 Redis 缓存 + CDN purge API 清除 CDN 缓存。秒杀时大部分流量在 CDN 和 Redis 层就返回了，数据库几乎无压力。' },
    ],
  },
};