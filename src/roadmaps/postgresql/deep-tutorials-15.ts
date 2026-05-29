import type { DeepTutorial } from '../deep-types';

export const POSTGRESQL_DEEP_TUTORIALS_15: Record<string, DeepTutorial> = {
  "QarPFu_wU6-F9P5YHo6CO": { mentalModel: 'eBPF 是最新最强的内核可观测技术——在 Linux 内核中安全运行小程序来观测一切。比传统 strace 轻量百倍，生产环境可以直接用。PG DBA 的终极调试武器。', sections: [{ title: 'eBPF 在 PG 中的应用', content: 'eBPF 让你在不改 PG 代码、不开额外日志的情况下：1) 追踪所有 SQL 的执行耗时分布（类似 pg_stat_statements 但不需要安装扩展）2) 看磁盘 IO 发生在哪些文件/表上（比 iostat 更精确）3) 追踪锁等待的具体调用链。工具：bpftrace（写单行追踪脚本）、pixie（基于 eBPF 的自动可观测性平台）。对 99% 的场景 pg_stat_statements 就够了，eBPF 是深度调试的终极手段。' }],
    diagnosis: [
      { symptom: 'bpftrace 脚本报 "function not defined"', cause: '内核函数在当前内核版本不存在或已改名。内核版本差异导致函数名变化。', fix: '检查内核版本：uname -r。bpftrace -l "kprobe:*函数名*" 搜索可用探针点。用 tracepoint 替代 kprobe——接口更稳定。' },
      { symptom: 'eBPF 工具在生产环境被安全团队阻止', cause: 'eBPF 需 CAP_BPF 或 CAP_SYS_ADMIN 权限——安全团队认为危险。或内核未启用 CONFIG_DEBUG_INFO_BTF。', fix: '与安全团队协商展示具体需求。非特权容器可能受限。评估 pg_stat_statements 替代大部分 eBPF 场景。' },
    ],
  exercises: [{ level: '进阶', task: '用 bpftrace 追踪 PG 进程的所有 fsync 调用', hint: 'bpftrace -e \'tracepoint:syscalls:sys_enter_fsync /comm=="postgres"/ { ... }\'', answer: 'bpftrace -e \'tracepoint:syscalls:sys_enter_fsync /comm=="postgres"/ { printf("%s fsync fd=%d\\n", comm, args->fd); }\'' }] },
  "xEu5n6U9-WKVxjlT5YUgx": { mentalModel: 'pgvector 让 PG 成为 AI 应用的"记忆系统"——存 embedding 向量、做语义搜索、找相似内容。不需要 Pinecone/Weaviate，你的 PG 就能做 RAG。', sections: [{ title: 'pgvector 使用', content: '安装：CREATE EXTENSION vector; 建表：CREATE TABLE docs (id SERIAL, content TEXT, embedding vector(1536)); OpenAI embedding 是 1536 维。索引：CREATE INDEX ON docs USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100); 查询：SELECT content FROM docs ORDER BY embedding <=> query_embedding LIMIT 5; <=> 是余弦距离操作符。IVFFlat 是近似搜索（快但不保证精确），HNSW 是更好的选择（PG 15+ pgvector 0.5+）。' }],
    diagnosis: [
      { symptom: 'pgvector IVFFlat 索引搜索精度低——结果有遗漏', cause: 'IVFFlat 是近似搜索——probes 默认为 1（只搜最近 1 个聚类），可能漏掉其他聚类中更相似的向量。', fix: '增大 probes：SET ivfflat.probes = 10; 或 SET hnsw.ef_search = 100;（HNSW 索引）。probes=lists 等同精确搜索。权衡精度和速度。' },
      { symptom: 'pgvector 向量搜索慢——全表扫描不走索引', cause: 'IVFFlat/HNSW 索引只在 ORDER BY embedding <=> query_vec 使用。WHERE 过滤后行数太少→优化器选全表扫描。', fix: '创建索引后 EXPLAIN 检查。少量数据全表扫描比索引快——这是正确的。评估是否需更大数据集测试。' },
    ],
  exercises: [{ level: '进阶', task: '用 pgvector 创建一个文档搜索系统', hint: 'CREATE EXTENSION vector → 建表 → 插入向量 → 建索引 → 查询', answer: 'CREATE EXTENSION vector; CREATE TABLE docs(id SERIAL, content TEXT, embedding vector(1536)); INSERT INTO docs(content, embedding) VALUES (\'PG tutorial\', \'[...]\'); CREATE INDEX ON docs USING hnsw (embedding vector_cosine_ops); SELECT content, 1 - (embedding <=> query_vec) AS similarity FROM docs ORDER BY embedding <=> query_vec LIMIT 5;' }] },
};