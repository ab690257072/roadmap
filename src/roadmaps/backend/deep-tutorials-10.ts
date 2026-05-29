import type { DeepTutorial } from '../deep-types';

export const BACKEND_DEEP_TUTORIALS_10: Record<string, DeepTutorial> = {
  // Final batch: 测试/实时/NoSQL/部署/API安全补充节点
  "3OYm6b9f6WOrKi4KTOZYK": {
    mentalModel: '单元测试是"零件质检"——每个函数/方法单独测，确保基本单元正确。集成测试是"组装验证"——多个零件组装起来后能协同工作。后端测试金字塔：底层大量单元测试（快，便宜），中层适量集成测试，顶层少量 E2E 测试（慢，贵）。',
    sections: [
      { title: '单元测试原则', content: '1) 测行为不是实现——改实现不应该破坏测试 2) Mock 外部依赖（数据库/API）3) 测试边界和异常不光是 happy path 4) 测试名描述场景：test_order_total_with_zero_quantity_should_return_zero。Node.js: Jest/Vitest。Python: pytest。Go: testing 标准库。Java: JUnit。' },
    ],
    diagnosis: [
      { symptom: '单元测试通过了但集成测试失败——mock 数据和真实数据行为不一致', cause: 'Mock 的返回值不符合真实服务的实际行为——mock 返回了从不返回的空值。', fix: '1) Mock 时参考真实 API 文档/行为设置返回值 2) 定期用 Contract Test（Pact）验证 mock 和真实服务的契约一致 3) 关键路径必须有集成测试。' },
      { symptom: '测试全绿但部署后功能不正常——测试数据太理想', cause: '测试只覆盖了 happy path——正常输入/正常顺序，没有测异常和边界。', fix: '1) 测试必须包含：空值/null/边界值/并发/超时/错误返回 2) 用 fuzzing 生成随机输入测边缘 case 3) 每个 PR 的测试用例评审和代码一样重要。' },
    ],
    exercises: [
      { level: '基础', task: '写一个单元测试来验证"订单总价 = 单价 × 数量 - 折扣"', hint: '测试 3 种场景：正常/零/负数', answer: 'test("2件×100元-10元折扣=190元", calcTotal(100, 2, 10) == 190); test("0件=返回0", calcTotal(100, 0, 0) == 0); test("负数数量抛异常", throws(() => calcTotal(100, -1, 0)));' },
    ],
  },
  "qdvDOpBG4DByI4ZABVzsl": {
    mentalModel: '实时数据库（Realtime DB）是"即时同步"——数据变化后所有订阅的客户端毫秒级收到更新。适合聊天/协作编辑/实时看板/游戏状态。Firebase Realtime DB 和 Supabase Realtime 是代表。',
    sections: [
      { title: 'Realtime DB 的工作原理', content: 'Firebase：客户端直连数据库（NoSQL JSON 树），数据变→所有订阅者收到推送。Supabase Realtime：基于 PG 的逻辑复制+WebSocket。订阅表变更：const channel = supabase.channel("db-changes").on("postgres_changes", {event:"*", schema:"public", table:"orders"}, callback).subscribe()。PG 原生的 LISTEN/NOTIFY 也能做实时通知：LISTEN order_channel; NOTIFY order_channel, \'new_order\';' },
    ],
    diagnosis: [
      { symptom: 'Supabase Realtime 订阅了表变更但收到了不属于自己的数据', cause: 'RLS（Row Level Security）配置不正确——订阅时没有按用户过滤。', fix: '1) 表开启 RLS：ALTER TABLE orders ENABLE ROW LEVEL SECURITY 2) 创建 Policy：CREATE POLICY user_orders ON orders FOR SELECT USING (user_id = auth.uid()) 3) Supabase 客户端用认证后的连接订阅。' },
      { symptom: 'PG LISTEN/NOTIFY 通知太多导致客户端处理不过来', cause: 'NOTIFY 没有限流——每次数据库变更都发通知，高频场景下通知风暴。', fix: '1) 批量化：积累 N 个变更或 M 毫秒后才发一次 NOTIFY 2) payload 中带变更类型+受影响 ID，客户端按需拉取 3) 对不需要实时通知的变更不发 NOTIFY。' },
    ],
    exercises: [
      { level: '基础', task: '用 PG 的 LISTEN/NOTIFY 实现一个简单的实时通知', hint: 'LISTEN channel; NOTIFY channel, payload;', answer: 'Session 1: LISTEN mychan; Session 2: NOTIFY mychan, \'hello\'; Session 1 立即收到通知。这个功能可以做"数据库变更→应用收到通知→推送给用户"。' },
    ],
  },
  "NAGisfq2CgeK3SsuRjnMw": {
    mentalModel: '功能测试是从"用户视角"验证系统——模拟真实用户操作完整流程。不是测"登录函数返回值对不对"而是测"用户能不能成功登录"。',
    sections: [
      { title: '功能测试在测试金字塔的位置', content: '功能测试在金字塔顶部（E2E 测试的一种）。相比单元测试：1) 覆盖完整流程（注册→登录→下单→支付）2) 验证真实用户场景 3) 更慢（真实浏览器/HTTP 请求）4) 更难维护（依赖测试环境数据）。工具：Playwright/Cypress（浏览器端）、Postman/Newman（API 端）、k6/Artillery（负载测试）。后端主要做 API 级别的功能测试——用 HTTP 客户端发请求验证响应。' },
    ],
    diagnosis: [
      { symptom: 'E2E 测试在 CI 中随机失败，本地跑又正常（flaky test）', cause: '测试依赖了不稳定因素——时间、网络、异步操作、数据竞态。', fix: '1) 找出 flaky 根因：检查 async 等待、时间依赖、数据清理 2) 加显式 wait 条件（waitForSelector）而非 sleep(2000) 3) CI 中 retry flaky test 1-2 次并标记后续排查。' },
      { symptom: 'API 功能测试数据污染了生产环境——测试请求创建了真实订单', cause: '测试环境配置错误——功能测试跑在了生产环境的 URL 上。', fix: '1) 测试环境和生产用不同的配置文件/环境变量 2) 测试数据加标记（如 test=true）便于清理 3) 生产 API Key 和测试 API Key 严格隔离。' },
    ],
    exercises: [
      { level: '基础', task: '为 REST API 设计一个功能测试：用户注册→登录→获取个人信息', hint: '三步链式调用', answer: '1) POST /register {name,email,password} → 201 2) POST /login {email,password} → 200 + token 3) GET /me Header: Authorization: Bearer {token} → 200 + user data。每个步骤的返回值作为下一步的输入。' },
    ],
  },
};
