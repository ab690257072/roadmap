import type { DeepLesson, Stage, Tutorial } from '../types';

const data = {
  "stages": [
    {
      "id": "stage-01",
      "zh": "阶段 01：基础知识",
      "en": "Learn the Basics",
      "desc": "按 roadmap.sh 原始顺序整理的第 1 组学习节点。",
      "nodes": [
        {
          "id": "2HdKzAIQi15pr3YHHrbPp",
          "label": "HTTP",
          "zh": "HTTP（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": -67,
          "w": 300,
          "h": 49
        },
        {
          "id": "r8M3quACGO2piu0u_R4hO",
          "label": "What are APIs",
          "zh": "什么是APIs（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": -32,
          "w": 284,
          "h": 49
        },
        {
          "id": "ACALE93mL4gnX5ThRIdRp",
          "label": "HTTP Versions",
          "zh": "HTTP Versions（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -595,
          "y": -6,
          "w": 280,
          "h": 49
        },
        {
          "id": "P-rGIk50Bg7nFmWieAW07",
          "label": "URL, Query & Path Parameters",
          "zh": "URL,查询与路径参数",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 21,
          "w": 284,
          "h": 49
        },
        {
          "id": "rADHM-6NAxEjzmgiHefDX",
          "label": "HTTP Methods",
          "zh": "HTTP Methods（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -595,
          "y": 46,
          "w": 280,
          "h": 49
        },
        {
          "id": "duKkpzPjUU_-8kyJGHqRX",
          "label": "Learn the Basics",
          "zh": "基础知识",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 74,
          "w": 283,
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
      "zh": "阶段 02：Content Negotiation（技术术语）",
      "en": "Content Negotiation",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "TX_hg7EobNJhmWKsMCaT1",
          "label": "Content Negotiation",
          "zh": "Content Negotiation（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 74,
          "w": 284,
          "h": 49
        },
        {
          "id": "7szYyzLifKsepNU0c2KnN",
          "label": "HTTP Status Codes",
          "zh": "HTTP状态Codes",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -595,
          "y": 99,
          "w": 280,
          "h": 49
        },
        {
          "id": "KG3wO86F8Of27fU7QRcsn",
          "label": "Understand TCP / IP",
          "zh": "Understand TCP / IP（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 127,
          "w": 284,
          "h": 49
        },
        {
          "id": "rE-0yibRH6B2UBKp351cf",
          "label": "HTTP Headers",
          "zh": "HTTP Headers（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -595,
          "y": 151,
          "w": 280,
          "h": 49
        },
        {
          "id": "v4nJYD9yiIEUviLPhVTCD",
          "label": "Basics of DNS",
          "zh": "基础ofDNS",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 180,
          "w": 284,
          "h": 49
        },
        {
          "id": "UFuX8wcxZQ7dvaQF_2Yp8",
          "label": "Cookies",
          "zh": "Cookies（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -595,
          "y": 204,
          "w": 138,
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
      "zh": "阶段 03：CORS（技术术语）",
      "en": "CORS",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "GRlsBogOlOwuqhMMPyHN3",
          "label": "CORS",
          "zh": "CORS（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -453,
          "y": 204,
          "w": 138,
          "h": 49
        },
        {
          "id": "qAolZHf_jp8hCdtqHZwC8",
          "label": "HTTP Caching",
          "zh": "HTTP缓存",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -595,
          "y": 257,
          "w": 280,
          "h": 49
        },
        {
          "id": "9WI_z34jIFXwoUQuChyRU",
          "label": "REST Principles",
          "zh": "REST Principles（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 331,
          "w": 270,
          "h": 49
        },
        {
          "id": "BvwdASMvuNQ9DNgzdSZ4o",
          "label": "RESTful APIs",
          "zh": "RESTful APIs（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 350,
          "w": 270,
          "h": 49
        },
        {
          "id": "b3qRTLwCC_9uDoPGrd9Bu",
          "label": "URI Design",
          "zh": "URI设计",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 384,
          "w": 270,
          "h": 49
        },
        {
          "id": "TVR-SkErlOHbDKLBGfxep",
          "label": "Simple JSON APIs",
          "zh": "Simple JSON APIs（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 403,
          "w": 270,
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
      "zh": "阶段 04：Different API Styles（技术术语）",
      "en": "Different API Styles",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "o8i093VQv-T5Qf1yGqU0R",
          "label": "Different API Styles",
          "zh": "Different API Styles（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 403,
          "w": 283,
          "h": 49
        },
        {
          "id": "8IDks2DNFZ5nER7wK2Bu4",
          "label": "Resource modeling",
          "zh": "资源modeling",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 437,
          "w": 270,
          "h": 49
        },
        {
          "id": "Wwd-0PjrtViMFWxRGaQey",
          "label": "SOAP APIs",
          "zh": "SOAP APIs（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 456,
          "w": 270,
          "h": 49
        },
        {
          "id": "0yY_lWzWVOC_WmPoyHw8W",
          "label": "Naming Conventions",
          "zh": "Naming Conventions（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 490,
          "w": 270,
          "h": 49
        },
        {
          "id": "1DrqtOwxCuFtWQXQ6ZALp",
          "label": "gRPC APIs",
          "zh": "gRPC APIs（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 509,
          "w": 270,
          "h": 49
        },
        {
          "id": "itILK2SXvLvAjk1Kul7EK",
          "label": "Versioning Strategies",
          "zh": "版本管理Strategies",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 543,
          "w": 270,
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
      "zh": "阶段 05：构建JSON/RESTfulAPIs",
      "en": "Building JSON / RESTful APIs",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "MKVcPM2EzAr2_Ieyp9Fu3",
          "label": "GraphQL APIs",
          "zh": "GraphQL APIs（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 562,
          "w": 270,
          "h": 49
        },
        {
          "id": "awdoiCHz7Yc3kYac_iy-a",
          "label": "Building JSON / RESTful APIs",
          "zh": "构建JSON/RESTfulAPIs",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 592,
          "w": 283,
          "h": 49
        },
        {
          "id": "LByD1vhzunhY1uY1YGZHP",
          "label": "HATEOAS",
          "zh": "HATEOAS（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 596,
          "w": 270,
          "h": 49
        },
        {
          "id": "zXxEiM5HeOn7W-Vue0tQf",
          "label": "CRUD Operations",
          "zh": "CRUD Operations（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 697,
          "w": 270,
          "h": 49
        },
        {
          "id": "UQ8N7gcVpRLAYXgUNHBt5",
          "label": "Web Sockets",
          "zh": "Web Sockets（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 738,
          "w": 270,
          "h": 49
        },
        {
          "id": "dL3YellfAszBeJnm8KEYE",
          "label": "Filtering, Sorting & Search",
          "zh": "过滤,排序与Search（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 750,
          "w": 270,
          "h": 53
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
      "zh": "阶段 06：Real-time APIs（技术术语）",
      "en": "Real-time APIs",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "iNsXTtcIHsI_i-mCfjGYn",
          "label": "Server Sent Events",
          "zh": "SSE 服务端推送",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 791,
          "w": 270,
          "h": 49
        },
        {
          "id": "JE12g5cqnwmgeTle14Vxw",
          "label": "Real-time APIs",
          "zh": "Real-time APIs（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 791,
          "w": 283,
          "h": 49
        },
        {
          "id": "pgJDzP3pJjhjr5wTRtPJO",
          "label": "Pagination",
          "zh": "分页",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 807,
          "w": 133,
          "h": 49
        },
        {
          "id": "20KEgZH6cu_UokqWpV-9I",
          "label": "Idempotency",
          "zh": "幂等",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 319,
          "y": 807,
          "w": 133,
          "h": 49
        },
        {
          "id": "zeYJPEduAmLQHqq4kNBdx",
          "label": "Streaming Responses",
          "zh": "Streaming Responses（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 844,
          "w": 270,
          "h": 53
        },
        {
          "id": "O7wjldZ3yTA2s_F-UnJw_",
          "label": "Rate Limiting",
          "zh": "速率限流",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 914,
          "w": 270,
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
      "zh": "阶段 07：认证Methods",
      "en": "Authentication Methods",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "8tELdagrOaGCf3nMVs8t3",
          "label": "Error Handling",
          "zh": "Error处理",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 967,
          "w": 270,
          "h": 49
        },
        {
          "id": "5CxU3inGcSHp-TDg3BQiY",
          "label": "RFC 7807 -  Problem Details",
          "zh": "RFC 7807 -  Problem Details（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 182,
          "y": 1020,
          "w": 270,
          "h": 49
        },
        {
          "id": "0FzHERK5AeYL5wv1FBJbH",
          "label": "Basic Auth",
          "zh": "认证基础",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1034,
          "w": 133,
          "h": 49
        },
        {
          "id": "tWg68AHLIr1gIZA1za3jp",
          "label": "JWT",
          "zh": "JWT（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -468,
          "y": 1034,
          "w": 133,
          "h": 49
        },
        {
          "id": "QTH7sy9uQZWl6ieBz7erY",
          "label": "Token Based Auth",
          "zh": "基于令牌认证",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1087,
          "w": 270,
          "h": 49
        },
        {
          "id": "cQnQ9v3mH27MGNwetz3JW",
          "label": "Authentication Methods",
          "zh": "认证Methods",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 1087,
          "w": 283,
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
      "zh": "阶段 08：OAuth 2.0（技术术语）",
      "en": "OAuth 2.0",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "TLuNtQ6HKYQXmglyVk8-t",
          "label": "OAuth 2.0",
          "zh": "OAuth 2.0（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -604,
          "y": 1140,
          "w": 133,
          "h": 49
        },
        {
          "id": "jWekRGRa1131w92oS1HeW",
          "label": "OIDC",
          "zh": "OIDC（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -467,
          "y": 1140,
          "w": 133,
          "h": 49
        },
        {
          "id": "dZTe_kxIUQsc9N3w920aR",
          "label": "ABAC",
          "zh": "ABAC（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 175,
          "y": 1161,
          "w": 94,
          "h": 49
        },
        {
          "id": "_BXgYUlaYfpYrryXTw5n2",
          "label": "DAC",
          "zh": "DAC（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 273,
          "y": 1161,
          "w": 94,
          "h": 49
        },
        {
          "id": "nJWtUyn9bljh3T-q_adJK",
          "label": "PBAC",
          "zh": "PBAC（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 371,
          "y": 1161,
          "w": 94,
          "h": 49
        },
        {
          "id": "eQWoy4CpYP3TJL2bbhPB_",
          "label": "Session Based Auth",
          "zh": "基于会话认证",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1193,
          "w": 270,
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
      "zh": "阶段 09：授权Methods",
      "en": "Authorization Methods",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "nHbn8_sMY7J8o6ckbD-ER",
          "label": "Authorization Methods",
          "zh": "授权Methods",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 1212,
          "w": 283,
          "h": 49
        },
        {
          "id": "wFsbmMi5Ey9UyDADdbdPW",
          "label": "RBAC",
          "zh": "RBAC（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 175,
          "y": 1214,
          "w": 94,
          "h": 49
        },
        {
          "id": "tl1wXmOaj_zHL2o38VygO",
          "label": "MAC",
          "zh": "MAC（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 273,
          "y": 1214,
          "w": 94,
          "h": 49
        },
        {
          "id": "CCcY8UsGdd2pdBYHt9L4o",
          "label": "ReBAC",
          "zh": "ReBAC（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 371,
          "y": 1214,
          "w": 94,
          "h": 49
        },
        {
          "id": "0fSfFtskcJ0HNUZPf998l",
          "label": "Key Generation & Rotation",
          "zh": "密钥生成与轮换",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 171,
          "y": 1299,
          "w": 295,
          "h": 49
        },
        {
          "id": "5RY7AlfRQydjxWK65Z4cv",
          "label": "Swagger / Open API",
          "zh": "Swagger / Open API（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1348,
          "w": 270,
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
      "zh": "阶段 10：API密钥与管理",
      "en": "API Keys & Management",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "tzUJwXu_scwQHnPPT0oY-",
          "label": "API Keys & Management",
          "zh": "API密钥与管理",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 1352,
          "w": 283,
          "h": 49
        },
        {
          "id": "qjawwRcMl2-IDwk8ExpPL",
          "label": "Scopes & Permissions",
          "zh": "Scopes（技术术语）与Permissions（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 171,
          "y": 1352,
          "w": 295,
          "h": 49
        },
        {
          "id": "LxWHkhlikUaMT2G8YmVDQ",
          "label": "Readme.com",
          "zh": "Readme.com（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1400,
          "w": 270,
          "h": 49
        },
        {
          "id": "OpS2NX1lPTOtfjV1wKtC4",
          "label": "Stoplight",
          "zh": "Stoplight（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1452,
          "w": 270,
          "h": 49
        },
        {
          "id": "5R9yKfN1vItuv__HgCwP7",
          "label": "API Documentation Tools",
          "zh": "API文档Tools",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 1452,
          "w": 283,
          "h": 49
        },
        {
          "id": "KQAus72RGqx5f-3-YeJby",
          "label": "Postman",
          "zh": "Postman（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1505,
          "w": 270,
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
      "zh": "阶段 11：API安全",
      "en": "API Security",
      "desc": "按 roadmap.sh 原始顺序整理的第 11 组学习节点。",
      "nodes": [
        {
          "id": "q1yaf-RbHIQsOqfzjn4k4",
          "label": "Best Practices",
          "zh": "最佳实践",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 171,
          "y": 1513,
          "w": 295,
          "h": 49
        },
        {
          "id": "qIJ6dUppjAjOTA8eQbp0n",
          "label": "API Security",
          "zh": "API安全",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 1566,
          "w": 283,
          "h": 49
        },
        {
          "id": "G70wvcOM1Isrx5ZBvS2xP",
          "label": "Common Vulnerabilities",
          "zh": "常见Vulnerabilities",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 171,
          "y": 1566,
          "w": 295,
          "h": 49
        },
        {
          "id": "nQpczZUcn-TvrfT80dv0Q",
          "label": "Performance Metrics",
          "zh": "性能指标",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1609,
          "w": 250,
          "h": 49
        },
        {
          "id": "PrvRCR4HCdGar0vcUbG_a",
          "label": "Caching Strategies",
          "zh": "缓存Strategies",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1660,
          "w": 250,
          "h": 49
        },
        {
          "id": "p5wsniYnOS7cbHd92RxGk",
          "label": "Load Balancing",
          "zh": "负载Balancing",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1712,
          "w": 250,
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
      "zh": "阶段 12：API性能",
      "en": "API Performance",
      "desc": "按 roadmap.sh 原始顺序整理的第 12 组学习节点。",
      "nodes": [
        {
          "id": "d9ZXdU73jiCdeNHQv1_DH",
          "label": "API Performance",
          "zh": "API性能",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 1719,
          "w": 283,
          "h": 49
        },
        {
          "id": "tPVtRV818D8zAAuNbqPNa",
          "label": "Rate Limiting / Throttling",
          "zh": "速率限流/Throttling",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1763,
          "w": 250,
          "h": 49
        },
        {
          "id": "--mmTKhG58_elbUqyn90G",
          "label": "Synchronous vs Asynchronous APIs",
          "zh": "Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 1813,
          "w": 320,
          "h": 49
        },
        {
          "id": "-qdwBg7HvwlbLy3IKCRij",
          "label": "Profiling and Monitoring",
          "zh": "性能剖析与监控",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1814,
          "w": 250,
          "h": 49
        },
        {
          "id": "DQcAV59vr1-ZRnMfbLXpu",
          "label": "Performance Testing",
          "zh": "性能测试",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1866,
          "w": 250,
          "h": 49
        },
        {
          "id": "oMfOBkVsgiLvFLicOUdx6",
          "label": "Event Driven Architecture",
          "zh": "事件Driven架构",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 1866,
          "w": 320,
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
      "zh": "阶段 13：API集成模式",
      "en": "API Integration Patterns",
      "desc": "按 roadmap.sh 原始顺序整理的第 13 组学习节点。",
      "nodes": [
        {
          "id": "XD1vDtrRQFbLyKJaD1AlA",
          "label": "Error Handling / Retries",
          "zh": "Error处理/Retries",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 1917,
          "w": 250,
          "h": 49
        },
        {
          "id": "MJeUD4fOHaJu1oxk4uQ-x",
          "label": "API Gateways",
          "zh": "API Gateways（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 1919,
          "w": 320,
          "h": 49
        },
        {
          "id": "R3aRhqCslwhegMfHtxg5z",
          "label": "API Integration Patterns",
          "zh": "API集成模式",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 1921,
          "w": 283,
          "h": 49
        },
        {
          "id": "PPeBbooE121zrgNwpVTiA",
          "label": "Microservices Architecture",
          "zh": "Microservices架构",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 1972,
          "w": 320,
          "h": 49
        },
        {
          "id": "JvmW78cDm84GNhq8VEYZp",
          "label": "Unit Testing",
          "zh": "Unit测试",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 2004,
          "w": 240,
          "h": 49
        },
        {
          "id": "75NVxS0iwoQXxOHCkWQxH",
          "label": "Webhooks vs Polling",
          "zh": "Webhooks（技术术语）与Polling（技术术语）对比",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 2025,
          "w": 320,
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
      "zh": "阶段 14：API测试",
      "en": "API Testing",
      "desc": "按 roadmap.sh 原始顺序整理的第 14 组学习节点。",
      "nodes": [
        {
          "id": "qZELS5vw2feS7QfyD7spX",
          "label": "Integration Testing",
          "zh": "集成测试",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 2057,
          "w": 240,
          "h": 49
        },
        {
          "id": "v8iYctF_k40ES0_hHXS9N",
          "label": "BFF Pattern",
          "zh": "BFF模式",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 2078,
          "w": 320,
          "h": 49
        },
        {
          "id": "6lm3wy9WTAERTqXCn6pFt",
          "label": "Functional Testing",
          "zh": "Functional测试",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 2110,
          "w": 240,
          "h": 49
        },
        {
          "id": "Wpk4TvxcZOJgAoXjrOsZF",
          "label": "API Testing",
          "zh": "API测试",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 2110,
          "w": 283,
          "h": 49
        },
        {
          "id": "X68HXAAV-nKo-V4Fu1o72",
          "label": "Batch Processing",
          "zh": "Batch处理",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 2131,
          "w": 320,
          "h": 49
        },
        {
          "id": "7JNEx_cbqnAx3esvwZMOd",
          "label": "Load Testing",
          "zh": "负载测试",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 2163,
          "w": 240,
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
      "zh": "阶段 15：Observability（技术术语）",
      "en": "Observability",
      "desc": "按 roadmap.sh 原始顺序整理的第 15 组学习节点。",
      "nodes": [
        {
          "id": "IkPZel5zxXWIx90Qx7fZI",
          "label": "Messaging Queues",
          "zh": "Messaging Queues（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 2184,
          "w": 320,
          "h": 49
        },
        {
          "id": "bEVCT5QGY3uw0kIfAELKh",
          "label": "Mocking APIs",
          "zh": "Mocking APIs（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -604,
          "y": 2216,
          "w": 240,
          "h": 49
        },
        {
          "id": "oIZimEuBHCBGsK6b-s57f",
          "label": "Observability",
          "zh": "Observability（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 2239,
          "w": 283,
          "h": 49
        },
        {
          "id": "NqeBglhzukVMMEF9p2CXc",
          "label": "Contract Testing",
          "zh": "Contract测试",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -604,
          "y": 2269,
          "w": 240,
          "h": 49
        },
        {
          "id": "boYX1QcJullypfX4sevdy",
          "label": "Kafka",
          "zh": "Kafka（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 146,
          "y": 2288,
          "w": 158,
          "h": 49
        },
        {
          "id": "H22jAI2W5QLL-b1rq-c56",
          "label": "Rabbit MQ",
          "zh": "Rabbit MQ（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 308,
          "y": 2288,
          "w": 158,
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
      "zh": "阶段 16：APILifecycle管理",
      "en": "API Lifecycle Management",
      "desc": "按 roadmap.sh 原始顺序整理的第 16 组学习节点。",
      "nodes": [
        {
          "id": "At5exN7ZAx2IzY3cTCzHm",
          "label": "API Lifecycle Management",
          "zh": "APILifecycle管理",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 2353,
          "w": 283,
          "h": 49
        },
        {
          "id": "vZxdswGLHCPi5GSuXEcHJ",
          "label": "GDPR",
          "zh": "GDPR（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -610,
          "y": 2396,
          "w": 77,
          "h": 49
        },
        {
          "id": "a-_iIE7UdoXzD00fD9MxN",
          "label": "CCPA",
          "zh": "CCPA（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -529,
          "y": 2396,
          "w": 77,
          "h": 49
        },
        {
          "id": "mXCKtLUvwVJkHrpHzOecq",
          "label": "PII",
          "zh": "PII（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -448,
          "y": 2396,
          "w": 77,
          "h": 49
        },
        {
          "id": "J0enF8UTVzY3H4n3pbPIF",
          "label": "PCI DSS",
          "zh": "PCI DSS（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -610,
          "y": 2449,
          "w": 118,
          "h": 49
        },
        {
          "id": "W4WwTmgZGnWmiYsB0ezml",
          "label": "HIPAA",
          "zh": "HIPAA（技术术语）",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -488,
          "y": 2449,
          "w": 118,
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
      "zh": "阶段 17：Standards（技术术语）与合规",
      "en": "Standards and Compliance",
      "desc": "按 roadmap.sh 原始顺序整理的第 17 组学习节点。",
      "nodes": [
        {
          "id": "yvdfoly5WHHTq2Puss355",
          "label": "Standards and Compliance",
          "zh": "Standards（技术术语）与合规",
          "desc": "API 设计 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -211,
          "y": 2449,
          "w": 283,
          "h": 49
        }
      ],
      "index": 17,
      "mapX": 90,
      "mapY": 1514,
      "mapW": 430,
      "mapH": 156
    }
  ],
  "nodes": [
    {
      "id": "duKkpzPjUU_-8kyJGHqRX",
      "label": "Learn the Basics",
      "zh": "基础知识",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 74,
      "w": 283,
      "h": 49
    },
    {
      "id": "r8M3quACGO2piu0u_R4hO",
      "label": "What are APIs",
      "zh": "什么是APIs（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": -32,
      "w": 284,
      "h": 49
    },
    {
      "id": "2HdKzAIQi15pr3YHHrbPp",
      "label": "HTTP",
      "zh": "HTTP（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": -67,
      "w": 300,
      "h": 49
    },
    {
      "id": "ACALE93mL4gnX5ThRIdRp",
      "label": "HTTP Versions",
      "zh": "HTTP Versions（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -595,
      "y": -6,
      "w": 280,
      "h": 49
    },
    {
      "id": "rADHM-6NAxEjzmgiHefDX",
      "label": "HTTP Methods",
      "zh": "HTTP Methods（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -595,
      "y": 46,
      "w": 280,
      "h": 49
    },
    {
      "id": "7szYyzLifKsepNU0c2KnN",
      "label": "HTTP Status Codes",
      "zh": "HTTP状态Codes",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -595,
      "y": 99,
      "w": 280,
      "h": 49
    },
    {
      "id": "rE-0yibRH6B2UBKp351cf",
      "label": "HTTP Headers",
      "zh": "HTTP Headers（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -595,
      "y": 151,
      "w": 280,
      "h": 49
    },
    {
      "id": "P-rGIk50Bg7nFmWieAW07",
      "label": "URL, Query & Path Parameters",
      "zh": "URL,查询与路径参数",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 21,
      "w": 284,
      "h": 49
    },
    {
      "id": "UFuX8wcxZQ7dvaQF_2Yp8",
      "label": "Cookies",
      "zh": "Cookies（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -595,
      "y": 204,
      "w": 138,
      "h": 49
    },
    {
      "id": "TX_hg7EobNJhmWKsMCaT1",
      "label": "Content Negotiation",
      "zh": "Content Negotiation（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 74,
      "w": 284,
      "h": 49
    },
    {
      "id": "GRlsBogOlOwuqhMMPyHN3",
      "label": "CORS",
      "zh": "CORS（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -453,
      "y": 204,
      "w": 138,
      "h": 49
    },
    {
      "id": "KG3wO86F8Of27fU7QRcsn",
      "label": "Understand TCP / IP",
      "zh": "Understand TCP / IP（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 127,
      "w": 284,
      "h": 49
    },
    {
      "id": "v4nJYD9yiIEUviLPhVTCD",
      "label": "Basics of DNS",
      "zh": "基础ofDNS",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 180,
      "w": 284,
      "h": 49
    },
    {
      "id": "o8i093VQv-T5Qf1yGqU0R",
      "label": "Different API Styles",
      "zh": "Different API Styles（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 403,
      "w": 283,
      "h": 49
    },
    {
      "id": "BvwdASMvuNQ9DNgzdSZ4o",
      "label": "RESTful APIs",
      "zh": "RESTful APIs（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 350,
      "w": 270,
      "h": 49
    },
    {
      "id": "TVR-SkErlOHbDKLBGfxep",
      "label": "Simple JSON APIs",
      "zh": "Simple JSON APIs（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 403,
      "w": 270,
      "h": 49
    },
    {
      "id": "Wwd-0PjrtViMFWxRGaQey",
      "label": "SOAP APIs",
      "zh": "SOAP APIs（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 456,
      "w": 270,
      "h": 49
    },
    {
      "id": "MKVcPM2EzAr2_Ieyp9Fu3",
      "label": "GraphQL APIs",
      "zh": "GraphQL APIs（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 562,
      "w": 270,
      "h": 49
    },
    {
      "id": "awdoiCHz7Yc3kYac_iy-a",
      "label": "Building JSON / RESTful APIs",
      "zh": "构建JSON/RESTfulAPIs",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 592,
      "w": 283,
      "h": 49
    },
    {
      "id": "9WI_z34jIFXwoUQuChyRU",
      "label": "REST Principles",
      "zh": "REST Principles（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 331,
      "w": 270,
      "h": 49
    },
    {
      "id": "b3qRTLwCC_9uDoPGrd9Bu",
      "label": "URI Design",
      "zh": "URI设计",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 384,
      "w": 270,
      "h": 49
    },
    {
      "id": "itILK2SXvLvAjk1Kul7EK",
      "label": "Versioning Strategies",
      "zh": "版本管理Strategies",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 543,
      "w": 270,
      "h": 49
    },
    {
      "id": "pgJDzP3pJjhjr5wTRtPJO",
      "label": "Pagination",
      "zh": "分页",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 807,
      "w": 133,
      "h": 49
    },
    {
      "id": "O7wjldZ3yTA2s_F-UnJw_",
      "label": "Rate Limiting",
      "zh": "速率限流",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 914,
      "w": 270,
      "h": 49
    },
    {
      "id": "20KEgZH6cu_UokqWpV-9I",
      "label": "Idempotency",
      "zh": "幂等",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 319,
      "y": 807,
      "w": 133,
      "h": 49
    },
    {
      "id": "LByD1vhzunhY1uY1YGZHP",
      "label": "HATEOAS",
      "zh": "HATEOAS（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 596,
      "w": 270,
      "h": 49
    },
    {
      "id": "zXxEiM5HeOn7W-Vue0tQf",
      "label": "CRUD Operations",
      "zh": "CRUD Operations（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 697,
      "w": 270,
      "h": 49
    },
    {
      "id": "8tELdagrOaGCf3nMVs8t3",
      "label": "Error Handling",
      "zh": "Error处理",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 967,
      "w": 270,
      "h": 49
    },
    {
      "id": "5CxU3inGcSHp-TDg3BQiY",
      "label": "RFC 7807 -  Problem Details",
      "zh": "RFC 7807 -  Problem Details（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 1020,
      "w": 270,
      "h": 49
    },
    {
      "id": "qAolZHf_jp8hCdtqHZwC8",
      "label": "HTTP Caching",
      "zh": "HTTP缓存",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -595,
      "y": 257,
      "w": 280,
      "h": 49
    },
    {
      "id": "cQnQ9v3mH27MGNwetz3JW",
      "label": "Authentication Methods",
      "zh": "认证Methods",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 1087,
      "w": 283,
      "h": 49
    },
    {
      "id": "0FzHERK5AeYL5wv1FBJbH",
      "label": "Basic Auth",
      "zh": "认证基础",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1034,
      "w": 133,
      "h": 49
    },
    {
      "id": "QTH7sy9uQZWl6ieBz7erY",
      "label": "Token Based Auth",
      "zh": "基于令牌认证",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1087,
      "w": 270,
      "h": 49
    },
    {
      "id": "tWg68AHLIr1gIZA1za3jp",
      "label": "JWT",
      "zh": "JWT（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -468,
      "y": 1034,
      "w": 133,
      "h": 49
    },
    {
      "id": "TLuNtQ6HKYQXmglyVk8-t",
      "label": "OAuth 2.0",
      "zh": "OAuth 2.0（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -604,
      "y": 1140,
      "w": 133,
      "h": 49
    },
    {
      "id": "eQWoy4CpYP3TJL2bbhPB_",
      "label": "Session Based Auth",
      "zh": "基于会话认证",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1193,
      "w": 270,
      "h": 49
    },
    {
      "id": "nHbn8_sMY7J8o6ckbD-ER",
      "label": "Authorization Methods",
      "zh": "授权Methods",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 1212,
      "w": 283,
      "h": 49
    },
    {
      "id": "tl1wXmOaj_zHL2o38VygO",
      "label": "MAC",
      "zh": "MAC（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 273,
      "y": 1214,
      "w": 94,
      "h": 49
    },
    {
      "id": "CCcY8UsGdd2pdBYHt9L4o",
      "label": "ReBAC",
      "zh": "ReBAC（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 371,
      "y": 1214,
      "w": 94,
      "h": 49
    },
    {
      "id": "tzUJwXu_scwQHnPPT0oY-",
      "label": "API Keys & Management",
      "zh": "API密钥与管理",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 1352,
      "w": 283,
      "h": 49
    },
    {
      "id": "5R9yKfN1vItuv__HgCwP7",
      "label": "API Documentation Tools",
      "zh": "API文档Tools",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 1452,
      "w": 283,
      "h": 49
    },
    {
      "id": "5RY7AlfRQydjxWK65Z4cv",
      "label": "Swagger / Open API",
      "zh": "Swagger / Open API（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1348,
      "w": 270,
      "h": 49
    },
    {
      "id": "KQAus72RGqx5f-3-YeJby",
      "label": "Postman",
      "zh": "Postman（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1505,
      "w": 270,
      "h": 49
    },
    {
      "id": "LxWHkhlikUaMT2G8YmVDQ",
      "label": "Readme.com",
      "zh": "Readme.com（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1400,
      "w": 270,
      "h": 49
    },
    {
      "id": "OpS2NX1lPTOtfjV1wKtC4",
      "label": "Stoplight",
      "zh": "Stoplight（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1452,
      "w": 270,
      "h": 49
    },
    {
      "id": "qIJ6dUppjAjOTA8eQbp0n",
      "label": "API Security",
      "zh": "API安全",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 1566,
      "w": 283,
      "h": 49
    },
    {
      "id": "G70wvcOM1Isrx5ZBvS2xP",
      "label": "Common Vulnerabilities",
      "zh": "常见Vulnerabilities",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 171,
      "y": 1566,
      "w": 295,
      "h": 49
    },
    {
      "id": "q1yaf-RbHIQsOqfzjn4k4",
      "label": "Best Practices",
      "zh": "最佳实践",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 171,
      "y": 1513,
      "w": 295,
      "h": 49
    },
    {
      "id": "d9ZXdU73jiCdeNHQv1_DH",
      "label": "API Performance",
      "zh": "API性能",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 1719,
      "w": 283,
      "h": 49
    },
    {
      "id": "nQpczZUcn-TvrfT80dv0Q",
      "label": "Performance Metrics",
      "zh": "性能指标",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1609,
      "w": 250,
      "h": 49
    },
    {
      "id": "PrvRCR4HCdGar0vcUbG_a",
      "label": "Caching Strategies",
      "zh": "缓存Strategies",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1660,
      "w": 250,
      "h": 49
    },
    {
      "id": "p5wsniYnOS7cbHd92RxGk",
      "label": "Load Balancing",
      "zh": "负载Balancing",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1712,
      "w": 250,
      "h": 49
    },
    {
      "id": "tPVtRV818D8zAAuNbqPNa",
      "label": "Rate Limiting / Throttling",
      "zh": "速率限流/Throttling",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1763,
      "w": 250,
      "h": 49
    },
    {
      "id": "-qdwBg7HvwlbLy3IKCRij",
      "label": "Profiling and Monitoring",
      "zh": "性能剖析与监控",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1814,
      "w": 250,
      "h": 49
    },
    {
      "id": "DQcAV59vr1-ZRnMfbLXpu",
      "label": "Performance Testing",
      "zh": "性能测试",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1866,
      "w": 250,
      "h": 49
    },
    {
      "id": "R3aRhqCslwhegMfHtxg5z",
      "label": "API Integration Patterns",
      "zh": "API集成模式",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 1921,
      "w": 283,
      "h": 49
    },
    {
      "id": "--mmTKhG58_elbUqyn90G",
      "label": "Synchronous vs Asynchronous APIs",
      "zh": "Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 1813,
      "w": 320,
      "h": 49
    },
    {
      "id": "oMfOBkVsgiLvFLicOUdx6",
      "label": "Event Driven Architecture",
      "zh": "事件Driven架构",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 1866,
      "w": 320,
      "h": 49
    },
    {
      "id": "MJeUD4fOHaJu1oxk4uQ-x",
      "label": "API Gateways",
      "zh": "API Gateways（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 1919,
      "w": 320,
      "h": 49
    },
    {
      "id": "PPeBbooE121zrgNwpVTiA",
      "label": "Microservices Architecture",
      "zh": "Microservices架构",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 1972,
      "w": 320,
      "h": 49
    },
    {
      "id": "IkPZel5zxXWIx90Qx7fZI",
      "label": "Messaging Queues",
      "zh": "Messaging Queues（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 2184,
      "w": 320,
      "h": 49
    },
    {
      "id": "75NVxS0iwoQXxOHCkWQxH",
      "label": "Webhooks vs Polling",
      "zh": "Webhooks（技术术语）与Polling（技术术语）对比",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 2025,
      "w": 320,
      "h": 49
    },
    {
      "id": "X68HXAAV-nKo-V4Fu1o72",
      "label": "Batch Processing",
      "zh": "Batch处理",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 2131,
      "w": 320,
      "h": 49
    },
    {
      "id": "H22jAI2W5QLL-b1rq-c56",
      "label": "Rabbit MQ",
      "zh": "Rabbit MQ（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 308,
      "y": 2288,
      "w": 158,
      "h": 49
    },
    {
      "id": "boYX1QcJullypfX4sevdy",
      "label": "Kafka",
      "zh": "Kafka（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 2288,
      "w": 158,
      "h": 49
    },
    {
      "id": "Wpk4TvxcZOJgAoXjrOsZF",
      "label": "API Testing",
      "zh": "API测试",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 2110,
      "w": 283,
      "h": 49
    },
    {
      "id": "JvmW78cDm84GNhq8VEYZp",
      "label": "Unit Testing",
      "zh": "Unit测试",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 2004,
      "w": 240,
      "h": 49
    },
    {
      "id": "qZELS5vw2feS7QfyD7spX",
      "label": "Integration Testing",
      "zh": "集成测试",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 2057,
      "w": 240,
      "h": 49
    },
    {
      "id": "6lm3wy9WTAERTqXCn6pFt",
      "label": "Functional Testing",
      "zh": "Functional测试",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 2110,
      "w": 240,
      "h": 49
    },
    {
      "id": "7JNEx_cbqnAx3esvwZMOd",
      "label": "Load Testing",
      "zh": "负载测试",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 2163,
      "w": 240,
      "h": 49
    },
    {
      "id": "bEVCT5QGY3uw0kIfAELKh",
      "label": "Mocking APIs",
      "zh": "Mocking APIs（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -604,
      "y": 2216,
      "w": 240,
      "h": 49
    },
    {
      "id": "NqeBglhzukVMMEF9p2CXc",
      "label": "Contract Testing",
      "zh": "Contract测试",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -604,
      "y": 2269,
      "w": 240,
      "h": 49
    },
    {
      "id": "XD1vDtrRQFbLyKJaD1AlA",
      "label": "Error Handling / Retries",
      "zh": "Error处理/Retries",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 1917,
      "w": 250,
      "h": 49
    },
    {
      "id": "JE12g5cqnwmgeTle14Vxw",
      "label": "Real-time APIs",
      "zh": "Real-time APIs（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 791,
      "w": 283,
      "h": 49
    },
    {
      "id": "UQ8N7gcVpRLAYXgUNHBt5",
      "label": "Web Sockets",
      "zh": "Web Sockets（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 738,
      "w": 270,
      "h": 49
    },
    {
      "id": "iNsXTtcIHsI_i-mCfjGYn",
      "label": "Server Sent Events",
      "zh": "SSE 服务端推送",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 791,
      "w": 270,
      "h": 49
    },
    {
      "id": "yvdfoly5WHHTq2Puss355",
      "label": "Standards and Compliance",
      "zh": "Standards（技术术语）与合规",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 2449,
      "w": 283,
      "h": 49
    },
    {
      "id": "vZxdswGLHCPi5GSuXEcHJ",
      "label": "GDPR",
      "zh": "GDPR（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -610,
      "y": 2396,
      "w": 77,
      "h": 49
    },
    {
      "id": "At5exN7ZAx2IzY3cTCzHm",
      "label": "API Lifecycle Management",
      "zh": "APILifecycle管理",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 2353,
      "w": 283,
      "h": 49
    },
    {
      "id": "a-_iIE7UdoXzD00fD9MxN",
      "label": "CCPA",
      "zh": "CCPA（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -529,
      "y": 2396,
      "w": 77,
      "h": 49
    },
    {
      "id": "J0enF8UTVzY3H4n3pbPIF",
      "label": "PCI DSS",
      "zh": "PCI DSS（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -610,
      "y": 2449,
      "w": 118,
      "h": 49
    },
    {
      "id": "W4WwTmgZGnWmiYsB0ezml",
      "label": "HIPAA",
      "zh": "HIPAA（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -488,
      "y": 2449,
      "w": 118,
      "h": 49
    },
    {
      "id": "mXCKtLUvwVJkHrpHzOecq",
      "label": "PII",
      "zh": "PII（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -448,
      "y": 2396,
      "w": 77,
      "h": 49
    },
    {
      "id": "1DrqtOwxCuFtWQXQ6ZALp",
      "label": "gRPC APIs",
      "zh": "gRPC APIs（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 509,
      "w": 270,
      "h": 49
    },
    {
      "id": "_BXgYUlaYfpYrryXTw5n2",
      "label": "DAC",
      "zh": "DAC（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 273,
      "y": 1161,
      "w": 94,
      "h": 49
    },
    {
      "id": "dZTe_kxIUQsc9N3w920aR",
      "label": "ABAC",
      "zh": "ABAC（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 175,
      "y": 1161,
      "w": 94,
      "h": 49
    },
    {
      "id": "nJWtUyn9bljh3T-q_adJK",
      "label": "PBAC",
      "zh": "PBAC（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 371,
      "y": 1161,
      "w": 94,
      "h": 49
    },
    {
      "id": "wFsbmMi5Ey9UyDADdbdPW",
      "label": "RBAC",
      "zh": "RBAC（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 175,
      "y": 1214,
      "w": 94,
      "h": 49
    },
    {
      "id": "v8iYctF_k40ES0_hHXS9N",
      "label": "BFF Pattern",
      "zh": "BFF模式",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 146,
      "y": 2078,
      "w": 320,
      "h": 49
    },
    {
      "id": "8IDks2DNFZ5nER7wK2Bu4",
      "label": "Resource modeling",
      "zh": "资源modeling",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 437,
      "w": 270,
      "h": 49
    },
    {
      "id": "0yY_lWzWVOC_WmPoyHw8W",
      "label": "Naming Conventions",
      "zh": "Naming Conventions（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 490,
      "w": 270,
      "h": 49
    },
    {
      "id": "dL3YellfAszBeJnm8KEYE",
      "label": "Filtering, Sorting & Search",
      "zh": "过滤,排序与Search（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 182,
      "y": 750,
      "w": 270,
      "h": 53
    },
    {
      "id": "jWekRGRa1131w92oS1HeW",
      "label": "OIDC",
      "zh": "OIDC（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -467,
      "y": 1140,
      "w": 133,
      "h": 49
    },
    {
      "id": "qjawwRcMl2-IDwk8ExpPL",
      "label": "Scopes & Permissions",
      "zh": "Scopes（技术术语）与Permissions（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 171,
      "y": 1352,
      "w": 295,
      "h": 49
    },
    {
      "id": "0fSfFtskcJ0HNUZPf998l",
      "label": "Key Generation & Rotation",
      "zh": "密钥生成与轮换",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 171,
      "y": 1299,
      "w": 295,
      "h": 49
    },
    {
      "id": "zeYJPEduAmLQHqq4kNBdx",
      "label": "Streaming Responses",
      "zh": "Streaming Responses（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 844,
      "w": 270,
      "h": 53
    },
    {
      "id": "oIZimEuBHCBGsK6b-s57f",
      "label": "Observability",
      "zh": "Observability（技术术语）",
      "desc": "API 设计 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -211,
      "y": 2239,
      "w": 283,
      "h": 49
    }
  ],
  "tutorials": {
    "duKkpzPjUU_-8kyJGHqRX": {
      "id": "duKkpzPjUU_-8kyJGHqRX",
      "zh": "基础知识",
      "en": "Learn the Basics",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「基础知识」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**基础知识**（Learn the Basics）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「基础知识」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**基础知识**（Learn the Basics）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "r8M3quACGO2piu0u_R4hO": {
      "id": "r8M3quACGO2piu0u_R4hO",
      "zh": "什么是APIs（技术术语）",
      "en": "What are APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「什么是APIs（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**什么是APIs（技术术语）**（What are APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「什么是APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**什么是APIs（技术术语）**（What are APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "2HdKzAIQi15pr3YHHrbPp": {
      "id": "2HdKzAIQi15pr3YHHrbPp",
      "zh": "HTTP（技术术语）",
      "en": "HTTP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HTTP（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**HTTP（技术术语）**（HTTP）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
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
    "ACALE93mL4gnX5ThRIdRp": {
      "id": "ACALE93mL4gnX5ThRIdRp",
      "zh": "HTTP Versions（技术术语）",
      "en": "HTTP Versions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HTTP Versions（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**HTTP Versions（技术术语）**（HTTP Versions）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「HTTP Versions（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**HTTP Versions（技术术语）**（HTTP Versions）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "rADHM-6NAxEjzmgiHefDX": {
      "id": "rADHM-6NAxEjzmgiHefDX",
      "zh": "HTTP Methods（技术术语）",
      "en": "HTTP Methods",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HTTP Methods（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**HTTP Methods（技术术语）**（HTTP Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「HTTP Methods（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**HTTP Methods（技术术语）**（HTTP Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "7szYyzLifKsepNU0c2KnN": {
      "id": "7szYyzLifKsepNU0c2KnN",
      "zh": "HTTP状态Codes",
      "en": "HTTP Status Codes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HTTP状态Codes」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**HTTP状态Codes**（HTTP Status Codes）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「HTTP状态Codes」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**HTTP状态Codes**（HTTP Status Codes）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "rE-0yibRH6B2UBKp351cf": {
      "id": "rE-0yibRH6B2UBKp351cf",
      "zh": "HTTP Headers（技术术语）",
      "en": "HTTP Headers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HTTP Headers（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**HTTP Headers（技术术语）**（HTTP Headers）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「HTTP Headers（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**HTTP Headers（技术术语）**（HTTP Headers）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "P-rGIk50Bg7nFmWieAW07": {
      "id": "P-rGIk50Bg7nFmWieAW07",
      "zh": "URL,查询与路径参数",
      "en": "URL, Query & Path Parameters",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「URL,查询与路径参数」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**URL,查询与路径参数**（URL, Query & Path Parameters）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「URL,查询与路径参数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**URL,查询与路径参数**（URL, Query & Path Parameters）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "UFuX8wcxZQ7dvaQF_2Yp8": {
      "id": "UFuX8wcxZQ7dvaQF_2Yp8",
      "zh": "Cookies（技术术语）",
      "en": "Cookies",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Cookies（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Cookies（技术术语）**（Cookies）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Cookies（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Cookies（技术术语）**（Cookies）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "TX_hg7EobNJhmWKsMCaT1": {
      "id": "TX_hg7EobNJhmWKsMCaT1",
      "zh": "Content Negotiation（技术术语）",
      "en": "Content Negotiation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Content Negotiation（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Content Negotiation（技术术语）**（Content Negotiation）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Content Negotiation（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Content Negotiation（技术术语）**（Content Negotiation）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "GRlsBogOlOwuqhMMPyHN3": {
      "id": "GRlsBogOlOwuqhMMPyHN3",
      "zh": "CORS（技术术语）",
      "en": "CORS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「CORS（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**CORS（技术术语）**（CORS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「CORS（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**CORS（技术术语）**（CORS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "KG3wO86F8Of27fU7QRcsn": {
      "id": "KG3wO86F8Of27fU7QRcsn",
      "zh": "Understand TCP / IP（技术术语）",
      "en": "Understand TCP / IP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Understand TCP / IP（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Understand TCP / IP（技术术语）**（Understand TCP / IP）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Understand TCP / IP（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Understand TCP / IP（技术术语）**（Understand TCP / IP）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "v4nJYD9yiIEUviLPhVTCD": {
      "id": "v4nJYD9yiIEUviLPhVTCD",
      "zh": "基础ofDNS",
      "en": "Basics of DNS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「基础ofDNS」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**基础ofDNS**（Basics of DNS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「基础ofDNS」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**基础ofDNS**（Basics of DNS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "o8i093VQv-T5Qf1yGqU0R": {
      "id": "o8i093VQv-T5Qf1yGqU0R",
      "zh": "Different API Styles（技术术语）",
      "en": "Different API Styles",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Different API Styles（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Different API Styles（技术术语）**（Different API Styles）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Different API Styles（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Different API Styles（技术术语）**（Different API Styles）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "BvwdASMvuNQ9DNgzdSZ4o": {
      "id": "BvwdASMvuNQ9DNgzdSZ4o",
      "zh": "RESTful APIs（技术术语）",
      "en": "RESTful APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「RESTful APIs（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**RESTful APIs（技术术语）**（RESTful APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「RESTful APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**RESTful APIs（技术术语）**（RESTful APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "TVR-SkErlOHbDKLBGfxep": {
      "id": "TVR-SkErlOHbDKLBGfxep",
      "zh": "Simple JSON APIs（技术术语）",
      "en": "Simple JSON APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Simple JSON APIs（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Simple JSON APIs（技术术语）**（Simple JSON APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Simple JSON APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Simple JSON APIs（技术术语）**（Simple JSON APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "Wwd-0PjrtViMFWxRGaQey": {
      "id": "Wwd-0PjrtViMFWxRGaQey",
      "zh": "SOAP APIs（技术术语）",
      "en": "SOAP APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「SOAP APIs（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**SOAP APIs（技术术语）**（SOAP APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「SOAP APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**SOAP APIs（技术术语）**（SOAP APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "MKVcPM2EzAr2_Ieyp9Fu3": {
      "id": "MKVcPM2EzAr2_Ieyp9Fu3",
      "zh": "GraphQL APIs（技术术语）",
      "en": "GraphQL APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「GraphQL APIs（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**GraphQL APIs（技术术语）**（GraphQL APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「GraphQL APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**GraphQL APIs（技术术语）**（GraphQL APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "awdoiCHz7Yc3kYac_iy-a": {
      "id": "awdoiCHz7Yc3kYac_iy-a",
      "zh": "构建JSON/RESTfulAPIs",
      "en": "Building JSON / RESTful APIs",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「构建JSON/RESTfulAPIs」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**构建JSON/RESTfulAPIs**（Building JSON / RESTful APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「构建JSON/RESTfulAPIs」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**构建JSON/RESTfulAPIs**（Building JSON / RESTful APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "9WI_z34jIFXwoUQuChyRU": {
      "id": "9WI_z34jIFXwoUQuChyRU",
      "zh": "REST Principles（技术术语）",
      "en": "REST Principles",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「REST Principles（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**REST Principles（技术术语）**（REST Principles）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「REST Principles（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**REST Principles（技术术语）**（REST Principles）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "b3qRTLwCC_9uDoPGrd9Bu": {
      "id": "b3qRTLwCC_9uDoPGrd9Bu",
      "zh": "URI设计",
      "en": "URI Design",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「URI设计」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**URI设计**（URI Design）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「URI设计」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**URI设计**（URI Design）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "itILK2SXvLvAjk1Kul7EK": {
      "id": "itILK2SXvLvAjk1Kul7EK",
      "zh": "版本管理Strategies",
      "en": "Versioning Strategies",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「版本管理Strategies」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**版本管理Strategies**（Versioning Strategies）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「版本管理Strategies」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**版本管理Strategies**（Versioning Strategies）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "pgJDzP3pJjhjr5wTRtPJO": {
      "id": "pgJDzP3pJjhjr5wTRtPJO",
      "zh": "分页",
      "en": "Pagination",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「分页」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**分页**（Pagination）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「分页」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**分页**（Pagination）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "O7wjldZ3yTA2s_F-UnJw_": {
      "id": "O7wjldZ3yTA2s_F-UnJw_",
      "zh": "速率限流",
      "en": "Rate Limiting",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「速率限流」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**速率限流**（Rate Limiting）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「速率限流」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**速率限流**（Rate Limiting）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "20KEgZH6cu_UokqWpV-9I": {
      "id": "20KEgZH6cu_UokqWpV-9I",
      "zh": "幂等",
      "en": "Idempotency",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「幂等」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**幂等**（Idempotency）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「幂等」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**幂等**（Idempotency）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "LByD1vhzunhY1uY1YGZHP": {
      "id": "LByD1vhzunhY1uY1YGZHP",
      "zh": "HATEOAS（技术术语）",
      "en": "HATEOAS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HATEOAS（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**HATEOAS（技术术语）**（HATEOAS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「HATEOAS（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**HATEOAS（技术术语）**（HATEOAS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "zXxEiM5HeOn7W-Vue0tQf": {
      "id": "zXxEiM5HeOn7W-Vue0tQf",
      "zh": "CRUD Operations（技术术语）",
      "en": "CRUD Operations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「CRUD Operations（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**CRUD Operations（技术术语）**（CRUD Operations）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「CRUD Operations（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**CRUD Operations（技术术语）**（CRUD Operations）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "8tELdagrOaGCf3nMVs8t3": {
      "id": "8tELdagrOaGCf3nMVs8t3",
      "zh": "Error处理",
      "en": "Error Handling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Error处理」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Error处理**（Error Handling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Error处理」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Error处理**（Error Handling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "5CxU3inGcSHp-TDg3BQiY": {
      "id": "5CxU3inGcSHp-TDg3BQiY",
      "zh": "RFC 7807 -  Problem Details（技术术语）",
      "en": "RFC 7807 -  Problem Details",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「RFC 7807 -  Problem Details（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**RFC 7807 -  Problem Details（技术术语）**（RFC 7807 -  Problem Details）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「RFC 7807 -  Problem Details（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**RFC 7807 -  Problem Details（技术术语）**（RFC 7807 -  Problem Details）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "qAolZHf_jp8hCdtqHZwC8": {
      "id": "qAolZHf_jp8hCdtqHZwC8",
      "zh": "HTTP缓存",
      "en": "HTTP Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「HTTP缓存」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**HTTP缓存**（HTTP Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**HTTP缓存**（HTTP Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "cQnQ9v3mH27MGNwetz3JW": {
      "id": "cQnQ9v3mH27MGNwetz3JW",
      "zh": "认证Methods",
      "en": "Authentication Methods",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「认证Methods」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**认证Methods**（Authentication Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「认证Methods」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**认证Methods**（Authentication Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "0FzHERK5AeYL5wv1FBJbH": {
      "id": "0FzHERK5AeYL5wv1FBJbH",
      "zh": "认证基础",
      "en": "Basic Auth",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「认证基础」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**认证基础**（Basic Auth）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「认证基础」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**认证基础**（Basic Auth）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "QTH7sy9uQZWl6ieBz7erY": {
      "id": "QTH7sy9uQZWl6ieBz7erY",
      "zh": "基于令牌认证",
      "en": "Token Based Auth",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「基于令牌认证」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**基于令牌认证**（Token Based Auth）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「基于令牌认证」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**基于令牌认证**（Token Based Auth）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "tWg68AHLIr1gIZA1za3jp": {
      "id": "tWg68AHLIr1gIZA1za3jp",
      "zh": "JWT（技术术语）",
      "en": "JWT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「JWT（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**JWT（技术术语）**（JWT）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「JWT（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**JWT（技术术语）**（JWT）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "TLuNtQ6HKYQXmglyVk8-t": {
      "id": "TLuNtQ6HKYQXmglyVk8-t",
      "zh": "OAuth 2.0（技术术语）",
      "en": "OAuth 2.0",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「OAuth 2.0（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**OAuth 2.0（技术术语）**（OAuth 2.0）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「OAuth 2.0（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**OAuth 2.0（技术术语）**（OAuth 2.0）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "eQWoy4CpYP3TJL2bbhPB_": {
      "id": "eQWoy4CpYP3TJL2bbhPB_",
      "zh": "基于会话认证",
      "en": "Session Based Auth",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「基于会话认证」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**基于会话认证**（Session Based Auth）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**基于会话认证**（Session Based Auth）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "nHbn8_sMY7J8o6ckbD-ER": {
      "id": "nHbn8_sMY7J8o6ckbD-ER",
      "zh": "授权Methods",
      "en": "Authorization Methods",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「授权Methods」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**授权Methods**（Authorization Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「授权Methods」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**授权Methods**（Authorization Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "tl1wXmOaj_zHL2o38VygO": {
      "id": "tl1wXmOaj_zHL2o38VygO",
      "zh": "MAC（技术术语）",
      "en": "MAC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「MAC（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**MAC（技术术语）**（MAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「MAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**MAC（技术术语）**（MAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "CCcY8UsGdd2pdBYHt9L4o": {
      "id": "CCcY8UsGdd2pdBYHt9L4o",
      "zh": "ReBAC（技术术语）",
      "en": "ReBAC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「ReBAC（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**ReBAC（技术术语）**（ReBAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「ReBAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**ReBAC（技术术语）**（ReBAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "tzUJwXu_scwQHnPPT0oY-": {
      "id": "tzUJwXu_scwQHnPPT0oY-",
      "zh": "API密钥与管理",
      "en": "API Keys & Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「API密钥与管理」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**API密钥与管理**（API Keys & Management）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「API密钥与管理」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**API密钥与管理**（API Keys & Management）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "5R9yKfN1vItuv__HgCwP7": {
      "id": "5R9yKfN1vItuv__HgCwP7",
      "zh": "API文档Tools",
      "en": "API Documentation Tools",
      "level": "core",
      "nodeType": "topic",
      "analogy": "文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "story": "学习「API文档Tools」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**API文档Tools**（API Documentation Tools）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "why": "它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「API文档Tools」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**API文档Tools**（API Documentation Tools）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。"
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
    "5RY7AlfRQydjxWK65Z4cv": {
      "id": "5RY7AlfRQydjxWK65Z4cv",
      "zh": "Swagger / Open API（技术术语）",
      "en": "Swagger / Open API",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Swagger / Open API（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Swagger / Open API（技术术语）**（Swagger / Open API）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Swagger / Open API（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Swagger / Open API（技术术语）**（Swagger / Open API）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "KQAus72RGqx5f-3-YeJby": {
      "id": "KQAus72RGqx5f-3-YeJby",
      "zh": "Postman（技术术语）",
      "en": "Postman",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Postman（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Postman（技术术语）**（Postman）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Postman（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Postman（技术术语）**（Postman）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "LxWHkhlikUaMT2G8YmVDQ": {
      "id": "LxWHkhlikUaMT2G8YmVDQ",
      "zh": "Readme.com（技术术语）",
      "en": "Readme.com",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Readme.com（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Readme.com（技术术语）**（Readme.com）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Readme.com（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Readme.com（技术术语）**（Readme.com）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "OpS2NX1lPTOtfjV1wKtC4": {
      "id": "OpS2NX1lPTOtfjV1wKtC4",
      "zh": "Stoplight（技术术语）",
      "en": "Stoplight",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Stoplight（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Stoplight（技术术语）**（Stoplight）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Stoplight（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Stoplight（技术术语）**（Stoplight）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "qIJ6dUppjAjOTA8eQbp0n": {
      "id": "qIJ6dUppjAjOTA8eQbp0n",
      "zh": "API安全",
      "en": "API Security",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「API安全」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**API安全**（API Security）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「API安全」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**API安全**（API Security）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "G70wvcOM1Isrx5ZBvS2xP": {
      "id": "G70wvcOM1Isrx5ZBvS2xP",
      "zh": "常见Vulnerabilities",
      "en": "Common Vulnerabilities",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「常见Vulnerabilities」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**常见Vulnerabilities**（Common Vulnerabilities）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「常见Vulnerabilities」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**常见Vulnerabilities**（Common Vulnerabilities）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "q1yaf-RbHIQsOqfzjn4k4": {
      "id": "q1yaf-RbHIQsOqfzjn4k4",
      "zh": "最佳实践",
      "en": "Best Practices",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「最佳实践」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**最佳实践**（Best Practices）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「最佳实践」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**最佳实践**（Best Practices）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "d9ZXdU73jiCdeNHQv1_DH": {
      "id": "d9ZXdU73jiCdeNHQv1_DH",
      "zh": "API性能",
      "en": "API Performance",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「API性能」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**API性能**（API Performance）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「API性能」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**API性能**（API Performance）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "nQpczZUcn-TvrfT80dv0Q": {
      "id": "nQpczZUcn-TvrfT80dv0Q",
      "zh": "性能指标",
      "en": "Performance Metrics",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「性能指标」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**性能指标**（Performance Metrics）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「性能指标」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**性能指标**（Performance Metrics）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "PrvRCR4HCdGar0vcUbG_a": {
      "id": "PrvRCR4HCdGar0vcUbG_a",
      "zh": "缓存Strategies",
      "en": "Caching Strategies",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「缓存Strategies」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**缓存Strategies**（Caching Strategies）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**缓存Strategies**（Caching Strategies）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "p5wsniYnOS7cbHd92RxGk": {
      "id": "p5wsniYnOS7cbHd92RxGk",
      "zh": "负载Balancing",
      "en": "Load Balancing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「负载Balancing」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**负载Balancing**（Load Balancing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「负载Balancing」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**负载Balancing**（Load Balancing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "tPVtRV818D8zAAuNbqPNa": {
      "id": "tPVtRV818D8zAAuNbqPNa",
      "zh": "速率限流/Throttling",
      "en": "Rate Limiting / Throttling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「速率限流/Throttling」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**速率限流/Throttling**（Rate Limiting / Throttling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「速率限流/Throttling」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**速率限流/Throttling**（Rate Limiting / Throttling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "-qdwBg7HvwlbLy3IKCRij": {
      "id": "-qdwBg7HvwlbLy3IKCRij",
      "zh": "性能剖析与监控",
      "en": "Profiling and Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「性能剖析与监控」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**性能剖析与监控**（Profiling and Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「性能剖析与监控」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**性能剖析与监控**（Profiling and Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "DQcAV59vr1-ZRnMfbLXpu": {
      "id": "DQcAV59vr1-ZRnMfbLXpu",
      "zh": "性能测试",
      "en": "Performance Testing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「性能测试」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**性能测试**（Performance Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「性能测试」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**性能测试**（Performance Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "R3aRhqCslwhegMfHtxg5z": {
      "id": "R3aRhqCslwhegMfHtxg5z",
      "zh": "API集成模式",
      "en": "API Integration Patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「API集成模式」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**API集成模式**（API Integration Patterns）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「API集成模式」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**API集成模式**（API Integration Patterns）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "--mmTKhG58_elbUqyn90G": {
      "id": "--mmTKhG58_elbUqyn90G",
      "zh": "Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比",
      "en": "Synchronous vs Asynchronous APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比**（Synchronous vs Asynchronous APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比**（Synchronous vs Asynchronous APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "oMfOBkVsgiLvFLicOUdx6": {
      "id": "oMfOBkVsgiLvFLicOUdx6",
      "zh": "事件Driven架构",
      "en": "Event Driven Architecture",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「事件Driven架构」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**事件Driven架构**（Event Driven Architecture）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「事件Driven架构」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**事件Driven架构**（Event Driven Architecture）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "MJeUD4fOHaJu1oxk4uQ-x": {
      "id": "MJeUD4fOHaJu1oxk4uQ-x",
      "zh": "API Gateways（技术术语）",
      "en": "API Gateways",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「API Gateways（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**API Gateways（技术术语）**（API Gateways）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「API Gateways（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**API Gateways（技术术语）**（API Gateways）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "PPeBbooE121zrgNwpVTiA": {
      "id": "PPeBbooE121zrgNwpVTiA",
      "zh": "Microservices架构",
      "en": "Microservices Architecture",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Microservices架构」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Microservices架构**（Microservices Architecture）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Microservices架构」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Microservices架构**（Microservices Architecture）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "IkPZel5zxXWIx90Qx7fZI": {
      "id": "IkPZel5zxXWIx90Qx7fZI",
      "zh": "Messaging Queues（技术术语）",
      "en": "Messaging Queues",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Messaging Queues（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Messaging Queues（技术术语）**（Messaging Queues）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Messaging Queues（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Messaging Queues（技术术语）**（Messaging Queues）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "75NVxS0iwoQXxOHCkWQxH": {
      "id": "75NVxS0iwoQXxOHCkWQxH",
      "zh": "Webhooks（技术术语）与Polling（技术术语）对比",
      "en": "Webhooks vs Polling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Webhooks（技术术语）与Polling（技术术语）对比」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Webhooks（技术术语）与Polling（技术术语）对比**（Webhooks vs Polling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Webhooks（技术术语）与Polling（技术术语）对比」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Webhooks（技术术语）与Polling（技术术语）对比**（Webhooks vs Polling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "X68HXAAV-nKo-V4Fu1o72": {
      "id": "X68HXAAV-nKo-V4Fu1o72",
      "zh": "Batch处理",
      "en": "Batch Processing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「Batch处理」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Batch处理**（Batch Processing）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Batch处理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Batch处理**（Batch Processing）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
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
    "H22jAI2W5QLL-b1rq-c56": {
      "id": "H22jAI2W5QLL-b1rq-c56",
      "zh": "Rabbit MQ（技术术语）",
      "en": "Rabbit MQ",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Rabbit MQ（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Rabbit MQ（技术术语）**（Rabbit MQ）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Rabbit MQ（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Rabbit MQ（技术术语）**（Rabbit MQ）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "boYX1QcJullypfX4sevdy": {
      "id": "boYX1QcJullypfX4sevdy",
      "zh": "Kafka（技术术语）",
      "en": "Kafka",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Kafka（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Kafka（技术术语）**（Kafka）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Kafka（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Kafka（技术术语）**（Kafka）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "Wpk4TvxcZOJgAoXjrOsZF": {
      "id": "Wpk4TvxcZOJgAoXjrOsZF",
      "zh": "API测试",
      "en": "API Testing",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「API测试」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**API测试**（API Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「API测试」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**API测试**（API Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "JvmW78cDm84GNhq8VEYZp": {
      "id": "JvmW78cDm84GNhq8VEYZp",
      "zh": "Unit测试",
      "en": "Unit Testing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Unit测试」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Unit测试**（Unit Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Unit测试」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Unit测试**（Unit Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "qZELS5vw2feS7QfyD7spX": {
      "id": "qZELS5vw2feS7QfyD7spX",
      "zh": "集成测试",
      "en": "Integration Testing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「集成测试」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**集成测试**（Integration Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「集成测试」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**集成测试**（Integration Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "6lm3wy9WTAERTqXCn6pFt": {
      "id": "6lm3wy9WTAERTqXCn6pFt",
      "zh": "Functional测试",
      "en": "Functional Testing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Functional测试」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Functional测试**（Functional Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Functional测试」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Functional测试**（Functional Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "7JNEx_cbqnAx3esvwZMOd": {
      "id": "7JNEx_cbqnAx3esvwZMOd",
      "zh": "负载测试",
      "en": "Load Testing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「负载测试」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**负载测试**（Load Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「负载测试」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**负载测试**（Load Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "bEVCT5QGY3uw0kIfAELKh": {
      "id": "bEVCT5QGY3uw0kIfAELKh",
      "zh": "Mocking APIs（技术术语）",
      "en": "Mocking APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Mocking APIs（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Mocking APIs（技术术语）**（Mocking APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Mocking APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Mocking APIs（技术术语）**（Mocking APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "NqeBglhzukVMMEF9p2CXc": {
      "id": "NqeBglhzukVMMEF9p2CXc",
      "zh": "Contract测试",
      "en": "Contract Testing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Contract测试」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Contract测试**（Contract Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Contract测试」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Contract测试**（Contract Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "XD1vDtrRQFbLyKJaD1AlA": {
      "id": "XD1vDtrRQFbLyKJaD1AlA",
      "zh": "Error处理/Retries",
      "en": "Error Handling / Retries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Error处理/Retries」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Error处理/Retries**（Error Handling / Retries）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Error处理/Retries」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Error处理/Retries**（Error Handling / Retries）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "JE12g5cqnwmgeTle14Vxw": {
      "id": "JE12g5cqnwmgeTle14Vxw",
      "zh": "Real-time APIs（技术术语）",
      "en": "Real-time APIs",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Real-time APIs（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Real-time APIs（技术术语）**（Real-time APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Real-time APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Real-time APIs（技术术语）**（Real-time APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "UQ8N7gcVpRLAYXgUNHBt5": {
      "id": "UQ8N7gcVpRLAYXgUNHBt5",
      "zh": "Web Sockets（技术术语）",
      "en": "Web Sockets",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Web Sockets（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Web Sockets（技术术语）**（Web Sockets）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Web Sockets（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Web Sockets（技术术语）**（Web Sockets）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "iNsXTtcIHsI_i-mCfjGYn": {
      "id": "iNsXTtcIHsI_i-mCfjGYn",
      "zh": "SSE 服务端推送",
      "en": "Server Sent Events",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「SSE 服务端推送」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**SSE 服务端推送**（Server Sent Events）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「SSE 服务端推送」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**SSE 服务端推送**（Server Sent Events）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "yvdfoly5WHHTq2Puss355": {
      "id": "yvdfoly5WHHTq2Puss355",
      "zh": "Standards（技术术语）与合规",
      "en": "Standards and Compliance",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Standards（技术术语）与合规」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Standards（技术术语）与合规**（Standards and Compliance）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Standards（技术术语）与合规」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Standards（技术术语）与合规**（Standards and Compliance）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "vZxdswGLHCPi5GSuXEcHJ": {
      "id": "vZxdswGLHCPi5GSuXEcHJ",
      "zh": "GDPR（技术术语）",
      "en": "GDPR",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「GDPR（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**GDPR（技术术语）**（GDPR）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「GDPR（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**GDPR（技术术语）**（GDPR）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "At5exN7ZAx2IzY3cTCzHm": {
      "id": "At5exN7ZAx2IzY3cTCzHm",
      "zh": "APILifecycle管理",
      "en": "API Lifecycle Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「APILifecycle管理」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**APILifecycle管理**（API Lifecycle Management）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「APILifecycle管理」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**APILifecycle管理**（API Lifecycle Management）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "a-_iIE7UdoXzD00fD9MxN": {
      "id": "a-_iIE7UdoXzD00fD9MxN",
      "zh": "CCPA（技术术语）",
      "en": "CCPA",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「CCPA（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**CCPA（技术术语）**（CCPA）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「CCPA（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**CCPA（技术术语）**（CCPA）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "J0enF8UTVzY3H4n3pbPIF": {
      "id": "J0enF8UTVzY3H4n3pbPIF",
      "zh": "PCI DSS（技术术语）",
      "en": "PCI DSS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「PCI DSS（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**PCI DSS（技术术语）**（PCI DSS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「PCI DSS（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**PCI DSS（技术术语）**（PCI DSS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "W4WwTmgZGnWmiYsB0ezml": {
      "id": "W4WwTmgZGnWmiYsB0ezml",
      "zh": "HIPAA（技术术语）",
      "en": "HIPAA",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HIPAA（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**HIPAA（技术术语）**（HIPAA）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「HIPAA（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**HIPAA（技术术语）**（HIPAA）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "mXCKtLUvwVJkHrpHzOecq": {
      "id": "mXCKtLUvwVJkHrpHzOecq",
      "zh": "PII（技术术语）",
      "en": "PII",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「PII（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**PII（技术术语）**（PII）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「PII（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**PII（技术术语）**（PII）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "1DrqtOwxCuFtWQXQ6ZALp": {
      "id": "1DrqtOwxCuFtWQXQ6ZALp",
      "zh": "gRPC APIs（技术术语）",
      "en": "gRPC APIs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「gRPC APIs（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**gRPC APIs（技术术语）**（gRPC APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「gRPC APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**gRPC APIs（技术术语）**（gRPC APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "_BXgYUlaYfpYrryXTw5n2": {
      "id": "_BXgYUlaYfpYrryXTw5n2",
      "zh": "DAC（技术术语）",
      "en": "DAC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「DAC（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**DAC（技术术语）**（DAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「DAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**DAC（技术术语）**（DAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "dZTe_kxIUQsc9N3w920aR": {
      "id": "dZTe_kxIUQsc9N3w920aR",
      "zh": "ABAC（技术术语）",
      "en": "ABAC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「ABAC（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**ABAC（技术术语）**（ABAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「ABAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**ABAC（技术术语）**（ABAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "nJWtUyn9bljh3T-q_adJK": {
      "id": "nJWtUyn9bljh3T-q_adJK",
      "zh": "PBAC（技术术语）",
      "en": "PBAC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「PBAC（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**PBAC（技术术语）**（PBAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「PBAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**PBAC（技术术语）**（PBAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "wFsbmMi5Ey9UyDADdbdPW": {
      "id": "wFsbmMi5Ey9UyDADdbdPW",
      "zh": "RBAC（技术术语）",
      "en": "RBAC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「RBAC（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**RBAC（技术术语）**（RBAC）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「RBAC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**RBAC（技术术语）**（RBAC）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "v8iYctF_k40ES0_hHXS9N": {
      "id": "v8iYctF_k40ES0_hHXS9N",
      "zh": "BFF模式",
      "en": "BFF Pattern",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「BFF模式」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**BFF模式**（BFF Pattern）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「BFF模式」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**BFF模式**（BFF Pattern）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "8IDks2DNFZ5nER7wK2Bu4": {
      "id": "8IDks2DNFZ5nER7wK2Bu4",
      "zh": "资源modeling",
      "en": "Resource modeling",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「资源modeling」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**资源modeling**（Resource modeling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「资源modeling」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**资源modeling**（Resource modeling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "0yY_lWzWVOC_WmPoyHw8W": {
      "id": "0yY_lWzWVOC_WmPoyHw8W",
      "zh": "Naming Conventions（技术术语）",
      "en": "Naming Conventions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Naming Conventions（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Naming Conventions（技术术语）**（Naming Conventions）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Naming Conventions（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Naming Conventions（技术术语）**（Naming Conventions）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "dL3YellfAszBeJnm8KEYE": {
      "id": "dL3YellfAszBeJnm8KEYE",
      "zh": "过滤,排序与Search（技术术语）",
      "en": "Filtering, Sorting & Search",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「过滤,排序与Search（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**过滤,排序与Search（技术术语）**（Filtering, Sorting & Search）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「过滤,排序与Search（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**过滤,排序与Search（技术术语）**（Filtering, Sorting & Search）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "jWekRGRa1131w92oS1HeW": {
      "id": "jWekRGRa1131w92oS1HeW",
      "zh": "OIDC（技术术语）",
      "en": "OIDC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「OIDC（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**OIDC（技术术语）**（OIDC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「OIDC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**OIDC（技术术语）**（OIDC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "qjawwRcMl2-IDwk8ExpPL": {
      "id": "qjawwRcMl2-IDwk8ExpPL",
      "zh": "Scopes（技术术语）与Permissions（技术术语）",
      "en": "Scopes & Permissions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「Scopes（技术术语）与Permissions（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Scopes（技术术语）与Permissions（技术术语）**（Scopes & Permissions）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Scopes（技术术语）与Permissions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Scopes（技术术语）与Permissions（技术术语）**（Scopes & Permissions）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
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
    "0fSfFtskcJ0HNUZPf998l": {
      "id": "0fSfFtskcJ0HNUZPf998l",
      "zh": "密钥生成与轮换",
      "en": "Key Generation & Rotation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「密钥生成与轮换」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**密钥生成与轮换**（Key Generation & Rotation）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「密钥生成与轮换」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**密钥生成与轮换**（Key Generation & Rotation）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "zeYJPEduAmLQHqq4kNBdx": {
      "id": "zeYJPEduAmLQHqq4kNBdx",
      "zh": "Streaming Responses（技术术语）",
      "en": "Streaming Responses",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Streaming Responses（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Streaming Responses（技术术语）**（Streaming Responses）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Streaming Responses（技术术语）**（Streaming Responses）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "oIZimEuBHCBGsK6b-s57f": {
      "id": "oIZimEuBHCBGsK6b-s57f",
      "zh": "Observability（技术术语）",
      "en": "Observability",
      "level": "core",
      "nodeType": "topic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「Observability（技术术语）」时，先把它放进 API 设计 的真实场景，而不是孤立背术语。",
      "what": "**Observability（技术术语）**（Observability）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 API 设计 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「Observability（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**Observability（技术术语）**（Observability）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    }
  },
  "lessons": {
    "duKkpzPjUU_-8kyJGHqRX": {
      "scene": "学习「基础知识」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "基础知识（Learn the Basics）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「基础知识」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「基础知识」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「基础知识」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "r8M3quACGO2piu0u_R4hO": {
      "scene": "学习「什么是APIs（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "什么是APIs（技术术语）（What are APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「什么是APIs（技术术语）」对应的资源、HTTP 方法和 URL …",
          "text": "明确「什么是APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「什么是APIs（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "2HdKzAIQi15pr3YHHrbPp": {
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
    "ACALE93mL4gnX5ThRIdRp": {
      "scene": "学习「HTTP Versions（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "HTTP Versions（技术术语）（HTTP Versions）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「HTTP Versions（技术术语）」对应的资源、HTTP 方法…",
          "text": "明确「HTTP Versions（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「HTTP Versions（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "rADHM-6NAxEjzmgiHefDX": {
      "scene": "学习「HTTP Methods（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "HTTP Methods（技术术语）（HTTP Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「HTTP Methods（技术术语）」对应的资源、HTTP 方法和…",
          "text": "明确「HTTP Methods（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「HTTP Methods（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "7szYyzLifKsepNU0c2KnN": {
      "scene": "学习「HTTP状态Codes」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "HTTP状态Codes（HTTP Status Codes）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「HTTP状态Codes」对应的资源、HTTP 方法和 URL 路径…",
          "text": "明确「HTTP状态Codes」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「HTTP状态Codes」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "rE-0yibRH6B2UBKp351cf": {
      "scene": "学习「HTTP Headers（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "HTTP Headers（技术术语）（HTTP Headers）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「HTTP Headers（技术术语）」对应的资源、HTTP 方法和…",
          "text": "明确「HTTP Headers（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「HTTP Headers（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "P-rGIk50Bg7nFmWieAW07": {
      "scene": "学习「URL,查询与路径参数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "URL,查询与路径参数（URL, Query & Path Parameters）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「URL,查询与路径参数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「URL,查询与路径参数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「URL,查询与路径参数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "UFuX8wcxZQ7dvaQF_2Yp8": {
      "scene": "学习「Cookies（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Cookies（技术术语）（Cookies）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Cookies（技术术语）」对应的资源、HTTP 方法和 URL …",
          "text": "明确「Cookies（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Cookies（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "TX_hg7EobNJhmWKsMCaT1": {
      "scene": "学习「Content Negotiation（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Content Negotiation（技术术语）（Content Negotiation）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Content Negotiation（技术术语）」对应的资源、H…",
          "text": "明确「Content Negotiation（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Content Negotiation（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "GRlsBogOlOwuqhMMPyHN3": {
      "scene": "学习「CORS（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "CORS（技术术语）（CORS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「CORS（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「CORS（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「CORS（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "KG3wO86F8Of27fU7QRcsn": {
      "scene": "学习「Understand TCP / IP（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Understand TCP / IP（技术术语）（Understand TCP / IP）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Understand TCP / IP（技术术语）」对应的资源、H…",
          "text": "明确「Understand TCP / IP（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Understand TCP / IP（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "v4nJYD9yiIEUviLPhVTCD": {
      "scene": "学习「基础ofDNS」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "基础ofDNS（Basics of DNS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「基础ofDNS」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「基础ofDNS」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「基础ofDNS」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "o8i093VQv-T5Qf1yGqU0R": {
      "scene": "学习「Different API Styles（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Different API Styles（技术术语）（Different API Styles）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Different API Styles（技术术语）」对应的资源、…",
          "text": "明确「Different API Styles（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Different API Styles（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "BvwdASMvuNQ9DNgzdSZ4o": {
      "scene": "学习「RESTful APIs（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "RESTful APIs（技术术语）（RESTful APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「RESTful APIs（技术术语）」对应的资源、HTTP 方法和…",
          "text": "明确「RESTful APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「RESTful APIs（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "TVR-SkErlOHbDKLBGfxep": {
      "scene": "学习「Simple JSON APIs（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Simple JSON APIs（技术术语）（Simple JSON APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Simple JSON APIs（技术术语）」对应的资源、HTTP…",
          "text": "明确「Simple JSON APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Simple JSON APIs（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "Wwd-0PjrtViMFWxRGaQey": {
      "scene": "学习「SOAP APIs（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "SOAP APIs（技术术语）（SOAP APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「SOAP APIs（技术术语）」对应的资源、HTTP 方法和 UR…",
          "text": "明确「SOAP APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「SOAP APIs（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "MKVcPM2EzAr2_Ieyp9Fu3": {
      "scene": "学习「GraphQL APIs（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "GraphQL APIs（技术术语）（GraphQL APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「GraphQL APIs（技术术语）」对应的资源、HTTP 方法和…",
          "text": "明确「GraphQL APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「GraphQL APIs（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "awdoiCHz7Yc3kYac_iy-a": {
      "scene": "学习「构建JSON/RESTfulAPIs」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "构建JSON/RESTfulAPIs（Building JSON / RESTful APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「构建JSON/RESTfulAPIs」对应的资源、HTTP 方法和…",
          "text": "明确「构建JSON/RESTfulAPIs」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「构建JSON/RESTfulAPIs」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "9WI_z34jIFXwoUQuChyRU": {
      "scene": "学习「REST Principles（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "REST Principles（技术术语）（REST Principles）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「REST Principles（技术术语）」对应的资源、HTTP …",
          "text": "明确「REST Principles（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「REST Principles（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "b3qRTLwCC_9uDoPGrd9Bu": {
      "scene": "学习「URI设计」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "URI设计（URI Design）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「URI设计」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「URI设计」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「URI设计」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "itILK2SXvLvAjk1Kul7EK": {
      "scene": "学习「版本管理Strategies」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "版本管理Strategies（Versioning Strategies）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「版本管理Strategies」对应的资源、HTTP 方法和 URL…",
          "text": "明确「版本管理Strategies」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「版本管理Strategies」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "pgJDzP3pJjhjr5wTRtPJO": {
      "scene": "学习「分页」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "分页（Pagination）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「分页」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「分页」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「分页」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "O7wjldZ3yTA2s_F-UnJw_": {
      "scene": "学习「速率限流」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "速率限流（Rate Limiting）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「速率限流」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「速率限流」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「速率限流」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "20KEgZH6cu_UokqWpV-9I": {
      "scene": "学习「幂等」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "幂等（Idempotency）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「幂等」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「幂等」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「幂等」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "LByD1vhzunhY1uY1YGZHP": {
      "scene": "学习「HATEOAS（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "HATEOAS（技术术语）（HATEOAS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「HATEOAS（技术术语）」对应的资源、HTTP 方法和 URL …",
          "text": "明确「HATEOAS（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「HATEOAS（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "zXxEiM5HeOn7W-Vue0tQf": {
      "scene": "学习「CRUD Operations（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "CRUD Operations（技术术语）（CRUD Operations）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「CRUD Operations（技术术语）」对应的资源、HTTP …",
          "text": "明确「CRUD Operations（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「CRUD Operations（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "8tELdagrOaGCf3nMVs8t3": {
      "scene": "学习「Error处理」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Error处理（Error Handling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Error处理」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「Error处理」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Error处理」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "5CxU3inGcSHp-TDg3BQiY": {
      "scene": "学习「RFC 7807 -  Problem Details（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "RFC 7807 -  Problem Details（技术术语）（RFC 7807 -  Problem Details）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「RFC 7807 -  Problem Details（技术术语）…",
          "text": "明确「RFC 7807 -  Problem Details（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「RFC 7807 -  Problem Details（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "qAolZHf_jp8hCdtqHZwC8": {
      "scene": "学习「HTTP缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "HTTP缓存（HTTP Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「HTTP缓存」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "cQnQ9v3mH27MGNwetz3JW": {
      "scene": "学习「认证Methods」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "认证Methods（Authentication Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「认证Methods」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「认证Methods」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「认证Methods」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "0FzHERK5AeYL5wv1FBJbH": {
      "scene": "学习「认证基础」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "认证基础（Basic Auth）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「认证基础」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「认证基础」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「认证基础」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "QTH7sy9uQZWl6ieBz7erY": {
      "scene": "学习「基于令牌认证」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "基于令牌认证（Token Based Auth）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「基于令牌认证」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「基于令牌认证」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「基于令牌认证」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "tWg68AHLIr1gIZA1za3jp": {
      "scene": "学习「JWT（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "JWT（技术术语）（JWT）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「JWT（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「JWT（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「JWT（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "TLuNtQ6HKYQXmglyVk8-t": {
      "scene": "学习「OAuth 2.0（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "OAuth 2.0（技术术语）（OAuth 2.0）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「OAuth 2.0（技术术语）」对应的资源、HTTP 方法和 UR…",
          "text": "明确「OAuth 2.0（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「OAuth 2.0（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "eQWoy4CpYP3TJL2bbhPB_": {
      "scene": "学习「基于会话认证」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "基于会话认证（Session Based Auth）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「基于会话认证」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "nHbn8_sMY7J8o6ckbD-ER": {
      "scene": "学习「授权Methods」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "授权Methods（Authorization Methods）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「授权Methods」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「授权Methods」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「授权Methods」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "tl1wXmOaj_zHL2o38VygO": {
      "scene": "学习「MAC（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "MAC（技术术语）（MAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「MAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「MAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「MAC（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "CCcY8UsGdd2pdBYHt9L4o": {
      "scene": "学习「ReBAC（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "ReBAC（技术术语）（ReBAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「ReBAC（技术术语）」对应的资源、HTTP 方法和 URL 路径…",
          "text": "明确「ReBAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「ReBAC（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "tzUJwXu_scwQHnPPT0oY-": {
      "scene": "学习「API密钥与管理」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "API密钥与管理（API Keys & Management）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「API密钥与管理」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「API密钥与管理」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「API密钥与管理」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "5R9yKfN1vItuv__HgCwP7": {
      "scene": "学习「API文档Tools」：文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "core": "API文档Tools（API Documentation Tools）。它解决的是“用文档结构保存灵活数据，并围绕查询模式组织数据”的问题。 文档数据库不是“没有设计”，而是把设计重心从表关系转到文档边界、嵌套结构和查询路径。",
      "route": [
        {
          "label": "定文档边界",
          "title": "「API文档Tools」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「API文档Tools」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「API文档Tools」不等于会用。重点看 定文档边界 → 按查询建索引 → 做聚合/复制 → 验证读写路径 这条链路。",
      "experiment": "建立 posts 集合，插入含 author/comments 的文档，分别做一次 find、索引查询和聚合统计。"
    },
    "5RY7AlfRQydjxWK65Z4cv": {
      "scene": "学习「Swagger / Open API（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Swagger / Open API（技术术语）（Swagger / Open API）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Swagger / Open API（技术术语）」对应的资源、HT…",
          "text": "明确「Swagger / Open API（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Swagger / Open API（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "KQAus72RGqx5f-3-YeJby": {
      "scene": "学习「Postman（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Postman（技术术语）（Postman）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Postman（技术术语）」对应的资源、HTTP 方法和 URL …",
          "text": "明确「Postman（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Postman（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "LxWHkhlikUaMT2G8YmVDQ": {
      "scene": "学习「Readme.com（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Readme.com（技术术语）（Readme.com）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Readme.com（技术术语）」对应的资源、HTTP 方法和 U…",
          "text": "明确「Readme.com（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Readme.com（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "OpS2NX1lPTOtfjV1wKtC4": {
      "scene": "学习「Stoplight（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Stoplight（技术术语）（Stoplight）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Stoplight（技术术语）」对应的资源、HTTP 方法和 UR…",
          "text": "明确「Stoplight（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Stoplight（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "qIJ6dUppjAjOTA8eQbp0n": {
      "scene": "学习「API安全」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "API安全（API Security）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「API安全」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「API安全」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「API安全」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "G70wvcOM1Isrx5ZBvS2xP": {
      "scene": "学习「常见Vulnerabilities」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "常见Vulnerabilities（Common Vulnerabilities）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「常见Vulnerabilities」对应的资源、HTTP 方法和 …",
          "text": "明确「常见Vulnerabilities」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「常见Vulnerabilities」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "q1yaf-RbHIQsOqfzjn4k4": {
      "scene": "学习「最佳实践」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "最佳实践（Best Practices）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「最佳实践」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「最佳实践」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「最佳实践」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "d9ZXdU73jiCdeNHQv1_DH": {
      "scene": "学习「API性能」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "API性能（API Performance）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「API性能」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「API性能」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「API性能」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "nQpczZUcn-TvrfT80dv0Q": {
      "scene": "学习「性能指标」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "性能指标（Performance Metrics）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「性能指标」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「性能指标」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「性能指标」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "PrvRCR4HCdGar0vcUbG_a": {
      "scene": "学习「缓存Strategies」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "缓存Strategies（Caching Strategies）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「缓存Strategies」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "p5wsniYnOS7cbHd92RxGk": {
      "scene": "学习「负载Balancing」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "负载Balancing（Load Balancing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「负载Balancing」对应的资源、HTTP 方法和 URL 路径…",
          "text": "明确「负载Balancing」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「负载Balancing」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "tPVtRV818D8zAAuNbqPNa": {
      "scene": "学习「速率限流/Throttling」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "速率限流/Throttling（Rate Limiting / Throttling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「速率限流/Throttling」对应的资源、HTTP 方法和 UR…",
          "text": "明确「速率限流/Throttling」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「速率限流/Throttling」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "-qdwBg7HvwlbLy3IKCRij": {
      "scene": "学习「性能剖析与监控」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "性能剖析与监控（Profiling and Monitoring）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「性能剖析与监控」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「性能剖析与监控」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「性能剖析与监控」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "DQcAV59vr1-ZRnMfbLXpu": {
      "scene": "学习「性能测试」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "性能测试（Performance Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「性能测试」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「性能测试」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「性能测试」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "R3aRhqCslwhegMfHtxg5z": {
      "scene": "学习「API集成模式」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "API集成模式（API Integration Patterns）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「API集成模式」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「API集成模式」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「API集成模式」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "--mmTKhG58_elbUqyn90G": {
      "scene": "学习「Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比（Synchronous vs Asynchronous APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Synchronous（技术术语）与AsynchronousAPI…",
          "text": "明确「Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Synchronous（技术术语）与AsynchronousAPIs（技术术语）对比」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "oMfOBkVsgiLvFLicOUdx6": {
      "scene": "学习「事件Driven架构」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "事件Driven架构（Event Driven Architecture）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「事件Driven架构」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「事件Driven架构」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「事件Driven架构」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "MJeUD4fOHaJu1oxk4uQ-x": {
      "scene": "学习「API Gateways（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "API Gateways（技术术语）（API Gateways）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「API Gateways（技术术语）」对应的资源、HTTP 方法和…",
          "text": "明确「API Gateways（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「API Gateways（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "PPeBbooE121zrgNwpVTiA": {
      "scene": "学习「Microservices架构」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Microservices架构（Microservices Architecture）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Microservices架构」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Microservices架构」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Microservices架构」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "IkPZel5zxXWIx90Qx7fZI": {
      "scene": "学习「Messaging Queues（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Messaging Queues（技术术语）（Messaging Queues）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Messaging Queues（技术术语）」对应的资源、HTTP…",
          "text": "明确「Messaging Queues（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Messaging Queues（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "75NVxS0iwoQXxOHCkWQxH": {
      "scene": "学习「Webhooks（技术术语）与Polling（技术术语）对比」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Webhooks（技术术语）与Polling（技术术语）对比（Webhooks vs Polling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Webhooks（技术术语）与Polling（技术术语）对比」对应…",
          "text": "明确「Webhooks（技术术语）与Polling（技术术语）对比」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Webhooks（技术术语）与Polling（技术术语）对比」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "X68HXAAV-nKo-V4Fu1o72": {
      "scene": "学习「Batch处理」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "Batch处理（Batch Processing）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「Batch处理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Batch处理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Batch处理」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "H22jAI2W5QLL-b1rq-c56": {
      "scene": "学习「Rabbit MQ（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Rabbit MQ（技术术语）（Rabbit MQ）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Rabbit MQ（技术术语）」对应的资源、HTTP 方法和 UR…",
          "text": "明确「Rabbit MQ（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Rabbit MQ（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "boYX1QcJullypfX4sevdy": {
      "scene": "学习「Kafka（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Kafka（技术术语）（Kafka）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Kafka（技术术语）」对应的资源、HTTP 方法和 URL 路径…",
          "text": "明确「Kafka（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Kafka（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "Wpk4TvxcZOJgAoXjrOsZF": {
      "scene": "学习「API测试」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "API测试（API Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「API测试」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「API测试」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「API测试」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "JvmW78cDm84GNhq8VEYZp": {
      "scene": "学习「Unit测试」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Unit测试（Unit Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Unit测试」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「Unit测试」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Unit测试」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "qZELS5vw2feS7QfyD7spX": {
      "scene": "学习「集成测试」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "集成测试（Integration Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「集成测试」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「集成测试」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「集成测试」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "6lm3wy9WTAERTqXCn6pFt": {
      "scene": "学习「Functional测试」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Functional测试（Functional Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Functional测试」对应的资源、HTTP 方法和 URL 路…",
          "text": "明确「Functional测试」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Functional测试」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "7JNEx_cbqnAx3esvwZMOd": {
      "scene": "学习「负载测试」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "负载测试（Load Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「负载测试」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「负载测试」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「负载测试」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "bEVCT5QGY3uw0kIfAELKh": {
      "scene": "学习「Mocking APIs（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Mocking APIs（技术术语）（Mocking APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Mocking APIs（技术术语）」对应的资源、HTTP 方法和…",
          "text": "明确「Mocking APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Mocking APIs（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "NqeBglhzukVMMEF9p2CXc": {
      "scene": "学习「Contract测试」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Contract测试（Contract Testing）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Contract测试」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「Contract测试」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Contract测试」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "XD1vDtrRQFbLyKJaD1AlA": {
      "scene": "学习「Error处理/Retries」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Error处理/Retries（Error Handling / Retries）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Error处理/Retries」对应的资源、HTTP 方法和 UR…",
          "text": "明确「Error处理/Retries」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Error处理/Retries」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "JE12g5cqnwmgeTle14Vxw": {
      "scene": "学习「Real-time APIs（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Real-time APIs（技术术语）（Real-time APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Real-time APIs（技术术语）」对应的资源、HTTP 方…",
          "text": "明确「Real-time APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Real-time APIs（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "UQ8N7gcVpRLAYXgUNHBt5": {
      "scene": "学习「Web Sockets（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Web Sockets（技术术语）（Web Sockets）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Web Sockets（技术术语）」对应的资源、HTTP 方法和 …",
          "text": "明确「Web Sockets（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Web Sockets（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "iNsXTtcIHsI_i-mCfjGYn": {
      "scene": "学习「SSE 服务端推送」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "SSE 服务端推送（Server Sent Events）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「SSE 服务端推送」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「SSE 服务端推送」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「SSE 服务端推送」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "yvdfoly5WHHTq2Puss355": {
      "scene": "学习「Standards（技术术语）与合规」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Standards（技术术语）与合规（Standards and Compliance）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Standards（技术术语）与合规」对应的资源、HTTP 方法和…",
          "text": "明确「Standards（技术术语）与合规」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Standards（技术术语）与合规」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "vZxdswGLHCPi5GSuXEcHJ": {
      "scene": "学习「GDPR（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "GDPR（技术术语）（GDPR）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「GDPR（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「GDPR（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「GDPR（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "At5exN7ZAx2IzY3cTCzHm": {
      "scene": "学习「APILifecycle管理」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "APILifecycle管理（API Lifecycle Management）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「APILifecycle管理」对应的资源、HTTP 方法和 URL…",
          "text": "明确「APILifecycle管理」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「APILifecycle管理」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "a-_iIE7UdoXzD00fD9MxN": {
      "scene": "学习「CCPA（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "CCPA（技术术语）（CCPA）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「CCPA（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「CCPA（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「CCPA（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "J0enF8UTVzY3H4n3pbPIF": {
      "scene": "学习「PCI DSS（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "PCI DSS（技术术语）（PCI DSS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「PCI DSS（技术术语）」对应的资源、HTTP 方法和 URL …",
          "text": "明确「PCI DSS（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「PCI DSS（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "W4WwTmgZGnWmiYsB0ezml": {
      "scene": "学习「HIPAA（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "HIPAA（技术术语）（HIPAA）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「HIPAA（技术术语）」对应的资源、HTTP 方法和 URL 路径…",
          "text": "明确「HIPAA（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「HIPAA（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "mXCKtLUvwVJkHrpHzOecq": {
      "scene": "学习「PII（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "PII（技术术语）（PII）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「PII（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「PII（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「PII（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "1DrqtOwxCuFtWQXQ6ZALp": {
      "scene": "学习「gRPC APIs（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "gRPC APIs（技术术语）（gRPC APIs）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「gRPC APIs（技术术语）」对应的资源、HTTP 方法和 UR…",
          "text": "明确「gRPC APIs（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「gRPC APIs（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "_BXgYUlaYfpYrryXTw5n2": {
      "scene": "学习「DAC（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "DAC（技术术语）（DAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「DAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「DAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「DAC（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "dZTe_kxIUQsc9N3w920aR": {
      "scene": "学习「ABAC（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "ABAC（技术术语）（ABAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「ABAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「ABAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「ABAC（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "nJWtUyn9bljh3T-q_adJK": {
      "scene": "学习「PBAC（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "PBAC（技术术语）（PBAC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「PBAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「PBAC（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「PBAC（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "wFsbmMi5Ey9UyDADdbdPW": {
      "scene": "学习「RBAC（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "RBAC（技术术语）（RBAC）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「RBAC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「RBAC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「RBAC（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "v8iYctF_k40ES0_hHXS9N": {
      "scene": "学习「BFF模式」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "BFF模式（BFF Pattern）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「BFF模式」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「BFF模式」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「BFF模式」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "8IDks2DNFZ5nER7wK2Bu4": {
      "scene": "学习「资源modeling」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "资源modeling（Resource modeling）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「资源modeling」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「资源modeling」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「资源modeling」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "0yY_lWzWVOC_WmPoyHw8W": {
      "scene": "学习「Naming Conventions（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Naming Conventions（技术术语）（Naming Conventions）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Naming Conventions（技术术语）」对应的资源、HT…",
          "text": "明确「Naming Conventions（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Naming Conventions（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "dL3YellfAszBeJnm8KEYE": {
      "scene": "学习「过滤,排序与Search（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "过滤,排序与Search（技术术语）（Filtering, Sorting & Search）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「过滤,排序与Search（技术术语）」对应的资源、HTTP 方法和…",
          "text": "明确「过滤,排序与Search（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「过滤,排序与Search（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "jWekRGRa1131w92oS1HeW": {
      "scene": "学习「OIDC（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "OIDC（技术术语）（OIDC）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「OIDC（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「OIDC（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「OIDC（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "qjawwRcMl2-IDwk8ExpPL": {
      "scene": "学习「Scopes（技术术语）与Permissions（技术术语）」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "Scopes（技术术语）与Permissions（技术术语）（Scopes & Permissions）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「Scopes（技术术语）与Permissions（技术术语）」出现在哪…",
          "text": "「Scopes（技术术语）与Permissions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Scopes（技术术语）与Permissions（技术术语）」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "0fSfFtskcJ0HNUZPf998l": {
      "scene": "学习「密钥生成与轮换」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "密钥生成与轮换（Key Generation & Rotation）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「密钥生成与轮换」对应的资源、HTTP 方法和 URL 路径。",
          "text": "明确「密钥生成与轮换」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「密钥生成与轮换」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "zeYJPEduAmLQHqq4kNBdx": {
      "scene": "学习「Streaming Responses（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Streaming Responses（技术术语）（Streaming Responses）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Streaming Responses（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "oIZimEuBHCBGsK6b-s57f": {
      "scene": "学习「Observability（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "Observability（技术术语）（Observability）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「Observability（技术术语）」对应的资源、HTTP 方法…",
          "text": "明确「Observability（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「Observability（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
