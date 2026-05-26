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
          "id": "74JxgfJ_1qmVNZ_QRp9Ne",
          "label": "What are Containers?",
          "zh": "容器是什么",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 587,
          "y": 103,
          "w": 304,
          "h": 49
        },
        {
          "id": "i4ijY3T5gLgNz0XqRipXe",
          "label": "Why do we need Containers?",
          "zh": "为什么需要容器",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 587,
          "y": 156,
          "w": 304,
          "h": 49
        },
        {
          "id": "Py9nst2FDJ1_hoXeX_qSF",
          "label": "Introduction",
          "zh": "入门介绍",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 221,
          "y": 175,
          "w": 227,
          "h": 49
        },
        {
          "id": "3hatcMVLDbMuz73uTx-9P",
          "label": "Bare Metal vs VMs vs Containers",
          "zh": "裸机、虚拟机与容器对比",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 587,
          "y": 209,
          "w": 304,
          "h": 49
        },
        {
          "id": "mw-weCutd2ECKlx2DE_ZJ",
          "label": "Package Managers",
          "zh": "Package Managers（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -177,
          "y": 210,
          "w": 292,
          "h": 49
        },
        {
          "id": "uKjB2qntFTpPuYUT9sdxd",
          "label": "Users / Groups Permissions",
          "zh": "Users / Groups Permissions（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -177,
          "y": 263,
          "w": 292,
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
      "zh": "阶段 02：Underlying Technologies（技术术语）",
      "en": "Underlying Technologies",
      "desc": "按 roadmap.sh 原始顺序整理的第 2 组学习节点。",
      "nodes": [
        {
          "id": "43drPbTwPqJQPyzwYUdBT",
          "label": "Docker and OCI",
          "zh": "Docker and OCI（命令）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 588,
          "y": 263,
          "w": 304,
          "h": 49
        },
        {
          "id": "W5kX5jn49hghRgkEw6_S3",
          "label": "Shell Commands",
          "zh": "Shell Commands（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -177,
          "y": 316,
          "w": 292,
          "h": 49
        },
        {
          "id": "jrH1qE6EnFXL4fTyYU8gR",
          "label": "Underlying Technologies",
          "zh": "Underlying Technologies（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 211,
          "y": 355,
          "w": 246,
          "h": 49
        },
        {
          "id": "BvV8VCX39wRB-g8WvGF1g",
          "label": "Namespaces",
          "zh": "Namespaces（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 591,
          "y": 355,
          "w": 161,
          "h": 49
        },
        {
          "id": "fRl4EfNwlBiidzn3IV34-",
          "label": "cgroups",
          "zh": "cgroups（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 758,
          "y": 355,
          "w": 137,
          "h": 49
        },
        {
          "id": "InlMtuaUJ9EXO-OD9x1jj",
          "label": "Shell Scripting",
          "zh": "Shell Scripting（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -177,
          "y": 369,
          "w": 292,
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
      "zh": "阶段 03：安装与配置",
      "en": "Installation / Setup",
      "desc": "按 roadmap.sh 原始顺序整理的第 3 组学习节点。",
      "nodes": [
        {
          "id": "vEUfw_vobshuZI0-q8RZo",
          "label": "Union Filesystems",
          "zh": "UNION 联合查询Filesystems",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 591,
          "y": 409,
          "w": 304,
          "h": 49
        },
        {
          "id": "XxT9UUjbKW1ARyERSLH_W",
          "label": "Programming Languages",
          "zh": "Programming Languages（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -177,
          "y": 480,
          "w": 292,
          "h": 49
        },
        {
          "id": "EqYWfBL5l5OOquok_OvOW",
          "label": "Application Architecture",
          "zh": "Application架构",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -177,
          "y": 534,
          "w": 292,
          "h": 49
        },
        {
          "id": "01nDXqxVdMv4SeXc0nYHH",
          "label": "Installation / Setup",
          "zh": "安装与配置",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 221,
          "y": 539,
          "w": 226,
          "h": 49
        },
        {
          "id": "NCdsPRhJy7UtQFNLo1J1f",
          "label": "Docker Desktop (Win/Mac/Linux)",
          "zh": "Docker Desktop (Win/Mac/Linux)（命令）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 591,
          "y": 539,
          "w": 304,
          "h": 49
        },
        {
          "id": "kIqx7Inf50mE9W0juwNBz",
          "label": "Basics of Docker",
          "zh": "基础ofDocker",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 221,
          "y": 592,
          "w": 226,
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
      "zh": "阶段 04：使用3rdParty容器镜像",
      "en": "Using 3rd Party Container Images",
      "desc": "按 roadmap.sh 原始顺序整理的第 4 组学习节点。",
      "nodes": [
        {
          "id": "0NKqLUWtJMlXn-m6wpA6f",
          "label": "Docker Engine ( Linux )",
          "zh": "Docker Engine ( Linux )（命令）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 591,
          "y": 593,
          "w": 304,
          "h": 49
        },
        {
          "id": "LShK3-1EGGuXnEvdScFR7",
          "label": "Using 3rd Party Container Images",
          "zh": "使用3rdParty容器镜像",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -194,
          "y": 702,
          "w": 333,
          "h": 49
        },
        {
          "id": "uUPYXmwu27SBPqKZx6U_q",
          "label": "Data Persistence",
          "zh": "数据持久化",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 221,
          "y": 702,
          "w": 226,
          "h": 49
        },
        {
          "id": "086zZYjtzdCaDHm-MkSqg",
          "label": "Ephemeral Container Filesystem",
          "zh": "Ephemeral容器Filesystem",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 591,
          "y": 702,
          "w": 310,
          "h": 49
        },
        {
          "id": "woemCQmWTR-hIoWAci3d5",
          "label": "Volume Mounts",
          "zh": "Volume Mounts（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 591,
          "y": 755,
          "w": 164,
          "h": 49
        },
        {
          "id": "wZcCW1ojGzUakHCv2AaI1",
          "label": "Bind Mounts",
          "zh": "Bind Mounts（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 758,
          "y": 755,
          "w": 144,
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
      "zh": "阶段 05：容器Registries",
      "en": "Container Registries",
      "desc": "按 roadmap.sh 原始顺序整理的第 5 组学习节点。",
      "nodes": [
        {
          "id": "jKSE_wKYf4P9wnSh_LkMi",
          "label": "Databases",
          "zh": "数据库",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -194,
          "y": 787,
          "w": 278,
          "h": 49
        },
        {
          "id": "YzpB7rgSR4ueQRLa0bRWa",
          "label": "Command Line Utilities",
          "zh": "命令LineUtilities",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -194,
          "y": 840,
          "w": 278,
          "h": 49
        },
        {
          "id": "mAaEz-bwB5DLaBbOSYGMn",
          "label": "Runtime Configuration Options",
          "zh": "Runtime Configuration Options（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 222,
          "y": 854,
          "w": 316,
          "h": 49
        },
        {
          "id": "jjA9E0J8N2frfeJCNtA1m",
          "label": "docker compose",
          "zh": "docker compose（命令）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 626,
          "y": 854,
          "w": 277,
          "h": 49
        },
        {
          "id": "6eu5NRA1sJuaHTlHtNurc",
          "label": "docker run",
          "zh": "docker run（命令）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 626,
          "y": 907,
          "w": 277,
          "h": 49
        },
        {
          "id": "3VKPiMfbGBxv9m_SljIQV",
          "label": "Container Registries",
          "zh": "容器Registries",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 222,
          "y": 978,
          "w": 223,
          "h": 50
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
      "zh": "阶段 06：运行容器",
      "en": "Running Containers",
      "desc": "按 roadmap.sh 原始顺序整理的第 6 组学习节点。",
      "nodes": [
        {
          "id": "z2eeBXPzo-diQ67Fcfyhc",
          "label": "Running Containers",
          "zh": "运行容器",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 626,
          "y": 978,
          "w": 277,
          "h": 50
        },
        {
          "id": "5OEfBQaYNOCi999x6QUqW",
          "label": "Building Container Images",
          "zh": "构建容器镜像",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": -194,
          "y": 979,
          "w": 333,
          "h": 49
        },
        {
          "id": "yGRQcx64S-yBGEoOeMc55",
          "label": "Dockerfiles",
          "zh": "Dockerfile 文件",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -194,
          "y": 1083,
          "w": 278,
          "h": 49
        },
        {
          "id": "rxVR62_yXIjc-L4GFSV6u",
          "label": "Dockerhub",
          "zh": "Docker Hub 镜像仓库",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 192,
          "y": 1087,
          "w": 283,
          "h": 49
        },
        {
          "id": "frshJqVMP8D7o_7tMZMPI",
          "label": "Efficient Layer Caching",
          "zh": "高效层缓存",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -194,
          "y": 1136,
          "w": 278,
          "h": 49
        },
        {
          "id": "fh5aERX7c-lY9FPsmftoF",
          "label": "Others (ghcr, ecr, gcr, acr, etc)",
          "zh": "其他镜像仓库（GHCR/ECR/GCR/ACR 等）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 192,
          "y": 1140,
          "w": 283,
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
      "zh": "阶段 07：镜像安全",
      "en": "Image Security",
      "desc": "按 roadmap.sh 原始顺序整理的第 7 组学习节点。",
      "nodes": [
        {
          "id": "M5UG-ZcyhBPbksZd0ZdNt",
          "label": "Image Security",
          "zh": "镜像安全",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 553,
          "y": 1141,
          "w": 214,
          "h": 49
        },
        {
          "id": "-8wAzF6_3gruiM3VYMvB0",
          "label": "Image Size and Security",
          "zh": "镜像Size与安全",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -194,
          "y": 1189,
          "w": 278,
          "h": 49
        },
        {
          "id": "Vs4WQwgJFhA63U9Gf2ym0",
          "label": "Image Tagging Best Practices",
          "zh": "镜像Tagging最佳实践",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 192,
          "y": 1193,
          "w": 283,
          "h": 49
        },
        {
          "id": "vYug8kcwrMoWf8ft4UDNI",
          "label": "Runtime Security",
          "zh": "Runtime安全",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 553,
          "y": 1194,
          "w": 214,
          "h": 49
        },
        {
          "id": "3Nsg-F3wMKEzEsXw1MBZv",
          "label": "Images",
          "zh": "镜像",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -189,
          "y": 1297,
          "w": 141,
          "h": 49
        },
        {
          "id": "jhwe-xfVc-C7qy8YuS5dZ",
          "label": "Containers",
          "zh": "容器",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -43,
          "y": 1297,
          "w": 136,
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
      "zh": "阶段 08：Docker CLI（命令）",
      "en": "Docker CLI",
      "desc": "按 roadmap.sh 原始顺序整理的第 8 组学习节点。",
      "nodes": [
        {
          "id": "b-LwyYiegbF0jIrn7HYRv",
          "label": "Docker CLI",
          "zh": "Docker CLI（命令）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 217,
          "y": 1297,
          "w": 246,
          "h": 49
        },
        {
          "id": "78YFahP3Fg-c27reLkuK4",
          "label": "Container Security",
          "zh": "容器安全",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 626,
          "y": 1297,
          "w": 277,
          "h": 50
        },
        {
          "id": "eHtVLB6v3h7hatJb-9cZK",
          "label": "Volumes",
          "zh": "Volumes（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -189,
          "y": 1351,
          "w": 141,
          "h": 49
        },
        {
          "id": "w5QjzvOaciK2rotOkjvjQ",
          "label": "Networks",
          "zh": "Networks（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -43,
          "y": 1351,
          "w": 136,
          "h": 49
        },
        {
          "id": "r1eJZDZYouUjnGwAtRbyU",
          "label": "Nomad",
          "zh": "Nomad（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 626,
          "y": 1398,
          "w": 277,
          "h": 49
        },
        {
          "id": "ks6PFN-0Z9zH7gtWaWgxz",
          "label": "Docker Swarm",
          "zh": "Docker Swarm（命令）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 626,
          "y": 1451,
          "w": 277,
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
      "zh": "阶段 09：Networking（技术术语）",
      "en": "Networking",
      "desc": "按 roadmap.sh 原始顺序整理的第 9 组学习节点。",
      "nodes": [
        {
          "id": "9NuHwfytnUTpeVmnMpZZC",
          "label": "Networking",
          "zh": "Networking（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 217,
          "y": 1465,
          "w": 246,
          "h": 49
        },
        {
          "id": "4p5d3rzCHy4vjg2PRX-2k",
          "label": "Hot Reloading",
          "zh": "Hot Reloading（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -191,
          "y": 1482,
          "w": 246,
          "h": 49
        },
        {
          "id": "RqXpX2XabtHYVjgg1EZR_",
          "label": "Kubernetes",
          "zh": "Kubernetes（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 626,
          "y": 1504,
          "w": 277,
          "h": 49
        },
        {
          "id": "LiAV9crrTHhLqeZhD25a2",
          "label": "Debuggers",
          "zh": "Debuggers（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -191,
          "y": 1535,
          "w": 246,
          "h": 49
        },
        {
          "id": "PP_RRBo_pThe2mgf6xzMP",
          "label": "PaaS Options",
          "zh": "PaaS Options（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": 626,
          "y": 1557,
          "w": 277,
          "h": 49
        },
        {
          "id": "Kmyo1_Mor9WHLkRhNShRZ",
          "label": "Tests",
          "zh": "Tests（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -191,
          "y": 1588,
          "w": 246,
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
      "zh": "阶段 10：Developer Experience（技术术语）",
      "en": "Developer Experience",
      "desc": "按 roadmap.sh 原始顺序整理的第 10 组学习节点。",
      "nodes": [
        {
          "id": "oyqw4tr-taZcxt5kREh1g",
          "label": "Continuous Integration",
          "zh": "持续集成",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "subtopic",
          "x": -191,
          "y": 1641,
          "w": 246,
          "h": 49
        },
        {
          "id": "hHXTth0ZP8O-iMGR9xfu9",
          "label": "Developer Experience",
          "zh": "Developer Experience（技术术语）",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 217,
          "y": 1644,
          "w": 246,
          "h": 49
        },
        {
          "id": "qXOGqORi3EdqwsP9Uhi9m",
          "label": "Deploying Containers",
          "zh": "Deploying容器",
          "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
          "level": "core",
          "nodeType": "topic",
          "x": 626,
          "y": 1644,
          "w": 277,
          "h": 49
        }
      ],
      "index": 10,
      "mapX": 610,
      "mapY": 802,
      "mapW": 430,
      "mapH": 232
    }
  ],
  "nodes": [
    {
      "id": "Py9nst2FDJ1_hoXeX_qSF",
      "label": "Introduction",
      "zh": "入门介绍",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 221,
      "y": 175,
      "w": 227,
      "h": 49
    },
    {
      "id": "74JxgfJ_1qmVNZ_QRp9Ne",
      "label": "What are Containers?",
      "zh": "容器是什么",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 587,
      "y": 103,
      "w": 304,
      "h": 49
    },
    {
      "id": "i4ijY3T5gLgNz0XqRipXe",
      "label": "Why do we need Containers?",
      "zh": "为什么需要容器",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 587,
      "y": 156,
      "w": 304,
      "h": 49
    },
    {
      "id": "3hatcMVLDbMuz73uTx-9P",
      "label": "Bare Metal vs VMs vs Containers",
      "zh": "裸机、虚拟机与容器对比",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 587,
      "y": 209,
      "w": 304,
      "h": 49
    },
    {
      "id": "43drPbTwPqJQPyzwYUdBT",
      "label": "Docker and OCI",
      "zh": "Docker and OCI（命令）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 588,
      "y": 263,
      "w": 304,
      "h": 49
    },
    {
      "id": "mw-weCutd2ECKlx2DE_ZJ",
      "label": "Package Managers",
      "zh": "Package Managers（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -177,
      "y": 210,
      "w": 292,
      "h": 49
    },
    {
      "id": "uKjB2qntFTpPuYUT9sdxd",
      "label": "Users / Groups Permissions",
      "zh": "Users / Groups Permissions（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -177,
      "y": 263,
      "w": 292,
      "h": 49
    },
    {
      "id": "W5kX5jn49hghRgkEw6_S3",
      "label": "Shell Commands",
      "zh": "Shell Commands（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -177,
      "y": 316,
      "w": 292,
      "h": 49
    },
    {
      "id": "InlMtuaUJ9EXO-OD9x1jj",
      "label": "Shell Scripting",
      "zh": "Shell Scripting（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -177,
      "y": 369,
      "w": 292,
      "h": 49
    },
    {
      "id": "XxT9UUjbKW1ARyERSLH_W",
      "label": "Programming Languages",
      "zh": "Programming Languages（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -177,
      "y": 480,
      "w": 292,
      "h": 49
    },
    {
      "id": "EqYWfBL5l5OOquok_OvOW",
      "label": "Application Architecture",
      "zh": "Application架构",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -177,
      "y": 534,
      "w": 292,
      "h": 49
    },
    {
      "id": "jrH1qE6EnFXL4fTyYU8gR",
      "label": "Underlying Technologies",
      "zh": "Underlying Technologies（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 211,
      "y": 355,
      "w": 246,
      "h": 49
    },
    {
      "id": "BvV8VCX39wRB-g8WvGF1g",
      "label": "Namespaces",
      "zh": "Namespaces（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 591,
      "y": 355,
      "w": 161,
      "h": 49
    },
    {
      "id": "fRl4EfNwlBiidzn3IV34-",
      "label": "cgroups",
      "zh": "cgroups（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 758,
      "y": 355,
      "w": 137,
      "h": 49
    },
    {
      "id": "vEUfw_vobshuZI0-q8RZo",
      "label": "Union Filesystems",
      "zh": "UNION 联合查询Filesystems",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 591,
      "y": 409,
      "w": 304,
      "h": 49
    },
    {
      "id": "01nDXqxVdMv4SeXc0nYHH",
      "label": "Installation / Setup",
      "zh": "安装与配置",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 221,
      "y": 539,
      "w": 226,
      "h": 49
    },
    {
      "id": "NCdsPRhJy7UtQFNLo1J1f",
      "label": "Docker Desktop (Win/Mac/Linux)",
      "zh": "Docker Desktop (Win/Mac/Linux)（命令）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 591,
      "y": 539,
      "w": 304,
      "h": 49
    },
    {
      "id": "0NKqLUWtJMlXn-m6wpA6f",
      "label": "Docker Engine ( Linux )",
      "zh": "Docker Engine ( Linux )（命令）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 591,
      "y": 593,
      "w": 304,
      "h": 49
    },
    {
      "id": "kIqx7Inf50mE9W0juwNBz",
      "label": "Basics of Docker",
      "zh": "基础ofDocker",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 221,
      "y": 592,
      "w": 226,
      "h": 49
    },
    {
      "id": "uUPYXmwu27SBPqKZx6U_q",
      "label": "Data Persistence",
      "zh": "数据持久化",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 221,
      "y": 702,
      "w": 226,
      "h": 49
    },
    {
      "id": "086zZYjtzdCaDHm-MkSqg",
      "label": "Ephemeral Container Filesystem",
      "zh": "Ephemeral容器Filesystem",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 591,
      "y": 702,
      "w": 310,
      "h": 49
    },
    {
      "id": "woemCQmWTR-hIoWAci3d5",
      "label": "Volume Mounts",
      "zh": "Volume Mounts（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 591,
      "y": 755,
      "w": 164,
      "h": 49
    },
    {
      "id": "wZcCW1ojGzUakHCv2AaI1",
      "label": "Bind Mounts",
      "zh": "Bind Mounts（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 758,
      "y": 755,
      "w": 144,
      "h": 49
    },
    {
      "id": "LShK3-1EGGuXnEvdScFR7",
      "label": "Using 3rd Party Container Images",
      "zh": "使用3rdParty容器镜像",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -194,
      "y": 702,
      "w": 333,
      "h": 49
    },
    {
      "id": "jKSE_wKYf4P9wnSh_LkMi",
      "label": "Databases",
      "zh": "数据库",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -194,
      "y": 787,
      "w": 278,
      "h": 49
    },
    {
      "id": "YzpB7rgSR4ueQRLa0bRWa",
      "label": "Command Line Utilities",
      "zh": "命令LineUtilities",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -194,
      "y": 840,
      "w": 278,
      "h": 49
    },
    {
      "id": "5OEfBQaYNOCi999x6QUqW",
      "label": "Building Container Images",
      "zh": "构建容器镜像",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": -194,
      "y": 979,
      "w": 333,
      "h": 49
    },
    {
      "id": "yGRQcx64S-yBGEoOeMc55",
      "label": "Dockerfiles",
      "zh": "Dockerfile 文件",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -194,
      "y": 1083,
      "w": 278,
      "h": 49
    },
    {
      "id": "frshJqVMP8D7o_7tMZMPI",
      "label": "Efficient Layer Caching",
      "zh": "高效层缓存",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -194,
      "y": 1136,
      "w": 278,
      "h": 49
    },
    {
      "id": "-8wAzF6_3gruiM3VYMvB0",
      "label": "Image Size and Security",
      "zh": "镜像Size与安全",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -194,
      "y": 1189,
      "w": 278,
      "h": 49
    },
    {
      "id": "3VKPiMfbGBxv9m_SljIQV",
      "label": "Container Registries",
      "zh": "容器Registries",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 222,
      "y": 978,
      "w": 223,
      "h": 50
    },
    {
      "id": "rxVR62_yXIjc-L4GFSV6u",
      "label": "Dockerhub",
      "zh": "Docker Hub 镜像仓库",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 192,
      "y": 1087,
      "w": 283,
      "h": 49
    },
    {
      "id": "Vs4WQwgJFhA63U9Gf2ym0",
      "label": "Image Tagging Best Practices",
      "zh": "镜像Tagging最佳实践",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 192,
      "y": 1193,
      "w": 283,
      "h": 49
    },
    {
      "id": "fh5aERX7c-lY9FPsmftoF",
      "label": "Others (ghcr, ecr, gcr, acr, etc)",
      "zh": "其他镜像仓库（GHCR/ECR/GCR/ACR 等）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 192,
      "y": 1140,
      "w": 283,
      "h": 49
    },
    {
      "id": "z2eeBXPzo-diQ67Fcfyhc",
      "label": "Running Containers",
      "zh": "运行容器",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 626,
      "y": 978,
      "w": 277,
      "h": 50
    },
    {
      "id": "6eu5NRA1sJuaHTlHtNurc",
      "label": "docker run",
      "zh": "docker run（命令）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 626,
      "y": 907,
      "w": 277,
      "h": 49
    },
    {
      "id": "jjA9E0J8N2frfeJCNtA1m",
      "label": "docker compose",
      "zh": "docker compose（命令）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 626,
      "y": 854,
      "w": 277,
      "h": 49
    },
    {
      "id": "mAaEz-bwB5DLaBbOSYGMn",
      "label": "Runtime Configuration Options",
      "zh": "Runtime Configuration Options（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 222,
      "y": 854,
      "w": 316,
      "h": 49
    },
    {
      "id": "78YFahP3Fg-c27reLkuK4",
      "label": "Container Security",
      "zh": "容器安全",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 626,
      "y": 1297,
      "w": 277,
      "h": 50
    },
    {
      "id": "vYug8kcwrMoWf8ft4UDNI",
      "label": "Runtime Security",
      "zh": "Runtime安全",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 553,
      "y": 1194,
      "w": 214,
      "h": 49
    },
    {
      "id": "M5UG-ZcyhBPbksZd0ZdNt",
      "label": "Image Security",
      "zh": "镜像安全",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 553,
      "y": 1141,
      "w": 214,
      "h": 49
    },
    {
      "id": "b-LwyYiegbF0jIrn7HYRv",
      "label": "Docker CLI",
      "zh": "Docker CLI（命令）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 217,
      "y": 1297,
      "w": 246,
      "h": 49
    },
    {
      "id": "3Nsg-F3wMKEzEsXw1MBZv",
      "label": "Images",
      "zh": "镜像",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -189,
      "y": 1297,
      "w": 141,
      "h": 49
    },
    {
      "id": "jhwe-xfVc-C7qy8YuS5dZ",
      "label": "Containers",
      "zh": "容器",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -43,
      "y": 1297,
      "w": 136,
      "h": 49
    },
    {
      "id": "eHtVLB6v3h7hatJb-9cZK",
      "label": "Volumes",
      "zh": "Volumes（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -189,
      "y": 1351,
      "w": 141,
      "h": 49
    },
    {
      "id": "w5QjzvOaciK2rotOkjvjQ",
      "label": "Networks",
      "zh": "Networks（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -43,
      "y": 1351,
      "w": 136,
      "h": 49
    },
    {
      "id": "hHXTth0ZP8O-iMGR9xfu9",
      "label": "Developer Experience",
      "zh": "Developer Experience（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 217,
      "y": 1644,
      "w": 246,
      "h": 49
    },
    {
      "id": "4p5d3rzCHy4vjg2PRX-2k",
      "label": "Hot Reloading",
      "zh": "Hot Reloading（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -191,
      "y": 1482,
      "w": 246,
      "h": 49
    },
    {
      "id": "LiAV9crrTHhLqeZhD25a2",
      "label": "Debuggers",
      "zh": "Debuggers（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -191,
      "y": 1535,
      "w": 246,
      "h": 49
    },
    {
      "id": "Kmyo1_Mor9WHLkRhNShRZ",
      "label": "Tests",
      "zh": "Tests（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -191,
      "y": 1588,
      "w": 246,
      "h": 49
    },
    {
      "id": "oyqw4tr-taZcxt5kREh1g",
      "label": "Continuous Integration",
      "zh": "持续集成",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": -191,
      "y": 1641,
      "w": 246,
      "h": 49
    },
    {
      "id": "qXOGqORi3EdqwsP9Uhi9m",
      "label": "Deploying Containers",
      "zh": "Deploying容器",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 626,
      "y": 1644,
      "w": 277,
      "h": 49
    },
    {
      "id": "PP_RRBo_pThe2mgf6xzMP",
      "label": "PaaS Options",
      "zh": "PaaS Options（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 626,
      "y": 1557,
      "w": 277,
      "h": 49
    },
    {
      "id": "RqXpX2XabtHYVjgg1EZR_",
      "label": "Kubernetes",
      "zh": "Kubernetes（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 626,
      "y": 1504,
      "w": 277,
      "h": 49
    },
    {
      "id": "r1eJZDZYouUjnGwAtRbyU",
      "label": "Nomad",
      "zh": "Nomad（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 626,
      "y": 1398,
      "w": 277,
      "h": 49
    },
    {
      "id": "ks6PFN-0Z9zH7gtWaWgxz",
      "label": "Docker Swarm",
      "zh": "Docker Swarm（命令）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "subtopic",
      "x": 626,
      "y": 1451,
      "w": 277,
      "h": 49
    },
    {
      "id": "9NuHwfytnUTpeVmnMpZZC",
      "label": "Networking",
      "zh": "Networking（技术术语）",
      "desc": "Docker 容器化 学习节点，建议结合动手实验理解。",
      "level": "core",
      "nodeType": "topic",
      "x": 217,
      "y": 1465,
      "w": 246,
      "h": 49
    }
  ],
  "tutorials": {
    "Py9nst2FDJ1_hoXeX_qSF": {
      "id": "Py9nst2FDJ1_hoXeX_qSF",
      "zh": "入门介绍",
      "en": "Introduction",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「入门介绍」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**入门介绍**（Introduction）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**入门介绍**（Introduction）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "74JxgfJ_1qmVNZ_QRp9Ne": {
      "id": "74JxgfJ_1qmVNZ_QRp9Ne",
      "zh": "容器是什么",
      "en": "What are Containers?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器是什么」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**容器是什么**（What are Containers?）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**容器是什么**（What are Containers?）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "i4ijY3T5gLgNz0XqRipXe": {
      "id": "i4ijY3T5gLgNz0XqRipXe",
      "zh": "为什么需要容器",
      "en": "Why do we need Containers?",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「为什么需要容器」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**为什么需要容器**（Why do we need Containers?）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**为什么需要容器**（Why do we need Containers?）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "3hatcMVLDbMuz73uTx-9P": {
      "id": "3hatcMVLDbMuz73uTx-9P",
      "zh": "裸机、虚拟机与容器对比",
      "en": "Bare Metal vs VMs vs Containers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「裸机、虚拟机与容器对比」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**裸机、虚拟机与容器对比**（Bare Metal vs VMs vs Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**裸机、虚拟机与容器对比**（Bare Metal vs VMs vs Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "43drPbTwPqJQPyzwYUdBT": {
      "id": "43drPbTwPqJQPyzwYUdBT",
      "zh": "Docker and OCI（命令）",
      "en": "Docker and OCI",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Docker and OCI（命令）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Docker and OCI（命令）**（Docker and OCI）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Docker and OCI（命令）**（Docker and OCI）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "mw-weCutd2ECKlx2DE_ZJ": {
      "id": "mw-weCutd2ECKlx2DE_ZJ",
      "zh": "Package Managers（技术术语）",
      "en": "Package Managers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Package Managers（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Package Managers（技术术语）**（Package Managers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Package Managers（技术术语）**（Package Managers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "uKjB2qntFTpPuYUT9sdxd": {
      "id": "uKjB2qntFTpPuYUT9sdxd",
      "zh": "Users / Groups Permissions（技术术语）",
      "en": "Users / Groups Permissions",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Users / Groups Permissions（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Users / Groups Permissions（技术术语）**（Users / Groups Permissions）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Users / Groups Permissions（技术术语）**（Users / Groups Permissions）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "W5kX5jn49hghRgkEw6_S3": {
      "id": "W5kX5jn49hghRgkEw6_S3",
      "zh": "Shell Commands（技术术语）",
      "en": "Shell Commands",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Shell Commands（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Shell Commands（技术术语）**（Shell Commands）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Shell Commands（技术术语）**（Shell Commands）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "InlMtuaUJ9EXO-OD9x1jj": {
      "id": "InlMtuaUJ9EXO-OD9x1jj",
      "zh": "Shell Scripting（技术术语）",
      "en": "Shell Scripting",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Shell Scripting（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Shell Scripting（技术术语）**（Shell Scripting）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Shell Scripting（技术术语）**（Shell Scripting）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "XxT9UUjbKW1ARyERSLH_W": {
      "id": "XxT9UUjbKW1ARyERSLH_W",
      "zh": "Programming Languages（技术术语）",
      "en": "Programming Languages",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Programming Languages（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Programming Languages（技术术语）**（Programming Languages）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Programming Languages（技术术语）**（Programming Languages）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "EqYWfBL5l5OOquok_OvOW": {
      "id": "EqYWfBL5l5OOquok_OvOW",
      "zh": "Application架构",
      "en": "Application Architecture",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Application架构」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Application架构**（Application Architecture）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Application架构**（Application Architecture）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "jrH1qE6EnFXL4fTyYU8gR": {
      "id": "jrH1qE6EnFXL4fTyYU8gR",
      "zh": "Underlying Technologies（技术术语）",
      "en": "Underlying Technologies",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Underlying Technologies（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Underlying Technologies（技术术语）**（Underlying Technologies）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Underlying Technologies（技术术语）**（Underlying Technologies）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "BvV8VCX39wRB-g8WvGF1g": {
      "id": "BvV8VCX39wRB-g8WvGF1g",
      "zh": "Namespaces（技术术语）",
      "en": "Namespaces",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Namespaces（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Namespaces（技术术语）**（Namespaces）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Namespaces（技术术语）**（Namespaces）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "fRl4EfNwlBiidzn3IV34-": {
      "id": "fRl4EfNwlBiidzn3IV34-",
      "zh": "cgroups（技术术语）",
      "en": "cgroups",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「cgroups（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**cgroups（技术术语）**（cgroups）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**cgroups（技术术语）**（cgroups）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "vEUfw_vobshuZI0-q8RZo": {
      "id": "vEUfw_vobshuZI0-q8RZo",
      "zh": "UNION 联合查询Filesystems",
      "en": "Union Filesystems",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「UNION 联合查询Filesystems」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**UNION 联合查询Filesystems**（Union Filesystems）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**UNION 联合查询Filesystems**（Union Filesystems）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "01nDXqxVdMv4SeXc0nYHH": {
      "id": "01nDXqxVdMv4SeXc0nYHH",
      "zh": "安装与配置",
      "en": "Installation / Setup",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「安装与配置」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**安装与配置**（Installation / Setup）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**安装与配置**（Installation / Setup）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "NCdsPRhJy7UtQFNLo1J1f": {
      "id": "NCdsPRhJy7UtQFNLo1J1f",
      "zh": "Docker Desktop (Win/Mac/Linux)（命令）",
      "en": "Docker Desktop (Win/Mac/Linux)",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Docker Desktop (Win/Mac/Linux)（命令）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Docker Desktop (Win/Mac/Linux)（命令）**（Docker Desktop (Win/Mac/Linux)）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Docker Desktop (Win/Mac/Linux)（命令）**（Docker Desktop (Win/Mac/Linux)）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "0NKqLUWtJMlXn-m6wpA6f": {
      "id": "0NKqLUWtJMlXn-m6wpA6f",
      "zh": "Docker Engine ( Linux )（命令）",
      "en": "Docker Engine ( Linux )",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Docker Engine ( Linux )（命令）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Docker Engine ( Linux )（命令）**（Docker Engine ( Linux )）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Docker Engine ( Linux )（命令）**（Docker Engine ( Linux )）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "kIqx7Inf50mE9W0juwNBz": {
      "id": "kIqx7Inf50mE9W0juwNBz",
      "zh": "基础ofDocker",
      "en": "Basics of Docker",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「基础ofDocker」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**基础ofDocker**（Basics of Docker）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**基础ofDocker**（Basics of Docker）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "uUPYXmwu27SBPqKZx6U_q": {
      "id": "uUPYXmwu27SBPqKZx6U_q",
      "zh": "数据持久化",
      "en": "Data Persistence",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「数据持久化」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**数据持久化**（Data Persistence）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**数据持久化**（Data Persistence）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "086zZYjtzdCaDHm-MkSqg": {
      "id": "086zZYjtzdCaDHm-MkSqg",
      "zh": "Ephemeral容器Filesystem",
      "en": "Ephemeral Container Filesystem",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Ephemeral容器Filesystem」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Ephemeral容器Filesystem**（Ephemeral Container Filesystem）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Ephemeral容器Filesystem**（Ephemeral Container Filesystem）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "woemCQmWTR-hIoWAci3d5": {
      "id": "woemCQmWTR-hIoWAci3d5",
      "zh": "Volume Mounts（技术术语）",
      "en": "Volume Mounts",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Volume Mounts（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Volume Mounts（技术术语）**（Volume Mounts）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Volume Mounts（技术术语）**（Volume Mounts）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "wZcCW1ojGzUakHCv2AaI1": {
      "id": "wZcCW1ojGzUakHCv2AaI1",
      "zh": "Bind Mounts（技术术语）",
      "en": "Bind Mounts",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Bind Mounts（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Bind Mounts（技术术语）**（Bind Mounts）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Bind Mounts（技术术语）**（Bind Mounts）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "LShK3-1EGGuXnEvdScFR7": {
      "id": "LShK3-1EGGuXnEvdScFR7",
      "zh": "使用3rdParty容器镜像",
      "en": "Using 3rd Party Container Images",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「使用3rdParty容器镜像」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**使用3rdParty容器镜像**（Using 3rd Party Container Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**使用3rdParty容器镜像**（Using 3rd Party Container Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "jKSE_wKYf4P9wnSh_LkMi": {
      "id": "jKSE_wKYf4P9wnSh_LkMi",
      "zh": "数据库",
      "en": "Databases",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "story": "学习「数据库」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**数据库**（Databases）。它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 把表看成规则严格的表格：列有类型，行是记录，索引是目录，事务保证一组操作的边界。",
      "why": "它解决的是“如何用结构化方式定义、查询和修改关系型数据”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
    "YzpB7rgSR4ueQRLa0bRWa": {
      "id": "YzpB7rgSR4ueQRLa0bRWa",
      "zh": "命令LineUtilities",
      "en": "Command Line Utilities",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「命令LineUtilities」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**命令LineUtilities**（Command Line Utilities）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**命令LineUtilities**（Command Line Utilities）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "5OEfBQaYNOCi999x6QUqW": {
      "id": "5OEfBQaYNOCi999x6QUqW",
      "zh": "构建容器镜像",
      "en": "Building Container Images",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「构建容器镜像」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**构建容器镜像**（Building Container Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**构建容器镜像**（Building Container Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "yGRQcx64S-yBGEoOeMc55": {
      "id": "yGRQcx64S-yBGEoOeMc55",
      "zh": "Dockerfile 文件",
      "en": "Dockerfiles",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Dockerfile 文件」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Dockerfile 文件**（Dockerfiles）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Dockerfile 文件**（Dockerfiles）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "frshJqVMP8D7o_7tMZMPI": {
      "id": "frshJqVMP8D7o_7tMZMPI",
      "zh": "高效层缓存",
      "en": "Efficient Layer Caching",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "story": "学习「高效层缓存」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**高效层缓存**（Efficient Layer Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "why": "它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**高效层缓存**（Efficient Layer Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。"
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
    "-8wAzF6_3gruiM3VYMvB0": {
      "id": "-8wAzF6_3gruiM3VYMvB0",
      "zh": "镜像Size与安全",
      "en": "Image Size and Security",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「镜像Size与安全」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**镜像Size与安全**（Image Size and Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**镜像Size与安全**（Image Size and Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "3VKPiMfbGBxv9m_SljIQV": {
      "id": "3VKPiMfbGBxv9m_SljIQV",
      "zh": "容器Registries",
      "en": "Container Registries",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器Registries」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**容器Registries**（Container Registries）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**容器Registries**（Container Registries）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "rxVR62_yXIjc-L4GFSV6u": {
      "id": "rxVR62_yXIjc-L4GFSV6u",
      "zh": "Docker Hub 镜像仓库",
      "en": "Dockerhub",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Docker Hub 镜像仓库」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Docker Hub 镜像仓库**（Dockerhub）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Docker Hub 镜像仓库**（Dockerhub）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "Vs4WQwgJFhA63U9Gf2ym0": {
      "id": "Vs4WQwgJFhA63U9Gf2ym0",
      "zh": "镜像Tagging最佳实践",
      "en": "Image Tagging Best Practices",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「镜像Tagging最佳实践」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**镜像Tagging最佳实践**（Image Tagging Best Practices）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**镜像Tagging最佳实践**（Image Tagging Best Practices）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "fh5aERX7c-lY9FPsmftoF": {
      "id": "fh5aERX7c-lY9FPsmftoF",
      "zh": "其他镜像仓库（GHCR/ECR/GCR/ACR 等）",
      "en": "Others (ghcr, ecr, gcr, acr, etc)",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「其他镜像仓库（GHCR/ECR/GCR/ACR 等）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**其他镜像仓库（GHCR/ECR/GCR/ACR 等）**（Others (ghcr, ecr, gcr, acr, etc)）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**其他镜像仓库（GHCR/ECR/GCR/ACR 等）**（Others (ghcr, ecr, gcr, acr, etc)）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "z2eeBXPzo-diQ67Fcfyhc": {
      "id": "z2eeBXPzo-diQ67Fcfyhc",
      "zh": "运行容器",
      "en": "Running Containers",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「运行容器」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**运行容器**（Running Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**运行容器**（Running Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "6eu5NRA1sJuaHTlHtNurc": {
      "id": "6eu5NRA1sJuaHTlHtNurc",
      "zh": "docker run（命令）",
      "en": "docker run",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「docker run（命令）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**docker run（命令）**（docker run）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**docker run（命令）**（docker run）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "jjA9E0J8N2frfeJCNtA1m": {
      "id": "jjA9E0J8N2frfeJCNtA1m",
      "zh": "docker compose（命令）",
      "en": "docker compose",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「docker compose（命令）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**docker compose（命令）**（docker compose）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**docker compose（命令）**（docker compose）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "mAaEz-bwB5DLaBbOSYGMn": {
      "id": "mAaEz-bwB5DLaBbOSYGMn",
      "zh": "Runtime Configuration Options（技术术语）",
      "en": "Runtime Configuration Options",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Runtime Configuration Options（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Runtime Configuration Options（技术术语）**（Runtime Configuration Options）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Runtime Configuration Options（技术术语）**（Runtime Configuration Options）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "78YFahP3Fg-c27reLkuK4": {
      "id": "78YFahP3Fg-c27reLkuK4",
      "zh": "容器安全",
      "en": "Container Security",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器安全」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**容器安全**（Container Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**容器安全**（Container Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "vYug8kcwrMoWf8ft4UDNI": {
      "id": "vYug8kcwrMoWf8ft4UDNI",
      "zh": "Runtime安全",
      "en": "Runtime Security",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Runtime安全」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Runtime安全**（Runtime Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Runtime安全**（Runtime Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "M5UG-ZcyhBPbksZd0ZdNt": {
      "id": "M5UG-ZcyhBPbksZd0ZdNt",
      "zh": "镜像安全",
      "en": "Image Security",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「镜像安全」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**镜像安全**（Image Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**镜像安全**（Image Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "b-LwyYiegbF0jIrn7HYRv": {
      "id": "b-LwyYiegbF0jIrn7HYRv",
      "zh": "Docker CLI（命令）",
      "en": "Docker CLI",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Docker CLI（命令）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Docker CLI（命令）**（Docker CLI）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Docker CLI（命令）**（Docker CLI）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "3Nsg-F3wMKEzEsXw1MBZv": {
      "id": "3Nsg-F3wMKEzEsXw1MBZv",
      "zh": "镜像",
      "en": "Images",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「镜像」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**镜像**（Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**镜像**（Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "jhwe-xfVc-C7qy8YuS5dZ": {
      "id": "jhwe-xfVc-C7qy8YuS5dZ",
      "zh": "容器",
      "en": "Containers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「容器」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**容器**（Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
    "eHtVLB6v3h7hatJb-9cZK": {
      "id": "eHtVLB6v3h7hatJb-9cZK",
      "zh": "Volumes（技术术语）",
      "en": "Volumes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Volumes（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Volumes（技术术语）**（Volumes）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Volumes（技术术语）**（Volumes）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "w5QjzvOaciK2rotOkjvjQ": {
      "id": "w5QjzvOaciK2rotOkjvjQ",
      "zh": "Networks（技术术语）",
      "en": "Networks",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Networks（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Networks（技术术语）**（Networks）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Networks（技术术语）**（Networks）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "hHXTth0ZP8O-iMGR9xfu9": {
      "id": "hHXTth0ZP8O-iMGR9xfu9",
      "zh": "Developer Experience（技术术语）",
      "en": "Developer Experience",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Developer Experience（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Developer Experience（技术术语）**（Developer Experience）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Developer Experience（技术术语）**（Developer Experience）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "4p5d3rzCHy4vjg2PRX-2k": {
      "id": "4p5d3rzCHy4vjg2PRX-2k",
      "zh": "Hot Reloading（技术术语）",
      "en": "Hot Reloading",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Hot Reloading（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Hot Reloading（技术术语）**（Hot Reloading）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Hot Reloading（技术术语）**（Hot Reloading）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "LiAV9crrTHhLqeZhD25a2": {
      "id": "LiAV9crrTHhLqeZhD25a2",
      "zh": "Debuggers（技术术语）",
      "en": "Debuggers",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Debuggers（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Debuggers（技术术语）**（Debuggers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Debuggers（技术术语）**（Debuggers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "Kmyo1_Mor9WHLkRhNShRZ": {
      "id": "Kmyo1_Mor9WHLkRhNShRZ",
      "zh": "Tests（技术术语）",
      "en": "Tests",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Tests（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Tests（技术术语）**（Tests）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Tests（技术术语）**（Tests）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "oyqw4tr-taZcxt5kREh1g": {
      "id": "oyqw4tr-taZcxt5kREh1g",
      "zh": "持续集成",
      "en": "Continuous Integration",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「持续集成」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**持续集成**（Continuous Integration）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**持续集成**（Continuous Integration）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "qXOGqORi3EdqwsP9Uhi9m": {
      "id": "qXOGqORi3EdqwsP9Uhi9m",
      "zh": "Deploying容器",
      "en": "Deploying Containers",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Deploying容器」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Deploying容器**（Deploying Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Deploying容器**（Deploying Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "PP_RRBo_pThe2mgf6xzMP": {
      "id": "PP_RRBo_pThe2mgf6xzMP",
      "zh": "PaaS Options（技术术语）",
      "en": "PaaS Options",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「PaaS Options（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**PaaS Options（技术术语）**（PaaS Options）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**PaaS Options（技术术语）**（PaaS Options）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "RqXpX2XabtHYVjgg1EZR_": {
      "id": "RqXpX2XabtHYVjgg1EZR_",
      "zh": "Kubernetes（技术术语）",
      "en": "Kubernetes",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Kubernetes（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Kubernetes（技术术语）**（Kubernetes）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Kubernetes（技术术语）**（Kubernetes）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "r1eJZDZYouUjnGwAtRbyU": {
      "id": "r1eJZDZYouUjnGwAtRbyU",
      "zh": "Nomad（技术术语）",
      "en": "Nomad",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Nomad（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Nomad（技术术语）**（Nomad）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Nomad（技术术语）**（Nomad）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    "ks6PFN-0Z9zH7gtWaWgxz": {
      "id": "ks6PFN-0Z9zH7gtWaWgxz",
      "zh": "Docker Swarm（命令）",
      "en": "Docker Swarm",
      "level": "core",
      "nodeType": "subtopic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Docker Swarm（命令）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Docker Swarm（命令）**（Docker Swarm）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
    "9NuHwfytnUTpeVmnMpZZC": {
      "id": "9NuHwfytnUTpeVmnMpZZC",
      "zh": "Networking（技术术语）",
      "en": "Networking",
      "level": "core",
      "nodeType": "topic",
      "analogy": "容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "story": "学习「Networking（技术术语）」时，先把它放进 Docker 容器化 的真实场景，而不是孤立背术语。",
      "what": "**Networking（技术术语）**（Networking）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "why": "它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 掌握它后，你在 Docker 容器化 里能独立实现和排障，而不是只会名词解释。",
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
          "body": "**Networking（技术术语）**（Networking）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。"
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
    }
  },
  "lessons": {
    "Py9nst2FDJ1_hoXeX_qSF": {
      "scene": "学习「入门介绍」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "入门介绍（Introduction）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「入门介绍」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "74JxgfJ_1qmVNZ_QRp9Ne": {
      "scene": "学习「容器是什么」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "容器是什么（What are Containers?）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「容器是什么」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "i4ijY3T5gLgNz0XqRipXe": {
      "scene": "学习「为什么需要容器」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "为什么需要容器（Why do we need Containers?）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「为什么需要容器」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "3hatcMVLDbMuz73uTx-9P": {
      "scene": "学习「裸机、虚拟机与容器对比」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "裸机、虚拟机与容器对比（Bare Metal vs VMs vs Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「裸机、虚拟机与容器对比」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "43drPbTwPqJQPyzwYUdBT": {
      "scene": "学习「Docker and OCI（命令）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Docker and OCI（命令）（Docker and OCI）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Docker and OCI（命令）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "mw-weCutd2ECKlx2DE_ZJ": {
      "scene": "学习「Package Managers（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Package Managers（技术术语）（Package Managers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Package Managers（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "uKjB2qntFTpPuYUT9sdxd": {
      "scene": "学习「Users / Groups Permissions（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Users / Groups Permissions（技术术语）（Users / Groups Permissions）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Users / Groups Permissions（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "W5kX5jn49hghRgkEw6_S3": {
      "scene": "学习「Shell Commands（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Shell Commands（技术术语）（Shell Commands）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Shell Commands（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "InlMtuaUJ9EXO-OD9x1jj": {
      "scene": "学习「Shell Scripting（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Shell Scripting（技术术语）（Shell Scripting）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Shell Scripting（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "XxT9UUjbKW1ARyERSLH_W": {
      "scene": "学习「Programming Languages（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Programming Languages（技术术语）（Programming Languages）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Programming Languages（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "EqYWfBL5l5OOquok_OvOW": {
      "scene": "学习「Application架构」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Application架构（Application Architecture）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Application架构」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "jrH1qE6EnFXL4fTyYU8gR": {
      "scene": "学习「Underlying Technologies（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Underlying Technologies（技术术语）（Underlying Technologies）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Underlying Technologies（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "BvV8VCX39wRB-g8WvGF1g": {
      "scene": "学习「Namespaces（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Namespaces（技术术语）（Namespaces）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Namespaces（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "fRl4EfNwlBiidzn3IV34-": {
      "scene": "学习「cgroups（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "cgroups（技术术语）（cgroups）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「cgroups（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "vEUfw_vobshuZI0-q8RZo": {
      "scene": "学习「UNION 联合查询Filesystems」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "UNION 联合查询Filesystems（Union Filesystems）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「UNION 联合查询Filesystems」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "01nDXqxVdMv4SeXc0nYHH": {
      "scene": "学习「安装与配置」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "安装与配置（Installation / Setup）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「安装与配置」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "NCdsPRhJy7UtQFNLo1J1f": {
      "scene": "学习「Docker Desktop (Win/Mac/Linux)（命令）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Docker Desktop (Win/Mac/Linux)（命令）（Docker Desktop (Win/Mac/Linux)）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Docker Desktop (Win/Mac/Linux)（命令）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "0NKqLUWtJMlXn-m6wpA6f": {
      "scene": "学习「Docker Engine ( Linux )（命令）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Docker Engine ( Linux )（命令）（Docker Engine ( Linux )）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Docker Engine ( Linux )（命令）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "kIqx7Inf50mE9W0juwNBz": {
      "scene": "学习「基础ofDocker」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "基础ofDocker（Basics of Docker）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「基础ofDocker」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "uUPYXmwu27SBPqKZx6U_q": {
      "scene": "学习「数据持久化」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "数据持久化（Data Persistence）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「数据持久化」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "086zZYjtzdCaDHm-MkSqg": {
      "scene": "学习「Ephemeral容器Filesystem」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Ephemeral容器Filesystem（Ephemeral Container Filesystem）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Ephemeral容器Filesystem」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "woemCQmWTR-hIoWAci3d5": {
      "scene": "学习「Volume Mounts（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Volume Mounts（技术术语）（Volume Mounts）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Volume Mounts（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "wZcCW1ojGzUakHCv2AaI1": {
      "scene": "学习「Bind Mounts（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Bind Mounts（技术术语）（Bind Mounts）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Bind Mounts（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "LShK3-1EGGuXnEvdScFR7": {
      "scene": "学习「使用3rdParty容器镜像」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "使用3rdParty容器镜像（Using 3rd Party Container Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「使用3rdParty容器镜像」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "jKSE_wKYf4P9wnSh_LkMi": {
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
    "YzpB7rgSR4ueQRLa0bRWa": {
      "scene": "学习「命令LineUtilities」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "命令LineUtilities（Command Line Utilities）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「命令LineUtilities」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "5OEfBQaYNOCi999x6QUqW": {
      "scene": "学习「构建容器镜像」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "构建容器镜像（Building Container Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「构建容器镜像」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "yGRQcx64S-yBGEoOeMc55": {
      "scene": "学习「Dockerfile 文件」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Dockerfile 文件（Dockerfiles）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Dockerfile 文件」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "frshJqVMP8D7o_7tMZMPI": {
      "scene": "学习「高效层缓存」：缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
      "core": "高效层缓存（Efficient Layer Caching）。它解决的是“把高频数据放到更快的位置，减少数据库或下游压力”的问题。 缓存不是数据库替身，而是请求链路上的加速层；重点永远是命中率、过期策略和一致性。",
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
      "confusion": "容易混淆的是：会说「高效层缓存」不等于会用。重点看 能否缓存 → key/TTL → cache-aside → 命中率 这条链路。",
      "experiment": "用一个接口模拟“先查 Redis，未命中再查数据库”，设置 TTL 后观察第一次和第二次请求耗时差异。"
    },
    "-8wAzF6_3gruiM3VYMvB0": {
      "scene": "学习「镜像Size与安全」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "镜像Size与安全（Image Size and Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「镜像Size与安全」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "3VKPiMfbGBxv9m_SljIQV": {
      "scene": "学习「容器Registries」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "容器Registries（Container Registries）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「容器Registries」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "rxVR62_yXIjc-L4GFSV6u": {
      "scene": "学习「Docker Hub 镜像仓库」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Docker Hub 镜像仓库（Dockerhub）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Docker Hub 镜像仓库」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "Vs4WQwgJFhA63U9Gf2ym0": {
      "scene": "学习「镜像Tagging最佳实践」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "镜像Tagging最佳实践（Image Tagging Best Practices）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「镜像Tagging最佳实践」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "fh5aERX7c-lY9FPsmftoF": {
      "scene": "学习「其他镜像仓库（GHCR/ECR/GCR/ACR 等）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "其他镜像仓库（GHCR/ECR/GCR/ACR 等）（Others (ghcr, ecr, gcr, acr, etc)）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「其他镜像仓库（GHCR/ECR/GCR/ACR 等）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "z2eeBXPzo-diQ67Fcfyhc": {
      "scene": "学习「运行容器」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "运行容器（Running Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「运行容器」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "6eu5NRA1sJuaHTlHtNurc": {
      "scene": "学习「docker run（命令）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "docker run（命令）（docker run）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「docker run（命令）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "jjA9E0J8N2frfeJCNtA1m": {
      "scene": "学习「docker compose（命令）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "docker compose（命令）（docker compose）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「docker compose（命令）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "mAaEz-bwB5DLaBbOSYGMn": {
      "scene": "学习「Runtime Configuration Options（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Runtime Configuration Options（技术术语）（Runtime Configuration Options）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Runtime Configuration Options（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "78YFahP3Fg-c27reLkuK4": {
      "scene": "学习「容器安全」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "容器安全（Container Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「容器安全」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "vYug8kcwrMoWf8ft4UDNI": {
      "scene": "学习「Runtime安全」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Runtime安全（Runtime Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Runtime安全」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "M5UG-ZcyhBPbksZd0ZdNt": {
      "scene": "学习「镜像安全」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "镜像安全（Image Security）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「镜像安全」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "b-LwyYiegbF0jIrn7HYRv": {
      "scene": "学习「Docker CLI（命令）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Docker CLI（命令）（Docker CLI）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Docker CLI（命令）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "3Nsg-F3wMKEzEsXw1MBZv": {
      "scene": "学习「镜像」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "镜像（Images）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「镜像」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "jhwe-xfVc-C7qy8YuS5dZ": {
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
    "eHtVLB6v3h7hatJb-9cZK": {
      "scene": "学习「Volumes（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Volumes（技术术语）（Volumes）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Volumes（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "w5QjzvOaciK2rotOkjvjQ": {
      "scene": "学习「Networks（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Networks（技术术语）（Networks）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Networks（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "hHXTth0ZP8O-iMGR9xfu9": {
      "scene": "学习「Developer Experience（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Developer Experience（技术术语）（Developer Experience）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Developer Experience（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "4p5d3rzCHy4vjg2PRX-2k": {
      "scene": "学习「Hot Reloading（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Hot Reloading（技术术语）（Hot Reloading）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Hot Reloading（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "LiAV9crrTHhLqeZhD25a2": {
      "scene": "学习「Debuggers（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Debuggers（技术术语）（Debuggers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Debuggers（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "Kmyo1_Mor9WHLkRhNShRZ": {
      "scene": "学习「Tests（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Tests（技术术语）（Tests）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Tests（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "oyqw4tr-taZcxt5kREh1g": {
      "scene": "学习「持续集成」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "持续集成（Continuous Integration）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「持续集成」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "qXOGqORi3EdqwsP9Uhi9m": {
      "scene": "学习「Deploying容器」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Deploying容器（Deploying Containers）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Deploying容器」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "PP_RRBo_pThe2mgf6xzMP": {
      "scene": "学习「PaaS Options（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "PaaS Options（技术术语）（PaaS Options）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「PaaS Options（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "RqXpX2XabtHYVjgg1EZR_": {
      "scene": "学习「Kubernetes（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Kubernetes（技术术语）（Kubernetes）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Kubernetes（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "r1eJZDZYouUjnGwAtRbyU": {
      "scene": "学习「Nomad（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Nomad（技术术语）（Nomad）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Nomad（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    },
    "ks6PFN-0Z9zH7gtWaWgxz": {
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
    "9NuHwfytnUTpeVmnMpZZC": {
      "scene": "学习「Networking（技术术语）」：容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
      "core": "Networking（技术术语）（Networking）。它解决的是“如何把应用和运行依赖打包成可重复运行的环境”的问题。 容器像一个轻量运行盒子：镜像负责打包，容器负责运行，网络/卷/环境变量负责和外界连接。",
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
      "confusion": "容易混淆的是：会说「Networking（技术术语）」不等于会用。重点看 Dockerfile → docker build → docker run → logs 排障 这条链路。",
      "experiment": "写一个最小 Dockerfile，把本地服务构建成镜像并运行；再用 docker logs/exec/inspect 查看它的状态。"
    }
  }
};

export const stages = data.stages as Stage[];
export const nodes = data.nodes;
export const tutorials = data.tutorials as Record<string, Tutorial>;
export const lessons = data.lessons as Record<string, DeepLesson>;
