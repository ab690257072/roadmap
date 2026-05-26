import { excalidrawArrow, excalidrawBox, excalidrawScene, excalidrawText } from '../excalidraw-helpers';
import type { TeachingLesson } from '../teaching-types';

type PgDiagramKind = 'relation' | 'compare' | 'keyword' | 'datatype' | 'syntax' | 'ddl' | 'dml' | 'select' | 'insert' | 'delete' | 'update' | 'truncate' | 'drop' | 'aggregate' | 'key' | 'group' | 'order' | 'having' | 'constraint' | 'subquery' | 'join' | 'function' | 'string' | 'date' | 'view' | 'index' | 'transaction' | 'security' | 'window' | 'cte' | 'optimizer' | 'pivot' | 'dynamic' | 'backup' | 'replication' | 'vacuum' | 'wal' | 'monitor' | 'admin' | 'extension' | 'deploy';

type PgSpec = {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  scene: string;
  core: string;
  metaphor: string;
  mistake: string;
  confusion: string;
  experiment: string;
  command: string;
  subject: string;
  action: string;
  result: string;
  risk: string;
  diagram: PgDiagramKind;
  route: TeachingLesson['route'];
};

const palette = { blue: '#e7f5ff', yellow: '#fff3bf', green: '#d3f9d8', purple: '#f3d9fa', red: '#ffe3e3', cyan: '#d0ebff' };

function pgDiagram(spec: PgSpec): string {
  const title = spec.label.length > 24 ? spec.label : spec.heading.split('：')[0];
  const command = spec.command;
  const subject = spec.subject;
  const result = spec.result;
  const risk = spec.risk;

  switch (spec.diagram) {
    case 'relation':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 72, 18, title + '：表不是孤岛', 25, 640),
        excalidrawBox(spec.id + '-users', 64, 98, 170, 156, palette.blue),
        excalidrawText(spec.id + '-users-t', 92, 126, 'users 表\nid PK\nname\nemail', 16, 112),
        excalidrawBox(spec.id + '-orders', 510, 98, 190, 156, palette.green),
        excalidrawText(spec.id + '-orders-t', 538, 126, 'orders 表\nid PK\nuser_id FK\namount', 16, 126),
        excalidrawBox(spec.id + '-link', 314, 142, 120, 72, palette.yellow),
        excalidrawText(spec.id + '-link-t', 338, 164, '外键\n建立关系', 16, 76),
        excalidrawArrow(spec.id + '-a1', 240, 176, 68, 0),
        excalidrawArrow(spec.id + '-a2', 440, 176, 64, 0),
        excalidrawText(spec.id + '-note', 110, 320, '关系型数据库靠键把不同表的业务事实连起来', 18, 520),
      ]);
    case 'compare':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 78, 18, title + '：先看取舍', 25, 620),
        excalidrawBox(spec.id + '-sql', 70, 98, 230, 190, palette.blue),
        excalidrawText(spec.id + '-sql-t', 106, 128, 'SQL / RDBMS\n固定 schema\nJOIN\n事务强', 17, 150),
        excalidrawBox(spec.id + '-nosql', 460, 98, 230, 190, palette.yellow),
        excalidrawText(spec.id + '-nosql-t', 496, 128, 'NoSQL / 其他模型\n灵活结构\n按访问模式建模\n扩展取舍', 17, 150),
        excalidrawArrow(spec.id + '-a1', 306, 188, 148, 0),
        excalidrawText(spec.id + '-note', 128, 330, '不是谁替代谁，而是数据形状和一致性要求不同', 18, 500),
      ]);
    case 'keyword':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：关键字像查询句子的骨架', 25, 620),
        ...['SELECT','FROM','WHERE','GROUP','ORDER'].map((word, i) => [
          excalidrawBox(spec.id + '-kw-' + i, 56 + i * 138, 140, 112, 74, i % 2 ? palette.yellow : palette.blue),
          excalidrawText(spec.id + '-kw-t-' + i, 78 + i * 138, 162, word, 18, 72),
        ]).flat(),
        excalidrawText(spec.id + '-note', 106, 304, command + '：先读每个关键字在句子里负责什么', 18, 540),
      ]);
    case 'datatype':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 72, 18, title + '：类型决定能存什么和怎么算', 25, 640),
        excalidrawBox(spec.id + '-int', 68, 108, 138, 84, palette.blue),
        excalidrawText(spec.id + '-int-t', 92, 132, '数字\nINT/DECIMAL', 16, 90),
        excalidrawBox(spec.id + '-str', 236, 108, 138, 84, palette.yellow),
        excalidrawText(spec.id + '-str-t', 260, 132, '文本\nVARCHAR', 16, 90),
        excalidrawBox(spec.id + '-date', 404, 108, 138, 84, palette.green),
        excalidrawText(spec.id + '-date-t', 428, 132, '日期\nDATE/TIME', 16, 90),
        excalidrawBox(spec.id + '-null', 572, 108, 138, 84, palette.red),
        excalidrawText(spec.id + '-null-t', 596, 132, '空值\nNULL', 16, 90),
        excalidrawBox(spec.id + '-risk', 248, 276, 278, 70, palette.purple),
        excalidrawText(spec.id + '-risk-t', 286, 298, '类型错会影响比较、排序和精度', 16, 200),
      ]);
    case 'syntax':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 74, 18, title + '：查询先按语义分层', 25, 640),
        excalidrawBox(spec.id + '-select', 56, 126, 128, 82, palette.blue),
        excalidrawText(spec.id + '-select-t', 78, 150, 'SELECT\n要哪些列', 16, 84),
        excalidrawBox(spec.id + '-from', 228, 126, 128, 82, palette.yellow),
        excalidrawText(spec.id + '-from-t', 250, 150, 'FROM\n从哪来', 16, 84),
        excalidrawBox(spec.id + '-where', 400, 126, 128, 82, palette.green),
        excalidrawText(spec.id + '-where-t', 422, 150, 'WHERE\n筛哪些行', 16, 84),
        excalidrawBox(spec.id + '-result', 572, 126, 128, 82, palette.purple),
        excalidrawText(spec.id + '-result-t', 594, 150, '结果集\n行与列', 16, 84),
        excalidrawArrow(spec.id + '-a1', 190, 166, 32, 0),
        excalidrawArrow(spec.id + '-a2', 362, 166, 32, 0),
        excalidrawArrow(spec.id + '-a3', 534, 166, 32, 0),
        excalidrawText(spec.id + '-note', 112, 314, command, 18, 520),
      ]);
    case 'ddl':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：先搭货架，再放数据', 25, 620),
        excalidrawBox(spec.id + '-blueprint', 60, 102, 170, 126, palette.blue),
        excalidrawText(spec.id + '-blueprint-t', 88, 132, '表设计\n列/类型\n约束', 16, 114),
        excalidrawBox(spec.id + '-cmd', 302, 86, 174, 158, palette.yellow),
        excalidrawText(spec.id + '-cmd-t', 330, 116, command + '\n改变结构', 16, 118),
        excalidrawBox(spec.id + '-table', 552, 102, 166, 126, palette.green),
        excalidrawText(spec.id + '-table-t', 580, 132, '数据库对象\n表/列/索引\n可被查询', 16, 110),
        excalidrawArrow(spec.id + '-a1', 236, 164, 60, 0),
        excalidrawArrow(spec.id + '-a2', 482, 164, 64, 0),
        excalidrawText(spec.id + '-note', 112, 326, 'DDL 改结构，影响面通常大于普通查询', 18, 500),
      ]);
    case 'dml':
    case 'insert':
    case 'update':
    case 'delete':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：先确认行，再改数据', 25, 620),
        excalidrawBox(spec.id + '-before', 54, 104, 166, 132, palette.blue),
        excalidrawText(spec.id + '-before-t', 82, 132, '目标行\n先 SELECT\n确认 WHERE', 16, 110),
        excalidrawBox(spec.id + '-change', 304, 86, 176, 168, palette.yellow),
        excalidrawText(spec.id + '-change-t', 332, 116, command + '\n改变表中数据', 16, 120),
        excalidrawBox(spec.id + '-after', 562, 104, 154, 132, palette.green),
        excalidrawText(spec.id + '-after-t', 588, 132, '影响行数\n复查结果\n必要时提交', 16, 100),
        excalidrawArrow(spec.id + '-a1', 226, 170, 72, 0),
        excalidrawArrow(spec.id + '-a2', 486, 170, 70, 0),
        excalidrawBox(spec.id + '-risk', 270, 306, 238, 58, palette.red),
        excalidrawText(spec.id + '-risk-t', 306, 322, risk, 15, 166),
      ]);
    case 'truncate':
    case 'drop':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 72, 18, title + '：危险操作要先停手确认', 25, 640),
        excalidrawBox(spec.id + '-table', 70, 110, 190, 154, palette.blue),
        excalidrawText(spec.id + '-table-t', 100, 140, '目标表\n数据/结构\n依赖对象', 17, 126),
        excalidrawBox(spec.id + '-danger', 324, 86, 168, 202, palette.red),
        excalidrawText(spec.id + '-danger-t', 354, 120, command + '\n不可随手跑\n先备份\n看权限', 16, 108),
        excalidrawBox(spec.id + '-result', 558, 110, 160, 154, palette.yellow),
        excalidrawText(spec.id + '-result-t', 586, 140, '结果\n清空数据\n或删除对象', 17, 104),
        excalidrawArrow(spec.id + '-a1', 266, 184, 52, 0),
        excalidrawArrow(spec.id + '-a2', 498, 184, 54, 0),
      ]);
    case 'aggregate':
    case 'group':
    case 'order':
    case 'having':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：从明细到指标', 25, 620),
        excalidrawBox(spec.id + '-rows', 52, 92, 170, 180, palette.blue),
        excalidrawText(spec.id + '-rows-t', 82, 122, '明细行\n订单1 100\n订单2 80\n订单3 20', 15, 110),
        excalidrawBox(spec.id + '-group', 306, 118, 160, 126, palette.yellow),
        excalidrawText(spec.id + '-group-t', 334, 146, command + '\n按粒度分组', 16, 104),
        excalidrawBox(spec.id + '-metric', 552, 118, 166, 126, palette.green),
        excalidrawText(spec.id + '-metric-t', 582, 146, '指标结果\n计数/求和\n排序/筛组', 16, 110),
        excalidrawArrow(spec.id + '-a1', 228, 180, 72, 0),
        excalidrawArrow(spec.id + '-a2', 472, 180, 74, 0),
        excalidrawText(spec.id + '-note', 116, 330, '聚合最先确认粒度：一行结果代表什么', 18, 500),
      ]);
    case 'key':
    case 'constraint':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：规则挡在入库前', 25, 620),
        excalidrawBox(spec.id + '-input', 54, 128, 150, 92, palette.blue),
        excalidrawText(spec.id + '-input-t', 80, 154, '待写入行\n应用/脚本', 16, 98),
        excalidrawBox(spec.id + '-gate', 304, 82, 178, 184, palette.yellow),
        excalidrawText(spec.id + '-gate-t', 334, 112, command + '\n唯一/非空\n主外键\n检查条件', 16, 118),
        excalidrawBox(spec.id + '-ok', 572, 92, 138, 76, palette.green),
        excalidrawText(spec.id + '-ok-t', 596, 114, '通过\n写入表', 16, 86),
        excalidrawBox(spec.id + '-bad', 572, 230, 138, 76, palette.red),
        excalidrawText(spec.id + '-bad-t', 596, 252, '拒绝\n返回错误', 16, 86),
        excalidrawArrow(spec.id + '-a1', 210, 172, 88, 0),
        excalidrawArrow(spec.id + '-a2', 488, 130, 78, -4),
        excalidrawArrow(spec.id + '-a3', 488, 218, 78, 48, '#e8590c'),
      ]);
    case 'subquery':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 74, 18, title + '：内层先给答案', 25, 640),
        excalidrawBox(spec.id + '-inner', 112, 118, 190, 130, palette.yellow),
        excalidrawText(spec.id + '-inner-t', 142, 146, '内层查询\n' + command + '\n产出中间结果', 16, 126),
        excalidrawBox(spec.id + '-outer', 458, 92, 220, 182, palette.blue),
        excalidrawText(spec.id + '-outer-t', 492, 122, '外层查询\n消费内层结果\n过滤/派生/比较', 16, 146),
        excalidrawArrow(spec.id + '-a1', 308, 182, 144, 0),
        excalidrawText(spec.id + '-note', 120, 330, '先确认子查询返回一个值、一列、一行还是一张表', 18, 520),
      ]);
    case 'join':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 74, 18, title + '：按键把两张表对上', 25, 640),
        excalidrawBox(spec.id + '-left', 58, 104, 190, 156, palette.blue),
        excalidrawText(spec.id + '-left-t', 88, 132, '左表 A\nid\nname\n...', 16, 126),
        excalidrawBox(spec.id + '-on', 310, 130, 154, 94, palette.yellow),
        excalidrawText(spec.id + '-on-t', 338, 154, command + '\nON key = key', 16, 98),
        excalidrawBox(spec.id + '-right', 526, 104, 190, 156, palette.green),
        excalidrawText(spec.id + '-right-t', 556, 132, '右表 B\na_id\namount\n...', 16, 126),
        excalidrawArrow(spec.id + '-a1', 254, 178, 50, 0),
        excalidrawArrow(spec.id + '-a2', 470, 178, 50, 0),
        excalidrawText(spec.id + '-note', 104, 326, 'JOIN 的成败主要看连接键和保留哪边数据', 18, 520),
      ]);
    case 'function':
    case 'string':
    case 'date':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：值进工具箱，结果出来', 25, 620),
        excalidrawBox(spec.id + '-input', 58, 124, 150, 94, palette.blue),
        excalidrawText(spec.id + '-input-t', 84, 150, '输入值\n数字/文本\n日期/NULL', 16, 98),
        excalidrawBox(spec.id + '-fn', 306, 88, 178, 166, palette.yellow),
        excalidrawText(spec.id + '-fn-t', 336, 118, command + '\n转换/计算\n格式化', 16, 118),
        excalidrawBox(spec.id + '-out', 572, 124, 146, 94, palette.green),
        excalidrawText(spec.id + '-out-t', 598, 150, '输出值\n可展示\n可比较', 16, 94),
        excalidrawArrow(spec.id + '-a1', 214, 170, 86, 0),
        excalidrawArrow(spec.id + '-a2', 490, 170, 76, 0),
        excalidrawText(spec.id + '-note', 112, 322, '函数好用，但 WHERE 里乱套函数可能让索引失效', 18, 530),
      ]);
    case 'view':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：视图是保存好的查询窗口', 25, 620),
        excalidrawBox(spec.id + '-tables', 54, 108, 170, 126, palette.blue),
        excalidrawText(spec.id + '-tables-t', 84, 138, '底层表\nusers\norders', 16, 110),
        excalidrawBox(spec.id + '-view', 306, 82, 180, 178, palette.yellow),
        excalidrawText(spec.id + '-view-t', 336, 112, command + '\n封装 SELECT\n命名复用', 16, 120),
        excalidrawBox(spec.id + '-consumer', 566, 108, 150, 126, palette.green),
        excalidrawText(spec.id + '-consumer-t', 592, 138, '报表/应用\n像表一样读\n但不是表', 16, 98),
        excalidrawArrow(spec.id + '-a1', 230, 170, 70, 0),
        excalidrawArrow(spec.id + '-a2', 492, 170, 68, 0),
      ]);
    case 'optimizer':
    case 'index':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：先看执行路线再优化', 25, 620),
        excalidrawBox(spec.id + '-query', 58, 108, 150, 112, palette.blue),
        excalidrawText(spec.id + '-query-t', 84, 136, 'SQL\nWHERE/JOIN\nORDER', 16, 98),
        excalidrawBox(spec.id + '-plan', 296, 78, 190, 172, palette.yellow),
        excalidrawText(spec.id + '-plan-t', 326, 108, command + '\nEXPLAIN\n扫描/连接\n排序/成本', 16, 130),
        excalidrawBox(spec.id + '-fix', 566, 108, 150, 112, palette.green),
        excalidrawText(spec.id + '-fix-t', 592, 136, '改写 SQL\n加索引\n少取列', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 164, 76, 0),
        excalidrawArrow(spec.id + '-a2', 492, 164, 68, 0),
        excalidrawText(spec.id + '-note', 112, 324, '没有执行计划的优化，多半是在猜', 18, 500),
      ]);
    case 'transaction':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：一组操作要么全成，要么全撤', 25, 620),
        excalidrawBox(spec.id + '-begin', 54, 130, 130, 82, palette.blue),
        excalidrawText(spec.id + '-begin-t', 78, 154, 'BEGIN\n开启事务', 16, 82),
        excalidrawBox(spec.id + '-work', 238, 94, 180, 154, palette.yellow),
        excalidrawText(spec.id + '-work-t', 268, 124, '多条 SQL\n扣库存\n写订单\n记流水', 16, 120),
        excalidrawBox(spec.id + '-commit', 494, 82, 150, 76, palette.green),
        excalidrawText(spec.id + '-commit-t', 520, 104, 'COMMIT\n全部生效', 16, 98),
        excalidrawBox(spec.id + '-rollback', 494, 226, 150, 76, palette.red),
        excalidrawText(spec.id + '-rollback-t', 520, 248, 'ROLLBACK\n全部撤回', 16, 98),
        excalidrawArrow(spec.id + '-a1', 190, 170, 42, 0),
        excalidrawArrow(spec.id + '-a2', 424, 142, 64, -20),
        excalidrawArrow(spec.id + '-a3', 424, 206, 64, 52, '#e8590c'),
      ]);
    case 'security':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：权限按角色发卡', 25, 620),
        excalidrawBox(spec.id + '-role', 70, 102, 156, 120, palette.blue),
        excalidrawText(spec.id + '-role-t', 98, 132, '角色/账号\n应用\n分析师', 16, 100),
        excalidrawBox(spec.id + '-grant', 306, 84, 176, 156, palette.yellow),
        excalidrawText(spec.id + '-grant-t', 336, 112, command + '\nSELECT/INSERT\n最小权限', 16, 116),
        excalidrawBox(spec.id + '-object', 566, 102, 150, 120, palette.green),
        excalidrawText(spec.id + '-object-t', 592, 132, '表/视图/列\n可读可写\n可撤回', 16, 98),
        excalidrawArrow(spec.id + '-a1', 232, 160, 68, 0),
        excalidrawArrow(spec.id + '-a2', 488, 160, 72, 0),
        excalidrawText(spec.id + '-note', 112, 320, '数据库安全不靠前端隐藏，靠权限边界和审计', 18, 520),
      ]);
    case 'window':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 72, 18, title + '：每行带一个观察窗', 25, 640),
        excalidrawBox(spec.id + '-rows', 66, 92, 190, 206, palette.blue),
        excalidrawText(spec.id + '-rows-t', 96, 122, '明细行仍保留\nA 100\nA 80\nB 60\nB 40', 16, 126),
        excalidrawBox(spec.id + '-window', 326, 112, 162, 130, palette.yellow),
        excalidrawText(spec.id + '-window-t', 354, 140, command + '\nPARTITION\nORDER', 16, 106),
        excalidrawBox(spec.id + '-out', 560, 92, 160, 206, palette.green),
        excalidrawText(spec.id + '-out-t', 588, 122, '每行多一列\nrank\nlead/lag\nrow_number', 16, 104),
        excalidrawArrow(spec.id + '-a1', 262, 188, 58, 0),
        excalidrawArrow(spec.id + '-a2', 494, 188, 60, 0),
      ]);
    case 'cte':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：把复杂 SQL 拆成台阶', 25, 620),
        excalidrawBox(spec.id + '-s1', 94, 214, 160, 70, palette.blue),
        excalidrawText(spec.id + '-s1-t', 122, 234, '步骤 1\n基础数据', 16, 104),
        excalidrawBox(spec.id + '-s2', 302, 148, 160, 70, palette.yellow),
        excalidrawText(spec.id + '-s2-t', 330, 168, '步骤 2\n过滤/聚合', 16, 104),
        excalidrawBox(spec.id + '-s3', 510, 82, 160, 70, palette.green),
        excalidrawText(spec.id + '-s3-t', 538, 102, '最终 SELECT\n可读结果', 16, 104),
        excalidrawArrow(spec.id + '-a1', 260, 236, 36, -42),
        excalidrawArrow(spec.id + '-a2', 468, 170, 36, -42),
        excalidrawText(spec.id + '-note', 116, 336, command + '：CTE 让每一层有名字，减少套娃', 18, 520),
      ]);
    case 'pivot':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：行列换个摆法', 25, 620),
        excalidrawBox(spec.id + '-rows', 74, 104, 180, 156, palette.blue),
        excalidrawText(spec.id + '-rows-t', 104, 132, '长表\n月份 | 金额\n1月 | 10\n2月 | 20', 15, 120),
        excalidrawBox(spec.id + '-pivot', 326, 126, 144, 92, palette.yellow),
        excalidrawText(spec.id + '-pivot-t', 354, 150, command + '\n转置', 16, 88),
        excalidrawBox(spec.id + '-cols', 548, 104, 180, 156, palette.green),
        excalidrawText(spec.id + '-cols-t', 578, 132, '宽表\n1月 | 2月\n10  | 20', 15, 120),
        excalidrawArrow(spec.id + '-a1', 260, 176, 60, 0),
        excalidrawArrow(spec.id + '-a2', 476, 176, 66, 0),
      ]);
    case 'dynamic':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：动态拼 SQL 必须参数化', 25, 620),
        excalidrawBox(spec.id + '-input', 58, 112, 150, 110, palette.blue),
        excalidrawText(spec.id + '-input-t', 84, 140, '用户输入\n筛选条件\n排序字段', 16, 98),
        excalidrawBox(spec.id + '-builder', 304, 82, 184, 170, palette.yellow),
        excalidrawText(spec.id + '-builder-t', 334, 112, command + '\n白名单字段\n绑定参数', 16, 124),
        excalidrawBox(spec.id + '-db', 568, 112, 150, 110, palette.green),
        excalidrawText(spec.id + '-db-t', 594, 140, '数据库执行\n安全语句\n可审计', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 166, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 166, 68, 0),
        excalidrawBox(spec.id + '-risk', 258, 306, 276, 58, palette.red),
        excalidrawText(spec.id + '-risk-t', 294, 322, '禁止把原始输入直接拼进 SQL', 16, 204),
      ]);
    case 'backup':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：备份是恢复的前提', 25, 620),
        excalidrawBox(spec.id + '-prod', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-prod-t', 84, 144, '生产库\n持续写入', 16, 98),
        excalidrawBox(spec.id + '-backup', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-backup-t', 334, 116, command + '\npg_dump/basebackup\n定时/校验', 16, 120),
        excalidrawBox(spec.id + '-restore', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-restore-t', 592, 144, '恢复演练\nRPO/RTO', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'replication':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：主从同步数据', 25, 620),
        excalidrawBox(spec.id + '-primary', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-primary-t', 84, 144, 'Primary\n写 WAL', 16, 98),
        excalidrawBox(spec.id + '-stream', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-stream-t', 334, 116, command + '\n流复制/逻辑复制\n延迟监控', 16, 120),
        excalidrawBox(spec.id + '-replica', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-replica-t', 592, 144, 'Replica\n读/故障切换', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'vacuum':
    case 'wal':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：PostgreSQL 内部维护', 25, 620),
        excalidrawBox(spec.id + '-tuples', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-tuples-t', 84, 144, '行版本\nMVCC\n死元组', 16, 98),
        excalidrawBox(spec.id + '-maint', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-maint-t', 334, 116, command + '\nVACUUM/WAL\ncheckpoint', 16, 120),
        excalidrawBox(spec.id + '-health', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-health-t', 592, 144, '空间回收\n崩溃恢复', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'monitor':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：看库内指标', 25, 620),
        excalidrawBox(spec.id + '-pg', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-pg-t', 84, 150, 'PostgreSQL\npg_stat_*', 16, 98),
        excalidrawBox(spec.id + '-tool', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-tool-t', 334, 124, command + '\nPrometheus\npgBadger', 16, 124),
        excalidrawBox(spec.id + '-alert', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-alert-t', 594, 150, '告警\n慢查询\n连接数', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'admin':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：DBA 日常操作', 25, 620),
        excalidrawBox(spec.id + '-cli', 58, 118, 150, 100, palette.blue),
        excalidrawText(spec.id + '-cli-t', 84, 144, 'psql/pg_ctl\n运维命令', 16, 98),
        excalidrawBox(spec.id + '-cfg', 304, 86, 176, 164, palette.yellow),
        excalidrawText(spec.id + '-cfg-t', 334, 116, command + '\n配置/权限\n集群管理', 16, 120),
        excalidrawBox(spec.id + '-svc', 566, 118, 150, 100, palette.green),
        excalidrawText(spec.id + '-svc-t', 592, 144, '稳定服务\n可恢复', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 168, 84, 0),
        excalidrawArrow(spec.id + '-a2', 486, 168, 74, 0),
      ]);
    case 'extension':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：扩展能力插件化', 25, 620),
        excalidrawBox(spec.id + '-core', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-core-t', 84, 150, 'PostgreSQL\n核心', 16, 98),
        excalidrawBox(spec.id + '-ext', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-ext-t', 334, 124, command + '\nCREATE EXTENSION\n版本兼容', 16, 124),
        excalidrawBox(spec.id + '-feat', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-feat-t', 594, 150, '新函数/类型\nPostGIS 等', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    case 'deploy':
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：部署到环境', 25, 620),
        excalidrawBox(spec.id + '-code', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-code-t', 84, 150, '配置/IaC\nDocker/Helm', 16, 98),
        excalidrawBox(spec.id + '-env', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-env-t', 334, 124, command + '\n云/自建\n高可用', 16, 124),
        excalidrawBox(spec.id + '-run', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-run-t', 594, 150, '可访问\n可备份', 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
    default:
      return excalidrawScene([
        excalidrawText(spec.id + '-title', 76, 18, title + '：先读对象，再写 SQL', 25, 620),
        excalidrawBox(spec.id + '-obj', 58, 124, 150, 92, palette.blue),
        excalidrawText(spec.id + '-obj-t', 84, 150, subject, 16, 98),
        excalidrawBox(spec.id + '-cmd', 304, 96, 184, 148, palette.yellow),
        excalidrawText(spec.id + '-cmd-t', 334, 124, command, 16, 124),
        excalidrawBox(spec.id + '-res', 568, 124, 150, 92, palette.green),
        excalidrawText(spec.id + '-res-t', 594, 150, result, 16, 98),
        excalidrawArrow(spec.id + '-a1', 214, 170, 84, 0),
        excalidrawArrow(spec.id + '-a2', 494, 170, 68, 0),
      ]);
  }
}

function pgLesson(spec: PgSpec): TeachingLesson {
  return {
    scene: spec.scene,
    core: spec.core,
    route: spec.route,
    confusion: spec.confusion,
    experiment: spec.experiment,
    heading: spec.heading,
    subheading: spec.subheading,
    metaphor: spec.metaphor,
    mistake: spec.mistake,
    rawDiagram: pgDiagram(spec),
  };
}

export const POSTGRESQL_TEACHING_LESSONS: Record<string, TeachingLesson> = {
