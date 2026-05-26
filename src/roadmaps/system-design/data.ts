import type { DeepLesson, Stage, Tutorial } from '../types';

const data = {
  "stages": [
    {
      "id": "stage-01",
      "zh": "阶段 01：入门介绍",
      "en": "Introduction",
      "desc": "按 roadmap.sh 原始顺序整理的第 1 组学习节点。",
      "nodes": [
        {
          "id": "idLHBxhvcIqZTqmh_E8Az",
          "label": "What is System Design?",
          "zh": "什么是系统设计",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 433,
          "y": 188,
          "w": 308,
          "h": 49
        },
        {
          "id": "_hYN0gEi9BL24nptEtXWU",
          "label": "Introduction",
          "zh": "入门介绍",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 106,
          "y": 214,
          "w": 247,
          "h": 49
        },
        {
          "id": "os3Pa6W9SSNEzgmlBbglQ",
          "label": "How to approach System Design?",
          "zh": "如何approach系统设计",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 433,
          "y": 242,
          "w": 308,
          "h": 49
        },
        {
          "id": "e_15lymUjFc6VWqzPnKxG",
          "label": "Performance vs Scalability",
          "zh": "性能与扩展性对比",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 106,
          "y": 267,
          "w": 247,
          "h": 49
        },
        {
          "id": "O3wAHLnzrkvLWr4afHDdr",
          "label": "Latency vs Throughput",
          "zh": "延迟与吞吐对比",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 106,
          "y": 320,
          "w": 247,
          "h": 49
        },
        {
          "id": "tcGdVQsCEobdV9hgOq3eG",
          "label": "CAP Theorem",
          "zh": "CAP Theorem（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -295,
          "y": 363,
          "w": 305,
          "h": 49
        }
      ],
      "index": 1,
      "mapX": 90,
      "mapY": 90,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-02",
      "zh": "阶段 02：可用性与一致性对比",
      "en": "Availability vs Consistency",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "uJc27BNAuP321HQNbjftn",
          "label": "Availability vs Consistency",
          "zh": "可用性与一致性对比",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 106,
          "y": 373,
          "w": 247,
          "h": 49
        },
        {
          "id": "EKD5AikZtwjtsEYRPJhQ2",
          "label": "Weak Consistency",
          "zh": "弱一致性",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 455,
          "y": 374,
          "w": 263,
          "h": 49
        },
        {
          "id": "GHe8V-REu1loRpDnHbyUn",
          "label": "Consistency Patterns",
          "zh": "一致性模式",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 106,
          "y": 426,
          "w": 247,
          "h": 49
        },
        {
          "id": "rRDGVynX43inSeQ9lR_FS",
          "label": "Eventual Consistency",
          "zh": "最终一致性",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 455,
          "y": 427,
          "w": 263,
          "h": 49
        },
        {
          "id": "JjB7eB8gdRCAYf5M0RcT7",
          "label": "Strong Consistency",
          "zh": "强一致性",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 455,
          "y": 481,
          "w": 263,
          "h": 49
        },
        {
          "id": "ezptoTqeaepByegxS5kHL",
          "label": "Availability Patterns",
          "zh": "可用性模式",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 106,
          "y": 552,
          "w": 247,
          "h": 49
        }
      ],
      "index": 2,
      "mapX": 610,
      "mapY": 90,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-03",
      "zh": "阶段 03：Background Jobs（技术术语）",
      "en": "Background Jobs",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "L_jRfjvMGjFbHEbozeVQl",
          "label": "Fail-Over",
          "zh": "Fail-Over（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -291,
          "y": 583,
          "w": 141,
          "h": 49
        },
        {
          "id": "0RQ5jzZKdadYY0h_QZ0Bb",
          "label": "Replication",
          "zh": "复制",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -129,
          "y": 583,
          "w": 141,
          "h": 49
        },
        {
          "id": "NEsPjQifNDlZJE-2YLVl1",
          "label": "Event-Driven",
          "zh": "事件-Driven",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -301,
          "y": 683,
          "w": 187,
          "h": 49
        },
        {
          "id": "uHdrZllrZFAnVkwIB3y5-",
          "label": "Availability in Numbers",
          "zh": "可用性inNumbers",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 441,
          "y": 696,
          "w": 304,
          "h": 50
        },
        {
          "id": "DOESIlBThd_wp2uOSd_CS",
          "label": "Background Jobs",
          "zh": "Background Jobs（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -38,
          "y": 709,
          "w": 219,
          "h": 49
        },
        {
          "id": "zoViI4kzpKIxpU20T89K_",
          "label": "Schedule Driven",
          "zh": "Schedule Driven（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -301,
          "y": 736,
          "w": 187,
          "h": 49
        }
      ],
      "index": 3,
      "mapX": 1130,
      "mapY": 90,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-04",
      "zh": "阶段 04：域Name系统",
      "en": "Domain Name System",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "HkXiEMLqxJoQyAHav3ccL",
          "label": "Pull CDNs",
          "zh": "拉取CDNs",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 572,
          "y": 785,
          "w": 183,
          "h": 49
        },
        {
          "id": "2gRIstNT-fTkv5GZ692gx",
          "label": "Returning Results",
          "zh": "Returning Results（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -301,
          "y": 809,
          "w": 187,
          "h": 49
        },
        {
          "id": "Uk6J8JRcKVEFz4_8rLfnQ",
          "label": "Domain Name System",
          "zh": "域Name系统",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -38,
          "y": 809,
          "w": 219,
          "h": 49
        },
        {
          "id": "O730v5Ww3ByAiBSs6fwyM",
          "label": "Content Delivery Networks",
          "zh": "Content交付Networks",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 239,
          "y": 809,
          "w": 262,
          "h": 49
        },
        {
          "id": "uIerrf_oziiLg-KEyz8WM",
          "label": "Push CDNs",
          "zh": "推送CDNs",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 572,
          "y": 838,
          "w": 183,
          "h": 49
        },
        {
          "id": "UKTiaHCzYXnrNw31lHriv",
          "label": "Microservices",
          "zh": "Microservices（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -38,
          "y": 890,
          "w": 184,
          "h": 49
        }
      ],
      "index": 4,
      "mapX": 1650,
      "mapY": 90,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-05",
      "zh": "阶段 05：Key-Value Store（技术术语）",
      "en": "Key-Value Store",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "KFtdmmce4bRkDyvFXZzLN",
          "label": "Key-Value Store",
          "zh": "Key-Value Store（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -294,
          "y": 899,
          "w": 193,
          "h": 49
        },
        {
          "id": "ocdcbhHrwjJX0KWgmsOL6",
          "label": "LB vs Reverse Proxy",
          "zh": "LB（技术术语）与Reverse代理对比",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 502,
          "y": 923,
          "w": 251,
          "h": 49
        },
        {
          "id": "Nt0HUWLOl4O77elF8Is1S",
          "label": "Service Discovery",
          "zh": "服务发现",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -38,
          "y": 943,
          "w": 184,
          "h": 49
        },
        {
          "id": "didEznSlVHqqlijtyOSr3",
          "label": "Document Store",
          "zh": "Document Store（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -294,
          "y": 952,
          "w": 193,
          "h": 49
        },
        {
          "id": "urSjLyLTE5IIz0TFxMBWL",
          "label": "Load Balancing Algorithms",
          "zh": "负载BalancingAlgorithms",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 502,
          "y": 976,
          "w": 251,
          "h": 49
        },
        {
          "id": "WHq1AdISkcgthaugE9uY7",
          "label": "Wide Column Store",
          "zh": "Wide Column Store（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -294,
          "y": 1005,
          "w": 193,
          "h": 49
        }
      ],
      "index": 5,
      "mapX": 1650,
      "mapY": 446,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-06",
      "zh": "阶段 06：Application Layer（技术术语）",
      "en": "Application Layer",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "XXuzTrP5UNVwSpAk-tAGr",
          "label": "Application Layer",
          "zh": "Application Layer（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -38,
          "y": 1029,
          "w": 184,
          "h": 49
        },
        {
          "id": "14KqLKgh090Rb3MDwelWY",
          "label": "Load Balancers",
          "zh": "负载Balancers",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 239,
          "y": 1029,
          "w": 167,
          "h": 49
        },
        {
          "id": "e69-JVbDj7dqV_p1j1kML",
          "label": "Layer 7 Load Balancing",
          "zh": "层7负载Balancing",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 502,
          "y": 1029,
          "w": 251,
          "h": 49
        },
        {
          "id": "6RLgnL8qLBzYkllHeaI-Z",
          "label": "Graph Databases",
          "zh": "Graph数据库",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -294,
          "y": 1058,
          "w": 193,
          "h": 49
        },
        {
          "id": "MpM9rT1-_LGD7YbnBjqOk",
          "label": "Layer 4 Load Balancing",
          "zh": "层4负载Balancing",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 502,
          "y": 1082,
          "w": 251,
          "h": 49
        },
        {
          "id": "5FXwwRMNBhG7LT5ub6t2L",
          "label": "Databases",
          "zh": "数据库",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -38,
          "y": 1129,
          "w": 184,
          "h": 49
        }
      ],
      "index": 6,
      "mapX": 1130,
      "mapY": 446,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-07",
      "zh": "阶段 07：缓存",
      "en": "Caching",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "IkUCfSWNY-02wg2WCo1c6",
          "label": "Horizontal Scaling",
          "zh": "Horizontal扩缩",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 502,
          "y": 1135,
          "w": 251,
          "h": 49
        },
        {
          "id": "dc-aIbBwUdlwgwQKGrq49",
          "label": "Replication",
          "zh": "复制",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -295,
          "y": 1166,
          "w": 193,
          "h": 49
        },
        {
          "id": "FX6dcV_93zOfbZMdM_-li",
          "label": "Sharding",
          "zh": "分片",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -295,
          "y": 1219,
          "w": 193,
          "h": 49
        },
        {
          "id": "KLnpMR2FxlQkCHZP6-tZm",
          "label": "SQL vs NoSQL",
          "zh": "SQL（技术术语）与NoSQL（技术术语）对比",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -38,
          "y": 1222,
          "w": 184,
          "h": 49
        },
        {
          "id": "Bgqgl67FK56ioLNFivIsc",
          "label": "Refresh Ahead",
          "zh": "Refresh Ahead（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 512,
          "y": 1230,
          "w": 232,
          "h": 49
        },
        {
          "id": "-X4g8kljgVBOBcf1DDzgi",
          "label": "Caching",
          "zh": "缓存",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 239,
          "y": 1261,
          "w": 167,
          "h": 49
        }
      ],
      "index": 7,
      "mapX": 610,
      "mapY": 446,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-08",
      "zh": "阶段 08：Federation（技术术语）",
      "en": "Federation",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "DGmVRI7oWdSOeIUn_g0rI",
          "label": "Federation",
          "zh": "Federation（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -295,
          "y": 1272,
          "w": 193,
          "h": 49
        },
        {
          "id": "vNndJ-MWetcbaF2d-3-JP",
          "label": "Write-behind",
          "zh": "Write-behind（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 512,
          "y": 1283,
          "w": 232,
          "h": 49
        },
        {
          "id": "Zp9D4--DgtlAjE2nIfaO_",
          "label": "Denormalization",
          "zh": "反规范化",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -295,
          "y": 1325,
          "w": 193,
          "h": 49
        },
        {
          "id": "YiYRZFE_zwPMiCZxz9FnP",
          "label": "Back Pressure",
          "zh": "Back Pressure（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -40,
          "y": 1325,
          "w": 190,
          "h": 49
        },
        {
          "id": "RNITLR1FUQWkRbSBXTD_z",
          "label": "Write-through",
          "zh": "Write-through（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 512,
          "y": 1336,
          "w": 232,
          "h": 49
        },
        {
          "id": "fY8zgbB13wxZ1CFtMSdZZ",
          "label": "SQL Tuning",
          "zh": "SQL调优",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -295,
          "y": 1378,
          "w": 193,
          "h": 49
        }
      ],
      "index": 8,
      "mapX": 90,
      "mapY": 446,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-09",
      "zh": "阶段 09：Asynchronism（技术术语）",
      "en": "Asynchronism",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "a9wGW_H1HpvvdYCXoS-Rf",
          "label": "Task Queues",
          "zh": "Task Queues（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -40,
          "y": 1378,
          "w": 190,
          "h": 49
        },
        {
          "id": "84N4XY31PwXRntXX1sdCU",
          "label": "Asynchronism",
          "zh": "Asynchronism（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 239,
          "y": 1378,
          "w": 167,
          "h": 49
        },
        {
          "id": "bffJlvoLHFldS0CluWifP",
          "label": "Cache Aside",
          "zh": "缓存Aside",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 512,
          "y": 1389,
          "w": 232,
          "h": 49
        },
        {
          "id": "37X1_9eCmkZkz5RDudE5N",
          "label": "Message Queues",
          "zh": "消息Queues",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -40,
          "y": 1431,
          "w": 190,
          "h": 49
        },
        {
          "id": "RHNRb6QWiGvCK3KQOPK3u",
          "label": "Client Caching",
          "zh": "客户端缓存",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 515,
          "y": 1497,
          "w": 227,
          "h": 49
        },
        {
          "id": "I_nR6EwjNXSG7_hw-_VhX",
          "label": "HTTP",
          "zh": "HTTP（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -302,
          "y": 1526,
          "w": 76,
          "h": 49
        }
      ],
      "index": 9,
      "mapX": 90,
      "mapY": 802,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-10",
      "zh": "阶段 10：Communication（技术术语）",
      "en": "Communication",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "2nF5uC6fYKbf0RFgGNHiP",
          "label": "TCP",
          "zh": "TCP（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -224,
          "y": 1526,
          "w": 66,
          "h": 49
        },
        {
          "id": "LC5aTmUKNiw9RuSUt3fSE",
          "label": "UDP",
          "zh": "UDP（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -155,
          "y": 1526,
          "w": 66,
          "h": 49
        },
        {
          "id": "uQFzD_ryd-8Dr1ppjorYJ",
          "label": "Communication",
          "zh": "Communication（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 11,
          "y": 1526,
          "w": 155,
          "h": 49
        },
        {
          "id": "3pRi8M4xQXsehkdfUNtYL",
          "label": "Idempotent Operations",
          "zh": "Idempotent Operations（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 239,
          "y": 1526,
          "w": 226,
          "h": 49
        },
        {
          "id": "Kisvxlrjb7XnKFCOdxRtb",
          "label": "CDN Caching",
          "zh": "CDN缓存",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 515,
          "y": 1550,
          "w": 227,
          "h": 49
        },
        {
          "id": "ixqucoAkgnphWYAFnsMe-",
          "label": "RPC",
          "zh": "RPC（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -294,
          "y": 1592,
          "w": 86,
          "h": 49
        }
      ],
      "index": 10,
      "mapX": 610,
      "mapY": 802,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-11",
      "zh": "阶段 11：性能Antipatterns",
      "en": "Performance Antipatterns",
      "desc": "按 roadmap.sh 原始顺序整理的第 11 组学习节点。",
      "nodes": [
        {
          "id": "Hw2v1rCYn24qxBhhmdc28",
          "label": "gRPC",
          "zh": "gRPC（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -204,
          "y": 1594,
          "w": 101,
          "h": 49
        },
        {
          "id": "o532nPnL-d2vXJn9k6vMl",
          "label": "Web Server Caching",
          "zh": "Web服务端缓存",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 515,
          "y": 1603,
          "w": 227,
          "h": 49
        },
        {
          "id": "6-bgmfDTAQ9zABhpmVoHV",
          "label": "REST",
          "zh": "REST（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -294,
          "y": 1645,
          "w": 86,
          "h": 49
        },
        {
          "id": "jwv2g2Yeq-6Xv5zSd746R",
          "label": "GraphQL",
          "zh": "GraphQL（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -204,
          "y": 1646,
          "w": 101,
          "h": 49
        },
        {
          "id": "BeIg4jzbij2cwc_a_VpYG",
          "label": "Database Caching",
          "zh": "数据库缓存",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 515,
          "y": 1656,
          "w": 227,
          "h": 49
        },
        {
          "id": "p--uEm6klLx_hKxKJiXE5",
          "label": "Performance Antipatterns",
          "zh": "性能Antipatterns",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -32,
          "y": 1660,
          "w": 243,
          "h": 49
        }
      ],
      "index": 11,
      "mapX": 1130,
      "mapY": 802,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-12",
      "zh": "阶段 12：Application缓存",
      "en": "Application Caching",
      "desc": "按 roadmap.sh 原始顺序整理的第 12 组学习节点。",
      "nodes": [
        {
          "id": "5Ux_JBDOkflCaIm4tVBgO",
          "label": "Application Caching",
          "zh": "Application缓存",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 515,
          "y": 1709,
          "w": 227,
          "h": 49
        },
        {
          "id": "hxiV2uF7tvhZKe4K-4fTn",
          "label": "Busy Database",
          "zh": "Busy数据库",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 96,
          "y": 1739,
          "w": 176,
          "h": 49
        },
        {
          "id": "lwMs4yiUHF3nQwcvauers",
          "label": "Improper Instantiation",
          "zh": "Improper Instantiation（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -151,
          "y": 1740,
          "w": 243,
          "h": 49
        },
        {
          "id": "i_2M3VloG-xTgWDWp4ngt",
          "label": "Busy Frontend",
          "zh": "Busy Frontend（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 96,
          "y": 1792,
          "w": 176,
          "h": 49
        },
        {
          "id": "p1QhCptnwzTGUXVMnz_Oz",
          "label": "Monolithic Persistence",
          "zh": "Monolithic持久化",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -151,
          "y": 1793,
          "w": 243,
          "h": 49
        },
        {
          "id": "0IzQwuYi_E00bJwxDuw2B",
          "label": "Chatty I/O",
          "zh": "Chatty I/O（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 96,
          "y": 1845,
          "w": 176,
          "h": 49
        }
      ],
      "index": 12,
      "mapX": 1650,
      "mapY": 802,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-13",
      "zh": "阶段 13：Noisy Neighbor（技术术语）",
      "en": "Noisy Neighbor",
      "desc": "按 roadmap.sh 原始顺序整理的第 13 组学习节点。",
      "nodes": [
        {
          "id": "r7uQxmurvfsYtTCieHqly",
          "label": "Noisy Neighbor",
          "zh": "Noisy Neighbor（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -151,
          "y": 1846,
          "w": 243,
          "h": 49
        },
        {
          "id": "hkjYvLoVt9xKDzubm0Jy3",
          "label": "Health Monitoring",
          "zh": "Health监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 522,
          "y": 1884,
          "w": 232,
          "h": 49
        },
        {
          "id": "LNmAJmh2ndFtOQIpvX_ga",
          "label": "Retry Storm",
          "zh": "Retry Storm（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 96,
          "y": 1898,
          "w": 176,
          "h": 49
        },
        {
          "id": "Ihnmxo_bVgZABDwg1QGGk",
          "label": "Synchronous I/O",
          "zh": "Synchronous I/O（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -151,
          "y": 1899,
          "w": 243,
          "h": 49
        },
        {
          "id": "rVrwaioGURvrqNBufF2dj",
          "label": "Availability Monitoring",
          "zh": "可用性监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 522,
          "y": 1937,
          "w": 232,
          "h": 49
        },
        {
          "id": "klvHk1_e03Jarn5T46QNi",
          "label": "No Caching",
          "zh": "No缓存",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 96,
          "y": 1951,
          "w": 176,
          "h": 49
        }
      ],
      "index": 13,
      "mapX": 1650,
      "mapY": 1158,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-14",
      "zh": "阶段 14：监控",
      "en": "Monitoring",
      "desc": "按 roadmap.sh 原始顺序整理的第 14 组学习节点。",
      "nodes": [
        {
          "id": "6u3XmtJFWyJnyZUnJcGYb",
          "label": "Extraneous Fetching",
          "zh": "Extraneous Fetching（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -151,
          "y": 1952,
          "w": 243,
          "h": 49
        },
        {
          "id": "x1i3qWFtNNjd00-kAvFHw",
          "label": "Performance Monitoring",
          "zh": "性能监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 522,
          "y": 1990,
          "w": 232,
          "h": 49
        },
        {
          "id": "hDFYlGFYwcwWXLmrxodFX",
          "label": "Monitoring",
          "zh": "监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 279,
          "y": 2043,
          "w": 146,
          "h": 49
        },
        {
          "id": "I_NfmDcBph8-oyFVFTknL",
          "label": "Security Monitoring",
          "zh": "安全监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 522,
          "y": 2043,
          "w": 232,
          "h": 49
        },
        {
          "id": "eSZq74lROh5lllLyTBK5a",
          "label": "Usage Monitoring",
          "zh": "Usage监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 522,
          "y": 2096,
          "w": 232,
          "h": 49
        },
        {
          "id": "Q0fKphqmPwjTD0dhqiP6K",
          "label": "Instrumentation",
          "zh": "Instrumentation（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 522,
          "y": 2149,
          "w": 232,
          "h": 49
        }
      ],
      "index": 14,
      "mapX": 1130,
      "mapY": 1158,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-15",
      "zh": "阶段 15：设计与Implementation（技术术语）",
      "en": "Design & Implementation",
      "desc": "按 roadmap.sh 原始顺序整理的第 15 组学习节点。",
      "nodes": [
        {
          "id": "IwMOTpsYHApdvHZOhXtIw",
          "label": "Visualization & Alerts",
          "zh": "Visualization（技术术语）与告警",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 522,
          "y": 2202,
          "w": 232,
          "h": 49
        },
        {
          "id": "PtJ7-v1VCLsyaWWYHYujV",
          "label": "Design & Implementation",
          "zh": "设计与Implementation（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -342,
          "y": 2251,
          "w": 335,
          "h": 49
        },
        {
          "id": "THlzcZTNnPGLRiHPWT-Jv",
          "label": "Cloud Design Patterns",
          "zh": "云设计模式",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 139,
          "y": 2251,
          "w": 286,
          "h": 49
        },
        {
          "id": "VIbXf7Jh9PbQ9L-g6pHUG",
          "label": "Strangler Fig",
          "zh": "Strangler Fig（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2308,
          "w": 168,
          "h": 49
        },
        {
          "id": "AAgOGrra5Yz3_eG6tD2Fx",
          "label": "Sidecar",
          "zh": "Sidecar（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -162,
          "y": 2308,
          "w": 147,
          "h": 49
        },
        {
          "id": "W0cUCrhiwH_Nrzxw50x3L",
          "label": "Data Management",
          "zh": "数据管理",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 19,
          "y": 2339,
          "w": 235,
          "h": 49
        }
      ],
      "index": 15,
      "mapX": 610,
      "mapY": 1158,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-16",
      "zh": "阶段 16：Messaging（技术术语）",
      "en": "Messaging",
      "desc": "按 roadmap.sh 原始顺序整理的第 16 组学习节点。",
      "nodes": [
        {
          "id": "dsWpta3WIBvv2K9pNVPo0",
          "label": "Messaging",
          "zh": "Messaging（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 250,
          "y": 2339,
          "w": 286,
          "h": 49
        },
        {
          "id": "izPT8NfJy1JC6h3i7GJYl",
          "label": "Static Content Hosting",
          "zh": "静态ContentHosting",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2361,
          "w": 319,
          "h": 49
        },
        {
          "id": "VgvUWAC6JYFyPZKBRoEqf",
          "label": "Sequential Convoy",
          "zh": "顺序Convoy",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2396,
          "w": 267,
          "h": 49
        },
        {
          "id": "stZOcr8EUBOK_ZB48uToj",
          "label": "Valet Key",
          "zh": "Valet Key（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 27,
          "y": 2397,
          "w": 219,
          "h": 49
        },
        {
          "id": "beWKUIB6Za27yhxQwEYe3",
          "label": "Leader Election",
          "zh": "主节点Election",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2414,
          "w": 169,
          "h": 49
        },
        {
          "id": "ivr3mh0OES5n86FI1PN4N",
          "label": "CQRS",
          "zh": "CQRS（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -161,
          "y": 2414,
          "w": 144,
          "h": 49
        }
      ],
      "index": 16,
      "mapX": 90,
      "mapY": 1158,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-17",
      "zh": "阶段 17：Scheduling Agent Supervisor（技术术语）",
      "en": "Scheduling Agent Supervisor",
      "desc": "按 roadmap.sh 原始顺序整理的第 17 组学习节点。",
      "nodes": [
        {
          "id": "uR1fU6pm7zTtdBcNgSRi4",
          "label": "Scheduling Agent Supervisor",
          "zh": "Scheduling Agent Supervisor（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2449,
          "w": 267,
          "h": 49
        },
        {
          "id": "-lKq-LT7EPK7r3xbXLgwS",
          "label": "Static Content Hosting",
          "zh": "静态ContentHosting",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 27,
          "y": 2450,
          "w": 219,
          "h": 49
        },
        {
          "id": "WkoFezOXLf1H2XI9AtBtv",
          "label": "Pipes & Filters",
          "zh": "Pipes（技术术语）与Filters（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2469,
          "w": 169,
          "h": 49
        },
        {
          "id": "Hja4YF3JcgM6CPwB1mxmo",
          "label": "Ambassador",
          "zh": "Ambassador（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -161,
          "y": 2469,
          "w": 144,
          "h": 49
        },
        {
          "id": "LncTxPg-wx8loy55r5NmV",
          "label": "Queue-Based Load Leveling",
          "zh": "队列-基于负载Leveling",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2502,
          "w": 267,
          "h": 49
        },
        {
          "id": "R6YehzA3X6DDo6oGBoBAx",
          "label": "Sharding",
          "zh": "分片",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 27,
          "y": 2503,
          "w": 219,
          "h": 49
        }
      ],
      "index": 17,
      "mapX": 90,
      "mapY": 1514,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-18",
      "zh": "阶段 18：网关路由",
      "en": "Gateway Routing",
      "desc": "按 roadmap.sh 原始顺序整理的第 18 组学习节点。",
      "nodes": [
        {
          "id": "LXH_mDlILqcyIKtMYTWqy",
          "label": "Gateway Routing",
          "zh": "网关路由",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2523,
          "w": 319,
          "h": 49
        },
        {
          "id": "2ryzJhRDTo98gGgn9mAxR",
          "label": "Publisher/Subscriber",
          "zh": "Publisher/Subscriber（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2555,
          "w": 267,
          "h": 49
        },
        {
          "id": "WB7vQ4IJ0TPh2MbZvxP6V",
          "label": "Materialized View",
          "zh": "MaterializedVIEW 视图",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 27,
          "y": 2556,
          "w": 219,
          "h": 49
        },
        {
          "id": "0SOWAA8hrLM-WsG5k66fd",
          "label": "Gateway Offloading",
          "zh": "网关Offloading",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2576,
          "w": 319,
          "h": 49
        },
        {
          "id": "DZcZEOi7h3u0744YhASet",
          "label": "Priority Queue",
          "zh": "Priority队列",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2608,
          "w": 267,
          "h": 49
        },
        {
          "id": "AH0nVeVsfYOjcI3vZvcdz",
          "label": "Index Table",
          "zh": "INDEX 索引TABLE 表",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 27,
          "y": 2609,
          "w": 219,
          "h": 49
        }
      ],
      "index": 18,
      "mapX": 610,
      "mapY": 1514,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-19",
      "zh": "阶段 19：网关Aggregation",
      "en": "Gateway Aggregation",
      "desc": "按 roadmap.sh 原始顺序整理的第 19 组学习节点。",
      "nodes": [
        {
          "id": "bANGLm_5zR9mqMd6Oox8s",
          "label": "Gateway Aggregation",
          "zh": "网关Aggregation",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2629,
          "w": 319,
          "h": 49
        },
        {
          "id": "siXdR3TB9-4wx_qWieJ5w",
          "label": "Pipes and Filters",
          "zh": "Pipes（技术术语）与Filters（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2661,
          "w": 267,
          "h": 49
        },
        {
          "id": "7OgRKlwFqrk3XO2z49EI1",
          "label": "Event Sourcing",
          "zh": "事件Sourcing",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 27,
          "y": 2662,
          "w": 219,
          "h": 49
        },
        {
          "id": "BrgXwf7g2F-6Rqfjryvpj",
          "label": "External Config Store",
          "zh": "External配置Store",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2682,
          "w": 319,
          "h": 49
        },
        {
          "id": "9Ld07KLOqP0ICtXEjngYM",
          "label": "Competing Consumers",
          "zh": "Competing Consumers（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2714,
          "w": 267,
          "h": 49
        },
        {
          "id": "LTD3dn05c0ruUJW0IQO7z",
          "label": "CQRS",
          "zh": "CQRS（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 27,
          "y": 2715,
          "w": 219,
          "h": 49
        }
      ],
      "index": 19,
      "mapX": 1130,
      "mapY": 1514,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-20",
      "zh": "阶段 20：计算资源Consolidation",
      "en": "Compute Resource Consolidation",
      "desc": "按 roadmap.sh 原始顺序整理的第 20 组学习节点。",
      "nodes": [
        {
          "id": "ODjVoXnvJasPvCS2A5iMO",
          "label": "Compute Resource Consolidation",
          "zh": "计算资源Consolidation",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2735,
          "w": 319,
          "h": 49
        },
        {
          "id": "aCzRgUkVBvtHUeLU6p5ZH",
          "label": "Choreography",
          "zh": "Choreography（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2767,
          "w": 267,
          "h": 49
        },
        {
          "id": "PK4V9OWNVi8StdA2N13X2",
          "label": "Cache-Aside",
          "zh": "缓存-Aside",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 27,
          "y": 2768,
          "w": 219,
          "h": 49
        },
        {
          "id": "n4It-lr7FFtSY83DcGydX",
          "label": "Backends for Frontend",
          "zh": "Backends for Frontend（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2788,
          "w": 319,
          "h": 49
        },
        {
          "id": "kl4upCnnZvJSf2uII1Pa0",
          "label": "Claim Check",
          "zh": "Claim Check（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 261,
          "y": 2820,
          "w": 267,
          "h": 49
        },
        {
          "id": "4hi7LvjLcv8eR6m-uk8XQ",
          "label": "Anti-Corruption Layer",
          "zh": "Anti-Corruption Layer（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -334,
          "y": 2841,
          "w": 319,
          "h": 49
        }
      ],
      "index": 20,
      "mapX": 1650,
      "mapY": 1514,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-21",
      "zh": "阶段 21：Reliability模式",
      "en": "Reliability Patterns",
      "desc": "按 roadmap.sh 原始顺序整理的第 21 组学习节点。",
      "nodes": [
        {
          "id": "eNFNXPsFiryVxFe4unVxk",
          "label": "Async Request Reply",
          "zh": "Async请求Reply",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 262,
          "y": 2873,
          "w": 266,
          "h": 49
        },
        {
          "id": "DYkdM_L7T2GcTPAoZNnUR",
          "label": "Reliability Patterns",
          "zh": "Reliability模式",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 527,
          "y": 2958,
          "w": 187,
          "h": 49
        },
        {
          "id": "Xzkvf4naveszLGV9b-8ih",
          "label": "Availability",
          "zh": "可用性",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -352,
          "y": 3020,
          "w": 284,
          "h": 49
        },
        {
          "id": "wPe7Xlwqws7tEpTAVvYjr",
          "label": "High Availability",
          "zh": "High可用性",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -72,
          "y": 3021,
          "w": 273,
          "h": 49
        },
        {
          "id": "wlAWMjxZF6yav3ZXOScxH",
          "label": "Resiliency",
          "zh": "Resiliency（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 198,
          "y": 3021,
          "w": 284,
          "h": 49
        },
        {
          "id": "FPPJw-I1cw8OxKwmDh0dT",
          "label": "Deployment Stamps",
          "zh": "部署Stamps",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -344,
          "y": 3077,
          "w": 266,
          "h": 49
        }
      ],
      "index": 21,
      "mapX": 1650,
      "mapY": 1870,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-22",
      "zh": "阶段 22：部署Stamps",
      "en": "Deployment Stamps",
      "desc": "按 roadmap.sh 原始顺序整理的第 22 组学习节点。",
      "nodes": [
        {
          "id": "Ze471tPbAwlwZyU4oIzH9",
          "label": "Deployment Stamps",
          "zh": "部署Stamps",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -64,
          "y": 3078,
          "w": 257,
          "h": 49
        },
        {
          "id": "PLn9TF9GYnPcbpTdDMQbG",
          "label": "Bulkhead",
          "zh": "Bulkhead（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 3078,
          "w": 266,
          "h": 49
        },
        {
          "id": "Ml9lPDGjRAJTHkBnX51Un",
          "label": "Geodes",
          "zh": "Geodes（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -344,
          "y": 3130,
          "w": 111,
          "h": 49
        },
        {
          "id": "6YVkguDOtwveyeP4Z1NL3",
          "label": "Throttling",
          "zh": "Throttling（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -227,
          "y": 3130,
          "w": 151,
          "h": 50
        },
        {
          "id": "6hOSEZJZ7yezVN67h5gmS",
          "label": "Geodes",
          "zh": "Geodes（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -64,
          "y": 3131,
          "w": 124,
          "h": 49
        },
        {
          "id": "IR2_kgs2U9rnAJiDBmpqK",
          "label": "Bulkhead",
          "zh": "Bulkhead（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 64,
          "y": 3131,
          "w": 129,
          "h": 49
        }
      ],
      "index": 22,
      "mapX": 1130,
      "mapY": 1870,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-23",
      "zh": "阶段 23：Circuit Breaker（技术术语）",
      "en": "Circuit Breaker",
      "desc": "按 roadmap.sh 原始顺序整理的第 23 组学习节点。",
      "nodes": [
        {
          "id": "O4zYDqvVWD7sMI27k_0Nl",
          "label": "Circuit Breaker",
          "zh": "Circuit Breaker（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 3131,
          "w": 266,
          "h": 49
        },
        {
          "id": "cNJQoMNZmxNygWAJIA8HI",
          "label": "Health Endpoint Monitoring",
          "zh": "Health端点监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -344,
          "y": 3183,
          "w": 266,
          "h": 49
        },
        {
          "id": "uK5o7NgDvr2pV0ulF0Fh9",
          "label": "Health Endpoint Monitoring",
          "zh": "Health端点监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -64,
          "y": 3184,
          "w": 257,
          "h": 49
        },
        {
          "id": "MNlWNjrG8eh5OzPVlbb9t",
          "label": "Compensating Transaction",
          "zh": "Compensating事务",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 3184,
          "w": 266,
          "h": 49
        },
        {
          "id": "D1OmCoqvd3-_af3u0ciHr",
          "label": "Circuit Breaker",
          "zh": "Circuit Breaker（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -64,
          "y": 3235,
          "w": 257,
          "h": 49
        },
        {
          "id": "-M3Zd8w79sKBAY6_aJRE8",
          "label": "Queue-Based Load Leveling",
          "zh": "队列-基于负载Leveling",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -344,
          "y": 3236,
          "w": 266,
          "h": 49
        }
      ],
      "index": 23,
      "mapX": 610,
      "mapY": 1870,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-24",
      "zh": "阶段 24：安全",
      "en": "Security",
      "desc": "按 roadmap.sh 原始顺序整理的第 24 组学习节点。",
      "nodes": [
        {
          "id": "CKCNk3obx4u43rBqUj2Yf",
          "label": "Health Endpoint Monitoring",
          "zh": "Health端点监控",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 3237,
          "w": 266,
          "h": 49
        },
        {
          "id": "AJLBFyAsEdQYF6ygO0MmQ",
          "label": "Leader Election",
          "zh": "主节点Election",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 3290,
          "w": 266,
          "h": 49
        },
        {
          "id": "ZvYpE6-N5dAtRDIwqcAu6",
          "label": "Security",
          "zh": "安全",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -73,
          "y": 3292,
          "w": 275,
          "h": 49
        },
        {
          "id": "NybkOwl1lgaglZPRJQJ_Z",
          "label": "Queue-Based Load Leveling",
          "zh": "队列-基于负载Leveling",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 3343,
          "w": 266,
          "h": 49
        },
        {
          "id": "lHPl-kr1ArblR7bJeQEB9",
          "label": "Federated Identity",
          "zh": "Federated Identity（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -58,
          "y": 3349,
          "w": 247,
          "h": 49
        },
        {
          "id": "xX_9VGUaOkBYFH3jPjnww",
          "label": "Retry",
          "zh": "Retry（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 3396,
          "w": 266,
          "h": 49
        }
      ],
      "index": 24,
      "mapX": 90,
      "mapY": 1870,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-25",
      "zh": "阶段 25：Gatekeeper（技术术语）",
      "en": "Gatekeeper",
      "desc": "按 roadmap.sh 原始顺序整理的第 25 组学习节点。",
      "nodes": [
        {
          "id": "DTQJu0AvgWOhMFcOYqzTD",
          "label": "Gatekeeper",
          "zh": "Gatekeeper（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -58,
          "y": 3402,
          "w": 247,
          "h": 49
        },
        {
          "id": "RTEJHZ26znfBLrpQPtNvn",
          "label": "Scheduler Agent Supervisor",
          "zh": "调度AgentSupervisor",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 208,
          "y": 3449,
          "w": 266,
          "h": 49
        },
        {
          "id": "VltZgIrApHOwZ8YHvdmHB",
          "label": "Valet Key",
          "zh": "Valet Key（技术术语）",
          "desc": "系统设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -58,
          "y": 3455,
          "w": 247,
          "h": 49
        }
      ],
      "index": 25,
      "mapX": 90,
      "mapY": 2226,
      "mapW": 430,
      "mapH": 232
    }
  ],
  "nodes": [
    {
      "id": "_hYN0gEi9BL24nptEtXWU",
      "label": "Introduction",
      "zh": "入门介绍",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 106,
      "y": 214,
      "w": 247,
      "h": 49
    },
    {
      "id": "idLHBxhvcIqZTqmh_E8Az",
      "label": "What is System Design?",
      "zh": "什么是系统设计",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 433,
      "y": 188,
      "w": 308,
      "h": 49
    },
    {
      "id": "os3Pa6W9SSNEzgmlBbglQ",
      "label": "How to approach System Design?",
      "zh": "如何approach系统设计",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 433,
      "y": 242,
      "w": 308,
      "h": 49
    },
    {
      "id": "e_15lymUjFc6VWqzPnKxG",
      "label": "Performance vs Scalability",
      "zh": "性能与扩展性对比",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 106,
      "y": 267,
      "w": 247,
      "h": 49
    },
    {
      "id": "O3wAHLnzrkvLWr4afHDdr",
      "label": "Latency vs Throughput",
      "zh": "延迟与吞吐对比",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 106,
      "y": 320,
      "w": 247,
      "h": 49
    },
    {
      "id": "uJc27BNAuP321HQNbjftn",
      "label": "Availability vs Consistency",
      "zh": "可用性与一致性对比",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 106,
      "y": 373,
      "w": 247,
      "h": 49
    },
    {
      "id": "tcGdVQsCEobdV9hgOq3eG",
      "label": "CAP Theorem",
      "zh": "CAP Theorem（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -295,
      "y": 363,
      "w": 305,
      "h": 49
    },
    {
      "id": "GHe8V-REu1loRpDnHbyUn",
      "label": "Consistency Patterns",
      "zh": "一致性模式",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 106,
      "y": 426,
      "w": 247,
      "h": 49
    },
    {
      "id": "EKD5AikZtwjtsEYRPJhQ2",
      "label": "Weak Consistency",
      "zh": "弱一致性",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 455,
      "y": 374,
      "w": 263,
      "h": 49
    },
    {
      "id": "rRDGVynX43inSeQ9lR_FS",
      "label": "Eventual Consistency",
      "zh": "最终一致性",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 455,
      "y": 427,
      "w": 263,
      "h": 49
    },
    {
      "id": "JjB7eB8gdRCAYf5M0RcT7",
      "label": "Strong Consistency",
      "zh": "强一致性",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 455,
      "y": 481,
      "w": 263,
      "h": 49
    },
    {
      "id": "ezptoTqeaepByegxS5kHL",
      "label": "Availability Patterns",
      "zh": "可用性模式",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 106,
      "y": 552,
      "w": 247,
      "h": 49
    },
    {
      "id": "L_jRfjvMGjFbHEbozeVQl",
      "label": "Fail-Over",
      "zh": "Fail-Over（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -291,
      "y": 583,
      "w": 141,
      "h": 49
    },
    {
      "id": "0RQ5jzZKdadYY0h_QZ0Bb",
      "label": "Replication",
      "zh": "复制",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -129,
      "y": 583,
      "w": 141,
      "h": 49
    },
    {
      "id": "uHdrZllrZFAnVkwIB3y5-",
      "label": "Availability in Numbers",
      "zh": "可用性inNumbers",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 441,
      "y": 696,
      "w": 304,
      "h": 50
    },
    {
      "id": "DOESIlBThd_wp2uOSd_CS",
      "label": "Background Jobs",
      "zh": "Background Jobs（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -38,
      "y": 709,
      "w": 219,
      "h": 49
    },
    {
      "id": "NEsPjQifNDlZJE-2YLVl1",
      "label": "Event-Driven",
      "zh": "事件-Driven",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -301,
      "y": 683,
      "w": 187,
      "h": 49
    },
    {
      "id": "zoViI4kzpKIxpU20T89K_",
      "label": "Schedule Driven",
      "zh": "Schedule Driven（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -301,
      "y": 736,
      "w": 187,
      "h": 49
    },
    {
      "id": "2gRIstNT-fTkv5GZ692gx",
      "label": "Returning Results",
      "zh": "Returning Results（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -301,
      "y": 809,
      "w": 187,
      "h": 49
    },
    {
      "id": "Uk6J8JRcKVEFz4_8rLfnQ",
      "label": "Domain Name System",
      "zh": "域Name系统",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -38,
      "y": 809,
      "w": 219,
      "h": 49
    },
    {
      "id": "O730v5Ww3ByAiBSs6fwyM",
      "label": "Content Delivery Networks",
      "zh": "Content交付Networks",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 239,
      "y": 809,
      "w": 262,
      "h": 49
    },
    {
      "id": "uIerrf_oziiLg-KEyz8WM",
      "label": "Push CDNs",
      "zh": "推送CDNs",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 572,
      "y": 838,
      "w": 183,
      "h": 49
    },
    {
      "id": "HkXiEMLqxJoQyAHav3ccL",
      "label": "Pull CDNs",
      "zh": "拉取CDNs",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 572,
      "y": 785,
      "w": 183,
      "h": 49
    },
    {
      "id": "14KqLKgh090Rb3MDwelWY",
      "label": "Load Balancers",
      "zh": "负载Balancers",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 239,
      "y": 1029,
      "w": 167,
      "h": 49
    },
    {
      "id": "ocdcbhHrwjJX0KWgmsOL6",
      "label": "LB vs Reverse Proxy",
      "zh": "LB（技术术语）与Reverse代理对比",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 502,
      "y": 923,
      "w": 251,
      "h": 49
    },
    {
      "id": "urSjLyLTE5IIz0TFxMBWL",
      "label": "Load Balancing Algorithms",
      "zh": "负载BalancingAlgorithms",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 502,
      "y": 976,
      "w": 251,
      "h": 49
    },
    {
      "id": "e69-JVbDj7dqV_p1j1kML",
      "label": "Layer 7 Load Balancing",
      "zh": "层7负载Balancing",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 502,
      "y": 1029,
      "w": 251,
      "h": 49
    },
    {
      "id": "MpM9rT1-_LGD7YbnBjqOk",
      "label": "Layer 4 Load Balancing",
      "zh": "层4负载Balancing",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 502,
      "y": 1082,
      "w": 251,
      "h": 49
    },
    {
      "id": "IkUCfSWNY-02wg2WCo1c6",
      "label": "Horizontal Scaling",
      "zh": "Horizontal扩缩",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 502,
      "y": 1135,
      "w": 251,
      "h": 49
    },
    {
      "id": "XXuzTrP5UNVwSpAk-tAGr",
      "label": "Application Layer",
      "zh": "Application Layer（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -38,
      "y": 1029,
      "w": 184,
      "h": 49
    },
    {
      "id": "UKTiaHCzYXnrNw31lHriv",
      "label": "Microservices",
      "zh": "Microservices（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -38,
      "y": 890,
      "w": 184,
      "h": 49
    },
    {
      "id": "Nt0HUWLOl4O77elF8Is1S",
      "label": "Service Discovery",
      "zh": "服务发现",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -38,
      "y": 943,
      "w": 184,
      "h": 49
    },
    {
      "id": "5FXwwRMNBhG7LT5ub6t2L",
      "label": "Databases",
      "zh": "数据库",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -38,
      "y": 1129,
      "w": 184,
      "h": 49
    },
    {
      "id": "KLnpMR2FxlQkCHZP6-tZm",
      "label": "SQL vs NoSQL",
      "zh": "SQL（技术术语）与NoSQL（技术术语）对比",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -38,
      "y": 1222,
      "w": 184,
      "h": 49
    },
    {
      "id": "dc-aIbBwUdlwgwQKGrq49",
      "label": "Replication",
      "zh": "复制",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -295,
      "y": 1166,
      "w": 193,
      "h": 49
    },
    {
      "id": "FX6dcV_93zOfbZMdM_-li",
      "label": "Sharding",
      "zh": "分片",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -295,
      "y": 1219,
      "w": 193,
      "h": 49
    },
    {
      "id": "DGmVRI7oWdSOeIUn_g0rI",
      "label": "Federation",
      "zh": "Federation（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -295,
      "y": 1272,
      "w": 193,
      "h": 49
    },
    {
      "id": "Zp9D4--DgtlAjE2nIfaO_",
      "label": "Denormalization",
      "zh": "反规范化",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -295,
      "y": 1325,
      "w": 193,
      "h": 49
    },
    {
      "id": "fY8zgbB13wxZ1CFtMSdZZ",
      "label": "SQL Tuning",
      "zh": "SQL调优",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -295,
      "y": 1378,
      "w": 193,
      "h": 49
    },
    {
      "id": "KFtdmmce4bRkDyvFXZzLN",
      "label": "Key-Value Store",
      "zh": "Key-Value Store（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -294,
      "y": 899,
      "w": 193,
      "h": 49
    },
    {
      "id": "didEznSlVHqqlijtyOSr3",
      "label": "Document Store",
      "zh": "Document Store（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -294,
      "y": 952,
      "w": 193,
      "h": 49
    },
    {
      "id": "WHq1AdISkcgthaugE9uY7",
      "label": "Wide Column Store",
      "zh": "Wide Column Store（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -294,
      "y": 1005,
      "w": 193,
      "h": 49
    },
    {
      "id": "6RLgnL8qLBzYkllHeaI-Z",
      "label": "Graph Databases",
      "zh": "Graph数据库",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -294,
      "y": 1058,
      "w": 193,
      "h": 49
    },
    {
      "id": "-X4g8kljgVBOBcf1DDzgi",
      "label": "Caching",
      "zh": "缓存",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 239,
      "y": 1261,
      "w": 167,
      "h": 49
    },
    {
      "id": "Bgqgl67FK56ioLNFivIsc",
      "label": "Refresh Ahead",
      "zh": "Refresh Ahead（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 512,
      "y": 1230,
      "w": 232,
      "h": 49
    },
    {
      "id": "vNndJ-MWetcbaF2d-3-JP",
      "label": "Write-behind",
      "zh": "Write-behind（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 512,
      "y": 1283,
      "w": 232,
      "h": 49
    },
    {
      "id": "RNITLR1FUQWkRbSBXTD_z",
      "label": "Write-through",
      "zh": "Write-through（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 512,
      "y": 1336,
      "w": 232,
      "h": 49
    },
    {
      "id": "bffJlvoLHFldS0CluWifP",
      "label": "Cache Aside",
      "zh": "缓存Aside",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 512,
      "y": 1389,
      "w": 232,
      "h": 49
    },
    {
      "id": "RHNRb6QWiGvCK3KQOPK3u",
      "label": "Client Caching",
      "zh": "客户端缓存",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 515,
      "y": 1497,
      "w": 227,
      "h": 49
    },
    {
      "id": "Kisvxlrjb7XnKFCOdxRtb",
      "label": "CDN Caching",
      "zh": "CDN缓存",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 515,
      "y": 1550,
      "w": 227,
      "h": 49
    },
    {
      "id": "o532nPnL-d2vXJn9k6vMl",
      "label": "Web Server Caching",
      "zh": "Web服务端缓存",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 515,
      "y": 1603,
      "w": 227,
      "h": 49
    },
    {
      "id": "BeIg4jzbij2cwc_a_VpYG",
      "label": "Database Caching",
      "zh": "数据库缓存",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 515,
      "y": 1656,
      "w": 227,
      "h": 49
    },
    {
      "id": "5Ux_JBDOkflCaIm4tVBgO",
      "label": "Application Caching",
      "zh": "Application缓存",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 515,
      "y": 1709,
      "w": 227,
      "h": 49
    },
    {
      "id": "84N4XY31PwXRntXX1sdCU",
      "label": "Asynchronism",
      "zh": "Asynchronism（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 239,
      "y": 1378,
      "w": 167,
      "h": 49
    },
    {
      "id": "YiYRZFE_zwPMiCZxz9FnP",
      "label": "Back Pressure",
      "zh": "Back Pressure（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -40,
      "y": 1325,
      "w": 190,
      "h": 49
    },
    {
      "id": "a9wGW_H1HpvvdYCXoS-Rf",
      "label": "Task Queues",
      "zh": "Task Queues（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -40,
      "y": 1378,
      "w": 190,
      "h": 49
    },
    {
      "id": "37X1_9eCmkZkz5RDudE5N",
      "label": "Message Queues",
      "zh": "消息Queues",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -40,
      "y": 1431,
      "w": 190,
      "h": 49
    },
    {
      "id": "3pRi8M4xQXsehkdfUNtYL",
      "label": "Idempotent Operations",
      "zh": "Idempotent Operations（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 239,
      "y": 1526,
      "w": 226,
      "h": 49
    },
    {
      "id": "uQFzD_ryd-8Dr1ppjorYJ",
      "label": "Communication",
      "zh": "Communication（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 11,
      "y": 1526,
      "w": 155,
      "h": 49
    },
    {
      "id": "I_nR6EwjNXSG7_hw-_VhX",
      "label": "HTTP",
      "zh": "HTTP（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -302,
      "y": 1526,
      "w": 76,
      "h": 49
    },
    {
      "id": "2nF5uC6fYKbf0RFgGNHiP",
      "label": "TCP",
      "zh": "TCP（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -224,
      "y": 1526,
      "w": 66,
      "h": 49
    },
    {
      "id": "LC5aTmUKNiw9RuSUt3fSE",
      "label": "UDP",
      "zh": "UDP（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -155,
      "y": 1526,
      "w": 66,
      "h": 49
    },
    {
      "id": "ixqucoAkgnphWYAFnsMe-",
      "label": "RPC",
      "zh": "RPC（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -294,
      "y": 1592,
      "w": 86,
      "h": 49
    },
    {
      "id": "6-bgmfDTAQ9zABhpmVoHV",
      "label": "REST",
      "zh": "REST（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -294,
      "y": 1645,
      "w": 86,
      "h": 49
    },
    {
      "id": "Hw2v1rCYn24qxBhhmdc28",
      "label": "gRPC",
      "zh": "gRPC（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -204,
      "y": 1594,
      "w": 101,
      "h": 49
    },
    {
      "id": "jwv2g2Yeq-6Xv5zSd746R",
      "label": "GraphQL",
      "zh": "GraphQL（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -204,
      "y": 1646,
      "w": 101,
      "h": 49
    },
    {
      "id": "p--uEm6klLx_hKxKJiXE5",
      "label": "Performance Antipatterns",
      "zh": "性能Antipatterns",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -32,
      "y": 1660,
      "w": 243,
      "h": 49
    },
    {
      "id": "hxiV2uF7tvhZKe4K-4fTn",
      "label": "Busy Database",
      "zh": "Busy数据库",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 96,
      "y": 1739,
      "w": 176,
      "h": 49
    },
    {
      "id": "i_2M3VloG-xTgWDWp4ngt",
      "label": "Busy Frontend",
      "zh": "Busy Frontend（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 96,
      "y": 1792,
      "w": 176,
      "h": 49
    },
    {
      "id": "0IzQwuYi_E00bJwxDuw2B",
      "label": "Chatty I/O",
      "zh": "Chatty I/O（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 96,
      "y": 1845,
      "w": 176,
      "h": 49
    },
    {
      "id": "6u3XmtJFWyJnyZUnJcGYb",
      "label": "Extraneous Fetching",
      "zh": "Extraneous Fetching（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -151,
      "y": 1952,
      "w": 243,
      "h": 49
    },
    {
      "id": "lwMs4yiUHF3nQwcvauers",
      "label": "Improper Instantiation",
      "zh": "Improper Instantiation（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -151,
      "y": 1740,
      "w": 243,
      "h": 49
    },
    {
      "id": "p1QhCptnwzTGUXVMnz_Oz",
      "label": "Monolithic Persistence",
      "zh": "Monolithic持久化",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -151,
      "y": 1793,
      "w": 243,
      "h": 49
    },
    {
      "id": "klvHk1_e03Jarn5T46QNi",
      "label": "No Caching",
      "zh": "No缓存",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 96,
      "y": 1951,
      "w": 176,
      "h": 49
    },
    {
      "id": "r7uQxmurvfsYtTCieHqly",
      "label": "Noisy Neighbor",
      "zh": "Noisy Neighbor（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -151,
      "y": 1846,
      "w": 243,
      "h": 49
    },
    {
      "id": "LNmAJmh2ndFtOQIpvX_ga",
      "label": "Retry Storm",
      "zh": "Retry Storm（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 96,
      "y": 1898,
      "w": 176,
      "h": 49
    },
    {
      "id": "Ihnmxo_bVgZABDwg1QGGk",
      "label": "Synchronous I/O",
      "zh": "Synchronous I/O（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -151,
      "y": 1899,
      "w": 243,
      "h": 49
    },
    {
      "id": "hDFYlGFYwcwWXLmrxodFX",
      "label": "Monitoring",
      "zh": "监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 279,
      "y": 2043,
      "w": 146,
      "h": 49
    },
    {
      "id": "hkjYvLoVt9xKDzubm0Jy3",
      "label": "Health Monitoring",
      "zh": "Health监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 522,
      "y": 1884,
      "w": 232,
      "h": 49
    },
    {
      "id": "rVrwaioGURvrqNBufF2dj",
      "label": "Availability Monitoring",
      "zh": "可用性监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 522,
      "y": 1937,
      "w": 232,
      "h": 49
    },
    {
      "id": "x1i3qWFtNNjd00-kAvFHw",
      "label": "Performance Monitoring",
      "zh": "性能监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 522,
      "y": 1990,
      "w": 232,
      "h": 49
    },
    {
      "id": "I_NfmDcBph8-oyFVFTknL",
      "label": "Security Monitoring",
      "zh": "安全监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 522,
      "y": 2043,
      "w": 232,
      "h": 49
    },
    {
      "id": "eSZq74lROh5lllLyTBK5a",
      "label": "Usage Monitoring",
      "zh": "Usage监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 522,
      "y": 2096,
      "w": 232,
      "h": 49
    },
    {
      "id": "Q0fKphqmPwjTD0dhqiP6K",
      "label": "Instrumentation",
      "zh": "Instrumentation（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 522,
      "y": 2149,
      "w": 232,
      "h": 49
    },
    {
      "id": "IwMOTpsYHApdvHZOhXtIw",
      "label": "Visualization & Alerts",
      "zh": "Visualization（技术术语）与告警",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 522,
      "y": 2202,
      "w": 232,
      "h": 49
    },
    {
      "id": "THlzcZTNnPGLRiHPWT-Jv",
      "label": "Cloud Design Patterns",
      "zh": "云设计模式",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 139,
      "y": 2251,
      "w": 286,
      "h": 49
    },
    {
      "id": "dsWpta3WIBvv2K9pNVPo0",
      "label": "Messaging",
      "zh": "Messaging（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 250,
      "y": 2339,
      "w": 286,
      "h": 49
    },
    {
      "id": "VgvUWAC6JYFyPZKBRoEqf",
      "label": "Sequential Convoy",
      "zh": "顺序Convoy",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2396,
      "w": 267,
      "h": 49
    },
    {
      "id": "uR1fU6pm7zTtdBcNgSRi4",
      "label": "Scheduling Agent Supervisor",
      "zh": "Scheduling Agent Supervisor（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2449,
      "w": 267,
      "h": 49
    },
    {
      "id": "LncTxPg-wx8loy55r5NmV",
      "label": "Queue-Based Load Leveling",
      "zh": "队列-基于负载Leveling",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2502,
      "w": 267,
      "h": 49
    },
    {
      "id": "2ryzJhRDTo98gGgn9mAxR",
      "label": "Publisher/Subscriber",
      "zh": "Publisher/Subscriber（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2555,
      "w": 267,
      "h": 49
    },
    {
      "id": "DZcZEOi7h3u0744YhASet",
      "label": "Priority Queue",
      "zh": "Priority队列",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2608,
      "w": 267,
      "h": 49
    },
    {
      "id": "siXdR3TB9-4wx_qWieJ5w",
      "label": "Pipes and Filters",
      "zh": "Pipes（技术术语）与Filters（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2661,
      "w": 267,
      "h": 49
    },
    {
      "id": "9Ld07KLOqP0ICtXEjngYM",
      "label": "Competing Consumers",
      "zh": "Competing Consumers（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2714,
      "w": 267,
      "h": 49
    },
    {
      "id": "aCzRgUkVBvtHUeLU6p5ZH",
      "label": "Choreography",
      "zh": "Choreography（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2767,
      "w": 267,
      "h": 49
    },
    {
      "id": "kl4upCnnZvJSf2uII1Pa0",
      "label": "Claim Check",
      "zh": "Claim Check（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 261,
      "y": 2820,
      "w": 267,
      "h": 49
    },
    {
      "id": "eNFNXPsFiryVxFe4unVxk",
      "label": "Async Request Reply",
      "zh": "Async请求Reply",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 262,
      "y": 2873,
      "w": 266,
      "h": 49
    },
    {
      "id": "W0cUCrhiwH_Nrzxw50x3L",
      "label": "Data Management",
      "zh": "数据管理",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 19,
      "y": 2339,
      "w": 235,
      "h": 49
    },
    {
      "id": "stZOcr8EUBOK_ZB48uToj",
      "label": "Valet Key",
      "zh": "Valet Key（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 27,
      "y": 2397,
      "w": 219,
      "h": 49
    },
    {
      "id": "-lKq-LT7EPK7r3xbXLgwS",
      "label": "Static Content Hosting",
      "zh": "静态ContentHosting",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 27,
      "y": 2450,
      "w": 219,
      "h": 49
    },
    {
      "id": "R6YehzA3X6DDo6oGBoBAx",
      "label": "Sharding",
      "zh": "分片",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 27,
      "y": 2503,
      "w": 219,
      "h": 49
    },
    {
      "id": "WB7vQ4IJ0TPh2MbZvxP6V",
      "label": "Materialized View",
      "zh": "MaterializedVIEW 视图",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 27,
      "y": 2556,
      "w": 219,
      "h": 49
    },
    {
      "id": "AH0nVeVsfYOjcI3vZvcdz",
      "label": "Index Table",
      "zh": "INDEX 索引TABLE 表",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 27,
      "y": 2609,
      "w": 219,
      "h": 49
    },
    {
      "id": "7OgRKlwFqrk3XO2z49EI1",
      "label": "Event Sourcing",
      "zh": "事件Sourcing",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 27,
      "y": 2662,
      "w": 219,
      "h": 49
    },
    {
      "id": "LTD3dn05c0ruUJW0IQO7z",
      "label": "CQRS",
      "zh": "CQRS（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 27,
      "y": 2715,
      "w": 219,
      "h": 49
    },
    {
      "id": "PK4V9OWNVi8StdA2N13X2",
      "label": "Cache-Aside",
      "zh": "缓存-Aside",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 27,
      "y": 2768,
      "w": 219,
      "h": 49
    },
    {
      "id": "PtJ7-v1VCLsyaWWYHYujV",
      "label": "Design & Implementation",
      "zh": "设计与Implementation（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -342,
      "y": 2251,
      "w": 335,
      "h": 49
    },
    {
      "id": "VIbXf7Jh9PbQ9L-g6pHUG",
      "label": "Strangler Fig",
      "zh": "Strangler Fig（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2308,
      "w": 168,
      "h": 49
    },
    {
      "id": "izPT8NfJy1JC6h3i7GJYl",
      "label": "Static Content Hosting",
      "zh": "静态ContentHosting",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2361,
      "w": 319,
      "h": 49
    },
    {
      "id": "AAgOGrra5Yz3_eG6tD2Fx",
      "label": "Sidecar",
      "zh": "Sidecar（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -162,
      "y": 2308,
      "w": 147,
      "h": 49
    },
    {
      "id": "WkoFezOXLf1H2XI9AtBtv",
      "label": "Pipes & Filters",
      "zh": "Pipes（技术术语）与Filters（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2469,
      "w": 169,
      "h": 49
    },
    {
      "id": "beWKUIB6Za27yhxQwEYe3",
      "label": "Leader Election",
      "zh": "主节点Election",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2414,
      "w": 169,
      "h": 49
    },
    {
      "id": "LXH_mDlILqcyIKtMYTWqy",
      "label": "Gateway Routing",
      "zh": "网关路由",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2523,
      "w": 319,
      "h": 49
    },
    {
      "id": "0SOWAA8hrLM-WsG5k66fd",
      "label": "Gateway Offloading",
      "zh": "网关Offloading",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2576,
      "w": 319,
      "h": 49
    },
    {
      "id": "bANGLm_5zR9mqMd6Oox8s",
      "label": "Gateway Aggregation",
      "zh": "网关Aggregation",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2629,
      "w": 319,
      "h": 49
    },
    {
      "id": "BrgXwf7g2F-6Rqfjryvpj",
      "label": "External Config Store",
      "zh": "External配置Store",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2682,
      "w": 319,
      "h": 49
    },
    {
      "id": "ODjVoXnvJasPvCS2A5iMO",
      "label": "Compute Resource Consolidation",
      "zh": "计算资源Consolidation",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2735,
      "w": 319,
      "h": 49
    },
    {
      "id": "ivr3mh0OES5n86FI1PN4N",
      "label": "CQRS",
      "zh": "CQRS（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -161,
      "y": 2414,
      "w": 144,
      "h": 49
    },
    {
      "id": "n4It-lr7FFtSY83DcGydX",
      "label": "Backends for Frontend",
      "zh": "Backends for Frontend（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2788,
      "w": 319,
      "h": 49
    },
    {
      "id": "4hi7LvjLcv8eR6m-uk8XQ",
      "label": "Anti-Corruption Layer",
      "zh": "Anti-Corruption Layer（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -334,
      "y": 2841,
      "w": 319,
      "h": 49
    },
    {
      "id": "Hja4YF3JcgM6CPwB1mxmo",
      "label": "Ambassador",
      "zh": "Ambassador（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -161,
      "y": 2469,
      "w": 144,
      "h": 49
    },
    {
      "id": "DYkdM_L7T2GcTPAoZNnUR",
      "label": "Reliability Patterns",
      "zh": "Reliability模式",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 527,
      "y": 2958,
      "w": 187,
      "h": 49
    },
    {
      "id": "Xzkvf4naveszLGV9b-8ih",
      "label": "Availability",
      "zh": "可用性",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -352,
      "y": 3020,
      "w": 284,
      "h": 49
    },
    {
      "id": "FPPJw-I1cw8OxKwmDh0dT",
      "label": "Deployment Stamps",
      "zh": "部署Stamps",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -344,
      "y": 3077,
      "w": 266,
      "h": 49
    },
    {
      "id": "Ml9lPDGjRAJTHkBnX51Un",
      "label": "Geodes",
      "zh": "Geodes（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -344,
      "y": 3130,
      "w": 111,
      "h": 49
    },
    {
      "id": "cNJQoMNZmxNygWAJIA8HI",
      "label": "Health Endpoint Monitoring",
      "zh": "Health端点监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -344,
      "y": 3183,
      "w": 266,
      "h": 49
    },
    {
      "id": "-M3Zd8w79sKBAY6_aJRE8",
      "label": "Queue-Based Load Leveling",
      "zh": "队列-基于负载Leveling",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -344,
      "y": 3236,
      "w": 266,
      "h": 49
    },
    {
      "id": "6YVkguDOtwveyeP4Z1NL3",
      "label": "Throttling",
      "zh": "Throttling（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -227,
      "y": 3130,
      "w": 151,
      "h": 50
    },
    {
      "id": "wPe7Xlwqws7tEpTAVvYjr",
      "label": "High Availability",
      "zh": "High可用性",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -72,
      "y": 3021,
      "w": 273,
      "h": 49
    },
    {
      "id": "Ze471tPbAwlwZyU4oIzH9",
      "label": "Deployment Stamps",
      "zh": "部署Stamps",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -64,
      "y": 3078,
      "w": 257,
      "h": 49
    },
    {
      "id": "6hOSEZJZ7yezVN67h5gmS",
      "label": "Geodes",
      "zh": "Geodes（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -64,
      "y": 3131,
      "w": 124,
      "h": 49
    },
    {
      "id": "uK5o7NgDvr2pV0ulF0Fh9",
      "label": "Health Endpoint Monitoring",
      "zh": "Health端点监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -64,
      "y": 3184,
      "w": 257,
      "h": 49
    },
    {
      "id": "IR2_kgs2U9rnAJiDBmpqK",
      "label": "Bulkhead",
      "zh": "Bulkhead（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 64,
      "y": 3131,
      "w": 129,
      "h": 49
    },
    {
      "id": "D1OmCoqvd3-_af3u0ciHr",
      "label": "Circuit Breaker",
      "zh": "Circuit Breaker（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -64,
      "y": 3235,
      "w": 257,
      "h": 49
    },
    {
      "id": "wlAWMjxZF6yav3ZXOScxH",
      "label": "Resiliency",
      "zh": "Resiliency（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 198,
      "y": 3021,
      "w": 284,
      "h": 49
    },
    {
      "id": "PLn9TF9GYnPcbpTdDMQbG",
      "label": "Bulkhead",
      "zh": "Bulkhead（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 3078,
      "w": 266,
      "h": 49
    },
    {
      "id": "O4zYDqvVWD7sMI27k_0Nl",
      "label": "Circuit Breaker",
      "zh": "Circuit Breaker（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 3131,
      "w": 266,
      "h": 49
    },
    {
      "id": "MNlWNjrG8eh5OzPVlbb9t",
      "label": "Compensating Transaction",
      "zh": "Compensating事务",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 3184,
      "w": 266,
      "h": 49
    },
    {
      "id": "CKCNk3obx4u43rBqUj2Yf",
      "label": "Health Endpoint Monitoring",
      "zh": "Health端点监控",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 3237,
      "w": 266,
      "h": 49
    },
    {
      "id": "AJLBFyAsEdQYF6ygO0MmQ",
      "label": "Leader Election",
      "zh": "主节点Election",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 3290,
      "w": 266,
      "h": 49
    },
    {
      "id": "NybkOwl1lgaglZPRJQJ_Z",
      "label": "Queue-Based Load Leveling",
      "zh": "队列-基于负载Leveling",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 3343,
      "w": 266,
      "h": 49
    },
    {
      "id": "xX_9VGUaOkBYFH3jPjnww",
      "label": "Retry",
      "zh": "Retry（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 3396,
      "w": 266,
      "h": 49
    },
    {
      "id": "RTEJHZ26znfBLrpQPtNvn",
      "label": "Scheduler Agent Supervisor",
      "zh": "调度AgentSupervisor",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 208,
      "y": 3449,
      "w": 266,
      "h": 49
    },
    {
      "id": "ZvYpE6-N5dAtRDIwqcAu6",
      "label": "Security",
      "zh": "安全",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -73,
      "y": 3292,
      "w": 275,
      "h": 49
    },
    {
      "id": "lHPl-kr1ArblR7bJeQEB9",
      "label": "Federated Identity",
      "zh": "Federated Identity（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -58,
      "y": 3349,
      "w": 247,
      "h": 49
    },
    {
      "id": "DTQJu0AvgWOhMFcOYqzTD",
      "label": "Gatekeeper",
      "zh": "Gatekeeper（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -58,
      "y": 3402,
      "w": 247,
      "h": 49
    },
    {
      "id": "VltZgIrApHOwZ8YHvdmHB",
      "label": "Valet Key",
      "zh": "Valet Key（技术术语）",
      "desc": "系统设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -58,
      "y": 3455,
      "w": 247,
      "h": 49
    }
  ],
  "tutorials": {
    "_hYN0gEi9BL24nptEtXWU": {
      "id": "_hYN0gEi9BL24nptEtXWU",
      "zh": "入门介绍",
      "en": "Introduction",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「入门介绍」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**入门介绍**（Introduction）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**入门介绍**（Introduction）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "idLHBxhvcIqZTqmh_E8Az": {
      "id": "idLHBxhvcIqZTqmh_E8Az",
      "zh": "什么是系统设计",
      "en": "What is System Design?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「什么是系统设计」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**什么是系统设计**（What is System Design?）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「什么是系统设计」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**什么是系统设计**（What is System Design?）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "os3Pa6W9SSNEzgmlBbglQ": {
      "id": "os3Pa6W9SSNEzgmlBbglQ",
      "zh": "如何approach系统设计",
      "en": "How to approach System Design?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「如何approach系统设计」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**如何approach系统设计**（How to approach System Design?）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「如何approach系统设计」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**如何approach系统设计**（How to approach System Design?）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "e_15lymUjFc6VWqzPnKxG": {
      "id": "e_15lymUjFc6VWqzPnKxG",
      "zh": "性能与扩展性对比",
      "en": "Performance vs Scalability",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「性能与扩展性对比」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**性能与扩展性对比**（Performance vs Scalability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「性能与扩展性对比」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**性能与扩展性对比**（Performance vs Scalability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "O3wAHLnzrkvLWr4afHDdr": {
      "id": "O3wAHLnzrkvLWr4afHDdr",
      "zh": "延迟与吞吐对比",
      "en": "Latency vs Throughput",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「延迟与吞吐对比」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**延迟与吞吐对比**（Latency vs Throughput）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「延迟与吞吐对比」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**延迟与吞吐对比**（Latency vs Throughput）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "uJc27BNAuP321HQNbjftn": {
      "id": "uJc27BNAuP321HQNbjftn",
      "zh": "可用性与一致性对比",
      "en": "Availability vs Consistency",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「可用性与一致性对比」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**可用性与一致性对比**（Availability vs Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「可用性与一致性对比」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**可用性与一致性对比**（Availability vs Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "tcGdVQsCEobdV9hgOq3eG": {
      "id": "tcGdVQsCEobdV9hgOq3eG",
      "zh": "CAP Theorem（技术术语）",
      "en": "CAP Theorem",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「CAP Theorem（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**CAP Theorem（技术术语）**（CAP Theorem）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CAP Theorem（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**CAP Theorem（技术术语）**（CAP Theorem）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "GHe8V-REu1loRpDnHbyUn": {
      "id": "GHe8V-REu1loRpDnHbyUn",
      "zh": "一致性模式",
      "en": "Consistency Patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「一致性模式」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**一致性模式**（Consistency Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「一致性模式」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**一致性模式**（Consistency Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "EKD5AikZtwjtsEYRPJhQ2": {
      "id": "EKD5AikZtwjtsEYRPJhQ2",
      "zh": "弱一致性",
      "en": "Weak Consistency",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「弱一致性」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**弱一致性**（Weak Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「弱一致性」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**弱一致性**（Weak Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "rRDGVynX43inSeQ9lR_FS": {
      "id": "rRDGVynX43inSeQ9lR_FS",
      "zh": "最终一致性",
      "en": "Eventual Consistency",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「最终一致性」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**最终一致性**（Eventual Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「最终一致性」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**最终一致性**（Eventual Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "JjB7eB8gdRCAYf5M0RcT7": {
      "id": "JjB7eB8gdRCAYf5M0RcT7",
      "zh": "强一致性",
      "en": "Strong Consistency",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「强一致性」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**强一致性**（Strong Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「强一致性」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**强一致性**（Strong Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "ezptoTqeaepByegxS5kHL": {
      "id": "ezptoTqeaepByegxS5kHL",
      "zh": "可用性模式",
      "en": "Availability Patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「可用性模式」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**可用性模式**（Availability Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「可用性模式」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**可用性模式**（Availability Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "L_jRfjvMGjFbHEbozeVQl": {
      "id": "L_jRfjvMGjFbHEbozeVQl",
      "zh": "Fail-Over（技术术语）",
      "en": "Fail-Over",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Fail-Over（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Fail-Over（技术术语）**（Fail-Over）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Fail-Over（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Fail-Over（技术术语）**（Fail-Over）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "0RQ5jzZKdadYY0h_QZ0Bb": {
      "id": "0RQ5jzZKdadYY0h_QZ0Bb",
      "zh": "复制",
      "en": "Replication",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "story": "学习「复制」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**复制**（Replication）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "why": "它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「复制」出现在哪：上游输入是什么，下游输出是什么。",
        "先明确一次请求通常读写哪些字段。",
        "再决定嵌入还是引用，避免一次查询跨太多集合。",
        "索引、聚合、复制和分片决定它能否支撑真实流量。"
      ],
      "practice": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。",
      "pitfalls": [
        "把关系型建模直接搬过来",
        "无限嵌套导致文档过大",
        "没有按查询方式建索引"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**复制**（Replication）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先明确一次请求通常读写哪些字段。 再决定嵌入还是引用，避免一次查询跨太多集合。 索引、聚合、复制和分片决定它能否支撑真实流量。"
        },
        {
          "title": "动手验证",
          "body": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
        }
      ],
      "kind": "document-db"
    },
    "uHdrZllrZFAnVkwIB3y5-": {
      "id": "uHdrZllrZFAnVkwIB3y5-",
      "zh": "可用性inNumbers",
      "en": "Availability in Numbers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「可用性inNumbers」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**可用性inNumbers**（Availability in Numbers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「可用性inNumbers」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**可用性inNumbers**（Availability in Numbers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "DOESIlBThd_wp2uOSd_CS": {
      "id": "DOESIlBThd_wp2uOSd_CS",
      "zh": "Background Jobs（技术术语）",
      "en": "Background Jobs",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Background Jobs（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Background Jobs（技术术语）**（Background Jobs）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Background Jobs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Background Jobs（技术术语）**（Background Jobs）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "NEsPjQifNDlZJE-2YLVl1": {
      "id": "NEsPjQifNDlZJE-2YLVl1",
      "zh": "事件-Driven",
      "en": "Event-Driven",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「事件-Driven」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**事件-Driven**（Event-Driven）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「事件-Driven」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**事件-Driven**（Event-Driven）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "zoViI4kzpKIxpU20T89K_": {
      "id": "zoViI4kzpKIxpU20T89K_",
      "zh": "Schedule Driven（技术术语）",
      "en": "Schedule Driven",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Schedule Driven（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Schedule Driven（技术术语）**（Schedule Driven）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Schedule Driven（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Schedule Driven（技术术语）**（Schedule Driven）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "2gRIstNT-fTkv5GZ692gx": {
      "id": "2gRIstNT-fTkv5GZ692gx",
      "zh": "Returning Results（技术术语）",
      "en": "Returning Results",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Returning Results（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Returning Results（技术术语）**（Returning Results）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Returning Results（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Returning Results（技术术语）**（Returning Results）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "Uk6J8JRcKVEFz4_8rLfnQ": {
      "id": "Uk6J8JRcKVEFz4_8rLfnQ",
      "zh": "域Name系统",
      "en": "Domain Name System",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「域Name系统」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**域Name系统**（Domain Name System）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「域Name系统」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**域Name系统**（Domain Name System）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "O730v5Ww3ByAiBSs6fwyM": {
      "id": "O730v5Ww3ByAiBSs6fwyM",
      "zh": "Content交付Networks",
      "en": "Content Delivery Networks",
      "level": "core",
      "nodeType": "topic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「Content交付Networks」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Content交付Networks**（Content Delivery Networks）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Content交付Networks」出现在哪：上游输入是什么，下游输出是什么。",
        "先知道它对应文件、进程、用户权限、网络还是服务管理。",
        "再配合命令观察输入输出，而不是只背参数。",
        "线上排障时要保守操作，先读状态再改配置。"
      ],
      "practice": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。",
      "pitfalls": [
        "不理解权限就 sudo",
        "改配置前不备份",
        "只看应用日志，不看系统资源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Content交付Networks**（Content Delivery Networks）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先知道它对应文件、进程、用户权限、网络还是服务管理。 再配合命令观察输入输出，而不是只背参数。 线上排障时要保守操作，先读状态再改配置。"
        },
        {
          "title": "动手验证",
          "body": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
        }
      ],
      "kind": "linux"
    },
    "uIerrf_oziiLg-KEyz8WM": {
      "id": "uIerrf_oziiLg-KEyz8WM",
      "zh": "推送CDNs",
      "en": "Push CDNs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「推送CDNs」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**推送CDNs**（Push CDNs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "本地 commit 后，代码只在你电脑的历史里；同事还看不到。",
        "git push 把本地分支上传到 GitHub/GitLab 的远程分支（origin）。",
        "git pull / git fetch 把远程新提交拉回本地，避免覆盖别人改动。",
        "若同一行被两人修改，冲突时在文件里手工合并，再 add + commit。"
      ],
      "practice": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。",
      "pitfalls": [
        "没看状态就执行重置/合并",
        "把工作区、暂存区、本地仓库混成一件事",
        "不知道命令会不会改写历史"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**推送CDNs**（Push CDNs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "真正要掌握什么",
          "body": "git push 把本地分支上传到 GitHub/GitLab 的远程分支（origin）。 git pull / git fetch 把远程新提交拉回本地，避免覆盖别人改动。 若同一行被两人修改，冲突时在文件里手工合并，再 add + commit。"
        },
        {
          "title": "动手验证",
          "body": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
        }
      ],
      "kind": "git",
      "routeLabels": [
        "本地 commit",
        "git push",
        "git pull",
        "处理冲突"
      ]
    },
    "HkXiEMLqxJoQyAHav3ccL": {
      "id": "HkXiEMLqxJoQyAHav3ccL",
      "zh": "拉取CDNs",
      "en": "Pull CDNs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「拉取CDNs」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**拉取CDNs**（Pull CDNs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "本地 commit 后，代码只在你电脑的历史里；同事还看不到。",
        "git push 把本地分支上传到 GitHub/GitLab 的远程分支（origin）。",
        "git pull / git fetch 把远程新提交拉回本地，避免覆盖别人改动。",
        "若同一行被两人修改，冲突时在文件里手工合并，再 add + commit。"
      ],
      "practice": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。",
      "pitfalls": [
        "没看状态就执行重置/合并",
        "把工作区、暂存区、本地仓库混成一件事",
        "不知道命令会不会改写历史"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**拉取CDNs**（Pull CDNs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "真正要掌握什么",
          "body": "git push 把本地分支上传到 GitHub/GitLab 的远程分支（origin）。 git pull / git fetch 把远程新提交拉回本地，避免覆盖别人改动。 若同一行被两人修改，冲突时在文件里手工合并，再 add + commit。"
        },
        {
          "title": "动手验证",
          "body": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
        }
      ],
      "kind": "git",
      "routeLabels": [
        "本地 commit",
        "git push",
        "git pull",
        "处理冲突"
      ]
    },
    "14KqLKgh090Rb3MDwelWY": {
      "id": "14KqLKgh090Rb3MDwelWY",
      "zh": "负载Balancers",
      "en": "Load Balancers",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「负载Balancers」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**负载Balancers**（Load Balancers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「负载Balancers」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**负载Balancers**（Load Balancers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "ocdcbhHrwjJX0KWgmsOL6": {
      "id": "ocdcbhHrwjJX0KWgmsOL6",
      "zh": "LB（技术术语）与Reverse代理对比",
      "en": "LB vs Reverse Proxy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「LB（技术术语）与Reverse代理对比」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**LB（技术术语）与Reverse代理对比**（LB vs Reverse Proxy）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「LB（技术术语）与Reverse代理对比」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**LB（技术术语）与Reverse代理对比**（LB vs Reverse Proxy）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "urSjLyLTE5IIz0TFxMBWL": {
      "id": "urSjLyLTE5IIz0TFxMBWL",
      "zh": "负载BalancingAlgorithms",
      "en": "Load Balancing Algorithms",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「负载BalancingAlgorithms」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**负载BalancingAlgorithms**（Load Balancing Algorithms）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「负载BalancingAlgorithms」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**负载BalancingAlgorithms**（Load Balancing Algorithms）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "e69-JVbDj7dqV_p1j1kML": {
      "id": "e69-JVbDj7dqV_p1j1kML",
      "zh": "层7负载Balancing",
      "en": "Layer 7 Load Balancing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「层7负载Balancing」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**层7负载Balancing**（Layer 7 Load Balancing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「层7负载Balancing」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**层7负载Balancing**（Layer 7 Load Balancing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "MpM9rT1-_LGD7YbnBjqOk": {
      "id": "MpM9rT1-_LGD7YbnBjqOk",
      "zh": "层4负载Balancing",
      "en": "Layer 4 Load Balancing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「层4负载Balancing」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**层4负载Balancing**（Layer 4 Load Balancing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「层4负载Balancing」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**层4负载Balancing**（Layer 4 Load Balancing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "IkUCfSWNY-02wg2WCo1c6": {
      "id": "IkUCfSWNY-02wg2WCo1c6",
      "zh": "Horizontal扩缩",
      "en": "Horizontal Scaling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Horizontal扩缩」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Horizontal扩缩**（Horizontal Scaling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Horizontal扩缩」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Horizontal扩缩**（Horizontal Scaling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "XXuzTrP5UNVwSpAk-tAGr": {
      "id": "XXuzTrP5UNVwSpAk-tAGr",
      "zh": "Application Layer（技术术语）",
      "en": "Application Layer",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Application Layer（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Application Layer（技术术语）**（Application Layer）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Application Layer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Application Layer（技术术语）**（Application Layer）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "UKTiaHCzYXnrNw31lHriv": {
      "id": "UKTiaHCzYXnrNw31lHriv",
      "zh": "Microservices（技术术语）",
      "en": "Microservices",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Microservices（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Microservices（技术术语）**（Microservices）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Microservices（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。",
        "再看配置、密钥、存储、网络和权限如何注入。",
        "排障时围绕 describe、logs、events、状态字段逐层定位。"
      ],
      "practice": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。",
      "pitfalls": [
        "直接操作 Pod 而忽略控制器",
        "不看 events 就猜问题",
        "把 Service、Ingress、Deployment 的职责混在一起"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Microservices（技术术语）**（Microservices）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。 再看配置、密钥、存储、网络和权限如何注入。 排障时围绕 describe、logs、events、状态字段逐层定位。"
        },
        {
          "title": "动手验证",
          "body": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
        }
      ],
      "kind": "k8s"
    },
    "Nt0HUWLOl4O77elF8Is1S": {
      "id": "Nt0HUWLOl4O77elF8Is1S",
      "zh": "服务发现",
      "en": "Service Discovery",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「服务发现」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**服务发现**（Service Discovery）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「服务发现」出现在哪：上游输入是什么，下游输出是什么。",
        "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。",
        "再看配置、密钥、存储、网络和权限如何注入。",
        "排障时围绕 describe、logs、events、状态字段逐层定位。"
      ],
      "practice": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。",
      "pitfalls": [
        "直接操作 Pod 而忽略控制器",
        "不看 events 就猜问题",
        "把 Service、Ingress、Deployment 的职责混在一起"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**服务发现**（Service Discovery）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。 再看配置、密钥、存储、网络和权限如何注入。 排障时围绕 describe、logs、events、状态字段逐层定位。"
        },
        {
          "title": "动手验证",
          "body": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
        }
      ],
      "kind": "k8s"
    },
    "5FXwwRMNBhG7LT5ub6t2L": {
      "id": "5FXwwRMNBhG7LT5ub6t2L",
      "zh": "数据库",
      "en": "Databases",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据库」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**数据库**（Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据库」出现在哪：上游输入是什么，下游输出是什么。",
        "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
        "查询时关注输入表、过滤条件、连接方式和最终结果集。",
        "性能问题通常要看索引、执行计划和返回数据量。"
      ],
      "practice": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。",
      "pitfalls": [
        "只会写 SELECT，不理解表关系",
        "忽略 NULL、重复数据和边界条件",
        "没有看执行计划就猜性能瓶颈"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**数据库**（Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。 查询时关注输入表、过滤条件、连接方式和最终结果集。 性能问题通常要看索引、执行计划和返回数据量。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql"
    },
    "KLnpMR2FxlQkCHZP6-tZm": {
      "id": "KLnpMR2FxlQkCHZP6-tZm",
      "zh": "SQL（技术术语）与NoSQL（技术术语）对比",
      "en": "SQL vs NoSQL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SQL（技术术语）与NoSQL（技术术语）对比」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**SQL（技术术语）与NoSQL（技术术语）对比**（SQL vs NoSQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SQL（技术术语）与NoSQL（技术术语）对比」出现在哪：上游输入是什么，下游输出是什么。",
        "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
        "查询时关注输入表、过滤条件、连接方式和最终结果集。",
        "性能问题通常要看索引、执行计划和返回数据量。"
      ],
      "practice": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。",
      "pitfalls": [
        "只会写 SELECT，不理解表关系",
        "忽略 NULL、重复数据和边界条件",
        "没有看执行计划就猜性能瓶颈"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**SQL（技术术语）与NoSQL（技术术语）对比**（SQL vs NoSQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。 查询时关注输入表、过滤条件、连接方式和最终结果集。 性能问题通常要看索引、执行计划和返回数据量。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql"
    },
    "dc-aIbBwUdlwgwQKGrq49": {
      "id": "dc-aIbBwUdlwgwQKGrq49",
      "zh": "复制",
      "en": "Replication",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "story": "学习「复制」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**复制**（Replication）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "why": "它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「复制」出现在哪：上游输入是什么，下游输出是什么。",
        "先明确一次请求通常读写哪些字段。",
        "再决定嵌入还是引用，避免一次查询跨太多集合。",
        "索引、聚合、复制和分片决定它能否支撑真实流量。"
      ],
      "practice": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。",
      "pitfalls": [
        "把关系型建模直接搬过来",
        "无限嵌套导致文档过大",
        "没有按查询方式建索引"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**复制**（Replication）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先明确一次请求通常读写哪些字段。 再决定嵌入还是引用，避免一次查询跨太多集合。 索引、聚合、复制和分片决定它能否支撑真实流量。"
        },
        {
          "title": "动手验证",
          "body": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
        }
      ],
      "kind": "document-db"
    },
    "FX6dcV_93zOfbZMdM_-li": {
      "id": "FX6dcV_93zOfbZMdM_-li",
      "zh": "分片",
      "en": "Sharding",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "story": "学习「分片」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**分片**（Sharding）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "why": "它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「分片」出现在哪：上游输入是什么，下游输出是什么。",
        "先明确一次请求通常读写哪些字段。",
        "再决定嵌入还是引用，避免一次查询跨太多集合。",
        "索引、聚合、复制和分片决定它能否支撑真实流量。"
      ],
      "practice": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。",
      "pitfalls": [
        "把关系型建模直接搬过来",
        "无限嵌套导致文档过大",
        "没有按查询方式建索引"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**分片**（Sharding）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先明确一次请求通常读写哪些字段。 再决定嵌入还是引用，避免一次查询跨太多集合。 索引、聚合、复制和分片决定它能否支撑真实流量。"
        },
        {
          "title": "动手验证",
          "body": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
        }
      ],
      "kind": "document-db"
    },
    "DGmVRI7oWdSOeIUn_g0rI": {
      "id": "DGmVRI7oWdSOeIUn_g0rI",
      "zh": "Federation（技术术语）",
      "en": "Federation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Federation（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Federation（技术术语）**（Federation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Federation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Federation（技术术语）**（Federation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "Zp9D4--DgtlAjE2nIfaO_": {
      "id": "Zp9D4--DgtlAjE2nIfaO_",
      "zh": "反规范化",
      "en": "Denormalization",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「反规范化」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**反规范化**（Denormalization）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「反规范化」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**反规范化**（Denormalization）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "fY8zgbB13wxZ1CFtMSdZZ": {
      "id": "fY8zgbB13wxZ1CFtMSdZZ",
      "zh": "SQL调优",
      "en": "SQL Tuning",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SQL调优」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**SQL调优**（SQL Tuning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SQL调优」出现在哪：上游输入是什么，下游输出是什么。",
        "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
        "查询时关注输入表、过滤条件、连接方式和最终结果集。",
        "性能问题通常要看索引、执行计划和返回数据量。"
      ],
      "practice": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。",
      "pitfalls": [
        "只会写 SELECT，不理解表关系",
        "忽略 NULL、重复数据和边界条件",
        "没有看执行计划就猜性能瓶颈"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**SQL调优**（SQL Tuning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。 查询时关注输入表、过滤条件、连接方式和最终结果集。 性能问题通常要看索引、执行计划和返回数据量。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql"
    },
    "KFtdmmce4bRkDyvFXZzLN": {
      "id": "KFtdmmce4bRkDyvFXZzLN",
      "zh": "Key-Value Store（技术术语）",
      "en": "Key-Value Store",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Key-Value Store（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Key-Value Store（技术术语）**（Key-Value Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Key-Value Store（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Key-Value Store（技术术语）**（Key-Value Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "didEznSlVHqqlijtyOSr3": {
      "id": "didEznSlVHqqlijtyOSr3",
      "zh": "Document Store（技术术语）",
      "en": "Document Store",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "story": "学习「Document Store（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Document Store（技术术语）**（Document Store）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "why": "它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Document Store（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先明确一次请求通常读写哪些字段。",
        "再决定嵌入还是引用，避免一次查询跨太多集合。",
        "索引、聚合、复制和分片决定它能否支撑真实流量。"
      ],
      "practice": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。",
      "pitfalls": [
        "把关系型建模直接搬过来",
        "无限嵌套导致文档过大",
        "没有按查询方式建索引"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Document Store（技术术语）**（Document Store）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先明确一次请求通常读写哪些字段。 再决定嵌入还是引用，避免一次查询跨太多集合。 索引、聚合、复制和分片决定它能否支撑真实流量。"
        },
        {
          "title": "动手验证",
          "body": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
        }
      ],
      "kind": "document-db"
    },
    "WHq1AdISkcgthaugE9uY7": {
      "id": "WHq1AdISkcgthaugE9uY7",
      "zh": "Wide Column Store（技术术语）",
      "en": "Wide Column Store",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Wide Column Store（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Wide Column Store（技术术语）**（Wide Column Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Wide Column Store（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Wide Column Store（技术术语）**（Wide Column Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "6RLgnL8qLBzYkllHeaI-Z": {
      "id": "6RLgnL8qLBzYkllHeaI-Z",
      "zh": "Graph数据库",
      "en": "Graph Databases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Graph数据库」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Graph数据库**（Graph Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Graph数据库」出现在哪：上游输入是什么，下游输出是什么。",
        "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
        "查询时关注输入表、过滤条件、连接方式和最终结果集。",
        "性能问题通常要看索引、执行计划和返回数据量。"
      ],
      "practice": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。",
      "pitfalls": [
        "只会写 SELECT，不理解表关系",
        "忽略 NULL、重复数据和边界条件",
        "没有看执行计划就猜性能瓶颈"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Graph数据库**（Graph Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。 查询时关注输入表、过滤条件、连接方式和最终结果集。 性能问题通常要看索引、执行计划和返回数据量。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql"
    },
    "-X4g8kljgVBOBcf1DDzgi": {
      "id": "-X4g8kljgVBOBcf1DDzgi",
      "zh": "缓存",
      "en": "Caching",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「缓存」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**缓存**（Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**缓存**（Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "Bgqgl67FK56ioLNFivIsc": {
      "id": "Bgqgl67FK56ioLNFivIsc",
      "zh": "Refresh Ahead（技术术语）",
      "en": "Refresh Ahead",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Refresh Ahead（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Refresh Ahead（技术术语）**（Refresh Ahead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Refresh Ahead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Refresh Ahead（技术术语）**（Refresh Ahead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "vNndJ-MWetcbaF2d-3-JP": {
      "id": "vNndJ-MWetcbaF2d-3-JP",
      "zh": "Write-behind（技术术语）",
      "en": "Write-behind",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Write-behind（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Write-behind（技术术语）**（Write-behind）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Write-behind（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Write-behind（技术术语）**（Write-behind）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "RNITLR1FUQWkRbSBXTD_z": {
      "id": "RNITLR1FUQWkRbSBXTD_z",
      "zh": "Write-through（技术术语）",
      "en": "Write-through",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Write-through（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Write-through（技术术语）**（Write-through）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Write-through（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Write-through（技术术语）**（Write-through）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "bffJlvoLHFldS0CluWifP": {
      "id": "bffJlvoLHFldS0CluWifP",
      "zh": "缓存Aside",
      "en": "Cache Aside",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「缓存Aside」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**缓存Aside**（Cache Aside）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**缓存Aside**（Cache Aside）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "RHNRb6QWiGvCK3KQOPK3u": {
      "id": "RHNRb6QWiGvCK3KQOPK3u",
      "zh": "客户端缓存",
      "en": "Client Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「客户端缓存」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**客户端缓存**（Client Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**客户端缓存**（Client Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "Kisvxlrjb7XnKFCOdxRtb": {
      "id": "Kisvxlrjb7XnKFCOdxRtb",
      "zh": "CDN缓存",
      "en": "CDN Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「CDN缓存」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**CDN缓存**（CDN Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**CDN缓存**（CDN Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "o532nPnL-d2vXJn9k6vMl": {
      "id": "o532nPnL-d2vXJn9k6vMl",
      "zh": "Web服务端缓存",
      "en": "Web Server Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Web服务端缓存」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Web服务端缓存**（Web Server Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Web服务端缓存**（Web Server Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "BeIg4jzbij2cwc_a_VpYG": {
      "id": "BeIg4jzbij2cwc_a_VpYG",
      "zh": "数据库缓存",
      "en": "Database Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据库缓存」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**数据库缓存**（Database Caching）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据库缓存」出现在哪：上游输入是什么，下游输出是什么。",
        "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
        "查询时关注输入表、过滤条件、连接方式和最终结果集。",
        "性能问题通常要看索引、执行计划和返回数据量。"
      ],
      "practice": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。",
      "pitfalls": [
        "只会写 SELECT，不理解表关系",
        "忽略 NULL、重复数据和边界条件",
        "没有看执行计划就猜性能瓶颈"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**数据库缓存**（Database Caching）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。 查询时关注输入表、过滤条件、连接方式和最终结果集。 性能问题通常要看索引、执行计划和返回数据量。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql"
    },
    "5Ux_JBDOkflCaIm4tVBgO": {
      "id": "5Ux_JBDOkflCaIm4tVBgO",
      "zh": "Application缓存",
      "en": "Application Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Application缓存」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Application缓存**（Application Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Application缓存**（Application Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "84N4XY31PwXRntXX1sdCU": {
      "id": "84N4XY31PwXRntXX1sdCU",
      "zh": "Asynchronism（技术术语）",
      "en": "Asynchronism",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Asynchronism（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Asynchronism（技术术语）**（Asynchronism）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Asynchronism（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Asynchronism（技术术语）**（Asynchronism）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "YiYRZFE_zwPMiCZxz9FnP": {
      "id": "YiYRZFE_zwPMiCZxz9FnP",
      "zh": "Back Pressure（技术术语）",
      "en": "Back Pressure",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Back Pressure（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Back Pressure（技术术语）**（Back Pressure）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Back Pressure（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Back Pressure（技术术语）**（Back Pressure）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "a9wGW_H1HpvvdYCXoS-Rf": {
      "id": "a9wGW_H1HpvvdYCXoS-Rf",
      "zh": "Task Queues（技术术语）",
      "en": "Task Queues",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Task Queues（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Task Queues（技术术语）**（Task Queues）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Task Queues（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Task Queues（技术术语）**（Task Queues）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "37X1_9eCmkZkz5RDudE5N": {
      "id": "37X1_9eCmkZkz5RDudE5N",
      "zh": "消息Queues",
      "en": "Message Queues",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「消息Queues」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**消息Queues**（Message Queues）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「消息Queues」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**消息Queues**（Message Queues）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "3pRi8M4xQXsehkdfUNtYL": {
      "id": "3pRi8M4xQXsehkdfUNtYL",
      "zh": "Idempotent Operations（技术术语）",
      "en": "Idempotent Operations",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Idempotent Operations（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Idempotent Operations（技术术语）**（Idempotent Operations）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Idempotent Operations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Idempotent Operations（技术术语）**（Idempotent Operations）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "uQFzD_ryd-8Dr1ppjorYJ": {
      "id": "uQFzD_ryd-8Dr1ppjorYJ",
      "zh": "Communication（技术术语）",
      "en": "Communication",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Communication（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Communication（技术术语）**（Communication）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Communication（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Communication（技术术语）**（Communication）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "I_nR6EwjNXSG7_hw-_VhX": {
      "id": "I_nR6EwjNXSG7_hw-_VhX",
      "zh": "HTTP（技术术语）",
      "en": "HTTP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HTTP（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**HTTP（技术术语）**（HTTP）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「HTTP（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**HTTP（技术术语）**（HTTP）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "2nF5uC6fYKbf0RFgGNHiP": {
      "id": "2nF5uC6fYKbf0RFgGNHiP",
      "zh": "TCP（技术术语）",
      "en": "TCP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「TCP（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**TCP（技术术语）**（TCP）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「TCP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**TCP（技术术语）**（TCP）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "LC5aTmUKNiw9RuSUt3fSE": {
      "id": "LC5aTmUKNiw9RuSUt3fSE",
      "zh": "UDP（技术术语）",
      "en": "UDP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「UDP（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**UDP（技术术语）**（UDP）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「UDP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**UDP（技术术语）**（UDP）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "ixqucoAkgnphWYAFnsMe-": {
      "id": "ixqucoAkgnphWYAFnsMe-",
      "zh": "RPC（技术术语）",
      "en": "RPC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「RPC（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**RPC（技术术语）**（RPC）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「RPC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**RPC（技术术语）**（RPC）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "6-bgmfDTAQ9zABhpmVoHV": {
      "id": "6-bgmfDTAQ9zABhpmVoHV",
      "zh": "REST（技术术语）",
      "en": "REST",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「REST（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**REST（技术术语）**（REST）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「REST（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**REST（技术术语）**（REST）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "Hw2v1rCYn24qxBhhmdc28": {
      "id": "Hw2v1rCYn24qxBhhmdc28",
      "zh": "gRPC（技术术语）",
      "en": "gRPC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「gRPC（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**gRPC（技术术语）**（gRPC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「gRPC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**gRPC（技术术语）**（gRPC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "jwv2g2Yeq-6Xv5zSd746R": {
      "id": "jwv2g2Yeq-6Xv5zSd746R",
      "zh": "GraphQL（技术术语）",
      "en": "GraphQL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「GraphQL（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**GraphQL（技术术语）**（GraphQL）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「GraphQL（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**GraphQL（技术术语）**（GraphQL）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "p--uEm6klLx_hKxKJiXE5": {
      "id": "p--uEm6klLx_hKxKJiXE5",
      "zh": "性能Antipatterns",
      "en": "Performance Antipatterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「性能Antipatterns」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**性能Antipatterns**（Performance Antipatterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「性能Antipatterns」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**性能Antipatterns**（Performance Antipatterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "hxiV2uF7tvhZKe4K-4fTn": {
      "id": "hxiV2uF7tvhZKe4K-4fTn",
      "zh": "Busy数据库",
      "en": "Busy Database",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Busy数据库」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Busy数据库**（Busy Database）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Busy数据库」出现在哪：上游输入是什么，下游输出是什么。",
        "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
        "查询时关注输入表、过滤条件、连接方式和最终结果集。",
        "性能问题通常要看索引、执行计划和返回数据量。"
      ],
      "practice": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。",
      "pitfalls": [
        "只会写 SELECT，不理解表关系",
        "忽略 NULL、重复数据和边界条件",
        "没有看执行计划就猜性能瓶颈"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Busy数据库**（Busy Database）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。 查询时关注输入表、过滤条件、连接方式和最终结果集。 性能问题通常要看索引、执行计划和返回数据量。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql"
    },
    "i_2M3VloG-xTgWDWp4ngt": {
      "id": "i_2M3VloG-xTgWDWp4ngt",
      "zh": "Busy Frontend（技术术语）",
      "en": "Busy Frontend",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Busy Frontend（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Busy Frontend（技术术语）**（Busy Frontend）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Busy Frontend（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Busy Frontend（技术术语）**（Busy Frontend）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "0IzQwuYi_E00bJwxDuw2B": {
      "id": "0IzQwuYi_E00bJwxDuw2B",
      "zh": "Chatty I/O（技术术语）",
      "en": "Chatty I/O",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Chatty I/O（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Chatty I/O（技术术语）**（Chatty I/O）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Chatty I/O（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Chatty I/O（技术术语）**（Chatty I/O）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "6u3XmtJFWyJnyZUnJcGYb": {
      "id": "6u3XmtJFWyJnyZUnJcGYb",
      "zh": "Extraneous Fetching（技术术语）",
      "en": "Extraneous Fetching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Extraneous Fetching（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Extraneous Fetching（技术术语）**（Extraneous Fetching）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Extraneous Fetching（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Extraneous Fetching（技术术语）**（Extraneous Fetching）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "lwMs4yiUHF3nQwcvauers": {
      "id": "lwMs4yiUHF3nQwcvauers",
      "zh": "Improper Instantiation（技术术语）",
      "en": "Improper Instantiation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Improper Instantiation（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Improper Instantiation（技术术语）**（Improper Instantiation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Improper Instantiation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Improper Instantiation（技术术语）**（Improper Instantiation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "p1QhCptnwzTGUXVMnz_Oz": {
      "id": "p1QhCptnwzTGUXVMnz_Oz",
      "zh": "Monolithic持久化",
      "en": "Monolithic Persistence",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Monolithic持久化」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Monolithic持久化**（Monolithic Persistence）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Monolithic持久化」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Monolithic持久化**（Monolithic Persistence）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "klvHk1_e03Jarn5T46QNi": {
      "id": "klvHk1_e03Jarn5T46QNi",
      "zh": "No缓存",
      "en": "No Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「No缓存」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**No缓存**（No Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**No缓存**（No Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "r7uQxmurvfsYtTCieHqly": {
      "id": "r7uQxmurvfsYtTCieHqly",
      "zh": "Noisy Neighbor（技术术语）",
      "en": "Noisy Neighbor",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Noisy Neighbor（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Noisy Neighbor（技术术语）**（Noisy Neighbor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Noisy Neighbor（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Noisy Neighbor（技术术语）**（Noisy Neighbor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "LNmAJmh2ndFtOQIpvX_ga": {
      "id": "LNmAJmh2ndFtOQIpvX_ga",
      "zh": "Retry Storm（技术术语）",
      "en": "Retry Storm",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Retry Storm（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Retry Storm（技术术语）**（Retry Storm）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Retry Storm（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Retry Storm（技术术语）**（Retry Storm）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "Ihnmxo_bVgZABDwg1QGGk": {
      "id": "Ihnmxo_bVgZABDwg1QGGk",
      "zh": "Synchronous I/O（技术术语）",
      "en": "Synchronous I/O",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Synchronous I/O（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Synchronous I/O（技术术语）**（Synchronous I/O）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Synchronous I/O（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Synchronous I/O（技术术语）**（Synchronous I/O）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "hDFYlGFYwcwWXLmrxodFX": {
      "id": "hDFYlGFYwcwWXLmrxodFX",
      "zh": "监控",
      "en": "Monitoring",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**监控**（Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「监控」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**监控**（Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "hkjYvLoVt9xKDzubm0Jy3": {
      "id": "hkjYvLoVt9xKDzubm0Jy3",
      "zh": "Health监控",
      "en": "Health Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Health监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Health监控**（Health Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Health监控」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Health监控**（Health Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "rVrwaioGURvrqNBufF2dj": {
      "id": "rVrwaioGURvrqNBufF2dj",
      "zh": "可用性监控",
      "en": "Availability Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「可用性监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**可用性监控**（Availability Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「可用性监控」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**可用性监控**（Availability Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "x1i3qWFtNNjd00-kAvFHw": {
      "id": "x1i3qWFtNNjd00-kAvFHw",
      "zh": "性能监控",
      "en": "Performance Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「性能监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**性能监控**（Performance Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「性能监控」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**性能监控**（Performance Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "I_NfmDcBph8-oyFVFTknL": {
      "id": "I_NfmDcBph8-oyFVFTknL",
      "zh": "安全监控",
      "en": "Security Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「安全监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**安全监控**（Security Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安全监控」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**安全监控**（Security Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "eSZq74lROh5lllLyTBK5a": {
      "id": "eSZq74lROh5lllLyTBK5a",
      "zh": "Usage监控",
      "en": "Usage Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Usage监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Usage监控**（Usage Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Usage监控」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Usage监控**（Usage Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "Q0fKphqmPwjTD0dhqiP6K": {
      "id": "Q0fKphqmPwjTD0dhqiP6K",
      "zh": "Instrumentation（技术术语）",
      "en": "Instrumentation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Instrumentation（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Instrumentation（技术术语）**（Instrumentation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Instrumentation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Instrumentation（技术术语）**（Instrumentation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "IwMOTpsYHApdvHZOhXtIw": {
      "id": "IwMOTpsYHApdvHZOhXtIw",
      "zh": "Visualization（技术术语）与告警",
      "en": "Visualization & Alerts",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Visualization（技术术语）与告警」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Visualization（技术术语）与告警**（Visualization & Alerts）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Visualization（技术术语）与告警」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Visualization（技术术语）与告警**（Visualization & Alerts）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "THlzcZTNnPGLRiHPWT-Jv": {
      "id": "THlzcZTNnPGLRiHPWT-Jv",
      "zh": "云设计模式",
      "en": "Cloud Design Patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「云设计模式」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**云设计模式**（Cloud Design Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「云设计模式」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**云设计模式**（Cloud Design Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "dsWpta3WIBvv2K9pNVPo0": {
      "id": "dsWpta3WIBvv2K9pNVPo0",
      "zh": "Messaging（技术术语）",
      "en": "Messaging",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Messaging（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Messaging（技术术语）**（Messaging）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Messaging（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Messaging（技术术语）**（Messaging）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "VgvUWAC6JYFyPZKBRoEqf": {
      "id": "VgvUWAC6JYFyPZKBRoEqf",
      "zh": "顺序Convoy",
      "en": "Sequential Convoy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「顺序Convoy」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**顺序Convoy**（Sequential Convoy）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「顺序Convoy」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**顺序Convoy**（Sequential Convoy）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "uR1fU6pm7zTtdBcNgSRi4": {
      "id": "uR1fU6pm7zTtdBcNgSRi4",
      "zh": "Scheduling Agent Supervisor（技术术语）",
      "en": "Scheduling Agent Supervisor",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Scheduling Agent Supervisor（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Scheduling Agent Supervisor（技术术语）**（Scheduling Agent Supervisor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Scheduling Agent Supervisor（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Scheduling Agent Supervisor（技术术语）**（Scheduling Agent Supervisor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "LncTxPg-wx8loy55r5NmV": {
      "id": "LncTxPg-wx8loy55r5NmV",
      "zh": "队列-基于负载Leveling",
      "en": "Queue-Based Load Leveling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「队列-基于负载Leveling」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**队列-基于负载Leveling**（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**队列-基于负载Leveling**（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "2ryzJhRDTo98gGgn9mAxR": {
      "id": "2ryzJhRDTo98gGgn9mAxR",
      "zh": "Publisher/Subscriber（技术术语）",
      "en": "Publisher/Subscriber",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Publisher/Subscriber（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Publisher/Subscriber（技术术语）**（Publisher/Subscriber）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Publisher/Subscriber（技术术语）**（Publisher/Subscriber）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "DZcZEOi7h3u0744YhASet": {
      "id": "DZcZEOi7h3u0744YhASet",
      "zh": "Priority队列",
      "en": "Priority Queue",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Priority队列」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Priority队列**（Priority Queue）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Priority队列」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Priority队列**（Priority Queue）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "siXdR3TB9-4wx_qWieJ5w": {
      "id": "siXdR3TB9-4wx_qWieJ5w",
      "zh": "Pipes（技术术语）与Filters（技术术语）",
      "en": "Pipes and Filters",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Pipes（技术术语）与Filters（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Pipes（技术术语）与Filters（技术术语）**（Pipes and Filters）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Pipes（技术术语）与Filters（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Pipes（技术术语）与Filters（技术术语）**（Pipes and Filters）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "9Ld07KLOqP0ICtXEjngYM": {
      "id": "9Ld07KLOqP0ICtXEjngYM",
      "zh": "Competing Consumers（技术术语）",
      "en": "Competing Consumers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Competing Consumers（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Competing Consumers（技术术语）**（Competing Consumers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Competing Consumers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Competing Consumers（技术术语）**（Competing Consumers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "aCzRgUkVBvtHUeLU6p5ZH": {
      "id": "aCzRgUkVBvtHUeLU6p5ZH",
      "zh": "Choreography（技术术语）",
      "en": "Choreography",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Choreography（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Choreography（技术术语）**（Choreography）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Choreography（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Choreography（技术术语）**（Choreography）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "kl4upCnnZvJSf2uII1Pa0": {
      "id": "kl4upCnnZvJSf2uII1Pa0",
      "zh": "Claim Check（技术术语）",
      "en": "Claim Check",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Claim Check（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Claim Check（技术术语）**（Claim Check）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Claim Check（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Claim Check（技术术语）**（Claim Check）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "eNFNXPsFiryVxFe4unVxk": {
      "id": "eNFNXPsFiryVxFe4unVxk",
      "zh": "Async请求Reply",
      "en": "Async Request Reply",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Async请求Reply」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Async请求Reply**（Async Request Reply）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Async请求Reply」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Async请求Reply**（Async Request Reply）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "W0cUCrhiwH_Nrzxw50x3L": {
      "id": "W0cUCrhiwH_Nrzxw50x3L",
      "zh": "数据管理",
      "en": "Data Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「数据管理」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**数据管理**（Data Management）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据管理」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**数据管理**（Data Management）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "stZOcr8EUBOK_ZB48uToj": {
      "id": "stZOcr8EUBOK_ZB48uToj",
      "zh": "Valet Key（技术术语）",
      "en": "Valet Key",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Valet Key（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Valet Key（技术术语）**（Valet Key）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Valet Key（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Valet Key（技术术语）**（Valet Key）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "-lKq-LT7EPK7r3xbXLgwS": {
      "id": "-lKq-LT7EPK7r3xbXLgwS",
      "zh": "静态ContentHosting",
      "en": "Static Content Hosting",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「静态ContentHosting」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**静态ContentHosting**（Static Content Hosting）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「静态ContentHosting」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**静态ContentHosting**（Static Content Hosting）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "R6YehzA3X6DDo6oGBoBAx": {
      "id": "R6YehzA3X6DDo6oGBoBAx",
      "zh": "分片",
      "en": "Sharding",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "story": "学习「分片」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**分片**（Sharding）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "why": "它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「分片」出现在哪：上游输入是什么，下游输出是什么。",
        "先明确一次请求通常读写哪些字段。",
        "再决定嵌入还是引用，避免一次查询跨太多集合。",
        "索引、聚合、复制和分片决定它能否支撑真实流量。"
      ],
      "practice": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。",
      "pitfalls": [
        "把关系型建模直接搬过来",
        "无限嵌套导致文档过大",
        "没有按查询方式建索引"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**分片**（Sharding）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先明确一次请求通常读写哪些字段。 再决定嵌入还是引用，避免一次查询跨太多集合。 索引、聚合、复制和分片决定它能否支撑真实流量。"
        },
        {
          "title": "动手验证",
          "body": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
        }
      ],
      "kind": "document-db"
    },
    "WB7vQ4IJ0TPh2MbZvxP6V": {
      "id": "WB7vQ4IJ0TPh2MbZvxP6V",
      "zh": "MaterializedVIEW 视图",
      "en": "Materialized View",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「MaterializedVIEW 视图」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**MaterializedVIEW 视图**（Materialized View）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「MaterializedVIEW 视图」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**MaterializedVIEW 视图**（Materialized View）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "AH0nVeVsfYOjcI3vZvcdz": {
      "id": "AH0nVeVsfYOjcI3vZvcdz",
      "zh": "INDEX 索引TABLE 表",
      "en": "Index Table",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「INDEX 索引TABLE 表」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**INDEX 索引TABLE 表**（Index Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「INDEX 索引TABLE 表」出现在哪：上游输入是什么，下游输出是什么。",
        "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
        "查询时关注输入表、过滤条件、连接方式和最终结果集。",
        "性能问题通常要看索引、执行计划和返回数据量。"
      ],
      "practice": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。",
      "pitfalls": [
        "只会写 SELECT，不理解表关系",
        "忽略 NULL、重复数据和边界条件",
        "没有看执行计划就猜性能瓶颈"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**INDEX 索引TABLE 表**（Index Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。 查询时关注输入表、过滤条件、连接方式和最终结果集。 性能问题通常要看索引、执行计划和返回数据量。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql"
    },
    "7OgRKlwFqrk3XO2z49EI1": {
      "id": "7OgRKlwFqrk3XO2z49EI1",
      "zh": "事件Sourcing",
      "en": "Event Sourcing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「事件Sourcing」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**事件Sourcing**（Event Sourcing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「事件Sourcing」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**事件Sourcing**（Event Sourcing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "LTD3dn05c0ruUJW0IQO7z": {
      "id": "LTD3dn05c0ruUJW0IQO7z",
      "zh": "CQRS（技术术语）",
      "en": "CQRS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「CQRS（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**CQRS（技术术语）**（CQRS）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CQRS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**CQRS（技术术语）**（CQRS）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "PK4V9OWNVi8StdA2N13X2": {
      "id": "PK4V9OWNVi8StdA2N13X2",
      "zh": "缓存-Aside",
      "en": "Cache-Aside",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「缓存-Aside」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**缓存-Aside**（Cache-Aside）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
      ],
      "practice": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。",
      "pitfalls": [
        "把缓存当成永久存储",
        "key 设计没有业务维度导致串数据",
        "只处理命中，不处理失效和并发回源"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**缓存-Aside**（Cache-Aside）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
        }
      ],
      "kind": "cache",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "PtJ7-v1VCLsyaWWYHYujV": {
      "id": "PtJ7-v1VCLsyaWWYHYujV",
      "zh": "设计与Implementation（技术术语）",
      "en": "Design & Implementation",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「设计与Implementation（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**设计与Implementation（技术术语）**（Design & Implementation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「设计与Implementation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**设计与Implementation（技术术语）**（Design & Implementation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "VIbXf7Jh9PbQ9L-g6pHUG": {
      "id": "VIbXf7Jh9PbQ9L-g6pHUG",
      "zh": "Strangler Fig（技术术语）",
      "en": "Strangler Fig",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Strangler Fig（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Strangler Fig（技术术语）**（Strangler Fig）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Strangler Fig（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Strangler Fig（技术术语）**（Strangler Fig）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "izPT8NfJy1JC6h3i7GJYl": {
      "id": "izPT8NfJy1JC6h3i7GJYl",
      "zh": "静态ContentHosting",
      "en": "Static Content Hosting",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「静态ContentHosting」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**静态ContentHosting**（Static Content Hosting）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「静态ContentHosting」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**静态ContentHosting**（Static Content Hosting）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "AAgOGrra5Yz3_eG6tD2Fx": {
      "id": "AAgOGrra5Yz3_eG6tD2Fx",
      "zh": "Sidecar（技术术语）",
      "en": "Sidecar",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Sidecar（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Sidecar（技术术语）**（Sidecar）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Sidecar（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Sidecar（技术术语）**（Sidecar）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "WkoFezOXLf1H2XI9AtBtv": {
      "id": "WkoFezOXLf1H2XI9AtBtv",
      "zh": "Pipes（技术术语）与Filters（技术术语）",
      "en": "Pipes & Filters",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Pipes（技术术语）与Filters（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Pipes（技术术语）与Filters（技术术语）**（Pipes & Filters）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Pipes（技术术语）与Filters（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Pipes（技术术语）与Filters（技术术语）**（Pipes & Filters）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "beWKUIB6Za27yhxQwEYe3": {
      "id": "beWKUIB6Za27yhxQwEYe3",
      "zh": "主节点Election",
      "en": "Leader Election",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「主节点Election」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**主节点Election**（Leader Election）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「主节点Election」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**主节点Election**（Leader Election）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "LXH_mDlILqcyIKtMYTWqy": {
      "id": "LXH_mDlILqcyIKtMYTWqy",
      "zh": "网关路由",
      "en": "Gateway Routing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「网关路由」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**网关路由**（Gateway Routing）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「网关路由」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**网关路由**（Gateway Routing）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "0SOWAA8hrLM-WsG5k66fd": {
      "id": "0SOWAA8hrLM-WsG5k66fd",
      "zh": "网关Offloading",
      "en": "Gateway Offloading",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「网关Offloading」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**网关Offloading**（Gateway Offloading）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「网关Offloading」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**网关Offloading**（Gateway Offloading）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "bANGLm_5zR9mqMd6Oox8s": {
      "id": "bANGLm_5zR9mqMd6Oox8s",
      "zh": "网关Aggregation",
      "en": "Gateway Aggregation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "story": "学习「网关Aggregation」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**网关Aggregation**（Gateway Aggregation）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "why": "它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「网关Aggregation」出现在哪：上游输入是什么，下游输出是什么。",
        "先明确一次请求通常读写哪些字段。",
        "再决定嵌入还是引用，避免一次查询跨太多集合。",
        "索引、聚合、复制和分片决定它能否支撑真实流量。"
      ],
      "practice": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。",
      "pitfalls": [
        "把关系型建模直接搬过来",
        "无限嵌套导致文档过大",
        "没有按查询方式建索引"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**网关Aggregation**（Gateway Aggregation）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先明确一次请求通常读写哪些字段。 再决定嵌入还是引用，避免一次查询跨太多集合。 索引、聚合、复制和分片决定它能否支撑真实流量。"
        },
        {
          "title": "动手验证",
          "body": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
        }
      ],
      "kind": "document-db"
    },
    "BrgXwf7g2F-6Rqfjryvpj": {
      "id": "BrgXwf7g2F-6Rqfjryvpj",
      "zh": "External配置Store",
      "en": "External Config Store",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「External配置Store」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**External配置Store**（External Config Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「External配置Store」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**External配置Store**（External Config Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "ODjVoXnvJasPvCS2A5iMO": {
      "id": "ODjVoXnvJasPvCS2A5iMO",
      "zh": "计算资源Consolidation",
      "en": "Compute Resource Consolidation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「计算资源Consolidation」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**计算资源Consolidation**（Compute Resource Consolidation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「计算资源Consolidation」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**计算资源Consolidation**（Compute Resource Consolidation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "ivr3mh0OES5n86FI1PN4N": {
      "id": "ivr3mh0OES5n86FI1PN4N",
      "zh": "CQRS（技术术语）",
      "en": "CQRS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「CQRS（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**CQRS（技术术语）**（CQRS）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CQRS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**CQRS（技术术语）**（CQRS）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "n4It-lr7FFtSY83DcGydX": {
      "id": "n4It-lr7FFtSY83DcGydX",
      "zh": "Backends for Frontend（技术术语）",
      "en": "Backends for Frontend",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Backends for Frontend（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Backends for Frontend（技术术语）**（Backends for Frontend）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Backends for Frontend（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Backends for Frontend（技术术语）**（Backends for Frontend）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "4hi7LvjLcv8eR6m-uk8XQ": {
      "id": "4hi7LvjLcv8eR6m-uk8XQ",
      "zh": "Anti-Corruption Layer（技术术语）",
      "en": "Anti-Corruption Layer",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Anti-Corruption Layer（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Anti-Corruption Layer（技术术语）**（Anti-Corruption Layer）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Anti-Corruption Layer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Anti-Corruption Layer（技术术语）**（Anti-Corruption Layer）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "Hja4YF3JcgM6CPwB1mxmo": {
      "id": "Hja4YF3JcgM6CPwB1mxmo",
      "zh": "Ambassador（技术术语）",
      "en": "Ambassador",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Ambassador（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Ambassador（技术术语）**（Ambassador）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Ambassador（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Ambassador（技术术语）**（Ambassador）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "DYkdM_L7T2GcTPAoZNnUR": {
      "id": "DYkdM_L7T2GcTPAoZNnUR",
      "zh": "Reliability模式",
      "en": "Reliability Patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Reliability模式」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Reliability模式**（Reliability Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Reliability模式」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Reliability模式**（Reliability Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "Xzkvf4naveszLGV9b-8ih": {
      "id": "Xzkvf4naveszLGV9b-8ih",
      "zh": "可用性",
      "en": "Availability",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「可用性」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**可用性**（Availability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「可用性」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**可用性**（Availability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "FPPJw-I1cw8OxKwmDh0dT": {
      "id": "FPPJw-I1cw8OxKwmDh0dT",
      "zh": "部署Stamps",
      "en": "Deployment Stamps",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「部署Stamps」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**部署Stamps**（Deployment Stamps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「部署Stamps」出现在哪：上游输入是什么，下游输出是什么。",
        "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。",
        "再看配置、密钥、存储、网络和权限如何注入。",
        "排障时围绕 describe、logs、events、状态字段逐层定位。"
      ],
      "practice": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。",
      "pitfalls": [
        "直接操作 Pod 而忽略控制器",
        "不看 events 就猜问题",
        "把 Service、Ingress、Deployment 的职责混在一起"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**部署Stamps**（Deployment Stamps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。 再看配置、密钥、存储、网络和权限如何注入。 排障时围绕 describe、logs、events、状态字段逐层定位。"
        },
        {
          "title": "动手验证",
          "body": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
        }
      ],
      "kind": "k8s"
    },
    "Ml9lPDGjRAJTHkBnX51Un": {
      "id": "Ml9lPDGjRAJTHkBnX51Un",
      "zh": "Geodes（技术术语）",
      "en": "Geodes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Geodes（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Geodes（技术术语）**（Geodes）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Geodes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Geodes（技术术语）**（Geodes）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "cNJQoMNZmxNygWAJIA8HI": {
      "id": "cNJQoMNZmxNygWAJIA8HI",
      "zh": "Health端点监控",
      "en": "Health Endpoint Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Health端点监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Health端点监控**（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Health端点监控**（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "-M3Zd8w79sKBAY6_aJRE8": {
      "id": "-M3Zd8w79sKBAY6_aJRE8",
      "zh": "队列-基于负载Leveling",
      "en": "Queue-Based Load Leveling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「队列-基于负载Leveling」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**队列-基于负载Leveling**（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**队列-基于负载Leveling**（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "6YVkguDOtwveyeP4Z1NL3": {
      "id": "6YVkguDOtwveyeP4Z1NL3",
      "zh": "Throttling（技术术语）",
      "en": "Throttling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Throttling（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Throttling（技术术语）**（Throttling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Throttling（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Throttling（技术术语）**（Throttling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "wPe7Xlwqws7tEpTAVvYjr": {
      "id": "wPe7Xlwqws7tEpTAVvYjr",
      "zh": "High可用性",
      "en": "High Availability",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「High可用性」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**High可用性**（High Availability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「High可用性」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**High可用性**（High Availability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "Ze471tPbAwlwZyU4oIzH9": {
      "id": "Ze471tPbAwlwZyU4oIzH9",
      "zh": "部署Stamps",
      "en": "Deployment Stamps",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「部署Stamps」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**部署Stamps**（Deployment Stamps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「部署Stamps」出现在哪：上游输入是什么，下游输出是什么。",
        "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。",
        "再看配置、密钥、存储、网络和权限如何注入。",
        "排障时围绕 describe、logs、events、状态字段逐层定位。"
      ],
      "practice": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。",
      "pitfalls": [
        "直接操作 Pod 而忽略控制器",
        "不看 events 就猜问题",
        "把 Service、Ingress、Deployment 的职责混在一起"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**部署Stamps**（Deployment Stamps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。 再看配置、密钥、存储、网络和权限如何注入。 排障时围绕 describe、logs、events、状态字段逐层定位。"
        },
        {
          "title": "动手验证",
          "body": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
        }
      ],
      "kind": "k8s"
    },
    "6hOSEZJZ7yezVN67h5gmS": {
      "id": "6hOSEZJZ7yezVN67h5gmS",
      "zh": "Geodes（技术术语）",
      "en": "Geodes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Geodes（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Geodes（技术术语）**（Geodes）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Geodes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Geodes（技术术语）**（Geodes）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "uK5o7NgDvr2pV0ulF0Fh9": {
      "id": "uK5o7NgDvr2pV0ulF0Fh9",
      "zh": "Health端点监控",
      "en": "Health Endpoint Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Health端点监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Health端点监控**（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Health端点监控**（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "IR2_kgs2U9rnAJiDBmpqK": {
      "id": "IR2_kgs2U9rnAJiDBmpqK",
      "zh": "Bulkhead（技术术语）",
      "en": "Bulkhead",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Bulkhead（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Bulkhead（技术术语）**（Bulkhead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Bulkhead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Bulkhead（技术术语）**（Bulkhead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "D1OmCoqvd3-_af3u0ciHr": {
      "id": "D1OmCoqvd3-_af3u0ciHr",
      "zh": "Circuit Breaker（技术术语）",
      "en": "Circuit Breaker",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Circuit Breaker（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Circuit Breaker（技术术语）**（Circuit Breaker）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Circuit Breaker（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Circuit Breaker（技术术语）**（Circuit Breaker）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "wlAWMjxZF6yav3ZXOScxH": {
      "id": "wlAWMjxZF6yav3ZXOScxH",
      "zh": "Resiliency（技术术语）",
      "en": "Resiliency",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Resiliency（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Resiliency（技术术语）**（Resiliency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Resiliency（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Resiliency（技术术语）**（Resiliency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "PLn9TF9GYnPcbpTdDMQbG": {
      "id": "PLn9TF9GYnPcbpTdDMQbG",
      "zh": "Bulkhead（技术术语）",
      "en": "Bulkhead",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Bulkhead（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Bulkhead（技术术语）**（Bulkhead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Bulkhead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Bulkhead（技术术语）**（Bulkhead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "O4zYDqvVWD7sMI27k_0Nl": {
      "id": "O4zYDqvVWD7sMI27k_0Nl",
      "zh": "Circuit Breaker（技术术语）",
      "en": "Circuit Breaker",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Circuit Breaker（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Circuit Breaker（技术术语）**（Circuit Breaker）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Circuit Breaker（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
        "再明确触发条件、输入产物、输出产物和失败处理。",
        "成熟流程应该能重复执行、能审计、能回滚。"
      ],
      "practice": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。",
      "pitfalls": [
        "只自动部署，不自动测试",
        "环境变量和密钥管理混乱",
        "发布后没有监控和回滚方案"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Circuit Breaker（技术术语）**（Circuit Breaker）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。 再明确触发条件、输入产物、输出产物和失败处理。 成熟流程应该能重复执行、能审计、能回滚。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
        }
      ],
      "kind": "devops"
    },
    "MNlWNjrG8eh5OzPVlbb9t": {
      "id": "MNlWNjrG8eh5OzPVlbb9t",
      "zh": "Compensating事务",
      "en": "Compensating Transaction",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Compensating事务」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Compensating事务**（Compensating Transaction）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Compensating事务」出现在哪：上游输入是什么，下游输出是什么。",
        "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
        "查询时关注输入表、过滤条件、连接方式和最终结果集。",
        "性能问题通常要看索引、执行计划和返回数据量。"
      ],
      "practice": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。",
      "pitfalls": [
        "只会写 SELECT，不理解表关系",
        "忽略 NULL、重复数据和边界条件",
        "没有看执行计划就猜性能瓶颈"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Compensating事务**（Compensating Transaction）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。 查询时关注输入表、过滤条件、连接方式和最终结果集。 性能问题通常要看索引、执行计划和返回数据量。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql"
    },
    "CKCNk3obx4u43rBqUj2Yf": {
      "id": "CKCNk3obx4u43rBqUj2Yf",
      "zh": "Health端点监控",
      "en": "Health Endpoint Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Health端点监控」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Health端点监控**（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Health端点监控**（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "AJLBFyAsEdQYF6ygO0MmQ": {
      "id": "AJLBFyAsEdQYF6ygO0MmQ",
      "zh": "主节点Election",
      "en": "Leader Election",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「主节点Election」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**主节点Election**（Leader Election）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「主节点Election」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**主节点Election**（Leader Election）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "NybkOwl1lgaglZPRJQJ_Z": {
      "id": "NybkOwl1lgaglZPRJQJ_Z",
      "zh": "队列-基于负载Leveling",
      "en": "Queue-Based Load Leveling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「队列-基于负载Leveling」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**队列-基于负载Leveling**（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**队列-基于负载Leveling**（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "xX_9VGUaOkBYFH3jPjnww": {
      "id": "xX_9VGUaOkBYFH3jPjnww",
      "zh": "Retry（技术术语）",
      "en": "Retry",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Retry（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Retry（技术术语）**（Retry）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Retry（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Retry（技术术语）**（Retry）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "RTEJHZ26znfBLrpQPtNvn": {
      "id": "RTEJHZ26znfBLrpQPtNvn",
      "zh": "调度AgentSupervisor",
      "en": "Scheduler Agent Supervisor",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「调度AgentSupervisor」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**调度AgentSupervisor**（Scheduler Agent Supervisor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「调度AgentSupervisor」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**调度AgentSupervisor**（Scheduler Agent Supervisor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "ZvYpE6-N5dAtRDIwqcAu6": {
      "id": "ZvYpE6-N5dAtRDIwqcAu6",
      "zh": "安全",
      "en": "Security",
      "level": "core",
      "nodeType": "topic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「安全」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**安全**（Security）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安全」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**安全**（Security）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "lHPl-kr1ArblR7bJeQEB9": {
      "id": "lHPl-kr1ArblR7bJeQEB9",
      "zh": "Federated Identity（技术术语）",
      "en": "Federated Identity",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Federated Identity（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Federated Identity（技术术语）**（Federated Identity）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Federated Identity（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
        "定义请求参数、响应 JSON 结构和错误码格式。",
        "实现 handler：校验输入 → 调业务 → 返回统一响应。",
        "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
      ],
      "practice": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。",
      "pitfalls": [
        "把业务错误都返回 200",
        "响应结构不稳定",
        "没有考虑分页、权限和版本兼容"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Federated Identity（技术术语）**（Federated Identity）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
        },
        {
          "title": "真正要掌握什么",
          "body": "定义请求参数、响应 JSON 结构和错误码格式。 实现 handler：校验输入 → 调业务 → 返回统一响应。 用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        },
        {
          "title": "动手验证",
          "body": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
        }
      ],
      "kind": "api",
      "routeLabels": [
        "定契约",
        "请求/响应",
        "实现 handler",
        "curl 验证"
      ]
    },
    "DTQJu0AvgWOhMFcOYqzTD": {
      "id": "DTQJu0AvgWOhMFcOYqzTD",
      "zh": "Gatekeeper（技术术语）",
      "en": "Gatekeeper",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Gatekeeper（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Gatekeeper（技术术语）**（Gatekeeper）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Gatekeeper（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Gatekeeper（技术术语）**（Gatekeeper）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    },
    "VltZgIrApHOwZ8YHvdmHB": {
      "id": "VltZgIrApHOwZ8YHvdmHB",
      "zh": "Valet Key（技术术语）",
      "en": "Valet Key",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "story": "学习「Valet Key（技术术语）」时，先把它放进 系统设计 的真实场景，而不是孤立背术语。",
      "what": "**Valet Key（技术术语）**（Valet Key）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "why": "它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 掌握它后，你在 系统设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Valet Key（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
        "再判断瓶颈、单点、数据一致性和扩展方式。",
        "最后用指标和故障演练验证设计是否成立。"
      ],
      "practice": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。",
      "pitfalls": [
        "只背八股名词，不落到具体场景",
        "为了高大上过度拆微服务",
        "没有说明取舍和失败模式"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Valet Key（技术术语）**（Valet Key）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。"
        },
        {
          "title": "真正要掌握什么",
          "body": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。 再判断瓶颈、单点、数据一致性和扩展方式。 最后用指标和故障演练验证设计是否成立。"
        },
        {
          "title": "动手验证",
          "body": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
        }
      ],
      "kind": "system"
    }
  },
  "lessons": {
    "_hYN0gEi9BL24nptEtXWU": {
      "scene": "学习「入门介绍」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "入门介绍（Introduction）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「入门介绍」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "idLHBxhvcIqZTqmh_E8Az": {
      "scene": "学习「什么是系统设计」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "什么是系统设计（What is System Design?）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「什么是系统设计」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「什么是系统设计」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「什么是系统设计」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "os3Pa6W9SSNEzgmlBbglQ": {
      "scene": "学习「如何approach系统设计」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "如何approach系统设计（How to approach System Design?）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「如何approach系统设计」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「如何approach系统设计」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「如何approach系统设计」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "e_15lymUjFc6VWqzPnKxG": {
      "scene": "学习「性能与扩展性对比」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "性能与扩展性对比（Performance vs Scalability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「性能与扩展性对比」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「性能与扩展性对比」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「性能与扩展性对比」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "O3wAHLnzrkvLWr4afHDdr": {
      "scene": "学习「延迟与吞吐对比」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "延迟与吞吐对比（Latency vs Throughput）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「延迟与吞吐对比」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「延迟与吞吐对比」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「延迟与吞吐对比」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "uJc27BNAuP321HQNbjftn": {
      "scene": "学习「可用性与一致性对比」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "可用性与一致性对比（Availability vs Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「可用性与一致性对比」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「可用性与一致性对比」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「可用性与一致性对比」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "tcGdVQsCEobdV9hgOq3eG": {
      "scene": "学习「CAP Theorem（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "CAP Theorem（技术术语）（CAP Theorem）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「CAP Theorem（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「CAP Theorem（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「CAP Theorem（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "GHe8V-REu1loRpDnHbyUn": {
      "scene": "学习「一致性模式」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "一致性模式（Consistency Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「一致性模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「一致性模式」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「一致性模式」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "EKD5AikZtwjtsEYRPJhQ2": {
      "scene": "学习「弱一致性」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "弱一致性（Weak Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「弱一致性」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「弱一致性」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「弱一致性」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "rRDGVynX43inSeQ9lR_FS": {
      "scene": "学习「最终一致性」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "最终一致性（Eventual Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「最终一致性」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「最终一致性」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「最终一致性」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "JjB7eB8gdRCAYf5M0RcT7": {
      "scene": "学习「强一致性」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "强一致性（Strong Consistency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「强一致性」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「强一致性」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「强一致性」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "ezptoTqeaepByegxS5kHL": {
      "scene": "学习「可用性模式」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "可用性模式（Availability Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「可用性模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「可用性模式」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「可用性模式」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "L_jRfjvMGjFbHEbozeVQl": {
      "scene": "学习「Fail-Over（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Fail-Over（技术术语）（Fail-Over）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Fail-Over（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Fail-Over（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Fail-Over（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "0RQ5jzZKdadYY0h_QZ0Bb": {
      "scene": "学习「复制」：文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "core": "复制（Replication）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "route": [
        {
          "label": "定文档边界",
          "title": "「复制」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「复制」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "按查询建索引",
          "title": "先明确一次请求通常读写哪些字段。",
          "text": "先明确一次请求通常读写哪些字段。"
        },
        {
          "label": "做聚合/复制",
          "title": "再决定嵌入还是引用，避免一次查询跨太多集合。",
          "text": "再决定嵌入还是引用，避免一次查询跨太多集合。"
        },
        {
          "label": "验证读写路径",
          "title": "索引、聚合、复制和分片决定它能否支撑真实流量。",
          "text": "索引、聚合、复制和分片决定它能否支撑真实流量。"
        }
      ],
      "confusion": "容易混淆的是：会说「复制」不等于会用。重点看 定文档边界 → 按查询建索引 → 做聚合/复制 → 验证读写路径 这条链路。",
      "experiment": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
    },
    "uHdrZllrZFAnVkwIB3y5-": {
      "scene": "学习「可用性inNumbers」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "可用性inNumbers（Availability in Numbers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「可用性inNumbers」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「可用性inNumbers」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「可用性inNumbers」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "DOESIlBThd_wp2uOSd_CS": {
      "scene": "学习「Background Jobs（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Background Jobs（技术术语）（Background Jobs）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Background Jobs（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Background Jobs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Background Jobs（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "NEsPjQifNDlZJE-2YLVl1": {
      "scene": "学习「事件-Driven」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "事件-Driven（Event-Driven）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「事件-Driven」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「事件-Driven」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「事件-Driven」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "zoViI4kzpKIxpU20T89K_": {
      "scene": "学习「Schedule Driven（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Schedule Driven（技术术语）（Schedule Driven）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Schedule Driven（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Schedule Driven（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Schedule Driven（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "2gRIstNT-fTkv5GZ692gx": {
      "scene": "学习「Returning Results（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Returning Results（技术术语）（Returning Results）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Returning Results（技术术语）」出现在哪：上游输入是什…",
          "text": "「Returning Results（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Returning Results（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "Uk6J8JRcKVEFz4_8rLfnQ": {
      "scene": "学习「域Name系统」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "域Name系统（Domain Name System）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「域Name系统」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「域Name系统」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「域Name系统」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "O730v5Ww3ByAiBSs6fwyM": {
      "scene": "学习「Content交付Networks」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "Content交付Networks（Content Delivery Networks）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「Content交付Networks」出现在哪：上游输入是什么，下游输出…",
          "text": "「Content交付Networks」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "执行命令",
          "title": "先知道它对应文件、进程、用户权限、网络还是服务管理。",
          "text": "先知道它对应文件、进程、用户权限、网络还是服务管理。"
        },
        {
          "label": "读输出",
          "title": "再配合命令观察输入输出，而不是只背参数。",
          "text": "再配合命令观察输入输出，而不是只背参数。"
        },
        {
          "label": "保守改配置",
          "title": "线上排障时要保守操作，先读状态再改配置。",
          "text": "线上排障时要保守操作，先读状态再改配置。"
        }
      ],
      "confusion": "容易混淆的是：会说「Content交付Networks」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "uIerrf_oziiLg-KEyz8WM": {
      "scene": "学习「推送CDNs」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "推送CDNs（Push CDNs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "本地 commit",
          "title": "本地 commit 后，代码只在你电脑的历史里；同事还看不到。",
          "text": "本地 commit 后，代码只在你电脑的历史里；同事还看不到。"
        },
        {
          "label": "git push",
          "title": "git push 把本地分支上传到 GitHub/GitLab 的远程分…",
          "text": "git push 把本地分支上传到 GitHub/GitLab 的远程分支（origin）。"
        },
        {
          "label": "git pull",
          "title": "git pull / git fetch 把远程新提交拉回本地，避免覆盖…",
          "text": "git pull / git fetch 把远程新提交拉回本地，避免覆盖别人改动。"
        },
        {
          "label": "处理冲突",
          "title": "若同一行被两人修改，冲突时在文件里手工合并，再 add + commit…",
          "text": "若同一行被两人修改，冲突时在文件里手工合并，再 add + commit。"
        }
      ],
      "confusion": "容易混淆的是：会说「推送CDNs」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "HkXiEMLqxJoQyAHav3ccL": {
      "scene": "学习「拉取CDNs」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "拉取CDNs（Pull CDNs）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "本地 commit",
          "title": "本地 commit 后，代码只在你电脑的历史里；同事还看不到。",
          "text": "本地 commit 后，代码只在你电脑的历史里；同事还看不到。"
        },
        {
          "label": "git push",
          "title": "git push 把本地分支上传到 GitHub/GitLab 的远程分…",
          "text": "git push 把本地分支上传到 GitHub/GitLab 的远程分支（origin）。"
        },
        {
          "label": "git pull",
          "title": "git pull / git fetch 把远程新提交拉回本地，避免覆盖…",
          "text": "git pull / git fetch 把远程新提交拉回本地，避免覆盖别人改动。"
        },
        {
          "label": "处理冲突",
          "title": "若同一行被两人修改，冲突时在文件里手工合并，再 add + commit…",
          "text": "若同一行被两人修改，冲突时在文件里手工合并，再 add + commit。"
        }
      ],
      "confusion": "容易混淆的是：会说「拉取CDNs」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "14KqLKgh090Rb3MDwelWY": {
      "scene": "学习「负载Balancers」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "负载Balancers（Load Balancers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「负载Balancers」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「负载Balancers」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「负载Balancers」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "ocdcbhHrwjJX0KWgmsOL6": {
      "scene": "学习「LB（技术术语）与Reverse代理对比」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "LB（技术术语）与Reverse代理对比（LB vs Reverse Proxy）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「LB（技术术语）与Reverse代理对比」出现在哪：上游输入是什么，下…",
          "text": "「LB（技术术语）与Reverse代理对比」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「LB（技术术语）与Reverse代理对比」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "urSjLyLTE5IIz0TFxMBWL": {
      "scene": "学习「负载BalancingAlgorithms」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "负载BalancingAlgorithms（Load Balancing Algorithms）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「负载BalancingAlgorithms」出现在哪：上游输入是什么，…",
          "text": "「负载BalancingAlgorithms」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「负载BalancingAlgorithms」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "e69-JVbDj7dqV_p1j1kML": {
      "scene": "学习「层7负载Balancing」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "层7负载Balancing（Layer 7 Load Balancing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「层7负载Balancing」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「层7负载Balancing」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「层7负载Balancing」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "MpM9rT1-_LGD7YbnBjqOk": {
      "scene": "学习「层4负载Balancing」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "层4负载Balancing（Layer 4 Load Balancing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「层4负载Balancing」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「层4负载Balancing」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「层4负载Balancing」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "IkUCfSWNY-02wg2WCo1c6": {
      "scene": "学习「Horizontal扩缩」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Horizontal扩缩（Horizontal Scaling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Horizontal扩缩」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Horizontal扩缩」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Horizontal扩缩」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "XXuzTrP5UNVwSpAk-tAGr": {
      "scene": "学习「Application Layer（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Application Layer（技术术语）（Application Layer）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Application Layer（技术术语）」出现在哪：上游输入是什…",
          "text": "「Application Layer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Application Layer（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "UKTiaHCzYXnrNw31lHriv": {
      "scene": "学习「Microservices（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Microservices（技术术语）（Microservices）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Microservices（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Microservices（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "看 Pod/Service",
          "title": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deploy…",
          "text": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。"
        },
        {
          "label": "暴露与配置",
          "title": "再看配置、密钥、存储、网络和权限如何注入。",
          "text": "再看配置、密钥、存储、网络和权限如何注入。"
        },
        {
          "label": "events 排障",
          "title": "排障时围绕 describe、logs、events、状态字段逐层定位。",
          "text": "排障时围绕 describe、logs、events、状态字段逐层定位。"
        }
      ],
      "confusion": "容易混淆的是：会说「Microservices（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "Nt0HUWLOl4O77elF8Is1S": {
      "scene": "学习「服务发现」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "服务发现（Service Discovery）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「服务发现」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「服务发现」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "看 Pod/Service",
          "title": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deploy…",
          "text": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。"
        },
        {
          "label": "暴露与配置",
          "title": "再看配置、密钥、存储、网络和权限如何注入。",
          "text": "再看配置、密钥、存储、网络和权限如何注入。"
        },
        {
          "label": "events 排障",
          "title": "排障时围绕 describe、logs、events、状态字段逐层定位。",
          "text": "排障时围绕 describe、logs、events、状态字段逐层定位。"
        }
      ],
      "confusion": "容易混淆的是：会说「服务发现」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "5FXwwRMNBhG7LT5ub6t2L": {
      "scene": "学习「数据库」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据库（Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据库」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据库」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "写查询/变更",
          "title": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
          "text": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。"
        },
        {
          "label": "看执行计划",
          "title": "查询时关注输入表、过滤条件、连接方式和最终结果集。",
          "text": "查询时关注输入表、过滤条件、连接方式和最终结果集。"
        },
        {
          "label": "验证结果",
          "title": "性能问题通常要看索引、执行计划和返回数据量。",
          "text": "性能问题通常要看索引、执行计划和返回数据量。"
        }
      ],
      "confusion": "容易混淆的是：会说「数据库」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "KLnpMR2FxlQkCHZP6-tZm": {
      "scene": "学习「SQL（技术术语）与NoSQL（技术术语）对比」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SQL（技术术语）与NoSQL（技术术语）对比（SQL vs NoSQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SQL（技术术语）与NoSQL（技术术语）对比」出现在哪：上游输入是什…",
          "text": "「SQL（技术术语）与NoSQL（技术术语）对比」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "写查询/变更",
          "title": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
          "text": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。"
        },
        {
          "label": "看执行计划",
          "title": "查询时关注输入表、过滤条件、连接方式和最终结果集。",
          "text": "查询时关注输入表、过滤条件、连接方式和最终结果集。"
        },
        {
          "label": "验证结果",
          "title": "性能问题通常要看索引、执行计划和返回数据量。",
          "text": "性能问题通常要看索引、执行计划和返回数据量。"
        }
      ],
      "confusion": "容易混淆的是：会说「SQL（技术术语）与NoSQL（技术术语）对比」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "dc-aIbBwUdlwgwQKGrq49": {
      "scene": "学习「复制」：文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "core": "复制（Replication）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "route": [
        {
          "label": "定文档边界",
          "title": "「复制」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「复制」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "按查询建索引",
          "title": "先明确一次请求通常读写哪些字段。",
          "text": "先明确一次请求通常读写哪些字段。"
        },
        {
          "label": "做聚合/复制",
          "title": "再决定嵌入还是引用，避免一次查询跨太多集合。",
          "text": "再决定嵌入还是引用，避免一次查询跨太多集合。"
        },
        {
          "label": "验证读写路径",
          "title": "索引、聚合、复制和分片决定它能否支撑真实流量。",
          "text": "索引、聚合、复制和分片决定它能否支撑真实流量。"
        }
      ],
      "confusion": "容易混淆的是：会说「复制」不等于会用。重点看 定文档边界 → 按查询建索引 → 做聚合/复制 → 验证读写路径 这条链路。",
      "experiment": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
    },
    "FX6dcV_93zOfbZMdM_-li": {
      "scene": "学习「分片」：文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "core": "分片（Sharding）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "route": [
        {
          "label": "定文档边界",
          "title": "「分片」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「分片」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "按查询建索引",
          "title": "先明确一次请求通常读写哪些字段。",
          "text": "先明确一次请求通常读写哪些字段。"
        },
        {
          "label": "做聚合/复制",
          "title": "再决定嵌入还是引用，避免一次查询跨太多集合。",
          "text": "再决定嵌入还是引用，避免一次查询跨太多集合。"
        },
        {
          "label": "验证读写路径",
          "title": "索引、聚合、复制和分片决定它能否支撑真实流量。",
          "text": "索引、聚合、复制和分片决定它能否支撑真实流量。"
        }
      ],
      "confusion": "容易混淆的是：会说「分片」不等于会用。重点看 定文档边界 → 按查询建索引 → 做聚合/复制 → 验证读写路径 这条链路。",
      "experiment": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
    },
    "DGmVRI7oWdSOeIUn_g0rI": {
      "scene": "学习「Federation（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Federation（技术术语）（Federation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Federation（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Federation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Federation（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "Zp9D4--DgtlAjE2nIfaO_": {
      "scene": "学习「反规范化」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "反规范化（Denormalization）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「反规范化」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「反规范化」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「反规范化」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "fY8zgbB13wxZ1CFtMSdZZ": {
      "scene": "学习「SQL调优」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SQL调优（SQL Tuning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SQL调优」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SQL调优」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "写查询/变更",
          "title": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
          "text": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。"
        },
        {
          "label": "看执行计划",
          "title": "查询时关注输入表、过滤条件、连接方式和最终结果集。",
          "text": "查询时关注输入表、过滤条件、连接方式和最终结果集。"
        },
        {
          "label": "验证结果",
          "title": "性能问题通常要看索引、执行计划和返回数据量。",
          "text": "性能问题通常要看索引、执行计划和返回数据量。"
        }
      ],
      "confusion": "容易混淆的是：会说「SQL调优」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "KFtdmmce4bRkDyvFXZzLN": {
      "scene": "学习「Key-Value Store（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Key-Value Store（技术术语）（Key-Value Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Key-Value Store（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Key-Value Store（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Key-Value Store（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "didEznSlVHqqlijtyOSr3": {
      "scene": "学习「Document Store（技术术语）」：文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "core": "Document Store（技术术语）（Document Store）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "route": [
        {
          "label": "定文档边界",
          "title": "「Document Store（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Document Store（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "按查询建索引",
          "title": "先明确一次请求通常读写哪些字段。",
          "text": "先明确一次请求通常读写哪些字段。"
        },
        {
          "label": "做聚合/复制",
          "title": "再决定嵌入还是引用，避免一次查询跨太多集合。",
          "text": "再决定嵌入还是引用，避免一次查询跨太多集合。"
        },
        {
          "label": "验证读写路径",
          "title": "索引、聚合、复制和分片决定它能否支撑真实流量。",
          "text": "索引、聚合、复制和分片决定它能否支撑真实流量。"
        }
      ],
      "confusion": "容易混淆的是：会说「Document Store（技术术语）」不等于会用。重点看 定文档边界 → 按查询建索引 → 做聚合/复制 → 验证读写路径 这条链路。",
      "experiment": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
    },
    "WHq1AdISkcgthaugE9uY7": {
      "scene": "学习「Wide Column Store（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Wide Column Store（技术术语）（Wide Column Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Wide Column Store（技术术语）」出现在哪：上游输入是什…",
          "text": "「Wide Column Store（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Wide Column Store（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "6RLgnL8qLBzYkllHeaI-Z": {
      "scene": "学习「Graph数据库」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Graph数据库（Graph Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Graph数据库」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Graph数据库」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "写查询/变更",
          "title": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
          "text": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。"
        },
        {
          "label": "看执行计划",
          "title": "查询时关注输入表、过滤条件、连接方式和最终结果集。",
          "text": "查询时关注输入表、过滤条件、连接方式和最终结果集。"
        },
        {
          "label": "验证结果",
          "title": "性能问题通常要看索引、执行计划和返回数据量。",
          "text": "性能问题通常要看索引、执行计划和返回数据量。"
        }
      ],
      "confusion": "容易混淆的是：会说「Graph数据库」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "-X4g8kljgVBOBcf1DDzgi": {
      "scene": "学习「缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "缓存（Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「缓存」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Bgqgl67FK56ioLNFivIsc": {
      "scene": "学习「Refresh Ahead（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Refresh Ahead（技术术语）（Refresh Ahead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Refresh Ahead（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Refresh Ahead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Refresh Ahead（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "vNndJ-MWetcbaF2d-3-JP": {
      "scene": "学习「Write-behind（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Write-behind（技术术语）（Write-behind）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Write-behind（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「Write-behind（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Write-behind（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "RNITLR1FUQWkRbSBXTD_z": {
      "scene": "学习「Write-through（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Write-through（技术术语）（Write-through）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Write-through（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Write-through（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Write-through（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "bffJlvoLHFldS0CluWifP": {
      "scene": "学习「缓存Aside」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "缓存Aside（Cache Aside）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「缓存Aside」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "RHNRb6QWiGvCK3KQOPK3u": {
      "scene": "学习「客户端缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "客户端缓存（Client Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「客户端缓存」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Kisvxlrjb7XnKFCOdxRtb": {
      "scene": "学习「CDN缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "CDN缓存（CDN Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「CDN缓存」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "o532nPnL-d2vXJn9k6vMl": {
      "scene": "学习「Web服务端缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Web服务端缓存（Web Server Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「Web服务端缓存」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "BeIg4jzbij2cwc_a_VpYG": {
      "scene": "学习「数据库缓存」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据库缓存（Database Caching）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据库缓存」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据库缓存」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "写查询/变更",
          "title": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
          "text": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。"
        },
        {
          "label": "看执行计划",
          "title": "查询时关注输入表、过滤条件、连接方式和最终结果集。",
          "text": "查询时关注输入表、过滤条件、连接方式和最终结果集。"
        },
        {
          "label": "验证结果",
          "title": "性能问题通常要看索引、执行计划和返回数据量。",
          "text": "性能问题通常要看索引、执行计划和返回数据量。"
        }
      ],
      "confusion": "容易混淆的是：会说「数据库缓存」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "5Ux_JBDOkflCaIm4tVBgO": {
      "scene": "学习「Application缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Application缓存（Application Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「Application缓存」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "84N4XY31PwXRntXX1sdCU": {
      "scene": "学习「Asynchronism（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Asynchronism（技术术语）（Asynchronism）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Asynchronism（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「Asynchronism（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Asynchronism（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "YiYRZFE_zwPMiCZxz9FnP": {
      "scene": "学习「Back Pressure（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Back Pressure（技术术语）（Back Pressure）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Back Pressure（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Back Pressure（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Back Pressure（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "a9wGW_H1HpvvdYCXoS-Rf": {
      "scene": "学习「Task Queues（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Task Queues（技术术语）（Task Queues）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Task Queues（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Task Queues（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Task Queues（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "37X1_9eCmkZkz5RDudE5N": {
      "scene": "学习「消息Queues」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "消息Queues（Message Queues）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「消息Queues」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「消息Queues」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「消息Queues」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "3pRi8M4xQXsehkdfUNtYL": {
      "scene": "学习「Idempotent Operations（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Idempotent Operations（技术术语）（Idempotent Operations）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Idempotent Operations（技术术语）」出现在哪：上游…",
          "text": "「Idempotent Operations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Idempotent Operations（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "uQFzD_ryd-8Dr1ppjorYJ": {
      "scene": "学习「Communication（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Communication（技术术语）（Communication）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Communication（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Communication（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Communication（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "I_nR6EwjNXSG7_hw-_VhX": {
      "scene": "学习「HTTP（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "HTTP（技术术语）（HTTP）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「HTTP（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「HTTP（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「HTTP（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "2nF5uC6fYKbf0RFgGNHiP": {
      "scene": "学习「TCP（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "TCP（技术术语）（TCP）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「TCP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「TCP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「TCP（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "LC5aTmUKNiw9RuSUt3fSE": {
      "scene": "学习「UDP（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "UDP（技术术语）（UDP）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「UDP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「UDP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「UDP（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "ixqucoAkgnphWYAFnsMe-": {
      "scene": "学习「RPC（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "RPC（技术术语）（RPC）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「RPC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「RPC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「RPC（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "6-bgmfDTAQ9zABhpmVoHV": {
      "scene": "学习「REST（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "REST（技术术语）（REST）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「REST（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「REST（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「REST（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "Hw2v1rCYn24qxBhhmdc28": {
      "scene": "学习「gRPC（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "gRPC（技术术语）（gRPC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「gRPC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「gRPC（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「gRPC（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "jwv2g2Yeq-6Xv5zSd746R": {
      "scene": "学习「GraphQL（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "GraphQL（技术术语）（GraphQL）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「GraphQL（技术术语）」对应的资源、HTTP 方法和 URL …",
          "text": "明确「GraphQL（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「GraphQL（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "p--uEm6klLx_hKxKJiXE5": {
      "scene": "学习「性能Antipatterns」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "性能Antipatterns（Performance Antipatterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「性能Antipatterns」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「性能Antipatterns」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「性能Antipatterns」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "hxiV2uF7tvhZKe4K-4fTn": {
      "scene": "学习「Busy数据库」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Busy数据库（Busy Database）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Busy数据库」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Busy数据库」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "写查询/变更",
          "title": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
          "text": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。"
        },
        {
          "label": "看执行计划",
          "title": "查询时关注输入表、过滤条件、连接方式和最终结果集。",
          "text": "查询时关注输入表、过滤条件、连接方式和最终结果集。"
        },
        {
          "label": "验证结果",
          "title": "性能问题通常要看索引、执行计划和返回数据量。",
          "text": "性能问题通常要看索引、执行计划和返回数据量。"
        }
      ],
      "confusion": "容易混淆的是：会说「Busy数据库」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "i_2M3VloG-xTgWDWp4ngt": {
      "scene": "学习「Busy Frontend（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Busy Frontend（技术术语）（Busy Frontend）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Busy Frontend（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Busy Frontend（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Busy Frontend（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "0IzQwuYi_E00bJwxDuw2B": {
      "scene": "学习「Chatty I/O（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Chatty I/O（技术术语）（Chatty I/O）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Chatty I/O（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Chatty I/O（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Chatty I/O（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "6u3XmtJFWyJnyZUnJcGYb": {
      "scene": "学习「Extraneous Fetching（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Extraneous Fetching（技术术语）（Extraneous Fetching）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Extraneous Fetching（技术术语）」出现在哪：上游输入…",
          "text": "「Extraneous Fetching（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Extraneous Fetching（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "lwMs4yiUHF3nQwcvauers": {
      "scene": "学习「Improper Instantiation（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Improper Instantiation（技术术语）（Improper Instantiation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Improper Instantiation（技术术语）」出现在哪：上…",
          "text": "「Improper Instantiation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Improper Instantiation（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "p1QhCptnwzTGUXVMnz_Oz": {
      "scene": "学习「Monolithic持久化」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Monolithic持久化（Monolithic Persistence）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Monolithic持久化」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Monolithic持久化」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Monolithic持久化」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "klvHk1_e03Jarn5T46QNi": {
      "scene": "学习「No缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "No缓存（No Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「No缓存」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "r7uQxmurvfsYtTCieHqly": {
      "scene": "学习「Noisy Neighbor（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Noisy Neighbor（技术术语）（Noisy Neighbor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Noisy Neighbor（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Noisy Neighbor（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Noisy Neighbor（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "LNmAJmh2ndFtOQIpvX_ga": {
      "scene": "学习「Retry Storm（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Retry Storm（技术术语）（Retry Storm）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Retry Storm（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Retry Storm（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Retry Storm（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "Ihnmxo_bVgZABDwg1QGGk": {
      "scene": "学习「Synchronous I/O（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Synchronous I/O（技术术语）（Synchronous I/O）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Synchronous I/O（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Synchronous I/O（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Synchronous I/O（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "hDFYlGFYwcwWXLmrxodFX": {
      "scene": "学习「监控」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "监控（Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「监控」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「监控」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "hkjYvLoVt9xKDzubm0Jy3": {
      "scene": "学习「Health监控」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Health监控（Health Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Health监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Health监控」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「Health监控」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "rVrwaioGURvrqNBufF2dj": {
      "scene": "学习「可用性监控」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "可用性监控（Availability Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「可用性监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「可用性监控」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「可用性监控」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "x1i3qWFtNNjd00-kAvFHw": {
      "scene": "学习「性能监控」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "性能监控（Performance Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「性能监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「性能监控」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「性能监控」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "I_NfmDcBph8-oyFVFTknL": {
      "scene": "学习「安全监控」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "安全监控（Security Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「安全监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「安全监控」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「安全监控」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "eSZq74lROh5lllLyTBK5a": {
      "scene": "学习「Usage监控」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Usage监控（Usage Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Usage监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Usage监控」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「Usage监控」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "Q0fKphqmPwjTD0dhqiP6K": {
      "scene": "学习「Instrumentation（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Instrumentation（技术术语）（Instrumentation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Instrumentation（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Instrumentation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Instrumentation（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "IwMOTpsYHApdvHZOhXtIw": {
      "scene": "学习「Visualization（技术术语）与告警」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Visualization（技术术语）与告警（Visualization & Alerts）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Visualization（技术术语）与告警」出现在哪：上游输入是什么…",
          "text": "「Visualization（技术术语）与告警」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「Visualization（技术术语）与告警」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "THlzcZTNnPGLRiHPWT-Jv": {
      "scene": "学习「云设计模式」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "云设计模式（Cloud Design Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「云设计模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「云设计模式」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「云设计模式」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "dsWpta3WIBvv2K9pNVPo0": {
      "scene": "学习「Messaging（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Messaging（技术术语）（Messaging）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Messaging（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Messaging（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Messaging（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "VgvUWAC6JYFyPZKBRoEqf": {
      "scene": "学习「顺序Convoy」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "顺序Convoy（Sequential Convoy）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「顺序Convoy」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「顺序Convoy」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「顺序Convoy」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "uR1fU6pm7zTtdBcNgSRi4": {
      "scene": "学习「Scheduling Agent Supervisor（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Scheduling Agent Supervisor（技术术语）（Scheduling Agent Supervisor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Scheduling Agent Supervisor（技术术语）」出…",
          "text": "「Scheduling Agent Supervisor（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Scheduling Agent Supervisor（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "LncTxPg-wx8loy55r5NmV": {
      "scene": "学习「队列-基于负载Leveling」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "队列-基于负载Leveling（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「队列-基于负载Leveling」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "2ryzJhRDTo98gGgn9mAxR": {
      "scene": "学习「Publisher/Subscriber（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Publisher/Subscriber（技术术语）（Publisher/Subscriber）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「Publisher/Subscriber（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "DZcZEOi7h3u0744YhASet": {
      "scene": "学习「Priority队列」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Priority队列（Priority Queue）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Priority队列」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Priority队列」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Priority队列」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "siXdR3TB9-4wx_qWieJ5w": {
      "scene": "学习「Pipes（技术术语）与Filters（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Pipes（技术术语）与Filters（技术术语）（Pipes and Filters）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Pipes（技术术语）与Filters（技术术语）」出现在哪：上游输入…",
          "text": "「Pipes（技术术语）与Filters（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Pipes（技术术语）与Filters（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "9Ld07KLOqP0ICtXEjngYM": {
      "scene": "学习「Competing Consumers（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Competing Consumers（技术术语）（Competing Consumers）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Competing Consumers（技术术语）」出现在哪：上游输入…",
          "text": "「Competing Consumers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Competing Consumers（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "aCzRgUkVBvtHUeLU6p5ZH": {
      "scene": "学习「Choreography（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Choreography（技术术语）（Choreography）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Choreography（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「Choreography（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Choreography（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "kl4upCnnZvJSf2uII1Pa0": {
      "scene": "学习「Claim Check（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Claim Check（技术术语）（Claim Check）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Claim Check（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Claim Check（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Claim Check（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "eNFNXPsFiryVxFe4unVxk": {
      "scene": "学习「Async请求Reply」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Async请求Reply（Async Request Reply）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Async请求Reply」对应的资源、HTTP 方法和 URL 路…",
          "text": "明确「Async请求Reply」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「Async请求Reply」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "W0cUCrhiwH_Nrzxw50x3L": {
      "scene": "学习「数据管理」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "数据管理（Data Management）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「数据管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据管理」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「数据管理」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "stZOcr8EUBOK_ZB48uToj": {
      "scene": "学习「Valet Key（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Valet Key（技术术语）（Valet Key）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Valet Key（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Valet Key（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Valet Key（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "-lKq-LT7EPK7r3xbXLgwS": {
      "scene": "学习「静态ContentHosting」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "静态ContentHosting（Static Content Hosting）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「静态ContentHosting」出现在哪：上游输入是什么，下游输出是…",
          "text": "「静态ContentHosting」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「静态ContentHosting」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "R6YehzA3X6DDo6oGBoBAx": {
      "scene": "学习「分片」：文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "core": "分片（Sharding）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "route": [
        {
          "label": "定文档边界",
          "title": "「分片」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「分片」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "按查询建索引",
          "title": "先明确一次请求通常读写哪些字段。",
          "text": "先明确一次请求通常读写哪些字段。"
        },
        {
          "label": "做聚合/复制",
          "title": "再决定嵌入还是引用，避免一次查询跨太多集合。",
          "text": "再决定嵌入还是引用，避免一次查询跨太多集合。"
        },
        {
          "label": "验证读写路径",
          "title": "索引、聚合、复制和分片决定它能否支撑真实流量。",
          "text": "索引、聚合、复制和分片决定它能否支撑真实流量。"
        }
      ],
      "confusion": "容易混淆的是：会说「分片」不等于会用。重点看 定文档边界 → 按查询建索引 → 做聚合/复制 → 验证读写路径 这条链路。",
      "experiment": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
    },
    "WB7vQ4IJ0TPh2MbZvxP6V": {
      "scene": "学习「MaterializedVIEW 视图」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "MaterializedVIEW 视图（Materialized View）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「MaterializedVIEW 视图」出现在哪：上游输入是什么，下游…",
          "text": "「MaterializedVIEW 视图」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「MaterializedVIEW 视图」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "AH0nVeVsfYOjcI3vZvcdz": {
      "scene": "学习「INDEX 索引TABLE 表」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "INDEX 索引TABLE 表（Index Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「INDEX 索引TABLE 表」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「INDEX 索引TABLE 表」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "写查询/变更",
          "title": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
          "text": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。"
        },
        {
          "label": "看执行计划",
          "title": "查询时关注输入表、过滤条件、连接方式和最终结果集。",
          "text": "查询时关注输入表、过滤条件、连接方式和最终结果集。"
        },
        {
          "label": "验证结果",
          "title": "性能问题通常要看索引、执行计划和返回数据量。",
          "text": "性能问题通常要看索引、执行计划和返回数据量。"
        }
      ],
      "confusion": "容易混淆的是：会说「INDEX 索引TABLE 表」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "7OgRKlwFqrk3XO2z49EI1": {
      "scene": "学习「事件Sourcing」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "事件Sourcing（Event Sourcing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「事件Sourcing」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「事件Sourcing」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「事件Sourcing」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "LTD3dn05c0ruUJW0IQO7z": {
      "scene": "学习「CQRS（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "CQRS（技术术语）（CQRS）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「CQRS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CQRS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「CQRS（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "PK4V9OWNVi8StdA2N13X2": {
      "scene": "学习「缓存-Aside」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "缓存-Aside（Cache-Aside）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "route": [
        {
          "label": "能否缓存",
          "title": "判断数据是否读多写少、能否接受短暂不一致。",
          "text": "判断数据是否读多写少、能否接受短暂不一致。"
        },
        {
          "label": "key/TTL",
          "title": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
          "text": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。"
        },
        {
          "label": "cache-aside",
          "title": "实现 cache-aside：先查 Redis，miss 再查 DB 并…",
          "text": "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。"
        },
        {
          "label": "命中率",
          "title": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。",
          "text": "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        }
      ],
      "confusion": "容易混淆的是：会说「缓存-Aside」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "PtJ7-v1VCLsyaWWYHYujV": {
      "scene": "学习「设计与Implementation（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "设计与Implementation（技术术语）（Design & Implementation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「设计与Implementation（技术术语）」出现在哪：上游输入是什…",
          "text": "「设计与Implementation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「设计与Implementation（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "VIbXf7Jh9PbQ9L-g6pHUG": {
      "scene": "学习「Strangler Fig（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Strangler Fig（技术术语）（Strangler Fig）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Strangler Fig（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Strangler Fig（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Strangler Fig（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "izPT8NfJy1JC6h3i7GJYl": {
      "scene": "学习「静态ContentHosting」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "静态ContentHosting（Static Content Hosting）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「静态ContentHosting」出现在哪：上游输入是什么，下游输出是…",
          "text": "「静态ContentHosting」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「静态ContentHosting」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "AAgOGrra5Yz3_eG6tD2Fx": {
      "scene": "学习「Sidecar（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Sidecar（技术术语）（Sidecar）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Sidecar（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Sidecar（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Sidecar（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "WkoFezOXLf1H2XI9AtBtv": {
      "scene": "学习「Pipes（技术术语）与Filters（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Pipes（技术术语）与Filters（技术术语）（Pipes & Filters）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Pipes（技术术语）与Filters（技术术语）」出现在哪：上游输入…",
          "text": "「Pipes（技术术语）与Filters（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Pipes（技术术语）与Filters（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "beWKUIB6Za27yhxQwEYe3": {
      "scene": "学习「主节点Election」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "主节点Election（Leader Election）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「主节点Election」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「主节点Election」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「主节点Election」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "LXH_mDlILqcyIKtMYTWqy": {
      "scene": "学习「网关路由」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "网关路由（Gateway Routing）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「网关路由」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「网关路由」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「网关路由」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "0SOWAA8hrLM-WsG5k66fd": {
      "scene": "学习「网关Offloading」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "网关Offloading（Gateway Offloading）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「网关Offloading」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「网关Offloading」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「网关Offloading」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "bANGLm_5zR9mqMd6Oox8s": {
      "scene": "学习「网关Aggregation」：文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "core": "网关Aggregation（Gateway Aggregation）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "route": [
        {
          "label": "定文档边界",
          "title": "「网关Aggregation」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「网关Aggregation」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "按查询建索引",
          "title": "先明确一次请求通常读写哪些字段。",
          "text": "先明确一次请求通常读写哪些字段。"
        },
        {
          "label": "做聚合/复制",
          "title": "再决定嵌入还是引用，避免一次查询跨太多集合。",
          "text": "再决定嵌入还是引用，避免一次查询跨太多集合。"
        },
        {
          "label": "验证读写路径",
          "title": "索引、聚合、复制和分片决定它能否支撑真实流量。",
          "text": "索引、聚合、复制和分片决定它能否支撑真实流量。"
        }
      ],
      "confusion": "容易混淆的是：会说「网关Aggregation」不等于会用。重点看 定文档边界 → 按查询建索引 → 做聚合/复制 → 验证读写路径 这条链路。",
      "experiment": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
    },
    "BrgXwf7g2F-6Rqfjryvpj": {
      "scene": "学习「External配置Store」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "External配置Store（External Config Store）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「External配置Store」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「External配置Store」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「External配置Store」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "ODjVoXnvJasPvCS2A5iMO": {
      "scene": "学习「计算资源Consolidation」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "计算资源Consolidation（Compute Resource Consolidation）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「计算资源Consolidation」出现在哪：上游输入是什么，下游输出…",
          "text": "「计算资源Consolidation」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「计算资源Consolidation」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "ivr3mh0OES5n86FI1PN4N": {
      "scene": "学习「CQRS（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "CQRS（技术术语）（CQRS）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「CQRS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CQRS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「CQRS（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "n4It-lr7FFtSY83DcGydX": {
      "scene": "学习「Backends for Frontend（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Backends for Frontend（技术术语）（Backends for Frontend）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Backends for Frontend（技术术语）」出现在哪：上游…",
          "text": "「Backends for Frontend（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Backends for Frontend（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "4hi7LvjLcv8eR6m-uk8XQ": {
      "scene": "学习「Anti-Corruption Layer（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Anti-Corruption Layer（技术术语）（Anti-Corruption Layer）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Anti-Corruption Layer（技术术语）」出现在哪：上游…",
          "text": "「Anti-Corruption Layer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Anti-Corruption Layer（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "Hja4YF3JcgM6CPwB1mxmo": {
      "scene": "学习「Ambassador（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Ambassador（技术术语）（Ambassador）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Ambassador（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Ambassador（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Ambassador（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "DYkdM_L7T2GcTPAoZNnUR": {
      "scene": "学习「Reliability模式」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Reliability模式（Reliability Patterns）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Reliability模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Reliability模式」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Reliability模式」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "Xzkvf4naveszLGV9b-8ih": {
      "scene": "学习「可用性」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "可用性（Availability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「可用性」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「可用性」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「可用性」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "FPPJw-I1cw8OxKwmDh0dT": {
      "scene": "学习「部署Stamps」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "部署Stamps（Deployment Stamps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「部署Stamps」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「部署Stamps」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "看 Pod/Service",
          "title": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deploy…",
          "text": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。"
        },
        {
          "label": "暴露与配置",
          "title": "再看配置、密钥、存储、网络和权限如何注入。",
          "text": "再看配置、密钥、存储、网络和权限如何注入。"
        },
        {
          "label": "events 排障",
          "title": "排障时围绕 describe、logs、events、状态字段逐层定位。",
          "text": "排障时围绕 describe、logs、events、状态字段逐层定位。"
        }
      ],
      "confusion": "容易混淆的是：会说「部署Stamps」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "Ml9lPDGjRAJTHkBnX51Un": {
      "scene": "学习「Geodes（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Geodes（技术术语）（Geodes）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Geodes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Geodes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Geodes（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "cNJQoMNZmxNygWAJIA8HI": {
      "scene": "学习「Health端点监控」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Health端点监控（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「Health端点监控」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "-M3Zd8w79sKBAY6_aJRE8": {
      "scene": "学习「队列-基于负载Leveling」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "队列-基于负载Leveling（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「队列-基于负载Leveling」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "6YVkguDOtwveyeP4Z1NL3": {
      "scene": "学习「Throttling（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Throttling（技术术语）（Throttling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Throttling（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Throttling（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Throttling（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "wPe7Xlwqws7tEpTAVvYjr": {
      "scene": "学习「High可用性」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "High可用性（High Availability）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「High可用性」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「High可用性」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「High可用性」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "Ze471tPbAwlwZyU4oIzH9": {
      "scene": "学习「部署Stamps」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "部署Stamps（Deployment Stamps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「部署Stamps」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「部署Stamps」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "看 Pod/Service",
          "title": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deploy…",
          "text": "先识别资源对象：Pod 跑容器，Service 做稳定访问，Deployment 管副本和发布。"
        },
        {
          "label": "暴露与配置",
          "title": "再看配置、密钥、存储、网络和权限如何注入。",
          "text": "再看配置、密钥、存储、网络和权限如何注入。"
        },
        {
          "label": "events 排障",
          "title": "排障时围绕 describe、logs、events、状态字段逐层定位。",
          "text": "排障时围绕 describe、logs、events、状态字段逐层定位。"
        }
      ],
      "confusion": "容易混淆的是：会说「部署Stamps」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "6hOSEZJZ7yezVN67h5gmS": {
      "scene": "学习「Geodes（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Geodes（技术术语）（Geodes）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Geodes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Geodes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Geodes（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "uK5o7NgDvr2pV0ulF0Fh9": {
      "scene": "学习「Health端点监控」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Health端点监控（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「Health端点监控」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "IR2_kgs2U9rnAJiDBmpqK": {
      "scene": "学习「Bulkhead（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Bulkhead（技术术语）（Bulkhead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Bulkhead（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Bulkhead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Bulkhead（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "D1OmCoqvd3-_af3u0ciHr": {
      "scene": "学习「Circuit Breaker（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Circuit Breaker（技术术语）（Circuit Breaker）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Circuit Breaker（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Circuit Breaker（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「Circuit Breaker（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "wlAWMjxZF6yav3ZXOScxH": {
      "scene": "学习「Resiliency（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Resiliency（技术术语）（Resiliency）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Resiliency（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Resiliency（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Resiliency（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "PLn9TF9GYnPcbpTdDMQbG": {
      "scene": "学习「Bulkhead（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Bulkhead（技术术语）（Bulkhead）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Bulkhead（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Bulkhead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Bulkhead（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "O4zYDqvVWD7sMI27k_0Nl": {
      "scene": "学习「Circuit Breaker（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Circuit Breaker（技术术语）（Circuit Breaker）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Circuit Breaker（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Circuit Breaker（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "构建测试",
          "title": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。",
          "text": "先看它处在流水线的哪个阶段：构建、测试、部署、配置、监控还是告警。"
        },
        {
          "label": "部署发布",
          "title": "再明确触发条件、输入产物、输出产物和失败处理。",
          "text": "再明确触发条件、输入产物、输出产物和失败处理。"
        },
        {
          "label": "监控回滚",
          "title": "成熟流程应该能重复执行、能审计、能回滚。",
          "text": "成熟流程应该能重复执行、能审计、能回滚。"
        }
      ],
      "confusion": "容易混淆的是：会说「Circuit Breaker（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "MNlWNjrG8eh5OzPVlbb9t": {
      "scene": "学习「Compensating事务」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Compensating事务（Compensating Transaction）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Compensating事务」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Compensating事务」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "写查询/变更",
          "title": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。",
          "text": "先区分它是在定义结构、查询数据、修改数据，还是控制事务。"
        },
        {
          "label": "看执行计划",
          "title": "查询时关注输入表、过滤条件、连接方式和最终结果集。",
          "text": "查询时关注输入表、过滤条件、连接方式和最终结果集。"
        },
        {
          "label": "验证结果",
          "title": "性能问题通常要看索引、执行计划和返回数据量。",
          "text": "性能问题通常要看索引、执行计划和返回数据量。"
        }
      ],
      "confusion": "容易混淆的是：会说「Compensating事务」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "CKCNk3obx4u43rBqUj2Yf": {
      "scene": "学习「Health端点监控」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Health端点监控（Health Endpoint Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「Health端点监控」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「Health端点监控」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "AJLBFyAsEdQYF6ygO0MmQ": {
      "scene": "学习「主节点Election」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "主节点Election（Leader Election）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「主节点Election」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「主节点Election」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「主节点Election」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "NybkOwl1lgaglZPRJQJ_Z": {
      "scene": "学习「队列-基于负载Leveling」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "队列-基于负载Leveling（Queue-Based Load Leveling）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「队列-基于负载Leveling」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「队列-基于负载Leveling」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "xX_9VGUaOkBYFH3jPjnww": {
      "scene": "学习「Retry（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Retry（技术术语）（Retry）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Retry（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Retry（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Retry（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "RTEJHZ26znfBLrpQPtNvn": {
      "scene": "学习「调度AgentSupervisor」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "调度AgentSupervisor（Scheduler Agent Supervisor）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「调度AgentSupervisor」出现在哪：上游输入是什么，下游输出…",
          "text": "「调度AgentSupervisor」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「调度AgentSupervisor」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "ZvYpE6-N5dAtRDIwqcAu6": {
      "scene": "学习「安全」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "安全（Security）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「安全」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「安全」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「安全」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "lHPl-kr1ArblR7bJeQEB9": {
      "scene": "学习「Federated Identity（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Federated Identity（技术术语）（Federated Identity）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Federated Identity（技术术语）」对应的资源、HT…",
          "text": "明确「Federated Identity（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
        },
        {
          "label": "请求/响应",
          "title": "定义请求参数、响应 JSON 结构和错误码格式。",
          "text": "定义请求参数、响应 JSON 结构和错误码格式。"
        },
        {
          "label": "实现 handler",
          "title": "实现 handler：校验输入 → 调业务 → 返回统一响应。",
          "text": "实现 handler：校验输入 → 调业务 → 返回统一响应。"
        },
        {
          "label": "curl 验证",
          "title": "用 curl/Postman 测 200/4xx/5xx，并写进 API…",
          "text": "用 curl/Postman 测 200/4xx/5xx，并写进 API 文档。"
        }
      ],
      "confusion": "容易混淆的是：会说「Federated Identity（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "DTQJu0AvgWOhMFcOYqzTD": {
      "scene": "学习「Gatekeeper（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Gatekeeper（技术术语）（Gatekeeper）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Gatekeeper（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Gatekeeper（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Gatekeeper（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    },
    "VltZgIrApHOwZ8YHvdmHB": {
      "scene": "学习「Valet Key（技术术语）」：系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "core": "Valet Key（技术术语）（Valet Key）。它解决的是“系统流量变大、依赖失败、数据增长时如何继续稳定服务”的问题。 系统设计关注权衡：一致性、可用性、成本、复杂度和团队维护能力不可能同时拉满。",
      "route": [
        {
          "label": "画请求链路",
          "title": "「Valet Key（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Valet Key（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "找瓶颈单点",
          "title": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。",
          "text": "先画请求链路，找到入口、存储、缓存、队列和外部依赖。"
        },
        {
          "label": "设计扩展",
          "title": "再判断瓶颈、单点、数据一致性和扩展方式。",
          "text": "再判断瓶颈、单点、数据一致性和扩展方式。"
        },
        {
          "label": "演练故障",
          "title": "最后用指标和故障演练验证设计是否成立。",
          "text": "最后用指标和故障演练验证设计是否成立。"
        }
      ],
      "confusion": "容易混淆的是：会说「Valet Key（技术术语）」不等于会用。重点看 画请求链路 → 找瓶颈单点 → 设计扩展 → 演练故障 这条链路。",
      "experiment": "选一个登录/下单/评论场景，画出流量路径，标出缓存、数据库、队列、限流和降级点。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
