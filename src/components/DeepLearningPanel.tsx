import { useState } from 'react';
import { Alert, Card, Collapse, List, Space, Tag, Typography } from 'antd';
import type { DeepTutorial } from '../roadmaps/deep-types';

const { Text, Paragraph, Title } = Typography;

function HandsOnSection({ steps }: { steps?: DeepTutorial['handsOn'] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Title level={5}>跟着做</Title>
      {steps.map((step, i) => (
        <Card key={i} size="small" title={<><Tag color="blue">步骤 {i + 1}</Tag> {step.title}</>} style={{ background: '#f6f8fa' }}>
          <div style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '12px 16px', borderRadius: 8, fontFamily: 'monospace', fontSize: 13, marginBottom: step.output ? 8 : 0, whiteSpace: 'pre-wrap' }}>
            <span style={{ color: '#569cd6' }}>$ </span>{step.cmd}
          </div>
          {step.output && (
            <div style={{ background: '#2d2d2d', color: '#a9a9a9', padding: '12px 16px', borderRadius: 8, fontFamily: 'monospace', fontSize: 12, marginBottom: 8, whiteSpace: 'pre-wrap', borderLeft: '3px solid #555' }}>
              {step.output}
            </div>
          )}
          <Paragraph style={{ margin: '8px 0 0', fontSize: 14 }}>
            <Text strong>解读：</Text>{step.explain}
          </Paragraph>
        </Card>
      ))}
    </Space>
  );
}

function DiagnosisSection({ items }: { items?: DeepTutorial['diagnosis'] }) {
  if (!items || items.length === 0) return null;

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Title level={5}>常见报错</Title>
      {items.map((item, i) => (
        <Card key={i} size="small" style={{ borderLeft: '4px solid #faad14' }}>
          <div style={{ marginBottom: 8 }}>
            <Tag color="red">现象</Tag>
            <Text code style={{ fontSize: 13 }}>{item.symptom}</Text>
          </div>
          <div style={{ marginBottom: 8 }}>
            <Tag color="orange">原因</Tag>
            <Text>{item.cause}</Text>
          </div>
          <div>
            <Tag color="green">解决</Tag>
            <Text code style={{ fontSize: 13, whiteSpace: 'pre-wrap' }}>{item.fix}</Text>
          </div>
        </Card>
      ))}
    </Space>
  );
}

function ExercisesSection({ exercises }: { exercises?: DeepTutorial['exercises'] }) {
  if (!exercises || exercises.length === 0) return null;

  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const toggle = (i: number) => {
    setRevealed(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };
  const levelColor = { '基础': 'green', '进阶': 'blue', '挑战': 'red' } as const;

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Title level={5}>渐进练习</Title>
      {exercises.map((ex, i) => (
        <Card key={i} size="small" style={{ background: '#f0f5ff' }}>
          <div style={{ marginBottom: 8 }}>
            <Tag color={levelColor[ex.level]}>{ex.level}</Tag>
            <Text strong>{ex.task}</Text>
          </div>
          {ex.hint && (
            <Collapse size="small" style={{ marginBottom: 8 }} items={[{ key: '1', label: '提示', children: <Paragraph style={{ margin: 0 }}>{ex.hint}</Paragraph> }]} />
          )}
          <Collapse
            size="small"
            activeKey={revealed.has(i) ? ['1'] : []}
            onChange={() => toggle(i)}
            items={[{ key: '1', label: revealed.has(i) ? '收起答案' : '查看答案', children: (
              <div style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '12px 16px', borderRadius: 6, fontFamily: 'monospace', fontSize: 13, whiteSpace: 'pre-wrap' }}>
                {ex.answer}
              </div>
            ) }]}
          />
        </Card>
      ))}
    </Space>
  );
}

function ConnectionsSection({ prereqs, nextSteps, mentalModel }: { prereqs?: string[]; nextSteps?: string[]; mentalModel?: string }) {
  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      {mentalModel && (
        <Alert type="info" showIcon message="心智模型" description={mentalModel} />
      )}
      {prereqs && prereqs.length > 0 && (
        <Card size="small" title={<><Tag color="purple">前置知识</Tag> 先掌握这些</>}>
          <List size="small" dataSource={prereqs} renderItem={item => <List.Item style={{ padding: '8px 0' }}>{item}</List.Item>} />
        </Card>
      )}
      {nextSteps && nextSteps.length > 0 && (
        <Card size="small" title={<><Tag color="cyan">学完之后</Tag> 继续这些</>}>
          <List size="small" dataSource={nextSteps} renderItem={item => <List.Item style={{ padding: '8px 0' }}>{item}</List.Item>} />
        </Card>
      )}
    </Space>
  );
}

function SectionsSection({ sections }: { sections: DeepTutorial['sections'] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <Title level={5}>详细内容</Title>
      {sections.map((section, i) => (
        <Card key={i} size="small" title={section.title}>
          <Paragraph>{section.content}</Paragraph>
        </Card>
      ))}
    </Space>
  );
}

function SummarySection({ summary }: { summary?: string }) {
  if (!summary) return null;

  return (
    <Alert
      type="success"
      showIcon
      message="总结"
      description={summary}
    />
  );
}

export function DeepLearningPanel({ tutorial }: { tutorial: DeepTutorial }) {
  // 如果有 sections，使用新的渲染方式
  if (tutorial.sections && tutorial.sections.length > 0) {
    return (
      <Space direction="vertical" size={24} className="drawer-section" style={{ width: '100%' }}>
        {tutorial.mentalModel && <ConnectionsSection mentalModel={tutorial.mentalModel} />}
        <SectionsSection sections={tutorial.sections} />
        {tutorial.exercises && tutorial.exercises.length > 0 && (
          <ExercisesSection exercises={tutorial.exercises} />
        )}
        {tutorial.summary && <SummarySection summary={tutorial.summary} />}
        <ConnectionsSection prereqs={tutorial.prereqs} nextSteps={tutorial.nextSteps} />
      </Space>
    );
  }

  // 原有的渲染方式
  return (
    <Space direction="vertical" size={24} className="drawer-section" style={{ width: '100%' }}>
      {tutorial.mentalModel && <ConnectionsSection mentalModel={tutorial.mentalModel} />}
      {tutorial.handsOn && <HandsOnSection steps={tutorial.handsOn} />}
      {tutorial.diagnosis && <DiagnosisSection items={tutorial.diagnosis} />}
      {tutorial.exercises && <ExercisesSection exercises={tutorial.exercises} />}
      <ConnectionsSection prereqs={tutorial.prereqs} nextSteps={tutorial.nextSteps} />
    </Space>
  );
}
