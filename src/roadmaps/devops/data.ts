import type { DeepLesson, Stage, Tutorial } from '../types';

const data = {
  "stages": [
    {
      "id": "stage-01",
      "zh": "阶段 01：学习aProgramming语言",
      "en": "Learn a Programming Language",
      "desc": "按 roadmap.sh 原始顺序整理的第 1 组学习节点。",
      "nodes": [
        {
          "id": "TwVfCYMS9jSaJ6UyYmC-K",
          "label": "Python",
          "zh": "Python（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2040,
          "y": 176,
          "w": 108,
          "h": 49
        },
        {
          "id": "PuXAPYA0bsMgwcnlwJxQn",
          "label": "Ruby",
          "zh": "Ruby（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2153,
          "y": 176,
          "w": 101,
          "h": 49
        },
        {
          "id": "v5FGKQc-_7NYEsWjmTEuq",
          "label": "Learn a Programming Language",
          "zh": "学习aProgramming语言",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1603,
          "y": 229,
          "w": 294,
          "h": 49
        },
        {
          "id": "npnMwSDEK2aLGgnuZZ4dO",
          "label": "Go",
          "zh": "Go（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2040,
          "y": 229,
          "w": 108,
          "h": 49
        },
        {
          "id": "eL62bKAoJCMsu7zPlgyhy",
          "label": "Rust",
          "zh": "Rust（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2153,
          "y": 229,
          "w": 101,
          "h": 49
        },
        {
          "id": "QCdemtWa2mE78poNXeqzr",
          "label": "JavaScript / Node.js",
          "zh": "JavaScript / Node.js 运行时",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2040,
          "y": 285,
          "w": 213,
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
      "zh": "阶段 02：Operating系统",
      "en": "Operating System",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "UOQimp7QkM3sxmFvk5d3i",
          "label": "Windows",
          "zh": "Windows（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1191,
          "y": 355,
          "w": 114,
          "h": 49
        },
        {
          "id": "qe84v529VbCyydl0BKFk2",
          "label": "Operating System",
          "zh": "Operating系统",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1353,
          "y": 355,
          "w": 195,
          "h": 49
        },
        {
          "id": "syBIAL1mHbJLnTBoSxXI7",
          "label": "Bash",
          "zh": "Bash（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1704,
          "y": 388,
          "w": 205,
          "h": 49
        },
        {
          "id": "z6IBekR8Xl-6f8WEb05Nw",
          "label": "Power Shell",
          "zh": "Power Shell（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1704,
          "y": 441,
          "w": 205,
          "h": 49
        },
        {
          "id": "x-JWvG1iw86ULL9KrQmRu",
          "label": "Process Monitoring",
          "zh": "进程监控",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2008,
          "y": 458,
          "w": 235,
          "h": 49
        },
        {
          "id": "PiPHFimToormOPl1EtEe8",
          "label": "FreeBSD",
          "zh": "FreeBSD（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1210,
          "y": 502,
          "w": 119,
          "h": 51
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
      "zh": "阶段 03：终端Knowledge",
      "en": "Terminal Knowledge",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "cTqVab0VbVcn3W7i0wBrX",
          "label": "Ubuntu / Debian",
          "zh": "Ubuntu / Debian（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1336,
          "y": 505,
          "w": 194,
          "h": 49
        },
        {
          "id": "gIEQDgKOsoEnSv8mpEzGH",
          "label": "Performance Monitoring",
          "zh": "性能监控",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2008,
          "y": 511,
          "w": 235,
          "h": 49
        },
        {
          "id": "wjJPzrFJBNYOD3SJLzW2M",
          "label": "Terminal Knowledge",
          "zh": "终端Knowledge",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1704,
          "y": 536,
          "w": 205,
          "h": 49
        },
        {
          "id": "97cJYKqv7CPPUXkKNwM4x",
          "label": "OpenBSD",
          "zh": "OpenBSD（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1210,
          "y": 557,
          "w": 119,
          "h": 49
        },
        {
          "id": "zhNUK953p6tjREndk3yQZ",
          "label": "SUSE Linux",
          "zh": "SUSE Linux（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1336,
          "y": 558,
          "w": 194,
          "h": 49
        },
        {
          "id": "OaqKLZe-XnngcDhDzCtRt",
          "label": "Networking Tools",
          "zh": "Networking Tools（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2008,
          "y": 564,
          "w": 235,
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
      "zh": "阶段 04：NetBSD（技术术语）",
      "en": "NetBSD",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "haiYSwNt3rjiiwCDszPk1",
          "label": "NetBSD",
          "zh": "NetBSD（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1210,
          "y": 610,
          "w": 119,
          "h": 49
        },
        {
          "id": "7mS6Y_BOAHNgM3OjyFtZ9",
          "label": "RHEL / Derivatives",
          "zh": "RHEL / Derivatives（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1336,
          "y": 611,
          "w": 194,
          "h": 49
        },
        {
          "id": "cUifrP7v55psTb20IZndf",
          "label": "Text Manipulation",
          "zh": "Text操纵",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2008,
          "y": 617,
          "w": 235,
          "h": 49
        },
        {
          "id": "Jt8BmtLUH6fHT2pGKoJs3",
          "label": "Vim / Nano /  Emacs",
          "zh": "Vim / Nano /  Emacs（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1704,
          "y": 623,
          "w": 205,
          "h": 49
        },
        {
          "id": "F93XnRj0BLswJkzyRggLS",
          "label": "Forward Proxy",
          "zh": "Forward代理",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1923,
          "y": 716,
          "w": 164,
          "h": 49
        },
        {
          "id": "eGF7iyigl57myx2ejpmNC",
          "label": "Reverse Proxy",
          "zh": "Reverse代理",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2090,
          "y": 716,
          "w": 158,
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
      "zh": "阶段 05：版本控制Systems",
      "en": "Version Control Systems",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "uyDm1SpOQdpHjq9zBAdck",
          "label": "Git",
          "zh": "Git（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1190,
          "y": 718,
          "w": 119,
          "h": 49
        },
        {
          "id": "LvhFmlxz5uIy7k_nzx2Bv",
          "label": "Version Control Systems",
          "zh": "版本控制Systems",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1348,
          "y": 718,
          "w": 239,
          "h": 49
        },
        {
          "id": "R4XSY4TSjU1M7cW66zUqJ",
          "label": "Caching Server",
          "zh": "缓存服务端",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1922,
          "y": 769,
          "w": 165,
          "h": 49
        },
        {
          "id": "f3tM2uo6LLSOmyeFfLc7h",
          "label": "Firewall",
          "zh": "防火墙",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2091,
          "y": 769,
          "w": 157,
          "h": 49
        },
        {
          "id": "P0acFNZ413MSKElHqCxr3",
          "label": "Docker",
          "zh": "Docker（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1665,
          "y": 772,
          "w": 137,
          "h": 49
        },
        {
          "id": "i8Sd9maB_BeFurULrHXNq",
          "label": "Load Balancer",
          "zh": "负载均衡",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1919,
          "y": 822,
          "w": 328,
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
      "zh": "阶段 06：版本控制Hosting",
      "en": "VCS Hosting",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "qYRJYIZsmf-inMqKECRkI",
          "label": "LXC",
          "zh": "LXC（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1665,
          "y": 825,
          "w": 137,
          "h": 49
        },
        {
          "id": "ot9I_IHdnq2yAMffrSrbN",
          "label": "GitHub",
          "zh": "GitHub（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1187,
          "y": 856,
          "w": 119,
          "h": 49
        },
        {
          "id": "oQIB0KE0BibjIYmxrpPZS",
          "label": "GitLab",
          "zh": "GitLab（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1187,
          "y": 909,
          "w": 119,
          "h": 49
        },
        {
          "id": "h10BH3OybHcIN2iDTSGkn",
          "label": "VCS Hosting",
          "zh": "版本控制Hosting",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1410,
          "y": 909,
          "w": 174,
          "h": 49
        },
        {
          "id": "CQhUflAcv1lhBnmDY0gaz",
          "label": "Containers",
          "zh": "容器",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1665,
          "y": 909,
          "w": 137,
          "h": 49
        },
        {
          "id": "jCWrnQNgjHKyhzd9dwOHz",
          "label": "What is and how to setup X ?",
          "zh": "什么是and如何to配置X?",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1976,
          "y": 909,
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
      "zh": "阶段 07：Bitbucket（技术术语）",
      "en": "Bitbucket",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "Z7SsBWgluZWr9iWb2e9XO",
          "label": "Bitbucket",
          "zh": "Bitbucket（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1187,
          "y": 962,
          "w": 119,
          "h": 49
        },
        {
          "id": "ukOrSeyK1ElOt9tTjCkfO",
          "label": "Nginx",
          "zh": "Nginx（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1997,
          "y": 1025,
          "w": 105,
          "h": 49
        },
        {
          "id": "54UZNO2q8M5FiA_XbcU_D",
          "label": "Caddy",
          "zh": "Caddy（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2105,
          "y": 1025,
          "w": 122,
          "h": 49
        },
        {
          "id": "RDLmML_HS2c8J4D_U_KYe",
          "label": "FTP / SFTP",
          "zh": "FTP / SFTP（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1206,
          "y": 1057,
          "w": 139,
          "h": 49
        },
        {
          "id": "Vu955vdsYerCG8G6suqml",
          "label": "DNS",
          "zh": "DNS（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1348,
          "y": 1057,
          "w": 102,
          "h": 49
        },
        {
          "id": "dF3otkMMN09tgCzci8Jyv",
          "label": "Tomcat",
          "zh": "Tomcat（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1997,
          "y": 1078,
          "w": 105,
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
      "zh": "阶段 08：Networking（技术术语）与Protocols（技术术语）",
      "en": "Networking & Protocols",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "0_GMTcMeZv3A8dYkHRoW7",
          "label": "Apache",
          "zh": "Apache（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2105,
          "y": 1078,
          "w": 122,
          "h": 49
        },
        {
          "id": "ke-8MeuLx7AS2XjSsPhxe",
          "label": "HTTP",
          "zh": "HTTP（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1206,
          "y": 1110,
          "w": 139,
          "h": 49
        },
        {
          "id": "AJO3jtHvIICj8YKaSXl0U",
          "label": "HTTPS",
          "zh": "HTTPS（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1348,
          "y": 1110,
          "w": 102,
          "h": 49
        },
        {
          "id": "5iJOE1QxMvf8BQ_8ssiI8",
          "label": "IIS",
          "zh": "IIS（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1997,
          "y": 1132,
          "w": 230,
          "h": 49
        },
        {
          "id": "w5d24Sf8GDkLDLGUPxzS9",
          "label": "Networking & Protocols",
          "zh": "Networking（技术术语）与Protocols（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1583,
          "y": 1138,
          "w": 255,
          "h": 49
        },
        {
          "id": "0o6ejhfpmO4S8A6djVWva",
          "label": "SSL / TLS",
          "zh": "SSL / TLS（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1207,
          "y": 1163,
          "w": 139,
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
      "zh": "阶段 09：Cloud Providers（技术术语）",
      "en": "Cloud Providers",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "wcIRMLVm3SdEJWF9RPfn7",
          "label": "SSH",
          "zh": "SSH（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1349,
          "y": 1163,
          "w": 102,
          "h": 49
        },
        {
          "id": "QZ7bkY-MaEgxYoPDP3nma",
          "label": "OSI Model",
          "zh": "OSI模型",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1206,
          "y": 1220,
          "w": 248,
          "h": 49
        },
        {
          "id": "2Wd9SlWGg6QtxgiUVLyZL",
          "label": "Cloud Providers",
          "zh": "Cloud Providers（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1585,
          "y": 1281,
          "w": 252,
          "h": 49
        },
        {
          "id": "9p_ufPj6QH9gHbWBQUmGw",
          "label": "Serverless",
          "zh": "无服务器",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1992,
          "y": 1281,
          "w": 230,
          "h": 49
        },
        {
          "id": "E-lSLGzgOPrz-25ER2Hk7",
          "label": "White / Grey Listing",
          "zh": "White / Grey Listing（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1206,
          "y": 1298,
          "w": 248,
          "h": 50
        },
        {
          "id": "UfQrIJ-uMNJt9H_VM_Q5q",
          "label": "AWS Lambda",
          "zh": "AWS Lambda（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2011,
          "y": 1341,
          "w": 194,
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
      "zh": "阶段 10：AWS（技术术语）",
      "en": "AWS",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "1ieK6B_oqW8qOC6bdmiJe",
          "label": "AWS",
          "zh": "AWS（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1599,
          "y": 1342,
          "w": 111,
          "h": 49
        },
        {
          "id": "ctor79Vd7EXDMdrLyUcu_",
          "label": "Azure",
          "zh": "Azure（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1714,
          "y": 1342,
          "w": 108,
          "h": 49
        },
        {
          "id": "zJy9dOynWgLTDKI1iBluG",
          "label": "SMTP",
          "zh": "SMTP（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1207,
          "y": 1351,
          "w": 118,
          "h": 49
        },
        {
          "id": "5vUKHuItQfkarp7LtACvX",
          "label": "DMARC",
          "zh": "DMARC（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1329,
          "y": 1351,
          "w": 122,
          "h": 49
        },
        {
          "id": "l8VAewSEXzoyqYFhoplJj",
          "label": "Cloudflare",
          "zh": "Cloudflare（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2011,
          "y": 1394,
          "w": 194,
          "h": 49
        },
        {
          "id": "zYrOxFQkl3KSe67fh3smD",
          "label": "Google Cloud",
          "zh": "Google Cloud（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1599,
          "y": 1395,
          "w": 224,
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
      "zh": "阶段 11：IMAP（技术术语）",
      "en": "IMAP",
      "desc": "按 roadmap.sh 原始顺序整理的第 11 组学习节点。",
      "nodes": [
        {
          "id": "WMuXqa4b5wyRuYAQKQJRj",
          "label": "IMAP",
          "zh": "IMAP（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1207,
          "y": 1404,
          "w": 118,
          "h": 49
        },
        {
          "id": "ewcJfnDFKXN8I5TLpXEaB",
          "label": "SPF",
          "zh": "SPF（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1329,
          "y": 1404,
          "w": 122,
          "h": 49
        },
        {
          "id": "mlrlf2McMI7IBhyEdq0Nf",
          "label": "Azure Functions",
          "zh": "Azure Functions（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2011,
          "y": 1447,
          "w": 194,
          "h": 49
        },
        {
          "id": "-h-kNVDNzZYnQAR_4lfXc",
          "label": "Digital Ocean",
          "zh": "Digital Ocean（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1599,
          "y": 1448,
          "w": 224,
          "h": 49
        },
        {
          "id": "fzO6xVTBxliu24f3W5zaU",
          "label": "POP3S",
          "zh": "POP3S（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1206,
          "y": 1457,
          "w": 248,
          "h": 49
        },
        {
          "id": "LZDRgDxEZ3klp2PrrJFBX",
          "label": "Vercel",
          "zh": "Vercel（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2011,
          "y": 1500,
          "w": 194,
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
      "zh": "阶段 12：Alibaba Cloud（技术术语）",
      "en": "Alibaba Cloud",
      "desc": "按 roadmap.sh 原始顺序整理的第 12 组学习节点。",
      "nodes": [
        {
          "id": "YUJf-6ccHvYjL_RzufQ-G",
          "label": "Alibaba Cloud",
          "zh": "Alibaba Cloud（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1599,
          "y": 1501,
          "w": 224,
          "h": 49
        },
        {
          "id": "RYCD78msIR2BPJoIP71aj",
          "label": "Domain Keys",
          "zh": "域密钥",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1206,
          "y": 1511,
          "w": 248,
          "h": 49
        },
        {
          "id": "hCKODV2b_l2uPit0YeP1M",
          "label": "Netlify",
          "zh": "Netlify（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2011,
          "y": 1553,
          "w": 194,
          "h": 49
        },
        {
          "id": "I327qPYGMcdayRR5WT0Ek",
          "label": "Hetzner",
          "zh": "Hetzner（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1599,
          "y": 1554,
          "w": 110,
          "h": 49
        },
        {
          "id": "eJZdjheptmiwKsVokt7Io",
          "label": "Contabo",
          "zh": "Contabo（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1714,
          "y": 1554,
          "w": 110,
          "h": 49
        },
        {
          "id": "JXsctlXUUS1ie8nNEgIk9",
          "label": "GCP Functions",
          "zh": "GCP Functions（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2011,
          "y": 1606,
          "w": 194,
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
      "zh": "阶段 13：Configuration管理",
      "en": "Configuration Management",
      "desc": "按 roadmap.sh 原始顺序整理的第 13 组学习节点。",
      "nodes": [
        {
          "id": "FaPf567JGRAg1MBlFj9Tk",
          "label": "Heroku",
          "zh": "Heroku（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1599,
          "y": 1607,
          "w": 224,
          "h": 49
        },
        {
          "id": "cjjMZdyLgakyVkImVQTza",
          "label": "Papertrail",
          "zh": "Papertrail（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1207,
          "y": 1688,
          "w": 154,
          "h": 49
        },
        {
          "id": "kv508kxzUj_CjZRb-TeRv",
          "label": "Chef",
          "zh": "Chef（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1402,
          "y": 1721,
          "w": 115,
          "h": 49
        },
        {
          "id": "h9vVPOmdUSeEGVQQaSTH5",
          "label": "Ansible",
          "zh": "Ansible（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1521,
          "y": 1721,
          "w": 115,
          "h": 49
        },
        {
          "id": "dZID_Y_uRTF8JlfDCqeqs",
          "label": "Splunk",
          "zh": "Splunk（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1207,
          "y": 1741,
          "w": 154,
          "h": 50
        },
        {
          "id": "V9sOxlNOyRp0Mghl7zudv",
          "label": "Configuration Management",
          "zh": "Configuration管理",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1697,
          "y": 1750,
          "w": 258,
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
      "zh": "阶段 14：Provisioning（技术术语）",
      "en": "Provisioning",
      "desc": "按 roadmap.sh 原始顺序整理的第 14 组学习节点。",
      "nodes": [
        {
          "id": "1oYvpFG8LKT1JD6a_9J0m",
          "label": "Provisioning",
          "zh": "Provisioning（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 2022,
          "y": 1750,
          "w": 170,
          "h": 49
        },
        {
          "id": "Kumwd6XOlEMeDohDH0q9P",
          "label": "Salt",
          "zh": "Salt（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1402,
          "y": 1774,
          "w": 115,
          "h": 49
        },
        {
          "id": "yP1y8U3eblpzbaLiCGliU",
          "label": "Puppet",
          "zh": "Puppet（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1521,
          "y": 1774,
          "w": 115,
          "h": 49
        },
        {
          "id": "w2eCgBC-ydMHSxh7LMti8",
          "label": "Loki",
          "zh": "Loki（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1207,
          "y": 1795,
          "w": 154,
          "h": 49
        },
        {
          "id": "XA__697KgofsH28coQ-ma",
          "label": "AWS CDK",
          "zh": "AWS CDK（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2023,
          "y": 1837,
          "w": 168,
          "h": 49
        },
        {
          "id": "K_qLhK2kKN_uCq7iVjqph",
          "label": "Elastic Stack",
          "zh": "Elastic Stack（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1207,
          "y": 1848,
          "w": 154,
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
      "zh": "阶段 15：CloudFormation（技术术语）",
      "en": "CloudFormation",
      "desc": "按 roadmap.sh 原始顺序整理的第 15 组学习节点。",
      "nodes": [
        {
          "id": "TgBb4aL_9UkyU36CN4qvS",
          "label": "CloudFormation",
          "zh": "CloudFormation（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2023,
          "y": 1890,
          "w": 168,
          "h": 49
        },
        {
          "id": "L000AbzF3oLcn4B1eUIYX",
          "label": "TeamCity",
          "zh": "TeamCity（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1439,
          "y": 1897,
          "w": 126,
          "h": 49
        },
        {
          "id": "dUapFp3f0Rum-rf_Vk_b-",
          "label": "Jenkins",
          "zh": "Jenkins（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1567,
          "y": 1897,
          "w": 124,
          "h": 49
        },
        {
          "id": "s_kss4FJ2KyZRdcKNHK2v",
          "label": "Graylog",
          "zh": "Graylog（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1207,
          "y": 1901,
          "w": 154,
          "h": 49
        },
        {
          "id": "O0xZ3dy2zIDbOetVrgna6",
          "label": "Pulumi",
          "zh": "Pulumi（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2023,
          "y": 1943,
          "w": 168,
          "h": 49
        },
        {
          "id": "2KjSLLVTvl2G2KValw7S7",
          "label": "GitLab CI",
          "zh": "GitLab CI（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1439,
          "y": 1948,
          "w": 126,
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
      "zh": "阶段 16：CI / CD Tools（技术术语）",
      "en": "CI / CD Tools",
      "desc": "按 roadmap.sh 原始顺序整理的第 16 组学习节点。",
      "nodes": [
        {
          "id": "1-JneOQeGhox-CKrdiquq",
          "label": "Circle CI",
          "zh": "Circle CI（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1567,
          "y": 1950,
          "w": 124,
          "h": 49
        },
        {
          "id": "aQJaouIaxIJChM-40M3HQ",
          "label": "CI / CD Tools",
          "zh": "CI / CD Tools（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1786,
          "y": 1971,
          "w": 154,
          "h": 49
        },
        {
          "id": "nUBGf1rp9GK_pbagWCP9g",
          "label": "Terraform",
          "zh": "Terraform（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2023,
          "y": 1997,
          "w": 168,
          "h": 49
        },
        {
          "id": "TsXFx1wWikVBVoFUUDAMx",
          "label": "Octopus Deploy",
          "zh": "Octopus Deploy（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1439,
          "y": 2003,
          "w": 252,
          "h": 49
        },
        {
          "id": "gaoZjOYmU0J5aM6vtLNvN",
          "label": "Logs Management",
          "zh": "Logs管理",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1187,
          "y": 2010,
          "w": 194,
          "h": 49
        },
        {
          "id": "JnWVCS1HbAyfCJzGt-WOH",
          "label": "GitHub Actions",
          "zh": "GitHub Actions（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1439,
          "y": 2056,
          "w": 252,
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
      "zh": "阶段 17：基础设施监控",
      "en": "Infrastructure Monitoring",
      "desc": "按 roadmap.sh 原始顺序整理的第 17 组学习节点。",
      "nodes": [
        {
          "id": "ZWq23Q9ZNxLNti68oltxA",
          "label": "Sealed Secrets",
          "zh": "Sealed Secrets（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2006,
          "y": 2082,
          "w": 164,
          "h": 49
        },
        {
          "id": "lUUJAEBrGJvL8dRs2n1GD",
          "label": "ESO",
          "zh": "ESO（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2174,
          "y": 2082,
          "w": 72,
          "h": 49
        },
        {
          "id": "qqRLeTpuoW64H9LvY0U_w",
          "label": "Infrastructure Monitoring",
          "zh": "基础设施监控",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1438,
          "y": 2136,
          "w": 239,
          "h": 49
        },
        {
          "id": "hcrPpjFxPi_iLiMdLKJrO",
          "label": "Secret Management",
          "zh": "密钥管理",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1725,
          "y": 2136,
          "w": 205,
          "h": 49
        },
        {
          "id": "tZzvs80KzqT8aDvEyjack",
          "label": "Vault",
          "zh": "Vault（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2006,
          "y": 2136,
          "w": 118,
          "h": 49
        },
        {
          "id": "GHQWHLxsO40kJ6z_YCinJ",
          "label": "SOPs",
          "zh": "SOPs（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2128,
          "y": 2136,
          "w": 118,
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
      "zh": "阶段 18：Cloud Specific Tools（技术术语）",
      "en": "Cloud Specific Tools",
      "desc": "按 roadmap.sh 原始顺序整理的第 18 组学习节点。",
      "nodes": [
        {
          "id": "yQ4d2uiROZYr950cjYnQE",
          "label": "Cloud Specific Tools",
          "zh": "Cloud Specific Tools（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2006,
          "y": 2190,
          "w": 239,
          "h": 49
        },
        {
          "id": "NiVvRbCOCDpVvif48poCo",
          "label": "Prometheus",
          "zh": "Prometheus（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1443,
          "y": 2222,
          "w": 231,
          "h": 49
        },
        {
          "id": "C_sFyIsIIpriZlovvcbSE",
          "label": "Artifactory",
          "zh": "Artifactory（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1804,
          "y": 2223,
          "w": 157,
          "h": 49
        },
        {
          "id": "niA_96yR7uQ0sc6S_OStf",
          "label": "Grafana",
          "zh": "Grafana（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1443,
          "y": 2275,
          "w": 229,
          "h": 49
        },
        {
          "id": "ootuLJfRXarVvm3J1Ir11",
          "label": "Nexus",
          "zh": "Nexus（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1805,
          "y": 2275,
          "w": 155,
          "h": 49
        },
        {
          "id": "i-DLwNXdCUUug6lfjkPSy",
          "label": "ArgoCD",
          "zh": "ArgoCD（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2040,
          "y": 2275,
          "w": 172,
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
      "zh": "阶段 19：容器编排",
      "en": "Container Orchestration",
      "desc": "按 roadmap.sh 原始顺序整理的第 19 组学习节点。",
      "nodes": [
        {
          "id": "vsmE6EpCc2DFGk1YTbkHS",
          "label": "Cloud Smith",
          "zh": "Cloud Smith（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1806,
          "y": 2327,
          "w": 154,
          "h": 49
        },
        {
          "id": "6gVV_JUgKgwJb4C8tHZn7",
          "label": "FluxCD",
          "zh": "FluxCD（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 2040,
          "y": 2328,
          "w": 172,
          "h": 49
        },
        {
          "id": "W9sKEoDlR8LzocQkqSv82",
          "label": "Zabbix",
          "zh": "Zabbix（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1444,
          "y": 2329,
          "w": 117,
          "h": 49
        },
        {
          "id": "bujq_C-ejtpmk-ICALByy",
          "label": "Datadog",
          "zh": "Datadog（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1564,
          "y": 2329,
          "w": 108,
          "h": 49
        },
        {
          "id": "Yq8kVoRf20aL_o4VZU5--",
          "label": "Container Orchestration",
          "zh": "容器编排",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1192,
          "y": 2415,
          "w": 232,
          "h": 49
        },
        {
          "id": "wNguM6-YEznduz3MgBCYo",
          "label": "Observability",
          "zh": "Observability（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1492,
          "y": 2415,
          "w": 218,
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
      "zh": "阶段 20：Artifact管理",
      "en": "Artifact Management",
      "desc": "按 roadmap.sh 原始顺序整理的第 20 组学习节点。",
      "nodes": [
        {
          "id": "zuBAjrqQPjj-0DHGjCaqT",
          "label": "Artifact Management",
          "zh": "Artifact管理",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1776,
          "y": 2415,
          "w": 214,
          "h": 49
        },
        {
          "id": "-INN1qTMLimrZgaSPCcHj",
          "label": "GitOps",
          "zh": "GitOps（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 2040,
          "y": 2415,
          "w": 172,
          "h": 49
        },
        {
          "id": "8rd7T5ahK2I_zh5co-IF-",
          "label": "Jaeger",
          "zh": "Jaeger（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1511,
          "y": 2503,
          "w": 180,
          "h": 49
        },
        {
          "id": "XbrWlTyH4z8crSHkki2lp",
          "label": "GKE / EKS / AKS",
          "zh": "GKE / EKS / AKS（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1192,
          "y": 2504,
          "w": 232,
          "h": 49
        },
        {
          "id": "XsSnqW6k2IzvmrMmJeU6a",
          "label": "Istio",
          "zh": "Istio（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1830,
          "y": 2526,
          "w": 111,
          "h": 49
        },
        {
          "id": "pk76Us6z8LoX3f0mhnCyR",
          "label": "New Relic",
          "zh": "New Relic（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1511,
          "y": 2556,
          "w": 180,
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
      "zh": "阶段 21：服务Mesh",
      "en": "Service Mesh",
      "desc": "按 roadmap.sh 原始顺序整理的第 21 组学习节点。",
      "nodes": [
        {
          "id": "FE2h-uQy6qli3rKERci1j",
          "label": "AWS ECS / Fargate",
          "zh": "AWS ECS / Fargate（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1192,
          "y": 2557,
          "w": 232,
          "h": 49
        },
        {
          "id": "OXOTm3nz6o44p50qd0brN",
          "label": "Consul",
          "zh": "Consul（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1830,
          "y": 2579,
          "w": 111,
          "h": 49
        },
        {
          "id": "EeWsihH9ehbFKebYoB5i9",
          "label": "Service Mesh",
          "zh": "服务Mesh",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 2040,
          "y": 2603,
          "w": 172,
          "h": 49
        },
        {
          "id": "BHny2Emf96suhAlltiEro",
          "label": "Datadog",
          "zh": "Datadog（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1511,
          "y": 2609,
          "w": 180,
          "h": 49
        },
        {
          "id": "VD24HC9qJOC42lbpJ-swC",
          "label": "Docker Swarm",
          "zh": "Docker Swarm（命令）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1192,
          "y": 2610,
          "w": 232,
          "h": 49
        },
        {
          "id": "hhoSe4q1u850PgK62Ubau",
          "label": "Linkerd",
          "zh": "Linkerd（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1830,
          "y": 2632,
          "w": 111,
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
      "zh": "阶段 22：Prometheus（技术术语）",
      "en": "Prometheus",
      "desc": "按 roadmap.sh 原始顺序整理的第 22 组学习节点。",
      "nodes": [
        {
          "id": "eOyu4wmKOrcMlhD8pUGGh",
          "label": "Prometheus",
          "zh": "Prometheus（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1511,
          "y": 2662,
          "w": 180,
          "h": 49
        },
        {
          "id": "hIBeTUiAI3zwUY6NgAO-A",
          "label": "Kubernetes",
          "zh": "Kubernetes（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1192,
          "y": 2663,
          "w": 232,
          "h": 49
        },
        {
          "id": "epLLYArR16HlhAS4c33b4",
          "label": "Envoy",
          "zh": "Envoy（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1830,
          "y": 2685,
          "w": 111,
          "h": 49
        },
        {
          "id": "K81bmtgnB1gfhYdi3TB5a",
          "label": "OpenTelemetry",
          "zh": "OpenTelemetry（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1511,
          "y": 2715,
          "w": 180,
          "h": 49
        },
        {
          "id": "3GryoQuI67JTHg9r3xUHO",
          "label": "OpenShift",
          "zh": "OpenShift（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1192,
          "y": 2716,
          "w": 232,
          "h": 49
        },
        {
          "id": "4aJVaimsuvGIPXMZ_WjaA",
          "label": "Dynatrace",
          "zh": "Dynatrace（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1511,
          "y": 2768,
          "w": 180,
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
      "zh": "阶段 23：云设计模式",
      "en": "Cloud Design Patterns",
      "desc": "按 roadmap.sh 原始顺序整理的第 23 组学习节点。",
      "nodes": [
        {
          "id": "JCe3fcOf-sokTJURyX1oI",
          "label": "Availability",
          "zh": "可用性",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1193,
          "y": 2830,
          "w": 269,
          "h": 49
        },
        {
          "id": "5FN7iva4DW_lv-r1tijd8",
          "label": "Data Management",
          "zh": "数据管理",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1193,
          "y": 2882,
          "w": 269,
          "h": 49
        },
        {
          "id": "Qc0MGR5bMG9eeM5Zb9PMk",
          "label": "Cloud Design Patterns",
          "zh": "云设计模式",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 1585,
          "y": 2905,
          "w": 234,
          "h": 49
        },
        {
          "id": "1_NRXjckZ0F8EtEmgixqz",
          "label": "Design and Implementation",
          "zh": "设计与Implementation（技术术语）",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1193,
          "y": 2934,
          "w": 269,
          "h": 49
        },
        {
          "id": "8kby89epyullS9W7uKDrs",
          "label": "Management and Monitoring",
          "zh": "管理与监控",
          "desc": "DevOps 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 1193,
          "y": 2986,
          "w": 269,
          "h": 49
        }
      ],
      "index": 23,
      "mapX": 610,
      "mapY": 1870,
      "mapW": 430,
      "mapH": 308
    }
  ],
  "nodes": [
    {
      "id": "v5FGKQc-_7NYEsWjmTEuq",
      "label": "Learn a Programming Language",
      "zh": "学习aProgramming语言",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1603,
      "y": 229,
      "w": 294,
      "h": 49
    },
    {
      "id": "TwVfCYMS9jSaJ6UyYmC-K",
      "label": "Python",
      "zh": "Python（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2040,
      "y": 176,
      "w": 108,
      "h": 49
    },
    {
      "id": "PuXAPYA0bsMgwcnlwJxQn",
      "label": "Ruby",
      "zh": "Ruby（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2153,
      "y": 176,
      "w": 101,
      "h": 49
    },
    {
      "id": "npnMwSDEK2aLGgnuZZ4dO",
      "label": "Go",
      "zh": "Go（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2040,
      "y": 229,
      "w": 108,
      "h": 49
    },
    {
      "id": "eL62bKAoJCMsu7zPlgyhy",
      "label": "Rust",
      "zh": "Rust（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2153,
      "y": 229,
      "w": 101,
      "h": 49
    },
    {
      "id": "QCdemtWa2mE78poNXeqzr",
      "label": "JavaScript / Node.js",
      "zh": "JavaScript / Node.js 运行时",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2040,
      "y": 285,
      "w": 213,
      "h": 49
    },
    {
      "id": "qe84v529VbCyydl0BKFk2",
      "label": "Operating System",
      "zh": "Operating系统",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1353,
      "y": 355,
      "w": 195,
      "h": 49
    },
    {
      "id": "cTqVab0VbVcn3W7i0wBrX",
      "label": "Ubuntu / Debian",
      "zh": "Ubuntu / Debian（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1336,
      "y": 505,
      "w": 194,
      "h": 49
    },
    {
      "id": "zhNUK953p6tjREndk3yQZ",
      "label": "SUSE Linux",
      "zh": "SUSE Linux（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1336,
      "y": 558,
      "w": 194,
      "h": 49
    },
    {
      "id": "7mS6Y_BOAHNgM3OjyFtZ9",
      "label": "RHEL / Derivatives",
      "zh": "RHEL / Derivatives（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1336,
      "y": 611,
      "w": 194,
      "h": 49
    },
    {
      "id": "PiPHFimToormOPl1EtEe8",
      "label": "FreeBSD",
      "zh": "FreeBSD（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1210,
      "y": 502,
      "w": 119,
      "h": 51
    },
    {
      "id": "97cJYKqv7CPPUXkKNwM4x",
      "label": "OpenBSD",
      "zh": "OpenBSD（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1210,
      "y": 557,
      "w": 119,
      "h": 49
    },
    {
      "id": "haiYSwNt3rjiiwCDszPk1",
      "label": "NetBSD",
      "zh": "NetBSD（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1210,
      "y": 610,
      "w": 119,
      "h": 49
    },
    {
      "id": "UOQimp7QkM3sxmFvk5d3i",
      "label": "Windows",
      "zh": "Windows（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1191,
      "y": 355,
      "w": 114,
      "h": 49
    },
    {
      "id": "wjJPzrFJBNYOD3SJLzW2M",
      "label": "Terminal Knowledge",
      "zh": "终端Knowledge",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1704,
      "y": 536,
      "w": 205,
      "h": 49
    },
    {
      "id": "x-JWvG1iw86ULL9KrQmRu",
      "label": "Process Monitoring",
      "zh": "进程监控",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2008,
      "y": 458,
      "w": 235,
      "h": 49
    },
    {
      "id": "gIEQDgKOsoEnSv8mpEzGH",
      "label": "Performance Monitoring",
      "zh": "性能监控",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2008,
      "y": 511,
      "w": 235,
      "h": 49
    },
    {
      "id": "OaqKLZe-XnngcDhDzCtRt",
      "label": "Networking Tools",
      "zh": "Networking Tools（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2008,
      "y": 564,
      "w": 235,
      "h": 49
    },
    {
      "id": "cUifrP7v55psTb20IZndf",
      "label": "Text Manipulation",
      "zh": "Text操纵",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2008,
      "y": 617,
      "w": 235,
      "h": 49
    },
    {
      "id": "syBIAL1mHbJLnTBoSxXI7",
      "label": "Bash",
      "zh": "Bash（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1704,
      "y": 388,
      "w": 205,
      "h": 49
    },
    {
      "id": "z6IBekR8Xl-6f8WEb05Nw",
      "label": "Power Shell",
      "zh": "Power Shell（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1704,
      "y": 441,
      "w": 205,
      "h": 49
    },
    {
      "id": "Jt8BmtLUH6fHT2pGKoJs3",
      "label": "Vim / Nano /  Emacs",
      "zh": "Vim / Nano /  Emacs（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1704,
      "y": 623,
      "w": 205,
      "h": 49
    },
    {
      "id": "LvhFmlxz5uIy7k_nzx2Bv",
      "label": "Version Control Systems",
      "zh": "版本控制Systems",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1348,
      "y": 718,
      "w": 239,
      "h": 49
    },
    {
      "id": "uyDm1SpOQdpHjq9zBAdck",
      "label": "Git",
      "zh": "Git（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1190,
      "y": 718,
      "w": 119,
      "h": 49
    },
    {
      "id": "h10BH3OybHcIN2iDTSGkn",
      "label": "VCS Hosting",
      "zh": "版本控制Hosting",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1410,
      "y": 909,
      "w": 174,
      "h": 49
    },
    {
      "id": "ot9I_IHdnq2yAMffrSrbN",
      "label": "GitHub",
      "zh": "GitHub（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1187,
      "y": 856,
      "w": 119,
      "h": 49
    },
    {
      "id": "oQIB0KE0BibjIYmxrpPZS",
      "label": "GitLab",
      "zh": "GitLab（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1187,
      "y": 909,
      "w": 119,
      "h": 49
    },
    {
      "id": "Z7SsBWgluZWr9iWb2e9XO",
      "label": "Bitbucket",
      "zh": "Bitbucket（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1187,
      "y": 962,
      "w": 119,
      "h": 49
    },
    {
      "id": "jCWrnQNgjHKyhzd9dwOHz",
      "label": "What is and how to setup X ?",
      "zh": "什么是and如何to配置X?",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1976,
      "y": 909,
      "w": 270,
      "h": 49
    },
    {
      "id": "F93XnRj0BLswJkzyRggLS",
      "label": "Forward Proxy",
      "zh": "Forward代理",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1923,
      "y": 716,
      "w": 164,
      "h": 49
    },
    {
      "id": "f3tM2uo6LLSOmyeFfLc7h",
      "label": "Firewall",
      "zh": "防火墙",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2091,
      "y": 769,
      "w": 157,
      "h": 49
    },
    {
      "id": "ukOrSeyK1ElOt9tTjCkfO",
      "label": "Nginx",
      "zh": "Nginx（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1997,
      "y": 1025,
      "w": 105,
      "h": 49
    },
    {
      "id": "dF3otkMMN09tgCzci8Jyv",
      "label": "Tomcat",
      "zh": "Tomcat（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1997,
      "y": 1078,
      "w": 105,
      "h": 49
    },
    {
      "id": "0_GMTcMeZv3A8dYkHRoW7",
      "label": "Apache",
      "zh": "Apache（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2105,
      "y": 1078,
      "w": 122,
      "h": 49
    },
    {
      "id": "54UZNO2q8M5FiA_XbcU_D",
      "label": "Caddy",
      "zh": "Caddy（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2105,
      "y": 1025,
      "w": 122,
      "h": 49
    },
    {
      "id": "5iJOE1QxMvf8BQ_8ssiI8",
      "label": "IIS",
      "zh": "IIS（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1997,
      "y": 1132,
      "w": 230,
      "h": 49
    },
    {
      "id": "R4XSY4TSjU1M7cW66zUqJ",
      "label": "Caching Server",
      "zh": "缓存服务端",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1922,
      "y": 769,
      "w": 165,
      "h": 49
    },
    {
      "id": "i8Sd9maB_BeFurULrHXNq",
      "label": "Load Balancer",
      "zh": "负载均衡",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1919,
      "y": 822,
      "w": 328,
      "h": 49
    },
    {
      "id": "eGF7iyigl57myx2ejpmNC",
      "label": "Reverse Proxy",
      "zh": "Reverse代理",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2090,
      "y": 716,
      "w": 158,
      "h": 49
    },
    {
      "id": "CQhUflAcv1lhBnmDY0gaz",
      "label": "Containers",
      "zh": "容器",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1665,
      "y": 909,
      "w": 137,
      "h": 49
    },
    {
      "id": "P0acFNZ413MSKElHqCxr3",
      "label": "Docker",
      "zh": "Docker（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1665,
      "y": 772,
      "w": 137,
      "h": 49
    },
    {
      "id": "qYRJYIZsmf-inMqKECRkI",
      "label": "LXC",
      "zh": "LXC（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1665,
      "y": 825,
      "w": 137,
      "h": 49
    },
    {
      "id": "2Wd9SlWGg6QtxgiUVLyZL",
      "label": "Cloud Providers",
      "zh": "Cloud Providers（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1585,
      "y": 1281,
      "w": 252,
      "h": 49
    },
    {
      "id": "1ieK6B_oqW8qOC6bdmiJe",
      "label": "AWS",
      "zh": "AWS（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1599,
      "y": 1342,
      "w": 111,
      "h": 49
    },
    {
      "id": "ctor79Vd7EXDMdrLyUcu_",
      "label": "Azure",
      "zh": "Azure（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1714,
      "y": 1342,
      "w": 108,
      "h": 49
    },
    {
      "id": "zYrOxFQkl3KSe67fh3smD",
      "label": "Google Cloud",
      "zh": "Google Cloud（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1599,
      "y": 1395,
      "w": 224,
      "h": 49
    },
    {
      "id": "-h-kNVDNzZYnQAR_4lfXc",
      "label": "Digital Ocean",
      "zh": "Digital Ocean（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1599,
      "y": 1448,
      "w": 224,
      "h": 49
    },
    {
      "id": "YUJf-6ccHvYjL_RzufQ-G",
      "label": "Alibaba Cloud",
      "zh": "Alibaba Cloud（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1599,
      "y": 1501,
      "w": 224,
      "h": 49
    },
    {
      "id": "I327qPYGMcdayRR5WT0Ek",
      "label": "Hetzner",
      "zh": "Hetzner（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1599,
      "y": 1554,
      "w": 110,
      "h": 49
    },
    {
      "id": "FaPf567JGRAg1MBlFj9Tk",
      "label": "Heroku",
      "zh": "Heroku（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1599,
      "y": 1607,
      "w": 224,
      "h": 49
    },
    {
      "id": "eJZdjheptmiwKsVokt7Io",
      "label": "Contabo",
      "zh": "Contabo（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1714,
      "y": 1554,
      "w": 110,
      "h": 49
    },
    {
      "id": "RDLmML_HS2c8J4D_U_KYe",
      "label": "FTP / SFTP",
      "zh": "FTP / SFTP（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1206,
      "y": 1057,
      "w": 139,
      "h": 49
    },
    {
      "id": "Vu955vdsYerCG8G6suqml",
      "label": "DNS",
      "zh": "DNS（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1348,
      "y": 1057,
      "w": 102,
      "h": 49
    },
    {
      "id": "ke-8MeuLx7AS2XjSsPhxe",
      "label": "HTTP",
      "zh": "HTTP（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1206,
      "y": 1110,
      "w": 139,
      "h": 49
    },
    {
      "id": "AJO3jtHvIICj8YKaSXl0U",
      "label": "HTTPS",
      "zh": "HTTPS（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1348,
      "y": 1110,
      "w": 102,
      "h": 49
    },
    {
      "id": "0o6ejhfpmO4S8A6djVWva",
      "label": "SSL / TLS",
      "zh": "SSL / TLS（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1207,
      "y": 1163,
      "w": 139,
      "h": 49
    },
    {
      "id": "wcIRMLVm3SdEJWF9RPfn7",
      "label": "SSH",
      "zh": "SSH（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1349,
      "y": 1163,
      "w": 102,
      "h": 49
    },
    {
      "id": "E-lSLGzgOPrz-25ER2Hk7",
      "label": "White / Grey Listing",
      "zh": "White / Grey Listing（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1206,
      "y": 1298,
      "w": 248,
      "h": 50
    },
    {
      "id": "zJy9dOynWgLTDKI1iBluG",
      "label": "SMTP",
      "zh": "SMTP（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1207,
      "y": 1351,
      "w": 118,
      "h": 49
    },
    {
      "id": "5vUKHuItQfkarp7LtACvX",
      "label": "DMARC",
      "zh": "DMARC（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1329,
      "y": 1351,
      "w": 122,
      "h": 49
    },
    {
      "id": "WMuXqa4b5wyRuYAQKQJRj",
      "label": "IMAP",
      "zh": "IMAP（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1207,
      "y": 1404,
      "w": 118,
      "h": 49
    },
    {
      "id": "ewcJfnDFKXN8I5TLpXEaB",
      "label": "SPF",
      "zh": "SPF（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1329,
      "y": 1404,
      "w": 122,
      "h": 49
    },
    {
      "id": "fzO6xVTBxliu24f3W5zaU",
      "label": "POP3S",
      "zh": "POP3S（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1206,
      "y": 1457,
      "w": 248,
      "h": 49
    },
    {
      "id": "RYCD78msIR2BPJoIP71aj",
      "label": "Domain Keys",
      "zh": "域密钥",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1206,
      "y": 1511,
      "w": 248,
      "h": 49
    },
    {
      "id": "QZ7bkY-MaEgxYoPDP3nma",
      "label": "OSI Model",
      "zh": "OSI模型",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1206,
      "y": 1220,
      "w": 248,
      "h": 49
    },
    {
      "id": "w5d24Sf8GDkLDLGUPxzS9",
      "label": "Networking & Protocols",
      "zh": "Networking（技术术语）与Protocols（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1583,
      "y": 1138,
      "w": 255,
      "h": 49
    },
    {
      "id": "9p_ufPj6QH9gHbWBQUmGw",
      "label": "Serverless",
      "zh": "无服务器",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1992,
      "y": 1281,
      "w": 230,
      "h": 49
    },
    {
      "id": "LZDRgDxEZ3klp2PrrJFBX",
      "label": "Vercel",
      "zh": "Vercel（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2011,
      "y": 1500,
      "w": 194,
      "h": 49
    },
    {
      "id": "l8VAewSEXzoyqYFhoplJj",
      "label": "Cloudflare",
      "zh": "Cloudflare（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2011,
      "y": 1394,
      "w": 194,
      "h": 49
    },
    {
      "id": "mlrlf2McMI7IBhyEdq0Nf",
      "label": "Azure Functions",
      "zh": "Azure Functions（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2011,
      "y": 1447,
      "w": 194,
      "h": 49
    },
    {
      "id": "UfQrIJ-uMNJt9H_VM_Q5q",
      "label": "AWS Lambda",
      "zh": "AWS Lambda（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2011,
      "y": 1341,
      "w": 194,
      "h": 49
    },
    {
      "id": "hCKODV2b_l2uPit0YeP1M",
      "label": "Netlify",
      "zh": "Netlify（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2011,
      "y": 1553,
      "w": 194,
      "h": 49
    },
    {
      "id": "1oYvpFG8LKT1JD6a_9J0m",
      "label": "Provisioning",
      "zh": "Provisioning（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 2022,
      "y": 1750,
      "w": 170,
      "h": 49
    },
    {
      "id": "XA__697KgofsH28coQ-ma",
      "label": "AWS CDK",
      "zh": "AWS CDK（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2023,
      "y": 1837,
      "w": 168,
      "h": 49
    },
    {
      "id": "TgBb4aL_9UkyU36CN4qvS",
      "label": "CloudFormation",
      "zh": "CloudFormation（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2023,
      "y": 1890,
      "w": 168,
      "h": 49
    },
    {
      "id": "O0xZ3dy2zIDbOetVrgna6",
      "label": "Pulumi",
      "zh": "Pulumi（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2023,
      "y": 1943,
      "w": 168,
      "h": 49
    },
    {
      "id": "nUBGf1rp9GK_pbagWCP9g",
      "label": "Terraform",
      "zh": "Terraform（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2023,
      "y": 1997,
      "w": 168,
      "h": 49
    },
    {
      "id": "V9sOxlNOyRp0Mghl7zudv",
      "label": "Configuration Management",
      "zh": "Configuration管理",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1697,
      "y": 1750,
      "w": 258,
      "h": 49
    },
    {
      "id": "h9vVPOmdUSeEGVQQaSTH5",
      "label": "Ansible",
      "zh": "Ansible（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1521,
      "y": 1721,
      "w": 115,
      "h": 49
    },
    {
      "id": "kv508kxzUj_CjZRb-TeRv",
      "label": "Chef",
      "zh": "Chef（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1402,
      "y": 1721,
      "w": 115,
      "h": 49
    },
    {
      "id": "yP1y8U3eblpzbaLiCGliU",
      "label": "Puppet",
      "zh": "Puppet（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1521,
      "y": 1774,
      "w": 115,
      "h": 49
    },
    {
      "id": "aQJaouIaxIJChM-40M3HQ",
      "label": "CI / CD Tools",
      "zh": "CI / CD Tools（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1786,
      "y": 1971,
      "w": 154,
      "h": 49
    },
    {
      "id": "JnWVCS1HbAyfCJzGt-WOH",
      "label": "GitHub Actions",
      "zh": "GitHub Actions（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1439,
      "y": 2056,
      "w": 252,
      "h": 49
    },
    {
      "id": "2KjSLLVTvl2G2KValw7S7",
      "label": "GitLab CI",
      "zh": "GitLab CI（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1439,
      "y": 1948,
      "w": 126,
      "h": 49
    },
    {
      "id": "dUapFp3f0Rum-rf_Vk_b-",
      "label": "Jenkins",
      "zh": "Jenkins（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1567,
      "y": 1897,
      "w": 124,
      "h": 49
    },
    {
      "id": "1-JneOQeGhox-CKrdiquq",
      "label": "Circle CI",
      "zh": "Circle CI（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1567,
      "y": 1950,
      "w": 124,
      "h": 49
    },
    {
      "id": "TsXFx1wWikVBVoFUUDAMx",
      "label": "Octopus Deploy",
      "zh": "Octopus Deploy（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1439,
      "y": 2003,
      "w": 252,
      "h": 49
    },
    {
      "id": "L000AbzF3oLcn4B1eUIYX",
      "label": "TeamCity",
      "zh": "TeamCity（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1439,
      "y": 1897,
      "w": 126,
      "h": 49
    },
    {
      "id": "hcrPpjFxPi_iLiMdLKJrO",
      "label": "Secret Management",
      "zh": "密钥管理",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1725,
      "y": 2136,
      "w": 205,
      "h": 49
    },
    {
      "id": "ZWq23Q9ZNxLNti68oltxA",
      "label": "Sealed Secrets",
      "zh": "Sealed Secrets（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2006,
      "y": 2082,
      "w": 164,
      "h": 49
    },
    {
      "id": "yQ4d2uiROZYr950cjYnQE",
      "label": "Cloud Specific Tools",
      "zh": "Cloud Specific Tools（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2006,
      "y": 2190,
      "w": 239,
      "h": 49
    },
    {
      "id": "tZzvs80KzqT8aDvEyjack",
      "label": "Vault",
      "zh": "Vault（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2006,
      "y": 2136,
      "w": 118,
      "h": 49
    },
    {
      "id": "GHQWHLxsO40kJ6z_YCinJ",
      "label": "SOPs",
      "zh": "SOPs（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2128,
      "y": 2136,
      "w": 118,
      "h": 49
    },
    {
      "id": "qqRLeTpuoW64H9LvY0U_w",
      "label": "Infrastructure Monitoring",
      "zh": "基础设施监控",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1438,
      "y": 2136,
      "w": 239,
      "h": 49
    },
    {
      "id": "W9sKEoDlR8LzocQkqSv82",
      "label": "Zabbix",
      "zh": "Zabbix（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1444,
      "y": 2329,
      "w": 117,
      "h": 49
    },
    {
      "id": "NiVvRbCOCDpVvif48poCo",
      "label": "Prometheus",
      "zh": "Prometheus（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1443,
      "y": 2222,
      "w": 231,
      "h": 49
    },
    {
      "id": "bujq_C-ejtpmk-ICALByy",
      "label": "Datadog",
      "zh": "Datadog（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1564,
      "y": 2329,
      "w": 108,
      "h": 49
    },
    {
      "id": "niA_96yR7uQ0sc6S_OStf",
      "label": "Grafana",
      "zh": "Grafana（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1443,
      "y": 2275,
      "w": 229,
      "h": 49
    },
    {
      "id": "gaoZjOYmU0J5aM6vtLNvN",
      "label": "Logs Management",
      "zh": "Logs管理",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1187,
      "y": 2010,
      "w": 194,
      "h": 49
    },
    {
      "id": "K_qLhK2kKN_uCq7iVjqph",
      "label": "Elastic Stack",
      "zh": "Elastic Stack（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1207,
      "y": 1848,
      "w": 154,
      "h": 49
    },
    {
      "id": "s_kss4FJ2KyZRdcKNHK2v",
      "label": "Graylog",
      "zh": "Graylog（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1207,
      "y": 1901,
      "w": 154,
      "h": 49
    },
    {
      "id": "dZID_Y_uRTF8JlfDCqeqs",
      "label": "Splunk",
      "zh": "Splunk（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1207,
      "y": 1741,
      "w": 154,
      "h": 50
    },
    {
      "id": "cjjMZdyLgakyVkImVQTza",
      "label": "Papertrail",
      "zh": "Papertrail（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1207,
      "y": 1688,
      "w": 154,
      "h": 49
    },
    {
      "id": "Yq8kVoRf20aL_o4VZU5--",
      "label": "Container Orchestration",
      "zh": "容器编排",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1192,
      "y": 2415,
      "w": 232,
      "h": 49
    },
    {
      "id": "XbrWlTyH4z8crSHkki2lp",
      "label": "GKE / EKS / AKS",
      "zh": "GKE / EKS / AKS（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1192,
      "y": 2504,
      "w": 232,
      "h": 49
    },
    {
      "id": "FE2h-uQy6qli3rKERci1j",
      "label": "AWS ECS / Fargate",
      "zh": "AWS ECS / Fargate（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1192,
      "y": 2557,
      "w": 232,
      "h": 49
    },
    {
      "id": "VD24HC9qJOC42lbpJ-swC",
      "label": "Docker Swarm",
      "zh": "Docker Swarm（命令）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1192,
      "y": 2610,
      "w": 232,
      "h": 49
    },
    {
      "id": "zuBAjrqQPjj-0DHGjCaqT",
      "label": "Artifact Management",
      "zh": "Artifact管理",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1776,
      "y": 2415,
      "w": 214,
      "h": 49
    },
    {
      "id": "C_sFyIsIIpriZlovvcbSE",
      "label": "Artifactory",
      "zh": "Artifactory（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1804,
      "y": 2223,
      "w": 157,
      "h": 49
    },
    {
      "id": "ootuLJfRXarVvm3J1Ir11",
      "label": "Nexus",
      "zh": "Nexus（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1805,
      "y": 2275,
      "w": 155,
      "h": 49
    },
    {
      "id": "vsmE6EpCc2DFGk1YTbkHS",
      "label": "Cloud Smith",
      "zh": "Cloud Smith（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1806,
      "y": 2327,
      "w": 154,
      "h": 49
    },
    {
      "id": "-INN1qTMLimrZgaSPCcHj",
      "label": "GitOps",
      "zh": "GitOps（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 2040,
      "y": 2415,
      "w": 172,
      "h": 49
    },
    {
      "id": "i-DLwNXdCUUug6lfjkPSy",
      "label": "ArgoCD",
      "zh": "ArgoCD（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2040,
      "y": 2275,
      "w": 172,
      "h": 49
    },
    {
      "id": "6gVV_JUgKgwJb4C8tHZn7",
      "label": "FluxCD",
      "zh": "FluxCD（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2040,
      "y": 2328,
      "w": 172,
      "h": 49
    },
    {
      "id": "EeWsihH9ehbFKebYoB5i9",
      "label": "Service Mesh",
      "zh": "服务Mesh",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 2040,
      "y": 2603,
      "w": 172,
      "h": 49
    },
    {
      "id": "XsSnqW6k2IzvmrMmJeU6a",
      "label": "Istio",
      "zh": "Istio（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1830,
      "y": 2526,
      "w": 111,
      "h": 49
    },
    {
      "id": "OXOTm3nz6o44p50qd0brN",
      "label": "Consul",
      "zh": "Consul（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1830,
      "y": 2579,
      "w": 111,
      "h": 49
    },
    {
      "id": "hhoSe4q1u850PgK62Ubau",
      "label": "Linkerd",
      "zh": "Linkerd（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1830,
      "y": 2632,
      "w": 111,
      "h": 49
    },
    {
      "id": "epLLYArR16HlhAS4c33b4",
      "label": "Envoy",
      "zh": "Envoy（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1830,
      "y": 2685,
      "w": 111,
      "h": 49
    },
    {
      "id": "Qc0MGR5bMG9eeM5Zb9PMk",
      "label": "Cloud Design Patterns",
      "zh": "云设计模式",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1585,
      "y": 2905,
      "w": 234,
      "h": 49
    },
    {
      "id": "JCe3fcOf-sokTJURyX1oI",
      "label": "Availability",
      "zh": "可用性",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1193,
      "y": 2830,
      "w": 269,
      "h": 49
    },
    {
      "id": "5FN7iva4DW_lv-r1tijd8",
      "label": "Data Management",
      "zh": "数据管理",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1193,
      "y": 2882,
      "w": 269,
      "h": 49
    },
    {
      "id": "1_NRXjckZ0F8EtEmgixqz",
      "label": "Design and Implementation",
      "zh": "设计与Implementation（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1193,
      "y": 2934,
      "w": 269,
      "h": 49
    },
    {
      "id": "8kby89epyullS9W7uKDrs",
      "label": "Management and Monitoring",
      "zh": "管理与监控",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1193,
      "y": 2986,
      "w": 269,
      "h": 49
    },
    {
      "id": "w2eCgBC-ydMHSxh7LMti8",
      "label": "Loki",
      "zh": "Loki（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1207,
      "y": 1795,
      "w": 154,
      "h": 49
    },
    {
      "id": "hIBeTUiAI3zwUY6NgAO-A",
      "label": "Kubernetes",
      "zh": "Kubernetes（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1192,
      "y": 2663,
      "w": 232,
      "h": 49
    },
    {
      "id": "JXsctlXUUS1ie8nNEgIk9",
      "label": "GCP Functions",
      "zh": "GCP Functions（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2011,
      "y": 1606,
      "w": 194,
      "h": 49
    },
    {
      "id": "wNguM6-YEznduz3MgBCYo",
      "label": "Observability",
      "zh": "Observability（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 1492,
      "y": 2415,
      "w": 218,
      "h": 49
    },
    {
      "id": "8rd7T5ahK2I_zh5co-IF-",
      "label": "Jaeger",
      "zh": "Jaeger（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1511,
      "y": 2503,
      "w": 180,
      "h": 49
    },
    {
      "id": "pk76Us6z8LoX3f0mhnCyR",
      "label": "New Relic",
      "zh": "New Relic（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1511,
      "y": 2556,
      "w": 180,
      "h": 49
    },
    {
      "id": "BHny2Emf96suhAlltiEro",
      "label": "Datadog",
      "zh": "Datadog（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1511,
      "y": 2609,
      "w": 180,
      "h": 49
    },
    {
      "id": "eOyu4wmKOrcMlhD8pUGGh",
      "label": "Prometheus",
      "zh": "Prometheus（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1511,
      "y": 2662,
      "w": 180,
      "h": 49
    },
    {
      "id": "K81bmtgnB1gfhYdi3TB5a",
      "label": "OpenTelemetry",
      "zh": "OpenTelemetry（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1511,
      "y": 2715,
      "w": 180,
      "h": 49
    },
    {
      "id": "lUUJAEBrGJvL8dRs2n1GD",
      "label": "ESO",
      "zh": "ESO（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 2174,
      "y": 2082,
      "w": 72,
      "h": 49
    },
    {
      "id": "4aJVaimsuvGIPXMZ_WjaA",
      "label": "Dynatrace",
      "zh": "Dynatrace（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1511,
      "y": 2768,
      "w": 180,
      "h": 49
    },
    {
      "id": "Kumwd6XOlEMeDohDH0q9P",
      "label": "Salt",
      "zh": "Salt（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1402,
      "y": 1774,
      "w": 115,
      "h": 49
    },
    {
      "id": "3GryoQuI67JTHg9r3xUHO",
      "label": "OpenShift",
      "zh": "OpenShift（技术术语）",
      "desc": "DevOps 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 1192,
      "y": 2716,
      "w": 232,
      "h": 49
    }
  ],
  "tutorials": {
    "v5FGKQc-_7NYEsWjmTEuq": {
      "id": "v5FGKQc-_7NYEsWjmTEuq",
      "zh": "学习aProgramming语言",
      "en": "Learn a Programming Language",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「学习aProgramming语言」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**学习aProgramming语言**（Learn a Programming Language）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「学习aProgramming语言」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**学习aProgramming语言**（Learn a Programming Language）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "TwVfCYMS9jSaJ6UyYmC-K": {
      "id": "TwVfCYMS9jSaJ6UyYmC-K",
      "zh": "Python（技术术语）",
      "en": "Python",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Python（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Python（技术术语）**（Python）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Python（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Python（技术术语）**（Python）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "PuXAPYA0bsMgwcnlwJxQn": {
      "id": "PuXAPYA0bsMgwcnlwJxQn",
      "zh": "Ruby（技术术语）",
      "en": "Ruby",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Ruby（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Ruby（技术术语）**（Ruby）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Ruby（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Ruby（技术术语）**（Ruby）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "npnMwSDEK2aLGgnuZZ4dO": {
      "id": "npnMwSDEK2aLGgnuZZ4dO",
      "zh": "Go（技术术语）",
      "en": "Go",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Go（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Go（技术术语）**（Go）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Go（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Go（技术术语）**（Go）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "eL62bKAoJCMsu7zPlgyhy": {
      "id": "eL62bKAoJCMsu7zPlgyhy",
      "zh": "Rust（技术术语）",
      "en": "Rust",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Rust（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Rust（技术术语）**（Rust）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Rust（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Rust（技术术语）**（Rust）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "QCdemtWa2mE78poNXeqzr": {
      "id": "QCdemtWa2mE78poNXeqzr",
      "zh": "JavaScript / Node.js 运行时",
      "en": "JavaScript / Node.js",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「JavaScript / Node.js 运行时」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**JavaScript / Node.js 运行时**（JavaScript / Node.js）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「JavaScript / Node.js 运行时」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**JavaScript / Node.js 运行时**（JavaScript / Node.js）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "qe84v529VbCyydl0BKFk2": {
      "id": "qe84v529VbCyydl0BKFk2",
      "zh": "Operating系统",
      "en": "Operating System",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Operating系统」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Operating系统**（Operating System）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Operating系统」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Operating系统**（Operating System）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "cTqVab0VbVcn3W7i0wBrX": {
      "id": "cTqVab0VbVcn3W7i0wBrX",
      "zh": "Ubuntu / Debian（技术术语）",
      "en": "Ubuntu / Debian",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Ubuntu / Debian（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Ubuntu / Debian（技术术语）**（Ubuntu / Debian）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Ubuntu / Debian（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Ubuntu / Debian（技术术语）**（Ubuntu / Debian）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "zhNUK953p6tjREndk3yQZ": {
      "id": "zhNUK953p6tjREndk3yQZ",
      "zh": "SUSE Linux（技术术语）",
      "en": "SUSE Linux",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「SUSE Linux（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**SUSE Linux（技术术语）**（SUSE Linux）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SUSE Linux（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SUSE Linux（技术术语）**（SUSE Linux）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
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
    "7mS6Y_BOAHNgM3OjyFtZ9": {
      "id": "7mS6Y_BOAHNgM3OjyFtZ9",
      "zh": "RHEL / Derivatives（技术术语）",
      "en": "RHEL / Derivatives",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「RHEL / Derivatives（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**RHEL / Derivatives（技术术语）**（RHEL / Derivatives）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「RHEL / Derivatives（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**RHEL / Derivatives（技术术语）**（RHEL / Derivatives）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "PiPHFimToormOPl1EtEe8": {
      "id": "PiPHFimToormOPl1EtEe8",
      "zh": "FreeBSD（技术术语）",
      "en": "FreeBSD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「FreeBSD（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**FreeBSD（技术术语）**（FreeBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「FreeBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**FreeBSD（技术术语）**（FreeBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "97cJYKqv7CPPUXkKNwM4x": {
      "id": "97cJYKqv7CPPUXkKNwM4x",
      "zh": "OpenBSD（技术术语）",
      "en": "OpenBSD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「OpenBSD（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**OpenBSD（技术术语）**（OpenBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「OpenBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**OpenBSD（技术术语）**（OpenBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "haiYSwNt3rjiiwCDszPk1": {
      "id": "haiYSwNt3rjiiwCDszPk1",
      "zh": "NetBSD（技术术语）",
      "en": "NetBSD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「NetBSD（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**NetBSD（技术术语）**（NetBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「NetBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**NetBSD（技术术语）**（NetBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "UOQimp7QkM3sxmFvk5d3i": {
      "id": "UOQimp7QkM3sxmFvk5d3i",
      "zh": "Windows（技术术语）",
      "en": "Windows",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Windows（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Windows（技术术语）**（Windows）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Windows（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Windows（技术术语）**（Windows）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "wjJPzrFJBNYOD3SJLzW2M": {
      "id": "wjJPzrFJBNYOD3SJLzW2M",
      "zh": "终端Knowledge",
      "en": "Terminal Knowledge",
      "level": "core",
      "nodeType": "topic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「终端Knowledge」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**终端Knowledge**（Terminal Knowledge）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「终端Knowledge」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**终端Knowledge**（Terminal Knowledge）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
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
    "x-JWvG1iw86ULL9KrQmRu": {
      "id": "x-JWvG1iw86ULL9KrQmRu",
      "zh": "进程监控",
      "en": "Process Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「进程监控」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**进程监控**（Process Monitoring）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「进程监控」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**进程监控**（Process Monitoring）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
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
    "gIEQDgKOsoEnSv8mpEzGH": {
      "id": "gIEQDgKOsoEnSv8mpEzGH",
      "zh": "性能监控",
      "en": "Performance Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「性能监控」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**性能监控**（Performance Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
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
    "OaqKLZe-XnngcDhDzCtRt": {
      "id": "OaqKLZe-XnngcDhDzCtRt",
      "zh": "Networking Tools（技术术语）",
      "en": "Networking Tools",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「Networking Tools（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Networking Tools（技术术语）**（Networking Tools）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Networking Tools（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Networking Tools（技术术语）**（Networking Tools）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
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
    "cUifrP7v55psTb20IZndf": {
      "id": "cUifrP7v55psTb20IZndf",
      "zh": "Text操纵",
      "en": "Text Manipulation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Text操纵」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Text操纵**（Text Manipulation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Text操纵」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Text操纵**（Text Manipulation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "syBIAL1mHbJLnTBoSxXI7": {
      "id": "syBIAL1mHbJLnTBoSxXI7",
      "zh": "Bash（技术术语）",
      "en": "Bash",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Bash（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Bash（技术术语）**（Bash）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Bash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Bash（技术术语）**（Bash）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "z6IBekR8Xl-6f8WEb05Nw": {
      "id": "z6IBekR8Xl-6f8WEb05Nw",
      "zh": "Power Shell（技术术语）",
      "en": "Power Shell",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「Power Shell（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Power Shell（技术术语）**（Power Shell）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Power Shell（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Power Shell（技术术语）**（Power Shell）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
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
    "Jt8BmtLUH6fHT2pGKoJs3": {
      "id": "Jt8BmtLUH6fHT2pGKoJs3",
      "zh": "Vim / Nano /  Emacs（技术术语）",
      "en": "Vim / Nano /  Emacs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Vim / Nano /  Emacs（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Vim / Nano /  Emacs（技术术语）**（Vim / Nano /  Emacs）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Vim / Nano /  Emacs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Vim / Nano /  Emacs（技术术语）**（Vim / Nano /  Emacs）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "LvhFmlxz5uIy7k_nzx2Bv": {
      "id": "LvhFmlxz5uIy7k_nzx2Bv",
      "zh": "版本控制Systems",
      "en": "Version Control Systems",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「版本控制Systems」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**版本控制Systems**（Version Control Systems）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「版本控制Systems」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**版本控制Systems**（Version Control Systems）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "uyDm1SpOQdpHjq9zBAdck": {
      "id": "uyDm1SpOQdpHjq9zBAdck",
      "zh": "Git（技术术语）",
      "en": "Git",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Git（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Git（技术术语）**（Git）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Git（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Git（技术术语）**（Git）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "h10BH3OybHcIN2iDTSGkn": {
      "id": "h10BH3OybHcIN2iDTSGkn",
      "zh": "版本控制Hosting",
      "en": "VCS Hosting",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「版本控制Hosting」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**版本控制Hosting**（VCS Hosting）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「版本控制Hosting」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**版本控制Hosting**（VCS Hosting）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "ot9I_IHdnq2yAMffrSrbN": {
      "id": "ot9I_IHdnq2yAMffrSrbN",
      "zh": "GitHub（技术术语）",
      "en": "GitHub",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**GitHub（技术术语）**（GitHub）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub（技术术语）**（GitHub）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "oQIB0KE0BibjIYmxrpPZS": {
      "id": "oQIB0KE0BibjIYmxrpPZS",
      "zh": "GitLab（技术术语）",
      "en": "GitLab",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitLab（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**GitLab（技术术语）**（GitLab）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitLab（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitLab（技术术语）**（GitLab）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "Z7SsBWgluZWr9iWb2e9XO": {
      "id": "Z7SsBWgluZWr9iWb2e9XO",
      "zh": "Bitbucket（技术术语）",
      "en": "Bitbucket",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Bitbucket（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Bitbucket（技术术语）**（Bitbucket）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Bitbucket（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Bitbucket（技术术语）**（Bitbucket）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "jCWrnQNgjHKyhzd9dwOHz": {
      "id": "jCWrnQNgjHKyhzd9dwOHz",
      "zh": "什么是and如何to配置X?",
      "en": "What is and how to setup X ?",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「什么是and如何to配置X?」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**什么是and如何to配置X?**（What is and how to setup X ?）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「什么是and如何to配置X?」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**什么是and如何to配置X?**（What is and how to setup X ?）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "F93XnRj0BLswJkzyRggLS": {
      "id": "F93XnRj0BLswJkzyRggLS",
      "zh": "Forward代理",
      "en": "Forward Proxy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Forward代理」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Forward代理**（Forward Proxy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Forward代理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Forward代理**（Forward Proxy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "f3tM2uo6LLSOmyeFfLc7h": {
      "id": "f3tM2uo6LLSOmyeFfLc7h",
      "zh": "防火墙",
      "en": "Firewall",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「防火墙」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**防火墙**（Firewall）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「防火墙」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**防火墙**（Firewall）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "ukOrSeyK1ElOt9tTjCkfO": {
      "id": "ukOrSeyK1ElOt9tTjCkfO",
      "zh": "Nginx（技术术语）",
      "en": "Nginx",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Nginx（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Nginx（技术术语）**（Nginx）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Nginx（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Nginx（技术术语）**（Nginx）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "dF3otkMMN09tgCzci8Jyv": {
      "id": "dF3otkMMN09tgCzci8Jyv",
      "zh": "Tomcat（技术术语）",
      "en": "Tomcat",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Tomcat（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Tomcat（技术术语）**（Tomcat）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Tomcat（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Tomcat（技术术语）**（Tomcat）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "0_GMTcMeZv3A8dYkHRoW7": {
      "id": "0_GMTcMeZv3A8dYkHRoW7",
      "zh": "Apache（技术术语）",
      "en": "Apache",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Apache（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Apache（技术术语）**（Apache）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Apache（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Apache（技术术语）**（Apache）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "54UZNO2q8M5FiA_XbcU_D": {
      "id": "54UZNO2q8M5FiA_XbcU_D",
      "zh": "Caddy（技术术语）",
      "en": "Caddy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Caddy（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Caddy（技术术语）**（Caddy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Caddy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Caddy（技术术语）**（Caddy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "5iJOE1QxMvf8BQ_8ssiI8": {
      "id": "5iJOE1QxMvf8BQ_8ssiI8",
      "zh": "IIS（技术术语）",
      "en": "IIS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「IIS（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**IIS（技术术语）**（IIS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「IIS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**IIS（技术术语）**（IIS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "R4XSY4TSjU1M7cW66zUqJ": {
      "id": "R4XSY4TSjU1M7cW66zUqJ",
      "zh": "缓存服务端",
      "en": "Caching Server",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「缓存服务端」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**缓存服务端**（Caching Server）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**缓存服务端**（Caching Server）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "i8Sd9maB_BeFurULrHXNq": {
      "id": "i8Sd9maB_BeFurULrHXNq",
      "zh": "负载均衡",
      "en": "Load Balancer",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「负载均衡」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**负载均衡**（Load Balancer）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「负载均衡」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**负载均衡**（Load Balancer）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "eGF7iyigl57myx2ejpmNC": {
      "id": "eGF7iyigl57myx2ejpmNC",
      "zh": "Reverse代理",
      "en": "Reverse Proxy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Reverse代理」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Reverse代理**（Reverse Proxy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Reverse代理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Reverse代理**（Reverse Proxy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "CQhUflAcv1lhBnmDY0gaz": {
      "id": "CQhUflAcv1lhBnmDY0gaz",
      "zh": "容器",
      "en": "Containers",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**容器**（Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
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
    "P0acFNZ413MSKElHqCxr3": {
      "id": "P0acFNZ413MSKElHqCxr3",
      "zh": "Docker（技术术语）",
      "en": "Docker",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Docker（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Docker（技术术语）**（Docker）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Docker（技术术语）**（Docker）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "qYRJYIZsmf-inMqKECRkI": {
      "id": "qYRJYIZsmf-inMqKECRkI",
      "zh": "LXC（技术术语）",
      "en": "LXC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「LXC（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**LXC（技术术语）**（LXC）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「LXC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**LXC（技术术语）**（LXC）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "2Wd9SlWGg6QtxgiUVLyZL": {
      "id": "2Wd9SlWGg6QtxgiUVLyZL",
      "zh": "Cloud Providers（技术术语）",
      "en": "Cloud Providers",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Cloud Providers（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Cloud Providers（技术术语）**（Cloud Providers）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Cloud Providers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Cloud Providers（技术术语）**（Cloud Providers）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "1ieK6B_oqW8qOC6bdmiJe": {
      "id": "1ieK6B_oqW8qOC6bdmiJe",
      "zh": "AWS（技术术语）",
      "en": "AWS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「AWS（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**AWS（技术术语）**（AWS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「AWS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**AWS（技术术语）**（AWS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "ctor79Vd7EXDMdrLyUcu_": {
      "id": "ctor79Vd7EXDMdrLyUcu_",
      "zh": "Azure（技术术语）",
      "en": "Azure",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Azure（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Azure（技术术语）**（Azure）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Azure（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Azure（技术术语）**（Azure）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "zYrOxFQkl3KSe67fh3smD": {
      "id": "zYrOxFQkl3KSe67fh3smD",
      "zh": "Google Cloud（技术术语）",
      "en": "Google Cloud",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Google Cloud（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Google Cloud（技术术语）**（Google Cloud）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Google Cloud（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Google Cloud（技术术语）**（Google Cloud）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "-h-kNVDNzZYnQAR_4lfXc": {
      "id": "-h-kNVDNzZYnQAR_4lfXc",
      "zh": "Digital Ocean（技术术语）",
      "en": "Digital Ocean",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「Digital Ocean（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Digital Ocean（技术术语）**（Digital Ocean）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Digital Ocean（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Digital Ocean（技术术语）**（Digital Ocean）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "YUJf-6ccHvYjL_RzufQ-G": {
      "id": "YUJf-6ccHvYjL_RzufQ-G",
      "zh": "Alibaba Cloud（技术术语）",
      "en": "Alibaba Cloud",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Alibaba Cloud（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Alibaba Cloud（技术术语）**（Alibaba Cloud）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Alibaba Cloud（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Alibaba Cloud（技术术语）**（Alibaba Cloud）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "I327qPYGMcdayRR5WT0Ek": {
      "id": "I327qPYGMcdayRR5WT0Ek",
      "zh": "Hetzner（技术术语）",
      "en": "Hetzner",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Hetzner（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Hetzner（技术术语）**（Hetzner）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Hetzner（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Hetzner（技术术语）**（Hetzner）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "FaPf567JGRAg1MBlFj9Tk": {
      "id": "FaPf567JGRAg1MBlFj9Tk",
      "zh": "Heroku（技术术语）",
      "en": "Heroku",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Heroku（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Heroku（技术术语）**（Heroku）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Heroku（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Heroku（技术术语）**（Heroku）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "eJZdjheptmiwKsVokt7Io": {
      "id": "eJZdjheptmiwKsVokt7Io",
      "zh": "Contabo（技术术语）",
      "en": "Contabo",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Contabo（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Contabo（技术术语）**（Contabo）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Contabo（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Contabo（技术术语）**（Contabo）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "RDLmML_HS2c8J4D_U_KYe": {
      "id": "RDLmML_HS2c8J4D_U_KYe",
      "zh": "FTP / SFTP（技术术语）",
      "en": "FTP / SFTP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「FTP / SFTP（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**FTP / SFTP（技术术语）**（FTP / SFTP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「FTP / SFTP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**FTP / SFTP（技术术语）**（FTP / SFTP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "Vu955vdsYerCG8G6suqml": {
      "id": "Vu955vdsYerCG8G6suqml",
      "zh": "DNS（技术术语）",
      "en": "DNS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「DNS（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**DNS（技术术语）**（DNS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DNS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DNS（技术术语）**（DNS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "ke-8MeuLx7AS2XjSsPhxe": {
      "id": "ke-8MeuLx7AS2XjSsPhxe",
      "zh": "HTTP（技术术语）",
      "en": "HTTP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HTTP（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**HTTP（技术术语）**（HTTP）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
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
    "AJO3jtHvIICj8YKaSXl0U": {
      "id": "AJO3jtHvIICj8YKaSXl0U",
      "zh": "HTTPS（技术术语）",
      "en": "HTTPS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "story": "学习「HTTPS（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**HTTPS（技术术语）**（HTTPS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "why": "它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "明确「HTTPS（技术术语）」对应的资源、HTTP 方法和 URL 路径。",
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
          "body": "**HTTPS（技术术语）**（HTTPS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。"
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
    "0o6ejhfpmO4S8A6djVWva": {
      "id": "0o6ejhfpmO4S8A6djVWva",
      "zh": "SSL / TLS（技术术语）",
      "en": "SSL / TLS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「SSL / TLS（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**SSL / TLS（技术术语）**（SSL / TLS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SSL / TLS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SSL / TLS（技术术语）**（SSL / TLS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "wcIRMLVm3SdEJWF9RPfn7": {
      "id": "wcIRMLVm3SdEJWF9RPfn7",
      "zh": "SSH（技术术语）",
      "en": "SSH",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「SSH（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**SSH（技术术语）**（SSH）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SSH（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SSH（技术术语）**（SSH）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "E-lSLGzgOPrz-25ER2Hk7": {
      "id": "E-lSLGzgOPrz-25ER2Hk7",
      "zh": "White / Grey Listing（技术术语）",
      "en": "White / Grey Listing",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「White / Grey Listing（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**White / Grey Listing（技术术语）**（White / Grey Listing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「White / Grey Listing（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**White / Grey Listing（技术术语）**（White / Grey Listing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "zJy9dOynWgLTDKI1iBluG": {
      "id": "zJy9dOynWgLTDKI1iBluG",
      "zh": "SMTP（技术术语）",
      "en": "SMTP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「SMTP（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**SMTP（技术术语）**（SMTP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SMTP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SMTP（技术术语）**（SMTP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "5vUKHuItQfkarp7LtACvX": {
      "id": "5vUKHuItQfkarp7LtACvX",
      "zh": "DMARC（技术术语）",
      "en": "DMARC",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「DMARC（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**DMARC（技术术语）**（DMARC）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「DMARC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**DMARC（技术术语）**（DMARC）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "WMuXqa4b5wyRuYAQKQJRj": {
      "id": "WMuXqa4b5wyRuYAQKQJRj",
      "zh": "IMAP（技术术语）",
      "en": "IMAP",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「IMAP（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**IMAP（技术术语）**（IMAP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「IMAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**IMAP（技术术语）**（IMAP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "ewcJfnDFKXN8I5TLpXEaB": {
      "id": "ewcJfnDFKXN8I5TLpXEaB",
      "zh": "SPF（技术术语）",
      "en": "SPF",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「SPF（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**SPF（技术术语）**（SPF）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SPF（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SPF（技术术语）**（SPF）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "fzO6xVTBxliu24f3W5zaU": {
      "id": "fzO6xVTBxliu24f3W5zaU",
      "zh": "POP3S（技术术语）",
      "en": "POP3S",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「POP3S（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**POP3S（技术术语）**（POP3S）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「POP3S（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**POP3S（技术术语）**（POP3S）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "RYCD78msIR2BPJoIP71aj": {
      "id": "RYCD78msIR2BPJoIP71aj",
      "zh": "域密钥",
      "en": "Domain Keys",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「域密钥」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**域密钥**（Domain Keys）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「域密钥」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**域密钥**（Domain Keys）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "QZ7bkY-MaEgxYoPDP3nma": {
      "id": "QZ7bkY-MaEgxYoPDP3nma",
      "zh": "OSI模型",
      "en": "OSI Model",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「OSI模型」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**OSI模型**（OSI Model）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「OSI模型」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**OSI模型**（OSI Model）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "w5d24Sf8GDkLDLGUPxzS9": {
      "id": "w5d24Sf8GDkLDLGUPxzS9",
      "zh": "Networking（技术术语）与Protocols（技术术语）",
      "en": "Networking & Protocols",
      "level": "core",
      "nodeType": "topic",
      "analogy": "后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "story": "学习「Networking（技术术语）与Protocols（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Networking（技术术语）与Protocols（技术术语）**（Networking & Protocols）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "why": "它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Networking（技术术语）与Protocols（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Networking（技术术语）与Protocols（技术术语）**（Networking & Protocols）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。"
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
    "9p_ufPj6QH9gHbWBQUmGw": {
      "id": "9p_ufPj6QH9gHbWBQUmGw",
      "zh": "无服务器",
      "en": "Serverless",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「无服务器」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**无服务器**（Serverless）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「无服务器」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**无服务器**（Serverless）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "LZDRgDxEZ3klp2PrrJFBX": {
      "id": "LZDRgDxEZ3klp2PrrJFBX",
      "zh": "Vercel（技术术语）",
      "en": "Vercel",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Vercel（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Vercel（技术术语）**（Vercel）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Vercel（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Vercel（技术术语）**（Vercel）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "l8VAewSEXzoyqYFhoplJj": {
      "id": "l8VAewSEXzoyqYFhoplJj",
      "zh": "Cloudflare（技术术语）",
      "en": "Cloudflare",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Cloudflare（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Cloudflare（技术术语）**（Cloudflare）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Cloudflare（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Cloudflare（技术术语）**（Cloudflare）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "mlrlf2McMI7IBhyEdq0Nf": {
      "id": "mlrlf2McMI7IBhyEdq0Nf",
      "zh": "Azure Functions（技术术语）",
      "en": "Azure Functions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Azure Functions（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Azure Functions（技术术语）**（Azure Functions）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Azure Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Azure Functions（技术术语）**（Azure Functions）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "UfQrIJ-uMNJt9H_VM_Q5q": {
      "id": "UfQrIJ-uMNJt9H_VM_Q5q",
      "zh": "AWS Lambda（技术术语）",
      "en": "AWS Lambda",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「AWS Lambda（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**AWS Lambda（技术术语）**（AWS Lambda）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「AWS Lambda（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**AWS Lambda（技术术语）**（AWS Lambda）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "hCKODV2b_l2uPit0YeP1M": {
      "id": "hCKODV2b_l2uPit0YeP1M",
      "zh": "Netlify（技术术语）",
      "en": "Netlify",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Netlify（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Netlify（技术术语）**（Netlify）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Netlify（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Netlify（技术术语）**（Netlify）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "1oYvpFG8LKT1JD6a_9J0m": {
      "id": "1oYvpFG8LKT1JD6a_9J0m",
      "zh": "Provisioning（技术术语）",
      "en": "Provisioning",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Provisioning（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Provisioning（技术术语）**（Provisioning）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Provisioning（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Provisioning（技术术语）**（Provisioning）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "XA__697KgofsH28coQ-ma": {
      "id": "XA__697KgofsH28coQ-ma",
      "zh": "AWS CDK（技术术语）",
      "en": "AWS CDK",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「AWS CDK（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**AWS CDK（技术术语）**（AWS CDK）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「AWS CDK（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**AWS CDK（技术术语）**（AWS CDK）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "TgBb4aL_9UkyU36CN4qvS": {
      "id": "TgBb4aL_9UkyU36CN4qvS",
      "zh": "CloudFormation（技术术语）",
      "en": "CloudFormation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「CloudFormation（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**CloudFormation（技术术语）**（CloudFormation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CloudFormation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CloudFormation（技术术语）**（CloudFormation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "O0xZ3dy2zIDbOetVrgna6": {
      "id": "O0xZ3dy2zIDbOetVrgna6",
      "zh": "Pulumi（技术术语）",
      "en": "Pulumi",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Pulumi（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Pulumi（技术术语）**（Pulumi）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Pulumi（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Pulumi（技术术语）**（Pulumi）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "nUBGf1rp9GK_pbagWCP9g": {
      "id": "nUBGf1rp9GK_pbagWCP9g",
      "zh": "Terraform（技术术语）",
      "en": "Terraform",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Terraform（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Terraform（技术术语）**（Terraform）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Terraform（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Terraform（技术术语）**（Terraform）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "V9sOxlNOyRp0Mghl7zudv": {
      "id": "V9sOxlNOyRp0Mghl7zudv",
      "zh": "Configuration管理",
      "en": "Configuration Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Configuration管理」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Configuration管理**（Configuration Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Configuration管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Configuration管理**（Configuration Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "h9vVPOmdUSeEGVQQaSTH5": {
      "id": "h9vVPOmdUSeEGVQQaSTH5",
      "zh": "Ansible（技术术语）",
      "en": "Ansible",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Ansible（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Ansible（技术术语）**（Ansible）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Ansible（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Ansible（技术术语）**（Ansible）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "kv508kxzUj_CjZRb-TeRv": {
      "id": "kv508kxzUj_CjZRb-TeRv",
      "zh": "Chef（技术术语）",
      "en": "Chef",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Chef（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Chef（技术术语）**（Chef）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Chef（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Chef（技术术语）**（Chef）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "yP1y8U3eblpzbaLiCGliU": {
      "id": "yP1y8U3eblpzbaLiCGliU",
      "zh": "Puppet（技术术语）",
      "en": "Puppet",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Puppet（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Puppet（技术术语）**（Puppet）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Puppet（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Puppet（技术术语）**（Puppet）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "aQJaouIaxIJChM-40M3HQ": {
      "id": "aQJaouIaxIJChM-40M3HQ",
      "zh": "CI / CD Tools（技术术语）",
      "en": "CI / CD Tools",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「CI / CD Tools（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**CI / CD Tools（技术术语）**（CI / CD Tools）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「CI / CD Tools（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**CI / CD Tools（技术术语）**（CI / CD Tools）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "JnWVCS1HbAyfCJzGt-WOH": {
      "id": "JnWVCS1HbAyfCJzGt-WOH",
      "zh": "GitHub Actions（技术术语）",
      "en": "GitHub Actions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitHub Actions（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**GitHub Actions（技术术语）**（GitHub Actions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitHub Actions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitHub Actions（技术术语）**（GitHub Actions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "2KjSLLVTvl2G2KValw7S7": {
      "id": "2KjSLLVTvl2G2KValw7S7",
      "zh": "GitLab CI（技术术语）",
      "en": "GitLab CI",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitLab CI（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**GitLab CI（技术术语）**（GitLab CI）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GitLab CI（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GitLab CI（技术术语）**（GitLab CI）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。"
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
    "dUapFp3f0Rum-rf_Vk_b-": {
      "id": "dUapFp3f0Rum-rf_Vk_b-",
      "zh": "Jenkins（技术术语）",
      "en": "Jenkins",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Jenkins（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Jenkins（技术术语）**（Jenkins）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Jenkins（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Jenkins（技术术语）**（Jenkins）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "1-JneOQeGhox-CKrdiquq": {
      "id": "1-JneOQeGhox-CKrdiquq",
      "zh": "Circle CI（技术术语）",
      "en": "Circle CI",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Circle CI（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Circle CI（技术术语）**（Circle CI）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Circle CI（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Circle CI（技术术语）**（Circle CI）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "TsXFx1wWikVBVoFUUDAMx": {
      "id": "TsXFx1wWikVBVoFUUDAMx",
      "zh": "Octopus Deploy（技术术语）",
      "en": "Octopus Deploy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Octopus Deploy（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Octopus Deploy（技术术语）**（Octopus Deploy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Octopus Deploy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Octopus Deploy（技术术语）**（Octopus Deploy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "L000AbzF3oLcn4B1eUIYX": {
      "id": "L000AbzF3oLcn4B1eUIYX",
      "zh": "TeamCity（技术术语）",
      "en": "TeamCity",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「TeamCity（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**TeamCity（技术术语）**（TeamCity）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「TeamCity（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**TeamCity（技术术语）**（TeamCity）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "hcrPpjFxPi_iLiMdLKJrO": {
      "id": "hcrPpjFxPi_iLiMdLKJrO",
      "zh": "密钥管理",
      "en": "Secret Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「密钥管理」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**密钥管理**（Secret Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「密钥管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**密钥管理**（Secret Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "ZWq23Q9ZNxLNti68oltxA": {
      "id": "ZWq23Q9ZNxLNti68oltxA",
      "zh": "Sealed Secrets（技术术语）",
      "en": "Sealed Secrets",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Sealed Secrets（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Sealed Secrets（技术术语）**（Sealed Secrets）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Sealed Secrets（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Sealed Secrets（技术术语）**（Sealed Secrets）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "yQ4d2uiROZYr950cjYnQE": {
      "id": "yQ4d2uiROZYr950cjYnQE",
      "zh": "Cloud Specific Tools（技术术语）",
      "en": "Cloud Specific Tools",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Cloud Specific Tools（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Cloud Specific Tools（技术术语）**（Cloud Specific Tools）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Cloud Specific Tools（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Cloud Specific Tools（技术术语）**（Cloud Specific Tools）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "tZzvs80KzqT8aDvEyjack": {
      "id": "tZzvs80KzqT8aDvEyjack",
      "zh": "Vault（技术术语）",
      "en": "Vault",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Vault（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Vault（技术术语）**（Vault）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Vault（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Vault（技术术语）**（Vault）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "GHQWHLxsO40kJ6z_YCinJ": {
      "id": "GHQWHLxsO40kJ6z_YCinJ",
      "zh": "SOPs（技术术语）",
      "en": "SOPs",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「SOPs（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**SOPs（技术术语）**（SOPs）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「SOPs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**SOPs（技术术语）**（SOPs）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "qqRLeTpuoW64H9LvY0U_w": {
      "id": "qqRLeTpuoW64H9LvY0U_w",
      "zh": "基础设施监控",
      "en": "Infrastructure Monitoring",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「基础设施监控」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**基础设施监控**（Infrastructure Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「基础设施监控」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**基础设施监控**（Infrastructure Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "W9sKEoDlR8LzocQkqSv82": {
      "id": "W9sKEoDlR8LzocQkqSv82",
      "zh": "Zabbix（技术术语）",
      "en": "Zabbix",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Zabbix（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Zabbix（技术术语）**（Zabbix）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Zabbix（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Zabbix（技术术语）**（Zabbix）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "NiVvRbCOCDpVvif48poCo": {
      "id": "NiVvRbCOCDpVvif48poCo",
      "zh": "Prometheus（技术术语）",
      "en": "Prometheus",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Prometheus（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Prometheus（技术术语）**（Prometheus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Prometheus（技术术语）**（Prometheus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "bujq_C-ejtpmk-ICALByy": {
      "id": "bujq_C-ejtpmk-ICALByy",
      "zh": "Datadog（技术术语）",
      "en": "Datadog",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Datadog（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Datadog（技术术语）**（Datadog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Datadog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Datadog（技术术语）**（Datadog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "niA_96yR7uQ0sc6S_OStf": {
      "id": "niA_96yR7uQ0sc6S_OStf",
      "zh": "Grafana（技术术语）",
      "en": "Grafana",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Grafana（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Grafana（技术术语）**（Grafana）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Grafana（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Grafana（技术术语）**（Grafana）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "gaoZjOYmU0J5aM6vtLNvN": {
      "id": "gaoZjOYmU0J5aM6vtLNvN",
      "zh": "Logs管理",
      "en": "Logs Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Logs管理」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Logs管理**（Logs Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Logs管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Logs管理**（Logs Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "K_qLhK2kKN_uCq7iVjqph": {
      "id": "K_qLhK2kKN_uCq7iVjqph",
      "zh": "Elastic Stack（技术术语）",
      "en": "Elastic Stack",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Elastic Stack（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Elastic Stack（技术术语）**（Elastic Stack）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Elastic Stack（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Elastic Stack（技术术语）**（Elastic Stack）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "s_kss4FJ2KyZRdcKNHK2v": {
      "id": "s_kss4FJ2KyZRdcKNHK2v",
      "zh": "Graylog（技术术语）",
      "en": "Graylog",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Graylog（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Graylog（技术术语）**（Graylog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Graylog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Graylog（技术术语）**（Graylog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "dZID_Y_uRTF8JlfDCqeqs": {
      "id": "dZID_Y_uRTF8JlfDCqeqs",
      "zh": "Splunk（技术术语）",
      "en": "Splunk",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Splunk（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Splunk（技术术语）**（Splunk）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Splunk（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Splunk（技术术语）**（Splunk）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "cjjMZdyLgakyVkImVQTza": {
      "id": "cjjMZdyLgakyVkImVQTza",
      "zh": "Papertrail（技术术语）",
      "en": "Papertrail",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Papertrail（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Papertrail（技术术语）**（Papertrail）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Papertrail（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Papertrail（技术术语）**（Papertrail）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "Yq8kVoRf20aL_o4VZU5--": {
      "id": "Yq8kVoRf20aL_o4VZU5--",
      "zh": "容器编排",
      "en": "Container Orchestration",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器编排」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**容器编排**（Container Orchestration）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**容器编排**（Container Orchestration）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "XbrWlTyH4z8crSHkki2lp": {
      "id": "XbrWlTyH4z8crSHkki2lp",
      "zh": "GKE / EKS / AKS（技术术语）",
      "en": "GKE / EKS / AKS",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「GKE / EKS / AKS（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**GKE / EKS / AKS（技术术语）**（GKE / EKS / AKS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GKE / EKS / AKS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GKE / EKS / AKS（技术术语）**（GKE / EKS / AKS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "FE2h-uQy6qli3rKERci1j": {
      "id": "FE2h-uQy6qli3rKERci1j",
      "zh": "AWS ECS / Fargate（技术术语）",
      "en": "AWS ECS / Fargate",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「AWS ECS / Fargate（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**AWS ECS / Fargate（技术术语）**（AWS ECS / Fargate）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「AWS ECS / Fargate（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**AWS ECS / Fargate（技术术语）**（AWS ECS / Fargate）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "VD24HC9qJOC42lbpJ-swC": {
      "id": "VD24HC9qJOC42lbpJ-swC",
      "zh": "Docker Swarm（命令）",
      "en": "Docker Swarm",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Docker Swarm（命令）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Docker Swarm（命令）**（Docker Swarm）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Docker Swarm（命令）**（Docker Swarm）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "zuBAjrqQPjj-0DHGjCaqT": {
      "id": "zuBAjrqQPjj-0DHGjCaqT",
      "zh": "Artifact管理",
      "en": "Artifact Management",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Artifact管理」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Artifact管理**（Artifact Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Artifact管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Artifact管理**（Artifact Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "C_sFyIsIIpriZlovvcbSE": {
      "id": "C_sFyIsIIpriZlovvcbSE",
      "zh": "Artifactory（技术术语）",
      "en": "Artifactory",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Artifactory（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Artifactory（技术术语）**（Artifactory）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Artifactory（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Artifactory（技术术语）**（Artifactory）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "ootuLJfRXarVvm3J1Ir11": {
      "id": "ootuLJfRXarVvm3J1Ir11",
      "zh": "Nexus（技术术语）",
      "en": "Nexus",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Nexus（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Nexus（技术术语）**（Nexus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Nexus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Nexus（技术术语）**（Nexus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "vsmE6EpCc2DFGk1YTbkHS": {
      "id": "vsmE6EpCc2DFGk1YTbkHS",
      "zh": "Cloud Smith（技术术语）",
      "en": "Cloud Smith",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Cloud Smith（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Cloud Smith（技术术语）**（Cloud Smith）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Cloud Smith（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Cloud Smith（技术术语）**（Cloud Smith）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "-INN1qTMLimrZgaSPCcHj": {
      "id": "-INN1qTMLimrZgaSPCcHj",
      "zh": "GitOps（技术术语）",
      "en": "GitOps",
      "level": "core",
      "nodeType": "topic",
      "analogy": "把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "story": "学习「GitOps（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**GitOps（技术术语）**（GitOps）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "why": "它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
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
    "i-DLwNXdCUUug6lfjkPSy": {
      "id": "i-DLwNXdCUUug6lfjkPSy",
      "zh": "ArgoCD（技术术语）",
      "en": "ArgoCD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「ArgoCD（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**ArgoCD（技术术语）**（ArgoCD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ArgoCD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ArgoCD（技术术语）**（ArgoCD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "6gVV_JUgKgwJb4C8tHZn7": {
      "id": "6gVV_JUgKgwJb4C8tHZn7",
      "zh": "FluxCD（技术术语）",
      "en": "FluxCD",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「FluxCD（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**FluxCD（技术术语）**（FluxCD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「FluxCD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**FluxCD（技术术语）**（FluxCD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "EeWsihH9ehbFKebYoB5i9": {
      "id": "EeWsihH9ehbFKebYoB5i9",
      "zh": "服务Mesh",
      "en": "Service Mesh",
      "level": "core",
      "nodeType": "topic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「服务Mesh」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**服务Mesh**（Service Mesh）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「服务Mesh」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**服务Mesh**（Service Mesh）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "XsSnqW6k2IzvmrMmJeU6a": {
      "id": "XsSnqW6k2IzvmrMmJeU6a",
      "zh": "Istio（技术术语）",
      "en": "Istio",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Istio（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Istio（技术术语）**（Istio）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Istio（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Istio（技术术语）**（Istio）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "OXOTm3nz6o44p50qd0brN": {
      "id": "OXOTm3nz6o44p50qd0brN",
      "zh": "Consul（技术术语）",
      "en": "Consul",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Consul（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Consul（技术术语）**（Consul）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Consul（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Consul（技术术语）**（Consul）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "hhoSe4q1u850PgK62Ubau": {
      "id": "hhoSe4q1u850PgK62Ubau",
      "zh": "Linkerd（技术术语）",
      "en": "Linkerd",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Linkerd（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Linkerd（技术术语）**（Linkerd）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Linkerd（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Linkerd（技术术语）**（Linkerd）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "epLLYArR16HlhAS4c33b4": {
      "id": "epLLYArR16HlhAS4c33b4",
      "zh": "Envoy（技术术语）",
      "en": "Envoy",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Envoy（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Envoy（技术术语）**（Envoy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Envoy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Envoy（技术术语）**（Envoy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "Qc0MGR5bMG9eeM5Zb9PMk": {
      "id": "Qc0MGR5bMG9eeM5Zb9PMk",
      "zh": "云设计模式",
      "en": "Cloud Design Patterns",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「云设计模式」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**云设计模式**（Cloud Design Patterns）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「云设计模式」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**云设计模式**（Cloud Design Patterns）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "JCe3fcOf-sokTJURyX1oI": {
      "id": "JCe3fcOf-sokTJURyX1oI",
      "zh": "可用性",
      "en": "Availability",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「可用性」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**可用性**（Availability）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「可用性」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**可用性**（Availability）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "5FN7iva4DW_lv-r1tijd8": {
      "id": "5FN7iva4DW_lv-r1tijd8",
      "zh": "数据管理",
      "en": "Data Management",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「数据管理」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**数据管理**（Data Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「数据管理」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**数据管理**（Data Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "1_NRXjckZ0F8EtEmgixqz": {
      "id": "1_NRXjckZ0F8EtEmgixqz",
      "zh": "设计与Implementation（技术术语）",
      "en": "Design and Implementation",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「设计与Implementation（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**设计与Implementation（技术术语）**（Design and Implementation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「设计与Implementation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**设计与Implementation（技术术语）**（Design and Implementation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "8kby89epyullS9W7uKDrs": {
      "id": "8kby89epyullS9W7uKDrs",
      "zh": "管理与监控",
      "en": "Management and Monitoring",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「管理与监控」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**管理与监控**（Management and Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「管理与监控」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**管理与监控**（Management and Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "w2eCgBC-ydMHSxh7LMti8": {
      "id": "w2eCgBC-ydMHSxh7LMti8",
      "zh": "Loki（技术术语）",
      "en": "Loki",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Loki（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Loki（技术术语）**（Loki）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Loki（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Loki（技术术语）**（Loki）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "hIBeTUiAI3zwUY6NgAO-A": {
      "id": "hIBeTUiAI3zwUY6NgAO-A",
      "zh": "Kubernetes（技术术语）",
      "en": "Kubernetes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "story": "学习「Kubernetes（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Kubernetes（技术术语）**（Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "why": "它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Kubernetes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Kubernetes（技术术语）**（Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。"
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
    "JXsctlXUUS1ie8nNEgIk9": {
      "id": "JXsctlXUUS1ie8nNEgIk9",
      "zh": "GCP Functions（技术术语）",
      "en": "GCP Functions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「GCP Functions（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**GCP Functions（技术术语）**（GCP Functions）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「GCP Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**GCP Functions（技术术语）**（GCP Functions）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "wNguM6-YEznduz3MgBCYo": {
      "id": "wNguM6-YEznduz3MgBCYo",
      "zh": "Observability（技术术语）",
      "en": "Observability",
      "level": "core",
      "nodeType": "topic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Observability（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Observability（技术术语）**（Observability）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Observability（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Observability（技术术语）**（Observability）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "8rd7T5ahK2I_zh5co-IF-": {
      "id": "8rd7T5ahK2I_zh5co-IF-",
      "zh": "Jaeger（技术术语）",
      "en": "Jaeger",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Jaeger（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Jaeger（技术术语）**（Jaeger）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Jaeger（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Jaeger（技术术语）**（Jaeger）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "pk76Us6z8LoX3f0mhnCyR": {
      "id": "pk76Us6z8LoX3f0mhnCyR",
      "zh": "New Relic（技术术语）",
      "en": "New Relic",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「New Relic（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**New Relic（技术术语）**（New Relic）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「New Relic（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**New Relic（技术术语）**（New Relic）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "BHny2Emf96suhAlltiEro": {
      "id": "BHny2Emf96suhAlltiEro",
      "zh": "Datadog（技术术语）",
      "en": "Datadog",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Datadog（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Datadog（技术术语）**（Datadog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Datadog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Datadog（技术术语）**（Datadog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "eOyu4wmKOrcMlhD8pUGGh": {
      "id": "eOyu4wmKOrcMlhD8pUGGh",
      "zh": "Prometheus（技术术语）",
      "en": "Prometheus",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Prometheus（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Prometheus（技术术语）**（Prometheus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Prometheus（技术术语）**（Prometheus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "K81bmtgnB1gfhYdi3TB5a": {
      "id": "K81bmtgnB1gfhYdi3TB5a",
      "zh": "OpenTelemetry（技术术语）",
      "en": "OpenTelemetry",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「OpenTelemetry（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**OpenTelemetry（技术术语）**（OpenTelemetry）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「OpenTelemetry（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**OpenTelemetry（技术术语）**（OpenTelemetry）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "lUUJAEBrGJvL8dRs2n1GD": {
      "id": "lUUJAEBrGJvL8dRs2n1GD",
      "zh": "ESO（技术术语）",
      "en": "ESO",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「ESO（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**ESO（技术术语）**（ESO）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「ESO（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**ESO（技术术语）**（ESO）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "4aJVaimsuvGIPXMZ_WjaA": {
      "id": "4aJVaimsuvGIPXMZ_WjaA",
      "zh": "Dynatrace（技术术语）",
      "en": "Dynatrace",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Dynatrace（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Dynatrace（技术术语）**（Dynatrace）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Dynatrace（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Dynatrace（技术术语）**（Dynatrace）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "Kumwd6XOlEMeDohDH0q9P": {
      "id": "Kumwd6XOlEMeDohDH0q9P",
      "zh": "Salt（技术术语）",
      "en": "Salt",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「Salt（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**Salt（技术术语）**（Salt）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「Salt（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**Salt（技术术语）**（Salt）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    "3GryoQuI67JTHg9r3xUHO": {
      "id": "3GryoQuI67JTHg9r3xUHO",
      "zh": "OpenShift（技术术语）",
      "en": "OpenShift",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "story": "学习「OpenShift（技术术语）」时，先把它放进 DevOps 的真实场景，而不是孤立背术语。",
      "what": "**OpenShift（技术术语）**（OpenShift）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "why": "它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 掌握它后，你在 DevOps 里能独立实现和排障，而不是只会名词解释。",
      "howSteps": [
        "「OpenShift（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
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
          "body": "**OpenShift（技术术语）**（OpenShift）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。"
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
    }
  },
  "lessons": {
    "v5FGKQc-_7NYEsWjmTEuq": {
      "scene": "学习「学习aProgramming语言」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "学习aProgramming语言（Learn a Programming Language）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「学习aProgramming语言」出现在哪：上游输入是什么，下游输出是…",
          "text": "「学习aProgramming语言」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「学习aProgramming语言」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "TwVfCYMS9jSaJ6UyYmC-K": {
      "scene": "学习「Python（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Python（技术术语）（Python）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Python（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Python（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Python（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "PuXAPYA0bsMgwcnlwJxQn": {
      "scene": "学习「Ruby（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Ruby（技术术语）（Ruby）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Ruby（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Ruby（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Ruby（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "npnMwSDEK2aLGgnuZZ4dO": {
      "scene": "学习「Go（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Go（技术术语）（Go）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Go（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Go（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Go（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "eL62bKAoJCMsu7zPlgyhy": {
      "scene": "学习「Rust（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Rust（技术术语）（Rust）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Rust（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Rust（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Rust（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "QCdemtWa2mE78poNXeqzr": {
      "scene": "学习「JavaScript / Node.js 运行时」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "JavaScript / Node.js 运行时（JavaScript / Node.js）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「JavaScript / Node.js 运行时」出现在哪：上游输入是…",
          "text": "「JavaScript / Node.js 运行时」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「JavaScript / Node.js 运行时」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "qe84v529VbCyydl0BKFk2": {
      "scene": "学习「Operating系统」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Operating系统（Operating System）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Operating系统」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Operating系统」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Operating系统」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "cTqVab0VbVcn3W7i0wBrX": {
      "scene": "学习「Ubuntu / Debian（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Ubuntu / Debian（技术术语）（Ubuntu / Debian）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Ubuntu / Debian（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Ubuntu / Debian（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Ubuntu / Debian（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "zhNUK953p6tjREndk3yQZ": {
      "scene": "学习「SUSE Linux（技术术语）」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "SUSE Linux（技术术语）（SUSE Linux）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「SUSE Linux（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「SUSE Linux（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SUSE Linux（技术术语）」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "7mS6Y_BOAHNgM3OjyFtZ9": {
      "scene": "学习「RHEL / Derivatives（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "RHEL / Derivatives（技术术语）（RHEL / Derivatives）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「RHEL / Derivatives（技术术语）」出现在哪：上游输入是…",
          "text": "「RHEL / Derivatives（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「RHEL / Derivatives（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "PiPHFimToormOPl1EtEe8": {
      "scene": "学习「FreeBSD（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "FreeBSD（技术术语）（FreeBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「FreeBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「FreeBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「FreeBSD（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "97cJYKqv7CPPUXkKNwM4x": {
      "scene": "学习「OpenBSD（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "OpenBSD（技术术语）（OpenBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「OpenBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「OpenBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「OpenBSD（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "haiYSwNt3rjiiwCDszPk1": {
      "scene": "学习「NetBSD（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "NetBSD（技术术语）（NetBSD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「NetBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「NetBSD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「NetBSD（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "UOQimp7QkM3sxmFvk5d3i": {
      "scene": "学习「Windows（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Windows（技术术语）（Windows）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Windows（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Windows（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Windows（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "wjJPzrFJBNYOD3SJLzW2M": {
      "scene": "学习「终端Knowledge」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "终端Knowledge（Terminal Knowledge）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「终端Knowledge」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「终端Knowledge」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「终端Knowledge」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "x-JWvG1iw86ULL9KrQmRu": {
      "scene": "学习「进程监控」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "进程监控（Process Monitoring）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「进程监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「进程监控」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「进程监控」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "gIEQDgKOsoEnSv8mpEzGH": {
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
    "OaqKLZe-XnngcDhDzCtRt": {
      "scene": "学习「Networking Tools（技术术语）」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "Networking Tools（技术术语）（Networking Tools）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「Networking Tools（技术术语）」出现在哪：上游输入是什么…",
          "text": "「Networking Tools（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Networking Tools（技术术语）」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "cUifrP7v55psTb20IZndf": {
      "scene": "学习「Text操纵」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Text操纵（Text Manipulation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Text操纵」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Text操纵」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Text操纵」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "syBIAL1mHbJLnTBoSxXI7": {
      "scene": "学习「Bash（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Bash（技术术语）（Bash）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Bash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Bash（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Bash（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "z6IBekR8Xl-6f8WEb05Nw": {
      "scene": "学习「Power Shell（技术术语）」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "Power Shell（技术术语）（Power Shell）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「Power Shell（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Power Shell（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Power Shell（技术术语）」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "Jt8BmtLUH6fHT2pGKoJs3": {
      "scene": "学习「Vim / Nano /  Emacs（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Vim / Nano /  Emacs（技术术语）（Vim / Nano /  Emacs）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Vim / Nano /  Emacs（技术术语）」出现在哪：上游输入…",
          "text": "「Vim / Nano /  Emacs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Vim / Nano /  Emacs（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "LvhFmlxz5uIy7k_nzx2Bv": {
      "scene": "学习「版本控制Systems」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "版本控制Systems（Version Control Systems）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「版本控制Systems」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「版本控制Systems」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「版本控制Systems」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "uyDm1SpOQdpHjq9zBAdck": {
      "scene": "学习「Git（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Git（技术术语）（Git）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Git（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Git（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Git（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "h10BH3OybHcIN2iDTSGkn": {
      "scene": "学习「版本控制Hosting」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "版本控制Hosting（VCS Hosting）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「版本控制Hosting」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「版本控制Hosting」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「版本控制Hosting」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "ot9I_IHdnq2yAMffrSrbN": {
      "scene": "学习「GitHub（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub（技术术语）（GitHub）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GitHub（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "oQIB0KE0BibjIYmxrpPZS": {
      "scene": "学习「GitLab（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitLab（技术术语）（GitLab）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitLab（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「GitLab（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitLab（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "Z7SsBWgluZWr9iWb2e9XO": {
      "scene": "学习「Bitbucket（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Bitbucket（技术术语）（Bitbucket）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Bitbucket（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Bitbucket（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Bitbucket（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "jCWrnQNgjHKyhzd9dwOHz": {
      "scene": "学习「什么是and如何to配置X?」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "什么是and如何to配置X?（What is and how to setup X ?）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「什么是and如何to配置X?」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「什么是and如何to配置X?」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「什么是and如何to配置X?」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "F93XnRj0BLswJkzyRggLS": {
      "scene": "学习「Forward代理」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Forward代理（Forward Proxy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Forward代理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Forward代理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Forward代理」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "f3tM2uo6LLSOmyeFfLc7h": {
      "scene": "学习「防火墙」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "防火墙（Firewall）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「防火墙」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「防火墙」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「防火墙」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "ukOrSeyK1ElOt9tTjCkfO": {
      "scene": "学习「Nginx（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Nginx（技术术语）（Nginx）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Nginx（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Nginx（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Nginx（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "dF3otkMMN09tgCzci8Jyv": {
      "scene": "学习「Tomcat（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Tomcat（技术术语）（Tomcat）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Tomcat（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Tomcat（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Tomcat（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "0_GMTcMeZv3A8dYkHRoW7": {
      "scene": "学习「Apache（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Apache（技术术语）（Apache）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Apache（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Apache（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Apache（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "54UZNO2q8M5FiA_XbcU_D": {
      "scene": "学习「Caddy（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Caddy（技术术语）（Caddy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Caddy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Caddy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Caddy（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "5iJOE1QxMvf8BQ_8ssiI8": {
      "scene": "学习「IIS（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "IIS（技术术语）（IIS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「IIS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「IIS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「IIS（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "R4XSY4TSjU1M7cW66zUqJ": {
      "scene": "学习「缓存服务端」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "缓存服务端（Caching Server）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「缓存服务端」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "i8Sd9maB_BeFurULrHXNq": {
      "scene": "学习「负载均衡」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "负载均衡（Load Balancer）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「负载均衡」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「负载均衡」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「负载均衡」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "eGF7iyigl57myx2ejpmNC": {
      "scene": "学习「Reverse代理」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Reverse代理（Reverse Proxy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Reverse代理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Reverse代理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Reverse代理」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "CQhUflAcv1lhBnmDY0gaz": {
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
    "P0acFNZ413MSKElHqCxr3": {
      "scene": "学习「Docker（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Docker（技术术语）（Docker）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Docker（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "qYRJYIZsmf-inMqKECRkI": {
      "scene": "学习「LXC（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "LXC（技术术语）（LXC）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「LXC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「LXC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「LXC（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "2Wd9SlWGg6QtxgiUVLyZL": {
      "scene": "学习「Cloud Providers（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Cloud Providers（技术术语）（Cloud Providers）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Cloud Providers（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Cloud Providers（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Cloud Providers（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "1ieK6B_oqW8qOC6bdmiJe": {
      "scene": "学习「AWS（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "AWS（技术术语）（AWS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「AWS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「AWS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「AWS（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "ctor79Vd7EXDMdrLyUcu_": {
      "scene": "学习「Azure（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Azure（技术术语）（Azure）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Azure（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Azure（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Azure（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "zYrOxFQkl3KSe67fh3smD": {
      "scene": "学习「Google Cloud（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Google Cloud（技术术语）（Google Cloud）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Google Cloud（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「Google Cloud（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Google Cloud（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "-h-kNVDNzZYnQAR_4lfXc": {
      "scene": "学习「Digital Ocean（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "Digital Ocean（技术术语）（Digital Ocean）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「Digital Ocean（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Digital Ocean（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Digital Ocean（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "YUJf-6ccHvYjL_RzufQ-G": {
      "scene": "学习「Alibaba Cloud（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Alibaba Cloud（技术术语）（Alibaba Cloud）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Alibaba Cloud（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Alibaba Cloud（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Alibaba Cloud（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "I327qPYGMcdayRR5WT0Ek": {
      "scene": "学习「Hetzner（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Hetzner（技术术语）（Hetzner）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Hetzner（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Hetzner（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Hetzner（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "FaPf567JGRAg1MBlFj9Tk": {
      "scene": "学习「Heroku（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Heroku（技术术语）（Heroku）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Heroku（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Heroku（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Heroku（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "eJZdjheptmiwKsVokt7Io": {
      "scene": "学习「Contabo（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Contabo（技术术语）（Contabo）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Contabo（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Contabo（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Contabo（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "RDLmML_HS2c8J4D_U_KYe": {
      "scene": "学习「FTP / SFTP（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "FTP / SFTP（技术术语）（FTP / SFTP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「FTP / SFTP（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「FTP / SFTP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「FTP / SFTP（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "Vu955vdsYerCG8G6suqml": {
      "scene": "学习「DNS（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "DNS（技术术语）（DNS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「DNS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DNS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DNS（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "ke-8MeuLx7AS2XjSsPhxe": {
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
    "AJO3jtHvIICj8YKaSXl0U": {
      "scene": "学习「HTTPS（技术术语）」：API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "core": "HTTPS（技术术语）（HTTPS）。它解决的是“前端、后端和第三方之间如何稳定交换数据”的问题。 API 是契约：路径表达资源，请求表达意图，状态码表达结果，文档表达约定。",
      "route": [
        {
          "label": "定契约",
          "title": "明确「HTTPS（技术术语）」对应的资源、HTTP 方法和 URL 路径…",
          "text": "明确「HTTPS（技术术语）」对应的资源、HTTP 方法和 URL 路径。"
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
      "confusion": "容易混淆的是：会说「HTTPS（技术术语）」不等于会用。重点看 定契约 → 请求/响应 → 实现 handler → curl 验证 这条链路。",
      "experiment": "为一个用户列表接口写出 path、query、response、错误码；再用 curl 或 Postman 跑一遍成功和失败场景。"
    },
    "0o6ejhfpmO4S8A6djVWva": {
      "scene": "学习「SSL / TLS（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "SSL / TLS（技术术语）（SSL / TLS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「SSL / TLS（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「SSL / TLS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SSL / TLS（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "wcIRMLVm3SdEJWF9RPfn7": {
      "scene": "学习「SSH（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "SSH（技术术语）（SSH）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「SSH（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SSH（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SSH（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "E-lSLGzgOPrz-25ER2Hk7": {
      "scene": "学习「White / Grey Listing（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "White / Grey Listing（技术术语）（White / Grey Listing）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「White / Grey Listing（技术术语）」出现在哪：上游输…",
          "text": "「White / Grey Listing（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「White / Grey Listing（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "zJy9dOynWgLTDKI1iBluG": {
      "scene": "学习「SMTP（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "SMTP（技术术语）（SMTP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「SMTP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SMTP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SMTP（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "5vUKHuItQfkarp7LtACvX": {
      "scene": "学习「DMARC（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "DMARC（技术术语）（DMARC）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「DMARC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「DMARC（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「DMARC（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "WMuXqa4b5wyRuYAQKQJRj": {
      "scene": "学习「IMAP（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "IMAP（技术术语）（IMAP）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「IMAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「IMAP（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「IMAP（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "ewcJfnDFKXN8I5TLpXEaB": {
      "scene": "学习「SPF（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "SPF（技术术语）（SPF）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「SPF（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SPF（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SPF（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "fzO6xVTBxliu24f3W5zaU": {
      "scene": "学习「POP3S（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "POP3S（技术术语）（POP3S）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「POP3S（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「POP3S（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「POP3S（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "RYCD78msIR2BPJoIP71aj": {
      "scene": "学习「域密钥」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "域密钥（Domain Keys）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「域密钥」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「域密钥」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「域密钥」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "QZ7bkY-MaEgxYoPDP3nma": {
      "scene": "学习「OSI模型」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "OSI模型（OSI Model）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「OSI模型」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「OSI模型」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「OSI模型」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "w5d24Sf8GDkLDLGUPxzS9": {
      "scene": "学习「Networking（技术术语）与Protocols（技术术语）」：后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "core": "Networking（技术术语）与Protocols（技术术语）（Networking & Protocols）。它解决的是“在服务器上查看环境、管理文件、进程、权限和网络”的问题。 后端服务最终跑在操作系统上；Linux 能力决定你能不能定位线上问题。",
      "route": [
        {
          "label": "定位对象",
          "title": "「Networking（技术术语）与Protocols（技术术语）」出现…",
          "text": "「Networking（技术术语）与Protocols（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Networking（技术术语）与Protocols（技术术语）」不等于会用。重点看 定位对象 → 执行命令 → 读输出 → 保守改配置 这条链路。",
      "experiment": "在本机或容器里执行相关命令，记录输出；如果涉及进程/网络，补充 ps、ss、lsof 或 journalctl 观察。"
    },
    "9p_ufPj6QH9gHbWBQUmGw": {
      "scene": "学习「无服务器」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "无服务器（Serverless）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「无服务器」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「无服务器」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「无服务器」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "LZDRgDxEZ3klp2PrrJFBX": {
      "scene": "学习「Vercel（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Vercel（技术术语）（Vercel）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Vercel（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Vercel（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Vercel（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "l8VAewSEXzoyqYFhoplJj": {
      "scene": "学习「Cloudflare（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Cloudflare（技术术语）（Cloudflare）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Cloudflare（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Cloudflare（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Cloudflare（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "mlrlf2McMI7IBhyEdq0Nf": {
      "scene": "学习「Azure Functions（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Azure Functions（技术术语）（Azure Functions）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Azure Functions（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「Azure Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Azure Functions（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "UfQrIJ-uMNJt9H_VM_Q5q": {
      "scene": "学习「AWS Lambda（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "AWS Lambda（技术术语）（AWS Lambda）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「AWS Lambda（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「AWS Lambda（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「AWS Lambda（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "hCKODV2b_l2uPit0YeP1M": {
      "scene": "学习「Netlify（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Netlify（技术术语）（Netlify）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Netlify（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Netlify（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Netlify（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "1oYvpFG8LKT1JD6a_9J0m": {
      "scene": "学习「Provisioning（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Provisioning（技术术语）（Provisioning）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Provisioning（技术术语）」出现在哪：上游输入是什么，下游输…",
          "text": "「Provisioning（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Provisioning（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "XA__697KgofsH28coQ-ma": {
      "scene": "学习「AWS CDK（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "AWS CDK（技术术语）（AWS CDK）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「AWS CDK（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「AWS CDK（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「AWS CDK（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "TgBb4aL_9UkyU36CN4qvS": {
      "scene": "学习「CloudFormation（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "CloudFormation（技术术语）（CloudFormation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「CloudFormation（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「CloudFormation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CloudFormation（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "O0xZ3dy2zIDbOetVrgna6": {
      "scene": "学习「Pulumi（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Pulumi（技术术语）（Pulumi）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Pulumi（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Pulumi（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Pulumi（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "nUBGf1rp9GK_pbagWCP9g": {
      "scene": "学习「Terraform（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Terraform（技术术语）（Terraform）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Terraform（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Terraform（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Terraform（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "V9sOxlNOyRp0Mghl7zudv": {
      "scene": "学习「Configuration管理」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Configuration管理（Configuration Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Configuration管理」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Configuration管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Configuration管理」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "h9vVPOmdUSeEGVQQaSTH5": {
      "scene": "学习「Ansible（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Ansible（技术术语）（Ansible）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Ansible（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Ansible（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Ansible（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "kv508kxzUj_CjZRb-TeRv": {
      "scene": "学习「Chef（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Chef（技术术语）（Chef）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Chef（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Chef（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Chef（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "yP1y8U3eblpzbaLiCGliU": {
      "scene": "学习「Puppet（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Puppet（技术术语）（Puppet）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Puppet（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Puppet（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Puppet（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "aQJaouIaxIJChM-40M3HQ": {
      "scene": "学习「CI / CD Tools（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "CI / CD Tools（技术术语）（CI / CD Tools）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「CI / CD Tools（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「CI / CD Tools（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「CI / CD Tools（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "JnWVCS1HbAyfCJzGt-WOH": {
      "scene": "学习「GitHub Actions（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitHub Actions（技术术语）（GitHub Actions）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitHub Actions（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「GitHub Actions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitHub Actions（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "2KjSLLVTvl2G2KValw7S7": {
      "scene": "学习「GitLab CI（技术术语）」：把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "core": "GitLab CI（技术术语）（GitLab CI）。它解决的是“多人协作时如何安全地保存、比较、回退和合并代码”的问题。 把它放进工作区、暂存区、本地仓库、远程仓库这条链路里看，很多命令就不再是零散记忆。",
      "route": [
        {
          "label": "看工作区状态",
          "title": "「GitLab CI（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「GitLab CI（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GitLab CI（技术术语）」不等于会用。重点看 看工作区状态 → 暂存并提交 → 远程同步 → 协作收尾 这条链路。",
      "experiment": "新建一个测试仓库，改一个文件，依次执行 status/add/commit/log/diff；如果涉及远程，再做一次 push/pull 或 fetch/merge。"
    },
    "dUapFp3f0Rum-rf_Vk_b-": {
      "scene": "学习「Jenkins（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Jenkins（技术术语）（Jenkins）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Jenkins（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Jenkins（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Jenkins（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "1-JneOQeGhox-CKrdiquq": {
      "scene": "学习「Circle CI（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Circle CI（技术术语）（Circle CI）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Circle CI（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Circle CI（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Circle CI（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "TsXFx1wWikVBVoFUUDAMx": {
      "scene": "学习「Octopus Deploy（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Octopus Deploy（技术术语）（Octopus Deploy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Octopus Deploy（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Octopus Deploy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Octopus Deploy（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "L000AbzF3oLcn4B1eUIYX": {
      "scene": "学习「TeamCity（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "TeamCity（技术术语）（TeamCity）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「TeamCity（技术术语）」出现在哪：上游输入是什么，下游输出是什么…",
          "text": "「TeamCity（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「TeamCity（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "hcrPpjFxPi_iLiMdLKJrO": {
      "scene": "学习「密钥管理」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "密钥管理（Secret Management）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「密钥管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「密钥管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「密钥管理」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "ZWq23Q9ZNxLNti68oltxA": {
      "scene": "学习「Sealed Secrets（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Sealed Secrets（技术术语）（Sealed Secrets）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Sealed Secrets（技术术语）」出现在哪：上游输入是什么，下…",
          "text": "「Sealed Secrets（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Sealed Secrets（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "yQ4d2uiROZYr950cjYnQE": {
      "scene": "学习「Cloud Specific Tools（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Cloud Specific Tools（技术术语）（Cloud Specific Tools）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Cloud Specific Tools（技术术语）」出现在哪：上游输…",
          "text": "「Cloud Specific Tools（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Cloud Specific Tools（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "tZzvs80KzqT8aDvEyjack": {
      "scene": "学习「Vault（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Vault（技术术语）（Vault）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Vault（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Vault（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Vault（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "GHQWHLxsO40kJ6z_YCinJ": {
      "scene": "学习「SOPs（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "SOPs（技术术语）（SOPs）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「SOPs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「SOPs（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「SOPs（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "qqRLeTpuoW64H9LvY0U_w": {
      "scene": "学习「基础设施监控」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "基础设施监控（Infrastructure Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「基础设施监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「基础设施监控」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「基础设施监控」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "W9sKEoDlR8LzocQkqSv82": {
      "scene": "学习「Zabbix（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Zabbix（技术术语）（Zabbix）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Zabbix（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Zabbix（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Zabbix（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "NiVvRbCOCDpVvif48poCo": {
      "scene": "学习「Prometheus（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Prometheus（技术术语）（Prometheus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Prometheus（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "bujq_C-ejtpmk-ICALByy": {
      "scene": "学习「Datadog（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Datadog（技术术语）（Datadog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Datadog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Datadog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Datadog（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "niA_96yR7uQ0sc6S_OStf": {
      "scene": "学习「Grafana（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Grafana（技术术语）（Grafana）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Grafana（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Grafana（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Grafana（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "gaoZjOYmU0J5aM6vtLNvN": {
      "scene": "学习「Logs管理」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Logs管理（Logs Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Logs管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Logs管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Logs管理」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "K_qLhK2kKN_uCq7iVjqph": {
      "scene": "学习「Elastic Stack（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Elastic Stack（技术术语）（Elastic Stack）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Elastic Stack（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Elastic Stack（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Elastic Stack（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "s_kss4FJ2KyZRdcKNHK2v": {
      "scene": "学习「Graylog（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Graylog（技术术语）（Graylog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Graylog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Graylog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Graylog（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "dZID_Y_uRTF8JlfDCqeqs": {
      "scene": "学习「Splunk（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Splunk（技术术语）（Splunk）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Splunk（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Splunk（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Splunk（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "cjjMZdyLgakyVkImVQTza": {
      "scene": "学习「Papertrail（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Papertrail（技术术语）（Papertrail）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Papertrail（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Papertrail（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Papertrail（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "Yq8kVoRf20aL_o4VZU5--": {
      "scene": "学习「容器编排」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "容器编排（Container Orchestration）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「容器编排」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "XbrWlTyH4z8crSHkki2lp": {
      "scene": "学习「GKE / EKS / AKS（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "GKE / EKS / AKS（技术术语）（GKE / EKS / AKS）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「GKE / EKS / AKS（技术术语）」出现在哪：上游输入是什么，…",
          "text": "「GKE / EKS / AKS（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GKE / EKS / AKS（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "FE2h-uQy6qli3rKERci1j": {
      "scene": "学习「AWS ECS / Fargate（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "AWS ECS / Fargate（技术术语）（AWS ECS / Fargate）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「AWS ECS / Fargate（技术术语）」出现在哪：上游输入是什…",
          "text": "「AWS ECS / Fargate（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「AWS ECS / Fargate（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "VD24HC9qJOC42lbpJ-swC": {
      "scene": "学习「Docker Swarm（命令）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Docker Swarm（命令）（Docker Swarm）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Docker Swarm（命令）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "zuBAjrqQPjj-0DHGjCaqT": {
      "scene": "学习「Artifact管理」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Artifact管理（Artifact Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Artifact管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Artifact管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Artifact管理」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "C_sFyIsIIpriZlovvcbSE": {
      "scene": "学习「Artifactory（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Artifactory（技术术语）（Artifactory）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Artifactory（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Artifactory（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Artifactory（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "ootuLJfRXarVvm3J1Ir11": {
      "scene": "学习「Nexus（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Nexus（技术术语）（Nexus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Nexus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Nexus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Nexus（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "vsmE6EpCc2DFGk1YTbkHS": {
      "scene": "学习「Cloud Smith（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Cloud Smith（技术术语）（Cloud Smith）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Cloud Smith（技术术语）」出现在哪：上游输入是什么，下游输出…",
          "text": "「Cloud Smith（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Cloud Smith（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "-INN1qTMLimrZgaSPCcHj": {
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
    "i-DLwNXdCUUug6lfjkPSy": {
      "scene": "学习「ArgoCD（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "ArgoCD（技术术语）（ArgoCD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「ArgoCD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「ArgoCD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ArgoCD（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "6gVV_JUgKgwJb4C8tHZn7": {
      "scene": "学习「FluxCD（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "FluxCD（技术术语）（FluxCD）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「FluxCD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「FluxCD（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「FluxCD（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "EeWsihH9ehbFKebYoB5i9": {
      "scene": "学习「服务Mesh」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "服务Mesh（Service Mesh）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「服务Mesh」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「服务Mesh」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「服务Mesh」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "XsSnqW6k2IzvmrMmJeU6a": {
      "scene": "学习「Istio（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Istio（技术术语）（Istio）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Istio（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Istio（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Istio（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "OXOTm3nz6o44p50qd0brN": {
      "scene": "学习「Consul（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Consul（技术术语）（Consul）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Consul（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Consul（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Consul（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "hhoSe4q1u850PgK62Ubau": {
      "scene": "学习「Linkerd（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Linkerd（技术术语）（Linkerd）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Linkerd（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Linkerd（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Linkerd（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "epLLYArR16HlhAS4c33b4": {
      "scene": "学习「Envoy（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Envoy（技术术语）（Envoy）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Envoy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Envoy（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Envoy（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "Qc0MGR5bMG9eeM5Zb9PMk": {
      "scene": "学习「云设计模式」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "云设计模式（Cloud Design Patterns）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「云设计模式」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「云设计模式」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「云设计模式」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "JCe3fcOf-sokTJURyX1oI": {
      "scene": "学习「可用性」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "可用性（Availability）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「可用性」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「可用性」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「可用性」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "5FN7iva4DW_lv-r1tijd8": {
      "scene": "学习「数据管理」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "数据管理（Data Management）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「数据管理」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「数据管理」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「数据管理」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "1_NRXjckZ0F8EtEmgixqz": {
      "scene": "学习「设计与Implementation（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "设计与Implementation（技术术语）（Design and Implementation）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「设计与Implementation（技术术语）」出现在哪：上游输入是什…",
          "text": "「设计与Implementation（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「设计与Implementation（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "8kby89epyullS9W7uKDrs": {
      "scene": "学习「管理与监控」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "管理与监控（Management and Monitoring）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「管理与监控」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「管理与监控」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「管理与监控」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "w2eCgBC-ydMHSxh7LMti8": {
      "scene": "学习「Loki（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Loki（技术术语）（Loki）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Loki（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Loki（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Loki（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "hIBeTUiAI3zwUY6NgAO-A": {
      "scene": "学习「Kubernetes（技术术语）」：Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "core": "Kubernetes（技术术语）（Kubernetes）。它解决的是“如何在集群里声明、调度、暴露和自愈一组容器化应用”的问题。 Kubernetes 不是单个工具，而是一套控制循环：你声明期望状态，控制器持续把实际状态拉回去。",
      "route": [
        {
          "label": "声明期望状态",
          "title": "「Kubernetes（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Kubernetes（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Kubernetes（技术术语）」不等于会用。重点看 声明期望状态 → 看 Pod/Service → 暴露与配置 → events 排障 这条链路。",
      "experiment": "用本地集群部署一个 nginx Deployment，加 Service 暴露，再手动删除一个 Pod 观察它自动重建。"
    },
    "JXsctlXUUS1ie8nNEgIk9": {
      "scene": "学习「GCP Functions（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "GCP Functions（技术术语）（GCP Functions）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「GCP Functions（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「GCP Functions（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「GCP Functions（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "wNguM6-YEznduz3MgBCYo": {
      "scene": "学习「Observability（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Observability（技术术语）（Observability）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Observability（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「Observability（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Observability（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "8rd7T5ahK2I_zh5co-IF-": {
      "scene": "学习「Jaeger（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Jaeger（技术术语）（Jaeger）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Jaeger（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Jaeger（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Jaeger（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "pk76Us6z8LoX3f0mhnCyR": {
      "scene": "学习「New Relic（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "New Relic（技术术语）（New Relic）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「New Relic（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「New Relic（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「New Relic（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "BHny2Emf96suhAlltiEro": {
      "scene": "学习「Datadog（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Datadog（技术术语）（Datadog）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Datadog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Datadog（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Datadog（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "eOyu4wmKOrcMlhD8pUGGh": {
      "scene": "学习「Prometheus（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Prometheus（技术术语）（Prometheus）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是…",
          "text": "「Prometheus（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Prometheus（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "K81bmtgnB1gfhYdi3TB5a": {
      "scene": "学习「OpenTelemetry（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "OpenTelemetry（技术术语）（OpenTelemetry）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「OpenTelemetry（技术术语）」出现在哪：上游输入是什么，下游…",
          "text": "「OpenTelemetry（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「OpenTelemetry（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "lUUJAEBrGJvL8dRs2n1GD": {
      "scene": "学习「ESO（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "ESO（技术术语）（ESO）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「ESO（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「ESO（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「ESO（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "4aJVaimsuvGIPXMZ_WjaA": {
      "scene": "学习「Dynatrace（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Dynatrace（技术术语）（Dynatrace）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Dynatrace（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「Dynatrace（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Dynatrace（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "Kumwd6XOlEMeDohDH0q9P": {
      "scene": "学习「Salt（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "Salt（技术术语）（Salt）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「Salt（技术术语）」出现在哪：上游输入是什么，下游输出是什么。",
          "text": "「Salt（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「Salt（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    },
    "3GryoQuI67JTHg9r3xUHO": {
      "scene": "学习「OpenShift（技术术语）」：DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "core": "OpenShift（技术术语）（OpenShift）。它解决的是“如何把代码稳定、可追踪、可回滚地交付到环境里”的问题。 DevOps 不是某个工具，而是从提交、构建、测试、发布到监控反馈的一条闭环。",
      "route": [
        {
          "label": "触发流水线",
          "title": "「OpenShift（技术术语）」出现在哪：上游输入是什么，下游输出是什…",
          "text": "「OpenShift（技术术语）」出现在哪：上游输入是什么，下游输出是什么。"
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
      "confusion": "容易混淆的是：会说「OpenShift（技术术语）」不等于会用。重点看 触发流水线 → 构建测试 → 部署发布 → 监控回滚 这条链路。",
      "experiment": "写一个最小 CI 流水线：安装依赖、运行测试、构建产物；故意制造失败，观察日志和退出码。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
