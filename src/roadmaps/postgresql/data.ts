import type { DeepLesson, Stage, Tutorial } from '../types';

const data = {
  "stages": [
    {
      "id": "stage-01",
      "zh": "阶段 01：Queries（技术术语）",
      "en": "Queries",
      "desc": "按 roadmap.sh 原始顺序整理的第 1 组学习节点。",
      "nodes": [
        {
          "id": "xVocG4LuFdtphwoOxiJTa",
          "label": "Queries",
          "zh": "Queries（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -505,
          "y": -118,
          "w": 207,
          "h": 49
        },
        {
          "id": "soar-NBWCr4xVKj7ttfnc",
          "label": "What are Relational Databases?",
          "zh": "什么是关系型数据库",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 152,
          "y": -92,
          "w": 331,
          "h": 49
        },
        {
          "id": "4Pw7udOMIsiaKr7w9CRxc",
          "label": "Data Types",
          "zh": "数据类型",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -505,
          "y": -65,
          "w": 207,
          "h": 49
        },
        {
          "id": "p3AmRr_y_ZBKzAU5eh7OU",
          "label": "RDBMS Benefits and Limitations",
          "zh": "RDBMS 优缺点",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 151,
          "y": -39,
          "w": 331,
          "h": 49
        },
        {
          "id": "Rd3RLpyLMGQZzrxQrxDGo",
          "label": "Rows",
          "zh": "Rows（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -505,
          "y": -12,
          "w": 101,
          "h": 49
        },
        {
          "id": "cty2IjgS1BWltbYmuxxuV",
          "label": "Columns",
          "zh": "Columns（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -399,
          "y": -12,
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
      "zh": "阶段 02：入门介绍",
      "en": "Introduction",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "lDIy56RyC1XM7IfORsSLD",
          "label": "Introduction",
          "zh": "入门介绍",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -229,
          "y": -12,
          "w": 271,
          "h": 49
        },
        {
          "id": "D0doJTtLu-1MmFOfavCXN",
          "label": "PostgreSQL vs NoSQL Databases",
          "zh": "PostgreSQL 与 NoSQL 对比",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 150,
          "y": 14,
          "w": 331,
          "h": 49
        },
        {
          "id": "W8NhR4SqteMLfso8AD6H8",
          "label": "Tables",
          "zh": "Tables（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -505,
          "y": 41,
          "w": 101,
          "h": 49
        },
        {
          "id": "mF6qAlo2ULJ3lECG2m0h7",
          "label": "Schemas",
          "zh": "模式",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -399,
          "y": 41,
          "w": 101,
          "h": 49
        },
        {
          "id": "IAKERTzTpTds5kZLMCapM",
          "label": "PostgreSQL vs Other RDBMS",
          "zh": "PostgreSQL 与其他 RDBMS 对比",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 150,
          "y": 67,
          "w": 331,
          "h": 49
        },
        {
          "id": "DU-D3-j9h6i9Nj5ci8hlX",
          "label": "Databases",
          "zh": "数据库",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -504,
          "y": 94,
          "w": 206,
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
      "zh": "阶段 03：RDBMS 基础概念",
      "en": "Basic RDBMS Concepts",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "-M9EFgiDSSAzj9ISk-aeh",
          "label": "Basic RDBMS Concepts",
          "zh": "RDBMS 基础概念",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -229,
          "y": 146,
          "w": 271,
          "h": 49
        },
        {
          "id": "RoYP1tYw5dvhmkVTo1HS-",
          "label": "Object Model",
          "zh": "对象模型",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -504,
          "y": 147,
          "w": 206,
          "h": 49
        },
        {
          "id": "_BSR2mo1lyXEFXbKYb1ZG",
          "label": "High Level Database Concepts",
          "zh": "数据库高级概念",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 151,
          "y": 148,
          "w": 286,
          "h": 49
        },
        {
          "id": "9u7DPbfybqmldisiePq0m",
          "label": "ACID",
          "zh": "ACID（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 151,
          "y": 201,
          "w": 71,
          "h": 49
        },
        {
          "id": "-_ADJsTVGAgXq7_-8bdIO",
          "label": "MVCC",
          "zh": "MVCC（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 225,
          "y": 201,
          "w": 81,
          "h": 49
        },
        {
          "id": "yFG_hVD3dB_qK8yphrRY5",
          "label": "Transactions",
          "zh": "Transactions（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 309,
          "y": 201,
          "w": 126,
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
      "zh": "阶段 04：关系型模型",
      "en": "Relational Model",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "mDVbjdVN0spY7dI_8k1YW",
          "label": "Relational Model",
          "zh": "关系型模型",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -504,
          "y": 231,
          "w": 206,
          "h": 49
        },
        {
          "id": "9sadNsbHLqejbRPHWhx-w",
          "label": "Write-ahead Log",
          "zh": "预写式日志 WAL",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 151,
          "y": 254,
          "w": 286,
          "h": 49
        },
        {
          "id": "-LuxJvI5IaOx6NqzK0d8S",
          "label": "Domains",
          "zh": "Domains（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -504,
          "y": 285,
          "w": 98,
          "h": 49
        },
        {
          "id": "XvZMSveMWqmAlXOxwWzdk",
          "label": "Attributes",
          "zh": "属性",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -403,
          "y": 285,
          "w": 106,
          "h": 49
        },
        {
          "id": "Qk14b9WyeCp9RV9WAwojt",
          "label": "Query Processing",
          "zh": "查询处理",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 151,
          "y": 307,
          "w": 286,
          "h": 49
        },
        {
          "id": "vJhvgGwNV3JB-wWn_0gMb",
          "label": "Tuples",
          "zh": "元组",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -504,
          "y": 338,
          "w": 98,
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
      "zh": "阶段 05：安装与配置",
      "en": "Installation and Setup",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "2hM2IPAnNYq-LlEbcFp2Z",
          "label": "Relations",
          "zh": "关系",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -403,
          "y": 338,
          "w": 106,
          "h": 49
        },
        {
          "id": "FtPiBWMFhjakyXsmSL_CI",
          "label": "Installation and Setup",
          "zh": "安装与配置",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -210,
          "y": 387,
          "w": 233,
          "h": 49
        },
        {
          "id": "j9ikSpCD3yM5pTRFuJjZs",
          "label": "Constraints",
          "zh": "约束",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -504,
          "y": 391,
          "w": 114,
          "h": 49
        },
        {
          "id": "91eOGK8mtJulWRlhKyv0F",
          "label": "NULL",
          "zh": "NULL（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -388,
          "y": 391,
          "w": 91,
          "h": 49
        },
        {
          "id": "BEJyz0ohCglDucxfyuAy4",
          "label": "Querying Data",
          "zh": "Querying数据",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 373,
          "y": 462,
          "w": 166,
          "h": 49
        },
        {
          "id": "KMdF9efNGULualk5o1W0_",
          "label": "For Schemas",
          "zh": "For模式",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 219,
          "y": 463,
          "w": 148,
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
      "zh": "阶段 06：学习SQL",
      "en": "Learn SQL",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "5MjJIAcn5zABCK6JsFf4k",
          "label": "Using Docker",
          "zh": "使用Docker",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -501,
          "y": 489,
          "w": 233,
          "h": 49
        },
        {
          "id": "dd2lTNsNzYdfB7rRFMNmC",
          "label": "Filtering Data",
          "zh": "过滤数据",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 373,
          "y": 515,
          "w": 166,
          "h": 49
        },
        {
          "id": "ga8ZiuPc42XvZ3-iVh8T1",
          "label": "ForTables",
          "zh": "ForTables（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 220,
          "y": 516,
          "w": 147,
          "h": 49
        },
        {
          "id": "P1Hm6ZlrhCRxbxOJkBHlL",
          "label": "Using `systemd`",
          "zh": "使用`systemd`",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -252,
          "y": 534,
          "w": 208,
          "h": 49
        },
        {
          "id": "pEtQy1nuW98YUwrbfs7Np",
          "label": "Package Managers",
          "zh": "Package Managers（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -501,
          "y": 542,
          "w": 233,
          "h": 49
        },
        {
          "id": "ANUgfkADLI_du7iRvnUdi",
          "label": "Learn SQL",
          "zh": "学习SQL",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 33,
          "y": 564,
          "w": 132,
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
      "zh": "阶段 07：数据类型",
      "en": "Data Types",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "fvEgtFP7xvkq_D4hYw3gz",
          "label": "Data Types",
          "zh": "数据类型",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 220,
          "y": 569,
          "w": 147,
          "h": 49
        },
        {
          "id": "G2NKhjlZqAY9l32H0LPNQ",
          "label": "Modifying Data",
          "zh": "Modifying数据",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 373,
          "y": 569,
          "w": 166,
          "h": 49
        },
        {
          "id": "a4j0Rs8Tl6-k9WP5zjaep",
          "label": "Using `pg_ctl`",
          "zh": "使用`pg_ctl`",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -252,
          "y": 587,
          "w": 208,
          "h": 49
        },
        {
          "id": "mMf2Mq9atIKk37IMWuoJs",
          "label": "Connect using `psql`",
          "zh": "Connect使用`psql`",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -501,
          "y": 595,
          "w": 233,
          "h": 49
        },
        {
          "id": "Hura0LImG9pyPxaEIDo3X",
          "label": "Joining Tables",
          "zh": "Joining Tables（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 373,
          "y": 623,
          "w": 166,
          "h": 49
        },
        {
          "id": "v3SoKmeCh6uxKW5GAAMje",
          "label": "Using `pg_ctlcluster`",
          "zh": "使用`pg_ctlcluster`",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -252,
          "y": 640,
          "w": 208,
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
      "zh": "阶段 08：Configuring（技术术语）",
      "en": "Configuring",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "6SCcxpkpLmmRe0rS8WAPZ",
          "label": "Deployment in Cloud",
          "zh": "部署in云",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -501,
          "y": 648,
          "w": 233,
          "h": 49
        },
        {
          "id": "umNNMpJh4Al1dEpT6YkrA",
          "label": "Import / Export Using `COPY`",
          "zh": "Import/Export使用`COPY`",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 222,
          "y": 690,
          "w": 320,
          "h": 49
        },
        {
          "id": "507TY35b8iExakbBMrHgZ",
          "label": "Reporting Logging & Statistics",
          "zh": "Reporting日志与Statistics（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -507,
          "y": 727,
          "w": 303,
          "h": 49
        },
        {
          "id": "T819BZ-CZgUX_BY7Gna0J",
          "label": "Configuring",
          "zh": "Configuring（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -170,
          "y": 727,
          "w": 198,
          "h": 49
        },
        {
          "id": "VAf9VzPx70hUf4H6i3Z2t",
          "label": "Adding Extra Extensions",
          "zh": "Adding Extra Extensions（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -507,
          "y": 780,
          "w": 303,
          "h": 49
        },
        {
          "id": "fsZvmH210bC_3dBD_X8-z",
          "label": "CTE",
          "zh": "CTE（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 373,
          "y": 797,
          "w": 166,
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
      "zh": "阶段 09：Transactions（技术术语）",
      "en": "Transactions",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "ghgyAXJ72dZmF2JpDvu9U",
          "label": "Transactions",
          "zh": "Transactions（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 222,
          "y": 798,
          "w": 148,
          "h": 49
        },
        {
          "id": "fTsoMSLcXU1mgd5-vekbT",
          "label": "Lateral Join",
          "zh": "LateralJOIN 表连接",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 373,
          "y": 850,
          "w": 166,
          "h": 49
        },
        {
          "id": "_Y-omKcWZOxto-xJka7su",
          "label": "Subqueries",
          "zh": "Subqueries（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 222,
          "y": 851,
          "w": 147,
          "h": 49
        },
        {
          "id": "t18XjeHP4uRyERdqhHpl5",
          "label": "Default Privileges",
          "zh": "Default Privileges（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -48,
          "y": 889,
          "w": 183,
          "h": 49
        },
        {
          "id": "yl3gxfQs4nOE0N7uGqR0d",
          "label": "Resource Usage",
          "zh": "资源Usage",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -509,
          "y": 894,
          "w": 306,
          "h": 49
        },
        {
          "id": "kOwhnSZBwIhIbIsoAXQ50",
          "label": "Set Operations",
          "zh": "Set Operations（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 373,
          "y": 903,
          "w": 166,
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
      "zh": "阶段 10：Grouping（技术术语）",
      "en": "Grouping",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "uwd_CaeHQQ3ZWojbmtbPh",
          "label": "Grouping",
          "zh": "Grouping（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 222,
          "y": 904,
          "w": 146,
          "h": 49
        },
        {
          "id": "o1WSsw-ZIaAb8JF3P0mfR",
          "label": "Grant / Revoke",
          "zh": "Grant / Revoke（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -48,
          "y": 942,
          "w": 183,
          "h": 49
        },
        {
          "id": "9VmQ-vN3nPyf1pTFIcj40",
          "label": "Write-ahead Log",
          "zh": "预写式日志 WAL",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -509,
          "y": 947,
          "w": 306,
          "h": 49
        },
        {
          "id": "S20aJB-VuSpXYyd0-0S8c",
          "label": "Object Privileges",
          "zh": "对象Privileges",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -48,
          "y": 995,
          "w": 183,
          "h": 49
        },
        {
          "id": "zoaqBP0Jbf0HpTH8Q3LkJ",
          "label": "Vacuums",
          "zh": "Vacuums（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -509,
          "y": 1000,
          "w": 138,
          "h": 49
        },
        {
          "id": "A3YTrZSUxNBq77iIrNdZ4",
          "label": "Replication",
          "zh": "复制",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -368,
          "y": 1000,
          "w": 165,
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
      "zh": "阶段 11：安全",
      "en": "Security",
      "desc": "按 roadmap.sh 原始顺序整理的第 11 组学习节点。",
      "nodes": [
        {
          "id": "hOPwVdIzesselbsI_rRxt",
          "label": "Query Planner",
          "zh": "查询Planner",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -509,
          "y": 1053,
          "w": 306,
          "h": 49
        },
        {
          "id": "gb75xOcAr-q8TcA6_l1GZ",
          "label": "Authentication Models",
          "zh": "认证Models",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 114,
          "y": 1074,
          "w": 236,
          "h": 49
        },
        {
          "id": "09QX_zjCUajxUqcNZKy0x",
          "label": "Advanced Topics",
          "zh": "进阶Topics",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 356,
          "y": 1074,
          "w": 193,
          "h": 49
        },
        {
          "id": "3pLn1mhRnekG537ejHUYA",
          "label": "Checkpoints / Background Writer",
          "zh": "Checkpoints / Background Writer（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -509,
          "y": 1106,
          "w": 306,
          "h": 49
        },
        {
          "id": "2Zg8R5gs9LMQOcOMZtoPk",
          "label": "Security",
          "zh": "安全",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -170,
          "y": 1127,
          "w": 198,
          "h": 49
        },
        {
          "id": "l0lpaPy12JFCJ-RRYVSqz",
          "label": "Roles",
          "zh": "Roles（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 114,
          "y": 1127,
          "w": 101,
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
      "zh": "阶段 12：基础设施Skills",
      "en": "Infrastructure Skills",
      "desc": "按 roadmap.sh 原始顺序整理的第 12 组学习节点。",
      "nodes": [
        {
          "id": "Y2W29M4piaQsTn2cpyR7Q",
          "label": "pg_hba.conf",
          "zh": "pg_hba.conf（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 219,
          "y": 1127,
          "w": 133,
          "h": 49
        },
        {
          "id": "bokFf6VNrLcilI9Hid386",
          "label": "Row-Level Security",
          "zh": "行-级别安全",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 356,
          "y": 1127,
          "w": 193,
          "h": 49
        },
        {
          "id": "EKwO6edtFnUw8cPCcVwKJ",
          "label": "SSL Settings",
          "zh": "SSL Settings（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 114,
          "y": 1180,
          "w": 236,
          "h": 49
        },
        {
          "id": "GvpIJF-eaGELwcpWq5_3r",
          "label": "SELinux",
          "zh": "SELinux（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 356,
          "y": 1180,
          "w": 193,
          "h": 49
        },
        {
          "id": "zlqSX0tl7HD9C1yEGkvoM",
          "label": "Infrastructure Skills",
          "zh": "基础设施Skills",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -170,
          "y": 1222,
          "w": 198,
          "h": 49
        },
        {
          "id": "Z2PuOmgOqScGFbhvrvrA1",
          "label": "PostgreSQL Anonymizer",
          "zh": "PostgreSQL Anonymizer（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -171,
          "y": 1361,
          "w": 243,
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
      "zh": "阶段 13：pg_dump（技术术语）",
      "en": "pg_dump",
      "desc": "按 roadmap.sh 原始顺序整理的第 13 组学习节点。",
      "nodes": [
        {
          "id": "XZ922juBJ8Om0WyGtSYT5",
          "label": "pg_dump",
          "zh": "pg_dump（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 300,
          "y": 1440,
          "w": 109,
          "h": 49
        },
        {
          "id": "QmV-J6fPYQ5CcdGUkBs7y",
          "label": "pg_dumpall",
          "zh": "pg_dumpall（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 410,
          "y": 1440,
          "w": 127,
          "h": 49
        },
        {
          "id": "-XhONB0FBA6UslbDWoTDv",
          "label": "barman",
          "zh": "barman（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 86,
          "y": 1442,
          "w": 101,
          "h": 49
        },
        {
          "id": "4gQSzH-WKFAvmkwlX_oyR",
          "label": "WAL-G",
          "zh": "WAL-G（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 191,
          "y": 1442,
          "w": 101,
          "h": 49
        },
        {
          "id": "cJYlZJ9f3kdptNrTlpMNU",
          "label": "Using `pg_upgrade`",
          "zh": "使用`pg_upgrade`",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -173,
          "y": 1472,
          "w": 243,
          "h": 49
        },
        {
          "id": "YSprRhPHkzV8SzDYpIVmp",
          "label": "pg_restore",
          "zh": "pg_restore（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 301,
          "y": 1493,
          "w": 236,
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
      "zh": "阶段 14：学习toAutomate",
      "en": "Learn to Automate",
      "desc": "按 roadmap.sh 原始顺序整理的第 14 组学习节点。",
      "nodes": [
        {
          "id": "5LLYxCj22RE6Nf0fVm8GO",
          "label": "pgbackrest",
          "zh": "pgbackrest（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 86,
          "y": 1495,
          "w": 208,
          "h": 49
        },
        {
          "id": "e5s7-JRqNy-OhfnjTScZI",
          "label": "Learn to Automate",
          "zh": "学习toAutomate",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -509,
          "y": 1508,
          "w": 285,
          "h": 49
        },
        {
          "id": "MVVWAf9Hk3Fom-wBhO64R",
          "label": "Using Logical Replication",
          "zh": "使用Logical复制",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -173,
          "y": 1525,
          "w": 243,
          "h": 49
        },
        {
          "id": "XYaVsj5_48CSnoTSGXBbN",
          "label": "pg_basebackup",
          "zh": "pg_basebackup（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 300,
          "y": 1546,
          "w": 237,
          "h": 49
        },
        {
          "id": "Id_17Ya-NUvoXxijAZvmW",
          "label": "pg_probackup",
          "zh": "pg_probackup（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 88,
          "y": 1548,
          "w": 207,
          "h": 49
        },
        {
          "id": "-clI2RmfhK8F8beHULaIB",
          "label": "Shell Scripts",
          "zh": "Shell Scripts（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 1570,
          "w": 262,
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
      "zh": "阶段 15：备份校验Procedures",
      "en": "Backup Validation Procedures",
      "desc": "按 roadmap.sh 原始顺序整理的第 15 组学习节点。",
      "nodes": [
        {
          "id": "te4PZaqt6-5Qu8rU0w6a1",
          "label": "Backup Validation Procedures",
          "zh": "备份校验Procedures",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 88,
          "y": 1601,
          "w": 451,
          "h": 49
        },
        {
          "id": "j5YeixkCKRv0sfq_gFVr9",
          "label": "Any Programming Language",
          "zh": "AnyProgramming语言",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 1623,
          "w": 262,
          "h": 49
        },
        {
          "id": "mm0K_8TFicrYdZQvWFkH4",
          "label": "Patroni",
          "zh": "Patroni（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -173,
          "y": 1630,
          "w": 244,
          "h": 49
        },
        {
          "id": "TZvZ_jNjWnM535ZktyhQN",
          "label": "Patroni Alternatives",
          "zh": "Patroni Alternatives（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -173,
          "y": 1683,
          "w": 244,
          "h": 49
        },
        {
          "id": "aKQI7aX4bT_39bZgjmfoW",
          "label": "PgBouncer",
          "zh": "PgBouncer（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 312,
          "y": 1716,
          "w": 226,
          "h": 49
        },
        {
          "id": "rmsIw9CQa1qcQ_REw76NK",
          "label": "Logical Replication",
          "zh": "Logical复制",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 89,
          "y": 1717,
          "w": 216,
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
      "zh": "阶段 16：PgBouncer Alternatives（技术术语）",
      "en": "PgBouncer Alternatives",
      "desc": "按 roadmap.sh 原始顺序整理的第 16 组学习节点。",
      "nodes": [
        {
          "id": "3V1PPIeB0i9qNUsT8-4O-",
          "label": "PgBouncer Alternatives",
          "zh": "PgBouncer Alternatives（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 312,
          "y": 1769,
          "w": 226,
          "h": 49
        },
        {
          "id": "MwLlVbqceQ-GTgPJlgoQY",
          "label": "Streaming Replication",
          "zh": "Streaming复制",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 89,
          "y": 1770,
          "w": 216,
          "h": 49
        },
        {
          "id": "Q_B9dlXNMXZIRYQC74uIf",
          "label": "Salt",
          "zh": "Salt（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -342,
          "y": 1773,
          "w": 101,
          "h": 49
        },
        {
          "id": "RqSfBR_RuvHrwHfPn1jwZ",
          "label": "Ansible",
          "zh": "Ansible（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -493,
          "y": 1775,
          "w": 146,
          "h": 49
        },
        {
          "id": "rNp3ZC6axkcKtAWYCPvdR",
          "label": "Simple Stateful Setup",
          "zh": "SimpleStateful配置",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -167,
          "y": 1791,
          "w": 235,
          "h": 49
        },
        {
          "id": "7EHZ9YsNjCyTAN-LDWYMS",
          "label": "Chef",
          "zh": "Chef（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -342,
          "y": 1827,
          "w": 101,
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
      "zh": "阶段 17：Puppet（技术术语）",
      "en": "Puppet",
      "desc": "按 roadmap.sh 原始顺序整理的第 17 组学习节点。",
      "nodes": [
        {
          "id": "e39bceamU-lq3F2pmLz6v",
          "label": "Puppet",
          "zh": "Puppet（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -493,
          "y": 1829,
          "w": 146,
          "h": 49
        },
        {
          "id": "QHbdwiMQ8otxnVIUVV2NT",
          "label": "Helm",
          "zh": "Helm（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -167,
          "y": 1844,
          "w": 101,
          "h": 49
        },
        {
          "id": "nRJKfjW2UrmKmVUrGIfCC",
          "label": "Operators",
          "zh": "操作符",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -62,
          "y": 1844,
          "w": 129,
          "h": 49
        },
        {
          "id": "XmBeM01NAy-_nfyNdk9ZV",
          "label": "Prometheus",
          "zh": "Prometheus（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 101,
          "y": 1871,
          "w": 153,
          "h": 49
        },
        {
          "id": "z3VD68R2uyu1s-3giRxKr",
          "label": "Zabbix",
          "zh": "Zabbix（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 258,
          "y": 1871,
          "w": 141,
          "h": 49
        },
        {
          "id": "aXG68inOu3trBWOmg9Yqx",
          "label": "temBoard",
          "zh": "temBoard（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 406,
          "y": 1871,
          "w": 133,
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
      "zh": "阶段 18：check_pgactivity（技术术语）",
      "en": "check_pgactivity",
      "desc": "按 roadmap.sh 原始顺序整理的第 18 组学习节点。",
      "nodes": [
        {
          "id": "WiOgUt5teG9UVRa6zo4h3",
          "label": "check_pgactivity",
          "zh": "check_pgactivity（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 101,
          "y": 1926,
          "w": 210,
          "h": 49
        },
        {
          "id": "DDPuDDUFxubWZmWXCmF7L",
          "label": "check_pgbackrest",
          "zh": "check_pgbackrest（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 313,
          "y": 1926,
          "w": 227,
          "h": 49
        },
        {
          "id": "IkB28gO0LK1q1-KjdI9Oz",
          "label": "Consul",
          "zh": "Consul（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -35,
          "y": 1951,
          "w": 101,
          "h": 49
        },
        {
          "id": "V8_zJRwOX9664bUvAGgff",
          "label": "HAProxy",
          "zh": "HAProxy（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -167,
          "y": 1952,
          "w": 126,
          "h": 49
        },
        {
          "id": "SNnc8CIKuHUAEZaJ_qEar",
          "label": "Resource Usage / Provisioning / Capacity Planning",
          "zh": "资源Usage/Provisioning/CapacityPlanning",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 101,
          "y": 2000,
          "w": 440,
          "h": 49
        },
        {
          "id": "xk2G-HUS-dviNW3BAMmJv",
          "label": "KeepAlived",
          "zh": "KeepAlived（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -167,
          "y": 2005,
          "w": 127,
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
      "zh": "阶段 19：Etcd（技术术语）",
      "en": "Etcd",
      "desc": "按 roadmap.sh 原始顺序整理的第 19 组学习节点。",
      "nodes": [
        {
          "id": "kCw6oEVGdKokCz4wYizIT",
          "label": "Etcd",
          "zh": "Etcd（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -35,
          "y": 2005,
          "w": 101,
          "h": 49
        },
        {
          "id": "cc4S7ugIphyBZr-f6X0qi",
          "label": "Bulk Loading / Processing Data",
          "zh": "BulkLoading/处理数据",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 219,
          "y": 2161,
          "w": 318,
          "h": 49
        },
        {
          "id": "AtZcMhy2Idmgonp5O8RSQ",
          "label": "Practical Patterns / Antipatterns",
          "zh": "Practical模式/Antipatterns",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -98,
          "y": 2166,
          "w": 306,
          "h": 49
        },
        {
          "id": "OiGRtLsc28Tv35vIut6B6",
          "label": "Data Partitioning",
          "zh": "数据分区",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 219,
          "y": 2214,
          "w": 318,
          "h": 49
        },
        {
          "id": "3Lcy7kBKeV6hx9Ctp_20M",
          "label": "Migration Related Tools",
          "zh": "Migration相关Tools",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -98,
          "y": 2219,
          "w": 307,
          "h": 49
        },
        {
          "id": "r6Blr7Q4wOnvJ-m6NvPyP",
          "label": "Sharding Patterns",
          "zh": "分片模式",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 219,
          "y": 2267,
          "w": 318,
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
      "zh": "阶段 20：规范化/NormalForms",
      "en": "Normalization / Normal Forms",
      "desc": "按 roadmap.sh 原始顺序整理的第 20 组学习节点。",
      "nodes": [
        {
          "id": "Fcl7AD2M6WrMbxdvnl-ub",
          "label": "Normalization / Normal Forms",
          "zh": "规范化/NormalForms",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 219,
          "y": 2320,
          "w": 318,
          "h": 49
        },
        {
          "id": "rnXcM62rgq3p6FQ9AWW1R",
          "label": "Patterns / Antipatterns",
          "zh": "模式/Antipatterns",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -96,
          "y": 2323,
          "w": 221,
          "h": 49
        },
        {
          "id": "WCBWPubUS84r3tOXpnZT3",
          "label": "PgQ",
          "zh": "PgQ（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 129,
          "y": 2323,
          "w": 76,
          "h": 49
        },
        {
          "id": "v2J6PZT0fHvqA7GwlqBU7",
          "label": "Processes & Memory Architecture",
          "zh": "Processes（技术术语）与内存架构",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 2411,
          "w": 317,
          "h": 49
        },
        {
          "id": "dJzJP1uo4kVFThWgglPfk",
          "label": "Vacuum Processing",
          "zh": "Vacuum处理",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 2464,
          "w": 317,
          "h": 49
        },
        {
          "id": "Ur23UVs_nXaltytF1WJD8",
          "label": "PL/pgSQL",
          "zh": "PL/pgSQL（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 238,
          "y": 2476,
          "w": 297,
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
      "zh": "阶段 21：Per-用户,Per-数据库设置",
      "en": "Per-User, Per-Database Setting",
      "desc": "按 roadmap.sh 原始顺序整理的第 21 组学习节点。",
      "nodes": [
        {
          "id": "msm4QCAA-MRVI1psf6tt3",
          "label": "Per-User, Per-Database Setting",
          "zh": "Per-用户,Per-数据库设置",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -112,
          "y": 2479,
          "w": 287,
          "h": 49
        },
        {
          "id": "KeBUzfrkorgFWpR8A-xmJ",
          "label": "Buffer Management",
          "zh": "Buffer管理",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 2517,
          "w": 317,
          "h": 49
        },
        {
          "id": "LiF2Yh818D-zEF58v5Fgr",
          "label": "Procedures and Functions",
          "zh": "Procedures（技术术语）与Functions（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 238,
          "y": 2529,
          "w": 298,
          "h": 49
        },
        {
          "id": "4VrT_K9cZZ0qE1EheSQy0",
          "label": "Storage Parameters",
          "zh": "存储参数",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -111,
          "y": 2532,
          "w": 287,
          "h": 49
        },
        {
          "id": "pOkafV7nDHme4jk-hA8Cn",
          "label": "Lock Management",
          "zh": "锁管理",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 2570,
          "w": 317,
          "h": 49
        },
        {
          "id": "ps2KK88QA1n5udn2ochIn",
          "label": "Triggers",
          "zh": "Triggers（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 238,
          "y": 2582,
          "w": 127,
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
      "zh": "阶段 22：Recursive CTE（技术术语）",
      "en": "Recursive CTE",
      "desc": "按 roadmap.sh 原始顺序整理的第 22 组学习节点。",
      "nodes": [
        {
          "id": "A1LGOqqaka0ILcYwybclP",
          "label": "Recursive CTE",
          "zh": "Recursive CTE（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 369,
          "y": 2582,
          "w": 168,
          "h": 49
        },
        {
          "id": "gweDHAB58gKswdwfpnRQT",
          "label": "Physical Storage and File Layout",
          "zh": "Physical存储与文件Layout",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 2623,
          "w": 317,
          "h": 49
        },
        {
          "id": "VekAMpcrugHGuvSbyPZVv",
          "label": "OLTP",
          "zh": "OLTP（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -106,
          "y": 2625,
          "w": 76,
          "h": 49
        },
        {
          "id": "WI3-7hFAnJw5f7GIn-5kp",
          "label": "OLAP",
          "zh": "OLAP（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -27,
          "y": 2625,
          "w": 101,
          "h": 49
        },
        {
          "id": "rHDlm78yroRrrAAcabEAl",
          "label": "HTAP",
          "zh": "HTAP（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 75,
          "y": 2625,
          "w": 101,
          "h": 49
        },
        {
          "id": "iQqEC1CnVAoM7x455jO_S",
          "label": "Aggregate and Window functions",
          "zh": "聚合与Windowfunctions（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 237,
          "y": 2636,
          "w": 301,
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
      "zh": "阶段 23：系统Catalog",
      "en": "System Catalog",
      "desc": "按 roadmap.sh 原始顺序整理的第 23 组学习节点。",
      "nodes": [
        {
          "id": "lDuBFA7cEMnd7Cl9MDgnf",
          "label": "System Catalog",
          "zh": "系统Catalog",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 2676,
          "w": 317,
          "h": 49
        },
        {
          "id": "n2OjwxzIHnATraRWi5Ddl",
          "label": "EXPLAIN",
          "zh": "EXPLAIN（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -162,
          "y": 2858,
          "w": 101,
          "h": 49
        },
        {
          "id": "rVlncpLO20WK6mjyqLerL",
          "label": "Depesz",
          "zh": "Depesz（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -58,
          "y": 2858,
          "w": 101,
          "h": 49
        },
        {
          "id": "pvj33qDiG3sSjtiW6sUra",
          "label": "top",
          "zh": "top（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 271,
          "y": 2858,
          "w": 61,
          "h": 49
        },
        {
          "id": "0hRQtRsteGDnKO5XgLF1R",
          "label": "sysstat",
          "zh": "sysstat（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 338,
          "y": 2858,
          "w": 81,
          "h": 49
        },
        {
          "id": "n8oHT7YwhHhFdU5_7DZ_F",
          "label": "iotop",
          "zh": "iotop（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 424,
          "y": 2858,
          "w": 81,
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
      "zh": "阶段 24：pg_stat_activity（技术术语）",
      "en": "pg_stat_activity",
      "desc": "按 roadmap.sh 原始顺序整理的第 24 组学习节点。",
      "nodes": [
        {
          "id": "_NL5pGGTLNxCFx4axOqfu",
          "label": "pg_stat_activity",
          "zh": "pg_stat_activity（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -376,
          "y": 2859,
          "w": 201,
          "h": 49
        },
        {
          "id": "wH447bS-csqmGbk-jaGqp",
          "label": "perf-tools",
          "zh": "perf-tools（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 60,
          "y": 2859,
          "w": 198,
          "h": 49
        },
        {
          "id": "9RyMU36KEP__-RzTTz_eo",
          "label": "PEV2",
          "zh": "PEV2（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -162,
          "y": 2911,
          "w": 101,
          "h": 49
        },
        {
          "id": "xEu5n6U9-WKVxjlT5YUgx",
          "label": "Tensor",
          "zh": "Tensor（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -59,
          "y": 2911,
          "w": 101,
          "h": 49
        },
        {
          "id": "wLMGOUaULW7ZALRr-shTz",
          "label": "pg_stat_statements",
          "zh": "pg_stat_statements（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -376,
          "y": 2912,
          "w": 201,
          "h": 49
        },
        {
          "id": "yIdUhfE2ZTQhDAdQsXrnH",
          "label": "gdb",
          "zh": "gdb（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 60,
          "y": 2912,
          "w": 93,
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
      "zh": "阶段 25：strace（技术术语）",
      "en": "strace",
      "desc": "按 roadmap.sh 原始顺序整理的第 25 组学习节点。",
      "nodes": [
        {
          "id": "C_cUfEufYeUlAdVfdUvsK",
          "label": "strace",
          "zh": "strace（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 157,
          "y": 2912,
          "w": 101,
          "h": 49
        },
        {
          "id": "UZ1vRFRjiQAVu6BygqwEL",
          "label": "explain.dalibo.com",
          "zh": "explain.dalibo.com（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -162,
          "y": 2964,
          "w": 205,
          "h": 49
        },
        {
          "id": "-CIezYPHTcXJF_p4T55-c",
          "label": "Core Dumps",
          "zh": "Core Dumps（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 60,
          "y": 2965,
          "w": 198,
          "h": 49
        },
        {
          "id": "ISuU1lWH_zVDlCHnWXbf9",
          "label": "pgCluu",
          "zh": "pgCluu（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 265,
          "y": 2968,
          "w": 230,
          "h": 49
        },
        {
          "id": "QarPFu_wU6-F9P5YHo6CO",
          "label": "ebpf",
          "zh": "ebpf（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 60,
          "y": 3018,
          "w": 198,
          "h": 49
        },
        {
          "id": "V2iW8tJQXwsRknnZXoHGd",
          "label": "pgBadger",
          "zh": "pgBadger（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 265,
          "y": 3021,
          "w": 230,
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
      "zh": "阶段 26：USE（技术术语）",
      "en": "USE",
      "desc": "按 roadmap.sh 原始顺序整理的第 26 组学习节点。",
      "nodes": [
        {
          "id": "QWi84EjdHw5ChYsuwUhPC",
          "label": "USE",
          "zh": "USE（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -376,
          "y": 3024,
          "w": 101,
          "h": 49
        },
        {
          "id": "qBkpTmfbyCv2L-OJW9pPI",
          "label": "RED",
          "zh": "RED（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -271,
          "y": 3024,
          "w": 101,
          "h": 49
        },
        {
          "id": "HJCRntic0aGVvdmCN45aP",
          "label": "awk",
          "zh": "awk（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 265,
          "y": 3074,
          "w": 61,
          "h": 49
        },
        {
          "id": "cFtrSgboZRJ3Q63eaqEBf",
          "label": "grep",
          "zh": "grep（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 329,
          "y": 3074,
          "w": 81,
          "h": 49
        },
        {
          "id": "hVL6OtsXrE8BvjKpRjB-9",
          "label": "sed",
          "zh": "sed（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 415,
          "y": 3074,
          "w": 81,
          "h": 49
        },
        {
          "id": "TytU0IpWgwhr4w4W4H3Vx",
          "label": "pgcenter",
          "zh": "pgcenter（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -162,
          "y": 3076,
          "w": 196,
          "h": 49
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
      "zh": "阶段 27：SQL查询模式/Anti-模式",
      "en": "SQL Query Patterns / Anti-patterns",
      "desc": "按 roadmap.sh 原始顺序整理的第 27 组学习节点。",
      "nodes": [
        {
          "id": "oX-bdPPjaHJnQKgUhDSF2",
          "label": "Golden Signals",
          "zh": "Golden Signals（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -376,
          "y": 3077,
          "w": 204,
          "h": 49
        },
        {
          "id": "G9DB1ZQjgXaHxJ4Lm6xGx",
          "label": "SQL Query Patterns / Anti-patterns",
          "zh": "SQL查询模式/Anti-模式",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -210,
          "y": 3204,
          "w": 359,
          "h": 49
        },
        {
          "id": "FDuiJyU1yWUQ9IsfS3CeZ",
          "label": "Schema Design Patterns / Anti-patterns",
          "zh": "模式设计模式/Anti-模式",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -210,
          "y": 3257,
          "w": 359,
          "h": 49
        },
        {
          "id": "jihXOJq9zYlDOpvJvpFO-",
          "label": "B-Tree",
          "zh": "B-Tree（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 269,
          "y": 3323,
          "w": 116,
          "h": 49
        },
        {
          "id": "43oFhZuXjJd4QHbUoLtft",
          "label": "BRIN",
          "zh": "BRIN（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 389,
          "y": 3324,
          "w": 101,
          "h": 49
        },
        {
          "id": "2chGkn5Y_WTjYllpgL0LJ",
          "label": "GiST",
          "zh": "GiST（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 269,
          "y": 3376,
          "w": 116,
          "h": 49
        }
      ],
      "index": 27,
      "mapX": 1130,
      "mapY": 2226,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-28",
      "zh": "阶段 28：索引与theirUsecases（技术术语）",
      "en": "Indexes and their Usecases",
      "desc": "按 roadmap.sh 原始顺序整理的第 28 组学习节点。",
      "nodes": [
        {
          "id": "Dhhyg23dBMyAKCFwZmu71",
          "label": "Indexes and their Usecases",
          "zh": "索引与theirUsecases（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -210,
          "y": 3377,
          "w": 359,
          "h": 49
        },
        {
          "id": "2yWYyXt1uLOdQg4YsgdVq",
          "label": "Hash",
          "zh": "Hash（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 389,
          "y": 3377,
          "w": 101,
          "h": 49
        },
        {
          "id": "LT5qRETR3pAI8Tk6k5idg",
          "label": "SP-GiST",
          "zh": "SP-GiST（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 269,
          "y": 3429,
          "w": 116,
          "h": 49
        },
        {
          "id": "FJhJyDWOj9w_Rd_uKcouT",
          "label": "GIN",
          "zh": "GIN（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 389,
          "y": 3430,
          "w": 101,
          "h": 49
        },
        {
          "id": "8H7hJhGKxr1nrjkHv9Xao",
          "label": "Mailing Lists",
          "zh": "Mailing Lists（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -505,
          "y": 3453,
          "w": 209,
          "h": 49
        },
        {
          "id": "NhodBD8myUTljNdn3y40I",
          "label": "Get Involved in Development",
          "zh": "Get Involved in Development（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -210,
          "y": 3505,
          "w": 359,
          "h": 49
        }
      ],
      "index": 28,
      "mapX": 1650,
      "mapY": 2226,
      "mapW": 430,
      "mapH": 308
    },
    {
      "id": "stage-29",
      "zh": "阶段 29：Reviewing Patches（技术术语）",
      "en": "Reviewing Patches",
      "desc": "按 roadmap.sh 原始顺序整理的第 29 组学习节点。",
      "nodes": [
        {
          "id": "Jy0G0ZnHPOM8hba_PbwuA",
          "label": "Reviewing Patches",
          "zh": "Reviewing Patches（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -505,
          "y": 3506,
          "w": 209,
          "h": 49
        },
        {
          "id": "eQzMU_KyQmHJQ6gzyk0-1",
          "label": "Writing Patches",
          "zh": "Writing Patches（技术术语）",
          "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -505,
          "y": 3559,
          "w": 209,
          "h": 49
        }
      ],
      "index": 29,
      "mapX": 1650,
      "mapY": 2582,
      "mapW": 430,
      "mapH": 156
    }
  ],
  "nodes": [
    {
      "id": "lDIy56RyC1XM7IfORsSLD",
      "label": "Introduction",
      "zh": "入门介绍",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -229,
      "y": -12,
      "w": 271,
      "h": 49
    },
    {
      "id": "soar-NBWCr4xVKj7ttfnc",
      "label": "What are Relational Databases?",
      "zh": "什么是关系型数据库",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 152,
      "y": -92,
      "w": 331,
      "h": 49
    },
    {
      "id": "p3AmRr_y_ZBKzAU5eh7OU",
      "label": "RDBMS Benefits and Limitations",
      "zh": "RDBMS 优缺点",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 151,
      "y": -39,
      "w": 331,
      "h": 49
    },
    {
      "id": "IAKERTzTpTds5kZLMCapM",
      "label": "PostgreSQL vs Other RDBMS",
      "zh": "PostgreSQL 与其他 RDBMS 对比",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 150,
      "y": 67,
      "w": 331,
      "h": 49
    },
    {
      "id": "D0doJTtLu-1MmFOfavCXN",
      "label": "PostgreSQL vs NoSQL Databases",
      "zh": "PostgreSQL 与 NoSQL 对比",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 150,
      "y": 14,
      "w": 331,
      "h": 49
    },
    {
      "id": "-M9EFgiDSSAzj9ISk-aeh",
      "label": "Basic RDBMS Concepts",
      "zh": "RDBMS 基础概念",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -229,
      "y": 146,
      "w": 271,
      "h": 49
    },
    {
      "id": "RoYP1tYw5dvhmkVTo1HS-",
      "label": "Object Model",
      "zh": "对象模型",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -504,
      "y": 147,
      "w": 206,
      "h": 49
    },
    {
      "id": "xVocG4LuFdtphwoOxiJTa",
      "label": "Queries",
      "zh": "Queries（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -505,
      "y": -118,
      "w": 207,
      "h": 49
    },
    {
      "id": "4Pw7udOMIsiaKr7w9CRxc",
      "label": "Data Types",
      "zh": "数据类型",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -505,
      "y": -65,
      "w": 207,
      "h": 49
    },
    {
      "id": "Rd3RLpyLMGQZzrxQrxDGo",
      "label": "Rows",
      "zh": "Rows（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -505,
      "y": -12,
      "w": 101,
      "h": 49
    },
    {
      "id": "cty2IjgS1BWltbYmuxxuV",
      "label": "Columns",
      "zh": "Columns（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -399,
      "y": -12,
      "w": 101,
      "h": 49
    },
    {
      "id": "W8NhR4SqteMLfso8AD6H8",
      "label": "Tables",
      "zh": "Tables（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -505,
      "y": 41,
      "w": 101,
      "h": 49
    },
    {
      "id": "mF6qAlo2ULJ3lECG2m0h7",
      "label": "Schemas",
      "zh": "模式",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -399,
      "y": 41,
      "w": 101,
      "h": 49
    },
    {
      "id": "DU-D3-j9h6i9Nj5ci8hlX",
      "label": "Databases",
      "zh": "数据库",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -504,
      "y": 94,
      "w": 206,
      "h": 49
    },
    {
      "id": "mDVbjdVN0spY7dI_8k1YW",
      "label": "Relational Model",
      "zh": "关系型模型",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -504,
      "y": 231,
      "w": 206,
      "h": 49
    },
    {
      "id": "-LuxJvI5IaOx6NqzK0d8S",
      "label": "Domains",
      "zh": "Domains（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -504,
      "y": 285,
      "w": 98,
      "h": 49
    },
    {
      "id": "XvZMSveMWqmAlXOxwWzdk",
      "label": "Attributes",
      "zh": "属性",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -403,
      "y": 285,
      "w": 106,
      "h": 49
    },
    {
      "id": "vJhvgGwNV3JB-wWn_0gMb",
      "label": "Tuples",
      "zh": "元组",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -504,
      "y": 338,
      "w": 98,
      "h": 49
    },
    {
      "id": "2hM2IPAnNYq-LlEbcFp2Z",
      "label": "Relations",
      "zh": "关系",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -403,
      "y": 338,
      "w": 106,
      "h": 49
    },
    {
      "id": "j9ikSpCD3yM5pTRFuJjZs",
      "label": "Constraints",
      "zh": "约束",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -504,
      "y": 391,
      "w": 114,
      "h": 49
    },
    {
      "id": "91eOGK8mtJulWRlhKyv0F",
      "label": "NULL",
      "zh": "NULL（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -388,
      "y": 391,
      "w": 91,
      "h": 49
    },
    {
      "id": "_BSR2mo1lyXEFXbKYb1ZG",
      "label": "High Level Database Concepts",
      "zh": "数据库高级概念",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 151,
      "y": 148,
      "w": 286,
      "h": 49
    },
    {
      "id": "9u7DPbfybqmldisiePq0m",
      "label": "ACID",
      "zh": "ACID（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 151,
      "y": 201,
      "w": 71,
      "h": 49
    },
    {
      "id": "-_ADJsTVGAgXq7_-8bdIO",
      "label": "MVCC",
      "zh": "MVCC（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 225,
      "y": 201,
      "w": 81,
      "h": 49
    },
    {
      "id": "yFG_hVD3dB_qK8yphrRY5",
      "label": "Transactions",
      "zh": "Transactions（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 309,
      "y": 201,
      "w": 126,
      "h": 49
    },
    {
      "id": "9sadNsbHLqejbRPHWhx-w",
      "label": "Write-ahead Log",
      "zh": "预写式日志 WAL",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 151,
      "y": 254,
      "w": 286,
      "h": 49
    },
    {
      "id": "Qk14b9WyeCp9RV9WAwojt",
      "label": "Query Processing",
      "zh": "查询处理",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 151,
      "y": 307,
      "w": 286,
      "h": 49
    },
    {
      "id": "5MjJIAcn5zABCK6JsFf4k",
      "label": "Using Docker",
      "zh": "使用Docker",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -501,
      "y": 489,
      "w": 233,
      "h": 49
    },
    {
      "id": "pEtQy1nuW98YUwrbfs7Np",
      "label": "Package Managers",
      "zh": "Package Managers（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -501,
      "y": 542,
      "w": 233,
      "h": 49
    },
    {
      "id": "mMf2Mq9atIKk37IMWuoJs",
      "label": "Connect using `psql`",
      "zh": "Connect使用`psql`",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -501,
      "y": 595,
      "w": 233,
      "h": 49
    },
    {
      "id": "6SCcxpkpLmmRe0rS8WAPZ",
      "label": "Deployment in Cloud",
      "zh": "部署in云",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -501,
      "y": 648,
      "w": 233,
      "h": 49
    },
    {
      "id": "P1Hm6ZlrhCRxbxOJkBHlL",
      "label": "Using `systemd`",
      "zh": "使用`systemd`",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -252,
      "y": 534,
      "w": 208,
      "h": 49
    },
    {
      "id": "a4j0Rs8Tl6-k9WP5zjaep",
      "label": "Using `pg_ctl`",
      "zh": "使用`pg_ctl`",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -252,
      "y": 587,
      "w": 208,
      "h": 49
    },
    {
      "id": "v3SoKmeCh6uxKW5GAAMje",
      "label": "Using `pg_ctlcluster`",
      "zh": "使用`pg_ctlcluster`",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -252,
      "y": 640,
      "w": 208,
      "h": 49
    },
    {
      "id": "FtPiBWMFhjakyXsmSL_CI",
      "label": "Installation and Setup",
      "zh": "安装与配置",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -210,
      "y": 387,
      "w": 233,
      "h": 49
    },
    {
      "id": "ANUgfkADLI_du7iRvnUdi",
      "label": "Learn SQL",
      "zh": "学习SQL",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 33,
      "y": 564,
      "w": 132,
      "h": 49
    },
    {
      "id": "KMdF9efNGULualk5o1W0_",
      "label": "For Schemas",
      "zh": "For模式",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 219,
      "y": 463,
      "w": 148,
      "h": 49
    },
    {
      "id": "ga8ZiuPc42XvZ3-iVh8T1",
      "label": "ForTables",
      "zh": "ForTables（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 220,
      "y": 516,
      "w": 147,
      "h": 49
    },
    {
      "id": "fvEgtFP7xvkq_D4hYw3gz",
      "label": "Data Types",
      "zh": "数据类型",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 220,
      "y": 569,
      "w": 147,
      "h": 49
    },
    {
      "id": "BEJyz0ohCglDucxfyuAy4",
      "label": "Querying Data",
      "zh": "Querying数据",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 373,
      "y": 462,
      "w": 166,
      "h": 49
    },
    {
      "id": "dd2lTNsNzYdfB7rRFMNmC",
      "label": "Filtering Data",
      "zh": "过滤数据",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 373,
      "y": 515,
      "w": 166,
      "h": 49
    },
    {
      "id": "G2NKhjlZqAY9l32H0LPNQ",
      "label": "Modifying Data",
      "zh": "Modifying数据",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 373,
      "y": 569,
      "w": 166,
      "h": 49
    },
    {
      "id": "Hura0LImG9pyPxaEIDo3X",
      "label": "Joining Tables",
      "zh": "Joining Tables（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 373,
      "y": 623,
      "w": 166,
      "h": 49
    },
    {
      "id": "umNNMpJh4Al1dEpT6YkrA",
      "label": "Import / Export Using `COPY`",
      "zh": "Import/Export使用`COPY`",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 222,
      "y": 690,
      "w": 320,
      "h": 49
    },
    {
      "id": "ghgyAXJ72dZmF2JpDvu9U",
      "label": "Transactions",
      "zh": "Transactions（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 222,
      "y": 798,
      "w": 148,
      "h": 49
    },
    {
      "id": "_Y-omKcWZOxto-xJka7su",
      "label": "Subqueries",
      "zh": "Subqueries（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 222,
      "y": 851,
      "w": 147,
      "h": 49
    },
    {
      "id": "uwd_CaeHQQ3ZWojbmtbPh",
      "label": "Grouping",
      "zh": "Grouping（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 222,
      "y": 904,
      "w": 146,
      "h": 49
    },
    {
      "id": "fsZvmH210bC_3dBD_X8-z",
      "label": "CTE",
      "zh": "CTE（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 373,
      "y": 797,
      "w": 166,
      "h": 49
    },
    {
      "id": "fTsoMSLcXU1mgd5-vekbT",
      "label": "Lateral Join",
      "zh": "LateralJOIN 表连接",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 373,
      "y": 850,
      "w": 166,
      "h": 49
    },
    {
      "id": "kOwhnSZBwIhIbIsoAXQ50",
      "label": "Set Operations",
      "zh": "Set Operations（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 373,
      "y": 903,
      "w": 166,
      "h": 49
    },
    {
      "id": "T819BZ-CZgUX_BY7Gna0J",
      "label": "Configuring",
      "zh": "Configuring（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -170,
      "y": 727,
      "w": 198,
      "h": 49
    },
    {
      "id": "yl3gxfQs4nOE0N7uGqR0d",
      "label": "Resource Usage",
      "zh": "资源Usage",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -509,
      "y": 894,
      "w": 306,
      "h": 49
    },
    {
      "id": "9VmQ-vN3nPyf1pTFIcj40",
      "label": "Write-ahead Log",
      "zh": "预写式日志 WAL",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -509,
      "y": 947,
      "w": 306,
      "h": 49
    },
    {
      "id": "zoaqBP0Jbf0HpTH8Q3LkJ",
      "label": "Vacuums",
      "zh": "Vacuums（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -509,
      "y": 1000,
      "w": 138,
      "h": 49
    },
    {
      "id": "A3YTrZSUxNBq77iIrNdZ4",
      "label": "Replication",
      "zh": "复制",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -368,
      "y": 1000,
      "w": 165,
      "h": 49
    },
    {
      "id": "hOPwVdIzesselbsI_rRxt",
      "label": "Query Planner",
      "zh": "查询Planner",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -509,
      "y": 1053,
      "w": 306,
      "h": 49
    },
    {
      "id": "3pLn1mhRnekG537ejHUYA",
      "label": "Checkpoints / Background Writer",
      "zh": "Checkpoints / Background Writer（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -509,
      "y": 1106,
      "w": 306,
      "h": 49
    },
    {
      "id": "507TY35b8iExakbBMrHgZ",
      "label": "Reporting Logging & Statistics",
      "zh": "Reporting日志与Statistics（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -507,
      "y": 727,
      "w": 303,
      "h": 49
    },
    {
      "id": "VAf9VzPx70hUf4H6i3Z2t",
      "label": "Adding Extra Extensions",
      "zh": "Adding Extra Extensions（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -507,
      "y": 780,
      "w": 303,
      "h": 49
    },
    {
      "id": "2Zg8R5gs9LMQOcOMZtoPk",
      "label": "Security",
      "zh": "安全",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -170,
      "y": 1127,
      "w": 198,
      "h": 49
    },
    {
      "id": "S20aJB-VuSpXYyd0-0S8c",
      "label": "Object Privileges",
      "zh": "对象Privileges",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -48,
      "y": 995,
      "w": 183,
      "h": 49
    },
    {
      "id": "o1WSsw-ZIaAb8JF3P0mfR",
      "label": "Grant / Revoke",
      "zh": "Grant / Revoke（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -48,
      "y": 942,
      "w": 183,
      "h": 49
    },
    {
      "id": "t18XjeHP4uRyERdqhHpl5",
      "label": "Default Privileges",
      "zh": "Default Privileges（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -48,
      "y": 889,
      "w": 183,
      "h": 49
    },
    {
      "id": "09QX_zjCUajxUqcNZKy0x",
      "label": "Advanced Topics",
      "zh": "进阶Topics",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 356,
      "y": 1074,
      "w": 193,
      "h": 49
    },
    {
      "id": "bokFf6VNrLcilI9Hid386",
      "label": "Row-Level Security",
      "zh": "行-级别安全",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 356,
      "y": 1127,
      "w": 193,
      "h": 49
    },
    {
      "id": "GvpIJF-eaGELwcpWq5_3r",
      "label": "SELinux",
      "zh": "SELinux（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 356,
      "y": 1180,
      "w": 193,
      "h": 49
    },
    {
      "id": "gb75xOcAr-q8TcA6_l1GZ",
      "label": "Authentication Models",
      "zh": "认证Models",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 114,
      "y": 1074,
      "w": 236,
      "h": 49
    },
    {
      "id": "l0lpaPy12JFCJ-RRYVSqz",
      "label": "Roles",
      "zh": "Roles（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 114,
      "y": 1127,
      "w": 101,
      "h": 49
    },
    {
      "id": "Y2W29M4piaQsTn2cpyR7Q",
      "label": "pg_hba.conf",
      "zh": "pg_hba.conf（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 219,
      "y": 1127,
      "w": 133,
      "h": 49
    },
    {
      "id": "EKwO6edtFnUw8cPCcVwKJ",
      "label": "SSL Settings",
      "zh": "SSL Settings（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 114,
      "y": 1180,
      "w": 236,
      "h": 49
    },
    {
      "id": "zlqSX0tl7HD9C1yEGkvoM",
      "label": "Infrastructure Skills",
      "zh": "基础设施Skills",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -170,
      "y": 1222,
      "w": 198,
      "h": 49
    },
    {
      "id": "cJYlZJ9f3kdptNrTlpMNU",
      "label": "Using `pg_upgrade`",
      "zh": "使用`pg_upgrade`",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -173,
      "y": 1472,
      "w": 243,
      "h": 49
    },
    {
      "id": "MVVWAf9Hk3Fom-wBhO64R",
      "label": "Using Logical Replication",
      "zh": "使用Logical复制",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -173,
      "y": 1525,
      "w": 243,
      "h": 49
    },
    {
      "id": "rNp3ZC6axkcKtAWYCPvdR",
      "label": "Simple Stateful Setup",
      "zh": "SimpleStateful配置",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -167,
      "y": 1791,
      "w": 235,
      "h": 49
    },
    {
      "id": "QHbdwiMQ8otxnVIUVV2NT",
      "label": "Helm",
      "zh": "Helm（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -167,
      "y": 1844,
      "w": 101,
      "h": 49
    },
    {
      "id": "nRJKfjW2UrmKmVUrGIfCC",
      "label": "Operators",
      "zh": "操作符",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -62,
      "y": 1844,
      "w": 129,
      "h": 49
    },
    {
      "id": "Z2PuOmgOqScGFbhvrvrA1",
      "label": "PostgreSQL Anonymizer",
      "zh": "PostgreSQL Anonymizer（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -171,
      "y": 1361,
      "w": 243,
      "h": 49
    },
    {
      "id": "V8_zJRwOX9664bUvAGgff",
      "label": "HAProxy",
      "zh": "HAProxy（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -167,
      "y": 1952,
      "w": 126,
      "h": 49
    },
    {
      "id": "IkB28gO0LK1q1-KjdI9Oz",
      "label": "Consul",
      "zh": "Consul（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -35,
      "y": 1951,
      "w": 101,
      "h": 49
    },
    {
      "id": "xk2G-HUS-dviNW3BAMmJv",
      "label": "KeepAlived",
      "zh": "KeepAlived（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -167,
      "y": 2005,
      "w": 127,
      "h": 49
    },
    {
      "id": "kCw6oEVGdKokCz4wYizIT",
      "label": "Etcd",
      "zh": "Etcd（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -35,
      "y": 2005,
      "w": 101,
      "h": 49
    },
    {
      "id": "XmBeM01NAy-_nfyNdk9ZV",
      "label": "Prometheus",
      "zh": "Prometheus（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 101,
      "y": 1871,
      "w": 153,
      "h": 49
    },
    {
      "id": "z3VD68R2uyu1s-3giRxKr",
      "label": "Zabbix",
      "zh": "Zabbix（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 258,
      "y": 1871,
      "w": 141,
      "h": 49
    },
    {
      "id": "WiOgUt5teG9UVRa6zo4h3",
      "label": "check_pgactivity",
      "zh": "check_pgactivity（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 101,
      "y": 1926,
      "w": 210,
      "h": 49
    },
    {
      "id": "aXG68inOu3trBWOmg9Yqx",
      "label": "temBoard",
      "zh": "temBoard（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 406,
      "y": 1871,
      "w": 133,
      "h": 49
    },
    {
      "id": "DDPuDDUFxubWZmWXCmF7L",
      "label": "check_pgbackrest",
      "zh": "check_pgbackrest（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 313,
      "y": 1926,
      "w": 227,
      "h": 49
    },
    {
      "id": "-XhONB0FBA6UslbDWoTDv",
      "label": "barman",
      "zh": "barman（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 86,
      "y": 1442,
      "w": 101,
      "h": 49
    },
    {
      "id": "4gQSzH-WKFAvmkwlX_oyR",
      "label": "WAL-G",
      "zh": "WAL-G（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 191,
      "y": 1442,
      "w": 101,
      "h": 49
    },
    {
      "id": "5LLYxCj22RE6Nf0fVm8GO",
      "label": "pgbackrest",
      "zh": "pgbackrest（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 86,
      "y": 1495,
      "w": 208,
      "h": 49
    },
    {
      "id": "Id_17Ya-NUvoXxijAZvmW",
      "label": "pg_probackup",
      "zh": "pg_probackup（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 88,
      "y": 1548,
      "w": 207,
      "h": 49
    },
    {
      "id": "XZ922juBJ8Om0WyGtSYT5",
      "label": "pg_dump",
      "zh": "pg_dump（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 300,
      "y": 1440,
      "w": 109,
      "h": 49
    },
    {
      "id": "QmV-J6fPYQ5CcdGUkBs7y",
      "label": "pg_dumpall",
      "zh": "pg_dumpall（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 410,
      "y": 1440,
      "w": 127,
      "h": 49
    },
    {
      "id": "YSprRhPHkzV8SzDYpIVmp",
      "label": "pg_restore",
      "zh": "pg_restore（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 301,
      "y": 1493,
      "w": 236,
      "h": 49
    },
    {
      "id": "XYaVsj5_48CSnoTSGXBbN",
      "label": "pg_basebackup",
      "zh": "pg_basebackup（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 300,
      "y": 1546,
      "w": 237,
      "h": 49
    },
    {
      "id": "te4PZaqt6-5Qu8rU0w6a1",
      "label": "Backup Validation Procedures",
      "zh": "备份校验Procedures",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 88,
      "y": 1601,
      "w": 451,
      "h": 49
    },
    {
      "id": "aKQI7aX4bT_39bZgjmfoW",
      "label": "PgBouncer",
      "zh": "PgBouncer（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 312,
      "y": 1716,
      "w": 226,
      "h": 49
    },
    {
      "id": "3V1PPIeB0i9qNUsT8-4O-",
      "label": "PgBouncer Alternatives",
      "zh": "PgBouncer Alternatives（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 312,
      "y": 1769,
      "w": 226,
      "h": 49
    },
    {
      "id": "rmsIw9CQa1qcQ_REw76NK",
      "label": "Logical Replication",
      "zh": "Logical复制",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 89,
      "y": 1717,
      "w": 216,
      "h": 49
    },
    {
      "id": "MwLlVbqceQ-GTgPJlgoQY",
      "label": "Streaming Replication",
      "zh": "Streaming复制",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 89,
      "y": 1770,
      "w": 216,
      "h": 49
    },
    {
      "id": "mm0K_8TFicrYdZQvWFkH4",
      "label": "Patroni",
      "zh": "Patroni（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -173,
      "y": 1630,
      "w": 244,
      "h": 49
    },
    {
      "id": "TZvZ_jNjWnM535ZktyhQN",
      "label": "Patroni Alternatives",
      "zh": "Patroni Alternatives（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -173,
      "y": 1683,
      "w": 244,
      "h": 49
    },
    {
      "id": "SNnc8CIKuHUAEZaJ_qEar",
      "label": "Resource Usage / Provisioning / Capacity Planning",
      "zh": "资源Usage/Provisioning/CapacityPlanning",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 101,
      "y": 2000,
      "w": 440,
      "h": 49
    },
    {
      "id": "e5s7-JRqNy-OhfnjTScZI",
      "label": "Learn to Automate",
      "zh": "学习toAutomate",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -509,
      "y": 1508,
      "w": 285,
      "h": 49
    },
    {
      "id": "-clI2RmfhK8F8beHULaIB",
      "label": "Shell Scripts",
      "zh": "Shell Scripts（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 1570,
      "w": 262,
      "h": 49
    },
    {
      "id": "j5YeixkCKRv0sfq_gFVr9",
      "label": "Any Programming Language",
      "zh": "AnyProgramming语言",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 1623,
      "w": 262,
      "h": 49
    },
    {
      "id": "RqSfBR_RuvHrwHfPn1jwZ",
      "label": "Ansible",
      "zh": "Ansible（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -493,
      "y": 1775,
      "w": 146,
      "h": 49
    },
    {
      "id": "Q_B9dlXNMXZIRYQC74uIf",
      "label": "Salt",
      "zh": "Salt（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -342,
      "y": 1773,
      "w": 101,
      "h": 49
    },
    {
      "id": "7EHZ9YsNjCyTAN-LDWYMS",
      "label": "Chef",
      "zh": "Chef（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -342,
      "y": 1827,
      "w": 101,
      "h": 49
    },
    {
      "id": "e39bceamU-lq3F2pmLz6v",
      "label": "Puppet",
      "zh": "Puppet（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -493,
      "y": 1829,
      "w": 146,
      "h": 49
    },
    {
      "id": "AtZcMhy2Idmgonp5O8RSQ",
      "label": "Practical Patterns / Antipatterns",
      "zh": "Practical模式/Antipatterns",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -98,
      "y": 2166,
      "w": 306,
      "h": 49
    },
    {
      "id": "3Lcy7kBKeV6hx9Ctp_20M",
      "label": "Migration Related Tools",
      "zh": "Migration相关Tools",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -98,
      "y": 2219,
      "w": 307,
      "h": 49
    },
    {
      "id": "cc4S7ugIphyBZr-f6X0qi",
      "label": "Bulk Loading / Processing Data",
      "zh": "BulkLoading/处理数据",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 219,
      "y": 2161,
      "w": 318,
      "h": 49
    },
    {
      "id": "OiGRtLsc28Tv35vIut6B6",
      "label": "Data Partitioning",
      "zh": "数据分区",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 219,
      "y": 2214,
      "w": 318,
      "h": 49
    },
    {
      "id": "r6Blr7Q4wOnvJ-m6NvPyP",
      "label": "Sharding Patterns",
      "zh": "分片模式",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 219,
      "y": 2267,
      "w": 318,
      "h": 49
    },
    {
      "id": "Fcl7AD2M6WrMbxdvnl-ub",
      "label": "Normalization / Normal Forms",
      "zh": "规范化/NormalForms",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 219,
      "y": 2320,
      "w": 318,
      "h": 49
    },
    {
      "id": "rnXcM62rgq3p6FQ9AWW1R",
      "label": "Patterns / Antipatterns",
      "zh": "模式/Antipatterns",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -96,
      "y": 2323,
      "w": 221,
      "h": 49
    },
    {
      "id": "WCBWPubUS84r3tOXpnZT3",
      "label": "PgQ",
      "zh": "PgQ（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 129,
      "y": 2323,
      "w": 76,
      "h": 49
    },
    {
      "id": "v2J6PZT0fHvqA7GwlqBU7",
      "label": "Processes & Memory Architecture",
      "zh": "Processes（技术术语）与内存架构",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 2411,
      "w": 317,
      "h": 49
    },
    {
      "id": "dJzJP1uo4kVFThWgglPfk",
      "label": "Vacuum Processing",
      "zh": "Vacuum处理",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 2464,
      "w": 317,
      "h": 49
    },
    {
      "id": "KeBUzfrkorgFWpR8A-xmJ",
      "label": "Buffer Management",
      "zh": "Buffer管理",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 2517,
      "w": 317,
      "h": 49
    },
    {
      "id": "pOkafV7nDHme4jk-hA8Cn",
      "label": "Lock Management",
      "zh": "锁管理",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 2570,
      "w": 317,
      "h": 49
    },
    {
      "id": "gweDHAB58gKswdwfpnRQT",
      "label": "Physical Storage and File Layout",
      "zh": "Physical存储与文件Layout",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 2623,
      "w": 317,
      "h": 49
    },
    {
      "id": "lDuBFA7cEMnd7Cl9MDgnf",
      "label": "System Catalog",
      "zh": "系统Catalog",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 2676,
      "w": 317,
      "h": 49
    },
    {
      "id": "msm4QCAA-MRVI1psf6tt3",
      "label": "Per-User, Per-Database Setting",
      "zh": "Per-用户,Per-数据库设置",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -112,
      "y": 2479,
      "w": 287,
      "h": 49
    },
    {
      "id": "4VrT_K9cZZ0qE1EheSQy0",
      "label": "Storage Parameters",
      "zh": "存储参数",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -111,
      "y": 2532,
      "w": 287,
      "h": 49
    },
    {
      "id": "VekAMpcrugHGuvSbyPZVv",
      "label": "OLTP",
      "zh": "OLTP（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -106,
      "y": 2625,
      "w": 76,
      "h": 49
    },
    {
      "id": "WI3-7hFAnJw5f7GIn-5kp",
      "label": "OLAP",
      "zh": "OLAP（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -27,
      "y": 2625,
      "w": 101,
      "h": 49
    },
    {
      "id": "rHDlm78yroRrrAAcabEAl",
      "label": "HTAP",
      "zh": "HTAP（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 75,
      "y": 2625,
      "w": 101,
      "h": 49
    },
    {
      "id": "Ur23UVs_nXaltytF1WJD8",
      "label": "PL/pgSQL",
      "zh": "PL/pgSQL（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 238,
      "y": 2476,
      "w": 297,
      "h": 49
    },
    {
      "id": "LiF2Yh818D-zEF58v5Fgr",
      "label": "Procedures and Functions",
      "zh": "Procedures（技术术语）与Functions（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 238,
      "y": 2529,
      "w": 298,
      "h": 49
    },
    {
      "id": "ps2KK88QA1n5udn2ochIn",
      "label": "Triggers",
      "zh": "Triggers（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 238,
      "y": 2582,
      "w": 127,
      "h": 49
    },
    {
      "id": "A1LGOqqaka0ILcYwybclP",
      "label": "Recursive CTE",
      "zh": "Recursive CTE（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 369,
      "y": 2582,
      "w": 168,
      "h": 49
    },
    {
      "id": "iQqEC1CnVAoM7x455jO_S",
      "label": "Aggregate and Window functions",
      "zh": "聚合与Windowfunctions（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 237,
      "y": 2636,
      "w": 301,
      "h": 49
    },
    {
      "id": "pvj33qDiG3sSjtiW6sUra",
      "label": "top",
      "zh": "top（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 271,
      "y": 2858,
      "w": 61,
      "h": 49
    },
    {
      "id": "0hRQtRsteGDnKO5XgLF1R",
      "label": "sysstat",
      "zh": "sysstat（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 338,
      "y": 2858,
      "w": 81,
      "h": 49
    },
    {
      "id": "n8oHT7YwhHhFdU5_7DZ_F",
      "label": "iotop",
      "zh": "iotop（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 424,
      "y": 2858,
      "w": 81,
      "h": 49
    },
    {
      "id": "yIdUhfE2ZTQhDAdQsXrnH",
      "label": "gdb",
      "zh": "gdb（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 60,
      "y": 2912,
      "w": 93,
      "h": 49
    },
    {
      "id": "C_cUfEufYeUlAdVfdUvsK",
      "label": "strace",
      "zh": "strace（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 157,
      "y": 2912,
      "w": 101,
      "h": 49
    },
    {
      "id": "QarPFu_wU6-F9P5YHo6CO",
      "label": "ebpf",
      "zh": "ebpf（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 60,
      "y": 3018,
      "w": 198,
      "h": 49
    },
    {
      "id": "wH447bS-csqmGbk-jaGqp",
      "label": "perf-tools",
      "zh": "perf-tools（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 60,
      "y": 2859,
      "w": 198,
      "h": 49
    },
    {
      "id": "-CIezYPHTcXJF_p4T55-c",
      "label": "Core Dumps",
      "zh": "Core Dumps（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 60,
      "y": 2965,
      "w": 198,
      "h": 49
    },
    {
      "id": "V2iW8tJQXwsRknnZXoHGd",
      "label": "pgBadger",
      "zh": "pgBadger（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 265,
      "y": 3021,
      "w": 230,
      "h": 49
    },
    {
      "id": "ISuU1lWH_zVDlCHnWXbf9",
      "label": "pgCluu",
      "zh": "pgCluu（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 265,
      "y": 2968,
      "w": 230,
      "h": 49
    },
    {
      "id": "HJCRntic0aGVvdmCN45aP",
      "label": "awk",
      "zh": "awk（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 265,
      "y": 3074,
      "w": 61,
      "h": 49
    },
    {
      "id": "cFtrSgboZRJ3Q63eaqEBf",
      "label": "grep",
      "zh": "grep（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 329,
      "y": 3074,
      "w": 81,
      "h": 49
    },
    {
      "id": "hVL6OtsXrE8BvjKpRjB-9",
      "label": "sed",
      "zh": "sed（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 415,
      "y": 3074,
      "w": 81,
      "h": 49
    },
    {
      "id": "_NL5pGGTLNxCFx4axOqfu",
      "label": "pg_stat_activity",
      "zh": "pg_stat_activity（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -376,
      "y": 2859,
      "w": 201,
      "h": 49
    },
    {
      "id": "wLMGOUaULW7ZALRr-shTz",
      "label": "pg_stat_statements",
      "zh": "pg_stat_statements（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -376,
      "y": 2912,
      "w": 201,
      "h": 49
    },
    {
      "id": "TytU0IpWgwhr4w4W4H3Vx",
      "label": "pgcenter",
      "zh": "pgcenter（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -162,
      "y": 3076,
      "w": 196,
      "h": 49
    },
    {
      "id": "n2OjwxzIHnATraRWi5Ddl",
      "label": "EXPLAIN",
      "zh": "EXPLAIN（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -162,
      "y": 2858,
      "w": 101,
      "h": 49
    },
    {
      "id": "rVlncpLO20WK6mjyqLerL",
      "label": "Depesz",
      "zh": "Depesz（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -58,
      "y": 2858,
      "w": 101,
      "h": 49
    },
    {
      "id": "9RyMU36KEP__-RzTTz_eo",
      "label": "PEV2",
      "zh": "PEV2（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -162,
      "y": 2911,
      "w": 101,
      "h": 49
    },
    {
      "id": "xEu5n6U9-WKVxjlT5YUgx",
      "label": "Tensor",
      "zh": "Tensor（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -59,
      "y": 2911,
      "w": 101,
      "h": 49
    },
    {
      "id": "UZ1vRFRjiQAVu6BygqwEL",
      "label": "explain.dalibo.com",
      "zh": "explain.dalibo.com（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -162,
      "y": 2964,
      "w": 205,
      "h": 49
    },
    {
      "id": "QWi84EjdHw5ChYsuwUhPC",
      "label": "USE",
      "zh": "USE（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -376,
      "y": 3024,
      "w": 101,
      "h": 49
    },
    {
      "id": "qBkpTmfbyCv2L-OJW9pPI",
      "label": "RED",
      "zh": "RED（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -271,
      "y": 3024,
      "w": 101,
      "h": 49
    },
    {
      "id": "oX-bdPPjaHJnQKgUhDSF2",
      "label": "Golden Signals",
      "zh": "Golden Signals（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -376,
      "y": 3077,
      "w": 204,
      "h": 49
    },
    {
      "id": "FDuiJyU1yWUQ9IsfS3CeZ",
      "label": "Schema Design Patterns / Anti-patterns",
      "zh": "模式设计模式/Anti-模式",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -210,
      "y": 3257,
      "w": 359,
      "h": 49
    },
    {
      "id": "G9DB1ZQjgXaHxJ4Lm6xGx",
      "label": "SQL Query Patterns / Anti-patterns",
      "zh": "SQL查询模式/Anti-模式",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -210,
      "y": 3204,
      "w": 359,
      "h": 49
    },
    {
      "id": "Dhhyg23dBMyAKCFwZmu71",
      "label": "Indexes and their Usecases",
      "zh": "索引与theirUsecases（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -210,
      "y": 3377,
      "w": 359,
      "h": 49
    },
    {
      "id": "jihXOJq9zYlDOpvJvpFO-",
      "label": "B-Tree",
      "zh": "B-Tree（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 269,
      "y": 3323,
      "w": 116,
      "h": 49
    },
    {
      "id": "2yWYyXt1uLOdQg4YsgdVq",
      "label": "Hash",
      "zh": "Hash（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 389,
      "y": 3377,
      "w": 101,
      "h": 49
    },
    {
      "id": "2chGkn5Y_WTjYllpgL0LJ",
      "label": "GiST",
      "zh": "GiST（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 269,
      "y": 3376,
      "w": 116,
      "h": 49
    },
    {
      "id": "LT5qRETR3pAI8Tk6k5idg",
      "label": "SP-GiST",
      "zh": "SP-GiST（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 269,
      "y": 3429,
      "w": 116,
      "h": 49
    },
    {
      "id": "FJhJyDWOj9w_Rd_uKcouT",
      "label": "GIN",
      "zh": "GIN（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 389,
      "y": 3430,
      "w": 101,
      "h": 49
    },
    {
      "id": "43oFhZuXjJd4QHbUoLtft",
      "label": "BRIN",
      "zh": "BRIN（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 389,
      "y": 3324,
      "w": 101,
      "h": 49
    },
    {
      "id": "NhodBD8myUTljNdn3y40I",
      "label": "Get Involved in Development",
      "zh": "Get Involved in Development（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -210,
      "y": 3505,
      "w": 359,
      "h": 49
    },
    {
      "id": "8H7hJhGKxr1nrjkHv9Xao",
      "label": "Mailing Lists",
      "zh": "Mailing Lists（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -505,
      "y": 3453,
      "w": 209,
      "h": 49
    },
    {
      "id": "Jy0G0ZnHPOM8hba_PbwuA",
      "label": "Reviewing Patches",
      "zh": "Reviewing Patches（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -505,
      "y": 3506,
      "w": 209,
      "h": 49
    },
    {
      "id": "eQzMU_KyQmHJQ6gzyk0-1",
      "label": "Writing Patches",
      "zh": "Writing Patches（技术术语）",
      "desc": "PostgreSQL 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -505,
      "y": 3559,
      "w": 209,
      "h": 49
    }
  ],
  "tutorials": {
    "lDIy56RyC1XM7IfORsSLD": {
      "id": "lDIy56RyC1XM7IfORsSLD",
      "zh": "入门介绍",
      "en": "Introduction",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「入门介绍」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**入门介绍**（Introduction）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**入门介绍**（Introduction）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "soar-NBWCr4xVKj7ttfnc": {
      "id": "soar-NBWCr4xVKj7ttfnc",
      "zh": "什么是关系型数据库",
      "en": "What are Relational Databases?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「什么是关系型数据库」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**什么是关系型数据库**（What are Relational Databases?）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「什么是关系型数据库」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**什么是关系型数据库**（What are Relational Databases?）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "p3AmRr_y_ZBKzAU5eh7OU": {
      "id": "p3AmRr_y_ZBKzAU5eh7OU",
      "zh": "RDBMS 优缺点",
      "en": "RDBMS Benefits and Limitations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「RDBMS 优缺点」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**RDBMS 优缺点**（RDBMS Benefits and Limitations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「RDBMS 优缺点」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**RDBMS 优缺点**（RDBMS Benefits and Limitations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "IAKERTzTpTds5kZLMCapM": {
      "id": "IAKERTzTpTds5kZLMCapM",
      "zh": "PostgreSQL 与其他 RDBMS 对比",
      "en": "PostgreSQL vs Other RDBMS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「PostgreSQL 与其他 RDBMS 对比」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**PostgreSQL 与其他 RDBMS 对比**（PostgreSQL vs Other RDBMS）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PostgreSQL 与其他 RDBMS 对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PostgreSQL 与其他 RDBMS 对比**（PostgreSQL vs Other RDBMS）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "D0doJTtLu-1MmFOfavCXN": {
      "id": "D0doJTtLu-1MmFOfavCXN",
      "zh": "PostgreSQL 与 NoSQL 对比",
      "en": "PostgreSQL vs NoSQL Databases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「PostgreSQL 与 NoSQL 对比」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**PostgreSQL 与 NoSQL 对比**（PostgreSQL vs NoSQL Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PostgreSQL 与 NoSQL 对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PostgreSQL 与 NoSQL 对比**（PostgreSQL vs NoSQL Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "-M9EFgiDSSAzj9ISk-aeh": {
      "id": "-M9EFgiDSSAzj9ISk-aeh",
      "zh": "RDBMS 基础概念",
      "en": "Basic RDBMS Concepts",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「RDBMS 基础概念」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**RDBMS 基础概念**（Basic RDBMS Concepts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「RDBMS 基础概念」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**RDBMS 基础概念**（Basic RDBMS Concepts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "RoYP1tYw5dvhmkVTo1HS-": {
      "id": "RoYP1tYw5dvhmkVTo1HS-",
      "zh": "对象模型",
      "en": "Object Model",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「对象模型」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**对象模型**（Object Model）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「对象模型」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**对象模型**（Object Model）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "xVocG4LuFdtphwoOxiJTa": {
      "id": "xVocG4LuFdtphwoOxiJTa",
      "zh": "Queries（技术术语）",
      "en": "Queries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Queries（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Queries（技术术语）**（Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Queries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Queries（技术术语）**（Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "4Pw7udOMIsiaKr7w9CRxc": {
      "id": "4Pw7udOMIsiaKr7w9CRxc",
      "zh": "数据类型",
      "en": "Data Types",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据类型」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**数据类型**（Data Types）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据类型」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**数据类型**（Data Types）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Rd3RLpyLMGQZzrxQrxDGo": {
      "id": "Rd3RLpyLMGQZzrxQrxDGo",
      "zh": "Rows（技术术语）",
      "en": "Rows",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Rows（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Rows（技术术语）**（Rows）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Rows（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Rows（技术术语）**（Rows）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "cty2IjgS1BWltbYmuxxuV": {
      "id": "cty2IjgS1BWltbYmuxxuV",
      "zh": "Columns（技术术语）",
      "en": "Columns",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Columns（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Columns（技术术语）**（Columns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Columns（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Columns（技术术语）**（Columns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "W8NhR4SqteMLfso8AD6H8": {
      "id": "W8NhR4SqteMLfso8AD6H8",
      "zh": "Tables（技术术语）",
      "en": "Tables",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Tables（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Tables（技术术语）**（Tables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Tables（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Tables（技术术语）**（Tables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "mF6qAlo2ULJ3lECG2m0h7": {
      "id": "mF6qAlo2ULJ3lECG2m0h7",
      "zh": "模式",
      "en": "Schemas",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「模式」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**模式**（Schemas）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「模式」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**模式**（Schemas）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "DU-D3-j9h6i9Nj5ci8hlX": {
      "id": "DU-D3-j9h6i9Nj5ci8hlX",
      "zh": "数据库",
      "en": "Databases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据库」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**数据库**（Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
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
    "mDVbjdVN0spY7dI_8k1YW": {
      "id": "mDVbjdVN0spY7dI_8k1YW",
      "zh": "关系型模型",
      "en": "Relational Model",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「关系型模型」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**关系型模型**（Relational Model）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「关系型模型」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**关系型模型**（Relational Model）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "-LuxJvI5IaOx6NqzK0d8S": {
      "id": "-LuxJvI5IaOx6NqzK0d8S",
      "zh": "Domains（技术术语）",
      "en": "Domains",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Domains（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Domains（技术术语）**（Domains）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Domains（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Domains（技术术语）**（Domains）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "XvZMSveMWqmAlXOxwWzdk": {
      "id": "XvZMSveMWqmAlXOxwWzdk",
      "zh": "属性",
      "en": "Attributes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「属性」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**属性**（Attributes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「属性」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**属性**（Attributes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "vJhvgGwNV3JB-wWn_0gMb": {
      "id": "vJhvgGwNV3JB-wWn_0gMb",
      "zh": "元组",
      "en": "Tuples",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「元组」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**元组**（Tuples）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「元组」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**元组**（Tuples）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "2hM2IPAnNYq-LlEbcFp2Z": {
      "id": "2hM2IPAnNYq-LlEbcFp2Z",
      "zh": "关系",
      "en": "Relations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「关系」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**关系**（Relations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「关系」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**关系**（Relations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "j9ikSpCD3yM5pTRFuJjZs": {
      "id": "j9ikSpCD3yM5pTRFuJjZs",
      "zh": "约束",
      "en": "Constraints",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「约束」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**约束**（Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「约束」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**约束**（Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "91eOGK8mtJulWRlhKyv0F": {
      "id": "91eOGK8mtJulWRlhKyv0F",
      "zh": "NULL（技术术语）",
      "en": "NULL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「NULL（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**NULL（技术术语）**（NULL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「NULL（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**NULL（技术术语）**（NULL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "_BSR2mo1lyXEFXbKYb1ZG": {
      "id": "_BSR2mo1lyXEFXbKYb1ZG",
      "zh": "数据库高级概念",
      "en": "High Level Database Concepts",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据库高级概念」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**数据库高级概念**（High Level Database Concepts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据库高级概念」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**数据库高级概念**（High Level Database Concepts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "9u7DPbfybqmldisiePq0m": {
      "id": "9u7DPbfybqmldisiePq0m",
      "zh": "ACID（技术术语）",
      "en": "ACID",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ACID（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**ACID（技术术语）**（ACID）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ACID（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ACID（技术术语）**（ACID）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "-_ADJsTVGAgXq7_-8bdIO": {
      "id": "-_ADJsTVGAgXq7_-8bdIO",
      "zh": "MVCC（技术术语）",
      "en": "MVCC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「MVCC（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**MVCC（技术术语）**（MVCC）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「MVCC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**MVCC（技术术语）**（MVCC）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "yFG_hVD3dB_qK8yphrRY5": {
      "id": "yFG_hVD3dB_qK8yphrRY5",
      "zh": "Transactions（技术术语）",
      "en": "Transactions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Transactions（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Transactions（技术术语）**（Transactions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
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
    "9sadNsbHLqejbRPHWhx-w": {
      "id": "9sadNsbHLqejbRPHWhx-w",
      "zh": "预写式日志 WAL",
      "en": "Write-ahead Log",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「预写式日志 WAL」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**预写式日志 WAL**（Write-ahead Log）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「预写式日志 WAL」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**预写式日志 WAL**（Write-ahead Log）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Qk14b9WyeCp9RV9WAwojt": {
      "id": "Qk14b9WyeCp9RV9WAwojt",
      "zh": "查询处理",
      "en": "Query Processing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「查询处理」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**查询处理**（Query Processing）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「查询处理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**查询处理**（Query Processing）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "5MjJIAcn5zABCK6JsFf4k": {
      "id": "5MjJIAcn5zABCK6JsFf4k",
      "zh": "使用Docker",
      "en": "Using Docker",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「使用Docker」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**使用Docker**（Using Docker）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「使用Docker」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**使用Docker**（Using Docker）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "pEtQy1nuW98YUwrbfs7Np": {
      "id": "pEtQy1nuW98YUwrbfs7Np",
      "zh": "Package Managers（技术术语）",
      "en": "Package Managers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Package Managers（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Package Managers（技术术语）**（Package Managers）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Package Managers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Package Managers（技术术语）**（Package Managers）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "mMf2Mq9atIKk37IMWuoJs": {
      "id": "mMf2Mq9atIKk37IMWuoJs",
      "zh": "Connect使用`psql`",
      "en": "Connect using `psql`",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Connect使用`psql`」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Connect使用`psql`**（Connect using `psql`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Connect使用`psql`」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Connect使用`psql`**（Connect using `psql`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "6SCcxpkpLmmRe0rS8WAPZ": {
      "id": "6SCcxpkpLmmRe0rS8WAPZ",
      "zh": "部署in云",
      "en": "Deployment in Cloud",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「部署in云」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**部署in云**（Deployment in Cloud）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「部署in云」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**部署in云**（Deployment in Cloud）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "P1Hm6ZlrhCRxbxOJkBHlL": {
      "id": "P1Hm6ZlrhCRxbxOJkBHlL",
      "zh": "使用`systemd`",
      "en": "Using `systemd`",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「使用`systemd`」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**使用`systemd`**（Using `systemd`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「使用`systemd`」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**使用`systemd`**（Using `systemd`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "a4j0Rs8Tl6-k9WP5zjaep": {
      "id": "a4j0Rs8Tl6-k9WP5zjaep",
      "zh": "使用`pg_ctl`",
      "en": "Using `pg_ctl`",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「使用`pg_ctl`」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**使用`pg_ctl`**（Using `pg_ctl`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「使用`pg_ctl`」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**使用`pg_ctl`**（Using `pg_ctl`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "v3SoKmeCh6uxKW5GAAMje": {
      "id": "v3SoKmeCh6uxKW5GAAMje",
      "zh": "使用`pg_ctlcluster`",
      "en": "Using `pg_ctlcluster`",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「使用`pg_ctlcluster`」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**使用`pg_ctlcluster`**（Using `pg_ctlcluster`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「使用`pg_ctlcluster`」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**使用`pg_ctlcluster`**（Using `pg_ctlcluster`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "FtPiBWMFhjakyXsmSL_CI": {
      "id": "FtPiBWMFhjakyXsmSL_CI",
      "zh": "安装与配置",
      "en": "Installation and Setup",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「安装与配置」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**安装与配置**（Installation and Setup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安装与配置」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**安装与配置**（Installation and Setup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "ANUgfkADLI_du7iRvnUdi": {
      "id": "ANUgfkADLI_du7iRvnUdi",
      "zh": "学习SQL",
      "en": "Learn SQL",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「学习SQL」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**学习SQL**（Learn SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「学习SQL」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**学习SQL**（Learn SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "KMdF9efNGULualk5o1W0_": {
      "id": "KMdF9efNGULualk5o1W0_",
      "zh": "For模式",
      "en": "For Schemas",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「For模式」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**For模式**（For Schemas）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「For模式」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**For模式**（For Schemas）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "ga8ZiuPc42XvZ3-iVh8T1": {
      "id": "ga8ZiuPc42XvZ3-iVh8T1",
      "zh": "ForTables（技术术语）",
      "en": "ForTables",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ForTables（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**ForTables（技术术语）**（ForTables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ForTables（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ForTables（技术术语）**（ForTables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "fvEgtFP7xvkq_D4hYw3gz": {
      "id": "fvEgtFP7xvkq_D4hYw3gz",
      "zh": "数据类型",
      "en": "Data Types",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据类型」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**数据类型**（Data Types）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据类型」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**数据类型**（Data Types）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "BEJyz0ohCglDucxfyuAy4": {
      "id": "BEJyz0ohCglDucxfyuAy4",
      "zh": "Querying数据",
      "en": "Querying Data",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Querying数据」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Querying数据**（Querying Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Querying数据」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Querying数据**（Querying Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "dd2lTNsNzYdfB7rRFMNmC": {
      "id": "dd2lTNsNzYdfB7rRFMNmC",
      "zh": "过滤数据",
      "en": "Filtering Data",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「过滤数据」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**过滤数据**（Filtering Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「过滤数据」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**过滤数据**（Filtering Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "G2NKhjlZqAY9l32H0LPNQ": {
      "id": "G2NKhjlZqAY9l32H0LPNQ",
      "zh": "Modifying数据",
      "en": "Modifying Data",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Modifying数据」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Modifying数据**（Modifying Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Modifying数据」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Modifying数据**（Modifying Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Hura0LImG9pyPxaEIDo3X": {
      "id": "Hura0LImG9pyPxaEIDo3X",
      "zh": "Joining Tables（技术术语）",
      "en": "Joining Tables",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Joining Tables（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Joining Tables（技术术语）**（Joining Tables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "先画 ER 关系：users 和 orders 通过 user_id 关联。",
        "写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。",
        "ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。",
        "用 EXPLAIN 看是否走索引，限制返回列和行数。"
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
          "body": "**Joining Tables（技术术语）**（Joining Tables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。 ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。 用 EXPLAIN 看是否走索引，限制返回列和行数。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql",
      "routeLabels": [
        "表关系",
        "JOIN 类型",
        "ON 条件",
        "EXPLAIN"
      ]
    },
    "umNNMpJh4Al1dEpT6YkrA": {
      "id": "umNNMpJh4Al1dEpT6YkrA",
      "zh": "Import/Export使用`COPY`",
      "en": "Import / Export Using `COPY`",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Import/Export使用`COPY`」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Import/Export使用`COPY`**（Import / Export Using `COPY`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Import/Export使用`COPY`」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Import/Export使用`COPY`**（Import / Export Using `COPY`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "ghgyAXJ72dZmF2JpDvu9U": {
      "id": "ghgyAXJ72dZmF2JpDvu9U",
      "zh": "Transactions（技术术语）",
      "en": "Transactions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Transactions（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Transactions（技术术语）**（Transactions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
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
    "_Y-omKcWZOxto-xJka7su": {
      "id": "_Y-omKcWZOxto-xJka7su",
      "zh": "Subqueries（技术术语）",
      "en": "Subqueries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Subqueries（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Subqueries（技术术语）**（Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Subqueries（技术术语）**（Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "uwd_CaeHQQ3ZWojbmtbPh": {
      "id": "uwd_CaeHQQ3ZWojbmtbPh",
      "zh": "Grouping（技术术语）",
      "en": "Grouping",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Grouping（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Grouping（技术术语）**（Grouping）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Grouping（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Grouping（技术术语）**（Grouping）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "fsZvmH210bC_3dBD_X8-z": {
      "id": "fsZvmH210bC_3dBD_X8-z",
      "zh": "CTE（技术术语）",
      "en": "CTE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「CTE（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**CTE（技术术语）**（CTE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CTE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CTE（技术术语）**（CTE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "fTsoMSLcXU1mgd5-vekbT": {
      "id": "fTsoMSLcXU1mgd5-vekbT",
      "zh": "LateralJOIN 表连接",
      "en": "Lateral Join",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「LateralJOIN 表连接」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**LateralJOIN 表连接**（Lateral Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "先画 ER 关系：users 和 orders 通过 user_id 关联。",
        "写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。",
        "ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。",
        "用 EXPLAIN 看是否走索引，限制返回列和行数。"
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
          "body": "**LateralJOIN 表连接**（Lateral Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
        },
        {
          "title": "真正要掌握什么",
          "body": "写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。 ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。 用 EXPLAIN 看是否走索引，限制返回列和行数。"
        },
        {
          "title": "动手验证",
          "body": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
        }
      ],
      "kind": "sql",
      "routeLabels": [
        "表关系",
        "JOIN 类型",
        "ON 条件",
        "EXPLAIN"
      ]
    },
    "kOwhnSZBwIhIbIsoAXQ50": {
      "id": "kOwhnSZBwIhIbIsoAXQ50",
      "zh": "Set Operations（技术术语）",
      "en": "Set Operations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Set Operations（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Set Operations（技术术语）**（Set Operations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Set Operations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Set Operations（技术术语）**（Set Operations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "T819BZ-CZgUX_BY7Gna0J": {
      "id": "T819BZ-CZgUX_BY7Gna0J",
      "zh": "Configuring（技术术语）",
      "en": "Configuring",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Configuring（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Configuring（技术术语）**（Configuring）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Configuring（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Configuring（技术术语）**（Configuring）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "yl3gxfQs4nOE0N7uGqR0d": {
      "id": "yl3gxfQs4nOE0N7uGqR0d",
      "zh": "资源Usage",
      "en": "Resource Usage",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「资源Usage」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**资源Usage**（Resource Usage）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「资源Usage」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**资源Usage**（Resource Usage）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "9VmQ-vN3nPyf1pTFIcj40": {
      "id": "9VmQ-vN3nPyf1pTFIcj40",
      "zh": "预写式日志 WAL",
      "en": "Write-ahead Log",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「预写式日志 WAL」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**预写式日志 WAL**（Write-ahead Log）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「预写式日志 WAL」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**预写式日志 WAL**（Write-ahead Log）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "zoaqBP0Jbf0HpTH8Q3LkJ": {
      "id": "zoaqBP0Jbf0HpTH8Q3LkJ",
      "zh": "Vacuums（技术术语）",
      "en": "Vacuums",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Vacuums（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Vacuums（技术术语）**（Vacuums）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Vacuums（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Vacuums（技术术语）**（Vacuums）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "A3YTrZSUxNBq77iIrNdZ4": {
      "id": "A3YTrZSUxNBq77iIrNdZ4",
      "zh": "复制",
      "en": "Replication",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「复制」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**复制**（Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「复制」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**复制**（Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "hOPwVdIzesselbsI_rRxt": {
      "id": "hOPwVdIzesselbsI_rRxt",
      "zh": "查询Planner",
      "en": "Query Planner",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「查询Planner」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**查询Planner**（Query Planner）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「查询Planner」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**查询Planner**（Query Planner）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "3pLn1mhRnekG537ejHUYA": {
      "id": "3pLn1mhRnekG537ejHUYA",
      "zh": "Checkpoints / Background Writer（技术术语）",
      "en": "Checkpoints / Background Writer",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Checkpoints / Background Writer（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Checkpoints / Background Writer（技术术语）**（Checkpoints / Background Writer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Checkpoints / Background Writer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Checkpoints / Background Writer（技术术语）**（Checkpoints / Background Writer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "507TY35b8iExakbBMrHgZ": {
      "id": "507TY35b8iExakbBMrHgZ",
      "zh": "Reporting日志与Statistics（技术术语）",
      "en": "Reporting Logging & Statistics",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Reporting日志与Statistics（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Reporting日志与Statistics（技术术语）**（Reporting Logging & Statistics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Reporting日志与Statistics（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Reporting日志与Statistics（技术术语）**（Reporting Logging & Statistics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "VAf9VzPx70hUf4H6i3Z2t": {
      "id": "VAf9VzPx70hUf4H6i3Z2t",
      "zh": "Adding Extra Extensions（技术术语）",
      "en": "Adding Extra Extensions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Adding Extra Extensions（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Adding Extra Extensions（技术术语）**（Adding Extra Extensions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Adding Extra Extensions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Adding Extra Extensions（技术术语）**（Adding Extra Extensions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "2Zg8R5gs9LMQOcOMZtoPk": {
      "id": "2Zg8R5gs9LMQOcOMZtoPk",
      "zh": "安全",
      "en": "Security",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「安全」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**安全**（Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「安全」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**安全**（Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "S20aJB-VuSpXYyd0-0S8c": {
      "id": "S20aJB-VuSpXYyd0-0S8c",
      "zh": "对象Privileges",
      "en": "Object Privileges",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「对象Privileges」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**对象Privileges**（Object Privileges）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「对象Privileges」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**对象Privileges**（Object Privileges）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "o1WSsw-ZIaAb8JF3P0mfR": {
      "id": "o1WSsw-ZIaAb8JF3P0mfR",
      "zh": "Grant / Revoke（技术术语）",
      "en": "Grant / Revoke",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Grant / Revoke（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Grant / Revoke（技术术语）**（Grant / Revoke）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Grant / Revoke（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Grant / Revoke（技术术语）**（Grant / Revoke）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "t18XjeHP4uRyERdqhHpl5": {
      "id": "t18XjeHP4uRyERdqhHpl5",
      "zh": "Default Privileges（技术术语）",
      "en": "Default Privileges",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Default Privileges（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Default Privileges（技术术语）**（Default Privileges）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Default Privileges（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Default Privileges（技术术语）**（Default Privileges）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "09QX_zjCUajxUqcNZKy0x": {
      "id": "09QX_zjCUajxUqcNZKy0x",
      "zh": "进阶Topics",
      "en": "Advanced Topics",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「进阶Topics」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**进阶Topics**（Advanced Topics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「进阶Topics」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**进阶Topics**（Advanced Topics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "bokFf6VNrLcilI9Hid386": {
      "id": "bokFf6VNrLcilI9Hid386",
      "zh": "行-级别安全",
      "en": "Row-Level Security",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「行-级别安全」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**行-级别安全**（Row-Level Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「行-级别安全」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**行-级别安全**（Row-Level Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "GvpIJF-eaGELwcpWq5_3r": {
      "id": "GvpIJF-eaGELwcpWq5_3r",
      "zh": "SELinux（技术术语）",
      "en": "SELinux",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SELinux（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**SELinux（技术术语）**（SELinux）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SELinux（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SELinux（技术术语）**（SELinux）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "gb75xOcAr-q8TcA6_l1GZ": {
      "id": "gb75xOcAr-q8TcA6_l1GZ",
      "zh": "认证Models",
      "en": "Authentication Models",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「认证Models」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**认证Models**（Authentication Models）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「认证Models」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**认证Models**（Authentication Models）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "l0lpaPy12JFCJ-RRYVSqz": {
      "id": "l0lpaPy12JFCJ-RRYVSqz",
      "zh": "Roles（技术术语）",
      "en": "Roles",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Roles（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Roles（技术术语）**（Roles）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Roles（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Roles（技术术语）**（Roles）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Y2W29M4piaQsTn2cpyR7Q": {
      "id": "Y2W29M4piaQsTn2cpyR7Q",
      "zh": "pg_hba.conf（技术术语）",
      "en": "pg_hba.conf",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pg_hba.conf（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pg_hba.conf（技术术语）**（pg_hba.conf）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pg_hba.conf（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pg_hba.conf（技术术语）**（pg_hba.conf）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "EKwO6edtFnUw8cPCcVwKJ": {
      "id": "EKwO6edtFnUw8cPCcVwKJ",
      "zh": "SSL Settings（技术术语）",
      "en": "SSL Settings",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SSL Settings（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**SSL Settings（技术术语）**（SSL Settings）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SSL Settings（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SSL Settings（技术术语）**（SSL Settings）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "zlqSX0tl7HD9C1yEGkvoM": {
      "id": "zlqSX0tl7HD9C1yEGkvoM",
      "zh": "基础设施Skills",
      "en": "Infrastructure Skills",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「基础设施Skills」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**基础设施Skills**（Infrastructure Skills）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「基础设施Skills」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**基础设施Skills**（Infrastructure Skills）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "cJYlZJ9f3kdptNrTlpMNU": {
      "id": "cJYlZJ9f3kdptNrTlpMNU",
      "zh": "使用`pg_upgrade`",
      "en": "Using `pg_upgrade`",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「使用`pg_upgrade`」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**使用`pg_upgrade`**（Using `pg_upgrade`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「使用`pg_upgrade`」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**使用`pg_upgrade`**（Using `pg_upgrade`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "MVVWAf9Hk3Fom-wBhO64R": {
      "id": "MVVWAf9Hk3Fom-wBhO64R",
      "zh": "使用Logical复制",
      "en": "Using Logical Replication",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「使用Logical复制」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**使用Logical复制**（Using Logical Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「使用Logical复制」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**使用Logical复制**（Using Logical Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "rNp3ZC6axkcKtAWYCPvdR": {
      "id": "rNp3ZC6axkcKtAWYCPvdR",
      "zh": "SimpleStateful配置",
      "en": "Simple Stateful Setup",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SimpleStateful配置」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**SimpleStateful配置**（Simple Stateful Setup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SimpleStateful配置」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SimpleStateful配置**（Simple Stateful Setup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "QHbdwiMQ8otxnVIUVV2NT": {
      "id": "QHbdwiMQ8otxnVIUVV2NT",
      "zh": "Helm（技术术语）",
      "en": "Helm",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Helm（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Helm（技术术语）**（Helm）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Helm（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Helm（技术术语）**（Helm）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "nRJKfjW2UrmKmVUrGIfCC": {
      "id": "nRJKfjW2UrmKmVUrGIfCC",
      "zh": "操作符",
      "en": "Operators",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「操作符」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**操作符**（Operators）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「操作符」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**操作符**（Operators）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Z2PuOmgOqScGFbhvrvrA1": {
      "id": "Z2PuOmgOqScGFbhvrvrA1",
      "zh": "PostgreSQL Anonymizer（技术术语）",
      "en": "PostgreSQL Anonymizer",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「PostgreSQL Anonymizer（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**PostgreSQL Anonymizer（技术术语）**（PostgreSQL Anonymizer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PostgreSQL Anonymizer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PostgreSQL Anonymizer（技术术语）**（PostgreSQL Anonymizer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "V8_zJRwOX9664bUvAGgff": {
      "id": "V8_zJRwOX9664bUvAGgff",
      "zh": "HAProxy（技术术语）",
      "en": "HAProxy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「HAProxy（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**HAProxy（技术术语）**（HAProxy）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「HAProxy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**HAProxy（技术术语）**（HAProxy）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "IkB28gO0LK1q1-KjdI9Oz": {
      "id": "IkB28gO0LK1q1-KjdI9Oz",
      "zh": "Consul（技术术语）",
      "en": "Consul",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Consul（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Consul（技术术语）**（Consul）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Consul（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Consul（技术术语）**（Consul）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "xk2G-HUS-dviNW3BAMmJv": {
      "id": "xk2G-HUS-dviNW3BAMmJv",
      "zh": "KeepAlived（技术术语）",
      "en": "KeepAlived",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「KeepAlived（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**KeepAlived（技术术语）**（KeepAlived）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「KeepAlived（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**KeepAlived（技术术语）**（KeepAlived）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "kCw6oEVGdKokCz4wYizIT": {
      "id": "kCw6oEVGdKokCz4wYizIT",
      "zh": "Etcd（技术术语）",
      "en": "Etcd",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Etcd（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Etcd（技术术语）**（Etcd）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Etcd（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Etcd（技术术语）**（Etcd）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "XmBeM01NAy-_nfyNdk9ZV": {
      "id": "XmBeM01NAy-_nfyNdk9ZV",
      "zh": "Prometheus（技术术语）",
      "en": "Prometheus",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Prometheus（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Prometheus（技术术语）**（Prometheus）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Prometheus（技术术语）**（Prometheus）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "z3VD68R2uyu1s-3giRxKr": {
      "id": "z3VD68R2uyu1s-3giRxKr",
      "zh": "Zabbix（技术术语）",
      "en": "Zabbix",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Zabbix（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Zabbix（技术术语）**（Zabbix）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Zabbix（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Zabbix（技术术语）**（Zabbix）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "WiOgUt5teG9UVRa6zo4h3": {
      "id": "WiOgUt5teG9UVRa6zo4h3",
      "zh": "check_pgactivity（技术术语）",
      "en": "check_pgactivity",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「check_pgactivity（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**check_pgactivity（技术术语）**（check_pgactivity）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「check_pgactivity（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**check_pgactivity（技术术语）**（check_pgactivity）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "aXG68inOu3trBWOmg9Yqx": {
      "id": "aXG68inOu3trBWOmg9Yqx",
      "zh": "temBoard（技术术语）",
      "en": "temBoard",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「temBoard（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**temBoard（技术术语）**（temBoard）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「temBoard（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**temBoard（技术术语）**（temBoard）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "DDPuDDUFxubWZmWXCmF7L": {
      "id": "DDPuDDUFxubWZmWXCmF7L",
      "zh": "check_pgbackrest（技术术语）",
      "en": "check_pgbackrest",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「check_pgbackrest（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**check_pgbackrest（技术术语）**（check_pgbackrest）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「check_pgbackrest（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**check_pgbackrest（技术术语）**（check_pgbackrest）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "-XhONB0FBA6UslbDWoTDv": {
      "id": "-XhONB0FBA6UslbDWoTDv",
      "zh": "barman（技术术语）",
      "en": "barman",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「barman（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**barman（技术术语）**（barman）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「barman（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**barman（技术术语）**（barman）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "4gQSzH-WKFAvmkwlX_oyR": {
      "id": "4gQSzH-WKFAvmkwlX_oyR",
      "zh": "WAL-G（技术术语）",
      "en": "WAL-G",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「WAL-G（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**WAL-G（技术术语）**（WAL-G）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「WAL-G（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**WAL-G（技术术语）**（WAL-G）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "5LLYxCj22RE6Nf0fVm8GO": {
      "id": "5LLYxCj22RE6Nf0fVm8GO",
      "zh": "pgbackrest（技术术语）",
      "en": "pgbackrest",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pgbackrest（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pgbackrest（技术术语）**（pgbackrest）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pgbackrest（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pgbackrest（技术术语）**（pgbackrest）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Id_17Ya-NUvoXxijAZvmW": {
      "id": "Id_17Ya-NUvoXxijAZvmW",
      "zh": "pg_probackup（技术术语）",
      "en": "pg_probackup",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pg_probackup（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pg_probackup（技术术语）**（pg_probackup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pg_probackup（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pg_probackup（技术术语）**（pg_probackup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "XZ922juBJ8Om0WyGtSYT5": {
      "id": "XZ922juBJ8Om0WyGtSYT5",
      "zh": "pg_dump（技术术语）",
      "en": "pg_dump",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pg_dump（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pg_dump（技术术语）**（pg_dump）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pg_dump（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pg_dump（技术术语）**（pg_dump）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "QmV-J6fPYQ5CcdGUkBs7y": {
      "id": "QmV-J6fPYQ5CcdGUkBs7y",
      "zh": "pg_dumpall（技术术语）",
      "en": "pg_dumpall",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pg_dumpall（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pg_dumpall（技术术语）**（pg_dumpall）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pg_dumpall（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pg_dumpall（技术术语）**（pg_dumpall）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "YSprRhPHkzV8SzDYpIVmp": {
      "id": "YSprRhPHkzV8SzDYpIVmp",
      "zh": "pg_restore（技术术语）",
      "en": "pg_restore",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pg_restore（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pg_restore（技术术语）**（pg_restore）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pg_restore（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pg_restore（技术术语）**（pg_restore）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "XYaVsj5_48CSnoTSGXBbN": {
      "id": "XYaVsj5_48CSnoTSGXBbN",
      "zh": "pg_basebackup（技术术语）",
      "en": "pg_basebackup",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pg_basebackup（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pg_basebackup（技术术语）**（pg_basebackup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pg_basebackup（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pg_basebackup（技术术语）**（pg_basebackup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "te4PZaqt6-5Qu8rU0w6a1": {
      "id": "te4PZaqt6-5Qu8rU0w6a1",
      "zh": "备份校验Procedures",
      "en": "Backup Validation Procedures",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「备份校验Procedures」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**备份校验Procedures**（Backup Validation Procedures）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「备份校验Procedures」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**备份校验Procedures**（Backup Validation Procedures）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "aKQI7aX4bT_39bZgjmfoW": {
      "id": "aKQI7aX4bT_39bZgjmfoW",
      "zh": "PgBouncer（技术术语）",
      "en": "PgBouncer",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「PgBouncer（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**PgBouncer（技术术语）**（PgBouncer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PgBouncer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PgBouncer（技术术语）**（PgBouncer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "3V1PPIeB0i9qNUsT8-4O-": {
      "id": "3V1PPIeB0i9qNUsT8-4O-",
      "zh": "PgBouncer Alternatives（技术术语）",
      "en": "PgBouncer Alternatives",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「PgBouncer Alternatives（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**PgBouncer Alternatives（技术术语）**（PgBouncer Alternatives）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PgBouncer Alternatives（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PgBouncer Alternatives（技术术语）**（PgBouncer Alternatives）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "rmsIw9CQa1qcQ_REw76NK": {
      "id": "rmsIw9CQa1qcQ_REw76NK",
      "zh": "Logical复制",
      "en": "Logical Replication",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Logical复制」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Logical复制**（Logical Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Logical复制」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Logical复制**（Logical Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "MwLlVbqceQ-GTgPJlgoQY": {
      "id": "MwLlVbqceQ-GTgPJlgoQY",
      "zh": "Streaming复制",
      "en": "Streaming Replication",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Streaming复制」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Streaming复制**（Streaming Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Streaming复制」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Streaming复制**（Streaming Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "mm0K_8TFicrYdZQvWFkH4": {
      "id": "mm0K_8TFicrYdZQvWFkH4",
      "zh": "Patroni（技术术语）",
      "en": "Patroni",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Patroni（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Patroni（技术术语）**（Patroni）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Patroni（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Patroni（技术术语）**（Patroni）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "TZvZ_jNjWnM535ZktyhQN": {
      "id": "TZvZ_jNjWnM535ZktyhQN",
      "zh": "Patroni Alternatives（技术术语）",
      "en": "Patroni Alternatives",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Patroni Alternatives（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Patroni Alternatives（技术术语）**（Patroni Alternatives）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Patroni Alternatives（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Patroni Alternatives（技术术语）**（Patroni Alternatives）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "SNnc8CIKuHUAEZaJ_qEar": {
      "id": "SNnc8CIKuHUAEZaJ_qEar",
      "zh": "资源Usage/Provisioning/CapacityPlanning",
      "en": "Resource Usage / Provisioning / Capacity Planning",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「资源Usage/Provisioning/CapacityPlanning」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**资源Usage/Provisioning/CapacityPlanning**（Resource Usage / Provisioning / Capacity Planning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「资源Usage/Provisioning/CapacityPlanning」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**资源Usage/Provisioning/CapacityPlanning**（Resource Usage / Provisioning / Capacity Planning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "e5s7-JRqNy-OhfnjTScZI": {
      "id": "e5s7-JRqNy-OhfnjTScZI",
      "zh": "学习toAutomate",
      "en": "Learn to Automate",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「学习toAutomate」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**学习toAutomate**（Learn to Automate）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「学习toAutomate」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**学习toAutomate**（Learn to Automate）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "-clI2RmfhK8F8beHULaIB": {
      "id": "-clI2RmfhK8F8beHULaIB",
      "zh": "Shell Scripts（技术术语）",
      "en": "Shell Scripts",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Shell Scripts（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Shell Scripts（技术术语）**（Shell Scripts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Shell Scripts（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Shell Scripts（技术术语）**（Shell Scripts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "j5YeixkCKRv0sfq_gFVr9": {
      "id": "j5YeixkCKRv0sfq_gFVr9",
      "zh": "AnyProgramming语言",
      "en": "Any Programming Language",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「AnyProgramming语言」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**AnyProgramming语言**（Any Programming Language）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「AnyProgramming语言」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**AnyProgramming语言**（Any Programming Language）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "RqSfBR_RuvHrwHfPn1jwZ": {
      "id": "RqSfBR_RuvHrwHfPn1jwZ",
      "zh": "Ansible（技术术语）",
      "en": "Ansible",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Ansible（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Ansible（技术术语）**（Ansible）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Ansible（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Ansible（技术术语）**（Ansible）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Q_B9dlXNMXZIRYQC74uIf": {
      "id": "Q_B9dlXNMXZIRYQC74uIf",
      "zh": "Salt（技术术语）",
      "en": "Salt",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Salt（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Salt（技术术语）**（Salt）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Salt（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Salt（技术术语）**（Salt）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "7EHZ9YsNjCyTAN-LDWYMS": {
      "id": "7EHZ9YsNjCyTAN-LDWYMS",
      "zh": "Chef（技术术语）",
      "en": "Chef",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Chef（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Chef（技术术语）**（Chef）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Chef（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Chef（技术术语）**（Chef）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "e39bceamU-lq3F2pmLz6v": {
      "id": "e39bceamU-lq3F2pmLz6v",
      "zh": "Puppet（技术术语）",
      "en": "Puppet",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Puppet（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Puppet（技术术语）**（Puppet）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Puppet（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Puppet（技术术语）**（Puppet）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "AtZcMhy2Idmgonp5O8RSQ": {
      "id": "AtZcMhy2Idmgonp5O8RSQ",
      "zh": "Practical模式/Antipatterns",
      "en": "Practical Patterns / Antipatterns",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Practical模式/Antipatterns」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Practical模式/Antipatterns**（Practical Patterns / Antipatterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Practical模式/Antipatterns」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Practical模式/Antipatterns**（Practical Patterns / Antipatterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "3Lcy7kBKeV6hx9Ctp_20M": {
      "id": "3Lcy7kBKeV6hx9Ctp_20M",
      "zh": "Migration相关Tools",
      "en": "Migration Related Tools",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Migration相关Tools」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Migration相关Tools**（Migration Related Tools）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Migration相关Tools」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Migration相关Tools**（Migration Related Tools）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "cc4S7ugIphyBZr-f6X0qi": {
      "id": "cc4S7ugIphyBZr-f6X0qi",
      "zh": "BulkLoading/处理数据",
      "en": "Bulk Loading / Processing Data",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「BulkLoading/处理数据」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**BulkLoading/处理数据**（Bulk Loading / Processing Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「BulkLoading/处理数据」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**BulkLoading/处理数据**（Bulk Loading / Processing Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "OiGRtLsc28Tv35vIut6B6": {
      "id": "OiGRtLsc28Tv35vIut6B6",
      "zh": "数据分区",
      "en": "Data Partitioning",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据分区」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**数据分区**（Data Partitioning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据分区」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**数据分区**（Data Partitioning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "r6Blr7Q4wOnvJ-m6NvPyP": {
      "id": "r6Blr7Q4wOnvJ-m6NvPyP",
      "zh": "分片模式",
      "en": "Sharding Patterns",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「分片模式」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**分片模式**（Sharding Patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「分片模式」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**分片模式**（Sharding Patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Fcl7AD2M6WrMbxdvnl-ub": {
      "id": "Fcl7AD2M6WrMbxdvnl-ub",
      "zh": "规范化/NormalForms",
      "en": "Normalization / Normal Forms",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「规范化/NormalForms」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**规范化/NormalForms**（Normalization / Normal Forms）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「规范化/NormalForms」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**规范化/NormalForms**（Normalization / Normal Forms）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "rnXcM62rgq3p6FQ9AWW1R": {
      "id": "rnXcM62rgq3p6FQ9AWW1R",
      "zh": "模式/Antipatterns",
      "en": "Patterns / Antipatterns",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「模式/Antipatterns」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**模式/Antipatterns**（Patterns / Antipatterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「模式/Antipatterns」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**模式/Antipatterns**（Patterns / Antipatterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "WCBWPubUS84r3tOXpnZT3": {
      "id": "WCBWPubUS84r3tOXpnZT3",
      "zh": "PgQ（技术术语）",
      "en": "PgQ",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「PgQ（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**PgQ（技术术语）**（PgQ）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PgQ（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PgQ（技术术语）**（PgQ）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "v2J6PZT0fHvqA7GwlqBU7": {
      "id": "v2J6PZT0fHvqA7GwlqBU7",
      "zh": "Processes（技术术语）与内存架构",
      "en": "Processes & Memory Architecture",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Processes（技术术语）与内存架构」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Processes（技术术语）与内存架构**（Processes & Memory Architecture）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Processes（技术术语）与内存架构」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Processes（技术术语）与内存架构**（Processes & Memory Architecture）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "dJzJP1uo4kVFThWgglPfk": {
      "id": "dJzJP1uo4kVFThWgglPfk",
      "zh": "Vacuum处理",
      "en": "Vacuum Processing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Vacuum处理」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Vacuum处理**（Vacuum Processing）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Vacuum处理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Vacuum处理**（Vacuum Processing）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "KeBUzfrkorgFWpR8A-xmJ": {
      "id": "KeBUzfrkorgFWpR8A-xmJ",
      "zh": "Buffer管理",
      "en": "Buffer Management",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Buffer管理」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Buffer管理**（Buffer Management）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Buffer管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Buffer管理**（Buffer Management）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "pOkafV7nDHme4jk-hA8Cn": {
      "id": "pOkafV7nDHme4jk-hA8Cn",
      "zh": "锁管理",
      "en": "Lock Management",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「锁管理」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**锁管理**（Lock Management）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「锁管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**锁管理**（Lock Management）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "gweDHAB58gKswdwfpnRQT": {
      "id": "gweDHAB58gKswdwfpnRQT",
      "zh": "Physical存储与文件Layout",
      "en": "Physical Storage and File Layout",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Physical存储与文件Layout」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Physical存储与文件Layout**（Physical Storage and File Layout）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Physical存储与文件Layout」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Physical存储与文件Layout**（Physical Storage and File Layout）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "lDuBFA7cEMnd7Cl9MDgnf": {
      "id": "lDuBFA7cEMnd7Cl9MDgnf",
      "zh": "系统Catalog",
      "en": "System Catalog",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「系统Catalog」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**系统Catalog**（System Catalog）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「系统Catalog」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**系统Catalog**（System Catalog）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "msm4QCAA-MRVI1psf6tt3": {
      "id": "msm4QCAA-MRVI1psf6tt3",
      "zh": "Per-用户,Per-数据库设置",
      "en": "Per-User, Per-Database Setting",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Per-用户,Per-数据库设置」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Per-用户,Per-数据库设置**（Per-User, Per-Database Setting）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Per-用户,Per-数据库设置」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Per-用户,Per-数据库设置**（Per-User, Per-Database Setting）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "4VrT_K9cZZ0qE1EheSQy0": {
      "id": "4VrT_K9cZZ0qE1EheSQy0",
      "zh": "存储参数",
      "en": "Storage Parameters",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「存储参数」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**存储参数**（Storage Parameters）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「存储参数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**存储参数**（Storage Parameters）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "VekAMpcrugHGuvSbyPZVv": {
      "id": "VekAMpcrugHGuvSbyPZVv",
      "zh": "OLTP（技术术语）",
      "en": "OLTP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「OLTP（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**OLTP（技术术语）**（OLTP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「OLTP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**OLTP（技术术语）**（OLTP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "WI3-7hFAnJw5f7GIn-5kp": {
      "id": "WI3-7hFAnJw5f7GIn-5kp",
      "zh": "OLAP（技术术语）",
      "en": "OLAP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「OLAP（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**OLAP（技术术语）**（OLAP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「OLAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**OLAP（技术术语）**（OLAP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "rHDlm78yroRrrAAcabEAl": {
      "id": "rHDlm78yroRrrAAcabEAl",
      "zh": "HTAP（技术术语）",
      "en": "HTAP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「HTAP（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**HTAP（技术术语）**（HTAP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「HTAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**HTAP（技术术语）**（HTAP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Ur23UVs_nXaltytF1WJD8": {
      "id": "Ur23UVs_nXaltytF1WJD8",
      "zh": "PL/pgSQL（技术术语）",
      "en": "PL/pgSQL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「PL/pgSQL（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**PL/pgSQL（技术术语）**（PL/pgSQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PL/pgSQL（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PL/pgSQL（技术术语）**（PL/pgSQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "LiF2Yh818D-zEF58v5Fgr": {
      "id": "LiF2Yh818D-zEF58v5Fgr",
      "zh": "Procedures（技术术语）与Functions（技术术语）",
      "en": "Procedures and Functions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Procedures（技术术语）与Functions（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Procedures（技术术语）与Functions（技术术语）**（Procedures and Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Procedures（技术术语）与Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Procedures（技术术语）与Functions（技术术语）**（Procedures and Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "ps2KK88QA1n5udn2ochIn": {
      "id": "ps2KK88QA1n5udn2ochIn",
      "zh": "Triggers（技术术语）",
      "en": "Triggers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Triggers（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Triggers（技术术语）**（Triggers）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Triggers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Triggers（技术术语）**（Triggers）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "A1LGOqqaka0ILcYwybclP": {
      "id": "A1LGOqqaka0ILcYwybclP",
      "zh": "Recursive CTE（技术术语）",
      "en": "Recursive CTE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Recursive CTE（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Recursive CTE（技术术语）**（Recursive CTE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Recursive CTE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Recursive CTE（技术术语）**（Recursive CTE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "iQqEC1CnVAoM7x455jO_S": {
      "id": "iQqEC1CnVAoM7x455jO_S",
      "zh": "聚合与Windowfunctions（技术术语）",
      "en": "Aggregate and Window functions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「聚合与Windowfunctions（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**聚合与Windowfunctions（技术术语）**（Aggregate and Window functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「聚合与Windowfunctions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**聚合与Windowfunctions（技术术语）**（Aggregate and Window functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "pvj33qDiG3sSjtiW6sUra": {
      "id": "pvj33qDiG3sSjtiW6sUra",
      "zh": "top（技术术语）",
      "en": "top",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「top（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**top（技术术语）**（top）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「top（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**top（技术术语）**（top）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "0hRQtRsteGDnKO5XgLF1R": {
      "id": "0hRQtRsteGDnKO5XgLF1R",
      "zh": "sysstat（技术术语）",
      "en": "sysstat",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「sysstat（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**sysstat（技术术语）**（sysstat）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「sysstat（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**sysstat（技术术语）**（sysstat）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "n8oHT7YwhHhFdU5_7DZ_F": {
      "id": "n8oHT7YwhHhFdU5_7DZ_F",
      "zh": "iotop（技术术语）",
      "en": "iotop",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「iotop（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**iotop（技术术语）**（iotop）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「iotop（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**iotop（技术术语）**（iotop）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "yIdUhfE2ZTQhDAdQsXrnH": {
      "id": "yIdUhfE2ZTQhDAdQsXrnH",
      "zh": "gdb（技术术语）",
      "en": "gdb",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「gdb（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**gdb（技术术语）**（gdb）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「gdb（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**gdb（技术术语）**（gdb）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "C_cUfEufYeUlAdVfdUvsK": {
      "id": "C_cUfEufYeUlAdVfdUvsK",
      "zh": "strace（技术术语）",
      "en": "strace",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「strace（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**strace（技术术语）**（strace）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「strace（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**strace（技术术语）**（strace）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "QarPFu_wU6-F9P5YHo6CO": {
      "id": "QarPFu_wU6-F9P5YHo6CO",
      "zh": "ebpf（技术术语）",
      "en": "ebpf",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ebpf（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**ebpf（技术术语）**（ebpf）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ebpf（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ebpf（技术术语）**（ebpf）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "wH447bS-csqmGbk-jaGqp": {
      "id": "wH447bS-csqmGbk-jaGqp",
      "zh": "perf-tools（技术术语）",
      "en": "perf-tools",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「perf-tools（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**perf-tools（技术术语）**（perf-tools）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「perf-tools（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**perf-tools（技术术语）**（perf-tools）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "-CIezYPHTcXJF_p4T55-c": {
      "id": "-CIezYPHTcXJF_p4T55-c",
      "zh": "Core Dumps（技术术语）",
      "en": "Core Dumps",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Core Dumps（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Core Dumps（技术术语）**（Core Dumps）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Core Dumps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Core Dumps（技术术语）**（Core Dumps）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "V2iW8tJQXwsRknnZXoHGd": {
      "id": "V2iW8tJQXwsRknnZXoHGd",
      "zh": "pgBadger（技术术语）",
      "en": "pgBadger",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pgBadger（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pgBadger（技术术语）**（pgBadger）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pgBadger（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pgBadger（技术术语）**（pgBadger）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "ISuU1lWH_zVDlCHnWXbf9": {
      "id": "ISuU1lWH_zVDlCHnWXbf9",
      "zh": "pgCluu（技术术语）",
      "en": "pgCluu",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pgCluu（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pgCluu（技术术语）**（pgCluu）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pgCluu（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pgCluu（技术术语）**（pgCluu）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "HJCRntic0aGVvdmCN45aP": {
      "id": "HJCRntic0aGVvdmCN45aP",
      "zh": "awk（技术术语）",
      "en": "awk",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「awk（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**awk（技术术语）**（awk）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「awk（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**awk（技术术语）**（awk）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "cFtrSgboZRJ3Q63eaqEBf": {
      "id": "cFtrSgboZRJ3Q63eaqEBf",
      "zh": "grep（技术术语）",
      "en": "grep",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「grep（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**grep（技术术语）**（grep）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「grep（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**grep（技术术语）**（grep）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "hVL6OtsXrE8BvjKpRjB-9": {
      "id": "hVL6OtsXrE8BvjKpRjB-9",
      "zh": "sed（技术术语）",
      "en": "sed",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「sed（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**sed（技术术语）**（sed）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「sed（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**sed（技术术语）**（sed）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "_NL5pGGTLNxCFx4axOqfu": {
      "id": "_NL5pGGTLNxCFx4axOqfu",
      "zh": "pg_stat_activity（技术术语）",
      "en": "pg_stat_activity",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pg_stat_activity（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pg_stat_activity（技术术语）**（pg_stat_activity）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pg_stat_activity（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pg_stat_activity（技术术语）**（pg_stat_activity）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "wLMGOUaULW7ZALRr-shTz": {
      "id": "wLMGOUaULW7ZALRr-shTz",
      "zh": "pg_stat_statements（技术术语）",
      "en": "pg_stat_statements",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pg_stat_statements（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pg_stat_statements（技术术语）**（pg_stat_statements）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pg_stat_statements（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pg_stat_statements（技术术语）**（pg_stat_statements）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "TytU0IpWgwhr4w4W4H3Vx": {
      "id": "TytU0IpWgwhr4w4W4H3Vx",
      "zh": "pgcenter（技术术语）",
      "en": "pgcenter",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「pgcenter（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**pgcenter（技术术语）**（pgcenter）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「pgcenter（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**pgcenter（技术术语）**（pgcenter）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "n2OjwxzIHnATraRWi5Ddl": {
      "id": "n2OjwxzIHnATraRWi5Ddl",
      "zh": "EXPLAIN（技术术语）",
      "en": "EXPLAIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「EXPLAIN（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**EXPLAIN（技术术语）**（EXPLAIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「EXPLAIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**EXPLAIN（技术术语）**（EXPLAIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "rVlncpLO20WK6mjyqLerL": {
      "id": "rVlncpLO20WK6mjyqLerL",
      "zh": "Depesz（技术术语）",
      "en": "Depesz",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Depesz（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Depesz（技术术语）**（Depesz）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Depesz（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Depesz（技术术语）**（Depesz）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "9RyMU36KEP__-RzTTz_eo": {
      "id": "9RyMU36KEP__-RzTTz_eo",
      "zh": "PEV2（技术术语）",
      "en": "PEV2",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「PEV2（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**PEV2（技术术语）**（PEV2）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「PEV2（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**PEV2（技术术语）**（PEV2）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "xEu5n6U9-WKVxjlT5YUgx": {
      "id": "xEu5n6U9-WKVxjlT5YUgx",
      "zh": "Tensor（技术术语）",
      "en": "Tensor",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Tensor（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Tensor（技术术语）**（Tensor）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Tensor（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Tensor（技术术语）**（Tensor）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "UZ1vRFRjiQAVu6BygqwEL": {
      "id": "UZ1vRFRjiQAVu6BygqwEL",
      "zh": "explain.dalibo.com（技术术语）",
      "en": "explain.dalibo.com",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「explain.dalibo.com（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**explain.dalibo.com（技术术语）**（explain.dalibo.com）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「explain.dalibo.com（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**explain.dalibo.com（技术术语）**（explain.dalibo.com）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "QWi84EjdHw5ChYsuwUhPC": {
      "id": "QWi84EjdHw5ChYsuwUhPC",
      "zh": "USE（技术术语）",
      "en": "USE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「USE（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**USE（技术术语）**（USE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「USE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**USE（技术术语）**（USE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "qBkpTmfbyCv2L-OJW9pPI": {
      "id": "qBkpTmfbyCv2L-OJW9pPI",
      "zh": "RED（技术术语）",
      "en": "RED",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「RED（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**RED（技术术语）**（RED）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「RED（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**RED（技术术语）**（RED）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "oX-bdPPjaHJnQKgUhDSF2": {
      "id": "oX-bdPPjaHJnQKgUhDSF2",
      "zh": "Golden Signals（技术术语）",
      "en": "Golden Signals",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Golden Signals（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Golden Signals（技术术语）**（Golden Signals）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Golden Signals（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Golden Signals（技术术语）**（Golden Signals）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "FDuiJyU1yWUQ9IsfS3CeZ": {
      "id": "FDuiJyU1yWUQ9IsfS3CeZ",
      "zh": "模式设计模式/Anti-模式",
      "en": "Schema Design Patterns / Anti-patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「模式设计模式/Anti-模式」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**模式设计模式/Anti-模式**（Schema Design Patterns / Anti-patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「模式设计模式/Anti-模式」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**模式设计模式/Anti-模式**（Schema Design Patterns / Anti-patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "G9DB1ZQjgXaHxJ4Lm6xGx": {
      "id": "G9DB1ZQjgXaHxJ4Lm6xGx",
      "zh": "SQL查询模式/Anti-模式",
      "en": "SQL Query Patterns / Anti-patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SQL查询模式/Anti-模式」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**SQL查询模式/Anti-模式**（SQL Query Patterns / Anti-patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SQL查询模式/Anti-模式」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SQL查询模式/Anti-模式**（SQL Query Patterns / Anti-patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Dhhyg23dBMyAKCFwZmu71": {
      "id": "Dhhyg23dBMyAKCFwZmu71",
      "zh": "索引与theirUsecases（技术术语）",
      "en": "Indexes and their Usecases",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「索引与theirUsecases（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**索引与theirUsecases（技术术语）**（Indexes and their Usecases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「索引与theirUsecases（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**索引与theirUsecases（技术术语）**（Indexes and their Usecases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "jihXOJq9zYlDOpvJvpFO-": {
      "id": "jihXOJq9zYlDOpvJvpFO-",
      "zh": "B-Tree（技术术语）",
      "en": "B-Tree",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「B-Tree（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**B-Tree（技术术语）**（B-Tree）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「B-Tree（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**B-Tree（技术术语）**（B-Tree）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "2yWYyXt1uLOdQg4YsgdVq": {
      "id": "2yWYyXt1uLOdQg4YsgdVq",
      "zh": "Hash（技术术语）",
      "en": "Hash",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Hash（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Hash（技术术语）**（Hash）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Hash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Hash（技术术语）**（Hash）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "2chGkn5Y_WTjYllpgL0LJ": {
      "id": "2chGkn5Y_WTjYllpgL0LJ",
      "zh": "GiST（技术术语）",
      "en": "GiST",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「GiST（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**GiST（技术术语）**（GiST）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GiST（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GiST（技术术语）**（GiST）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "LT5qRETR3pAI8Tk6k5idg": {
      "id": "LT5qRETR3pAI8Tk6k5idg",
      "zh": "SP-GiST（技术术语）",
      "en": "SP-GiST",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SP-GiST（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**SP-GiST（技术术语）**（SP-GiST）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SP-GiST（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SP-GiST（技术术语）**（SP-GiST）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "FJhJyDWOj9w_Rd_uKcouT": {
      "id": "FJhJyDWOj9w_Rd_uKcouT",
      "zh": "GIN（技术术语）",
      "en": "GIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「GIN（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**GIN（技术术语）**（GIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GIN（技术术语）**（GIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "43oFhZuXjJd4QHbUoLtft": {
      "id": "43oFhZuXjJd4QHbUoLtft",
      "zh": "BRIN（技术术语）",
      "en": "BRIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「BRIN（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**BRIN（技术术语）**（BRIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「BRIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**BRIN（技术术语）**（BRIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "NhodBD8myUTljNdn3y40I": {
      "id": "NhodBD8myUTljNdn3y40I",
      "zh": "Get Involved in Development（技术术语）",
      "en": "Get Involved in Development",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Get Involved in Development（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Get Involved in Development（技术术语）**（Get Involved in Development）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Get Involved in Development（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Get Involved in Development（技术术语）**（Get Involved in Development）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "8H7hJhGKxr1nrjkHv9Xao": {
      "id": "8H7hJhGKxr1nrjkHv9Xao",
      "zh": "Mailing Lists（技术术语）",
      "en": "Mailing Lists",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Mailing Lists（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Mailing Lists（技术术语）**（Mailing Lists）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Mailing Lists（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Mailing Lists（技术术语）**（Mailing Lists）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Jy0G0ZnHPOM8hba_PbwuA": {
      "id": "Jy0G0ZnHPOM8hba_PbwuA",
      "zh": "Reviewing Patches（技术术语）",
      "en": "Reviewing Patches",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Reviewing Patches（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Reviewing Patches（技术术语）**（Reviewing Patches）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Reviewing Patches（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Reviewing Patches（技术术语）**（Reviewing Patches）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "eQzMU_KyQmHJQ6gzyk0-1": {
      "id": "eQzMU_KyQmHJQ6gzyk0-1",
      "zh": "Writing Patches（技术术语）",
      "en": "Writing Patches",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Writing Patches（技术术语）」时，先把它放进 PostgreSQL 的真实场景，而不是孤立背术语。",
      "what": "**Writing Patches（技术术语）**（Writing Patches）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 PostgreSQL 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Writing Patches（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Writing Patches（技术术语）**（Writing Patches）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    }
  },
  "lessons": {
    "lDIy56RyC1XM7IfORsSLD": {
      "scene": "学习「入门介绍」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "入门介绍（Introduction）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「入门介绍」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「入门介绍」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "soar-NBWCr4xVKj7ttfnc": {
      "scene": "学习「什么是关系型数据库」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "什么是关系型数据库（What are Relational Databases?）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「什么是关系型数据库」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「什么是关系型数据库」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「什么是关系型数据库」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "p3AmRr_y_ZBKzAU5eh7OU": {
      "scene": "学习「RDBMS 优缺点」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "RDBMS 优缺点（RDBMS Benefits and Limitations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「RDBMS 优缺点」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「RDBMS 优缺点」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「RDBMS 优缺点」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "IAKERTzTpTds5kZLMCapM": {
      "scene": "学习「PostgreSQL 与其他 RDBMS 对比」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "PostgreSQL 与其他 RDBMS 对比（PostgreSQL vs Other RDBMS）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「PostgreSQL 与其他 RDBMS 对比」出现在哪：上游输入是什…",
          "text": "「PostgreSQL 与其他 RDBMS 对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PostgreSQL 与其他 RDBMS 对比」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "D0doJTtLu-1MmFOfavCXN": {
      "scene": "学习「PostgreSQL 与 NoSQL 对比」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "PostgreSQL 与 NoSQL 对比（PostgreSQL vs NoSQL Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「PostgreSQL 与 NoSQL 对比」出现在哪：上游输入是什么，…",
          "text": "「PostgreSQL 与 NoSQL 对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PostgreSQL 与 NoSQL 对比」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "-M9EFgiDSSAzj9ISk-aeh": {
      "scene": "学习「RDBMS 基础概念」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "RDBMS 基础概念（Basic RDBMS Concepts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「RDBMS 基础概念」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「RDBMS 基础概念」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「RDBMS 基础概念」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "RoYP1tYw5dvhmkVTo1HS-": {
      "scene": "学习「对象模型」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "对象模型（Object Model）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「对象模型」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「对象模型」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「对象模型」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "xVocG4LuFdtphwoOxiJTa": {
      "scene": "学习「Queries（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Queries（技术术语）（Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Queries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Queries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Queries（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "4Pw7udOMIsiaKr7w9CRxc": {
      "scene": "学习「数据类型」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据类型（Data Types）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据类型」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据类型」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「数据类型」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Rd3RLpyLMGQZzrxQrxDGo": {
      "scene": "学习「Rows（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Rows（技术术语）（Rows）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Rows（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Rows（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Rows（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "cty2IjgS1BWltbYmuxxuV": {
      "scene": "学习「Columns（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Columns（技术术语）（Columns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Columns（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Columns（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Columns（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "W8NhR4SqteMLfso8AD6H8": {
      "scene": "学习「Tables（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Tables（技术术语）（Tables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Tables（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Tables（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Tables（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "mF6qAlo2ULJ3lECG2m0h7": {
      "scene": "学习「模式」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "模式（Schemas）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「模式」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「模式」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "DU-D3-j9h6i9Nj5ci8hlX": {
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
    "mDVbjdVN0spY7dI_8k1YW": {
      "scene": "学习「关系型模型」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "关系型模型（Relational Model）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「关系型模型」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「关系型模型」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「关系型模型」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "-LuxJvI5IaOx6NqzK0d8S": {
      "scene": "学习「Domains（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Domains（技术术语）（Domains）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Domains（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Domains（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Domains（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "XvZMSveMWqmAlXOxwWzdk": {
      "scene": "学习「属性」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "属性（Attributes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「属性」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「属性」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「属性」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "vJhvgGwNV3JB-wWn_0gMb": {
      "scene": "学习「元组」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "元组（Tuples）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「元组」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「元组」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「元组」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "2hM2IPAnNYq-LlEbcFp2Z": {
      "scene": "学习「关系」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "关系（Relations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「关系」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「关系」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「关系」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "j9ikSpCD3yM5pTRFuJjZs": {
      "scene": "学习「约束」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "约束（Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「约束」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「约束」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「约束」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "91eOGK8mtJulWRlhKyv0F": {
      "scene": "学习「NULL（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "NULL（技术术语）（NULL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「NULL（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「NULL（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「NULL（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "_BSR2mo1lyXEFXbKYb1ZG": {
      "scene": "学习「数据库高级概念」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据库高级概念（High Level Database Concepts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据库高级概念」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据库高级概念」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「数据库高级概念」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "9u7DPbfybqmldisiePq0m": {
      "scene": "学习「ACID（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "ACID（技术术语）（ACID）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「ACID（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「ACID（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ACID（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "-_ADJsTVGAgXq7_-8bdIO": {
      "scene": "学习「MVCC（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "MVCC（技术术语）（MVCC）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「MVCC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「MVCC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「MVCC（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "yFG_hVD3dB_qK8yphrRY5": {
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
    "9sadNsbHLqejbRPHWhx-w": {
      "scene": "学习「预写式日志 WAL」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "预写式日志 WAL（Write-ahead Log）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「预写式日志 WAL」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「预写式日志 WAL」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「预写式日志 WAL」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Qk14b9WyeCp9RV9WAwojt": {
      "scene": "学习「查询处理」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "查询处理（Query Processing）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「查询处理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「查询处理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「查询处理」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "5MjJIAcn5zABCK6JsFf4k": {
      "scene": "学习「使用Docker」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "使用Docker（Using Docker）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「使用Docker」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「使用Docker」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「使用Docker」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "pEtQy1nuW98YUwrbfs7Np": {
      "scene": "学习「Package Managers（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Package Managers（技术术语）（Package Managers）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Package Managers（技术术语）」出现在哪：上游输入是什么…",
          "text": "「Package Managers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Package Managers（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "mMf2Mq9atIKk37IMWuoJs": {
      "scene": "学习「Connect使用`psql`」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Connect使用`psql`（Connect using `psql`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Connect使用`psql`」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Connect使用`psql`」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Connect使用`psql`」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "6SCcxpkpLmmRe0rS8WAPZ": {
      "scene": "学习「部署in云」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "部署in云（Deployment in Cloud）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「部署in云」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「部署in云」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「部署in云」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "P1Hm6ZlrhCRxbxOJkBHlL": {
      "scene": "学习「使用`systemd`」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "使用`systemd`（Using `systemd`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「使用`systemd`」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「使用`systemd`」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「使用`systemd`」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "a4j0Rs8Tl6-k9WP5zjaep": {
      "scene": "学习「使用`pg_ctl`」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "使用`pg_ctl`（Using `pg_ctl`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「使用`pg_ctl`」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「使用`pg_ctl`」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「使用`pg_ctl`」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "v3SoKmeCh6uxKW5GAAMje": {
      "scene": "学习「使用`pg_ctlcluster`」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "使用`pg_ctlcluster`（Using `pg_ctlcluster`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「使用`pg_ctlcluster`」出现在哪：上游输入是什么，下游输出…",
          "text": "「使用`pg_ctlcluster`」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「使用`pg_ctlcluster`」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "FtPiBWMFhjakyXsmSL_CI": {
      "scene": "学习「安装与配置」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "安装与配置（Installation and Setup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「安装与配置」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「安装与配置」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「安装与配置」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "ANUgfkADLI_du7iRvnUdi": {
      "scene": "学习「学习SQL」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "学习SQL（Learn SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「学习SQL」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「学习SQL」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「学习SQL」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "KMdF9efNGULualk5o1W0_": {
      "scene": "学习「For模式」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "For模式（For Schemas）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「For模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「For模式」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「For模式」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "ga8ZiuPc42XvZ3-iVh8T1": {
      "scene": "学习「ForTables（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "ForTables（技术术语）（ForTables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「ForTables（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「ForTables（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ForTables（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "fvEgtFP7xvkq_D4hYw3gz": {
      "scene": "学习「数据类型」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据类型（Data Types）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据类型」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据类型」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「数据类型」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "BEJyz0ohCglDucxfyuAy4": {
      "scene": "学习「Querying数据」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Querying数据（Querying Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Querying数据」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Querying数据」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Querying数据」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "dd2lTNsNzYdfB7rRFMNmC": {
      "scene": "学习「过滤数据」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "过滤数据（Filtering Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「过滤数据」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「过滤数据」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「过滤数据」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "G2NKhjlZqAY9l32H0LPNQ": {
      "scene": "学习「Modifying数据」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Modifying数据（Modifying Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Modifying数据」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Modifying数据」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Modifying数据」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Hura0LImG9pyPxaEIDo3X": {
      "scene": "学习「Joining Tables（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Joining Tables（技术术语）（Joining Tables）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "表关系",
          "title": "先画 ER 关系：users 和 orders 通过 user_id 关…",
          "text": "先画 ER 关系：users 和 orders 通过 user_id 关联。"
        },
        {
          "label": "JOIN 类型",
          "title": "写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。",
          "text": "写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。"
        },
        {
          "label": "ON 条件",
          "title": "ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。",
          "text": "ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。"
        },
        {
          "label": "EXPLAIN",
          "title": "用 EXPLAIN 看是否走索引，限制返回列和行数。",
          "text": "用 EXPLAIN 看是否走索引，限制返回列和行数。"
        }
      ],
      "confusion": "容易混淆的是：会说「Joining Tables（技术术语）」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "umNNMpJh4Al1dEpT6YkrA": {
      "scene": "学习「Import/Export使用`COPY`」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Import/Export使用`COPY`（Import / Export Using `COPY`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Import/Export使用`COPY`」出现在哪：上游输入是什么，…",
          "text": "「Import/Export使用`COPY`」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Import/Export使用`COPY`」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "ghgyAXJ72dZmF2JpDvu9U": {
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
    "_Y-omKcWZOxto-xJka7su": {
      "scene": "学习「Subqueries（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Subqueries（技术术语）（Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Subqueries（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "uwd_CaeHQQ3ZWojbmtbPh": {
      "scene": "学习「Grouping（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Grouping（技术术语）（Grouping）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Grouping（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Grouping（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Grouping（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "fsZvmH210bC_3dBD_X8-z": {
      "scene": "学习「CTE（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "CTE（技术术语）（CTE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「CTE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CTE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CTE（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "fTsoMSLcXU1mgd5-vekbT": {
      "scene": "学习「LateralJOIN 表连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "LateralJOIN 表连接（Lateral Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "表关系",
          "title": "先画 ER 关系：users 和 orders 通过 user_id 关…",
          "text": "先画 ER 关系：users 和 orders 通过 user_id 关联。"
        },
        {
          "label": "JOIN 类型",
          "title": "写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。",
          "text": "写 JOIN 时明确 INNER/LEFT 的区别：要不要保留无匹配行。"
        },
        {
          "label": "ON 条件",
          "title": "ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。",
          "text": "ON 条件写对关联键，避免笛卡尔积把结果行数撑爆。"
        },
        {
          "label": "EXPLAIN",
          "title": "用 EXPLAIN 看是否走索引，限制返回列和行数。",
          "text": "用 EXPLAIN 看是否走索引，限制返回列和行数。"
        }
      ],
      "confusion": "容易混淆的是：会说「LateralJOIN 表连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "kOwhnSZBwIhIbIsoAXQ50": {
      "scene": "学习「Set Operations（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Set Operations（技术术语）（Set Operations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Set Operations（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Set Operations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Set Operations（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "T819BZ-CZgUX_BY7Gna0J": {
      "scene": "学习「Configuring（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Configuring（技术术语）（Configuring）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Configuring（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Configuring（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Configuring（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "yl3gxfQs4nOE0N7uGqR0d": {
      "scene": "学习「资源Usage」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "资源Usage（Resource Usage）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「资源Usage」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「资源Usage」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「资源Usage」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "9VmQ-vN3nPyf1pTFIcj40": {
      "scene": "学习「预写式日志 WAL」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "预写式日志 WAL（Write-ahead Log）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「预写式日志 WAL」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「预写式日志 WAL」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「预写式日志 WAL」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "zoaqBP0Jbf0HpTH8Q3LkJ": {
      "scene": "学习「Vacuums（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Vacuums（技术术语）（Vacuums）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Vacuums（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Vacuums（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Vacuums（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "A3YTrZSUxNBq77iIrNdZ4": {
      "scene": "学习「复制」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "复制（Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「复制」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「复制」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「复制」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "hOPwVdIzesselbsI_rRxt": {
      "scene": "学习「查询Planner」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "查询Planner（Query Planner）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「查询Planner」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「查询Planner」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「查询Planner」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "3pLn1mhRnekG537ejHUYA": {
      "scene": "学习「Checkpoints / Background Writer（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Checkpoints / Background Writer（技术术语）（Checkpoints / Background Writer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Checkpoints / Background Writer（技术术…",
          "text": "「Checkpoints / Background Writer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Checkpoints / Background Writer（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "507TY35b8iExakbBMrHgZ": {
      "scene": "学习「Reporting日志与Statistics（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Reporting日志与Statistics（技术术语）（Reporting Logging & Statistics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Reporting日志与Statistics（技术术语）」出现在哪：上…",
          "text": "「Reporting日志与Statistics（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Reporting日志与Statistics（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "VAf9VzPx70hUf4H6i3Z2t": {
      "scene": "学习「Adding Extra Extensions（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Adding Extra Extensions（技术术语）（Adding Extra Extensions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Adding Extra Extensions（技术术语）」出现在哪：…",
          "text": "「Adding Extra Extensions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Adding Extra Extensions（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "2Zg8R5gs9LMQOcOMZtoPk": {
      "scene": "学习「安全」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "安全（Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「安全」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「安全」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「安全」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "S20aJB-VuSpXYyd0-0S8c": {
      "scene": "学习「对象Privileges」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "对象Privileges（Object Privileges）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「对象Privileges」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「对象Privileges」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「对象Privileges」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "o1WSsw-ZIaAb8JF3P0mfR": {
      "scene": "学习「Grant / Revoke（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Grant / Revoke（技术术语）（Grant / Revoke）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Grant / Revoke（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Grant / Revoke（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Grant / Revoke（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "t18XjeHP4uRyERdqhHpl5": {
      "scene": "学习「Default Privileges（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Default Privileges（技术术语）（Default Privileges）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Default Privileges（技术术语）」出现在哪：上游输入是…",
          "text": "「Default Privileges（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Default Privileges（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "09QX_zjCUajxUqcNZKy0x": {
      "scene": "学习「进阶Topics」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "进阶Topics（Advanced Topics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「进阶Topics」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「进阶Topics」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「进阶Topics」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "bokFf6VNrLcilI9Hid386": {
      "scene": "学习「行-级别安全」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "行-级别安全（Row-Level Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「行-级别安全」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「行-级别安全」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「行-级别安全」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "GvpIJF-eaGELwcpWq5_3r": {
      "scene": "学习「SELinux（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SELinux（技术术语）（SELinux）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SELinux（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SELinux（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SELinux（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "gb75xOcAr-q8TcA6_l1GZ": {
      "scene": "学习「认证Models」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "认证Models（Authentication Models）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「认证Models」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「认证Models」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「认证Models」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "l0lpaPy12JFCJ-RRYVSqz": {
      "scene": "学习「Roles（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Roles（技术术语）（Roles）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Roles（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Roles（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Roles（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Y2W29M4piaQsTn2cpyR7Q": {
      "scene": "学习「pg_hba.conf（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pg_hba.conf（技术术语）（pg_hba.conf）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pg_hba.conf（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「pg_hba.conf（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pg_hba.conf（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "EKwO6edtFnUw8cPCcVwKJ": {
      "scene": "学习「SSL Settings（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SSL Settings（技术术语）（SSL Settings）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SSL Settings（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「SSL Settings（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SSL Settings（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "zlqSX0tl7HD9C1yEGkvoM": {
      "scene": "学习「基础设施Skills」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "基础设施Skills（Infrastructure Skills）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「基础设施Skills」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「基础设施Skills」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「基础设施Skills」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "cJYlZJ9f3kdptNrTlpMNU": {
      "scene": "学习「使用`pg_upgrade`」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "使用`pg_upgrade`（Using `pg_upgrade`）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「使用`pg_upgrade`」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「使用`pg_upgrade`」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「使用`pg_upgrade`」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "MVVWAf9Hk3Fom-wBhO64R": {
      "scene": "学习「使用Logical复制」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "使用Logical复制（Using Logical Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「使用Logical复制」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「使用Logical复制」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「使用Logical复制」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "rNp3ZC6axkcKtAWYCPvdR": {
      "scene": "学习「SimpleStateful配置」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SimpleStateful配置（Simple Stateful Setup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SimpleStateful配置」出现在哪：上游输入是什么，下游输出是…",
          "text": "「SimpleStateful配置」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SimpleStateful配置」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "QHbdwiMQ8otxnVIUVV2NT": {
      "scene": "学习「Helm（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Helm（技术术语）（Helm）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Helm（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Helm（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Helm（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "nRJKfjW2UrmKmVUrGIfCC": {
      "scene": "学习「操作符」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "操作符（Operators）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「操作符」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「操作符」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「操作符」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Z2PuOmgOqScGFbhvrvrA1": {
      "scene": "学习「PostgreSQL Anonymizer（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "PostgreSQL Anonymizer（技术术语）（PostgreSQL Anonymizer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「PostgreSQL Anonymizer（技术术语）」出现在哪：上游…",
          "text": "「PostgreSQL Anonymizer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PostgreSQL Anonymizer（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "V8_zJRwOX9664bUvAGgff": {
      "scene": "学习「HAProxy（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "HAProxy（技术术语）（HAProxy）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「HAProxy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「HAProxy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「HAProxy（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "IkB28gO0LK1q1-KjdI9Oz": {
      "scene": "学习「Consul（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Consul（技术术语）（Consul）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Consul（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Consul（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Consul（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "xk2G-HUS-dviNW3BAMmJv": {
      "scene": "学习「KeepAlived（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "KeepAlived（技术术语）（KeepAlived）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「KeepAlived（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「KeepAlived（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「KeepAlived（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "kCw6oEVGdKokCz4wYizIT": {
      "scene": "学习「Etcd（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Etcd（技术术语）（Etcd）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Etcd（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Etcd（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Etcd（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "XmBeM01NAy-_nfyNdk9ZV": {
      "scene": "学习「Prometheus（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Prometheus（技术术语）（Prometheus）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Prometheus（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "z3VD68R2uyu1s-3giRxKr": {
      "scene": "学习「Zabbix（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Zabbix（技术术语）（Zabbix）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Zabbix（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Zabbix（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Zabbix（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "WiOgUt5teG9UVRa6zo4h3": {
      "scene": "学习「check_pgactivity（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "check_pgactivity（技术术语）（check_pgactivity）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「check_pgactivity（技术术语）」出现在哪：上游输入是什么…",
          "text": "「check_pgactivity（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「check_pgactivity（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "aXG68inOu3trBWOmg9Yqx": {
      "scene": "学习「temBoard（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "temBoard（技术术语）（temBoard）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「temBoard（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「temBoard（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「temBoard（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "DDPuDDUFxubWZmWXCmF7L": {
      "scene": "学习「check_pgbackrest（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "check_pgbackrest（技术术语）（check_pgbackrest）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「check_pgbackrest（技术术语）」出现在哪：上游输入是什么…",
          "text": "「check_pgbackrest（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「check_pgbackrest（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "-XhONB0FBA6UslbDWoTDv": {
      "scene": "学习「barman（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "barman（技术术语）（barman）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「barman（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「barman（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「barman（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "4gQSzH-WKFAvmkwlX_oyR": {
      "scene": "学习「WAL-G（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "WAL-G（技术术语）（WAL-G）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「WAL-G（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「WAL-G（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「WAL-G（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "5LLYxCj22RE6Nf0fVm8GO": {
      "scene": "学习「pgbackrest（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pgbackrest（技术术语）（pgbackrest）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pgbackrest（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「pgbackrest（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pgbackrest（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Id_17Ya-NUvoXxijAZvmW": {
      "scene": "学习「pg_probackup（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pg_probackup（技术术语）（pg_probackup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pg_probackup（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「pg_probackup（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pg_probackup（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "XZ922juBJ8Om0WyGtSYT5": {
      "scene": "学习「pg_dump（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pg_dump（技术术语）（pg_dump）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pg_dump（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「pg_dump（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pg_dump（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "QmV-J6fPYQ5CcdGUkBs7y": {
      "scene": "学习「pg_dumpall（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pg_dumpall（技术术语）（pg_dumpall）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pg_dumpall（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「pg_dumpall（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pg_dumpall（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "YSprRhPHkzV8SzDYpIVmp": {
      "scene": "学习「pg_restore（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pg_restore（技术术语）（pg_restore）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pg_restore（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「pg_restore（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pg_restore（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "XYaVsj5_48CSnoTSGXBbN": {
      "scene": "学习「pg_basebackup（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pg_basebackup（技术术语）（pg_basebackup）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pg_basebackup（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「pg_basebackup（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pg_basebackup（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "te4PZaqt6-5Qu8rU0w6a1": {
      "scene": "学习「备份校验Procedures」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "备份校验Procedures（Backup Validation Procedures）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「备份校验Procedures」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「备份校验Procedures」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「备份校验Procedures」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "aKQI7aX4bT_39bZgjmfoW": {
      "scene": "学习「PgBouncer（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "PgBouncer（技术术语）（PgBouncer）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「PgBouncer（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「PgBouncer（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PgBouncer（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "3V1PPIeB0i9qNUsT8-4O-": {
      "scene": "学习「PgBouncer Alternatives（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "PgBouncer Alternatives（技术术语）（PgBouncer Alternatives）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「PgBouncer Alternatives（技术术语）」出现在哪：上…",
          "text": "「PgBouncer Alternatives（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PgBouncer Alternatives（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "rmsIw9CQa1qcQ_REw76NK": {
      "scene": "学习「Logical复制」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Logical复制（Logical Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Logical复制」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Logical复制」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Logical复制」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "MwLlVbqceQ-GTgPJlgoQY": {
      "scene": "学习「Streaming复制」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Streaming复制（Streaming Replication）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Streaming复制」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Streaming复制」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Streaming复制」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "mm0K_8TFicrYdZQvWFkH4": {
      "scene": "学习「Patroni（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Patroni（技术术语）（Patroni）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Patroni（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Patroni（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Patroni（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "TZvZ_jNjWnM535ZktyhQN": {
      "scene": "学习「Patroni Alternatives（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Patroni Alternatives（技术术语）（Patroni Alternatives）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Patroni Alternatives（技术术语）」出现在哪：上游输…",
          "text": "「Patroni Alternatives（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Patroni Alternatives（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "SNnc8CIKuHUAEZaJ_qEar": {
      "scene": "学习「资源Usage/Provisioning/CapacityPlanning」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "资源Usage/Provisioning/CapacityPlanning（Resource Usage / Provisioning / Capacity Planning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「资源Usage/Provisioning/CapacityPlanni…",
          "text": "「资源Usage/Provisioning/CapacityPlanning」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「资源Usage/Provisioning/CapacityPlanning」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "e5s7-JRqNy-OhfnjTScZI": {
      "scene": "学习「学习toAutomate」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "学习toAutomate（Learn to Automate）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「学习toAutomate」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「学习toAutomate」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「学习toAutomate」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "-clI2RmfhK8F8beHULaIB": {
      "scene": "学习「Shell Scripts（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Shell Scripts（技术术语）（Shell Scripts）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Shell Scripts（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Shell Scripts（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Shell Scripts（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "j5YeixkCKRv0sfq_gFVr9": {
      "scene": "学习「AnyProgramming语言」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "AnyProgramming语言（Any Programming Language）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「AnyProgramming语言」出现在哪：上游输入是什么，下游输出是…",
          "text": "「AnyProgramming语言」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「AnyProgramming语言」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "RqSfBR_RuvHrwHfPn1jwZ": {
      "scene": "学习「Ansible（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Ansible（技术术语）（Ansible）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Ansible（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Ansible（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Ansible（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Q_B9dlXNMXZIRYQC74uIf": {
      "scene": "学习「Salt（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Salt（技术术语）（Salt）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Salt（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Salt（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Salt（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "7EHZ9YsNjCyTAN-LDWYMS": {
      "scene": "学习「Chef（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Chef（技术术语）（Chef）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Chef（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Chef（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Chef（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "e39bceamU-lq3F2pmLz6v": {
      "scene": "学习「Puppet（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Puppet（技术术语）（Puppet）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Puppet（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Puppet（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Puppet（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "AtZcMhy2Idmgonp5O8RSQ": {
      "scene": "学习「Practical模式/Antipatterns」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Practical模式/Antipatterns（Practical Patterns / Antipatterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Practical模式/Antipatterns」出现在哪：上游输入是…",
          "text": "「Practical模式/Antipatterns」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Practical模式/Antipatterns」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "3Lcy7kBKeV6hx9Ctp_20M": {
      "scene": "学习「Migration相关Tools」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Migration相关Tools（Migration Related Tools）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Migration相关Tools」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Migration相关Tools」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Migration相关Tools」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "cc4S7ugIphyBZr-f6X0qi": {
      "scene": "学习「BulkLoading/处理数据」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "BulkLoading/处理数据（Bulk Loading / Processing Data）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「BulkLoading/处理数据」出现在哪：上游输入是什么，下游输出是…",
          "text": "「BulkLoading/处理数据」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「BulkLoading/处理数据」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "OiGRtLsc28Tv35vIut6B6": {
      "scene": "学习「数据分区」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据分区（Data Partitioning）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据分区」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据分区」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「数据分区」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "r6Blr7Q4wOnvJ-m6NvPyP": {
      "scene": "学习「分片模式」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "分片模式（Sharding Patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「分片模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「分片模式」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「分片模式」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Fcl7AD2M6WrMbxdvnl-ub": {
      "scene": "学习「规范化/NormalForms」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "规范化/NormalForms（Normalization / Normal Forms）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「规范化/NormalForms」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「规范化/NormalForms」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「规范化/NormalForms」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "rnXcM62rgq3p6FQ9AWW1R": {
      "scene": "学习「模式/Antipatterns」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "模式/Antipatterns（Patterns / Antipatterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「模式/Antipatterns」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「模式/Antipatterns」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「模式/Antipatterns」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "WCBWPubUS84r3tOXpnZT3": {
      "scene": "学习「PgQ（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "PgQ（技术术语）（PgQ）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「PgQ（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「PgQ（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PgQ（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "v2J6PZT0fHvqA7GwlqBU7": {
      "scene": "学习「Processes（技术术语）与内存架构」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Processes（技术术语）与内存架构（Processes & Memory Architecture）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Processes（技术术语）与内存架构」出现在哪：上游输入是什么，下…",
          "text": "「Processes（技术术语）与内存架构」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Processes（技术术语）与内存架构」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "dJzJP1uo4kVFThWgglPfk": {
      "scene": "学习「Vacuum处理」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Vacuum处理（Vacuum Processing）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Vacuum处理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Vacuum处理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Vacuum处理」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "KeBUzfrkorgFWpR8A-xmJ": {
      "scene": "学习「Buffer管理」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Buffer管理（Buffer Management）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Buffer管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Buffer管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Buffer管理」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "pOkafV7nDHme4jk-hA8Cn": {
      "scene": "学习「锁管理」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "锁管理（Lock Management）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「锁管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「锁管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「锁管理」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "gweDHAB58gKswdwfpnRQT": {
      "scene": "学习「Physical存储与文件Layout」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Physical存储与文件Layout（Physical Storage and File Layout）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Physical存储与文件Layout」出现在哪：上游输入是什么，下游…",
          "text": "「Physical存储与文件Layout」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Physical存储与文件Layout」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "lDuBFA7cEMnd7Cl9MDgnf": {
      "scene": "学习「系统Catalog」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "系统Catalog（System Catalog）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「系统Catalog」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「系统Catalog」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「系统Catalog」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "msm4QCAA-MRVI1psf6tt3": {
      "scene": "学习「Per-用户,Per-数据库设置」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Per-用户,Per-数据库设置（Per-User, Per-Database Setting）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Per-用户,Per-数据库设置」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Per-用户,Per-数据库设置」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Per-用户,Per-数据库设置」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "4VrT_K9cZZ0qE1EheSQy0": {
      "scene": "学习「存储参数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "存储参数（Storage Parameters）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「存储参数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「存储参数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「存储参数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "VekAMpcrugHGuvSbyPZVv": {
      "scene": "学习「OLTP（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "OLTP（技术术语）（OLTP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「OLTP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「OLTP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「OLTP（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "WI3-7hFAnJw5f7GIn-5kp": {
      "scene": "学习「OLAP（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "OLAP（技术术语）（OLAP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「OLAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「OLAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「OLAP（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "rHDlm78yroRrrAAcabEAl": {
      "scene": "学习「HTAP（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "HTAP（技术术语）（HTAP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「HTAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「HTAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「HTAP（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Ur23UVs_nXaltytF1WJD8": {
      "scene": "学习「PL/pgSQL（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "PL/pgSQL（技术术语）（PL/pgSQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「PL/pgSQL（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「PL/pgSQL（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PL/pgSQL（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "LiF2Yh818D-zEF58v5Fgr": {
      "scene": "学习「Procedures（技术术语）与Functions（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Procedures（技术术语）与Functions（技术术语）（Procedures and Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Procedures（技术术语）与Functions（技术术语）」出现…",
          "text": "「Procedures（技术术语）与Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Procedures（技术术语）与Functions（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "ps2KK88QA1n5udn2ochIn": {
      "scene": "学习「Triggers（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Triggers（技术术语）（Triggers）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Triggers（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「Triggers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Triggers（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "A1LGOqqaka0ILcYwybclP": {
      "scene": "学习「Recursive CTE（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Recursive CTE（技术术语）（Recursive CTE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Recursive CTE（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Recursive CTE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Recursive CTE（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "iQqEC1CnVAoM7x455jO_S": {
      "scene": "学习「聚合与Windowfunctions（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "聚合与Windowfunctions（技术术语）（Aggregate and Window functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「聚合与Windowfunctions（技术术语）」出现在哪：上游输入是…",
          "text": "「聚合与Windowfunctions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「聚合与Windowfunctions（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "pvj33qDiG3sSjtiW6sUra": {
      "scene": "学习「top（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "top（技术术语）（top）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「top（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「top（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「top（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "0hRQtRsteGDnKO5XgLF1R": {
      "scene": "学习「sysstat（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "sysstat（技术术语）（sysstat）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「sysstat（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「sysstat（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「sysstat（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "n8oHT7YwhHhFdU5_7DZ_F": {
      "scene": "学习「iotop（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "iotop（技术术语）（iotop）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「iotop（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「iotop（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「iotop（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "yIdUhfE2ZTQhDAdQsXrnH": {
      "scene": "学习「gdb（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "gdb（技术术语）（gdb）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「gdb（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「gdb（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「gdb（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "C_cUfEufYeUlAdVfdUvsK": {
      "scene": "学习「strace（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "strace（技术术语）（strace）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「strace（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「strace（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「strace（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "QarPFu_wU6-F9P5YHo6CO": {
      "scene": "学习「ebpf（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "ebpf（技术术语）（ebpf）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「ebpf（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「ebpf（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ebpf（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "wH447bS-csqmGbk-jaGqp": {
      "scene": "学习「perf-tools（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "perf-tools（技术术语）（perf-tools）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「perf-tools（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「perf-tools（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「perf-tools（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "-CIezYPHTcXJF_p4T55-c": {
      "scene": "学习「Core Dumps（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Core Dumps（技术术语）（Core Dumps）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Core Dumps（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Core Dumps（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Core Dumps（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "V2iW8tJQXwsRknnZXoHGd": {
      "scene": "学习「pgBadger（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pgBadger（技术术语）（pgBadger）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pgBadger（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「pgBadger（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pgBadger（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "ISuU1lWH_zVDlCHnWXbf9": {
      "scene": "学习「pgCluu（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pgCluu（技术术语）（pgCluu）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pgCluu（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「pgCluu（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pgCluu（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "HJCRntic0aGVvdmCN45aP": {
      "scene": "学习「awk（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "awk（技术术语）（awk）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「awk（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「awk（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「awk（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "cFtrSgboZRJ3Q63eaqEBf": {
      "scene": "学习「grep（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "grep（技术术语）（grep）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「grep（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「grep（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「grep（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "hVL6OtsXrE8BvjKpRjB-9": {
      "scene": "学习「sed（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "sed（技术术语）（sed）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「sed（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「sed（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「sed（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "_NL5pGGTLNxCFx4axOqfu": {
      "scene": "学习「pg_stat_activity（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pg_stat_activity（技术术语）（pg_stat_activity）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pg_stat_activity（技术术语）」出现在哪：上游输入是什么…",
          "text": "「pg_stat_activity（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pg_stat_activity（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "wLMGOUaULW7ZALRr-shTz": {
      "scene": "学习「pg_stat_statements（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pg_stat_statements（技术术语）（pg_stat_statements）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pg_stat_statements（技术术语）」出现在哪：上游输入是…",
          "text": "「pg_stat_statements（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pg_stat_statements（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "TytU0IpWgwhr4w4W4H3Vx": {
      "scene": "学习「pgcenter（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "pgcenter（技术术语）（pgcenter）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「pgcenter（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「pgcenter（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「pgcenter（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "n2OjwxzIHnATraRWi5Ddl": {
      "scene": "学习「EXPLAIN（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "EXPLAIN（技术术语）（EXPLAIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「EXPLAIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「EXPLAIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「EXPLAIN（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "rVlncpLO20WK6mjyqLerL": {
      "scene": "学习「Depesz（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Depesz（技术术语）（Depesz）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Depesz（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Depesz（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Depesz（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "9RyMU36KEP__-RzTTz_eo": {
      "scene": "学习「PEV2（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "PEV2（技术术语）（PEV2）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「PEV2（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「PEV2（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「PEV2（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "xEu5n6U9-WKVxjlT5YUgx": {
      "scene": "学习「Tensor（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Tensor（技术术语）（Tensor）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Tensor（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Tensor（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Tensor（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "UZ1vRFRjiQAVu6BygqwEL": {
      "scene": "学习「explain.dalibo.com（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "explain.dalibo.com（技术术语）（explain.dalibo.com）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「explain.dalibo.com（技术术语）」出现在哪：上游输入是…",
          "text": "「explain.dalibo.com（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「explain.dalibo.com（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "QWi84EjdHw5ChYsuwUhPC": {
      "scene": "学习「USE（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "USE（技术术语）（USE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「USE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「USE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「USE（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "qBkpTmfbyCv2L-OJW9pPI": {
      "scene": "学习「RED（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "RED（技术术语）（RED）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「RED（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「RED（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「RED（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "oX-bdPPjaHJnQKgUhDSF2": {
      "scene": "学习「Golden Signals（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Golden Signals（技术术语）（Golden Signals）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Golden Signals（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Golden Signals（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Golden Signals（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "FDuiJyU1yWUQ9IsfS3CeZ": {
      "scene": "学习「模式设计模式/Anti-模式」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "模式设计模式/Anti-模式（Schema Design Patterns / Anti-patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「模式设计模式/Anti-模式」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「模式设计模式/Anti-模式」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「模式设计模式/Anti-模式」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "G9DB1ZQjgXaHxJ4Lm6xGx": {
      "scene": "学习「SQL查询模式/Anti-模式」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SQL查询模式/Anti-模式（SQL Query Patterns / Anti-patterns）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SQL查询模式/Anti-模式」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「SQL查询模式/Anti-模式」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SQL查询模式/Anti-模式」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Dhhyg23dBMyAKCFwZmu71": {
      "scene": "学习「索引与theirUsecases（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "索引与theirUsecases（技术术语）（Indexes and their Usecases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「索引与theirUsecases（技术术语）」出现在哪：上游输入是什么…",
          "text": "「索引与theirUsecases（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「索引与theirUsecases（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "jihXOJq9zYlDOpvJvpFO-": {
      "scene": "学习「B-Tree（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "B-Tree（技术术语）（B-Tree）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「B-Tree（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「B-Tree（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「B-Tree（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "2yWYyXt1uLOdQg4YsgdVq": {
      "scene": "学习「Hash（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Hash（技术术语）（Hash）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Hash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Hash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Hash（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "2chGkn5Y_WTjYllpgL0LJ": {
      "scene": "学习「GiST（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "GiST（技术术语）（GiST）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「GiST（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GiST（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GiST（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "LT5qRETR3pAI8Tk6k5idg": {
      "scene": "学习「SP-GiST（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SP-GiST（技术术语）（SP-GiST）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SP-GiST（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SP-GiST（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SP-GiST（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "FJhJyDWOj9w_Rd_uKcouT": {
      "scene": "学习「GIN（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "GIN（技术术语）（GIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「GIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GIN（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "43oFhZuXjJd4QHbUoLtft": {
      "scene": "学习「BRIN（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "BRIN（技术术语）（BRIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「BRIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「BRIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「BRIN（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "NhodBD8myUTljNdn3y40I": {
      "scene": "学习「Get Involved in Development（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Get Involved in Development（技术术语）（Get Involved in Development）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Get Involved in Development（技术术语）」出…",
          "text": "「Get Involved in Development（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Get Involved in Development（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "8H7hJhGKxr1nrjkHv9Xao": {
      "scene": "学习「Mailing Lists（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Mailing Lists（技术术语）（Mailing Lists）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Mailing Lists（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Mailing Lists（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Mailing Lists（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Jy0G0ZnHPOM8hba_PbwuA": {
      "scene": "学习「Reviewing Patches（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Reviewing Patches（技术术语）（Reviewing Patches）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Reviewing Patches（技术术语）」出现在哪：上游输入是什…",
          "text": "「Reviewing Patches（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Reviewing Patches（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "eQzMU_KyQmHJQ6gzyk0-1": {
      "scene": "学习「Writing Patches（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Writing Patches（技术术语）（Writing Patches）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Writing Patches（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Writing Patches（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Writing Patches（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
