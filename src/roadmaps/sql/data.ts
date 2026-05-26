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
          "id": "R9DQNc0AyAQ2HLpP4HOk6",
          "label": "What are Relational Databases?",
          "zh": "什么是关系型数据库",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 131,
          "y": -42,
          "w": 311,
          "h": 49
        },
        {
          "id": "fNTb9y3zs1HPYclAmu_Wv",
          "label": "RDBMS Benefits and Limitations",
          "zh": "RDBMS 优缺点",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 131,
          "y": 11,
          "w": 311,
          "h": 49
        },
        {
          "id": "nhUKKWyBH80nyKfGT8ErC",
          "label": "Learn the Basics",
          "zh": "基础知识",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -227,
          "y": 13,
          "w": 247,
          "h": 49
        },
        {
          "id": "6yoo7qC6X2jYDIjd3HIm7",
          "label": "SQL Keywords",
          "zh": "SQL关键字",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -612,
          "y": 50,
          "w": 233,
          "h": 49
        },
        {
          "id": "gx4KaFqKgJX9n9_ZGMqlZ",
          "label": "SQL vs NoSQL Databases",
          "zh": "SQL 与 NoSQL 数据库对比",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 131,
          "y": 64,
          "w": 311,
          "h": 49
        },
        {
          "id": "tBzMDfCMh6MIagNaxCzin",
          "label": "Data Types",
          "zh": "数据类型",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -612,
          "y": 103,
          "w": 233,
          "h": 53
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
      "zh": "阶段 02：SQL 基础语法",
      "en": "Basic SQL Syntax",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "JDDG4KfhtIlw1rkNCzUli",
          "label": "Basic SQL Syntax",
          "zh": "SQL 基础语法",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -227,
          "y": 159,
          "w": 247,
          "h": 50
        },
        {
          "id": "ffwniprGJHZzJ7t3lQcXz",
          "label": "Operators",
          "zh": "操作符",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -612,
          "y": 160,
          "w": 233,
          "h": 49
        },
        {
          "id": "xPOeXK1EPBNG56vgfG-VV",
          "label": "Data Definition Language (DDL)",
          "zh": "DDL 数据定义语言",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 119,
          "y": 160,
          "w": 323,
          "h": 49
        },
        {
          "id": "rmqXH29n1oXtZ8tvmcRFn",
          "label": "SELECT",
          "zh": "SELECT 查询语句",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -602,
          "y": 224,
          "w": 101,
          "h": 49
        },
        {
          "id": "mPj6BiK5FKKkIQ9WsWEo6",
          "label": "INSERT",
          "zh": "INSERT 插入语句",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 224,
          "w": 111,
          "h": 49
        },
        {
          "id": "K5vhqTJrdPK08Txv8zaEj",
          "label": "Truncate Table",
          "zh": "TRUNCATE TABLE 清空表",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 239,
          "w": 167,
          "h": 53
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
      "zh": "阶段 03：DML 数据操纵语言",
      "en": "Data Manipulation Language (DML)",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "ddtVaA4Ls6qRj-7OtTSIH",
          "label": "DELETE",
          "zh": "DELETE 删除语句",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -602,
          "y": 277,
          "w": 101,
          "h": 49
        },
        {
          "id": "eu9dJFi6gBPMBdy08Y5Bb",
          "label": "UPDATE",
          "zh": "UPDATE 更新语句",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -498,
          "y": 277,
          "w": 108,
          "h": 49
        },
        {
          "id": "WMSXi-eez_hHGDM8kUdWz",
          "label": "Data Manipulation Language (DML)",
          "zh": "DML 数据操纵语言",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -148,
          "y": 281,
          "w": 356,
          "h": 49
        },
        {
          "id": "WjXlO42WL9saDS7RIGapt",
          "label": "Alter Table",
          "zh": "ALTER TABLE 改表",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 296,
          "w": 167,
          "h": 49
        },
        {
          "id": "epEpBxRosLhuAuKwp823r",
          "label": "Create Table",
          "zh": "CREATE TABLE 建表",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 349,
          "w": 167,
          "h": 49
        },
        {
          "id": "i8u8E_sne6XiKJo2FXDog",
          "label": "Select",
          "zh": "SELECT 查询语句",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -149,
          "y": 377,
          "w": 362,
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
      "zh": "阶段 04：DROP TABLE 删表",
      "en": "Drop Table",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "YzJ6QmY2arMfRzMAPaI0T",
          "label": "Drop Table",
          "zh": "DROP TABLE 删表",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 402,
          "w": 167,
          "h": 49
        },
        {
          "id": "w4T3jFb0ilf1KNw-AvRXG",
          "label": "SUM",
          "zh": "SUM 求和",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -609,
          "y": 407,
          "w": 76,
          "h": 49
        },
        {
          "id": "9aHYrOQDkA84tlxcVK5aD",
          "label": "COUNT",
          "zh": "COUNT 计数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -532,
          "y": 407,
          "w": 81,
          "h": 49
        },
        {
          "id": "N1Racr3ZpU320gS545We8",
          "label": "FROM",
          "zh": "FROM 指定表",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -149,
          "y": 431,
          "w": 134,
          "h": 49
        },
        {
          "id": "WhYAy6f7Euk3E49-ot644",
          "label": "WHERE",
          "zh": "WHERE 条件过滤",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -12,
          "y": 431,
          "w": 115,
          "h": 49
        },
        {
          "id": "4UQQYbjzwVxZOAxBuXKQS",
          "label": "JOINs",
          "zh": "JOIN 表连接",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 107,
          "y": 431,
          "w": 106,
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
      "zh": "阶段 05：AVG 平均值",
      "en": "AVG",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "Wou6YXLYUgomvcELh851L",
          "label": "AVG",
          "zh": "AVG 平均值",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -609,
          "y": 460,
          "w": 76,
          "h": 49
        },
        {
          "id": "bFEYMlqPZtTUYtDQxqHzT",
          "label": "MIN",
          "zh": "MIN 最小值",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -532,
          "y": 460,
          "w": 81,
          "h": 49
        },
        {
          "id": "Jlwmyq6CUQeDAlL4dazOP",
          "label": "Primary Key",
          "zh": "主键",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 470,
          "w": 167,
          "h": 49
        },
        {
          "id": "14TKE6KhrH1yFtHcSZSXq",
          "label": "GROUP BY",
          "zh": "GROUP BY 分组BY",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -149,
          "y": 484,
          "w": 135,
          "h": 49
        },
        {
          "id": "NfCiSPrL4upMssukcw3Kh",
          "label": "ORDER BY",
          "zh": "ORDER BY 排序BY",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -12,
          "y": 484,
          "w": 133,
          "h": 49
        },
        {
          "id": "ytwCkSMTiTuemE0KVfAfy",
          "label": "HAVING",
          "zh": "HAVING 分组过滤",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 125,
          "y": 484,
          "w": 88,
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
      "zh": "阶段 06：聚合Queries",
      "en": "Aggregate Queries",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "LX9nzJ4uqznHN4SksoDvr",
          "label": "Aggregate Queries",
          "zh": "聚合Queries",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -370,
          "y": 511,
          "w": 198,
          "h": 49
        },
        {
          "id": "YqDJq3fPxUZlwsdq0kJg7",
          "label": "MAX",
          "zh": "MAX 最大值",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -609,
          "y": 512,
          "w": 158,
          "h": 49
        },
        {
          "id": "DHz6sRLYhFeCbAcNJS8hm",
          "label": "Foreign Key",
          "zh": "外键",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 523,
          "w": 167,
          "h": 49
        },
        {
          "id": "-Hew0y53ziZK3epQnGA0O",
          "label": "INSERT",
          "zh": "INSERT 插入语句",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -149,
          "y": 537,
          "w": 101,
          "h": 49
        },
        {
          "id": "KJJ6PYjTnr_3yU2mNPL9v",
          "label": "UPDATE",
          "zh": "UPDATE 更新语句",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -44,
          "y": 537,
          "w": 154,
          "h": 49
        },
        {
          "id": "zWnvuHJLHr03PWkrW1wZZ",
          "label": "DELETE",
          "zh": "DELETE 删除语句",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 112,
          "y": 537,
          "w": 101,
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
      "zh": "阶段 07：数据约束",
      "en": "Data Constraints",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "Zw8IHfCCMSxmVjx5Ho5ff",
          "label": "GROUP BY",
          "zh": "GROUP BY 分组BY",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -609,
          "y": 565,
          "w": 158,
          "h": 49
        },
        {
          "id": "5yGo8i7eplxtXOD_qfzOs",
          "label": "Unique",
          "zh": "唯一",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 576,
          "w": 167,
          "h": 49
        },
        {
          "id": "HhICJpCK5__b-itUoEBES",
          "label": "HAVING",
          "zh": "HAVING 分组过滤",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -609,
          "y": 617,
          "w": 158,
          "h": 49
        },
        {
          "id": "M4M_-vjM9GNy0NmXZneDA",
          "label": "NOT NULL",
          "zh": "NOT NULL（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 629,
          "w": 167,
          "h": 49
        },
        {
          "id": "qBios3sZVhcJMpXmj9f7B",
          "label": "Data Constraints",
          "zh": "数据约束",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -2,
          "y": 646,
          "w": 177,
          "h": 49
        },
        {
          "id": "Q0h9Wfnl_W9ThOkv7Q17A",
          "label": "CHECK",
          "zh": "CHECK（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 275,
          "y": 682,
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
      "zh": "阶段 08：Subqueries（技术术语）",
      "en": "Subqueries",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "eXQ-TrTlqL5p2AdGnozkL",
          "label": "Scalar",
          "zh": "Scalar（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -605,
          "y": 708,
          "w": 81,
          "h": 49
        },
        {
          "id": "wmtt-3auWLdQWuVdwZLPd",
          "label": "Column",
          "zh": "Column（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -521,
          "y": 708,
          "w": 81,
          "h": 49
        },
        {
          "id": "aLDl75i8gtLRA2Ud-fMmQ",
          "label": "Row",
          "zh": "Row（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -437,
          "y": 708,
          "w": 61,
          "h": 49
        },
        {
          "id": "R9WDMRd-3wxsKH97-sT3n",
          "label": "Table",
          "zh": "TABLE 表",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -373,
          "y": 708,
          "w": 66,
          "h": 49
        },
        {
          "id": "xkPJ2MYiXmzC4yqQWyB_7",
          "label": "Nested Subqueries",
          "zh": "Nested Subqueries（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -614,
          "y": 791,
          "w": 220,
          "h": 49
        },
        {
          "id": "86iZ8s8EdhSuYwgwAM_EO",
          "label": "Subqueries",
          "zh": "Subqueries（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -306,
          "y": 791,
          "w": 203,
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
      "zh": "阶段 09：JOIN 表连接Queries",
      "en": "JOIN Queries",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "8V6yw7kLaow-VVcv_K_pL",
          "label": "JOIN Queries",
          "zh": "JOIN 表连接Queries",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -2,
          "y": 791,
          "w": 177,
          "h": 49
        },
        {
          "id": "aaua13CkTxLOYXr8cAgPm",
          "label": "INNER JOIN",
          "zh": "INNER JOIN 内连接",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 247,
          "y": 792,
          "w": 197,
          "h": 49
        },
        {
          "id": "JZqS3Xapw6mfSPVgFW7av",
          "label": "Correlated Subqueries",
          "zh": "Correlated Subqueries（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -614,
          "y": 844,
          "w": 220,
          "h": 49
        },
        {
          "id": "X9cJJ8zLZCF2cOoqxwFfY",
          "label": "LEFT JOIN",
          "zh": "LEFT JOIN 左连接",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 247,
          "y": 845,
          "w": 197,
          "h": 49
        },
        {
          "id": "shpgZkh1CLqUwjOaRtAFy",
          "label": "RIGHT JOIN",
          "zh": "RIGHT JOIN 右连接",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 247,
          "y": 898,
          "w": 197,
          "h": 49
        },
        {
          "id": "o2SH4iQn1Ap2yDZ7cVYLO",
          "label": "FLOOR",
          "zh": "FLOOR 向下取整函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -32,
          "y": 912,
          "w": 81,
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
      "zh": "阶段 10：进阶函数",
      "en": "Advanced Functions",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "6vYFb_D1N_-tLWZftL-Az",
          "label": "ABS",
          "zh": "ABS 绝对值函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 51,
          "y": 912,
          "w": 66,
          "h": 49
        },
        {
          "id": "OUw--8zEq6lk5-6oySVHe",
          "label": "MOD",
          "zh": "MOD 取模函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 119,
          "y": 912,
          "w": 66,
          "h": 49
        },
        {
          "id": "5inpEqafeVCfqsURHzQQg",
          "label": "CONCAT",
          "zh": "CONCAT 拼接函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -602,
          "y": 923,
          "w": 121,
          "h": 49
        },
        {
          "id": "RH8DLiQpDUWqw3U1522q5",
          "label": "LENGTH",
          "zh": "LENGTH 长度函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -479,
          "y": 923,
          "w": 101,
          "h": 49
        },
        {
          "id": "aS5zCyJRA779yHF0G2pje",
          "label": "FULL OUTER JOIN",
          "zh": "全OUTERJOIN 表连接",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 247,
          "y": 951,
          "w": 197,
          "h": 49
        },
        {
          "id": "vTMd0bqz4eTgLnhfgY61h",
          "label": "Advanced Functions",
          "zh": "进阶函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -306,
          "y": 953,
          "w": 203,
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
      "zh": "阶段 11：ROUND 四舍五入函数",
      "en": "ROUND",
      "desc": "按 roadmap.sh 原始顺序整理的第 11 组学习节点。",
      "nodes": [
        {
          "id": "9DntFiZV1AyaRPhYP5q6u",
          "label": "ROUND",
          "zh": "ROUND 四舍五入函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -32,
          "y": 964,
          "w": 115,
          "h": 49
        },
        {
          "id": "BAqJQvcguhIhzyII5LRH6",
          "label": "CEILING",
          "zh": "CEILING（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 85,
          "y": 964,
          "w": 101,
          "h": 49
        },
        {
          "id": "PnG_5D6q66NAKxXVOwA6N",
          "label": "SUBSTRING",
          "zh": "SUBSTRING 截取函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -603,
          "y": 975,
          "w": 121,
          "h": 49
        },
        {
          "id": "VNbb3YPc0FtrROylRns8h",
          "label": "REPLACE",
          "zh": "REPLACE（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -479,
          "y": 975,
          "w": 101,
          "h": 49
        },
        {
          "id": "6qG0AVYd6Y1B8LOSDoMX9",
          "label": "Self Join",
          "zh": "SelfJOIN 表连接",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 247,
          "y": 1004,
          "w": 197,
          "h": 49
        },
        {
          "id": "Othfo7NvTVzfyL906PLM1",
          "label": "UPPER",
          "zh": "UPPER 转大写函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -603,
          "y": 1027,
          "w": 121,
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
      "zh": "阶段 12：Views（技术术语）",
      "en": "Views",
      "desc": "按 roadmap.sh 原始顺序整理的第 12 组学习节点。",
      "nodes": [
        {
          "id": "knTG6pAq2mYP24WMa29xI",
          "label": "LOWER",
          "zh": "LOWER 转小写函数",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -479,
          "y": 1027,
          "w": 101,
          "h": 49
        },
        {
          "id": "7ow6tiSSCnTpv_GYQU017",
          "label": "Cross Join",
          "zh": "CrossJOIN 表连接",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 247,
          "y": 1057,
          "w": 197,
          "h": 49
        },
        {
          "id": "W2ePJHdfEiEJ3ZKoRQKt_",
          "label": "CASE",
          "zh": "CASE（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -33,
          "y": 1064,
          "w": 101,
          "h": 49
        },
        {
          "id": "KI6vngoYcHsnpIk8ErhhS",
          "label": "NULLIF",
          "zh": "NULLIF（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 71,
          "y": 1064,
          "w": 113,
          "h": 49
        },
        {
          "id": "2tyezwOIxV6O84N-Q3Awh",
          "label": "Views",
          "zh": "Views（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -314,
          "y": 1098,
          "w": 219,
          "h": 49
        },
        {
          "id": "k7lZe4QRt9q4InUImFmvx",
          "label": "COALESCE",
          "zh": "COALESCE（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -33,
          "y": 1116,
          "w": 219,
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
      "zh": "阶段 13：管理索引",
      "en": "Managing Indexes",
      "desc": "按 roadmap.sh 原始顺序整理的第 13 组学习节点。",
      "nodes": [
        {
          "id": "NtxGd6Vx-REBclry7lZuE",
          "label": "Managing Indexes",
          "zh": "管理索引",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 247,
          "y": 1122,
          "w": 197,
          "h": 49
        },
        {
          "id": "Ivqo2wa-_NhGU3vGd0pUI",
          "label": "DATE",
          "zh": "DATE（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -604,
          "y": 1138,
          "w": 116,
          "h": 49
        },
        {
          "id": "88KlrMqSza9_YaD7Dv61p",
          "label": "TIME",
          "zh": "TIME（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -485,
          "y": 1138,
          "w": 104,
          "h": 49
        },
        {
          "id": "PcsGK4VBh0zNQIPZvNES4",
          "label": "Creating Views",
          "zh": "创建Views",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -306,
          "y": 1155,
          "w": 203,
          "h": 49
        },
        {
          "id": "Ps9Yv2s-bKvEegGAbPsiA",
          "label": "Query Optimization",
          "zh": "查询优化",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 247,
          "y": 1175,
          "w": 197,
          "h": 49
        },
        {
          "id": "7hEqkoxkdAWmakGZsMJx-",
          "label": "TIMESTAMP",
          "zh": "TIMESTAMP（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -604,
          "y": 1191,
          "w": 223,
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
      "zh": "阶段 14：索引",
      "en": "Indexes",
      "desc": "按 roadmap.sh 原始顺序整理的第 14 组学习节点。",
      "nodes": [
        {
          "id": "3eE-l-P93nOXoWfLr8PSW",
          "label": "Modifying Views",
          "zh": "Modifying Views（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -306,
          "y": 1208,
          "w": 203,
          "h": 49
        },
        {
          "id": "BJ4fQvagTO0B5UtXblyx8",
          "label": "DATEPART",
          "zh": "DATEPART（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -604,
          "y": 1244,
          "w": 116,
          "h": 49
        },
        {
          "id": "1E1WdWOyqxbbdiIbw26dZ",
          "label": "DATEADD",
          "zh": "DATEADD（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -485,
          "y": 1244,
          "w": 104,
          "h": 49
        },
        {
          "id": "MIOuWWcCjLAmgzog2DBC3",
          "label": "Dropping Views",
          "zh": "Dropping Views（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -306,
          "y": 1261,
          "w": 203,
          "h": 49
        },
        {
          "id": "LcljR70T-OnzSrJJDqOWf",
          "label": "Indexes",
          "zh": "索引",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 205,
          "y": 1266,
          "w": 238,
          "h": 49
        },
        {
          "id": "mBQ3Z8GlFcpIena3IB7D_",
          "label": "Data Integrity Constraints",
          "zh": "数据完整性约束",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -264,
          "y": 1344,
          "w": 252,
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
      "zh": "阶段 15：StoredProcedures（技术术语）与Functions（技术术语）",
      "en": "Stored Procedures & Functions",
      "desc": "按 roadmap.sh 原始顺序整理的第 15 组学习节点。",
      "nodes": [
        {
          "id": "ujeq8EIFcrqkBjoFizsJM",
          "label": "Transaction Isolation Levels",
          "zh": "事务隔离Levels",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 29,
          "y": 1344,
          "w": 260,
          "h": 49
        },
        {
          "id": "w7FNjdwqjY7X69aJqqBy4",
          "label": "Stored Procedures & Functions",
          "zh": "StoredProcedures（技术术语）与Functions（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -607,
          "y": 1428,
          "w": 287,
          "h": 49
        },
        {
          "id": "R1ktDJpXOz0PTllAcBrdu",
          "label": "Data Integrity & Security",
          "zh": "数据完整性与安全",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -193,
          "y": 1428,
          "w": 238,
          "h": 49
        },
        {
          "id": "OdaBXz2XBAVLsQ-m7xtAM",
          "label": "Transactions",
          "zh": "Transactions（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 205,
          "y": 1428,
          "w": 238,
          "h": 49
        },
        {
          "id": "igg34gLPl3HYVAmRNFGcV",
          "label": "ACID",
          "zh": "ACID（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 212,
          "y": 1512,
          "w": 86,
          "h": 49
        },
        {
          "id": "7sTW1vwUhCFOMXYjScVEt",
          "label": "BEGIN",
          "zh": "BEGIN（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 322,
          "y": 1512,
          "w": 121,
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
      "zh": "阶段 16：GRANT（技术术语）与Revoke（技术术语）",
      "en": "GRANT and Revoke",
      "desc": "按 roadmap.sh 原始顺序整理的第 16 组学习节点。",
      "nodes": [
        {
          "id": "03qMopxzjx_-dZbYw9b7J",
          "label": "GRANT and Revoke",
          "zh": "GRANT（技术术语）与Revoke（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -264,
          "y": 1515,
          "w": 252,
          "h": 49
        },
        {
          "id": "cucCPw3KfetAP2OMFUs0X",
          "label": "rank",
          "zh": "rank（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 42,
          "y": 1552,
          "w": 135,
          "h": 49
        },
        {
          "id": "3cMECz5QPVDOFrk5duObs",
          "label": "COMMIT",
          "zh": "COMMIT 提交",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 322,
          "y": 1565,
          "w": 121,
          "h": 49
        },
        {
          "id": "vhBZqqmUcEon6-Vwvla4q",
          "label": "DB Security Best Practices",
          "zh": "DB安全最佳实践",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -264,
          "y": 1568,
          "w": 252,
          "h": 49
        },
        {
          "id": "QM0ltgPu8lLLYc2MsTLj-",
          "label": "dense_rank",
          "zh": "dense_rank（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 42,
          "y": 1604,
          "w": 135,
          "h": 49
        },
        {
          "id": "xbD67KVlt3UhHpKh8HLx8",
          "label": "ROLLBACK",
          "zh": "ROLLBACK 回滚",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 322,
          "y": 1618,
          "w": 121,
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
      "zh": "阶段 17：性能优化",
      "en": "Performance Optimization",
      "desc": "按 roadmap.sh 原始顺序整理的第 17 组学习节点。",
      "nodes": [
        {
          "id": "4rqCPpTb0dAgpheBKshRG",
          "label": "Performance Optimization",
          "zh": "性能优化",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -593,
          "y": 1645,
          "w": 258,
          "h": 49
        },
        {
          "id": "aJJjaGunRrwyh9MjQfJt-",
          "label": "lead",
          "zh": "lead（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 42,
          "y": 1656,
          "w": 66,
          "h": 49
        },
        {
          "id": "BcXdxY6bld5c0YNFSKkh-",
          "label": "lag",
          "zh": "lag（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 111,
          "y": 1656,
          "w": 66,
          "h": 49
        },
        {
          "id": "pJtYvXUo81aZfPuRjIbMq",
          "label": "SAVEPOINT",
          "zh": "SAVEPOINT（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 322,
          "y": 1671,
          "w": 121,
          "h": 49
        },
        {
          "id": "zW27ZHdLwQY-85iqbBKQZ",
          "label": "Row_number",
          "zh": "Row_number（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 42,
          "y": 1708,
          "w": 135,
          "h": 49
        },
        {
          "id": "C6P69YiFdS-ioPXMNfX07",
          "label": "Query Analysis Techniques",
          "zh": "查询AnalysisTechniques",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -600,
          "y": 1748,
          "w": 272,
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
      "zh": "阶段 18：进阶SQL",
      "en": "Advanced SQL",
      "desc": "按 roadmap.sh 原始顺序整理的第 18 组学习节点。",
      "nodes": [
        {
          "id": "tBvXLLp5FKeSSN35Kj1X4",
          "label": "Window Functions",
          "zh": "Window Functions（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 23,
          "y": 1802,
          "w": 260,
          "h": 49
        },
        {
          "id": "9wOgP0i9G4HSeZGn2Gm7r",
          "label": "Using Indexes",
          "zh": "使用索引",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -592,
          "y": 1813,
          "w": 256,
          "h": 49
        },
        {
          "id": "TjgwabhEtaSoYMLNr6q9l",
          "label": "Recursive Queries",
          "zh": "Recursive Queries（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 23,
          "y": 1855,
          "w": 260,
          "h": 49
        },
        {
          "id": "C0dhS6uLf4TUSfvcWyXhv",
          "label": "Optimizing Joins",
          "zh": "OptimizingJOIN 表连接",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -592,
          "y": 1866,
          "w": 256,
          "h": 49
        },
        {
          "id": "UDqbT1y-YzBrljfKSz_RG",
          "label": "Advanced SQL",
          "zh": "进阶SQL",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -261,
          "y": 1908,
          "w": 187,
          "h": 49
        },
        {
          "id": "nwFaz9i-1s0WVrVaFsoqb",
          "label": "Pivot / Unpivot Operations",
          "zh": "Pivot / Unpivot Operations（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 23,
          "y": 1908,
          "w": 260,
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
      "zh": "阶段 19：Reducing Subqueries（技术术语）",
      "en": "Reducing Subqueries",
      "desc": "按 roadmap.sh 原始顺序整理的第 19 组学习节点。",
      "nodes": [
        {
          "id": "UVTgbZrqpbYl1bQvQejcF",
          "label": "Reducing Subqueries",
          "zh": "Reducing Subqueries（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -592,
          "y": 1919,
          "w": 256,
          "h": 49
        },
        {
          "id": "tedQynR0xicVKhuR1oahw",
          "label": "Common Table Expressions",
          "zh": "常见TABLE 表Expressions",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 23,
          "y": 1961,
          "w": 260,
          "h": 49
        },
        {
          "id": "w53CSY53nAAN0ux-XeJ4c",
          "label": "Selective Projection",
          "zh": "Selective Projection（技术术语）",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -592,
          "y": 1972,
          "w": 256,
          "h": 49
        },
        {
          "id": "z5Sf0VU14ZCQ80kL1qOqc",
          "label": "Dynamic SQL",
          "zh": "动态SQL",
          "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 23,
          "y": 2014,
          "w": 260,
          "h": 49
        }
      ],
      "index": 19,
      "mapX": 1130,
      "mapY": 1514,
      "mapW": 430,
      "mapH": 232
    }
  ],
  "nodes": [
    {
      "id": "R9DQNc0AyAQ2HLpP4HOk6",
      "label": "What are Relational Databases?",
      "zh": "什么是关系型数据库",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 131,
      "y": -42,
      "w": 311,
      "h": 49
    },
    {
      "id": "fNTb9y3zs1HPYclAmu_Wv",
      "label": "RDBMS Benefits and Limitations",
      "zh": "RDBMS 优缺点",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 131,
      "y": 11,
      "w": 311,
      "h": 49
    },
    {
      "id": "nhUKKWyBH80nyKfGT8ErC",
      "label": "Learn the Basics",
      "zh": "基础知识",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -227,
      "y": 13,
      "w": 247,
      "h": 49
    },
    {
      "id": "gx4KaFqKgJX9n9_ZGMqlZ",
      "label": "SQL vs NoSQL Databases",
      "zh": "SQL 与 NoSQL 数据库对比",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 131,
      "y": 64,
      "w": 311,
      "h": 49
    },
    {
      "id": "JDDG4KfhtIlw1rkNCzUli",
      "label": "Basic SQL Syntax",
      "zh": "SQL 基础语法",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -227,
      "y": 159,
      "w": 247,
      "h": 50
    },
    {
      "id": "6yoo7qC6X2jYDIjd3HIm7",
      "label": "SQL Keywords",
      "zh": "SQL关键字",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -612,
      "y": 50,
      "w": 233,
      "h": 49
    },
    {
      "id": "tBzMDfCMh6MIagNaxCzin",
      "label": "Data Types",
      "zh": "数据类型",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -612,
      "y": 103,
      "w": 233,
      "h": 53
    },
    {
      "id": "ffwniprGJHZzJ7t3lQcXz",
      "label": "Operators",
      "zh": "操作符",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -612,
      "y": 160,
      "w": 233,
      "h": 49
    },
    {
      "id": "rmqXH29n1oXtZ8tvmcRFn",
      "label": "SELECT",
      "zh": "SELECT 查询语句",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -602,
      "y": 224,
      "w": 101,
      "h": 49
    },
    {
      "id": "mPj6BiK5FKKkIQ9WsWEo6",
      "label": "INSERT",
      "zh": "INSERT 插入语句",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 224,
      "w": 111,
      "h": 49
    },
    {
      "id": "eu9dJFi6gBPMBdy08Y5Bb",
      "label": "UPDATE",
      "zh": "UPDATE 更新语句",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -498,
      "y": 277,
      "w": 108,
      "h": 49
    },
    {
      "id": "ddtVaA4Ls6qRj-7OtTSIH",
      "label": "DELETE",
      "zh": "DELETE 删除语句",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -602,
      "y": 277,
      "w": 101,
      "h": 49
    },
    {
      "id": "xPOeXK1EPBNG56vgfG-VV",
      "label": "Data Definition Language (DDL)",
      "zh": "DDL 数据定义语言",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 119,
      "y": 160,
      "w": 323,
      "h": 49
    },
    {
      "id": "K5vhqTJrdPK08Txv8zaEj",
      "label": "Truncate Table",
      "zh": "TRUNCATE TABLE 清空表",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 239,
      "w": 167,
      "h": 53
    },
    {
      "id": "WjXlO42WL9saDS7RIGapt",
      "label": "Alter Table",
      "zh": "ALTER TABLE 改表",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 296,
      "w": 167,
      "h": 49
    },
    {
      "id": "epEpBxRosLhuAuKwp823r",
      "label": "Create Table",
      "zh": "CREATE TABLE 建表",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 349,
      "w": 167,
      "h": 49
    },
    {
      "id": "YzJ6QmY2arMfRzMAPaI0T",
      "label": "Drop Table",
      "zh": "DROP TABLE 删表",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 402,
      "w": 167,
      "h": 49
    },
    {
      "id": "WMSXi-eez_hHGDM8kUdWz",
      "label": "Data Manipulation Language (DML)",
      "zh": "DML 数据操纵语言",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -148,
      "y": 281,
      "w": 356,
      "h": 49
    },
    {
      "id": "i8u8E_sne6XiKJo2FXDog",
      "label": "Select",
      "zh": "SELECT 查询语句",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -149,
      "y": 377,
      "w": 362,
      "h": 49
    },
    {
      "id": "N1Racr3ZpU320gS545We8",
      "label": "FROM",
      "zh": "FROM 指定表",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -149,
      "y": 431,
      "w": 134,
      "h": 49
    },
    {
      "id": "WhYAy6f7Euk3E49-ot644",
      "label": "WHERE",
      "zh": "WHERE 条件过滤",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -12,
      "y": 431,
      "w": 115,
      "h": 49
    },
    {
      "id": "NfCiSPrL4upMssukcw3Kh",
      "label": "ORDER BY",
      "zh": "ORDER BY 排序BY",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -12,
      "y": 484,
      "w": 133,
      "h": 49
    },
    {
      "id": "14TKE6KhrH1yFtHcSZSXq",
      "label": "GROUP BY",
      "zh": "GROUP BY 分组BY",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -149,
      "y": 484,
      "w": 135,
      "h": 49
    },
    {
      "id": "ytwCkSMTiTuemE0KVfAfy",
      "label": "HAVING",
      "zh": "HAVING 分组过滤",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 125,
      "y": 484,
      "w": 88,
      "h": 49
    },
    {
      "id": "4UQQYbjzwVxZOAxBuXKQS",
      "label": "JOINs",
      "zh": "JOIN 表连接",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 107,
      "y": 431,
      "w": 106,
      "h": 49
    },
    {
      "id": "-Hew0y53ziZK3epQnGA0O",
      "label": "INSERT",
      "zh": "INSERT 插入语句",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -149,
      "y": 537,
      "w": 101,
      "h": 49
    },
    {
      "id": "KJJ6PYjTnr_3yU2mNPL9v",
      "label": "UPDATE",
      "zh": "UPDATE 更新语句",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -44,
      "y": 537,
      "w": 154,
      "h": 49
    },
    {
      "id": "zWnvuHJLHr03PWkrW1wZZ",
      "label": "DELETE",
      "zh": "DELETE 删除语句",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 112,
      "y": 537,
      "w": 101,
      "h": 49
    },
    {
      "id": "LX9nzJ4uqznHN4SksoDvr",
      "label": "Aggregate Queries",
      "zh": "聚合Queries",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -370,
      "y": 511,
      "w": 198,
      "h": 49
    },
    {
      "id": "w4T3jFb0ilf1KNw-AvRXG",
      "label": "SUM",
      "zh": "SUM 求和",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -609,
      "y": 407,
      "w": 76,
      "h": 49
    },
    {
      "id": "9aHYrOQDkA84tlxcVK5aD",
      "label": "COUNT",
      "zh": "COUNT 计数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -532,
      "y": 407,
      "w": 81,
      "h": 49
    },
    {
      "id": "Wou6YXLYUgomvcELh851L",
      "label": "AVG",
      "zh": "AVG 平均值",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -609,
      "y": 460,
      "w": 76,
      "h": 49
    },
    {
      "id": "bFEYMlqPZtTUYtDQxqHzT",
      "label": "MIN",
      "zh": "MIN 最小值",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -532,
      "y": 460,
      "w": 81,
      "h": 49
    },
    {
      "id": "YqDJq3fPxUZlwsdq0kJg7",
      "label": "MAX",
      "zh": "MAX 最大值",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -609,
      "y": 512,
      "w": 158,
      "h": 49
    },
    {
      "id": "Zw8IHfCCMSxmVjx5Ho5ff",
      "label": "GROUP BY",
      "zh": "GROUP BY 分组BY",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -609,
      "y": 565,
      "w": 158,
      "h": 49
    },
    {
      "id": "HhICJpCK5__b-itUoEBES",
      "label": "HAVING",
      "zh": "HAVING 分组过滤",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -609,
      "y": 617,
      "w": 158,
      "h": 49
    },
    {
      "id": "qBios3sZVhcJMpXmj9f7B",
      "label": "Data Constraints",
      "zh": "数据约束",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -2,
      "y": 646,
      "w": 177,
      "h": 49
    },
    {
      "id": "Jlwmyq6CUQeDAlL4dazOP",
      "label": "Primary Key",
      "zh": "主键",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 470,
      "w": 167,
      "h": 49
    },
    {
      "id": "DHz6sRLYhFeCbAcNJS8hm",
      "label": "Foreign Key",
      "zh": "外键",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 523,
      "w": 167,
      "h": 49
    },
    {
      "id": "5yGo8i7eplxtXOD_qfzOs",
      "label": "Unique",
      "zh": "唯一",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 576,
      "w": 167,
      "h": 49
    },
    {
      "id": "M4M_-vjM9GNy0NmXZneDA",
      "label": "NOT NULL",
      "zh": "NOT NULL（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 629,
      "w": 167,
      "h": 49
    },
    {
      "id": "Q0h9Wfnl_W9ThOkv7Q17A",
      "label": "CHECK",
      "zh": "CHECK（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 275,
      "y": 682,
      "w": 167,
      "h": 49
    },
    {
      "id": "8V6yw7kLaow-VVcv_K_pL",
      "label": "JOIN Queries",
      "zh": "JOIN 表连接Queries",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -2,
      "y": 791,
      "w": 177,
      "h": 49
    },
    {
      "id": "aaua13CkTxLOYXr8cAgPm",
      "label": "INNER JOIN",
      "zh": "INNER JOIN 内连接",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 247,
      "y": 792,
      "w": 197,
      "h": 49
    },
    {
      "id": "X9cJJ8zLZCF2cOoqxwFfY",
      "label": "LEFT JOIN",
      "zh": "LEFT JOIN 左连接",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 247,
      "y": 845,
      "w": 197,
      "h": 49
    },
    {
      "id": "shpgZkh1CLqUwjOaRtAFy",
      "label": "RIGHT JOIN",
      "zh": "RIGHT JOIN 右连接",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 247,
      "y": 898,
      "w": 197,
      "h": 49
    },
    {
      "id": "aS5zCyJRA779yHF0G2pje",
      "label": "FULL OUTER JOIN",
      "zh": "全OUTERJOIN 表连接",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 247,
      "y": 951,
      "w": 197,
      "h": 49
    },
    {
      "id": "6qG0AVYd6Y1B8LOSDoMX9",
      "label": "Self Join",
      "zh": "SelfJOIN 表连接",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 247,
      "y": 1004,
      "w": 197,
      "h": 49
    },
    {
      "id": "7ow6tiSSCnTpv_GYQU017",
      "label": "Cross Join",
      "zh": "CrossJOIN 表连接",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 247,
      "y": 1057,
      "w": 197,
      "h": 49
    },
    {
      "id": "86iZ8s8EdhSuYwgwAM_EO",
      "label": "Subqueries",
      "zh": "Subqueries（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -306,
      "y": 791,
      "w": 203,
      "h": 49
    },
    {
      "id": "eXQ-TrTlqL5p2AdGnozkL",
      "label": "Scalar",
      "zh": "Scalar（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -605,
      "y": 708,
      "w": 81,
      "h": 49
    },
    {
      "id": "wmtt-3auWLdQWuVdwZLPd",
      "label": "Column",
      "zh": "Column（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -521,
      "y": 708,
      "w": 81,
      "h": 49
    },
    {
      "id": "aLDl75i8gtLRA2Ud-fMmQ",
      "label": "Row",
      "zh": "Row（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -437,
      "y": 708,
      "w": 61,
      "h": 49
    },
    {
      "id": "R9WDMRd-3wxsKH97-sT3n",
      "label": "Table",
      "zh": "TABLE 表",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -373,
      "y": 708,
      "w": 66,
      "h": 49
    },
    {
      "id": "xkPJ2MYiXmzC4yqQWyB_7",
      "label": "Nested Subqueries",
      "zh": "Nested Subqueries（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -614,
      "y": 791,
      "w": 220,
      "h": 49
    },
    {
      "id": "JZqS3Xapw6mfSPVgFW7av",
      "label": "Correlated Subqueries",
      "zh": "Correlated Subqueries（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -614,
      "y": 844,
      "w": 220,
      "h": 49
    },
    {
      "id": "vTMd0bqz4eTgLnhfgY61h",
      "label": "Advanced Functions",
      "zh": "进阶函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -306,
      "y": 953,
      "w": 203,
      "h": 49
    },
    {
      "id": "o2SH4iQn1Ap2yDZ7cVYLO",
      "label": "FLOOR",
      "zh": "FLOOR 向下取整函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -32,
      "y": 912,
      "w": 81,
      "h": 49
    },
    {
      "id": "6vYFb_D1N_-tLWZftL-Az",
      "label": "ABS",
      "zh": "ABS 绝对值函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 51,
      "y": 912,
      "w": 66,
      "h": 49
    },
    {
      "id": "OUw--8zEq6lk5-6oySVHe",
      "label": "MOD",
      "zh": "MOD 取模函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 119,
      "y": 912,
      "w": 66,
      "h": 49
    },
    {
      "id": "9DntFiZV1AyaRPhYP5q6u",
      "label": "ROUND",
      "zh": "ROUND 四舍五入函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -32,
      "y": 964,
      "w": 115,
      "h": 49
    },
    {
      "id": "BAqJQvcguhIhzyII5LRH6",
      "label": "CEILING",
      "zh": "CEILING（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 85,
      "y": 964,
      "w": 101,
      "h": 49
    },
    {
      "id": "5inpEqafeVCfqsURHzQQg",
      "label": "CONCAT",
      "zh": "CONCAT 拼接函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -602,
      "y": 923,
      "w": 121,
      "h": 49
    },
    {
      "id": "RH8DLiQpDUWqw3U1522q5",
      "label": "LENGTH",
      "zh": "LENGTH 长度函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -479,
      "y": 923,
      "w": 101,
      "h": 49
    },
    {
      "id": "PnG_5D6q66NAKxXVOwA6N",
      "label": "SUBSTRING",
      "zh": "SUBSTRING 截取函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -603,
      "y": 975,
      "w": 121,
      "h": 49
    },
    {
      "id": "VNbb3YPc0FtrROylRns8h",
      "label": "REPLACE",
      "zh": "REPLACE（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -479,
      "y": 975,
      "w": 101,
      "h": 49
    },
    {
      "id": "Othfo7NvTVzfyL906PLM1",
      "label": "UPPER",
      "zh": "UPPER 转大写函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -603,
      "y": 1027,
      "w": 121,
      "h": 49
    },
    {
      "id": "knTG6pAq2mYP24WMa29xI",
      "label": "LOWER",
      "zh": "LOWER 转小写函数",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -479,
      "y": 1027,
      "w": 101,
      "h": 49
    },
    {
      "id": "W2ePJHdfEiEJ3ZKoRQKt_",
      "label": "CASE",
      "zh": "CASE（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -33,
      "y": 1064,
      "w": 101,
      "h": 49
    },
    {
      "id": "KI6vngoYcHsnpIk8ErhhS",
      "label": "NULLIF",
      "zh": "NULLIF（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 71,
      "y": 1064,
      "w": 113,
      "h": 49
    },
    {
      "id": "k7lZe4QRt9q4InUImFmvx",
      "label": "COALESCE",
      "zh": "COALESCE（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -33,
      "y": 1116,
      "w": 219,
      "h": 49
    },
    {
      "id": "Ivqo2wa-_NhGU3vGd0pUI",
      "label": "DATE",
      "zh": "DATE（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -604,
      "y": 1138,
      "w": 116,
      "h": 49
    },
    {
      "id": "88KlrMqSza9_YaD7Dv61p",
      "label": "TIME",
      "zh": "TIME（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -485,
      "y": 1138,
      "w": 104,
      "h": 49
    },
    {
      "id": "7hEqkoxkdAWmakGZsMJx-",
      "label": "TIMESTAMP",
      "zh": "TIMESTAMP（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -604,
      "y": 1191,
      "w": 223,
      "h": 49
    },
    {
      "id": "BJ4fQvagTO0B5UtXblyx8",
      "label": "DATEPART",
      "zh": "DATEPART（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -604,
      "y": 1244,
      "w": 116,
      "h": 49
    },
    {
      "id": "1E1WdWOyqxbbdiIbw26dZ",
      "label": "DATEADD",
      "zh": "DATEADD（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -485,
      "y": 1244,
      "w": 104,
      "h": 49
    },
    {
      "id": "2tyezwOIxV6O84N-Q3Awh",
      "label": "Views",
      "zh": "Views（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -314,
      "y": 1098,
      "w": 219,
      "h": 49
    },
    {
      "id": "PcsGK4VBh0zNQIPZvNES4",
      "label": "Creating Views",
      "zh": "创建Views",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -306,
      "y": 1155,
      "w": 203,
      "h": 49
    },
    {
      "id": "3eE-l-P93nOXoWfLr8PSW",
      "label": "Modifying Views",
      "zh": "Modifying Views（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -306,
      "y": 1208,
      "w": 203,
      "h": 49
    },
    {
      "id": "MIOuWWcCjLAmgzog2DBC3",
      "label": "Dropping Views",
      "zh": "Dropping Views（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -306,
      "y": 1261,
      "w": 203,
      "h": 49
    },
    {
      "id": "LcljR70T-OnzSrJJDqOWf",
      "label": "Indexes",
      "zh": "索引",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 205,
      "y": 1266,
      "w": 238,
      "h": 49
    },
    {
      "id": "NtxGd6Vx-REBclry7lZuE",
      "label": "Managing Indexes",
      "zh": "管理索引",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 247,
      "y": 1122,
      "w": 197,
      "h": 49
    },
    {
      "id": "Ps9Yv2s-bKvEegGAbPsiA",
      "label": "Query Optimization",
      "zh": "查询优化",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 247,
      "y": 1175,
      "w": 197,
      "h": 49
    },
    {
      "id": "OdaBXz2XBAVLsQ-m7xtAM",
      "label": "Transactions",
      "zh": "Transactions（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 205,
      "y": 1428,
      "w": 238,
      "h": 49
    },
    {
      "id": "7sTW1vwUhCFOMXYjScVEt",
      "label": "BEGIN",
      "zh": "BEGIN（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 322,
      "y": 1512,
      "w": 121,
      "h": 49
    },
    {
      "id": "3cMECz5QPVDOFrk5duObs",
      "label": "COMMIT",
      "zh": "COMMIT 提交",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 322,
      "y": 1565,
      "w": 121,
      "h": 49
    },
    {
      "id": "xbD67KVlt3UhHpKh8HLx8",
      "label": "ROLLBACK",
      "zh": "ROLLBACK 回滚",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 322,
      "y": 1618,
      "w": 121,
      "h": 49
    },
    {
      "id": "pJtYvXUo81aZfPuRjIbMq",
      "label": "SAVEPOINT",
      "zh": "SAVEPOINT（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 322,
      "y": 1671,
      "w": 121,
      "h": 49
    },
    {
      "id": "igg34gLPl3HYVAmRNFGcV",
      "label": "ACID",
      "zh": "ACID（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 212,
      "y": 1512,
      "w": 86,
      "h": 49
    },
    {
      "id": "ujeq8EIFcrqkBjoFizsJM",
      "label": "Transaction Isolation Levels",
      "zh": "事务隔离Levels",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 29,
      "y": 1344,
      "w": 260,
      "h": 49
    },
    {
      "id": "R1ktDJpXOz0PTllAcBrdu",
      "label": "Data Integrity & Security",
      "zh": "数据完整性与安全",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -193,
      "y": 1428,
      "w": 238,
      "h": 49
    },
    {
      "id": "mBQ3Z8GlFcpIena3IB7D_",
      "label": "Data Integrity Constraints",
      "zh": "数据完整性约束",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -264,
      "y": 1344,
      "w": 252,
      "h": 49
    },
    {
      "id": "03qMopxzjx_-dZbYw9b7J",
      "label": "GRANT and Revoke",
      "zh": "GRANT（技术术语）与Revoke（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -264,
      "y": 1515,
      "w": 252,
      "h": 49
    },
    {
      "id": "vhBZqqmUcEon6-Vwvla4q",
      "label": "DB Security Best Practices",
      "zh": "DB安全最佳实践",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -264,
      "y": 1568,
      "w": 252,
      "h": 49
    },
    {
      "id": "w7FNjdwqjY7X69aJqqBy4",
      "label": "Stored Procedures & Functions",
      "zh": "StoredProcedures（技术术语）与Functions（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -607,
      "y": 1428,
      "w": 287,
      "h": 49
    },
    {
      "id": "4rqCPpTb0dAgpheBKshRG",
      "label": "Performance Optimization",
      "zh": "性能优化",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -593,
      "y": 1645,
      "w": 258,
      "h": 49
    },
    {
      "id": "9wOgP0i9G4HSeZGn2Gm7r",
      "label": "Using Indexes",
      "zh": "使用索引",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -592,
      "y": 1813,
      "w": 256,
      "h": 49
    },
    {
      "id": "C0dhS6uLf4TUSfvcWyXhv",
      "label": "Optimizing Joins",
      "zh": "OptimizingJOIN 表连接",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -592,
      "y": 1866,
      "w": 256,
      "h": 49
    },
    {
      "id": "UVTgbZrqpbYl1bQvQejcF",
      "label": "Reducing Subqueries",
      "zh": "Reducing Subqueries（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -592,
      "y": 1919,
      "w": 256,
      "h": 49
    },
    {
      "id": "w53CSY53nAAN0ux-XeJ4c",
      "label": "Selective Projection",
      "zh": "Selective Projection（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -592,
      "y": 1972,
      "w": 256,
      "h": 49
    },
    {
      "id": "C6P69YiFdS-ioPXMNfX07",
      "label": "Query Analysis Techniques",
      "zh": "查询AnalysisTechniques",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -600,
      "y": 1748,
      "w": 272,
      "h": 49
    },
    {
      "id": "UDqbT1y-YzBrljfKSz_RG",
      "label": "Advanced SQL",
      "zh": "进阶SQL",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -261,
      "y": 1908,
      "w": 187,
      "h": 49
    },
    {
      "id": "TjgwabhEtaSoYMLNr6q9l",
      "label": "Recursive Queries",
      "zh": "Recursive Queries（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 23,
      "y": 1855,
      "w": 260,
      "h": 49
    },
    {
      "id": "nwFaz9i-1s0WVrVaFsoqb",
      "label": "Pivot / Unpivot Operations",
      "zh": "Pivot / Unpivot Operations（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 23,
      "y": 1908,
      "w": 260,
      "h": 49
    },
    {
      "id": "tBvXLLp5FKeSSN35Kj1X4",
      "label": "Window Functions",
      "zh": "Window Functions（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 23,
      "y": 1802,
      "w": 260,
      "h": 49
    },
    {
      "id": "tedQynR0xicVKhuR1oahw",
      "label": "Common Table Expressions",
      "zh": "常见TABLE 表Expressions",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 23,
      "y": 1961,
      "w": 260,
      "h": 49
    },
    {
      "id": "z5Sf0VU14ZCQ80kL1qOqc",
      "label": "Dynamic SQL",
      "zh": "动态SQL",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 23,
      "y": 2014,
      "w": 260,
      "h": 49
    },
    {
      "id": "zW27ZHdLwQY-85iqbBKQZ",
      "label": "Row_number",
      "zh": "Row_number（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 42,
      "y": 1708,
      "w": 135,
      "h": 49
    },
    {
      "id": "cucCPw3KfetAP2OMFUs0X",
      "label": "rank",
      "zh": "rank（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 42,
      "y": 1552,
      "w": 135,
      "h": 49
    },
    {
      "id": "QM0ltgPu8lLLYc2MsTLj-",
      "label": "dense_rank",
      "zh": "dense_rank（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 42,
      "y": 1604,
      "w": 135,
      "h": 49
    },
    {
      "id": "aJJjaGunRrwyh9MjQfJt-",
      "label": "lead",
      "zh": "lead（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 42,
      "y": 1656,
      "w": 66,
      "h": 49
    },
    {
      "id": "BcXdxY6bld5c0YNFSKkh-",
      "label": "lag",
      "zh": "lag（技术术语）",
      "desc": "SQL 查询 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 111,
      "y": 1656,
      "w": 66,
      "h": 49
    }
  ],
  "tutorials": {
    "R9DQNc0AyAQ2HLpP4HOk6": {
      "id": "R9DQNc0AyAQ2HLpP4HOk6",
      "zh": "什么是关系型数据库",
      "en": "What are Relational Databases?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「什么是关系型数据库」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**什么是关系型数据库**（What are Relational Databases?）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
    "fNTb9y3zs1HPYclAmu_Wv": {
      "id": "fNTb9y3zs1HPYclAmu_Wv",
      "zh": "RDBMS 优缺点",
      "en": "RDBMS Benefits and Limitations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「RDBMS 优缺点」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**RDBMS 优缺点**（RDBMS Benefits and Limitations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
    "nhUKKWyBH80nyKfGT8ErC": {
      "id": "nhUKKWyBH80nyKfGT8ErC",
      "zh": "基础知识",
      "en": "Learn the Basics",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「基础知识」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**基础知识**（Learn the Basics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「基础知识」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**基础知识**（Learn the Basics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "gx4KaFqKgJX9n9_ZGMqlZ": {
      "id": "gx4KaFqKgJX9n9_ZGMqlZ",
      "zh": "SQL 与 NoSQL 数据库对比",
      "en": "SQL vs NoSQL Databases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SQL 与 NoSQL 数据库对比」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SQL 与 NoSQL 数据库对比**（SQL vs NoSQL Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SQL 与 NoSQL 数据库对比」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SQL 与 NoSQL 数据库对比**（SQL vs NoSQL Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "JDDG4KfhtIlw1rkNCzUli": {
      "id": "JDDG4KfhtIlw1rkNCzUli",
      "zh": "SQL 基础语法",
      "en": "Basic SQL Syntax",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SQL 基础语法」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SQL 基础语法**（Basic SQL Syntax）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SQL 基础语法」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SQL 基础语法**（Basic SQL Syntax）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "6yoo7qC6X2jYDIjd3HIm7": {
      "id": "6yoo7qC6X2jYDIjd3HIm7",
      "zh": "SQL关键字",
      "en": "SQL Keywords",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SQL关键字」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SQL关键字**（SQL Keywords）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SQL关键字」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SQL关键字**（SQL Keywords）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "tBzMDfCMh6MIagNaxCzin": {
      "id": "tBzMDfCMh6MIagNaxCzin",
      "zh": "数据类型",
      "en": "Data Types",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据类型」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**数据类型**（Data Types）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
    "ffwniprGJHZzJ7t3lQcXz": {
      "id": "ffwniprGJHZzJ7t3lQcXz",
      "zh": "操作符",
      "en": "Operators",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「操作符」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**操作符**（Operators）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
    "rmqXH29n1oXtZ8tvmcRFn": {
      "id": "rmqXH29n1oXtZ8tvmcRFn",
      "zh": "SELECT 查询语句",
      "en": "SELECT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SELECT 查询语句」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SELECT 查询语句**（SELECT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SELECT 查询语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SELECT 查询语句**（SELECT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "mPj6BiK5FKKkIQ9WsWEo6": {
      "id": "mPj6BiK5FKKkIQ9WsWEo6",
      "zh": "INSERT 插入语句",
      "en": "INSERT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「INSERT 插入语句」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**INSERT 插入语句**（INSERT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「INSERT 插入语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**INSERT 插入语句**（INSERT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "eu9dJFi6gBPMBdy08Y5Bb": {
      "id": "eu9dJFi6gBPMBdy08Y5Bb",
      "zh": "UPDATE 更新语句",
      "en": "UPDATE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「UPDATE 更新语句」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**UPDATE 更新语句**（UPDATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**UPDATE 更新语句**（UPDATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "ddtVaA4Ls6qRj-7OtTSIH": {
      "id": "ddtVaA4Ls6qRj-7OtTSIH",
      "zh": "DELETE 删除语句",
      "en": "DELETE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DELETE 删除语句」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DELETE 删除语句**（DELETE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DELETE 删除语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DELETE 删除语句**（DELETE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "xPOeXK1EPBNG56vgfG-VV": {
      "id": "xPOeXK1EPBNG56vgfG-VV",
      "zh": "DDL 数据定义语言",
      "en": "Data Definition Language (DDL)",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DDL 数据定义语言」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DDL 数据定义语言**（Data Definition Language (DDL)）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DDL 数据定义语言」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DDL 数据定义语言**（Data Definition Language (DDL)）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "K5vhqTJrdPK08Txv8zaEj": {
      "id": "K5vhqTJrdPK08Txv8zaEj",
      "zh": "TRUNCATE TABLE 清空表",
      "en": "Truncate Table",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「TRUNCATE TABLE 清空表」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**TRUNCATE TABLE 清空表**（Truncate Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「TRUNCATE TABLE 清空表」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**TRUNCATE TABLE 清空表**（Truncate Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "WjXlO42WL9saDS7RIGapt": {
      "id": "WjXlO42WL9saDS7RIGapt",
      "zh": "ALTER TABLE 改表",
      "en": "Alter Table",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ALTER TABLE 改表」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**ALTER TABLE 改表**（Alter Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ALTER TABLE 改表」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ALTER TABLE 改表**（Alter Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "epEpBxRosLhuAuKwp823r": {
      "id": "epEpBxRosLhuAuKwp823r",
      "zh": "CREATE TABLE 建表",
      "en": "Create Table",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「CREATE TABLE 建表」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**CREATE TABLE 建表**（Create Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CREATE TABLE 建表」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CREATE TABLE 建表**（Create Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "YzJ6QmY2arMfRzMAPaI0T": {
      "id": "YzJ6QmY2arMfRzMAPaI0T",
      "zh": "DROP TABLE 删表",
      "en": "Drop Table",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DROP TABLE 删表」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DROP TABLE 删表**（Drop Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DROP TABLE 删表」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DROP TABLE 删表**（Drop Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "WMSXi-eez_hHGDM8kUdWz": {
      "id": "WMSXi-eez_hHGDM8kUdWz",
      "zh": "DML 数据操纵语言",
      "en": "Data Manipulation Language (DML)",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DML 数据操纵语言」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DML 数据操纵语言**（Data Manipulation Language (DML)）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DML 数据操纵语言」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DML 数据操纵语言**（Data Manipulation Language (DML)）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "i8u8E_sne6XiKJo2FXDog": {
      "id": "i8u8E_sne6XiKJo2FXDog",
      "zh": "SELECT 查询语句",
      "en": "Select",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SELECT 查询语句」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SELECT 查询语句**（Select）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SELECT 查询语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SELECT 查询语句**（Select）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "N1Racr3ZpU320gS545We8": {
      "id": "N1Racr3ZpU320gS545We8",
      "zh": "FROM 指定表",
      "en": "FROM",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「FROM 指定表」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**FROM 指定表**（FROM）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「FROM 指定表」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**FROM 指定表**（FROM）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "WhYAy6f7Euk3E49-ot644": {
      "id": "WhYAy6f7Euk3E49-ot644",
      "zh": "WHERE 条件过滤",
      "en": "WHERE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「WHERE 条件过滤」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**WHERE 条件过滤**（WHERE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「WHERE 条件过滤」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**WHERE 条件过滤**（WHERE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "NfCiSPrL4upMssukcw3Kh": {
      "id": "NfCiSPrL4upMssukcw3Kh",
      "zh": "ORDER BY 排序BY",
      "en": "ORDER BY",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ORDER BY 排序BY」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**ORDER BY 排序BY**（ORDER BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ORDER BY 排序BY」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ORDER BY 排序BY**（ORDER BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "14TKE6KhrH1yFtHcSZSXq": {
      "id": "14TKE6KhrH1yFtHcSZSXq",
      "zh": "GROUP BY 分组BY",
      "en": "GROUP BY",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「GROUP BY 分组BY」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**GROUP BY 分组BY**（GROUP BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GROUP BY 分组BY」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GROUP BY 分组BY**（GROUP BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "ytwCkSMTiTuemE0KVfAfy": {
      "id": "ytwCkSMTiTuemE0KVfAfy",
      "zh": "HAVING 分组过滤",
      "en": "HAVING",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「HAVING 分组过滤」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**HAVING 分组过滤**（HAVING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「HAVING 分组过滤」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**HAVING 分组过滤**（HAVING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "4UQQYbjzwVxZOAxBuXKQS": {
      "id": "4UQQYbjzwVxZOAxBuXKQS",
      "zh": "JOIN 表连接",
      "en": "JOINs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「JOIN 表连接」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**JOIN 表连接**（JOINs）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**JOIN 表连接**（JOINs）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "-Hew0y53ziZK3epQnGA0O": {
      "id": "-Hew0y53ziZK3epQnGA0O",
      "zh": "INSERT 插入语句",
      "en": "INSERT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「INSERT 插入语句」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**INSERT 插入语句**（INSERT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「INSERT 插入语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**INSERT 插入语句**（INSERT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "KJJ6PYjTnr_3yU2mNPL9v": {
      "id": "KJJ6PYjTnr_3yU2mNPL9v",
      "zh": "UPDATE 更新语句",
      "en": "UPDATE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「UPDATE 更新语句」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**UPDATE 更新语句**（UPDATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**UPDATE 更新语句**（UPDATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "zWnvuHJLHr03PWkrW1wZZ": {
      "id": "zWnvuHJLHr03PWkrW1wZZ",
      "zh": "DELETE 删除语句",
      "en": "DELETE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DELETE 删除语句」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DELETE 删除语句**（DELETE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DELETE 删除语句」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DELETE 删除语句**（DELETE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "LX9nzJ4uqznHN4SksoDvr": {
      "id": "LX9nzJ4uqznHN4SksoDvr",
      "zh": "聚合Queries",
      "en": "Aggregate Queries",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「聚合Queries」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**聚合Queries**（Aggregate Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「聚合Queries」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**聚合Queries**（Aggregate Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "w4T3jFb0ilf1KNw-AvRXG": {
      "id": "w4T3jFb0ilf1KNw-AvRXG",
      "zh": "SUM 求和",
      "en": "SUM",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SUM 求和」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SUM 求和**（SUM）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SUM 求和」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SUM 求和**（SUM）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "9aHYrOQDkA84tlxcVK5aD": {
      "id": "9aHYrOQDkA84tlxcVK5aD",
      "zh": "COUNT 计数",
      "en": "COUNT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「COUNT 计数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**COUNT 计数**（COUNT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「COUNT 计数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**COUNT 计数**（COUNT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Wou6YXLYUgomvcELh851L": {
      "id": "Wou6YXLYUgomvcELh851L",
      "zh": "AVG 平均值",
      "en": "AVG",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「AVG 平均值」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**AVG 平均值**（AVG）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「AVG 平均值」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**AVG 平均值**（AVG）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "bFEYMlqPZtTUYtDQxqHzT": {
      "id": "bFEYMlqPZtTUYtDQxqHzT",
      "zh": "MIN 最小值",
      "en": "MIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「MIN 最小值」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**MIN 最小值**（MIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「MIN 最小值」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**MIN 最小值**（MIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "YqDJq3fPxUZlwsdq0kJg7": {
      "id": "YqDJq3fPxUZlwsdq0kJg7",
      "zh": "MAX 最大值",
      "en": "MAX",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「MAX 最大值」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**MAX 最大值**（MAX）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「MAX 最大值」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**MAX 最大值**（MAX）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Zw8IHfCCMSxmVjx5Ho5ff": {
      "id": "Zw8IHfCCMSxmVjx5Ho5ff",
      "zh": "GROUP BY 分组BY",
      "en": "GROUP BY",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「GROUP BY 分组BY」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**GROUP BY 分组BY**（GROUP BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GROUP BY 分组BY」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GROUP BY 分组BY**（GROUP BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "HhICJpCK5__b-itUoEBES": {
      "id": "HhICJpCK5__b-itUoEBES",
      "zh": "HAVING 分组过滤",
      "en": "HAVING",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「HAVING 分组过滤」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**HAVING 分组过滤**（HAVING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「HAVING 分组过滤」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**HAVING 分组过滤**（HAVING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "qBios3sZVhcJMpXmj9f7B": {
      "id": "qBios3sZVhcJMpXmj9f7B",
      "zh": "数据约束",
      "en": "Data Constraints",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据约束」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**数据约束**（Data Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据约束」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**数据约束**（Data Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Jlwmyq6CUQeDAlL4dazOP": {
      "id": "Jlwmyq6CUQeDAlL4dazOP",
      "zh": "主键",
      "en": "Primary Key",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「主键」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**主键**（Primary Key）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「主键」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**主键**（Primary Key）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "DHz6sRLYhFeCbAcNJS8hm": {
      "id": "DHz6sRLYhFeCbAcNJS8hm",
      "zh": "外键",
      "en": "Foreign Key",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「外键」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**外键**（Foreign Key）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「外键」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**外键**（Foreign Key）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "5yGo8i7eplxtXOD_qfzOs": {
      "id": "5yGo8i7eplxtXOD_qfzOs",
      "zh": "唯一",
      "en": "Unique",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「唯一」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**唯一**（Unique）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「唯一」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**唯一**（Unique）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "M4M_-vjM9GNy0NmXZneDA": {
      "id": "M4M_-vjM9GNy0NmXZneDA",
      "zh": "NOT NULL（技术术语）",
      "en": "NOT NULL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「NOT NULL（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**NOT NULL（技术术语）**（NOT NULL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「NOT NULL（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**NOT NULL（技术术语）**（NOT NULL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Q0h9Wfnl_W9ThOkv7Q17A": {
      "id": "Q0h9Wfnl_W9ThOkv7Q17A",
      "zh": "CHECK（技术术语）",
      "en": "CHECK",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「CHECK（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**CHECK（技术术语）**（CHECK）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CHECK（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CHECK（技术术语）**（CHECK）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "8V6yw7kLaow-VVcv_K_pL": {
      "id": "8V6yw7kLaow-VVcv_K_pL",
      "zh": "JOIN 表连接Queries",
      "en": "JOIN Queries",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「JOIN 表连接Queries」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**JOIN 表连接Queries**（JOIN Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**JOIN 表连接Queries**（JOIN Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "aaua13CkTxLOYXr8cAgPm": {
      "id": "aaua13CkTxLOYXr8cAgPm",
      "zh": "INNER JOIN 内连接",
      "en": "INNER JOIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「INNER JOIN 内连接」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**INNER JOIN 内连接**（INNER JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**INNER JOIN 内连接**（INNER JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "X9cJJ8zLZCF2cOoqxwFfY": {
      "id": "X9cJJ8zLZCF2cOoqxwFfY",
      "zh": "LEFT JOIN 左连接",
      "en": "LEFT JOIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「LEFT JOIN 左连接」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**LEFT JOIN 左连接**（LEFT JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**LEFT JOIN 左连接**（LEFT JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "shpgZkh1CLqUwjOaRtAFy": {
      "id": "shpgZkh1CLqUwjOaRtAFy",
      "zh": "RIGHT JOIN 右连接",
      "en": "RIGHT JOIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「RIGHT JOIN 右连接」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**RIGHT JOIN 右连接**（RIGHT JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**RIGHT JOIN 右连接**（RIGHT JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "aS5zCyJRA779yHF0G2pje": {
      "id": "aS5zCyJRA779yHF0G2pje",
      "zh": "全OUTERJOIN 表连接",
      "en": "FULL OUTER JOIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「全OUTERJOIN 表连接」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**全OUTERJOIN 表连接**（FULL OUTER JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**全OUTERJOIN 表连接**（FULL OUTER JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "6qG0AVYd6Y1B8LOSDoMX9": {
      "id": "6qG0AVYd6Y1B8LOSDoMX9",
      "zh": "SelfJOIN 表连接",
      "en": "Self Join",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SelfJOIN 表连接」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SelfJOIN 表连接**（Self Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**SelfJOIN 表连接**（Self Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "7ow6tiSSCnTpv_GYQU017": {
      "id": "7ow6tiSSCnTpv_GYQU017",
      "zh": "CrossJOIN 表连接",
      "en": "Cross Join",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「CrossJOIN 表连接」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**CrossJOIN 表连接**（Cross Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**CrossJOIN 表连接**（Cross Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "86iZ8s8EdhSuYwgwAM_EO": {
      "id": "86iZ8s8EdhSuYwgwAM_EO",
      "zh": "Subqueries（技术术语）",
      "en": "Subqueries",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Subqueries（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Subqueries（技术术语）**（Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
    "eXQ-TrTlqL5p2AdGnozkL": {
      "id": "eXQ-TrTlqL5p2AdGnozkL",
      "zh": "Scalar（技术术语）",
      "en": "Scalar",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Scalar（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Scalar（技术术语）**（Scalar）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Scalar（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Scalar（技术术语）**（Scalar）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "wmtt-3auWLdQWuVdwZLPd": {
      "id": "wmtt-3auWLdQWuVdwZLPd",
      "zh": "Column（技术术语）",
      "en": "Column",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Column（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Column（技术术语）**（Column）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Column（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Column（技术术语）**（Column）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "aLDl75i8gtLRA2Ud-fMmQ": {
      "id": "aLDl75i8gtLRA2Ud-fMmQ",
      "zh": "Row（技术术语）",
      "en": "Row",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Row（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Row（技术术语）**（Row）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Row（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Row（技术术语）**（Row）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "R9WDMRd-3wxsKH97-sT3n": {
      "id": "R9WDMRd-3wxsKH97-sT3n",
      "zh": "TABLE 表",
      "en": "Table",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「TABLE 表」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**TABLE 表**（Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「TABLE 表」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**TABLE 表**（Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "xkPJ2MYiXmzC4yqQWyB_7": {
      "id": "xkPJ2MYiXmzC4yqQWyB_7",
      "zh": "Nested Subqueries（技术术语）",
      "en": "Nested Subqueries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Nested Subqueries（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Nested Subqueries（技术术语）**（Nested Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Nested Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Nested Subqueries（技术术语）**（Nested Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "JZqS3Xapw6mfSPVgFW7av": {
      "id": "JZqS3Xapw6mfSPVgFW7av",
      "zh": "Correlated Subqueries（技术术语）",
      "en": "Correlated Subqueries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Correlated Subqueries（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Correlated Subqueries（技术术语）**（Correlated Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Correlated Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Correlated Subqueries（技术术语）**（Correlated Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "vTMd0bqz4eTgLnhfgY61h": {
      "id": "vTMd0bqz4eTgLnhfgY61h",
      "zh": "进阶函数",
      "en": "Advanced Functions",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「进阶函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**进阶函数**（Advanced Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「进阶函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**进阶函数**（Advanced Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "o2SH4iQn1Ap2yDZ7cVYLO": {
      "id": "o2SH4iQn1Ap2yDZ7cVYLO",
      "zh": "FLOOR 向下取整函数",
      "en": "FLOOR",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「FLOOR 向下取整函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**FLOOR 向下取整函数**（FLOOR）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「FLOOR 向下取整函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**FLOOR 向下取整函数**（FLOOR）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "6vYFb_D1N_-tLWZftL-Az": {
      "id": "6vYFb_D1N_-tLWZftL-Az",
      "zh": "ABS 绝对值函数",
      "en": "ABS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ABS 绝对值函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**ABS 绝对值函数**（ABS）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ABS 绝对值函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ABS 绝对值函数**（ABS）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "OUw--8zEq6lk5-6oySVHe": {
      "id": "OUw--8zEq6lk5-6oySVHe",
      "zh": "MOD 取模函数",
      "en": "MOD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「MOD 取模函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**MOD 取模函数**（MOD）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「MOD 取模函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**MOD 取模函数**（MOD）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "9DntFiZV1AyaRPhYP5q6u": {
      "id": "9DntFiZV1AyaRPhYP5q6u",
      "zh": "ROUND 四舍五入函数",
      "en": "ROUND",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ROUND 四舍五入函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**ROUND 四舍五入函数**（ROUND）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ROUND 四舍五入函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ROUND 四舍五入函数**（ROUND）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "BAqJQvcguhIhzyII5LRH6": {
      "id": "BAqJQvcguhIhzyII5LRH6",
      "zh": "CEILING（技术术语）",
      "en": "CEILING",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「CEILING（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**CEILING（技术术语）**（CEILING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CEILING（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CEILING（技术术语）**（CEILING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "5inpEqafeVCfqsURHzQQg": {
      "id": "5inpEqafeVCfqsURHzQQg",
      "zh": "CONCAT 拼接函数",
      "en": "CONCAT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「CONCAT 拼接函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**CONCAT 拼接函数**（CONCAT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CONCAT 拼接函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CONCAT 拼接函数**（CONCAT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "RH8DLiQpDUWqw3U1522q5": {
      "id": "RH8DLiQpDUWqw3U1522q5",
      "zh": "LENGTH 长度函数",
      "en": "LENGTH",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「LENGTH 长度函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**LENGTH 长度函数**（LENGTH）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「LENGTH 长度函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**LENGTH 长度函数**（LENGTH）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "PnG_5D6q66NAKxXVOwA6N": {
      "id": "PnG_5D6q66NAKxXVOwA6N",
      "zh": "SUBSTRING 截取函数",
      "en": "SUBSTRING",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SUBSTRING 截取函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SUBSTRING 截取函数**（SUBSTRING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SUBSTRING 截取函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SUBSTRING 截取函数**（SUBSTRING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "VNbb3YPc0FtrROylRns8h": {
      "id": "VNbb3YPc0FtrROylRns8h",
      "zh": "REPLACE（技术术语）",
      "en": "REPLACE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「REPLACE（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**REPLACE（技术术语）**（REPLACE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「REPLACE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**REPLACE（技术术语）**（REPLACE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Othfo7NvTVzfyL906PLM1": {
      "id": "Othfo7NvTVzfyL906PLM1",
      "zh": "UPPER 转大写函数",
      "en": "UPPER",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「UPPER 转大写函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**UPPER 转大写函数**（UPPER）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「UPPER 转大写函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**UPPER 转大写函数**（UPPER）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "knTG6pAq2mYP24WMa29xI": {
      "id": "knTG6pAq2mYP24WMa29xI",
      "zh": "LOWER 转小写函数",
      "en": "LOWER",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「LOWER 转小写函数」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**LOWER 转小写函数**（LOWER）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「LOWER 转小写函数」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**LOWER 转小写函数**（LOWER）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "W2ePJHdfEiEJ3ZKoRQKt_": {
      "id": "W2ePJHdfEiEJ3ZKoRQKt_",
      "zh": "CASE（技术术语）",
      "en": "CASE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「CASE（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**CASE（技术术语）**（CASE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CASE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CASE（技术术语）**（CASE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "KI6vngoYcHsnpIk8ErhhS": {
      "id": "KI6vngoYcHsnpIk8ErhhS",
      "zh": "NULLIF（技术术语）",
      "en": "NULLIF",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「NULLIF（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**NULLIF（技术术语）**（NULLIF）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「NULLIF（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**NULLIF（技术术语）**（NULLIF）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "k7lZe4QRt9q4InUImFmvx": {
      "id": "k7lZe4QRt9q4InUImFmvx",
      "zh": "COALESCE（技术术语）",
      "en": "COALESCE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「COALESCE（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**COALESCE（技术术语）**（COALESCE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「COALESCE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**COALESCE（技术术语）**（COALESCE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Ivqo2wa-_NhGU3vGd0pUI": {
      "id": "Ivqo2wa-_NhGU3vGd0pUI",
      "zh": "DATE（技术术语）",
      "en": "DATE",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DATE（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DATE（技术术语）**（DATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DATE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DATE（技术术语）**（DATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "88KlrMqSza9_YaD7Dv61p": {
      "id": "88KlrMqSza9_YaD7Dv61p",
      "zh": "TIME（技术术语）",
      "en": "TIME",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「TIME（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**TIME（技术术语）**（TIME）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「TIME（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**TIME（技术术语）**（TIME）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "7hEqkoxkdAWmakGZsMJx-": {
      "id": "7hEqkoxkdAWmakGZsMJx-",
      "zh": "TIMESTAMP（技术术语）",
      "en": "TIMESTAMP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「TIMESTAMP（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**TIMESTAMP（技术术语）**（TIMESTAMP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「TIMESTAMP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**TIMESTAMP（技术术语）**（TIMESTAMP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "BJ4fQvagTO0B5UtXblyx8": {
      "id": "BJ4fQvagTO0B5UtXblyx8",
      "zh": "DATEPART（技术术语）",
      "en": "DATEPART",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DATEPART（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DATEPART（技术术语）**（DATEPART）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DATEPART（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DATEPART（技术术语）**（DATEPART）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "1E1WdWOyqxbbdiIbw26dZ": {
      "id": "1E1WdWOyqxbbdiIbw26dZ",
      "zh": "DATEADD（技术术语）",
      "en": "DATEADD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DATEADD（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DATEADD（技术术语）**（DATEADD）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DATEADD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DATEADD（技术术语）**（DATEADD）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "2tyezwOIxV6O84N-Q3Awh": {
      "id": "2tyezwOIxV6O84N-Q3Awh",
      "zh": "Views（技术术语）",
      "en": "Views",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Views（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Views（技术术语）**（Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Views（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Views（技术术语）**（Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "PcsGK4VBh0zNQIPZvNES4": {
      "id": "PcsGK4VBh0zNQIPZvNES4",
      "zh": "创建Views",
      "en": "Creating Views",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「创建Views」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**创建Views**（Creating Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「创建Views」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**创建Views**（Creating Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "3eE-l-P93nOXoWfLr8PSW": {
      "id": "3eE-l-P93nOXoWfLr8PSW",
      "zh": "Modifying Views（技术术语）",
      "en": "Modifying Views",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Modifying Views（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Modifying Views（技术术语）**（Modifying Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Modifying Views（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Modifying Views（技术术语）**（Modifying Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "MIOuWWcCjLAmgzog2DBC3": {
      "id": "MIOuWWcCjLAmgzog2DBC3",
      "zh": "Dropping Views（技术术语）",
      "en": "Dropping Views",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Dropping Views（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Dropping Views（技术术语）**（Dropping Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Dropping Views（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Dropping Views（技术术语）**（Dropping Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "LcljR70T-OnzSrJJDqOWf": {
      "id": "LcljR70T-OnzSrJJDqOWf",
      "zh": "索引",
      "en": "Indexes",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「索引」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**索引**（Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「索引」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**索引**（Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "NtxGd6Vx-REBclry7lZuE": {
      "id": "NtxGd6Vx-REBclry7lZuE",
      "zh": "管理索引",
      "en": "Managing Indexes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「管理索引」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**管理索引**（Managing Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「管理索引」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**管理索引**（Managing Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "Ps9Yv2s-bKvEegGAbPsiA": {
      "id": "Ps9Yv2s-bKvEegGAbPsiA",
      "zh": "查询优化",
      "en": "Query Optimization",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「查询优化」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**查询优化**（Query Optimization）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「查询优化」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**查询优化**（Query Optimization）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "OdaBXz2XBAVLsQ-m7xtAM": {
      "id": "OdaBXz2XBAVLsQ-m7xtAM",
      "zh": "Transactions（技术术语）",
      "en": "Transactions",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Transactions（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Transactions（技术术语）**（Transactions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
    "7sTW1vwUhCFOMXYjScVEt": {
      "id": "7sTW1vwUhCFOMXYjScVEt",
      "zh": "BEGIN（技术术语）",
      "en": "BEGIN",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「BEGIN（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**BEGIN（技术术语）**（BEGIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「BEGIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**BEGIN（技术术语）**（BEGIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "3cMECz5QPVDOFrk5duObs": {
      "id": "3cMECz5QPVDOFrk5duObs",
      "zh": "COMMIT 提交",
      "en": "COMMIT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「COMMIT 提交」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**COMMIT 提交**（COMMIT）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "工作区是你正在改的文件；git status 看哪些改了、哪些还没暂存。",
        "git add 把选中的改动放进暂存区，相当于“打包待提交”。",
        "git commit 把暂存区快照写入本地仓库历史，附说明信息。",
        "git log / git diff 回顾历史，确认这次提交包含了什么。"
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
          "body": "**COMMIT 提交**（COMMIT）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "放在哪条链路里看",
          "body": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
        },
        {
          "title": "真正要掌握什么",
          "body": "git add 把选中的改动放进暂存区，相当于“打包待提交”。 git commit 把暂存区快照写入本地仓库历史，附说明信息。 git log / git diff 回顾历史，确认这次提交包含了什么。"
        },
        {
          "title": "动手验证",
          "body": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
        }
      ],
      "kind": "git",
      "routeLabels": [
        "工作区",
        "git add",
        "git commit",
        "log/diff"
      ]
    },
    "xbD67KVlt3UhHpKh8HLx8": {
      "id": "xbD67KVlt3UhHpKh8HLx8",
      "zh": "ROLLBACK 回滚",
      "en": "ROLLBACK",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ROLLBACK 回滚」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**ROLLBACK 回滚**（ROLLBACK）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ROLLBACK 回滚」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ROLLBACK 回滚**（ROLLBACK）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "pJtYvXUo81aZfPuRjIbMq": {
      "id": "pJtYvXUo81aZfPuRjIbMq",
      "zh": "SAVEPOINT（技术术语）",
      "en": "SAVEPOINT",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「SAVEPOINT（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**SAVEPOINT（技术术语）**（SAVEPOINT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SAVEPOINT（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SAVEPOINT（技术术语）**（SAVEPOINT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "igg34gLPl3HYVAmRNFGcV": {
      "id": "igg34gLPl3HYVAmRNFGcV",
      "zh": "ACID（技术术语）",
      "en": "ACID",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「ACID（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**ACID（技术术语）**（ACID）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
    "ujeq8EIFcrqkBjoFizsJM": {
      "id": "ujeq8EIFcrqkBjoFizsJM",
      "zh": "事务隔离Levels",
      "en": "Transaction Isolation Levels",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「事务隔离Levels」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**事务隔离Levels**（Transaction Isolation Levels）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「事务隔离Levels」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**事务隔离Levels**（Transaction Isolation Levels）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "R1ktDJpXOz0PTllAcBrdu": {
      "id": "R1ktDJpXOz0PTllAcBrdu",
      "zh": "数据完整性与安全",
      "en": "Data Integrity & Security",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据完整性与安全」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**数据完整性与安全**（Data Integrity & Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据完整性与安全」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**数据完整性与安全**（Data Integrity & Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "mBQ3Z8GlFcpIena3IB7D_": {
      "id": "mBQ3Z8GlFcpIena3IB7D_",
      "zh": "数据完整性约束",
      "en": "Data Integrity Constraints",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据完整性约束」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**数据完整性约束**（Data Integrity Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据完整性约束」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**数据完整性约束**（Data Integrity Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "03qMopxzjx_-dZbYw9b7J": {
      "id": "03qMopxzjx_-dZbYw9b7J",
      "zh": "GRANT（技术术语）与Revoke（技术术语）",
      "en": "GRANT and Revoke",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「GRANT（技术术语）与Revoke（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**GRANT（技术术语）与Revoke（技术术语）**（GRANT and Revoke）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GRANT（技术术语）与Revoke（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GRANT（技术术语）与Revoke（技术术语）**（GRANT and Revoke）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "vhBZqqmUcEon6-Vwvla4q": {
      "id": "vhBZqqmUcEon6-Vwvla4q",
      "zh": "DB安全最佳实践",
      "en": "DB Security Best Practices",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「DB安全最佳实践」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**DB安全最佳实践**（DB Security Best Practices）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DB安全最佳实践」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DB安全最佳实践**（DB Security Best Practices）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "w7FNjdwqjY7X69aJqqBy4": {
      "id": "w7FNjdwqjY7X69aJqqBy4",
      "zh": "StoredProcedures（技术术语）与Functions（技术术语）",
      "en": "Stored Procedures & Functions",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「StoredProcedures（技术术语）与Functions（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**StoredProcedures（技术术语）与Functions（技术术语）**（Stored Procedures & Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「StoredProcedures（技术术语）与Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**StoredProcedures（技术术语）与Functions（技术术语）**（Stored Procedures & Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "4rqCPpTb0dAgpheBKshRG": {
      "id": "4rqCPpTb0dAgpheBKshRG",
      "zh": "性能优化",
      "en": "Performance Optimization",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「性能优化」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**性能优化**（Performance Optimization）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「性能优化」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**性能优化**（Performance Optimization）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "9wOgP0i9G4HSeZGn2Gm7r": {
      "id": "9wOgP0i9G4HSeZGn2Gm7r",
      "zh": "使用索引",
      "en": "Using Indexes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「使用索引」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**使用索引**（Using Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「使用索引」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**使用索引**（Using Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "C0dhS6uLf4TUSfvcWyXhv": {
      "id": "C0dhS6uLf4TUSfvcWyXhv",
      "zh": "OptimizingJOIN 表连接",
      "en": "Optimizing Joins",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「OptimizingJOIN 表连接」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**OptimizingJOIN 表连接**（Optimizing Joins）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**OptimizingJOIN 表连接**（Optimizing Joins）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "UVTgbZrqpbYl1bQvQejcF": {
      "id": "UVTgbZrqpbYl1bQvQejcF",
      "zh": "Reducing Subqueries（技术术语）",
      "en": "Reducing Subqueries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Reducing Subqueries（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Reducing Subqueries（技术术语）**（Reducing Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Reducing Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Reducing Subqueries（技术术语）**（Reducing Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "w53CSY53nAAN0ux-XeJ4c": {
      "id": "w53CSY53nAAN0ux-XeJ4c",
      "zh": "Selective Projection（技术术语）",
      "en": "Selective Projection",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Selective Projection（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Selective Projection（技术术语）**（Selective Projection）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Selective Projection（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Selective Projection（技术术语）**（Selective Projection）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "C6P69YiFdS-ioPXMNfX07": {
      "id": "C6P69YiFdS-ioPXMNfX07",
      "zh": "查询AnalysisTechniques",
      "en": "Query Analysis Techniques",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「查询AnalysisTechniques」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**查询AnalysisTechniques**（Query Analysis Techniques）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「查询AnalysisTechniques」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**查询AnalysisTechniques**（Query Analysis Techniques）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "UDqbT1y-YzBrljfKSz_RG": {
      "id": "UDqbT1y-YzBrljfKSz_RG",
      "zh": "进阶SQL",
      "en": "Advanced SQL",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「进阶SQL」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**进阶SQL**（Advanced SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「进阶SQL」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**进阶SQL**（Advanced SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "TjgwabhEtaSoYMLNr6q9l": {
      "id": "TjgwabhEtaSoYMLNr6q9l",
      "zh": "Recursive Queries（技术术语）",
      "en": "Recursive Queries",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Recursive Queries（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Recursive Queries（技术术语）**（Recursive Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Recursive Queries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Recursive Queries（技术术语）**（Recursive Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "nwFaz9i-1s0WVrVaFsoqb": {
      "id": "nwFaz9i-1s0WVrVaFsoqb",
      "zh": "Pivot / Unpivot Operations（技术术语）",
      "en": "Pivot / Unpivot Operations",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Pivot / Unpivot Operations（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Pivot / Unpivot Operations（技术术语）**（Pivot / Unpivot Operations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Pivot / Unpivot Operations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Pivot / Unpivot Operations（技术术语）**（Pivot / Unpivot Operations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "tBvXLLp5FKeSSN35Kj1X4": {
      "id": "tBvXLLp5FKeSSN35Kj1X4",
      "zh": "Window Functions（技术术语）",
      "en": "Window Functions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Window Functions（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Window Functions（技术术语）**（Window Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Window Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Window Functions（技术术语）**（Window Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "tedQynR0xicVKhuR1oahw": {
      "id": "tedQynR0xicVKhuR1oahw",
      "zh": "常见TABLE 表Expressions",
      "en": "Common Table Expressions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「常见TABLE 表Expressions」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**常见TABLE 表Expressions**（Common Table Expressions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「常见TABLE 表Expressions」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**常见TABLE 表Expressions**（Common Table Expressions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "z5Sf0VU14ZCQ80kL1qOqc": {
      "id": "z5Sf0VU14ZCQ80kL1qOqc",
      "zh": "动态SQL",
      "en": "Dynamic SQL",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「动态SQL」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**动态SQL**（Dynamic SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「动态SQL」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**动态SQL**（Dynamic SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "zW27ZHdLwQY-85iqbBKQZ": {
      "id": "zW27ZHdLwQY-85iqbBKQZ",
      "zh": "Row_number（技术术语）",
      "en": "Row_number",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「Row_number（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**Row_number（技术术语）**（Row_number）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Row_number（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Row_number（技术术语）**（Row_number）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "cucCPw3KfetAP2OMFUs0X": {
      "id": "cucCPw3KfetAP2OMFUs0X",
      "zh": "rank（技术术语）",
      "en": "rank",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「rank（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**rank（技术术语）**（rank）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「rank（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**rank（技术术语）**（rank）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "QM0ltgPu8lLLYc2MsTLj-": {
      "id": "QM0ltgPu8lLLYc2MsTLj-",
      "zh": "dense_rank（技术术语）",
      "en": "dense_rank",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「dense_rank（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**dense_rank（技术术语）**（dense_rank）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「dense_rank（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**dense_rank（技术术语）**（dense_rank）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "aJJjaGunRrwyh9MjQfJt-": {
      "id": "aJJjaGunRrwyh9MjQfJt-",
      "zh": "lead（技术术语）",
      "en": "lead",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「lead（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**lead（技术术语）**（lead）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「lead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**lead（技术术语）**（lead）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "BcXdxY6bld5c0YNFSKkh-": {
      "id": "BcXdxY6bld5c0YNFSKkh-",
      "zh": "lag（技术术语）",
      "en": "lag",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「lag（技术术语）」时，先把它放进 SQL 查询 的真实场景，而不是孤立背术语。",
      "what": "**lag（技术术语）**（lag）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 SQL 查询 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「lag（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**lag（技术术语）**（lag）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。"
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
    "R9DQNc0AyAQ2HLpP4HOk6": {
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
    "fNTb9y3zs1HPYclAmu_Wv": {
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
    "nhUKKWyBH80nyKfGT8ErC": {
      "scene": "学习「基础知识」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "基础知识（Learn the Basics）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「基础知识」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「基础知识」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「基础知识」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "gx4KaFqKgJX9n9_ZGMqlZ": {
      "scene": "学习「SQL 与 NoSQL 数据库对比」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SQL 与 NoSQL 数据库对比（SQL vs NoSQL Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SQL 与 NoSQL 数据库对比」出现在哪：上游输入是什么，下游输出…",
          "text": "「SQL 与 NoSQL 数据库对比」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SQL 与 NoSQL 数据库对比」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "JDDG4KfhtIlw1rkNCzUli": {
      "scene": "学习「SQL 基础语法」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SQL 基础语法（Basic SQL Syntax）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SQL 基础语法」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SQL 基础语法」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SQL 基础语法」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "6yoo7qC6X2jYDIjd3HIm7": {
      "scene": "学习「SQL关键字」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SQL关键字（SQL Keywords）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SQL关键字」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SQL关键字」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SQL关键字」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "tBzMDfCMh6MIagNaxCzin": {
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
    "ffwniprGJHZzJ7t3lQcXz": {
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
    "rmqXH29n1oXtZ8tvmcRFn": {
      "scene": "学习「SELECT 查询语句」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SELECT 查询语句（SELECT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SELECT 查询语句」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SELECT 查询语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SELECT 查询语句」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "mPj6BiK5FKKkIQ9WsWEo6": {
      "scene": "学习「INSERT 插入语句」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "INSERT 插入语句（INSERT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「INSERT 插入语句」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「INSERT 插入语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「INSERT 插入语句」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "eu9dJFi6gBPMBdy08Y5Bb": {
      "scene": "学习「UPDATE 更新语句」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "UPDATE 更新语句（UPDATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「UPDATE 更新语句」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "ddtVaA4Ls6qRj-7OtTSIH": {
      "scene": "学习「DELETE 删除语句」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DELETE 删除语句（DELETE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DELETE 删除语句」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DELETE 删除语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DELETE 删除语句」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "xPOeXK1EPBNG56vgfG-VV": {
      "scene": "学习「DDL 数据定义语言」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DDL 数据定义语言（Data Definition Language (DDL)）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DDL 数据定义语言」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DDL 数据定义语言」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DDL 数据定义语言」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "K5vhqTJrdPK08Txv8zaEj": {
      "scene": "学习「TRUNCATE TABLE 清空表」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "TRUNCATE TABLE 清空表（Truncate Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「TRUNCATE TABLE 清空表」出现在哪：上游输入是什么，下游输…",
          "text": "「TRUNCATE TABLE 清空表」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「TRUNCATE TABLE 清空表」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "WjXlO42WL9saDS7RIGapt": {
      "scene": "学习「ALTER TABLE 改表」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "ALTER TABLE 改表（Alter Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「ALTER TABLE 改表」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「ALTER TABLE 改表」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ALTER TABLE 改表」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "epEpBxRosLhuAuKwp823r": {
      "scene": "学习「CREATE TABLE 建表」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "CREATE TABLE 建表（Create Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「CREATE TABLE 建表」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「CREATE TABLE 建表」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CREATE TABLE 建表」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "YzJ6QmY2arMfRzMAPaI0T": {
      "scene": "学习「DROP TABLE 删表」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DROP TABLE 删表（Drop Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DROP TABLE 删表」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DROP TABLE 删表」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DROP TABLE 删表」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "WMSXi-eez_hHGDM8kUdWz": {
      "scene": "学习「DML 数据操纵语言」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DML 数据操纵语言（Data Manipulation Language (DML)）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DML 数据操纵语言」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DML 数据操纵语言」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DML 数据操纵语言」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "i8u8E_sne6XiKJo2FXDog": {
      "scene": "学习「SELECT 查询语句」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SELECT 查询语句（Select）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SELECT 查询语句」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SELECT 查询语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SELECT 查询语句」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "N1Racr3ZpU320gS545We8": {
      "scene": "学习「FROM 指定表」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "FROM 指定表（FROM）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「FROM 指定表」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「FROM 指定表」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「FROM 指定表」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "WhYAy6f7Euk3E49-ot644": {
      "scene": "学习「WHERE 条件过滤」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "WHERE 条件过滤（WHERE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「WHERE 条件过滤」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「WHERE 条件过滤」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「WHERE 条件过滤」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "NfCiSPrL4upMssukcw3Kh": {
      "scene": "学习「ORDER BY 排序BY」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "ORDER BY 排序BY（ORDER BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「ORDER BY 排序BY」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「ORDER BY 排序BY」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ORDER BY 排序BY」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "14TKE6KhrH1yFtHcSZSXq": {
      "scene": "学习「GROUP BY 分组BY」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "GROUP BY 分组BY（GROUP BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「GROUP BY 分组BY」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GROUP BY 分组BY」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GROUP BY 分组BY」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "ytwCkSMTiTuemE0KVfAfy": {
      "scene": "学习「HAVING 分组过滤」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "HAVING 分组过滤（HAVING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「HAVING 分组过滤」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「HAVING 分组过滤」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「HAVING 分组过滤」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "4UQQYbjzwVxZOAxBuXKQS": {
      "scene": "学习「JOIN 表连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "JOIN 表连接（JOINs）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「JOIN 表连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "-Hew0y53ziZK3epQnGA0O": {
      "scene": "学习「INSERT 插入语句」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "INSERT 插入语句（INSERT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「INSERT 插入语句」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「INSERT 插入语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「INSERT 插入语句」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "KJJ6PYjTnr_3yU2mNPL9v": {
      "scene": "学习「UPDATE 更新语句」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "UPDATE 更新语句（UPDATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「UPDATE 更新语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「UPDATE 更新语句」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "zWnvuHJLHr03PWkrW1wZZ": {
      "scene": "学习「DELETE 删除语句」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DELETE 删除语句（DELETE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DELETE 删除语句」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DELETE 删除语句」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DELETE 删除语句」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "LX9nzJ4uqznHN4SksoDvr": {
      "scene": "学习「聚合Queries」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "聚合Queries（Aggregate Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「聚合Queries」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「聚合Queries」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「聚合Queries」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "w4T3jFb0ilf1KNw-AvRXG": {
      "scene": "学习「SUM 求和」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SUM 求和（SUM）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SUM 求和」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SUM 求和」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SUM 求和」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "9aHYrOQDkA84tlxcVK5aD": {
      "scene": "学习「COUNT 计数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "COUNT 计数（COUNT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「COUNT 计数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「COUNT 计数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「COUNT 计数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Wou6YXLYUgomvcELh851L": {
      "scene": "学习「AVG 平均值」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "AVG 平均值（AVG）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「AVG 平均值」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「AVG 平均值」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「AVG 平均值」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "bFEYMlqPZtTUYtDQxqHzT": {
      "scene": "学习「MIN 最小值」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "MIN 最小值（MIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「MIN 最小值」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「MIN 最小值」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「MIN 最小值」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "YqDJq3fPxUZlwsdq0kJg7": {
      "scene": "学习「MAX 最大值」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "MAX 最大值（MAX）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「MAX 最大值」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「MAX 最大值」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「MAX 最大值」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Zw8IHfCCMSxmVjx5Ho5ff": {
      "scene": "学习「GROUP BY 分组BY」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "GROUP BY 分组BY（GROUP BY）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「GROUP BY 分组BY」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GROUP BY 分组BY」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GROUP BY 分组BY」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "HhICJpCK5__b-itUoEBES": {
      "scene": "学习「HAVING 分组过滤」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "HAVING 分组过滤（HAVING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「HAVING 分组过滤」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「HAVING 分组过滤」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「HAVING 分组过滤」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "qBios3sZVhcJMpXmj9f7B": {
      "scene": "学习「数据约束」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据约束（Data Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据约束」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据约束」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「数据约束」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Jlwmyq6CUQeDAlL4dazOP": {
      "scene": "学习「主键」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "主键（Primary Key）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「主键」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「主键」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「主键」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "DHz6sRLYhFeCbAcNJS8hm": {
      "scene": "学习「外键」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "外键（Foreign Key）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「外键」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「外键」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「外键」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "5yGo8i7eplxtXOD_qfzOs": {
      "scene": "学习「唯一」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "唯一（Unique）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「唯一」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「唯一」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「唯一」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "M4M_-vjM9GNy0NmXZneDA": {
      "scene": "学习「NOT NULL（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "NOT NULL（技术术语）（NOT NULL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「NOT NULL（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「NOT NULL（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「NOT NULL（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Q0h9Wfnl_W9ThOkv7Q17A": {
      "scene": "学习「CHECK（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "CHECK（技术术语）（CHECK）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「CHECK（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CHECK（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CHECK（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "8V6yw7kLaow-VVcv_K_pL": {
      "scene": "学习「JOIN 表连接Queries」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "JOIN 表连接Queries（JOIN Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「JOIN 表连接Queries」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "aaua13CkTxLOYXr8cAgPm": {
      "scene": "学习「INNER JOIN 内连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "INNER JOIN 内连接（INNER JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「INNER JOIN 内连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "X9cJJ8zLZCF2cOoqxwFfY": {
      "scene": "学习「LEFT JOIN 左连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "LEFT JOIN 左连接（LEFT JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「LEFT JOIN 左连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "shpgZkh1CLqUwjOaRtAFy": {
      "scene": "学习「RIGHT JOIN 右连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "RIGHT JOIN 右连接（RIGHT JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「RIGHT JOIN 右连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "aS5zCyJRA779yHF0G2pje": {
      "scene": "学习「全OUTERJOIN 表连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "全OUTERJOIN 表连接（FULL OUTER JOIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「全OUTERJOIN 表连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "6qG0AVYd6Y1B8LOSDoMX9": {
      "scene": "学习「SelfJOIN 表连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SelfJOIN 表连接（Self Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「SelfJOIN 表连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "7ow6tiSSCnTpv_GYQU017": {
      "scene": "学习「CrossJOIN 表连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "CrossJOIN 表连接（Cross Join）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「CrossJOIN 表连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "86iZ8s8EdhSuYwgwAM_EO": {
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
    "eXQ-TrTlqL5p2AdGnozkL": {
      "scene": "学习「Scalar（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Scalar（技术术语）（Scalar）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Scalar（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Scalar（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Scalar（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "wmtt-3auWLdQWuVdwZLPd": {
      "scene": "学习「Column（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Column（技术术语）（Column）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Column（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Column（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Column（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "aLDl75i8gtLRA2Ud-fMmQ": {
      "scene": "学习「Row（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Row（技术术语）（Row）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Row（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Row（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Row（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "R9WDMRd-3wxsKH97-sT3n": {
      "scene": "学习「TABLE 表」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "TABLE 表（Table）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「TABLE 表」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「TABLE 表」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「TABLE 表」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "xkPJ2MYiXmzC4yqQWyB_7": {
      "scene": "学习「Nested Subqueries（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Nested Subqueries（技术术语）（Nested Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Nested Subqueries（技术术语）」出现在哪：上游输入是什…",
          "text": "「Nested Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Nested Subqueries（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "JZqS3Xapw6mfSPVgFW7av": {
      "scene": "学习「Correlated Subqueries（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Correlated Subqueries（技术术语）（Correlated Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Correlated Subqueries（技术术语）」出现在哪：上游…",
          "text": "「Correlated Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Correlated Subqueries（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "vTMd0bqz4eTgLnhfgY61h": {
      "scene": "学习「进阶函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "进阶函数（Advanced Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「进阶函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「进阶函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「进阶函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "o2SH4iQn1Ap2yDZ7cVYLO": {
      "scene": "学习「FLOOR 向下取整函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "FLOOR 向下取整函数（FLOOR）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「FLOOR 向下取整函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「FLOOR 向下取整函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「FLOOR 向下取整函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "6vYFb_D1N_-tLWZftL-Az": {
      "scene": "学习「ABS 绝对值函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "ABS 绝对值函数（ABS）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「ABS 绝对值函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「ABS 绝对值函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ABS 绝对值函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "OUw--8zEq6lk5-6oySVHe": {
      "scene": "学习「MOD 取模函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "MOD 取模函数（MOD）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「MOD 取模函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「MOD 取模函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「MOD 取模函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "9DntFiZV1AyaRPhYP5q6u": {
      "scene": "学习「ROUND 四舍五入函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "ROUND 四舍五入函数（ROUND）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「ROUND 四舍五入函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「ROUND 四舍五入函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ROUND 四舍五入函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "BAqJQvcguhIhzyII5LRH6": {
      "scene": "学习「CEILING（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "CEILING（技术术语）（CEILING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「CEILING（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CEILING（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CEILING（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "5inpEqafeVCfqsURHzQQg": {
      "scene": "学习「CONCAT 拼接函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "CONCAT 拼接函数（CONCAT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「CONCAT 拼接函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CONCAT 拼接函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CONCAT 拼接函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "RH8DLiQpDUWqw3U1522q5": {
      "scene": "学习「LENGTH 长度函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "LENGTH 长度函数（LENGTH）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「LENGTH 长度函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「LENGTH 长度函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「LENGTH 长度函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "PnG_5D6q66NAKxXVOwA6N": {
      "scene": "学习「SUBSTRING 截取函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SUBSTRING 截取函数（SUBSTRING）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SUBSTRING 截取函数」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「SUBSTRING 截取函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SUBSTRING 截取函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "VNbb3YPc0FtrROylRns8h": {
      "scene": "学习「REPLACE（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "REPLACE（技术术语）（REPLACE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「REPLACE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「REPLACE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「REPLACE（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Othfo7NvTVzfyL906PLM1": {
      "scene": "学习「UPPER 转大写函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "UPPER 转大写函数（UPPER）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「UPPER 转大写函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「UPPER 转大写函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「UPPER 转大写函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "knTG6pAq2mYP24WMa29xI": {
      "scene": "学习「LOWER 转小写函数」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "LOWER 转小写函数（LOWER）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「LOWER 转小写函数」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「LOWER 转小写函数」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「LOWER 转小写函数」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "W2ePJHdfEiEJ3ZKoRQKt_": {
      "scene": "学习「CASE（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "CASE（技术术语）（CASE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「CASE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「CASE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CASE（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "KI6vngoYcHsnpIk8ErhhS": {
      "scene": "学习「NULLIF（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "NULLIF（技术术语）（NULLIF）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「NULLIF（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「NULLIF（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「NULLIF（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "k7lZe4QRt9q4InUImFmvx": {
      "scene": "学习「COALESCE（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "COALESCE（技术术语）（COALESCE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「COALESCE（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「COALESCE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「COALESCE（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Ivqo2wa-_NhGU3vGd0pUI": {
      "scene": "学习「DATE（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DATE（技术术语）（DATE）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DATE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DATE（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DATE（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "88KlrMqSza9_YaD7Dv61p": {
      "scene": "学习「TIME（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "TIME（技术术语）（TIME）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「TIME（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「TIME（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「TIME（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "7hEqkoxkdAWmakGZsMJx-": {
      "scene": "学习「TIMESTAMP（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "TIMESTAMP（技术术语）（TIMESTAMP）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「TIMESTAMP（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「TIMESTAMP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「TIMESTAMP（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "BJ4fQvagTO0B5UtXblyx8": {
      "scene": "学习「DATEPART（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DATEPART（技术术语）（DATEPART）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DATEPART（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「DATEPART（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DATEPART（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "1E1WdWOyqxbbdiIbw26dZ": {
      "scene": "学习「DATEADD（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DATEADD（技术术语）（DATEADD）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DATEADD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DATEADD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DATEADD（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "2tyezwOIxV6O84N-Q3Awh": {
      "scene": "学习「Views（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Views（技术术语）（Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Views（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Views（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Views（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "PcsGK4VBh0zNQIPZvNES4": {
      "scene": "学习「创建Views」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "创建Views（Creating Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「创建Views」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「创建Views」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「创建Views」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "3eE-l-P93nOXoWfLr8PSW": {
      "scene": "学习「Modifying Views（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Modifying Views（技术术语）（Modifying Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Modifying Views（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Modifying Views（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Modifying Views（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "MIOuWWcCjLAmgzog2DBC3": {
      "scene": "学习「Dropping Views（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Dropping Views（技术术语）（Dropping Views）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Dropping Views（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Dropping Views（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Dropping Views（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "LcljR70T-OnzSrJJDqOWf": {
      "scene": "学习「索引」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "索引（Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「索引」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「索引」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「索引」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "NtxGd6Vx-REBclry7lZuE": {
      "scene": "学习「管理索引」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "管理索引（Managing Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「管理索引」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「管理索引」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「管理索引」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "Ps9Yv2s-bKvEegGAbPsiA": {
      "scene": "学习「查询优化」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "查询优化（Query Optimization）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「查询优化」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「查询优化」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「查询优化」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "OdaBXz2XBAVLsQ-m7xtAM": {
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
    "7sTW1vwUhCFOMXYjScVEt": {
      "scene": "学习「BEGIN（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "BEGIN（技术术语）（BEGIN）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「BEGIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「BEGIN（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「BEGIN（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "3cMECz5QPVDOFrk5duObs": {
      "scene": "学习「COMMIT 提交」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "COMMIT 提交（COMMIT）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "工作区",
          "title": "工作区是你正在改的文件；git status 看哪些改了、哪些还没暂存。",
          "text": "工作区是你正在改的文件；git status 看哪些改了、哪些还没暂存。"
        },
        {
          "label": "git add",
          "title": "git add 把选中的改动放进暂存区，相当于“打包待提交”。",
          "text": "git add 把选中的改动放进暂存区，相当于“打包待提交”。"
        },
        {
          "label": "git commit",
          "title": "git commit 把暂存区快照写入本地仓库历史，附说明信息。",
          "text": "git commit 把暂存区快照写入本地仓库历史，附说明信息。"
        },
        {
          "label": "log/diff",
          "title": "git log / git diff 回顾历史，确认这次提交包含了什么。",
          "text": "git log / git diff 回顾历史，确认这次提交包含了什么。"
        }
      ],
      "confusion": "容易混淆的是：会说「COMMIT 提交」不等于会用。重点看 工作区 → git add → git commit → log/diff 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "xbD67KVlt3UhHpKh8HLx8": {
      "scene": "学习「ROLLBACK 回滚」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "ROLLBACK 回滚（ROLLBACK）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「ROLLBACK 回滚」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「ROLLBACK 回滚」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ROLLBACK 回滚」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "pJtYvXUo81aZfPuRjIbMq": {
      "scene": "学习「SAVEPOINT（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "SAVEPOINT（技术术语）（SAVEPOINT）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「SAVEPOINT（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「SAVEPOINT（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SAVEPOINT（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "igg34gLPl3HYVAmRNFGcV": {
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
    "ujeq8EIFcrqkBjoFizsJM": {
      "scene": "学习「事务隔离Levels」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "事务隔离Levels（Transaction Isolation Levels）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「事务隔离Levels」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「事务隔离Levels」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「事务隔离Levels」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "R1ktDJpXOz0PTllAcBrdu": {
      "scene": "学习「数据完整性与安全」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据完整性与安全（Data Integrity & Security）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据完整性与安全」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据完整性与安全」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「数据完整性与安全」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "mBQ3Z8GlFcpIena3IB7D_": {
      "scene": "学习「数据完整性约束」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "数据完整性约束（Data Integrity Constraints）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「数据完整性约束」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据完整性约束」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「数据完整性约束」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "03qMopxzjx_-dZbYw9b7J": {
      "scene": "学习「GRANT（技术术语）与Revoke（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "GRANT（技术术语）与Revoke（技术术语）（GRANT and Revoke）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「GRANT（技术术语）与Revoke（技术术语）」出现在哪：上游输入是…",
          "text": "「GRANT（技术术语）与Revoke（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GRANT（技术术语）与Revoke（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "vhBZqqmUcEon6-Vwvla4q": {
      "scene": "学习「DB安全最佳实践」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "DB安全最佳实践（DB Security Best Practices）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「DB安全最佳实践」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DB安全最佳实践」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DB安全最佳实践」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "w7FNjdwqjY7X69aJqqBy4": {
      "scene": "学习「StoredProcedures（技术术语）与Functions（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "StoredProcedures（技术术语）与Functions（技术术语）（Stored Procedures & Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「StoredProcedures（技术术语）与Functions（技术…",
          "text": "「StoredProcedures（技术术语）与Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「StoredProcedures（技术术语）与Functions（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "4rqCPpTb0dAgpheBKshRG": {
      "scene": "学习「性能优化」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "性能优化（Performance Optimization）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「性能优化」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「性能优化」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「性能优化」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "9wOgP0i9G4HSeZGn2Gm7r": {
      "scene": "学习「使用索引」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "使用索引（Using Indexes）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「使用索引」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「使用索引」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「使用索引」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "C0dhS6uLf4TUSfvcWyXhv": {
      "scene": "学习「OptimizingJOIN 表连接」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "OptimizingJOIN 表连接（Optimizing Joins）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
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
      "confusion": "容易混淆的是：会说「OptimizingJOIN 表连接」不等于会用。重点看 表关系 → JOIN 类型 → ON 条件 → EXPLAIN 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "UVTgbZrqpbYl1bQvQejcF": {
      "scene": "学习「Reducing Subqueries（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Reducing Subqueries（技术术语）（Reducing Subqueries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Reducing Subqueries（技术术语）」出现在哪：上游输入…",
          "text": "「Reducing Subqueries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Reducing Subqueries（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "w53CSY53nAAN0ux-XeJ4c": {
      "scene": "学习「Selective Projection（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Selective Projection（技术术语）（Selective Projection）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Selective Projection（技术术语）」出现在哪：上游输…",
          "text": "「Selective Projection（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Selective Projection（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "C6P69YiFdS-ioPXMNfX07": {
      "scene": "学习「查询AnalysisTechniques」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "查询AnalysisTechniques（Query Analysis Techniques）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「查询AnalysisTechniques」出现在哪：上游输入是什么，下…",
          "text": "「查询AnalysisTechniques」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「查询AnalysisTechniques」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "UDqbT1y-YzBrljfKSz_RG": {
      "scene": "学习「进阶SQL」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "进阶SQL（Advanced SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「进阶SQL」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「进阶SQL」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「进阶SQL」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "TjgwabhEtaSoYMLNr6q9l": {
      "scene": "学习「Recursive Queries（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Recursive Queries（技术术语）（Recursive Queries）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Recursive Queries（技术术语）」出现在哪：上游输入是什…",
          "text": "「Recursive Queries（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Recursive Queries（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "nwFaz9i-1s0WVrVaFsoqb": {
      "scene": "学习「Pivot / Unpivot Operations（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Pivot / Unpivot Operations（技术术语）（Pivot / Unpivot Operations）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Pivot / Unpivot Operations（技术术语）」出现…",
          "text": "「Pivot / Unpivot Operations（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Pivot / Unpivot Operations（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "tBvXLLp5FKeSSN35Kj1X4": {
      "scene": "学习「Window Functions（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Window Functions（技术术语）（Window Functions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Window Functions（技术术语）」出现在哪：上游输入是什么…",
          "text": "「Window Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Window Functions（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "tedQynR0xicVKhuR1oahw": {
      "scene": "学习「常见TABLE 表Expressions」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "常见TABLE 表Expressions（Common Table Expressions）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「常见TABLE 表Expressions」出现在哪：上游输入是什么，下…",
          "text": "「常见TABLE 表Expressions」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「常见TABLE 表Expressions」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "z5Sf0VU14ZCQ80kL1qOqc": {
      "scene": "学习「动态SQL」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "动态SQL（Dynamic SQL）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「动态SQL」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「动态SQL」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「动态SQL」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "zW27ZHdLwQY-85iqbBKQZ": {
      "scene": "学习「Row_number（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "Row_number（技术术语）（Row_number）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「Row_number（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Row_number（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Row_number（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "cucCPw3KfetAP2OMFUs0X": {
      "scene": "学习「rank（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "rank（技术术语）（rank）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「rank（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「rank（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「rank（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "QM0ltgPu8lLLYc2MsTLj-": {
      "scene": "学习「dense_rank（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "dense_rank（技术术语）（dense_rank）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「dense_rank（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「dense_rank（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「dense_rank（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "aJJjaGunRrwyh9MjQfJt-": {
      "scene": "学习「lead（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "lead（技术术语）（lead）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「lead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「lead（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「lead（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    },
    "BcXdxY6bld5c0YNFSKkh-": {
      "scene": "学习「lag（技术术语）」：把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "core": "lag（技术术语）（lag）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "route": [
        {
          "label": "理清表关系",
          "title": "「lag（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「lag（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「lag（技术术语）」不等于会用。重点看 理清表关系 → 写查询/变更 → 看执行计划 → 验证结果 这条链路。",
      "experiment": "准备一张 users 表和一张 orders 表，写一条查询、一条插入、一条更新；如果是 JOIN/索引/事务节点，要补一条 EXPLAIN 或事务回滚实验。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
