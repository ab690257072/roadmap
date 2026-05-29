import { useMemo } from 'react';
import { Alert, Button, Card, Collapse, Drawer, Flex, List, Space, Steps, Tabs, Typography } from 'antd';
import type { CollapseProps, TabsProps } from 'antd';
import type { DeepLesson, Tutorial } from '../roadmaps/types';
import { getNodeResource } from '../roadmaps/resource-registry';
import { getDeepTutorial } from '../roadmaps/deep-registry';
import type { NodeResource } from '../roadmaps/resource-types';
import { DeepLearningPanel } from './DeepLearningPanel';
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

function NodeResourcePanel({ resource }: { resource: NodeResource }) {
  const sections: { title: string; items: React.ReactNode[] }[] = [];

  if (resource.docs && resource.docs.length > 0) {
    sections.push({
      title: '官方文档',
      items: resource.docs.map((doc, i) => (
        <List.Item key={i}>
          <a href={doc.url} target="_blank" rel="noopener noreferrer">{doc.title}</a>
          <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>{doc.note}</Text>
        </List.Item>
      )),
    });
  }

  if (resource.articles && resource.articles.length > 0) {
    sections.push({
      title: '推荐文章',
      items: resource.articles.map((a, i) => (
        <List.Item key={i}>
          <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a>
          <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>{a.note}</Text>
        </List.Item>
      )),
    });
  }

  if (resource.books && resource.books.length > 0) {
    sections.push({
      title: '推荐书籍',
      items: resource.books.map((book, i) => (
        <List.Item key={i}>
          <span>《{book.title}》{book.author && <Text type="secondary"> · {book.author}</Text>}</span>
          <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>{book.note}</Text>
        </List.Item>
      )),
    });
  }

  if (resource.videos && resource.videos.length > 0) {
    sections.push({
      title: '推荐视频',
      items: resource.videos.map((v, i) => (
        <List.Item key={i}>
          <a href={v.url} target="_blank" rel="noopener noreferrer">{v.title}</a>
          <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>{v.note}</Text>
        </List.Item>
      )),
    });
  }

  if (resource.practice && resource.practice.length > 0) {
    sections.push({
      title: '动手练习',
      items: resource.practice.map((p, i) => (
        <List.Item key={i}>
          <div>
            {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a> : <Text strong>{p.title}</Text>}
            <div><Text type="secondary" style={{ fontSize: 12 }}>{p.desc}</Text></div>
          </div>
        </List.Item>
      )),
    });
  }

  return (
    <Space direction="vertical" size={16} className="drawer-section">
      {sections.map((section) => (
        <Card key={section.title} size="small" title={section.title}>
          <List size="small" dataSource={section.items} renderItem={(item) => item} />
        </Card>
      ))}
    </Space>
  );
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
  const nodeResource = useMemo(() => getNodeResource(tutorial?.id), [tutorial]);
  const deepTutorial = useMemo(() => getDeepTutorial(tutorial?.id), [tutorial]);

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
    ...(deepTutorial ? [{
      key: 'deep-learn',
      label: '深度学',
      children: <DeepLearningPanel tutorial={deepTutorial} />,
    }] : []),
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
      children: nodeResource ? (
        <NodeResourcePanel resource={nodeResource} />
      ) : (
        <Space direction="vertical" size={16} className="drawer-section">
          <Card size="small" title="推荐链接">
            <List size="small" dataSource={resources.links} renderItem={(item) => {
              const urlMatch = item.match(/https?:\/\/\S+/);
              const label = urlMatch ? item.replace(urlMatch[0], '').replace(/：$/, '') : item;
              return <List.Item>{urlMatch ? <a href={urlMatch[0]} target="_blank" rel="noopener noreferrer">{label}</a> : item}</List.Item>;
            }} />
          </Card>
          <Card size="small" title="推荐书籍">
            <List size="small" dataSource={resources.books} renderItem={(item) => <List.Item>{item}</List.Item>} />
          </Card>
        </Space>
      ),
    },
  ] : [];
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
      {tutorial && <Tabs items={tabItems} />}
      <Flex justify="space-between" className="drawer-nav">
        <Button onClick={onPrev}>上一个</Button>
        <Button onClick={onNext}>下一个</Button>
      </Flex>
    </Drawer>
  );
}
