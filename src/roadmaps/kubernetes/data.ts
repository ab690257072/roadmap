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
          "id": "qLeEEwBvlGt1fP5Qcreah",
          "label": "Overview of Kubernetes",
          "zh": "概览ofKubernetes",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 42,
          "y": 50,
          "w": 297,
          "h": 49
        },
        {
          "id": "q-Ky0ietZGpyUcBQfh-BJ",
          "label": "Why use Kubernetes?",
          "zh": "为什么需要Kubernetes?（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 42,
          "y": 103,
          "w": 297,
          "h": 49
        },
        {
          "id": "y7KjVfSI6CAduyHd4mBFT",
          "label": "Introduction",
          "zh": "入门介绍",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -315,
          "y": 119,
          "w": 241,
          "h": 49
        },
        {
          "id": "9oo2fxTM2_p0VYPBroqxa",
          "label": "Key Concepts and Terminologies",
          "zh": "键概念与Terminologies（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 42,
          "y": 156,
          "w": 297,
          "h": 49
        },
        {
          "id": "HGmeYvRf7_XusZl_K4x9k",
          "label": "Containers",
          "zh": "容器",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -315,
          "y": 172,
          "w": 241,
          "h": 49
        },
        {
          "id": "zrbSJa3k7a3TE0aYbWi9c",
          "label": "Deploying your First Application",
          "zh": "Deploying your First Application（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 174,
          "w": 331,
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
      "zh": "阶段 02：搭建Kubernetes（技术术语）",
      "en": "Setting up Kubernetes",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "3fzuXKH7az_LVnmnoXB1p",
          "label": "Kubernetes Alternatives",
          "zh": "Kubernetes Alternatives（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 42,
          "y": 209,
          "w": 297,
          "h": 49
        },
        {
          "id": "3OpGaQhyNtk1n1MLp-tlb",
          "label": "Setting up Kubernetes",
          "zh": "搭建Kubernetes（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -315,
          "y": 225,
          "w": 241,
          "h": 49
        },
        {
          "id": "qSatCdBTDXPu-IFWzUI99",
          "label": "Choosing a Managed Provider",
          "zh": "ChoosingaManaged云厂商",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 227,
          "w": 331,
          "h": 49
        },
        {
          "id": "YaIs8lquWIe1D7RCUBZmC",
          "label": "Installing a Local Cluster",
          "zh": "安装a本地集群",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 280,
          "w": 331,
          "h": 49
        },
        {
          "id": "-d2PIXm0V_Iehe8cws8zK",
          "label": "Pods",
          "zh": "Pods（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 41,
          "y": 333,
          "w": 148,
          "h": 49
        },
        {
          "id": "IF09l0-pryGpMbDt__ocr",
          "label": "ReplicaSets",
          "zh": "ReplicaSets（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 192,
          "y": 333,
          "w": 146,
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
      "zh": "阶段 03：运行Applications",
      "en": "Running Applications",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "1MdrzhktCWjpmxiYYBdz7",
          "label": "Running Applications",
          "zh": "运行Applications",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -315,
          "y": 385,
          "w": 241,
          "h": 49
        },
        {
          "id": "TUGQX7y1gs-aKPge2F1NU",
          "label": "Deployments",
          "zh": "Deployments（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 41,
          "y": 386,
          "w": 148,
          "h": 49
        },
        {
          "id": "AJiRBEaKU8qYEm0fqN389",
          "label": "StatefulSets",
          "zh": "StatefulSets（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 192,
          "y": 386,
          "w": 146,
          "h": 49
        },
        {
          "id": "u24UlZKI86vaguj_VpMv1",
          "label": "Injecting Pod Config with ConfigMaps",
          "zh": "InjectingPod配置withConfigMaps",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 392,
          "w": 331,
          "h": 49
        },
        {
          "id": "r3fzAN5DzratAKnnT8hzb",
          "label": "Jobs",
          "zh": "Jobs（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 41,
          "y": 440,
          "w": 297,
          "h": 49
        },
        {
          "id": "S0CwGC2gMG-SqnLNldqBD",
          "label": "Using Secrets for Sensitive Data",
          "zh": "使用SecretsforSensitive数据",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 445,
          "w": 331,
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
      "zh": "阶段 04：Configuration管理",
      "en": "Configuration Management",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "dj7Tb2XTX4kxRUYiTjlhM",
          "label": "Configuration Management",
          "zh": "Configuration管理",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -710,
          "y": 536,
          "w": 261,
          "h": 49
        },
        {
          "id": "aUJ_w2L8nxNq3DfAW97Gd",
          "label": "Services and Networking",
          "zh": "Services（技术术语）与Networking（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -315,
          "y": 536,
          "w": 241,
          "h": 49
        },
        {
          "id": "jOq0WwLrq8tlmOgo64QDc",
          "label": "Role Based Access Control (RBAC)",
          "zh": "Role基于Access控制(RBAC)",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 41,
          "y": 565,
          "w": 320,
          "h": 49
        },
        {
          "id": "s0gHg8CqwrSylpSPu8arA",
          "label": "Network Security",
          "zh": "网络安全",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 41,
          "y": 618,
          "w": 320,
          "h": 49
        },
        {
          "id": "jUOlITLqnIvSu97I_3nBz",
          "label": "External Access to Services",
          "zh": "External Access to Services（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -377,
          "y": 620,
          "w": 364,
          "h": 49
        },
        {
          "id": "Nja7IFWcFTLsPcqbvRNm9",
          "label": "Container and Pod Security",
          "zh": "容器与Pod安全",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 41,
          "y": 671,
          "w": 320,
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
      "zh": "阶段 05：资源管理",
      "en": "Resource Management",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "Qelo1YvAcUoX5PA-RYbNp",
          "label": "Load Balancing",
          "zh": "负载Balancing",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -377,
          "y": 673,
          "w": 364,
          "h": 49
        },
        {
          "id": "i7qxaFhFHPfe3fGEgsbcE",
          "label": "Container and Pod Security",
          "zh": "容器与Pod安全",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 41,
          "y": 724,
          "w": 320,
          "h": 49
        },
        {
          "id": "44rhdieUCWsGFC_1__9kk",
          "label": "Networking & Pod-to-Pod Communication",
          "zh": "Networking（技术术语）与Pod-to-PodCommunication（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -377,
          "y": 726,
          "w": 364,
          "h": 49
        },
        {
          "id": "eWKkdiBhD5x2sGYajmHEs",
          "label": "Resource Management",
          "zh": "资源管理",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -710,
          "y": 826,
          "w": 261,
          "h": 49
        },
        {
          "id": "SG3wtV2rt9nmLEkgrp_zP",
          "label": "Security",
          "zh": "安全",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 82,
          "y": 826,
          "w": 238,
          "h": 49
        },
        {
          "id": "8RLR6gRjIyTn6GCugEfgk",
          "label": "Setting Resource Requests and Limits",
          "zh": "设置资源Requests与Limits（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 924,
          "w": 365,
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
      "zh": "阶段 06：监控与日志",
      "en": "Monitoring and Logging",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "-XxQtiLDAkXs7IFM_Ddw6",
          "label": "Logs",
          "zh": "Logs（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -299,
          "y": 924,
          "w": 90,
          "h": 49
        },
        {
          "id": "nqUBHBFUYFdYqCKZvfXBR",
          "label": "Metrics",
          "zh": "指标",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -205,
          "y": 924,
          "w": 90,
          "h": 49
        },
        {
          "id": "ldYTEPt_hI4PXxr3tgJi5",
          "label": "Traces",
          "zh": "Traces（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -111,
          "y": 924,
          "w": 90,
          "h": 49
        },
        {
          "id": "OHz4QMmA3lqL_C7aWL8Ga",
          "label": "Assigning Quotas to Namespaces",
          "zh": "Assigning Quotas to Namespaces（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 977,
          "w": 365,
          "h": 49
        },
        {
          "id": "pDjNsK5vI9FmKZbQm0lDP",
          "label": "Resource Health",
          "zh": "资源Health",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -299,
          "y": 977,
          "w": 280,
          "h": 49
        },
        {
          "id": "AgsQnQjyTLUFhFpRdcE13",
          "label": "Monitoring and Logging",
          "zh": "监控与日志",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 82,
          "y": 977,
          "w": 238,
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
      "zh": "阶段 07：存储与Volumes（技术术语）",
      "en": "Storage and Volumes",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "FANswgUhUb5Iuah2fni3L",
          "label": "Observability Engines",
          "zh": "Observability Engines（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -299,
          "y": 1030,
          "w": 280,
          "h": 49
        },
        {
          "id": "PP4ld_vvjpY3QltBBsXKD",
          "label": "Monitoring & Optimizing Resource Usage",
          "zh": "监控与Optimizing资源Usage",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1031,
          "w": 365,
          "h": 49
        },
        {
          "id": "URnYf9jMprFz-o26fbU2P",
          "label": "Storage and Volumes",
          "zh": "存储与Volumes（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -627,
          "y": 1132,
          "w": 247,
          "h": 49
        },
        {
          "id": "xZDXM_8qb4VL15tNGG0ws",
          "label": "Scheduling",
          "zh": "Scheduling（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -225,
          "y": 1132,
          "w": 156,
          "h": 49
        },
        {
          "id": "03mGA5AyL7mpF6y3EMW7A",
          "label": "Autoscaling",
          "zh": "Autoscaling（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 82,
          "y": 1132,
          "w": 238,
          "h": 49
        },
        {
          "id": "55RV9psPCmcg8G_P_zQo9",
          "label": "CSI Drivers",
          "zh": "CSI Drivers（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1218,
          "w": 264,
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
      "zh": "阶段 08：Horizontal Pod Autoscaler (HPA)（技术术语）",
      "en": "Horizontal Pod Autoscaler (HPA)",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "044IUUCgZP4oQ9UxUG2iy",
          "label": "Horizontal Pod Autoscaler (HPA)",
          "zh": "Horizontal Pod Autoscaler (HPA)（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 52,
          "y": 1223,
          "w": 297,
          "h": 49
        },
        {
          "id": "70lTSIVh0AD6M8fMMuWzY",
          "label": "Basics",
          "zh": "基础",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -284,
          "y": 1224,
          "w": 275,
          "h": 49
        },
        {
          "id": "LJUJ1NIUsajb1AUdvJjqW",
          "label": "Stateful Applications",
          "zh": "Stateful Applications（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1271,
          "w": 264,
          "h": 49
        },
        {
          "id": "c1KVczGRjh9bhMpbPP6sA",
          "label": "Vertical Pod Autoscaler (VPA)",
          "zh": "Vertical Pod Autoscaler (VPA)（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 52,
          "y": 1276,
          "w": 297,
          "h": 49
        },
        {
          "id": "zXUsHAI1HFhcY2BFAcypv",
          "label": "Taints and Tolerations",
          "zh": "Taints（技术术语）与Tolerations（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -284,
          "y": 1277,
          "w": 275,
          "h": 49
        },
        {
          "id": "RC5MoYtG2rom-d4FW5qD2",
          "label": "Cluster Autoscaling",
          "zh": "集群Autoscaling",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 52,
          "y": 1329,
          "w": 297,
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
      "zh": "阶段 09：部署模式",
      "en": "Deployment Patterns",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "CL0hKTcml40InmyVUXpY2",
          "label": "Topology Spread Constraints",
          "zh": "TopologySpread约束",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -284,
          "y": 1330,
          "w": 275,
          "h": 49
        },
        {
          "id": "0l0xpsabglvs_t6oAP-XG",
          "label": "Deployment Patterns",
          "zh": "部署模式",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -627,
          "y": 1383,
          "w": 247,
          "h": 49
        },
        {
          "id": "_Gva1eGcYqpmZNPyV03lt",
          "label": "Pod Priorities",
          "zh": "Pod Priorities（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -284,
          "y": 1383,
          "w": 150,
          "h": 49
        },
        {
          "id": "TRKzlDW2PQN9bWTyz3NWL",
          "label": "Evictions",
          "zh": "Evictions（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -128,
          "y": 1383,
          "w": 120,
          "h": 49
        },
        {
          "id": "ZrVhYTw63aVVIFAEJDG5r",
          "label": "Should you manage your own Cluster?",
          "zh": "Shouldyoumanageyourown集群",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -16,
          "y": 1470,
          "w": 336,
          "h": 49
        },
        {
          "id": "L9rVPEEXFwisQOwT_LQ4v",
          "label": "Creating Custom Controllers",
          "zh": "创建CustomControllers",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -364,
          "y": 1471,
          "w": 336,
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
      "zh": "阶段 10：CI/CD集成",
      "en": "CI / CD Integration",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "Pymc9H-lRHVPy7M9eSaPD",
          "label": "CI / CD Integration",
          "zh": "CI/CD集成",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1473,
          "w": 264,
          "h": 49
        },
        {
          "id": "M-iTb_7EWZIJ3JpdViICx",
          "label": "Installing the Control Plane",
          "zh": "安装the控制Plane",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -16,
          "y": 1523,
          "w": 336,
          "h": 49
        },
        {
          "id": "1-Nb8rCMJEZrYm20sEcRJ",
          "label": "Custom Schedulers and Extenders",
          "zh": "CustomSchedulers（技术术语）与Extenders（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -364,
          "y": 1524,
          "w": 336,
          "h": 49
        },
        {
          "id": "dATdEyNWlpDNKjedCXLyb",
          "label": "GitOps",
          "zh": "GitOps（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1526,
          "w": 264,
          "h": 49
        },
        {
          "id": "2cQKTxln3dIk5IjX2UZdM",
          "label": "Adding and Managing Worker Nodes",
          "zh": "Adding（技术术语）与管理WorkerNodes",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -16,
          "y": 1576,
          "w": 336,
          "h": 49
        },
        {
          "id": "9P7l-RBOkUxs3Z_UpKQO-",
          "label": "Custom Resource Definitions (CRDs)",
          "zh": "Custom资源Definitions(CRDs)",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -364,
          "y": 1577,
          "w": 336,
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
      "zh": "阶段 11：Helm Charts（技术术语）",
      "en": "Helm Charts",
      "desc": "按 roadmap.sh 原始顺序整理的第 11 组学习节点。",
      "nodes": [
        {
          "id": "FAEFOhLdp7xrmctHFxiOM",
          "label": "Helm Charts",
          "zh": "Helm Charts（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1579,
          "w": 264,
          "h": 49
        },
        {
          "id": "auZgEQ6FC3nUjuyx0zANh",
          "label": "Multi-Cluster Management",
          "zh": "Multi-集群管理",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -17,
          "y": 1629,
          "w": 336,
          "h": 49
        },
        {
          "id": "UeJcKv3jhenjNzHM-0R86",
          "label": "Kubernetes Extensions and APIs",
          "zh": "KubernetesExtensions（技术术语）与APIs（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -364,
          "y": 1631,
          "w": 336,
          "h": 49
        },
        {
          "id": "88IGeC3dAopHLGtLozxdY",
          "label": "Canary Deployments",
          "zh": "Canary Deployments（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1632,
          "w": 264,
          "h": 49
        },
        {
          "id": "9-oaTlzKmcxTfaRycz1w3",
          "label": "Blue-Green Deployments",
          "zh": "Blue-Green Deployments（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1685,
          "w": 264,
          "h": 49
        },
        {
          "id": "yMSXdwDO36CLtp2TBC7aB",
          "label": "Rolling Updates / Rollbacks",
          "zh": "Rolling Updates / Rollbacks（技术术语）",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -745,
          "y": 1738,
          "w": 264,
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
      "zh": "阶段 12：进阶Topics",
      "en": "Advanced Topics",
      "desc": "按 roadmap.sh 原始顺序整理的第 12 组学习节点。",
      "nodes": [
        {
          "id": "t8SJbGVXsUDECxePLDk_w",
          "label": "Advanced Topics",
          "zh": "进阶Topics",
          "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -289,
          "y": 1785,
          "w": 185,
          "h": 49
        }
      ],
      "index": 12,
      "mapX": 1650,
      "mapY": 802,
      "mapW": 430,
      "mapH": 156
    }
  ],
  "nodes": [
    {
      "id": "y7KjVfSI6CAduyHd4mBFT",
      "label": "Introduction",
      "zh": "入门介绍",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -315,
      "y": 119,
      "w": 241,
      "h": 49
    },
    {
      "id": "qLeEEwBvlGt1fP5Qcreah",
      "label": "Overview of Kubernetes",
      "zh": "概览ofKubernetes",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 42,
      "y": 50,
      "w": 297,
      "h": 49
    },
    {
      "id": "q-Ky0ietZGpyUcBQfh-BJ",
      "label": "Why use Kubernetes?",
      "zh": "为什么需要Kubernetes?（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 42,
      "y": 103,
      "w": 297,
      "h": 49
    },
    {
      "id": "9oo2fxTM2_p0VYPBroqxa",
      "label": "Key Concepts and Terminologies",
      "zh": "键概念与Terminologies（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 42,
      "y": 156,
      "w": 297,
      "h": 49
    },
    {
      "id": "3fzuXKH7az_LVnmnoXB1p",
      "label": "Kubernetes Alternatives",
      "zh": "Kubernetes Alternatives（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 42,
      "y": 209,
      "w": 297,
      "h": 49
    },
    {
      "id": "HGmeYvRf7_XusZl_K4x9k",
      "label": "Containers",
      "zh": "容器",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -315,
      "y": 172,
      "w": 241,
      "h": 49
    },
    {
      "id": "3OpGaQhyNtk1n1MLp-tlb",
      "label": "Setting up Kubernetes",
      "zh": "搭建Kubernetes（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -315,
      "y": 225,
      "w": 241,
      "h": 49
    },
    {
      "id": "zrbSJa3k7a3TE0aYbWi9c",
      "label": "Deploying your First Application",
      "zh": "Deploying your First Application（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 174,
      "w": 331,
      "h": 49
    },
    {
      "id": "qSatCdBTDXPu-IFWzUI99",
      "label": "Choosing a Managed Provider",
      "zh": "ChoosingaManaged云厂商",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 227,
      "w": 331,
      "h": 49
    },
    {
      "id": "YaIs8lquWIe1D7RCUBZmC",
      "label": "Installing a Local Cluster",
      "zh": "安装a本地集群",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 280,
      "w": 331,
      "h": 49
    },
    {
      "id": "1MdrzhktCWjpmxiYYBdz7",
      "label": "Running Applications",
      "zh": "运行Applications",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -315,
      "y": 385,
      "w": 241,
      "h": 49
    },
    {
      "id": "-d2PIXm0V_Iehe8cws8zK",
      "label": "Pods",
      "zh": "Pods（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 41,
      "y": 333,
      "w": 148,
      "h": 49
    },
    {
      "id": "IF09l0-pryGpMbDt__ocr",
      "label": "ReplicaSets",
      "zh": "ReplicaSets（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 192,
      "y": 333,
      "w": 146,
      "h": 49
    },
    {
      "id": "TUGQX7y1gs-aKPge2F1NU",
      "label": "Deployments",
      "zh": "Deployments（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 41,
      "y": 386,
      "w": 148,
      "h": 49
    },
    {
      "id": "AJiRBEaKU8qYEm0fqN389",
      "label": "StatefulSets",
      "zh": "StatefulSets（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 192,
      "y": 386,
      "w": 146,
      "h": 49
    },
    {
      "id": "r3fzAN5DzratAKnnT8hzb",
      "label": "Jobs",
      "zh": "Jobs（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 41,
      "y": 440,
      "w": 297,
      "h": 49
    },
    {
      "id": "aUJ_w2L8nxNq3DfAW97Gd",
      "label": "Services and Networking",
      "zh": "Services（技术术语）与Networking（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -315,
      "y": 536,
      "w": 241,
      "h": 49
    },
    {
      "id": "jUOlITLqnIvSu97I_3nBz",
      "label": "External Access to Services",
      "zh": "External Access to Services（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -377,
      "y": 620,
      "w": 364,
      "h": 49
    },
    {
      "id": "Qelo1YvAcUoX5PA-RYbNp",
      "label": "Load Balancing",
      "zh": "负载Balancing",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -377,
      "y": 673,
      "w": 364,
      "h": 49
    },
    {
      "id": "44rhdieUCWsGFC_1__9kk",
      "label": "Networking & Pod-to-Pod Communication",
      "zh": "Networking（技术术语）与Pod-to-PodCommunication（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -377,
      "y": 726,
      "w": 364,
      "h": 49
    },
    {
      "id": "dj7Tb2XTX4kxRUYiTjlhM",
      "label": "Configuration Management",
      "zh": "Configuration管理",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -710,
      "y": 536,
      "w": 261,
      "h": 49
    },
    {
      "id": "u24UlZKI86vaguj_VpMv1",
      "label": "Injecting Pod Config with ConfigMaps",
      "zh": "InjectingPod配置withConfigMaps",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 392,
      "w": 331,
      "h": 49
    },
    {
      "id": "S0CwGC2gMG-SqnLNldqBD",
      "label": "Using Secrets for Sensitive Data",
      "zh": "使用SecretsforSensitive数据",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 445,
      "w": 331,
      "h": 49
    },
    {
      "id": "eWKkdiBhD5x2sGYajmHEs",
      "label": "Resource Management",
      "zh": "资源管理",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -710,
      "y": 826,
      "w": 261,
      "h": 49
    },
    {
      "id": "8RLR6gRjIyTn6GCugEfgk",
      "label": "Setting Resource Requests and Limits",
      "zh": "设置资源Requests与Limits（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 924,
      "w": 365,
      "h": 49
    },
    {
      "id": "OHz4QMmA3lqL_C7aWL8Ga",
      "label": "Assigning Quotas to Namespaces",
      "zh": "Assigning Quotas to Namespaces（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 977,
      "w": 365,
      "h": 49
    },
    {
      "id": "PP4ld_vvjpY3QltBBsXKD",
      "label": "Monitoring & Optimizing Resource Usage",
      "zh": "监控与Optimizing资源Usage",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1031,
      "w": 365,
      "h": 49
    },
    {
      "id": "SG3wtV2rt9nmLEkgrp_zP",
      "label": "Security",
      "zh": "安全",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 82,
      "y": 826,
      "w": 238,
      "h": 49
    },
    {
      "id": "jOq0WwLrq8tlmOgo64QDc",
      "label": "Role Based Access Control (RBAC)",
      "zh": "Role基于Access控制(RBAC)",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 41,
      "y": 565,
      "w": 320,
      "h": 49
    },
    {
      "id": "s0gHg8CqwrSylpSPu8arA",
      "label": "Network Security",
      "zh": "网络安全",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 41,
      "y": 618,
      "w": 320,
      "h": 49
    },
    {
      "id": "Nja7IFWcFTLsPcqbvRNm9",
      "label": "Container and Pod Security",
      "zh": "容器与Pod安全",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 41,
      "y": 671,
      "w": 320,
      "h": 49
    },
    {
      "id": "i7qxaFhFHPfe3fGEgsbcE",
      "label": "Container and Pod Security",
      "zh": "容器与Pod安全",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 41,
      "y": 724,
      "w": 320,
      "h": 49
    },
    {
      "id": "AgsQnQjyTLUFhFpRdcE13",
      "label": "Monitoring and Logging",
      "zh": "监控与日志",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 82,
      "y": 977,
      "w": 238,
      "h": 49
    },
    {
      "id": "-XxQtiLDAkXs7IFM_Ddw6",
      "label": "Logs",
      "zh": "Logs（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -299,
      "y": 924,
      "w": 90,
      "h": 49
    },
    {
      "id": "nqUBHBFUYFdYqCKZvfXBR",
      "label": "Metrics",
      "zh": "指标",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -205,
      "y": 924,
      "w": 90,
      "h": 49
    },
    {
      "id": "ldYTEPt_hI4PXxr3tgJi5",
      "label": "Traces",
      "zh": "Traces（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -111,
      "y": 924,
      "w": 90,
      "h": 49
    },
    {
      "id": "pDjNsK5vI9FmKZbQm0lDP",
      "label": "Resource Health",
      "zh": "资源Health",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -299,
      "y": 977,
      "w": 280,
      "h": 49
    },
    {
      "id": "FANswgUhUb5Iuah2fni3L",
      "label": "Observability Engines",
      "zh": "Observability Engines（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -299,
      "y": 1030,
      "w": 280,
      "h": 49
    },
    {
      "id": "03mGA5AyL7mpF6y3EMW7A",
      "label": "Autoscaling",
      "zh": "Autoscaling（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 82,
      "y": 1132,
      "w": 238,
      "h": 49
    },
    {
      "id": "044IUUCgZP4oQ9UxUG2iy",
      "label": "Horizontal Pod Autoscaler (HPA)",
      "zh": "Horizontal Pod Autoscaler (HPA)（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 52,
      "y": 1223,
      "w": 297,
      "h": 49
    },
    {
      "id": "c1KVczGRjh9bhMpbPP6sA",
      "label": "Vertical Pod Autoscaler (VPA)",
      "zh": "Vertical Pod Autoscaler (VPA)（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 52,
      "y": 1276,
      "w": 297,
      "h": 49
    },
    {
      "id": "RC5MoYtG2rom-d4FW5qD2",
      "label": "Cluster Autoscaling",
      "zh": "集群Autoscaling",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 52,
      "y": 1329,
      "w": 297,
      "h": 49
    },
    {
      "id": "xZDXM_8qb4VL15tNGG0ws",
      "label": "Scheduling",
      "zh": "Scheduling（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -225,
      "y": 1132,
      "w": 156,
      "h": 49
    },
    {
      "id": "70lTSIVh0AD6M8fMMuWzY",
      "label": "Basics",
      "zh": "基础",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -284,
      "y": 1224,
      "w": 275,
      "h": 49
    },
    {
      "id": "zXUsHAI1HFhcY2BFAcypv",
      "label": "Taints and Tolerations",
      "zh": "Taints（技术术语）与Tolerations（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -284,
      "y": 1277,
      "w": 275,
      "h": 49
    },
    {
      "id": "CL0hKTcml40InmyVUXpY2",
      "label": "Topology Spread Constraints",
      "zh": "TopologySpread约束",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -284,
      "y": 1330,
      "w": 275,
      "h": 49
    },
    {
      "id": "_Gva1eGcYqpmZNPyV03lt",
      "label": "Pod Priorities",
      "zh": "Pod Priorities（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -284,
      "y": 1383,
      "w": 150,
      "h": 49
    },
    {
      "id": "TRKzlDW2PQN9bWTyz3NWL",
      "label": "Evictions",
      "zh": "Evictions（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -128,
      "y": 1383,
      "w": 120,
      "h": 49
    },
    {
      "id": "URnYf9jMprFz-o26fbU2P",
      "label": "Storage and Volumes",
      "zh": "存储与Volumes（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -627,
      "y": 1132,
      "w": 247,
      "h": 49
    },
    {
      "id": "55RV9psPCmcg8G_P_zQo9",
      "label": "CSI Drivers",
      "zh": "CSI Drivers（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1218,
      "w": 264,
      "h": 49
    },
    {
      "id": "LJUJ1NIUsajb1AUdvJjqW",
      "label": "Stateful Applications",
      "zh": "Stateful Applications（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1271,
      "w": 264,
      "h": 49
    },
    {
      "id": "0l0xpsabglvs_t6oAP-XG",
      "label": "Deployment Patterns",
      "zh": "部署模式",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -627,
      "y": 1383,
      "w": 247,
      "h": 49
    },
    {
      "id": "Pymc9H-lRHVPy7M9eSaPD",
      "label": "CI / CD Integration",
      "zh": "CI/CD集成",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1473,
      "w": 264,
      "h": 49
    },
    {
      "id": "dATdEyNWlpDNKjedCXLyb",
      "label": "GitOps",
      "zh": "GitOps（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1526,
      "w": 264,
      "h": 49
    },
    {
      "id": "FAEFOhLdp7xrmctHFxiOM",
      "label": "Helm Charts",
      "zh": "Helm Charts（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1579,
      "w": 264,
      "h": 49
    },
    {
      "id": "88IGeC3dAopHLGtLozxdY",
      "label": "Canary Deployments",
      "zh": "Canary Deployments（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1632,
      "w": 264,
      "h": 49
    },
    {
      "id": "yMSXdwDO36CLtp2TBC7aB",
      "label": "Rolling Updates / Rollbacks",
      "zh": "Rolling Updates / Rollbacks（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1738,
      "w": 264,
      "h": 49
    },
    {
      "id": "t8SJbGVXsUDECxePLDk_w",
      "label": "Advanced Topics",
      "zh": "进阶Topics",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -289,
      "y": 1785,
      "w": 185,
      "h": 49
    },
    {
      "id": "L9rVPEEXFwisQOwT_LQ4v",
      "label": "Creating Custom Controllers",
      "zh": "创建CustomControllers",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -364,
      "y": 1471,
      "w": 336,
      "h": 49
    },
    {
      "id": "1-Nb8rCMJEZrYm20sEcRJ",
      "label": "Custom Schedulers and Extenders",
      "zh": "CustomSchedulers（技术术语）与Extenders（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -364,
      "y": 1524,
      "w": 336,
      "h": 49
    },
    {
      "id": "9P7l-RBOkUxs3Z_UpKQO-",
      "label": "Custom Resource Definitions (CRDs)",
      "zh": "Custom资源Definitions(CRDs)",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -364,
      "y": 1577,
      "w": 336,
      "h": 49
    },
    {
      "id": "UeJcKv3jhenjNzHM-0R86",
      "label": "Kubernetes Extensions and APIs",
      "zh": "KubernetesExtensions（技术术语）与APIs（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -364,
      "y": 1631,
      "w": 336,
      "h": 49
    },
    {
      "id": "ZrVhYTw63aVVIFAEJDG5r",
      "label": "Should you manage your own Cluster?",
      "zh": "Shouldyoumanageyourown集群",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -16,
      "y": 1470,
      "w": 336,
      "h": 49
    },
    {
      "id": "M-iTb_7EWZIJ3JpdViICx",
      "label": "Installing the Control Plane",
      "zh": "安装the控制Plane",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -16,
      "y": 1523,
      "w": 336,
      "h": 49
    },
    {
      "id": "2cQKTxln3dIk5IjX2UZdM",
      "label": "Adding and Managing Worker Nodes",
      "zh": "Adding（技术术语）与管理WorkerNodes",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -16,
      "y": 1576,
      "w": 336,
      "h": 49
    },
    {
      "id": "auZgEQ6FC3nUjuyx0zANh",
      "label": "Multi-Cluster Management",
      "zh": "Multi-集群管理",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -17,
      "y": 1629,
      "w": 336,
      "h": 49
    },
    {
      "id": "9-oaTlzKmcxTfaRycz1w3",
      "label": "Blue-Green Deployments",
      "zh": "Blue-Green Deployments（技术术语）",
      "desc": "Kubernetes 云原生 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -745,
      "y": 1685,
      "w": 264,
      "h": 49
    }
  ],
  "tutorials": {
    "y7KjVfSI6CAduyHd4mBFT": {
      "id": "y7KjVfSI6CAduyHd4mBFT",
      "zh": "入门介绍",
      "en": "Introduction",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「入门介绍」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**入门介绍**（Introduction）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**入门介绍**（Introduction）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "qLeEEwBvlGt1fP5Qcreah": {
      "id": "qLeEEwBvlGt1fP5Qcreah",
      "zh": "概览ofKubernetes",
      "en": "Overview of Kubernetes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「概览ofKubernetes」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**概览ofKubernetes**（Overview of Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「概览ofKubernetes」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**概览ofKubernetes**（Overview of Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "q-Ky0ietZGpyUcBQfh-BJ": {
      "id": "q-Ky0ietZGpyUcBQfh-BJ",
      "zh": "为什么需要Kubernetes?（技术术语）",
      "en": "Why use Kubernetes?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「为什么需要Kubernetes?（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**为什么需要Kubernetes?（技术术语）**（Why use Kubernetes?）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「为什么需要Kubernetes?（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**为什么需要Kubernetes?（技术术语）**（Why use Kubernetes?）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "9oo2fxTM2_p0VYPBroqxa": {
      "id": "9oo2fxTM2_p0VYPBroqxa",
      "zh": "键概念与Terminologies（技术术语）",
      "en": "Key Concepts and Terminologies",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「键概念与Terminologies（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**键概念与Terminologies（技术术语）**（Key Concepts and Terminologies）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「键概念与Terminologies（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**键概念与Terminologies（技术术语）**（Key Concepts and Terminologies）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "3fzuXKH7az_LVnmnoXB1p": {
      "id": "3fzuXKH7az_LVnmnoXB1p",
      "zh": "Kubernetes Alternatives（技术术语）",
      "en": "Kubernetes Alternatives",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Kubernetes Alternatives（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Kubernetes Alternatives（技术术语）**（Kubernetes Alternatives）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Kubernetes Alternatives（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Kubernetes Alternatives（技术术语）**（Kubernetes Alternatives）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "HGmeYvRf7_XusZl_K4x9k": {
      "id": "HGmeYvRf7_XusZl_K4x9k",
      "zh": "容器",
      "en": "Containers",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**容器**（Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。",
        "docker build 按层缓存构建镜像，每层对应一条指令。",
        "docker run 指定端口映射、环境变量和数据卷启动容器。",
        "docker logs / exec / inspect 查看运行状态和排障信息。"
      ],
      "practice": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。",
      "pitfalls": [
        "镜像里塞进不必要文件",
        "本地能跑但容器缺环境变量",
        "把容器文件系统当成持久存储"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**容器**（Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
        },
        {
          "title": "真正要掌握什么",
          "body": "docker build 按层缓存构建镜像，每层对应一条指令。 docker run 指定端口映射、环境变量和数据卷启动容器。 docker logs / exec / inspect 查看运行状态和排障信息。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
        }
      ],
      "kind": "container",
      "routeLabels": [
        "Dockerfile",
        "docker build",
        "docker run",
        "logs 排障"
      ]
    },
    "3OpGaQhyNtk1n1MLp-tlb": {
      "id": "3OpGaQhyNtk1n1MLp-tlb",
      "zh": "搭建Kubernetes（技术术语）",
      "en": "Setting up Kubernetes",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「搭建Kubernetes（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**搭建Kubernetes（技术术语）**（Setting up Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「搭建Kubernetes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**搭建Kubernetes（技术术语）**（Setting up Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "zrbSJa3k7a3TE0aYbWi9c": {
      "id": "zrbSJa3k7a3TE0aYbWi9c",
      "zh": "Deploying your First Application（技术术语）",
      "en": "Deploying your First Application",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Deploying your First Application（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Deploying your First Application（技术术语）**（Deploying your First Application）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Deploying your First Application（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Deploying your First Application（技术术语）**（Deploying your First Application）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "qSatCdBTDXPu-IFWzUI99": {
      "id": "qSatCdBTDXPu-IFWzUI99",
      "zh": "ChoosingaManaged云厂商",
      "en": "Choosing a Managed Provider",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「ChoosingaManaged云厂商」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**ChoosingaManaged云厂商**（Choosing a Managed Provider）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ChoosingaManaged云厂商」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ChoosingaManaged云厂商**（Choosing a Managed Provider）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "YaIs8lquWIe1D7RCUBZmC": {
      "id": "YaIs8lquWIe1D7RCUBZmC",
      "zh": "安装a本地集群",
      "en": "Installing a Local Cluster",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「安装a本地集群」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**安装a本地集群**（Installing a Local Cluster）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安装a本地集群」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**安装a本地集群**（Installing a Local Cluster）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "1MdrzhktCWjpmxiYYBdz7": {
      "id": "1MdrzhktCWjpmxiYYBdz7",
      "zh": "运行Applications",
      "en": "Running Applications",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「运行Applications」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**运行Applications**（Running Applications）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「运行Applications」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**运行Applications**（Running Applications）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "-d2PIXm0V_Iehe8cws8zK": {
      "id": "-d2PIXm0V_Iehe8cws8zK",
      "zh": "Pods（技术术语）",
      "en": "Pods",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Pods（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Pods（技术术语）**（Pods）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Pods（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Pods（技术术语）**（Pods）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "IF09l0-pryGpMbDt__ocr": {
      "id": "IF09l0-pryGpMbDt__ocr",
      "zh": "ReplicaSets（技术术语）",
      "en": "ReplicaSets",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "story": "学习「ReplicaSets（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**ReplicaSets（技术术语）**（ReplicaSets）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "why": "它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ReplicaSets（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ReplicaSets（技术术语）**（ReplicaSets）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
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
    "TUGQX7y1gs-aKPge2F1NU": {
      "id": "TUGQX7y1gs-aKPge2F1NU",
      "zh": "Deployments（技术术语）",
      "en": "Deployments",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Deployments（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Deployments（技术术语）**（Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Deployments（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Deployments（技术术语）**（Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "AJiRBEaKU8qYEm0fqN389": {
      "id": "AJiRBEaKU8qYEm0fqN389",
      "zh": "StatefulSets（技术术语）",
      "en": "StatefulSets",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「StatefulSets（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**StatefulSets（技术术语）**（StatefulSets）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「StatefulSets（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**StatefulSets（技术术语）**（StatefulSets）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "r3fzAN5DzratAKnnT8hzb": {
      "id": "r3fzAN5DzratAKnnT8hzb",
      "zh": "Jobs（技术术语）",
      "en": "Jobs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Jobs（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Jobs（技术术语）**（Jobs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Jobs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Jobs（技术术语）**（Jobs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "aUJ_w2L8nxNq3DfAW97Gd": {
      "id": "aUJ_w2L8nxNq3DfAW97Gd",
      "zh": "Services（技术术语）与Networking（技术术语）",
      "en": "Services and Networking",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Services（技术术语）与Networking（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Services（技术术语）与Networking（技术术语）**（Services and Networking）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Services（技术术语）与Networking（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Services（技术术语）与Networking（技术术语）**（Services and Networking）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "jUOlITLqnIvSu97I_3nBz": {
      "id": "jUOlITLqnIvSu97I_3nBz",
      "zh": "External Access to Services（技术术语）",
      "en": "External Access to Services",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「External Access to Services（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**External Access to Services（技术术语）**（External Access to Services）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「External Access to Services（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**External Access to Services（技术术语）**（External Access to Services）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "Qelo1YvAcUoX5PA-RYbNp": {
      "id": "Qelo1YvAcUoX5PA-RYbNp",
      "zh": "负载Balancing",
      "en": "Load Balancing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「负载Balancing」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**负载Balancing**（Load Balancing）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「负载Balancing」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**负载Balancing**（Load Balancing）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "44rhdieUCWsGFC_1__9kk": {
      "id": "44rhdieUCWsGFC_1__9kk",
      "zh": "Networking（技术术语）与Pod-to-PodCommunication（技术术语）",
      "en": "Networking & Pod-to-Pod Communication",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Networking（技术术语）与Pod-to-PodCommunication（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Networking（技术术语）与Pod-to-PodCommunication（技术术语）**（Networking & Pod-to-Pod Communication）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Networking（技术术语）与Pod-to-PodCommunication（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Networking（技术术语）与Pod-to-PodCommunication（技术术语）**（Networking & Pod-to-Pod Communication）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "dj7Tb2XTX4kxRUYiTjlhM": {
      "id": "dj7Tb2XTX4kxRUYiTjlhM",
      "zh": "Configuration管理",
      "en": "Configuration Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Configuration管理」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Configuration管理**（Configuration Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Configuration管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Configuration管理**（Configuration Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "u24UlZKI86vaguj_VpMv1": {
      "id": "u24UlZKI86vaguj_VpMv1",
      "zh": "InjectingPod配置withConfigMaps",
      "en": "Injecting Pod Config with ConfigMaps",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「InjectingPod配置withConfigMaps」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**InjectingPod配置withConfigMaps**（Injecting Pod Config with ConfigMaps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「InjectingPod配置withConfigMaps」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**InjectingPod配置withConfigMaps**（Injecting Pod Config with ConfigMaps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "S0CwGC2gMG-SqnLNldqBD": {
      "id": "S0CwGC2gMG-SqnLNldqBD",
      "zh": "使用SecretsforSensitive数据",
      "en": "Using Secrets for Sensitive Data",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「使用SecretsforSensitive数据」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**使用SecretsforSensitive数据**（Using Secrets for Sensitive Data）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「使用SecretsforSensitive数据」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**使用SecretsforSensitive数据**（Using Secrets for Sensitive Data）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "eWKkdiBhD5x2sGYajmHEs": {
      "id": "eWKkdiBhD5x2sGYajmHEs",
      "zh": "资源管理",
      "en": "Resource Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「资源管理」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**资源管理**（Resource Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「资源管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**资源管理**（Resource Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "8RLR6gRjIyTn6GCugEfgk": {
      "id": "8RLR6gRjIyTn6GCugEfgk",
      "zh": "设置资源Requests与Limits（技术术语）",
      "en": "Setting Resource Requests and Limits",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「设置资源Requests与Limits（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**设置资源Requests与Limits（技术术语）**（Setting Resource Requests and Limits）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「设置资源Requests与Limits（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**设置资源Requests与Limits（技术术语）**（Setting Resource Requests and Limits）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "OHz4QMmA3lqL_C7aWL8Ga": {
      "id": "OHz4QMmA3lqL_C7aWL8Ga",
      "zh": "Assigning Quotas to Namespaces（技术术语）",
      "en": "Assigning Quotas to Namespaces",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Assigning Quotas to Namespaces（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Assigning Quotas to Namespaces（技术术语）**（Assigning Quotas to Namespaces）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。",
        "docker build 按层缓存构建镜像，每层对应一条指令。",
        "docker run 指定端口映射、环境变量和数据卷启动容器。",
        "docker logs / exec / inspect 查看运行状态和排障信息。"
      ],
      "practice": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。",
      "pitfalls": [
        "镜像里塞进不必要文件",
        "本地能跑但容器缺环境变量",
        "把容器文件系统当成持久存储"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**Assigning Quotas to Namespaces（技术术语）**（Assigning Quotas to Namespaces）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
        },
        {
          "title": "真正要掌握什么",
          "body": "docker build 按层缓存构建镜像，每层对应一条指令。 docker run 指定端口映射、环境变量和数据卷启动容器。 docker logs / exec / inspect 查看运行状态和排障信息。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
        }
      ],
      "kind": "container",
      "routeLabels": [
        "Dockerfile",
        "docker build",
        "docker run",
        "logs 排障"
      ]
    },
    "PP4ld_vvjpY3QltBBsXKD": {
      "id": "PP4ld_vvjpY3QltBBsXKD",
      "zh": "监控与Optimizing资源Usage",
      "en": "Monitoring & Optimizing Resource Usage",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「监控与Optimizing资源Usage」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**监控与Optimizing资源Usage**（Monitoring & Optimizing Resource Usage）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「监控与Optimizing资源Usage」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**监控与Optimizing资源Usage**（Monitoring & Optimizing Resource Usage）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "SG3wtV2rt9nmLEkgrp_zP": {
      "id": "SG3wtV2rt9nmLEkgrp_zP",
      "zh": "安全",
      "en": "Security",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「安全」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**安全**（Security）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安全」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**安全**（Security）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "jOq0WwLrq8tlmOgo64QDc": {
      "id": "jOq0WwLrq8tlmOgo64QDc",
      "zh": "Role基于Access控制(RBAC)",
      "en": "Role Based Access Control (RBAC)",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Role基于Access控制(RBAC)」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Role基于Access控制(RBAC)**（Role Based Access Control (RBAC)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Role基于Access控制(RBAC)」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Role基于Access控制(RBAC)**（Role Based Access Control (RBAC)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "s0gHg8CqwrSylpSPu8arA": {
      "id": "s0gHg8CqwrSylpSPu8arA",
      "zh": "网络安全",
      "en": "Network Security",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「网络安全」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**网络安全**（Network Security）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「网络安全」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**网络安全**（Network Security）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "Nja7IFWcFTLsPcqbvRNm9": {
      "id": "Nja7IFWcFTLsPcqbvRNm9",
      "zh": "容器与Pod安全",
      "en": "Container and Pod Security",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器与Pod安全」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**容器与Pod安全**（Container and Pod Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。",
        "docker build 按层缓存构建镜像，每层对应一条指令。",
        "docker run 指定端口映射、环境变量和数据卷启动容器。",
        "docker logs / exec / inspect 查看运行状态和排障信息。"
      ],
      "practice": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。",
      "pitfalls": [
        "镜像里塞进不必要文件",
        "本地能跑但容器缺环境变量",
        "把容器文件系统当成持久存储"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**容器与Pod安全**（Container and Pod Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
        },
        {
          "title": "真正要掌握什么",
          "body": "docker build 按层缓存构建镜像，每层对应一条指令。 docker run 指定端口映射、环境变量和数据卷启动容器。 docker logs / exec / inspect 查看运行状态和排障信息。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
        }
      ],
      "kind": "container",
      "routeLabels": [
        "Dockerfile",
        "docker build",
        "docker run",
        "logs 排障"
      ]
    },
    "i7qxaFhFHPfe3fGEgsbcE": {
      "id": "i7qxaFhFHPfe3fGEgsbcE",
      "zh": "容器与Pod安全",
      "en": "Container and Pod Security",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器与Pod安全」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**容器与Pod安全**（Container and Pod Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。",
        "docker build 按层缓存构建镜像，每层对应一条指令。",
        "docker run 指定端口映射、环境变量和数据卷启动容器。",
        "docker logs / exec / inspect 查看运行状态和排障信息。"
      ],
      "practice": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。",
      "pitfalls": [
        "镜像里塞进不必要文件",
        "本地能跑但容器缺环境变量",
        "把容器文件系统当成持久存储"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**容器与Pod安全**（Container and Pod Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
        },
        {
          "title": "真正要掌握什么",
          "body": "docker build 按层缓存构建镜像，每层对应一条指令。 docker run 指定端口映射、环境变量和数据卷启动容器。 docker logs / exec / inspect 查看运行状态和排障信息。"
        },
        {
          "title": "动手验证",
          "body": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
        }
      ],
      "kind": "container",
      "routeLabels": [
        "Dockerfile",
        "docker build",
        "docker run",
        "logs 排障"
      ]
    },
    "AgsQnQjyTLUFhFpRdcE13": {
      "id": "AgsQnQjyTLUFhFpRdcE13",
      "zh": "监控与日志",
      "en": "Monitoring and Logging",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「监控与日志」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**监控与日志**（Monitoring and Logging）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「监控与日志」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**监控与日志**（Monitoring and Logging）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "-XxQtiLDAkXs7IFM_Ddw6": {
      "id": "-XxQtiLDAkXs7IFM_Ddw6",
      "zh": "Logs（技术术语）",
      "en": "Logs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Logs（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Logs（技术术语）**（Logs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Logs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Logs（技术术语）**（Logs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "nqUBHBFUYFdYqCKZvfXBR": {
      "id": "nqUBHBFUYFdYqCKZvfXBR",
      "zh": "指标",
      "en": "Metrics",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「指标」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**指标**（Metrics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「指标」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**指标**（Metrics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "ldYTEPt_hI4PXxr3tgJi5": {
      "id": "ldYTEPt_hI4PXxr3tgJi5",
      "zh": "Traces（技术术语）",
      "en": "Traces",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Traces（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Traces（技术术语）**（Traces）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Traces（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Traces（技术术语）**（Traces）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "pDjNsK5vI9FmKZbQm0lDP": {
      "id": "pDjNsK5vI9FmKZbQm0lDP",
      "zh": "资源Health",
      "en": "Resource Health",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「资源Health」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**资源Health**（Resource Health）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「资源Health」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**资源Health**（Resource Health）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "FANswgUhUb5Iuah2fni3L": {
      "id": "FANswgUhUb5Iuah2fni3L",
      "zh": "Observability Engines（技术术语）",
      "en": "Observability Engines",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Observability Engines（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Observability Engines（技术术语）**（Observability Engines）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Observability Engines（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Observability Engines（技术术语）**（Observability Engines）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "03mGA5AyL7mpF6y3EMW7A": {
      "id": "03mGA5AyL7mpF6y3EMW7A",
      "zh": "Autoscaling（技术术语）",
      "en": "Autoscaling",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Autoscaling（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Autoscaling（技术术语）**（Autoscaling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Autoscaling（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Autoscaling（技术术语）**（Autoscaling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "044IUUCgZP4oQ9UxUG2iy": {
      "id": "044IUUCgZP4oQ9UxUG2iy",
      "zh": "Horizontal Pod Autoscaler (HPA)（技术术语）",
      "en": "Horizontal Pod Autoscaler (HPA)",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Horizontal Pod Autoscaler (HPA)（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Horizontal Pod Autoscaler (HPA)（技术术语）**（Horizontal Pod Autoscaler (HPA)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Horizontal Pod Autoscaler (HPA)（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Horizontal Pod Autoscaler (HPA)（技术术语）**（Horizontal Pod Autoscaler (HPA)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "c1KVczGRjh9bhMpbPP6sA": {
      "id": "c1KVczGRjh9bhMpbPP6sA",
      "zh": "Vertical Pod Autoscaler (VPA)（技术术语）",
      "en": "Vertical Pod Autoscaler (VPA)",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Vertical Pod Autoscaler (VPA)（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Vertical Pod Autoscaler (VPA)（技术术语）**（Vertical Pod Autoscaler (VPA)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Vertical Pod Autoscaler (VPA)（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Vertical Pod Autoscaler (VPA)（技术术语）**（Vertical Pod Autoscaler (VPA)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "RC5MoYtG2rom-d4FW5qD2": {
      "id": "RC5MoYtG2rom-d4FW5qD2",
      "zh": "集群Autoscaling",
      "en": "Cluster Autoscaling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「集群Autoscaling」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**集群Autoscaling**（Cluster Autoscaling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「集群Autoscaling」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**集群Autoscaling**（Cluster Autoscaling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "xZDXM_8qb4VL15tNGG0ws": {
      "id": "xZDXM_8qb4VL15tNGG0ws",
      "zh": "Scheduling（技术术语）",
      "en": "Scheduling",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Scheduling（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Scheduling（技术术语）**（Scheduling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Scheduling（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Scheduling（技术术语）**（Scheduling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "70lTSIVh0AD6M8fMMuWzY": {
      "id": "70lTSIVh0AD6M8fMMuWzY",
      "zh": "基础",
      "en": "Basics",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「基础」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**基础**（Basics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「基础」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**基础**（Basics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "zXUsHAI1HFhcY2BFAcypv": {
      "id": "zXUsHAI1HFhcY2BFAcypv",
      "zh": "Taints（技术术语）与Tolerations（技术术语）",
      "en": "Taints and Tolerations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Taints（技术术语）与Tolerations（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Taints（技术术语）与Tolerations（技术术语）**（Taints and Tolerations）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Taints（技术术语）与Tolerations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Taints（技术术语）与Tolerations（技术术语）**（Taints and Tolerations）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "CL0hKTcml40InmyVUXpY2": {
      "id": "CL0hKTcml40InmyVUXpY2",
      "zh": "TopologySpread约束",
      "en": "Topology Spread Constraints",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「TopologySpread约束」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**TopologySpread约束**（Topology Spread Constraints）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「TopologySpread约束」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**TopologySpread约束**（Topology Spread Constraints）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "_Gva1eGcYqpmZNPyV03lt": {
      "id": "_Gva1eGcYqpmZNPyV03lt",
      "zh": "Pod Priorities（技术术语）",
      "en": "Pod Priorities",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Pod Priorities（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Pod Priorities（技术术语）**（Pod Priorities）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Pod Priorities（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Pod Priorities（技术术语）**（Pod Priorities）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "TRKzlDW2PQN9bWTyz3NWL": {
      "id": "TRKzlDW2PQN9bWTyz3NWL",
      "zh": "Evictions（技术术语）",
      "en": "Evictions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Evictions（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Evictions（技术术语）**（Evictions）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Evictions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Evictions（技术术语）**（Evictions）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "URnYf9jMprFz-o26fbU2P": {
      "id": "URnYf9jMprFz-o26fbU2P",
      "zh": "存储与Volumes（技术术语）",
      "en": "Storage and Volumes",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「存储与Volumes（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**存储与Volumes（技术术语）**（Storage and Volumes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「存储与Volumes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**存储与Volumes（技术术语）**（Storage and Volumes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "55RV9psPCmcg8G_P_zQo9": {
      "id": "55RV9psPCmcg8G_P_zQo9",
      "zh": "CSI Drivers（技术术语）",
      "en": "CSI Drivers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「CSI Drivers（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**CSI Drivers（技术术语）**（CSI Drivers）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CSI Drivers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CSI Drivers（技术术语）**（CSI Drivers）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "LJUJ1NIUsajb1AUdvJjqW": {
      "id": "LJUJ1NIUsajb1AUdvJjqW",
      "zh": "Stateful Applications（技术术语）",
      "en": "Stateful Applications",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Stateful Applications（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Stateful Applications（技术术语）**（Stateful Applications）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Stateful Applications（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Stateful Applications（技术术语）**（Stateful Applications）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "0l0xpsabglvs_t6oAP-XG": {
      "id": "0l0xpsabglvs_t6oAP-XG",
      "zh": "部署模式",
      "en": "Deployment Patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「部署模式」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**部署模式**（Deployment Patterns）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「部署模式」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**部署模式**（Deployment Patterns）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "Pymc9H-lRHVPy7M9eSaPD": {
      "id": "Pymc9H-lRHVPy7M9eSaPD",
      "zh": "CI/CD集成",
      "en": "CI / CD Integration",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「CI/CD集成」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**CI/CD集成**（CI / CD Integration）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CI/CD集成」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CI/CD集成**（CI / CD Integration）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "dATdEyNWlpDNKjedCXLyb": {
      "id": "dATdEyNWlpDNKjedCXLyb",
      "zh": "GitOps（技术术语）",
      "en": "GitOps",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitOps（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**GitOps（技术术语）**（GitOps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitOps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
        "它改变的是代码历史，而不是业务运行时。",
        "要重点观察工作区状态、提交历史和远程分支之间的差异。",
        "学习时不要只记命令，必须配合一次真实分支改动。"
      ],
      "practice": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。",
      "pitfalls": [
        "没看状态就执行重置/合并",
        "把工作区、暂存区、本地仓库混成一件事",
        "不知道命令会不会改写历史"
      ],
      "details": [
        {
          "title": "是什么",
          "body": "**GitOps（技术术语）**（GitOps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "真正要掌握什么",
          "body": "它改变的是代码历史，而不是业务运行时。 要重点观察工作区状态、提交历史和远程分支之间的差异。 学习时不要只记命令，必须配合一次真实分支改动。"
        },
        {
          "title": "动手验证",
          "body": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
        }
      ],
      "kind": "git"
    },
    "FAEFOhLdp7xrmctHFxiOM": {
      "id": "FAEFOhLdp7xrmctHFxiOM",
      "zh": "Helm Charts（技术术语）",
      "en": "Helm Charts",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Helm Charts（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Helm Charts（技术术语）**（Helm Charts）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Helm Charts（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Helm Charts（技术术语）**（Helm Charts）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "88IGeC3dAopHLGtLozxdY": {
      "id": "88IGeC3dAopHLGtLozxdY",
      "zh": "Canary Deployments（技术术语）",
      "en": "Canary Deployments",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Canary Deployments（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Canary Deployments（技术术语）**（Canary Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Canary Deployments（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Canary Deployments（技术术语）**（Canary Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "yMSXdwDO36CLtp2TBC7aB": {
      "id": "yMSXdwDO36CLtp2TBC7aB",
      "zh": "Rolling Updates / Rollbacks（技术术语）",
      "en": "Rolling Updates / Rollbacks",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Rolling Updates / Rollbacks（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Rolling Updates / Rollbacks（技术术语）**（Rolling Updates / Rollbacks）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Rolling Updates / Rollbacks（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Rolling Updates / Rollbacks（技术术语）**（Rolling Updates / Rollbacks）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "t8SJbGVXsUDECxePLDk_w": {
      "id": "t8SJbGVXsUDECxePLDk_w",
      "zh": "进阶Topics",
      "en": "Advanced Topics",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「进阶Topics」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**进阶Topics**（Advanced Topics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「进阶Topics」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**进阶Topics**（Advanced Topics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "L9rVPEEXFwisQOwT_LQ4v": {
      "id": "L9rVPEEXFwisQOwT_LQ4v",
      "zh": "创建CustomControllers",
      "en": "Creating Custom Controllers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「创建CustomControllers」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**创建CustomControllers**（Creating Custom Controllers）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「创建CustomControllers」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**创建CustomControllers**（Creating Custom Controllers）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "1-Nb8rCMJEZrYm20sEcRJ": {
      "id": "1-Nb8rCMJEZrYm20sEcRJ",
      "zh": "CustomSchedulers（技术术语）与Extenders（技术术语）",
      "en": "Custom Schedulers and Extenders",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「CustomSchedulers（技术术语）与Extenders（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**CustomSchedulers（技术术语）与Extenders（技术术语）**（Custom Schedulers and Extenders）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CustomSchedulers（技术术语）与Extenders（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CustomSchedulers（技术术语）与Extenders（技术术语）**（Custom Schedulers and Extenders）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "9P7l-RBOkUxs3Z_UpKQO-": {
      "id": "9P7l-RBOkUxs3Z_UpKQO-",
      "zh": "Custom资源Definitions(CRDs)",
      "en": "Custom Resource Definitions (CRDs)",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Custom资源Definitions(CRDs)」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Custom资源Definitions(CRDs)**（Custom Resource Definitions (CRDs)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Custom资源Definitions(CRDs)」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Custom资源Definitions(CRDs)**（Custom Resource Definitions (CRDs)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "UeJcKv3jhenjNzHM-0R86": {
      "id": "UeJcKv3jhenjNzHM-0R86",
      "zh": "KubernetesExtensions（技术术语）与APIs（技术术语）",
      "en": "Kubernetes Extensions and APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「KubernetesExtensions（技术术语）与APIs（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**KubernetesExtensions（技术术语）与APIs（技术术语）**（Kubernetes Extensions and APIs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「KubernetesExtensions（技术术语）与APIs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**KubernetesExtensions（技术术语）与APIs（技术术语）**（Kubernetes Extensions and APIs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "ZrVhYTw63aVVIFAEJDG5r": {
      "id": "ZrVhYTw63aVVIFAEJDG5r",
      "zh": "Shouldyoumanageyourown集群",
      "en": "Should you manage your own Cluster?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Shouldyoumanageyourown集群」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Shouldyoumanageyourown集群**（Should you manage your own Cluster?）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Shouldyoumanageyourown集群」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Shouldyoumanageyourown集群**（Should you manage your own Cluster?）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "M-iTb_7EWZIJ3JpdViICx": {
      "id": "M-iTb_7EWZIJ3JpdViICx",
      "zh": "安装the控制Plane",
      "en": "Installing the Control Plane",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「安装the控制Plane」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**安装the控制Plane**（Installing the Control Plane）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安装the控制Plane」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**安装the控制Plane**（Installing the Control Plane）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "2cQKTxln3dIk5IjX2UZdM": {
      "id": "2cQKTxln3dIk5IjX2UZdM",
      "zh": "Adding（技术术语）与管理WorkerNodes",
      "en": "Adding and Managing Worker Nodes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Adding（技术术语）与管理WorkerNodes」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Adding（技术术语）与管理WorkerNodes**（Adding and Managing Worker Nodes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Adding（技术术语）与管理WorkerNodes」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Adding（技术术语）与管理WorkerNodes**（Adding and Managing Worker Nodes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "auZgEQ6FC3nUjuyx0zANh": {
      "id": "auZgEQ6FC3nUjuyx0zANh",
      "zh": "Multi-集群管理",
      "en": "Multi-Cluster Management",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Multi-集群管理」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Multi-集群管理**（Multi-Cluster Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Multi-集群管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Multi-集群管理**（Multi-Cluster Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "9-oaTlzKmcxTfaRycz1w3": {
      "id": "9-oaTlzKmcxTfaRycz1w3",
      "zh": "Blue-Green Deployments（技术术语）",
      "en": "Blue-Green Deployments",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Blue-Green Deployments（技术术语）」时，先把它放进 Kubernetes 云原生 的真实场景，而不是孤立背术语。",
      "what": "**Blue-Green Deployments（技术术语）**（Blue-Green Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 Kubernetes 云原生 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Blue-Green Deployments（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Blue-Green Deployments（技术术语）**（Blue-Green Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    }
  },
  "lessons": {
    "y7KjVfSI6CAduyHd4mBFT": {
      "scene": "学习「入门介绍」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "入门介绍（Introduction）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「入门介绍」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "qLeEEwBvlGt1fP5Qcreah": {
      "scene": "学习「概览ofKubernetes」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "概览ofKubernetes（Overview of Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「概览ofKubernetes」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「概览ofKubernetes」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「概览ofKubernetes」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "q-Ky0ietZGpyUcBQfh-BJ": {
      "scene": "学习「为什么需要Kubernetes?（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "为什么需要Kubernetes?（技术术语）（Why use Kubernetes?）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「为什么需要Kubernetes?（技术术语）」出现在哪：上游输入是什么…",
          "text": "「为什么需要Kubernetes?（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「为什么需要Kubernetes?（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "9oo2fxTM2_p0VYPBroqxa": {
      "scene": "学习「键概念与Terminologies（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "键概念与Terminologies（技术术语）（Key Concepts and Terminologies）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「键概念与Terminologies（技术术语）」出现在哪：上游输入是什…",
          "text": "「键概念与Terminologies（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「键概念与Terminologies（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "3fzuXKH7az_LVnmnoXB1p": {
      "scene": "学习「Kubernetes Alternatives（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Kubernetes Alternatives（技术术语）（Kubernetes Alternatives）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Kubernetes Alternatives（技术术语）」出现在哪：…",
          "text": "「Kubernetes Alternatives（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Kubernetes Alternatives（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "HGmeYvRf7_XusZl_K4x9k": {
      "scene": "学习「容器」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "容器（Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "route": [
        {
          "label": "Dockerfile",
          "title": "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。",
          "text": "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。"
        },
        {
          "label": "docker build",
          "title": "docker build 按层缓存构建镜像，每层对应一条指令。",
          "text": "docker build 按层缓存构建镜像，每层对应一条指令。"
        },
        {
          "label": "docker run",
          "title": "docker run 指定端口映射、环境变量和数据卷启动容器。",
          "text": "docker run 指定端口映射、环境变量和数据卷启动容器。"
        },
        {
          "label": "logs 排障",
          "title": "docker logs / exec / inspect 查看运行状态和…",
          "text": "docker logs / exec / inspect 查看运行状态和排障信息。"
        }
      ],
      "confusion": "容易混淆的是：会说「容器」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "3OpGaQhyNtk1n1MLp-tlb": {
      "scene": "学习「搭建Kubernetes（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "搭建Kubernetes（技术术语）（Setting up Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「搭建Kubernetes（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「搭建Kubernetes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「搭建Kubernetes（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "zrbSJa3k7a3TE0aYbWi9c": {
      "scene": "学习「Deploying your First Application（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Deploying your First Application（技术术语）（Deploying your First Application）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Deploying your First Application（技术…",
          "text": "「Deploying your First Application（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Deploying your First Application（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "qSatCdBTDXPu-IFWzUI99": {
      "scene": "学习「ChoosingaManaged云厂商」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "ChoosingaManaged云厂商（Choosing a Managed Provider）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「ChoosingaManaged云厂商」出现在哪：上游输入是什么，下游…",
          "text": "「ChoosingaManaged云厂商」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ChoosingaManaged云厂商」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "YaIs8lquWIe1D7RCUBZmC": {
      "scene": "学习「安装a本地集群」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "安装a本地集群（Installing a Local Cluster）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「安装a本地集群」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「安装a本地集群」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「安装a本地集群」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "1MdrzhktCWjpmxiYYBdz7": {
      "scene": "学习「运行Applications」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "运行Applications（Running Applications）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「运行Applications」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「运行Applications」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「运行Applications」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "-d2PIXm0V_Iehe8cws8zK": {
      "scene": "学习「Pods（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Pods（技术术语）（Pods）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Pods（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Pods（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Pods（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "IF09l0-pryGpMbDt__ocr": {
      "scene": "学习「ReplicaSets（技术术语）」：文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "core": "ReplicaSets（技术术语）（ReplicaSets）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "route": [
        {
          "label": "定文档边界",
          "title": "「ReplicaSets（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「ReplicaSets（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ReplicaSets（技术术语）」不等于会用。重点看 定文档边界 → 按查询建索引 → 做聚合/复制 → 验证读写路径 这条链路。",
      "experiment": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
    },
    "TUGQX7y1gs-aKPge2F1NU": {
      "scene": "学习「Deployments（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Deployments（技术术语）（Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Deployments（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Deployments（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Deployments（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "AJiRBEaKU8qYEm0fqN389": {
      "scene": "学习「StatefulSets（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "StatefulSets（技术术语）（StatefulSets）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「StatefulSets（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「StatefulSets（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「StatefulSets（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "r3fzAN5DzratAKnnT8hzb": {
      "scene": "学习「Jobs（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Jobs（技术术语）（Jobs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Jobs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Jobs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Jobs（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "aUJ_w2L8nxNq3DfAW97Gd": {
      "scene": "学习「Services（技术术语）与Networking（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Services（技术术语）与Networking（技术术语）（Services and Networking）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Services（技术术语）与Networking（技术术语）」出现在…",
          "text": "「Services（技术术语）与Networking（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Services（技术术语）与Networking（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "jUOlITLqnIvSu97I_3nBz": {
      "scene": "学习「External Access to Services（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "External Access to Services（技术术语）（External Access to Services）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「External Access to Services（技术术语）」出…",
          "text": "「External Access to Services（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「External Access to Services（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "Qelo1YvAcUoX5PA-RYbNp": {
      "scene": "学习「负载Balancing」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "负载Balancing（Load Balancing）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「负载Balancing」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「负载Balancing」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「负载Balancing」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "44rhdieUCWsGFC_1__9kk": {
      "scene": "学习「Networking（技术术语）与Pod-to-PodCommunication（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Networking（技术术语）与Pod-to-PodCommunication（技术术语）（Networking & Pod-to-Pod Communication）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Networking（技术术语）与Pod-to-PodCommunic…",
          "text": "「Networking（技术术语）与Pod-to-PodCommunication（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Networking（技术术语）与Pod-to-PodCommunication（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "dj7Tb2XTX4kxRUYiTjlhM": {
      "scene": "学习「Configuration管理」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Configuration管理（Configuration Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Configuration管理」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Configuration管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Configuration管理」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "u24UlZKI86vaguj_VpMv1": {
      "scene": "学习「InjectingPod配置withConfigMaps」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "InjectingPod配置withConfigMaps（Injecting Pod Config with ConfigMaps）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「InjectingPod配置withConfigMaps」出现在哪：上…",
          "text": "「InjectingPod配置withConfigMaps」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「InjectingPod配置withConfigMaps」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "S0CwGC2gMG-SqnLNldqBD": {
      "scene": "学习「使用SecretsforSensitive数据」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "使用SecretsforSensitive数据（Using Secrets for Sensitive Data）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「使用SecretsforSensitive数据」出现在哪：上游输入是什…",
          "text": "「使用SecretsforSensitive数据」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「使用SecretsforSensitive数据」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "eWKkdiBhD5x2sGYajmHEs": {
      "scene": "学习「资源管理」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "资源管理（Resource Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「资源管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「资源管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「资源管理」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "8RLR6gRjIyTn6GCugEfgk": {
      "scene": "学习「设置资源Requests与Limits（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "设置资源Requests与Limits（技术术语）（Setting Resource Requests and Limits）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「设置资源Requests与Limits（技术术语）」出现在哪：上游输入…",
          "text": "「设置资源Requests与Limits（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「设置资源Requests与Limits（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "OHz4QMmA3lqL_C7aWL8Ga": {
      "scene": "学习「Assigning Quotas to Namespaces（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Assigning Quotas to Namespaces（技术术语）（Assigning Quotas to Namespaces）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "route": [
        {
          "label": "Dockerfile",
          "title": "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。",
          "text": "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。"
        },
        {
          "label": "docker build",
          "title": "docker build 按层缓存构建镜像，每层对应一条指令。",
          "text": "docker build 按层缓存构建镜像，每层对应一条指令。"
        },
        {
          "label": "docker run",
          "title": "docker run 指定端口映射、环境变量和数据卷启动容器。",
          "text": "docker run 指定端口映射、环境变量和数据卷启动容器。"
        },
        {
          "label": "logs 排障",
          "title": "docker logs / exec / inspect 查看运行状态和…",
          "text": "docker logs / exec / inspect 查看运行状态和排障信息。"
        }
      ],
      "confusion": "容易混淆的是：会说「Assigning Quotas to Namespaces（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "PP4ld_vvjpY3QltBBsXKD": {
      "scene": "学习「监控与Optimizing资源Usage」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "监控与Optimizing资源Usage（Monitoring & Optimizing Resource Usage）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「监控与Optimizing资源Usage」出现在哪：上游输入是什么，下…",
          "text": "「监控与Optimizing资源Usage」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「监控与Optimizing资源Usage」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "SG3wtV2rt9nmLEkgrp_zP": {
      "scene": "学习「安全」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "安全（Security）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「安全」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「安全」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「安全」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "jOq0WwLrq8tlmOgo64QDc": {
      "scene": "学习「Role基于Access控制(RBAC)」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Role基于Access控制(RBAC)（Role Based Access Control (RBAC)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Role基于Access控制(RBAC)」出现在哪：上游输入是什么，下…",
          "text": "「Role基于Access控制(RBAC)」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Role基于Access控制(RBAC)」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "s0gHg8CqwrSylpSPu8arA": {
      "scene": "学习「网络安全」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "网络安全（Network Security）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「网络安全」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「网络安全」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「网络安全」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "Nja7IFWcFTLsPcqbvRNm9": {
      "scene": "学习「容器与Pod安全」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "容器与Pod安全（Container and Pod Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "route": [
        {
          "label": "Dockerfile",
          "title": "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。",
          "text": "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。"
        },
        {
          "label": "docker build",
          "title": "docker build 按层缓存构建镜像，每层对应一条指令。",
          "text": "docker build 按层缓存构建镜像，每层对应一条指令。"
        },
        {
          "label": "docker run",
          "title": "docker run 指定端口映射、环境变量和数据卷启动容器。",
          "text": "docker run 指定端口映射、环境变量和数据卷启动容器。"
        },
        {
          "label": "logs 排障",
          "title": "docker logs / exec / inspect 查看运行状态和…",
          "text": "docker logs / exec / inspect 查看运行状态和排障信息。"
        }
      ],
      "confusion": "容易混淆的是：会说「容器与Pod安全」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "i7qxaFhFHPfe3fGEgsbcE": {
      "scene": "学习「容器与Pod安全」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "容器与Pod安全（Container and Pod Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "route": [
        {
          "label": "Dockerfile",
          "title": "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。",
          "text": "Dockerfile 声明基础镜像、复制代码、安装依赖、启动命令。"
        },
        {
          "label": "docker build",
          "title": "docker build 按层缓存构建镜像，每层对应一条指令。",
          "text": "docker build 按层缓存构建镜像，每层对应一条指令。"
        },
        {
          "label": "docker run",
          "title": "docker run 指定端口映射、环境变量和数据卷启动容器。",
          "text": "docker run 指定端口映射、环境变量和数据卷启动容器。"
        },
        {
          "label": "logs 排障",
          "title": "docker logs / exec / inspect 查看运行状态和…",
          "text": "docker logs / exec / inspect 查看运行状态和排障信息。"
        }
      ],
      "confusion": "容易混淆的是：会说「容器与Pod安全」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "AgsQnQjyTLUFhFpRdcE13": {
      "scene": "学习「监控与日志」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "监控与日志（Monitoring and Logging）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「监控与日志」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「监控与日志」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「监控与日志」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "-XxQtiLDAkXs7IFM_Ddw6": {
      "scene": "学习「Logs（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Logs（技术术语）（Logs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Logs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Logs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Logs（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "nqUBHBFUYFdYqCKZvfXBR": {
      "scene": "学习「指标」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "指标（Metrics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「指标」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「指标」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「指标」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "ldYTEPt_hI4PXxr3tgJi5": {
      "scene": "学习「Traces（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Traces（技术术语）（Traces）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Traces（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Traces（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Traces（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "pDjNsK5vI9FmKZbQm0lDP": {
      "scene": "学习「资源Health」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "资源Health（Resource Health）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「资源Health」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「资源Health」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「资源Health」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "FANswgUhUb5Iuah2fni3L": {
      "scene": "学习「Observability Engines（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Observability Engines（技术术语）（Observability Engines）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Observability Engines（技术术语）」出现在哪：上游…",
          "text": "「Observability Engines（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Observability Engines（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "03mGA5AyL7mpF6y3EMW7A": {
      "scene": "学习「Autoscaling（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Autoscaling（技术术语）（Autoscaling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Autoscaling（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Autoscaling（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Autoscaling（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "044IUUCgZP4oQ9UxUG2iy": {
      "scene": "学习「Horizontal Pod Autoscaler (HPA)（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Horizontal Pod Autoscaler (HPA)（技术术语）（Horizontal Pod Autoscaler (HPA)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Horizontal Pod Autoscaler (HPA)（技术术…",
          "text": "「Horizontal Pod Autoscaler (HPA)（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Horizontal Pod Autoscaler (HPA)（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "c1KVczGRjh9bhMpbPP6sA": {
      "scene": "学习「Vertical Pod Autoscaler (VPA)（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Vertical Pod Autoscaler (VPA)（技术术语）（Vertical Pod Autoscaler (VPA)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Vertical Pod Autoscaler (VPA)（技术术语）…",
          "text": "「Vertical Pod Autoscaler (VPA)（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Vertical Pod Autoscaler (VPA)（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "RC5MoYtG2rom-d4FW5qD2": {
      "scene": "学习「集群Autoscaling」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "集群Autoscaling（Cluster Autoscaling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「集群Autoscaling」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「集群Autoscaling」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「集群Autoscaling」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "xZDXM_8qb4VL15tNGG0ws": {
      "scene": "学习「Scheduling（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Scheduling（技术术语）（Scheduling）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Scheduling（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Scheduling（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Scheduling（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "70lTSIVh0AD6M8fMMuWzY": {
      "scene": "学习「基础」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "基础（Basics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「基础」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「基础」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「基础」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "zXUsHAI1HFhcY2BFAcypv": {
      "scene": "学习「Taints（技术术语）与Tolerations（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Taints（技术术语）与Tolerations（技术术语）（Taints and Tolerations）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Taints（技术术语）与Tolerations（技术术语）」出现在哪…",
          "text": "「Taints（技术术语）与Tolerations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Taints（技术术语）与Tolerations（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "CL0hKTcml40InmyVUXpY2": {
      "scene": "学习「TopologySpread约束」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "TopologySpread约束（Topology Spread Constraints）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「TopologySpread约束」出现在哪：上游输入是什么，下游输出是…",
          "text": "「TopologySpread约束」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「TopologySpread约束」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "_Gva1eGcYqpmZNPyV03lt": {
      "scene": "学习「Pod Priorities（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Pod Priorities（技术术语）（Pod Priorities）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Pod Priorities（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Pod Priorities（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Pod Priorities（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "TRKzlDW2PQN9bWTyz3NWL": {
      "scene": "学习「Evictions（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Evictions（技术术语）（Evictions）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Evictions（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Evictions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Evictions（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "URnYf9jMprFz-o26fbU2P": {
      "scene": "学习「存储与Volumes（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "存储与Volumes（技术术语）（Storage and Volumes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「存储与Volumes（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「存储与Volumes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「存储与Volumes（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "55RV9psPCmcg8G_P_zQo9": {
      "scene": "学习「CSI Drivers（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "CSI Drivers（技术术语）（CSI Drivers）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「CSI Drivers（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「CSI Drivers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CSI Drivers（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "LJUJ1NIUsajb1AUdvJjqW": {
      "scene": "学习「Stateful Applications（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Stateful Applications（技术术语）（Stateful Applications）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Stateful Applications（技术术语）」出现在哪：上游…",
          "text": "「Stateful Applications（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Stateful Applications（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "0l0xpsabglvs_t6oAP-XG": {
      "scene": "学习「部署模式」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "部署模式（Deployment Patterns）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「部署模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「部署模式」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「部署模式」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "Pymc9H-lRHVPy7M9eSaPD": {
      "scene": "学习「CI/CD集成」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "CI/CD集成（CI / CD Integration）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「CI/CD集成」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CI/CD集成」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CI/CD集成」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "dATdEyNWlpDNKjedCXLyb": {
      "scene": "学习「GitOps（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitOps（技术术语）（GitOps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitOps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GitOps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
        },
        {
          "label": "暂存并提交",
          "title": "它改变的是代码历史，而不是业务运行时。",
          "text": "它改变的是代码历史，而不是业务运行时。"
        },
        {
          "label": "远程同步",
          "title": "要重点观察工作区状态、提交历史和远程分支之间的差异。",
          "text": "要重点观察工作区状态、提交历史和远程分支之间的差异。"
        },
        {
          "label": "协作收尾",
          "title": "学习时不要只记命令，必须配合一次真实分支改动。",
          "text": "学习时不要只记命令，必须配合一次真实分支改动。"
        }
      ],
      "confusion": "容易混淆的是：会说「GitOps（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "FAEFOhLdp7xrmctHFxiOM": {
      "scene": "学习「Helm Charts（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Helm Charts（技术术语）（Helm Charts）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Helm Charts（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Helm Charts（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Helm Charts（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "88IGeC3dAopHLGtLozxdY": {
      "scene": "学习「Canary Deployments（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Canary Deployments（技术术语）（Canary Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Canary Deployments（技术术语）」出现在哪：上游输入是…",
          "text": "「Canary Deployments（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Canary Deployments（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "yMSXdwDO36CLtp2TBC7aB": {
      "scene": "学习「Rolling Updates / Rollbacks（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Rolling Updates / Rollbacks（技术术语）（Rolling Updates / Rollbacks）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Rolling Updates / Rollbacks（技术术语）」出…",
          "text": "「Rolling Updates / Rollbacks（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Rolling Updates / Rollbacks（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "t8SJbGVXsUDECxePLDk_w": {
      "scene": "学习「进阶Topics」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "进阶Topics（Advanced Topics）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「进阶Topics」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「进阶Topics」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「进阶Topics」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "L9rVPEEXFwisQOwT_LQ4v": {
      "scene": "学习「创建CustomControllers」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "创建CustomControllers（Creating Custom Controllers）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「创建CustomControllers」出现在哪：上游输入是什么，下游…",
          "text": "「创建CustomControllers」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「创建CustomControllers」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "1-Nb8rCMJEZrYm20sEcRJ": {
      "scene": "学习「CustomSchedulers（技术术语）与Extenders（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "CustomSchedulers（技术术语）与Extenders（技术术语）（Custom Schedulers and Extenders）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「CustomSchedulers（技术术语）与Extenders（技术…",
          "text": "「CustomSchedulers（技术术语）与Extenders（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CustomSchedulers（技术术语）与Extenders（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "9P7l-RBOkUxs3Z_UpKQO-": {
      "scene": "学习「Custom资源Definitions(CRDs)」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Custom资源Definitions(CRDs)（Custom Resource Definitions (CRDs)）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Custom资源Definitions(CRDs)」出现在哪：上游输入…",
          "text": "「Custom资源Definitions(CRDs)」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Custom资源Definitions(CRDs)」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "UeJcKv3jhenjNzHM-0R86": {
      "scene": "学习「KubernetesExtensions（技术术语）与APIs（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "KubernetesExtensions（技术术语）与APIs（技术术语）（Kubernetes Extensions and APIs）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「KubernetesExtensions（技术术语）与APIs（技术术…",
          "text": "「KubernetesExtensions（技术术语）与APIs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「KubernetesExtensions（技术术语）与APIs（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "ZrVhYTw63aVVIFAEJDG5r": {
      "scene": "学习「Shouldyoumanageyourown集群」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Shouldyoumanageyourown集群（Should you manage your own Cluster?）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Shouldyoumanageyourown集群」出现在哪：上游输入是…",
          "text": "「Shouldyoumanageyourown集群」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Shouldyoumanageyourown集群」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "M-iTb_7EWZIJ3JpdViICx": {
      "scene": "学习「安装the控制Plane」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "安装the控制Plane（Installing the Control Plane）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「安装the控制Plane」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「安装the控制Plane」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「安装the控制Plane」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "2cQKTxln3dIk5IjX2UZdM": {
      "scene": "学习「Adding（技术术语）与管理WorkerNodes」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Adding（技术术语）与管理WorkerNodes（Adding and Managing Worker Nodes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Adding（技术术语）与管理WorkerNodes」出现在哪：上游输…",
          "text": "「Adding（技术术语）与管理WorkerNodes」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Adding（技术术语）与管理WorkerNodes」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "auZgEQ6FC3nUjuyx0zANh": {
      "scene": "学习「Multi-集群管理」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Multi-集群管理（Multi-Cluster Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Multi-集群管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Multi-集群管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Multi-集群管理」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "9-oaTlzKmcxTfaRycz1w3": {
      "scene": "学习「Blue-Green Deployments（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Blue-Green Deployments（技术术语）（Blue-Green Deployments）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Blue-Green Deployments（技术术语）」出现在哪：上…",
          "text": "「Blue-Green Deployments（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Blue-Green Deployments（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
