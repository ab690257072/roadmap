import type { DeepLesson, Stage, Tutorial } from '../types';

const data = {
  "stages": [
    {
      "id": "stage-01",
      "zh": "阶段 01：什么是Redis?（技术术语）",
      "en": "What is Redis?",
      "desc": "按 roadmap.sh 原始顺序整理的第 1 组学习节点。",
      "nodes": [
        {
          "id": "M-EXrTDeAEMz_IkEi-ab4",
          "label": "In-memory Data Structure Store",
          "zh": "In-内存数据StructureStore",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -781,
          "y": -150,
          "w": 308,
          "h": 49
        },
        {
          "id": "l2aXyO3STnhbFjvUXPpm2",
          "label": "Key-value Database",
          "zh": "键-value数据库",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -781,
          "y": -97,
          "w": 202,
          "h": 49
        },
        {
          "id": "eHuBz_zSZK3rubn7nkd7g",
          "label": "Cache",
          "zh": "缓存",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -575,
          "y": -97,
          "w": 101,
          "h": 49
        },
        {
          "id": "mgGJTBU8ofvOzl9gYWhnG",
          "label": "Message Broker",
          "zh": "消息Broker",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -781,
          "y": -43,
          "w": 308,
          "h": 49
        },
        {
          "id": "-3pADOHMDQ0H6ZKNjURyn",
          "label": "What is Redis?",
          "zh": "什么是Redis?（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -331,
          "y": 17,
          "w": 202,
          "h": 49
        },
        {
          "id": "-TjnSOY8txYrhhxRV1OIl",
          "label": "Caching",
          "zh": "缓存",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -781,
          "y": 63,
          "w": 101,
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
      "zh": "阶段 02：Real-time Analytics（技术术语）",
      "en": "Real-time Analytics",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "bVJASI7bfSYqYnNhX83ng",
          "label": "Real-time Analytics",
          "zh": "Real-time Analytics（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -675,
          "y": 63,
          "w": 193,
          "h": 49
        },
        {
          "id": "EvWiEx_AoxAht6sKxzW2l",
          "label": "Redis vs SQL/NoSQL DBs",
          "zh": "Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 0,
          "y": 67,
          "w": 250,
          "h": 49
        },
        {
          "id": "URxGmhZHr0Y8nyrYj0gJl",
          "label": "Session Management",
          "zh": "会话管理",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -782,
          "y": 116,
          "w": 300,
          "h": 49
        },
        {
          "id": "1Af5H0BgdAsRdBCNdHz5v",
          "label": "When to choose Redis?",
          "zh": "何时tochooseRedis?",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 0,
          "y": 120,
          "w": 250,
          "h": 49
        },
        {
          "id": "ZCyId3aIoLv3duxoJdk2P",
          "label": "Pub/Sub Messaging",
          "zh": "Pub/Sub Messaging（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -782,
          "y": 169,
          "w": 300,
          "h": 49
        },
        {
          "id": "Fv1iGX22sApIEifM2IpJz",
          "label": "Leaderboards and Counters",
          "zh": "Leaderboards（技术术语）与Counters（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -782,
          "y": 222,
          "w": 300,
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
      "zh": "阶段 03：Startingthe服务端",
      "en": "Starting the Server",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "43LvShQhmoWQ8Nye7fLkz",
          "label": "Starting the Server",
          "zh": "Startingthe服务端",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -7,
          "y": 313,
          "w": 270,
          "h": 49
        },
        {
          "id": "Bf_kLfmy7_uflqC9N0-jt",
          "label": "Using Package Managers",
          "zh": "使用包Managers",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -352,
          "y": 316,
          "w": 244,
          "h": 49
        },
        {
          "id": "8uRpPJ0iD4XnQPKruQc8P",
          "label": "Data Persistence Options",
          "zh": "数据持久化Options",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -779,
          "y": 334,
          "w": 300,
          "h": 49
        },
        {
          "id": "BOGXTjmCLo6WI6mYDsqRu",
          "label": "Connecting using Redis CLI",
          "zh": "Connecting使用RedisCLI",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -7,
          "y": 366,
          "w": 270,
          "h": 49
        },
        {
          "id": "yBZ79s6mzGdj5AnX2H_Hy",
          "label": "Pre-compiled Binaries",
          "zh": "Pre-compiled Binaries（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -352,
          "y": 369,
          "w": 244,
          "h": 49
        },
        {
          "id": "uVewcyaFi1Pt2Gs0KrkfA",
          "label": "Rich Data Structures",
          "zh": "Rich数据Structures",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -779,
          "y": 387,
          "w": 300,
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
      "zh": "阶段 04：Commands/SET,GET（技术术语）基础",
      "en": "Basic Commands / SET, GET",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "NhcZM4nUQoSBBf_1qXi6l",
          "label": "Basic Commands / SET, GET",
          "zh": "Commands/SET,GET（技术术语）基础",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -7,
          "y": 419,
          "w": 270,
          "h": 49
        },
        {
          "id": "TDxv0q7jlZ26uZYYlneem",
          "label": "Using Docker",
          "zh": "使用Docker",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -352,
          "y": 422,
          "w": 244,
          "h": 49
        },
        {
          "id": "5-3pd4rLDqRzMzSRVLdXh",
          "label": "High Performance and Scalability",
          "zh": "High性能与扩展性",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -779,
          "y": 440,
          "w": 300,
          "h": 49
        },
        {
          "id": "DOdNkTY1yIMipWA2CD9xH",
          "label": "Setting and Getting Keys",
          "zh": "设置与Getting密钥",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -349,
          "y": 592,
          "w": 285,
          "h": 49
        },
        {
          "id": "BOJzn9SWad9oRRdY_ub01",
          "label": "HSET",
          "zh": "HSET（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 620,
          "w": 101,
          "h": 52
        },
        {
          "id": "MsKg9m5jFwHM2Bzjf-vdu",
          "label": "HGET",
          "zh": "HGET（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 149,
          "y": 621,
          "w": 101,
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
      "zh": "阶段 05：SET（技术术语）",
      "en": "SET",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "ltF4vCT9ZA2XuUuHnuGnN",
          "label": "SET",
          "zh": "SET（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -625,
          "y": 631,
          "w": 91,
          "h": 49
        },
        {
          "id": "mQc4H2ZMMSVjh33LJY8mK",
          "label": "GET",
          "zh": "GET（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -530,
          "y": 631,
          "w": 91,
          "h": 49
        },
        {
          "id": "lV_MnUNTB2h925idX0YWk",
          "label": "DEL",
          "zh": "DEL（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -349,
          "y": 645,
          "w": 81,
          "h": 49
        },
        {
          "id": "nS0DHhfy4wxHItgOFhulA",
          "label": "expire",
          "zh": "expire（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -265,
          "y": 645,
          "w": 106,
          "h": 49
        },
        {
          "id": "Vll7VMmGWSI5XGZ9JpHyl",
          "label": "TTL",
          "zh": "TTL（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -157,
          "y": 645,
          "w": 91,
          "h": 49
        },
        {
          "id": "TpR33sJ-tAjeG3jpGTvYR",
          "label": "HGETALL",
          "zh": "HGETALL（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 675,
          "w": 101,
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
      "zh": "阶段 06：HDEL（技术术语）",
      "en": "HDEL",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "E7xFZkqqbzokD5KGTn9zJ",
          "label": "HDEL",
          "zh": "HDEL（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 149,
          "y": 675,
          "w": 101,
          "h": 49
        },
        {
          "id": "5K9qyC4mrhXYWOC8WSq8C",
          "label": "INCR",
          "zh": "INCR（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -625,
          "y": 684,
          "w": 91,
          "h": 49
        },
        {
          "id": "t4BXPofF8OCqH5KHwdYVh",
          "label": "DECR",
          "zh": "DECR（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -530,
          "y": 684,
          "w": 91,
          "h": 49
        },
        {
          "id": "U84XgBFPyIbY0W5afH4cx",
          "label": "Overview of Data Types",
          "zh": "概览of数据类型",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -359,
          "y": 711,
          "w": 305,
          "h": 49
        },
        {
          "id": "adhLMuSmfYMRyWTwIgnyE",
          "label": "HEXISTS",
          "zh": "HEXISTS（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 727,
          "w": 206,
          "h": 49
        },
        {
          "id": "cPWd53BO6tm-uy4gqLdtZ",
          "label": "APPEND",
          "zh": "APPEND（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -625,
          "y": 736,
          "w": 91,
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
      "zh": "阶段 07：Strings（技术术语）",
      "en": "Strings",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "eJQW986HM4Wf1o1i2FnXs",
          "label": "STRLEN",
          "zh": "STRLEN（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -530,
          "y": 736,
          "w": 91,
          "h": 49
        },
        {
          "id": "Wl23Jh-ASJOQ850yjaTIU",
          "label": "Strings",
          "zh": "Strings（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -795,
          "y": 754,
          "w": 101,
          "h": 49
        },
        {
          "id": "P6TDUCroLlEI7qePBFHIH",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 780,
          "w": 206,
          "h": 49
        },
        {
          "id": "0v8uLWRCbAqEmKKdYaRQW",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -624,
          "y": 789,
          "w": 186,
          "h": 49
        },
        {
          "id": "wY46Qj5Inw_ClBNI9PB_2",
          "label": "Hashes",
          "zh": "Hashes（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -205,
          "y": 832,
          "w": 144,
          "h": 49
        },
        {
          "id": "2_E2VwbjTgk4xxTFWfHuV",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -624,
          "y": 876,
          "w": 186,
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
      "zh": "阶段 08：Sorted Sets（技术术语）",
      "en": "Sorted Sets",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "jtVnUD-na-WffMaS8qYfu",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 48,
          "y": 877,
          "w": 203,
          "h": 49
        },
        {
          "id": "QTbkWZ7BpqYmBhUivccPu",
          "label": "Sorted Sets",
          "zh": "Sorted Sets（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -205,
          "y": 971,
          "w": 144,
          "h": 49
        },
        {
          "id": "0swsBD0sOY-o5lzibT999",
          "label": "ZADD",
          "zh": "ZADD（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 980,
          "w": 101,
          "h": 49
        },
        {
          "id": "3pFChX6YIItrBz9lxu4XM",
          "label": "ZRANGE",
          "zh": "ZRANGE（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 149,
          "y": 980,
          "w": 101,
          "h": 49
        },
        {
          "id": "4-C4XqACUp4nvcMIj6djF",
          "label": "Lists",
          "zh": "Lists（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -799,
          "y": 982,
          "w": 104,
          "h": 49
        },
        {
          "id": "Qgkpr9vf9d6-vUg1o8XFj",
          "label": "Sets",
          "zh": "Sets（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -440,
          "y": 982,
          "w": 101,
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
      "zh": "阶段 09：ZRANK（技术术语）",
      "en": "ZRANK",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "AF_kWM4V8n5Ux06IgEVTl",
          "label": "ZRANK",
          "zh": "ZRANK（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 1033,
          "w": 101,
          "h": 49
        },
        {
          "id": "m0FZDPwNE71zcwM_gUwz0",
          "label": "ZREM",
          "zh": "ZREM（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 149,
          "y": 1033,
          "w": 101,
          "h": 49
        },
        {
          "id": "xUKoQps69FFQrJeuhD1pz",
          "label": "SADD",
          "zh": "SADD（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -482,
          "y": 1071,
          "w": 91,
          "h": 49
        },
        {
          "id": "WQWVL5GT_scHdgfCtI7WT",
          "label": "SREM",
          "zh": "SREM（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -389,
          "y": 1071,
          "w": 94,
          "h": 49
        },
        {
          "id": "Kq7G89KaZZMFkrH-9WZoS",
          "label": "LPUSH",
          "zh": "LPUSH（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 1074,
          "w": 96,
          "h": 49
        },
        {
          "id": "jC8G1o7yFj7D_PGmOIgcD",
          "label": "RPUSH",
          "zh": "RPUSH（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -690,
          "y": 1074,
          "w": 96,
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
      "zh": "阶段 10：ZRANGEBYSCORE（技术术语）",
      "en": "ZRANGEBYSCORE",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "OlbixGa5RmdqEt7snY04j",
          "label": "ZRANGEBYSCORE",
          "zh": "ZRANGEBYSCORE（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 1085,
          "w": 205,
          "h": 49
        },
        {
          "id": "mQ0ILns53n1By0Tq6xSZI",
          "label": "SMEMBERS",
          "zh": "SMEMBERS（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -482,
          "y": 1123,
          "w": 187,
          "h": 49
        },
        {
          "id": "voa61RTWMJD3Sk8DNJoVQ",
          "label": "LPOP",
          "zh": "LPOP（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 1127,
          "w": 96,
          "h": 49
        },
        {
          "id": "brUGqWZ287EWtvl9uUbNt",
          "label": "RPOP",
          "zh": "RPOP（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -690,
          "y": 1127,
          "w": 96,
          "h": 49
        },
        {
          "id": "W4v7FIQr2k-Vbm-HdfKog",
          "label": "ZINCRBY",
          "zh": "ZINCRBY（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 1138,
          "w": 101,
          "h": 49
        },
        {
          "id": "O-fZM_U-tW0pYtNzN_8Ax",
          "label": "ZCOUNT",
          "zh": "ZCOUNT（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 149,
          "y": 1138,
          "w": 101,
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
      "zh": "阶段 11：SISMEMBER（技术术语）",
      "en": "SISMEMBER",
      "desc": "按 roadmap.sh 原始顺序整理的第 11 组学习节点。",
      "nodes": [
        {
          "id": "Ji5ghlcGJtlmErHFqVf3d",
          "label": "SISMEMBER",
          "zh": "SISMEMBER（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -482,
          "y": 1176,
          "w": 187,
          "h": 49
        },
        {
          "id": "8JTtBy6oD2wFYDizVkcVa",
          "label": "LRANGE",
          "zh": "LRANGE（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 1179,
          "w": 96,
          "h": 49
        },
        {
          "id": "hBFEUXtuzUTzWZKp2qWaZ",
          "label": "LINDEX",
          "zh": "LINDEX（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -690,
          "y": 1179,
          "w": 96,
          "h": 49
        },
        {
          "id": "o6e_CwxfPoU6qkfWkwKwj",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 1192,
          "w": 206,
          "h": 49
        },
        {
          "id": "5aLfNBewK4Dx017qVNO3T",
          "label": "SINTER",
          "zh": "SINTER（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -484,
          "y": 1229,
          "w": 101,
          "h": 49
        },
        {
          "id": "2gZL4a9aWGKWLa89iyHTc",
          "label": "SCARD",
          "zh": "SCARD（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -380,
          "y": 1229,
          "w": 83,
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
      "zh": "阶段 12：LLEN（技术术语）",
      "en": "LLEN",
      "desc": "按 roadmap.sh 原始顺序整理的第 12 组学习节点。",
      "nodes": [
        {
          "id": "4oCcP9FxDJSDMHCEVBCNa",
          "label": "LLEN",
          "zh": "LLEN（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 1232,
          "w": 96,
          "h": 49
        },
        {
          "id": "9KvHcS5F4Jj5ZXgIAdOQY",
          "label": "LMOVE",
          "zh": "LMOVE（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -690,
          "y": 1232,
          "w": 96,
          "h": 49
        },
        {
          "id": "6QoYa-N2BKNBaRtvNeVNm",
          "label": "SUNION",
          "zh": "SUNION（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -484,
          "y": 1282,
          "w": 101,
          "h": 49
        },
        {
          "id": "JX5ajmcUmkshTO-mLF8lH",
          "label": "SDIFF",
          "zh": "SDIFF（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -380,
          "y": 1282,
          "w": 83,
          "h": 49
        },
        {
          "id": "eBeEUYY-IL_CMkcm31lUL",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 1284,
          "w": 196,
          "h": 49
        },
        {
          "id": "lxevY15ZyP43s_JrEqMX7",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 47,
          "y": 1284,
          "w": 203,
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
      "zh": "阶段 13：原子性inRedis",
      "en": "Atomicity in Redis",
      "desc": "按 roadmap.sh 原始顺序整理的第 13 组学习节点。",
      "nodes": [
        {
          "id": "jCaVx5wvsvuyqtwh6m8si",
          "label": "Naming Conventions",
          "zh": "Naming Conventions（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -236,
          "y": 1328,
          "w": 208,
          "h": 49
        },
        {
          "id": "2SG4Hr9Tuv6cxmGkrKjYZ",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -483,
          "y": 1335,
          "w": 187,
          "h": 49
        },
        {
          "id": "b48EUyFGUeSjtT5fOa_m6",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -483,
          "y": 1335,
          "w": 187,
          "h": 49
        },
        {
          "id": "XTwNCCtzXvZMdaex4gZEh",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -791,
          "y": 1374,
          "w": 201,
          "h": 49
        },
        {
          "id": "UlQHqw1dbxZnAKbsWsOgU",
          "label": "Retrieval by Pattern",
          "zh": "Retrievalby模式",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -236,
          "y": 1381,
          "w": 208,
          "h": 49
        },
        {
          "id": "jrgaoDnt_RxTu79hk4hCD",
          "label": "Atomicity in Redis",
          "zh": "原子性inRedis",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 46,
          "y": 1404,
          "w": 203,
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
      "zh": "阶段 14：Pipelining（技术术语）",
      "en": "Pipelining",
      "desc": "按 roadmap.sh 原始顺序整理的第 14 组学习节点。",
      "nodes": [
        {
          "id": "3hayYoSZepw7pppBubotg",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -482,
          "y": 1430,
          "w": 185,
          "h": 49
        },
        {
          "id": "OSIYDYPGz8Vgo9SU9GGH9",
          "label": "Expiration",
          "zh": "Expiration（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -236,
          "y": 1434,
          "w": 208,
          "h": 49
        },
        {
          "id": "B-YUFhPQNdr1KZNupmR5N",
          "label": "SETBIT",
          "zh": "SETBIT（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -787,
          "y": 1474,
          "w": 96,
          "h": 49
        },
        {
          "id": "0HFLJfcrcSnAVTecG3P8W",
          "label": "GETBIT",
          "zh": "GETBIT（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -688,
          "y": 1475,
          "w": 96,
          "h": 49
        },
        {
          "id": "LHlwjN3WHYUBUafzzwsWQ",
          "label": "Pipelining",
          "zh": "Pipelining（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 46,
          "y": 1488,
          "w": 203,
          "h": 49
        },
        {
          "id": "tkrxArg_oYH0aQfM8NkD2",
          "label": "BITOP",
          "zh": "BITOP（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -787,
          "y": 1527,
          "w": 96,
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
      "zh": "阶段 15：Bitmaps（技术术语）",
      "en": "Bitmaps",
      "desc": "按 roadmap.sh 原始顺序整理的第 15 组学习节点。",
      "nodes": [
        {
          "id": "Df1Eu7CuA-ARYii9JVvnm",
          "label": "BITPOS",
          "zh": "BITPOS（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -688,
          "y": 1528,
          "w": 96,
          "h": 49
        },
        {
          "id": "0Q3AkE8leWAyYsww3-BHX",
          "label": "Bitmaps",
          "zh": "Bitmaps（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -523,
          "y": 1572,
          "w": 150,
          "h": 49
        },
        {
          "id": "7JzeyTrkZ_1_yxMVrqvZU",
          "label": "Batch Operations",
          "zh": "Batch Operations（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 46,
          "y": 1572,
          "w": 203,
          "h": 49
        },
        {
          "id": "jpcyXSSib7q4WBPmpgnXA",
          "label": "BITCOUNT",
          "zh": "BITCOUNT（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -787,
          "y": 1581,
          "w": 196,
          "h": 49
        },
        {
          "id": "s7PEr-5TAm5EGJm0RSjPJ",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -785,
          "y": 1672,
          "w": 194,
          "h": 49
        },
        {
          "id": "4sKiAtX5aIL4NDsQkilNC",
          "label": "XREAD",
          "zh": "XREAD（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -162,
          "y": 1694,
          "w": 86,
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
      "zh": "阶段 16：GEOADD（技术术语）",
      "en": "GEOADD",
      "desc": "按 roadmap.sh 原始顺序整理的第 16 组学习节点。",
      "nodes": [
        {
          "id": "U3N1EgHFs1-YUaB_VrJfw",
          "label": "GEOADD",
          "zh": "GEOADD（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 44,
          "y": 1694,
          "w": 187,
          "h": 51
        },
        {
          "id": "7isWhgrUA6M5IGM2U2tm4",
          "label": "XADD",
          "zh": "XADD（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -265,
          "y": 1695,
          "w": 101,
          "h": 49
        },
        {
          "id": "DQJCMEw13lELcw_AwLfrT",
          "label": "XLEN",
          "zh": "XLEN（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -162,
          "y": 1747,
          "w": 86,
          "h": 49
        },
        {
          "id": "CiYFuYE8XudZkR6AW2NQ7",
          "label": "XRANGE",
          "zh": "XRANGE（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -265,
          "y": 1748,
          "w": 101,
          "h": 49
        },
        {
          "id": "OWWDLuGTbdNwME7v2jxVP",
          "label": "GEOSEARCH",
          "zh": "GEOSEARCH（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 44,
          "y": 1749,
          "w": 187,
          "h": 49
        },
        {
          "id": "s50jr_XOUcxh65-tGCKf5",
          "label": "PFMERGE",
          "zh": "PFMERGE（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -787,
          "y": 1769,
          "w": 194,
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
      "zh": "阶段 17：HyperLogLog（技术术语）",
      "en": "HyperLogLog",
      "desc": "按 roadmap.sh 原始顺序整理的第 17 组学习节点。",
      "nodes": [
        {
          "id": "4-z4hDKm86qQatYnmE21R",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -265,
          "y": 1801,
          "w": 187,
          "h": 49
        },
        {
          "id": "FCbdKnkI1ZHGekT6yiGua",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 1802,
          "w": 187,
          "h": 49
        },
        {
          "id": "8a4DmPZrX2xGZ7zdWxS63",
          "label": "PFADD",
          "zh": "PFADD（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -787,
          "y": 1822,
          "w": 194,
          "h": 49
        },
        {
          "id": "cszjT3YK8oyhGpqLTQzwX",
          "label": "HyperLogLog",
          "zh": "HyperLogLog（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -523,
          "y": 1868,
          "w": 150,
          "h": 49
        },
        {
          "id": "JWT30KIJQHVw0MXI5sGR6",
          "label": "PFCOUNT",
          "zh": "PFCOUNT（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -787,
          "y": 1875,
          "w": 194,
          "h": 49
        },
        {
          "id": "zXlSBfa-Gi9_GhSYEzre3",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -264,
          "y": 1895,
          "w": 185,
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
      "zh": "阶段 18：Streams（技术术语）",
      "en": "Streams",
      "desc": "按 roadmap.sh 原始顺序整理的第 18 组学习节点。",
      "nodes": [
        {
          "id": "GNMjrLPkpTphneoQ0GoZF",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 46,
          "y": 1897,
          "w": 185,
          "h": 49
        },
        {
          "id": "XPeCvikPuu6EJ8UcOLGPh",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -787,
          "y": 1964,
          "w": 194,
          "h": 49
        },
        {
          "id": "zXs_9n2yEb_eVi0WuOQKH",
          "label": "Streams",
          "zh": "Streams（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -242,
          "y": 1999,
          "w": 142,
          "h": 49
        },
        {
          "id": "_NiUdVQ85qnvryI38k_vQ",
          "label": "Geospatial Indexes",
          "zh": "Geospatial索引",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 35,
          "y": 1999,
          "w": 206,
          "h": 49
        },
        {
          "id": "Veb30QrPYNjUn13dtGbUr",
          "label": "Lua Scripting",
          "zh": "Lua Scripting（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -541,
          "y": 2094,
          "w": 204,
          "h": 49
        },
        {
          "id": "YHbWlKrQqptUDbaQVy0_A",
          "label": "Transactions",
          "zh": "Transactions（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -271,
          "y": 2094,
          "w": 211,
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
      "zh": "阶段 19：Pub/Sub（技术术语）",
      "en": "Pub/Sub",
      "desc": "按 roadmap.sh 原始顺序整理的第 19 组学习节点。",
      "nodes": [
        {
          "id": "9W_jaK1DSEZHRKdPcUM7h",
          "label": "Pub/Sub",
          "zh": "Pub/Sub（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 33,
          "y": 2094,
          "w": 209,
          "h": 49
        },
        {
          "id": "rjeq3i9oX8IGyQzo--L3c",
          "label": "EVAL",
          "zh": "EVAL（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -531,
          "y": 2193,
          "w": 185,
          "h": 49
        },
        {
          "id": "c-y5Eck8VtSyIf8RAW9p7",
          "label": "WATCH",
          "zh": "WATCH（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -260,
          "y": 2193,
          "w": 189,
          "h": 49
        },
        {
          "id": "55BCntuWlaQiLPqNtb-2i",
          "label": "SUBSCRIBE",
          "zh": "SUBSCRIBE（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 44,
          "y": 2193,
          "w": 187,
          "h": 49
        },
        {
          "id": "3X0x_PcJGWBVPL-LSVAln",
          "label": "EVALSHA",
          "zh": "EVALSHA（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -531,
          "y": 2246,
          "w": 185,
          "h": 49
        },
        {
          "id": "Ljy-Mc0EBBX4_vXfYZ5-4",
          "label": "EXEC",
          "zh": "EXEC（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -260,
          "y": 2246,
          "w": 189,
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
      "zh": "阶段 20：UNSUBSCRIBE（技术术语）",
      "en": "UNSUBSCRIBE",
      "desc": "按 roadmap.sh 原始顺序整理的第 20 组学习节点。",
      "nodes": [
        {
          "id": "5gkZzm2F4vu6IxUoJLYbK",
          "label": "UNSUBSCRIBE",
          "zh": "UNSUBSCRIBE（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 44,
          "y": 2246,
          "w": 187,
          "h": 49
        },
        {
          "id": "U6hST1MkS16T2CHV3-Ise",
          "label": "MULTI",
          "zh": "MULTI（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -260,
          "y": 2299,
          "w": 189,
          "h": 49
        },
        {
          "id": "gIPo-2CNqE1BsOaDzmkCU",
          "label": "PUBLISH",
          "zh": "PUBLISH（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 44,
          "y": 2299,
          "w": 187,
          "h": 49
        },
        {
          "id": "kF_nGo845XDwLkwcQt008",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -531,
          "y": 2342,
          "w": 185,
          "h": 49
        },
        {
          "id": "V-d6q-3Sf0dl5v8xiCQwl",
          "label": "More Commands",
          "zh": "More Commands（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 44,
          "y": 2352,
          "w": 187,
          "h": 49
        },
        {
          "id": "msW0Wd2H-6FFNDnjC64t-",
          "label": "Optimistic Locking",
          "zh": "Optimistic Locking（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -260,
          "y": 2394,
          "w": 189,
          "h": 50
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
      "zh": "阶段 21：持久化Options",
      "en": "Persistence Options",
      "desc": "按 roadmap.sh 原始顺序整理的第 21 组学习节点。",
      "nodes": [
        {
          "id": "bQaek7f3dAaZfSUhwovm1",
          "label": "Persistence Options",
          "zh": "持久化Options",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -762,
          "y": 2431,
          "w": 204,
          "h": 49
        },
        {
          "id": "MvyE_JUJej0UB9xe8Anfj",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 45,
          "y": 2447,
          "w": 185,
          "h": 49
        },
        {
          "id": "80035BzcB-fKCvD_3N8zE",
          "label": "No Persistence Option",
          "zh": "No持久化Option",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -796,
          "y": 2526,
          "w": 271,
          "h": 49
        },
        {
          "id": "Qy42paiTUsO8HIwbWTMui",
          "label": "Authentication",
          "zh": "认证",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -232,
          "y": 2575,
          "w": 204,
          "h": 49
        },
        {
          "id": "D3pZdAjwPFMRxX1-iyu5-",
          "label": "How RDB Works?",
          "zh": "如何RDBWorks?",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -788,
          "y": 2583,
          "w": 255,
          "h": 49
        },
        {
          "id": "wsuKH7YwGDV6GYQbdhA4o",
          "label": "Network Security",
          "zh": "网络安全",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -232,
          "y": 2628,
          "w": 204,
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
      "zh": "阶段 22：SSL/TLS加密",
      "en": "SSL/TLS Encryption",
      "desc": "按 roadmap.sh 原始顺序整理的第 22 组学习节点。",
      "nodes": [
        {
          "id": "_pb2DPrFUUZabKxWsuFUo",
          "label": "Configuring Save Interval",
          "zh": "Configuring Save Interval（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -788,
          "y": 2636,
          "w": 255,
          "h": 49
        },
        {
          "id": "gdiWwTQg6A-BFHdQBmgmH",
          "label": "SSL/TLS Encryption",
          "zh": "SSL/TLS加密",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -232,
          "y": 2681,
          "w": 204,
          "h": 49
        },
        {
          "id": "Z6yJwUkcDX08HoMyf1LwX",
          "label": "Usecases / Best Practices",
          "zh": "Usecases/最佳实践",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -788,
          "y": 2689,
          "w": 255,
          "h": 49
        },
        {
          "id": "vzp7DUpjklzIA0E9WxJQA",
          "label": "Usecases / Best Practices",
          "zh": "Usecases/最佳实践",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -788,
          "y": 2689,
          "w": 255,
          "h": 49
        },
        {
          "id": "rSD8nJ-uNpHJVe5Hn66h7",
          "label": "Replication Basics",
          "zh": "复制基础",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -488,
          "y": 2691,
          "w": 200,
          "h": 49
        },
        {
          "id": "nci3OB1NE1zJHUPfZCOpT",
          "label": "Redis Sentinel",
          "zh": "Redis Sentinel（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -488,
          "y": 2744,
          "w": 200,
          "h": 50
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
      "zh": "阶段 23：Clustering（技术术语）",
      "en": "Clustering",
      "desc": "按 roadmap.sh 原始顺序整理的第 23 组学习节点。",
      "nodes": [
        {
          "id": "PTj6oxvpw8vP295WvAI80",
          "label": "How AOF Works?",
          "zh": "如何AOFWorks?",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 2795,
          "w": 255,
          "h": 49
        },
        {
          "id": "AQiCcHS6dBAAAPloxiXub",
          "label": "Clustering",
          "zh": "Clustering（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -488,
          "y": 2797,
          "w": 200,
          "h": 49
        },
        {
          "id": "ibaZ34-laQtUyxAsERi7o",
          "label": "AOF rewrite & compaction",
          "zh": "AOFrewrite（技术术语）与compaction（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 2848,
          "w": 255,
          "h": 49
        },
        {
          "id": "Sd1ENOXSFCz1YqccXjr2A",
          "label": "Max Memory Policy",
          "zh": "MAX 最大值内存策略",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -209,
          "y": 2898,
          "w": 216,
          "h": 49
        },
        {
          "id": "9ToKTUqbi-NV5Wcwb21PT",
          "label": "Truncation / Corruption",
          "zh": "Truncation / Corruption（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 2901,
          "w": 255,
          "h": 49
        },
        {
          "id": "_GdTXcJO8uJlhPdfrmeXG",
          "label": "Search",
          "zh": "Search（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -468,
          "y": 2905,
          "w": 177,
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
      "zh": "阶段 24：内存管理",
      "en": "Memory Management",
      "desc": "按 roadmap.sh 原始顺序整理的第 24 组学习节点。",
      "nodes": [
        {
          "id": "xF0wQYmtwXYkrzvWg5gOO",
          "label": "Memory Management",
          "zh": "内存管理",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -209,
          "y": 2951,
          "w": 216,
          "h": 49
        },
        {
          "id": "VvOQUO22ZF8VvDSqHENNU",
          "label": "Usecases",
          "zh": "Usecases（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -789,
          "y": 2954,
          "w": 255,
          "h": 50
        },
        {
          "id": "RBr8opWSh2TKXC8Fmdg0j",
          "label": "RedisTimeSeries",
          "zh": "RedisTimeSeries（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -468,
          "y": 2958,
          "w": 177,
          "h": 49
        },
        {
          "id": "q2Jw49QUWCUGIfcEC1bZI",
          "label": "INFO",
          "zh": "INFO（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 78,
          "y": 2972,
          "w": 71,
          "h": 49
        },
        {
          "id": "jBtEiylcedtaE6E20Uk4V",
          "label": "MONITOR",
          "zh": "监控",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 150,
          "y": 2972,
          "w": 101,
          "h": 49
        },
        {
          "id": "yaCWw2KjX58SaPajUAb0d",
          "label": "Slow Log Analysis",
          "zh": "Slow日志Analysis",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -209,
          "y": 3004,
          "w": 216,
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
      "zh": "阶段 25：RedisBloom（技术术语）",
      "en": "RedisBloom",
      "desc": "按 roadmap.sh 原始顺序整理的第 25 组学习节点。",
      "nodes": [
        {
          "id": "GwVL5CvbnHsiWb1hVh7lK",
          "label": "RedisBloom",
          "zh": "RedisBloom（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -468,
          "y": 3011,
          "w": 177,
          "h": 49
        },
        {
          "id": "kgHwK4N-sfh6dHjd_D_me",
          "label": "redis-benchmark",
          "zh": "redis-基准测试",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -209,
          "y": 3057,
          "w": 216,
          "h": 49
        },
        {
          "id": "jicsfYw56VrbRUt7M8c85",
          "label": "RedisJSON",
          "zh": "RedisJSON（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -468,
          "y": 3064,
          "w": 177,
          "h": 49
        },
        {
          "id": "XBPwHgIsXupMsyoOFkJZ0",
          "label": "RedisInsight",
          "zh": "RedisInsight（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 78,
          "y": 3067,
          "w": 171,
          "h": 49
        },
        {
          "id": "3S-qqOlfr60HR4VvDr4He",
          "label": "RDB vs AOF Tradeoffs",
          "zh": "RDB（技术术语）与AOFTradeoffs（技术术语）对比",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -788,
          "y": 3069,
          "w": 255,
          "h": 49
        },
        {
          "id": "2p5RF4lVYfRvYTo1Ofm-a",
          "label": "Monitoring",
          "zh": "监控",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -209,
          "y": 3110,
          "w": 216,
          "h": 49
        }
      ],
      "index": 25,
      "mapX": 90,
      "mapY": 2226,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-26",
      "zh": "阶段 26：Redis Modules（技术术语）",
      "en": "Redis Modules",
      "desc": "按 roadmap.sh 原始顺序整理的第 26 组学习节点。",
      "nodes": [
        {
          "id": "y5FPSAi6T-5X9SUfR58_-",
          "label": "RedisCommander",
          "zh": "RedisCommander（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 78,
          "y": 3121,
          "w": 171,
          "h": 49
        },
        {
          "id": "S5Y26m1oHCQpB-oLCdtac",
          "label": "Hybrid Persistence",
          "zh": "Hybrid持久化",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -787,
          "y": 3122,
          "w": 255,
          "h": 49
        },
        {
          "id": "hLIT00Iz7rV56ZBIUhWYn",
          "label": "Redis Modules",
          "zh": "Redis Modules（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -460,
          "y": 3144,
          "w": 161,
          "h": 49
        },
        {
          "id": "giyKPtQ-pziA064P8OQD-",
          "label": "redis.conf",
          "zh": "redis.conf（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 46,
          "y": 3294,
          "w": 207,
          "h": 49
        },
        {
          "id": "Cb-KazR4PuR86VX5oT0zi",
          "label": "Upgrading Redis",
          "zh": "Upgrading Redis（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -402,
          "y": 3434,
          "w": 195,
          "h": 50
        },
        {
          "id": "nUIfTkgm3PlSiqgun1BS7",
          "label": "Disaster Recovery",
          "zh": "Disaster Recovery（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -728,
          "y": 3435,
          "w": 195,
          "h": 50
        }
      ],
      "index": 26,
      "mapX": 610,
      "mapY": 2226,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-27",
      "zh": "阶段 27：备份与Recovery（技术术语）",
      "en": "Backup and Recovery",
      "desc": "按 roadmap.sh 原始顺序整理的第 27 组学习节点。",
      "nodes": [
        {
          "id": "wXRDsNGFckXV_CSiit5sN",
          "label": "Backup and Recovery",
          "zh": "备份与Recovery（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 42,
          "y": 3435,
          "w": 215,
          "h": 49
        },
        {
          "id": "8lyXDuZJ-KHl4v2_8Ew1h",
          "label": "Redis Enterprise",
          "zh": "Redis Enterprise（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -728,
          "y": 3553,
          "w": 195,
          "h": 50
        },
        {
          "id": "cybF72wlJyJbHLUjitLvn",
          "label": "Active-Active geo Distribution",
          "zh": "Active-Active geo Distribution（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -765,
          "y": 3648,
          "w": 270,
          "h": 49
        },
        {
          "id": "sWOFnbh2EyaHRzquz1UeF",
          "label": "Redis on Flash",
          "zh": "Redis on Flash（技术术语）",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -765,
          "y": 3701,
          "w": 270,
          "h": 49
        },
        {
          "id": "ujs77bV8g8-FOm5hBtZFd",
          "label": "Security and Compliance",
          "zh": "安全与合规",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -765,
          "y": 3754,
          "w": 270,
          "h": 49
        },
        {
          "id": "JlLwy69eQ1bPHAOOJNqjo",
          "label": "When to consider enterprise?",
          "zh": "何时toconsiderenterprise?",
          "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -773,
          "y": 3852,
          "w": 286,
          "h": 49
        }
      ],
      "index": 27,
      "mapX": 1130,
      "mapY": 2226,
      "mapW": 430,
      "mapH": 308
    }
  ],
  "nodes": [
    {
      "id": "-3pADOHMDQ0H6ZKNjURyn",
      "label": "What is Redis?",
      "zh": "什么是Redis?（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -331,
      "y": 17,
      "w": 202,
      "h": 49
    },
    {
      "id": "M-EXrTDeAEMz_IkEi-ab4",
      "label": "In-memory Data Structure Store",
      "zh": "In-内存数据StructureStore",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -781,
      "y": -150,
      "w": 308,
      "h": 49
    },
    {
      "id": "l2aXyO3STnhbFjvUXPpm2",
      "label": "Key-value Database",
      "zh": "键-value数据库",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -781,
      "y": -97,
      "w": 202,
      "h": 49
    },
    {
      "id": "eHuBz_zSZK3rubn7nkd7g",
      "label": "Cache",
      "zh": "缓存",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -575,
      "y": -97,
      "w": 101,
      "h": 49
    },
    {
      "id": "mgGJTBU8ofvOzl9gYWhnG",
      "label": "Message Broker",
      "zh": "消息Broker",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -781,
      "y": -43,
      "w": 308,
      "h": 49
    },
    {
      "id": "-TjnSOY8txYrhhxRV1OIl",
      "label": "Caching",
      "zh": "缓存",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -781,
      "y": 63,
      "w": 101,
      "h": 49
    },
    {
      "id": "bVJASI7bfSYqYnNhX83ng",
      "label": "Real-time Analytics",
      "zh": "Real-time Analytics（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -675,
      "y": 63,
      "w": 193,
      "h": 49
    },
    {
      "id": "URxGmhZHr0Y8nyrYj0gJl",
      "label": "Session Management",
      "zh": "会话管理",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -782,
      "y": 116,
      "w": 300,
      "h": 49
    },
    {
      "id": "ZCyId3aIoLv3duxoJdk2P",
      "label": "Pub/Sub Messaging",
      "zh": "Pub/Sub Messaging（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -782,
      "y": 169,
      "w": 300,
      "h": 49
    },
    {
      "id": "Fv1iGX22sApIEifM2IpJz",
      "label": "Leaderboards and Counters",
      "zh": "Leaderboards（技术术语）与Counters（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -782,
      "y": 222,
      "w": 300,
      "h": 49
    },
    {
      "id": "8uRpPJ0iD4XnQPKruQc8P",
      "label": "Data Persistence Options",
      "zh": "数据持久化Options",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -779,
      "y": 334,
      "w": 300,
      "h": 49
    },
    {
      "id": "uVewcyaFi1Pt2Gs0KrkfA",
      "label": "Rich Data Structures",
      "zh": "Rich数据Structures",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -779,
      "y": 387,
      "w": 300,
      "h": 49
    },
    {
      "id": "5-3pd4rLDqRzMzSRVLdXh",
      "label": "High Performance and Scalability",
      "zh": "High性能与扩展性",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -779,
      "y": 440,
      "w": 300,
      "h": 49
    },
    {
      "id": "EvWiEx_AoxAht6sKxzW2l",
      "label": "Redis vs SQL/NoSQL DBs",
      "zh": "Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 0,
      "y": 67,
      "w": 250,
      "h": 49
    },
    {
      "id": "1Af5H0BgdAsRdBCNdHz5v",
      "label": "When to choose Redis?",
      "zh": "何时tochooseRedis?",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 0,
      "y": 120,
      "w": 250,
      "h": 49
    },
    {
      "id": "Bf_kLfmy7_uflqC9N0-jt",
      "label": "Using Package Managers",
      "zh": "使用包Managers",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -352,
      "y": 316,
      "w": 244,
      "h": 49
    },
    {
      "id": "yBZ79s6mzGdj5AnX2H_Hy",
      "label": "Pre-compiled Binaries",
      "zh": "Pre-compiled Binaries（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -352,
      "y": 369,
      "w": 244,
      "h": 49
    },
    {
      "id": "TDxv0q7jlZ26uZYYlneem",
      "label": "Using Docker",
      "zh": "使用Docker",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -352,
      "y": 422,
      "w": 244,
      "h": 49
    },
    {
      "id": "43LvShQhmoWQ8Nye7fLkz",
      "label": "Starting the Server",
      "zh": "Startingthe服务端",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -7,
      "y": 313,
      "w": 270,
      "h": 49
    },
    {
      "id": "BOGXTjmCLo6WI6mYDsqRu",
      "label": "Connecting using Redis CLI",
      "zh": "Connecting使用RedisCLI",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -7,
      "y": 366,
      "w": 270,
      "h": 49
    },
    {
      "id": "NhcZM4nUQoSBBf_1qXi6l",
      "label": "Basic Commands / SET, GET",
      "zh": "Commands/SET,GET（技术术语）基础",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -7,
      "y": 419,
      "w": 270,
      "h": 49
    },
    {
      "id": "DOdNkTY1yIMipWA2CD9xH",
      "label": "Setting and Getting Keys",
      "zh": "设置与Getting密钥",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -349,
      "y": 592,
      "w": 285,
      "h": 49
    },
    {
      "id": "lV_MnUNTB2h925idX0YWk",
      "label": "DEL",
      "zh": "DEL（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -349,
      "y": 645,
      "w": 81,
      "h": 49
    },
    {
      "id": "U84XgBFPyIbY0W5afH4cx",
      "label": "Overview of Data Types",
      "zh": "概览of数据类型",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -359,
      "y": 711,
      "w": 305,
      "h": 49
    },
    {
      "id": "ltF4vCT9ZA2XuUuHnuGnN",
      "label": "SET",
      "zh": "SET（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -625,
      "y": 631,
      "w": 91,
      "h": 49
    },
    {
      "id": "mQc4H2ZMMSVjh33LJY8mK",
      "label": "GET",
      "zh": "GET（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -530,
      "y": 631,
      "w": 91,
      "h": 49
    },
    {
      "id": "5K9qyC4mrhXYWOC8WSq8C",
      "label": "INCR",
      "zh": "INCR（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -625,
      "y": 684,
      "w": 91,
      "h": 49
    },
    {
      "id": "t4BXPofF8OCqH5KHwdYVh",
      "label": "DECR",
      "zh": "DECR（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -530,
      "y": 684,
      "w": 91,
      "h": 49
    },
    {
      "id": "cPWd53BO6tm-uy4gqLdtZ",
      "label": "APPEND",
      "zh": "APPEND（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -625,
      "y": 736,
      "w": 91,
      "h": 49
    },
    {
      "id": "eJQW986HM4Wf1o1i2FnXs",
      "label": "STRLEN",
      "zh": "STRLEN（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -530,
      "y": 736,
      "w": 91,
      "h": 49
    },
    {
      "id": "0v8uLWRCbAqEmKKdYaRQW",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -624,
      "y": 789,
      "w": 186,
      "h": 49
    },
    {
      "id": "2_E2VwbjTgk4xxTFWfHuV",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -624,
      "y": 876,
      "w": 186,
      "h": 49
    },
    {
      "id": "nS0DHhfy4wxHItgOFhulA",
      "label": "expire",
      "zh": "expire（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -265,
      "y": 645,
      "w": 106,
      "h": 49
    },
    {
      "id": "Vll7VMmGWSI5XGZ9JpHyl",
      "label": "TTL",
      "zh": "TTL（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -157,
      "y": 645,
      "w": 91,
      "h": 49
    },
    {
      "id": "Kq7G89KaZZMFkrH-9WZoS",
      "label": "LPUSH",
      "zh": "LPUSH（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 1074,
      "w": 96,
      "h": 49
    },
    {
      "id": "jC8G1o7yFj7D_PGmOIgcD",
      "label": "RPUSH",
      "zh": "RPUSH（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -690,
      "y": 1074,
      "w": 96,
      "h": 49
    },
    {
      "id": "voa61RTWMJD3Sk8DNJoVQ",
      "label": "LPOP",
      "zh": "LPOP（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 1127,
      "w": 96,
      "h": 49
    },
    {
      "id": "brUGqWZ287EWtvl9uUbNt",
      "label": "RPOP",
      "zh": "RPOP（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -690,
      "y": 1127,
      "w": 96,
      "h": 49
    },
    {
      "id": "8JTtBy6oD2wFYDizVkcVa",
      "label": "LRANGE",
      "zh": "LRANGE（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 1179,
      "w": 96,
      "h": 49
    },
    {
      "id": "hBFEUXtuzUTzWZKp2qWaZ",
      "label": "LINDEX",
      "zh": "LINDEX（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -690,
      "y": 1179,
      "w": 96,
      "h": 49
    },
    {
      "id": "4oCcP9FxDJSDMHCEVBCNa",
      "label": "LLEN",
      "zh": "LLEN（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 1232,
      "w": 96,
      "h": 49
    },
    {
      "id": "9KvHcS5F4Jj5ZXgIAdOQY",
      "label": "LMOVE",
      "zh": "LMOVE（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -690,
      "y": 1232,
      "w": 96,
      "h": 49
    },
    {
      "id": "eBeEUYY-IL_CMkcm31lUL",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 1284,
      "w": 196,
      "h": 49
    },
    {
      "id": "XTwNCCtzXvZMdaex4gZEh",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -791,
      "y": 1374,
      "w": 201,
      "h": 49
    },
    {
      "id": "Qgkpr9vf9d6-vUg1o8XFj",
      "label": "Sets",
      "zh": "Sets（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -440,
      "y": 982,
      "w": 101,
      "h": 49
    },
    {
      "id": "xUKoQps69FFQrJeuhD1pz",
      "label": "SADD",
      "zh": "SADD（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -482,
      "y": 1071,
      "w": 91,
      "h": 49
    },
    {
      "id": "mQ0ILns53n1By0Tq6xSZI",
      "label": "SMEMBERS",
      "zh": "SMEMBERS（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -482,
      "y": 1123,
      "w": 187,
      "h": 49
    },
    {
      "id": "WQWVL5GT_scHdgfCtI7WT",
      "label": "SREM",
      "zh": "SREM（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -389,
      "y": 1071,
      "w": 94,
      "h": 49
    },
    {
      "id": "Ji5ghlcGJtlmErHFqVf3d",
      "label": "SISMEMBER",
      "zh": "SISMEMBER（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -482,
      "y": 1176,
      "w": 187,
      "h": 49
    },
    {
      "id": "5aLfNBewK4Dx017qVNO3T",
      "label": "SINTER",
      "zh": "SINTER（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -484,
      "y": 1229,
      "w": 101,
      "h": 49
    },
    {
      "id": "2gZL4a9aWGKWLa89iyHTc",
      "label": "SCARD",
      "zh": "SCARD（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -380,
      "y": 1229,
      "w": 83,
      "h": 49
    },
    {
      "id": "6QoYa-N2BKNBaRtvNeVNm",
      "label": "SUNION",
      "zh": "SUNION（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -484,
      "y": 1282,
      "w": 101,
      "h": 49
    },
    {
      "id": "JX5ajmcUmkshTO-mLF8lH",
      "label": "SDIFF",
      "zh": "SDIFF（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -380,
      "y": 1282,
      "w": 83,
      "h": 49
    },
    {
      "id": "2SG4Hr9Tuv6cxmGkrKjYZ",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -483,
      "y": 1335,
      "w": 187,
      "h": 49
    },
    {
      "id": "3hayYoSZepw7pppBubotg",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -482,
      "y": 1430,
      "w": 185,
      "h": 49
    },
    {
      "id": "b48EUyFGUeSjtT5fOa_m6",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -483,
      "y": 1335,
      "w": 187,
      "h": 49
    },
    {
      "id": "Wl23Jh-ASJOQ850yjaTIU",
      "label": "Strings",
      "zh": "Strings（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -795,
      "y": 754,
      "w": 101,
      "h": 49
    },
    {
      "id": "4-C4XqACUp4nvcMIj6djF",
      "label": "Lists",
      "zh": "Lists（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -799,
      "y": 982,
      "w": 104,
      "h": 49
    },
    {
      "id": "wY46Qj5Inw_ClBNI9PB_2",
      "label": "Hashes",
      "zh": "Hashes（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -205,
      "y": 832,
      "w": 144,
      "h": 49
    },
    {
      "id": "BOJzn9SWad9oRRdY_ub01",
      "label": "HSET",
      "zh": "HSET（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 620,
      "w": 101,
      "h": 52
    },
    {
      "id": "MsKg9m5jFwHM2Bzjf-vdu",
      "label": "HGET",
      "zh": "HGET（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 149,
      "y": 621,
      "w": 101,
      "h": 49
    },
    {
      "id": "TpR33sJ-tAjeG3jpGTvYR",
      "label": "HGETALL",
      "zh": "HGETALL（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 675,
      "w": 101,
      "h": 49
    },
    {
      "id": "E7xFZkqqbzokD5KGTn9zJ",
      "label": "HDEL",
      "zh": "HDEL（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 149,
      "y": 675,
      "w": 101,
      "h": 49
    },
    {
      "id": "adhLMuSmfYMRyWTwIgnyE",
      "label": "HEXISTS",
      "zh": "HEXISTS（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 727,
      "w": 206,
      "h": 49
    },
    {
      "id": "jtVnUD-na-WffMaS8qYfu",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 48,
      "y": 877,
      "w": 203,
      "h": 49
    },
    {
      "id": "QTbkWZ7BpqYmBhUivccPu",
      "label": "Sorted Sets",
      "zh": "Sorted Sets（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -205,
      "y": 971,
      "w": 144,
      "h": 49
    },
    {
      "id": "0swsBD0sOY-o5lzibT999",
      "label": "ZADD",
      "zh": "ZADD（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 980,
      "w": 101,
      "h": 49
    },
    {
      "id": "3pFChX6YIItrBz9lxu4XM",
      "label": "ZRANGE",
      "zh": "ZRANGE（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 149,
      "y": 980,
      "w": 101,
      "h": 49
    },
    {
      "id": "OlbixGa5RmdqEt7snY04j",
      "label": "ZRANGEBYSCORE",
      "zh": "ZRANGEBYSCORE（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 1085,
      "w": 205,
      "h": 49
    },
    {
      "id": "m0FZDPwNE71zcwM_gUwz0",
      "label": "ZREM",
      "zh": "ZREM（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 149,
      "y": 1033,
      "w": 101,
      "h": 49
    },
    {
      "id": "W4v7FIQr2k-Vbm-HdfKog",
      "label": "ZINCRBY",
      "zh": "ZINCRBY（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 1138,
      "w": 101,
      "h": 49
    },
    {
      "id": "AF_kWM4V8n5Ux06IgEVTl",
      "label": "ZRANK",
      "zh": "ZRANK（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 1033,
      "w": 101,
      "h": 49
    },
    {
      "id": "O-fZM_U-tW0pYtNzN_8Ax",
      "label": "ZCOUNT",
      "zh": "ZCOUNT（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 149,
      "y": 1138,
      "w": 101,
      "h": 49
    },
    {
      "id": "P6TDUCroLlEI7qePBFHIH",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 780,
      "w": 206,
      "h": 49
    },
    {
      "id": "lxevY15ZyP43s_JrEqMX7",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 47,
      "y": 1284,
      "w": 203,
      "h": 49
    },
    {
      "id": "o6e_CwxfPoU6qkfWkwKwj",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 1192,
      "w": 206,
      "h": 49
    },
    {
      "id": "jCaVx5wvsvuyqtwh6m8si",
      "label": "Naming Conventions",
      "zh": "Naming Conventions（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -236,
      "y": 1328,
      "w": 208,
      "h": 49
    },
    {
      "id": "UlQHqw1dbxZnAKbsWsOgU",
      "label": "Retrieval by Pattern",
      "zh": "Retrievalby模式",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -236,
      "y": 1381,
      "w": 208,
      "h": 49
    },
    {
      "id": "OSIYDYPGz8Vgo9SU9GGH9",
      "label": "Expiration",
      "zh": "Expiration（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -236,
      "y": 1434,
      "w": 208,
      "h": 49
    },
    {
      "id": "jrgaoDnt_RxTu79hk4hCD",
      "label": "Atomicity in Redis",
      "zh": "原子性inRedis",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 46,
      "y": 1404,
      "w": 203,
      "h": 49
    },
    {
      "id": "LHlwjN3WHYUBUafzzwsWQ",
      "label": "Pipelining",
      "zh": "Pipelining（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 46,
      "y": 1488,
      "w": 203,
      "h": 49
    },
    {
      "id": "7JzeyTrkZ_1_yxMVrqvZU",
      "label": "Batch Operations",
      "zh": "Batch Operations（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 46,
      "y": 1572,
      "w": 203,
      "h": 49
    },
    {
      "id": "0Q3AkE8leWAyYsww3-BHX",
      "label": "Bitmaps",
      "zh": "Bitmaps（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -523,
      "y": 1572,
      "w": 150,
      "h": 49
    },
    {
      "id": "B-YUFhPQNdr1KZNupmR5N",
      "label": "SETBIT",
      "zh": "SETBIT（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -787,
      "y": 1474,
      "w": 96,
      "h": 49
    },
    {
      "id": "0HFLJfcrcSnAVTecG3P8W",
      "label": "GETBIT",
      "zh": "GETBIT（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -688,
      "y": 1475,
      "w": 96,
      "h": 49
    },
    {
      "id": "jpcyXSSib7q4WBPmpgnXA",
      "label": "BITCOUNT",
      "zh": "BITCOUNT（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -787,
      "y": 1581,
      "w": 196,
      "h": 49
    },
    {
      "id": "tkrxArg_oYH0aQfM8NkD2",
      "label": "BITOP",
      "zh": "BITOP（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -787,
      "y": 1527,
      "w": 96,
      "h": 49
    },
    {
      "id": "Df1Eu7CuA-ARYii9JVvnm",
      "label": "BITPOS",
      "zh": "BITPOS（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -688,
      "y": 1528,
      "w": 96,
      "h": 49
    },
    {
      "id": "s7PEr-5TAm5EGJm0RSjPJ",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -785,
      "y": 1672,
      "w": 194,
      "h": 49
    },
    {
      "id": "cszjT3YK8oyhGpqLTQzwX",
      "label": "HyperLogLog",
      "zh": "HyperLogLog（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -523,
      "y": 1868,
      "w": 150,
      "h": 49
    },
    {
      "id": "8a4DmPZrX2xGZ7zdWxS63",
      "label": "PFADD",
      "zh": "PFADD（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -787,
      "y": 1822,
      "w": 194,
      "h": 49
    },
    {
      "id": "JWT30KIJQHVw0MXI5sGR6",
      "label": "PFCOUNT",
      "zh": "PFCOUNT（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -787,
      "y": 1875,
      "w": 194,
      "h": 49
    },
    {
      "id": "s50jr_XOUcxh65-tGCKf5",
      "label": "PFMERGE",
      "zh": "PFMERGE（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -787,
      "y": 1769,
      "w": 194,
      "h": 49
    },
    {
      "id": "XPeCvikPuu6EJ8UcOLGPh",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -787,
      "y": 1964,
      "w": 194,
      "h": 49
    },
    {
      "id": "zXs_9n2yEb_eVi0WuOQKH",
      "label": "Streams",
      "zh": "Streams（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -242,
      "y": 1999,
      "w": 142,
      "h": 49
    },
    {
      "id": "7isWhgrUA6M5IGM2U2tm4",
      "label": "XADD",
      "zh": "XADD（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -265,
      "y": 1695,
      "w": 101,
      "h": 49
    },
    {
      "id": "4sKiAtX5aIL4NDsQkilNC",
      "label": "XREAD",
      "zh": "XREAD（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -162,
      "y": 1694,
      "w": 86,
      "h": 49
    },
    {
      "id": "CiYFuYE8XudZkR6AW2NQ7",
      "label": "XRANGE",
      "zh": "XRANGE（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -265,
      "y": 1748,
      "w": 101,
      "h": 49
    },
    {
      "id": "DQJCMEw13lELcw_AwLfrT",
      "label": "XLEN",
      "zh": "XLEN（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -162,
      "y": 1747,
      "w": 86,
      "h": 49
    },
    {
      "id": "zXlSBfa-Gi9_GhSYEzre3",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -264,
      "y": 1895,
      "w": 185,
      "h": 49
    },
    {
      "id": "4-z4hDKm86qQatYnmE21R",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -265,
      "y": 1801,
      "w": 187,
      "h": 49
    },
    {
      "id": "_NiUdVQ85qnvryI38k_vQ",
      "label": "Geospatial Indexes",
      "zh": "Geospatial索引",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 35,
      "y": 1999,
      "w": 206,
      "h": 49
    },
    {
      "id": "U3N1EgHFs1-YUaB_VrJfw",
      "label": "GEOADD",
      "zh": "GEOADD（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 44,
      "y": 1694,
      "w": 187,
      "h": 51
    },
    {
      "id": "OWWDLuGTbdNwME7v2jxVP",
      "label": "GEOSEARCH",
      "zh": "GEOSEARCH（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 44,
      "y": 1749,
      "w": 187,
      "h": 49
    },
    {
      "id": "GNMjrLPkpTphneoQ0GoZF",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 46,
      "y": 1897,
      "w": 185,
      "h": 49
    },
    {
      "id": "FCbdKnkI1ZHGekT6yiGua",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 1802,
      "w": 187,
      "h": 49
    },
    {
      "id": "9W_jaK1DSEZHRKdPcUM7h",
      "label": "Pub/Sub",
      "zh": "Pub/Sub（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 33,
      "y": 2094,
      "w": 209,
      "h": 49
    },
    {
      "id": "55BCntuWlaQiLPqNtb-2i",
      "label": "SUBSCRIBE",
      "zh": "SUBSCRIBE（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 44,
      "y": 2193,
      "w": 187,
      "h": 49
    },
    {
      "id": "5gkZzm2F4vu6IxUoJLYbK",
      "label": "UNSUBSCRIBE",
      "zh": "UNSUBSCRIBE（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 44,
      "y": 2246,
      "w": 187,
      "h": 49
    },
    {
      "id": "gIPo-2CNqE1BsOaDzmkCU",
      "label": "PUBLISH",
      "zh": "PUBLISH（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 44,
      "y": 2299,
      "w": 187,
      "h": 49
    },
    {
      "id": "V-d6q-3Sf0dl5v8xiCQwl",
      "label": "More Commands",
      "zh": "More Commands（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 44,
      "y": 2352,
      "w": 187,
      "h": 49
    },
    {
      "id": "MvyE_JUJej0UB9xe8Anfj",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 45,
      "y": 2447,
      "w": 185,
      "h": 49
    },
    {
      "id": "YHbWlKrQqptUDbaQVy0_A",
      "label": "Transactions",
      "zh": "Transactions（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -271,
      "y": 2094,
      "w": 211,
      "h": 49
    },
    {
      "id": "c-y5Eck8VtSyIf8RAW9p7",
      "label": "WATCH",
      "zh": "WATCH（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -260,
      "y": 2193,
      "w": 189,
      "h": 49
    },
    {
      "id": "Ljy-Mc0EBBX4_vXfYZ5-4",
      "label": "EXEC",
      "zh": "EXEC（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -260,
      "y": 2246,
      "w": 189,
      "h": 49
    },
    {
      "id": "U6hST1MkS16T2CHV3-Ise",
      "label": "MULTI",
      "zh": "MULTI（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -260,
      "y": 2299,
      "w": 189,
      "h": 49
    },
    {
      "id": "msW0Wd2H-6FFNDnjC64t-",
      "label": "Optimistic Locking",
      "zh": "Optimistic Locking（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -260,
      "y": 2394,
      "w": 189,
      "h": 50
    },
    {
      "id": "Veb30QrPYNjUn13dtGbUr",
      "label": "Lua Scripting",
      "zh": "Lua Scripting（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -541,
      "y": 2094,
      "w": 204,
      "h": 49
    },
    {
      "id": "rjeq3i9oX8IGyQzo--L3c",
      "label": "EVAL",
      "zh": "EVAL（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -531,
      "y": 2193,
      "w": 185,
      "h": 49
    },
    {
      "id": "3X0x_PcJGWBVPL-LSVAln",
      "label": "EVALSHA",
      "zh": "EVALSHA（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -531,
      "y": 2246,
      "w": 185,
      "h": 49
    },
    {
      "id": "kF_nGo845XDwLkwcQt008",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -531,
      "y": 2342,
      "w": 185,
      "h": 49
    },
    {
      "id": "bQaek7f3dAaZfSUhwovm1",
      "label": "Persistence Options",
      "zh": "持久化Options",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -762,
      "y": 2431,
      "w": 204,
      "h": 49
    },
    {
      "id": "D3pZdAjwPFMRxX1-iyu5-",
      "label": "How RDB Works?",
      "zh": "如何RDBWorks?",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -788,
      "y": 2583,
      "w": 255,
      "h": 49
    },
    {
      "id": "_pb2DPrFUUZabKxWsuFUo",
      "label": "Configuring Save Interval",
      "zh": "Configuring Save Interval（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -788,
      "y": 2636,
      "w": 255,
      "h": 49
    },
    {
      "id": "Z6yJwUkcDX08HoMyf1LwX",
      "label": "Usecases / Best Practices",
      "zh": "Usecases/最佳实践",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -788,
      "y": 2689,
      "w": 255,
      "h": 49
    },
    {
      "id": "PTj6oxvpw8vP295WvAI80",
      "label": "How AOF Works?",
      "zh": "如何AOFWorks?",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 2795,
      "w": 255,
      "h": 49
    },
    {
      "id": "ibaZ34-laQtUyxAsERi7o",
      "label": "AOF rewrite & compaction",
      "zh": "AOFrewrite（技术术语）与compaction（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 2848,
      "w": 255,
      "h": 49
    },
    {
      "id": "9ToKTUqbi-NV5Wcwb21PT",
      "label": "Truncation / Corruption",
      "zh": "Truncation / Corruption（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 2901,
      "w": 255,
      "h": 49
    },
    {
      "id": "VvOQUO22ZF8VvDSqHENNU",
      "label": "Usecases",
      "zh": "Usecases（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -789,
      "y": 2954,
      "w": 255,
      "h": 50
    },
    {
      "id": "vzp7DUpjklzIA0E9WxJQA",
      "label": "Usecases / Best Practices",
      "zh": "Usecases/最佳实践",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -788,
      "y": 2689,
      "w": 255,
      "h": 49
    },
    {
      "id": "80035BzcB-fKCvD_3N8zE",
      "label": "No Persistence Option",
      "zh": "No持久化Option",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -796,
      "y": 2526,
      "w": 271,
      "h": 49
    },
    {
      "id": "3S-qqOlfr60HR4VvDr4He",
      "label": "RDB vs AOF Tradeoffs",
      "zh": "RDB（技术术语）与AOFTradeoffs（技术术语）对比",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -788,
      "y": 3069,
      "w": 255,
      "h": 49
    },
    {
      "id": "S5Y26m1oHCQpB-oLCdtac",
      "label": "Hybrid Persistence",
      "zh": "Hybrid持久化",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -787,
      "y": 3122,
      "w": 255,
      "h": 49
    },
    {
      "id": "rSD8nJ-uNpHJVe5Hn66h7",
      "label": "Replication Basics",
      "zh": "复制基础",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -488,
      "y": 2691,
      "w": 200,
      "h": 49
    },
    {
      "id": "nci3OB1NE1zJHUPfZCOpT",
      "label": "Redis Sentinel",
      "zh": "Redis Sentinel（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -488,
      "y": 2744,
      "w": 200,
      "h": 50
    },
    {
      "id": "AQiCcHS6dBAAAPloxiXub",
      "label": "Clustering",
      "zh": "Clustering（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -488,
      "y": 2797,
      "w": 200,
      "h": 49
    },
    {
      "id": "Qy42paiTUsO8HIwbWTMui",
      "label": "Authentication",
      "zh": "认证",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -232,
      "y": 2575,
      "w": 204,
      "h": 49
    },
    {
      "id": "wsuKH7YwGDV6GYQbdhA4o",
      "label": "Network Security",
      "zh": "网络安全",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -232,
      "y": 2628,
      "w": 204,
      "h": 49
    },
    {
      "id": "gdiWwTQg6A-BFHdQBmgmH",
      "label": "SSL/TLS Encryption",
      "zh": "SSL/TLS加密",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -232,
      "y": 2681,
      "w": 204,
      "h": 49
    },
    {
      "id": "q2Jw49QUWCUGIfcEC1bZI",
      "label": "INFO",
      "zh": "INFO（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 78,
      "y": 2972,
      "w": 71,
      "h": 49
    },
    {
      "id": "jBtEiylcedtaE6E20Uk4V",
      "label": "MONITOR",
      "zh": "监控",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 150,
      "y": 2972,
      "w": 101,
      "h": 49
    },
    {
      "id": "XBPwHgIsXupMsyoOFkJZ0",
      "label": "RedisInsight",
      "zh": "RedisInsight（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 78,
      "y": 3067,
      "w": 171,
      "h": 49
    },
    {
      "id": "y5FPSAi6T-5X9SUfR58_-",
      "label": "RedisCommander",
      "zh": "RedisCommander（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 78,
      "y": 3121,
      "w": 171,
      "h": 49
    },
    {
      "id": "xF0wQYmtwXYkrzvWg5gOO",
      "label": "Memory Management",
      "zh": "内存管理",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -209,
      "y": 2951,
      "w": 216,
      "h": 49
    },
    {
      "id": "Sd1ENOXSFCz1YqccXjr2A",
      "label": "Max Memory Policy",
      "zh": "MAX 最大值内存策略",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -209,
      "y": 2898,
      "w": 216,
      "h": 49
    },
    {
      "id": "yaCWw2KjX58SaPajUAb0d",
      "label": "Slow Log Analysis",
      "zh": "Slow日志Analysis",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -209,
      "y": 3004,
      "w": 216,
      "h": 49
    },
    {
      "id": "kgHwK4N-sfh6dHjd_D_me",
      "label": "redis-benchmark",
      "zh": "redis-基准测试",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -209,
      "y": 3057,
      "w": 216,
      "h": 49
    },
    {
      "id": "2p5RF4lVYfRvYTo1Ofm-a",
      "label": "Monitoring",
      "zh": "监控",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -209,
      "y": 3110,
      "w": 216,
      "h": 49
    },
    {
      "id": "hLIT00Iz7rV56ZBIUhWYn",
      "label": "Redis Modules",
      "zh": "Redis Modules（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -460,
      "y": 3144,
      "w": 161,
      "h": 49
    },
    {
      "id": "jicsfYw56VrbRUt7M8c85",
      "label": "RedisJSON",
      "zh": "RedisJSON（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -468,
      "y": 3064,
      "w": 177,
      "h": 49
    },
    {
      "id": "_GdTXcJO8uJlhPdfrmeXG",
      "label": "Search",
      "zh": "Search（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -468,
      "y": 2905,
      "w": 177,
      "h": 49
    },
    {
      "id": "RBr8opWSh2TKXC8Fmdg0j",
      "label": "RedisTimeSeries",
      "zh": "RedisTimeSeries（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -468,
      "y": 2958,
      "w": 177,
      "h": 49
    },
    {
      "id": "GwVL5CvbnHsiWb1hVh7lK",
      "label": "RedisBloom",
      "zh": "RedisBloom（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -468,
      "y": 3011,
      "w": 177,
      "h": 49
    },
    {
      "id": "giyKPtQ-pziA064P8OQD-",
      "label": "redis.conf",
      "zh": "redis.conf（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 46,
      "y": 3294,
      "w": 207,
      "h": 49
    },
    {
      "id": "wXRDsNGFckXV_CSiit5sN",
      "label": "Backup and Recovery",
      "zh": "备份与Recovery（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 42,
      "y": 3435,
      "w": 215,
      "h": 49
    },
    {
      "id": "Cb-KazR4PuR86VX5oT0zi",
      "label": "Upgrading Redis",
      "zh": "Upgrading Redis（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -402,
      "y": 3434,
      "w": 195,
      "h": 50
    },
    {
      "id": "nUIfTkgm3PlSiqgun1BS7",
      "label": "Disaster Recovery",
      "zh": "Disaster Recovery（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -728,
      "y": 3435,
      "w": 195,
      "h": 50
    },
    {
      "id": "8lyXDuZJ-KHl4v2_8Ew1h",
      "label": "Redis Enterprise",
      "zh": "Redis Enterprise（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -728,
      "y": 3553,
      "w": 195,
      "h": 50
    },
    {
      "id": "cybF72wlJyJbHLUjitLvn",
      "label": "Active-Active geo Distribution",
      "zh": "Active-Active geo Distribution（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -765,
      "y": 3648,
      "w": 270,
      "h": 49
    },
    {
      "id": "sWOFnbh2EyaHRzquz1UeF",
      "label": "Redis on Flash",
      "zh": "Redis on Flash（技术术语）",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -765,
      "y": 3701,
      "w": 270,
      "h": 49
    },
    {
      "id": "ujs77bV8g8-FOm5hBtZFd",
      "label": "Security and Compliance",
      "zh": "安全与合规",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -765,
      "y": 3754,
      "w": 270,
      "h": 49
    },
    {
      "id": "JlLwy69eQ1bPHAOOJNqjo",
      "label": "When to consider enterprise?",
      "zh": "何时toconsiderenterprise?",
      "desc": "Redis 缓存 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -773,
      "y": 3852,
      "w": 286,
      "h": 49
    }
  ],
  "tutorials": {
    "-3pADOHMDQ0H6ZKNjURyn": {
      "id": "-3pADOHMDQ0H6ZKNjURyn",
      "zh": "什么是Redis?（技术术语）",
      "en": "What is Redis?",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「什么是Redis?（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**什么是Redis?（技术术语）**（What is Redis?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**什么是Redis?（技术术语）**（What is Redis?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "M-EXrTDeAEMz_IkEi-ab4": {
      "id": "M-EXrTDeAEMz_IkEi-ab4",
      "zh": "In-内存数据StructureStore",
      "en": "In-memory Data Structure Store",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「In-内存数据StructureStore」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**In-内存数据StructureStore**（In-memory Data Structure Store）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**In-内存数据StructureStore**（In-memory Data Structure Store）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "l2aXyO3STnhbFjvUXPpm2": {
      "id": "l2aXyO3STnhbFjvUXPpm2",
      "zh": "键-value数据库",
      "en": "Key-value Database",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「键-value数据库」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**键-value数据库**（Key-value Database）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「键-value数据库」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**键-value数据库**（Key-value Database）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "eHuBz_zSZK3rubn7nkd7g": {
      "id": "eHuBz_zSZK3rubn7nkd7g",
      "zh": "缓存",
      "en": "Cache",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「缓存」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**缓存**（Cache）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**缓存**（Cache）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "mgGJTBU8ofvOzl9gYWhnG": {
      "id": "mgGJTBU8ofvOzl9gYWhnG",
      "zh": "消息Broker",
      "en": "Message Broker",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「消息Broker」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**消息Broker**（Message Broker）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**消息Broker**（Message Broker）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "-TjnSOY8txYrhhxRV1OIl": {
      "id": "-TjnSOY8txYrhhxRV1OIl",
      "zh": "缓存",
      "en": "Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「缓存」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**缓存**（Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
    "bVJASI7bfSYqYnNhX83ng": {
      "id": "bVJASI7bfSYqYnNhX83ng",
      "zh": "Real-time Analytics（技术术语）",
      "en": "Real-time Analytics",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Real-time Analytics（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Real-time Analytics（技术术语）**（Real-time Analytics）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Real-time Analytics（技术术语）**（Real-time Analytics）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "URxGmhZHr0Y8nyrYj0gJl": {
      "id": "URxGmhZHr0Y8nyrYj0gJl",
      "zh": "会话管理",
      "en": "Session Management",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「会话管理」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**会话管理**（Session Management）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**会话管理**（Session Management）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "ZCyId3aIoLv3duxoJdk2P": {
      "id": "ZCyId3aIoLv3duxoJdk2P",
      "zh": "Pub/Sub Messaging（技术术语）",
      "en": "Pub/Sub Messaging",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Pub/Sub Messaging（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Pub/Sub Messaging（技术术语）**（Pub/Sub Messaging）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Pub/Sub Messaging（技术术语）**（Pub/Sub Messaging）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Fv1iGX22sApIEifM2IpJz": {
      "id": "Fv1iGX22sApIEifM2IpJz",
      "zh": "Leaderboards（技术术语）与Counters（技术术语）",
      "en": "Leaderboards and Counters",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Leaderboards（技术术语）与Counters（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Leaderboards（技术术语）与Counters（技术术语）**（Leaderboards and Counters）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Leaderboards（技术术语）与Counters（技术术语）**（Leaderboards and Counters）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "8uRpPJ0iD4XnQPKruQc8P": {
      "id": "8uRpPJ0iD4XnQPKruQc8P",
      "zh": "数据持久化Options",
      "en": "Data Persistence Options",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「数据持久化Options」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**数据持久化Options**（Data Persistence Options）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**数据持久化Options**（Data Persistence Options）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "uVewcyaFi1Pt2Gs0KrkfA": {
      "id": "uVewcyaFi1Pt2Gs0KrkfA",
      "zh": "Rich数据Structures",
      "en": "Rich Data Structures",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Rich数据Structures」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Rich数据Structures**（Rich Data Structures）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Rich数据Structures**（Rich Data Structures）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "5-3pd4rLDqRzMzSRVLdXh": {
      "id": "5-3pd4rLDqRzMzSRVLdXh",
      "zh": "High性能与扩展性",
      "en": "High Performance and Scalability",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「High性能与扩展性」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**High性能与扩展性**（High Performance and Scalability）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**High性能与扩展性**（High Performance and Scalability）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "EvWiEx_AoxAht6sKxzW2l": {
      "id": "EvWiEx_AoxAht6sKxzW2l",
      "zh": "Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比",
      "en": "Redis vs SQL/NoSQL DBs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比**（Redis vs SQL/NoSQL DBs）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "判断数据是否读多写少、能否接受短暂不一致。",
        "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。",
        "实现 cache-aside：先查 Redis，miss 再查 DB 并回填。",
        "压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
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
          "body": "**Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比**（Redis vs SQL/NoSQL DBs）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "设计 key（含业务维度）、TTL 和更新策略（先删缓存还是先写库）。 实现 cache-aside：先查 Redis，miss 再查 DB 并回填。 压测观察命中率，准备击穿/穿透/雪崩的兜底方案。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql",
      "routeLabels": [
        "能否缓存",
        "key/TTL",
        "cache-aside",
        "命中率"
      ]
    },
    "1Af5H0BgdAsRdBCNdHz5v": {
      "id": "1Af5H0BgdAsRdBCNdHz5v",
      "zh": "何时tochooseRedis?",
      "en": "When to choose Redis?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「何时tochooseRedis?」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**何时tochooseRedis?**（When to choose Redis?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**何时tochooseRedis?**（When to choose Redis?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Bf_kLfmy7_uflqC9N0-jt": {
      "id": "Bf_kLfmy7_uflqC9N0-jt",
      "zh": "使用包Managers",
      "en": "Using Package Managers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「使用包Managers」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**使用包Managers**（Using Package Managers）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**使用包Managers**（Using Package Managers）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "yBZ79s6mzGdj5AnX2H_Hy": {
      "id": "yBZ79s6mzGdj5AnX2H_Hy",
      "zh": "Pre-compiled Binaries（技术术语）",
      "en": "Pre-compiled Binaries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Pre-compiled Binaries（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Pre-compiled Binaries（技术术语）**（Pre-compiled Binaries）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Pre-compiled Binaries（技术术语）**（Pre-compiled Binaries）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "TDxv0q7jlZ26uZYYlneem": {
      "id": "TDxv0q7jlZ26uZYYlneem",
      "zh": "使用Docker",
      "en": "Using Docker",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「使用Docker」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**使用Docker**（Using Docker）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**使用Docker**（Using Docker）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "43LvShQhmoWQ8Nye7fLkz": {
      "id": "43LvShQhmoWQ8Nye7fLkz",
      "zh": "Startingthe服务端",
      "en": "Starting the Server",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Startingthe服务端」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Startingthe服务端**（Starting the Server）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Startingthe服务端**（Starting the Server）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "BOGXTjmCLo6WI6mYDsqRu": {
      "id": "BOGXTjmCLo6WI6mYDsqRu",
      "zh": "Connecting使用RedisCLI",
      "en": "Connecting using Redis CLI",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Connecting使用RedisCLI」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Connecting使用RedisCLI**（Connecting using Redis CLI）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Connecting使用RedisCLI**（Connecting using Redis CLI）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "NhcZM4nUQoSBBf_1qXi6l": {
      "id": "NhcZM4nUQoSBBf_1qXi6l",
      "zh": "Commands/SET,GET（技术术语）基础",
      "en": "Basic Commands / SET, GET",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Commands/SET,GET（技术术语）基础」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Commands/SET,GET（技术术语）基础**（Basic Commands / SET, GET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Commands/SET,GET（技术术语）基础**（Basic Commands / SET, GET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "DOdNkTY1yIMipWA2CD9xH": {
      "id": "DOdNkTY1yIMipWA2CD9xH",
      "zh": "设置与Getting密钥",
      "en": "Setting and Getting Keys",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「设置与Getting密钥」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**设置与Getting密钥**（Setting and Getting Keys）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**设置与Getting密钥**（Setting and Getting Keys）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "lV_MnUNTB2h925idX0YWk": {
      "id": "lV_MnUNTB2h925idX0YWk",
      "zh": "DEL（技术术语）",
      "en": "DEL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「DEL（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**DEL（技术术语）**（DEL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**DEL（技术术语）**（DEL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "U84XgBFPyIbY0W5afH4cx": {
      "id": "U84XgBFPyIbY0W5afH4cx",
      "zh": "概览of数据类型",
      "en": "Overview of Data Types",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「概览of数据类型」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**概览of数据类型**（Overview of Data Types）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**概览of数据类型**（Overview of Data Types）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "ltF4vCT9ZA2XuUuHnuGnN": {
      "id": "ltF4vCT9ZA2XuUuHnuGnN",
      "zh": "SET（技术术语）",
      "en": "SET",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SET（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SET（技术术语）**（SET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SET（技术术语）**（SET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "mQc4H2ZMMSVjh33LJY8mK": {
      "id": "mQc4H2ZMMSVjh33LJY8mK",
      "zh": "GET（技术术语）",
      "en": "GET",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「GET（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**GET（技术术语）**（GET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**GET（技术术语）**（GET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "5K9qyC4mrhXYWOC8WSq8C": {
      "id": "5K9qyC4mrhXYWOC8WSq8C",
      "zh": "INCR（技术术语）",
      "en": "INCR",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「INCR（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**INCR（技术术语）**（INCR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**INCR（技术术语）**（INCR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "t4BXPofF8OCqH5KHwdYVh": {
      "id": "t4BXPofF8OCqH5KHwdYVh",
      "zh": "DECR（技术术语）",
      "en": "DECR",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「DECR（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**DECR（技术术语）**（DECR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**DECR（技术术语）**（DECR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "cPWd53BO6tm-uy4gqLdtZ": {
      "id": "cPWd53BO6tm-uy4gqLdtZ",
      "zh": "APPEND（技术术语）",
      "en": "APPEND",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「APPEND（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**APPEND（技术术语）**（APPEND）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**APPEND（技术术语）**（APPEND）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "eJQW986HM4Wf1o1i2FnXs": {
      "id": "eJQW986HM4Wf1o1i2FnXs",
      "zh": "STRLEN（技术术语）",
      "en": "STRLEN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「STRLEN（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**STRLEN（技术术语）**（STRLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**STRLEN（技术术语）**（STRLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "0v8uLWRCbAqEmKKdYaRQW": {
      "id": "0v8uLWRCbAqEmKKdYaRQW",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "2_E2VwbjTgk4xxTFWfHuV": {
      "id": "2_E2VwbjTgk4xxTFWfHuV",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "nS0DHhfy4wxHItgOFhulA": {
      "id": "nS0DHhfy4wxHItgOFhulA",
      "zh": "expire（技术术语）",
      "en": "expire",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「expire（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**expire（技术术语）**（expire）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**expire（技术术语）**（expire）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Vll7VMmGWSI5XGZ9JpHyl": {
      "id": "Vll7VMmGWSI5XGZ9JpHyl",
      "zh": "TTL（技术术语）",
      "en": "TTL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「TTL（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**TTL（技术术语）**（TTL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**TTL（技术术语）**（TTL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Kq7G89KaZZMFkrH-9WZoS": {
      "id": "Kq7G89KaZZMFkrH-9WZoS",
      "zh": "LPUSH（技术术语）",
      "en": "LPUSH",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「LPUSH（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**LPUSH（技术术语）**（LPUSH）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**LPUSH（技术术语）**（LPUSH）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "jC8G1o7yFj7D_PGmOIgcD": {
      "id": "jC8G1o7yFj7D_PGmOIgcD",
      "zh": "RPUSH（技术术语）",
      "en": "RPUSH",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「RPUSH（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**RPUSH（技术术语）**（RPUSH）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RPUSH（技术术语）**（RPUSH）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "voa61RTWMJD3Sk8DNJoVQ": {
      "id": "voa61RTWMJD3Sk8DNJoVQ",
      "zh": "LPOP（技术术语）",
      "en": "LPOP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「LPOP（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**LPOP（技术术语）**（LPOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**LPOP（技术术语）**（LPOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "brUGqWZ287EWtvl9uUbNt": {
      "id": "brUGqWZ287EWtvl9uUbNt",
      "zh": "RPOP（技术术语）",
      "en": "RPOP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「RPOP（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**RPOP（技术术语）**（RPOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RPOP（技术术语）**（RPOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "8JTtBy6oD2wFYDizVkcVa": {
      "id": "8JTtBy6oD2wFYDizVkcVa",
      "zh": "LRANGE（技术术语）",
      "en": "LRANGE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「LRANGE（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**LRANGE（技术术语）**（LRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**LRANGE（技术术语）**（LRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "hBFEUXtuzUTzWZKp2qWaZ": {
      "id": "hBFEUXtuzUTzWZKp2qWaZ",
      "zh": "LINDEX（技术术语）",
      "en": "LINDEX",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「LINDEX（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**LINDEX（技术术语）**（LINDEX）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「LINDEX（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**LINDEX（技术术语）**（LINDEX）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "4oCcP9FxDJSDMHCEVBCNa": {
      "id": "4oCcP9FxDJSDMHCEVBCNa",
      "zh": "LLEN（技术术语）",
      "en": "LLEN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「LLEN（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**LLEN（技术术语）**（LLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**LLEN（技术术语）**（LLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "9KvHcS5F4Jj5ZXgIAdOQY": {
      "id": "9KvHcS5F4Jj5ZXgIAdOQY",
      "zh": "LMOVE（技术术语）",
      "en": "LMOVE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「LMOVE（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**LMOVE（技术术语）**（LMOVE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**LMOVE（技术术语）**（LMOVE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "eBeEUYY-IL_CMkcm31lUL": {
      "id": "eBeEUYY-IL_CMkcm31lUL",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "XTwNCCtzXvZMdaex4gZEh": {
      "id": "XTwNCCtzXvZMdaex4gZEh",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Qgkpr9vf9d6-vUg1o8XFj": {
      "id": "Qgkpr9vf9d6-vUg1o8XFj",
      "zh": "Sets（技术术语）",
      "en": "Sets",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Sets（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Sets（技术术语）**（Sets）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Sets（技术术语）**（Sets）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "xUKoQps69FFQrJeuhD1pz": {
      "id": "xUKoQps69FFQrJeuhD1pz",
      "zh": "SADD（技术术语）",
      "en": "SADD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SADD（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SADD（技术术语）**（SADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SADD（技术术语）**（SADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "mQ0ILns53n1By0Tq6xSZI": {
      "id": "mQ0ILns53n1By0Tq6xSZI",
      "zh": "SMEMBERS（技术术语）",
      "en": "SMEMBERS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SMEMBERS（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SMEMBERS（技术术语）**（SMEMBERS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SMEMBERS（技术术语）**（SMEMBERS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "WQWVL5GT_scHdgfCtI7WT": {
      "id": "WQWVL5GT_scHdgfCtI7WT",
      "zh": "SREM（技术术语）",
      "en": "SREM",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SREM（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SREM（技术术语）**（SREM）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SREM（技术术语）**（SREM）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Ji5ghlcGJtlmErHFqVf3d": {
      "id": "Ji5ghlcGJtlmErHFqVf3d",
      "zh": "SISMEMBER（技术术语）",
      "en": "SISMEMBER",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SISMEMBER（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SISMEMBER（技术术语）**（SISMEMBER）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SISMEMBER（技术术语）**（SISMEMBER）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "5aLfNBewK4Dx017qVNO3T": {
      "id": "5aLfNBewK4Dx017qVNO3T",
      "zh": "SINTER（技术术语）",
      "en": "SINTER",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SINTER（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SINTER（技术术语）**（SINTER）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SINTER（技术术语）**（SINTER）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "2gZL4a9aWGKWLa89iyHTc": {
      "id": "2gZL4a9aWGKWLa89iyHTc",
      "zh": "SCARD（技术术语）",
      "en": "SCARD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SCARD（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SCARD（技术术语）**（SCARD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SCARD（技术术语）**（SCARD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "6QoYa-N2BKNBaRtvNeVNm": {
      "id": "6QoYa-N2BKNBaRtvNeVNm",
      "zh": "SUNION（技术术语）",
      "en": "SUNION",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SUNION（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SUNION（技术术语）**（SUNION）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SUNION（技术术语）**（SUNION）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "JX5ajmcUmkshTO-mLF8lH": {
      "id": "JX5ajmcUmkshTO-mLF8lH",
      "zh": "SDIFF（技术术语）",
      "en": "SDIFF",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SDIFF（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SDIFF（技术术语）**（SDIFF）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SDIFF（技术术语）**（SDIFF）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "2SG4Hr9Tuv6cxmGkrKjYZ": {
      "id": "2SG4Hr9Tuv6cxmGkrKjYZ",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "3hayYoSZepw7pppBubotg": {
      "id": "3hayYoSZepw7pppBubotg",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "b48EUyFGUeSjtT5fOa_m6": {
      "id": "b48EUyFGUeSjtT5fOa_m6",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Wl23Jh-ASJOQ850yjaTIU": {
      "id": "Wl23Jh-ASJOQ850yjaTIU",
      "zh": "Strings（技术术语）",
      "en": "Strings",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Strings（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Strings（技术术语）**（Strings）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Strings（技术术语）**（Strings）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "4-C4XqACUp4nvcMIj6djF": {
      "id": "4-C4XqACUp4nvcMIj6djF",
      "zh": "Lists（技术术语）",
      "en": "Lists",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Lists（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Lists（技术术语）**（Lists）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Lists（技术术语）**（Lists）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "wY46Qj5Inw_ClBNI9PB_2": {
      "id": "wY46Qj5Inw_ClBNI9PB_2",
      "zh": "Hashes（技术术语）",
      "en": "Hashes",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Hashes（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Hashes（技术术语）**（Hashes）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Hashes（技术术语）**（Hashes）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "BOJzn9SWad9oRRdY_ub01": {
      "id": "BOJzn9SWad9oRRdY_ub01",
      "zh": "HSET（技术术语）",
      "en": "HSET",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「HSET（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**HSET（技术术语）**（HSET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**HSET（技术术语）**（HSET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "MsKg9m5jFwHM2Bzjf-vdu": {
      "id": "MsKg9m5jFwHM2Bzjf-vdu",
      "zh": "HGET（技术术语）",
      "en": "HGET",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「HGET（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**HGET（技术术语）**（HGET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**HGET（技术术语）**（HGET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "TpR33sJ-tAjeG3jpGTvYR": {
      "id": "TpR33sJ-tAjeG3jpGTvYR",
      "zh": "HGETALL（技术术语）",
      "en": "HGETALL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「HGETALL（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**HGETALL（技术术语）**（HGETALL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**HGETALL（技术术语）**（HGETALL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "E7xFZkqqbzokD5KGTn9zJ": {
      "id": "E7xFZkqqbzokD5KGTn9zJ",
      "zh": "HDEL（技术术语）",
      "en": "HDEL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「HDEL（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**HDEL（技术术语）**（HDEL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**HDEL（技术术语）**（HDEL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "adhLMuSmfYMRyWTwIgnyE": {
      "id": "adhLMuSmfYMRyWTwIgnyE",
      "zh": "HEXISTS（技术术语）",
      "en": "HEXISTS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「HEXISTS（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**HEXISTS（技术术语）**（HEXISTS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**HEXISTS（技术术语）**（HEXISTS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "jtVnUD-na-WffMaS8qYfu": {
      "id": "jtVnUD-na-WffMaS8qYfu",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "QTbkWZ7BpqYmBhUivccPu": {
      "id": "QTbkWZ7BpqYmBhUivccPu",
      "zh": "Sorted Sets（技术术语）",
      "en": "Sorted Sets",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Sorted Sets（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Sorted Sets（技术术语）**（Sorted Sets）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Sorted Sets（技术术语）**（Sorted Sets）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "0swsBD0sOY-o5lzibT999": {
      "id": "0swsBD0sOY-o5lzibT999",
      "zh": "ZADD（技术术语）",
      "en": "ZADD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「ZADD（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**ZADD（技术术语）**（ZADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**ZADD（技术术语）**（ZADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "3pFChX6YIItrBz9lxu4XM": {
      "id": "3pFChX6YIItrBz9lxu4XM",
      "zh": "ZRANGE（技术术语）",
      "en": "ZRANGE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「ZRANGE（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**ZRANGE（技术术语）**（ZRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**ZRANGE（技术术语）**（ZRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "OlbixGa5RmdqEt7snY04j": {
      "id": "OlbixGa5RmdqEt7snY04j",
      "zh": "ZRANGEBYSCORE（技术术语）",
      "en": "ZRANGEBYSCORE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「ZRANGEBYSCORE（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**ZRANGEBYSCORE（技术术语）**（ZRANGEBYSCORE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**ZRANGEBYSCORE（技术术语）**（ZRANGEBYSCORE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "m0FZDPwNE71zcwM_gUwz0": {
      "id": "m0FZDPwNE71zcwM_gUwz0",
      "zh": "ZREM（技术术语）",
      "en": "ZREM",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「ZREM（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**ZREM（技术术语）**（ZREM）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**ZREM（技术术语）**（ZREM）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "W4v7FIQr2k-Vbm-HdfKog": {
      "id": "W4v7FIQr2k-Vbm-HdfKog",
      "zh": "ZINCRBY（技术术语）",
      "en": "ZINCRBY",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「ZINCRBY（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**ZINCRBY（技术术语）**（ZINCRBY）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**ZINCRBY（技术术语）**（ZINCRBY）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "AF_kWM4V8n5Ux06IgEVTl": {
      "id": "AF_kWM4V8n5Ux06IgEVTl",
      "zh": "ZRANK（技术术语）",
      "en": "ZRANK",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「ZRANK（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**ZRANK（技术术语）**（ZRANK）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**ZRANK（技术术语）**（ZRANK）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "O-fZM_U-tW0pYtNzN_8Ax": {
      "id": "O-fZM_U-tW0pYtNzN_8Ax",
      "zh": "ZCOUNT（技术术语）",
      "en": "ZCOUNT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「ZCOUNT（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**ZCOUNT（技术术语）**（ZCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**ZCOUNT（技术术语）**（ZCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "P6TDUCroLlEI7qePBFHIH": {
      "id": "P6TDUCroLlEI7qePBFHIH",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "lxevY15ZyP43s_JrEqMX7": {
      "id": "lxevY15ZyP43s_JrEqMX7",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "o6e_CwxfPoU6qkfWkwKwj": {
      "id": "o6e_CwxfPoU6qkfWkwKwj",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "jCaVx5wvsvuyqtwh6m8si": {
      "id": "jCaVx5wvsvuyqtwh6m8si",
      "zh": "Naming Conventions（技术术语）",
      "en": "Naming Conventions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Naming Conventions（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Naming Conventions（技术术语）**（Naming Conventions）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Naming Conventions（技术术语）**（Naming Conventions）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "UlQHqw1dbxZnAKbsWsOgU": {
      "id": "UlQHqw1dbxZnAKbsWsOgU",
      "zh": "Retrievalby模式",
      "en": "Retrieval by Pattern",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Retrievalby模式」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Retrievalby模式**（Retrieval by Pattern）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Retrievalby模式**（Retrieval by Pattern）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "OSIYDYPGz8Vgo9SU9GGH9": {
      "id": "OSIYDYPGz8Vgo9SU9GGH9",
      "zh": "Expiration（技术术语）",
      "en": "Expiration",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Expiration（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Expiration（技术术语）**（Expiration）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Expiration（技术术语）**（Expiration）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "jrgaoDnt_RxTu79hk4hCD": {
      "id": "jrgaoDnt_RxTu79hk4hCD",
      "zh": "原子性inRedis",
      "en": "Atomicity in Redis",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「原子性inRedis」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**原子性inRedis**（Atomicity in Redis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**原子性inRedis**（Atomicity in Redis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "LHlwjN3WHYUBUafzzwsWQ": {
      "id": "LHlwjN3WHYUBUafzzwsWQ",
      "zh": "Pipelining（技术术语）",
      "en": "Pipelining",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Pipelining（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Pipelining（技术术语）**（Pipelining）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Pipelining（技术术语）**（Pipelining）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "7JzeyTrkZ_1_yxMVrqvZU": {
      "id": "7JzeyTrkZ_1_yxMVrqvZU",
      "zh": "Batch Operations（技术术语）",
      "en": "Batch Operations",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Batch Operations（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Batch Operations（技术术语）**（Batch Operations）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Batch Operations（技术术语）**（Batch Operations）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "0Q3AkE8leWAyYsww3-BHX": {
      "id": "0Q3AkE8leWAyYsww3-BHX",
      "zh": "Bitmaps（技术术语）",
      "en": "Bitmaps",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Bitmaps（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Bitmaps（技术术语）**（Bitmaps）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Bitmaps（技术术语）**（Bitmaps）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "B-YUFhPQNdr1KZNupmR5N": {
      "id": "B-YUFhPQNdr1KZNupmR5N",
      "zh": "SETBIT（技术术语）",
      "en": "SETBIT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SETBIT（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SETBIT（技术术语）**（SETBIT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SETBIT（技术术语）**（SETBIT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "0HFLJfcrcSnAVTecG3P8W": {
      "id": "0HFLJfcrcSnAVTecG3P8W",
      "zh": "GETBIT（技术术语）",
      "en": "GETBIT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「GETBIT（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**GETBIT（技术术语）**（GETBIT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**GETBIT（技术术语）**（GETBIT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "jpcyXSSib7q4WBPmpgnXA": {
      "id": "jpcyXSSib7q4WBPmpgnXA",
      "zh": "BITCOUNT（技术术语）",
      "en": "BITCOUNT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「BITCOUNT（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**BITCOUNT（技术术语）**（BITCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**BITCOUNT（技术术语）**（BITCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "tkrxArg_oYH0aQfM8NkD2": {
      "id": "tkrxArg_oYH0aQfM8NkD2",
      "zh": "BITOP（技术术语）",
      "en": "BITOP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「BITOP（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**BITOP（技术术语）**（BITOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**BITOP（技术术语）**（BITOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Df1Eu7CuA-ARYii9JVvnm": {
      "id": "Df1Eu7CuA-ARYii9JVvnm",
      "zh": "BITPOS（技术术语）",
      "en": "BITPOS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「BITPOS（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**BITPOS（技术术语）**（BITPOS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**BITPOS（技术术语）**（BITPOS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "s7PEr-5TAm5EGJm0RSjPJ": {
      "id": "s7PEr-5TAm5EGJm0RSjPJ",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "cszjT3YK8oyhGpqLTQzwX": {
      "id": "cszjT3YK8oyhGpqLTQzwX",
      "zh": "HyperLogLog（技术术语）",
      "en": "HyperLogLog",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「HyperLogLog（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**HyperLogLog（技术术语）**（HyperLogLog）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**HyperLogLog（技术术语）**（HyperLogLog）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "8a4DmPZrX2xGZ7zdWxS63": {
      "id": "8a4DmPZrX2xGZ7zdWxS63",
      "zh": "PFADD（技术术语）",
      "en": "PFADD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「PFADD（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**PFADD（技术术语）**（PFADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**PFADD（技术术语）**（PFADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "JWT30KIJQHVw0MXI5sGR6": {
      "id": "JWT30KIJQHVw0MXI5sGR6",
      "zh": "PFCOUNT（技术术语）",
      "en": "PFCOUNT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「PFCOUNT（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**PFCOUNT（技术术语）**（PFCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**PFCOUNT（技术术语）**（PFCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "s50jr_XOUcxh65-tGCKf5": {
      "id": "s50jr_XOUcxh65-tGCKf5",
      "zh": "PFMERGE（技术术语）",
      "en": "PFMERGE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「PFMERGE（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**PFMERGE（技术术语）**（PFMERGE）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "从 main 切出 feature 分支，在分支上独立开发，不影响主线。",
        "开发过程中多次 commit，保持每个提交粒度可 review。",
        "用 merge 或 rebase 把 feature 合回 main，解决冲突后再推送。",
        "合并后删除已合入的分支，保持仓库整洁。"
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
          "body": "**PFMERGE（技术术语）**（PFMERGE）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "真正要掌握什么",
          "body": "开发过程中多次 commit，保持每个提交粒度可 review。 用 merge 或 rebase 把 feature 合回 main，解决冲突后再推送。 合并后删除已合入的分支，保持仓库整洁。"
        },
        {
          "title": "动手验证",
          "body": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
        }
      ],
      "kind": "git",
      "routeLabels": [
        "切分支",
        "分支开发",
        "合并回主线",
        "清理分支"
      ]
    },
    "XPeCvikPuu6EJ8UcOLGPh": {
      "id": "XPeCvikPuu6EJ8UcOLGPh",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "zXs_9n2yEb_eVi0WuOQKH": {
      "id": "zXs_9n2yEb_eVi0WuOQKH",
      "zh": "Streams（技术术语）",
      "en": "Streams",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Streams（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Streams（技术术语）**（Streams）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Streams（技术术语）**（Streams）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "7isWhgrUA6M5IGM2U2tm4": {
      "id": "7isWhgrUA6M5IGM2U2tm4",
      "zh": "XADD（技术术语）",
      "en": "XADD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「XADD（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**XADD（技术术语）**（XADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**XADD（技术术语）**（XADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "4sKiAtX5aIL4NDsQkilNC": {
      "id": "4sKiAtX5aIL4NDsQkilNC",
      "zh": "XREAD（技术术语）",
      "en": "XREAD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「XREAD（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**XREAD（技术术语）**（XREAD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**XREAD（技术术语）**（XREAD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "CiYFuYE8XudZkR6AW2NQ7": {
      "id": "CiYFuYE8XudZkR6AW2NQ7",
      "zh": "XRANGE（技术术语）",
      "en": "XRANGE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「XRANGE（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**XRANGE（技术术语）**（XRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**XRANGE（技术术语）**（XRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "DQJCMEw13lELcw_AwLfrT": {
      "id": "DQJCMEw13lELcw_AwLfrT",
      "zh": "XLEN（技术术语）",
      "en": "XLEN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「XLEN（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**XLEN（技术术语）**（XLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**XLEN（技术术语）**（XLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "zXlSBfa-Gi9_GhSYEzre3": {
      "id": "zXlSBfa-Gi9_GhSYEzre3",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "4-z4hDKm86qQatYnmE21R": {
      "id": "4-z4hDKm86qQatYnmE21R",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "_NiUdVQ85qnvryI38k_vQ": {
      "id": "_NiUdVQ85qnvryI38k_vQ",
      "zh": "Geospatial索引",
      "en": "Geospatial Indexes",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Geospatial索引」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Geospatial索引**（Geospatial Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Geospatial索引」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Geospatial索引**（Geospatial Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "U3N1EgHFs1-YUaB_VrJfw": {
      "id": "U3N1EgHFs1-YUaB_VrJfw",
      "zh": "GEOADD（技术术语）",
      "en": "GEOADD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「GEOADD（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**GEOADD（技术术语）**（GEOADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**GEOADD（技术术语）**（GEOADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "OWWDLuGTbdNwME7v2jxVP": {
      "id": "OWWDLuGTbdNwME7v2jxVP",
      "zh": "GEOSEARCH（技术术语）",
      "en": "GEOSEARCH",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「GEOSEARCH（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**GEOSEARCH（技术术语）**（GEOSEARCH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**GEOSEARCH（技术术语）**（GEOSEARCH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "GNMjrLPkpTphneoQ0GoZF": {
      "id": "GNMjrLPkpTphneoQ0GoZF",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "FCbdKnkI1ZHGekT6yiGua": {
      "id": "FCbdKnkI1ZHGekT6yiGua",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "9W_jaK1DSEZHRKdPcUM7h": {
      "id": "9W_jaK1DSEZHRKdPcUM7h",
      "zh": "Pub/Sub（技术术语）",
      "en": "Pub/Sub",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Pub/Sub（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Pub/Sub（技术术语）**（Pub/Sub）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Pub/Sub（技术术语）**（Pub/Sub）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "55BCntuWlaQiLPqNtb-2i": {
      "id": "55BCntuWlaQiLPqNtb-2i",
      "zh": "SUBSCRIBE（技术术语）",
      "en": "SUBSCRIBE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SUBSCRIBE（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SUBSCRIBE（技术术语）**（SUBSCRIBE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SUBSCRIBE（技术术语）**（SUBSCRIBE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "5gkZzm2F4vu6IxUoJLYbK": {
      "id": "5gkZzm2F4vu6IxUoJLYbK",
      "zh": "UNSUBSCRIBE（技术术语）",
      "en": "UNSUBSCRIBE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「UNSUBSCRIBE（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**UNSUBSCRIBE（技术术语）**（UNSUBSCRIBE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**UNSUBSCRIBE（技术术语）**（UNSUBSCRIBE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "gIPo-2CNqE1BsOaDzmkCU": {
      "id": "gIPo-2CNqE1BsOaDzmkCU",
      "zh": "PUBLISH（技术术语）",
      "en": "PUBLISH",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「PUBLISH（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**PUBLISH（技术术语）**（PUBLISH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**PUBLISH（技术术语）**（PUBLISH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "V-d6q-3Sf0dl5v8xiCQwl": {
      "id": "V-d6q-3Sf0dl5v8xiCQwl",
      "zh": "More Commands（技术术语）",
      "en": "More Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「More Commands（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**More Commands（技术术语）**（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "MvyE_JUJej0UB9xe8Anfj": {
      "id": "MvyE_JUJej0UB9xe8Anfj",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "YHbWlKrQqptUDbaQVy0_A": {
      "id": "YHbWlKrQqptUDbaQVy0_A",
      "zh": "Transactions（技术术语）",
      "en": "Transactions",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Transactions（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Transactions（技术术语）**（Transactions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Transactions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Transactions（技术术语）**（Transactions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "c-y5Eck8VtSyIf8RAW9p7": {
      "id": "c-y5Eck8VtSyIf8RAW9p7",
      "zh": "WATCH（技术术语）",
      "en": "WATCH",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「WATCH（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**WATCH（技术术语）**（WATCH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**WATCH（技术术语）**（WATCH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Ljy-Mc0EBBX4_vXfYZ5-4": {
      "id": "Ljy-Mc0EBBX4_vXfYZ5-4",
      "zh": "EXEC（技术术语）",
      "en": "EXEC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「EXEC（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**EXEC（技术术语）**（EXEC）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**EXEC（技术术语）**（EXEC）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "U6hST1MkS16T2CHV3-Ise": {
      "id": "U6hST1MkS16T2CHV3-Ise",
      "zh": "MULTI（技术术语）",
      "en": "MULTI",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「MULTI（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**MULTI（技术术语）**（MULTI）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**MULTI（技术术语）**（MULTI）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "msW0Wd2H-6FFNDnjC64t-": {
      "id": "msW0Wd2H-6FFNDnjC64t-",
      "zh": "Optimistic Locking（技术术语）",
      "en": "Optimistic Locking",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Optimistic Locking（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Optimistic Locking（技术术语）**（Optimistic Locking）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Optimistic Locking（技术术语）**（Optimistic Locking）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Veb30QrPYNjUn13dtGbUr": {
      "id": "Veb30QrPYNjUn13dtGbUr",
      "zh": "Lua Scripting（技术术语）",
      "en": "Lua Scripting",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Lua Scripting（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Lua Scripting（技术术语）**（Lua Scripting）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Lua Scripting（技术术语）**（Lua Scripting）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "rjeq3i9oX8IGyQzo--L3c": {
      "id": "rjeq3i9oX8IGyQzo--L3c",
      "zh": "EVAL（技术术语）",
      "en": "EVAL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「EVAL（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**EVAL（技术术语）**（EVAL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**EVAL（技术术语）**（EVAL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "3X0x_PcJGWBVPL-LSVAln": {
      "id": "3X0x_PcJGWBVPL-LSVAln",
      "zh": "EVALSHA（技术术语）",
      "en": "EVALSHA",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「EVALSHA（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**EVALSHA（技术术语）**（EVALSHA）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**EVALSHA（技术术语）**（EVALSHA）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "kF_nGo845XDwLkwcQt008": {
      "id": "kF_nGo845XDwLkwcQt008",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "bQaek7f3dAaZfSUhwovm1": {
      "id": "bQaek7f3dAaZfSUhwovm1",
      "zh": "持久化Options",
      "en": "Persistence Options",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「持久化Options」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**持久化Options**（Persistence Options）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**持久化Options**（Persistence Options）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "D3pZdAjwPFMRxX1-iyu5-": {
      "id": "D3pZdAjwPFMRxX1-iyu5-",
      "zh": "如何RDBWorks?",
      "en": "How RDB Works?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「如何RDBWorks?」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**如何RDBWorks?**（How RDB Works?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**如何RDBWorks?**（How RDB Works?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "_pb2DPrFUUZabKxWsuFUo": {
      "id": "_pb2DPrFUUZabKxWsuFUo",
      "zh": "Configuring Save Interval（技术术语）",
      "en": "Configuring Save Interval",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Configuring Save Interval（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Configuring Save Interval（技术术语）**（Configuring Save Interval）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Configuring Save Interval（技术术语）**（Configuring Save Interval）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Z6yJwUkcDX08HoMyf1LwX": {
      "id": "Z6yJwUkcDX08HoMyf1LwX",
      "zh": "Usecases/最佳实践",
      "en": "Usecases / Best Practices",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases/最佳实践」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases/最佳实践**（Usecases / Best Practices）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases/最佳实践**（Usecases / Best Practices）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "PTj6oxvpw8vP295WvAI80": {
      "id": "PTj6oxvpw8vP295WvAI80",
      "zh": "如何AOFWorks?",
      "en": "How AOF Works?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「如何AOFWorks?」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**如何AOFWorks?**（How AOF Works?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**如何AOFWorks?**（How AOF Works?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "ibaZ34-laQtUyxAsERi7o": {
      "id": "ibaZ34-laQtUyxAsERi7o",
      "zh": "AOFrewrite（技术术语）与compaction（技术术语）",
      "en": "AOF rewrite & compaction",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「AOFrewrite（技术术语）与compaction（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**AOFrewrite（技术术语）与compaction（技术术语）**（AOF rewrite & compaction）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**AOFrewrite（技术术语）与compaction（技术术语）**（AOF rewrite & compaction）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "9ToKTUqbi-NV5Wcwb21PT": {
      "id": "9ToKTUqbi-NV5Wcwb21PT",
      "zh": "Truncation / Corruption（技术术语）",
      "en": "Truncation / Corruption",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Truncation / Corruption（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Truncation / Corruption（技术术语）**（Truncation / Corruption）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Truncation / Corruption（技术术语）**（Truncation / Corruption）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "VvOQUO22ZF8VvDSqHENNU": {
      "id": "VvOQUO22ZF8VvDSqHENNU",
      "zh": "Usecases（技术术语）",
      "en": "Usecases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases（技术术语）**（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "vzp7DUpjklzIA0E9WxJQA": {
      "id": "vzp7DUpjklzIA0E9WxJQA",
      "zh": "Usecases/最佳实践",
      "en": "Usecases / Best Practices",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Usecases/最佳实践」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Usecases/最佳实践**（Usecases / Best Practices）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Usecases/最佳实践**（Usecases / Best Practices）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "80035BzcB-fKCvD_3N8zE": {
      "id": "80035BzcB-fKCvD_3N8zE",
      "zh": "No持久化Option",
      "en": "No Persistence Option",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「No持久化Option」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**No持久化Option**（No Persistence Option）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**No持久化Option**（No Persistence Option）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "3S-qqOlfr60HR4VvDr4He": {
      "id": "3S-qqOlfr60HR4VvDr4He",
      "zh": "RDB（技术术语）与AOFTradeoffs（技术术语）对比",
      "en": "RDB vs AOF Tradeoffs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「RDB（技术术语）与AOFTradeoffs（技术术语）对比」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**RDB（技术术语）与AOFTradeoffs（技术术语）对比**（RDB vs AOF Tradeoffs）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RDB（技术术语）与AOFTradeoffs（技术术语）对比**（RDB vs AOF Tradeoffs）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "S5Y26m1oHCQpB-oLCdtac": {
      "id": "S5Y26m1oHCQpB-oLCdtac",
      "zh": "Hybrid持久化",
      "en": "Hybrid Persistence",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Hybrid持久化」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Hybrid持久化**（Hybrid Persistence）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Hybrid持久化**（Hybrid Persistence）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "rSD8nJ-uNpHJVe5Hn66h7": {
      "id": "rSD8nJ-uNpHJVe5Hn66h7",
      "zh": "复制基础",
      "en": "Replication Basics",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「复制基础」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**复制基础**（Replication Basics）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**复制基础**（Replication Basics）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "nci3OB1NE1zJHUPfZCOpT": {
      "id": "nci3OB1NE1zJHUPfZCOpT",
      "zh": "Redis Sentinel（技术术语）",
      "en": "Redis Sentinel",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Redis Sentinel（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Redis Sentinel（技术术语）**（Redis Sentinel）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Redis Sentinel（技术术语）**（Redis Sentinel）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "AQiCcHS6dBAAAPloxiXub": {
      "id": "AQiCcHS6dBAAAPloxiXub",
      "zh": "Clustering（技术术语）",
      "en": "Clustering",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Clustering（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Clustering（技术术语）**（Clustering）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Clustering（技术术语）**（Clustering）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Qy42paiTUsO8HIwbWTMui": {
      "id": "Qy42paiTUsO8HIwbWTMui",
      "zh": "认证",
      "en": "Authentication",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「认证」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**认证**（Authentication）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**认证**（Authentication）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "wsuKH7YwGDV6GYQbdhA4o": {
      "id": "wsuKH7YwGDV6GYQbdhA4o",
      "zh": "网络安全",
      "en": "Network Security",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「网络安全」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**网络安全**（Network Security）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**网络安全**（Network Security）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "gdiWwTQg6A-BFHdQBmgmH": {
      "id": "gdiWwTQg6A-BFHdQBmgmH",
      "zh": "SSL/TLS加密",
      "en": "SSL/TLS Encryption",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「SSL/TLS加密」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**SSL/TLS加密**（SSL/TLS Encryption）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SSL/TLS加密**（SSL/TLS Encryption）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "q2Jw49QUWCUGIfcEC1bZI": {
      "id": "q2Jw49QUWCUGIfcEC1bZI",
      "zh": "INFO（技术术语）",
      "en": "INFO",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「INFO（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**INFO（技术术语）**（INFO）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**INFO（技术术语）**（INFO）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "jBtEiylcedtaE6E20Uk4V": {
      "id": "jBtEiylcedtaE6E20Uk4V",
      "zh": "监控",
      "en": "MONITOR",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「监控」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**监控**（MONITOR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**监控**（MONITOR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "XBPwHgIsXupMsyoOFkJZ0": {
      "id": "XBPwHgIsXupMsyoOFkJZ0",
      "zh": "RedisInsight（技术术语）",
      "en": "RedisInsight",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「RedisInsight（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**RedisInsight（技术术语）**（RedisInsight）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RedisInsight（技术术语）**（RedisInsight）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "y5FPSAi6T-5X9SUfR58_-": {
      "id": "y5FPSAi6T-5X9SUfR58_-",
      "zh": "RedisCommander（技术术语）",
      "en": "RedisCommander",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「RedisCommander（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**RedisCommander（技术术语）**（RedisCommander）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RedisCommander（技术术语）**（RedisCommander）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "xF0wQYmtwXYkrzvWg5gOO": {
      "id": "xF0wQYmtwXYkrzvWg5gOO",
      "zh": "内存管理",
      "en": "Memory Management",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「内存管理」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**内存管理**（Memory Management）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**内存管理**（Memory Management）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Sd1ENOXSFCz1YqccXjr2A": {
      "id": "Sd1ENOXSFCz1YqccXjr2A",
      "zh": "MAX 最大值内存策略",
      "en": "Max Memory Policy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「MAX 最大值内存策略」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**MAX 最大值内存策略**（Max Memory Policy）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**MAX 最大值内存策略**（Max Memory Policy）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "yaCWw2KjX58SaPajUAb0d": {
      "id": "yaCWw2KjX58SaPajUAb0d",
      "zh": "Slow日志Analysis",
      "en": "Slow Log Analysis",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Slow日志Analysis」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Slow日志Analysis**（Slow Log Analysis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Slow日志Analysis**（Slow Log Analysis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "kgHwK4N-sfh6dHjd_D_me": {
      "id": "kgHwK4N-sfh6dHjd_D_me",
      "zh": "redis-基准测试",
      "en": "redis-benchmark",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「redis-基准测试」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**redis-基准测试**（redis-benchmark）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**redis-基准测试**（redis-benchmark）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "2p5RF4lVYfRvYTo1Ofm-a": {
      "id": "2p5RF4lVYfRvYTo1Ofm-a",
      "zh": "监控",
      "en": "Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「监控」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**监控**（Monitoring）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**监控**（Monitoring）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "hLIT00Iz7rV56ZBIUhWYn": {
      "id": "hLIT00Iz7rV56ZBIUhWYn",
      "zh": "Redis Modules（技术术语）",
      "en": "Redis Modules",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Redis Modules（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Redis Modules（技术术语）**（Redis Modules）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Redis Modules（技术术语）**（Redis Modules）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "jicsfYw56VrbRUt7M8c85": {
      "id": "jicsfYw56VrbRUt7M8c85",
      "zh": "RedisJSON（技术术语）",
      "en": "RedisJSON",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「RedisJSON（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**RedisJSON（技术术语）**（RedisJSON）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RedisJSON（技术术语）**（RedisJSON）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "_GdTXcJO8uJlhPdfrmeXG": {
      "id": "_GdTXcJO8uJlhPdfrmeXG",
      "zh": "Search（技术术语）",
      "en": "Search",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Search（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Search（技术术语）**（Search）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Search（技术术语）**（Search）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "RBr8opWSh2TKXC8Fmdg0j": {
      "id": "RBr8opWSh2TKXC8Fmdg0j",
      "zh": "RedisTimeSeries（技术术语）",
      "en": "RedisTimeSeries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「RedisTimeSeries（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**RedisTimeSeries（技术术语）**（RedisTimeSeries）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RedisTimeSeries（技术术语）**（RedisTimeSeries）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "GwVL5CvbnHsiWb1hVh7lK": {
      "id": "GwVL5CvbnHsiWb1hVh7lK",
      "zh": "RedisBloom（技术术语）",
      "en": "RedisBloom",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「RedisBloom（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**RedisBloom（技术术语）**（RedisBloom）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RedisBloom（技术术语）**（RedisBloom）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "giyKPtQ-pziA064P8OQD-": {
      "id": "giyKPtQ-pziA064P8OQD-",
      "zh": "redis.conf（技术术语）",
      "en": "redis.conf",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「redis.conf（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**redis.conf（技术术语）**（redis.conf）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**redis.conf（技术术语）**（redis.conf）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "wXRDsNGFckXV_CSiit5sN": {
      "id": "wXRDsNGFckXV_CSiit5sN",
      "zh": "备份与Recovery（技术术语）",
      "en": "Backup and Recovery",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「备份与Recovery（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**备份与Recovery（技术术语）**（Backup and Recovery）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**备份与Recovery（技术术语）**（Backup and Recovery）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "Cb-KazR4PuR86VX5oT0zi": {
      "id": "Cb-KazR4PuR86VX5oT0zi",
      "zh": "Upgrading Redis（技术术语）",
      "en": "Upgrading Redis",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Upgrading Redis（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Upgrading Redis（技术术语）**（Upgrading Redis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Upgrading Redis（技术术语）**（Upgrading Redis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "nUIfTkgm3PlSiqgun1BS7": {
      "id": "nUIfTkgm3PlSiqgun1BS7",
      "zh": "Disaster Recovery（技术术语）",
      "en": "Disaster Recovery",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Disaster Recovery（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Disaster Recovery（技术术语）**（Disaster Recovery）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Disaster Recovery（技术术语）**（Disaster Recovery）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "8lyXDuZJ-KHl4v2_8Ew1h": {
      "id": "8lyXDuZJ-KHl4v2_8Ew1h",
      "zh": "Redis Enterprise（技术术语）",
      "en": "Redis Enterprise",
      "level": "core",
      "nodeType": "topic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Redis Enterprise（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Redis Enterprise（技术术语）**（Redis Enterprise）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Redis Enterprise（技术术语）**（Redis Enterprise）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "cybF72wlJyJbHLUjitLvn": {
      "id": "cybF72wlJyJbHLUjitLvn",
      "zh": "Active-Active geo Distribution（技术术语）",
      "en": "Active-Active geo Distribution",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Active-Active geo Distribution（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Active-Active geo Distribution（技术术语）**（Active-Active geo Distribution）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Active-Active geo Distribution（技术术语）**（Active-Active geo Distribution）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "sWOFnbh2EyaHRzquz1UeF": {
      "id": "sWOFnbh2EyaHRzquz1UeF",
      "zh": "Redis on Flash（技术术语）",
      "en": "Redis on Flash",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「Redis on Flash（技术术语）」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**Redis on Flash（技术术语）**（Redis on Flash）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Redis on Flash（技术术语）**（Redis on Flash）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "ujs77bV8g8-FOm5hBtZFd": {
      "id": "ujs77bV8g8-FOm5hBtZFd",
      "zh": "安全与合规",
      "en": "Security and Compliance",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「安全与合规」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**安全与合规**（Security and Compliance）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**安全与合规**（Security and Compliance）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "JlLwy69eQ1bPHAOOJNqjo": {
      "id": "JlLwy69eQ1bPHAOOJNqjo",
      "zh": "何时toconsiderenterprise?",
      "en": "When to consider enterprise?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「何时toconsiderenterprise?」时，先把它放进 Redis 缓存 的真实场景，而不是孤立背术语。",
      "what": "**何时toconsiderenterprise?**（When to consider enterprise?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Redis 缓存 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**何时toconsiderenterprise?**（When to consider enterprise?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    }
  },
  "lessons": {
    "-3pADOHMDQ0H6ZKNjURyn": {
      "scene": "学习「什么是Redis?（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "什么是Redis?（技术术语）（What is Redis?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「什么是Redis?（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "M-EXrTDeAEMz_IkEi-ab4": {
      "scene": "学习「In-内存数据StructureStore」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "In-内存数据StructureStore（In-memory Data Structure Store）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「In-内存数据StructureStore」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "l2aXyO3STnhbFjvUXPpm2": {
      "scene": "学习「键-value数据库」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "键-value数据库（Key-value Database）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「键-value数据库」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「键-value数据库」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「键-value数据库」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "eHuBz_zSZK3rubn7nkd7g": {
      "scene": "学习「缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "缓存（Cache）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
    "mgGJTBU8ofvOzl9gYWhnG": {
      "scene": "学习「消息Broker」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "消息Broker（Message Broker）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「消息Broker」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "-TjnSOY8txYrhhxRV1OIl": {
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
    "bVJASI7bfSYqYnNhX83ng": {
      "scene": "学习「Real-time Analytics（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Real-time Analytics（技术术语）（Real-time Analytics）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Real-time Analytics（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "URxGmhZHr0Y8nyrYj0gJl": {
      "scene": "学习「会话管理」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "会话管理（Session Management）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「会话管理」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "ZCyId3aIoLv3duxoJdk2P": {
      "scene": "学习「Pub/Sub Messaging（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Pub/Sub Messaging（技术术语）（Pub/Sub Messaging）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Pub/Sub Messaging（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Fv1iGX22sApIEifM2IpJz": {
      "scene": "学习「Leaderboards（技术术语）与Counters（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Leaderboards（技术术语）与Counters（技术术语）（Leaderboards and Counters）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Leaderboards（技术术语）与Counters（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "8uRpPJ0iD4XnQPKruQc8P": {
      "scene": "学习「数据持久化Options」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "数据持久化Options（Data Persistence Options）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「数据持久化Options」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "uVewcyaFi1Pt2Gs0KrkfA": {
      "scene": "学习「Rich数据Structures」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Rich数据Structures（Rich Data Structures）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Rich数据Structures」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "5-3pd4rLDqRzMzSRVLdXh": {
      "scene": "学习「High性能与扩展性」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "High性能与扩展性（High Performance and Scalability）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「High性能与扩展性」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "EvWiEx_AoxAht6sKxzW2l": {
      "scene": "学习「Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比（Redis vs SQL/NoSQL DBs）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「Redis（技术术语）与SQL/NoSQLDBs（技术术语）对比」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "1Af5H0BgdAsRdBCNdHz5v": {
      "scene": "学习「何时tochooseRedis?」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "何时tochooseRedis?（When to choose Redis?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「何时tochooseRedis?」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Bf_kLfmy7_uflqC9N0-jt": {
      "scene": "学习「使用包Managers」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "使用包Managers（Using Package Managers）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「使用包Managers」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "yBZ79s6mzGdj5AnX2H_Hy": {
      "scene": "学习「Pre-compiled Binaries（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Pre-compiled Binaries（技术术语）（Pre-compiled Binaries）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Pre-compiled Binaries（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "TDxv0q7jlZ26uZYYlneem": {
      "scene": "学习「使用Docker」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "使用Docker（Using Docker）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「使用Docker」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "43LvShQhmoWQ8Nye7fLkz": {
      "scene": "学习「Startingthe服务端」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Startingthe服务端（Starting the Server）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Startingthe服务端」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "BOGXTjmCLo6WI6mYDsqRu": {
      "scene": "学习「Connecting使用RedisCLI」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Connecting使用RedisCLI（Connecting using Redis CLI）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Connecting使用RedisCLI」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "NhcZM4nUQoSBBf_1qXi6l": {
      "scene": "学习「Commands/SET,GET（技术术语）基础」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Commands/SET,GET（技术术语）基础（Basic Commands / SET, GET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Commands/SET,GET（技术术语）基础」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "DOdNkTY1yIMipWA2CD9xH": {
      "scene": "学习「设置与Getting密钥」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "设置与Getting密钥（Setting and Getting Keys）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「设置与Getting密钥」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "lV_MnUNTB2h925idX0YWk": {
      "scene": "学习「DEL（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "DEL（技术术语）（DEL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「DEL（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "U84XgBFPyIbY0W5afH4cx": {
      "scene": "学习「概览of数据类型」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "概览of数据类型（Overview of Data Types）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「概览of数据类型」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "ltF4vCT9ZA2XuUuHnuGnN": {
      "scene": "学习「SET（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SET（技术术语）（SET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SET（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "mQc4H2ZMMSVjh33LJY8mK": {
      "scene": "学习「GET（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "GET（技术术语）（GET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「GET（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "5K9qyC4mrhXYWOC8WSq8C": {
      "scene": "学习「INCR（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "INCR（技术术语）（INCR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「INCR（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "t4BXPofF8OCqH5KHwdYVh": {
      "scene": "学习「DECR（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "DECR（技术术语）（DECR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「DECR（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "cPWd53BO6tm-uy4gqLdtZ": {
      "scene": "学习「APPEND（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "APPEND（技术术语）（APPEND）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「APPEND（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "eJQW986HM4Wf1o1i2FnXs": {
      "scene": "学习「STRLEN（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "STRLEN（技术术语）（STRLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「STRLEN（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "0v8uLWRCbAqEmKKdYaRQW": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "2_E2VwbjTgk4xxTFWfHuV": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "nS0DHhfy4wxHItgOFhulA": {
      "scene": "学习「expire（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "expire（技术术语）（expire）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「expire（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Vll7VMmGWSI5XGZ9JpHyl": {
      "scene": "学习「TTL（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "TTL（技术术语）（TTL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「TTL（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Kq7G89KaZZMFkrH-9WZoS": {
      "scene": "学习「LPUSH（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "LPUSH（技术术语）（LPUSH）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「LPUSH（技术术语）」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "jC8G1o7yFj7D_PGmOIgcD": {
      "scene": "学习「RPUSH（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "RPUSH（技术术语）（RPUSH）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
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
      "confusion": "容易混淆的是：会说「RPUSH（技术术语）」不等于会用。重点看 本地 commit → git push → git pull → 处理冲突 这条链路。",
      "experiment": "fork 一个仓库，改 README 后 push；另开目录 clone，在远程改同一行再 pull，亲手解决一次冲突。"
    },
    "voa61RTWMJD3Sk8DNJoVQ": {
      "scene": "学习「LPOP（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "LPOP（技术术语）（LPOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「LPOP（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "brUGqWZ287EWtvl9uUbNt": {
      "scene": "学习「RPOP（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "RPOP（技术术语）（RPOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「RPOP（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "8JTtBy6oD2wFYDizVkcVa": {
      "scene": "学习「LRANGE（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "LRANGE（技术术语）（LRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「LRANGE（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "hBFEUXtuzUTzWZKp2qWaZ": {
      "scene": "学习「LINDEX（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "LINDEX（技术术语）（LINDEX）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「LINDEX（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「LINDEX（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「LINDEX（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "4oCcP9FxDJSDMHCEVBCNa": {
      "scene": "学习「LLEN（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "LLEN（技术术语）（LLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「LLEN（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "9KvHcS5F4Jj5ZXgIAdOQY": {
      "scene": "学习「LMOVE（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "LMOVE（技术术语）（LMOVE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「LMOVE（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "eBeEUYY-IL_CMkcm31lUL": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "XTwNCCtzXvZMdaex4gZEh": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Qgkpr9vf9d6-vUg1o8XFj": {
      "scene": "学习「Sets（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Sets（技术术语）（Sets）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Sets（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "xUKoQps69FFQrJeuhD1pz": {
      "scene": "学习「SADD（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SADD（技术术语）（SADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SADD（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "mQ0ILns53n1By0Tq6xSZI": {
      "scene": "学习「SMEMBERS（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SMEMBERS（技术术语）（SMEMBERS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SMEMBERS（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "WQWVL5GT_scHdgfCtI7WT": {
      "scene": "学习「SREM（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SREM（技术术语）（SREM）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SREM（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Ji5ghlcGJtlmErHFqVf3d": {
      "scene": "学习「SISMEMBER（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SISMEMBER（技术术语）（SISMEMBER）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SISMEMBER（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "5aLfNBewK4Dx017qVNO3T": {
      "scene": "学习「SINTER（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SINTER（技术术语）（SINTER）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SINTER（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "2gZL4a9aWGKWLa89iyHTc": {
      "scene": "学习「SCARD（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SCARD（技术术语）（SCARD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SCARD（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "6QoYa-N2BKNBaRtvNeVNm": {
      "scene": "学习「SUNION（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SUNION（技术术语）（SUNION）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SUNION（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "JX5ajmcUmkshTO-mLF8lH": {
      "scene": "学习「SDIFF（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SDIFF（技术术语）（SDIFF）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SDIFF（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "2SG4Hr9Tuv6cxmGkrKjYZ": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "3hayYoSZepw7pppBubotg": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "b48EUyFGUeSjtT5fOa_m6": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Wl23Jh-ASJOQ850yjaTIU": {
      "scene": "学习「Strings（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Strings（技术术语）（Strings）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Strings（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "4-C4XqACUp4nvcMIj6djF": {
      "scene": "学习「Lists（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Lists（技术术语）（Lists）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Lists（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "wY46Qj5Inw_ClBNI9PB_2": {
      "scene": "学习「Hashes（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Hashes（技术术语）（Hashes）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Hashes（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "BOJzn9SWad9oRRdY_ub01": {
      "scene": "学习「HSET（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "HSET（技术术语）（HSET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「HSET（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "MsKg9m5jFwHM2Bzjf-vdu": {
      "scene": "学习「HGET（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "HGET（技术术语）（HGET）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「HGET（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "TpR33sJ-tAjeG3jpGTvYR": {
      "scene": "学习「HGETALL（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "HGETALL（技术术语）（HGETALL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「HGETALL（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "E7xFZkqqbzokD5KGTn9zJ": {
      "scene": "学习「HDEL（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "HDEL（技术术语）（HDEL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「HDEL（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "adhLMuSmfYMRyWTwIgnyE": {
      "scene": "学习「HEXISTS（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "HEXISTS（技术术语）（HEXISTS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「HEXISTS（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "jtVnUD-na-WffMaS8qYfu": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "QTbkWZ7BpqYmBhUivccPu": {
      "scene": "学习「Sorted Sets（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Sorted Sets（技术术语）（Sorted Sets）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Sorted Sets（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "0swsBD0sOY-o5lzibT999": {
      "scene": "学习「ZADD（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "ZADD（技术术语）（ZADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「ZADD（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "3pFChX6YIItrBz9lxu4XM": {
      "scene": "学习「ZRANGE（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "ZRANGE（技术术语）（ZRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「ZRANGE（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "OlbixGa5RmdqEt7snY04j": {
      "scene": "学习「ZRANGEBYSCORE（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "ZRANGEBYSCORE（技术术语）（ZRANGEBYSCORE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「ZRANGEBYSCORE（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "m0FZDPwNE71zcwM_gUwz0": {
      "scene": "学习「ZREM（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "ZREM（技术术语）（ZREM）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「ZREM（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "W4v7FIQr2k-Vbm-HdfKog": {
      "scene": "学习「ZINCRBY（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "ZINCRBY（技术术语）（ZINCRBY）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「ZINCRBY（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "AF_kWM4V8n5Ux06IgEVTl": {
      "scene": "学习「ZRANK（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "ZRANK（技术术语）（ZRANK）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「ZRANK（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "O-fZM_U-tW0pYtNzN_8Ax": {
      "scene": "学习「ZCOUNT（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "ZCOUNT（技术术语）（ZCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「ZCOUNT（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "P6TDUCroLlEI7qePBFHIH": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "lxevY15ZyP43s_JrEqMX7": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "o6e_CwxfPoU6qkfWkwKwj": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "jCaVx5wvsvuyqtwh6m8si": {
      "scene": "学习「Naming Conventions（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Naming Conventions（技术术语）（Naming Conventions）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Naming Conventions（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "UlQHqw1dbxZnAKbsWsOgU": {
      "scene": "学习「Retrievalby模式」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Retrievalby模式（Retrieval by Pattern）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Retrievalby模式」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "OSIYDYPGz8Vgo9SU9GGH9": {
      "scene": "学习「Expiration（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Expiration（技术术语）（Expiration）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Expiration（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "jrgaoDnt_RxTu79hk4hCD": {
      "scene": "学习「原子性inRedis」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "原子性inRedis（Atomicity in Redis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「原子性inRedis」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "LHlwjN3WHYUBUafzzwsWQ": {
      "scene": "学习「Pipelining（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Pipelining（技术术语）（Pipelining）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Pipelining（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "7JzeyTrkZ_1_yxMVrqvZU": {
      "scene": "学习「Batch Operations（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Batch Operations（技术术语）（Batch Operations）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Batch Operations（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "0Q3AkE8leWAyYsww3-BHX": {
      "scene": "学习「Bitmaps（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Bitmaps（技术术语）（Bitmaps）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Bitmaps（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "B-YUFhPQNdr1KZNupmR5N": {
      "scene": "学习「SETBIT（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SETBIT（技术术语）（SETBIT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SETBIT（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "0HFLJfcrcSnAVTecG3P8W": {
      "scene": "学习「GETBIT（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "GETBIT（技术术语）（GETBIT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「GETBIT（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "jpcyXSSib7q4WBPmpgnXA": {
      "scene": "学习「BITCOUNT（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "BITCOUNT（技术术语）（BITCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「BITCOUNT（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "tkrxArg_oYH0aQfM8NkD2": {
      "scene": "学习「BITOP（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "BITOP（技术术语）（BITOP）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「BITOP（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Df1Eu7CuA-ARYii9JVvnm": {
      "scene": "学习「BITPOS（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "BITPOS（技术术语）（BITPOS）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「BITPOS（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "s7PEr-5TAm5EGJm0RSjPJ": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "cszjT3YK8oyhGpqLTQzwX": {
      "scene": "学习「HyperLogLog（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "HyperLogLog（技术术语）（HyperLogLog）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「HyperLogLog（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "8a4DmPZrX2xGZ7zdWxS63": {
      "scene": "学习「PFADD（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "PFADD（技术术语）（PFADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「PFADD（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "JWT30KIJQHVw0MXI5sGR6": {
      "scene": "学习「PFCOUNT（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "PFCOUNT（技术术语）（PFCOUNT）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「PFCOUNT（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "s50jr_XOUcxh65-tGCKf5": {
      "scene": "学习「PFMERGE（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "PFMERGE（技术术语）（PFMERGE）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "切分支",
          "title": "从 main 切出 feature 分支，在分支上独立开发，不影响主线。",
          "text": "从 main 切出 feature 分支，在分支上独立开发，不影响主线。"
        },
        {
          "label": "分支开发",
          "title": "开发过程中多次 commit，保持每个提交粒度可 review。",
          "text": "开发过程中多次 commit，保持每个提交粒度可 review。"
        },
        {
          "label": "合并回主线",
          "title": "用 merge 或 rebase 把 feature 合回 main，解…",
          "text": "用 merge 或 rebase 把 feature 合回 main，解决冲突后再推送。"
        },
        {
          "label": "清理分支",
          "title": "合并后删除已合入的分支，保持仓库整洁。",
          "text": "合并后删除已合入的分支，保持仓库整洁。"
        }
      ],
      "confusion": "容易混淆的是：会说「PFMERGE（技术术语）」不等于会用。重点看 切分支 → 分支开发 → 合并回主线 → 清理分支 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "XPeCvikPuu6EJ8UcOLGPh": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "zXs_9n2yEb_eVi0WuOQKH": {
      "scene": "学习「Streams（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Streams（技术术语）（Streams）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Streams（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "7isWhgrUA6M5IGM2U2tm4": {
      "scene": "学习「XADD（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "XADD（技术术语）（XADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「XADD（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "4sKiAtX5aIL4NDsQkilNC": {
      "scene": "学习「XREAD（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "XREAD（技术术语）（XREAD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「XREAD（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "CiYFuYE8XudZkR6AW2NQ7": {
      "scene": "学习「XRANGE（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "XRANGE（技术术语）（XRANGE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「XRANGE（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "DQJCMEw13lELcw_AwLfrT": {
      "scene": "学习「XLEN（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "XLEN（技术术语）（XLEN）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「XLEN（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "zXlSBfa-Gi9_GhSYEzre3": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "4-z4hDKm86qQatYnmE21R": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "_NiUdVQ85qnvryI38k_vQ": {
      "scene": "学习「Geospatial索引」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Geospatial索引（Geospatial Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Geospatial索引」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Geospatial索引」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Geospatial索引」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "U3N1EgHFs1-YUaB_VrJfw": {
      "scene": "学习「GEOADD（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "GEOADD（技术术语）（GEOADD）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「GEOADD（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "OWWDLuGTbdNwME7v2jxVP": {
      "scene": "学习「GEOSEARCH（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "GEOSEARCH（技术术语）（GEOSEARCH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「GEOSEARCH（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "GNMjrLPkpTphneoQ0GoZF": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "FCbdKnkI1ZHGekT6yiGua": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "9W_jaK1DSEZHRKdPcUM7h": {
      "scene": "学习「Pub/Sub（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Pub/Sub（技术术语）（Pub/Sub）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Pub/Sub（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "55BCntuWlaQiLPqNtb-2i": {
      "scene": "学习「SUBSCRIBE（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SUBSCRIBE（技术术语）（SUBSCRIBE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SUBSCRIBE（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "5gkZzm2F4vu6IxUoJLYbK": {
      "scene": "学习「UNSUBSCRIBE（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "UNSUBSCRIBE（技术术语）（UNSUBSCRIBE）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「UNSUBSCRIBE（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "gIPo-2CNqE1BsOaDzmkCU": {
      "scene": "学习「PUBLISH（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "PUBLISH（技术术语）（PUBLISH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「PUBLISH（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "V-d6q-3Sf0dl5v8xiCQwl": {
      "scene": "学习「More Commands（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "More Commands（技术术语）（More Commands）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「More Commands（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "MvyE_JUJej0UB9xe8Anfj": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "YHbWlKrQqptUDbaQVy0_A": {
      "scene": "学习「Transactions（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Transactions（技术术语）（Transactions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Transactions（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「Transactions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Transactions（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "c-y5Eck8VtSyIf8RAW9p7": {
      "scene": "学习「WATCH（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "WATCH（技术术语）（WATCH）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「WATCH（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Ljy-Mc0EBBX4_vXfYZ5-4": {
      "scene": "学习「EXEC（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "EXEC（技术术语）（EXEC）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「EXEC（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "U6hST1MkS16T2CHV3-Ise": {
      "scene": "学习「MULTI（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "MULTI（技术术语）（MULTI）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「MULTI（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "msW0Wd2H-6FFNDnjC64t-": {
      "scene": "学习「Optimistic Locking（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Optimistic Locking（技术术语）（Optimistic Locking）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Optimistic Locking（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Veb30QrPYNjUn13dtGbUr": {
      "scene": "学习「Lua Scripting（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Lua Scripting（技术术语）（Lua Scripting）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Lua Scripting（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "rjeq3i9oX8IGyQzo--L3c": {
      "scene": "学习「EVAL（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "EVAL（技术术语）（EVAL）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「EVAL（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "3X0x_PcJGWBVPL-LSVAln": {
      "scene": "学习「EVALSHA（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "EVALSHA（技术术语）（EVALSHA）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「EVALSHA（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "kF_nGo845XDwLkwcQt008": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "bQaek7f3dAaZfSUhwovm1": {
      "scene": "学习「持久化Options」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "持久化Options（Persistence Options）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「持久化Options」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "D3pZdAjwPFMRxX1-iyu5-": {
      "scene": "学习「如何RDBWorks?」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "如何RDBWorks?（How RDB Works?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「如何RDBWorks?」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "_pb2DPrFUUZabKxWsuFUo": {
      "scene": "学习「Configuring Save Interval（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Configuring Save Interval（技术术语）（Configuring Save Interval）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Configuring Save Interval（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Z6yJwUkcDX08HoMyf1LwX": {
      "scene": "学习「Usecases/最佳实践」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases/最佳实践（Usecases / Best Practices）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases/最佳实践」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "PTj6oxvpw8vP295WvAI80": {
      "scene": "学习「如何AOFWorks?」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "如何AOFWorks?（How AOF Works?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「如何AOFWorks?」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "ibaZ34-laQtUyxAsERi7o": {
      "scene": "学习「AOFrewrite（技术术语）与compaction（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "AOFrewrite（技术术语）与compaction（技术术语）（AOF rewrite & compaction）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「AOFrewrite（技术术语）与compaction（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "9ToKTUqbi-NV5Wcwb21PT": {
      "scene": "学习「Truncation / Corruption（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Truncation / Corruption（技术术语）（Truncation / Corruption）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Truncation / Corruption（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "VvOQUO22ZF8VvDSqHENNU": {
      "scene": "学习「Usecases（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases（技术术语）（Usecases）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "vzp7DUpjklzIA0E9WxJQA": {
      "scene": "学习「Usecases/最佳实践」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Usecases/最佳实践（Usecases / Best Practices）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Usecases/最佳实践」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "80035BzcB-fKCvD_3N8zE": {
      "scene": "学习「No持久化Option」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "No持久化Option（No Persistence Option）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「No持久化Option」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "3S-qqOlfr60HR4VvDr4He": {
      "scene": "学习「RDB（技术术语）与AOFTradeoffs（技术术语）对比」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "RDB（技术术语）与AOFTradeoffs（技术术语）对比（RDB vs AOF Tradeoffs）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「RDB（技术术语）与AOFTradeoffs（技术术语）对比」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "S5Y26m1oHCQpB-oLCdtac": {
      "scene": "学习「Hybrid持久化」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Hybrid持久化（Hybrid Persistence）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Hybrid持久化」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "rSD8nJ-uNpHJVe5Hn66h7": {
      "scene": "学习「复制基础」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "复制基础（Replication Basics）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「复制基础」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "nci3OB1NE1zJHUPfZCOpT": {
      "scene": "学习「Redis Sentinel（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Redis Sentinel（技术术语）（Redis Sentinel）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Redis Sentinel（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "AQiCcHS6dBAAAPloxiXub": {
      "scene": "学习「Clustering（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Clustering（技术术语）（Clustering）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Clustering（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Qy42paiTUsO8HIwbWTMui": {
      "scene": "学习「认证」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "认证（Authentication）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「认证」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "wsuKH7YwGDV6GYQbdhA4o": {
      "scene": "学习「网络安全」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "网络安全（Network Security）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「网络安全」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "gdiWwTQg6A-BFHdQBmgmH": {
      "scene": "学习「SSL/TLS加密」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "SSL/TLS加密（SSL/TLS Encryption）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「SSL/TLS加密」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "q2Jw49QUWCUGIfcEC1bZI": {
      "scene": "学习「INFO（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "INFO（技术术语）（INFO）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「INFO（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "jBtEiylcedtaE6E20Uk4V": {
      "scene": "学习「监控」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "监控（MONITOR）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「监控」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "XBPwHgIsXupMsyoOFkJZ0": {
      "scene": "学习「RedisInsight（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "RedisInsight（技术术语）（RedisInsight）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「RedisInsight（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "y5FPSAi6T-5X9SUfR58_-": {
      "scene": "学习「RedisCommander（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "RedisCommander（技术术语）（RedisCommander）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「RedisCommander（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "xF0wQYmtwXYkrzvWg5gOO": {
      "scene": "学习「内存管理」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "内存管理（Memory Management）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「内存管理」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Sd1ENOXSFCz1YqccXjr2A": {
      "scene": "学习「MAX 最大值内存策略」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "MAX 最大值内存策略（Max Memory Policy）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「MAX 最大值内存策略」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "yaCWw2KjX58SaPajUAb0d": {
      "scene": "学习「Slow日志Analysis」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Slow日志Analysis（Slow Log Analysis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Slow日志Analysis」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "kgHwK4N-sfh6dHjd_D_me": {
      "scene": "学习「redis-基准测试」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "redis-基准测试（redis-benchmark）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「redis-基准测试」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "2p5RF4lVYfRvYTo1Ofm-a": {
      "scene": "学习「监控」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "监控（Monitoring）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「监控」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "hLIT00Iz7rV56ZBIUhWYn": {
      "scene": "学习「Redis Modules（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Redis Modules（技术术语）（Redis Modules）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Redis Modules（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "jicsfYw56VrbRUt7M8c85": {
      "scene": "学习「RedisJSON（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "RedisJSON（技术术语）（RedisJSON）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「RedisJSON（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "_GdTXcJO8uJlhPdfrmeXG": {
      "scene": "学习「Search（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Search（技术术语）（Search）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Search（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "RBr8opWSh2TKXC8Fmdg0j": {
      "scene": "学习「RedisTimeSeries（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "RedisTimeSeries（技术术语）（RedisTimeSeries）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「RedisTimeSeries（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "GwVL5CvbnHsiWb1hVh7lK": {
      "scene": "学习「RedisBloom（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "RedisBloom（技术术语）（RedisBloom）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「RedisBloom（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "giyKPtQ-pziA064P8OQD-": {
      "scene": "学习「redis.conf（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "redis.conf（技术术语）（redis.conf）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「redis.conf（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "wXRDsNGFckXV_CSiit5sN": {
      "scene": "学习「备份与Recovery（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "备份与Recovery（技术术语）（Backup and Recovery）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「备份与Recovery（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "Cb-KazR4PuR86VX5oT0zi": {
      "scene": "学习「Upgrading Redis（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Upgrading Redis（技术术语）（Upgrading Redis）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Upgrading Redis（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "nUIfTkgm3PlSiqgun1BS7": {
      "scene": "学习「Disaster Recovery（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Disaster Recovery（技术术语）（Disaster Recovery）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Disaster Recovery（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "8lyXDuZJ-KHl4v2_8Ew1h": {
      "scene": "学习「Redis Enterprise（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Redis Enterprise（技术术语）（Redis Enterprise）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Redis Enterprise（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "cybF72wlJyJbHLUjitLvn": {
      "scene": "学习「Active-Active geo Distribution（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Active-Active geo Distribution（技术术语）（Active-Active geo Distribution）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Active-Active geo Distribution（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "sWOFnbh2EyaHRzquz1UeF": {
      "scene": "学习「Redis on Flash（技术术语）」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "Redis on Flash（技术术语）（Redis on Flash）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「Redis on Flash（技术术语）」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "ujs77bV8g8-FOm5hBtZFd": {
      "scene": "学习「安全与合规」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "安全与合规（Security and Compliance）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「安全与合规」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "JlLwy69eQ1bPHAOOJNqjo": {
      "scene": "学习「何时toconsiderenterprise?」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "何时toconsiderenterprise?（When to consider enterprise?）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「何时toconsiderenterprise?」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
