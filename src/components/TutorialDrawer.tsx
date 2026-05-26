import { useMemo } from 'react';
import { Alert, Button, Card, Collapse, Drawer, Flex, List, Space, Steps, Tabs, Typography } from 'antd';
import type { CollapseProps, TabsProps } from 'antd';
import type { DeepLesson, Tutorial } from '../roadmaps/types';
import { hasTeachingLesson } from '../roadmaps/teaching-registry';
import { LearningLab } from './LearningLab';
import { TutorialIllustration } from './TutorialIllustration';

const { Text, Paragraph } = Typography;

const categoryResources: Record<string, { links: string[]; books: string[] }> = {
  api: {
    links: ['MDN HTTP 概览：https://developer.mozilla.org/zh-CN/docs/Web/HTTP', 'OpenAPI 规范：https://spec.openapis.org/oas/latest.html'],
    books: ['《RESTful Web APIs》', '《Web API Design》'],
  },
  database: {
    links: ['PostgreSQL 官方教程：https://www.postgresql.org/docs/current/tutorial.html', 'Use The Index, Luke：https://use-the-index-luke.com/'],
    books: ['《SQL 必知必会》', '《数据库系统概念》'],
  },
  security: {
    links: ['OWASP Top 10：https://owasp.org/www-project-top-ten/', 'MDN Web Security：https://developer.mozilla.org/en-US/docs/Web/Security'],
    books: ['《Web 应用安全权威指南》', '《OAuth 2 in Action》'],
  },
  ops: {
    links: ['Google SRE Book：https://sre.google/books/', 'Kubernetes 文档：https://kubernetes.io/docs/home/'],
    books: ['《Site Reliability Engineering》', '《Kubernetes in Action》'],
  },
  general: {
    links: ['roadmap.sh backend：https://roadmap.sh/backend', 'MDN Web Docs：https://developer.mozilla.org/'],
    books: ['《代码整洁之道》', '《设计数据密集型应用》'],
  },
};

function inferCategory(text: string) {
  const lower = text.toLowerCase();
  if (/(api|rest|graphql|grpc|openapi|http)/.test(lower)) return 'api';
  if (/(sql|database|redis|mongo|postgres|mysql|index|transaction|nosql)/.test(lower)) return 'database';
  if (/(security|auth|jwt|oauth|tls|https|cors|owasp|hash|bcrypt)/.test(lower)) return 'security';
  if (/(docker|kubernetes|monitor|observability|scale|circuit|devops)/.test(lower)) return 'ops';
  return 'general';
}

export function TutorialDrawer({ tutorial, lesson, open, onClose, done, onToggleDone, onPrev, onNext }: {
  tutorial?: Tutorial;
  lesson?: DeepLesson;
  open: boolean;
  onClose: () => void;
  done: boolean;
  onToggleDone: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const resources = useMemo(() => {
    if (!tutorial) return categoryResources.general;
    const key = inferCategory(`${tutorial.zh} ${tutorial.en}`);
    return categoryResources[key] || categoryResources.general;
  }, [tutorial]);

  const detailItems: CollapseProps['items'] = tutorial?.details.map((detail, index) => ({
    key: String(index),
    label: detail.title,
    children: <Paragraph>{detail.body.replace(/\*\*/g, '')}</Paragraph>,
  })) || [];

  const tabItems: TabsProps['items'] = tutorial ? [
    {
      key: 'learn',
      label: '像小孩一样学',
      children: lesson ? (
        <LearningLab tutorial={tutorial} lesson={lesson} />
      ) : (
        <Space direction="vertical" size={16} className="drawer-section">
          <TutorialIllustration tutorial={tutorial} />
          <Alert type="info" showIcon title="一句话比喻" description={tutorial.analogy} />
          <Card size="small" className="story-card">
            <Text strong>小故事</Text>
            <Paragraph>{tutorial.story}</Paragraph>
          </Card>
          <Steps
            direction="vertical"
            size="small"
            current={-1}
            items={tutorial.howSteps.map((step, index) => ({ title: `第 ${index + 1} 步`, description: step }))}
          />
        </Space>
      ),
    },
    {
      key: 'deep',
      label: '完整说明',
      children: (
        <Space direction="vertical" size={16} className="drawer-section">
          <Collapse items={detailItems} defaultActiveKey={['0', '1']} />
          <Card size="small" title="动手练习">
            <Paragraph>{tutorial.practice}</Paragraph>
          </Card>
          <Alert type="warning" title="常见坑" description={<List size="small" dataSource={tutorial.pitfalls} renderItem={(item) => <List.Item>{item}</List.Item>} />} />
        </Space>
      ),
    },
    {
      key: 'refs',
      label: '参考资料',
      children: (
        <Space direction="vertical" size={16} className="drawer-section">
          <Card size="small" title="推荐链接">
            <List size="small" dataSource={resources.links} renderItem={(item) => <List.Item>{item}</List.Item>} />
          </Card>
          <Card size="small" title="推荐书籍">
            <List size="small" dataSource={resources.books} renderItem={(item) => <List.Item>{item}</List.Item>} />
          </Card>
        </Space>
      ),
    },
  ] : [];
  const shouldUseFocusedLesson = hasTeachingLesson(tutorial?.id);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={tutorial ? <Space direction="vertical" size={0}><span>{tutorial.zh}</span><Text type="secondary" className="mono">{tutorial.en}</Text></Space> : null}
      width={720}
      destroyOnHidden
      extra={<Button type={done ? 'default' : 'primary'} onClick={onToggleDone}>{done ? '取消学完' : '标记学完'}</Button>}
      styles={{ body: { padding: 20 } }}
    >
      {tutorial && (shouldUseFocusedLesson && lesson ? <LearningLab tutorial={tutorial} lesson={lesson} /> : <Tabs items={tabItems} />)}
      <Flex justify="space-between" className="drawer-nav">
        <Button onClick={onPrev}>上一个</Button>
        <Button onClick={onNext}>下一个</Button>
      </Flex>
    </Drawer>
  );
}
